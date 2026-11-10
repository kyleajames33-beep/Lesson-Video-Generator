// Scenes 4 to 6: cosec x from one over g, cot x by the quotient rule (the mirror of tan), and the two domains.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CardTitle, FrameSvg, FunctionSimulator, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {cue} from './common';
import {
	AMB, AmberStrip, AnswerBox, BLUE, COSEC, COT, CurveLabel, DirArrow, Dot, Frac, GREY, Legend, Line, NAVY, PI, PairBoard, Panel, RecallChip, Ring, S_ASYM, SEC, TEAL, T_ASYM, TanLine, VIOLET, WholeRows, WindowS,
	gmap, piTicksHalf, tl,
} from './parts';

const sin = Math.sin, cos = Math.cos;
const cosec = (u: number) => 1 / sin(u);
const cot = (u: number) => cos(u) / sin(u);
const G4 = {x: 20, y: 150, w: 1000, h: 780};
const SIN_CURVE = (at: number, out?: number, width = 6) => ({fn: (X: number) => sin(X), at, out, color: NAVY, dash: '16 11', width});
/** tan x as a dashed grey ghost, one piece per branch (never joined across an asymptote). */
const tanGhost = (at: number, out?: number, win: [number, number] = [-2, 5]) => {
	const cuts = [win[0], -PI / 2, PI / 2, 3 * PI / 2, win[1]].filter(v => v >= win[0] && v <= win[1]);
	return cuts.slice(0, -1).map((a, i) => ({fn: (X: number) => Math.tan(X), at, out, dash: '12 10', width: 4, domain: [a + (i ? 0.004 : 0), cuts[i + 1] - (i + 2 < cuts.length ? 0.004 : 0)] as [number, number]}));
};

