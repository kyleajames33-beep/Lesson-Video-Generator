// Module 7 coded molecule kit (first built for M7 C01; later M7 lessons import it). README for Claude:
// - Geometry helpers: zig() makes skeletal zigzag points; line() makes a straight row; off() offsets a point.
// - Skel: skeletal (or carbon-letter) drawing from points and bonds; bonds draw on in order; double and triple bonds
//   draw parallel strokes (the extra stroke of a double bond sits on the inside of the zigzag). Per-bond colour.
//   `move` lets the second stroke of a double bond slide from one bond to the next (but-1-ene to but-2-ene).
// - CLabels: carbon letters ("C") on points, for the carbon-skeleton style used to trace chains.
// - Trace: a pale blue highlighter that runs along a path of points, with a carbon tally.
// - Locants: numbers that pop along a chain in numbering order; `ghost` draws them grey (the wrong end).
// - HGhosts / ghostDirs: grey implied-H ghosts on a skeletal carbon, one per missing bond.
// - NameBuilder: the three-slot strip "branches | stem | ending", coloured like what each part describes.
// - FullMol: atoms (C, H) and bonds for a full structural formula, with per-atom timing and moving positions.
// - BallStick: an ink ball-and-stick using the projection maths copied from the frozen legacy engine3d.ts
//   (rotate, weak-perspective project, depthLerp, painter's sort). The legacy file is not imported or edited.
// - RuleChip, AnswerChip, Tag: board text pieces. Colours: skeleton ink, H soft grey, main chain pale blue, branches
//   amber, multiple bonds teal, locants navy.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Fade, INK, INK_SOFT, Sx, TEAL, clamp01, mw, smooth} from '../chem-m6-c01/parts';
import {prog} from '../../kit';

export const CHAIN = '#bfdcf2', CHAIN_INK = '#2d6f9e';
export const BRANCH = AMBER, BRANCH_INK = AMBER_INK;
export const MULTI = TEAL;
export const HGREY = '#9a948a';
export const NAVY = '#24407a';
export const CARDC = '#fffdf8';
/** Oxygen (red-brown, M7 C02 on) and the bonding-direction lobes / hydrogen bonds (violet, M7 C02 and C03). */
export const OXY = '#b5583c', OXY_INK = '#8f3f26';
export const VIOLET = '#7a5bb5', VIOLET_SOFT = '#e6ddf5';
export const DISP = '#8fbfe3';
export type V2 = [number, number];
const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- geometry ----------
/** n zigzag points from (x0, y0): step dx along, alternating dy (first point low when up = true, so the second is up). */
export const zig = (n: number, x0: number, y0: number, dx = 120, dy = 70, up = true): V2[] => Array.from({length: n}, (_, i) => [x0 + i * dx, y0 + (i % 2 === (up ? 1 : 0) ? -dy / 2 : dy / 2)]);
export const line = (n: number, x0: number, y0: number, dx = 200): V2[] => Array.from({length: n}, (_, i) => [x0 + i * dx, y0]);
export const off = (p: V2, dx: number, dy: number): V2 => [p[0] + dx, p[1] + dy];
export const lerpV = (a: V2, b: V2, t: number): V2 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
/** A branch point from vertex p, pointing away from its two neighbours (skeletal), length len. */
export const outward = (pts: V2[], i: number, len = 120): V2 => {
	const p = pts[i];
	const ns = [pts[i - 1], pts[i + 1]].filter(Boolean) as V2[];
	let sx = 0, sy = 0;
	for (const n of ns) { const L = Math.hypot(n[0] - p[0], n[1] - p[1]) || 1; sx += (n[0] - p[0]) / L; sy += (n[1] - p[1]) / L; }
	const L = Math.hypot(sx, sy);
	if (L < 1e-3) return [p[0], p[1] - len];
	return [p[0] - (sx / L) * len, p[1] - (sy / L) * len];
};
/** Side of the vertex away from its neighbours: -1 above, +1 below (for locant placement on a zigzag). */
export const sideOf = (pts: V2[], i: number) => (outward(pts, i, 1)[1] < pts[i][1] ? -1 : 1);

// ---------- skeletal bonds ----------
export type Bond = {a: number; b: number; order?: 1 | 2 | 3; color?: string; at?: number};
const unit = (a: V2, b: V2) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / L, (b[1] - a[1]) / L] as V2; };
/** The extra stroke of a double bond, on the side towards `toward` (a point inside the zigzag), shortened at both ends. */
const inner = (a: V2, b: V2, toward: V2 | undefined, gap = 11): [V2, V2] => {
	const [ux, uy] = unit(a, b);
	let nx = -uy, ny = ux;
	if (toward) { const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2; if ((toward[0] - mx) * nx + (toward[1] - my) * ny < 0) { nx = -nx; ny = -ny; } }
	const sh = 0.16;
	const a2: V2 = [a[0] + (b[0] - a[0]) * sh + nx * gap, a[1] + (b[1] - a[1]) * sh + ny * gap];
	const b2: V2 = [b[0] - (b[0] - a[0]) * sh + nx * gap, b[1] - (b[1] - a[1]) * sh + ny * gap];
	return [a2, b2];
};
/**
 * Skeletal drawing. Bonds draw on from `at`, `stagger` frames apart (or at each bond's own `at`). `gapR` leaves room
 * round each point for carbon letters (carbon-skeleton style). `move`: the double bond's second stroke slides from
 * bond index `from` to bond index `to` between frames at and at + dur.
 */
export const Skel: React.FC<{pts: V2[]; bonds: Bond[]; at: number; out?: number; stagger?: number; width?: number; color?: string; o?: number; gapR?: number; move?: {from: number; to: number; at: number; dur?: number}; pulse?: {bond: number; at: number}}> = ({pts, bonds, at, out, stagger = 5, width = 6, color = INK, o = 1, gapR = 0, move, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const mid = (i: number): V2 => { const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]); void i; return [xs.reduce((s, x) => s + x, 0) / xs.length, ys.reduce((s, y) => s + y, 0) / ys.length]; };
	const trim = (a: V2, b: V2): [V2, V2] => { if (!gapR) return [a, b]; const [ux, uy] = unit(a, b); return [[a[0] + ux * gapR, a[1] + uy * gapR], [b[0] - ux * gapR, b[1] - uy * gapR]]; };
	const towardOf = (k: number): V2 | undefined => {
		const bd = bonds[k];
		const nb = bonds.find(o2 => o2 !== bd && (o2.a === bd.a || o2.b === bd.a || o2.a === bd.b || o2.b === bd.b));
		if (!nb) return mid(0);
		const shared = nb.a === bd.a || nb.a === bd.b ? nb.a : nb.b;
		const other = nb.a === shared ? nb.b : nb.a;
		// the inside of the zigzag angle is the side where the neighbouring bond's far atom lies
		return pts[other];
	};
	const mv = move ? smooth(prog(f, move.at, move.dur ?? 26)) : 0;
	return (
		<g opacity={v}>
			{bonds.map((bd, k) => {
				const t0 = bd.at ?? at + k * stagger;
				const [a, b] = trim(pts[bd.a], pts[bd.b]);
				const col = bd.color ?? color;
				const pl = pulse && pulse.bond === k ? 1 + 0.7 * Math.max(0, Math.sin(clamp01((f - pulse.at) / 30) * Math.PI)) : 1;
				const order = bd.order ?? 1;
				const els: React.ReactNode[] = [<DrawPath key="m" d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={t0} dur={10} color={col} width={width * (order > 1 ? pl : 1)} />];
				if (order === 2 && !(move && (move.from === k || move.to === k))) {
					const [a2, b2] = inner(a, b, towardOf(k));
					els.push(<DrawPath key="d" d={`M${a2[0]},${a2[1]} L${b2[0]},${b2[1]}`} at={t0 + 6} dur={10} color={col} width={width * pl} />);
				}
				if (order === 3) {
					const [ux, uy] = unit(a, b);
					const nx = -uy * 11, ny = ux * 11;
					els.push(<DrawPath key="t1" d={`M${a[0] + nx},${a[1] + ny} L${b[0] + nx},${b[1] + ny}`} at={t0 + 4} dur={10} color={col} width={width * 0.8} />);
					els.push(<DrawPath key="t2" d={`M${a[0] - nx},${a[1] - ny} L${b[0] - nx},${b[1] - ny}`} at={t0 + 8} dur={10} color={col} width={width * 0.8} />);
				}
				return <g key={k}>{els}</g>;
			})}
			{move ? (() => {
				const A = bonds[move.from], B = bonds[move.to];
				const [a1, b1] = inner(...trim(pts[A.a], pts[A.b]), towardOf(move.from));
				const [a2, b2] = inner(...trim(pts[B.a], pts[B.b]), towardOf(move.to));
				const p = lerpV(a1, a2, mv), q = lerpV(b1, b2, mv);
				const t0 = A.at ?? at + move.from * stagger;
				return <g opacity={prog(f, t0 + 6, 8)}><line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={MULTI} strokeWidth={width} strokeLinecap="round" /></g>;
			})() : null}
		</g>
	);
};

