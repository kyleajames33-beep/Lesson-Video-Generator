// Scenes 6 to 10: the quartiles (equal-area rings on the cookie, thinner towards the edge); the f(m) = ½ trap (it lands
// on the rim); a second density 3x²/8 (mode 2, median ∛4); component lifetimes (mode 0, median ≈ 0.83 h); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, QuantileReader, SceneHeading, makePlot, regionPath, smooth} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AREA, AcrossDown, AnswerBox, BoxCard, CDF, Cookie, DENS, F38, F9Plot, FK, FL, FramedCard, GOOD, GREY, Hand, INK, R2, R3, Row, Slip, Task, Tri, f38, fK, fL, xTicksN} from './parts';

const Q5 = {x: 40, y: 150, width: 900, heightTop: 380, heightBottom: 360, gap: 16} as const;
const T5 = makePlot(Q5.x, Q5.y, Q5.width, Q5.heightTop, {x: [-0.3, 4.3], y: [0, 1.1]});
const B5 = makePlot(Q5.x, Q5.y + Q5.heightTop + Q5.gap, Q5.width, Q5.heightBottom, {x: [-0.3, 4.3], y: [0, 0.6]});
const CookieReader: React.FC = () => <QuantileReader {...Q5} windowX={[-0.3, 4.3]} F={FK} p={0.5} reach={1} f={fK} yBottom={[0, 0.6]} xTicks={[1, 2, 3, 4]} yTopTicks={[0.25, 0.5, 0.75, 1]} yBottomTicks={[0.5]} xLabel="x (cm)" pLabel={() => '½'} qLabel={() => '2√2'} at={-30} />;

// ---------- 6. the quartiles ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const tint = prog(fr, k.circles, 16);
	const nb = prog(fr, k.narrower, 14);
	const out = 0.5 + 0.5 * Math.cos((fr - k.width) / 4);
	return (
		<>
			<CookieReader />
			<AcrossDown top={T5} bot={B5} F={FK} p={0.25} q={2} o={prog(fr, k.lower, 14)} label="2" />
			<AcrossDown top={T5} bot={B5} F={FK} p={0.75} q={R3} o={prog(fr, k.upper, 14)} label="2√3" />
			<FrameSvg style={{opacity: nb}}>
				{[[0, 2, '2'], [2, R2, '0.83'], [R2, R3, '0.64'], [R3, 4, '0.54']].map(([a, b, t], i) => {const [xa, y] = B5.pf(a as number, 0), [xb] = B5.pf(b as number, 0), yy = y + 74 + (i % 2) * 34; return <g key={i}><path d={`M${xa + 3},${yy - 12} v12 H${xb - 3} v-12`} fill="none" stroke={GREY} strokeWidth={4} /><text x={(xa + xb) / 2} y={yy + 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: GREY}}>{t}</text></g>;})}
			</FrameSvg>
			<Row x={960} y={160} at={k.lower} size={40}>F(Q₁) = ¼ ⇒ Q₁² = 4 ⇒ Q₁ = 2</Row>
			<Row x={960} y={230} at={k.upper} size={40}>F(Q₃) = ¾ ⇒ Q₃² = 12 ⇒ Q₃ = 2√3</Row>
			<AnswerBox x={960} y={310} at={k.six} size={44}>Q₁ = 2, Q₃ = 2√3 (≈ 3.46)</AnswerBox>
			<Row x={960} y={410} at={k.six + 20} size={30} color={GREY}>IQR = Q₃ − Q₁ = 2√3 − 2 ≈ 1.46</Row>
			<Cookie cx={1210} cy={730} w={500} rings={tint > 0 ? [2, R2, R3] : []} tint={{o: tint, edges: [0, 2, R2, R3, 4]}} ringGlow={[{a: R3, b: 4, o: fr >= k.width ? out * 0.6 : 0, color: 'rgba(209,143,31,0.6)'}]} />
			<Hand x={1490} y={480} at={k.circles} size={44} color={AREA.ink} w={380}>equal-area rings: ¼ each</Hand>
			<Hand x={1490} y={610} at={k.sample} size={40} color={INK} w={380}>this sample: 15 of 60 chips in each</Hand>
			<Hand x={1490} y={740} at={k.real} size={34} color={GREY} w={380}>a real cookie: only close</Hand>
			<Hand x={1490} y={830} at={k.narrower} size={38} color={DENS.ink} w={380}>narrower where f is higher</Hand>
		</>
	);
};

