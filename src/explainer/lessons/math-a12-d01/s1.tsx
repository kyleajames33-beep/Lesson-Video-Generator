// Scenes 1 to 4: the flask anchor, the three-flask question, the gradient-equals-height graph, the squash.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	AnchorStage, Card, CurveSimulator, FrameSvg, DrawnMark, HandTag, LiveReadoutBoard, MarkSpan, Pow, ResultCard, Role, SceneHeading,
	kf, niceNum, simAt, simGradient, simHeight, vis, MATH_BLUE, MATH_GRADIENT, MATH_TEAL,
} from '../../math/studio';
import type {SimKey} from '../../math/studio';
import {cue, dur, LN3} from './common';
import {ClockStrip, CurveLabel, DISPLAY, E, FlaskField, FlaskThumb, General, Legend, QuestionRing, RecallChip, flaskH} from './parts';

// ---------- 1. hook: a flask where the rate equals the count ----------
export const S01: React.FC = () => {
	const id = 'hook-flask';
	const f = useCurrentFrame();
	const two = cue(id, 'two'), twice = cue(id, 'twice', 2), count2 = cue(id, 'the count', 2), food = cue(id, 'while the food'), three = cue(id, 'and three million');
	const xAt = (g: number) => kf(g, [[two, 0], [three - 4, LN3]], false);
	const y = Math.exp(xAt(f));
	const FL = {x: 120, y: 236, w: 400};
	const field = {cx: 905, cy: 498, d: 540};
	return (
		<>
			<SceneHeading text="A flask where the rate equals the count" at={2} />
			<AnchorStage push={{start: 0, dur: dur(id), to: 1.03, origin: [700, 520]}}>
				<FlaskField x={FL.x} y={FL.y} w={FL.w} cloudy={(y - 1) / 2} leaderAt={14}
					field={{cx: field.cx, cy: field.cy, d: field.d, countAt: g => 8 * Math.exp(xAt(g)), seed: 11, maxCells: 26}} />
				<HandTag x={field.cx} y={field.cy + field.d / 2 + 40} text="a drop, magnified" at={30} out={twice - 20} size={40} color={INK_SOFT} anchor="middle" />
				<HandTag x={FL.x + FL.w / 2} y={FL.y + flaskH(FL.w) + 44} text="while the food lasts" at={food} size={42} color={INK_SOFT} anchor="middle" />
			</AnchorStage>
			<LiveReadoutBoard x={1250} y={214} width={574} at={20} title="In the flask" rows={[
				{label: 'cells', value: y, role: 'height', unit: 'million', mark: {kind: 'circle', at: count2, role: 'height'}},
				{label: 'growth rate', value: y, role: 'gradient', unit: 'million per hour', mark: {kind: 'circle', at: count2 + 6, role: 'gradient'}},
			]} />
			<HandTag x={1262} y={560} text="× 2 cells → × 2 splits" at={twice} out={count2 - 6} size={48} />
			<HandTag x={1262} y={575} text="rate = count" at={count2 + 12} size={66} role="gradient" />
			<HandTag x={1262} y={672} text="same, every moment" at={three + 6} size={46} color={INK} marks={[{kind: 'brace', x: 1836, y1: 300, y2: 470, facing: 'left'}]} markAt={three} />
			<ClockStrip x={96} y={832} w={1728} hours={xAt(f)} max={1.2} at={10} />
		</>
	);
};

