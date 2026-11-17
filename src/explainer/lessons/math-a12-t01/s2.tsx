// Scenes 6 to 9: factor out a before reading the slide (sin(2x + π); the crossed "left π" ghost lands back on sin 2x),
// tan on its dial (moving asymptotes, no amplitude), the worked example −3cos(2x − π/2) − 1 (g01 layout, each row
// applying one transform, five key points), and the graphing check rebuilt dial by dial onto dashed targets, then
// the framed memory card (exported as T01Card for the handoff and the notes).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {GivensStrip, LiveReadoutBoard, PlateImg, SceneHeading, piLabel, piTicks, transformAt, HandTag} from '../../math/studio';
import type {TransformKey} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {AR, Ac, AnswerBox, BoxCard, Arw, BR, BUOY, Bc, CR, Cc, Chip, Dials, Dot, EqStrip, FONT_DISPLAY, FONT_HAND, FeatBoard, FramedCard, GOOD, GREY, Gc, Gy, HBracket, Hand, INK, KR, Kc, Lb, P0, PI, Ring, Row, Slip, TPlot, Task, VBracket, WMAIN, tf} from './parts';
import type {TP} from './parts';
import {DG, DIAL, FEAT, Thumb} from './s1';

const pAt = (keys: readonly TransformKey[], f: number): TP => transformAt(keys, f);
const path = (m: import('../../math/studio').PlotMap, fn: (x: number) => number, a: number, b: number, n = 300) => {let d = ''; for (let i = 0; i <= n; i++) {const X = a + ((b - a) * i) / n, [px, py] = m.p(X, fn(X)); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;} return d;};

// ---------- 6. factor out a before reading the slide ----------
const G6 = {x: 990, y: 230, w: 900, h: 600} as const;
const W6 = {x: [-PI - 0.2, 2 * PI + 0.2] as [number, number], y: [-1.7, 1.7] as [number, number]};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const p = pAt([{frame: k.so - 2, a: 1}, {frame: k.so + 34, a: 2}, {frame: k.then, b: 0}, {frame: k.then + 40, b: PI / 2}], fr);
	const wrongO = prog(fr, k.sliding + 4, 12);
	const s = Math.min(PI, Math.max(0, ((fr - k.sliding - 14) / 66) * PI));
	return (
		<>
			<SceneHeading text="Factor out a before reading the slide" at={4} size={44} />
			<Task x={96} y={165} w={860} at={k.here} size={38}>Read the transformations of y = sin(2x + π).</Task>
			<EqStrip x={96} y={310} at={k.here + 70} size={52}>y = sin(<Ac>2</Ac>x + π)</EqStrip>
			<Hand x={540} y={322} at={k.tempt + 20} out={k.but} size={38} color={GREY}>left π?</Hand>
			<Row x={96} y={420} at={k.but + 10} size={40} dim={prog(fr, k.get, 12)} small={32}>inside = 0: 2x + π = 0, so x = −π/2</Row>
			<Row x={96} y={500} at={k.get} size={48} dim={prog(fr, k.then + 40, 12)} small={34}>sin(2x + π) = sin(<Ac>2</Ac>(x <Bc>+ π/2</Bc>))</Row>
			<Hand x={96} y={570} at={k.factor} size={38} color={AR.ink}>factor first</Hand>
			<AnswerBox x={96} y={630} at={k.then + 60} size={44}>squash ½, then left π/2</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 750}}><Slip x={0} y={0} w={460} at={k.wrong} strikeAt={k.wrong + 10} size={38} caption="lands back on sin 2x">sin(2x + π): left π</Slip></div>
			<TPlot x={G6.x} y={G6.y} w={G6.w} h={G6.h} p={p} fam="sin" win={W6} yTicks={[-1, 1]} ghost={1 - prog(fr, k.sliding, 12)}>
				{m => <>
					{(() => {const o = prog(fr, k.at, 12) * (1 - prog(fr, k.so, 12)), [px, py] = m.p(-PI / 2, 0); return o > 0.01 ? <g opacity={o}><Ring at={[px, py]} o={1} r={20} /><Lb at={[px, py + 60]} o={1} color={BR.ink} size={32}>2x + π = 0</Lb></g> : null;})()}
					<Lb at={[m.p(PI, 0)[0], m.p(0, 1.45)[1]]} o={prog(fr, k.so + 10, 12) * (1 - prog(fr, k.then, 12))} color={AR.ink} hand size={38}>squash ½</Lb>
					<Arw from={m.p(PI / 4, 1.25)} to={m.p(-PI / 4, 1.25)} o={prog(fr, k.then + 6, 12) * (1 - prog(fr, k.sliding, 12))} color={BR.stroke} />
					<Lb at={[m.p(0, 0)[0] + 10, m.p(0, 1.45)[1]]} o={prog(fr, k.then + 10, 12) * (1 - prog(fr, k.sliding, 12))} color={BR.ink} hand size={38}>left π/2</Lb>
					{wrongO > 0.01 ? <g clipPath={m.clip} opacity={wrongO}><path d={path(m, X => Math.sin(2 * (X + s)), W6.x[0], W6.x[1], 500)} stroke="#9a9184" strokeWidth={6} strokeDasharray="14 10" fill="none" /></g> : null}
					{wrongO > 0.01 && fr < k.wrong + 20 ? <Dot at={m.p(PI / 4 - s, 1)} o={wrongO * (1 - prog(fr, k.wrong + 6, 12))} color={GREY} r={13} /> : null}
					<Lb at={[m.p(PI / 4, 0)[0], m.p(0, -1.42)[1]]} o={prog(fr, k.wrong, 12)} color={GREY} hand size={36}>left π: back on sin 2x</Lb>
				</>}
			</TPlot>
			<Chip x={G6.x + 560} y={G6.y + G6.h + 10} at={k.truth} size={34} color={GREY}>true curve = −sin 2x</Chip>
		</>
	);
};

