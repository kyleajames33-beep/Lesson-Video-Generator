// IndicatorDiagram — an indicator is a weak acid whose two forms differ in
// colour, so the colour follows the pH.
//
// A pH needle sweeps along a painted ruler (keyframes from props). With one
// indicator, a flask on a stone plinth holds indicator particles: each is the
// HIn (acid colour) or In⁻ (base colour) form in the true proportion
// [In⁻] ÷ [HIn] = 10^(pH − pKIn), the liquid takes the mixed colour, and the
// ratio is read out; the change range pKIn ± 1 is bracketed. With several
// indicators, a rack of test tubes changes colour together as the needle
// moves, each tube's range marked under the ruler.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GlossDefs, clamp, fadeAt, hash01, mix, phColor} from './shared';

export type IndicatorSpec = {name: string; acidColor: string; baseColor: string; midColor?: string; lo: number; hi: number; rangeText?: string; acidName?: string; baseName?: string};
export type IndicatorProps = {
	indicators: IndicatorSpec[];
	/** pH needle keyframes (frames after delay). */
	sweep: {pH: number; at: number}[];
	/** Generic single indicator: label the ruler pKIn − 2 … pKIn + 2. */
	generic?: boolean;
	equationAt?: number;
	rangeAt?: number | number[];
	/** Amber flag on one tube at a moment (e.g. phenolphthalein at pH 7). */
	flag?: {index: number; at: number; text: string};
	delay?: number;
};

const ID = 'c12m6ind';
const W = 760;
const H = 530;

/** Fraction in the base form; lo/hi are where the eye sees the change (ratio 1:10 and 10:1). */
const colorAt = (ind: IndicatorSpec, f: number) =>
	ind.midColor ? (f < 0.5 ? mix(ind.acidColor, ind.midColor, f * 2) : mix(ind.midColor, ind.baseColor, (f - 0.5) * 2)) : mix(ind.acidColor, ind.baseColor, f);

const fracBase = (pH: number, lo: number, hi: number) => {
	const pK = (lo + hi) / 2;
	return 1 / (1 + 10 ** ((pK - pH) * (2 / (hi - lo))));
};

