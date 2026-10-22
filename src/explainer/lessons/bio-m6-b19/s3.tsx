// M6 B19 scenes 10a to 12: two unseen exam items (assess a laundry enzyme company's energy claim; evaluate the
// yeast-made hepatitis B vaccine against the plasma vaccine), each kept whole on screen through "Pause here to
// answer." and its 10 s countdown; brief feedback with the givens underlined as they are used and one crossed classic
// mistake (no givens card). Then the decision rule with the handoff to g02, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, Dot, EDGE, GREY_INK, GTag, INK, INK_SOFT, PLATES, Pl, Sx, TestIcon, prog, vis} from './parts';
import type {DotK, TestK} from './parts';

const PauseHold: React.FC<{id: string; at: number}> = ({id, at}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={860} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	return (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text="answer" size={26} color={INK_SOFT} weight={700} at={at} />
		{[1, 2, 3, 4, 5].map(i => (y + 40 + i * 52 < y + h - 10 ? <line key={i} x1={x + 20} x2={x + w - 20} y1={y + 40 + i * 52} y2={y + 40 + i * 52} stroke="#e4dccb" strokeWidth={2} opacity={prog(f, at, 14)} /> : null))}
	</>
	);
};
/** A feedback row: optional test icon, a bold label, the hand answer and an optional strength dot. */
const FbRow: React.FC<{y: number; icon?: TestK; label: string; text: string; at: number; lit: number; dot?: DotK; grey?: boolean}> = ({y, icon, label, text, at, lit, dot, grey = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5 && !grey;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={1520} height={80} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			{icon !== undefined ? <TestIcon k={icon} x={172} y={y + 40} s={0.8} color={on ? AMBER_INK : INK_SOFT} /> : null}
			<Sx x={icon !== undefined ? 220 : 150} y={y + 51} text={label} size={28} color={on ? INK : GREY_INK} weight={800} />
			<Sx x={520} y={y + 53} text={text} size={34} color={on ? INK : GREY_INK} hand />
			{dot ? <Dot x={1590} y={y + 40} k={dot} r={16} grey={on ? 0 : 1} /> : null}
		</g>
	);
};
/** The verdict chip (amber outline). */
const Verdict: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={1520} height={78} rx={39} fill="#fff3d9" stroke={AMBER} strokeWidth={3.5} />
			<Sx x={x + 30} y={y + 51} text="verdict:" size={28} color={AMBER_INK} weight={800} />
			<Sx x={x + 170} y={y + 53} text={text} size={36} color={INK} hand />
		</g>
	);
};

// ---------- item 1: laundry enzymes ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'A company produces laundry enzymes using genetically modified microorganisms.', at: t.a},
	{text: 'The enzymes remove common stains in water at 20 °C.', at: t.b},
	{text: 'Older detergents needed water at 40 to 60 °C to remove the same stains.', at: t.c},
	{text: 'Most of the energy used by a washing machine is used to heat the water.', at: t.d},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'The company claims that its enzymes reduce household energy use. Assess this claim. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['40 to 60 °C', '20 °C', 'used to heat the water'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First.', company: 'A company makes', remove: 'The enzymes remove', older: 'older detergents', most: 'Most of the energy', claims: 'The company claims', assess: 'Assess this claim', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {a: KA.company, b: KA.remove, c: KA.older, d: KA.most, q: KA.claims};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<Pl p={PLATES.washer} cx={1640} cy={340} w={220} o={prog(f, KA.company, 14)} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={260} w={1300} size={34} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={500} w={1300} size={34} card={false} />
				<AnsBox x={140} y={620} w={1340} h={380} at={KA.assess + 20} />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {partly: 'holds only partly', hot: 'Compared with a hot', heating: 'heating the water', but: 'But the enzyme', saving: 'The saving happens', onlyIf: 'only if people', measured: 'measured energy use', saying: 'Saying the enzyme', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS1[0], at: KB.hot}, {phrase: MARKS1[1], at: KB.hot + 10}, {phrase: MARKS1[2], at: KB.heating}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="Only if people wash cold" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={214} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={370} icon={0} label="better than what?" text="a hot wash: most energy saved" at={KB.hot} lit={lit(KB.hot, KB.onlyIf)} dot="full" />
				<FbRow y={470} icon={1} label="shown how?" text="only if people wash cold" at={KB.onlyIf} lit={lit(KB.onlyIf, KB.measured)} dot="half" />
				<FbRow y={570} icon={1} label="evidence:" text="energy use in real homes" at={KB.measured} lit={lit(KB.measured, KB.saying)} />
				<Verdict x={120} y={680} text="partly supported, provided people wash cold" at={KB.partly} />
				<MistakeChip x={140} y={830} text="the enzyme saves energy by itself" at={KB.saying} cross={KB.mistake} size={30} />
				{void KB.but}{void KB.saving}
			</Overlay>
		</>
	);
};

