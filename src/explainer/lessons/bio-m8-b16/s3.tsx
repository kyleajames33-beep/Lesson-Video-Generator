// B8-16 scenes 10a to 12: question 1 (a changing prescription) with the plain eye plate and its givens; its brief
// feedback (givens underlined, the long eye with the focus in front, answer lines, framed answer, crossed slip);
// question 2 (a cloudy lens) with the cataract eye and its givens; its feedback (cataract to artificial lens, answer
// lines, framed answer, crossed slip); the decision rule on the light pathway strip and the handoff to b17; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, BLUE, Box, C_GL, C_LASER, C_SWAP, CARD, Chip, EyeStack, EyeStrip, FocalMark, Framed, GTag, HscTag, INK, Mistake, Pause, PicH, PreRing, QPart, Rays, Svg, Sx, Title, marksCheck, prog, smooth,
} from './parts';
import type {EyeG, QMark} from './parts';
import {fogChip, missChip} from './s1';
import {FP, PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 10a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a changing prescription" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q1_DEM} x={126} y={540} w={1150} size={46} />
		<EyeStack g={{cx: 1580, cy: 330, w: 380}} base={PL.eye} />
		<GTag x={1340} y={560} text="phone: clear" size={30} />
		<GTag x={1340} y={616} text="slides at a distance: blurred" size={30} />
		<GTag x={1340} y={672} text="prescription stronger each year" size={30} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 10b. feedback one ----------
const KB = K('feedback-one', {myopia: "It's myopia", long: 'too long', front: 'in front', phone: 'nearby phone', changing: 'still changing', drift: 'could drift', undone: 'be undone', glasses: 'Glasses or', classic: 'classic mistake', choosing: 'choosing laser'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'read their phone clearly', at: KB.myopia},
	{phrase: 'blurred from the back of the room', at: KB.myopia + 8},
	{phrase: 'stronger each year for the past three years', at: KB.changing},
]);
const GB: EyeG = {cx: 1480, cy: 290, w: 300};
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: myopia, and why not laser yet" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={33} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={440} w={656} size={33} />
		<PicH p={PL.glasses} cx={390} cy={900} h={140} />
		<EyeStack g={GB} base={PL.long} />
		<Rays g={GB} xF={FP.retina} xR={FP.retinaLong} srcX={1250} at={KB.front} spread={170} />
		<FocalMark g={GB} x={FP.retina} at={KB.front + 10} />
		<Sx x={800} y={240} text="myopia" size={56} color={BLUE} hand at={KB.myopia} />
		<Sx x={800} y={300} text="(short-sightedness)" size={36} color={INK} hand at={KB.myopia + 6} />
		<AnsBox x={780} y={460} w={1044} h={300} label="answer" size={42} sizeOld={32} lines={[
			{t: '(a) eye too long or too powerful: distant light focuses in front of the retina', at: KB.front},
			{t: '(b) eyes still changing: a permanent laser fix could drift', at: KB.drift},
			{t: "laser removes tissue: can't be undone", at: KB.undone},
			{t: 'glasses or contacts: changed with the prescription', at: KB.glasses},
		]} />
		<Framed x={780} y={834} text="glasses or contacts, for now" at={KB.glasses + 20} size={46} />
		<Mistake x={780} y={874} text="choose laser surgery because it's permanent" size={36} at={KB.classic} cross={KB.choosing} note="permanent is the problem while eyes change" noteW={1040} />
		{void AMBER_INK}
	</Svg>
);

// ---------- 10c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: a cloudy lens" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q2_DEM} x={126} y={600} w={1150} size={46} />
		<EyeStack g={{cx: 1580, cy: 330, w: 380}} base={PL.cat} />
		<GTag x={1340} y={560} text="dim, cloudy vision; glare" size={30} />
		<GTag x={1340} y={616} text="new glasses: no help" size={30} />
		<GTag x={1340} y={672} text="cloudy lens, healthy retina" size={30} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 10d. feedback two ----------
