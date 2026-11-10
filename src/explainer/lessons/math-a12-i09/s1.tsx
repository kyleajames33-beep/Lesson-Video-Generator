// Scenes 1 to 4: the hook (i08's row, the frosty thermometer warming from −2 °C to 1 °C, the graph of x² all above
// the axis and the −7/3 slip), bracket the bottom (1 − (−2) on the thermometer, then 1/3 − (−8/3) on the g01 board),
// split at zero with the split slider (the sum stays 3), and reversed limits (the evening cooling and backwards
// strips; no finite-sum readout, per 238-I09-REVERSE-SUM).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, HandTag, LiveReadoutBoard, MistakeCard, RiemannLayer, SceneHeading, StudioLimitSubstitution, kf, smooth} from '../../math/studio';
import {I08FinalFrame} from '../math-a12-i08/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ABLUE, AMBER, AnswerBox, BoxCard, Chip, GRAD, Graph, Hand, Int, Lims, PLabel, Row, SOFT, TEAL, Task, ThermoRig, Tick, clockText, cubeF, sq} from './parts';

const TH = {x: 60, y: 205, h: 770};
const INSET = {x: 1700, y: 160, h: 520};
const WIN = {x: [-2.6, 1.6] as [number, number], y: [-0.6, 4.6] as [number, number]};
const fmtT = (v: number) => `${v < -0.05 ? '−' : ''}${Math.abs(v).toFixed(0)} °C`;
const Q = () => <><Int lo="−2" hi="1">x²</Int></>;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.morning, 16);
	if (sw <= 0) return <I08FinalFrame />;
	const T = kf(fr, [[k.change, -2], [k.change + 90, 1]]);
	const sweep = smooth(prog(fr, k.before, 40));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I08FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="How do we evaluate definite integrals without losing signs?" at={k.morning - 10} size={50} />
				<div style={{position: 'absolute', inset: 0, transform: `translateX(${(1 - smooth(sw)) * -200}px)`}}>
					<ThermoRig x={TH.x} y={TH.y} h={TH.h} T={T} clock={clockText(6 + (T + 2))} mark={{T: -2, o: prog(fr, k.below, 12)}} />
				</div>
				<Graph x={400} y={280} w={740} h={680} win={WIN} fn={sq} a={-2} b={1} sweep={sweep} from={-2.2} to={1.45} xTicks={[-2, -1, 1]} yTicks={[2, 4]} yLabel="y = x²"
					kids={m => <>
						<PLabel p={m.p(-1.75, 0.9)} text="all above the axis" color={TEAL} size={38} hand o={prog(fr, k.every, 12)} />
						<PLabel p={m.p(-0.35, 2.3)} text="+ or −?" color="#7a4600" size={56} hand o={prog(fr, k.should, 12) * (1 - prog(fr, k.thirds, 10))} />
						<PLabel p={m.p(-0.45, 2.3)} text="+ expected" color="#287347" size={52} hand o={prog(fr, k.thirds, 12)} />
					</>} />
				<FrameSvg><Countdown start={1596} end={1686} x={1050} y={360} r={48} ringFrom={k.signs} /></FrameSvg>
				<Row x={1190} y={150} at={k.morning} size={46}><Q /> = <Lims lo="−2" hi="1">x³/3</Lims></Row>
				<Row x={1190} y={236} at={k.morning} size={46}>= 1/3 − (−2)³/3 = ?</Row>
				<LiveReadoutBoard x={1180} y={330} width={700} at={k.morning} inline size={46} labelSize={30} rows={[
					{label: 'time', value: T, role: 'k', format: v => clockText(6 + (v + 2))},
					{label: 'reading now', value: T, role: 'a', format: fmtT},
					{label: 'start reading', value: -2, role: 'k', format: () => '(−2 °C)'},
					{label: 'change = now − (start)', value: T + 2, role: 'answer', format: v => `${v.toFixed(0)} degrees`},
				]} />
				<MistakeCard x={1180} y={690} w={700} at={k.thirds} size={46} wrong={<>1/3 − 8/3 = −7/3</>} caption="negative, but every strip adds" />
				<Chip x={1180} y={900} at={k.how} size={42} color="#d18f1f">How do we keep every sign?</Chip>
			</div>
		</>
	);
};

