// MathStudioKitDemo3, scenes 1 to 18: kit pass 2B probability, distribution and normal parts (s01 to s12) on the
// designs' own numbers with reused plates or coded stand-ins. Not a lesson. One 240-frame scene per group;
// stills at local frame 200.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	BagFill, BandSlider, CalendarFlip, CdfSubtraction, CdfTracer, ChipScatter, ClassHistogram, DeviationArms, DistributionTable, FillDial, FormulaCrosswalk,
	HandTag, HeatsToHistogram, PlateImg, LiveReadoutBoard, MATHS_KIT2B_ANCHORS, MATHS_KIT2B_PLATES, NormalCurve, OutcomeDrop, OutcomeGrid, OutcomeSort, PegBoard,
	ProbabilityBars, QuantileReader, RollSimulator, RunningMeanTrace, SceneHeading, ScoreCompare, ShrinkingWindow, SigmaRuler, SlidingWindow, SpinnerSectors,
	SpreadBrackets, StackedTotalBar, StripRiseRatio, StudioBalanceBeam, TailLadder, TrackerFill, ArrivalDots, YearStrip, ZSlider, ZTable,
	fmtNum, kf, monthsWithDay, paceCount, pegBoardRun, scatterInDisc, seededNormals, seededRandom, shuffledOutcomes, yearDates,
} from '../../math/studio';
import type {StudioPace} from '../../math/studio';
import {prog} from '../../kit';

const P = MATHS_KIT2B_PLATES, A = MATHS_KIT2B_ANCHORS;
const FACES = [28, 35, 31, 38, 34, 34];

// 1. RollSimulator: the s01 die, 200 rolls ending exactly on the site counts.
const ROLLS = shuffledOutcomes(FACES, 11);
const ROLL_PACE: StudioPace = {at: 10, slow: 4, every: 14, until: 180};
const S01: React.FC = () => (
	<>
		<SceneHeading text="RollSimulator: 200 rolls drop into the face bars" />
		<RollSimulator sequence={ROLLS} pace={ROLL_PACE} die={{x: 110, y: 200, w: 260, plate: P.die}}
			bars={{x: 600, y: 160, width: 1260, height: 640, max: 45, yTicks: [10, 20, 30, 40].map(v => ({value: v, label: String(v)})), xLabel: 'face', yLabel: 'count', highlight: {index: 3, at: 120}, refLine: {value: 200 / 6, label: 'fair: 33.3', at: 150}}}
			readout={{x: 96, y: 560, width: 440, rows: s => [
				{label: 'rolls', value: s.shown, digits: 0},
				{label: 'fours', value: s.tally[3], digits: 0, role: 'k'},
				{label: 'relative frequency of 4', value: s.relative[3], digits: 3, role: 'a'},
			]}} />
		<HandTag x={620} y={900} text="each roll: exactly one face" role="a" at={60} size={42} />
	</>
);

// 2. DistributionTable, ProbabilityBars (model, teal) and the StackedTotalBar tipping over to 200, then 1.
const S02: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Table, model bars, and bars tipping into one total" />
			<DistributionTable x={96} y={170} values={['0', '1', '2', '3']} probs={['0.1', '0.3', '0.4', '0.2']} headers={['visits x', 'P(X = x)']} highlight={{index: 2, at: 60}} revealAt={[10, 20, 30, 40]} />
			<ProbabilityBars x={70} y={380} width={860} height={540} labels={['0', '1', '2', '3']} values={[0.1, 0.3, 0.4, 0.2]} max={0.5} yTicks={[0.1, 0.2, 0.3, 0.4].map(v => ({value: v, label: fmtNum(v, 1)}))} xLabel="number of vet visits" valueText={v => fmtNum(v, 1)} grow={{at: 10, stagger: 8}} refLine={{value: 0.25, label: 'equal: 0.25', at: 100}} />
			<StackedTotalBar x={1000} y={300} width={640} thickness={84} parts={FACES.map((c, i) => ({value: c, label: String(c), role: i === 3 ? 'k' : 'a'}))} total={200}
				from={{x: 1000, baseY: 860, slot: 130, barW: 84, max: 40, height: 420}} tip={prog(f, 40, 120)} totalLabel={{text: '= 200', at: 165}} relabel={{text: '= 1', at: 190}} />
			<HandTag x={1010} y={240} text="the bars lie end to end" role="a" at={170} size={40} />
		</>
	);
};

