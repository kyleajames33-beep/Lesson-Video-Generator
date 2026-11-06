// M8 C08 scenes 12 to 17: two worded attempts (the full card with the observed tubes or the bottle, and the countdown),
// brief feedback (givens underlined as they are used; the four-candidate strip with strikes and the framed answer; one
// crossed mistake each), the decision rule and handoff (the complete chart: both branches of every box continue; next,
// the practical) and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {BR, CARB, DBOT, DBOT_A, DICH, hold, sc} from './common';
import {
	AChip, AMB, ANS8, CC, COOH, CandStrip, Fade, FlowChart, Framed, GREYS, INK, INK_SOFT, KeyNotesBoard, MistakeX, NAVY, OHV, PauseHold, PicF, PicV, QText, ShrinkAt, Sx, TaskLine, Thumb, natPt, qCheck,
} from './parts';
import type {Cand, QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number}> = ({h}) => <rect x={100} y={185} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;

// ---------- 12/13. Attempt 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'An unknown liquid is one of these four compounds: hexane, hexan-1-ol, hex-5-en-1-ol, hexanoic acid. Separate portions of the liquid were tested.', at: 2},
	{text: 'Solid sodium hydrogen carbonate: no effervescence.', at: 2, para: true},
	{text: 'Bromine water, in normal room light: orange to colourless within seconds.', at: 2, para: true},
	{text: 'Acidified potassium dichromate, warmed: orange to green.', at: 2, para: true},
	{text: 'Identify the unknown, and justify your answer with reference to each result.', at: 2, para: true, weight: 700},
] as QBlock[], marks);
const OBS: [any, string][] = [[CARB.before, 'NaHCO_3'], [BR.clear, 'bromine water'], [DICH.green, 'dichromate']];
const Question1: React.FC<{marks?: QMark[]}> = ({marks}) => (
	<>
		<Card h={650} />
		<QText q={Q1(marks)} x={140} y={262} w={1100} size={38} card={false} />
		{OBS.map(([p, t], i) => (
			<g key={t}>
				<PicF p={p} x={1290 + i * 178} y={300} h={220} />
				<Sx x={1290 + i * 178 + 86} y={566} text={t} size={26} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			</g>
		))}
	</>
);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={940} cx={1560} cy={930} />
	</svg>
);
const F1 = 'feedback-1';
const K13 = cues(sc(F1), {nofizz: 'No fizz', hexanoic: 'hexanoic acid', fading: 'fading', points: 'points to', hexane: 'hexane and', hexanol: ['hexan-1-ol', 1], only: 'Only', hexenol: 'hex-5-en-1-ol', green: 'its green', fits: 'fits its', picking: 'Picking', slip: 'slip', every: 'every result'});
const C4 = (): Cand[] => [
	{k: 'hexane', name: 'hexane', ring: {}, strike: K13.hexane + 10},
	{k: 'hexanol', name: 'hexan-1-ol', ring: {oh: -1000}, strike: K13.hexanol + 10},
	{k: 'hexenol', name: 'hex-5-en-1-ol', ring: {cc: K13.hexenol, oh: K13.hexenol + 6}, glow: K13.hexenol},
	{k: 'hexanoic', name: 'hexanoic acid', ring: {cooh: -1000}, strike: K13.hexanoic + 8},
];
export const SceneFeedback1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={-1000} />
		<QTag />
		<ShrinkAt cx={100} cy={185} k={0.6} at={4}>
			<Question1 marks={[
				{phrase: 'no effervescence', at: K13.nofizz, color: COOH},
				{phrase: 'orange to colourless within seconds', at: K13.fading, color: CC},
				{phrase: 'orange to green', at: K13.green, color: OHV},
			]} />
		</ShrinkAt>
		<Sx x={1180} y={250} text="no fizz → not hexanoic acid" size={34} color={COOH} weight={800} at={K13.nofizz} />
		<Sx x={1180} y={310} text="fade → C=C: not hexane" size={34} color={CC} weight={800} at={K13.points} />
		<Sx x={1180} y={356} text="or hexan-1-ol" size={34} color={CC} weight={800} at={K13.hexane} />
		<Framed x={1180} y={470} text="hex-5-en-1-ol" at={K13.hexenol} size={54} color={ANS8} />
		<Sx x={1180} y={560} text="green: consistent with its OH (the fade decided it)" size={28} color={GREYS} hand weight={700} at={K13.fits} />
		<CandStrip c={C4()} y={620} w={420} gap={16} h={190} s={0.55} size={30} />
		<MistakeX x={96} y={880} text="hexan-1-ol: it turned dichromate green" at={K13.picking} cross={K13.slip} note="every result has to fit" size={38} />
		{void K13.only}{void K13.every}
	</svg>
);

