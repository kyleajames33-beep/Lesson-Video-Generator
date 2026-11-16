// B8-12 scenes 11a to 13: question 1 (a rising HbA1c) as the full worded card with the metformin, activity and pen
// plates and the HbA1c meter showing its givens; its brief feedback (givens underlined, meter 7.0 to 8.4, the jammed
// lock, answer lines, framed answer, crossed slip); question 2 (unseen trial evidence) with its two-bar chart and the gut
// plate; its feedback (the evidence rows filling, bracket "difference 1.1", framed judgement, crossed slip); the decision
// rule with both strips and the handoff to b13; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {FrameStrip} from '../bio-m8-b11/parts';
import {
	AMBER_INK, AnsBox, BLUE, Box, C_CARE, C_INS, C_LIFE, C_MET, CARD, Calendar, EDGE, Framed, GTag, GroupBars, HscTag, INK, INK_SOFT, KeyLock, Meter, Mistake, Pause, Pic, PicH, PreRing, QPart, SlotStrip, Svg, Sx, T, TEAL,
	Title, marksCheck, meterX, prog, smooth,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 11a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a rising HbA1c" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={44} />
		<QPart blocks={Q1_DEM} x={126} y={600} w={1150} size={44} />
		<Pic p={PL.blister} cx={1450} cy={250} w={210} />
		<Pic p={PL.shoes} cx={1700} cy={250} w={200} />
		<Sx x={1450} y={362} text="metformin" size={30} color={INK} anchor="middle" hand at={ON} />
		<Sx x={1700} y={362} text="activity plan" size={30} color={INK} anchor="middle" hand at={ON} />
		<Sx x={1370} y={420} text="HbA1c, last 12 months" size={30} color={INK} weight={800} at={ON} />
		<Meter g={{x: 1370, y: 470, w: 420}} size={28} title={false} valLabel={false} marks={[{v: 7.0, t: '7.0', at: ON}, {v: 8.4, t: '8.4', at: ON}]} />
		<Pic p={PL.pen} cx={1580} cy={680} w={300} />
		<Sx x={1580} y={784} text="adding insulin suggested" size={30} color={INK} anchor="middle" hand at={ON} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 11b. feedback one ----------
const KB = K('feedback-one', {avg: 'average glucose', rise: 'a rise', worsened: 'has worsened', beta: 'The beta', stepping: 'stepping up', replaces: 'insulin replaces', resist: "doesn't fix", weight: 'add weight', keep: 'So keep', classic: 'classic mistake', calling: 'calling HbA1c'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'their HbA1c has risen from 7.0% to 8.4%', at: KB.avg},
	{phrase: 'Over the last 12 months', at: KB.stepping},
	{phrase: 'adding insulin', at: KB.replaces},
	{phrase: 'metformin and a physical activity plan', at: KB.keep},
]);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const v = 7.0 + 1.4 * smooth(prog(f, KB.rise, 40));
	return (
		<Svg>
			<Title text="Feedback: what HbA1c shows" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={33} />
			<QPart blocks={Q1_DEM} marks={M_B} x={62} y={470} w={656} size={33} />
			<Pic p={PL.pen} cx={390} cy={840} w={420} />
			<Meter g={{x: 820, y: 250, w: 520}} size={28} val={() => v} band="typical target" />
			<KeyLock x={1660} y={280} s={0.7} mode="jam" at={KB.replaces} jamAt={KB.replaces + 10} />
			<AnsBox x={780} y={410} w={1044} h={330} label="answer" size={44} sizeOld={34} lines={[
				{t: '(a) average glucose over 2 to 3 months has risen: control worse for months', at: KB.worsened},
				{t: '(b) insulin replaces the signal; resistance remains; can add weight', at: KB.resist},
				{t: "combine, don't replace: keep activity and metformin", at: KB.keep},
			]} />
			<Framed x={780} y={820} text="insulin alone won't fix the resistance" at={KB.keep + 30} size={46} />
			<Mistake x={780} y={862} text="HbA1c is a treatment" size={40} at={KB.classic} cross={KB.calling} note="it's evidence for decisions" noteW={1040} />
		</Svg>
	);
};