/** Carbon letters on points (carbon-skeleton style). colorOf(i) picks each letter's colour. */
export const CLabels: React.FC<{pts: V2[]; at: number; out?: number; stagger?: number; size?: number; colorOf?: (i: number) => string; o?: number; el?: (i: number) => string}> = ({pts, at, out, stagger = 4, size = 40, colorOf, o = 1, el}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{pts.map((p, i) => {
				const po = prog(f, at + i * stagger, 10);
				if (po <= 0.01) return null;
				return <g key={i} opacity={po}><circle cx={p[0]} cy={p[1]} r={size * 0.62} fill={CARDC} /><Sx x={p[0]} y={p[1] + size * 0.36} text={el ? el(i) : 'C'} size={size} color={colorOf ? colorOf(i) : INK} anchor="middle" weight={800} at={-1000} /></g>;
			})}
		</g>
	);
};

// ---------- chain tracer ----------
const pathLen = (pts: V2[]) => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
/** Highlighter along a path of points from `at` over `dur`; tally (carbons passed) drawn at `tally`. */
export const Trace: React.FC<{path: V2[]; at: number; dur?: number; out?: number; color?: string; width?: number; tally?: V2; tallyColor?: string; o?: number; label?: string}> = ({path, at, dur = 60, out, color = CHAIN, width = 34, tally, tallyColor = CHAIN_INK, o = 1, label = 'carbons'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const L = pathLen(path);
	const p = clamp01((f - at) / dur);
	let acc = 0, n = 1;
	for (let i = 1; i < path.length; i++) { acc += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); if (acc <= p * L + 0.5) n = i + 1; }
	const d = 'M' + path.map(q => `${q[0]},${q[1]}`).join(' L');
	const tip = (() => { let r = p * L; for (let i = 1; i < path.length; i++) { const s = Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]); if (r <= s) return lerpV(path[i - 1], path[i], s ? r / s : 0); r -= s; } return path[path.length - 1]; })();
	return (
		<g opacity={v}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={`${L} ${L}`} strokeDashoffset={L * (1 - p)} opacity={0.85} />
			{p > 0 && p < 1 ? <circle cx={tip[0]} cy={tip[1]} r={width * 0.42} fill={color} stroke={tallyColor} strokeWidth={2} /> : null}
			{tally ? (
				<g>
					<rect x={tally[0]} y={tally[1]} width={170} height={64} rx={14} fill={CARDC} stroke={tallyColor} strokeWidth={3} />
					<Sx x={tally[0] + 22} y={tally[1] + 46} text={String(n)} size={40} color={tallyColor} weight={800} at={-1000} />
					<Sx x={tally[0] + 62} y={tally[1] + 42} text={label} size={24} color={tallyColor} weight={600} at={-1000} />
				</g>
			) : null}
		</g>
	);
};

