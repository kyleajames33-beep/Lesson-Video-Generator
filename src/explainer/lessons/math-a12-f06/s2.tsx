// Scenes 6 to 9: a sum in sigma notation (∑ 3 × 2ᵏ⁻¹ for k = 1 to 6: 3 × 63 = 189), a negative ratio
// (1 − 3 + 9 − …, six terms: (1 − 729)/4 = −182), a ratio of a half (64 + 32 + …, eight terms: 128 − ½ = 127½, just
// short of 128) and the memory aid (times r shifts every term one step along; subtract and only the ends are left).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, Pow, ShiftCancelRows, TermPlot, smooth} from '../../math/studio';
import type {PlotMap, ShiftTerm} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {SN_A, SN_B} from './s1';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BoxCard, Frac, Framed, FramedCard, GREEN, GrainStrip, Hand, Ladder, MiniLadder, POS, Row, Sb, Sig, SlipLine, Stack, TEAL, Task} from './parts';
import type {Pile} from './parts';

const Givens: React.FC<{x?: number; y: number; w?: number; lines: readonly {node: React.ReactNode; at: number}[]}> = ({x = 96, y, w = 520, lines}) => {
	const fr = useCurrentFrame();
	return <BoxCard x={x} y={y} w={w} at={6} size={46} title="givens">{lines.map((l, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre', opacity: 0.35 + 0.65 * prog(fr, l.at, 10)}}>{l.node}</div>)}</BoxCard>;
};

// ---------- 6. a sum in sigma notation ----------
const L6 = {x: 700, y: 380, cardW: 150, gap: 40, h: 100};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const drop = [k.rule + 20, k.rule + 36, k.rule + 52, k.rule + 68, k.rule + 84, k.rule + 100];
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={46}><span style={{display: 'inline-flex', alignItems: 'center', whiteSpace: 'pre'}}>Evaluate <Sig lo="k = 1" hi="6" size={46} /> 3 × 2<Pow>k − 1</Pow>.</span></Task>
			<Givens y={380} lines={[{node: <span style={{color: BLUE}}>a = 3</span>, at: k.a}, {node: <span style={{color: AMBER}}>r = 2</span>, at: k.r}, {node: <span style={{color: POS}}>n = 6 terms</span>, at: k.six}]} />
			<Hand x={L6.x} y={332} at={-30} size={40} color={POS}>the terms, k = 1 to 6:</Hand>
			<Ladder x={L6.x} y={L6.y} cardW={L6.cardW} h={L6.h} gap={L6.gap} size={50} values={['3', '6', '12', '24', '48', '96']} dropAt={drop} slots={6} labels={i => `k = ${i + 1}`} />
			<Hand x={L6.x} y={540} at={k.counter} size={42} color={POS}>counter from 1 to 6:  6 − 1 + 1 = 6 terms</Hand>
			<BoxCard x={96} y={640} w={560} at={10} out={k.thats - 8} size={40} title="plan">
				<div>Read a, r and n.</div>
				<div>Then use the sum formula.</div>
			</BoxCard>
			<Hand x={L6.x} y={790} at={-30} size={44} color={POS} w={1000}>∑ means add: put k = 1, 2, … up to 6 into the rule, then add the results</Hand>
			<Framed x={L6.x} y={610} at={k.use} out={k.adding - 6} size={44}>{SN_A}</Framed>
			<Hand x={L6.x + 460} y={650} at={k.since} out={k.adding - 6} size={42} color={AMBER}>r &gt; 1: the r − 1 form</Hand>
			<Row x={96} y={640} at={k.thats} size={50} dim={prog(fr, k.so, 12)} small={44}><span style={{color: TEAL}}>S₆</span> = <Frac n={<>3(2<Pow>6</Pow> − 1)</>} d="2 − 1" /></Row>
			<Row x={96} y={770} at={k.t64} size={52}>{'    '}= 3 × 63</Row>
			<AnswerBox x={96} y={852} at={k.ans} size={54}>189</AnswerBox>
			<Row x={L6.x} y={640} at={k.adding} size={48} color={TEAL}>3 + 6 + 12 + 24 + 48 + 96<span style={{opacity: prog(fr, k.same, 10)}}> = 189  ✓</span></Row>
		</>
	);
};

// ---------- 7. a negative ratio ----------
const s7 = (n: number) => Array.from({length: n}, (_, i) => (-3) ** i).reduce((a, b) => a + b, 0);
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const mark = (m: PlotMap) => {const [x6, y6] = m.p(6, -182); return <>
			{[2, 4].map(n => {const [px, py] = m.p(n, s7(n)); return <text key={n} x={px} y={py + 58} textAnchor="middle" opacity={prog(fr, k.find + 76 + (n - 1) * 26, 10)} stroke={CARD} strokeWidth={8} paintOrder="stroke" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: BLUE}}>{String(s7(n)).replace('-', '−')}</text>;})}
			{fr >= k.ans ? <circle cx={x6} cy={y6} r={17} fill="none" stroke={GREEN} strokeWidth={5} opacity={prog(fr, k.ans, 12)} /> : null}
		</>;};
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Find the sum of the first 6 terms of 1 − 3 + 9 − 27 + …</Task>
			<Givens y={270} w={560} lines={[{node: <span style={{color: BLUE}}>a = 1</span>, at: k.here}, {node: <span style={{color: AMBER}}>r = −3 ÷ 1 = −3</span>, at: k.r}, {node: <span style={{color: POS}}>n = 6</span>, at: k.here + 20}]} />
			<Framed x={700} y={280} at={k.use} size={44}>{SN_B}</Framed>
			<BoxCard x={96} y={540} w={860} at={10} out={k.brackets - 8} size={42} title="plan">
				<div>Read a and r. Bracket the negative r</div>
				<div>before taking its power.</div>
			</BoxCard>
			<Row x={96} y={524} at={k.brackets} size={50} dim={prog(fr, k.top, 12)} small={42}><span style={{color: TEAL}}>S₆</span> = <Frac n={<>1(1 − <span style={{color: AMBER}}>(−3)</span><Pow>6</Pow>)</>} d="1 − (−3)" /></Row>
			<Row x={96} y={652} at={k.m36} size={50}>(−3)<Pow>6</Pow><span style={{opacity: prog(fr, k.t729, 10)}}> = 729</span></Row>
			<SlipLine x={480} y={646} at={k.because} size={40} caption="brackets first">−3<Pow>6</Pow> = −729</SlipLine>
			<Row x={96} y={736} at={k.top} size={50}>{'    '}= <Frac n="1 − 729" d={<span style={{opacity: prog(fr, k.four, 10)}}>4</span>} /></Row>
			<AnswerBox x={96} y={866} at={k.sum} size={52}>−728 ÷ 4<span style={{opacity: prog(fr, k.ans, 10)}}> = −182</span></AnswerBox>
			<TermPlot x={1040} y={400} width={840} height={560} window={{x: [0, 6.6], y: [-210, 90]}} nRange={[1, 6]} at={-30} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={[-200, -150, -100, -50, 50].map(v => ({value: v, label: String(v).replace('-', '−')}))} xLabel="" yLabel="running total of n terms"
				series={[{term: s7, color: TEAL, at: k.find + 70, stagger: 26, labels: {at: k.find + 76, text: (n, v) => (n === 2 || n === 4 ? '' : String(v).replace('-', '−'))}}]}>{mark}</TermPlot>
		</>
	);
};

