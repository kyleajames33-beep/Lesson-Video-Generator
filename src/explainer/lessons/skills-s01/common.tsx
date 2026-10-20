// S01 "Read the question before you answer it": shared pieces for the scenes. The worked question (iron thiocyanate,
// in terms of collision theory, 3 marks) stays at one place (ZONE.card) from scene 2 to 9, with the ruled answer box
// under it and the side column at the right; the routine strip builds at the far left.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills01/measured/lesson.json';
import {AMBER, AMBER_INK, Ann, AnsSpec, ARow, CardSpec, Chip, chipW, GREY_INK, INK, IRON, IRON_G, PlatePair, QItem, T, ZONE, cardGeom, clamp01, lessonHelpers, plateW, prog, pulse, smooth, vis} from './kit';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills01');

// ---------- the worked question ----------
export const IRON_ITEMS = (t: number[] = [], marksAt?: number): QItem[] => [
	{text: 'The equilibrium below is established in a test tube at 25 °C.', at: t[0]},
	{text: 'Fe^{3+}(aq) (pale yellow) + SCN^{−}(aq) (colourless) ⇌ FeSCN^{2+}(aq) (red)', align: 'center', at: t[1]},
	{text: 'A few crystals of iron(III) nitrate, Fe(NO_3)_3, are added and dissolve. The temperature stays at 25 °C, and the solution becomes a deeper red.', at: t[2]},
	{text: 'Explain this colour change in terms of collision theory.', marks: '3 marks', at: t[3], marksAt},
];
export const ironSpec = (t: number[] = [-100, -100, -100, -100], marksAt?: number, x: number = ZONE.card.x, y: number = ZONE.card.y): CardSpec => ({
	x, y, w: ZONE.card.w, subject: 'Chemistry', slotW: 190, note: 'Chemistry example; the reading skill is the same in Biology', items: IRON_ITEMS(t, marksAt),
});
export const IRON_CARD = ironSpec();
/** Annotations the worked card has collected by each scene (all already drawn: at -100). */
export const ironAnn = (stage: 'verb' | 'marks' | 'content' | 'constraint', at: Partial<Record<string, number>> = {}): Ann[] => {
	const a = (k: string) => at[k] ?? -100;
	const out: Ann[] = [{kind: 'verb', phrase: 'Explain', at: a('verb')}];
	if (stage === 'verb') return out;
	out.push({kind: 'marks', at: a('marks')});
	if (stage === 'marks') return out;
	out.push({kind: 'given', phrase: 'iron(III) nitrate,', at: a('iron')}, {kind: 'given', phrase: 'deeper red', at: a('deeper')}, {kind: 'ring', phrase: 'Fe^{3+}(aq)', at: a('fe'), color: AMBER}, {kind: 'given', phrase: 'temperature stays at 25 °C', at: a('temp')});
	if (stage === 'content') return out;
	out.push({kind: 'constraint', phrase: 'in terms of collision theory', at: a('constraint')});
	return out;
};

/** The tube plate in the card's right slot (C3 pair: pale red-orange, then deep red). */
export const tubeBox = (spec: CardSpec = IRON_CARD) => {
	const g = cardGeom(spec);
	const h = 250, w = plateW(IRON.start, h);
	return {x: g.slot.x + (g.slot.w - w) / 2, y: g.slot.y + 16, w, h};
};
export const IronSlot: React.FC<{swap?: number; crystals?: number; glow?: number; spec?: CardSpec}> = ({swap = -1000, crystals, glow, spec = IRON_CARD}) => {
	const f = useCurrentFrame();
	const b = tubeBox(spec);
	const cx = b.x + b.w * IRON_G.axisU, top = b.y - 46, surf = b.y + b.h * IRON_G.liquidV;
	const gl = glow === undefined ? 0 : pulse(f, glow, 40);
	return (
		<g>
			{gl > 0.01 ? <ellipse cx={cx} cy={b.y + b.h * 0.55} rx={b.w * 0.9} ry={b.h * 0.42} fill="#e8a19a" opacity={0.45 * gl} /> : null}
			<PlatePair a={IRON.start} b={IRON.deep} x={b.x} y={b.y} h={b.h} swap={swap} />
			{crystals !== undefined ? [0, 1, 2, 3, 4].map(i => {
				const t0 = crystals + i * 5;
				const p = clamp01((f - t0) / 22);
				if (p <= 0 || p >= 1) return null;
				const y = top + (surf - top) * p * p, x = cx + (i - 2) * 4;
				return <rect key={i} x={x - 5} y={y - 5} width={10} height={10} fill="#d9a441" stroke="#8a5a12" strokeWidth={1.5} transform={`rotate(45 ${x} ${y})`} opacity={1 - p * 0.3} />;
			}) : null}
		</g>
	);
};

