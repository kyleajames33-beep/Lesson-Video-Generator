// Scenes 1 to 5: the hook (i07's frame becomes the car park: the net rate 3 − t, the counter and the net-flow arrow
// driven by one clock), A by shapes on the paired view, the gradient of A against the height (the fullest moment is
// when the arrow vanishes), the edge strip and chord (h 0.5, 0.1, 0.01) and A as a primitive (the g01 check).
// I07FinalFrameStandIn is i07's described final frame (i07 is not built yet).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, HandTag, LiveReadoutBoard, ParameterSlider, SceneHeading, StudioPlot, fnPath, kf, makePlot, regionPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {A, ABLUE, AMBER, AMBER_STROKE, AnswerBox, BoxCard, Bu, CarParkRig, Chip, GRAD, Glow, Int, PG, PLabel, PairView, Rows, Stub, TEAL, Te, Tick, Vi, cars, clock, f} from './parts';
import type {PairG} from './parts';

const SOFT = '#4f4840';
// ---------- the single graph (i07's frame and scene 1) ----------
const G1 = {x: 40, y: 150, w: 1080, h: 790, win: {x: [-0.3, 6.3] as [number, number], y: [-3.5, 3.5] as [number, number]}};
const CLOCK_TICKS = [{value: 1, label: '1', sub: '10 am'}, {value: 2, label: '2', sub: '11'}, {value: 3, label: '3', sub: 'noon'}, {value: 4, label: '4', sub: '1 pm'}, {value: 5, label: '5', sub: '2'}, {value: 6, label: '6', sub: '3 pm'}];
const g1 = () => makePlot(G1.x, G1.y, G1.w, G1.h, G1.win);
const OneGraph: React.FC<{X: number; color: string; clockTicks?: boolean; label?: string; kids?: (m: PlotMap) => React.ReactNode}> = ({X, color, clockTicks = false, label = 't', kids}) => (
	<StudioPlot x={G1.x} y={G1.y} width={G1.w} height={G1.h} window={G1.win} xTicks={clockTicks ? CLOCK_TICKS : [1, 2, 3, 4, 5, 6]} yTicks={[-3, 3]} xLabel={label} yLabel={clockTicks ? 'net rate (hundred cars per hour)' : 'y'} at={-30}>
		{m => {const [px, ay] = m.p(X, 0), [, py] = m.p(X, f(X)); return <>
			<AreaFillLayer m={m} fn={f} a={0} to={X} signed />
			<g clipPath={m.clip}><path d={fnPath(m, f, 0, 6)} stroke={color} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			{[0, 6].map(t => {const [qx, qy] = m.p(t, f(t)); return <circle key={t} cx={qx} cy={qy} r={11} fill={color} stroke={CARD} strokeWidth={4} />;})}
			<line x1={px} x2={px} y1={ay} y2={py} stroke={AMBER_STROKE} strokeWidth={5} />
			<circle cx={px} cy={ay} r={14} fill={AMBER_STROKE} stroke={CARD} strokeWidth={4} />
			<text x={px + 18} y={ay - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">x</text>
			{kids ? kids(m) : null}
		</>;}}
	</StudioPlot>
);

/** i07's final frame as its design describes it (i07 is not built; replace with its export once it is). */
export const I07FinalFrameStandIn: React.FC = () => (
	<>
		<SceneHeading text="How fast does it grow?" at={-300} size={56} />
		<OneGraph X={2} color={ABLUE} />
		<BoxCard x={1170} y={200} w={710} at={-300} size={52} title="shaded signed area">A(x) = <Int lo="0" hi="x" v="t">(3 − t)</Int> = <span style={{color: '#7a4600'}}>?</span></BoxCard>
		<Chip x={1170} y={430} at={-300} size={46} color={AMBER_STROKE}>Next: let the end move</Chip>
		<HandTag x={1180} y={640} text="the end x moves: the area changes" at={-300} size={42} color={SOFT} />
		<div style={{position: 'absolute', left: 1180, top: 700, width: 680, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.25, color: SOFT}}>last video: above the axis adds, below the axis subtracts</div>
	</>
);

// ---------- 1. hook ----------
const PLATE1 = {x: 1180, y: 200, w: 690};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.meaning, 16);
	if (sw <= 0) return <I07FinalFrameStandIn />;
	const X = kf(fr, [[k.meaning, 2], [k.meaning + 40, 0], [k.hour + 10, 0], [k.hour + 70, 2], [k.negative + 6, 2], [k.negative + 56, 4], [k.arrive + 16, 4], [k.arrive + 56, 2]]);
	const m = g1();
	const at = (X0: number, Y0: number) => m.pf(X0, Y0);
	const [cx, cy] = at(3.05, 1.15);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I07FinalFrameStandIn /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="Why does differentiating accumulation recover the rate?" at={k.meaning - 10} size={52} />
				<OneGraph X={X} color={TEAL} clockTicks label="t (hours after 9 am)" kids={mm => <>
					<PLabel p={mm.p(1.35, 3.05)} text="net rate = 3 − t" color={TEAL} size={44} o={prog(fr, k.net, 12)} />
					<PLabel p={mm.p(1.35, 2.5)} text="(hundred cars per hour)" color={TEAL} size={32} o={prog(fr, k.net, 12)} />
					<PLabel p={mm.p(0.15, -1.3)} text="A(x): signed area from 0 up to x" color={ABLUE} size={38} hand o={prog(fr, k.aofx, 12)} />
					<PLabel p={mm.p(3.75, 0.3)} text="after noon: more cars leave" color="#7a4600" size={36} hand o={prog(fr, k.noon, 12)} />
					<PLabel p={mm.p(3.2, -2.55)} text="t: the variable along the axis" color={SOFT} size={34} hand o={prog(fr, k.weuse, 12)} />
					<PLabel p={mm.p(Math.max(0.15, X - 0.1), -1.95)} text="x: where we stop" color={AMBER} size={34} hand o={prog(fr, k.weuse + 20, 12)} />
				</>} />
				<div style={{position: 'absolute', left: cx, top: cy, opacity: prog(fr, k.integral, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: ABLUE, whiteSpace: 'pre', background: 'rgba(255,253,248,0.92)', borderRadius: 14, padding: '2px 12px'}}>A(x) = <Int lo="0" hi="x" v="t" color={TEAL}>(3 − t)</Int></div>
				<div style={{position: 'absolute', inset: 0, transform: `translateX(${(1 - smooth(sw)) * 260}px)`}}>
					<CarParkRig x={PLATE1.x} y={PLATE1.y} w={PLATE1.w} count={cars(X)} rate={f(X)} ring={{o: prog(fr, k.fullest, 12), color: '#7a4600', q: true}} />
				</div>
				<LiveReadoutBoard x={1180} y={700} width={690} at={k.meaning} inline size={50} labelSize={30} rows={[
					{label: 'time', value: X, role: 'k', format: clock},
					{label: 'net rate', value: f(X), digits: 2, role: 'b', unit: '× 100 cars/h'},
					{label: 'extra cars since 9 am', value: cars(X), role: 'a', format: v => String(Math.round(v)), glow: [k.counts, k.counts + 100]},
				]} />
				<FrameSvg><Countdown start={1395} end={1485} x={1030} y={232} r={50} ringFrom={k.think} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- shared right column for the paired scenes ----------
const RC = 1150;
const PLATE2 = {x: 1210, y: 196, w: 560};

// ---------- 2. track A with shapes ----------
const outline = (m: PlotMap, X: number, o: number, labels: [string, string]) => {
	if (o <= 0.01) return null;
	const p0 = m.p(0, 0), p1 = m.p(0, 3), p2 = m.p(X, f(X)), p3 = m.p(X, 0);
	return <g opacity={o}>
		<path d={`M${p0[0]},${p0[1]} L${p1[0]},${p1[1]} L${p2[0]},${p2[1]} L${p3[0]},${p3[1]} Z`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		<text x={p1[0] + 14} y={(p0[1] + p1[1]) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{labels[0]}</text>
		{labels[1] ? <text x={p2[0] + 12} y={(p2[1] + p3[1]) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{labels[1]}</text> : null}
	</g>;
};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const X = kf(fr, [[k.one, 2], [k.one + 40, 1], [k.two, 1], [k.two + 40, 2], [k.three, 2], [k.three + 40, 3], [k.past, 3], [k.past + 70, 3.6], [k.afour - 6, 3.6], [k.afour + 24, 4], [k.six, 4], [k.six + 36, 6]]);
	const dots = [{x: 1, at: k.half1}, {x: 2, at: k.four + 26}, {x: 3, at: k.half2}, {x: 4, at: k.afour + 28}, {x: 6, at: k.zero + 8}].map(d => ({x: d.x, o: prog(fr, d.at, 10)}));
	const win = (a: number, b: number) => prog(fr, a, 12) * (1 - prog(fr, b, 10));
	return (
		<>
			<SceneHeading text="Track A(x) with shapes" at={4} size={56} />
			<PairView X={X} dots={dots} curve={{from: 0, to: 6 * smooth(prog(fr, k.hill, 40))}}
				topKids={m => <>
					{(() => {const o = 1 - prog(fr, k.one, 12); const [bx, by0] = m.p(2, 0), [, by1] = m.p(2, 4); return o > 0.01 ? <g opacity={o}><line x1={bx} x2={bx} y1={by0} y2={by1} stroke={ABLUE} strokeWidth={14} strokeLinecap="round" opacity={0.55} /><text x={bx + 30} y={by1 + 10} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: ABLUE}} stroke={CARD} strokeWidth={7} paintOrder="stroke">11 am: A(2) = 4, so 400 cars</text><text x={bx + 30} y={by1 + 60} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: ABLUE}} stroke={CARD} strokeWidth={7} paintOrder="stroke">A is a height up here</text></g> : null;})()}
					<PLabel p={m.p(3.9, 1.4)} text="back to the 9 am level" color={ABLUE} size={38} hand o={prog(fr, k.zero + 8, 12)} />
					<PLabel p={m.p(3.6, 5.05)} text="a smooth hill" color={ABLUE} size={40} hand o={prog(fr, k.hill + 20, 12)} />
				</>}
				botKids={m => <>
					{outline(m, 1, win(k.one + 34, k.two + 30), ['3', '2'])}
					{outline(m, 2, win(k.two + 34, k.three + 30), ['3', '1'])}
					{outline(m, 3, win(k.three + 34, k.past), ['3', ''])}
					<PLabel p={m.p(2.4, -2.75)} text="below the axis: new strips subtract" color="#7a4600" size={36} hand o={prog(fr, k.subtract, 12)} />
				</>} />
			<CarParkRig x={PLATE2.x} y={PLATE2.y} w={PLATE2.w} count={cars(X)} rate={f(X)} />
			<BoxCard x={RC} y={590} w={740} at={-30} size={36} title="shapes, like last video">trapezium: average height × width<br />triangle: ½ × base × height</BoxCard>
			<Rows x={RC + 10} y={756} size={46} old={32} rows={[
				{at: k.half1, c: <>A(1) = (3 + 2)/2 × 1 = <Bu>5/2</Bu></>},
				{at: k.four + 26, c: <>A(2) = (3 + 1)/2 × 2 = <Bu>4</Bu></>},
				{at: k.half2, c: <>A(3) = ½ × 3 × 3 = <Bu>9/2</Bu></>},
				{at: k.afour + 28, c: <>A(4) = 9/2 − ½ × 1 × 1 = <Bu>4</Bu></>},
				{at: k.zero + 8, c: <>A(6) = 9/2 − 9/2 = <Bu>0</Bu></>},
			]} />
		</>
	);
};