// ---------- 7. tan follows the same rules ----------
const G7 = {x: 20, y: 200, w: 1140, h: 720} as const;
const W7 = {x: [-PI - 0.1, PI + 0.1] as [number, number], y: [-4, 4] as [number, number]};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const p = pAt([{frame: k.tan2, a: 1}, {frame: k.tan2 + 44, a: 2}, {frame: k.num + 8, k: 1}, {frame: k.num + 50, k: 3}, {frame: k.not + 26, k: 3}, {frame: k.not + 40, k: 1}], fr);
	const per = PI / p.a;
	const asy = p.a > 1.98 ? '±π/4, ±3π/4' : p.a < 1.02 ? '±π/2' : '…';
	return (
		<>
			<SceneHeading text="tan follows the same rules" at={4} size={44} />
			<EqStrip x={760} y={110} size={44}>{fr < k.tan2 ? <>y = tan x</> : fr < k.num + 10 ? <>y = tan <Ac>2</Ac>x</> : <>y = <Kc>3</Kc> tan <Ac>2</Ac>x</>}</EqStrip>
			<TPlot x={G7.x} y={G7.y} w={G7.w} h={G7.h} p={p} fam="tan" win={W7} ghost={prog(fr, k.tan2, 12)} xTicks={piTicks(-1, 1, 4)} yTicks={[-3, -2, -1, 1, 2, 3]}>
				{m => <>
					<HBracket x0={m.p(-per / 2, 0)[0]} x1={m.p(per / 2, 0)[0]} y={m.p(0, 3.5)[1]} o={1} color={AR.stroke} label={`period ${piLabel(per)}`} />
					<VBracket x={m.box.left + 30} y0={m.box.top + 10} y1={m.box.top + m.box.height - 10} o={prog(fr, k.range, 12)} arrows label="range: all real y" ly={m.box.top + 120} />
					<Lb at={[m.p(PI / 4, 0)[0] + 20, m.p(0, 2.6)[1]]} o={prog(fr, k.num + 40, 12) * (1 - prog(fr, k.not + 26, 12))} color={KR.ink} hand size={36} anchor="start">vertical dilation, factor 3</Lb>
				</>}
			</TPlot>
			<Dials x={DIAL.x} y={200} p={p} only={['a']} lit={['a']} />
			<div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.num, 12)}}><Dials x={DIAL.x} y={310} p={p} only={['k']} lit={['k']} /></div>
			<LiveReadoutBoard x={DIAL.x} y={440} width={700} at={-30} inline rows={[
				{label: 'period', value: per, text: piLabel(per), role: 'a'},
				{label: 'asymptotes at', value: p.a, text: asy, role: 'a'},
				{label: 'amplitude', value: 0, text: 'none', role: 'k', at: k.amp},
			]} />
			<Hand x={DIAL.x + 10} y={712} at={k.p2 + 30} size={30} color={GREY} w={680}><Gy>they repeat every period; only those in view are drawn</Gy></Hand>
			<HandTag x={DIAL.x + 10} y={790} text="asymptotes move too" at={k.move} size={38} role="a" />
			<Chip x={DIAL.x} y={850} at={k.every} size={34} color={AR.ink}>domain: x ≠ π/4 + kπ/2</Chip>
			<div style={{position: 'absolute', left: 620, top: 300}}><Slip x={0} y={0} w={420} at={k.not} strikeAt={k.not + 10} size={36} caption="tan has no amplitude">amplitude 3</Slip></div>
		</>
	);
};

