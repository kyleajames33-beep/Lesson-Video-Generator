// S04 scenes 11 to 16: the Chemistry justify drill (buffer pair), its feedback, the Biology assess drill (two codon
// substitutions), its feedback, the verb-specific decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CardSpec, Chip, CrossedHabit, DrawPath, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, KeyNotes, Overlay, Plate, QuestionCard,
	RoutineStrip, T, TEAL, ZONE, answerGeom, cardGeom, lerp, plateW, prog, smooth, vis,
} from './kit';
import type {AnsSpec, ARow} from './kit';
import {BEAKER, TAG_X, hold, sc} from './common';
import {RoleTag, VerbCard4, VerdictStrip} from './pieces';
import type {Role} from './pieces';
import {VERB4} from './s1';

const SX = ZONE.side.x;
const ALL4 = [-100, -100, -100, -100];
const boxUnder = (spec: CardSpec, lines: number, lh: number, size: number, s = 1): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h * s + 26, w: ZONE.box.w, lines, lh, size});
const tagY = (g: ReturnType<typeof answerGeom>, row: number, k = 0) => g.base(g.rows[row].first) - 26 + k * 40;
const Tags: React.FC<{g: ReturnType<typeof answerGeom>; tags: {row: number; role: Role; at: number; k?: number}[]}> = ({g, tags}) => (
	<g>{tags.map((t, i) => <RoleTag key={i} x={TAG_X} y={tagY(g, t.row, t.k ?? 0)} role={t.role} at={t.at} />)}</g>
);

// ---------- 11/12. Drill 1 (Chemistry, justify) ----------
const bufSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 240,
	items: [
		{text: 'A buffer solution with a pH of about 4.8 is needed. Two weak acids are available, each with its conjugate base.', at: t[0]},
		{table: {head: ['Weak acid', 'Conjugate base', 'pKa at 25 °C'], rows: [['ethanoic acid, CH_3COOH', 'ethanoate ion, CH_3COO^{−}', '4.74'], ['ammonium ion, NH_4^{+}', 'ammonia, NH_3', '9.25']], colW: [380, 380, 220]}, at: t[1]},
		{text: 'Justify which weak acid, with its conjugate base, should be used to make this buffer.', marks: '2 marks', at: t[2], marksAt},
	],
});
const BUF_CARD = bufSpec();
const bufBox = () => boxUnder(BUF_CARD, 7, 46, 30);
const BeakerSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = 150, w = plateW(BEAKER, h);
	const x = g.slot.x + (g.slot.w - w) / 2, y = g.slot.y + 10;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={BEAKER} x={x} y={y} h={h} />
			<T x={x + w / 2} y={y + h + 32} text="buffer, pH 4.8?" size={22} weight={700} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const D1 = 'drill-1';
