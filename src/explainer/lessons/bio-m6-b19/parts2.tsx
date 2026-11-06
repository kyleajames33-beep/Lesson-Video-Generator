// M6 B19 quality-fix parts (6 Nov 2026). Lesson-local larger variants of the column card, the mini board and the
// test label, because parts.tsx is imported by bio-m6-g02 and must stay unchanged.
// - ColumnCard2: a wider card with 50 px titles, 30 px row prompts (icon + question) that stay visible, and 34 to
//   38 px hand chips that fill on their narration cues, with the strength dot.
// - MiniBoard2: the four-column progress board with 24 px labels.
// - TestLabel2: a scalable test label (icon and question).
// - Thermo: a coded thermometer with a fill level and a label (for the laundry item).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, EDGE, GREY_INK, INK, INK_SOFT, Pl, Sx, clamp01, prog, smooth, tw, vis} from './parts';
import {Dot, TESTS, TestIcon} from './parts';
import type {Cell, DotK, MiniCell, PB, TestK} from './parts';

const wrap = (text: string, w: number, size: number) => {
	const out: string[] = [];
	let cur = '';
	for (const wd of text.split(' ')) {
		const t = cur ? cur + ' ' + wd : wd;
		if (tw(t, size, true) > w && cur) { out.push(cur); cur = wd; } else cur = t;
	}
	if (cur) out.push(cur);
	return out;
};
export {wrap};

export type Card2Props = {
	title: string; sub?: string; plate?: PB; plateW?: number; cells: (Cell | undefined)[]; at: number; out?: number; dimAll?: number;
	x?: number; y?: number; w?: number; headH?: number; rowH?: number; chip?: number; noLabels?: boolean; titleColor?: string;
	pulseRow?: {r: number; at: number}; emptyNote?: {r: number; text: string; at: number};
};
/** The case column, larger. Rows show their question prompt from the start; each chip writes on at its cue. */
export const ColumnCard2: React.FC<Card2Props> = ({title, sub, plate, plateW = 90, cells, at, out, dimAll, x = 1180, y = 200, w = 680, headH = 128, rowH = 222, chip = 36, noLabels = false, titleColor, pulseRow, emptyNote}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const dimK = dimAll === undefined ? 0 : prog(f, dimAll, 16);
	const lift = (1 - smooth(prog(f, at, 18))) * 60;
	const h = headH + 3 * rowH + 6;
	const L = Math.round(chip * 1.22);
	const tx = x + (plate ? 44 + plateW : 30);
	return (
		<g opacity={o} transform={`translate(${lift},0)`}>
			<rect x={x} y={y} width={w} height={h} rx={24} fill={CARD} stroke={dimK > 0.5 ? EDGE : AMBER} strokeWidth={dimK > 0.5 ? 2.5 : 4} />
			{plate ? <Pl p={plate} cx={x + 26 + plateW / 2} cy={y + headH / 2} w={plateW} dim={dimK} /> : null}
			<Sx x={tx} y={y + (sub ? 62 : 78)} text={title} size={50} color={dimK > 0.5 ? GREY_INK : titleColor ?? INK} hand weight={700} />
			{sub ? <Sx x={tx} y={y + 102} text={sub} size={28} color={GREY_INK} weight={600} /> : null}
			{[0, 1, 2].map(r => {
				const cy = y + headH + r * rowH;
				const c = cells[r];
				const later = cells.slice(r + 1).filter((q): q is Cell => !!q).map(q => q.at);
				const cDim = Math.max(dimK, c && later.length ? prog(f, Math.min(...later), 12) : 0);
				const co = c ? prog(f, c.at, 12) : 0;
				const base = c ? wrap(c.text, w - 140, chip) : [];
				const extra = c?.more ? wrap(c.more.text, w - 140, chip) : [];
				const lines = [...base, ...extra];
				const lineO = (i: number) => (i < base.length || !c?.more ? 1 : prog(f, c.more.at, 12));
				const pr = pulseRow && pulseRow.r === r ? Math.max(0, Math.sin(clamp01((f - pulseRow.at) / 40) * Math.PI)) : 0;
				const bh = lines.length * L + 22;
				return (
					<g key={r}>
						<line x1={x + 20} x2={x + w - 20} y1={cy - 4} y2={cy - 4} stroke={EDGE} strokeWidth={2} />
						{pr > 0.01 ? <rect x={x + 12} y={cy + 2} width={w - 24} height={50} rx={12} fill="#f6d77a" opacity={0.7 * pr} /> : null}
						{noLabels ? null : <TestIcon k={r as TestK} x={x + 46} y={cy + 30} s={0.8} color={co > 0.5 && cDim < 0.5 ? AMBER_INK : INK_SOFT} />}
						{noLabels ? null : <Sx x={x + 84} y={cy + 42} text={TESTS[r]} size={30} color={co > 0.5 && cDim < 0.5 ? INK : GREY_INK} weight={700} />}
						{c && co > 0.01 ? (
							<g opacity={co * (1 - 0.5 * cDim)}>
								<rect x={x + 20} y={cy + 60} width={w - 40} height={bh} rx={16} fill={cDim > 0.5 ? '#f3f2ee' : '#fff8e6'} stroke={cDim > 0.5 ? EDGE : AMBER} strokeWidth={2.5} />
								{lines.map((t, i) => <Sx key={i} x={x + 42} y={cy + 60 + 11 + chip * 0.95 + i * L} text={t} size={chip} color={cDim > 0.5 ? GREY_INK : INK} hand weight={700} at={-100} opacity={lineO(i)} />)}
								<Dot x={x + w - 54} y={cy + 60 + bh / 2} k={c.k} r={17} grey={cDim} />
							</g>
						) : null}
						{!c && emptyNote && emptyNote.r === r ? <Sx x={x + 42} y={cy + 104} text={emptyNote.text} size={30} color={GREY_INK} hand weight={700} at={emptyNote.at} /> : null}
					</g>
				);
			})}
		</g>
	);
};

