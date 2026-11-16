// B8-13 scenes 10a to 12: question 1 (a school shade policy) with the shade-sail plate and its UV givens; its brief
// feedback (givens underlined, the ladder with only the impact rung lit, answer lines, framed judgement, crossed slip);
// question 2 (improve a council campaign) with the shoes plate and its givens; its feedback (barrier, two changes and a
// measure, framed answer, crossed slip); the decision rule with the campaign frame and the ladder; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {FrameStrip} from '../bio-m8-b11/parts';
import {
	AMBER_INK, AnsBox, BLUE, Box, C_LIFE, CARD, CampaignFrame, DnaMini, EDGE, Framed, GREYT, GTag, GroupBars, HscTag, INK, LADC, Ladder, Mistake, Pause, Pic, PicH, PreRing, QPart, RED, RUNGS, Svg, Sx, T, TEAL,
	TickLine, Title, marksCheck, prog,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 10a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a school shade policy" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={44} />
		<QPart blocks={Q1_DEM} x={126} y={760} w={1150} size={44} />
		<Pic p={PL.sail} cx={1580} cy={300} w={270} />
		<Sx x={1370} y={490} text="UV in school hours (shape)" size={30} color={INK} weight={800} at={ON} />
		<GroupBars g={{x: 1420, y: 520, w: 360, h: 160}} max={100} ticks={[]} showVal={false} size={28} bars={[{lab: 'year before', v: 100, color: '#a8a092', at: ON}, {lab: 'this year', v: 60, color: TEAL, at: ON}]} />
		<Sx x={1690} y={568} text="40% less" size={30} color={TEAL} anchor="middle" hand at={ON} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 10b. feedback one ----------
const KB = K('feedback-one', {memory: 'without relying', impact: 'impact measures', stronger: 'stronger than', observed: 'observed and', year: 'But one', promising: 'promising', classic: 'classic mistake', saying: 'saying it'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'built shade sails', at: KB.memory},
	{phrase: 'part of its uniform', at: KB.memory + 8},
	{phrase: 'more students in shade', at: KB.impact},
	{phrase: '40% less UV exposure', at: KB.impact + 8},
	{phrase: 'independent observers', at: KB.observed},
	{phrase: 'personal UV meters', at: KB.observed + 8},
	{phrase: 'Over one school year', at: KB.year},
]);
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: impact now, outcome later" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={32} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={640} w={656} size={32} />
		<Pic p={PL.sail} cx={390} cy={890} w={260} />
		<AnsBox x={780} y={160} w={680} h={560} label="answer" size={44} sizeOld={34} lines={[
			{t: 'conditions, not information: no need to remember', at: KB.memory},
			{t: 'impact measures: behaviour and exposure changed', at: KB.impact},
			{t: 'observed and measured: stronger than self-report', at: KB.observed},
			{t: 'one year: no melanoma outcome yet (decades)', at: KB.year},
		]} />
		<Ladder x={LADC.x} y={170} w={LADC.w} h={540} rungs={RUNGS([undefined, KB.impact, undefined])} compact />
		<Framed x={780} y={800} text="promising; outcome evidence still to come" at={KB.promising} size={44} />
		<Mistake x={780} y={846} text="melanoma has been prevented" size={38} at={KB.classic} cross={KB.saying} note="impact now, outcome later" noteW={1040} />
	</Svg>
);

// ---------- 10c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: improve a campaign" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={44} />
		<QPart blocks={Q2_DEM} x={126} y={700} w={1150} size={44} />
		<Pic p={PL.shoes} cx={1580} cy={270} w={300} />
		<Sx x={1350} y={430} text="after six months online:" size={30} color={INK} weight={800} at={ON} />
		<TickLine x={1350} y={490} text="risk-factor knowledge: up" at={ON} size={34} />
		<TickLine x={1350} y={550} text="measured activity: no change" at={ON} size={34} minus color={INK} />
		<GTag x={1350} y={590} text="long or irregular shifts" size={30} />
		<GTag x={1350} y={650} text="few footpaths" size={30} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 10d. feedback two ----------
