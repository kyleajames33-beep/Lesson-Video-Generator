// M6 B09 scenes 10a to 12: two unseen exam items (identify what four uses change, and which change DNA; compare
// selective breeding with recombinant DNA for caterpillar-resistant cotton), each kept whole on screen through
// "Pause here to answer." and its 10 s countdown, brief feedback with the givens underlined as they are used and one
// crossed classic mistake (no givens card), the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsTable, CardBox} from '../bio-m6-b01/parts';
import {Brace, Tg} from '../bio-m6-b07/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, BactIns, CARD, EDGE, GREY_INK, INK, INK_SOFT, PLATES, Pl, StepCard, Strip, prog, vis} from './parts';

const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1680, cy = 840}) => {
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

// ---------- item 1: four uses ----------
type T1 = {s: number; a: number; b: number; c: number; d: number; qa: number; qb: number};
const ITEMS1 = (t: T1) => [
	{text: 'A: Bacteria are used to turn milk into yoghurt.', at: t.a, para: true},
	{text: 'B: Semen from one prize bull is used to artificially inseminate hundreds of cows.', at: t.b, para: true},
	{text: 'C: Banana plants are grown from suckers cut from one parent plant.', at: t.c, para: true},
	{text: 'D: Cotton plants carry a gene from the soil bacterium Bacillus thuringiensis.', at: t.d, para: true},
] as QBlock[];
const Q1 = (t: T1) => qCheck([
	{text: 'Four uses of biotechnology are listed.', at: t.s},
	...ITEMS1(t),
	{text: "(a) For each of A to D, identify what is being changed: an organism's process is used, the choice of parents, a copy of existing DNA, or the organism's DNA itself. (4 marks)", at: t.qa, para: true, weight: 700},
	{text: '(b) State which of A to D change the DNA sequence of an organism. (1 mark)', at: t.qb, para: true, weight: 700},
] as QBlock[], []);
const MARKS1 = ['Bacteria are used to turn milk into yoghurt', 'Semen from one prize bull', 'suckers cut from one parent plant', 'a gene from the soil bacterium'];
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck(ITEMS1(t), marks);
qCheck(ITEMS1({s: 0, a: 0, b: 0, c: 0, d: 0, qa: 0, qb: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', identify: 'identify what is being changed', bacteria: 'Bacteria turning', semen: 'Semen from one', banana: 'Banana plants', cotton: 'And cotton', state: 'Then state', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {s: KA.first, a: KA.bacteria, b: KA.semen, c: KA.banana, d: KA.cotton, qa: KA.identify, qb: KA.state};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<QText q={Q1(t)} x={140} y={240} w={1640} size={32} card={false} />
				<AnsTable x={140} y={712} cols={[{w: 110, head: ''}, {w: 880, head: 'what is being changed'}]} rows={[['A', ''], ['B', ''], ['C', ''], ['D', '']]} at={KA.identify + 20} size={28} rowH={46} />
				<AnsBox x={1170} y={712} w={330} h={110} at={KA.state + 10} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {process: 'process', chooses: 'chooses the parents', mix: 'normal mix', copies: 'copies', inserted: 'inserted gene', saying: 'Saying artificial', mistake: 'the classic mistake'});
const ALL1: T1 = {s: -100, a: -100, b: -100, c: -100, d: -100, qa: -100, qb: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const fill = [KB.process + 4, KB.chooses + 8, KB.copies + 4, KB.inserted + 4];
	const ICON_Y = (r: number) => 470 + 58 * r + 29;
	return (
		<>
			<Heading text="What each one changes" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={200} at={-100} />
				<QText q={STRIP1(ALL1, MARKS1.map((phrase, i) => ({phrase, at: fill[i] - 4})))} x={140} y={232} w={2600} size={32} card={false} s={0.62} />
				<AnsTable x={140} y={412} cols={[{w: 110, head: ''}, {w: 1000, head: 'what is being changed'}]} rows={[['A', 'process used; DNA unchanged'], ['B', 'choice of parents; alleles reshuffled, none new'], ['C', 'copy of existing DNA'], ['D', 'DNA changed: gene inserted']]} fillAt={fill} at={-100} size={30} rowH={58} />
				<Pl p={PLATES.milk} cx={1340} cy={ICON_Y(0)} w={60} o={prog(f, fill[0], 12)} />
				<Pl p={PLATES.straw} cx={1340} cy={ICON_Y(1)} w={42} o={prog(f, fill[1], 12)} />
				<Pl p={PLATES.runner} cx={1350} cy={ICON_Y(2)} w={96} o={prog(f, fill[2], 12)} />
				<BactIns cx={1350} cy={ICON_Y(3)} w={96} arc={1} o={prog(f, fill[3], 12)} />
				<Sx x={140} y={800} text="(b)  D only" size={44} color={AMBER_INK} hand at={KB.inserted + 26} />
				<MistakeChip x={140} y={860} text="artificial insemination changes the calves' DNA" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.mix}
			</Overlay>
		</>
	);
};

// ---------- item 2: resistant cotton ----------
type T2 = {a: number; b: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'Plant breeders want to produce cotton plants that resist attack by caterpillar pests.', at: t.a},
	{text: 'Compare selective breeding and recombinant DNA technology as methods of producing these plants. (4 marks)', at: t.b, para: true, weight: 700},
] as QBlock[], marks);
qCheck(Q2({a: 0, b: 0}).blocks, [{phrase: 'caterpillar pests', at: 0}, {phrase: 'Compare', at: 0}]);

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', plant: 'Plant breeders', compare: 'Compare selective', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={830} at={KC.plant - 6} />
				<Pl p={PLATES.cotton} cx={240} cy={330} w={170} o={prog(f, KC.plant, 14)} />
				<QText q={Q2({a: KC.plant, b: KC.compare})} x={380} y={276} w={1400} size={38} card={false} />
				<AnsBox x={140} y={480} w={1320} h={500} at={KC.compare + 20} label="answer" />
				<PauseHold id="attempt-two" at={KC.pause} cy={760} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {both: 'Both use biology', inherited: 'inherited', alleles: 'resistance alleles', already: 'already has', many: 'many generations', another: 'another species', one: 'one generation', saying: 'Saying selective', mistake: 'the classic mistake'});
