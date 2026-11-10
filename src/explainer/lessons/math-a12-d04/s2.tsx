// Scenes 5 to 8: the proof for any base, base ten (ln a underneath), the base slider towards 1, and the fold
// onto a base below one.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT} from '../../kit';
import {
	Card, CardTitle, DrawnMark, EquationStrip, FrameSvg, FunctionSimulator, HandTag, LOG_BASE_FAMILY, MarkSpan, MistakeCard, ParameterSlider,
	PreloadPlates, SceneHeading, TaskStrip, WorkingRows, MATH_ANSWER, MATH_MISTAKE, kf, vis,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, LN2, LN10} from './common';
import {
	AMB, Chip, CurveLabel, DISPLAY, Dot, F, Frac, GHOST, GUITAR, GuitarImg, Legend, Lg, METER, MeterImg, NAVY, OLIVE, VIOLET, WIN, gmap, logCurve,
} from './parts';

/** The proved rule, small, in a green frame (scenes 6 to 9). */
export const RuleBox: React.FC<{x: number; y: number; at?: number; size?: number; glow?: [number, number]}> = ({x, y, at = -30, size = 38, glow}) => {
	const f = useCurrentFrame();
	const g = glow ? vis(f, glow[0], glow[1], 10) : 0;
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
			<div style={{display: 'inline-block', background: g > 0 ? `rgba(220,239,226,${0.4 + 0.6 * g})` : '#fffdf8', border: `4px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '4px 18px', boxShadow: `0 10px 22px rgba(40,115,71,${0.12 + 0.2 * g})`, ...DISPLAY(size)}}>
				d/dx(<Lg b="a" /> x) = <Frac n="1" d={<>x ln a</>} />
			</div>
		</Enter>
	);
};

// ---------- 5. the proof for any base ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const pos = cue(id, 'The base has to be'), cant = cue(id, "can't be one"), r1 = cue(id, 'of a', 1), r2 = cue(id, 'of x', 3);
	const cm = cue(id, 'A constant multiple'), positive = cue(id, 'positive', 2), r4 = cue(id, 'of a', 4), check = cue(id, 'Check base e');
	const TH = {x: 96, y: 560, w: 560, h: 380};
	const T: FnKey[] = [{frame: 0, x: 2, yScale: 1 / LN2}];
	return (
		<>
			<TaskStrip text="Now the proof, for any base a" at={2} />
			<Legend />
			<EquationStrip at={-30} y={160} size={58}>Prove: d/dx(<Lg b="a" /> x) = <Frac n="1" d={<>x ln a</>} /></EquationStrip>
			<Enter at={pos} style={{position: 'absolute', left: 1180, top: 176}}>
				<div style={{display: 'inline-block', background: '#fffdf8', borderRadius: 16, padding: '6px 22px', border: `4px solid ${AMB}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', ...DISPLAY(44, '#7a4600')}}>
					x &gt; 0,  a &gt; 0,  <MarkSpan kind="box" at={r4 + 20} role="k">a ≠ 1</MarkSpan>
				</div>
			</Enter>
			<HandTag x={1600} y={280} text="see later" at={cant + 10} size={38} role="k" />
			<Card x={96} y={300} w={560} at={-30} pad="14px 24px 16px">
				<CardTitle>Year 11</CardTitle>
				<div style={DISPLAY(32, INK, 700)}>change of base, with base e:</div>
				<div style={{...DISPLAY(38, INK, 800), marginTop: 2}}><Lg b="a" /> x = (ln x) ÷ (ln a)</div>
				<div style={{height: 2, background: '#ede4d3', margin: '10px 0'}} />
				<div style={DISPLAY(32, INK, 700)}>constant multiple rule:</div>
				<div style={{...DISPLAY(38, INK, 800), marginTop: 2}}>d/dx(<span style={{color: AMB}}>k</span>·f) = <span style={{color: AMB}}>k</span>·f′</div>
			</Card>
			{/* thumbnail: the stretched triangle from scene 4 */}
			<Card x={TH.x} y={TH.y} w={TH.w} h={TH.h} at={-30} pad="0"><div /></Card>
			<FunctionSimulator x={TH.x + 10} y={TH.y + 4} width={TH.w - 20} height={TH.h - 70} window={{x: [-0.3, 5], y: [-1.5, 3]}} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T} color={NAVY} curveWidth={5}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1, 2]} xLabel="" yLabel=""
				curves={[logCurve(Math.E, {color: GHOST, dash: '10 8', width: 4})]} point={{at: -30, color: NAVY, r: 10}} tangent={{at: -30, halfLength: 120}}
				triangle={{run: 2, at: -30, labels: {first: () => 'run 2', second: () => 'rise × c'}}} />
			<Enter at={-30} style={{position: 'absolute', left: TH.x + 24, top: TH.y + TH.h - 62}}><span style={DISPLAY(32, INK_SOFT, 700)}>every slope × <span style={{color: AMB}}>c</span></span></Enter>
			<HandTag x={TH.x + 330} y={TH.y + TH.h - 40} text="c = 1/ln a" at={r2 + 10} size={40} role="k" />
			<WorkingRows x={720} y={300} w={1110} size={60} oldSize={40} gap={12} rows={[
				{left: <><Lg b="a" /> x</>, right: <Frac n="ln x" d="ln a" />, at: r1},
				{right: <><F a="a" slot /> × ln x</>, at: r2},
				{left: <>d/dx(<Lg b="a" /> x)</>, right: <><F a="a" /> × d/dx(ln x)</>, at: cm},
				{right: <><F a="a" /> × <Frac n="1" d="x" /></>, at: positive},
				{right: <Frac n="1" d={<>x ln a</>} />, at: r4, answer: true},
			]} />
			<HandTag x={1360} y={480} text="a number, because a is fixed" at={r2 + 14} out={cm} size={40} role="k" />
			<HandTag x={1360} y={600} text="last video, x > 0" at={positive + 12} out={r4} size={38} color={INK_SOFT} />
			<Enter at={r4 + 30} style={{position: 'absolute', left: 720, top: 768}}>
				<div style={{display: 'inline-block', background: '#fffdf8', border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '4px 22px', ...DISPLAY(44)}}>
					d/dx(<Lg b="a" /> x) = <Frac n="1" d={<>x ln a</>} />,  x &gt; 0, a &gt; 0, a ≠ 1
				</div>
			</Enter>
			<Enter at={check} style={{position: 'absolute', left: 724, top: 894}}><span style={DISPLAY(42, INK, 700)}>a = e: ln e = 1, so <Frac n="1" d={<>x ln e</>} /> = <Frac n="1" d="x" /> <span style={{color: MATH_ANSWER}}>✓</span></span></Enter>
		</>
	);
};