// ---------- 2. bracket the bottom ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const T = kf(fr, [[k.six, -2], [k.nine + 30, 1]]);
	const B = prog(fr, k.fa, 14);
	return (
		<>
			<SceneHeading text="Bracket the bottom" at={4} size={56} />
			<ThermoRig x={TH.x} y={TH.y} h={TH.h} T={T} clock={clockText(6 + (T + 2))} mark={{T: -2, o: 1}} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - B}}>
				<BoxCard x={410} y={160} w={820} at={-30} size={42} title="the thermometer">6 am: −2 °C.  9 am: 1 °C.  How much did it warm?</BoxCard>
				<StudioLimitSubstitution x={420} y={330} size={64} prefix="change =" upper="1" lowerSign="−" lowerBody="2" at={k.warmed} bracketAt={k.bracket} lowerAt={k.bracket + 12} collapseAt={k.three} then={{content: <>= 3</>, at: k.three + 16}} />
				<HandTag x={430} y={470} text="3 degrees warmer" at={k.three + 20} size={46} color="#287347" />
				<MistakeCard x={410} y={540} w={820} at={k.not} size={48} wrong={<>1 − 2 = −1</>} caption="it didn't get colder" />
				<LiveReadoutBoard x={1290} y={160} width={590} at={-30} inline size={46} labelSize={30} rows={[
					{label: 'time', value: T, role: 'k', format: v => clockText(6 + (v + 2))},
					{label: 'reading', value: T, role: 'a', format: fmtT},
				]} />
			</div>
			{B > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: B}}>
				<Task x={410} y={150} w={820} at={k.fa}><>Evaluate <Q /></></Task>
				<BoxCard x={1260} y={150} w={620} at={k.fa + 10} size={40} title="given">f(x) = x², from −2 to 1</BoxCard>
				<Row x={420} y={300} at={k.fa + 10} size={46}>F(x) = x³/3</Row>
				<Hand x={760} y={306} at={k.fa + 30} size={34} color={SOFT}>i08: any primitive</Hand>
				<Row x={420} y={380} at={k.means} size={46} color={ABLUE}>F(1) = 1/3</Row>
				<Hand x={760} y={386} at={k.means + 20} size={34} color={ABLUE}>upper limit: the end</Hand>
				<Row x={420} y={460} at={k.here} size={46} color={AMBER}>F(−2) = (−2)³/3 = <span style={{color: GRAD}}>−</span>8/3</Row>
				<Hand x={1000} y={466} at={k.here + 20} size={34} color={AMBER}>lower limit: the start</Hand>
				<StudioLimitSubstitution x={420} y={570} size={56} prefix={<><Q /> =</>} upper="1/3" lowerSign="−" lowerBody="8/3" at={k.so} bracketAt={k.so + 40} lowerAt={k.lower} collapseAt={k.adds + 10} />
				<AnswerBox x={420} y={690} at={k.is3} size={56}>= 3</AnswerBox>
				<HandTag x={430} y={800} text="the rule's minus: subtract" at={k.ruleSign} size={42} color={INK} />
				<HandTag x={430} y={858} text="the number's minus: inside −8/3" at={k.inner} size={42} color={GRAD} />
				<Row x={420} y={905} at={k.fa + 20} size={38} dim={1}>thermometer: 1 − (−2) = 3 degrees</Row>
			</div> : null}
			<Graph x={1260} y={560} w={620} h={420} win={WIN} fn={sq} a={-2} b={1} from={-2.2} to={1.45} xTicks={[-2, 1]} yTicks={[2, 4]} yLabel="y = x²" at={k.fa}
				kids={m => <PLabel p={m.p(-1.0, 3.4)} text="+ expected" color="#287347" size={40} hand />} />
			<div style={{position: 'absolute', left: 1700, top: 640, opacity: prog(fr, k.positive, 10)}}><Tick size={56} /></div>
		</>
	);
};