// ---------- locants ----------
/** Numbers pop at points in numbering order. offs: per-point offset (default above). ghost: grey (wrong end). */
export const Locants: React.FC<{pts: V2[]; at: number; out?: number; step?: number; offs?: V2[]; dy?: number; ghost?: boolean; size?: number; o?: number; ring?: {i: number; at: number}[]}> = ({pts, at, out, step = 8, offs, dy = -44, ghost = false, size = 30, o = 1, ring = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const col = ghost ? HGREY : NAVY;
	return (
		<g opacity={v}>
			{pts.map((p, i) => {
				const t = at + i * step;
				const po = prog(f, t, 8);
				if (po <= 0.01) return null;
				const q = offs ? off(p, offs[i][0], offs[i][1]) : off(p, 0, dy);
				const pop = 1 + 0.35 * Math.max(0, Math.sin(clamp01((f - t) / 10) * Math.PI));
				const rg = ring.find(r => r.i === i);
				return (
					<g key={i} opacity={po} transform={`translate(${q[0]},${q[1]}) scale(${pop})`}>
						<circle r={size * 0.62} fill={ghost ? '#f1efea' : '#e7edf8'} stroke={col} strokeWidth={2} />
						<Sx x={0} y={size * 0.34} text={String(i + 1)} size={size} color={col} anchor="middle" weight={800} at={-1000} />
						{rg ? <circle r={size * 0.95} fill="none" stroke={ghost ? '#c4432f' : AMBER} strokeWidth={4} opacity={prog(f, rg.at, 8)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Locant offsets for a zigzag: outside each vertex (above an up vertex, below a down vertex). */
export const zigOffs = (pts: V2[], d = 46): V2[] => pts.map((_, i) => [0, sideOf(pts, i) * d]);

// ---------- implied hydrogens ----------
/** Directions (radians) for k ghosts on vertex i, spread round the side away from its bonded neighbours. */
export const ghostDirs = (p: V2, nbrs: V2[], k: number): number[] => {
	let sx = 0, sy = 0;
	for (const n of nbrs) { const L = Math.hypot(n[0] - p[0], n[1] - p[1]) || 1; sx += (n[0] - p[0]) / L; sy += (n[1] - p[1]) / L; }
	const base = Math.hypot(sx, sy) < 1e-3 ? -Math.PI / 2 : Math.atan2(-sy, -sx);
	const spread = k === 1 ? [0] : k === 2 ? [-0.62, 0.62] : [-1.25, 0, 1.25];
	return spread.map(s => base + s);
};
/** Grey H ghosts with short bond strokes on carbon p, popping one by one from `at`. */
export const HGhosts: React.FC<{p: V2; dirs: number[]; at: number; out?: number; step?: number; len?: number; size?: number; o?: number; drop?: {i: number; at: number}}> = ({p, dirs, at, out, step = 6, len = 62, size = 28, o = 1, drop}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{dirs.map((a, i) => {
				const po = prog(f, at + i * step, 8) * (drop && drop.i === i ? 1 - prog(f, drop.at, 10) : 1);
				if (po <= 0.01) return null;
				const c = Math.cos(a), s = Math.sin(a);
				return (
					<g key={i} opacity={po}>
						<line x1={p[0] + c * 12} y1={p[1] + s * 12} x2={p[0] + c * (len - 18)} y2={p[1] + s * (len - 18)} stroke={HGREY} strokeWidth={3} strokeDasharray="5 4" strokeLinecap="round" />
						<Sx x={p[0] + c * len} y={p[1] + s * len + size * 0.35} text="H" size={size} color={HGREY} anchor="middle" weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** Ghosts for vertex i of a molecule given its bond list: count = 4 minus the bond orders at that carbon. */
export const hCount = (bonds: Bond[], i: number) => 4 - bonds.filter(b => b.a === i || b.b === i).reduce((s, b) => s + (b.order ?? 1), 0);
export const nbrsOf = (pts: V2[], bonds: Bond[], i: number): V2[] => bonds.filter(b => b.a === i || b.b === i).map(b => pts[b.a === i ? b.b : b.a]);

// ---------- name builder ----------
export type Fill = {slot: 0 | 1 | 2; text: string; at: number};
export const SLOT_LABELS = ['branches', 'stem', 'ending'];
export const SLOT_COL: [string, string][] = [[BRANCH_INK, '#fff3d6'], [CHAIN_INK, '#e3f0fa'], [TEAL, '#dff2ef']];
/**
 * The name builder strip. Slots show the latest fill at or before the frame (crossfading); empty slots show a dash.
 * glow: slot glows between from and to. ticks: a green tick lands beside a slot. joined: also writes the whole name
 * under the strip from that frame.
 */
export const NameBuilder: React.FC<{x: number; y: number; at: number; out?: number; fills?: Fill[]; glow?: {slot: number; from: number; to?: number}[]; ticks?: {slot: number; at: number}[]; widths?: [number, number, number]; size?: number; o?: number; s?: number; labels?: boolean}> = ({x, y, at, out, fills = [], glow = [], ticks = [], widths = [380, 210, 230], size = 40, o = 1, s = 1, labels = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const H = size * 1.9, gap = 18;
	let cx = x;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			{widths.map((w, i) => {
				const sx = cx;
				cx += w + gap;
				const [ink, fill] = SLOT_COL[i];
				const g = Math.max(0, ...glow.filter(q => q.slot === i).map(q => vis(f, q.from, q.to, 10)));
				const mine = fills.filter(q => q.slot === i).sort((a, b) => a.at - b.at);
				const tk = ticks.find(t => t.slot === i);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={sx - 8} y={y - 8} width={w + 16} height={H + 16} rx={18} fill="#f6d77a" opacity={0.6 * g} /> : null}
						<rect x={sx} y={y} width={w} height={H} rx={14} fill={fill} stroke={ink} strokeWidth={3} />
						{labels ? <Sx x={sx + w / 2} y={y + H + 30} text={SLOT_LABELS[i]} size={22} color={ink} anchor="middle" weight={700} at={-1000} /> : null}
						{(() => {
							const cur = mine.filter(q => f >= q.at);
							const dash = 1 - (cur.length ? prog(f, cur[0].at, 8) : 0);
							return (
								<g>
									{dash > 0.01 ? <line x1={sx + w / 2 - 24} x2={sx + w / 2 + 24} y1={y + H / 2} y2={y + H / 2} stroke={ink} strokeWidth={3} opacity={0.35 * dash} /> : null}
									{mine.map((q, k) => {
										const next = mine[k + 1];
										const qo = prog(f, q.at, 10) * (next ? 1 - prog(f, next.at, 8) : 1);
										if (qo <= 0.01) return null;
										const drop = (1 - smooth(prog(f, q.at, 12))) * -26;
										return <g key={k} opacity={qo} transform={`translate(0,${drop})`}><Sx x={sx + w / 2} y={y + H / 2 + size * 0.36} text={q.text} size={size} color={ink} anchor="middle" weight={800} at={-1000} /></g>;
									})}
								</g>
							);
						})()}
						{tk ? <g opacity={prog(f, tk.at, 8)}><DrawPath d={`M${sx + w - 30},${y - 4} l12,14 l24,-30`} at={tk.at} dur={10} color="#2f8a5b" width={6} /></g> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Screen x of a character offset inside a builder slot's centred text. */
export const slotCharX = (x: number, widths: [number, number, number], slot: number, text: string, upto: number, size = 40, gap = 18) => {
	let sx = x;
	for (let i = 0; i < slot; i++) sx += widths[i] + gap;
	const w = mw(text, size, false, 800);
	return sx + (widths[slot] - w) / 2 + mw(text.slice(0, upto), size, false, 800);
};
export const builderW = (widths: [number, number, number] = [380, 210, 230], gap = 18) => widths[0] + widths[1] + widths[2] + 2 * gap;

// ---------- full structural formula ----------
export type FAtom = {el: 'C' | 'H' | 'O'; p: V2; at: number; to?: V2; moveAt?: number; moveDur?: number; out?: number; color?: string; label?: string};
export type FBond = {a: number; b: number; order?: 1 | 2 | 3; at?: number; out?: number; color?: string};
/** Full structural formula: letters on atoms, bonds between them (trimmed round the letters). Atoms can move. */
export const FullMol: React.FC<{atoms: FAtom[]; bonds: FBond[]; at?: number; out?: number; size?: number; o?: number}> = ({atoms, bonds, at = -1000, out, size = 40, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const pos = (i: number): V2 => { const a = atoms[i]; return a.to && a.moveAt !== undefined ? lerpV(a.p, a.to, smooth(prog(f, a.moveAt, a.moveDur ?? 24))) : a.p; };
	const ao = (i: number) => vis(f, atoms[i].at, atoms[i].out, 10);
	const R = (i: number) => (atoms[i].el === 'H' ? size * 0.42 : size * 0.52);
	return (
		<g opacity={v}>
			{bonds.map((b, k) => {
				const bo = Math.min(ao(b.a), ao(b.b)) * vis(f, b.at ?? Math.max(atoms[b.a].at, atoms[b.b].at), b.out, 10);
				if (bo <= 0.01) return null;
				const A = pos(b.a), B = pos(b.b);
				const [ux, uy] = unit(A, B);
				const a1: V2 = [A[0] + ux * R(b.a), A[1] + uy * R(b.a)], b1: V2 = [B[0] - ux * R(b.b), B[1] - uy * R(b.b)];
				const col = b.color ?? INK;
				const order = b.order ?? 1;
				const nx = -uy * 8, ny = ux * 8;
				return (
					<g key={k} opacity={bo} stroke={col} strokeWidth={4} strokeLinecap="round">
						{order === 1 ? <line x1={a1[0]} y1={a1[1]} x2={b1[0]} y2={b1[1]} /> : null}
						{order === 2 ? <><line x1={a1[0] + nx} y1={a1[1] + ny} x2={b1[0] + nx} y2={b1[1] + ny} /><line x1={a1[0] - nx} y1={a1[1] - ny} x2={b1[0] - nx} y2={b1[1] - ny} /></> : null}
						{order === 3 ? <><line x1={a1[0]} y1={a1[1]} x2={b1[0]} y2={b1[1]} /><line x1={a1[0] + nx * 1.3} y1={a1[1] + ny * 1.3} x2={b1[0] + nx * 1.3} y2={b1[1] + ny * 1.3} /><line x1={a1[0] - nx * 1.3} y1={a1[1] - ny * 1.3} x2={b1[0] - nx * 1.3} y2={b1[1] - ny * 1.3} /></> : null}
					</g>
				);
			})}
			{atoms.map((a, i) => {
				const op = ao(i);
				if (op <= 0.01) return null;
				const p = pos(i);
				const isH = a.el === 'H';
				return <g key={i} opacity={op}><Sx x={p[0]} y={p[1] + (isH ? size * 0.3 : size * 0.36)} text={a.label ?? a.el} size={isH ? size * 0.82 : size} color={a.color ?? (isH ? HGREY : a.el === 'O' ? OXY_INK : INK)} anchor="middle" weight={isH ? 700 : 800} at={-1000} /></g>;
			})}
		</g>
	);
};
/**
 * Full structural alkane in a straight row: n carbons from (x0, y), spacing sp; branches: methyl carbons hung above or
 * below chain carbon `on`. Returns atoms and bonds; every carbon gets hydrogens to make four bonds. t(i) times atoms.
 */
export const fullAlkane = (n: number, x0: number, y: number, sp: number, branches: {on: number; dir: -1 | 1}[] = [], t: {c: (i: number) => number; h: (i: number) => number} = {c: () => -1000, h: () => -1000}, colors: {branch?: string} = {}) => {
	const atoms: FAtom[] = [], bonds: FBond[] = [];
	const hl = sp * 0.5;
	const C: number[] = [];
	for (let i = 0; i < n; i++) { C.push(atoms.length); atoms.push({el: 'C', p: [x0 + i * sp, y], at: t.c(i)}); }
	for (let i = 1; i < n; i++) bonds.push({a: C[i - 1], b: C[i]});
	const used: Record<number, number[]> = {};
	const B: number[] = [];
	branches.forEach((br, k) => {
		const idx = atoms.length;
		atoms.push({el: 'C', p: [x0 + br.on * sp, y + br.dir * sp * 0.8], at: t.c(n + k), color: colors.branch});
		bonds.push({a: C[br.on], b: idx});
		(used[br.on] ??= []).push(br.dir);
		B.push(idx);
	});
	const addH = (ci: number, p: V2, hi: number) => { const h = atoms.length; atoms.push({el: 'H', p, at: t.h(hi)}); bonds.push({a: ci, b: h}); };
	let hi = 0;
	for (let i = 0; i < n; i++) {
		const [cx] = atoms[C[i]].p;
		const dirs = [-1, 1].filter(d => !(used[i] ?? []).includes(d));
		for (const d of dirs) addH(C[i], [cx, y + d * hl], hi++);
		if (i === 0) addH(C[i], [cx - hl, y], hi++);
		if (i === n - 1) addH(C[i], [cx + hl, y], hi++);
	}
	branches.forEach((br, k) => {
		const [bx, by] = atoms[B[k]].p;
		addH(B[k], [bx - hl, by], hi++);
		addH(B[k], [bx + hl, by], hi++);
		addH(B[k], [bx, by + br.dir * hl], hi++);
	});
	return {atoms, bonds, carbons: C, branchC: B, nH: hi};
};

// ---------- ink ball-and-stick (projection maths copied from the frozen engine3d.ts) ----------
export type Vec3 = readonly [number, number, number];
const CAMERA = 4.2;
export const rotate3 = ([x, y, z]: Vec3, yaw: number, pitch: number): Vec3 => {
	const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
	const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
	return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
};
export const project3 = (p: Vec3, cx: number, cy: number, unitPx: number) => { const s = CAMERA / (CAMERA - p[2]); return {x: cx + p[0] * unitPx * s, y: cy - p[1] * unitPx * s, s, z: p[2]}; };
export const depthLerp = (z: number, far: number, near: number, range = 1) => far + (near - far) * Math.min(1, Math.max(0, (z / range + 1) / 2));
export type Atom3 = {el: 'C' | 'H' | 'O'; p: Vec3};
/** Butane-like chain in 3D: carbons zigzag in the xy plane, hydrogens tetrahedral-ish (two out of plane per CH2). */
export const chain3d = (n: number, bond = 1): {atoms: Atom3[]; bonds: [number, number][]} => {
	const atoms: Atom3[] = [], bonds: [number, number][] = [];
	const dx = bond * 0.82, dy = bond * 0.29;
	const x0 = (-(n - 1) * dx) / 2;
	for (let i = 0; i < n; i++) atoms.push({el: 'C', p: [x0 + i * dx, i % 2 ? dy : -dy, 0]});
	for (let i = 1; i < n; i++) bonds.push([i - 1, i]);
	const hb = 0.62;
	for (let i = 0; i < n; i++) {
		const [x, y] = atoms[i].p;
		const s = i % 2 ? 1 : -1; // in-plane side away from neighbours
		const add = (p: Vec3) => { atoms.push({el: 'H', p}); bonds.push([i, atoms.length - 1]); };
		add([x, y + s * hb * 0.55, hb * 0.82]);
		add([x, y + s * hb * 0.55, -hb * 0.82]);
		if (i === 0) add([x - hb * 0.95, y - s * hb * 0.3 * -1, 0]);
		if (i === n - 1) add([x + hb * 0.95, y - s * hb * 0.3 * -1, 0]);
	}
	return {atoms, bonds};
};
/**
 * The ink ball-and-stick: flat paper-toned atoms with ink outlines, ink bonds, painter-sorted by depth.
 * Optional (M7 C02 on, all backward compatible): orders (per bond 1, 2 or 3: parallel strokes in screen space),
 * bondColors, atomO (per-atom opacity), shift (per-atom 3D offset before rotation, for atoms that float off),
 * bondO (per-bond opacity), glowAtoms (per-atom ring colour).
 */
export const BallStick: React.FC<{atoms: Atom3[]; bonds: [number, number][]; cx: number; cy: number; unitPx: number; yaw: number; pitch: number; o?: number; orders?: number[]; bondColors?: (string | undefined)[]; atomO?: (i: number) => number; shift?: (i: number) => Vec3; bondO?: (k: number) => number; glowAtoms?: (i: number) => string | undefined; scaleR?: number}> = ({atoms, bonds, cx, cy, unitPx, yaw, pitch, o = 1, orders, bondColors, atomO, shift, bondO, glowAtoms, scaleR = 1}) => {
	if (o <= 0.01) return null;
	const P = atoms.map((a, i) => { const d = shift ? shift(i) : ([0, 0, 0] as Vec3); return project3(rotate3([a.p[0] + d[0], a.p[1] + d[1], a.p[2] + d[2]], yaw, pitch), cx, cy, unitPx); });
	const items: {d: number; el: React.ReactNode}[] = [];
	const k0 = unitPx / 230;
	bonds.forEach(([a, b], k) => {
		const pa = P[a], pb = P[b];
		const bo = (bondO ? bondO(k) : 1) * Math.min(atomO ? atomO(a) : 1, atomO ? atomO(b) : 1);
		if (bo <= 0.01) return;
		const ord = orders?.[k] ?? 1;
		const col = bondColors?.[k] ?? INK;
		const sw = 7 * ((pa.s + pb.s) / 2) * Math.max(0.55, k0) * (ord > 1 ? 0.62 : 1);
		const L = Math.hypot(pb.x - pa.x, pb.y - pa.y) || 1;
		const nx = (-(pb.y - pa.y) / L) * sw * 1.25, ny = ((pb.x - pa.x) / L) * sw * 1.25;
		const offs = ord === 1 ? [0] : ord === 2 ? [-0.5, 0.5] : [-1, 0, 1];
		const op = depthLerp((pa.z + pb.z) / 2, 0.5, 1, 1.4) * bo;
		items.push({d: (pa.z + pb.z) / 2 - 0.01, el: <g key={'b' + k} opacity={op}>{offs.map((m, j) => <line key={j} x1={pa.x + nx * m} y1={pa.y + ny * m} x2={pb.x + nx * m} y2={pb.y + ny * m} stroke={col} strokeWidth={sw} strokeLinecap="round" />)}</g>});
	});
	atoms.forEach((a, i) => {
		const p = P[i];
		const ao = atomO ? atomO(i) : 1;
		if (ao <= 0.01) return;
		const r = (a.el === 'C' ? 30 : a.el === 'O' ? 28 : 17) * p.s * Math.max(0.5, k0) * scaleR;
		const fill = a.el === 'C' ? '#4a4540' : a.el === 'O' ? OXY : '#f3ede1';
		const hi = a.el === 'C' ? '#6e675f' : a.el === 'O' ? '#d88a6e' : null;
		const g = glowAtoms ? glowAtoms(i) : undefined;
		items.push({d: p.z, el: <g key={'a' + i} opacity={depthLerp(p.z, 0.6, 1, 1.4) * ao}>{g ? <circle cx={p.x} cy={p.y} r={r * 1.55} fill={g} opacity={0.45} /> : null}<circle cx={p.x} cy={p.y} r={r} fill={fill} stroke={INK} strokeWidth={3 * Math.max(0.6, k0)} />{hi ? <circle cx={p.x - r * 0.3} cy={p.y - r * 0.3} r={r * 0.22} fill={hi} /> : null}</g>});
	});
	return <g opacity={o}>{[...items].sort((x, y) => x.d - y.d).map(q => q.el)}</g>;
};
/** Screen positions of the carbons of a BallStick (for laying a 2D zigzag over them). */
export const projCarbons = (atoms: Atom3[], cx: number, cy: number, unitPx: number, yaw: number, pitch: number): V2[] => atoms.filter(a => a.el === 'C').map(a => { const q = project3(rotate3(a.p, yaw, pitch), cx, cy, unitPx); return [q.x, q.y]; });

// ---------- board text ----------
/** Rule chip at the top left ("Rule 3 of 5: longest chain"). */
export const RuleChip: React.FC<{text: string; at: number; out?: number; x?: number; y?: number; size?: number}> = ({text, at, out, x = 96, y = 112, size = 36}) => {
	const w = mw(text, size, true, 700) + 48;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={size * 1.6} rx={size * 0.8} fill={CARDC} stroke={TEAL} strokeWidth={3.5} />
			<Sx x={x + 24} y={y + size * 1.12} text={text} size={size} color={TEAL} hand at={at} />
		</Fade>
	);
};
/** Answer chip: a green-edged chip with the final name or formula. */
export const AnswerChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; anchor?: 'start' | 'middle'; o?: number}> = ({x, y, text, at, out, size = 40, anchor = 'start', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, false, 800) + 48;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const pop = 1 + 0.12 * Math.max(0, Math.sin(clamp01((f - at) / 12) * Math.PI));
	return (
		<g opacity={v} transform={`translate(${x0 + w / 2},${y + size * 0.8}) scale(${pop}) translate(${-(x0 + w / 2)},${-(y + size * 0.8)})`}>
			<rect x={x0} y={y} width={w} height={size * 1.6} rx={14} fill="#e3f3e9" stroke="#2f8a5b" strokeWidth={3.5} />
			<Sx x={x0 + 24} y={y + size * 1.12} text={text} size={size} color="#1f6b44" weight={800} at={-1000} />
		</g>
	);
};
/** Small grey or coloured tag (Inter). */
export const Tag: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; o?: number}> = ({x, y, text, at, out, color = INK_SOFT, fill = '#f1efea', size = 26, anchor = 'start', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, false, 600) + 32;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	return (
		<g opacity={v} transform={`translate(0,${(1 - prog(f, at, 10)) * 10})`}>
			<rect x={x0} y={y} width={w} height={size * 1.6} rx={size * 0.8} fill={fill} stroke={color} strokeWidth={2} />
			<Sx x={x0 + 16} y={y + size * 1.1} text={text} size={size} color={color} weight={600} at={-1000} />
		</g>
	);
};

/** A crossed classic mistake: grey chip from `at`, red cross at `cross`, optional teal note under it. */
export const Crossed: React.FC<{x: number; y: number; text: string; at: number; cross: number; out?: number; note?: string; size?: number; o?: number}> = ({x, y, text, at, cross, out, note, size = 36, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, true, 700) + 110, h = size + 32;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#f1efea" stroke="#c4432f" strokeWidth={3} />
			<Sx x={x + 26} y={y + size + 6} text={text} size={size} color={INK_SOFT} hand at={-1000} />
			<DrawPath d={`M${x + w - 54},${y + 12} L${x + w - 22},${y + h - 12}`} at={cross + 6} dur={8} color="#c4432f" width={7} />
			<DrawPath d={`M${x + w - 22},${y + 12} L${x + w - 54},${y + h - 12}`} at={cross + 11} dur={8} color="#c4432f" width={7} />
			{note ? <Sx x={x + 8} y={y + h + size + 4} text={note} size={size * 0.9} color={TEAL} hand at={cross + 16} /> : null}
		</g>
	);
};

// ====================== M7 C02 and C03 additions (all new exports; nothing above changes for C01) ======================
// README for Claude:
// - ringPts / ringBonds: skeletal rings (cyclobutane, cyclopentane) for Skel.
// - 3D builders: zig3 (zigzag heavy-atom chain), withH (adds hydrogens by geometry: 'tet' tetrahedral, 'trig' trigonal
//   planar in the plane with normal `normal`, 'lin' linear), branchAt (a branch position on a tetrahedral carbon).
//   Ready molecules: methane3d, ethane3d, ethene3d, ethyne3d, propene3d, propyne3d, alkane3d(n), ethanol3d,
//   methoxymethane3d, isomer3d('2-methylbutane' | '2,2-dimethylpropane' | '2-methylpropane' | '2,3-dimethylbutane').
//   Each returns {atoms, bonds, orders} for BallStick (pass orders; colour multiple bonds with bondColors).
// - Lobes: violet bonding-direction lobes from a 3D centre (the direction spreader); AngleArc: a navy angle arc with a
//   label; Edges: faint outline joining points (tetrahedron or triangle outline).
// - QCardX: the HSC-style question card with extra space after chosen lines (structures beside parts) and underlines.
// - Brace (labelled bracket), Dots (dotted flicker line: dispersion pale blue, hydrogen bond violet), Place
//   (keyframed move and scale of a group), NameLbl (coloured name parts), Stamp (the "=" duplicate stamp).
export const ringPts = (n: number, cx: number, cy: number, r: number, rot = -Math.PI / 2): V2[] => Array.from({length: n}, (_, i) => [cx + r * Math.cos(rot + (i * 2 * Math.PI) / n), cy + r * Math.sin(rot + (i * 2 * Math.PI) / n)]);
export const ringBonds = (n: number): Bond[] => Array.from({length: n}, (_, i) => ({a: i, b: (i + 1) % n}));

// ---------- 3D geometry ----------
const a3 = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const s3 = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const k3 = (a: Vec3, k: number): Vec3 => [a[0] * k, a[1] * k, a[2] * k];
const d3 = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const x3 = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const n3 = (a: Vec3): Vec3 => { const L = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / L, a[1] / L, a[2] / L]; };
export const lerp3 = (a: Vec3, b: Vec3, t: number): Vec3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const add3 = a3;
export const TET: Vec3[] = [n3([0, 1, 0.0001]), n3([0.943, -0.333, 0]), n3([-0.471, -0.333, 0.816]), n3([-0.471, -0.333, -0.816])];
const perpHint = (n: Vec3, hint: Vec3): Vec3 => { const u = s3(hint, k3(n, d3(hint, n))); return Math.hypot(...u) < 1e-3 ? n3(s3([0, 1, 0], k3(n, n[1]))) : n3(u); };
/** Free directions completing a tetrahedron round a centre whose neighbours lie along unit vectors nbr. */
export const freeDirs = (nbr: Vec3[], k: number, hint: Vec3 = [0, 1, 0]): Vec3[] => {
	if (nbr.length === 0) return TET.slice(0, k);
	if (nbr.length === 1) {
		const n = nbr[0], u = perpHint(n, hint), v = x3(n, u);
		const c = (2 * Math.SQRT2) / 3;
		return [0, 1, 2].slice(0, k).map(j => { const ph = (j * 2 * Math.PI) / 3; return n3(a3(k3(n, -1 / 3), a3(k3(u, c * Math.cos(ph)), k3(v, c * Math.sin(ph))))); });
	}
	if (nbr.length === 2) {
		const b = n3(k3(a3(nbr[0], nbr[1]), -1)), p = n3(x3(nbr[0], nbr[1]));
		const ca = Math.cos(0.9556), sa = Math.sin(0.9556);
		return [a3(k3(b, ca), k3(p, sa)), a3(k3(b, ca), k3(p, -sa))].slice(0, k);
	}
	return [n3(k3(nbr.reduce((s, q) => a3(s, q), [0, 0, 0] as Vec3), -1))].slice(0, k);
};
const rotAbout = (v: Vec3, ax: Vec3, ang: number): Vec3 => { const c = Math.cos(ang), s = Math.sin(ang); return a3(a3(k3(v, c), k3(x3(ax, v), s)), k3(ax, d3(ax, v) * (1 - c))); };
export type Heavy = {el: 'C' | 'O'; p: Vec3; geo?: 'tet' | 'trig' | 'lin'; normal?: Vec3; hint?: Vec3};
export type Mol3 = {atoms: Atom3[]; bonds: [number, number][]; orders: number[]};
/** Heavy atoms plus bonds [a, b, order]; hydrogens are added to fill each valence (C 4, O 2) by the atom's geometry. */
export const withH = (heavy: Heavy[], hb: [number, number, number?][], len = 0.62): Mol3 => {
	const atoms: Atom3[] = heavy.map(h => ({el: h.el, p: h.p}));
	const bonds: [number, number][] = hb.map(b => [b[0], b[1]]);
	const orders = hb.map(b => b[2] ?? 1);
	heavy.forEach((h, i) => {
		const mine = hb.filter(b => b[0] === i || b[1] === i);
		const used = mine.reduce((s, b) => s + (b[2] ?? 1), 0);
		const need = (h.el === 'C' ? 4 : 2) - used;
		if (need <= 0) return;
		const nbrI = mine.map(b => (b[0] === i ? b[1] : b[0]));
		const nbr = nbrI.map(j => n3(s3(heavy[j].p, h.p)));
		const L = h.el === 'O' ? len * 0.85 : len;
		let dirs: Vec3[];
		if (h.geo === 'lin') dirs = [k3(nbr[0], -1)];
		else if (h.geo === 'trig') {
			const nm = h.normal ?? [0, 0, 1];
			dirs = nbr.length === 1 ? [rotAbout(nbr[0], nm, (2 * Math.PI) / 3), rotAbout(nbr[0], nm, -(2 * Math.PI) / 3)].slice(0, need) : [n3(k3(a3(nbr[0], nbr[1]), -1))];
		} else {
			let hint = h.hint;
			if (!hint && nbrI.length === 1) {
				const j = nbrI[0];
				const second = hb.map(b => (b[0] === j ? b[1] : b[1] === j ? b[0] : -1)).find(q => q >= 0 && q !== i);
				hint = second !== undefined ? s3(heavy[j].p, heavy[second].p) : [0, 1, 0];
			}
			dirs = freeDirs(nbr, need, hint);
		}
		dirs.forEach(d => { atoms.push({el: 'H', p: a3(h.p, k3(d, L))}); bonds.push([i, atoms.length - 1]); orders.push(1); });
	});
	return {atoms, bonds, orders};
};
/** Zigzag heavy-atom positions in the xy plane, bond length `bond`, centred on the origin (as chain3d). */
export const zig3 = (n: number, bond = 1): Vec3[] => { const dx = bond * 0.82, dy = bond * 0.29, x0 = (-(n - 1) * dx) / 2; return Array.from({length: n}, (_, i) => [x0 + i * dx, i % 2 ? dy : -dy, 0] as Vec3); };
/** Position of a branch atom on tetrahedral atom i (slot 0 or 1 of its free directions). */
export const branchAt = (pos: Vec3[], nbrs: number[], i: number, slot = 0, bond = 1): Vec3 => a3(pos[i], k3(freeDirs(nbrs.map(j => n3(s3(pos[j], pos[i]))), 2)[slot], bond));
const chainB = (n: number): [number, number, number?][] => Array.from({length: n - 1}, (_, i) => [i, i + 1] as [number, number]);
export const methane3d = (): Mol3 => withH([{el: 'C', p: [0, 0, 0]}], []);
export const ethane3d = (): Mol3 => withH([{el: 'C', p: [-0.5, 0, 0], hint: [0, 1, 0]}, {el: 'C', p: [0.5, 0, 0], hint: [0, -1, 0]}], [[0, 1]]);
export const alkane3d = (n: number): Mol3 => (n === 1 ? methane3d() : n === 2 ? ethane3d() : withH(zig3(n).map(p => ({el: 'C' as const, p})), chainB(n)));
export const ethene3d = (): Mol3 => withH([{el: 'C', p: [-0.42, 0, 0], geo: 'trig'}, {el: 'C', p: [0.42, 0, 0], geo: 'trig'}], [[0, 1, 2]]);
export const ethyne3d = (): Mol3 => withH([{el: 'C', p: [-0.38, 0, 0], geo: 'lin'}, {el: 'C', p: [0.38, 0, 0], geo: 'lin'}], [[0, 1, 3]]);
export const propene3d = (): Mol3 => { const c1: Vec3 = [0.1, 0.2, 0]; return withH([{el: 'C', p: a3(c1, [-0.866, -0.5, 0])}, {el: 'C', p: c1, geo: 'trig'}, {el: 'C', p: a3(c1, k3([0.866, -0.5, 0], 0.86)), geo: 'trig'}], [[0, 1], [1, 2, 2]]); };
export const propyne3d = (): Mol3 => withH([{el: 'C', p: [-0.95, 0, 0], hint: [0, 1, 0]}, {el: 'C', p: [0, 0, 0], geo: 'lin'}, {el: 'C', p: [0.76, 0, 0], geo: 'lin'}], [[0, 1], [1, 2, 3]]);
export const ethanol3d = (): Mol3 => { const z = zig3(3); return withH([{el: 'C', p: z[0]}, {el: 'C', p: z[1]}, {el: 'O', p: lerp3(z[1], z[2], 0.95)}], [[0, 1], [1, 2]]); };
export const methoxymethane3d = (): Mol3 => { const z = zig3(3); return withH([{el: 'C', p: z[0]}, {el: 'O', p: z[1]}, {el: 'C', p: z[2]}], [[0, 1], [1, 2]]); };
/** Branched alkanes: main zigzag plus branches on tetrahedral slots, centred on the heavy-atom centroid. */
export const isomer3d = (name: '2-methylpropane' | '2-methylbutane' | '2,2-dimethylpropane' | '2,3-dimethylbutane'): Mol3 => {
	const spec: Record<string, {n: number; br: [number, number][]}> = {'2-methylpropane': {n: 3, br: [[1, 0]]}, '2-methylbutane': {n: 4, br: [[1, 0]]}, '2,2-dimethylpropane': {n: 3, br: [[1, 0], [1, 1]]}, '2,3-dimethylbutane': {n: 4, br: [[1, 0], [2, 1]]}};
	const {n, br} = spec[name];
	const pos = zig3(n);
	const b = chainB(n);
	br.forEach(([on, slot]) => { pos.push(branchAt(pos.slice(0, n), [on - 1, on + 1].filter(j => j >= 0 && j < n), on, slot)); b.push([on, pos.length - 1]); });
	const c = pos.reduce((s, p) => a3(s, p), [0, 0, 0] as Vec3);
	const mid = k3(c, 1 / pos.length);
	return withH(pos.map(p => ({el: 'C' as const, p: s3(p, mid)})), b);
};
/** Screen points of a Mol3 (for overlays such as lobes, arcs and outlines). */
export const proj = (m: {atoms: Atom3[]}, cx: number, cy: number, unitPx: number, yaw: number, pitch: number, shift?: (i: number) => Vec3): V2[] => m.atoms.map((a, i) => { const d = shift ? shift(i) : ([0, 0, 0] as Vec3); const q = project3(rotate3(a3(a.p, d), yaw, pitch), cx, cy, unitPx); return [q.x, q.y]; });
export const proj1 = (p: Vec3, cx: number, cy: number, unitPx: number, yaw: number, pitch: number): V2 => { const q = project3(rotate3(p, yaw, pitch), cx, cy, unitPx); return [q.x, q.y]; };

// ---------- direction lobes, angle arcs, outlines ----------
/**
 * Violet bonding-direction lobes from centre3 (3D, default origin) along dirs, projected with the BallStick camera.
 * spread 0..1 moves each lobe from bunched (near `bunch`) to its final direction. fat[i] widens a lobe (a double or
 * triple bond counted as one direction).
 */
export const Lobes: React.FC<{cx: number; cy: number; unitPx: number; dirs: Vec3[]; yaw: number; pitch: number; len?: number; o?: number; spread?: number; bunch?: Vec3; fat?: number[]; centre3?: Vec3; color?: string; fill?: string}> = ({cx, cy, unitPx, dirs, yaw, pitch, len = 0.8, o = 1, spread = 1, bunch = [1, 0.3, 0.2], fat = [], centre3 = [0, 0, 0], color = VIOLET, fill = VIOLET_SOFT}) => {
	if (o <= 0.01) return null;
	const c = project3(rotate3(centre3, yaw, pitch), cx, cy, unitPx);
	const items = dirs.map((d0, i) => {
		const d = n3(lerp3(n3(a3(n3(bunch), k3(d0, 0.22))), d0, spread));
		const tip3 = a3(centre3, k3(d, len));
		const t = project3(rotate3(tip3, yaw, pitch), cx, cy, unitPx);
		const dx = t.x - c.x, dy = t.y - c.y, L = Math.hypot(dx, dy);
		const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
		const w = unitPx * len * 0.2 * (fat[i] ?? 1);
		return {z: t.z, el: <ellipse key={i} cx={c.x + dx * 0.55} cy={c.y + dy * 0.55} rx={Math.max(L * 0.55, w * 0.9)} ry={w} transform={`rotate(${ang},${c.x + dx * 0.55},${c.y + dy * 0.55})`} fill={fill} stroke={color} strokeWidth={3} opacity={depthLerp(t.z, 0.55, 0.92, 1)} />};
	});
	return <g opacity={o}>{items.sort((a, b) => a.z - b.z).map(q => q.el)}</g>;
};
/** Angle arc at c between screen points a and b (radius r) with a label beyond the arc (big: the reflex side). */
export const AngleArc: React.FC<{c: V2; a: V2; b: V2; r?: number; text: string; at: number; out?: number; color?: string; size?: number; o?: number; lab?: number; big?: boolean}> = ({c, a, b, r = 60, text, at, out, color = NAVY, size = 34, o = 1, lab = 1.9, big = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const t1 = Math.atan2(a[1] - c[1], a[0] - c[0]);
	let dt = Math.atan2(b[1] - c[1], b[0] - c[0]) - t1;
	while (dt > Math.PI) dt -= 2 * Math.PI;
	while (dt < -Math.PI) dt += 2 * Math.PI;
	if (big) dt = dt > 0 ? dt - 2 * Math.PI : dt + 2 * Math.PI;
	const p = prog(f, at, 14);
	const te = t1 + dt * p;
	const large = Math.abs(dt * p) > Math.PI ? 1 : 0;
	const sweep = dt > 0 ? 1 : 0;
	const tm = t1 + dt / 2;
	const lx = c[0] + r * lab * Math.cos(tm), ly = c[1] + r * lab * Math.sin(tm);
	const w = mw(text, size, false, 800);
	return (
		<g opacity={v}>
			<path d={`M${c[0] + r * Math.cos(t1)},${c[1] + r * Math.sin(t1)} A${r},${r} 0 ${large} ${sweep} ${c[0] + r * Math.cos(te)},${c[1] + r * Math.sin(te)}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
			<g opacity={prog(f, at + 8, 8)}>
				<rect x={lx - w / 2 - 10} y={ly - size * 0.75} width={w + 20} height={size * 1.25} rx={10} fill={CARDC} opacity={0.92} />
				<Sx x={lx} y={ly + size * 0.32} text={text} size={size} color={color} anchor="middle" weight={800} at={-1000} />
			</g>
		</g>
	);
};
/** Faint dashed outline joining every pair of points (4 points: a tetrahedron; 3: a triangle). */
export const Edges: React.FC<{pts: V2[]; at: number; out?: number; color?: string; o?: number; width?: number; fill?: string}> = ({pts, at, out, color = VIOLET, o = 1, width = 2.5, fill}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const pairs: [number, number][] = [];
	for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) pairs.push([i, j]);
	return (
		<g opacity={v}>
			{fill && pts.length >= 3 ? <path d={'M' + pts.map(p => `${p[0]},${p[1]}`).join(' L') + ' Z'} fill={fill} opacity={0.35} /> : null}
			{pairs.map(([i, j], k) => <line key={k} x1={pts[i][0]} y1={pts[i][1]} x2={pts[j][0]} y2={pts[j][1]} stroke={color} strokeWidth={width} strokeDasharray="8 6" strokeLinecap="round" />)}
		</g>
	);
};

// ---------- question card with room for structures ----------
export type ULine = {line: number; phrase: string; at: number; color?: string};
/** Baseline y of line i in a QCardX at y (size, gaps as passed to the card). */
export const qLineY = (y: number, size: number, gaps: number[], i: number) => y + 64 + size + i * size * 1.4 + gaps.slice(0, i).reduce((s, g) => s + (g ?? 0), 0);
export const qCardH = (n: number, size: number, gaps: number[] = []) => 64 + n * size * 1.4 + gaps.reduce((s, g) => s + (g ?? 0), 0) + 26;
/** HSC-style question card (as C01's): lines of text, the HSCScience tag, extra space after line i (gaps[i]), pen
 *  underlines on phrases as they are used. */
export const QCardX: React.FC<{lines: string[]; at: number; y?: number; size?: number; under?: ULine[]; x?: number; w?: number; gaps?: number[]; o?: number}> = ({lines, at, y = 200, size = 40, under = [], x = 140, w = 1640, gaps = [], o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const h = qCardH(lines.length, size, gaps);
	const tag = 'HSC-style question, written for HSCScience';
	const tw2 = mw(tag, 24, true, 700) + 36;
	return (
		<g opacity={v}>
			<rect x={x + 4} y={y + 7} width={w} height={h} rx={18} fill="rgba(60,45,20,0.07)" />
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<rect x={x + 24} y={y + 16} width={150} height={34} rx={8} fill="#0d6b52" />
			<Sx x={x + 99} y={y + 40} text="CHEMISTRY" size={20} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
			<rect x={x + w - 22 - tw2} y={y + 14} width={tw2} height={38} rx={19} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="7 5" />
			<Sx x={x + w - 22 - tw2 / 2} y={y + 41} text={tag} size={24} color={INK_SOFT} anchor="middle" hand at={-1000} />
			{lines.map((t, i) => <Sx key={i} x={x + 32} y={qLineY(y, size, gaps, i)} text={t} size={size} color={INK} weight={500} at={at + 4 + i * 8} />)}
			{under.map((u, k) => {
				const t = lines[u.line];
				const s = t.indexOf(u.phrase);
				if (s < 0) throw new Error('QCardX phrase not found: ' + u.phrase);
				const x1 = x + 32 + mw(t.slice(0, s), size, false, 500), x2 = x1 + mw(u.phrase, size, false, 500);
				const yy = qLineY(y, size, gaps, u.line) + 10;
				return <DrawPath key={k} d={`M${x1},${yy} C${x1 + (x2 - x1) * 0.3},${yy + 3} ${x1 + (x2 - x1) * 0.7},${yy - 2} ${x2},${yy + 1}`} at={u.at} dur={14} color={u.color ?? '#2c4a7c'} width={4} />;
			})}
		</g>
	);
};

// ---------- small board pieces ----------
/** Square bracket under (dir 1) or over (dir -1) the span x1..x2 at y, with a label. */
export const Brace: React.FC<{x1: number; x2: number; y: number; text: string; at: number; out?: number; color?: string; dir?: 1 | -1; size?: number; o?: number; hand?: boolean}> = ({x1, x2, y, text, at, out, color = INK_SOFT, dir = 1, size = 28, o = 1, hand = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const h = 16 * dir;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y} L${x1},${y + h} L${x2},${y + h} L${x2},${y}`} at={at} dur={12} color={color} width={3.5} cap="butt" />
			<Sx x={(x1 + x2) / 2} y={dir === 1 ? y + h + size + 8 : y + h - 14} text={text} size={size} color={color} anchor="middle" hand={hand} weight={hand ? 700 : 600} at={at + 6} />
		</g>
	);
};
/** Dotted line between two points; flicker makes the dashes crawl and the opacity shimmer (dispersion forces). */
export const Dots: React.FC<{a: V2; b: V2; at: number; out?: number; color?: string; width?: number; flicker?: boolean; o?: number; dash?: string}> = ({a, b, at, out, color = VIOLET, width = 4, flicker = false, o = 1, dash = '3 9'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o * (flicker ? 0.75 + 0.25 * Math.sin(f * 0.45 + a[0] * 0.01) : 1);
	if (v <= 0.01) return null;
	const p = prog(f, at, 12);
	return <line x1={a[0]} y1={a[1]} x2={a[0] + (b[0] - a[0]) * p} y2={a[1] + (b[1] - a[1]) * p} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeDashoffset={flicker ? -f * 0.6 : 0} strokeLinecap="round" opacity={v} />;
};
/** Keyframed placement: the group moves and scales between keys (each transition starts at its key's `at`). */
export type PKey = {at: number; x: number; y: number; s?: number; o?: number};
export const Place: React.FC<{keys: PKey[]; dur?: number; children: React.ReactNode}> = ({keys, dur = 24, children}) => {
	const f = useCurrentFrame();
	let x = keys[0].x, y = keys[0].y, s = keys[0].s ?? 1, o = keys[0].o ?? 1;
	for (let i = 1; i < keys.length; i++) {
		const k = keys[i];
		const t = smooth(prog(f, k.at, dur));
		x += (k.x - x) * t; y += (k.y - y) * t; s += ((k.s ?? s) - s) * t; o += ((k.o ?? o) - o) * t;
	}
	if (o <= 0.01) return null;
	return <g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>{children}</g>;
};
/** A name in coloured parts, centred at x (e.g. [['2-methyl', BRANCH_INK], ['butane', CHAIN_INK]]). */
export const NameLbl: React.FC<{x: number; y: number; parts: [string, string][]; at: number; out?: number; size?: number; o?: number}> = ({x, y, parts, at, out, size = 36, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const ws = parts.map(([t]) => mw(t, size, false, 800));
	let cx = x - ws.reduce((s, w) => s + w, 0) / 2;
	return <g opacity={v} transform={`translate(0,${(1 - smooth(prog(f, at, 12))) * -14})`}>{parts.map(([t, c], i) => { const px = cx; cx += ws[i]; return <Sx key={i} x={px} y={y} text={t} size={size} color={c} weight={800} at={-1000} />; })}</g>;
};
/** The duplicate stamp: a round "=" stamp that lands (scales down) at `at`. */
export const Stamp: React.FC<{x: number; y: number; at: number; out?: number; text?: string; r?: number; color?: string; o?: number}> = ({x, y, at, out, text = '=', r = 38, color = '#2f8a5b', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8) * o;
	if (v <= 0.01) return null;
	const s = 1 + 0.8 * (1 - smooth(prog(f, at, 10)));
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s}) rotate(-8)`}>
			<circle r={r} fill="#e3f3e9" stroke={color} strokeWidth={5} />
			<Sx x={0} y={r * 0.42} text={text} size={r * 1.3} color={color} anchor="middle" weight={900} at={-1000} />
		</g>
	);
};
/** Green tick drawn at (x, y). */
export const TickMark: React.FC<{x: number; y: number; at: number; out?: number; s?: number; o?: number}> = ({x, y, at, out, s = 1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 8) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${x - 14 * s},${y} l${12 * s},${14 * s} l${24 * s},${-30 * s}`} at={at} dur={10} color="#2f8a5b" width={6 * s} /></g>;
};
