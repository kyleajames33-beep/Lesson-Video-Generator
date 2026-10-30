// M7 P06 scenes 13 to 18: attempt 1 (drops to a lasting froth, with its table), brief feedback (hard water; the scum
// equation; "salt" crossed), attempt 2 (an unfair soap against detergent test), brief feedback (FixRail; two changes;
// "repeat and average" crossed), the decision rule and handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath} from '../../kit';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TaskLine, mw} from '../chem-m6-p02/parts';
import {Crossed, QCardX, Tag, qLineY} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {EqRow, Plate} from '../chem-m7-c06/parts';
import {CA, Ion} from '../chem-m7-c12/parts';
import {FixRail} from '../skills-s07/pieces';
import {DBOTTLE, ST, hold, sc} from './common';
import {GREENC, INK, INK_SOFT, NAVY, TERRA} from './parts';

const Q1 = [
	'A student added soap solution, one drop at a time, to 10 mL samples of water,',
	'stoppering and shaking after each drop, until a froth formed that lasted for 30 s.',
	'The table shows the results.',
	'Explain the result for sample Y. Include a net ionic equation for one hardness ion',
	'(state which ion you use), using sodium stearate, C₁₇H₃₅COONa, as the soap.   (3 marks)',
];
const TROWS = [['Sample', 'Drops of soap solution needed', 'Appearance'], ['Distilled water', '2', 'clear'], ['Sample X', '3', 'clear'], ['Sample Y', '17', 'cloudy, white solid']];
/** The A1 table drawn in the card's gap after line 2. Returns cell positions for underlines. */
const tabLay = (y: number, size: number, gap: number) => {
	const top = qLineY(y, size, [0, 0, gap], 2) + size * 0.7;
	const lh = (gap - size * 0.4) / 4;
	const xs = [190, 520, 1000];
	return {top, lh, xs};
};
const QTable: React.FC<{y: number; size: number; gap: number; at: number; under?: {r: number; c: number; at: number}[]}> = ({y, size, gap, at, under = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const T = tabLay(y, size, gap);
	const s = size * 0.95;
	return (
		<g opacity={v}>
			<rect x={T.xs[0] - 20} y={T.top} width={1180} height={T.lh * 4} rx={8} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
			{[1, 2, 3].map(r => <line key={r} x1={T.xs[0] - 20} y1={T.top + r * T.lh} x2={T.xs[0] + 1160} y2={T.top + r * T.lh} stroke="rgba(60,45,20,0.2)" strokeWidth={1.5} />)}
			{TROWS.map((row, r) => row.map((c, k) => <Sx key={r + '-' + k} x={T.xs[k]} y={T.top + r * T.lh + T.lh * 0.68} text={c} size={s} color={INK} weight={r === 0 ? 800 : 500} at={-1000} />))}
			{under.map((u, i) => {
				const x1 = T.xs[u.c], x2 = x1 + mw(TROWS[u.r][u.c], s, false, 500), yy = T.top + u.r * T.lh + T.lh * 0.68 + 8;
				return <DrawPath key={i} d={`M${x1},${yy} L${x2},${yy + 1}`} at={u.at} dur={12} color="#2c4a7c" width={4} />;
			})}
		</g>
	);
};

// ---------- 13. Attempt 1 ----------
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', table: 'The table', explain: 'Explain the', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCardX lines={Q1} at={K13.table - 20} y={180} size={30} w={1500} gaps={[0, 0, 220]} />
		<QTable y={180} size={30} gap={220} at={K13.table} />
		<Plate p={DBOTTLE} cx={1770} top={300} h={330} at={K13.table + 20} />
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
		{void K13.explain}
	</Overlay>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {sample: 'Sample Y', hard: 'hard', contains: 'contains', stearate: 'Stearate ions', scum: 'white scum:', calc: 'calcium stearate,', mag: 'or magnesium', so: 'So the first', making: 'making scum,', trap: 'The trap', salty: 'salty:', chloride: 'chloride.'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const SZ = 22, GAP = 160, Y = 70;
	const TL = tabLay(Y, SZ, GAP);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={Y} size={SZ} w={1500} gaps={[0, 0, GAP]} under={[{line: 3, phrase: 'net ionic equation', at: K14.stearate}, {line: 4, phrase: 'sodium stearate, C₁₇H₃₅COONa', at: K14.stearate + 10}]} />
			<QTable y={Y} size={SZ} gap={GAP} at={-100} under={[{r: 3, c: 1, at: K14.hard}, {r: 3, c: 2, at: K14.hard + 8}]} />
			<Tag x={1370} y={TL.top + 3 * TL.lh + 4} text="about 15 extra drops" at={K14.hard + 10} size={20} o={dimAt(f, K14.stearate, 0.5)} />
			<g opacity={dimAt(f, K14.trap, 0.5)}>
				<Ion x={190} y={550} t="Ca²⁺" r={30} color={CA} o={vis(f, K14.contains)} />
				<Ion x={270} y={550} t="Mg²⁺" r={30} color={CA} o={vis(f, K14.contains + 8)} />
				<Tag x={320} y={530} text="hard water: calcium or magnesium ions" at={K14.contains} size={24} color="#2a9d8f" fill="#dff2ef" />
			</g>
			<EqRow left={[{t: '2C_17H_35COO⁻(aq)', at: K14.scum}, {t: '+', at: K14.scum}, {t: 'Ca²⁺(aq)', at: K14.scum}]} right={[{t: '(C_17H_35COO)_2Ca(s)', at: K14.calc}]} cx={760} y={660} size={36} len={100} arrow={{at: K14.scum + 6}} />
			<Sx x={420} y={730} text="or 2C₁₇H₃₅COO⁻(aq) + Mg²⁺(aq) → (C₁₇H₃₅COO)₂Mg(s)" size={26} color={INK_SOFT} weight={700} at={K14.mag} />
			<Tag x={160} y={750} text="either ion: state which" at={K14.mag + 16} size={20} o={dimAt(f, K14.so, 0.5)} />
			<Tag x={1180} y={750} text="Na⁺: spectator" at={K14.mag + 24} size={20} o={dimAt(f, K14.so, 0.5)} />
			<Plate p={ST.hard} cx={1650} top={500} h={330} at={K14.scum} />
			<Sx x={160} y={830} text="first drops used up making scum; froth lasts once enough hardness ions are removed" size={26} color={INK} weight={700} at={K14.so} opacity={dimAt(f, K14.trap, 0.55)} />
			<Crossed x={160} y={870} text="Y contains more salt (NaCl)" at={K14.salty - 20} cross={K14.chloride} note="hardness: Ca²⁺ and Mg²⁺" size={30} />
			{void K14.sample}{void K14.making}{void NAVY}{void TERRA}
		</Overlay>
	);
};

