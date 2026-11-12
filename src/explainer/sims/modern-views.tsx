// Drawing parts for the black-body, slit-pattern, photoelectric and relativity helpers
// (blackbody.ts, waves.ts, photoelectric.ts, relativity.ts). Each reads numbers from its
// engine; labels come from the lesson. Sizes and colours come from tokens.ts.
import React from 'react';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, rgba, tone} from '../shared/tokens';
import {BlackBodyCurve} from './blackbody';
import {kMaxLine} from './photoelectric';
import {LightClock, gammaCurve, lightClockAt} from './relativity';
import {SeriesGraph, SeriesLine, SeriesMark, SeriesSpan} from './series-views';

const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support, fontVariantNumeric: 'tabular-nums'};
const hand: React.CSSProperties = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall};

// ------------------------------------------------------------------- black body
/**
 * Black-body curves on shared axes: wavelength in nanometres along, brightness up (as a
 * fraction of the tallest peak). `now` (nm) draws the curves up to that wavelength.
 * `classical` adds the classical prediction for one of the curves as a dashed line that
 * leaves the top of the graph. `visible` shades the band the eye can see.
 */
export const BlackBodyGraph: React.FC<{
	curves: readonly {curve: BlackBodyCurve; label?: string; tone?: ToneName | Tone}[];
	x: number; y: number; w: number; h: number; now?: number;
	classical?: {of: number; label?: string; tone?: ToneName | Tone};
	visible?: {label?: string};
	/** Mark each curve's peak wavelength on the axis. */
	peaks?: boolean;
	xLabel?: string; yLabel?: string; opacity?: number;
}> = ({curves, x, y, w, h, now, classical, visible, peaks, xLabel = 'wavelength (nm)', yLabel = 'brightness', opacity}) => {
	const top = Math.max(...curves.map(c => c.curve.peak.radiance)), first = curves[0].curve, x0 = first.wavelength[0] * 1e9, x1 = first.wavelength[first.wavelength.length - 1] * 1e9;
	const lines: SeriesLine[] = curves.map((c, i) => ({t: Float64Array.from(c.curve.wavelength, l => l * 1e9), v: Float64Array.from(c.curve.radiance, r => r / top), tone: c.tone ?? (['warm', 'amber', 'blue', 'violet'] as const)[i % 4], label: c.label}));
	if (classical) {
		const c = curves[classical.of].curve, t: number[] = [], v: number[] = [];
		// Keep only the part that fits on the graph, starting where the classical curve comes down through the top.
		for (let i = 0; i < c.wavelength.length; i++) { const val = c.classical[i] / top; if (val <= 1.12) { t.push(c.wavelength[i] * 1e9); v.push(val); } }
		lines.push({t: Float64Array.from(t), v: Float64Array.from(v), tone: classical.tone ?? 'grey', dashed: true, label: classical.label, width: 5});
	}
	const marks: SeriesMark[] = peaks ? curves.map(c => ({axis: 'x' as const, value: c.curve.peak.wavelength * 1e9, tone: 'grey' as const})) : [];
	const spans: SeriesSpan[] = visible ? [{from: 380, to: 750, label: visible.label, tone: 'olive'}] : [];
	return <SeriesGraph lines={lines} x={x} y={y} w={w} h={h} xRange={[x0, x1]} yRange={[0, 1.12]} now={now} marks={marks} spans={spans} xLabel={xLabel} yLabel={yLabel} yTicks={[0, 0.5, 1]} opacity={opacity} />;
};

// ----------------------------------------------------------------- slit patterns
/**
 * The pattern on a far screen: a brightness curve against angle, with the screen itself
 * drawn under it as a strip of light on dark. Pass any brightness function of the angle
 * (radians), such as `a => singleSlitBrightness(w, wavelength, a)`.
 */
