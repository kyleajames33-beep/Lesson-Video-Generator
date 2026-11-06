// B8-10 scenes 1 to 5: more cancer deaths but a lower age-standardised rate (hook, AIHW series), three measures and three
// questions (the tank recalled, mortality added), a case, a population and a time window, then worked incidence and
// worked prevalence on the data board (task, equation, grouped givens, one stage at a time). The measures bar sits along
// the bottom from scene 2 and fills with each worked value.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, Axes, BLUE, Calendar, CARD, CalcLine, Chip, DrawPath, EDGE, FracRow, Framed, GREYT, GTag, Givens, INK, INK_SOFT, Line, MeasuresBar, ON, Pic, Squares100, Svg, Sx, T, TEAL, TankS, TaskStrip, Title,
	mw, prog, pulse, smooth, vis,
} from './parts';
import type {LG, MCol} from './parts';
import {PL} from './assets';
import {DotBlock} from '../bio-m8-g01/parts';
import {AIHW_SRC, ASR, DEATHS, K} from './common';

/** Width of a FracRow's left side and fraction, so a result can follow it. */
export const fracEnd = (x: number, lhs: string, num: string, den: string, size: number) => x + (lhs ? mw(lhs + ' =', size, false, 800) + 26 : 0) + Math.max(mw(num, size, false, 700), mw(den, size, false, 700)) + 40;
export const Box2: React.FC<{x: number; y: number; w: number; h: number; lit?: number; color?: string; title?: string; size?: number}> = ({x, y, w, h, lit, color = BLUE, title, size = 38}) => {
	const f = useCurrentFrame();
	const L = lit === undefined ? 1 : prog(f, lit, 12);
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={22} fill={CARD} stroke={L > 0.5 ? color : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
			{title ? <Sx x={x + 24} y={y + 50} text={title} size={size} color={L > 0.5 ? color : GREYT} hand weight={700} at={ON} /> : null}
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = K('hook', {more: 'More Australians', thirty: 'thirty years', yet: 'Yet after', mix: 'age mix', lower: 'is lower', both: 'Both statements', exactly: 'exactly what', measures: ['measures', 1], q: "today's question", inc: 'incidence', prev: 'prevalence', mort: 'mortality'});
const G1: LG = {x: 330, y: 230, w: 1150, h: 240, x0: 1995, x1: 2025, y0: 30000, y1: 56000};
const G2: LG = {x: 330, y: 610, w: 1150, h: 240, x0: 1995, x1: 2025, y0: 120, y1: 220};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const tk = prog(f, K1.both + 10, 12);
	return (
		<Svg>
			<Title text="What do incidence, prevalence and mortality measure?" size={54} />
			<Axes g={G1} yTicks={[30000, 40000, 50000]} yLabel="cancer deaths per year (count)" yLabelPulse={K1.measures} />
			<Line g={G1} pts={DEATHS} at={K1.more + 6} dur={80} color="#5f7f9f" dashFrom={2024} dots />
			<Axes g={G2} yTicks={[140, 180, 220]} xTicks={[1995, 2005, 2015, 2025]} fmt={n => `${n}`} yLabel="deaths per 100,000, age-standardised (2001 Australian Standard Population)" yLabelPulse={K1.measures + 24} xLabel="year" />
			<Line g={G2} pts={ASR} at={K1.yet + 10} dur={80} color={AMBER_INK} dashFrom={2024} dots />
			<Sx x={1530} y={290} text="1995: 34,216" size={38} color={INK} weight={700} at={K1.more + 30} />
			<Sx x={1530} y={345} text="2025: 53,545" size={38} color="#3f6283" weight={800} at={K1.thirty} />
			<Sx x={1530} y={660} text="1995: 208.6" size={38} color={INK} weight={700} at={K1.yet + 40} />
			<Sx x={1530} y={715} text="2025: 142.7" size={38} color={AMBER_INK} weight={800} at={K1.lower} />
			<Sx x={1540} y={500} text="both true?" size={60} color={AMBER_INK} hand at={K1.both} />
			{tk > 0.01 ? <Sx x={1540} y={560} text="different measures" size={34} color={INK} hand at={K1.exactly} /> : null}
			<GTag x={1530} y={392} text="2024, 2025 projected" size={26} at={K1.more + 60} />
			<GTag x={96} y={990} text={AIHW_SRC} size={26} />
			{[['incidence', K1.inc], ['prevalence', K1.prev], ['mortality', K1.mort]].map(([t, a], i) => <Chip key={t as string} x={1200 + i * 210} y={985} text={t as string} size={30} color={BLUE} anchor="middle" o={0.3 + 0.7 * prog(f, a as number, 10)} />)}
		</Svg>
	);
};

// ---------- 2. three measures ----------
const K2 = K('three-measures', {dengue: 'with dengue', inc: ['Incidence counts', 1], prev: 'prevalence counts', tap: 'Incidence is the', tank: 'the tank', third: 'add a third', mort: 'Mortality counts', mortuary: 'mort as in', newq: 'how many new', living: 'people living', deaths: 'how many deaths'});
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const T0 = {x: 660, y: 310, w: 360, h: 380};
	const lvl = 0.6;
	const levY = T0.y + T0.h - lvl * (T0.h - 16);
	const cols: MCol[] = [{lit: K2.inc}, {lit: K2.prev}, {lit: K2.mort}];
	return (
		<Svg>
			<Title text="Three measures, three questions" />
			<GTag x={96} y={150} text="Module 7: dengue" size={28} />
			<g opacity={0.55}>
				<Axes g={{x: 1360, y: 230, w: 420, h: 150, x0: 1995, x1: 2025, y0: 30000, y1: 56000}} yTicks={[30000, 50000]} yLabel="cancer deaths (count)" size={26} />
				<Line g={{x: 1360, y: 230, w: 420, h: 150, x0: 1995, x1: 2025, y0: 30000, y1: 56000}} pts={DEATHS} at={ON} color="#5f7f9f" dashFrom={2024} />
			</g>
			<TankS x={T0.x} y={T0.y} w={T0.w} h={T0.h} level={lvl} split={prog(f, K2.mort, 14)} drainW={0.8} size={34} />
			{pulse(f, K2.inc, 40) > 0.01 ? <circle cx={T0.x - 20} cy={T0.y - 50} r={40} fill="#f6d48c" opacity={0.5 * pulse(f, K2.inc, 40)} /> : null}
			<T x={110} y={250} w={470} text="incidence: new cases in a set time" size={40} color="#3f6283" at={K2.inc} />
			<DrawPath d={`M${T0.x + 4},${levY} L${T0.x + T0.w - 4},${levY}`} at={K2.prev} dur={14} color={TEAL} width={6} />
			<T x={110} y={470} w={470} text="prevalence: everyone with it, at one moment" size={40} color={TEAL} at={K2.prev} />
			<DrawPath d={`M560,${levY - 10} L${T0.x - 6},${levY}`} at={K2.prev} dur={10} color={TEAL} width={3} dash="8 6" />
			<T x={1330} y={600} w={490} text="mortality: deaths from the disease in a set time" size={40} color={AMBER_INK} at={K2.mort} />
			<GTag x={1330} y={760} text="mort, as in mortuary" size={30} at={K2.mortuary} />
			<Sx x={T0.x + T0.w / 2} y={810} text="Incidence is the tap, prevalence is the tank." size={48} color={BLUE} anchor="middle" hand at={K2.tap} />
			<MeasuresBar cols={cols.map((c, i) => ({...c, lit: c.lit}))} />
			{[K2.newq, K2.living, K2.deaths].map((a, i) => (pulse(f, a, 40) > 0.01 ? <rect key={i} x={96 + i * (1680 / 3 + 24)} y={914} width={1680 / 3 + 12} height={132} rx={22} fill="none" stroke={AMBER_INK} strokeWidth={6} opacity={pulse(f, a, 40)} /> : null))}
		</Svg>
	);
};