// ---------- 3. split the region at zero ----------
const G3 = {x: 40, y: 150, w: 900, h: 800};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const b = kf(fr, [[k.always + 4, 0], [k.always + 44, -2], [k.always + 124, 1], [k.always + 174, 0]]);
	const lineO = prog(fr, k.split, 12) * (1 - prog(fr, k.graph + 30, 20));
	const T = kf(fr, [[k.thermo - 1, 1], [k.thermo, -2], [k.two, -2], [k.two + 30, 0], [k.more, 0], [k.more + 26, 1]]);
	const phaseA = 1 - prog(fr, k.rule - 4, 12);
	return (
		<>
			<SceneHeading text="Split the region at zero" at={4} size={56} />
			<Graph x={G3.x} y={G3.y} w={G3.w} h={G3.h} win={WIN} fn={sq} a={-2} b={1} fillO={0} from={-2.2} to={1.45} xTicks={[-2, -1, 1]} yTicks={[2, 4]} yLabel="y = x²"
				under={m => {const [px, ay] = m.p(b, 0), [, py] = m.p(b, sq(b)); return <>
					<AreaFillLayer m={m} fn={sq} a={-2} to={b} signed />
					<AreaFillLayer m={m} fn={sq} a={b} to={1} color="#b6dcd6" />
					<g opacity={lineO}><line x1={px} x2={px} y1={ay} y2={Math.min(ay - 40, py)} stroke={TEAL} strokeWidth={5} strokeDasharray="10 8" /><circle cx={px} cy={ay} r={14} fill={TEAL} stroke={CARD} strokeWidth={4} /><text x={px + 16} y={ay + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: TEAL}} stroke={CARD} strokeWidth={6} paintOrder="stroke">b</text></g>
				</>;}}
				kids={m => <>
					<PLabel p={m.p(-2.35, 4.25)} text="from −2 to b" color={TEAL} size={40} o={prog(fr, k.split, 12) * phaseA} />
					<PLabel p={m.p(0.2, 3.0)} text="from b to 1" color={TEAL} size={40} o={prog(fr, k.split, 12) * phaseA} />
					<PLabel p={m.p(-1.35, 0.8)} text="8/3" color={INK} size={52} o={prog(fr, k.thirds1, 12) * (1 - prog(fr, k.always, 10))} />
					<PLabel p={m.p(0.15, 1.45)} text="1/3" color={INK} size={52} o={prog(fr, k.third2, 12) * (1 - prog(fr, k.always, 10))} />
					<PLabel p={m.p(-1.2, 3.4)} text="one region again" color={TEAL} size={42} hand o={prog(fr, k.graph + 30, 12)} />
				</>} />
			<ThermoRig x={INSET.x} y={INSET.y} h={INSET.h} T={T} />
			<Hand x={1590} y={500} at={k.two} size={46} color="#287347">+2</Hand>
			<Hand x={1590} y={380} at={k.more} size={46} color="#287347">+1</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: phaseA}}>
				<Row x={990} y={150} at={-30} size={40} dim={1}><Q /> = 3</Row>
				<BoxCard x={980} y={250} w={700} at={k.split} out={k.from1 - 4} size={42} title="check">Split at 0: from −2 to 0, then from 0 to 1.</BoxCard>
				<StudioLimitSubstitution x={990} y={250} size={44} prefix={<><Int lo="−2" hi="0">x²</Int> =</>} upper="0" lowerSign="−" lowerBody="8/3" at={k.from1} bracketAt={k.brk} lowerAt={k.brk + 18} then={{content: <>= 8/3</>, at: k.thirds1}} />
				<Row x={990} y={350} at={k.from2} size={44}><Int lo="0" hi="1">x²</Int> = 1/3 − (0) = 1/3</Row>
				<AnswerBox x={990} y={450} at={k.sum} size={48}>8/3 + 1/3 = 3, the same</AnswerBox>
			</div>
			<div style={{position: 'absolute', left: 980, top: 150, opacity: prog(fr, k.rule, 14), display: 'inline-block', background: CARD, border: '5px solid #287347', borderRadius: 18, padding: '8px 22px 12px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}>
				<Int lo="a" hi="b">f(x)</Int> + <Int lo="b" hi="c">f(x)</Int> = <Int lo="a" hi="c">f(x)</Int>
			</div>
			<Hand x={990} y={290} at={k.rule + 40} size={36} color={TEAL}>f continuous; a ≤ b ≤ c</Hand>
			<Row x={990} y={350} at={k.prims} size={40}>(F(b) − F(a)) + (F(c) − F(b))</Row>
			<Row x={990} y={420} at={k.left} size={44}>= F(c) − F(a)</Row>
			<HandTag x={1350} y={445} text="F(b) cancels" at={k.cancels} size={40} color={GRAD} />
			<LiveReadoutBoard x={980} y={560} width={700} at={k.split} inline size={46} labelSize={30} rows={[
				{label: 'split point b', value: b, digits: 2, role: 'b'},
				{label: 'from −2 to b', value: cubeF(b) + 8 / 3, digits: 2, role: 'b'},
				{label: 'from b to 1', value: 1 / 3 - cubeF(b), digits: 2, role: 'b'},
				{label: 'sum', value: 3, digits: 2, role: 'answer'},
			]} />
			<HandTag x={1000} y={900} text="sum stays 3" at={k.always + 30} size={44} color="#287347" />
		</>
	);
};

