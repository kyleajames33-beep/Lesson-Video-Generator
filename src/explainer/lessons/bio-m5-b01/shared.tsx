import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b1/measured/lesson.json';
import {
	AMBER, AMBER_INK, BLUE, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, Plate, prog,
} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export const W = 1920, H = 1080;
export const CORAL = '#d4614a';
export const GREEN = '#2f8a5b';
export const RED = '#c4432f';

/** Scene data (captions, hold frames) from the measured recording. */
export const S = (id: string): CueScene => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

export const Overlay: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible', ...style}}>{children}</svg>
);

/** Heading that swaps text at given scene-local frames. */
export const Heading: React.FC<{items: [number, string][]; size?: number; color?: string; left?: number; top?: number}> = ({items, size = 84, color = INK, left = 96, top = 92}) => {
	const f = useCurrentFrame();
	let cur = 0;
	items.forEach(([at], i) => { if (f >= at) cur = i; });
	const [at, text] = items[cur];
	return <div style={{position: 'absolute', left, top, opacity: f >= items[0][0] ? 1 : 0}}><HandText key={at} text={text} at={at} size={size} cps={30} color={color} /></div>;
};

export const Card: React.FC<{x: number; y: number; w: number; at: number; out?: number; children: React.ReactNode; tint?: string; pad?: string; h?: number}> = ({x, y, w, at, out, children, tint = '#fffdf8', pad = '24px 30px', h}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: tint, borderRadius: 22, padding: pad, height: h, boxSizing: 'border-box', boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)'}}>{children}</div>
	</Enter>
);

export const Body: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number; style?: React.CSSProperties}> = ({children, size = 36, color = INK, weight = 500, style}) => (
	<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, lineHeight: 1.25, ...style}}>{children}</div>
);

export const Chip: React.FC<{x: number; y: number; at: number; text: string; color?: string; size?: number; out?: number}> = ({x, y, at, text, color = BLUE, size = 46, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 999, padding: '2px 26px 6px', whiteSpace: 'nowrap', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>{text}</span>
	</Enter>
);

/** Handwritten label drawn as free svg text. */
export const Label: React.FC<{x: number; y: number; at: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; out?: number; weight?: number; font?: 'hand' | 'body'}> = ({x, y, at, text, size = 46, color = INK, anchor = 'middle', out, weight = 700, font = 'hand'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	return <text x={x} y={y + (1 - prog(f, at, 12)) * 10} textAnchor={anchor} opacity={o} style={{fontFamily: font === 'hand' ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size}} fill={color}>{text}</text>;
};

// ---------- artwork ----------
export type ArtDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const ART: Record<string, ArtDef> = {
	bunch: {src: A.BUNCH, nat: [1842, 1330], box: [430, 206, 1069, 900]},
	plantation: {src: A.PLANTATION, nat: [2330, 1197], box: [246, 267, 1835, 645]},
	cloneRow: {src: A.CLONE_ROW, nat: [2172, 724], box: [234, 147, 1689, 443]},
	trays: {src: A.TRAYS, nat: [1774, 887], box: [233, 224, 1308, 485]},
	island: {src: A.ISLAND, nat: [1842, 1330], box: [255, 261, 1332, 787]},
	pond: {src: A.POND, nat: [1842, 1330], box: [290, 237, 1268, 839]},
	seedlings: {src: A.SEEDLINGS, nat: [1900, 986], box: [213, 258, 1513, 498]},
	prize: {src: A.PRIZE, nat: [1800, 1500], box: [408, 247, 1021, 1024]},
	runner: {src: A.RUNNER, nat: [1672, 941], box: [0, 71, 1672, 842]},
	flower: {src: A.FLOWER, nat: [1254, 1254], box: [29, 27, 1195, 1214]},
	// three-stage sequences share one canvas, so one crop box per set keeps them aligned
	fission1: {src: A.FISSION[0], nat: [1800, 1200], box: [213, 429, 1374, 364]},
	fission2: {src: A.FISSION[1], nat: [1800, 1200], box: [213, 429, 1374, 364]},
	fission3: {src: A.FISSION[2], nat: [1800, 1200], box: [213, 429, 1374, 364]},
	budding1: {src: A.BUDDING[0], nat: [1800, 1200], box: [478, 107, 925, 915]},
	budding2: {src: A.BUDDING[1], nat: [1800, 1200], box: [478, 107, 925, 915]},
	budding3: {src: A.BUDDING[2], nat: [1800, 1200], box: [478, 107, 925, 915]},
};
export const artH = (a: ArtDef, w: number) => (w * a.box[3]) / a.box[2];
export const Art: React.FC<{a: ArtDef; x: number; y: number; w: number; style?: React.CSSProperties}> = ({a, x, y, w, style}) => (
	<Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, ...style}} />
);

