// C8-13 scenes 12 to 17: attempt 1 (biodiesel: excess methanol and its recovery) with the oil plate and its givens;
// feedback 1 (givens underlined, answer lines, framed answer, crossed trap); attempt 2 (fuel ethanol: plan an extended
// response) with the cane and barrel plates; feedback 2 (the plan rows filling with evidence, crossed trap); the course
// close on the full factor board; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {FrameStrip} from '../bio-m8-b11/parts';
import {
	AMBER_INK, AnsBox, Box, CARD, FactorBoard, Framed, GREEN, GTag, HscTag, INK, Mistake, NAVY, Pause, Pic, PicH, PreRing, QPart, Svg, Sx, Title, marksCheck, prog,
} from './parts';
import type {QMark} from './parts';
import {fs} from './s1';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 12. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: biodiesel" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={236} w={1150} size={40} />
		<QPart blocks={Q1_DEM} x={126} y={720} w={1150} size={44} />
		<PicH p={PL.oil} cx={1580} cy={330} h={330} />
		<GTag x={1340} y={540} text="reversible" size={30} />
		<GTag x={1340} y={596} text="about twice the methanol" size={30} />
		<GTag x={1340} y={652} text="toxic, flammable" size={30} />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 13. feedback 1 ----------
const KB = K('feedback-1', {eq: 'an equilibrium', adding: 'adding extra', shifts: 'shifts it', costs: 'Methanol costs', toxic: "it's toxic", recovering: 'recovering it', trap: 'the trap', main: 'The main'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'The reaction is reversible', at: KB.eq},
	{phrase: 'about twice the amount of methanol', at: KB.adding},
	{phrase: 'recovered by distillation and reused', at: KB.recovering},
	{phrase: 'Methanol is toxic and flammable', at: KB.toxic},
]);
export const SceneFeedback1: React.FC = () => (
	<Svg>
		<Title text="Feedback: the equilibrium, then recovery" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={30} lh={40} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={640} w={656} size={30} />
		<PicH p={PL.oil} cx={390} cy={880} h={230} />
		<AnsBox x={780} y={170} w={1044} h={400} label="answer" size={44} sizeOld={34} lines={[
			{t: 'reversible: excess methanol (a reactant) shifts the equilibrium right, so more oil is converted', at: KB.shifts},
			{t: 'recover methanol: lower cost, less waste, less hazard (toxic, flammable)', at: KB.recovering},
		]} />
		<GTag x={780} y={590} text="Module 5: add a reactant, shift to products" size={28} at={KB.shifts + 20} />
		<Framed x={780} y={740} text="equilibrium position, then recovery" at={KB.main} size={46} />
		<Mistake x={780} y={790} text="excess methanol: mainly for speed" size={40} at={KB.trap - 30} cross={KB.trap} note="the main reason is the equilibrium position" noteW={1040} />
	</Svg>
);

// ---------- 14. attempt 2 ----------
const KC = K('attempt-2', {plan: 'Plan it', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: plan an extended response" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={220} w={1150} size={30} lh={38} />
		<QPart blocks={Q2_DEM} x={126} y={780} w={1150} size={44} />
		<Sx x={126} y={880} text="Plan your answer: a verdict, then one line per paragraph." size={40} color={NAVY} hand at={KC.plan} />
		<PicH p={PL.cane} cx={1480} cy={320} h={300} />
		<PicH p={PL.barrel} cx={1730} cy={340} h={240} />
		<GTag x={1340} y={520} text="longer task: pause the video" size={30} />
		<GTag x={1340} y={576} text="and take about a minute" size={30} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 15. feedback 2 ----------
const KD = K('feedback-2', {verdict: 'the verdict', ferment: 'Fermentation suits', provided: 'provided it', distill: 'the distillation', waste: 'cane waste', then: 'Then one', supply: 'supply', cond: 'conditions and', sep: 'separation and', co2: 'carbon dioxide', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'close to sugar-cane farms and mills', at: KD.supply},
	{phrase: 'ethene made from crude oil', at: KD.supply + 8},
	{phrase: 'the process runs continuously', at: KD.cond},
	{phrase: 'each batch takes days', at: KD.cond + 8},
	{phrase: 'stops at about 15% ethanol', at: KD.sep},
	{phrase: 'which uses energy', at: KD.distill},
	{phrase: 'burn cane waste', at: KD.waste},
	{phrase: 'taken up again by the next crop', at: KD.co2},
]);
export const SceneFeedback2: React.FC = () => (
	<Svg>
		<Title text="Feedback: a plan with a verdict" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q2_STEM} marks={M_D} x={60} y={200} w={664} size={26} lh={33} />
		<QPart blocks={Q2_DEM} marks={M_D} x={60} y={900} w={664} size={28} />
		<FrameStrip x={780} y={150} w={1044} rowH={118} gap={8} size={30} headW={310} heads={['verdict', 'supply', 'conditions, rate', 'separation, energy', 'carbon dioxide']} lit={[KD.verdict, KD.supply, KD.cond, KD.sep, KD.co2]} slots={[
			{t: 'fermentation suits this company better, provided distillation is powered cheaply (burn cane waste)', at: KD.provided},
			{t: 'cane is local and renewable; ethene comes from crude oil', at: KD.supply + 6},
			{t: '30 to 35 °C, normal pressure, slow batches; hydration fast, continuous, 300 °C, 60 to 70 atm', at: KD.cond + 6},
			{t: 'both separate ethanol from water; fermentation stops at about 15%; distilling uses energy', at: KD.sep + 6},
			{t: 'taken up by the next crop; farming and distilling still use energy', at: KD.co2 + 6},
		]} />
		<Mistake x={780} y={796} text="advantages and disadvantages, no verdict" size={38} at={KD.trap - 30} cross={KD.trap} note="verdict first, with its condition" noteW={1040} />
		{void AMBER_INK}{void Pic}
	</Svg>
);