const K11 = cues(sc(D1), {turn: 'Your turn', chem: 'Chemistry first', buffer: 'A buffer', ph: 'four point eight', eth: 'Ethanoic acid', amm: 'ammonium ion', justify: 'Justify', two: 'Two marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold(D1);
	const spec = bufSpec([K11.buffer, K11.eth, K11.justify], K11.two);
	const box = bufBox();
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K11.chem - 6} ann={[{kind: 'pulse', phrase: 'pH of about 4.8', at: K11.ph}]}><BeakerSlot spec={spec} at={K11.buffer} /></QuestionCard>
			<AnswerBox spec={box} at={K11.justify} counter={{total: 2, label: true}} />
			<DrillCountdown hold={h} at={K11.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
			{void K11.amm}
		</Overlay>
	);
};
const F1 = 'feedback-1';
const K12 = cues(sc(F1), {verdict: 'Verdict', eth: 'ethanoic acid', reason: 'Reason', pka: 'pKa', similar: 'similar amounts', evidence: 'Evidence', nine: 'nine point two five', four: 'four units', habit: 'The habit to drop', closer: 'why closer matters'});
const BUF_ROWS = [
	'Use ethanoic acid and ethanoate (CH_3COOH / CH_3COO^{−}).',
	'A buffer works best when its pH is close to the weak acid’s pKa, because the acid and its conjugate base are then present in similar amounts, so it can neutralise both added acid and added base.',
	'pKa 4.74 is within 0.1 of pH 4.8, whereas pKa 9.25 is about 4.5 units away: at pH 4.8 an NH_4^{+}/NH_3 mixture would be almost all NH_4^{+}, with almost no NH_3 to neutralise added acid.',
];
/** Coded pH number line, 4 to 10: the target pH marker and the two pKa dots, with the gap bracket. */
const PkaLine: React.FC<{x: number; y: number; w: number; target: number; a: number; b: number; gap: number}> = ({x, y, w, target, a, b, gap}) => {
	const f = useCurrentFrame();
	const X = (v: number) => x + ((v - 4) / 6) * w;
	const o = prog(f, target - 10, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<line x1={x} x2={x + w * prog(f, target - 10, 18)} y1={y} y2={y} stroke={INK} strokeWidth={3} />
			{[4, 5, 6, 7, 8, 9, 10].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 8} y2={y + 8} stroke={INK} strokeWidth={2.5} /><T x={X(v)} y={y + 34} text={String(v)} size={22} weight={600} color={GREY_INK} anchor="middle" /></g>)}
			<T x={x} y={y - 64} text="pH" size={26} hand weight={700} color={GREY_INK} />
			<g opacity={prog(f, target, 10)}><path d={`M${X(4.8)},${y - 12} l-10,-18 l20,0 Z`} fill={AMBER} /><T x={X(4.8) + 4} y={y - 40} text="pH 4.8" size={22} weight={700} color={AMBER_INK} anchor="start" /></g>
			<g opacity={prog(f, a, 10)}><circle cx={X(4.74)} cy={y} r={9} fill={TEAL} /><T x={X(4.74)} y={y + 64} text="pKa 4.74" size={22} weight={700} color={TEAL} anchor="middle" /></g>
			<g opacity={prog(f, b, 10)}><circle cx={X(9.25)} cy={y} r={9} fill={GREY_INK} /><T x={X(9.25)} y={y + 64} text="pKa 9.25" size={22} weight={700} color={GREY_INK} anchor="middle" /></g>
			<g opacity={prog(f, gap, 10)}>
				<DrawPath d={`M${X(4.8)},${y - 14} L${X(4.8)},${y - 24} L${X(9.25)},${y - 24} L${X(9.25)},${y - 14}`} at={gap} dur={14} color={RED_INK} width={3} cap="butt" />
				<T x={(X(4.8) + X(9.25)) / 2 + 30} y={y - 34} text="about 4.5" size={24} hand weight={700} color={RED_INK} anchor="middle" />
			</g>
		</g>
	);
};
const RED_INK = '#c4432f';
export const SceneFeedback1: React.FC = () => {
	const box = bufBox();
	const rows: ARow[] = [
		{text: BUF_ROWS[0], at: K12.eth, dur: 60},
		{text: BUF_ROWS[1], at: K12.reason + 28, dur: K12.evidence - K12.reason - 50, tick: K12.evidence - 10},
		{text: BUF_ROWS[2], at: K12.evidence + 30, dur: K12.habit - K12.evidence - 40, tick: K12.habit - 4},
	];
	const g = answerGeom(box, rows);
	return (
		<Overlay>
			<QuestionCard spec={BUF_CARD} at={-100} ann={[{kind: 'verb', phrase: 'Justify', at: 4}, {kind: 'marks', at: 12}, {kind: 'given', phrase: 'pH of about 4.8', at: 20}, {kind: 'ring', phrase: '4.74', at: 28}, {kind: 'ring', phrase: '9.25', at: 34}]}>
				<BeakerSlot spec={BUF_CARD} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 2, label: true}} rows={rows} ann={[{kind: 'under', row: 1, phrase: 'similar amounts,', at: K12.similar + 4}]} />
			<Tags g={g} tags={[{row: 0, role: 'verdict', at: K12.verdict + 6}, {row: 1, role: 'criterion', at: K12.reason}, {row: 2, role: 'evidence', at: K12.evidence}, {row: 2, role: 'verdict supported', at: K12.habit - 4, k: 1}]} />
			<PkaLine x={SX + 10} y={box.y + 110} w={460} target={K12.evidence} a={K12.evidence + 30} b={K12.nine} gap={K12.four} />
			<CrossedHabit x={SX} y={box.y + 220} text="Ethanoic acid, because its pKa is closer." at={K12.habit} cross={K12.closer} caption="why does closer matter?" size={28} maxW={470} />
			{void K12.pka}
		</Overlay>
	);
};

