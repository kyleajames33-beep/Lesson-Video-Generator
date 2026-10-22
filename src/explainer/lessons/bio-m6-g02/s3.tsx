// M6 G02 scenes 11 to 17: question 3 (kidneys from gene-edited pigs, assess, benefits and ethical issues): the
// protected attempt; sizing the benefit and the evidence (b19's first two tests, the b11 evidence ladder); who carries
// each risk (pigs, early patients, other people; objections in principle); the conditional verdict; the crossed
// classic mistake. Then the decision board with the handoff to b20, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, Heading, INK, KeyNotes, Overlay, PenArrow, Plate, QuestionCard, T, TEAL,
	answerGeom, cardGeom, lerp, plateW, prog, smooth, vis,
} from '../skills-shared';
import type {Ann, ARow, AnsSpec, CardSpec} from '../skills-shared';
import {Icon4, miniRowY} from '../skills-s04/pieces';
import {PL, Q3, STRIP, SX, Strip, Tags, boxUnder, done, hold, q3Spec, sc} from './common';
import {BadgeIn} from './s1';
import {BedOutline, CrossedGrey, DotRing, Ladder4, TestChip, ViralCopyStrip} from './parts';

/** Kidney and pig plates in the card's right slot (card coordinates). */
const PigSlot: React.FC<{spec: CardSpec; t: [number, number]}> = ({spec, t}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const kh = 110, kw = plateW(PL.kidney, kh);
	const ph = 100, pw = plateW(PL.pig, ph);
	return (
		<g>
			<g opacity={prog(f, t[0], 14)}>
				<Plate p={PL.kidney} x={g.slot.x + (g.slot.w - kw) / 2} y={g.slot.y + 10} h={kh} />
				<T x={g.slot.x + g.slot.w / 2} y={g.slot.y + 146} text="kidney" size={18} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={prog(f, t[1], 14)}><Plate p={PL.pig} x={g.slot.x + (g.slot.w - pw) / 2} y={g.slot.y + 180} h={ph} /></g>
		</g>
	);
};

