// Lesson parts for phys-y12-m5-v09: the spanner stage (top view, painted spanner and nut plates at one scale,
// from the kit's turning.tsx), pushes at the handle end at any angle, the cards. Last time's stage geometry is
// kept for the opening: nut centre (520, 600), handle end 400 px to the right (1,600 px per metre).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {TURN, rad, vec} from '../../physics/projectile/turning';
import {Lbl} from '../phys-y12-m5-v02/parts';

export {Lbl};
export const NUT0: [number, number] = [520, 600];
export const ARM0 = 400;
export const PUSH0 = 210;
export const AMBER = ROLE.w;

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
/** A card in the right column (absolute), entering at `at`. */
export const Card: React.FC<{x: number; y: number; w: number; at?: number; out?: number; border?: string; children: React.ReactNode; pad?: string}> = ({x, y, w, at = -30, out, border = INK, children, pad}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{...card, border: `3px solid ${border}`, padding: pad ?? card.padding}}>{children}</div>
	</Enter>
);
export const Line: React.FC<{children: React.ReactNode; size?: number; color?: string; at?: number; weight?: number; mt?: number}> = ({children, size = 34, color = INK, at, weight = 800, mt = 4}) => {
	const f = useCurrentFrame();
	return <div style={{...DISPLAY(size, color, weight), whiteSpace: 'normal', marginTop: mt, opacity: at === undefined ? 1 : prog(f, at, 12)}}>{children}</div>;
};
/** Framed text block (dark-ink frame, R1) for a boxed formula. */
export const Boxed: React.FC<{color?: string; size?: number; at?: number; children: React.ReactNode}> = ({color = INK, size = TYPE.working, at = -30, children}) => {
	const b = prog(useCurrentFrame(), at, 12);
	return <div style={{display: 'inline-block', background: CARD, border: `5px solid ${b > 0 ? color : 'transparent'}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, INK)}}>{children}</div>;
};
/** A letter badge (A, B, C) for naming the pushes. */
export const Badge: React.FC<{x: number; y: number; letter: string; at?: number; color?: string}> = ({x, y, letter, at = -30, color = AMBER.ink}) => {
	const o = prog(useCurrentFrame(), at, 10);
	if (o <= 0.001) return null;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={24} fill={CARD} stroke={color} strokeWidth={3.5} />
			<text x={x} y={y + 11} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}} fill={color}>{letter}</text>
		</g>
	);
};
/**
 * A push (amber force arrow) at the handle end (or any point), at `deg` to the handle direction (+x), length L.
 * `lit` (0..1) thickens it and draws an amber halo behind it.
 */
export const Push: React.FC<{x: number; y: number; deg: number; L?: number; at?: number; out?: number; lit?: number; width?: number; color?: string; dash?: string}> = ({x, y, deg, L = PUSH0, at = -30, out, lit = 0, width = 8, color = AMBER.stroke, dash}) => {
	const [dx, dy] = vec(L, deg);
	return (
		<g>
			{lit > 0.01 ? <line x1={x} y1={y} x2={x + dx * 0.92} y2={y + dy * 0.92} stroke={AMBER.soft} strokeWidth={26 * lit} strokeLinecap="round" opacity={lit} /> : null}
			<VecArrow x={x} y={y} dx={dx} dy={dy} color={color} width={width + 3 * lit} at={at} out={out} head={26} dash={dash} />
		</g>
	);
};
/** The tip of a push of length L at deg from (x, y). */
export const tipOf = (x: number, y: number, deg: number, L = PUSH0): [number, number] => [x + L * Math.cos(rad(deg)), y - L * Math.sin(rad(deg))];
export {TURN};