// ---------- 4. swap the ends: reversed limits ----------
const WIN4 = {x: [-2.6, 1.6] as [number, number], y: [-1.1, 4.6] as [number, number]};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const T = kf(fr, [[k.cooling, 1], [k.cooling + 80, -2]]);
	const strips = fr < k.picture + 6 ? 0 : Math.min(6, Math.floor((fr - k.picture - 6) / 16) + 1);
	const fillO = 1 - prog(fr, k.picture, 14);
	return (
		<>
			<SceneHeading text="Swap the ends: the sign flips" at={4} size={56} />
			<Graph x={G3.x} y={G3.y} w={G3.w} h={G3.h} win={WIN4} fn={sq} a={-2} b={1} fillO={fillO} from={-2.2} to={1.45} xTicks={[-2, -1, 1]} yTicks={[2, 4]} yLabel="y = x²"
				kids={m => <>
					{strips > 0 ? <RiemannLayer m={m} fn={sq} a={-2} b={1} n={6} rule="mid" count={strips} direction="reverse" /> : null}
					<PLabel p={m.p(-2.2, -0.75)} text="Δx < 0: strips run right to left" color="#7a4600" size={36} hand o={prog(fr, k.every, 12)} />
					<PLabel p={m.p(-1.2, 3.6)} text="every strip flips its sign" color="#7a4600" size={40} hand o={prog(fr, k.flips, 12)} />
				</>} />
			<ThermoRig x={INSET.x} y={INSET.y} h={INSET.h} T={T} clock={fr >= k.thermo ? clockText(18 + (1 - T)) : undefined} />
			<Hand x={1600} y={720} at={k.change} size={44} color="#7a4600">cooling: −3</Hand>
			<Task x={980} y={150} w={700} at={k.what}><>Evaluate <Int lo="1" hi="−2">x²</Int></></Task>
			<StudioLimitSubstitution x={990} y={300} size={48} prefix={<><Lims lo="1" hi="−2">x³/3</Lims> =</>} upper="−8/3" lowerBody="1/3" at={k.now} bracketAt={k.now + 30} lowerAt={k.minus1} />
			<AnswerBox x={990} y={390} at={k.three} size={52}>= −3</AnswerBox>
			<Row x={1240} y={400} at={-30} size={40} dim={fr < k.swapping ? 1 : 0}><Q /> = 3</Row>
			<HandTag x={1000} y={520} text="ends swapped: sign flipped" at={k.swapping + 10} size={42} color={GRAD} />
			<Row x={990} y={580} at={k.cooling} size={42}>evening: −2 − (1) = −3 degrees</Row>
			<div style={{position: 'absolute', left: 980, top: 680, opacity: prog(fr, k.int, 14), display: 'inline-block', background: CARD, border: '5px solid #287347', borderRadius: 18, padding: '8px 22px 12px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, whiteSpace: 'pre'}}>
				<Int lo="b" hi="a">f(x)</Int> = −<Int lo="a" hi="b">f(x)</Int>
			</div>
			<Chip x={980} y={880} at={k.zero} size={42} color="#8a8378"><Int lo="a" hi="a">f(x)</Int> = 0: no strips</Chip>
		</>
	);
};