// ---------- 3. a case, a population, a time window ----------
const K3 = K('case-population-time', {three: 'three things', first: 'First', case: 'as a case', diag: 'a diagnosis', second: 'Second', pop: 'population at', could: 'could get', cervix: 'For cervical', third: 'Third', time: 'time window', year: 'usually a year', single: 'a single date', snapshot: 'a snapshot', vague: 'Leave any'});
export const SceneCase: React.FC = () => {
	const f = useCurrentFrame();
	const PW = 560, PX = (i: number) => 96 + i * (PW + 24);
	return (
		<Svg>
			<Title text="A case, a population, a time window" />
			<Box2 x={PX(0)} y={170} w={PW} h={680} lit={K3.first} title="1. case: what counts?" size={40} />
			<Box2 x={PX(1)} y={170} w={PW} h={680} lit={K3.second} title="2. population at risk: who could get it?" size={34} />
			<Box2 x={PX(2)} y={170} w={PW} h={680} lit={K3.third} title="3. time window: when?" size={40} />
			<g opacity={0.35 + 0.65 * prog(f, K3.diag, 12)}>
				<rect x={PX(0) + 40} y={270} width={PW - 80} height={330} rx={14} fill="#fbf8f1" stroke={INK_SOFT} strokeWidth={3} />
				<Sx x={PX(0) + 66} y={320} text="case definition" size={34} color={INK_SOFT} hand weight={700} at={ON} />
				<rect x={PX(0) + 66} y={360} width={40} height={40} rx={6} fill={CARD} stroke={TEAL} strokeWidth={4} />
				<DrawPath d={`M${PX(0) + 72},${382} L${PX(0) + 84},${394} L${PX(0) + 104},${366}`} at={K3.diag + 10} dur={10} color={TEAL} width={6} />
				<T x={PX(0) + 124} y={392} w={PW - 190} text="diagnosis confirmed by a doctor" size={36} color={INK} />
				<rect x={PX(0) + 66} y={490} width={40} height={40} rx={6} fill={CARD} stroke="#9a9387" strokeWidth={4} />
				<DrawPath d={`M${PX(0) + 72},${496} L${PX(0) + 100},${524} M${PX(0) + 100},${496} L${PX(0) + 72},${524}`} at={K3.diag + 24} dur={10} color="#9a9387" width={5} />
				<T x={PX(0) + 124} y={522} w={PW - 190} text="suspected, not confirmed" size={36} color={GREYT} />
			</g>
			<T x={PX(0) + 40} y={680} w={PW - 80} text="say exactly what counts before you count" size={36} color={BLUE} at={K3.diag + 30} />
			<g opacity={0.35 + 0.65 * prog(f, K3.pop, 12)}><Squares100 x={PX(1) + 60} y={250} sp={44} lit={K3.cervix} nLit={50} /></g>
			<T x={PX(1) + 40} y={720} w={PW - 80} text="people with a cervix" size={40} color={TEAL} at={K3.cervix} />
			<GTag x={PX(1) + 30} y={760} text="state the case and its matching population" size={26} at={K3.cervix + 20} />
			<T x={PX(1) + 40} y={720} w={PW - 80} text="the people who could get the disease" size={36} color={INK} at={K3.could} out={K3.cervix} />
			<g opacity={0.35 + 0.65 * prog(f, K3.time, 12)}><Calendar x={PX(2) + 40} y={300} w={PW - 80} year={K3.year} day={K3.single} /></g>
			<T x={PX(2) + 40} y={500} w={PW - 80} text="incidence, mortality: usually a year" size={36} color="#3f6283" at={K3.year} />
			<T x={PX(2) + 40} y={620} w={PW - 80} text="prevalence: one date (a snapshot)" size={36} color={TEAL} at={K3.single} />
			<T x={96} y={895} w={1728} text="Leave any of these vague, and rates that look alike may not be comparable." size={38} color={AMBER_INK} at={K3.vague} />
			<MeasuresBar y={930} h={110} cols={[{lit: K3.year}, {lit: K3.single}, {lit: K3.year}]} size={34} />
		</Svg>
	);
};