/** Centre fractions of the five pots across the varied seedlings plate. */
export const POTS = [0.082, 0.276, 0.479, 0.672, 0.881];
/** Centre fractions of the five plants across the clone row plate. */
export const CLONES = [0.08, 0.294, 0.504, 0.694, 0.89];

// ---------- coded drawing helpers ----------
/** Two-strand DNA helix with rungs. `mark` highlights one rung in amber. */
export const Helix: React.FC<{x: number; y: number; w: number; h: number; color?: string; at?: number; dur?: number; turns?: number; mark?: number; opacity?: number; markAt?: number}> = ({x, y, w, h, color = BLUE, at = 0, dur = 30, turns = 3, mark = -1, opacity = 1, markAt = 0}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	if (p <= 0) return null;
	const steps = turns * 20;
	const amp = h / 2 - 4;
	const pts = (sign: number) => Array.from({length: steps + 1}, (_, i) => `${i ? 'L' : 'M'}${(x + (w * i) / steps).toFixed(1)},${(y + h / 2 + sign * amp * Math.sin((2 * Math.PI * turns * i) / steps)).toFixed(1)}`).join(' ');
	const rungs = turns * 2;
	return (
		<g opacity={opacity}>
			<path d={pts(1)} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
			<path d={pts(-1)} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" opacity={0.55} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
			{Array.from({length: rungs}, (_, k) => {
				const i = (k + 0.5) * (steps / rungs);
				const rx = x + (w * i) / steps;
				const dy = amp * Math.sin((2 * Math.PI * turns * i) / steps);
				const isMark = k === mark && f >= markAt;
				return <line key={k} x1={rx} x2={rx} y1={y + h / 2 - dy} y2={y + h / 2 + dy} stroke={isMark ? AMBER : color} strokeWidth={isMark ? 9 : 3} strokeLinecap="round" opacity={(k / rungs <= p ? 0.8 : 0) * (isMark ? 1 : 1)} />;
			})}
		</g>
	);
};

export const Sun: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 34, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<g transform={`translate(${x},${y}) scale(${p}) rotate(${(f - at) * 0.6})`} opacity={p}>
			{Array.from({length: 10}, (_, i) => <line key={i} x1={Math.cos((i / 10) * Math.PI * 2) * (r + 10)} y1={Math.sin((i / 10) * Math.PI * 2) * (r + 10)} x2={Math.cos((i / 10) * Math.PI * 2) * (r + 28)} y2={Math.sin((i / 10) * Math.PI * 2) * (r + 28)} stroke={AMBER} strokeWidth={7} strokeLinecap="round" />)}
			<circle r={r} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
		</g>
	);
};

export const Germ: React.FC<{x: number; y: number; r?: number; at: number}> = ({x, y, r = 30, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<g transform={`translate(${x},${y}) scale(${p}) rotate(${Math.sin((f - at) / 18) * 6})`} opacity={p}>
			{Array.from({length: 9}, (_, i) => <g key={i} transform={`rotate(${i * 40})`}><line x1={0} y1={0} x2={r + 14} y2={0} stroke="#6e3b2c" strokeWidth={6} strokeLinecap="round" /><circle cx={r + 18} cy={0} r={8} fill="#8c4a37" /></g>)}
			<circle r={r} fill="#8c4a37" stroke="#4b231a" strokeWidth={3} />
			<circle cx={-8} cy={-8} r={6} fill="#c27a64" opacity={0.7} />
		</g>
	);
};

