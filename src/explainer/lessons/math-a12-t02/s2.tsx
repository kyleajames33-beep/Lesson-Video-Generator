// Scenes 6 to 10: closed endpoints (2cos(x − π/4) = √2 gives three in one cycle), the graphical k problem (the level
// line sweeps, the counter jumps to 3 at k = −1), tan 2x = 1 (one crossing on each complete branch, asymptotes never
// solutions), the graphing check (grey decimals beside exact values, and an inequality), and the framed memory card
// (exported as T02Card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {HandTag, LiveReadoutBoard, MarkSpan, PlateImg, SceneHeading, StudioPlot, crossingsOf, fnPath, kf, piTicks, regionPath, smooth} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AnswerBox, BR, Bc, CARD, Chip, Counter, EqStrip, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Gy, Hand, INK, KR, Kc, Lb, PI, Ring, Row, SKYLINE, SUN, Slip, TPlot, Task, WMap, XT_2PI, crossDots, domainBar, levelLine} from './parts';
import {RC, WG, WM} from './s1';

const GREEN = '#2e7d4f';

// ---------- 6. closed endpoints can add one ----------
const R6: [number, number] = [-PI / 4 - 0.4, 2 * PI + 0.35];
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const p = smooth(prog(fr, k.four2 - 30, 34));
	const back = smooth(prog(fr, k.pi - 20, 40));
	const ends = prog(fr, k.ends, 10);
	return (
		<>
			<SceneHeading text="Closed ends can add one" at={4} size={44} />
			<TPlot x={WG.x} y={WG.y} w={WG.w} h={WG.h} p={{k: 2, a: 1, b: -PI / 4, c: 0}} win={{x: [-0.2, 2 * PI + 0.2], y: [-2.4, 2.4]}} ghost={0} xTicks={XT_2PI} yTicks={[-2, -1, 1, 2]}>
				{m => <>
					{levelLine(m, Math.SQRT2, 1, 'y = √2')}
					{domainBar(m, [0, 2 * PI], 1)}
					{[0, PI / 2, 2 * PI].map((X, i) => <g key={X}><Ring at={m.p(X, Math.SQRT2)} o={prog(fr, k.pi + 30 + i * 6, 10)} r={22} color={i === 1 ? INK : KR.stroke} /><Lb at={[m.p(X, 0)[0] + (i === 0 ? 30 : i === 2 ? -30 : 0), m.p(0, Math.SQRT2)[1] - 32]} o={prog(fr, k.pi + 30 + i * 6, 10)} size={34} color={GREEN}>{['0', 'π/2', '2π'][i]}</Lb></g>)}
				</>}
			</TPlot>
			<WMap x={WM.x} y={WM.y} w={WM.w} range={R6} domain={[0, 2 * PI]} a={1} b={-PI / 4} p={p} back={back}
				curve={{fn: Math.cos, yr: [-1.2, 1.2], level: Math.SQRT2 / 2, at: k.window}}
				dots={[{u: PI / 4, at: k.cosu + 60}, {u: -PI / 4, at: k.also + 20, glow: ends}, {u: 7 * PI / 4, at: k.also + 60, glow: ends}]} />
			<Task x={RC} y={160} w={430} at={-30} size={36}>Solve for <MarkSpan kind="underline" at={k.included} color={KR.stroke} width={5}>0 ≤ x ≤ 2π</MarkSpan></Task>
			<HandTag x={RC + 450} y={196} text="ends included" at={k.included + 6} size={36} color={KR.ink} />
			<EqStrip x={RC} y={262} at={k.solve} size={48}>2cos(x <Bc>− π/4</Bc>) = <Kc>√2</Kc></EqStrip>
			<Row x={RC} y={360} at={k.cos} size={46} small={32} dim={prog(fr, k.window, 12)}>cos(x − π/4) = <Kc>√2/2</Kc></Row>
			<Row x={RC} y={428} at={k.four2} size={44} small={32} dim={prog(fr, k.cosu, 12)}><Bc>−π/4 ≤ u ≤ 7π/4</Bc></Row>
			<Row x={RC} y={496} at={k.ends} size={44} small={32} dim={prog(fr, k.so, 12)}>u = −π/4, π/4, 7π/4</Row>
			<AnswerBox x={RC} y={580} at={k.pi} size={48}>x = 0, π/2, 2π</AnswerBox>
			<div style={{position: 'absolute', left: RC, top: 680}}><Slip x={0} y={0} w={640} at={k.three} strikeAt={k.three + 12} size={34} caption="u = −π/4 is in the window too">x = π/2 and 2π only</Slip></div>
			<Chip x={RC} y={850} at={k.because} size={34} color={KR.ink}>closed ends: check them</Chip>
		</>
	);
};