// ---------- 13/14. Drill 2 (Biology, assess) ----------
const mutSpec = (t: number[] = [-100, -100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 280,
	items: [
		{text: 'Part of the mRNA sequence for a protein contains the codon GAA, which codes for glutamic acid. Two different substitution mutations in the gene change this codon, as shown.', at: t[0]},
		{table: {head: ['mRNA codon', 'Codes for'], rows: [['original: GAA', 'glutamic acid'], ['mutation 1: GAG', 'glutamic acid'], ['mutation 2: UAA', 'stop']], colW: [300, 260]}, at: t[1]},
		{text: 'A student claims that ‘a substitution mutation always changes the protein’.', at: t[2]},
		{text: 'Using the information provided, assess this claim.', marks: '3 marks', at: t[3], marksAt},
	],
});
const MUT_CARD = mutSpec();
const MS = 0.72;
/** Coded mRNA strip in the card slot: three codon boxes, GAA highlighted (nothing answer-bearing). */
const CodonSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const x0 = g.slot.x + 20, y = g.slot.y + 50;
	return (
		<g opacity={prog(f, at, 14)}>
			<T x={x0} y={y - 14} text="mRNA" size={22} weight={700} color={GREY_INK} />
			<line x1={x0 - 10} x2={x0 + 240} y1={y + 24} y2={y + 24} stroke={GREY} strokeWidth={3} strokeDasharray="4 6" />
			{['CUG', 'GAA', 'AAG'].map((c, i) => (
				<g key={c}>
					<rect x={x0 + i * 82} y={y} width={74} height={48} rx={8} fill={i === 1 ? '#fff3c9' : CARD} stroke={i === 1 ? AMBER : INK_SOFT} strokeWidth={i === 1 ? 3.5 : 2} />
					<T x={x0 + i * 82 + 37} y={y + 33} text={c} size={24} weight={800} color={INK} anchor="middle" />
				</g>
			))}
		</g>
	);
};
const D2 = 'drill-2';
const K13 = cues(sc(D2), {bio: 'Now Biology', part: 'Part of an mRNA', m1: 'Mutation one', m2: 'Mutation two', stop: 'stop', claims: 'A student claims', always: 'always', using: 'Using the information', assess: 'assess', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold(D2);
	const spec = mutSpec([K13.part, K13.m1, K13.claims, K13.using], K13.three);
	const box = boxUnder(MUT_CARD, 6, 44, 29);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K13.bio - 6} ann={[{kind: 'pulse', phrase: 'always', at: K13.always}]}><CodonSlot spec={spec} at={K13.part} /></QuestionCard>
			<AnswerBox spec={box} at={K13.assess} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K13.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
			{void K13.m2}{void K13.stop}
		</Overlay>
	);
};
const F2 = 'feedback-2';
const K14 = cues(sc(F2), {verdict: 'Verdict first', not: 'not supported', always: 'always', m1: 'Mutation one', same: 'same', m2: 'Mutation two', shorter: 'shorter', some: 'Some substitutions', habit: 'The habit to drop', labelling: 'labelling', never: 'never judges'});
const MUT_ROWS = [
	'The claim is not supported: substitution mutations do not always change the protein.',
	'Mutation 1 changes GAA to GAG, but both codons code for glutamic acid (the code has more than one codon for most amino acids), so the amino acid sequence and the protein are unchanged (a silent mutation).',
	'Mutation 2 changes GAA to the stop codon UAA, so translation stops early and a shorter polypeptide forms, which is likely to be non-functional (a nonsense mutation).',
	'So some substitutions change the protein and some do not: the claim is incorrect as stated, because of ‘always’.',
];
/** Codon changes and bead chains in the side column (responds on "same" and "shorter"). */
const CodonPanel: React.FC<{x: number; y: number; same: number; shorter: number}> = ({x, y, same, shorter}) => {
	const f = useCurrentFrame();
	const rows: [string, string, string, number][] = [['original', 'GAA', 'Glu', -100], ['mutation 1', 'GAG', 'Glu', same], ['mutation 2', 'UAA', 'stop', shorter]];
	const bead = (bx: number, by: number, n: number, at: number, col: string) => Array.from({length: n}, (_, i) => <circle key={i} cx={bx + i * 26} cy={by} r={11} fill={col} stroke={INK} strokeWidth={1.5} opacity={prog(f, at + i * 3, 8)} />);
	return (
		<g>
			{rows.map(([lab, cod, aa, at], i) => {
				const yy = y + i * 64;
				return (
					<g key={lab}>
						<T x={x} y={yy + 32} text={lab} size={22} weight={600} color={GREY_INK} />
						<rect x={x + 130} y={yy} width={80} height={46} rx={8} fill={i === 0 ? '#fff3c9' : CARD} stroke={i === 0 ? AMBER : INK_SOFT} strokeWidth={2.5} />
						<T x={x + 170} y={yy + 32} text={cod} size={24} weight={800} color={INK} anchor="middle" />
						<g opacity={prog(f, at, 10)}>
							<path d={`M${x + 222},${yy + 23} L${x + 262},${yy + 23} M${x + 252},${yy + 15} L${x + 262},${yy + 23} L${x + 252},${yy + 31}`} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />
							<rect x={x + 272} y={yy + 2} width={aa === 'stop' ? 84 : 70} height={42} rx={21} fill={aa === 'stop' ? '#fbe6e1' : '#e3f3e9'} stroke={aa === 'stop' ? RED_INK : '#2f8a5b'} strokeWidth={2.5} />
							<T x={x + 272 + (aa === 'stop' ? 42 : 35)} y={yy + 31} text={aa} size={22} weight={700} color={aa === 'stop' ? RED_INK : '#2f8a5b'} anchor="middle" />
							{i === 1 ? <T x={x + 370} y={yy + 31} text="same" size={26} hand weight={700} color={TEAL} /> : null}
						</g>
					</g>
				);
			})}
			<g opacity={prog(f, shorter, 10)}>
				<T x={x} y={y + 230} text="full length" size={22} weight={600} color={GREY_INK} />
				{bead(x + 140, y + 222, 11, shorter, '#cfe3f5')}
				<T x={x} y={y + 276} text="mutation 2" size={22} weight={600} color={GREY_INK} />
				{bead(x + 140, y + 268, 4, shorter + 10, '#cfe3f5')}
				<T x={x + 140 + 4 * 26} y={y + 276} text="stop: shorter" size={24} hand weight={700} color={RED_INK} />
			</g>
		</g>
	);
};
export const SceneFeedback2: React.FC = () => {
	const box = boxUnder(MUT_CARD, 10, 40, 27, MS);
	const rows: ARow[] = [
		{text: MUT_ROWS[0], at: K14.verdict + 30, dur: K14.m1 - K14.verdict - 50},
		{text: MUT_ROWS[1], at: K14.m1, dur: K14.m2 - K14.m1 - 20, tick: K14.m2 - 8},
		{text: MUT_ROWS[2], at: K14.m2, dur: K14.some - K14.m2 - 20, tick: K14.some - 8},
		{text: MUT_ROWS[3], at: K14.some, dur: K14.habit - K14.some - 14, tick: K14.habit - 4},
	];
	const g = answerGeom(box, rows);
	return (
		<Overlay>
			<QuestionCard spec={MUT_CARD} at={-100} s={(fr: number) => lerp(1, MS, smooth(prog(fr, 0, 20)))} ann={[{kind: 'verb', phrase: 'assess', at: 4}, {kind: 'marks', at: 12}, {kind: 'constraint', phrase: 'Using the information provided,', at: 20}, {kind: 'ring', phrase: 'always', at: K14.always}]}>
				<CodonSlot spec={MUT_CARD} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} at={10} counter={{total: 3, label: true}} rows={rows} />
			<Tags g={g} tags={[{row: 0, role: 'verdict', at: K14.not}, {row: 1, role: 'evidence', at: K14.m1}, {row: 2, role: 'evidence', at: K14.m2}, {row: 3, role: 'verdict supported', at: K14.some}]} />
			<CodonPanel x={SX} y={box.y + 10} same={K14.same} shorter={K14.shorter} />
			<CrossedHabit x={SX} y={box.y + 330} text="Mutation 1 is silent and mutation 2 is nonsense." at={K14.habit} cross={K14.never} caption="labels only: is the claim right?" size={28} maxW={470} />
			{void K14.labelling}
		</Overlay>
	);
};