// 3. OutcomeDrop, OutcomeSort (3 coins into 0 to 3 heads, then bars) and SpinnerSectors growing with k.
const DROPS = (() => {const r = seededRandom(5); return Array.from({length: 24}, () => Math.floor(r() * 4));})();
const SEQS = ['HHH', 'HHT', 'HTH', 'THH', 'HTT', 'THT', 'TTH', 'TTT'].map(s => ({label: s, value: s.split('').filter(c => c === 'H').length}));
const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = kf(f, [[20, 0.02], [170, 0.1]]);
	return (
		<>
			<SceneHeading text="Outcome drop, outcome sort, and spinner sectors" />
			<OutcomeDrop columns={[1, 2, 3, 4].map((v, i) => ({x: 180 + i * 120, label: String(v)}))} baseY={820} items={DROPS} pace={{at: 10, slow: 3, every: 16, until: 170}} from={[360, 220]} token={34} />
			<OutcomeSort x={720} y={190} items={SEQS} gridCols={4} columns={[0, 1, 2, 3].map((v, i) => ({value: v, x: 800 + i * 170}))} baseY={820} sortAt={40} stagger={6} toBars={{at: 150, barW: 120}} />
			<SpinnerSectors cx={1660} cy={430} r={180} sectors={[1, 2, 3, 4].map((w, i) => ({weight: w, label: ['k', '2k', '3k', '4k'][i]}))} scale={k} pointer={40} />
			<LiveReadoutBoard x={1450} y={680} width={420} inline rows={[{label: 'k', value: k, digits: 3, role: 'gradient'}, {label: 'total 10k', value: 10 * k, digits: 2, role: 'k'}]} />
			<HandTag x={900} y={900} text="number of heads" role="a" at={120} size={40} />
		</>
	);
};

// 4. CalendarFlip (coded pad stand-in for ma12 calendar) feeding the date bars.
const DATES = yearDates();
const CAL_PACE: StudioPace = {at: 10, slow: 3, every: 20, until: 165};
const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = paceCount(DATES.length, f, CAL_PACE);
	const counts = new Array(31).fill(0);
	for (let i = 0; i < k; i++) counts[DATES[i].day - 1]++;
	return (
		<>
			<SceneHeading text="CalendarFlip: torn pages fill the date bars" />
			<CalendarFlip x={110} y={190} w={360} h={420} pages={DATES} pace={CAL_PACE} />
			<ProbabilityBars x={560} y={170} width={1300} height={660} labels={counts.map((_, i) => (i === 0 || ((i + 1) % 5 === 0 && i < 29) || i === 30 ? String(i + 1) : ''))} values={counts} max={14} yTicks={[4, 8, 12].map(v => ({value: v, label: String(v)}))} xLabel="date" yLabel="pages" barFraction={0.72} highlight={{index: 30, at: 120}} />
			<LiveReadoutBoard x={96} y={650} width={420} inline rows={[
				{label: 'pages torn', value: k, digits: 0},
				{label: 'month', value: 0, text: k ? DATES[k - 1].top.slice(0, 3) : 'Jan'},
				{label: 'the 31st', value: counts[30], digits: 0, role: 'k'},
			]} />
		</>
	);
};

// 5. YearStrip (the 31st sits in 7 months) and OutcomeGrid (two dice) sliding into bars.
const S05: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Year strip, and the two-dice grid sliding into bars" />
			<YearStrip x={96} y={190} cell={36} lit={Math.round(kf(f, [[10, 0], [150, 365]], false))} highlightDay={{day: 31, at: 120}} />
			<HandTag x={140} y={730} text={`31st: only ${monthsWithDay(31)} months`} role="k" at={130} size={44} />
			<HandTag x={140} y={800} text={`29th: ${monthsWithDay(29)} months`} role="b" at={150} size={40} />
			<OutcomeGrid x={1390} y={190} cell={72} value={(r, c) => r + c + 2} rowLabels={['1', '2', '3', '4', '5', '6']} colLabels={['1', '2', '3', '4', '5', '6']} light={{value: 7, at: 40}} slide={{at: 120, x: 1320, baseY: 880, slot: 50, size: 36}} />
		</>
	);
};