// ---------- 7. a graphical problem ----------
const G7 = {x: 20, y: 236, w: 1080, h: 640} as const;
const W7 = {x: [-0.2, 2 * PI + 0.2] as [number, number], y: [-2.6, 2.6] as [number, number]};
const f7 = (x: number) => 2 * Math.sin(x - PI / 6);
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const L = kf(fr, [[k.pi, 0.5], [k.b1 - 10, 0.5], [k.b1 + 16, 1], [k.b2 - 16, 1], [k.b2 + 14, -1.5], [k.exact - 16, -1.5], [k.exact + 10, -1], [k.two - 24, -1], [k.two, 2], [k.two + 18, 2], [k.two + 34, -2], [k.so - 6, -2], [k.so + 24, 1]]);
	const n = crossingsOf(f7, [0, 2 * PI], L, 2000, true).length;
	const lo = prog(fr, k.pi, 12);
	return (
		<>
			<SceneHeading text="A graphical problem: when exactly two?" at={4} size={44} />
			<StudioPlot x={G7.x} y={G7.y} width={G7.w} height={G7.h} window={W7} xTicks={XT_2PI} yTicks={[-2, -1, 1, 2]} at={-30}>
				{m => {
					const sx = m.box.left + m.box.width + 34, Y = (v: number) => m.p(0, v)[1];
					const seg = (a: number, b: number, c: string, at: number, lab: string) => {const o = prog(fr, at, 12); return o > 0.01 ? <g opacity={o}><line x1={sx} x2={sx} y1={Y(b) + 8} y2={Y(a) - 8} stroke={c} strokeWidth={14} strokeLinecap="round" /><text x={sx + 22} y={(Y(a) + Y(b)) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: c}}>{lab}</text></g> : null;};
					const pt = (v: number, c: string, at: number, lab: string) => {const o = prog(fr, at, 12); return o > 0.01 ? <g opacity={o}><circle cx={sx} cy={Y(v)} r={11} fill={c} stroke={CARD} strokeWidth={4} /><text x={sx + 22} y={Y(v) + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: c}}>{lab}</text></g> : null;};
					return <>
						<g clipPath={m.clip}><path d={fnPath(m, f7, 0, 2 * PI, 400)} stroke={INK} strokeWidth={7} fill="none" /></g>
						{[0, 2 * PI].map(X => <circle key={X} cx={m.p(X, -1)[0]} cy={m.p(X, -1)[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />)}
						{domainBar(m, [0, 2 * PI], 1)}
						{levelLine(m, L, lo, `y = k = ${Math.round(L * 10) / 10}`)}
						{crossDots(m, f7, [0, 2 * PI], L, lo)}
						{[0, 2 * PI].map(X => <Ring key={X} at={m.p(X, -1)} o={prog(fr, k.one, 12) * (1 - prog(fr, k.b1, 12))} r={24} color={KR.stroke} />)}
						<Lb at={[m.p(0, 0)[0] + 10, m.p(0, -1)[1] + 52]} o={prog(fr, k.same, 12)} hand size={32} color={GREY} anchor="start">late Aug</Lb>
						<Lb at={[m.p(2 * PI, 0)[0] - 10, m.p(0, -1)[1] + 52]} o={prog(fr, k.same, 12)} hand size={32} color={GREY} anchor="end">late Aug</Lb>
						<Lb at={[m.p(PI, 0)[0], m.p(0, -1)[1] + 52]} o={prog(fr, k.same, 12) * (1 - prog(fr, k.b1, 12))} hand size={36} color={KR.ink}>same date, a year apart</Lb>
						<Lb at={[m.p((2 * PI) / 3, 2)[0], m.p(0, 2)[1] - 18]} o={prog(fr, k.rises, 12)} size={32}>(2π/3, 2)</Lb>
						<Lb at={[m.p((5 * PI) / 3, -2)[0], m.p(0, -2)[1] + 44]} o={prog(fr, k.falls, 12)} size={32}>(5π/3, −2)</Lb>
						{seg(-1, 2, GREEN, k.b1 + 16, '2')}{seg(-2, -1, GREEN, k.b2 + 14, '2')}{pt(-1, KR.stroke, k.exact + 10, '3')}{pt(2, GREY, k.two + 4, '1')}{pt(-2, GREY, k.two + 34, '1')}
					</>;
				}}
			</StudioPlot>
			<Task x={RC} y={160} w={700} at={-30} size={34}>For which k does 2sin(x − π/6) = k have exactly two solutions for 0 ≤ x ≤ 2π?</Task>
			<Counter x={RC} y={420} n={n} at={k.pi} label="solutions" />
			<Hand x={RC + 250} y={440} at={k.slide} size={36} color={KR.ink} w={440}>slide the level line up and down</Hand>
			<Hand x={RC} y={600} at={k.exact + 12} size={38} color={KR.ink} w={680}>k = −1: both ends land on it, so 3</Hand>
			<AnswerBox x={RC} y={720} at={k.last} size={40}>−2 &lt; k &lt; −1 or −1 &lt; k &lt; 2</AnswerBox>
		</>
	);
};

