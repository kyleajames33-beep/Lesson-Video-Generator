// Scenes 5 to 8: no graph (zeros, sign tests on a strip, then the sketch; pieces 4/3, −4/3, 4/3; area 4 against the
// single integral 4/3), an exact log zero (eˣ − 2 on [0, 1]), the reversing car (displacement 32 m, distance 40 m)
// and the memory card with the lift.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, HandTag, LiveReadoutBoard, MistakeCard, SceneHeading, StudioPlot, kf, regionPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {BPlot} from './s1';
import {ABLUE, AnswerBox, BoxCard, Ex, FlipFill, FramedCard, Hand, Int, LiftShaftSim, Named, PLabel, Road, Row, SOFT, TEAL, Task, cq, ex2, odo, scar, vcar} from './parts';

const RX = 1120;

// ---------- 5. no graph ----------
const SX = {x: 80, y: 380, w: 960};
const sx = (v: number) => SX.x + 30 + (v / 4) * (SX.w - 60);
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const sketch = prog(fr, k.pos4 + 20, 16);
	const flip = smooth(prog(fr, k.make, 28));
	const tests = [{at: k.at0, x: 0.5, t: 'f(0) = 3: +', c: '#13767a'}, {at: k.at2, x: 2, t: 'f(2) = −1: −', c: '#9c5a00'}, {at: k.at4, x: 3.5, t: 'f(4) = 3: +', c: '#13767a'}];
	return (
		<>
			<SceneHeading text="No graph: zeros, signs, pieces" at={4} size={56} />
			<Task x={60} y={150} w={1820} at={-30} size={44}>Find the area of the region bounded by y = x² − 4x + 3, the x-axis{'\n'}and the lines x = 0 and x = 4.</Task>
			<FrameSvg>
				<line x1={SX.x} x2={SX.x + SX.w} y1={SX.y + 60} y2={SX.y + 60} stroke={INK} strokeWidth={6} />
				{[0, 1, 2, 3, 4].map(v => <g key={v}><line x1={sx(v)} x2={sx(v)} y1={SX.y + 42} y2={SX.y + 78} stroke={INK} strokeWidth={v === 0 || v === 4 ? 8 : 5} /><text x={sx(v)} y={SX.y + 122} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK}}>{v === 0 || v === 4 ? `x = ${v}` : v}</text></g>)}
				{[1, 3].map(v => <g key={v} opacity={prog(fr, k.three, 12)}><line x1={sx(v)} x2={sx(v)} y1={SX.y - 10} y2={SX.y + 80} stroke={TEAL} strokeWidth={5} strokeDasharray="10 8" /><circle cx={sx(v)} cy={SX.y + 60} r={13} fill={CARD} stroke={TEAL} strokeWidth={5} /></g>)}
				{tests.map((q, i) => <text key={i} x={sx(q.x)} y={SX.y + 20} textAnchor="middle" opacity={prog(fr, q.at, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: q.c}}>{q.t}</text>)}
			</FrameSvg>
			{sketch < 0.99 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sketch}}>
				<StudioPlot x={SX.x - 20} y={530} width={SX.w + 40} height={450} window={{x: [-0.12, 4.12], y: [-1.6, 3.6]}} xTicks={[1, 2, 3, 4]} yTicks={[3]} xLabel="x" yLabel="y" at={-30}>
					{(m: PlotMap) => {const [x0] = m.p(0, 0), [x4] = m.p(4, 0); return <>{[x0, x4].map((px, i) => <line key={i} x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={INK} strokeWidth={4} strokeDasharray="12 9" />)}<text x={x0 + 16} y={m.box.top + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>x = 0</text><text x={x4 - 16} y={m.box.top + 40} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>x = 4</text><text x={(x0 + x4) / 2} y={m.box.top + 130} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: SOFT}}>sketch comes second</text><text x={(x0 + x4) / 2} y={m.box.top + 190} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: SOFT}}>first: where is y above or below?</text></>;}}
				</StudioPlot>
			</div> : null}
			{sketch > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: sketch}}>
				<BPlot x={SX.x - 20} y={530} w={SX.w + 40} h={450} win={{x: [-0.12, 4.12], y: [-1.6, 3.6]}} fn={cq} xTicks={[1, 2, 3, 4]} yTicks={[3]}
					under={m => <>
						<AreaFillLayer m={m} fn={cq} a={0} to={1} signed />
						<FlipFill m={m} fn={cq} a={1} b={3} p={flip} />
						<AreaFillLayer m={m} fn={cq} a={3} to={4} signed />
					</>}
					kids={m => <><PLabel p={m.p(1.4, 3.0)} text="signs first, sketch second" color={SOFT} size={38} hand /><PLabel p={m.p(0.1, 0.4)} text="4/3" size={40} o={prog(fr, k.answers, 12)} /><PLabel p={m.p(1.7, flip > 0.5 ? 0.35 : -0.7)} text={flip > 0.5 ? '4/3' : '−4/3'} size={40} o={prog(fr, k.answers, 12)} /><PLabel p={m.p(3.3, 0.8)} text="4/3" size={40} o={prog(fr, k.answers, 12)} /></>} />
			</div> : null}
			<Row x={RX} y={340} at={k.fact} size={46}>x² − 4x + 3 = (x − 1)(x − 3)</Row>
			<Row x={RX} y={420} at={k.three} size={46} color={TEAL}>zeros: x = 1, x = 3</Row>
			<Row x={RX} y={500} at={k.now} size={34} color={SOFT}>F(x) = x³/3 − 2x² + 3x</Row>
			<Row x={RX} y={550} at={k.answers} size={44}><Int lo="0" hi="1">f</Int> = 4/3,  <Int lo="1" hi="3">f</Int> = −4/3,  <Int lo="3" hi="4">f</Int> = 4/3</Row>
			<Named x={RX} y={650} kind="area" at={k.four - 30} size={44} frame={prog(fr, k.four, 10)}>4/3 + 4/3 + 4/3 = 4</Named>
			<Named x={RX} y={750} kind="int" at={k.single} size={44}><Int lo="0" hi="4">f</Int> = 4/3</Named>
			<MistakeCard x={RX} y={840} w={760} at={k.only + 20} size={42} wrong={<>|4/3| = area?</>} caption="|4/3| is not the area" />
		</>
	);
};

