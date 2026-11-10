// Scenes 4 to 6: worked example 1 (log base 3 of x² + 1), worked example 2 (tan of eˣ, its reachable walls) and
// the memory aid (where ln a goes).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, EquationStrip, FrameSvg, FunctionSimulator, HandTag, MarkSpan, MistakeCard, TaskStrip, kf, vis} from '../../math/studio';
import {Givens} from '../math-a12-d08/parts';
import {cue} from './common';
import {
	A, AMB, AmberStrip, AnswerBox, B, CurveLabel, Frac2, GREY, LOG3, Lb, Line, P, PI, S, SlotRow, T, TANE, TANE_WALL, TanLine, TEAL, VIOLET, gmap, slotRows, tl,
} from './parts';

const GG = {x: 960, y: 180, w: 900, h: 720};
const WG = {x: [-2.5, 2.5] as [number, number], y: [-0.5, 2] as [number, number]};

// ---------- 4. worked example 1: log base 3 of x² + 1 ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const one1 = cue(id, 'equals one') + 11, domain = cue(id, 'Domain first'), realx = cue(id, 'every real x') + 21, insd = cue(id, "The inside's derivative"), three = cue(id, 'natural log of three') + 22, atone = cue(id, 'At x equals one', 2), one2 = cue(id, 'point nine one'), zero = cue(id, 'And at x equals zero');
	const M = gmap(GG.x, GG.y, GG.w, GG.h, WG);
	const X = kf(f, [[0, -2.2], [domain, -2.2], [insd, 2.2], [atone - 10, 2.2], [atone + 30, 1]]);
	const p0 = M.pt(0, 0);
	return (
		<>
			<TaskStrip text="Differentiate, then find the gradient at x = 1" at={2} size={52} />
			<EquationStrip at={10} size={66}>y = log<Lb>3</Lb>(<S>x² + 1</S>)</EquationStrip>
			<Givens x={96} y={280} w={640} size={44} lines={[
				{content: 'x = 1', at: one1},
				{content: 'all real x  (x² + 1 > 0)', at: realx, role: 'k'},
			]} />
			<Line x={96} y={500} at={insd} size={50}>inside: x² + 1,  derivative <B>2x</B></Line>
			<AnswerBox x={96} y={580} at={three} size={52}><span>dy/dx = <Frac2 n={<B>2x</B>} d={<>(x² + 1) <T>ln 3</T></>} /></span></AnswerBox>
			<AmberStrip x={640} y={614} at={three + 20} size={36}>all real x</AmberStrip>
			<Line x={96} y={716} at={atone} size={46}>x = 1:  <Frac2 n="2" d={<>2 <T>ln 3</T></>} /> = <Frac2 n="1" d={<T>ln 3</T>} /> <span style={{color: INK_SOFT, fontWeight: 600, fontSize: 36, opacity: prog(f, one2, 12)}}>≈ 0.910</span></Line>
			<MistakeCard x={96} y={826} w={840} at={zero + 30} size={40} wrong={<>dy/dx = 2x/(x² + 1)</>} caption="base 3, not e: ln 3 is missing" />
			<FunctionSimulator x={GG.x} y={GG.y} width={GG.w} height={GG.h} window={WG} family={LOG3} timeline={tl([[0, X]])} color={INK} at={-30}
				xTicks={[-2, -1, 1, 2]} yTicks={[0.5, 1, 1.5, 2]} xLabel="x" yLabel="y"
				regions={[{x: [-2.5, 2.5], color: 'rgba(248,232,200,0.75)', at: realx}]}
				point={{at: -30, color: INK}} tangent={{at: -30, halfLength: 150}}
				readout={{x: 1290, y: 236, width: 300, at: -30, inline: true, rows: [{label: 'gradient', value: s => s.slope, digits: 3, role: 'gradient'}]}}
				overlay={() => <FrameSvg>
					<TanLine M={M} X={0} Y={0} m={0} half={90} opacity={prog(f, zero, 12)} />
					<circle cx={p0[0]} cy={p0[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={prog(f, zero, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(-2.45, 0)[0]} y={M.pt(0, -0.1)[1]} at={-30} size={34} color={INK}>y = log<Lb>3</Lb>(x² + 1)</CurveLabel>
			<HandTag x={M.pt(0, 0)[0]} y={204} text="x² + 1 ≥ 1 > 0: all real x" at={realx + 6} size={36} color={AMB} anchor="middle" />
			<HandTag x={M.pt(0.25, 0)[0]} y={M.pt(0, -0.3)[1]} text="x = 0: top 2x = 0, flat" at={zero + 10} size={34} color={VIOLET} />
			<CurveLabel x={M.pt(1, 0)[0] + 24} y={M.pt(0, 0.631)[1] + 14} at={one2 - 30} size={32} color={INK}>(1, log<Lb>3</Lb> 2 ≈ 0.631)</CurveLabel>
		</>
	);
};

// ---------- 5. worked example 2: tan of eˣ ----------
const GL = {x: 960, y: 470, w: 900, h: 480};
const WL = {x: [-3, 1.4] as [number, number], y: [-5, 5] as [number, number]};
const GI = {x: 960, y: 160, w: 900, h: 310};
const WI = {x: [-3, 1.4] as [number, number], y: [0, 5.2] as [number, number]};
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const inside = cue(id, 'The inside is'), ans = cue(id, 'So d y by d x'), walls = cue(id, 'Now the walls'), pos = cue(id, 'always positive'), on = cue(id, 'and so on', 1) + 10, cant = cue(id, "x can't be"), zero = cue(id, 'towards zero'), atzero = cue(id, 'At x equals zero'), three = cue(id, 'four three');
	const M = gmap(GL.x, GL.y, GL.w, GL.h, WL);
	const MI = gmap(GI.x, GI.y, GI.w, GI.h, WI);
	const wallX = M.pt(TANE_WALL, 0)[0];
	const cross = MI.pt(TANE_WALL, PI / 2);
	const lvl = (v: number) => MI.pt(0, v)[1];
	const trace = Array.from({length: 60}, (_, i) => {const x = 0.2 - (3.2 * i) / 59; const y = Math.max(-5, Math.min(5, Math.tan(Math.exp(x)))); const [a, b] = M.pt(x, y); return `${i ? 'L' : 'M'}${a.toFixed(1)},${(b - 16).toFixed(1)}`;}).join(' ');
	const p0 = M.pt(0, Math.tan(1));
	return (
		<>
			<TaskStrip text="Differentiate, and state where dy/dx exists" at={2} size={52} />
			<EquationStrip at={10} size={66}>y = tan(<S>e<P>x</P></S>)</EquationStrip>
			<Givens x={96} y={280} w={640} size={44} lines={[{content: 'where dy/dx exists', at: 30, role: 'k'}]} />
			<Line x={96} y={452} at={inside} size={50}>inside: e<P>x</P>,  derivative <B>e<P>x</P></B></Line>
			<AnswerBox x={96} y={532} at={ans} size={54}><span>dy/dx = <B>e<P>x</P></B> <T>sec²</T>(e<P>x</P>)</span></AnswerBox>
			<AmberStrip x={96} y={640} at={cant} size={38}>x ≠ ln(π/2 + kπ),  k = 0, 1, 2, ...</AmberStrip>
			<Line x={96} y={716} at={atzero} size={44}>x = 0:  e⁰ <T>sec²</T>(e⁰) = sec²1 = 1/cos²1</Line>
			<Line x={300} y={772} at={three - 50} size={36} color={INK_SOFT} weight={600}>≈ 3.426  (1 radian)</Line>
			<MistakeCard x={96} y={828} w={820} at={atzero + 30} size={40} wrong={<>dy/dx = sec²(e<P>x</P>)</>} caption="the inside's eˣ is missing" />
			{/* the inside's graph: which levels π/2 + kπ can eˣ reach? */}
			<FunctionSimulator x={GI.x} y={GI.y} width={GI.w} height={GI.h} window={WI} family={{f: u => Math.exp(u), df: u => Math.exp(u)}} timeline={tl([[0, 0]])} color={BLUE_C} at={-30} draw={{at: walls, dur: 40}}
				xTicks={[]} yTicks={[]} xLabel="" yLabel=""
				overlay={() => <FrameSvg>
					{[PI / 2, 3 * PI / 2].map(v => <line key={v} x1={MI.box.left} x2={MI.box.left + MI.box.width} y1={lvl(v)} y2={lvl(v)} stroke={GREY} strokeWidth={3} strokeDasharray="10 9" />)}
					<circle cx={cross[0]} cy={cross[1]} r={16} fill="none" stroke={AMB} strokeWidth={5} opacity={prog(f, on - 20, 12)} />
					{f >= on ? <DrawPath d={`M${cross[0]},${cross[1]} L${wallX},${M.box.top + M.box.height}`} at={on} dur={18} color={AMB} width={5} dash="12 9" /> : null}
				</FrameSvg>} />
			<div style={{position: 'absolute', left: GI.x + 190, top: GI.y + 2, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: BLUE_C}}>the inside: y = e<P>x</P></div>
			<div style={{position: 'absolute', left: MI.box.left + 10, top: lvl(PI / 2) - 38, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>π/2</div>
			<div style={{position: 'absolute', left: MI.box.left + 10, top: lvl(3 * PI / 2) - 38, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>3π/2</div>
			<HandTag x={GI.x + 30} y={GI.y + GI.h - 34} text="eˣ > 0: never −π/2, −3π/2, ..." at={pos} size={34} color={AMB} />
			<FunctionSimulator x={GL.x} y={GL.y} width={GL.w} height={GL.h} window={WL} family={TANE} timeline={tl([[0, 0]])} color={INK} at={-30} branchSafe={{gap: 0.04}}
				xTicks={[-3, -2, -1, 1]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y"
				point={{at: atzero, color: INK}} tangent={{at: atzero + 6, halfLength: 130}}
				readout={{x: GL.x + 110, y: M.pt(0, -1.2)[1], width: 300, at: atzero, inline: true, rows: [{label: 'gradient', value: s => s.slope, digits: 3, role: 'gradient'}]}}
				overlay={() => <FrameSvg>
					<line x1={wallX} x2={wallX} y1={M.box.top} y2={M.box.top + M.box.height} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" opacity={prog(f, on + 14, 12)} />
					{f >= zero - 6 ? <DrawPath d={trace} at={zero - 6} dur={40} color={VIOLET} width={6} /> : null}
					<circle cx={p0[0]} cy={p0[1]} r={28} fill="none" stroke={VIOLET} strokeWidth={4} opacity={prog(f, atzero, 12)} />
				</FrameSvg>} />
			<CurveLabel x={wallX - 14} y={M.box.top + 4} at={on + 14} size={32} color={INK} anchor="end">x = ln(π/2) <span style={{color: INK_SOFT, fontSize: 28}}>≈ 0.452</span></CurveLabel>
			<CurveLabel x={MI.box.left + MI.box.width - 8} y={lvl(3 * PI / 2) - 44} at={on + 40} size={30} color={INK_SOFT} anchor="end">3π/2 at x ≈ 1.550 →</CurveLabel>
			<CurveLabel x={M.pt(-2.9, 0)[0]} y={M.pt(0, 2.6)[1]} at={-30} size={38} color={INK}>y = tan(e<P>x</P>)</CurveLabel>
			<HandTag x={M.pt(-2.9, 0)[0]} y={M.pt(0, -4.1)[1]} text="no walls on the left: flattens towards 0" at={zero} size={34} color={VIOLET} />
		</>
	);
};
const BLUE_C = '#1f6fb2';

// ---------- 6. memory aid: where ln a goes ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const pm = cue(id, 'Powers multiply, because'), ld = cue(id, 'Logs divide, because'), time = cue(id, 'every time'), tryAt = cue(id, 'Try log base seven'), under = cue(id, 'goes underneath'), then = cue(id, 'Then check');
	const g = {teal: 0, blue: vis(f, time, time + 80, 10), amber: prog(f, then, 12)};
	const rows = slotRows(g);
	return (
		<>
			<TaskStrip text="Where does ln a go?" at={2} size={52} />
			<div style={{position: 'absolute', left: 120, top: 160, width: 1680, height: 790, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 182, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 168, top: 232, width: 1580, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.08, color: INK}}>Powers multiply by ln a, logs divide by it, and the inside's slope always goes on top.</div>
			<SlotRow x={160} y={390} w={860} at={-30} size={40} glow={vis(f, pm, ld, 12)}>{rows.a}</SlotRow>
			<SlotRow x={160} y={500} w={860} at={-30} size={40} glow={vis(f, ld, time, 12)}>{rows.log}</SlotRow>
			<SlotRow x={160} y={610} w={860} at={-30} size={40}>{rows.tan}</SlotRow>
			<HandTag x={600} y={372} text="always on top" at={time} size={40} color={BLUE_C} />
			<Line x={1060} y={392} at={pm} size={48}>a<P>x</P> = e<P>x <MarkSpan kind="circle" at={pm + 20} color={TEAL} width={4}><T>ln a</T></MarkSpan></P></Line>
			<HandTag x={1480} y={420} text="multiply" at={pm + 30} size={38} color={TEAL} />
			<Line x={1060} y={478} at={ld} size={48}>log<Lb>a</Lb> x = <Frac2 n="ln x" d={<MarkSpan kind="circle" at={ld + 20} color={TEAL} width={4}><T>ln a</T></MarkSpan>} /></Line>
			<HandTag x={1480} y={520} text="divide" at={ld + 30} size={38} color={TEAL} />
			<Line x={1060} y={604} at={tryAt} size={48}>(log<Lb>7</Lb>(2x + 3))′</Line>
			<Line x={1060} y={680} at={under - 30} size={48}>= <Frac2 n={<B>2</B>} d={<>(2x + 3) <T>ln 7</T></>} /></Line>
			<HandTag x={1480} y={724} text="2x + 3 > 0" at={under + 10} size={38} color={AMB} />
			<Line x={168} y={742} at={then} size={36} weight={700}>then the domain:  <A g={g.amber}><S /> &gt; 0</A> for a log,  <A g={g.amber}><S /> ≠ π/2 + kπ</A> for tan</Line>
			<HandTag x={168} y={846} text="drone: spot speed = sec²(tilt) × tilt rate" at={-30} size={38} color={TEAL} />
			<Line x={1060} y={872} at={-30} size={34} color={INK_SOFT} weight={700}>a &gt; 0  (and a ≠ 1 for a log)</Line>
		</>
	);
};
