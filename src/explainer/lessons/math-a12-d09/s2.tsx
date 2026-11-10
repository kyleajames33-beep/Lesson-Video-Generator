// Scenes 5 to 8: f over f′ (why the sign changes at 3 but not at 0), worked example 1 (factorise and split,
// then test and classify), worked example 2 (the hike curve, which does not turn at 0).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, EquationStrip, FrameSvg, FunctionSimulator, HandTag, InnerSlot, MarkSpan, MistakeCard, PairedDerivativePanel, TaskStrip,
	kf,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue} from './common';
import {
	AMB, CurveLabel, DISPLAY, DOWN, FN, GREEN, HIKE, H_XTICKS, H_YTICKS, Klass, RecallChip, Ring, SignChart, Sup, TanLine, UP, VIOLET, WIN_H, WholeRows, gmap,
} from './parts';

// ---------- 5. why the sign changes at three but not at zero ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const under = cue(id, 'graphed underneath'), axis = cue(id, 'axis', 1), plus = cue(id, 'plus'), touches = cue(id, 'only touches'), factor = cue(id, 'The factor'), zero = cue(id, 'sides of zero'), unbroken = cue(id, 'unbroken'), enough = cue(id, 'enough');
	const X = kf(f, [[under, -1.5], [under + 140, 3.4]]);
	const P = {x: 40, y: 196, w: 1790, top: 380, bot: 340, gap: 10};
	const ML = gmap(P.x, P.y + P.top + P.gap, P.w, P.bot, {x: WIN_H.x, y: [-20, 20]});
	const pen: string[] = [];
	for (let k = 0; k <= 120; k++) {
		const x = -1.1 + (4.5 * k) / 120;
		const v = HIKE.df(x, {});
		if (v < -20 || v > 20) continue;
		const p = ML.pt(x, v);
		pen.push(`${pen.length ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`);
	}
	return (
		<>
			<TaskStrip text="Why it turns at 3 but not at 0" at={2} />
			<Enter at={-30} style={{position: 'absolute', left: 980, top: 86}}>
				<div style={{background: '#fffdf8', borderRadius: 16, padding: '6px 24px', boxShadow: '0 8px 18px rgba(60,45,20,0.10)', ...DISPLAY(46, INK, 800)}}>
					<span style={{color: VIOLET}}>f′(x)</span> = 4x<Sup>3</Sup> − 12x<Sup>2</Sup> = <InnerSlot on={f >= factor}>4x<Sup>2</Sup></InnerSlot><span style={{color: f >= zero ? AMB : INK}}>(x − 3)</span>
				</div>
			</Enter>
			<HandTag x={1180} y={196} text="never negative" at={factor + 10} size={38} color={INK_SOFT} />
			<HandTag x={1400} y={236} text="negative for x < 3" at={zero} size={38} role="k" />
			<PairedDerivativePanel x={P.x} y={P.y} width={P.w} heightTop={P.top} heightBottom={P.bot} gap={P.gap} windowX={WIN_H.x} yTop={WIN_H.y} yBottom={[-20, 20]}
				family={HIKE} timeline={[{frame: 0, x: X}]} traceFrom={-1.5} topColor={FN} topLabel="y = f(x)" bottomLabel="y = f′(x)"
				xTicks={H_XTICKS} yTopTicks={H_YTICKS} yBottomTicks={[-10, 10]} tints={{at: axis}}
				rings={[{x: 3, kind: 'cross', at: plus}, {x: 0, kind: 'touch', at: touches}]}
				overlay={() => <FrameSvg>{pen.length ? <DrawPath d={pen.join(' ')} at={unbroken} dur={40} color="rgba(107,79,160,0.35)" width={18} /> : null}</FrameSvg>} />
			<HandTag x={ML.pt(3.15, 0)[0]} y={ML.pt(0, -8)[1]} text="crosses: sign changes" at={plus + 6} size={38} color={UP} />
			<HandTag x={ML.pt(0.15, 0)[0]} y={ML.pt(0, 8)[1]} text="touches: sign stays" at={touches + 6} size={38} color={DOWN} />
			<Enter at={enough} style={{position: 'absolute', left: 700, top: 236, width: 640}}>
				<div style={{background: '#fffdf8', borderRadius: 16, padding: '10px 20px', border: `3px solid ${VIOLET}`, ...DISPLAY(34, INK, 700), whiteSpace: 'normal', lineHeight: 1.25}}>f′ unbroken: its sign changes only where f′ = 0. <b>One test value per interval.</b></div>
			</Enter>
		</>
	);
};