// ---------- 3. the gradient of A matches the height ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const X = kf(fr, [[k.start - 20, 6], [k.start + 10, 0], [k.three, 0], [k.three + 60, 3], [k.falls, 3], [k.falls + 40, 4.5], [k.one - 10, 4.5], [k.one + 20, 1], [k.looks, 1], [k.looks + 16, 0], [992, 6]], true);
	const sweep = fr >= k.looks + 16;
	const tri = prog(fr, k.grad2, 12) * (1 - prog(fr, k.looks, 10));
	const win = (a: number, b: number) => prog(fr, a, 12) * (1 - prog(fr, b, 10));
	return (
		<>
			<SceneHeading text="The gradient of A matches the height" at={4} size={56} />
			<PairView X={X}
				topKids={m => {const a = m.p(1, 2.5), b = m.p(2, 2.5), c = m.p(2, 4.5); return <>
					<Stub m={m} X={0} Y={0} s={3} o={win(k.start, k.three)} />
					<Stub m={m} X={3} Y={4.5} s={0} o={win(k.flat, k.one)} />
					<Stub m={m} X={4.5} Y={A(4.5)} s={-1.5} o={win(k.falls, k.one)} />
					<g opacity={tri}>
						<path d={`M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]}`} stroke={GRAD} strokeWidth={4} strokeDasharray="10 7" fill="none" />
						<text x={(a[0] + b[0]) / 2} y={a[1] + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: GRAD}} stroke={CARD} strokeWidth={6} paintOrder="stroke">run 1</text>
						<text x={b[0] + 14} y={(b[1] + c[1]) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: GRAD}} stroke={CARD} strokeWidth={6} paintOrder="stroke">rise 2</text>
					</g>
					<Stub m={m} X={1} Y={2.5} s={2} o={tri} hl={150} />
					{sweep ? <Stub m={m} X={X} Y={A(X)} s={f(X)} hl={120} /> : null}
				</>;}}
				botKids={m => <>
					<Glow m={m} X={0} Y={3} o={win(k.start, k.three)} />
					<Glow m={m} X={3} Y={0} o={win(k.three + 40, k.after)} />
					<Glow m={m} X={1} Y={2} o={win(k.there2, k.looks)} />
					<PLabel p={m.p(0.25, 3.05)} text="height 3: the biggest" color={TEAL} size={36} hand o={win(k.start, k.three)} />
					<PLabel p={m.p(3.2, 0.6)} text="height 0 at noon" color={TEAL} size={36} hand o={win(k.three + 40, k.after)} />
					<PLabel p={m.p(1.2, 2.5)} text="height 2" color={TEAL} size={38} o={win(k.there2, k.looks)} />
					{sweep ? [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5].filter(t => X >= t).map(t => {const [px, py] = m.p(t, f(t)); return <circle key={t} cx={px} cy={py} r={11} fill={GRAD} stroke={CARD} strokeWidth={3} />;}) : null}
					{sweep ? <PLabel p={m.p(3.3, 2.4)} text="gradient dots land on f" color={GRAD} size={38} hand /> : null}
				</>} />
			<CarParkRig x={PLATE2.x} y={PLATE2.y} w={PLATE2.w} count={cars(X)} rate={f(X)} ring={{o: win(k.fullest, k.after + 40)}} />
			<LiveReadoutBoard x={RC} y={600} width={740} at={-30} inline size={48} labelSize={30} rows={[
				{label: 'time', value: X, role: 'k', format: clock},
				{label: 'height f(x)', value: f(X), digits: 2, role: 'b'},
				{label: 'gradient of A', value: (A(X + 1e-4) - A(X - 1e-4)) / 2e-4, digits: 2, role: 'gradient', glow: [k.grad2, k.looks]},
			]} />
			<HandTag x={RC + 10} y={895} text="steepest: rate biggest" at={k.climbs} out={k.three} size={42} color={GRAD} />
			<HandTag x={RC + 10} y={895} text="fullest at noon: rate 0" at={k.fullest} out={k.falls} size={42} color="#2e7d4f" />
			<HandTag x={RC + 10} y={895} text="falls: more cars leave" at={k.falls} out={k.one} size={42} color="#7a4600" />
			<HandTag x={RC + 10} y={895} text="gradient 2, height 2" at={k.there2} out={k.looks} size={42} color={GRAD} />
			<Chip x={RC} y={872} at={k.looks + 10} size={42} color={GRAD}>gradient of A = height of f?</Chip>
		</>
	);
};

