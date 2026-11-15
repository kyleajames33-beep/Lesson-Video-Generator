// Scenes 1 to 4: f15's last frame (the die chart: one bar of 38 at face 4, five "?" outlines, the red die), then the
// die rolled 200 times into the bars; a random variable and P(X = x); counts to relative-frequency estimates (the
// relabel, the crossed "=", the replayed estimate); and why the estimates add to 1 (the bars tip end to end).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, ProbabilityBars, RollSimulator, SceneHeading, StackedTotalBar} from '../../math/studio';
import {F15FinalFrame} from '../math-a12-f15/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ASK, AnswerBox, BoxCard, COUNTS, Chip, DATA, DIE_RED, EST_TEXT, Framed, Hand, POS, ROLLS, RedDie, RelFreqTrace, Row, Slip, Table, Task, TokenDrop, YAxis, barGeom, countTicks, propTicks} from './parts';

const ZERO = [0, 0, 0, 0, 0, 0];
const cnt = (v: number) => (v > 0 ? String(v) : null);

// ---------- 1. hook: is this die fair? ----------
/** Scene 1's chart sits exactly where f15's die chart was (axis x 380 to 1400, counts 0 to 50 over y 810 to 250). */
const C1 = {x: 350, y: 194, width: 1070, height: 712} as const;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 12, 18);
	const roll = k.watch + 8;
	const pre = 1 - prog(fr, k.watch, 10);
	const g = barGeom(C1.x, C1.y, C1.width, C1.height, 6);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - open}}>
			<SceneHeading text="How do data and a model give a probability distribution?" at={30} size={44} />
			<YAxis x={C1.x} y={C1.y} w={C1.width} h={C1.height} n={6} max={50} ticks={countTicks} />
			{pre > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: pre}}>
				<ProbabilityBars {...C1} labels={['1', '2', '3', '4', '5', '6']} values={[0, 0, 0, 38, 0, 0]} max={50} role="a" xLabel="face" yLabel="count" valueText={cnt} ghosts={[34, 34, 34, null, 34, 34]} />
				<FrameSvg>{[0, 1, 2, 4, 5].map(i => <text key={i} x={g.cx(i)} y={g.Y(17, 50) + 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: INK_SOFT}}>?</text>)}</FrameSvg>
				<Hand x={1430} y={520} at={-30} size={42} color={POS} w={420}>the four came up 38 times</Hand>
				<RedDie x={1480} y={620} w={280} />
			</div> : null}
			{fr >= k.watch ? <>
				<ProbabilityBars {...C1} labels={['', '', '', '', '', '']} values={ZERO} max={50} ghosts={[null, null, null, 38, null, null]} at={k.watch} out={k.faces + 20} />
				<RollSimulator sequence={ROLLS} pace={{at: roll, slow: 6, every: 10, until: k.more - 8}} at={k.watch}
					bars={{...C1, max: 50, xLabel: 'face', yLabel: 'count', highlight: {index: 3, at: k.more, role: 'k'}}}
					die={{x: 1480, y: 620, w: 280, plate: DIE_RED}}
					readout={{x: 1450, y: 250, width: 420, rows: s => [{label: 'rolls', value: s.shown, digits: 0}, {label: 'fours', value: s.tally[3], digits: 0, role: 'k'}]}} />
			</> : null}
			<Hand x={1450} y={380} at={k.board} out={k.watch} size={42} color={INK}>a board-game die</Hand>
			<Hand x={1450} y={486} at={k.more} size={42} color={ASK.ink}>38: the most</Hand>
			<Hand x={1450} y={546} at={k.fair} size={52} color={INK}>fair?</Hand>
			<Chip x={1450} y={84} at={k.how} size={36} color={INK}>Data or a model?</Chip>
			</div>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F15FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. a random variable, and P(X = x) ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const vals = [k.one, k.two, k.three, k.four, k.five, k.six];
	return (
		<>
			<SceneHeading text="A random variable, and P(X = x)" at={4} size={52} />
			<RedDie x={120} y={200} w={230} />
			<Chip x={400} y={236} at={k.face} size={44} color={DATA.ink}>X = number on the top face</Chip>
			{fr >= k.face ? <FrameSvg><DrawPath d="M396,290 C 340,300 300,290 268,262" at={k.face} dur={14} color={DATA.ink} width={5} /><path d="M268,262 l18,-2 l-8,16 z" fill={DATA.ink} opacity={prog(fr, k.face + 12, 6)} /></FrameSvg> : null}
			<YAxis x={60} y={460} w={860} h={490} n={6} max={50} ticks={countTicks} />
			<ProbabilityBars x={60} y={460} width={860} height={490} labels={['1', '2', '3', '4', '5', '6']} values={COUNTS} max={50} role="a" xLabel="face" yLabel="count" valueText={cnt} highlight={{index: 3, at: k.write, role: 'k'}} />
			<BoxCard x={1000} y={170} w={830} at={k.rv} size={40} title="random variable">X is a number decided by the outcome of a chance experiment.</BoxCard>
			<Hand x={1000} y={352} at={k.disc} size={40} color={INK}>discrete: separate values we can list</Hand>
			{vals.map((a, i) => <Chip key={i} x={1000 + i * 132} y={414} at={a} size={44} color={DATA.ink}>{String(i + 1)}</Chip>)}
			<Row x={1000} y={530} at={k.write} size={52} color={ASK.ink}>P(X = 4)</Row>
			<Hand x={1270} y={546} at={k.value4} size={36} color={INK} w={560}>the probability that X takes the value 4</Hand>
			<Row x={1000} y={680} at={k.capital} size={52} dim={prog(fr, k.px, 12) * 0.2}>P(X = x)</Row>
			<Hand x={1270} y={672} at={k.capital + 10} size={36} color={INK}>X: the variable</Hand>
			<Hand x={1270} y={722} at={k.small} size={36} color={INK}>x: one of its values</Hand>
			<Row x={1000} y={820} at={k.px} size={52}>P(x)</Row>
			<Hand x={1170} y={836} at={k.px + 16} size={34} color={POS}>(some books write p(x))</Hand>
		</>
	);
};

