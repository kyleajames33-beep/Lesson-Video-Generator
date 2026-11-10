// Scenes 1 to 4: the guitar and meter anchor with three log curves, the measured slope ratio, the heights and
// the stretch of ln x onto log2 x, and the stretch carrying the tangent triangle.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, DrawnMark, FrameSvg, FunctionSimulator, HandTag, LOG_BASE_FAMILY, LiveReadoutBoard, MATHS_SHARED_ANCHORS, PlateReadout,
	PreloadPlates, SceneHeading, WorkingRows, fmtNum, kf, smooth, vis,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, LN2} from './common';
import {
	AMB, Chip, CurveLabel, DISPLAY, Dot, F, Frac, GHOST, GUITAR, GuitarImg, HandNote, Legend, Lg, METER, NAVY, OLIVE, RecallChip, TanLine, VIOLET, WIN, gmap, lg, logCurve,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook: octaves, bels, three bases through one point ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const logs = cue(id, 'Logs like'), octave = cue(id, 'octave'), soThe = cue(id, 'So the octaves'), make = cue(id, 'Make a sound'), decibels = cue(id, 'decibels');
	const add = cue(id, "Let's add"), all = cue(id, 'All three'), one4 = cue(id, 'one', 4), steepest = cue(id, 'steepest'), flattest = cue(id, 'flattest'), much = cue(id, 'much');
	// Graph: d03's final frame (math-a12-d03 scene 16: 826 x 820 at (1000, 170), window x and y from -3 to 5)
	// eases into this lesson's window as the plates enter.
	const t = smooth(prog(f, logs, 40));
	const gx = 1000, gw = lerp(826, 830, t), gy = lerp(170, 150, t), gh = lerp(820, 790, t);
	const W = {x: [lerp(-3, -0.5, t), 5] as [number, number], y: [-3, lerp(5, 3, t)] as [number, number]};
	const M = gmap(gx, gy, gw, gh, W);
	const join = 1 - prog(f, logs, 14);
	const lab = (a: [number, number], b: [number, number]): [number, number] => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
	const lnLab = lab([1560, 560], [M.pt(3.15, 0.95)[0], M.pt(3.15, 0.95)[1] - 10]), l2Lab = lab([1440, 330], [M.pt(2.5, 2.1)[0], M.pt(2.5, 2.1)[1] - 30]);
	// One timeline drives the guitar readouts and the navy point (x = frequency ratio).
	const xn = kf(f, [[octave - 6, 1], [octave + 36, 2], [soThe + 40, 2], [soThe + 100, 4], [all, 4], [all + 40, 1]]);
	const T: FnKey[] = [{frame: 0, x: xn}];
	// The olive point and the meter (x = power ratio).
	const xo = kf(f, [[add + 30, 1], [add + 80, 5], [all, 5], [all + 40, 1]]);
	const P = f < add + 30 ? Math.pow(10, kf(f, [[make + 30, 0], [decibels, 1], [add - 24, 1], [add + 10, 0]])) : xo;
	const dB = 10 * Math.log10(P);
	const oliveMax = kf(f, [[add, 0.002], [add + 40, 5]]);
	const oliveO = prog(f, add, 8);
	const [rx, ry] = M.pt(1, 0);
	const plates = prog(f, logs, 18);
	const tLn = prog(f, flattest, 12), tTen = prog(f, flattest + 8, 12);
	return (
		<>
			<PreloadPlates plates={[GUITAR, METER]} />
			<SceneHeading text="Next: change the log base" at={-200} out={logs - 4} />
			<SceneHeading text="How does the log base change the slope?" at={logs + 8} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: join}}>
				<div style={{position: 'absolute', left: 96, top: 162}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: flip the graph, flip the slope.</span></div>
				<div style={{position: 'absolute', left: 96, top: 270, width: 760, boxSizing: 'border-box', background: '#fffdf8', borderRadius: 20, padding: '18px 30px 22px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '3px solid rgba(60,45,20,0.14)'}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>This video:</div>
					<div style={DISPLAY(52)}>d/dx(ln x) = <Frac n="1" d="x" />, x &gt; 0</div>
					<div style={{...DISPLAY(34, INK, 600), marginTop: 8}}>ln x is e<sup style={{fontSize: '0.66em'}}>x</sup> reflected in y = x</div>
				</div>
				<div style={{position: 'absolute', left: 96, top: 640, display: 'inline-block', background: '#fffdf8', borderRadius: 18, padding: '8px 30px 12px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: '3px solid #8a5a12', ...DISPLAY(50)}}>Next: changing the log base</div>
				<HandTag x={110} y={820} text="stretched upward by how much?" at={-200} size={42} color={NAVY} />
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: plates, transform: `translateX(${(1 - plates) * -40}px)`}}>
				<GuitarImg x={80} y={176} w={760} />
				<LiveReadoutBoard x={80} y={492} width={452} at={-30} inline title="Guitar: the A string" rows={[
					{label: 'frequency', value: 110 * xn, digits: 0, unit: 'Hz'},
					{label: 'ratio x', value: xn},
					{label: 'octaves up', value: Math.log2(xn), role: 'height', glow: [octave, soThe + 120]},
				]} />
				<PlateReadout plate={METER} x={562} y={500} w={380} region={MATHS_SHARED_ANCHORS.soundMeterDisplay} value={(dB >= 0.05 ? '+' : '') + fmtNum(dB, 1)} unit="dB" />
				<LiveReadoutBoard x={80} y={806} width={862} at={-30} inline rows={[
					{label: 'sound level', value: dB, digits: 1, unit: <>dB, power × {fmtNum(P, 2)}</>, glow: [decibels - 10, add]},
				]} />
			</div>
			<HandTag x={600} y={482} text="power × 10" at={decibels - 20} out={add} size={36} color={INK_SOFT} />
			<FunctionSimulator at={-30} x={gx} y={gy} width={gw} height={gh} window={W} family={LOG_BASE_FAMILY} baseParams={{c: 2}} timeline={T} color={NAVY} asymptotes={[0]}
				xTicks={t < 0.5 ? [-2, -1, 1, 2, 3, 4] : [1, 2, 3, 4, 5]} yTicks={t < 0.5 ? [-2, -1, 1, 2, 3, 4] : [-2, -1, 1, 2]} xLabel={t < 0.5 ? 'x' : 'x: ratio (new ÷ start)'} yLabel="y"
				curves={[logCurve(Math.E, {color: INK, width: 7}), {...logCurve(10, {color: OLIVE, width: 7, xMax: oliveMax}), at: add, out: undefined}]}
				point={{at: octave - 14, color: NAVY}} tangent={{at: steepest, halfLength: 170}}
				overlay={() => (
					<FrameSvg>
						<TanLine M={M} X={1} Y={0} m={1} half={170} opacity={tLn} />
						<TanLine M={M} X={1} Y={0} m={1 / Math.log(10)} half={170} opacity={tTen} />
						<Dot p={M.pt(xo, lg(10, xo))} color={OLIVE} opacity={oliveO * prog(f, add + 24, 8)} />
						{/* d03's join: the "× ?" arrow at x = 4 */}
						<g opacity={1 - prog(f, logs + 10, 14)}>
							<line x1={M.pt(4, Math.log(4))[0]} y1={M.pt(4, Math.log(4))[1] - 8} x2={M.pt(4, 2)[0]} y2={M.pt(4, 2)[1] + 22} stroke={NAVY} strokeWidth={5} strokeLinecap="round" />
							<path d={`M${M.pt(4, 2)[0] - 14},${M.pt(4, 2)[1] + 34} L${M.pt(4, 2)[0]},${M.pt(4, 2)[1] + 14} L${M.pt(4, 2)[0] + 14},${M.pt(4, 2)[1] + 34}`} fill="none" stroke={NAVY} strokeWidth={5} strokeLinecap="round" />
						</g>
						{f >= one4 ? <DrawnMark mark={{kind: 'circle', cx: rx, cy: ry, rx: 46, ry: 40}} at={one4} color={INK} /> : null}
					</FrameSvg>
				)} />
			<HandTag x={M.pt(4, 0)[0] + 20} y={(M.pt(4, Math.log(4))[1] + M.pt(4, 2)[1]) / 2 + 10} text="× ?" at={-200} out={logs + 10} size={56} color={NAVY} />
			<CurveLabel x={l2Lab[0]} y={l2Lab[1]} color={NAVY} size={lerp(44, 40, t)}>y = <Lg b="2" /> x{f >= octave ? ' (octaves)' : ''}</CurveLabel>
			<CurveLabel x={lnLab[0]} y={lnLab[1]} color={INK} size={lerp(44, 40, t)}>y = ln x</CurveLabel>
			<CurveLabel x={M.pt(2.6, 0.3)[0]} y={M.pt(2.6, 0.3)[1] - 6} at={add + 30} color={OLIVE} size={40}>y = <Lg b="10" /> x (bels)</CurveLabel>
			{/* the climbing pitch */}
			<HandTag x={M.pt(-0.3, 2.6)[0]} y={M.pt(0, 2.6)[1]} text="× 2 frequency = +1 octave" at={octave} out={make} size={40} color={NAVY} />
			<HandTag x={M.pt(1.5, 0)[0]} y={M.pt(0, -2.2)[1]} text="x = 4: 440 Hz, concert A" at={soThe + 100} out={make + 20} size={40} color={NAVY} />
			<HandTag x={M.pt(-0.3, 2.6)[0]} y={M.pt(0, 2.6)[1]} text="× 10 power = +1 bel" at={decibels} out={all} size={40} color={OLIVE} />
			<Chip x={M.pt(1.25, 0)[0]} y={M.pt(0, -0.45)[1]} at={one4} size={42}>a<sup style={{fontSize: '0.6em'}}>0</sup> = 1, so <Lg b="a" /> 1 = 0</Chip>
			<HandNote x={M.pt(1.4, 0)[0]} y={M.pt(0, -1.5)[1]} lines={['same note: 0 octaves', 'same power: 0 bels']} at={one4 + 12} size={38} />
			<Chip x={M.pt(-0.42, 0)[0]} y={M.pt(0, 2.95)[1]} at={much} size={44} color={VIOLET}><span style={{color: VIOLET}}>slope = ?</span></Chip>
		</>
	);
};

// ---------- 2. measure: log2 x against ln x at the same x ----------
const G2 = {x: 96, y: 150, w: 1240, h: 800};
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const at1 = cue(id, 'At x equals one'), slope1 = cue(id, 'slope one'), has = cue(id, 'has slope about'), four2 = cue(id, 'four', 2), at2 = cue(id, 'At x equals two');
	const at4 = cue(id, 'At x equals four'), every = cue(id, 'every time'), same = cue(id, 'At the same x', 2);
	const M = gmap(G2.x, G2.y, G2.w, G2.h);
	const T: FnKey[] = [{frame: 0, x: 1}, {frame: at2 + 4, x: 1}, {frame: at2 + 36, x: 2}, {frame: at4, x: 2}, {frame: at4 + 30, x: 4}];
	const X = kf(f, T.map(k => [k.frame, k.x!] as const));
	return (
		<>
			<PreloadPlates plates={[GUITAR]} />
			<SceneHeading text="Measure it: the same x each time" at={2} />
			<Legend />
			<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: 2}} timeline={T} color={NAVY}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(10, {color: 'rgba(93,107,42,0.32)', width: 6}), logCurve(Math.E, {color: INK, width: 7})]}
				point={{at: -30, color: NAVY}} tangent={{at: -30, halfLength: 190}}
				readout={{x: 1380, y: 170, width: 444, at: -30, title: 'At the same x', rows: [
					{label: 'x', value: s => s.X, at: at1},
					{label: <><Lg b="2" /> x gradient</>, value: s => s.slope, role: 'gradient', digits: 3, at: has},
					{label: 'ln x gradient here', value: s => 1 / s.X, role: 'gradient', digits: 3, at: slope1},
					{label: 'ratio', value: s => s.slope * s.X, role: 'k', digits: 3, at: four2, mark: {kind: 'box', at: every, role: 'k'}, glow: [every, 99999]},
				]}}
				overlay={() => (
					<FrameSvg>
						<line x1={M.pt(X, 0)[0]} x2={M.pt(X, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" strokeLinecap="round" />
						<TanLine M={M} X={X} Y={Math.log(X)} m={1 / X} half={190} color="#9a86c4" />
						<Dot p={M.pt(X, Math.log(X))} color={INK} />
					</FrameSvg>
				)} />
			<GuitarImg x={210} y={216} w={270} />
			<CurveLabel x={226} y={330} size={34} color={NAVY}>octaves: <Lg b="2" /></CurveLabel>
			<CurveLabel x={M.pt(3.3, 2.35)[0]} y={M.pt(3.3, 2.35)[1] - 30} color={NAVY} size={42}>y = <Lg b="2" /> x</CurveLabel>
			<CurveLabel x={M.pt(3.7, 0.85)[0]} y={M.pt(3.7, 0.85)[1] - 6} color={INK} size={42}>y = ln x</CurveLabel>
			<CurveLabel x={M.pt(4.2, 0.3)[0]} y={M.pt(4.2, 0.3)[1] - 2} color="rgba(93,107,42,0.75)" size={32}><Lg b="10" /> x</CurveLabel>
			<HandTag x={M.pt(X, 0)[0] + 18} y={M.pt(0, -0.4)[1]} text={`x = ${fmtNum(X, 0)}`} at={at1} size={40} color={INK_SOFT} />
			<HandTag x={1392} y={720} text="always × 1.443" at={every} size={50} role="k" />
			<Chip x={M.pt(1.75, 0)[0]} y={M.pt(0, -1.1)[1]} w={680} at={same} size={40} color={AMB}>same x: slope of <Lg b="2" /> x = <span style={{color: AMB}}>1.443</span> × slope of ln x</Chip>
		</>
	);
};

