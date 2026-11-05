// Maths studio primitives: timelines, number formats, cards, hand tags and marks.
// Visual vocabulary measured from the Chemistry M5 g01 build (src/explainer/lessons/chem-m5-g01):
// paper cards #fffdf8, radius 20, 2.5 px hairline border and soft double shadow; hand font
// annotations 38 to 50 px; uppercase 28 px card titles; scene heading in the hand font at (96, 92).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {RoleKey, roleInk, roleStroke} from './roles';

export const W = 1920;
export const H = 1080;
export const CARD = '#fffdf8';
export const CARD_BORDER = 'rgba(60,45,20,0.10)';
export const CARD_SHADOW = '0 14px 32px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)';
export const MARGIN = 96;

// ---------- timelines ----------
export const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
/** Piecewise value over frames; eased between keys (smoothstep) unless smooth = false. */
export const kf = (f: number, pts: readonly (readonly [number, number])[], eased = true): number => {
	if (!pts.length) return 0;
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) {
			const u = (f - a) / (b - a);
			return va + (vb - va) * (eased ? smooth(u) : u);
		}
	}
	return pts[pts.length - 1][1];
};
/** Visible between at and out with a short fade (0..1). */
export const vis = (f: number, at: number, out?: number, dur = 12) => prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur));

// ---------- numbers ----------
const MINUS = '−';
/** Fixed decimals with a true minus sign and no "-0.00". */
export const fmtNum = (v: number, digits = 2) => {
	const r = Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v;
	const s = Math.abs(r).toFixed(digits);
	return r < 0 ? MINUS + s : s;
};
const FRACTIONS: [number, string][] = [[0.5, '½'], [1 / 3, '⅓'], [0.25, '¼'], [2 / 3, '⅔'], [0.75, '¾']];
/** Nice label for a parameter: integers and common fractions exactly, otherwise 2 decimals. */
export const niceNum = (v: number, digits = 2) => {
	const sign = v < 0 ? MINUS : '';
	const a = Math.abs(v);
	if (Math.abs(a - Math.round(a)) < 0.004) return sign + String(Math.round(a));
	for (const [x, l] of FRACTIONS) if (Math.abs(a - x) < 0.004) return sign + l;
	return sign + a.toFixed(digits);
};

// ---------- layout ----------
/** Full-frame SVG layer (1920 x 1080) for drawn marks. */
export const FrameSvg: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', ...style}}>{children}</svg>
);
/** SVG group visible between at and out. */
export const Fade: React.FC<{at: number; out?: number; children: React.ReactNode; dur?: number}> = ({at, out, children, dur = 12}) => {
	const o = vis(useCurrentFrame(), at, out, dur);
	if (o <= 0.001) return null;
	return <g opacity={o}>{children}</g>;
};
/** Paper card with a lift-in entrance (g01 Panel). */
export const Card: React.FC<{x: number; y: number; w: number; h?: number; at: number; out?: number; children: React.ReactNode; border?: string; borderWidth?: number; pad?: string; tint?: string; style?: React.CSSProperties}> = ({x, y, w, h, at, out, children, border = CARD_BORDER, borderWidth = 2.5, pad = '18px 26px', tint = CARD, style}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{boxSizing: 'border-box', height: h, background: tint, borderRadius: 20, padding: pad, boxShadow: CARD_SHADOW, border: `${borderWidth}px solid ${border}`, ...style}}>{children}</div>
	</Enter>
);
/** Uppercase card title (g01 givens title: 28 px, 800, letter spacing 2). */
export const CardTitle: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => (
	<div style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color, marginBottom: 6}}>{children}</div>
);
/** Scene heading in the hand font at the g01 position. */
export const SceneHeading: React.FC<{text: string; at?: number; size?: number; color?: string; out?: number}> = ({text, at = 4, size = 60, color = INK, out}) => {
	const o = out === undefined ? 1 : 1 - prog(useCurrentFrame(), out, 10);
	return <div style={{position: 'absolute', left: MARGIN, top: 92, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};
/** Display-font text block. */
export const Txt: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number; hand?: boolean; style?: React.CSSProperties}> = ({children, size = 36, color = INK, weight = 600, hand = false, style}) => (
	<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontSize: size, fontWeight: hand ? 700 : weight, color, lineHeight: 1.18, ...style}}>{children}</div>
);

