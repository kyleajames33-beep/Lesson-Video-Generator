// M6 G02 quality fix (6 Nov 2026): large-text layout for the practice walkthroughs. The side rail (mini verdict strip)
// is gone, so the question card runs full width (x 60, w 1800) at 32 px (table text 30 px). In each walkthrough the
// card shows only the items the step needs (real exam wording, givens underlined on cue). The answer is staged one
// part at a time: the current part writes on at 42 px in an amber card with its role tag; finished parts collapse to
// short ticked lines at 30 px above it. Side visuals sit at x 1320 to 1860 below the card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, Chip, DrawPath, GREY, GREY_FILL, GREY_INK, INK, INK_SOFT, MarkCounter, PenTick, T, TEAL, cardGeom, clamp01, lerp, prog, smooth, vis, wrap} from '../skills-shared';
import type {CardSpec, QItem} from '../skills-shared';
import {Dot, TestIcon} from './parts';
import type {DotK, TestK} from './parts';

export const CX = 60, CW = 1800;
export const SX2 = 1320, SW2 = 540;
export const PANEL_W = 1230;

/** A card spec reduced to some of its items (keeps their timings). */
export const sub = (spec: CardSpec, keep: number[]): CardSpec => ({...spec, items: spec.items.filter((_, i) => keep.includes(i)) as QItem[]});
/** Screen bottom of a card. */
export const cardBottom = (spec: CardSpec) => {
	const g = cardGeom(spec);
	return spec.y + g.h;
};

// ---------- role pills ----------
export type RoleK = 'verdict' | 'criterion' | 'evidence' | 'limitation' | 'criterion + evidence' | 'condition';
const ROLE: Record<string, [string, string]> = {verdict: [AMBER_INK, '#fff8e6'], criterion: [TEAL, '#d5eeea'], evidence: [INK, CARD], limitation: [GREY_INK, GREY_FILL], condition: [AMBER, '#fffdf8']};
export const roleCol = (r: RoleK) => ROLE[r.split(' ')[0]][0];

// ---------- the staged answer ----------
export type SRow = {text: string; short: string; at: number; dur?: number; tick?: number; role?: RoleK; notes?: {text: string; at: number; out?: number; amber?: boolean}[]};
export type Loop = {from: number; to: number; at: number};
const PRIOR = -500;
/**
 * The answer panel. Rows with at <= -500 were written in an earlier scene and show as done lines from the start.
 * The latest row that has started is the current part (42 px, amber card); each earlier row collapses to its short
 * line (30 px) when the next one starts. `loop` draws an amber arrow from the current part back to a done line.
 */
