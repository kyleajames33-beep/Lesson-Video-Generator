// Lesson parts for math-a12-d06 (Revision 3), built on the maths studio kit (src/explainer/math/studio).
// The bike anchor is painted: the reused chemistry frame and wheel plates with the brief 235 crankset and
// pedal plates (root decision 56). Every plate is drawn at native aspect; the crankset only rotates (kit
// RotatingPlate) and the pedals hang level from the measured spindle points. Graphs and algebra are coded.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {graphTransform} from '../../math/graphs';
import type {Range} from '../../math/graphs';
import {
	CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, MATHS_SHARED_PLATES, QuestionCard, RolesOn, RotatingPlate, SvgPlate, usePlatePreload, vis,
	MATH_AMBER, MATH_BLUE, MATH_GRADIENT, MATH_INNER, MATH_MISTAKE, MATH_TEAL,
} from '../../math/studio';
import type {FnFamily, PlateSpec, RotatingGeometry} from '../../math/studio';

export const VIOLET = MATH_GRADIENT;
export const BLUE = MATH_BLUE;
export const TEAL = MATH_TEAL;
export const AMB = MATH_AMBER;
/** d05's navy for sin 2x (root decision 55: carried in on frame 0, then ink on d06's first cue). */
export const NAVY = '#2b3f73';

const M = 'assets/maths/';
/** Plates: reused frame and wheel, brief 235 crankset and pedal (manifest native size, alpha box, anchors). */
export const FRAME: PlateSpec = MATHS_SHARED_PLATES.bikeFrame;
export const WHEEL: PlateSpec = MATHS_SHARED_PLATES.bikeWheel;
export const CRANKSET: PlateSpec = {src: M + 'ma12-bike-crankset-v1.png', nat: [1500, 1500], box: [149, 392, 1351, 1087]};
export const PEDAL: PlateSpec = {src: M + 'ma12-bike-pedal-v1.png', nat: [2000, 1000], box: [397, 363, 1603, 608]};
export const BIKE_PLATES = [FRAME, WHEEL, CRANKSET, PEDAL];
/** Crankset anchors (file px): crank bolt at the canvas centre; spindles 551 and 549 px from it. */
const BOLT: [number, number] = [750, 750];
const CRANK_PX = 551.5;
const PEDAL_HANG: [number, number] = [1000, 500];
/** Frame anchors measured from a gridded crop (file px): bottom-bracket shell centre and the two dropouts. */
const BB: [number, number] = [654, 876];
const REAR: [number, number] = [158, 868];
const FRONT: [number, number] = [1318, 869];
/** Wheel radius in frame px (chainstay 496 px, road-bike proportions) and the wheel plate's own radius. */
const WHEEL_R = 395;
const WHEEL_HUB: [number, number] = [620, 636];
const WHEEL_PLATE_R = 456;
/** Crank length in frame px (crank about half the wheel radius scaled by the plate's chainring). */
const CRANK_ON_FRAME = 150;
/** Bike composite bounds in frame px: x from the rear tyre to the front tyre, y from the saddle to the ground. */
const BIKE_X0 = REAR[0] - WHEEL_R, BIKE_X1 = FRONT[0] + WHEEL_R, BIKE_Y0 = FRAME.box[1], BIKE_Y1 = REAR[1] + WHEEL_R;
export const BIKE_ASPECT = (BIKE_Y1 - BIKE_Y0) / (BIKE_X1 - BIKE_X0);
export const bikeHeight = (w: number) => w * BIKE_ASPECT;

/**
 * The crankset turning about its bolt with two level pedals. theta is the crank angle measured so that the
 * near pedal's height above the axle is L sin(theta): it starts at the rear horizontal and the cranks turn
 * clockwise (forward pedalling seen from the drive side). Plate angle = π − theta.
 */