// ---------- 15. Attempt 2 ----------
const Q2 = [
	'A student compared a soap with a dishwashing detergent in tap water from a hard-water',
	'area. She added 5 drops of soap solution to one test tube of the tap water and 10 drops',
	'of the dishwashing detergent to another, shook each tube, and found that the detergent',
	'produced more froth. She concluded that detergents work better than soaps in hard water.',
	'Explain why her conclusion is not valid, and describe TWO changes to her method that',
	'would make it valid.   (4 marks)',
];
const K15 = cues(sc('attempt-2'), {last: 'Last one', a: 'A student', explain: 'Explain why', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCardX lines={Q2} at={K15.a} y={190} size={32} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
		{void K15.explain}
	</Overlay>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {she: 'She changed', five: 'five drops', ten: 'ten,', dish: 'dishwashing', soft: 'softeners.', use: 'Use a', test: 'test each', add: 'add water-only', controls: 'controls.', rep: 'Repeating', trap: 'trap:', stays: 'stays.'});
export const SceneFeedback2: React.FC = () => (
	<Overlay>
		<QCardX lines={Q2} at={-100} y={70} size={24} under={[{line: 1, phrase: '5 drops', at: K16.five}, {line: 1, phrase: '10 drops', at: K16.ten}, {line: 0, phrase: 'dishwashing detergent', at: K16.dish}, {line: 4, phrase: 'describe TWO changes', at: K16.use}]} />
		<FixRail box={{x: 120, y: 400, w: 980}} rowH={110} s={0.85} size={32} rows={[K16.she, K16.ten, K16.use]} lit={[{row: 2, from: K16.use, to: K16.rep}]} ex={[{text: 'validity', at: K16.she + 10}, {text: 'drops differ; product may contain softeners', at: K16.soft}, {text: 'two changes, right', at: K16.use + 10}]} />
		<Sx x={1000} y={450} text="1  pure detergent (SDS);" size={30} color={GREENC} weight={800} at={K16.use + 6} />
		<Sx x={1000} y={495} text="    same drops in soft and hard water" size={30} color={GREENC} weight={800} at={K16.test} />
		<Sx x={1000} y={570} text="2  add distilled-water tubes and water-only" size={30} color={GREENC} weight={800} at={K16.add} />
		<Sx x={1000} y={615} text="    controls; compare each agent with its" size={30} color={GREENC} weight={800} at={K16.add + 10} />
		<Sx x={1000} y={660} text="    own soft-water result" size={30} color={GREENC} weight={800} at={K16.controls} />
		<Crossed x={120} y={850} text="repeat 3 times and average" at={K16.rep} cross={K16.trap} note="reliability, not validity" size={32} />
		{void K16.stays}
	</Overlay>
);

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {make: 'make hard', match: 'match the', include: 'include controls,', compare: 'compare each', measure: 'Measure froth,', emul: 'emulsified.', calc: 'Calcium locks', next: 'Next:'});
export const SceneRule: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: '1  Hard water: known CaCl₂ in distilled water', at: K17.make},
		{t: '2  Match: tubes, volume, drops, shakes, timing; controls;', at: K17.match},
		{t: '     each agent against its own soft-water tube', at: K17.compare},
		{t: '3  Measure: froth height; time until oil separates', at: K17.measure},
		{t: "4  Explain: soap + Ca²⁺ → scum; detergent's Ca salt much more soluble", at: K17.calc},
	];
	const grp = [0, 1, 1, 2, 3];
	return (
		<Overlay>
			<TaskLine text="The plan" at={0} size={54} y={130} />
			{lines.map((l, i) => {
				const nextG = lines.findIndex((_, k) => grp[k] === grp[i] + 1);
				return <g key={i} opacity={nextG >= 0 ? dimAt(f, lines[nextG].at, 0.6) : 1}><Sx x={120} y={260 + i * 88} text={l.t} size={36} color={INK} weight={700} at={l.at} /></g>;
			})}
			<g opacity={vis(f, K17.next)}>
				<rect x={760} y={790} width={1080} height={130} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={800} y={840} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={800} y={890} text="how can a reaction map plan organic synthesis?" size={34} color={INK} weight={700} at={-1000} />
			</g>
			{void K17.include}{void K17.emul}
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Aim: compare soap and detergent action in soft and hard water. Hard water: a known amount of CaCl₂ (or MgSO₄) in distilled water; soft water: distilled water. Controls: water only.',
	'Froth test: 10 mL water in matching tubes, 5 drops of soap (0.4%) or detergent (0.1% SDS) solution, stopper, shake 10 times, froth height after 30 s. Oil test (fresh tubes): add 1 mL oil, shake 10 times, time until a clear oil layer reappears (how long the oil stays dispersed).',
	'Variables: independent, agent and water hardness; dependent, froth height, cloudiness, time to separate; controlled, tube size, volume, drops, the same stock of each agent, shakes, timing. Compare each agent in hard water with the same agent in soft water.',
	"Expected pattern (the video's numbers are example results): soap froths in soft water but forms scum and little froth in hard water; detergent froths in both; oil separates soonest with soap in hard water. 2RCOO⁻(aq) + Ca²⁺(aq) → (RCOO)₂Ca(s) (Mg²⁺ the same way): soap locked in scum can't froth or coat oil droplets. Detergent's calcium salt is much more soluble.",
	'Validity: same shaking (count, length, one person), same timing, same drops in soft and hard water, pure detergent; judge each agent against its own soft-water tube. Reliability: repeats agree. Accuracy: read the average froth top at eye level.',
	'Safety: safety glasses (eye irritants); stopper in firmly, sound tubes; wipe oil spills; oily waste as the school directs, not the sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={870} aids={["Soap makes scum in hard water; detergents mostly don't.", 'Two tests, one cause: fewer free soap particles.']} tag="comparing soap and detergent action in hard water" />
);
