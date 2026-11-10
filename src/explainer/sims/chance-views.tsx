// Drawing parts for the chance engine (chance.ts): the thing being rolled, the growing
// tally and the running share. Each reads the stored run and the number of trials shown,
// so the dice, the bars and the numbers always agree. Sizes and colours come from
// src/explainer/shared/tokens.ts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TONES, TRACK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {ChanceRun, TrialPace, partsOf, trialsShown} from './chance';

/** Number of trials shown at the current scene frame. Use one pace for every part in the scene. */
export const useTrials = (run: ChanceRun, pace: TrialPace) => trialsShown(run, useCurrentFrame(), pace);

const PIPS: Record<number, readonly (readonly [number, number])[]> = {
	1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]],
	5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]],
};

/**
 * What the latest trial showed: dice faces with their total, coins as lettered discs, or
 * the drawn label. `x`, `y` place its top-left corner. Shows nothing before the first trial.
 */
export const TrialView: React.FC<{
	run: ChanceRun; shown: number; x: number; y: number;
	/** Size of one die or coin in px (it shrinks to keep the row inside `maxW`). */
	size?: number; maxW?: number;
	tone?: ToneName | Tone;
	/** Letters for a success and a failure when the experiment is coins (default H and T). */
	faces?: readonly [string, string];
	/** Show "= total" after dice, or "= number of successes" after coins (default true). */
	total?: boolean;
}> = ({run, shown, x, y, size = 120, maxW = 760, tone: toneName = 'blue', faces = ['H', 'T'], total = true}) => {
	if (shown < 1) return null;
	const e = run.config.experiment, parts = partsOf(run, shown), t = tone(toneName);
	const value = run.labels[run.outcome[Math.min(run.trials, Math.floor(shown)) - 1]];
	if (e.kind === 'weighted') {
		return <div style={{position: 'absolute', left: x, top: y, padding: '10px 34px', borderRadius: 18, background: t.soft, border: `4px solid ${t.stroke}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.working, color: t.ink, whiteSpace: 'pre'}}>{value}</div>;
	}
	const gapShare = 0.16, tail = total ? 190 : 0;
	const s = Math.min(size, (maxW - tail) / (parts.length * (1 + gapShare)));
	const gap = s * gapShare, rowW = parts.length * (s + gap);
	return (
		<svg width={rowW + tail} height={s} viewBox={`0 0 ${rowW + tail} ${s}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible'}}>
			{parts.map((p, i) => {
				const cx = i * (s + gap) + s / 2, cy = s / 2;
				if (e.kind === 'coins') {
					const c = p ? t : TONES.grey;
					return <g key={i}><circle cx={cx} cy={cy} r={s / 2 - 3} fill={c.soft} stroke={c.stroke} strokeWidth={5} /><text x={cx} y={cy + s * 0.17} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(TYPE.min, s * 0.46)}} fill={c.ink}>{p ? faces[0] : faces[1]}</text></g>;
				}
				const pips = PIPS[p];
				return (
					<g key={i}>
						<rect x={cx - s / 2 + 3} y={3} width={s - 6} height={s - 6} rx={s * 0.18} fill={CARD} stroke={t.stroke} strokeWidth={5} />
						{pips && (e.sides ?? 6) <= 6
							? pips.map(([px, py], k) => <circle key={k} cx={cx + px * s * 0.25} cy={cy + py * s * 0.25} r={s * 0.085} fill={t.ink} />)
							: <text x={cx} y={cy + s * 0.17} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(TYPE.min, s * 0.46)}} fill={t.ink}>{p}</text>}
					</g>
				);
			})}
			{total ? <text x={rowW + 10} y={s / 2 + TYPE.working * 0.36} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.working, fontVariantNumeric: 'tabular-nums'}} fill={INK}>= {value}</text> : null}
		</svg>
	);
};

/**
 * The tally as bars, one per outcome, growing as trials are shown. The vertical scale
 * stretches as the counts grow, so what the eye follows is the shape. `theory` adds a
 * marker on every bar at the expected count (exact chance x trials so far): early on the
 * bars miss the markers by a lot, later they sit on them.
 */
