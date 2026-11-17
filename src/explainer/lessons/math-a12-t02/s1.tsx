// Scenes 1 to 5: t01's daylight frame (two days with 13 hours, one calculator angle), isolating the sine (slide and
// squash both graphs: the crossings keep their x), the u-window for sin(x − π/6) = ½, two cycles for 2sin 2x = √3,
// and the daylight sweep (two, one or no crossings per cycle).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {HandTag, PlateImg, SceneHeading, StudioPlot, crossingsOf, fnPath, kf, smooth} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AnswerBox, Arw, BR, BROWN, BoxCard, Bc, CARD, Chip, Counter, DayStage, EqStrip, FONT_DISPLAY, FONT_HAND, GREY, Gy, Hand, INK, KR, Kc, Lb, PI, Ring, Row, SKYLINE, SUN, Slip, T01FinalFrame, TPlot, Task, WMap, XT_2PI, crossDots, dayD, dayMap, domainBar, levelLine} from './parts';

// ---------- the working layout (scenes 3, 4, 6, 8) ----------
export const WG = {x: 20, y: 236, w: 1120, h: 420} as const;
export const WM = {x: 60, y: 878, w: 1040} as const;
export const RC = 1180;

// ---------- 1. hook ----------
const MONTH_X = {oct: PI / 3, feb: PI, dec: (2 * PI) / 3};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const x = kf(fr, [[k.twice - 6, 0], [k.oct, PI / 3], [k.feb - 12, PI / 3], [k.feb + 8, PI], [k.calc - 10, PI], [k.calc + 40, 2 * PI]]);
	const r1 = prog(fr, k.oct, 10), r2 = prog(fr, k.feb + 8, 10);
	const m = dayMap();
	const pulse = prog(fr, k.every, 12) * (0.55 + 0.45 * Math.sin(fr / 5));
	const yB = 170 + 600 + 124;
	return (
		<>
			{fr < 1 ? <T01FinalFrame /> : <>
				<SceneHeading text="Every solution in a domain" at={10} size={44} />
				<DayStage x={x} drawTo={2 * PI} line={{level: 13, o: 1, label: 'D = 13'}} cursor={prog(fr, k.twice - 6, 10)}
					rings={[{x: PI / 3, y: 13, o: r1, label: 'late Oct'}, {x: PI, y: 13, o: r2, label: 'late Feb'}]}
					light={[{x: MONTH_X.oct, o: r1, label: 'late Oct'}, {x: MONTH_X.feb, o: r2, label: 'late Feb'}]} />
				<Chip x={96} y={96} at={-300} out={6} size={34} color={BROWN}>Next: solving trig equations from the graph</Chip>
				<Chip x={1180} y={96} at={-300} out={k.feb + 20} size={34} color={KR.ink}>13 hours of daylight: which days?</Chip>
				<Chip x={1180} y={96} at={k.feb + 24} size={34} color={KR.ink}>2 crossings: two days</Chip>
				<Hand x={1000} y={230} at={-300} size={36} color={INK}>D = 12 + 2sin(x − π/6)</Hand>
				<Hand x={60} y={862} at={-300} out={k.calc} size={30} color={GREY}><Gy>x = 0: about 24 August; whole year: 2π</Gy></Hand>
				<BoxCard x={60} y={790} w={560} at={k.calc + 10} size={40} edge={GREY}><span style={{color: GREY}}>calculator: sin⁻¹(½) = π/6</span> <span style={{color: KR.ink, fontWeight: 800}}>?</span></BoxCard>
				<HandTag x={640} y={820} text="two days, one calculator angle" at={k.third} size={36} color={KR.ink} />
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', opacity: pulse}}>
					{[0, 2 * PI].map(v => <circle key={v} cx={m.pf(v, 9)[0]} cy={yB} r={24} fill="none" stroke={KR.stroke} strokeWidth={5} />)}
				</svg>
			</>}
		</>
	);
};

