// B8-10 scenes 6 to 9: worked mortality (the whole population goes underneath; the share of patients who die is a
// different measure), why the three numbers differ (three bars on one axis, two tanks), counts, crude rates and age (the
// hook answered), and collecting and representing rates on one denominator.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, Axes, BLUE, Bars, CARD, CalcLine, Chip, DrawPath, EDGE, FracRow, Framed, GREYT, GTag, Givens, INK, INK_SOFT, Line, MeasuresBar, Mistake, OLD, ON, Pic, Pyramid, Svg, Sx, T, TEAL, TankS, TaskStrip, Title, YOUNG,
	lerp, mix, prog, pulse, smooth, vis,
} from './parts';
import type {LG} from './parts';
import {PL} from './assets';
import {ASR, CRUDE, DEATHS, K} from './common';
import {BoardLeft, Box2} from './s1';

// ---------- 6. worked mortality ----------
const K6 = K('worked-mortality', {third: 'Third', in2025: 'In 2025', sixteen: ['sixteen people', 1], died: 'died from', over: 'Sixteen over', times: 'times a', twenty: 'twenty per', whole: 'the whole', not: 'not just', makes: "That's what", share: 'The share', diff: 'a different'});
export const SceneMortality: React.FC = () => {
	const sx = 720, sz = 48;
	return (
		<Svg>
			<Title text="Worked: mortality" />
			<TaskStrip text="In 2025: how many deaths from type 2 diabetes per 100,000 people per year?" at={ON} />
			<BoardLeft top={260}>
				<Givens x={124} y={490} w={540} size={36} lh={92} items={[
					{t: 'deaths from type 2 diabetes in 2025: 16 people', at: K6.sixteen, pulse: [K6.over]},
					{t: 'population: 80,000 people', at: ON, pulse: [K6.over + 10, K6.whole]},
					{t: 'time window: 1 year', at: K6.in2025},
				]} />
				<GTag x={116} y={836} text="diabetes as the underlying cause" size={26} at={K6.died} />
			</BoardLeft>
			<FracRow x={sx} yc={370} lhs="mortality rate" num="deaths" den="population" tail="× 100,000" size={sz} at={K6.third} denPulse={K6.whole} />
			<FracRow x={sx} yc={560} lhs="" num="16" den="80,000" tail="× 100,000" size={sz} at={K6.over} denPulse={K6.whole + 10} denLabel="the whole population" />
			<Framed x={sx} y={780} text="= 20 per 100,000 per year" at={K6.twenty} size={48} />
			<Mistake x={1240} y={500} text="16 ÷ 4,400 (people with it)" size={38} at={K6.not} cross={K6.share} note="the share of patients who die: a different measure" noteW={560} />
			<Sx x={1240} y={460} text="not the people who had it" size={34} color={INK} hand at={K6.not} />
			<MeasuresBar y={930} h={110} size={34} cols={[{lit: ON, val: '200 per 100,000 per year', valAt: ON}, {lit: ON, val: '5.5% = 5,500 per 100,000', valAt: ON}, {lit: K6.third, val: '20 per 100,000 per year', valAt: K6.twenty + 20}]} />
		</Svg>
	);
};

