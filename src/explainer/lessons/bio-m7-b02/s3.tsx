// M7 B02 scenes 11a to 13: two unseen exam items (assess hypothetical sheep data against the four steps; explain two
// reasons the postulates are hard to apply to koala chlamydia), each kept whole on screen through "Pause here to
// answer." and its 10 s countdown with nothing answer-bearing; brief feedback with givens underlined in the question
// strip as they are used, the step strip taking ticks and grey gaps, and one crossed classic mistake (no givens card);
// the decision rule with the handoff to transmission; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, GREY_INK, GTag, INK, PLATES, Pl, StepStrip, Sx, prog, stripX} from './parts';

const STRIP = {x: 140, w: 380};
/** The verdict bar (amber outline). */
const Verdict: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={1600} height={84} rx={42} fill="#fff3d9" stroke={AMBER} strokeWidth={3.5} />
			<Sx x={x + 30} y={y + 55} text="verdict:" size={30} color={AMBER_INK} weight={800} />
			<Sx x={x + 180} y={y + 58} text={text} size={42} color={INK} hand />
		</g>
	);
};

// ---------- item 1: sheep lung disease (hypothetical data) ----------
type T1 = {s: number; a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'Sheep on a farm developed a lung disease. A scientist investigated whether bacterium X causes the disease. Her results are shown (hypothetical data).', at: t.s},
	{text: 'Sheep with the disease: bacterium X found in lung tissue of 20 out of 20', at: t.a, para: true},
	{text: 'Healthy sheep: bacterium X found in 0 out of 20', at: t.b, para: true},
	{text: 'X grown in pure culture: yes', at: t.c, para: true},
	{text: 'Pure culture of X given to 5 healthy sheep: 4 developed the disease', at: t.d, para: true},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Assess whether this evidence shows that bacterium X causes the disease. (4 marks)', at: t.q, weight: 700}] as QBlock[];
qCheck(STEM1({s: 0, a: 0, b: 0, c: 0, d: 0, q: 0}), ['20 out of 20', '0 out of 20', 'pure culture: yes', '4 developed the disease'].map(phrase => ({phrase, at: 0})));

// ---------- 11a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', sheep: 'Sheep on a farm', found: 'A scientist found', none: 'none of twenty', grew: 'She grew X', gave: 'gave it to five', assess: 'Assess whether', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {s: KA.sheep, a: KA.found, b: KA.none, c: KA.grew, d: KA.gave, q: KA.assess};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<Pl p={PLATES.sheep} cx={1640} cy={320} w={260} o={prog(f, KA.sheep, 14)} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={256} w={1340} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={690} w={1600} size={36} card={false} />
				<AnsBox x={140} y={740} w={1340} h={260} at={KA.assess + 20} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {strongly: 'strongly supports', every: 'every sick sheep', nohealthy: 'no healthy one', grown: 'grown pure', fourfive: 'four of five', but: 'But step four', must: 'must be recovered', saying: 'Saying the evidence', mistake: 'classic mistake'});
const ALL1: T1 = {s: -100, a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	const marks: QMark[] = [{phrase: '20 out of 20', at: KB.every}, {phrase: '0 out of 20', at: KB.nohealthy}, {phrase: 'pure culture: yes', at: KB.grown}, {phrase: '4 developed the disease', at: KB.fourfive}];
	const sy = 476;
	return (
		<>
			<Heading text="Strong support, but step 4 is missing" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={290} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={208} w={2200} size={34} card={false} s={0.72} />
				<StepStrip x={STRIP.x} y={sy} w={STRIP.w} at={KB.strongly} dimTicks={KB.but}
					checks={[{k: 'tick', at: KB.nohealthy + 8}, {k: 'tick', at: KB.grown + 8}, {k: 'tick', at: KB.fourfive + 8}, {k: 'gap', at: KB.but + 8}]} />
				<GTag x={stripX(2, STRIP.x, STRIP.w)} y={sy + 92} text="4 of 5: one may have resisted" at={KB.fourfive + 24} size={24} />
				<GTag x={stripX(3, STRIP.x, STRIP.w) + STRIP.w} y={sy + 146} text="not done: recover X from the 4 sick sheep" at={KB.but + 14} size={26} anchor="end" />
				<Verdict x={140} y={700} text="strong support, but step 4 needed to confirm" at={KB.must} />
				<MistakeChip x={140} y={840} text="all steps done, so X is proven" at={KB.saying} cross={KB.mistake} size={32} />
				{void GREY_INK}{void CARD}
			</Overlay>
		</>
	);
};

