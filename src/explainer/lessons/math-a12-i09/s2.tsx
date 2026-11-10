// Scenes 5 to 8: a primitive with its own minus sign (sin x on [0, π], then sin 2x on [0, π/4]), e⁰ = 1 and
// ln 1 = 0, finding k with the k dial (1 → 3, then a backwards run 1 → −3 that also gives 8), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, HandTag, LiveReadoutBoard, MarkSpan, MistakeCard, RiemannLayer, SceneHeading, StudioLimitSubstitution, kf, smooth} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ABLUE, AMBER, AnswerBox, BoxCard, Chip, Ex, FROST, FramedCard, GRAD, Graph, Hand, Int, Lims, PLabel, Row, SOFT, Task, ThermoRig, Tick, frostW} from './parts';

const RX = 980;
const GL = {x: 40, y: 220, w: 900, h: 700};
const Neg: React.FC = () => <span style={{color: GRAD}}>−</span>;

// ---------- 5. a primitive with its own minus sign ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const two = prog(fr, k.same, 14);
	const one = 1 - two;
	return (
		<>
			<SceneHeading text="A primitive with its own minus sign" at={4} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: one}}>
				<Graph x={GL.x} y={GL.y} w={GL.w} h={GL.h} win={{x: [-0.25, 3.5], y: [-0.35, 1.3]}} fn={Math.sin} a={0} b={Math.PI} from={-0.2} to={3.45} xTicks={[{value: Math.PI / 2, label: 'π/2'}, {value: Math.PI, label: 'π'}]} yTicks={[1]} yLabel="y = sin x"
					kids={m => <PLabel p={m.p(0.9, 0.42)} text="+ expected" color="#287347" size={48} hand />} />
				<div style={{position: 'absolute', left: 560, top: 470, opacity: prog(fr, k.which + 10, 10)}}><Tick size={56} /></div>
				<Task x={RX} y={150} w={560} at={-30}><>Evaluate <Int lo="0" hi="π">sin x</Int></></Task>
				<BoxCard x={1560} y={150} w={320} at={-30} size={36} title="given">f(x) = sin x{'  '}from 0 to π</BoxCard>
				<BoxCard x={RX} y={300} w={900} at={-30} out={k.prim - 4} size={42} title="watch out">−cos x carries its own minus sign</BoxCard>
				<BoxCard x={RX} y={420} w={900} at={-30} out={k.atpi - 4} size={40} title="method">1. a primitive F<br />2. F(top) and F(bottom)<br />3. F(top) − (F(bottom))</BoxCard>
				<Row x={RX + 10} y={300} at={k.prim} size={48}>F(x) = <Neg />cos x</Row>
				<Hand x={RX + 430} y={306} at={k.prim + 20} size={34} color={SOFT}>i05</Hand>
				<Row x={RX + 10} y={385} at={k.atpi} size={46} color={ABLUE}>F(π) = −cos π = −(−1) = 1</Row>
				<Row x={RX + 10} y={465} at={k.atzero} size={46} color={AMBER}>F(0) = <Neg />cos 0 = −1</Row>
				<StudioLimitSubstitution x={RX + 10} y={560} size={52} prefix={<><Int lo="0" hi="π">sin x</Int> =</>} upper="1" lowerSign="−" lowerBody="1" at={k.so} bracketAt={k.brk} lowerAt={k.lower} collapseAt={k.which - 8} />
				<AnswerBox x={RX + 10} y={670} at={k.which} size={52}>= 2</AnswerBox>
				<MistakeCard x={RX} y={780} w={900} at={k.slip} size={46} wrong={<>1 − 1 = 0</>} caption="bracket dropped" />
			</div>
			{two > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: two}}>
				<Graph x={GL.x} y={GL.y} w={GL.w} h={GL.h} win={{x: [-0.08, 1.05], y: [-0.15, 1.2]}} fn={x => Math.sin(2 * x)} a={0} b={Math.PI / 4} from={-0.05} to={1.0} xTicks={[{value: Math.PI / 8, label: 'π/8'}, {value: Math.PI / 4, label: 'π/4'}]} yTicks={[1]} yLabel="y = sin 2x"
					kids={m => <PLabel p={m.p(0.12, 0.35)} text="+ expected" color="#287347" size={44} hand />} />
				<Task x={RX} y={150} w={900} at={k.same}><>Evaluate <Int lo="0" hi="π/4">sin 2x</Int></></Task>
				<Row x={RX + 10} y={300} at={k.prim2} size={48}>F(x) = <Neg />½ cos 2x</Row>
				<Hand x={RX + 490} y={306} at={k.prim2 + 20} size={34} color={SOFT}>i05: divide by the inner rate 2</Hand>
				<Row x={RX + 10} y={385} at={k.top} size={46} color={ABLUE}>F(π/4) = −½ cos(π/2) = 0</Row>
				<Row x={RX + 10} y={465} at={k.bottom} size={46} color={AMBER}>F(0) = <Neg />½ cos 0 = −½</Row>
				<StudioLimitSubstitution x={RX + 10} y={560} size={52} prefix={<><Int lo="0" hi="π/4">sin 2x</Int> =</>} upper="0" lowerSign="−" lowerBody="½" at={k.so2} bracketAt={k.brk2} lowerAt={k.brk2 + 18} collapseAt={k.half - 8} />
				<AnswerBox x={RX + 10} y={670} at={k.half} size={52}>= ½</AnswerBox>
			</div> : null}
		</>
	);
};

