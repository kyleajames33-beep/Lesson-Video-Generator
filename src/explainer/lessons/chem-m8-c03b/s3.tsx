// M8 C03b scenes 12 to 17: two worded attempts (the full question stays on screen through the countdown), brief
// feedback with the givens underlined as they are used and one crossed mistake each, the handoff (copper sulfate;
// the practical next) and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {BOTTLE, LABEL_A, TUBES, hold, sc} from './common';
import {AChip, Fade, AmmLadder, C_AC, C_AG, C_BA, C_CX, GREYX, INK, INK_SOFT, ION, KeyNotesBoard, LockLens, MistakeX, Note, Overlay, PauseHold, PicF, QText, Sx, TaskLine, natPt, picW, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';
import {Anions} from './s1';

const QX = 140, QW = 1640;

// ---------- 12/13. Attempt 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', student: 'A student', adding: 'then adding', explain: 'Explain why', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'To test an unknown solution for chloride ions, a student acidifies a portion with dilute hydrochloric acid and then adds silver nitrate solution.', at: t[0]},
	{text: 'A white precipitate forms, and the student concludes that the solution contains chloride ions.', at: t[1]},
	{text: 'Explain why this conclusion is not valid, and describe how the test should be carried out.', at: t[2], para: true},
] as QBlock[], marks);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={400} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.student, K12.adding, K12.explain]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={800} cx={1560} cy={800} />
	</Overlay>
);
const F1 = 'feedback-1';
const K13 = cues(sc(F1), {hcl: 'hydrochloric', own: 'own chloride', white: 'white silver chloride', not: 'not', acidify: 'Acidify', nitric: 'nitric', silver: 'silver nitrate', wppt: 'white precipitate', dissolves: 'dissolves', supports: 'supports', chloride: ['chloride', 4], thinking: 'Thinking', slip: 'slip'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<Shrink k={0.6}>
			<Question1 t={[-100, -100, -100]} marks={[
				{phrase: 'dilute hydrochloric acid', at: K13.hcl, color: '#c4432f'},
				{phrase: 'silver nitrate solution.', at: K13.silver, color: C_AG},
				{phrase: 'concludes that the solution contains chloride ions.', at: K13.chloride, color: C_CX},
			]} />
		</Shrink>
		<LockLens cx={1560} cy={600} r={130} at={K13.own - 10} cat={ION.AG} an={ION.CL} n={3} arrive={K13.own + 10} lockAt={K13.white + 10} every={12} title="HCl adds Cl^{−}" />
		<Note x={QX} y={500} text="HCl adds Cl^{−}: white AgCl forms either way" size={34} color="#c4432f" hand={false} at={K13.not} />
		<AChip x={QX} y={560} text="fresh portion + dilute HNO_3, then AgNO_3" size={38} color={C_AC} hand={false} at={K13.nitric} />
		<Note x={QX} y={700} text="white ppt, dissolves in dilute NH_3 → Cl^{−}" size={36} color={INK} hand={false} at={K13.dissolves} />
		<MistakeX x={QX} y={780} text="any acid works: it only removes CO_3^{2−}" at={K13.thinking} cross={K13.slip} note="the acid must add nothing you're testing for" size={34} />
		{void K13.acidify}{void K13.wppt}{void K13.supports}
	</Overlay>
);

// ---------- 14/15. Attempt 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', sep: 'Separate portions', results: 'these results', identify: 'Identify the', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Separate portions of a colourless solution containing one unknown anion were tested.', at: t[0]},
	{text: 'Dilute nitric acid: no effervescence.', at: t[1], para: true},
	{text: 'Dilute nitric acid, then barium nitrate solution: no visible change.', at: t[1] + 10, para: true},
	{text: 'Dilute nitric acid, then silver nitrate solution: cream precipitate. The precipitate dissolved in concentrated ammonia solution but not in dilute ammonia solution.', at: t[1] + 20, para: true},
	{text: 'Identify the anion, and write a net ionic equation for the formation of the precipitate.', at: t[2], para: true},
] as QBlock[], marks);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={560} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.sep, K14.results, K14.identify]} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={880} cx={1560} cy={870} />
	</Overlay>
);
const F2 = 'feedback-2';
const K15 = cues(sc(F2), {no: 'No fizz', carb: 'carbonate', ba: 'no barium', sulf: 'sulfate', cream: 'cream', conc: 'concentrated', br: 'bromide', so: 'So silver', br3: ['bromide', 3], calling: 'Calling', iodide: 'iodide', trap: 'trap'});
export const SceneFeedback2: React.FC = () => (
	<>
		<Anions st={{'CO_3^{2−}': {x: K15.carb}, 'SO_4^{2−}': {x: K15.sulf}, 'Br^{−}': {g: [[K15.br, 754]]}}} />
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100]} marks={[
					{phrase: 'no effervescence.', at: K15.no + 6, color: C_AC},
					{phrase: 'no visible change.', at: K15.ba, color: C_BA},
					{phrase: 'cream precipitate.', at: K15.cream, color: C_AG},
					{phrase: 'dissolved in concentrated ammonia solution but not in dilute ammonia solution.', at: K15.conc, color: C_CX},
				]} />
			</Shrink>
			<AmmLadder x={1240} y={640} w={[K15.conc, K15.conc, K15.conc]} lit={[undefined as unknown as number, K15.br]} size={28} at={K15.conc - 10} />
			<AChip x={QX} y={600} text="anion: Br^{−}" size={44} color={INK} hand={false} at={K15.br} />
			<Note x={QX} y={780} text="Ag^{+}(aq) + Br^{−}(aq) → AgBr(s)" size={50} color={INK} hand={false} at={K15.so + 6} />
			<MistakeX x={QX} y={850} text="I^{−}: it looked yellowish" at={K15.calling} cross={K15.trap} note="AgI doesn't dissolve, even in concentrated NH_3" size={36} />
			{void K15.iodide}{void K15.br3}{void GREYX}
		</Overlay>
	</>
);

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {bottle: 'bottle', barium: 'acidified barium', white: 'white precipitate', sulfate: 'sulfate', cation: 'Cation', named: 'named the salt', next: 'Next'});
export const SceneHandoff: React.FC = () => {
	const BH = 420, bw = picW(BOTTLE, BH), BX = 960 - bw / 2, BY = 300;
	const [lx, ly] = natPt(BOTTLE, BX, BY, BH, LABEL_A.cx, LABEL_A.cy);
	return (
		<Overlay>
			<Note x={96} y={170} text="acid first, adding none of the ions you're testing for" size={40} color={C_AC} at={4} />
			<PicF p={BOTTLE} x={BX} y={BY} h={BH} />
			<Sx x={lx} y={ly + 14} text="Cu^{2+} + ?" size={42} color={INK} anchor="middle" weight={800} at={-100} out={K16.sulfate} />
			<Sx x={lx} y={ly + 14} text="CuSO_4" size={50} color={C_BA} anchor="middle" weight={800} at={K16.sulfate} />
			<Fade at={K16.white - 6}><PicF p={TUBES.baso4} x={1180} y={420} h={300} /></Fade>
			<Note x={1180 + 81} y={760} text="acidified Ba^{2+}: white" size={26} color={INK_SOFT} anchor="middle" hand={false} at={K16.white} />
			<Note x={96} y={420} text="cation, then anion:" size={46} color={INK} at={K16.cation} />
			<Note x={96} y={490} text="you've named the salt" size={46} color={INK} at={K16.named} />
			<AChip x={960} y={840} text="Next: identifying unknown ions (practical)" size={46} color={C_CX} anchor="middle" at={K16.next} />
			{void K16.bottle}{void K16.barium}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Dilute acid first. CO_3^{2−}: fizzes, CO_2 turns limewater milky (CO_3^{2−} + 2H^{+} → CO_2 + H_2O). CH_3COO^{−}: no fizz, vinegar smell on warming; neutral FeCl_3 gives a red-brown complex.',
	'Barium and halides: acid first, to remove carbonate. Use dilute HNO_3 for the halide test (HCl adds Cl^{−}). SO_4^{2−}: acidified Ba^{2+} gives white BaSO_4(s) that stays in acid.',
	'Halides: acidified AgNO_3. AgCl white (dissolves in dilute NH_3), AgBr cream (concentrated NH_3), AgI pale yellow (neither). Ag^{+} + X^{−} → AgX(s).',
	'PO_4^{3−}: a separate neutral portion; AgNO_3 gives yellow Ag_3PO_4(s), which dissolves in dilute HNO_3. OH^{−}: test last (CO_3^{2−} and PO_4^{3−} are basic too); warm with NH_4^{+}, NH_3 turns damp red litmus blue.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={32} aidTop={690} aids={["Barium and halides: acid first, adding none of the ions you're testing for.", 'Phosphate: a separate neutral portion.', 'White, cream, pale yellow: dilute, concentrated, neither.']} tag="one unknown anion per sample; a fresh portion for each test" />
);
