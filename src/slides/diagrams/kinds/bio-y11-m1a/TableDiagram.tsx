// TableDiagram (bio11m1Table) — a comparison table carved on a stone tablet.
//
// The header row is there from the start; each body row slides in on its
// narration beat. A cell can carry a tick or cross (`ok`) and one cell or row
// can be amber (the single most important thing). Column widths are
// fractions (props); text wraps to fit its column. All text from props.
// Hold: the newest row's edge breathes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {Footer, H, Mark, W, fadeAt, popAt, wrap} from './shared';

type Cell = string | {text: string; ok?: boolean; amber?: boolean};
export type TableProps = {
	title?: string;
	headers: string[];
	cols?: number[];
	rows: {cells: Cell[]; at: number; amber?: boolean}[];
	size?: number;
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11tab';

export const TableDiagram = ({title, headers, cols, rows, size = 19, footer = [], delay = 62}: TableProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const n = headers.length;
	const fr = cols ?? headers.map(() => 1 / n);
	const x0 = 16;
	const tw = W - 32;
	const xs = fr.reduce<number[]>((acc, f, i) => [...acc, acc[i] + f * tw], [x0]);
	const top = title ? 50 : 14;
	const footH = footer.length * 24 + (footer.length ? 10 : 0);
	const lh = size * 1.2;
	const cellLines = (c: Cell, i: number) => {
		const t = typeof c === 'string' ? c : c.text;
		const hasMark = typeof c !== 'string' && c.ok !== undefined;
		return wrap(t, Math.max(6, Math.floor((xs[i + 1] - xs[i] - 20 - (hasMark ? 26 : 0)) / (size * 0.53))));
	};
	const rowLines = rows.map((r) => Math.max(1, ...r.cells.map((c, i) => cellLines(c, i).length)));
	const headH = 50;
	const avail = H - top - headH - footH - 26;
	const need = rowLines.reduce((a, l) => a + l * lh + 22, 0);
	const pad = Math.max(20, Math.min(90, 22 + (avail - need - rows.length * 6) / Math.max(1, rows.length)));
	const newest = rows.reduce((m, r) => (r.at <= frame && r.at > m ? r.at : m), -Infinity);
	let y = top + headH + 10;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Comparison table'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
			<rect x={x0 - 8} y={top - 6} width={tw + 16} height={H - top - footH - 8} rx={16} fill="#e4e1db" />
			<rect x={x0 - 8} y={H - footH - 20} width={tw + 16} height={12} rx={5} fill="#b3afa7" />
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={x0} y={top} width={tw} height={headH} rx={10} fill={theme.accent} />
				{headers.map((h, i) => (
					<text key={i} x={xs[i] + 12} y={top + headH / 2 + 6} fill="#ffffff" fontSize={size + 1} fontWeight={800}>{h}</text>
				))}
			</g>
			{rows.map((r, k) => {
				const h = rowLines[k] * lh + pad;
				const ry = y;
				y += h + 6;
				const p = popAt(frame, fps, r.at);
				if (p <= 0) return null;
				const isNew = r.at === newest;
				return (
					<g key={k} opacity={Math.min(1, p)} transform={`translate(${(1 - Math.min(1, p)) * 30},0)`}>
						<rect x={x0} y={ry} width={tw} height={h} rx={10} fill={r.amber ? 'rgba(240,168,48,0.14)' : '#ffffff'} stroke={r.amber ? TOK.amber : isNew ? theme.accent : 'rgba(0,0,0,0.08)'} strokeWidth={r.amber || isNew ? 2 + pulse : 1.5} />
						{r.cells.map((c, i) => {
							const lines = cellLines(c, i);
							const obj = typeof c === 'string' ? {text: c} : c;
							const hasMark = obj.ok !== undefined;
							const ty = ry + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.36;
							const tx = xs[i] + 12 + (hasMark ? 26 : 0);
							return (
								<g key={i}>
									{hasMark && <Mark x={xs[i] + 22} y={ry + h / 2} ok={!!obj.ok} r={10} />}
									<text x={tx} y={ty} fill={obj.amber ? TOK.amberInk : i === 0 ? TOK.ink : TOK.ink} fontSize={size} fontWeight={i === 0 || obj.amber ? 800 : 600}>
										{lines.map((l, j) => (
											<tspan key={j} x={tx} dy={j === 0 ? 0 : lh}>{l}</tspan>
										))}
									</text>
								</g>
							);
						})}
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
