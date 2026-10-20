// S02 "Identify, describe, explain": shared pieces. The fruit fly card (three lettered parts on one stimulus) shrinks
// to ZONE.card at scale 0.72 once the parts are answered; the verb ladder (lesson-local) builds full size in scene 2,
// lives small at the far left while the parts are answered, fills with the iron tube answers in scene 9 and returns
// as the decision board.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills02/measured/lesson.json';
import {
	AMBER, AMBER_INK, CARD, CardSpec, FLY, lessonHelpers, GREY_INK, HI, INK, INK_SOFT, Plate, T, TEAL, ZONE, cardGeom, clamp01, lerp, measure, plateW, prog, pulse, smooth, vis, wrap,
} from './kit';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills02');

// ---------- the fly card ----------
export const flySpec = (t: number[] = [-100, -100, -100, -100, -100], marksAt: (number | undefined)[] = []): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 300, note: 'illustrative numbers',
	items: [
		{text: 'In fruit flies (Drosophila), the gene for eye colour is on the X chromosome. A white-eyed female was crossed with a red-eyed male.', at: t[0]},
		{table: {head: ['Offspring', 'red eyes', 'white eyes'], rows: [['females', '52', '0'], ['males', '0', '48']], colW: [200, 170, 170]}, at: t[1]},
		{label: '(a)', text: 'Identify which eye-colour allele is dominant.', marks: '1 mark', at: t[2], marksAt: marksAt[0]},
		{label: '(b)', text: 'Describe the results of this cross.', marks: '2 marks', at: t[3], marksAt: marksAt[1]},
		{label: '(c)', text: 'Explain why all the male offspring have white eyes but all the female offspring have red eyes.', marks: '3 marks', at: t[4], marksAt: marksAt[2]},
	],
});
export const FLY_CARD = flySpec();
export const CARD_S = 0.72;
/** Scale of the fly card: full until `from`, then shrinking to CARD_S. */
export const shrinkFrom = (from: number) => (f: number) => lerp(1, CARD_S, smooth(prog(f, from, 20)));
export const boxTop = () => ZONE.card.y + cardGeom(FLY_CARD).h * CARD_S + 26;

