// Scenes 5 to 9: the trapezoidal rule from shared edges (the kit StudioCoefficientLedger), the worked example 1/x on
// [1, 3] with five values (67/60), the comparison with ln 3 and concavity (Tₙ for n = 1, 2, 4, 8, always over), and
// the online tool within and beyond the course (the kit StudioToolPanel).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {HandTag, LiveReadoutBoard, RiemannLayer, SceneHeading, StudioCoefficientLedger, StudioRiemannStrips, StudioToolPanel, fnPath, regionPath} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8, K9} from './cuemap';
import {ABLUE, AnswerBox, BPlot, BoxCard, Chip, GRAD, Hand, Int, Lims, PLabel, Row, SOFT, TEAL, Task, Tick, recip, trap} from './parts';

const WIN = {x: [0.75, 3.25] as [number, number], y: [-0.08, 1.12] as [number, number]};
const XS = [1, 1.5, 2, 2.5, 3];
const Sub: React.FC<{children: React.ReactNode}> = ({children}) => <sub style={{fontSize: '0.6em'}}>{children}</sub>;
const Y: React.FC<{i: React.ReactNode}> = ({i}) => <>y<Sub>{i}</Sub></>;
const Heights: React.FC<{m: PlotMap; o?: number; labels?: readonly React.ReactNode[]; lo?: number}> = ({m, o = 1, labels, lo = 1}) => <g opacity={o}>{XS.map((x, i) => {const [px, py] = m.p(x, recip(x)), [, ay] = m.p(x, 0); const end = i === 0 || i === 4; return <g key={x}><line x1={px} x2={px} y1={ay} y2={py} stroke={end ? INK : '#d18f1f'} strokeWidth={6} />{labels ? <text x={px} y={py - 18} textAnchor="middle" opacity={lo} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: end ? INK : '#9c5a00'}}>{labels[i]}</text> : null}</g>;})}</g>;

// ---------- 5. the trapezoidal rule ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const add = [k.now, k.now + 30, k.now + 60, k.inside + 10];
	const count = add.filter(a => fr >= a).length;
	return (
		<>
			<SceneHeading text="The trapezoidal rule, from shared edges" at={4} size={56} />
			<BPlot x={40} y={150} w={900} h={600} win={WIN} fn={recip} xTicks={[]} yTicks={[]} xLabel="x" yLabel="y"
				under={m => count > 0 ? <RiemannLayer m={m} fn={recip} a={1} b={3} n={4} rule="trapezium" count={count} /> : null}
				kids={m => <Heights m={m} labels={[0, 1, 2, 3, 4].map(i => <React.Fragment key={i}>y<tspan baselineShift="sub" fontSize="65%">{i}</tspan></React.Fragment>)} />} />
			<StudioCoefficientLedger x={120} y={770} labels={['y0', 'y1', 'y2', 'y3', 'y4'].map((l, i) => <Y key={l} i={String(i)} />)} addAt={add} colW={160} size={40} at={k.now} />
			<BoxCard x={980} y={330} w={900} at={k.each + 30} out={k.twice - 6} size={42} title="add four trapezia">side by side, which heights are shared by two trapezia?</BoxCard>
			<Row x={990} y={170} at={k.each} size={46}><span>one trapezium: (h/2)(<Y i="0" /> + <Y i="1" />)</span></Row>
			<Hand x={1000} y={240} at={k.each + 20} size={36} color={SOFT}>average of two heights × width</Hand>
			<HandTag x={1000} y={330} text="inside heights: two trapezia each" at={k.twice} size={40} color="#9c5a00" />
			<HandTag x={1000} y={390} text="ends once, insides twice" at={k.once} size={44} color={INK} />
			<AnswerBox x={980} y={450} at={k.gives} size={38}><span><Int lo="a" hi="b">f(x)</Int> ≈ (h/2)[<Y i="0" /> + 2(<Y i="1" /> + … + <Y i="n−1" />) + <Y i="n" />]</span></AnswerBox>
			<Row x={990} y={600} at={k.h} size={46}>h = (b − a)/n</Row>
			<Row x={990} y={680} at={k.nplus} size={46}>n strips need n + 1 heights</Row>
			<BoxCard x={980} y={780} w={900} at={-30} out={k.gives - 6} size={38} title="from the strips video">each trapezium = average of its two heights × width</BoxCard>
		</>
	);
};

