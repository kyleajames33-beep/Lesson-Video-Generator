// B8-11 scenes 11a to 13: question 1 (an unseen case-control study) as the full worded card with the case files and a
// strip of its givens, and the countdown; its brief feedback (givens underlined, the four-step frame filling, framed
// answer, crossed slip); question 2 (the folate studies) with the bread plate, a strip of its dates and the countdown;
// its feedback (the benefit chain filling, framed answer, crossed slip); the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER, AMBER_INK, Arr, BLUE, BlankLines, Box, CARD, CASE, CTRL, Chip, EDGE, Framed, FrameStrip, GREYT, GTag, HscTag, INK, INK_SOFT, MatchedPairs, Mistake, Pause, PicH, PreRing, QPart, Svg, Sx, T, TEAL, TallyCard, Title,
	marksCheck, pairPts, prog,
} from './parts';
import type {QMark} from './parts';
import {MiniTrend} from './s2';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 11a. question 1 ----------
/** The givens of question 1 as a strip: 300 cases and 600 controls (one dot per 100), and the 20-year interview window. */
const Q1Strip: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<Sx x={x} y={y} text="300 with bladder cancer, 600 without" size={30} color={INK} hand at={ON} />
		{[0, 1, 2].map(i => <circle key={'a' + i} cx={x + 20 + i * 40} cy={y + 40} r={14} fill={CASE} stroke={AMBER_INK} strokeWidth={2.5} />)}
		{[0, 1, 2, 3, 4, 5].map(i => <circle key={'b' + i} cx={x + 160 + i * 40} cy={y + 40} r={14} fill={CTRL} stroke="#1f5c61" strokeWidth={2.5} />)}
		<Sx x={x + 420} y={y + 50} text="1 dot = 100" size={26} color={GREYT} hand at={ON} />
		<Sx x={x} y={y + 112} text="interview: hair dye use, previous 20 years" size={30} color={INK} hand at={ON} />
		<rect x={x} y={y + 132} width={420} height={22} rx={8} fill="#e9e2d3" stroke={INK_SOFT} strokeWidth={2} />
		{([[0, '20 years ago', 'start'], [210, '10', 'middle'], [420, 'now', 'end']] as [number, string, 'start' | 'middle' | 'end'][]).map(([dx, t, an]) => <g key={t}><line x1={x + dx} x2={x + dx} y1={y + 154} y2={y + 166} stroke={INK} strokeWidth={3} /><Sx x={x + dx} y={y + 194} text={t} size={26} color={INK} anchor={an} weight={600} at={ON} /></g>)}
	</g>
);
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: a study to judge" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q1_DEM} x={126} y={680} w={1150} size={46} />
		<PicH p={PL.files} cx={1575} cy={290} h={250} />
		<Q1Strip x={1350} y={470} />
		<BlankLines x={1340} y={700} w={484} h={130} label="your answer" />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={890} cx={1745} cy={958} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- 11b. feedback one ----------
const KB = K('feedback-one', {cc: 'case-control', quick: 'quick', matching: 'matching reduced', recalled: 'recalled over', remember: 'remember differently', recall: 'recall bias', assoc: 'an association', classic: 'classic mistake', removes: 'removes every', only: 'only controls'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: '300 adults with bladder cancer and 600 adults without bladder cancer', at: KB.cc},
	{phrase: 'matched for age and sex', at: KB.matching},
	{phrase: 'how often they had used permanent hair dye over the previous 20 years', at: KB.recalled},
]);
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: judging a case-control study" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={33} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={560} w={656} size={33} />
		<PicH p={PL.files} cx={390} cy={810} h={230} />
		<FrameStrip x={780} y={150} w={1044} rowH={138} gap={10} size={40} lit={[KB.cc, KB.quick, KB.recalled, KB.assoc]} slots={[
			{t: 'case-control: starts with the disease, looks back', at: KB.cc},
			{t: 'quick for a less common cancer; age and sex matched', at: KB.quick},
			{t: 'exposure recalled over 20 years: recall bias', at: KB.recalled},
			{t: 'association only; cause not shown', at: KB.assoc},
		]} />
		<Framed x={780} y={822} text="association, not cause" at={KB.assoc + 10} size={48} />
		<Mistake x={780} y={870} text="matching removes every confounder" size={40} at={KB.classic} cross={KB.removes} note="only matched factors are controlled (smoking and job are not)" noteW={1040} />
	</Svg>
);

