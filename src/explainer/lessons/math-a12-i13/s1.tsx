// Scenes 1 to 5: the hook (i12's power graph; peak × time?), a strip of rate is an amount (strips refine, the energy
// meter counts), evaluating 96/π kWh and the model's domain, integrate a rate not a total (the factory), and a rate
// below the axis: net change or total flow (the dam gate).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, CardTitle, EquationStrip, HandTag, LiveReadoutBoard, MistakeCard, RiemannLayer, SceneHeading, StudioPlot, TaskStrip, fnPath, kf, smooth, vis} from '../../math/studio';
import {I12FinalFrame} from '../math-a12-i12/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {ACRig, AMB, AMB_INK, BLUE, Bl, Chip, E, GREEN, GREY, Int, Note, P, PLabel, RED_INK, SegRow, TEAL, VIO, cost, costSoFar, dam, damNet, damTotal, leftSum} from './parts';

const G = {x: 40, y: 150, w: 1100, h: 800};
const WIN = {x: [-0.6, 12.8] as [number, number], y: [-0.5, 4.8] as [number, number]};
const RX = 1190;
const clock = (t: number) => {const h = 8 + t; const hh = Math.floor(h), mm = Math.round((h - hh) * 60); const H = ((hh + 11) % 12) + 1; return `${H}${mm ? ':' + String(mm).padStart(2, '0') : ''} ${hh >= 12 && hh < 24 ? 'pm' : 'am'}`;};

const PowerPlot: React.FC<{t: number; marker?: number; children?: (m: Parameters<NonNullable<React.ComponentProps<typeof StudioPlot>['children']>>[0]) => React.ReactNode; g?: typeof G; win?: typeof WIN}> = ({t, marker = 1, children, g = G, win = WIN}) => (
	<StudioPlot x={g.x} y={g.y} width={g.w} height={g.h} window={win} xTicks={[{value: 0, label: '8 am'}, {value: 6, label: '2 pm'}, {value: 12, label: '8 pm'}]} yTicks={[2, 4]} xLabel="time after 8 am, t (h)" yLabel="power P (kW)" at={-30}>
		{m => {const [px, ay] = m.p(t, 0), [, py] = m.p(t, P(t)); return <>
			{children ? children(m) : null}
			<g clipPath={m.clip}><path d={fnPath(m, P, 0, 12)} stroke={BLUE} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			{marker > 0.001 ? <g opacity={marker}><line x1={px} x2={px} y1={ay} y2={py} stroke={INK} strokeWidth={3} strokeDasharray="6 6" /><circle cx={px} cy={py} r={12} fill={BLUE} stroke={CARD} strokeWidth={4} /></g> : null}
		</>;}}
	</StudioPlot>
);

