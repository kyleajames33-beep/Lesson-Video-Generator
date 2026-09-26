// TableReveal — comparison table in the diorama family, kept text-first.
//
// Column count comes from the data; font size is fitted to the stage from the
// longest cell per row (the legacy two-column CSS grid broke 3–4 column tables).
//
// Diorama touch, deliberately restrained so reading always wins: header cells
// are painted "plinth tabs" (lit top-left, stone lip underneath) and each row's
// key cell carries a small glossy marble. Every row has its slot from the
// start (a faint ghost), and fills in when the narration names it (see
// kinds/restyle-generic/sceneSync.ts); the row just named glows softly while
// it is being talked about. During the hold only the marbles breathe; text
// never moves once it has landed.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {idleBob, idlePulse} from './diorama';
import {clamp, marbleStyle, tabStyle} from './kinds/restyle-generic/paint';
import {buildStart, itemEntryFrames, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

type Props = {headers: string[]; rows: string[][]; delay?: number};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const MAX_H = 530;
const GAP = 8;
const CHAR_EM = 0.5;
const TAB_LIP = 6;

const colFractions = (cols: number) => (cols <= 2 ? [0.8, 1.2] : [0.78, ...Array(cols - 1).fill(1)]);

export const TableReveal = ({headers, rows, delay}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const timing = sceneTimingFor('table', [headers, rows]);
	const start = buildStart(delay, timing);
	const rowAt = itemEntryFrames(
		rows.map((r) => r[0] ?? ''),
		{timing, start: start + 14, stagger: 16},
	);

	const cols = headers.length;
	const fr = colFractions(cols);
	const frSum = fr.reduce((a, b) => a + b, 0);
	// The key column also holds the marble (16px + 10px gap).
	const colW = fr.map((f, i) => ((W - GAP * (cols - 1)) * f) / frSum - 28 - (i === 0 ? 26 : 0));

	const rowLines = (cells: string[], size: number) =>
		Math.max(
			...cells.map((c, i) => Math.ceil((c ?? '').length / Math.max(5, Math.floor((colW[i] ?? colW[1]) / (size * CHAR_EM))))),
			1,
		);

	let fontSize = 32;
	for (; fontSize > 17; fontSize -= 1) {
		const headerH = rowLines(headers, fontSize * 0.62) * fontSize * 0.62 * 1.2 + 22 + TAB_LIP;
		const bodyH = rows.reduce((h, r) => h + rowLines(r, fontSize) * fontSize * 1.18 + 24, 0);
		if (headerH + bodyH + GAP * rows.length <= MAX_H) break;
	}
	const headSize = Math.max(14, Math.round(fontSize * 0.62));

	const gridTemplateColumns = fr.map((f) => `${f}fr`).join(' ');
	const headerP = spring({frame: frame - start, fps, config: {damping: 18, stiffness: 180, mass: 0.7}});

	// Which row the narration is on: the latest to have landed, until the next
	// one lands. The glow fades out once the last row has had its moment.
	const current = rowAt.reduce((cur, f, i) => (frame >= f && f >= (rowAt[cur] ?? -1) ? i : cur), -1);
	const lastLanded = Math.max(...rowAt);
	const glowFade = interpolate(frame, [lastLanded + 150, lastLanded + 190], [1, 0], clamp);

	return (
		<div style={{width: '100%', maxWidth: W, display: 'grid', gap: GAP, fontFamily: FONT_DISPLAY}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns,
					gap: GAP,
					marginBottom: TAB_LIP,
					opacity: interpolate(headerP, [0, 0.4], [0, 1], clamp),
					transform: `translateY(${interpolate(headerP, [0, 1], [-10, 0])}px)`,
				}}
			>
				{headers.map((h, i) => (
					<div
						key={i}
						style={{
							padding: '10px 14px',
							borderRadius: '10px 10px 4px 4px',
							...tabStyle(i === 0 ? theme.accent : theme.accent2),
							fontFamily: FONT_MONO,
							fontSize: headSize,
							fontWeight: 700,
							letterSpacing: '0.1em',
							textTransform: 'uppercase',
							color: '#ffffff',
							textShadow: '0 1px 1px rgba(0,0,0,0.18)',
						}}
					>
						{h}
					</div>
				))}
			</div>
			{rows.map((row, rowIdx) => {
				const p = spring({frame: frame - rowAt[rowIdx], fps, config: {damping: 18, stiffness: 160, mass: 0.8}});
				const landed = interpolate(p, [0, 0.4], [0, 1], clamp);
				const ghost = interpolate(headerP, [0.2, 1], [0, 0.4], clamp) * (1 - landed);
				const isCurrent = rowIdx === current;
				const glow = isCurrent ? glowFade * interpolate(frame - rowAt[rowIdx], [0, 12], [0, 1], clamp) : 0;
				const marbleScale = interpolate(p, [0, 0.6, 1], [0, 1.25, 1], clamp) * (1 + 0.08 * idlePulse(frame + rowIdx * 9, 70));
				return (
					<div key={rowIdx} style={{position: 'relative'}}>
						{/* ghost slot, so the table's shape is there before the narration reaches a row */}
						<div
							aria-hidden
							style={{
								position: 'absolute',
								inset: 0,
								display: 'grid',
								gridTemplateColumns,
								gap: GAP,
								opacity: ghost,
							}}
						>
							{headers.map((_, c) => (
								<div key={c} style={{borderRadius: 10, border: `1.5px dashed ${c === 0 ? `${theme.accent}55` : TOK.cardBorder}`, background: c === 0 ? `${theme.soft}` : 'transparent'}} />
							))}
						</div>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns,
								gap: GAP,
								opacity: landed,
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
										boxShadow: `inset 0 -3px 0 rgba(0,0,0,0.04), 0 0 0 ${glow * 3}px ${theme.accent2}40, 0 6px 16px rgba(24,28,26,${0.05 + glow * 0.07})`,
										fontSize,
										lineHeight: 1.18,
										fontWeight: cellIdx === 0 ? 720 : 520,
										color: cellIdx === 0 ? theme.accent : TOK.ink,
										letterSpacing: '-0.01em',
										display: 'flex',
										alignItems: 'center',
										gap: 10,
									}}
								>
									{cellIdx === 0 ? (
										<span
											aria-hidden
											style={{
												...marbleStyle(theme.accent2, 16),
												transform: `translateY(${idleBob(frame, rowIdx, 1.2)}px) scale(${marbleScale})`,
											}}
										/>
									) : null}
									<span>{row[cellIdx] ?? ''}</span>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};