// ---------- 11c. question 2 ----------
/** The dates in question 2 as a strip: studies (1980s and 1990s), fortification (2009), rates fell afterwards. */
const Q2Strip: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => {
	const X = (yr: number) => x + ((yr - 1980) / 36) * w;
	return (
		<g>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{[1980, 1990, 2000, 2010].map(yr => <g key={yr}><line x1={X(yr)} x2={X(yr)} y1={y - 9} y2={y + 9} stroke={INK} strokeWidth={3} /><Sx x={X(yr)} y={y + 40} text={`${yr}`} size={26} color={INK} anchor="middle" weight={600} at={ON} /></g>)}
			<rect x={X(1981)} y={y - 54} width={X(1999) - X(1981)} height={30} rx={10} fill="#e9e2d3" stroke={INK_SOFT} strokeWidth={2} />
			<Sx x={X(1990)} y={y - 66} text="studies" size={30} color={INK} anchor="middle" hand at={ON} />
			<path d={`M${X(2009)},${y - 70} L${X(2009)},${y}`} stroke={AMBER_INK} strokeWidth={4} />
			<Sx x={X(2009)} y={y - 80} text="2009: flour fortified" size={30} color={AMBER_INK} anchor="middle" hand at={ON} />
			<Sx x={X(2009) + 6} y={y + 80} text="afterwards: rates fell" size={30} color={INK} anchor="middle" hand at={ON} />
		</g>
	);
};
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: judging a benefit" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={226} w={1150} size={40} />
		<QPart blocks={Q2_DEM} x={126} y={800} w={1150} size={44} />
		<PicH p={PL.bread} cx={1580} cy={290} h={250} />
		<Q2Strip x={1370} y={600} w={430} />
		<BlankLines x={1340} y={720} w={484} h={110} label="your answer" />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={870} cx={1745} cy={958} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- 11d. feedback two ----------
const KD = K('feedback-two', {found: 'found a', changed: 'be changed', fortified: 'Fortified flour', reached: 'reached people', closes: 'tube closes', follow: 'Follow-up data', largest: 'largest in', large: 'A large', though: 'though other', classic: 'classic mistake', prevented: 'prevented the'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'low folate intake around the time of conception was associated with a higher risk', at: KD.found},
	{phrase: 'non-organic wheat flour for bread-making to contain folic acid', at: KD.fortified},
	{phrase: 'closes in the first four weeks', at: KD.closes},
	{phrase: 'the rate of neural tube defects fell', at: KD.follow},
	{phrase: 'largest falls were in the groups with the highest rates', at: KD.largest},
]);
export const SceneFeedbackTwo: React.FC = () => (
	<Svg>
		<Title text="Feedback: a checked benefit" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q2_STEM} marks={M_D} x={62} y={206} w={656} size={29} />
		<QPart blocks={Q2_DEM} marks={M_D} x={62} y={720} w={656} size={30} />
		<PicH p={PL.bread} cx={390} cy={900} h={190} />
		<FrameStrip x={780} y={150} w={1044} rowH={138} gap={10} size={40} headW={330} heads={['finding', 'decision', 'action', 'outcome checked']} lit={[KD.found, KD.fortified, KD.reached, KD.follow]} slots={[
			{t: 'low folate: a changeable risk factor', at: KD.changed},
			{t: 'fortify bread flour (2009)', at: KD.fortified},
			{t: 'reaches people through everyday bread', at: KD.reached},
			{t: 'rates fell, most in highest-risk groups', at: KD.largest},
		]} />
		<GTag x={780} y={738} text="advice alone would often come too late" size={30} at={KD.closes} />
		<GTag x={1824} y={738} text="limit: other factors may contribute" size={30} anchor="end" at={KD.though} />
		<Framed x={780} y={850} text="a large, checked benefit" at={KD.large} size={46} />
		<Mistake x={780} y={890} text="the studies prevented the defects" size={40} at={KD.classic} cross={KD.prevented} note="the benefit came through the decision" noteW={1040} />
	</Svg>
);

