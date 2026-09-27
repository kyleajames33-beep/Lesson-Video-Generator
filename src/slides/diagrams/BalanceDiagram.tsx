// BalanceDiagram — a two-pan balance on a plinth. The left pan fills with
// glossy carbon atoms (tipping the beam), then a brass weight lands on the
// right pan and the beam swings to rest at the tilt set by the values (equal
// values = level). Used for "1 mol C-12 atoms balances exactly 12.000 g".
//
// Props are unchanged: leftLabel / rightLabel caption each pan, leftValue /
// rightValue set the final tilt (they are weights, not captions, so they are
// no longer printed above the labels: "1" over "12.000 g" read as a wrong
// value). The callout reads "exactly <rightLabel>".
//
// Diorama restyle: brass-and-wood balance on a plinth, hanging pans that stay
// level while the beam tilts, and a gentle idle sway after it settles.
//
// Timing: `delay` (default 0) is now a floor under the card reveal: the build
// starts at max(delay, 62). The one lesson (Chem Y11 M2 L1 concept-carbon12)
// reaches "one mole of carbon-twelve atoms weighs exactly twelve grams" about
// 20 s in, so the atoms land then; until then the empty balance sways.
// Beat plan (frames after the start):
//   0    plinth, stand, empty beam
//   560  atoms pour onto the left pan, the beam tips left
//   630  the weight drops onto the right pan, the beam swings to its tilt
//   690  "exactly 12.000 g" callout (amber) breathes during the hold

import type {ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, Molecule, idlePulse} from './diorama';
import {clamp, fadeAt} from './kinds/restyle-chem-specials/props';

type Props = {leftLabel: string; rightLabel: string; leftValue: number; rightValue: number; delay?: number};

const ID = 'bal';
const W = 760;
const PX = 380, PY = 150; // pivot
const ARM = 220;
const ROPE = 70;
const PLINTH_Y = 432;
const ATOMS_AT = 560, WEIGHT_AT = 630, CALLOUT_AT = 690;

// A heap of 11 carbon atoms (a model: a real mole is 6.022 × 10²³ of them) on the pan (relative to the pan centre).
const HEAP = [
	{x: -50, y: -6}, {x: -25, y: -4}, {x: 0, y: -3}, {x: 25, y: -4}, {x: 50, y: -6},
	{x: -37, y: -27}, {x: -12, y: -26}, {x: 12, y: -26}, {x: 37, y: -27},
	{x: -12, y: -47}, {x: 12, y: -47},
];

