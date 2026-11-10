// Scenes 1 to 4: the hook (i01's bracket frame, expanding (2x + 1)² on an area model, then the starter rising in
// its jar beside live rate and rise graphs), rewriting into powers of x (each case graphed with its domain), the
// bracket by guess, check and halve (the kit's paired derivative panel tracing the guess's gradient onto a dashed
// target), and two answers a constant 1/6 apart. I01FinalFrameStandIn is i01's final frame as its design states
// it, built here so i01 can import it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, FrameSvg, HandTag, InnerSlot, MarkSpan, PairedDerivativePanel, Pow, SceneHeading, StudioPrimitiveFamily, WorkingRows, fnPath, kf, vis} from '../../math/studio';
import {K1, K2, K3, K4} from './cuemap';
import {AMB, BLUE, Bl, BoxCard, Cc, Chip, Frac, GREEN, GREY, Line, MiniPlot, P4, PLabel, Q4, Rt, StarterBoard, StarterGraph, StarterRise, Tick, V, VIOLET} from './parts';

export const AID01 = 'The gradient rule fixes the shape. One point fixes the height.';
const HEAD01 = 'Next: brackets and the reverse chain rule';
const HEAD1 = 'Power primitives: algebra and the reverse chain rule';
const SQ = () => <>(<InnerSlot>2x + 1</InnerSlot>)²</>;

// ---------- i01's final frame ----------
const I01Board: React.FC<{headAt: number; expandAt: number; shortAt: number; out?: number; showHead?: boolean}> = ({headAt, expandAt, shortAt, out, showHead = true}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 14);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{showHead ? <SceneHeading text={HEAD01} at={headAt} size={56} /> : null}
			<div style={{position: 'absolute', left: 96, top: 150, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK}}>{AID01}</div>
			<div style={{position: 'absolute', left: 0, width: 1920, top: 250, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: INK, whiteSpace: 'pre'}}>
				∫<MarkSpan kind="circle" at={headAt} color={AMB} width={6}><V><SQ /></V></MarkSpan> dx
			</div>
			<Chip x={250} y={520} at={expandAt} size={56}>expand first?</Chip>
			<div style={{position: 'absolute', left: 260, top: 630, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 48, color: INK, opacity: 0.5 * prog(f, expandAt, 12)}}>4x² + 4x + 1</div>
			<Chip x={1180} y={520} at={shortAt} size={56}>or a shortcut?</Chip>
			<div style={{position: 'absolute', left: 1600, top: 470, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 130, color: AMB, opacity: prog(f, shortAt, 12)}}>?</div>
		</div>
	);
};
/** i01's final frame (i01 design scene 14 and its silent return after the notes); i02 opens on it. */
export const I01FinalFrameStandIn: React.FC = () => <I01Board headAt={-60} expandAt={-60} shortAt={-60} />;

