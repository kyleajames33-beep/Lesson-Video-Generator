// Lesson parts for math-a12-d12 (Revision 4: derivatives of sec x, cosec x and cot x; sun, tower and shadow
// anchor), built on the maths studio kit (src/explainer/math/studio). Plates are drawn at native aspect: the
// brief 235 tower block (roof's far corner and footing from the manifest) and the reused Physics sun. The
// ground, sky arc, sunbeam, shadow band, angle arcs and labels are coded on the panel's own scale (U px per
// unit of tower height), so the shadow is tan x and the sunbeam sec x exactly.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, FunctionSimulator, piTicks, usePlatePreload, vis,
	MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL,
} from '../../math/studio';
import type {FnFamily, FnKey, FunctionSimulatorProps, PlateSpec} from '../../math/studio';
import type {Range} from '../../math/graphs';

export {Chip, CurveLabel, DISPLAY, Dot, Frac, PreRing, RecallChip, TanLine, gmap} from '../math-a12-d04/parts';
export type {GMap} from '../math-a12-d04/parts';
export {WholeRows} from '../math-a12-d05/parts';
export {Sup, Ring} from '../math-a12-d08/parts';
export {Klass} from '../math-a12-d09/parts';

export const VIOLET = MATH_GRADIENT;
export const NAVY = '#2b3f73';
export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
export const GOLD = '#d9a520';
export const PI = Math.PI;

// ---------- plates ----------
/** Brief 235 tower (manifest: native 809 x 1942, alpha box 186,362 to 623,1642; roof's far corner 604,364; footing bottom 1639). */
export const TOWER: PlateSpec = {src: 'assets/maths/ma12-tower-block-v1.png', nat: [809, 1942], box: [187, 363, 622, 1641]};
const ROOF_CORNER: [number, number] = [604, 364];
const FOOT_Y = 1639;
/** Reused Physics sun disc (1254 x 1254; disc alpha box 75,90 to 1152,1165, measured 10 Nov). */
export const SUN: PlateSpec = {src: 'assets/physics/phys-y11-sun-v1.png', nat: [1254, 1254], box: [75, 90, 1152, 1165]};

// ---------- functions and windows ----------
const sec = (u: number) => 1 / Math.cos(u);
export const SEC: FnFamily = {f: u => sec(u), df: u => sec(u) * Math.tan(u), excluded: [-PI / 2, PI / 2, 3 * PI / 2]};
export const COSEC: FnFamily = {f: u => 1 / Math.sin(u), df: u => -Math.cos(u) / Math.sin(u) ** 2, excluded: [-PI, 0, PI, 2 * PI]};
export const COT: FnFamily = {f: u => Math.cos(u) / Math.sin(u), df: u => -1 / Math.sin(u) ** 2, excluded: [-PI, 0, PI, 2 * PI]};
export const TAN: FnFamily = {f: u => Math.tan(u), df: u => sec(u) ** 2, excluded: [-PI / 2, PI / 2, 3 * PI / 2]};
export const WIN_T = {x: [-2, 5] as Range, y: [-5, 5] as Range};
export const WIN_S = WIN_T;
export const T_TICKS = piTicks(-0.5, 1.5, 4);
export const piTicksHalf = piTicks(-0.5, 1.5, 2);
export const T_ASYM = [-PI / 2, PI / 2, 3 * PI / 2];
export const S_ASYM = [0, PI];
export const Y_TICKS = [-4, -2, 2, 4];

/** Window T (sec x in ink, asymptotes at −π/2, π/2, 3π/2, branch-safe rider). */
export const WindowT: React.FC<Omit<FunctionSimulatorProps, 'window' | 'family'> & {family?: FnFamily}> = ({family = SEC, ...p}) => (
	<FunctionSimulator window={WIN_T} family={family} color={INK} asymptotes={T_ASYM} xTicks={T_TICKS} yTicks={Y_TICKS} xLabel="x (radians)" yLabel="y" branchSafe={{gap: 0.08}} {...p} />
);
/** Window S (cosec x or cot x in ink, asymptotes at 0 and π). */
export const WindowS: React.FC<Omit<FunctionSimulatorProps, 'window' | 'family'> & {family?: FnFamily}> = ({family = COSEC, ...p}) => (
	<FunctionSimulator window={WIN_S} family={family} color={INK} asymptotes={S_ASYM} xTicks={T_TICKS} yTicks={Y_TICKS} xLabel="x (radians)" yLabel="y" branchSafe={{gap: 0.08}} {...p} />
);
export const tl = (pts: [number, number][]): FnKey[] => pts.map(([frame, x]) => ({frame, x}));