// ---------- 6 and 7: worked example 1 ----------
const C1: FnFamily = {f: u => 2 * u ** 3 - 9 * u * u + 12 * u - 3, df: u => 6 * u * u - 18 * u + 12};
const WIN_1 = {x: [-0.3, 3.3] as Range, y: [-4, 7] as Range};
const GW = {x: 40, y: 232, w: 840, h: 440};
const CH = {x: 96, y: 690, w: 1728};
const C1_EQ = <>f(x) = 2x<Sup>3</Sup> − 9x<Sup>2</Sup> + 12x − 3</>;
const Method: React.FC<{at: number[]}> = ({at}) => {
	const f = useCurrentFrame();
	const steps = ['1. Differentiate, factorise.', '2. Solve f′(x) = 0.', '3. Test one value per interval.', '4. Classify; y from f.'];
	return (
		<Card x={900} y={232} w={924} at={-30} pad="6px 22px 8px">
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>Method</div>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 20}}>
				{steps.map((s, i) => {
					const cur = f >= at[i] && (i === steps.length - 1 || f < at[i + 1]);
					return <div key={i} style={{...DISPLAY(30, f >= at[i] ? INK : INK_SOFT, 700), padding: '0 8px', margin: '0 -8px', borderRadius: 8, background: cur ? '#efe6d2' : undefined}}>{s}{f >= at[i] && !cur ? <span style={{color: GREEN}}> ✓</span> : null}</div>;
				})}
			</div>
		</Card>
	);
};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const first = cue(id, 'First differentiate'), fp = cue(id, 'f prime of x is six'), two1 = cue(id, 'minus two'), two2 = cue(id, 'equals two', 2), intervals = cue(id, 'intervals');
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WIN_1);
	return (
		<>
			<TaskStrip text="Find and classify the stationary points" at={-24} />
			<EquationStrip at={-30} y={150} size={64}><span style={{color: FN}}>{C1_EQ}</span></EquationStrip>
			<FunctionSimulator at={-30} x={GW.x} y={GW.y} width={GW.w} height={GW.h} window={WIN_1} family={C1} timeline={[{frame: 0, x: 1}]} color={FN}
				xTicks={[1, 2, 3]} yTicks={[-2, 2, 4, 6]} xLabel="" yLabel="y"
				overlay={() => <FrameSvg><TanLine M={M} X={1} Y={2} m={0} half={70} opacity={prog(f, two2, 12)} /><TanLine M={M} X={2} Y={1} m={0} half={70} opacity={prog(f, two2 + 6, 12)} /></FrameSvg>} />
			<SignChart x={CH.x} y={CH.y} w={CH.w} win={[-0.3, 3.3]} ticks={[0, 1, 2, 3]}
				boundaries={[{x: 1, at: intervals - 6}, {x: 2, at: intervals}]}
				cells={[{sign: 1, at: 1e6, test: 'x < 1', testAt: intervals + 6}, {sign: -1, at: 1e6, test: '1 < x < 2', testAt: intervals + 12}, {sign: 1, at: 1e6, test: 'x > 2', testAt: intervals + 18}]} />
			<WholeRows x={900} y={404} w={924} size={50} oldSize={42} gap={12} rows={[
				{left: 'f′(x)', right: <>6x<Sup>2</Sup> − 18x + 12</>, at: fp},
				{left: '', right: <><MarkSpan kind="circle" at={two1 + 8} width={4}>6</MarkSpan>(x − 1)(x − 2)</>, at: two1, keep: true},
				{left: 'f′(x) = 0', relation: 'when', right: <>x = 1 or x = 2</>, at: two2, keep: true},
			]} />
			<HandTag x={1560} y={500} text="common factor 6" at={two1 + 20} out={two2} size={38} color={INK} />
			<Card x={900} y={410} w={924} at={-30} out={fp - 6} pad="12px 26px 14px">
				<div style={DISPLAY(40, INK, 700)}>stationary points: where <span style={{color: VIOLET}}>f′(x) = 0</span></div>
				<div style={{...DISPLAY(40, INK, 700), marginTop: 8}}>nature: the <span style={{color: UP}}>sign</span> of <span style={{color: VIOLET}}>f′</span> on each side</div>
			</Card>
			<RecallChip x={900} y={590} w={924} at={-30} out={fp} size={32}>Year 11: power rule; factorise a quadratic</RecallChip>
			<Method at={[first, two2 - 10, 1e6, 1e6]} />
		</>
	);
};