// 6. StudioBalanceBeam with a sliding fulcrum, and the RunningMeanTrace over 2,000 cats.
const VISITS = (() => {const r = seededRandom(23), ps = [0.1, 0.3, 0.4, 0.2]; return Array.from({length: 2000}, () => {let u = r(), i = 0; while (i < 3 && u >= ps[i]) {u -= ps[i]; i++;} return i;});})();
const S06: React.FC = () => {
	const f = useCurrentFrame();
	const piv = kf(f, [[20, 0.6], [160, 1.7]]);
	const shown = paceCount(VISITS.length, f, {at: 10, slow: 4, every: 10, until: 190});
	return (
		<>
			<SceneHeading text="Balance beam with a sliding fulcrum, and a running mean" />
			<StudioBalanceBeam x={140} y={560} width={860} range={[-0.5, 3.5]} weights={[0.1, 0.3, 0.4, 0.2].map((w, i) => ({x: i, w, label: fmtNum(w, 1)}))} pivot={piv} barScale={700}
				pivotLabel={v => `μ = ${fmtNum(v, 2)}`} ticks={[0, 1, 2, 3].map(v => ({value: v, label: String(v)}))}
				slider={{x: 140, y: 790, width: 520, symbol: 'μ', role: 'gradient', value: piv, min: 0, max: 3, ticks: [0, 1, 2, 3].map(v => ({value: v, label: String(v)}))}} />
			<RunningMeanTrace x={1060} y={160} width={820} height={480} values={VISITS} shown={shown} target={1.7} yRange={[0, 3]} yTicks={[1, 2, 3]} targetLabel="μ = 1.7" xLabel="cats so far" yLabel="average visits"
				readout={{x: 1180, y: 690, width: 480}} />
		</>
	);
};

// 7. DeviationArms shrinking and stacking into two equal stacks, and SpreadBrackets.
const S07: React.FC = () => (
	<>
		<SceneHeading text="Deviation arms cancel; spread brackets in visits" />
		<PlateImg plate={P.cat} x={1500} y={150} w={330} />
		<LiveReadoutBoard x={1220} y={790} width={620} inline rows={[{label: 'E(X) = Σ x P(x)', value: 1.7, digits: 1, role: 'gradient'}, {label: 'Σ (x − μ) P(x)', value: 0, digits: 2, role: 'k'}]} />
		<DeviationArms x={120} y={720} width={1000} range={[-0.5, 3.5]} mu={1.7} items={[0, 1, 2, 3].map((v, i) => ({x: v, p: [0.1, 0.3, 0.4, 0.2][i]}))} ticks={[0, 1, 2, 3].map(v => ({value: v, label: String(v)}))} weightAt={225} stackAt={400} rowGap={95} />
		<SpreadBrackets y={700} x={1180} width={700} gap={66} range={[-1, 4.5]} mu={1.7} sigma={0.9} ks={[1, 2]} line ticks={[0, 1, 2, 3, 4].map(v => ({value: v, label: String(v)}))} at={30} />
		<HandTag x={1190} y={500} text="σ ≈ 0.9 visits" role="gradient" at={90} size={44} />
		<HandTag x={140} y={900} text="each arm runs from μ to a value" role="gradient" at={140} size={42} />
	</>
);

// 8. HeatsToHistogram (25 heats of 8 reaction times) and a density-scaled ClassHistogram with a model line.
const RT_EDGES = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6], RT_COUNTS = [20, 50, 70, 40, 20];
const RT = (() => {const r = seededRandom(41), v: number[] = []; RT_COUNTS.forEach((c, j) => {for (let i = 0; i < c; i++) v.push(RT_EDGES[j] + 0.1 * (0.02 + 0.96 * r()));}); for (let i = v.length - 1; i > 0; i--) {const j = Math.floor(r() * (i + 1)); [v[i], v[j]] = [v[j], v[i]];} return v;})();
const S08: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Heats drop into the histogram; density scale" />
			<HeatsToHistogram x={60} y={190} width={1140} height={700} edges={RT_EDGES} values={RT} perHeat={8} every={6} startAt={10} hold={10} fall={14} yMax={80} yTicks={[20, 40, 60, 80]} xLabel="reaction time (s)" yLabel="times"
				readout={{x: 1260, y: 170, width: 420, countLabel: 'times recorded'}} />
			<ClassHistogram x={1240} y={460} width={640} height={440} edges={RT_EDGES} counts={RT_COUNTS} grow={prog(f, 20, 60)} density yMax={4} yTicks={[1, 2, 3, 4]} xTicks={[0.1, 0.3, 0.5]} xLabel="s" yLabel="density" countLabels={false} model={{value: 2, label: 'flat: 2', at: 120}} />
		</>
	);
};

