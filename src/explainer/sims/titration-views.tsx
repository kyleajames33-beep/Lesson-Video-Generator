// Drawing parts for the titration engine (titration.ts): the burette and flask, and the
// curve that draws itself as the burette runs. Both read the same volume added, so the
// liquid level, the flask colour, the curve and any readout always agree.
// Sizes and colours come from src/explainer/shared/tokens.ts.
import React, {useId, useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {Indicator, Mixture, Pour, Titration, addedAt, conductivityOf, cssColour, equivalenceVolume, flowAt, halfEquivalence, indicatorColour, mixtureAt, titrationCurve} from './titration';

const clamp01 = (u: number) => Math.min(1, Math.max(0, u));
const fade = (f: number, at?: number, dur = 12) => (at === undefined ? 1 : clamp01((f - at) / dur));

/** Volume added so far (mL) and how fast the burette is running (mL per frame) at the current scene frame. */
export const usePour = (pour: Pour) => { const f = useCurrentFrame(); return {added: addedAt(pour, f), flow: flowAt(pour, f)}; };

const WATER = 'rgba(120,170,215,0.30)';

/**
 * Burette above a conical flask, as a line diagram. The burette level falls and the flask
 * fills as `added` grows; drops fall while `flow` is above zero; the flask takes the
 * indicator's colour for its pH. `x`, `y` place the top-left corner; the drawing is
 * 360 px wide at `scale` 1 and 780 px tall.
 * Over a painted plate of real glassware, pass `outline={false}` to draw only the liquids,
 * the drops and the reading.
 */
export const TitrationRig: React.FC<{
	titration: Titration; added: number; flow?: number; x: number; y: number; scale?: number;
	indicator?: Indicator;
	/** Burette reading at the start, in mL (default 0), and whether to write the live reading beside the level (default true). */
	startReading?: number; reading?: boolean;
	outline?: boolean; opacity?: number;
}> = ({titration, added, flow = 0, x, y, scale = 1, indicator, startReading = 0, reading = true, outline = true, opacity = 1}) => {
	const id = useId().replace(/[^a-zA-Z0-9]/g, '');
	const W = 360, H = 780, cx = 180;
	const zero = 44, fifty = 384, tapY = 420, tipY = 474;            // burette: the 0 and 50 mL marks, the tap and the tip
	const neckTop = 496, neckBottom = 566, base = H - 10;             // flask
	const level = zero + ((startReading + added) / 50) * (fifty - zero);
	const m = mixtureAt(titration, added);
	const fill = Math.min(1, m.volume / (titration.analyte.volume * 2.6));
	const surface = base - (0.26 + 0.3 * fill) * (base - neckBottom);
	const flask = `M${cx - 30},${neckTop} L${cx - 30},${neckBottom} L${cx - 150},${base - 18} Q${cx - 158},${base} ${cx - 138},${base} L${cx + 138},${base} Q${cx + 158},${base} ${cx + 150},${base - 18} L${cx + 30},${neckBottom} L${cx + 30},${neckTop}`;
	const colour = indicator ? cssColour(indicatorColour(indicator, m.pH)) : null;
	const dropMl = Math.max(0.05, flow * 12), phase = ((added / dropMl) % 1 + 1) % 1;
	const drops = flow > 1e-6 ? (flow > 0.08 ? [phase, (phase + 0.5) % 1] : [phase]) : [];
	const ticks: React.ReactNode[] = [];
	if (outline) for (let ml = 0; ml <= 50; ml += 5) {
		const ty = zero + (ml / 50) * (fifty - zero), major = ml % 10 === 0;
		ticks.push(<g key={ml}><line x1={cx - 17} x2={cx - 17 + (major ? 16 : 10)} y1={ty} y2={ty} stroke={INK} strokeWidth={3} />{major ? <text x={cx - 30} y={ty + 9} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.min, fontVariantNumeric: 'tabular-nums'}} fill={INK_SOFT}>{ml}</text> : null}</g>);
	}
	return (
		<svg width={W * scale} height={H * scale} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<defs><clipPath id={`flask${id}`}><path d={`${flask} Z`} /></clipPath></defs>
			{/* burette liquid, then glass */}
			<rect x={cx - 15} y={level} width={30} height={tapY - level} fill={WATER} />
			<path d={`M${cx - 15},${tapY} L${cx - 5},${tapY + 26} L${cx - 5},${tipY} L${cx + 5},${tipY} L${cx + 5},${tapY + 26} L${cx + 15},${tapY} Z`} fill={WATER} />
			<line x1={cx - 15} x2={cx + 15} y1={level} y2={level} stroke={INK} strokeWidth={3} />
			{outline ? <g fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round">
				<path d={`M${cx - 17},8 L${cx - 17},${tapY} L${cx - 6},${tapY + 26} L${cx - 6},${tipY} M${cx + 17},8 L${cx + 17},${tapY} L${cx + 6},${tapY + 26} L${cx + 6},${tipY}`} />
				<rect x={cx - 34} y={tapY + 4} width={68} height={14} rx={6} fill={INK_SOFT} />
			</g> : null}
			{ticks}
			{reading ? <g><line x1={cx + 22} x2={cx + 44} y1={level} y2={level} stroke={INK} strokeWidth={3} strokeLinecap="round" /><text x={cx + 54} y={level + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.label, fontVariantNumeric: 'tabular-nums'}} fill={INK}>{(startReading + added).toFixed(2)} mL</text></g> : null}
			{/* drops */}
			{drops.map((u, i) => <ellipse key={i} cx={cx} cy={tipY + 10 + u * (surface - tipY - 16)} rx={6} ry={8.5} fill="rgba(90,150,205,0.85)" />)}
			{/* flask liquid, then glass */}
			<g clipPath={`url(#flask${id})`}>
				<rect x={0} y={surface} width={W} height={base - surface + 4} fill={WATER} />
				{colour ? <rect x={0} y={surface} width={W} height={base - surface + 4} fill={colour} opacity={0.8} /> : null}
			</g>
			<line x1={cx - 30 - ((surface - neckBottom) / (base - 18 - neckBottom)) * 120 + 4} x2={cx + 30 + ((surface - neckBottom) / (base - 18 - neckBottom)) * 120 - 4} y1={surface} y2={surface} stroke={INK} strokeWidth={3} />
			{outline ? <path d={flask} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" /> : null}
		</svg>
	);
};

