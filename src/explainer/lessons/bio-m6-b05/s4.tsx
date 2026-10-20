// M6 B05 scenes 13a to 13d: two unseen exam items (two X-rayed fruit flies: distinguish somatic and germ line, and
// their effects on the fly and its offspring; a promoter substitution against a silent coding substitution: assess the
// claim), each kept whole on screen through "Pause here to answer." and its 10 s countdown, then brief feedback with
// the givens underlined in the question as they are used and one crossed classic mistake. No givens card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, PlateB, Sx} from '../bio-m5-b13/shared';
import {pbPt} from '../bio-m5-b07/shared';
import {HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox, CurveArrow, FillBar, PlateAt} from '../bio-m6-b01/parts';
import {ChartCard, codonToAA} from '../bio-m6-b03/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {AMBER_INK, CellTree, Dot, INK, INK_SOFT, PLUM, TEALC, lerp, prog, smooth, treePt, vis} from './parts';

/** "Pause here to answer." with the 10 s countdown ring. */
const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1660, cy = 790}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text={label} size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);
const Line: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string}> = ({x, y, text, at, size = 30, color = AMBER_INK}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} />
);

// ---------- item 1: two flies ----------
type T1 = {a: number; b: number; c: number; d: number; e: number};
const STEM1 = (t: T1, marks: QMark[] = []) => qCheck([
	{text: 'Fruit fly (Drosophila) larvae were exposed to X-rays.', at: t.a},
	{text: 'In fly A, a mutation occurred in one cell that later formed part of an eye. The adult fly A had a small patch of white facets in one red eye.', at: t.b},
	{text: 'In fly B, a mutation occurred in a cell that produces sperm. Fly B looked normal.', at: t.c},
] as QBlock[], marks);
const DEM1 = (t: T1) => qCheck([
	{text: '(a) Identify the type of mutation in fly A and in fly B. (2 marks)', at: t.d, weight: 700},
	{text: '(b) Explain how the effects of the two mutations differ, on the fly in which each occurred and on its offspring. (4 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], []);
const MARKS1 = ['one cell that later formed part of an eye', 'a cell that produces sperm', 'Fly B looked normal'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, e: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));
/** A round magnifier on fly A's eye (the same plate drawn larger and clipped), joined to the eye by a thin line. */
const EyeZoom: React.FC<{fx: number; fy: number; fw: number; zx: number; zy: number; r?: number; at: number}> = ({fx, fy, fw, zx, zy, r = 52, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const P = PLATES.flyPatch;
	const [ex, ey] = pbPt(P, fx, fy, fw)(868, 632);
	const big = (P.box[2] - P.box[0]) * 0.62;
	const k = big / (P.box[2] - P.box[0]);
	const cx = zx - (885 - (P.box[0] + P.box[2]) / 2) * k, cy = zy - (632 - (P.box[1] + P.box[3]) / 2) * k;
	return (
		<g opacity={o}>
			<line x1={ex} y1={ey} x2={zx - r * 0.7} y2={zy + r * 0.7} stroke={INK_SOFT} strokeWidth={2} />
			<circle cx={ex} cy={ey} r={7} fill="none" stroke={INK_SOFT} strokeWidth={2} />
			<defs><clipPath id={`eyezoom-${zx}-${zy}`}><circle cx={zx} cy={zy} r={r} /></clipPath></defs>
			<circle cx={zx} cy={zy} r={r} fill="#fffdf8" />
			<g clipPath={`url(#eyezoom-${zx}-${zy})`}><PlateB p={P} cx={cx} cy={cy} w={big} /></g>
			<circle cx={zx} cy={zy} r={r} fill="none" stroke={INK_SOFT} strokeWidth={3} />
		</g>
	);
};
const Flies: React.FC<{at: number; s?: number; x?: number; y?: number}> = ({at, s = 1, x = 210, y = 330}) => (
	<>
		<EyeZoom fx={x} fy={y} fw={150 * s} zx={x + 150} zy={y + 40} r={50} at={at + 12} />
		<PlateAt p={PLATES.flyPatch} cx={x} cy={y} w={150 * s} at={at} />
		<Sx x={x} y={y + 125 * s} text="fly A" size={32 * Math.max(0.8, s)} color={INK} hand anchor="middle" at={at} />
		<PlateAt p={PLATES.flyRed} cx={x} cy={y + 260 * s} w={150 * s} at={at + 8} />
		<Sx x={x} y={y + 385 * s} text="fly B" size={32 * Math.max(0.8, s)} color={INK} hand anchor="middle" at={at + 8} />
	</>
);

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First, fruit fly', flyA: 'In fly A', flyB: 'In fly B', identify: 'Identify each type', explain: 'then explain how', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.first, b: KA.flyA, c: KA.flyB, d: KA.identify, e: KA.explain};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<Flies at={KA.flyA - 10} />
				<QText q={STEM1(t)} x={440} y={240} w={1340} size={32} card={false} />
				<QText q={DEM1(t)} x={440} y={470} w={1340} size={31} card={false} />
				<AnsBox x={440} y={620} w={1040} h={110} at={KA.identify + 10} label="(a)" />
				<AnsBox x={440} y={750} w={1040} h={230} at={KA.explain + 16} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {aSom: "Fly A's is somatic", mitosis: 'Mitosis copied it', patch: 'only a patch changed', gam: "isn't in A's gametes", bGerm: "Fly B's is germ-line", didnt: "It didn't change fly B", sperm: 'sperm from that cell', some: 'some offspring have it', pass: 'can pass it on', saying: 'Saying fly', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, e: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const TA = {x: 340, y: 470, R: 120};
	const TBp = {x: 240, y: 720, R: 100};
	const TN = {x: 580, y: 720, R: 100};
	const [gx, gy] = treePt(TBp, 6, 60);
	const go = smooth(prog(f, KB.some - 10, 24));
	const zx = lerp(gx + 6, TN.x, go), zy = lerp(gy, TN.y, go);
	return (
		<>
			<Heading text="Which cell line?" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				{/* the question strip: plates and stem stay readable */}
				<CardBox x={100} y={180} w={1720} h={225} at={-100} />
				<PlateAt p={PLATES.flyPatch} cx={190} cy={292} w={110} at={-100} />
				<PlateAt p={PLATES.flyRed} cx={318} cy={292} w={110} at={-100} />
				<Sx x={190} y={386} text="A" size={28} color={INK} hand anchor="middle" />
				<Sx x={318} y={386} text="B" size={28} color={INK} hand anchor="middle" />
				<QText q={STEM1(ALL1, [{phrase: MARKS1[0], at: KB.aSom + 6}, {phrase: MARKS1[1], at: KB.bGerm + 6}, {phrase: MARKS1[2], at: KB.didnt}])} x={410} y={232} w={2000} size={36} card={false} s={0.7} />
				{/* fly A: one cell, a patch */}
				<g opacity={prog(f, KB.mitosis, 14)}>
					<CellTree {...TA} mut={{g: 3, j: 2, t: 4 * prog(f, KB.mitosis + 10, 40)}} />
					<Sx x={TA.x} y={TA.y - 20} text="fly A" size={28} color={INK_SOFT} hand anchor="middle" />
				</g>
				{/* fly B: germ line to offspring */}
				<g opacity={prog(f, KB.bGerm, 14)}>
					<CellTree {...TBp} germ={{g: 3, j: 7, o: 1}} mut={{g: 3, j: 7, t: 4}} />
					<Sx x={TBp.x} y={TBp.y - 20} text="fly B" size={28} color={INK_SOFT} hand anchor="middle" />
				</g>
				<Dot x={zx} y={zy} r={12} mut={1} o={vis(f, KB.some - 10, KB.some + 30, 8)} />
				<CellTree {...TN} grow={f < KB.some + 26 ? -1 : 6 * prog(f, KB.some + 26, 40, x => x)} mut={{g: 0, j: 0, t: 10}} o={prog(f, KB.some + 20, 10)} />
				<Sx x={TN.x} y={TN.y - 20} text="offspring" size={28} color={INK_SOFT} hand anchor="middle" at={KB.some + 26} />
				{/* the model answer */}
				<AnsBox x={760} y={440} w={1060} h={110} at={-100} label="(a)" />
				<Line x={830} y={508} text="A: somatic" at={KB.aSom + 10} size={34} />
				<Line x={1180} y={508} text="B: germ-line" at={KB.bGerm + 10} size={34} />
				<AnsBox x={760} y={570} w={1060} h={330} at={-100} label="(b)" />
				<Line x={830} y={614} text="A: a patch of the eye only (copied by mitosis);" at={KB.patch} />
				<Line x={830} y={656} text="not in gametes, so offspring cannot inherit" at={KB.gam} />
				<Line x={830} y={698} text="the white-eye patch from it" at={KB.gam + 10} />
				<Line x={830} y={766} text="B: fly B unaffected; some offspring carry it" at={KB.some} />
				<Line x={830} y={808} text="in every cell and can pass it on" at={KB.pass} />
				<MistakeChip x={760} y={930} text="fly A's offspring inherit the white patch" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.sperm}
			</Overlay>
		</>
	);
};

// ---------- item 2: promoter or codon ----------
type T2 = {a: number; b: number; c: number};
const STEM2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'Two mutations were found in the gene for an enzyme.', at: t.a},
	{text: "Mutation P is a single base substitution in the gene's promoter. Cells carrying P produce about one tenth as much of the enzyme's mRNA as normal cells.", at: t.b},
	{text: 'Mutation Q is a single base substitution in the coding sequence that changes the mRNA codon CUU to CUC.', at: t.c},
] as QBlock[], marks);
const MARKS2 = ['CUU to CUC', 'promoter', 'about one tenth as much'];
qCheck(STEM2({a: 0, b: 0, c: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));
const CHART2 = ['CCU', 'CUC', 'CUU', 'UUU'];
(() => {
	if (codonToAA('CUU') !== 'Leu' || codonToAA('CUC') !== 'Leu') throw new Error('B05 item 2: CUU and CUC must both be Leu');
	if (codonToAA('CCU') !== 'Pro' || codonToAA('UUU') !== 'Phe') throw new Error('B05 item 2: distractor rows changed');
	if ([...CHART2].sort().join() !== CHART2.join()) throw new Error('chart excerpt must be alphabetical');
})();
const CLAIM = 'Q is more significant than P, because Q is in coding DNA.';

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', two: 'Two mutations are found', p: 'P is a substitution', q: 'Q is a substitution', claims: 'A student claims', assess: 'Assess the claim', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.two, b: KC.p, c: KC.q};
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={830} at={KC.two - 6} />
				<QText q={STEM2(t)} x={140} y={240} w={1180} size={32} card={false} />
				<ChartCard x={1390} y={210} w={390} rows={CHART2} at={KC.q + 10} title="Codon chart (part)" size={32} rowH={54} />
				<CardBox x={140} y={500} w={1180} h={90} at={KC.claims} fill="#fff6e6" stroke="#d9b37a" />
				<Sx x={170} y={556} text={`Student's claim: "${CLAIM}"`} size={30} color={INK} weight={600} at={KC.claims} />
				<Sx x={140} y={650} text="Assess the student's claim. (4 marks)" size={31} color={INK} weight={700} at={KC.assess} />
				<AnsBox x={140} y={690} w={1300} h={290} at={KC.assess + 10} label="answer" />
				<PauseHold id="attempt-two" at={KC.pause} cx={1650} cy={760} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {claim: "The claim isn't supported", both: 'both code for leucine', keeps: 'Q keeps the same', p: 'P changes no codon', cuts: 'it cuts the mRNA', likely: 'likely makes much less', evidence: 'On the evidence given', clearer: 'the clearer effect', picking: 'Picking Q', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const ROW = {x: 140, q: 560, p: 700, w: 1680};
	return (
		<>
			<Heading text="Judge by the effect" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={270} at={-100} />
				<QText q={STEM2(ALL2, [{phrase: MARKS2[0], at: KD.both - 4}, {phrase: MARKS2[1], at: KD.p}, {phrase: MARKS2[2], at: KD.cuts}])} x={140} y={226} w={1760} size={36} card={false} s={0.7} />
				<Sx x={140} y={420} text={`Student's claim: "${CLAIM}"`} size={26} color={INK} weight={600} at={-100} />
				<ChartCard x={1430} y={196} w={360} rows={CHART2} at={-100} title="Codon chart (part)" size={26} rowH={42} hi={{CUU: vis(f, KD.both, KD.p + 20, 10), CUC: vis(f, KD.both + 8, KD.p + 20, 10)}} />
				{/* the comparison */}
				<CardBox x={ROW.x - 30} y={ROW.q - 70} w={ROW.w + 30} h={110} at={KD.both - 6} />
				<Sx x={ROW.x} y={ROW.q} text="Q (coding)" size={38} color={INK} hand at={KD.both - 6} />
				<Sx x={ROW.x + 520} y={ROW.q} text="same amino acid: Leu stays Leu" size={38} color={AMBER_INK} hand at={KD.keeps} />
				<CardBox x={ROW.x - 30} y={ROW.p - 70} w={ROW.w + 30} h={110} at={KD.p - 6} />
				<Sx x={ROW.x} y={ROW.p} text="P (promoter: non-coding)" size={38} color={TEALC} hand at={KD.p - 6} />
				<FillBar x={ROW.x + 500} y={ROW.p - 34} w={140} h={26} p={lerp(1, 0.1, prog(f, KD.cuts + 10, 24))} color="#7fa173" o={prog(f, KD.p + 10, 10)} />
				<Sx x={ROW.x + 665} y={ROW.p} text="less transcription: a tenth of the mRNA, likely much less enzyme" size={35} color={AMBER_INK} hand at={KD.likely} />
				<Sx x={ROW.x} y={840} text="claim not supported: on this evidence, P has the clearer effect" size={44} color={INK} hand at={KD.clearer} />
				<Sx x={ROW.x} y={890} text="judge by effect, not by coding or non-coding" size={30} color={INK_SOFT} hand at={KD.clearer + 50} />
				<MistakeChip x={ROW.x} y={930} text="coding DNA always matters more" at={KD.picking} cross={KD.mistake} size={32} />
				{void KD.claim}{void KD.evidence}{void PLUM}
			</Overlay>
		</>
	);
};
