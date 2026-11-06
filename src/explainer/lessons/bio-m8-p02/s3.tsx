// P8-02 Biology scenes 13a to 15: question 1 (a bag over the leaves) as the full worded card with the potometer and a
// strip of its two readings, and the countdown; its brief feedback (givens underlined, working, the humid bag, crossed
// slip); question 2 (a flawed method) with the fan and a strip of its two sessions; its feedback (problem and fix table,
// crossed slip); the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {EvapDots} from '../m8-shared/parts';
import {
	AMBER, AMBER_INK, AnsBox, BLUE, BlankLines, Box, CARD, Chip, EDGE, Fan, Framed, GREENC, GREYT, GTag, HscTag, INK, INK_SOFT, ItemCard, Mistake, Pause, PicH, Pot, PreRing, QPart, ShootCrop, Svg, Sx, T, TEAL, TERRA, Title,
	VIOLET, WATER, marksCheck, prog, shootPt, wrapM,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 13a. question 1 ----------
/** The two readings of question 1 as bubble tracks (one shoot, same room): no bag 30 mm, bag 12 mm, each in 6 minutes. */
const Q1Strip: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => {
	const X = (mm: number) => x + (mm / 40) * w;
	const track = (yy: number, mm: number, lab: string) => (
		<g>
			<Sx x={x} y={yy - 22} text={lab} size={30} color={INK} hand at={ON} />
			<rect x={x} y={yy - 8} width={w} height={16} rx={8} fill="#e3f0f6" stroke="#7fb2cf" strokeWidth={2} />
			<line x1={X(0)} x2={X(0)} y1={yy - 18} y2={yy + 18} stroke={INK} strokeWidth={3} />
			<line x1={X(mm)} x2={X(mm)} y1={yy - 18} y2={yy + 18} stroke={AMBER_INK} strokeWidth={4} />
			<ellipse cx={X(mm)} cy={yy} rx={14} ry={7} fill="#f7fcff" stroke="#2f3d48" strokeWidth={2} />
		</g>
	);
	return (
		<g>
			{track(y, 30, 'no bag: 30 mm in 6 min')}
			{track(y + 96, 12, 'bag over the leaves: 12 mm in 6 min')}
			{[0, 20, 40].map(m => <Sx key={m} x={X(m)} y={y + 146} text={`${m} mm`} size={26} color={INK} anchor="middle" weight={600} at={ON} />)}
		</g>
	);
};
const KA = K('attempt-1', {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Question 1: a bag over the leaves" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={232} w={1150} size={42} />
		<QPart blocks={Q1_DEM} x={126} y={640} w={1150} size={42} />
		<Pot cx={1575} cy={320} w={370} mm={() => 20} bubbleAt={ON} />
		<Q1Strip x={1350} y={560} w={430} />
		<BlankLines x={1340} y={740} w={484} h={100} label="your answer" />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={1340} ty={900} cx={1745} cy={966} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1745} y={966} r={46} />
	</Svg>
);

// ---------- 13b. feedback 1 ----------
const KB = K('feedback-1', {thirty: 'Thirty divided', five: 'is five', twelve: 'twelve divided', two: 'is two', inside: 'Inside the', builds: 'builds up', humid: 'very humid', diff: 'vapour difference', smaller: 'is smaller', slowly: 'more slowly', less: 'up less', classic: 'classic mistake', blocks: 'bag blocks', traps: 'It traps'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: '30 mm in 6 minutes', at: KB.thirty + 8},
	{phrase: '12 mm in 6 minutes', at: KB.twelve},
	{phrase: 'a clear plastic bag placed over its leaves', at: KB.inside},
]);
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const sk = 0.5, sx = 1460, sy = 270;
	const S = shootPt(sx, sy, sk);
	const [l0] = S(430, 0), [l1] = S(1000, 0), [, t0] = S(0, 440), [cxs, seal] = S(696, 905);
	const bag = prog(f, KB.inside, 14);
	const bagD = `M${cxs - 30},${seal} C${l0 - 20},${seal - 20} ${l0 - 40},${t0 - 10} ${(l0 + l1) / 2},${t0 - 20} C${l1 + 40},${t0 - 10} ${l1 + 20},${seal - 20} ${cxs + 30},${seal}`;
	const pts: [number, number][] = Array.from({length: 9}, (_, i) => [l0 + 20 + (i % 3) * ((l1 - l0 - 40) / 2), t0 + 40 + Math.floor(i / 3) * 70]);
	return (
		<Svg>
			<Title text="Feedback: why the bag slows uptake" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q1_STEM} marks={M_B} x={62} y={210} w={656} size={32} />
			<QPart blocks={Q1_DEM} marks={M_B} x={62} y={560} w={656} size={32} />
			<Pot cx={390} cy={880} w={300} mm={() => 20} bubbleAt={ON} />
			<AnsBox x={780} y={160} w={640} h={250} label="(a) rates" size={42} sizeOld={36} lines={[
				{t: 'no bag: 30 ÷ 6 = 5.0 mm per minute', at: KB.five},
				{t: 'bag: 12 ÷ 6 = 2.0 mm per minute', at: KB.two},
			]} />
			<AnsBox x={780} y={430} w={640} h={360} label="(b) explain" size={40} sizeOld={34} lines={[
				{t: 'vapour builds up in the bag: humid air around the leaves', at: KB.builds},
				{t: 'smaller water vapour difference: slower diffusion out of the stomata', at: KB.smaller},
				{t: 'less water lost, so less taken up', at: KB.less},
			]} />
			<ShootCrop x={sx} y={sy} k={sk} id="p02-f1-shoot" />
			{bag > 0.01 ? <g opacity={bag}><path d={bagD} fill="#eef6fb" fillOpacity={0.35} stroke="#6f9fb8" strokeWidth={4} strokeDasharray="12 8" /></g> : null}
			<EvapDots pts={pts} at={KB.builds} humid={KB.humid} r={11} o={0.85} />
			<GTag x={1440} y={640} text="smaller difference" size={32} at={KB.smaller} />
			<GTag x={1440} y={700} text="HSCScience marking guide (illustrative)" size={26} />
			<Mistake x={780} y={830} text="the bag blocks the water" size={40} at={KB.classic} cross={KB.blocks} note="it traps humid air; the stomata are uncovered" noteW={1000} />
			{void wrapM}{void WATER}
		</Svg>
	);
};