// ---------- 6. base ten: ln a goes underneath ----------
const G6 = {x: 370, y: 150, w: 910, h: 800};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const approx = cue(id, 'point four three', 1), squash = cue(id, 'squashes'), three2 = cue(id, 'point four three', 2), instead = cue(id, 'instead'), but = cue(id, 'But log base ten'), under = cue(id, 'underneath');
	const M = gmap(G6.x, G6.y, G6.w, G6.h);
	const s0 = squash, s1 = squash + 36;
	const T: FnKey[] = [{frame: 0, x: 1, yScale: 1}, {frame: s0, yScale: 1}, {frame: s1, yScale: 1 / LN10}];
	return (
		<>
			<PreloadPlates plates={[METER]} />
			<SceneHeading text="Base ten: where does ln a go?" at={2} />
			<Legend />
			<MeterImg x={96} y={190} w={250} />
			<CurveLabel x={100} y={392} size={36} color={OLIVE}>bels: <Lg b="10" /></CurveLabel>
			<FunctionSimulator x={G6.x} y={G6.y} width={G6.w} height={G6.h} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T}
				color={s => (s.yScale < 0.7 ? OLIVE : INK)}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(2, {color: 'rgba(34,67,122,0.3)', width: 6}), logCurve(10, {color: OLIVE, width: 7}), {...logCurve(Math.E, {color: GHOST, dash: '14 10', width: 5}), at: s0}]}
				point={{at: three2 - 6}} tangent={{at: three2, halfLength: 200}}
				lines={[{slope: () => LN10, at: instead + 6, out: under - 6, color: MATH_MISTAKE, dash: '12 10', halfLength: 230}]}
				readout={{x: 1310, y: 478, width: 514, at: three2, inline: true, rows: [
					{label: 'x', value: s => s.X},
					{label: <><Lg b="10" /> x gradient</>, value: s => s.slope, role: 'gradient', digits: 3},
					{label: 'ln x gradient here', value: s => 1 / s.X, role: 'gradient', digits: 3},
				]}}
				/>
			<CurveLabel x={M.pt(3.0, 1.15)[0]} y={M.pt(3.0, 1.15)[1] - 30} color={INK} size={40} out={s0}>y = ln x</CurveLabel>
			<CurveLabel x={M.pt(3.0, 1.15)[0]} y={M.pt(3.0, 1.15)[1] - 30} at={s0 + 10} color={GHOST} size={34}>ln x (dashed)</CurveLabel>
			<CurveLabel x={M.pt(3.3, 0.55)[0]} y={M.pt(3.3, 0.55)[1] - 2} color={OLIVE} size={40}>y = <Lg b="10" /> x</CurveLabel>
			<CurveLabel x={M.pt(2.4, 1.9)[0]} y={M.pt(2.4, 1.9)[1] - 30} color="rgba(34,67,122,0.6)" size={32}><Lg b="2" /> x</CurveLabel>
			<HandTag x={M.pt(1.6, 0)[0]} y={M.pt(0, -0.7)[1]} text="factor < 1: squash" at={s0 + 6} out={instead} size={44} role="k" />
			<HandTag x={M.pt(1.75, 0)[0]} y={M.pt(0, 1.75)[1]} text="too steep!" at={instead + 30} out={under} size={48} color={MATH_MISTAKE} />
			<Chip x={M.pt(-0.42, 0)[0]} y={M.pt(0, 2.95)[1]} at={instead} out={under + 6} size={40} color={VIOLET}><span style={{color: VIOLET}}>slope = ln 10 ≈ 2.30?</span></Chip>
			{/* right column */}
			<RuleBox x={1310} y={150} size={38} />
			<Card x={1310} y={262} w={514} at={-30} pad="12px 24px 14px">
				<div style={DISPLAY(44)}><Lg b="10" /> x = <F a="10" slot /> × ln x</div>
				<Enter at={approx} dy={8}><div style={{...DISPLAY(30, INK_SOFT, 700), marginTop: 6}}>1/ln 10 ≈ 0.434  (ln 10 ≈ 2.303)</div></Enter>
			</Card>
			<MistakeCard x={1310} y={736} w={514} at={but} size={40} wrong={<>d/dx(<Lg b="10" /> x) = <Frac n="ln 10" d="x" /></>} caption="ln a goes underneath" compare={<>so d/dx(<Lg b="10" /> x) = <Frac n="1" d="x ln 10" /></>} />
		</>
	);
};

