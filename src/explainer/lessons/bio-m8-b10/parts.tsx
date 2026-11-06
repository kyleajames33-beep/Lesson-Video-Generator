// B8-10 coded parts (lesson-local; departure: the design suggests the shared Module 8 folder, but this build edits no
// shared or other lessons' files). Abstract diagrams only; the two organ thumbnails are painted plates.
// - MeasuresBar: three labelled columns (incidence, prevalence, mortality) that light and fill with their values.
// - TaskStrip, Givens (grouped values with units, pulsing on use): the data board, built on g01's board pieces.
// - LineG: a small line graph (axes from the first frame, the line draws on cue; projected years dashed).
// - Bars: a bar chart whose bars are empty outlines from the first frame and fill on their cues.
// - Pyramid: an age-structure stack (plain bars, no figures) that can morph between shapes.
// - Squares100: 100 small squares (a population), some lit. Calendar: a January to December strip.
// - TankS: bio-m7-b13's tank, with a split drain (recovery, death). Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Tank} from '../bio-m7-b13/parts';
import {AMBER, AMBER_INK, BLUE, CARD, DrawPath, EDGE, GREYT, GREY_FILL, INK, INK_SOFT, Sx, T, TEAL, clamp01, lerp, mw, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b07/parts';

export * from '../bio-m8-b07/parts';
export {Tank};
export const ON = -1000;

// ---------- measures bar ----------
export const MEAS = [
	{name: 'incidence', q: 'new cases?', col: '#7f9cbd'},
	{name: 'prevalence', q: 'living with it?', col: TEAL},
	{name: 'mortality', q: 'deaths?', col: AMBER_INK},
];
export type MCol = {lit?: number; val?: string; valAt?: number};
export const MeasuresBar: React.FC<{y?: number; h?: number; cols: MCol[]; o?: number; x?: number; w?: number; size?: number}> = ({y = 920, h = 120, cols, o = 1, x = 96, w = 1728, size = 36}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const gap = 24, cw = (w - 2 * gap) / 3;
	return (
		<g opacity={o}>
			{MEAS.map((m, i) => {
				const c = cols[i] ?? {};
				const L = c.lit === undefined ? 0 : prog(f, c.lit, 12);
				const cx = x + i * (cw + gap);
				const va = c.valAt === undefined ? 0 : prog(f, c.valAt, 12);
				return (
					<g key={i}>
						<rect x={cx} y={y} width={cw} height={h} rx={18} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? m.col : EDGE} strokeWidth={L > 0.5 ? 5 : 3} />
						<rect x={cx + 12} y={y + 14} width={14} height={h - 28} rx={5} fill={m.col} opacity={0.35 + 0.65 * L} />
						<Sx x={cx + 42} y={y + 46} text={`${m.name}: ${m.q}`} size={size - 4} color={L > 0.5 ? m.col : GREYT} hand weight={700} at={ON} />
						{c.val && va > 0.01 ? <Sx x={cx + 42} y={y + 96} text={c.val} size={size} color={INK} weight={800} at={c.valAt} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- data board ----------
export const TaskStrip: React.FC<{text: string; at?: number; y?: number; size?: number}> = ({text, at = ON, y = 150, size = 40}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const lines = wrapM(text, size, 1600, false, 700);
	const h = lines.length * size * 1.25 + 30;
	return (
		<g opacity={v}>
			<rect x={96} y={y} width={1728} height={h} rx={18} fill="#eef3f8" stroke={BLUE} strokeWidth={3} />
			<Sx x={120} y={y + 42} text="Task" size={30} color={BLUE} hand weight={700} at={ON} />
			{lines.map((l, k) => <Sx key={k} x={230} y={y + 15 + size * 0.95 + k * size * 1.25} text={l} size={size} color={INK} weight={700} at={ON} />)}
		</g>
	);
};
export type Given = {t: string; at: number; pulse?: number[]; out?: number; tag?: string};
export const Givens: React.FC<{x: number; y: number; w: number; items: Given[]; size?: number; lh?: number}> = ({x, y, w, items, size = 38, lh = 100}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Sx x={x} y={y} text="Givens" size={32} color={INK_SOFT} hand weight={700} at={ON} />
			{items.map((g, i) => {
				const v = vis(f, g.at, g.out, 12);
				if (v <= 0.01) return null;
				const pu = (g.pulse ?? []).reduce((m, p) => Math.max(m, pulse(f, p, 40)), 0);
				const yy = y + 30 + i * lh;
				const lines = wrapM(g.t, size, w - 40, false, 700);
				return (
					<g key={i} opacity={v}>
						{pu > 0.01 ? <rect x={x - 10} y={yy - 6} width={w} height={lines.length * size * 1.18 + 16} rx={10} fill={AMBER} opacity={0.3 * pu} /> : null}
						{lines.map((l, k) => <Sx key={k} x={x + 10} y={yy + size * 0.95 + k * size * 1.18} text={l} size={size} color={INK} weight={700} at={ON} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- line graph ----------
export type LG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const lx = (g: LG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const ly = (g: LG, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
export const Axes: React.FC<{g: LG; yTicks: number[]; xTicks?: number[]; fmt?: (n: number) => string; size?: number; yLabel: string; yLabelPulse?: number; xLabel?: string; o?: number; yLabelW?: number; grid?: boolean}> = ({g, yTicks, xTicks = [], fmt = n => n.toLocaleString('en-AU'), size = 28, yLabel, yLabelPulse, xLabel, o = 1, yLabelW = 900, grid = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const pu = yLabelPulse === undefined ? 0 : pulse(f, yLabelPulse, 40);
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{grid ? Array.from({length: 11}, (_, i) => <line key={'vg' + i} x1={g.x + (g.w * i) / 10} x2={g.x + (g.w * i) / 10} y1={g.y} y2={g.y + g.h} stroke="#ddd2bd" strokeWidth={1.5} />) : null}
			{grid ? Array.from({length: 9}, (_, i) => <line key={'hg' + i} x1={g.x} x2={g.x + g.w} y1={g.y + (g.h * i) / 8} y2={g.y + (g.h * i) / 8} stroke="#ddd2bd" strokeWidth={1.5} />) : null}
			{yTicks.map(t => <g key={'y' + t}><line x1={g.x} x2={g.x + g.w} y1={ly(g, t)} y2={ly(g, t)} stroke="#e6ddcc" strokeWidth={1.5} /><line x1={g.x - 10} x2={g.x} y1={ly(g, t)} y2={ly(g, t)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={ly(g, t) + size * 0.35} text={fmt(t)} size={size} color={INK} anchor="end" weight={600} at={ON} /></g>)}
			{xTicks.map(t => <g key={'x' + t}><line x1={lx(g, t)} x2={lx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} /><Sx x={lx(g, t)} y={g.y + g.h + size * 1.3} text={`${t}`} size={size} color={INK} anchor="middle" weight={600} at={ON} /></g>)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{pu > 0.01 ? <rect x={g.x - 12} y={g.y - size * 1.7} width={Math.min(yLabelW, mw(yLabel, size, false, 800)) + 24} height={size * 1.4} rx={10} fill={AMBER} opacity={0.35 * pu} /> : null}
			{wrapM(yLabel, size, yLabelW, false, 800).reverse().map((l, k) => <Sx key={k} x={g.x} y={g.y - size * 0.75 - k * size * 1.15} text={l} size={size} color={INK} weight={800} at={ON} />)}
			{xLabel ? <Sx x={g.x + g.w} y={g.y + g.h + size * 2.5} text={xLabel} size={size} color={INK} anchor="end" weight={700} at={ON} /> : null}
		</g>
	);
};
/** A polyline drawing on from `at` over `dur`; points with x >= dashFrom are dashed (projections). */
export const Line: React.FC<{g: LG; pts: [number, number][]; at: number; dur?: number; color: string; width?: number; dashFrom?: number; dots?: boolean; o?: number}> = ({g, pts, at, dur = 60, color, width = 6, dashFrom, dots = false, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const k = smooth(prog(f, at, dur));
	const n = Math.max(2, Math.ceil(pts.length * k));
	const shown = pts.slice(0, n);
	const solid = dashFrom === undefined ? shown : shown.filter(p => p[0] <= dashFrom - 1);
	const dash = dashFrom === undefined ? [] : shown.filter(p => p[0] >= dashFrom - 1);
	const d = (ps: [number, number][]) => (ps.length > 1 ? 'M' + ps.map(([a, b]) => `${lx(g, a)},${ly(g, b)}`).join(' L') : '');
	return (
		<g opacity={o}>
			<path d={d(solid)} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" />
			{dash.length > 1 ? <path d={d(dash)} fill="none" stroke={color} strokeWidth={width} strokeDasharray="12 9" strokeLinejoin="round" /> : null}
			{dots ? shown.map(([a, b]) => <circle key={a} cx={lx(g, a)} cy={ly(g, b)} r={5} fill={color} />) : null}
		</g>
	);
};

// ---------- bars (outlines from the first frame) ----------
export type BarSpec = {lab: string; v: number; at: number; col: string; val?: string};
export const Bars: React.FC<{g: LG; bars: BarSpec[]; size?: number; lsize?: number; bw?: number; o?: number; pulses?: [number, number][]; solid?: boolean}> = ({g, bars, size = 32, lsize = 30, bw = 0.55, o = 1, pulses = [], solid = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const slot = g.w / bars.length, w = slot * bw;
	return (
		<g opacity={o}>
			{bars.map((b, i) => {
				const x = g.x + slot * i + (slot - w) / 2;
				const k = smooth(prog(f, b.at, 22));
				const top = ly(g, b.v), base = g.y + g.h;
				const pu = pulses.filter(p => p[0] === i).reduce((m, p) => Math.max(m, pulse(f, p[1], 40)), 0);
				const lines = wrapM(b.lab, lsize, slot - 10, true, 700);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={x - 10} y={top - 10} width={w + 20} height={base - top + 10} rx={10} fill={AMBER} opacity={0.35 * pu} /> : null}
						<rect x={x} y={top} width={w} height={base - top} rx={6} fill={solid ? CARD : 'none'} stroke={solid ? INK : INK_SOFT} strokeWidth={solid ? 3.5 : 3} strokeDasharray={solid ? undefined : '10 7'} />
						<rect x={x} y={base - (base - top) * k} width={w} height={(base - top) * k} rx={6} fill={b.col} opacity={0.88} />
						{k > 0.05 ? <Sx x={x + w / 2} y={top - 12} text={b.val ?? b.v.toLocaleString('en-AU')} size={size} color={INK} anchor="middle" weight={800} at={b.at} /> : null}
						{lines.map((l, kk) => <Sx key={kk} x={x + w / 2} y={base + lsize * 1.25 + kk * lsize * 1.1} text={l} size={lsize} color={INK} anchor="middle" hand weight={700} at={ON} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- age pyramid ----------
export const YOUNG = [0.95, 0.88, 0.8, 0.7, 0.55, 0.38, 0.22];
export const OLD = [0.72, 0.76, 0.8, 0.84, 0.82, 0.7, 0.5];
export const AGEB = ['0-14', '15-29', '30-44', '45-59', '60-74', '75-89', '90+'];
/** Horizontal age bands, young at the bottom. `shape` returns widths 0..1. */
export const Pyramid: React.FC<{x: number; y: number; w: number; h: number; shape: number[]; color: string; label: string; at?: number; o?: number; bands?: boolean; size?: number}> = ({x, y, w, h, shape, color, label, at = ON, o = 1, bands = false, size = 32}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const bh = h / shape.length;
	return (
		<g opacity={v}>
			{shape.map((k, i) => {
				const ww = w * k;
				return <rect key={i} x={x + (w - ww) / 2} y={y + h - (i + 1) * bh + 2} width={ww} height={bh - 4} rx={4} fill={color} opacity={0.82} />;
			})}
			<line x1={x + w / 2} x2={x + w / 2} y1={y} y2={y + h} stroke={INK_SOFT} strokeWidth={2} />
			{bands ? AGEB.map((b, i) => <Sx key={b} x={x - 8} y={y + h - (i + 0.5) * bh + 9} text={b} size={26} color={GREYT} anchor="end" weight={600} at={ON} />) : null}
			<Sx x={x + w / 2} y={y + h + size * 1.2} text={label} size={size} color={INK} anchor="middle" hand weight={700} at={ON} />
		</g>
	);
};
export const mix = (a: number[], b: number[], t: number) => a.map((v, i) => lerp(v, b[i], clamp01(t)));

// ---------- population squares, calendar ----------
export const Squares100: React.FC<{x: number; y: number; sp?: number; lit?: number; nLit?: number; color?: string; o?: number}> = ({x, y, sp = 30, lit, nLit = 50, color = TEAL, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const L = lit === undefined ? 0 : prog(f, lit, 16);
	return (
		<g opacity={o}>
			{Array.from({length: 100}, (_, i) => {
				const on = i % 10 < nLit / 10;
				return <rect key={i} x={x + (i % 10) * sp} y={y + Math.floor(i / 10) * sp} width={sp - 6} height={sp - 6} rx={4} fill={on && L > 0.01 ? color : CARD} fillOpacity={on ? 0.15 + 0.75 * L : 1} stroke={on && L > 0.5 ? color : '#b5ab9b'} strokeWidth={2} />;
			})}
		</g>
	);
};
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
export const Calendar: React.FC<{x: number; y: number; w: number; year?: number; day?: number; o?: number}> = ({x, y, w, year, day, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const cw = w / 12;
	const yv = year === undefined ? 0 : smooth(prog(f, year, 24));
	const dv = day === undefined ? 0 : prog(f, day, 12);
	return (
		<g opacity={o}>
			{MONTHS.map((m, i) => <g key={i}><rect x={x + i * cw} y={y} width={cw - 4} height={56} rx={6} fill={CARD} stroke={INK_SOFT} strokeWidth={2} /><Sx x={x + i * cw + cw / 2 - 2} y={y + 38} text={m} size={28} color={INK} anchor="middle" weight={700} at={ON} /></g>)}
			{yv > 0.01 ? <rect x={x} y={y - 2} width={(w - 4) * yv} height={60} rx={8} fill="#7f9cbd" opacity={0.35} /> : null}
			{dv > 0.01 ? <g opacity={dv}><rect x={x + 5 * cw + cw * 0.72} y={y - 14} width={14} height={84} rx={4} fill={TEAL} /><Sx x={x + 5 * cw + cw * 0.8} y={y + 108} text="30 June" size={28} color={TEAL} anchor="middle" hand weight={700} at={ON} /></g> : null}
		</g>
	);
};

// ---------- tank with a split drain ----------
/** bio-m7-b13's tank plus a drain that splits into recovery (grey) and death (amber) arrows. */
export const TankS: React.FC<{x: number; y: number; w: number; h: number; level: number; inW?: number; drainW?: number; split?: number; at?: number; o?: number; labels?: boolean; size?: number}> = ({x, y, w, h, level, inW = 1, drainW = 1, split = 0, at = ON, o = 1, labels = true, size = 30}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const flow = (f * 2) % 40;
	const dx = x + w + 6, dy = y + h - 28;
	return (
		<g opacity={o}>
			<Tank x={x} y={y} w={w} h={h} at={at} level={level} inO={0} outO={0} noDrain />
			<path d={`M${x - 80},${y - 50} L${x + w * 0.3},${y - 50} L${x + w * 0.3},${y + 14}`} fill="none" stroke={AMBER} strokeWidth={4 + 8 * inW} strokeDasharray="20 14" strokeDashoffset={-flow} strokeLinejoin="round" />
			<path d={`M${x + w * 0.3 - 14},${y + 4} L${x + w * 0.3},${y + 22} L${x + w * 0.3 + 14},${y + 4}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" />
			<rect x={x + w} y={dy - 6 - 10 * drainW} width={40} height={6 + 20 * drainW} fill="#fbfcfd" stroke={INK_SOFT} strokeWidth={3} />
			{split > 0.01 ? <g opacity={split}>
				<path d={`M${dx + 40},${dy - 6} Q${dx + 110},${dy - 6} ${dx + 150},${dy - 70}`} fill="none" stroke={GREYT} strokeWidth={3 + 6 * drainW} strokeDasharray="14 10" strokeDashoffset={-flow} />
				<path d={`M${dx + 40},${dy} Q${dx + 110},${dy} ${dx + 150},${dy + 64}`} fill="none" stroke={AMBER_INK} strokeWidth={3 + 6 * drainW} strokeDasharray="14 10" strokeDashoffset={-flow} />
				{labels ? <><Sx x={dx + 160} y={dy - 76} text="recovery" size={size} color={GREYT} hand weight={700} at={ON} /><Sx x={dx + 160} y={dy + 92} text="death" size={size} color={AMBER_INK} hand weight={700} at={ON} /></> : null}
			</g> : <path d={`M${dx + 40},${dy - 3} L${dx + 120},${dy - 3}`} fill="none" stroke={GREYT} strokeWidth={3 + 8 * drainW} strokeDasharray="14 10" strokeDashoffset={-flow} />}
		</g>
	);
};
/** A sparkline row for the attempt (small, data only). */
export const Spark3: React.FC<{x: number; y: number; w: number; h: number; vals: number[]; max: number; color: string; label: string; size?: number}> = ({x, y, w, h, vals, max, color, label, size = 28}) => {
	const pts = vals.map((v, i) => [x + (w * i) / (vals.length - 1), y + h - (v / max) * h] as [number, number]);
	return (
		<g>
			<line x1={x} x2={x + w} y1={y + h} y2={y + h} stroke={INK_SOFT} strokeWidth={2} />
			<path d={'M' + pts.map(p => p.join(',')).join(' L')} fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" />
			{pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={7} fill={color} />)}
			<Sx x={x} y={y - 12} text={label} size={size} color={INK} hand weight={700} at={ON} />
		</g>
	);
};
export {AMBER, AMBER_INK, BLUE, CARD, EDGE, GREYT, GREY_FILL, INK, INK_SOFT, TEAL, clamp01, lerp, prog, pulse, smooth, vis, T, DrawPath};