// ---------- 1. hook ----------
const CUT = 12;
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <I12FinalFrame />;
	const sw = prog(f, k.power - 10, 16);
	const t = kf(f, [[k.peaks, 0], [k.peaks + 60, 6]]);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I12FinalFrame /></div> : null}
			{sw > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="How do integrals model a quantity from its rate?" at={k.power} size={52} />
				<PowerPlot t={t} marker={prog(f, k.power, 12)}>
					{m => {const [x0, y4] = m.p(0, 4), [x1, y0] = m.p(12, 0); return <>
						<rect x={x0} y={y4} width={x1 - x0} height={y0 - y4} fill="none" stroke={AMB} strokeWidth={5} strokeDasharray="14 10" opacity={prog(f, k.guess, 14)} />
						<PLabel p={m.p(3.6, 4.45)} text="P = 4 sin(πt/12)" color={BLUE} size={44} />
						<PLabel p={m.p(6.3, 4.1)} text="2 pm: 4 kW" size={38} o={prog(f, k.peaks + 50, 12)} />
					</>;}}
				</PowerPlot>
				<ACRig x={RX} y={170} w={690} t={t} />
				<LiveReadoutBoard x={RX} y={470} width={690} at={k.power} inline size={48} labelSize={30} rows={[{label: 'time', value: t, format: v => clock(v)}, {label: 'power', value: P(t), digits: 1, role: 'b', unit: 'kW', format: v => v.toFixed(1)}]} />
				<Card x={RX} y={660} w={690} at={k.power + 20} out={k.guess + 10} pad="14px 26px 16px"><CardTitle>power</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.35}}>how fast the unit uses energy, in kilowatts (kW)</div></Card>
				<Note x={RX} y={680} at={k.guess + 20} size={38} color={AMB_INK}>4 kW × 12 h = 48 kWh?</Note>
				<Chip x={RX} y={760} at={k.guess + 90} size={48} color={AMB}>more or less than 48 kWh?</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. a strip of rate is an amount ----------
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const n = f < k.add + 30 ? 12 : f < k.add + 70 ? 24 : 48;
	const stripsO = vis(f, k.add, k.thats + 20, 12);
	const fill = prog(f, k.thats, 20);
	const t = kf(f, [[k.thats, 0], [k.thats + 100, 12]]);
	const grey = vis(f, k.less, k.take, 12);
	return (
		<>
			<SceneHeading text="A strip of rate is an amount" at={4} size={52} />
			<PowerPlot t={t} marker={prog(f, k.thats, 12)}>
				{m => {const [x0, y4] = m.p(0, 4), [x1, y0] = m.p(12, 0); const s0 = m.p(3, P(3)), s1 = m.p(3.5, 0); return <>
					{grey > 0.001 ? <path d={`M${x0},${y4} L${x1},${y4} L${x1},${y0} ${Array.from({length: 61}, (_, i) => {const tt = 12 - i / 5; const q = m.p(tt, P(tt)); return `L${q[0]},${q[1]}`;}).join(' ')} Z`} fill="#d8d2c6" opacity={0.7 * grey} /> : null}
					<rect x={x0} y={y4} width={x1 - x0} height={y0 - y4} fill="none" stroke={AMB} strokeWidth={4} strokeDasharray="14 10" opacity={0.6} />
					{fill > 0.001 ? <g opacity={fill}><AreaFillLayer m={m} fn={P} a={0} to={t} signed /></g> : null}
					<g opacity={stripsO}><RiemannLayer m={m} fn={P} a={0} b={12} n={n} rule="left" signed /></g>
					<rect x={s0[0]} y={s0[1]} width={s1[0] - s0[0]} height={s1[1] - s0[1]} fill="#e7e0f2" stroke={VIO} strokeWidth={5} opacity={vis(f, k.take, k.add, 12)} />
					<PLabel p={m.p(3.6, 4.45)} text="P = 4 sin(πt/12)" color={BLUE} size={44} />
					<PLabel p={m.p(0.2, 4.4)} text="48 kWh guess" color={AMB_INK} size={34} />
					<PLabel p={m.p(3.65, P(3.25) / 2)} text="P kW" color={BLUE} size={36} o={vis(f, k.over, k.add, 12)} />
					<PLabel p={m.p(3.25, -0.42)} text="Δt h" size={36} anchor="middle" o={vis(f, k.over + 20, k.add, 12)} />
				</>;}}
			</PowerPlot>
			<HandTag x={790} y={318} text="4 kW: only an instant" at={k.less + 20} out={k.take - 6} size={40} color={AMB_INK} />
			<ACRig x={RX} y={170} w={690} t={t} />
			<Card x={RX} y={470} w={690} at={k.less + 10} out={k.over - 8} pad="14px 26px 16px">
				<CardTitle>less, because</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>4 kW lasts only an instant;<br />most of the day it draws less,<br /><span style={{color: AMB_INK}}>so 4 kW × 12 h counts too much</span></div>
			</Card>
			<Card x={RX} y={470} w={690} at={k.over} out={k.add - 8} pad="12px 24px 14px">
				<CardTitle>one strip</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}><Bl>P kW</Bl> × Δt h <span style={{opacity: prog(f, k.hours, 12)}}>= P Δt kWh</span></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: VIO, opacity: prog(f, k.area, 12)}}>area of strip = energy in that time</div>
			</Card>
			<LiveReadoutBoard x={RX} y={470} width={690} at={k.add} out={k.thats - 4} inline size={48} labelSize={30} rows={[{label: `sum of ${n} strips`, value: leftSum(P, 0, 12, n), digits: 2, unit: 'kWh', format: v => '≈ ' + v.toFixed(2)}]} />
			<Card x={RX} y={640} w={690} at={k.hours + 10} out={k.add - 8} pad="14px 26px 16px"><CardTitle>a kilowatt hour (kWh)</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.35}}>the energy from 1 kW for 1 hour: what the power bill counts</div></Card>
			<SegRow x={RX} y={470} size={50} segs={[{c: <>E = <Int lo="0" hi="12" v="t" color={BLUE}>P(t)</Int></>, at: k.thats}]} />
			<Note x={RX} y={570} at={k.thats + 20} size={30}>earlier videos: the definite integral</Note>
			<Chip x={RX} y={630} at={k.adds} size={36} color={GREEN} w={690}>integrate a rate over an interval → the amount it adds up to</Chip>
			<Chip x={RX} y={790} at={k.across} size={44} color={GREY}>units: kW × h = kWh</Chip>
		</>
	);
};