// ---------- 4a. Question 3 ----------
const KQ = cues(sc('q3-question'), {q: 'Question three', thousands: 'Thousands of people', sci: 'Scientists have gene-edited', inact: 'inactivated copies', since: 'Since 2024,', nine: 'nine months', assess: 'Assess the use', refer: 'Refer to benefits', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	const spec = q3Spec([KQ.thousands, KQ.sci, KQ.since, KQ.assess], KQ.assess + 10);
	const box: AnsSpec = boxUnder(Q3, 1, 5, 44, 28);
	return (
		<Overlay>
			<Strip hold={h} />
			<QuestionCard spec={spec} at={KQ.q}><PigSlot spec={spec} t={[KQ.thousands, KQ.sci]} /></QuestionCard>
			<AnswerBox spec={box} at={KQ.assess + 20} counter={{total: 6, label: true}} />
			<DrillCountdown hold={h} at={KQ.pause} x={SX} y={box.y + 60} cx={SX + 245} cy={box.y + 180} />
			{void KQ.inact}{void KQ.nine}{void KQ.refer}
		</Overlay>
	);
};

// ---------- shared walkthrough geometry ----------
const S3 = 0.66;
const box3 = (): AnsSpec => boxUnder(Q3, S3, 11, 40, 26);
const Q3_TEXT = [
	'Benefit: could supply kidneys for the many people waiting, a large benefit if it works.',
	'Evidence: few patients; kidneys worked for months, not years, so the benefit is not yet shown.',
	'Animal welfare: pigs are bred, confined and killed for organs.',
	'Patients: high risk in early use, so informed, voluntary consent is essential.',
	'Others: a pig virus could spread beyond the patient; reduced by inactivating viral copies, not removed.',
	'Overall, justified to a moderate extent as regulated trials,',
	'provided consent, animal welfare and infection monitoring are in place; not yet a replacement for human donors.',
];
const Q3Card: React.FC<{ann?: Ann[]; s?: number | ((f: number) => number); badgeAt?: number}> = ({ann = [], s = S3, badgeAt = -100}) => (
	<QuestionCard spec={Q3} at={-100} s={s} ann={[{kind: 'verb', phrase: 'Assess', at: -100}, ...ann]}>
		<PigSlot spec={Q3} t={[-100, -100]} />
		<BadgeIn spec={Q3} text="Ethics" at={badgeAt} />
	</QuestionCard>
);
const GIVEN_B = (t: {wait?: number; some?: number; small?: number; nine?: number} = {}): Ann[] => [
	{kind: 'given', phrase: 'wait years', at: t.wait ?? -100}, {kind: 'given', phrase: 'some die while waiting.', at: t.some ?? -100},
	{kind: 'given', phrase: 'a small number of patients', at: t.small ?? -100}, {kind: 'given', phrase: 'worked for about nine months before it was removed;', at: t.nine ?? -100},
];

// ---------- 4b. Size the benefit, then the evidence ----------
const KB = cues(sc('q3-benefit'), {assess: 'Assess means', size: 'size the benefit', better: 'Better than what?', waiting: 'waiting years', some: 'some people', pig: 'A pig could', needed: "when it's needed", shown: 'Shown how?', few: 'A few patients', months: 'months, not years', so: 'So the benefit', works: 'if it works', yet: "isn't shown yet"});
export const Q3_ROWS_A = (): ARow[] => [
	{text: Q3_TEXT[0], at: KB.pig, dur: KB.shown - KB.pig - 10, tick: KB.shown},
	{text: Q3_TEXT[1], at: KB.so - 10, dur: KB.yet - KB.so + 10, tick: KB.yet + 24},
];
export const SceneQ3Benefit: React.FC = () => {
	const f = useCurrentFrame();
	const box = box3();
	const rows = Q3_ROWS_A();
	const g = answerGeom(box, rows);
	const ph = 60, pw = plateW(PL.pig, ph);
	return (
		<Overlay>
			<Strip lit={[{row: 0, from: 0, to: KB.better}, {row: 1, from: KB.better, to: KB.pig}, {row: 2, from: KB.pig}]} />
			<Q3Card s={fr => lerp(1, S3, smooth(prog(fr, 0, 24)))} badgeAt={10}
				ann={[{kind: 'verb', phrase: 'Assess', at: 4}, {kind: 'marks', at: 14}, ...GIVEN_B({wait: KB.waiting, some: KB.some, small: KB.few, nine: KB.months})]} />
			<AnswerBox spec={box} at={20} counter={{total: 6, label: true}} rows={rows} dimRows={[{rows: [0], at: KB.so - 10}]} />
			<Tags g={g} tags={[{row: 0, role: 'criterion', at: KB.pig}, {row: 1, role: 'evidence', at: KB.so}]} />
			<Chip x={SX} y={350} text="how far?" at={6} out={KB.better} size={30} color={AMBER_INK} fill="#fff8e6" />
			<TestChip k={0} x={SX} y={410} at={KB.size} fill="waiting list: large need" dot="full" fillAt={KB.waiting + 10} />
			<TestChip k={1} x={SX} y={526} at={KB.size + 8} fill="few patients, months" dot="half" fillAt={KB.months} />
			<TestChip k={2} x={SX} y={642} at={KB.size + 16} />
			<GreyTag x={SX + 370} y={350} text="b19" at={KB.size + 10} size={20} />
			<g opacity={vis(f, KB.needed - 6, KB.shown, 12)}>
				<Plate p={PL.pig} x={SX + 160} y={740} h={ph} />
				<path d={`M${SX + 170 + pw},${770} L${SX + 330},${770}`} stroke={AMBER} strokeWidth={6} strokeLinecap="round" strokeDasharray={`${200 * prog(f, KB.needed, 20)} 400`} />
				<Plate p={PL.kidney} x={SX + 340} y={740} h={ph} />
			</g>
			<Ladder4 x={SX + 30} y={940} lit={f < KB.months ? -1 : 2} o={prog(f, KB.months - 6, 14)} notYet={prog(f, KB.yet, 10)} />
			<GreyTag x={SX} y={720} text="b11: how far has the evidence got?" at={KB.months + 10} out={KB.yet} size={20} />
			<HandLine x={SX} y={1010} text="promising is not proven" at={KB.yet + 6} size={34} color={GREY_INK} />
			<GreyTag x={SX + 340} y={986} text="b11" at={KB.yet + 16} size={20} />
			{void KB.assess}{void KB.works}{void STRIP}
		</Overlay>
	);
};

// ---------- 4c. Who carries each risk ----------
const KE = cues(sc('q3-ethics'), {now: 'Now the ethical', who: 'who carries each one', pigs: 'pigs are bred', patients: 'Early patients', agree: 'agree freely', other: 'other people', which: 'which is why', principle: 'in principle', settle: "can't settle that"});
export const Q3_ROWS_B = (): ARow[] => [
	{text: Q3_TEXT[2], at: KE.pigs, dur: KE.patients - KE.pigs - 20, tick: KE.patients - 10},
	{text: Q3_TEXT[3], at: KE.agree - 20, dur: 70, tick: KE.other - 20},
	{text: Q3_TEXT[4], at: KE.which - 10, dur: KE.principle - KE.which - 10, tick: KE.principle},
];
export const SceneQ3Ethics: React.FC = () => {
	const f = useCurrentFrame();
	const box = box3();
	const rows = [...done(Q3_ROWS_A()), ...Q3_ROWS_B()];
	const g = answerGeom(box, rows);
	const ph = 70;
	return (
		<Overlay>
			<Strip lit={[{row: 1, from: 0, to: KE.pigs}, {row: 2, from: KE.pigs}]} />
			<Q3Card ann={[...GIVEN_B(), {kind: 'given', phrase: 'raised in sealed, disease-controlled facilities.', at: KE.pigs}, {kind: 'given', phrase: 'copies of a virus built into the pig genome were inactivated.', at: KE.other}]} />
			<AnswerBox spec={box} at={-100} counter={{total: 6, label: true}} rows={rows} dimRows={[{rows: [0, 1], at: -100}, {rows: [2], at: KE.agree - 20}, {rows: [3], at: KE.which - 10}]} />
			<Tags g={g} tags={[{row: 0, role: 'criterion', at: -100}, {row: 1, role: 'evidence', at: -100}, {row: 2, role: 'criterion', at: KE.pigs}, {row: 3, role: 'criterion', at: KE.agree - 20}, {row: 4, role: 'criterion + evidence', at: KE.which - 10}]} />
			<T x={SX} y={360} text="who carries each risk?" size={30} color={INK} hand weight={700} o={prog(f, KE.who, 12)} />
			<g opacity={prog(f, KE.pigs - 4, 12)}>
				<Plate p={PL.pig} x={SX + 10} y={400} h={ph} />
				<T x={SX + 75} y={500} text="pigs" size={22} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={prog(f, KE.patients, 12)}>
				<BedOutline x={SX + 250} y={436} s={1.1} />
				<T x={SX + 250} y={500} text="early patients" size={22} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={prog(f, KE.other, 12)}>
				<DotRing x={SX + 420} y={436} r={30} />
				<T x={SX + 420} y={500} text="others" size={22} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<ViralCopyStrip x={SX + 10} y={600} w={440} at={KE.other + 6} cross={KE.which + 10} />
			<GreyTag x={SX} y={630} text="porcine endogenous retroviruses" at={KE.other + 16} size={20} />
			<Chip x={SX} y={720} text="objection in principle: evidence can't settle it" at={KE.principle} size={28} color={GREY_INK} fill="#eceae4" maxW={480} />
			<GreyTag x={SX} y={830} text="b10" at={KE.principle + 10} size={20} />
			{void KE.now}{void KE.settle}
		</Overlay>
	);
};

// ---------- 4d. Close the loop ----------
const KV = cues(sc('q3-verdict'), {gene: 'Gene-edited pig kidneys', moderate: 'moderate extent', provided: 'provided patients', they: "They aren't yet"});
export const Q3_ROWS_C = (): ARow[] => [
	{text: Q3_TEXT[5], at: KV.gene + 10, dur: KV.provided - KV.gene - 30},
	{text: Q3_TEXT[6], at: KV.provided, dur: KV.they - KV.provided + 60, tick: KV.they + 66},
];
const Q3_ALL = (): ARow[] => [...done(Q3_ROWS_A()), ...done(Q3_ROWS_B()), ...Q3_ROWS_C()];
export const SceneQ3Verdict: React.FC = () => {
	const box = box3();
	const rows = Q3_ALL();
	const g = answerGeom(box, rows);
	const loop = KV.they + 76;
	return (
		<Overlay>
			<Strip lit={[{row: 3, from: 0, to: loop}]} allLit={[loop + 10, loop + 60]} />
			<Q3Card ann={GIVEN_B()} />
			<AnswerBox spec={box} at={-100} counter={{total: 6, label: true}} rows={rows} dimRows={[{rows: [0, 1, 2, 3, 4], at: -100}, {rows: [5], at: KV.provided}]} />
			<Tags g={g} tags={[{row: 0, role: 'criterion', at: -100}, {row: 1, role: 'evidence', at: -100}, {row: 2, role: 'criterion', at: -100}, {row: 3, role: 'criterion', at: -100}, {row: 4, role: 'criterion + evidence', at: -100}, {row: 5, role: 'verdict', at: KV.gene + 10}, {row: 6, role: 'condition', at: KV.provided + 6}]} />
			<PenArrow a={[box.x - 6, g.base(g.rows[5].first) - 16]} b={[STRIP.x + STRIP.w + 4, miniRowY(STRIP, 3)]} at={loop} color={AMBER_INK} bow={40} />
			{void KV.moderate}
		</Overlay>
	);
};

// ---------- 4e. The classic mistake ----------
const KM = cues(sc('q3-mistake'), {classic: 'The classic mistake', mistake: 'mistake is', doesnt: "It doesn't show", long: 'how long,', often: 'how often,', safely: 'how safely'});
export const SceneQ3Mistake: React.FC = () => {
	const box = box3();
	return (
		<Overlay>
			<Strip />
			<Q3Card ann={GIVEN_B()} />
			<AnswerBox spec={box} at={-100} counter={{total: 6, label: true}} rows={Q3_ALL().map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000}))} o={0.45} />
			<MistakeChipWrap x={SX} y={380} />
			<Chip x={SX} y={600} text="how long?" at={KM.long} size={30} color={GREY_INK} fill="#eceae4" />
			<Chip x={SX + 180} y={600} text="how often?" at={KM.often} size={30} color={GREY_INK} fill="#eceae4" />
			<Chip x={SX} y={680} text="how safely?" at={KM.safely} size={30} color={GREY_INK} fill="#eceae4" />
			{void KM.doesnt}
		</Overlay>
	);
};
const MistakeChipWrap: React.FC<{x: number; y: number}> = ({x, y}) => <CrossedGrey x={x} y={y} text="a kidney worked for 9 months, so pig kidneys solve the shortage" at={2} cross={KM.mistake} size={30} maxW={480} />;