// ---------- 2. isolate: slide and squash both sides together ----------
const G2 = {x: 20, y: 196, w: 1120, h: 720} as const;
const W2 = {x: [-0.15, 2 * PI + 0.15] as [number, number], y: [-2.6, 14.8] as [number, number]};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const off = kf(fr, [[k.take + 4, 12], [k.take + 40, 0]]);
	const q = kf(fr, [[k.squash, 1], [k.squash + 40, 0.5]]);
	const fn = (v: number) => off + 2 * q * Math.sin(v - PI / 6), L = off + q;
	const same = prog(fr, k.values, 12);
	return (
		<>
			<SceneHeading text="Make it simpler: both sides together" at={4} size={44} />
			<StudioPlot x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={W2} xTicks={XT_2PI} yTicks={[-2, -1, 1, 2, 10, 12, 14]} xLabel="x" yLabel={off > 6 ? 'D (hours)' : 'y'} at={-30}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, fn, 0, 2 * PI, 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{levelLine(m, L, 1, off > 6 ? 'D = 13' : q > 0.75 ? 'y = 1' : 'y = ½')}
					{[PI / 3, PI].map(X => {const [px, py] = m.p(X, L), [, by] = m.p(X, 0); return <g key={X}><Ring at={[px, py]} o={1} r={20} />{same > 0.01 ? <line x1={px} x2={px} y1={py + 20} y2={by} stroke={GREY} strokeWidth={4} strokeDasharray="10 8" opacity={same} /> : null}</g>;})}
					<Lb at={[m.p(PI / 3, 0)[0] + 16, m.p(0, 0)[1] + 46]} o={same} color={INK} hand size={38} anchor="start">same x</Lb>
					<Lb at={[m.p(PI, 0)[0] + 16, m.p(0, 0)[1] + 46]} o={same} color={INK} hand size={38} anchor="start">same x</Lb>
					{domainBar(m, [0, 2 * PI], 1)}
				</>}
			</StudioPlot>
			<Task x={RC} y={160} w={700} at={-30} size={36}>Solve for 0 ≤ x ≤ 2π</Task>
			<BoxCard x={RC} y={268} w={700} at={-30} size={38} title="given">12 + 2sin(x − π/6) = 13<br />0 ≤ x ≤ 2π</BoxCard>
			<Row x={RC} y={440} at={k.twelve} size={44} small={32} dim={prog(fr, k.take, 12)}>12 + 2sin(x − π/6) = <Kc>13</Kc></Row>
			<Row x={RC} y={505} at={k.take} size={44} small={32} dim={prog(fr, k.half, 12)}>2sin(x − π/6) = <Kc>1</Kc></Row>
			<Row x={RC} y={570} at={k.half} size={52}>sin(x − π/6) = <Kc>½</Kc></Row>
			<Hand x={RC} y={650} at={k.take} size={36} color={GREY}>− 12 from both: both graphs slide down</Hand>
			<Hand x={RC} y={700} at={k.squash} size={36} color={GREY}>÷ 2 both sides: both graphs squash</Hand>
			<Chip x={RC} y={780} at={k.now} size={36} color={KR.ink}>where is sin(x − π/6) = ½ for 0 ≤ x ≤ 2π?</Chip>
		</>
	);
};

// ---------- 3. the u-window ----------
const R3: [number, number] = [-7 * PI / 6 - 0.35, 13 * PI / 6 + 0.35];
const W3 = {x: [-0.2, 2 * PI + 0.2] as [number, number], y: [-1.45, 1.45] as [number, number]};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const p = smooth(prog(fr, k.six2 - 30, 34));
	const back = smooth(prog(fr, k.pi + 4, 40));
	const fn = (x: number) => Math.sin(x - PI / 6);
	return (
		<>
			<SceneHeading text="The u-window: slide it, solve, slide back" at={4} size={44} />
			<TPlot x={WG.x} y={WG.y} w={WG.w} h={WG.h} p={{k: 1, a: 1, b: -PI / 6, c: 0}} fam="sin" win={W3} ghost={0} xTicks={XT_2PI} yTicks={[-1, 1]}>
				{m => <>
					{levelLine(m, 0.5, 1, 'y = ½')}
					{domainBar(m, [0, 2 * PI], 1)}
					{[PI / 3, PI].map((X, i) => <g key={X}><Ring at={m.p(X, 0.5)} o={1} r={20} /><Lb at={[m.p(X, 0)[0], m.p(0, 0.5)[1] - 30]} o={prog(fr, k.pi + 40 + i * 6, 10)} size={36} color={MATH_GREEN}>{i ? 'π' : 'π/3'}</Lb></g>)}
				</>}
			</TPlot>
			<WMap x={WM.x} y={WM.y} w={WM.w} range={R3} domain={[0, 2 * PI]} a={1} b={-PI / 6} p={p} back={back}
				curve={{fn: Math.sin, yr: [-1.2, 1.2], level: 0.5, at: k.call}}
				dots={[{u: PI / 6, at: k.six3 - 30}, {u: 5 * PI / 6, at: k.six3}]}
				outs={[{u: 13 * PI / 6, at: k.next + 10, cross: k.outside}, {u: -7 * PI / 6, at: k.next + 40, cross: k.outside + 8}]} />
			<SymLine fr={fr} at={k.six3 + 4} out={k.next} />
			<Task x={RC} y={160} w={700} at={-30} size={36}>Solve for 0 ≤ x ≤ 2π</Task>
			<EqStrip x={RC} y={262} size={48}>sin(x <Bc>− π/6</Bc>) = <Kc>½</Kc></EqStrip>
			<Row x={RC} y={360} at={k.six1} size={46} small={32} dim={prog(fr, k.sine, 12)}>let <Bc>u = x − π/6</Bc></Row>
			<Row x={RC} y={428} at={k.six2} size={46} small={32} dim={prog(fr, k.undo, 12)}><Bc>−π/6 ≤ u ≤ 11π/6</Bc></Row>
			<Row x={RC} y={496} at={k.six3} size={46} small={32} dim={prog(fr, k.undo, 12)}>sin u = ½: u = π/6, 5π/6</Row>
			<Row x={RC} y={564} at={k.x} size={46} small={32} dim={prog(fr, k.pi, 12)}>x = u + π/6</Row>
			<AnswerBox x={RC} y={640} at={k.pi} size={48}>x = π/3 or x = π</AnswerBox>
			<HandTag x={RC} y={740} text="a sixth of a year, and half: late Oct, late Feb" at={k.sixth} size={34} color={KR.ink} />
			<HandTag x={RC} y={800} text="right π/6, as the graph" at={k.same} size={36} role="b" />
		</>
	);
};
const MATH_GREEN = '#2e7d4f';
const NL = String.fromCharCode(10);
/** The dotted mirror line at u = π/2 on scene 3's plain-curve strip, with its "symmetry" tag. */
const SymLine: React.FC<{fr: number; at: number; out: number}> = ({fr, at, out}) => {
	const o = prog(fr, at, 12) * (1 - prog(fr, out, 12));
	if (o < 0.01) return null;
	const X = WM.x + ((PI / 2 - R3[0]) / (R3[1] - R3[0])) * WM.w, top = WM.y - 84 - 120;
	return <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: o, overflow: 'visible'}}>
		<line x1={X} x2={X} y1={top - 6} y2={top + 126} stroke={BR.stroke} strokeWidth={4} strokeDasharray="5 8" />
		<text x={X + 12} y={top + 24} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: BR.ink}}>symmetry</text>
	</svg>;
};

