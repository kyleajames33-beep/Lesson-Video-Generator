// M8 B02 scenes 12a to 14: two unseen exam items (a cyclist on a dry day; the koala), each whole on screen through
// "Pause here to answer." and its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined as
// they are used, short answer lines or table rows, and one crossed classic mistake (no givens card); the decision rule
// under the small beam, with the handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {NB, S, hold} from './common';
import {AMBER, AMBER_INK, Balance, CardBox, DLbl, DrawPath, FEAT, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, PLATES, Pl, StepChip, Sx, TEAL, WARM, pbPt, prog, vis} from './parts';

// ---------- item 1: the cyclist ----------
type T1 = {a: number; b: number; qa: number; qb: number};
const Q1 = (t: T1): QBlock[] => [
	{text: `A cyclist rides for 40${NB}minutes on a dry day when the air temperature is 30${NB}°C.`, at: t.a},
	{text: `Her core body temperature rises from 37.0${NB}°C to 37.8${NB}°C in the first 15${NB}minutes, then stays near 37.8${NB}°C while she continues riding at the same pace.`, at: t.b},
	{text: '(a) Explain how the hypothalamus and TWO named effectors prevent her core body temperature from rising further. (4 marks)', at: t.qa, weight: 700, para: true},
	{text: '(b) Predict how her core body temperature would change on a humid day with the same air temperature. Justify your prediction. (2 marks)', at: t.qb, weight: 700, para: true},
];
const ALL1: T1 = {a: -100, b: -100, qa: -100, qb: -100};
const M1 = [`rises from 37.0${NB}°C to 37.8${NB}°C`, `30${NB}°C.`, 'dry day', `then stays near 37.8${NB}°C`, 'humid day'];
qCheck(Q1(ALL1), M1.map(phrase => ({phrase, at: 0})));
const Card1: React.FC<{t: T1; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={170} w={1720} h={850} at={-100} />
		<QText q={qCheck(Q1(t), marks)} x={140} y={240} w={1640} size={29} card={false} />
	</>
);
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', cyclist: 'A cyclist rides', her: 'Her core temperature', explain: 'Explain how the', predict: 'and predict', pause: 'Pause here'});
export const SceneAttempt: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<Card1 t={{a: KA.cyclist, b: KA.her, qa: KA.explain, qb: KA.predict}} />
				<AnsBox x={140} y={600} w={1380} h={380} at={KA.predict + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
				{void KA.first}
			</Overlay>
		</>
	);
};
const KB = cues(S('feedback-one'), {hypo: 'The hypothalamus detects', rise: 'the rise', wider: 'Wider arterioles', cooler: 'the cooler air', evap: 'Evaporating sweat', heat: 'Heat loss now', levels: 'levels off', humid: 'Humid air', wet: 'Wet skin alone'});
export const SceneFeedbackOne: React.FC = () => {
	const at = [KB.rise, KB.cooler, KB.evap, KB.levels, KB.humid];
	const marks: QMark[] = M1.map((phrase, i) => ({phrase, at: at[i], color: i === 3 ? TEAL : AMBER}));
	const rows = [
		{t: 'hypothalamus → nerve impulses to arterioles and sweat glands', at: KB.hypo + 10, dim: KB.wider},
		{t: 'arterioles dilate: more warm blood near surface, more heat lost', at: KB.wider + 6, dim: KB.evap},
		{t: 'sweat evaporates: takes heat from skin', at: KB.evap + 6, dim: KB.heat},
		{t: 'heat loss = heat production → temperature levels off', at: KB.levels - 4, dim: KB.humid},
		{t: '(b) humid: less evaporation, core temperature rises higher', at: KB.humid + 10, dim: undefined},
	];
	return (
		<>
			<Heading text="Heat loss catches up" at={4} size={50} />
			<Overlay>
				<Card1 t={ALL1} marks={marks} />
				{rows.map((r, i) => <DLbl key={i} x={160} y={630 + i * 58} text={r.t} at={r.at} dimAt={r.dim} size={30} maxW={1600} color={i === 3 ? TEAL : AMBER_INK} />)}
				<GTag x={780} y={944} text="air cooler than skin" at={KB.cooler + 6} size={22} />
				<MistakeChip x={140} y={930} text="sweat cools because the skin is wet" at={KB.wet - 10} cross={KB.wet + 6} size={28} />
				{void KB.heat}
			</Overlay>
		</>
	);
};