// ---------- 7. turning the base towards one ----------
const G7 = {x: 96, y: 330, w: 1240, h: 640};
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const eOne = cue(id, 'exactly one'), two = cue(id, 'At base two'), four = cue(id, 'one point four four'), close = cue(id, 'As the base');
	const shoots = cue(id, 'shoots up'), half = cue(id, 'ten and a half'), notAllowed = cue(id, 'not allowed'), oneTo = cue(id, 'One to any power'), agrees = cue(id, 'The formula agrees');
	const M = gmap(G7.x, G7.y, G7.w, G7.h);
	const T: FnKey[] = [{frame: 0, x: 1, p: {c: 10}}, {frame: eOne - 36, p: {c: 10}}, {frame: eOne, p: {c: Math.E}}, {frame: four - 40, p: {c: Math.E}}, {frame: four, p: {c: 2}}, {frame: close + 40, p: {c: 2}}, {frame: half, p: {c: 1.1}}];
	const a = Math.exp(kf(f, T.map(k => [k.frame, Math.log(k.p!.c)] as const)));
	return (
		<>
			<PreloadPlates plates={[GUITAR]} />
			<SceneHeading text="Turn the base towards one" at={2} />
			<Legend />
			<ParameterSlider x={150} y={196} width={760} symbol="a" role="height" value={a} min={1} max={10} digits={2}
				ticks={[{value: 2, label: '2'}, {value: Math.E, label: 'e'}, {value: 5, label: '5'}, {value: 10, label: '10'}]}
				excluded={{value: 1, label: 'a = 1 not allowed', gap: 0.1, at: -30}} />
			<FunctionSimulator x={G7.x} y={G7.y} width={G7.w} height={G7.h} window={WIN} family={LOG_BASE_FAMILY} timeline={T} logParams={['c']} color={NAVY}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(Math.E, {color: GHOST, dash: '14 10', width: 5})]}
				point={{at: -30}} tangent={{at: -30, halfLength: 190}}
				readout={{x: 1380, y: 176, width: 444, at: -30, rows: [
					{label: 'factor 1/ln a', value: s => 1 / Math.log(s.params.c), role: 'k', digits: 3},
					{label: 'gradient at x = 1', value: s => s.slope, role: 'gradient', digits: 3, mark: {kind: 'circle', at: shoots, out: notAllowed, role: 'gradient'}},
					{label: 'ln a', value: s => Math.log(s.params.c), digits: 3, role: 'inner'},
				]}} />
			<CurveLabel x={M.pt(-0.42, 2.6)[0]} y={M.pt(0, 2.6)[1] - 30} color={NAVY} size={46}>y = <Lg b={a < 1.12 ? '1.1' : Math.abs(a - Math.E) < 0.01 ? 'e' : Math.abs(a - Math.round(a)) < 0.01 ? String(Math.round(a)) : a.toFixed(2)} /> x</CurveLabel>
			<CurveLabel x={M.pt(3.8, 1.25)[0]} y={M.pt(3.8, 1.25)[1] + 6} color={GHOST} size={32}>ln x (dashed)</CurveLabel>
			<HandTag x={M.pt(1.4, 0)[0]} y={M.pt(0, 2.6)[1]} text="a = e: ln x itself" at={eOne + 6} out={two} size={44} color={INK} />
			<HandTag x={M.pt(1.3, 0)[0]} y={M.pt(0, 2.6)[1]} text="shoots up" at={shoots} out={agrees} size={52} color={VIOLET} />
			<Chip x={M.pt(1.6, 0)[0]} y={M.pt(0, -0.55)[1]} at={oneTo} size={42} color={MATH_MISTAKE}>1<sup style={{fontSize: '0.6em'}}>y</sup> = 1 for every y: no <Lg b="1" /></Chip>
			<Chip x={M.pt(1.6, 0)[0]} y={M.pt(0, -1.65)[1]} at={agrees} size={42} color={MATH_MISTAKE}>1/ln 1 = 1/0: undefined</Chip>
			<Enter at={-30} style={{position: 'absolute', left: 1380, top: 600}}>
				<div style={{display: 'inline-block', background: '#fffdf8', borderRadius: 16, padding: '6px 20px', border: `4px solid ${AMB}`, ...DISPLAY(40, '#7a4600')}}>
					x &gt; 0, a &gt; 0, <MarkSpan kind="box" at={agrees + 8} role="mistake">a ≠ 1</MarkSpan>
				</div>
			</Enter>
			<GuitarImg x={1400} y={720} w={400} opacity={0.35 + 0.65 * vis(f, four - 10, close + 30)} />
			<HandTag x={1600} y={912} text="a = 2: octaves" at={four} out={close + 40} size={42} color={NAVY} anchor="middle" />
		</>
	);
};

