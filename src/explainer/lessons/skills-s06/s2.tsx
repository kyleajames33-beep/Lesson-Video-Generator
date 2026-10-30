// S06 scenes 4 to 6b: part (a) the scale (the strip keeps the table and demand (a); axes from the table rows, even
// ticks, the year gaps +2 +2 +3 +3, the scale trap, the range bracket); part (a) plot and best fit (units, title,
// crosses as the cells underline, the line of best fit, the crossed dot-to-dot zigzag, the TAILS rail and the band
// ladder); part (b) the trend (the trend card, the amber direction arrow, end points, the rise-over-run triangle, the
// crossed "it went up", the explain line); points or per cent (two bars, the two calculations, the rewritten chip).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, CrossedHabit, DrawPath, GREEN, GREY_INK, GreyTag, INK, Overlay, PenArrow, QuestionCard, T, TEAL, phraseAt, prog, smooth, vis,
} from './kit';
import type {ARow, Ann} from './kit';
import {BandLadder} from '../skills-s04/pieces';
import {ABOX, ANS, MAIN, PCT, PTS, STRIP_S, SX, SW, YEARS, fit, gxM, gyM, sc, stripSpec} from './common';
import {AxesInk, AxisLabel, GridPaper, PathLine, ScaleTrap, TailsRail, Ticks, TrendMove, VIOLET, XMark} from './pieces';

const H = MAIN.ny * MAIN.s;
const XT = Array.from({length: 11}, (_, i) => ({pos: gxM(2010 + i), label: `${2010 + i}`}));
const YT = Array.from({length: 16}, (_, i) => ({pos: gyM(i * 2), label: i % 2 === 0 ? `${i * 2}` : ''}));
const TITLE = 'Percentage of E. coli samples resistant to antibiotic K, 2010 to 2020';
/** The main graph as built so far; each part's frame (-100 = already there, undefined = not yet). */
export const MainGraph: React.FC<{axes?: number; ticks?: number; xl?: number; yl?: number; unit?: number | null; title?: number | null; pts?: number; line?: number; dim?: number; o?: number; litLabels?: number}> = ({axes = -100, ticks = -100, xl = -100, yl = -100, unit = -100, title = -100, pts, line, dim = 0, o = 1, litLabels = 0}) => {
	const f = useCurrentFrame();
	const d = 1 - 0.55 * dim;
	const showUnit = unit !== null && f >= unit;
	return (
		<g opacity={o * d}>
			<GridPaper g={MAIN} at={-100} />
			{axes !== undefined ? <AxesInk g={MAIN} at={axes} /> : null}
			{ticks !== undefined ? <Ticks g={MAIN} axis="x" ticks={XT} at={ticks} size={17} stagger={1} /> : null}
			{ticks !== undefined ? <Ticks g={MAIN} axis="y" ticks={YT} at={ticks + 6} size={17} stagger={1} /> : null}
			{xl !== undefined ? <AxisLabel g={MAIN} axis="x" text="Year" at={xl} color={litLabels > 0.5 ? VIOLET : INK} size={24} off={58} /> : null}
			{yl !== undefined ? <AxisLabel g={MAIN} axis="y" text={showUnit ? 'Samples resistant (%)' : 'Samples resistant'} at={yl} color={litLabels > 0.5 ? AMBER_INK : INK} size={24} off={56} /> : null}
			{showUnit && unit !== null && unit > -50 ? <g transform={`translate(${MAIN.x - 46},${MAIN.y + H / 2}) rotate(-90)`}><DrawPath d="M58,6 L104,6" at={unit} dur={8} color={AMBER} width={4} /></g> : null}
			{title !== null ? <T x={MAIN.x + MAIN.nx * MAIN.s / 2} y={MAIN.y - 12} text={TITLE} size={19} weight={700} color={INK} anchor="middle" o={prog(f, title, 10)} /> : null}
			{pts !== undefined ? PTS.map((p, i) => <XMark key={i} x={p[0]} y={p[1]} at={pts + i * 8} />) : null}
			{line !== undefined ? <PathLine pts={[[gxM(2010), gyM(fit(2010))], [gxM(2020), gyM(fit(2020))]]} at={line} dur={24} color={INK} width={3.5} /> : null}
		</g>
	);
};
const strip = (part: number, ann: Ann[] = []) => <QuestionCard spec={stripSpec(part)} at={-100} s={STRIP_S} ann={ann} />;

