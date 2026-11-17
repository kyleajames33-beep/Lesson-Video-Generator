// Scenes 1 to 5: i05's cosine frame opens out to the buoy on the surf beach (the pen traces its height), the hook
// y = 2cos(x − π/3) + 1 with its peak moved right; then one dial per scene on the dial layout (beach thumbnail live):
// k (vertical dilation and the fold), c (the tide and the midline), the two-buoy stage for b (later = slide right),
// and a (choppy swell and groundswell: the period).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {SceneHeading, LiveReadoutBoard, kf, smooth, transformAt, HandTag} from '../../math/studio';
import type {TransformKey} from '../../math/studio';
import {I05FinalFrame} from '../math-a12-i05/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AR, Arw, BR, BUOY, BUOY_OR, Bc, CR, Cc, Chip, Dials, Dot, EqStrip, FeatBoard, GREY, Gy, HBracket, Hand, INK, KR, Kc, Ac, Lb, P0, PI, RED, Ring, S0, S1, Slip, Swell, TPlot, VBracket, WMAIN, tf} from './parts';
import type {TP} from './parts';

// ---------- the dial layout (scenes 2, 3, 5, 9) ----------
export const DG = {x: 20, y: 235, w: 1140, h: 690} as const;
export const TH = {x: 790, y: 118, w: 360} as const;
export const DIAL = {x: 1180, y: 108} as const;
export const FEAT = {x: 1180, y: 545} as const;
const pAt = (keys: readonly TransformKey[], f: number): TP => transformAt(keys, f);
/** The beach thumbnail, live (one yellow buoy). */
export const Thumb: React.FC<{p: TP; t: number; o?: number}> = ({p, t, o = 1}) => <Swell x={TH.x} y={TH.y} w={TH.w} t={t} p={p} buoys={[{s: S0, plate: BUOY}]} mPx={14} bw={44} calm={0.8} o={o} />;