export const IntensityPattern: React.FC<{
	brightness: (angle: number) => number; maxAngle: number;
	x: number; y: number; w: number; h: number;
	tone?: ToneName | Tone;
	/** Labels written above chosen angles, such as the orders of a grating. */
	orders?: readonly {angle: number; label: string}[];
	/** Angle between tick marks in degrees (default: a round step). */
	tickDegrees?: number;
	xLabel?: string; strip?: boolean; samples?: number; opacity?: number;
}> = ({brightness, maxAngle, x, y, w, h, tone: lightTone = 'red', orders = [], tickDegrees, xLabel = 'angle (degrees)', strip = true, samples = 700, opacity = 1}) => {
	const c = tone(lightTone), L = 30, R = 30, B = 96, stripH = strip ? 74 : 0, T = orders.length ? 50 : 14, pw = w - L - R, ph = h - B - T - stripH - (strip ? 16 : 0);
	const X = (a: number) => L + ((a + maxAngle) / (2 * maxAngle)) * pw, base = T + ph;
	let d = '';
	const bars: React.ReactNode[] = [];
	for (let i = 0; i <= samples; i++) {
		const a = -maxAngle + (2 * maxAngle * i) / samples, b = Math.max(0, Math.min(1, brightness(a)));
		d += `${i ? 'L' : 'M'}${X(a).toFixed(1)},${(base - b * ph).toFixed(1)} `;
		if (strip && i < samples) bars.push(<rect key={i} x={X(a)} y={base + 16} width={pw / samples + 0.6} height={stripH} fill={rgba(c.stroke, Math.min(1, b ** 0.45))} />);
	}
	const maxDeg = (maxAngle * 180) / Math.PI, step = tickDegrees ?? ([1, 2, 5, 10, 15, 30].find(s => maxDeg / s <= 4) ?? 30), ticks: number[] = [];
	for (let v = -Math.floor(maxDeg / step) * step; v <= maxDeg + 1e-9; v += step) ticks.push(+v.toFixed(6));
	const axisY = base + 16 + stripH + (strip ? 0 : -16);
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={T} width={pw} height={ph} fill={CARD} opacity={0.75} />
			{strip ? <rect x={L} y={base + 16} width={pw} height={stripH} fill={INK} /> : null}
			{bars}
			<path d={d} fill="none" stroke={c.stroke} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
			<line x1={L} y1={base} x2={L + pw} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{ticks.map(v => <g key={v}><line x1={X((v * Math.PI) / 180)} x2={X((v * Math.PI) / 180)} y1={axisY} y2={axisY + 10} stroke={INK} strokeWidth={3} /><text x={X((v * Math.PI) / 180)} y={axisY + 42} textAnchor="middle" style={text} fill={INK}>{v}</text></g>)}
			{orders.map((o, i) => <text key={i} x={X(o.angle)} y={T - 14} textAnchor="middle" style={hand} fill={c.ink}>{o.label}</text>)}
			<text x={L + pw / 2} y={h - 6} textAnchor="middle" style={{...text, fontWeight: 700}} fill={INK_SOFT}>{xLabel}</text>
		</svg>
	);
};

// ----------------------------------------------------------------- photoelectric
/**
 * Largest kinetic energy of the freed electrons against the light's frequency, one line
 * per metal: flat at zero up to its threshold, then straight lines that are all parallel
 * (gradient h / e). `now` (Hz) puts a marker at the light's frequency.
 */
export const PhotoelectricGraph: React.FC<{
	metals: readonly {workFunction: number; label?: string; tone?: ToneName | Tone}[];
	toFrequency: number; now?: number;
	x: number; y: number; w: number; h: number;
	/** Mark each metal's threshold frequency on the axis. */
	thresholds?: boolean;
	xLabel?: string; yLabel?: string; opacity?: number;
}> = ({metals, toFrequency, now, x, y, w, h, thresholds, xLabel = 'frequency (× 10¹⁴ Hz)', yLabel = 'largest kinetic energy (eV)', opacity}) => {
	const sets = metals.map(m => kMaxLine(m.workFunction, toFrequency)), top = Math.max(1e-9, ...sets.map(s => s.kMaxEV[2])) * 1.15;
	const lines: SeriesLine[] = metals.map((m, i) => ({t: Float64Array.from(sets[i].frequency, f => f / 1e14), v: sets[i].kMaxEV, tone: m.tone ?? (['teal', 'violet', 'warm'] as const)[i % 3], label: m.label}));
	const marks: SeriesMark[] = thresholds ? sets.map(s => ({axis: 'x' as const, value: s.threshold / 1e14, tone: 'grey' as const})) : [];
	return <SeriesGraph lines={lines} x={x} y={y} w={w} h={h} xRange={[0, toFrequency / 1e14]} yRange={[0, top]} now={now === undefined ? undefined : now / 1e14} marks={marks} xLabel={xLabel} yLabel={yLabel} opacity={opacity} />;
};
/**
 * One photon's energy beside what the metal demands: a bar for hf, and beside it the work
 * function with any energy left over stacked on top as the electron's kinetic energy.
 * When the photon falls short, the work function bar stands taller and nothing is stacked.
 */