// ---------- 4. Part (a): the scale ----------
const K4 = cues(sc('part-a-scale'), {parta: 'Part a', indep: 'independent variable', bottom: 'bottom', pct: 'percentage up', even: 'even steps', every: 'every gridline', trap: "Here's the trap", jump: 'years jump', two: 'by two', three: 'by three', bend: 'bend the trend', real: 'real value', fills: 'fills most', precise: 'precisely'});
export const ScenePartAScale: React.FC = () => {
	const f = useCurrentFrame();
	const sp = stripSpec(0);
	const yrs = ['2010', '2012', '2014', '2017', '2020'].map(y => phraseAt(sp, y, 1, STRIP_S));
	const gaps = ['+2', '+2', '+3', '+3'];
	const rowLabel = phraseAt(sp, 'Year', 1, STRIP_S), pctLabel = phraseAt(sp, 'Samples', 1, STRIP_S);
	const lit = vis(f, K4.bottom, K4.even, 10);
	return (
		<>
			<Overlay>
				{strip(0, [{kind: 'verb', phrase: 'Plot', at: 6}, {kind: 'given', phrase: 'line graph', at: 14}, {kind: 'marks', at: 20},
					{kind: 'given', phrase: 'Year', item: 0, at: K4.bottom, color: VIOLET}, {kind: 'given', phrase: 'Samples resistant to antibiotic K (%)', item: 0, at: K4.pct, color: AMBER_INK},
					...YEARS.map((y, i) => ({kind: 'given' as const, phrase: `${y}`, item: 0, at: K4.jump + i * 8}))])}
				{gaps.map((g, i) => <Chip key={g + i} x={(yrs[i].endX + yrs[i + 1].x1) / 2} y={yrs[i].y - 24} text={g} at={(i < 2 ? K4.two - 6 : K4.three - 6) + (i % 2) * 8} size={20} color={GREY_INK} anchor="middle" hand={false} />)}
				<MainGraph axes={K4.bottom} ticks={K4.even} xl={K4.bottom} yl={K4.pct} unit={null} title={null} litLabels={lit} />
				<PenArrow a={[pctLabel.x1 - 6, pctLabel.y]} b={[MAIN.x - 66, MAIN.y + H / 2 - 60]} at={K4.pct + 8} color={AMBER_INK} bow={60} dash />
				<GreyTag x={MAIN.x + MAIN.nx * MAIN.s + 20} y={MAIN.y + H - 60} text="every gridline worth the same" at={K4.every} out={K4.trap} size={20} maxW={300} />
				<ScaleTrap x={SX} y={350} w={SW - 10} at={K4.bend - 10} years={YEARS} vals={PCT} dimTop={prog(f, K4.real, 12)} />
				{f >= K4.fills ? (
					<g opacity={vis(f, K4.fills, undefined, 10)}>
						<rect x={MAIN.x} y={gyM(20)} width={MAIN.nx * MAIN.s} height={gyM(0) - gyM(20)} fill={AMBER} opacity={0.12} />
						<DrawPath d={`M${MAIN.x},${gyM(0) + 84} l0,-8 l${MAIN.nx * MAIN.s},0 l0,8`} at={K4.fills} dur={14} color={AMBER_INK} width={3} />
					</g>
				) : null}
				<GreyTag x={SX} y={720} text="x: 1 year = 2 squares; y: 1 square = 2%" at={K4.fills + 10} size={22} maxW={SW} />
				{void rowLabel}{void K4.parta}{void K4.indep}{void K4.precise}{void GREEN}
			</Overlay>
		</>
	);
};

