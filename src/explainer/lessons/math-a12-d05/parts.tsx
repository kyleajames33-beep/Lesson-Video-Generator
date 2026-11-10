// Lesson parts for math-a12-d05: the Ferris wheel rig (brief 235 plates on the kit's RotatingPlate), the
// readout strip, trig families and the radian question picture. Generic helpers are imported read-only from
// math-a12-d04/parts (same house style).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {
	AnswerFrame, CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, QuestionCard, RolesOn, MATH_BLUE, MATH_GRADIENT, MATH_TEAL, RotatingPlate, SignedBar, SvgPlate, fmtNum, piTicks,
} from '../../math/studio';
import type {FnFamily, PlateSpec, RotatingGeometry, Tick} from '../../math/studio';
import type {Range} from '../../math/graphs';

export {Chip, CurveLabel, DISPLAY, Dot, Frac, HandNote, NAVY, PreRing, RecallChip, TanLine, WorkingSpace, gmap} from '../math-a12-d04/parts';
export type {GMap} from '../math-a12-d04/parts';
import {PreRing} from '../math-a12-d04/parts';

export const VIOLET = MATH_GRADIENT;
export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;

const M = 'assets/maths/';
/** Brief 235 plates (manifest: native size, alpha box, anchors in file pixels). */
export const RIM: PlateSpec = {src: M + 'ma12-ferris-wheel-rim-v1.png', nat: [1500, 1500], box: [228, 227, 1272, 1270]};
export const STAND: PlateSpec = {src: M + 'ma12-ferris-wheel-stand-v1.png', nat: [879, 1998], box: [71, 681, 807, 1672]};
export const GONDOLA: PlateSpec = {src: M + 'ma12-ferris-gondola-v1.png', nat: [1086, 1448], box: [231, 255, 854, 1225]};
export const GONDOLA_MARKED: PlateSpec = {src: M + 'ma12-ferris-gondola-marked-v1.png', nat: [1086, 1448], box: [231, 255, 854, 1225]};
export const FERRIS_FILES = [RIM.src, STAND.src, GONDOLA.src, GONDOLA_MARKED.src];
const HUB: [number, number] = [750, 750];
/** Cabin bracket radius on the rim (file px): this is "radius 1". */
const BRACKET_R = 500;
const AXLE: [number, number] = [439, 757];
const PIVOT: [number, number] = [543, 302];

/**
 * The Ferris wheel: the stand (static) with the rim rotating about its hub placed on the stand's axle, eight
 * empty cabins hanging upright from brackets at 45° steps, our seat's cabin marked (at angle 0 + angle).
 * R is the frame size of one radius (hub to cabin pivot); the angle is radians turned anticlockwise.
 */
export const FerrisWheel: React.FC<{cx: number; cy: number; R: number; angle: number; at?: number; out?: number; ghostAhead?: number; unitCircle?: React.ComponentProps<typeof RotatingPlate>['unitCircle']; overlay?: (g: RotatingGeometry) => React.ReactNode; cabins?: boolean; stand?: boolean}> = ({cx, cy, R, angle, at = 0, out, ghostAhead = 0, unitCircle, overlay, cabins = true, stand = true}) => {
	const s = R / BRACKET_R;
	const w = (RIM.box[2] - RIM.box[0]) * s;
	const gw = 0.3 * R;
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.001) return null;
	const sprites = cabins ? [
		...Array.from({length: 8}, (_, k) => ({plate: k === 0 ? GONDOLA_MARKED : GONDOLA, attach: {angle: (k * Math.PI) / 4, r: BRACKET_R}, hang: PIVOT, w: gw})),
		...(ghostAhead > 0.001 ? [{plate: GONDOLA_MARKED, attach: {angle: Math.PI / 2, r: BRACKET_R}, hang: PIVOT, w: gw, opacity: 0.45 * ghostAhead}] : []),
	] : [];
	const sw = (STAND.box[2] - STAND.box[0]) * s;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{stand ? <FrameSvg><SvgPlate plate={STAND} x={cx - (AXLE[0] - STAND.box[0]) * s} y={cy - (AXLE[1] - STAND.box[1]) * s} w={sw} /></FrameSvg> : null}
			<RotatingPlate plate={RIM} pivot={HUB} cx={cx} cy={cy} w={w} angle={angle} sprites={sprites} unitCircle={unitCircle} overlay={overlay} />
		</div>
	);
};
/** Frame position of our seat's pivot. */
export const seatAt = (cx: number, cy: number, R: number, angle: number): [number, number] => [cx + R * Math.cos(angle), cy - R * Math.sin(angle)];

/** Horizontal readout strip: label over a 52 px value per cell (one timeline feeds it). */
export const ReadStrip: React.FC<{x: number; y: number; w: number; at?: number; cells: {label: React.ReactNode; text: string; color?: string; unit?: string; bar?: number}[]}> = ({x, y, w, at = -30, cells}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: prog(f, at, 12), display: 'flex', background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box', padding: '8px 10px'}}>
			{cells.map((c, i) => (
				<div key={i} style={{flex: 1, padding: '0 18px', borderLeft: i ? `2px solid ${PAPER_DEEP}` : undefined}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, color: c.color ?? INK, whiteSpace: 'pre'}}>{c.label}</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 12}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, lineHeight: 1.1, color: c.color ?? INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{c.text}</span>
						{c.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>{c.unit}</span> : null}
						{c.bar !== undefined ? <SignedBar value={c.bar} max={1} width={130} color={c.color ?? INK} /> : null}
					</div>
				</div>
			))}
		</div>
	);
};
export const num = (v: number, d = 2) => fmtNum(v, d);