export const BalanceDiagram = ({leftLabel, rightLabel, leftValue, rightValue, delay = 0}: Props) => {
	const start = Math.max(delay, 62);
	const frame = useCurrentFrame() - start;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + start);

	const total = leftValue + rightValue;
	const tiltTarget = total > 0 ? ((rightValue - leftValue) / total) * 12 : 0;
	const atomsIn = (i: number) => Math.max(0, spring({frame: frame - ATOMS_AT - i * 3, fps, config: {damping: 12, stiffness: 200, mass: 0.6}}));
	const leftLoad = spring({frame: frame - ATOMS_AT - 10, fps, config: {damping: 9, stiffness: 60, mass: 1.2}});
	const weightDrop = spring({frame: frame - WEIGHT_AT, fps, config: {damping: 14, stiffness: 170, mass: 0.8}});
	const settle = spring({frame: frame - WEIGHT_AT - 8, fps, config: {damping: 7, stiffness: 50, mass: 1.3}});
	// Beam tilt: level (empty) → tips left as atoms land → swings to the target as the weight lands.
	const sway = Math.sin((frame + start) / 38) * 0.8;
	const tilt = interpolate(leftLoad, [0, 1], [0, -12]) * (1 - settle) + tiltTarget * settle + sway;
	const rad = (tilt * Math.PI) / 180;
	const end = (s: -1 | 1) => ({x: PX + s * ARM * Math.cos(rad), y: PY + s * ARM * Math.sin(rad)});
	const L = end(-1), R = end(1);
	const callout = fadeAt(frame, CALLOUT_AT, 16);

	const pan = (p: {x: number; y: number}, children: ReactNode) => {
		const cy = p.y + ROPE;
		return (
			<g>
				<path d={`M ${p.x} ${p.y + 6} L ${p.x - 60} ${cy} M ${p.x} ${p.y + 6} L ${p.x + 60} ${cy}`} stroke="#8a6a3a" strokeWidth={2.5} />
				{children}
				<path d={`M ${p.x - 72} ${cy} Q ${p.x} ${cy + 34} ${p.x + 72} ${cy} Z`} fill={`url(#${ID}-brass)`} stroke="#8a6420" strokeWidth={2} />
				<ellipse cx={p.x} cy={cy} rx={72} ry={7} fill="#e6c77a" stroke="#8a6420" strokeWidth={1.5} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 80 ${W} 440`} role="img" aria-label={`Balance: ${leftLabel} against ${rightLabel}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['C']} />
			<defs>
				<linearGradient id={`${ID}-brass`} x1="0" x2="1">
					<stop offset="0%" stopColor="#b8862e" />
					<stop offset="35%" stopColor="#f1d27e" />
					<stop offset="100%" stopColor="#9c6f22" />
				</linearGradient>
				<linearGradient id={`${ID}-wood`} x1="0" x2="1">
					<stop offset="0%" stopColor="#7a4f2c" />
					<stop offset="45%" stopColor="#a8743f" />
					<stop offset="100%" stopColor="#6a4224" />
				</linearGradient>
			</defs>

			<g opacity={fadeAt(frame, -start, 16)}>
				<DioramaPlinth id={ID} cx={PX} cy={PLINTH_Y} rx={150}>
					<ellipse cx={PX} cy={PLINTH_Y} rx={70} ry={14} fill="#6a4224" />
					<rect x={PX - 60} y={PLINTH_Y - 22} width={120} height={22} rx={6} fill={`url(#${ID}-wood)`} />
					<rect x={PX - 9} y={PY} width={18} height={PLINTH_Y - PY - 20} rx={5} fill={`url(#${ID}-brass)`} />
				</DioramaPlinth>

				{/* left pan: carbon-12 atoms */}
				{pan(L, HEAP.map((h, i) => {
					const s = atomsIn(i);
					return <Molecule key={i} id={ID} atoms={['C']} x={L.x + h.x} y={L.y + ROPE + h.y - 8 - (1 - Math.min(1, s)) * 60} r={13} scale={Math.min(1, s)} opacity={s > 0.02 ? 1 : 0} />;
				}))}
				{/* right pan: brass weight */}
				{pan(R, (
					<g opacity={interpolate(weightDrop, [0, 0.2], [0, 1], clamp)} transform={`translate(0, ${(1 - Math.min(1, Math.max(0, weightDrop))) * -80})`}>
						<rect x={R.x - 34} y={R.y + ROPE - 52} width={68} height={48} rx={6} fill={`url(#${ID}-brass)`} stroke="#8a6420" strokeWidth={2} />
						<ellipse cx={R.x} cy={R.y + ROPE - 52} rx={34} ry={7} fill="#f3dc95" stroke="#8a6420" strokeWidth={1.5} />
						<rect x={R.x - 10} y={R.y + ROPE - 68} width={20} height={14} rx={4} fill={`url(#${ID}-brass)`} stroke="#8a6420" strokeWidth={1.5} />
					</g>
				))}

				{/* beam (drawn over the pan hangers) */}
				<g transform={`rotate(${tilt} ${PX} ${PY})`}>
					<rect x={PX - ARM - 12} y={PY - 8} width={(ARM + 12) * 2} height={16} rx={8} fill={`url(#${ID}-wood)`} />
					<circle cx={PX - ARM} cy={PY} r={6} fill="#8a6420" />
					<circle cx={PX + ARM} cy={PY} r={6} fill="#8a6420" />
					<path d={`M ${PX} ${PY - 8} l -8 -24 l 16 0 Z`} fill={`url(#${ID}-brass)`} />
				</g>
				<circle cx={PX} cy={PY} r={13} fill={`url(#${ID}-brass)`} stroke="#8a6420" strokeWidth={2} />
			</g>

			{/* pan captions */}
			<text x={L.x} y={L.y + ROPE + 66} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={fadeAt(frame, ATOMS_AT + 20)}>{leftLabel}</text>
			<text x={R.x} y={R.y + ROPE + 66} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={fadeAt(frame, WEIGHT_AT + 20) * (1 - callout)}>{rightLabel}</text>

			{/* callout */}
			<g opacity={callout}>
				<ellipse cx={R.x} cy={R.y + ROPE - 18} rx={96 + pulse * 4} ry={62 + pulse * 3} fill="none" stroke={TOK.amber} strokeWidth={3.5} strokeDasharray="7 6" />
				<rect x={R.x - 116} y={R.y + ROPE + 84} width={232} height={50} rx={25} fill="#fff8e8" stroke={TOK.amber} strokeWidth={3} />
				<text x={R.x} y={R.y + ROPE + 118} textAnchor="middle" fill={TOK.amberInk} fontSize={27} fontWeight={800}>exactly {rightLabel}</text>
			</g>
		</svg>
	);
};
