// Drawing parts for Y11 Chem M1 V13 (atomic radius trends). Reuses the M1 V12 parts (and through them V11, V10, V08,
// V06, V01 and M2 V06: text, chips, framed answers, pen marks, plates, brackets, readouts, the periodic grid). New here,
// all coded (abstract models in the HSC shell convention): the radius atom (nucleus with its charge, shell rings and
// electron dots, the outer ring drawn at a radius set from the measured pm value), the shielding band over the inner
// shells, amber pull arrows, the teal radius ruler, radius bars and the four-readout radius stepper.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, E_BLUE, E_INK, INK, P_RED, RO, Sx, TEAL_T, clamp01, lerp, prog, smooth} from '../chem-y11-m1-v12/parts';

export * from '../chem-y11-m1-v12/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
/** Pull arrows and core charge (strokes); text uses AMB_T. */
export const AMB_S = '#d18f1f';
export const AMB_T = '#9c5a00';
export const SHIELD_FILL = '#c3c9d2';
export const SLATE_T = '#4f5862';
export const BLUE_T = '#1f4f9e';
export const NUC_INK = '#a8322a';

// ---------- the radius atom ----------
const FR: Record<number, number[]> = {1: [1], 2: [0.55, 1], 3: [0.45, 0.72, 1], 4: [0.38, 0.58, 0.79, 1]};
/** Ring radii for n shells with outer radius R (inner rings are the model's, the outer ring is to scale). */
export const ringsOf = (n: number, R: number) => FR[n].map(k => k * R);
/** Position of electron j of k on a ring of radius r (rot: angle of electron 0, radians). */
export const ePos = (cx: number, cy: number, r: number, k: number, j: number, rot: number): [number, number] => {
	const a = rot + (j / k) * Math.PI * 2;
	return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
};
/** Default angle offsets per ring (outer electron 0 sits at the right unless outerRot is given). */
const ROT = [-Math.PI / 2, -Math.PI / 2 + 0.2, -Math.PI / 2 + 0.4, -Math.PI / 2 + 0.6];
export type AtomProps = {
	cx: number; cy: number;
	/** ring radii, inner to outer (use ringsOf) */
	rings: number[];
	counts: number[];
	label?: string;
	nr?: number;
	dot?: number;
	labelSize?: number;
	o?: number;
	/** per-ring opacity (a whole shell fading out) */
	ringO?: number[];
	/** angle of the first electron on the outer ring */
	outerRot?: number;
	/** 0..1 slate band over the inner shells */
	shield?: number;
	/** 0..1 amber glow on the outer electrons */
	outerHi?: number;
	/** 0..1 blue glow on the outer ring */
	ringHi?: number;
	/** extra electrons on the outer ring: count and 0..1 arrival */
	extra?: {n: number; p: number; from?: [number, number]};
	/** outer electron 0 displaced to this point (leaving) */
	leave?: {to: [number, number]; p: number};
	ringStroke?: number;
	ringColor?: string;
	/** per-ring rotation of electron 0 (overrides the defaults) */
	rots?: number[];
	labelO?: number;
};
export const shieldOuter = (rings: number[], dot: number) => (rings.length >= 2 ? rings[rings.length - 2] + dot * 1.9 : 0);
export const RAtom: React.FC<AtomProps> = ({cx, cy, rings, counts, label, nr, dot = 9, labelSize, o = 1, ringO, outerRot, shield = 0, outerHi = 0, ringHi = 0, extra, leave, ringStroke = 3.5, ringColor = INK, rots, labelO = 1}) => {
	if (o <= 0.005) return null;
	const n = rings.length, R = rings[n - 1];
	const NR = nr ?? Math.max(16, R * 0.17);
	const ls = labelSize ?? Math.max(24, Math.round(NR * 0.95));
	const so = shieldOuter(rings, dot);
	return (
		<g opacity={o}>
			{shield > 0.005 && n >= 2 ? (
				<g opacity={shield}>
					<circle cx={cx} cy={cy} r={(so + NR + 3) / 2} fill="none" stroke={SHIELD_FILL} strokeWidth={so - NR - 3} />
					<circle cx={cx} cy={cy} r={so} fill="none" stroke={INK} strokeWidth={2.5} />
				</g>
			) : null}
			{rings.map((r, i) => {
				const ro = ringO ? ringO[i] ?? 1 : 1;
				if (ro <= 0.005) return null;
				const outer = i === n - 1;
				const k = counts[i] ?? 0;
				const rot = outer && outerRot !== undefined ? outerRot : rots?.[i] ?? ROT[i % 4];
				const kk = outer && extra ? k + extra.n : k;
				return (
					<g key={i} opacity={ro}>
						{outer && ringHi > 0.005 ? <circle cx={cx} cy={cy} r={r} fill="none" stroke={E_BLUE} strokeWidth={12} opacity={0.35 * ringHi} /> : null}
						<circle cx={cx} cy={cy} r={r} fill="none" stroke={ringColor} strokeWidth={ringStroke} />
						{Array.from({length: k}, (_, j) => {
							let [x, y] = ePos(cx, cy, r, kk, j, rot);
							if (outer && leave && j === 0) { x = lerp(x, leave.to[0], smooth(leave.p)); y = lerp(y, leave.to[1], smooth(leave.p)); }
							const glow = outer ? outerHi : 0;
							const dO = outer && leave && j === 0 ? 1 - clamp01((leave.p - 0.7) / 0.3) : 1;
							return (
								<g key={j} opacity={dO}>
									{glow > 0.01 ? <circle cx={x} cy={y} r={dot + 7} fill={AMB_S} opacity={0.45 * glow} /> : null}
									<circle cx={x} cy={y} r={dot} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />
								</g>
							);
						})}
						{outer && extra ? Array.from({length: extra.n}, (_, j) => {
							const [x1, y1] = ePos(cx, cy, r, kk, k + j, rot);
							const from = extra.from ?? [x1 + 120, y1 - 120];
							const t = smooth(extra.p);
							if (extra.p <= 0.005) return null;
							return <circle key={'x' + j} cx={lerp(from[0], x1, t)} cy={lerp(from[1], y1, t)} r={dot} fill={E_BLUE} stroke={E_INK} strokeWidth={2} opacity={Math.min(1, extra.p * 3)} />;
						}) : null}
					</g>
				);
			})}
			<circle cx={cx} cy={cy} r={NR} fill={P_RED} stroke={NUC_INK} strokeWidth={3} />
			{label && labelO > 0.005 ? <Sx x={cx} y={cy + ls * 0.36} text={label} size={ls} color="#ffffff" anchor="middle" weight={800} at={-1000} opacity={labelO} /> : null}
		</g>
	);
};

