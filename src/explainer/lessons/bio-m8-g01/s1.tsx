// M8 G01 scenes 1 to 5: the hook (three question types, each with its painted case), question 1 (two regions) as the
// full worded card with the countdown, the rates worked one row at a time with the answer grid and rate bars, counts
// against rates with population blocks drawn to scale and the age check, and the crossed raw-count mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Badge, BLUE, BlankLines, CalcLine, Chip, DrawPath, EDGE, FracRow, GTag, HscTag, INK, INK_SOFT, Mistake, Pause, Pic, PicH, PopBlocks, Q1Col, Q1Full, RateBars, ResultGrid, AgePyr,
	Svg, Sx, T, TEAL, Tag, Title, VIOLET, P_COL, prog, q1Marks,
} from './parts';
import {PL} from './assets';
import {K, hold} from './common';

// ---------- 1. hook ----------
const KH = K('hook', {calc: 'Calculate', draw: 'draw', judge: 'judge', three: 'three HSC-style questions'});
const Lit: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return <g opacity={0.42 + 0.58 * p}>{children}</g>;
};
const HookCard: React.FC<{x: number; at: number; n: string; verb: string; color: string; children: React.ReactNode}> = ({x, at, n, verb, color, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const nb = prog(f, KH.three + (Number(n) - 1) * 8, 12);
	return (
		<g>
			<rect x={x} y={160} width={548} height={800} rx={26} fill="#fffdf8" stroke={p > 0.5 ? color : EDGE} strokeWidth={p > 0.5 ? 5 : 3} />
			<Lit at={at}>
				<Sx x={x + 30} y={238} text={verb} size={58} color={color} hand at={-1000} />
				{children}
			</Lit>
			{nb > 0.01 ? <g opacity={nb}><circle cx={x + 488} cy={218} r={40} fill={color} /><Sx x={x + 488} y={232} text={`Q${n}`} size={38} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const ax = 686 + 70, ay = 880;
	const dl = prog(f, KH.draw + 6, 40);
	return (
		<Svg>
			<Title text="Calculate it, graph it, judge it" />
			<HookCard x={96} at={KH.calc} n="1" verb="Calculate it" color={AMBER_INK}>
				<Pic p={PL.pancreas} cx={370} cy={420} w={500} />
				<Sx x={370} y={600} text="type 2 diabetes in two regions" size={34} color={INK} anchor="middle" hand at={-1000} />
				<FracRow x={126} yc={735} lhs="" num="new cases" den="population" tail="× 100 000" size={44} />
				<Sx x={370} y={905} text="a rate per 100 000 people" size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
			</HookCard>
			<HookCard x={686} at={KH.draw} n="2" verb="Graph it" color={TEAL}>
				<PicH p={PL.melanoma} cx={960} cy={440} h={300} />
				<Sx x={960} y={624} text="melanoma rates, 1985 to 2020" size={34} color={INK} anchor="middle" hand at={-1000} />
				<path d={`M${ax},${ay - 200} L${ax},${ay} L${ax + 400},${ay}`} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={ax + 200} y={ay + 44} text="year" size={30} color={VIOLET} anchor="middle" weight={800} at={-1000} />
				<g transform={`translate(${ax - 22},${ay - 100}) rotate(-90)`}><Sx x={0} y={0} text="rate" size={30} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /></g>
				{dl > 0.01 ? <g opacity={dl}>
					<DrawPath d={`M${ax + 30},${ay - 110} L${ax + 130},${ay - 140} L${ax + 230},${ay - 160} L${ax + 330},${ay - 170} L${ax + 380},${ay - 160}`} at={KH.draw + 6} dur={30} color={TEAL} width={6} />
					<DrawPath d={`M${ax + 30},${ay - 22} L${ax + 130},${ay - 24} L${ax + 230},${ay - 25} L${ax + 330},${ay - 24} L${ax + 380},${ay - 18}`} at={KH.draw + 16} dur={30} color={AMBER_INK} width={6} />
				</g> : null}
			</HookCard>
			<HookCard x={1276} at={KH.judge} n="3" verb="Judge it" color={BLUE}>
				<PicH p={PL.clip} cx={1460} cy={430} h={290} />
				<PicH p={PL.can} cx={1680} cy={440} h={270} />
				<Sx x={1550} y={624} text="a survey and a claim" size={34} color={INK} anchor="middle" hand at={-1000} />
				{['design', 'strength', 'limitation', 'judgement'].map((t, i) => (
					<g key={t}>
						<rect x={1306 + (i % 2) * 248} y={668 + Math.floor(i / 2) * 112} width={232} height={96} rx={16} fill="#fffdf8" stroke={BLUE} strokeWidth={3} strokeDasharray="10 8" />
						<Sx x={1306 + (i % 2) * 248 + 116} y={668 + Math.floor(i / 2) * 112 + 60} text={t} size={36} color={BLUE} anchor="middle" hand at={-1000} />
					</g>
				))}
			</HookCard>
			<Chip x={960} y={986} text="HSC-style questions, written for HSCScience" size={32} color={INK_SOFT} ink={INK} anchor="middle" at={KH.three} />
		</Svg>
	);
};

// ---------- 2a. question 1 ----------
const KQ1 = K('q1-question', {pause: 'Pause here'});
export const SceneQ1: React.FC = () => (
	<Svg>
		<Title text="Question 1: two regions" />
		<HscTag />
		<Q1Full />
		<Pic p={PL.pancreas} cx={1582} cy={294} w={450} />
		<Chip x={1582} y={424} text="type 2 diabetes" anchor="middle" size={32} color={AMBER_INK} />
		<BlankLines x={1340} y={494} w={484} h={262} label="your answer" />
		<Pause h={hold('q1-question')} at={KQ1.pause} tx={1340} ty={836} cx={1745} cy={952} r={48} />
	</Svg>
);

// ---------- 2b. rates, one row at a time ----------
const KC = K('q1-calc', {eq: 'equation', inc: 'Incidence is', forP: 'For P', p550: 'five hundred and fifty', forQ: 'For Q', q700: 'seven hundred', mort: 'Mortality puts', deaths: 'deaths on top', three: 'Three hundred over', p25: 'twenty-five', f54: 'fifty-four over', q36: 'thirty-six', sense: ['Sense check', 2]});
const CELLS_C = {pi: KC.p550, qi: KC.q700, pm: KC.p25, qm: KC.q36};
const M_C = q1Marks([{phrase: 'per 100 000 people per year', at: KC.inc + 20}]);
export const SceneQ1Calc: React.FC = () => (
	<Svg>
		<Title text="Rates first" />
		<HscTag />
		<Badge text="Calculate rates" />
		<Q1Col marks={M_C} cells={{'1,2': KC.forP + 8, '1,1': KC.forP + 26, '2,2': KC.forQ + 8, '2,1': KC.forQ + 26, '1,3': KC.three, '2,3': KC.f54}} />
		<GTag x={770} y={168} text="s05: One E and three S's (Equation, Substitute, Solve, Sense check)" size={28} />
		<FracRow x={780} yc={318} lhs="incidence" num="new cases" den="population" tail="× 100 000" size={50} at={KC.eq} numSwap={{t: 'deaths', at: KC.deaths, lhs: 'mortality'}} denLabel="everyone in the region" />
		<Sx x={780} y={488} text="incidence, per 100 000 per year" size={38} color={AMBER_INK} hand at={KC.forP} out={KC.mort} />
		<CalcLine x={780} y={560} label="P:" labelColor={P_COL} sub="6600 ÷ 1 200 000 × 100 000 =" res="550" at={KC.forP + 20} resAt={KC.p550} out={KC.mort} dim={KC.forQ} size={46} />
		<CalcLine x={780} y={636} label="Q:" labelColor={AMBER_INK} sub="1050 ÷ 150 000 × 100 000 =" res="700" at={KC.forQ + 20} resAt={KC.q700} out={KC.mort} size={46} />
		<Sx x={780} y={488} text="mortality, per 100 000 per year" size={38} color={AMBER_INK} hand at={KC.mort + 12} />
		<CalcLine x={780} y={560} label="P:" labelColor={P_COL} sub="300 ÷ 1 200 000 × 100 000 =" res="25" at={KC.three} resAt={KC.p25} dim={KC.f54} size={46} />
		<CalcLine x={780} y={636} label="Q:" labelColor={AMBER_INK} sub="54 ÷ 150 000 × 100 000 =" res="36" at={KC.f54} resAt={KC.q36} size={46} />
		<ResultGrid x={780} y={730} at={CELLS_C} size={54} />
		<RateBars x={1420} base={990} h={220} at={CELLS_C} check={KC.sense + 30} />
		<Sx x={1400} y={702} text="smaller region, higher rates" size={40} color={AMBER_INK} hand at={KC.sense + 30} />
	</Svg>
);

// ---------- 2c. counts against rates, then age ----------
const KL = K('q1-claim', {eight: 'eight times', every: 'Out of every', more: 'Q had more', notsup: "isn't supported", ages: 'check their ages', older: 'an older population', age: 'Age-standardised', fairer: 'fairer'});
const DONE = {pi: -1000, qi: -1000, pm: -1000, qm: -1000};
const M_L = q1Marks([{phrase: 'more than six times as many new cases', at: KL.notsup - 10}]);
export const SceneQ1Claim: React.FC = () => (
	<Svg>
		<Title text="Counts against rates" />
		<HscTag />
		<Badge text="Calculate rates" />
		<Q1Col marks={M_L} cells={{'1,1': KL.eight, '2,1': KL.eight + 10}} />
		<PopBlocks x={790} y={226} sq={70} hi={KL.every} />
		<Sx x={790} y={524} text="P has 8 × the population, so more cases" size={40} color={AMBER_INK} hand at={KL.eight} />
		<Sx x={790} y={604} text="in every 100 000 people:" size={38} color={INK} hand at={KL.every} />
		<CalcLine x={790} y={672} label="new cases:" sub="P 550," res="Q 700" at={KL.every + 20} resAt={KL.more} size={44} />
		<CalcLine x={790} y={744} label="deaths:" sub="P 25," res="Q 36" at={KL.more + 20} resAt={KL.more + 34} size={44} />
		<ResultGrid x={1420} y={210} at={DONE} size={38} />
		<GTag x={1420} y={400} text="age structure?" size={32} at={KL.ages} />
		<AgePyr x={1430} y={470} w={170} h={150} old={false} label="P: younger" color={P_COL} at={KL.ages + 10} />
		<AgePyr x={1650} y={470} w={170} h={150} old={true} label="Q: older" color={AMBER_INK} at={KL.ages + 20} />
		<GTag x={1500} y={676} text="if Q is older" size={30} at={KL.older} />
		<Tag x={1400} y={740} w={440} text="age-standardised: adjusted as if both had the same age mix" size={32} color={BLUE} at={KL.age} />
		<AnsBox x={780} y={880} w={1060} h={164} label="answer (b)" size={44} hint="Is the claim supported by the rates?" lines={[
			{t: 'Per 100 000, Q is higher: claim not supported.', at: KL.notsup},
			{t: 'Compare age-standardised rates first.', at: KL.fairer - 6},
		]} />
	</Svg>
);

// ---------- 2d. the classic mistake ----------
const KM = K('q1-mistake', {classic: 'classic mistake', bigger: 'A bigger population', fewer: 'fewer cases', turn: 'Turn every count'});
export const SceneQ1Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Calculate rates" />
		<Q1Col />
		<Mistake x={780} y={180} text="6600 > 1050, so P is worse" size={46} at={-1000} cross={KM.classic + 6} note="compare rates, not raw counts" />
		<PopBlocks x={790} y={420} sq={64} pulseAt={KM.bigger} />
		<Sx x={790} y={692} text="same risk, more people, more cases" size={40} color={AMBER_INK} hand at={KM.bigger} />
		<ResultGrid x={1420} y={430} at={DONE} size={38} glowQ={KM.fewer} />
		<Chip x={1420} y={636} text="fewer cases, higher rates" size={36} color={AMBER_INK} at={KM.fewer} />
		<FracRow x={790} yc={830} lhs="rate" num="cases" den="population" tail="× 100 000" size={46} denPulse={KM.turn} />
		<Sx x={1500} y={850} text="Rate before" size={50} color={BLUE} hand at={KM.turn} />
		<Sx x={1500} y={910} text="you compare." size={50} color={BLUE} hand at={KM.turn + 6} />
		{void T}{void TEAL}
	</Svg>
);
