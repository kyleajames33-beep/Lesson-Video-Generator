// Scenes 1 to 3: the flip guess against the tower's shortest sunbeam, a reciprocal moving the opposite way, and
// one over g giving the derivative of sec x.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CardTitle, FrameSvg, HandTag, MarkSpan, SceneHeading, kf, smooth} from '../../math/studio';
import {D11FinalFrame} from '../math-a12-d11/s3';
import {cue} from './common';
import {
	AmberStrip, AnswerBox, Chip, CurveLabel, DirArrow, Dot, Frac, Legend, Line, NAVY, PairBoard, Panel, PI, RED, Ring, SunShadow, TanLine, VIOLET, WholeRows, WindowT,
	SunStrip, gmap, piTicksHalf, sunCells, tl,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const cos = Math.cos, sin = Math.sin;
const secv = (u: number) => 1 / cos(u);

/** d11's final-frame window T (scene 13 at rest) and this lesson's window T beside the sun panel. */
export const G13 = {x: 96, y: 210, w: 1150, h: 740};
export const G1 = {x: 20, y: 150, w: 1040, h: 780};
export const P1 = {x: 1068, y: 128, w: 780, h: 560};
const PANEL1 = {U: 262, rx: 250, groundPad: 72, Rs: 172, D: 112};
const COS_CURVE = (at: number, out?: number) => ({fn: (X: number) => cos(X), at, out, color: NAVY, dash: '16 11', width: 6});

// ---------- 1. hook: flip the derivative? ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const atzero = cue(id, 'At x equals zero'), picture = cue(id, 'Picture a tower'), when = cue(id, 'When the sun'), shadow = cue(id, 'the shadow is'), sunbeam = cue(id, 'sunbeam'), overhead = cue(id, 'With the sun straight overhead'), shortest = cue(id, 'shortest');
	const cosx = cue(id, 'Cos x has derivative'), flipped = cue(id, 'one over minus sine'), flip = cue(id, 'Just flip it'), zero = cue(id, 'one over zero'), exist = cue(id, 'even exist'), flat = cue(id, 'plainly flat'), fails = cue(id, 'derivative fails'), how = cue(id, 'How do sec');
	const t = smooth(prog(f, atzero + 8, 36));
	const G = {x: lerp(G13.x, G1.x, t), y: lerp(G13.y, G1.y, t), w: lerp(G13.w, G1.w, t), h: lerp(G13.h, G1.h, t)};
	const M = gmap(G.x, G.y, G.w, G.h, {x: [-2, 5], y: [-5, 5]});
	const [rx, ry] = M.pt(0, 1);
	const mine = prog(f, atzero, 14);
	const X = kf(f, [[when + 10, 0], [when + 150, 0.9], [when + 215, 0.9], [overhead - 4, 0], [flat, 0], [flat + 28, 0.15], [flat + 62, 0]]);
	const chipP = [lerp(rx + 40, 140, t), lerp(ry - 110, 596, t)];
	const glow = prog(f, overhead, 12) * (1 - prog(f, overhead + 90, 20));
	return (
		<>
			{f < atzero + 16 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - mine}}><D11FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: mine}}>
				<SceneHeading text="Derivatives of sec x, cosec x and cot x" at={atzero + 10} size={56} />
				<WindowT x={G.x} y={G.y} width={G.w} height={G.h} timeline={tl([[0, X]])} at={-60}
					point={{at: when, color: INK}} tangent={{at: flat, halfLength: 230}}
					overlay={() => <FrameSvg>
						{glow > 0.001 ? <circle cx={rx} cy={ry} r={44} fill="rgba(107,79,160,0.16)" opacity={glow} /> : null}
						<Ring p={[rx, ry]} r={30} />
					</FrameSvg>} />
				<Enter at={-60} out={fails + 14} style={{position: 'absolute', left: chipP[0], top: chipP[1]}}>
					<div style={{display: 'inline-block', background: '#fffdf8', borderRadius: 18, padding: '6px 24px 8px', border: `3px solid ${VIOLET}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: VIOLET}}>gradient ?</div>
				</Enter>
				{/* d11's three definition chips, then the same facts in a small recall card under the sun panel */}
				<Chip x={1300} y={230} at={-60} out={picture - 12} size={46}>sec x = <Frac n="1" d="cos x" /></Chip>
				<Chip x={1300} y={400} at={-60} out={picture - 12} size={46}>cosec x = <Frac n="1" d="sin x" /></Chip>
				<Chip x={1300} y={570} at={-60} out={picture - 12} size={46}>cot x = <Frac n="cos x" d="sin x" /></Chip>
			</div>
			<SunShadow {...P1} {...PANEL1} angle={X} at={picture} shadowO={prog(f, shadow, 12)} beamO={prog(f, sunbeam, 12)} arcO={prog(f, when, 12)} />
			<SunStrip x={1068} y={700} w={780} at={picture + 10} cells={sunCells(X, {beamGlow: prog(f, overhead, 10) * (1 - prog(f, overhead + 100, 14))})} />
			<HandTag x={1470} y={140 + 420} text="sun overhead: beam 1" at={shortest} out={zero} size={38} color={INK} />
			<Panel x={588} y={206} w={384} at={picture + 16} pad="8px 22px 10px">
				<CardTitle>Recall</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, lineHeight: 1.3}}>sec x = 1/cos x<br />cosec x = 1/sin x<br />cot x = cos x/sin x</div>
			</Panel>
			{/* the flip guess */}
			<Panel x={1068} y={822} w={780} at={cosx} pad="6px 22px 8px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.32}}>
					<div>(1/cos x)′ = 1/(cos x)′<span style={{opacity: prog(f, flipped, 12)}}> = 1/(−sin x)</span></div>
					<div style={{display: 'flex', alignItems: 'baseline', gap: 24}}><span style={{opacity: prog(f, zero, 12)}}>x = 0:  1/(−sin 0) = <MarkSpan kind="strike" at={exist} color={RED} width={6}>1/0</MarkSpan></span><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK_SOFT, opacity: prog(f, flip, 12)}}>flip the derivative?</span></div>
				</div>
			</Panel>
			{f >= fails ? <FrameSvg><DrawPath d="M1080,868 Q1450,852 1838,836" at={fails} dur={14} color={RED} width={6} /><DrawPath d="M1784,890 L1826,932" at={fails + 12} dur={8} color={RED} width={9} /><DrawPath d="M1826,890 L1784,932" at={fails + 18} dur={8} color={RED} width={9} /></FrameSvg> : null}
			<HandTag x={430} y={576} text="1/0: doesn't exist" at={exist} size={40} color={RED} />
			<HandTag x={M.pt(0, 0)[0]} y={M.pt(0, 1.86)[1]} text="slope 0" at={flat + 8} size={40} color={VIOLET} anchor="middle" />
			<Enter at={fails + 22} style={{position: 'absolute', left: 130, top: 626, width: 430}}>
				<div style={{background: '#fffdf8', borderRadius: 18, padding: '8px 22px 10px', border: `3px solid ${VIOLET}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.2}}>How do sec, cosec and cot change? <MarkSpan kind="underline" at={how + 40} color={VIOLET} width={5}><span style={{color: VIOLET}}>Where?</span></MarkSpan></div>
			</Enter>
		</>
	);
};