export const Berry: React.FC<{cx: number; cy: number; s: number}> = ({cx, cy, s}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`}>
		<path d="M0,36 C-36,24 -42,-12 -24,-24 C-12,-32 12,-32 24,-24 C42,-12 36,24 0,36 Z" fill="#c9453a" stroke="#7d2018" strokeWidth={3.5} />
		{[[-14, -6], [10, -8], [-2, 8], [-16, 14], [14, 12], [0, -18]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={2.6} ry={4} fill="#f4d675" />)}
		<path d="M-20,-26 L-8,-36 L0,-26 L8,-36 L20,-26 L0,-16 Z" fill="#4a8f45" stroke="#2f6a2c" strokeWidth={2.5} strokeLinejoin="round" />
	</g>
);

// ---------- alleles ----------
/** Allele colours per gene slot (0 = first allele, 1 = second). Slot 0 is fruit size. */
export const AL: [string, string][] = [['#b03a6b', '#2a9d8f'], ['#e0a21b', '#7b86a8'], ['#5aa14a', '#c8ad7a']];
export const Bead: React.FC<{cx: number; cy: number; r: number; slot: number; allele: number; opacity?: number}> = ({cx, cy, r, slot, allele, opacity = 1}) => (
	<g opacity={opacity}>
		<circle cx={cx} cy={cy} r={r} fill={AL[slot][allele]} stroke={INK} strokeWidth={2.2} />
		<circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.28} fill="#fff" opacity={0.55} />
	</g>
);

/** Round gamete holding a row of beads. */
export const GameteBeads: React.FC<{cx: number; cy: number; r: number; pattern: number[]; stroke?: string; fill?: string; opacity?: number; scale?: number}> = ({cx, cy, r, pattern, stroke = INK_SOFT, fill = '#fffdf8', opacity = 1, scale = 1}) => (
	<g opacity={opacity} transform={`translate(${cx},${cy}) scale(${scale})`}>
		<circle r={r} fill={fill} stroke={stroke} strokeWidth={4} />
		{pattern.map((a, i) => <Bead key={i} cx={(i - 1) * r * 0.5} cy={0} r={r * 0.2} slot={i} allele={a} />)}
	</g>
);

/** A set of three chromosomes (bars of different lengths). */
export const ChromSet: React.FC<{x: number; y: number; color: string; s?: number; opacity?: number}> = ({x, y, color, s = 1, opacity = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={opacity}>
		{[56, 82, 108].map((h, i) => <rect key={i} x={(i - 1) * 30 - 9} y={-h / 2} width={18} height={h} rx={9} fill={color} stroke={INK} strokeWidth={2} />)}
	</g>
);

export const Underline: React.FC<{x1: number; x2: number; y: number; at: number; color?: string}> = ({x1, x2, y, at, color = AMBER}) => (
	<DrawPath d={`M${x1},${y} C${x1 + (x2 - x1) * 0.3},${y - 7} ${x1 + (x2 - x1) * 0.6},${y + 6} ${x2},${y - 3}`} at={at} dur={16} color={color} width={7} />
);

export const Tag: React.FC<{x: number; y: number; at: number; text: string; color?: string}> = ({x, y, at, text, color = AMBER_INK}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color, whiteSpace: 'nowrap'}}>{text}</div>
	</Enter>
);

export const dim = (f: number, from: number, to = 0.3) => 1 - (1 - to) * prog(f, from, 14);
export const paperLine = PAPER_DEEP;
export {AMBER, AMBER_INK, BLUE, INK, INK_SOFT, FONT_HAND, FONT_DISPLAY, HandText, DrawPath, Enter, prog};

/** Straight hand-drawn arrow that draws on. */
export const Arrow: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; color?: string; dur?: number; width?: number; dash?: string; head?: number}> = ({x1, y1, x2, y2, at, color = INK_SOFT, dur = 16, width = 5, dash, head = 18}) => {
	const a = Math.atan2(y2 - y1, x2 - x1);
	const hd = (s: number) => `${x2 - head * Math.cos(a + s)},${y2 - head * Math.sin(a + s)}`;
	return (
		<g>
			<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={dur} color={color} width={width} dash={dash} />
			<DrawPath d={`M${hd(0.5)} L${x2},${y2} L${hd(-0.5)}`} at={at + dur - 4} dur={8} color={color} width={width} />
		</g>
	);
};
