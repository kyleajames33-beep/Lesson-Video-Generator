// M8 C03a scenes 14 to 19: two worded attempts (the full question stays on screen through the countdown), brief
// feedback with the givens underlined as they are used and one crossed mistake each, the handoff to the anion
// video and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {BOTTLE, LABEL_A, RACK, hold, sc} from './common';
import {AChip, Fade, C_CL, C_FL, C_OH, C_SO, FlaskStates, GREYX, INK, INK_SOFT, KeyNotesBoard, MistakeX, Note, Overlay, PauseHold, PicF, QText, Sx, TaskLine, natPt, picW, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 14/15. Attempt 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', sep: 'Separate portions', results: 'these results', identify: 'Identify the', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Separate portions of a colourless solution containing one unknown cation were tested.', at: t[0]},
	{text: 'Dilute hydrochloric acid: no visible change.', at: t[1], para: true},
	{text: 'Dilute sulfuric acid: white precipitate.', at: t[1] + 10, para: true},
	{text: 'Flame test: pale green flame.', at: t[1] + 20, para: true},
	{text: 'Identify the cation present, and write a net ionic equation for the formation of the precipitate.', at: t[2], para: true},
] as QBlock[], marks);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={450} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K14.turn} />
		<Question1 t={[K14.sep, K14.results, K14.identify]} />
		<PauseHold h={hold(A1)} at={K14.pause} x={140} y={870} cx={1560} cy={860} />
	</Overlay>
);
const F1 = 'feedback-1';
const K15 = cues(sc(F1), {no: 'No chloride', silver: 'rules out silver', lead: 'dilute lead', white: 'The white sulfate', green: 'pale green flame', barium: 'identify barium', so: 'So barium plus', sulfate: ['sulfate', 3], calling: 'Calling it', slip: 'classic slip'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<Shrink k={0.6}>
			<Question1 t={[-100, -100, -100]} marks={[
				{phrase: 'Dilute hydrochloric acid: no visible change.', at: K15.silver - 10, color: C_CL},
				{phrase: 'white precipitate.', at: K15.white + 6, color: C_SO},
				{phrase: 'pale green flame.', at: K15.green, color: C_FL},
			]} />
		</Shrink>
		<Note x={QX} y={560} text="rules out Ag^{+}; dilute Pb^{2+} may pass" size={30} color={GREYX} hand={false} at={K15.silver} />
		<Note x={QX} y={610} text="Pb^{2+}: no useful flame colour" size={30} color={GREYX} hand={false} at={K15.green + 10} />
		<AChip x={QX} y={660} text="Cl^{−}: no ppt" size={32} color={C_CL} hand={false} at={K15.no} />
		<Note x={372} y={704} text="→" size={44} color={INK_SOFT} hand={false} at={K15.white} />
		<AChip x={410} y={660} text="SO_4^{2−}: white" size={32} color={C_SO} hand={false} at={K15.white} />
		<Note x={682} y={704} text="→" size={44} color={INK_SOFT} hand={false} at={K15.green} />
		<AChip x={720} y={660} text="flame: pale green" size={32} color={C_FL} hand={false} at={K15.green} />
		<AChip x={1400} y={650} text="cation: Ba^{2+}" size={44} color={INK} hand={false} at={K15.barium} />
		<Note x={QX} y={820} text="Ba^{2+}(aq) + SO_4^{2−}(aq) → BaSO_4(s)" size={50} color={C_SO} hand={false} at={K15.so + 6} />
		<MistakeX x={QX} y={880} text="Ca^{2+}: white sulfate" at={K15.calling} cross={K15.slip} note="the flame decides: Ca^{2+} is brick red" size={36} />
		{void K15.lead}{void K15.sulfate}
	</Overlay>
);

// ---------- 16/17. Attempt 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', student: 'A student adds', green: 'A green precipitate', ten: 'ten minutes', concludes: 'student concludes', evaluate: 'Evaluate this', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student adds sodium hydroxide solution to a pale green solution containing one unknown cation.', at: t[0]},
	{text: 'A green precipitate forms.', at: t[1]},
	{text: 'Ten minutes later, the student records a red-brown precipitate and concludes that the solution contains iron(III) ions.', at: t[2]},
	{text: "Evaluate the student's conclusion, and suggest one test that would confirm the identity of the cation.", at: t[3], para: true},
] as QBlock[], marks);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={540} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K16.last} />
		<Question2 t={[K16.student, K16.green, K16.ten, K16.evaluate]} />
		<PauseHold h={hold(A2)} at={K16.pause} x={140} y={870} cx={1560} cy={860} />
		{void K16.concludes}
	</Overlay>
);
const F2 = 'feedback-2';
const K17 = cues(sc(F2), {first: 'first colour', green: 'A green precipitate', brown: 'turned brown', oxygen: 'oxygen in', oxidised: 'oxidised', cation: 'the cation is', wrong: 'wrong', confirm: 'To confirm', scn: 'add thiocyanate', fresh: 'fresh portion', no: 'no blood red', rules: 'rules out', trusting: 'Trusting the', trap: 'trap'});
export const SceneFeedback2: React.FC = () => {
	const TX = 1560, TY = 520, TH = 330;
	const tw = picW(RACK.feoh2, TH);
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: 'A green precipitate forms.', at: K17.green, color: C_OH},
					{phrase: 'Ten minutes later,', at: K17.wrong - 6, color: GREYX},
					{phrase: 'red-brown precipitate', at: K17.wrong, color: '#7a4a1a'},
					{phrase: 'concludes that the solution contains iron(III) ions.', at: K17.rules, color: '#c4432f'},
				]} />
			</Shrink>
			<Fade at={K17.green}><FlaskStates x={TX} y={TY} h={TH} states={[{p: RACK.feoh2, at: K17.green}, {p: RACK.brown, at: K17.brown, dur: 30}]} /></Fade>
			<Note x={TX + tw / 2} y={TY + TH + 44} text="air oxidises Fe^{2+}" size={28} color="#7a4a1a" anchor="middle" hand={false} at={K17.oxidised} />
			<Note x={QX} y={580} text="green ppt = Fe(OH)_2" size={36} color={C_OH} hand={false} at={K17.green + 10} />
			<AChip x={QX} y={630} text="cation: Fe^{2+}; the conclusion is wrong" size={40} color={INK} hand={false} at={K17.cation} />
			<Note x={QX} y={780} text="fresh portion + KSCN: no blood red → not Fe^{3+}" size={36} color="#a3141c" hand={false} at={K17.scn} />
			<MistakeX x={QX} y={840} text="Fe^{3+}: it ended red-brown" at={K17.trusting} cross={K17.trap} note="read the colour at once" size={36} />
			{void K17.first}{void K17.oxygen}{void K17.confirm}{void K17.fresh}{void K17.no}
		</Overlay>
	);
};

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So the cation', sort: 'precipitates to sort', confirm: 'flame or', next: 'Next', anion: 'anion'});
export const SceneHandoff: React.FC = () => {
	const BH = 420, bw = picW(BOTTLE, BH), BX = 1300 - bw / 2, BY = 300;
	const [lx, ly] = natPt(BOTTLE, BX, BY, BH, LABEL_A.cx, LABEL_A.cy);
	return (
		<Overlay>
			<Note x={96} y={170} text="Cl^{−} → SO_4^{2−} → OH^{−} → flame" size={44} color={C_CL} hand={false} at={4} />
			<Note x={96} y={360} text="precipitates to sort" size={48} color={INK} at={K18.sort} />
			<Note x={96} y={440} text="then a flame or a complex to confirm" size={48} color={INK} at={K18.confirm} />
			<PicF p={BOTTLE} x={BX} y={BY} h={BH} />
			<Sx x={lx} y={ly - 6} text="Cu^{2+}" size={44} color={INK} anchor="middle" weight={800} at={K18.so} />
			<Sx x={lx} y={ly + 44} text="and?" size={44} color="#c4432f" anchor="middle" hand weight={700} at={K18.next} />
			<AChip x={1300} y={800} text="Next: identifying the anion" size={50} color={C_OH} anchor="middle" at={K18.next} />
			{void K18.anion}
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Sort with precipitates in order, a fresh portion each time. Dilute HCl: white = Ag^{+} or Pb^{2+}. Dilute H_2SO_4: white = Ba^{2+} (or Ca^{2+} if concentrated, or Pb^{2+} if dilute lead slipped through). NaOH: Cu^{2+} pale blue, Fe^{3+} red-brown, Fe^{2+} green (browns in air), Mg^{2+} white (stays in excess).',
	"Flame tests support, they don't prove: Ba^{2+} pale green, Ca^{2+} brick red, Cu^{2+} blue-green; Mg^{2+} and Pb^{2+} no useful colour. Sodium's yellow can mask; clean the loop.",
	'Confirm with different chemistry: AgCl dissolves in dilute NH_3; Pb^{2+} + 2I^{−} → PbI_2(s), bright yellow; Cu^{2+} + excess NH_3 → deep blue [Cu(NH_3)_4]^{2+}; Fe^{3+} + SCN^{−} → blood red FeSCN^{2+}.',
	'Equations: Ag^{+} + Cl^{−} → AgCl(s); Ba^{2+} + SO_4^{2−} → BaSO_4(s); Cu^{2+} + 2OH^{−} → Cu(OH)_2(s); Fe^{3+} + 3OH^{−} → Fe(OH)_3(s).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={33} aidTop={760} aids={['chloride → sulfate → hydroxide → flame', 'green → brown = iron(II), read late']} tag="one unknown cation per sample; a fresh portion for each test" />
);
