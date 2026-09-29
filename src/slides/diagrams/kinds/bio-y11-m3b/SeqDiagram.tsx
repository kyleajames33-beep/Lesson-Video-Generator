// SeqDiagram (bio11m3Seq) — inferring relationships from sequences.
//
// mode 'align'  The same stretch of DNA (or protein) from each species lies as
//               a row of letter tiles on a stone ledge, aligned position by
//               position. On `diff` every position that differs from the
//               first row lights up; on `matrix` a difference matrix builds,
//               every count COMPUTED from the tiles (so the table can never
//               disagree with the letters); on `closest` the pair with the
//               fewest differences glows amber: the most recent common
//               ancestor.
// mode 'tree'   Difference counts against one reference species (props, e.g.
//               cytochrome c vs human) build as bars, ranked fewest first, and
//               a branching diagram grows beside them: the fewer the
//               differences, the more recently that species' branch joins the
//               reference lineage. The diagram shows branching ORDER only
//               (joins are evenly spaced), so a count of 0 is not drawn as
//               "the same species".

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Footer, H, Pill, Title, W, clamp, easeT, fadeAt, popAt, type FooterLine} from './shared';
import {EcoGloss} from './icons';

export type SeqRow = {name: string; seq: string; at: number};
export type SeqProps = {
	mode?: 'align' | 'tree';
	title?: string;
	rows?: SeqRow[];
	reference?: string;
	species?: {name: string; diff: number; at: number}[];
	unit?: string;
	beats?: Partial<{diff: number; matrix: number; closest: number; tree: number}>;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3seq';
const BASE_COL: Record<string, string> = {A: '#5fa34a', T: '#d9644a', G: '#e0a030', C: '#3f86b8'};

const diffCount = (a: string, b: string) => {
	let d = 0;
	for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) d++;
	return d;
};

