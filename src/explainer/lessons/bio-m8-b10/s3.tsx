// B8-10 scenes 10a to 12: question 1 (two regions) with the countdown; its brief feedback (givens underlined, two rates,
// the age reason, framed answer, crossed "more cases"); question 2 (a three-measure table) with the countdown; its
// feedback (trends, the tank, crossed "more people are getting it"); the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, BLUE, BlankLines, Box, CARD, Chip, EDGE, Framed, GTag, HscTag, INK, INK_SOFT, Mistake, OLD, ON, Pause, Pic, PicH, PreRing, Pyramid, QPart, Spark3, Squares100, Svg, Sx, T, TEAL, TankS, Tbl,
	Title, YOUNG, marksCheck, prog, smooth, tblH,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q1_TBL, Q2_DEM, Q2_STEM, Q2_TBL, Q2_TBL_N, hold} from './common';
import {Calendar} from './parts';

// ---------- 10a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: two regions" />
		<HscTag />
		<Box x={96} y={150} w={1100} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={226} w={1040} size={40} />
		<Tbl t={Q1_TBL} x={126} y={360} size={38} rowH={96} />
		<QPart blocks={Q1_DEM} x={126} y={720} w={1040} size={38} />
		<PicH p={PL.lungs} cx={1380} cy={330} h={300} />
		<Pyramid x={1560} y={210} w={110} h={170} shape={YOUNG} color="#7f9cbd" label="X" size={32} />
		<Pyramid x={1700} y={210} w={110} h={170} shape={OLD} color={AMBER_INK} label="Y" size={32} />
		<Sx x={1690} y={460} text="Y: more people 65+" size={30} color={INK} anchor="middle" hand at={ON} />
		<BlankLines x={1240} y={540} w={584} h={280} label="your answer" />
		<Pause h={hold('attempt')} at={KA.pause} tx={1240} ty={895} cx={1752} cy={968} r={42} />
		<PreRing at={KA.pause - 12} start={hold('attempt').startFrame} x={1752} y={968} r={42} />
	</Svg>
);

// ---------- 10b. feedback one ----------
const KB = K('feedback-one', {x: 'Region X', over: 'over one', ff: 'forty-five', y: ['Region Y', 1], sixty: 'is sixty', but: 'But lung', older: "Y's older", higher: 'higher crude', fair: 'compare risk', age: 'age-standardised', classic: 'classic mistake', worse: 'X is worse'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [{phrase: 'much higher proportion of people aged 65 and over', at: KB.older, color: TEAL}]);
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: two regions" />
		<HscTag />
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={210} w={636} size={30} />
		<Tbl t={{...Q1_TBL, cols: [300, 170, 160]}} x={62} y={370} size={30} rowH={78} marks={{'1,1': KB.x + 10, '2,1': KB.x + 20, '1,2': KB.y, '2,2': KB.y + 10}} hot={[{r: 1, at: KB.x, out: KB.but}, {r: 2, at: KB.x, out: KB.but}]} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={680} w={636} size={30} />
		<AnsBox x={760} y={160} w={1064} h={520} label="answer" size={40} sizeOld={33} lines={[
			{t: 'X: 540 ÷ 1,200,000 × 100,000 = 45 per 100,000 per year', at: KB.over},
			{t: 'Y: 180 ÷ 300,000 × 100,000 = 60 per 100,000 per year', at: KB.y},
			{t: 'Y is older; lung cancer rises with age, so its crude rate is higher partly because of age', at: KB.older},
			{t: 'fair comparison: age-standardised rates', at: KB.age},
		]} />
		<GTag x={1300} y={700} text="b07: latency, so older people have had longer exposure" size={26} at={KB.but} />
		<Framed x={770} y={800} text="X: 45, Y: 60 per 100,000 per year" at={KB.sixty} size={42} />
		<Mistake x={770} y={850} text="X is worse: it had more cases" size={38} at={KB.classic} cross={KB.worse + 10} note="compare rates, not counts" noteW={800} />
	</Svg>
);

