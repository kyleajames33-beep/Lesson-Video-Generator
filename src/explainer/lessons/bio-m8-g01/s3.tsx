// M8 G01 scenes 10 to 15: question 3 (a survey and a claim) as the full worded card with the countdown; prevalence
// with the two dot fields and the design named in b11's frame; limitations (which came first, the confounder
// triangle, self-report and one city), the judgement and the cohort; the crossed "big sample proves it" mistake; the
// decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, Arrow, Badge, BLUE, BlankLines, CalcLine, Chip, ConfTri, Decision, DotBlock, FracRow, Framed, FrameStrip, GTag, HscTag, INK, Mistake, Pause, Pic, PicH, Q3Col, Q3Full, Svg, Sx, T, TEAL,
	Tag, Title, prog, pulse, q3Marks,
} from './parts';
import {NotesBoard} from '../bio-m5-g01/board';
import {PL} from './assets';
import {K, hold} from './common';

// ---------- 4a. question 3 ----------
const KQ3 = K('q3-question', {pause: 'Pause here'});
export const SceneQ3: React.FC = () => (
	<Svg>
		<Title text="Question 3: a survey and a claim" />
		<HscTag />
		<Q3Full />
		<PicH p={PL.clip} cx={1500} cy={322} h={300} />
		<PicH p={PL.can} cx={1724} cy={334} h={276} />
		<BlankLines x={1340} y={500} w={484} h={130} label="(a)" />
		<BlankLines x={1340} y={648} w={484} h={140} label="(b)" />
		<Pause h={hold('q3-question')} at={KQ3.pause} tx={1340} ty={862} cx={1750} cy={958} r={46} />
	</Svg>
);

// ---------- 4b. prevalence, then the design ----------
const KP = K('q3-calc', {prev: 'Prevalence is', pct: 'percentage', t36: 'Thirty-six over', nine: 'nine per cent', s64: 'Sixty-four over', four: 'four per cent', twice: 'about twice', design: 'name the design', moment: 'at one moment', cross: 'cross-sectional', strength: 'Its strength', resp: 'among the respondents'});
const M_P = q3Marks([{phrase: 'Are you currently living with diagnosed', at: KP.moment + 4}, {phrase: 'Do you drink', at: KP.moment + 14}]);
const DESIGN = {t: 'cross-sectional: one snapshot', at: -1000};
const STRENGTH = {t: 'quick; prevalence among respondents', at: -1000};
export const SceneQ3Calc: React.FC = () => (
	<Svg>
		<Title text="Prevalence, then the design" />
		<HscTag />
		<Badge text="Judge the study" />
		<Q3Col marks={M_P} cells={{'1,1': KP.t36, '1,2': KP.t36 + 10, '2,1': KP.s64, '2,2': KP.s64 + 10}} />
		<FracRow x={780} yc={262} lhs="prevalence" num="people with the disease" den="people in the group" tail="× 100" size={40} />
		<GTag x={780} y={356} text="prevalence: the pool of existing cases" size={30} at={KP.pct} />
		<DotBlock x={806} y={486} cols={20} rows={20} sp={11} n={36} tint={KP.t36} seed={3} label="daily drinkers: 36 of 400" />
		<DotBlock x={1474} y={456} cols={40} rows={40} sp={9} n={64} tint={KP.s64} seed={5} label="others: 64 of 1600" />
		<CalcLine x={1046} y={540} sub="36 ÷ 400 × 100" at={KP.t36} />
		<Framed x={1046} y={636} text="= 9%" at={KP.nine} size={56} />
		<CalcLine x={800} y={772} sub="64 ÷ 1600 × 100" at={KP.s64} />
		<Framed x={1190} y={778} text="= 4%" at={KP.four} size={52} />
		<Chip x={800} y={810} text="9% vs 4%: about twice as common" size={36} color={AMBER_INK} at={KP.twice} />
		<FrameStrip x={780} y={890} w={1060} h={152} size={32} fills={[{t: DESIGN.t, at: KP.cross}, {t: STRENGTH.t, at: KP.resp - 20}, undefined, undefined]} pulseAt={[[0, KP.cross]]} />
	</Svg>
);