const KD = K('feedback-two', {cataract: 'a cataract', why: 'why new', removes: 'Surgery removes', light: 'lets light', healthy: 'healthy retina', reading: 'But reading', infection: 'small risk', balance: 'On balance', classic: 'classic mistake', thinking: 'thinking laser'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'a cloudy lens', at: KD.cataract},
	{phrase: 'glare from car headlights', at: KD.cataract + 8},
	{phrase: 'New glasses have not improved their vision', at: KD.why},
	{phrase: 'a healthy retina', at: KD.healthy},
]);
const GD: EyeG = {cx: 1480, cy: 290, w: 300};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const io = smooth(prog(f, KD.light, 30));
	return (
		<Svg>
			<Title text="Feedback: replace the cloudy lens" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={62} y={212} w={656} size={33} />
			<QPart blocks={Q2_DEM} marks={M_D} x={62} y={480} w={656} size={33} />
			<PicH p={PL.lens} cx={390} cy={820} h={260} />
			<EyeStack g={GD} base={PL.cat} layers={[{p: PL.iol, o: io}]} />
			<Rays g={GD} xF={FP.retina} xR={FP.retina} srcX={1250} scatter={1 - io} spread={170} />
			<Sx x={800} y={240} text="cataract:" size={50} color={BLUE} hand at={KD.cataract} />
			<Sx x={800} y={300} text="a clarity fault" size={40} color={INK} hand at={KD.cataract + 10} />
			<AnsBox x={780} y={460} w={1044} h={300} label="answer" size={42} sizeOld={32} lines={[
				{t: "cloudy lens scatters light; glasses can't clear it", at: KD.why},
				{t: 'clear artificial lens; healthy retina, so vision can return', at: KD.healthy},
				{t: 'limits: reading glasses still needed; small infection risk', at: KD.reading},
				{t: 'judgement: a strong choice here', at: KD.balance},
			]} />
			<Framed x={780} y={834} text="a strong choice here" at={KD.balance + 10} size={46} />
			<Mistake x={780} y={874} text="laser surgery on the cornea" size={38} at={KD.classic} cross={KD.thinking} note="the cloud is in the lens, not the cornea" noteW={1040} />
		</Svg>
	);
};

// ---------- 11. decision rule ----------
const KR = K('decision-rule', {ask: 'ask where', focus: 'If the focus', move: 'move the', glasses: 'glasses', contact: 'contact lenses', laser: 'laser surgery', cloudy: 'If the lens', replace: 'replace it', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const next = prog(f, KR.next, 14);
	return (
		<Svg>
			<Title text="For any vision question" />
			<Sx x={96} y={214} text="ask where the light goes wrong" size={52} color={BLUE} hand at={KR.ask} />
			<Chip x={96} y={250} text="focus misses the retina: move the focus" size={36} color={AMBER_INK} ink={INK} at={KR.focus} />
			<Chip x={96} y={330} text="lens cloudy: replace the lens" size={36} color="#8d857a" ink={INK} at={KR.cloudy} />
			<EyeStack g={{cx: 1380, cy: 330, w: 300}} base={PL.long} o={prog(f, KR.focus, 14)} />
			<EyeStack g={{cx: 1700, cy: 330, w: 300}} base={PL.cat} o={prog(f, KR.cloudy, 14)} />
			<EyeStrip y={450} s={{lit: [ON, ON, ON, ON, ON, ON], fog: KR.cloudy, fogOut: KR.replace + 20, items: [
				[{t: 'glasses', at: KR.glasses, chip: C_GL}],
				[{t: 'contacts', at: KR.contact, chip: C_GL}, {t: 'laser', at: KR.laser, chip: C_LASER}],
				[fogChip(KR.cloudy, KR.replace), {t: 'new lens', at: KR.replace + 10, chip: C_SWAP}],
				[missChip(KR.focus, KR.laser + 20)],
			]}} />
			<Sx x={96} y={720} text="move the focus, or clear the path" size={48} color={INK} hand at={KR.replace + 20} />
			<g opacity={next}>
				<rect x={900} y={860} width={924} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.kidney} cx={990} cy={925} h={100} />
				<Sx x={1070} y={938} text="Next: What can replace lost kidney function?" size={36} color={INK} hand at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 12. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={44} aidTop={690} tag="ask where the light goes wrong" aid={"Myopia: you see what's near “my” eyes."} notes={[
		'Light path: cornea (most bending), lens (fine focus), retina, nerve.',
		'Myopia: eye too long, focus in front: concave. Hyperopia: convex.',
		'Astigmatism: toric lens. Presbyopia: stiff lens with age.',
		'Cataract: cloudy lens scatters light; replace the lens.',
		'LASIK reshapes the cornea: permanent; needs a stable prescription.',
	]} />
);
