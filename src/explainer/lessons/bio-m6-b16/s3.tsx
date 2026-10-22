// M6 B16 scenes 10a to 12: two unseen exam items (assess cloning as a way of copying a prize dairy bull from
// hypothetical data; distinguish the cloning in two hypothetical rhino projects), each kept whole on screen through
// "Pause here to answer." and its 10 s countdown; brief feedback with the givens underlined (and table rows outlined) as
// they are used and one crossed classic mistake (no givens card). Then the decision rule with the handoff, and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, DataTable, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import type {Col} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, EDGE, GREY_INK, INK, INK_SOFT, MarkText, PLATES, Pl, prog, vis} from './parts';

const PauseHold: React.FC<{id: string; at: number; cx?: number; cy?: number}> = ({id, at, cx = 1680, cy = 880}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text="answer" size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);
/** A feedback row: label, text, lit while current. */
const FbRow: React.FC<{y: number; label: string; text: string; at: number; lit: number; w?: number; size?: number}> = ({y, label, text, at, lit, w = 1460, size = 32}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={w} height={74} rx={16} fill={lit > 0.5 ? '#fffaf0' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 3.5 : 2.5} />
			<Sx x={146} y={y + 48} text={label} size={28} color={lit > 0.5 ? INK : GREY_INK} weight={800} />
			<Sx x={440} y={y + 49} text={text} size={size} color={lit > 0.5 ? INK : GREY_INK} hand />
		</g>
	);
};

// ---------- item 1: a cloned bull ----------
type T1 = {a: number; c: number; d: number};
const STEM1 = (t: T1) => [{text: 'A company used somatic cell nuclear transfer to produce 100 embryos from skin cells of a prize dairy bull. The table shows the results (hypothetical data).', at: t.a}] as QBlock[];
const PAT1 = (t: T1) => [{text: "The surviving calves' black and white patch patterns differed from the bull's and from each other's.", at: t.c}] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Assess the effectiveness of cloning as a method of copying this bull. (5 marks)', at: t.d, weight: 700}] as QBlock[];
const COLS1: Col[] = [{w: 520, head: 'hypothetical data'}, {w: 180, head: 'number', align: 'middle'}];
const ROWS1 = [['embryos transferred', '100'], ['calves born', '6'], ['calves alive at one year', '4']];
const MARKS1 = ['100 embryos', 'skin cells', 'patch patterns differed', 'prize dairy bull'];
qCheck([...STEM1({a: 0, c: 0, d: 0}), ...PAT1({a: 0, c: 0, d: 0})], MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', company: 'A company made', six: 'Six calves were born', four: 'four were alive', patches: 'black and white patches', assess: 'Assess the effectiveness', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {a: KA.company, c: KA.patches, d: KA.assess};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<Pl p={PLATES.bull} cx={1600} cy={300} w={250} o={prog(f, KA.company + 10, 14)} />
				<Pl p={PLATES.calf} cx={1520} cy={510} w={150} o={prog(f, KA.six, 14)} />
				<Pl p={PLATES.calfHorn} cx={1710} cy={500} w={170} o={prog(f, KA.six + 8, 14)} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1250} size={32} card={false} />
				<DataTable x={140} y={360} cols={COLS1} rows={ROWS1} rowAt={[KA.company + 30, KA.six, KA.four]} at={KA.company + 20} size={28} rowH={50} />
				<QText q={qCheck(PAT1(t), [])} x={140} y={620} w={1250} size={32} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={730} w={1250} size={32} card={false} />
				<AnsBox x={140} y={800} w={1320} h={200} at={KA.assess + 30} />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {four: 'four live calves', two: 'two of the six', nuclear: 'nuclear DNA matches', patches: 'patches differ', worth: 'worth it only', valuable: 'very valuable bull', saying: 'Saying different patches', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, c: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const rowsLit = 1 - prog(f, KB.worth, 12);
	const lit = (a: number, b: number) => vis(f, a, b, 10) * rowsLit;
	const hot = (r: number) => (r === 0 ? vis(f, KB.four, KB.two, 8) : r === 1 ? vis(f, KB.two, KB.nuclear, 8) : r === 2 ? vis(f, KB.four, KB.nuclear, 8) : 0);
	const marks: QMark[] = [{phrase: MARKS1[0], at: KB.four}, {phrase: MARKS1[1], at: KB.nuclear}, {phrase: MARKS1[2], at: KB.patches}, {phrase: MARKS1[3], at: KB.valuable}];
	return (
		<>
			<Heading text="Judge it against the purpose" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={170} at={-100} />
				<QText q={qCheck([...STEM1(ALL1), ...PAT1(ALL1)], marks)} x={140} y={212} w={2000} size={32} card={false} s={0.6} />
				<g transform="translate(1390,176) scale(0.6) translate(-1390,-176)">
					<DataTable x={1390} y={176} cols={COLS1} rows={ROWS1} at={-100} size={28} rowH={50} hot={hot} />
				</g>
				<FbRow y={370} label="reliability" text="4 in 100: low" at={KB.four} lit={lit(KB.four, KB.two)} />
				<FbRow y={460} label="health" text="2 of 6 calves died" at={KB.two} lit={lit(KB.two, KB.nuclear)} />
				<FbRow y={550} label="identity" text="same nuclear DNA as the bull" at={KB.nuclear} lit={lit(KB.nuclear, KB.patches)} />
				<FbRow y={640} label="patches" text="shaped in development, not genes alone" at={KB.patches} lit={lit(KB.patches, KB.worth)} />
				<g opacity={prog(f, KB.worth, 12)}>
					<rect x={120} y={745} width={1460} height={90} rx={20} fill="#fff3d9" stroke={AMBER} strokeWidth={4} />
					<MarkText x={150} y={805} size={42} at={KB.worth} parts={[{t: 'Verdict: worth it '}, {t: 'only', mark: KB.worth + 14}, {t: ' for a very valuable bull'}]} />
				</g>
				<MistakeChip x={140} y={900} text="different patches, so the DNA wasn't copied" at={KB.saying} cross={KB.mistake} size={30} />
			</Overlay>
		</>
	);
};