/**
 * The titration curve, drawing itself up to the volume added so far. `quantity` picks pH
 * (0 to 14) or conductivity. Markers appear only once the curve has reached them.
 */
export const TitrationGraph: React.FC<{
	titration: Titration; added: number; x: number; y: number; w: number; h: number;
	/** Volume at the right-hand end of the axis, mL. */
	to: number;
	quantity?: 'pH' | 'conductivity';
	tone?: ToneName | Tone;
	/** Also show the whole curve faintly from the start. */
	whole?: boolean;
	/** Mark the equivalence point once the curve reaches it. */
	equivalence?: {label?: string; at?: number};
	/** Mark the half-way point of a weak acid or base, where pH = pKa. */
	half?: {label?: string; at?: number};
	/** Shade the pH range over which this indicator changes colour (pH graphs only). */
	indicator?: {indicator: Indicator; at?: number; label?: string};
	xLabel?: string; yLabel?: string; yMax?: number; opacity?: number;
}> = ({titration, added, x, y, w, h, to, quantity = 'pH', tone: toneName = 'teal', whole = false, equivalence, half, indicator, xLabel = 'volume added (mL)', yLabel, yMax, opacity = 1}) => {
	const f = useCurrentFrame();
	const id = useId().replace(/[^a-zA-Z0-9]/g, '');
	const isPh = quantity === 'pH', t = tone(toneName);
	const value = isPh ? (m: Mixture) => m.pH : (m: Mixture) => conductivityOf(titration, m);
	const curve = useMemo(() => titrationCurve(titration, to, value), [titration, to, quantity]);
	const top = isPh ? 14 : yMax ?? Math.max(...curve.value) * 1.12;
	const L = 96, B = 92, T = 20, pw = w - L - 24, ph = h - B - T;
	const X = (v: number) => L + (v / to) * pw, Y = (val: number) => T + ph - (Math.min(top, Math.max(0, val)) / top) * ph;
	const now = value(mixtureAt(titration, Math.min(to, added))), va = Math.min(to, Math.max(0, added));
	const pathTo = (limit: number) => { let d = ''; for (let i = 0; i < curve.volume.length && curve.volume[i] <= limit; i++) d += `${d ? 'L' : 'M'}${X(curve.volume[i]).toFixed(1)},${Y(curve.value[i]).toFixed(1)} `; return d; };
	const ve = equivalenceVolume(titration), veValue = value(mixtureAt(titration, ve));
	const halfPoint = isPh ? halfEquivalence(titration) : null;
	const xStep = [1, 2, 5, 10, 20, 25, 50, 100].find(s => to / s <= 6) ?? to;
	const yStep = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500].find(s => top / s <= 6) ?? top;
	const yTicks = isPh ? (ph >= 380 ? [0, 2, 4, 6, 8, 10, 12, 14] : [0, 7, 14]) : Array.from({length: Math.floor(top / yStep + 1e-9) + 1}, (_, i) => +(i * yStep).toFixed(6));
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label, fontVariantNumeric: 'tabular-nums'};
	const hand: React.CSSProperties = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall};
	const eqOn = equivalence && added >= ve ? fade(f, equivalence.at) : 0, halfOn = half && halfPoint && added >= halfPoint.volume ? fade(f, half.at) : 0;
	const indOn = indicator && isPh ? fade(f, indicator.at) : 0;
	const ticks: React.ReactNode[] = [];
	for (let v = 0; v <= to + 1e-9; v += xStep) ticks.push(<g key={v}><line x1={X(v)} x2={X(v)} y1={T + ph} y2={T + ph + 10} stroke={INK} strokeWidth={3} /><text x={X(v)} y={T + ph + 42} textAnchor="middle" style={text} fill={INK}>{v}</text></g>);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={T} width={pw} height={ph} fill={CARD} opacity={0.75} />
			{isPh ? <line x1={L} x2={L + pw} y1={Y(7)} y2={Y(7)} stroke={TRACK} strokeWidth={3} /> : null}
			{indicator && indOn > 0 ? (
				<g opacity={indOn}>
					<defs><linearGradient id={`ind${id}`} x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor={cssColour(indicator.indicator.acid)} /><stop offset="1" stopColor={cssColour(indicator.indicator.base)} /></linearGradient></defs>
					<rect x={L} y={Y(indicator.indicator.high)} width={pw} height={Y(indicator.indicator.low) - Y(indicator.indicator.high)} fill={`url(#ind${id})`} opacity={0.45} />
					<line x1={L} x2={L + pw} y1={Y(indicator.indicator.high)} y2={Y(indicator.indicator.high)} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="8 8" />
					<line x1={L} x2={L + pw} y1={Y(indicator.indicator.low)} y2={Y(indicator.indicator.low)} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="8 8" />
					<text x={L + 14} y={Y(indicator.indicator.high) - 12} style={hand} fill={INK}>{indicator.label ?? `${indicator.indicator.name} changes here`}</text>
				</g>
			) : null}
			{whole ? <path d={pathTo(to)} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 9" opacity={0.7} /> : null}
			<path d={`${pathTo(va)}L${X(va).toFixed(1)},${Y(now).toFixed(1)}`} fill="none" stroke={t.stroke} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
			{halfOn > 0 && halfPoint ? <g opacity={halfOn}><circle cx={X(halfPoint.volume)} cy={Y(halfPoint.pH)} r={9} fill={CARD} stroke={INK} strokeWidth={4} /><text x={X(halfPoint.volume) + 4} y={Y(halfPoint.pH) + 52} textAnchor="middle" style={hand} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{half?.label ?? 'half-way: pH = pKa'}</text></g> : null}
			{eqOn > 0 ? <g opacity={eqOn}><line x1={X(ve)} x2={X(ve)} y1={T + ph} y2={Y(veValue)} stroke={INK} strokeWidth={3} strokeDasharray="10 9" /><circle cx={X(ve)} cy={Y(veValue)} r={10} fill={CARD} stroke={INK} strokeWidth={4} /><text x={X(ve) + 20} y={Y(veValue) + 12} style={hand} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{equivalence?.label ?? 'equivalence point'}</text></g> : null}
			<circle cx={X(va)} cy={Y(now)} r={10} fill={t.stroke} stroke={CARD} strokeWidth={3} />
			<path d={`M${L},${T} V${T + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{ticks}
			{yTicks.map(v => <g key={v}><line x1={L - 10} x2={L} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><text x={L - 18} y={Y(v) + 10} textAnchor="end" style={text} fill={INK}>{v}</text></g>)}
			<text x={L + pw / 2} y={h - 6} textAnchor="middle" style={text} fill={INK_SOFT}>{xLabel}</text>
			<text transform={`translate(26,${T + ph / 2}) rotate(-90)`} textAnchor="middle" style={text} fill={INK_SOFT}>{yLabel ?? (isPh ? 'pH' : 'conductivity')}</text>
		</svg>
	);
};