// ---------- 1. hook ----------
const CUT = 12;
/** Expanding (2x + 1)² as the area of a square with sides 2x + 1. */
const AreaModel: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const A = 330, B = 120;
	const tile = (tx: number, ty: number, w: number, h: number, label: string, fill: string, k: number) => <g key={label + k} opacity={prog(f, at + 8 + k * 8, 12)}>
		<rect x={tx} y={ty} width={w} height={h} fill={fill} stroke={INK} strokeWidth={4} />
		<text x={tx + w / 2} y={ty + h / 2 + 15} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: w < 100 || h < 100 ? 36 : 52, fill: INK}}>{label}</text>
	</g>;
	return (
		<FrameSvg style={{opacity: o}}>
			{tile(x, y, A, A, '4x²', '#efe6d4', 0)}
			{tile(x + A, y, B, A, '2x', '#e6dcf0', 1)}
			{tile(x, y + A, A, B, '2x', '#e6dcf0', 2)}
			{tile(x + A, y + A, B, B, '1', '#f6e7c8', 3)}
			<text x={x + A / 2} y={y - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>2x</text>
			<text x={x + A + B / 2} y={y - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>1</text>
			<text x={x - 18} y={y + A / 2 + 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>2x</text>
			<text x={x - 18} y={y + A + B / 2 + 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>1</text>
		</FrameSvg>
	);
};
const JAR1 = {x: 60, y: 300, w: 360};
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <I01FinalFrameStandIn />;
	const t = kf(f, [[k.hour, 0], [k.hour + 96, 6]]);
	const done = f >= k.hour + 96;
	return (
		<>
			<SceneHeading text={HEAD01} at={-300} size={56} out={24} />
			{f >= 34 ? <SceneHeading text={HEAD1} at={36} size={56} /> : null}
			<I01Board headAt={-60} expandAt={-60} shortAt={-60} out={k.expanding - 6} showHead={false} />
			{/* expanding, before the jar */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, k.jar - 4, 14)}}>
				{f < k.jar + 12 ? <>
					<div style={{position: 'absolute', left: 96, top: 150, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 80, color: INK, opacity: prog(f, k.expanding - 6, 12), whiteSpace: 'pre'}}>∫<V><SQ /></V> dx</div>
					<Chip x={760} y={170} at={k.expanding} size={52}>expand first?  <Tick size={48} o={prog(f, k.C + 10, 10)} /></Chip>
					<Chip x={1260} y={170} at={k.expanding} size={52}>or a shortcut?</Chip>
					<AreaModel x={170} y={400} at={k.expanding + 4} />
					<HandTag x={150} y={920} text="a square of side 2x + 1" at={k.expanding + 30} size={42} color={INK} />
					<Line x={760} y={420} at={k.expanding + 10} size={64}><V><SQ /></V> = 4x² + 4x + 1</Line>
					<Line x={760} y={600} at={k.one + 6} size={60}>∫(4x² + 4x + 1) dx = <Frac n="4x³" d="3" /> + 2x² + x <Cc>+ C</Cc></Line>
					<HandTag x={780} y={800} text="expanded, then integrated term by term" at={k.C} size={46} color={INK} />
				</> : null}
			</div>
			{/* the starter */}
			{f >= k.jar - 6 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, k.jar - 6, 14)}}>
				<div style={{position: 'absolute', left: 96, top: 128, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, whiteSpace: 'pre'}}>∫(2x + 1)² dx: expand it  <Tick size={34} /></div>
				<StarterRise x={JAR1.x} y={JAR1.y} w={JAR1.w} t={t} />
				<HandTag x={60} y={1010} text="t hours after feeding" at={k.fed} size={38} color={INK} />
				<StarterBoard x={560} y={200} width={430} t={t} riseText={done ? '?' : undefined} />
				<Line x={580} y={500} at={k.hour - 10} size={64}><V><Frac n="3" d={<Rt><InnerSlot>4t + 1</InnerSlot></Rt>} scale={0.85} /></V></Line>
				<div style={{position: 'absolute', left: 840, top: 540, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK, opacity: prog(f, k.hour, 12)}}>cm per hour</div>
				<HandTag x={590} y={720} text="nothing to expand" at={k.expand} size={44} color={VIOLET} />
				<HandTag x={590} y={790} text="fast at first, then slower" at={k.fast} out={k.expand - 4} size={40} color={VIOLET} />
				<Chip x={560} y={820} at={k.how} size={44} color={GREEN}>risen after 6 hours?</Chip>
				<Chip x={560} y={920} at={k.these - 10} size={38}>powers of x, or of a bracket?</Chip>
				<StarterGraph x={1030} y={140} w={860} h={400} t={t} kind="rate" />
				<StarterGraph x={1030} y={555} w={860} h={400} t={t} kind="rise" ask={prog(f, k.how, 12)} />
			</div> : null}
		</>
	);
};