// ---------- 6. e to the zero is one, ln one is zero ----------
const expx = (x: number) => Math.exp(x) + x;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const two = prog(fr, k.logs, 14);
	return (
		<>
			<SceneHeading text="e to the 0 is 1, and ln 1 is 0" at={4} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - two}}>
				<Graph x={GL.x} y={GL.y} w={GL.w} h={GL.h} win={{x: [-0.3, 2.35], y: [-0.6, 9.9]}} fn={expx} a={0} b={2} from={-0.25} to={2.2} xTicks={[1, 2]} yTicks={[4, 8]} yLabel="y"
					kids={m => <><PLabel p={m.p(0.15, 6.5)} text="+ expected" color="#287347" size={48} hand /><PLabel p={m.p(1.25, 9.0)} text={<>y = e<tspan baselineShift="super" fontSize="68%">x</tspan> + x</>} size={40} anchor="end" /></>} />
				<div style={{position: 'absolute', left: 480, top: 380, opacity: prog(fr, k.so + 40, 10)}}><Tick size={56} /></div>
				<Task x={RX} y={150} w={560} at={-30}><>Evaluate <Int lo="0" hi="2">(<Ex>x</Ex> + x)</Int></></Task>
				<BoxCard x={1560} y={150} w={320} at={-30} size={36} title="given">f(x) = <Ex>x</Ex> + x{'  '}from 0 to 2</BoxCard>
				<BoxCard x={RX} y={420} w={900} at={-30} out={k.at2 - 4} size={40} title="method">1. a primitive F<br />2. F(top) and F(bottom)<br />3. F(top) − (F(bottom))</BoxCard>
				<Row x={RX + 10} y={300} at={k.prim} size={50}>F(x) = <Ex>x</Ex> + x²/2</Row>
				<Row x={RX + 10} y={385} at={k.at2} size={48} color={ABLUE}>F(2) = e² + 2</Row>
				<Row x={RX + 10} y={470} at={k.at0} size={48} color={AMBER}>F(0) = <MarkSpan kind="circle" at={k.one} color="#d18f1f" width={5}><Ex>0</Ex></MarkSpan> + 0 = 1</Row>
				<HandTag x={RX + 560} y={500} text="e to the 0 is 1, not 0" at={k.one + 10} size={44} color="#7a4600" />
				<StudioLimitSubstitution x={RX + 10} y={580} size={50} prefix="=" upper="e² + 2" lowerBody="1" at={k.so} bracketAt={k.so + 20} lowerAt={k.so + 40} then={{content: <>= e² + 1</>, at: k.so + 70}} />
				<AnswerBox x={RX + 10} y={690} at={k.so + 70} size={52}>e² + 1</AnswerBox>
				<Hand x={RX + 330} y={700} at={k.about} size={44} color={SOFT}>≈ 8.39</Hand>
			</div>
			{two > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: two}}>
				<Graph x={GL.x} y={GL.y} w={GL.w} h={GL.h} win={{x: [-0.15, 3.2], y: [-0.2, 2.3]}} fn={x => 1 / Math.max(0.05, x)} a={1} b={Math.E} from={0.45} to={3.15} xTicks={[1, 2, {value: Math.E, label: 'e'}]} yTicks={[1, 2]} yLabel="y = 1/x"
					kids={m => <PLabel p={m.p(1.25, 0.25)} text="+ expected" color="#287347" size={44} hand />} />
				<Task x={RX} y={150} w={900} at={k.logs}><>Evaluate <Int lo="1" hi="e">(1/x)</Int></></Task>
				<Row x={RX + 10} y={300} at={k.int} size={52}><Lims lo="1" hi="e">ln x</Lims> = ln e − (<span style={{color: AMBER}}>ln 1</span>)</Row>
				<HandTag x={RX + 30} y={430} text="ln 1 = 0" at={k.lnone + 60} size={48} color="#7a4600" />
				<AnswerBox x={RX + 10} y={480} at={k.just} size={56}>= 1 − 0 = 1</AnswerBox>
				<Chip x={RX} y={640} at={k.leave} size={42} color="#8a8378">exact: e² + 1; a decimal only if asked</Chip>
				<Row x={RX + 10} y={760} at={k.logs} size={38} dim={1}>last example: e² + 1 ≈ 8.39</Row>
			</div> : null}
		</>
	);
};

