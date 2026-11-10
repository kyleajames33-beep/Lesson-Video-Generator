// Scenes 5 to 9: the four outsides, three g01 worked examples, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, INK, INK_SOFT} from '../../kit';
import {
	Card, CardTitle, EquationStrip, FrameSvg, FunctionSimulator, GivensCard, HandTag, MarkSpan, MemoryAidCard, MistakeCard, SceneHeading, TaskStrip, WorkingRows, piTicks, vis,
	MATH_ANSWER, CARD, CARD_SHADOW,
} from '../../math/studio';
import {cue, PI} from './common';
import {
	AMB, Am, BLUE, Bl, Chip, COSSQ, CrankIcon, CrankRig, CurveLabel, DISPLAY, ESIN, Frac, HandNote, LNCOS, Legend, RecallChip, SIN, Slot, Sq, SqP, Sup, TEAL, Te, VIOLET, gmap,
} from './parts';

/** Small coded plot of an outside function (rule-board thumbnails, memory card). */
const MiniPlot: React.FC<{w?: number; h?: number; fn: (x: number) => number; x: [number, number]; y: [number, number]; label: React.ReactNode; color?: string}> = ({w = 230, h = 120, fn, x, y, label, color = TEAL}) => {
	const X = (v: number) => 10 + ((v - x[0]) / (x[1] - x[0])) * (w - 20), Y = (v: number) => 8 + ((y[1] - v) / (y[1] - y[0])) * (h - 16);
	let d = '', pen = false;
	for (let i = 0; i <= 120; i++) {
		const xv = x[0] + ((x[1] - x[0]) * i) / 120, yv = fn(xv);
		if (!Number.isFinite(yv) || yv < y[0] - 1 || yv > y[1] + 1) {pen = false; continue;}
		d += `${pen ? 'L' : 'M'}${X(xv).toFixed(1)},${Y(Math.max(y[0], Math.min(y[1], yv))).toFixed(1)} `;
		pen = true;
	}
	return (
		<div style={{position: 'relative', width: w, height: h, background: '#fbf8f1', borderRadius: 12, border: '2px solid rgba(60,45,20,0.12)'}}>
			<svg width={w} height={h} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M8,${Y(0)} H${w - 8} M${X(0)},6 V${h - 6}`} stroke={INK_SOFT} strokeWidth={2.5} fill="none" />
				<path d={d} stroke={color} strokeWidth={5} fill="none" strokeLinecap="round" />
			</svg>
			<div style={{position: 'absolute', right: 8, top: 4, ...DISPLAY(30, color, 800)}}>{label}</div>
		</div>
	);
};

// ---------- 5. the four outsides ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const r1 = cue(id, 'derivative', 1), r2 = cue(id, 'itself'), r3 = cue(id, 'derivative', 4), r4 = cue(id, 'derivative', 5), unchanged = cue(id, 'unchanged'), instance = cue(id, 'For instance');
	const glow = vis(f, unchanged, unchanged + 120, 10);
	const SQ = (k = 1) => <Sq glow={glow} k={k} />;
	const rows: {y: number; at: number; thumb: React.ReactNode; left: React.ReactNode; right: React.ReactNode; tag: React.ReactNode}[] = [
		{y: 250, at: r1, thumb: <MiniPlot w={260} h={130} fn={Math.exp} x={[-2.5, 1.6]} y={[-0.6, 4]} label={<>e<Sup>u</Sup></>} />, left: <>d/dx e<Sup>{SQ(1.5)}</Sup> =</>, right: <><Te>e<Sup>{SQ(1.5)}</Sup></Te> × <SqP /></>, tag: <>d01: (e<Sup>u</Sup>)′ = e<Sup>u</Sup></>},
		{y: 410, at: r2, thumb: <MiniPlot w={260} h={130} fn={v => (v > 0 ? Math.log(v) : NaN)} x={[-0.6, 4]} y={[-2.4, 1.8]} label="ln u" />, left: <>d/dx ln({SQ()}) =</>, right: <><Frac n={<SqP />} d={<Te>{SQ()}</Te>} />, <Am>{SQ()} &gt; 0</Am></>, tag: <>d03: (ln u)′ = 1/u, u &gt; 0</>},
		{y: 570, at: r3, thumb: <MiniPlot w={260} h={130} fn={Math.sin} x={[-1, 7]} y={[-1.4, 1.4]} label="sin u" />, left: <>d/dx sin({SQ()}) =</>, right: <><Te>cos({SQ()})</Te> × <SqP /></>, tag: <>d05, radians</>},
		{y: 730, at: r4, thumb: <MiniPlot w={260} h={130} fn={Math.cos} x={[-1, 7]} y={[-1.4, 1.4]} label="cos u" />, left: <>d/dx cos({SQ()}) =</>, right: <><Te>−sin({SQ()})</Te> × <SqP /></>, tag: <>d05, radians</>},
	];
	return (
		<>
			<SceneHeading text="Plug in the outsides from this unit" at={-24} />
			<Legend />
			<RecallChip x={96} y={168} at={-30} size={30}>dy/dx = dy/du × du/dx</RecallChip>
			<RecallChip x={520} y={168} at={-30} size={30}><span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}><Sq /> = the inside part</span></RecallChip>
			{rows.map((r, i) => (
				<React.Fragment key={i}>
					<div style={{position: 'absolute', left: 96, top: r.y}}>{r.thumb}</div>
					<div style={{position: 'absolute', left: 384, top: r.y + 28, ...DISPLAY(56), display: 'flex', alignItems: 'center', gap: 14}}>
						<span style={{display: 'inline-flex', alignItems: 'center', gap: 4}}>{r.left}</span>
						<Enter at={r.at} style={{display: 'inline-flex', alignItems: 'center', gap: 4}}>{r.right}</Enter>
						<Enter at={r.at + 10} style={{marginLeft: 10}}><span style={{display: 'inline-block', background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '4px 14px', ...DISPLAY(30, '#4f4840', 600)}}>{r.tag}</span></Enter>
					</div>
				</React.Fragment>
			))}
			<HandTag x={1000} y={222} text="same inside each time" at={unchanged + 4} size={44} color={INK_SOFT} />
			{/* the inside slope as a picture: the crank, turning */}
			<FrameSvg><circle cx={1610} cy={470} r={205} fill={CARD} stroke={INK} strokeWidth={4} /></FrameSvg>
			<CrankRig cx={1610} cy={470} L={135} theta={(f / 30) * 2.4} at={-30} />
			<HandNote x={1430} y={712} lines={['□′: how fast', 'the inside turns']} at={-10} size={44} color={BLUE} />
			<Enter at={instance} style={{position: 'absolute', left: 384, top: 880}}>
				<span style={DISPLAY(48)}>e.g. d/dx e<Sup>x²</Sup> = <Bl>2x</Bl> <Te>e<Sup>x²</Sup></Te></span>
			</Enter>
		</>
	);
};

// ---------- shared g01 board pieces ----------
const AnswerBox: React.FC<{at: number; children: React.ReactNode; size?: number; x: number; y: number; glow?: number}> = ({at, children, size = 52, x, y, glow = 0}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '0 20px 4px', boxShadow: glow > 0 ? `0 0 0 ${10 * glow}px rgba(40,115,71,0.18), ${CARD_SHADOW}` : CARD_SHADOW, ...DISPLAY(size)}}>{children}</div>
	</Enter>
);
const Row: React.FC<{at: number; x: number; y: number; label: string; color?: string; children: React.ReactNode; size?: number}> = ({at, x, y, label, color = INK, children, size = 52}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color}}>{label}</div>
		<div style={DISPLAY(size)}>{children}</div>
	</Enter>
);

// ---------- 6. worked example 1: e^(sin x) ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const outside = cue(id, 'The outside'), inside = cue(id, 'the inside is'), cosx = cue(id, 'which is cos x'), soDy = cue(id, 'So d y'), zero = cue(id, 'gradient is zero'), too = cue(id, 'too'), swap = cue(id, 'Swap'), soDer = cue(id, 'so the derivative');
	const G = {x: 1000, y: 140, w: 830, h: 470}, S = {x: 1000, y: 600, w: 830, h: 240};
	const WG = {x: [0, 2 * PI] as [number, number], y: [0, 3] as [number, number]}, WS = {x: [0, 2 * PI] as [number, number], y: [-1.3, 1.3] as [number, number]};
	const MG = gmap(G.x, G.y, G.w, G.h, WG), MS = gmap(S.x, S.y, S.w, S.h, WS);
	const flat = vis(f, zero, 99999);
	const both = vis(f, too, 99999);
	const [px, py] = MG.pt(PI / 2, Math.E), [qx, qy] = MS.pt(PI / 2, 1);
	return (
		<>
			<TaskStrip text="Differentiate" at={2} />
			<Legend />
			<EquationStrip at={-30}>y = e<Sup><Slot>sin x</Slot></Sup></EquationStrip>
			<GivensCard x={96} y={300} w={640} at={-30} size={48} lines={[
				{content: <>outside: e<Sup><Sq k={1.5} /></Sup></>, role: 'b', at: outside},
				{content: <>inside: <Slot>sin x</Slot></>, at: inside + 20},
				{content: <>inside slope: cos x</>, role: 'a', at: cosx},
			]} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WG} family={ESIN} timeline={[{frame: 0, x: PI / 2}]} color={INK}
				xTicks={piTicks(0, 2, 2)} yTicks={[1, 2, 3]} xLabel="" yLabel="y" point={{at: zero - 10}} tangent={{at: zero, halfLength: 160}} />
			<FunctionSimulator x={S.x} y={S.y} width={S.w} height={S.h} window={WS} family={SIN} timeline={[{frame: 0, x: PI / 2}]} color={INK_SOFT}
				xTicks={piTicks(0, 2, 2)} yTicks={[-1, 1]} xLabel="x" yLabel="" point={{at: zero + 20, color: BLUE}} tangent={{at: zero + 20, halfLength: 120, color: BLUE}} />
			<CurveLabel x={MG.pt(3.3, 2.3)[0]} y={MG.pt(3.3, 2.3)[1]} size={44}>y = e<Sup>sin x</Sup></CurveLabel>
			<CurveLabel x={MS.pt(3.9, 1.25)[0]} y={MS.pt(3.9, 1.25)[1]} size={36} color={INK_SOFT}>the inside: sin x</CurveLabel>
			<FrameSvg>
				<line x1={px} x2={qx} y1={py + 20} y2={qy - 14} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="4 9" strokeLinecap="round" opacity={flat} />
				{both > 0 ? <><circle cx={px} cy={py} r={34} fill="none" stroke={VIOLET} strokeWidth={4} opacity={both} /><circle cx={qx} cy={qy} r={30} fill="none" stroke={BLUE} strokeWidth={4} opacity={both} /></> : null}
			</FrameSvg>
			<Chip x={px + 50} y={py + 30} at={zero + 4} size={40} color={VIOLET}><span style={{color: VIOLET}}>gradient 0.00</span></Chip>
			<RecallChip x={px + 50} y={py + 112} at={zero + 14} size={30}>height e ≈ 2.718</RecallChip>
			<HandNote x={MG.pt(3.4, 0)[0]} y={MG.pt(0, 1.55)[1]} lines={['inside flat → whole curve', 'flat (cos(π/2) = 0)']} at={too + 4} size={36} color={VIOLET} />
			<Card x={96} y={640} w={860} at={-30} out={cosx + 14} pad="14px 26px 16px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Name the outside and the inside.</>, <>2. Copy the outside, inside unchanged.</>, <>3. Multiply by the inside slope.</>].map((t, i) => <div key={i} style={{...DISPLAY(38, INK, 700), marginTop: 4}}>{t}</div>)}
			</Card>
			<AnswerBox at={cosx + 20} x={96} y={640}>dy/dx = <Te>e<Sup>sin x</Sup></Te> × <Bl>cos x</Bl></AnswerBox>
			<HandTag x={760} y={620} text="copied unchanged" at={cosx + 40} out={swap} size={36} color={INK_SOFT} />
			<MistakeCard x={96} y={760} w={860} at={soDy} out={swap - 10} size={44} wrong={<>dy/dx = e<Sup>cos x</Sup></>} caption="the inside stays; its slope multiplies" />
			<Enter at={swap} style={{position: 'absolute', left: 96, top: 760}}>
				<div style={DISPLAY(44)}>y = sin(<Slot>e<Sup>x</Sup></Slot>): outside sin, inside e<Sup>x</Sup></div>
			</Enter>
			<HandTag x={760} y={740} text="order matters" at={swap + 10} size={38} color={INK} />
			<AnswerBox at={soDer} x={96} y={836} size={48}>dy/dx = <Te>cos(e<Sup>x</Sup>)</Te> × <Bl>e<Sup>x</Sup></Bl></AnswerBox>
		</>
	);
};

// ---------- 7. worked example 2: ln(cos x) ----------
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const positive = cue(id, 'positive', 2), two1 = cue(id, 'pi over two', 2), outside = cue(id, 'The outside'), overCos = cue(id, 'over cos x'), tan = cue(id, 'minus tan x'), butOnly = cue(id, 'but only'), one = cue(id, 'minus one'), agrees = cue(id, 'agrees');
	const T = {x: 1000, y: 135, w: 830, h: 260}, G = {x: 1000, y: 390, w: 830, h: 540};
	const WT = {x: [-PI, 2 * PI] as [number, number], y: [-1.3, 1.3] as [number, number]}, WG = {x: [-2, 2] as [number, number], y: [-3, 1] as [number, number]};
	const MG = gmap(G.x, G.y, G.w, G.h, WG);
	const half = PI / 2;
	return (
		<>
			<TaskStrip text="Differentiate, and state where it holds" at={2} />
			<Legend items={[[BLUE, 'inside slope'], [TEAL, 'outside slope'], [AMB, 'domain'], [VIOLET, 'gradient']]} />
			<EquationStrip at={-30}>y = ln(<Slot>cos x</Slot>)</EquationStrip>
			<GivensCard x={96} y={300} w={760} at={-30} size={44} lines={[
				{content: <><Te>outside: ln(<Sq />)</Te>, <Am>needs <Sq /> &gt; 0</Am></>, at: -30},
				{content: f < positive + 4 ? <Am>domain: ?</Am> : <Am>domain: cos x &gt; 0</Am>, at: -30, glow: [positive, positive + 60]},
				{content: <>inside: <Slot>cos x</Slot></>, at: outside},
				{content: <>inside slope: −sin x</>, role: 'a', at: overCos - 20},
			]} />
			<FunctionSimulator x={T.x} y={T.y} width={T.w} height={T.h} window={WT} family={{f: u => Math.cos(u), df: u => -Math.sin(u)}} timeline={[{frame: 0, x: 0}]} color={INK}
				xTicks={piTicks(-1, 2, 2).filter((_, i) => i % 2 === 1)} yTicks={[-1, 1]} xLabel="" yLabel="y = cos x"
				regions={[{x: [-half, half], color: '#f1c97a', opacity: 0.55, at: positive}, {x: [3 * half, 2 * PI], color: '#f1c97a', opacity: 0.55, at: positive}]} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WG} family={LNCOS} timeline={[{frame: 0, x: PI / 4}]} color={INK}
				xTicks={[{value: -half, label: '−π/2'}, {value: -PI / 4, label: '−π/4'}, {value: PI / 4, label: 'π/4'}, {value: half, label: 'π/2'}]} yTicks={[-3, -2, -1, 1]} xLabel="x" yLabel="y"
				draw={{at: -30, dur: 2}}
				point={{at: one - 10}} tangent={{at: one, halfLength: 150}}
				overlay={() => (
					<FrameSvg>
						{[-half, half].map(X => {const [ax, ay] = MG.pt(X, 1), [, by] = MG.pt(X, -3); return <line key={X} x1={ax} x2={ax} y1={ay} y2={by} stroke={AMB} strokeWidth={4} strokeDasharray="12 10" />;})}
					</FrameSvg>
				)} />
			<CurveLabel x={MG.pt(-1.9, -0.3)[0]} y={MG.pt(0, -0.3)[1]} size={40}>y = ln(cos x)</CurveLabel>
			<Chip x={MG.pt(-1.45, 0)[0]} y={MG.pt(0, -2.15)[1]} at={two1} size={30} color={AMB}><Am>e.g. −π/2 &lt; x &lt; π/2 (repeats every 2π)</Am></Chip>
			<HandTag x={T.x + 440} y={T.y + 230} text="cos x > 0" at={positive + 6} size={38} color={AMB} />
			<WorkingRows x={96} y={630} w={880} size={52} oldSize={40} gap={12} rows={[
				{left: 'dy/dx', right: <Frac n={<Bl>−sin x</Bl>} d={<Te>cos x</Te>} />, at: overCos},
				{right: <>−tan x, for <Am>cos x &gt; 0</Am></>, at: tan, answer: true},
			]} />
			<RecallChip x={600} y={655} at={tan + 10} size={30}>Year 11: tan x = sin x / cos x</RecallChip>
			<MistakeCard x={96} y={820} w={860} at={butOnly} size={42} wrong={<>valid wherever cos x ≠ 0</>} caption="a log needs cos x > 0" />
			<Chip x={MG.pt(0.85, 0)[0]} y={MG.pt(0, -0.05)[1]} at={one} size={38} color={VIOLET} glow={vis(f, agrees, 99999)}><span style={{color: VIOLET}}>at π/4: gradient −1.00</span></Chip>
			<HandTag x={MG.pt(0.9, 0)[0]} y={MG.pt(0, -1.5)[1]} text="graph agrees" at={agrees} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 8. worked example 3: cos(x² + 1) ----------
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const outside = cue(id, 'The outside is'), one1 = cue(id, 'plus one', 2), xIn = cue(id, 'because the one'), one2 = cue(id, 'plus one', 3), atX = cue(id, 'At x equals one'), two = cue(id, 'point eight two'), keep = cue(id, 'Two things');
	const G = {x: 1000, y: 140, w: 830, h: 580};
	const W = {x: [-2, 2] as [number, number], y: [-1.5, 1.5] as [number, number]};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const g2 = vis(f, keep, 99999);
	return (
		<>
			<TaskStrip text="Differentiate, then find the gradient at x = 1" at={2} />
			<Legend />
			<EquationStrip at={-30}>y = cos(<Slot>x² + 1</Slot>)</EquationStrip>
			<GivensCard x={96} y={300} w={640} at={-30} size={46} lines={[
				{content: <>outside: cos(<Sq />)</>, role: 'b', at: outside},
				{content: <>inside: <Slot>x² + 1</Slot></>, at: outside + 30},
				{content: <>x = 1</>, at: -30, glow: [atX, atX + 70]},
			]} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={COSSQ} timeline={[{frame: 0, x: 1}]} color={INK}
				xTicks={[-2, -1, 1, 2]} yTicks={[-1, 1]} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: two - 20, halfLength: 160}} />
			<CurveLabel x={M.pt(-1.95, 1.3)[0]} y={M.pt(0, 1.3)[1]} size={42}>y = cos(x² + 1)</CurveLabel>
			<Chip x={M.pt(1.05, 0)[0] + 20} y={M.pt(0, 0.6)[1]} at={two} size={38} color={VIOLET}><span style={{color: VIOLET}}>gradient −1.82</span></Chip>
			<Row at={one1} x={96} y={560} label="outside slope at the inside" color={TEAL}><Te><MarkSpan kind="circle" at={keep + 6} role="b" pad={0.3}><span style={{opacity: 1}}>−</span></MarkSpan>sin(<Slot>x² + 1</Slot>)</Te></Row>
			<RecallChip x={610} y={575} at={one1 + 20} size={30}>d05: (cos u)′ = −sin u</RecallChip>
			<Row at={xIn} x={96} y={660} label="inside slope" color={BLUE}><Bl><MarkSpan kind="circle" at={keep + 30} role="a">2x</MarkSpan></Bl></Row>
			<RecallChip x={330} y={705} at={xIn + 20} size={30}>the 1 is a constant</RecallChip>
			<AnswerBox at={one2} x={84} y={770} size={50} glow={g2}>dy/dx = <Te>−</Te><Bl>2x</Bl> <Te>sin(x² + 1)</Te></AnswerBox>
			<AnswerBox at={atX + 10} x={84} y={862} size={44}>at x = 1: −2 sin 2 ≈ −1.819</AnswerBox>
			<HandTag x={760} y={590} text="from the outside" at={keep + 8} size={36} role="b" />
			<HandTag x={300} y={690} text="from the inside" at={keep + 30} size={36} role="a" />
			<MistakeCard x={1000} y={745} w={830} at={keep + 20} size={40} wrong={<>dy/dx = 2x sin(x² + 1)</>} caption="keep the minus from the outside" />
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const main = cue(id, 'Outside slope'), times = cue(id, 'times'), atIn = cue(id, 'The words'), squared = cue(id, 'squared', 3), ln = cue(id, 'For the natural log');
	const lnGlow = vis(f, ln, 99999);
	return (
		<>
			<SceneHeading text="Memory aid" at={-24} />
			<Legend />
			<MemoryAidCard x={250} y={160} w={1420} at={0} iconSize={110}
				keys={[
					{icon: <CrankIcon size={110} theta={0.9} />, text: <>inside slope: how fast the inside turns</>, role: 'a', at: times},
					{icon: <MiniPlot w={110} h={90} fn={v => Math.sin(v * v)} x={[0, 2.6]} y={[-1.3, 1.3]} label="" color={INK} />, text: <>outside slope at the inside: cos(x²), not <MarkSpan kind="strike" at={atIn + 20} color="#b8322a" width={5}>cos x</MarkSpan></>, role: 'b', at: atIn},
					{icon: <div style={{position: 'absolute', left: 4, top: 36, width: 100, height: 32, borderRadius: 8, background: '#f1c97a', border: `3px solid ${AMB}`}} />, text: <span style={{background: lnGlow > 0 ? `rgba(248,232,200,${lnGlow})` : undefined, borderRadius: 10}}>ln: inside &gt; 0; outside slope 1/inside</span>, role: 'k', at: ln},
				]}
				main={{content: <>Outside slope at the inside, times the inside slope.</>, at: main}}
				formula={{content: <>d/dx f(g(x)) = <Te>f′(g(x))</Te> × <Bl>g′(x)</Bl></>, at: main + 60}} />
			<Enter at={squared} style={{position: 'absolute', left: 250, top: 880}}>
				<span style={DISPLAY(48)}>so d/dx sin(x²) = <Bl>2x</Bl> <Te>cos(x²)</Te></span>
			</Enter>
		</>
	);
};

