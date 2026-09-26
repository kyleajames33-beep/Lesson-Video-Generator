// EnergyProfileDiagram — an energy profile drawn TO SCALE from its props:
// reactant level, a barrier Eₐ above it, and a product level ΔH away. Painted
// as a grassy hill the reactants have to climb; a glossy ball rolls over it
// (and, with a catalyst, a second ball takes the lower path) for the hold.
//
// Fixes (v2): the old profile drew the peak at a fixed height whatever Eₐ was,
// measured "Eₐ" upward from the peak instead of from the reactants to the
// peak, and used dark-theme colours that nearly vanished on the light card.
// Eₐ is now an arrow from the reactant level to the peak, ΔH an arrow from
// the reactant level to the product level, and both are to scale.
//
// With showCatalyst the catalysed path peaks lower (no value is given, so
// none is printed) and reaches the SAME products: ΔH is unchanged.
// Amber marks the one key thing: ΔH without a catalyst, the lower barrier
// with one.
//
// Props are unchanged. Timing: `delay` is now a floor under the card reveal:
// the build starts at max(delay, 90).
// Beat plan (frames after the start):
//   0     axes
//   20    the profile draws itself (reactants → peak → products)
//   90    Eₐ arrow + value; 130 ΔH arrow + value
//   190   catalysed path draws (if shown); 240 its label
//   260   balls roll over the barrier, repeating

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, idlePulse} from './diorama';
import {ArrowHead, Ball, BallDefs, clamp, drawProps, fadeAt} from './kinds/restyle-chem-specials/props';

type Props = {
	exothermic: boolean;
	ea: number;
	deltaH: number;
	showCatalyst?: boolean;
	delay?: number;
};

const ID = 'eprof';
const W = 760;
const X0 = 110, X1 = 700, Y_TOP = 108, Y_BOT = 380, AXIS_Y = 424;
const CAT = '#3f6fd8';
const DH_X = 592; // ΔH arrow sits over the product plateau

// Smooth profile: flat, rise to the peak at s = 0.5, fall, flat.
const profile = (s: number, r: number, peak: number, p: number) => {
	if (s <= 0.2) return r;
	if (s <= 0.5) return r + (peak - r) * (1 - Math.cos((Math.PI * (s - 0.2)) / 0.3)) / 2;
	if (s <= 0.8) return p + (peak - p) * (1 + Math.cos((Math.PI * (s - 0.5)) / 0.3)) / 2;
	return p;
};

