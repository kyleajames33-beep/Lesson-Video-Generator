// Scenes 1 to 4: the Ferris wheel seat drives sin x, chords settle on slope 1 at 0, the landmarks with the
// wheel turning in step, and the traced gradient graph landing on cos x.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	DrawnMark, FrameSvg, FunctionSimulator, HandTag, PreloadPlates, SceneHeading, fmtNum, heldStops, kf, smooth, vis,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, PI} from './common';
import {
	Chip, CurveLabel, DISPLAY, Dot, FerrisWheel, GreenRule, Legend, NAVY, RAD_TICKS, ReadStrip, RecallChip, SIN, SINE_STAGE, TRIG_WIN, TanLine, VIOLET, gmap, num, seatAt,
} from './parts';
import {RIM, STAND, GONDOLA, GONDOLA_MARKED} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const PLATES = [RIM, STAND, GONDOLA, GONDOLA_MARKED];
/** The wheel stage: the graph's x-axis is level with the hub and one graph unit equals one radius. */
const GS = {x: 760, y: 150, w: 1070, h: 900};
/** Wheel-stage window: y from -1.3 to 1.3, so one graph unit (780 / 2.6 = 300 px) equals the radius R. */
const WS = {x: TRIG_WIN.x, y: [-1.3, 1.3] as [number, number]};
const HUB = {cx: 420, cy: 588, R: 300};

/** Leader from our seat to the graph point (frame coordinates). */
const Leader: React.FC<{from: [number, number]; to: [number, number]; o: number}> = ({from, to, o}) => (o <= 0.001 ? null : (
	<FrameSvg><line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" opacity={o} /><circle cx={from[0]} cy={from[1]} r={9} fill={VIOLET} opacity={o} /></FrameSvg>
));

// ---------- 1. hook: the seat on the wheel draws sin x ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const here = cue(id, "Here's where"), hub = cue(id, 'hub'), after = cue(id, 'After the wheel'), draw = cue(id, 'Draw the line'), tangent = cue(id, 'The tangent lies'), peak = cue(id, 'peak'), top = cue(id, 'The seat is at the top'), what = cue(id, 'What function');
	const t = smooth(prog(f, here, 40));
	const G = {x: lerp(SINE_STAGE.x, GS.x, t), y: lerp(SINE_STAGE.y, GS.y, t), w: lerp(SINE_STAGE.w, GS.w, t), h: lerp(SINE_STAGE.h, GS.h, t)};
	const W = {x: TRIG_WIN.x, y: [lerp(-1.5, -1.3, t), lerp(1.5, 1.3, t)] as [number, number]};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const th = kf(f, [[after + 10, 0], [after + 100, PI / 2], [after + 140, PI / 2], [after + 200, 0], [peak - 30, 0], [peak + 24, PI / 2]]);
	const T: FnKey[] = [{frame: 0, x: th}];
	const seat = seatAt(HUB.cx, HUB.cy, HUB.R, th);
	const wheelO = prog(f, here, 24);
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<div style={{position: 'absolute', left: 96, top: 100, opacity: 1 - prog(f, here, 12)}}><HandText text="So far: divide the curve, divide the slope." at={-300} size={40} color={INK_SOFT} cps={34} /></div>
			<SceneHeading text="Read the gradient from the graph" at={here + 10} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: wheelO, transform: `translateX(${(1 - wheelO) * -60}px)`}}>
				<FerrisWheel cx={HUB.cx} cy={HUB.cy} R={HUB.R} angle={th} />
			</div>
			<Leader from={seat} to={M.pt(th, Math.sin(th))} o={prog(f, hub, 12)} />
			<FrameSvg style={{opacity: vis(f, hub, after + 20)}}><line x1={HUB.cx} x2={M.box.left} y1={HUB.cy} y2={HUB.cy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" /></FrameSvg>
			<HandTag x={HUB.cx + 30} y={HUB.cy + 56} text="height 0 at the hub" at={hub + 6} out={after + 40} size={38} color={INK_SOFT} />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={SIN} timeline={T} color={INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: X => X, at: draw, color: '#8a8378', dash: '12 10', width: 4, domain: [-1.5, 1.5]}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 200}}
				overlay={() => (
					<FrameSvg>
						{f >= peak ? <DrawnMark mark={{kind: 'circle', cx: M.pt(PI / 2, 1)[0], cy: M.pt(PI / 2, 1)[1], rx: 52, ry: 40}} at={peak} color={INK} /> : null}
						<line x1={M.pt(PI / 2, 0)[0]} x2={M.pt(PI / 2, 0)[0]} y1={M.pt(0, 0)[1]} y2={M.pt(0, 1)[1]} stroke={INK} strokeWidth={9} strokeLinecap="round" opacity={prog(f, top, 12)} />
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(PI / 2, 0)[0] + 16} y={M.pt(0, 0.55)[1]} at={top + 10} size={36}>height 1</CurveLabel>
			<CurveLabel x={M.pt(1.25, 1.25)[0]} y={M.pt(1.25, 1.25)[1] - 24} at={draw + 20} out={peak} color={INK_SOFT} size={36}>y = x</CurveLabel>
			<CurveLabel x={M.pt(4.4, -1)[0]} y={M.pt(4.4, -1)[1] + 14} size={46}>y = sin x</CurveLabel>
			<HandTag x={M.pt(0.4, 0)[0]} y={M.pt(0, -0.45)[1]} text="slope looks like 1" at={tangent} out={peak} size={40} color={VIOLET} />
			<HandTag x={M.pt(PI / 2, 0)[0] + 30} y={M.pt(0, 1.32)[1]} text="seat at the top: flat" at={top + 20} size={40} color={VIOLET} />
			<Chip x={SINE_STAGE.x + 470} y={SINE_STAGE.y + 70} at={-30} out={here} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Enter at={-30} out={here} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', ...DISPLAY(40, '#4f4840', 700)}}>Next: the derivatives of sin x and cos x</div>
			</Enter>
			<ReadStrip x={GS.x} y={150} w={GS.w} at={hub} cells={[
				{label: 'turned x', text: num(th), unit: 'rad'},
				{label: 'height', text: num(Math.sin(th))},
				{label: 'climbing rate', text: '?', color: VIOLET},
			]} />
			<Chip x={M.pt(3.35, 0)[0]} y={M.pt(0, 1.4)[1]} w={360} at={what} size={40} color={VIOLET}><span style={{color: VIOLET}}>gradient at every x = ?</span></Chip>
		</>
	);
};

