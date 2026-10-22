// M7 B05 scenes 12a to 14: two unseen exam items (callose timing and dead-zone length in species X and Y; evaluate a
// claim that a small, stable dead spot means the defences failed), each whole on screen through "Pause here to
// answer." and its 10 s countdown, with no plates, ladder or race strip; brief feedback with the givens underlined in
// the question strip as they are used and one crossed classic mistake (no givens card); the decision rule with the
// handoff to animal first defences; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {WText} from '../bio-m6-p01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREY_INK, GTag, INK, INK_SOFT, PLATES, PlateB, Sx, TEAL, prog, tw, vis} from './parts';

// ---------- item 1: species X and Y ----------
type T1 = {s: number; x: number; y: number; d: number};
const STEM1 = (t: T1) => [{text: 'Roots of two native plant species, X and Y, were inoculated with Phytophthora cinnamomi. The table shows the results.', at: t.s}] as QBlock[];
const ROWX = (at: number, split = false) => [{text: 'Species X: callose deposited at penetration sites within 6 hours;', at}, {text: 'length of dead root tissue after 7 days, 8 mm.', at, para: split}] as QBlock[];
const ROWY = (at: number, split = false) => [{text: 'Species Y: callose deposited at penetration sites after 48 hours;', at}, {text: 'length of dead root tissue after 7 days, 45 mm.', at, para: split}] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Identify the more resistant species. Explain how its response limited the spread of the pathogen. (3 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck(ROWX(0), [{phrase: 'within 6 hours', at: 0}, {phrase: '8 mm', at: 0}]);
qCheck(ROWY(0), [{phrase: 'after 48 hours', at: 0}, {phrase: '45 mm', at: 0}]);

/** The two-row results table (each row a bordered cell with its question text). */
const Table1: React.FC<{y: number; t: T1; marksX?: QMark[]; marksY?: QMark[]; s?: number; x?: number; w?: number; size?: number; rowH?: number; split?: boolean}> = ({y, t, marksX = [], marksY = [], s = 1, x = 130, w = 1660, size = 34, rowH = 136, split = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, t.x - 6, 12);
	return (
		<g transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			<g opacity={o}>
				<rect x={x} y={y} width={w} height={rowH * 2} rx={14} fill="#fffaf0" stroke={EDGE} strokeWidth={2.5} />
				<line x1={x} x2={x + w} y1={y + rowH} y2={y + rowH} stroke={EDGE} strokeWidth={2.5} />
			</g>
			<QText q={qCheck(ROWX(t.x, split), marksX)} x={x + 30} y={y + 50} w={w - 60} size={size} card={false} />
			<QText q={qCheck(ROWY(t.y, split), marksY)} x={x + 30} y={y + rowH + 50} w={w - 60} size={size} card={false} />
		</g>
	);
};

// ---------- 12a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', roots: 'Roots of two', x: 'In species X', y: 'In species Y', identify: 'Identify the more', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {s: KA.roots, x: KA.x, y: KA.y, d: KA.identify};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<Table1 y={330} t={t} split />
				<QText q={qCheck(DEM1(t), [])} x={140} y={660} w={1640} size={36} card={false} />
				<AnsBox x={140} y={770} w={1340} h={230} at={KA.identify + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const KB = cues(S('feedback-one'), {x: 'Species X is more', plugged: 'Its callose plugged', hours: 'within hours', only: 'only 8 millimetres', iny: 'In Y', after: 'after two days', late: 'too late', choosing: 'Choosing Y because', mistake: 'classic mistake'});
/** A feedback row: species label (with an optional tick), up to two hand lines written on their cues. */
const Row: React.FC<{y: number; label: string; lines: {text: string; at: number}[]; at: number; lit: number; color: string; tickAt?: number}> = ({y, label, lines, at, lit, color, tickAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={120} y={y} width={1680} height={140} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={160} y={y + 86} text={label} size={44} color={on ? color : GREY_INK} weight={800} at={-100} />
			{tickAt !== undefined && f >= tickAt ? <DrawPath d={`M${215},${y + 70} L${232},${y + 90} L${262},${y + 50}`} at={tickAt} dur={12} color={TEAL} width={7} /> : null}
			{lines.map((l, i) => <Sx key={i} x={320} y={y + 58 + i * 52} text={l.text} size={38} color={on ? INK : GREY_INK} hand at={l.at} />)}
		</g>
	);
};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const all: T1 = {s: -100, x: -100, y: -100, d: -100};
	const mx: QMark[] = [{phrase: 'within 6 hours', at: KB.hours, color: TEAL}, {phrase: '8 mm', at: KB.only + 6, color: TEAL}];
	const my: QMark[] = [{phrase: 'after 48 hours', at: KB.after, color: AMBER}, {phrase: '45 mm', at: KB.late + 6, color: AMBER}];
	const mw = tw('more dead tissue = stronger defence', 30) + 48;
	return (
		<>
			<Heading text="Which response held it?" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<Table1 y={168} t={all} marksX={mx} marksY={my} s={0.7} x={130} w={2310} size={34} rowH={74} />
				<Row y={390} label="X" lines={[{text: 'callose early: walls plugged at entry', at: KB.plugged + 4}, {text: 'held near entry', at: KB.only}]} at={KB.x} tickAt={KB.x + 10} lit={vis(f, KB.x, KB.iny, 10)} color={TEAL} />
				<Row y={550} label="Y" lines={[{text: 'callose late: pathogen spread', at: KB.iny + 6}]} at={KB.iny} lit={vis(f, KB.iny, KB.choosing, 10)} color={AMBER_INK} />
				<MistakeChip x={130} y={740} text="more dead tissue = stronger defence" at={KB.choosing} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={746} text="longer dead zone: pathogen got further" at={KB.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- item 2: a stable dead spot ----------
type T2 = {a: number; b: number; c: number; claim: number; d: number};
const STEM2 = (t: T2) => [
	{text: 'A leaf is infected by a fungal pathogen that can feed only on living cells.', at: t.a},
	{text: 'Within hours of infection, the cells at and around the infection site die, leaving a small brown spot of dead cells.', at: t.b},
	{text: 'Over the next three weeks the spot stays the same size and the rest of the leaf stays green.', at: t.c},
] as QBlock[];
const CLAIM = (at: number) => [{text: '"The dead spot shows that the plant\'s defences have failed."', at}] as QBlock[];
const DEM2 = (t: T2) => [{text: "Evaluate the student's claim. (3 marks)", at: t.d, weight: 700}] as QBlock[];
const MARKS2 = ['can feed only on living cells', 'Within hours of infection', 'stays the same size', 'the rest of the leaf stays green'];
qCheck(STEM2({a: 0, b: 0, c: 0, claim: 0, d: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 12c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', leaf: 'A leaf is infected', within: 'Within hours', over: 'Over the next', student: 'A student says', evaluate: 'Evaluate the', pause: 'Pause here to answer'});
const ClaimBox: React.FC<{x: number; y: number; w: number; at: number; s?: number}> = ({x, y, w, at, s = 1}) => {
	const f = useCurrentFrame();
	return (
		<g transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			<g opacity={prog(f, at - 6, 12)}>
				<rect x={x} y={y} width={w} height={104} rx={16} fill="#fffaf0" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<Sx x={x + 26} y={y + 38} text="Student's claim" size={26} color={INK_SOFT} weight={700} at={-100} />
			</g>
			<QText q={qCheck(CLAIM(at), [])} x={x + 26} y={y + 82} w={w - 52} size={34} card={false} />
		</g>
	);
};
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.leaf, b: KC.within, c: KC.over, claim: KC.student, d: KC.evaluate};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<ClaimBox x={140} y={420} w={1200} at={t.claim} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={600} w={1640} size={36} card={false} />
				<AnsBox x={140} y={660} w={1340} h={340} at={KC.evaluate + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const KD = cues(S('feedback-two'), {claim: 'The claim', died: 'died within hours', stopped: 'stopped growing', hr: 'hypersensitive response', needs: 'needs living cells', fences: 'fences it in', rest: 'the rest of the leaf stays healthy', kept: 'kept spreading', reading: 'Reading every', mistake: 'classic mistake'});
const FRow: React.FC<{y: number; text: string; at: number; lit: number; color: string; grey?: boolean}> = ({y, text, at, lit, color, grey = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5 && !grey;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={120} y={y} width={1300} height={88} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<WText x={150} y={y + 58} text={text} size={38} maxW={1240} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const all: T2 = {a: -100, b: -100, c: -100, claim: -100, d: -100};
	const marks: QMark[] = [
		{phrase: 'Within hours of infection', at: KD.died, color: TEAL},
		{phrase: 'stays the same size', at: KD.stopped, color: TEAL},
		{phrase: 'can feed only on living cells', at: KD.needs, color: TEAL},
		{phrase: 'the rest of the leaf stays green', at: KD.rest, color: TEAL},
	];
	const mw = tw('dead cells = plant losing', 30) + 48;
	return (
		<>
			<Heading text="A firebreak, not a failure" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={172} at={-100} />
				<QText q={qCheck(STEM2(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<GTag x={1800} y={252} text={'claim: "the dead spot shows the defences have failed"'} at={-100} anchor="end" size={22} />
				<CTag x={120} y={340} text="claim: not supported" at={KD.claim + 6} color={TEAL} size={38} />
				<FRow y={440} text="hypersensitive response: rapid, deliberate cell death" at={KD.hr} lit={vis(f, KD.hr, KD.fences, 10)} color={TEAL} />
				<FRow y={550} text="pathogen fenced in" at={KD.fences} lit={vis(f, KD.fences, KD.kept, 10)} color={TEAL} />
				<FRow y={660} text="spreading spot: defence failing" at={KD.kept} lit={0} color={GREY_INK} grey />
				<PlateB p={PLATES.deadRing} cx={1620} cy={560} w={260} o={prog(f, KD.hr + 6, 14)} id="b05-s12d-ring" />
				<MistakeChip x={130} y={800} text="dead cells = plant losing" at={KD.reading} cross={KD.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={806} text="a stopped spot: the defence worked" at={KD.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', gets: 'how the pathogen gets in', which: 'which defences', evidence: 'what the evidence shows', next: 'Next, what happens'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.gets, text: 'how it gets in'},
		{at: KE.which, text: 'defences: always there, switched on, firebreak'},
		{at: KE.evidence, text: 'evidence: timing, and its limits'},
	];
	return (
		<>
			<Heading text="Entry, defences, evidence" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = 250 + i * 150;
					const dim = 1 - 0.35 * prog(f, steps[i + 1]?.at ?? KE.next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(0,${(1 - o) * 18})`}>
							<rect x={140} y={y} width={1640} height={110} rx={28} fill={i === 2 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={190} y={y + 72} text={`${i + 1}`} size={50} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={270} y={y + 74} text={s.text} size={46} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={820} w={1100} text="Next: first defences in an animal" at={KE.next} />
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Phytophthora cinnamomi is a water mould (oomycete), not a fungus. Swimming spores (zoospores) in wet soil reach roots; hyphae kill root tissue, so leaves yellow and wilt. Spread in water and soil on boots and tyres.',
	'Plants have no circulating immune cells, so each cell defends itself. Always there: lignin and suberin in older root cell walls, bark (the young root behind the tip is the weak point). Hyphae usually enter where two cells meet. Switched on after detection: callose plugs where hyphae push in, extra lignin, antimicrobial chemicals (phytoalexins).',
	'Hypersensitive response: cells at and around the infection die on purpose, so a pathogen that needs living cells is fenced in. A signal can prepare the rest of the plant.',
	'Evidence (Tynan, Scott and Sedgley, 1998, seedlings): scarlet banksia root tips dead in 1 day, stem by day 5, callose late; old man banksia damage from day 3, under halfway up the root by day 9. Timing differed. Limits: seedlings, laboratory, one study; tolerant is not immune.',
	'Control: hygiene (clean boots and tyres, close wet tracks); phosphite helps plants wall it off, but doesn\'t remove it from soil.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="The hypersensitive response is a firebreak." tag="speed decides whether the break holds" size={28} aidTop={800} />
);