// ---------- 4. more cycles, more solutions ----------
const R4: [number, number] = [-0.3, 4 * PI + 0.3];
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const q = kf(fr, [[k.two - 6, 1], [k.two + 30, 0.5]]);
	const p = smooth(prog(fr, k.four - 10, 34));
	const back = smooth(prog(fr, k.three3 - 40, 40));
	const fn = (x: number) => 2 * q * Math.sin(2 * x), L = Math.sqrt(3) * q;
	const ans = [PI / 6, PI / 3, 7 * PI / 6, 4 * PI / 3];
	return (
		<>
			<SceneHeading text="More cycles, more solutions" at={4} size={44} />
			<StudioPlot x={WG.x} y={WG.y} width={WG.w} height={WG.h} window={{x: [-0.2, 2 * PI + 0.2], y: [-2.3, 2.3]}} xTicks={XT_2PI} yTicks={[-2, -1, 1, 2]} at={-30}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, fn, 0, 2 * PI, 400)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{levelLine(m, L, 1, q > 0.75 ? 'y = √3 (≈ 1.73)' : 'y = √3/2')}
					{domainBar(m, [0, 2 * PI], 1)}
					{ans.map((X, i) => <g key={X}><Ring at={m.p(X, L)} o={prog(fr, k.three3 + i * 4, 10)} r={18} /><Lb at={[m.p(X, 0)[0] + (i % 2 ? 26 : -26), m.p(0, L)[1] - 30]} o={prog(fr, k.three3 + i * 4, 10)} size={32} color={MATH_GREEN}>{['π/6', 'π/3', '7π/6', '4π/3'][i]}</Lb></g>)}
				</>}
			</StudioPlot>
			<WMap x={WM.x} y={WM.y} w={WM.w} range={R4} domain={[0, 2 * PI]} a={2} b={0} p={p} back={back}
				curve={{fn: Math.sin, yr: [-1.2, 1.2], level: Math.sqrt(3) / 2, at: k.let}}
				dots={[{u: PI / 3, at: k.three1 - 30, glow: prog(fr, k.answers, 10)}, {u: 2 * PI / 3, at: k.three1, glow: prog(fr, k.answers, 10)}, {u: 7 * PI / 3, at: k.three2 - 30}, {u: 8 * PI / 3, at: k.three2}].map((d, i) => (i < 2 ? {u: d.u, at: d.at} : d))} />
			<CycleTags fr={fr} at={k.cycles} />
			<Task x={RC} y={160} w={700} at={-30} size={36}>Solve for 0 ≤ x ≤ 2π</Task>
			<EqStrip x={RC} y={262} at={k.solve} size={48}>2sin <Bc>2x</Bc> = <Kc>√3</Kc></EqStrip>
			<Row x={RC} y={360} at={k.two} size={46} small={32} dim={prog(fr, k.let, 12)}>sin 2x = <Kc>√3/2</Kc></Row>
			<Row x={RC} y={428} at={k.let} size={46} small={32} dim={prog(fr, k.first, 12)}><Bc>u = 2x: 0 ≤ u ≤ 4π</Bc></Row>
			<Row x={RC} y={496} at={k.first} size={46} small={32} dim={prog(fr, k.halve, 12)}>u = π/3, 2π/3 <span style={{opacity: prog(fr, k.add, 12)}}>, 7π/3, 8π/3</span></Row>
			<AnswerBox x={RC} y={580} at={k.three3} size={42}>x = π/6, π/3, 7π/6, 4π/3</AnswerBox>
			<Counter x={RC} y={680} n={4} at={k.cycles} label="2 cycles: expect" />
			<HandTag x={RC + 290} y={700} text="× 2" at={k.four} size={44} role="b" />
			<HandTag x={RC + 290} y={760} text="+ 2π" at={k.add} size={44} role="b" />
			<div style={{position: 'absolute', left: RC + 280, top: 820}}><Slip x={0} y={0} w={420} at={k.stop} strikeAt={k.answers} size={34} caption="the second cycle counts too">x = π/6, π/3 only</Slip></div>
		</>
	);
};
const CycleTags: React.FC<{fr: number; at: number}> = ({fr, at}) => {
	const o = prog(fr, at, 12);
	if (o < 0.01) return null;
	const X = (u: number) => WM.x + ((u - R4[0]) / (R4[1] - R4[0])) * WM.w, y = WM.y - 84 - 120 + 6;
	return <svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: o, overflow: 'visible'}}>
		{[0, 2 * PI].map((u, i) => <g key={u}><path d={`M${X(u) + 6},${y + 10} V${y} H${X(u + 2 * PI) - 6} V${y + 10}`} fill="none" stroke={BR.stroke} strokeWidth={4} />
			<text x={(X(u) + X(u + 2 * PI)) / 2} y={y + 40} stroke={CARD} strokeWidth={6} paintOrder="stroke" textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: BR.ink}}>{`cycle ${i + 1}`}</text></g>)}
	</svg>;
};