// ---------- pull arrow (amber, electron to nucleus) ----------
/** Amber pull arrow from a (near the electron) to b (the nucleus edge); w: width; thin: the outer part (a to the shield edge at fraction tAt) drawn at width thin. */
export const Pull: React.FC<{a: [number, number]; b: [number, number]; w?: number; o?: number; p?: number; thin?: {w: number; t: number}; color?: string}> = ({a, b, w = 8, o = 1, p = 1, thin, color = AMB_S}) => {
	if (o <= 0.005 || p <= 0.005) return null;
	const e = smooth(p);
	const bx = lerp(a[0], b[0], e), by = lerp(a[1], b[1], e);
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const head = Math.max(16, w * 2.2);
	const hx = bx - Math.cos(ang) * head * 0.6, hy = by - Math.sin(ang) * head * 0.6;
	const tx = thin ? lerp(a[0], b[0], thin.t) : a[0], ty = thin ? lerp(a[1], b[1], thin.t) : a[1];
	const showThin = thin && e > thin.t;
	return (
		<g opacity={o}>
			{thin ? (
				<>
					<line x1={a[0]} y1={a[1]} x2={showThin ? tx : hx} y2={showThin ? ty : hy} stroke={color} strokeWidth={thin.w} strokeLinecap="round" />
					{showThin ? <line x1={tx} y1={ty} x2={hx} y2={hy} stroke={color} strokeWidth={w} strokeLinecap="round" /> : null}
				</>
			) : <line x1={a[0]} y1={a[1]} x2={hx} y2={hy} stroke={color} strokeWidth={w} strokeLinecap="round" />}
			<path d={`M${bx - head * Math.cos(ang - 0.5)},${by - head * Math.sin(ang - 0.5)} L${bx},${by} L${bx - head * Math.cos(ang + 0.5)},${by - head * Math.sin(ang + 0.5)} Z`} fill={color} stroke={color} strokeWidth={2} strokeLinejoin="round" />
		</g>
	);
};
/** Point on the segment from the nucleus centre (c) towards p, at distance d from c. */
export const toward = (c: [number, number], p: [number, number], d: number): [number, number] => {
	const L = Math.hypot(p[0] - c[0], p[1] - c[1]) || 1;
	return [c[0] + ((p[0] - c[0]) / L) * d, c[1] + ((p[1] - c[1]) / L) * d];
};

// ---------- teal radius ruler (nucleus to the outer ring) ----------
export const Ruler: React.FC<{c: [number, number]; R: number; ang?: number; at: number; out?: number; o?: number; label?: string; size?: number; lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end'}> = ({c, R, ang = 0, at, out, o = 1, label, size = 44, lx, ly, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 8) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * o;
	if (v <= 0.005) return null;
	const x1 = c[0] + R * Math.cos(ang), y1 = c[1] + R * Math.sin(ang);
	const nx = -Math.sin(ang) * 12, ny = Math.cos(ang) * 12;
	return (
		<g opacity={v}>
			<DrawPath d={`M${c[0]},${c[1]} L${x1},${y1}`} at={at} dur={14} color={TEAL_T} width={6} />
			<line x1={x1 - nx} y1={y1 - ny} x2={x1 + nx} y2={y1 + ny} stroke={TEAL_T} strokeWidth={6} strokeLinecap="round" opacity={prog(f, at + 12, 6)} />
			{label ? <Sx x={lx ?? x1 + 16} y={ly ?? y1 - 16} text={label} size={size} color={TEAL_T} anchor={anchor} weight={800} at={at + 10} /> : null}
		</g>
	);
};