// ---------- 5. Part (a): plot and best fit ----------
const K5 = cues(sc('part-a-plot'), {label: 'Label each axis', unit: 'unit', title: 'title', plot: 'Plot each point', cross: 'cross', best: 'best fit', scattered: 'scattered', here: 'as they are here', dont: "Don't join", scatter: ['scatter', 1], dot: 'dot to dot', tTitle: 'Title,', tAxes: 'axes,', tInt: 'intervals,', tLab: 'labels,', tScale: 'scale:', tails: 'TAILS'});
export const ScenePartAPlot: React.FC = () => {
	const f = useCurrentFrame();
	const zz = PTS;
	const mid = PTS[2];
	return (
		<>
			<Overlay>
				{strip(0, [{kind: 'verb', phrase: 'Plot', at: -100}, {kind: 'given', phrase: 'line graph', at: -100}, {kind: 'marks', at: -100},
					...PCT.map((p, i) => ({kind: 'given' as const, phrase: `${p}`, item: 0, at: K5.cross + i * 8})), {kind: 'given', phrase: 'line of best fit.', at: K5.best}])}
				<MainGraph unit={K5.unit} title={K5.title} pts={K5.cross} line={K5.best} />
				<GreyTag x={MAIN.x + 40} y={MAIN.y + 20} text="points scattered evenly on both sides" at={K5.scattered + 10} out={K5.dont} size={20} />
				<PathLine pts={zz} at={K5.dont} dur={14} color="#b5502b" width={3.5} out={K5.scatter + 10} />
				{f >= K5.dont + 16 && f < K5.scatter + 22 ? (
					<g opacity={1 - prog(f, K5.scatter + 10, 10)}>
						<DrawPath d={`M${mid[0] - 50},${mid[1] - 50} L${mid[0] + 50},${mid[1] + 50} M${mid[0] + 50},${mid[1] - 50} L${mid[0] - 50},${mid[1] + 50}`} at={K5.dont + 16} dur={12} color={GREY_INK} width={6} />
						<T x={mid[0] + 60} y={mid[1] + 80} text="every wobble treated as real" size={24} hand weight={700} color={GREY_INK} />
					</g>
				) : null}
				<GreyTag x={MAIN.x + 40} y={MAIN.y + 20} text="measured values vary a little; the best fit shows the trend" at={K5.scatter + 10} size={20} maxW={500} />
				<TailsRail x={SX} y={330} w={SW} rows={[K5.title, 6, 12, K5.unit, 18, K5.best]} initials={K5.tTitle}
					lit={[{row: 3, from: K5.unit, to: K5.title}, {row: 0, from: K5.title, to: K5.plot}, {row: 5, from: K5.best, to: K5.dont}, {row: 0, from: K5.tTitle, to: K5.tAxes}, {row: 1, from: K5.tAxes, to: K5.tInt}, {row: 2, from: K5.tInt, to: K5.tLab}, {row: 3, from: K5.tLab, to: K5.tScale}, {row: 4, from: K5.tScale, to: K5.tails}]} />
				<BandLadder x={SX} y={770} at={K5.dot + 20} rungH={92} critW={390} rungs={[{mark: '2', crit: 'all points correct, appropriate best-fit line'}, {mark: '1', crit: 'some points correct, or an attempted line'}]} />
				<GreyTag x={SX} y={960} text="a NESA Biology marking guideline, 2024 (2 marks), paraphrased" at={K5.dot + 34} size={18} maxW={SW} />
				<AnswerBox spec={ABOX} at={-100} counter={{total: 8, extra: [K5.tInt, K5.tLab, K5.tails], label: true}} />
				{void K5.label}{void K5.plot}{void K5.here}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 6. Part (b): describe the trend ----------
const K6 = cues(sc('part-b-trend'), {partb: 'Part b', describe: 'describe the trend', direction: ['direction', 1], prove: 'prove it', rose: 'Resistance rose steadily', four: 'four per cent', nineteen: 'nineteen per cent', year: 'a year', changes: 'changes somewhere', doesnt: "Here it doesn't", word: 'right word', ddc: 'Direction, data, change', explain: 'explain', use: 'antibiotic use', cause: "doesn't show"});
export const ScenePartB: React.FC = () => {
	const f = useCurrentFrame();
	const rows: ARow[] = [
		{text: ANS.b, at: K6.rose, dur: K6.year - K6.rose + 20, tick: K6.rose + 40},
		{text: 'explain: a plausible reason, e.g. antibiotic use can select resistant bacteria; the graph alone doesn\'t show the cause (the antibiotics video)', at: K6.use - 20, dur: 120, color: GREY_INK},
	];
	const a = [gxM(2010), gyM(fit(2010)) - 24], b = [gxM(2020), gyM(fit(2020)) - 24];
	const tri = f >= K6.year;
	const sideOut = K6.explain;
	return (
		<>
			<Overlay>
				{strip(1, [{kind: 'verb', phrase: 'Describe', at: 8}, {kind: 'given', phrase: 'trend', at: 16}, {kind: 'marks', at: 22},
					{kind: 'given', phrase: '4', item: 0, at: K6.four}, {kind: 'given', phrase: '2010', item: 0, at: K6.four + 8}, {kind: 'given', phrase: '19', item: 0, at: K6.nineteen}, {kind: 'given', phrase: '2020', item: 0, at: K6.nineteen + 8}])}
				<GreyTag x={SX} y={250} text="describe: say what it looks like, with detail (s01)" at={14} out={K6.direction} size={18} maxW={SW} />
				<MainGraph pts={-100} line={-100} />
				<PathLine pts={[a as [number, number], b as [number, number]]} at={K6.direction} dur={22} color={AMBER} width={6} />
				{f >= K6.direction + 18 ? <path d={`M${b[0] - 22},${b[1] + 2} L${b[0]},${b[1]} L${b[0] - 12},${b[1] + 20}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" /> : null}
				{[0, 4].map((i, k) => f >= [K6.four, K6.nineteen][k] ? <g key={i}><circle cx={PTS[i][0]} cy={PTS[i][1]} r={18} fill="none" stroke={TEAL} strokeWidth={4} opacity={prog(f, [K6.four, K6.nineteen][k], 8)} /></g> : null)}
				{tri ? (
					<g opacity={prog(f, K6.year, 10) * (1 - 0.6 * prog(f, sideOut, 12))}>
						<DrawPath d={`M${gxM(2010)},${gyM(fit(2010))} L${gxM(2020)},${gyM(fit(2010))} L${gxM(2020)},${gyM(fit(2020))}`} at={K6.year} dur={20} color={AMBER_INK} width={3} dash="8 6" />
						<T x={(gxM(2010) + gxM(2020)) / 2} y={gyM(fit(2010)) + 28} text="10 years" size={20} color={AMBER_INK} weight={700} anchor="middle" />
						<T x={gxM(2020) - 10} y={gyM(10)} text="15 up" size={20} color={AMBER_INK} weight={700} anchor="end" />
					</g>
				) : null}
				<T x={SX} y={330} text="TAILS" size={22} color={GREY_INK} weight={800} o={0.6} />
				<TrendMove x={SX} y={350} w={SW} rows={[K6.direction, K6.prove, K6.changes]} o={1 - 0.5 * prog(f, sideOut, 12)}
					lit={[{row: 0, from: K6.direction, to: K6.prove}, {row: 1, from: K6.prove, to: K6.changes}, {row: 2, from: K6.changes, to: K6.doesnt}, {row: 0, from: K6.ddc, to: K6.ddc + 26}, {row: 1, from: K6.ddc + 27, to: K6.ddc + 56}, {row: 2, from: K6.ddc + 57, to: K6.ddc + 86}]} />
				<T x={SX} y={664} text="about 1.5 percentage points per year" size={26} hand weight={700} color={AMBER_INK} o={vis(f, K6.year + 10, sideOut, 10)} />
				<GreyTag x={SX} y={680} text="percentage points: the difference between two percentages" at={K6.year + 20} out={sideOut} size={18} maxW={SW} />
				<GreyTag x={SX} y={762} text="no change in pattern here: the points stay near one straight line" at={K6.changes + 10} out={sideOut} size={18} maxW={SW} />
				<CrossedHabit x={SX} y={852} text="it went up" at={K6.word} cross={K6.word + 22} caption="no data, no marks for detail" size={28} maxW={SW} out={sideOut} />
				<GreyTag x={SX} y={680} text="describe = what the data show; explain = add why (s02)" at={K6.explain + 6} size={20} maxW={SW} />
				<AnswerBox spec={ABOX} rows={rows} at={-100} counter={{total: 8, extra: [-100, -100, -100, K6.year + 20], label: true}} dimRows={[{rows: [1], at: 1160}]} />
				{void K6.partb}{void K6.describe}{void K6.cause}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 6b. Points or per cent ----------
const K7 = cues(sc('part-b-points'), {trap: 'One trap', fn: 'four to nineteen', fifteen: 'fifteen percentage', points: ['points', 1], compared: 'compared with', five: 'almost five times', three: 'three hundred', both: 'Both are true', mean: 'which one you mean'});
export const ScenePoints: React.FC = () => {
	const f = useCurrentFrame();
	const base = 640, k = 14;
	const bars = [{x: SX + 60, v: 4, l: '2010: 4%', at: K7.fn}, {x: SX + 240, v: 19, l: '2020: 19%', at: K7.fn + 12}];
	const rows: ARow[] = [{text: ANS.b, at: -1000, tick: -1000}];
	const swap = K7.both;
	return (
		<>
			<Overlay>
				{strip(1, [{kind: 'verb', phrase: 'Describe', at: -100}, {kind: 'given', phrase: '4', item: 0, at: K7.fn}, {kind: 'given', phrase: '19', item: 0, at: K7.fn + 12}])}
				<MainGraph pts={-100} line={-100} dim={0.4} />
				{bars.map((b, i) => (
					<g key={i} opacity={prog(f, b.at, 12)}>
						<rect x={b.x} y={base - b.v * k * smooth(prog(f, b.at, 16))} width={110} height={b.v * k * smooth(prog(f, b.at, 16))} rx={6} fill={i ? '#f6d77a' : '#fbe9b8'} stroke={AMBER_INK} strokeWidth={2.5} />
						<T x={b.x + 55} y={base + 32} text={b.l} size={24} weight={700} color={INK} anchor="middle" />
					</g>
				))}
				<line x1={SX + 30} x2={SX + 400} y1={base} y2={base} stroke={INK} strokeWidth={2.5} opacity={prog(f, K7.fn, 10)} />
				{f >= K7.points ? <DrawPath d={`M${SX + 190},${base - 4 * k} l12,0 l0,${-15 * k} l-12,0`} at={K7.points} dur={14} color={AMBER_INK} width={3.5} /> : null}
				<T x={SX} y={720} text="19 − 4 = 15 percentage points" size={30} hand weight={700} color={AMBER_INK} o={prog(f, K7.points, 10)} />
				<GreyTag x={SX} y={736} text="percentage points: the difference between two percentages" at={K7.points + 10} size={18} maxW={SW} />
				<T x={SX} y={850} text="(19 − 4) ÷ 4 × 100 = 375% increase" size={30} hand weight={700} color={TEAL} o={prog(f, K7.three, 10)} />
				<GreyTag x={SX} y={866} text="relative change: compared with the start" at={K7.three + 10} size={18} maxW={SW} />
				<Chip x={480} y={350} text="resistance rose 15%" at={K7.fn + 30} out={swap} size={30} color={INK} />
				<GreyTag x={480} y={420} text="15 what?" at={K7.fifteen} out={swap} size={22} />
				<Chip x={480} y={350} text="rose 15 percentage points (a 375% increase)" at={swap + 4} size={30} color={GREEN} />
				<AnswerBox spec={ABOX} rows={rows} at={-100} counter={{total: 8, extra: [-100, -100, -100, -100], label: true}} />
				{void K7.trap}{void K7.compared}{void K7.five}{void K7.mean}
			</Overlay>
		</>
	);
};
