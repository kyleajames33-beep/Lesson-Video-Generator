// Scenes 6 to 9: the curved case in a coded graphing application (t² summed by 400 midpoint strips; the traced
// gradient lands on x²; x³/3 overlays the plotted curve), moving the start to 10 am (the counter loses 250 cars and
// the A curve slides down 5/2 with parallel tangents at x = 2), the theorem board, and the three earlier results.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, FrameSvg, HandTag, LiveReadoutBoard, ParameterSlider, RiemannLayer, SceneHeading, StudioPlot, fnPath, kf, regionPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K6, K7, K8, K9} from './cuemap';
import {A, ABLUE, AMBER, AMBER_STROKE, Line, clock, Anum, AnswerBox, BoxCard, Bu, CarParkRig, Chip, GRAD, Glow, Int, Lims, PG, PLabel, PairView, Rows, Stub, TEAL, Te, Tick, f, sq} from './parts';
import type {PairG} from './parts';

const SOFT = '#4f4840';
const RC = 1150;

// ---------- 6. not just straight lines ----------
const G6: PairG = {x: 70, y: 226, w: 1040, hTop: 350, hBot: 350, gap: 14, wx: [-0.12, 2.25], yTop: [-0.25, 3], yBot: [-0.3, 4.5]};
const dA = (x: number) => (Anum(x + 1e-3) - Anum(Math.max(0, x - 1e-3))) / (x + 1e-3 - Math.max(0, x - 1e-3));
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const X = kf(fr, [[k.shade, 0], [k.app, 2], [k.watch, 2], [k.watch + 14, 0], [k.traces + 80, 2]]);
	const firstPass = fr < k.watch;
	const tracing = fr >= k.watch + 14;
	const flick = 0.55 + 0.25 * Math.sin(fr * 0.9);
	return (
		<>
			<SceneHeading text="Not just straight lines: a curve" at={4} size={56} />
			<div style={{position: 'absolute', left: 30, top: 140, width: 1110, height: 880, background: CARD, borderRadius: 22, border: '3px solid rgba(60,45,20,0.18)', boxShadow: '0 14px 32px rgba(60,45,20,0.10)'}}>
				<div style={{height: 54, borderBottom: '2px solid rgba(60,45,20,0.14)', display: 'flex', alignItems: 'center', gap: 12, padding: '0 22px'}}>
					{['#d2453a', '#d9a221', '#3c9a5f'].map(c => <span key={c} style={{width: 18, height: 18, borderRadius: 9, background: c, display: 'inline-block'}} />)}
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: SOFT, marginLeft: 12}}>graphing app: move x</span>
				</div>
			</div>
			<PairView g={G6} X={X} fn={sq} Afn={Anum} curve={{from: 0, to: firstPass ? X : 2}} topLabel="A(x) from thin strips" botLabel="y = t²" xLabel="t" xTicks={[1, 2]} yTopTicks={[1, 2]} yBotTicks={[2, 4]}
				topKids={m => <>
					<path d={fnPath(m, x => (x * x * x) / 3, 0, 2.2)} stroke={INK} strokeWidth={4} strokeDasharray="10 9" fill="none" opacity={prog(fr, k.prim + 30, 14)} clipPath={m.clip} />
					<PLabel p={m.p(1.62, 2.55)} text="x³/3" color={INK} size={44} o={prog(fr, k.prim + 30, 12)} />
					{tracing ? <Stub m={m} X={X} Y={Anum(X)} s={X * X} hl={110} /> : null}
				</>}
				botKids={m => <>
					{X > 0.02 ? <g opacity={firstPass ? flick : 0.35}><RiemannLayer m={m} fn={sq} a={0} b={X} n={Math.max(1, Math.round(X * 20))} rule="mid" /></g> : null}
					<PLabel p={m.p(0.1, 3.9)} text="very thin strips" color={TEAL} size={38} hand o={prog(fr, k.app + 20, 12) * (1 - prog(fr, k.watch, 10))} />
					{tracing ? [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].filter(t => X >= t - 1e-6).map(t => {const [px, py] = m.p(t, dA(t)); return <circle key={t} cx={px} cy={py} r={11} fill={GRAD} stroke={CARD} strokeWidth={3} />;}) : null}
					{tracing ? <PLabel p={m.p(0.1, 3.9)} text="gradient of A: dots land on t²" color={GRAD} size={38} hand /> : null}
				</>} />
			<LiveReadoutBoard x={RC + 20} y={160} width={720} at={-30} inline size={50} labelSize={30} rows={[
				{label: 'x', value: X, digits: 2, role: 'k'},
				{label: 'A(x) from strips', value: Anum(X), digits: 3, role: 'a'},
				{label: 'gradient of A', value: dA(X), digits: 2, role: 'gradient'},
				{label: 'x²', value: X * X, digits: 2, role: 'b'},
			]} />
			<Chip x={RC + 20} y={540} at={k.is} out={k.allow - 4} size={42} color={AMBER_STROKE}>Only a trick for straight lines?</Chip>
			<Chip x={RC + 20} y={540} at={k.allow} size={40} color={GRAD}>gradient of A ≈ x² (numerical strips)</Chip>
			<Chip x={RC + 20} y={640} at={k.tryit} size={40} color={AMBER_STROKE}>Try it: move x in any graphing app</Chip>
			<BoxCard x={RC + 20} y={740} w={720} at={k.shade + 20} out={k.prim - 6} size={40} title="no simple shapes">Under a curve, the app adds very thin strips instead.</BoxCard>
			<BoxCard x={RC + 20} y={740} w={720} at={k.prim} size={44} border={INK}>a primitive of x² is x³/3: it matches</BoxCard>
			<Chip x={RC + 20} y={890} at={k.only} size={40} color="#8a8378">needs: f continuous</Chip>
			<HandTag x={RC + 470} y={920} text="no straight line needed" at={k.edge} size={36} color={SOFT} />
		</>
	);
};