// ---------- 4. why: one more strip at the edge ----------
const G4: PairG = {...PG, wx: [-0.15, 2.6], yTop: [-0.4, 5], yBot: [-0.4, 3.5]};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const h = kf(fr, [[k.tenth, 0.5], [k.tenth + 24, 0.1], [k.shrinks, 0.1], [k.shrinks + 24, 0.01]]);
	const so = prog(fr, k.move, 14);
	const snap = smooth(prog(fr, k.exactly, 20));
	const chordS = (A(1 + h) - A(1)) / h;
	const s = chordS + (2 - chordS) * snap;
	const hShown = fr < k.tenth + 12 ? 0.5 : fr < k.shrinks + 12 ? 0.1 : 0.01;
	const mag = prog(fr, k.shrinks + 10, 14);
	const bm = makePlot(G4.x, G4.y + G4.hTop + G4.gap, G4.w, G4.hBot, {x: G4.wx, y: G4.yBot});
	const [ex, ey] = bm.pf(1, 2);
	const MC = {x: 880, y: 700, r: 140};
	return (
		<>
			<SceneHeading text="Why: one more strip at the edge" at={4} size={56} />
			<PairView g={G4} X={1} xTicks={[1, 2]} yTopTicks={[2, 4]} yBotTicks={[1, 2, 3]} botLabel="f(t) = 3 − t" topLabel="A(x)" xLabel="t" link={false}
				topKids={m => {const [p0x, p0y] = m.p(1, A(1)), [p1x, p1y] = m.p(1 + h, A(1 + h)); const vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy); return <g opacity={so}>
					<line x1={p0x - (vx / l) * 260} y1={p0y - (vy / l) * 260} x2={p0x + (vx / l) * 380} y2={p0y + (vy / l) * 380} stroke={GRAD} strokeWidth={6} strokeLinecap="round" />
					<circle cx={p1x} cy={p1y} r={12} fill={ABLUE} stroke={CARD} strokeWidth={4} opacity={1 - snap} />
					<text x={p0x + (vx / l) * 260 + 12} y={p0y + (vy / l) * 260 - 8} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: GRAD}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{snap > 0.5 ? 'tangent' : 'chord'}</text>
					<text x={p0x - 24} y={p0y - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: ABLUE}} stroke={CARD} strokeWidth={6} paintOrder="stroke">A(x)</text>
					<text x={p1x + 16} y={p1y + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: ABLUE}} stroke={CARD} strokeWidth={6} paintOrder="stroke" opacity={1 - prog(fr, k.tenth, 10)}>A(x + h)</text>
				</g>;}}
				botKids={m => {const [x0, ay] = m.p(1, 0), [x1] = m.p(1 + h, 0); return <g opacity={so}>
					<path d={regionPath(m, f, 1, 1 + h)} fill="#f8e8c8" stroke={AMBER_STROKE} strokeWidth={4} />
					<path d={`M${x0},${ay + 30} v14 H${x1} v-14`} stroke={AMBER} strokeWidth={4} fill="none" opacity={1 - prog(fr, k.shrinks, 10)} />
					<PLabel p={m.p(1.08, -0.3)} text="width h" color={AMBER} size={38} hand o={prog(fr, k.width, 12)} />
					<PLabel p={m.p(0.1, 2.3)} text="height ≈ f(x)" color={TEAL} size={38} hand o={prog(fr, k.height, 12)} />
					<PLabel p={m.p(1.55, 3.15)} text="the strip A gains" color={AMBER} size={38} hand o={prog(fr, k.gains, 12) * (1 - mag)} />
				</g>;}} />
			{mag > 0.01 ? <FrameSvg style={{opacity: mag}}>
				<line x1={ex} y1={ey} x2={MC.x - MC.r * 0.7} y2={MC.y + MC.r * 0.7} stroke={INK} strokeWidth={3} />
				<defs><clipPath id="i08mag"><circle cx={MC.x} cy={MC.y} r={MC.r} /></clipPath></defs>
				<circle cx={MC.x} cy={MC.y} r={MC.r} fill={CARD} stroke={INK} strokeWidth={5} />
				<g clipPath="url(#i08mag)">{(() => {const zx = (t: number) => MC.x + (t - 1.005) * 12000, zy = (v: number) => MC.y + 130 - v * 115; return <>
					<rect x={zx(1)} y={zy(2)} width={zx(1.01) - zx(1)} height={zy(0) - zy(2)} fill="#f8e8c8" stroke={AMBER_STROKE} strokeWidth={4} />
					<line x1={zx(0.99)} y1={zy(f(0.99))} x2={zx(1.02)} y2={zy(f(1.02))} stroke={TEAL} strokeWidth={6} />
					<text x={zx(1.005)} y={zy(0.9)} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AMBER}}>h = 0.01</text>
				</>;})()}</g>
				<text x={MC.x} y={MC.y + MC.r + 44} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">top almost flat</text>
			</FrameSvg> : null}
			<BoxCard x={RC} y={170} w={730} at={-30} out={k.grows - 6} size={42} title="the moving edge">A(x) is the area from 0 up to x. Move the end a little further, to x + h.</BoxCard>
			<Rows x={RC + 6} y={180} size={48} old={34} rows={[
				{at: k.grows, c: <>A(x + h) − A(x) ≈ <Te>f(x)</Te> × <span style={{color: AMBER}}>h</span></>},
				{at: k.chord, c: <><Vi>(A(x + h) − A(x))/h</Vi> ≈ <Te>f(x)</Te></>},
			]} />
			<HandTag x={RC + 10} y={330} text="chord gradient: first principles (Year 11)" at={k.first} size={38} color={SOFT} />
			<div style={{position: 'absolute', left: RC, top: 390, width: 730, opacity: prog(fr, k.atone, 12), background: CARD, borderRadius: 20, border: '2.5px solid rgba(60,45,20,0.10)', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '12px 28px 14px', boxSizing: 'border-box'}}>
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT}}><div>AT x = 1:  h</div><div>CHORD GRADIENT</div></div>
				{[{h: '0.5', g: '1.75', at: k.atone}, {h: '0.1', g: '1.95', at: k.ninefive}, {h: '0.01', g: '1.995', at: k.flatter}, {h: '→ 0', g: '2 = f(1)', at: k.exactly + 10}].map((r, i) => fr < r.at ? null : <div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', opacity: prog(fr, r.at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, lineHeight: 1.25}}><div style={{color: AMBER}}>{r.h}</div><div style={{color: i === 3 ? '#287347' : GRAD}}>{r.g}</div></div>)}
			</div>
			<AnswerBox x={RC} y={790} at={k.exactly + 10} size={56}>A′(x) = f(x)</AnswerBox>
			<HandTag x={RC + 470} y={835} text="f continuous" at={k.exactly + 30} size={40} color={SOFT} />
			<HandTag x={RC + 10} y={950} text="the chord closes in on the height f(1) = 2" at={k.ninefive + 10} size={38} color={GRAD} />
		</>
	);
};