// ---------- 8. a ratio of a half ----------
const C8 = {x: 1340, base: 900, unit: 4, w: 320};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const ly = C8.base - 128 * C8.unit;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Find the sum of the first 8 terms of 64 + 32 + 16 + …</Task>
			<Givens y={270} w={520} lines={[{node: <span style={{color: BLUE}}>a = 64</span>, at: k.here}, {node: <span style={{color: AMBER}}>r = ½</span>, at: k.r}, {node: <span style={{color: POS}}>n = 8</span>, at: k.here + 20}]} />
			<Framed x={660} y={280} at={k.use} size={44}>{SN_B}</Framed>
			<BoxCard x={96} y={540} w={860} at={10} out={k.s64 - 8} size={40} title="plan">
				<div>r is between −1 and 1, so use the 1 − r form.</div>
				<div>Dividing by ½ is the same as doubling.</div>
			</BoxCard>
			<Row x={96} y={524} at={k.s64} size={50} dim={prog(fr, k.thats, 12)} small={42}><span style={{color: TEAL}}>S₈</span> = <Frac n={<>64(1 − (½)<Pow>8</Pow>)</>} d="1 − ½" /></Row>
			<Row x={96} y={652} at={k.thats} size={50} dim={prog(fr, k.t128, 12)} small={42}>{'    '}= 128(1 − <Frac n="1" d="256" />)</Row>
			<Row x={96} y={772} at={k.t128} size={52}>{'    '}= 128 − ½</Row>
			<AnswerBox x={96} y={866} at={k.so} size={52}>S₈ = 255/2 = 127½</AnswerBox>
			<Stack x={C8.x} base={C8.base} terms={[64, 32, 16, 8, 4, 2, 1, 0.5]} buildAt={Array.from({length: 8}, () => k.find + 40)} blockW={C8.w} unit={C8.unit} single={7} labels={false} readouts={false} />
			<FrameSvg>
				<line x1={C8.x - 150} x2={C8.x + C8.w + 60} y1={ly} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<text x={C8.x - 162} y={ly + 13} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>128</text>
				{fr >= k.notice ? <rect x={C8.x - 6} y={ly - 5} width={C8.w + 12} height={2 + 10} rx={4} fill="none" stroke={AMBER_STROKE} strokeWidth={5} opacity={prog(fr, k.notice, 12)} /> : null}
				{[64, 32, 16].map((v, i) => {const top = C8.base - (128 - v) * C8.unit, mid = top + (v * C8.unit) / 2 + 12; return <text key={v} x={C8.x + C8.w / 2} y={mid} textAnchor="middle" opacity={prog(fr, k.find + 60 + i * 8, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: BLUE}}>{v}</text>;})}
			</FrameSvg>
			<Hand x={C8.x - 150} y={ly - 96} at={k.so} size={44} color={TEAL}>8 terms: 127½</Hand>
			<Hand x={1700} y={ly + 30} at={k.close - 30} size={42} color={AMBER} w={190}>only ½ short of 128</Hand>
			<Hand x={660} y={872} at={k.find + 20} size={40} color={POS}>the eight terms, each half the one before</Hand>
			<Ladder x={660} y={776} cardW={66} h={80} gap={12} size={34} values={['64', '32', '16', '8', '4', '2', '1', '½']} dropAt={Array.from({length: 8}, (_, i) => k.find + 24 + i * 6)} />
		</>
	);
};

