// PetRepeatDiagram — reading the PET repeat unit.
//
//   –[ O–CH₂–CH₂–O–C(=O)–C₆H₄–C(=O) ]ₙ–
//
// Drawn as one ball-and-stick repeat unit in brackets on a long plinth, with
// the next unit's oxygen faded in beyond the closing bracket (that O–C=O bond
// is the unit's second ester link). Beats: the diol part (–O–CH₂–CH₂–O–, from
// ethylene glycol) is tinted and named; then the diacid part (–CO–C₆H₄–CO–,
// from terephthalic acid); then BOTH ester linkages ring amber and are
// numbered 1 and 2; finally the rigid benzene ring glows with the property it
// gives (the melting point is copied from the scene: about 260 °C).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, ELEMENTS, Stick, Title, atomR, fadeAt, popAt} from './shared';

export type PetRepeatProps = {
	title?: string;
	meltingPoint?: string;
	beats?: {unit?: number; diol?: number; diacid?: number; links?: number; ring?: number};
	delay?: number;
};

const ID = 'c12m7pet';
const W = 760;
const H = 530;
const Y = 262;
const DIOL = '#5aa0c8';
const DIACID = '#8e7cc3';

type A = {el: string; x: number; y: number; label?: string; faded?: boolean};

// The unit, left to right (see header).
const ringC = {x: 460, y: Y};
const RR = 58;
const ringV = Array.from({length: 6}, (_, k) => ({x: ringC.x + RR * Math.cos((k * Math.PI) / 3), y: ringC.y + RR * Math.sin((k * Math.PI) / 3)}));
// ringV[3] = left vertex, ringV[0] = right vertex (para positions)
const ATOMS: A[] = [
	{el: 'O', x: 104, y: Y}, // 0 diol O
	{el: 'C', x: 164, y: Y, label: 'CH₂'}, // 1
	{el: 'C', x: 224, y: Y, label: 'CH₂'}, // 2
	{el: 'O', x: 284, y: Y}, // 3 diol O (ester O of link 1)
	{el: 'C', x: 344, y: Y}, // 4 carbonyl C (link 1)
	{el: 'O', x: 344, y: Y - 64}, // 5 its C=O
	...ringV.map((p) => ({el: 'C', x: p.x, y: p.y})), // 6..11 (6 = right vertex, 9 = left vertex)
	{el: 'C', x: 576, y: Y}, // 12 carbonyl C (link 2)
	{el: 'O', x: 576, y: Y - 64}, // 13 its C=O
	{el: 'O', x: 648, y: Y, faded: true}, // 14 next unit's O (ester O of link 2)
	// ring H on the four C–H vertices (1, 2, 4, 5 → atoms 7, 8, 10, 11)
	...[1, 2, 4, 5].map((k) => ({el: 'H', x: ringC.x + (RR + 38) * Math.cos((k * Math.PI) / 3), y: ringC.y + (RR + 38) * Math.sin((k * Math.PI) / 3)})), // 15..18
];
const BONDS: [number, number, number][] = [
	[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 2], [4, 9, 1],
	[6, 7, 2], [7, 8, 1], [8, 9, 2], [9, 10, 1], [10, 11, 2], [11, 6, 1],
	[6, 12, 1], [12, 13, 2], [12, 14, 1],
	[7, 15, 1], [8, 16, 1], [10, 17, 1], [11, 18, 1],
];