// ---------- 14/15. Attempt 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: 'Liquid Q is known to be an alkane, an alkene, an alcohol or a carboxylic acid; no other reactive groups are present.', at: 2},
	{text: 'Q produced no effervescence when solid sodium hydrogen carbonate was added. A student concluded that Q is an alcohol.', at: 2, para: true},
	{text: "Evaluate the student's conclusion. Outline TWO further tests, with expected results, stating what each result would support, and one limit of these tests.", at: 2, para: true, weight: 700},
] as QBlock[], marks);
const Question2: React.FC<{marks?: QMark[]}> = ({marks}) => {
	const B = {x: 1320, y: 240, h: 450};
	const [lx, ly] = natPt(DBOT, B.x, B.y, B.h, DBOT_A.label[0], DBOT_A.label[1]);
	return (
		<>
			<Card h={660} />
			<QText q={Q2(marks)} x={140} y={268} w={1120} size={42} card={false} />
			<PicV p={DBOT} x={B.x} y={B.y} h={B.h} />
			<Sx x={lx} y={ly + 22} text="Q" size={60} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<PicF p={CARB.before} x={1520} y={330} h={330} />
			<Sx x={1520 + 129} y={710} text="no effervescence" size={28} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
		</>
	);
};
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={920} cx={1560} cy={920} />
	</svg>
);
const F2 = 'feedback-2';
const K15 = cues(sc(F2), {conclusion: 'conclusion', supported: 'supported', acid: 'carboxylic acid', still: 'could still', fresh: 'fresh portion', fade: 'bromine fade', double: 'double bond', warm: 'Warm another', dich: 'dichromate', stayed: 'stayed orange', green: 'green supports', limit: 'One limit', tertiary: 'tertiary', treating: 'Treating', trap: 'trap'});
export const SceneFeedback2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={-1000} />
		<QTag />
		<ShrinkAt cx={100} cy={185} k={0.6} at={4}>
			<Question2 marks={[
				{phrase: 'no effervescence', at: K15.acid, color: COOH},
				{phrase: 'an alkane, an alkene, an alcohol or a carboxylic acid', at: K15.double, color: CC},
				{phrase: 'what each result would support', at: K15.dich, color: OHV},
				{phrase: 'one limit', at: K15.limit, color: AMB},
			]} />
		</ShrinkAt>
		<Framed x={1180} y={270} text="not supported" at={K15.supported - 10} size={50} color={COOH} />
		<Sx x={1180} y={370} text="no fizz rules out only –COOH" size={34} color={INK} weight={800} at={K15.acid} />
		{['alkane?', 'alkene?', 'alcohol?'].map((t, i) => <AChip key={t} x={1180 + i * 205} y={410} text={t} size={32} color={NAVY} hand={false} at={K15.still + i * 8} />)}
		<Thumb p={BR.clear} x={96} y={600} h={290} at={K15.fade - 10} />
		<Sx x={340} y={700} text="fresh portion: fades" size={36} color={CC} weight={800} at={K15.fade} />
		<Sx x={340} y={746} text="→ C=C supported" size={36} color={CC} weight={800} at={K15.double - 6} />
		<Thumb p={DICH.green} x={880} y={600} h={290} at={K15.warm} />
		<Sx x={1124} y={700} text="green, with bromine orange" size={36} color={OHV} weight={800} at={K15.stayed} />
		<Sx x={1124} y={746} text="→ 1° or 2° alcohol supported" size={36} color={OHV} weight={800} at={K15.green} />
		<Sx x={96} y={920} text="limit: orange leaves an alkane or a 3° alcohol; can't tell them apart" size={34} color={AMB} hand weight={700} at={K15.limit} />
		<MistakeX x={96} y={960} text="no fizz, so Q is an alcohol" at={K15.treating} cross={K15.trap} size={36} />
		<Sx x={640} y={1004} text="no fizz rules out only –COOH" size={34} color={ANS8} hand weight={700} at={K15.trap + 10} />
		{void K15.conclusion}{void K15.fresh}{void K15.tertiary}
	</svg>
);

