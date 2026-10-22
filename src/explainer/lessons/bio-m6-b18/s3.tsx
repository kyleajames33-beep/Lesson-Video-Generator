// M6 B18 scenes 10a to 12: two unseen exam items (describe how to make E. coli carrying a calf chymosin gene and identify
// them; explain why a gene copied from a chromosome fails in bacteria while a copy from mRNA works), each kept whole on
// screen through "Pause here to answer." and its 10 s countdown; brief feedback with the givens underlined as they are
// used and one crossed classic mistake (no givens card). Then the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, EDGE, GREY_INK, INK, INK_SOFT, MiniStrip, PLATES, Pl, StationIcon, prog, vis} from './parts';

const PauseHold: React.FC<{id: string; at: number}> = ({id, at}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={880} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text="answer" size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);
const FbRow: React.FC<{y: number; icon?: number; label: string; text: string; at: number; lit: number; extra?: React.ReactNode}> = ({y, icon, label, text, at, lit, extra}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={1520} height={78} rx={16} fill={lit > 0.5 ? '#fffaf0' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 3.5 : 2.5} />
			{icon !== undefined ? <StationIcon k={icon} x={170} y={y + 39} o={lit > 0.5 ? 1 : 0.5} /> : null}
			<Sx x={icon !== undefined ? 220 : 146} y={y + 50} text={label} size={28} color={lit > 0.5 ? INK : GREY_INK} weight={800} />
			<Sx x={400} y={y + 51} text={text} size={32} color={lit > 0.5 ? INK : GREY_INK} hand />
			{extra}
		</g>
	);
};

