// ActivationDiagram (bio11m1bActivation) — an energy profile with and without
// an enzyme.
//
// Both paths start at the same substrate level and finish at the same product
// level (the enzyme does not change the products or the overall energy
// change). Without the enzyme (dashed) the hump is high; with it (solid, the
// accent) the hump is lower. Eₐ arrows are measured from the substrate level to
// each peak, so the "lower activation energy" is a drawn fact, not a claim.
// A row of substrate molecules with fixed, different energies sits on a stone
// ledge: with the high barrier only one of them has enough energy to get over;
// with the enzyme's lower barrier, three of the four do (counts computed from the
// fixed energies against the two barrier heights).
//
// Props: `at` (frames after `delay`): axes / without / eaHigh / withEnzyme /
// eaLow / molecules / same / rule; `rule` text.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {fadeAt, ease, CORAL, Ledge, Verdict} from './shared';

export type ActivationProps = {
	at?: {axes?: number; without?: number; eaHigh?: number; withEnzyme?: number; eaLow?: number; molecules?: number; same?: number; rule?: number};
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bAct';
const W = 760, H = 530;
const GX0 = 80, GX1 = 520;
const YS = 300, YP = 360; // substrate and product levels
const PEAK_HI = 90, PEAK_LO = 210;
// Molecule energies as heights above the substrate level (px).
const ENERGIES = [70, 110, 150, 230];

const smooth = (t: number) => t * t * (3 - 2 * t);
const yAt = (u: number, peak: number) => {
	const base = YS + (YP - YS) * smooth(Math.max(0, Math.min(1, (u - 0.3) / 0.4)));
	const mid = (YS + YP) / 2;
	return base - (mid - peak) * Math.exp(-(((u - 0.5) / 0.14) ** 2));
};
const xAt = (u: number) => GX0 + u * (GX1 - GX0);
const path = (peak: number, upto = 1) => {
	let d = '';
	for (let i = 0; i <= 90; i++) {
		const u = (i / 90) * upto;
		d += `${i === 0 ? 'M' : ' L'} ${xAt(u).toFixed(1)} ${yAt(u, peak).toFixed(1)}`;
	}
	return d;
};
const peakY = (peak: number) => Math.min(...Array.from({length: 101}, (_, i) => yAt(i / 100, peak)));

export const ActivationDiagram = ({at = {}, rule, delay = 62}: ActivationProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tAx = at.axes ?? 10, tW = at.without ?? 60, tHi = at.eaHigh ?? 140, tE = at.withEnzyme ?? 220, tLo = at.eaLow ?? 300, tM = at.molecules ?? 380, tSame = at.same ?? 460, tR = at.rule ?? 540;
	const pulse = idlePulse(frame, 48);
	const hiTop = peakY(PEAK_HI), loTop = peakY(PEAK_LO);
	const barrierHi = YS - hiTop, barrierLo = YS - loTop;
	const overHi = ENERGIES.filter((e) => e >= barrierHi).length;
	const overLo = ENERGIES.filter((e) => e >= barrierLo).length;
	const enzymeOn = frame >= tE;
	const passes = (e: number) => e >= (enzymeOn ? barrierLo : barrierHi);
	const uPeak = 0.5;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Energy profile: an enzyme lowers the activation energy; substrate and product levels are unchanged" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{/* axes */}
			<g opacity={fadeAt(frame, tAx)}>
				<line x1={GX0 - 20} y1={YP + 50} x2={GX0 - 20} y2={40} stroke={TOK.inkMute} strokeWidth={2.5} />
				<path d={`M ${GX0 - 28} 48 L ${GX0 - 20} 32 L ${GX0 - 12} 48 Z`} fill={TOK.inkMute} />
				<line x1={GX0 - 20} y1={YP + 50} x2={GX1 + 10} y2={YP + 50} stroke={TOK.inkMute} strokeWidth={2.5} />
				<text x={GX0 - 30} y={30} fill={TOK.inkDim} fontSize={16} fontWeight={800}>energy</text>
				<text x={GX1 + 6} y={YP + 76} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>reaction progress →</text>
				<text x={GX0 - 8} y={YS + 24} fill={TOK.ink} fontSize={16} fontWeight={800}>substrate</text>
				<text x={GX1} y={YP + 26} textAnchor="end" fill={TOK.ink} fontSize={16} fontWeight={800}>product</text>
			</g>
			{/* without enzyme */}
			<path d={path(PEAK_HI, ease(frame, tW, tW + 50))} fill="none" stroke={TOK.inkDim} strokeWidth={4} strokeDasharray="10 8" opacity={frame >= tW ? 1 : 0} />
			<text x={xAt(uPeak) + 20} y={hiTop - 8} fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tW + 40)}>without enzyme</text>
			{/* with enzyme */}
			<path d={path(PEAK_LO, ease(frame, tE, tE + 50))} fill="none" stroke={theme.accent} strokeWidth={6} opacity={frame >= tE ? 1 : 0} />
			<text x={xAt(uPeak) + 64} y={loTop - 14} fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tE + 40)}>with enzyme</text>
			{/* substrate level guide */}
			<line x1={GX0} y1={YS} x2={xAt(0.66)} y2={YS} stroke={TOK.rule} strokeWidth={2} strokeDasharray="4 5" opacity={fadeAt(frame, tHi)} />
			{/* Eₐ arrows: from the substrate level up to each peak's height, drawn left of the hump with a guide to the peak */}
			{(() => {
				const xh = xAt(0.17), xl = xAt(0.26);
				return (
					<>
						<g opacity={fadeAt(frame, tHi)}>
							<line x1={xh} y1={hiTop} x2={xAt(0.5)} y2={hiTop} stroke={TOK.inkDim} strokeWidth={1.5} strokeDasharray="3 4" />
							<line x1={xh} y1={YS} x2={xh} y2={hiTop + 10} stroke={TOK.inkDim} strokeWidth={3} />
							<path d={`M ${xh - 7} ${hiTop + 14} L ${xh} ${hiTop} L ${xh + 7} ${hiTop + 14} Z`} fill={TOK.inkDim} />
							<text x={xh - 10} y={(YS + hiTop) / 2} textAnchor="end" fill={TOK.inkDim} fontSize={18} fontWeight={800}>Eₐ</text>
						</g>
						<g opacity={fadeAt(frame, tLo)}>
							<line x1={xl} y1={loTop} x2={xAt(0.5)} y2={loTop} stroke={TOK.amber} strokeWidth={1.5} strokeDasharray="3 4" />
							<line x1={xl} y1={YS} x2={xl} y2={loTop + 10} stroke={TOK.amber} strokeWidth={4} />
							<path d={`M ${xl - 8} ${loTop + 14} L ${xl} ${loTop} L ${xl + 8} ${loTop + 14} Z`} fill={TOK.amber} />
							<text x={xl + 10} y={loTop - 8} fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={0.8 + 0.2 * pulse}>lower Eₐ</text>
						</g>
					</>
				);
			})()}

			{/* molecules on a ledge: which have enough energy to get over? */}
			<g opacity={fadeAt(frame, tM)}>
				<Ledge x={560} y={YP + 30} w={180} />
				<text x={650} y={YP + 80} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>substrate molecules</text>
				{ENERGIES.map((e, i) => {
					const ok = passes(e);
					const x = 580 + i * 46;
					const barH = e;
					return (
						<g key={i}>
							<rect x={x - 8} y={YP + 26 - barH} width={16} height={barH} rx={8} fill={ok ? theme.accent : '#d6d3cc'} opacity={0.5} />
							<circle cx={x} cy={YP + 16 + idleBob(frame, i, 1.4)} r={12} fill={CORAL} stroke="rgba(0,0,0,0.3)" />
							<Verdict x={x} y={YP + 8 - barH} ok={ok} r={10} />
						</g>
					);
				})}
				{/* the two barrier heights on the same scale */}
				<line x1={562} y1={YP + 26 - barrierHi} x2={738} y2={YP + 26 - barrierHi} stroke={TOK.inkDim} strokeWidth={2} strokeDasharray="6 5" />
				<line x1={562} y1={YP + 26 - barrierLo} x2={738} y2={YP + 26 - barrierLo} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 5" opacity={fadeAt(frame, tE)} />
				<text x={650} y={62} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{enzymeOn ? overLo : overHi} of {ENERGIES.length} can react</text>
				<text x={650} y={84} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{enzymeOn ? 'with the enzyme' : 'without the enzyme'}</text>
			</g>
			<text x={GX0 + 190} y={YP + 104} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tSame)}>same start, same products: only the barrier is lower</text>
			{rule && <text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text>}
		</svg>
	);
};