export const PetRepeatDiagram = ({title = 'Two ester linkages per repeat unit', meltingPoint = 'about 260 °C', beats = {}, delay = 62}: PetRepeatProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {unit: 10, diol: 178, diacid: 448, links: 688, ring: 958, ...beats};
	const pulse = idlePulse(frame);
	const bob = idleBob(frame, 1, 1.2);
	const shown = Math.min(1, popAt(frame, fps, b.unit) * 1.2);
	const diolIn = fadeAt(frame, b.diol, 14);
	const acidIn = fadeAt(frame, b.diacid, 14);
	const linksIn = fadeAt(frame, b.links, 12);
	const ringIn = fadeAt(frame, b.ring, 16);
	const p = (i: number) => ({x: ATOMS[i].x, y: ATOMS[i].y + bob});

	const linkBox = (i: number, j: number, n: number) => {
		const a = p(i);
		const c = p(j);
		const cx = (a.x + c.x) / 2;
		return (
			<g key={n} opacity={linksIn}>
				<ellipse cx={cx} cy={Y + bob - 18} rx={52} ry={66} fill="none" stroke={TOK.amber} strokeWidth={3.5 + pulse * 1.5} strokeDasharray="6 5" />
				<circle cx={cx} cy={Y + bob + 70} r={15} fill={TOK.amber} />
				<text x={cx} y={Y + bob + 76} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={900}>{n}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The PET repeat unit contains two ester linkages" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<defs>
				<radialGradient id={`${ID}-ring`}>
					<stop offset="0%" stopColor={theme.accent2} stopOpacity={0.55} />
					<stop offset="100%" stopColor={theme.accent2} stopOpacity={0} />
				</radialGradient>
			</defs>
			<Title text={title} opacity={fadeAt(frame, 0)} />
			<g opacity={fadeAt(frame, 2)} transform={`translate(0, 380) scale(1, 0.5) translate(0, -380)`}>
				<DioramaPlinth id={ID} cx={W / 2} cy={380} rx={350} />
			</g>

			{/* part tints (under the atoms) */}
			<rect x={82} y={Y - 34 + bob} width={224} height={68} rx={34} fill={DIOL} opacity={0.22 * diolIn} />
			<rect x={318} y={Y - 100 + bob} width={284} height={176} rx={40} fill={DIACID} opacity={0.18 * acidIn} />
			<circle cx={ringC.x} cy={ringC.y + bob} r={92 + pulse * 4} fill={`url(#${ID}-ring)`} opacity={ringIn} />

			<g opacity={shown}>
				{/* the bond in from the previous unit, and brackets */}
				<Stick x1={44} y1={Y + bob} x2={p(0).x} y2={p(0).y} />
				{BONDS.map(([a, c, o], k) => (
					<Stick key={k} x1={p(a).x} y1={p(a).y} x2={p(c).x} y2={p(c).y} order={o} opacity={ATOMS[a].faded || ATOMS[c].faded ? 0.8 : 1} />
				))}
				<Stick x1={p(14).x} y1={p(14).y} x2={716} y2={Y + bob} opacity={0.45} />
				{ATOMS.map((a, i) => (
					<Ball key={i} id={ID} el={a.el} x={p(i).x} y={p(i).y} r={atomR(a.el, a.label)} label={a.label} opacity={a.faded ? 0.5 : 1} />
				))}
				<path d={`M 74 ${Y - 58 + bob} h -12 v 116 h 12`} fill="none" stroke={TOK.ink} strokeWidth={4} />
				<path d={`M 612 ${Y - 58 + bob} h 12 v 116 h -12`} fill="none" stroke={TOK.ink} strokeWidth={4} />
				<text x={632} y={Y + 72 + bob} fill={TOK.ink} fontSize={24} fontWeight={800} fontStyle="italic">n</text>
				<text x={680} y={Y - 34 + bob} textAnchor="middle" fill={TOK.inkMute} fontSize={15} fontWeight={800}>next unit</text>
			</g>

			{/* part labels */}
			<g opacity={diolIn}>
				<text x={194} y={Y - 58 + bob} textAnchor="middle" fill={DIOL} fontSize={20} fontWeight={800}>diol part</text>
				<text x={194} y={404} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>–O–CH₂–CH₂–O–</text>
				<text x={194} y={426} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>from ethylene glycol</text>
			</g>
			<g opacity={acidIn}>
				<text x={460} y={Y - 116 + bob} textAnchor="middle" fill={DIACID} fontSize={20} fontWeight={800}>diacid part</text>
				<text x={460} y={404} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>–CO–C₆H₄–CO–</text>
				<text x={460} y={426} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>from terephthalic acid</text>
			</g>

			{/* the two ester linkages */}
			{linkBox(3, 4, 1)}
			{linkBox(12, 14, 2)}
			<text x={W / 2} y={470} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={linksIn}>
				two ester linkages per repeat unit, not one
			</text>
			<text x={W / 2} y={504} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800} opacity={ringIn}>
				rigid benzene ring: stiff chains, melts at {meltingPoint}
			</text>
		</svg>
	);
};
