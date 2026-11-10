// Scenes 1 to 3: two quick answers against the measured slope (the drone's two factors beside it), where the two
// factors come from (index law and the squash), and the three outsides in slot form with the drone's tan row.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, SceneHeading, heldStops, kf, vis} from '../../math/studio';
import {D12FinalFrame, D13_STAGE, EXP32, WIN_E} from '../math-a12-d12/s5';
import {cue} from './common';
import {
	B, BLUE, CurveLabel, DroneBoard, DroneTilt, EXP3, LN3, Line, P, PI, Panel, RED, RecallChip, Ring, S, SlotRow, T, TEAL, VIOLET, AnswerBox, gmap, slotRows,
} from './parts';

const E = D13_STAGE;
const ME = gmap(E.x, E.y, E.w, E.h, WIN_E);
const R0 = ME.pt(0, 1);
const E_X = [-1, 1], E_Y = [2, 4, 6, 8, 10];
const T32 = <>3<P>2x</P></>;
const P1 = {x: 1080, y: 160, w: 760, h: 520};
/** A dashed-border answer chip (blue or teal), crossable in red. */
const AnsChip: React.FC<{x: number; y: number; at: number; color: string; cross?: number; size?: number; children: React.ReactNode}> = ({x, y, at, color, cross, size = 44, children}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
			<div style={{position: 'relative', display: 'inline-block', background: '#fffdf8', borderRadius: 16, padding: '4px 22px 8px', border: `4px dashed ${color}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>
				{children}
				{cross !== undefined && f >= cross ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}><path d="M0,64 L100,36" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, cross, 12)} /></svg> : null}
			</div>
		</Enter>
	);
};

// ---------- 1. hook: one factor or the other? ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const comp = cue(id, 'Composites hide'), drone = cue(id, 'A drone hovers'), tilts = cue(id, 'tilts forward'), fast = cue(id, 'how fast the camera'), far = cue(id, 'how far the spot'), keep = cue(id, 'Keep that picture');
	const one = cue(id, 'One says'), other = cue(id, 'The other says'), zero = cue(id, 'one zero'), measure = cue(id, "Let's measure"), six = cue(id, 'four six'), twotwo = cue(id, 'two point two two'), settle = cue(id, 'They settle'), neither = cue(id, 'Neither answer'), sowhat = cue(id, 'So what is the slope');
	const saw = (fr: number) => (fr < tilts ? 0 : Math.min(1.2, (((fr - tilts) % 72) / 30) * 0.5));
	const tilt = saw(Math.min(f, keep));
	const tl = [...heldStops('q', [{frame: measure, value: 0.5}, {frame: six - 6, value: 0.1}, {frame: twotwo + 10, value: 0.01}], 24), {frame: 0, x: 0}];
	const tangentOn = f >= settle;
	const st = (() => {const q = kf(f, tl.filter(k => k.q !== undefined).map(k => [k.frame, k.q as number] as const)); return (3 ** (2 * q) - 1) / q;})();
	const fade12 = prog(f, comp - 30, 24);
	return (
		<>
			{fade12 < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade12}}><D12FinalFrame /></div> : null}
			<SceneHeading text="The remaining composites: keep every factor" at={comp - 10} size={56} />
			<FunctionSimulator x={E.x} y={E.y} width={E.w} height={E.h} window={WIN_E} family={EXP32} timeline={tl} color={INK} at={-60}
				xTicks={E_X} yTicks={E_Y} xLabel="x" yLabel="y"
				secant={{at: measure, out: settle, color: VIOLET, extend: 120}}
				tangent={{at: settle, halfLength: 220}}
				lines={[
					{slope: () => 2, at: zero, out: neither + 20, color: BLUE, dash: '16 10', halfLength: 300},
					{slope: () => LN3, at: zero + 10, out: neither + 20, color: TEAL, dash: '16 10', halfLength: 300},
				]}
				overlay={() => <FrameSvg><Ring p={R0} r={30} /></FrameSvg>} />
			<CurveLabel x={ME.pt(0.1, 0)[0]} y={ME.pt(0, 8.9)[1]} at={-60} size={46} color={INK}>y = {T32}</CurveLabel>
			<Enter at={-60} out={sowhat - 8} style={{position: 'absolute', left: 300, top: R0[1] - 150}}>
				<div style={{display: 'inline-block', background: '#fffdf8', borderRadius: 18, padding: '6px 24px 8px', border: `3px solid ${VIOLET}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: VIOLET}}>gradient ?</div>
			</Enter>
			<Enter at={sowhat} style={{position: 'absolute', left: 150, top: R0[1] - 150}}>
				<div style={{display: 'inline-block', background: '#fffdf8', borderRadius: 18, padding: '6px 24px 8px', border: `3px solid ${VIOLET}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK}}><span style={{color: VIOLET}}>gradient ≈ 2.197</span>: where from?</div>
			</Enter>
			{/* the two quick answers and the measurement */}
			<AnsChip x={150} y={262} at={one} color={BLUE} cross={neither}>2 × {T32}</AnsChip>
			<AnsChip x={150} y={352} at={other} color={TEAL} cross={neither + 10}>{T32} ln 3</AnsChip>
			<HandTag x={430} y={300} text="predicts 2" at={zero} size={38} color={BLUE} />
			<HandTag x={430} y={390} text="predicts ≈ 1.10" at={zero + 10} size={38} color={TEAL} />
			<LiveReadoutBoard x={150} y={450} width={400} at={measure} inline rows={[
				tangentOn ? {label: 'gradient', value: 2 * LN3, digits: 3, role: 'gradient', glow: [settle, settle + 60]} : {label: 'secant slope', value: st, digits: 3, role: 'gradient'},
			]} />
			{/* the drone */}
			<DroneTilt {...P1} tilt={tilt} at={drone} U={230} lensX={340} droneW={340} arcO={prog(f, tilts, 12)} measureO={prog(f, tilts + 30, 12)} />
			<DroneBoard x={1080} y={700} w={760} tilt={tilt} rate={0.5} at={drone + 10} rateGlow={vis(f, fast, fast + 70, 10)} secGlow={vis(f, far, far + 70, 10)} />
			<HandTag x={1500} y={206} text="how fast it tilts" at={fast + 6} size={38} color={BLUE} />
			<HandTag x={1500} y={258} text="how far per radian" at={far + 6} size={38} color={TEAL} />
			<HandTag x={1500} y={310} text="two factors, multiplied" at={keep - 30} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 2. two factors from two places ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const nine = cue(id, "so it's nine"), know = cue(id, 'And you know'), slope = cue(id, 'So the slope is'), ln9 = cue(id, 'The natural log of nine', 2), ans = cue(id, 'three to the two x', 2) + 34, measured = cue(id, 'we measured'), each = cue(id, 'Each quick answer'), picture = cue(id, 'The picture shows'), half = cue(id, 'by a half'), base = cue(id, 'The base three'), doubles = cue(id, 'doubles it');
	const squash = [{frame: 0, x: 0}, {frame: half, xScale: 1}, {frame: half + 36, xScale: 0.5}];
	const sq = prog(f, half, 36);
	return (
		<>
			<SceneHeading text="Two factors from two places" at={4} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, picture, 16)}}>
				<FunctionSimulator x={E.x} y={E.y} width={E.w} height={E.h} window={WIN_E} family={EXP32} timeline={[{frame: 0, x: 0}]} color={INK} at={-60}
					xTicks={E_X} yTicks={E_Y} xLabel="x" yLabel="y" tangent={{at: -60, halfLength: 220}}
					overlay={() => <FrameSvg><Ring p={R0} r={30} /></FrameSvg>} />
				<CurveLabel x={ME.pt(0.1, 0)[0]} y={ME.pt(0, 8.9)[1]} at={-60} size={46} color={INK}>y = {T32}</CurveLabel>
				<LiveReadoutBoard x={150} y={450} width={400} at={-60} inline rows={[{label: 'gradient', value: 2 * LN3, digits: 3, role: 'gradient', glow: [measured, measured + 70]}]} />
			</div>
			<FunctionSimulator x={E.x} y={E.y} width={E.w} height={E.h} window={WIN_E} family={EXP3} timeline={squash} color={INK} at={picture} draw={{at: picture, dur: 30}}
				xTicks={E_X} yTicks={E_Y} xLabel="x" yLabel="y" tangent={{at: picture + 20, halfLength: 200}}
				triangle={{run: 1, at: picture + 30, labels: {first: () => (sq < 0.5 ? 'run 1' : 'run ½'), second: () => 'rise ln 3'}}}
				readout={{x: 150, y: 450, width: 400, at: picture + 20, inline: true, rows: [{label: 'gradient', value: s => s.slope, digits: 3, role: 'gradient', hideInTransit: false}]}}
				overlay={() => <FrameSvg><Ring p={R0} r={30} o={prog(f, picture, 12)} /></FrameSvg>} />
			<CurveLabel x={ME.pt(0.1, 0)[0]} y={ME.pt(0, 8.9)[1]} at={picture + 10} out={half} size={46} color={INK}>y = 3<P>x</P></CurveLabel>
			<CurveLabel x={ME.pt(0.1, 0)[0]} y={ME.pt(0, 8.9)[1]} at={half + 36} size={46} color={INK}>y = {T32}</CurveLabel>
			<HandTag x={ME.pt(0.9, 0)[0]} y={ME.pt(0, 2.6)[1]} text="the base's factor: ln 3" at={base + 10} size={38} color={TEAL} anchor="end" />
			<HandTag x={160} y={560} text="× 2: the inside's factor" at={doubles} size={40} color={BLUE} />
			{/* the algebra */}
			<RecallChip x={1090} y={156} at={know} size={30}>a<P>x</P> has derivative a<P>x</P> ln a</RecallChip>
			<Line x={1090} y={226} at={nine - 60} size={58}>{T32} = (3²)<P>x</P> = 9<P>x</P></Line>
			<HandTag x={1690} y={262} text="index law" at={nine} size={34} color={INK_SOFT} />
			<Panel x={1090} y={318} w={750} at={30} out={slope} pad="14px 26px 16px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>WHERE 2.197 COMES FROM</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.4}}>1. rewrite {T32} as 9<P>x</P><br />2. use (a<P>x</P>)′ = a<P>x</P> ln a<br />3. simplify ln 9</div>
			</Panel>
			<Line x={1090} y={318} at={slope} size={58}>(9<P>x</P>)′ = 9<P>x</P> ln 9</Line>
			<Line x={1090} y={410} at={ln9} size={58}>ln 9 = 2 ln 3</Line>
			<HandTag x={1500} y={446} text="log law" at={ln9 + 10} size={34} color={INK_SOFT} />
			<AnswerBox x={1090} y={500} at={ans} size={56}><span>({T32})′ = <B>2</B> <T>ln 3</T> × {T32}</span></AnswerBox>
			<Line x={1090} y={618} at={measured - 20} size={46}>x = 0:  2 ln 3 × 1 ≈ 2.197</Line>
			<Panel x={1090} y={700} w={750} at={-30} border={RED} pad="8px 24px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>THE TWO QUICK ANSWERS</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}><s style={{textDecorationColor: RED, textDecorationThickness: 4}}>2 × {T32}</s><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: TEAL, marginLeft: 26, opacity: prog(f, each, 12)}}>lost ln 3</span></div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre', marginTop: 4}}><s style={{textDecorationColor: RED, textDecorationThickness: 4}}>{T32} ln 3</s><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: BLUE, marginLeft: 26, opacity: prog(f, each + 12, 12)}}>lost the 2</span></div>
			</Panel>
		</>
	);
};

// ---------- 3. the three outsides ----------
const PD = {x: 40, y: 262, w: 600, h: 430};
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const der1 = cue(id, "inside's derivative"), pos = cue(id, 'must be positive'), pi = cue(id, 'plus k pi'), drone = cue(id, 'For the drone'), rate = cue(id, "tilt's own rate"), once = cue(id, 'And once the tilt'), horizon = cue(id, 'the horizon'), fixed = cue(id, 'fixed part'), extra = cue(id, 'extra factor'), decides = cue(id, 'decides the domain');
	const tilt = kf(f, [[once + 8, 0.5], [once + 40, PI / 2]], false);
	const r = f < rate ? 0.5 : 1;
	const g = {teal: vis(f, fixed, fixed + 120, 10), blue: vis(f, extra, extra + 70, 10), amber: prog(f, decides, 10)};
	const rows = slotRows(g);
	const W = 1160, X0 = 680;
	return (
		<>
			<SceneHeading text="The three outsides" at={4} size={56} />
			<RecallChip x={40} y={156} w={600} at={-30} size={30}>d06: outside slope at the inside, times the inside slope</RecallChip>
			<DroneTilt {...PD} tilt={tilt} U={170} lensX={232} droneW={250} size={30} goneTag={prog(f, horizon, 12)} />
			<DroneBoard x={40} y={706} w={600} tilt={tilt} rate={r} at={-30} rateGlow={vis(f, rate, rate + 60, 10)} />
			<SlotRow x={X0} y={170} w={W} at={der1} lhs={rows.aL} tag="a > 0; from d02">{rows.aR}</SlotRow>
			<Line x={X0 + 24} y={262} at={der1 + 30} size={34} color={'#4f4840'} weight={700}>e.g. ({T32})′ = <B>2</B> <T>ln 3</T> × {T32}</Line>
			<SlotRow x={X0} y={326} w={W} at={pos} lhs={rows.logL} tag="a ≠ 1; from d04">{rows.logR}</SlotRow>
			<SlotRow x={X0} y={478} w={W} at={pi} lhs={rows.tanL} tag="from d11" glow={vis(f, horizon, horizon + 90, 12)}>{rows.tanR}</SlotRow>
			<Line x={X0 + 24} y={570} at={pi + 30} size={34} color={'#4f4840'} weight={700}>d11: tan(2x − π/3) → <B>2</B><T>sec²</T>(2x − π/3)</Line>
			<Panel x={X0} y={640} w={W} at={-30} border={VIOLET} pad="8px 24px 10px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>drone:  spot = tan(<S>θ</S>),<span style={{opacity: prog(f, drone, 14)}}>   speed = <T g={g.teal}>sec²</T>(<S>θ</S>) × <B g={g.blue}>θ′</B></span></div>
			</Panel>
			<HandTag x={X0 + 30} y={790} text="the outside brings ln a or sec²" at={fixed} size={40} color={TEAL} />
			<HandTag x={X0 + 30} y={846} text="the inside's derivative: an extra factor" at={extra} size={40} color={BLUE} />
			<HandTag x={X0 + 30} y={902} text="the inside decides the domain" at={decides} size={40} color={AMB_C} />
		</>
	);
};
const AMB_C = '#7a4600';