export const ChanceHistogram: React.FC<{
	run: ChanceRun; shown: number; x: number; y: number; w: number; h: number;
	tone?: ToneName | Tone;
	/** Colour some outcomes differently (an event). Pass `inEvent` from eventOf(). */
	event?: {inEvent: readonly boolean[]; tone: ToneName | Tone};
	theory?: {at?: number; label?: string};
	xLabel?: string;
	/** Outline the bar the latest trial landed in (default: on while 12 or fewer trials are shown). */
	mark?: boolean;
	opacity?: number;
}> = ({run, shown, x, y, w, h, tone: toneName = 'blue', event, theory, xLabel = 'outcome', mark, opacity = 1}) => {
	const f = useCurrentFrame();
	const k = Math.min(run.trials, Math.max(0, Math.floor(shown))), n = run.values.length;
	const counts = run.tally.map(t => t[k]);
	const theoryOn = theory ? Math.min(1, Math.max(0, (f - (theory.at ?? 0)) / 14)) : 0;
	const expected = run.theory.map(p => p * k);
	const top = Math.max(6, Math.max(...counts) * 1.2, theoryOn > 0 ? Math.max(...expected) * 1.2 : 0);
	const T = 54, B = 104, pw = w, ph = h - T - B, slot = pw / n, bw = slot * 0.74;
	const Y = (c: number) => T + ph - (c / top) * ph;
	const labelEvery = Math.ceil(n / 13), fine = n <= 13;
	const latest = k > 0 ? run.outcome[k - 1] : -1, showMark = mark ?? (k > 0 && k <= 12);
	const base = tone(toneName);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{counts.map((c, i) => {
				const t = event?.inEvent[i] ? tone(event.tone) : base, bx = i * slot + (slot - bw) / 2, by = Y(c);
				return (
					<g key={i}>
						{c > 0 ? <rect x={bx} y={by} width={bw} height={T + ph - by} rx={Math.min(8, bw * 0.12)} fill={t.stroke} stroke={t.ink} strokeWidth={2} /> : null}
						{showMark && i === latest ? <rect x={bx - 5} y={by - 5} width={bw + 10} height={Math.max(14, (1 / top) * ph + 10)} rx={8} fill="none" stroke={TONES.amber.stroke} strokeWidth={6} /> : null}
						{fine && c > 0 ? <text x={bx + bw / 2} y={by - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.label, fontVariantNumeric: 'tabular-nums'}} fill={t.ink}>{c}</text> : null}
						{i % labelEvery === 0 ? <text x={bx + bw / 2} y={T + ph + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support}} fill={INK}>{run.labels[i]}</text> : null}
					</g>
				);
			})}
			{theoryOn > 0 ? (
				<g opacity={theoryOn}>
					{expected.map((c, i) => { const bx = i * slot + (slot - bw) / 2 - 6; return <line key={i} x1={bx} x2={bx + bw + 12} y1={Y(c)} y2={Y(c)} stroke={INK} strokeWidth={6} strokeLinecap="round" />; })}
					<g transform={`translate(${w - 20},${T - 22})`}>
						<line x1={-56} x2={0} y1={0} y2={0} stroke={INK} strokeWidth={6} strokeLinecap="round" />
						<text x={-70} y={11} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={INK}>{theory?.label ?? 'expected'}</text>
					</g>
				</g>
			) : null}
			<line x1={0} x2={pw} y1={T + ph} y2={T + ph} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<text x={pw / 2} y={h - 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label}} fill={INK_SOFT}>{xLabel}</text>
		</svg>
	);
};

/**
 * The running share of trials in which an event happened, against the number of trials,
 * with a dashed line at the exact probability. It swings wildly at first and settles on
 * the line. The trials axis is stretched at the left (square-root scale, with labelled
 * ticks) so the wild early part is visible.
 */
export const ChanceShareGraph: React.FC<{
	run: ChanceRun; shown: number; x: number; y: number; w: number; h: number;
	/** `share` and `probability` from eventOf(). */
	share: Float32Array; probability: number;
	tone?: ToneName | Tone; yMax?: number;
	label?: string; expectedLabel?: string; xLabel?: string;
	opacity?: number;
}> = ({run, shown, x, y, w, h, share, probability, tone: toneName = 'amber', yMax, label = 'share so far', expectedLabel = 'exact chance', xLabel = 'number of trials', opacity = 1}) => {
	const k = Math.min(run.trials, Math.max(0, Math.floor(shown))), t = tone(toneName);
	const top = yMax ?? Math.min(1, Math.max(0.3, probability * 2.2));
	const L = 96, B = 92, pw = w - L - 24, ph = h - B - 20;
	const X = (trial: number) => L + Math.sqrt(trial / run.trials) * pw, Y = (v: number) => 20 + ph - (Math.min(top, v) / top) * ph;
	let d = '';
	const step = Math.max(1, Math.floor(k / 500));
	for (let i = 1; i <= k; i += i < 60 ? 1 : step) d += `${d ? 'L' : 'M'}${X(i).toFixed(1)},${Y(share[i]).toFixed(1)} `;
	if (k > 0) d += `L${X(k).toFixed(1)},${Y(share[k]).toFixed(1)}`;
	const ticks = [10, 100, 1000, 10000, 100000].filter(v => v < run.trials * 0.7).concat(run.trials);
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label};
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={20} width={pw} height={ph} fill={CARD} opacity={0.75} />
			<line x1={L} x2={L + pw} y1={Y(probability)} y2={Y(probability)} stroke={INK} strokeWidth={4} strokeDasharray="12 10" />
			<text x={L + pw - 8} y={Y(probability) - 14} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={INK}>{expectedLabel}</text>
			{d ? <path d={d} fill="none" stroke={t.stroke} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{k > 0 ? <circle cx={X(k)} cy={Y(share[k])} r={10} fill={t.stroke} stroke={CARD} strokeWidth={3} /> : null}
			<path d={`M${L},20 V${20 + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{ticks.map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={20 + ph} y2={20 + ph + 10} stroke={INK} strokeWidth={3} /><text x={X(v)} y={20 + ph + 42} textAnchor={v === run.trials ? 'end' : 'middle'} style={text} fill={INK}>{v.toLocaleString('en-AU')}</text></g>)}
			<text x={L - 14} y={Y(0) + 4} textAnchor="end" style={text} fill={INK}>0</text>
			<text x={L - 14} y={Y(probability) + 10} textAnchor="end" style={text} fill={INK}>{probability.toFixed(probability < 0.1 ? 3 : 2)}</text>
			<text x={L + pw / 2} y={h - 6} textAnchor="middle" style={text} fill={INK_SOFT}>{xLabel}</text>
			<text x={L + 14} y={50} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={t.ink}>{label}</text>
			<line x1={L} x2={L + pw} y1={20} y2={20} stroke={TRACK} strokeWidth={2} />
		</svg>
	);
};