// ---------- 7. why the three differ ----------
const K7 = K('why-they-differ', {side: 'Side by', two: 'two hundred', five: 'five thousand', twenty: 'twenty deaths', all: 'all per', prev: 'Prevalence is', life: 'lasts for', tank: 'the tank', little: 'little drains', panc: 'Pancreatic cancer', few: 'Few people', most: 'most die', low: 'stays low', better: 'better treatment', raises: 'raises prevalence', doesnt: "doesn't change"});
export const SceneDiffer: React.FC = () => {
	const f = useCurrentFrame();
	const g: LG = {x: 200, y: 260, w: 640, h: 500, x0: 0, x1: 1, y0: 0, y1: 6000};
	const t1 = 0.35 + 0.65 * prog(f, K7.life, 14);
	const t2 = 0.35 + 0.65 * prog(f, K7.panc, 14);
	const bt = smooth(prog(f, K7.better, 30));
	return (
		<Svg>
			<Title text="Why the three numbers differ" />
			<Axes g={g} yTicks={[0, 2000, 4000, 6000]} yLabel="per 100,000 (type 2 diabetes, one city)" size={28} />
			<Bars g={g} lsize={30} bars={[
				{lab: 'incidence (per year)', v: 200, at: K7.two, col: '#7f9cbd'},
				{lab: 'prevalence (one date)', v: 5500, at: K7.five, col: TEAL},
				{lab: 'mortality (per year)', v: 20, at: K7.twenty, col: AMBER_INK},
			]} pulses={[[1, K7.prev]]} />
			<GTag x={200} y={880} text="prevalence: one date; the others: per year" size={28} at={K7.all} />
			<rect x={920} y={180} width={430} height={680} rx={22} fill={CARD} stroke={t1 > 0.9 ? TEAL : EDGE} strokeWidth={3} opacity={t1} />
			<g opacity={t1}>
				<Sx x={945} y={232} text="type 2 diabetes" size={38} color={TEAL} hand at={ON} />
				<TankS x={990} y={360} w={200} h={320} level={lerp(0.78, 0.92, bt)} inW={0.3} drainW={lerp(0.15, 0.03, bt)} labels={false} />
			</g>
			<T x={945} y={760} w={390} text="long-lasting: the tank fills" size={36} color={TEAL} at={K7.life} out={K7.better} />
			<T x={945} y={760} w={390} text="better treatment: prevalence up, incidence steady" size={34} color={BLUE} at={K7.better + 10} />
			<rect x={1394} y={180} width={430} height={680} rx={22} fill={CARD} stroke={t2 > 0.9 ? AMBER_INK : EDGE} strokeWidth={3} opacity={t2} />
			<g opacity={t2}>
				<Sx x={1419} y={232} text="pancreatic cancer" size={38} color={AMBER_INK} hand at={ON} />
				<Pic p={PL.pancreas} cx={1609} cy={300} w={300} />
				<TankS x={1464} y={430} w={200} h={250} level={0.14} inW={0.3} drainW={1} labels={false} />
			</g>
			<T x={1419} y={760} w={390} text="rapidly fatal: the tank stays low" size={36} color={AMBER_INK} at={K7.low} />
			<GTag x={920} y={890} text="Cancer Australia: pancreatic cancer five-year relative survival about 14% (2017 to 2021)" size={26} at={K7.most} />
			<Sx x={1135} y={330} text="tap: thin" size={30} color={INK} anchor="middle" hand at={K7.life} />
			<Sx x={1135} y={712} text="drain: almost closed" size={30} color={INK} anchor="middle" hand at={K7.little} />
			<Sx x={1609} y={712} text="drain: wide" size={30} color={INK} anchor="middle" hand at={K7.most} />
			{void pulse}
		</Svg>
	);
};