// ---------- 4c. limitations, then judgement ----------
const KE = K('q3-evaluate', {first: 'which came first', changed: 'changed their drinking', diet: 'diet', weight: 'weight', sleep: 'sleep', age: 'age', conf: 'possible confounders', self: 'self-reported', assoc: 'an association', far: 'too far', cohort: 'cohort', record: 'record drinks', forward: 'follow them forward', adjust: 'adjusting for'});
const M_E = q3Marks([{phrase: 'an online survey', at: KE.self}, {phrase: 'living in one city', at: KE.self + 10}, {phrase: 'Are you currently living with diagnosed', at: KE.self + 20}, {phrase: 'Energy drinks cause type 2 diabetes', at: KE.assoc}]);
const WORDS: [string, number][] = [['?', -1000], ['diet', KE.diet], ['weight', KE.weight], ['sleep', KE.sleep], ['age', KE.age], ['diet', KE.age + 45], ['weight', KE.age + 90], ['sleep', KE.age + 135], ['age', KE.age + 180]];
export const SceneQ3Evaluate: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, KE.first, 12);
	return (
		<Svg>
			<Title text="Limitations, then a judgement" />
			<HscTag />
			<Badge text="Judge the study" />
			<Q3Col marks={M_E} />
			<PicH p={PL.can} cx={840} cy={350} h={300} />
			<Chip x={1060} y={322} text="type 2 diabetes" size={38} color={BLUE} ink={INK} />
			<Arrow a={[906, 326]} b={[1046, 326]} at={KE.first} bow={-0.18} color={AMBER_INK} width={5} />
			<Arrow a={[1046, 398]} b={[906, 398]} at={KE.first + 8} bow={-0.18} color={AMBER_INK} width={5} />
			{q > 0.01 ? <g opacity={q}><Sx x={976} y={284} text="?" size={48} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /><Sx x={976} y={470} text="?" size={48} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /></g> : null}
			<Sx x={790} y={548} text="which came first?" size={46} color={AMBER_INK} hand at={KE.first} />
			<ConfTri x={1340} y={176} w={500} h={320} at={-1000} words={WORDS} label="possible confounders" labelAt={KE.conf} />
			{(['self-reported', 'online', 'one city'] as const).map((t, i) => <Chip key={t} x={[1150, 1440, 1620][i]} y={516} text={t} size={42} color={AMBER_INK} at={KE.self + [0, 12, 24][i]} />)}
			<Arrow a={[800, 948]} b={[1824, 948]} at={KE.cohort} color={BLUE} width={7} head={24} />
			<Sx x={800} y={922} text="now: adults without diabetes; record drinks" size={32} color={INK} hand at={KE.record} />
			<Sx x={1824} y={922} text="later: who develops it?" size={32} color={INK} hand anchor="end" at={KE.forward} />
			<Sx x={800} y={1012} text="cohort goes forward" size={46} color={BLUE} hand at={KE.forward} />
			<Sx x={1824} y={1012} text="stronger: cohort, adjusted for confounders" size={38} color={TEAL} hand anchor="end" at={KE.adjust} />
			<FrameStrip x={780} y={600} w={1060} h={262} size={32} fills={[DESIGN, STRENGTH, {t: '', at: KE.first + 10, parts: [["can't show which came first;", KE.first + 10], ['confounders;', KE.conf], ['self-report; one city, online', KE.self + 30]]}, {t: 'association only; the claim of cause is not supported', at: KE.assoc + 10}]} pulseAt={[[2, KE.first + 10], [2, KE.conf], [2, KE.self + 30], [3, KE.assoc + 10]]} />
		</Svg>
	);
};