// 9. ShrinkingWindow and SlidingWindow on the hump 3x(2 − x)/4.
const HUMP = (x: number) => (x >= 0 && x <= 2 ? (3 * x * (2 - x)) / 4 : 0);
const S09: React.FC = () => {
	const f = useCurrentFrame();
	const w = Math.exp(kf(f, [[20, Math.log(0.4)], [90, Math.log(0.1)], [140, Math.log(0.01)], [190, Math.log(0.001)]]));
	return (
		<>
			<SceneHeading text="A shrinking window, and a sliding window" />
			<ShrinkingWindow x={40} y={170} width={900} height={560} window={{x: [0, 2.2], y: [0, 0.9]}} f={HUMP} center={1.2} w={w} xTicks={[0.5, 1, 1.5, 2]} yTicks={[0.25, 0.5, 0.75]} readout={{x: 110, y: 760, width: 440}} />
			<SlidingWindow x={980} y={170} width={900} height={560} window={{x: [0, 2.2], y: [0, 0.9]}} f={HUMP} ghost={x => (x >= 0 && x <= 2 ? 0.5 : 0)} center={kf(f, [[20, 0.2], [200, 1.8]])} w={0.2} xTicks={[0.5, 1, 1.5, 2]} yTicks={[0.25, 0.5, 0.75]} readout={{x: 1050, y: 760, width: 440}} />
			<HandTag x={600} y={830} text="width 0, probability 0" role="k" at={170} size={40} />
		</>
	);
};

// 10. CdfTracer on the reaction-time histogram, and CdfSubtraction on x²/9.
const F9 = (x: number) => (x <= 0 ? 0 : x >= 3 ? 1 : (x * x) / 9);
const S10: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="CDF tracer on the histogram; F(b) − F(a)" />
			<CdfTracer x={40} y={180} width={1060} heightTop={360} heightBottom={350} windowX={[0.1, 0.6]} yBottom={[0, 4]} density={() => 0} bars={{edges: RT_EDGES, counts: RT_COUNTS}} marker={kf(f, [[10, 0.1], [170, 0.42]])}
				xTicks={RT_EDGES} yBottomTicks={[1, 2, 3]} xLabel="reaction time (s)" readout={{x: 1160, y: 160, width: 440, xLabel: 'time x (s)'}} />
			<CdfSubtraction x={1130} y={410} width={760} height={520} window={{x: [-0.5, 3.5], y: [0, 1.1]}} F={F9} a={1} b={2} bracketAt={60} xTicks={[1, 2, 3]} yTicks={[0.5, 1]} label={d => `F(2) − F(1) = ${fmtNum(d, 3)}`} />
		</>
	);
};

// 11. StripRiseRatio, TrackerFill and ArrivalDots in wait mode.
const ARRIVALS = (() => {const r = seededRandom(707); return Array.from({length: 30}, () => 30 * r());})();
const S11: React.FC = () => {
	const f = useCurrentFrame();
	const h = Math.exp(kf(f, [[20, 0], [160, Math.log(0.05)]]));
	const x = kf(f, [[20, 0], [180, 2.4]]);
	return (
		<>
			<SceneHeading text="Strip rise ratio, tracker bar, arrivals and waits" />
			<StripRiseRatio x={40} y={150} width={1000} height={520} window={{x: [-0.3, 3.3], y: [0, 1.1]}} F={F9} strips={[{x0: 0.5, h: 1}, {x0: 1.5, h}]} readIndex={1} tangent={{slope: 1 / 3, at: 150}} xTicks={[1, 2, 3]} yTicks={[0.5, 1]} readout={{x: 1100, y: 160, width: 420}} />
			<TrackerFill x={1100} y={500} width={500} value={F9(x)} ticks={[{value: 0, label: '9 am'}, {value: 1, label: '12'}]} />
			<ArrivalDots x={120} y={790} width={1680} range={[0, 30]} times={ARRIVALS} pace={{at: 10, slow: 3, every: 18, until: 170}} ticks={[0, 10, 20, 30].map(v => ({value: v, label: `${v} min`}))} wait={{period: 10, text: w => `wait ${fmtNum(w, 1)} min`}} label="time (min)" />
		</>
	);
};