// ---------- 7. working backwards: find the limit ----------
const two2 = (x: number) => 2 * x;
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const kv = kf(fr, [[k.now, 1], [k.now + 40, 3]]);
	const ghost = fr >= k.because;
	const kg = kf(fr, [[k.because, 1], [k.because + 80, -3]]);
	const kk = ghost ? kg : kv;
	const nG = Math.max(1, Math.round((1 - kg) * 2));
	const end = prog(fr, k.k3, 12);
	return (
		<>
			<SceneHeading text="Working backwards: find the limit" at={4} size={56} />
			<Graph x={GL.x} y={160} w={GL.w} h={800} win={{x: [-3.6, 3.6], y: [-7.6, 7.6]}} fn={two2} a={1} b={1} fillO={0} ends={false} xTicks={[-3, 1, 3]} yTicks={[-6, 6]} yLabel="y = 2x"
				under={m => <>
					{fr >= k.now ? <g opacity={ghost ? 0.35 : 1}><AreaFillLayer m={m} fn={two2} a={1} to={kv} signed /></g> : null}
					{ghost && kg < 0.99 ? <RiemannLayer m={m} fn={two2} a={kg} b={1} n={nG} rule="mid" direction="reverse" signed /> : null}
				</>}
				kids={m => {const [px, ay] = m.p(kk, 0); return <>
					{fr >= k.now ? <g><circle cx={px} cy={ay} r={14} fill={ABLUE} stroke={CARD} strokeWidth={4} /><text x={px} y={ay + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: ABLUE}} stroke={CARD} strokeWidth={6} paintOrder="stroke">k</text></g> : null}
					<PLabel p={m.p(-3.4, 6.4)} text="backwards integral: also 8" color={GRAD} size={42} hand o={prog(fr, k.plus8, 12)} />
				</>;}} />
			<Task x={RX} y={150} w={900} at={-30} size={42}><>Find k, where <MarkSpan kind="underline" at={k.k3} color="#d18f1f" width={5}>k &gt; 1</MarkSpan>, such that{'\n'}<Int lo="1" hi="k">2x</Int> = 8.</></Task>
			<Row x={RX + 10} y={340} at={k.prim} size={46}><Int lo="1" hi="k">2x</Int> = <Lims lo="1" hi="k">x²</Lims> = k² − 1</Row>
			<Row x={RX + 10} y={450} at={k.set} size={48}>k² − 1 = 8</Row>
			<Row x={RX + 10} y={530} at={k.then} size={48}>k² = 9, so <span style={{display: 'inline-block', border: `5px solid ${end > 0.5 ? '#287347' : 'transparent'}`, borderRadius: 12, padding: '0 8px'}}>k = 3</span><span style={{opacity: prog(fr, k.or, 10)}}> or <span style={{position: 'relative', color: end > 0.5 ? '#b8322a' : INK, textDecoration: end > 0.5 ? 'line-through' : undefined}}>k = −3</span></span></Row>
			<HandTag x={RX + 560} y={640} text="fails k > 1" at={k.k3 + 10} size={44} color="#b8322a" />
			<LiveReadoutBoard x={RX} y={690} width={900} at={k.now} inline size={50} labelSize={30} rows={[
				{label: 'k', value: kk, digits: 2, role: 'a'},
				{label: 'integral from 1 to k = k² − 1', value: kk * kk - 1, digits: 2, role: 'answer'},
			]} />
			<HandTag x={RX + 20} y={900} text="both runs reach 8: the condition decides" at={k.but} size={40} color={INK} />
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const tw = frostW(760);
	return (
		<>
			<SceneHeading text="The line to remember" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={820} />
			<ThermoRig x={130} y={185} h={760} T={1} mark={{T: -2, o: 1}} />
			<div style={{position: 'absolute', left: 150 + tw, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
			{[
				{at: k.top, icon: <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}><span style={{color: ABLUE}}>F(b)</span> − <span style={{color: AMBER}}>(F(a))</span></div>, text: <>Top minus <span style={{color: AMBER}}>(bracketed bottom)</span>.</>},
				{at: k.swap, icon: <svg width={220} height={90} viewBox="0 0 220 90"><path d="M30,30 C80,0 140,0 190,30" stroke={GRAD} strokeWidth={6} fill="none" /><path d="M176,14 L192,32 L170,38" stroke={GRAD} strokeWidth={6} fill="none" /><path d="M190,62 C140,92 80,92 30,62" stroke={GRAD} strokeWidth={6} fill="none" /><path d="M44,78 L28,60 L50,54" stroke={GRAD} strokeWidth={6} fill="none" /><text x={6} y={58} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>a</text><text x={198} y={58} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>b</text></svg>, text: <>Swap the ends, swap the sign.</>},
				{at: k.split, icon: <svg width={220} height={90} viewBox="0 0 220 90"><path d="M10,85 L10,50 Q60,30 105,40 L105,85 Z" fill="#d6eeee" stroke="#1f8a8f" strokeWidth={4} /><path d="M115,85 L115,40 Q160,30 210,20 L210,85 Z" fill="#b6dcd6" stroke="#1f8a8f" strokeWidth={4} /><text x={98} y={22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: '#13767a'}}>+</text></svg>, text: <>Split at a point inside, and the pieces add up.</>},
			].map((r, i) => <div key={i} style={{position: 'absolute', left: 170 + tw, top: 260 + i * 200, display: 'flex', alignItems: 'center', gap: 34, opacity: prog(fr, r.at, 12), transform: `translateX(${(1 - smooth(prog(fr, r.at, 14))) * -16}px)`}}>
				<div style={{width: 260, flex: 'none'}}>{r.icon}</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.05, color: INK, width: 1090 - tw}}>{r.text}</div>
			</div>)}
			<div style={{position: 'absolute', left: 190 + tw, top: 880, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK, opacity: prog(fr, k.up, 12)}}>f continuous. Any primitive F. Predict the sign first.</div>
		</>
	);
};