// ---------- 4. cosec x ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const gp = cue(id, 'Now g prime'), deriv = cue(id, 'So the derivative'), zero = cue(id, "isn't zero"), split = cue(id, 'Split it'), ans = cue(id, "That's minus cosec"), look = cue(id, 'Look at the graph'), falls = cue(id, 'cosec x falls'), two = cue(id, 'minus root two'), past = cue(id, 'Past pi over two'), between = cue(id, 'In between'), flat = cue(id, 'both are flat'), agrees = cue(id, 'formula agrees');
	const keys: [number, number][] = [[look, 0.45], [look + 150, PI / 4], [past, PI / 4], [past + 110, 2.6], [between, 2.6], [flat - 2, PI / 2]];
	const X = kf(f, keys);
	const dX = kf(f + 1, keys) - kf(f - 1, keys);
	const mo = Math.abs(dX) > 0.0004 ? 1 : 0;
	const M = gmap(G4.x, G4.y, G4.w, G4.h, {x: [-2, 5], y: [-5, 5]});
	const ps = M.pt(X, sin(X)), pc = M.pt(X, cosec(X));
	const asymGlow = prog(f, zero, 10) * (1 - prog(f, zero + 100, 16));
	return (
		<>
			<SceneHeading text="cosec x: one over sin x" at={2} size={56} />
			<Legend at={-30} />
			<WindowS x={G4.x} y={G4.y} width={G4.w} height={G4.h} timeline={tl([[0, X]])} at={-30}
				curves={[SIN_CURVE(-30)]}
				point={{at: -30, color: INK}} tangent={{at: -30, halfLength: 190}}
				overlay={() => <FrameSvg>
					{S_ASYM.map(a => <line key={a} x1={M.pt(a, 0)[0]} x2={M.pt(a, 0)[0]} y1={M.box.top} y2={M.box.top + M.box.height} stroke={AMB} strokeWidth={8} strokeDasharray="12 9" opacity={asymGlow} />)}
					<line x1={ps[0]} y1={ps[1]} x2={pc[0]} y2={pc[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 8" />
					<TanLine M={M} X={X} Y={sin(X)} m={cos(X)} half={150} />
					<Dot p={ps} color={NAVY} />
					<DirArrow x={ps[0] - 40} y={ps[1] + 4} up={X < PI / 2 ? dX > 0 : dX < 0} color={NAVY} o={mo} />
					<DirArrow x={pc[0] + 40} y={pc[1] - 4} up={X < PI / 2 ? dX < 0 : dX > 0} color={INK} o={mo} />
					<Ring p={ps} r={28} o={prog(f, flat, 12)} color={VIOLET} />
					<Ring p={pc} r={28} o={prog(f, flat, 12)} color={VIOLET} />
				</FrameSvg>} />
			<CurveLabel x={112} y={206} at={-30} size={40} color={INK}>y = cosec x</CurveLabel>
			<CurveLabel x={420} y={612} at={-30} size={40} color={NAVY}>y = sin x</CurveLabel>
			<HandTag x={M.pt(PI / 4, 0)[0]} y={M.pt(0, -0.55)[1]} text="0 < x < π/2" at={look + 10} out={past} size={38} color={INK_SOFT} anchor="middle" />
			<HandTag x={M.pt(3 * PI / 4, 0)[0]} y={M.pt(0, -0.55)[1]} text="π/2 < x < π" at={past + 10} out={between} size={38} color={INK_SOFT} anchor="middle" />
			{/* right column */}
			<Line x={1060} y={150} at={-30} size={34} color={INK_SOFT} weight={700}>one over g:  (1/g)′ = −g′/g²</Line>
			<Line x={1060} y={204} at={14} size={44}>g = sin x,  <span style={{opacity: prog(f, gp, 12)}}>g′ = cos x</span></Line>
			<Panel x={1060} y={286} w={780} at={20} out={deriv - 12} pad="14px 28px 16px">
				<CardTitle>Same plan as sec x</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, color: INK, lineHeight: 1.4}}>1. cosec x = 1/g with g = sin x<br />2. use −g′/g²<br />3. split into two pieces</div>
			</Panel>
			<WholeRows x={1060} y={268} w={780} size={50} oldSize={50} gap={6} rows={[
				{left: <>(cosec x)′</>, right: <>−<Frac n="cos x" d="sin²x" /></>, at: deriv, keep: true},
				{right: <>−<Frac n="1" d="sin x" /> × <Frac n="cos x" d="sin x" /></>, at: split, keep: true},
				{right: <><MarkSpan kind="circle" at={falls} color={VIOLET} width={5}>−</MarkSpan>cosec x cot x</>, at: ans, answer: true},
			]} />
			<AmberStrip x={1590} y={274} at={zero} size={34}>{'sin x ≠ 0\n(x ≠ kπ)'}</AmberStrip>
			<PairBoard x={1060} y={590} w={780} at={-30} rows={[
				{name: 'sin x', color: NAVY, height: sin(X), slope: cos(X)},
				{name: 'cosec x', color: INK, height: cosec(X), slope: -cos(X) / sin(X) ** 2, slopeGlow: prog(f, two, 10) * (1 - prog(f, two + 70, 12))},
			]} />
			<Line x={1060} y={768} at={two} size={42}>x = π/4:  −√2 × 1 = −√2  <span style={{color: INK_SOFT, fontWeight: 600, fontSize: 34}}>≈ −1.414</span></Line>
			<Line x={1060} y={828} at={flat + 20} size={42}>x = π/2:  −cosec(π/2) cot(π/2)</Line>
			<Line x={1060} y={882} at={agrees - 30} size={42}>              = −1 × 0 = 0  <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: VIOLET}}>flat</span></Line>
		</>
	);
};

