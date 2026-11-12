// Drawing parts for the heating-curve engine (heating.ts): the temperature-time graph with
// its flat plateaus, and a readout of how much of the substance is in each phase. Both read
// the same run and the same time, so the plateau on the graph and the melting bar agree.
// Labels come from the lesson. Sizes and colours come from src/explainer/shared/tokens.ts.
import React from 'react';
import {FONT_DISPLAY} from '../kit';
import {CARD, CARD_BORDER, CARD_SHADOW, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {HeatingRun, HeatingState, Phase, Stage, heatingCurve} from './heating';
import {SeriesGraph, SeriesMark, SeriesNote, SeriesSpan} from './series-views';

/**
 * Temperature against time, drawing itself up to time `now` (s). `labels` names any of the
 * five stretches: a melting or boiling label sits in a shaded band over the plateau, a
 * warming label sits beside its sloping line. `temperatures` marks the melting and
 * boiling points on the temperature axis.
 */
export const HeatingGraph: React.FC<{
	run: HeatingRun; now?: number; x: number; y: number; w: number; h: number;
	tone?: ToneName | Tone;
	labels?: Partial<Record<Stage, string>>;
	temperatures?: {melting?: string; boiling?: string; at?: number};
	/** Scene frame at which the stretch labels fade in (default: as the line reaches them). */
	labelsAt?: number;
	whole?: boolean;
	xLabel?: string; yLabel?: string;
	yRange?: readonly [number, number];
	format?: (v: number) => string;
	opacity?: number;
}> = ({run, now, x, y, w, h, tone: toneName = 'warm', labels = {}, temperatures, labelsAt, whole, xLabel = 'time (s)', yLabel = 'temperature (°C)', yRange, format, opacity}) => {
	const curve = heatingCurve(run);
	const lo = Math.min(...curve.v), hi = Math.max(...curve.v), pad = (hi - lo) * 0.1 || 10;
	const range = yRange ?? ([Math.floor((lo - pad) / 10) * 10, Math.ceil((hi + pad) / 10) * 10] as const);
	const spans: SeriesSpan[] = [], notes: SeriesNote[] = [], marks: SeriesMark[] = [];
	for (const s of run.stretches) {
		const label = labels[s.stage];
		if (!label) continue;
		if (s.stage === 'melting' || s.stage === 'boiling') spans.push({from: s.t0, to: s.t1, label, tone: s.stage === 'melting' ? 'blue' : 'warm', at: labelsAt});
		else notes.push({t: (s.t0 + s.t1) / 2, v: (s.T0 + s.T1) / 2, label, dx: -36, dy: 48, anchor: 'end', tone: toneName, at: labelsAt, leader: true});
	}
	if (temperatures?.melting) marks.push({axis: 'y', value: run.config.melt.at, label: temperatures.melting, at: temperatures.at, tone: 'grey'});
	if (temperatures?.boiling) marks.push({axis: 'y', value: run.config.boil.at, label: temperatures.boiling, at: temperatures.at, tone: 'grey'});
	return <SeriesGraph lines={[{t: curve.t, v: curve.v, tone: toneName}]} x={x} y={y} w={w} h={h} xRange={[0, run.duration]} yRange={range} now={now} whole={whole} spans={spans} notes={notes} marks={marks} xLabel={xLabel} yLabel={yLabel} format={format} opacity={opacity} />;
};

/**
 * How much of the substance is solid, liquid and gas at this moment, as three bars on a
 * card. During a plateau one bar drains as the next fills, at a steady rate.
 */
export const PhaseReadout: React.FC<{
	state: HeatingState; x: number; y: number; w?: number;
	title?: string;
	labels?: Partial<Record<Phase, string>>;
	tones?: Partial<Record<Phase, ToneName | Tone>>;
	/** Leave out phases the lesson does not reach. */
	phases?: readonly Phase[];
	opacity?: number;
}> = ({state, x, y, w = 520, title, labels = {}, tones = {}, phases = ['solid', 'liquid', 'gas'], opacity = 1}) => {
	const look: Record<Phase, Tone> = {solid: tone(tones.solid ?? 'blue'), liquid: tone(tones.liquid ?? 'teal'), gas: tone(tones.gas ?? 'warm')};
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, boxSizing: 'border-box', opacity, background: CARD, borderRadius: 20, padding: '14px 26px 16px', boxShadow: CARD_SHADOW, border: `2.5px solid ${CARD_BORDER}`}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontSize: TYPE.label, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, marginBottom: 6}}>{title}</div> : null}
			{phases.map((ph, i) => {
				const share = state[ph], c = look[ph];
				return (
					<div key={ph} style={{display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0', borderTop: i ? `2px solid ${TRACK}` : undefined}}>
						<span style={{width: 130, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support, color: c.ink}}>{labels[ph] ?? ph}</span>
						<span style={{flex: 1, height: 30, borderRadius: 10, background: TRACK, overflow: 'hidden'}}><span style={{display: 'block', width: `${share * 100}%`, height: '100%', background: c.stroke}} /></span>
						<span style={{width: 96, textAlign: 'right', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support, color: INK, fontVariantNumeric: 'tabular-nums'}}>{Math.round(share * 100)}%</span>
					</div>
				);
			})}
		</div>
	);
};
