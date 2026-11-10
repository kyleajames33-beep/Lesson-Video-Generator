// Scenes 3 to 5: worked example 1 (the tangent to cos 2x at π/6, g01 board), the quarter turn of the slope
// triangle (why the normal's gradient is −1/m, and why m ≠ 0), and worked example 1b (the normal).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {EquationStrip, HandTag, MarkSpan, MistakeCard, TaskStrip, kf, piTicks, smooth, vis} from '../../math/studio';
import {Givens} from '../math-a12-d08/parts';
import {cue} from './common';
import {
	AnswerBox, AnswerStack, COS2, CurveLabel, G, Legend, Line, Note, PI, Panel, PlanCard, R3, RecallChip, Results, RoadView, S, SQ, SQ_YTICKS, TEAL, Tl, V, VIOLET, WIN_SQ, WK, Win, gmap, lerpStage, lerpWin,
} from './parts';

const P6 = PI / 6;
const ROAD: [number, number][] = [[-0.45, 2.25]];
const TICKS = piTicks(0, 1, 6);
const xTicksIn = (w: Win) => TICKS.filter(t => t.value >= w.x[0] - 1e-6 && t.value <= w.x[1] + 1e-6);
const yTicksIn = (w: Win) => SQ_YTICKS.filter(t => t.value >= w.y[0] + 0.05 && t.value <= w.y[1] - 0.05);
const TANGENT = <>y − ½ = −√3(x − π/6)</>;

