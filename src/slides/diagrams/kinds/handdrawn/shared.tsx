// Shared pieces for the hand-drawn diorama kinds (lane: handdrawn).
// Candidate for promotion to src/animations/ if other lanes want them.
//
// Every kind renders an 760×530 viewBox (the concept card) inside its own
// <HandDrawnStage>, so it always boils and animates on threes, whether or not
// the lesson has the hand-drawn toggle on (stages don't nest).

import type {ReactNode} from 'react';
import {interpolate} from 'remotion';
import {HandDrawnStage, HatchDefs, PENCIL} from '../../../../animations/HandDrawn';
import {FONT_HAND, TOK} from '../../../../styles/tokens';

export const VB_W = 760;
export const VB_H = 530;
export const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

/** 0→1 between two frames, clamped. */
export const ramp = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], clamp);

/** Deterministic hash → [0,1). Same input, same output, every render. */
export const hash01 = (key: string) => {
	let h = 2166136261;
	for (let i = 0; i < key.length; i++) {
		h ^= key.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return ((h >>> 0) % 100000) / 100000;
};

/** The standard frame for a hand-drawn kind: stage + svg + hatch defs + blur. */
export const HandSvg = ({id, children, defs}: {id: string; children: ReactNode; defs?: ReactNode}) => (
	<HandDrawnStage id={id}>
		<svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{width: '100%', height: 'auto', overflow: 'visible'}}>
			<defs>
				<HatchDefs id={id} />
				<filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
					<feGaussianBlur stdDeviation="9" />
				</filter>
				{defs}
			</defs>
			{children}
		</svg>
	</HandDrawnStage>
);

/** Handwritten label (Caveat). Min size 22 keeps it ≥ ~24 px on the card. */
export const Hand = ({
	x,
	y,
	children,
	size = 26,
	o = 1,
	anchor = 'middle',
	color = PENCIL.ink,
	weight = 600,
}: {
	x: number;
	y: number;
	children: ReactNode;
	size?: number;
	o?: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	weight?: number;
}) => (
	<text x={x} y={y} fontFamily={FONT_HAND} fontWeight={weight} fontSize={size} fill={color} textAnchor={anchor} opacity={o}>
		{children}
	</text>
);

/** A soft amber glow: the "this is the thing" highlight. */
export const Glow = ({id, x, y, r, o = 1}: {id: string; x: number; y: number; r: number; o?: number}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={TOK.amber} opacity={0.55} filter={`url(#${id}-glow)`} />
		<circle cx={x} cy={y} r={r * 0.26} fill="#fff4d6" stroke={TOK.amber} strokeWidth={2} />
	</g>
);

/** Hand-drawn arrow from (x1,y1) to (x2,y2) with a slight bow. */
export const HandArrow = ({x1, y1, x2, y2, o = 1, color = PENCIL.ink, bow = 0.12}: {x1: number; y1: number; x2: number; y2: number; o?: number; color?: string; bow?: number}) => {
	const mx = (x1 + x2) / 2 - (y2 - y1) * bow;
	const my = (y1 + y2) / 2 + (x2 - x1) * bow;
	const ang = Math.atan2(y2 - my, x2 - mx);
	const h = 11;
	return (
		<g opacity={o} stroke={color} strokeWidth={2.4} fill="none" strokeLinecap="round" strokeLinejoin="round">
			<path d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} />
			<path d={`M${x2 - h * Math.cos(ang - 0.45)},${y2 - h * Math.sin(ang - 0.45)} L${x2},${y2} L${x2 - h * Math.cos(ang + 0.45)},${y2 - h * Math.sin(ang + 0.45)}`} />
		</g>
	);
};

export {PENCIL};