// ---------- 2. measure: chords from 0 ----------
const G2 = {x: 380, y: 160, w: 1060, h: 700};
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const withP = cue(id, 'With the point'), pt1 = cue(id, 'At point one'), settles = cue(id, 'settles'), one = cue(id, 'exactly one'), so = cue(id, 'So, with x');
	const M = gmap(G2.x, G2.y, G2.w, G2.h, TRIG_WIN);
	const T: FnKey[] = [{frame: 0, x: 0}, ...heldStops('q', [{frame: 0, value: 0.5}, {frame: pt1 + 6, value: 0.1}, {frame: settles + 10, value: 0.01}], 30)];
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="Measure the slope at zero" at={2} />
			<Legend />
			<FerrisWheel cx={250} cy={360} R={150} angle={0} />
			<HandTag x={250} y={690} text="seat at the hub" at={-30} out={one} size={36} color={INK_SOFT} anchor="middle" />
			<HandTag x={250} y={690} text="climbing at rate 1" at={one + 10} size={38} color={VIOLET} anchor="middle" />
			<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={TRIG_WIN} family={SIN} timeline={T} color={INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: X => X, at: -30, out: withP, color: '#8a8378', dash: '12 10', width: 4, domain: [-1.5, 1.5]}]}
				point={{at: -30}} secant={{at: withP, out: one + 4, extend: 120}} tangent={{at: one, halfLength: 220}}
				zoom={{cx: 1640, cy: 700, r: 150, factor: 6, at: pt1}}
				readout={{x: 1460, y: 176, width: 364, at: withP, title: 'Chord from 0', rows: [
					{at: withP, label: 'second point x', value: s => (Number.isFinite(s.q) ? s.q : 0), text: s => (f >= one ? '0 (tangent)' : fmtNum(s.q, s.q < 0.05 ? 2 : 1))},
					{at: withP, label: f >= one ? 'gradient at 0' : 'chord gradient', value: s => s.secantSlope, role: 'gradient', text: s => (f >= one ? '1.000' : fmtNum(s.secantSlope, s.q < 0.05 ? 5 : 3))},
				]}} />
			<RecallChip x={1460} y={500} w={364} at={-30} out={pt1} size={32}>Year 11: chord gradient = rise ÷ run</RecallChip>
			<Chip x={1460} y={200} w={364} at={-30} out={withP - 4} size={40} color={VIOLET}><span style={{color: VIOLET}}>gradient at 0 = ?</span></Chip>
			<CurveLabel x={M.pt(4.4, -1)[0]} y={M.pt(4.4, -1)[1] + 14} size={46}>y = sin x</CurveLabel>
			<Chip x={G2.x + 90} y={880} at={so} size={42} color={VIOLET}>x in radians: gradient of sin x at 0 is <span style={{color: VIOLET}}>1</span></Chip>
		</>
	);
};