export const SeqDiagram = ({mode = 'align', title, rows = [], reference = 'Human', species = [], unit = 'differences', beats = {}, footer = [], delay = 62}: SeqProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const bt = {diff: 9999, matrix: 9999, closest: 9999, tree: 9999, ...beats};
	const top = title ? 52 : 12;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const pulse = idlePulse(frame);

	if (mode === 'tree') {
		const sorted = [...species].sort((a, b) => a.diff - b.diff);
		const n = sorted.length + 1;
		const rowH = Math.min(58, (H - top - footH - 40) / n);
		const y0 = top + 36;
		const rowY = (i: number) => y0 + i * rowH;
		const maxD = Math.max(1, ...sorted.map((s) => s.diff));
		const barX = 150;
		const barMax = 190;
		const tipX = W - 150;
		const rootX = 430;
		const rootY = rowY(n - 1) + rowH * 0.7;
		const diagX = (y: number) => rootX + ((rootY - y) / (rootY - rowY(0))) * (tipX - rootX);
		const grow = easeT(frame, bt.tree, bt.tree + 40);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Sequence differences'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<text x={barX} y={y0 - 20} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{unit} from {reference.toLowerCase()}</text>
				{/* reference row */}
				<g opacity={fadeAt(frame, 0, 12)}>
					<text x={barX - 12} y={rowY(0) + 6} textAnchor="end" fill={TOK.ink} fontSize={17} fontWeight={800}>{reference}</text>
					<text x={barX} y={rowY(0) + 6} fill={TOK.inkMute} fontSize={15} fontWeight={700}>reference</text>
				</g>
				{sorted.map((s, i) => {
					const y = rowY(i + 1);
					const o = fadeAt(frame, s.at, 12);
					const len = interpolate(frame, [s.at, s.at + 24], [0, (s.diff / maxD) * barMax], clamp);
					return (
						<g key={s.name} opacity={o}>
							<text x={barX - 12} y={y + 6} textAnchor="end" fill={TOK.ink} fontSize={17} fontWeight={800}>{s.name}</text>
							<rect x={barX} y={y - 10} width={Math.max(3, len)} height={20} rx={5} fill={theme.accent} opacity={0.85} />
							<text x={barX + Math.max(3, len) + 8} y={y + 6} fill={TOK.ink} fontSize={17} fontWeight={800}>{s.diff}</text>
						</g>
					);
				})}
				{/* branching diagram */}
				{grow > 0 && (
					<g>
						<line x1={rootX} y1={rootY} x2={rootX + (tipX - rootX) * grow} y2={rootY - (rootY - rowY(0)) * grow} stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />
						{sorted.map((s, i) => {
							const y = rowY(i + 1);
							const f = (rootY - y) / (rootY - rowY(0));
							if (grow < f) return null;
							const jx = diagX(y);
							const o = fadeAt(frame, bt.tree + 40 * f, 10);
							return (
								<g key={s.name} opacity={o}>
									<line x1={jx} y1={y} x2={tipX} y2={y} stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />
									<circle cx={jx} cy={y} r={6} fill="#fff" stroke={theme.accent} strokeWidth={3} />
									<text x={tipX + 12} y={y + 6} fill={TOK.ink} fontSize={16} fontWeight={800}>{s.name}</text>
								</g>
							);
						})}
						{grow >= 1 && (
							<g opacity={fadeAt(frame, bt.tree + 40, 12)}>
								<text x={tipX + 12} y={rowY(0) + 6} fill={TOK.ink} fontSize={16} fontWeight={800}>{reference}</text>
								<circle cx={diagX(rowY(1))} cy={rowY(1)} r={9 + 2 * pulse} fill="none" stroke={TOK.amber} strokeWidth={3} />
								<Pill x={rootX - 70} y={rootY - 4} text="oldest split" size={14} color={TOK.inkDim} />
								<Pill x={diagX(rowY(1)) - 60} y={rowY(1) - 24} text="most recent split" size={14} color={TOK.amber} textColor={TOK.amberInk} />
							</g>
						)}
						<DioramaPlinth id={`${ID}r`} cx={rootX} cy={rootY + 8} rx={26} />
					</g>
				)}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	// ---- align mode ----
	const n = rows.length;
	const len = Math.max(...rows.map((r) => r.seq.length));
	const tile = Math.min(46, (W - 200) / len - 6);
	const gap = 6;
	const seqX = 150;
	const rowH = tile + 22;
	const y0 = top + 20;
	const ref = rows[0]?.seq ?? '';
	const pairs: {a: number; b: number; d: number}[] = [];
	for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) pairs.push({a: i, b: j, d: diffCount(rows[i].seq, rows[j].seq)});
	const minD = Math.min(...pairs.map((p) => p.d));
	const closest = pairs.find((p) => p.d === minD);
	const ledgeY = y0 + n * rowH + 4;
	const matY = ledgeY + 44;
	const cell = 64;
	const matX = W / 2 - ((n + 1) * cell) / 2 + cell / 2;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Sequence alignment'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* stone ledge under the rows */}
			<rect x={seqX - 12} y={y0 - 8} width={len * (tile + gap) + 18} height={n * rowH + 8} rx={12} fill="#e4e1db" stroke="#bdb8ae" strokeWidth={2} />
			<rect x={seqX - 12} y={y0 + n * rowH} width={len * (tile + gap) + 18} height={10} rx={4} fill="#b3afa7" />
			{rows.map((r, i) => {
				const y = y0 + i * rowH;
				return (
					<g key={r.name}>
						<text x={seqX - 22} y={y + tile / 2 + 6} textAnchor="end" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, r.at, 12)}>{r.name}</text>
						{r.seq.split('').map((ch, k) => {
							const p = popAt(frame, fps, r.at + k * 3);
							const differs = i > 0 && ch !== ref[k];
							const hi = differs && frame > bt.diff ? fadeAt(frame, bt.diff + k * 4, 10) : 0;
							const x = seqX + k * (tile + gap);
							return (
								<g key={k} transform={`translate(${x + tile / 2}, ${y + tile / 2}) scale(${Math.min(1, p)})`}>
									<rect x={-tile / 2} y={-tile / 2} width={tile} height={tile} rx={7} fill={BASE_COL[ch] ?? '#8a8a8a'} stroke={hi > 0 ? TOK.amber : 'rgba(0,0,0,0.2)'} strokeWidth={hi > 0 ? 4 : 1} />
									{hi > 0 && <rect x={-tile / 2 - 5} y={-tile / 2 - 5} width={tile + 10} height={tile + 10} rx={10} fill="none" stroke={TOK.amber} strokeWidth={2} opacity={hi * (0.4 + 0.5 * pulse)} />}
									<text y={tile * 0.2} textAnchor="middle" fill="#fff" fontSize={tile * 0.5} fontWeight={800}>{ch}</text>
								</g>
							);
						})}
						{i > 0 && frame > bt.diff && (
							<text x={seqX + len * (tile + gap) + 16} y={y + tile / 2 + 6} fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, bt.diff + len * 4, 12)}>
								{diffCount(r.seq, ref)} vs {rows[0].name}
							</text>
						)}
					</g>
				);
			})}
			{/* difference matrix */}
			{frame > bt.matrix && (
				<g opacity={fadeAt(frame, bt.matrix, 14)}>
					<text x={W / 2} y={matY - 14} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>Difference matrix</text>
					{rows.map((r, i) => (
						<g key={i}>
							<text x={matX + (i + 1) * cell} y={matY + 16} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{r.name}</text>
							<text x={matX + 18} y={matY + 16 + (i + 1) * 34} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{r.name}</text>
						</g>
					))}
					{rows.map((_, i) => rows.map((__, j) => {
						const d = i === j ? '–' : String(diffCount(rows[i].seq, rows[j].seq));
						const isClosest = closest && frame > bt.closest && ((closest.a === i && closest.b === j) || (closest.a === j && closest.b === i));
						const o = fadeAt(frame, bt.matrix + 10 + (i + j) * 6, 10);
						const x = matX + (j + 1) * cell;
						const y = matY + 16 + (i + 1) * 34;
						return (
							<g key={`${i}${j}`} opacity={o}>
								<rect x={x - cell / 2 + 3} y={y - 22} width={cell - 6} height={30} rx={6} fill={isClosest ? '#fff3dc' : '#ffffff'} stroke={isClosest ? TOK.amber : TOK.rule} strokeWidth={isClosest ? 3 : 1.5} />
								<text x={x} y={y} textAnchor="middle" fill={isClosest ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{d}</text>
							</g>
						);
					}))}
					{closest && frame > bt.closest && (
						<Pill x={W / 2} y={matY + 16 + (n + 1) * 34 + 6} text={`${rows[closest.a].name} + ${rows[closest.b].name}: fewest differences, most closely related`} size={15} color={TOK.amber} textColor={TOK.amberInk} opacity={fadeAt(frame, bt.closest, 12)} />
					)}
				</g>
			)}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