// ---------- 2. algebra first: make powers of x ----------
const G2 = {x: 30, y: 150, w: 820, h: 820};
const RX2 = 900;
const half = (lo: number, hi: number) => [lo, hi] as [number, number];
const CaseGraph: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const c = f < k.c2 ? 1 : f < k.c3 ? 2 : 3;
	const fade = c === 1 ? 1 : prog(f, c === 2 ? k.c2 : k.c3, 14);
	if (c === 1) return (
		<MiniPlot x={G2.x} y={G2.y} w={G2.w} h={G2.h} win={{x: half(-2.5, 2.5), y: half(-4.2, 4.2)}} xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]}
			curves={[{fn: x => 1 / x ** 3, from: -2.5, to: -0.05, color: VIOLET}, {fn: x => 1 / x ** 3, from: 0.05, to: 2.5, color: VIOLET}]}>
			{m => {const p = m.p(0, -4.2), q = m.p(0, 4.2); const zo = prog(f, k.zero1, 12); return <>
				<line x1={p[0]} x2={q[0]} y1={p[1]} y2={q[1]} stroke={GREY} strokeWidth={4} strokeDasharray="12 10" opacity={zo} />
				<PLabel p={m.p(0.75, 3.4)} text="y = 1/x³" color={VIOLET} size={42} />
				<PLabel p={m.p(-2.3, 2.7)} text="piece 1: x < 0" size={36} hand o={zo} />
				<PLabel p={m.p(0.35, -2.8)} text="piece 2: x > 0" size={36} hand o={zo} />
			</>;}}
		</MiniPlot>
	);
	if (c === 2) return (
		<div style={{opacity: fade}}>
			<MiniPlot x={G2.x} y={G2.y} w={G2.w} h={G2.h} win={{x: half(-1.5, 3.2), y: half(-1, 6)}} xTicks={[-1, 1, 2, 3]} yTicks={[1, 2, 3, 4, 5]}
				curves={[{fn: x => x ** 1.5, from: 0, to: 3.2, color: VIOLET}]}>
				{m => {const a = m.p(-1.5, 6), b = m.p(0, -1); const po = prog(f, k.pos, 12); return <>
					<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill="#e7e1d6" opacity={0.8 * po} />
					<PLabel p={m.p(-1.35, 3)} text="not defined" size={36} hand o={po} />
					<PLabel p={m.p(1.4, 4.4)} text={<>y = x<tspan dy={-16} fontSize={28}>3/2</tspan></>} color={VIOLET} size={42} />
					<circle cx={m.p(0, 0)[0]} cy={m.p(0, 0)[1]} r={11} fill={VIOLET} stroke={CARD} strokeWidth={4} />
				</>;}}
			</MiniPlot>
		</div>
	);
	return (
		<div style={{opacity: fade}}>
			<MiniPlot x={G2.x} y={G2.y} w={G2.w} h={G2.h} win={{x: half(-2.5, 2.5), y: half(-1, 8.5)}} xTicks={[-2, -1, 1, 2]} yTicks={[2, 4, 6, 8]}
				curves={[{fn: x => x * x + 2, from: -2.5, to: -0.02, color: VIOLET}, {fn: x => x * x + 2, from: 0.02, to: 2.5, color: VIOLET}]}>
				{m => {const h = m.p(0, 2); const zo = prog(f, k.zero2, 12); return <>
					<circle cx={h[0]} cy={h[1]} r={13} fill={CARD} stroke={VIOLET} strokeWidth={5} />
					<circle cx={h[0]} cy={h[1]} r={30} fill="none" stroke={GREY} strokeWidth={4} opacity={zo} />
					<PLabel p={m.p(0.25, 1.1)} text="hole at x = 0" size={38} hand o={zo} />
					<PLabel p={m.p(0.9, 7.6)} text="y = (x³ + 2x)/x" color={VIOLET} size={42} />
				</>;}}
			</MiniPlot>
		</div>
	);
};
const DomainChip: React.FC<{x: number; y: number; at: number; out?: number; children: React.ReactNode}> = ({x, y, at, out, children}) => <Chip x={x} y={y} at={at} out={out} size={40} color={GREY}>{children}</Chip>;
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const cur = f < k.c2 ? 0 : f < k.c3 ? 1 : 2;
	const X32 = () => <>x<Pow>3/2</Pow></>;
	const X52 = () => <>x<Pow>5/2</Pow></>;
	const list: React.ReactNode[] = [<>∫ <Frac n="1" d="x³" /> dx</>, <>∫ <X32 /> dx</>, <>∫ <Frac n="x³ + 2x" d="x" /> dx</>];
	return (
		<>
			<SceneHeading text="Algebra first: make powers of x" at={4} size={56} />
			<CaseGraph />
			<BoxCard x={RX2} y={140} at={-30} size={36} title="from i01">∫xⁿ dx = <Frac n={<>xⁿ⁺¹</>} d="n + 1" /> <Cc>+ C</Cc>,  n ≠ −1</BoxCard>
			<Card x={RX2} y={300} w={980} at={-30} out={k.rw - 4} pad="16px 28px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK}}>the power rule needs powers of x</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, lineHeight: 1.45, marginTop: 8}}>1. rewrite as a power of x<br />2. raise the power, divide by it<br />3. keep the original domain</div>
			</Card>
			{/* case 1 */}
			<Line x={RX2} y={300} at={k.first} out={k.c2 - 6} size={52}>∫ <V><Frac n="1" d="x³" /></V> dx</Line>
			<WorkingRows x={RX2} y={390} w={980} size={52} oldSize={40} gap={8} rows={[
				{left: <V><Frac n="1" d="x³" /></V>, right: <V>x⁻³</V>, at: k.rw, keep: true, out: k.c2 - 6},
				{left: '∫x⁻³ dx', right: <><Frac n="x⁻²" d="−2" /> <Cc>+ C</Cc></>, at: k.raise, out: k.c2 - 6},
				{right: <>−<Frac n="1" d="2x²" /> <Cc>+ C</Cc></>, at: k.that1, answer: true, out: k.c2 - 6},
			]} />
			<HandTag x={1400} y={430} text="rewrite as a power" at={k.rw + 10} out={k.c2 - 6} size={40} color={INK} />
			<DomainChip x={RX2} y={720} at={k.zero1} out={k.c2 - 6}>x ≠ 0: one C for each side</DomainChip>
			{/* case 2 */}
			<Line x={RX2} y={262} at={k.c2} size={34}>∫x⁻³ dx = −1/(2x²) + C   (x ≠ 0)</Line>
			<Line x={RX2} y={330} at={k.c2} out={k.c3 - 6} size={52}>∫ <V><X32 /></V> dx</Line>
			<WorkingRows x={RX2} y={420} w={980} size={52} oldSize={40} gap={8} rows={[
				{right: <><Frac n={<X52 />} d="5/2" /> <Cc>+ C</Cc></>, at: k.c2 + 40, out: k.c3 - 6},
				{right: <><Frac n="2" d="5" /><X52 /> <Cc>+ C</Cc></>, at: k.that2, answer: true, out: k.c3 - 6},
			]} />
			<HandTag x={1420} y={470} text="÷ 5/2 = × 2/5" at={k.that2 - 10} out={k.c3 - 6} size={42} color={INK} />
			<DomainChip x={RX2} y={660} at={k.pos} out={k.c3 - 6}>x ≥ 0</DomainChip>
			{/* case 3 */}
			<Line x={RX2} y={318} at={k.c3} size={34}>∫x<Pow>3/2</Pow> dx = (2/5)x<Pow>5/2</Pow> + C   (x ≥ 0)</Line>
			<Line x={RX2} y={390} at={k.c3} size={52}>∫ <V><MarkSpan kind="underline" at={k.zero2} color={GREY}><Frac n="x³ + 2x" d="x" /></MarkSpan></V> dx</Line>
			<WorkingRows x={RX2} y={500} w={980} size={52} oldSize={40} gap={8} rows={[
				{left: <Frac n="x³ + 2x" d="x" />, right: <><Frac n="x³" d="x" /> + <Frac n="2x" d="x" /> = x² + 2</>, at: k.c3 + 50, keep: true},
				{left: '∫(x² + 2) dx', right: <><Frac n="x³" d="3" /> + 2x <Cc>+ C</Cc></>, at: k.prim, answer: true},
			]} />
			<DomainChip x={RX2} y={730} at={k.zero2}>x ≠ 0 (from the original): one C each side</DomainChip>
			{/* the three to rewrite */}
			<div style={{position: 'absolute', left: RX2, top: 830, width: 980, opacity: 1 - prog(f, k.zero2 - 20, 12), display: 'flex', gap: 22, alignItems: 'center', background: CARD, borderRadius: 18, padding: '10px 24px', boxShadow: CARD_SHADOW, boxSizing: 'border-box', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>
				<span style={{fontSize: 32, fontWeight: 700}}>rewrite:</span>
				{list.map((n, i) => <span key={i} style={{padding: '2px 14px', borderRadius: 14, border: `3px solid ${i === cur ? VIOLET : 'transparent'}`, opacity: i < cur ? 0.55 : 1, whiteSpace: 'pre'}}>{n}</span>)}
			</div>
			<Chip x={RX2} y={850} at={k.zero2 - 14} size={36} color={GREY}>1/√x = x<Pow>−½</Pow> works the same way, x &gt; 0</Chip>
		</>
	);
};

// ---------- 3. a bracket: guess, check, fix ----------
const GUESS = {f: (u: number) => (2 * u + 1) ** 3 / 3, df: (u: number) => 2 * (2 * u + 1) ** 2};
const RX3 = 1080;
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const tl = [{frame: 0, x: -1, yScale: 1}, {frame: k.watch, x: -1}, {frame: k.want - 6, x: 0.5}, {frame: k.halve + 6, yScale: 1}, {frame: k.halve + 50, yScale: 0.5}];
	const twO = vis(f, k.want, k.halve + 4, 12);
	return (
		<>
			<SceneHeading text="A bracket: guess, check, fix" at={4} size={56} />
			<PairedDerivativePanel x={30} y={170} width={1000} heightTop={400} heightBottom={410} windowX={[-1.05, 0.58]} yTop={[-1, 3]} yBottom={[-0.6, 9]}
				family={GUESS} timeline={tl} traceFrom={-1} pointAt={k.watch} tangentAt={k.watch} topLabel="the guess" bottomLabel="its gradient"
				xTicks={[-1, -0.5, 0.5]} yTopTicks={[1, 2, 3]} yBottomTicks={[2, 4, 6, 8]}
				target={{fn: x => (2 * x + 1) ** 2, at: -30, label: 'want'}}
				readout={{x: RX3, y: 540, width: 780, at: k.watch, rows: [
					{label: 'gradient of the guess', value: s => s.slope, digits: 1, role: 'gradient'},
					{label: 'want: (2x + 1)²', value: s => (2 * s.X + 1) ** 2, digits: 1},
				]}}
				overlay={(s, top, bottom) => (
					<FrameSvg>
						{[0, 0.5].map(X => {const a = bottom(X, 0), b = bottom(X, 2 * (2 * X + 1) ** 2), c = bottom(X, (2 * X + 1) ** 2); return <g key={X} opacity={twO}>
							<line x1={a[0] + 18} x2={a[0] + 18} y1={a[1]} y2={b[1]} stroke={VIOLET} strokeWidth={5} />
							<line x1={a[0] - 18} x2={a[0] - 18} y1={a[1]} y2={c[1]} stroke="#4f4840" strokeWidth={5} />
							<text x={a[0] + (X === 0 ? 30 : -30)} y={b[1] - 10} textAnchor={X === 0 ? 'start' : 'end'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: VIOLET}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{X === 0 ? '2 vs 1' : '8 vs 4'}</text>
						</g>;})}
						{(() => {const p = top(0.1, 0.1 >= -1 ? GUESS.f(0.1) * s.yScale : 0); return <text x={p[0] - 40} y={p[1] - 50} textAnchor="end" opacity={prog(f, k.halve + 50, 12)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">halved</text>;})()}
					</FrameSvg>
				)} />
			<HandTag x={560} y={600} text="twice as high" at={k.want} out={k.halve} size={48} color={VIOLET} />
			<HandTag x={560} y={600} text="halve it: lands on it" at={k.halve + 40} size={48} color={VIOLET} />
			<Line x={RX3} y={140} at={-30} size={52}>∫<V><SQ /></V> dx = ?</Line>
			<Line x={RX3} y={240} at={k.guess} size={52}>guess: <Frac n={<>(<InnerSlot>2x + 1</InnerSlot>)³</>} d="3" /></Line>
			<HandTag x={1290} y={330} text="inside" at={k.guess + 20} size={36} color={GREY} />
			<Line x={RX3} y={380} at={k.outside} size={48}><V>d/dx</V>: <Frac n={<>3(2x + 1)² · <Bl g={vis(f, k.two, k.so + 30)}>2</Bl></>} d="3" /></Line>
			<Line x={RX3 + 470} y={380} at={k.so} size={52}>= 2(2x + 1)²</Line>
			<HandTag x={RX3 + 40} y={505} text="× derivative of the inside" at={k.two} out={k.watch} size={38} color={BLUE} />
			<Line x={RX3} y={740} at={k.six} size={52}><Frac n="(2x + 1)³" d="6" />:  <V>d/dx</V> = (2x + 1)²  <Tick size={50} o={prog(f, k.sq + 8, 10)} /></Line>
			<Chip x={RX3} y={880} at={k.rule} size={40} color={BLUE}>reverse chain rule: divide by the <Bl>inside&apos;s rate</Bl></Chip>
		</>
	);
};

// ---------- 4. two answers, one family ----------
const GapTable: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const rows: [string, string, string][] = [['−1', '−1/3', '−1/6'], ['0', '0', '1/6'], ['½', '7/6', '4/3']];
	const cell = (t: string, c = INK, w = 800) => <div style={{fontFamily: FONT_DISPLAY, fontWeight: w, fontSize: 38, color: c, textAlign: 'center'}}>{t}</div>;
	return <div style={{position: 'absolute', left: x, top: y, width: 800, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '8px 20px', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr 1fr', rowGap: 2}}>
		{cell('x', INK, 700)}{cell('expanded', INK, 700)}{cell('bracket', INK, 700)}{cell('gap', AMB, 700)}
		{rows.map(r => <React.Fragment key={r[0]}>{cell(r[0])}{cell(r[1])}{cell(r[2])}{cell('1/6', AMB)}</React.Fragment>)}
	</div>;
};
const RX4 = 1080;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const qo = prog(f, k.graph, 16);
	return (
		<>
			<SceneHeading text="Two answers, one family" at={4} size={56} />
			<StudioPrimitiveFamily x={30} y={140} width={1000} height={830} window={{x: [-1.05, 0.58], y: [-0.6, 1.5]}} F={P4} f={x => (2 * x + 1) ** 2} constants={[]} C={0}
				xTicks={[-1, -0.5, 0.5]} yTicks={[-0.5, 0.5, 1, 1.5]} at={-30}
				gapBars={{upper: 1 / 6, lower: 0, xs: [-1, -0.5, 0, 0.5], at: k.apart}}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, Q4, -1.05, 0.58)} stroke={INK} strokeWidth={6} strokeDasharray="16 12" fill="none" opacity={qo} /></g>
					{[-1, -0.5, 0, 0.5].map(X => <PLabel key={X} p={m.p(X, P4(X) + 1 / 12)} dx={X === 0.5 ? -18 : 16} dy={12} anchor={X === 0.5 ? 'end' : 'start'} text="1/6" color={AMB} size={36} o={prog(f, k.apart + 10, 12)} />)}
					<PLabel p={m.p(-0.62, -0.42)} text="expanded" size={40} />
					<PLabel p={m.p(-0.05, 0.62)} anchor="end" text="bracket (dashed)" size={40} o={qo} />
				</>}
			</StudioPrimitiveFamily>
			<HandTag x={260} y={300} text="constant gap" at={k.apart + 6} size={50} color={AMB} />
			<Chip x={RX4} y={140} at={-30} size={38}>Which one is right?</Chip>
			<Line x={RX4} y={240} at={-30} size={44}>expanding:  <Frac n="4x³" d="3" /> + 2x² + x <Cc>+ C</Cc></Line>
			<Line x={RX4} y={340} at={-30} size={44}>bracket:  <Frac n="(2x + 1)³" d="6" /> <Cc>+ C</Cc></Line>
			<WorkingRows x={RX4} y={460} w={800} size={52} oldSize={40} gap={8} rows={[
				{left: <Frac n="(2x + 1)³" d="6" />, right: <Frac n="8x³ + 12x² + 6x + 1" d="6" />, at: k.expandB},
				{right: <><Frac n="4x³" d="3" /> + 2x² + x <span style={{color: AMB}}>+ <Frac n="1" d="6" /></span></>, at: k.sixth, keep: true},
			]} />
			<HandTag x={RX4 + 120} y={640} text="the expanded answer, plus 1/6" at={k.plus} size={42} color={AMB} />
			<GapTable x={RX4} y={680} at={k.graph} />
			<BoxCard x={RX4} y={890} at={k.both} size={38} border={GREEN} bw={4}>differ by a constant: both correct</BoxCard>
			<HandTag x={90} y={210} text="i01: any two primitives differ by a constant" at={k.diff} size={40} color={INK} />
		</>
	);
};