// ---------- the answer box ----------
export const BOX: AnsSpec = {x: ZONE.box.x, y: 488, w: ZONE.box.w, lines: 8, lh: 52, size: 33};
export const ROW_TEXT = [
	'Adding Fe(NO_3)_3 increases [Fe^{3+}], so Fe^{3+} and SCN^{−} ions collide more often: the forward rate increases.',
	'The reverse rate depends on [FeSCN^{2+}], which has not changed yet, so the forward rate is now greater than the reverse rate: FeSCN^{2+} forms faster than it splits.',
	'As [FeSCN^{2+}] rises, the reverse rate rises and the forward rate falls, until the rates are equal again with more FeSCN^{2+} (red): a deeper red.',
];
export const doneRows = (n: number): ARow[] => ROW_TEXT.slice(0, n).map(text => ({text, at: -1000, tick: -1000}));
/** Badge parked at the top-right of the answer box, beside the counter. */
export const BADGE_PARK: [number, number] = [BOX.x + BOX.w - 150, BOX.y + 26];
export const ParkedBadge: React.FC<{o?: number}> = ({o = 1}) => (
	<g opacity={o} transform={`translate(${BADGE_PARK[0]},${BADGE_PARK[1]})`}>
		<circle r={22} fill="#fff8e6" stroke={AMBER} strokeWidth={4} />
		<text y={9} textAnchor="middle" style={{fontFamily: '"Inter Tight"', fontWeight: 800, fontSize: 25}} fill={AMBER_INK}>3</text>
	</g>
);
/** The three keyword chips (from the constraint) in the answer box header. */
export const KW = ['collisions', 'how often', 'rates'];
export const kwX = () => { const out: number[] = []; let x = BOX.x + 140; for (const k of KW) { out.push(x); x += chipW(k, 24) + 24 * 1.3 + 14; } return out; };
export const Keywords: React.FC<{at: number; ticks?: (number | undefined)[]; drop?: boolean}> = ({at, ticks = [], drop = false}) => {
	const f = useCurrentFrame();
	const KW_X = kwX();
	return (
		<g>
			{KW.map((k, i) => {
				const t = at + i * 8;
				const dy = drop ? (1 - smooth(prog(f, t, 14))) * -60 : 0;
				return <g key={k} transform={`translate(0,${dy})`}><Chip x={KW_X[i]} y={BOX.y + 8} text={k} at={t} size={24} color="#16867a" tick={ticks[i]} /></g>;
			})}
		</g>
	);
};

// ---------- rate bars (C3 style: forward blue, reverse amber, no values) ----------
export const FWD = '#1f6fb2', REV = '#e0962a';
export const RateBars: React.FC<{x: number; base: number; fwd: number; rev: number; at: number; out?: number; ring?: number}> = ({x, base, fwd, rev, at, out, ring}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const bw = 80, gap = 70;
	const bar = (bx: number, h: number, c: string, label: string) => (
		<g>
			<rect x={bx} y={base - h} width={bw} height={h} rx={8} fill={c} />
			<T x={bx + bw / 2} y={base + 34} text={label} size={28} hand weight={700} color={INK} anchor="middle" />
		</g>
	);
	return (
		<g opacity={o}>
			<line x1={x - 20} x2={x + 2 * bw + gap + 20} y1={base} y2={base} stroke={GREY_INK} strokeWidth={3} />
			<T x={x - 20} y={base - Math.max(fwd, rev) - 22} text="rate" size={26} hand weight={700} color={GREY_INK} />
			{bar(x, fwd, FWD, 'forward')}
			{bar(x + bw + gap, rev, REV, 'reverse')}
			{ring !== undefined && f >= ring ? <ellipse cx={x + bw + gap + bw / 2} cy={base - rev / 2 - 4} rx={bw * 0.85} ry={rev / 2 + 14} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray={`${prog(f, ring, 14) * 600} 600`} /> : null}
		</g>
	);
};