// ---------- 11c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: judging trial evidence" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={230} w={1150} size={40} />
		<QPart blocks={Q2_DEM} x={126} y={760} w={1150} size={44} />
		<Sx x={1350} y={205} text="fall in HbA1c (points)" size={28} color={INK} weight={800} at={ON} />
		<GroupBars g={{x: 1420, y: 250, w: 360, h: 240}} max={1.6} ticks={[0, 0.4, 0.8, 1.2, 1.6]} unit="" dec={1} vsize={36} bars={[{lab: 'drug', v: 1.4, color: C_MET, at: ON}, {lab: 'placebo', v: 0.3, color: '#a8a092', at: ON}]} />
		<Pic p={PL.gut} cx={1420} cy={660} w={150} />
		<Sx x={1510} y={640} text="12% stopped: nausea" size={30} color={INK} hand at={ON} />
		<Sx x={1510} y={690} text="not yet subsidised" size={30} color={INK} hand at={ON} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 11d. feedback two ----------
const KD = K('feedback-two', {rand: 'randomised, with', bigger: 'bigger fall', one1: '1.1 points', large: 'large change', short: 'weeks is short', measure: 'is a measure', outcome: 'the outcome', side: 'Side effects', cost: 'and cost', promising: 'promising', classic: 'classic mistake', treating: 'treating a'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'randomly allocated', at: KD.rand},
	{phrase: 'a placebo (a dummy injection)', at: KD.rand + 10},
	{phrase: '1.4 percentage points', at: KD.one1},
	{phrase: '0.3 in the placebo group', at: KD.one1 + 8},
	{phrase: 'for 26 weeks', at: KD.short},
	{phrase: '12% of the drug group stopped treatment because of nausea', at: KD.side},
	{phrase: 'not yet subsidised', at: KD.cost},
]);
const G11 = {x: 150, y: 740, w: 380, h: 190};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const Y = (v: number) => G11.y + G11.h - (v / 1.6) * G11.h;
	const br = prog(f, KD.one1 + 10, 14);
	return (
		<Svg>
			<Title text="Feedback: promising, not yet proven" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={62} y={206} w={656} size={29} lh={42} />
			<QPart blocks={Q2_DEM} marks={M_D} x={62} y={610} w={656} size={30} lh={42} />
			<GroupBars g={G11} max={1.6} ticks={[0, 0.8, 1.6]} unit="" dec={1} vsize={32} bars={[{lab: 'drug', v: 1.4, color: C_MET, at: ON}, {lab: 'placebo', v: 0.3, color: '#a8a092', at: ON}]} />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M${G11.x + G11.w + 30},${Y(1.4)} l18,0 L${G11.x + G11.w + 48},${Y(0.3)} l-18,0`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={G11.x + G11.w + 62} y={(Y(1.4) + Y(0.3)) / 2 + 12} text="1.1" size={40} color={AMBER_INK} weight={800} at={ON} />
				<Sx x={G11.x + G11.w + 62} y={(Y(1.4) + Y(0.3)) / 2 + 48} text="difference" size={28} color={AMBER_INK} hand at={ON} />
			</g> : null}
			<FrameStrip x={780} y={150} w={1044} rowH={122} gap={10} size={36} headW={300} heads={['design', 'size of effect', 'limits', 'use in practice']} lit={[KD.rand, KD.one1, KD.short, KD.side]} slots={[
				{t: 'randomised, placebo-controlled, 600 adults', at: KD.rand + 6},
				{t: '1.1 points more than placebo: a large change', at: KD.large},
				{t: '26 weeks only; HbA1c, not heart attacks or deaths', at: KD.measure + 10},
				{t: '1 in 8 stopped (nausea); not subsidised', at: KD.cost},
			]} />
			<GTag x={1824} y={690} text="surrogate outcome" size={30} anchor="end" at={KD.outcome} />
			<Framed x={780} y={790} text="promising, but not yet proven" at={KD.promising} size={46} />
			<Mistake x={780} y={836} text="trial result = real-world success" size={38} at={KD.classic} cross={KD.treating} note="check length, outcome, side effects, access" noteW={1040} />
		</Svg>
	);
};

// ---------- 12. decision rule ----------
const KR = K('decision-rule', {any: 'any management', name: 'Name the', say: 'say how', judge: 'judge the', rand: 'randomised', long: 'how long', outcome: 'what outcome', keep: 'keep it', next: 'Next'});
const W4 = [400, 400, 400, 400];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const next = prog(f, KR.next, 14);
	return (
		<Svg>
			<Title text="For any management question" />
			<Sx x={96} y={196} text="1. name the mechanism, say how each action changes it" size={40} color={INK} hand at={KR.name} />
			<SlotStrip x={96} y={220} ws={W4} gap={42} h={190} size={30} headSize={32} slots={[
				{head: 'glucose released by liver', lit: KR.name, items: [{t: 'metformin', at: KR.say, chip: C_MET}]},
				{head: 'insulin signal', lit: KR.name + 6, items: [{t: 'lifestyle', at: KR.say + 6, chip: C_LIFE}, {t: 'metformin', at: KR.say + 10, chip: C_MET}, {t: 'insulin', at: KR.say + 14, chip: C_INS}]},
				{head: 'glucose into cells', lit: KR.name + 12, items: [{t: 'lifestyle', at: KR.say + 18, chip: C_LIFE}]},
				{head: 'damage to vessels', lit: KR.name + 18, items: [{t: 'complication care', at: KR.say + 22, chip: C_CARE}]},
			]} />
			<KeyLock x={900} y={360} s={0.36} mode="jam" at={ON} />
			<Sx x={96} y={490} text="2. judge the evidence" size={40} color={INK} hand at={KR.judge} />
			<SlotStrip x={96} y={514} ws={W4} gap={42} h={210} size={32} headSize={32} slots={[
				{head: 'mechanism', lit: KR.judge, items: [{t: 'does it act on the cause?', at: KR.judge + 6}]},
				{head: 'evidence', lit: KR.rand, items: [{t: 'randomised?', at: KR.rand}, {t: 'how long?', at: KR.long}, {t: 'what outcome?', at: KR.outcome}]},
				{head: 'durability', lit: KR.keep, items: [{t: 'can people keep it up?', at: KR.keep}]},
				{head: 'access and cost', lit: KR.keep + 8, items: [{t: 'cost, support, access', at: KR.keep + 10}]},
			]} />
			<Sx x={96} y={830} text="mechanism, action, evidence" size={60} color={BLUE} hand at={KR.keep + 20} />
			<g opacity={next}>
				<rect x={900} y={880} width={924} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.sun} cx={1000} cy={945} h={96} />
				<T x={1090} y={932} w={700} text="Next: How can prevention campaigns reduce disease?" size={36} color={INK} />
			</g>
			{void EDGE}{void Calendar}{void TEAL}{void INK_SOFT}{void meterX}
		</Svg>
	);
};

// ---------- 13. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={44} aidTop={720} tag="type 1 against type 2" aid="Type 1: no key. Type 2: the lock is jammed." notes={[
		'Type 1: little or no insulin. Type 2: insulin binds, cells respond poorly.',
		'Management: control without a cure. Treatment acts on the mechanism.',
		'Activity and weight loss act on the cause; metformin cuts liver glucose.',
		'HbA1c: average glucose over 2 to 3 months. Evidence, not treatment.',
		'Judge evidence: design, length, outcome, durability, access.',
	]} />
);