// ---------- 2. a reciprocal moves the opposite way ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const cosAt = cue(id, 'cos x', 1), now = cue(id, 'Now move x'), rises = cue(id, 'it rises'), one = cue(id, 'four one'), wall = cue(id, 'Nearer the wall'), steep = cue(id, 'is steep'), so = cue(id, 'So the reciprocal'), shrinks = cue(id, 'shrinks');
	const keys: [number, number][] = [[rises, 0], [rises + 90, PI / 4], [wall, PI / 4], [wall + 58, 1.2], [steep, 1.2], [steep + 40, 1.3]];
	const X = kf(f, keys);
	const moving = kf(f + 1, keys) - kf(f - 1, keys) > 0.0004 ? 1 : 0;
	const mo = prog(f, rises, 8) * moving;
	const G = G1;
	const M = gmap(G.x, G.y, G.w, G.h, {x: [-2, 5], y: [-5, 5]});
	const pc = M.pt(X, cos(X)), ps = M.pt(X, secv(X));
	return (
		<>
			<SceneHeading text="A reciprocal moves the opposite way" at={2} size={56} />
			<Legend at={10} />
			<WindowT x={G.x} y={G.y} width={G.w} height={G.h} timeline={tl([[0, X]])} at={-30}
				curves={[COS_CURVE(cosAt)]}
				point={{at: -30, color: INK}} tangent={{at: 40, halfLength: 200}}
				overlay={() => <FrameSvg>
					<line x1={pc[0]} y1={pc[1]} x2={ps[0]} y2={ps[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 8" opacity={prog(f, cosAt + 20, 12)} />
					<TanLine M={M} X={X} Y={cos(X)} m={-sin(X)} half={170} opacity={prog(f, 40, 12)} />
					<Dot p={pc} color={NAVY} opacity={prog(f, cosAt + 20, 12)} />
					<DirArrow x={pc[0] - 40} y={pc[1] + 6} up={false} color={NAVY} o={mo} />
					<DirArrow x={ps[0] - 40} y={ps[1] + 6} up color={INK} o={mo} />
				</FrameSvg>} />
			<CurveLabel x={112} y={574} at={cosAt} size={38} color={NAVY}>y = cos x</CurveLabel>
			<CurveLabel x={600} y={214} at={-30} size={38} color={INK}>y = sec x = 1/cos x</CurveLabel>
			<HandTag x={620} y={390} text="opposite way" at={so} size={42} color={VIOLET} />
			<Enter at={shrinks} style={{position: 'absolute', left: 130, top: 640, width: 430}}>
				<div style={{background: '#fffdf8', borderRadius: 18, padding: '8px 22px 10px', border: '3px solid rgba(60,45,20,0.14)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.2}}><span style={{color: NAVY}}>cos x shrinking:</span><br />sec x steeper</div>
			</Enter>
			<SunShadow {...P1} {...PANEL1} angle={X} at={-30} />
			<PairBoard x={1068} y={700} w={780} at={-30}
				top={<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT, opacity: prog(f, now, 12), height: 44}}>cos x = height ÷ sunbeam</div>}
				rows={[
					{name: 'cos x', color: NAVY, height: cos(X), slope: -sin(X)},
					{name: 'sec x', color: INK, height: secv(X), slope: secv(X) * Math.tan(X), slopeGlow: prog(f, one, 10) * (1 - prog(f, one + 80, 12))},
				]}
				bottom={<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK, opacity: prog(f, steep, 12), height: 44}}>beam grows slowly, then fast</div>} />
		</>
	);
};