// ---------- item 2: two hepatitis B vaccines ----------
type T2 = {a: number; b: number; c: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Vaccine A (from 1981): hepatitis B surface protein purified from the blood plasma of people chronically infected with hepatitis B virus.', at: t.a},
	{text: 'Vaccine B (from 1986): the same surface protein made by yeast cells carrying the gene for it, grown in fermenters.', at: t.b, para: true},
	{text: 'Both vaccines gave strong protection against hepatitis B.', at: t.c, para: true},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Evaluate the benefit of Vaccine B compared with Vaccine A. (5 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS2 = ['Both vaccines gave strong protection', 'blood plasma of people chronically infected'];
qCheck(STEM2({a: 0, b: 0, c: 0, q: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second.', first: 'The first hepatitis', from86: 'From 1986,', both: 'Both vaccines protected', evaluate: 'Evaluate the benefit', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.first, b: KC.from86, c: KC.both, q: KC.evaluate};
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.vaccine} cx={1640} cy={300} w={250} o={prog(f, KC.first, 14)} />
				<Pl p={PLATES.yeast} cx={1640} cy={470} w={210} o={prog(f, KC.from86, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={260} w={1300} size={34} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={590} w={1300} size={34} card={false} />
				<AnsBox x={140} y={660} w={1340} h={340} at={KC.evaluate + 30} />
				<PauseHold id="attempt-two" at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {prot: "Protection wasn't", both: 'both protected well', gain: 'The gain was', longer: 'no longer depended', consist: 'made consistently', eased: 'eased fears', baby: 'every baby', so: 'So the benefit', saying: 'Saying it protects', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, q: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS2[0], at: KD.both}, {phrase: MARKS2[1], at: KD.longer + 10}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="The gain was supply and safety" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={180} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={210} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={390} label="protection:" text="the same, not the gain" at={KD.both} lit={0} grey />
				<FbRow y={490} label="supply:" text="no infected donors needed; fermenters scale" at={KD.longer} lit={lit(KD.longer, KD.eased)} dot="full" />
				<FbRow y={590} label="safety:" text="no blood-derived material" at={KD.eased} lit={lit(KD.eased, KD.so)} dot="full" />
				<GTag x={150} y={690} text="routine infant vaccination (Australia: since 2000)" at={KD.baby} out={KD.so} size={26} />
				<Verdict x={120} y={690} text="large benefit, from supply and safety" at={KD.so + 4} />
				<MistakeChip x={140} y={830} text="Vaccine B protects better" at={KD.saying} cross={KD.mistake} size={30} />
				{void KD.prot}{void KD.gain}{void KD.consist}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to evaluate', name: 'name the domain', then: 'Then ask:', weigh: 'Weigh it against', finish: 'finish with a', verdict: 'verdict.', next: 'Next, practice'});
const FieldMini: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<rect x={x - 40} y={y - 26} width={80} height={52} rx={8} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={2.5} />
		{[-24, -8, 8, 24].map(dx => <line key={dx} x1={x + dx} y1={y - 18} x2={x + dx} y2={y + 18} stroke="#2f8a5b" strokeWidth={3} strokeDasharray="5 4" />)}
	</g>
);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {at: number; lines: string[]; icon: React.ReactNode; amber?: boolean}[] = [
		{at: KE.name, lines: ['domain +', 'exact benefit'], icon: <><Pl p={PLATES.papayaOk} cx={-60} cy={0} w={50} /><Pl p={PLATES.vial} cx={0} cy={0} w={24} /><Pl p={PLATES.cheese} cx={60} cy={4} w={64} /></>},
		{at: KE.then, lines: ['better than what?', 'shown how?', 'who gets it?'], icon: <><TestIcon k={0} x={-70} y={0} s={0.9} /><TestIcon k={1} x={0} y={0} s={0.9} /><TestIcon k={2} x={70} y={0} s={0.9} /></>},
		{at: KE.weigh, lines: ['weigh the trade-off', '(farm: biodiversity)'], icon: <FieldMini x={0} y={0} />},
		{at: KE.verdict - 6, lines: ['verdict'], icon: <TestIcon k={0} x={0} y={0} s={1.2} color={AMBER_INK} />, amber: true},
	];
	return (
		<>
			<Heading text="Evaluating a benefit" at={KE.so} size={54} />
			<Overlay>
				{steps.map((s, i) => {
					const x = 110 + i * 430, y = 260;
					const o = prog(f, s.at, 14);
					return (
						<g key={i} opacity={o} transform={`translate(0,${(1 - o) * 20})`}>
							<rect x={x} y={y} width={400} height={330} rx={26} fill={s.amber ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={x + 30} y={y + 56} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} />
							<g transform={`translate(${x + 220},${y + 80})`}>{s.icon}</g>
							{s.lines.map((t, k) => <Sx key={k} x={x + 200} y={y + 180 + k * 46} text={t} size={38} color={INK} hand anchor="middle" />)}
							{i < 3 ? <path d={`M${x + 404},${y + 165} l22,0 m-8,-8 l8,8 l-8,8`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" /> : null}
						</g>
					);
				})}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={760} width={1120} height={150} rx={40} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.maize} cx={790} cy={835} w={100} />
					<Pl p={PLATES.sheep} cx={900} cy={835} w={110} />
					<Sx x={980} y={852} text="Next: practice: benefits, biodiversity and ethics" size={38} color={INK} hand />
				</g>
				{void KE.finish}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'A benefit must be better than an alternative, shown by evidence, and received by someone. Test it: Better than what? Shown how? Who gets it?',
	'Agriculture (harvest, resistance, nutrition): virus-resistant papaya rescued papaya growing in Hawaii\'s main district (seed released 1998) when no ordinary variety resisted the virus. Modified crops are released into fields, so check biodiversity: pests can evolve resistance and one variety everywhere narrows crop genetic diversity.',
	'Medicine: bacteria make human insulin. For most patients it controls blood sugar about as well as purified pig insulin; its clear benefit is a reliable, scalable supply. Access still depends on price. Growth hormone made by bacteria (1985) replaced a scarce pituitary supply that sometimes carried a fatal brain disease, so its benefit is larger.',
	'Industry: microbes make chymosin for cheese (approved from 1988 to 1990), the same enzyme as calf rennet, without depending on calves. Medical and industrial microbes are usually contained in tanks.',
	'Benefits hold up best where the technology does what the old method could not do safely, the evidence measures the real outcome, and the product reaches those who need it, not where the technology is most advanced.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Better than what? Shown how? Who gets it? A gain in harvest isn't a gain in biodiversity." tag="test each benefit claim, weigh the trade-off, then give a verdict" size={26} aidTop={850} />
);
