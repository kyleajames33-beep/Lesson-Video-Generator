// MultiHitDiagram — the cell cycle's checkpoints, then the multi-hit route to
// cancer. Top: a cell-cycle ring on a stone plinth with checkpoint gates; a
// marker runs round it, and a gate stops it when its condition fails (no
// growth signal, or damaged DNA). Bottom: one cell lineage over time on a
// row of plinths. Each generation carries one more driver mutation (props say
// how many are shown); each mutation adds a growth advantage, so the clone
// grows generation by generation. Only the last generation, with every hit,
// divides without control.
//
// Beats are frames after `delay`. Hold: the marker keeps cycling, the lineage
// jostles.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, fadeAt, hash01} from './shared';

export type MultiHitProps = {
	cycleAt: number;
	checkpoints: {label: string; at: number}[];
	haltAt: number;
	lineageAt: number;
	hits: number;
	hitGap?: number;
	lineageLabel: string;
	uncontrolledLabel: string;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8mh';
const W = 760;
const H = 530;
const RC = {x: 380, y: 122, r: 78};

export const MultiHitDiagram = ({cycleAt, checkpoints, haltAt, lineageAt, hits, hitGap = 60, lineageLabel, uncontrolledLabel, notes = [], delay = 62}: MultiHitProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const cyc = fadeAt(frame, cycleAt, 14);

	// marker around the ring; it stops at the first gate while "halted" (haltAt .. haltAt+120)
	const gateAngles = checkpoints.map((_, i) => (checkpoints.length === 1 ? -Math.PI / 2 : -Math.PI * (5 / 6) + (i * (Math.PI * 2) / 3) / (checkpoints.length - 1)));
	const halted = frame >= haltAt && frame < haltAt + 150;
	const speed = 0.035;
	const rawA = -Math.PI / 2 + (frame - cycleAt) * speed;
	let a = rawA;
	if (halted) {
		// hold just before the first gate
		const g = gateAngles[0] - 0.18;
		const turns = Math.floor((rawA - g) / (Math.PI * 2));
		a = Math.min(rawA, g + Math.max(0, turns) * Math.PI * 2);
	}
	const mk = {x: RC.x + Math.cos(a) * RC.r, y: RC.y + Math.sin(a) * RC.r * 0.8};

	// lineage
	const gens = hits + 1;
	const gx = (i: number) => 80 + (i * 600) / (gens - 1);
	const gy = 392;
	const genAt = (i: number) => lineageAt + i * hitGap;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cell-cycle checkpoints and the accumulation of several mutations in one lineage" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{cell: '#f2c4cf', bad: '#e58a9e', mk: theme.accent}} />

			{/* cycle ring */}
			<g opacity={cyc}>
				<DioramaPlinth id={`${ID}c`} cx={RC.x} cy={RC.y + 88} rx={110} />
				<ellipse cx={RC.x} cy={RC.y} rx={RC.r} ry={RC.r * 0.8} fill="none" stroke="#cfd6de" strokeWidth={10} />
				<text x={RC.x} y={RC.y + 6} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>cell cycle</text>
				{checkpoints.map((c, i) => {
					const ga = gateAngles[i];
					const x = RC.x + Math.cos(ga) * RC.r, y = RC.y + Math.sin(ga) * RC.r * 0.8;
					const o = fadeAt(frame, c.at, 12);
					const closed = i === 0 && halted;
					const lx = x + (Math.cos(ga) >= 0 ? 24 : -24);
					return (
						<g key={i} opacity={o}>
							<rect x={x - 7} y={y - 14} width={14} height={28} rx={4} fill={closed ? COL.red : COL.green} stroke="#fff" strokeWidth={2} transform={`rotate(${(ga * 180) / Math.PI} ${x} ${y})`} />
							<text x={lx} y={y + 5} textAnchor={Math.cos(ga) >= 0 ? 'start' : 'end'} fill={closed ? COL.red : TOK.ink} fontSize={15} fontWeight={800}>{c.label}</text>
						</g>
					);
				})}
				<circle cx={mk.x} cy={mk.y} r={10} fill={`url(#${ID}-g-mk)`} stroke="#fff" strokeWidth={2} />
				<text x={RC.x} y={RC.y - RC.r - 12} textAnchor="middle" fill={COL.red} fontSize={16} fontWeight={800} opacity={halted ? 1 : 0}>checkpoint halts division</text>
			</g>

			{/* lineage */}
			<g opacity={fadeAt(frame, lineageAt, 14)}>
				<text x={W / 2} y={292} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{lineageLabel}</text>
				<line x1={gx(0)} y1={gy + 58} x2={gx(gens - 1)} y2={gy + 58} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={gx(gens - 1)} y={gy + 80} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>time (years) →</text>
			</g>
			{Array.from({length: gens}, (_, i) => {
				const o = fadeAt(frame, genAt(i), 14);
				if (o <= 0) return null;
				const count = Math.min(9, 1 + i * 2);
				const last = i === gens - 1;
				return (
					<g key={i} opacity={o}>
						<DioramaPlinth id={`${ID}g${i}`} cx={gx(i)} cy={gy + 20} rx={56} />
						{Array.from({length: count}, (_, k) => {
							const x = gx(i) + (k % 3 - 1) * 20 + (hash01(k + i * 9) - 0.5) * 6;
							const y = gy - Math.floor(k / 3) * 17 + idleBob(frame, k + i * 10, 1.4);
							return <circle key={k} cx={x} cy={y} r={10} fill={`url(#${ID}-g-${i > 0 ? 'bad' : 'cell'})`} stroke="rgba(0,0,0,0.25)" />;
						})}
						{/* mutation tally */}
						{Array.from({length: i}, (_, k) => (
							<path key={k} d={`M ${gx(i) - (i - 1) * 7 + k * 14 - 4} ${gy - 70} l 4 -8 l 0 16 l 4 -8`} stroke={COL.red} strokeWidth={2.5} fill="none" />
						))}
						<text x={gx(i)} y={gy + 104} textAnchor="middle" fill={i ? COL.red : TOK.inkDim} fontSize={15} fontWeight={800}>{i === 0 ? 'normal' : `${i} hit${i > 1 ? 's' : ''}`}</text>
						{last && (
							<text x={gx(i) - 10} y={gy - 96} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={0.8 + 0.2 * idlePulse(frame, 50)}>{uncontrolledLabel}</text>
						)}
					</g>
				);
			})}

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