// ---------- 3. evaluate the energy, and the domain ----------
const G3 = {x: 30, y: 250, w: 900, h: 700};
const W3 = {x: [-0.6, 14.8] as [number, number], y: [-1.6, 4.8] as [number, number]};
const RX3 = 960;
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const contO = prog(f, k.after, 14);
	return (
		<>
			<TaskStrip text="Find the energy used from t = 0 to t = 12" at={4} size={48} />
			<EquationStrip at={8} y={160} size={50}>E = <Int lo="0" hi="12" v="t" color={BLUE}>4 sin(πt/12)</Int></EquationStrip>
			<Card x={1280} y={140} w={600} at={10} pad="8px 22px 10px"><CardTitle>Givens</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK, lineHeight: 1.25}}>P in kW; t in hours after 8 am<br /><span style={{color: AMB_INK}}>0 ≤ t ≤ 12</span></div></Card>
			<StudioPlot x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={W3} xTicks={[6, 12]} yTicks={[2, 4]} xLabel="t (h)" yLabel="power P (kW)" at={-30}>
				{m => {const a = m.p(12, -1.25), b = m.p(14.5, 0); return <>
					<AreaFillLayer m={m} fn={P} a={0} to={12} signed />
					<g clipPath={m.clip}><path d={fnPath(m, P, 0, 12)} stroke={BLUE} strokeWidth={7} fill="none" /><path d={fnPath(m, P, 12, 14.5)} stroke={RED_INK} strokeWidth={6} strokeDasharray="12 9" fill="none" opacity={contO} /></g>
					<path d={`M${m.p(12.3, 0.4).join(',')} L${m.p(14.4, -1.3).join(',')} M${m.p(14.4, 0.4).join(',')} L${m.p(12.3, -1.3).join(',')}`} stroke={RED_INK} strokeWidth={6} opacity={prog(f, k.after + 60, 12)} />
					<PLabel p={m.p(13.5, 1.0)} text="can't be negative" color={RED_INK} size={36} hand anchor="middle" o={prog(f, k.after + 60, 12)} />
					{(() => {const p0 = m.p(0, -1.0), p1 = m.p(12, -1.0); const o = prog(f, k.twelve, 12); return <g opacity={o}><line x1={p0[0]} x2={p1[0]} y1={p0[1]} y2={p1[1]} stroke={AMB} strokeWidth={8} /><circle cx={p0[0]} cy={p0[1]} r={10} fill={AMB} /><circle cx={p1[0]} cy={p1[1]} r={10} fill={AMB} /><text x={(p0[0] + p1[0]) / 2} y={p0[1] - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: AMB_INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">0 ≤ t ≤ 12</text></g>;})()}
					<PLabel p={m.p(3.4, 1.0)} text="96/π ≈ 30.6 kWh" color={TEAL} size={38} o={prog(f, k.hours, 12)} />
					{a && b ? null : null}
				</>;}}
			</StudioPlot>
			<Note x={RX3} y={306} at={k.inside} size={32}>linear inside πt/12: divide by π/12 (earlier video)</Note>
			<Card x={RX3} y={380} w={900} at={20} out={k.gives - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. a primitive of 4 sin(πt/12)<br />2. F(12) − F(0)<br />3. answer in kWh, and compare with 48</div>
			</Card>
			<SegRow x={RX3} y={360} size={48} segs={[{c: <>= [−(48/π) cos(πt/12)]₀¹²</>, at: k.gives}]} />
			<SegRow x={RX3} y={450} size={40} segs={[{c: <>= −(48/π)(cos π − cos 0)</>, at: k.at12}, {c: <>= −(48/π)(−1 − 1)</>, at: k.at0 + 30}]} />
			<SegRow x={RX3} y={545} size={52} segs={[{c: <>= 96/π kWh</>, at: k.so + 20}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>≈ 30.6 kWh</span>, at: k.hours}]} answerAt={k.so + 26} />
			<MistakeCard x={RX3} y={650} w={900} at={k.less} size={46} wrong={<>48 kWh</>} caption="peak × time overcounts" />
		</>
	);
};

// ---------- 4. integrate a rate, not a total ----------
const RX4 = 1070;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const X = kf(f, [[k.raising, 100], [k.raising + 190, 200]]);
	return (
		<>
			<TaskStrip text="Integrate a rate, not a total" at={4} size={52} />
			<EquationStrip at={k.raising - 20} y={160} size={48}>Extra cost = <Int lo="100" hi="200" color={BLUE}>(50 − 0.2x)</Int></EquationStrip>
			<StudioPlot x={30} y={270} width={1010} height={680} window={{x: [80, 215], y: [-3, 62]}} xTicks={[100, 150, 200]} yTicks={[10, 20, 30, 40, 50]} xLabel="items made, x" yLabel="cost of one more item ($ per item)" at={-30}>
				{m => <>
					{X > 100.5 ? <AreaFillLayer m={m} fn={cost} a={100} to={X} signed /> : null}
					<g clipPath={m.clip}><path d={fnPath(m, cost, 100, 200)} stroke={BLUE} strokeWidth={7} fill="none" /></g>
					{(() => {const p = m.p(X, 0), q = m.p(X, cost(X)); return <g opacity={prog(f, k.raising, 12)}><line x1={p[0]} x2={q[0]} y1={p[1]} y2={q[1]} stroke={INK} strokeWidth={3} strokeDasharray="6 6" /><circle cx={p[0]} cy={p[1]} r={12} fill={INK} /></g>;})()}
					<PLabel p={m.p(150, 26)} text="50 − 0.2x  ($ per item)" color={BLUE} size={38} anchor="middle" o={prog(f, k.factory + 40, 12)} />
				</>}
			</StudioPlot>
			<LiveReadoutBoard x={150} y={330} width={520} at={k.raising} inline size={50} labelSize={30} rows={[{label: 'items x', value: X, format: v => String(Math.round(v))}, {label: 'extra cost so far', value: costSoFar(X), format: v => '$' + Math.round(v)}]} />
			<Card x={RX4} y={150} w={810} at={k.factory + 10} out={k.rate - 6} pad="14px 26px 16px">
				<CardTitle>a factory</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>one more item costs <Bl>50 − 0.2x</Bl> dollars<br />when x items are already being made<br /><span style={{color: '#4f4840', opacity: prog(f, k.factory + 120, 12)}}>x = 100: $30 each;  x = 200: $10 each</span></div>
			</Card>
			<Card x={RX4} y={150} w={810} at={k.rate} pad="10px 22px 12px"><CardTitle>Givens</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK, lineHeight: 1.3}}>rate in $ per item; x in items; <span style={{color: AMB_INK}}>100 ≤ x ≤ 200</span></div></Card>
			<SegRow x={RX4} y={440} size={46} out={k.raising - 10} segs={[{c: <>items 100 to 200: extra cost = ?</>, at: k.factory + 150}]} />
			<SegRow x={RX4} y={330} size={46} segs={[{c: <>= [50x − 0.1x²]₁₀₀²⁰⁰</>, at: k.primitive}]} />
			<SegRow x={RX4} y={415} size={44} segs={[{c: <>= (10 000 − 4000) − (5000 − 1000)</>, at: k.primitive + 50}]} />
			<SegRow x={RX4} y={500} size={52} segs={[{c: <>= $2000</>, at: k.dollars}]} answerAt={k.dollars + 6} />
			<Chip x={RX4} y={600} at={k.per} size={40} color={GREEN}>$/item × items = $  ✓</Chip>
			<MistakeCard x={RX4} y={690} w={810} at={k.but} size={40} wrong={<>∫ P(x) dx, P a profit in $</>} caption="$ × items: not a change in $" />
			<Chip x={RX4} y={890} at={k.so} size={36} color={GREEN}>integrate a rate → an amount</Chip>
		</>
	);
};

