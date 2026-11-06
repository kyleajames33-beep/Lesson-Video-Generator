// M6 G02 scenes 11 to 17: question 3 (kidneys from gene-edited pigs, assess, benefits and ethical issues): the
// protected attempt; sizing the benefit and the evidence (b19's first two tests, the b11 evidence ladder); who carries
// each risk (pigs, early patients, other people; objections in principle); the conditional verdict; the crossed
// classic mistake. Then the decision board with the handoff to b20, and the key notes. Quality fix (6 Nov): full-width
// 32 px card (only the items each step needs), no side rail, the answer staged one part at a time (big.tsx), side
// visuals at x 1320 with 26 to 36 px labels, short key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, Heading, INK, KeyNotes, Overlay, Plate, QuestionCard, T, TEAL,
	cardGeom, plateW, prog, vis,
} from '../skills-shared';
import type {Ann, AnsSpec, CardSpec} from '../skills-shared';
import {Icon4} from '../skills-s04/pieces';
import {PL, Q3, hold, q3Spec, sc} from './common';
import {BadgeIn, prior} from './s1';
import {BedOutline, CrossedGrey, DotRing, ViralCopyStrip} from './parts';
import {CW, CX, LadderL, PANEL_W, SX2, StagedAnswer, TestChipL, cardBottom, sub} from './big';
import type {SRow} from './big';

