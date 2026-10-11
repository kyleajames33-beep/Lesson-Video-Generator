// Drawing parts for the C2 lesson: particle flask, rate bars, net arrow, stage table, equation chip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {ESC, Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {GREENP, GREEN_INK, NAVY, VIOLET} from './common';

export {Overlay, Fade, SvgText, TEAL, ESC};
export const FWD = ESC;
export const REV = AMBER;
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- particle flask ----------
export type Counts = (f: number) => {n: number; v: number};
export type Ghost = {f0: number; kind: 'split' | 'join'; slot: number};
/** Cosmetic split or join events at a steady tempo (the counts do not change). */
export const ghostTrain = (from: number, to: number, period: number, kind: 'split' | 'join', slots: number[]): Ghost[] => {
	const out: Ghost[] = [];
	let i = 0;
	for (let t = from; t < to; t += period, i++) out.push({f0: Math.round(t), kind, slot: slots[i % slots.length]});
	return out;
};

type SlotP = {p1: number; p2: number; p3: number; p4: number; w1: number; w2: number; w3: number; w4: number};
const slotCache = new Map<string, SlotP[]>();
const slotsFor = (seed: number, type: number): SlotP[] => {
	const k = `${seed}-${type}`;
	let s = slotCache.get(k);
	if (!s) {
		const r = rng(seed * 31 + type * 7 + 3);
		s = Array.from({length: 24}, () => ({p1: r() * 6.28, p2: r() * 6.28, p3: r() * 6.28, p4: r() * 6.28, w1: 0.012 + r() * 0.02, w2: 0.012 + r() * 0.02, w3: 0.02 + r() * 0.03, w4: 0.02 + r() * 0.03}));
		slotCache.set(k, s);
	}
	return s;
};
export const slotXY = (seed: number, type: number, i: number, f: number, cx: number, cy: number, r: number) => {
	const s = slotsFor(seed, type)[i];
	const A = r * 0.6;
	return {x: cx + A * (0.62 * Math.sin(f * s.w1 + s.p1) + 0.38 * Math.sin(f * s.w3 + s.p3)), y: cy + A * (0.62 * Math.sin(f * s.w2 + s.p2) + 0.38 * Math.sin(f * s.w4 + s.p4))};
};

