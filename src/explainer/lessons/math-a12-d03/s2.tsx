// Scenes 5 to 8: the tangent through the reflection, the whole reason (with the app's return), the proof, the domain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	AnswerFrame, Card, CardTitle, LiveReadoutBoard, FrameSvg, FunctionSimulator, HandTag, InnerSlot, MarkSpan, MistakeCard, Pow, SceneHeading, TaskStrip, WorkingRows, fmtNum, kf, smooth, vis,
	MATH_ANSWER, MATH_BLUE, MATH_GRADIENT,
} from '../../math/studio';
import type {FnGeometry} from '../../math/studio';
import {cue} from './common';
import {AppRig, Chip, CurveLabel, DISPLAY, EXP, Frac, LN, LnRule, Legend, NAVY, RecallChip, SQ, SQ_TICKS} from './parts';
import {GSQ} from './s1';

const RX = 990;
const EXP_CURVE = {fn: (X: number) => Math.exp(X), at: -30, color: NAVY, width: 6, domain: [-3, Math.log(5.2)] as [number, number]};
const ONE_OVER_X = (at: number, out?: number, pale = false) => ({fn: (X: number) => (X > 0.18 ? 1 / X : NaN), at, out, color: pale ? '#d6cbe8' : MATH_GRADIENT, width: 5, domain: [0.18, 5] as [number, number]});

/** A tangent segment through (X, Y) with maths slope m, drawn in frame space. */
const Tan: React.FC<{g: FnGeometry; X: number; Y: number; m: number; half?: number; color?: string; o?: number}> = ({g, X, Y, m, half = 130, color = MATH_GRADIENT, o = 1}) => {
	const [px, py] = g.toFrame(X, Y), [qx, qy] = g.toFrame(X + 1, Y + m);
	const vx = qx - px, vy = qy - py, l = Math.hypot(vx, vy) || 1;
	return <line x1={px - (vx / l) * half} y1={py - (vy / l) * half} x2={px + (vx / l) * half} y2={py + (vy / l) * half} stroke={color} strokeWidth={6} strokeLinecap="round" opacity={o} />;
};
const Chord: React.FC<{g: FnGeometry; a: [number, number]; b: [number, number]; at: number; o?: number}> = ({g, a, b, at, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0) return null;
	const A = g.toFrame(...a), B = g.toFrame(...b);
	return <line x1={A[0]} y1={A[1]} x2={A[0] + (B[0] - A[0]) * p} y2={A[1] + (B[1] - A[1]) * p} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="3 9" strokeLinecap="round" opacity={o} />;
};

