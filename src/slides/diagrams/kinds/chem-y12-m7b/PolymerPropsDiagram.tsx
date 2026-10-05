// PolymerPropsDiagram — branching and side groups set a polymer's properties.
//
// Top row: the same monomer (ethene) as two polyethylenes. HDPE's linear
// chains pack close together (many dispersion contacts, dashed); LDPE's
// branched chains can't, so they sit apart with few contacts. Each gets its
// property chip. Bottom row: two repeat units drawn ball-and-stick,
//   PVC   –[CH₂–CHCl]ₙ–   polar C–Cl adds dipole forces (higher melting point)
//   PTFE  –[CF₂–CF₂]ₙ–    strong C–F bonds: inert, non-stick
// Chains are stylised bead strings; the repeat units are exact.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, ELEMENTS, Stick, Title, atomR, fadeAt, shade} from './shared';
import {Chain, chainPts} from './PolymerFateDiagram';

export type PolymerPropsProps = {
	reviewedPolymer?: boolean;
	title?: string;
	beats?: {hdpe?: number; hdpeChip?: number; ldpe?: number; ldpeChip?: number; pvc?: number; ptfe?: number};
	delay?: number;
};

const ID = 'c12m7pprops';
const W = 760;
const H = 530;
const F_COLOR = '#c6e07a';

type U = {el: string; x: number; y: number; label?: string};

const Unit = ({atoms, bonds, x, y, frame, seed}: {atoms: U[]; bonds: [number, number][]; x: number; y: number; frame: number; seed: number}) => {
	const bob = idleBob(frame, seed, 1.2);
	const P = (i: number) => ({x: x + atoms[i].x, y: y + atoms[i].y + bob});
	return (
		<g>
			<Stick x1={x - 74} y1={y + bob} x2={P(0).x} y2={P(0).y} />
			<Stick x1={P(1).x} y1={P(1).y} x2={x + 104} y2={y + bob} />
			{bonds.map(([a, c], k) => <Stick key={k} x1={P(a).x} y1={P(a).y} x2={P(c).x} y2={P(c).y} />)}
			{atoms.map((a, i) =>
				a.el === 'F' ? (
					<g key={i}>
						<circle cx={P(i).x} cy={P(i).y} r={15} fill={`url(#${ID}-atom-F)`} stroke={shade(F_COLOR, -0.35)} strokeWidth={1} />
						<text x={P(i).x} y={P(i).y + 5.5} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800}>F</text>
					</g>
				) : (
					<Ball key={i} id={ID} el={a.el} x={P(i).x} y={P(i).y} r={atomR(a.el, a.label) * (a.el === 'Cl' ? 0.9 : 1)} label={a.label ?? (a.el === 'Cl' ? 'Cl' : undefined)} />
				),
			)}
			<path d={`M ${x - 52} ${y - 62 + bob} h -10 v 124 h 10`} fill="none" stroke={TOK.ink} strokeWidth={3.5} />
			<path d={`M ${x + 82} ${y - 62 + bob} h 10 v 124 h -10`} fill="none" stroke={TOK.ink} strokeWidth={3.5} />
			<text x={x + 98} y={y + 66 + bob} fill={TOK.ink} fontSize={20} fontWeight={800} fontStyle="italic">n</text>
		</g>
	);
};

const PVC: U[] = [
	{el: 'C', x: 0, y: 0, label: 'CH₂'},
	{el: 'C', x: 60, y: 0},
	{el: 'H', x: 60, y: -44},
	{el: 'Cl', x: 60, y: 48},
];
const PTFE: U[] = [
	{el: 'C', x: 0, y: 0},
	{el: 'C', x: 60, y: 0},
	{el: 'F', x: 0, y: -46},
	{el: 'F', x: 0, y: 46},
	{el: 'F', x: 60, y: -46},
	{el: 'F', x: 60, y: 46},
];