export const IndicatorDiagram = ({indicators, sweep, generic = false, equationAt = 0, rangeAt, flag, delay = 62}: IndicatorProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pH = sweep.length === 1 ? sweep[0].pH : interpolate(frame, sweep.map((k) => k.at), sweep.map((k) => k.pH), clamp);
	const single = indicators.length === 1;
	const pMin = generic ? 5 : 0, pMax = generic ? 9 : 14;
	const X0 = 70, X1 = 690;
	const RY = single ? 400 : 330;
	const px = (p: number) => X0 + ((p - pMin) / (pMax - pMin)) * (X1 - X0);
	const tickLabel = (p: number) => (generic ? (p === 7 ? 'pKIn' : `pKIn ${p < 7 ? '−' : '+'} ${Math.abs(p - 7)}`) : String(p));
	const ticks = generic ? [5, 6, 7, 8, 9] : [0, 2, 4, 6, 7, 8, 10, 12, 14];

	const ruler = (
		<g opacity={fadeAt(frame, 0, 14)}>
			<defs>
				<linearGradient id={`${ID}-ruler`} x1="0" x2="1" y1="0" y2="0">
					{Array.from({length: 11}, (_, i) => {
						const p = pMin + ((pMax - pMin) * i) / 10;
						const c = single ? colorAt(indicators[0], fracBase(p, indicators[0].lo, indicators[0].hi)) : phColor(p);
						return <stop key={i} offset={`${i * 10}%`} stopColor={c} />;
					})}
				</linearGradient>
			</defs>
			<rect x={X0 - 16} y={RY + 24} width={X1 - X0 + 32} height={16} rx={6} fill="#bdb8ae" />
			<rect x={X0} y={RY} width={X1 - X0} height={26} rx={8} fill={`url(#${ID}-ruler)`} stroke="rgba(0,0,0,0.2)" />
			{ticks.map((p) => (
				<text key={p} x={px(p)} y={RY + 62} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{tickLabel(p)}</text>
			))}
			{!generic && <text x={X0 - 14} y={RY + 19} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>pH</text>}
			{/* needle */}
			<g transform={`translate(${px(pH)},0)`}>
				<path d={`M 0 ${RY + 2} L -10 ${RY - 20} L 10 ${RY - 20} Z`} fill={TOK.ink} />
				<rect x={-34} y={RY - 52} width={68} height={30} rx={15} fill={TOK.ink} />
				<text y={RY - 31} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800}>
					{generic ? (Math.abs(pH - 7) < 0.05 ? 'pKIn' : `${pH < 7 ? '−' : '+'}${Math.abs(pH - 7).toFixed(1)}`) : `pH ${pH.toFixed(1)}`}
				</text>
			</g>
		</g>
	);

	if (single) {
		const ind = indicators[0];
		const f = fracBase(pH, ind.lo, ind.hi);
		const N = 24;
		const nBase = Math.round(f * N);
		const cx = 380, baseY = 300;
		const liquid = colorAt(ind, f);
		const ratio = f / (1 - f);
		const ratioText = Math.abs(ratio - 1) < 0.05 ? '1 : 1' : ratio >= 1 ? `1 : ${ratio >= 9.5 ? ratio.toFixed(0) : ratio.toFixed(1)}` : `${(1 / ratio) >= 9.5 ? (1 / ratio).toFixed(0) : (1 / ratio).toFixed(1)} : 1`;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Indicator equilibrium: colour follows pH" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={{a: ind.acidColor, b: ind.baseColor}} />
				<g opacity={fadeAt(frame, equationAt)}>
					<text x={W / 2} y={40} textAnchor="middle" fontSize={30} fontWeight={800}>
						<tspan fill={ind.acidColor}>{ind.acidName ?? 'HIn'}</tspan>
						<tspan fill={TOK.inkDim}> ⇌ H⁺ + </tspan>
						<tspan fill={ind.baseColor}>{ind.baseName ?? 'In⁻'}</tspan>
					</text>
					<text x={W / 2} y={68} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>acid colour ⇌ base colour</text>
				</g>
				<DioramaPlinth id={ID} cx={cx} cy={baseY + 12} rx={150} />
				{/* conical flask */}
				<path d={`M ${cx - 26} 96 L ${cx - 26} 150 L ${cx - 110} ${baseY - 6} Q ${cx - 116} ${baseY + 4} ${cx - 102} ${baseY + 4} L ${cx + 102} ${baseY + 4} Q ${cx + 116} ${baseY + 4} ${cx + 110} ${baseY - 6} L ${cx + 26} 150 L ${cx + 26} 96`} fill="rgba(220,236,246,0.3)" stroke="rgba(70,90,110,0.55)" strokeWidth={3} strokeLinejoin="round" />
				<path d={`M ${cx - 62} 214 L ${cx - 110} ${baseY - 6} Q ${cx - 116} ${baseY + 4} ${cx - 102} ${baseY + 4} L ${cx + 102} ${baseY + 4} Q ${cx + 116} ${baseY + 4} ${cx + 110} ${baseY - 6} L ${cx + 62} 214 Z`} fill={liquid} opacity={0.55} />
				{Array.from({length: N}, (_, i) => {
					const u = hash01(i * 3 + 1), v = hash01(i * 5 + 2);
					const yy = 228 + v * 60;
					const half = 62 + ((yy - 214) / (baseY - 6 - 214)) * 44 - 16;
					const x = cx + (u - 0.5) * 2 * half + idleBob(frame, i, 2);
					const isBase = i < nBase;
					return <circle key={i} cx={x} cy={yy + idleBob(frame, i + 30, 1.6)} r={9} fill={`url(#${ID}-g-${isBase ? 'b' : 'a'})`} stroke="rgba(0,0,0,0.25)" />;
				})}
				<text x={cx + 160} y={190} fill={TOK.ink} fontSize={19} fontWeight={800}>[HIn] : [In⁻]</text>
				<text x={cx + 160} y={222} fill={TOK.ink} fontSize={28} fontWeight={800}>{ratioText}</text>
				<text x={cx - 160} y={206} textAnchor="end" fill={f < 0.5 ? ind.acidColor : ind.baseColor} fontSize={19} fontWeight={800}>
					{f < 0.09 ? 'acid colour' : f > 0.91 ? 'base colour' : 'changing'}
				</text>
				{ruler}
				{rangeAt !== undefined && (
					<g opacity={fadeAt(frame, Array.isArray(rangeAt) ? rangeAt[0] : rangeAt)}>
						<path d={`M ${px(ind.lo)} ${RY + 78} L ${px(ind.lo)} ${RY + 90} L ${px(ind.hi)} ${RY + 90} L ${px(ind.hi)} ${RY + 78}`} fill="none" stroke={TOK.amber} strokeWidth={3} />
						<text x={(px(ind.lo) + px(ind.hi)) / 2} y={RY + 116} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>{ind.rangeText ?? 'visible change: about two pH units'}</text>
					</g>
				)}
			</svg>
		);
	}

	// Rack of tubes
	const n = indicators.length;
	const tx = (i: number) => W / 2 + (i - (n - 1) / 2) * 200;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Three indicators and their colour-change ranges" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{/* stone rack */}
			<rect x={80} y={236} width={600} height={20} rx={8} fill="#bdb8ae" />
			<rect x={80} y={250} width={600} height={10} rx={5} fill="#8f8b83" />
			{indicators.map((ind, i) => {
				const f = fracBase(pH, ind.lo, ind.hi);
				const c = colorAt(ind, f);
				const x = tx(i);
				const flagOn = flag && flag.index === i ? fadeAt(frame, flag.at) : 0;
				return (
					<g key={i} opacity={fadeAt(frame, 4 + i * 6)}>
						<rect x={x - 22} y={52} width={44} height={188} rx={22} fill="rgba(220,236,246,0.45)" stroke={flagOn > 0 ? TOK.amber : 'rgba(70,90,110,0.55)'} strokeWidth={flagOn > 0 ? 3 + idlePulse(frame) : 2.5} />
						<rect x={x - 18} y={110} width={36} height={126} rx={18} fill={c} opacity={0.9} />
						<rect x={x - 12} y={64} width={6} height={150} rx={3} fill="#ffffff" opacity={0.45} />
						<text x={x} y={30} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{ind.name}</text>
						{flagOn > 0 && <text x={x} y={290} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={flagOn}>{flag!.text}</text>}
						{/* range band under the ruler */}
						<g opacity={fadeAt(frame, Array.isArray(rangeAt) ? rangeAt[i] ?? 0 : (rangeAt ?? 0) + i * 20)}>
							<rect x={px(ind.lo)} y={RY + 80 + i * 36} width={px(ind.hi) - px(ind.lo)} height={24} rx={6} fill={`url(#${ID}-band${i})`} stroke="rgba(0,0,0,0.2)" />
							<defs>
								<linearGradient id={`${ID}-band${i}`} x1="0" x2="1" y1="0" y2="0">
									<stop offset="0%" stopColor={ind.acidColor} />
									{ind.midColor && <stop offset="50%" stopColor={ind.midColor} />}
									<stop offset="100%" stopColor={ind.baseColor} />
								</linearGradient>
							</defs>
							<text x={px(ind.hi) + 10} y={RY + 98 + i * 36} fill={TOK.ink} fontSize={16} fontWeight={800}>{ind.name} {ind.rangeText ?? `${ind.lo}–${ind.hi}`}</text>
						</g>
					</g>
				);
			})}
			{ruler}
		</svg>
	);
};
