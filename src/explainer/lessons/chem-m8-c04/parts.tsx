// Drawing parts for M8 C04 (colourimetry, UV-visible and AAS). Reuses M8 C03b (and through it C03a, C01 and the M6/M5
// chain: chips, notes, crossed chips, plates, question text, countdown, key notes, the complex wrap lens and the
// emission ladder). New here, and exported for P04 and G02 to import:
// - CGraph pieces (CG, gx, gy, CAxes, CPts, CSeg, CBand, CRead, CCurve): a coded lineGraph for calibration lines and
//   absorption spectra (curves draw point by point; a read guide goes across, then down);
// - BeamBox: the colourimeter beam cutaway with a filter whose colour is chosen on cue and a readout;
// - Wheel: the colour wheel (absorbed arc against seen arc);
// - Fan, Slit and WLStrip: the grating fan (white light spreads into colours, with a UV band), a slit that steps along it
//   and passes one narrow line, and a wavelength strip with a moving marker;
// - AtomLens: the atomiser inset (droplets shrink as water leaves, dry specks split into free atoms; a lamp beam crosses;
//   lead atoms absorb photons, other atoms let them pass; the beam thins);
// - AbsLadder: an electron hop up a three-level ladder when a photon is absorbed;
// - Spray, Beam, Detector, Framed (boxed answer), BeakerFill, Magnifier, RowCard.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, prog, rng} from '../../kit';
import {Fade, INK, INK_SOFT, NAVY, PicF, Sx, clamp01, lerp, mw, natPt, smooth, vis} from '../chem-m8-c03b/parts';
import type {PDef} from './common';
import {BEAKER, BEAKER_A} from './common';

export * from '../chem-m8-c03b/parts';

// ---------- colour key (design) ----------
export const ABS = '#d4572a', SEEN = '#2f6fd0', SEL = '#ef8a1f', UVC = '#8a7aa8', PBC = '#8b8f97', PB_INK = '#4e5258', OTH = '#4fa36a', OTH_INK = '#2f6b3c';
export const STD = '#24407a', UNKC = '#d9772b', CU_DEEP_C = '#2b3fc4', CU_PALE_C = '#8cc4ea', GREYX = '#9a948a', GOOD = '#2f8a5b';

