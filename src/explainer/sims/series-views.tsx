// A line graph of one or more quantities against time (or generations), drawing itself up
// to "now". Shared by the population, heating and circuit views, so every time graph in the
// kit looks the same. It draws only what it is given: labels, colours and ranges come from
// the lesson. Sizes and colours come from src/explainer/shared/tokens.ts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, rgba, tone} from '../shared/tokens';
import {valueAt} from './population';
import {SimReadoutRow} from './views';

export type SeriesLine = {
	t: ArrayLike<number>; v: ArrayLike<number>;
	tone?: ToneName | Tone;
	/** Written beside the moving end of the line. */
	label?: string;
	/** Stroke width (default 6). Use about 3 for many thin replicate lines. */
	width?: number;
	dashed?: boolean;
	/** Opacity of this line (default 1). */
	opacity?: number;
	/** Draw dots at every sample (discrete generations). */
	dots?: boolean;
};
export type SeriesMark = {
	/** 'y' draws a horizontal guide at this value (a carrying capacity, a melting point); 'x' a vertical guide at this time. */
	axis: 'x' | 'y'; value: number; label?: string; tone?: ToneName | Tone;
	/** Scene frame at which it fades in (default: shown). */
	at?: number;
};
export type SeriesSpan = {
	/** A shaded stretch of time, such as a plateau. Shown only once `now` has reached `from`. */
	from: number; to: number; label?: string; tone?: ToneName | Tone; at?: number;
};
export type SeriesNote = {
	/** A hand-written note at a point on the graph (time t, value v), moved by dx, dy px. Shown once `now` has reached t. */
	t: number; v: number; label: string; dx?: number; dy?: number;
	anchor?: 'start' | 'middle' | 'end'; tone?: ToneName | Tone; at?: number;
	/** Draw a thin line from the note back to its point. */
	leader?: boolean;
};

const niceStep = (range: number, most = 6) => {
	const raw = range / most, mag = 10 ** Math.floor(Math.log10(raw));
	return ([1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw) ?? 10 * mag);
};
/** Tick values from `min` to `max` at a round step, at most about `most` of them. */
export const niceTicks = (min: number, max: number, most = 6) => {
	const step = niceStep(max - min, most), out: number[] = [];
	for (let v = Math.ceil(min / step - 1e-9) * step; v <= max + 1e-9 * step; v += step) out.push(+v.toFixed(10));
	return out;
};
const clamp01 = (u: number) => Math.min(1, Math.max(0, u));
const fade = (f: number, at?: number) => (at === undefined ? 1 : clamp01((f - at) / 12));

/**
 * The graph. `now` is the time the lines have reached (leave out to draw them whole); a
 * dot marks each line's value at `now` and a thin line marks the time. `whole` also shows
 * the rest of each line faintly ahead of now.
 */