// ---------- 8. counts, crude rates and age ----------
const K8 = K('crude-age-standardised', {hook: 'Now the hook', doubles: 'doubles in', cases: 'cases double', hasnt: "hasn't changed", fixes: 'a rate fixes', older: 'older people', bigger: 'bigger and older', count: 'the count', crude: 'crude', barely: 'barely moved', age: 'age-standardised rate', same: 'same age mix', fallen: 'have fallen'});
export const SceneCrude: React.FC = () => {
	const f = useCurrentFrame();
	const town: LG = {x: 150, y: 250, w: 420, h: 240, x0: 0, x1: 1, y0: 0, y1: 70};
	const rel = prog(f, K8.hasnt, 14);
	const ages = ['20s', '40s', '60s', '80s'];
	const av = [0.06, 0.2, 0.55, 1];
	const af = smooth(prog(f, K8.older, 30));
	const mt = smooth(prog(f, K8.age + 20, 40));
	const gC: LG = {x: 160, y: 690, w: 700, h: 200, x0: 1995, x1: 2025, y0: 30000, y1: 56000};
	const gR: LG = {x: 1060, y: 690, w: 700, h: 200, x0: 1995, x1: 2025, y0: 120, y1: 220};
	return (
		<Svg>
			<Title text="Counts, crude rates and age" />
			<Box2 x={96} y={160} w={540} h={420} />
			<Sx x={120} y={212} text="a town doubles in size" size={36} color={BLUE} hand at={ON} />
			<Bars g={town} lsize={28} size={30} bars={[
				{lab: '10,000 people', v: 30, at: K8.doubles, col: '#7f9cbd', val: rel > 0.5 ? '300 per 100,000' : '30 cases'},
				{lab: '20,000 people', v: 60, at: K8.cases, col: '#7f9cbd', val: rel > 0.5 ? '300 per 100,000' : '60 cases'},
			]} />
			<Sx x={366} y={562} text="count doubles, rate the same" size={34} color={TEAL} anchor="middle" hand at={K8.hasnt} />
			<Box2 x={660} y={160} w={480} h={420} />
			<Sx x={684} y={212} text="cancer by age" size={36} color={BLUE} hand at={ON} />
			{ages.map((a, i) => {
				const x = 720 + i * 100, base = 500, h = 230 * av[i];
				return <g key={a}><rect x={x} y={base - h} width={64} height={h} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" /><rect x={x} y={base - h * af} width={64} height={h * af} rx={6} fill={AMBER_INK} opacity={0.85} /><Sx x={x + 32} y={base + 36} text={a} size={30} color={INK} anchor="middle" weight={700} at={ON} /></g>;
			})}
			<GTag x={684} y={548} text="AIHW: cancer incidence by age" size={26} at={K8.older} />
			<Box2 x={1164} y={160} w={660} h={420} />
			<Sx x={1188} y={212} text="Australia's age mix" size={36} color={BLUE} hand at={ON} />
			<Pyramid x={1290} y={250} w={190} h={240} shape={mix(YOUNG, OLD, 0.25 * mt)} color="#7f9cbd" label="1995" bands o={0.35 + 0.65 * prog(f, K8.bigger, 14)} size={32} />
			<Pyramid x={1560} y={250} w={190} h={240} shape={mix(OLD, mix(YOUNG, OLD, 0.25), mt)} color={AMBER_INK} label="2025" o={0.35 + 0.65 * prog(f, K8.bigger, 14)} size={32} />
			<Sx x={1494} y={565} text={mt > 0.5 ? 'same age mix' : 'older population'} size={34} color={mt > 0.5 ? TEAL : AMBER_INK} anchor="middle" hand at={mt > 0.5 ? K8.age + 40 : K8.bigger} />
			<Axes g={gC} yTicks={[30000, 50000]} yLabel="cancer deaths (count), from the hook" size={28} o={0.5 + 0.5 * prog(f, K8.count, 14)} />
			<Line g={gC} pts={DEATHS} at={ON} dur={1} color="#5f7f9f" dashFrom={2024} o={0.4 + 0.6 * prog(f, K8.count, 14)} />
			<Axes g={gR} yTicks={[120, 170, 220]} fmt={n => `${n}`} yLabel="deaths per 100,000" size={28} o={0.5 + 0.5 * prog(f, K8.crude, 14)} />
			<Line g={gR} pts={ASR} at={ON} dur={1} color={AMBER_INK} dashFrom={2024} o={0.35 * (1 - prog(f, K8.fallen, 6))} />
			<Line g={gR} pts={CRUDE} at={K8.crude + 10} dur={40} color="#8d857a" dashFrom={2024} />
			<Line g={gR} pts={ASR} at={K8.fallen} dur={40} color={AMBER_INK} dashFrom={2024} />
			<Sx x={1770} y={gR.y + 82} text="crude: barely moved" size={30} color={GREYT} anchor="end" hand at={K8.barely} />
			<Sx x={1770} y={gR.y + 190} text="age-standardised: fallen" size={30} color={AMBER_INK} anchor="end" hand at={K8.fallen + 20} />
			<T x={96} y={990} w={880} text="crude rate: not adjusted for age" size={36} color={INK} at={K8.crude} />
			<T x={980} y={990} w={860} text="age-standardised: compares as if the age mix were the same" size={34} color={AMBER_INK} at={K8.age} />
			<GTag x={1060} y={600} text="crude: 190.0 (1995), 193.6 (2025, projected)" size={26} at={K8.barely} />
			<Chip x={600} y={625} text="both statements true" size={32} color={TEAL} at={K8.fallen + 30} />
			{void vis}{void DrawPath}
		</Svg>
	);
};