// ---------- 13c. question 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
const Sessions: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<rect x={x} y={y} width={470} height={86} rx={16} fill="#fdf1e2" stroke={AMBER_INK} strokeWidth={3} />
		<Sx x={x + 20} y={y + 36} text="Monday, warm afternoon" size={32} color={AMBER_INK} hand at={ON} />
		<Sx x={x + 20} y={y + 72} text="fan on" size={30} color={VIOLET} hand at={ON} />
		<rect x={x} y={y + 104} width={470} height={86} rx={16} fill="#e9f1f8" stroke={BLUE} strokeWidth={3} />
		<Sx x={x + 20} y={y + 140} text="Tuesday, cool morning" size={32} color={BLUE} hand at={ON} />
		<Sx x={x + 20} y={y + 176} text="still air" size={30} color={GREENC} hand at={ON} />
	</g>
);
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Question 2: what went wrong?" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q2_DEM} x={126} y={640} w={1150} size={46} />
		<Fan cx={1590} cy={310} h={300} />
		<Sessions x={1350} y={500} />
		<BlankLines x={1340} y={720} w={484} h={120} label="your answer" />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={1340} ty={900} cx={1745} cy={966} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1745} y={966} r={46} />
	</Svg>
);

// ---------- 13d. feedback 2 ----------
const KD = K('feedback-2', {cutting: 'cutting in', xylem: 'the xylem', block: 'block uptake', cut: 'so cut', under: 'under water', two: 'Two', temp: 'the temperature changed', could: 'could come', test: 'Test both', same: 'same shoot', day: 'same day', classic: 'classic mistake', repeat: 'repeat it', times: 'more times', help: 'Repeats help', unc: 'uncontrolled variable'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'cut a leafy shoot in the air', at: KD.cutting},
	{phrase: 'warm Monday afternoon', at: KD.temp},
	{phrase: 'cool Tuesday morning', at: KD.temp + 12},
]);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const cell = (x: number, y: number, w: number, t: string, at: number, color = INK) => <T x={x} y={y} w={w} text={t} size={42} color={color} at={at} />;
	const rowO = (at: number) => 0.45 + 0.55 * prog(f, at, 12);
	return (
		<Svg>
			<Title text="Feedback: two problems, two fixes" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={62} y={212} w={656} size={34} />
			<QPart blocks={Q2_DEM} marks={M_D} x={62} y={560} w={656} size={34} />
			<Fan cx={200} cy={840} h={240} />
			<Pot cx={520} cy={850} w={330} mm={() => 20} bubbleAt={ON} />
			<rect x={780} y={160} width={1044} height={64} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.45)" strokeWidth={2.5} />
			<Sx x={800} y={204} text="problem" size={34} color={INK} weight={800} at={ON} />
			<Sx x={1320} y={204} text="change that fixes it" size={34} color={INK} weight={800} at={ON} />
			{[0, 1].map(i => <g key={i} opacity={rowO(i ? KD.two : KD.cutting)}><rect x={780} y={232 + i * 292} width={1044} height={280} rx={12} fill={CARD} stroke={prog(f, i ? KD.two : KD.cutting, 12) > 0.5 ? BLUE : EDGE} strokeWidth={3} strokeDasharray={prog(f, i ? KD.two : KD.cutting, 12) > 0.5 ? undefined : '10 8'} /><line x1={1300} x2={1300} y1={240 + i * 292} y2={504 + i * 292} stroke={EDGE} strokeWidth={2} /><Sx x={800} y={284 + i * 292} text={`${i + 1}`} size={34} color={BLUE} weight={800} at={ON} /></g>)}
			{cell(836, 286, 440, 'cut in air → air enters the xylem and can block uptake', KD.xylem, TERRA)}
			{cell(1320, 286, 480, 'cut and fit the shoot under water; seal the joints', KD.cut, GREENC)}
			{cell(836, 580, 440, 'temperature (and light) changed with the fan → the difference may come from temperature', KD.temp, TERRA)}
			{cell(1320, 580, 480, 'same shoot, same room, same session; change only the fan', KD.test, GREENC)}
			<Mistake x={780} y={836} text="repeat it more times" size={40} at={KD.classic} cross={KD.times} note="repeats: reliability; temperature still uncontrolled" noteW={1040} />
			{void AMBER}{void TEAL}{void INK_SOFT}{void Framed}
		</Svg>
	);
};