const KD = K('feedback-two', {change: 'Change the', footpaths: 'Build footpaths', fits: 'fits into', offer: 'Offer free', where: 'where people', support: 'then support', measure: 'Measure activity', rates: 'new diabetes', comparison: 'comparison area', classic: 'classic mistake', proposing: 'proposing more'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'knew more about its risk factors', at: KD.change},
	{phrase: 'measured physical activity did not change', at: KD.change + 8},
	{phrase: 'few streets in the area have footpaths', at: KD.footpaths},
	{phrase: 'long or irregular shifts', at: KD.where},
]);
export const SceneFeedbackTwo: React.FC = () => (
	<Svg>
		<Title text="Feedback: remove the barrier" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q2_STEM} marks={M_D} x={62} y={212} w={656} size={32} />
		<QPart blocks={Q2_DEM} marks={M_D} x={62} y={560} w={656} size={32} />
		<Pic p={PL.shoes} cx={390} cy={860} w={320} />
		<FrameStrip x={780} y={150} w={1044} rowH={128} gap={10} size={36} headW={250} heads={['barrier', 'change 1', 'change 2', 'measure']} lit={[KD.change, KD.footpaths, KD.offer, KD.measure]} slots={[
			{t: "knowing isn't doing: conditions block activity", at: KD.change + 10},
			{t: 'footpaths and safe routes: activity fits travel and shifts', at: KD.fits},
			{t: 'free risk checks at work and pharmacies; early support', at: KD.support},
			{t: 'activity first, then new diabetes rates; a comparison area', at: KD.comparison},
		]} />
		<GTag x={780} y={706} text="b12: early weight loss can reverse it" size={28} at={KD.support + 20} />
		<GTag x={1824} y={706} text="more testing finds more cases at first" size={28} anchor="end" at={KD.comparison + 10} />
		<Framed x={780} y={820} text="change the conditions, then measure" at={KD.comparison + 20} size={46} />
		<Mistake x={780} y={862} text="more information" size={40} at={KD.classic} cross={KD.proposing} note="remove the barrier" noteW={1040} />
	</Svg>
);

// ---------- 11. decision rule ----------
const KR = K('decision-rule', {any: 'any campaign', name: 'Name the', people: 'the people', judge: 'judge the', process: 'process', impact: 'impact and', outcome: 'outcome', who: 'who it', propose: 'propose a', barrier: 'removes a', next: 'Next'});
const RW = [400, 400, 400, 400];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const next = prog(f, KR.next, 14);
	const cards: [string, string, string, number][] = [['process', 'what we did', 'months', KR.process], ['impact', 'what people did', 'years', KR.impact], ['outcome', 'what the disease did', 'decades', KR.outcome], ['who was missed?', 'equity', '', KR.who]];
	return (
		<Svg>
			<Title text="For any campaign" />
			<CampaignFrame x={96} y={190} ws={RW} gap={42} h={180} size={32} lit={[KR.name, KR.people, KR.barrier, KR.judge]} items={[[{t: 'which exposure?', at: KR.name}], [{t: 'who must it reach?', at: KR.people}], [{t: 'remove a barrier for them', at: KR.barrier}], [{t: 'process, impact, outcome', at: KR.judge}]]} />
			{cards.map(([h, t, tm, at], i) => {
				const L = prog(f, at, 14);
				const x = 96 + i * 442;
				return <g key={h}>
					<rect x={x} y={440} width={400} height={200} rx={18} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
					<Sx x={x + 20} y={492} text={h} size={40} color={L > 0.5 ? BLUE : GREYT} hand at={ON} />
					<Sx x={x + 20} y={552} text={t} size={36} color={L > 0.5 ? INK : GREYT} hand at={ON} />
					{tm ? <g><rect x={x + 20} y={590} width={[60, 140, 280][i]} height={14} rx={7} fill={L > 0.5 ? TEAL : '#cfc8bb'} /><Sx x={x + 32 + [60, 140, 280][i]} y={604} text={tm} size={28} color={L > 0.5 ? TEAL : GREYT} hand at={ON} /></g> : null}
				</g>;
			})}
			<Sx x={96} y={740} text="what we did, what people did, what the disease did" size={50} color={BLUE} hand at={KR.outcome + 20} />
			<PicH p={PL.sail} cx={240} cy={900} h={140} />
			<Sx x={400} y={912} text="change the conditions" size={36} color={C_LIFE} hand at={KR.barrier} />
			<g opacity={next}>
				<rect x={900} y={860} width={924} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<DnaMini x={950} y={895} w={130} h={60} />
				<T x={1110} y={912} w={690} text="Next: When can genetics help prevent disease?" size={36} color={INK} />
			</g>
			{void RED}{void PicH}
		</Svg>
	);
};

// ---------- 12. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={44} aidTop={690} tag="the evidence ladder" aid="Process, impact, outcome: what we did, what people did, what the disease did." notes={[
		'Primary: stop exposure. Secondary: detect early. Tertiary: limit damage.',
		'Design from the mechanism: exposure, audience, action, measure.',
		"Knowing isn't doing: change conditions so the safe choice is easy.",
		'SunSmart: more hats and shade; melanoma falling in younger people.',
		'Judge the sources; measure high-risk groups separately.',
	]} />
);