const crankSprites = (L: number): {plate: PlateSpec; attach: {angle: number; r: number}; hang: [number, number]; w: number; behind?: boolean}[] => {
	const pw = 0.66 * L;
	return [
		{plate: PEDAL, attach: {angle: 0, r: 552}, hang: PEDAL_HANG, w: pw},
		{plate: PEDAL, attach: {angle: Math.PI, r: 549}, hang: PEDAL_HANG, w: pw, behind: true},
	];
};
export const CrankRig: React.FC<{cx: number; cy: number; L: number; theta: number; at?: number; out?: number; dot?: boolean; overlay?: (g: RotatingGeometry) => React.ReactNode}> = ({cx, cy, L, theta, at = -30, out, dot = true, overlay}) => {
	const c = L / CRANK_PX;
	return (
		<RotatingPlate plate={CRANKSET} pivot={BOLT} cx={cx} cy={cy} w={(CRANKSET.box[2] - CRANKSET.box[0]) * c} angle={Math.PI - theta} sprites={crankSprites(L)} at={at} out={out}
			overlay={g => <>
				{dot ? <FrameSvg><circle cx={g.sprites[0][0]} cy={g.sprites[0][1]} r={Math.max(7, L * 0.075)} fill={INK} stroke={CARD} strokeWidth={4} /></FrameSvg> : null}
				{overlay ? overlay(g) : null}
			</>} />
	);
};

/** Frame-space point of a frame-plate pixel for a bike whose composite box's top left is (x, y), w wide. */
export const bikeMap = (x: number, y: number, w: number) => {
	const s = w / (BIKE_X1 - BIKE_X0);
	return {s, at: (fx: number, fy: number): [number, number] => [x + (fx - BIKE_X0) * s, y + (fy - BIKE_Y0) * s]};
};

/** The whole bike: two wheels, the frame, and the crankset with level pedals turning at the bottom bracket. */
export const Bike: React.FC<{x: number; y: number; w: number; theta: number; at?: number; out?: number; dot?: boolean; overlay?: (g: RotatingGeometry) => React.ReactNode; opacity?: number}> = ({x, y, w, theta, at = -30, out, dot = true, overlay, opacity = 1}) => {
	usePlatePreload(BIKE_PLATES.map(p => p.src));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14) * opacity;
	if (o <= 0.001) return null;
	const bm = bikeMap(x, y, w);
	const k = (WHEEL_R * bm.s) / WHEEL_PLATE_R;
	const wheel = (hub: [number, number]) => {
		const [hx, hy] = bm.at(hub[0], hub[1]);
		return <SvgPlate plate={WHEEL} x={hx - (WHEEL_HUB[0] - WHEEL.box[0]) * k} y={hy - (WHEEL_HUB[1] - WHEEL.box[1]) * k} w={(WHEEL.box[2] - WHEEL.box[0]) * k} />;
	};
	const [fx, fy] = bm.at(FRAME.box[0], FRAME.box[1]);
	const [bx, by] = bm.at(BB[0], BB[1]);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg>
				{wheel(REAR)}
				{wheel(FRONT)}
				<SvgPlate plate={FRAME} x={fx} y={fy} w={(FRAME.box[2] - FRAME.box[0]) * bm.s} />
			</FrameSvg>
			<CrankRig cx={bx} cy={by} L={CRANK_ON_FRAME * bm.s} theta={theta} at={-1000} dot={dot} overlay={overlay} />
		</div>
	);
};
/** Bottom-bracket centre of a placed bike (for magnifier leaders). */
export const bikeAxle = (x: number, y: number, w: number) => bikeMap(x, y, w).at(BB[0], BB[1]);

/** Small static crank icon (memory card, key notes). */
export const CrankIcon: React.FC<{size: number; theta?: number}> = ({size, theta = 0.7}) => (
	<div style={{position: 'absolute', inset: 0}}>
		<CrankRig cx={size / 2} cy={size / 2} L={size * 0.36} theta={theta} at={-1000} dot={false} />
	</div>
);

export const DISPLAY = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, whiteSpace: 'pre', lineHeight: 1.15});