/** Parents and offspring in the card's right slot (painted flies, word tags, no sex symbols). */
export const flyPts = (spec: CardSpec = FLY_CARD) => {
	const g = cardGeom(spec);
	const h = 96, w = plateW(FLY.white, h);
	const x1 = g.slot.x + 44, x2 = g.slot.x + 196, y = g.slot.y + 12;
	return {mom: {x: x1, y, w, h}, dad: {x: x2, y, w, h}, daughters: {x: g.slot.x + 146, y: y + 230}, sons: {x: g.slot.x + 146, y: y + 310}, g};
};
export const FlySlot: React.FC<{at: number; kids?: number; spec?: CardSpec}> = ({at, kids, spec = FLY_CARD}) => {
	const f = useCurrentFrame();
	const p = flyPts(spec);
	const o = prog(f, at, 14);
	const ko = kids === undefined ? o : prog(f, kids, 14);
	const tag = (x: number, y: number, a: string, b: string) => (
		<g>
			<T x={x} y={y} text={a} size={22} weight={600} color={GREY_INK} anchor="middle" />
			<T x={x} y={y + 24} text={b} size={22} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
	const ih = 42, iw = plateW(FLY.red, ih);
	return (
		<g>
			<g opacity={o}>
				<Plate p={FLY.white} x={p.mom.x} y={p.mom.y} h={p.mom.h} />
				<Plate p={FLY.red} x={p.dad.x} y={p.dad.y} h={p.dad.h} />
				{tag(p.mom.x + p.mom.w / 2, p.mom.y + p.mom.h + 26, 'female,', 'white eyes')}
				{tag(p.dad.x + p.dad.w / 2, p.dad.y + p.dad.h + 26, 'male,', 'red eyes')}
				<T x={p.mom.x + p.mom.w + 30} y={p.mom.y + p.mom.h / 2 + 10} text="×" size={34} weight={700} color={INK_SOFT} anchor="middle" />
			</g>
			<g opacity={ko}>
				<line x1={p.g.slot.x + 44} x2={p.g.slot.x + p.g.slot.w} y1={p.daughters.y - 30} y2={p.daughters.y - 30} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
				<T x={p.g.slot.x + 44} y={p.daughters.y + 28} text="females" size={22} weight={600} color={GREY_INK} />
				<T x={p.g.slot.x + 44} y={p.sons.y + 28} text="males" size={22} weight={600} color={GREY_INK} />
				{[0, 1, 2].map(i => <Plate key={'d' + i} p={FLY.red} x={p.daughters.x + i * (iw + 8)} y={p.daughters.y} h={ih} />)}
				{[0, 1, 2].map(i => <Plate key={'s' + i} p={FLY.white} x={p.sons.x + i * (iw + 8)} y={p.sons.y} h={ih} />)}
			</g>
		</g>
	);
};

// ---------- the verb ladder ----------
export type IconK = 'identify' | 'describe' | 'explain';
const VERBS: IconK[] = ['identify', 'describe', 'explain'];
/** Depth icons: one word chip; a feature list; cause box, "so" arrow, effect box. */
export const DepthIcon: React.FC<{k: IconK; x: number; y: number; s?: number}> = ({k, x, y, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		{k === 'identify' ? <rect x={-24} y={-11} width={48} height={22} rx={11} fill="#fff8e6" stroke={AMBER} strokeWidth={3} /> : null}
		{k === 'describe' ? [0, 1, 2].map(i => <g key={i}><circle cx={-22} cy={-14 + i * 14} r={3} fill={INK_SOFT} /><line x1={-14} x2={20 - i * 6} y1={-14 + i * 14} y2={-14 + i * 14} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" /></g>) : null}
		{k === 'explain' ? <g><rect x={-34} y={-11} width={22} height={22} rx={4} fill="#dcebf8" stroke="#6f9bc8" strokeWidth={2.5} /><path d="M-9,0 L10,0 M4,-6 L10,0 L4,6" fill="none" stroke={AMBER_INK} strokeWidth={3} strokeLinecap="round" /><rect x={13} y={-11} width={22} height={22} rx={4} fill="#fff8e6" stroke={AMBER} strokeWidth={2.5} /></g> : null}
	</g>
);
export type Rung = {at: number; title?: string; body?: string; bodyAt?: number; hand?: boolean; lit?: [number, number]; so?: number; bodyColor?: string; extra?: React.ReactNode};
/**
 * The full verb ladder: three stacked rungs, identify at the bottom, explain at the top. Each rung: depth icon, verb
 * title, body text (definition, answer or rule), written on at bodyAt. `so` underlines every "so" in amber.
 */
export const VerbLadder: React.FC<{x: number; y: number; w: number; rungH: number[]; gap?: number; rungs: Rung[]; size?: number; out?: number; o?: number}> = ({x, y, w, rungH, gap = 22, rungs, size = 30, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, -1000, out, 12) * o;
	if (v <= 0.01) return null;
	// rungs[] is ordered identify, describe, explain; drawn top-down explain first
	const order = [2, 1, 0];
	const tops: number[] = [];
	let cy = y;
	order.forEach(i => { tops[i] = cy; cy += rungH[i] + gap; });
	return (
		<g opacity={v}>
			<line x1={x + 64} x2={x + 64} y1={y + 10} y2={cy - gap - 10} stroke="rgba(60,45,20,0.18)" strokeWidth={6} strokeLinecap="round" />
			{order.map(i => {
				const r = rungs[i];
				const ro = prog(f, r.at, 14);
				if (ro <= 0.01) return null;
				const top = tops[i], h = rungH[i];
				const lit = r.lit ? vis(f, r.lit[0], r.lit[1], 10) : 0;
				const L = r.body ? wrap(r.body, w - 160, size, r.hand ?? false, r.hand ? 700 : 500) : null;
				const lines: string[] = L ? Array.from({length: L.lines}, () => '') : [];
				L?.words.forEach(wd => { lines[wd.line] = lines[wd.line] ? lines[wd.line] + ' ' + wd.t : wd.t; });
				const bAt = r.bodyAt ?? r.at;
				const lh = size * 1.25;
				return (
					<g key={i} opacity={ro} transform={`translate(${(1 - smooth(prog(f, r.at, 16))) * -40},0)`}>
						{lit > 0.01 ? <rect x={x - 8} y={top - 8} width={w + 16} height={h + 16} rx={20} fill={HI} opacity={0.55 * lit} /> : null}
						<rect x={x} y={top} width={w} height={h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
						<DepthIcon k={VERBS[i]} x={x + 64} y={top + 46} s={1.2} />
						<T x={x + 120} y={top + 52} text={r.title ?? VERBS[i]} size={44} hand weight={700} color={INK} />
						{lines.map((t, k) => {
							const p = clamp01((f - bAt - k * 10) / Math.max(10, t.length * 0.7));
							return p > 0 ? <g key={k} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -2%)`}}><T x={x + 120} y={top + 52 + 18 + size + k * lh} text={t} size={size} hand={r.hand} weight={r.hand ? 700 : 500} color={r.bodyColor ?? INK} /></g> : null;
						})}
						{r.so !== undefined && L ? (() => {
							const out2: React.ReactNode[] = [];
							const sp = measure(' ', size, r.hand ?? false, r.hand ? 700 : 500);
							L.words.forEach((wd, k) => { if (wd.t.replace(/[^a-z]/gi, '').toLowerCase() === 'so') { const yy = top + 52 + 18 + size + wd.line * lh + 7; out2.push(<line key={k} x1={x + 120 + wd.x - 2} x2={x + 120 + wd.x + wd.w + 2} y1={yy} y2={yy} stroke={AMBER} strokeWidth={5} strokeLinecap="round" opacity={prog(f, r.so as number, 10)} />); } });
							void sp;
							return out2;
						})() : null}
						{r.extra}
					</g>
				);
			})}
		</g>
	);
};
/** Rung tops for pointing at the ladder from outside (same order logic as VerbLadder). */
export const rungTops = (y: number, rungH: number[], gap = 22) => {
	const tops: number[] = [];
	let cy = y;
	[2, 1, 0].forEach(i => { tops[i] = cy; cy += rungH[i] + gap; });
	return tops;
};

/** The ladder, small, at the far left: rungs light while their part is answered; `flash` pulses a rung. */
export const MiniLadder: React.FC<{at?: number; lit?: ([number, number] | undefined)[]; flash?: {rung: number; at: number}[]; o?: number}> = ({at = -100, lit = [], flash = [], o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const X = ZONE.strip.x, W = ZONE.strip.w, top = ZONE.strip.y, H = 70, G = 12;
	return (
		<g opacity={v}>
			<line x1={X + 36} x2={X + 36} y1={top + 8} y2={top + 3 * H + 2 * G - 8} stroke="rgba(60,45,20,0.18)" strokeWidth={5} strokeLinecap="round" />
			{[2, 1, 0].map((i, k) => {
				const y = top + k * (H + G);
				const l = lit[i] ? vis(f, lit[i]![0], lit[i]![1], 10) : 0;
				const fl = flash.filter(q => q.rung === i).reduce((a, q) => Math.max(a, pulse(f, q.at, 30)), 0);
				const g = Math.max(l, fl);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={X - 6} y={y - 5} width={W + 12} height={H + 10} rx={14} fill={fl > l ? '#f7c9bf' : HI} opacity={0.6 * g} /> : null}
						<rect x={X} y={y} width={W} height={H} rx={12} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<DepthIcon k={VERBS[i]} x={X + 36} y={y + H / 2} s={0.9} />
						<T x={X + 80} y={y + H / 2 + 11} text={VERBS[i]} size={32} hand weight={700} color={INK} />
					</g>
				);
			})}
		</g>
	);
};
export const miniRungY = (i: number) => ZONE.strip.y + [2, 1, 0].indexOf(i) * 82 + 35;

// ---------- the DNA ladder (B4 style, coded) ----------
const BASES = ['A', 'C', 'G', 'T', 'T'];
const COMP: Record<string, string> = {A: 'T', T: 'A', C: 'G', G: 'C'};
const BCOL: Record<string, string> = {A: '#e0962a', T: '#c4432f', C: '#2f8a5b', G: '#6a5acd'};
const OLD = '#1f6fb2', NEW = '#3aa66a';
/**
 * Five base pairs. unzip(i) 0..1 separates pair i (top first); dock 0..1 brings green new nucleotides and strands onto
 * each old strand, so two molecules stand side by side. sep: half distance between the two molecules when apart.
 */
export const DnaLadder: React.FC<{cx: number; y: number; unzip: (i: number) => number; dock?: number; sep?: number; s?: number; o?: number}> = ({cx, y, unzip, dock = 0, sep = 92, s = 1, o = 1}) => {
	if (o <= 0.01) return null;
	const hw = 40, dy = 46;
	const tile = (x0: number, x1: number, yy: number, b: string, newT: boolean, op = 1) => (
		<g opacity={op}>
			<rect x={Math.min(x0, x1)} y={yy - 14} width={Math.abs(x1 - x0)} height={28} rx={5} fill={newT ? '#e3f4ea' : '#fbf6ea'} stroke={newT ? NEW : BCOL[b]} strokeWidth={2.5} />
			<text x={(x0 + x1) / 2} y={yy + 8} textAnchor="middle" style={{fontFamily: '"Inter Tight"', fontWeight: 800, fontSize: 20}} fill={BCOL[b]}>{b}</text>
		</g>
	);
	const pts = BASES.map((_, i) => {
		const u = smooth(clamp01(unzip(i)));
		return {u, ax: cx - sep * u, bx: cx + sep * u, yy: y + i * dy};
	});
	const d = smooth(clamp01(dock));
	return (
		<g opacity={o} transform={`translate(${cx},${y}) scale(${s}) translate(${-cx},${-y})`}>
			{/* old strands */}
			<path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p.ax - hw},${p.yy}`).join(' ')} fill="none" stroke={OLD} strokeWidth={7} strokeLinecap="round" />
			<path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p.bx + hw},${p.yy}`).join(' ')} fill="none" stroke={OLD} strokeWidth={7} strokeLinecap="round" />
			{pts.map((p, i) => {
				const b = BASES[i], c = COMP[b];
				return (
					<g key={i}>
						{tile(p.ax - hw, p.ax, p.yy, b, false)}
						{tile(p.bx + hw, p.bx, p.yy, c, false)}
						{d > 0.01 && p.u > 0.5 ? tile(p.ax, p.ax + hw * d, p.yy, c, true, d) : null}
						{d > 0.01 && p.u > 0.5 ? tile(p.bx - hw * d, p.bx, p.yy, b, true, d) : null}
					</g>
				);
			})}
			{d > 0.6 ? <>
				<path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p.ax + hw},${p.yy}`).join(' ')} fill="none" stroke={NEW} strokeWidth={7} strokeLinecap="round" opacity={(d - 0.6) / 0.4} />
				<path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p.bx - hw},${p.yy}`).join(' ')} fill="none" stroke={NEW} strokeWidth={7} strokeLinecap="round" opacity={(d - 0.6) / 0.4} />
			</> : null}
		</g>
	);
};
void TEAL; void AMBER_INK;
