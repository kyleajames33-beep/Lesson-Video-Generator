// Scenes 5 to 8: using the uniform model by counting values (the digit, then 5 to 20 with both ends counted), the
// count not the size (5, 10, ..., 25; working back from 0.04 and 0.3), why finitely many (bars shrinking as 1/n while
// the total stays 1; the runaway total) and the memory aid (same count behind every bar).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, MarkSpan, ProbabilityBars, SceneHeading} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ASK, AnswerBox, BAD, Chip, DeskCalendar, FINAL_COUNTS, Framed, FramedCard, GOOD, Hand, MODEL, NumberLine, POS, Row, Slip, Task, YAxis} from './parts';

// ---------- 5. using the uniform model: count the values ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const B = {x: 110, y: 290, width: 820, height: 520};
	const stageB = k.suppose;
	return (
		<>
			<SceneHeading text="Using a uniform model: count the values" at={4} size={48} />
			<Framed x={96} y={160} at={-30} size={40}>Uniform: P(event) = (number of values in it) ÷ n</Framed>
			<YAxis x={B.x} y={B.y} w={B.width} h={B.height} n={10} max={0.15} ticks={[0.05, 0.1].map(v => ({value: v, label: String(v)}))} out={stageB} />
			<ProbabilityBars {...B} labels={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']} values={Array(10).fill(0.1)} max={0.15} xLabel="digit" yLabel="P(x)" valueText={() => '1/10'} valueSize={28}
				roles={Array.from({length: 10}, (_, i) => (i >= 7 && fr >= k.tenths ? 'k' : 'b'))} out={stageB} />
			<Hand x={1000} y={320} at={k.digit} out={stageB} size={40} color={MODEL.ink}>a random digit 0 to 9: n = 10</Hand>
			<Hand x={1000} y={390} at={k.digit + 40} out={stageB} size={40} color={ASK.ink}>count 7, 8 and 9</Hand>
			<Row x={1000} y={470} at={k.tenths} out={stageB} size={52}>P(X ≥ 7) = 3/10</Row>
			<Task x={96} y={290} w={1728} at={stageB} size={40}>X is uniform on the whole numbers 5 to 20. Find P(X &gt; 16).</Task>
			<Chip x={96} y={410} at={stageB + 10} size={40} color={INK}>values: 5, 6, …, 20</Chip>
			<Slip x={96} y={500} at={k.fifteen} strikeAt={k.fifteen + 30} size={42} caption="misses one end">20 − 5 = 15 values</Slip>
			<Row x={96} y={650} at={k.both + 20} size={52}>n = 20 − 5 + 1 = 16</Row>
			<Hand x={800} y={664} at={k.both} size={42} color={ASK.ink}>both ends count</Hand>
			<AnswerBox x={1100} y={640} at={k.quarter} size={50}>P(X &gt; 16) = 4/16 = 1/4</AnswerBox>
			<Hand x={1100} y={560} at={k.then} size={40} color={ASK.ink}>17, 18, 19 and 20: 4 values</Hand>
			<NumberLine x={96} y={860} w={1728} from={4} to={21} dots={Array.from({length: 16}, (_, i) => 5 + i)} counts={{at: k.values - 30, every: 3}} amber={{values: [17, 18, 19, 20], at: k.then}} at={stageB} />
		</>
	);
};

// ---------- 6. the count, not the size ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const B = {x: 110, y: 290, width: 800, height: 560};
	return (
		<>
			<SceneHeading text="The count, not the size" at={4} size={52} />
			<Chip x={96} y={170} at={k.say} size={40} color={INK}>X uniform on 5, 10, 15, 20, 25</Chip>
			<YAxis x={B.x} y={B.y} w={B.width} h={B.height} n={5} max={0.4} ticks={[0.1, 0.2, 0.3, 0.4].map(v => ({value: v, label: String(v)}))} />
			<ProbabilityBars {...B} labels={['5', '10', '15', '20', '25']} values={[0, 0, 0, 0, 0]} max={0.4} xLabel="x" ghosts={[5, 10, 15, 20, 25].map(v => v / 75)} at={k.likely - 6} />
			<ProbabilityBars {...B} labels={['5', '10', '15', '20', '25']} values={Array(5).fill(0.2)} max={0.4} role="b" xLabel="x" yLabel="P(x)" valueText={() => '1/5'} highlight={{index: 2, at: k.p15, role: 'k'}} />
			<Hand x={540} y={300} at={k.likely} size={34} color={BAD.ink}>dashed: sizes over 75</Hand>
			<Row x={1000} y={170} at={k.p15} size={52}>P(15) = 1/5</Row>
			<Hand x={1400} y={184} at={k.because} size={40} color={ASK.ink}>5 values</Hand>
			<Slip x={1000} y={270} at={k.that - 10} strikeAt={k.likely} size={38} caption="uses the sizes: P(25) would be 25/75">P(15) = 15/75, out of a total of 75</Slip>
			<Hand x={1000} y={420} at={k.likely + 6} size={42} color={ASK.ink}>sizes don't matter</Hand>
			<Row x={1000} y={510} at={k.if} out={k.n} size={46}>every value: 0.04</Row>
			<AnswerBox x={1000} y={500} at={k.n} size={46}>n = 1/0.04 = 25 values</AnswerBox>
			<Hand x={1000} y={600} at={k.n + 40} size={38} color={GOOD.ink}>check: 25 × 0.04 = 1</Hand>
			<Row x={1000} y={680} at={k.but} size={46}>each 0.3?  n = 1/0.3 = <MarkSpan kind="circle" at={k.number} role="mistake" width={5}>10/3</MarkSpan></Row>
			<Hand x={1000} y={756} at={k.number} size={38} color={BAD.ink}>not a whole number: no uniform model</Hand>
			<Hand x={1000} y={830} at={k.group} size={34} color={POS} w={860}>a group of values can still have probability 0.3</Hand>
		</>
	);
};

