// Lesson parts for phys-y12-m5-v10: the crane stage (last time's geometry, then a smaller crane so the working
// fits), the seesaw stage (two-layer plates; the plank tilts about the hinge), weight arrows from seat points,
// brackets from the pivot, the cards. Plates at uniform scale only.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {SeesawSvg, seesawGeom} from '../../physics/projectile/balance';
import {RightMark, TURN} from '../../physics/projectile/turning';
import {Lbl} from '../phys-y12-m5-v02/parts';
import {CRANE_STAGE} from '../phys-y12-m5-v09/s3';

export {Lbl, CRANE_STAGE, TURN};
export const AMBER = ROLE.w;
export const NAVY = ROLE.given;
export const SUPPORT = ROLE.x;

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Card: React.FC<{x: number; y: number; w: number; at?: number; out?: number; border?: string; children: React.ReactNode; pad?: string}> = ({x, y, w, at = -30, out, border = INK, children, pad}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{...card, border: `3px solid ${border}`, padding: pad ?? card.padding}}>{children}</div>
	</Enter>
);
export const Line: React.FC<{children: React.ReactNode; size?: number; color?: string; at?: number; weight?: number; mt?: number; out?: number}> = ({children, size = 34, color = INK, at, weight = 800, mt = 4, out}) => {
	const f = useCurrentFrame();
	const o = (at === undefined ? 1 : prog(f, at, 12)) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (out !== undefined && f >= out + 10) return null;
	return <div style={{...DISPLAY(size, color, weight), whiteSpace: 'normal', marginTop: mt, opacity: o}}>{children}</div>;
};
export const Boxed: React.FC<{color?: string; size?: number; at?: number; children: React.ReactNode}> = ({color = INK, size = TYPE.working, at = -30, children}) => {
	const b = prog(useCurrentFrame(), at, 12);
	return <div style={{display: 'inline-block', background: CARD, border: `5px solid ${b > 0 ? color : 'transparent'}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, INK)}}>{children}</div>;
};

/** A weight arrow hanging from the seesaw's plank at x metres from the pivot (follows the tilt). */
export const SeatWeight: React.FC<{g: ReturnType<typeof seesawGeom>; x: number; L?: number; at?: number; out?: number; mark?: number; tilt?: number; dash?: string}> = ({g, x, L = 150, at = -30, out, mark, tilt = 0, dash}) => {
	const [px, py] = g.at(x);
	return (
		<g>
			<VecArrow x={px} y={py} dx={0} dy={L} color={AMBER.stroke} width={8} at={at} out={out} head={24} dash={dash} />
			{mark !== undefined ? <RightMark x={px} y={py + 18} a={-tilt} size={18} at={mark} turn={-1} color={INK} /> : null}
		</g>
	);
};
/** The seesaw stage: plates and (optionally) children. */
export const Seesaw: React.FC<{hx: number; hy: number; w: number; tilt?: number; children?: React.ReactNode}> = ({hx, hy, w, tilt = 0, children}) => (
	<g><SeesawSvg hx={hx} hy={hy} w={w} tilt={tilt} />{children}</g>
);
export {seesawGeom};