// ---------- 8. bases between zero and one ----------
const G8 = {x: 96, y: 170, w: 1240, h: 800};
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const neg = cue(id, 'negative'), m144 = cue(id, 'minus one point four four', 1), axis = cue(id, 'x axis'), falls = cue(id, 'falls'), m144b = cue(id, 'minus one point four four', 2), same = cue(id, 'The same formula');
	const M = gmap(G8.x, G8.y, G8.w, G8.h);
	const f0 = axis - 34, f1 = axis + 16;
	const T: FnKey[] = [{frame: 0, x: 1, yScale: 1 / LN2}, {frame: f0, yScale: 1 / LN2}, {frame: f1, yScale: -1 / LN2}];
	const ys = kf(f, [[f0, 1 / LN2], [f1, -1 / LN2]]);
	return (
		<>
			<SceneHeading text="A base below one, like a half" at={2} />
			<Legend />
			<FunctionSimulator x={G8.x} y={G8.y} width={G8.w} height={G8.h} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T}
				color={s => (s.yScale > 0 ? NAVY : INK)}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(Math.E, {color: GHOST, dash: '14 10', width: 5}), {...logCurve(2, {color: 'rgba(34,67,122,0.55)', dash: '14 10', width: 5}), at: f0}]}
				point={{at: -30, color: NAVY}} tangent={{at: m144b - 4, halfLength: 190}}
				readout={{x: 1380, y: 520, width: 444, at: -30, title: 'gradient', rows: [
					{label: 'at x = 1', value: s => s.slope, role: 'gradient', digits: 3, glow: [m144b, m144b + 80]},
					{label: 'at x = 2', value: s => s.yScale / 2, role: 'gradient', digits: 3},
				]}}
				overlay={() => (
					<FrameSvg>
						{[0.5, 2, 4].map(X => {
							const o = vis(f, f0 - 4, f1 + 50);
							const [ax, ay0] = M.pt(X, Math.log(X) / LN2), [, ay1] = M.pt(X, -Math.log(X) / LN2);
							const [, ay] = M.pt(X, ys * Math.log(X));
							const dir = ay1 < ay0 ? -1 : 1;
							return <g key={X} opacity={o}>
								<line x1={ax + 24} x2={ax + 24} y1={ay0} y2={ay1 - dir * 4} stroke={AMB} strokeWidth={5} strokeLinecap="round" />
								<path d={`M${ax + 14},${ay1 - dir * 14} L${ax + 24},${ay1} L${ax + 34},${ay1 - dir * 14}`} fill="none" stroke={AMB} strokeWidth={5} strokeLinecap="round" />
								<Dot p={[ax, ay]} color={AMB} r={11} />
							</g>;
						})}
						{f >= falls ? <DrawnMark mark={{kind: 'arrow', from: M.pt(1.5, -1.05), to: M.pt(4.4, -2.55), bend: 0.08}} at={falls} color={INK} width={5} /> : null}
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(2.8, 2.1)[0]} y={M.pt(2.8, 2.1)[1] - 30} color={NAVY} size={42} out={f0}>y = <Lg b="2" /> x</CurveLabel>
			<CurveLabel x={M.pt(2.8, 2.1)[0]} y={M.pt(2.8, 2.1)[1] - 30} at={f1 + 6} color="rgba(34,67,122,0.75)" size={34}><Lg b="2" /> x (dashed)</CurveLabel>
			<CurveLabel x={M.pt(3.0, -1.45)[0]} y={M.pt(3.0, -1.45)[1] - 6} at={f1 + 6} color={INK} size={46}>y = <Lg b="½" /> x</CurveLabel>
			<CurveLabel x={M.pt(3.9, 1.3)[0]} y={M.pt(3.9, 1.3)[1] + 6} color={GHOST} size={32}>ln x (dashed)</CurveLabel>
			<HandTag x={M.pt(0.6, 0)[0]} y={M.pt(0, 2.5)[1] - 120} text="flips" at={f0 + 10} out={falls + 60} size={56} role="k" />
			<HandTag x={M.pt(1.7, 0)[0]} y={M.pt(0, -2.75)[1]} text="decreasing for all x > 0" at={falls + 14} size={44} color={INK} />
			<Card x={1380} y={160} w={444} at={-30} pad="12px 22px 14px">
				<div style={DISPLAY(42)}><Lg b="½" /> x = <F a="½" slot /> × ln x</div>
				<Enter at={neg} dy={8}><div style={{...DISPLAY(30, INK_SOFT, 700), marginTop: 6}}>ln ½ ≈ −0.693</div></Enter>
				<Enter at={m144} dy={8}><div style={{...DISPLAY(30, INK_SOFT, 700)}}>1/ln ½ ≈ −1.443</div></Enter>
			</Card>
			<Chip x={1380} y={410} at={m144 + 14} size={44} color={AMB}><span style={{color: AMB}}>factor &lt; 0</span></Chip>
			<RuleBox x={1380} y={786} size={36} glow={[same, 99999]} />
			<HandTag x={1386} y={900} text="a = ½: 1/(x ln ½) < 0" at={same + 10} size={38} role="k" />
		</>
	);
};