// ---------- 7. a trap: the median comes from F ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const tr = prog(fr, k.setting, 14);
	return (
		<>
			<CookieReader />
			<FrameSvg style={{opacity: tr}}>{(() => {const [a, y] = B5.pf(-0.3, 0.5), [b] = B5.pf(4, 0.5); return <><line x1={a} x2={b} y1={y} y2={y} stroke="#b8322a" strokeWidth={5} strokeDasharray="12 8" /><circle cx={b} cy={y} r={12} fill="#b8322a" /></>;})()}</FrameSvg>
			<Hand x={B5.pf(0.0, 0)[0]} y={B5.pf(0, 0.5)[1] - 56} at={k.setting} size={36} color="#b8322a">f = ½ only at the rim</Hand>
			<SceneHeading text="A trap: the median comes from F" at={4} size={46} />
			<Slip x={960} y={170} at={k.setting} strikeAt={k.area} size={40} caption="height, not area">f(m) = ½ ⇒ m/8 = ½ ⇒ m = 4</Slip>
			<AnswerBox x={960} y={360} at={k.median} size={44}>F(m) = ½: m = 2√2</AnswerBox>
			<Cookie cx={1210} cy={730} w={500} circle={{cm: R2}} rim={tr} />
			<Hand x={1490} y={520} at={k.median} size={42} color={AREA.ink} w={380}>half the cookie: 2.83 cm</Hand>
			<Hand x={1490} y={680} at={k.setting} size={38} color="#b8322a" w={380}>m = 4: the rim, the end of the domain</Hand>
		</>
	);
};

// ---------- 8. a second density: 3x²/8 ----------
const Q8 = {x: 40, y: 300, width: 900, heightTop: 330, heightBottom: 330, gap: 16} as const;
const T8 = makePlot(Q8.x, Q8.y, Q8.width, Q8.heightTop, {x: [-0.2, 2.2], y: [0, 1.1]});
const B8 = makePlot(Q8.x, Q8.y + Q8.heightTop + Q8.gap, Q8.width, Q8.heightBottom, {x: [-0.2, 2.2], y: [0, 1.6]});
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const reach = smooth(prog(fr, k.median, 50, t => t));
	const lw = prog(fr, k.low, 14);
	const m = Math.cbrt(4);
	return (
		<>
			<Task x={96} y={150} w={940} at={-30} size={44}>Find the mode and the median.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = 3x²/8 for 0 ≤ x ≤ 2</div><div style={{color: CDF, fontWeight: 800}}>F(x) = x³/8 for 0 ≤ x ≤ 2</div></BoxCard>
			<QuantileReader {...Q8} windowX={[-0.2, 2.2]} F={F38} p={0.5} reach={reach} f={f38} yBottom={[0, 1.6]} xTicks={[0.5, 1, 1.5, 2]} yBottomTicks={[1]} pLabel={() => '½'} qLabel={() => '∛4'} at={-30} />
			<AcrossDown top={T8} bot={B8} F={F38} p={0.25} q={Math.cbrt(2)} o={prog(fr, k.lower, 14)} label="∛2" />
			<Tri m={B8} x={2} o={prog(fr, k.two, 12)} label="mode" />
			<FrameSvg style={{opacity: lw}}>{(() => {const [x0, y] = B8.pf(0, 0), [xm] = B8.pf(m, 0), [x2] = B8.pf(2, 0); return <><path d={`M${x0},${y + 70} v12 H${xm} v-12`} fill="none" stroke={AREA.stroke} strokeWidth={5} /><path d={`M${xm + 6},${y + 70} v12 H${x2} v-12`} fill="none" stroke={DENS.stroke} strokeWidth={5} /><text x={(x0 + xm) / 2} y={y + 120} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AREA.ink}}>≈ 1.59 wide for half</text></>;})()}</FrameSvg>
			<Row x={1080} y={330} at={k.keeps} size={38}>f′(x) = 3x/4 &gt; 0 on (0, 2]: increasing</Row>
			<AnswerBox x={1080} y={404} at={k.two} size={44}>mode = 2</AnswerBox>
			<Row x={1330} y={420} at={k.two + 20} size={32} color={GREY}>(f(2) = 3/2)</Row>
			<Row x={1080} y={510} at={k.median} size={42}>m³/8 = ½ ⇒ m³ = 4 ⇒ m = ∛4</Row>
			<AnswerBox x={1080} y={590} at={k.nine} size={44}>m = ∛4 (≈ 1.59)</AnswerBox>
			<Row x={1080} y={690} at={k.lower} size={40}>x³/8 = ¼ ⇒ Q₁ = ∛2 (≈ 1.26)</Row>
			<Hand x={1080} y={780} at={k.left} size={40} color={INK} w={780}>the median is well left of the mode</Hand>
			<Hand x={1080} y={860} at={k.low} size={44} color={AREA.ink} w={780}>low density: more width (the other half: ≈ 0.41 wide)</Hand>
		</>
	);
};