/** Raised power that keeps the line height stable. */
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span>;
/** Built-up fraction that inherits the row's font size. */
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; color?: string}> = ({n, d, color}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.8em', lineHeight: 1.08, margin: '0 0.1em', color}}>
		<span style={{padding: '0 0.16em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.075em', minHeight: 3, background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.16em'}}>{d}</span>
	</span>
);
/** The inside part in its dashed grey slot (text stays ink). */
export const Slot: React.FC<{children?: React.ReactNode; glow?: number}> = ({children, glow = 0}) => (
	<span style={{display: 'inline-block', border: `0.06em dashed ${MATH_INNER}`, borderRadius: '0.2em', padding: '0 0.12em', lineHeight: 1.05, background: glow > 0 ? `rgba(239,233,222,${glow})` : undefined, color: INK}}>{children ?? <span style={{display: 'inline-block', width: '0.5em'}}>&nbsp;</span>}</span>
);
/** The empty inside slot (□) of the rule board. */
export const Sq: React.FC<{glow?: number; k?: number}> = ({glow = 0, k = 1}) => <span style={{display: 'inline-block', width: `${0.6 * k}em`, height: `${0.72 * k}em`, verticalAlign: '-0.08em', border: `0.07em dashed ${MATH_INNER}`, borderRadius: '0.14em', background: glow > 0 ? `rgba(31,111,178,${0.16 * glow})` : 'rgba(239,233,222,0.6)', boxShadow: glow > 0 ? `0 0 0 ${0.12 * glow}em rgba(31,111,178,0.18)` : undefined}} />;
/** □′ (the inside slope, blue). */
export const SqP: React.FC<{glow?: number}> = ({glow = 0}) => <span style={{color: BLUE}}><Sq glow={glow} />′</span>;
export const Te: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL}}>{children}</span>;
export const Bl: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: BLUE}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB}}>{children}</span>;

/** Colour key along the top right. */
export const Legend: React.FC<{at?: number; items?: [string, string][]}> = ({at = -30, items}) => {
	const f = useCurrentFrame();
	const list = items ?? [[BLUE, 'inside slope'], [TEAL, 'outside slope'], [VIOLET, 'gradient']];
	return (
		<div style={{position: 'absolute', right: 96, top: 26, opacity: prog(f, at, 14), display: 'flex', gap: 30}}>
			{list.map(([c, t]) => <span key={t} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: c}}>{t}</span>)}
		</div>
	);
};

export type GMap = {pt: (X: number, Y: number) => [number, number]; sx: number; sy: number; box: {left: number; top: number; width: number; height: number}};
/** Frame-space map of a FunctionSimulator placed at (x, y) with this size and window. */
export const gmap = (x: number, y: number, w: number, h: number, win: {x: Range; y: Range}): GMap => {
	const t = graphTransform({x: win.x, y: win.y, width: w, height: h});
	return {pt: (X, Y) => {const p = t.point(X, Y); return [x + p.x, y + p.y];}, sx: t.sx, sy: t.sy, box: {left: x + t.box.left, top: y + t.box.top, width: t.box.width, height: t.box.height}};
};
/** Tangent segment through (X, Y) with slope m, half length in px (frame coordinates). */
export const TanLine: React.FC<{M: GMap; X: number; Y: number; m: number; half?: number; color?: string; opacity?: number; dash?: string; width?: number}> = ({M, X, Y, m, half = 200, color = VIOLET, opacity = 1, dash, width = 6}) => {
	if (opacity <= 0.001) return null;
	const [px, py] = M.pt(X, Y);
	const vx = M.sx, vy = -m * M.sy, l = Math.hypot(vx, vy) || 1;
	return <line x1={px - (vx / l) * half} y1={py - (vy / l) * half} x2={px + (vx / l) * half} y2={py + (vy / l) * half} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} opacity={opacity} />;
};
export const Dot: React.FC<{p: [number, number]; color?: string; r?: number; opacity?: number}> = ({p, color = VIOLET, r = 14, opacity = 1}) => (opacity <= 0.001 ? null : <circle cx={p[0]} cy={p[1]} r={r} fill={color} stroke={CARD} strokeWidth={5} opacity={opacity} />);

