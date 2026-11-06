// M8 P05 scenes 13 to 18: two worded attempts (the full question arrives with its card and stays through the countdown;
// four green dichromate tubes beside attempt 1 labelled only 1 to 4; bottle E beside attempt 2), brief feedback with the
// givens underlined as they are used, a framed answer and one crossed slip each (feedback 1: the green blank, the
// ethanol residue, the fix rail and the orange blank; feedback 2: the fizz, milky limewater and fade plates and E's claims
// row), the decision rule and handoff (five rows; bottle D: how heavy?) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BR, CARB, DICH, LIME, hold, sc} from './common';
import {
	AMB, ANS8, CR6, Card, ClaimTable, Framed, GOOD, GREYC, GREYS, INK, INK_SOFT, KNOWNC, KeyNotesBoard, LBot, MistakeX, NAVY, PauseHold, PicF, Pill, QText, RowCard, Sx, TaskLine, Thumb, UNKN, Wr, mw, qCheck, tubeW,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;

/** A readable givens panel: each line underlined on its cue. */
const Givens: React.FC<{x: number; y: number; w: number; title: string; rows: [string, number, string][]; size?: number; gap?: number}> = ({x, y, w, title, rows, size = 32, gap = 62}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<rect x={x} y={y} width={w} height={84 + rows.length * gap} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={x + 26} y={y + 50} text={title} size={34} color={INK} hand weight={700} at={-1000} />
			{rows.map(([t, at, c], i) => {
				const yy = y + 110 + i * gap;
				const u = prog(f, at, 16);
				return (
					<g key={i}>
						<Sx x={x + 26} y={yy} text={t} size={size} color={INK} weight={600} at={-1000} />
						{u > 0.01 ? <line x1={x + 26} x2={x + 26 + mw(t, size, false, 600) * u} y1={yy + 10} y2={yy + 10} stroke={c} strokeWidth={5} /> : null}
					</g>
				);
			})}
		</g>
	);
};

