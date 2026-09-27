// BoltzmannDistributionDiagram — Maxwell-Boltzmann distributions of molecular
// kinetic energy at a lower and a higher temperature, with the activation
// energy marked. The shaded tails past Eₐ are the molecules energetic enough
// to react: the hotter tail (amber, the key point) is clearly bigger.
//
// Fix (v2): the curves are now normalised. f(E) = 2·√(E/π)·T^(−3/2)·e^(−E/T),
// so both enclose the SAME area (same number of molecules): the hotter curve
// peaks LOWER and further right and spreads out. The old unnormalised curve
// drew the hot curve taller everywhere, which is the classic exam mistake.
// The shaded areas were also the whole curve, not the tail past Eₐ.
//
// Diorama restyle: painted gradient fills, self-drawing curves, and a gentle
// breathing highlight on the hot tail and the Eₐ line for the hold.
//
// Props are unchanged. Timing: `delay` is now a floor under the card reveal:
// the build starts at max(delay, 90).
// Beat plan (frames after the start):
//   0     axes
//   20    lower-T curve draws; 60 higher-T curve draws
//   110   Eₐ line; 150 the tails past Eₐ fill in
//   200   "more molecules have E ≥ Eₐ" label

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {idlePulse} from './diorama';
import {ArrowHead, clamp, drawProps, fadeAt} from './kinds/restyle-chem-specials/props';

type Props = {
	temperatureLow: number;
	temperatureHigh: number;
	activationEnergy: number;
	delay?: number;
};

const ID = 'mb';
const W = 760;
const PX = 100, PY = 70, PW = 600, PH = 320;
const LOW = '#2f9e84';
const HIGH = '#3f6fd8';

// Normalised Maxwell-Boltzmann energy distribution (k = 1 units).
const mb = (E: number, T: number) => (E <= 0 ? 0 : 2 * Math.sqrt(E / Math.PI) * Math.pow(T, -1.5) * Math.exp(-E / T));

