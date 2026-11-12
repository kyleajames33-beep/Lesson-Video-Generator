// Drawing part for a reaction energy profile (numbers in energy-profile.ts): reactant and
// product levels joined by a smooth hump, an optional lower catalysed hump, and arrows for
// Ea and ΔH. Every piece takes a 0 to 1 value, so a lesson can draw the curve, then bring
// in each arrow on its narration cue. Labels come from the lesson.
// Sizes and colours come from src/explainer/shared/tokens.ts.
import React from 'react';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, INK, INK_SOFT, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {EnergyProfileConfig, PROFILE_SHAPE, energyProfile, profileEnergyAt} from './energy-profile';

export type EnergyProfileLabels = {
	reactants?: string; products?: string;
	ea?: string; catalysedEa?: string; deltaH?: string;
	/** Written beside the catalysed curve. */
	catalysed?: string;
	xAxis?: string; yAxis?: string;
};

const clamp01 = (u: number) => Math.min(1, Math.max(0, u));

/**
 * The profile. `progress` draws the main curve from left to right (0 to 1); `catalysed`
 * draws the lower dashed curve the same way. `showEa`, `showCatalysedEa` and `showDeltaH`
 * fade in and grow each arrow (0 to 1). `ball` puts a marker on the main curve at `progress`.
 */