// ---------- 16. course close ----------
const KR = K('course-close', {any: 'any synthesis', reagents: 'the reagents', conditions: 'which conditions', pure: 'how pure', safe: 'how safe', serves: 'who it', weigh: 'Then weigh', judgement: 'a judgement', course: 'Chemistry course'});
const BIG = {x: 520, y: 210, w: 880, h: 56, gap: 8};
export const SceneClose: React.FC = () => {
	const f = useCurrentFrame();
	const lit: [number[], number][] = [[[0], KR.reagents], [[1, 2], KR.conditions], [[3, 4], KR.pure], [[5, 6], KR.safe], [[7, 8], KR.serves]];
	const st = Array.from({length: 9}, (_, i) => { const g = lit.find(l => l[0].includes(i)); return {done: ON, lit: g ? g[1] : undefined}; }).map(s => ({lit: s.lit, done: s.lit === undefined ? ON : KR.weigh}));
	const br = prog(f, KR.judgement, 14);
	return (
		<Svg>
			<Title text="For any synthesis" />
			<FactorBoard g={BIG} size={36} st={st} />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M${BIG.x - 30},${BIG.y - 10} L${BIG.x - 50},${BIG.y - 10} L${BIG.x - 50},${BIG.y + 9 * 64 + 2} L${BIG.x - 30},${BIG.y + 9 * 64 + 2}`} fill="none" stroke={GREEN} strokeWidth={6} />
				<path d={`M${BIG.x + BIG.w + 30},${BIG.y - 10} L${BIG.x + BIG.w + 50},${BIG.y - 10} L${BIG.x + BIG.w + 50},${BIG.y + 9 * 64 + 2} L${BIG.x + BIG.w + 30},${BIG.y + 9 * 64 + 2}`} fill="none" stroke={GREEN} strokeWidth={6} />
				<Sx x={BIG.x - 70} y={BIG.y + 300} text="verdict" size={34} color={GREEN} anchor="end" hand at={ON} />
				<Sx x={BIG.x + BIG.w + 70} y={BIG.y + 300} text="with its condition" size={34} color={GREEN} hand at={ON} />
			</g> : null}
			<Sx x={960} y={850} text="weigh them, then judge, with a condition" size={46} color={NAVY} anchor="middle" hand at={KR.weigh} />
			<g opacity={prog(f, KR.course, 14)}>
				<rect x={460} y={890} width={1000} height={100} rx={50} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={960} y={952} text="End of Module 8 Chemistry: Applying Chemical Ideas" size={36} color={INK} anchor="middle" hand at={ON} />
			</g>
			<PicH p={PL.tablets} cx={220} cy={790} h={140} />
			<PicH p={PL.bath} cx={1740} cy={760} h={200} />
			{void fs}
		</Svg>
	);
};

// ---------- 17. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={42} aidTop={640} tag="evaluating a synthesis" aids={['Yield tells you how much product you collected, not how good the route is.', 'Verdict, factors with evidence, verdict with a condition.']} notes={[
		'Aspirin: salicylic acid + ethanoic anhydride → aspirin + ethanoic acid.',
		'Anhydride: no water forms, so the reaction nearly completes.',
		'Factors: supply, equilibrium, rate, yield, purity, safety, waste, cost.',
		'Recrystallise: purer, less product. Iron(III) chloride: violet if impure.',
		'Evaluate: verdict, a factor per paragraph, verdict with a condition.',
	]} />
);
