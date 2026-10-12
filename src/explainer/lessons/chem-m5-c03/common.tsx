import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/c3/measured/lesson.json';
import {HandText, INK, prog, FONT_DISPLAY, FONT_HAND} from '../../kit';
import type {CueScene} from '../../cues';
import {useCurrentFrame} from 'remotion';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

// Colour key (one visual system, as C2): forward blue, reverse amber, equal teal.
export const FE = '#e3bf45', FE_INK = '#8a6a0c';
export const SCN = '#9097a0', SCN_INK = '#5b626b';
export const RED = '#c42b36', RED_INK = '#a31f2a';
export const PINK = '#e58ab0', PINK_INK = '#b04d79';
export const COBLUE = '#2f5fc4', COBLUE_INK = '#23479a';
export const CLC = '#6cb58a', CLC_INK = '#3f7d5a';
export const NO2C = '#9a5a24', NO2_INK = '#7a4416';
export const N2O4C = '#ece6d6', N2O4_INK = '#5b5448';
export const HEAT = '#c4582f';
export const ICE = '#5aa3d0';
export const SILVER = '#f4f4f1';
export const IRON_TINT_PALE = '#fbeee6', IRON_TINT_DEEP = '#e7a597';

export const hexMix = (a: string, b: string, t: number) => {
	const p = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
	const x = p(a), y = p(b), u = Math.max(0, Math.min(1, t));
	return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * u).toString(16).padStart(2, '0')).join('');
};

export const Heading: React.FC<{text: string; at?: number; size?: number; color?: string; out?: number}> = ({text, at = 4, size = 70, color = INK, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	return <div style={{position: 'absolute', left: 96, top: 92, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};

/** Piecewise value over local frames. smooth = eased between keys, otherwise linear. */
export const kf = (f: number, pts: [number, number][], smooth = true): number => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) {
			const u = (f - a) / Math.max(1, b - a);
			const s = smooth ? u * u * (3 - 2 * u) : u;
			return va + (vb - va) * s;
		}
	}
	return pts[pts.length - 1][1];
};

/** Chemistry markup: _2 subscript digits, ^3+ superscript charges. */
export const CHEM_SPLIT = /(_\d+|\^\d*[+-])/;
export const ChemSvg: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'; at?: number; hand?: boolean; weight?: number; opacity?: number}> = ({x, y, text, size = 44, color = INK, anchor = 'start', at = 0, hand = false, weight = 700, opacity = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * opacity;
	if (o <= 0.001) return null;
	let shift = 0;
	return (
		<text x={x} y={y} textAnchor={anchor} fill={color} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size}}>
			{text.split(CHEM_SPLIT).filter(Boolean).map((p, i) => {
				const want = p.startsWith('_') ? size * 0.2 : p.startsWith('^') ? -size * 0.4 : 0;
				const dy = want - shift;
				shift = want;
				const s = p.startsWith('_') ? p.slice(1) : p.startsWith('^') ? p.slice(1) : p;
				const small = p.startsWith('_') || p.startsWith('^');
				return <tspan key={i} dy={dy || undefined} style={small ? {fontSize: size * 0.64} : undefined}>{s}</tspan>;
			})}
		</text>
	);
};
export const ChemH: React.FC<{text: string; size?: number; color?: string; weight?: number; hand?: boolean}> = ({text, size = 44, color = INK, weight = 700, hand = false}) => (
	<span style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'pre'}}>
		{text.split(CHEM_SPLIT).filter(Boolean).map((p, i) => p.startsWith('_') ? <sub key={i} style={{fontSize: size * 0.64, lineHeight: 0}}>{p.slice(1)}</sub> : p.startsWith('^') ? <sup key={i} style={{fontSize: size * 0.64, lineHeight: 0}}>{p.slice(1)}</sup> : <span key={i}>{p}</span>)}
	</span>
);