// ---------- 5. cot x: the mirror of tan ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const quot = cue(id, "It's a quotient"), asTan = cue(id, 'just as we did'), top = cue(id, "The top's derivative"), bottom = cue(id, "the bottom's"), sotop = cue(id, 'So the top of the answer'), takeout = cue(id, 'Take out the minus'), one = cue(id, 'which is one', 2), m1 = cue(id, 'minus one over'), cosec2 = cue(id, 'minus cosec squared'), wherever = cue(id, 'again wherever'), tans = cue(id, "That's tan's proof"), never = cue(id, "Tan's slope"), cots = cue(id, "Cot's is never"), branch = cue(id, 'each branch'), pi4 = cue(id, 'At pi over four'), two = cue(id, 'minus two');
	const M = gmap(G4.x, G4.y, G4.w, G4.h, {x: [-2, 5], y: [-5, 5]});
	const p4 = M.pt(PI / 4, 1);
	const arrow = (a: [number, number], b: [number, number], at: number) => {
		const [x1, y1] = M.pt(...a), [x2, y2] = M.pt(...b);
		const ang = Math.atan2(y2 - y1, x2 - x1), hl = 24;
		return <g key={a.join()}><DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={16} color={VIOLET} width={6} /><DrawPath d={`M${x2 - hl * Math.cos(ang - 0.5)},${y2 - hl * Math.sin(ang - 0.5)} L${x2},${y2} L${x2 - hl * Math.cos(ang + 0.5)},${y2 - hl * Math.sin(ang + 0.5)}`} at={at + 14} dur={8} color={VIOLET} width={6} /></g>;
	};
	return (
		<>
			<SceneHeading text="cot x: the mirror of tan" at={2} size={56} />
			<Legend at={-30} />
			{/* scene 4's cosec and sin fade as cot draws */}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 6, 24)}}>
				<FunctionSimulator x={G4.x} y={G4.y} width={G4.w} height={G4.h} window={{x: [-2, 5], y: [-5, 5]}} family={COSEC} timeline={tl([[0, PI / 2]])} color={INK} bare xTicks={[]} yTicks={[]} curves={[SIN_CURVE(-30)]} at={-30} />
			</div>
			<WindowS family={COT} x={G4.x} y={G4.y} width={G4.w} height={G4.h} timeline={tl([[0, PI / 4]])} at={-30} draw={{at: 8, dur: 40}}
				curves={tanGhost(20)}
				point={{at: pi4, color: INK}} tangent={{at: pi4 + 6, halfLength: 170}}
				overlay={() => <FrameSvg>
					{f >= branch ? [arrow([-1.9, -0.9], [-0.75, -3.6], branch), arrow([1.0, -0.9], [2.0, -4.3], branch + 10), arrow([3.55, 3.6], [4.85, 0.2], branch + 20)] : null}
				</FrameSvg>} />
			<CurveLabel x={168} y={206} at={10} size={40} color={INK}>y = cot x</CurveLabel>
			<CurveLabel x={620} y={160} at={30} size={30} color={GREY}>dashed grey: tan x (last video)</CurveLabel>
			<HandTag x={M.pt(3.75, 0)[0]} y={M.pt(0, -4.35)[1]} text="decreasing on each branch" at={branch + 20} size={38} color={VIOLET} anchor="middle" />
			{f >= two ? <div style={{position: 'absolute', left: p4[0] + 26, top: p4[1] - 84, opacity: prog(f, two, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: VIOLET, textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8'}}>slope −2</div> : null}
			{/* right column */}
			<RecallChip x={1060} y={146} at={quot} size={30}>quotient rule: (f′g − fg′)/g²</RecallChip>
			<Line x={1060} y={206} at={top} size={40}>f = cos x,  <span style={{color: TEAL}}>f′ = −sin x</span></Line>
			<Line x={1060} y={260} at={bottom} size={40}>g = sin x,  <span style={{color: BLUE}}>g′ = cos x</span></Line>
			<WholeRows x={1060} y={330} w={780} size={46} oldSize={46} gap={6} rows={[
				{left: <>(cot x)′</>, right: <Frac n={<><span style={{color: TEAL}}>(−sin x)(sin x)</span> <span style={{color: BLUE}}>− (cos x)(cos x)</span></>} d="sin²x" />, at: sotop, out: tans - 12, keep: true},
				{right: <>−<Frac n="sin²x + cos²x" d="sin²x" /></>, at: takeout + 10, out: tans - 12, keep: true},
				{right: <>−<Frac n="1" d="sin²x" /></>, at: m1, out: tans - 12, keep: true},
			]} />
			<HandTag x={1420} y={552} text="sin²x + cos²x = 1" at={one} out={tans - 12} size={36} color={INK_SOFT} />
			<Enter at={asTan} style={{position: 'absolute', left: 1060, top: kf(f, [[tans - 6, 872], [tans + 22, 346]])}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '3px solid rgba(60,45,20,0.18)', borderRadius: 16, padding: '4px 22px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: '#4f4840'}}>(tan x)′ = sec²x <span style={{fontSize: 30, fontWeight: 600}}>last video</span></div>
			</Enter>
			{f >= tans ? <FrameSvg><DrawPath d="M1150,428 L1150,590" at={tans + 8} dur={14} color={INK_SOFT} width={5} /><DrawPath d="M1136,444 L1150,426 L1164,444 M1136,574 L1150,592 L1164,574" at={tans + 20} dur={8} color={INK_SOFT} width={5} /></FrameSvg> : null}
			<HandTag x={1190} y={470} text="same steps, opposite sign" at={tans + 14} size={40} color={INK} />
			<HandTag x={1190} y={528} text="tan: slope ≥ 1" at={never} size={36} color={INK_SOFT} />
			<AnswerBox x={1060} y={606} at={cosec2} size={52}>(cot x)′ = −cosec²x</AnswerBox>
			<AmberStrip x={1060} y={712} at={wherever} size={36}>sin x ≠ 0  (x ≠ kπ)</AmberStrip>
			<Line x={1060} y={784} at={cots} size={40}>cosec²x ≥ 1, so <span style={{color: VIOLET}}>slope ≤ −1</span></Line>
			<Line x={1060} y={856} at={two - 30} size={40}>x = π/4:  −cosec²(π/4) = −(√2)² = −2</Line>
			{f < pi4 ? null : <FrameSvg><circle cx={p4[0]} cy={p4[1]} r={30} fill="none" stroke={VIOLET} strokeWidth={5} opacity={prog(f, pi4, 12)} /></FrameSvg>}
		</>
	);
};

// ---------- 6. each derivative lives where its function does ----------
type NumTick = {value: number; label: string};
/** A number line with open amber circles at excluded values. */
const ExcludedLine: React.FC<{x: number; y: number; w: number; range: [number, number]; ticks: NumTick[]; open: number[]; at: number; glow?: number}> = ({x, y, w, range, ticks, open, at, glow = 0}) => {
	const f = useCurrentFrame();
	const X = (v: number) => x + 20 + ((v - range[0]) / (range[1] - range[0])) * (w - 60);
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	return (
		<FrameSvg style={{opacity: o}}>
			<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${x + w - 12},${y - 10} L${x + w + 4},${y} L${x + w - 12},${y + 10}`} stroke={INK} strokeWidth={4} fill="none" />
			{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={y + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: open.includes(t.value) ? AMB : INK}}>{t.label}</text></g>)}
			{open.map((v, i) => <circle key={i} cx={X(v)} cy={y} r={14 + 4 * glow} fill="#fffdf8" stroke={AMB} strokeWidth={6} opacity={prog(f, at + 8 + i * 6, 10)} />)}
		</FrameSvg>
	);
};
const W6 = {x: [-2, 5] as [number, number], y: [-4, 4] as [number, number]};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const secx = cue(id, 'Sec x, like tan x'), zero = cue(id, 'is zero', 2), axis = cue(id, 'the axis'), each = cue(id, 'Each derivative lives'), time = cue(id, 'every time');
	const A = {x: 20, y: 140, w: 700, h: 420}, B = {x: 20, y: 540, w: 700, h: 420};
	const MA = gmap(A.x, A.y, A.w, A.h, W6), MB = gmap(B.x, B.y, B.w, B.h, W6);
	const glowAx = prog(f, axis, 10) * (1 - prog(f, axis + 110, 16));
	const glowT = prog(f, time, 10);
	const piT = (k: number, l: string) => ({value: k, label: l});
	return (
		<>
			<SceneHeading text="Each derivative lives where its function does" at={2} size={52} />
			<FunctionSimulator x={A.x} y={A.y} width={A.w} height={A.h} window={W6} family={SEC} timeline={tl([[0, 0]])} color={INK} asymptotes={T_ASYM} xTicks={piTicksHalf} yTicks={[-2, 2]} xLabel="" yLabel="" at={-30}
				curves={tanGhost(-30, undefined, [-2, 5]).map(c => ({...c, color: INK_SOFT, dash: '12 9'}))}
				overlay={() => <FrameSvg>{T_ASYM.map(a => <line key={a} x1={MA.pt(a, 0)[0]} x2={MA.pt(a, 0)[0]} y1={MA.box.top} y2={MA.box.top + MA.box.height} stroke={AMB} strokeWidth={7} strokeDasharray="12 9" opacity={glowAx} />)}</FrameSvg>} />
			<FunctionSimulator x={B.x} y={B.y} width={B.w} height={B.h} window={W6} family={COSEC} timeline={tl([[0, 1]])} color={INK} asymptotes={S_ASYM} xTicks={piTicksHalf} yTicks={[-2, 2]} xLabel="" yLabel="" at={-30}
				curves={[{fn: (X: number) => sin(X), at: -30, color: NAVY, dash: '10 9', width: 4}, ...[[-2, -0.004], [0.004, PI - 0.004], [PI + 0.004, 5]].map(([a, b]) => ({fn: cot, at: -30, color: '#5d6b2a', width: 4, domain: [a, b] as [number, number]}))]}
				overlay={() => <FrameSvg>
					{S_ASYM.map(a => <line key={a} x1={MB.pt(a, 0)[0]} x2={MB.pt(a, 0)[0]} y1={MB.box.top} y2={MB.box.top + MB.box.height} stroke={AMB} strokeWidth={7} strokeDasharray="12 9" opacity={glowAx} />)}
					{S_ASYM.map(a => <circle key={'r' + a} cx={MB.pt(a, 0)[0]} cy={MB.pt(a, 0)[1]} r={22} fill="none" stroke={AMB} strokeWidth={5} opacity={prog(f, axis, 12)} />)}
				</FrameSvg>} />
			<CurveLabel x={B.x + 110} y={B.y + 238} size={30} color={NAVY}>sin x</CurveLabel>
			{/* row 1 */}
			<Panel x={760} y={150} w={1080} at={-30} pad="10px 26px 12px">
				<CardTitle>sec x (ink) and tan x (dashed)</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, lineHeight: 1.3, display: 'flex', gap: 60}}><span>(sec x)′ = sec x tan x</span><span>(tan x)′ = sec²x</span></div>
			</Panel>
			<AmberStrip x={760} y={290} at={secx} size={40} glow={glowT}>cos x ≠ 0:  x ≠ π/2 + kπ</AmberStrip>
			<ExcludedLine x={790} y={420} w={1020} range={[-2, 5]} ticks={[piT(-PI / 2, '−π/2'), piT(0, '0'), piT(PI / 2, 'π/2'), piT(PI, 'π'), piT(3 * PI / 2, '3π/2')]} open={[-PI / 2, PI / 2, 3 * PI / 2]} at={secx + 10} glow={glowT} />
			{/* row 2 */}
			<Panel x={760} y={556} w={1080} at={-30} pad="10px 26px 12px">
				<CardTitle>cosec x (ink) and cot x (olive)</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, lineHeight: 1.3, display: 'flex', gap: 44}}><span>(cosec x)′ = −cosec x cot x</span><span>(cot x)′ = −cosec²x</span></div>
			</Panel>
			<AmberStrip x={760} y={696} at={zero + 8} size={40} glow={glowT}>sin x ≠ 0:  x ≠ kπ</AmberStrip>
			<ExcludedLine x={790} y={826} w={1020} range={[-2, 5]} ticks={[piT(-PI / 2, '−π/2'), piT(0, '0'), piT(PI / 2, 'π/2'), piT(PI, 'π'), piT(3 * PI / 2, '3π/2')]} open={[0, PI]} at={zero + 16} glow={glowT} />
			<HandTag x={1460} y={732} text="where sin x crosses the axis" at={axis} size={36} color={AMB} />
			<HandTag x={1400} y={318} text="write it with the answer" at={each} size={38} color={INK} />
		</>
	);
};