// ---------- the sun, the tower and its shadow ----------
export type SunGeo = {roof: [number, number]; base: [number, number]; tip: [number, number]; sun: [number, number]; U: number};
/** Frame-space geometry of a SunShadow panel (same arguments as the panel). */
export const sunGeo = (x: number, y: number, h: number, angle: number, o: {U?: number; rx?: number; groundPad?: number; Rs?: number} = {}): SunGeo => {
	const U = o.U ?? 230, rx = o.rx ?? 230, g = h - (o.groundPad ?? 80), Rs = o.Rs ?? 175;
	const roof: [number, number] = [x + rx, y + g - U];
	return {U, roof, base: [x + rx, y + g], tip: [x + rx + U * Math.tan(angle), y + g], sun: [roof[0] - Rs * Math.sin(angle), roof[1] - Rs * Math.cos(angle)]};
};
/**
 * SunShadow: the painted tower on a coded ground line, the painted sun on a dotted sky arc centred on the roof's far
 * corner, the sunbeam through that corner to the ground, the shadow band from the far wall's foot to the beam's tip
 * (tan x, in units of the tower's height), the angle x at the roof (from overhead) and optionally the sun's height
 * angle π/2 − x at the shadow's tip. An edge arrow and a length tag appear when the tip leaves the panel.
 */