// ---------- 3. from counts to estimates ----------
const B3 = {x: 60, y: 400, width: 820, height: 540} as const;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const rel = prog(fr, k.bars, 30);
	const board = k.replay;
	return (
		<>
			{/* the g01 board (until the replay) */}
			<Task x={96} y={150} w={860} at={-30} out={board} size={40}>Estimate P(X = 4) from the 200 rolls.</Task>
			<BoxCard x={1000} y={150} w={440} at={-30} out={board} size={40} title="givens"><div style={{color: DATA.ink}}>rolls: 200</div><div style={{color: DATA.ink}}>fours: 38</div></BoxCard>
			<RedDie x={1500} y={150} w={200} out={board} />
			<Framed x={96} y={280} at={-30} out={board} size={40}>relative frequency = count ÷ number of trials</Framed>
			{fr < board + 14 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, board, 12)}}>
				<YAxis {...{x: B3.x, y: B3.y, w: B3.width, h: B3.height}} n={6} max={50} ticks={countTicks} o={1 - rel} />
				<YAxis {...{x: B3.x, y: B3.y, w: B3.width, h: B3.height}} n={6} max={50} ticks={propTicks} o={rel} />
				<ProbabilityBars {...B3} labels={['1', '2', '3', '4', '5', '6']} values={COUNTS} max={50} role="a" xLabel="face" yLabel="count" valueText={cnt} highlight={{index: 3, at: k.thirty, role: 'k'}} out={k.bars + 15} />
				<ProbabilityBars {...B3} labels={['1', '2', '3', '4', '5', '6']} values={COUNTS} max={50} role="a" xLabel="face" yLabel="relative frequency" valueText={(_, i) => EST_TEXT[i]} valueSize={30} highlight={{index: 3, at: k.thirty, role: 'k'}} at={k.bars + 15} />
			</div> : null}
			<Hand x={420} y={380} at={k.every} out={board} size={40} color={ASK.ink}>same shape, new scale</Hand>
			<Table x={900} y={410} at={k.now} out={board} size={36} colW={135} headW={150} hl={{col: 3, at: k.thirty, role: 'k'}}
				rows={[{head: 'x', cells: ['1', '2', '3', '4', '5', '6']}, {head: 'count', cells: COUNTS.map(String), color: DATA.ink}, {head: 'P(x) ≈', cells: [...EST_TEXT], color: DATA.ink, at: k.nine, cellAt: [0, 4, 8, 12, 16, 20].map(d => k.nine + d)}]} />
			<Hand x={1600} y={366} at={k.divide} out={board} size={38} color={ASK.ink}>÷ 200 each</Hand>
			<AnswerBox x={900} y={620} at={k.nine} out={board} size={52}>P(X = 4) ≈ 38/200 = 0.19</AnswerBox>
			<Hand x={900} y={730} at={k.that} out={k.not - 6} size={38} color={INK} w={880}>relative frequency: the fraction of the rolls</Hand>
			{fr < board + 14 ? <div style={{opacity: 1 - prog(fr, board, 12)}}><Slip x={900} y={720} at={k.not - 4} strikeAt={k.not + 6} size={44} caption="it's an estimate: use ≈">P(X = 4) = 0.19</Slip></div> : null}
			<Chip x={900} y={868} at={k.a} out={board} size={30} color={INK}>relative frequency: these rolls · probability: the die</Chip>
			{/* the replay */}
			{fr >= board - 2 ? <>
				<SceneHeading text="Replay: the estimate for a four" at={board + 4} size={48} />
				<YAxis {...{x: B3.x, y: B3.y, w: B3.width, h: B3.height}} n={6} max={50} ticks={countTicks} at={board} />
				<RollSimulator sequence={ROLLS} pace={{at: board + 8, slow: 10, every: 8, until: board + 239}} at={board}
					bars={{...B3, max: 50, xLabel: 'face', yLabel: 'count'}} die={{x: 980, y: 190, w: 220, plate: DIE_RED}}
					readout={{x: 1350, y: 170, width: 500, rows: s => [{label: 'rolls', value: s.shown, digits: 0}, {label: 'fours', value: s.tally[3], digits: 0}, {label: 'relative frequency of 4', value: s.relative[3], digits: 3, role: 'k'}]}} />
				<TraceLive at={board} from={board + 8} />
				<Hand x={1430} y={548} at={k.est} size={38} color={ASK.ink}>more rolls: steadier</Hand>
			</> : null}
		</>
	);
};
/** The replay's trace, reading the same pace as the RollSimulator. */
const TraceLive: React.FC<{at: number; from: number}> = ({at, from}) => {
	const fr = useCurrentFrame();
	const k = K3;
	// same pace formula as the kit (paceCount) for slow 10, every 8, until from + 231
	const local = fr - from, slowEnd = 80, span = Math.max(1, from + 231 - from - slowEnd);
	const shown = local < 0 ? 0 : local < slowEnd ? Math.min(10, Math.floor(local / 8) + 1) : Math.min(200, 10 + Math.round(190 * Math.min(1, (local - slowEnd) / span) ** 2.4));
	return <RelFreqTrace x={980} y={530} w={880} h={370} seq={ROLLS} face={3} shown={shown} at={at} marks={[{k: 10, label: '10 rolls: 0.4', at: k.ten}, {k: 50, label: '50 rolls: 0.2', at: k.fifty}]} />;
};