export const PhotonBars: React.FC<{
	photonEV: number; workFunction: number; x: number; y: number; w: number; h: number;
	labels?: {photon?: string; work?: string; kinetic?: string; short?: string};
	tones?: {photon?: ToneName | Tone; work?: ToneName | Tone; kinetic?: ToneName | Tone};
	/** Energy (eV) the full height stands for (default: a little above the taller bar). */
	full?: number; opacity?: number;
}> = ({photonEV, workFunction, x, y, w, h, labels = {}, tones = {}, full, opacity = 1}) => {
	const pt = tone(tones.photon ?? 'amber'), wt = tone(tones.work ?? 'grey'), kt = tone(tones.kinetic ?? 'teal');
	const top = full ?? Math.max(photonEV, workFunction) * 1.2, B = 56, ph = h - B - 50, px = (v: number) => (v / top) * ph, bw = w * 0.26, ax = w * 0.14, bx = w * 0.58, base = 50 + ph;
	const spare = photonEV - workFunction, num = (v: number) => `${v.toFixed(2)} eV`;
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={ax} y={base - px(photonEV)} width={bw} height={px(photonEV)} fill={pt.stroke} rx={6} />
			<text x={ax + bw / 2} y={base - px(photonEV) - 14} textAnchor="middle" style={text} fill={pt.ink}>{num(photonEV)}</text>
			<rect x={bx} y={base - px(workFunction)} width={bw} height={px(workFunction)} fill={wt.stroke} rx={6} />
			<text x={bx + bw + 14} y={base - px(workFunction) / 2 + 10} style={text} fill={wt.ink}>{num(workFunction)}</text>
			{spare >= 0 ? <>
				<rect x={bx} y={base - px(photonEV)} width={bw} height={Math.max(0, px(spare) - 4)} fill={kt.stroke} rx={6} />
				<text x={bx + bw + 14} y={base - px(workFunction) - px(spare) / 2 + 10} style={text} fill={kt.ink}>{labels.kinetic ? `${labels.kinetic} ${num(spare)}` : num(spare)}</text>
			</> : <>
				<line x1={ax} x2={bx + bw} y1={base - px(photonEV)} y2={base - px(photonEV)} stroke={pt.stroke} strokeWidth={4} strokeDasharray="10 9" />
				{labels.short ? <text x={(ax + bx + bw) / 2} y={base - px(workFunction) - 16} textAnchor="middle" style={hand} fill={INK}>{labels.short}</text> : null}
			</>}
			<line x1={ax - 30} x2={bx + bw + 30} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{labels.photon ? <text x={ax + bw / 2} y={base + 40} textAnchor="middle" style={text} fill={INK}>{labels.photon}</text> : null}
			{labels.work ? <text x={bx + bw / 2} y={base + 40} textAnchor="middle" style={text} fill={INK}>{labels.work}</text> : null}
		</svg>
	);
};