export const SeriesGraph: React.FC<{
	lines: readonly SeriesLine[];
	x: number; y: number; w: number; h: number;
	xRange: readonly [number, number]; yRange: readonly [number, number];
	now?: number; whole?: boolean;
	marks?: readonly SeriesMark[];
	spans?: readonly SeriesSpan[];
	notes?: readonly SeriesNote[];
	xLabel?: string; yLabel?: string;
	xTicks?: readonly number[]; yTicks?: readonly number[];
	/** How tick numbers are written (default: up to 2 decimal places, no trailing zeros). */
	format?: (v: number) => string;
	/** Room kept on the right for line labels, px (default 200 when any line has a label, else 30). */
	labelRoom?: number;
	/** Show the vertical "now" line (default true while `now` is inside the range). */
	nowLine?: boolean;
	opacity?: number;
}> = ({lines, x, y, w, h, xRange, yRange, now, whole = false, marks = [], spans = [], notes = [], xLabel, yLabel, xTicks, yTicks, format, labelRoom, nowLine, opacity = 1}) => {
	const f = useCurrentFrame();
	const room = labelRoom ?? (lines.some(l => l.label) ? 200 : 30);
	const L = yLabel ? 132 : 104, B = xLabel ? 100 : 60, T = 24, pw = w - L - room, ph = h - B - T;
	const [x0, x1] = xRange, [y0, y1] = yRange;
	const X = (t: number) => L + ((t - x0) / (x1 - x0)) * pw;
	const Y = (v: number) => T + ph - ((Math.min(y1, Math.max(y0, v)) - y0) / (y1 - y0)) * ph;
	const end = now === undefined ? x1 : Math.min(x1, Math.max(x0, now));
	const fmt = format ?? ((v: number) => String(+v.toFixed(2)));
	const pathOf = (l: SeriesLine, from: number, to: number) => {
		let d = '';
		const n = l.t.length;
		if (!n || to < from) return d;
		// A line whose samples begin part-way along the axis is drawn from its first sample, not stretched back to the edge.
		if (l.t[0] > from) from = Math.min(to, l.t[0]);
		const startV = valueAt(l.t, l.v, from);
		d = `M${X(from).toFixed(1)},${Y(startV).toFixed(1)} `;
		for (let i = 0; i < n; i++) { const t = l.t[i]; if (t > from && t < to) d += `L${X(t).toFixed(1)},${Y(l.v[i]).toFixed(1)} `; }
		d += `L${X(to).toFixed(1)},${Y(valueAt(l.t, l.v, to)).toFixed(1)}`;
		return d;
	};
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support, fontVariantNumeric: 'tabular-nums'};
	const hand: React.CSSProperties = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall};
	const xs = xTicks ?? niceTicks(x0, x1), ys = yTicks ?? niceTicks(y0, y1, ph >= 380 ? 6 : 4);
	// End labels, pushed apart so they never overlap.
	const tags = lines.map((l, i) => ({i, label: l.label, y: Y(valueAt(l.t, l.v, end))})).filter(tag => tag.label).sort((a, b) => a.y - b.y);
	for (let k = 1; k < tags.length; k++) if (tags[k].y - tags[k - 1].y < 42) tags[k].y = tags[k - 1].y + 42;
	// Keep them clear of the x-axis numbers: lift the lowest, then push the rest up.
	const floor = T + ph - 26;
	if (tags.length && tags[tags.length - 1].y > floor) { tags[tags.length - 1].y = floor; for (let k = tags.length - 2; k >= 0; k--) if (tags[k + 1].y - tags[k].y < 42) tags[k].y = tags[k + 1].y - 42; }
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={T} width={pw} height={ph} fill={CARD} opacity={0.75} />
			{spans.map((s, i) => {
				const o = now !== undefined && now < s.from ? 0 : fade(f, s.at);
				if (o <= 0) return null;
				const c = tone(s.tone ?? 'grey'), a = X(Math.max(x0, s.from)), b = X(Math.min(x1, s.to, end));
				return (
					<g key={`s${i}`} opacity={o}>
						<rect x={a} y={T} width={Math.max(0, b - a)} height={ph} fill={rgba(c.stroke, 0.16)} />
						{s.label ? <text x={(X(Math.max(x0, s.from)) + X(Math.min(x1, s.to))) / 2} y={T + 40} textAnchor="middle" style={hand} fill={c.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{s.label}</text> : null}
					</g>
				);
			})}
			{ys.map(v => <line key={`g${v}`} x1={L} x2={L + pw} y1={Y(v)} y2={Y(v)} stroke={TRACK} strokeWidth={2} />)}
			{marks.map((m, i) => {
				const o = fade(f, m.at);
				if (o <= 0) return null;
				const c = tone(m.tone ?? 'ink');
				return m.axis === 'y'
					? <g key={`m${i}`} opacity={o}><line x1={L} x2={L + pw} y1={Y(m.value)} y2={Y(m.value)} stroke={c.stroke} strokeWidth={3} strokeDasharray="12 10" />{m.label ? <text x={L + pw - 10} y={Y(m.value) - 12} textAnchor="end" style={hand} fill={c.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{m.label}</text> : null}</g>
					: <g key={`m${i}`} opacity={o}><line x1={X(m.value)} x2={X(m.value)} y1={T} y2={T + ph} stroke={c.stroke} strokeWidth={3} strokeDasharray="12 10" />{m.label ? <text x={X(m.value) + 12} y={T + 36} style={hand} fill={c.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{m.label}</text> : null}</g>;
			})}
			{whole ? lines.map((l, i) => <path key={`w${i}`} d={pathOf(l, x0, x1)} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 9" opacity={0.6} />) : null}
			{lines.map((l, i) => {
				const c = tone(l.tone ?? 'teal');
				return (
					<g key={`l${i}`} opacity={l.opacity ?? 1}>
						<path d={pathOf(l, x0, end)} fill="none" stroke={c.stroke} strokeWidth={l.width ?? 6} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={l.dashed ? '14 10' : undefined} />
						{l.dots ? Array.from({length: l.t.length}, (_, k) => k).filter(k => l.t[k] <= end).map(k => <circle key={k} cx={X(l.t[k])} cy={Y(l.v[k])} r={6} fill={c.stroke} />) : null}
					</g>
				);
			})}
			{now !== undefined && (nowLine ?? (now > x0 && now < x1)) ? <line x1={X(end)} x2={X(end)} y1={T} y2={T + ph} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="4 8" /> : null}
			{now !== undefined ? lines.map((l, i) => { const c = tone(l.tone ?? 'teal'); return <circle key={`d${i}`} cx={X(end)} cy={Y(valueAt(l.t, l.v, end))} r={(l.width ?? 6) >= 5 ? 10 : 6} fill={c.stroke} stroke={CARD} strokeWidth={3} opacity={l.opacity ?? 1} />; }) : null}
			{notes.map((n, i) => {
				const o = now !== undefined && now < n.t ? 0 : fade(f, n.at);
				if (o <= 0) return null;
				// A note that would run outside the plot flips to the other side of its point.
				const width = n.label.length * TYPE.handSmall * 0.48, dx = n.dx ?? 0;
				let anchor = n.anchor ?? 'start', nx = X(n.t) + dx;
				if (anchor === 'end' && nx - width < L + 8) { anchor = 'start'; nx = X(n.t) + Math.abs(dx); }
				else if (anchor === 'start' && nx + width > L + pw - 8) { anchor = 'end'; nx = X(n.t) - Math.abs(dx); }
				const ty = Y(n.v) + (n.dy ?? 0), c = tone(n.tone ?? 'ink');
				return <g key={`n${i}`} opacity={o}>
					{n.leader ? <line x1={X(n.t)} y1={Y(n.v)} x2={nx + (anchor === 'end' ? 8 : anchor === 'start' ? -8 : 0)} y2={ty + (ty > Y(n.v) ? -22 : 10)} stroke={c.stroke} strokeWidth={3} strokeLinecap="round" /> : null}
					<text x={nx} y={ty + 11} textAnchor={anchor} style={hand} fill={c.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{n.label}</text>
				</g>;
			})}
			{tags.map(tag => { const c = tone(lines[tag.i].tone ?? 'teal'); return <text key={`t${tag.i}`} x={X(end) + 20} y={tag.y + 11} style={hand} fill={c.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{tag.label}</text>; })}
			<path d={`M${L},${T} V${T + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{xs.map(v => <g key={`x${v}`}><line x1={X(v)} x2={X(v)} y1={T + ph} y2={T + ph + 10} stroke={INK} strokeWidth={3} /><text x={X(v)} y={T + ph + 44} textAnchor="middle" style={text} fill={INK}>{fmt(v)}</text></g>)}
			{ys.map(v => <g key={`y${v}`}><line x1={L - 10} x2={L} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><text x={L - 18} y={Y(v) + 10} textAnchor="end" style={text} fill={INK}>{fmt(v)}</text></g>)}
			{xLabel ? <text x={L + pw / 2} y={h - 8} textAnchor="middle" style={text} fill={INK_SOFT}>{xLabel}</text> : null}
			{yLabel ? <text transform={`translate(30,${T + ph / 2}) rotate(-90)`} textAnchor="middle" style={text} fill={INK_SOFT}>{yLabel}</text> : null}
		</svg>
	);
};

export type SeriesClock = {
	/** Scene frame at which time starts moving. */
	at?: number;
	/** Time (or generation) shown at the start, and at the end. */
	from?: number; to: number;
	/** Scene frames taken to go from `from` to `to`. */
	frames: number;
	/** 'linear' (default), or 'ease' to slow down at both ends. */
	ease?: 'linear' | 'ease';
};
/** The time shown at scene frame f: holds at `from` before `at`, and at `to` after it has played. */
export const seriesTime = (clock: SeriesClock, f: number) => {
	const u = clamp01((f - (clock.at ?? 0)) / Math.max(1, clock.frames)), from = clock.from ?? 0;
	const e = clock.ease === 'ease' ? u * u * (3 - 2 * u) : u;
	return from + (clock.to - from) * e;
};
/** The time shown at the current scene frame. Use one clock for the graph, any picture and the readout. */
export const useSeriesTime = (clock: SeriesClock) => seriesTime(clock, useCurrentFrame());
/** Readout rows (for SimReadout) giving each line's value at time `now`. */
export const seriesReadout = (lines: readonly (SeriesLine & {unit?: string; digits?: number})[], now: number): SimReadoutRow[] =>
	lines.map(l => ({label: l.label ?? '', value: valueAt(l.t, l.v, now), digits: l.digits ?? 2, unit: l.unit, tone: l.tone}));