// ---------- 15. Decision board ----------
const K15 = cues(sc('decision-rule'), {so: 'So, when', assess: 'assess', evaluate: 'evaluate', justify: 'justify', analyse: 'analyse', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const V = (k: string) => VERB4.find(v => v.verb === k)!;
	return (
		<Overlay>
			<VerbCard4 x={96} y={150} w={520} h={130} verb="assess" body="" icon={V('assess').icon} at={-100} lit={[K15.assess, K15.justify]} />
			<VerbCard4 x={646} y={150} w={520} h={130} verb="evaluate" body="" icon={V('evaluate').icon} at={-100} lit={[K15.evaluate, K15.justify]} />
			<g opacity={vis(f, K15.assess)}>
				<DrawPath d={`M96,300 L96,312 L1166,312 L1166,300`} at={K15.assess} dur={14} color={AMBER_INK} width={4} cap="butt" />
				<HandLine x={96} y={364} text="make a judgement; support it with relevant" at={K15.assess + 10} size={40} color={INK} dur={30} />
				<HandLine x={96} y={410} text="criteria and evidence" at={K15.evaluate + 30} size={40} color={INK} dur={16} />
			</g>
			<VerbCard4 x={96} y={460} w={1070} h={170} verb="justify" body="support the argument or conclusion with reasons from the case" icon={V('justify').icon} at={-100} lit={[K15.justify, K15.analyse]} size={32} />
			<VerbCard4 x={96} y={660} w={1070} h={170} verb="analyse" body="show the parts, their relationships and what follows" icon={V('analyse').icon} at={-100} lit={[K15.analyse, K15.next]} size={32} />
			<g opacity={vis(f, K15.evaluate)}>
				<VerdictStrip rows={[K15.evaluate, K15.evaluate + 6, K15.evaluate + 12]} miniBox={{x: 1240, y: 160, w: 560}} allLit={[K15.evaluate + 20, K15.justify]} />
				<HandLine x={1240} y={384} text="No verdict without a reason," at={K15.evaluate + 24} size={32} color={TEAL} />
				<HandLine x={1240} y={420} text="no reason without evidence." at={K15.evaluate + 44} size={32} color={TEAL} />
				<GreyTag x={1240} y={120} text="judgement answers" at={K15.evaluate + 10} size={22} />
				<PenArrowBack />
			</g>
			<Chip x={96} y={880} text="Next: calculation answers that get full marks" at={K15.next} size={44} color={TEAL} />
			<g opacity={prog(f, K15.next + 14, 12)}>
				<rect x={1190} y={884} width={250} height={64} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
				<T x={1315} y={928} text="n = c × V" size={32} weight={700} color={INK} anchor="middle" />
			</g>
			{void K15.so}
		</Overlay>
	);
};
/** Thin bracket line linking the strip to the assess and evaluate cards only. */
const PenArrowBack: React.FC = () => <line x1={1180} x2={1228} y1={215} y2={215} stroke={AMBER} strokeWidth={4} strokeDasharray="6 6" />;

// ---------- 16. Key notes ----------
const NOTES = [
	'Analyse: break into parts, connect them, work out implications. Assess: judge value, quality, outcomes, results or size. Evaluate: judge against criteria, or determine value. Justify: give support for an argument or conclusion (NESA glossary, paraphrased).',
	'An assess or evaluate answer has three parts: the verdict, the criteria you judge by, and evidence from the question for each. Finish with the verdict, linked to your reasons.',
	'Evaluate: judge against criteria; weighing strengths against limitations is the safe habit (HSCScience tip). Assess: say how much or how good, and support it. Justify: support the argument or conclusion with reasons from the case. Analyse: show the parts, their relationships and what follows.',
	'A verdict on its own earns little, and reasons without a verdict can miss the top marks. Give both.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="No verdict without a reason, no reason without evidence." tag="for assess and evaluate answers" size={29} aidTop={640} />;
