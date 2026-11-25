// Lesson parts for phys-y12-m8-v15: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// counter tray and counters, the digital timer, half-life graph geometry, formula text with sub- and superscripts and
// v14's parts re-exported.
// Colour key: undecayed nuclei red-grey discs; decayed grey rings; counters painted red and yellow; the N against t
// curve navy with teal halving guides; activity amber; background a grey band; λ and its readouts teal; time and t½ ink;
// the count rate and the counter display slate; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {staticFile} from 'remotion';
import {TIMER} from '../../physics/light/photo';
import {COUNTER_RED, COUNTER_YELLOW, TRAY} from '../../physics/atom/decay';
import {AMBER, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, V14_PLATES, fx, placeAt, sci} from '../phys-y12-m8-v14/parts';

export {AMBER, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, TIMER, TRAY, fx, placeAt, sci};
export const V15_PLATES = [...new Set([...V14_PLATES, TIMER.src])];
/** A counter disc plate (red or yellow face up) drawn by centre and visible diameter. */
export const COUNTER_BOX = [242, 273, 997, 1012] as const;
export const CounterImg: React.FC<{x: number; y: number; d: number; red: boolean; opacity?: number}> = ({x, y, d, red, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const s = d / (COUNTER_BOX[2] - COUNTER_BOX[0]);
	return <image href={staticFile(red ? COUNTER_RED : COUNTER_YELLOW)} x={x - 620 * s} y={y - 642 * s} width={1254 * s} height={1254 * s} opacity={opacity} preserveAspectRatio="none" />;
};
/** Formula pieces with real sub- and superscripts (HTML). */
export const Nt: React.FC = () => <>N<sub>t</sub></>;
export const N0: React.FC = () => <>N<sub>0</sub></>;
export const Th: React.FC = () => <>t<sub>½</sub></>;
export const ExpLaw: React.FC = () => <><Nt /> = <N0 />e<sup>−λt</sup></>;
export const LamLaw: React.FC = () => <>λ = ln2 / <Th /></>;
/** An N/N₀ against time graph box: x in half-lives from 0 to tMax, y from 0 to 1. */
export type GBox = {x: number; y: number; w: number; h: number; tMax: number};
export const gx = (b: GBox, t: number) => b.x + (t / b.tMax) * b.w;
export const gy = (b: GBox, v: number) => b.y + b.h - v * b.h;
export const curveD = (b: GBox, fn: (t: number) => number, t0 = 0, t1 = b.tMax, n = 120) => Array.from({length: n + 1}, (_, i) => { const t = t0 + ((t1 - t0) * i) / n; return `${i ? 'L' : 'M'}${gx(b, t).toFixed(1)},${gy(b, fn(t)).toFixed(1)}`; }).join(' ');
export const Axes: React.FC<{b: GBox; xLabel: string; yLabel: string; ticks?: readonly number[]; size?: number; opacity?: number; tickLabel?: (t: number) => string}> = ({b, xLabel, yLabel, ticks = [], size = 28, opacity = 1, tickLabel = t => String(t)}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<line x1={b.x} y1={b.y + b.h} x2={b.x + b.w + 10} y2={b.y + b.h} stroke={INK} strokeWidth={4} />
		<line x1={b.x} y1={b.y + b.h} x2={b.x} y2={b.y - 10} stroke={INK} strokeWidth={4} />
		{ticks.map(t => <g key={t}><line x1={gx(b, t)} y1={b.y + b.h} x2={gx(b, t)} y2={b.y + b.h + 12} stroke={INK} strokeWidth={3} /><text x={gx(b, t)} y={b.y + b.h + 42} textAnchor="middle" style={T(size, INK)}>{tickLabel(t)}</text></g>)}
		<text x={b.x + b.w + 10} y={b.y + b.h + 80} textAnchor="end" style={T(size, INK)}>{xLabel}</text>
		<text x={b.x - 10} y={b.y - 24} textAnchor="start" style={T(size, INK)}>{yLabel}</text>
	</g>
));