const CX = [140, 500, 1160], CW = [360, 660, 660];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const ROWS: {label: string; at: number; cells: [string, number][]; span?: boolean}[] = [
		{label: 'similarity', at: KD.inherited, cells: [['both: a wanted, inherited trait', KD.inherited]], span: true},
		{label: 'source of trait', at: KD.already, cells: [['alleles cotton already has', KD.already], ['a gene from any species', KD.another]]},
		{label: 'time', at: KD.many, cells: [['many generations', KD.many], ['one generation', KD.one]]},
	];
	const Y0 = 400, RH = 96;
	return (
		<>
			<Heading text="Same criteria on both sides" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={150} at={-100} />
				<QText q={Q2({a: -100, b: -100}, [{phrase: 'Compare', at: KD.both + 8}, {phrase: 'caterpillar pests', at: KD.alleles}])} x={140} y={232} w={2200} size={38} card={false} s={0.72} />
				<g opacity={prog(f, KD.both, 12)}>
					<rect x={CX[0]} y={Y0} width={CW[0] + CW[1] + CW[2]} height={RH * 4} rx={18} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
					<rect x={CX[0]} y={Y0} width={CW[0] + CW[1] + CW[2]} height={RH} rx={18} fill="#efe8da" />
					{[1, 2, 3].map(r => <line key={r} x1={CX[0]} y1={Y0 + RH * r} x2={CX[0] + CW[0] + CW[1] + CW[2]} y2={Y0 + RH * r} stroke={EDGE} strokeWidth={2} />)}
					<line x1={CX[1]} y1={Y0} x2={CX[1]} y2={Y0 + RH * 4} stroke={EDGE} strokeWidth={2} />
					<line x1={CX[2]} y1={Y0} x2={CX[2]} y2={Y0 + RH} stroke={EDGE} strokeWidth={2} />
					<line x1={CX[2]} y1={Y0 + RH * 2} x2={CX[2]} y2={Y0 + RH * 4} stroke={EDGE} strokeWidth={2} />
					<Sx x={CX[1] + CW[1] / 2} y={Y0 + 60} text="selective breeding" size={36} color={INK} weight={800} anchor="middle" />
					<Sx x={CX[2] + CW[2] / 2} y={Y0 + 60} text="recombinant DNA" size={36} color={INK} weight={800} anchor="middle" />
				</g>
				{ROWS.map((row, r) => (
					<g key={r}>
						<Sx x={CX[0] + 24} y={Y0 + RH * (r + 1) + 60} text={row.label} size={32} color={GREY_INK} weight={700} at={row.at} />
						{row.cells.map(([t, at], c) => (
							<Sx key={c} x={row.span ? CX[1] + (CW[1] + CW[2]) / 2 : CX[1 + c] + CW[1 + c] / 2} y={Y0 + RH * (r + 1) + 62} text={t} size={40} color={AMBER_INK} hand anchor="middle" at={at} />
						))}
					</g>
				))}
				<MistakeChip x={140} y={850} text="selective breeding isn't biotechnology" at={KD.saying} cross={KD.mistake} size={32} />
				{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', ask: 'ask what it changes', p1: "Is an organism's process", p2: 'Are the parents', p3: 'Is existing DNA', p4: 'Or is the DNA', then: 'Then give its use', what: 'What a technology changes', next: 'Next, how plant'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const X = (i: number) => 110 + i * 430;
	const steps = [KE.p1, KE.p2, KE.p3, KE.p4];
	const TXT = ['process used?', 'parents chosen?', 'DNA copied?', 'DNA changed?'];
	return (
		<>
			<Heading text="Ask what it changes" at={KE.so} size={56} />
			<Overlay>
				{steps.map((at, i) => (
					<StepCard key={i} x={X(i)} y={240} w={400} h={340} text={TXT[i]} o={prog(f, at, 14)}>
						{i === 0 ? <Pl p={PLATES.yeast} cx={X(i) + 200} cy={380} w={190} /> : null}
						{i === 1 ? <><Pl p={PLATES.straw} cx={X(i) + 130} cy={380} w={110} /><Pl p={PLATES.brush} cx={X(i) + 280} cy={380} w={150} /></> : null}
						{i === 2 ? <Pl p={PLATES.jars} cx={X(i) + 200} cy={380} w={300} /> : null}
						{i === 3 ? <BactIns cx={X(i) + 200} cy={380} w={300} arc={1} /> : null}
					</StepCard>
				))}
				<Brace x1={110} x2={1810} y={612} at={KE.then} down label="then: use + advantage" size={44} />
				<Tg x={960} y={760} text="what it changes decides what it can do to a population" at={KE.what + 6} anchor="middle" size={40} color={INK_SOFT} />
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={850} width={1120} height={96} rx={48} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.cotton} cx={770} cy={898} w={70} />
					<Pl p={PLATES.bull} cx={870} cy={898} w={100} />
					<Sx x={960} y={912} text="Next: judging plant and animal biotechnology" size={40} color={INK} hand />
				</g>
				{void KE.ask}{void vis}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Biotechnology: deliberately using living organisms, cells or biological processes to make a product or solve a problem, in agriculture, medicine and industry. It includes old methods (fermentation, selective breeding) and new ones.',
	'Fermentation uses an organism\'s process: yeast turns sugar into carbon dioxide (which raises bread) and ethanol. The yeast\'s DNA is not changed.',
	'Selective breeding and reproductive technologies (artificial insemination, artificial pollination) choose the parents. They change which alleles are passed on and how common they become, but make no new alleles.',
	'Cloning copies existing DNA (a whole organism or one gene). Recombinant DNA technology inserts DNA, which can come from another species (bacteria making human insulin, since 1982; Bt cotton). Gene editing changes a chosen stretch of DNA.',
	'Advantages: choosing parents suits traits controlled by many genes; copying keeps a valuable allele combination together; inserting DNA can add a new trait in one generation.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Biotechnology is older than GMOs. Reproductive technologies choose the parents; they don't change genes." tag="judge a technology by what it changes, not by how modern it looks" size={29} aidTop={720} />
);
