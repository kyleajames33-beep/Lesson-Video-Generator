// StatesEntropyDiagram — predicting the sign of ΔS (Chem Y11 M4 L11).
//
// Three plinths: a solid (particles locked in a lattice, only vibrating), a
// liquid (the same particles jostling past each other) and a gas (particles
// flying around a glass jar). An entropy gauge under each fills further as the
// particles get freer. Then the gas-mole rule lands underneath: more moles of
// gas on the product side → ΔS positive, fewer → negative, and dissolving a
// solid usually increases entropy.
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   solid 110 · liquid 150 · gas 190 · gas-mole rule 740 / 830 / 975 · dissolving 1010

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, bounce, hash01, ramp} from './shared';

export type StatesEntropyProps = {
	delay?: number;
	/** Frames after delay: [solid, liquid, gas]. */
	states?: [number, number, number];
	/** Rule lines under the plinths, each on its beat. */
	rules?: {at: number; text: string; key?: boolean}[];
};

const ID = 'c11m4ent';
const W = 760;
const PY = 300;
const RX = 112;
const XS = [128, 380, 632];
const N = 12;

export const StatesEntropyDiagram = ({
	delay = 90,
	states = [110, 150, 190],
	rules = [
		{at: 740, text: 'Count moles of gas on each side of the equation'},
		{at: 830, text: 'More gas moles in the products → ΔS positive', key: true},
		{at: 975, text: 'Fewer gas moles in the products → ΔS negative'},
		{at: 1010, text: 'Dissolving a solid usually increases entropy too'},
	],
}: StatesEntropyProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const pop = (t: number) => Math.max(0, spring({frame: frame - t, fps, config: {damping: 14, stiffness: 150}}));

	// Solid: a 4 × 3 lattice, vibrating in place.
	const solid = Array.from({length: N}, (_, i) => {
		const c = i % 4, r = Math.floor(i / 4);
		return {x: XS[0] - 48 + c * 32 + idleBob(frame, i, 1.1), y: PY - 22 - r * 30 + idleBob(frame + 40, i, 1.1)};
	});
	// Liquid: close together but jumbled, sliding around the plinth top.
	const liquid = Array.from({length: N}, (_, i) => {
		const bx = XS[1] + (hash01(i + 3) - 0.5) * 150;
		const by = PY - 18 - hash01(i + 9) * 46;
		return {x: bx + Math.sin(frame / 23 + i * 1.3) * 12, y: by + Math.sin(frame / 31 + i * 2.1) * 6};
	});
	// Gas: free flight inside a jar.
	const jar = {x0: XS[2] - 92, x1: XS[2] + 92, y0: 96, y1: PY - 6};
	const gas = Array.from({length: N}, (_, i) => ({
		x: bounce(jar.x0 + 14 + hash01(i + 21) * 150, (1.4 + hash01(i + 31) * 1.8) * (hash01(i + 5) > 0.5 ? 1 : -1), frame, jar.x0 + 14, jar.x1 - 14),
		y: bounce(jar.y0 + 14 + hash01(i + 41) * 170, (1.2 + hash01(i + 51) * 1.6) * (hash01(i + 7) > 0.5 ? 1 : -1), frame, jar.y0 + 14, jar.y1 - 14),
	}));

	const panels = [
		{name: 'solid', pts: solid, at: states[0], fill: 0.22},
		{name: 'liquid', pts: liquid, at: states[1], fill: 0.5},
		{name: 'gas', pts: gas, at: states[2], fill: 0.95},
	];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Entropy increases from solid to liquid to gas; more moles of gas in the products means ΔS is positive" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['A']} />

			{panels.map((p, i) => {
				const s = pop(p.at);
				const gauge = ramp(frame, p.at + 20, 30) * p.fill;
				return (
					<g key={p.name} opacity={Math.min(1, s * 1.5)}>
						<DioramaPlinth id={ID} cx={XS[i]} cy={PY} rx={RX}>
							{p.name === 'solid' && <rect x={XS[0] - 66} y={PY - 104} width={132} height={100} rx={8} fill="rgba(160,190,215,0.28)" stroke="rgba(90,120,150,0.45)" strokeWidth={2} />}
							{p.name === 'liquid' && <ellipse cx={XS[1]} cy={PY - 10} rx={96} ry={34} fill="rgba(110,180,230,0.4)" />}
							{p.name === 'gas' && (
								<g>
									<rect x={jar.x0} y={jar.y0} width={jar.x1 - jar.x0} height={jar.y1 - jar.y0} rx={14} fill="rgba(215,235,248,0.45)" stroke="rgba(70,90,110,0.5)" strokeWidth={2.5} />
									<rect x={jar.x0 + 10} y={jar.y0 + 12} width={8} height={jar.y1 - jar.y0 - 24} rx={4} fill="#ffffff" opacity={0.45} />
								</g>
							)}
							{p.pts
								.map((q, k) => ({...q, k}))
								.sort((a, b) => a.y - b.y)
								.map((q) => (
									<Ball key={q.k} id={ID} el="A" x={q.x} y={q.y} r={12} scale={s} />
								))}
						</DioramaPlinth>
						<text x={XS[i]} y={PY + 80} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>{p.name}</text>
						{/* entropy gauge */}
						<g>
							<rect x={XS[i] - 70} y={PY + 96} width={140} height={16} rx={8} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
							<rect x={XS[i] - 70} y={PY + 96} width={140 * gauge} height={16} rx={8} fill={theme.accent} opacity={0.85} />
						</g>
					</g>
				);
			})}
			<g opacity={ramp(frame, states[0] + 30, 14)}>
				<text x={XS[0] - 70} y={PY + 132} fill={TOK.inkDim} fontSize={15} fontWeight={700}>entropy</text>
				<text x={(XS[0] + XS[1]) / 2} y={PY - 60} textAnchor="middle" fill={TOK.inkDim} fontSize={30} fontWeight={700} opacity={ramp(frame, states[1], 14)}>→</text>
				<text x={(XS[1] + XS[2]) / 2} y={PY - 60} textAnchor="middle" fill={TOK.inkDim} fontSize={30} fontWeight={700} opacity={ramp(frame, states[2], 14)}>→</text>
			</g>
			<text x={W / 2} y={44} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={ramp(frame, states[2] + 30, 14)}>
				Freer particles → higher entropy
			</text>

			{/* Rules */}
			{rules.map((r, i) => (
				<text key={i} x={W / 2} y={462} textAnchor="middle" fill={r.key ? TOK.amberInk : TOK.ink} fontSize={21} fontWeight={800} opacity={ramp(frame, r.at, 12) * (1 - (rules[i + 1] ? ramp(frame, rules[i + 1].at - 12, 12) : 0))}>
					{r.text}
				</text>
			))}
			{/* the key rule stays as a persistent line once shown */}
			{rules.filter((r) => r.key).map((r, i) => (
				<text key={`k${i}`} x={W / 2} y={500} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={ramp(frame, (rules[rules.indexOf(r) + 1]?.at ?? 1e9) - 6, 12) * (0.8 + 0.2 * idlePulse(frame))}>
					{r.text}
				</text>
			))}
		</svg>
	);
};