// ---------- 5. A is a primitive ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const X = kf(fr, [[k.iff, 1], [k.iff + 20, 0], [k.rate, 0], [k.rate + 70, 1.5], [k.check, 1.5], [k.check + 30, 2]]);
	const sw = prog(fr, k.check, 14);
	return (
		<>
			<SceneHeading text="A is a primitive of f" at={4} size={56} />
			<PairView X={X}
				topKids={m => <>
					<PLabel p={m.p(3.6, 5.0)} text="A(x) = 3x − ½x²" color={ABLUE} size={42} o={prog(fr, k.squared + 10, 12)} />
					{fr < k.check ? <Stub m={m} X={X} Y={A(X)} s={f(X)} o={prog(fr, k.rate, 12)} hl={120} /> : null}
				</>}
				botKids={m => {const o = sw; const z0 = m.p(0, 0), t0 = m.p(0, 3), t1 = m.p(X, f(X)), z1 = m.p(X, 0); const pulse = 1 + 0.25 * Math.sin(Math.max(0, fr - k.with) * 0.3) * (fr >= k.with && fr < k.with + 50 ? 1 : 0); return <>
					<g opacity={o}>
						<path d={`M${z0[0]},${z0[1]} L${t0[0]},${t0[1]} L${t1[0]},${t1[1]} L${z1[0]},${z1[1]} Z`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
						<text x={t0[0] + 14} y={(z0[1] + t0[1]) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}} stroke={CARD} strokeWidth={7} paintOrder="stroke">3</text>
						<text x={t1[0] + 10} y={t1[1] - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: TEAL}} stroke={CARD} strokeWidth={7} paintOrder="stroke">3 − x</text>
						<text x={(z0[0] + z1[0]) / 2} y={z0[1] + 88} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke" opacity={prog(fr, k.width, 12)}>x</text>
						<path d={`M${z0[0]},${z0[1] + 50} v-12 M${z0[0]},${z0[1] + 44} H${z1[0]} M${z1[0]},${z1[1] + 50} v-12`} stroke={AMBER} strokeWidth={4} fill="none" opacity={prog(fr, k.width, 12)} />
					</g>
					<PLabel p={m.p(3.3, 2.6)} text="f(t) = 3 − t" color={TEAL} size={44 * pulse} o={prog(fr, k.deriv, 12)} />
				</>;}} />
			<AnswerBox x={RC} y={160} at={-30} size={52}>A′(x) = f(x)</AnswerBox>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<CarParkRig x={PLATE2.x} y={300} w={PLATE2.w} count={cars(X)} rate={f(X)} />
				<LiveReadoutBoard x={RC} y={710} width={740} at={k.rate} inline size={48} labelSize={30} rows={[
					{label: 'time', value: X, role: 'k', format: clock},
					{label: 'rate the count grows', value: f(X), digits: 1, role: 'gradient', unit: '× 100/h'},
					{label: 'net rate cars come in', value: f(X), digits: 1, role: 'b', unit: '× 100/h'},
				]} />
				<HandTag x={1660} y={1010} text="same number" at={k.car} size={42} color={GRAD} anchor="middle" />
			</div>
			{sw > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<BoxCard x={RC} y={270} w={740} at={k.check} size={44} title="task">Find A(x) for 0 ≤ x ≤ 3.</BoxCard>
				<BoxCard x={RC} y={400} w={740} at={k.trap} size={38} title="given">trapezium: heights 3 and 3 − x, width x</BoxCard>
				<Rows x={RC + 10} y={560} size={48} old={34} rows={[
					{at: k.width + 10, c: <>A(x) = (3 + (3 − x))/2 × x</>},
					{at: k.squared, c: <>= <Bu>3x − ½x²</Bu></>},
					{at: k.with - 6, c: <>d/dx (3x − ½x²) = <Te>3 − x</Te> <Tick size={44} /></>},
				]} />
				<AnswerBox x={RC} y={860} at={k.prim} size={46}>A is a primitive of f</AnswerBox>
			</div> : null}
		</>
	);
};