// ---------- 5. Decision board ----------
const KD = cues(sc('decision-board'), {any: 'For any biotechnology', mech: 'one mechanism link', judge: 'Judge it against', evidence: 'with evidence from', level: 'biodiversity level', risk: 'who carries each risk', verdict: 'finish with a verdict', condition: 'a condition', next: 'Next, why'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 96, W0 = 460, W1 = 600, W2 = 600, Y0 = 210, RH = 150;
	const cols = [X0, X0 + W0 + 20, X0 + W0 + W1 + 40];
	const lit = (a: number, b?: number) => vis(f, a, b, 10);
	const Cell: React.FC<{c: number; r: number; span?: number; lines: string[]; at: number; badge?: string; icon?: 'scale' | 'ruler' | 'lens' | 'parts'; glow?: number}> = ({c, r, span = 1, lines, at, badge, icon, glow = 0}) => {
		const o = prog(f, at, 12);
		if (o <= 0.01) return null;
		const w = span === 1 ? [W0, W1, W2][c] : span === 2 ? W1 + W2 + 20 : W0 + W1 + W2 + 40;
		const y = Y0 + 70 + r * (RH + 16);
		return (
			<g opacity={o}>
				<rect x={cols[c]} y={y} width={w} height={RH} rx={18} fill={glow > 0.5 ? '#fff8e6' : CARD} stroke={glow > 0.5 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={glow > 0.5 ? 3.5 : 2.5} />
				{icon ? <Icon4 k={icon} x={cols[c] + 46} y={y + RH / 2} s={1.1} /> : null}
				{lines.map((t, i) => <T key={i} x={cols[c] + (icon ? 92 : 26)} y={y + RH / 2 + 12 - (lines.length - 1) * 20 + i * 40} text={t} size={34} color={INK} hand weight={700} />)}
				{badge ? <g><rect x={cols[c] + w - 150} y={y + RH - 46} width={130} height={34} rx={17} fill="#1f6fb2" /><T x={cols[c] + w - 85} y={y + RH - 22} text={badge} size={20} color="#fffdf8" weight={700} anchor="middle" /></g> : null}
			</g>
		);
	};
	return (
		<>
			<Heading text="For any biotechnology question" at={KD.any} size={56} />
			<Overlay>
				{['What to do', 'Biodiversity questions', 'Ethics questions'].map((t, i) => <T key={t} x={cols[i] + 10} y={Y0 + 40} text={t} size={30} color={GREY_INK} weight={700} o={prog(f, KD.any + 10 + i * 6, 12)} />)}
				<Cell c={0} r={0} lines={['one mechanism link']} at={KD.mech} icon="parts" glow={lit(KD.mech, KD.judge)} />
				<Cell c={1} r={0} span={2} lines={['the clone matches its donor']} at={KD.mech + 10} badge="Q2" glow={lit(KD.mech, KD.judge)} />
				<Cell c={0} r={1} lines={['criteria + evidence', 'from the question']} at={KD.judge} icon="ruler" glow={lit(KD.judge, KD.verdict)} />
				<Cell c={1} r={1} lines={['name the level', 'and the baseline']} at={KD.level - 4} badge="Q1" glow={lit(KD.level, KD.verdict)} />
				<Cell c={2} r={1} lines={['name who carries', 'each risk']} at={KD.risk - 4} badge="Q3" glow={lit(KD.risk, KD.verdict)} />
				<Cell c={0} r={2} lines={['verdict + condition']} at={KD.verdict} icon="scale" glow={lit(KD.verdict, KD.next)} />
				<Cell c={1} r={2} span={2} lines={['to a ... extent, provided that ...']} at={KD.condition} badge="Q1 to Q3" glow={lit(KD.condition, KD.next)} />
				<HandLine x={X0} y={800} text="No verdict without a reason, no reason without evidence." at={KD.condition + 20} size={36} color={TEAL} />
				<GreyTag x={1180} y={772} text="b13: Verdict, provided that ..." at={KD.condition + 30} size={22} />
				<g opacity={prog(f, KD.next, 14)}>
					<rect x={760} y={860} width={1060} height={140} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Plate p={PL.vault} x={790} y={876} h={108} />
					<T x={950} y={918} text="Next: why a technology that works can still" size={36} color={INK} hand weight={700} />
					<T x={950} y={962} text="have little lasting effect" size={36} color={INK} hand weight={700} />
				</g>
				{void KD.evidence}{void GREY}
			</Overlay>
		</>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	'Plan any biotechnology judgement: one mechanism link (what the technology does), criteria (often given in the question), evidence from the stimulus for each, then a verdict with "to a ... extent" and "provided that ...". Assess: how far, which way. Evaluate: against criteria.',
	"Biodiversity: name the level (genetic, species, ecosystem) and the baseline in the question. Link the technology to biodiversity, not just to the organism or the harvest. A crop can raise species diversity in fields while narrowing the crop's genetic diversity. Rising pest resistance is a change in allele frequency, not lost diversity, but it can bring sprays back. Do not judge a level the data do not cover.",
	'Cloning adds genetic diversity only when the donors carry alleles the living population lacks. Count the donors, not the clones. Mitochondrial DNA comes mainly from the egg. Weigh low success and surrogate welfare against alternatives such as habitat protection, which cannot restore missing alleles.',
	'Ethics: say who carries each risk (animals, patients, other people), whether consent is possible, and which objections are about principle, which evidence cannot settle.',
	'Early results in a few patients show something can work, not that it is proven.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="No verdict without a reason, no reason without evidence." tag="for assess and evaluate answers about biotechnology" size={27} aidTop={800} />;