export const PolymerPropsDiagram = ({title = 'Same monomer, different packing', beats = {}, delay = 62, reviewedPolymer = false}: PolymerPropsProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const b = {hdpe: 236, hdpeChip: 332, ldpe: 656, ldpeChip: 900, pvc: 1088, ptfe: 1268, ...beats};
	const L = 196;
	const R = 564;
	const TOPY = 196;

	// HDPE: 4 straight, tightly spaced chains. LDPE: 2 backbones with side branches, spaced out.
	const hdpe = [0, 1, 2, 3].map((i) => chainPts(L - 132 + (i % 2) * 8, TOPY - 36 + i * 22, 16, frame, i, 1.5, 0.6));
	const ldpeBack = [0, 1].map((i) => chainPts(R - 132 + i * 10, TOPY - 30 + i * 56, 16, frame, i + 7, 3, 0.8));
	const branches = ldpeBack.flatMap((ch, i) =>
		[3, 8, 12].map((k, j) => {
			const dir = (j % 2 ? 1 : -1) * (i === 0 ? 1 : -1);
			return Array.from({length: 4}, (_, m) => ({x: ch[k].x + (m + 1) * 9 + Math.sin(frame / 18 + m + j) * 1.2, y: ch[k].y + dir * (m + 1) * 12}));
		}),
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Linear HDPE packs closely; branched LDPE does not; PVC and PTFE side groups" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<defs>
				<radialGradient id={`${ID}-atom-F`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="75%" stopColor={F_COLOR} />
					<stop offset="100%" stopColor={shade(F_COLOR, -0.28)} />
				</radialGradient>
			</defs>
			<Title text={title} opacity={fadeAt(frame, 0)} />

			{[L, R].map((x) => (
				<g key={x} opacity={fadeAt(frame, 2)}>
					<DioramaPlinth id={ID} cx={x} cy={TOPY + 58} rx={168} />
				</g>
			))}

			{/* HDPE */}
			<g opacity={fadeAt(frame, b.hdpe, 12)}>
				<text x={L} y={80} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>HDPE: linear</text>
				{hdpe.slice(0, -1).map((ch, i) =>
					[1, 4, 7, 10, 13].map((k) => (
						<line key={`${i}-${k}`} x1={ch[k].x} y1={ch[k].y + 6} x2={hdpe[i + 1][k].x} y2={hdpe[i + 1][k].y - 6} stroke={theme.accent} strokeWidth={2.2} strokeDasharray="2 3" opacity={fadeAt(frame, b.hdpe + 40, 14)} />
					)),
				)}
				{hdpe.map((pts, i) => <Chain key={i} id={ID} pts={pts} frame={frame} seed={i} />)}
			</g>
			<g opacity={fadeAt(frame, b.hdpeChip, 12)}>
				<Chip x={L} y={TOPY + 124} text="close packing: rigid, denser" color={theme.accent} size={17} />
				<text x={L} y={TOPY + 160} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>milk crates, pipes</text>
			</g>

			{/* LDPE */}
			<g opacity={fadeAt(frame, b.ldpe, 12)}>
				<text x={R} y={80} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>LDPE: branched</text>
				{branches.map((br, j) => (
					<g key={j}>
						<polyline points={br.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="#6d6d6d" strokeWidth={3} />
						{br.map((p, m) => <circle key={m} cx={p.x} cy={p.y} r={6.2} fill={`url(#${ID}-atom-C)`} />)}
					</g>
				))}
				{ldpeBack.map((pts, i) => <Chain key={i} id={ID} pts={pts} frame={frame} seed={i + 7} />)}
			</g>
			<g opacity={fadeAt(frame, b.ldpeChip, 12)}>
				<Chip x={R} y={TOPY + 124} text="poor packing: flexible, less dense" color={theme.accent} size={17} />
				<text x={R} y={TOPY + 160} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>cling film, bags</text>
			</g>

			{/* side groups */}
			<g opacity={fadeAt(frame, b.pvc, 12)}>
				<Unit atoms={PVC} bonds={[[0, 1], [1, 2], [1, 3]]} x={L - 60} y={446} frame={frame} seed={3} />
				<circle cx={L} cy={494 + idleBob(frame, 3, 1.2)} r={24 + pulse * 2} fill="none" stroke={TOK.amber} strokeWidth={3} strokeDasharray="5 4" />
				<text x={L + 100} y={430} fill={TOK.ink} fontSize={19} fontWeight={800}>PVC</text>
				<text x={L + 100} y={452} fill={TOK.inkDim} fontSize={15} fontWeight={800}>polar C–Cl:</text>
				<text x={L + 100} y={471} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{reviewedPolymer ? 'formulation matters' : 'higher MP'}</text>
			</g>
			<g opacity={fadeAt(frame, b.ptfe, 12)}>
				<Unit atoms={PTFE} bonds={[[0, 1], [0, 2], [0, 3], [1, 4], [1, 5]]} x={R - 96} y={446} frame={frame} seed={4} />
				<text x={R + 64} y={430} fill={TOK.ink} fontSize={19} fontWeight={800}>PTFE</text>
				<text x={R + 64} y={452} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{reviewedPolymer ? 'fluorinated surface:' : 'strong C–F:'}</text>
				<text x={R + 64} y={471} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{reviewedPolymer ? 'low adhesion' : 'inert, non-stick'}</text>
			</g>
		</svg>
	);
};