export const MINI_COLS2 = ['farm', 'medicine', 'hormone', 'industry'];
/** The whole board in miniature (top right), 24 px labels. */
export const MiniBoard2: React.FC<{cells: MiniCell[]; active?: number; o?: number; x?: number; y?: number}> = ({cells, active = -1, o = 1, x = 1420, y = 26}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const cw = 112, rh = 30;
	return (
		<g opacity={o}>
			<rect x={x - 8} y={y - 4} width={4 * cw + 16} height={152} rx={14} fill={CARD} stroke={EDGE} strokeWidth={2} />
			{MINI_COLS2.map((t, c) => (
				<g key={t}>
					{c === active ? <rect x={x + c * cw} y={y + 2} width={cw - 4} height={140} rx={10} fill="#fff3d9" stroke={AMBER} strokeWidth={2} /> : null}
					<Sx x={x + c * cw + cw / 2 - 2} y={y + 32} text={t} size={22} color={c === active ? INK : GREY_INK} weight={700} anchor="middle" />
					{[0, 1, 2].map(r => <circle key={r} cx={x + c * cw + cw / 2 - 2} cy={y + 60 + r * rh} r={10} fill="none" stroke="#dedad2" strokeWidth={2} />)}
				</g>
			))}
			{cells.map((m, i) => <Dot key={i} x={x + m.c * cw + cw / 2 - 2} y={y + 60 + m.r * rh} k={m.k} r={10} o={prog(f, m.at, 10)} />)}
		</g>
	);
};

/** A test label (icon and question) at any size. */
export const TestLabel2: React.FC<{r: TestK; x: number; y: number; w?: number; h?: number; size?: number; lit?: number; o?: number}> = ({r, x, y, w = 470, h = 80, size = 38, lit = 0, o = 1}) => {
	if (o <= 0.01) return null;
	const s = h / 80;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={20 * s} fill={lit > 0.5 ? '#fff3d9' : '#fffdf8'} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 4 : 2.5} />
			<TestIcon k={r} x={x + 48 * s} y={y + h / 2} s={s} color={lit > 0.5 ? AMBER_INK : INK_SOFT} />
			<Sx x={x + 96 * s} y={y + h / 2 + size * 0.34} text={TESTS[r]} size={size} color={INK} hand weight={700} />
		</g>
	);
};

/** A coded thermometer: bulb at (x, y), tube up `h`, filled to `level` (0..1) in `color`, label below. */
export const Thermo: React.FC<{x: number; y: number; h?: number; level: number; color: string; label: string; o?: number; size?: number}> = ({x, y, h = 170, level, color, label, o = 1, size = 32}) => {
	if (o <= 0.01) return null;
	const L = clamp01(level);
	return (
		<g opacity={o}>
			<rect x={x - 14} y={y - h} width={28} height={h} rx={14} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x - 7} y={y - 10 - (h - 20) * L} width={14} height={(h - 20) * L + 12} rx={7} fill={color} />
			<circle cx={x} cy={y + 8} r={24} fill={color} stroke={INK_SOFT} strokeWidth={3} />
			<Sx x={x} y={y + 72} text={label} size={size} color={INK} hand weight={700} anchor="middle" />
		</g>
	);
};
export type {DotK};