/** Word, feature, fix: three rows, the current one lit (readable sizes). */
const Rail: React.FC<{x: number; y: number; w: number; rows: {label: string; text: string; text2?: string; at: number}[]}> = ({x, y, w, rows}) => {
	const f = useCurrentFrame();
	const H = 60 + rows.reduce((a, r) => a + (r.text2 ? 128 : 96), 0);
	let yy = y + 60;
	return (
		<g>
			<rect x={x} y={y} width={w} height={H} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={x + 26} y={y + 44} text="Word, feature, fix" size={32} color={INK} hand weight={700} at={-1000} />
			{rows.map((r, i) => {
				const ry = yy; yy += r.text2 ? 128 : 96;
				const lit = prog(f, r.at, 12) * (rows[i + 1] ? 1 - prog(f, rows[i + 1].at, 12) : 1);
				return (
					<g key={i}>
						{lit > 0.01 ? <rect x={x + 10} y={ry} width={w - 20} height={(r.text2 ? 128 : 96) - 8} rx={14} fill="#fff1c9" opacity={lit} /> : null}
						<Sx x={x + 30} y={ry + 56} text={r.label} size={38} color={NAVY} hand weight={700} at={-1000} />
						<Wr x={x + 200} y={ry + 56} text={r.text} at={r.at} size={36} color={INK} weight={700} />
						{r.text2 ? <Wr x={x + 200} y={ry + 102} text={r.text2} at={r.at + 12} size={36} color={INK} weight={700} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- 13. Attempt 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1: QBlock[] = [
	{text: 'In a teacher demonstration, four test tubes were rinsed with ethanol and drained to help them dry. 2 mL of acidified potassium dichromate solution was added to each tube, followed by five drops of water, ethanol, unknown S and unknown T respectively. The tubes were warmed in a water bath at 60 °C for five minutes. All four mixtures turned from orange to green. A student concluded that S and T both contain a primary or secondary alcohol.', at: 0},
	{text: "Evaluate the student's conclusion, and propose one improvement to the method.", at: 0, para: true, weight: 700},
];
export const Tubes4: React.FC<{x: number; y: number; h: number; gap: number; labels?: string[]}> = ({x, y, h, gap, labels = ['1', '2', '3', '4']}) => (
	<>
		{[0, 1, 2, 3].map(i => (
			<g key={i}>
				<PicF p={DICH.green} x={x + i * gap} y={y} h={h} />
				<Sx x={x + i * gap + tubeW(DICH.green, h) / 2} y={y + h + 42} text={labels[i]} size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		))}
	</>
);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<rect x={100} y={185} width={1720} height={660} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<QText q={qCheck(Q1, [])} x={140} y={256} w={1150} size={38} card={false} />
		{[0, 1].map(r => [0, 1].map(c => {
			const h = 250, w = tubeW(DICH.green, h);
			const x = 1330 + c * (w + 40), y = 210 + r * (h + 62);
			return (
				<g key={r * 2 + c}>
					<PicF p={DICH.green} x={x} y={y} h={h} />
					<Sx x={x + w / 2} y={y + h + 44} text={`${r * 2 + c + 1}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			);
		}))}
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={960} cx={1640} cy={930} />
		{void K13.turn}
	</svg>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {notv: 'Not valid', blank: 'water blank', green: 'turned green', so: 'so something', eth: 'ethanol left', st: "S and T's", trusted: 'trusted', rinse: 'Rinse clean', orange: 'orange', just: 'Just repeating', trap: 'the trap', again: 'again'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const TX = 1180, TY = 220, TH = 210;
	const tw = tubeW(DICH.green, TH);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Not valid: the blank turned green" at={0} size={54} />
			<Givens x={100} y={185} w={1040} title="The demonstration: what you use" size={30} gap={56} rows={[
				['five drops of water, ethanol, unknown S and unknown T', K14.blank, CR6],
				['All four mixtures turned from orange to green.', K14.green, CR6],
				['tubes rinsed with ethanol and drained to help them dry', K14.eth, CR6],
				['S and T both contain a primary or secondary alcohol', K14.st, NAVY],
				['propose one improvement to the method', K14.rinse, GOOD],
			]} />
			{[0, 1, 2, 3].map(i => (
				<g key={i}>
					<PicF p={DICH.green} x={TX + i * 162} y={TY} h={TH} />
					<Sx x={TX + i * 162 + tw / 2} y={TY + TH + 40} text={['water', 'ethanol', 'S', 'T'][i]} size={30} color={i === 0 ? CR6 : INK} anchor="middle" weight={800} at={K14.blank + i * 6} />
				</g>
			))}
			<Pill x={TX} y={TY + TH + 64} text="blank: green ✗" at={K14.green} color={CR6} size={32} fill="#fbeee6" />
			<Wr x={TX} y={TY + TH + 170} text="ethanol left behind" at={K14.eth} size={36} color={INK} hand />
			<Wr x={TX} y={TY + TH + 214} text="→ reduces the Cr(VI) itself" at={K14.eth + 12} size={36} color={INK} hand />
			<Framed x={TX + 380} y={TY + TH + 110} text="Not valid" at={K14.notv + 4} size={46} color={CR6} />
			<Rail x={100} y={630} w={1040} rows={[
				{label: 'Word', text: 'validity', at: K14.notv + 10},
				{label: 'Feature', text: 'ethanol-rinsed tubes; the blank turned green', at: K14.eth + 10},
				{label: 'Fix', text: 'rinse with distilled water, dry;', text2: 'the blank must stay orange', at: K14.rinse + 8},
			]} />
			<PicF p={DICH.orange} x={TX} y={700} h={200} o={prog(f, K14.orange - 8, 12)} />
			<Wr x={TX + tubeW(DICH.orange, 200) + 20} y={790} text="blank stays orange" at={K14.orange} size={34} color={GOOD} hand />
			<MistakeX x={TX} y={930} text="repeat the test" at={K14.just} cross={K14.again} note="same residue, same green" size={34} />
			{void K14.so}{void K14.trusted}{void K14.trap}
		</svg>
	);
};

// ---------- 15. Attempt 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2S: QBlock[] = [{text: 'Unknown E is a hydrocarbon, an alcohol or a carboxylic acid. Fresh portions of E were tested, with a water blank for each test.', at: 0}];
const Q2D: QBlock[] = [{text: "State which functional groups the results support, and what the results can't tell you.", at: 0, weight: 700}];
const RES: [string, string][] = [
	['Solid sodium hydrogen carbonate:', 'brisk effervescence; the gas turned limewater milky.'],
	['Bromine water, in normal room light:', 'orange to colourless within seconds.'],
	['Acidified potassium dichromate:', 'following the class method, E was not tested, because it decolourised bromine water.'],
	['Blanks:', 'every blank showed no visible change.'],
];
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<rect x={100} y={185} width={1720} height={660} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<QText q={qCheck(Q2S, [])} x={140} y={252} w={1380} size={36} card={false} />
		{RES.map(([a, b], i) => {
			const y = 372 + i * 100;
			const two = b.length > 60;
			return (
				<g key={i}>
					<rect x={130} y={y - 44} width={1400} height={92} rx={10} fill={i % 2 ? '#fffdf8' : '#f6f0e4'} />
					<Sx x={150} y={y} text={a} size={32} color={i === 3 ? '#4d4840' : INK} weight={800} at={-1000} />
					<Sx x={150} y={y + 38} text={two ? b : b} size={30} color={i === 3 ? '#4d4840' : INK} weight={500} at={-1000} />
				</g>
			);
		})}
		<QText q={qCheck(Q2D, [])} x={140} y={800} w={1500} size={36} card={false} />
		<LBot x={1600} y={280} h={420} letter="E" />
		<PauseHold h={hold(A2)} at={K15.pause} x={140} y={960} cx={1640} cy={930} />
		{void K15.last}
	</svg>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {fizz: 'The fizz', milky: 'milky limewater', acid: 'acid', fading: 'fading bromine', double: 'double bond', both: 'carry both', without: 'Without a dichromate', cant: "can't tell", calling: 'Calling it', slip: 'slip'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const RY = 650;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Unknown E: two groups supported" at={0} size={54} />
			<Givens x={100} y={185} w={1080} title="Unknown E: the results you use" size={30} gap={58} rows={[
				['NaHCO₃: brisk effervescence', K16.fizz, ANS8],
				['the gas turned limewater milky', K16.milky, ANS8],
				['bromine water: orange to colourless within seconds', K16.fading, '#1f8f86'],
				['not tested with acidified potassium dichromate', K16.without, AMB],
				['every blank: no visible change', K16.fizz + 30, NAVY],
			]} />
			<PicF p={CARB.fizz} x={1230} y={200} h={300} />
			<PicF p={LIME.milky} x={1490} y={200} h={300} o={prog(f, K16.milky - 8, 12)} />
			<Thumb p={BR.clear} x={1660} y={330} h={170} at={K16.fading} />
			<Wr x={1230} y={550} text="one molecule can carry both" at={K16.both} size={34} color={NAVY} hand />
			<ClaimTable x={100} y={RY} cols={[90, 330, 420, 360, 520]} rowH={150} size={34} th={118} rows={[
				{k: 'E', at: K16.acid, thumbs: [CARB.fizz, BR.clear, null], sup: '–COOH', nd: '–', ct: '–OH (no\ndichromate test)', ctAt: K16.cant},
			]} />
			<Wr x={100 + 90 + 330 + 170} y={RY + 62 + 92} text="+ C=C" at={K16.double} size={34} color={ANS8} weight={800} />
			<Framed x={100} y={960} text="–COOH and C=C supported; –OH: can't tell" at={K16.cant + 20} size={40} color={ANS8} />
			<MistakeX x={1080} y={890} text="–COOH only: the bromine result is an error" at={K16.calling} cross={K16.slip} note="one molecule, two groups" size={28} />
			{void KNOWNC}
		</svg>
	);
};

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {any: 'any unknown', three: 'three tests', blank: 'a blank and', obs: 'observations before', only: 'only the claims', next: 'Next', mass: 'mass spectrometry', weighs: 'weighs'});
export const SceneHandoff: React.FC = () => {
	const rows: [string, string, number][] = [
		['Plan', 'fizz, fade, green; a fresh portion each', K17.three],
		['Control', 'a blank and a known beside every unknown', K17.blank],
		['Safety', 'Cr(VI): teacher demonstration, fume cupboard; no flames', K17.blank + 30],
		['Record', 'observation first, then inference', K17.obs],
		['Claim', "supported, not detected, can't tell", K17.only],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Any unknown organic liquid" at={0} />
			{rows.map(([t, b, a], i) => <RowCard key={t} x={96} y={190 + i * 168} w={1180} h={152} title={t} body={b} at={2 + i * 5} lit={a} color={t === 'Safety' ? CR6 : NAVY} size={36} />)}
			<LBot x={1420} y={210} h={430} letter="D" glow={[K17.next, 1e9]} />
			<Wr x={1360} y={700} text="3° alcohol ... how heavy?" at={K17.next + 6} size={40} color={NAVY} hand />
			{[CARB.fizz, BR.orange, DICH.orange].map((p, i) => <Thumb key={i} p={p} x={1360 + i * 150} y={740} h={150} />)}
			<Pill x={1330} y={950} text="Next: mass spectrometry" at={K17.mass} color={NAVY} size={36} />
			{void K17.any}{void K17.weighs}{void UNKN}{void GREYS}{void Card}{void KNOWNC}
		</svg>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Test for C=C, –OH, –COOH. Candidates: hydrocarbons, alcohols, acids.',
	'Every test: blank (water) and known beside the unknown; fresh portions.',
	'Fizz: NaHCO₃, limewater milky. Fade: p02 method. Green: teacher demo.',
	'Record the observation first; write "no visible change".',
	'Cr(VI): teacher only, fume cupboard. No flames. Never smell. No sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={46} aidTop={700} aids={["Supported, not detected, can't tell.", 'Fizz, fade, green.']} tag="a positive needs a clean blank; not detected is not absent" />
);
