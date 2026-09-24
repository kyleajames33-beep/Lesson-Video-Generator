// CoefficientDivideDiagram — "moles ÷ coefficient" as a diorama bar chart.
//
// Each reactant is a painted-style column standing on a plinth. Step 1 grows
// the columns to raw moles, and the one with FEWER moles looks limiting. Step 2
// divides each column by its coefficient (the raw height stays as a dashed
// ghost). Step 3 crowns the SMALLEST ratio as the limiting reagent. With the
// default Na / Cl₂ data the order flips between step 1 and step 2, which is
// exactly lesson trap 1: fewer moles is not the test, moles ÷ coefficient is.
//
// Numbers come from the config. Ratios are rounded half-up from the displayed
// 3-significant-figure moles (0.435 ÷ 2 = 0.2175 → 0.218), matching the worked
// example's working rather than recomputing from unrounded masses.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, Molecule} from './diorama';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type CoefficientDivideReactant = {label: string; moles: number; coef: number; atoms: string[]};
export type CoefficientDivideProps = {
	equation?: string;
	reactants?: CoefficientDivideReactant[];
	delay?: number;
	/** Frames (relative to delay) for: raw moles, divide, crown. */
	steps?: [number, number, number];
};

const DEFAULT_REACTANTS: CoefficientDivideReactant[] = [
	{label: 'Na', moles: 0.435, coef: 2, atoms: ['Na']},
	{label: 'Cl₂', moles: 0.282, coef: 1, atoms: ['Cl', 'Cl']},
];

const ID = 'coefdiv';
const W = 760;
const BASE_Y = 356;
const MAX_H = 200;
const VB_H = 520;
const LABEL_Y = BASE_Y + 100;
const COL_W = 92;

const round3 = (x: number) => (Math.round(x * 1000 + 1e-9) / 1000).toFixed(3);

const shade = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};

