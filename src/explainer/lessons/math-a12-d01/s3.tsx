// Scenes 9 to 13: the two worked examples (g01 layout), the memory aid, attempt 1 and its feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {
	AnswerFrame, Card, CardTitle, CurveSimulator, EquationStrip, FrameSvg, DrawnMark, GivensCard, HandTag, InnerSlot, MarkSpan, MistakeCard, PlateImg, Pow, Role, RolesOn,
	QuestionCard, TaskStrip, WorkingRows, MATH_ANSWER, MATH_GRADIENT, MATH_ROLES, MATH_BLUE, CARD, CARD_SHADOW, simAt,
} from '../../math/studio';
import type {RoleKey, SimKey} from '../../math/studio';
import {cue, dur, hold} from './common';
import {CurveLabel, WorkingSpace, DISPLAY, E, FLASK, FLASK_CLOUDY, General, KRule, Legend} from './parts';

/** The rule carried from the proof, shown where the working will go until the first working row arrives. */
const RuleCard: React.FC<{x: number; y: number; out: number}> = ({x, y, out}) => (
	<Enter at={-30} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{...DISPLAY(30, INK_SOFT, 700), marginBottom: 10}}>The rule we just proved:</div>
		<span style={DISPLAY(54)}><AnswerFrame at={-30} tick={false}><KRule /></AnswerFrame></span>
	</Enter>
);

// ---------- 9. worked example 1 ----------
export const S09: React.FC = () => {
	const id = 'worked-1';
	const f = useCurrentFrame();
	const inside = cue(id, 'The inside part'), three3 = cue(id, 'three', 3), keep = cue(id, 'So keep'), mult = cue(id, 'multiply by three'), threeE = cue(id, 'three e'), trap = cue(id, 'trap'), whole = cue(id, 'whole');
	const slot3 = <InnerSlot><Role r="a">3</Role>x</InnerSlot>;
	return (
		<>
			<TaskStrip text="Differentiate" at={2} />
			<Legend />
			<EquationStrip at={-30}>y = e<Pow>{slot3}</Pow></EquationStrip>
			<GivensCard at={inside - 6} title="What we know" y={352} w={600} lines={[
				{content: <>u = <Role r="a">3</Role>x</>, at: inside, role: 'inner', note: 'the inside part (the power)'},
				{content: <>a = 3</>, at: three3, role: 'a', note: 'the coefficient of x', glow: [three3, mult]},
			]} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, trap - 10, 12)}}>
				<FrameSvg><DrawnMark mark={{kind: 'arrow', from: [330, 452], to: [312, 240], bend: -0.32}} at={inside + 8} color={MATH_ROLES.inner.stroke} width={4} /></FrameSvg>
				<HandTag x={372} y={298} text="the power is the inside part" at={inside + 18} size={36} color={INK_SOFT} />
			</div>
			<RuleCard x={760} y={330} out={three3 - 6} />
			<WorkingRows x={760} y={326} w={1070} size={68} oldSize={46} rows={[
				{left: 'du/dx', right: <MarkSpan kind="box" at={three3 + 10} role="a"><Role r="a">3</Role></MarkSpan>, at: three3},
				{left: 'dy/dx', right: <><MarkSpan kind="circle" at={keep + 30} out={trap} role="answer">e<Pow><Role r="a">3</Role>x</Pow></MarkSpan> × <Role r="a">3</Role></>, at: mult},
				{right: <><Role r="a">3</Role><MarkSpan kind="circle" at={whole} role="answer">e<Pow><Role r="a">3</Role>x</Pow></MarkSpan></>, at: threeE, answer: true},
			]} />
			<HandTag x={1390} y={444} text="copied unchanged" at={mult + 16} out={trap} size={44} color={MATH_ANSWER} />
			<MistakeCard x={96} y={700} w={1728} at={trap} wrong={<>dy/dx = 3x · e<Pow>3x − 1</Pow></>} caption="x in the power, not the base" compare={<>x³ → 3x² works only because x is in the base</>} />
		</>
	);
};

