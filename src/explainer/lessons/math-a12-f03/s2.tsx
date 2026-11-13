// Scenes 5 to 9: worked examples (S₂₀ of 3, 7, 11, … = 820; 50 to 200: 151 terms, 18 875), n as the unknown (first
// exceeds 500 at 14 terms: columns against the 500 line), a sum with two answers (n(12 − n) = 32: n = 4 or 8, the sum
// climbs to 36 and comes back down) and the memory aid (average of first and last, times how many; arithmetic only).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, HandText, INK, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, TermPlot, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8, K9} from './cuemap';
import {FORM1, FORM2, Framed, MiniShape} from './s1';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BoxCard, Chip, FramedCard, GREEN, Hand, Ladder, POS, RED, Row, Slip, Stack, TEAL, Task, apSum} from './parts';

const NEVER = 1e9;
const Givens: React.FC<{x?: number; y?: number; w?: number; lines: React.ReactNode[]}> = ({x = 96, y = 300, w = 440, lines}) => (
	<BoxCard x={x} y={y} w={w} at={6} size={46} title="givens">{lines.map((l, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{l}</div>)}</BoxCard>
);

// ---------- 5. worked example: twenty terms ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Find the sum of the first 20 terms of 3, 7, 11, …</Task>
			<Givens lines={[<span key="a" style={{color: BLUE}}>a = 3</span>, <span key="d" style={{color: AMBER}}>d = 4</span>, <span key="n" style={{color: POS}}>n = 20</span>]} />
			<div style={{position: 'absolute', left: 580, top: 300, borderRadius: 24, boxShadow: `0 0 0 ${12 * vis(fr, k.second, k.thats + 30, 10)}px rgba(248,232,200,0.95)`}}><Framed x={0} y={0} at={-30} size={50}>{FORM2}</Framed></div>
			<Ladder x={580} y={440} cardW={140} h={92} gap={20} size={46} values={['3', '7', '11', '…', '79']} dropAt={[0, 6, 12, 18, k.t20 + 20]} labels={i => ['n = 1', 'n = 2', 'n = 3', '', 'n = 20'][i]} slots={5} />
			<BoxCard x={1080} y={600} w={740} at={10} out={k.twenty + 10} size={40} title="plan">
				<div>The last term is not given,</div>
				<div>so use the second form with</div>
				<div><span style={{color: BLUE}}>a = 3</span>, <span style={{color: AMBER}}>d = 4</span>, n = 20.</div>
			</BoxCard>
			<Row x={96} y={620} at={k.thats} size={52} dim={prog(fr, k.so, 12)} small={40}>S₂₀ = (20/2)[2 × 3 + 19 × 4]</Row>
			<Row x={96} y={700} at={k.nineteen} size={52}>{'    '}= 10(6 + 76) = 10 × 82</Row>
			<AnswerBox x={96} y={790} at={k.twenty} size={56}>S₂₀ = 820</AnswerBox>
			<Row x={1080} y={620} at={k.t20} size={40} color={POS}>check: a₂₀ = 3 + 19 × 4 = 79</Row>
			<Row x={1080} y={690} at={k.and} size={40} color={POS}>S₂₀ = 10(3 + 79) = 820  ✓</Row>
			<Slip x={1080} y={790} at={k.twenty + 30} size={40} caption="20 steps: one too many">10(6 + 20 × 4) = 860</Slip>
		</>
	);
};

// ---------- 6. worked example: fifty to two hundred ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Find the sum of all the whole numbers from 50 to 200.</Task>
			<Givens lines={[<span key="a" style={{color: BLUE}}>a = 50</span>, <span key="l" style={{color: BLUE}}>aₙ = 200</span>, <span key="d" style={{color: AMBER}}>d = 1</span>]} />
			<div style={{position: 'absolute', left: 620, top: 300, borderRadius: 24, boxShadow: `0 0 0 ${12 * vis(fr, k.first + 40, k.how, 10)}px rgba(248,232,200,0.95)`}}><Framed x={0} y={0} at={-30} size={50}>{FORM1}</Framed></div>
			<Ladder x={620} y={440} cardW={150} h={92} gap={20} size={46} values={['50', '51', '52', '…', '200']} dropAt={[k.now + 20, k.now + 26, k.now + 32, k.now + 38, k.now + 50]} labels={i => ['1st', '2nd', '3rd', '', 'last'][i]} />
			<Slip x={96} y={520} at={k.how + 30} strikeAt={k.f51 - 10} size={48} caption="not 150">n = 150?</Slip>
			<Row x={96} y={680} at={k.f51} size={52}>n = 200 − 50 + 1 = <span style={{color: POS}}>151</span></Row>
			<Hand x={96} y={762} at={k.f51 + 10} size={42} color={AMBER}>count: top − bottom + 1</Hand>
			<BoxCard x={1000} y={600} w={820} at={10} out={k.so - 6} size={40} title="plan">
				<div>First and last terms are known:</div>
				<div>use the first form. It needs n,</div>
				<div>the number of terms from 50 to 200.</div>
			</BoxCard>
			<Row x={1000} y={620} at={k.so} size={52} dim={prog(fr, k.thats, 12)} small={40}>S = (151/2)(50 + 200)</Row>
			<Row x={1000} y={700} at={k.thats} size={52}>{'  '}= 151 × 125</Row>
			<AnswerBox x={1000} y={790} at={k.f75 - 56} size={56}>S = 18 875</AnswerBox>
		</>
	);
};

