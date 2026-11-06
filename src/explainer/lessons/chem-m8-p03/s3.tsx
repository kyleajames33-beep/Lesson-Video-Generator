// M8 P03 scenes 12 to 17: two worded attempts (the full question arrives with its card and stays through the countdown;
// four blue-green flames beside attempt 1, unknown E's bottle beside attempt 2), brief feedback with the givens
// underlined as they are used and one crossed slip each (feedback 1: copper carried from flame to flame, the fix rail,
// the blank flame and the Cu(OH)2 confirmation; feedback 2: the calcium flame, the dissolving AgCl, the equation), the
// decision rule and handoff (four rows; bottle C and two copper cuvettes: how much?) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {FixRail} from '../skills-s07/pieces';
import {CUV1, CUV5, FLAME, RACK, hold, sc} from './common';
import {
	AChip, Arrow, DrawPath, Fade, FlaskStates, Framed, GOOD, Glow, INK, INK_SOFT, KeyNotesBoard, LBottle, MistakeX, NAVY, Overlay, PauseHold, PicF, QText, R_AC, R_CL, RowCard, ShrinkAt, Sx, TaskLine, UNKN,
	JCard, WellAt, WellPlate, Wr, picW, plateG, qCheck, vis,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number; w?: number}> = ({h, w = 1720}) => <rect x={100} y={185} width={w} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;