// ---------- 8. tan ----------
const W8 = {x: [-0.1, PI + 0.1] as [number, number], y: [-3, 3] as [number, number]};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const p = smooth(prog(fr, k.pi2 - 30, 34));
	const back = smooth(prog(fr, k.halve, 40));
	return (
		<>
			<SceneHeading text="tan: one crossing on each complete branch" at={4} size={44} />
			<TPlot x={WG.x} y={WG.y} w={WG.w} h={WG.h} p={{k: 1, a: 2, b: 0, c: 0}} fam="tan" win={W8} ghost={0} xTicks={piTicks(0, 1, 8)} yTicks={[-2, -1, 1, 2]}>
				{m => <>
					{levelLine(m, 1, 1, 'y = 1')}
					{domainBar(m, [0, PI], prog(fr, k.pi1, 12))}
					{[PI / 8, 5 * PI / 8].map((X, i) => <g key={X}><Ring at={m.p(X, 1)} o={prog(fr, k.eight + i * 6, 10)} r={20} /></g>)}
					{(() => {const o = prog(fr, k.asym, 12); return o > 0.01 ? <g opacity={o}>{[PI / 4, 3 * PI / 4].map(X => <circle key={X} cx={m.p(X, 0)[0]} cy={m.box.top + m.box.height + 18} r={12} fill={CARD} stroke={GREY} strokeWidth={5} />)}
						<text x={m.p(PI / 2, 0)[0]} y={m.p(0, -2.55)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: GREY}} stroke={CARD} strokeWidth={7} paintOrder="stroke">tan 2x undefined at π/4, 3π/4</text></g> : null;})()}
				</>}
			</TPlot>
			<WMap x={WM.x} y={WM.y} w={WM.w} range={[-0.3, 2 * PI + 0.3]} domain={[0, PI]} a={2} b={0} p={p} back={back}
				curve={{fn: Math.tan, yr: [-2.6, 2.6], level: 1, at: k.let, breaks: [PI / 2, 1.5 * PI]}}
				dots={[{u: PI / 4, at: k.four1}, {u: 5 * PI / 4, at: k.four2}]} />
			<Task x={RC} y={160} w={700} at={-30} size={36}>Solve for 0 ≤ x ≤ π</Task>
			<EqStrip x={RC} y={262} at={k.solve} size={48}>tan <Bc>2x</Bc> = <Kc>1</Kc></EqStrip>
			<Row x={RC} y={360} at={k.let} size={44} small={32} dim={prog(fr, k.four1, 12)}><Bc>u = 2x: 0 ≤ u ≤ 2π</Bc></Row>
			<Row x={RC} y={428} at={k.four1} size={44} small={32} dim={prog(fr, k.halve, 12)}>tan u = 1: u = π/4, 5π/4</Row>
			<HandTag x={RC} y={500} text="tan repeats every π" at={k.repeats} size={38} role="b" />
			<AnswerBox x={RC} y={570} at={k.eight} size={48}>x = π/8 or 5π/8</AnswerBox>
			<div style={{position: 'absolute', left: RC, top: 680}}><Slip x={0} y={0} w={420} at={k.eight + 24} strikeAt={k.eight + 36} size={34} caption="u = 5π/4 too">x = π/8 only</Slip></div>
		</>
	);
};

