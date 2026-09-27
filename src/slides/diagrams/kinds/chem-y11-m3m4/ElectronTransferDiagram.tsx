// ElectronTransferDiagram — redox as electrons moving (Chem Y11 M3 L8).
//
// A zinc atom and a copper(II) ion stand on two plinths (the lesson's own
// quick-check reaction, Zn + Cu²⁺ → Zn²⁺ + Cu). Two electrons orbit the zinc.
// On the "two halves" beat they leave, one after the other, and arc across to
// the copper ion. Zinc becomes Zn²⁺ (oxidation number 0 → +2: loses electrons,
// OXIDATION); Cu²⁺ becomes Cu (+2 → 0: gains electrons, REDUCTION). The
// electrons stay amber: they are the thing to track, and they are never lost.
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   transfer 600 · labels 610 / 690 · OIL RIG 930 · LEO GER 1070 · tally 1210

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';

export type ElectronTransferProps = {
	delay?: number;
	/** Frames after delay: [transfer, OIL RIG, LEO GER, tally]. */
	beats?: [number, number, number, number];
};

const ID = 'c11m3etx';
const W = 760;
const PY = 250;
const RX = 140;
const L = 190;
const R = 570;
const AY = PY - 50; // atom centre height

const ease = (t: number) => t * t * (3 - 2 * t);

