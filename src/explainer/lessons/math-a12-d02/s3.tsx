// Scenes 9 to 12: the worked example (g01 layout) with the jar's return, the memory aid, attempt 1 and its feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	AnswerFrame, Card, CardTitle, EXP_BASE_FAMILY, EquationStrip, FunctionSimulator, GivensCard, GivensStrip, HandTag, MarkSpan, MistakeCard, PlateImg, Pow, QuestionAxes,
	QuestionCard, RolesOn, TaskStrip, WorkingRows, kf, vis, MATH_ANSWER, MATH_BLUE, MATH_GRADIENT, MATH_MISTAKE, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, hold, LN2} from './common';
import {AttemptStage, CoinJar, CurveLabel, D02_PLATES, DISPLAY, Legend, Ln, Rule, Tick, simRows} from './parts';

const EXP = EXP_BASE_FAMILY;

// ---------- 9. worked example: gradient of 2ˣ at x = 3 ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const three = cue(id, 'three'), base = cue(id, 'base is two'), copy = cue(id, 'Copy'), nl2 = cue(id, 'natural log of two'), row1 = cue(id, 'At x equals', 2) - 30, three2 = cue(id, 'three', 2), five = cue(id, 'five'), account = cue(id, 'account'), decade = cue(id, 'decade'), graph = cue(id, 'On the graph'), that = cue(id, 'times that'), wrote = cue(id, 'If you wrote');
	const decAt = (g: number) => kf(g, [[account, 0], [decade - 10, 3]]);
	const dec = decAt(f), bal = Math.pow(2, dec);
	const T: FnKey[] = [{frame: 0, x: 3, p: {c: 2}}];
	const step = f < copy ? 0 : f < three2 ? 1 : 2;
	return (
		<>
			<TaskStrip text="Find the gradient at x = 3" at={-24} />
			<Legend />
			<EquationStrip at={-30} y={166}>y = 2<Pow>x</Pow></EquationStrip>
			<GivensCard at={-30} title="Givens" y={300} w={520} lines={[
				{content: <>x = 3</>, at: three, glow: [three2, three2 + 60], role: 'height'},
				{content: <>base a = 2</>, at: base, role: 'height'},
				{content: <><Ln a="2" /> ≈ 0.693</>, at: nl2, role: 'a'},
			]} />
			<Card x={96} y={600} w={520} at={-30} out={wrote - 6} pad="14px 26px 16px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Read off the base a.</>, <>2. Copy a<Pow>x</Pow>, multiply by <Ln />.</>, <>3. Put x = 3 in.</>].map((t, i) => (
					<div key={i} style={{...DISPLAY(38, INK, 700), padding: '2px 12px', margin: '6px -12px 0', borderRadius: 10, background: step === i ? '#efe6d2' : undefined}}>{t}</div>
				))}
			</Card>
			<Enter at={-30} out={row1 - 6} style={{position: 'absolute', left: 660, top: 300}}>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginBottom: 10}}>The rule we just proved:</div>
				<span style={DISPLAY(54)}><AnswerFrame at={-30} tick={false}><Rule /></AnswerFrame></span>
			</Enter>
			<WorkingRows x={660} y={290} w={800} size={56} oldSize={38} gap={16} rows={[
				{left: 'dy/dx', right: <>(<Ln a="2" />)<MarkSpan kind="underline" at={row1 + 20} role="answer">2<Pow>x</Pow></MarkSpan></>, at: row1},
				{left: <>at x = 3</>, right: <>(<Ln a="2" />) × 2³ = 8 <Ln a="2" /></>, at: three2},
				{right: <>8 <Ln a="2" /> ≈ 5.55</>, at: five, answer: true},
			]} />
			<HandTag x={1170} y={330} text="copied unchanged" at={row1 + 24} out={three2} size={40} color={MATH_ANSWER} />
			{/* the account returns */}
			<Card x={660} y={560} w={560} h={420} at={-30} pad="12px 22px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>the account, after {Math.round(dec * 10)} years</div>
				<div style={{position: 'absolute', left: 230, top: 74, right: 18}}>
					<Tick label="balance" value={bal} unit="$k" role="height" />
					<Tick label="growth rate" value={LN2 * bal} unit="$k per decade" role="gradient" />

					<Tick label="growth per dollar" value={LN2} unit="per decade" role="a" digits={3} />
				</div>
			</Card>
			<CoinJar x={684} y={640} w={190} balanceAt={g => Math.pow(2, decAt(g))} rateAt={g => (g < decade - 10 ? 1.4 * LN2 * Math.pow(2, decAt(g)) : 0)} from={account} />
			<HandTag x={690} y={952} text="about $555 a year" at={decade} size={38} color={MATH_GRADIENT} />
			<FunctionSimulator x={1250} y={560} width={580} height={440} window={{x: [1.5, 3.6], y: [0, 12]}} family={EXP} timeline={T}
				xLabel="x" yLabel="y" xTicks={[2, 3]} yTicks={[4, 8, 12]} curveWidth={6}
				point={{at: -30}} tangent={{at: graph, halfLength: 150}} triangle={{run: 0.5, at: graph + 10, labels: {first: () => 'run ½', second: () => 'rise 2.77'}}}
				readout={{x: 1480, y: 286, width: 344, at: graph, size: 44, rows: simRows({at: {r: that}})}}
				overlay={g => <HandTag x={g.pt[0] - 20} y={g.pt[1] - 40} text="slope here?" at={-30} out={graph} size={38} color={INK_SOFT} anchor="end" />} />
			<CurveLabel x={1340} y={590} size={40}>y = 2<Pow>x</Pow></CurveLabel>
			<MistakeCard x={96} y={600} w={540} at={wrote} size={42} wrong={<>dy/dx = 2<Pow>x</Pow>, so 8</>} caption="missing ln 2" compare={<>8 is e<Pow>x</Pow>'s slope at height 8</>} />
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const except = cue(id, 'Except'), sets = cue(id, 'sets'), crosses = cue(id, 'crosses'), soIts = cue(id, 'So its slope'), twoX = cue(id, 'Two to the x'), copy = cue(id, 'copy'), base = cue(id, 'base', 3);
	const rows: {text: string; at: number; role?: 'a'; icon?: boolean}[] = [
		{text: 'aˣ is eˣ scaled sideways (a ≠ 1)', at: except},
		{text: 'ln a sets the scale: growth per dollar', at: sets, role: 'a', icon: true},
		{text: 'aˣ leaves the y-axis with slope ln a', at: soIts},
	];
	return (
		<>
			<TaskStrip text="A way to hold onto it" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 150, top: 172, width: 1620, height: 768, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>
				<div style={{position: 'absolute', left: 48, top: 26, display: 'flex', alignItems: 'baseline', gap: 20}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: INK_SOFT}}>Memory aid</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#8a5a12'}}>where aˣ crosses the y-axis</span>
				</div>
				{rows.map((r, i) => {
					const on = prog(f, r.at - 4, 12);
					return (
						<div key={i} style={{position: 'absolute', left: 760, top: 112 + i * 108, width: 820, height: 100}}>
							<div style={{position: 'absolute', left: 0, top: 6, width: 90, height: 90, opacity: on}}>{r.icon ? <PlateImg plate={D02_PLATES.jarFull} x={18} y={0} w={58} /> : <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK_SOFT}}>{i + 1}.</span>}</div>
							<div style={{position: 'absolute', left: 96, top: 20}}><HandText text={r.text} at={r.at} size={48} color={r.role ? MATH_BLUE : INK} cps={34} /></div>
						</div>
					);
				})}
				<div style={{position: 'absolute', left: 760, right: 48, top: 452, height: 2, background: 'rgba(60,45,20,0.14)'}} />
				<div style={{position: 'absolute', left: 760, top: 472}}><HandText text="Copy the exponential," at={copy} size={64} color={INK} cps={30} /></div>
				<div style={{position: 'absolute', left: 760, top: 548}}><HandText text="then multiply by ln of the base." at={copy + 26} size={64} color={INK} cps={30} /></div>
				<Enter at={-30} style={{position: 'absolute', left: 764, top: 650}}><span style={DISPLAY(54)}><Rule /></span></Enter>
				<div style={{position: 'absolute', left: 764, top: 650, width: 760, height: 80, borderRadius: 14, boxShadow: `0 0 0 6px rgba(40,115,71,${0.5 * vis(f, base, undefined, 10)})`}} />
			</div>
			<FunctionSimulator x={176} y={250} width={660} height={680} window={{x: [-1.5, 1.6], y: [0, 3]}} family={EXP} timeline={[{frame: 0, x: 0, p: {c: 2}}]}
				xLabel="x" yLabel="y" xTicks={[-1, 1]} yTicks={[1, 2, 3]} curveWidth={6}
				curves={[{fn: X => Math.exp(X), at: -30}, {fn: X => Math.pow(0.5, X), at: twoX, out: copy, color: '#b9b1a3', width: 5}]}
				point={{at: -30}} tangent={{at: crosses, halfLength: 200}}
				lines={[{slope: () => 1, at: crosses + 10, color: '#8a8378', dash: '14 10', halfLength: 200}, {slope: () => -LN2, at: twoX + 10, out: copy, color: '#b9b1a3', dash: '10 10', halfLength: 170}]}
				overlay={g => (
					<>
						{[2, 2.7].map((Y, i) => {const [ax, ay] = g.toFrame(Math.log(Y), Y), [bx] = g.toFrame(Math.log(Y) / LN2, Y); return <HandTag key={Y} x={bx + 14} y={ay + 4} text={i ? '' : '× 1.44 sideways'} at={except + 40} out={crosses} size={38} role="a" marks={[{kind: 'arrow', from: [ax, ay], to: [bx, ay], bend: 0}]} markAt={except + 30 + i * 8} />;})}
						<HandTag x={g.pt[0] + 16} y={g.pt[1] + 52} text="height 1" at={crosses + 10} size={38} color={INK} marks={[{kind: 'circle', cx: g.pt[0], cy: g.pt[1], rx: 30, ry: 28}]} markAt={crosses} />
						<HandTag x={g.pt[0] - 20} y={g.pt[1] - 210} text="slope ln e = 1" at={twoX + 40} size={36} color={INK_SOFT} anchor="end" />
					</>
				)} />
			<CurveLabel x={560} y={330} size={42}>2<Pow>x</Pow></CurveLabel>
			<CurveLabel x={420} y={330} size={38} color={INK_SOFT}>e<Pow>x</Pow></CurveLabel>
			<HandTag x={520} y={760} text="slope ln 2 = 0.693" at={twoX} size={38} role="a" />
			<HandTag x={210} y={840} text="(½)ˣ: slope ln ½ = −0.693" at={twoX + 50} out={copy} size={34} color={INK_SOFT} />
		</>
	);
};