// ---------- 5. carry a tangent through the reflection ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const draw = cue(id, 'Draw'), reflect = cue(id, 'Reflect'), one = cue(id, 'one', 2), two2 = cue(id, 'two', 4), half = cue(id, 'half'), aRefl = cue(id, 'A reflection'), old = cue(id, 'old slope');
	const done = (s: {reflect: number}) => s.reflect > 0.99;
	return (
		<>
			<SceneHeading text="Carry a tangent through the reflection" at={2} />
			<Legend />
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={LN} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x" yLabel="y" asymptotes={[0]} mirror={{at: -30}} curves={[EXP_CURVE]}
				overlay={g => <FrameSvg><Chord g={g} a={[Math.log(2), 2]} b={[2, Math.log(2)]} at={-30} o={0.6} /></FrameSvg>} />
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={EXP} bare color="rgba(0,0,0,0)"
				timeline={[{frame: 0, x: Math.log(2), reflect: 0, p: {c: Math.E}}, {frame: reflect + 4, reflect: 0}, {frame: reflect + 60, reflect: 1}]}
				point={{at: -30, color: NAVY}} tangent={{at: -30, halfLength: 150}}
				triangle={{run: 1, at: draw, labels: {first: (_l, s) => (done(s) ? 'rise 1' : 'across 1'), second: (_l, s) => (done(s) ? 'run 2' : 'up 2')}}}
				readout={{x: RX, y: 270, width: 560, at: -30, inline: true, rows: [
					{label: 'x', role: 'height', value: s => s.px},
					{label: 'height', role: 'height', value: s => s.py},
					{label: 'gradient', role: 'gradient', value: s => s.pslope, digits: 3, glow: [half, half + 80]},
				]}} />
			<CurveLabel x={330} y={200} size={44} color={NAVY}>y = e<Pow>x</Pow></CurveLabel>
			<CurveLabel x={720} y={330} size={44}>y = ln x</CurveLabel>
			<RecallChip x={RX} y={170} at={-30} size={32}>Year 11: on e<Pow>x</Pow>, gradient = height</RecallChip>
			<HandTag x={RX + 6} y={650} text="across → rise" at={one} size={44} color={MATH_GRADIENT} />
			<HandTag x={RX + 300} y={650} text="up → run" at={two2} size={44} color={MATH_GRADIENT} />
			<Chip x={RX} y={690} at={half} size={44}>rise 1 ÷ run 2 = ½</Chip>
			<HandTag x={RX + 6} y={600} text="1 week up, 2 thousand users across" at={draw + 20} size={34} color={INK_SOFT} />
			<HandTag x={RX + 440} y={726} text="½ week per thousand" at={half + 16} size={36} color={INK_SOFT} />
			<Chip x={RX} y={780} at={aRefl} size={34}>reflect in y = x: run ↔ rise, slope → 1 ÷ slope</Chip>
			<Chip x={RX} y={860} at={aRefl + 30} size={44} color={MATH_GRADIENT} glow={[old, 99999]}>2 → ½</Chip>
		</>
	);
};

