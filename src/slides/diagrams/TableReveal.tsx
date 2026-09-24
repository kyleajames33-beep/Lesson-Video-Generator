// TableReveal — comparison table, rows slide in one at a time.
//
// Column count comes from the data. The legacy version was styled by
// `.table-row { grid-template-columns: 0.72fr 1.28fr }` in styles.css, so the
// 90 tables with 3–4 columns wrapped their cells onto extra lines and the grid
// fell apart. Font size is fitted to the stage from the longest cell per row.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

type Props = {headers: string[]; rows: string[][]; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const MAX_H = 540;
const GAP = 8;
const CHAR_EM = 0.5;

const colFractions = (cols: number) => (cols <= 2 ? [0.8, 1.2] : [0.78, ...Array(cols - 1).fill(1)]);

export const TableReveal = ({headers, rows, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const cols = headers.length;
	const fr = colFractions(cols);
	const frSum = fr.reduce((a, b) => a + b, 0);
	const colW = fr.map((f) => ((W - GAP * (cols - 1)) * f) / frSum - 28);

	const rowLines = (cells: string[], size: number) =>
		Math.max(
			...cells.map((c, i) => Math.ceil((c ?? '').length / Math.max(5, Math.floor((colW[i] ?? colW[1]) / (size * CHAR_EM))))),
			1,
		);

	let fontSize = 32;
	for (; fontSize > 17; fontSize -= 1) {
		const headerH = rowLines(headers, fontSize * 0.62) * fontSize * 0.62 * 1.2 + 22;
		const bodyH = rows.reduce((h, r) => h + rowLines(r, fontSize) * fontSize * 1.18 + 24, 0);
		if (headerH + bodyH + GAP * rows.length <= MAX_H) break;
	}

	const gridTemplateColumns = fr.map((f) => `${f}fr`).join(' ');
	const headerP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 180, mass: 0.7}});

	return (
		<div style={{width: '100%', maxWidth: W, display: 'grid', gap: GAP, fontFamily: FONT_DISPLAY}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns,
					gap: GAP,
					opacity: interpolate(headerP, [0, 0.4], [0, 1], clamp),
					transform: `translateY(${interpolate(headerP, [0, 1], [-10, 0])}px)`,
				}}
			>
				{headers.map((h, i) => (
					<div
						key={i}
						style={{
							padding: '10px 14px',
							fontFamily: FONT_MONO,
							fontSize: Math.max(13, Math.round(fontSize * 0.62)),
							fontWeight: 700,
							letterSpacing: '0.12em',
							textTransform: 'uppercase',
							color: i === 0 ? TOK.inkDim : theme.accent,
							borderBottom: `2px solid ${i === 0 ? TOK.rule : theme.accent}`,
						}}
					>
						{h}
					</div>
				))}
			</div>
			{rows.map((row, rowIdx) => {
				const p = spring({frame: frame - (delay + 14 + rowIdx * 16), fps, config: {damping: 18, stiffness: 160, mass: 0.8}});
				return (
					<div
						key={rowIdx}
						style={{
							display: 'grid',
							gridTemplateColumns,
							gap: GAP,
							opacity: interpolate(p, [0, 0.4], [0, 1], clamp),
							transform: `translateX(${interpolate(p, [0, 1], [-28, 0])}px)`,
						}}
					>
						{headers.map((_, cellIdx) => (
							<div
								key={cellIdx}
								style={{
									padding: '12px 14px',
									borderRadius: 10,
									background: cellIdx === 0 ? theme.soft : TOK.card,
									border: `1px solid ${cellIdx === 0 ? `${theme.accent}33` : TOK.cardBorder}`,
									fontSize,
									lineHeight: 1.18,
									fontWeight: cellIdx === 0 ? 720 : 520,
									color: cellIdx === 0 ? theme.accent : TOK.ink,
									letterSpacing: '-0.01em',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{row[cellIdx] ?? ''}
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
};
