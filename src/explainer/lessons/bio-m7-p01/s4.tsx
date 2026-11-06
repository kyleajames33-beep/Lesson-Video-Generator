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
import {AMBER, AMBER_INK, CARD, ContactSheet, Cup, DrawPath, Dropper, EDGE, GREEN, GREY_INK, GTag, INK, LetterChip, MistakeChip, PINK, PINKS, Sx, TEAL, TRow, WellPlate, cupH, prog, smooth, tRowH, tw, vis} from './parts';

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
/** Six clear cups under letter chips (the question's students), drawn whole with the card. */
const SixCups: React.FC<{x: number; y: number; w: number; dx: number; at: number}> = ({x, y, w, dx, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{['P', 'Q', 'R', 'S', 'T', 'U'].map((t, i) => (
				<g key={t}>
					<Cup cx={x + i * dx} cy={y} w={w} />
					<LetterChip x={x + i * dx} y={y - cupH(w) / 2 - 30} t={t} size={26} />
				</g>
			))}
		</g>
	);
};
export const SceneAttemptOne: React.FC = () => {
	const c = KA.turn + 6;
	const t: T1 = {a: c, b: c, r: c, qa: c, qb: c};
	const h = hold('attempt-1');
	return (
		<>
			<Heading text="Exam question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1640} size={33} card={false} />
				<PairsTable x={140} y={320} at={c} colAt={[c, c]} s={0.92} />
				<SixCups x={860} y={445} w={100} dx={150} at={c} />
				<QText q={qCheck(RES1(t), [])} x={140} y={570} w={1640} size={33} card={false} />
				<AnsBox x={140} y={790} w={1340} h={220} at={c} />
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
	const f = useCurrentFrame();
	const c = KC.class + 6;
	const t: T2 = {a: c, b: c, q: c};
	const h = hold('attempt-2');
	const o = prog(f, c, 12);
	return (
		<>
			<Heading text="Exam question 2" at={KC.class} size={50} />
			<Overlay>
				<HscTag at={KC.class} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck([...STEM2(t), ...DEM2(t)], [])} x={140} y={250} w={1640} size={34} card={false} />
				<g opacity={o}>
					{Array.from({length: 8}, (_, i) => <Cup key={i} cx={190 + i * 92} cy={560} w={66} pink={1} />)}
					<Sx x={930} y={576} text="after round 3: all eight cups pink" size={30} color={PINK} hand weight={700} at={-100} />
				</g>
				<AnsBox x={140} y={650} w={1340} h={360} at={c} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

/** The model's result as cups: infected 1, 2, 4, 8 by round (each pink cup met a clear one), so all eight end pink;
 * on "Real contacts don't" a clear cup with a broken pour shows a contact that doesn't transmit. */
const CupGrowth: React.FC<{x: number; y: number; at: number; every: number; real: number}> = ({x, y, at, every, real}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const counts = [1, 2, 4, 8];
	const W = 460;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={W} height={430} rx={20} fill="#fffdf8" stroke={EDGE} strokeWidth={3} />
			<Sx x={x + 24} y={y + 44} text="the model, round by round" size={30} color={INK} hand weight={700} at={-100} />
			{counts.map((n, r) => {
				return (
					<g key={r}>
						<Sx x={x + 24} y={y + 108 + r * 78} text={r === 0 ? 'start' : `round ${r}`} size={24} color={GREY_INK} weight={700} at={-100} />
						{Array.from({length: 8}, (_, i) => <Cup key={i} cx={x + 168 + i * 37} cy={y + 98 + r * 78} w={34} pink={i < n ? 1 : 0} />)}
					</g>
				);
			})}
			<Sx x={x + W / 2} y={y + 408} text="infected: 1, 2, 4, 8" size={30} color={PINK} hand weight={700} anchor="middle" at={every + 40} />
			{void real}
		</g>
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
	const RW = 1220;
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
					y += tRowH(r.t, 32, RW) + 14;
					return <TRow key={i} x={120} y={y0} w={RW} text={r.t} at={r.at} lit={lit(r.at, r.end)} color={r.c} size={32} />;
				})}
				<CupGrowth x={1360} y={400} at={4} every={KD.every} real={KD.real} />
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
// Each plan row has its apparatus in the right panel, crossfading on the row's cue: the hidden marker and both
// controls (dropper, a clear minus cup and a pink plus cup), the recorded contacts and saved samples (contact sheet and
// well plate), a repeat with a new starter (a cup row with a different outlined starter), and who, when, how (the
// filled well plate). The panel is there from the first frame, so the board is never one lone row.
const PX = 1330, PW = 520;
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const at = PLAN.map(p => KE[p.k]);
	const stage = (i: number) => vis(f, i === 0 ? -100 : at[i], i === 1 ? at[2] : i === 2 ? at[3] : i === 0 ? at[1] : 1e9, 12);
	const s4 = vis(f, at[3], 1e9, 12);
	let y = 210;
	return (
		<>
			<Heading text="Plan it, then claim only what it shows" at={4} size={50} />
			<Overlay>
				{PLAN.map((p, i) => {
					const end = PLAN[i + 1] ? at[i + 1] : 1e9;
					const on = vis(f, at[i], end, 10) > 0.5;
					const y0 = y;
					y += tRowH(p.t, 34, 1150) + 16;
					return <TRow key={i} x={110} y={y0} w={1150} text={`${i + 1}  ${p.t}`} at={at[i]} lit={on ? 1 : 0} color={AMBER_INK} size={34} />;
				})}
				<rect x={PX} y={210} width={PW} height={620} rx={22} fill="#fffdf8" stroke={EDGE} strokeWidth={3} opacity={prog(f, 0, 12)} />
				<g opacity={stage(0)}>
					<Dropper cx={PX + 130} cy={440} h={260} />
					<Cup cx={PX + 300} cy={560} w={120} />
					<Cup cx={PX + 430} cy={560} w={120} pink={smooth(prog(f, 20, 20))} />
					<Sx x={PX + 300} y={680} text="− water" size={30} color={GREEN} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + 430} y={680} text="+ base" size={30} color={GREEN} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + PW / 2} y={780} text="hidden marker, two controls" size={30} color={INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={stage(1)}>
					<ContactSheet g={{cx: PX + 140, cy: 470, w: 250}} at={-100} colAt={[-100, -100, -100]} />
					<WellPlate g={{cx: PX + 380, cy: 470, w: 250}} id="p01-dr1" at={-100} labels={false} letters={false} rowAt={[at[1] + 30, at[1] + 40, at[1] + 50, at[1] + 60]} />
					<Sx x={PX + 140} y={680} text="contacts" size={30} color={INK} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + 380} y={680} text="saved samples" size={30} color={INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={stage(2)}>
					{Array.from({length: 8}, (_, i) => <Cup key={i} cx={PX + 50 + (i % 4) * 140} cy={380 + Math.floor(i / 4) * 170} w={84} outline={i === 6 ? 1 : 0} />)}
					<Sx x={PX + PW / 2} y={720} text="run 2: a new secret starter" size={30} color={INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={s4}>
					<WellPlate g={{cx: PX + PW / 2, cy: 420, w: 440}} id="p01-dr2" at={-100} labels={false} letters rowAt={[-100, -100, -100, -100]} size={20} />
					{[['who', 'last test', at[3] + 30], ['when', 'saved samples', at[3] + 60], ['how', 'contacts', at[3] + 104]].map(([a, b, t], i) => (
						<Sx key={i} x={PX + 40} y={640 + i * 52} text={`${a}: ${b}`} size={32} color={AMBER_INK} hand weight={700} at={t as number} />
					))}
				</g>
				<NextChip x={720} y={880} w={1100} text="Next: microbial testing of water or food" at={KE.next}>
					<circle cx={782} cy={922} r={26} fill="#f6efd9" stroke="#b9b2a4" strokeWidth={3} />
					<circle cx={772} cy={916} r={4} fill="#d9a441" /><circle cx={790} cy={928} r={3} fill="#d9a441" />
				</NextChip>
				{void CARD}{void AMBER}{void PINKS}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	"Epidemic: a rise in cases above what's expected in a population.",
	'Model: cup = person, mixing = direct contact, dilute base = pathogen, indicator = test.',
	'Secret starter; new partner each round; all in, half back; record every partner.',
	'Save a sample before round 1 and after each round; repeat with a new starter.',
	'Controls: water stays clear (−); base turns pink (+).',
	'Cases grow 1, 2, 4, 8 because each pink cup meets a clear one.',
	'Limits: every contact transmits; no delay, recovery or immunity.',
	'Safety: glasses; teacher adds the indicator (flammable); never taste.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="The last test shows who; the saved samples show when; the contacts show how." tag="Hidden marker, both controls, recorded contacts, saved samples, repeat runs." size={34} aidTop={720} />
);