// ---------- 6. a zero that isn't a whole number ----------
const L2 = Math.LN2;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const flip = smooth(prog(fr, k.make, 26));
	return (
		<>
			<SceneHeading text="A zero that isn't a whole number" at={4} size={56} />
			<BPlot x={40} y={150} w={760} h={800} win={{x: [-0.12, 1.15], y: [-1.25, 0.95]}} fn={ex2} from={-0.05} to={1.1} xTicks={[{value: L2, label: 'ln 2'}, 1]} yTicks={[-1]}
				under={m => <>
					{fr >= k.at0 ? <FlipFill m={m} fn={ex2} a={0} b={L2} p={flip} o={prog(fr, k.at0, 12)} /> : null}
					{fr >= k.at1 ? <g opacity={prog(fr, k.at1, 12)}><AreaFillLayer m={m} fn={ex2} a={L2} to={1} signed /></g> : null}
				</>}
				kids={m => {const [zx, zy] = m.p(L2, 0); return <>
					<g opacity={prog(fr, k.so, 12)}><circle cx={zx} cy={zy} r={13} fill={CARD} stroke={TEAL} strokeWidth={5} /></g>
					<PLabel p={m.p(0.02, -1.15)} text="f(0) = −1: −" color="#9c5a00" size={40} hand o={prog(fr, k.at0, 12)} />
					<PLabel p={m.p(0.62, 0.62)} text="f(1) = e − 2: +" color={TEAL} size={40} hand o={prog(fr, k.at1, 12)} />
					<PLabel p={m.p(0.0, 0.85)} text={<>y = e<tspan baselineShift="super" fontSize="68%">x</tspan> − 2</>} color={ABLUE} size={40} />
				</>;}} />
			<Task x={840} y={150} w={1040} at={-30} size={38}>Find the area of the region bounded by y = <Ex>x</Ex> − 2,{'\n'}the x-axis and the lines x = 0 and x = 1.</Task>
			<BoxCard x={840} y={620} w={1040} at={-30} out={k.first - 6} size={42} title="same steps">zero, sign tests, one integral per piece, make positive, add</BoxCard>
			<Row x={850} y={330} at={k.meets} size={44}><Ex>x</Ex> − 2 = 0, so <Ex>x</Ex> = 2, so x = ln 2</Row>
			<Hand x={1590} y={336} at={k.about} size={40} color={SOFT}>≈ 0.69</Hand>
			<Row x={850} y={415} at={k.with} size={34} color={SOFT}>F(x) = <Ex>x</Ex> − 2x</Row>
			<Row x={850} y={465} at={k.first} size={40}>first: (2 − 2 ln 2) − (1) = 1 − 2 ln 2 <span style={{color: SOFT, fontSize: 32}}>≈ −0.39</span></Row>
			<Row x={850} y={545} at={k.second} size={40}>second: (e − 2) − (2 − 2 ln 2) = e − 4 + 2 ln 2</Row>
			<Hand x={1600} y={600} at={k.second + 40} size={34} color={SOFT}>≈ 0.10</Hand>
			<Named x={840} y={650} kind="area" at={k.area} size={40} frame={prog(fr, k.area + 20, 10)}>(2 ln 2 − 1) + (e − 4 + 2 ln 2)</Named>
			<AnswerBox x={840} y={760} at={k.area + 30} size={50}>area = e − 5 + 4 ln 2</AnswerBox>
			<Hand x={1430} y={772} at={k.about2} size={40} color={SOFT}>≈ 0.49</Hand>
			<HandTag x={850} y={920} text="keep ln 2 exact until the end" at={k.keep} size={42} color="#9c5a00" />
		</>
	);
};