// ---------- 1. hook ----------
const STRIP1 = {x: 40, y: 430, w: 800} as const;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = prog(fr, 0, 22);
	const slide = smooth(prog(fr, k.meaning, 30));
	const fin = smooth(prog(fr, k.take - 6, 30));
	// graph geometry: full width, then right of the beach, then the dial layout
	const gx = 40 + 840 * slide + (DG.x - 880) * fin, gy = 190 + (DG.y - 190) * fin, gw = 1840 - 840 * slide + (DG.w - 1000) * fin, gh = 600 + (DG.h - 600) * fin;
	const sx = STRIP1.x + (TH.x - STRIP1.x) * fin, sy = STRIP1.y + (TH.y - STRIP1.y) * fin, sw = STRIP1.w + (TH.w - STRIP1.w) * fin;
	const keys: TransformKey[] = [{frame: k.one - 4, k: 1, b: 0, c: 0}, {frame: k.one + 44, k: 2, b: -PI / 3, c: 1}, {frame: k.take, k: 2, b: -PI / 3, c: 1}, {frame: k.take + 26, k: 1, b: 0, c: 0}];
	const p = pAt(keys, fr);
	// the clock: real time from "It's the swell"; after "plus one" the phase eases so the yellow crest lands on "right"
	// the clock: the pen traces 0 to 2π (half speed), holds, then after the morph runs on so the yellow crest (t = 4π) lands on "right"
	const PEN = 373, t1 = k.one + 44, rate = (2 * PI) / (k.right + 4 - t1);
	const pen = 2 * PI * Math.min(1, Math.max(0, (fr - k.swell) / PEN));
	const t = fr < t1 ? pen : 2 * PI + (fr - t1) * rate;
	const orFrame = k.right + 4 + PI / 3 / rate;
	const strip = prog(fr, k.meaning + 8, 16);
	const two = prog(fr, k.one, 14);
	const yel = 2 * two * Math.cos(t) + two + (1 - two) * Math.cos(t);
	const orange = 2 * Math.cos(t - PI / 3) + 1;
	const ring1 = prog(fr, k.right, 8) * (1 - prog(fr, k.right + 34, 8)), ring2 = prog(fr, orFrame - 4, 8) * (1 - prog(fr, k.take, 8));
	return (
		<>
			{open < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - open}}><I05FinalFrame /></div> : null}
			<SceneHeading text="Shifts and scales: what does each number do?" at={12} size={44} out={k.take} />
			<div style={{position: 'absolute', inset: 0, opacity: open}}>
				<TPlot x={gx} y={gy} w={gw} h={gh} p={p} ghost={prog(fr, k.one, 12)} xLabel="x (seconds)" yLabel="y (metres)"
					under={m => {const o = prog(fr, k.swell, 10) * (1 - prog(fr, k.one, 16)); return o > 0.01 && pen > 0.01 ? <g clipPath={m.clip} opacity={o}><path d={(() => {const n = 120; let d = ''; for (let i = 0; i <= n; i++) {const X = (pen * i) / n, [a, b] = m.p(X, Math.cos(X)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`;} return d;})()} stroke="#e8c400" strokeWidth={18} strokeLinecap="round" fill="none" opacity={0.55} /></g> : null;}}>
					{m => <>
						{(() => {const o = prog(fr, k.swell, 10) * (1 - prog(fr, k.one, 12)); const [a, b] = m.p(pen, Math.cos(pen)); return o > 0.01 ? <circle cx={a} cy={b} r={13} fill="#b88f00" stroke="#fffdf8" strokeWidth={4} opacity={o} /> : null;})()}
						<Ring at={m.p(PI / 3, 3)} o={prog(fr, k.right, 12) * (1 - fin)} r={24} />
						<Arw from={m.p(0.1, 1.15)} to={m.p(PI / 3 - 0.08, 2.85)} o={prog(fr, k.right + 6, 12) * (1 - fin)} color={BR.stroke} />
						<Lb at={[m.p(PI / 3, 3)[0] + 30, m.p(PI / 3, 3)[1] - 34]} o={prog(fr, k.right + 10, 12) * (1 - fin)} anchor="start">(π/3, 3)</Lb>
					</>}
				</TPlot>
				<Swell x={sx} y={sy} w={sw} t={t} p={{k: 1 + two, a: 1, b: 0, c: two}} o={strip} mPx={sw * 0.045} bw={sw * 0.1} calm={1 - fin * 0.2}
					buoys={[{s: S0, plate: BUOY, ring: ring1 * (1 - fin), tag: 'first'}, {s: S1, plate: BUOY_OR, o: two * (1 - fin), ring: ring2 * (1 - fin), tag: 'then'}]} />
				<div style={{position: 'absolute', inset: 0, opacity: 1 - fin}}>
					<Hand x={STRIP1.x + 10} y={STRIP1.y + 128} at={k.meaning + 20} out={k.one} size={30} color={GREY}>calm water</Hand>
					<Hand x={STRIP1.x + 10} y={STRIP1.y + 128} at={k.second + 40} size={30} color={GREY}>calm water (the tide lifts the sea 1 m)</Hand>
					<LiveReadoutBoard x={60} y={650} width={560} at={k.swell} inline rows={[
						{label: 'time x', value: Math.max(0, t), digits: 2, unit: 's', role: 'b'},
						{label: two > 0.5 ? 'yellow buoy y' : 'buoy height y', value: yel, digits: 2, unit: 'm'},
						{label: 'orange buoy y', value: orange, digits: 2, unit: 'm', at: k.one},
					]} />
					<Hand x={STRIP1.x + S1 * STRIP1.w + 70} y={STRIP1.y + 40} at={k.look + 10} size={40} color={BR.ink}>later?</Hand>
				</div>
				<EqStrip x={880} y={850} at={6} out={k.take} size={48}>{fr < k.one ? <>y = cos x</> : <>y = <Kc>2</Kc>cos(x <Bc>{fr >= k.bracket ? <span style={{background: BR.soft, borderRadius: 8, padding: '0 4px'}}>− π/3</span> : '− π/3'}</Bc>) <Cc>+ 1</Cc></>}</EqStrip>
				<Hand x={1520} y={846} at={k.bracket + 10} out={k.take} size={52} color={BR.ink}>?</Hand>
				<Hand x={1570} y={856} at={k.right} out={k.take} size={40} color={BR.ink}>peak moved right</Hand>
			</div>
		</>
	);
};

// ---------- the dial scenes' shared board ----------
const DialBoard: React.FC<{p: TP; thumbP: TP; lit: readonly ('k' | 'a' | 'b' | 'c')[]; heading: string; eq: React.ReactNode; marks?: (m: import('../../math/studio').PlotMap) => React.ReactNode; box?: {row: 'amplitude' | 'period' | 'shift' | 'midline' | 'range'; at: number}; under?: (m: import('../../math/studio').PlotMap) => React.ReactNode}> = ({p, thumbP, lit, heading, eq, marks, box, under}) => {
	const fr = useCurrentFrame();
	return <>
		<SceneHeading text={heading} at={4} size={44} />
		<Thumb p={thumbP} t={fr / 30} />
		<EqStrip x={96} y={162} size={44}>{eq}</EqStrip>
		<TPlot x={DG.x} y={DG.y} w={DG.w} h={DG.h} p={p} under={under}>{marks}</TPlot>
		<Dials x={DIAL.x} y={DIAL.y} p={p} lit={lit} />
		<FeatBoard x={FEAT.x} y={FEAT.y} p={p} lit={lit} box={box} />
	</>;
};

// ---------- 2. outside: multiply every height ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const p = pAt([{frame: k.two - 2, k: 1}, {frame: k.two + 34, k: 2}, {frame: k.flips - 8, k: 2}, {frame: k.flips + 52, k: -2}], fr);
	const tp = pAt([{frame: k.two - 2, k: 1}, {frame: k.two + 34, k: 2}, {frame: k.flips - 8, k: 2}, {frame: k.flips + 52, k: -2}], fr);
	const arrows = prog(fr, k.two + 10, 12) * (1 - prog(fr, k.dil, 12));
	const rings = prog(fr, k.axis, 12) * (1 - prog(fr, k.flips - 10, 12));
	const bars1 = prog(fr, k.two2, 12) * (1 - prog(fr, k.flips - 10, 10));
	const bars2 = prog(fr, k.neg, 12);
	return (
		<>
			<DialBoard p={p} thumbP={tp} lit={['k']} heading="Outside: multiply every height" eq={fr < k.flips + 30 ? <>y = <Kc>2</Kc>cos x</> : <>y = <Kc>−2</Kc>cos x</>}
				marks={m => <>
					{[[0, 1], [2 * PI, 1], [-PI, -1], [PI, -1]].map(([X, Y]) => <Arw key={X} from={m.p(X, Y)} to={m.p(X, 2 * Y)} o={arrows} color={KR.stroke} width={6} />)}
					{[-PI / 2, PI / 2, 1.5 * PI].map(X => <Ring key={X} at={m.p(X, 0)} o={rings} r={18} />)}
					<Lb at={[m.p(PI / 2, 0)[0] + 20, m.p(0, 0)[1] - 22]} o={rings} anchor="start" hand size={38} color={KR.ink}>× 2: zero stays zero</Lb>
					{[0, 2 * PI].map(X => <g key={X} opacity={bars1}><line x1={m.p(X, 0)[0]} x2={m.p(X, 0)[0]} y1={m.p(X, 0)[1]} y2={m.p(X, 2)[1]} stroke={KR.stroke} strokeWidth={10} strokeLinecap="round" /></g>)}
					<Lb at={[m.p(0, 0)[0] + 22, m.p(0, 1.1)[1]]} o={bars1} anchor="start" color={KR.ink}>amplitude 2</Lb>
					{[-PI, PI].map(X => <g key={X} opacity={bars2}><line x1={m.p(X, 0)[0]} x2={m.p(X, 0)[0]} y1={m.p(X, 0)[1]} y2={m.p(X, 2)[1]} stroke={KR.stroke} strokeWidth={10} strokeLinecap="round" /></g>)}
					<Lb at={[m.p(PI, 0)[0] + 22, m.p(0, 1.1)[1]]} o={bars2} anchor="start" color={KR.ink}>amplitude 2</Lb>
				</>} />
			<Chip x={60} y={706} at={k.flips + 24} size={34} color={KR.ink}>k &lt; 0: reflection in the x-axis</Chip>
			<Chip x={60} y={776} at={k.still} size={34} color={KR.ink}>amplitude = |k| = 2</Chip>
			<div style={{position: 'absolute', left: 600, top: 690}}><Slip x={0} y={0} w={500} at={k.neg} strikeAt={k.neg + 8} size={34} caption="a distance can't be negative">amplitude −2</Slip></div>
			<Hand x={TH.x - 10} y={TH.y + 92} at={k.big} out={k.what} size={34} color={KR.ink}>swell twice as big</Hand>
			<Hand x={60} y={712} at={k.what} out={k.flips + 20} size={30} color={GREY}>reflection in the y-axis: cos(−x) = cos x, sin(−x) = −sin x</Hand>
		</>
	);
};

// ---------- 3. outside: add to every height ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const p = pAt([{frame: 0, k: 2}, {frame: k.unit - 4, c: 0}, {frame: k.unit + 30, c: 1}], fr);
	const tp = pAt([{frame: 0, k: 2}, {frame: k.tide, c: 0}, {frame: k.tide + 34, c: 1}], fr);
	const ups = prog(fr, k.unit, 12) * (1 - prog(fr, k.shape, 12));
	return (
		<>
			<DialBoard p={p} thumbP={tp} lit={['c']} heading="Outside: add to every height" eq={fr < k.unit ? <>y = <Kc>2</Kc>cos x</> : <>y = <Kc>2</Kc>cos x <Cc>+ 1</Cc></>} box={{row: 'range', at: k.three}}
				marks={m => <>
					{[[0, 2], [PI, -2], [2 * PI, 2]].map(([X, Y]) => <Arw key={X} from={m.p(X, Y - 0.9)} to={m.p(X, Y + 0.1)} o={ups} color={CR.stroke} width={6} />)}
					{(() => {const o = prog(fr, k.one, 14), [a, y] = m.p(WMAIN.x[0], 1), [b] = m.p(WMAIN.x[1], 1); return o > 0.01 ? <g opacity={o}><line x1={a} x2={b} y1={y} y2={y} stroke={CR.stroke} strokeWidth={5} strokeDasharray="16 10" /><Lb at={[m.p(2.0, 1)[0], y - 14]} o={1} color={CR.ink} anchor="start">midline y = 1</Lb></g> : null;})()}
					{[0, 2 * PI].map(X => <line key={X} x1={m.p(X, 0)[0]} x2={m.p(X, 0)[0]} y1={m.p(X, p.c)[1]} y2={m.p(X, p.c + 2)[1]} stroke={KR.stroke} strokeWidth={10} strokeLinecap="round" opacity={0.95} />)}
					<Lb at={[m.p(0, 0)[0] + 20, m.p(0, p.c + 1.15)[1]]} o={1} anchor="start" color={KR.ink}>2</Lb>
					<Lb at={[m.p(2 * PI, 0)[0] - 14, m.p(0, 3)[1] - 22]} o={prog(fr, k.high + 70, 12)} anchor="end">1 + 2 = 3</Lb>
					<Lb at={[m.p(PI, 0)[0], m.p(0, -1)[1] + 52]} o={prog(fr, k.low + 60, 12)}>1 − 2 = −1</Lb>
					<VBracket x={m.p(-PI, 0)[0] + 40} y0={m.p(0, 3)[1]} y1={m.p(0, -1)[1]} o={prog(fr, k.three, 12)} label="range" />
				</>} />
			<Hand x={TH.x - 10} y={TH.y + 92} at={k.tide} size={36} color={CR.ink}>tide: up 1</Hand>
			<Chip x={300} y={770} at={k.shape} size={34} color={KR.ink}>shape unchanged: amplitude still 2</Chip>
		</>
	);
};

// ---------- 4. inside: the bracket sign ----------
const ST4 = {x: 40, y: 280, w: 1360} as const;
const G4 = {x: 30, y: 562, w: 1380, h: 370} as const;
const W4 = {x: [-PI - 0.2, 2 * PI + 0.2] as [number, number], y: [-1.6, 3.7] as [number, number]};
const YEL: TP = {k: 2, a: 1, b: 0, c: 1};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	// the clock: slow run to the cursor at x = 1.5, a hold, then on to the crests (yellow on "right", orange π/3 s later)
	const speedB = (2 * PI - 1.5) / (k.right - k.every);
	const t = fr < k.every ? kf(fr, [[60, 0], [k.ago, 1.5]], false) : 1.5 + (fr - k.every) * speedB;
	const tc = Math.min(t, 1.5);
	const p = pAt([{frame: k.that + 50, b: 0}, {frame: k.that + 92, b: -PI / 3}], fr);
	const curveO = prog(fr, k.that + 44, 10);
	const cur = prog(fr, 60, 12) * (1 - prog(fr, k.every, 14));
	const back = prog(fr, k.ago, 14) * (1 - prog(fr, k.every, 14));
	const tag = prog(fr, k.that + 50, 10) * (1 - prog(fr, k.minus, 14));
	const yv = 2 * Math.cos(t) + 1, ov = 2 * Math.cos(t - PI / 3) + 1;
	const crestY = (2 * PI - 0) / speedB + k.every - (2 * PI - 1.5) / speedB; void crestY;
	const r1 = prog(fr, k.right - 4, 8) * (1 - prog(fr, k.right + 50, 10));
	const r2 = prog(fr, k.right + PI / 3 / speedB - 4, 8);
	return (
		<>
			<SceneHeading text="Inside: later means a slide right" at={4} size={44} />
			<Swell x={ST4.x} y={ST4.y} w={ST4.w} t={t} p={YEL} mPx={44} bw={96} buoys={[{s: S0, plate: BUOY, ring: r1, tag: 'first'}, {s: S1, plate: BUOY_OR, ring: r2, tag: 'then'}]} />
			<Hand x={ST4.x + S0 * ST4.w - 110} y={ST4.y + 226} at={-30} size={30} color={GREY}>yellow</Hand>
			<Hand x={ST4.x + S1 * ST4.w + 60} y={ST4.y + 226} at={-30} size={30} color={GREY}>orange</Hand>
			<Arw from={[ST4.x + 0.45 * ST4.w, ST4.y + 40]} to={[ST4.x + 0.6 * ST4.w, ST4.y + 40]} o={prog(fr, k.buoy, 12)} color={GREY} width={5} />
			<Hand x={ST4.x + 0.45 * ST4.w} y={ST4.y - 30} at={k.buoy} size={34} color={GREY}>waves travel this way</Hand>
			<TPlot x={G4.x} y={G4.y} w={G4.w} h={G4.h} p={{...p, k: 2, c: 1}} win={W4} ghostP={YEL} curveO={curveO} yTicks={[-1, 1, 2, 3]} xLabel="x (s)" yLabel="y (m)">
				{m => <>
					{cur > 0.01 ? (() => {const [px, py] = m.p(tc, 2 * Math.cos(tc) + 1), [, by] = m.p(tc, -1.6); return <g opacity={cur}><line x1={px} x2={px} y1={m.box.top} y2={by} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={12} fill="#c9a400" stroke="#fffdf8" strokeWidth={4} /></g>;})() : null}
					{back > 0.01 ? (() => {const v = 2 * Math.cos(1.5 - PI / 3) + 1, [a, y] = m.p(1.5, v), [b] = m.p(1.5 - PI / 3, v); return <g opacity={back}>
						<circle cx={a} cy={y} r={13} fill="#d9781f" stroke="#fffdf8" strokeWidth={4} /><Ring at={[b, y]} o={1} r={18} color={BR.stroke} />
						<Arw from={[a - 14, y]} to={[b + 20, y]} o={1} color={BR.stroke} width={6} />
						<Lb at={[(a + b) / 2, y - 26]} o={1} color={BR.ink} hand size={36}>π/3 s earlier: same height</Lb></g>;})() : null}
					{tag > 0.01 ? (() => {const X = -p.b, [px, py] = m.p(X, 3); return <g opacity={tag}><line x1={px} x2={px} y1={py + 18} y2={m.p(X, -1.3)[1]} stroke={BR.stroke} strokeWidth={4} strokeDasharray="8 6" /><Lb at={[px, m.p(X, -1.3)[1] + 40]} o={1} color={BR.ink} size={34}>inside = 0</Lb></g>;})() : null}
					<Ring at={m.p(PI / 3, 3)} o={prog(fr, k.x3, 12)} r={22} />
					<Lb at={[m.p(PI / 3, 3)[0] + 34, m.p(PI / 3, 3)[1] + 8]} o={prog(fr, k.x3 + 6, 12)} anchor="start">(π/3, 3)</Lb>
					<Ring at={m.p(4 * PI / 3, -1)} o={prog(fr, k.every, 12)} r={22} />
					{[[0, 3], [PI, -1], [2 * PI, 3]].map(([X, Y]) => <Arw key={X} from={m.p(X + 0.05, Y)} to={m.p(X + PI / 3 - 0.05, Y)} o={prog(fr, k.every + 10, 12) * (1 - prog(fr, k.minus, 12))} color={BR.stroke} width={6} />)}
					<Lb at={[m.p(PI + PI / 6, -1)[0], m.p(0, -1)[1] - 22]} o={prog(fr, k.every + 16, 12) * (1 - prog(fr, k.minus, 12))} color={BR.ink} hand size={36}>π/3 later</Lb>
					{(() => {const o = prog(fr, k.plus, 12) * (1 - prog(fr, k.plus + 70, 14)); return o > 0.01 ? <g clipPath={m.clip} opacity={o}><path d={(() => {let d = ''; for (let i = 0; i <= 300; i++) {const X = W4.x[0] + ((W4.x[1] - W4.x[0]) * i) / 300, [a, b] = m.p(X, tf({k: 2, a: 1, b: PI / 3, c: 1})(X)); d += `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`;} return d;})()} stroke={BR.stroke} strokeWidth={5} strokeDasharray="4 10" strokeLinecap="round" fill="none" /></g> : null;})()}
					<Lb at={[m.p(-PI / 3, 3)[0] - 20, m.p(0, 3)[1] - 18]} o={prog(fr, k.plus + 6, 12) * (1 - prog(fr, k.plus + 76, 14))} color={BR.ink} hand size={36} anchor="end">+: earlier, left</Lb>
				</>}
			</TPlot>
			<EqStrip x={1430} y={170} size={40}>{fr < k.that ? <>y = <Kc>2</Kc>cos x <Cc>+ 1</Cc></> : <>y = <Kc>2</Kc>cos(x <Bc>{fr >= k.minus ? <span style={{background: BR.soft, borderRadius: 8, padding: '0 4px'}}>− π/3</span> : '− π/3'}</Bc>) <Cc>+ 1</Cc></>}</EqStrip>
			<LiveReadoutBoard x={1430} y={262} width={460} at={-30} inline rows={[
				{label: 'time x', value: t, digits: 2, unit: 's', role: 'b'},
				{label: 'yellow', value: yv, digits: 2, unit: 'm'},
				{label: 'orange', value: ov, digits: 2, unit: 'm', glow: [k.ago, k.every]},
			]} />
			<Hand x={1440} y={520} at={k.later} size={36} color={BR.ink} w={440}>each wave reaches orange later</Hand>
			<Chip x={1430} y={620} at={k.trans} size={32} color={BR.ink}>horizontal translation</Chip>
			<Chip x={1430} y={700} at={k.right} size={32} color={BR.ink}>x − π/3: later,{'\n'}slide right π/3</Chip>
		</>
	);
};

// ---------- 5. inside: a number multiplying x ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const p = pAt([{frame: k.pi1 - 4, a: 1}, {frame: k.pi1 + 36, a: 2}, {frame: k.half, a: 2}, {frame: k.half + 44, a: 0.5}], fr);
	const tp = pAt([{frame: k.choppy, a: 1}, {frame: k.choppy + 30, a: 2}, {frame: k.long - 10, a: 2}, {frame: k.long + 24, a: 0.5}], fr);
	const xr = kf(fr, [[k.x, 0], [k.x + 90, PI / 2], [k.pi1 - 4, PI / 2], [k.pi1 + 40, PI]]);
	const twin = prog(fr, k.x - 6, 12) * (1 - prog(fr, k.dil, 12));
	const per = 2 * PI / p.a;
	const pb = prog(fr, k.pi1 - 20, 12);
	const rule = prog(fr, k.for, 12);
	return (
		<>
			<DialBoard p={p} thumbP={tp} lit={['a']} heading="Inside: a number multiplying x" eq={fr < k.in ? <>y = cos(<Ac>a</Ac>x)</> : fr < k.half + 20 ? <>y = cos <Ac>2</Ac>x</> : <>y = cos(<Ac>½</Ac>x)</>}
				marks={m => <>
					{twin > 0.01 ? (() => {const [px, py] = m.p(xr, 0); return <g opacity={twin}><circle cx={px} cy={py} r={13} fill={AR.stroke} stroke="#fffdf8" strokeWidth={4} /></g>;})() : null}
					<HBracket x0={m.p(0, 0)[0]} x1={m.p(Math.min(per, WMAIN.x[1]), 0)[0]} y={m.p(0, 1.55)[1]} o={pb} color={AR.stroke} label={`period ${per > 2 * PI + 0.25 ? '4π' : (Math.abs(per - PI) < 0.02 ? 'π' : Math.abs(per - 2 * PI) < 0.02 ? '2π' : (per / PI).toFixed(2) + 'π')}`} arrow={per > WMAIN.x[1]} />
					<Lb at={[m.p(PI / 2, 0)[0], m.p(0, 2.3)[1]]} o={prog(fr, k.halves, 12) * (1 - prog(fr, k.half, 10))} color={GREY} size={32}>≈ 3.14 s</Lb>
					<Lb at={[m.p(PI, 0)[0], m.p(0, 2.3)[1]]} o={prog(fr, k.half + 40, 12)} color={GREY} size={32}>4π ≈ 12.6 s: past the edge</Lb>
				</>} />
			<LiveReadoutBoard x={60} y={640} width={500} at={k.x - 6} out={k.dil} inline rows={[{label: 'x', value: xr, text: xr < 0.01 ? '0' : xr > PI - 0.01 ? 'π' : Math.abs(xr - PI / 2) < 0.01 ? 'π/2' : xr.toFixed(2), role: 'a'}, {label: 'inside 2x', value: 2 * xr, text: 2 * xr < 0.01 ? '0' : 2 * xr > 2 * PI - 0.01 ? '2π' : Math.abs(xr - PI / 2) < 0.01 ? 'π' : (2 * xr).toFixed(2), role: 'a'}]} />
			<Hand x={TH.x - 20} y={TH.y + 92} at={k.choppy} out={k.long - 12} size={34} color={AR.ink}>choppy: waves twice as often</Hand>
			<Hand x={TH.x + 40} y={TH.y + 92} at={k.ground} size={36} color={AR.ink}>groundswell</Hand>
			<Chip x={60} y={690} at={k.dil + 20} size={34} color={AR.ink}>horizontal dilation, factor ½</Chip>
			<div style={{position: 'absolute', left: 60, top: 762, opacity: rule, fontFamily: 'inherit'}}>
				<Chip x={0} y={0} at={k.for} size={34} color={INK}>sin and cos: period = 2π ÷ <Ac>a</Ac></Chip>
			</div>
			<Hand x={600} y={772} at={k.for + 30} size={30} color={GREY}><Gy>a &gt; 0 here; in general 2π ÷ |a|</Gy></Hand>
		</>
	);
};
export {P0, RED, Dot};
