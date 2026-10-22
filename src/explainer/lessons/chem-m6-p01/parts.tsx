// Drawing parts for M6 P01 (the red cabbage indicator practical). One visual system with P02 to P06 and, through them,
// C01 to C16 (re-exported from P06): chips, crossed chips, question card, countdown, key notes, the P02 risk table and
// cards, the C07 full meter, the C13 pH ruler, bands and indicator tokens, the P06 falling drop and step card.
// New here (lesson-local):
// - CabBeaker: the four aligned red cabbage beaker plates (purple, red, green, yellow) crossfading at one place;
// - DBottle: the dropper bottle with a coded label band and tab; its dropper (cap, bulb and stem, clipped from the
//   plate) lifts on a coded arc to a target, releases coded drops, and returns (no hands);
// - Wells: the white-tile well plate with coded fills that bloom from colourless as drops land;
// - Chart: the seven-swatch colour chart strip with pH labels; CTok / TokRow: coloured pigment tokens that lose
//   protons (teal) one step at a time; CellLens: a cabbage cell holding a purple pigment compartment whose membranes
//   break; ClockChip, ThermoChip, LoopArrow, Tracker (the three-cycle tracker), DropCount.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {CAB, CAB_SURF, DROPB, DROP_N, PLATE_WHITE, WELL_R, WELL_X, WELL_Y} from './assets';
import type {PDef} from './assets';
import {Drop, Fade, INK, INK_SOFT, PROTON, PROTON_INK, PicH, Sx, TEAL, clamp01, lerp, natP, picW, smooth, vis} from '../chem-m6-p06/parts';
import {hexMix} from './common';

export * from '../chem-m6-p06/parts';

// ---------- colours: the cabbage series (matched to the painted plates), the reagent tabs ----------
export const C = {
	red: '#b3264d', pink: '#d8659a', violet: '#8f429f', purple: '#7a2a80', blue: '#3e5cb5', bg: '#2a8a86', green: '#2f8a33',
	yellow: '#cdbf72', stock: '#781671', clear: '#eef1f2',
};
export const ACID_T = TEAL, BASE_T = '#6f55a3', WATER_T = '#9a948a';
export const CHART = [
	{p: 2, c: C.red, n: 'red'}, {p: 4, c: C.pink, n: 'pink'}, {p: 6, c: C.violet, n: 'violet'}, {p: 7, c: C.purple, n: 'purple'},
	{p: 8, c: C.blue, n: 'blue'}, {p: 10, c: C.bg, n: 'blue-green'}, {p: 12, c: C.green, n: 'green'},
];
export const pale = (c: string, k: number) => hexMix(c, '#ffffff', k);
export const RX = 1190;

