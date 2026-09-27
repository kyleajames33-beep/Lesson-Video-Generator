// GasVolumeComparisonDiagram — Avogadro's law as a diorama: two identical
// flasks on plinths, one holding 12 tiny helium atoms, the other 12 much
// larger linear CO₂ molecules. Same particle COUNT, very different particle
// size, identical volume, different mass (1 mol He = 4 g, 1 mol CO₂ = 44 g).
//
// Diorama restyle: glass flasks stand on stone plinths, He atoms are
// glossy pale-cyan balls and CO₂ is drawn LINEAR (O=C=O) from CPK atoms. The
// particles never settle: they drift and tumble like a gas for the whole hold.
//
// Timing: only used on Chem Y11 M2 L4 "concept", where the card fades in at
// frame 147 (revealDelays.diagram), so the build starts at START = 150.
// Beat plan (frames after START):
//   0    flasks + plinths + labels
//   24   particles spring in, one by one, same order both sides
//   90   mass tags drop in (4 g, 44 g)
//   130  "same volume" bracket (amber: the point of the scene) + verdict

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, GLASS_EDGE, GlassDefs, LinearMolecule, clamp, fadeAt, shade} from './kinds/restyle-chem-specials/props';

const ID = 'gasvol';
const START = 150;
const W = 760;
const PLINTH_Y = 384;
const HE = '#8fd6e6';

// 12 particles filling a conical flask, narrow at the neck, wide at the base.
// Identical layout both sides so the count can be matched one-to-one.
const LAYOUT: {dx: number; y: number}[] = [
	{dx: -22, y: 212}, {dx: 22, y: 212},
	{dx: -44, y: 256}, {dx: 0, y: 256}, {dx: 44, y: 256},
	{dx: -56, y: 300}, {dx: 0, y: 300}, {dx: 56, y: 300},
	{dx: -72, y: 344}, {dx: -24, y: 344}, {dx: 24, y: 344}, {dx: 72, y: 344},
];

const NECK_TOP = 96, NECK_BOT = 156, NECK_HW = 21, BASE_HW = 108, BASE_Y = 372;

const flaskPath = (cx: number) =>
	`M ${cx - NECK_HW} ${NECK_TOP} L ${cx - NECK_HW} ${NECK_BOT} L ${cx - BASE_HW} ${BASE_Y - 26}
	 Q ${cx - BASE_HW - 2} ${BASE_Y} ${cx - BASE_HW + 26} ${BASE_Y} L ${cx + BASE_HW - 26} ${BASE_Y}
	 Q ${cx + BASE_HW + 2} ${BASE_Y} ${cx + BASE_HW} ${BASE_Y - 26} L ${cx + NECK_HW} ${NECK_BOT} L ${cx + NECK_HW} ${NECK_TOP} Z`;

export const GasVolumeComparisonDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();

	const pop = (i: number) => Math.max(0, spring({frame: frame - 24 - i * 3, fps, config: {damping: 13, stiffness: 220, mass: 0.6}}));
	const drop = (d: number) => spring({frame: frame - d, fps, config: {damping: 12, stiffness: 180, mass: 0.7}});
	const verdict = fadeAt(frame, 130, 16);
	const pulse = idlePulse(frame + START);
	const edge = (el: string) => shade(ELEMENT_COLORS[el] ?? '#9a9a9a', -0.35);

	const flask = (cx: number, kind: 'He' | 'CO2') => (
		<g>
			<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={150}>
				<path d={flaskPath(cx)} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3.5} strokeLinejoin="round" />
				<rect x={cx - NECK_HW - 7} y={NECK_TOP - 10} width={NECK_HW * 2 + 14} height={12} rx={6} fill="#ffffff" stroke={GLASS_EDGE} strokeWidth={3} />
				{/* shine streak on the left of the cone */}
				<path d={`M ${cx - NECK_HW + 6} ${NECK_BOT + 8} L ${cx - BASE_HW + 22} ${BASE_Y - 40}`} stroke="#ffffff" strokeOpacity={0.8} strokeWidth={6} strokeLinecap="round" />
				{LAYOUT.map((p, i) => {
					const s = pop(i);
					const x = cx + p.dx + idleBob(frame, i + (kind === 'He' ? 0 : 30), 3.2);
					const y = p.y + idleBob(frame + 40, i + (kind === 'He' ? 11 : 41), 2.6);
					return kind === 'He' ? (
						<Ball key={i} id={ID} fill="he" edge={HE} x={x} y={y} r={7} scale={s} opacity={s > 0.02 ? 1 : 0} />
					) : (
						<LinearMolecule key={i} id={ID} atoms={['O', 'C', 'O']} x={x} y={y} r={8} angle={(i * 47) % 180 + frame * 0.35 * (i % 2 ? 1 : -1)} scale={s} opacity={s > 0.02 ? 1 : 0} edge={edge} />
					);
				})}
			</DioramaPlinth>
		</g>
	);

	const massTag = (cx: number, text: string, d: number, color: string) => {
		const p = drop(d);
		return (
			<g opacity={interpolate(p, [0, 0.3], [0, 1], clamp)} transform={`translate(${cx}, ${(1 - Math.max(0, p)) * -30})`}>
				<rect x={-52} y={440} width={104} height={42} rx={10} fill="#fffdf6" stroke={color} strokeWidth={3} />
				<text x={0} y={470} textAnchor="middle" fill={color} fontSize={28} fontWeight={900}>{text}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Two equal-volume flasks: 1 mol helium and 1 mol carbon dioxide hold the same number of particles" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'C']} />
			<BallDefs id={ID} colors={{he: HE}} />
			<GlassDefs id={ID} />

			<g opacity={fadeAt(frame, -START, 16)}>
				{flask(200, 'He')}
				{flask(560, 'CO2')}
			</g>

			<text x={200} y={56} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeAt(frame, 6)}>1 mol He</text>
			<text x={560} y={56} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800} opacity={fadeAt(frame, 10)}>1 mol CO₂</text>

			{/* same-volume bracket joining the two flask necks */}
			<g opacity={verdict}>
				<path d={`M 236 ${NECK_TOP + 20} L 380 ${NECK_TOP + 20} L 524 ${NECK_TOP + 20}`} stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} strokeDasharray="8 7" fill="none" />
				<rect x={318} y={NECK_TOP + 2} width={124} height={36} rx={18} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5} />
				<text x={380} y={NECK_TOP + 27} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>same volume</text>
			</g>

			{massTag(200, '4 g', 90, TOK.chem1)}
			{massTag(560, '44 g', 96, TOK.inkDim)}

			<text x={380} y={522} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={700} opacity={verdict}>
				same count, same volume, different mass
			</text>
		</svg>
	);
};
