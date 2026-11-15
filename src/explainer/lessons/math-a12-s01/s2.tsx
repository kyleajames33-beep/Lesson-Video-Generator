// Scenes 5 to 8: what a probability distribution is (table and graph, the two checks, the invalid list), the fair
// model against the data and three simulated fair runs (the hook answered, scoped), three coin tosses on a g01 board
// (sequences sorted into bars) and the memory aid (one trial, one value).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, MarkSpan, OutcomeDrop, OutcomeSort, ProbabilityBars, SceneHeading} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ASK, AnswerBox, BAD, BoxCard, COIN_H, COIN_T, COUNTS, Chip, DATA, EST, EST_TEXT, FramedCard, Framed, GOOD, Hand, MODEL, POS, PairBars, Plate, ROLLS, RUNS, RedDie, Row, Slip, Table, Task, TumblingDie, YAxis, barGeom, countTicks} from './parts';

const pTicks = [0.05, 0.1, 0.15, 0.2, 0.25].map(v => ({value: v, label: String(v)}));
const SIXTH = 1 / 6;

// ---------- 5. what a probability distribution is ----------
const G5 = {x: 1130, y: 340, width: 740, height: 580} as const;
const MiniBars: React.FC = () => (
	<svg width={210} height={120} style={{verticalAlign: 'middle', marginLeft: 24, overflow: 'visible'}}>
		<line x1={0} x2={210} y1={70} y2={70} stroke={INK} strokeWidth={3} />
		<rect x={18} y={70 - 0.7 * 80} width={44} height={0.7 * 80} fill={MODEL.stroke} />
		<rect x={84} y={70 - 0.7 * 80} width={44} height={0.7 * 80} fill={MODEL.stroke} />
		<rect x={150} y={70} width={44} height={0.4 * 80} fill={BAD.stroke} />
	</svg>
);
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const g = barGeom(G5.x, G5.y, G5.width, G5.height, 6);
	const gap = prog(fr, k.between, 14);
	return (
		<>
			<SceneHeading text="What a probability distribution is" at={4} size={52} />
			<BoxCard x={96} y={170} w={1500} at={k.set} size={42} title="probability distribution">The values X can take, together with the probability of each value.</BoxCard>
			<RedDie x={1650} y={140} w={150} />
			<Table x={96} y={340} size={40} colW={130} headW={170} rows={[{head: 'x', cells: ['1', '2', '3', '4', '5', '6']}, {head: 'P(x) ≈', cells: [...EST_TEXT], color: DATA.ink}]} />
			<Hand x={96} y={486} at={k.value} out={k.table} size={38} color={INK}>values with their probabilities</Hand>
			<Hand x={96} y={486} at={k.table} size={38} color={INK}>table: the exact numbers we calculate with</Hand>
			{gap > 0.01 ? <FrameSvg>{[1, 2, 3, 4, 5].map(i => <rect key={i} x={g.left + i * g.slot - (g.slot - g.bw) / 2} y={g.top} width={g.slot - g.bw} height={g.ph} fill={ASK.soft} opacity={0.9 * gap} />)}</FrameSvg> : null}
			<YAxis x={G5.x} y={G5.y} w={G5.width} h={G5.height} n={6} max={0.25} ticks={pTicks} />
			<ProbabilityBars {...G5} labels={['1', '2', '3', '4', '5', '6']} values={EST} max={0.25} role="a" xLabel="face" yLabel="P(x)" valueText={(_, i) => EST_TEXT[i]} valueSize={30} />
			<Hand x={1250} y={300} at={k.shape} out={k.apart} size={40} color={INK}>graph: the shape</Hand>
			<Hand x={1250} y={300} at={k.apart} size={40} color={ASK.ink}>no values in between</Hand>
			<Chip x={96} y={570} at={k.every} size={44} color={INK}><MarkSpan kind="circle" at={k.minus + 6} role="mistake" width={5}>0 ≤ P(x) ≤ 1</MarkSpan> for every x</Chip>
			<Chip x={96} y={660} at={k.one} size={44} color={INK}>ΣP(x) = 1</Chip>
			<Hand x={440} y={676} at={k.both} size={40} color={GOOD.ink}>both checks</Hand>
			<div style={{position: 'absolute', left: 0, top: 0}}><Slip x={96} y={770} at={k.these} strikeAt={k.dist} size={44} caption="−0.4 can't be a probability"><span>0.7,  0.7,  −0.4   <span style={{color: GOOD.ink}}>sum = 1</span></span><MiniBars /></Slip></div>
		</>
	);
};