// ---------- the data board frame ----------
export const BoardLeft: React.FC<{top?: number; children?: React.ReactNode}> = ({top = 300, children}) => (
	<g>
		<rect x={96} y={top} width={580} height={900 - top} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
		<Pic p={PL.pancreas} cx={386} cy={top + 90} w={330} />
		<GTag x={116} y={top + 170} text="b08: how type 2 diabetes develops" size={26} />
		{children}
	</g>
);

// ---------- 4. worked incidence ----------
const K4 = K('worked-incidence', {work: "Let's work", eighty: 'eighty thousand', in2025: 'In 2025', newly: 'newly diagnosed', top: 'new cases go', under: 'goes underneath', multiply: 'then we multiply', div: 'divided by', zero: 'zero point', times: 'Times a', ans: 'two hundred per', sense: 'Sense check', fits: 'which fits'});
export const SceneIncidence: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 720, sz = 48;
	const end = fracEnd(sx, '', '160', '80,000', sz);
	return (
		<Svg>
			<Title text="Worked: incidence" />
			<TaskStrip text="Type 2 diabetes in one city, 2025: how many new cases per 100,000 people per year?" at={K4.work} />
			<BoardLeft>
				<Givens x={124} y={560} w={540} size={36} lh={96} items={[
					{t: 'population: 80,000 people', at: K4.eighty, pulse: [K4.div + 10]},
					{t: 'new diagnoses in 2025: 160 people', at: K4.newly, pulse: [K4.div]},
					{t: 'time window: 1 year', at: K4.in2025},
				]} />
				<GTag x={116} y={836} text="teaching data" size={26} />
			</BoardLeft>
			<GTag x={1824} y={300} text="same recipe as dengue" size={28} anchor="end" at={K4.top} />
			<FracRow x={sx} yc={400} lhs="incidence" num="new cases" den="population" tail="× 100,000" size={sz} at={K4.top} />
			<FracRow x={sx} yc={590} lhs="" num="160" den="80,000" tail="" size={sz} at={K4.div} />
			<Sx x={end + 22} y={590 + sz * 0.35} text="= 0.002" size={sz * 1.05} color={TEAL} weight={800} at={K4.zero} />
			<CalcLine x={sx} y={760} sub="0.002 × 100,000" res="= 200" at={K4.times} resAt={K4.ans} size={46} />
			<Framed x={sx} y={872} text="200 per 100,000 per year" at={K4.ans + 20} size={46} />
			<DotBlock x={1400} y={560} cols={40} rows={25} sp={10.5} n={2} tint={K4.sense} seed={5} pulseAt={K4.sense} label="check: 2 in every 1,000 people" labelAt={K4.sense} o={0.45 + 0.55 * prog(f, K4.sense, 12)} />
			<Sx x={1610} y={880} text="1,000 people" size={30} color={GREYT} anchor="middle" hand at={ON} />
			<MeasuresBar y={930} h={110} size={34} cols={[{lit: K4.ans, val: '200 per 100,000 per year', valAt: K4.ans + 24}, {}, {}]} />
		</Svg>
	);
};

