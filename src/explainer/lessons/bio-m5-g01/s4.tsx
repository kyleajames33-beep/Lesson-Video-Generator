// G01 scenes 5a to 7: question 4 (one crossover between two linked genes in a sweet pea anther cell: a coded chromatid
// strip, the two divisions, the four pollen cells and why new combinations are well under half), the decision board
// and the key notes. The four products are computed from the chromatid strands, never typed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {Overlay} from '../bio-m5-b06b/shared';
import {Chr, CPLUM, PCell, TEALC} from '../bio-m5-b08/shared';
import {MiniFold} from '../bio-m5-b07/shared';
import {SERIF} from '../bio-m5-b09/genetics';
import {
	AidChip, Badge, CheckStrip, Crossed, DecisionRows, Fade, GreyTag, QText, qCheck, HscTag, ModelLine, NextChip, Note, NotesBoard, PauseHold, Sx, TaskLine,
	clamp01, lerp, smooth, vis,
} from './board';
import {PLG, PlateB} from './plates';
import {hold, sc} from './common';
import {CHECKS, TRACE} from './s1';

// ---------- computed products ----------
type Chromatid = {up: 'P' | 'T'; low: 'P' | 'T'};
const ALLELE = {P: {up: 'P', low: 'L'}, T: {up: 'p', low: 'l'}} as const;
/** Before the crossover: two plum chromatids (P L) and two teal (p l). The crossover joins the inner two below it. */
const BEFORE: Chromatid[] = [{up: 'P', low: 'P'}, {up: 'P', low: 'P'}, {up: 'T', low: 'T'}, {up: 'T', low: 'T'}];
const AFTER: Chromatid[] = BEFORE.map((c, i) => (i === 1 ? {up: c.up, low: BEFORE[2].low} : i === 2 ? {up: c.up, low: BEFORE[1].low} : c));
const geno = (c: Chromatid) => ALLELE[c.up].up + ALLELE[c.low].low;
const isNew = (c: Chromatid) => c.up !== c.low;
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('G01 Q4 check failed: ' + msg); };
	must(AFTER.map(geno).join(',') === 'PL,Pl,pL,pl', 'products ' + AFTER.map(geno).join(','));
	must(AFTER.filter(isNew).length === 2, 'two new');
})();
const COLR = {P: CPLUM, T: TEALC};