// ---------- 4d. the classic mistake ----------
const KM3 = K('q3-mistake', {classic: 'classic mistake', random: 'random uncertainty', design: 'fix the design', snap: 'A snapshot still', order: 'order in time', deal: 'deal with'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const op = pulse(f, KM3.order, 40);
	return (
		<Svg>
			<Title text="The classic mistake" />
			<HscTag />
			<Badge text="Judge the study" />
			<Q3Col />
			<Mistake x={780} y={176} text="2000 people, so it's proven" size={46} at={-1000} cross={KM3.classic + 6} />
			<DotBlock x={806} y={356} cols={20} rows={20} sp={11} n={36} tint={-1000} seed={3} pulseAt={KM3.random} label="36 of 400" />
			<DotBlock x={1060} y={346} cols={40} rows={40} sp={6.6} n={64} tint={-1000} seed={5} pulseAt={KM3.random} label="64 of 1600" />
			<Tag x={790} y={640} w={560} text="more responses: less random uncertainty, but the same selection bias and the same design" size={42} color={TEAL} at={KM3.random} />
			<FrameStrip x={1380} y={250} w={460} h={150} size={34} only={[0]} fills={[DESIGN, undefined, undefined, undefined]} pulseAt={[[0, KM3.design]]} />
			<Chip x={1380} y={416} text="design limits the claim" size={34} color={AMBER_INK} at={KM3.design} />
			<g transform={op > 0.01 ? `translate(1610,560) scale(${1 + 0.06 * op}) translate(-1610,-560)` : undefined}>
				<Sx x={1380} y={538} text="order in time: cohort goes forward" size={34} color={BLUE} hand at={-1000} />
				<Arrow a={[1384, 572]} b={[1830, 572]} color={BLUE} width={7} head={22} />
			</g>
			<ConfTri x={1380} y={612} w={460} h={290} words={[['diet', -1000], ['weight', 60], ['sleep', 120], ['age', 180], ['diet', 240], ['weight', 300], ['sleep', 360], ['age', 420], ['diet', 480], ['weight', 540]]} label="deal with confounders" labelAt={KM3.deal} pulseAt={KM3.deal} size={30} />
			<T x={790} y={900} w={560} text="A snapshot still can't show a cause." size={46} color={INK} at={KM3.snap} />
			<T x={1380} y={940} w={460} text="Cause needs the order in time and a way to deal with confounders." size={36} color={TEAL} at={KM3.order} />
		</Svg>
	);
};

// ---------- 5. decision board ----------
const KB = K('decision-board', {rate: 'For a rate', graph: 'For a graph', study: 'For a study', show: 'show', next: 'Next'});
const MiniGraph: React.FC<{cx: number; cy: number}> = ({cx, cy}) => (
	<g>
		<path d={`M${cx - 70},${cy - 60} L${cx - 70},${cy + 60} L${cx + 70},${cy + 60}`} fill="none" stroke={INK} strokeWidth={4} />
		<path d={`M${cx - 60},${cy - 5} L${cx - 20},${cy - 30} L${cx + 20},${cy - 45} L${cx + 50},${cy - 50} L${cx + 66},${cy - 45}`} fill="none" stroke={TEAL} strokeWidth={5} />
		<path d={`M${cx - 60},${cy + 48} L${cx - 20},${cy + 46} L${cx + 20},${cy + 45} L${cx + 50},${cy + 46} L${cx + 66},${cy + 50}`} fill="none" stroke={AMBER_INK} strokeWidth={5} />
	</g>
);
export const SceneDecision: React.FC = () => {
	const y0 = 190, rh = 186, gap = 16, mid = (i: number) => y0 + i * (rh + gap) + rh / 2;
	return (
		<Svg>
			<Title text="Your first move for each type" />
			<Decision y0={y0} rh={rh} gap={gap} rows={[
				{see: 'counts from groups of different size', doo: 'rate per 100 000, same unit for all', badge: 'Q1', at: KB.rate, thumb: <Pic p={PL.pancreas} cx={238} cy={mid(0)} w={240} />},
				{see: 'a table of rates to graph', doo: 'axes, units, an even scale that fits every value, then plot', badge: 'Q2', at: KB.graph, thumb: <g><PicH p={PL.melanoma} cx={160} cy={mid(1)} h={110} /><MiniGraph cx={290} cy={mid(1) + 4} /></g>},
				{see: 'a study and a claim', doo: 'name the design; association or cause?', badge: 'Q3', at: KB.study, thumb: <g><PicH p={PL.clip} cx={200} cy={mid(2)} h={150} /><PicH p={PL.can} cx={310} cy={mid(2)} h={140} /></g>},
			]} />
			<g opacity={prog(useCurrentFrame(), KB.show - 20, 14)}>
				<rect x={96} y={802} width={1728} height={104} rx={22} fill="#fffdf8" stroke={BLUE} strokeWidth={4} />
				<Sx x={960} y={870} text="Rate before you compare. Scale before you plot. Design before you judge." size={48} color={BLUE} hand anchor="middle" at={-1000} />
			</g>
			<g opacity={prog(useCurrentFrame(), KB.next, 14)}>
				<rect x={1000} y={934} width={824} height={96} rx={48} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Pic p={PL.pancreas} cx={1100} cy={982} w={150} />
				<Sx x={1190} y={996} text="Next: How can type 2 diabetes be managed?" size={40} color={INK} hand at={-1000} />
			</g>
		</Svg>
	);
};

// ---------- 6. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={46} aidTop={740} tag="Q1 rates, Q2 graphs, Q3 studies: the first move for each" aid="Rate before you compare. Scale before you plot. Design before you judge." notes={[
		'Incidence or mortality = cases or deaths ÷ population × 100 000, per year. Prevalence = existing cases ÷ group × 100.',
		'Compare rates, not raw counts; check age structure before inferring risk.',
		'Graph (TAILS): one set of axes, years to scale, an even scale that fits every value.',
		'Evaluate a study: design, strength, limitation, judgement.',
		'A cross-sectional survey shows an association, not which came first.',
	]} />
);