// 12. ChipScatter on a coded cookie stand-in, and the QuantileReader on F = x²/16 with f = x/8.
const CHIPS = scatterInDisc(5, 60);
const S12: React.FC = () => {
	const f = useCurrentFrame();
	const r = kf(f, [[20, 0.3], [180, Math.SQRT1_2]]);
	return (
		<>
			<SceneHeading text="Chip scatter with a growing circle; quantile reader" />
			<ChipScatter cx={410} cy={540} R={320} points={CHIPS} pace={{at: 10, slow: 4, every: 12, until: 150}} circle={{r, label: `${fmtNum(4 * r, 2)} cm`}} readout={{x: 790, y: 170, width: 380}} />
			<QuantileReader x={1200} y={150} width={690} heightTop={380} heightBottom={330} windowX={[0, 4]} F={x => Math.min(1, (x * x) / 16)} f={x => (x >= 0 && x <= 4 ? x / 8 : 0)} yBottom={[0, 0.6]} p={0.5} reach={prog(f, 20, 140)}
				xTicks={[1, 2, 3, 4]} yBottomTicks={[0.25, 0.5]} xLabel="distance (cm)" qLabel={q => `m = ${fmtNum(q, 2)}`} />
		</>
	);
};

// 13. NormalCurve: μ and σ sliders, then the morph onto N(0, 1); TailLadder beside it.
const S13: React.FC = () => {
	const f = useCurrentFrame();
	const mu = kf(f, [[10, 175], [40, 180], [70, 175]]), sigma = kf(f, [[70, 4], [100, 6], [125, 4]]), u = prog(f, 125, 60);
	return (
		<>
			<SceneHeading text="Normal curve: slide μ, widen σ, then standardise" />
			<NormalCurve x={40} y={160} width={1160} height={600} window={{x: [155, 195], y: [0, 0.11]}} windowTo={{x: [-5, 5], y: [0, 0.45]}} mu={mu} sigma={sigma} morph={u}
				xTicks={s => (s.morph < 0.05 ? [160, 170, 180, 190] : s.morph > 0.95 ? [-4, -3, -2, -1, 1, 2, 3, 4] : [])} shade={[{to: 170, label: a => fmtNum(a, 4)}]} marks={{ks: [1, 2]}} muMark={{}} xLabel="mass (g)"
				readout={{x: 1250, y: 160, width: 440, rows: s => [{label: 'μ', value: s.mu, digits: 1, role: 'gradient'}, {label: 'σ', value: s.sigma, digits: 1, role: 'gradient'}, {label: 'area left of 170', value: s.area(-Infinity, 170), digits: 4, role: 'k'}]}} />
			<TailLadder x={1250} y={560} w={640} mu={175} sigma={4} rows={[{to: 170, label: 'under 170 g', at: 20}, {from: 170, to: 180, label: '170 to 180 g', at: 40}, {from: 180, label: 'over 180 g', at: 60}]} rowH={110} />
		</>
	);
};

// 14. BandSlider inside a calculator screen, and the ZSlider with the snapper riding the marker.
const S14: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Band slider on a calculator screen; z slider" />
			<BandSlider x={130} y={210} width={780} height={460} mu={150} sigma={15} k={kf(f, [[20, 0], [80, 1], [130, 2], [180, 1]])} window={{x: [100, 200], y: [0, 0.03]}} xTicks={[105, 120, 135, 150, 165, 180, 195]} xLabel="apple mass (g)" screen readout={{x: 130, y: 740, width: 480}} />
			<ZSlider x={1000} y={240} width={880} height={500} z={kf(f, [[20, 0], [160, 1.25]])} sprite={{plate: P.snapper, w: 170}} readout={{x: 1100, y: 770, width: 460}} />
		</>
	);
};

// 15. SigmaRuler from 490 to 508.64 and the ZTable reverse scan for 0.99.
const S15: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Sigma ruler, and the z table read backwards" />
			<SigmaRuler x={150} y={320} width={1620} range={[480, 515]} from={490} to={508.64} sigma={8} progress={prog(f, 20, 140)} ticks={[480, 485, 490, 495, 500, 505, 510, 515].map(v => ({value: v, label: String(v)}))} />
			<ZTable x={150} y={460} rowStart={2.0} rows={6} cellW={140} cellH={54} scan={{target: 0.99, at: 40, dur: 140}} />
			</>
	);
};