// ---------- 9. memory aid ----------
export const AID6 = ['Times r shifts every term one step along.', 'Subtract: only the new end and the old start are left.'];
const T9: ShiftTerm[] = [{key: '0', display: 'a', sign: -1}, {key: '1', display: 'ar', sign: -1}, {key: '2', display: 'ar²', sign: -1}, {key: '3', display: 'ar³', sign: -1}];
const D9: ShiftTerm[] = [{key: '1', display: 'ar', sign: 1}, {key: '2', display: 'ar²', sign: 1}, {key: '3', display: 'ar³', sign: 1}, {key: '4', display: 'ar⁴', sign: 1}];
/** Four piles on five squares; `slide` moves them one square along. */
export const AidStrip: React.FC<{x: number; y: number; sq: number; slide: number}> = ({x, y, sq, slide}) => {
	const piles: Pile[] = [0, 1, 2, 3].map(i => ({pos: i + slide, count: 2 ** (i + (slide > 0.5 ? 1 : 0)), of: 2 ** (i + 1), tone: slide > 0.02 ? 'amber' as const : 'blue' as const}));
	return <GrainStrip x={x} y={y} n={5} sq={sq} piles={piles} />;
};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.1});
	const slide = smooth(prog(fr, k.shifts, 40));
	return (
		<>
			<FramedCard x={200} y={140} w={1520} h={810} at={-30} />
			<div style={{...hand(46, POS), left: 260, top: 164}}>Memory aid</div>
			<AidStrip x={270} y={226} sq={170} slide={slide} />
			<div style={{...hand(64), left: 270, top: 424, opacity: prog(fr, k.mult, 12)}}>{AID6[0]}</div>
			<ShiftCancelRows x={270} y={536} colW={230} rowGap={100} columns={['0', '1', '2', '3', '4']} top={T9} bottom={D9} enterAt={[-30, -30]} alignAt={k.shifts} strike={{all: true, at: k.left - 20, stagger: 8}} survivorsAt={k.left} labels={[<>−S<Sb>n</Sb></>, <>rS<Sb>n</Sb></>]} size={58} />
			<div style={{...hand(64), left: 270, top: 740, opacity: prog(fr, k.sub, 12)}}>{AID6[1]}</div>
			<div style={{...hand(52, AMBER), left: 270, top: 846, opacity: prog(fr, k.thats, 12)}}>that is why the formula has  r<Pow>n</Pow> − 1  inside it</div>
			<div style={{...hand(50, POS), left: 1180, top: 270, opacity: prog(fr, k.shifts + 30, 12)}}>{'every pile: one\nsquare along'}</div>
		</>
	);
};
export {CARD, INK_SOFT, Ladder, MiniLadder};