// ---------- 6. the whole reason ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const onE = cue(id, 'On e'), refl = cue(id, 'The reflection'), oneX = cue(id, 'one over x'), four = cue(id, 'four'), quarter = cue(id, 'quarter'), halfH = cue(id, 'At height a half'), halfX = cue(id, 'half', 3), one = cue(id, 'one', 3), app = cue(id, 'The app'), next = cue(id, 'so the next'), week = cue(id, 'week', 2);
	const shrink = smooth(prog(f, app, 30));
	const gw = 826 - 180 * shrink;
	const G = {x: 96, y: 170 + 80 * shrink, w: gw, h: gw - 6};
	// App: 4,000 users, then the stopwatch runs until the count reaches 5,000 (exactly ln(5/4) weeks).
	const tq = kf(f, [[next + 4, 0], [week + 10, Math.log(1.25)]]);
	const pairs = [
		{h: 2, at: -30, lAt: -30},
		{h: 4, at: four, lAt: quarter},
		{h: 0.5, at: halfH, lAt: halfX},
	];
	const cur = f >= halfH ? 2 : f >= four ? 1 : 0;
	return (
		<>
			<SceneHeading text="The whole reason" at={2} />
			<Legend />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={SQ} family={LN} timeline={[{frame: 0, x: 4, p: {c: Math.E}}]}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x" yLabel="y" asymptotes={[0]} mirror={{at: -30}}
				curves={[EXP_CURVE, ONE_OVER_X(one, undefined, true)]}
				markers={pairs.flatMap(p => [{X: Math.log(p.h), Y: p.h, at: p.at, color: NAVY}, {X: p.h, Y: Math.log(p.h), at: p.lAt, color: INK}])}
				point={{at: app + 10, r: 18}}
				overlay={g => (
					<FrameSvg>
						{pairs.map((p, i) => {
							const dim = i < cur ? 0.35 : 1;
							return <g key={i} opacity={dim}>
								<Chord g={g} a={[Math.log(p.h), p.h]} b={[p.h, Math.log(p.h)]} at={p.lAt === -30 ? -30 : p.at + 10} />
								{f >= p.at ? <Tan g={g} X={Math.log(p.h)} Y={p.h} m={p.h} half={90} color={NAVY} o={prog(f, p.at, 12)} /> : null}
								{f >= p.lAt ? <Tan g={g} X={p.h} Y={Math.log(p.h)} m={1 / p.h} half={110} o={prog(f, p.lAt, 12)} /> : null}
							</g>;
						})}
					</FrameSvg>
				)} />
			<CurveLabel x={300} y={G.y + 30} size={42} color={NAVY} out={app}>y = e<Pow>x</Pow></CurveLabel>
			<Chip x={RX} y={162} at={onE} size={38} color={NAVY}>e<Pow>x</Pow>: slope = height</Chip>
			<Chip x={RX} y={232} at={refl} size={34}>reflect in y = x: height → x, slope → 1 ÷ slope</Chip>
			<Enter at={oneX} style={{position: 'absolute', left: RX, top: 302}}>
				<span style={DISPLAY(42)}><AnswerFrame at={oneX} tick={false}>ln x: slope = <Frac n="1" d="x" /> (x &gt; 0)</AnswerFrame></span>
			</Enter>
			<Card x={RX} y={420} w={830} at={-30} out={app} pad="12px 26px 14px">
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 20, ...DISPLAY(28, INK_SOFT, 800), letterSpacing: 2}}><span style={{color: NAVY}}>ON eˣ: HEIGHT, SLOPE</span><span>ON ln x: x, SLOPE</span></div>
				{pairs.map((p, i) => (f < p.at ? null :
					<div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 20, marginTop: 8, opacity: prog(f, p.at, 12)}}>
						<span style={DISPLAY(40, NAVY)}>{fmtNum(p.h, 1)}, {fmtNum(p.h, 1)}</span>
						<span style={{...DISPLAY(40), opacity: prog(f, p.lAt, 12)}}>x = {fmtNum(p.h, 1)}, <span style={{color: MATH_GRADIENT}}>{fmtNum(1 / p.h, 2)}</span></span>
					</div>
				))}
			</Card>
			<Chip x={RX} y={720} at={one} out={app} size={44} color={MATH_BLUE} glow={[one, 99999]}>gradient × x = 1, every time</Chip>
			{/* the app returns */}
			<AppRig phone={{x: 1000, y: 430, h: 420}} watch={{x: 1250, y: 470, h: 300}} at={app} users={4 * Math.exp(tq)} weeks={tq} watchLabel={f >= next ? `${fmtNum(tq)} wk` : undefined}
				rows={[{label: 'users', value: Math.round(4000 * Math.exp(tq)).toLocaleString('en-AU')}, {label: 'arriving per week', value: Math.round(4000 * Math.exp(tq)).toLocaleString('en-AU'), color: '#d6c6ff'}]} />
			<Enter at={next} style={{position: 'absolute', left: 1000, top: 866}}>
				<div style={DISPLAY(40)}>next thousand: about ¼ week</div>
				<div style={{...DISPLAY(32, INK_SOFT, 600), marginTop: 4}}>1 ÷ 4 = <span style={{border: `3px solid ${MATH_BLUE}`, borderRadius: 10, padding: '0 8px', color: MATH_BLUE}}>¼</span> (exactly 0.22 weeks)</div>
			</Enter>
			<HandTag x={1486} y={560} text="more users," at={app + 60} size={36} color={MATH_GRADIENT} />
			<HandTag x={1486} y={604} text="less time per thousand" at={app + 70} size={36} color={MATH_GRADIENT} />
		</>
	);
};