export const CoefficientDivideDiagram = ({
	equation = '2Na + Cl₂ → 2NaCl',
	reactants = DEFAULT_REACTANTS,
	delay = 62,
	steps = [20, 190, 440],
}: CoefficientDivideProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const [s1, s2, s3] = steps;

	const ratios = reactants.map((r) => Number(round3(r.moles / r.coef)));
	const limitingIdx = ratios.indexOf(Math.min(...ratios));
	const fewestMolesIdx = reactants.map((r) => r.moles).indexOf(Math.min(...reactants.map((r) => r.moles)));
	const flips = fewestMolesIdx !== limitingIdx;

	const vMax = Math.max(...reactants.map((r) => r.moles));
	const hOf = (v: number) => (v / vMax) * MAX_H;

	const grow = spring({frame: frame - s1, fps, config: {damping: 16, stiffness: 120}});
	const divide = interpolate(frame, [s2 + 18, s2 + 48], [0, 1], clamp);
	const crown = spring({frame: frame - s3, fps, config: {damping: 11, stiffness: 160, mass: 0.8}});
	const fade = (d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);

	const xs = reactants.length === 2 ? [250, 510] : reactants.map((_, i) => 130 + (i * 500) / Math.max(1, reactants.length - 1));
	const elements = Array.from(new Set(reactants.flatMap((r) => r.atoms)));

	// Step caption: swaps as the beats land.
	const caption =
		frame < s2
			? flips
				? `${reactants[fewestMolesIdx].label} has fewer moles… so is it limiting?`
				: 'Step 1: convert each reactant to moles'
			: frame < s3
				? 'Step 2: divide each by its coefficient'
				: `${reactants[limitingIdx].label} is limiting: smallest moles ÷ coefficient`;
	const captionKey = frame < s2 ? 0 : frame < s3 ? 1 : 2;
	const captionIn = fade([s1, s2, s3][captionKey] + 6);

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`${equation}: compare moles divided by coefficient; the smallest is the limiting reagent`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={elements} />
			<defs>
				{reactants.map((r, i) => {
					const c = ELEMENT_COLORS[r.atoms[0]] ?? TOK.inkDim;
					return (
						<linearGradient key={i} id={`${ID}-col-${i}`} x1="0" x2="1" y1="0" y2="0">
							<stop offset="0%" stopColor={shade(c, 0.12)} />
							<stop offset="35%" stopColor={shade(c, 0.2)} />
							<stop offset="100%" stopColor={shade(c, -0.22)} />
						</linearGradient>
					);
				})}
			</defs>

			<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fade(0)}>
				{equation}
			</text>
			<text x={W / 2} y={70} textAnchor="middle" fill={captionKey === 2 ? TOK.amberInk : TOK.inkDim} fontSize={21} fontWeight={700} opacity={captionIn}>
				{caption}
			</text>

			{reactants.map((r, i) => {
				const cx = xs[i];
				const raw = hOf(r.moles) * Math.max(0, grow);
				const h = raw + (hOf(ratios[i]) - hOf(r.moles)) * divide;
				const top = BASE_Y - h;
				const capRy = COL_W * 0.17;
				const c = ELEMENT_COLORS[r.atoms[0]] ?? TOK.inkDim;
				const isLimiting = i === limitingIdx;
				const shown = frame < s2 + 18 ? r.moles.toFixed(3) : divide < 1 ? round3(r.moles + (ratios[i] - r.moles) * divide) : round3(ratios[i]);
				const hasGhost = Math.abs(ratios[i] - r.moles) > 1e-9;
				const ghostTop = BASE_Y - hOf(r.moles);
				const ghostTopNow = BASE_Y - raw;
				const crownY = top - 74 - (1 - Math.max(0, crown)) * 120;
				return (
					<g key={r.label} opacity={fade(4 + i * 4)}>
						<DioramaPlinth id={ID} cx={cx} cy={BASE_Y} rx={112}>
							{/* translucent ghost of the raw-moles column, once it has been divided */}
							{hasGhost && (
								<g opacity={divide * 0.3}>
									<rect x={cx - COL_W / 2} y={ghostTop} width={COL_W} height={hOf(r.moles)} fill={`url(#${ID}-col-${i})`} />
									<ellipse cx={cx} cy={ghostTop} rx={COL_W / 2} ry={capRy} fill={shade(c, 0.28)} />
								</g>
							)}
							{h > 1 && (
								<g>
									<rect x={cx - COL_W / 2} y={top} width={COL_W} height={h} fill={`url(#${ID}-col-${i})`} />
									<ellipse cx={cx} cy={BASE_Y} rx={COL_W / 2} ry={capRy} fill={shade(c, -0.25)} />
									<ellipse cx={cx} cy={top} rx={COL_W / 2} ry={capRy} fill={shade(c, 0.28)} />
									<rect x={cx - COL_W / 2 + 12} y={top + 8} width={8} height={Math.max(0, h - 16)} rx={4} fill="#ffffff" opacity={0.28} />
								</g>
							)}
							{/* small model of the particle at the column's foot */}
							<Molecule id={ID} atoms={r.atoms} x={cx + COL_W / 2 + 34} y={BASE_Y - 4} r={13} />
						</DioramaPlinth>

						{/* value: raw moles stays at the ghost's top (dimmed) once the divided value appears */}
						<text x={cx} y={(hasGhost ? ghostTopNow : top) - 20} textAnchor="middle" fill={hasGhost && divide > 0 ? TOK.inkMute : TOK.ink} fontSize={hasGhost ? 28 - 6 * divide : 28} fontWeight={800} opacity={fade(s1 + 10)} textDecoration={hasGhost && divide >= 1 ? 'line-through' : undefined}>
							{hasGhost ? r.moles.toFixed(3) : shown}
						</text>
						{hasGhost && (
							<text x={cx} y={top - 20} textAnchor="middle" fill={isLimiting && frame >= s3 ? TOK.amberInk : TOK.ink} fontSize={28} fontWeight={800} opacity={divide}>
								{shown}
							</text>
						)}
						<text x={cx} y={LABEL_Y} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>
							{r.label}
						</text>
						<text x={cx} y={LABEL_Y + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
							{frame < s2 + 18 ? 'moles' : 'moles ÷ coefficient'}
						</text>

						{/* ÷ coefficient chip */}
						<g opacity={fade(s2, 10) * (1 - fade(s3 + 40, 20) * 0.35)}>
							<rect x={cx + COL_W / 2 + 6} y={(hasGhost ? ghostTop : top) - 44} width={62} height={34} rx={17} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={2.5} />
							<text x={cx + COL_W / 2 + 37} y={(hasGhost ? ghostTop : top) - 20} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>
								÷ {r.coef}
							</text>
						</g>

						{/* role tag + crown */}
						<text x={cx} y={LABEL_Y + 52} textAnchor="middle" fill={isLimiting ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.06em" opacity={fade(s3 + 12)}>
							{isLimiting ? 'LIMITING' : 'EXCESS'}
						</text>
						{isLimiting && frame >= s3 && (
							<g transform={`translate(${cx}, ${crownY})`} opacity={Math.min(1, Math.max(0, crown) * 2)}>
								<path d="M -26 18 L -30 -10 L -14 4 L 0 -18 L 14 4 L 30 -10 L 26 18 Z" fill="#f2b632" stroke="#b07a10" strokeWidth={2} strokeLinejoin="round" />
								<rect x={-26} y={16} width={52} height={9} rx={3} fill="#e0a21f" stroke="#b07a10" strokeWidth={2} />
								<circle cx={0} cy={-18} r={4} fill="#fff4cc" />
								<circle cx={-30} cy={-10} r={3.5} fill="#fff4cc" />
								<circle cx={30} cy={-10} r={3.5} fill="#fff4cc" />
							</g>
						)}
					</g>
				);
			})}
		</svg>
	);
};
