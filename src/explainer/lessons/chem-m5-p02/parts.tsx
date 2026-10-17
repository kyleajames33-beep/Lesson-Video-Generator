// Drawing parts for P02 (colourimetry): painted plates with fallbacks, the colourimeter beam cutaway, the calibration
// graph with its computed fit and read guides, the colour wheel, the 100-square grid, the five-step chain strip,
// pipette and flask for the dilution, and the class results table. Text, chips and the ICE table are reused from
// C5, C6 and C6a; the countdown comes from the kit.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {Arrow, Fade, Ring, Sx, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import {BEAM, BEAM_SOFT, CROSS, FE, RED, SAMPLE, SAMPLE_UNKNOWN, SCN, WATER, fitA, fitC} from './common';
import {COLOURIMETER, COLOURIMETER_EMPTY, CUV, CUV_BLANK, CUV_UNKNOWN, FLASK, PIPETTE, PIPETTE_AXIS, VOL_FLASK, have} from './assets';
import type {PDef} from './assets';

export {Arrow, Fade, Ring, Sx, TEAL, Tick, tw};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- painted plates in SVG: placed by their visible (alpha) box ----------
/** Draw plate `p` so its visible box has its top-left at (x, y) and height h (width from the aspect). */
export const PicH: React.FC<{p: PDef; x: number; y: number; h: number; o?: number}> = ({p, x, y, h, o = 1}) => {
	const k = h / p.box[3];
	return <image href={staticFile(p.src)} x={x - p.box[0] * k} y={y - p.box[1] * k} width={p.nat[0] * k} height={p.nat[1] * k} opacity={o} />;
};
export const picW = (p: PDef, h: number) => (p.box[2] / p.box[3]) * h;

// ---------- cuvettes ----------
export const CUV_H_W = 420 / 1598;
export const cuvW = (h: number) => CUV_H_W * h;
/** Liquid rectangle of a cuvette plate placed at (x, y, h), as fractions of the visible box. */
export const cuvLiquid = (x: number, y: number, h: number) => {
	const w = cuvW(h);
	return {x0: x + w * 0.1, x1: x + w * 0.9, y0: y + h * 0.25, y1: y + h * 0.93};
};
export type CuvKind = number | 'unknown' | 'blank';
/** A painted cuvette. 0..4 = standards 1..5, 'unknown' = the equilibrium mixture, 'blank' = water (brief 53; fallback:
 *  standard 1 with a coded water fill over its liquid). `dots` draws red ion dots in the liquid. */
export const Cuvette: React.FC<{kind: CuvKind; x: number; y: number; h: number; o?: number; dots?: number; seed?: number}> = ({kind, x, y, h, o = 1, dots = 0, seed = 3}) => {
	const f = useCurrentFrame();
	const lq = cuvLiquid(x, y, h);
	let body: React.ReactNode;
	if (kind === 'blank') {
		body = have(CUV_BLANK) ? <PicH p={CUV_BLANK} x={x} y={y} h={h} /> : (
			<>
				<PicH p={CUV[0]} x={x} y={y} h={h} />
				<rect x={lq.x0 - 1} y={lq.y0 - 2} width={lq.x1 - lq.x0 + 2} height={lq.y1 - lq.y0 + 2} fill={WATER} />
				<path d={`M${lq.x0 + (lq.x1 - lq.x0) * 0.22},${lq.y0 + 10} L${lq.x0 + (lq.x1 - lq.x0) * 0.22},${lq.y1 - 10}`} stroke="#ffffff" strokeOpacity={0.8} strokeWidth={Math.max(2, h * 0.012)} strokeLinecap="round" />
			</>
		);
	} else body = <PicH p={kind === 'unknown' ? CUV_UNKNOWN : CUV[kind]} x={x} y={y} h={h} />;
	const r = rng(seed);
	const P = Array.from({length: 24}, () => [r(), r(), r() * 6.28]);
	return (
		<g opacity={o}>
			{body}
			{Array.from({length: Math.round(dots)}, (_, i) => {
				const [u, v, ph] = P[i % 24];
				const cx = lq.x0 + 8 + (lq.x1 - lq.x0 - 16) * u + Math.sin(f * 0.05 + ph) * 3;
				const cy = lq.y0 + 10 + (lq.y1 - lq.y0 - 20) * v + Math.cos(f * 0.04 + ph) * 3;
				return <circle key={i} cx={cx} cy={cy} r={Math.max(4, h * 0.022)} fill={RED} stroke={INK} strokeWidth={1.6} />;
			})}
		</g>
	);
};