// ---------- hand-drawn marks ----------
export type MarkKind = 'circle' | 'box' | 'underline' | 'strike';
/** Draws a hand mark around inline content at a cue (circle, box, underline or strike-through). */
export const MarkSpan: React.FC<{children: React.ReactNode; kind?: MarkKind; at: number; out?: number; role?: RoleKey; color?: string; width?: number; seed?: number; pad?: number}> = ({children, kind = 'circle', at, out, role, color, width = 4, seed = 3, pad = 0.16}) => {
	const f = useCurrentFrame();
	const c = color ?? roleStroke(role, INK);
	const p = prog(f, at, kind === 'circle' ? 18 : 12);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	const d = kind === 'circle' ? scribbleEllipse(50, 50, 49, 46, seed, 1.15)
		: kind === 'box' ? 'M2,4 L98,3 L98,97 L3,96 Z'
		: kind === 'underline' ? 'M0,96 Q50,92 100,95'
		: 'M-2,58 Q50,50 102,44';
	const inset = kind === 'underline' ? `0 0 -${pad}em 0` : kind === 'strike' ? '0' : `-${pad * 0.55}em -${pad * 1.4}em`;
	return (
		<span style={{position: 'relative', display: 'inline-block'}}>
			{children}
			{f >= at ? (
				<svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', inset, width: kind === 'underline' || kind === 'strike' ? '100%' : `calc(100% + ${pad * 2.8}em)`, height: kind === 'underline' || kind === 'strike' ? '100%' : `calc(100% + ${pad * 1.1}em)`, overflow: 'visible', opacity: o, pointerEvents: 'none'}}>
					<path d={d} fill="none" stroke={c} strokeWidth={width} vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
				</svg>
			) : null}
		</span>
	);
};

export type HandMark =
	| {kind: 'circle'; cx: number; cy: number; rx: number; ry: number; seed?: number}
	| {kind: 'arrow'; from: [number, number]; to: [number, number]; bend?: number}
	| {kind: 'underline'; x1: number; x2: number; y: number}
	| {kind: 'cross'; cx: number; cy: number; size?: number}
	| {kind: 'box'; x: number; y: number; w: number; h: number}
	| {kind: 'brace'; x: number; y1: number; y2: number; facing?: 'left' | 'right'};

/** Hand-drawn mark in frame coordinates (place inside a FrameSvg or any 1920 x 1080 SVG). */
export const DrawnMark: React.FC<{mark: HandMark; at: number; color: string; width?: number}> = ({mark: m, at, color, width = 5}) => {
	if (m.kind === 'circle') return <DrawPath d={scribbleEllipse(m.cx, m.cy, m.rx, m.ry, m.seed ?? 2, 1.2)} at={at} dur={18} color={color} width={width} />;
	if (m.kind === 'underline') return <DrawPath d={`M${m.x1},${m.y} Q${(m.x1 + m.x2) / 2},${m.y + 7} ${m.x2},${m.y - 2}`} at={at} dur={12} color={color} width={width} />;
	if (m.kind === 'box') return <DrawPath d={`M${m.x},${m.y + 2} L${m.x + m.w},${m.y} L${m.x + m.w + 2},${m.y + m.h} L${m.x - 1},${m.y + m.h + 1} Z`} at={at} dur={18} color={color} width={width} />;
	if (m.kind === 'brace') {
		const dir = m.facing === 'left' ? -1 : 1, mid = (m.y1 + m.y2) / 2, w = 22 * dir;
		return <DrawPath d={`M${m.x},${m.y1} Q${m.x + w},${m.y1} ${m.x + w},${m.y1 + 30} L${m.x + w},${mid - 22} Q${m.x + w},${mid} ${m.x + 2 * w},${mid} Q${m.x + w},${mid} ${m.x + w},${mid + 22} L${m.x + w},${m.y2 - 30} Q${m.x + w},${m.y2} ${m.x},${m.y2}`} at={at} dur={20} color={color} width={width} />;
	}
	if (m.kind === 'cross') {
		const s = (m.size ?? 44) / 2;
		return <g><DrawPath d={`M${m.cx - s},${m.cy - s} L${m.cx + s},${m.cy + s}`} at={at} dur={8} color={color} width={width + 2} /><DrawPath d={`M${m.cx + s},${m.cy - s} L${m.cx - s},${m.cy + s}`} at={at + 6} dur={8} color={color} width={width + 2} /></g>;
	}
	const [x1, y1] = m.from, [x2, y2] = m.to;
	const bend = m.bend ?? 0.18;
	const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
	const ang = Math.atan2(y2 - my, x2 - mx), hl = 22;
	const h1 = [x2 - hl * Math.cos(ang - 0.45), y2 - hl * Math.sin(ang - 0.45)], h2 = [x2 - hl * Math.cos(ang + 0.45), y2 - hl * Math.sin(ang + 0.45)];
	return <g><DrawPath d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} at={at} dur={16} color={color} width={width} /><DrawPath d={`M${h1[0]},${h1[1]} L${x2},${y2} L${h2[0]},${h2[1]}`} at={at + 14} dur={8} color={color} width={width} /></g>;
};