// ---------- 16. Decision rule and handoff ----------
const K16 = cues(sc('decision-handoff'), {so: 'So', ask: 'ask three', fizz: 'Does it fizz', fade: 'does bromine', green: 'does dichromate', answer: 'Answer each', every: 'let every', report: 'report each', next: 'Next', practical: 'practical', controls: 'controls'});
export const SceneHandoff: React.FC = () => {
	const B = {x: 150, y: 300, h: 420};
	const [lx, ly] = natPt(DBOT, B.x, B.y, B.h, DBOT_A.label[0], DBOT_A.label[1]);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Three questions for any unknown" at={0} />
			<PicV p={DBOT} x={B.x} y={B.y} h={B.h} />
			<Sx x={lx} y={ly + 20} text="?" size={60} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<Sx x={96} y={800} text="a fresh portion for each" size={36} color={NAVY} hand weight={700} at={K16.answer} />
			<Sx x={96} y={850} text="every no rules candidates out" size={36} color={AMB} hand weight={700} at={K16.every} />
			<Sx x={96} y={900} text="report each group supported" size={36} color={ANS8} hand weight={700} at={K16.report} />
			<FlowChart cx={1240} y={210} step={190} qw={780} pw={380} size={32} psize={27} final={{text: "Report each group. List what's still possible.", at: 6}} rows={[
				{q: 'NaHCO_3: fizz? (limewater milky)', yes: 'yes: –COOH supported', no: 'no: not detected', at: 2, lit: 'yes', litAt: K16.fizz},
				{q: 'bromine water: fades within seconds?', yes: 'yes: C=C supported', no: 'no: not detected', at: 3, lit: 'yes', litAt: K16.fade},
				{q: 'warm acidified K_2Cr_2O_7: green?', yes: 'yes: 1°/2° –OH supported', no: 'no: not detected', at: 4, lit: 'yes', litAt: K16.green, note: '(after a bromine fade: consistent only)'},
			]} />
			<Fade at={K16.next}>
				<rect x={1140} y={960} width={684} height={84} rx={42} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1482} y={1014} text="Next: functional group tests practical" size={32} color={NAVY} anchor="middle" weight={700} at={-1000} />
			</Fade>
			{void K16.so}{void K16.ask}{void K16.practical}{void K16.controls}
		</svg>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'C=C (among hydrocarbons, alcohols and acids): bromine water in normal room light, read at once. Orange → colourless within seconds: bromine adds and is used up. An alkane stays orange.',
	'–COOH: NaHCO_3 (or Na_2CO_3) fizzes: CH_3COOH + NaHCO_3 → CH_3COONa + H_2O + CO_2. The CO_2 turns limewater milky: CO_2 + Ca(OH)_2 → CaCO_3(s) + H_2O. Alcohols: no fizz.',
	'–OH: warm acidified K_2Cr_2O_7 goes orange → green with a 1° or 2° alcohol (aldehydes do it too, so check the candidates). 3° alcohols, alkanes and ethanoic acid usually stay orange.',
	'Orange means "no 1° or 2° alcohol detected", not "no OH". After a bromine fade, green alone doesn\'t prove an OH group.',
	'Use a fresh portion for each test and run all three: one molecule can have two groups. The tests show groups, not the full structure.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={33} aidTop={760} aids={['Fizz, fade, green.', 'Every no rules a candidate out.']} tag="run all three, each on a fresh portion" />
);
