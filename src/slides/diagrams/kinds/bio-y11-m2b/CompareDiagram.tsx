// CompareDiagram (bio11m2Compare) — two to four things side by side on stone
// plinths (organ systems, the kidney and a dialysis machine, two hormones,
// three sources), each with its own organ icon, and the features that matter
// building up underneath on the narration's beats.
//
// Layouts:
//  - lists: each column has its own lines (text, optional tick or cross).
//  - matrix: `rowLabels` down the left and `rows[r][c]` cells, each row
//    popping in on its beat; use it for "both / only one" comparisons.
// A column or cell can be amber (the one that matters). Every word comes from
// props. Hold: icons bob, the amber item breathes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Foot, FootLine, GLOSS, GlossDefs, H, Lines, Mark, Title, W, fadeAt, popAt, wrap} from './shared';
import {Organ, OrganName} from './organs';

type Cell = {text?: string; ok?: boolean; amber?: boolean};
export type CompareColumn = {name: string; sub?: string; icon: OrganName; at: number; amber?: boolean; lines?: (Cell & {at: number})[]};
export type CompareProps = {
	title?: string;
	columns: CompareColumn[];
	rowLabels?: {text: string; at: number}[];
	rows?: Cell[][];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2cmp';

export const CompareDiagram = ({title, columns, rowLabels, rows, footer = [], delay = 62}: CompareProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = columns.length;
	const matrix = Boolean(rowLabels && rows);
	const left = matrix ? 190 : 10;
	const colW = (W - left - 10) / n;
	const cx = (i: number) => left + colW * (i + 0.5);
	const top = title ? 48 : 6;
	const rx = Math.min(74, colW / 2 - 14);
	const plinthY = top + 150;
	const nameMax = Math.max(9, Math.floor(colW / 12.5));
	const nameY = plinthY + rx * 0.34 + 38;
	const hasSub = columns.some((c) => c.sub);
	const bodyTop = nameY + (hasSub ? 50 : 26);
	const footH = footer.length * 25 + (footer.length ? 8 : 0);
	const bodyH = H - footH - bodyTop - 6;

	const lineMax = Math.max(11, Math.floor((colW - 28) / 9.6));
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? columns.map((c) => c.name).join(' vs ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{columns.map((c, i) => {
				const p = popAt(frame, fps, c.at);
				const on = Math.min(1, p * 1.4);
				const names = wrap(c.name, nameMax);
				return (
					<g key={i} opacity={on}>
						{c.amber && <ellipse cx={cx(i)} cy={plinthY - 30} rx={rx * 1.05} ry={rx * 0.8} fill={TOK.amber} opacity={0.08 + 0.14 * idlePulse(frame)} />}
						<g transform={`translate(0, ${(1 - Math.min(1, p)) * 26})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={cx(i)} cy={plinthY} rx={rx} />
							<Organ id={ID} name={c.icon} x={cx(i)} y={plinthY - rx * 0.62 + idleBob(frame, i, 1.3)} s={Math.min(1.3, rx / 52)} frame={frame} />
						</g>
						<Lines x={cx(i)} y={nameY} lines={names} size={names.length > 1 ? 19 : 22} color={c.amber ? TOK.amberInk : theme.accent} />
						{c.sub && <Lines x={cx(i)} y={nameY + (names.length > 1 ? 40 : 26)} lines={[c.sub]} size={16} color={TOK.inkDim} weight={700} />}
					</g>
				);
			})}

			{/* lists layout */}
			{!matrix &&
				columns.map((c, i) => {
					let y = bodyTop + 14;
					const anyMark = (c.lines ?? []).some((l) => l.ok !== undefined);
					return (c.lines ?? []).map((ln, k) => {
						const o = fadeAt(frame, ln.at, 12);
						const hasMark = anyMark;
						const lines = wrap(ln.text ?? '', hasMark ? lineMax - 3 : lineMax);
						const y0 = y;
						y += lines.length * 21 + 12;
						return (
							<g key={`${i}-${k}`} opacity={o}>
								{ln.ok !== undefined && <Mark x={cx(i) - colW / 2 + 22} y={y0 - 5} ok={ln.ok} r={10} />}
								<Lines
									x={hasMark ? cx(i) - colW / 2 + 38 : cx(i)}
									y={y0}
									anchor={hasMark ? 'start' : 'middle'}
									lines={lines}
									size={18}
									color={ln.amber ? TOK.amberInk : TOK.ink}
									weight={ln.amber ? 800 : 700}
								/>
							</g>
						);
					});
				})}

			{/* matrix layout */}
			{matrix &&
				rowLabels!.map((r, ri) => {
					const rowH = bodyH / rowLabels!.length;
					const y = bodyTop + rowH * (ri + 0.5);
					const o = fadeAt(frame, r.at, 12);
					const rl = wrap(r.text, 20);
					return (
						<g key={ri} opacity={o}>
							<line x1={10} x2={W - 10} y1={y - rowH / 2} y2={y - rowH / 2} stroke={TOK.rule} strokeWidth={1.5} />
							<Lines x={14} y={y - (rl.length - 1) * 9 + 5} lines={rl} size={16} anchor="start" color={TOK.inkDim} />
							{(rows![ri] ?? []).map((cell, ci) => {
								const cl = wrap(cell.text ?? '', lineMax - (cell.ok !== undefined ? 3 : 0));
								const tx = cell.ok !== undefined ? cx(ci) + 14 : cx(ci);
								return (
									<g key={ci}>
										{cell.amber && <rect x={cx(ci) - colW / 2 + 6} y={y - rowH / 2 + 4} width={colW - 12} height={rowH - 8} rx={10} fill={TOK.amber} opacity={0.1 + 0.1 * idlePulse(frame)} />}
										{cell.ok !== undefined && <Mark x={cx(ci) - Math.min(colW / 2 - 18, textWidthApprox(cl) / 2 + 10)} y={y - (cl.length - 1) * 9} ok={cell.ok} r={10} />}
										<Lines x={tx} y={y - (cl.length - 1) * 9 + 5} lines={cl} size={16} color={cell.amber ? TOK.amberInk : TOK.ink} weight={700} />
									</g>
								);
							})}
						</g>
					);
				})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

const textWidthApprox = (lines: string[]) => Math.max(0, ...lines.map((l) => l.length * 8.4));