// ---------- shared stage for scenes 3 and 4 ----------
const G3 = {x: 900, y: 150, w: 930, h: 800};
const KEPT_ROW = <>log<sub style={{fontSize: '0.62em'}}>2</sub> x = <F a="2" slot /> × ln x</>;

// ---------- 3. why: the heights are scaled too ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const lb2 = cue(id, 'log base two is two'), lnFour = cue(id, 'The natural log of four'), twoIs = cue(id, 'and two is'), rule = cue(id, "That's the change"), two5 = cue(id, 'of two');
	const four = cue(id, 'one point four four', 3), every = cue(id, 'every height'), so = cue(id, 'So log base two is');
	const M = gmap(G3.x, G3.y, G3.w, G3.h);
	const s0 = so + 10, s1 = so + 90;
	const T: FnKey[] = [{frame: 0, yScale: 1, x: 4}, {frame: s0, yScale: 1}, {frame: s1, yScale: 1 / LN2}];
	const ys = kf(f, [[s0, 1], [s1, 1 / LN2]]);
	const landed = prog(f, s1 - 4, 10);
	const bar = (X: number, Y: number, c: string, at: number) => {
		const p = prog(f, at, 16);
		const [x0, y0] = M.pt(X, 0), [, y1] = M.pt(X, Y * p);
		return <line x1={x0} x2={x0} y1={y0} y2={y1} stroke={c} strokeWidth={14} strokeLinecap="round" opacity={p > 0 ? 1 : 0} />;
	};
	return (
		<>
			<PreloadPlates plates={[GUITAR]} />
			<SceneHeading text="Why 1.443? Look at the heights" at={2} />
			<Legend />
			<FunctionSimulator x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T}
				color={s => (s.yScale > 1.4 ? NAVY : INK)} curveWidth={7 + 3 * landed * (1 - prog(f, s1 + 30, 20))}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(2, {color: NAVY, width: 7}), {...logCurve(Math.E, {color: GHOST, dash: '14 10', width: 5}), at: s0}]}
				overlay={() => (
					<FrameSvg>
						<line x1={M.pt(4, 0)[0]} x2={M.pt(4, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" opacity={0.7} />
						<g transform="translate(-12,0)">{bar(4, 2, NAVY, lb2)}</g>
						<g transform="translate(12,0)">{bar(4, Math.log(4), INK, lnFour)}</g>
						{[0.5, 2, 4].map(X => {
							const o = vis(f, s0 - 6, s1 + 60);
							const [ax, ay0] = M.pt(X, Math.log(X)), [, ay1] = M.pt(X, Math.log(X) / LN2);
							const [, ay] = M.pt(X, ys * Math.log(X));
							const dir = ay1 < ay0 ? -1 : 1;
							return <g key={X} opacity={o}>
								<line x1={ax + 22} x2={ax + 22} y1={ay0} y2={ay1 - dir * 4} stroke={AMB} strokeWidth={5} strokeLinecap="round" />
								<path d={`M${ax + 12},${ay1 - dir * 14} L${ax + 22},${ay1} L${ax + 32},${ay1 - dir * 14}`} fill="none" stroke={AMB} strokeWidth={5} strokeLinecap="round" />
								<Dot p={[ax, ay]} color={AMB} r={11} />
							</g>;
						})}
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(4, 2)[0] - 34} y={M.pt(4, 2)[1] - 52} at={lb2 + 8} color={NAVY} size={38} anchor="end">2</CurveLabel>
			<CurveLabel x={M.pt(4, 1.386)[0] + 30} y={M.pt(4, 1.386)[1] - 6} at={lnFour + 8} color={INK} size={38}>1.386</CurveLabel>
			<CurveLabel x={M.pt(2.0, 2.4)[0]} y={M.pt(2.0, 2.4)[1] - 30} color={NAVY} size={40}>y = <Lg b="2" /> x</CurveLabel>
			<CurveLabel x={M.pt(1.6, 0.0)[0]} y={M.pt(0, -0.1)[1]} color={INK} size={40} out={s0}>y = ln x</CurveLabel>
			<CurveLabel x={M.pt(1.6, 0.0)[0]} y={M.pt(0, -0.1)[1]} at={s0 + 10} color={GHOST} size={34}>ln x (dashed)</CurveLabel>
			<HandTag x={M.pt(2.3, 0)[0]} y={M.pt(0, -1.6)[1]} text="stretched upward" at={s1 - 10} size={44} role="k" />
			{/* left: heights, then the change of base */}
			<div style={{position: 'absolute', left: 96, top: 168}}><HandText text="Why × 1.443?" at={4} size={54} color={AMB} cps={26} /></div>
			<Card x={96} y={244} w={780} at={-30} pad="12px 26px 14px">
				<CardTitle>Heights at x = 4</CardTitle>
				<Enter at={lb2} dy={8}><div style={{display: 'flex', alignItems: 'baseline', gap: 16}}><span style={DISPLAY(50, NAVY)}><Lg b="2" /> 4 = 2</span><span style={DISPLAY(32, INK_SOFT, 700)}>(2² = 4): 2 octaves</span></div></Enter>
				<Enter at={lnFour} dy={8}><div style={DISPLAY(50, INK)}>ln 4 ≈ 1.386</div></Enter>
				<Enter at={twoIs} dy={8}><div style={DISPLAY(50, AMB)}>2 ÷ 1.386 ≈ 1.443</div></Enter>
				<div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 8, borderTop: '2px solid #ede4d3', paddingTop: 8}}><div style={{position: 'relative', width: 160, height: 64, flex: 'none'}}><GuitarImg x={0} y={0} w={160} /></div><span style={DISPLAY(38, NAVY, 700)}>x = 4: 440 Hz, 2 octaves up</span></div>
			</Card>
			<RecallChip x={96} y={616} at={rule} size={30}>Year 11 change of base: <Lg b="a" /> x = (<Lg b="b" /> x) ÷ (<Lg b="b" /> a)</RecallChip>
			<WorkingRows x={96} y={690} w={780} size={56} oldSize={42} gap={10} rows={[
				{left: <><Lg b="2" /> x</>, right: <>ln x ÷ ln 2</>, at: two5},
				{right: <><F a="2" slot /> × ln x</>, at: four, keep: true},
			]} />
			<Enter at={four + 12} style={{position: 'absolute', left: 560, top: 806}}><span style={DISPLAY(30, INK_SOFT, 700)}>1/ln 2 ≈ 1.443<br />(ln 2 ≈ 0.693)</span></Enter>
			<HandTag x={110} y={922} text="factor: every height × 1/ln 2" at={every} size={40} role="k" />
		</>
	);
};

