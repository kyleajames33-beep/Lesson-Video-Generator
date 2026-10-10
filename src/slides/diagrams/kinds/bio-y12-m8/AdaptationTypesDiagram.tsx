// AdaptationTypesDiagram (bio12m8AdaptationTypes): the three categories of
// temperature adaptation, compared on the three properties the scene names:
// speed, energy cost and reversibility.
//
// One column per category, each with a small coded illustration that moves
// the way the adaptation works:
//   physiological  a skin section: sweat beads rise from a gland and the
//                  surface vessel widens (vasodilation), heat arrows leave
//   behavioural    a lizard on a rock under the sun shuffles into shade
//   structural     a fur and blubber cross-section; heat arrows from the body
//                  are held back by the insulating layers
// Under each column, three rows of chips (speed / energy cost / reversible?)
// fill in on that column's beat. The properties are the scene's own words.
// The exam beat lights the two-step habit: classify, then explain the
// mechanism that moves heat.
//
// Beats are frames after `delay`. Hold: sweat beads, the lizard's breathing
// and the heat arrows keep gentle motion.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob} from '../../diorama';
import {COL, Pill, ease, fadeAt, popAt} from './shared';

export type AdaptationTypesProps = {
	at?: {physiological?: number; behavioural?: number; structural?: number; exam?: number};
	delay?: number;
};

const ID = 'b12m8at';
const W = 760;
const H = 530;
const COLW = 236;
const GAP = (W - 3 * COLW) / 4;
const cx0 = (k: number) => GAP + k * (COLW + GAP);
const ART_Y0 = 54;
const ART_H = 180;
const SUN = '#f2b33d';
const HEAT = '#e0603c';

type Chip = {label: string; value: string; tone: 'good' | 'bad' | 'mid'};
const COLUMNS: {title: string; examples: string; chips: Chip[]}[] = [
	{
		title: 'physiological',
		examples: 'sweating, shivering, vasodilation',
		chips: [
			{label: 'speed', value: 'fast, automatic', tone: 'good'},
			{label: 'energy cost', value: 'high', tone: 'bad'},
			{label: 'reversible', value: 'yes, switches off', tone: 'good'},
		],
	},
	{
		title: 'behavioural',
		examples: 'basking, shade-seeking, huddling',
		chips: [
			{label: 'speed', value: 'slower', tone: 'mid'},
			{label: 'energy cost', value: 'very low', tone: 'good'},
			{label: 'reversible', value: 'yes, by choice', tone: 'good'},
		],
	},
	{
		title: 'structural',
		examples: 'fur, blubber, countercurrent exchange',
		chips: [
			{label: 'speed', value: 'always in place', tone: 'mid'},
			{label: 'energy cost', value: 'none ongoing', tone: 'good'},
			{label: 'reversible', value: 'no, permanent', tone: 'bad'},
		],
	},
];