// ---------- 12. decision rule ----------
const KR = K('decision-rule', {method: 'judge the method', design: 'the design', strength: 'a strength', limitation: 'a limitation', decide: 'then decide', assoc: 'association or', benefit: 'judge the benefit', finding: 'finding', decision: 'decision', action: 'action', outcome: 'outcome checked', next: 'Next'});
const BW = 404, BG2 = 37, BX = (i: number) => 96 + i * (BW + BG2);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const rowA: {head: string; line: string; at: number; thumb: (x: number, y: number) => React.ReactNode}[] = [
		{head: '1. design', line: 'case-control or cohort?', at: KR.design, thumb: (x, y) => <g><Arr a={[x + 170, y + 20]} b={[x + 20, y + 20]} color={AMBER_INK} width={5} /><Arr a={[x + 200, y + 66]} b={[x + 360, y + 66]} color={TEAL} width={5} /><Sx x={x + 180} y={y + 30} text="looks back" size={28} color={AMBER_INK} hand at={ON} /><Sx x={x + 20} y={y + 76} text="goes forward" size={28} color={TEAL} hand at={ON} /></g>},
		{head: '2. a strength', line: 'quick, matched, exposure first', at: KR.strength, thumb: (x, y) => <MatchedPairs pts={pairPts(x + 60, y + 14, 2, 3, 100, 48)} caseAt={ON} ctrlAt={ON} r={13} gap={32} />},
		{head: '3. a limitation', line: 'recall, confounders, who', at: KR.limitation, thumb: (x, y) => <g transform={`translate(${x + 90},${y - 14}) scale(0.72)`}><TallyCard x={0} y={0} at={ON} /></g>},
		{head: '4. judgement', line: 'association or cause?', at: KR.decide, thumb: (x, y) => <Sx x={x + 186} y={y + 66} text="? → cause" size={46} color={BLUE} anchor="middle" weight={800} at={ON} />},
	];
	const rowB: {head: string; line: string; at: number; thumb: (x: number, y: number) => React.ReactNode}[] = [
		{head: '1. finding', line: 'a changeable risk factor', at: KR.finding, thumb: (x, y) => <PicH p={PL.lungsS} cx={x + 186} cy={y + 46} h={110} />},
		{head: '2. decision', line: 'someone with power acts', at: KR.decision, thumb: (x, y) => <g><Chip x={x + 20} y={y + 6} text="taxes" size={28} color={BLUE} ink={INK} /><Chip x={x + 140} y={y + 46} text="fortify flour" size={28} color={BLUE} ink={INK} /></g>},
		{head: '3. action', line: 'it reaches people', at: KR.action, thumb: (x, y) => <g><PicH p={PL.pack} cx={x + 110} cy={y + 46} h={104} /><PicH p={PL.bread} cx={x + 270} cy={y + 50} h={84} /></g>},
		{head: '4. outcome checked', line: 'did disease fall?', at: KR.outcome, thumb: (x, y) => <MiniTrend x={x + 60} y={y} w={250} h={84} />},
	];
	const row = (items: typeof rowA, y: number) => items.map((s, i) => {
		const L = prog(f, s.at, 14);
		return (
			<g key={s.head}>
				<rect x={BX(i)} y={y} width={BW} height={272} rx={20} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 5 : 3} />
				<g opacity={0.45 + 0.55 * L}>
					<Sx x={BX(i) + 20} y={y + 46} text={s.head} size={38} color={BLUE} hand at={ON} />
					{s.thumb(BX(i) + 16, y + 70)}
					<Sx x={BX(i) + 20} y={y + 246} text={s.line} size={36} color={INK} hand at={ON} />
				</g>
				{i < 3 ? <path d={`M${BX(i) + BW + 4},${y + 136} L${BX(i) + BW + BG2 - 6},${y + 136} M${BX(i) + BW + BG2 - 18},${y + 125} L${BX(i) + BW + BG2 - 6},${y + 136} L${BX(i) + BW + BG2 - 18},${y + 147}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" /> : null}
			</g>
		);
	});
	return (
		<Svg>
			<Title text="For any epidemiological study" />
			<Sx x={96} y={188} text="Judge the method" size={40} color={prog(f, KR.method, 12) > 0.5 ? INK : GREYT} hand at={ON} />
			{row(rowA, 204)}
			<Sx x={1824} y={512} text="cohort goes forward, case-control looks back" size={34} color={TEAL} hand anchor="end" at={ON} />
			<Sx x={96} y={556} text="Judge the benefit" size={40} color={prog(f, KR.benefit, 12) > 0.5 ? INK : GREYT} hand at={ON} />
			{row(rowB, 572)}
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={760} y={888} width={1064} height={120} rx={60} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<g>{[0.3, 0.55, 0.8].map((v, k) => <rect key={k} x={812 + k * 30} y={978 - 70 * v} width={22} height={70 * v} fill={k === 2 ? AMBER_INK : CASE} />)}<line x1={804} x2={900} y1={978} y2={978} stroke={INK} strokeWidth={3} /></g>
				<Sx x={924} y={962} text="Next: Epidemiology calculation and interpretation practice" size={36} color={INK} hand at={ON} />
			</g>
			{void AMBER}
		</Svg>
	);
};

// ---------- 13. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={46} aidTop={720} tag="for judging any epidemiological study" aid="Cohort goes forward; case-control looks back." notes={[
		'Observational studies watch; RCTs assign by chance.',
		'Case-control looks back (quick; recall bias). Cohort goes forward.',
		'Confounder: linked to both the exposure and the disease.',
		'Judge a method: design, strength, limitation, judgement.',
		'Cause needs strength, dose-response, exposure first, mechanism.',
	]} />
);