// ---------- the painted colourimeter, with its painted blue cuvette masked to the current sample ----------
/** The slot's liquid on the v1 plate (native pixels): front face and side face, drawn over in the sample colour. */
const SLOT_FRONT: [number, number][] = [[646, 916], [702, 934], [702, 1097], [646, 1097]];
const SLOT_SIDE: [number, number][] = [[702, 934], [756, 906], [756, 1080], [702, 1097]];
export const COL_W_H = 1585 / 1599;
/** Painted cuvette in the empty plate's slot (native pixels): top-left and height, matching v1's cuvette. */
const SLOT_CUV = {x: 662, y: 805, h: 292};
export const ColourimeterPic: React.FC<{x: number; y: number; h: number; sample: string | null; o?: number}> = ({x, y, h, sample, o = 1}) => {
	const p = have(COLOURIMETER_EMPTY) ? COLOURIMETER_EMPTY : COLOURIMETER;
	const k = h / p.box[3];
	const X = (nx: number) => x + (nx - p.box[0]) * k, Y = (ny: number) => y + (ny - p.box[1]) * k;
	const poly = (pts: [number, number][]) => pts.map(([a, b]) => `${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(' ');
	// empty plate: the matching painted cuvette stands in the slot (where v1 painted its blue one)
	const si = sample ? SAMPLE.indexOf(sample) : -1;
	const slotCuv = !sample ? null : sample === WATER ? CUV_BLANK : sample === SAMPLE_UNKNOWN ? CUV_UNKNOWN : si >= 0 ? CUV[si] : null;
	return (
		<g opacity={o}>
			<PicH p={p} x={x} y={y} h={h} />
			{p === COLOURIMETER ? (
				<>
					<polygon points={poly(SLOT_FRONT)} fill={sample ?? WATER} />
					<polygon points={poly(SLOT_SIDE)} fill={sample ?? WATER} />
					<polygon points={poly(SLOT_SIDE)} fill="#000" opacity={0.16} />
				</>
			) : slotCuv ? <PicH p={slotCuv} x={X(SLOT_CUV.x)} y={Y(SLOT_CUV.y)} h={SLOT_CUV.h * k} /> : sample ? <rect x={X(650)} y={Y(900)} width={(756 - 650) * k} height={(1097 - 900) * k} fill={sample} /> : null}
		</g>
	);
};
/** Point on the painted colourimeter (native pixel) for pen labels. */
export const colPoint = (x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / COLOURIMETER.box[3];
	return [x + (nx - COLOURIMETER.box[0]) * k, y + (ny - COLOURIMETER.box[1]) * k];
};

// ---------- beam cutaway: lamp, blue filter, cuvette slot, detector, readout ----------
export type CutawayProps = {x: number; y: number; w: number; at: number; out?: number; beamAt?: number; blueAt?: number;
	/** beam height after the sample, 0..1 of the full beam */ pass?: number; readout?: string; readoutAt?: number; children?: React.ReactNode; slotX?: number};
export const cutGeom = (x: number, y: number, w: number) => ({lampX: x + 60, filterX: x + w * 0.22, slotX: x + w * 0.46, detX: x + w * 0.7, readX: x + w * 0.78, beamY: y + 150, beamH: 46});
export const Cutaway: React.FC<CutawayProps> = ({x, y, w, at, out, beamAt = 99999, blueAt = 99999, pass = 1, readout, readoutAt = 99999, children}) => {
	const f = useCurrentFrame();
	const g = cutGeom(x, y, w);
	const H = 300;
	const open = prog(f, at, 20);
	const beam = prog(f, beamAt, 24);
	const blue = prog(f, blueAt, 18);
	const bh = g.beamH;
	const after = bh * pass;
	const glow = 0.25 + 0.75 * pass;
	const segW = (from: number, to: number, p: number) => Math.max(0, (to - from) * p);
	const b1 = clamp01(beam * 3), b2 = clamp01(beam * 3 - 1), b3 = clamp01(beam * 3 - 2);
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x + w / 2},${y + H / 2}) scale(${0.92 + 0.08 * open}) translate(${-(x + w / 2)},${-(y + H / 2)})`}>
				<rect x={x} y={y} width={w} height={H} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				<Sx x={x + 24} y={y + 42} text="inside the colourimeter (side view)" size={30} color={INK_SOFT} hand at={at} />
				{/* beam: white to the filter, then blue to the sample, then thinner blue to the detector */}
				<rect x={g.lampX + 34} y={g.beamY - bh / 2} width={segW(g.lampX + 34, g.filterX, b1)} height={bh} fill="#fff6d8" stroke="#e8d9a8" strokeWidth={2} />
				<rect x={g.filterX + 14} y={g.beamY - bh / 2} width={segW(g.filterX + 14, g.slotX, b2)} height={bh} fill={blue > 0 ? BEAM : '#fff6d8'} opacity={0.35 + 0.5 * blue} />
				<rect x={g.slotX + 30} y={g.beamY - after / 2} width={segW(g.slotX + 30, g.detX - 20, b3)} height={after} fill={BEAM} opacity={0.35 + 0.5 * blue} />
				{/* lamp */}
				<circle cx={g.lampX} cy={g.beamY} r={34} fill="#fff1b8" stroke={INK} strokeWidth={4} />
				<circle cx={g.lampX} cy={g.beamY} r={50} fill="#ffe27a" opacity={0.25 + 0.2 * Math.sin(f * 0.2)} />
				<Sx x={g.lampX} y={y + H - 30} text="lamp" size={30} anchor="middle" hand at={at + 6} />
				{/* filter */}
				<rect x={g.filterX - 4} y={g.beamY - 60} width={18} height={120} rx={4} fill={BEAM} stroke={INK} strokeWidth={3} />
				<Sx x={g.filterX + 5} y={y + H - 30} text="blue filter" size={30} anchor="middle" hand at={at + 10} />
				{/* slot */}
				<path d={`M${g.slotX - 46},${g.beamY - 108} L${g.slotX - 46},${g.beamY + 96} L${g.slotX + 46},${g.beamY + 96} L${g.slotX + 46},${g.beamY - 108}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
				<Sx x={g.slotX} y={y + H - 30} text="sample" size={30} anchor="middle" hand at={at + 14} />
				{children}
				{/* detector */}
				<rect x={g.detX - 20} y={g.beamY - 50} width={40} height={100} rx={8} fill="#cfd6de" stroke={INK} strokeWidth={4} />
				<rect x={g.detX - 20} y={g.beamY - after / 2} width={10} height={after} fill={BEAM} opacity={glow * blue * b3} />
				<Sx x={g.detX} y={y + H - 30} text="detector" size={30} anchor="middle" hand at={at + 18} />
				{/* readout */}
				<rect x={g.readX} y={g.beamY - 44} width={w - (g.readX - x) - 20} height={88} rx={12} fill="#2b3138" />
				<Sx x={g.readX + (w - (g.readX - x) - 20) / 2} y={g.beamY + 14} text={readout ?? 'A = ?'} size={38} color="#9be3b8" anchor="middle" at={Math.min(readoutAt, at + 20)} />
			</g>
		</Fade>
	);
};
/** Counter text for a readout rising from a to b between frames f0 and f1, with three decimals. */
export const countText = (f: number, f0: number, f1: number, a: number, b: number, prefix = 'A = ') => `${prefix}${(a + (b - a) * clamp01((f - f0) / Math.max(1, f1 - f0))).toFixed(3)}`;

// ---------- colour wheel chip: absorbed arc (blue) opposite the seen arc (red-orange) ----------
const WHEEL = ['#c4392f', '#e8742c', '#f2c94c', '#5aa85a', '#3d6fd6', '#7a4fb0'];
export const ColourWheel: React.FC<{cx: number; cy: number; r?: number; at: number; out?: number; labelsAt?: number}> = ({cx, cy, r = 70, at, out, labelsAt}) => {
	const arc = (i: number) => {
		const a0 = ((i * 60 - 120) * Math.PI) / 180, a1 = (((i + 1) * 60 - 120) * Math.PI) / 180;
		return `M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z`;
	};
	const la = labelsAt ?? at + 12;
	return (
		<Fade at={at} out={out}>
			{WHEEL.map((c, i) => <path key={i} d={arc(i)} fill={c} stroke="#fffdf8" strokeWidth={3} />)}
			<circle cx={cx} cy={cy} r={r * 0.36} fill="#fffdf8" />
			{/* blue sector is index 4 (centred at 150 deg, lower left); red-orange 0/1 (upper right) */}
			<Ring cx={cx + r * 0.62 * Math.cos((150 * Math.PI) / 180)} cy={cy + r * 0.62 * Math.sin((150 * Math.PI) / 180)} rx={30} ry={30} at={la} color={BEAM} seed={4} />
			<Sx x={cx - r - 16} y={cy + r + 30} text="absorbed" size={30} color={BEAM} anchor="middle" hand at={la} />
			<Sx x={cx + r + 20} y={cy - r + 4} text="seen" size={30} color={RED} anchor="middle" hand at={la + 6} />
		</Fade>
	);
};

// ---------- calibration graph ----------
export type GraphGeom = {ox: number; oy: number; w: number; h: number; xmax?: number; ymax?: number};
export const gx = (g: GraphGeom, c: number) => g.ox + (c / (g.xmax ?? 2.2)) * g.w;
export const gy = (g: GraphGeom, a: number) => g.oy - (a / (g.ymax ?? 1.0)) * g.h;
export type GPoint = {c: number; a: number; at: number; from?: [number, number]; label?: string};
export const CalGraph: React.FC<{g: GraphGeom; at: number; out?: number; yLabelAt?: number; xLabelAt?: number; points?: GPoint[]; lineAt?: number; extendAt?: number; size?: number; ticks?: boolean}> = ({g, at, out, yLabelAt, xLabelAt, points = [], lineAt = 99999, extendAt, size = 28, ticks = true}) => {
	const f = useCurrentFrame();
	const xmax = g.xmax ?? 2.2, ymax = g.ymax ?? 1.0;
	const xs = Array.from({length: Math.round(xmax / 0.2) + 1}, (_, i) => i * 0.2);
	const ys = Array.from({length: Math.round(ymax / 0.1) + 1}, (_, i) => i * 0.1);
	const grid = prog(f, at + 10, 20);
	const ext = extendAt === undefined ? 0 : prog(f, extendAt, 16);
	const xEnd = xmax;
	return (
		<Fade at={at} out={out}>
			<g opacity={0.55 * grid}>
				{xs.map((c, i) => <path key={'gx' + i} d={`M${gx(g, c)},${g.oy} L${gx(g, c)},${g.oy - g.h}`} stroke="#d8cdb8" strokeWidth={i % 5 === 0 ? 2 : 1.2} />)}
				{ys.map((a, i) => <path key={'gy' + i} d={`M${g.ox},${gy(g, a)} L${g.ox + g.w},${gy(g, a)}`} stroke="#d8cdb8" strokeWidth={i % 5 === 0 ? 2 : 1.2} />)}
			</g>
			<DrawPath d={`M${g.ox},${g.oy - g.h - 20} L${g.ox},${g.oy} L${g.ox + g.w + 20},${g.oy}`} at={at} dur={22} width={5} />
			{ticks ? (
				<g opacity={grid}>
					{xs.filter((_, i) => i % 2 === 0).map(c => <Sx key={'lx' + c} x={gx(g, c)} y={g.oy + size + 8} text={c.toFixed(1)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-100} />)}
					{ys.filter((_, i) => i % 2 === 0).map(a => <Sx key={'ly' + a} x={g.ox - 12} y={gy(g, a) + size * 0.34} text={a.toFixed(1)} size={size} color={INK_SOFT} anchor="end" weight={600} at={-100} />)}
				</g>
			) : null}
			<g transform={`translate(${g.ox - 76},${g.oy - g.h / 2}) rotate(-90)`}>
				<Sx x={0} y={0} text="absorbance, A" size={34} anchor="middle" hand at={yLabelAt ?? at + 10} />
			</g>
			<Sx x={g.ox + g.w / 2} y={g.oy + size + 54} text="[FeSCN^{2+}]  (× 10^{-4} mol/L)" size={32} anchor="middle" hand at={xLabelAt ?? at + 10} />
			{/* the fitted line: solid inside the standards (0 to 2.00), dashed beyond */}
			<DrawPath d={`M${gx(g, 0)},${gy(g, fitA(0))} L${gx(g, 2.0)},${gy(g, fitA(2.0))}`} at={lineAt} dur={30} color={TEAL} width={5} />
			<g opacity={prog(f, lineAt + 26, 10)}>
				<path d={`M${gx(g, 2.0)},${gy(g, fitA(2.0))} L${gx(g, xEnd)},${gy(g, fitA(xEnd))}`} stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeDasharray={ext > 0 ? '10 12' : undefined} opacity={1 - 0.45 * ext} />
			</g>
			{points.map((p, i) => <GraphPoint key={i} g={g} p={p} />)}
		</Fade>
	);
};
const GraphPoint: React.FC<{g: GraphGeom; p: GPoint}> = ({g, p}) => {
	const f = useCurrentFrame();
	const e = prog(f, p.at, 26);
	if (f < p.at) return null;
	const tx = gx(g, p.c), ty = gy(g, p.a);
	const x = p.from ? p.from[0] + (tx - p.from[0]) * e : tx, y = p.from ? p.from[1] + (ty - p.from[1]) * e : ty;
	const land = prog(f, p.at + 24, 8);
	return (
		<g>
			<circle cx={x} cy={y} r={9 + (1 - land) * 4} fill={RED} stroke={INK} strokeWidth={2.5} />
			{p.label ? <Sx x={tx - 16} y={ty - 16} text={p.label} size={26} color={INK} anchor="end" weight={600} at={p.at + 22} /> : null}
		</g>
	);
};
/** Read across from absorbance a on the y axis to the line, then down to the x axis. Ends with a ring on the value. */
export const ReadGuide: React.FC<{g: GraphGeom; a: number; at: number; downAt: number; valueAt?: number; value?: string; out?: number; color?: string}> = ({g, a, at, downAt, valueAt, value, out, color = AMBER_INK}) => {
	const f = useCurrentFrame();
	const x = gx(g, fitC(a)), y = gy(g, a);
	return (
		<Fade at={at} out={out}>
			<Sx x={g.ox + 14} y={y - 14} text={a.toFixed(3)} size={30} color={color} weight={700} at={at} />
			<DrawPath d={`M${g.ox},${y} L${x},${y}`} at={at + 4} dur={26} color={color} width={5} dash="12 9" />
			<circle cx={x} cy={y} r={11} fill={color} opacity={prog(f, at + 28, 8)} />
			<DrawPath d={`M${x},${y} L${x},${g.oy}`} at={downAt} dur={24} color={color} width={5} dash="12 9" />
			{value ? (
				<>
					<rect x={x - 52} y={g.oy + 6} width={104} height={44} rx={10} fill="#fffdf8" opacity={prog(f, valueAt ?? downAt + 22, 8)} />
					<Sx x={x} y={g.oy + 40} text={value} size={34} color={color} anchor="middle" weight={800} at={valueAt ?? downAt + 22} />
					<Ring cx={x} cy={g.oy + 28} rx={64} ry={32} at={valueAt ?? downAt + 22} color={AMBER} seed={5} />
				</>
			) : null}
		</Fade>
	);
};

// ---------- small boards ----------
/** Dashed "illustrative class data" chip. */
export const DataChip: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const text = 'illustrative class data';
	const w = tw(text, 30, true) + 50;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={50} rx={25} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
			<Sx x={x + w / 2} y={y + 35} text={text} size={30} color={INK_SOFT} anchor="middle" hand at={at} />
		</Fade>
	);
};
/** A dark instrument readout box. */
export const Readout: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number}> = ({x, y, w, text, at, out}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={84} rx={12} fill="#2b3138" />
		<Sx x={x + w / 2} y={y + 56} text={text} size={40} color="#9be3b8" anchor="middle" at={at} />
	</Fade>
);
/** 10 x 10 grid; `n` squares fill red one after another from `at`. */
export const Grid100: React.FC<{x: number; y: number; cell?: number; n: number; at: number; fillAt?: number; color?: string; out?: number; every?: number}> = ({x, y, cell = 26, n, at, fillAt, color = RED, out, every = 3}) => {
	const f = useCurrentFrame();
	const fa = fillAt ?? at + 10;
	return (
		<Fade at={at} out={out}>
			{Array.from({length: 100}, (_, i) => {
				const r = Math.floor(i / 10), c = i % 10;
				const on = i < n ? prog(f, fa + i * every, 8) : 0;
				return <rect key={i} x={x + c * cell} y={y + r * cell} width={cell - 3} height={cell - 3} rx={3} fill={on > 0 ? color : '#fffdf8'} fillOpacity={on > 0 ? on : 1} stroke={INK_SOFT} strokeWidth={1.4} />;
			})}
		</Fade>
	);
};

// ---------- reagent bottles (brief 53) with the painted C5 flask as the interim plate ----------
/** Painted reagent bottle; `label` is written in code on the painted label (its centre is at native (1000, 1215)). */
export const Bottle: React.FC<{p: PDef; x: number; y: number; h: number; tint?: string; o?: number; label?: string; labelColor?: string}> = ({p, x, y, h, tint, o = 1, label, labelColor = INK}) => {
	if (have(p)) {
		const k = h / p.box[3];
		return (
			<g opacity={o}>
				<PicH p={p} x={x} y={y} h={h} />
				{label ? <Sx x={x + (1000 - p.box[0]) * k} y={y + (1215 - p.box[1]) * k + h * 0.035} text={label} size={Math.round(h * 0.1)} color={labelColor} anchor="middle" weight={800} at={-100} /> : null}
			</g>
		);
	}
	const w = picW(FLASK, h);
	return (
		<g opacity={o}>
			<PicH p={FLASK} x={x} y={y} h={h} />
			{/* the flask's liquid band (about 0.62 to 0.97 of its height), tinted for Fe3+ */}
			{tint ? <path d={`M${x + w * 0.22},${y + h * 0.63} L${x + w * 0.78},${y + h * 0.63} L${x + w * 0.97},${y + h * 0.955} Q${x + w * 0.5},${y + h * 0.99} ${x + w * 0.03},${y + h * 0.955} Z`} fill={tint} opacity={0.5} /> : null}
		</g>
	);
};
export const bottleW = (p: PDef, h: number) => (have(p) ? picW(p, h) : picW(FLASK, h));

// ---------- pipette and volumetric flask for the dilution ----------
/** A 5 mL pipette, horizontal, its tip at the right. `fill` 0..1 is the liquid left in it. Painted plate when delivered. */
export const PipetteH: React.FC<{x: number; y: number; w: number; fill: number; color: string; rot?: number}> = (props) =>
	have(PIPETTE) ? <PaintedPipette {...props} /> : <CodedPipette {...props} />;
/** The painted graduated pipette, rotated so its tube is horizontal with the tip at (x + w, y) and the filler at x.
 *  The coded liquid sits in the bore from the tip back, multiplied over the glass. */
const PaintedPipette: React.FC<{x: number; y: number; w: number; fill: number; color: string; rot?: number}> = ({x, y, w, fill, color, rot = 0}) => {
	const A = PIPETTE_AXIS;
	const k = w / A.len;
	const tubeL = (A.len - A.tubeFrom) * k;
	const liquid = (tubeL - 40 * k) * clamp01(fill);
	const bore = A.halfT * 0.62 * k;
	return (
		<g transform={`rotate(${rot},${x + w},${y})`}>
			<g transform={`translate(${x + w},${y}) scale(${k}) rotate(${-A.angle}) translate(${-A.tip[0]},${-A.tip[1]})`}>
				<image href={staticFile(PIPETTE.src)} x={0} y={0} width={PIPETTE.nat[0]} height={PIPETTE.nat[1]} />
			</g>
			{liquid > 0.5 ? <rect x={x + w - 40 * k - liquid} y={y - bore} width={liquid} height={bore * 2} rx={bore} fill={color} opacity={0.9} style={{mixBlendMode: 'multiply'}} /> : null}
		</g>
	);
};
const CodedPipette: React.FC<{x: number; y: number; w: number; fill: number; color: string; rot?: number}> = ({x, y, w, fill, color, rot = 0}) => {
	const h = w * 0.09;
	const bulbX = x + w * 0.35, bulbR = h * 1.5;
	const liquid = w * 0.86 * clamp01(fill);
	return (
		<g transform={`rotate(${rot},${x + w},${y})`}>
			<clipPath id={`pip-${Math.round(x)}-${Math.round(y)}`}>
				<rect x={x + w * 0.93 - liquid} y={y - bulbR} width={liquid} height={bulbR * 2} />
			</clipPath>
			<g clipPath={`url(#pip-${Math.round(x)}-${Math.round(y)})`}>
				<rect x={x} y={y - h * 0.32} width={w * 0.95} height={h * 0.64} fill={color} />
				<ellipse cx={bulbX} cy={y} rx={bulbR * 2} ry={bulbR * 0.86} fill={color} />
			</g>
			{have(PIPETTE) ? null : (
				<g fill="none" stroke={INK} strokeWidth={3.5} strokeLinejoin="round">
					<path d={`M${x},${y - h * 0.4} L${bulbX - bulbR * 2},${y - h * 0.4} Q${bulbX},${y - bulbR * 1.2} ${bulbX + bulbR * 2},${y - h * 0.4} L${x + w * 0.93},${y - h * 0.4} L${x + w},${y - h * 0.12} L${x + w},${y + h * 0.12} L${x + w * 0.93},${y + h * 0.4} L${bulbX + bulbR * 2},${y + h * 0.4} Q${bulbX},${y + bulbR * 1.2} ${bulbX - bulbR * 2},${y + h * 0.4} L${x},${y + h * 0.4} Z`} fill="#eef5fa" fillOpacity={0.35} />
					<path d={`M${x + w * 0.12},${y - h * 0.4} L${x + w * 0.12},${y + h * 0.4}`} stroke={INK_SOFT} strokeWidth={3} />
				</g>
			)}
		</g>
	);
};
/** 10 mL volumetric flask (brief 53), or the painted C5 flask as the interim plate. `fill` 0..1 rises the coded liquid. */
export const MixFlask: React.FC<{x: number; y: number; h: number; fill: number; color: string}> = (props) =>
	have(VOL_FLASK) ? <VolFlask {...props} /> : <C5MixFlask {...props} />;
/** Inner half-width of the painted 10 mL flask (fraction of its visible width) at height fraction v (0 top, 1 bottom). */
const VF_PROFILE: [number, number][] = [[0.19, 0.085], [0.62, 0.085], [0.667, 0.13], [0.714, 0.225], [0.762, 0.33], [0.81, 0.405], [0.857, 0.445], [0.905, 0.44], [0.952, 0.38], [0.975, 0.3], [0.985, 0.2]];
const vfHalf = (v: number) => {
	const P = VF_PROFILE;
	if (v <= P[0][0]) return P[0][1];
	for (let i = 1; i < P.length; i++) if (v <= P[i][0]) return P[i - 1][1] + ((P[i][1] - P[i - 1][1]) * (v - P[i - 1][0])) / (P[i][0] - P[i - 1][0]);
	return P[P.length - 1][1];
};
/** Volumetric flask: the liquid fills the bulb (fill 0 to 0.88), then the neck up to the mark at 0.421 (fill 1). */
const VolFlask: React.FC<{x: number; y: number; h: number; fill: number; color: string}> = ({x, y, h, fill, color}) => {
	const p = VOL_FLASK;
	const w = picW(p, h);
	const fl = clamp01(fill);
	const BOT = 0.985, NECK = 0.64, MARK = 0.421;
	const top = fl < 0.88 ? BOT - (BOT - NECK) * (fl / 0.88) : NECK - (NECK - MARK) * ((fl - 0.88) / 0.12);
	const n = 24;
	const vs = Array.from({length: n + 1}, (_, i) => top + ((BOT - top) * i) / n);
	const pts = [...vs.map(v => [x + w / 2 + vfHalf(v) * w, y + v * h]), ...vs.reverse().map(v => [x + w / 2 - vfHalf(v) * w, y + v * h])];
	return (
		<g>
			<PicH p={p} x={x} y={y} h={h} />
			{fl > 0.01 ? <polygon points={pts.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(' ')} fill={color} opacity={0.85} style={{mixBlendMode: 'multiply'}} /> : null}
		</g>
	);
};
const C5MixFlask: React.FC<{x: number; y: number; h: number; fill: number; color: string}> = ({x, y, h, fill, color}) => {
	const p = FLASK;
	const w = picW(p, h);
	const top = y + h * (0.97 - 0.36 * clamp01(fill));
	const half = (yy: number) => (yy < y + h * 0.36 ? w * 0.11 : w * (0.11 + 0.37 * Math.min(1, (yy - y - h * 0.36) / (h * 0.58))));
	return (
		<g>
			{fill > 0.01 ? <path d={`M${x + w / 2 - half(top)},${top} L${x + w / 2 + half(top)},${top} L${x + w * 0.96},${y + h * 0.955} Q${x + w / 2},${y + h * 0.99} ${x + w * 0.04},${y + h * 0.955} Z`} fill={color} opacity={0.55} /> : null}
			<PicH p={p} x={x} y={y} h={h} />
		</g>
	);
};
export const mixFlaskW = (h: number) => picW(have(VOL_FLASK) ? VOL_FLASK : FLASK, h);

// ---------- five-step chain strip: standards, graph, reading, ICE table, K ----------
export const CHAIN = ['standards', 'graph', 'reading', 'ICE table', 'K'];
export const ChainStrip: React.FC<{x: number; y: number; w: number; at: number; out?: number; lit: number[]; dilute?: number; eRow?: number; size?: number}> = ({x, y, w, at, out, lit, dilute, eRow, size = 40}) => {
	const f = useCurrentFrame();
	const step = w / 5;
	return (
		<Fade at={at} out={out}>
			{CHAIN.map((t, i) => {
				const cx = x + step * (i + 0.5);
				const on = prog(f, lit[i], 12);
				const pulse = f >= lit[i] ? 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, (f - lit[i]) / 24) * Math.PI)) : 1;
				return (
					<g key={t} transform={`translate(${cx},${y + 60}) scale(${pulse}) translate(${-cx},${-(y + 60)})`}>
						<rect x={cx - step * 0.4} y={y} width={step * 0.8} height={150} rx={20} fill={on > 0 ? '#e5f2ec' : '#fffdf8'} stroke={on > 0 ? TEAL : 'rgba(60,45,20,0.2)'} strokeWidth={3} />
						<ChainIcon i={i} cx={cx} cy={y + 62} on={on} />
						<Sx x={cx} y={y + 132} text={t} size={size * 0.8} color={on > 0 ? TEAL : INK_SOFT} anchor="middle" hand at={-100} />
						{i < 4 ? <path d={`M${cx + step * 0.42},${y + 75} L${cx + step * 0.58},${y + 75} M${cx + step * 0.52},${y + 65} L${cx + step * 0.58},${y + 75} L${cx + step * 0.52},${y + 85}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /> : null}
					</g>
				);
			})}
			{dilute !== undefined ? (
				<Fade at={dilute}>
					<rect x={x + step * 3 - 85} y={y + 168} width={170} height={46} rx={23} fill={AMBER} />
					<Sx x={x + step * 3} y={y + 201} text="dilute first" size={30} color="#fffdf8" anchor="middle" hand at={dilute} />
					<path d={`M${x + step * 3},${y + 168} L${x + step * 3},${y + 92}`} stroke={AMBER} strokeWidth={4} strokeDasharray="6 5" />
				</Fade>
			) : null}
			{eRow !== undefined ? (
				<Fade at={eRow}>
					<rect x={x + step * 3.5 + 20 - 85} y={y + 168} width={170} height={46} rx={23} fill={TEAL} />
					<Sx x={x + step * 3.5 + 20} y={y + 201} text="E row first" size={30} color="#fffdf8" anchor="middle" hand at={eRow} />
				</Fade>
			) : null}
		</Fade>
	);
};
const ChainIcon: React.FC<{i: number; cx: number; cy: number; on: number}> = ({i, cx, cy, on}) => {
	const c = on > 0 ? TEAL : INK_SOFT;
	if (i === 0) return <g>{SAMPLE.map((s, k) => <rect key={k} x={cx - 50 + k * 21} y={cy - 32} width={15} height={56} rx={3} fill={s} stroke={INK} strokeWidth={1.6} />)}</g>;
	if (i === 1) return <g><path d={`M${cx - 44},${cy - 36} L${cx - 44},${cy + 28} L${cx + 46},${cy + 28}`} fill="none" stroke={INK} strokeWidth={3} /><path d={`M${cx - 44},${cy + 26} L${cx + 40},${cy - 30}`} stroke={c} strokeWidth={4} />{[[-26, 14], [-6, 0], [14, -14], [32, -24]].map(([dx, dy], k) => <circle key={k} cx={cx + dx} cy={cy + dy} r={5} fill={RED} />)}</g>;
	if (i === 2) return <g><path d={`M${cx - 44},${cy - 36} L${cx - 44},${cy + 28} L${cx + 46},${cy + 28}`} fill="none" stroke={INK} strokeWidth={3} /><path d={`M${cx - 44},${cy + 26} L${cx + 40},${cy - 30}`} stroke={TEAL} strokeWidth={3} opacity={0.5} /><path d={`M${cx - 44},${cy - 6} L${cx - 3},${cy - 6} L${cx - 3},${cy + 28}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="7 5" /></g>;
	if (i === 3) return <g fill="none" stroke={INK} strokeWidth={2.5}><rect x={cx - 46} y={cy - 34} width={92} height={64} /><path d={`M${cx - 46},${cy - 12} L${cx + 46},${cy - 12} M${cx - 46},${cy + 9} L${cx + 46},${cy + 9} M${cx - 18},${cy - 34} L${cx - 18},${cy + 30}`} /><text x={cx - 38} y={cy - 16} style={{fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 800}} fill={INK} stroke="none">I</text><text x={cx - 38} y={cy + 5} style={{fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 800}} fill={INK} stroke="none">C</text><text x={cx - 38} y={cy + 26} style={{fontFamily: FONT_DISPLAY, fontSize: 16, fontWeight: 800}} fill={INK} stroke="none">E</text></g>;
	return <text x={cx} y={cy + 18} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={TEAL}>K</text>;
};

// ---------- coded particle box (round lens) with fixed dot slots ----------
export type Dot = {x: number; y: number; c: string; r?: number; o?: number};
export const DotLens: React.FC<{cx: number; cy: number; r: number; dots: Dot[]; at: number; out?: number; title?: string}> = ({cx, cy, r, dots, at, out, title}) => (
	<Fade at={at} out={out}>
		<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={5} />
		<path d={`M${cx - r * 0.74},${cy - r * 0.46} A${r * 0.88},${r * 0.88} 0 0 1 ${cx - r * 0.1},${cy - r * 0.86}`} fill="none" stroke="#ffffff" strokeOpacity={0.7} strokeWidth={8} strokeLinecap="round" />
		{dots.map((d, i) => (d.o ?? 1) > 0.01 ? <circle key={i} cx={d.x} cy={d.y} r={d.r ?? 11} fill={d.c} stroke={INK} strokeWidth={2.2} opacity={d.o ?? 1} /> : null)}
		{title ? <Sx x={cx} y={cy + r + 40} text={title} size={30} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
	</Fade>
);
/** Deterministic slots inside a circle (sunflower spiral). */
export const lensSlots = (cx: number, cy: number, r: number, n: number, seed = 1): [number, number][] => {
	const rr = rng(seed);
	return Array.from({length: n}, (_, i) => {
		const t = (i + 0.5) / n, a = i * 2.39996 + rr() * 0.3;
		const d = Math.sqrt(t) * r * 0.82;
		return [cx + d * Math.cos(a), cy + d * Math.sin(a)];
	});
};
/** Small key: coloured dot and label. */
export const DotKey: React.FC<{x: number; y: number; at: number; items: {c: string; t: string}[]; gap?: number; size?: number}> = ({x, y, at, items, gap = 44, size = 30}) => (
	<Fade at={at}>
		{items.map((it, i) => (
			<g key={i}>
				<circle cx={x + 12} cy={y + i * gap - 10} r={11} fill={it.c} stroke={INK} strokeWidth={2.2} />
				<Sx x={x + 34} y={y + i * gap} text={it.t} size={size} color={INK} weight={600} at={at} />
			</g>
		))}
	</Fade>
);
export {FE, SCN, RED, CROSS, BEAM, BEAM_SOFT, AMBER, AMBER_INK, INK, INK_SOFT};
