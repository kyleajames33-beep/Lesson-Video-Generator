// Scenes 7 and 8: the worked example (where is y = sec x flat?) and the memory aid (swap to the co-partner,
// add a minus) with the tower's two sun angles.
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, EquationStrip, FrameSvg, FunctionSimulator, HandTag, MarkSpan, MistakeCard, TaskStrip, kf, smooth, vis} from '../../math/studio';
import {Givens} from '../math-a12-d08/parts';
import {cue} from './common';
import {AMB, AnswerBox, BLUE, CurveLabel, GREY, Line, PI, Panel, Ring, SEC, SunShadow, T_ASYM, TanLine, VIOLET, WholeRows, gmap, piTicksHalf, tl} from './parts';

// ---------- 7. worked example: where is y = sec x flat? ----------
const G7B = {x: 970, y: 180, w: 900};
const W7 = {x: [-2, 5] as [number, number], y: [-5, 5] as [number, number]};
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const find = cue(id, 'Find where'), given = cue(id, 'for x between'), domain = cue(id, 'Domain first'), isnt = cue(id, "isn't pi over two"), horiz = cue(id, 'A horizontal tangent means'), eq = cue(id, 'sec x tan x equals zero'), secis = cue(id, 'Sec x is one over'), never = cue(id, 'never zero'), zero = cue(id, 'must be zero') + 13, pi = cue(id, 'x equals pi') + 17, points = cue(id, 'The points are'), z1 = cue(id, 'zero, one'), pim1 = cue(id, 'pi, minus one'), bottom = cue(id, 'the bottom of one');
	const G7 = {...G7B, h: kf(f, [[bottom - 26, 750], [bottom, 620]])};
	const M = gmap(G7.x, G7.y, G7.w, G7.h, W7);
	const fam = {...SEC, domain: [{from: -PI / 2, to: PI / 2}, {from: PI / 2, to: 3 * PI / 2}]};
	const X = kf(f, [[0, -1.0], [horiz, -1.0], [horiz + 80, 1.15], [secis, 1.15], [zero, 0]]);
	const slope = Math.tan(X) / Math.cos(X);
	const pt = M.pt(X, 1 / Math.cos(X));
	const pPi = M.pt(PI, -1), p0 = M.pt(0, 1);
	const outside = (a: number, b: number) => ({fn: (x: number) => 1 / Math.cos(x), at: -30, color: '#cfc6b6', width: 5, domain: [a, b] as [number, number]});
	const asymGlow = prog(f, domain, 10);
	return (
		<>
			<TaskStrip text="Find the x-values where the tangent is horizontal" at={2} size={52} />
			<EquationStrip at={find + 20} size={66}>y = sec x</EquationStrip>
			<Givens x={96} y={270} w={640} size={44} lines={[
				{content: '−π/2 < x < 3π/2', at: given, glow: [pi, pi + 50]},
				{content: 'x ≠ π/2  (cos x ≠ 0)', at: isnt, role: 'k'},
			]} />
			<Panel x={96} y={492} w={820} at={find + 40} out={eq - 12} pad="16px 30px 20px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>PLAN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 50, color: INK, lineHeight: 1.45}}>1. domain first<br />2. horizontal: dy/dx = 0<br />3. solve inside the interval</div>
			</Panel>
			<WholeRows x={96} y={500} w={880} size={52} oldSize={52} gap={4} rows={[
				{left: 'dy/dx', right: <>sec x tan x = 0</>, at: eq, keep: true},
				{left: '', relation: ' ', right: <span style={{color: INK_SOFT}}>sec x = 1/cos x ≠ 0</span>, at: never - 24, keep: true},
				{left: 'so', relation: ' ', right: <>tan x = 0</>, at: zero, keep: true},
				{left: '', relation: ' ', right: <>x = 0 or x = π</>, at: pi, keep: true},
			]} />
			<HandTag x={790} y={604} text="never zero" at={never} size={40} color={VIOLET} />
			<HandTag x={640} y={740} text="in −π/2 < x < 3π/2" at={pi + 10} size={36} color={INK_SOFT} />
			<AnswerBox x={96} y={796} at={points} size={52}>x = 0 and x = π</AnswerBox>
			<Line x={600} y={808} at={z1} size={36} weight={700}>points (0, 1) and (π, −1)</Line>
			<Line x={600} y={858} at={pim1 + 10} size={34} color={INK_SOFT} weight={700}>sec π = 1/cos π = −1</Line>
			<FunctionSimulator x={G7.x} y={G7.y} width={G7.w} height={G7.h} window={W7} family={fam} timeline={tl([[0, X]])} color={INK} asymptotes={T_ASYM.filter(a => Math.abs(a - PI / 2) > 0.1)} xTicks={piTicksHalf} yTicks={[-4, -2, 2, 4]} xLabel="x (radians)" yLabel="y" branchSafe={{gap: 0.08}} at={-30}
				curves={[outside(-2, -PI / 2 - 0.003), outside(-PI / 2 + 0.003, -PI / 2 + 0.003), outside(3 * PI / 2 + 0.003, 5)]}
				point={{at: -30, out: points, color: INK}} tangent={{at: -30, out: points, halfLength: 150}}
				overlay={() => <FrameSvg>
					<line x1={M.pt(PI / 2, 0)[0]} x2={M.pt(PI / 2, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={asymGlow > 0 ? AMB : GREY} strokeWidth={3 + 4 * asymGlow} strokeDasharray="12 9" />
					{T_ASYM.filter(a => Math.abs(a - PI / 2) > 0.1).map(a => <line key={a} x1={M.pt(a, 0)[0]} x2={M.pt(a, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={GREY} strokeWidth={3} strokeDasharray="10 9" />)}
					<g opacity={prog(f, points, 12)}>
						<TanLine M={M} X={0} Y={1} m={0} half={110} />
						<TanLine M={M} X={PI} Y={-1} m={0} half={110} />
					</g>
					<Ring p={p0} r={30} o={prog(f, z1, 12)} />
					<Ring p={pPi} r={30} o={prog(f, pim1, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(PI / 2, 0)[0] + 10} y={M.box.top + 6} at={domain} size={32} color={AMB}>x ≠ π/2</CurveLabel>
			{f < points ? <CurveLabel x={pt[0] + 24} y={Math.max(M.box.top, Math.min(pt[1] - 56, M.box.top + M.box.height - 60))} at={-30} size={36} color={VIOLET}>slope {(Math.abs(slope) < 0.0005 ? 0 : slope).toFixed(2).replace('-', '−')}</CurveLabel> : null}
			<HandTag x={p0[0]} y={M.pt(0, -0.9)[1]} text="(0, 1): bottom of a U" at={z1} size={36} color={INK} anchor="middle" />
			<HandTag x={pPi[0]} y={M.pt(0, -2.6)[1]} text="(π, −1)" at={pim1} size={36} color={INK} anchor="middle" />
			<HandTag x={pPi[0]} y={M.pt(0, -3.5)[1]} text="upside-down U" at={bottom + 30} size={34} color={INK} anchor="middle" />
			<MistakeCard x={980} y={806} w={860} at={bottom} size={44} wrong={<>x = 0 only</>} caption="tan π = 0 too: the upside-down U" />
		</>
	);
};

// ---------- 8. memory aid: swap to the co-partner, add a minus ----------
const chipStyle = (border: string): React.CSSProperties => ({display: 'inline-block', background: CARD, borderRadius: 16, padding: '4px 22px 6px', border: `3px solid ${border}`, boxShadow: '0 8px 18px rgba(60,45,20,0.08)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'});
/** Minus that drops into place (spring) and is ringed in ink. */
const DropMinus: React.FC<{at: number; glow?: number}> = ({at, glow = 0}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const s = spring({frame: f - at, fps, config: {damping: 11, stiffness: 140, mass: 0.6}});
	return (
		<span style={{display: 'inline-block', margin: '0 0.12em 0 0.18em', transform: `translateY(${(1 - s) * -60}px)`, opacity: Math.min(1, s * 2), background: glow > 0 ? `rgba(231,224,242,${glow})` : undefined, borderRadius: 10}}>
			<MarkSpan kind="circle" at={at + 16} color={INK} width={4}>−</MarkSpan>
		</span>
	);
};
type Swap = {left: React.ReactNode; right: (at: number, glow: number) => React.ReactNode; reason: React.ReactNode};
const SWAPS: Swap[] = [
	{left: <>(sin x)′ = cos x</>, right: (at, g) => <>(cos x)′ = <DropMinus at={at} glow={g} />sin x</>, reason: <>cos x = sin(π/2 − x)</>},
	{left: <>(tan x)′ = sec²x</>, right: (at, g) => <>(cot x)′ = <DropMinus at={at} glow={g} />cosec²x</>, reason: <>cot x = tan(π/2 − x)</>},
	{left: <>(sec x)′ = sec x tan x</>, right: (at, g) => <>(cosec x)′ = <DropMinus at={at} glow={g} />cosec x cot x</>, reason: <>cosec x = sec(π/2 − x)</>},
];
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const pair = cue(id, 'Pair each function'), swap = cue(id, 'Swap every name'), c1 = cue(id, 'minus sine', 2) + 9, c2 = cue(id, 'cosec squared') + 13, c3 = cue(id, 'cosec cot') + 12, works = cue(id, 'It works because'), one = cue(id, 'derivative minus one'), tower = cue(id, 'On the tower'), horizon = cue(id, 'from the horizon'), shadow = cue(id, 'same shadow'), it2 = cue(id, 'cosec of it'), grows = cue(id, 'As one angle grows'), why = cue(id, "That's why");
	const cues = [c1, c2, c3];
	const B = smooth(prog(f, tower, 30)); // phase B: the right chips slide left, the tower arrives
	const glow = vis(f, why, undefined, 10);
	const ang = kf(f, [[0, 0.6], [grows, 0.6], [grows + 40, 0.95], [grows + 90, 0.45], [grows + 140, 0.7]]);
	const rowY = (i: number) => 384 + i * 128;
	const rightX = 900 + (176 - 900) * B;
	return (
		<>
			<TaskStrip text="A way to remember the pattern" at={2} size={52} />
			<div style={{position: 'absolute', left: 120, top: 160, width: 1680, height: 790, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 182, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 168, top: 232, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.05, color: INK}}>Swap each name for its co-partner, and <MarkSpan kind="underline" at={swap} color={VIOLET} width={5}>add a minus</MarkSpan>.</div>
			<Enter at={pair} out={tower - 10} style={{position: 'absolute', left: 170, top: 310}}>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>partners:  sin and cos,   tan and cot,   sec and cosec</span>
			</Enter>
			{SWAPS.map((s, i) => {
				const at = cues[i];
				const u = smooth(prog(f, at - 4, 22));
				return (
					<React.Fragment key={i}>
						{/* left chip (a known result) and its ghost sliding into the partner */}
						<div style={{position: 'absolute', left: 170, top: rowY(i), opacity: 1 - B}}><span style={chipStyle('rgba(60,45,20,0.16)')}>{s.left}</span></div>
						{f >= at - 4 && u < 1 ? <div style={{position: 'absolute', left: 170 + (900 - 170) * u, top: rowY(i), opacity: 0.6 * (1 - u)}}><span style={chipStyle('rgba(60,45,20,0.10)')}>{s.left}</span></div> : null}
						{B < 1 ? <svg style={{position: 'absolute', left: 742, top: rowY(i) + 16, opacity: prog(f, at, 10) * (1 - B), overflow: 'visible'}} width={120} height={40}><path d="M0,20 L110,20 M92,6 L112,20 L92,34" stroke={INK_SOFT} strokeWidth={5} fill="none" strokeLinecap="round" /></svg> : null}
						<div style={{position: 'absolute', left: rightX, top: rowY(i), opacity: prog(f, at + 10, 12)}}>
							<span style={chipStyle(VIOLET)}>{s.right(at + 8, glow)}</span>
							<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: '#4f4840', marginTop: 4, opacity: prog(f, works + 40 + i * 24, 12), whiteSpace: 'pre'}}>{s.reason}</div>
						</div>
					</React.Fragment>
				);
			})}
			<Enter at={one} style={{position: 'absolute', left: 176, top: 770}}>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>inside π/2 − x has derivative <span style={{color: BLUE}}>−1</span></span>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK_SOFT, marginLeft: 22}}>chain rule</span>
			</Enter>
			<HandTag x={176} y={872} text="−1 from the inside" at={why} size={42} color={VIOLET} />
			<Line x={900 - 30 * B} y={872} at={one + 30} size={34} color={INK_SOFT} weight={700}>x in radians; each result where its function is defined</Line>
			{/* phase B: the tower with both sun angles */}
			<SunShadow x={980} y={318} w={780} h={520} angle={ang} at={tower} U={210} rx={300} groundPad={110} Rs={150} D={96} labelSize={32}
				shadowLabel={<>shadow = tan x = <span style={{color: BLUE}}>cot(π/2 − x)</span></>} beamLabel={<>sunbeam = sec x = <span style={{color: BLUE}}>cosec(π/2 − x)</span></>}
				shadowO={prog(f, shadow, 12)} beamO={prog(f, it2, 12)} arcO={1} elevO={prog(f, horizon, 12)} />
			<Panel x={1404} y={330} w={344} at={horizon} pad="6px 18px 8px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK}}>from overhead, x</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, fontVariantNumeric: 'tabular-nums', lineHeight: 1.05}}>{ang.toFixed(2)}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: BLUE, marginTop: 4}}>from the horizon</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: BLUE, fontVariantNumeric: 'tabular-nums', lineHeight: 1.05}}>{(PI / 2 - ang).toFixed(2)}</div>
			</Panel>
			<HandTag x={1000} y={810} text="angles add to π/2" at={grows + 10} size={40} color={BLUE} />
		</>
	);
};