// ---------- 12/13. Attempt 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'A student flame-tests four unknown solutions using one nichrome wire loop. Between samples, she rinses the loop in distilled water. Unknown 1 gives a blue-green flame. Unknowns 2, 3 and 4 also give blue-green flames. She concludes that all four solutions contain copper(II) ions.', at: 0},
	{text: 'Evaluate the validity of her conclusion, and propose one improvement to her method.', at: 0, para: true, weight: 700},
] as QBlock[], marks);
const Question1: React.FC<{marks?: QMark[]}> = ({marks}) => (
	<>
		<Card h={600} />
		<QText q={Q1(marks)} x={140} y={262} w={1100} size={40} card={false} />
	</>
);
const FL4 = {x: 1300, y: 300, h: 330, gap: 128};
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		{[0, 1, 2, 3].map(i => (
			<g key={i}>
				<PicF p={FLAME.cu} x={FL4.x + i * FL4.gap} y={FL4.y} h={FL4.h} />
				<Sx x={FL4.x + i * FL4.gap + picW(FLAME.cu, FL4.h) / 2} y={FL4.y + FL4.h + 46} text={`${i + 1}`} size={40} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		))}
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={900} cx={1560} cy={900} />
	</Overlay>
);
const K13 = cues(sc('feedback-1'), {notv: 'Not valid', rinse: 'water rinse', loop: 'off the loop', first: 'the first sample', flame: 'later flame', before: 'Before each sample', hcl: 'dilute hydrochloric', heat: 'heat it', confirm: 'Then confirm', pale: 'pale blue', naoh: 'sodium hydroxide', just: 'Just repeating', same: 'same dirty loop', result: 'same result'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const F = {x: 1080, y: 520, h: 280, gap: 150};
	const fw = picW(FLAME.cu, F.h);
	const tip = (i: number): [number, number] => [F.x + i * F.gap + fw / 2, F.y + 40];
	return (
		<Overlay>
			<TaskLine text="Not valid: carry-over on the loop" at={0} size={50} />
			<ShrinkAt cx={100} cy={185} k={0.58} at={0}>
				<Question1 marks={[
					{phrase: 'one nichrome wire loop.', at: K13.loop, color: R_AC},
					{phrase: 'rinses the loop in distilled water.', at: K13.rinse, color: R_AC},
					{phrase: 'all four solutions contain copper(II) ions.', at: K13.flame, color: NAVY},
					{phrase: 'propose one improvement to her method.', at: K13.naoh, color: GOOD},
				]} />
			</ShrinkAt>
			<FlaskStates x={F.x} y={F.y} h={F.h} states={[{p: FLAME.cu, at: -100}, {p: FLAME.blue, at: K13.heat, dur: 18}]} />
			{[1, 2, 3].map(i => <PicF key={i} p={FLAME.cu} x={F.x + i * F.gap} y={F.y} h={F.h} />)}
			{[0, 1, 2, 3].map(i => <Sx key={i} x={F.x + i * F.gap + fw / 2} y={F.y + F.h + 40} text={`${i + 1}`} size={34} color={INK} anchor="middle" weight={800} at={-1000} />)}
			{[1, 2, 3].map(i => {
				const [ax, ay] = tip(0), [bx, by] = tip(i);
				return <DrawPath key={i} d={`M${ax},${ay - 20} Q${(ax + bx) / 2},${ay - 120 - i * 26} ${bx},${by - 20}`} at={K13.first + i * 10} dur={18} color="#1f8a7a" width={5} dash="10 8" />;
			})}
			<Sx x={F.x + 1.5 * F.gap + fw / 2} y={F.y - 110} text="carry-over: copper stays on the loop" size={32} color="#1f8a7a" anchor="middle" weight={800} at={K13.first + 20} />
			<Sx x={F.x} y={F.y + F.h + 86} text="clean loop: blank flame" size={30} color={GOOD} anchor="start" weight={800} at={K13.heat + 10} />
			<FixRail box={{x: 100, y: 560, w: 940}} rowH={118} rows={[K13.rinse, K13.loop, K13.before]} lit={[{row: 1, from: K13.loop, to: K13.before}, {row: 2, from: K13.before}]} ex={[{text: 'validity', at: K13.rinse + 6}, {text: 'one loop, rinsed only in water', at: K13.loop + 10}, {text: 'clean in dilute HCl, heat until no colour, each time', at: K13.hcl}]} size={40} />
			<Fade at={K13.pale - 6}>
				<PicF p={RACK.cuoh2} x={1700} y={520} h={280} />
			</Fade>
			<Sx x={1880} y={490} text="confirm: pale blue Cu(OH)₂" size={28} color="#2f6f9e" anchor="end" weight={800} at={K13.pale} />
			<MistakeX x={1080} y={920} text="repeat the flame tests" at={K13.just} cross={K13.same} note="same dirty loop, same result" size={34} />
			{void K13.notv}{void K13.confirm}{void K13.result}{void vis}{void f}
		</Overlay>
	);
};

// ---------- 14/15. Attempt 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const RES: [string, string][] = [
	['Dilute HCl', 'no visible change'],
	['Dilute H₂SO₄', 'white precipitate, formed slowly'],
	['Flame test', 'brick-red flame (blank flame: no colour; known Ca²⁺: brick-red)'],
	['NaOH', 'faint white precipitate'],
	['Dilute HNO₃', 'no effervescence'],
	['Dilute HNO₃, then BaCl₂', 'no visible change'],
	['Dilute HNO₃, then AgNO₃', 'white precipitate that dissolved in dilute ammonia (blank: no visible change)'],
];
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: "Unknown E contains one cation and one anion. A student's results are shown, with the blank (distilled water) and known solutions run alongside.", at: 0},
] as QBlock[], marks);
const Q2D = (marks: QMark[] = []) => qCheck([
	{text: 'Identify the cation and the anion in Unknown E. Justify each identity, and write one net ionic equation.', at: 0, weight: 700},
] as QBlock[], marks);
const Q2Table: React.FC<{lit?: [number, number, string][]}> = ({lit = []}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{RES.map(([t, r], i) => {
				const y = 362 + i * 56;
				const g = lit.filter(l => l[0] === i).reduce((m, l) => Math.max(m, prog(f, l[1], 12)), 0);
				const col = lit.find(l => l[0] === i)?.[2] ?? NAVY;
				return (
					<g key={i}>
						<rect x={130} y={y - 38} width={1640} height={52} rx={8} fill={i % 2 ? '#fffdf8' : '#f6f0e4'} />
						{g > 0.01 ? <rect x={130} y={y - 38} width={1640} height={52} rx={8} fill="#f6d77a" opacity={0.45 * g} /> : null}
						{g > 0.01 ? <line x1={560} x2={560 + Math.min(1180, r.length * 15.5) * g} y1={y + 8} y2={y + 8} stroke={col} strokeWidth={4} /> : null}
						<Sx x={150} y={y} text={t} size={30} color={INK} weight={800} at={-1000} />
						<Sx x={560} y={y} text={r} size={30} color={INK} weight={500} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
const Question2: React.FC<{lit?: [number, number, string][]}> = ({lit}) => (
	<>
		<Card h={700} />
		<QText q={Q2()} x={140} y={250} w={1480} size={34} card={false} />
		<Q2Table lit={lit} />
		<QText q={Q2D()} x={140} y={810} w={1480} size={36} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<LBottle x={1680} y={196} h={150} letter="E" />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={990} cx={1680} cy={950} />
	</Overlay>
);
/** Unknown E's results used in the feedback, readable size, each underlined on its cue. */
const GivenRows: React.FC<{rows: [string, number, string][]}> = ({rows}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<rect x={100} y={185} width={1040} height={400} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={126} y={234} text="Unknown E: the results you use" size={34} color={INK} hand weight={700} at={-1000} />
			{rows.map(([t, at, c], i) => {
				const y = 300 + i * 62;
				const u = prog(f, at, 16);
				return (
					<g key={i}>
						<Sx x={126} y={y} text={t} size={30} color={INK} weight={600} at={-1000} />
						{u > 0.01 ? <line x1={126} x2={126 + (t.length * 15.2) * u} y1={y + 9} y2={y + 9} stroke={c} strokeWidth={4} /> : null}
					</g>
				);
			})}
		</g>
	);
};
const K15 = cues(sc('feedback-2'), {sulf: 'white sulfate', brick: 'brick-red flame', decides: 'decides it', ca: 'it calcium', anion: 'For the anion', silver: 'white silver precipitate', diss: 'dissolves in dilute ammonia', blank: 'clear blank', supp: 'supports chloride', ions: 'silver ions and chloride', writing: 'Writing only', slip: 'the slip', saw: 'what you saw'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Unknown E: calcium chloride" at={0} size={50} />
			<GivenRows rows={[
				['Dilute H₂SO₄: white precipitate, formed slowly', K15.sulf, '#b07a12'],
				['Flame: brick-red (blank flame: none; known Ca²⁺: brick-red)', K15.brick, '#b83a1e'],
				['HNO₃: no fizz.  HNO₃ then BaCl₂: no visible change', K15.anion + 10, R_AC],
				['HNO₃ then AgNO₃: white ppt, dissolves in dilute NH₃', K15.silver, NAVY],
				['blank: no visible change', K15.blank, NAVY],
			]} />
			<PicF p={FLAME.ca} x={1180} y={190} h={360} />
			<Sx x={1180 + picW(FLAME.ca, 360) / 2} y={590} text="= known Ca²⁺" size={30} color="#b83a1e" anchor="middle" weight={800} at={K15.decides} />
			<PicF p={RACK.agcl} x={1440} y={190} h={360} o={vis(f, K15.silver - 10)} />
			<Sx x={1440 + picW(RACK.agcl, 360) / 2} y={590} text="dissolves in dilute NH₃" size={28} color={NAVY} anchor="middle" weight={800} at={K15.diss} />
			<Framed x={1660} y={340} text="CaCl₂" at={0} size={52} color={UNKN} />
			<JCard x={96} y={610} w={1730} title="Justify each identity" titleSize={36} rowH={116} labelW={250} slots={[
				{label: 'Ca^{2+}', text: '', lines: ['white sulfate → Ba²⁺ or Ca²⁺;', 'brick-red flame = known Ca²⁺ (Ba²⁺ would be pale green)'], at: K15.sulf, size: 36, color: '#b83a1e'},
				{label: 'Cl^{−}', text: '', lines: ['no fizz (not CO₃²⁻); no barium solid (not SO₄²⁻);', 'white silver ppt in HNO₃ dissolves in dilute NH₃; blank clear'], at: K15.anion, size: 36, color: NAVY},
				{label: 'Equation', text: 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)', at: K15.ions, size: 46, color: INK},
			]} />
			<MistakeX x={1110} y={918} text='Cl⁻: "tested with silver nitrate"' at={K15.writing} cross={K15.slip} note="say what you saw" size={30} />
			{void K15.ca}{void K15.blank}{void K15.supp}{void K15.saw}{void R_CL}
		</Overlay>
	);
};

// ---------- 16. Decision rule and handoff ----------
const K16 = cues(sc('decision-handoff'), {plan: 'plan the tests', run: 'run blank', record: 'record what', justify: 'justify each', next: 'Next', how: 'how much', colour: 'Colour and light'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const g = plateG(1530, 330, 560);
	const rows: [string, string, number][] = [
		['Plan', 'tests in order from the two flowcharts', K16.plan],
		['Run', 'blank, known, unknown; 3 drops; distilled water', K16.run],
		['Record', 'observation, then inference', K16.record],
		['Justify', 'observation + equation + ruled out + known', K16.justify],
	];
	return (
		<Overlay>
			<TaskLine text="Any unknown: plan, run, record, justify" at={0} size={50} />
			{rows.map(([t, b, a], i) => <RowCard key={t} x={96} y={200 + i * 196} w={1150} h={170} title={t} body={b} at={4 + i * 6} lit={a} color={NAVY} size={38} />)}
			<WellPlate g={g} />
			{[0, 1, 2].map(c => <WellAt key={c} g={g} r={0} c={c} kind={c === 1 ? 'white' : 'clear'} at={-1000} role={c === 0 ? 'blank' : c === 1 ? 'known' : 'unk'} glow={K16.run + c * 10} />)}
			<LBottle x={1330} y={600} h={290} letter="C" glow={[K16.next, 1e9]} />
			<Sx x={1500} y={720} text="Mg²⁺, SO₄²⁻" size={40} color={UNKN} weight={800} at={K16.next} />
			<Sx x={1500} y={776} text="how much?" size={46} color={NAVY} hand weight={700} at={K16.how} />
			<PicF p={CUV1} x={1700} y={600} h={260} o={vis(f, K16.colour - 10)} />
			<PicF p={CUV5} x={1770} y={600} h={260} o={vis(f, K16.colour - 4)} />
			<Fade at={K16.next}>
				<rect x={1290} y={930} width={560} height={80} rx={40} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1570} y={982} text="Next: colour and absorption" size={32} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{void Arrow}{void Glow}{void AChip}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	"Plan the test order from the cation and anion flowcharts first.",
	"Run blank, known and unknown side by side, 3 drops each.",
	"Record the observation first, then the inference.",
	"Justify: observation + equation + ions ruled out + matching known.",
	"Safety: no lead in student hands; silver nitrate stains; follow your school's risk assessment.",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={44} aidTop={600} aids={['Blank, known, unknown.', 'Observe first, then infer.']} tag="one row per reagent: the unknown is judged against both controls" />
);
void WellAt; void Wr; void UNKN;