// ---------- 5. worked prevalence ----------
const K5 = K('worked-prevalence', {now: 'Now prevalence', june: 'thirtieth of', four: ['four thousand', 1], living: 'were living', existing: 'existing cases', day: 'counted on', noyr: 'no "per', over: 'over eighty', point: 'zero point', pct: 'As a percentage', five: 'five point', per: ['Per hundred', 1], fifty: 'five thousand five', use: 'Use whichever', mix: "don't mix"});
export const ScenePrevalence: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 720, sz = 48;
	const end = fracEnd(sx, '', '4,400', '80,000', sz);
	const br = vis(f, K5.fifty + 20, undefined, 12);
	return (
		<Svg>
			<Title text="Worked: prevalence, two ways" />
			<TaskStrip text="On 30 June 2025: what share of the city lives with type 2 diabetes?" at={ON} />
			<BoardLeft top={260}>
				<Givens x={124} y={490} w={540} size={36} lh={92} items={[
					{t: 'living with type 2 diabetes on 30 June 2025: 4,400 people', at: K5.living, pulse: [K5.over]},
					{t: 'population: 80,000 people', at: ON, pulse: [K5.over + 10]},
					{t: 'time window: 1 date', at: K5.june, pulse: [K5.day]},
				]} />
				<Sx x={124} y={860} text="snapshot: no 'per year'" size={34} color={TEAL} hand at={K5.day} />
			</BoardLeft>
			<FracRow x={sx} yc={380} lhs="prevalence" num="existing cases" den="population" tail="" size={sz} at={K5.existing} />
			<FracRow x={sx} yc={560} lhs="" num="4,400" den="80,000" tail="" size={sz} at={K5.over} />
			<Sx x={end + 22} y={560 + sz * 0.35} text="= 0.055" size={sz * 1.05} color={TEAL} weight={800} at={K5.point} />
			<CalcLine x={sx} y={740} sub="0.055 × 100" res="= 5.5%" at={K5.pct} resAt={K5.five} size={46} />
			<CalcLine x={1270} y={740} sub="0.055 × 100,000" res="= 5,500 per 100,000" at={K5.per} resAt={K5.fifty} size={42} />
			{br > 0.01 ? <g opacity={br}><path d="M720,770 L720,792 L1800,792 L1800,770" fill="none" stroke={AMBER_INK} strokeWidth={4} /><Sx x={1260} y={840} text="same value, two denominators" size={38} color={AMBER_INK} anchor="middle" hand at={ON} /></g> : null}
			<Sx x={1260} y={890} text="use the form the question asks for; don't mix them" size={34} color={INK} anchor="middle" hand at={K5.use} />
			<g opacity={0.4 + 0.6 * prog(f, K5.pct, 12)}>
				<Sx x={1400} y={460} text="100 people" size={30} color={GREYT} hand at={ON} />
				{Array.from({length: 100}, (_, i) => {
					const x = 1400 + (i % 10) * 34, y = 480 + Math.floor(i / 10) * 18;
					const lit = i < 5 ? 1 : i === 5 ? 0.5 : 0;
					return <g key={i}><rect x={x} y={y} width={28} height={14} rx={3} fill={CARD} stroke="#b5ab9b" strokeWidth={1.5} />{lit > 0 && prog(f, K5.five, 12) > 0.5 ? <rect x={x} y={y} width={28 * lit} height={14} rx={3} fill={TEAL} /> : null}</g>;
				})}
				<Sx x={1570} y={680} text="5.5 in every 100" size={34} color={TEAL} anchor="middle" hand at={K5.five} />
			</g>
			<MeasuresBar y={930} h={110} size={34} cols={[{lit: ON, val: '200 per 100,000 per year', valAt: ON}, {lit: K5.now, val: '5.5% = 5,500 per 100,000', valAt: K5.fifty + 20}, {}]} />
			{void smooth}{void INK_SOFT}
		</Svg>
	);
};
