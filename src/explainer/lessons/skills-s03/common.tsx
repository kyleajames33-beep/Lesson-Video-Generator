// S03 "Compare, contrast, distinguish": shared pieces. The worked card (snapdragons and cattle, compare, 3 marks) is
// full width in scenes 3 and 4 with the cross plates in the side column under it; it shrinks to 0.72 at the end of
// scene 4 and the answer box moves up under it (boxTop). The pair table lives in the side column from scene 5.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills03/measured/lesson.json';
import {
	AMBER, Ann, AnsSpec, ARow, CardSpec, COW, GREY_INK, INK_SOFT, PDef, Plate, QuestionCard, T, ZONE, answerGeom, cardGeom, lerp, lessonHelpers, mkPlate, plateW, prog, smooth,
} from './kit';
import type {PRow} from './pieces';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills03');

// ---------- plates (alpha boxes measured 21 Oct, PIL alpha > 20) ----------
const B = 'assets/biology/', C = 'assets/chemistry/';
export const SNAP = {
	red: mkPlate(B + 'm5x-snapdragon-red-v1.png', [2000, 2000], [654, 226, 1452, 1778]),
	white: mkPlate(B + 'm5x-snapdragon-white-v1.png', [2000, 2000], [611, 217, 1419, 1782]),
	pink: mkPlate(B + 'm5x-snapdragon-pink-v1.png', [2000, 2000], [599, 215, 1411, 1785]),
};
/** Duplicated homologous pair: pink chromosome left, teal right. Box-relative (u, v) landmarks read off the plate. */
export const CHROM = mkPlate(B + 'b5x-chromosome-pair-v1.png', [2000, 2000], [283, 232, 1784, 1793]);
export const CHROM_G = {pinkU: 0.265, tealU: 0.75, centV: 0.47, bandV: 0.195, chromatidU: [0.144, 0.359, 0.65, 0.857]};
export const BEAKER = mkPlate(C + 'm6-beaker-v1.png', [2048, 2048], [278, 164, 1769, 1884]);

// ---------- the worked card ----------
export const snapSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology',
	items: [
		{text: 'Two crosses were carried out. All the parents were true-breeding.', at: t[0]},
		{table: {head: ['Organism', 'Parents crossed', 'Offspring'], rows: [['snapdragon', 'red flowers × white flowers', 'all pink flowers'], ['cattle', 'red coat × white coat', 'all roan (a mixture of red hairs and white hairs)']], colW: [200, 400, 800]}, at: t[1]},
		{text: 'Compare the inheritance of flower colour in the snapdragons with the inheritance of coat colour in the cattle.', marks: '3 marks', at: t[2], marksAt},
	],
});
export const SNAP_CARD = snapSpec();
export const CARD_S = 0.72;
export const cardH = () => cardGeom(SNAP_CARD).h;
export const boxFullY = () => ZONE.card.y + cardH() + 24;
export const boxTop = () => ZONE.card.y + cardH() * CARD_S + 26;
export const box3 = (y: number = boxTop()): AnsSpec => ({x: ZONE.box.x, y, w: ZONE.box.w, lines: 8, lh: 50, size: 32});
export const SNAP_ANN = (t: {verb?: number; marks?: number; tb?: number; pink?: number; hairs?: number} = {}): Ann[] => [
	{kind: 'verb', phrase: 'Compare', at: t.verb ?? -100}, {kind: 'marks', at: t.marks ?? -100},
	{kind: 'given', phrase: 'true-breeding.', at: t.tb ?? -100}, {kind: 'given', phrase: 'all pink flowers', at: t.pink ?? -100},
	{kind: 'given', phrase: 'a mixture of red hairs and white hairs', at: t.hairs ?? -100},
];
/** The worked card at 0.72 with its annotations. */
export const SnapCardSmall: React.FC<{o?: number; ann?: Ann[]}> = ({o = 1, ann = []}) => (
	<QuestionCard spec={SNAP_CARD} at={-100} s={CARD_S} o={o} ann={[...SNAP_ANN(), ...ann]} />
);

// ---------- the worked answer ----------
export const ROWS3_TEXT = [
	'In both crosses the offspring are heterozygous, because each true-breeding parent passes on a different allele.',
	'Both heterozygotes look unlike either parent, so neither allele completely masks the other.',
	'Snapdragons show incomplete dominance (an intermediate pink), whereas cattle show co-dominance (both colours fully expressed, in separate hairs).',
];
export const ROWS3_DONE: ARow[] = ROWS3_TEXT.map(text => ({text, at: -1000, tick: -1000}));
/** Slot rows (two ruled lines each) of the answer box: first ruled line index of slot i. */
export const SLOT_FIRST = [0, 2, 4];