// ---------- item 2: two rhino projects ----------
type T2 = {a: number; b: number; c: number; d: number};
const STEM2 = (t: T2) => [
	{text: 'A zoo stores frozen skin cells from a male northern white rhinoceros that has died. Scientists propose two projects (hypothetical).', at: t.a},
	{text: "Project A: make many copies of one of the rhino's genes so that its DNA sequence can be studied.", at: t.b, para: true},
	{text: 'Project B: produce a living rhinoceros calf from the frozen cells.', at: t.c, para: true},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Distinguish between the types of cloning used in Project A and Project B. (4 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS2 = ["many copies of one of the rhino's genes", 'a living rhinoceros calf'];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', zoo: 'A zoo stores', a: 'Project A will', b: 'Project B aims', dist: 'Distinguish between', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.zoo, b: KC.a, c: KC.b, d: KC.dist};
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.rhino} cx={1610} cy={320} w={330} o={prog(f, KC.zoo + 10, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={250} w={1250} size={34} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={640} w={1300} size={34} card={false} />
				<AnsBox x={140} y={730} w={1320} h={270} at={KC.dist + 30} />
				<PauseHold id="attempt-two" at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {a: 'Project A is gene', plasmid: 'goes into a plasmid', product1: 'many copies of one gene', b: 'Project B is', skin: "A skin cell's nucleus", calf: 'a calf whose nuclear', saying: 'Saying both projects', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS2[0], at: KD.product1}, {phrase: MARKS2[1], at: KD.calf}];
	const colA = 440, colB = 1100;
	const cell = (x: number, y: number, text: string, at: number, size = 32, grey = false) => <Sx x={x} y={y} text={text} size={size} color={grey ? GREY_INK : INK} hand at={at} />;
	return (
		<>
			<Heading text="What exists at the end?" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={200} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={212} w={2400} size={34} card={false} s={0.6} />
				<g opacity={prog(f, KD.a, 12)}>
					<rect x={120} y={400} width={1680} height={380} rx={20} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<line x1={colA - 20} y1={410} x2={colA - 20} y2={770} stroke={EDGE} strokeWidth={2} />
					<line x1={colB - 20} y1={410} x2={colB - 20} y2={770} stroke={EDGE} strokeWidth={2} />
					<Sx x={colA} y={450} text="Project A" size={32} color={INK} weight={800} />
					<Sx x={colB} y={450} text="Project B" size={32} color={INK} weight={800} />
					{['type', 'how', 'product'].map((l, i) => <Sx key={l} x={146} y={[540, 630, 730][i]} text={l} size={28} color={GREY_INK} weight={800} />)}
				</g>
				{cell(colA, 540, 'gene cloning', KD.a + 6)}
				{cell(colB, 540, 'whole-organism cloning', KD.b + 6)}
				{cell(colA, 630, 'gene in a plasmid, copied by dividing bacteria', KD.plasmid, 24, true)}
				{cell(colB, 630, 'skin-cell nucleus into an enucleated egg', KD.skin, 24, true)}
				{cell(colA, 730, 'many copies of one gene', KD.product1 + 6, 34)}
				{cell(colB, 730, "a calf with the rhino's nuclear DNA", KD.calf + 6, 34)}
				<MistakeChip x={140} y={880} text="both projects make a copy of the rhino" at={KD.saying} cross={KD.mistake} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', first: 'first ask what', trace: 'Then trace how', judge: 'judge it against', next: 'Next, how scientists'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.first, t: 'what is copied? an individual or one gene'},
		{at: KE.trace, t: 'how is the copy made?'},
		{at: KE.judge, t: 'judge against the purpose: reliable, identical, healthy or useful'},
	];
	return (
		<>
			<Heading text="When a question says cloning" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<rect x={140} y={230 + i * 130} width={1640} height={100} rx={24} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<Sx x={190} y={296 + i * 130} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} />
						<Sx x={250} y={296 + i * 130} text={s.t} size={40} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={640} y={790} width={1180} height={160} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.upEnd} cx={790} cy={870} w={230} />
					<Sx x={930} y={862} text="Next: how recombinant DNA is made" size={38} color={INK} hand />
					<Sx x={930} y={910} text="and gets into a host" size={38} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'A clone is a genetically identical copy. Whole-organism cloning makes a new individual with the same nuclear DNA as an existing one; gene cloning makes many copies of one selected piece of DNA.',
	'Somatic cell nuclear transfer: an egg\'s nucleus is removed; a body cell from the donor is fused with the empty egg (for Dolly, by an electric pulse), and the egg is stimulated to divide; the embryo is placed in a surrogate. The clone\'s nuclear DNA matches the nucleus donor; its mitochondrial DNA comes mainly from the egg.',
	'Whole-organism cloning: low reliability (Dolly: 277 fused cells, 29 embryos, 1 lamb), because the egg often resets the body-cell nucleus\'s gene switches only partly; pregnancy losses and abnormal births are common; a clone can still differ in phenotype. It can be worth it to copy a rare or valuable animal, but many copies of one animal narrow a gene pool.',
	'Gene cloning: a gene is put into a plasmid (the vector) and taken up by a bacterium (the host), which copies it every time it divides; PCR copies a gene without cells (heat separates the strands, then an enzyme copies each one). Very effective for its narrow aim (one host is enough; easy to check), but colonies must be checked for the gene.',
	'To distinguish them, ask what exists at the end: a new organism, or many copies of one gene.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="The clone matches the nucleus donor. Gene cloning copies a gene; organism cloning copies an individual." tag="what exists at the end? a new organism, or many copies of one gene" size={27} aidTop={820} />
);