// ---------- 9. collect and represent ----------
const K9 = K('collect-represent', {collect: 'To collect', trusted: 'a trusted', aihw: 'Australian Institute', check: 'check each', den: 'denominator', pct: 'a percentage', convert: 'convert before', graph: 'Then graph', line: 'a line graph', bar: 'a bar graph', units: 'the units', source: 'the source', caption: 'caption', remember: 'And remember', screening: 'better screening'});
export const SceneCollect: React.FC = () => {
	const f = useCurrentFrame();
	const gl: LG = {x: 1120, y: 230, w: 640, h: 230, x0: 2000, x1: 2020, y0: 0, y1: 80};
	const gb: LG = {x: 1120, y: 620, w: 640, h: 200, x0: 0, x1: 1, y0: 0, y1: 80};
	const conv = prog(f, K9.convert, 14);
	const pts: [number, number][] = [[2000, 30], [2004, 32], [2008, 33], [2010, 35], [2012, 52], [2016, 55], [2020, 57]];
	return (
		<Svg>
			<Title text="Collect and represent, on one denominator" />
			<g>
				<rect x={96} y={180} width={860} height={200} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={130} y={250} text="AIHW" size={60} color={BLUE} weight={800} at={ON} />
				<T x={130} y={310} w={780} text="Australian Institute of Health and Welfare" size={40} color={INK} />
				<GTag x={720} y={208} text="aihw.gov.au" size={26} />
			</g>
			<Sx x={110} y={455} text="check each denominator" size={40} color={INK} hand at={ON} opacity={0.45 + 0.55 * prog(f, K9.check, 12)} />
			<Chip x={110} y={490} text={conv > 0.5 ? 'prevalence: 5,500 per 100,000' : 'prevalence: 5.5%'} size={46} color={conv > 0.5 ? TEAL : AMBER_INK} o={0.4 + 0.6 * prog(f, K9.den, 12)} glow={pulse(f, K9.convert, 36)} />
			<Chip x={110} y={600} text="incidence: 200 per 100,000 per year" size={46} color={TEAL} o={0.4 + 0.6 * prog(f, K9.den + 10, 12)} />
			<GTag x={110} y={716} text="same denominator first" size={30} at={K9.convert + 10} />
			<Sx x={110} y={830} text="convert before you compare" size={44} color={BLUE} hand at={K9.convert} />
			<Axes g={gl} yTicks={[0, 40, 80]} xTicks={[2000, 2010, 2020]} fmt={n => `${n}`} yLabel="new cases per 100,000 per year" yLabelPulse={K9.units} size={28} yLabelW={640} grid />
			<Line g={gl} pts={pts} at={K9.line} dur={50} color="#3f6283" dots />
			<Sx x={1000} y={gl.y + 120} text="line graph:" size={34} color={BLUE} anchor="end" hand at={K9.line} />
			<Sx x={1000} y={gl.y + 160} text="change over time" size={30} color={INK} anchor="end" hand at={K9.line} />
			<Chip x={1440} y={gl.y + 6} text="screening starts: more cases found" size={28} color={AMBER_INK} at={K9.screening} />
			{prog(f, K9.screening, 10) > 0.01 ? <line x1={1440} x2={1440} y1={gl.y + 60} y2={gl.y + gl.h} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, K9.screening, 12)} /> : null}
			<Axes g={gb} yTicks={[0, 40, 80]} fmt={n => `${n}`} yLabel="new cases per 100,000 per year" yLabelPulse={K9.units + 10} size={28} yLabelW={640} />
			<Bars g={gb} lsize={28} size={28} solid bars={[
				{lab: 'region A', v: 42, at: K9.bar, col: '#7f9cbd'},
				{lab: 'region B', v: 58, at: K9.bar + 6, col: '#7f9cbd'},
				{lab: 'region C', v: 35, at: K9.bar + 12, col: '#7f9cbd'},
			]} />
			<Sx x={1000} y={gb.y + 100} text="bar graph:" size={34} color={BLUE} anchor="end" hand at={K9.bar} />
			<Sx x={1000} y={gb.y + 140} text="compare groups" size={30} color={INK} anchor="end" hand at={K9.bar} />
			<Sx x={1120} y={1010} text="caption: source and year, e.g. AIHW 2025 (teaching values shown)" size={28} color={GREYT} hand at={K9.source} />
			{void lerp}{void INK_SOFT}{void GREYT}{void EDGE}
		</Svg>
	);
};