// ---------- 3. worked example: the tangent to cos 2x ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const six0 = cue(id, 'where x equals pi over six') + 17, cosOf = cue(id, 'cos of two'), half1 = cue(id, 'which is a half') + 11, ptIs = cue(id, 'So the point is'), next = cue(id, 'Next the gradient'), dydx = cue(id, 'dy by dx'), at6 = cue(id, 'At pi over six');
	const thats = cue(id, "That's minus two times", 2), three = cue(id, 'so minus root three') + 27, subst = cue(id, 'Now substitute'), yHalf = cue(id, 'y minus a half'), eqR3 = cue(id, 'equals minus root three'), xPi = cue(id, 'x minus pi over six'), six = xPi + 34, asks = cue(id, 'If the question asks'), expand = cue(id, 'it to y');
	const st = lerpStage(SQ, WK, smooth(prog(f, 0, 30)));
	const M = gmap(WK.x, WK.y, WK.w, WK.h, WIN_SQ);
	const P = M.pt(P6, 0.5);
	const g1 = vis(f, yHalf + 10, yHalf + 70, 8), g2 = vis(f, eqR3 + 10, eqR3 + 70, 8), g3 = vis(f, xPi + 14, xPi + 70, 8);
	return (
		<>
			<TaskStrip text="Find the equation of the tangent" at={6} size={52} />
			<EquationStrip at={14} size={66}>y = cos 2x</EquationStrip>
			<Givens x={96} y={262} w={520} size={44} lines={[{content: <>x = π/6  <span style={{fontSize: 34, color: INK_SOFT}}>(radians)</span></>, at: six0}]} />
			<Results x={650} y={262} at={ptIs} title="Point and gradient" rows={[{content: <>(π/6, ½)<span style={{opacity: prog(f, three + 16, 12)}}>    m = <V>−√3</V></span></>, at: ptIs + 10}]} />
			<Line x={96} y={412} at={cosOf} size={52} dim={prog(f, next, 14) * 0.6}>y = cos(<S>2 × π/6</S>) = cos(π/3)<span style={{opacity: prog(f, half1, 12)}}> = ½</span></Line>
			<Note x={830} y={424} at={ptIs + 14} out={next} size={32}>from f, not f′</Note>
			<Line x={96} y={482} at={dydx} size={52} dim={prog(f, subst, 14) * 0.6}>dy/dx = −2 sin 2x  <span style={{fontSize: 30, fontWeight: 700, color: INK_SOFT}}>chain rule, last video</span></Line>
			<Line x={96} y={552} at={at6} size={48} dim={prog(f, subst, 14) * 0.6}>x = π/6:  −2 sin(π/3)<span style={{opacity: prog(f, thats, 12)}}> = −2 × √3/2 = <V>−√3</V></span><span style={{opacity: prog(f, three, 12), fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ −1.732</span></Line>
			<Line x={96} y={638} at={yHalf} out={six} size={52}>tangent:  y − <G g={g1}>½</G> = <G g={g2}><V>−√3</V></G>(x − <G g={g3}>π/6</G>)</Line>
			<AnswerBox x={70} y={628} at={six} size={52}><span>tangent:  {TANGENT}</span></AnswerBox>
			<Line x={96} y={730} at={expand} size={40} color={INK_SOFT} weight={700}>y = −√3x + π√3/6 + ½    ≈ intercept 1.407</Line>
			<MistakeCard x={96} y={792} w={900} at={asks} size={40} wrong={<>point (π/6, −√3)</>} caption="−√3 is the gradient, not the height" />
			<PlanCard x={96} y={632} at={20} out={yHalf - 12} steps={[
				{content: <>point from f</>, done: ptIs + 10},
				{content: <>gradient from f′</>, done: three + 16},
				{content: <>substitute into y − y₁ = m(x − x₁)</>},
			]} />
			<Legend at={-60} />
			<RoadView S={st} win={WIN_SQ} fam={COS2} X={P6} at={-60} xTicks={xTicksIn(WIN_SQ)} yTicks={SQ_YTICKS} xLabel="x (radians)"
				road={{at: -60, pieces: ROAD}} carO={1} ringO={prog(f, half1, 12)} tangentO={prog(f, six, 16)} glowO={prog(f, six, 16)} glowReach={200} />
			<CurveLabel x={M.pt(-0.28, 0)[0]} y={M.pt(0, 1.19)[1]} at={30} size={40} color={INK}>y = cos 2x</CurveLabel>
			<CurveLabel x={P[0] - 196} y={P[1] - 30} at={half1} size={36} color={INK}>(π/6, ½)</CurveLabel>
			<HandTag x={M.pt(0.95, 0)[0]} y={M.pt(0, 0.92)[1]} text="headlights: the tangent" at={six + 12} size={36} color={VIOLET} />
		</>
	);
};

// ---------- 4. why the normal's gradient flips ----------
const rot = (x: number, y: number, a: number): [number, number] => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const angles = cue(id, 'right angles'), know = cue(id, 'You know its gradient'), draw = cue(id, 'Draw a small'), runAt = cue(id, 'a run along'), riseAt = cue(id, 'and a rise') + 4, point = cue(id, 'about the point') + 11, swap = cue(id, 'swap places'), way = cue(id, 'opposite way') + 11;
	const newG = cue(id, 'So the new gradient'), flipped = cue(id, 'flipped upside'), sign = cue(id, 'sign changed') + 11, minus = cue(id, "That's minus one over"), needs = cue(id, 'needs m');
	const st = lerpStage(WK, SQ, smooth(prog(f, 0, 30)));
	const win = lerpWin(WIN_SQ, {x: [-0.25, 1.55], y: [-0.55, 1.25]}, smooth(prog(f, draw - 20, 40)));
	const M = gmap(SQ.x, SQ.y, SQ.w, SQ.h, win);
	const P = M.pt(P6, 0.5);
	const phi = (PI / 2) * smooth(prog(f, point, 45));
	const turned = f >= way;
	const sc = (d: [number, number]): [number, number] => [P[0] + d[0] * M.sx, P[1] - d[1] * M.sy];
	const Cc = sc(rot(0.5, 0, phi)), Ec = sc(rot(0.5, -R3 / 2, phi));
	const triO = prog(f, draw, 14);
	const runO = prog(f, runAt, 12), riseO = prog(f, riseAt, 12);
	const dirL = rot(1, -R3, phi), dl = Math.hypot(dirL[0], dirL[1]);
	const lu: [number, number] = [dirL[0] / dl * M.sx, -dirL[1] / dl * M.sy];
	const lineO = prog(f, point - 4, 8);
	const toTeal = prog(f, way, 16);
	const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
	const mRun = mid(P, Cc), mRise = mid(Cc, Ec);
	// label offsets, pushed away from the triangle's centre
	const cen: [number, number] = [(P[0] + Cc[0] + Ec[0]) / 3, (P[1] + Cc[1] + Ec[1]) / 3];
	const push = (m: [number, number], d: number): [number, number] => {const vx = m[0] - cen[0], vy = m[1] - cen[1], l = Math.hypot(vx, vy) || 1; return [m[0] + (vx / l) * d, m[1] + (vy / l) * d];};
	const lRun = push(mRun, 44), lRise = push(mRise, 48);
	const lab = (p: [number, number], text: string, color: string, o: number, anchor: 'start' | 'middle' | 'end' = 'middle') => (o <= 0.001 ? null : <text x={p[0]} y={p[1] + 12} textAnchor={anchor} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: color}} stroke="#fffdf8" strokeWidth={9} paintOrder="stroke" opacity={o}>{text}</text>);
	const midTurn = f >= point && f < way;
	return (
		<>
			<TaskStrip text="Why the normal's gradient flips" at={4} size={52} />
			<RoadView S={st} win={win} fam={COS2} X={P6} at={-60} xTicks={xTicksIn(win)} yTicks={yTicksIn(win)} xLabel="x (radians)"
				road={{at: -60, pieces: ROAD, dim: 1}} carO={0.4} ringO={1} tangentO={1 - 0.55 * prog(f, point, 20)} acrossO={prog(f, point, 14) * (1 - prog(f, way + 10, 14))}
				normalO={toTeal} rightO={prog(f, way + 6, 12)}
				under={() => (lineO > 0.001 && toTeal < 1 ? <line x1={P[0] - lu[0] * 900} y1={P[1] - lu[1] * 900} x2={P[0] + lu[0] * 900} y2={P[1] + lu[1] * 900} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" opacity={lineO * (1 - toTeal)} /> : null)}
				over={() => <>
					<g opacity={triO}>
						<line x1={P[0]} y1={P[1]} x2={Cc[0]} y2={Cc[1]} stroke={TEAL} strokeWidth={7} strokeLinecap="round" opacity={runO} />
						<line x1={Cc[0]} y1={Cc[1]} x2={Ec[0]} y2={Ec[1]} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={riseO} />
						<line x1={P[0]} y1={P[1]} x2={Ec[0]} y2={Ec[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 6" opacity={riseO} />
					</g>
					{!turned ? lab(lRun, 'run ½', TEAL, runO * (midTurn ? 0.55 : 1)) : lab([lRun[0] - 8, lRun[1]], 'rise ½', TEAL, prog(f, way, 10), 'end')}
					{!turned ? lab(lRise, 'rise −√3/2', VIOLET, riseO * (midTurn ? 0.55 : 1), 'start') : lab([lRise[0], lRise[1] - 18], 'run √3/2', VIOLET, prog(f, way, 10))}
					{turned ? <path d={`M${Cc[0] + 10},${Cc[1] - 26} L${Ec[0] - 14},${Ec[1] - 26} M${Ec[0] - 30},${Ec[1] - 38} L${Ec[0] - 12},${Ec[1] - 26} L${Ec[0] - 30},${Ec[1] - 14}`} stroke={VIOLET} strokeWidth={4} fill="none" strokeLinecap="round" opacity={prog(f, way + 8, 10)} /> : null}
				</>} />
			<CurveLabel x={M.pt(1.12, 0)[0]} y={M.pt(0, -0.05)[1]} at={30} size={40} color={INK}>y = cos 2x</CurveLabel>
			<HandTag x={M.pt(-0.2, 0)[0]} y={M.pt(0, -0.3)[1]} text="run and rise swap" at={swap} size={40} color={INK} />
			<HandTag x={M.pt(-0.2, 0)[0]} y={M.pt(0, -0.3)[1]} text="a quarter turn" at={point} out={swap} size={40} color={INK} />
			<Legend at={-60} />
			<Panel x={880} y={676} w={700} at={30} out={newG - 6} border={TEAL} pad="6px 24px 8px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>normal: same point, <Tl>gradient ?</Tl></div>
			</Panel>
			{/* right column */}
			<Results x={880} y={160} at={-60} title="Point and gradient" rows={[{content: <>(π/6, ½)    m = <V>−√3</V></>, at: -60}]} />
			<AnswerBox x={880} y={300} at={-60} size={44}><span>tangent:  {TANGENT}</span></AnswerBox>
			<RecallChip x={880} y={400} at={angles} size={38}>Year 11:  m₁ × m₂ = −1<span style={{opacity: prog(f, know + 60, 12)}}><br />perpendicular: at right angles</span></RecallChip>
			<Panel x={880} y={548} w={960} at={riseAt + 6} border={VIOLET} pad="8px 26px 10px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, whiteSpace: 'pre', lineHeight: 1.2}}>
					{!turned ? <>gradient = rise ÷ run = <V>−√3</V></> : <>gradient = <Tl>½</Tl> ÷ (<V>√3/2</V>) = 1/√3</>}
				</div>
			</Panel>
			<div style={{position: 'absolute', left: 880, top: 676, opacity: prog(f, newG, 12)}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, whiteSpace: 'pre'}}>
					normal gradient = <span style={{opacity: prog(f, sign, 12)}}><MarkSpan kind="circle" at={sign + 6} color={TEAL} width={4}>−</MarkSpan></span><MarkSpan kind="circle" at={flipped + 6} color={VIOLET} width={4}>1/m</MarkSpan>
				</div>
			</div>
			<HandTag x={1360} y={792} text="flip" at={flipped + 10} size={42} color={VIOLET} />
			<HandTag x={1110} y={792} text="change the sign" at={sign + 10} size={42} color={TEAL} anchor="middle" />
			<Line x={880} y={850} at={needs} size={46} color={INK} weight={800}><span style={{textDecoration: 'underline', textDecorationThickness: 4, textUnderlineOffset: 8}}>needs m ≠ 0</span><span style={{fontSize: 34, fontWeight: 700, color: INK_SOFT}}>   (1/0 doesn't exist)</span></Line>
		</>
	);
};

// ---------- 5. worked example: the normal ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const flip = cue(id, 'Flip it'), three = cue(id, 'root three over three') + 20, check = cue(id, 'Quick check'), times = cue(id, 'times one over'), one = cue(id, 'is minus one') + 16, normalIs = cue(id, 'So the normal is'), xPi = cue(id, 'x minus pi over six'), six = xPi + 33;
	const only = cue(id, 'The only new work'), road = cue(id, 'On the road'), lights = cue(id, 'the headlights follow'), across = cue(id, 'line straight across');
	const zoom = smooth(prog(f, road, 50));
	const st = lerpStage(SQ, WK, smooth(prog(f, 0, 30)));
	const ZW: Win = {x: [P6 - 0.55, P6 + 0.55], y: [0.5 - 0.55, 0.5 + 0.55]};
	const win = lerpWin(WIN_SQ, ZW, zoom);
	const M0 = gmap(WK.x, WK.y, WK.w, WK.h, WIN_SQ);
	const P0 = M0.pt(P6, 0.5);
	const pg = vis(f, only, only + 80, 10);
	return (
		<>
			<TaskStrip text="Find the equation of the normal" at={4} size={52} />
			<EquationStrip at={10} size={66}>y = cos 2x</EquationStrip>
			<Givens x={96} y={262} w={520} size={44} lines={[{content: <>x = π/6  <span style={{fontSize: 34, color: INK_SOFT}}>(radians)</span></>, at: 8}]} />
			<Results x={650} y={262} at={-60} title="Point and gradient" rows={[{content: <>(π/6, ½)    m<sub style={{fontSize: 28}}>T</sub> = <V>−√3</V></>, at: -60, glow: pg}]} />
			<Line x={96} y={412} at={flip} size={52} dim={prog(f, normalIs, 14) * 0.5}>m<sub style={{fontSize: 30}}>N</sub> = −1/(<V>−√3</V>) = <Tl>1/√3</Tl><span style={{opacity: prog(f, three, 12)}}> = <Tl>√3/3</Tl></span><span style={{opacity: prog(f, three + 12, 12), fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ 0.577, rationalised</span></Line>
			<Line x={96} y={490} at={times} size={48} dim={prog(f, normalIs, 14) * 0.5}>check:  (<V>−√3</V>) × (<Tl>√3/3</Tl>) = <span style={{opacity: prog(f, one, 10)}}>−1</span><span style={{opacity: prog(f, one + 8, 10), color: '#287347'}}>  ✓</span></Line>
			<Line x={96} y={578} at={normalIs} out={six} size={52}>normal:  y − ½ = <Tl>√3/3</Tl>(x − π/6)</Line>
			<AnswerStack x={70} y={568} at={six} size={48} rows={[
				{content: <>tangent:  y − <G g={pg}>½</G> = <V>−√3</V>(x − <G g={pg}>π/6</G>)</>, at: six},
				{content: <>normal:   y − <G g={pg}>½</G> = <Tl>√3/3</Tl>(x − <G g={pg}>π/6</G>)</>, at: six},
			]} />
			<PlanCard x={96} y={740} at={20} out={road - 4} steps={[
				{content: <>same point (π/6, ½)</>, glow: pg},
				{content: <>new gradient: flip and change the sign</>, done: three},
				{content: <>substitute into y − y₁ = m(x − x₁)</>, done: six},
			]} />
			<Legend at={-60} />
			<RoadView S={st} win={win} fam={COS2} X={P6} at={-60} xTicks={xTicksIn(win)} yTicks={yTicksIn(win)} xLabel="x (radians)"
				road={{at: -60, pieces: ROAD}} carO={1} ringO={1} tangentO={1} glowO={prog(f, lights, 14)} glowReach={230 + 200 * zoom}
				normalO={prog(f, six, 16)} rightO={prog(f, six + 10, 12)} acrossO={prog(f, across, 12)} acrossSolid={1} acrossHalf={140 + 160 * zoom}
				over={Mm => {const Pp = Mm.pt(P6, 0.5); return <circle cx={Pp[0]} cy={Pp[1]} r={28 + 22 * Math.sin(Math.min(1, Math.max(0, (f - only) / 24)) * PI)} fill="none" stroke={INK} strokeWidth={4} opacity={vis(f, only, only + 24, 4)} />;}} />
			<CurveLabel x={M0.pt(-0.28, 0)[0]} y={M0.pt(0, 1.19)[1]} at={-60} out={road} size={40} color={INK}>y = cos 2x</CurveLabel>
			<CurveLabel x={P0[0] - 196} y={P0[1] - 30} at={-60} out={road} size={36} color={INK}>(π/6, ½)</CurveLabel>
			<HandTag x={110} y={760} text="on the road: headlights follow the tangent" at={lights + 6} size={40} color={VIOLET} />
			<HandTag x={110} y={830} text="straight across the road: the normal" at={across + 6} size={40} color={TEAL} />
		</>
	);
};
