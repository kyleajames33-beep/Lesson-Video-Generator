// Scenes 8a to 15: the plant stand's answer (C = 50, not 66), the memory aid (two live pictures: the shelves'
// parallel curves and one curve sliding onto a point), attempt 1 and its brief feedback, attempt 2 and its brief
// feedback, the handoff (exported as I01FinalFrame and I01Board; i02 opens on it) and the key notes, which
// return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, Card, CardTitle, GivensCard, GivensStrip, HandTag, InnerSlot, KeyNotesBullets, MarkSpan, MistakeCard, ParameterSlider, QuestionCard, RolesOn, SceneHeading, StudioDerivativeCheck, StudioPlot, TaskStrip, fnPath, kf, usePlatePreload, vis} from '../../math/studio';
import {K8A, K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {A1F, A2F, AMB, AMB_INK, Attempt, Cc, Chip, FramedCard, Frac, GREEN, GREY_INK, Line, MiniPlot, Note, PLabel, RED, Ring, SHOOT, STAND, SegRow, ShelfGraph, ShelfStand, Tick, V, VIOLET, a1f, a2f, tip} from './parts';

export const AID01 = 'The gradient rule fixes the shape. One point fixes the height.';

// ---------- 8a. the plant stand's answer ----------
export const S08A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8A;
	const C = kf(f, [[k.has + 40, 0], [k.fifty + 6, 50]]);
	const ghost = prog(f, k.isnt, 14);
	const pick = prog(f, k.fifty + 6, 14);
	return (
		<>
			<SceneHeading text="Back to the plant stand" at={4} size={56} />
			<GivensCard x={30} y={175} w={540} at={-30} size={42} lines={[{content: <><V>growth rate 2t</V> cm/wk</>, at: -30}, {content: 'h = 66 when t = 4', at: -30}]} />
			<ShelfStand x={30} y={460} w={540} t={4} dim={[1 - 0.65 * pick, 1, 1 - 0.65 * pick]} soilRing={pick} />
			<ShelfGraph x={600} y={175} w={760} h={540} t={4} drawn={5} curveO={[0.22, 0.22, 0.22]} points={0} ring={1} ringTag={1} soilLabels={false}>
				{m => <>
					<g clipPath={m.clip}>
						<path d={fnPath(m, u => tip(u, 66), 0, 5)} stroke="#8a8378" strokeWidth={4.5} strokeDasharray="14 10" fill="none" opacity={ghost} />
						<path d={fnPath(m, u => tip(u, C), 0, 5)} stroke={f >= k.fifty + 6 ? GREEN : INK} strokeWidth={7} fill="none" strokeLinecap="round" opacity={prog(f, k.each, 12)} />
					</g>
					{(() => {const p = m.p(4, tip(4, C)); return <circle cx={p[0]} cy={p[1]} r={11} fill={f >= k.fifty + 6 ? GREEN : INK} stroke={CARD} strokeWidth={4} opacity={prog(f, k.each, 12)} />;})()}
					{(() => {const p = m.p(4, 82); return <g opacity={ghost}><circle cx={p[0]} cy={p[1]} r={10} fill="#8a8378" /><text x={p[0] - 20} y={p[1] - 34} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: RED}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">C = 66: 82 cm at 4 weeks</text></g>;})()}
					<PLabel p={m.p(1.55, 8)} text="C = 0" size={34} o={vis(f, k.each, k.has + 44, 12)} />
				</>}
			</ShelfGraph>
			<Line x={1400} y={150} at={k.each} size={52}>h = t² <Cc>+ C</Cc></Line>
			<SegRow x={1400} y={240} size={52} segs={[{c: <>66 = 4² <Cc>+ C</Cc></>, at: k.tip + 30}]} />
			<SegRow x={1400} y={330} size={52} segs={[{c: <>= 16 <Cc>+ C</Cc></>, at: k.has + 10}]} />
			<Line x={1400} y={420} at={k.fifty} size={52}><Cc>C = 50</Cc></Line>
			{/* Repair 13 Nov (Codex hold 2): slider was y 710, its C badge covered the "time t (weeks)" axis title; slider and row moved down */}
			<ParameterSlider x={620} y={752} width={380} symbol="C" role="k" value={C} min={0} max={80} ticks={[0, 20, 40, 60, 80].map(v => ({value: v, label: String(v)}))} at={k.has + 30} digits={0} />
			<SegRow x={640} y={900} size={44} segs={[{c: <><Cc>C = 50</Cc>: it started at 50 cm, the middle shelf</>, at: k.started}]} answerAt={k.started + 4} />
			<MistakeCard x={1390} y={530} w={500} at={k.isnt} size={50} wrong={<>C = 66</>} caption="66 cm is where it got to" />
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const C = kf(f, [[k.height + 6, 0], [k.height + 50, 3]]);
	usePlatePreload([STAND.src, SHOOT.src]);
	return (
		<>
			<SceneHeading text="The idea to keep" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={830} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 222, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK, whiteSpace: 'pre'}}>
				<span style={{opacity: prog(f, k.shape - 26, 14)}}>The gradient rule fixes the shape. </span><span style={{opacity: prog(f, k.height - 14, 14)}}>One point fixes the height.</span>
			</div>
			<ShelfGraph x={100} y={320} w={840} h={450} t={3} drawn={5} soilLabels={false} ring={prog(f, k.reading, 12)} />
			<StudioPlot x={990} y={320} width={840} height={450} window={{x: [-2.5, 2.5], y: [-3, 10]}} xTicks={[-2, -1, 1, 2]} yTicks={[2, 4, 6, 8]} at={-30}>
				{m => <>
					<g clipPath={m.clip}>
						{[-2, -1, 0, 1, 2].map(c => <path key={c} d={fnPath(m, x => x * x + c, -2.5, 2.5)} stroke="#8a8378" strokeWidth={3.5} fill="none" opacity={0.55} />)}
						<path d={fnPath(m, x => x * x + C, -2.5, 2.5)} stroke={C > 2.999 ? GREEN : INK} strokeWidth={7} fill="none" strokeLinecap="round" />
					</g>
					{(() => {const p = m.p(1, 4); return <g><circle cx={p[0]} cy={p[1]} r={14} fill={CARD} stroke={INK} strokeWidth={5} /><text x={p[0] + 24} y={p[1] + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: AMB_INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">(1, 4)</text></g>;})()}
					<Ring p={m.p(1, 4)} r={32} o={prog(f, k.height + 50, 10)} color={GREEN} />
				</>}
			</StudioPlot>
			<HandTag x={130} y={830} text="the shelves: same growth rule, same shape" at={k.plant} size={46} color={INK} />
			<HandTag x={1020} y={830} text="one reading picks the shelf" at={k.reading} size={46} color={AMB} />
			<div style={{position: 'absolute', left: 110, top: 880, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, whiteSpace: 'pre', opacity: prog(f, k.find, 14)}}>
				Raise the power, divide by the new power, add <Cc>C</Cc> (n ≠ −1). <span style={{opacity: prog(f, k.check - 30, 12)}}>Differentiate back to check. <Tick size={40} o={prog(f, k.check, 10)} /></span>
			</div>
		</>
	);
};

// ---------- question pictures (answer-free) ----------
const QPic: React.FC<{w?: number; h?: number; win: {x: [number, number]; y: [number, number]}; xt: number[]; yt: number[]; fn?: (x: number) => number; label?: string; point?: {x: number; y: number; tag: string}}> = ({w = 800, h = 460, win, xt, yt, fn, label, point}) => {
	const L = 70, R = w - 40, T = 30, B = h - 60;
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L), Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	const d = fn ? Array.from({length: 161}, (_, i) => {const v = win.x[0] + ((win.x[1] - win.x[0]) * i) / 160; const y = Math.max(win.y[0], Math.min(win.y[1], fn(v))); return `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(y).toFixed(1)}`;}).join(' ') : '';
	const neg = (v: number) => (v < 0 ? `−${-v}` : String(v));
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				{xt.map(v => <line key={'gx' + v} x1={X(v)} x2={X(v)} y1={T} y2={B} stroke="#e4dccd" strokeWidth={2} />)}
				{yt.map(v => <line key={'gy' + v} x1={L} x2={R} y1={Y(v)} y2={Y(v)} stroke="#e4dccd" strokeWidth={2} />)}
				<path d={`M${L},${Y(0)} H${R + 10} M${X(0)},${B + 6} V${T - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{xt.map(v => <text key={'tx' + v} x={X(v)} y={Y(0) + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{neg(v)}</text>)}
				{yt.map(v => <text key={'ty' + v} x={X(0) - 14} y={Y(v) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{neg(v)}</text>)}
				<text x={R + 6} y={Y(0) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>x</text>
				<text x={X(0) + 14} y={T + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>y</text>
				{fn ? <path d={d} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}
				{label ? <text x={L + 20} y={T + 40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: VIOLET}}>{label}</text> : null}
				{point ? <g><circle cx={X(point.x)} cy={Y(point.y)} r={12} fill={INK} /><circle cx={X(point.x)} cy={Y(point.y)} r={28} fill="none" stroke={INK} strokeWidth={5} /><text x={X(point.x) - 40} y={Y(point.y) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB_INK}} stroke="#fbf8f1" strokeWidth={7} paintOrder="stroke">{point.tag}</text></g> : null}
			</svg>
		</div>
	);
};

// ---------- 10. attempt 1 ----------
const Q1: React.FC<{u?: number}> = ({u}) => <div>Find ∫(8x³ − 6x² + 5) dx. {u !== undefined ? <MarkSpan kind="underline" at={u}>Check your answer by differentiating.</MarkSpan> : 'Check your answer by differentiating.'}</div>;
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} top={440} size={50} given={[<>∫(8x³ − 6x² + 5) dx</>, 'check by differentiating']}
		picture={<QPic win={{x: [-1.1, 1.6], y: [-10, 22]}} xt={[-1, 1]} yt={[-5, 5, 10, 15, 20]} fn={a1f} label="the gradient" />}>
		<Q1 />
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1 u={k.diff} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '8x³ − 6x² + 5', role: 'gradient', at: 6}, {content: 'check by differentiating', at: 12}]} />
			<SegRow x={96} y={300} size={50} segs={[{c: <>∫<V>8x³</V> dx = 8 · <Frac n="x⁴" d="4" /></>, at: 40}, {c: <>= 2x⁴</>, at: k.four}]} />
			<SegRow x={96} y={400} size={50} segs={[{c: <>∫(<V>−6x²</V>) dx = −6 · <Frac n="x³" d="3" /></>, at: k.four + 40}, {c: <>= −2x³</>, at: k.cubed}]} />
			<SegRow x={96} y={500} size={50} segs={[{c: <>∫<V>5</V> dx = 5x</>, at: k.x}]} />
			<Card x={96} y={620} w={900} at={20} out={k.answer + 6} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. term by term: raise, divide<br />2. one <Cc>+ C</Cc><br />3. differentiate back to check</div>
			</Card>
			<SegRow x={96} y={605} size={52} segs={[{c: <>2x⁴ − 2x³ + 5x <Cc>+ C</Cc></>, at: k.answer + 20}]} answerAt={k.C} />
			<StudioDerivativeCheck x={96} y={605} gap={115} size={48} answer="" result={<span><V>8x³ − 6x² + 5</V> <Tick size={44} o={prog(f, k.matches, 10)} /></span>} at={k.diff} tickAt={k.matches} answerFn={A1F} targetFn={a1f} range={[-1, 1.5]} />
			<MistakeCard x={96} y={800} w={960} at={k.without} size={46} wrong={<>2x⁴ − 2x³ + 5x</>} caption="one primitive, not all of them: add + C" />
			<MiniPlot x={1100} y={300} w={790} h={640} win={{x: [-1.1, 1.6], y: [-10, 22]}} xTicks={[-1, 1]} yTicks={[-5, 5, 10, 15, 20]}
				curves={[{fn: a1f, from: -1.1, to: 1.6, color: VIOLET}, ...[-6, 0, 6].map(c => ({fn: (x: number) => A1F(x) + c, from: -1.1, to: 1.6, color: c === 0 ? INK : '#8a8378', width: c === 0 ? 6 : 3.5, o: prog(f, k.C, 14) * (c === 0 ? 1 : 0.7)}))]}>
				{m => <>
					<PLabel p={m.p(-1.0, 19.5)} text="the integrand" color={VIOLET} size={36} />
					<PLabel p={m.p(-1.0, 16)} text="2x⁴ − 2x³ + 5x + C: a family" color={INK} size={32} o={prog(f, k.C + 10, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{u?: number}> = ({u}) => <div>A curve y = f(x) has gradient function f′(x) = 4x³ − 6x + 1 and passes through the point {u !== undefined ? <MarkSpan kind="underline" at={u}>(2, 9)</MarkSpan> : '(2, 9)'}. Find f(x).</div>;
export const S12: React.FC = () => (
	<Attempt hold={hold('scene-12')} pauseAt={K12.pause} heading="Last one" top={480} size={46} given={['f′(x) = 4x³ − 6x + 1', 'through (2, 9)']}
		picture={<QPic win={{x: [-2, 2.2], y: [-4, 16]}} xt={[-2, -1, 1, 2]} yt={[5, 10, 15]} point={{x: 2, y: 9, tag: '(2, 9)'}} />}>
		<Q2 />
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const f = useCurrentFrame();
	const C = kf(f, [[k.nine, 0], [k.three + 10, 3]]);
	const slip = prog(f, k.isnt, 14);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2 u={k.use} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'f′(x) = 4x³ − 6x + 1', role: 'gradient', at: 6}, {content: 'through (2, 9)', role: 'k', at: 12}]} />
			<SegRow x={96} y={305} size={50} segs={[{c: <>f(x) = x⁴ − 3x² + x</>, at: 60}, {c: <Cc>+ C</Cc>, at: k.C}]} />
			<SegRow x={96} y={405} size={50} segs={[{c: <>f(2) = 16 − 12 + 2 <Cc>+ C</Cc></>, at: k.at + 30}, {c: <>= 6 <Cc>+ C</Cc></>, at: k.six}, {c: <>= 9</>, at: k.nine}]} />
			<Card x={96} y={515} w={900} at={20} out={k.three - 12} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. integrate: one <Cc>+ C</Cc><br />2. the point: f(2) must be 9<br />3. solve for <Cc>C</Cc>, then write f(x)</div>
			</Card>
			<Line x={96} y={505} at={k.three} size={52}><Cc>C = 3</Cc></Line>
			<SegRow x={96} y={605} size={52} segs={[{c: <>f(x) = x⁴ − 3x² + x + 3</>, at: k.fx}]} answerAt={k.fx + 10} />
			<MistakeCard x={96} y={740} w={960} at={k.isnt} size={44} wrong={<>f(x) = x⁴ − 3x² + x + 9</>} caption="C = 9 puts the curve at 15 when x = 2" />
			<StudioPlot x={1080} y={290} width={810} height={660} window={{x: [-2, 2.2], y: [-4, 16]}} xTicks={[-2, -1, 1, 2]} yTicks={[5, 10, 15]} at={-30}>
				{m => <>
					<g clipPath={m.clip}>
						{[0, 3, 6].map(c => <path key={c} d={fnPath(m, x => A2F(x) + c, -2, 2.2)} stroke="#8a8378" strokeWidth={3.5} fill="none" opacity={0.55 * prog(f, 60, 14)} />)}
						<path d={fnPath(m, x => A2F(x) + 9, -2, 2.2)} stroke={RED} strokeWidth={5} strokeDasharray="14 10" fill="none" opacity={slip} />
						<path d={fnPath(m, x => A2F(x) + C, -2, 2.2)} stroke={f >= k.three + 10 ? GREEN : INK} strokeWidth={7} fill="none" strokeLinecap="round" opacity={prog(f, 60, 14)} />
					</g>
					{(() => {const a = m.p(2, 6), b = m.p(2, 9); const so = vis(f, k.six, k.fx, 12); return <g opacity={so}>
						<line x1={a[0] - 30} x2={a[0] - 30} y1={a[1]} y2={b[1] + 12} stroke={AMB} strokeWidth={6} strokeLinecap="round" />
						<path d={`M${a[0] - 42},${b[1] + 28} L${a[0] - 30},${b[1] + 8} L${a[0] - 18},${b[1] + 28}`} stroke={AMB} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
						<text x={a[0] - 46} y={(a[1] + b[1]) / 2 + 14} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: AMB_INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">the slide</text>
						<circle cx={a[0]} cy={a[1]} r={9} fill={INK} />
					</g>;})()}
					{(() => {const p = m.p(2, 9); return <g opacity={prog(f, 20, 12)}><circle cx={p[0]} cy={p[1]} r={15} fill={CARD} stroke={INK} strokeWidth={5} /><text x={p[0] - 26} y={p[1] - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB_INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">(2, 9)</text></g>;})()}
					<Ring p={m.p(2, 9)} r={34} o={vis(f, k.three + 10, k.isnt, 10)} color={GREEN} />
					{(() => {const p = m.p(2, 15); return <g opacity={slip}><circle cx={p[0]} cy={p[1]} r={10} fill={RED} /><text x={p[0] - 22} y={p[1] - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: RED}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">C = 9: f(2) = 15</text></g>;})()}
				</>}
			</StudioPlot>
		</>
	);
};

// ---------- 14. handoff (i02's opening frame) ----------
const HEAD01 = 'Next: brackets and the reverse chain rule';
const SQ = () => <>(<InnerSlot>2x + 1</InnerSlot>)²</>;
/**
 * i01's final frame (design scene 14 and its silent return after the notes); i02 opens on it. `intAt` and
 * `aidAt` (default: already shown) let scene 14 write the integral and the memory line on their cues.
 */
export const I01Board: React.FC<{headAt: number; expandAt: number; shortAt: number; out?: number; showHead?: boolean; intAt?: number; aidAt?: number; markAt?: number}> = ({headAt, expandAt, shortAt, out, showHead = true, intAt = -60, aidAt = -60, markAt}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 14);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{showHead ? <SceneHeading text={HEAD01} at={headAt} size={56} /> : null}
			<div style={{position: 'absolute', left: 96, top: 150, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK, opacity: prog(f, aidAt, 12)}}>{AID01}</div>
			<div style={{position: 'absolute', left: 0, width: 1920, top: 250, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: INK, whiteSpace: 'pre', opacity: prog(f, intAt, 12)}}>
				∫<MarkSpan kind="circle" at={markAt ?? headAt} color={AMB} width={6}><V><SQ /></V></MarkSpan> dx
			</div>
			<Chip x={250} y={520} at={expandAt} size={56}>expand first?</Chip>
			<div style={{position: 'absolute', left: 260, top: 630, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 48, color: INK, opacity: 0.5 * prog(f, expandAt, 12)}}>4x² + 4x + 1</div>
			<Chip x={1180} y={520} at={shortAt} size={56}>or a shortcut?</Chip>
			<div style={{position: 'absolute', left: 1600, top: 470, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 130, color: AMB, opacity: prog(f, shortAt, 12)}}>?</div>
		</div>
	);
};
/** i01's final frame; i02 opens on it. */
export const I01FinalFrame: React.FC = () => <I01Board headAt={-60} expandAt={-60} shortAt={-60} />;
const RecapFam: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; tag: number; C?: number}> = ({x, y, w, h, at, out, tag, C = 3}) => (
	<MiniPlot x={x} y={y} w={w} h={h} win={{x: [-2.5, 2.5], y: [-3, 10]}} xTicks={[-2, -1, 1, 2]} yTicks={[2, 4, 6, 8]} at={at} out={out} curves={[-2, -1, 0, 1, 2].map(c => ({fn: (x: number) => x * x + c, from: -2.5, to: 2.5, color: '#8a8378', width: 3.5, o: 0.6})).concat([{fn: (x: number) => x * x + C, from: -2.5, to: 2.5, color: C > 2.999 ? GREEN : INK, width: 7, o: 1}])}>
		{m => <>
			<Ring p={m.p(1, 4)} r={24} color={INK} />
			<PLabel p={m.p(-2.35, 9.2)} text="one point picks one curve" size={tag} color={AMB_INK} hand />
		</>}
	</MiniPlot>
);
export const S14: React.FC = () => {
	const k = K14;
	const f = useCurrentFrame();
	return (
		<>
			<I01Board headAt={k.next - 4} expandAt={k.expand - 22} shortAt={k.shortcut} intAt={k.bracket} aidAt={4} markAt={k.bracket + 24} />
			<RecapFam x={360} y={220} w={1200} h={740} at={4} out={k.bracket - 16} tag={56} C={kf(f, [[40, 0], [k.so + 140, 3]])} />
			<RecapFam x={760} y={640} w={1120} h={340} at={k.bracket - 6} out={k.shortcut + 8} tag={40} />
			<Card x={90} y={740} w={660} at={k.bracket} out={k.shortcut + 8} pad="12px 24px 14px">
				<CardTitle>so far: powers of x</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}>∫xⁿ dx = <Frac n={<>xⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK}}>term by term, then one point fixes <Cc>C</Cc></div>
			</Card>
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-15';
	const items = [
		{content: <>F is a primitive of <V>f</V> if F′(x) = <V>f(x)</V>.</>, at: 10},
		{content: <>On an interval, primitives differ by a constant: F(x) <Cc>+ C</Cc>.</>, at: 22},
		{content: <>∫xⁿ dx = <Frac n={<>xⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc>, for n ≠ −1.</>, at: 34},
		{content: <>Term by term, one <Cc>+ C</Cc>. Check by differentiating.</>, at: 46},
		{content: <>One point fixes <Cc>C</Cc>: substitute it and solve.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} />
				<HandTag x={1824} y={116} text="pause to copy" at={K15.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={40} gap={84} />
				<FramedCard x={1180} y={196} w={690} h={780} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 212, opacity: prog(f, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.05, color: INK, marginTop: 2}}>{AID01}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, lineHeight: 1.22, color: INK, marginTop: 10}}>The shelves: same growth rule, different starting heights.</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<ShelfGraph x={1200} y={480} w={650} h={300} t={3} drawn={5} soilLabels={false} />
					<div style={{position: 'absolute', left: 1220, top: 818, width: 620, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, lineHeight: 1.2, color: INK}}>Raise the power, divide by the new power, add <Cc>C</Cc>. Differentiate back to check.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I01FinalFrame /></div> : null}
		</>
	);
};