// ---------- 6. the model, and the hook answered ----------
const G6 = {x: 110, y: 230, w: 940, h: 700} as const;
const PANELS: {title: string; vals: readonly number[]; far: number; note: string; sim: boolean}[] = [
	{title: 'run A', vals: RUNS.A, far: 2, note: 'A: 23, off by 10', sim: true},
	{title: 'run B', vals: RUNS.B, far: 0, note: 'B: 20, off by 13', sim: true},
	{title: 'run C', vals: RUNS.C, far: 1, note: 'C: 40, off by 7', sim: true},
	{title: 'our die', vals: COUNTS, far: 3, note: 'ours: 38, off by 5', sim: false},
];
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const grow = prog(fr, k.sixth, 24);
	const runsAt = k.three + 6, sideAt = k.each;
	const runIdx = fr < k.die ? 0 : fr < k.look + 10 ? 1 : 2;
	const runVals = [RUNS.A, RUNS.B, RUNS.C][runIdx];
	const runLabel = ['run A', 'run B', 'run C'][runIdx];
	return (
		<>
			<SceneHeading text={fr < runsAt ? 'Data, or a model?' : 'Three simulated fair runs'} at={4} size={52} />
			{/* stage A: data against the fair model */}
			<PairBars x={G6.x} y={G6.y} w={G6.w} h={G6.h} labels={['1', '2', '3', '4', '5', '6']} data={EST} model={[SIXTH, SIXTH, SIXTH, SIXTH, SIXTH, SIXTH]} max={0.25} ticks={pTicks} xLabel="face" yLabel="P(x)"
				modelGrow={grow} refLine={{value: SIXTH, o: prog(fr, k.sixth + 20, 14)}} highlight={{index: 3, o: prog(fr, k.datagave, 12)}} legend={{o: 1}} out={runsAt} />
			<RedDie x={1690} y={150} w={150} out={runsAt} />
			<Hand x={1080} y={180} at={k.model} out={k.given} size={40} color={MODEL.ink} w={580}>model: reasoning about how the experiment works</Hand>
			<Chip x={1080} y={262} at={k.given} out={k.datagave} size={34} color={DATA.ink}>given counts: estimate from data (≈)</Chip>
			<Chip x={1080} y={352} at={k.told} out={k.datagave} size={34} color={MODEL.ink}>told how it works: use a model (=)</Chip>
			<Row x={1080} y={262} at={k.datagave} out={runsAt} size={46} color={DATA.ink}>Data: P(X = 4) ≈ 0.19</Row>
			<Row x={1080} y={352} at={k.says} out={runsAt} size={46} color={MODEL.ink}>Model: P(X = 4) = 1/6<span style={{opacity: prog(fr, k.seven, 10)}}> ≈ 0.167</span></Row>
			<Row x={1080} y={452} at={k.five} out={runsAt} size={44}>38 − 33.3 ≈ 4.7 more fours</Row>
			<Hand x={1080} y={560} at={k.big} out={runsAt} size={52} color={ASK.ink}>Is that a big gap?</Hand>
			{/* stage B: three simulated fair runs replace each other */}
			{fr >= runsAt - 2 && fr < sideAt + 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, runsAt, 12) * (1 - prog(fr, sideAt, 14))}}>
				<YAxis x={G6.x} y={G6.y} w={G6.w} h={G6.h} n={6} max={50} ticks={countTicks} />
				<ProbabilityBars key={runIdx} x={G6.x} y={G6.y} width={G6.w} height={G6.h} labels={['1', '2', '3', '4', '5', '6']} values={runVals} max={50} role="b" xLabel="face" yLabel="count (200 rolls)" ghosts={COUNTS}
					grow={{at: [runsAt, k.die, k.look + 10][runIdx], dur: 16, stagger: 2}} refLine={{value: 200 / 6}} />
				<Chip x={700} y={170} at={runsAt} size={40} color={MODEL.ink}>{runLabel}</Chip>
				<TumblingDie x={1240} y={240} w={300} from={runsAt} to={sideAt} />
				<Hand x={1110} y={560} at={runsAt} size={44} color={MODEL.ink}>simulated fair die</Hand>
				<Hand x={1110} y={630} at={runsAt + 20} size={38} color={INK} w={760}>dashed outlines: our die · dashed line: 33.3</Hand>
				<Hand x={1110} y={740} at={k.look} size={52} color={ASK.ink}>wobble</Hand>
			</div> : null}
			{/* stage C: the runs side by side, with our die */}
			{fr >= sideAt ? <>
				{PANELS.map((p, i) => {
					const x = 50 + i * 455;
					const g = barGeom(x, 230, 430, 400, 6, false);
					return <React.Fragment key={i}>
						<FrameSvg style={{opacity: prog(fr, sideAt, 14)}}><text x={g.left} y={210} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: p.sim ? MODEL.ink : DATA.ink}}>{p.title}{p.sim ? ' (simulated)' : ''}</text></FrameSvg>
						<ProbabilityBars x={x} y={230} width={430} height={400} labels={['1', '2', '3', '4', '5', '6']} values={p.vals} max={50} role={p.sim ? 'b' : 'a'} refLine={{value: 200 / 6, at: sideAt}} highlight={{index: p.far, at: k.is, role: 'k'}} at={sideAt} labelSize={30} />
						<Hand x={g.left} y={650} at={k.is + 6 * i} size={36} color={p.sim ? INK : DATA.ink}>{p.note}</Hand>
					</React.Fragment>;
				})}
				<Hand x={96} y={712} at={k.happens} size={42} color={INK}>a gap this size happens easily with a fair die</Hand>
				<AnswerBox x={96} y={772} at={k.strong - 30} size={46}>not strong evidence of an unfair die</AnswerBox>
				<Hand x={96} y={880} at={k.illus} size={34} color={POS}>3 simulated runs: an illustration, not a formal test</Hand>
				<TumblingDie x={1290} y={720} w={200} from={0} to={0} at={sideAt} />
				<RedDie x={1600} y={720} w={200} at={sideAt} />
			</> : null}
		</>
	);
};