/** Label at a frame point, with a paper halo. */
export const CurveLabel: React.FC<{x: number; y: number; at?: number; out?: number; color?: string; children: React.ReactNode; size?: number; anchor?: 'start' | 'end'; opacity?: number}> = ({x, y, at = -30, out, color = INK, children, size = 42, anchor = 'start', opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10)) * opacity;
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, transform: anchor === 'end' ? 'translateX(-100%)' : undefined, opacity: o, ...DISPLAY(size, color), textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8, 0 0 3px #fffdf8'}}>{children}</div>;
};
/** Grey "Year 11" / "last video" recall chip. */
export const RecallChip: React.FC<{x: number; y: number; w?: number; at: number; out?: number; children: React.ReactNode; size?: number}> = ({x, y, w, at, out, children, size = 32}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: '#4f4840', lineHeight: 1.3}}>{children}</div>
	</Enter>
);
/** A statement chip on a card (role-coloured border). */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; color?: string; w?: number; glow?: number}> = ({x, y, at, out, children, size = 44, color = 'rgba(60,45,20,0.14)', w, glow = 0}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '6px 24px 8px', boxShadow: glow > 0 ? `0 0 0 ${8 * glow}px rgba(40,115,71,0.22), ${CARD_SHADOW}` : CARD_SHADOW, border: `3px solid ${color}`, ...DISPLAY(size, INK, 800), whiteSpace: w ? 'normal' : 'pre'}}>{children}</div>
	</Enter>
);
/** Two-line hand note (counts as one tag). */
export const HandNote: React.FC<{x: number; y: number; lines: string[]; at: number; out?: number; size?: number; color?: string}> = ({x, y, lines, at, out, size = 38, color = INK}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o}}>
			{lines.map((l, i) => <div key={i} style={{height: size * 1.15}}><HandText text={l} at={at + i * 18} size={size} color={color} cps={28} /></div>)}
		</div>
	);
};
/** A row on a working column: small role label above a large formula. */
export const LabelledRow: React.FC<{x: number; y: number; label: string; color?: string; at: number; out?: number; size?: number; children: React.ReactNode; dim?: number}> = ({x, y, label, color = INK, at, out, size = 52, children, dim = 0}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{opacity: 1 - 0.35 * dim}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color}}>{label}</div>
			<div style={{...DISPLAY(size - 14 * dim, INK, 800)}}>{children}</div>
		</div>
	</Enter>
);

/** The countdown ring held full from "Pause here to answer." until the timed countdown starts (build rule). */
export const PreRing: React.FC<{from: number; start: number; x?: number; y?: number; r?: number}> = ({from, start, x = 1690, y = 560, r = 70}) => {
	const f = useCurrentFrame();
	if (f < from || f >= start) return null;
	const o = prog(f, from, 10);
	return (
		<FrameSvg>
			<g opacity={o} transform={`translate(${x},${y})`}>
				<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
				<circle r={r} fill="none" stroke={PAPER_DEEP} strokeWidth={14} />
				<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} />
				<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>10</text>
				<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>think it through</text>
			</g>
		</FrameSvg>
	);
};
/** Attempt stage (the d02/d03 layout): question card, a "Given" card at 44 px, a large answer-free picture, the full ring. */
export const AttemptStage: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; size?: number; children: React.ReactNode}> = ({hold, pauseAt, picture, given, heading, size = 52, children}) => (
	<RolesOn on={false}>
		<QuestionCard at={0} size={size} w={1460} y={214} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<Card x={96} y={560} w={700} at={6} pad="14px 26px 16px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 860, top: 540}}>{picture}</Enter>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);

/**
 * Structure picture for a question card: an outside function written round a dashed inside slot, with
 * "outside" and "inside" hand tags (ink, roles off). Optional number line under it (given conditions only).
 * `roles` colours the slot's slope tags for feedback.
 */
export const StructurePic: React.FC<{w?: number; h?: number; outer: string; inner: React.ReactNode; line?: React.ReactNode; roles?: boolean; extra?: React.ReactNode; k?: number}> = ({w = 720, h = 380, outer, inner, line, roles = false, extra, k = 1.25}) => (
	<div style={{position: 'relative', width: w, height: h, boxSizing: 'border-box', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', padding: '22px 30px'}}>
		<div style={{display: 'flex', alignItems: 'baseline', gap: 20}}>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40 * k, color: roles ? TEAL : INK}}>outside</span>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40 * k, color: INK_SOFT}}>→</span>
			<span style={{...DISPLAY(44 * k, roles ? TEAL : INK)}}>{outer}( )</span>
		</div>
		<div style={{marginTop: 10, ...DISPLAY(80 * k)}}>
			<span style={{color: roles ? TEAL : INK}}>{outer}(</span><Slot>{inner}</Slot><span style={{color: roles ? TEAL : INK}}>)</span>
		</div>
		<div style={{display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 10}}>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40 * k, color: INK}}>inside</span>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40 * k, color: INK_SOFT}}>→</span>
			<span style={{...DISPLAY(44 * k, INK)}}><Slot>{inner}</Slot></span>
		</div>
		{line ? <div style={{position: 'absolute', right: 22, bottom: 16}}>{line}</div> : null}
		{extra}
	</div>
);

/**
 * Number line picture (inline SVG): shaded intervals, open or closed circles, ticks with labels, a marked
 * value. Text at 28 px or more.
 */