// ---------- item 2: the koala ----------
type T2 = {a: number; b: number; c: number; d: number; qa: number; qb: number};
const Q2 = (t: T2): QBlock[] => [
	{text: 'Koalas are endotherms. In hot weather, koalas have been observed to show these adaptations:', at: t.a},
	{text: '1. They move down to lower branches and press their bodies against the tree trunk, which is cooler than their body surface.', at: t.b, para: true},
	{text: '2. They pant, increasing evaporation from the moist lining of the mouth and airways.', at: t.c, para: true},
	{text: '3. They have dense fur on their back that reflects part of the sunlight that strikes it.', at: t.d, para: true},
	{text: '(a) Classify each adaptation as behavioural, structural or physiological. (3 marks)', at: t.qa, weight: 700, para: true},
	{text: "(b) Explain how adaptation 1 reduces the koala's body temperature. (2 marks)", at: t.qb, weight: 700, para: true},
];
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, qa: -100, qb: -100};
const M2 = ['cooler than their body surface.', 'They pant, increasing evaporation'];
qCheck(Q2(ALL2), M2.map(phrase => ({phrase, at: 0})));
const KO = {cx: 1640, cy: 380, w: 260};
const TAB = {x: 140, y: 790, w: 760, rh: 54};
const Table: React.FC<{at: number; fill?: [string, number][]}> = ({at, fill = []}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={TAB.x} y={TAB.y} width={TAB.w} height={TAB.rh * 4} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
			{[1, 2, 3].map(i => <line key={i} x1={TAB.x} x2={TAB.x + TAB.w} y1={TAB.y + TAB.rh * i} y2={TAB.y + TAB.rh * i} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />)}
			<line x1={TAB.x + 280} x2={TAB.x + 280} y1={TAB.y} y2={TAB.y + TAB.rh * 4} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
			<Sx x={TAB.x + 18} y={TAB.y + 36} text="adaptation" size={26} color={INK} weight={700} at={-1000} />
			<Sx x={TAB.x + 300} y={TAB.y + 36} text="type" size={26} color={INK} weight={700} at={-1000} />
			{[1, 2, 3].map(i => <Sx key={i} x={TAB.x + 18} y={TAB.y + TAB.rh * i + 36} text={`${i}`} size={26} color={INK} weight={600} at={-1000} />)}
			{fill.map(([t, a], i) => <Sx key={i} x={TAB.x + 300} y={TAB.y + TAB.rh * (i + 1) + 37} text={t} size={30} color={AMBER_INK} hand weight={700} at={a} />)}
		</g>
	);
};
const Card2: React.FC<{t: T2; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={170} w={1720} h={850} at={-100} />
		<Pl p={PLATES.koala} cx={KO.cx} cy={KO.cy} w={KO.w} />
		<QText q={qCheck(Q2(t), marks)} x={140} y={240} w={1340} size={28} card={false} />
	</>
);
const KC = cues(S('attempt-two'), {second: 'Second', hot: 'In hot weather', press: 'press their bodies', pant: 'They pant', back: 'And their back', classify: 'Classify each', explain: 'and explain how', pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => {
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<Card2 t={{a: KC.hot, b: KC.press - 30, c: KC.pant, d: KC.back, qa: KC.classify, qb: KC.explain}} />
				<Table at={KC.classify + 20} />
				<AnsBox x={960} y={760} w={600} h={230} at={KC.explain + 20} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};
const KD = cues(S('feedback-two'), {moving: 'Moving to the', panting: 'panting is', fur: 'the fur is', trunk: 'The trunk is', conduction: 'by conduction', without: 'without using water', writing: 'Writing', classic: 'classic mistake', say: 'Say which way'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: M2[0], at: KD.trunk + 6, color: AMBER}, {phrase: M2[1], at: KD.without, color: GREYT}];
	const P = pbPt(PLATES.koala, KO.cx, KO.cy, KO.w);
	const [ax, ay] = P(...FEAT.koalaBody), [bx, by] = P(...FEAT.trunk);
	return (
		<>
			<Heading text="Name the heat transfer" at={4} size={50} />
			<Overlay>
				<Card2 t={ALL2} marks={marks} />
				<Table at={-100} fill={[['behavioural', KD.moving + 10], ['physiological', KD.panting + 6], ['structural', KD.fur + 6]]} />
				{f >= KD.conduction ? <g><DrawPath d={`M${ax},${ay} L${bx},${by}`} at={KD.conduction} dur={14} color={WARM} width={6} /><path d={`M${bx - 16},${by - 10} L${bx},${by} L${bx - 14},${by + 14}`} fill="none" stroke={WARM} strokeWidth={6} strokeLinecap="round" opacity={prog(f, KD.conduction + 10, 6)} /></g> : null}
				<DLbl x={960} y={810} text="heat: koala → trunk (conduction)" at={KD.conduction + 6} size={32} maxW={820} color={WARM} />
				<GTag x={960} y={850} text="panting uses water" at={KD.without + 6} size={22} />
				<MistakeChip x={960} y={900} text="hugging the tree keeps it cool" at={KD.writing} cross={KD.classic + 6} size={28} />
				<GTag x={960} y={975} text="name the direction of heat flow" at={KD.say} size={22} />
				{void vis}{void INK_SOFT}{void GREY_INK}
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {name: 'name the effector', say: 'say how it', check: 'and check its', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [{at: KE.name, text: 'effector or feature?'}, {at: KE.say, text: 'heat gained or lost?'}, {at: KE.check, text: 'limits?'}];
	return (
		<>
			<Heading text="For any temperature question" at={4} size={52} />
			<Overlay>
				<Balance tilt={() => 0} />
				{chips.map((c, i) => <StepChip key={i} x={200} y={330 + i * 140} w={980} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={560} y={860} w={1260} text="Next: investigating temperature regulation with a model" at={KE.next}>
					<path d="M610,880 L634,880 L634,904 L654,940 L590,940 L610,904 Z" fill="#eef4f6" stroke={INK_SOFT} strokeWidth={3} strokeLinejoin="round" />
				</NextChip>
				{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Endotherm: most body heat from its own metabolism; can regulate core temperature using metabolic heat (mammals, birds). Ectotherm: most heat from surroundings; still regulates, mainly by behaviour.',
	'Coordination: thermoreceptors (skin, hypothalamus) → hypothalamus → effectors. Neural pathway: nerve impulses, fast and targeted. Hormonal pathway: hormones in blood, slower and longer-lasting (thyroxine raises metabolic rate in a long cold spell).',
	"Too hot: vasodilation (arterioles widen, more warm blood near surface, more heat lost; vessels don't move) and sweating (cools by evaporation; less effective in humid air). Too cold: vasoconstriction, shivering, hairs raised, higher metabolic rate.",
	'Adaptations: physiological (body processes), behavioural (actions), structural (body features). Red kangaroo: rests in shade, pants and sweats, licks forearms over a dense vessel network. Trends: large extremities in hot climates, compact insulated bodies in cold, countercurrent exchange.',
	'Feedback has limits: hot air can add heat. Evaporation becomes crucial when dry heat loss is limited; it needs water.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Hot: widen and wet. Cold: narrow and shiver." tag="For any adaptation: a body process, a behaviour or a body feature?" size={27} aidTop={820} />
);
