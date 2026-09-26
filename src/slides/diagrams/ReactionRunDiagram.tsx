// ReactionRunDiagram — a live "run the reaction" simulation in the diorama look.
//
// Reactant molecules sit on painted-style plinths. The reaction fires one
// equation's worth at a time (coefficients of each reactant are used up, the
// product's coefficient appears), so particles leave in the true mole ratio.
// Underneath, a graph of molecule count against reaction progress draws itself
// in sync: the limiting reagent's line hits zero, the reaction stops, the
// excess line flattens above zero and the product line flattens at its yield.
//
// Everything is computed from the config, so the numbers can't drift from the
// picture: events = min(count ÷ coefficient), leftovers = count − coef × events.
//
// Beat plan (frames @ 30fps, relative to `delay`, default 62 = the concept
// slide's diagram reveal):
//   +0    plinths + equation in, reactant molecules spring onto their plinths
//   +60   reaction fires, one event every `framesPerEvent` (default 36)
//   end   limiting runs out → "reaction stops" marker, role tags, graph flattens

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse, plinthSlots} from './diorama';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type ReactionRunSpecies = {label: string; atoms: string[]; coef: number};
export type ReactionRunProps = {
	equation?: string;
	reactants?: (ReactionRunSpecies & {count: number})[];
	product?: ReactionRunSpecies;
	delay?: number;
	framesPerEvent?: number;
};

// Defaults mirror the lesson's hook (10 bread + 4 cheese, 2 : 1) as real chemistry.
const DEFAULT_REACTANTS: (ReactionRunSpecies & {count: number})[] = [
	{label: 'H₂', atoms: ['H', 'H'], coef: 2, count: 10},
	{label: 'O₂', atoms: ['O', 'O'], coef: 1, count: 4},
];
const DEFAULT_PRODUCT: ReactionRunSpecies = {label: 'H₂O', atoms: ['O', 'H', 'H'], coef: 2};

const ID = 'rxnrun';
const W = 760;
const PLINTH_Y = 170;
const PLINTH_RX = 104;
// Graph box
const GX0 = 96, GX1 = 640, GY0 = 336, GY1 = 486;