// ---------- 5. a rate below the axis ----------
const RX5 = 1070;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const t = kf(f, [[k.after, 0], [k.integral + 40, 6]]);
	const flip = smooth(prog(f, k.mega - 30, 30));
	return (
		<>
			<TaskStrip text="A rate below the axis: net change or total?" at={4} size={52} />
			<EquationStrip at={k.water} y={160} size={42}>Water moves through a gate into a dam at r(t) = 8 − 2t ML/day, 0 ≤ t ≤ 6.</EquationStrip>
			<StudioPlot x={30} y={260} width={1010} height={690} window={{x: [-0.4, 6.6], y: [-5, 9]}} xTicks={[2, 4, 6]} yTicks={[-4, 4, 8].map(v => ({value: v, label: v < 0 ? '−4' : String(v)}))} xLabel="time t (days)" yLabel="rate into the dam (ML per day)" at={-30}>
				{m => <>
					{t > 0.01 ? <AreaFillLayer m={m} fn={dam} a={0} to={Math.min(t, 4)} signed /> : null}
					{t > 4.01 ? <g opacity={1 - flip}><AreaFillLayer m={m} fn={dam} a={4} to={t} signed /></g> : null}
					{flip > 0.001 ? <g opacity={flip}><AreaFillLayer m={m} fn={x => -dam(x)} a={4} to={6} signed /></g> : null}
					<g clipPath={m.clip}><path d={fnPath(m, dam, 0, 6)} stroke={BLUE} strokeWidth={7} fill="none" /></g>
					{(() => {const p = m.p(t, 0), q = m.p(t, dam(t)); return <g opacity={vis(f, k.after, k.integral + 50, 10)}><line x1={p[0]} x2={q[0]} y1={p[1]} y2={q[1]} stroke={INK} strokeWidth={3} strokeDasharray="6 6" /><circle cx={q[0]} cy={q[1]} r={12} fill={BLUE} stroke={CARD} strokeWidth={4} /></g>;})()}
					<PLabel p={m.p(1.2, 2.5)} text="+16" color={TEAL} size={48} o={prog(f, k.integral, 12)} />
					<PLabel p={m.p(4.6, flip > 0.5 ? 1.5 : -2.2)} text={flip > 0.5 ? '4 out' : '−4'} color={RED_INK} size={44} o={prog(f, k.integral + 20, 12)} />
					<PLabel p={m.p(3.9, -3.9)} text="flowing back out" color={RED_INK} size={40} hand o={vis(f, k.after + 30, k.integral, 12)} />
				</>}
			</StudioPlot>
			<Card x={RX5} y={260} w={810} at={k.water + 30} out={k.after - 6} pad="14px 26px 16px">
				<CardTitle>the dam gate</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>rate <Bl>8 − 2t</Bl> megalitres per day<br /><span style={{color: '#4f4840'}}>a megalitre (ML): a million litres</span><br />positive: water flows in</div>
			</Card>
			<LiveReadoutBoard x={RX5} y={260} width={810} at={k.after} inline size={50} labelSize={30} rows={[{label: 'net change', value: damNet(t), digits: 1, unit: 'ML', format: v => v.toFixed(1)}, {label: 'total through the gate', value: damTotal(t), digits: 1, unit: 'ML', role: 'b', format: v => v.toFixed(1)}]} />
			<SegRow x={RX5} y={450} size={48} segs={[{c: <><Int lo="0" hi="6" v="t" color={BLUE}>(8 − 2t)</Int> = [8t − t²]₀⁶ = 12</>, at: k.integral}]} />
			<SegRow x={RX5} y={550} size={48} segs={[{c: <>net change: 12 ML</>, at: k.started}]} answerAt={k.started + 6} />
			<SegRow x={RX5} y={640} size={48} segs={[{c: <span style={{borderLeft: `6px solid ${TEAL}`, paddingLeft: 12}}>total flow: 16 + 4 = 20 ML</span>, at: k.mega}]} answerAt={k.mega + 8} />
			<Card x={RX5} y={760} w={810} at={k.decides} pad="10px 22px 12px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.1}}>the question decides</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK, lineHeight: 1.4}}><span style={{opacity: prog(f, k.if1, 12)}}>How much did it change? → the integral</span><br /><span style={{opacity: prog(f, k.if2, 12), color: TEAL}}>How much flowed in total? → the area</span></div>
			</Card>
		</>
	);
};
export {E, GREY};
