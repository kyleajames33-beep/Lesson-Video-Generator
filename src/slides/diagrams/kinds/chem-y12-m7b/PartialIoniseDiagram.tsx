// PartialIoniseDiagram — "weak, but the strongest organic acid".
//
// Top: a plinth of `count` acid molecules (drawn as small COOH tokens). On the
// ionise beat `ionised` of them (default 1 in 100, "about one percent") lose
// their proton: the token turns into a carboxylate and the H⁺ hops onto a
// water molecule as H₃O⁺. The rest stay intact: partial ionisation. A live
// counter states the fraction, computed from the props.
//
// Bottom: why it ionises at all. The carboxylate's charge cloud spreads over
// two oxygens (resonance); the alkoxide's sits on one. Both clouds hold the
// same total charge, so the spread one is dimmer per atom.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {ELEMENTS, Mol, Title, atomPos, clamp, fadeAt, popAt, shade} from './shared';

export type PartialIoniseProps = {
	title?: string;
	count?: number;
	ionised?: number;
	acidLabel?: string;
	beats?: {molecules?: number; ionise?: number; percent?: number; resonance?: number; alkoxide?: number; verdict?: number};
	delay?: number;
};

const ID = 'c12m7ion';
const W = 760;
const H = 530;
const ease = Easing.inOut(Easing.cubic);

// One acid molecule as a glossy bead (its –COOH end) with its white H.
const Token = ({x, y, ionised, t}: {x: number; y: number; ionised: boolean; t: number}) => (
	<g>
		<circle cx={x} cy={y} r={7.5} fill={`url(#${ID}-atom-O)`} stroke={shade(ELEMENT_COLORS.O, -0.35)} strokeWidth={0.8} />
		{(!ionised || t < 1) && <circle cx={x + 6} cy={y - 6} r={3.6} fill={`url(#${ID}-atom-H)`} stroke="#9a9a9a" strokeWidth={0.6} opacity={ionised ? 1 - t : 1} />}
	</g>
);