const kj = (v: number) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v)} kJ mol⁻¹`;

export const EnergyProfileDiagram = ({exothermic, ea, deltaH, showCatalyst = false, delay = 0}: Props) => {
	const start = Math.max(delay, 90);
	const frame = useCurrentFrame() - start;
	const pulse = idlePulse(frame + start);

	// Energies relative to the reactants (= 0). If the sign of deltaH and the
	// exothermic flag ever disagree, the flag wins on direction, deltaH on size.
	const dH = exothermic ? -Math.abs(deltaH) : Math.abs(deltaH);
	const peak = Math.max(ea, dH + 1);
	const catPeak = Math.max(0, dH) + (peak - Math.max(0, dH)) * 0.45;
	const eHi = peak, eLo = Math.min(0, dH);
	const yOf = (e: number) => Y_BOT - ((e - eLo) / (eHi - eLo)) * (Y_BOT - Y_TOP);
	const xOf = (s: number) => X0 + s * (X1 - X0);
	const path = (pk: number) => Array.from({length: 81}, (_, i) => i / 80).map((s, i) => `${i ? 'L' : 'M'} ${xOf(s).toFixed(1)} ${yOf(profile(s, 0, pk, dH)).toFixed(1)}`).join(' ');
	const main = path(peak);
	const hill = `${main} L ${X1} ${AXIS_Y} L ${X0} ${AXIS_Y} Z`;

	const draw = interpolate(frame, [20, 80], [0, 1], clamp);
	const catDraw = interpolate(frame, [190, 240], [0, 1], clamp);
	const eaIn = fadeAt(frame, 90, 14), dhIn = fadeAt(frame, 130, 14), catIn = fadeAt(frame, 240, 14);

	const yR = yOf(0), yP = yOf(dH), yPk = yOf(peak), yCat = yOf(catPeak);
	const xPk = xOf(0.5);

	// Rolling balls (loop).
	const cyc = frame < 260 ? -1 : (frame - 260) % 150;
	const u = cyc < 0 ? 0 : Math.min(1, cyc / 110);
	const rollOp = cyc < 0 ? 0 : interpolate(cyc, [0, 8, 118, 140], [0, 1, 1, 0], clamp);
	const ball = (pk: number, lift: number) => ({x: xOf(u), y: yOf(profile(u, 0, pk, dH)) - lift});

	const main1 = ball(peak, 14), cat1 = ball(catPeak, 14);
	const ahIn = showCatalyst ? TOK.ink : TOK.amberInk;

	return (
		<svg viewBox={`0 0 ${W} 500`} role="img" aria-label={`Energy profile: activation energy ${ea} kJ per mol, enthalpy change ${dH} kJ per mol${showCatalyst ? ', with a lower catalysed pathway' : ''}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{m: '#8e5bd6', c: CAT}} />
			<defs>
				<linearGradient id={`${ID}-hill`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#b5d86a" />
					<stop offset="40%" stopColor="#8dbb45" />
					<stop offset="75%" stopColor="#9a6d3f" />
					<stop offset="100%" stopColor="#7a5230" />
				</linearGradient>
				<clipPath id={`${ID}-reveal`}>
					<rect x={X0 - 2} y={0} width={(X1 - X0 + 4) * draw} height={AXIS_Y + 2} />
				</clipPath>
				<clipPath id={`${ID}-reveal-cat`}>
					<rect x={X0 - 8} y={0} width={(X1 - X0 + 16) * catDraw} height={AXIS_Y + 2} />
				</clipPath>
			</defs>

			{/* axes */}
			<g opacity={fadeAt(frame, -start, 16)}>
				<line x1={X0 - 30} y1={AXIS_Y} x2={X1 + 20} y2={AXIS_Y} stroke={TOK.inkMute} strokeWidth={3} />
				<line x1={X0 - 30} y1={AXIS_Y} x2={X0 - 30} y2={52} stroke={TOK.inkMute} strokeWidth={3} />
				<ArrowHead x={X0 - 30} y={46} angleDeg={-90} size={14} fill={TOK.inkMute} />
				<text x={X0 - 52} y={(AXIS_Y + 60) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} transform={`rotate(-90 ${X0 - 52} ${(AXIS_Y + 60) / 2})`}>energy</text>
				<text x={(X0 + X1) / 2} y={AXIS_Y + 34} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700}>reaction progress →</text>
			</g>

			{/* painted hill + profile line */}
			<g clipPath={`url(#${ID}-reveal)`}>
				<path d={hill} fill={`url(#${ID}-hill)`} opacity={0.55} />
			</g>
			<path d={main} fill="none" stroke={TOK.ink} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" {...drawProps(draw)} />
			{showCatalyst ? (
				<path d={path(catPeak)} fill="none" stroke={CAT} strokeWidth={4.5} strokeDasharray="10 8" strokeLinecap="round" opacity={catDraw > 0 ? 1 : 0}
					clipPath={`url(#${ID}-reveal-cat)`} />
			) : null}

			{/* level labels */}
			<g opacity={fadeAt(frame, 40)}>
				<text x={xOf(0.1)} y={yR + 30} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>reactants</text>
				<text x={xOf(0.9)} y={yP + 30} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>products</text>
			</g>

			{/* Eₐ: reactant level → peak */}
			<g opacity={eaIn}>
				<line x1={xOf(0.18)} y1={yR} x2={xPk + 8} y2={yR} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={xPk - 14} y1={yR - 4} x2={xPk - 14} y2={yPk + 14} stroke={TOK.ink} strokeWidth={3} />
				<ArrowHead x={xPk - 14} y={yPk + 4} angleDeg={-90} size={13} fill={TOK.ink} />
				<rect x={xPk - 300} y={(yR + yPk) / 2 - 20} width={196} height={38} rx={10} fill="#ffffff" opacity={0.92} />
				<text x={xPk - 108} y={(yR + yPk) / 2 + 7} textAnchor="end" fill={TOK.ink} fontSize={21} fontWeight={850}>Eₐ = {ea} kJ mol⁻¹</text>
				<line x1={xPk - 104} y1={(yR + yPk) / 2} x2={xPk - 20} y2={(yR + yPk) / 2} stroke={TOK.inkMute} strokeWidth={2} />
			</g>

			{/* ΔH: reactant level → product level */}
			<g opacity={dhIn}>
				<line x1={xPk + 8} y1={yR} x2={DH_X + 10} y2={yR} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={DH_X} y1={yR + (dH < 0 ? 4 : -4)} x2={DH_X} y2={yP + (dH < 0 ? -12 : 12)} stroke={showCatalyst ? TOK.ink : TOK.amber} strokeWidth={showCatalyst ? 3 : 3.5 + pulse * 1.5} />
				<ArrowHead x={DH_X} y={yP + (dH < 0 ? -2 : 2)} angleDeg={dH < 0 ? 90 : -90} size={13} fill={showCatalyst ? TOK.ink : TOK.amber} />
				<rect x={DH_X + 8} y={(yR + yP) / 2 - 34} width={150} height={64} rx={10} fill="#ffffff" opacity={0.92} />
				<text x={DH_X + 16} y={(yR + yP) / 2 - 8} fill={ahIn} fontSize={22} fontWeight={850}>ΔH =</text>
				<text x={DH_X + 16} y={(yR + yP) / 2 + 20} fill={ahIn} fontSize={20} fontWeight={850}>{kj(dH)}</text>
			</g>

			{/* catalyst label */}
			{showCatalyst ? (
				<g opacity={catIn}>
					<line x1={xPk + 14} y1={yR - 4} x2={xPk + 14} y2={yCat + 12} stroke={TOK.amber} strokeWidth={3.5 + pulse * 1.5} />
					<ArrowHead x={xPk + 14} y={yCat + 2} angleDeg={-90} size={13} fill={TOK.amber} />
					{/* label above the plot, joined to the catalysed barrier by a leader line */}
					<line x1={xPk + 14} y1={yCat - 6} x2={xPk + 60} y2={Y_TOP - 32} stroke={TOK.amber} strokeWidth={2} strokeDasharray="4 4" />
					<rect x={xPk + 40} y={Y_TOP - 70} width={236} height={40} rx={10} fill="#fff8e8" stroke={TOK.amber} strokeWidth={2} />
					<text x={xPk + 158} y={Y_TOP - 43} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={850}>catalyst: lower Eₐ</text>
				</g>
			) : null}

			{/* rolling balls */}
			<g opacity={rollOp}>
				<Ball id={ID} fill="m" edge="#8e5bd6" x={main1.x} y={main1.y} r={12} />
				{showCatalyst ? <Ball id={ID} fill="c" edge={CAT} x={cat1.x} y={cat1.y} r={12} /> : null}
			</g>
		</svg>
	);
};