// ---------- item 2: koala chlamydia ----------
type T2 = {a: number; b: number; c: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Chlamydia pecorum is a bacterium that causes eye and urinary tract disease in koalas.', at: t.a},
	{text: 'It can reproduce only inside living host cells.', at: t.b},
	{text: 'Koalas in New South Wales are listed as an endangered species.', at: t.c},
] as QBlock[];
const DEM2 = (t: T2) => [{text: "Explain TWO reasons why it is difficult to apply Koch's postulates to this disease. (4 marks)", at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, c: 0, q: 0}), [{phrase: 'only inside living host cells', at: 0}, {phrase: 'endangered species', at: 0}]);

// ---------- 11c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', chlamydia: 'Chlamydia pecorum', grows: 'It grows only', koalas: 'Koalas in New', explain: 'Explain two', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.chlamydia, b: KC.grows, c: KC.koalas, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.koala} cx={1640} cy={350} w={250} o={prog(f, KC.chlamydia, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={262} w={1300} size={38} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={520} w={1300} size={38} card={false} />
				<AnsBox x={140} y={640} w={1340} h={360} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {grows: 'grows only inside', steptwo: 'step two needs', deliberately: 'deliberately infecting', endangered: 'endangered species', saying: 'Saying the postulates', mistake: 'classic mistake', bact: 'a bacterium that needs'});
const ALL2: T2 = {a: -100, b: -100, c: -100, q: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const marks: QMark[] = [{phrase: 'only inside living host cells', at: KD.grows}, {phrase: 'endangered species', at: KD.endangered}];
	const sy = 360;
	return (
		<>
			<Heading text="Two steps can't be done" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={160} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={212} w={2080} size={34} card={false} s={0.76} />
				<StepStrip x={STRIP.x} y={sy} w={STRIP.w} at={KD.grows - 10} checks={[undefined, {k: 'gap', at: KD.grows + 24}, {k: 'gap', at: KD.deliberately + 10}, undefined]} />
				<Sx x={stripX(1, STRIP.x, STRIP.w)} y={sy + 130} text="reason 1: no pure culture on its own" size={40} color={INK} hand at={KD.steptwo - 20} />
				<Sx x={stripX(1, STRIP.x, STRIP.w)} y={sy + 190} text="reason 2: ethics, endangered host" size={40} color={INK} hand at={KD.endangered} />
				<MistakeChip x={140} y={660} text="Chlamydia is a virus" at={KD.saying} cross={KD.mistake} size={32} />
				<GTag x={560} y={666} text="a bacterium that needs host cells" at={KD.bact} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for a germ', match: 'match each scientist', flasks: 'flasks show', four: 'four steps link', when: 'when a step', next: 'Next, how'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.flasks, text: 'Pasteur: microbes come from microbes (only particle access changed)'},
		{at: KE.four, text: 'Koch: four steps link one microbe to one disease'},
		{at: KE.when, text: "a step can't be done? name it and say why"},
	];
	return (
		<>
			<Heading text="Match each scientist to his question" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = 250 + i * 150;
					const dim = 1 - 0.35 * prog(f, steps[i + 1]?.at ?? KE.next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(0,${(1 - o) * 18})`}>
							<rect x={140} y={y} width={1640} height={110} rx={28} fill={i === 2 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={190} y={y + 72} text={`${i + 1}`} size={50} color={AMBER_INK} weight={800} />
							<Sx x={270} y={y + 74} text={s.text} size={44} color={INK} hand />
						</g>
					) : null;
				})}
				<NextChip x={820} y={820} w={1000} text="Next: how a pathogen moves between hosts" at={KE.next}>
					<Pl p={PLATES.mosquito} cx={886} cy={862} w={96} />
				</NextChip>
				{void KE.match}
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Germ theory: infectious diseases are caused by pathogens, and microbes come from other microbes. It replaced spontaneous generation (life from non-living matter) and miasma (disease from bad air).',
	"Pasteur's swan-neck flasks (around 1860): boiled broth, open S-shaped neck; air reached the broth, but dust and microbes settled in the bend, so the broth stayed clear. Breaking the neck let particles in and the broth went cloudy. IV: whether particles could reach the broth; DV: growth (cloudiness); controlled: broth, boiling, air.",
	"Koch's postulates (from his 1882 tuberculosis work): 1. the microbe is found in every case of the disease (not in healthy hosts); 2. it is grown in pure culture; 3. the pure culture causes the disease in a healthy host; 4. the same microbe is recovered from that host.",
	'Step 1 shows association only; step 3 shows cause; step 4 confirms it is the same microbe.',
	'Limits: viruses need living cells; some bacteria cannot be cultured (leprosy); healthy carriers; deliberately infecting healthy people is rarely ethical. DNA evidence is often used instead.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Find it, grow it, give it, find it again." tag="Pasteur: where microbes come from. Koch: which microbe causes which disease." size={30} aidTop={830} />
);