// ---------- 7. generating a distribution: three coin tosses ----------
const SEQ = ['HHH', 'HHT', 'HTH', 'THH', 'HTT', 'THT', 'TTH', 'TTT'].map(s => ({label: s, value: s.split('').filter(c => c === 'H').length}));
const COLS = [0, 1, 2, 3].map((v, i) => ({value: v, x: 1170 + i * 180}));
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const step = fr >= k.step3 ? 3 : fr >= k.step2 ? 2 : fr >= k.step1 ? 1 : 0;
	const S = (n: number, t: string) => <span style={{color: step === n ? ASK.ink : INK, opacity: step === 0 || step === n ? 1 : 0.75}}>{t}</span>;
	const melt = k.p1 + 30, base = 880, unit = 70;
	const yo = prog(fr, melt, 20);
	return (
		<>
			<Task x={96} y={150} w={1728} at={-30} size={40}>A fair coin is tossed three times. X = number of heads. Find the distribution of X.</Task>
			<Framed x={96} y={290} at={-30} size={38}>{S(1, '1  List the values')}   ·   {S(2, '2  Find each probability')}   ·   {S(3, '3  Check')}</Framed>
			<Plate plate={COIN_H} x={110} y={410} w={190} />
			<Plate plate={COIN_T} x={320} y={410} w={190} />
			<FrameSvg><text x={205} y={640} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}}>H</text><text x={415} y={640} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}}>T</text></FrameSvg>
			<Chip x={540} y={430} at={k.each} out={k.eight} size={44} color={INK}>HTH  →  X = 2</Chip>
			<Hand x={540} y={530} at={k.each + 10} out={k.eight} size={40} color={ASK.ink}>one sequence, one value</Hand>
			{/* the value axis, then the eight sequences sorted into columns that melt into bars */}
			<FrameSvg style={{opacity: prog(fr, k.can, 12)}}>
				<line x1={COLS[0].x - 110} x2={COLS[3].x + 110} y1={base} y2={base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				{COLS.map((c, i) => <text key={c.value} x={c.x} y={base + 46} textAnchor="middle" opacity={prog(fr, [k.can + 8, k.can + 22, k.can + 40, k.three][i], 8)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>{c.value}</text>)}
			</FrameSvg>
			<FrameSvg style={{opacity: yo}}>
				<line x1={COLS[0].x - 110} x2={COLS[0].x - 110} y1={base - 4 * unit - 20} y2={base} stroke={INK} strokeWidth={3.5} />
				{[1, 2, 3, 4].map(n => <g key={n}><line x1={COLS[0].x - 122} x2={COLS[0].x - 110} y1={base - n * unit} y2={base - n * unit} stroke={INK} strokeWidth={3} /><text x={COLS[0].x - 130} y={base - n * unit + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{n}/8</text></g>)}
				{COLS.map(c => {const n = SEQ.filter(s => s.value === c.value).length; return <text key={c.value} x={c.x} y={base - n * unit - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: MODEL.ink}}>{n}/8</text>;})}
			</FrameSvg>
			<OutcomeSort x={96} y={660} items={SEQ} gridCols={4} chipW={150} chipH={64} columns={COLS} baseY={base} sortAt={k.head} stagger={6} dur={28} toBars={{at: melt, barW: 120, role: 'b', countText: false}} at={k.each} size={40} />
			<Table x={96} y={656} at={melt} size={42} colW={120} headW={150} rows={[{head: 'x', cells: ['0', '1', '2', '3']}, {head: 'P(x)', cells: ['1/8', '3/8', '3/8', '1/8'], color: MODEL.ink, cellAt: [0, 6, 12, 18].map(d => melt + d)}]} />
			<div style={{opacity: 1 - prog(fr, k.graph, 12)}}><Slip x={640} y={420} at={k.p1 + 40} size={42} caption="four values, not equally likely">P(x) = 1/4 each</Slip></div>
			<AnswerBox x={96} y={820} at={k.check} size={44}>1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1</AnswerBox>
			{fr >= k.sym ? <FrameSvg><line x1={(COLS[1].x + COLS[2].x) / 2} x2={(COLS[1].x + COLS[2].x) / 2} y1={base - 4 * unit - 10} y2={base + 6} stroke={ASK.stroke} strokeWidth={5} strokeDasharray="14 9" opacity={prog(fr, k.sym, 12)} /></FrameSvg> : null}
			<Hand x={(COLS[1].x + COLS[2].x) / 2 - 90} y={base - 4 * unit - 74} at={k.sym} size={44} color={ASK.ink}>symmetric</Hand>
			<Hand x={COLS[0].x - 40} y={base - 3 * unit - 10} at={k.times} size={46} color={ASK.ink}>× 3</Hand>
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.1});
	return (
		<>
			<FramedCard x={160} y={150} w={1600} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 220, top: 172}}>Memory aid</div>
			<RedDie x={240} y={280} w={240} />
			<OutcomeDrop columns={[0, 1, 2, 3, 4, 5].map(i => ({x: 230 + i * 52, label: String(i + 1)}))} baseY={820} items={ROLLS.slice(0, 18)} pace={{at: k.one, slow: 18, every: 12, until: k.one + 220}} from={[360, 420]} token={28} gap={4} role="a" />
			<div style={{...hand(104), left: 640, top: 250, opacity: prog(fr, k.here + 6, 12)}}>One trial, one value.</div>
			<div style={{position: 'absolute', left: 640, top: 440, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, lineHeight: 1.35}}>
				<div style={{opacity: prog(fr, k.counts, 12)}}>So the counts add to n,</div>
				<div style={{opacity: prog(fr, k.probs, 12)}}>and ΣP(x) = 1.</div>
			</div>
			<div style={{...hand(40, POS), left: 640, top: 680, width: 1040, opacity: prog(fr, k.if, 12)}}>doesn't add to 1? check the list of values, and the counting</div>
		</>
	);
};
export {INK_SOFT};
