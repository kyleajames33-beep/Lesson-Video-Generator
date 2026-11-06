// B8-08 scenes 9a to 11: question 1 (a teenager indoors) with the countdown; its brief feedback (givens underlined,
// three answer lines, the bones bending, framed answer, crossed "drink more milk"); question 2 (reading the rates) with
// the chart and the countdown; its feedback (bars lit, the 1 000-dot grid, framed answer, crossed slip); the decision
// rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {DotBlock} from '../bio-m8-g01/parts';
import {
	AMBER_INK, AnsBox, BLUE, BalanceBeam, BarChart, BlankLines, Box, CARD, Chip, EDGE, Framed, GTag, HscTag, INK, INK_SOFT, Mistake, Pause, Pic, PicH, PicPair, QPart, RiskDial, Svg, Sx, T, TEAL, Title,
	marksCheck, prog, tiltSteps, PreRing,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

// ---------- 9a. question 1 ----------
/** A daylight clock strip: 6 am to 6 pm, all shaded "indoors" (a given of the question). */
const DayStrip: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
	<g>
		<rect x={x} y={y} width={w} height={40} rx={10} fill="#d8d3c8" stroke={INK_SOFT} strokeWidth={3} />
		{[0, 0.25, 0.5, 0.75, 1].map(t => <line key={t} x1={x + t * w} x2={x + t * w} y1={y + 40} y2={y + 52} stroke={INK} strokeWidth={3} />)}
		<Sx x={x} y={y + 84} text="6 am" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
		<Sx x={x + w} y={y + 84} text="6 pm" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
		<Sx x={x + w / 2} y={y + 30} text="indoors" size={30} color={INK} anchor="middle" hand at={-1000} />
		<Sx x={x + w / 2} y={y + 128} text="all daylight hours indoors" size={30} color={INK} anchor="middle" hand at={-1000} />
	</g>
);
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a teenager indoors" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={230} w={1150} size={44} />
		<QPart blocks={Q1_DEM} x={126} y={540} w={1150} size={42} />
		<PicH p={PL.sun} cx={1470} cy={290} h={250} />
		<PicH p={PL.legN} cx={1730} cy={370} h={430} />
		<DayStrip x={1350} y={470} w={300} />
		<BlankLines x={1340} y={640} w={484} h={180} label="your answer" />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={880} cx={1745} cy={952} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={952} r={46} />
	</Svg>
);

// ---------- 9b. feedback one ----------
const KB = K('feedback-one', {nutrient: 'The nutrient', vitD: 'vitamin D', job: 'its job', calcium: 'calcium', sun: 'little sunlight', skin: 'the skin', less: 'less calcium', growing: 'Growing bone', harden: 'harden', soft: 'stays soft', bend: 'bend under', rickets: 'which is rickets', classic: 'classic mistake', milk: 'drink', without: 'Without vitamin'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [{phrase: 'low vitamin D level', at: KB.vitD}, {phrase: 'almost all daylight hours indoors', at: KB.sun}, {phrase: 'absorbing little calcium', at: KB.less}]);
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: vitamin D and bone" />
		<HscTag />
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={210} w={636} size={32} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={480} w={636} size={32} />
		<PicH p={PL.sun} cx={380} cy={790} h={190} />
		<AnsBox x={760} y={160} w={760} h={500} label="answer" size={40} sizeOld={34} lines={[
			{t: 'nutrient: vitamin D; job: gut absorbs calcium', at: KB.job},
			{t: 'little sunlight → skin makes little vitamin D → less calcium absorbed', at: KB.skin},
			{t: 'effect: soft, poorly mineralised bone bends: rickets', at: KB.soft},
		]} />
		<PicPair a={PL.legN} b={PL.legR} cx={1680} cy={400} w={(480 * 208) / 1210} at={KB.bend} dur={40} />
		<Framed x={760} y={746} text="soft bones bend: rickets" at={KB.rickets} size={46} />
		<Mistake x={760} y={800} text="drink more milk" size={42} at={KB.classic} cross={KB.milk + 6} note="no vitamin D, poor calcium absorption" noteW={1000} />
	</Svg>
);

// ---------- 9c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: reading the rates" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={214} w={1660} size={40} />
		<BarChart g={{x: 230, y: 340, w: 860, h: 400}} size={28} lsize={26} />
		<GTag x={1180} y={300} text="teaching data" size={30} />
		<QPart blocks={Q2_DEM} x={1180} y={420} w={610} size={36} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1180} ty={900} cx={1735} cy={950} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1735} y={950} r={46} />
	</Svg>
);

