import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b2a/measured/lesson.json';
import {AMBER, BLUE, DrawPath, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, Art, artH, BLUE, Body, Card, Chip, CORAL, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Tag, Underline, W, H,
} from '../bio-m5-b01/shared';
export type {ArtDef} from '../bio-m5-b01/shared';
import type {ArtDef} from '../bio-m5-b01/shared';

/** Scene data (captions, hold frames) from the measured recording. */
export const S = (id: string): CueScene => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// Alpha bounding boxes measured with PIL (alpha > 20). Canvas is 1856x1344 unless stated.
export const ART: Record<string, ArtDef> = {
	coral: {src: A.CORAL, nat: [1856, 1344], box: [195, 315, 1471, 854]},
	cloud: {src: A.CORAL_CLOUD, nat: [1856, 1344], box: [195, 315, 1471, 854]},
	salmon: {src: A.SALMON, nat: [1856, 1344], box: [182, 319, 1493, 751]},
	seal: {src: A.SEAL, nat: [1856, 1344], box: [239, 342, 1400, 684]},
	lizard: {src: A.LIZARD, nat: [1856, 1344], box: [223, 301, 1429, 748]},
	turtle: {src: A.TURTLE, nat: [1856, 1344], box: [227, 327, 1402, 699]},
	oyster: {src: A.OYSTER, nat: [1856, 1344], box: [283, 240, 1277, 891]},
	dugong: {src: A.DUGONG, nat: [1856, 1344], box: [230, 349, 1429, 698]},
	frog: {src: A.FROG, nat: [1856, 1344], box: [160, 184, 1536, 990]},
	hen: {src: A.HEN_CUT, nat: [1632, 1519], box: [196, 180, 1247, 1152]},
	henNest: {src: A.HEN_NEST, nat: [1856, 1344], box: [198, 192, 1430, 947]},
};

export const EGG = '#f08f86';
export const EGG_LINE = '#c4432f';
export const SPERM = '#3b6fa8';
export const WATER = '#d9e8f6';
export const WATER_LINE = '#7fb0d6';
export const COD = '#a3a26e';
export const SEAL_GREY = '#8d949b';
const HAND = "'Caveat', cursive";

export const EggDot: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 8, o = 1}) => (
	<circle cx={x} cy={y} r={r} fill={EGG} stroke={EGG_LINE} strokeWidth={Math.max(1.2, r * 0.2)} opacity={o} />
);

export const SpermDot: React.FC<{x: number; y: number; s?: number; rot?: number; o?: number; color?: string}> = ({x, y, s = 1, rot = 0, o = 1, color = SPERM}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<ellipse rx={7} ry={5} fill={color} />
		<path d="M-7,0 q-7,-6 -14,0 t-14,0 t-14,0" fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" />
	</g>
);

export const FishIcon: React.FC<{x: number; y: number; s?: number; color?: string; flip?: boolean; o?: number; ring?: string}> = ({x, y, s = 1, color = COD, flip = false, o = 1, ring}) => (
	<g transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`} opacity={o}>
		{ring ? <ellipse cx={8} cy={0} rx={66} ry={34} fill="none" stroke={ring} strokeWidth={5 / s} /> : null}
		<path d="M-40,0 C-20,-22 20,-22 38,-4 L58,-22 L58,22 L38,4 C20,22 -20,22 -40,0Z" fill={color} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-26} cy={-4} r={3.4} fill={INK} />
		<path d="M-4,-14 q6,14 0,28" fill="none" stroke={INK} strokeWidth={2} opacity={0.45} />
	</g>
);

export const Droplet: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M0,-34 C14,-12 24,0 24,14 A24,24 0 1 1 -24,14 C-24,0 -14,-12 0,-34Z" fill="#9cc9ec" stroke={BLUE} strokeWidth={3.5} strokeLinejoin="round" />
		<path d="M-10,12 q2,10 10,12" fill="none" stroke="#fff" strokeWidth={3.5} strokeLinecap="round" opacity={0.8} />
	</g>
);

export const Moon: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M12,-32 A32,32 0 1 0 12,32 A25,25 0 1 1 12,-32Z" fill={AMBER} stroke="#8a5a0c" strokeWidth={3} strokeLinejoin="round" />
	</g>
);

export const CalendarIcon: React.FC<{x: number; y: number; s?: number; o?: number; mark?: boolean}> = ({x, y, s = 1, o = 1, mark = true}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<rect x={-40} y={-36} width={80} height={72} rx={9} fill="#fffdf8" stroke={INK} strokeWidth={3.5} />
		<rect x={-40} y={-36} width={80} height={18} rx={9} fill={BLUE} stroke={INK} strokeWidth={3.5} />
		{[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => <rect key={`${r}${c}`} x={-30 + c * 16} y={-12 + r * 11} width={9} height={7} rx={2} fill={mark && r === 1 && c === 2 ? AMBER : PAPER_DEEP} />))}
	</g>
);

export const Shield: React.FC<{x: number; y: number; s?: number; o?: number; color?: string}> = ({x, y, s = 1, o = 1, color = '#2f8a5b'}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M0,-34 L28,-24 L28,6 C28,22 12,32 0,38 C-12,32 -28,22 -28,6 L-28,-24Z" fill="#cfe8da" stroke={color} strokeWidth={4} strokeLinejoin="round" />
		<path d="M-10,2 L-2,12 L13,-10" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
	</g>
);

export const SharkIcon: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M-60,10 C-30,-14 20,-16 60,6 L84,-16 L78,12 L92,32 L56,22 C20,32 -30,30 -60,10Z" fill="#8a98a8" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<path d="M-8,-12 L8,-40 L22,-10Z" fill="#8a98a8" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-42} cy={6} r={3} fill={INK} />
	</g>
);

export const SealIcon: React.FC<{x: number; y: number; s?: number; o?: number; ring?: string}> = ({x, y, s = 1, o = 1, ring}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		{ring ? <ellipse cx={14} cy={0} rx={58} ry={52} fill="none" stroke={ring} strokeWidth={5 / s} /> : null}
		<path d="M-30,30 C-40,0 -36,-30 -20,-40 C-6,-48 8,-40 8,-26 C8,-16 0,-12 6,0 C20,10 50,12 62,30 L40,28 L56,42 L20,34 C0,44 -24,44 -30,30Z" fill={SEAL_GREY} stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
		<circle cx={-14} cy={-30} r={3.2} fill={INK} /><circle cx={-24} cy={-22} r={3} fill={INK} />
		<circle cx={-14} cy={10} r={3.4} fill="#5a6168" /><circle cx={6} cy={22} r={3.4} fill="#5a6168" /><circle cx={-22} cy={26} r={3.4} fill="#5a6168" />
	</g>
);

/** Plain animal silhouette used for parents. */
export const Parent: React.FC<{x: number; y: number; s?: number; color?: string; o?: number; flip?: boolean}> = ({x, y, s = 1, color = '#b9a98f', o = 1, flip}) => (
	<g transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`} opacity={o}>
		<ellipse cx={0} cy={4} rx={44} ry={26} fill={color} stroke={INK} strokeWidth={3} />
		<circle cx={-40} cy={-10} r={16} fill={color} stroke={INK} strokeWidth={3} />
		<circle cx={-46} cy={-13} r={2.6} fill={INK} />
		<path d="M-20,28 l-4,16 M20,28 l4,16" stroke={INK} strokeWidth={4} strokeLinecap="round" />
	</g>
);