export const ElectronTransferDiagram = ({delay = 90, beats = [600, 930, 1070, 1210]}: ElectronTransferProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const [tX, tOil, tLeo, tTally] = beats;

	// Each electron's journey: 0 = orbiting Zn, 1 = orbiting Cu.
	const hop = [0, 1].map((k) => ease(interpolate(frame, [tX + k * 28, tX + k * 28 + 60], [0, 1], clamp)));
	// The pair counts as transferred once the second electron is across.
	const moved = hop[1] >= 0.5;
	const znCharge = moved ? '²⁺' : '';
	const oxZn = moved ? '+2' : '0';
	const oxCu = moved ? '0' : '+2';
	const done = hop[1] >= 1;

	const orbit = (cx: number, k: number, r: number) => {
		const th = frame / 16 + k * Math.PI;
		return {x: cx + Math.cos(th) * r, y: AY + Math.sin(th) * r * 0.36, front: Math.sin(th) > 0};
	};
	const electrons = hop.map((h, k) => {
		const a = orbit(L, k, 70), b = orbit(R, k, 66);
		return {x: a.x + (b.x - a.x) * h, y: a.y + (b.y - a.y) * h - Math.sin(h * Math.PI) * 120, front: h > 0.05 && h < 0.95 ? true : h < 0.5 ? a.front : b.front, k};
	});

	const enter = (i: number) => Math.max(0, spring({frame: frame - 6 - i * 6, fps, config: {damping: 12, stiffness: 180, mass: 0.7}}));
	// Zn shrinks a little as it becomes Zn²⁺; Cu²⁺ (blue, aqueous) becomes Cu metal.
	const znR = 46 - 6 * (hop[0] + hop[1]) / 2;
	const cuMorph = ramp(frame, tX + 70, 30);
	const cuR = 40 + 6 * cuMorph;
	const oxLabelsIn = [ramp(frame, tX + 10, 14), ramp(frame, tX + 90, 14)];

	const electron = (e: (typeof electrons)[number]) => (
		<g key={e.k}>
			<circle cx={e.x} cy={e.y} r={15} fill={TOK.amber} opacity={0.18 + 0.12 * idlePulse(frame + e.k * 20, 40)} />
			<Ball id={ID} el="e" x={e.x} y={e.y} r={10} />
		</g>
	);

	const badge = (x: number, text: string, color: string) => (
		<g>
			<rect x={x - 62} y={96} width={124} height={40} rx={20} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
			<text x={x} y={123} textAnchor="middle" fill={color} fontSize={21} fontWeight={800}>ox. no. {text}</text>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Zinc loses two electrons to a copper(II) ion: zinc is oxidised from 0 to +2 and copper is reduced from +2 to 0. Oxidation is loss, reduction is gain." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['Zn', 'Cu', 'CuIon', 'e']} />

			<text x={W / 2} y={40} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={ramp(frame, 0)}>
				Zn + Cu²⁺ → Zn²⁺ + Cu
			</text>

			<g opacity={ramp(frame, 4)}>
				{badge(L, oxZn, moved ? '#1f6fb2' : TOK.ink)}
				{badge(R, oxCu, moved ? '#1f6fb2' : TOK.ink)}
			</g>

			<DioramaPlinth id={ID} cx={L} cy={PY} rx={RX}>
				{electrons.filter((e) => !e.front && hop[e.k] < 0.05).map(electron)}
				<Ball id={ID} el="Zn" x={L} y={AY + idleBob(frame, 1, 1.5)} r={znR} label={`Zn${znCharge}`} labelSize={26} labelColor="#1f2a36" scale={enter(0)} />
			</DioramaPlinth>
			<DioramaPlinth id={ID} cx={R} cy={PY} rx={RX}>
				{electrons.filter((e) => !e.front && hop[e.k] > 0.95).map(electron)}
				<g opacity={1 - cuMorph}>
					<Ball id={ID} el="CuIon" x={R} y={AY + idleBob(frame, 2, 1.5)} r={cuR} label="Cu²⁺" labelSize={26} scale={enter(1)} />
				</g>
				<g opacity={cuMorph}>
					<Ball id={ID} el="Cu" x={R} y={AY + idleBob(frame, 2, 1.5)} r={cuR} label="Cu" labelSize={26} />
				</g>
			</DioramaPlinth>
			{electrons.filter((e) => e.front || (hop[e.k] >= 0.05 && hop[e.k] <= 0.95)).map(electron)}
			{/* electron legend */}
			<g opacity={ramp(frame, 20)}>
				<Ball id={ID} el="e" x={W / 2 - 30} y={AY + 4} r={9} />
				<text x={W / 2 - 14} y={AY + 10} fill={TOK.amberInk} fontSize={18} fontWeight={800}>= e⁻</text>
			</g>

			{/* Half labels */}
			<g opacity={oxLabelsIn[0]}>
				<text x={L} y={PY + 106} textAnchor="middle" fill="#1f6fb2" fontSize={22} fontWeight={800} letterSpacing="0.04em">OXIDATION</text>
				<text x={L} y={PY + 132} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={700}>loses 2e⁻ · ox. no. rises</text>
				<text x={L} y={PY + 156} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>Zn → Zn²⁺ + 2e⁻</text>
			</g>
			<g opacity={oxLabelsIn[1]}>
				<text x={R} y={PY + 106} textAnchor="middle" fill="#1f6fb2" fontSize={22} fontWeight={800} letterSpacing="0.04em">REDUCTION</text>
				<text x={R} y={PY + 132} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={700}>gains 2e⁻ · ox. no. falls</text>
				<text x={R} y={PY + 156} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>Cu²⁺ + 2e⁻ → Cu</text>
			</g>

			{/* Mnemonics */}
			<g opacity={ramp(frame, tOil, 14)}>
				<text x={W / 2} y={PY + 204} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>
					OIL RIG: <tspan fontWeight={700}>Oxidation Is Loss, Reduction Is Gain</tspan>
				</text>
			</g>
			<g opacity={ramp(frame, tLeo, 14)}>
				<text x={W / 2} y={PY + 234} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					LEO says GER: Lose Electrons Oxidation, Gain Electrons Reduction
				</text>
			</g>
			{/* Electrons are conserved */}
			<g opacity={done ? ramp(frame, tTally, 14) : 0}>
				<rect x={W / 2 - 118} y={AY - 98} width={236} height={38} rx={19} fill="#ffffff" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={W / 2} y={AY - 73} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>2e⁻ lost = 2e⁻ gained</text>
			</g>
		</svg>
	);
};