// ---------- 3. one over g, and the derivative of sec x ----------
const GT = {x: 20, y: 150, w: 780, h: 640};
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const oneg = cue(id, 'One over g'), way = cue(id, 'way'), curve = cue(id, 'curve'), forsec = cue(id, 'For sec x'), gprime = cue(id, 'g prime is'), deriv = cue(id, 'So the derivative'), over2 = cue(id, 'sine x over cos squared'), zero = cue(id, "isn't zero"), split = cue(id, 'Split that'), secTan = cue(id, "That's sec x tan x"), saw = cue(id, 'we saw'), pi4 = cue(id, 'At pi over four'), one = cue(id, 'four one');
	const X = kf(f, [[0, PI / 4], [saw - 34, PI / 4], [saw, 0], [pi4, 0], [pi4 + 30, PI / 4]]);
	const M = gmap(GT.x, GT.y, GT.w, GT.h, {x: [-2, 5], y: [-5, 5]});
	const slope = secv(X) * Math.tan(X);
	const g1 = prog(f, one, 8) * (1 - prog(f, one + 100, 12));
	return (
		<>
			<SceneHeading text="One over g, and the derivative of sec x" at={2} size={56} />
			<Legend at={-30} />
			<WindowT x={GT.x} y={GT.y} width={GT.w} height={GT.h} timeline={tl([[0, X]])} at={-30} xTicks={piTicksHalf} yTicks={[-4, -2, 2, 4]}
				curves={[COS_CURVE(-30)]}
				point={{at: -30, color: INK}} tangent={{at: -30, halfLength: 170}}
				overlay={() => <FrameSvg>
					<Dot p={M.pt(X, cos(X))} color={NAVY} />
					<TanLine M={M} X={X} Y={cos(X)} m={-sin(X)} half={130} />
					<circle cx={M.pt(0, 1)[0]} cy={M.pt(0, 1)[1]} r={34} fill="none" stroke={VIOLET} strokeWidth={5} opacity={prog(f, saw, 10) * (1 - prog(f, pi4, 10))} />
				</FrameSvg>} />
			<CurveLabel x={470} y={180} size={36} color={INK}>y = sec x</CurveLabel>
			<CurveLabel x={128} y={474} size={36} color={NAVY}>y = cos x</CurveLabel>
			<SunStrip x={30} y={808} w={760} at={-30} cells={[
				{label: 'x', value: X, unit: 'rad'},
				{label: 'sec x', value: secv(X)},
				{label: "slope: beam's rate", value: slope, color: VIOLET, glow: g1},
			]} />
			{/* the rule */}
			<Enter at={oneg} style={{position: 'absolute', left: 820, top: 150}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 66, color: INK, whiteSpace: 'pre', display: 'flex', alignItems: 'center'}}>
					<Frac n="d" d="dx" />(<Frac n="1" d="g" />) = <MarkSpan kind="circle" at={way} color={VIOLET} width={5}>−</MarkSpan><Frac n={<span style={{color: VIOLET}}>g′</span>} d={<MarkSpan kind="underline" at={curve} color={VIOLET} width={5}>g²</MarkSpan>} />
				</div>
			</Enter>
			<HandTag x={1330} y={150} text="from the quotient rule video" at={oneg + 10} size={32} color={INK_SOFT} />
			<HandTag x={1400} y={208} text="opposite way" at={way + 6} size={42} color={VIOLET} />
			<HandTag x={1400} y={268} text="small g: steep" at={curve + 6} size={42} color={VIOLET} />
			<Line x={820} y={296} at={forsec} size={44}>For sec x:  g = cos x,  <span style={{opacity: prog(f, gprime, 12)}}>g′ = −sin x</span></Line>
			<HandTag x={1630} y={324} text="x in radians" at={gprime + 10} size={34} color={INK_SOFT} />
			<Panel x={820} y={380} w={1000} at={forsec + 20} out={deriv - 14} pad="14px 28px 16px">
				<CardTitle>Plan</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.4}}>1. sec x = 1/g with g = cos x<br />2. use −g′/g²<br />3. split into two familiar pieces</div>
			</Panel>
			<WholeRows x={820} y={366} w={1000} size={52} oldSize={52} gap={8} rows={[
				{left: <><Frac n="d" d="dx" />(sec x)</>, right: <>−<Frac n="−sin x" d="cos²x" /></>, at: deriv, keep: true},
				{right: <Frac n="sin x" d="cos²x" />, at: over2 + 14, keep: true},
				{right: <><Frac n="1" d="cos x" /> × <Frac n="sin x" d="cos x" /></>, at: split, keep: true},
			]} />
			<AmberStrip x={1440} y={372} at={zero} size={36}>{'cos x ≠ 0\n(x ≠ π/2 + kπ)'}</AmberStrip>
			<AnswerBox x={820} y={676} at={secTan + 6} size={56}><Frac n="d" d="dx" />(sec x) = sec x tan x</AnswerBox>
			<Line x={820} y={800} at={saw} size={44}>x = 0:  sec 0 × tan 0 = 1 × 0 = 0</Line>
			<Line x={820} y={866} at={one - 30} size={44}>x = π/4:  √2 × 1 = √2  <span style={{color: INK_SOFT, fontWeight: 600, fontSize: 36}}>≈ 1.414</span></Line>
		</>
	);
};