export const BoltzmannDistributionDiagram = ({temperatureLow, temperatureHigh, activationEnergy, delay = 0}: Props) => {
	const start = Math.max(delay, 90);
	const frame = useCurrentFrame() - start;
	const pulse = idlePulse(frame + start);

	const eMax = Math.max(activationEnergy * 2.2, temperatureHigh * 3);
	const steps = 160;
	const yMax = Math.max(mb(temperatureLow / 2, temperatureLow), mb(temperatureHigh / 2, temperatureHigh)) * 1.12;
	const xOf = (E: number) => PX + (E / eMax) * PW;
	const yOf = (v: number) => PY + PH - (v / yMax) * PH;
	const curve = (T: number) => Array.from({length: steps + 1}, (_, i) => (i / steps) * eMax).map((E, i) => `${i ? 'L' : 'M'} ${xOf(E).toFixed(1)} ${yOf(mb(E, T)).toFixed(1)}`).join(' ');
	const tail = (T: number) => {
		const pts = Array.from({length: 81}, (_, i) => activationEnergy + (i / 80) * (eMax - activationEnergy));
		return `M ${xOf(activationEnergy)} ${yOf(0)} ${pts.map((E) => `L ${xOf(E).toFixed(1)} ${yOf(mb(E, T)).toFixed(1)}`).join(' ')} L ${xOf(eMax)} ${yOf(0)} Z`;
	};

	const drawLow = interpolate(frame, [20, 70], [0, 1], clamp);
	const drawHigh = interpolate(frame, [60, 110], [0, 1], clamp);
	const eaIn = fadeAt(frame, 110, 14);
	const tails = fadeAt(frame, 150, 20);
	const note = fadeAt(frame, 200, 16);
	const xEa = xOf(activationEnergy);

	return (
		<svg viewBox={`0 0 ${W} 500`} role="img" aria-label="Maxwell-Boltzmann distribution at two temperatures: more molecules exceed the activation energy at the higher temperature" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-low`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={LOW} stopOpacity={0.45} />
					<stop offset="100%" stopColor={LOW} stopOpacity={0.12} />
				</linearGradient>
				<linearGradient id={`${ID}-high`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={TOK.amber} stopOpacity={0.75} />
					<stop offset="100%" stopColor={TOK.amber} stopOpacity={0.3} />
				</linearGradient>
				<filter id={`${ID}-soft`} x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="3" /></filter>
			</defs>

			{/* painted backing card */}
			<rect x={PX - 20} y={PY - 30} width={PW + 40} height={PH + 50} rx={18} fill="#ffffff" opacity={0.65} />

			{/* axes */}
			<g opacity={fadeAt(frame, -start, 16)}>
				<line x1={PX} y1={PY + PH} x2={PX + PW + 10} y2={PY + PH} stroke={TOK.inkMute} strokeWidth={3} />
				<line x1={PX} y1={PY + PH} x2={PX} y2={PY - 14} stroke={TOK.inkMute} strokeWidth={3} />
				<ArrowHead x={PX + PW + 20} y={PY + PH} angleDeg={0} size={14} fill={TOK.inkMute} />
				<ArrowHead x={PX} y={PY - 22} angleDeg={-90} size={14} fill={TOK.inkMute} />
				<text x={PX + PW / 2} y={PY + PH + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700}>kinetic energy →</text>
				<text x={PX - 26} y={PY + PH / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700} transform={`rotate(-90 ${PX - 26} ${PY + PH / 2})`}>number of molecules</text>
			</g>

			{/* tails past Eₐ (behind the curve lines) */}
			<g opacity={tails}>
				<path d={tail(temperatureHigh)} fill={`url(#${ID}-high)`} opacity={0.8 + pulse * 0.2} />
				<path d={tail(temperatureLow)} fill={`url(#${ID}-low)`} />
			</g>

			{/* soft painted shadow under each curve, then the curves */}
			<path d={curve(temperatureLow)} fill="none" stroke={LOW} strokeWidth={9} opacity={0.18} filter={`url(#${ID}-soft)`} {...drawProps(drawLow)} />
			<path d={curve(temperatureLow)} fill="none" stroke={LOW} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" {...drawProps(drawLow)} />
			<path d={curve(temperatureHigh)} fill="none" stroke={HIGH} strokeWidth={9} opacity={0.18} filter={`url(#${ID}-soft)`} {...drawProps(drawHigh)} />
			<path d={curve(temperatureHigh)} fill="none" stroke={HIGH} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" {...drawProps(drawHigh)} />

			{/* legend (top right, clear of the peaks and the Eₐ line) */}
			<g opacity={fadeAt(frame, 60)}>
				<line x1={560} y1={PY + 8} x2={596} y2={PY + 8} stroke={LOW} strokeWidth={5} strokeLinecap="round" />
				<text x={606} y={PY + 15} fill={LOW} fontSize={21} fontWeight={850}>lower T</text>
			</g>
			<g opacity={fadeAt(frame, 100)}>
				<line x1={560} y1={PY + 40} x2={596} y2={PY + 40} stroke={HIGH} strokeWidth={5} strokeLinecap="round" />
				<text x={606} y={PY + 47} fill={HIGH} fontSize={21} fontWeight={850}>higher T</text>
			</g>

			{/* Eₐ line */}
			<g opacity={eaIn}>
				<line x1={xEa} y1={PY - 6} x2={xEa} y2={PY + PH} stroke={TOK.ink} strokeWidth={3 + pulse} strokeDasharray="9 7" />
				<text x={xEa} y={PY - 14} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={850}>Eₐ</text>
			</g>

			<g opacity={note}>
				<rect x={xEa + 18} y={PY + 84} width={250} height={64} rx={12} fill="#fff8e8" stroke={TOK.amber} strokeWidth={2.5} />
				<text x={xEa + 143} y={PY + 110} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={850}>higher T: more molecules</text>
				<text x={xEa + 143} y={PY + 134} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={850}>have E ≥ Eₐ</text>
			</g>
			<text x={W / 2} y={490} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={note}>same number of molecules: the hotter curve is flatter and wider</text>
		</svg>
	);
};