// ---------- 3. the landmarks ----------
const landX = (thw: number) => (thw <= 2 * PI + 1e-6 ? thw : thw <= 4 * PI + 1e-6 ? thw - 2 * PI : thw - 4 * PI);
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const z1 = cue(id, 'is zero'), steeply = cue(id, 'steeply'), m1 = cue(id, 'minus one'), z2 = cue(id, 'again'), o2 = cue(id, 'slope one'), steepest = cue(id, 'steepest'), wheel = cue(id, 'On the wheel'), isnt = cue(id, "isn't climbing");
	const M = gmap(GS.x, GS.y, GS.w, GS.h, WS);
	const thw = kf(f, [[110, 0], [205, PI / 2], [330, PI / 2], [465, PI], [530, PI], [625, 1.5 * PI], [680, 1.5 * PI], [775, 2 * PI], [wheel, 2 * PI], [wheel + 66, 4 * PI], [isnt - 60, 4 * PI], [isnt, 5.5 * PI]], );
	const X = landX(thw);
	const T: FnKey[] = [{frame: 0, x: X}];
	const seat = seatAt(HUB.cx, HUB.cy, HUB.R, thw);
	const tags: {x: number; t: string; at: number; cross: boolean}[] = [
		{x: 0, t: '1', at: -30, cross: true}, {x: PI / 2, t: '0', at: z1, cross: false}, {x: PI, t: '−1', at: m1, cross: true}, {x: 1.5 * PI, t: '0', at: z2, cross: false}, {x: 2 * PI, t: '1', at: o2, cross: true},
	];
	const glowCross = vis(f, steepest, steepest + 40), glowFlat = vis(f, steepest + 30, steepest + 80);
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="The landmarks: flat peaks, steep crossings" at={2} size={54} />
			<FerrisWheel cx={HUB.cx} cy={HUB.cy} R={HUB.R} angle={thw} />
			<Leader from={seat} to={M.pt(X, Math.sin(X))} o={1} />
			<FunctionSimulator x={GS.x} y={GS.y} width={GS.w} height={GS.h} window={WS} family={SIN} timeline={T} color={INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				point={{at: -30}} tangent={{at: -30, halfLength: 170}}
				overlay={() => (
					<FrameSvg>
						<g opacity={vis(f, steeply, m1 + 30)}>
							<line x1={M.pt(PI / 2, 0)[0]} x2={M.pt(PI / 2, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" />
							<TanLine M={M} X={0} Y={0} m={1} half={150} dash="12 9" width={5} />
							<TanLine M={M} X={PI} Y={0} m={-1} half={150} dash="12 9" width={5} />
						</g>
						{tags.map(tg => {
							const [tx, ty] = M.pt(tg.x, 0);
							const o = prog(f, tg.at, 12), g = tg.cross ? glowCross : glowFlat;
							return o > 0.001 ? <g key={tg.x} opacity={o}>
								{g > 0 ? <circle cx={tx} cy={ty + 52} r={30} fill="#e7e0f2" opacity={g} /> : null}
								<text x={tx} y={ty + 66} textAnchor="middle" stroke="#fffdf8" strokeWidth={8} paintOrder="stroke" style={{fontFamily: 'inherit', fontWeight: 800, fontSize: 44, fill: VIOLET}}>{tg.t}</text>
							</g> : null;
						})}
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(4.4, -1)[0]} y={M.pt(4.4, -1)[1] + 14} size={46}>y = sin x</CurveLabel>
			<ReadStrip x={GS.x} y={150} w={GS.w} cells={[
				{label: 'turned x', text: num(X), unit: 'rad'},
				{label: 'height', text: num(Math.sin(thw))},
				{label: 'climbing rate', text: num(Math.cos(thw)), color: VIOLET, bar: Math.cos(thw)},
			]} />
			<HandTag x={96} y={190} text="passing the hub: steepest" at={wheel + 4} out={isnt} size={40} color={VIOLET} />
			<HandTag x={96} y={190} text="top and bottom: flat for an instant" at={isnt + 4} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 4. trace the gradient graph ----------
const GU = {x: 420, y: 150, w: 1060, h: 420};
const GL = {x: 420, y: 556, w: 1060, h: 400};
export const PairedLower: React.FC<{family: typeof SIN; X: number; ext: number; extFrom?: number; target?: {fn: (x: number) => number; at: number; color: string; label: string}; landmarks?: {x: number; y: number; at: number}[]; tints?: number; label: string; pointAt?: number; shift?: number}> = ({family, X, ext, extFrom = 0, target, landmarks = [], tints, label, pointAt = -30, shift = 0}) => {
	const f = useCurrentFrame();
	const ML = gmap(GL.x, GL.y, GL.w, GL.h, TRIG_WIN);
	const d = family.df;
	return (
		<>
			<FunctionSimulator x={GL.x} y={GL.y} width={GL.w} height={GL.h} window={TRIG_WIN} family={{f: u => d(u, {}), df: u => -family.f(u, {})}} timeline={[{frame: 0, x: X}]} color="rgba(0,0,0,0)"
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="" yLabel={label}
				regions={tints !== undefined ? [{x: [0, PI / 2], y: [0, 1.5], color: '#d6eeee', at: tints}, {x: [PI / 2, 1.5 * PI], y: [-1.5, 0], color: '#f8e8c8', at: tints}, {x: [1.5 * PI, 2 * PI], y: [0, 1.5], color: '#d6eeee', at: tints}] : []}
				curves={[
					...(target ? [{fn: target.fn, at: target.at, color: target.color, dash: '14 10', width: 5}] : []),
					...(ext - extFrom > 0.01 ? [{fn: (x: number) => d(x - shift, {}), at: -30, color: VIOLET, width: 7, domain: [extFrom + shift, ext + shift] as [number, number]}] : []),
				]}
				point={{at: pointAt, color: VIOLET}} />
			<FrameSvg>{landmarks.map((l, i) => <Dot key={i} p={ML.pt(l.x, l.y)} r={11} opacity={prog(f, l.at, 10)} />)}</FrameSvg>
			{target ? <CurveLabel x={ML.pt(4.6, 0.9)[0]} y={ML.pt(4.6, 0.9)[1] - 40} at={target.at + 10} color={target.color} size={40}>{target.label}</CurveLabel> : null}
		</>
	);
};
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const curve = cue(id, 'draws a curve'), where = cue(id, 'Where sine is rising'), falling = cue(id, 'where sine is falling'), check = cue(id, 'Check a point'), half = cue(id, 'is a half'), exact = cue(id, 'exactly a half'), cosine = cue(id, 'is the cosine'), so = cue(id, 'So, with x');
	const MU = gmap(GU.x, GU.y, GU.w, GU.h, TRIG_WIN), ML = gmap(GL.x, GL.y, GL.w, GL.h, TRIG_WIN);
	const X = kf(f, [[curve, 0], [curve + 220, 2 * PI], [check + 20, 2 * PI], [check + 80, PI / 3]]);
	const ext = kf(f, [[curve, 0], [curve + 220, 2 * PI]]);
	const T: FnKey[] = [{frame: 0, x: X}];
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="Plot the slopes: a gradient graph" at={2} />
			<Legend />
			<FerrisWheel cx={250} cy={360} R={150} angle={X} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 680, width: 300}}>
				<div style={DISPLAY(30, VIOLET, 700)}>climbing rate</div>
				<div style={{...DISPLAY(52, VIOLET), fontVariantNumeric: 'tabular-nums'}}>{num(Math.cos(X))}</div>
			</Enter>
			<FunctionSimulator x={GU.x} y={GU.y} width={GU.w} height={GU.h} window={TRIG_WIN} family={SIN} timeline={T} color={INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="" yLabel="y = sin x" point={{at: -30}} tangent={{at: -30, halfLength: 140}}
				readout={{x: 1510, y: 160, width: 314, at: -30, rows: [
					{label: 'x', value: s => s.X, text: s => (Math.abs(s.X - PI / 3) < 0.005 && f > check ? 'π/3' : fmtNum(s.X))},
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3, glow: [half, half + 120]},
				]}} />
			<PairedLower family={SIN} X={X} ext={ext} label="gradient of sin x" tints={where}
				landmarks={[{x: 0, y: 1, at: -30}, {x: PI / 2, y: 0, at: -30}, {x: PI, y: -1, at: -30}, {x: 1.5 * PI, y: 0, at: -30}, {x: 2 * PI, y: 1, at: -30}]}
				target={{fn: Math.cos, at: cosine, color: NAVY, label: 'y = cos x'}} />
			<FrameSvg><line x1={MU.pt(X, Math.sin(X))[0]} y1={MU.pt(X, Math.sin(X))[1]} x2={ML.pt(X, Math.cos(X))[0]} y2={ML.pt(X, Math.cos(X))[1]} stroke={VIOLET} strokeWidth={3} strokeDasharray="6 9" opacity={0.7} /></FrameSvg>
			<HandTag x={ML.pt(0.1, 0)[0]} y={ML.pt(0, 1.32)[1]} text="sin rising: gradient > 0" at={where + 6} out={check} size={36} color="#13767a" />
			<HandTag x={ML.pt(1.75, 0)[0]} y={ML.pt(0, -1.3)[1]} text="sin falling: gradient < 0" at={falling + 6} out={check} size={36} color="#7a4600" />
			<RecallChip x={1510} y={470} w={314} at={exact} size={32}>cos(π/3) = ½ (exact value)</RecallChip>
			<GreenRule x={1500} y={700} at={so} size={40}>d/dx(sin x) = cos x</GreenRule>
		</>
	);
};
