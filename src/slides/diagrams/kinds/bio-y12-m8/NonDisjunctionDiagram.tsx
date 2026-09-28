// NonDisjunctionDiagram — a homologous pair fails to separate in meiosis.
// Cells stand on stone plinths in three tiers: the parent cell with its pair,
// the two gametes it makes (one with both copies, one with none), and the two
// zygotes after each gamete is fertilised by a normal gamete carrying one
// copy. The copy counts (2 + 1 = 3, trisomy; 0 + 1 = 1, monosomy) are computed
// from the chromosomes actually drawn in each cell.
//
// Beats are frames after `delay`. Hold: chromosomes jostle, the count badges
// breathe.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GlossDefs, Note, NoteLine, ease, fadeAt} from './shared';

type Outcome = {at: number; name: string; example: string; karyotype: string; exampleAt?: number};

export type NonDisjunctionProps = {
	pairAt: number;
	splitAt: number;
	extra: Outcome;
	missing: Outcome;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8nd';
const W = 760;
const H = 530;

const Chromo = ({x, y, fill, s = 1}: {x: number; y: number; fill: string; s?: number}) => (
	<g transform={`translate(${x} ${y}) scale(${s})`}>
		<rect x={-7} y={-22} width={14} height={20} rx={7} fill={`url(#${ID}-g-${fill})`} stroke="rgba(0,0,0,0.3)" />
		<rect x={-7} y={2} width={14} height={20} rx={7} fill={`url(#${ID}-g-${fill})`} stroke="rgba(0,0,0,0.3)" />
		<rect x={-4} y={-3} width={8} height={6} rx={3} fill={`url(#${ID}-g-${fill})`} />
	</g>
);

export const NonDisjunctionDiagram = ({pairAt, splitAt, extra, missing, notes = [], delay = 62}: NonDisjunctionProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();

	const P = {x: 380, y: 96};
	const G = [{x: 200, y: 232}, {x: 560, y: 232}];
	const Z = [{x: 200, y: 386}, {x: 560, y: 386}];
	const R = 40;

	const cell = (x: number, y: number, key: string, o: number, glow = 0) => (
		<g key={key} opacity={o}>
			<DioramaPlinth id={`${ID}${key}`} cx={x} cy={y + R - 6} rx={66} />
			{glow > 0 && <circle cx={x} cy={y} r={R + 8} fill={TOK.amber} opacity={0.18 * glow} />}
			<circle cx={x} cy={y} r={R} fill={`url(#${ID}-cell)`} stroke="#c9a9b6" strokeWidth={2} />
		</g>
	);

	const pairIn = fadeAt(frame, pairAt, 14);
	const split = ease(frame, splitAt, splitAt + 50);
	const gIn = fadeAt(frame, splitAt, 14);
	const zIn = (i: number) => fadeAt(frame, i === 0 ? extra.at : missing.at, 14);
	const join = (i: number) => ease(frame, (i === 0 ? extra.at : missing.at) + 10, (i === 0 ? extra.at : missing.at) + 50);

	// The pair: both chromosomes travel together to gamete 0 (non-disjunction).
	const pair = [0, 1].map((k) => {
		const sx = P.x - 10 + k * 20, sy = P.y;
		const tx = G[0].x - 10 + k * 20, ty = G[0].y;
		return {x: sx + (tx - sx) * split, y: sy + (ty - sy) * split - Math.sin(split * Math.PI) * 30};
	});

	// Counts in each zygote = copies from the gamete + 1 from a normal gamete.
	const gameteCopies = [2, 0];
	const zCount = gameteCopies.map((c) => c + 1);
	const badge = (x: number, y: number, n: number, o: number, amber = false) => (
		<g opacity={o}>
			<circle cx={x + R + 4} cy={y - R + 6} r={15 + (amber ? idlePulse(frame, 50) * 2 : 0)} fill={amber ? TOK.amber : theme.accent} />
			<text x={x + R + 4} y={y - R + 12} textAnchor="middle" fill="#fff" fontSize={17} fontWeight={800}>{n}</text>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Non-disjunction gives one gamete two copies and one gamete none, leading to trisomy or monosomy" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pair: COL.violet, norm: COL.teal}} />
			<defs>
				<radialGradient id={`${ID}-cell`} cx="40%" cy="32%" r="75%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="75%" stopColor="#fbe9ef" />
					<stop offset="100%" stopColor="#efc9d6" />
				</radialGradient>
			</defs>

			{/* Parent */}
			{cell(P.x, P.y, 'p', pairIn)}
			<text x={P.x + 70} y={P.y - 14} fill={TOK.ink} fontSize={17} fontWeight={800} opacity={pairIn}>a homologous pair</text>
			<text x={P.x + 70} y={P.y + 8} fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={pairIn}>normally: two at each position</text>

			{/* Meiosis arrows + gametes */}
			<g opacity={gIn}>
				<Arrow x1={P.x - 30} y1={P.y + 44} x2={G[0].x + 40} y2={G[0].y - 40} color={TOK.inkMute} width={3} t={split} />
				<Arrow x1={P.x + 30} y1={P.y + 44} x2={G[1].x - 40} y2={G[1].y - 40} color={TOK.inkMute} width={3} t={split} />
				<text x={P.x} y={G[0].y - 30} textAnchor="middle" fill={COL.red} fontSize={17} fontWeight={800} opacity={fadeAt(frame, splitAt + 30, 12)}>non-disjunction</text>
				<text x={P.x} y={G[0].y - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, splitAt + 30, 12)}>the pair fails to separate</text>
				{cell(G[0].x, G[0].y, 'g0', 1)}
				{cell(G[1].x, G[1].y, 'g1', 1)}
				<text x={G[0].x - 58} y={G[0].y + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>gamete</text>
				<text x={G[1].x + 58} y={G[1].y + 6} fill={TOK.inkDim} fontSize={15} fontWeight={800}>gamete</text>
				{badge(G[0].x, G[0].y, gameteCopies[0], fadeAt(frame, splitAt + 50, 10))}
				{badge(G[1].x, G[1].y, gameteCopies[1], fadeAt(frame, splitAt + 50, 10))}
			</g>

			{/* Zygotes */}
			{[0, 1].map((i) => {
				const cfg = i === 0 ? extra : missing;
				const o = zIn(i);
				if (o <= 0) return null;
				const j = join(i);
				return (
					<g key={i}>
						<Arrow x1={G[i].x} y1={G[i].y + 48} x2={Z[i].x} y2={Z[i].y - 46} color={TOK.inkMute} width={3} t={o} />
						{cell(Z[i].x, Z[i].y, `z${i}`, o, fadeAt(frame, cfg.at + 50, 12))}
						{/* normal gamete brings one copy */}
						<g opacity={o}>
							<text x={i === 0 ? Z[i].x + 50 : Z[i].x - 50} y={Z[i].y - 40} textAnchor={i === 0 ? 'start' : 'end'} fill={COL.teal} fontSize={15} fontWeight={800}>+1 normal gamete</text>
						</g>
						{badge(Z[i].x, Z[i].y, zCount[i], fadeAt(frame, cfg.at + 50, 10), true)}
						<g opacity={fadeAt(frame, cfg.at + 50, 12)}>
							<text x={i === 0 ? Z[i].x - 60 : Z[i].x + 60} y={Z[i].y - 6} textAnchor={i === 0 ? 'end' : 'start'} fill={TOK.amberInk} fontSize={20} fontWeight={800}>{cfg.name}</text>
						</g>
						<g opacity={fadeAt(frame, cfg.exampleAt ?? cfg.at + 60, 12)}>
							<text x={Z[i].x} y={Z[i].y + 82} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{cfg.example}</text>
							<text x={Z[i].x} y={Z[i].y + 102} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{cfg.karyotype}</text>
						</g>
						{/* chromosomes in the zygote */}
						{Array.from({length: zCount[i]}, (_, k) => {
							const isNew = k === zCount[i] - 1;
							const cx = Z[i].x + (k - (zCount[i] - 1) / 2) * 20;
							const fromY = Z[i].y - 70;
							const y = isNew ? fromY + (Z[i].y - fromY) * j : Z[i].y;
							const oo = isNew ? Math.min(1, j * 2) : o;
							return <g key={k} opacity={oo}><Chromo x={cx} y={y + idleBob(frame, k + i * 5, 1.2)} fill={isNew ? 'norm' : 'pair'} s={0.9} /></g>;
						})}
					</g>
				);
			})}

			{/* the travelling pair (drawn last, on top) */}
			{pairIn > 0 && pair.map((p, k) => (
				<g key={k} opacity={pairIn}>
					<Chromo x={p.x} y={p.y + idleBob(frame, k + 20, 1.2)} fill="pair" s={0.9} />
				</g>
			))}

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