// ---------- 7. when n is the unknown ----------
const T7 = (n: number) => 4 + 5 * (n - 1);
const ST7 = {x: 96, base: 960, blockW: 44, gap: 13, unit: 1.2};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const terms = Array.from({length: 14}, (_, i) => T7(i + 1));
	const builds = [...Array.from({length: 13}, (_, j) => k.how + 20 + j * 20), k.f14];
	const n = builds.filter(b => fr >= b).length;
	const lineY = ST7.base - 500 * ST7.unit;
	const cx = (j: number) => ST7.x + j * (ST7.blockW + ST7.gap) + ST7.blockW / 2;
	return (
		<>
			<Task x={96} y={150} w={1100} at={0} size={40}>How many terms of 4 + 9 + 14 + … are needed for the sum to first exceed 500?</Task>
			<BoxCard x={960} y={340} w={880} at={10} out={k.so - 6} size={46} title="plan">
				<div>Write Sₙ, set Sₙ &gt; 500 and solve.</div>
				<div>n counts terms, so it must be a whole number.</div>
			</BoxCard>
			<BoxCard x={1240} y={150} w={580} at={6} size={46} title="givens"><div style={{fontWeight: 800}}><span style={{color: BLUE}}>a = 4</span>,  <span style={{color: AMBER}}>d = 5</span></div></BoxCard>
			<Stack x={ST7.x} base={ST7.base} terms={terms} buildAt={builds} blockW={ST7.blockW} gap={ST7.gap} unit={ST7.unit} labels={false} readouts={false} />
			<FrameSvg>
				<line x1={70} x2={900} y1={lineY} y2={lineY} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<text x={80} y={lineY - 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>500</text>
				{[[12, k.t13, '442'], [13, k.f14 + 10, '511']].map(([j, a, t]) => {const top = ST7.base - apSum(4, 5, (j as number) + 1) * ST7.unit; return <g key={j} opacity={prog(fr, a as number, 12)}><ellipse cx={cx(j as number)} cy={top + 30} rx={40} ry={56} fill="none" stroke={(j as number) === 13 ? GREEN : AMBER_STROKE} strokeWidth={5} /><text x={(j as number) === 13 ? cx(j as number) - 30 : cx(j as number)} y={(j as number) === 13 ? top + 34 : top + 120} textAnchor={(j as number) === 13 ? 'end' : 'middle'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}} stroke="#fffdf8" strokeWidth={12} strokeLinejoin="round" paintOrder="stroke">{t}</text></g>;})}
				<text x={cx(12)} y={ST7.base + 40} textAnchor="middle" opacity={prog(fr, k.t13, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: POS}}>13</text>
				<text x={cx(13)} y={ST7.base + 40} textAnchor="middle" opacity={prog(fr, k.f14, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: POS}}>14</text>
			</FrameSvg>
			<Row x={960} y={300} at={k.so} size={48} dim={prog(fr, k.set, 12)} small={38}><span style={{color: TEAL}}>Sₙ</span> = (n/2)[8 + 5(n − 1)]</Row>
			<Row x={960} y={372} at={k.so + 40} size={52} dim={prog(fr, k.set, 12)} small={38}>{'    '}= (n/2)(5n + 3)</Row>
			<Row x={960} y={450} at={k.set} size={52} dim={prog(fr, k.its, 12)} small={38}>(n/2)(5n + 3) &gt; 500</Row>
			<Row x={960} y={530} at={k.set + 40} size={52} dim={prog(fr, k.but, 12)} small={38}>5n² + 3n − 1000 &gt; 0</Row>
			<Row x={960} y={610} at={k.its} size={48}>n &gt; (−3 + √20009)/10 <span style={{color: POS, fontSize: 40, opacity: prog(fr, k.five, 12)}}>≈ 13.85</span></Row>
			<LiveReadoutBoard x={960} y={700} width={420} at={k.how} inline size={52} labelSize={30} rows={[
				{label: 'terms n', value: n, digits: 0, role: 'inner'},
				{label: 'sum Sₙ', value: n ? apSum(4, 5, n) : 0, digits: 0, role: 'b'},
			]} />
			<Hand x={1420} y={700} at={k.but} size={42} color={AMBER} w={420}>n must be a whole number</Hand>
			<AnswerBox x={1420} y={790} at={k.f14 + 30} size={52}>14 terms</AnswerBox>
			<Hand x={960} y={900} at={k.because} size={42} color={TEAL}>every term positive: Sₙ only grows</Hand>
		</>
	);
};

