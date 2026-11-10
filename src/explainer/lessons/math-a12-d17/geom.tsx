// Shared drawing helpers for math-a12-d17: frame-space curve paths, a clip to a plot box, the cubic's three
// marked points and the wrong curves, all on the kit's makePlot transform (the FunctionSimulator geometry).
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, prog} from '../../kit';
import {CARD, makePlot, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {CurveLabel, Diamond, GREY, RED, Ring, cub, ruler, wig} from './parts';

export type Win = {x: [number, number]; y: [number, number]};
export type Stage = {x: number; y: number; w: number; h: number};
export const W1: Win = {x: [-2.5, 2.5], y: [-6, 6]};
export const plot = (s: Stage, w: Win) => makePlot(s.x, s.y, s.w, s.h, w);

/** Frame-space path of y = fn(x) from a to b (lifting the pen off the window by more than one window height). */
export const pathOf = (M: PlotMap, fn: (x: number) => number, a: number, b: number, n = 260) => {
	let d = '', pen = false;
	const lo = M.win.y[0] - (M.win.y[1] - M.win.y[0]), hi = M.win.y[1] + (M.win.y[1] - M.win.y[0]);
	for (let i = 0; i <= n; i++) {
		const x = a + ((b - a) * i) / n, y = fn(x);
		if (!Number.isFinite(y) || y < lo || y > hi) {pen = false; continue;}
		const [px, py] = M.pf(x, y);
		d += `${pen ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;
		pen = true;
	}
	return d;
};
/** Clip children (frame-space SVG) to a plot's box. */
export const Clip: React.FC<{M: PlotMap; children: React.ReactNode; pad?: number}> = ({M, children, pad = 0}) => {
	const id = 'clp-' + useId().replace(/:/g, '');
	const b = M.box;
	return <><defs><clipPath id={id}><rect x={M.x + b.left - pad} y={M.y + b.top - pad} width={b.width + 2 * pad} height={b.height + 2 * pad} /></clipPath></defs><g clipPath={`url(#${id})`}>{children}</g></>;
};
/** A curve that writes on left to right between frames `at` and `at + dur`. */
export const DrawCurve: React.FC<{M: PlotMap; fn: (x: number) => number; a: number; b: number; at: number; dur?: number; color?: string; width?: number; opacity?: number; dash?: string}> = ({M, fn, a, b, at, dur = 30, color = INK, width = 6, opacity = 1, dash}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, dur));
	if (p <= 0.001 || opacity <= 0.001) return null;
	return <path d={pathOf(M, fn, a, a + (b - a) * p)} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} strokeDasharray={dash} />;
};

/** The cubic's three marked points: local max (−1, 2), local min (1, −2) and the inflection (0, 0). */
export const CubicPoints: React.FC<{M: PlotMap; at: [number, number, number]; labels?: boolean; labelSize?: number; o?: number}> = ({M, at, labels = true, labelSize = 40, o = 1}) => {
	const f = useCurrentFrame();
	const A = M.pf(-1, 2), B = M.pf(1, -2), O = M.pf(0, 0);
	return (
		<>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity: o}}>
				{[A, B].map((p, i) => {const po = prog(f, at[i], 12); return po > 0.001 ? <g key={i} opacity={po}><circle cx={p[0]} cy={p[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} /><Ring p={p} r={26} o={1} /></g> : null;})}
				<Diamond p={O} o={prog(f, at[2], 12)} r={16} />
			</svg>
			{labels ? <>
				<CurveLabel x={A[0] - 40} y={A[1] - 84} at={at[0]} size={labelSize} color={INK}>local max (−1, 2)</CurveLabel>
				<CurveLabel x={B[0] - 40} y={B[1] + 34} at={at[1]} size={labelSize} color={INK}>local min (1, −2)</CurveLabel>
				<CurveLabel x={O[0] + 30} y={O[1] - 16} at={at[2]} size={labelSize} color={INK}>inflection (0, 0)</CurveLabel>
			</> : null}
		</>
	);
};

/** The wiggly join and the ruler join, grey, each writing on at its cue; `hot` tints the wiggle's rising piece red. */
export const WrongCurves: React.FC<{M: PlotMap; wigAt: number; rulerAt: number; wigO?: number; rulerO?: number; hot?: number; rise?: number}> = ({M, wigAt, rulerAt, wigO = 1, rulerO = 1, hot = 0, rise = 0.151}) => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
		<Clip M={M}>
			<DrawCurve M={M} fn={wig} a={-2.5} b={2.5} at={wigAt} dur={40} color={GREY} width={5} opacity={wigO} />
			{hot > 0.001 && wigO > 0.001 ? <path d={pathOf(M, wig, -rise, rise, 40)} stroke={RED} strokeWidth={10} fill="none" strokeLinecap="round" opacity={hot * wigO} /> : null}
			<DrawCurve M={M} fn={ruler} a={-2.2} b={2.2} at={rulerAt} dur={36} color={GREY} width={5} opacity={rulerO} dash="2 0" />
		</Clip>
	</svg>
);
export {cub};