// ---------- 10. worked example 2 ----------
export const S10: React.FC = () => {
	const id = 'worked-2';
	const f = useCurrentFrame();
	const kIs = cue(id, 'k is five'), aIs = cue(id, 'a is'), bIs = cue(id, 'b is'), mult = cue(id, 'multiply by k'), six3 = cue(id, 'six', 3), sub = cue(id, 'minus three', 2), zero = cue(id, 'is zero'), eZero = cue(id, 'and e to the zero'), ten3 = cue(id, 'ten', 3), check = cue(id, 'Check the graph'), twice = cue(id, 'twice the height'), predicts = cue(id, 'predicts');
	const clear = check - 6;
	const T: SimKey[] = [{frame: 0, a: 2, b: 6, k: 5, u: 0}];
	const chips: {r: RoleKey; t: React.ReactNode; at: number; target: [number, number]}[] = [
		{r: 'k', t: <>k = 5</>, at: kIs, target: [330, 262]},
		{r: 'a', t: <>a = 2</>, at: aIs, target: [416, 214]},
		{r: 'b', t: <>b = 6</>, at: bIs, target: [512, 214]},
	];
	const glowA = vis2(f, twice, 99999);
	return (
		<>
			<TaskStrip text="Find f′(−3)" at={-24} />
			<Legend />
			<EquationStrip at={-30}>f(x) = <Role r="k">5</Role>e<Pow><Role r="a">2</Role>x + <Role r="b">6</Role></Pow></EquationStrip>
			<Card x={1240} y={156} w={584} at={-30} pad="14px 26px 16px">
				<CardTitle>Match the pattern</CardTitle>
				<div style={DISPLAY(52)}><General /></div>
				<div style={{display: 'flex', gap: 34, marginTop: 8}}>
					{chips.map(c => (
						<div key={c.r} style={{opacity: prog(f, c.at, 12), padding: '0 10px', margin: '0 -10px', borderRadius: 12, background: (c.r !== 'b' && f >= mult && f < mult + 70) || (c.r === 'a' && glowA > 0) ? MATH_ROLES[c.r].soft : undefined, ...DISPLAY(50, MATH_ROLES[c.r].ink)}}>{c.t}</div>
					))}
				</div>
			</Card>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, mult - 4, 12)}}>
				<FrameSvg>
					{chips.map((c, i) => <DrawPath key={c.r} d={`M${1290 + i * 158},${360} Q${(1290 + i * 158 + c.target[0]) / 2},${300 + i * 22} ${c.target[0]},${c.target[1]}`} at={c.at + 4} dur={18} color={MATH_ROLES[c.r].stroke} width={3.5} dash="10 8" />)}
				</FrameSvg>
			</div>
			<RuleCard x={96} y={330} out={mult - 6} />
			<div style={{position: 'absolute', inset: 0, transform: `translateY(${prog(f, mult - 10, 24) * 92}px)`}}>
				<Card x={96} y={520} w={880} at={-30} out={zero - 8} pad="14px 28px 18px">
					<CardTitle>Plan</CardTitle>
					{[
						<>1. Read off <Role r="k">k</Role>, <Role r="a">a</Role> and <Role r="b">b</Role>.</>,
						<>2. Copy the exponential, multiply by <Role r="k">k</Role> and <Role r="a">a</Role>.</>,
						<>3. Substitute x = −3.</>,
					].map((t, i) => {
						const on = i === 0 ? f >= kIs && f < mult : i === 1 ? f >= mult && f < sub : f >= sub;
						return <div key={i} style={{...DISPLAY(40, INK, 700), marginTop: 6, padding: '2px 12px', margin: '6px -12px 0', borderRadius: 10, background: on ? '#efe6d2' : undefined}}>{t}</div>;
					})}
				</Card>
			</div>
			<WorkingRows x={96} y={320} w={880} size={60} oldSize={40} gap={18} rows={[
				{left: 'f′(x)', right: <><Role r="k">5</Role> × <Role r="a">2</Role> × e<Pow><InnerSlot><Role r="a">2</Role>x + <Role r="b">6</Role></InnerSlot></Pow></>, at: mult + 10, out: clear},
				{right: <>10e<Pow><InnerSlot><Role r="a">2</Role>x + <Role r="b">6</Role></InnerSlot></Pow></>, at: six3, keep: true},
				{left: 'f′(−3)', right: <>10e<Pow>2(<MarkSpan kind="underline" at={sub + 6}>−3</MarkSpan>) + 6</Pow></>, at: sub, out: clear},
				{left: '2(−3) + 6', right: '0', at: zero, out: clear},
				{right: <>10e⁰ = 10 × 1</>, at: eZero, out: clear},
				{left: 'f′(−3)', right: '10', at: ten3 - 4, answer: true},
			]} />
			<CurveSimulator x={1000} y={352} width={830} height={588} window={{x: [-4.5, -2], y: [0, 12]}} timeline={T} color={INK}
				point={{at: -30}} tangent={{at: check}} triangle={{runU: 1, at: check + 10, runLabel: () => 'run ½', riseLabel: () => 'rise 5'}}
				xTicks={[-4, -3, -2]} yTicks={[0, 4, 8, 12]} xLabel="x" yLabel="y"
				readout={{x: 96, y: 590, width: 620, at: check + 4, inline: true, rows: [
					{kind: 'height', at: check + 4},
					{kind: 'gradient', at: check + 12},
					{kind: 'ratio', at: twice, glow: [predicts - 10, 99999]},
				]}}
				overlay={g => (
					<>
						<HandTag x={g.pt[0] + 24} y={g.pt[1] - 60} text="slope here?" at={-30} out={check} size={42} color={INK_SOFT} />
						<HandTag x={g.pt[0] - 30} y={g.pt[1] - 40} text="x = −3, height 5" at={check + 20} size={38} color={INK} anchor="end" />
					</>
				)} />
			<CurveLabel x={1640} y={420} size={46}>y = f(x)</CurveLabel>
			<HandTag x={740} y={800} text="a = 2, as always" at={twice + 16} size={48} role="a" />
		</>
	);
};
const vis2 = (f: number, a: number, b: number) => (f >= a && f < b ? 1 : 0);

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const aIs = cue(id, 'a is'), bIs = cue(id, 'b is'), kIs = cue(id, 'k is'), copy = cue(id, 'copy the exponential'), byA = cue(id, 'and by a');
	const rows: {r: RoleKey; text: string; at: number; icon: React.ReactNode; tag: string}[] = [
		{r: 'a', text: 'a: growth per cell → sets gradient ÷ height', at: aIs, tag: 'fast', icon: <PlateImg plate={FLASK_CLOUDY} x={40} y={0} w={100} />},
		{r: 'b', text: 'b: start time → slides, no new factor', at: bIs, tag: 'early', icon: <PlateImg plate={FLASK} x={40} y={0} w={100} />},
		{r: 'k', text: 'k: how many flasks → heights and slopes × k', at: kIs, tag: '× 3', icon: <>{[0, 1, 2].map(i => <PlateImg key={i} plate={FLASK_CLOUDY} x={i * 62} y={28} w={66} />)}</>},
	];
	return (
		<>
			<TaskStrip text="A way to hold onto it" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 190, top: 172, width: 1540, height: 742, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>
				<div style={{position: 'absolute', left: 48, top: 26, display: 'flex', alignItems: 'baseline', gap: 20}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: INK_SOFT}}>Memory aid</span>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#8a5a12'}}>think of the flasks</span>
				</div>
				{rows.map((r, i) => {
					const on = prog(f, r.at - 4, 12);
					return (
						<div key={r.r} style={{position: 'absolute', left: 48, top: 110 + i * 142, width: 1440, height: 132}}>
							<div style={{position: 'absolute', left: 0, top: 4, width: 200, height: 124, opacity: 0.3 + 0.7 * on, transform: `scale(${0.92 + 0.08 * on})`, transformOrigin: 'left center'}}>{r.icon}</div>
							<div style={{position: 'absolute', left: 150, top: 86, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: MATH_ROLES[r.r].ink, opacity: on}}>{r.tag}</div>
							<div style={{position: 'absolute', left: 240, top: 30}}><HandText text={r.text} at={r.at} size={60} color={MATH_ROLES[r.r].ink} cps={34} /></div>
						</div>
					);
				})}
				<div style={{position: 'absolute', left: 48, right: 48, top: 540, height: 2, background: 'rgba(60,45,20,0.14)'}} />
				<div style={{position: 'absolute', left: 48, top: 556}}>
					<HandText text="Copy the exponential, then multiply by k and a." at={copy} size={74} color={INK} cps={30} />
				</div>
				<Enter at={byA} style={{position: 'absolute', left: 52, top: 650}}><span style={DISPLAY(50)}><KRule /></span></Enter>
			</div>
		</>
	);
};