export const SunShadow: React.FC<{
	x: number; y: number; w: number; h: number; angle: number;
	U?: number; rx?: number; groundPad?: number; Rs?: number; D?: number;
	at?: number; out?: number;
	shadowLabel?: React.ReactNode; beamLabel?: React.ReactNode; shadowO?: number; beamO?: number; arcO?: number; elevO?: number; overheadO?: number;
	labelSize?: number; edge?: boolean;
}> = ({x, y, w, h, angle, U = 230, rx = 230, groundPad = 80, Rs = 175, D = 110, at = -30, out, shadowLabel = 'shadow = tan x', beamLabel = 'sunbeam = sec x', shadowO = 1, beamO = 1, arcO = 1, elevO = 0, overheadO = 1, labelSize = 34, edge = true}) => {
	usePlatePreload([TOWER.src, SUN.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const g = h - groundPad;
	const R: [number, number] = [rx, g - U];
	const sa = Math.sin(angle), ca = Math.cos(angle), ta = Math.tan(angle);
	const sun: [number, number] = [rx - Rs * sa, g - U - Rs * ca];
	const tipX = rx + U * ta;
	const off = tipX > w - 26;
	const s = U / (FOOT_Y - ROOF_CORNER[1]);
	const towerW = (TOWER.box[2] - TOWER.box[0]) * s;
	const towerX = rx - (ROOF_CORNER[0] - TOWER.box[0]) * s;
	const towerY = R[1] - (ROOF_CORNER[1] - TOWER.box[1]) * s;
	// beam: from beyond the sun, through the roof corner, to the tip
	const bx0 = sun[0] - sa * 40, by0 = sun[1] - ca * 40;
	const arcPts = Array.from({length: 40}, (_, i) => {const t = (i / 39) * 1.45; return `${i ? 'L' : 'M'}${(rx - Rs * Math.sin(t)).toFixed(1)},${(g - U - Rs * Math.cos(t)).toFixed(1)}`;}).join(' ');
	const arc = (cx: number, cy: number, r: number, t0: number, t1: number, fn: (t: number) => [number, number]) => Array.from({length: 24}, (_, i) => {const t = t0 + ((t1 - t0) * i) / 23; const [a, b] = fn(t); return `${i ? 'L' : 'M'}${(cx + r * a).toFixed(1)},${(cy + r * b).toFixed(1)}`;}).join(' ');
	const elev = PI / 2 - angle;
	// label positions (local)
	const shMid = Math.min((rx + Math.min(tipX, w - 30)) / 2, w - 150);
	const len = U / ca;
	const mx = rx + sa * len * 0.5, my = g - U + ca * len * 0.5;
	const bl = [Math.min(mx + ca * 22, w - 300), Math.max(my - sa * 30 - 14, R[1] + 6)];
	const T: React.CSSProperties = {position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: labelSize, color: INK, whiteSpace: 'pre', textShadow: '0 0 6px #fffdf8, 0 0 10px #fffdf8'};
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, borderRadius: 20, overflow: 'hidden', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', background: 'linear-gradient(180deg, #e3eef3 0%, #f3f2ea 80%)'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', position: 'absolute', inset: 0}}>
				<path d={arcPts} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="2 10" strokeLinecap="round" opacity={0.7} />
				<line x1={rx} y1={R[1]} x2={rx} y2={g - U - Rs - D / 2 - 4} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 8" opacity={overheadO} />
				<rect x={0} y={g} width={w} height={h - g} fill="#e7d9bb" />
				<line x1={0} x2={w} y1={g} y2={g} stroke="#8a7a63" strokeWidth={4} />
				<image href={staticFile(TOWER.src)} x={towerX - TOWER.box[0] * (towerW / (TOWER.box[2] - TOWER.box[0]))} y={towerY - TOWER.box[1] * s} width={TOWER.nat[0] * s} height={TOWER.nat[1] * s} preserveAspectRatio="none" />
				<rect x={rx} y={g - 7} width={Math.max(0, Math.min(tipX, w + 20) - rx)} height={16} rx={4} fill="rgba(58,48,38,0.55)" />
				<line x1={bx0} y1={by0} x2={tipX} y2={g} stroke="#f2c94c" strokeWidth={16} strokeLinecap="round" opacity={0.55} />
				<line x1={sun[0]} y1={sun[1]} x2={tipX} y2={g} stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
				{arcO > 0.001 && angle > 0.06 ? <g opacity={arcO}>
					<path d={arc(rx, R[1], 62, 0, angle, t => [-Math.sin(t), -Math.cos(t)])} fill="none" stroke={INK} strokeWidth={4} />
				</g> : null}
				{elevO > 0.001 && !off ? <g opacity={elevO}>
					<path d={arc(tipX, g, 78, 0, elev, t => [-Math.cos(t), -Math.sin(t)])} fill="none" stroke={BLUE} strokeWidth={4.5} />
				</g> : null}
				<image href={staticFile(SUN.src)} x={sun[0] - D / 2 - SUN.box[0] * (D / (SUN.box[2] - SUN.box[0]))} y={sun[1] - D / 2 - SUN.box[1] * (D / (SUN.box[2] - SUN.box[0]))} width={SUN.nat[0] * (D / (SUN.box[2] - SUN.box[0]))} height={SUN.nat[1] * (D / (SUN.box[2] - SUN.box[0]))} preserveAspectRatio="none" />
				{off && edge ? <path d={`M${w - 60},${g + 34} L${w - 18},${g + 34} M${w - 34},${g + 22} L${w - 16},${g + 34} L${w - 34},${g + 46}`} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
			</svg>
			{arcO > 0.001 && angle > 0.06 ? <div style={{...T, left: rx - 84 * Math.sin(angle / 2) - 14, top: R[1] - 84 * Math.cos(angle / 2) - 30, opacity: arcO, fontSize: 38}}>x</div> : null}
			{elevO > 0.001 && !off ? <div style={{...T, left: tipX - 182, top: g - 58, opacity: elevO, color: BLUE, fontSize: 34}}>π/2 − x</div> : null}
			{shadowO > 0.001 ? <div style={{...T, left: shMid, top: g + 12, transform: 'translateX(-50%)', opacity: shadowO}}>{shadowLabel}</div> : null}
			{beamO > 0.001 ? <div style={{...T, left: bl[0], top: bl[1], opacity: beamO, color: '#6b4a00'}}>{beamLabel}</div> : null}
			{off && edge ? <div style={{...T, right: 14, top: g - 48, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}}>{`shadow ${Math.tan(angle).toFixed(2)} →`}</div> : null}
		</div>
	);
};

/** Rows for the sun's readout board, from the same angle that draws the panel. */
export const sunRows = (a: number, o: {rate?: boolean; x?: boolean; rateGlow?: [number, number]} = {}) => [
	...(o.x === false ? [] : [{label: 'x from overhead', value: a, digits: 2, unit: 'rad'}]),
	{label: 'shadow, tan x', value: Math.tan(a), digits: 2},
	{label: 'sunbeam, sec x', value: 1 / Math.cos(a), digits: 2},
	...(o.rate ? [{label: "beam's rate, sec x tan x", value: Math.tan(a) / Math.cos(a), digits: 2, role: 'gradient' as const, glow: o.rateGlow}] : []),
];

// ---------- small marks ----------
/** Up or down hand arrow in frame coordinates (rising teal-free: ink up, ink down; colour passed in). */
export const DirArrow: React.FC<{x: number; y: number; up: boolean; color?: string; o?: number; size?: number}> = ({x, y, up, color = INK, o = 1, size = 1}) => (o <= 0.001 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${size})`} stroke={color} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round">
		{up ? <path d="M0,26 L0,-26 M-14,-12 L0,-28 L14,-12" /> : <path d="M0,-26 L0,26 M-14,12 L0,28 L14,12" />}
	</g>
));

/** Amber domain strip (card with an amber border), written on its cue. */
export const AmberStrip: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode; glow?: number}> = ({x, y, at, out, size = 40, children, glow = 0}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: glow > 0 ? `rgba(248,232,200,${0.4 + 0.6 * glow})` : CARD, borderRadius: 16, padding: '4px 20px 6px', border: `4px solid ${AMB}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: AMB_INK, whiteSpace: 'pre'}}>{children}</div>
	</Enter>
);