// ---------- 4. a stretch multiplies every slope ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const take = cue(id, 'Take the tangent'), stretch = cue(id, 'Stretch it'), stays = cue(id, 'stays'), four2 = cue(id, 'one point four four', 2), so = cue(id, 'So the slope becomes'), every = cue(id, 'Every rise');
	const M = gmap(G3.x, G3.y, G3.w, G3.h);
	const s0 = stretch + 4, s1 = stretch + 54;
	const T: FnKey[] = [{frame: 0, x: 2, yScale: 1}, {frame: s0, yScale: 1}, {frame: s1, yScale: 1 / LN2}];
	return (
		<>
			<SceneHeading text="A stretch multiplies every slope" at={2} />
			<Legend />
			<FunctionSimulator x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={WIN} family={LOG_BASE_FAMILY} baseParams={{c: Math.E}} timeline={T}
				color={s => (s.yScale > 1.4 ? NAVY : INK)}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y"
				curves={[logCurve(2, {color: 'rgba(34,67,122,0.25)', width: 6}), {...logCurve(Math.E, {color: GHOST, dash: '14 10', width: 5}), at: s0}]}
				point={{at: -30}} tangent={{at: take, halfLength: 210}}
				triangle={{run: 2, at: take + 20, labels: {first: () => 'run 2', second: len => (f >= four2 ? 'rise 1/ln 2 ≈ 1.443' : `rise ${fmtNum(len, 2)}`)}}}
				readout={{x: 96, y: 372, width: 640, at: take + 10, inline: true, title: 'Tangent triangle at x = 2', rows: [
					{label: 'run', value: () => 2},
					{label: 'rise', value: s => s.yScale * s.dfu * 2, role: 'k', mark: {kind: 'circle', at: four2, role: 'k'}},
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3, glow: [so, so + 100]},
				]}}
				overlay={g => (
					<>
						<HandTag x={(g.toFrame(2, 0)[0] + g.toFrame(4, 0)[0]) / 2} y={g.toFrame(0, g.s.Y)[1] + 58} text="same" at={stays + 6} size={44} color={VIOLET} anchor="middle" />
					</>
				)} />
			<CurveLabel x={M.pt(0.2, 2.5)[0]} y={M.pt(0, 2.5)[1] - 30} color={INK} size={40}>y = ln x</CurveLabel>
			<CurveLabel x={M.pt(0.2, 2.5)[0]} y={M.pt(0, 2.5)[1] + 26} at={s1} color={NAVY} size={40}>→ y = <Lg b="2" /> x</CurveLabel>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 172}}><span style={DISPLAY(48)}>{KEPT_ROW}</span></Enter>
			<RecallChip x={96} y={270} w={780} at={8} size={30}>Last video: a stretch upward by k multiplies every slope by k</RecallChip>
			<HandTag x={110} y={706} text="rise × 1.443, run same" at={four2 + 6} size={46} role="k" />
			<Chip x={96} y={770} w={780} at={every} size={42} color={AMB}>vertical scale by <span style={{color: AMB}}>c</span>: every slope at the same x × <span style={{color: AMB}}>c</span></Chip>
		</>
	);
};