export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const now = cue(id, 'Now test'), pos1 = cue(id, 'positive', 1), neg = cue(id, 'negative'), pos2 = cue(id, 'positive', 2), between = cue(id, 'in between'), pm = cue(id, 'Plus to minus'), minimum = cue(id, 'minimum'), useF = cue(id, 'use f'), f1 = cue(id, 'f of one'), one = cue(id, 'is one');
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WIN_1);
	return (
		<>
			<TaskStrip text="Test one value in each interval" at={-24} />
			<EquationStrip at={-30} y={150} size={64}><span style={{color: FN}}>{C1_EQ}</span></EquationStrip>
			<FunctionSimulator at={-30} x={GW.x} y={GW.y} width={GW.w} height={GW.h} window={WIN_1} family={C1} timeline={[{frame: 0, x: 1}]} color={FN}
				xTicks={[1, 2, 3]} yTicks={[-2, 2, 4, 6]} xLabel="" yLabel="y"
				overlay={() => <FrameSvg>
					<TanLine M={M} X={1} Y={2} m={0} half={70} /><TanLine M={M} X={2} Y={1} m={0} half={70} />
					<Ring p={M.pt(1, 2)} r={28} o={prog(f, one, 12)} /><Ring p={M.pt(2, 1)} r={28} o={prog(f, one + 6, 12)} />
				</FrameSvg>} />
			<SignChart x={CH.x} y={CH.y} w={CH.w} win={[-0.3, 3.3]} ticks={[0, 1, 2, 3]}
				boundaries={[{x: 1, at: -30}, {x: 2, at: -30}]}
				cells={[{sign: 1, at: pos1, test: <>f′(0) = 12</>, testAt: pos1 - 30}, {sign: -1, at: neg, test: <>f′(1.5) = −1.5</>, testAt: neg - 40}, {sign: 1, at: pos2, test: <>f′(3) = 12</>, testAt: pos2 - 40}]}
				nature={[{x: 1, text: '+ to −: local max', at: pm + 20}, {x: 2, text: '− to +: local min', at: minimum}]} />
			<MistakeCard x={130} y={250} w={430} at={useF + 6} out={one - 4} size={36} wrong={<>(1, 0) and (2, 0)</>} caption="y from f, not f′" />
			<Klass x={130} y={262} at={one} size={36}>local max (1, 2); local min (2, 1)</Klass>
			<Enter at={-30} style={{position: 'absolute', left: 900, top: 400}}><span style={DISPLAY(40, INK, 800)}>f′(x) = 6(x − 1)(x − 2)</span></Enter>
			<Enter at={between} style={{position: 'absolute', left: 900, top: 462}}>
				<div style={{...DISPLAY(40, UP, 800)}}>increasing: x &lt; 1 or x &gt; 2</div>
				<div style={{...DISPLAY(40, DOWN, 800)}}>decreasing: 1 &lt; x &lt; 2</div>
			</Enter>
			<Enter at={f1} style={{position: 'absolute', left: 900, top: 572}}><span style={DISPLAY(44, INK, 800)}>f(1) = 2 − 9 + 12 − 3 = 2</span></Enter>
			<Enter at={f1 + 30} style={{position: 'absolute', left: 900, top: 626}}><span style={DISPLAY(44, INK, 800)}>f(2) = 16 − 36 + 24 − 3 = 1</span></Enter>
			<HandTag x={920} y={560} text="only the sign matters" at={cue(id, 'Only the sign')} out={between} size={46} color={INK} />
			<HandTag x={920} y={624} text="easy values: 0, 1.5 and 3" at={now + 30} out={between} size={44} color={VIOLET} />
			<Method at={[-30, -30, now, pm]} />
		</>
	);
};

