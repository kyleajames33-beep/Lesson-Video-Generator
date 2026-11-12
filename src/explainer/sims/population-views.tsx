// Drawing parts for the population engine (population.ts). Each is a SeriesGraph (see
// series-views.tsx) set up for one model, so the lesson supplies only labels, colours and
// the time reached. Pair with useSeriesTime() for the clock and seriesReadout() or
// SimReadout for the numbers, so the graph and the readout always agree.
import React from 'react';
import {Tone, ToneName} from '../shared/tokens';
import {AlleleRun, LogisticRun, PredatorPreyRun, generationAxis} from './population';
import {SeriesGraph, SeriesLine, SeriesMark} from './series-views';

type Box = {x: number; y: number; w: number; h: number; opacity?: number};

/** The lines of an allele run as SeriesLines: one per population, thin when there are many. */
export const alleleLines = (run: AlleleRun, look: {tones?: readonly (ToneName | Tone)[]; labels?: readonly string[]; width?: number} = {}): SeriesLine[] => {
	const t = generationAxis(run), many = run.p.length > 3;
	const tones = look.tones ?? ['blue', 'teal', 'violet', 'amber', 'green', 'red', 'olive', 'warm', 'cool'];
	return run.p.map((v, i) => ({t, v, tone: tones[i % tones.length], label: look.labels?.[i], width: look.width ?? (many ? 3.5 : 6), opacity: many ? 0.85 : 1}));
};

/**
 * Allele frequency against generations: every population in the run, drawn up to
 * generation `now`. `expected` adds the no-drift curve as a dashed line (with selection it
 * shows where the populations "should" go); `start` marks the starting frequency.
 */
export const AlleleGraph: React.FC<Box & {
	run: AlleleRun; now?: number;
	tones?: readonly (ToneName | Tone)[]; labels?: readonly string[];
	expected?: {label?: string; tone?: ToneName | Tone};
	start?: {label?: string; at?: number};
	xLabel?: string; yLabel?: string;
}> = ({run, now, tones, labels, expected, start, xLabel = 'generation', yLabel = 'frequency of A', ...box}) => {
	const lines = alleleLines(run, {tones, labels});
	if (expected) lines.push({t: generationAxis(run), v: run.expected, tone: expected.tone ?? 'ink', label: expected.label, width: 5, dashed: true});
	const marks: SeriesMark[] = start ? [{axis: 'y', value: run.config.p0, label: start.label, at: start.at, tone: 'grey'}] : [];
	return <SeriesGraph {...box} lines={lines} xRange={[0, run.generations]} yRange={[0, 1]} yTicks={[0, 0.25, 0.5, 0.75, 1]} now={now} marks={marks} xLabel={xLabel} yLabel={yLabel} labelRoom={labels || expected?.label ? 220 : 40} />;
};

/**
 * Logistic growth: population against time with the carrying capacity marked. `half`
 * marks K / 2, where the population grows fastest. `rate` draws the growth rate instead
 * of the size.
 */
export const GrowthGraph: React.FC<Box & {
	run: LogisticRun; now?: number; tone?: ToneName | Tone; label?: string;
	capacity?: {label?: string; at?: number};
	half?: {label?: string; at?: number};
	rate?: boolean; yMax?: number;
	xLabel?: string; yLabel?: string; format?: (v: number) => string;
}> = ({run, now, tone = 'green', label, capacity, half, rate = false, yMax, xLabel = 'time', yLabel, format, ...box}) => {
	const k = run.config.k, discrete = run.config.form === 'discrete';
	const v = rate ? run.rate : run.v;
	const top = yMax ?? (rate ? Math.max(...v) * 1.2 : Math.max(k, ...v) * 1.12);
	const marks: SeriesMark[] = [];
	if (capacity && !rate) marks.push({axis: 'y', value: k, label: capacity.label ?? 'K', at: capacity.at});
	if (half) marks.push(rate ? {axis: 'y', value: Math.max(...v), label: half.label, at: half.at, tone: 'grey'} : {axis: 'y', value: k / 2, label: half.label ?? 'K / 2', at: half.at, tone: 'grey'});
	return <SeriesGraph {...box} lines={[{t: run.t, v, tone, label, dots: discrete && run.t.length <= 40}]} xRange={[0, run.t[run.t.length - 1]]} yRange={[0, top]} now={now} marks={marks} xLabel={xLabel} yLabel={yLabel ?? (rate ? 'growth rate' : 'population')} format={format} />;
};

/** Predator and prey against time: two lines, labelled by the lesson. */
export const PredatorPreyGraph: React.FC<Box & {
	run: PredatorPreyRun; now?: number;
	prey?: {label?: string; tone?: ToneName | Tone};
	predators?: {label?: string; tone?: ToneName | Tone};
	yMax?: number; xLabel?: string; yLabel?: string; format?: (v: number) => string;
}> = ({run, now, prey = {}, predators = {}, yMax, xLabel = 'time', yLabel = 'population', format, ...box}) => {
	const top = yMax ?? Math.max(...run.prey, ...run.predators) * 1.12;
	return <SeriesGraph {...box} xRange={[0, run.config.to]} yRange={[0, top]} now={now} xLabel={xLabel} yLabel={yLabel} format={format} lines={[
		{t: run.t, v: run.prey, tone: prey.tone ?? 'green', label: prey.label ?? 'prey'},
		{t: run.t, v: run.predators, tone: predators.tone ?? 'red', label: predators.label ?? 'predators'},
	]} />;
};
