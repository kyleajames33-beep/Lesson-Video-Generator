// Scenes 10 to 16: the memory aid (the bath's signed pieces and the bath itself), attempt 1 (a trapezium below the
// axis) and its brief feedback, attempt 2 (a sign change) and its brief feedback, the handoff (i08's opening frame,
// built on i08's own stand-in so the join is exact) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, TaskStrip, fnPath, kf, makePlot, smooth, usePlatePreload, vis} from '../../math/studio';
import {ABLUE, AMBER, AMBER_STROKE, Int, f as f08} from '../math-a12-i08/parts';
import {I07FinalFrameStandIn} from '../math-a12-i08/s1';
import {K10, K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AMB_INK, Am, Attempt, BATH, BathRig, BoxCard, Bracket, Chip, FramedCard, GREEN, GREY, MiniPlot, Note, PLabel, SegRow, TEAL_INK, Tl, net, water} from './parts';

export const AID07 = 'Above adds, below subtracts.';
const GR = '#6b4fa0';
const SOFT = '#4f4840';

/** The net flow with its signed fill (memory card, notes, handoff recap). */
const SignedFlow: React.FC<{x: number; y: number; w: number; h: number; at?: number; out?: number; labels?: number; size?: number}> = ({x, y, w, h, at = -30, out, labels = 1, size = 38}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={{x: [-0.4, 8.6], y: [-5, 13.4]}} xTicks={[2, 4, 6, 8]} yTicks={[-4, 4, 8, 12].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} xLabel="t (min)" yLabel="net flow (L/min)" at={at} out={out}>
		{m => <>
			<AreaFillLayer m={m} fn={net} a={0} to={8} signed />
			<g clipPath={m.clip}><path d={fnPath(m, net, 0, 8)} stroke={GR} strokeWidth={6} fill="none" /></g>
			<PLabel p={m.p(0.6, 3.2)} text="+36: water in" color={TEAL_INK} size={size} o={labels} />
			<PLabel p={m.p(3.6, -3.6)} text="−4: water out" color={AMB_INK} size={size} o={labels} />
		</>}
	</StudioPlot>
);

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="The rule to remember" at={4} size={52} />
			<FramedCard x={60} y={150} w={1800} h={830} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 215, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, color: INK, opacity: prog(f, k.above - 10, 14)}}>{AID07}</div>
			<SignedFlow x={90} y={330} w={860} h={480} />
			<BathRig x={1000} y={360} w={820} V={water(8)} tapRate={0} tag={{text: '72 L', o: 1}} />
			<BoxCard x={1000} y={760} w={820} at={-30} size={40} border={GREEN} bw={3}>the bath: 36 in, 4 out, net 32 L</BoxCard>
			<div style={{position: 'absolute', left: 110, top: 840, opacity: prog(f, k.every, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}>
				<Int lo="a" hi="b" color={GR}>f(x)</Int> = lim<sub style={{fontSize: 30}}> Δx → 0</sub> Σ f(x)Δx
			</div>
			<Chip x={110} y={910} at={k.b} size={32} color={GREY}>a &lt; b</Chip>
			<Chip x={260} y={910} at={k.later} size={32} color={GREY}>swapped limits: a later video</Chip>
			<div style={{position: 'absolute', left: 1000, top: 870, opacity: prog(f, k.on, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: TEAL_INK, whiteSpace: 'pre'}}>36 → 33 → 32.25 → <span style={{color: INK}}>32</span></div>
		</>
	);
};

// ---------- question pictures (answer-free: empty axes and a hand tag) ----------
const EmptyAxes: React.FC<{win: {x: [number, number]; y: [number, number]}; xt: number[]; yt: number[]}> = ({win, xt, yt}) => {
	const w = 820, h = 540, L = 70, R = w - 40, T = 30, B = h - 60;
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L), Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	const neg = (v: number) => (v < 0 ? `−${-v}` : String(v));
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				{xt.map(v => <line key={'gx' + v} x1={X(v)} x2={X(v)} y1={T} y2={B} stroke="#e4dccd" strokeWidth={2} />)}
				{yt.map(v => <line key={'gy' + v} x1={L} x2={R} y1={Y(v)} y2={Y(v)} stroke="#e4dccd" strokeWidth={2} />)}
				<path d={`M${L},${Y(0)} H${R + 10} M${X(0)},${B + 6} V${T - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{xt.map(v => <text key={'tx' + v} x={X(v)} y={Y(0) + (Y(0) > B - 30 ? -14 : 40)} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{neg(v)}</text>)}
				{yt.map(v => <text key={'ty' + v} x={X(0) + 14} y={Y(v) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{neg(v)}</text>)}
				<text x={R + 6} y={Y(0) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>x</text>
				<text x={X(0) + 14} y={T + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>y</text>
				<text x={R - 10} y={Y(0) < h / 2 ? B - 16 : T + 50} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: SOFT}}>sketch first</text>
			</svg>
		</div>
	);
};

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: number}> = ({u}) => <div>Use areas to evaluate {u !== undefined ? <MarkSpan kind="underline" at={u}><Int lo="0" hi="3">(x − 5)</Int></MarkSpan> : <Int lo="0" hi="3">(x − 5)</Int>}.</div>;
/** The feedback card's wording (the shrunk 30 px card): the integral in words, so no limit is drawn under 26 px. */
const Q1w: React.FC<{u: number}> = ({u}) => <div>Use areas to evaluate the integral of <MarkSpan kind="underline" at={u}>x − 5 from 0 to 3</MarkSpan>.</div>;
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} top={440} size={52} given={[<><Int lo="0" hi="3">(x − 5)</Int></>, 'use areas']}
		picture={<EmptyAxes win={{x: [-0.4, 3.6], y: [-6, 1]}} xt={[1, 2, 3]} yt={[-5, -3, -1]} />}>
		<Q1 />
	</Attempt>
);

// ---------- 12. feedback 1 ----------
const s5 = (x: number) => x - 5;
export const S12: React.FC = () => {
	const k = K12;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1w u={k.at} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'f(x) = x − 5', role: 'gradient', at: 6}, {content: 'from 0 to 3', at: 12}]} />
			<SegRow x={96} y={310} size={48} segs={[{c: <>at 0: −5,  at 3: −2</>, at: k.at + 20}, {c: <>below the whole way</>, at: k.way}]} />
			<SegRow x={96} y={410} size={50} segs={[{c: <>area = 3 × (5 + 2) ÷ 2</>, at: k.area}, {c: <>= 21/2</>, at: k.two}]} />
			<SegRow x={96} y={510} size={52} segs={[{c: <><Int lo="0" hi="3">(x − 5)</Int> = <Am>−21/2</Am></>, at: k.below + 30}]} answerAt={k.below + 36} />
			<Card x={96} y={620} w={900} at={20} out={k.wrong - 10} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. sketch it  2. name the shape<br />3. its area  4. its sign</div>
			</Card>
			<MistakeCard x={96} y={720} w={900} at={k.wrong - 4} size={48} wrong={<>+21/2</>} caption="below the axis: it must be negative" />
			<MiniPlot x={1010} y={270} w={880} h={730} win={{x: [-0.4, 3.6], y: [-6, 1]}} xTicks={[1, 2, 3]} yTicks={[-5, -1].map(v => ({value: v, label: `−${-v}`})) as never} curves={[{fn: s5, from: -0.3, to: 3, color: GR}]}>
				{m => <>
					{f >= k.way ? <g opacity={prog(f, k.way, 14)}><AreaFillLayer m={m} fn={s5} a={0} to={3} signed /></g> : null}
					{[0, 3].map(X => {const p = m.p(X, s5(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={12} fill={GR} stroke={CARD} strokeWidth={4} opacity={prog(f, k.at + 20, 12)} />;})}
					<PLabel p={m.p(0.12, -5.4)} text="(0, −5)" size={34} o={prog(f, k.at + 20, 12)} />
					<PLabel p={m.p(1.25, -4.75)} text="y = x − 5" color={GR} size={40} />
					<PLabel p={m.p(2.9, -1.3)} text="(3, −2)" size={34} anchor="end" o={prog(f, k.at + 20, 12)} />
					<Bracket a={m.p(-0.18, 0)} b={m.p(-0.18, -5)} text="5" o={prog(f, k.shape + 20, 12)} dx={-16} anchor="end" dy={10} size={40} />
					<Bracket a={m.p(3.2, 0)} b={m.p(3.2, -2)} text="2" o={prog(f, k.shape + 30, 12)} dx={16} anchor="start" dy={10} size={40} />
					<Bracket a={m.p(0, 0.45)} b={m.p(3, 0.45)} text="width 3" o={prog(f, k.shape + 40, 12)} dy={-14} size={36} />
				</>}
			</MiniPlot>
			<HandTag x={640} y={890} text="loses the sign" at={k.sign} size={42} color="#b8322a" />
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: number}> = ({u}) => <div>Use areas to evaluate {u !== undefined ? <MarkSpan kind="underline" at={u}><Int lo="0" hi="6">(x − 2)</Int></MarkSpan> : <Int lo="0" hi="6">(x − 2)</Int>}.</div>;
const Q2w: React.FC<{u: number}> = ({u}) => <div>Use areas to evaluate the integral of <MarkSpan kind="underline" at={u}>x − 2 from 0 to 6</MarkSpan>.</div>;
export const S13: React.FC = () => (
	<Attempt hold={hold('scene-13')} pauseAt={K13.pause} heading="Last one" top={440} size={52} given={[<><Int lo="0" hi="6">(x − 2)</Int></>, 'use areas']}
		picture={<EmptyAxes win={{x: [-0.4, 6.6], y: [-3, 5]}} xt={[2, 4, 6]} yt={[-2, 2, 4]} />}>
		<Q2 />
	</Attempt>
);

// ---------- 14. feedback 2 ----------
const s2 = (x: number) => x - 2;
export const S14: React.FC = () => {
	const k = K14;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2w u={k.crosses} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'f(x) = x − 2', role: 'gradient', at: 6}, {content: 'from 0 to 6', at: 12}]} />
			<SegRow x={96} y={310} size={48} segs={[{c: <>crosses the axis at x = 2</>, at: k.crosses + 30}]} />
			<SegRow x={96} y={400} size={48} segs={[{c: <>0 to 2, below:  area ½ × 2 × 2 = <Am>2</Am></>, at: k.from1 + 40}]} />
			<SegRow x={96} y={490} size={48} segs={[{c: <>2 to 6, above:  area ½ × 4 × 4 = <Tl>8</Tl></>, at: k.eight - 20}]} />
			<SegRow x={96} y={590} size={52} segs={[{c: <><Int lo="0" hi="6">(x − 2)</Int> = 8 − 2</>, at: k.integral}, {c: <>= 6</>, at: k.six}]} answerAt={k.six + 6} />
			<Card x={96} y={700} w={900} at={20} out={k.ten - 10} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.35}}>1. where does it cross?  2. each piece's area<br />3. above adds, below subtracts</div>
			</Card>
			<MistakeCard x={96} y={720} w={900} at={k.ten} size={48} wrong={<>10</>} caption="8 + 2: the piece below must subtract" />
			<MiniPlot x={1060} y={300} w={830} h={640} win={{x: [-0.4, 6.6], y: [-3, 5]}} xTicks={[2, 4, 6]} yTicks={[-2, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)})) as never} curves={[{fn: s2, from: -0.4, to: 6.6, color: GR}]}>
				{m => <>
					{f >= k.from1 ? <g opacity={prog(f, k.from1, 14)}><AreaFillLayer m={m} fn={s2} a={0} to={2} signed /></g> : null}
					{f >= k.from2 ? <g opacity={prog(f, k.from2, 14)}><AreaFillLayer m={m} fn={s2} a={2} to={6} signed /></g> : null}
					{(() => {const p = m.p(2, 0); return <circle cx={p[0]} cy={p[1]} r={24} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, k.crosses + 30, 12)} />;})()}
					<PLabel p={m.p(0.35, -1.3)} text="2" color={AMB_INK} size={44} o={prog(f, k.from1 + 40, 12)} />
					<PLabel p={m.p(4.4, 1.0)} text="8" color={TEAL_INK} size={52} o={prog(f, k.eight, 12)} />
					<Bracket a={m.p(2, -0.5)} b={m.p(6, -0.5)} text="4" o={prog(f, k.from2 + 60, 12)} dy={40} size={38} />
					<Bracket a={m.p(6.3, 0)} b={m.p(6.3, 4)} text="4" o={prog(f, k.from2 + 80, 12)} dx={-16} anchor="end" dy={10} size={38} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 15. handoff (i08's opening frame) ----------
const G1 = {x: 40, y: 150, w: 1080, h: 790, win: {x: [-0.3, 6.3] as [number, number], y: [-3.5, 3.5] as [number, number]}};
/** A copy of i08's OneGraph (same geometry and drawing), so the frame at the end of this scene is i08's stand-in. */
const OneGraph08: React.FC<{X: number; at: number}> = ({X, at}) => (
	<StudioPlot x={G1.x} y={G1.y} width={G1.w} height={G1.h} window={G1.win} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={[-3, 3]} xLabel="t" yLabel="y" at={at}>
		{m => {const [px, ay] = m.p(X, 0), [, py] = m.p(X, f08(X)); return <>
			<AreaFillLayer m={m} fn={f08} a={0} to={X} signed />
			<g clipPath={m.clip}><path d={fnPath(m, f08, 0, 6)} stroke={ABLUE} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			{[0, 6].map(t => {const [qx, qy] = m.p(t, f08(t)); return <circle key={t} cx={qx} cy={qy} r={11} fill={ABLUE} stroke={CARD} strokeWidth={4} />;})}
			<line x1={px} x2={px} y1={ay} y2={py} stroke={AMBER_STROKE} strokeWidth={5} />
			<circle cx={px} cy={ay} r={14} fill={AMBER_STROKE} stroke={CARD} strokeWidth={4} />
			<text x={px + 18} y={ay - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">x</text>
		</>;}}
	</StudioPlot>
);
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const k = K15;
	const recap = 1 - prog(f, k.now - 10, 14);
	const X = kf(f, [[k.shaded, 0], [k.shaded + 70, 2]]);
	if (f >= dur('scene-15') - 2) return <I07FinalFrameStandIn />;
	return (
		<>
			{recap > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: recap}}>
				<SceneHeading text="A signed sum, settled" at={4} size={52} />
				<SignedFlow x={40} y={150} w={1080} h={790} size={44} />
				<BoxCard x={1170} y={200} w={710} at={10} size={52} title="the bath">36 + (−4) = 32 L</BoxCard>
				<HandTag x={1180} y={380} text={AID07} at={k.strips - 10} size={52} color={INK} />
				<BathRig x={1170} y={480} w={710} V={water(8)} tapRate={0} tag={{text: '72 L', o: 1}} />
			</div> : null}
			{f >= k.now - 10 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, k.now - 10, 14)}}>
				<SceneHeading text="How fast does it grow?" at={k.now} size={56} />
				<OneGraph08 X={X} at={k.graph - 10} />
				<BoxCard x={1170} y={200} w={710} at={k.integral} size={52} title="shaded signed area">A(x) = <Int lo="0" hi="x" v="t">(3 − t)</Int> = <span style={{color: '#7a4600'}}>?</span></BoxCard>
				<Chip x={1170} y={430} at={k.grow - 10} size={46} color={AMBER_STROKE}>Next: let the end move</Chip>
				<HandTag x={1180} y={640} text="the end x moves: the area changes" at={k.changes} size={42} color={SOFT} />
				<div style={{position: 'absolute', left: 1180, top: 700, width: 680, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.25, color: SOFT, opacity: prog(f, k.now + 20, 12)}}>last video: above the axis adds, below the axis subtracts</div>
			</div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const I07FinalFrame = I07FinalFrameStandIn;
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-16';
	usePlatePreload([BATH.src]);
	const items = [
		{content: <>A strip below the axis is a negative change.</>, at: 10},
		{content: <>Signed sum: strips above add, strips below subtract.</>, at: 22},
		{content: <><Int lo="a" hi="b" color={GR}>f(x)</Int> = lim<sub style={{fontSize: 30}}> Δx → 0</sub> Σ f(x)Δx, for f continuous.</>, at: 34},
		{content: <>f(x) ≤ 0 for a ≤ x ≤ b: integral ≤ 0 (&lt; 0 unless f is all 0).</>, at: 46},
		{content: <>Shapes: area above counts +, area below counts −.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} />
				<HandTag x={1824} y={116} text="pause to copy" at={K16.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={38} gap={62} />
				<Note x={150} y={930} at={70} size={30}>for a velocity, the integral is the displacement</Note>
				<FramedCard x={1180} y={196} w={690} h={780} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 212, opacity: prog(f, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.05, color: INK, marginTop: 2}}>{AID07}</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<SignedFlow x={1200} y={400} w={650} h={330} labels={0} />
					<BathRig x={1240} y={740} w={420} V={water(8)} tapRate={0} scale={false} />
					<div style={{position: 'absolute', left: 1670, top: 760, width: 180, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.1, color: INK}}>36 in, 4 out, net 32 L</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I07FinalFrameStandIn /></div> : null}
		</>
	);
};
export {makePlot, smooth, vis};