// ---------- 7. the car: displacement and distance ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const t = kf(fr, [[k.reverses, 0], [k.reverses + 100, 6], [k.from6, 6], [k.from6 + 80, 8]]);
	return (
		<>
			<SceneHeading text="The car: displacement and distance" at={4} size={56} />
			<Road x={60} y={140} w={1800} s={scar(t)} />
			<Hand x={1120} y={150} at={k.back} size={42} color="#9c5a00">back 4 m</Hand>
			<BPlot x={40} y={420} w={1020} h={560} win={{x: [-0.3, 8.6], y: [-5.5, 13.5]}} fn={vcar} from={0} to={8} xTicks={[2, 4, 6, 8]} yTicks={[-4, 6, 12]} xLabel="t (s)" yLabel="v (m/s)"
				under={m => t > 0.01 ? <AreaFillLayer m={m} fn={vcar} a={0} to={t} signed /> : null}
				kids={m => {const [zx, zy] = m.p(6, 0), [px] = m.p(t, 0); return <>
					<circle cx={zx} cy={zy} r={12} fill={CARD} stroke={TEAL} strokeWidth={5} />
					{fr >= k.reverses ? <line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke="#d18f1f" strokeWidth={4} strokeDasharray="8 8" /> : null}
					<PLabel p={m.p(2.2, 3)} text="36" size={52} o={prog(fr, k.m36, 12)} />
					<PLabel p={m.p(6.3, -1.4)} text="−4" size={44} o={prog(fr, k.minus4, 12)} />
					<PLabel p={m.p(4.3, 12.2)} text="displacement: signed integral, 32 m" color={INK} size={34} hand o={prog(fr, k.dispis, 12)} />
					<PLabel p={m.p(4.3, 10.4)} text="distance: area, 40 m" color="#9c5a00" size={34} hand o={prog(fr, k.dist, 12)} />
				</>;}} />
			<LiveReadoutBoard x={1100} y={420} width={780} at={-30} inline size={44} labelSize={28} rows={[
				{label: 'time', value: t, digits: 1, unit: 's'},
				{label: 'velocity', value: vcar(t), digits: 1, role: 'a', unit: 'm/s'},
				{label: 'displacement', value: scar(t), digits: 1, role: 'height', unit: 'm'},
				{label: 'odometer: distance', value: odo(t), digits: 1, role: 'k', unit: 'm'},
			]} />
			<Row x={1110} y={730} at={k.its} size={40}><Int lo="0" hi="8" v="t">(12 − 2t)</Int> = 32 m</Row>
			<Row x={1110} y={800} at={k.m36} size={40}><Int lo="0" hi="6" v="t">(12 − 2t)</Int> = 36, <Int lo="6" hi="8" v="t">(12 − 2t)</Int><span style={{opacity: prog(fr, k.minus4, 10)}}> = −4</span></Row>
			<Named x={1100} y={880} kind="area" at={k.total} size={42} frame={prog(fr, k.forty, 10)}>36 + |−4| = 40 m</Named>
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const words = [{t: 'Find the zeros,', at: k.zeros}, {t: 'split,', at: k.split}, {t: 'flip the negatives,', at: k.flip}, {t: 'then add.', at: k.add}];
	const icon = (i: number) => {
		const c = TEAL;
		if (i === 0) return <svg width={220} height={120}><line x1={10} x2={210} y1={70} y2={70} stroke={INK} strokeWidth={4} />{[70, 150].map(x => <circle key={x} cx={x} cy={70} r={12} fill={CARD} stroke={c} strokeWidth={5} />)}<path d="M20,30 Q70,120 110,70 T200,40" stroke={ABLUE} strokeWidth={5} fill="none" /></svg>;
		if (i === 1) return <svg width={220} height={120}><line x1={10} x2={210} y1={70} y2={70} stroke={INK} strokeWidth={4} /><line x1={110} x2={110} y1={10} y2={110} stroke={c} strokeWidth={5} strokeDasharray="10 8" /></svg>;
		if (i === 2) return <svg width={220} height={120}><line x1={10} x2={210} y1={70} y2={70} stroke={INK} strokeWidth={4} /><path d="M40,70 Q110,120 180,70 Z" fill="none" stroke="#8a8378" strokeWidth={3} strokeDasharray="8 6" /><path d="M40,70 Q110,20 180,70 Z" fill="#f8e8c8" stroke="#d18f1f" strokeWidth={4} /><path d="M110,95 V60 M98,72 L110,58 L122,72" stroke="#9c5a00" strokeWidth={4} fill="none" /></svg>;
		return <svg width={220} height={120}><path d="M110,30 V110 M70,70 H150" stroke="#287347" strokeWidth={10} strokeLinecap="round" /></svg>;
	};
	return (
		<>
			<SceneHeading text="A way to remember the method" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={820} />
			<div style={{position: 'absolute', left: 110, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
			{words.map((w, i) => <div key={i} style={{position: 'absolute', left: 110 + i * 330, top: 240, width: 320, opacity: prog(fr, w.at, 12)}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.05, color: INK, height: 130}}>{w.t}</div>
				<div style={{marginTop: 6}}>{icon(i)}</div>
			</div>)}
			<Named x={120} y={640} kind="int" at={k.integral} size={46}>keeps the signs (net change)</Named>
			<Named x={120} y={760} kind="area" at={k.area} size={46}>every piece positive (floors travelled)</Named>
			<LiftShaftSim x={1550} y={185} h={760} lv={2 - 2 * smooth(prog(fr, k.integral, 60))} />
		</>
	);
};