// ---------- 7. why finitely many ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const n = fr < k.twelve ? 6 : fr < k.t24 ? 12 : fr < k.t48 ? 24 : 48;
	const B = {x: 110, y: 170, width: 1140, height: 560};
	const grow = Math.max(0, Math.min(14, Math.floor((fr - k.bigger - 20) / 7)));
	const T = (s: number, c: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, fill: c});
	return (
		<>
			<SceneHeading text="Why finitely many values" at={4} size={52} />
			<YAxis x={B.x} y={B.y} w={B.width} h={B.height} n={n} max={0.2} ticks={[0.05, 0.1, 0.15, 0.2].map(v => ({value: v, label: String(v)}))} xLabel={false} />
			<ProbabilityBars key={n} {...B} labels={Array(n).fill('')} values={Array(n).fill(1 / n)} max={0.2} role="b" yLabel="P(x)" grow={{at: [k.watch, k.twelve, k.t24, k.t48][[6, 12, 24, 48].indexOf(n)], dur: 14, stagger: 0}} />
			<FrameSvg>
				<rect x={140} y={760} width={980} height={64} fill={MODEL.soft} stroke={INK} strokeWidth={3} />
				{Array.from({length: n - 1}, (_, i) => <line key={i} x1={140 + ((i + 1) / n) * 980} x2={140 + ((i + 1) / n) * 980} y1={760} y2={824} stroke={MODEL.ink} strokeWidth={2} />)}
				<text x={1140} y={806} style={T(46, INK)}>total = 1</text>
			</FrameSvg>
			<Chip x={1320} y={180} at={k.watch} size={44} color={MODEL.ink}>{`n = ${n}: each 1/${n}`}</Chip>
			<Hand x={1320} y={290} at={k.shorter} size={52} color={ASK.ink}>1/n → 0</Hand>
			<Row x={1320} y={400} at={k.zero} size={40}><MarkSpan kind="strike" at={k.either} role="mistake" width={5}>c = 0: total 0</MarkSpan></Row>
			<Row x={1320} y={470} at={k.bigger} size={40}><MarkSpan kind="strike" at={k.either + 6} role="mistake" width={5}>c &gt; 0: total passes 1</MarkSpan></Row>
			{fr >= k.bigger ? <FrameSvg style={{opacity: prog(fr, k.bigger, 12)}}>
				{Array.from({length: grow}, (_, i) => <rect key={i} x={1330 + i * 36} y={560} width={34} height={50} fill={i >= 10 ? BAD.stroke : MODEL.stroke} />)}
				<line x1={1330 + 360} x2={1330 + 360} y1={540} y2={630} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
				<text x={1330 + 360} y={666} textAnchor="middle" style={T(34, INK)}>1</text>
			</FrameSvg> : null}
			<Hand x={1320} y={700} at={k.either + 10} size={38} color={BAD.ink} w={540}>no uniform model on infinitely many values</Hand>
			<Hand x={140} y={860} at={k.thats} size={38} color={INK}>a discrete uniform distribution needs finitely many values</Hand>
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
			<DeskCalendar x={250} y={250} w={240} date="31" />
			<ProbabilityBars x={190} y={500} width={420} height={300} labels={Array(31).fill('')} values={FINAL_COUNTS} max={14} role="b" barFraction={0.7} highlight={{index: 30, at: k.same, role: 'k'}} />
			<div style={{...hand(38, ASK.ink), left: 230, top: 820, opacity: prog(fr, k.same + 10, 12)}}>7 pages, not 12</div>
			<div style={{...hand(92), left: 680, top: 240, opacity: prog(fr, k.here + 6, 12)}}>Same count behind every bar.</div>
			<div style={{position: 'absolute', left: 680, top: 410, width: 1020, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, lineHeight: 1.3, opacity: prog(fr, k.look, 12)}}>Count the equally likely outcomes behind each value.</div>
			<div style={{...hand(40, POS), left: 680, top: 580, width: 1000, opacity: prog(fr, k.only, 12)}}>only if those outcomes really are equally likely</div>
			<div style={{...hand(40, GOOD.ink), left: 680, top: 660, opacity: prog(fr, k.if, 12)}}>every count the same: X is uniform</div>
			<div style={{...hand(40, BAD.ink), left: 680, top: 740, opacity: prog(fr, k.cal, 12)}}>calendar dates and two-dice sums: not uniform</div>
		</>
	);
};