/**
 * Teacher's hand-written tag: short text in a role colour that writes itself on, with optional
 * drawn marks (circle, arrow, underline, cross, box) in frame coordinates. (x, y) is the left,
 * centre or right of the text's middle line, by `anchor`. Keep at most two tags live at once.
 */
export const HandTag: React.FC<{x: number; y: number; text?: string; at: number; out?: number; role?: RoleKey; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; marks?: HandMark[]; markAt?: number; markWidth?: number; rotate?: number}> = ({x, y, text, at, out, role, color, size = 40, anchor = 'start', marks = [], markAt, markWidth = 5, rotate = 0}) => {
	const f = useCurrentFrame();
	const c = color ?? roleInk(role, INK);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < Math.min(at, markAt ?? at) || o <= 0.001) return null;
	const tx = anchor === 'start' ? '0' : anchor === 'middle' ? '-50%' : '-100%';
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			{marks.length ? <FrameSvg>{marks.map((m, i) => <DrawnMark key={i} mark={m} at={(markAt ?? at) + i * 4} color={color ?? roleStroke(role, INK)} width={markWidth} />)}</FrameSvg> : null}
			{text ? <div style={{position: 'absolute', left: x, top: y - size * 0.62, transform: `translateX(${tx}) rotate(${rotate}deg)`, transformOrigin: 'left center'}}><HandText text={text} at={at} size={size} color={c} cps={26} /></div> : null}
		</div>
	);
};

// ---------- painted plates ----------
/** A painted plate: file size and the alpha bounding box (alpha > 20) in file pixels. */
export type PlateSpec = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const plateHeight = (p: PlateSpec, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);
/** Plate inside an SVG: the alpha box's top left lands at (x, y), scaled to width w. Never stretched. */
export const SvgPlate: React.FC<{plate: PlateSpec; x: number; y: number; w: number; opacity?: number}> = ({plate, x, y, w, opacity = 1}) => {
	const s = w / (plate.box[2] - plate.box[0]);
	return <image href={staticFile(plate.src)} x={x - plate.box[0] * s} y={y - plate.box[1] * s} width={plate.nat[0] * s} height={plate.nat[1] * s} opacity={opacity} preserveAspectRatio="none" />;
};
/** Plate as a positioned HTML element (alpha box placed at left/top, width w). */
export const PlateImg: React.FC<{plate: PlateSpec; x: number; y: number; w: number; opacity?: number}> = ({plate, x, y, w, opacity = 1}) => {
	const h = plateHeight(plate, w);
	return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}><SvgPlate plate={plate} x={0} y={0} w={w} /></svg>;
};