// ---------- 9d. feedback two ----------
const KD = K('feedback-two', {obesity: 'Obesity', family: 'family history', together: 'together', highest: ['the highest', 1], but: 'But even', thirty: 'thirty in', most: "most didn't", healthy: 'healthy-weight', data: 'the data', measure: 'measure food', classic: 'classic mistake', guarantee: 'guarantee'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [{phrase: 'Identify TWO risk factors', at: KD.obesity}, {phrase: 'Eating too much causes type 2 diabetes', at: KD.data}]);
export const SceneFeedbackTwo: React.FC = () => (
	<Svg>
		<Title text="Feedback: a rate is a chance" />
		<HscTag />
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q2_STEM} marks={M_D} x={62} y={200} w={636} size={28} />
		<BarChart g={{x: 120, y: 370, w: 560, h: 270}} size={26} lsize={26} ob={KD.obesity} fh={KD.family} pulses={[[3, KD.together], [3, KD.thirty], [0, KD.healthy], [1, KD.healthy]]} />
		<QPart blocks={Q2_DEM} marks={M_D} x={62} y={850} w={636} size={27} />
		<AnsBox x={760} y={160} w={1064} h={150} label="answer (a)" size={42} lines={[{t: 'obesity (excess body fat); family history', at: KD.family + 10}]} />
		<DotBlock x={800} y={420} cols={40} rows={25} sp={11} n={30} tint={KD.thirty} seed={11} label="30 of 1 000 adults per year" labelAt={KD.thirty} />
		<AnsBox x={1290} y={340} w={534} h={400} label="answer (b)" size={36} sizeOld={32} lines={[
			{t: 'most with both risk factors did not develop it; some without them did', at: KD.most},
			{t: 'food intake not measured: the data can’t show eating too much caused these cases', at: KD.measure},
		]} />
		<Framed x={760} y={786} text="a risk factor raises the chance" at={KD.most + 30} size={42} />
		<Mistake x={760} y={830} text="higher rate = it will happen to you" size={40} at={KD.classic} cross={KD.guarantee} note="a rate is a chance" noteW={900} />
	</Svg>
);

// ---------- 10. decision rule ----------
const KR = K('decision-rule', {name: 'name the nutrient', job: 'normal job', say: 'say what', link: 'link it', ask: 'then ask', one: 'one missing', rf: 'one risk factor', next: 'Next'});
const PW = 390, PG = 56, PX = (i: number) => 96 + i * (PW + PG);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {head: string; line: string; at: number; thumb: React.ReactNode}[] = [
		{head: '1. nutrient and its job', line: 'what it normally does', at: KR.name, thumb: <g><Pic p={PL.rbcFe} cx={PX(0) + 120} cy={400} w={180} /><PicH p={PL.bread} cx={PX(0) + 290} cy={400} h={120} /></g>},
		{head: '2. too little or too much?', line: 'deficiency or excess', at: KR.say, thumb: <BalanceBeam x={PX(1) + PW / 2} y={380} tilt={tiltSteps([[KR.say + 10, -1], [KR.say + 40, 1], [KR.say + 70, 0]])} L={110} size={30} />},
		{head: '3. effect', line: 'link the change to the disease', at: KR.link, thumb: <g><PicH p={PL.thyG} cx={PX(2) + 140} cy={400} h={150} /><PicH p={PL.legR} cx={PX(2) + 320} cy={400} h={200} /></g>},
		{head: '4. one cause, or one risk factor among many?', line: 'scurvy: one cause; type 2: many factors', at: KR.ask, thumb: <RiskDial cx={PX(3) + PW / 2} cy={460} r={90} val={() => 0.55} title="" size={28} />},
	];
	return (
		<Svg>
			<Title text="Any nutrition question" />
			{steps.map((s, i) => {
				const L = prog(f, s.at, 14);
				return (
					<g key={i}>
						<rect x={PX(i)} y={200} width={PW} height={440} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 5 : 3} />
						<g opacity={0.45 + 0.55 * L}>
							<T x={PX(i) + 20} y={250} w={PW - 40} text={s.head} size={34} color={BLUE} lh={38} />
							{s.thumb}
							<T x={PX(i) + 20} y={566} w={PW - 40} text={s.line} size={34} color={INK} lh={38} />
						</g>
						{i < 3 ? <path d={`M${PX(i) + PW + 8},420 L${PX(i) + PW + PG - 10},420 M${PX(i) + PW + PG - 24},406 L${PX(i) + PW + PG - 10},420 L${PX(i) + PW + PG - 24},434`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" /> : null}
					</g>
				);
			})}
			<g opacity={prog(f, KR.rf, 14)}>
				<rect x={96} y={680} width={1728} height={100} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={960} y={746} text="Nutrient, job, change, effect. Then: one cause, or one risk factor?" size={46} color={BLUE} hand anchor="middle" at={-1000} />
			</g>
			<GTag x={96} y={880} text="Later: managing type 2 diabetes (b12)" size={32} at={KR.next} />
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={900} y={830} width={924} height={150} rx={75} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.cellDiv} cx={990} cy={905} h={120} />
				<Sx x={1070} y={920} text="Next: How does cancer begin and spread?" size={42} color={INK} hand at={-1000} />
			</g>
			{void Chip}{void TEAL}
		</Svg>
	);
};

// ---------- 11. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={42} aidTop={760} tag="Vitamin D: skin makes it in sunlight; food and supplements also supply it" aid="sCurvy is vitamin C. Rickets: think vitamin D." notes={[
		'Nutrient → normal job → change (too little or too much) → effect.',
		'Iron → haemoglobin → less O₂ carried (anaemia). Iodine → thyroid hormone; low: more TSH (goitre).',
		'Vitamin C → strong collagen (scurvy). Vitamin D → gut absorbs calcium (rickets).',
		'Type 2: excess energy → body fat → cells respond less to insulin → beta cells fall behind.',
		'A risk factor raises the chance of disease; it doesn’t guarantee it.',
	]} />
);
