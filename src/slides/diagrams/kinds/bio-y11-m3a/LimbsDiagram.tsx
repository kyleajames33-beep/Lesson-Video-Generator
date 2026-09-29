// LimbsDiagram (bio11m3aLimbs) — homologous versus analogous structures.
//
// Part 1 (homologous): a human arm, a whale flipper and a bat wing stand on
// stone plinths. Their bones light up group by group in the same colours:
// one upper bone (humerus), two forearm bones (radius and ulna), wrist bones,
// then five digits. Same plan, different jobs → common ancestor → divergent
// evolution. The bone counts per digit follow the animals (the whale's long
// fingers have extra phalanges; the bat's fingers are long and carry the
// wing membrane), but these are teaching schematics, not to scale.
//
// Part 2 (analogous, from `analogousAt`): the scene cross-fades to a bird wing
// (bones plus feathers) beside an insect wing (a membrane with veins and no
// bones at all). Same job, different structure and origin → convergent.
//
// Beats are frames after `delay`. Hold: limbs sway gently; the key label
// breathes.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, PAL, Tag, W, fadeAt} from './shared';

export type LimbsProps = {
	beats: {limbs: number; humerus: number; forearm: number; wrist: number; digits: number; verdict: number; analogousAt?: number; analogousVerdict?: number};
	labels?: {human?: string; whale?: string; bat?: string; bird?: string; insect?: string};
	homologousText?: string;
	analogousText?: string;
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3limb';
const COL = {humerus: '#3f6fd8', forearm: PAL.teal, wrist: PAL.orange, digits: PAL.violet};
type Bone = [number, number, number, number, number, keyof typeof COL];

// schematic bone lists: [x1, y1, x2, y2, width, group], shoulder at (0, 0)
const HUMAN: Bone[] = [
	[0, 0, 0, 110, 14, 'humerus'],
	[-7, 116, -8, 200, 8, 'forearm'],
	[8, 116, 10, 200, 8, 'forearm'],
	[-22, 216, -34, 238, 6, 'digits'], [-34, 238, -40, 258, 5, 'digits'],
	[-8, 222, -12, 262, 6, 'digits'], [-12, 262, -14, 288, 5, 'digits'],
	[2, 224, 2, 268, 6, 'digits'], [2, 268, 2, 296, 5, 'digits'],
	[12, 222, 15, 264, 6, 'digits'], [15, 264, 17, 290, 5, 'digits'],
	[21, 219, 27, 256, 5, 'digits'], [27, 256, 30, 276, 4, 'digits'],
];
const HUMAN_WRIST: [number, number][] = [[-10, 208], [0, 206], [10, 208], [-5, 216], [6, 216]];

const WHALE: Bone[] = [
	[0, 0, 0, 46, 20, 'humerus'],
	[-9, 52, -11, 96, 13, 'forearm'],
	[9, 52, 11, 96, 13, 'forearm'],
	...([-24, -12, 0, 12, 24] as number[]).flatMap((dx, d): Bone[] => {
		const len = d === 0 ? 3 : d === 4 ? 4 : 6;
		return Array.from({length: len}, (_, k): Bone => [dx * (1 + k * 0.08), 122 + k * 22, dx * (1 + (k + 1) * 0.08), 122 + (k + 1) * 22 - 4, 7, 'digits']);
	}),
];
const WHALE_WRIST: [number, number][] = [[-14, 106], [-2, 104], [10, 106], [-8, 114], [4, 114]];

const BAT: Bone[] = [
	[0, 0, 30, 64, 11, 'humerus'],
	[32, 70, 92, 150, 7, 'forearm'],
	[26, 72, 50, 104, 5, 'forearm'],
	[100, 152, 106, 136, 5, 'digits'],
	[102, 160, 150, 120, 4, 'digits'], [150, 120, 190, 96, 3, 'digits'],
	[102, 162, 160, 196, 4, 'digits'], [160, 196, 200, 226, 3, 'digits'],
	[100, 164, 128, 236, 4, 'digits'], [128, 236, 140, 282, 3, 'digits'],
	[98, 166, 90, 236, 4, 'digits'], [90, 236, 82, 276, 3, 'digits'],
];
const BAT_WRIST: [number, number][] = [[94, 150], [100, 158], [92, 160]];

const Limb = ({bones, wrist, x, y, s, frame, beats, membrane, flipper}: {bones: Bone[]; wrist: [number, number][]; x: number; y: number; s: number; frame: number; beats: LimbsProps['beats']; membrane?: string; flipper?: string}) => {
	const on = (g: keyof typeof COL) => fadeAt(frame, g === 'humerus' ? beats.humerus : g === 'forearm' ? beats.forearm : g === 'wrist' ? beats.wrist : beats.digits, 14);
	const sway = Math.sin(frame / 40) * 1.5;
	return (
		<g transform={`translate(${x},${y}) scale(${s}) rotate(${sway})`}>
			{flipper && <path d={flipper} fill="#9fb2c2" stroke="#7e93a5" strokeWidth={2} />}
			{membrane && <path d={membrane} fill="rgba(120,96,80,0.28)" stroke="rgba(90,70,60,0.5)" strokeWidth={1.5} />}
			{bones.map(([x1, y1, x2, y2, w, g], k) => {
				const lit = on(g);
				return (
					<g key={k}>
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#efe6d2" strokeWidth={w + 3} strokeLinecap="round" />
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={COL[g]} strokeWidth={w} strokeLinecap="round" opacity={lit} />
					</g>
				);
			})}
			{wrist.map(([wx, wy], k) => (
				<g key={`w${k}`}>
					<circle cx={wx} cy={wy} r={6} fill="#efe6d2" />
					<circle cx={wx} cy={wy} r={5} fill={COL.wrist} opacity={on('wrist')} />
				</g>
			))}
		</g>
	);
};

export const LimbsDiagram = ({beats, labels = {}, homologousText = 'Same bone plan, different jobs: common ancestor', analogousText = 'Same job, different structure and origin', footer = [], delay = 62}: LimbsProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const anaAt = beats.analogousAt ?? 1e9;
	const partA = 1 - fadeAt(frame, anaAt, 20);
	const partB = fadeAt(frame, anaAt + 10, 20);
	const plY = 420;
	const legend: [keyof typeof COL, string, number][] = [
		['humerus', 'upper bone', beats.humerus],
		['forearm', 'two forearm bones', beats.forearm],
		['wrist', 'wrist bones', beats.wrist],
		['digits', 'five digits', beats.digits],
	];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Homologous forelimbs and analogous wings" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{partA > 0.01 && (
				<g opacity={partA}>
					{[
						{x: 130, name: labels.human ?? 'Human arm', job: 'grasping'},
						{x: 370, name: labels.whale ?? 'Whale flipper', job: 'swimming'},
						{x: 590, name: labels.bat ?? 'Bat wing', job: 'flying'},
					].map((a, i) => (
						<g key={i} opacity={fadeAt(frame, beats.limbs + i * 12)}>
							<DioramaPlinth id={`${ID}-p${i}`} cx={a.x} cy={plY} rx={92} />
							<text x={a.x} y={plY + 70} textAnchor="middle" fontSize={18} fontWeight={800} fill={TOK.ink}>
								{a.name}
							</text>
							<text x={a.x} y={plY + 92} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
								{a.job}
							</text>
						</g>
					))}
					<g opacity={fadeAt(frame, beats.limbs)}>
						<Limb bones={HUMAN} wrist={HUMAN_WRIST} x={130} y={80} s={1.08} frame={frame} beats={beats} />
					</g>
					<g opacity={fadeAt(frame, beats.limbs + 12)}>
						<Limb bones={WHALE} wrist={WHALE_WRIST} x={370} y={110} s={1.1} frame={frame} beats={beats} flipper="M -16 -6 Q 36 60 50 150 Q 56 240 6 272 Q -46 240 -48 150 Q -40 50 -16 -6 Z" />
					</g>
					<g opacity={fadeAt(frame, beats.limbs + 24)}>
						<Limb bones={BAT} wrist={BAT_WRIST} x={540} y={90} s={1.0} frame={frame} beats={beats} membrane="M 0 4 L 30 64 L 92 150 L 190 96 L 200 226 L 140 282 L 82 276 L -10 250 Z" />
					</g>
					{legend.map(([g, text, at], i) => (
						<g key={g} opacity={fadeAt(frame, at)} transform={`translate(${24 + i * 184}, 36)`}>
							<rect x={0} y={-10} width={26} height={12} rx={6} fill={COL[g]} />
							<text x={34} y={1} fontSize={16} fontWeight={800} fill={TOK.ink}>
								{text}
							</text>
						</g>
					))}
					<g opacity={fadeAt(frame, beats.verdict)}>
						<Tag x={W / 2} y={70} text={homologousText} color={TOK.amberInk} fill="#fff6e6" size={17} strokeW={2.5 + idlePulse(frame) * 1.5} />
					</g>
				</g>
			)}
			{partB > 0.01 && (
				<g opacity={partB}>
					<DioramaPlinth id={`${ID}-pb`} cx={200} cy={plY} rx={140} />
					<DioramaPlinth id={`${ID}-pi`} cx={560} cy={plY} rx={140} />
					{/* bird wing: feathers over the bones */}
					<g transform={`translate(${80},${170 + idleBob(frame, 1, 2)})`}>
						{Array.from({length: 8}, (_, k) => {
							const ang = 12 + k * 6;
							const bx = 232 - k * 20;
							const by = 24 + k * 3;
							return <ellipse key={k} cx={bx + Math.cos((ang * Math.PI) / 180) * 50} cy={by + Math.sin((ang * Math.PI) / 180) * 50} rx={58} ry={11} transform={`rotate(${ang} ${bx + Math.cos((ang * Math.PI) / 180) * 50} ${by + Math.sin((ang * Math.PI) / 180) * 50})`} fill="#b7a78f" stroke="#8a7a66" strokeWidth={1.5} />;
						})}
						<path d="M 0 40 Q 120 -10 250 22 Q 150 70 20 64 Z" fill="#cbbca5" stroke="#8a7a66" strokeWidth={2} />
						<line x1={0} y1={40} x2={70} y2={20} stroke="#efe6d2" strokeWidth={13} strokeLinecap="round" />
						<line x1={0} y1={40} x2={70} y2={20} stroke={COL.humerus} strokeWidth={10} strokeLinecap="round" />
						<line x1={72} y1={20} x2={160} y2={30} stroke={COL.forearm} strokeWidth={7} strokeLinecap="round" />
						<line x1={72} y1={26} x2={158} y2={38} stroke={COL.forearm} strokeWidth={5} strokeLinecap="round" />
						<circle cx={164} cy={34} r={5} fill={COL.wrist} />
						<line x1={168} y1={34} x2={236} y2={24} stroke={COL.digits} strokeWidth={5} strokeLinecap="round" />
					</g>
					<text x={200} y={plY + 70} textAnchor="middle" fontSize={18} fontWeight={800} fill={TOK.ink}>
						{labels.bird ?? 'Bird wing'}
					</text>
					<text x={200} y={plY + 92} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						bones and feathers
					</text>
					{/* insect wing: membrane and veins, no bones */}
					<g transform={`translate(${440},${190 + idleBob(frame, 2, 2)})`}>
						<ellipse cx={10} cy={70} rx={16} ry={34} fill="#5b4a3a" />
						<path d="M 22 60 Q 140 -20 240 30 Q 200 110 22 84 Z" fill="rgba(190,225,240,0.55)" stroke="#6a8fa6" strokeWidth={2} />
						{[[22, 66, 230, 34], [22, 72, 190, 70], [60, 50, 120, 88], [120, 30, 150, 86]].map(([a, b, c, d], k) => (
							<line key={k} x1={a} y1={b} x2={c} y2={d} stroke="#6a8fa6" strokeWidth={1.8} />
						))}
					</g>
					<text x={560} y={plY + 70} textAnchor="middle" fontSize={18} fontWeight={800} fill={TOK.ink}>
						{labels.insect ?? 'Insect wing'}
					</text>
					<text x={560} y={plY + 92} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
						membrane, no bones
					</text>
					<g opacity={fadeAt(frame, beats.analogousVerdict ?? anaAt + 60)}>
						<Tag x={W / 2} y={70} text={analogousText} color={TOK.amberInk} fill="#fff6e6" size={17} strokeW={2.5 + idlePulse(frame) * 1.5} />
					</g>
					<text x={W / 2} y={36} textAnchor="middle" fontSize={20} fontWeight={800} fill={theme.accent}>
						Both fly
					</text>
				</g>
			)}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};