// ---------- 9. check on a graphing app ----------
const f9 = (x: number) => 2 * Math.sin(x - PI / 6);
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	return (
		<>
			<SceneHeading text="Check on a graphing app" at={4} size={44} />
			<div style={{position: 'absolute', left: 50, top: 168, width: 1250, height: 760, background: CARD, borderRadius: 22, boxShadow: '0 14px 30px rgba(60,45,20,0.14)', border: '3px solid rgba(60,45,20,0.18)'}}>
				<div style={{height: 54, borderBottom: '2px solid rgba(60,45,20,0.12)', display: 'flex', alignItems: 'center', gap: 12, padding: '0 22px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: GREY}}>
					<span style={{width: 16, height: 16, borderRadius: 8, background: '#d9d0c0', display: 'inline-block'}} /><span style={{width: 16, height: 16, borderRadius: 8, background: '#d9d0c0', display: 'inline-block'}} />graphing check: y = 2sin(x − π/6) and y = 1
				</div>
			</div>
			<StudioPlot x={70} y={240} width={1210} height={650} window={{x: [-0.2, 2 * PI + 0.2], y: [-2.5, 2.5]}} xTicks={XT_2PI} yTicks={[-2, -1, 1, 2]} at={-30}>
				{m => <>
					{(() => {const o = prog(fr, k.above, 14); return o > 0.01 ? <path d={regionPath(m, f9, PI / 3, PI, () => 1)} fill={KR.soft} opacity={o * 0.9} /> : null;})()}
					<g clipPath={m.clip}><path d={fnPath(m, f9, 0, 2 * PI, 400)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{levelLine(m, 1, 1, 'y = 1')}
					{domainBar(m, [0, 2 * PI], 1)}
					{crossDots(m, f9, [0, 2 * PI], 1, prog(fr, k.plot + 30, 12))}
					{[PI / 3, PI].map((X, i) => <Lb key={X} at={[m.p(X, 0)[0], m.p(0, 1)[1] + 52]} o={prog(fr, i ? k.pi : k.match + 10, 10)} size={36} color={INK}>{i ? 'π ✓' : 'π/3 ✓'}</Lb>)}
				</>}
			</StudioPlot>
			<LiveReadoutBoard x={1340} y={190} width={540} at={k.first} inline rows={[{label: 'crossing 1', value: 1.047, text: 'x ≈ 1.047', role: 'height'}, {label: 'crossing 2', value: 3.142, text: 'x ≈ 3.142', role: 'height', at: k.first + 50}]} />
			<Hand x={1350} y={392} at={k.match + 10} size={40} color={GREEN}>= π/3 ✓ and π ✓</Hand>
			<Counter x={1340} y={450} n={2} at={k.expect - 10} label="crossings" />
			<AnswerBox x={1340} y={610} at={k.so} size={34}>{'2sin(x − π/6) ≥ 1\nfor π/3 ≤ x ≤ π'}</AnswerBox>
			<PlateImg plate={SKYLINE} x={1340} y={740} w={520} />
			<HandTag x={1340} y={834} text="13 hours or more: late Oct to late Feb" at={k.pi2} size={32} color={KR.ink} />
			<Hand x={1350} y={890} at={k.app} size={30} color={GREY}><Gy>app: decimals; algebra: exact</Gy></Hand>
		</>
	);
};

// ---------- 10. memory aid ----------
const Mini: React.FC<{from: [number, number]; to: [number, number]; o: number}> = ({from, to, o}) => {
	const X = (v: number) => 20 + ((v + 0.8) / (4 * PI + 1.6)) * 420;
	return <svg width={470} height={70} style={{opacity: o, overflow: 'visible', verticalAlign: 'middle'}}>
		<line x1={10} x2={460} y1={46} y2={46} stroke={INK} strokeWidth={3} />
		<rect x={X(from[0])} y={22} width={X(from[1]) - X(from[0])} height={16} rx={6} fill="#ebe4d6" stroke={INK} strokeWidth={3} />
		<rect x={X(to[0])} y={50} width={X(to[1]) - X(to[0])} height={16} rx={6} fill={BR.soft} stroke={BR.stroke} strokeWidth={3} />
	</svg>;
};
/** The framed memory card ("Do to the domain what you do to x."). */
export const T02Card: React.FC<{x: number; y: number; scale?: number; c1: number; c2: number; c3: number; c4: number}> = ({x, y, scale = 1, c1, c2, c3, c4}) => {
	const f = useCurrentFrame();
	const o = (a: number) => prog(f, a, 12);
	return <div style={{position: 'absolute', left: x, top: y, width: 1460, height: 660, transform: `scale(${scale})`, transformOrigin: 'top left'}}>
		<FramedCard x={0} y={0} w={1460} h={660} at={-30} />
		<div style={{position: 'absolute', left: 60, top: 36, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GOOD.ink}}>Memory aid</div>
		<PlateImg plate={SUN} x={50} y={130} w={120} />
		<div style={{position: 'absolute', left: 220, top: 110, opacity: o(c1), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: INK}}>Do to the domain what you do to x.</div>
		<div style={{position: 'absolute', left: 230, top: 220, opacity: o(c2), display: 'flex', alignItems: 'center', gap: 20, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: BR.ink}}>stretch: 0 ≤ x ≤ 2π → 0 ≤ 2x ≤ 4π<Mini from={[0, 2 * PI]} to={[0, 4 * PI]} o={1} /></div>
		<div style={{position: 'absolute', left: 230, top: 320, opacity: o(c3), display: 'flex', alignItems: 'center', gap: 20, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: BR.ink}}>slide: −π/6 ≤ x − π/6 ≤ 11π/6<Mini from={[0, 2 * PI]} to={[-PI / 6, 11 * PI / 6]} o={1} /></div>
		<div style={{position: 'absolute', left: 230, top: 420, opacity: o(c4), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>undo: x = u ÷ a − b</div>
		<div style={{position: 'absolute', left: 220, top: 540, opacity: o(c4 + 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, borderTop: '3px solid #e4dccd', paddingTop: 12, width: 1160}}>Count first, then solve.</div>
	</div>;
};
export const S10: React.FC = () => {
	const k = K10;
	return (
		<>
			<SceneHeading text="Here's the rule to remember" at={4} size={44} />
			<T02Card x={230} y={180} c1={k.do} c2={k.double} c3={k.both} c4={k.x2} />
			<Hand x={230} y={860} at={k.do} size={30} color={GREY}><Gy>Some sources write a f(bx + c) + d; here the inside is a(x + b).</Gy></Hand>
		</>
	);
};
export {kf, Kc, Bc};