/** Three dotted slots split into a left half and a right half, joined by a faint dashed pair line. */
export const SplitSlots: React.FC<{spec: AnsSpec; at: number; out?: number}> = ({spec, at, out}) => {
	const f = useCurrentFrame();
	const g = answerGeom(spec, []);
	return (
		<g>
			{[0, 1, 2].map(i => {
				const o = prog(f, at + 8 + i * 6, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
				if (o <= 0.01) return null;
				const y0 = g.ruleY(i * 2 - 1) + 6, y1 = g.ruleY(i * 2 + 1) - 6, mx = g.tx - 8 + g.tw / 2;
				return (
					<g key={i} opacity={o * 0.8}>
						<line x1={mx} x2={mx} y1={y0 + 8} y2={y1 - 8} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="4 8" />
						<line x1={mx - 70} x2={mx + 70} y1={(y0 + y1) / 2} y2={(y0 + y1) / 2} stroke={AMBER} strokeWidth={3} strokeDasharray="7 7" />
					</g>
				);
			})}
		</g>
	);
};

// ---------- the cross plates (side column, scenes 3 and 4) ----------
const SX = ZONE.side.x;
type PP = {p: PDef; x: number; y: number; h: number};
export const crossPos = (top: number) => {
	const sh = 150, ch = 92;
	const snapY = top + 6, cowY = top + 250;
	return {
		snap: [{p: SNAP.red, x: SX + 20, y: snapY, h: sh}, {p: SNAP.white, x: SX + 150, y: snapY, h: sh}, {p: SNAP.pink, x: SX + 350, y: snapY, h: sh}] as PP[],
		cow: [{p: COW.red, x: SX + 0, y: cowY, h: ch}, {p: COW.white, x: SX + 160, y: cowY, h: ch}, {p: COW.roan, x: SX + 350, y: cowY, h: ch}] as PP[],
		snapY, cowY, sh, ch,
	};
};
/**
 * Parents × parents → offspring, two rows. `kids` = [snap, cow] frames the offspring land; `parentsOut` fades the
 * parents; `slide` moves the two offspring side by side to (sideBy) at that frame.
 */
export const CrossPlates: React.FC<{top: number; at: number; cowAt: number; kids: [number, number]; parentsOut?: number; slide?: number; sideBy?: {y: number}; o?: number}> = ({top, at, cowAt, kids, parentsOut, slide, sideBy, o = 1}) => {
	const f = useCurrentFrame();
	const P = crossPos(top);
	const po = parentsOut === undefined ? 1 : 1 - prog(f, parentsOut, 14);
	const sl = slide === undefined ? 0 : smooth(prog(f, slide, 24));
	const lab = (x: number, y: number, t: string, op: number) => <T x={x} y={y} text={t} size={22} weight={600} color={GREY_INK} anchor="middle" o={op} />;
	const row = (pp: PP[], rowAt: number, kidAt: number, kidTag: string, tags: [string, string], to: {x: number; y: number}) => {
		const ro = prog(f, rowAt, 14);
		const ko = prog(f, kidAt, 14);
		const kid = pp[2];
		const kx = lerp(kid.x, to.x, sl), ky = lerp(kid.y, to.y, sl);
		const kw = plateW(kid.p, kid.h);
		const midY = pp[0].y + pp[0].h / 2;
		return (
			<g>
				<g opacity={ro * po}>
					<Plate p={pp[0].p} x={pp[0].x} y={pp[0].y} h={pp[0].h} />
					<Plate p={pp[1].p} x={pp[1].x} y={pp[1].y} h={pp[1].h} />
					<T x={(pp[0].x + plateW(pp[0].p, pp[0].h) + pp[1].x) / 2} y={midY + 12} text="×" size={36} weight={700} color={INK_SOFT} anchor="middle" />
					{lab(pp[0].x + plateW(pp[0].p, pp[0].h) / 2, pp[0].y + pp[0].h + 26, tags[0], 1)}
					{lab(pp[1].x + plateW(pp[1].p, pp[1].h) / 2, pp[1].y + pp[1].h + 26, tags[1], 1)}
					<path d={`M${pp[1].x + plateW(pp[1].p, pp[1].h) + 18},${midY} L${kid.x - 18},${midY} M${kid.x - 30},${midY - 10} L${kid.x - 18},${midY} L${kid.x - 30},${midY + 10}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" opacity={ko} />
				</g>
				<g opacity={ko}>
					<Plate p={kid.p} x={kx} y={ky} h={kid.h} />
					{lab(kx + kw / 2, ky + kid.h + 26, kidTag, 1)}
				</g>
			</g>
		);
	};
	return (
		<g opacity={o}>
			{row(P.snap, at, kids[0], 'all pink', ['red', 'white'], {x: SX + 60, y: sideBy?.y ?? 0})}
			{row(P.cow, cowAt, kids[1], 'all roan', ['red', 'white'], {x: SX + 220, y: (sideBy?.y ?? 0) + 40})}
			{void AMBER}
		</g>
	);
};

// ---------- the pair table (side column) ----------
export const PT_COLW = [150, 170, 170];
export const PT_ROWS = (t: Partial<PRow>[] = []): PRow[] => [
	{cells: ['offspring genotype', 'heterozygous', 'heterozygous'], at: -100, ...t[0]},
	{cells: ['offspring against parents', 'different from both parents', 'different from both parents'], at: -100, ...t[1]},
	{cells: ['how the alleles show', 'in between (pink)', 'both colours, separate hairs'], at: -100, ...t[2]},
];
/** Column header plates: pink snapdragon and roan calf, small. */
export const PtHead: React.FC<{x: number; y: number}> = ({x, y}) => {
	const c1 = x + PT_COLW[0] + PT_COLW[1] / 2, c2 = x + PT_COLW[0] + PT_COLW[1] + PT_COLW[2] / 2;
	const sh = 58, ch = 40;
	return (
		<g>
			<Plate p={SNAP.pink} x={c1 - plateW(SNAP.pink, sh) / 2} y={y + 6} h={sh} />
			<Plate p={COW.roan} x={c2 - plateW(COW.roan, ch) / 2} y={y + 16} h={ch} />
		</g>
	);
};
export const PT_HEAD = ['feature', 'snapdragons', 'cattle'];
export const PT_HEADH = 104;