export const SIN: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
export const COS: FnFamily = {f: u => Math.cos(u), df: u => -Math.sin(u)};
export const TRIG_WIN = {x: [-Math.PI, 2 * Math.PI] as Range, y: [-1.5, 1.5] as Range};
export const RAD_TICKS: Tick[] = piTicks(-1, 2, 2);
/** d04's final frame geometry (d05 opens on it). */
export const SINE_STAGE = {x: 330, y: 200, w: 1260, h: 660};

/** Colour key along the top right (scenes 2 to 15). */
export const Legend: React.FC<{at?: number}> = ({at = -30}) => {
	const f = useCurrentFrame();
	const items: [string, string][] = [[INK, 'height'], [VIOLET, 'gradient: climbing rate'], [TEAL, 'slide π/2']];
	return (
		<div style={{position: 'absolute', right: 96, top: 26, opacity: prog(f, at, 14), display: 'flex', gap: 30}}>
			{items.map(([c, t]) => <span key={t} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: c}}>{t}</span>)}
		</div>
	);
};

/** Question-card picture: a radian axis 0 to 2π with marked x values and violet tags; no curve, no sign. */
export const QRad: React.FC<{marks: {x: number; label: string}[]; tag?: string; w?: number; h?: number}> = ({marks, tag = 'gradient here?', w = 440, h = 300}) => {
	const pad = {l: 30, r: 30, t: Math.max(30, h * 0.15), b: Math.max(60, h * 0.2)};
	const bw = w - pad.l - pad.r;
	const X = (v: number) => pad.l + 18 + (v / (2 * Math.PI)) * (bw - 36);
	const oy = pad.t + (h - pad.t - pad.b) / 2;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<path d={`M${pad.l},${oy} H${w - pad.r} M${X(0)},${pad.t} V${h - pad.b}`} stroke={INK} strokeWidth={4.5} fill="none" />
			<text x={w - pad.r} y={oy - 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>x</text>
			{[{x: 0, label: '0'}, {x: 2 * Math.PI, label: '2π'}, ...marks].map(m => <g key={m.label}><line x1={X(m.x)} x2={X(m.x)} y1={oy - 8} y2={oy + 8} stroke={INK} strokeWidth={3} /><text x={X(m.x)} y={h - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(30, h * 0.095), fill: INK}}>{m.label}</text></g>)}
			{marks.map((m, i) => <g key={'m' + i}>
				<line x1={X(m.x)} x2={X(m.x)} y1={oy} y2={pad.t + 10} stroke={VIOLET} strokeWidth={5} strokeDasharray="10 8" />
				<circle cx={X(m.x)} cy={oy} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} />
			</g>)}
			<text x={w / 2} y={pad.t + 8} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: Math.max(38, h * 0.13), fill: VIOLET}}>{tag}</text>
		</svg>
	);
};

/** A green framed rule (sin and cos derivatives), small. */
export const GreenRule: React.FC<{x: number; y: number; at?: number; size?: number; children: React.ReactNode; glow?: number}> = ({x, y, at = -30, size = 40, children, glow = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'inline-block', background: glow > 0 ? `rgba(220,239,226,${0.4 + 0.6 * glow})` : CARD, border: '4px solid #287347', borderRadius: 16, padding: '4px 18px', boxShadow: '0 10px 22px rgba(40,115,71,0.14)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
			{children}
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: Math.max(26, size * 0.66), color: INK_SOFT}}>x in radians</div>
		</div>
	);
};

/**
 * Working rows like the kit's WorkingRows (stable relation column, newest row large, earlier rows shrink and
 * dim), but each row fades and rises in as a whole unit, so no frame shows a half-clipped line.
 */
export const WholeRows: React.FC<{x: number; y: number; w?: number; rows: {left?: React.ReactNode; relation?: React.ReactNode; right: React.ReactNode; at: number; out?: number; answer?: boolean; keep?: boolean}[]; size?: number; oldSize?: number; gap?: number}> = ({x, y, w = 1100, rows, size = 76, oldSize = 48, gap = 22}) => {
	const f = useCurrentFrame();
	const shown = rows.filter(r => f >= r.at - 1 && (r.out === undefined || f < r.out + 12));
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, display: 'grid', gridTemplateColumns: 'auto auto 1fr', columnGap: 18, rowGap: gap, alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, color: INK}}>
			{shown.map(r => {
				const idx = rows.indexOf(r);
				const next = rows.slice(idx + 1).find(n => n.at > r.at);
				const age = next && !r.keep && !r.answer ? prog(f, next.at, 16) : 0;
				const fs = size + (oldSize - size) * age;
				const op = prog(f, r.at, 12) * (1 - 0.38 * age) * (r.out === undefined ? 1 : 1 - prog(f, r.out, 12));
				const cell: React.CSSProperties = {fontSize: fs, opacity: op, whiteSpace: 'pre', lineHeight: 1.3, transform: `translateY(${(1 - prog(f, r.at, 12)) * 12}px)`};
				return (
					<React.Fragment key={idx}>
						<div style={{...cell, textAlign: 'right'}}>{r.left ?? ''}</div>
						<div style={{...cell, textAlign: 'center'}}>{r.relation ?? '='}</div>
						<div style={cell}>{r.answer ? <AnswerFrame at={r.at + 6}>{r.right}</AnswerFrame> : r.right}</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

/**
 * The d02/d03 attempt layout widened for d05: question card, a 44 px Given card, and the answer-free radian
 * picture 900 x 380 filling the lower right; full ring from "Pause here to answer." (kit countdown after).
 */
export const AttemptWide: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; size?: number; children: React.ReactNode}> = ({hold, pauseAt, picture, given, heading, size = 54, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={560} w={700} at={6} pad="14px 26px 16px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 840, top: 560}}>{picture}</Enter>
		<QuestionCard at={0} size={size} w={1460} y={214} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);
