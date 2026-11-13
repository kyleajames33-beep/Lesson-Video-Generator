// Scenes 1 to 4: the planting crew (f03's final frame: 50, 80, 110, … seedlings a day against a guess of 1,200), why it
// is arithmetic (a fixed amount each day; a fixed percentage is not), one day (a₁₂ = 380) or the total (S₁₂ = 2,580: the
// day slider plants the hillside and fills the total column past the 1,200 line on day 8), and the two graphs (the daily
// amounts on a straight line, the running totals bending upward).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, LiveReadoutBoard, SceneHeading, TermPlot, smooth, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K1, K2, K3, K4} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, Chip, Crew, GuessChip, Hand, PANEL_X, POS, PctStrip, RED, Row, SN, TEAL, aN, fmt, mix, plantedBy} from './parts';

const GUESS = '12 × about 100\n≈ 1,200';
const bump = (fr: number, at: number, len = 40) => Math.sin(Math.PI * Math.max(0, Math.min(1, (fr - at) / len)));

/** f04's opening frame (f03's final frame): the crew's first three days against "1,200 in total?". */
export const F04OpeningFrame: React.FC = () => (
	<>
		<SceneHeading text="A planting crew" at={-300} size={52} />
		<Crew />
		<Chip x={560} y={88} at={-300} size={46} color={BROWN}>Next: more or less than 1,200?</Chip>
		<Chip x={1460} y={350} at={-300} size={84} color={BROWN}>?</Chip>
	</>
);

// ---------- 1. hook ----------
const CrewCard: React.FC<{at: readonly number[]; out?: number}> = ({at, out}) => {
	const fr = useCurrentFrame();
	const line = (i: number, node: React.ReactNode) => (fr >= at[i] ? <div style={{opacity: prog(fr, at[i], 10), whiteSpace: 'pre'}}>{node}</div> : null);
	return <BoxCard x={470} y={180} w={410} at={at[0] - 8} out={out} size={44} title="the crew">
		{line(0, <>day 1: <span style={{color: BLUE, fontWeight: 800}}>50</span></>)}
		{line(1, <>day 2: <span style={{color: BLUE, fontWeight: 800}}>80</span></>)}
		{line(2, <>day 3: <span style={{color: BLUE, fontWeight: 800}}>110</span></>)}
		{line(3, <span style={{color: AMBER, fontWeight: 800}}>30 more each day</span>)}
	</BoxCard>;
};
const AskCard: React.FC<{at: number; out?: number}> = ({at, out}) => (
	<BoxCard x={910} y={180} w={450} at={at} out={out} size={44} title="the question" edge={BROWN}>
		<div style={{whiteSpace: 'pre'}}>{'After 12 days:\nmore or less than\n1,200 seedlings?'}</div>
	</BoxCard>
);
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const t = smooth(prog(fr, 30, 40));
	const pulse = (d: number) => bump(fr, [k.fifty, k.eighty, k.h110][d - 1] ?? 1e9);
	return (
		<>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}>
				<SceneHeading text="A planting crew" at={-300} size={52} />
				<Chip x={560} y={88} at={-300} size={46} color={BROWN}>Next: more or less than 1,200?</Chip>
				<Chip x={1460} y={350} at={-300} size={84} color={BROWN}>?</Chip>
			</div> : null}
			<SceneHeading text="How do arithmetic sequences model linear change?" at={34} size={48} />
			<Crew t={t} pulse={pulse} arcGlow={bump(fr, k.thirty, 50)} tabGlow={0.9 * bump(fr, k.after, 60)} />
			<CrewCard at={[k.fifty, k.eighty, k.h110, k.thirty]} />
			<AskCard at={k.after} />
			<GuessChip x={PANEL_X} y={430} at={k.many + 20}>{GUESS}</GuessChip>
			<Hand x={PANEL_X + 4} y={548} at={k.many + 34} size={42} color={POS}>guess</Hand>
		</>
	);
};