// ---------- 7. the chain rule proof ----------
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const x1 = cue(id, 'to get x'), diff = cue(id, 'Differentiate'), one = cue(id, 'one.'), copy = cue(id, 'copy'), after = cue(id, 'after'), justX = cue(id, 'just'), pattern = cue(id, 'the pattern'), divide = cue(id, 'Divide'), x5 = cue(id, 'one over x'), not = cue(id, 'Not');
	const slot = <InnerSlot>ln x</InnerSlot>;
	const G = <span style={{border: `0.07em solid ${MATH_GRADIENT}`, borderRadius: '0.2em', padding: '0 0.12em', color: MATH_GRADIENT}}>d/dx(ln x)</span>;
	return (
		<>
			<TaskStrip text="Prove: d/dx(ln x) = 1/x, for x > 0" at={-24} size={56} />
			<Legend />
			<Card x={96} y={196} w={560} at={-30} pad="14px 26px 16px">
				<CardTitle>Year 11</CardTitle>
				<div style={DISPLAY(40)}>e<Pow>ln x</Pow> = x, for x &gt; 0</div>
				<div style={{...DISPLAY(32, INK, 700), marginTop: 10}}>chain rule:</div>
				<div style={DISPLAY(40)}>dy/dx = dy/du × du/dx</div>
				<div style={{marginTop: 12, opacity: prog(f, copy, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, lineHeight: 1.1, color: INK}}>copy e to that power,<br />× the inside's derivative</div>
			</Card>
			<HandTag x={110} y={576} text="the app: time to reach x thousand users" at={-30} size={34} color={INK} />
			<HandTag x={110} y={620} text="= ln x weeks" at={-30} size={34} color={INK} />
			<AppRig phone={{x: 120, y: 640, h: 330}} watch={{x: 350, y: 690, h: 250}} users={1} weeks={Math.log(4)} rows={[{value: 'ln x'}, {value: 'weeks'}]} />
			<FunctionSimulator x={1180} y={540} width={640} height={340} window={{x: [-1, 4], y: [-1.3, 1.6]}} family={LN} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]}
				xTicks={[1, 2, 3]} yTicks={[-1, 1]} xLabel="x" yLabel="y" asymptotes={[0]} mirror={{at: -30}}
				curves={[{fn: X => Math.exp(X), at: -30, color: NAVY, width: 5, domain: [-1, Math.log(1.42)]}]}
				point={{at: -30}} tangent={{at: not, halfLength: 120}}
				overlay={g => <HandTag x={g.pt[0] + 24} y={g.pt[1] + 54} text="slope 1 at x = 1" at={not + 10} size={36} color={MATH_GRADIENT} />} />
			<CurveLabel x={1660} y={600} size={40}>y = ln x</CurveLabel>
			<CurveLabel x={1290} y={580} size={36} color={NAVY}>y = e<Pow>x</Pow></CurveLabel>
			<Enter at={-30} out={x1 - 6} style={{position: 'absolute', left: 720, top: 230}}>
				<div style={{...DISPLAY(32, INK_SOFT, 700), marginBottom: 12}}>What we found on the graph:</div>
				<div style={DISPLAY(56)}>gradient × x = 1</div>
				<div style={{...DISPLAY(56), marginTop: 18}}>slope of ln x = <Frac n="1" d="x" /></div>
				<div style={{...DISPLAY(40, INK_SOFT, 700), marginTop: 30}}>Now prove it with the chain rule.</div>
			</Enter>
			<WorkingRows x={700} y={200} w={1120} size={58} oldSize={38} gap={12} rows={[
				{left: <>e<Pow>{slot}</Pow></>, right: <>x   <span style={{fontSize: '0.6em', color: INK_SOFT}}>(x &gt; 0)</span></>, at: x1},
				{left: <>d/dx[e<Pow>{slot}</Pow>]</>, right: <>d/dx[x]<span style={{opacity: prog(f, one, 12)}}> = 1</span></>, at: diff},
				{left: <>e<Pow>{slot}</Pow> × <MarkSpan kind="box" at={after + 8} role="gradient">{G}</MarkSpan></>, right: '1', at: after},
				{left: <>x × {G}</>, right: '1', at: justX},
				{left: G, right: <Frac n="1" d="x" />, at: x5, answer: true},
			]} />
			<HandTag x={1460} y={420} text="? the gradient we want" at={after + 14} out={x5} size={36} color={MATH_GRADIENT} />
			<LiveReadoutBoard x={700} y={560} width={460} at={-30} out={x5} inline size={46} title="Our readout, at x = 2" rows={[
				{label: 'x', value: 2, role: 'height'},
				{label: 'gradient', value: 0.5, digits: 3, role: 'gradient'},
				{label: 'gradient × x', value: 1, role: 'a', mark: {kind: 'box', at: pattern, role: 'a'}, glow: [pattern, x5]},
			]} />
			<HandTag x={1180} y={520} text="our readout!" at={pattern + 10} out={x5} size={36} color={MATH_BLUE} />
			<HandTag x={1180} y={470} text="÷ x, allowed because x > 0" at={divide} size={38} color={MATH_ANSWER} />
			<Enter at={x5 + 12} style={{position: 'absolute', left: 720, top: 770}}>
				<span style={DISPLAY(48)}><AnswerFrame at={x5 + 12} tick={false}><LnRule dom /></AnswerFrame></span>
			</Enter>
			<MistakeCard x={700} y={880} w={1124} size={40} at={not} wrong={<>d/dx(ln x) = 1/(ln x)</>} caption="at x = 1 that is 1/0, undefined" />
		</>
	);
};

