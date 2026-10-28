// M7 P01 (Biology practical) scenes 12a to 14: two unseen exam items (six students and two rounds of pairs, with a
// two-column pairs table; a student's claim about real spread), each whole on screen through "Pause here to answer."
// and its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined as they are used, a
// small answer table or three rows, and one crossed classic mistake (no givens card); the plan card with the handoff;
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, DrawPath, EDGE, GREEN, GREY_INK, GTag, INK, MistakeChip, Sx, TEAL, TRow, prog, tRowH, tw, vis} from './parts';

// ---------- item 1: six students ----------
type T1 = {a: number; b: number; r: number; qa: number; qb: number};
const STEM1 = (t: T1): QBlock[] => [
	{text: "Six students, P, Q, R, S, T and U, ran a disease transmission simulation. One student's cup secretly contained the 'infection'.", at: t.a},
];
const RES1 = (t: T1): QBlock[] => [
	{text: 'After round 2, indicator was added to every cup. Pink (infected): P, Q, R, T. Clear: S, U.', at: t.r},
	{text: '(a) Identify the student or students who could have started the infection. Justify your answer. (3 marks)', at: t.qa, weight: 700, para: true},
	{text: '(b) Propose ONE change to the method that would identify the starter. (1 mark)', at: t.qb, weight: 700, para: true},
];
const ALL1: T1 = {a: -100, b: -100, r: -100, qa: -100, qb: -100};
qCheck([...RES1(ALL1)], [{phrase: '(b)', at: 0}]);
const PT = [['P with Q', 'P with R'], ['R with S', 'Q with T'], ['T with U', 'S with U']];
/** The pairs table: two columns (round 1, round 2), three rows; `mark` underlines cells keyed 'row,col'. */
const PairsTable: React.FC<{x: number; y: number; at: number; colAt?: number[]; s?: number; mark?: Record<string, number>}> = ({x, y, at, colAt = [-100, -100], s = 1, mark = {}}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const cw = 300, rh = 52;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={0} width={cw * 2} height={rh * 4} rx={12} fill={CARD} stroke={INK} strokeWidth={2.5} />
			{[1, 2, 3].map(i => <line key={i} x1={0} x2={cw * 2} y1={rh * i} y2={rh * i} stroke={EDGE} strokeWidth={2} />)}
			<line x1={cw} x2={cw} y1={0} y2={rh * 4} stroke={EDGE} strokeWidth={2} />
			{['Round 1 pairs', 'Round 2 pairs'].map((h, c) => <text key={h} x={c * cw + cw / 2} y={rh * 0.66} textAnchor="middle" opacity={prog(f, colAt[c], 10)} style={{fontFamily: '"Inter Tight"', fontWeight: 700, fontSize: 28}} fill={INK}>{h}</text>)}
			{PT.map((r, ri) => r.map((c, ci) => <text key={ri + '-' + ci} x={ci * cw + cw / 2} y={rh * (ri + 1) + rh * 0.66} textAnchor="middle" opacity={prog(f, colAt[ci] + ri * 8, 10)} style={{fontFamily: '"Inter Tight"', fontWeight: 600, fontSize: 28}} fill={INK}>{c}</text>))}
			{Object.entries(mark).map(([k, m]) => {
				const [ri, ci] = k.split(',').map(Number);
				const w = tw(PT[ri][ci], 28) + 16, cx = ci * cw + cw / 2, yy = rh * (ri + 1) + rh * 0.84;
				return f >= m ? <DrawPath key={k} d={`M${cx - w / 2},${yy} L${cx + w / 2},${yy}`} at={m} dur={12} color={AMBER} width={5} /> : null;
			})}
		</g>
	);
};
const KA = cues(S('attempt-1'), {turn: 'Your turn', six: 'Six students ran', r1: 'In round one', r2: 'In round two', end: 'At the end', identify: 'Identify which student', propose: 'Then propose one', pause: 'Pause here to answer'});
export const SceneAttemptOne: React.FC = () => {
	const t: T1 = {a: KA.six, b: -100, r: KA.end, qa: KA.identify, qb: KA.propose};
	const h = hold('attempt-1');
	return (
		<>
			<Heading text="Exam question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.turn + 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1640} size={33} card={false} />
				<PairsTable x={140} y={320} at={KA.r1 - 6} colAt={[KA.r1, KA.r2]} s={0.92} />
				<QText q={qCheck(RES1(t), [])} x={140} y={570} w={1640} size={33} card={false} />
				<AnsBox x={140} y={790} w={1340} h={220} at={KA.propose + 40} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

const KB = cues(S('feedback-1'), {only: 'Only P or', ifp: 'If P started', q: 'Starting with Q', r: 'R or T would', cant: "You can't tell", test: 'test a sample', saying: 'Saying P', classic: 'classic mistake'});
const ATAB = [
	{c: ['P', 'P, Q, R, T', 'yes'], k: 'ifp' as const},
	{c: ['Q', 'Q, P, T, R', 'yes'], k: 'q' as const},
	{c: ['R or T', 'S or U pink too', 'no'], k: 'r' as const},
];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: '(b)', at: KB.test, color: TEAL}];
	const mtext = 'P: listed first';
	const mw = tw(mtext, 30) + 48;
	const CX = [140, 480, 980], TY = 470, RH = 64;
	return (
		<>
			<Heading text="P or Q, then a saved start sample" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={280} at={-100} />
				<QText q={qCheck([...STEM1(ALL1), ...RES1(ALL1)].map(b => ({...b, para: false})), marks)} x={140} y={192} w={1900} size={33} card={false} s={0.6} />
				<PairsTable x={1300} y={180} at={-100} s={0.8} mark={{'0,0': KB.ifp, '0,1': KB.ifp + 10, '1,1': KB.ifp + 16, '1,0': KB.r, '2,1': KB.r + 10}} />
				<g opacity={prog(f, KB.only, 12)}>
					{['starter?', 'infected after round 2', 'matches?'].map((h, i) => <Sx key={h} x={CX[i]} y={TY} text={h} size={28} color={GREY_INK} weight={800} at={-100} />)}
					<line x1={120} x2={1300} y1={TY + 16} y2={TY + 16} stroke={EDGE} strokeWidth={2} />
				</g>
				{ATAB.map((r, i) => {
					const at = KB[r.k] + 10;
					const lit = vis(f, at, ATAB[i + 1] ? KB[ATAB[i + 1].k] + 10 : KB.cant, 10) > 0.5;
					return r.c.map((c, ci) => <Sx key={i + '-' + ci} x={CX[ci]} y={TY + 64 + i * RH} text={c} size={34} color={ci === 2 ? (c === 'yes' ? GREEN : '#c0643f') : lit ? INK : GREY_INK} hand weight={700} at={at + ci * 6} />);
				})}
				<Sx x={140} y={TY + 64 + 3 * RH} text="S, U: clear, so not the starter" size={26} color={GREY_INK} weight={600} at={KB.r + 40} />
				<TRow x={120} y={760} w={1680} text="(b) save and test a sample from each cup before round 1" at={KB.test + 6} lit={vis(f, KB.test + 6, 1e9, 10)} color={TEAL} size={34} />
				<MistakeChip x={130} y={900} text={mtext} at={KB.saying} cross={KB.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={906} text="order on the list isn't evidence" at={KB.classic + 16} size={26} />
				{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- item 2: the claim ----------
type T2 = {a: number; b: number; q: number};
const STEM2 = (t: T2): QBlock[] => [
	{text: 'A class of eight students ran the disease transmission simulation for three rounds. Each student mixed with a different partner in each round. After round 3, all eight cups were pink.', at: t.a},
	{text: "A student concluded: 'The model shows that a real disease would infect everyone in a class within three rounds of contact.'", at: t.b, para: true},
];
const DEM2 = (t: T2): QBlock[] => [{text: 'Assess this conclusion. (3 marks)', at: t.q, weight: 700, para: true}];
const ALL2: T2 = {a: -100, b: -100, q: -100};
const M2 = ['a real disease would infect everyone', 'Each student mixed with a different partner in each round'];
qCheck([...STEM2(ALL2), ...DEM2(ALL2)], M2.map(phrase => ({phrase, at: 0})));
const KC = cues(S('attempt-2'), {class: 'A class of', wrote: 'A student wrote', assess: 'Assess this claim', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.class, b: KC.wrote, q: KC.assess};
	const h = hold('attempt-2');
	return (
		<>
			<Heading text="Exam question 2" at={KC.class} size={50} />
			<Overlay>
				<HscTag at={KC.class} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.class + 6} />
				<QText q={qCheck([...STEM2(t), ...DEM2(t)], [])} x={140} y={250} w={1640} size={34} card={false} />
				<AnsBox x={140} y={640} w={1340} h={370} at={KC.assess + 20} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

const KD = cues(S('feedback-2'), {over: 'The claim overreaches', every: 'every contact transmits', real: "Real contacts don't", does: 'The model does', calling: 'Calling it useless', classic: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'a real disease would infect everyone', at: KD.over, color: AMBER},
		{phrase: 'Each student mixed with a different partner in each round', at: KD.every, color: AMBER},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mtext = "useless: chemicals aren't germs";
	const mw = tw(mtext, 30) + 48;
	const rows = [
		{t: 'model: every contact transmits; each pink cup met a clear one; doubling', at: KD.every + 10, end: KD.does, c: AMBER_INK},
		{t: 'real: not every contact transmits; some immune; delay before spreading; uneven mixing', at: KD.real + 10, end: KD.does, c: AMBER_INK},
		{t: 'valid for: how linked contacts multiply cases', at: KD.does + 8, end: 1e9, c: GREEN},
	];
	let y = 440;
	return (
		<>
			<Heading text="Overreaches, but shows linking" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck([...STEM2(ALL2), ...DEM2(ALL2)].map(b => ({...b, para: false})), marks)} x={140} y={192} w={2600} size={34} card={false} s={0.62} />
				<Sx x={130} y={410} text="overreaches" size={48} color={AMBER_INK} hand weight={700} at={KD.over + 6} />
				{rows.map((r, i) => {
					const y0 = y + 20;
					y += tRowH(r.t, 32, 1680) + 14;
					return <TRow key={i} x={120} y={y0} w={1680} text={r.t} at={r.at} lit={lit(r.at, r.end)} color={r.c} size={32} />;
				})}
				<MistakeChip x={130} y={900} text={mtext} at={KD.calling} cross={KD.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={906} text="judge how it works, not what it's made of" at={KD.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {hidden: 'a hidden marker', recorded: 'recorded contacts', repeat: 'repeat runs', last: 'The last test', claim: 'Claim only what', next: 'Next testing a'});
const PLAN = [
	{t: 'A hidden marker (indicator); negative and positive controls.', k: 'hidden' as const},
	{t: 'Record every contact; save a sample before round 1 and after each round.', k: 'recorded' as const},
	{t: 'Repeat with a new starter.', k: 'repeat' as const},
	{t: 'The last test shows who; the saved samples show when; the contacts show how.', k: 'last' as const},
	{t: 'Valid for how contacts link cases, not for predicting real speed.', k: 'claim' as const},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Plan it, then claim only what it shows" at={4} size={50} />
			<Overlay>
				{PLAN.map((p, i) => {
					const at = KE[p.k];
					const end = PLAN[i + 1] ? KE[PLAN[i + 1].k] : 1e9;
					const on = vis(f, at, end, 10) > 0.5;
					const o = prog(f, at, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * (on ? 1 : 0.7)} transform={`translate(${(1 - o) * 18},0)`}>
							<rect x={140} y={220 + i * 120} width={1640} height={100} rx={28} fill={on ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={on ? 5 : 3} />
							<Sx x={180} y={286 + i * 120} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={250} y={284 + i * 120} text={p.t} size={i === 3 ? 38 : 36} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={860} w={1100} text="Next: microbial testing of water or food" at={KE.next}>
					<circle cx={782} cy={902} r={26} fill="#f6efd9" stroke="#b9b2a4" strokeWidth={3} />
					<circle cx={772} cy={896} r={4} fill="#d9a441" /><circle cx={790} cy={908} r={3} fill="#d9a441" />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	"Epidemic: a rise in cases above what's expected in a population. Model: a simplified version of something real. In the simulation, cup = person, mixing = contact (direct), dilute sodium carbonate (a base) = pathogen, phenolphthalein indicator (pink in base) = test.",
	'Method: 10 mL each; secret starter; new partner each round; pour all in, half back; save a sample in a well plate before round 1 and after each round; record partners on a contact sheet. Keep volumes, pours and drops the same. Negative control (unmixed water: stays clear); positive control (base: turns pink). Check the traced starter against the teacher\'s record (accuracy); repeat with a new starter (reliability).',
	'The final test shows who is infected, not who was first; saved samples and recorded contacts trace the source. Real outbreaks use when symptoms began, and contact tracing (finding who each case met).',
	'Epidemic curve: new cases against time. Person-to-person: cases grow round by round (new cases 1, 1, 2, 4 here; infected 1, 2, 4, 8, because each pink cup met a clear one). One shared source: one sharp peak. Indirect contact: fluorescent powder on a fomite, seen with a UV torch.',
	'Limits: every contact transmits; the marker dilutes rather than multiplies (false negatives); no delay, recovery or immunity; equal scheduled contacts. Valid for how contacts link cases, not for predicting real speed.',
	'Safety: safety glasses; the teacher adds the indicator (flammable; may cause cancer); no flames; never taste; UV away from eyes.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="The last test shows who; the saved samples show when; the contacts show how." tag="Hidden marker, both controls, recorded contacts, saved samples, repeat runs." size={26} aidTop={850} />
);