// ---------- 2. spotting an arithmetic model ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const line = (at: number, node: React.ReactNode) => (fr >= at ? <div style={{opacity: prog(fr, at, 10), whiteSpace: 'pre'}}>{node}</div> : null);
	return (
		<>
			<SceneHeading text="Why is this arithmetic?" at={4} size={52} />
			<Crew t={1} arcGlow={bump(fr, k.each, 70)} tabGlow={0.9 * vis(fr, k.days - 6, k.pct, 10)} />
			<CrewCard at={[-30, -30, -30, -30]} out={k.each - 8} />
			<AskCard at={-30} out={k.an - 12} />
			<Row x={470} y={186} at={k.each} out={k.an - 12} size={52}>80 − 50 = <span style={{color: AMBER}}>30</span></Row>
			<Row x={470} y={258} at={k.each + 40} out={k.an - 12} size={52}>110 − 80 = <span style={{color: AMBER}}>30</span></Row>
			<Hand x={470} y={346} at={k.fixed} out={k.an - 12} size={44} color={AMBER}>{'fixed amount each period\n→ arithmetic'}</Hand>
			<BoxCard x={470} y={180} w={800} at={k.an} size={44} title="the model">
				{line(k.an, <><span style={{color: BLUE, fontWeight: 800}}>aₙ</span> = seedlings planted on day n</>)}
				{line(k.first, <><span style={{color: BLUE, fontWeight: 800}}>a = 50</span> seedlings</>)}
				{line(k.d, <><span style={{color: AMBER, fontWeight: 800}}>d = 30</span> a day</>)}
				{line(k.n, <><span style={{fontWeight: 800}}>n</span> = the day number</>)}
			</BoxCard>
			<Hand x={470} y={470} at={k.seq} out={k.an - 12} size={40} color={POS}>each term: the one before + 30</Hand>
			<PctStrip x={PANEL_X} base={300} at={k.pct} out={k.soon - 8} stepsAt={k.steps} />
			<Hand x={560} y={474} at={k.steps + 20} size={40} color={POS}>a fixed percentage: the steps grow, so not arithmetic</Hand>
			<Chip x={PANEL_X} y={196} at={k.soon} size={34} color={BROWN}>{'Later: geometric\nsequences'}</Chip>
			<GuessChip x={PANEL_X} y={430} at={-30}>{GUESS}</GuessChip>
			<Hand x={PANEL_X + 4} y={548} at={-30} size={42} color={POS}>guess</Hand>
		</>
	);
};

// ---------- 3. one day, or the total? ----------
const S0 = K3.total, S1 = K3.six - 12;
/** Days planted at scene frame fr (the slider runs at an even pace from "the total over" to just before "It's six"). */
const sliderDay = (fr: number) => 12 * Math.max(0, Math.min(1, (fr - S0) / (S1 - S0)));
const PASS = Math.round(S0 + ((S1 - S0) * (7 + (1200 - SN(7)) / aN(8))) / 12);
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const day = sliderDay(fr);
	const n = Math.max(1, Math.min(12, Math.ceil(day)));
	const running = fr >= S0;
	return (
		<>
			<SceneHeading text="One day, or the total?" at={4} size={52} />
			<Chip x={600} y={88} at={6} size={36} color={BLUE}>one day: aₙ = a + (n − 1)d</Chip>
			<Chip x={1196} y={88} at={k.partial - 60} size={36} color={TEAL}>total: Sₙ = (n/2)(a + aₙ)</Chip>
			<Crew t={1} unit={mix(2.6, 0.8, smooth(prog(fr, 4, 30)))} arcs={1 - prog(fr, 0, 12)} day={Math.max(3, day)} bar12={prog(fr, k.t380 - 10, 30)} colDay={day} nowDay={running && fr < k.six + 60 ? n : fr >= k.day12 && fr < S0 ? 12 : 0} hundred={prog(fr, k.later, 14)}
				pulse={d => (d === 12 ? bump(fr, k.t380 + 10, 50) : 0)} />
			<BoxCard x={470} y={250} w={740} at={k.one - 6} out={k.total - 10} size={42} title="which formula?">
				<div style={{whiteSpace: 'pre'}}>one day's planting → a single term, <span style={{color: BLUE, fontWeight: 800}}>aₙ</span></div>
				{fr >= k.day12 ? <div style={{whiteSpace: 'pre', opacity: prog(fr, k.day12, 10)}}>day 12 → the 12th term, <span style={{color: BLUE, fontWeight: 800}}>a₁₂</span></div> : null}
			</BoxCard>
			<Row x={96} y={170} at={k.day12} size={52} dim={prog(fr, k.six, 12)} small={44}><span style={{color: BLUE}}>a₁₂</span> = 50 + 11 × 30<span style={{opacity: prog(fr, k.t380, 10)}}> = <span style={{color: BLUE}}>380</span></span></Row>
			<Row x={96} y={244} at={k.six} size={52}><span style={{color: TEAL}}>S₁₂</span> = (12/2)(50 + 380) = 6 × 430</Row>
			<AnswerBox x={96} y={312} at={k.t2580 + 50} size={48}>2,580 seedlings</AnswerBox>
			<LiveReadoutBoard x={PANEL_X} y={162} width={320} at={S0 - 10} inline size={52} labelSize={30} rows={[
				{label: 'today aₙ', value: aN(n), digits: 0, role: 'a'},
				{label: 'total Sₙ', value: plantedBy(day), text: fmt(plantedBy(day)), role: 'b'},
			]} />
			<GuessChip x={PANEL_X} y={430} at={-30} crossAt={k.double + 10}>{GUESS}</GuessChip>
			<Hand x={PANEL_X + 4} y={548} at={-30} out={PASS - 8} size={42} color={POS}>guess</Hand>
			<Hand x={PANEL_X + 4} y={548} at={PASS} out={k.double} size={38} color={TEAL}>{'past 1,200\nalready on day 8'}</Hand>
			<Hand x={PANEL_X + 4} y={548} at={k.double + 24} size={38} color={RED}>{'later days are\nfar above 100'}</Hand>
		</>
	);
};

