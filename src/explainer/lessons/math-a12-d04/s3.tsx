// Scenes 9 to 12: the worked example with the guitar's return, the memory aid, attempt 1 and its feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, Card, EquationStrip, FrameSvg, FunctionSimulator, GivensCard, GivensStrip, HandTag, LOG_BASE_FAMILY, LiveReadoutBoard, MarkSpan, MistakeCard,
	PreloadPlates, QuestionCard, RolesOn, TaskStrip, WorkingRows, MATH_ANSWER, smooth, } from '../../math/studio';
import type {FnKey} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold, LN2} from './common';
import {
	AMB, AttemptStage, CurveLabel, DISPLAY, F, Frac, GHOST, GUITAR, GuitarImg, Legend, Lg, METER, MeterImg, NAVY, OLIVE, QAxes, TanLine, VIOLET, gmap, logCurve,
} from './parts';
import {RuleBox} from './s2';

// ---------- 9. worked example: log2 x, and the guitar returns ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const four = cue(id, 'equals four'), r1 = cue(id, 'log of two'), r2 = cue(id, 'At x equals four', 2), ans = cue(id, 'three six one'), measured = cue(id, "That's the slope"), guitar = cue(id, 'On the guitar'), quarter = cue(id, 'only a quarter');
	// Right column graph: tall until the guitar returns, then it moves under the guitar and its readout board.
	const mv = smooth(prog(f, guitar, 30));
	const GW = {x: 1250, y: 150 + (634 - 150) * mv, w: 574, h: 520 - (520 - 330) * mv};
	const win = {x: [-0.3, 5] as Range, y: [-1.5, 3] as Range};
	const M = gmap(GW.x, GW.y, GW.w, GW.h, win);
	const T: FnKey[] = [{frame: 0, x: 4}];
	return (
		<>
			<PreloadPlates plates={[GUITAR]} />
			<TaskStrip text="Differentiate, then find the gradient at x = 4" at={-24} />
			<Legend />
			<EquationStrip at={-30} y={164} size={66}>y = <Lg b="2" /> x</EquationStrip>
			<RuleBox x={470} y={178} size={38} />
			<GivensCard x={96} y={300} w={440} at={-30} title="Givens" size={48} lines={[
				{content: <>a = 2</>, at: -30, glow: [r1, r2]},
				{content: <>factor <F a="2" /></>, at: -30, role: 'k', note: 'from the base 2'},
				{content: <>x = 4</>, at: four, glow: [r2, ans + 30]},
			]} />
			<Card x={576} y={300} w={650} at={-30} out={r1 - 8} pad="14px 28px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Plan</div>
				{[<>1. Read off the base a.</>, <>2. Use the rule: <Frac n="1" d={<>x ln a</>} /></>, <>3. Substitute x = 4.</>].map((t, i) => (
					<div key={i} style={{...DISPLAY(40, INK, 700), padding: '2px 12px', margin: '6px -12px 0', borderRadius: 10, background: i === 0 ? '#efe6d2' : undefined}}>{t}</div>
				))}
			</Card>
			<Enter at={-30} out={r1 - 8} style={{position: 'absolute', left: 576, top: 600}}>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginBottom: 8}}>The rule we just proved:</div>
				<div style={{display: 'inline-block', background: '#fffdf8', border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '4px 22px', ...DISPLAY(54)}}>d/dx(<Lg b="a" /> x) = <Frac n="1" d={<>x ln a</>} /></div>
			</Enter>
			<WorkingRows x={576} y={306} w={650} size={56} oldSize={40} gap={14} rows={[
				{left: 'dy/dx', right: <Frac n="1" d={<>x ln 2</>} />, at: r1},
				{left: <>at x = 4</>, right: <Frac n="1" d={<>4 ln 2</>} />, at: r2},
				{left: 'dy/dx', right: <Frac n="1" d={<>4 ln 2</>} />, at: ans, answer: true},
			]} />
			<Enter at={ans + 16} style={{position: 'absolute', left: 980, top: 596}}><span style={DISPLAY(40, INK_SOFT, 700)}>≈ 0.361</span></Enter>
			<MistakeCard x={96} y={786} w={1126} at={ans + 40} size={44} wrong={<>dy/dx = <Frac n="ln 2" d="x" />, so 0.173 at x = 4</>} caption="ln a goes underneath" />
			{/* right column: the graph, then the guitar and the climbing rates */}
			<FunctionSimulator x={GW.x} y={GW.y} width={GW.w} height={GW.h} window={{x: win.x, y: win.y}} family={LOG_BASE_FAMILY} baseParams={{c: 2}} timeline={T} color={NAVY} curveWidth={6}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1, 2]} xLabel="x" yLabel="y"
				point={{at: -30, color: NAVY}} tangent={{at: r2, halfLength: 150}}
				overlay={g => <HandTag x={g.pt[0] - 20} y={g.pt[1] + 56} text="slope here?" at={-30} out={r2} size={38} color={INK_SOFT} anchor="end" />} />
			<CurveLabel x={M.pt(0.3, 2.2)[0]} y={M.pt(0.3, 2.2)[1] - 24} color={NAVY} size={38}>y = <Lg b="2" /> x</CurveLabel>
			<LiveReadoutBoard x={1250} y={690} width={574} at={ans} out={guitar} inline rows={[{label: 'gradient at x = 4', value: 1 / (4 * LN2), role: 'gradient', digits: 3, glow: [measured, guitar]}]} />
			<HandTag x={1262} y={830} text="the slope we measured ✓" at={measured} out={guitar} size={40} color={MATH_ANSWER} />
			<Enter at={guitar} style={{position: 'absolute', inset: 0}}>
				<GuitarImg x={1250} y={156} w={574} />
			</Enter>
			<LiveReadoutBoard x={1250} y={392} width={574} at={guitar + 10} title="Pitch climbing rate" rows={[
				{label: 'open string, 110 Hz', value: 1 / (110 * LN2), digits: 4, role: 'gradient', unit: 'octaves per Hz'},
				{label: 'concert A, 440 Hz (x = 4)', value: 1 / (440 * LN2), digits: 4, role: 'gradient', unit: 'octaves per Hz', glow: [quarter, 99999]},
			]} />
			<HandTag x={1236} y={560} text="¼ as much: 1/x at work" at={quarter} size={44} role="k" anchor="end" marks={[{kind: 'brace', x: 1244, y1: 420, y2: 610, facing: 'left'}]} markAt={quarter - 4} />
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const divide = cue(id, 'Divide the curve'), slope = cue(id, 'divide the slope'), logA = cue(id, 'Log base a of x'), its = cue(id, 'So its slope'), negative = cue(id, 'negative', 2);
	const s0 = divide + 4, s1 = divide + 34, f0 = negative - 20, f1 = negative + 12;
	const T: FnKey[] = [{frame: 0, x: 2, yScale: 1}, {frame: s0, yScale: 1}, {frame: s1, yScale: 1 / LN2}, {frame: f0, yScale: 1 / LN2}, {frame: f1, yScale: -1 / LN2}];
	const GX = 230, GY = 236, GWd = 560, GH = 620;
	const keys: {icon: React.ReactNode; text: React.ReactNode; at: number; color: string}[] = [
		{icon: <GuitarImg x={0} y={24} w={180} />, text: <><Lg b="2" />: octaves, factor <F a="2" /> ≈ 1.44</>, at: logA, color: NAVY},
		{icon: <MeterImg x={44} y={26} w={92} />, text: <><Lg b="10" />: bels, factor <F a="10" /> ≈ 0.43</>, at: its, color: OLIVE},
	];
	return (
		<>
			<PreloadPlates plates={[GUITAR, METER]} />
			<TaskStrip text="A way to remember it" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 170, top: 168, width: 1580, height: 772, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 218, top: 190}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT}}>Memory aid</span></div>
			<FunctionSimulator x={GX} y={GY} width={GWd} height={GH} window={{x: [-0.3, 5], y: [-3, 3]}} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T}
				color={s => (s.yScale > 1.2 ? NAVY : s.yScale < -0.5 ? INK : INK)} curveWidth={6}
				xTicks={[1, 2, 3, 4]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(Math.E, {color: INK, width: 5}), {...logCurve(2, {color: NAVY, width: 6}), out: f0}, {...logCurve(2, {color: 'rgba(43,63,115,0.55)', dash: '12 9', width: 4}), at: f0}, logCurve(10, {color: OLIVE, width: 6})]}
				point={{at: slope - 6, color: VIOLET}} tangent={{at: slope, halfLength: 120}}
				triangle={{run: 2, at: slope + 6, labels: {first: () => 'run 2', second: (len, s) => (s.yScale > 1.2 ? 'rise ÷ ln 2' : s.yScale < -1.2 ? 'rise ÷ ln ½' : `rise ${len.toFixed(2)}`)}}} />
			<div style={{position: 'absolute', left: 840, top: 250}}>
				<HandText text="Divide the curve," at={-10} size={78} color={INK} cps={26} />
			</div>
			<div style={{position: 'absolute', left: 840, top: 340}}>
				<HandText text="divide the slope." at={30} size={78} color={VIOLET} cps={26} />
			</div>
			<Enter at={-30} style={{position: 'absolute', left: 844, top: 462}}><span style={DISPLAY(46)}><Lg b="a" /> x = ln x ÷ <span style={{color: AMB}}>ln a</span></span></Enter>
			<Enter at={-30} style={{position: 'absolute', left: 844, top: 532}}><span style={DISPLAY(46)}>so slope = <Frac n="1" d="x" /> ÷ <span style={{color: AMB}}>ln a</span></span></Enter>
			<Enter at={-30} style={{position: 'absolute', left: 1384, top: 548}}><span style={DISPLAY(30, INK_SOFT, 700)}>x &gt; 0, a &gt; 0, a ≠ 1</span></Enter>
			<div style={{position: 'absolute', left: 844, right: 200, top: 640, height: 2, background: 'rgba(60,45,20,0.14)'}} />
			{keys.map((k, i) => {
				const on = 1;
				return (
					<div key={i} style={{position: 'absolute', left: 844, top: 660 + i * 126, width: 880, height: 120}}>
						<div style={{position: 'absolute', left: 0, top: 0, width: 180, height: 120, boxShadow: prog(f, k.at, 10) > 0 && f < k.at + 60 ? '0 0 0 4px #f8e8c8' : undefined, borderRadius: 14}}>{k.icon}</div>
						<div style={{position: 'absolute', left: 200, top: 28, opacity: on, ...DISPLAY(40, k.color)}}>{k.text}</div>
					</div>
				);
			})}
			<HandTag x={GX + 300} y={GY + GH - 30} text="ln a < 0: it flips" at={negative + 8} size={44} role="k" />
			<CurveLabel x={GX + 330} y={GY + 76} color={NAVY} size={38} out={f0}><Lg b="2" /> x: × 1.44</CurveLabel>
			<CurveLabel x={GX + 410} y={GY + 150} color={INK} size={34}>ln x</CurveLabel>
			<CurveLabel x={GX + 250} y={GY + 296} color={OLIVE} size={38}><Lg b="10" /> x: × 0.43</CurveLabel>
		</>
	);
};