/** Green framed answer line (card with a green border and a tick). */
export const AnswerBox: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 52, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-flex', alignItems: 'center', gap: 14, background: CARD, borderRadius: 18, padding: '4px 24px 6px', border: `5px solid ${GREEN}`, boxShadow: '0 12px 26px rgba(40,115,71,0.14)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
			{children}
			<svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60"><path d="M8,32 L24,48 L54,10" stroke={GREEN} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
		</div>
	</Enter>
);

/** A plain display line at a fixed place (fades in on its cue, optional dim). */
export const Line: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; dim?: number; weight?: number; children: React.ReactNode}> = ({x, y, at, out, size = 52, color = INK, dim = 0, weight = 800, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12) * (1 - 0.45 * dim);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateY(${(1 - prog(f, at, 12)) * 12}px)`, fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};

/** Colour legend along the top right. */
export const Legend: React.FC<{at?: number}> = ({at = -30}) => {
	const f = useCurrentFrame();
	const items: [string, string, string | undefined][] = [[INK, 'reciprocal', undefined], [NAVY, 'partner', '8 6'], [VIOLET, 'slope', undefined], [AMB, 'excluded', undefined]];
	return (
		<div style={{position: 'absolute', right: 96, top: 24, opacity: prog(f, at, 14), display: 'flex', gap: 24, alignItems: 'center'}}>
			{items.map(([c, t, d], i) => (
				<span key={i} style={{display: 'flex', alignItems: 'center', gap: 8}}>
					<svg width={34} height={10}><line x1={2} x2={32} y1={5} y2={5} stroke={c} strokeWidth={5} strokeDasharray={d} strokeLinecap="round" /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: c}}>{t}</span>
				</span>
			))}
		</div>
	);
};

/** A paper card with a light border holding arbitrary content. */
export const Panel: React.FC<{x: number; y: number; w: number; h?: number; at?: number; out?: number; border?: string; pad?: string; children: React.ReactNode}> = ({x, y, w, h, at = -30, out, border = 'rgba(60,45,20,0.10)', pad = '12px 24px 14px', children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{boxSizing: 'border-box', height: h, background: CARD, borderRadius: 20, padding: pad, boxShadow: CARD_SHADOW, border: `2.5px solid ${border}`}}>{children}</div>
	</Enter>
);

/** The sun's readout strip: cells side by side, a 30 px label over a 52 px number (from the same angle as the panel). */
export const SunStrip: React.FC<{x: number; y: number; w: number; cells: {label: string; value: number; digits?: number; unit?: string; color?: string; glow?: number}[]; at?: number; out?: number}> = ({x, y, w, cells, at = -30, out}) => (
	<Panel x={x} y={y} w={w} at={at} out={out} pad="8px 18px 8px">
		<div style={{display: 'grid', gridTemplateColumns: `repeat(${cells.length}, 1fr)`, columnGap: 10}}>
			{cells.map((c, i) => (
				<div key={i} style={{borderLeft: i ? '2px solid #ede4d3' : undefined, paddingLeft: i ? 14 : 0, borderRadius: 10, background: c.glow ? `rgba(235,228,214,${c.glow})` : undefined}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: c.color ?? INK, whiteSpace: 'pre'}}>{c.label}</div>
					<div style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: c.color ?? INK, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1}}>{(Math.abs(c.value) < 0.005 ? 0 : c.value).toFixed(c.digits ?? 2).replace('-', '−')}</span>
						{c.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>{c.unit}</span> : null}
					</div>
				</div>
			))}
		</div>
	</Panel>
);
/** Cells for the sun strip. */
export const sunCells = (a: number, o: {rate?: boolean; beamGlow?: number; rateGlow?: number} = {}) => [
	{label: 'sun from overhead x', value: a, unit: 'rad'},
	{label: 'shadow, tan x', value: Math.tan(a)},
	{label: 'sunbeam, sec x', value: 1 / Math.cos(a), glow: o.beamGlow},
	...(o.rate ? [{label: "beam's rate", value: Math.tan(a) / Math.cos(a), color: VIOLET, glow: o.rateGlow}] : []),
];

/** Two-row height and slope board for a function and its reciprocal (scenes 2 and 4). */
export const PairBoard: React.FC<{x: number; y: number; w: number; rows: {name: React.ReactNode; color: string; height: number; slope: number; slopeGlow?: number}[]; at?: number; top?: React.ReactNode; bottom?: React.ReactNode}> = ({x, y, w, rows, at = -30, top, bottom}) => {
	const num = (v: number) => (Math.abs(v) < 0.0005 ? '0.000' : (v < 0 ? '−' : '') + Math.abs(v).toFixed(3));
	return (
		<Panel x={x} y={y} w={w} at={at} pad="10px 24px 12px">
			{top}
			{rows.map((r, i) => (
				<div key={i} style={{display: 'grid', gridTemplateColumns: '170px 1fr 1fr', alignItems: 'baseline', columnGap: 12, borderTop: i ? '2px solid #ede4d3' : undefined, padding: '4px 0'}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: r.color}}>{r.name}</span>
					<span style={{display: 'flex', alignItems: 'baseline', gap: 10}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK_SOFT}}>height</span><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, fontVariantNumeric: 'tabular-nums'}}>{num(r.height)}</span></span>
					<span style={{display: 'flex', alignItems: 'baseline', gap: 10, borderRadius: 12, background: r.slopeGlow ? `rgba(231,224,242,${r.slopeGlow})` : undefined, padding: '0 8px'}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: VIOLET}}>slope</span><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: VIOLET, fontVariantNumeric: 'tabular-nums'}}>{num(r.slope)}</span></span>
				</div>
			))}
			{bottom}
		</Panel>
	);
};

// ---------- question pictures ----------
/** Large answer-free radian axis for the attempts: an x number line with radian ticks, an optional marked x (dashed violet up) and a violet hand question. */
export const QRadAxis: React.FC<{w?: number; h?: number; range: [number, number]; ticks: {value: number; label: string}[]; mark?: number; markLabel?: string; tag: string; title?: React.ReactNode}> = ({w = 820, h = 380, range, ticks, mark, markLabel, tag, title}) => {
	const pad = {l: 60, r: 60};
	const X = (v: number) => pad.l + ((v - range[0]) / (range[1] - range[0])) * (w - pad.l - pad.r);
	const oy = h * 0.66;
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${pad.l - 30},${oy} H${w - pad.r + 24}`} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				<path d={`M${w - pad.r + 10},${oy - 12} L${w - pad.r + 26},${oy} L${w - pad.r + 10},${oy + 12}`} stroke={INK} strokeWidth={5} fill="none" />
				<text x={w - pad.r + 20} y={oy - 24} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
				{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={oy - 12} y2={oy + 12} stroke={INK} strokeWidth={4} /><text x={X(t.value)} y={oy + 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, fill: INK}}>{t.label}</text></g>)}
				{mark !== undefined ? <g>
					<line x1={X(mark)} x2={X(mark)} y1={oy} y2={oy - 150} stroke={VIOLET} strokeWidth={5} strokeDasharray="10 9" />
					<circle cx={X(mark)} cy={oy} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} />
					<text x={X(mark) > w * 0.55 ? X(mark) - 22 : X(mark) + 22} y={oy - 112} textAnchor={X(mark) > w * 0.55 ? 'end' : 'start'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: VIOLET}}>{tag}</text>
					{markLabel ? <text x={X(mark)} y={oy + 100} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: VIOLET}}>{markLabel}</text> : null}
				</g> : <text x={w / 2} y={oy - 96} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: VIOLET}}>{tag}</text>}
			</svg>
			{title ? <div style={{position: 'absolute', left: 26, top: 18, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>{title}</div> : null}
		</div>
	);
};

/** Text in a role colour. */
export const C: React.FC<{c: string; children: React.ReactNode; w?: number}> = ({c, children, w}) => <span style={{color: c, fontWeight: w}}>{children}</span>;