// ---------- 2. the question: three changes ----------
type Col = {cx: number; label: string; role?: 'a' | 'b'; eq: React.ReactNode; start: string; count: (g: number) => number; enter: number; labelAt: number; eqAt: number; seed: number};
export const S02: React.FC = () => {
	const id = 'three-flasks';
	const f = useCurrentFrame();
	const second = cue(id, 'second'), faster = cue(id, 'faster'), eq2 = cue(id, "That's y equals"), third = cue(id, 'third'), earlier = cue(id, 'earlier'), seven = cue(id, 'two point seven'), eq3 = cue(id, "That's y equals", 2);
	const when = cue(id, 'When the clock'), guess = cue(id, 'guess'), twist = cue(id, 'twist'), only = cue(id, 'only the fast'), target = cue(id, 'how to differentiate');
	const clk = (g: number) => Math.max(0, g) * 0.00022;
	const cols: Col[] = [
		{cx: 310, label: 'first strain', eq: <>y = <E p="x" /></>, start: '1.00', count: g => 8 * Math.exp(clk(g)), enter: -30, labelAt: -30, eqAt: -30, seed: 11},
		{cx: 930, label: 'fast strain', role: 'a', eq: <>y = <E p={<><Role r="a">2</Role>x</>} /></>, start: '1.00', count: g => 8 * Math.exp(2 * clk(g)), enter: second, labelAt: faster, eqAt: eq2, seed: 21},
		{cx: 1550, label: 'seeded 1 hour earlier', role: 'b', eq: <>y = <E p={<>x <Role r="b">+ 1</Role></>} /></>, start: '2.72', count: g => 8 * Math.exp(clk(g) + 1), enter: third, labelAt: earlier, eqAt: eq3, seed: 31},
	];
	const W = 280, PY = 178;
	const stubOut = target - 4;
	return (
		<>
			<SceneHeading text="Three flasks: which is gaining faster?" at={2} />
			{cols.map((c, i) => {
				const e = prog(f, c.enter, 22);
				const px = c.cx - 290;
				const slide = (1 - e) * 70;
				return (
					<React.Fragment key={i}>
						<div style={{position: 'absolute', inset: 0, transform: `translateX(${slide}px)`}}>
							<FlaskField x={px} y={PY} w={W} plateOpacity={0.22 + 0.78 * e} cloudy={i === 2 ? 0.55 : 0}
								field={{cx: c.cx + 148, cy: 345, d: 276, countAt: c.count, seed: c.seed, maxCells: 30, at: c.enter + 8}} leaderAt={c.enter + 10} />
						</div>
						<div style={{position: 'absolute', left: c.cx - 300, width: 600, top: 548, textAlign: 'center'}}>
							<Enter at={c.labelAt}><span style={{...DISPLAY(46, c.role ? (c.role === 'a' ? MATH_BLUE : MATH_TEAL) : INK, 800)}}>{c.label}</span></Enter>
							<Enter at={c.eqAt} style={{marginTop: 10}}><span style={DISPLAY(64)}>{c.eq}</span></Enter>
							<div style={{margin: '14px auto 0', width: 520, textAlign: 'left', opacity: 0.35 + 0.65 * prog(f, c.eqAt + 8, 14), background: '#fffdf8', borderRadius: 18, border: '2.5px solid rgba(60,45,20,0.10)', boxShadow: '0 10px 24px rgba(60,45,20,0.08)', padding: '6px 22px 8px'}}>
								<div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
									<span style={DISPLAY(32, INK, 700)}>cells at x = 0</span>
									<span><span style={{...DISPLAY(46, INK), fontVariantNumeric: 'tabular-nums'}}>{c.start}</span><span style={DISPLAY(28, INK_SOFT, 600)}> million</span></span>
								</div>
								<div style={{display: 'flex', alignItems: 'center', gap: 16, borderTop: '2px solid #ede4d3', paddingTop: 4}}>
									<span style={DISPLAY(32, MATH_GRADIENT, 700)}>growth rate</span>
									<div style={{flex: 1, height: 18, borderRadius: 9, background: '#ede4d3', border: '2px dashed rgba(107,79,160,0.45)', boxSizing: 'border-box'}} />
									<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1, color: MATH_GRADIENT}}>?</span>
								</div>
							</div>
						</div>
						<Enter at={twist} out={stubOut} style={{position: 'absolute', left: c.cx - 300, width: 600, top: 858, textAlign: 'center'}}><span style={DISPLAY(50, INK_SOFT, 700)}>d/dx → ?</span></Enter>
					</React.Fragment>
				);
			})}
			<HandTag x={1698} y={168} text="already 2.72 million" at={seven} out={guess - 4} size={40} role="b" anchor="middle" />
			<QuestionRing cx={cols[1].cx - 150} cy={350} rx={168} ry={182} at={guess} out={stubOut} />
			<QuestionRing cx={cols[2].cx - 150} cy={350} rx={168} ry={182} at={guess + 6} out={stubOut} />
			<HandTag x={cols[1].cx + 312} y={516} text="gaining faster now?" at={guess + 8} out={stubOut} size={44} anchor="middle" />
			<Card x={460} y={856} w={1000} at={when} out={twist - 6} pad="12px 26px">
				<div style={{...DISPLAY(44, INK, 700), textAlign: 'center'}}>Which flask gains cells faster at x = 0?</div>
			</Card>
			<HandTag x={cols[1].cx + 170} y={890} text="× 2 ?" at={only} out={stubOut} size={58} role="a" />
			<Enter at={target} style={{position: 'absolute', left: 0, right: 0, top: 852, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#fffdf8', borderRadius: 20, border: '3px solid rgba(60,45,20,0.14)', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '8px 40px 14px', ...DISPLAY(68)}}>y = <General /></div>
			</Enter>
			<Legend at={target} />
		</>
	);
};

