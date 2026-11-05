// WorkingBoard: the Chemistry g01 worked-example layout for maths. Task strip (hand heading), the
// equation strip, a role-coloured givens card on the left, staged working rows on the right (current
// row large, earlier rows shrink and dim), a green framed answer and a red crossed mistake card.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, HandText, INK, INK_SOFT, prog} from '../../kit';
import {CARD, Card, CardTitle, MARGIN, SceneHeading, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';

/** Task strip: the short task in the hand font, at the scene heading position. */
export const TaskStrip: React.FC<{text: string; at?: number; out?: number; size?: number}> = ({text, at = 4, out, size = 60}) => <SceneHeading text={text} at={at} out={out} size={size} />;

/** The equation the task is about, large, under the task strip. */
export const EquationStrip: React.FC<{children: React.ReactNode; at: number; out?: number; x?: number; y?: number; size?: number}> = ({children, at, out, x = MARGIN, y = 166, size = 80}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</span>
	</Enter>
);

export type GivenLine = {content: React.ReactNode; at: number; role?: RoleKey; note?: React.ReactNode; glow?: [number, number]};
/** g01 givens card: uppercase title, 46 px role-coloured lines, optional 28 px note; lines can glow when used. */
export const GivensCard: React.FC<{x?: number; y?: number; w?: number; title?: string; at: number; out?: number; lines: GivenLine[]; size?: number}> = ({x = MARGIN, y = 300, w = 600, title = 'Givens', at, out, lines, size = 52}) => {
	const f = useCurrentFrame();
	return (
		<Card x={x} y={y} w={w} at={at} out={out}>
			<CardTitle>{title}</CardTitle>
			{lines.map((l, i) => {
				const g = l.glow ? vis(f, l.glow[0], l.glow[1], 8) : 0;
				return (
					<Enter key={i} at={l.at} dy={10} style={{marginTop: 8}}>
						<div style={{display: 'inline-block', padding: '2px 12px', margin: '0 -12px', borderRadius: 12, background: g > 0 && l.role ? hexA(MATH_ROLES[l.role].soft, g) : undefined, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(l.role, INK), whiteSpace: 'pre'}}>{l.content}</div>
						{l.note ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 28, color: INK_SOFT}}>{l.note}</div> : null}
					</Enter>
				);
			})}
		</Card>
	);
};
const hexA = (h: string, a: number) => {
	const n = parseInt(h.slice(1), 16);
	return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

/** Green framed answer with a drawn tick (inherits the row's font size). */
export const AnswerFrame: React.FC<{children: React.ReactNode; at: number; tick?: boolean}> = ({children, at, tick = true}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	return (
		<span style={{display: 'inline-flex', alignItems: 'center', gap: '0.25em'}}>
			<span style={{display: 'inline-block', padding: '0.04em 0.36em', background: CARD, border: `5px solid ${p > 0 ? MATH_ANSWER : 'transparent'}`, borderRadius: 16, boxShadow: p > 0 ? `0 12px 26px rgba(40,115,71,${0.14 * p})` : undefined}}>{children}</span>
			{tick ? (
				<svg width="0.9em" height="0.9em" viewBox="0 0 60 60" style={{overflow: 'visible'}}>
					<DrawPath d="M8,32 L24,48 L54,10" at={at + 10} dur={12} color={MATH_ANSWER} width={8} />
				</svg>
			) : null}
		</span>
	);
};

export type WorkRow = {
	/** Left of the relation (omit for a continuation row starting with "="). */
	left?: React.ReactNode;
	relation?: React.ReactNode;
	right: React.ReactNode;
	at: number;
	out?: number;
	answer?: boolean;
	/** Keep this row at full size and ink after later rows arrive (an established result). */
	keep?: boolean;
};

/**
 * Staged working rows with a stable relation column. The newest row is `size` (default 60 px);
 * earlier rows shrink to `oldSize` (default 36 px) and dim as the next row arrives, unless `keep`.
 * Each row writes on left to right.
 */
export const WorkingRows: React.FC<{x: number; y: number; w?: number; rows: WorkRow[]; size?: number; oldSize?: number; gap?: number}> = ({x, y, w = 1100, rows, size = 76, oldSize = 48, gap = 22}) => {
	const f = useCurrentFrame();
	const shown = rows.filter(r => f >= r.at - 1 && (r.out === undefined || f < r.out + 12));
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, display: 'grid', gridTemplateColumns: 'auto auto 1fr', columnGap: 18, rowGap: gap, alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, color: INK}}>
			{shown.map((r, i) => {
				const idx = rows.indexOf(r);
				const next = rows.slice(idx + 1).find(n => n.at > r.at);
				const age = next && !r.keep && !r.answer ? prog(f, next.at, 16) : 0;
				const fs = interpolate(age, [0, 1], [size, oldSize]);
				const op = (1 - 0.38 * age) * (r.out === undefined ? 1 : 1 - prog(f, r.out, 12));
				const reveal = smooth(Math.max(0, Math.min(1, (f - r.at) / 18)));
				const clip = reveal >= 1 ? undefined : `inset(-30% ${100 - reveal * 100}% -30% -4%)`;
				const cell: React.CSSProperties = {fontSize: fs, opacity: op, whiteSpace: 'pre', lineHeight: 1.3, clipPath: clip};
				return (
					<React.Fragment key={idx}>
						<div style={{...cell, textAlign: 'right'}}>{r.left ?? ''}</div>
						<div style={{...cell, textAlign: 'center'}}>{r.relation ?? '='}</div>
						<div style={{...cell}}>{r.answer ? <AnswerFrame at={r.at + 6}>{r.right}</AnswerFrame> : r.right}</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

/**
 * The classic mistake, shown and crossed in red: the wrong working in muted ink, a red strike, a red
 * cross, a red hand caption naming the fix, and an optional grey comparison tag.
 */
export const MistakeCard: React.FC<{x: number; y: number; w?: number; at: number; out?: number; wrong: React.ReactNode; caption: string; compare?: React.ReactNode; size?: number}> = ({x, y, w = 1000, at, out, wrong, caption, compare, size = 50}) => {
	const f = useCurrentFrame();
	const strike = prog(f, at + 14, 14);
	return (
		<Card x={x} y={y} w={w} at={at} out={out} border={MATH_MISTAKE} borderWidth={3} pad="14px 28px 16px">
			<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
				<div style={{position: 'relative', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK_SOFT, whiteSpace: 'pre'}}>
					{wrong}
					<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}>
						<path d="M0,62 Q50,50 100,40" stroke={MATH_MISTAKE} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - strike} />
					</svg>
				</div>
				<svg width={64} height={64} viewBox="-32 -32 64 64" style={{flex: 'none', overflow: 'visible'}}>
					<DrawPath d="M-24,-24 L24,24" at={at + 20} dur={8} color={MATH_MISTAKE} width={9} />
					<DrawPath d="M24,-24 L-24,24" at={at + 26} dur={8} color={MATH_MISTAKE} width={9} />
				</svg>
			</div>
			<div style={{marginTop: 4}}><HandText text={caption} at={at + 34} size={46} color={MATH_MISTAKE} cps={26} /></div>
			{compare ? <Enter at={at + 60} dy={8} style={{marginTop: 6, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT}}>{compare}</Enter> : null}
		</Card>
	);
};

/** A result line on a paper card (g01 formula panel), for rules found on a graph stage. */
export const ResultCard: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode; size?: number; role?: RoleKey}> = ({x, y, at, out, children, size = 54, role}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '6px 26px 8px', boxShadow: '0 12px 26px rgba(60,45,20,0.10)', border: `3px solid ${role ? MATH_ROLES[role].stroke : 'rgba(60,45,20,0.12)'}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>
	</Enter>
);

/** A single-call board in the g01 layout. Everything is positioned for 1920 x 1080. */
export const WorkingBoard: React.FC<{
	task: {text: string; at?: number};
	equation: {content: React.ReactNode; at: number; size?: number};
	givens?: {title?: string; at: number; lines: GivenLine[]; y?: number; w?: number};
	rows: WorkRow[];
	rowsX?: number; rowsY?: number; rowsW?: number; rowSize?: number;
	mistake?: {at: number; wrong: React.ReactNode; caption: string; compare?: React.ReactNode; x?: number; y?: number; w?: number};
	children?: React.ReactNode;
}> = ({task, equation, givens, rows, rowsX = 760, rowsY = 290, rowsW = 1070, rowSize = 76, mistake, children}) => (
	<>
		<TaskStrip text={task.text} at={task.at ?? 4} />
		<EquationStrip at={equation.at} size={equation.size}>{equation.content}</EquationStrip>
		{givens ? <GivensCard at={givens.at} title={givens.title} lines={givens.lines} y={givens.y ?? 320} w={givens.w} /> : null}
		<WorkingRows x={rowsX} y={rowsY} w={rowsW} rows={rows} size={rowSize} />
		{mistake ? <MistakeCard x={mistake.x ?? MARGIN} y={mistake.y ?? 690} w={mistake.w ?? 1728} at={mistake.at} wrong={mistake.wrong} caption={mistake.caption} compare={mistake.compare} /> : null}
		{children}
	</>
);