// ---------- 5. counting crossings ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const L = kf(fr, [[k.raise, 13], [k.raise + 30, 14], [k.raise2, 14], [k.raise2 + 30, 14.5], [k.sits - 20, 14.5], [k.sits + 10, 13]]);
	const x = kf(fr, [[k.raise, PI / 3], [k.raise + 50, (2 * PI) / 3], [k.sits - 20, (2 * PI) / 3], [k.sits + 10, PI / 3]]);
	const xs = crossingsOf(dayD, [0, 2 * PI], L, 2000, true);
	const n = xs.length;
	const near = (v: number) => Math.max(0, 1 - Math.abs(L - v) * 6);
	const ud = prog(fr, k.once1, 12) * (1 - prog(fr, k.raise, 12));
	return (
		<>
			<SceneHeading text="Count first: two, one or none" at={4} size={44} />
			<DayStage x={x} drawTo={2 * PI} line={{level: L, o: 1, label: `D = ${Math.round(L * 10) / 10}`}}
				light={[{x: PI / 3, o: near(13), label: 'late Oct'}, {x: PI, o: near(13), label: 'late Feb'}, {x: (2 * PI) / 3, o: near(14), label: 'late Dec'}]}>
				{m => <>
					{crossDots(m, dayD, [0, 2 * PI], L, 1)}
					<Arw from={m.p(PI / 3 - 0.35, 12.45)} to={m.p(PI / 3 + 0.25, 13.55)} o={ud} color={BR.stroke} width={7} />
					<Arw from={m.p(PI - 0.25, 13.55)} to={m.p(PI + 0.35, 12.45)} o={prog(fr, k.once2, 12) * (1 - prog(fr, k.raise, 12))} color={BR.stroke} width={7} />
				</>}
			</DayStage>
			<Counter x={650} y={180} n={n} at={-30} />
			<HandTag x={630} y={320} text="up once, down once" at={k.once1} out={k.raise} size={32} role="b" />
			<HandTag x={630} y={320} text="longest day: touch" at={k.cycle} out={k.raise2} size={32} color={KR.ink} />
			<HandTag x={630} y={320} text="no day this long" at={k.all - 10} out={k.sits} size={32} color={KR.ink} />
			<Chip x={60} y={792} at={k.sits} size={30} color={KR.ink}>{'count first: cycles × 2,' + NL + 'then check the level' + NL + '(a closed end can add one: next)'}</Chip>
		</>
	);
};
export {PlateImg, SKYLINE, SUN};