// ---------- 4. why the estimates add to 1 ----------
const B4 = {x: 380, y: 270, width: 1100, height: 640} as const;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const g = barGeom(B4.x, B4.y, B4.width, B4.height, 6);
	const tip = prog(fr, k.none + 6, 50);
	return (
		<>
			<SceneHeading text="Why the estimates add to 1" at={4} size={52} />
			<Row x={96} y={170} at={k.add} size={44} color={DATA.ink}>0.14 + 0.175 + 0.155 + 0.19 + 0.17 + 0.17 <span style={{color: INK}}>= 1</span></Row>
			<Hand x={1250} y={176} at={k.shows} size={44} color={INK_SOFT}>shows it</Hand>
			<RedDie x={110} y={330} w={230} />
			<Hand x={100} y={600} at={k.every} size={40} color={ASK.ink} w={270}>each roll: exactly one face</Hand>
			<YAxis x={B4.x} y={B4.y} w={B4.width} h={B4.height} n={6} max={50} ticks={countTicks} out={k.none + 4} />
			<ProbabilityBars {...B4} labels={['1', '2', '3', '4', '5', '6']} values={COUNTS} max={50} role="a" xLabel="face" yLabel="count" valueText={cnt} out={k.none + 4} />
			<TokenDrop from={[225, 450]} items={ROLLS.slice(0, 12)} at={k.every + 10} every={11} colX={i => g.cx(i)} topY={i => g.Y(COUNTS[i], 50) - 50} arc={50} />
			{fr >= k.none ? <StackedTotalBar x={400} y={440} width={1100} thickness={84} parts={COUNTS.map(c => ({value: c, label: String(c), role: 'a' as const}))} total={200}
				from={{x: g.left, baseY: g.base, slot: g.slot, barW: g.bw, max: 50, height: g.ph}} tip={tip} totalLabel={{text: '= 200', at: k.rolls}} relabel={{text: '= 1', at: k.one2}} at={k.none} /> : null}
			<Row x={400} y={600} at={k.rolls} size={52}>28 + 35 + 31 + 38 + 34 + 34 = 200</Row>
			<AnswerBox x={400} y={710} at={k.one2} size={48}>Σ counts = 200, so ΣP(x) ≈ 200 ÷ 200 = 1</AnswerBox>
			<Hand x={1520} y={726} at={k.that} size={44} color="#287347">explains it</Hand>
			<Hand x={400} y={838} at={k.rounded} size={36} color={POS}>rounded estimates can be a little off</Hand>
		</>
	);
};
