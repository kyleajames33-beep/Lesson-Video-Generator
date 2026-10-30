// M7 P05 board pieces on the M6 P02 practical kit, the C06 strip parts and the C10 ester parts. README for Claude:
// - R11 / R21: the two ratio colours (1 : 1 grey-blue, 2 : 1 teal), used on chips, blocks, dots and the ladder.
// - Ladder: the yield ladder: a vertical 0 to 100% bar; `band` draws the unnumbered dashed navy equilibrium limit (at
//   BAND), `grey` greys the region above it, `loss` hatches the gap from the fill down to the band in terracotta,
//   `fill` keys the solid fill (60% by default) and `pulse` makes the hatch glow.
// - Blocks: a ratio's mole blocks (amber acid squares, blue alcohol square), with an optional navy ring on the alcohol.
// - DotStrip: the class dot strip (30 to 70% scale, three dots per ratio, a short bar at each mean); dx(v) is exported.
// - WetFlag: the wet-mass stack ("ester + water + acid") with a "too high" arrow.
// - BalR: the analytical balance plate with an amber readout over its display. RefluxAt: the reflux plate with points.
// - Stream, Grains, DropperO: coded pours, anti-bumping granules and the teacher's dropper outline (no hands).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {HAZ, INK, INK_SOFT, Sx, TEAL, TRead, smooth, treadW} from '../chem-m6-p02/parts';
import {NAVY, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Plate, ptOn} from '../chem-m7-c06/parts';
import {AMB, BLUE} from '../chem-m7-c10/parts';
import {BALANCE, BALD, REFLUX, RP} from './common';

export const R11 = '#5b7fa6', R21 = TEAL, GREENC = '#2f8a5b', TERRA = HAZ, GREY = '#8a847a';
export const BAND = 0.82;
export {AMB, BLUE, HAZ, INK, INK_SOFT, NAVY, TEAL};