export const AdaptationTypesDiagram = ({at = {}, delay = 62}: AdaptationTypesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const beats = [at.physiological ?? 200, at.behavioural ?? 350, at.structural ?? 600];
	const tExam = at.exam ?? 830;
	const toneColor = (tone: Chip['tone']) => (tone === 'good' ? theme.accent : tone === 'bad' ? HEAT : TOK.inkDim);

	// ---- physiological art: skin section ----
	const Physio = ({x0, on}: {x0: number; on: number}) => {
		const cx = x0 + COLW / 2;
		const skinY = ART_Y0 + 70;
		const widen = ease(frame, beats[0] + 30, beats[0] + 80);
		return (
			<g>
				<rect x={x0 + 14} y={skinY} width={COLW - 28} height={84} rx={10} fill={COL.flesh} />
				<rect x={x0 + 14} y={skinY} width={COLW - 28} height={14} rx={6} fill="#e7b393" />
				{/* surface capillary: widens on the beat */}
				<path d={`M ${x0 + 24} ${skinY + 34} C ${cx - 40} ${skinY + 26}, ${cx + 40} ${skinY + 44}, ${x0 + COLW - 24} ${skinY + 34}`} fill="none" stroke={COL.red} strokeWidth={4 + 7 * widen} strokeLinecap="round" opacity={0.85} />
				{/* sweat gland and duct */}
				<path d={`M ${cx - 50} ${skinY + 72} q -10 -8 0 -16 q 10 -8 0 -16 L ${cx - 50} ${skinY}`} fill="none" stroke="#7aa9cf" strokeWidth={3} />
				{[0, 1, 2].map((k) => {
					const p = (((frame + k * 20) % 60) + 60) % 60 / 60;
					return (
						<path key={k} d={`M ${cx - 50 + k * 14} ${skinY - 4 - p * 16} q 5 8 0 12 q -5 -4 0 -12`} fill="#9fd0f0" stroke="#5f9dc8" strokeWidth={1} opacity={on * Math.sin(p * Math.PI)} />
					);
				})}
				{/* heat leaving */}
				{[0, 1].map((k) => {
					const p = (((frame + k * 30) % 60) + 60) % 60 / 60;
					return (
						<path key={`h${k}`} d={`M ${cx + 30 + k * 30} ${skinY - 6 - p * 30} q 5 -6 0 -12 q -5 -6 0 -12`} fill="none" stroke={HEAT} strokeWidth={3} strokeLinecap="round" opacity={on * widen * Math.sin(p * Math.PI)} />
					);
				})}
				<text x={x0 + 22} y={skinY + 106} fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, beats[0] + 40, 14)}>vessel widens, sweat evaporates</text>
			</g>
		);
	};

	// ---- behavioural art: lizard moves from sun into shade ----
	const Behav = ({x0, on}: {x0: number; on: number}) => {
		const move = ease(frame, beats[1] + 60, beats[1] + 130);
		const rockY = ART_Y0 + 150;
		const lx = x0 + 70 + move * 96;
		const breath = 1 + 0.03 * Math.sin(frame / 9);
		return (
			<g>
				<circle cx={x0 + 40} cy={ART_Y0 + 48} r={20} fill={SUN} />
				{Array.from({length: 8}, (_, k) => {
					const a = (k / 8) * Math.PI * 2;
					return <line key={k} x1={x0 + 40 + Math.cos(a) * 26} y1={ART_Y0 + 48 + Math.sin(a) * 26} x2={x0 + 40 + Math.cos(a) * 34} y2={ART_Y0 + 48 + Math.sin(a) * 34} stroke={SUN} strokeWidth={3} strokeLinecap="round" />;
				})}
				{/* shade from a bush on the right */}
				<path d={`M ${x0 + 140} ${rockY} L ${x0 + COLW - 14} ${rockY} L ${x0 + COLW - 14} ${rockY - 8} Z`} fill="rgba(0,0,0,0.08)" />
				<rect x={x0 + 134} y={rockY - 6} width={COLW - 148} height={8} rx={4} fill="rgba(60,80,60,0.18)" />
				<circle cx={x0 + COLW - 40} cy={ART_Y0 + 82} r={30} fill="#7fae6e" />
				<circle cx={x0 + COLW - 66} cy={ART_Y0 + 96} r={22} fill="#8fbd7d" />
				<rect x={x0 + COLW - 44} y={ART_Y0 + 104} width={8} height={rockY - ART_Y0 - 104} fill="#8a6b52" />
				{/* ground */}
				<rect x={x0 + 14} y={rockY} width={COLW - 28} height={10} rx={4} fill="#d8cdb9" />
				{/* lizard */}
				<g transform={`translate(${lx},${rockY - 10}) scale(${breath},1)`} opacity={on}>
					<ellipse cx={0} cy={0} rx={26} ry={8} fill="#8f9c5a" />
					<ellipse cx={26} cy={-2} rx={9} ry={6} fill="#8f9c5a" />
					<path d="M -24 0 Q -50 6 -62 -2" fill="none" stroke="#8f9c5a" strokeWidth={5} strokeLinecap="round" />
					<line x1={-12} y1={6} x2={-18} y2={12} stroke="#7a8648" strokeWidth={3} strokeLinecap="round" />
					<line x1={12} y1={6} x2={18} y2={12} stroke="#7a8648" strokeWidth={3} strokeLinecap="round" />
					<circle cx={30} cy={-4} r={1.8} fill="#2b2b2b" />
				</g>
				<text x={x0 + 22} y={ART_Y0 + ART_H - 2} fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, beats[1] + 80, 14)}>moves into shade when hot</text>
			</g>
		);
	};

	// ---- structural art: fur + blubber cross-section ----
	const Struct = ({x0, on}: {x0: number; on: number}) => {
		const y = ART_Y0 + 40;
		const w = COLW - 28;
		return (
			<g>
				{/* fur */}
				{Array.from({length: 22}, (_, k) => (
					<line key={k} x1={x0 + 18 + k * (w / 22)} y1={y + 34} x2={x0 + 22 + k * (w / 22) + Math.sin(k) * 4} y2={y + 4} stroke="#a77b52" strokeWidth={2.5} strokeLinecap="round" />
				))}
				<rect x={x0 + 14} y={y + 34} width={w} height={10} fill="#e7b393" />
				{/* blubber */}
				<rect x={x0 + 14} y={y + 44} width={w} height={44} fill="#f6e7c6" />
				{Array.from({length: 9}, (_, k) => (
					<circle key={k} cx={x0 + 30 + k * 22} cy={y + 66 + (k % 2) * 8} r={7} fill="#fbf0d8" stroke="#e5d2a8" />
				))}
				{/* body core */}
				<rect x={x0 + 14} y={y + 88} width={w} height={36} fill="#e8a0a0" />
				<text x={x0 + COLW - 22} y={y + 112} textAnchor="end" fill="#8a3b3b" fontSize={13} fontWeight={800}>warm body</text>
				{/* heat arrows held back */}
				{[0, 1, 2].map((k) => {
					const p = (((frame + k * 22) % 66) + 66) % 66 / 66;
					const ax = x0 + 46 + k * 60;
					const yy = y + 104 - p * 50;
					return <circle key={k} cx={ax} cy={yy} r={5} fill={HEAT} opacity={on * Math.sin(p * Math.PI) * 0.85} />;
				})}
				<text x={x0 + 22} y={y + 24 - 30} fill={TOK.inkDim} fontSize={13} fontWeight={800} opacity={on}>fur traps air</text>
				<text x={x0 + 22} y={ART_Y0 + ART_H - 2} fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, beats[2] + 40, 14)}>layers slow heat loss</text>
			</g>
		);
	};
	const arts = [Physio, Behav, Struct];

	const exam = fadeAt(frame, tExam, 16);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Three categories of temperature adaptation compared: physiological is fast and costly, behavioural is slower and cheap, structural is permanent with no ongoing cost" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{COLUMNS.map((c, k) => {
				const x0 = cx0(k);
				const p = Math.min(1, popAt(frame, fps, beats[k]));
				const Art = arts[k];
				return (
					<g key={c.title} opacity={p} transform={`translate(0,${(1 - p) * 14})`}>
						<rect x={x0} y={18} width={COLW} height={H - 92} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
						<text x={x0 + COLW / 2} y={46} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{c.title}</text>
						<Art x0={x0} on={p} />
						<text x={x0 + COLW / 2} y={ART_Y0 + ART_H + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={13} fontWeight={700}>{c.examples}</text>
						{c.chips.map((ch, j) => {
							const y = ART_Y0 + ART_H + 58 + j * 52;
							const cp = fadeAt(frame, beats[k] + 30 + j * 16, 12);
							return (
								<g key={ch.label} opacity={cp}>
									<text x={x0 + 16} y={y} fill={TOK.inkMute} fontSize={13} fontWeight={800} letterSpacing="0.04em">{ch.label.toUpperCase()}</text>
									<text x={x0 + 16} y={y + 22} fill={toneColor(ch.tone)} fontSize={17} fontWeight={800}>{ch.value}</text>
								</g>
							);
						})}
					</g>
				);
			})}
			<g opacity={exam}>
				<Pill x={W / 2 - 150} y={H - 40} text="1  classify it" color={theme.accent} size={17} />
				<Pill x={W / 2 + 110} y={H - 40} text="2  explain how heat moves" color={theme.accent} size={17} />
			</g>
		</svg>
	);
};