// ---------- 11. attempt 1 ----------
export const Q1: React.FC<{u?: {five: number; two: number}}> = ({u}) => (
	<div>Differentiate y = {u ? <MarkSpan kind="underline" at={u.five} role="k"><Lg b="5" /> x</MarkSpan> : <><Lg b="5" /> x</>}, and find the exact gradient of the curve at {u ? <MarkSpan kind="underline" at={u.two}>x = 2</MarkSpan> : 'x = 2'}.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	const pause = cue(id, 'Pause here');
	return (
		<AttemptStage hold={hold(id)} pauseAt={pause} given={[<>y = <Lg b="5" /> x</>, <>gradient at x = 2</>, <>exact value</>]}
			picture={<QAxes w={720} h={380} markX={2} tag="gradient here?" />}>
			<Q1 />
		</AttemptStage>
	);
};

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const five = cue(id, 'The base is five'), r1 = cue(id, 'log of five', 1), two = cue(id, 'At x equals two'), ans = cue(id, 'point three one'), bigger = cue(id, 'Five is bigger'), onTop = cue(id, 'on top');
	const G = {x: 1150, y: 330, w: 674, h: 590};
	const win = {x: [-0.3, 4.5] as Range, y: [-1.5, 2] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, win);
	const T: FnKey[] = [{frame: 0, x: 2}];
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= five}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460}>
					<Q1 u={{five: r1, two}} />
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={96} y={256} size={38} maxW={1000} items={[
				{content: <>y = <Lg b="5" /> x</>, at: 6},
				{content: 'a = 5', at: five + 10},
				{content: 'x = 2', at: two},
				{content: 'exact', at: two + 10},
			]} />
			<WorkingRows x={96} y={360} w={1020} size={58} oldSize={44} gap={18} rows={[
				{left: 'dy/dx', right: <>1 ÷ (x <span style={{color: AMB}}>ln 5</span>)</>, at: r1},
				{left: <>at x = 2</>, right: <Frac n="1" d={<>2 ln 5</>} />, at: ans - 30, answer: true},
			]} />
			<Enter at={ans} style={{position: 'absolute', left: 760, top: 520}}><span style={DISPLAY(40, INK_SOFT, 700)}>≈ 0.311</span></Enter>
			<Card x={96} y={640} w={1020} at={bigger} pad="10px 24px 12px">
				<div style={DISPLAY(40, INK, 700)}>5 &gt; e, so flatter than ln x:</div>
				<div style={DISPLAY(40, INK, 700)}>0.311 &lt; ½ (the slope of ln x at x = 2)</div>
			</Card>
			<MistakeCard x={96} y={800} w={1020} at={onTop} size={44} wrong={<>ln 5 ÷ 2 ≈ 0.805</>} caption="ln a goes underneath" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={{x: win.x, y: win.y}} family={LOG_BASE_FAMILY} baseParams={{c: 5}} timeline={T} color={INK}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1, 2]} xLabel="x" yLabel="y"
				curves={[{...logCurve(Math.E, {color: GHOST, dash: '12 9', width: 5}), at: bigger}]}
				point={{at: -30}} tangent={{at: bigger + 8, halfLength: 170}}
				overlay={() => (
					<FrameSvg>
						<TanLine M={M} X={2} Y={Math.log(2)} m={0.5} half={170} color="#9a86c4" opacity={prog(f, bigger + 16, 12)} />
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(2.7, 0.6)[0]} y={M.pt(2.7, 0.6)[1] + 4} color={INK} size={40}>y = <Lg b="5" /> x</CurveLabel>
			<CurveLabel x={M.pt(2.6, 1.6)[0]} y={M.pt(2.6, 1.6)[1] - 40} at={bigger} color={GHOST} size={34}>ln x (dashed)</CurveLabel>
			<HandTag x={M.pt(0.2, 0)[0]} y={M.pt(0, 1.75)[1]} text="flatter than ln x" at={bigger + 20} size={40} color={VIOLET} />
		</>
	);
};