// ---------- shared graph stage (scenes 3 and 4) ----------
const G = {x: 420, y: 168, w: 890, h: 760};
const RX = 1350, RW = 474;
const label1 = (a: number) => <>y = e<Pow>{Math.abs(a - 1) < 0.01 ? 'x' : <><Role r="a">{niceNum(a, 1)}</Role>x</>}</Pow></>;

// ---------- 3. the graph: gradient equals height ----------
export const S03: React.FC = () => {
	const id = 'graph-gradient-height';
	const f = useCurrentFrame();
	const tx = cue(id, 'Time x'), cy = cue(id, 'count y'), draw = cue(id, 'to the x'), year = cue(id, 'From Year'), one = cue(id, 'one', 2), seven2 = cue(id, 'seven', 2), ratio = cue(id, 'Gradient divided'), stick = cue(id, 'measuring');
	const T: SimKey[] = [{frame: 0, a: 1, u: -1.5}, {frame: year + 20, u: -1.5}, {frame: one - 20, u: 0}, {frame: one + 30, u: 0}, {frame: seven2 - 40, u: 1}];
	const p = simAt(T, f);
	const dots = [0, 0.25, 0.5, 0.75, 1];
	return (
		<>
			<SceneHeading text="The graph: gradient equals height" at={2} />
			<Legend />
			<FlaskThumb x={96} y={176} label="first strain" cells={simHeight(p)} rate={simGradient(p)} countAt={g => 8 * Math.exp(g * 0.0003)} seed={11} glow={[ratio, ratio + 60]} />
			<HandTag x={251} y={680} text="the flask's counts" at={20} out={draw} size={40} color={INK_SOFT} anchor="middle" />
			<CurveSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={{x: [-2, 2], y: [0, 8]}} timeline={T} draw={{at: draw, dur: 40}}
				point={{at: year + 10}} tangent={{at: year + 16}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: RX, y: 300, width: RW, at: year + 10, inline: true, rows: [
					{kind: 'height', mark: {kind: 'circle', at: seven2 + 6, role: 'height'}},
					{kind: 'gradient', mark: {kind: 'circle', at: seven2 + 12, role: 'gradient'}},
					{kind: 'ratio', mark: {kind: 'box', at: ratio + 10, role: 'a'}},
				]}}
				overlay={g => (
					<>
						<FrameSvg style={{opacity: 1 - prog(f, draw + 20, 20) * 0.75}}>
							{dots.map((d, i) => {const [sx, sy] = g.toFrame(d, Math.exp(d)); return <circle key={i} cx={sx} cy={sy} r={11 * prog(f, 30 + i * 30, 10)} fill={INK} stroke="#fffdf8" strokeWidth={4} />;})}
						</FrameSvg>
						<HandTag x={G.x + 150} y={G.y + G.h - 30} text="time x: hours →" at={tx} out={draw} size={40} color={INK} />
						<HandTag x={G.x + 104} y={G.y + 100} text="↑ count y" at={cy} out={draw} size={40} color={INK} />
					</>
				)} />
			<CurveLabel x={G.x + 150} y={G.y + 120} at={draw + 30} size={52}>y = e<Pow>x</Pow></CurveLabel>
			<RecallChip x={RX} y={162} w={RW} at={year} size={30}>Year 11: gradient = slope of the tangent;<br />d/dx(eˣ) = eˣ</RecallChip>
			<HandTag x={RX + 6} y={600} text="height = gradient: same" at={seven2 + 12} size={44} color={MATH_GRADIENT} />
			<HandTag x={RX + 6} y={672} text="gradient ÷ height = 1: per cell" at={stick - 6} size={40} role="a" />
			<Card x={RX} y={730} w={RW} at={-30} pad="12px 22px">
				<div style={DISPLAY(30, INK_SOFT, 700)}>e<Pow>x</Pow> is its own derivative,</div>
				<div style={DISPLAY(30, INK_SOFT, 700)}>so every tangent's slope</div>
				<div style={DISPLAY(30, INK_SOFT, 700)}>equals the curve's height.</div>
			</Card>
		</>
	);
};