// ---------- 8. worked example ----------
const G8 = {x: 1170, y: 420, w: 730, h: 520} as const;
const W8 = {x: [-PI / 2 - 0.2, 1.5 * PI + 0.3] as [number, number], y: [-4.5, 3.5] as [number, number]};
const WORK: TP = {k: -3, a: 2, b: -PI / 4, c: -1};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const p = pAt([{frame: k.squash, a: 1}, {frame: k.squash + 36, a: 2}, {frame: k.slide, b: 0}, {frame: k.slide + 36, b: -PI / 4}, {frame: k.stretch, k: 1}, {frame: k.stretch + 56, k: -3}, {frame: k.then, c: 0}, {frame: k.then + 36, c: -1}], fr);
	const dim = (from: number) => prog(fr, from, 12);
	const dots = [PI / 4, PI / 2, 3 * PI / 4, PI, 5 * PI / 4];
	return (
		<>
			<SceneHeading text="Put it together" at={4} size={44} />
			<Task x={96} y={160} w={1728} at={k.lets} size={38}>Describe the transformations; state the amplitude, period, horizontal translation and range.</Task>
			<EqStrip x={96} y={262} at={k.lets + 40} size={48}>y = <Kc>−3</Kc>cos(<span style={{border: '3px dashed #9a9184', borderRadius: 10, padding: '0 6px'}}><Ac>2</Ac>x − π/2</span>) <Cc>− 1</Cc></EqStrip>
			<GivensStrip x={760} y={268} size={36} maxW={1100} items={[{content: 'k = −3', role: 'k', at: k.range}, {content: 'a = 2', role: 'a', at: k.range + 10}, {content: 'c = −1', role: 'mid', at: k.range + 20}, {content: 'b = −π/4', role: 'b', at: k.four1}]} />
			<BoxCard x={96} y={380} w={620} at={k.lets + 60} out={k.four1 - 10} size={40} title="to state"><div><Kc>amplitude</Kc></div><div><Ac>period</Ac></div><div><Bc>horizontal translation</Bc></div><div>range</div></BoxCard>
			<Row x={96} y={380} at={k.four1} size={46} small={32} dim={dim(k.squash)}>y = <Kc>−3</Kc>cos(<Ac>2</Ac>(x <Bc>− π/4</Bc>)) <Cc>− 1</Cc></Row>
			<Row x={96} y={450} at={k.pi - 10} size={46} small={32} dim={dim(k.slide)}><Ac>horizontal dilation ×½: period = 2π ÷ 2 = π</Ac></Row>
			<Row x={96} y={520} at={k.slide} size={46} small={32} dim={dim(k.stretch)}><Bc>translation right π/4</Bc></Row>
			<Row x={96} y={590} at={k.three - 20} size={46} small={32} dim={dim(k.then)}><Kc>vertical dilation ×3, reflected: amplitude 3</Kc></Row>
			<Row x={96} y={660} at={k.one - 20} size={46} small={32} dim={dim(k.rng)}><Cc>translation down 1: midline y = −1</Cc></Row>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.stretch - 12, 12)}}><div style={{position: 'absolute', left: 96, top: 760}}><Slip x={0} y={0} w={560} at={k.pi + 8} strikeAt={k.pi + 22} size={36} caption="2 inside squashes: 2π ÷ 2">period = 2π × 2 = 4π</Slip></div></div>
			<AnswerBox x={96} y={760} at={k.two} size={38}>amplitude 3 · period π · right π/4 · −4 ≤ y ≤ 2</AnswerBox>
			<Hand x={100} y={846} at={k.two + 20} size={34} color={GREY}>domain: all real x</Hand>
			<Hand x={100} y={896} at={k.at} size={36} color={GOOD.ink}>x = π/4: inside 0, cos 0 = 1, y = −3(1) − 1 = −4</Hand>
			<TPlot x={G8.x} y={G8.y} w={G8.w} h={G8.h} p={p} win={W8} xTicks={piTicks(-0.5, 1.5, 2)} yTicks={[-4, -3, -2, -1, 1, 2, 3]}>
				{m => <>
					<Arw from={m.p(0, 3.1)} to={m.p(PI / 4, 3.1)} o={prog(fr, k.slide + 6, 12) * (1 - prog(fr, k.stretch, 12))} color={BR.stroke} />
					{(() => {const o = prog(fr, k.three, 12) * (1 - prog(fr, k.sketch, 12)), X = 3 * PI / 4; return o > 0.01 ? <g opacity={o}><line x1={m.p(X, 0)[0]} x2={m.p(X, 0)[0]} y1={m.p(0, p.c)[1]} y2={m.p(0, p.c + Math.abs(p.k))[1]} stroke={KR.stroke} strokeWidth={9} strokeLinecap="round" /><Lb at={[m.p(X, 0)[0] + 18, m.p(0, p.c + 1.5)[1]]} o={1} color={KR.ink} anchor="start">3</Lb></g> : null;})()}
					{(() => {const o = prog(fr, k.one, 12), [a, y] = m.p(W8.x[0], -1), [b] = m.p(W8.x[1], -1); return o > 0.01 ? <line x1={a} x2={b} y1={y} y2={y} stroke={CR.stroke} strokeWidth={5} strokeDasharray="16 10" opacity={o} /> : null;})()}
					<HBracket x0={m.p(PI / 4, 0)[0]} x1={m.p(5 * PI / 4, 0)[0]} y={m.p(0, 2.9)[1]} o={prog(fr, k.period, 12)} color={AR.stroke} label="one cycle" size={30} />
					{dots.map((X, i) => <g key={X}><Dot at={m.p(X, tf(WORK)(X))} o={prog(fr, k.period + i * 6, 8)} r={12} />
						<Lb at={[m.p(X, 0)[0], m.p(0, tf(WORK)(X))[1] + (tf(WORK)(X) > 0 ? -24 : 44)]} o={prog(fr, k.period + i * 6 + 4, 8)} size={30}>{['−4', '−1', '2', '−1', '−4'][i]}</Lb></g>)}
					<Ring at={m.p(PI / 4, -4)} o={prog(fr, k.four2, 10)} r={24} color={GOOD.stroke} />
				</>}
			</TPlot>
			<Hand x={G8.x + 20} y={G8.y - 30} at={k.period + 10} size={34} color={AR.ink}>key point every quarter period, π/4</Hand>
		</>
	);
};