export const StagedAnswer: React.FC<{x?: number; y: number; w?: number; bottom?: number; rows: SRow[]; total: number; extra?: number[]; at?: number; size?: number; o?: number; loop?: Loop; dimAll?: number; label?: string}> = ({x = CX, y, w = PANEL_W, bottom = 1062, rows, total, extra = [], at = -100, size = 42, o = 1, loop, dimAll = 0, label = 'Answer'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 14) * o;
	if (v <= 0.01) return null;
	const dsz = 30;
	const listTop = y + 74;
	const nextAt = (i: number) => (i + 1 < rows.length ? rows[i + 1].at : 1e9);
	const done = rows.map((r, i) => (r.at <= PRIOR ? 1 : smooth(prog(f, nextAt(i) - 10, 12))));
	const shown = rows.map(r => (r.at <= PRIOR ? 1 : prog(f, r.at - 8, 10)));
	const D = done.reduce((a, b) => a + b, 0);
	const tx = x + 76, tw = w - 110;
	const lh = Math.round(size * 1.28);
	const ticks = [...rows.map(r => r.tick).filter((t): t is number => t !== undefined), ...extra];
	const geo = rows.map(r => {
		const L = wrap(r.text, tw, size, true, 700);
		const lines: string[] = Array.from({length: L.lines}, () => '');
		L.words.forEach(wd => { lines[wd.line] = lines[wd.line] ? lines[wd.line] + ' ' + wd.t : wd.t; });
		return lines;
	});
	const lastLive = rows.map((r, i) => (shown[i] > 0.01 ? i : -1)).reduce((a, b) => Math.max(a, b), -1);
	const cardH = (i: number) => 64 + geo[i].length * lh + 10;
	const maxCard = Math.max(0, ...rows.map((r, i) => (r.at <= PRIOR ? 0 : cardH(i))));
	const pitch = Math.max(36, Math.min(46, (bottom - y - 84 - maxCard) / Math.max(1, rows.length - 1)));
	const cardY = listTop + D * pitch + 6;
	const doneY = (i: number) => listTop + i * pitch + 32;
	if (lastLive >= 0 && cardY + cardH(lastLive) > bottom + 4) console.warn(`staged answer overflow at row ${lastLive}`);
	return (
		<g opacity={v}>
			<rect x={x + 4} y={y + 7} width={w} height={bottom - y} rx={14} fill="rgba(60,45,20,0.06)" />
			<rect x={x} y={y} width={w} height={bottom - y} rx={14} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={x + 26} y={y + 46} text={label} size={36} color={INK_SOFT} hand weight={700} />
			<T x={x + 170} y={y + 44} text="HSCScience marking guide (illustrative)" size={22} color={GREY_INK} weight={600} />
			<MarkCounter x={x + w - 22} y={y + 47} total={total} ticks={ticks} at={-100} size={32} />
			<line x1={x + 18} x2={x + w - 18} y1={y + 66} y2={y + 66} stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
			<g opacity={1 - 0.55 * clamp01(dimAll)}>
				{rows.map((r, i) => {
					const d = done[i];
					if (d <= 0.01) return null;
					const yy = doneY(i);
					const ticked = r.tick !== undefined && f >= r.tick;
					return (
						<g key={'d' + i} opacity={d}>
							<rect x={x + 22} y={yy - 26} width={7} height={32} rx={3} fill={r.role ? roleCol(r.role) : GREY} />
							{ticked ? <PenTick x={x + 52} y={yy - 10} at={-100} s={24} /> : null}
							<T x={x + 76} y={yy} text={r.short} size={dsz} color={INK} hand weight={700} o={0.86} />
							{(r.notes ?? []).map((n, k) => {
								const no = vis(f, n.at, n.out, 10);
								return no > 0.01 ? <Chip key={k} x={x + w - 24} y={yy - 30} text={n.text} at={-100} size={22} color={n.amber ? AMBER : GREY} fill="#fffdf8" hand={false} anchor="end" textColor={n.amber ? AMBER_INK : GREY_INK} o={no} /> : null;
							})}
						</g>
					);
				})}
				{rows.map((r, i) => {
					if (r.at <= PRIOR) return null;
					const a = shown[i] * (1 - done[i]);
					if (a <= 0.01) return null;
					const lines = geo[i];
					const total2 = lines.reduce((s, l) => s + l.length, 0) || 1;
					const dur = r.dur ?? Math.max(20, total2 * 0.85);
					const h = cardH(i);
					let acc = 0;
					let nx = x + 34;
					return (
						<g key={'a' + i} opacity={a}>
							<rect x={x + 16} y={cardY} width={w - 32} height={h} rx={16} fill="#fffaf0" stroke={AMBER} strokeWidth={3} />
							{r.role ? (() => {
								const [c, fill] = ROLE[r.role.split(' ')[0]];
								const el = <Chip key="role" x={nx} y={cardY + 12} text={r.role} at={-100} size={24} color={c} fill={fill} hand={false} />;
								nx += r.role.length * 13 + 50;
								return el;
							})() : null}
							{(r.notes ?? []).map((n, k) => {
								const no = vis(f, n.at, n.out, 10);
								const el = no > 0.01 ? <Chip key={k} x={nx} y={cardY + 12} text={n.text} at={-100} size={24} color={n.amber ? AMBER : GREY} fill="#fffdf8" hand={false} textColor={n.amber ? AMBER_INK : GREY_INK} o={no} /> : null;
								return el;
							})}
							{lines.map((lt, li) => {
								const t0 = r.at + (acc / total2) * dur;
								acc += lt.length;
								const t1 = r.at + (acc / total2) * dur;
								const p = clamp01((f - t0) / Math.max(1, t1 - t0));
								if (p <= 0) return null;
								return (
									<g key={li} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -2%)`}}>
										<T x={tx} y={cardY + 64 + (li + 0.78) * lh} text={lt} size={size} color={INK} hand weight={700} />
									</g>
								);
							})}
							{r.tick !== undefined ? <PenTick x={x + 48} y={cardY + 64 + 0.5 * lh} at={r.tick} s={32} /> : null}
						</g>
					);
				})}
				{loop && f >= loop.at ? (() => {
					const ay = cardY + 64 + 0.5 * lh, by = doneY(loop.to) - 10;
					return <DrawPath d={`M${x + 14},${ay} C${x - 40},${ay - 40} ${x - 40},${by + 40} ${x + 16},${by}`} at={loop.at} dur={18} color={AMBER_INK} width={4.5} />;
				})() : null}
				{loop && f >= loop.at + 16 ? <path d={`M${x + 2},${doneY(loop.to) - 22} L${x + 18},${doneY(loop.to) - 10} L${x + 2},${doneY(loop.to) + 4}`} fill="none" stroke={AMBER_INK} strokeWidth={4.5} strokeLinecap="round" opacity={prog(f, loop.at + 16, 6)} /> : null}
			</g>
		</g>
	);
};

// ---------- the three b19 tests, large ----------
const TESTS3 = ['Better than what?', 'Shown how?', 'Who gets it?'];
export const TestChipL: React.FC<{k: TestK; x: number; y: number; w?: number; fill?: string; dot?: DotK; fillAt?: number; at: number}> = ({k, x, y, w = SW2, fill, dot, fillAt = 1e9, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const fo = prog(f, fillAt, 12);
	const open = fill && fo > 0.01;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={open ? 112 : 60} rx={14} fill={CARD} stroke={fo > 0.5 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={2.5} />
			<TestIcon k={k} x={x + 34} y={y + 30} s={0.75} />
			<T x={x + 70} y={y + 41} text={TESTS3[k]} size={30} color={GREY_INK} weight={700} />
			{open ? <T x={x + 24} y={y + 94} text={fill!} size={34} color={INK} hand weight={700} o={fo} /> : null}
			{dot && fo > 0.01 ? <Dot x={x + w - 32} y={y + 84} k={dot} r={15} o={fo} /> : null}
		</g>
	);
};

// ---------- the evidence ladder, large labels ----------
const RUNGS4 = ['idea', 'lab', 'first patients', 'proven'];
export const LadderL: React.FC<{x: number; y: number; lit: number; o?: number; notYet?: number; rh?: number}> = ({x, y, lit, o = 1, notYet = 0, rh = 54}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<line x1={x} y1={y - 3 * rh - 18} x2={x} y2={y + 18} stroke={GREY} strokeWidth={4} strokeLinecap="round" />
			<line x1={x + 70} y1={y - 3 * rh - 18} x2={x + 70} y2={y + 18} stroke={GREY} strokeWidth={4} strokeLinecap="round" />
			{RUNGS4.map((t, k) => {
				const yy = y - k * rh;
				const on = k <= lit;
				return (
					<g key={t}>
						<line x1={x} x2={x + 70} y1={yy} y2={yy} stroke={k === lit ? AMBER : on ? '#d9b26a' : GREY} strokeWidth={k === lit ? 7 : 4} strokeLinecap="round" />
						<T x={x + 90} y={yy + 11} text={t} size={30} color={k === lit ? INK : GREY_INK} weight={700} />
						{k === 3 && notYet > 0.01 ? <T x={x + 210} y={yy + 11} text="not yet" size={34} color={AMBER_INK} hand weight={700} o={notYet} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- biodiversity levels, large labels ----------
export const Levels: React.FC<{x: number; y: number; w: number; h: number; o?: number; marks?: {r: number; kind: 'up' | 'down' | 'q'; o?: number}[]; lit?: number[]}> = ({x, y, w, h, o = 1, marks = [], lit = [0, 0, 0]}) => {
	if (o <= 0.01) return null;
	const rh = h / 3;
	const names = ['ecosystem', 'species', 'genetic'];
	const fs = Math.min(34, rh * 0.56);
	return (
		<g opacity={o}>
			{[0, 1, 2].map(r => (
				<g key={r}>
					<rect x={x} y={y + r * rh + 3} width={w} height={rh - 6} rx={8} fill={lit[r] > 0.5 ? '#fffaf0' : CARD} stroke={lit[r] > 0.5 ? AMBER : GREY} strokeWidth={2.5} />
					<T x={x + 16} y={y + r * rh + rh / 2 + fs * 0.34} text={names[r]} size={fs} color={INK} hand weight={700} />
				</g>
			))}
			{marks.map((m, i) => {
				const cx = x + w - 32, cy = y + m.r * rh + rh / 2, mo = m.o ?? 1;
				if (mo <= 0.01) return null;
				if (m.kind === 'q') return <T key={i} x={cx} y={cy + fs * 0.4} text="?" size={fs * 1.2} color={GREY_INK} weight={800} anchor="middle" o={mo} />;
				const up = m.kind === 'up';
				const col = up ? '#2f8a5b' : '#c4432f';
				const s = rh * 0.3;
				return <path key={i} d={up ? `M${cx},${cy + s} L${cx},${cy - s} M${cx - s * 0.6},${cy - s * 0.4} L${cx},${cy - s} L${cx + s * 0.6},${cy - s * 0.4}` : `M${cx},${cy - s} L${cx},${cy + s} M${cx - s * 0.6},${cy + s * 0.4} L${cx},${cy + s} L${cx + s * 0.6},${cy + s * 0.4}`} fill="none" stroke={col} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={mo} />;
			})}
		</g>
	);
};

/** A coloured band behind one table row of a card (card coordinates; r = 1 is the first data row). */
export const RowBand: React.FC<{spec: CardSpec; item: number; r: number; at: number; color: string; dashed?: boolean}> = ({spec, item, r, at, color, dashed}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const g = cardGeom(spec);
	const it = g.items[item];
	const cx = it.colX ?? [0, 0];
	const rh = it.rowH ?? 40;
	const x0 = cx[0], x1 = cx[cx.length - 1];
	const y0 = it.y0 + r * rh;
	return (
		<g opacity={o}>
			<rect x={x0 + 2} y={y0 + 2} width={(x1 - x0 - 4) * smooth(prog(f, at, 16))} height={rh - 4} fill={color} opacity={0.16} />
			<rect x={x0 - 12} y={y0 + 4} width={8} height={rh - 8} rx={4} fill={color} strokeDasharray={dashed ? '4 4' : undefined} opacity={dashed ? 0.6 : 1} />
		</g>
	);
};
void lerp;