// ---------- 8. worked example 2: the curve that doesn't turn ----------
export const S08: React.FC = () => {
	const id = 'scene-08';
	const deriv = cue(id, 'Its derivative'), zeros = cue(id, 'is zero at'), t1 = cue(id, 'Test minus one'), t2 = cue(id, 'Test one'), four = cue(id, 'sixty-four'), mm = cue(id, 'Minus, then minus'), infl = cue(id, 'inflection'), mp = cue(id, 'Minus to plus'), seven = cue(id, 'twenty-seven');
	const M = gmap(GW.x, GW.y, GW.w, GW.h, WIN_H);
	return (
		<>
			<TaskStrip text="Find and classify the stationary points" at={-24} />
			<EquationStrip at={-30} y={150} size={64}><span style={{color: FN}}>f(x) = x<Sup>4</Sup> − 4x<Sup>3</Sup></span></EquationStrip>
			<HandTag x={560} y={196} text="the hike curve" at={-30} size={42} color={INK_SOFT} />
			<FunctionSimulator at={-30} x={GW.x} y={GW.y} width={GW.w} height={GW.h} window={WIN_H} family={HIKE} timeline={[{frame: 0, x: 0}]} color={FN}
				xTicks={H_XTICKS} yTicks={H_YTICKS} xLabel="" yLabel="y"
				overlay={() => <FrameSvg><Ring p={M.pt(0, 0)} r={28} /><Ring p={M.pt(3, -27)} r={28} /><TanLine M={M} X={0} Y={0} m={0} half={60} /><TanLine M={M} X={3} Y={-27} m={0} half={60} /></FrameSvg>} />
			<CurveLabel x={M.pt(-1.4, 0)[0]} y={M.pt(0, -12)[1]} at={mm} size={36} color={DOWN}>at 0: − 0 −</CurveLabel>
			<HandTag x={M.pt(0, 0)[0] + 30} y={M.pt(0, 0)[1] + 56} text="ledge" at={infl} size={38} color={INK} />
			<HandTag x={M.pt(3, 0)[0] + 40} y={M.pt(0, -24)[1]} text="creek" at={seven} size={38} color={INK} />
			<SignChart x={CH.x} y={CH.y} w={CH.w} win={[-1.5, 4.5]} ticks={[-1, 0, 1, 2, 3, 4]}
				boundaries={[{x: 0, at: zeros}, {x: 3, at: zeros + 8}]}
				cells={[{sign: -1, at: t1 + 30, test: <>f′(−1) = −16</>, testAt: t1}, {sign: -1, at: t2 + 30, test: <>f′(1) = −8</>, testAt: t2}, {sign: 1, at: four, test: <>f′(4) = 64</>, testAt: four - 20}]}
				nature={[{x: 0, text: '(0, 0): horizontal point of inflection', at: infl + 6}, {x: 3, text: '(3, −27): local minimum', at: seven}]} />
			<WholeRows x={900} y={404} w={924} size={46} oldSize={42} gap={10} rows={[
				{left: 'f′(x)', right: <>4x<Sup>3</Sup> − 12x<Sup>2</Sup> = 4x<Sup>2</Sup>(x − 3)</>, at: deriv, keep: true},
				{left: 'f′(x) = 0', relation: 'when', right: <>x = 0 or x = 3</>, at: zeros, keep: true},
				{left: 'f(0)', right: <>0</>, at: mp, keep: true},
				{left: 'f(3)', right: <>81 − 108 = −27</>, at: seven - 20, keep: true},
			]} />
			<MistakeCard x={130} y={250} w={460} at={infl + 30} size={34} wrong={<>(0, 0): local maximum</>} caption="same sign both sides: no turn" />
			<Method at={[-30, -30, -30, -30]} />
		</>
	);
};
