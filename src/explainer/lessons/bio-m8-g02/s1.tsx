// M8 G02 (Biology) scenes 1 to 5: the hook (three cases with their plates, and the earlier videos' plates recalled);
// question 1 (a screening kit campaign) as the full worded card with the countdown; how screening prevents harm and
// the comparison (the chain, the measure ladder, the paired bars and the difference); the limits, judgement and
// improvement; the crossed "raised returns by 9 points" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Arrow, Badge, BLUE, BlankLines, Box, Chip, DIFF, EDGE, EvalStrip, Framed, GTag, Givens, HscTag, INK, Ladder, Mistake, PairBars, Pause, Pic, PicH, PL, PreRing, Q1Col, Q1Full, Svg, Sx, T,
	TEAL, Tag, Title, A_COL, GREYT, prog, q1Marks,
} from './parts';
import {K, hold} from './common';

const ON = -1000;

// ---------- 1. hook ----------
const KH = K('hook', {prevention: 'prevention', technology: 'technology', three: 'three HSC-style', screening: 'a screening campaign', gene: 'gene therapy', hearing: 'hearing technology'});
const HookCard: React.FC<{x: number; at: number; n: number; verb: string; color: string; what: string; whatAt: number; children: React.ReactNode}> = ({x, at, n, verb, color, what, whatAt, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const nb = prog(f, KH.three + (n - 1) * 8, 12);
	return (
		<g>
			<rect x={x} y={160} width={548} height={690} rx={26} fill="#fffdf8" stroke={p > 0.5 ? color : EDGE} strokeWidth={p > 0.5 ? 5 : 3} />
			<Sx x={x + 30} y={230} text={verb} size={50} color={color} hand at={ON} />
			{children}
			<T x={x + 30} y={772} w={490} text={what} size={36} color={INK} at={whatAt} />
			{nb > 0.01 ? <g opacity={nb}><circle cx={x + 492} cy={212} r={38} fill={color} /><Sx x={x + 492} y={226} text={`Q${n}`} size={36} color="#fffdf8" anchor="middle" weight={800} at={ON} /></g> : null}
		</g>
	);
};
export const SceneHook: React.FC = () => (
	<Svg>
		<Title text="Evaluate it: evidence, limit, judgement" />
		<HookCard x={96} at={KH.prevention} n={1} verb="A screening campaign" color={A_COL} what="kit returns, with a comparison region" whatAt={KH.screening}>
			<PicH p={PL.kit} cx={330} cy={440} h={300} />
			<PicH p={PL.sun} cx={530} cy={640} h={100} />
			<GTag x={360} y={690} text="b13, b14: prevention" size={26} at={KH.prevention} />
		</HookCard>
		<HookCard x={686} at={KH.prevention} n={2} verb="A gene therapy" color={BLUE} what="a trial with a control group" whatAt={KH.gene}>
			<Pic p={PL.eye} cx={930} cy={460} w={330} />
			<PicH p={PL.aav} cx={1146} cy={330} h={120} />
		</HookCard>
		<HookCard x={1276} at={KH.technology} n={3} verb="A hearing technology" color={AMBER_INK} what="speech scores, before and after" whatAt={KH.hearing}>
			<Pic p={PL.implant} cx={1550} cy={430} w={400} />
			<Pic p={PL.glasses} cx={1380} cy={650} w={130} />
			<PicH p={PL.kidney} cx={1500} cy={650} h={86} />
			<GTag x={1560} y={626} text="b15 to b17" size={26} at={KH.technology} />
		</HookCard>
		<EvalStrip x={96} y={872} w={1728} h={84} fills={[undefined, undefined, undefined, undefined]} />
		<Chip x={960} y={980} text="HSC-style questions, written for HSCScience" size={32} color="#8d857a" ink={INK} anchor="middle" at={KH.three} />
	</Svg>
);

// ---------- 2a. question 1 ----------
const KQ1 = K('q1-question', {pause: 'Pause here'});
export const SceneQ1: React.FC = () => (
	<Svg>
		<Title text="Question 1: screening kits" />
		<HscTag />
		<Q1Full />
		<PicH p={PL.kit} cx={1582} cy={312} h={300} />
		<Givens x={1340} y={508} items={[['A (campaign): 38% → 47%', A_COL], ['B (kits only): 38% → 40%', GREYT], ['two years; similar regions', INK]]} />
		<BlankLines x={1340} y={690} w={484} h={150} label="your answer" />
		<Pause h={hold('q1-question')} at={KQ1.pause} tx={1340} ty={888} cx={1745} cy={958} r={46} />
		<PreRing at={KQ1.pause} start={hold('q1-question').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- 2b. how it prevents harm, then the comparison ----------
const KM = K('q1-measure', {start: 'Start with', kit: 'The kit finds', closer: 'closer look', polyps: 'polyps', early: 'found early', impact: 'impact', people: 'what people did', comparison: 'Now use the comparison', rA: 'Region A rose', rB: ['Region B', 1], two: 'rose by two', seven: 'seven points'});
const M_M = q1Marks([{phrase: 'tests a small stool sample for hidden blood', at: KM.kit}, {phrase: 'to increase the number of kits returned', at: KM.impact}]);
const ChainBox: React.FC<{x: number; y: number; w: number; text: string; at: number}> = ({x, y, w, text, at}) => {
	const f = useCurrentFrame();
	const k = prog(f, at, 12);
	return (
		<g>
			<rect x={x} y={y} width={w} height={120} rx={16} fill="#fffdf8" stroke={k > 0.5 ? TEAL : EDGE} strokeWidth={k > 0.5 ? 4 : 2.5} strokeDasharray={k > 0.5 ? undefined : '10 8'} />
			<T x={x + 18} y={y + 50} w={w - 30} text={text} size={34} color={INK} at={at} />
		</g>
	);
};
export const SceneQ1Measure: React.FC = () => (
	<Svg>
		<Title text="How it prevents harm, then compare" />
		<HscTag />
		<Badge text="Evaluate a campaign" />
		<Q1Col marks={M_M} cells={{'1,1': KM.rA, '1,2': KM.rA + 10, '2,1': KM.two - 20, '2,2': KM.two}} />
		<PicH p={PL.kit} cx={890} cy={258} h={170} />
		<Sx x={890} y={372} text="kit: hidden blood" size={30} color={INK} anchor="middle" hand weight={700} at={KM.kit} />
		<Arrow a={[990, 250]} b={[1036, 250]} at={KM.closer} color={TEAL} />
		<ChainBox x={1046} y={190} w={330} text="closer look inside the bowel (colonoscopy)" at={KM.closer} />
		<Arrow a={[1386, 250]} b={[1430, 250]} at={KM.polyps} color={TEAL} />
		<ChainBox x={1440} y={190} w={400} text="polyps removed, or cancer found early" at={KM.polyps} />
		<GTag x={1046} y={326} text="b13: secondary prevention" size={28} at={KM.early} />
		<PairBars x={870} base={780} h={300} bw={60} t={{aB: KM.rA, aA: KM.rA + 12, brA: KM.rA + 24, bB: KM.rB, bA: KM.two, brB: KM.two + 8, diff: KM.seven}} />
		<Ladder x={1460} y={430} w={380} rh={92} rungs={[{}, {lit: KM.impact, tag: ['kit returns', KM.impact + 10]}, {}]} size={32} />
		<EvalStrip fills={[{t: 'kit → colonoscopy → polyps removed or cancer found early', at: KM.early}, {t: '+9 against +2: about 7 points from the campaign', at: KM.seven + 4}, undefined, undefined]} />
	</Svg>
);

// ---------- 2c. limits, judgement, improvement ----------
const KJ = K('q1-judge', {limits: 'Now the limits', not: 'not deaths', longer: 'longer follow-up', random: "weren't chosen", half: 'more than half', eff: 'effective at increasing', but: 'but that outcome', improve: 'A good improvement', target: 'target the groups'});
const M_J = q1Marks([{phrase: 'similar in age structure and income', at: KJ.random}]);
const DONE_FILL = [{t: 'kit → colonoscopy → polyps removed or cancer found early', at: ON}, {t: '+9 against +2: about 7 points from the campaign', at: ON}];
export const SceneQ1Judge: React.FC = () => (
	<Svg>
		<Title text="Limits, judgement, improvement" />
		<HscTag />
		<Badge text="Evaluate a campaign" />
		<Q1Col marks={M_J} cells={{'0,1': KJ.not, '0,2': KJ.not + 8, '1,2': KJ.half}} />
		<PairBars x={870} base={448} h={220} bw={48} size={26} t={{aB: ON, aA: ON, bB: ON, bA: ON, brA: ON, brB: ON, diff: ON, dimAt: KJ.limits}} />
		<Tag x={1080} y={176} w={250} text="53% of A still not screened" size={28} color={AMBER_INK} at={KJ.half} />
		<Ladder x={1400} y={206} w={440} rh={64} size={28} rungs={[{}, {lit: ON}, {pulseAt: KJ.not, tag: ['not measured yet', KJ.not]}]} />
		<GTag x={1400} y={430} text="polyp → cancer: often 10+ years" size={28} at={KJ.longer} />
		<AnsBox x={790} y={526} w={1050} h={336} label="answer: limits, judgement, improvement" size={44} sizeOld={30} hint="What can these data not show?" lines={[
			{t: 'They measure kit returns, not deaths; longer follow-up would test outcomes.', at: KJ.not},
			{t: 'Regions similar, but not chosen at random.', at: KJ.random},
			{t: '53% of Region A still did not return a kit.', at: KJ.half},
			{t: 'Effective at raising screening; deaths prevented not yet shown.', at: KJ.eff, color: TEAL},
			{t: 'Improve: follow diagnoses and deaths 10+ years; target low-return groups.', at: KJ.improve},
		]} />
		<EvalStrip fills={[...DONE_FILL, {t: 'no deaths measured; not randomised; over half not screened', at: KJ.half + 20}, {t: 'effective at raising screening; outcome not yet shown', at: KJ.eff}]} />
	</Svg>
);

// ---------- 2d. the classic mistake ----------
const KX = K('q1-mistake', {classic: 'classic mistake', regB: 'Region B rose', sep: 'separates', compare: 'Compare with it'});
export const SceneQ1Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Evaluate a campaign" />
		<Q1Col />
		<Mistake x={790} y={170} text="the campaign raised returns by 9 points" size={42} at={ON} cross={KX.classic + 8} />
		<PairBars x={880} base={720} h={330} bw={64} t={{aB: ON, aA: ON, bB: ON, bA: ON, brA: ON, brB: ON, diff: ON, pulseB: KX.regB, pulseD: KX.sep}} />
		<Tag x={1300} y={560} w={330} text="change without the campaign" size={30} color={GREYT} at={KX.regB} />
		<PicH p={PL.kit} cx={1700} cy={420} h={230} />
		<GTag x={1420} y={300} text="b13: SunSmart had no comparison group" size={26} at={KX.sep} />
		<Framed x={790} y={914} text="about 7 points can be linked to the campaign" size={44} color={TEAL} at={ON} />
		<T x={790} y={1016} text="Subtract the comparison region's change first." size={44} color={BLUE} at={KX.classic + 20} />
		{void DIFF}{void Box}
	</Svg>
);
