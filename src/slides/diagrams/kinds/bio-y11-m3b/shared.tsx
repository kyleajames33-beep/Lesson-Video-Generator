// Shared pieces for the bio-y11-m3b (Evolution and ecosystems, L13–L25)
// diorama kinds.
//
// Timing and drawing helpers are reused read-only from merged lanes
// (fadeAt, popAt, Arrow, GlossDefs, Ball from chem-y11-m1; textWidth from
// chem-y12-m6; Title, Lines, wrap, Mark from bio-y12-m7). Lane-local: `ECO`
// (this lane's colours of meaning), `Pill`, `Footer` and `easeT`.

import {Easing, interpolate} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {clamp, textWidth} from '../bio-y12-m7/shared';

export {clamp, fadeAt, popAt, shade, Arrow, GlossDefs, Ball, textWidth, Title, Lines, wrap, Mark, W, H} from '../bio-y12-m7/shared';

/** Lane palette. Glossy fills are built from these by `GlossDefs`. */
export const ECO = {
	fish: '#5b8fb9',
	moth: '#8a7358',
	eel: '#5a6b4a',
	leaf: '#5f9e3a',
	leafDark: '#3f7a2a',
	grass: '#8dbb45',
	fern: '#4f8f45',
	moss: '#6b8f3a',
	flower: '#e38fb0',
	seed: '#c98a3a',
	wood: '#8a6240',
	shell: '#d9b48a',
	bone: '#e8dcc0',
	fossil: '#b8a488',
	rock: '#b3a68f',
	bird: '#6f93b8',
	beetle: '#3f5f3a',
	bean: '#a8432f',
	snail: '#b98a5a',
	barnacle: '#d8d2c2',
	limpet: '#c4a27a',
	mussel: '#3b3f5c',
	algae: '#6e9a4a',
	anemone: '#d9644a',
	protist: '#8fbfd8',
	bacterium: '#5fa34a',
	mosquito: '#4a4a52',
	water: '#4aa3d8',
	sea: '#3f86b8',
	sand: '#e3c98f',
	soil: '#8a6a4a',
	metal: '#a9b4bf',
	red: '#d9443a',
	dna1: '#3f6fd8',
	dna2: '#e07a2a',
	sun: '#f0c03a',
	grey: '#a4a4a4',
	marked: '#f0a830',
	ok: '#2e8b57',
	stop: '#b3261e',
} as const;

export type EcoKey = keyof typeof ECO;

/** Names every kind asks GlossDefs for (so icons can use any of them). */
export const ECO_GLOSS: Record<string, string> = {...ECO};

export const ease = Easing.inOut(Easing.cubic);

/** 0→1 eased between two frames. */
export const easeT = (frame: number, a: number, b: number) => interpolate(frame, [a, b], [0, 1], {...clamp, easing: ease});

/** Rounded label pill centred on (x, y), sized from its text. */
export const Pill = ({x, y, text, color = TOK.inkDim, fill = '#ffffff', size = 16, opacity = 1, textColor, padX = 12}: {
	x: number; y: number; text: string; color?: string; fill?: string; size?: number; opacity?: number; textColor?: string; padX?: number;
}) => {
	const w = textWidth(text, size) + padX * 2;
	const h = size + 12;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={2} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={textColor ?? color} fontSize={size} fontWeight={800}>{text}</text>
		</g>
	);
};

export type FooterLine = {text: string; at: number; amber?: boolean};

/** Footer lines stacked up from the bottom edge, each fading in on its beat. */
export const Footer = ({lines, frame, fade, height}: {lines: FooterLine[]; frame: number; fade: (f: number, at: number) => number; height: number}) => (
	<g>
		{lines.map((f, i) => (
			<text key={i} x={380} y={height - 10 - (lines.length - 1 - i) * 24} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} opacity={fade(frame, f.at)}>
				{f.text}
			</text>
		))}
	</g>
);