// ---------- pieces ----------
const Bead: React.FC<{x: number; y: number; t: string; r?: number; o?: number; ring?: number}> = ({x, y, t, r = 19, o = 1, ring = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{ring > 0.01 ? <circle cx={x} cy={y} r={r + 8} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		<text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: r * 1.2}} fill={INK}>{t}</text>
	</g>
));
/** One coded chromatid rod: upper part and lower part (below the swap point) can differ in colour; beads at both genes. */
const RL = {len: 260, w: 26, cen: 0.28, up: 0.14, swap: 0.6, low: 0.82};
const Rod: React.FC<{x: number; y: number; c: Chromatid; s?: number; lowDx?: number; lowDy?: number; lit?: number; o?: number; beadO?: number}> = ({x, y, c, s = 1, lowDx = 0, lowDy = 0, lit = 0, o = 1, beadO = 1}) => {
	if (o <= 0.01) return null;
	const L = RL.len * s, w = RL.w * s;
	const ys = y + L * RL.swap;
	return (
		<g opacity={o}>
			{lit > 0.01 ? <rect x={x - w / 2 - 10 * s} y={y - 10 * s} width={w + 20 * s} height={L + 20 * s} rx={(w + 20 * s) / 2} fill={AMBER} opacity={0.45 * lit} /> : null}
			<rect x={x - w / 2} y={y} width={w} height={L * RL.swap + 2} rx={w / 2} fill={COLR[c.up]} stroke={INK} strokeWidth={2} />
			<rect x={x - w / 2 + lowDx} y={ys - 2 + lowDy} width={w} height={L * (1 - RL.swap) + 2} rx={w / 2} fill={COLR[c.low]} stroke={INK} strokeWidth={2} />
			<Bead x={x} y={y + L * RL.up} t={ALLELE[c.up].up} r={19 * s} o={beadO} />
			<Bead x={x + lowDx} y={y + L * RL.low + lowDy} t={ALLELE[c.low].low} r={19 * s} o={beadO} />
		</g>
	);
};
const RX = [1080, 1160, 1320, 1400];
/** Serif allele text (capital and lower-case letters differ clearly), fading in at `at`. */
const SText: React.FC<{x: number; y: number; text: string; size?: number; color?: string; at: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, size = 32, color = INK, at, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return o > 0.01 ? <text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: SERIF, fontWeight: 700, fontSize: size}} fill={color}>{text}</text> : null;
};
/** A model line in serif letters, with the amber tick. */
const SerifLine: React.FC<{x: number; y: number; text: string; at: number; size?: number}> = ({x, y, text, at, size = 32}) => (
	<g>
		<Fade at={at}><path d={`M${x - 28},${y - 11} L${x - 19},${y - 2} L${x - 6},${y - 22}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" /></Fade>
		<SText x={x} y={y} text={text} size={size} at={at} anchor="start" />
	</g>
);
const RY = 290;
const POLLEN = [1060, 1260, 1460, 1660];
const PY = 780;

const TASK4A = '(a) Alleles in each of the four pollen cells.';
const TASK4B = '(b) Using the givens, why are new combinations much less than half?';
type Q4At = {q: number; peas: number; same: number; plant: number; single: number; most: number; four: number; explain: number};
const NO4: Q4At = {q: -100, peas: -100, same: -100, plant: -100, single: -100, most: -100, four: -100, explain: -100};
const Q4Q = (t: Q4At) => qCheck([
	{text: 'In sweet peas, the gene for flower colour and the gene for pollen shape are on the same chromosome.', at: t.peas},
	{text: 'A plant has the purple and long alleles on one chromosome, and the red and round alleles on its partner.', at: t.plant},
	{text: 'In one cell in an anther, a single crossover happens between the two genes.', at: t.single},
	{text: 'Most other anther cells have no crossover between these two genes.', at: t.most},
	{text: '(a) List the alleles in each of the four pollen cells this cell makes.', at: t.four, para: true, weight: 650},
	{text: '(b) Explain why new combinations are much less common than half.', at: t.explain, para: true, weight: 650},
], ['purple and long alleles on one chromosome', 'red and round alleles on its partner', 'a single crossover happens between the two genes', 'four pollen cells', 'Most other anther cells have no crossover between these two genes'].map(phrase => ({phrase, at: 1e9})));
Q4Q(NO4);
const Q4Head: React.FC<{a?: Q4At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO4;
	return (
		<g>
			<TaskLine text={TASK4A} at={a ? 6 : -100} size={42} y={140} />
			<TaskLine text={TASK4B} at={a ? 30 : -100} size={42} y={192} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Meiosis: alleles" at={t.q + 10} />
			<PlateB p={PLG.peaPurple} cx={180} cy={340} w={150} o={prog(f, t.peas, 14)} />
			<PlateB p={PLG.peaRed} cx={350} cy={340} w={150} o={prog(f, t.peas + 8, 14)} />
			<Note x={104} y={470} text="purple flower" at={t.peas + 10} size={28} color={INK_SOFT} />
			<Note x={290} y={470} text="red flower" at={t.peas + 16} size={28} color={INK_SOFT} />
			<g opacity={prog(f, t.plant, 14)}>
				<Chr x={570} y={340} kind="L" col="P" s={0.85} />
				<Chr x={680} y={340} kind="L" col="T" s={0.85} />
				<Bead x={570} y={340 - 106 + 212 * 0.17} t="P" r={18} />
				<Bead x={570} y={340 - 106 + 212 * 0.83} t="L" r={18} />
				<Bead x={680} y={340 - 106 + 212 * 0.17} t="p" r={18} />
				<Bead x={680} y={340 - 106 + 212 * 0.83} t="l" r={18} />
			</g>
			<Fade at={t.plant + 20}>
				<text x={104} y={514} style={{fontFamily: SERIF, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>key: P purple, p red; L long, l round</text>
			</Fade>
			<QText q={Q4Q(t)} x={118} y={576} w={800} size={28} lh={36} at={t.peas} markAt={m} />
		</g>
	);
};
const PollenOutlines: React.FC<{at: number; o?: number}> = ({at, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	return <g opacity={p}>{POLLEN.map((x, i) => <ellipse key={i} cx={x} cy={PY} rx={84} ry={80} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />)}</g>;
};

// ---------- 5a. Question 4 (pause) ----------
const KA = cues(sc('q4-question'), {q: 'Question four', peas: 'In sweet peas', same: 'same chromosome', plant: 'A plant has the purple', single: 'single crossover', explain: 'explain why new combinations', four: 'four pollen cells', most: 'most anther cells', less: 'less common than half', pause: 'Pause here'});
export const SceneQ4Question: React.FC = () => {
	const h = hold('q4-question');
	return (
		<Overlay>
			<Q4Head a={{q: KA.q, peas: KA.peas, same: KA.same, plant: KA.plant, single: KA.single, most: KA.most, four: KA.four, explain: KA.explain}} />
			<PollenOutlines at={KA.four} />
			<Sx x={980} y={672} text="four pollen cells" size={34} color={INK_SOFT} hand at={KA.four + 6} />
			<PauseHold h={h} at={KA.pause} x={1000} y={600} cx={1480} cy={420} />
			<CheckStrip labels={CHECKS} title={TRACE} hold={h} />
		</Overlay>
	);
};

// ---------- 5b. Copy, then cross over ----------
const KB = cues(sc('q4-chromatids'), {pl: 'two purple long', rr0: 'two red round', chrom: 'Start with the chromatids', copying: 'After copying', four: 'the pair has four', cross: 'A crossover swaps', two: 'between two of them', each: 'one from each partner', only: 'only those two', now: "Now there's one purple long", pr: 'one purple round', rl: 'one red long', rr: ['red round', 2]});
const LABEL_AT = (k: typeof KB) => [k.now + 8, k.pr, k.rl, k.rr];
/** The chromatid strip at a frame of 5b. */
const Strip: React.FC<{f: number; k?: typeof KB; done?: boolean}> = ({f, k, done}) => {
	const appear = done || !k ? 1 : prog(f, k.chrom + 10, 14);
	const split = done || !k ? 1 : smooth((f - k.copying - 6) / 26);
	const sw = done || !k ? 1 : smooth((f - k.two - 30) / 34);
	const lit = done || !k ? 0 : vis(f, k.two, k.now + 30);
	const dx = RX[2] - RX[1];
	const mid = [(RX[0] + RX[1]) / 2, (RX[2] + RX[3]) / 2];
	return (
		<g opacity={appear}>
			{RX.map((x, i) => {
				const pairMid = mid[i < 2 ? 0 : 1];
				const xx = lerp(pairMid, x, split);
				const c = BEFORE[i];
				const swapping = i === 1 || i === 2;
				const arc = Math.sin(Math.PI * sw) * 40;
				if (!swapping) return <Rod key={i} x={xx} y={RY} c={c} />;
				const other = BEFORE[i === 1 ? 2 : 1];
				return (
					<g key={i}>
						<Rod x={xx} y={RY} c={{up: c.up, low: c.low}} lowDx={(i === 1 ? dx : -dx) * sw} lowDy={arc} lit={lit} o={split > 0.05 ? 1 : 0} />
						{void other}
					</g>
				);
			})}
			{split > 0.5 ? mid.map((m, i) => <circle key={i} cx={m} cy={RY + RL.len * RL.cen} r={11} fill="#fbf0cf" stroke={INK} strokeWidth={3} opacity={clamp01(split * 2 - 1)} />) : null}
		</g>
	);
};
export const SceneQ4Chromatids: React.FC = () => {
	const f = useCurrentFrame();
	const k = KB;
	const swY = RY + RL.len * RL.swap;
	const labs = LABEL_AT(k);
	return (
		<Overlay>
			<Q4Head m={{'purple and long alleles on one chromosome': KB.pl, 'red and round alleles on its partner': KB.rr0, 'a single crossover happens between the two genes': KB.cross}} />
			<PollenOutlines at={-100} />
			<Sx x={980} y={672} text="four pollen cells" size={34} color={INK_SOFT} hand at={-100} />
			<Strip f={f} k={k} />
			<Note x={1440} y={420} text="4 chromatids" at={k.four} size={34} color={INK_SOFT} />
			<g opacity={prog(f, k.cross, 10)}>
				<path d={`M${RX[1] + 20},${swY - 18} L${RX[2] - 20},${swY + 18} M${RX[1] + 20},${swY + 18} L${RX[2] - 20},${swY - 18}`} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
			</g>
			<Note x={(RX[1] + RX[2]) / 2} y={swY - 36} text="crossover" at={k.cross + 4} size={30} anchor="middle" />
			<GreyTag x={RX[0] - 60} y={236} text="not touched" at={k.only} size={24} anchor="middle" />
			<GreyTag x={RX[3] + 60} y={236} text="not touched" at={k.only + 6} size={24} anchor="middle" />
			{AFTER.map((c, i) => <SText key={i} x={RX[i]} y={604} text={geno(c)} size={32} color={isNew(c) ? AMBER_INK : INK} at={labs[i]} />)}
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [k.chrom + 10]}} />
		</Overlay>
	);
};

// ---------- 5c. Two divisions, four cells ----------
const KC = cues(sc('q4-four-cells'), {m1: 'Meiosis one sends', diff: 'to different cells', m2: 'meiosis two splits', each: 'each pollen cell gets one chromatid', pl: ['purple long', 1], pr: ['purple round', 1], rl: ['red long', 1], rr: ['red round', 1], orig: "the plant's original combinations", neu: 'two are new', four: 'four different pollen cells'});
const POL_LABEL = (i: number) => geno(AFTER[i]);
export const SceneQ4FourCells: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = smooth((f - KC.m1 - 10) / 40);
	const t2 = smooth((f - KC.m2 - 10) / 44);
	const big = [1110, 1480];
	const bigO = prog(f, KC.m1 + 20, 14) * (1 - prog(f, KC.m2 + 40, 14));
	const labs = [KC.pl, KC.pr, KC.rl, KC.rr];
	return (
		<Overlay>
			<Q4Head m={{'purple and long alleles on one chromosome': -100, 'red and round alleles on its partner': -100, 'a single crossover happens between the two genes': -100, 'four pollen cells': KC.each}} />
			<PollenOutlines at={-100} o={1 - prog(f, KC.m2 + 40, 14)} />
			{POLLEN.map((x, i) => <PCell key={i} cx={x} cy={PY} rx={84} ry={80} o={prog(f, KC.m2 + 40, 14)} />)}
			{big.map((x, i) => <PCell key={i} cx={x} cy={420} rx={150} ry={175} o={bigO} />)}
			<Note x={1295} y={650} text="meiosis I: partners to different cells" at={KC.m1 + 20} out={KC.m2 + 14} size={30} anchor="middle" />
			<Note x={1360} y={650} text="meiosis II: sister chromatids split" at={KC.m2 + 26} out={KC.each + 30} size={30} anchor="middle" />
			{AFTER.map((c, i) => {
				const pairShift = (i < 2 ? big[0] - (RX[0] + RX[1]) / 2 : big[1] - (RX[2] + RX[3]) / 2) * t1;
				const x0 = RX[i] + pairShift;
				const x = lerp(x0, POLLEN[i], t2);
				const s = lerp(1, 0.42, t2);
				const y = lerp(RY, PY - (RL.len * 0.42) / 2, t2);
				return <Rod key={i} x={x} y={y} c={c} s={s} />;
			})}
			{AFTER.map((c, i) => <SText key={i} x={POLLEN[i]} y={910} text={POL_LABEL(i)} size={38} color={isNew(c) ? AMBER_INK : INK} at={labs[i]} />)}
			{AFTER.map((c, i) => (isNew(c) ? <g key={i} opacity={prog(f, KC.neu, 12)}><ellipse cx={POLLEN[i]} cy={PY} rx={96} ry={92} fill="none" stroke={AMBER} strokeWidth={6} /></g> : null))}
			<GreyTag x={POLLEN[0]} y={656} text="original" at={KC.orig} size={26} anchor="middle" />
			<GreyTag x={POLLEN[3]} y={656} text="original" at={KC.orig + 6} size={26} anchor="middle" />
			<Note x={(POLLEN[1] + POLLEN[2]) / 2} y={686} text="new combinations" at={KC.neu + 6} size={32} anchor="middle" />
			<SerifLine x={1010} y={968} text={`(a) ${AFTER.map(geno).join(', ')}: 2 original, 2 new`} at={KC.four} size={34} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [-100]}} />
		</Overlay>
	);
};

// ---------- 5d. Why less than half, and the classic mistake ----------
const KD = cues(sc('q4-limit'), {why: 'So why are new combinations', even: 'Even in this cell', only2: 'only two of the four', card: 'as the card says', most: 'most cells have no crossover', between: 'between these two genes', all4: 'so all four keep', classic: 'The classic mistake', saying: 'saying all four pollen cells are new', touched: 'only touched two chromatids'});
/** A small anther cell icon: one homologous pair with a crossover mark (at the gene interval, elsewhere, or none). */
const MotherIcon: React.FC<{x: number; y: number; mark: 'between' | 'elsewhere' | 'none'}> = ({x, y, mark}) => (
	<g>
		<PCell cx={x} cy={y} rx={64} ry={58} />
		<rect x={x - 22} y={y - 40} width={14} height={80} rx={7} fill={CPLUM} stroke={INK} strokeWidth={1.5} />
		<rect x={x + 8} y={y - 40} width={14} height={80} rx={7} fill={TEALC} stroke={INK} strokeWidth={1.5} />
		{mark !== 'none' ? <path d={`M${x - 10},${y + (mark === 'between' ? 2 : 26) - 9} L${x + 10},${y + (mark === 'between' ? 2 : 26) + 9} M${x - 10},${y + (mark === 'between' ? 2 : 26) + 9} L${x + 10},${y + (mark === 'between' ? 2 : 26) - 9}`} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" /> : null}
		{mark === 'elsewhere' ? <line x1={x - 30} y1={y - 22} x2={x + 30} y2={y - 22} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="4 4" /> : null}
	</g>
);
const MiniPollen: React.FC<{x: number; y: number; t: string; isNew: boolean; o: number; ring: number}> = ({x, y, t, isNew: nw, o, ring}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={30} fill="#f3ead6" stroke={INK_SOFT} strokeWidth={2.5} />
		{ring > 0.01 && nw ? <circle cx={x} cy={y} r={38} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		<text x={x} y={y + 9} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 24}} fill={nw ? AMBER_INK : INK}>{t}</text>
	</g>
));
const ColX = [1100, 1400, 1700];
export const SceneQ4Limit: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [
		{title: 'this cell', mark: 'between' as const, prods: AFTER, at: 0, res: '2 of 4 new', resAt: KD.only2},
		{title: 'crossover elsewhere', mark: 'elsewhere' as const, prods: BEFORE, at: KD.between + 6, res: '4 original', resAt: KD.all4},
		{title: 'no crossover', mark: 'none' as const, prods: BEFORE, at: KD.between + 30, res: '4 original', resAt: KD.all4 + 8},
	];
	const dots = Array.from({length: 18}, (_, i) => ({x: 1000 + i * 46, y: 652, amber: i === 4 || i === 13}));
	return (
		<Overlay>
			<Q4Head m={{'purple and long alleles on one chromosome': -100, 'red and round alleles on its partner': -100, 'a single crossover happens between the two genes': -100, 'four pollen cells': -100, 'Most other anther cells have no crossover between these two genes': KD.between}} />
			{cols.map((c, ci) => {
				const o = prog(f, c.at, 16);
				return o > 0.01 ? (
					<g key={ci} opacity={o}>
						<Sx x={ColX[ci]} y={262} text={c.title} size={30} color={ci ? INK_SOFT : INK} hand anchor="middle" at={-100} />
						<MotherIcon x={ColX[ci]} y={340} mark={c.mark} />
						{c.prods.map((p, i) => <MiniPollen key={i} x={ColX[ci] + (i % 2 ? 36 : -36)} y={440 + Math.floor(i / 2) * 70} t={geno(p)} isNew={isNew(p)} o={prog(f, c.at + 10 + i * 3, 10)} ring={prog(f, c.resAt, 10)} />)}
						<Sx x={ColX[ci]} y={590} text={c.res} size={32} color={ci ? INK : AMBER_INK} weight={800} anchor="middle" at={c.resAt} />
					</g>
				) : null;
			})}
			<g opacity={prog(f, KD.all4 + 30, 16)}>
				{dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r={11} fill={d.amber ? AMBER : '#f3ead6'} stroke={d.amber ? AMBER_INK : INK_SOFT} strokeWidth={2} opacity={prog(f, KD.all4 + 30 + i, 6)} />)}
				<Sx x={1824} y={626} text="pollen (illustrative)" size={24} color={INK_SOFT} hand anchor="end" at={-100} />
			</g>
			<ModelLine x={1010} y={760} text="(b) a cell with one crossover between the genes" at={KD.all4 + 40} size={30} />
			<Sx x={1010} y={798} text="gives half new; most cells have none there," size={30} color={INK} weight={600} at={KD.all4 + 50} />
			<Sx x={1010} y={836} text="so far fewer than half overall" size={30} color={INK} weight={600} at={KD.all4 + 60} />
			<Crossed x={1000} y={858} text="all four cells new" at={KD.saying} cross={KD.saying + 22} caption="only two chromatids swap" size={30} />
			<GreyTag x={980} y={694} text="model limit: real cells can have no crossover, or more than one" at={KD.touched + 10} size={20} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [-100]}} />
		</Overlay>
	);
};

// ---------- 6. Decision board ----------
const K6 = cues(sc('decision-board'), {start: 'how to start any trace', seq: 'A sequence', err: 'A copying error', count: 'A count', cross: 'A crossover', next: 'Next'});
export const SceneDecisionG1: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Trace it: which strand, which end, what to count" at={4} size={56} />
			<DecisionRows y0={300} lh={128} rows={[
				{see: 'a sequence', doo: ["which strand? then find the 5' end"], badge: 'Q2', at: K6.seq, lit: [K6.seq, K6.err]},
				{see: 'a copying error', doo: ['each strand is its own template'], badge: 'Q1', at: K6.err, lit: [K6.err, K6.count]},
				{see: 'a count', doo: ['centromeres = chromosomes, chromatids = DNA'], badge: 'Q3', at: K6.count, lit: [K6.count, K6.cross]},
				{see: 'a crossover', doo: ['two chromatids change, not four'], badge: 'Q4', at: K6.cross, lit: [K6.cross, K6.next]},
			]} />
			<NextChip x={1060} y={880} w={764} text="Next: from a chain to a trait" at={K6.next}>
				<MiniFold x={1120} y={922} fold={smooth((f - K6.next - 10) / 30)} />
			</NextChip>
		</Overlay>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'Before any trace: which strand, which end, what am I counting.',
	'Replication: each strand is a template. An unrepaired error first makes a mismatch; after the next copy, one molecule has the changed pair and the other is normal.',
	'mRNA is a copy of the coding strand (T becomes U), built on the template strand. Read and write it from the 5\' end. Use the codon chart with mRNA codons; a stop codon adds no amino acid.',
	'Meiosis: centromeres count the chromosomes, chromatids count the DNA. Copying doubles the DNA, not the chromosomes. Meiosis I halves the chromosomes (pairs separate); meiosis II halves the DNA again (sister chromatids separate).',
	'One crossover between two genes changes two of the four chromatids: two original and two new combinations.',
];
export const SceneNotesG1: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Centromeres count the chromosomes; chromatids count the DNA." tag="a single, unpaired chromosome counts as one chromatid" size={30} aidTop={790} />
);
void AidChip; void INK;