// 16. ScoreCompare (snapper against golden perch) and the FormulaCrosswalk.
const S16: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Two catches onto one z axis; discrete to continuous" />
			<ScoreCompare x={110} y={330} width={900} items={[
				{label: 'snapper N(40, 4²)', mu: 40, sigma: 4, value: 45, role: 'k', unit: ' cm', plate: {plate: P.snapper, w: 200}},
				{label: 'golden perch N(36, 2.5²)', mu: 36, sigma: 2.5, value: 40, role: 'b', unit: ' cm', plate: {plate: P.goldenPerch, w: 200}},
			]} toZ={prog(f, 110, 50)} />
			<HandTag x={1110} y={720} text="smaller gap, but further out" role="b" at={120} size={42} />
			<HandTag x={1110} y={800} text="z = (x − μ) ÷ σ" role="gradient" at={60} size={42} />
			<FormulaCrosswalk x={1090} y={190} w={790} size={36} rows={[
				{left: 'P(X = x)', right: 'f(x) dx', at: 20},
				{left: 'Σ P(x) = 1', right: '∫ f(x) dx = 1', at: 50},
				{left: 'Σ x P(x)', right: '∫ x f(x) dx', at: 80, glow: [100, 160]},
				{left: 'Σ x² P(x) − μ²', right: '∫ x² f(x) dx − μ²', at: 110},
			]} />
		</>
	);
};

// 17. BagFill (coded bag stand-in on the platform scale) feeding a histogram, and the PegBoard.
const BAGS = [178.1, 181.9, 175.5, 175.6, 174.6, 172.9, 176.8, 177.2];
const BAG_START = 10, BAG_EVERY = 26, BAG_FILL = 20;
const PEGS = pegBoardRun(3, 12, 400);
const S17: React.FC = () => {
	return (
		<>
			<SceneHeading text="Bags fill chip by chip; a peg board builds a bell" />
			<BagFill masses={BAGS} chipsPerBag={90} startAt={BAG_START} every={BAG_EVERY} fillFrames={BAG_FILL} bag={{x: 170, y: 560, w: 250}} mouth={[295, 590]}
				scale={{x: 96, y: 170, width: 380, plate: {plate: P.platformScales, x: 90, y: 880, w: 410}}} />
			<ClassHistogram x={520} y={170} width={760} height={460} edges={[170, 172, 174, 176, 178, 180, 182, 184]} drop={{values: BAGS, arriveAt: i => BAG_START + i * BAG_EVERY + BAG_FILL, hold: 2, fall: 14, stripY: 600}} yMax={4} yTicks={[1, 2, 3, 4]} xTicks={[170, 174, 178, 182]} xLabel="bag mass (g)" yLabel="bags" />
			<PegBoard x={1320} y={170} width={560} height={720} rows={12} run={PEGS} pace={{at: 5, slow: 3, every: 12, until: 180}} fall={40} tracePath={{index: 0, at: 60}} binScale={2.6} readout={{x: 560, y: 690, width: 620, bin: 6}} />
		</>
	);
};

// 18. FillDial with the reused PET bottle, and the fills' NormalCurve with the 490 tail.
const ZS = seededNormals(12, 200);
const S18: React.FC = () => {
	const f = useCurrentFrame();
	const mu = kf(f, [[20, 500], [160, 508.64]]);
	return (
		<>
			<SceneHeading text="Fill dial: turn μ and watch the short bottles" />
			<FillDial x={80} y={560} width={1220} mu={mu} sigma={8} limit={490} zs={ZS} shown={kf(f, [[0, 0], [230, 16]], false)} levelRange={[440, 540]} bottle={{plate: P.petBottle, interior: A.petBottleInterior}} bottleW={110} spacing={170}
				dial={{cx: 230, cy: 300, r: 110, range: [495, 515]}} readout={{x: 1380, y: 520, width: 480}} />
			<NormalCurve x={540} y={130} width={1340} height={310} window={{x: [460, 540], y: [0, 0.055]}} mu={mu} sigma={8} xTicks={[470, 490, 510, 530]} shade={[{to: 490}]} xLabel="fill (mL)" />
		</>
	);
};

export const SCENES_A: Record<string, React.FC> = {
	'roll-sim': S01, 'table-tip': S02, 'drop-sort-spin': S03, 'calendar-flip': S04, 'year-grid': S05, 'beam-mean': S06, 'arms-brackets': S07, heats: S08, windows: S09,
	'cdf-tracer': S10, 'strips-arrivals': S11, 'chips-quantile': S12, 'normal-morph': S13, 'band-z': S14, 'ruler-table': S15, 'compare-crosswalk': S16, 'bag-peg': S17, 'fill-dial': S18,
};
export const PLATES_A = [P.cat, P.die, P.snapper, P.goldenPerch, P.petBottle, P.platformScales];