// ---------- 6. worked example ----------
const HL = ['1', '2/3', '1/2', '2/5', '1/3'];
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const hAt = [k.heights + 20, k.heights + 140, k.heights + 160, k.heights + 200, k.heights + 230];
	return (
		<>
			<SceneHeading text="Worked example: 1/x from five values" at={4} size={56} />
			<BPlot x={40} y={150} w={900} h={600} win={WIN} fn={recip} xTicks={XS} yTicks={[0.5, 1]} xLabel="x" yLabel="y = 1/x"
				under={m => <RiemannLayer m={m} fn={recip} a={1} b={3} n={4} rule="trapezium" />}
				kids={m => <g>{XS.map((x, i) => {const [px, py] = m.p(x, recip(x)), [, ay] = m.p(x, 0); const end = i === 0 || i === 4; return <g key={x}><line x1={px} x2={px} y1={ay} y2={py} stroke={end ? INK : '#d18f1f'} strokeWidth={6} /><text x={px} y={py - 18} textAnchor="middle" opacity={prog(fr, hAt[i], 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: end ? INK : '#9c5a00'}}>{HL[i]}</text></g>;})}</g>} />
			<StudioCoefficientLedger x={120} y={770} labels={HL} addAt={[-40, -30, -20, -10]} colW={160} size={40} at={-30} />
			<Task x={980} y={150} w={900} at={-30} size={38}>Use the trapezoidal rule with 5 function values{'\n'}to estimate <Int lo="1" hi="3">(1/x)</Int>.</Task>
			<BoxCard x={980} y={330} w={560} at={-30} size={38} title="given">a = 1, b = 3; 5 values, so n = 4</BoxCard>
			<HandTag x={1570} y={390} text="5 values, 4 strips" at={k.five} size={38} color="#9c5a00" />
			<Row x={990} y={470} at={k.so} size={46}>h = (3 − 1)/4 = 1/2</Row>
			<Row x={990} y={560} at={k.put} size={42}>≈ (1/4)[1 + 2(2/3 + 1/2 + 2/5) + 1/3]</Row>
			<Row x={990} y={650} at={k.put + 90} size={42}>= (1/4)[1 + 47/15 + 1/3]</Row>
			<AnswerBox x={990} y={750} at={k.thats} size={54}>= 67/60</AnswerBox>
			<Hand x={1300} y={766} at={k.about} size={44} color={SOFT}>≈ 1.117</Hand>
		</>
	);
};

// ---------- 7. compare with the exact value ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const nKeys = [{frame: -1000, value: 4}, {frame: k.so + 10, value: 1}, {frame: k.so + 40, value: 2}, {frame: k.so + 70, value: 4}, {frame: k.so + 100, value: 8}];
	const n = [...nKeys].reverse().find(q => fr >= q.frame)!.value;
	return (
		<>
			<SceneHeading text="Compare with the exact value" at={4} size={56} />
			<StudioRiemannStrips x={40} y={150} width={900} height={640} window={WIN} fn={recip} a={1} b={3} nKeys={nKeys} rule="trapezium" curveColor={ABLUE} xTicks={[1, 2, 3]} yTicks={[0.5, 1]} xLabel="x" yLabel="y = 1/x" at={-30}
				stepper={{x: 120, y: 830, values: [1, 2, 4, 8], label: 'strips n'}}>
				{m => <>
					<PLabel p={m.p(1.9, 0.9)} text="straight tops sit above the curve" color={GRAD} size={36} hand o={prog(fr, k.bends, 12)} />
					<PLabel p={m.p(1.9, 0.78)} text="concave up" color={ABLUE} size={36} hand o={prog(fr, k.bends, 12)} />
				</>}
			</StudioRiemannStrips>
			<Row x={990} y={170} at={k.int} size={44}><Int lo="1" hi="3">(1/x)</Int> = <Lims lo="1" hi="3">ln x</Lims> = ln 3</Row>
			<Hand x={1000} y={260} at={k.int + 40} size={38} color={SOFT}>ln 3 ≈ 1.099</Hand>
			<Row x={990} y={320} at={k.so} size={40} color={SOFT}>67/60 ≈ 1.117 &gt; ln 3 ≈ 1.099</Row>
			<LiveReadoutBoard x={980} y={400} width={900} at={-30} inline size={48} labelSize={30} rows={[
				{label: 'strips n', value: n, digits: 0, role: 'a'},
				{label: 'trapezoidal estimate', value: trap(recip, 1, 3, n), digits: 3, role: 'k'},
				{label: 'exact: ln 3', value: Math.log(3), digits: 3, role: 'answer'},
			]} />
			<BoxCard x={980} y={720} w={900} at={-30} out={k.bends - 6} size={40} title="last scene">trapezia, n = 4: 67/60 ≈ 1.117. Is it over or under?</BoxCard>
			<HandTag x={1000} y={680} text="always over" at={k.so + 110} size={46} color="#9c5a00" />
			<Chip x={980} y={720} at={k.bends} size={36} color="#8a8378">f″(x) = 2/x³ &gt; 0 for x &gt; 0</Chip>
			<BoxCard x={980} y={800} w={900} at={k.when} size={36} title="concavity along the whole interval">concave up: overestimate.{'  '}<span style={{opacity: prog(fr, k.down, 12)}}>concave down: underestimate.</span></BoxCard>
			<Hand x={1000} y={960} at={k.if} size={36} color={SOFT}>if the bending changes, concavity alone can't tell</Hand>
		</>
	);
};

