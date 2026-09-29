// CompareDiagram (bio12m7Compare) — organisms side by side on stone plinths,
// with the features that tell them apart building underneath, row by row, on
// the narration's beats.
//
// Two layouts:
//  - matrix: `rowLabels` down the left; each row's cells (text and/or a tick or
//    cross) pop in together at the row's beat. For "has it got X?" questions.
//  - lists: no rowLabels; each column has its own lines (text, optional tick
//    or cross), each with its own beat. For "what does each one use?".
//
// Optional `drug`: a drug token drops onto every column at its beat; where
// `hits[i]` is true the column's organism fades out (killed), otherwise the
// token bounces off with a cross. All text comes from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, Mark, Title, W, clamp, fadeAt, popAt, textWidth, wrap} from './shared';
import {Icon, type IconName, type IconOpts} from './icons';

type Cell = {text?: string; ok?: boolean; amber?: boolean; at?: number};
export type CompareColumn = {
	name: string;
	sub?: string;
	icon: IconName;
	iconOpts?: IconOpts;
	at: number;
	amber?: boolean;
	/** lists layout: this column's own lines. */
	lines?: (Cell & {at: number})[];
};
export type CompareProps = {
	title?: string;
	columns: CompareColumn[];
	rowLabels?: {text: string; at: number}[];
	/** matrix layout: rows[r][c]. */
	rows?: Cell[][];
	drug?: {at: number; label: string; hits: boolean[]; icon?: IconName};
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b12m7cmp';
const ease = Easing.inOut(Easing.cubic);

export const CompareDiagram = ({title, columns, rowLabels, rows = [], drug, footer = [], delay = 62}: CompareProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const matrix = Boolean(rowLabels && rowLabels.length);
	const n = columns.length;
	const labelW = matrix ? 190 : 0;
	const x0 = 12 + labelW;
	const colW = (W - 12 - x0) / n;
	const cx = (i: number) => x0 + colW * (i + 0.5);
	const top = title ? 58 : 20;
	const iconS = Math.min(1.45, colW / 125);
	const plinthY = top + 50 + 62 * iconS;
	const rx = Math.min(112, colW / 2 - 8);
	const nameY = plinthY + rx * 0.54 + 24;
	const tableTop = nameY + (columns.some((c) => c.sub) ? 44 : 24);
	const footH = footer.length * 25;
	const nRows = matrix ? rowLabels!.length : Math.max(0, ...columns.map((c) => c.lines?.length ?? 0));
	const rowH = Math.min(52, (H - 8 - footH - tableTop) / Math.max(1, nRows));
	const fsCell = Math.max(15, Math.min(18, rowH * 0.46));
	const maxChars = Math.max(8, Math.floor((colW - 20) / (fsCell * 0.55)));

	const renderCell = (c: Cell, x: number, y: number, key: string | number, o: number, fs = fsCell, mc = maxChars) => {
		const fsCell = fs;
		const lines = c.text ? wrap(c.text, c.ok === undefined ? mc : mc - 3) : [];
		const tw = lines.length ? Math.max(...lines.map((l) => textWidth(l, fsCell))) : 0;
		const mx = c.ok === undefined ? 0 : lines.length ? x - tw / 2 - 6 : x;
		const ty = y - ((lines.length - 1) * fsCell * 1.15) / 2 + fsCell * 0.36;
		return (
			<g key={key} opacity={o}>
				{c.ok !== undefined && <Mark x={mx} y={y} ok={c.ok} r={lines.length ? 10 : 13} />}
				{lines.length > 0 && <Lines x={x + (c.ok === undefined ? 0 : 10)} y={ty} lines={lines} size={fsCell} lh={1.15} color={c.amber ? TOK.amberInk : TOK.ink} />}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Comparison'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{columns.map((c, i) => {
				const p = popAt(frame, fps, c.at);
				// drug: fall, then either kill or bounce
				let killed = 0;
				let drugEl = null;
				if (drug) {
					const t0 = drug.at + i * 8;
					const fall = interpolate(frame, [t0, t0 + 26], [0, 1], {...clamp, easing: ease});
					const hit = drug.hits[i];
					const bounce = hit ? 0 : interpolate(frame, [t0 + 26, t0 + 50], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
					killed = hit ? interpolate(frame, [t0 + 26, t0 + 56], [0, 1], clamp) : 0;
					const dy = top + 4 + (plinthY - 60 - top) * fall - 50 * bounce;
					const dx = cx(i) + 26 * bounce;
					drugEl = (
						<g opacity={fadeAt(frame, t0, 6) * (hit ? 1 - fadeAt(frame, t0 + 26, 12) : 1 - fadeAt(frame, t0 + 90, 20))}>
							<Icon id={ID} name={drug.icon ?? 'pill'} x={dx} y={dy} s={0.55} frame={frame} />
							{!hit && frame >= t0 + 30 && <Mark x={dx + 26} y={dy - 18} ok={false} r={11} />}
						</g>
					);
				}
				return (
					<g key={i}>
						<g opacity={fadeAt(frame, 0, 14)}>
							<DioramaPlinth id={`${ID}${i}`} cx={cx(i)} cy={plinthY} rx={rx} />
						</g>
						<g opacity={Math.min(1, p * 1.4)}>
							{c.amber && <ellipse cx={cx(i)} cy={plinthY - 30} rx={rx * 0.78} ry={rx * 0.6} fill={TOK.amber} opacity={0.1 + 0.12 * idlePulse(frame)} />}
							<g opacity={1 - killed * 0.8}>
								<Icon id={ID} name={c.icon} x={cx(i)} y={plinthY - 42 * iconS - (1 - Math.min(1, p)) * 40 + idleBob(frame, i, 1.6)} s={iconS} frame={frame} opts={c.iconOpts} />
							</g>
							{killed > 0 && <Mark x={cx(i) + rx * 0.55} y={plinthY - 70} ok r={13} opacity={killed} />}
							<text x={cx(i)} y={nameY} textAnchor="middle" fill={c.amber ? TOK.amberInk : theme.accent} fontSize={Math.min(21, colW / 7.5)} fontWeight={800}>{c.name}</text>
							{c.sub && <Lines x={cx(i)} y={nameY + 21} lines={wrap(c.sub, Math.floor(colW / 8.5))} size={15} color={TOK.inkDim} weight={700} />}
						</g>
						{drugEl}
					</g>
				);
			})}
			{drug && (
				<text x={matrix ? 12 + labelW / 2 : 70} y={top + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, drug.at - 10, 10)}>{drug.label}</text>
			)}
			{/* table */}
			{matrix &&
				rowLabels!.map((r, ri) => {
					const y = tableTop + rowH * (ri + 0.5);
					const o = fadeAt(frame, r.at);
					return (
						<g key={ri}>
							<rect x={12} y={y - rowH / 2 + 3} width={W - 24} height={rowH - 6} rx={10} fill={ri % 2 ? '#ffffff' : 'rgba(0,0,0,0.035)'} opacity={o} />
							<Lines x={24} y={y - ((wrap(r.text, 20).length - 1) * fsCell * 1.1) / 2 + fsCell * 0.36} lines={wrap(r.text, 20)} size={fsCell} lh={1.1} color={TOK.inkDim} anchor="start" opacity={o} />
							{(rows[ri] ?? []).map((cell, ci) => renderCell(cell, cx(ci), y, ci, Math.min(1, popAt(frame, fps, cell.at ?? r.at + ci * 6))))}
						</g>
					);
				})}
			{!matrix &&
				columns.map((c, ci) => {
					let y = tableTop + 4;
					const fs = 18;
					const mc = Math.max(8, Math.floor((colW - 16) / (fs * 0.55)));
					return (c.lines ?? []).map((l, li) => {
						const nl = wrap(l.text ?? '', l.ok === undefined ? mc : mc - 3).length;
						const h = nl * fs * 1.15 + 16;
						const yc = y + h / 2;
						y += h;
						return renderCell(l, cx(ci), yc, `${ci}-${li}`, Math.min(1, popAt(frame, fps, l.at)), fs, mc);
					});
				})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