export const EnergyProfileView: React.FC<{
	config: EnergyProfileConfig;
	x: number; y: number; w: number; h: number;
	progress?: number; catalysed?: number;
	showEa?: number; showCatalysedEa?: number; showDeltaH?: number;
	ball?: boolean;
	labels?: EnergyProfileLabels;
	tones?: {curve?: ToneName | Tone; catalysed?: ToneName | Tone; ea?: ToneName | Tone; deltaH?: ToneName | Tone};
	opacity?: number;
}> = ({config, x, y, w, h, progress = 1, catalysed = 0, showEa = 0, showCatalysedEa = 0, showDeltaH = 0, ball = false, labels = {}, tones = {}, opacity = 1}) => {
	const p = energyProfile(config);
	const cCurve = tone(tones.curve ?? 'ink'), cCat = tone(tones.catalysed ?? 'green'), cEa = tone(tones.ea ?? 'warm'), cDh = tone(tones.deltaH ?? 'blue');
	const L = labels.yAxis ? 92 : 30, B = labels.xAxis ? 80 : 30, T = 30, R = 30, pw = w - L - R, ph = h - T - B;
	const lo = Math.min(config.reactants, config.products), hi = p.peak, span = hi - lo || 1;
	const e0 = lo - span * 0.32, e1 = hi + span * 0.16;
	const X = (u: number) => L + u * pw, Y = (e: number) => T + ph - ((e - e0) / (e1 - e0)) * ph;
	const path = (upTo: number, cat: boolean) => {
		const n = Math.max(2, Math.ceil(200 * upTo));
		let d = '';
		for (let i = 0; i <= n; i++) { const u = (upTo * i) / n; d += `${i ? 'L' : 'M'}${X(u).toFixed(1)},${Y(profileEnergyAt(p, u, cat)).toFixed(1)} `; }
		return d;
	};
	const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support};
	const hand: React.CSSProperties = {fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand};
	const halo = {stroke: CARD, strokeWidth: 8, paintOrder: 'stroke' as const};
	/** A vertical arrow from energy a towards energy b, grown to share `grow` of its length. */
	const arrow = (ax: number, a: number, b: number, grow: number, c: Tone, key: string) => {
		const y0 = Y(a), y1 = y0 + (Y(b) - y0) * grow, dir = Math.sign(y1 - y0) || 1, head = Math.min(22, Math.abs(y1 - y0));
		return <g key={key}><line x1={ax} x2={ax} y1={y0} y2={y1 - dir * head * 0.6} stroke={c.stroke} strokeWidth={6} strokeLinecap="round" /><path d={`M${ax - 13},${y1 - dir * head} L${ax},${y1} L${ax + 13},${y1 - dir * head} Z`} fill={c.stroke} stroke={c.stroke} strokeWidth={3} strokeLinejoin="round" /></g>;
	};
	const ea = clamp01(showEa), cea = clamp01(showCatalysedEa), dh = clamp01(showDeltaH), pr = clamp01(progress), cat = clamp01(catalysed);
	// Both Ea arrows stand inside the hump: the catalysed one to the left of the main one. Their
	// labels sit low down, where the hump is widest: Ea to the right of its arrow, the catalysed
	// Ea just under the reactant level below its arrow, where nothing else is drawn.
	const xPeak = X(PROFILE_SHAPE.peakAt), xDh = X(0.9), xCat = xPeak - Math.min(80, pw * 0.08);
	const eaLabelY = Y(config.reactants) + 0.32 * (Y(p.catalysedPeak ?? p.peak) - Y(config.reactants)) + 12;
	const flatL = X(PROFILE_SHAPE.riseFrom), flatR = X(PROFILE_SHAPE.fallTo);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{/* axes */}
			<path d={`M${L},${T} V${T + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			<path d={`M${L - 12},${T + 16} L${L},${T} L${L + 12},${T + 16} M${L + pw - 16},${T + ph - 12} L${L + pw},${T + ph} L${L + pw - 16},${T + ph + 12}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{labels.yAxis ? <text transform={`translate(${L - 30},${T + ph / 2}) rotate(-90)`} textAnchor="middle" style={text} fill={INK_SOFT}>{labels.yAxis}</text> : null}
			{labels.xAxis ? <text x={L + pw / 2} y={h - 14} textAnchor="middle" style={text} fill={INK_SOFT}>{labels.xAxis}</text> : null}
			{/* guide lines for the arrows: the reactant level carried across under the hump and to the ΔH arrow */}
			{ea > 0 || cea > 0 || dh > 0 ? <line x1={flatL} x2={dh > 0 ? xDh + 40 : xPeak + 40} y1={Y(config.reactants)} y2={Y(config.reactants)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" opacity={Math.max(ea, cea, dh)} /> : null}
			{dh > 0 ? <line x1={flatR} x2={xDh + 40} y1={Y(config.products)} y2={Y(config.products)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" opacity={dh} /> : null}
			{ea > 0 ? <line x1={xPeak - 40} x2={xPeak + 40} y1={Y(p.peak)} y2={Y(p.peak)} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" opacity={ea} /> : null}
			{/* curves */}
			{cat > 0 && p.catalysedPeak !== null ? <path d={path(cat, true)} fill="none" stroke={cCat.stroke} strokeWidth={6} strokeDasharray="16 11" strokeLinecap="round" /> : null}
			<path d={path(pr, false)} fill="none" stroke={cCurve.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
			{ball && pr > 0 ? <circle cx={X(pr)} cy={Y(profileEnergyAt(p, pr))} r={14} fill={cEa.stroke} stroke={CARD} strokeWidth={4} /> : null}
			{/* level names */}
			{labels.reactants ? <text x={X(0.02)} y={Y(config.reactants) - 18} style={hand} fill={INK} {...halo}>{labels.reactants}</text> : null}
			{labels.products && pr >= PROFILE_SHAPE.fallTo ? <text x={X(0.98)} y={Y(config.products) + (p.deltaH < 0 ? 52 : -18)} textAnchor="end" style={hand} fill={INK} {...halo}>{labels.products}</text> : null}
			{labels.catalysed && cat > 0.6 && p.catalysedPeak !== null ? (() => {
				// In the clear space under the reactant level, with a leader up to the dashed curve.
				const u = PROFILE_SHAPE.riseFrom + 0.4 * (PROFILE_SHAPE.peakAt - PROFILE_SHAPE.riseFrom), lx = X(u), top = Y(profileEnergyAt(p, u, true)) + 10, ty = Math.max(Y(config.reactants), Y(config.products) - 70) + 96;
				return <g opacity={clamp01((cat - 0.6) / 0.3)}><line x1={lx} x2={lx} y1={ty - 40} y2={top} stroke={cCat.stroke} strokeWidth={3} strokeDasharray="4 7" /><text x={lx} y={ty} textAnchor="middle" style={hand} fill={cCat.ink} {...halo}>{labels.catalysed}</text></g>;
			})() : null}
			{/* arrows */}
			{ea > 0 ? <g opacity={clamp01(ea * 3)}>{arrow(xPeak, config.reactants, p.peak, ea, cEa, 'ea')}{labels.ea ? <text x={xPeak + 18} y={eaLabelY} style={hand} fill={cEa.ink} {...halo}>{labels.ea}</text> : null}</g> : null}
			{cea > 0 && p.catalysedPeak !== null ? <g opacity={clamp01(cea * 3)}>{arrow(xCat, config.reactants, p.catalysedPeak, cea, cCat, 'cea')}{labels.catalysedEa ? <text x={xCat - 14} y={Y(config.reactants) + 50} style={hand} fill={cCat.ink} {...halo}>{labels.catalysedEa}</text> : null}</g> : null}
			{dh > 0 ? <g opacity={clamp01(dh * 3)}>{arrow(xDh, config.reactants, config.products, dh, cDh, 'dh')}{labels.deltaH ? <text x={xDh - 22} y={(Y(config.reactants) + Y(config.products)) / 2 + 12} textAnchor="end" style={hand} fill={cDh.ink} {...halo}>{labels.deltaH}</text> : null}</g> : null}
		</svg>
	);
};