/** Ring gauge for "how much of the population has come back". */
export const Dial: React.FC<{x: number; y: number; r?: number; p: number; color: string; label?: string; o?: number}> = ({x, y, r = 54, p, color, label, o = 1}) => {
	const c = 2 * Math.PI * r;
	return (
		<g transform={`translate(${x},${y})`} opacity={o}>
			<circle r={r + 14} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
			<circle r={r} fill="none" stroke={PAPER_DEEP} strokeWidth={14} />
			<circle r={r} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.max(0.02, p))} transform="rotate(-90)" />
			{label ? <text y={r + 58} textAnchor="middle" style={{fontFamily: HAND, fontWeight: 700, fontSize: 40}} fill={color}>{label}</text> : null}
		</g>
	);
};

/** Wobbly circle drawn on as a scribble. */
export const Scribble: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string; seed?: number; width?: number}> = ({cx, cy, rx, ry, at, color = AMBER, seed = 3, width = 6}) => {
	const pts: string[] = [];
	let s = seed * 9301 + 49297;
	const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
	for (let i = 0; i <= 78; i++) {
		const t = -Math.PI / 2 + (i / 60) * Math.PI * 2;
		const j = 1 + (r() - 0.5) * 0.07 + (i / 78) * 0.06;
		pts.push(`${i ? 'L' : 'M'}${(cx + rx * j * Math.cos(t)).toFixed(1)},${(cy + ry * j * Math.sin(t)).toFixed(1)}`);
	}
	return <DrawPath d={pts.join(' ')} at={at} dur={22} color={color} width={width} />;
};

/** Dotted trail (sperm path) that draws on along a path. */
export const Trail: React.FC<{d: string; at: number; dur?: number; color?: string; width?: number; arrow?: [number, number, number]}> = ({d, at, dur = 36, color = SPERM, width = 6, arrow}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<DrawPath d={d} at={at} dur={dur} color={color} width={width} dash="2 13" />
			{arrow ? <g opacity={prog(f, at + dur - 4, 8)} transform={`translate(${arrow[0]},${arrow[1]}) rotate(${arrow[2]})`}><path d="M-16,-12 L2,0 L-16,12" fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g> : null}
		</g>
	);
};

/** Small handwritten note pill. */
export const Note: React.FC<{children: React.ReactNode; color?: string; size?: number}> = ({children, color = AMBER, size = 40}) => (
	<div style={{display: 'inline-block', fontFamily: HAND, fontWeight: 700, fontSize: size, color: color === AMBER ? '#8a5a0c' : color, background: '#fffdf8', border: `3px solid ${color}`, borderRadius: 18, padding: '2px 22px 6px', whiteSpace: 'nowrap', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>{children}</div>
);

/** A stage group: applies one scale transform to a plate and its overlay together. */
export const Stage: React.FC<{scale?: number; ox?: number; oy?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({scale = 1, ox = 0, oy = 0, children, style}) => (
	<div style={{position: 'absolute', inset: 0, transformOrigin: `${ox}px ${oy}px`, transform: `scale(${scale})`, ...style}}>{children}</div>
);

export const IS = INK_SOFT;
