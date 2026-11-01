import React from 'react';
import {useCurrentFrame} from 'remotion';
import {BLUE, FONT_DISPLAY, INK, INK_SOFT, prog} from '../kit';
import {AlignedAlgebra, MATH_ACCENT, SquareGraph} from './kit';

export const MATH_PILOT_FRAMES = 450;

export const MathsTangentPilot: React.FC = () => {
	const f = useCurrentFrame();
	const a = 1 + prog(f, 36, 70);
	const final = f >= 120;
	const steps = [
		{id: 'definition', left: "f′(x)", right: 'limₕ→₀ [(x + h)² − x²] / h', at: 166},
		{id: 'expand', left: '', right: 'limₕ→₀ (2xh + h²) / h', at: 228},
		{id: 'divide', left: '', right: 'limₕ→₀ (2x + h)', at: 290},
		{id: 'rule', left: '', right: '2x', at: 334},
		{id: 'answer', left: "f′(2)", right: '2 × 2 = 4', at: 372},
	];
	return <>
		<div style={{position: 'absolute', left: 94, top: 116, fontFamily: FONT_DISPLAY, color: INK}}>
			<div style={{fontSize: 64, fontWeight: 780, lineHeight: 1.08}}>How steep is the curve at x = 2?</div>
			<div style={{fontSize: 35, color: INK_SOFT, marginTop: 17}}>The tangent shows the slope at one point.</div>
		</div>
		<div style={{position: 'absolute', left: 94, top: 265, width: 810, height: 700, background: '#fffdf8', border: '2px solid #d8cdbb', borderRadius: 22, boxShadow: '0 9px 25px rgba(38,35,31,0.07)'}}>
			<div style={{marginLeft: 33, marginTop: 18, fontFamily: FONT_DISPLAY, color: BLUE, fontSize: 28, fontWeight: 760}}>GRAPH</div>
			<SquareGraph a={a} showRise={final} />
		</div>
		<div style={{position: 'absolute', left: 952, top: 265, width: 870, height: 700, background: '#fffdf8', border: '2px solid #d8cdbb', borderRadius: 22, boxShadow: '0 9px 25px rgba(38,35,31,0.07)', boxSizing: 'border-box', padding: '25px 42px'}}>
			<div style={{fontFamily: FONT_DISPLAY, color: MATH_ACCENT, fontSize: 28, fontWeight: 760}}>WORKING</div>
			<div style={{fontFamily: FONT_DISPLAY, color: INK, fontSize: 43, marginTop: 22}}>f(x) = x²</div>
			<div style={{height: 3, background: '#e8dfd0', margin: '25px 0 24px'}} />
			{f < 166 ? <div style={{fontFamily: FONT_DISPLAY, color: INK_SOFT, fontSize: 34, opacity: prog(f, 35, 20)}}>Follow the point. The tangent turns as the slope changes.</div> : <AlignedAlgebra steps={steps} />}
			{f >= 372 && <div style={{position: 'absolute', bottom: 38, left: 42, right: 42, padding: '14px 22px', borderLeft: `7px solid ${MATH_ACCENT}`, background: '#fbf0d9', fontFamily: FONT_DISPLAY, fontSize: 34, color: INK, opacity: prog(f, 382, 14)}}>Graph check: slope = rise / run = 4 / 1 = 4</div>}
	</div>
	</>;
};