/** Kidney and pig plates in the card's right slot (card coordinates); `arrow` draws a pig-to-kidney supply arrow. */
const PigSlot: React.FC<{spec: CardSpec; kidney?: number; pig?: number; arrow?: [number, number]}> = ({spec, kidney, pig, arrow}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const kh = 140, kw = plateW(PL.kidney, kh);
	const ph = 120, pw = plateW(PL.pig, ph);
	const py = kidney === undefined ? g.slot.y + 10 : g.slot.y + kh + 46;
	return (
		<g>
			{kidney !== undefined ? (
				<g opacity={prog(f, kidney, 14)}>
					<Plate p={PL.kidney} x={g.slot.x + (g.slot.w - kw) / 2} y={g.slot.y + 4} h={kh} />
					<T x={g.slot.x + g.slot.w / 2} y={g.slot.y + kh + 32} text="kidney" size={26} color={GREY_INK} weight={700} anchor="middle" />
				</g>
			) : null}
			{pig !== undefined ? <g opacity={prog(f, pig, 14)}><Plate p={PL.pig} x={g.slot.x + (g.slot.w - pw) / 2} y={py} h={ph} /></g> : null}
			{arrow ? (
				<g opacity={vis(f, arrow[0], arrow[1], 10)}>
					<path d={`M${g.slot.x + 30},${py + 40} C${g.slot.x - 20},${py - 30} ${g.slot.x - 10},${g.slot.y + 70} ${g.slot.x + 40},${g.slot.y + 60}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" pathLength={1} strokeDasharray={`${prog(f, arrow[0], 20)} 1`} />
				</g>
			) : null}
		</g>
	);
};

// ---------- 4a. Question 3 ----------
const KQ = cues(sc('q3-question'), {q: 'Question three', thousands: 'Thousands of people', sci: 'Scientists have gene-edited', inact: 'inactivated copies', since: 'Since 2024,', nine: 'nine months', assess: 'Assess the use', refer: 'Refer to benefits', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	const spec = q3Spec([KQ.thousands, KQ.sci, KQ.since, KQ.assess], KQ.assess + 10);
	const by = cardBottom(Q3) + 18;
	const box: AnsSpec = {x: CX, y: by, w: PANEL_W, lines: Math.max(2, Math.floor((1056 - by - 66) / 48)), lh: 48, size: 30};
	return (
		<Overlay>
			<QuestionCard spec={spec} at={KQ.q}><PigSlot spec={spec} kidney={KQ.thousands} pig={KQ.sci} /></QuestionCard>
			<AnswerBox spec={box} at={KQ.assess + 20} counter={{total: 6}} />
			<DrillCountdown hold={h} at={KQ.pause} x={SX2} y={by + 52} cx={SX2 + 300} cy={by + 140} r={42} />
			{void KQ.inact}{void KQ.nine}{void KQ.refer}
		</Overlay>
	);
};

// ---------- shared walkthrough geometry ----------
const Q3_TEXT = [
	'Benefit: could supply kidneys for the many people waiting, a large benefit if it works.',
	'Evidence: few patients; kidneys worked for months, not years, so the benefit is not yet shown.',
	'Animal welfare: pigs are bred, confined and killed for organs.',
	'Patients: high risk in early use, so informed, voluntary consent is essential.',
	'Others: a pig virus could spread beyond the patient; reduced by inactivating viral copies, not removed.',
	'Overall, justified to a moderate extent as regulated trials,',
	'provided consent, animal welfare and infection monitoring are in place; not yet a replacement for human donors.',
];
const Q3_SHORT = [
	'Benefit: kidneys for the many waiting',
	'Evidence: few patients, months not years',
	'Pigs: bred, confined, killed',
	'Patients: high risk, so consent',
	'Others: virus risk reduced, not removed',
	'Overall: justified, moderate, as trials',
	'Condition: consent, welfare, monitoring',
];
const Q3B = sub(Q3, [0, 2, 3]);
const Q3E = sub(Q3, [1, 3]);
const Q3V = sub(Q3, [2, 3]);
const VERB: Ann[] = [{kind: 'verb', phrase: 'Assess', at: -100}];

// ---------- 4b. Size the benefit, then the evidence ----------
const KB = cues(sc('q3-benefit'), {assess: 'Assess means', size: 'size the benefit', better: 'Better than what?', waiting: 'waiting years', some: 'some people', pig: 'A pig could', needed: "when it's needed", shown: 'Shown how?', few: 'A few patients', months: 'months, not years', so: 'So the benefit', works: 'if it works', yet: "isn't shown yet"});
export const Q3_ROWS_A = (): SRow[] => [
	{text: Q3_TEXT[0], short: Q3_SHORT[0], at: KB.pig, dur: KB.shown - KB.pig - 10, tick: KB.shown, role: 'criterion'},
	{text: Q3_TEXT[1], short: Q3_SHORT[1], at: KB.so - 10, dur: KB.yet - KB.so + 10, tick: KB.yet + 24, role: 'evidence'},
];
export const SceneQ3Benefit: React.FC = () => {
	const f = useCurrentFrame();
	const py = cardBottom(Q3B) + 20;
	return (
		<Overlay>
			<QuestionCard spec={Q3B} at={-100}
				ann={[{kind: 'verb', phrase: 'Assess', at: 4}, {kind: 'marks', at: 14}, {kind: 'given', phrase: 'wait years', at: KB.waiting}, {kind: 'given', phrase: 'some die while waiting.', at: KB.some},
					{kind: 'given', phrase: 'a small number of patients', at: KB.few}, {kind: 'given', phrase: 'worked for about nine months before it was removed;', at: KB.months}]}>
				<PigSlot spec={Q3B} kidney={-100} pig={-100} arrow={[KB.needed - 6, KB.shown + 30]} />
				<BadgeIn spec={Q3B} text="Ethics" at={10} />
			</QuestionCard>
			<StagedAnswer y={py} rows={Q3_ROWS_A()} total={6} />
			<Chip x={SX2} y={py + 6} text="assess: how far?" at={6} out={KB.size} size={34} color={AMBER_INK} fill="#fff8e6" />
			<TestChipL k={0} x={SX2} y={py + 6} at={KB.size} fill="waiting list: large need" dot="full" fillAt={KB.waiting + 10} />
			<TestChipL k={1} x={SX2} y={py + 130} at={KB.size + 8} fill="few patients, months" dot="half" fillAt={KB.months} />
			<g opacity={1 - prog(f, KB.months - 10, 10)}><TestChipL k={2} x={SX2} y={py + 254} at={KB.size + 16} /></g>
			<LadderL x={SX2 + 30} y={1036} rh={50} lit={f < KB.months ? -1 : 2} o={prog(f, KB.months - 6, 14)} notYet={prog(f, KB.yet, 10)} />
			{void KB.assess}{void KB.works}{void KB.better}
		</Overlay>
	);
};

// ---------- 4c. Who carries each risk ----------
const KE = cues(sc('q3-ethics'), {now: 'Now the ethical', who: 'who carries each one', pigs: 'pigs are bred', patients: 'Early patients', agree: 'agree freely', other: 'other people', which: 'which is why', principle: 'in principle', settle: "can't settle that"});
export const Q3_ROWS_B = (): SRow[] => [
	{text: Q3_TEXT[2], short: Q3_SHORT[2], at: KE.pigs, dur: KE.patients - KE.pigs - 20, tick: KE.patients - 10, role: 'criterion'},
	{text: Q3_TEXT[3], short: Q3_SHORT[3], at: KE.agree - 20, dur: 70, tick: KE.other - 20, role: 'criterion'},
	{text: Q3_TEXT[4], short: Q3_SHORT[4], at: KE.which - 10, dur: KE.principle - KE.which - 10, tick: KE.principle, role: 'criterion + evidence'},
];
export const SceneQ3Ethics: React.FC = () => {
	const f = useCurrentFrame();
	const py = cardBottom(Q3E) + 20;
	const ph = 84;
	return (
		<Overlay>
			<QuestionCard spec={Q3E} at={-100} ann={[...VERB, {kind: 'given', phrase: 'raised in sealed, disease-controlled facilities.', at: KE.pigs}, {kind: 'given', phrase: 'copies of a virus built into the pig genome were inactivated.', at: KE.other}]}>
				<PigSlot spec={Q3E} kidney={-100} pig={-100} />
				<BadgeIn spec={Q3E} text="Ethics" at={-100} />
			</QuestionCard>
			<StagedAnswer y={py} rows={[...prior(Q3_ROWS_A()), ...Q3_ROWS_B()]} total={6} />
			<T x={SX2} y={py + 40} text="who carries each risk?" size={38} color={INK} hand weight={700} o={0.4 * prog(f, 0, 12) + 0.6 * prog(f, KE.who, 12)} />
			<g opacity={0.3 * prog(f, 0, 12) + 0.7 * prog(f, KE.pigs - 4, 12)}>
				<Plate p={PL.pig} x={SX2} y={py + 74} h={ph} />
				<T x={SX2 + 74} y={py + 196} text="pigs" size={28} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={0.3 * prog(f, 0, 12) + 0.7 * prog(f, KE.patients, 12)}>
				<BedOutline x={SX2 + 270} y={py + 120} s={1.35} />
				<T x={SX2 + 270} y={py + 196} text="early patients" size={28} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<g opacity={0.3 * prog(f, 0, 12) + 0.7 * prog(f, KE.other, 12)}>
				<DotRing x={SX2 + 470} y={py + 118} r={36} />
				<T x={SX2 + 470} y={py + 196} text="others" size={28} color={GREY_INK} weight={700} anchor="middle" />
			</g>
			<ViralCopyStrip x={SX2 + 10} y={py + 260} w={510} at={KE.other + 6} cross={KE.which + 10} />
			<GreyTag x={SX2} y={py + 290} text="virus copies in the pig DNA" at={KE.other + 16} size={26} />
			<Chip x={SX2} y={py + 370} text="objection in principle: evidence can't settle it" at={KE.principle} size={32} color={GREY_INK} fill="#eceae4" maxW={540} />
			{void KE.now}{void KE.settle}
		</Overlay>
	);
};

// ---------- 4d. Close the loop ----------
const KV = cues(sc('q3-verdict'), {gene: 'Gene-edited pig kidneys', moderate: 'moderate extent', provided: 'provided patients', they: "They aren't yet"});
export const Q3_ROWS_C = (): SRow[] => [
	{text: Q3_TEXT[5], short: Q3_SHORT[5], at: KV.gene + 10, dur: KV.provided - KV.gene - 30, role: 'verdict'},
	{text: Q3_TEXT[6], short: Q3_SHORT[6], at: KV.provided, dur: KV.they - KV.provided + 60, tick: KV.they + 66, role: 'condition'},
];
const Q3_ALL = (): SRow[] => [...prior(Q3_ROWS_A()), ...prior(Q3_ROWS_B()), ...Q3_ROWS_C()];
export const SceneQ3Verdict: React.FC = () => {
	const py = cardBottom(Q3V) + 20;
	const loop = KV.they + 76;
	return (
		<Overlay>
			<QuestionCard spec={Q3V} at={-100} ann={[...VERB, {kind: 'given', phrase: 'a small number of patients', at: -100}, {kind: 'given', phrase: 'worked for about nine months before it was removed;', at: -100}]}>
				<PigSlot spec={Q3V} kidney={-100} />
				<BadgeIn spec={Q3V} text="Ethics" at={-100} />
			</QuestionCard>
			<StagedAnswer y={py} w={CW} rows={Q3_ALL()} total={6} loop={{from: 6, to: 5, at: loop}} />
			{void KV.moderate}
		</Overlay>
	);
};

// ---------- 4e. The classic mistake ----------
const KM = cues(sc('q3-mistake'), {classic: 'The classic mistake', mistake: 'mistake is', doesnt: "It doesn't show", long: 'how long,', often: 'how often,', safely: 'how safely'});
export const SceneQ3Mistake: React.FC = () => {
	const py = cardBottom(Q3V) + 20;
	return (
		<Overlay>
			<QuestionCard spec={Q3V} at={-100} ann={[...VERB, {kind: 'given', phrase: 'worked for about nine months before it was removed;', at: -100}]}>
				<PigSlot spec={Q3V} kidney={-100} />
				<BadgeIn spec={Q3V} text="Ethics" at={-100} />
			</QuestionCard>
			<StagedAnswer y={py} rows={prior(Q3_ALL())} total={6} dimAll={1} />
			<CrossedGrey x={SX2} y={py + 6} text="a kidney worked for 9 months, so pig kidneys solve the shortage" at={2} cross={KM.mistake} size={34} maxW={530} />
			<Chip x={SX2} y={py + 250} text="how long?" at={KM.long} size={38} color={GREY_INK} fill="#eceae4" />
			<Chip x={SX2 + 230} y={py + 250} text="how often?" at={KM.often} size={38} color={GREY_INK} fill="#eceae4" />
			<Chip x={SX2} y={py + 340} text="how safely?" at={KM.safely} size={38} color={GREY_INK} fill="#eceae4" />
			{void KM.doesnt}
		</Overlay>
	);
};

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
	'Plan: one mechanism link, the criteria, evidence from the stimulus, then a verdict.',
	'Verdict words: "to a ... extent" and "provided that ...". Assess: how far. Evaluate: against criteria.',
	'Biodiversity: name the level (genetic, species, ecosystem) and the baseline the question gives.',
	'Link it to biodiversity, not the organism or the harvest. Never judge a level the data skip.',
	'Pest resistance is a change in allele frequency, not lost diversity.',
	'Cloning adds diversity only from donors with missing alleles: count the donors, not the clones.',
	'Ethics: who carries each risk, whether consent is possible, which objections are in principle.',
	'A few patients show it can work, not that it is proven.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="No verdict without a reason, no reason without evidence." tag="for assess and evaluate answers about biotechnology" size={34} aidTop={820} />;