// ---------- item 1: chymosin bacteria ----------
type T1 = {a: number; b: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'Chymosin is an enzyme used in cheesemaking.', at: t.a},
	{text: 'Scientists have an intron-free copy of the calf gene for chymosin, and a plasmid that carries a gene for resistance to the antibiotic ampicillin.', at: t.b},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Describe how the scientists could produce Escherichia coli bacteria that carry the chymosin gene, and how they could identify these bacteria. (5 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS1 = ['intron-free copy of the calf gene', 'a plasmid', 'resistance to the antibiotic ampicillin'];
qCheck(STEM1({a: 0, b: 0, d: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', sci: 'Scientists have an', plasmid: 'and a plasmid carrying', describe: 'Describe how', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {a: KA.sci, b: KA.sci + 20, d: KA.describe};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<Pl p={PLATES.bactP} cx={1600} cy={320} w={320} o={prog(f, KA.sci, 14)} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={260} w={1250} size={34} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={520} w={1300} size={34} card={false} />
				<AnsBox x={140} y={650} w={1320} h={350} at={KA.describe + 30} />
				<PauseHold id="attempt" at={KA.pause} />
				{void KA.plasmid}
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {same: 'same restriction enzyme', ligase: 'ligase seals', heat: 'Heat-shock the', grow: 'grow them on', check: 'check those colonies', saying: 'Saying every colony', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS1[0], at: KB.same}, {phrase: MARKS1[1], at: KB.same + 8}, {phrase: MARKS1[2], at: KB.grow}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="Name each tool, in order" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={214} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={360} icon={1} label="cut" text="same enzyme, matching sticky ends" at={KB.same} lit={lit(KB.same, KB.ligase)} />
				<FbRow y={460} icon={2} label="paste" text="ligase seals the joins" at={KB.ligase} lit={lit(KB.ligase, KB.heat)} />
				<FbRow y={560} icon={3} label="put in" text="heat shock, some take it up" at={KB.heat} lit={lit(KB.heat, KB.grow)} />
				<FbRow y={660} icon={4} label="pick" text={f >= KB.check ? 'ampicillin plate, then check for the gene' : 'ampicillin plate'} at={KB.grow} lit={lit(KB.grow, KB.saying)} />
				<MistakeChip x={140} y={830} text="every surviving colony carries the gene" at={KB.saying} cross={KB.mistake} size={30} />
			</Overlay>
		</>
	);
};

// ---------- item 2: a gene that fails ----------
type T2 = {a: number; b: number; c: number; d: number; e: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'A student inserts a human gene into a plasmid, next to a promoter recognised by bacteria.', at: t.a},
	{text: 'Copy 1 of the gene was taken directly from human chromosomal DNA.', at: t.b},
	{text: 'Copy 2 was made from the mRNA of the same gene.', at: t.c},
	{text: 'Bacteria given Copy 1 produce a faulty protein.', at: t.d, para: true},
	{text: 'Bacteria given Copy 2 produce the working human protein.', at: t.e},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Explain these results. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS2 = ['taken directly from human chromosomal DNA', 'made from the mRNA', 'a promoter recognised by bacteria'];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0, e: 0, q: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', student: 'A student puts', directly: 'copied directly', faulty: 'The bacteria make', copy: 'A copy of the same', gives: 'gives the working', explain: 'Explain these results', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.student, b: KC.directly, c: KC.copy, d: KC.faulty, e: KC.gives, q: KC.explain};
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.bact} cx={1600} cy={300} w={300} o={prog(f, KC.student, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={260} w={1300} size={34} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={560} w={1300} size={34} card={false} />
				<AnsBox x={140} y={640} w={1320} h={360} at={KC.explain + 30} />
				<PauseHold id="attempt-two" at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {still: 'still has its introns', wrong: 'comes out wrong', already: 'already removed', same: 'same genetic code', saying: 'Saying bacteria use', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, e: -100, q: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS2[0], at: KD.still}, {phrase: MARKS2[1], at: KD.already}, {phrase: MARKS2[2], at: KD.same, color: '#9aa0a6'}];
	return (
		<>
			<Heading text="Introns, not a different code" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={170} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={214} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={400} label="Copy 1" text="introns kept, read as code, faulty protein" at={KD.still} lit={vis(f, KD.still, KD.already, 10)} extra={<MiniStrip x={1440} y={431} introns />} />
				<FbRow y={510} label="Copy 2" text="introns removed, correct coding sequence, working protein" at={KD.already} lit={vis(f, KD.already, KD.saying, 10)} extra={<MiniStrip x={1500} y={541} introns={false} />} />
				<Sx x={146} y={650} text="promoter and code both fine in each" size={30} color={GREY_INK} hand at={KD.same + 10} />
				<MistakeChip x={140} y={760} text="bacteria use a different genetic code" at={KD.saying} cross={KD.mistake} size={30} />
				{void KD.wrong}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to describe', get: 'Get intron-free DNA', cut: 'cut with a', join: 'join with ligase', put: 'put it into', pick: 'pick the hosts', read: 'can read it', link: 'link the method', next: 'Next, which benefits'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const CH = [
		{at: KE.get, t: 'intron-free DNA', k: 0},
		{at: KE.cut, t: 'cut: restriction enzyme', k: 1},
		{at: KE.join, t: 'join: ligase', k: 2},
		{at: KE.put, t: 'put in: host', k: 3},
		{at: KE.pick, t: 'pick: marker + check', k: 4},
		{at: KE.read, t: 'read: promoter', k: 5},
	];
	return (
		<>
			<Heading text="Describing recombinant DNA technology" at={KE.so} size={54} />
			<Overlay>
				{CH.map((c, i) => {
					const x = 120 + (i % 3) * 570, y = 240 + Math.floor(i / 3) * 150;
					return (
						<g key={i} opacity={prog(f, c.at, 14)}>
							<rect x={x} y={y} width={540} height={110} rx={24} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={x + 26} y={y + 68} text={`${i + 1}`} size={40} color={AMBER_INK} weight={800} />
							<StationIcon k={c.k} x={x + 100} y={y + 55} s={1.2} />
							<Sx x={x + 150} y={y + 68} text={c.t} size={34} color={INK} hand />
						</g>
					);
				})}
				<g opacity={prog(f, KE.link, 14)}>
					<path d="M140,560 L140,580 L1790,580 L1790,560" fill="none" stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={965} y={640} text="then: the product (insulin, Bt cotton)" size={40} color={AMBER_INK} hand anchor="middle" />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={760} y={790} width={1060} height={160} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.vial} cx={850} cy={870} w={60} />
					<Pl p={PLATES.cotton} cx={950} cy={870} w={110} />
					<Sx x={1040} y={884} text="Next: which benefits hold up?" size={42} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Recombinant DNA is DNA joined from two sources. For bacteria, use an intron-free copy of a human gene (made from mRNA or built from scratch), because bacteria cannot remove introns.',
	'Cut: a restriction enzyme cuts DNA at one specific sequence, often leaving sticky ends. The plasmid (vector) is opened with the same enzyme, or one that leaves matching ends. Paste: the ends pair and DNA ligase seals the backbones.',
	'Put in: bacteria take up the plasmid by transformation (calcium chloride helps DNA stick to the cells, then a heat shock lets it in); only a few do. Pick: the plasmid\'s antibiotic-resistance marker means only bacteria with a plasmid grow on antibiotic; a second check finds those carrying the gene.',
	'Use: the gene needs a promoter the host recognises; the genetic code is shared, so the host makes the same protein. Medicine: the first insulin bacteria made the two chains, which were purified and joined; today engineered microbes in fermenters make insulin. Agriculture: Agrobacterium carries the Bt gene into cotton cells\' chromosomes; the cells are grown into whole plants.',
	'A transgenic organism carries DNA from another species, inserted directly; selective breeding can only combine alleles from parents that can interbreed.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Cut, paste, put in, pick. Same enzyme, matching sticky ends." tag="name each tool and its job, in order, then link the method to its product" size={27} aidTop={830} />
);