// ---------- 8. a sum with two answers ----------
const S8 = (n: number) => apSum(11, -2, n);
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const p1 = (i: number) => k.here + 20 + i * 45;
	const p2 = [837 - 0, 860, 887, 911].map((v, i) => [k.next + 46, k.next + 69, k.next + 83, k.next + 120][i]);
	const times = [p1(0), p1(1), p1(2), p1(3), ...p2, k.again + 60];
	const n = times.filter(t => fr >= t).length;
	const termAt = (m: number) => 11 - 2 * (m - 1);
	return (
		<>
			<Task x={96} y={150} w={1100} at={0} size={44}>How many terms of 11 + 9 + 7 + … add up to 32?</Task>
			<BoxCard x={1240} y={150} w={580} at={6} size={46} title="givens"><div style={{fontWeight: 800}}><span style={{color: BLUE}}>a = 11</span>,  <span style={{color: AMBER}}>d = −2</span></div></BoxCard>
			<TermPlot x={40} y={280} width={880} height={620} window={{x: [-0.2, 9.7], y: [-2, 40]}} nRange={[1, 9]} at={-30}
				series={[1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => ({term: (q: number) => (q === m ? S8(q) : NaN), at: times[m - 1] - (m - 1) * 0, stagger: 0, color: TEAL}))}
				refLine={{Y: 32, label: '32', at: -30, color: INK}} xTicks={[1, 2, 3, 4, 5, 6, 7, 8, 9]} yTicks={[10, 20, 32, 36]} xLabel="n" yLabel="Sₙ">
				{(m: PlotMap) => <>{[4, 8].map(q => {const [px, py] = m.p(q, 32); return <circle key={q} cx={px} cy={py} r={26} fill="none" stroke={GREEN} strokeWidth={6} opacity={prog(fr, q === 4 ? k.four : k.again, 12)} />;})}</>}
			</TermPlot>
			<Row x={960} y={290} at={k.so} size={46} dim={prog(fr, k.set, 12)} small={36}><span style={{color: TEAL}}>Sₙ</span> = (n/2)[22 − 2(n − 1)]</Row>
			<Row x={960} y={356} at={k.so + 40} size={52} dim={prog(fr, k.set, 12)} small={38}>{'    '}= n(12 − n)</Row>
			<Row x={960} y={430} at={k.set} size={52} dim={prog(fr, k.eight, 12)} small={38}>n(12 − n) = 32  →  n² − 12n + 32 = 0</Row>
			<Row x={960} y={510} at={k.roots} size={52}>(n − 4)(n − 8) = 0: <span style={{color: GREEN}}>n = 4 or 8</span></Row>
			<Ladder x={960} y={620} cardW={110} h={90} gap={16} size={46} values={['3', '1', '−1', '−3']} dropAt={p2} />
			<Hand x={960} y={580} at={k.next} out={k.add} size={36} color={POS}>terms 5 to 8:</Hand>
			<Row x={960} y={724} at={k.add} size={42} color={TEAL}>3 + 1 + (−1) + (−3) = 0</Row>
			<LiveReadoutBoard x={1500} y={600} width={340} at={k.here} inline size={48} labelSize={30} rows={[
				{label: 'n', value: Math.max(1, n), digits: 0, role: 'inner'},
				{label: 'aₙ', value: termAt(Math.max(1, n)), digits: 0, role: 'a'},
				{label: 'Sₙ', value: S8(Math.max(1, n)), digits: 0, role: 'b'},
			]} />
			<Hand x={960} y={800} at={k.when} size={42} color={RED} w={540}>terms go negative: the sum comes back down</Hand>
			<Chip x={1500} y={900} at={k.check} size={40} color={GREEN}>check every root</Chip>
		</>
	);
};

// ---------- 9. memory aid ----------
export const AID3 = ['Average of first and last,', 'times how many.', 'Arithmetic only.'] as const;
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	return (
		<>
			<FramedCard x={110} y={150} w={1700} h={860} at={0} />
			<div style={{position: 'absolute', left: 160, top: 172}}><HandText text="Memory aid" at={4} size={50} color={POS} /></div>
			<MiniShape x={170} y={270} S={0.34} />
			<Hand x={170} y={490} at={0} size={40} color={POS} w={740}>{'pairs fill equal rows: n rows of a + aₙ, halved'}</Hand>
			{AID3.map((t, i) => <div key={i} style={{position: 'absolute', left: 980, top: 250 + i * 96}}><HandText text={t} at={[k.an, k.an + 40, k.its][i]} size={72} cps={22} /></div>)}
			<Row x={170} y={620} at={k.because} size={56} color={BLUE}>1 + 2 + 4</Row>
			<Row x={170} y={710} at={k.other} size={44} color={TEAL}>pairs: 1 + 4 = 5,  2 + 2 = 4: not equal</Row>
			<Row x={170} y={810} at={k.seven} size={60} color={GREEN}>1 + 2 + 4 = 7</Row>
			<Slip x={1000} y={620} at={k.gives} strikeAt={k.seven} size={48} caption="not an arithmetic sequence">(1 + 4)/2 × 3 = 7.5</Slip>
		</>
	);
};
export {NEVER};