// ---------- the red cabbage beaker: purple, red, green, yellow at one place ----------
export type CState = {at: number; s: 'p' | 'r' | 'g' | 'y'; d?: number};
export const cabW = (h: number) => picW(CAB.p, h);
/** Liquid surface centre of a cabbage beaker placed at (x, y, h). */
export const cabSurf = (x: number, y: number, h: number): [number, number] => natP(CAB.p, x, y, h, 1000, CAB_SURF);
export const CabBeaker: React.FC<{x: number; y: number; h: number; states: CState[]; o?: number}> = ({x, y, h, states, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const w = states.map(() => 0);
	w[0] = 1;
	for (let k = 1; k < states.length; k++) {
		const t = prog(f, states[k].at, states[k].d ?? 16);
		for (let j = 0; j < k; j++) w[j] *= 1 - t;
		w[k] = t;
	}
	return <g opacity={o}>{states.map((s, i) => (w[i] > 0.01 ? <PicH key={i} p={CAB[s.s]} x={x} y={y} h={h} o={w[i]} /> : null))}</g>;
};
/** Quick alternating states (for fast cycles): red, green, red ... from t0 every `step` frames, n swaps. */
export const swings = (t0: number, step: number, n: number, first: 'g' | 'r' = 'g'): CState[] =>
	Array.from({length: n}, (_, i) => ({at: t0 + i * step, s: (i % 2 === 0 ? first : first === 'g' ? 'r' : 'g') as 'g' | 'r', d: 8}));

// ---------- dropper bottle ----------
export type Trip = {at: number; to: [number, number]; n: number; gap?: number; y1: number; color: string; hold?: number};
let dbId = 0;
const tripEnd = (t: Trip) => t.at + 20 + t.n * (t.gap ?? 9) + (t.hold ?? 6);
/** Rest tip of a dropper bottle placed at (x, y, h). */
export const dRest = (x: number, y: number, h: number): [number, number] => natP(DROPB, x, y, h, DROP_N.tip[0], DROP_N.tip[1]);
/** Dropper tip position for a list of trips (arc out over 20 frames, drops, arc back over 18 frames). */
const tipAt = (rest: [number, number], trips: Trip[], f: number): [number, number] => {
	for (const t of trips) {
		const e = tripEnd(t);
		if (f < t.at) continue;
		if (f <= t.at + 20) {
			const q = smooth((f - t.at) / 20);
			return [lerp(rest[0], t.to[0], q), lerp(rest[1], t.to[1], q) - Math.sin(q * Math.PI) * 160];
		}
		if (f <= e) return t.to;
		if (f <= e + 18) {
			const q = smooth((f - e) / 18);
			return [lerp(t.to[0], rest[0], q), lerp(t.to[1], rest[1], q) - Math.sin(q * Math.PI) * 120];
		}
	}
	return rest;
};
export const dbW = (h: number) => picW(DROPB, h);
export type DDrop = {x: number; y0: number; y1: number; at: number; color: string};
export const DBottle: React.FC<{x: number; y: number; h: number; lines: string[]; tab: string; at: number; out?: number; o?: number; trips?: Trip[]; size?: number; tip?: (f: number, rest: [number, number]) => [number, number]; drops?: DDrop[]}> = ({x, y, h, lines, tab, at, out, o = 1, trips = [], size, tip: tipFn, drops = []}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `db-${++dbId}`, []);
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const p: PDef = DROPB;
	const k = h / p.box[3];
	const ix = x - p.box[0] * k, iy = y - p.box[1] * k, iw = p.nat[0] * k, ih = p.nat[1] * k;
	const N = (nx: number, ny: number): [number, number] => [x + (nx - p.box[0]) * k, y + (ny - p.box[1]) * k];
	const rest = N(DROP_N.tip[0], DROP_N.tip[1]);
	const tip = tipFn ? tipFn(f, rest) : tipAt(rest, trips, f);
	const dx = tip[0] - rest[0], dy = tip[1] - rest[1];
	const [cx0, cy0, cx1, cy1] = DROP_N.cap, [sx0, sy0, sx1, sy1] = DROP_N.stem;
	const a = N(cx0, cy0), b = N(cx1, cy1), s0 = N(sx0, sy0), s1 = N(sx1, sy1);
	const lift = `M${a[0]},${a[1]} L${b[0]},${a[1]} L${b[0]},${b[1]} L${a[0]},${b[1]} Z M${s0[0]},${s0[1]} L${s1[0]},${s0[1]} L${s1[0]},${s1[1]} L${s0[0]},${s1[1]} Z`;
	const outer = `M${ix},${iy} L${ix + iw},${iy} L${ix + iw},${iy + ih} L${ix},${iy + ih} Z`;
	const img = <image href={staticFile(p.src)} x={ix} y={iy} width={iw} height={ih} />;
	const [l0, l1] = [N(DROP_N.label[0], DROP_N.label[1]), N(DROP_N.label[2], DROP_N.label[3])];
	const lh = l1[1] - l0[1];
	const ts = size ?? Math.max(14, h * 0.048);
	const out2 = Math.hypot(dx, dy) > 2;
	return (
		<g opacity={v}>
			<clipPath id={id + 'b'}><path d={outer + ' ' + `M${a[0]},${a[1]} L${b[0]},${a[1]} L${b[0]},${b[1]} L${a[0]},${b[1]} Z`} clipRule="evenodd" /></clipPath>
			<clipPath id={id + 'd'}><path d={lift} /></clipPath>
			<clipPath id={id + 'c'}><path d={`M${a[0]},${a[1]} L${b[0]},${a[1]} L${b[0]},${b[1]} L${a[0]},${b[1]} Z`} /></clipPath>
			<g clipPath={`url(#${id}b)`}>{img}</g>
			<rect x={l0[0] + 3} y={l0[1] + lh * 0.06} width={l1[0] - l0[0] - 6} height={lh * 0.2} fill={tab} opacity={0.9} />
			{lines.map((t, i) => <Sx key={i} x={(l0[0] + l1[0]) / 2} y={l0[1] + lh * (0.52 + i * 0.26)} text={t} size={ts} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{out2 ? <g transform={`translate(${dx},${dy})`} clipPath={`url(#${id}d)`}>{img}</g> : <g clipPath={`url(#${id}c)`}>{img}</g>}
			{trips.map((t, i) => Array.from({length: t.n}, (_, j) => <Drop key={i + '-' + j} x={t.to[0]} y0={t.to[1] + 6} y1={t.y1} at={t.at + 20 + j * (t.gap ?? 9)} color={t.color} r={6} />))}
			{drops.map((d, i) => <Drop key={'d' + i} x={d.x} y0={d.y0} y1={d.y1} at={d.at} color={d.color} r={6} />)}
		</g>
	);
};
/** Frames at which each drop of a trip lands (for crossfades and counters). */
export const dropLand = (t: Trip, j: number) => t.at + 20 + j * (t.gap ?? 9) + 14;
export const tripDone = (t: Trip) => dropLand(t, t.n - 1);
/** Drop count shown by a counter: how many of the trips' drops have landed by frame f. */
export const landed = (trips: Trip[], f: number) => trips.reduce((a, t) => a + Array.from({length: t.n}, (_, j) => (f >= dropLand(t, j) ? 1 : 0)).reduce((x, y) => x + y, 0 as number), 0);

// ---------- well plate with coded fills ----------
export type WFill = {r: number; c: number; color: string; at?: number; bloom?: number; o?: number; ring?: number; pale?: number};
export const plateW = (h: number) => picW(PLATE_WHITE, h);
export const wellPt = (x: number, y: number, h: number, r: number, c: number): [number, number] => natP(PLATE_WHITE, x, y, h, WELL_X[c], WELL_Y[r]);
export const wellR = (h: number) => WELL_R * (h / PLATE_WHITE.box[3]);
export const Wells: React.FC<{x: number; y: number; h: number; fills: WFill[]; at: number; out?: number; o?: number}> = ({x, y, h, fills, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const R = wellR(h) * 0.86;
	return (
		<g opacity={v}>
			<PicH p={PLATE_WHITE} x={x} y={y} h={h} />
			{fills.map((w, i) => {
				const o2 = w.at === undefined ? 1 : prog(f, w.at, 10);
				if (o2 <= 0.01) return null;
				const b = w.bloom === undefined ? 1 : smooth(prog(f, w.bloom, 18));
				const [cx, cy] = wellPt(x, y, h, w.r, w.c);
				const col = hexMix(C.clear, w.pale ? pale(w.color, w.pale) : w.color, b);
				return (
					<g key={i} opacity={o2 * (w.o ?? 1)}>
						<circle cx={cx} cy={cy} r={R} fill={col} opacity={0.9} stroke="rgba(60,45,20,0.25)" strokeWidth={1.5} />
						<ellipse cx={cx - R * 0.3} cy={cy - R * 0.35} rx={R * 0.32} ry={R * 0.16} fill="#ffffff" opacity={0.35} />
					</g>
				);
			})}
		</g>
	);
};
/** A coded single well (for thumbnails): a ring with a coloured fill. */
export const Well: React.FC<{cx: number; cy: number; r: number; color: string; at: number; out?: number; o?: number; label?: string; size?: number}> = ({cx, cy, r, color, at, out, o = 1, label, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r + 7} fill="#f7f7f5" stroke="rgba(60,45,20,0.35)" strokeWidth={2.5} />
			<circle cx={cx} cy={cy} r={r} fill={color} opacity={0.92} />
			<ellipse cx={cx - r * 0.3} cy={cy - r * 0.35} rx={r * 0.32} ry={r * 0.16} fill="#ffffff" opacity={0.35} />
			{label ? <Sx x={cx} y={cy + r + size + 14} text={label} size={size} color={INK} anchor="middle" weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- the colour chart strip ----------
export type ChartG = {x: number; y: number; sw: number; sh: number; gap: number};
export const chartX = (g: ChartG, i: number) => g.x + i * (g.sw + g.gap);
export const chartW = (g: ChartG) => 7 * g.sw + 6 * g.gap;
export const Chart: React.FC<{g: ChartG; at: number | number[]; out?: number; o?: number; size?: number; names?: boolean; k?: number}> = ({g, at, out, o = 1, size = 26, names = false, k = 0}) => {
	const f = useCurrentFrame();
	const a0 = Array.isArray(at) ? at[0] : at;
	const v = vis(f, a0, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{CHART.map((s, i) => {
				const a = Array.isArray(at) ? at[i] : at + i * 3;
				const q = prog(f, a, 10);
				if (q <= 0.01) return null;
				const x = chartX(g, i);
				return (
					<g key={i} opacity={q}>
						<rect x={x} y={g.y} width={g.sw} height={g.sh} rx={10} fill={k ? pale(s.c, k) : s.c} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
						<Sx x={x + g.sw / 2} y={g.y + g.sh + size + 8} text={`pH ${s.p}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} />
						{names ? <Sx x={x + g.sw / 2} y={g.y + g.sh + size * 2.2 + 10} text={s.n} size={size * 0.85} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A bracket drawn under the strip between swatch i and j. */
export const ChartBr: React.FC<{g: ChartG; i: number; j: number; at: number; out?: number; color?: string; text?: string; dy?: number; size?: number; o?: number}> = ({g, i, j, at, out, color = TEAL, text, dy = 0, size = 26, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const x1 = chartX(g, i) + g.sw / 2, x2 = chartX(g, j) + g.sw / 2, y = g.y - 16 - dy;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y + 10} Q${(x1 + x2) / 2},${y - 26} ${x2},${y + 10}`} at={at} dur={12} color={color} width={4} />
			{text ? <Sx x={(x1 + x2) / 2} y={y - 34} text={text} size={size} color={color} anchor="middle" weight={800} at={at + 6} /> : null}
		</g>
	);
};

// ---------- pigment tokens ----------
/** A coloured pigment token carrying nH protons (teal) on its upper right. */
export const CTok: React.FC<{x: number; y: number; color: string; nH: number; s?: number; o?: number; bend?: number}> = ({x, y, color, nH, s = 1, o = 1, bend = 0}) => {
	if (o <= 0.01) return null;
	const r = 22 * s;
	return (
		<g opacity={o} transform={bend ? `rotate(${bend * 30} ${x} ${y})` : undefined}>
			{Array.from({length: nH}, (_, i) => {
				const a = -0.9 + i * 0.75;
				const hx = x + Math.cos(a) * r * 1.45, hy = y + Math.sin(a) * r * 1.45;
				return <g key={i}><line x1={x} y1={y} x2={hx} y2={hy} stroke={INK} strokeWidth={2.2 * s} /><circle cx={hx} cy={hy} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /></g>;
			})}
			<ellipse cx={x} cy={y} rx={r * (1 + bend * 0.25)} ry={r * (1 - bend * 0.25)} fill={color} stroke={hexMix(color, '#000000', 0.35)} strokeWidth={2.5 * s} />
		</g>
	);
};
/** A proton leaving (from (x, y) up and away) between at and at + 22, fading. */
export const HopOff: React.FC<{x: number; y: number; at: number; s?: number}> = ({x, y, at, s = 1}) => {
	const f = useCurrentFrame();
	const q = clamp01((f - at) / 22);
	if (f < at || q >= 1) return null;
	return <circle cx={x + q * 50 * s} cy={y - q * 70 * s} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} opacity={1 - q * 0.8} />;
};

// ---------- cell lens contents: a cabbage cell holding a purple pigment compartment ----------
export const CellLens: React.FC<{cx: number; cy: number; r: number; brk: number}> = ({cx, cy, r, brk}) => {
	const f = useCurrentFrame();
	const b = smooth(prog(f, brk, 24));
	const w = r * 1.2, h = r * 0.9;
	const dots = Array.from({length: 18}, (_, i) => {
		const a = (i / 18) * Math.PI * 2 + 0.3;
		const r0 = 0.25 + ((i * 37) % 10) / 30;
		const r1 = r0 + 0.55 * b + ((i * 13) % 7) / 20 * b;
		return [cx + Math.cos(a) * w * 0.4 * r1, cy + Math.sin(a) * h * 0.5 * r1];
	});
	return (
		<g>
			<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={26} fill="#eef3e4" stroke="#7c8f5a" strokeWidth={5} strokeDasharray={b > 0.1 ? `${40 - 25 * b} ${8 + 30 * b}` : undefined} />
			<ellipse cx={cx} cy={cy} rx={w * 0.34} ry={h * 0.32} fill={C.stock} opacity={0.55 * (1 - 0.7 * b)} stroke={C.purple} strokeWidth={4} strokeDasharray={b > 0.1 ? `${30 - 20 * b} ${6 + 26 * b}` : undefined} />
			{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={C.purple} opacity={0.85} />)}
		</g>
	);
};

// ---------- small chips ----------
/** A clock chip whose hand sweeps from `run` over `len` frames. */
export const ClockChip: React.FC<{x: number; y: number; text: string; at: number; run: number; len: number; out?: number; o?: number; size?: number}> = ({x, y, text, at, run, len, out, o = 1, size = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const a = clamp01((f - run) / len) * Math.PI * 2 - Math.PI / 2;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={28} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
			<line x1={x} y1={y} x2={x + Math.cos(a) * 20} y2={y + Math.sin(a) * 20} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<circle cx={x} cy={y} r={3.5} fill={INK} />
			<Sx x={x + 44} y={y + size * 0.35} text={text} size={size} color={INK} weight={700} hand at={-1000} />
		</g>
	);
};
/** A coded thermometer whose column falls from hot to room temperature from `run`. */
export const ThermoChip: React.FC<{x: number; y: number; at: number; run: number; out?: number; o?: number}> = ({x, y, at, run, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const q = smooth(prog(f, run, 40));
	const top = y - 100, bot = y + 40;
	const lvl = lerp(top + 8, y - 10, q);
	const col = hexMix('#d0532c', '#5c88b8', q);
	return (
		<g opacity={v}>
			<rect x={x - 11} y={top} width={22} height={bot - top} rx={11} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x - 5} y={lvl} width={10} height={bot - lvl} fill={col} />
			<circle cx={x} cy={bot + 10} r={18} fill={col} stroke={INK_SOFT} strokeWidth={3} />
			<Sx x={x + 34} y={top + 22} text="hot" size={26} color={'#b5502b'} weight={700} at={-1000} opacity={1 - q} />
			<Sx x={x + 34} y={y - 2} text="room temperature" size={26} color={'#3d6a95'} weight={700} at={-1000} opacity={q} />
		</g>
	);
};
/** A loop arrow drawn around a centre (an ellipse with a head), plus an optional label beneath. */
export const LoopArrow: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; o?: number; color?: string; label?: string; pulse?: number; size?: number}> = ({cx, cy, rx, ry, at, out, o = 1, color = TEAL, label, pulse, size = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const pz = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 36) * Math.PI));
	const d = `M${cx + rx},${cy} A${rx},${ry} 0 1 1 ${cx + rx * Math.cos(-0.5)},${cy + ry * Math.sin(-0.5)}`;
	const hx = cx + rx * Math.cos(-0.5), hy = cy + ry * Math.sin(-0.5);
	return (
		<g opacity={v} transform={pz ? `translate(${cx},${cy}) scale(${1 + 0.08 * pz}) translate(${-cx},${-cy})` : undefined}>
			<DrawPath d={d} at={at} dur={26} color={color} width={5} />
			<path d={`M${hx - 20},${hy - 4} L${hx},${hy} L${hx - 6},${hy + 20}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 24, 6)} />
			{label ? <Sx x={cx} y={cy + ry + size + 14} text={label} size={size} color={color} anchor="middle" weight={800} at={at + 20} /> : null}
		</g>
	);
};
/** Three small loops that tick in turn at ticks[i]. */
export const Tracker: React.FC<{x: number; y: number; at: number; ticks: number[]; out?: number; o?: number; label?: string}> = ({x, y, at, ticks, out, o = 1, label = 'cycles'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<Sx x={x} y={y + 10} text={label} size={28} color={INK_SOFT} weight={700} hand at={-1000} />
			{ticks.map((t, i) => {
				const cx = x + label.length * 13 + 50 + i * 80;
				const on = prog(f, t, 8);
				return (
					<g key={i}>
						<circle cx={cx} cy={y} r={24} fill={on > 0.5 ? '#e3f1ea' : '#fffdf8'} stroke={on > 0.5 ? TEAL : INK_SOFT} strokeWidth={3.5} />
						{on > 0.01 ? <DrawPath d={`M${cx - 11},${y} L${cx - 3},${y + 9} L${cx + 12},${y - 10}`} at={t} dur={8} color={TEAL} width={4} /> : null}
						<Sx x={cx} y={y + 54} text={String(i + 1)} size={24} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
/** A drop counter chip whose text is a function of frame; pulses each time `n(f)` changes. */
export const DropCount: React.FC<{x: number; y: number; text: (f: number) => string; at: number; out?: number; o?: number; color?: string; size?: number}> = ({x, y, text, at, out, o = 1, color = INK, size = 32}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const t = text(f);
	const w = t.length * size * 0.55 + 36;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={size * 1.6} rx={size * 0.8} fill="#fffdf8" stroke={color} strokeWidth={3} />
			<Sx x={x + w / 2} y={y + size * 1.12} text={t} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
