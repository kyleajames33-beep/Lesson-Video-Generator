// CombineSplitDiagram — synthesis vs decomposition, told by counting reactants.
//
// Left plinth: A and B roll together and bond into AB (synthesis, A + B → AB).
// Right plinth: AB breaks apart into A and B (decomposition, AB → A + B).
// Then the rule lands as a count badge over each plinth: 2 reactants means
// synthesis, 1 reactant means decomposition. Finally the scene's own compound
// example (SO₃ + H₂O → H₂SO₄) is counted the same way: still synthesis.
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   combine 90 · split 270 · count rule 560 · compound example 850

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';

export type CombineSplitProps = {
	delay?: number;
	/** Frames after delay: [combine, split, count rule, compound example]. */
	beats?: [number, number, number, number];
	/** A compound-only synthesis example shown last. */
	example?: string;
};

const ID = 'c11m3cs';
const W = 760;
const PY = 236;
const RX = 168;
const L = 192;
const R = 568;
const BR = 30;

const ease = (t: number) => t * t * (3 - 2 * t);

export const CombineSplitDiagram = ({delay = 90, beats = [90, 270, 560, 850], example = 'SO₃ + H₂O → H₂SO₄'}: CombineSplitProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [tJoin, tSplit, tRule, tEx] = beats;

	const join = ease(interpolate(frame, [tJoin, tJoin + 40], [0, 1], clamp));
	const joinPop = spring({frame: frame - tJoin - 36, fps, config: {damping: 9, stiffness: 220, mass: 0.5}});
	const split = ease(interpolate(frame, [tSplit, tSplit + 40], [0, 1], clamp));
	const splitPop = spring({frame: frame - tSplit, fps, config: {damping: 9, stiffness: 220, mass: 0.5}});
	const enter = (i: number) => Math.max(0, spring({frame: frame - 8 - i * 4, fps, config: {damping: 13, stiffness: 200, mass: 0.6}}));
	const rule = spring({frame: frame - tRule, fps, config: {damping: 12, stiffness: 160, mass: 0.7}});
	const bob = (i: number) => idleBob(frame, i, 2.4);

	// Bonded pair spacing: balls overlap a little, like a space-filling model.
	const bond = BR * 0.82;
	const y = PY - 14;

	// Synthesis: A from the left, B from the right, meeting in the middle.
	const sA = {x: L - 92 + (92 - bond) * join, y: y + bob(1)};
	const sB = {x: L + 92 - (92 - bond) * join, y: y + bob(1) * (join) + bob(2) * (1 - join)};
	const squish = join >= 1 ? 1 + 0.08 * (1 - Math.max(0, joinPop)) : 1;
	// Decomposition: the pair flies apart.
	const dA = {x: R - bond - (92 - bond) * split, y: y + bob(3) - Math.sin(split * Math.PI) * 24};
	const dB = {x: R + bond + (92 - bond) * split, y: y + bob(3) * (1 - split) + bob(4) * split - Math.sin(split * Math.PI) * 24};
	const burst = split > 0 && split < 1 ? 1 - split : 0;

	const panels = [
		{x: L, title: 'Synthesis', eq: 'A + B → AB', count: 2, word: 'reactants', verdict: 'SYNTHESIS', after: '1 product', live: join},
		{x: R, title: 'Decomposition', eq: 'AB → A + B', count: 1, word: 'reactant', verdict: 'DECOMPOSITION', after: '2 products', live: split},
	];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Synthesis: A plus B combine into AB. Decomposition: AB splits into A and B. Count the reactants: two or more means synthesis, one means decomposition." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['A', 'B']} />

			{panels.map((p, i) => (
				<g key={p.title} opacity={ramp(frame, i * 6)}>
					<text x={p.x} y={48} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>{p.title}</text>
					<text x={p.x} y={84} textAnchor="middle" fill={theme.accent} fontSize={24} fontWeight={800}>{p.eq}</text>
				</g>
			))}

			<g opacity={ramp(frame, 2)}>
				<DioramaPlinth id={ID} cx={L} cy={PY} rx={RX}>
					<g transform={`translate(${(sA.x + sB.x) / 2} ${y}) scale(${squish} ${2 - squish}) translate(${-(sA.x + sB.x) / 2} ${-y})`}>
						<Ball id={ID} el="A" x={sA.x} y={sA.y} r={BR} label="A" labelSize={26} scale={enter(0)} />
						<Ball id={ID} el="B" x={sB.x} y={sB.y} r={BR} label="B" labelSize={26} scale={enter(1)} />
					</g>
					<text x={L} y={y + 4} textAnchor="middle" fill={TOK.inkDim} fontSize={30} fontWeight={700} opacity={1 - ramp(frame, tJoin, 10)}>+</text>
				</DioramaPlinth>
				<DioramaPlinth id={ID} cx={R} cy={PY} rx={RX}>
					{/* a small spark where the bond breaks */}
					{burst > 0 && [0, 1, 2, 3, 4, 5].map((k) => {
						const a = (k / 6) * Math.PI * 2;
						const d = 14 + 40 * (1 - burst);
						return <circle key={k} cx={R + Math.cos(a) * d} cy={y + Math.sin(a) * d * 0.6} r={4 * burst} fill={TOK.amber} />;
					})}
					<Ball id={ID} el="A" x={dA.x} y={dA.y} r={BR} label="A" labelSize={26} scale={enter(2) * (1 + 0.06 * Math.max(0, 1 - Math.abs(splitPop - 1) * 3) * (split > 0 ? 1 : 0))} />
					<Ball id={ID} el="B" x={dB.x} y={dB.y} r={BR} label="B" labelSize={26} scale={enter(3)} />
				</DioramaPlinth>
			</g>

			{/* Before → after count under each plinth */}
			{panels.map((p) => (
				<text key={p.title} x={p.x} y={372} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800} opacity={ramp(frame, 20)}>
					{p.count} {p.word} <tspan fill={TOK.inkDim}>→</tspan> <tspan opacity={p.live}>{p.after}</tspan>
				</text>
			))}

			{/* The rule: count the reactants */}
			{panels.map((p, i) => {
				const s = Math.max(0, rule);
				return (
					<g key={p.title} opacity={Math.min(1, s * 1.5)} transform={`translate(${p.x} ${420}) scale(${0.6 + 0.4 * s})`}>
						<rect x={-150} y={-26} width={300} height={52} rx={26} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + 1.5 * idlePulse(frame + i * 20)} />
						<text x={-114} y={11} textAnchor="middle" fill={TOK.amberInk} fontSize={32} fontWeight={800}>{p.count}</text>
						<line x1={-92} y1={-16} x2={-92} y2={16} stroke={TOK.rule} strokeWidth={2} />
						<text x={20} y={8} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} letterSpacing="0.04em">
							→ {p.verdict}
						</text>
					</g>
				);
			})}

			{/* Compounds combine too */}
			<g opacity={ramp(frame, tEx, 16)}>
				<text x={W / 2} y={484} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
					{example}
				</text>
				<text x={W / 2} y={512} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					2 reactants, both compounds → still synthesis
				</text>
			</g>
		</svg>
	);
};