// ---------- 11. attempt 1 ----------
const Q1: React.FC = () => (
	<>
		<div>Consider the function f(x) = 5<Pow>x</Pow>.</div>
		<div style={{marginTop: 16}}>(a) Find f′(x).</div>
		<div style={{marginTop: 10}}>(b) Find the exact value of f′(0).</div>
	</>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>f(x) = 5<Pow>x</Pow></>, <>at x = 0</>, <>an exact value</>]}
			picture={<QuestionAxes w={720} h={380} window={{x: [-2, 2], y: [-0.6, 3]}} fn={() => 1} color="transparent" point={{x: 0, tag: 'gradient here?'}} />}>
			<Q1 />
		</AttemptStage>
	);
};

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const base = cue(id, 'The base'), row1 = cue(id, 'At zero') - 28, atZero = cue(id, 'At zero'), soF = cue(id, 'so f prime of zero'), exactly = cue(id, 'exactly'), about = cue(id, 'about'), wrote = cue(id, 'If you wrote'), gives = cue(id, 'It gives');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= base}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>Consider the function f(x) = <MarkSpan kind="underline" at={row1 - 10}>5<Pow>x</Pow></MarkSpan>.</div>
					<div style={{marginTop: 16}}>(a) Find f′(x).</div>
					<div style={{marginTop: 10}}>(b) Find the <MarkSpan kind="underline" at={exactly}>exact</MarkSpan> value of <MarkSpan kind="underline" at={atZero}>f′(0)</MarkSpan>.</div>
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={1120} y={170} maxW={710} items={[
				{content: <>f(x) = 5<Pow>x</Pow></>, at: base},
				{content: <>x = 0</>, at: atZero},
				{content: <>exact</>, at: exactly, role: 'answer'},
			]} />
			<WorkingRows x={96} y={400} w={1000} size={62} oldSize={42} gap={18} rows={[
				{left: 'f′(x)', right: <>(<Ln a="5" />)5<Pow>x</Pow></>, at: row1},
				{left: 'f′(0)', right: <>(<Ln a="5" />) × 5⁰</>, at: soF - 10},
				{right: <Ln a="5" />, at: exactly, answer: true},
			]} />
			<HandTag x={680} y={600} text="≈ 1.61" at={about} size={52} color={INK_SOFT} />
			<FunctionSimulator x={1130} y={300} width={694} height={480} window={{x: [-1, 1.2], y: [0, 6]}} family={EXP} timeline={[{frame: 0, x: 0, p: {c: 5}}]}
				xLabel="x" yLabel="y" xTicks={[-1, 1]} yTicks={[2, 4, 6]} at={-30}
				point={{at: -30}} tangent={{at: soF, halfLength: 170}}
				lines={[{slope: () => 0, at: gives, color: MATH_MISTAKE, dash: '12 10', halfLength: 200}]}
				overlay={g => (
					<>
						<HandTag x={g.pt[0] + 40} y={g.pt[1] - 120} text="slope ln 5" at={soF + 10} size={44} color={MATH_GRADIENT} />
						<HandTag x={g.pt[0] + 60} y={g.pt[1] + 70} text="flat: wrong" at={gives + 10} size={40} color={MATH_MISTAKE} marks={[{kind: 'cross', cx: g.pt[0] + 180, cy: g.pt[1], size: 40}]} markAt={gives + 6} />
					</>
				)} />
			<CurveLabel x={1260} y={330} size={44}>y = 5<Pow>x</Pow></CurveLabel>
			<MistakeCard x={96} y={790} w={1728} size={44} at={wrote} wrong={<>f′(x) = x · 5<Pow>x − 1</Pow>, so f′(0) = 0</>} caption="power rule needs x in the base" />
		</>
	);
};