// ---------- 14. decision rule ----------
const KR = K('decision-rule', {any: 'any transpiration', change: 'change one', keep: 'keep everything', seal: 'seal it', repeat: 'repeat each', claim: 'claim only', uptake: 'the uptake', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="For any transpiration practical" />
			<Fan cx={170} cy={380} h={270} />
			<Pot cx={430} cy={500} w={460} mm={() => 20} bubbleAt={ON} />
			<rect x={96} y={760} width={600} height={22} rx={10} fill="#e9e1d1" />
			<ItemCard x={740} y={160} w={1084} title="your plan" size={44} gap={30} faint={0.35} h={690} items={[
				{t: '1 Change one factor (air movement); still air is the control.', at: KR.change},
				{t: '2 Same shoot, room, temperature, light, fan distance.', at: KR.keep},
				{t: '3 Cut and fit under water; seal; one bubble at the capillary end; dry the leaves; settle 5 min.', at: KR.seal},
				{t: '4 Alternate conditions; three timed readings each; mean.', at: KR.repeat},
				{t: '5 Claim: uptake by this shoot, not water loss, not every plant.', at: KR.claim},
			]} />
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={96} y={880} width={1728} height={120} rx={60} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				{['validity', 'reliability', 'accuracy'].map((t, i) => <Chip key={t} x={130 + i * 175} y={914} text={t} size={28} color={BLUE} ink={INK} />)}
				<Sx x={700} y={956} text="Next: Practical questions: validity, reliability, accuracy" size={40} color={INK} hand at={ON} />
			</g>
			{void PicH}{void PL}{void GREYT}
		</Svg>
	);
};

// ---------- 15. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={46} aidTop={720} tag="Change one factor, same shoot, settled, airtight." aid="The bubble measures what goes in, not what goes out." notes={[
		'Potometer: rate = bubble distance ÷ time; uptake estimates loss.',
		'Cut and fit the shoot under water; seal joints; let it settle.',
		'Change only air movement; still air is the control; repeat 3 times.',
		'Uptake is not loss; one shoot is not a whole plant.',
		'Cut on a tile; keep the fan away from water.',
	]} />
);