// ---------- 10c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: a three-measure table" />
		<HscTag />
		<Box x={96} y={150} w={1100} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={226} w={1040} size={40} />
		<Tbl t={Q2_TBL} x={126} y={286} size={34} rowH={122} headSize={32} />
		<QPart blocks={Q2_DEM} x={126} y={760} w={1040} size={38} />
		<rect x={1240} y={170} width={584} height={420} rx={20} fill={CARD} stroke={EDGE} strokeWidth={3} />
		<Sx x={1264} y={216} text="the table's three rows, 2005 to 2025" size={28} color={INK_SOFT} hand at={ON} />
		<Spark3 x={1290} y={280} w={300} h={60} vals={[60, 61, 59]} max={80} color="#7f9cbd" label="incidence" />
		<Spark3 x={1290} y={400} w={300} h={60} vals={[30, 22, 15]} max={40} color={AMBER_INK} label="mortality" />
		<Spark3 x={1290} y={520} w={300} h={60} vals={[300, 420, 540]} max={600} color={TEAL} label="prevalence" />
		<GTag x={1620} y={300} text="teaching data" size={26} />
		<BlankLines x={1240} y={620} w={584} h={210} label="your answer" />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1240} ty={895} cx={1752} cy={968} r={42} />
		<PreRing at={KC.pause - 12} start={hold('attempt-two').startFrame} x={1752} y={968} r={42} />
	</Svg>
);

