// PanelsDiagram (bio11m3Panels) — things side by side on stone plinths, with
// the facts that describe or separate them building underneath on the
// narration's beats.
//
// Layouts:
//  columns  one plinth per column (icon, name, sub); each column's own `lines`
//           (text, optional tick / cross) drop in under it, each on its beat.
//           For "what does each one show / need / use?".
//  matrix   plinths along the top, `rowLabels` down the left; row r's cells
//           (`rows[r][c]`: text and/or tick / cross) pop in together at the
//           row label's beat. For "has it got X?" comparisons.
//  tiles    a grid of small plinths (2 rows), each with its icons, name, sub
//           and a `badge` (e.g. "+ / −"). For sorting a set of cases.
// One column (or tile) may be `amber`: it is the thing that matters and it
// breathes in the hold. All text comes from props; nothing is computed.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Footer, H, Lines, Mark, Pill, Title, W, fadeAt, popAt, wrap, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName, type EcoIconOpts} from './icons';

type Cell = {text?: string; ok?: boolean; amber?: boolean; at?: number};
export type PanelColumn = {
	name: string;
	sub?: string;
	icon?: AnyIconName;
	/** several small icons on one plinth (e.g. a pair of organisms). */
	icons?: AnyIconName[];
	iconOpts?: EcoIconOpts;
	at: number;
	amber?: boolean;
	badge?: string;
	lines?: (Cell & {at: number})[];
};
export type PanelsProps = {
	title?: string;
	layout?: 'columns' | 'matrix' | 'tiles';
	columns: PanelColumn[];
	rowLabels?: {text: string; at: number}[];
	rows?: Cell[][];
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3pan';

const PlinthIcons = ({col, x, y, rx, frame, i}: {col: PanelColumn; x: number; y: number; rx: number; frame: number; i: number}) => {
	const list = col.icons ?? (col.icon ? [col.icon] : []);
	const s = (rx / 58) * (list.length > 1 ? 0.7 : 1);
	return (
		<g>
			{list.map((ic, k) => {
				const dx = list.length === 1 ? 0 : (k - (list.length - 1) / 2) * rx * 0.85;
				return <EcoIcon key={k} id={ID} name={ic} x={x + dx} y={y - rx * 0.62 * (list.length > 1 ? 0.8 : 1) + idleBob(frame, i * 3 + k, 1.3)} s={s} frame={frame} opts={col.iconOpts} />;
			})}
		</g>
	);
};

export const PanelsDiagram = ({title, layout = 'columns', columns, rowLabels = [], rows = [], footer = [], delay = 62}: PanelsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = columns.length;
	const top = title ? 52 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);

	if (layout === 'tiles') {
		const perRow = Math.ceil(n / 2);
		const tileW = (W - 20) / perRow;
		const rowsN = Math.ceil(n / perRow);
		const tileH = (H - top - footH) / rowsN;
		const rx = Math.min(62, tileW / 2 - 16);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Panels'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				{columns.map((c, i) => {
					const r = Math.floor(i / perRow);
					const k = i % perRow;
					const inRow = r === rowsN - 1 ? n - perRow * r : perRow;
					const x = W / 2 + (k - (inRow - 1) / 2) * tileW;
					const y = top + r * tileH + tileH * 0.46;
					const p = popAt(frame, fps, c.at);
					const on = Math.min(1, p * 1.4);
					const nameL = wrap(c.name, Math.floor(tileW / 11));
					return (
						<g key={i} opacity={on}>
							{c.amber && <ellipse cx={x} cy={y - 18} rx={rx * 1.3} ry={rx * 0.9} fill={TOK.amber} opacity={0.1 + 0.12 * idlePulse(frame)} />}
							<g transform={`translate(0, ${(1 - Math.min(1, p)) * 24})`}>
								<DioramaPlinth id={`${ID}t${i}`} cx={x} cy={y} rx={rx} />
								<PlinthIcons col={c} x={x} y={y} rx={rx} frame={frame} i={i} />
							</g>
							<Lines x={x} y={y + rx * 0.54 + 26} lines={nameL} size={19} color={c.amber ? TOK.amberInk : theme.accent} />
							{c.sub && <Lines x={x} y={y + rx * 0.54 + 26 + nameL.length * 21} lines={wrap(c.sub, Math.floor(tileW / 8.2))} size={15} color={TOK.inkDim} weight={700} />}
							{c.badge && <Pill x={x + rx * 0.95} y={y - rx * 1.05} text={c.badge} size={16} color={c.amber ? TOK.amber : theme.accent} textColor={c.amber ? TOK.amberInk : theme.accent} />}
						</g>
					);
				})}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	const matrix = layout === 'matrix';
	const labelW = matrix ? 178 : 0;
	const colW = (W - 20 - labelW) / n;
	const rx = Math.min(78, colW / 2 - 14);
	const cx = (i: number) => 10 + labelW + colW * (i + 0.5);
	const nameL = columns.map((c) => wrap(c.name, Math.floor((colW + 10) / 11)));
	const subL = columns.map((c) => (c.sub ? wrap(c.sub, Math.floor((colW + 10) / 8)) : []));
	const labelBlock = Math.max(...columns.map((_, i) => nameL[i].length * 21 + subL[i].length * 18));
	// content height, used to centre the whole block vertically
	const lineMaxPre = Math.floor(colW / 8.4);
	const colH = Math.max(0, ...columns.map((c) => (c.lines ?? []).reduce((a, l) => a + wrap(l.text ?? '', l.ok === undefined ? lineMaxPre : lineMaxPre - 3).length * 19 + 12, 0)));
	const rowsH = rowLabels.reduce((a, rl, r) => {
		const cellsN = Math.max(wrap(rl.text, 19).length, ...(rows[r] ?? []).map((cell) => (cell.text ? wrap(cell.text, cell.ok === undefined ? lineMaxPre : lineMaxPre - 3).length : 1)), 1);
		return a + cellsN * 18 + 18;
	}, 0);
	const blockH = rx * 1.5 + 14 + rx * 0.54 + 26 + labelBlock + 10 + (layout === 'matrix' ? rowsH : colH);
	const slack = Math.max(0, H - footH - 16 - top - blockH);
	const plinthY = top + rx * 1.5 + 14 + Math.min(60, slack / 2);
	const bodyTop = plinthY + rx * 0.54 + 26 + labelBlock + 10;

	// columns layout: lines under each column
	const lineMax = Math.floor(colW / 8.4);
	const colLines = columns.map((c) => (c.lines ?? []).map((l) => ({...l, wrapped: wrap(l.text ?? '', l.ok === undefined ? lineMax : lineMax - 3)})));

	// matrix layout: row geometry
	const rowGeo = rowLabels.map((rl, r) => {
		const lab = wrap(rl.text, 19);
		const cells = (rows[r] ?? []).map((cell) => (cell.text ? wrap(cell.text, cell.ok === undefined ? lineMax : lineMax - 3) : []));
		const hLines = Math.max(lab.length, ...cells.map((c) => c.length), 1);
		return {lab, cells, h: hLines * 18 + 14};
	});
	const rowY: number[] = [];
	let acc = bodyTop;
	for (const g of rowGeo) {
		rowY.push(acc);
		acc += g.h + 4;
	}

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Panels'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{columns.map((c, i) => {
				const p = popAt(frame, fps, c.at);
				const on = Math.min(1, p * 1.4);
				const x = cx(i);
				return (
					<g key={i} opacity={on}>
						{c.amber && <ellipse cx={x} cy={plinthY - 26} rx={rx * 1.05} ry={rx * 0.8} fill={TOK.amber} opacity={0.08 + 0.12 * idlePulse(frame)} />}
						<g transform={`translate(0, ${(1 - Math.min(1, p)) * 26})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={x} cy={plinthY} rx={rx} />
							<PlinthIcons col={c} x={x} y={plinthY} rx={rx} frame={frame} i={i} />
						</g>
						<Lines x={x} y={plinthY + rx * 0.54 + 26} lines={nameL[i]} size={19} color={c.amber ? TOK.amberInk : theme.accent} />
						{subL[i].length > 0 && <Lines x={x} y={plinthY + rx * 0.54 + 26 + nameL[i].length * 21} lines={subL[i]} size={15} color={TOK.inkDim} weight={700} />}
					</g>
				);
			})}
			{!matrix && colLines.map((ls, i) => {
				let y = bodyTop + 8;
				return ls.map((l, k) => {
					const o = fadeAt(frame, l.at, 14);
					const yy = y;
					y += l.wrapped.length * 19 + 12;
					const hasMark = l.ok !== undefined;
					const tx = cx(i) + (hasMark ? 12 : 0);
					return (
						<g key={`${i}-${k}`} opacity={o} transform={`translate(0, ${(1 - o) * 10})`}>
							{hasMark && <Mark x={cx(i) - colW / 2 + 22} y={yy - 5} ok={l.ok!} r={10} />}
							<Lines x={hasMark ? cx(i) - colW / 2 + 38 : tx} y={yy} lines={l.wrapped} size={16} color={l.amber ? TOK.amberInk : TOK.ink} weight={l.amber ? 800 : 700} lh={1.2} anchor={hasMark ? 'start' : 'middle'} />
						</g>
					);
				});
			})}
			{matrix && rowGeo.map((g, r) => {
				const at = rowLabels[r].at;
				const o = fadeAt(frame, at, 14);
				const y = rowY[r];
				return (
					<g key={r} opacity={o}>
						<rect x={8} y={y} width={W - 16} height={g.h} rx={8} fill={r % 2 ? '#ffffff' : 'rgba(31,111,178,0.06)'} />
						<Lines x={18} y={y + 20} lines={g.lab} size={15} color={TOK.ink} anchor="start" />
						{(rows[r] ?? []).map((cell, c) => {
							const co = fadeAt(frame, cell.at ?? at, 12);
							const lines = g.cells[c];
							const hasMark = cell.ok !== undefined;
							const w = lines.length ? Math.max(...lines.map((l) => l.length)) * 7.6 : 0;
							const markX = hasMark && lines.length ? cx(c) - w / 2 - 6 : cx(c);
							return (
								<g key={c} opacity={co}>
									{hasMark && <Mark x={markX} y={y + g.h / 2} ok={cell.ok!} r={10} />}
									{lines.length > 0 && <Lines x={hasMark ? markX + 16 : cx(c)} y={y + g.h / 2 + 5 - (lines.length - 1) * 9} lines={lines} size={15} color={cell.amber ? TOK.amberInk : TOK.ink} weight={cell.amber ? 800 : 700} anchor={hasMark ? 'start' : 'middle'} />}
								</g>
							);
						})}
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