export const PartialIoniseDiagram = ({
	title = 'Only about 1 in 100 molecules ionise', count = 100, ionised = 1, acidLabel = 'ethanoic acid', beats = {}, delay = 62,
}: PartialIoniseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {molecules: 10, ionise: 240, percent: 420, resonance: 690, alkoxide: 880, verdict: 990, ...beats};
	const pulse = idlePulse(frame, 70);

	// Tokens on the top plinth, in perspective rows.
	const cols = 20;
	const rows = Math.ceil(count / cols);
	const pcx = W / 2;
	const pcy = 170;
	const prx = 330;
	const slots = Array.from({length: count}, (_, i) => {
		const r = Math.floor(i / cols);
		const c = i % cols;
		const fy = rows === 1 ? 0 : -1 + (2 * r) / (rows - 1);
		const half = prx * 0.86 * (0.84 + 0.16 * ((fy + 1) / 2));
		return {x: pcx - half + (2 * half * c) / (cols - 1) + (r % 2) * 8, y: pcy - 2 + fy * 46};
	});
	// Which ones ionise: spread through the middle of the crowd.
	const ionIdx = Array.from({length: ionised}, (_, k) => Math.floor(rows / 2) * cols + Math.min(cols - 1, Math.floor((cols * (k + 1)) / (ionised + 1)) + 2));
	const t = interpolate(frame, [b.ionise, b.ionise + 40], [0, 1], {...clamp, easing: ease});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial ionisation of a carboxylic acid, and why its conjugate base is stable" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<defs>
				<radialGradient id={`${ID}-glow`}>
					<stop offset="0%" stopColor={theme.accent2} stopOpacity={0.95} />
					<stop offset="100%" stopColor={theme.accent2} stopOpacity={0} />
				</radialGradient>
			</defs>
			<Title text={title} opacity={fadeAt(frame, 0)} />

			<g opacity={fadeAt(frame, 2)} transform={`translate(0, ${pcy}) scale(1, 0.62) translate(0, ${-pcy})`}>
				<DioramaPlinth id={ID} cx={pcx} cy={pcy} rx={prx} />
			</g>
			{slots.map((s, i) => {
				const ion = ionIdx.includes(i);
				const bob = idleBob(frame, i, 1.1);
				return (
					<g key={i} opacity={Math.min(1, popAt(frame, fps, b.molecules + (i % cols) * 1.2 + Math.floor(i / cols) * 3) * 1.3)}>
						<Token x={s.x} y={s.y + bob} ionised={ion} t={t} />
						{ion && t > 0 && (
							<g>
								<circle cx={s.x} cy={s.y + bob - 2} r={14 + pulse * 2} fill="none" stroke={TOK.amber} strokeWidth={2.5} opacity={t} />
								<text x={s.x} y={s.y + bob + 5} textAnchor="middle" fill="#ffffff" fontSize={14} fontWeight={900} opacity={t}>−</text>
								{/* H⁺ hops up onto a water molecule */}
								<g opacity={t} transform={`translate(${s.x + 8}, ${s.y - 10 - t * 34 + bob})`}>
									<circle r={6} fill={`url(#${ID}-atom-O)`} />
									<circle cx={-7} cy={4} r={3.6} fill={`url(#${ID}-atom-H)`} stroke="#9a9a9a" strokeWidth={0.6} />
									<circle cx={7} cy={4} r={3.6} fill={`url(#${ID}-atom-H)`} stroke="#9a9a9a" strokeWidth={0.6} />
									<circle cx={0} cy={-8} r={3.6} fill={`url(#${ID}-atom-H)`} stroke="#9a9a9a" strokeWidth={0.6} />
								</g>
							</g>
						)}
					</g>
				);
			})}
			{ionIdx.slice(0, 1).map((i) => {
				const p = slots[i];
				return (
					<g key="lab" opacity={fadeAt(frame, b.ionise + 40, 12)}>
						<line x1={p.x + 14} y1={p.y - 46} x2={p.x + 70} y2={p.y - 70} stroke={TOK.inkDim} strokeWidth={2} />
						<text x={p.x + 74} y={p.y - 70} fill={TOK.ink} fontSize={18} fontWeight={800}>H₃O⁺</text>
						<line x1={p.x - 12} y1={p.y - 10} x2={p.x - 70} y2={p.y - 70} stroke={TOK.inkDim} strokeWidth={2} />
						<text x={p.x - 74} y={p.y - 70} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800}>CH₃COO⁻</text>
					</g>
				);
			})}
			<text x={W / 2} y={64} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={fadeAt(frame, b.molecules + 20)}>
				{count} molecules of {acidLabel} in water
			</text>
			<text x={W / 2} y={278} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.percent, 12)}>
				{ionised} of {count} ionised ≈ {Math.round((100 * ionised) / count)}%: a weak acid
			</text>

			{/* Why: where the negative charge sits */}
			{[
				{mol: 'ethanoate', glow: [2, 3], name: 'carboxylate', sub: 'charge over two O', at: b.resonance, x: 190},
				{mol: 'ethoxide', glow: [2], name: 'alkoxide (from an alcohol)', sub: 'charge on one O', at: b.alkoxide, x: 570},
			].map((m, i) => {
				const shown = Math.min(1, popAt(frame, fps, m.at) * 1.2);
				const my = 414 + idleBob(frame, i + 5, 1.3);
				const g = fadeAt(frame, m.at + 20, 20);
				return (
					<g key={i} opacity={fadeAt(frame, m.at, 8)}>
						<DioramaPlinth id={ID} cx={m.x} cy={452} rx={120} />
						{m.glow.map((k) => {
							const p = atomPos(m.mol, k, m.x, my, 50);
							const share = 1 / m.glow.length;
							return <circle key={k} cx={p.x} cy={p.y} r={26 + 12 * share + pulse * 3} fill={`url(#${ID}-glow)`} opacity={g * (0.35 + 0.65 * share)} />;
						})}
						<g opacity={shown}>
							<Mol id={ID} mol={m.mol} x={m.x} y={my} bond={50} ballScale={0.95} frame={frame} />
						</g>
						<text x={m.x} y={503} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{m.name}</text>
						<text x={m.x} y={525} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>{m.sub}</text>
					</g>
				);
			})}
			<text x={380} y={326} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.verdict, 12)}>
				spread charge = more stable base = stronger acid
			</text>
		</svg>
	);
};