// ---------- yield ladder ----------
let ladId = 0;
export type LadderP = {x: number; y: number; w: number; h: number};
export const ladY = (L: LadderP, v: number) => L.y + L.h * (1 - v);
export const Ladder: React.FC<{L: LadderP; at: number; out?: number; o?: number; fill?: {at: number; v: number}[]; band?: number; grey?: number; loss?: number; pulse?: number; color?: string; labels?: boolean; size?: number; pct?: boolean}> = ({L, at, out, o = 1, fill = [{at: -1000, v: 0.6}], band, grey, loss, pulse, color = R21, labels = true, size = 24, pct = true}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `lad-${++ladId}`, []);
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	let val = 0;
	fill.forEach(k => { val += (k.v - val) * smooth(prog(f, k.at, 30)); });
	const bandP = band === undefined ? 0 : prog(f, band, 16);
	const greyP = grey === undefined ? 0 : prog(f, grey, 14);
	const lossP = loss === undefined ? 0 : prog(f, loss, 16);
	const pl = pulse === undefined ? 0 : vis(f, pulse, pulse + 50) * (0.5 + 0.5 * Math.sin((f - pulse) * 0.3));
	const yb = ladY(L, BAND), yv = ladY(L, val);
	return (
		<g opacity={v}>
			<defs>
				<pattern id={id} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={14} stroke={TERRA} strokeWidth={4} /></pattern>
			</defs>
			<rect x={L.x} y={L.y} width={L.w} height={L.h} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
			{greyP > 0.01 ? <rect x={L.x + 3} y={L.y + 3} width={L.w - 6} height={yb - L.y - 3} rx={8} fill="#d9d4ca" opacity={0.75 * greyP} /> : null}
			{val > 0.005 ? <rect x={L.x + 3} y={yv} width={L.w - 6} height={L.y + L.h - 3 - yv} rx={6} fill={color} opacity={0.85} /> : null}
			{lossP > 0.01 ? <g opacity={lossP}><rect x={L.x + 3} y={yb} width={L.w - 6} height={yv - yb} fill={`url(#${id})`} opacity={0.75} /><rect x={L.x + 3} y={yb} width={L.w - 6} height={yv - yb} fill="none" stroke={TERRA} strokeWidth={2 + 4 * pl} /></g> : null}
			{bandP > 0.01 ? <g opacity={bandP}><line x1={L.x - 14} y1={yb} x2={L.x - 14 + (L.w + 28) * smooth(bandP)} y2={yb} stroke={NAVY} strokeWidth={5} strokeDasharray="12 8" /></g> : null}
			{labels ? <>
				<Sx x={L.x - 12} y={L.y + size * 0.35} text="100%" size={size} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
				<Sx x={L.x - 12} y={L.y + L.h + size * 0.35} text="0%" size={size} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			</> : null}
			{pct && val > 0.05 ? <Sx x={L.x + L.w + 14} y={yv + size * 0.4} text={`${Math.round(val * 100)}%`} size={size * 1.3} color={color} weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- mole blocks ----------
export const Blocks: React.FC<{x: number; y: number; acid: number; at: number; ring?: number; s?: number; o?: number}> = ({x, y, acid, at, ring, s = 1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const b = 56 * s, g = 14 * s;
	const ax = x + acid * (b + g) + 24 * s;
	return (
		<g opacity={v}>
			{Array.from({length: acid}, (_, i) => <g key={i} opacity={prog(f, at + i * 6, 10)}><rect x={x + i * (b + g)} y={y} width={b} height={b} rx={8} fill="#fbedd0" stroke={AMB} strokeWidth={3} /><Sx x={x + i * (b + g) + b / 2} y={y + b * 0.66} text="acid" size={15 * s} color={AMB} anchor="middle" weight={800} at={-1000} /></g>)}
			<g opacity={prog(f, at + acid * 6, 10)}><rect x={ax} y={y} width={b} height={b} rx={8} fill="#e3f0fa" stroke={BLUE} strokeWidth={3} /><Sx x={ax + b / 2} y={y + b * 0.66} text="alc." size={15 * s} color={BLUE} anchor="middle" weight={800} at={-1000} /></g>
			{ring !== undefined ? <g opacity={prog(f, ring, 12)}><DrawPath d={`M${ax + b / 2},${y - 14 * s} A${b * 0.78},${b * 0.78} 0 1 1 ${ax + b / 2 - 1},${y - 14 * s}`} at={ring} dur={16} color={NAVY} width={4} /></g> : null}
		</g>
	);
};

// ---------- class dot strip ----------
export type Strip = {x0: number; x1: number; y: number};
export const dx = (S: Strip, v: number) => S.x0 + ((v - 30) / 40) * (S.x1 - S.x0);
export const RUNS = {r11: [41, 38, 44], r21: [60, 57, 63]};
export const DotStrip: React.FC<{S: Strip; at: number; a11: number; a21: number; o?: number}> = ({S, at, a11, a21, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const dots = (vals: number[], a: number, col: string, mean: number) => vals.map((q, i) => {
		const p = prog(f, a + i * 8, 10);
		return p > 0.01 ? <circle key={i} cx={dx(S, q)} cy={S.y - 36 - i * 30} r={12 * (0.6 + 0.4 * p)} fill={col} stroke={INK} strokeWidth={2} opacity={p} /> : null;
	}).concat(<g key="m" opacity={prog(f, a + 26, 10)}><line x1={dx(S, mean)} y1={S.y - 120} x2={dx(S, mean)} y2={S.y - 14} stroke={col} strokeWidth={5} /></g>);
	return (
		<g opacity={v}>
			<line x1={S.x0} y1={S.y} x2={S.x1} y2={S.y} stroke={INK_SOFT} strokeWidth={3} />
			{[30, 40, 50, 60, 70].map(t => <g key={t}><line x1={dx(S, t)} y1={S.y} x2={dx(S, t)} y2={S.y + 12} stroke={INK_SOFT} strokeWidth={3} /><Sx x={dx(S, t)} y={S.y + 42} text={`${t}%`} size={24} color={INK_SOFT} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={(S.x0 + S.x1) / 2} y={S.y + 80} text="percentage yield" size={24} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			{dots(RUNS.r11, a11, R11, 41)}
			{dots(RUNS.r21, a21, R21, 60)}
		</g>
	);
};

// ---------- wet-mass flag ----------
export const WetFlag: React.FC<{x: number; y: number; at: number; parts?: string[]; o?: number; size?: number}> = ({x, y, at, parts = ['ester', 'water', 'acid'], o = 1, size = 22}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const cols = ['#e2b04a', '#7fb2d9', '#d9a066', '#9fb7d6'];
	const hs = [90, 34, 28, 24];
	let yy = y;
	return (
		<g opacity={v}>
			{parts.map((p, i) => {
				const h = hs[i];
				yy -= h;
				const q = prog(f, at + i * 10, 10);
				return <g key={i} opacity={q}><rect x={x} y={yy} width={70} height={h} fill={cols[i]} stroke={INK} strokeWidth={2} /><Sx x={x + 84} y={yy + h / 2 + size * 0.35} text={p} size={size} color={INK} weight={700} at={-1000} /></g>;
			})}
			<g opacity={prog(f, at + parts.length * 10 + 6, 10)}>
				<path d={`M${x - 26},${y} L${x - 26},${yy - 10} M${x - 38},${yy + 4} L${x - 26},${yy - 10} L${x - 14},${yy + 4}`} fill="none" stroke={TERRA} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			</g>
		</g>
	);
};

// ---------- balance with readout ----------
export const BalR: React.FC<{cx: number; top: number; h: number; at: number; out?: number; text: (f: number) => string; pulse?: number; o?: number; sample?: string}> = ({cx, top, h, at, out, text, pulse, o = 1, sample = 'vial + ester 16.26 g'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const d = ptOn(BALANCE, cx, top, h, BALD[0], BALD[1]);
	const size = Math.max(16, h * 0.075);
	const w = treadW(size, sample);
	return <g opacity={v}><Plate p={BALANCE} cx={cx} top={top} h={h} /><TRead x={d[0] - w / 2} y={d[1] - size * 0.78} text={text} at={-1000} size={size} sample={sample} pulse={pulse} /></g>;
};

// ---------- reflux plate ----------
export type RPos = {cx: number; top: number; h: number};
export const rp = (P: RPos, k: keyof typeof RP): V2 => ptOn(REFLUX, P.cx, P.top, P.h, RP[k][0], RP[k][1]);

/** A coded liquid stream falling into point b from above, between at and at + dur. */
export const Stream: React.FC<{b: V2; at: number; dur?: number; color?: string; len?: number}> = ({b, at, dur = 40, color = '#d9b45a', len = 140}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, at + dur, 8);
	if (v <= 0.01) return null;
	const t = smooth(prog(f, at, 10));
	return <g opacity={v}><path d={`M${b[0] + 40},${b[1] - len} Q${b[0] + 8},${b[1] - len * 0.6} ${b[0]},${b[1] - len + len * t}`} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" opacity={0.85} /></g>;
};
/** A few grey granules falling to point b. */
export const Grains: React.FC<{b: V2; at: number; n?: number}> = ({b, at, n = 3}) => {
	const f = useCurrentFrame();
	return <g>{Array.from({length: n}, (_, i) => {
		const t = prog(f, at + i * 6, 18);
		if (t <= 0) return null;
		const y = b[1] - 160 + 160 * t * t;
		return <circle key={i} cx={b[0] - 12 + i * 12} cy={y} r={6} fill="#9a948a" stroke={INK} strokeWidth={1.5} />;
	})}</g>;
};
/** The teacher's dropper (coded outline, no hands) above point b, with falling drops. */
export const DropperO: React.FC<{b: V2; at: number; out?: number; rot?: number}> = ({b, at, out, rot = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	const tx = b[0], ty = b[1] - 140;
	return (
		<g opacity={v}>
			<g transform={`rotate(${rot},${b[0]},${b[1]})`}>
			<path d={`M${tx - 9},${ty} L${tx - 9},${ty + 110} L${tx},${ty + 140} L${tx + 9},${ty + 110} L${tx + 9},${ty} Z`} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={3} />
			<ellipse cx={tx} cy={ty - 26} rx={18} ry={30} fill="#d9d4ca" stroke={INK_SOFT} strokeWidth={3} />
			</g>
			{[0, 1, 2, 3].map(i => {
				const t = ((f - at - 10 - i * 12) % 48) / 24;
				if (f < at + 10 || t < 0 || t > 1) return null;
				return <circle key={i} cx={b[0]} cy={b[1] + 6 + t * 60} r={6} fill="#e9e4da" stroke={INK_SOFT} strokeWidth={2} opacity={1 - t * 0.4} />;
			})}
		</g>
	);
};

/** A grey "example data" style tag helper (small). */
export const Note: React.FC<{x: number; y: number; text: string; at: number; out?: number; o?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, o = 1, anchor = 'start'}) => <Tag x={x} y={y} text={text} at={at} out={out} size={20} o={o} anchor={anchor} />;