// ---------- 4. the fast strain: the squash doubles every slope ----------
export const S04: React.FC = () => {
	const id = 'fast-strain-squash';
	const f = useCurrentFrame();
	const here = cue(id, 'Here x'), sideways = cue(id, 'squashed sideways'), tri = cue(id, 'This tangent'), squash = cue(id, 'Squash the curve'), halves = cue(id, 'halves'), rise = cue(id, 'The rise stays'), heightOne = cue(id, 'At height one'), two3 = cue(id, 'two', 3), result = cue(id, 'x', 4), hour = cue(id, 'Every million');
	const T: SimKey[] = [{frame: 0, a: 1, u: 1}, {frame: squash + 8, a: 1}, {frame: squash + 58, a: 2}, {frame: heightOne, u: 1}, {frame: two3, u: 0}];
	const p = simAt(T, f);
	const swap = squash + 8;
	return (
		<>
			<SceneHeading text="The fast strain: the squash doubles every slope" at={2} size={56} />
			<Legend />
			<FlaskThumb x={96} y={176} out={swap + 20} label="first strain" cells={simHeight(p)} rate={simGradient(p)} countAt={g => 8 * Math.exp(g * 0.0003)} seed={11} />
			<FlaskThumb x={96} y={176} at={swap + 20} label="fast strain" labelRole="a" cells={simHeight(p)} rate={simGradient(p)} countAt={g => 8 * Math.exp(Math.max(0, g - swap) * 0.0007)} seed={21} cloudy={0.35} glow={[hour, hour + 90]} />
			<CurveSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={{x: [-2, 2.7], y: [0, 8]}} timeline={T}
				color={q => (q.a > 1.01 ? MATH_BLUE : INK)}
				ghost={{a: 1, at: sideways}} point={{at: 0}} tangent={{at: 0}} triangle={{runU: 1, at: tri + 8, dim: [hour, 99999]}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: RX, y: 320, width: RW, at: -30, inline: true, rows: [{kind: 'height'}, {kind: 'gradient'}, {kind: 'ratio', mark: {kind: 'box', at: result, role: 'a'}}]}}
				overlay={g => g.tri ? (
					<>
						<HandTag x={(g.tri.start[0] + g.tri.corner[0]) / 2} y={g.tri.start[1] + 96} text="halves" at={halves + 6} out={heightOne} role="a" size={46} anchor="middle"
							marks={[{kind: 'circle', cx: (g.tri.start[0] + g.tri.corner[0]) / 2, cy: g.tri.start[1] + 34, rx: 82, ry: 30}]} markAt={halves} />
						<HandTag x={g.tri.corner[0] + 18} y={(g.tri.corner[1] + g.tri.end[1]) / 2 + 52} text="same" at={rise + 10} out={heightOne} size={46} color={MATH_GRADIENT} />
					</>
				) : null} />
			<Enter at={-30} style={{position: 'absolute', left: RX, top: 164}}>
				<span style={DISPLAY(66)}>y = e<Pow><Role r="a">2</Role>x</Pow></span>
			</Enter>
			<CurveLabel x={G.x + 150} y={G.y + 120} size={52} color={p.a > 1.01 ? MATH_BLUE : INK}>{label1(p.a)}</CurveLabel>
			<HandTag x={RX + 4} y={272} text="x is doubled first" at={here} size={40} role="a" />
			<ResultCard x={RX} y={612} at={result} size={50}>d/dx(e<Pow><Role r="a">2</Role>x</Pow>) = <Role r="a">2</Role>e<Pow><Role r="a">2</Role>x</Pow></ResultCard>
			<HandTag x={RX + 380} y={726} text="× 2" at={result + 14} role="a" size={60} marks={[{kind: 'arrow', from: [RX + 440, 556], to: [RX + 312, 616], bend: -0.3}]} markAt={result + 6} />
			<Card x={RX} y={790} w={RW} at={-30} out={result - 6} pad="12px 22px">
				<div style={DISPLAY(30, INK_SOFT, 700)}>x doubled first: the curve</div>
				<div style={DISPLAY(30, INK_SOFT, 700)}>reaches each height in</div>
				<div style={DISPLAY(30, INK_SOFT, 700)}>half the time.</div>
			</Card>
			<HandTag x={RX + 6} y={850} text="every million adds 2 million/h" at={hour} size={38} role="a" />
		</>
	);
};