// ---------- small helpers ----------
export const picWp = (p: PDef, h: number) => (p.box[2] / p.box[3]) * h;
/** Plate with a fade window. */
export const PicV: React.FC<{p: PDef; x: number; y: number; h: number; at?: number; out?: number; o?: number}> = ({p, x, y, h, at = -1000, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	return v > 0.01 ? <PicF p={p} x={x} y={y} h={h} o={v} /> : null;
};
/** Boxed answer, ink frame (the g01 framed answer). y is the text baseline. */
export const Framed: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle'}> = ({x, y, text, at, out, size = 56, color = INK, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = mw(text, size, false, 800) + size * 0.9;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const s = 0.9 + 0.1 * smooth(prog(f, at, 14));
	return (
		<g opacity={v} transform={`translate(${x0 + w / 2},${y - size * 0.35}) scale(${s}) translate(${-(x0 + w / 2)},${-(y - size * 0.35)})`}>
			<rect x={x0} y={y - size * 1.08} width={w} height={size * 1.5} rx={14} fill="#fffdf8" stroke={color} strokeWidth={5} />
			<Sx x={x0 + size * 0.45} y={y} text={text} size={size} color={color} weight={800} at={-1000} />
		</g>
	);
};
/** A row card: a rounded box with a title and a body line that lights from `lit`. */
export const RowCard: React.FC<{x: number; y: number; w: number; h?: number; title: string; body: string; at: number; lit?: number; color?: string; size?: number; dim?: number}> = ({x, y, w, h = 120, title, body, at, lit, color = NAVY, size = 36, dim}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const L = lit === undefined ? 0 : prog(f, lit, 12);
	const D = dim === undefined ? 0 : prog(f, dim, 12);
	return (
		<g opacity={v * (1 - 0.45 * D)}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={L > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={L > 0.01 ? color : 'rgba(60,45,20,0.22)'} strokeWidth={L > 0.01 ? 4 : 3} />
			<Sx x={x + 28} y={y + 52} text={title} size={size + 4} color={color} hand weight={700} at={-1000} />
			<Sx x={x + 28} y={y + 52 + size * 1.25} text={body} size={size} color={INK} weight={600} at={-1000} opacity={0.35 + 0.65 * Math.max(L, lit === undefined ? 1 : 0)} />
		</g>
	);
};

// ---------- coded line graph ----------
export type CG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const gx = (g: CG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const gy = (g: CG, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
export const CAxes: React.FC<{g: CG; at: number; out?: number; xLabel: string; yLabel: string; xTicks?: number[]; yTicks?: number[]; fx?: (n: number) => string; fy?: (n: number) => string; grid?: {dx: number; dy: number}; size?: number; o?: number; card?: boolean}> = ({g, at, out, xLabel, yLabel, xTicks = [], yTicks = [], fx = n => `${n}`, fy = n => `${n}`, grid, size = 30, o = 1, card = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const gr = prog(f, at + 8, 20);
	const gxs: number[] = [], gys: number[] = [];
	if (grid) {
		for (let t = g.x0; t <= g.x1 + 1e-9; t += grid.dx) gxs.push(t);
		for (let t = g.y0; t <= g.y1 + 1e-9; t += grid.dy) gys.push(t);
	}
	return (
		<g opacity={v}>
			{card ? <rect x={g.x - 20} y={g.y - 30} width={g.w + 50} height={g.h + 50} rx={14} fill="#fffdf8" opacity={0.75} /> : null}
			<g opacity={0.6 * gr}>
				{gxs.map((t, i) => <line key={'a' + i} x1={gx(g, t)} x2={gx(g, t)} y1={g.y} y2={g.y + g.h} stroke="#ddd2bd" strokeWidth={1.5} />)}
				{gys.map((t, i) => <line key={'b' + i} x1={g.x} x2={g.x + g.w} y1={gy(g, t)} y2={gy(g, t)} stroke="#ddd2bd" strokeWidth={1.5} />)}
			</g>
			<DrawPath d={`M${g.x},${g.y - 16} L${g.x},${g.y + g.h} L${g.x + g.w + 16},${g.y + g.h}`} at={at} dur={22} width={4.5} />
			<g opacity={gr}>
				{xTicks.map(t => <g key={'x' + t}><line x1={gx(g, t)} x2={gx(g, t)} y1={g.y + g.h} y2={g.y + g.h + 10} stroke={INK} strokeWidth={2.5} /><Sx x={gx(g, t)} y={g.y + g.h + size + 12} text={fx(t)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
				{yTicks.map(t => <g key={'y' + t}><line x1={g.x - 10} x2={g.x} y1={gy(g, t)} y2={gy(g, t)} stroke={INK} strokeWidth={2.5} /><Sx x={g.x - 16} y={gy(g, t) + size * 0.34} text={fy(t)} size={size} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g>)}
			</g>
			<Sx x={g.x + g.w / 2} y={g.y + g.h + (xTicks.length ? size * 2.5 + 8 : size * 1.4)} text={xLabel} size={size + 2} color={INK} anchor="middle" weight={700} at={-1000} />
			<g transform={`translate(${g.x - (yTicks.length ? size * 2.9 : size * 1.2)},${g.y + g.h / 2}) rotate(-90)`}><Sx x={0} y={0} text={yLabel} size={size + 2} color={INK} anchor="middle" weight={700} at={-1000} /></g>
		</g>
	);
};
export type CPt = {x: number; y: number; at: number; color?: string};
export const CPts: React.FC<{g: CG; pts: CPt[]; r?: number; o?: number; glow?: number[]}> = ({g, pts, r = 11, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{pts.map((p, i) => {
				const e = prog(f, p.at, 10);
				if (e <= 0.01) return null;
				const pop = 1 + 0.6 * (1 - smooth(prog(f, p.at, 16)));
				return <circle key={i} cx={gx(g, p.x)} cy={gy(g, p.y)} r={r * pop} fill={p.color ?? STD} stroke="#fffdf8" strokeWidth={3} opacity={e} />;
			})}
		</g>
	);
};
/** A straight graph segment (data coordinates) drawn on at `at`. */
export const CSeg: React.FC<{g: CG; a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; width?: number; dash?: string; o?: number; dur?: number}> = ({g, a, b, at, out, color = STD, width = 5, dash, o = 1, dur = 26}) => {
	const f = useCurrentFrame();
	const v = (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	if (f < at || v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${gx(g, a[0])},${gy(g, a[1])} L${gx(g, b[0])},${gy(g, b[1])}`} at={at} dur={dur} color={color} width={width} dash={dash} /></g>;
};
/** Shaded x range along the plot (full height) plus a bar on the x axis. */
export const CBand: React.FC<{g: CG; lo: number; hi: number; at: number; out?: number; color?: string; o?: number}> = ({g, lo, hi, at, out, color = STD, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 16) * o;
	if (v <= 0.01) return null;
	const w = (gx(g, hi) - gx(g, lo)) * smooth(prog(f, at, 24));
	return (
		<g opacity={v}>
			<rect x={gx(g, lo)} y={g.y} width={w} height={g.h} fill={color} opacity={0.08} />
			<rect x={gx(g, lo)} y={g.y + g.h - 10} width={w} height={10} fill={color} opacity={0.5} />
		</g>
	);
};
/** Read across from absorbance `a` to the line (at concentration c), then down to the x axis. */
export const CRead: React.FC<{g: CG; a: number; c: number; at: number; downAt: number; value?: string; valueAt?: number; out?: number; color?: string; aLabel?: string; size?: number}> = ({g, a, c, at, downAt, value, valueAt, out, color = UNKC, aLabel, size = 34}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const x = gx(g, c), y = gy(g, a);
	const va = valueAt ?? downAt + 24;
	const vw = value ? mw(value, size, false, 800) + 28 : 0;
	return (
		<g opacity={v}>
			<Sx x={g.x + 14} y={y - 14} text={aLabel ?? a.toFixed(3)} size={size} color={color} weight={800} at={at} />
			<DrawPath d={`M${g.x},${y} L${x},${y}`} at={at + 4} dur={24} color={color} width={5} dash="12 9" />
			<circle cx={x} cy={y} r={10} fill={color} opacity={prog(f, at + 26, 8)} />
			<DrawPath d={`M${x},${y} L${x},${g.y + g.h}`} at={downAt} dur={22} color={color} width={5} dash="12 9" />
			{value ? (
				<g opacity={prog(f, va, 10)}>
					<rect x={x - vw / 2} y={g.y + g.h + 8} width={vw} height={size * 1.35} rx={10} fill="#fff3e3" stroke={color} strokeWidth={3} />
					<Sx x={x} y={g.y + g.h + 8 + size * 1.0} text={value} size={size} color={color} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
		</g>
	);
};
/** A curve y = fn(x) from xa to xb, drawn up to `upto(f)` (data x) so a scan can build it. */
export const CCurve: React.FC<{g: CG; fn: (x: number) => number; xa: number; xb: number; upto: (f: number) => number; color: string; width?: number; o?: number; n?: number; fill?: string}> = ({g, fn, xa, xb, upto, color, width = 6, o = 1, n = 90, fill}) => {
	const f = useCurrentFrame();
	const lim = Math.min(xb, upto(f));
	if (lim <= xa || o <= 0.01) return null;
	const pts: string[] = [];
	for (let i = 0; i <= n; i++) {
		const x = xa + ((lim - xa) * i) / n;
		pts.push(`${gx(g, x).toFixed(1)},${gy(g, fn(x)).toFixed(1)}`);
	}
	const d = 'M' + pts.join(' L');
	return (
		<g opacity={o}>
			{fill ? <path d={`${d} L${gx(g, lim)},${gy(g, g.y0)} L${gx(g, xa)},${gy(g, g.y0)} Z`} fill={fill} opacity={0.18} /> : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};
/** Vertical double arrow between two y values at data x. */
export const DArrow: React.FC<{x: number; y1: number; y2: number; at: number; out?: number; color?: string; label?: string; lx?: number; size?: number}> = ({x, y1, y2, at, out, color = INK, label, lx, size = 32}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, 18));
	const m = (y1 + y2) / 2, a = lerp(m, y1, p), b = lerp(m, y2, p);
	const s = Math.sign(y2 - y1) || 1;
	return (
		<g opacity={v}>
			<line x1={x} x2={x} y1={a} y2={b} stroke={color} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${x - 13},${a + 16 * s} L${x},${a} L${x + 13},${a + 16 * s}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${x - 13},${b - 16 * s} L${x},${b} L${x + 13},${b - 16 * s}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
			{label ? <Sx x={lx ?? x + 22} y={m + size * 0.35} text={label} size={size} color={color} hand weight={700} at={at + 8} /> : null}
		</g>
	);
};

// ---------- wavelength colours ----------
export const wlColor = (l: number) => (l < 400 ? UVC : l < 450 ? '#7b4fc0' : l < 495 ? '#3b6fd8' : l < 570 ? '#4aa85a' : l < 590 ? '#e3be2c' : l < 625 ? SEL : '#d6402e');
/** Wavelength strip x0..x1 for l0..l1 nm, with an optional moving marker (nm by frame). */
export const WLStrip: React.FC<{x: number; y: number; w: number; h?: number; l0: number; l1: number; at: number; out?: number; marker?: (f: number) => number | null; ticks?: number[]; size?: number; uvLabel?: boolean}> = ({x, y, w, h = 30, l0, l1, at, out, marker, ticks = [], size = 28, uvLabel = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const X = (l: number) => x + ((l - l0) / (l1 - l0)) * w;
	const n = 60;
	const m = marker ? marker(f) : null;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const la = l0 + ((l1 - l0) * i) / n;
				return <rect key={i} x={X(la)} y={y} width={w / n + 1} height={h} fill={wlColor(la + 1)} opacity={la < 400 ? 0.55 : 0.9} />;
			})}
			<rect x={x} y={y} width={w} height={h} fill="none" stroke={INK_SOFT} strokeWidth={2} rx={4} />
			{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={y + h} y2={y + h + 8} stroke={INK} strokeWidth={2.5} /><Sx x={X(t)} y={y + h + size + 6} text={`${t}`} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
			{uvLabel && l0 < 400 ? <Sx x={X((l0 + 400) / 2)} y={y - 12} text="UV" size={size} color={UVC} anchor="middle" weight={800} at={-1000} /> : null}
			{m !== null ? (
				<g>
					<path d={`M${X(m) - 14},${y - 22} L${X(m) + 14},${y - 22} L${X(m)},${y - 2} Z`} fill={INK} />
					<rect x={X(m) - 3} y={y - 2} width={6} height={h + 4} fill={INK} />
				</g>
			) : null}
		</g>
	);
};

// ---------- the colourimeter beam cutaway ----------
/** Side view: lamp, filter, cuvette, detector and readout. `filterAt` turns the filter `filterColor`; after the cuvette
 *  the beam keeps `pass(f)` of its height. */
export const BeamBox: React.FC<{x: number; y: number; w: number; h?: number; at: number; out?: number; beamAt: number; filterAt?: number; filterColor?: string; pass?: (f: number) => number; liquid?: string; readout?: (f: number) => string; title?: string; o?: number}> = ({x, y, w, h = 300, at, out, beamAt, filterAt, filterColor = ABS, pass = () => 1, liquid = CU_PALE_C, readout, title = 'inside the colourimeter', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const by = y + h * 0.48, bh = 50;
	const lampX = x + 70, filX = x + w * 0.26, cuvX = x + w * 0.48, detX = x + w * 0.68, rdX = x + w * 0.76;
	const b = prog(f, beamAt, 30);
	const fc = filterAt === undefined ? 0 : prog(f, filterAt, 16);
	const p = pass(f);
	const seg = (a: number, c: number, k: number) => Math.max(0, (c - a) * clamp01(k));
	const col = fc > 0.5 ? filterColor : '#fff3c4';
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={x + 26} y={y + 44} text={title} size={30} color={INK_SOFT} hand at={-1000} />
			<rect x={lampX + 30} y={by - bh / 2} width={seg(lampX + 30, filX, b * 3)} height={bh} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
			<rect x={filX + 12} y={by - bh / 2} width={seg(filX + 12, cuvX - 40, b * 3 - 1)} height={bh} fill={col} opacity={0.75} />
			<rect x={cuvX + 40} y={by - (bh * p) / 2} width={seg(cuvX + 40, detX - 20, b * 3 - 2)} height={bh * p} fill={col} opacity={0.75} />
			<circle cx={lampX} cy={by} r={32} fill="#fff1b8" stroke={INK} strokeWidth={4} />
			<circle cx={lampX} cy={by} r={46} fill="#ffe27a" opacity={0.25 + 0.15 * Math.sin(f * 0.2)} />
			<Sx x={lampX} y={y + h - 26} text="lamp" size={30} anchor="middle" hand at={-1000} />
			<rect x={filX - 6} y={by - 62} width={18} height={124} rx={4} fill={fc > 0.01 ? filterColor : '#e9e4d8'} stroke={INK} strokeWidth={3} />
			<Sx x={filX + 3} y={y + h - 26} text="filter" size={30} anchor="middle" hand at={-1000} />
			<rect x={cuvX - 36} y={by - 90} width={72} height={170} rx={6} fill="#f4f8fb" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={cuvX - 30} y={by - 46} width={60} height={120} fill={liquid} opacity={0.85} />
			<Sx x={cuvX} y={y + h - 26} text="sample" size={30} anchor="middle" hand at={-1000} />
			<rect x={detX - 20} y={by - 50} width={40} height={100} rx={8} fill="#cfd6de" stroke={INK} strokeWidth={4} />
			<Sx x={detX} y={y + h - 26} text="detector" size={30} anchor="middle" hand at={-1000} />
			<rect x={rdX} y={by - 44} width={x + w - 20 - rdX} height={88} rx={12} fill="#2b3138" />
			<Sx x={(rdX + x + w - 20) / 2} y={by + 15} text={readout ? readout(f) : 'A = ?'} size={40} color="#9be3b8" anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
export const countA = (f: number, f0: number, f1: number, a: number, b: number, prefix = 'A = ') => `${prefix}${(a + (b - a) * clamp01((f - f0) / Math.max(1, f1 - f0))).toFixed(3)}`;

// ---------- colour wheel: absorbed arc (orange-red) opposite the seen arc (blue) ----------
const WHEEL = ['#d6402e', '#ef8a1f', '#e8c53a', '#4aa85a', '#3b6fd8', '#7b4fc0'];
export const Wheel: React.FC<{cx: number; cy: number; r?: number; at: number; out?: number; labelsAt?: number; size?: number}> = ({cx, cy, r = 110, at, out, labelsAt, size = 34}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const arc = (i: number, rr = r) => {
		const a0 = ((i * 60 - 90) * Math.PI) / 180, a1 = (((i + 1) * 60 - 90) * Math.PI) / 180;
		return `M${cx},${cy} L${cx + rr * Math.cos(a0)},${cy + rr * Math.sin(a0)} A${rr},${rr} 0 0 1 ${cx + rr * Math.cos(a1)},${cy + rr * Math.sin(a1)} Z`;
	};
	const la = prog(f, labelsAt ?? at + 12, 12);
	// red (0) and orange (1) span -90..30 deg (upper right); blue (4) spans 150..210 deg (left)
	return (
		<g opacity={v}>
			{WHEEL.map((c, i) => <path key={i} d={arc(i)} fill={c} stroke="#fffdf8" strokeWidth={3} />)}
			<circle cx={cx} cy={cy} r={r * 0.34} fill="#fffdf8" />
			<g opacity={la}>
				<path d={`M${cx + (r + 14) * Math.cos(-Math.PI / 2)},${cy + (r + 14) * Math.sin(-Math.PI / 2)} A${r + 14},${r + 14} 0 0 1 ${cx + (r + 14) * Math.cos(Math.PI / 6)},${cy + (r + 14) * Math.sin(Math.PI / 6)}`} fill="none" stroke={ABS} strokeWidth={8} strokeLinecap="round" />
				<path d={`M${cx + (r + 14) * Math.cos((5 * Math.PI) / 6)},${cy + (r + 14) * Math.sin((5 * Math.PI) / 6)} A${r + 14},${r + 14} 0 0 1 ${cx + (r + 14) * Math.cos((7 * Math.PI) / 6)},${cy + (r + 14) * Math.sin((7 * Math.PI) / 6)}`} fill="none" stroke={SEEN} strokeWidth={8} strokeLinecap="round" />
				<Sx x={cx + r + 36} y={cy - r * 0.45} text="absorbed" size={size} color={ABS} hand weight={700} at={-1000} />
				<Sx x={cx - r - 36} y={cy + size * 0.35} text="seen" size={size} color={SEEN} anchor="end" hand weight={700} at={-1000} />
			</g>
		</g>
	);
};

// ---------- grating fan and slit ----------
export type FanG = {ox: number; oy: number; fx: number; y0: number; y1: number; l0: number; l1: number};
export const fanY = (g: FanG, l: number) => g.y0 + ((l - g.l0) / (g.l1 - g.l0)) * (g.y1 - g.y0);
/** White light from (lampX, oy) hits a grating at (ox, oy) and fans into colours reaching x = fx; the UV band (l < 400)
 *  is drawn violet-grey. `open` 0..1 grows the fan. */
export const Fan: React.FC<{g: FanG; lampX: number; at: number; out?: number; o?: number; size?: number; labels?: boolean}> = ({g, lampX, at, out, o = 1, size = 28, labels = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const wb = prog(f, at, 16), op = smooth(prog(f, at + 14, 26));
	const n = 44;
	const fx = lerp(g.ox, g.fx, op);
	return (
		<g opacity={v}>
			<circle cx={lampX} cy={g.oy} r={26} fill="#fff1b8" stroke={INK} strokeWidth={3.5} />
			<rect x={lampX + 24} y={g.oy - 12} width={(g.ox - lampX - 24) * wb} height={24} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
			{Array.from({length: n}, (_, i) => {
				const la = g.l0 + ((g.l1 - g.l0) * i) / n, lb = g.l0 + ((g.l1 - g.l0) * (i + 1)) / n;
				const ya = lerp(g.oy, fanY(g, la), op), yb = lerp(g.oy, fanY(g, lb), op);
				return <path key={i} d={`M${g.ox},${g.oy} L${fx},${ya} L${fx},${yb + 0.6} Z`} fill={wlColor(la + 1)} opacity={la < 400 ? 0.35 : 0.62} />;
			})}
			<line x1={g.ox - 14} y1={g.oy - 46} x2={g.ox + 14} y2={g.oy + 46} stroke={INK} strokeWidth={7} strokeLinecap="round" />
			{labels && op > 0.9 ? <Sx x={g.fx - 14} y={g.y0 - 16} text="ultraviolet (invisible)" size={size} color={UVC} anchor="end" hand weight={700} at={at + 40} /> : null}
		</g>
	);
};
/** A slit across the fan at x = g.fx: a dark bar with a gap at wavelength l(f); one narrow line passes on to `toX`. */
export const Slit: React.FC<{g: FanG; l: (f: number) => number; at: number; out?: number; toX: number; toY?: number; o?: number}> = ({g, l, at, out, toX, toY, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const ln = l(f), y = fanY(g, ln);
	const ty = toY ?? y;
	const pass = prog(f, at + 6, 14);
	const top = Math.min(g.y0, g.y1) - 30, bot = Math.max(g.y0, g.y1) + 30;
	return (
		<g opacity={v}>
			<rect x={g.fx + 2} y={top} width={14} height={y - 7 - top} fill="#3b3a40" />
			<rect x={g.fx + 2} y={y + 7} width={14} height={bot - y - 7} fill="#3b3a40" />
			<line x1={g.fx + 16} y1={y} x2={lerp(g.fx + 16, toX, pass)} y2={lerp(y, ty, pass)} stroke={wlColor(ln)} strokeWidth={9} strokeLinecap="round" />
		</g>
	);
};

// ---------- AAS pieces ----------
/** A coded beam from x0 to x1 at y; thins to `thin(f)` after `split` (x). */
export const Beam: React.FC<{x0: number; x1: number; y: number; at: number; out?: number; color?: string; h?: number; split?: number; thin?: (f: number) => number; o?: number}> = ({x0, x1, y, at, out, color = SEL, h = 16, split, thin = () => 1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, 24));
	const xe = lerp(x0, x1, p);
	const sx = split ?? x1;
	const t = thin(f);
	return (
		<g opacity={v}>
			<rect x={x0} y={y - h / 2} width={Math.max(0, Math.min(xe, sx) - x0)} height={h} rx={h / 2} fill={color} opacity={0.75} />
			{xe > sx ? <rect x={sx} y={y - (h * t) / 2} width={xe - sx} height={h * t} rx={(h * t) / 2} fill={color} opacity={0.75} /> : null}
		</g>
	);
};
export const Detector: React.FC<{x: number; y: number; at: number; out?: number; text?: (f: number) => string; w?: number}> = ({x, y, at, out, text, w = 210}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y - 46} width={36} height={92} rx={8} fill="#cfd6de" stroke={INK} strokeWidth={4} />
			<Sx x={x + 18} y={y + 84} text="detector" size={28} anchor="middle" hand at={-1000} />
			<rect x={x + 50} y={y - 40} width={w} height={80} rx={12} fill="#2b3138" />
			<Sx x={x + 50 + w / 2} y={y + 14} text={text ? text(f) : 'A'} size={38} color="#9be3b8" anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
/** Droplets rising from a to b (the sample sprayed into the flame). */
export const Spray: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; n?: number; color?: string}> = ({a, b, at, out, n = 7, color = '#9cc9e8'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const u = (((f - at) / 34) + i / n) % 1;
				const x = lerp(a[0], b[0], u) + Math.sin(u * 9 + i) * 12, y = lerp(a[1], b[1], u);
				return <circle key={i} cx={x} cy={y} r={7 * (1 - 0.6 * u)} fill={color} stroke="#5d8fb3" strokeWidth={1.5} opacity={Math.sin(u * Math.PI)} />;
			})}
		</g>
	);
};
const LENS_SITES: [number, number][] = [[-0.42, -0.08], [0.02, 0.18], [0.4, -0.1], [-0.15, -0.4], [0.25, 0.48], [-0.48, 0.4]];
/** The atomiser inset. Droplets rise (from `drop`), shrink (from `evap`), become dry specks, then split (from `split`) into
 *  free lead atoms (grey). `beam` sends a horizontal lamp beam across; from `absorb` photons stop at lead atoms (a ring
 *  flashes); `others` adds green atoms that let the light pass; from `thin` the beam beyond the atoms thins. */
export const AtomLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; drop?: number; evap?: number; split?: number; beam?: number; absorb?: number; others?: number; thin?: number; title?: string; titleAt?: number; o?: number; atomsOnly?: boolean}> = ({cx, cy, r, at, out, drop = -1000, evap = -1000, split = -1000, beam, absorb, others, thin, title, titleAt, o = 1, atomsOnly = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const id = `al-${Math.round(cx)}-${Math.round(cy)}`;
	const ev = atomsOnly ? 1 : smooth(prog(f, evap, 40));
	const sp = atomsOnly ? 1 : smooth(prog(f, split, 24));
	const bm = beam === undefined ? 0 : smooth(prog(f, beam, 24));
	const th = thin === undefined ? 0 : smooth(prog(f, thin, 30));
	const oth = others === undefined ? 0 : prog(f, others, 14);
	const bh = 70;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#fbf3e6" stroke={INK} strokeWidth={5} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
			<g clipPath={`url(#${id})`}>
				<ellipse cx={cx} cy={cy + r * 0.9} rx={r * 0.8} ry={r * 0.5} fill="#ffd9a0" opacity={0.35} />
				{bm > 0.01 ? (
					<g>
						<rect x={cx - r} y={cy - bh / 2} width={r * 1.15 * bm + 0.01} height={bh} fill={SEL} opacity={0.32} />
						{bm > 0.5 ? <rect x={cx + r * 0.15} y={cy - (bh * (1 - 0.65 * th)) / 2} width={r * 0.85 * clamp01(bm * 2 - 1)} height={bh * (1 - 0.65 * th)} fill={SEL} opacity={0.32} /> : null}
					</g>
				) : null}
				{LENS_SITES.slice(0, 4).map(([u, w], k) => {
					const rise = atomsOnly ? 1 : smooth(clamp01((f - drop - k * 8) / 30));
					if (rise <= 0.01) return null;
					const sx = cx + u * r * 0.9, sy = lerp(cy + r * 1.1, cy + w * r * 0.55, rise);
					const wob: [number, number] = [Math.sin(f * 0.06 + k) * 6, Math.cos(f * 0.05 + k * 1.3) * 6];
					const dr = lerp(30, 11, ev);
					const ab = absorb !== undefined ? ((f - absorb - k * 18) % 60 + 60) % 60 : -1;
					const flash = absorb !== undefined && f >= absorb + k * 18 && ab < 22 ? Math.sin((ab / 22) * Math.PI) : 0;
					return (
						<g key={k}>
							{sp < 1 ? <circle cx={sx + wob[0]} cy={sy + wob[1]} r={dr} fill={ev < 0.6 ? '#bfe0f4' : '#b9a58c'} stroke={ev < 0.6 ? '#5d8fb3' : '#7a6650'} strokeWidth={2.5} opacity={1 - sp} /> : null}
							{sp > 0 ? [[-1, -0.6], [1, -0.4], [0, 0.9]].map(([a, b], j) => (
								<g key={j}>
									<circle cx={sx + wob[0] + a * 34 * sp} cy={sy + wob[1] + b * 30 * sp} r={15} fill={PBC} stroke={PB_INK} strokeWidth={2.5} opacity={sp} />
									{j === 0 && flash > 0.01 ? <circle cx={sx + wob[0] - 34 * sp} cy={sy + wob[1] - 18 * sp} r={15 + 12 * flash} fill="none" stroke={SEL} strokeWidth={5} opacity={flash} /> : null}
								</g>
							)) : null}
						</g>
					);
				})}
				{oth > 0.01 ? LENS_SITES.slice(4).concat([[0.55, 0.22], [-0.05, -0.62]]).map(([u, w], k) => (
					<circle key={'o' + k} cx={cx + u * r + Math.sin(f * 0.05 + k * 2) * 6} cy={cy + w * r + Math.cos(f * 0.045 + k) * 6} r={14} fill={OTH} stroke={OTH_INK} strokeWidth={2.5} opacity={oth} />
				)) : null}
				{absorb !== undefined && f >= absorb ? [0, 1, 2].map(k => {
					const u = (((f - absorb) / 40) + k / 3) % 1;
					const x = cx - r + u * r * 1.0;
					return <path key={'ph' + k} d={`M${x - 26},${cy} q6,-10 12,0 q6,10 12,0 q6,-10 12,0`} fill="none" stroke={SEL} strokeWidth={4} strokeLinecap="round" opacity={u < 0.85 ? 0.9 : 0} />;
				}) : null}
			</g>
			{title ? <Sx x={cx} y={cy + r + 44} text={title} size={30} color={INK_SOFT} anchor="middle" hand at={titleAt ?? at + 6} /> : null}
		</g>
	);
};
/** Absorption ladder: a photon wave arrives from the left and the electron jumps up (`period` loop from `from`). */
export const AbsLadder: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; from: number; period?: number; color?: string; title?: string; size?: number}> = ({x, y, w, h, at, out, from, period = 80, color = SEL, title, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const lv = [y + h - 26, y + h * 0.56, y + 34];
	const lx0 = x + w * 0.5, lx1 = x + w - 26;
	const t = f < from ? -1 : (f - from) % period;
	const wave = t < 0 ? 0 : clamp01(t / 26);
	const up = t < 0 ? 0 : smooth(clamp01((t - 26) / 12));
	const down = t < 0 ? 0 : smooth(clamp01((t - period + 14) / 12));
	const ey = lerp(lerp(lv[0], lv[2], up), lv[0], down);
	let d = '';
	const wx0 = x + 20, wx1 = lerp(wx0, lx0 - 10, wave);
	for (let i = 0; i <= 30; i++) { const xx = wx0 + ((wx1 - wx0) * i) / 30; d += `${i ? 'L' : 'M'}${xx.toFixed(1)},${(lv[1] + Math.sin(i * 1.1) * 11).toFixed(1)} `; }
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{lv.map((ly, i) => <line key={i} x1={lx0} x2={lx1} y1={ly} y2={ly} stroke={INK_SOFT} strokeWidth={3} />)}
			<circle cx={(lx0 + lx1) / 2} cy={ey} r={10} fill="#2c4a7a" />
			{t >= 0 && wave < 1 ? <path d={d} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" /> : null}
			{t >= 0 && up > 0.05 && down < 0.95 ? <path d={`M${(lx0 + lx1) / 2 - 22},${lv[0] - 8} L${(lx0 + lx1) / 2 - 22},${lv[2] + 8}`} stroke={color} strokeWidth={3} strokeDasharray="6 5" /> : null}
			{title ? <Sx x={x + w / 2} y={y + h + 36} text={title} size={size} color={INK} anchor="middle" hand weight={700} at={at + 6} /> : null}
		</g>
	);
};

// ---------- glassware and props ----------
/** A coded water fill inside the m6 beaker placed at (x, y, h). */
export const BeakerFill: React.FC<{x: number; y: number; h: number; color?: string; op?: number; o?: number}> = ({x, y, h, color = '#cfe3ee', op = 0.45, o = 1}) => {
	const P = (nx: number, ny: number) => natPt(BEAKER, x, y, h, nx, ny);
	const a = P(BEAKER_A.tl, BEAKER_A.surf), b = P(BEAKER_A.tr, BEAKER_A.surf), c = P(BEAKER_A.br, BEAKER_A.floor), d = P(BEAKER_A.bl, BEAKER_A.floor);
	return o > 0.01 ? <path d={`M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]} L${d[0]},${d[1]} Z`} fill={color} opacity={op * o} /> : null;
};
/** A coded magnifier outline that moves along x keyframes [frame, x]. */
export const Magnifier: React.FC<{y: number; pts: [number, number][]; at: number; out?: number; r?: number}> = ({y, pts, at, out, r = 80}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	let x = pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) if (f >= pts[i][0]) x = lerp(pts[i][1], pts[i + 1][1], smooth(clamp01((f - pts[i][0]) / Math.max(1, pts[i + 1][0] - pts[i][0]))));
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={r} fill="#ffffff" fillOpacity={0.25} stroke={INK} strokeWidth={7} />
			<line x1={x + r * 0.7} y1={y + r * 0.7} x2={x + r * 1.5} y2={y + r * 1.5} stroke={INK} strokeWidth={14} strokeLinecap="round" />
		</g>
	);
};
/** A soft note line in Inter for screen text with charges or units. */
export const Line: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number}> = ({x, y, text, at, out, size = 40, color = INK, anchor = 'start', weight = 700}) => <Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} weight={weight} at={at} out={out} />;
/** Hand-drawn label box in the hand font (used for small tags over plates). */
export const HTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 34, color = INK, anchor = 'start'}) => {
	const ch = /\^\{|_/.test(text);
	return <Sx x={x} y={y} text={text} size={ch ? size * 0.84 : size} color={color} anchor={anchor} hand={!ch} weight={ch ? 600 : 700} at={at} out={out} />;
};
export const seeded = (seed: number) => rng(seed);

/** Two-level energy gap: a photon of one colour arrives; if `match`, the electron jumps (absorbed); otherwise the photon
 *  passes straight on. Loops every `period` from `from`. */
export const GapLadder: React.FC<{x: number; y: number; w: number; h: number; gap: number; match: boolean; at: number; out?: number; from: number; period?: number; color?: string; dot?: string; title: string; titleColor?: string; size?: number}> = ({x, y, w, h, gap, match, at, out, from, period = 84, color = SEL, dot = PBC, title, titleColor = INK, size = 30}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const lx0 = x + w * 0.42, lx1 = x + w - 30, cx = (lx0 + lx1) / 2;
	const y0 = y + h - 40, y1 = y0 - gap;
	const t = f < from ? -1 : (f - from) % period;
	const tr = t < 0 ? 0 : clamp01(t / 30);
	const up = match && t >= 0 ? smooth(clamp01((t - 30) / 10)) * (1 - smooth(clamp01((t - period + 14) / 12))) : 0;
	const ey = lerp(y0, y1, up);
	const wy = (y0 + y1) / 2;
	const wEnd = match ? lerp(x + 16, cx - 16, tr) : lerp(x + 16, x + w - 10, t < 0 ? 0 : clamp01(t / 46));
	const wStart = match ? x + 16 : Math.max(x + 16, wEnd - (cx - x - 30));
	let d = '';
	for (let i = 0; i <= 26; i++) { const xx = wStart + ((wEnd - wStart) * i) / 26; d += `${i ? 'L' : 'M'}${xx.toFixed(1)},${(wy + Math.sin(i * 1.2 + (match ? 0 : f * 0.3)) * 10).toFixed(1)} `; }
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<line x1={lx0} x2={lx1} y1={y0} y2={y0} stroke={INK_SOFT} strokeWidth={3} />
			<line x1={lx0} x2={lx1} y1={y1} y2={y1} stroke={INK_SOFT} strokeWidth={3} />
			<circle cx={cx} cy={ey} r={11} fill={dot} stroke={INK} strokeWidth={2} />
			{t >= 0 && (match ? tr < 1 : true) ? <path d={d} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" /> : null}
			<Sx x={x + w / 2} y={y + h + 40} text={title} size={size} color={titleColor} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};
/** A row of cause-chain pills; pill i lights from lit[i] (earlier pills stay ticked and calm). */
export const ChainPills: React.FC<{x: number; y: number; items: string[]; lit: number[]; size?: number; gap?: number; color?: string; at?: number}> = ({x, y, items, lit, size = 30, gap = 40, color = SEL, at = -1000}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	let cx = x;
	return (
		<g opacity={v}>
			{items.map((t, i) => {
				const w = mw(t, size, false, 700) + size * 1.2, h = size * 1.7;
				const L = prog(f, lit[i], 12);
				const cur = L * (lit[i + 1] === undefined ? 1 : 1 - prog(f, lit[i + 1], 12));
				const px = cx;
				cx += w + gap;
				return (
					<g key={i}>
						<rect x={px} y={y} width={w} height={h} rx={h / 2} fill={cur > 0.5 ? '#fff1dd' : '#fffdf8'} stroke={L > 0.01 ? color : 'rgba(60,45,20,0.25)'} strokeWidth={cur > 0.5 ? 4 : 2.5} />
						<Sx x={px + w / 2} y={y + h / 2 + size * 0.35} text={t} size={size} color={L > 0.01 ? INK : '#a59c8e'} anchor="middle" weight={700} at={-1000} />
						{i < items.length - 1 ? <path d={`M${px + w + 8},${y + h / 2} L${px + w + gap - 8},${y + h / 2} M${px + w + gap - 18},${y + h / 2 - 9} L${px + w + gap - 8},${y + h / 2} L${px + w + gap - 18},${y + h / 2 + 9}`} stroke={L > 0.01 ? color : '#c9c0b0'} strokeWidth={4} fill="none" strokeLinecap="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};
export {FONT_DISPLAY, FONT_HAND};