// ---------- 10d. feedback two ----------
const KD = K('feedback-two', {inc: 'Incidence stayed', mort: 'Mortality halved', prev: 'Prevalence rose', pattern: 'The pattern', living: 'living longer', build: 'build up', classic: 'classic mistake', getting: 'more people'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const nar = smooth(prog(f, KD.living, 30));
	return (
		<Svg>
			<Title text="Feedback: reading three measures" />
			<HscTag />
			<Box x={40} y={150} w={680} h={890} />
			<QPart blocks={Q2_STEM} x={62} y={210} w={636} size={30} />
			<Tbl t={Q2_TBL_N} x={62} y={260} size={28} headSize={26} rowH={112} marks={{'1,1': KD.inc, '1,2': KD.inc + 4, '1,3': KD.inc + 8, '2,1': KD.mort, '2,2': KD.mort + 4, '2,3': KD.mort + 8, '3,1': KD.prev, '3,2': KD.prev + 4, '3,3': KD.prev + 8}} />
			<QPart blocks={Q2_DEM} x={62} y={760} w={636} size={30} />
			<AnsBox x={760} y={160} w={1064} h={360} label="answer (a)" size={40} sizeOld={34} lines={[
				{t: 'incidence: steady, about 60 per 100,000 per year', at: KD.inc + 10},
				{t: 'mortality: halved, 30 to 15', at: KD.mort + 10},
				{t: 'prevalence: rose, 300 to 540 per 100,000', at: KD.prev + 10},
			]} />
			<AnsBox x={760} y={540} w={720} h={250} label="answer (b)" size={36} lines={[{t: 'consistent with people living longer with it (for example, better treatment): existing cases build up while incidence stays similar', at: KD.living}]} />
			<g opacity={0.35 + 0.65 * prog(f, KD.living, 14)}>
				<TankS x={1530} y={600} w={170} h={170} level={0.5 + 0.35 * nar} inW={0.4} drainW={1 - 0.8 * nar} labels={false} />
			</g>
			<Sx x={1650} y={812} text="tap same, drain narrower" size={28} color={TEAL} anchor="middle" hand at={KD.living + 20} />
			<Mistake x={770} y={860} text="more people are getting it" size={38} at={KD.classic} cross={KD.getting + 10} note="incidence didn’t rise" noteW={700} />
			<Framed x={1300} y={1000} text="prevalence up: living longer" at={KD.build} size={36} />
		</Svg>
	);
};

// ---------- 11. decision rule ----------
const KR = K('decision-rule', {ask: 'ask three', newc: 'Is it new', over: 'Over what', count: 'is it a count', put: 'Put everything', next: 'Next'});
const PW = 400, PG = 42, PX = (i: number) => 96 + i * (PW + PG);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {head: string; at: number; thumb: React.ReactNode}[] = [
		{head: 'new cases, living with it, or deaths?', at: KR.newc, thumb: <TankS x={PX(0) + 110} y={400} w={140} h={160} level={0.6} split={1} drainW={0.6} labels={false} />},
		{head: 'which population, which time?', at: KR.over, thumb: <g><Squares100 x={PX(1) + 60} y={360} sp={20} lit={ON} nLit={50} /><Calendar x={PX(1) + 30} y={600} w={340} /></g>},
		{head: 'count, crude or age-standardised?', at: KR.count, thumb: <g><Pyramid x={PX(2) + 60} y={380} w={120} h={170} shape={YOUNG} color="#7f9cbd" label="" size={26} /><Pyramid x={PX(2) + 220} y={380} w={120} h={170} shape={OLD} color={AMBER_INK} label="" size={26} /><Sx x={PX(2) + 200} y={610} text="same age mix?" size={32} color={INK} anchor="middle" hand at={ON} /></g>},
		{head: 'one denominator before comparing', at: KR.put, thumb: <g><Chip x={PX(3) + 200} y={400} text="5.5%" size={38} color={AMBER_INK} anchor="middle" /><Sx x={PX(3) + 200} y={520} text="↓" size={50} color={INK} anchor="middle" at={ON} /><Chip x={PX(3) + 200} y={545} text="5,500 per 100,000" size={34} color={TEAL} anchor="middle" /></g>},
	];
	return (
		<Svg>
			<Title text="Any disease data: ask three things" />
			{steps.map((s, i) => {
				const L = prog(f, s.at, 14);
				return (
					<g key={i}>
						<rect x={PX(i)} y={180} width={PW} height={520} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 5 : 3} />
						<g opacity={0.42 + 0.58 * L}>
							<T x={PX(i) + 22} y={236} w={PW - 44} text={`${i + 1}. ${s.head}`} size={36} color={BLUE} lh={40} />
							{s.thumb}
						</g>
						{i < 3 ? <path d={`M${PX(i) + PW + 6},440 L${PX(i) + PW + PG - 8},440 M${PX(i) + PW + PG - 20},428 L${PX(i) + PW + PG - 8},440 L${PX(i) + PW + PG - 20},452`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" /> : null}
					</g>
				);
			})}
			<g opacity={0.35 + 0.65 * prog(f, KR.put, 14)}>
				<rect x={96} y={730} width={1728} height={96} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={960} y={792} text="New, living with it, or deaths? Which population and time? Then one denominator." size={40} color={BLUE} hand anchor="middle" at={ON} />
			</g>
			<GTag x={96} y={900} text="practice video: g01" size={30} at={KR.next} />
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={760} y={856} width={1064} height={150} rx={75} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				{[0, 1, 2].map(i => <rect key={i} x={826 + i * 34} y={966 - [50, 80, 30][i]} width={24} height={[50, 80, 30][i]} rx={4} fill={['#7f9cbd', AMBER_INK, TEAL][i]} />)}
				<line x1={816} x2={936} y1={968} y2={968} stroke={INK} strokeWidth={3} />
				<T x={960} y={922} w={840} text="Next: Epidemiology calculation and interpretation practice" size={38} color={INK} lh={44} />
			</g>
			{void Pic}{void tblH}
		</Svg>
	);
};

// ---------- 12. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={40} aidTop={760} tag="Line graph for change over time; bar graph for comparing groups; units on the axis." aid="Incidence is the tap, prevalence is the tank. Mort, as in mortuary." notes={[
		'Incidence: new cases ÷ population × 100,000, per year.',
		'Prevalence: everyone living with it at one time (as a % or per 100,000).',
		'Mortality: deaths from the disease ÷ the whole population × 100,000, per year.',
		'Every rate defines a case, the population at risk and the time window.',
		'Compare rates on one denominator; when ages differ, use age-standardised rates.',
	]} />
);