export const ReactionRunDiagram = ({
	equation = '2H₂ + O₂ → 2H₂O',
	reactants = DEFAULT_REACTANTS,
	product = DEFAULT_PRODUCT,
	delay = 62,
	framesPerEvent = 36,
}: ReactionRunProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	// ── Stoichiometry (the single source of every number on screen) ──────────
	const events = Math.min(...reactants.map((r) => Math.floor(r.count / r.coef)));
	const limitingIdx = reactants.reduce((best, r, i) => (r.count / r.coef < reactants[best].count / reactants[best].coef ? i : best), 0);
	const productTotal = events * product.coef;

	const runStart = 60;
	const runEnd = runStart + events * framesPerEvent;
	const p = interpolate(frame, [runStart, runEnd], [0, events], clamp); // events elapsed (continuous)
	const evT = (k: number) => Math.max(0, Math.min(1, p - k)); // 0..1 progress of event k
	const done = interpolate(frame, [runEnd, runEnd + 14], [0, 1], clamp);

	const xs = [118, 380, 642];
	const allAtoms = Array.from(new Set([...reactants.flatMap((r) => r.atoms), ...product.atoms]));
	const fadeIn = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clamp);

	// Live counts: a molecule counts as gone/made once its event passes halfway.
	const eventsCounted = Math.floor(p + 0.5);
	const liveCount = (i: number) => reactants[i].count - reactants[i].coef * Math.min(events, eventsCounted);
	const liveProduct = product.coef * Math.min(events, eventsCounted);

	const lineColor = (i: number) => (i === limitingIdx ? TOK.amber : theme.accent);
	const textColor = (i: number) => (i === limitingIdx ? TOK.amberInk : theme.accent);
	const productColor = '#3f6fd8';

	// Graph mapping. The x-axis runs 25% past the stopping point so the flat
	// "nothing more happens" stretch is visible.
	const yMax = Math.max(...reactants.map((r) => r.count), productTotal);
	const xSpan = events * 1.25;
	const gx = (e: number) => GX0 + (e / xSpan) * (GX1 - GX0);
	const gy = (n: number) => GY1 - (n / yMax) * (GY1 - GY0);
	// Graph "pen" position: runs with the reaction, then keeps going through the flat stretch.
	const pen = frame < runEnd ? p : Math.min(xSpan, events + ((frame - runEnd) / framesPerEvent) * 0.6);

	const seriesPath = (n0: number, slope: number) => {
		const e1 = Math.min(pen, events);
		let d = `M ${gx(0)} ${gy(n0)} L ${gx(e1)} ${gy(n0 + slope * e1)}`;
		if (pen > events) d += ` L ${gx(pen)} ${gy(n0 + slope * events)}`;
		return d;
	};

	const plinthGroup = (i: number) => {
		const r = reactants[i];
		const cx = xs[i];
		const slots = plinthSlots(cx, PLINTH_Y, PLINTH_RX, r.count);
		return (
			<g key={r.label}>
				<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={PLINTH_RX}>
					{slots.map((s, j) => {
						const enter = spring({frame: frame - 10 - j * 2, fps, config: {damping: 13, stiffness: 220, mass: 0.6}});
						const k = Math.floor(j / r.coef);
						const t = k < events ? evT(k) : 0;
						// Consumed molecules lift and fly toward the product plinth.
						const tx = s.x + (xs[2] - s.x) * interpolate(t, [0, 1], [0, 0.55]);
						const ty = s.y - Math.sin(t * Math.PI) * 60 + idleBob(frame, j + i * 20) * (1 - t);
						return (
							<Molecule
								key={j}
								id={ID}
								atoms={r.atoms}
								x={tx}
								y={ty}
								r={14}
								scale={Math.max(0, enter) * (1 - t * 0.5)}
								opacity={interpolate(t, [0.55, 0.9], [1, 0], clamp)}
							/>
						);
					})}
				</DioramaPlinth>
			</g>
		);
	};

	const productSlots = plinthSlots(xs[2], PLINTH_Y, PLINTH_RX, Math.max(productTotal, 1));
	const labelY = PLINTH_Y + PLINTH_RX * 0.54 + 36;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`${equation}: the reaction runs until the limiting reagent is used up`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={allAtoms} />

			{/* Equation header */}
			<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeIn(0)}>
				{equation}
			</text>

			<g opacity={fadeIn(2)}>
				{reactants.map((_, i) => plinthGroup(i))}
				<DioramaPlinth id={ID} cx={xs[2]} cy={PLINTH_Y} rx={PLINTH_RX}>
					{productSlots.slice(0, productTotal).map((s, i) => {
						const k = Math.floor(i / product.coef);
						const t = evT(k);
						const pop = interpolate(t, [0.55, 0.8, 1], [0, 1.18, 1], clamp);
						return <Molecule key={i} id={ID} atoms={product.atoms} x={s.x} y={s.y + idleBob(frame, i + 50) * pop} r={14} scale={pop} opacity={pop > 0 ? 1 : 0} />;
					})}
				</DioramaPlinth>
				{/* "+" and "→" between the plinths */}
				<text x={(xs[0] + xs[1]) / 2} y={PLINTH_Y + 12} textAnchor="middle" fill={TOK.inkDim} fontSize={40} fontWeight={700}>+</text>
				<text x={(xs[1] + xs[2]) / 2} y={PLINTH_Y + 12} textAnchor="middle" fill={TOK.inkDim} fontSize={40} fontWeight={700}>→</text>
			</g>

			{/* Formula + live counter under each plinth */}
			{reactants.map((r, i) => (
				<g key={r.label} opacity={fadeIn(8)}>
					<text x={xs[i]} y={labelY} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
						{r.label} <tspan fill={textColor(i)} fontWeight={800}>× {liveCount(i)}</tspan>
					</text>
					<text x={xs[i]} y={labelY + 24} textAnchor="middle" fill={textColor(i)} fontSize={17} fontWeight={800} opacity={done} letterSpacing="0.04em">
						{i === limitingIdx ? 'LIMITING · used up' : `EXCESS · ${liveCount(i)} left over`}
					</text>
				</g>
			))}
			<g opacity={fadeIn(8)}>
				<text x={xs[2]} y={labelY} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
					{product.label} <tspan fill={productColor}>× {liveProduct}</tspan>
				</text>
				<text x={xs[2]} y={labelY + 24} textAnchor="middle" fill={productColor} fontSize={17} fontWeight={800} opacity={done} letterSpacing="0.04em">
					MAXIMUM PRODUCT
				</text>
			</g>

			{/* Live graph */}
			<g opacity={fadeIn(30)}>
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GY0 - 6} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				{[0, yMax].map((v) => (
					<text key={v} x={GX0 - 10} y={gy(v) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={600}>{v}</text>
				))}
				<text x={GX0 - 38} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} transform={`rotate(-90 ${GX0 - 38} ${(GY0 + GY1) / 2})`}>
					molecules
				</text>
				<text x={(GX0 + GX1) / 2} y={GY1 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
					reaction progress →
				</text>

				{/* Stop marker at the moment the limiting reagent hits zero */}
				<g opacity={done}>
					<line x1={gx(events)} y1={GY0 - 6} x2={gx(events)} y2={GY1} stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} strokeDasharray="6 6" />
					<text x={gx(events) - 8} y={GY0 - 12} textAnchor="end" fill={TOK.amberInk} fontSize={15} fontWeight={800}>
						{reactants[limitingIdx].label} runs out: reaction stops
					</text>
				</g>

				{reactants.map((r, i) => (
					<path key={r.label} d={seriesPath(r.count, -r.coef)} stroke={lineColor(i)} strokeWidth={i === limitingIdx ? 5 : 4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				))}
				<path d={seriesPath(0, product.coef)} stroke={productColor} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

				{/* End-of-line labels, once the pen has reached the flat stretch */}
				{pen > events + 0.05 && (
					<g opacity={done}>
						{reactants.map((r, i) => (
							<text key={r.label} x={gx(pen) + 10} y={gy(liveCount(i)) + 6} fill={textColor(i)} fontSize={17} fontWeight={800}>
								{r.label} {liveCount(i)}
							</text>
						))}
						<text x={gx(pen) + 10} y={gy(productTotal) + 6} fill={productColor} fontSize={17} fontWeight={800}>
							{product.label} {productTotal}
						</text>
					</g>
				)}
			</g>
		</svg>
	);
};
