// M6 B01 scenes 12a to 14: two unseen worded exam items (rifampicin evaluate; island lizard classification), each
// kept whole on screen through "Pause here to answer." and its 10 s countdown, brief feedback with the givens
// underlined as they are used and one crossed classic mistake, the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, ModelLine, Overlay, PlateB, Sx, prog} from '../bio-m5-b13/shared';
import {NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {S, hold} from './common';
import {PLATES} from './assets';
import {LOCAL} from './local-assets';
import {kf} from '../chem-m5-c03/common';
import {AMBER, AMBER_INK, AlleleRing, AnsTable, Bact, BaseTag, CardBox, CellIcon, CurveArrow, INK, INK_SOFT, Lbl, PoolBasin, SlimStrand, rungX, vis, wForH} from './parts';

const QX = 140, QW = 1640;
/** "Pause here to answer." with the 10 s countdown ring. */
const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1000, cx = 1680, cy = 830}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={52} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};

// ---------- 12a. Attempt one (rifampicin) ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: "A patient's infection contains", before: 'Before treatment', after: 'After five days', claims: 'A student claims', evaluate: 'Evaluate this claim', pause: 'Pause here to answer'});
type T1 = {a: number; b: number; c: number; d: number; e: number};
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([
	{text: "A patient's infection contains about 10¹⁰ (ten billion) Staphylococcus aureus bacteria.", at: t.a},
	{text: 'Before treatment, about 1 in every 10⁸ (one hundred million) of them carries an allele for rifampicin resistance.', at: t.b},
	{text: 'After five days of treatment with rifampicin alone, most surviving bacteria carry this allele.', at: t.c},
	{text: 'A student claims: ‘The rifampicin caused the bacteria to mutate so they could survive.’', at: t.d, para: true},
	{text: 'Evaluate this claim. (4 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], marks);
const Question1: React.FC<{t: T1; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<CardBox x={100} y={190} w={1720} h={400} at={t.a - 6} />
		<QText q={Q1(t, marks)} x={QX} y={250} w={QW} size={38} card={false} />
	</>
);
/** The givens drawn as they are read: a crowd of painted bacteria, one carrying the resistance allele (amber ring). */
const BUG_X = [1140, 1300, 1460], BUG_Y = [705, 772, 839, 906];
const BugCrowd: React.FC<{at: number; ringAt: number; o?: number}> = ({at, ringAt, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{BUG_Y.map((y, r) => BUG_X.map((x, c) => {
				const i = r * 3 + c;
				const res = i === 7;
				return <Bact key={i} cx={x + (r % 2 ? 26 : 0)} cy={y} w={136} o={prog(f, at + i * 2, 12)} ring={res ? 'new' : undefined} ringO={prog(f, ringAt, 12)} ringGlow={res ? prog(f, ringAt, 12) : 0} glow={res ? 0.8 * prog(f, ringAt, 12) : 0} />;
			}))}
		</g>
	);
};
export const SceneAttempt: React.FC = () => (
	<>
		<Heading text="Exam question 1" at={KA.two} size={50} />
		<Overlay>
			<Question1 t={{a: KA.first, b: KA.before, c: KA.after, d: KA.claims, e: KA.evaluate}} />
			<Lbl x={1080} y={656} text="about 10¹⁰ bacteria" size={34} color={INK} at={KA.first + 10} />
			<BugCrowd at={KA.first + 14} ringAt={KA.before + 20} />
			<Lbl x={1080} y={985} text="1 in 10⁸ resistant (amber)" size={34} color={AMBER_INK} at={KA.before + 24} />
			<CardBox x={100} y={630} w={940} h={250} at={KA.evaluate + 8} dash="10 7" />
			<Sx x={130} y={674} text="answer" size={26} color={INK_SOFT} weight={700} at={KA.evaluate + 8} />
			<PauseHold id="attempt" at={KA.pause} />
		</Overlay>
	</>
);

// ---------- 12b. Feedback one ----------
const KB = cues(S('feedback-one'), {
	wrong: 'The claim is wrong', before: 'Before treatment', hundred: 'about a hundred bacteria', ten: 'ten billion times', came: 'came first, from random mutation', killed: 'The rifampicin killed',
	survived: 'survived and divided', selected: 'Rifampicin selected the allele', didnt: "It didn't create it", saying: 'Saying the bacteria mutated', mistake: 'the classic mistake',
});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, e: -100};
qCheck(Q1(ALL1).blocks, [{phrase: '10¹⁰ (ten billion)', at: 0}, {phrase: '1 in every 10⁸ (one hundred million)', at: 0}, {phrase: 'treatment with rifampicin alone', at: 0}, {phrase: 'most surviving bacteria carry this allele', at: 0}, {phrase: 'caused the bacteria to mutate', at: 0}]);
export const SceneFeedbackOne: React.FC = () => (
	<>
		<Heading text="The claim is wrong" at={KB.wrong} size={50} />
		<Overlay>
			<Question1 t={ALL1} marks={[
				{phrase: 'Before treatment', at: KB.before},
				{phrase: '10¹⁰ (ten billion)', at: KB.ten},
				{phrase: '1 in every 10⁸ (one hundred million)', at: KB.ten + 14},
				{phrase: 'treatment with rifampicin alone', at: KB.killed},
				{phrase: 'most surviving bacteria carry this allele', at: KB.survived},
				{phrase: 'caused the bacteria to mutate', at: KB.saying, color: '#8d949b'},
			]} />
			<Sx x={140} y={724} text="10^{10} × 1/10^{8} = about 100 resistant bacteria before rifampicin" size={36} color={INK} weight={700} at={KB.ten + 20} />
			<ModelLine x={170} y={786} text="the allele came first, from random mutation, not caused by the drug" at={KB.came} size={32} />
			<ModelLine x={170} y={842} text="rifampicin killed susceptible cells; resistant cells survived, divided and passed the allele on" at={KB.killed + 10} size={32} />
			<ModelLine x={170} y={898} text="claim incorrect: rifampicin selected the allele; it did not cause the mutation" at={KB.selected} size={32} color={AMBER_INK} />
			<MistakeChip x={140} y={950} text="bacteria mutate because they need to" at={KB.saying} cross={KB.mistake} size={30} />
			{void KB.hundred}{void KB.didnt}{void KB.survived}
		</Overlay>
	</>
);

// ---------- 12c. Attempt two (island lizards) ----------
const KC = cues(S('attempt-two'), {second: 'Second', pop: 'A population of lizards', three: 'Three events happen', one: 'One a base change', two: 'Two an offspring', threeE: 'Three the same kind', each: 'For each event', pause: 'Pause here to answer'});
type T2 = {a: number; b: number; c: number; d: number; e: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'A population of lizards lives on an island. Three events occur.', at: t.a},
	{text: '(i) A base change in a cell that will make sperm produces a version of a scale-colour gene never recorded in the species.', at: t.b, para: true},
	{text: '(ii) An offspring has a combination of existing alleles not seen in either parent.', at: t.c, para: true},
	{text: '(iii) The same kind of base change occurs in a skin cell of one lizard.', at: t.d, para: true},
	{text: 'For each event, state whether it can add a new allele to the gene pool of the next generation, and name the process involved. (3 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], marks);
const COLS2 = [{w: 130, head: 'event'}, {w: 380, head: 'can add a new allele?'}, {w: 890, head: 'process'}];
const ROWS2 = [
	['(i)', 'yes', 'mutation in the germ line (heritable)'],
	['(ii)', 'no', 'meiosis and fertilisation: reshuffled existing alleles'],
	['(iii)', 'no', 'somatic (body cell) mutation: this lizard only'],
];
const Question2: React.FC<{t: T2; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<CardBox x={100} y={180} w={1720} h={440} at={t.a - 6} />
		<QText q={Q2(t, marks)} x={QX} y={232} w={QW} size={33} card={false} />
	</>
);
/** The island lizard, then each event drawn as it is read; the events clear for the answer table and the lizard parks top right. */
const LizardEvents: React.FC = () => {
	const f = useCurrentFrame();
	const park = KC.each + 6, done = KC.each + 22;
	const lx = kf(f, [[park, 330], [done, 1690]]), ly = kf(f, [[park, 800], [done, 672]]), lw = kf(f, [[park, 440], [done, 240]]);
	const ev = (at: number) => vis(f, at, KC.each + 4, 12);
	return (
		<>
			<PlateB p={LOCAL.lizard} cx={lx} cy={ly} w={lw} o={prog(f, KC.pop + 6, 14)} />
			<Lbl x={330} y={900} text="island lizards" size={36} color={INK} anchor="middle" at={KC.pop + 12} out={KC.each + 2} />
			<g opacity={ev(KC.one + 6)}>
				<PlateB p={LOCAL.sperm} cx={860} cy={770} w={300} />
				<AlleleRing x={1010} y={730} r={18} kind="new" glow={0.8} />
				<Sx x={860} y={870} text="(i) sperm-making cell" size={34} color={INK} anchor="middle" hand />
				<Sx x={860} y={912} text="new base change" size={30} color={AMBER_INK} anchor="middle" hand />
			</g>
			<g opacity={ev(KC.two + 6)}>
				<AlleleRing x={1170} y={760} r={20} kind="a" />
				<AlleleRing x={1230} y={760} r={20} kind="b" />
				<CurveArrow a={[1262, 760]} b={[1312, 760]} at={KC.two + 10} bow={0} color={INK_SOFT} width={4} />
				<AlleleRing x={1345} y={760} r={20} kind="b" />
				<AlleleRing x={1395} y={760} r={20} kind="a" />
				<Sx x={1280} y={870} text="(ii) offspring" size={34} color={INK} anchor="middle" hand />
				<Sx x={1280} y={912} text="new mix, old alleles" size={30} color={INK_SOFT} anchor="middle" hand />
			</g>
			<g opacity={ev(KC.threeE + 6)}>
				<CellIcon x={1640} y={765} r={50} />
				<Sx x={1640} y={870} text="(iii) skin cell" size={34} color={INK} anchor="middle" hand />
				<Sx x={1640} y={912} text="same base change" size={30} color={INK_SOFT} anchor="middle" hand />
			</g>
		</>
	);
};
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<Question2 t={{a: KC.pop, b: KC.one, c: KC.two, d: KC.threeE, e: KC.each}} />
			<LizardEvents />
			<AnsTable x={140} y={650} cols={COLS2} rows={ROWS2} at={KC.each + 20} size={32} rowH={60} />
			<PauseHold id="attempt-two" at={KC.pause} y={1010} cy={790} />
			{void KC.three}
		</Overlay>
	</>
);

// ---------- 12d. Feedback two ----------
const KD = cues(S('feedback-two'), {
	e1: 'Event one yes', cell: 'a mutation in a cell that makes sperm', inherit: 'offspring can inherit the new allele', e2: 'Event two no', mei: 'Meiosis and fertilisation only reshuffled', e3: 'Event three no',
	skin: 'A skin cell mutation', passed: "it isn't passed on", ifs: 'If you said every mutation', check: 'check which cell',
});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, e: -100};
qCheck(Q2(ALL2).blocks, [{phrase: 'a cell that will make sperm', at: 0}, {phrase: 'never recorded in the species', at: 0}, {phrase: 'combination of existing alleles', at: 0}, {phrase: 'skin cell', at: 0}]);
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const ha = [KD.e1, KD.e2, KD.e3], hb = [KD.e2, KD.e3, KD.ifs];
	return (
	<>
		<Heading text="Which cell, and is the allele new?" at={4} size={50} />
		<Overlay>
			<Question2 t={ALL2} marks={[
				{phrase: 'a cell that will make sperm', at: KD.cell},
				{phrase: 'never recorded in the species', at: KD.inherit},
				{phrase: 'combination of existing alleles', at: KD.mei},
				{phrase: 'skin cell', at: KD.skin},
			]} />
			<AnsTable x={140} y={650} cols={COLS2} rows={ROWS2} at={-100} size={32} rowH={60} fillAt={[KD.e1 + 10, KD.e2 + 10, KD.e3 + 10]} hot={r => prog(f, ha[r], 10) * (1 - prog(f, hb[r], 10))} />
			<MistakeChip x={140} y={920} text="every mutation enters the gene pool" at={KD.ifs} cross={KD.check} size={32} />
			<Lbl x={860} y={962} text="check which cell it's in" size={40} color={AMBER_INK} at={KD.check + 8} />
			{void KD.passed}
		</Overlay>
	</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question asks', trace: 'trace it in order', mut: 'A mutation changes the base sequence', passed: "It's passed on", division: 'by cell division in bacteria', eggs: 'through eggs and sperm in animals', then: 'Then selection, chance and gene flow', next: "Next you'll see how mutagens"});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [110, 700, 1290], PY = 250, PW = 520, PH = 420;
	const steps = [
		{at: KE.mut, t: '1. mutation', l: ['base sequence changes', 'in one individual']},
		{at: KE.passed, t: '2. passed on', l: ['division (bacteria)', 'eggs and sperm (animals)']},
		{at: KE.then, t: '3. frequency changes', l: ['selection, chance,', 'gene flow']},
	];
	const flyW = 160;
	// All three step cards wait at 32% from the opening words and light on their cues.
	const lit = (at: number) => 0.32 * prog(f, 0, 14) + 0.68 * prog(f, at, 14);
	return (
		<>
			<Heading text="Trace a new allele in order" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => (
					<g key={i} opacity={lit(s.at)}>
						<CardBox x={PX[i]} y={PY} w={PW} h={PH} at={-100} stroke={AMBER} sw={3.5} />
						<Sx x={PX[i] + 34} y={PY + 70} text={s.t} size={52} color={INK} hand />
						{s.l.map((l, k) => <Sx key={k} x={PX[i] + 34} y={PY + 330 + k * 40} text={l} size={30} color={INK} weight={600} />)}
						{i < 2 ? <CurveArrow a={[PX[i] + PW + 10, PY + PH / 2]} b={[PX[i + 1] - 10, PY + PH / 2]} at={steps[i + 1].at - 4} bow={0} color={AMBER_INK} width={6} /> : null}
					</g>
				))}
				<g opacity={lit(KE.mut)}>
					<SlimStrand x={PX[0] + 50} y={PY + 170} n={14} pitch={31} gap={44} band={{i0: 3, i1: 11, o: 0.8}} rung={i => (i === 8 ? {color: AMBER, w: 6} : undefined)} />
					<BaseTag x={rungX(PX[0] + 50, 8, 31)} y={PY + 166} text="T" len={8} size={24} />
				</g>
				<g opacity={lit(KE.division)}><Bact cx={PX[1] + 150} cy={PY + 200} w={170} ring="new" r={13} /></g>
				<g opacity={lit(KE.eggs)}><PlateB p={PLATES.flyWhite} cx={PX[1] + 400} cy={PY + 200} w={flyW} /></g>
				<g opacity={lit(KE.then)}>
					<PoolBasin x={PX[2] + 50} y={PY + 160} w={260} h={110} />
					<AlleleRing x={PX[2] + 130} y={PY + 200} r={14} kind="new" />
					<AlleleRing x={PX[2] + 190} y={PY + 200} r={14} kind="a" />
					{[0, 1, 2].map(k => {
						const h = (30 + k * 36) * prog(f, KE.then + 10 + k * 8, 14);
						return <rect key={k} x={PX[2] + 360 + k * 40} y={PY + 270 - h} width={28} height={h} rx={5} fill={k === 2 ? AMBER : '#c9b8a0'} />;
					})}
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={980} y={790} w={840} h={170} at={-100} stroke={AMBER} sw={3.5} />
					<PlateB p={PLATES.uvSkin} cx={1075} cy={875} w={wForH(PLATES.uvSkin, 140)} />
					<Sx x={1170} y={888} text="Next: how mutagens increase DNA damage" size={38} color={INK} hand />
				</g>
				{void KE.trace}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Gene: a DNA section that codes for a product. Allele: one version of a gene.',
	'Gene pool: all the alleles in a population.',
	'Mutation: a change in DNA base sequence. Inside a gene it makes a new allele.',
	'A new allele starts as one copy in one individual (e.g. sickle cell).',
	'Bacteria pass it to both daughter cells; animals only from egg or sperm cells.',
	'Mutation is random, not caused by need (replica plates, 1952).',
	'An antibiotic selects resistance alleles that already exist; their frequency rises.',
	'Meiosis and fertilisation only reshuffle existing alleles; gene flow brings them in.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Mutation makes, meiosis and fertilisation mix, gene flow moves, selection and chance change how common." tag="where new alleles come from, and what happens to them next" size={34} aidTop={800} />
);