// ---------- 8. the domain stays positive ----------
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const pos1 = cue(id, 'positive'), pos2 = cue(id, 'positive', 2), stays = cue(id, 'stays'), touches = cue(id, 'touches'), negative = cue(id, 'negative'), zero = cue(id, 'zero');
	const glow = vis(f, touches, touches + 60, 8);
	return (
		<>
			<SceneHeading text="The rule lives where x > 0" at={2} />
			<Legend />
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={LN} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x" yLabel="y" asymptotes={[0]} mirror={{at: -30}}
				regions={[{x: [-3, 0], color: '#d9d3c8', opacity: 0.55, at: negative}]}
				curves={[{fn: X => Math.exp(X), at: -30, domain: [-3, Math.log(5.2)]}, ONE_OVER_X(-30)]}
				overlay={g => {
					const [ax] = g.toFrame(0, 0);
					return <>
						<FrameSvg>
							<Chord g={g} a={[Math.log(3), 3]} b={[3, Math.log(3)]} at={stays} />
							<Chord g={g} a={[Math.log(0.4), 0.4]} b={[0.4, Math.log(0.4)]} at={stays + 10} />
							<line x1={ax} x2={ax} y1={GSQ.y + 48} y2={GSQ.y + 48 + 700} stroke={MATH_GRADIENT} strokeWidth={8} opacity={0.6 * glow} />
						</FrameSvg>
						<HandTag x={GSQ.x + 120} y={GSQ.y + 640} text="ln x undefined" at={negative} size={40} color={INK} />
					</>;
				}} />
			<CurveLabel x={300} y={200} size={40} color={INK_SOFT}>e<Pow>x</Pow> (dashed)</CurveLabel>
			<CurveLabel x={720} y={330} size={44}>y = ln x</CurveLabel>
			<CurveLabel x={560} y={250} size={40} color={MATH_GRADIENT}>y = <Frac n="1" d="x" /></CurveLabel>
			<Card x={RX} y={180} w={830} at={-30} pad="14px 28px 18px">
				<CardTitle>Why x &gt; 0</CardTitle>
				{[
					{t: <>e<Pow>x</Pow> &gt; 0 for every x: always above the x-axis</>, at: pos1},
					{t: <>the reflection turns heights into x values</>, at: pos2 + 20},
					{t: <>so ln x lives right of the y-axis: x &gt; 0</>, at: stays},
					{t: <>1/x exists for x &lt; 0, but ln x does not</>, at: negative},
				].map((r, i) => <div key={i} style={{...DISPLAY(36, INK, 700), marginTop: 10, opacity: prog(f, r.at, 12)}}>{r.t}</div>)}
			</Card>
			<AppRig phone={{x: 1010, y: 560, h: 340}} users={0} weeks={0} rows={[{value: 'users'}, {value: '> 0'}]} />
			<HandTag x={1210} y={640} text="you can't have zero" at={pos1 + 20} size={36} color={INK_SOFT} />
			<HandTag x={1210} y={686} text="or fewer users" at={pos1 + 30} size={36} color={INK_SOFT} />
			<Enter at={zero - 20} style={{position: 'absolute', left: 1210, top: 790}}>
				<span style={DISPLAY(48)}><AnswerFrame at={zero - 20} tick={false}>d/dx(ln x) = <Frac n="1" d="x" />, <MarkSpan kind="circle" at={zero} role="answer">x &gt; 0</MarkSpan></AnswerFrame></span>
			</Enter>
		</>
	);
};