// ---------- radius bars ----------
/** Horizontal bar: label at x, bar from x + lw, length r * k, teal value after the bar. p: growth 0..1. */
export const HBar: React.FC<{x: number; y: number; lw: number; label: string; r: number; k: number; p: number; h?: number; size?: number; vSize?: number; note?: string; color?: string; o?: number}> = ({x, y, lw, label, r, k, p, h = 40, size = 38, vSize = 38, note, color = TEAL_T, o = 1}) => {
	if (o <= 0.005) return null;
	const e = smooth(p), L = r * k * e;
	return (
		<g opacity={o}>
			<Sx x={x} y={y + h / 2 + size * 0.36} text={label} size={size} color={INK} weight={800} at={-1000} />
			<rect x={x + lw} y={y} width={r * k} height={h} rx={6} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
			{L > 1 ? <rect x={x + lw} y={y} width={L} height={h} rx={6} fill="#bfe3df" stroke={color} strokeWidth={3.5} /> : null}
			{p > 0.6 ? <Sx x={x + lw + r * k + 14} y={y + h / 2 + vSize * 0.36} text={`${r} pm${note ? '  ' + note : ''}`} size={vSize} color={color} weight={800} at={-1000} opacity={clamp01((p - 0.6) / 0.4)} /> : null}
		</g>
	);
};
/** Vertical bar standing on y0 (baseline), centre x, height r * k; teal value above. */
export const VBar: React.FC<{x: number; y0: number; w: number; r: number; k: number; p: number; vSize?: number; o?: number; slot?: boolean}> = ({x, y0, w, r, k, p, vSize = 34, o = 1, slot = true}) => {
	if (o <= 0.005) return null;
	const e = smooth(p), H = r * k * e;
	return (
		<g opacity={o}>
			{slot ? <rect x={x - w / 2} y={y0 - r * k} width={w} height={r * k} rx={5} fill="#fffdf8" stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" /> : null}
			{H > 1 ? <rect x={x - w / 2} y={y0 - H} width={w} height={H} rx={5} fill="#bfe3df" stroke={TEAL_T} strokeWidth={3.5} /> : null}
			{p > 0.6 ? <Sx x={x} y={y0 - r * k - 12} text={`${r}`} size={vSize} color={TEAL_T} anchor="middle" weight={800} at={-1000} opacity={clamp01((p - 0.6) / 0.4)} /> : null}
		</g>
	);
};

// ---------- the radius stepper's four readouts ----------
export type RItem = {label: string; text: string; color?: string};
export const Readouts: React.FC<{x: number; y: number; w: number; items: RItem[]; dx?: number; dy?: number; cols?: number; size?: number; o?: number}> = ({x, y, w, items, dx, dy, cols, size = 52, o = 1}) => {
	if (o <= 0.005) return null;
	const C = cols ?? items.length, DX = dx ?? w + 22, DY = dy ?? size * 1.45 + 54;
	return <g opacity={o}>{items.map((it, i) => <RO key={i} x={x + (i % C) * DX} y={y + Math.floor(i / C) * DY} w={w} label={it.label} text={it.text} color={it.color ?? INK} size={size} />)}</g>;
};

// ---------- a dashed "expected" ring ----------
export const DashRing: React.FC<{cx: number; cy: number; r: number; o?: number; color?: string}> = ({cx, cy, r, o = 1, color = INK}) => (o <= 0.005 ? null : <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={4} strokeDasharray="14 10" opacity={o} />);

/** Two short red double-headed arrows (repulsion) between electron a and b, flickering with phase t. */
export const Repel: React.FC<{a: [number, number]; b: [number, number]; o: number}> = ({a, b, o}) => {
	if (o <= 0.005) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
	const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
	const L = Math.min(34, Math.hypot(b[0] - a[0], b[1] - a[1]) * 0.32);
	const ux = Math.cos(ang), uy = Math.sin(ang), h = 10;
	const p1: [number, number] = [mx - ux * L, my - uy * L], p2: [number, number] = [mx + ux * L, my + uy * L];
	const hd = (p: [number, number], s: number) => `M${p[0] - s * ux * h - uy * h * 0.7},${p[1] - s * uy * h + ux * h * 0.7} L${p[0]},${p[1]} L${p[0] - s * ux * h + uy * h * 0.7},${p[1] - s * uy * h - ux * h * 0.7}`;
	return (
		<g opacity={o} stroke="#c4362f" strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />
			<path d={hd(p2, 1)} />
			<path d={hd(p1, -1)} />
		</g>
	);
};