// ---------- 4. linear terms, curving totals ----------
const P4 = {x: 90, w: 1200, at: 16, stagger: 12};
const XT = Array.from({length: 12}, (_, i) => i + 1);
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const n = Math.max(1, Math.min(12, Math.floor((fr - P4.at) / P4.stagger) + 1));
	const txt = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
	const jumps = (m: PlotMap) => <g opacity={prog(fr, k.bigger - 10, 12)}>
		{XT.slice(1).map(j => {const [x0, y0] = m.p(j - 1, SN(j - 1)), [x1, y1] = m.p(j, SN(j)); const p = prog(fr, k.bigger - 10 + (j - 2) * 6, 10); return <path key={j} d={`M${x0 + 13},${y0} H${x1} V${y0 + (y1 - y0) * p}`} stroke={BLUE} strokeWidth={5} fill="none" strokeLinejoin="round" opacity={p} />;})}
		{[2, 3, 4].map(j => {const [x1] = m.p(j, SN(j)), [, y4] = m.p(4, SN(4)); return <text key={'t' + j} x={x1} y={y4 - 26} textAnchor="middle" opacity={prog(fr, k.bigger + (j - 2) * 14, 10)} style={txt(30, POS)} stroke={CARD} strokeWidth={8} paintOrder="stroke">+{aN(j)}</text>;})}
		{(() => {const [x1, y1] = m.p(12, SN(12)), [, y0] = m.p(11, SN(11)); return <text x={x1 + 16} y={(y0 + y1) / 2 + 14} opacity={prog(fr, k.bends - 30, 10)} style={txt(34, POS)} stroke={CARD} strokeWidth={8} paintOrder="stroke">+{aN(12)}</text>;})()}
	</g>;
	const steps = (m: PlotMap) => <g opacity={prog(fr, k.line - 30, 12)}>
		{XT.slice(0, 11).map(j => {const [x0, y0] = m.p(j, aN(j)), [x1, y1] = m.p(j + 1, aN(j + 1)); const p = prog(fr, k.line - 30 + (j - 1) * 5, 10); return <path key={j} d={`M${x0 + 13},${y0} H${x1} V${y0 + (y1 - y0) * p + (p >= 1 ? 13 : 0)}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" strokeLinejoin="round" opacity={p} />;})}
		{[1, 2].map(j => {const [x0] = m.p(j, aN(j)), [x1, y1] = m.p(j + 1, aN(j + 1)); return <text key={'s' + j} x={(x0 + x1) / 2 - 6} y={y1 - 24} textAnchor="middle" opacity={prog(fr, k.line + j * 10, 10)} style={txt(36, AMBER, true)} stroke={CARD} strokeWidth={8} paintOrder="stroke">+30</text>;})}
	</g>;
	return (
		<>
			<SceneHeading text="Two graphs: each day, and the running total" at={4} size={48} />
			<TermPlot x={P4.x} y={150} width={P4.w} height={470} window={{x: [0, 12.7], y: [0, 2800]}} nRange={[1, 12]} at={-30} xLabel="" yLabel="running total Sₙ (seedlings)"
				xTicks={XT.map(v => ({value: v, label: ''}))} yTicks={[500, 1000, 1500, 2000, 2500].map(v => ({value: v, label: fmt(v)}))}
				series={[{term: SN, color: TEAL, at: P4.at, stagger: P4.stagger}]} guide={{fn: SN, at: k.bends, color: TEAL}}>{jumps}</TermPlot>
			<TermPlot x={P4.x} y={560} width={P4.w} height={420} window={{x: [0, 12.7], y: [0, 450]}} nRange={[1, 12]} at={-30} xLabel="" yLabel="planted each day aₙ (seedlings)"
				xTicks={[{value: 0, label: 'day'}, ...XT.map(v => ({value: v, label: String(v)}))]} yTicks={[100, 200, 300, 400]}
				series={[{term: aN, color: BLUE, at: P4.at, stagger: P4.stagger}]} guide={{fn: aN, at: k.line}}>{steps}</TermPlot>
			<LiveReadoutBoard x={1330} y={170} width={500} at={-30} inline size={52} labelSize={30} rows={[
				{label: 'day n', value: n, digits: 0, role: 'inner'},
				{label: 'planted today aₙ', value: aN(n), digits: 0, role: 'a'},
				{label: 'total Sₙ', value: SN(n), text: fmt(SN(n)), role: 'b'},
			]} />
			<Row x={1330} y={440} at={k.an} size={52}><span style={{color: BLUE}}>aₙ</span> = 30n + 20</Row>
			<Hand x={1330} y={512} at={k.linear} size={40} color={BLUE} w={520}>a linear function of the day number</Hand>
			<Hand x={1330} y={618} at={k.same} size={44} color={AMBER} w={520}>linear growth: the same change every period</Hand>
			<Hand x={1330} y={736} at={k.bigger} out={k.totals - 8} size={40} color={TEAL} w={520}>each jump in the total is that day's planting</Hand>
			<Hand x={1330} y={736} at={k.totals} size={42} color={TEAL} w={520}>totals: bigger jumps each day</Hand>
			<Hand x={1330} y={836} at={k.even} size={42} color={BLUE} w={520}>terms: +30 each day</Hand>
		</>
	);
};
export {INK};