// ---------- 9. in context: component lifetimes ----------
const Q9 = {x: 40, y: 300, width: 900, heightTop: 330, heightBottom: 330, gap: 16} as const;
const B9 = makePlot(Q9.x, Q9.y + Q9.heightTop + Q9.gap, Q9.width, Q9.heightBottom, {x: [-0.3, 4.3], y: [0, 0.8]});
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const reach = smooth(prog(fr, k.setting, 60, t => t));
	const q = 4 - Math.cbrt(32);
	const tail = prog(fr, k.half, 14);
	return (
		<>
			<Task x={96} y={150} w={940} at={-30} size={44}>Find the mode and the median lifetime.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={36} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(l) = 3(4 − l)²/64 for 0 ≤ l ≤ 4</div><div style={{color: CDF, fontWeight: 800}}>F(l) = 1 − (4 − l)³/64 for 0 ≤ l ≤ 4</div></BoxCard>
			<QuantileReader {...Q9} windowX={[-0.3, 4.3]} F={FL} p={0.5} reach={reach} f={fL} yBottom={[0, 0.8]} xTicks={[1, 2, 3, 4]} yBottomTicks={[0.25, 0.5, 0.75]} xLabel="lifetime l (hours)" pLabel={() => '½'} qLabel={() => '0.83'} at={-30} />
			<FrameSvg style={{opacity: tail}}><path d={(() => {const mm = {...B9, p: (X: number, Y: number) => B9.pf(X, Y)}; return regionPath(mm as typeof B9, fL, q, 4);})()} fill="rgba(31,138,143,0.28)" /></FrameSvg>
			<Tri m={B9} x={0} o={prog(fr, k.zero, 12)} label="mode 0" />
			<Hand x={B9.pf(1.6, 0)[0]} y={B9.pf(0, 0.62)[1]} at={k.half} size={38} color={DENS.ink} w={380}>half fail early; some last 4 h</Hand>
			<AnswerBox x={1080} y={340} at={k.zero} size={36}>f′(l) = −6(4 − l)/64 &lt; 0: mode 0</AnswerBox>
			<Row x={1080} y={440} at={k.setting} size={38}>1 − (4 − m)³/64 = ½ ⇒ (4 − m)³ = 32</Row>
			<Row x={1080} y={510} at={k.so} size={44}>m = 4 − ∛32</Row>
			<AnswerBox x={1080} y={590} at={k.hours} size={48}>m ≈ 0.83 h</AnswerBox>
			<Row x={1400} y={606} at={k.fifty} size={36} color={GREY}>≈ 50 min</Row>
			<Hand x={1080} y={700} at={k.most} size={40} color={INK} w={780}>most likely lifetime and median: different questions</Hand>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const ax = prog(fr, k.for, 30);
	return (
		<>
			<SceneHeading text="Keep them apart" at={4} size={48} />
			<FramedCard x={160} y={170} w={1600} h={680} at={-30} />
			<div style={{position: 'absolute', left: 210, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Cookie cx={400} cy={480} w={360} circle={{cm: R2}} />
			<Hand x={240} y={680} at={-30} size={38} color={AREA.ink}>half the cookie: 2.83 cm</Hand>
			<Hand x={680} y={250} at={k.mode} size={58} color={INK} w={1040}>Mode: the top of f.</Hand>
			<Hand x={680} y={340} at={k.median} size={58} color={INK} w={1040}>Median and quartiles: go across from F.</Hand>
			<Row x={680} y={460} at={k.for} size={44} color={GOOD.ink}>Median: F(m) = ½</Row>
			<F9Plot x={680} y={540} w={480} h={280} win={{x: [-0.3, 4.3], y: [-0.03, 0.6]}} fn={fK} xTicks={[]} yTicks={[]} yLabel="f" color={DENS.stroke} />
			<Tri m={makePlot(680, 540, 480, 280, {x: [-0.3, 4.3], y: [-0.03, 0.6]})} x={4} o={prog(fr, k.mode, 12)} />
			<F9Plot x={1200} y={540} w={480} h={280} win={{x: [-0.3, 4.3], y: [-0.05, 1.1]}} fn={FK} xTicks={[]} yTicks={[]} yLabel="F" />
			<AcrossDown top={makePlot(1200, 540, 480, 280, {x: [-0.3, 4.3], y: [-0.05, 1.1]})} F={FK} p={0.5} q={R2} o={ax} />
		</>
	);
};
export {GOOD};