// ---------- 9. graphing check and the memory card ----------
const BUILD = [{at: 60, n: 'a' as const, v: 2}, {at: 96, n: 'b' as const, v: -PI / 4}, {at: 132, n: 'k' as const, v: -3}, {at: 172, n: 'c' as const, v: -1}];
const stepP = (i: number): TP => {const p = {...P0}; BUILD.slice(0, i).forEach(s => {p[s.n] = s.v;}); return p;};
/** The framed memory card ("Outside: on y, as written. Inside: on x, the opposite."). */
export const T01Card: React.FC<{x: number; y: number; scale?: number; c1: number; c2: number; c3: number; c4: number; c5: number; c6: number; c7: number}> = ({x, y, scale = 1, c1, c2, c3, c4, c5, c6, c7}) => {
	const f = useCurrentFrame();
	const o = (a: number) => prog(f, a, 12);
	return <div style={{position: 'absolute', left: x, top: y, width: 1460, height: 660, transform: `scale(${scale})`, transformOrigin: 'top left'}}>
		<FramedCard x={0} y={0} w={1460} h={660} at={-30} />
		<div style={{position: 'absolute', left: 60, top: 36, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GOOD.ink}}>Memory aid</div>
		<PlateImg plate={BUOY} x={60} y={130} w={110} />
		<div style={{position: 'absolute', left: 220, top: 110, opacity: o(c1), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>Outside: on y, as written.</div>
		<div style={{position: 'absolute', left: 230, top: 196, opacity: o(c1 + 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}><Kc>k ×</Kc>, <Cc>c +</Cc>: heights, as written <span style={{opacity: o(c2)}}><Kc>  × (−3)</Kc></span><span style={{opacity: o(c3)}}><Cc>  − 1</Cc></span></div>
		<div style={{position: 'absolute', left: 220, top: 290, opacity: o(c4), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>Inside: on x, the opposite.</div>
		<div style={{position: 'absolute', left: 230, top: 376, opacity: o(c4 + 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}><Ac>a</Ac>, <Bc>b</Bc>: x, the opposite <span style={{opacity: o(c5)}}><Ac>  × 2 → squash ½</Ac></span></div>
		<div style={{position: 'absolute', left: 230, top: 446, opacity: o(c6), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}><Bc>− π/4 → right π/4</Bc></div>
		<div style={{position: 'absolute', left: 220, top: 540, opacity: o(c7), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, borderTop: '3px solid #e4dccd', paddingTop: 12, width: 1160}}>Factor the inside first.</div>
	</div>;
};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const keys: TransformKey[] = [{frame: 0, ...P0}, ...BUILD.flatMap(s => [{frame: s.at, [s.n]: P0[s.n]}, {frame: s.at + 26, [s.n]: s.v}])];
	const p = pAt(keys, fr);
	const card = prog(fr, k.here - 8, 16);
	const next = BUILD.findIndex(s => fr < s.at + 26);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - card}}>
				<SceneHeading text="Check it on a graphing app" at={4} size={44} />
				<Thumb p={p} t={fr / 30} />
				<EqStrip x={96} y={162} size={44}>y = <Kc>−3</Kc>cos(<Ac>2</Ac>(x <Bc>− π/4</Bc>)) <Cc>− 1</Cc></EqStrip>
				<TPlot x={DG.x} y={DG.y} w={DG.w} h={DG.h} p={p}>
					{m => <>
						{next >= 0 ? <g clipPath={m.clip}><path d={path(m, tf(stepP(next + 1)), WMAIN.x[0], WMAIN.x[1], 400)} stroke={GOOD.stroke} strokeWidth={4} strokeDasharray="10 9" fill="none" opacity={prog(fr, BUILD[next].at - 22, 8)} /></g> : null}
						{BUILD.map((s, i) => <Lb key={i} at={[m.box.left + 30 + i * 70, m.box.top + 40]} o={prog(fr, s.at + 26, 8)} color={GOOD.ink} size={44} anchor="start">✓</Lb>)}
					</>}
				</TPlot>
				<Dials x={DIAL.x} y={DIAL.y} p={p} lit={next >= 0 ? [BUILD[next].n] : []} />
				<FeatBoard x={FEAT.x} y={FEAT.y} p={p} />
				<Hand x={DG.x + 300} y={DG.y + 12} at={60} size={34} color={GOOD.ink}>each step lands on its target</Hand>
			</div>
			{card > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: card}}>
				<SceneHeading text="Here's a way to remember it" at={k.here} size={44} />
				<T01Card x={230} y={180} c1={k.says} c2={k.times} c3={k.then} c4={k.opp} c5={k.two} c6={k.right} c7={k.right + 8} />
				<Hand x={230} y={860} at={k.says} size={30} color={GREY}><Gy>Some sources write a f(bx + c) + d.</Gy></Hand>
			</div> : null}
		</>
	);
};
export {Gc, VBracket};
