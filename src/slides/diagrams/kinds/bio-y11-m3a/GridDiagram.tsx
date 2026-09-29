// GridDiagram (bio11m3aGrid) — a comparison built column by column on stone.
//
// Each column is a stone plinth carrying its title; its cells stack beneath as
// white cards, each with text and/or a tick or cross, landing on the beat the
// narration reaches them. Row labels (optional) run down the left. A cell can
// be amber (the single thing that matters, e.g. the missing ingredient or the
// verdict). All text comes from props; nothing is computed.
//
// Beats are frames after `delay`. Hold: the amber cell breathes and the
// plinth tops shimmer gently.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, Mark, PAL, Title, W, fadeAt, popAt, textWidth} from './shared';

type Cell = {text?: string; ok?: boolean; amber?: boolean; at?: number};
export type GridProps = {
	title?: string;
	columns: {title: string; sub?: string; at: number; tone?: 'accent' | 'warm' | 'grey'}[];
	rowLabels?: {text: string; at?: number}[];
	/** rows[r][c] */
	rows: Cell[][];
	footer?: Beat[];
	size?: number;
	delay?: number;
};

const ID = 'b11m3grid';

export const GridDiagram = ({title, columns, rowLabels, rows, footer = [], size = 17, delay = 62}: GridProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = columns.length;
	const labW = rowLabels ? Math.min(190, Math.max(...rowLabels.map((l) => Math.max(...l.text.split('\n').map((t) => textWidth(t, 16))))) + 18) : 0;
	const x0 = 12 + labW;
	const colW = (W - x0 - 12) / n;
	const top = title ? 52 : 12;
	const headH = columns.some((c) => c.sub) ? 104 : 88;
	const nRows = rows.length;
	const avail = H - top - headH - footer.length * 28 - 24;
	const rowH = Math.min(96, avail / Math.max(1, nRows));
	const tone = (t?: string) => (t === 'warm' ? PAL.orange : t === 'grey' ? TOK.inkDim : theme.accent);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Comparison'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} y={top - 18} />}
			{columns.map((c, i) => {
				const cx = x0 + colW * (i + 0.5);
				const on = fadeAt(frame, c.at, 14);
				const pop = popAt(frame, fps, c.at);
				const rx = Math.min(colW / 2 - 8, 110);
				return (
					<g key={i} opacity={on}>
						<g transform={`translate(0, ${(1 - Math.min(1, pop)) * 20})`}>
							<DioramaPlinth id={`${ID}-p${i}`} cx={cx} cy={top + headH - 30} rx={rx} />
						</g>
						<text x={cx} y={top + 26} textAnchor="middle" fontSize={textWidth(c.title, 20) > colW - 10 ? 17 : 20} fontWeight={800} fill={tone(c.tone)}>
							{c.title}
						</text>
						{c.sub?.split('\n').map((ln, k) => (
							<text key={k} x={cx} y={top + 48 + k * 17} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
								{ln}
							</text>
						))}
					</g>
				);
			})}
			{rowLabels?.map((l, r) => {
				const y = top + headH + rowH * (r + 0.5);
				const lines = l.text.split('\n');
				return (
					<g key={r} opacity={fadeAt(frame, l.at ?? columns[0].at, 12)}>
						{lines.map((ln, k) => (
							<text key={k} x={x0 - 12} y={y + 6 + (k - (lines.length - 1) / 2) * 19} textAnchor="end" fontSize={16} fontWeight={800} fill={TOK.ink}>
								{ln}
							</text>
						))}
					</g>
				);
			})}
			{rows.map((row, r) =>
				row.map((cell, c) => {
					const at = cell.at ?? columns[c]?.at ?? 0;
					const o = fadeAt(frame, at, 12);
					if (o <= 0) return null;
					const cx = x0 + colW * (c + 0.5);
					const cy = top + headH + rowH * (r + 0.5) + idleBob(frame, r * 7 + c, 0.8);
					const w = colW - 14;
					const h = rowH - 12;
					const lines = (cell.text ?? '').split('\n').filter(Boolean);
					const hasMark = cell.ok !== undefined;
					const markX = lines.length ? cx - w / 2 + 22 : cx;
					const pulse = cell.amber ? idlePulse(frame) : 0;
					const tx = hasMark && lines.length ? cx + 14 : cx;
					const fs = Math.min(size, ...lines.map((ln) => ((w - (hasMark ? 46 : 16)) / Math.max(1, textWidth(ln, 1)))));
					return (
						<g key={`${r}-${c}`} opacity={o}>
							<rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={12} fill={cell.amber ? '#fff6e6' : '#ffffff'} stroke={cell.amber ? TOK.amber : 'rgba(0,0,0,0.12)'} strokeWidth={cell.amber ? 2.5 + pulse * 1.5 : 1.5} />
							{hasMark && <Mark x={markX} y={cy} ok={Boolean(cell.ok)} s={Math.min(1, h / 34)} />}
							{lines.map((ln, k) => (
								<text key={k} x={tx} y={cy + fs * 0.36 + (k - (lines.length - 1) / 2) * (fs + 3)} textAnchor="middle" fontSize={fs} fontWeight={cell.amber ? 800 : 700} fill={cell.amber ? TOK.amberInk : TOK.ink}>
									{ln}
								</text>
							))}
						</g>
					);
				}),
			)}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