// ---------- 12. attempt 1 ----------
export const Q1: React.FC = () => (
	<>
		<div>Consider the function f(x) = 4e<Pow>2x − 1</Pow>.</div>
		<div style={{marginTop: 18}}>(a) Find f′(x).</div>
		<div style={{marginTop: 10}}>(b) Hence find the exact value of f′(½).</div>
	</>
);
export const S12: React.FC = () => {
	const id = 'attempt-1';
	return (
		<RolesOn on={false}>
			<WorkingSpace y={624} h={196} />
			<QuestionCard at={0} size={56} w={1460} y={214} hold={hold(id)} pauseAt={cue(id, 'Pause here')}>
				<Q1 />
			</QuestionCard>
		</RolesOn>
	);
};

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const eight2 = cue(id, 'eight', 2), two2 = cue(id, 'two', 2), fourTwo = cue(id, 'four times two'), eight = cue(id, 'which is eight'), half = cue(id, 'At a half'), zero = cue(id, 'the power is zero'), soHalf = cue(id, 'so f prime of a half'), got4 = cue(id, 'If you got four');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= two2}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>Consider the function f(x) = <MarkSpan kind="underline" at={fourTwo} role="k"><Role r="k">4</Role>e</MarkSpan><Pow><MarkSpan kind="underline" at={two2} role="a"><Role r="a">2</Role>x <Role r="b">− 1</Role></MarkSpan></Pow>.</div>
					<div style={{marginTop: 18}}>(a) Find f′(x).</div>
					<div style={{marginTop: 10}}>(b) Hence find the exact value of f′(<MarkSpan kind="underline" at={half}>½</MarkSpan>).</div>
				</QuestionCard>
			</RolesOn>
			<Card x={1130} y={150} w={694} at={two2} pad="14px 26px 16px">
				<CardTitle>Match the pattern</CardTitle>
				<div style={{display: 'flex', gap: 40}}>
					<span style={DISPLAY(52, MATH_ROLES.k.ink)}>k = 4</span><span style={DISPLAY(52, MATH_ROLES.a.ink)}>a = 2</span><span style={DISPLAY(52, MATH_ROLES.b.ink)}>b = −1</span>
				</div>
			</Card>
			<CurveSimulator x={1130} y={316} width={694} height={470} window={{x: [-0.5, 1.25], y: [0, 12]}} timeline={[{frame: 0, a: 2, b: -1, k: 4, u: 0}]} color={INK}
				point={{at: -30}} dropLine={{at: -30}} tangent={{at: eight2, halfLength: 200}} xTicks={[0, 0.5, 1]} yTicks={[0, 4, 8, 12]} xLabel="x" yLabel="y" at={-30}
				overlay={g => (
					<>
						<HandTag x={g.pt[0] + 26} y={g.pt[1] + 44} text="x = ½" at={-30} size={38} color={INK} />
						<HandTag x={g.pt[0] - 30} y={g.pt[1] - 56} text="slope 8" at={eight2 + 8} size={48} color={MATH_GRADIENT} anchor="end" />
					</>
				)} />
			<CurveLabel x={1250} y={380} size={40}>y = 4e<Pow>2x − 1</Pow></CurveLabel>
			<WorkingRows x={96} y={392} w={1010} size={66} oldSize={44} gap={14} rows={[
				{left: <>u = <Role r="a">2</Role>x <Role r="b">− 1</Role>,  du/dx</>, right: <MarkSpan kind="box" at={two2 + 10} role="a"><Role r="a">2</Role></MarkSpan>, at: two2},
				{left: 'f′(x)', right: <><Role r="k">4</Role> × <Role r="a">2</Role> × e<Pow><InnerSlot><Role r="a">2</Role>x <Role r="b">− 1</Role></InnerSlot></Pow></>, at: fourTwo},
				{right: <>8e<Pow><InnerSlot><Role r="a">2</Role>x <Role r="b">− 1</Role></InnerSlot></Pow></>, at: eight, answer: true},
				{left: '2(½) − 1', right: '0', at: zero},
				{left: 'f′(½)', right: <>8e⁰ = 8</>, at: soHalf, answer: true},
			]} />
			<MistakeCard x={96} y={814} w={1728} size={42} at={got4} wrong={<>f′(x) = 4e<Pow>2x − 1</Pow>, so f′(½) = 4</>} caption="multiply by the inside derivative, 2" />
		</>
	);
};