// ---------- 8. an online tool, within the course ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	return (
		<>
			<SceneHeading text="An online tool, within the course" at={4} size={56} />
			<BoxCard x={60} y={160} w={880} at={-30} size={40} title="the third check">an online tool: a computer algebra system for exact algebra and calculus</BoxCard>
			<BPlot x={60} y={330} w={900} h={440} win={{x: [0.5, 3.4], y: [-0.1, 1.5]}} fn={recip} xTicks={[1, 3]} yTicks={[1]} xLabel="x" yLabel="y = 1/x"
				under={m => <path d={regionPath(m, recip, 1, 3)} fill="#d6eeee" />}
				kids={m => <PLabel p={m.p(1.6, 0.25)} text="ln 3 ≈ 1.099" size={36} />} />
			<StudioToolPanel x={1000} y={160} w={880} title="online tool" input="integrate 1/x from 1 to 3" output="log(3)" typeAt={20} outputAt={k.type + 30} cps={24} at={-30} />
			<BoxCard x={1000} y={560} w={880} at={-30} out={k.ask - 12} size={40} title="our rule, from earlier">∫ (1/x) dx = ln|x| + C: compare the tool's answer with it</BoxCard>
			<HandTag x={1020} y={490} text="log means ln" at={k.many} size={42} color="#9c5a00" />
			<StudioToolPanel x={1000} y={540} w={880} title="online tool" input="integrate 1/x" output="log(x)" typeAt={k.ask} outputAt={k.get} cps={24} at={k.ask - 10} />
			<HandTag x={1020} y={870} text="mod?   + C?" at={k.get + 30} size={44} color="#b8322a" />
			<Row x={70} y={830} at={k.course} size={52}>∫ (1/x) dx = ln<span style={{color: '#9c5a00'}}>|</span>x<span style={{color: '#9c5a00'}}>|</span> <span style={{color: '#9c5a00'}}>+ C</span></Row>
			<Chip x={60} y={900} at={k.tool} size={40} color="#8a8378">check, then show your own working</Chip>
		</>
	);
};

// ---------- 9. an online tool, beyond the course ----------
const Strk: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => <span style={{color: on > 0.5 ? '#8a8378' : INK, textDecoration: on > 0.5 ? 'line-through' : undefined, textDecorationColor: '#8a8378'}}>{children}</span>;
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const s = [prog(fr, k.every, 8), prog(fr, k.every + 14, 8), prog(fr, k.every + 28, 8)];
	return (
		<>
			<SceneHeading text="An online tool, beyond the course" at={4} size={56} />
			<StudioToolPanel x={1000} y={160} w={880} title="online tool" input="integrate x^3 cos x" output={<>x³ sin x + 3x² cos x<br />− 6x sin x − 6 cos x + C</>} typeAt={k.ask} outputAt={k.long} cps={24} at={k.ask - 10} />
			<BPlot x={1000} y={170} w={880} h={500} win={{x: [-1.3, 1.3], y: [-0.75, 0.75]}} fn={x => x * x * x * Math.cos(x)} xTicks={[-1, 1]} yTicks={[-0.5, 0.5]} xLabel="x" yLabel="y = x³ cos x" out={k.ask - 12} />
			<BoxCard x={60} y={420} w={880} at={-30} out={k.check - 6} size={40} title="from the garden">by symmetry, the integral from −1 to 1 is 0</BoxCard>
			<BoxCard x={60} y={640} w={880} at={-30} out={k.check - 6} size={40} title="the check">differentiate the tool's answer with the product rule: (uv)′ = u′v + uv′</BoxCard>
			<StudioToolPanel x={1000} y={560} w={880} title="online tool" input="integrate x^3 cos x from -1 to 1" output="0" typeAt={k.value} outputAt={k.value + 60} cps={30} at={k.value - 10} />
			<BoxCard x={60} y={160} w={880} at={-30} out={k.check - 6} size={40} title="beyond our rules">the primitive of x³ cos x needs a method outside this course, but we can still check it</BoxCard>
			<Row x={70} y={170} at={k.check} size={34} color={SOFT}>differentiate it with the product rule:</Row>
			<Row x={70} y={230} at={k.check + 20} size={38}>x³ cos x + <Strk on={s[0]}>3x² sin x</Strk> <Strk on={s[0]}>− 3x² sin x</Strk></Row>
			<Row x={70} y={300} at={k.check + 30} size={38}>+ <Strk on={s[1]}>6x cos x</Strk> <Strk on={s[1]}>− 6x cos x</Strk></Row>
			<Row x={70} y={370} at={k.check + 40} size={38}><Strk on={s[2]}>− 6 sin x</Strk> + <Strk on={s[2]}>6 sin x</Strk></Row>
			<AnswerBox x={70} y={460} at={k.every + 50} size={50}>= x³ cos x</AnswerBox>
			<HandTag x={90} y={610} text="from −1 to 1: 0, as symmetry said" at={k.value + 70} size={42} color="#287347" />
			<div style={{position: 'absolute', left: 60, top: 700, display: 'flex', gap: 22}}>
				{['symmetry', 'trapezoidal rule', 'online tool'].map((t, i) => <div key={t} style={{opacity: prog(fr, k.when + i * 10, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: '#287347', border: '4px solid #287347', borderRadius: 16, padding: '6px 20px', background: '#fffdf8'}}>{t} <Tick size={34} /></div>)}
			</div>
			<Hand x={70} y={820} at={k.when + 30} size={44} color={INK}>methods agree: trust the result</Hand>
		</>
	);
};