export const ParticleLens: React.FC<{cx: number; cy: number; r: number; counts: Counts; seed?: number; ghosts?: Ghost[]; reveal?: number; tint?: string; rScale?: number; bare?: boolean}> = ({cx, cy, r, counts, seed = 4, ghosts = [], reveal = 1, tint = '#fffdf8', rScale = 1, bare = false}) => {
	const f = useCurrentFrame();
	const c = counts(f);
	const n = Math.round(c.n), v = Math.round(c.v);
	const age = (type: 0 | 1, idx: number) => {
		for (let k = 1; k <= 12; k++) {
			const p = counts(f - k);
			if ((type === 0 ? Math.round(p.n) : Math.round(p.v)) <= idx) return k - 1;
		}
		return 99;
	};
	const bursts: React.ReactNode[] = [];
	for (let k = 0; k < 14; k++) {
		const a = counts(f - k), b = counts(f - k - 1);
		const dn = Math.round(a.n) - Math.round(b.n);
		if (dn !== 0) {
			const idx = dn < 0 ? Math.round(b.n) - 1 : Math.round(a.n) - 1;
			const p = slotXY(seed, 0, Math.max(0, idx), f, cx, cy, r);
			const u = k / 14;
			bursts.push(<circle key={`b${k}`} cx={p.x} cy={p.y} r={14 + 34 * u} fill="none" stroke={dn < 0 ? ESC : AMBER} strokeWidth={5} opacity={1 - u} />);
		}
	}
	return (
		<g opacity={reveal}>
			{bare ? null : <circle cx={cx} cy={cy} r={r} fill={tint} stroke={INK} strokeWidth={6} />}
			{bare ? null : <path d={`M${cx - r * 0.74},${cy - r * 0.46} A${r * 0.88},${r * 0.88} 0 0 1 ${cx - r * 0.1},${cy - r * 0.86}`} fill="none" stroke="#dfe9f2" strokeWidth={9} strokeLinecap="round" />}
			{Array.from({length: n}, (_, i) => {
				const p = slotXY(seed, 0, i, f, cx, cy, r);
				const t = Math.min(1, age(0, i) / 10);
				return <circle key={`n${i}`} cx={p.x} cy={p.y} r={15 * rScale * (0.4 + 0.6 * t)} fill={NAVY} stroke={INK} strokeWidth={2.5} />;
			})}
			{Array.from({length: v}, (_, i) => {
				const p = slotXY(seed, 1, i, f, cx, cy, r);
				const t = Math.min(1, age(1, i) / 10);
				return <circle key={`v${i}`} cx={p.x} cy={p.y} r={11.5 * rScale * (0.5 + 0.5 * t)} fill={VIOLET} stroke={INK} strokeWidth={2.5} />;
			})}
			{Array.from({length: v}, (_, i) => {
				const p = slotXY(seed, 2, i, f, cx, cy, r);
				const t = Math.min(1, age(1, i) / 10);
				return <circle key={`g${i}`} cx={p.x} cy={p.y} r={11 * rScale * (0.5 + 0.5 * t)} fill={GREENP} stroke={INK} strokeWidth={2.5} />;
			})}
			{bursts}
			{ghosts.map((g, gi) => {
				const a = f - g.f0, dur = 22;
				if (a < 0 || a > dur) return null;
				const u = a / dur;
				const p = slotXY(seed, 0, g.slot, f, cx, cy, r);
				const ang = g.slot * 2.1;
				const dx = Math.cos(ang) * 50, dy = Math.sin(ang) * 50;
				if (g.kind === 'split') {
					return (
						<g key={gi} opacity={1 - u * u}>
							<circle cx={p.x} cy={p.y} r={14 + 30 * u} fill="none" stroke={ESC} strokeWidth={5} opacity={1 - u} />
							<circle cx={p.x + dx * u} cy={p.y + dy * u} r={11 * rScale} fill={VIOLET} stroke={INK} strokeWidth={2.5} />
							<circle cx={p.x - dx * u} cy={p.y - dy * u} r={10 * rScale} fill={GREENP} stroke={INK} strokeWidth={2.5} />
						</g>
					);
				}
				const w = 1 - smooth(u);
				const k = (u - 0.8) * 5;
				return (
					<g key={gi}>
						<circle cx={p.x + dx * w} cy={p.y + dy * w} r={11 * rScale} fill={VIOLET} stroke={INK} strokeWidth={2.5} opacity={u < 0.85 ? 1 : 0} />
						<circle cx={p.x - dx * w} cy={p.y - dy * w} r={10 * rScale} fill={GREENP} stroke={INK} strokeWidth={2.5} opacity={u < 0.85 ? 1 : 0} />
						{u > 0.8 ? <><circle cx={p.x} cy={p.y} r={15 * rScale} fill={NAVY} stroke={INK} strokeWidth={2.5} opacity={1 - k} /><circle cx={p.x} cy={p.y} r={14 + 40 * k} fill="none" stroke={AMBER} strokeWidth={6} opacity={1 - k} /></> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Moving pen rings around chosen navy particles (same slot motion as the lens). */
export const SlotRings: React.FC<{cx: number; cy: number; r: number; slots: number[]; at: number; out?: number; color?: string; seed?: number}> = ({cx, cy, r, slots, at, out, color = ESC, seed = 4}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	return <g opacity={o}>{slots.map(i => { const p = slotXY(seed, 0, i, f, cx, cy, r); return <circle key={i} cx={p.x} cy={p.y} r={30} fill="none" stroke={color} strokeWidth={5} strokeDasharray="10 7" />; })}</g>;
};

/** Colour key for the three substances and the particle scale. */
export const ColourKey: React.FC<{x: number; y: number; at: number; scale?: boolean}> = ({x, y, at, scale = true}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={14} fill={NAVY} stroke={INK} strokeWidth={2.5} />
		<SvgText x={x + 26} y={y + 11} text="PCl_5" size={34} hand={false} weight={600} at={at} />
		<circle cx={x + 150} cy={y} r={11} fill={VIOLET} stroke={INK} strokeWidth={2.5} />
		<SvgText x={x + 172} y={y + 11} text="PCl_3" size={34} hand={false} weight={600} at={at} />
		<circle cx={x + 300} cy={y} r={11} fill={GREENP} stroke={INK} strokeWidth={2.5} />
		<SvgText x={x + 322} y={y + 11} text="Cl_2" size={34} hand={false} weight={600} at={at} />
		{scale ? <SvgText x={x - 14} y={y + 56} text="1 dot = 0.01 mol/L" size={42} color={INK_SOFT} at={at} /> : null}
	</Fade>
);

// ---------- equation chip with lit arrows ----------
const pulseOf = (f: number, at: number) => (f < at ? 0 : Math.max(0, Math.sin(Math.min(1, (f - at) / 36) * Math.PI)));
export const EqRR: React.FC<{x: number; y: number; at: number; fwdAt?: number; revAt?: number; fwdWordAt?: number; revWordAt?: number; size?: number}> = ({x, y, at, fwdAt, revAt, fwdWordAt, revWordAt, size = 46}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const fl = fwdAt !== undefined && f >= fwdAt, rl = revAt !== undefined && f >= revAt;
	const pf = fwdWordAt === undefined ? 0 : pulseOf(f, fwdWordAt), pr = revWordAt === undefined ? 0 : pulseOf(f, revWordAt);
	return (
		<g opacity={o} transform={`translate(${x},${y})`}>
			<rect x={-24} y={-size - 40} width={size * 15.2} height={size + 124} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
			<SvgText x={0} y={0} text="PCl_5(g)" size={size} hand={false} weight={600} color={NAVY} />
			<path d={`M${size * 3.4},-12 L${size * 5.6},-12 M${size * 5.3},-24 L${size * 5.6},-12 L${size * 5.3},0`} fill="none" stroke={fl || pf > 0.02 ? FWD : '#cfc7b8'} strokeWidth={5 + 4 * pf} strokeLinecap="round" strokeLinejoin="round" />
			<path d={`M${size * 5.6},14 L${size * 3.4},14 M${size * 3.7},2 L${size * 3.4},14 L${size * 3.7},26`} fill="none" stroke={rl || pr > 0.02 ? REV : '#cfc7b8'} strokeWidth={5 + 4 * pr} strokeLinecap="round" strokeLinejoin="round" />
			<SvgText x={size * 6.1} y={0} text="PCl_3(g)" size={size} hand={false} weight={600} color={VIOLET} />
			<SvgText x={size * 9.55} y={0} text="+" size={size} hand={false} weight={600} />
			<SvgText x={size * 10.4} y={0} text="Cl_2(g)" size={size} hand={false} weight={600} color={GREEN_INK} />
			{fwdWordAt !== undefined ? <SvgText x={size * 4.5} y={-size * 0.82} text="forward" size={size * 0.74} color={FWD} anchor="middle" at={fwdWordAt} /> : null}
			{revWordAt !== undefined ? <SvgText x={size * 4.5} y={size * 1.5} text="reverse" size={size * 0.74} color={AMBER_INK} anchor="middle" at={revWordAt} /> : null}
		</g>
	);
};

// ---------- rate bars ----------
export const BARS = {x0: 1130, base: 640, w: 120, gx: 200};
export const Bars: React.FC<{fwd: number; rev: number; at: number; scale?: number; showFwd?: boolean; showRev?: boolean; fwdLabel?: string; revLabel?: string; bracketAt?: number; bracketOut?: number; note?: string; x0?: number}> = ({fwd, rev, at, scale = 6.5, showFwd = true, showRev = true, fwdLabel, revLabel, bracketAt, bracketOut, note, x0: X0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const {base, w, gx} = BARS;
	const x0 = X0 ?? BARS.x0;
	const hF = fwd * scale, hR = rev * scale;
	const top = (h: number) => base - h;
	const fl = fwdLabel ?? String(Math.round(fwd)), rl = revLabel ?? String(Math.round(rev));
	const bo = bracketAt === undefined ? 0 : prog(f, bracketAt, 12) * (bracketOut === undefined ? 1 : 1 - prog(f, bracketOut, 10));
	const gap = fwd - rev;
	return (
		<g opacity={o}>
			<path d={`M${x0 - 40},${base} L${x0 + gx + w + 40},${base}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{showFwd ? <rect x={x0} y={top(hF)} width={w} height={Math.max(0, hF)} fill="#bcd6ee" stroke={FWD} strokeWidth={5} rx={6} /> : null}
			{showRev ? <rect x={x0 + gx} y={top(hR)} width={w} height={Math.max(0, hR)} fill="#f6dfae" stroke={REV} strokeWidth={5} rx={6} /> : null}
			<text x={x0 + w / 2} y={top(hF) - 18} textAnchor="middle" fill={FWD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>{showFwd ? fl : ''}</text>
			<text x={x0 + gx + w / 2} y={top(hR) - 18} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>{showRev ? rl : ''}</text>
			<text x={x0 + w / 2} y={base + 46} textAnchor="middle" fill={FWD} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>forward</text>
			<text x={x0 + gx + w / 2} y={base + 46} textAnchor="middle" fill={AMBER_INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>reverse</text>
			<text x={x0 + (gx + w) / 2} y={base + 88} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}}>rate (made-up units)</text>
			{note ? <text x={x0 + (gx + w) / 2} y={base - 400} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>{note}</text> : null}
			{bo > 0.01 && gap > 1 ? (
				<g opacity={bo}>
					<path d={`M${x0 + gx + w + 26},${top(hF)} L${x0 + gx + w + 52},${top(hF)} L${x0 + gx + w + 52},${top(hR)} L${x0 + gx + w + 26},${top(hR)}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<path d={`M${x0 + w},${top(hF)} L${x0 + gx + w + 26},${top(hF)}`} stroke={FWD} strokeWidth={3} strokeDasharray="8 8" />
					<text x={x0 + gx + w + 66} y={(top(hF) + top(hR)) / 2 + 14} fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>gap</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- net arrow ----------
export const NET = {x: 735, y0: 300};
export const NetArrow: React.FC<{gap: number; at: number; label?: React.ReactNode; ghostGap?: number; zeroAt?: number; subAt?: number; scale?: number}> = ({gap, at, label, ghostGap, zeroAt, subAt, scale = 4.8}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const {x, y0} = NET;
	const len = Math.max(0, gap) * scale;
	const zero = zeroAt !== undefined && f >= zeroAt;
	return (
		<g opacity={o}>
			{ghostGap ? <path d={`M${x},${y0} L${x},${y0 + ghostGap * scale}`} stroke={FWD} strokeWidth={14} strokeDasharray="10 12" strokeLinecap="round" opacity={0.35} fill="none" /> : null}
			{len > 6 && !zero ? (
				<>
					<path d={`M${x},${y0} L${x},${y0 + len - 14}`} stroke={FWD} strokeWidth={16} strokeLinecap="round" fill="none" />
					<path d={`M${x - 26},${y0 + len - 30} L${x},${y0 + len + 6} L${x + 26},${y0 + len - 30} Z`} fill={FWD} stroke={FWD} strokeWidth={6} strokeLinejoin="round" />
				</>
			) : null}
			{zero ? null : label}
			{zero ? (
				<g opacity={prog(f, zeroAt!, 14)}>
					<circle cx={x} cy={y0 + 60} r={44} fill="#fffdf8" stroke={TEAL} strokeWidth={6} />
					<path d={`M${x - 24},${y0 + 60} L${x + 24},${y0 + 60}`} stroke={TEAL} strokeWidth={7} strokeLinecap="round" />
					<text x={x + 66} y={y0 + 54} fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48}}>net change 0</text>
					<text x={x + 66} y={y0 + 100} opacity={subAt === undefined ? 1 : prog(f, subAt, 12)} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>made as fast as lost</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- stage table (last two rows only) ----------
export type TRow = {label: string; at: number; cells: [string, number][]; gap?: [string, number]; color?: string};
const COLX = {label: 720, pcl5: 960, pcl3: 1080, cl2: 1200, fwd: 1335, rev: 1485, gap: 1685};
export const StageTable: React.FC<{rows: TRow[]; at: number; gapAt?: number; rowH?: number}> = ({rows, at, gapAt, rowH = 58}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const newest = rows.reduce((s, r) => s + smooth((f - r.at) / 14), 0) - 1;
	const base0 = 862;
	const gapO = gapAt === undefined ? 0 : prog(f, gapAt, 14);
	const xs = [COLX.pcl5, COLX.pcl3, COLX.cl2, COLX.fwd, COLX.rev];
	const th = (x: number, text: string, color = INK, size = 28) => <SvgText key={text + x} x={x} y={808} text={text} size={size} hand={false} weight={700} color={color} anchor="middle" />;
	return (
		<g opacity={o}>
			<SvgText x={(COLX.pcl5 + COLX.cl2) / 2} y={772} text="concentration (mol/L)" size={26} hand={false} weight={600} color={INK_SOFT} anchor="middle" />
			<path d={`M${COLX.pcl5 - 56},782 L${COLX.cl2 + 56},782`} stroke={INK_SOFT} strokeWidth={2.5} />
			<SvgText x={(COLX.fwd + COLX.rev) / 2} y={772} text="rate (made-up units)" size={26} hand={false} weight={600} color={INK_SOFT} anchor="middle" />
			<path d={`M${COLX.fwd - 70},782 L${COLX.rev + 70},782`} stroke={INK_SOFT} strokeWidth={2.5} />
			{th(COLX.pcl5, 'PCl_5', NAVY)}{th(COLX.pcl3, 'PCl_3', VIOLET)}{th(COLX.cl2, 'Cl_2', GREEN_INK)}{th(COLX.fwd, 'forward', FWD)}{th(COLX.rev, 'reverse', AMBER_INK)}
			<g opacity={gapO}>
				<SvgText x={COLX.gap} y={772} text="gap" size={26} hand={false} weight={700} color={TEAL} anchor="middle" />
				<SvgText x={COLX.gap} y={808} text="forward - reverse" size={24} hand={false} weight={600} color={TEAL} anchor="middle" />
			</g>
			<path d={`M${COLX.label - 10},820 L${COLX.gap + 125},820`} stroke={INK} strokeWidth={3} />
			{rows.map((r, i) => {
				const p = newest - i;
				const op = p <= -1 ? 0 : p < 0 ? 1 + p : p < 1 ? 1 - 0.32 * p : Math.max(0, 0.68 * (2 - p));
				if (op <= 0.01) return null;
				const y = base0 + (1 - p) * rowH;
				const col = r.color ?? INK;
				return (
					<g key={r.label} opacity={op}>
						{r.color ? <rect x={COLX.label - 14} y={y - 40} width={COLX.gap + 140 - COLX.label} height={54} rx={12} fill="rgba(13,107,82,0.10)" /> : null}
						<SvgText x={COLX.label} y={y} text={r.label} size={32} hand={false} weight={700} color={col} />
						{r.cells.map(([t, at], k) => <SvgText key={k} x={xs[k]} y={y} text={t} size={36} hand={false} weight={700} color={k === 3 ? FWD : k === 4 ? AMBER_INK : col} anchor="middle" at={at} />)}
						{r.gap ? <g opacity={gapO}><SvgText x={COLX.gap} y={y} text={r.gap[0]} size={36} hand={false} weight={800} color={TEAL} anchor="middle" at={r.gap[1]} /></g> : null}
					</g>
				);
			})}
		</g>
	);
};

export const LENS = {cx: 430, cy: 575, r: 245};

/** Rounded label pill inside the SVG overlay. */
export const Pill: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; color?: string; size?: number; h?: number}> = ({x, y, w, text, at, out, color = INK, size = 40, h = 62}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#fffdf8" stroke={color} strokeWidth={3} />
		<text x={x + w / 2} y={y + h / 2 + size * 0.3} textAnchor="middle" fill={color} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}}>{text}</text>
	</Fade>
);