export const NumberLine: React.FC<{w?: number; h?: number; range: [number, number]; shade?: {from: number; to: number; color?: string}[]; circles?: {x: number; open?: boolean; color?: string}[]; ticks?: {x: number; label: string}[]; mark?: {x: number; label: string; color?: string}; label?: {x: number; text: string; color?: string}; size?: number; bold?: boolean}> = ({w = 1000, h = 130, range, shade = [], circles = [], ticks = [], mark, label, size = 30, bold = false}) => {
	const pad = 30, X = (v: number) => pad + ((v - range[0]) / (range[1] - range[0])) * (w - 2 * pad), y0 = bold ? 70 : 50, sw = bold ? 7 : 4, band = bold ? 48 : 32, cr = bold ? 17 : 12;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
			{shade.map((s, i) => <rect key={i} x={X(Math.max(range[0], s.from))} y={y0 - band / 2} width={X(Math.min(range[1], s.to)) - X(Math.max(range[0], s.from))} height={band} rx={8} fill={s.color ?? '#f1c97a'} opacity={0.85} />)}
			<line x1={pad - 10} x2={w - pad + 10} y1={y0} y2={y0} stroke={INK} strokeWidth={sw} />
			<path d={`M${w - pad + 10},${y0} l-18,-12 M${w - pad + 10},${y0} l-18,12`} stroke={INK} strokeWidth={sw} fill="none" />
			{ticks.map(t => <g key={t.label}><line x1={X(t.x)} x2={X(t.x)} y1={y0 - 14} y2={y0 + 14} stroke={INK} strokeWidth={sw - 1} /><text x={X(t.x)} y={y0 + 24 + size} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: INK}}>{t.label}</text></g>)}
			{circles.map((c, i) => <circle key={i} cx={X(c.x)} cy={y0} r={cr} fill={c.open ? CARD : (c.color ?? INK)} stroke={c.color ?? INK} strokeWidth={sw - 1} />)}
			{mark ? <g><circle cx={X(mark.x)} cy={y0} r={cr} fill={mark.color ?? VIOLET} stroke={CARD} strokeWidth={4} /><text x={X(mark.x)} y={y0 - band / 2 - 10} textAnchor="middle" style={{fontFamily: bold ? FONT_DISPLAY : FONT_HAND, fontWeight: bold ? 800 : 700, fontSize: bold ? 40 : 38, fill: mark.color ?? VIOLET}}>{mark.label}</text></g> : null}
			{label ? <text x={X(label.x)} y={y0 - band / 2 - 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: bold ? 44 : 36, fill: label.color ?? MATH_MISTAKE}}>{label.text}</text> : null}
		</svg>
	);
};

// ---------- function families ----------
export const SIN: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
export const SIN2: FnFamily = {f: u => Math.sin(2 * u), df: u => 2 * Math.cos(2 * u)};
export const SINSQ: FnFamily = {f: u => Math.sin(u * u), df: u => 2 * u * Math.cos(u * u)};
export const ESIN: FnFamily = {f: u => Math.exp(Math.sin(u)), df: u => Math.exp(Math.sin(u)) * Math.cos(u)};
export const LNCOS: FnFamily = {f: u => Math.log(Math.cos(u)), df: u => -Math.tan(u), domain: [{from: -Math.PI / 2, to: Math.PI / 2}]};
export const COSSQ: FnFamily = {f: u => Math.cos(u * u + 1), df: u => -2 * u * Math.sin(u * u + 1)};
export const SINLN: FnFamily = {f: u => Math.sin(Math.log(u)), df: u => Math.cos(Math.log(u)) / u, domain: [{from: 0, to: Infinity}]};
export const EXSIN: FnFamily = {f: u => Math.exp(u) * Math.sin(u), df: u => Math.exp(u) * (Math.sin(u) + Math.cos(u))};
export const TRIG_WIN = {x: [-Math.PI, 2 * Math.PI] as Range, y: [-1.5, 1.5] as Range};
/** d05's final frame geometry (d06 opens on it). */
export const SINE_STAGE = {x: 330, y: 200, w: 1260, h: 660};
/** The handoff window shared with d07 scenes 1 to 5. */
export const HANDOFF_WIN = {x: [-0.5, 3.5] as Range, y: [-2, 8] as Range};
export const HANDOFF_STAGE = {x: 520, y: 250, w: 1300, h: 640};
export {MATH_MISTAKE};