// -------------------------------------------------------------------- relativity
/** Gamma against speed (as a fraction of c). `now` marks one speed with a dashed line up the graph and another across at its gamma. */
export const GammaGraph: React.FC<{
	now?: number; x: number; y: number; w: number; h: number; yMax?: number;
	tone?: ToneName | Tone; marks?: readonly SeriesMark[]; xLabel?: string; yLabel?: string; opacity?: number;
}> = ({now, x, y, w, h, yMax = 8, tone: lineTone = 'violet', marks = [], xLabel = 'speed (fraction of c)', yLabel = 'Lorentz factor γ', opacity}) => {
	const c = React.useMemo(() => gammaCurve(400, Math.sqrt(1 - 1 / (yMax * yMax))), [yMax]);
	return <SeriesGraph lines={[{t: c.beta, v: c.gamma, tone: lineTone}]} x={x} y={y} w={w} h={h} xRange={[0, 1]} yRange={[1, yMax]} marks={[{axis: 'x', value: 1, tone: 'grey'}, ...(now === undefined ? [] : [{axis: 'x' as const, value: now, tone: lineTone}, {axis: 'y' as const, value: 1 / Math.sqrt(1 - now * now), tone: lineTone}]), ...marks]} xLabel={xLabel} yLabel={yLabel} xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} opacity={opacity} />;
};
/**
 * Two light clocks seen from one frame at the same moment `t` (seconds in that frame): one
 * at rest on the left, and an identical one moving to the right. The moving clock's pulse
 * follows a longer, slanted path at the same speed, so it ticks less often. The picture is
 * to scale: the mirrors are `mirrorGap` px apart and sideways distances use the same scale.
 */
export const LightClockView: React.FC<{
	clock: LightClock; t: number; x: number; y: number; mirrorGap: number;
	/** Width in px of the track the moving clock runs along. */
	track: number;
	labels?: {rest?: string; moving?: string; ticks?: string};
	restTone?: ToneName | Tone; movingTone?: ToneName | Tone; opacity?: number;
}> = ({clock, t, x, y, mirrorGap: H, track, labels = {}, restTone = 'teal', movingTone = 'amber', opacity = 1}) => {
	const k = H / clock.height, rest = lightClockAt({height: clock.height, beta: 0}, t), moving = lightClockAt(clock, t), rt = tone(restTone), mt = tone(movingTone);
	const top = 70, bottom = top + H, restX = 70, x0 = 260, mx = x0 + moving.x * k;
	const mirror = (cx: number, cy: number, key: string) => <line key={key} x1={cx - 44} x2={cx + 44} y1={cy} y2={cy} stroke={INK} strokeWidth={8} strokeLinecap="round" />;
	const zig = moving.path.map(([px, py], i) => `${i ? 'L' : 'M'}${(x0 + px * k).toFixed(1)},${(bottom - py * k).toFixed(1)}`).join(' ');
	const count = (n: number) => (labels.ticks ? `${labels.ticks} ${n}` : String(n));
	return (
		<svg width={x0 + track + 60} height={bottom + 110} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<line x1={x0 - 60} x2={x0 + track} y1={bottom + 14} y2={bottom + 14} stroke={TRACK} strokeWidth={4} strokeLinecap="round" />
			{mirror(restX, top, 'rt')}{mirror(restX, bottom, 'rb')}
			<line x1={restX} x2={restX} y1={top} y2={bottom} stroke={rt.stroke} strokeWidth={4} strokeDasharray="6 9" opacity={0.6} />
			<circle cx={restX} cy={bottom - rest.y * k} r={13} fill={rt.stroke} stroke={CARD} strokeWidth={3} />
			<path d={zig} fill="none" stroke={mt.stroke} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
			{mirror(mx, top, 'mt')}{mirror(mx, bottom, 'mb')}
			<circle cx={mx} cy={bottom - moving.y * k} r={13} fill={mt.stroke} stroke={CARD} strokeWidth={3} />
			{labels.rest ? <text x={restX} y={top - 24} textAnchor="middle" style={text} fill={rt.ink}>{labels.rest}</text> : null}
			{labels.moving ? <text x={mx} y={top - 24} textAnchor="middle" style={text} fill={mt.ink}>{labels.moving}</text> : null}
			<text x={restX} y={bottom + 64} textAnchor="middle" style={{...text, fontSize: TYPE.current}} fill={rt.ink}>{count(rest.restTicks)}</text>
			<text x={mx} y={bottom + 64} textAnchor="middle" style={{...text, fontSize: TYPE.current}} fill={mt.ink}>{count(moving.ticks)}</text>
		</svg>
	);
};