// ---------- 7. moving the start ----------
const PLATE2 = {x: 1210, y: 196, w: 560};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const a = kf(fr, [[k.every, 0], [k.every + 50, 1]]);
	const sl = smooth(prog(fr, k.half, 30));
	const shift = -2.5 * sl;
	const flash = prog(fr, k.trap, 10) * (1 - prog(fr, k.slides, 14)) * (0.65 + 0.35 * Math.sin(fr * 0.35));
	const X = 2;
	return (
		<>
			<SceneHeading text="What if we start counting at 10 am?" at={4} size={56} />
			<PairView g={{...PG, yTop: [-3, 5.5]}} X={X} a={a} shift={shift} ghost={prog(fr, k.half, 12)}
				topKids={m => {const [px, p0] = m.p(4.6, A(4.6)), [, p1] = m.p(4.6, A(4.6) + shift); return <>
					{sl > 0.02 ? <g opacity={prog(fr, k.half, 10)}><line x1={px} x2={px} y1={p0 + 10} y2={p1 - 12} stroke={AMBER_STROKE} strokeWidth={6} /><path d={`M${px - 14},${p1 - 26} L${px},${p1} L${px + 14},${p1 - 26}`} stroke={AMBER_STROKE} strokeWidth={6} fill="none" strokeLinecap="round" /><text x={px + 18} y={(p0 + p1) / 2 + 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">− 5/2</text></g> : null}
					<Stub m={m} X={2} Y={A(2)} s={1} o={prog(fr, k.one, 12)} color="#8a8378" hl={130} />
					<Stub m={m} X={2} Y={A(2) + shift} s={1} o={prog(fr, k.one, 12)} hl={130} />
					<PLabel p={m.p(3.9, 5.05)} text="dashed: counting from 9 am" color={SOFT} size={34} hand o={prog(fr, k.half + 20, 12)} />
				</>;}}
				botKids={m => <>
					<path d={regionPath(m, f, 0, 1)} fill="none" stroke="#c2410c" strokeWidth={6} opacity={flash} />
					<PLabel p={m.p(-0.2, -2.3)} text="250 cars before ten" color="#7a4600" size={38} hand o={prog(fr, k.cars, 12)} />
					<Glow m={m} X={2} Y={1} o={prog(fr, k.one, 12)} />
					<PLabel p={m.p(2.2, 1.6)} text="height 1" color={TEAL} size={36} o={prog(fr, k.one, 12)} />
					{(() => {const [px, ay] = m.p(a, 0); return <g><line x1={px} x2={px} y1={ay} y2={m.p(a, f(a))[1]} stroke={INK} strokeWidth={5} /><circle cx={px} cy={ay} r={13} fill={INK} stroke={CARD} strokeWidth={4} /><text x={px - 14} y={ay + 44} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">start</text></g>;})()}
				</>} />
			<CarParkRig x={PLATE2.x} y={PLATE2.y} w={PLATE2.w} count={100 * (A(X) - A(a))} rate={f(X)} captionB={{text: 'extra cars since 10 am', p: prog(fr, k.every + 30, 16)}} />
			<LiveReadoutBoard x={RC + 20} y={600} width={720} at={-30} inline size={48} labelSize={30} rows={[{label: 'start counting at', value: a, role: 'height', format: clock}, {label: 'extra cars by 11 am', value: 100 * (A(X) - A(a)), role: 'a', format: v => String(Math.round(v))}]} />
			<BoxCard x={RC + 20} y={760} w={720} at={k.what} out={k.cars - 6} size={40} title="the question">Count from 10 am (t = 1) instead of 9 am. What happens to A?</BoxCard>
			<HandTag x={RC + 40} y={800} text="− 250 cars: 400 becomes 150" at={k.cars} out={k.one - 4} size={42} color="#7a4600" />
			<LiveReadoutBoard x={RC + 20} y={770} width={720} at={k.one} inline size={48} labelSize={30} rows={[
				{label: 'gradient at x = 2: same on both', value: 1, digits: 0, role: 'gradient'},
			]} />
			<Chip x={RC + 20} y={900} at={k.plusc} size={44} color={INK}>different start: + C</Chip>
		</>
	);
};

// ---------- 8. the Fundamental Theorem of Calculus ----------
const fa = 0.5, fb = 2.5;
const Aa = (x: number) => A(x) - A(fa);
const G8: PairG = {x: 40, y: 150, w: 600, hTop: 400, hBot: 390, gap: 14, wx: [-0.2, 3.2], yTop: [-0.5, 4.4], yBot: [-0.5, 3.4]};
const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => (
	<span style={{position: 'relative', display: 'inline-block', color: on > 0.5 ? '#8a8378' : undefined}}>{children}
		{on > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: '8%', width: 'calc(100% + 8px)', height: '84%', overflow: 'visible'}}><path d="M0,80 L100,20" stroke="#8a8378" strokeWidth={6} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - on} /></svg> : null}
	</span>
);
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const X = kf(fr, [[0, fa], [60, fb], [k.start - 10, fb], [k.start + 20, fa], [k.soFb, fa], [k.soFb + 60, fb]]);
	const cut = prog(fr, k.cancel, 14);
	const ringO = prog(fr, k.brackets, 14);
	return (
		<>
			<SceneHeading text="The Fundamental Theorem of Calculus" at={4} size={56} />
			<PairView g={G8} X={X} a={fa} Afn={Aa} curve={{from: fa, to: X}} topLabel="A(x): area from a" botLabel="f" xLabel="t" xTicks={[{value: fa, label: 'a'}, {value: fb, label: 'b'}]} yTopTicks={[2, 4]} yBotTicks={[1, 2, 3]}
				topKids={m => <PLabel p={m.p(0.6, 0.55)} text="A(a) = 0" color={ABLUE} size={38} o={prog(fr, k.start, 12)} />}
				botKids={m => {const [px, ay] = m.p(fa, 0); return <><circle cx={px} cy={ay} r={13} fill={INK} stroke={CARD} strokeWidth={4} /><PLabel p={m.p(0.9, 3.0)} text="no strips yet" color={SOFT} size={36} hand o={prog(fr, k.zero, 12) * (1 - prog(fr, k.soFb, 10))} /></>;}} />
			<BoxCard x={690} y={160} w={1190} at={-30} size={42}>A(x) = <Int lo="a" hi="x" v="t">f(t)</Int>: the area from a up to x</BoxCard>
			<Chip x={690} y={290} at={k.take} out={k.soF - 4} size={46} color={INK}>Take any primitive F of f.</Chip>
			<Line x={700} y={400} at={k.take + 20} out={k.soF - 4} size={44}>F′(x) = f(x), just like A′(x) = f(x)</Line>
			<BoxCard x={690} y={700} w={1190} at={-30} out={k.ftc - 6} size={42} border={AMBER_STROKE} title="the goal">the area from a to b, A(b), from any primitive F, with no strips</BoxCard>
			<Rows x={700} y={290} size={54} old={40} rows={[
				{at: k.soF, c: <>F(x) = <Bu>A(x)</Bu> + C</>},
				{at: k.start + 20, c: <><Bu>A(a)</Bu> = 0</>},
				{at: k.soFb, c: <>F(b) − F(a) = (<Bu>A(b)</Bu> + <Strike on={cut}>C</Strike>) − (<Bu>A(a)</Bu> + <Strike on={cut}>C</Strike>)</>},
				{at: k.leaves, c: <>= <Bu>A(b)</Bu> = <Int lo="a" hi="b" color={TEAL}>f(x)</Int></>},
			]} />
			<HandTag x={1180} y={326} text="any two primitives differ by a constant" at={k.soF + 10} out={k.start + 16} size={36} color={SOFT} />
			<HandTag x={1500} y={570} text="C cancels" at={k.cancel + 6} out={k.ftc} size={42} color={GRAD} />
			<Chip x={690} y={600} at={k.ftc} size={42} color={AMBER_STROKE}>the Fundamental Theorem of Calculus</Chip>
			<div style={{position: 'absolute', left: 690, top: 700, opacity: prog(fr, k.cont, 14), display: 'inline-block', background: CARD, border: '5px solid #287347', borderRadius: 18, padding: '10px 28px 14px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, whiteSpace: 'pre'}}>
				<Int lo="a" hi="b" color={TEAL}>f(x)</Int> = <span style={{position: 'relative', display: 'inline-block'}}><Lims lo="a" hi="b">F(x)</Lims>{ringO > 0 ? <svg style={{position: 'absolute', left: -18, top: -14, width: 'calc(100% + 36px)', height: 'calc(100% + 28px)', overflow: 'visible'}} viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx={50} cy={50} rx={50} ry={50} fill="none" stroke={AMBER_STROKE} strokeWidth={5} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - ringO} /></svg> : null}</span> = F(b) − F(a)
			</div>
			<HandTag x={700} y={905} text="f continuous on a ≤ x ≤ b" at={k.cont + 30} size={40} color={TEAL} />
			<HandTag x={1290} y={905} text="F: any primitive of f" at={k.anyF} size={40} color={INK} />
			<HandTag x={1300} y={665} text="square brackets: F(b) − F(a)" at={k.brackets + 10} size={38} color={AMBER} />
		</>
	);
};

// ---------- 9. the earlier results agree ----------
type Thumb = {title: string; fn: (x: number) => number; a: number; b: number; win: {x: [number, number]; y: [number, number]}; xT: (number | {value: number; label: string})[]; yT: number[]; xL: string; yL: string; strips: string; rows: [React.ReactNode, React.ReactNode]; rowAt: number; tickAt: number; signed?: boolean};
const COLX = [40, 665, 1290];
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const fade = prog(fr, k.two, 20);
	const thumbs: Thumb[] = [
		{title: 'the trolley (x² m/s)', fn: sq, a: 0, b: 2, win: {x: [-0.15, 2.25], y: [-0.3, 4.5]}, xT: [1, 2], yT: [2, 4], xL: 'x (s)', yL: 'speed', strips: 'strips settled near 2.667', rows: [<><Lims lo="0" hi="2">x³/3</Lims></>, <>= 8/3 − 0 = 8/3 ≈ 2.667</>], rowAt: k.prim1, tickAt: k.about + 40},
		{title: 'the rain gauge (cos x cm/h)', fn: Math.cos, a: 0, b: Math.PI / 2, win: {x: [-0.12, 1.75], y: [-0.1, 1.18]}, xT: [{value: Math.PI / 2, label: 'π/2'}], yT: [1], xL: 'x (h)', yL: 'rate', strips: 'strips settled on 1 cm', rows: [<><Lims lo="0" hi="π/2">sin x</Lims></>, <>= 1 − 0 = 1</>], rowAt: k.cos, tickAt: k.one + 14},
		{title: 'the bath (12 − 2t L/min)', fn: t => 12 - 2 * t, a: 0, b: 8, win: {x: [-0.4, 8.6], y: [-4.6, 13.4]}, xT: [4, 8], yT: [-4, 12], xL: 't (min)', yL: 'net flow', strips: 'signed strips: 32 L', rows: [<><Lims lo="0" hi="8">12t − t²</Lims></>, <>= (96 − 64) − 0 = 32</>], rowAt: k.bath + 40, tickAt: k.thirty2 + 14, signed: true},
	];
	return (
		<>
			<SceneHeading text="The earlier results agree" at={4} size={56} />
			{thumbs.map((t, i) => <React.Fragment key={i}>
				<div style={{position: 'absolute', left: COLX[i], top: 150, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>{t.title}</div>
				<StudioPlot x={COLX[i]} y={210} width={590} height={430} window={t.win} xTicks={t.xT} yTicks={t.yT} xLabel={t.xL} yLabel={t.yL} at={-30}>
					{(m: PlotMap) => {const [pa, ay] = m.p(t.a, 0), [pb] = m.p(t.b, 0); return <>
						<g opacity={1 - 0.85 * fade}><RiemannLayer m={m} fn={t.fn} a={t.a} b={t.b} n={16} rule="mid" signed={t.signed} /></g>
						{fade > 0 ? <path d={regionPath(m, t.fn, t.a, t.b)} fill={t.signed ? 'none' : '#d6eeee'} stroke="none" opacity={0.6 * fade} /> : null}
						<g clipPath={m.clip}><path d={fnPath(m, t.fn, t.win.x[0], t.win.x[1])} stroke={i === 1 ? TEAL : GRAD} strokeWidth={6} fill="none" strokeLinecap="round" /></g>
						<g opacity={fade}>{[pa, pb].map((px, j) => <circle key={j} cx={px} cy={ay} r={15} fill={INK} stroke={CARD} strokeWidth={4} />)}</g>
					</>;}}
				</StudioPlot>
				<div style={{position: 'absolute', left: COLX[i] + 8, top: 680, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: SOFT}}>{t.strips}</div>
				<Rows x={COLX[i] + 8} y={740} size={44} old={44} rows={[{at: t.rowAt, c: t.rows[0]}]} />
				<div style={{position: 'absolute', left: COLX[i] + 8, top: 820, opacity: prog(fr, t.rowAt + 30, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}>{t.rows[1]} <span style={{opacity: prog(fr, t.tickAt, 10)}}><Tick size={42} /></span></div>
			</React.Fragment>)}
			<HandTag x={960} y={940} text="two values of one primitive, not 1000 strips" at={k.two} size={44} color={INK} anchor="middle" />
		</>
	);
};
