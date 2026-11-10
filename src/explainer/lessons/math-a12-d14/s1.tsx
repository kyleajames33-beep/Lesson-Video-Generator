// Scenes 1 and 2: d13's handoff frame reframed to the square road map, the car's headlights along the tangent,
// the parallel family (a gradient alone is a direction) and the line straight across the road; then the two
// ingredients (point from f, gradient from f′) and the beam lighting the road again.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, HandTag, SceneHeading, kf, piTicks, smooth, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {D13FinalFrame, D14_STAGE, MemoryLine, WIN_C} from '../math-a12-d13/s4';
import {cue} from './common';
import {
	B, COS2, Chip, GREY_INK, Legend, CloseUp, CurveLabel, DriveStrip, G, Line, Note, PI, Panel, R3, RecallChip, RoadView, S, SQ, SQ_YTICKS, TAN_C, TEAL, VIOLET, MEET_X, MEET_Y, GREY, Win, WIN_SQ, gmap, lerpStage, lerpWin,
} from './parts';

const C_TICKS = piTicks(0, 1, 6);
const xTicksIn = (w: Win) => C_TICKS.filter(t => t.value >= w.x[0] - 1e-6 && t.value <= w.x[1] + 1e-6);
const P6 = PI / 6;
const ROAD: [number, number][] = [[-0.45, 2.25]];
const lp = (a: number, b: number, t: number) => a + (b - a) * t;
/** Close-up panel and readouts in the right column (scenes 1 and 2). */
const CU = {x: 880, y: 330, w: 960, h: 410};
const K = 2.3;

/** A dashed violet line y = −√3x + c across the square plot. */
const famLine = (M: ReturnType<typeof gmap>, c: number, o: number, dash = '16 11', w = 5, color = VIOLET) => {
	if (o <= 0.001) return null;
	const a = M.pt(-1, R3 + c), b = M.pt(3, -3 * R3 + c);
	return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" opacity={o} />;
};
const greyCross = (p: [number, number], o: number) => (o <= 0.001 ? null : (
	<g opacity={o} stroke={GREY} strokeWidth={6} strokeLinecap="round"><line x1={p[0] - 16} y1={p[1] - 16} x2={p[0] + 16} y2={p[1] + 16} /><line x1={p[0] + 16} y1={p[1] - 16} x2={p[0] - 16} y2={p[1] + 16} /></g>
));

// ---------- 1. hook: a gradient is not yet a line ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const curve0 = cue(id, 'This curve'), three = cue(id, 'root three') + 9, picture = cue(id, 'Picture the curve'), night = cue(id, 'At night'), lights = cue(id, 'headlights');
	const line1 = cue(id, "Here's a line"), another = cue(id, "Here's another") + 7, another2 = cue(id, 'and another'), onCurve = cue(id, 'on the curve') + 6, sits = cue(id, 'where it sits'), across = cue(id, 'straight across'), normal = cue(id, 'called the normal') + 17;
	const t = smooth(prog(f, curve0 + 6, 150));
	const st = lerpStage(D14_STAGE, SQ, t);
	const win = lerpWin(WIN_C as Win, WIN_SQ, t);
	const M = gmap(st.x, st.y, st.w, st.h, win);
	const Mc = gmap(D14_STAGE.x, D14_STAGE.y, D14_STAGE.w, D14_STAGE.h, WIN_C as Win);
	const Ms = gmap(SQ.x, SQ.y, SQ.w, SQ.h, WIN_SQ);
	const X = kf(f, [[picture + 6, -0.3], [picture + 72, P6]]);
	const carO = prog(f, picture + 6, 12);
	const tO = kf(f, [[lights + 3, 0], [lights + 19, 1], [line1, 1], [line1 + 14, 0.22], [onCurve + 14, 0.22], [onCurve + 30, 1]]);
	const gO = kf(f, [[lights, 0], [lights + 14, 1], [line1, 1], [line1 + 14, 0.25], [onCurve + 14, 0.25], [onCurve + 30, 1]]);
	const nightO = vis(f, night, line1, 20);
	const c = kf(f, [[line1, 1.9], [another, 1.9], [another + 20, 1.0], [another2 + 6, 1.0], [another2 + 26, 0.6], [onCurve - 6, 0.6], [onCurve + 24, TAN_C]]);
	const moveO = prog(f, line1, 12) * (1 - prog(f, onCurve + 24, 14));
	const acrossO = prog(f, across, 14), solid = prog(f, normal, 10);
	const fade13 = prog(f, 40, 20);
	const ringP = M.pt(P6, 0.5);
	const lab0 = [ringP[0] + 34, ringP[1] - 64], lab1 = [Ms.pt(P6, 0.5)[0] - 215, Ms.pt(P6, 0.5)[1] - 30];
	const cl0 = [Mc.pt(2.2, 0)[0], Mc.pt(0, 1.38)[1]], cl1 = [Ms.pt(1.3, 0)[0], Ms.pt(0, 1.17)[1]];
	const r1 = [lp(1100, 880, t), lp(250, 168, t)], r2 = [lp(1100, 880, t), lp(350, 248, t)];
	const bx = Ms.pt(1.05, 0.95);
	return (
		<>
			{fade13 < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade13}}><D13FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade13 * (1 - prog(f, curve0, 14))}}>
				<SceneHeading text="Next: lines from derivatives" at={-300} size={56} />
				<MemoryLine at={-60} />
				<Chip x={1100} y={790} at={-60} size={40} color={MATH_STRAND_ACCENT}>Next: tangents and normals</Chip>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: fade13}}>
				<SceneHeading text="Tangents and normals: a point and a gradient" at={curve0 + 16} size={56} />
				<RoadView S={st} win={win} fam={COS2} X={X} px={P6} at={-60}
					xTicks={xTicksIn(win)} yTicks={t < 0.5 ? [-1, 1] : SQ_YTICKS} xLabel="x (radians)"
					road={{at: picture, pieces: ROAD, grow: 30}} carO={carO} tangentO={tO} glowO={gO} night={nightO}
					acrossO={acrossO} acrossSolid={solid} normalO={prog(f, normal, 14)} rightO={prog(f, across + 10, 12)} ringO={1}
					under={Mm => <>
						{famLine(Mm, 1.9, 0.45 * prog(f, another + 6, 10))}
						{famLine(Mm, 1.0, 0.45 * prog(f, another2 + 12, 10))}
						{famLine(Mm, 0.6, 0.45 * prog(f, onCurve, 10))}
						{famLine(Mm, c, moveO, '18 10', 6)}
						{greyCross(Mm.pt((1.9 + 0.6) / R3, -0.6), prog(f, onCurve + 30, 10))}
						{greyCross(Mm.pt((1.0 + 0.6) / R3, -0.6), prog(f, onCurve + 36, 10))}
						{greyCross(Mm.pt((0.6 + 0.6) / R3, -0.6), prog(f, onCurve + 42, 10))}
					</>} />
				<CurveLabel x={lp(lab0[0], lab1[0], t)} y={lp(lab0[1], lab1[1], t)} at={-60} size={38} color={INK}>(π/6, ½)</CurveLabel>
				<CurveLabel x={lp(cl0[0], cl1[0], t)} y={lp(cl0[1], cl1[1], t)} at={-60} size={42} color={INK}>y = cos 2x</CurveLabel>
				{/* d13's two rows, moved into the right column */}
				<Line x={r1[0]} y={r1[1]} at={-60} out={sits - 24} size={52}>dy/dx = −<B>2</B> sin <S>2x</S></Line>
				<RecallChip x={lp(1650, 1400, t)} y={lp(262, 180, t)} at={-60} out={sits - 24} size={30}>d06</RecallChip>
				<Line x={r2[0]} y={r2[1]} at={-60} out={sits - 24} size={48}>x = π/6:  −2 sin(π/3) = <G g={vis(f, three, three + 90, 10)}>−√3</G></Line>
				<Line x={lp(1500, 1560, t)} y={lp(418, 262, t)} at={-60} out={sits - 24} size={36} color={INK_SOFT} weight={600}>≈ −1.732</Line>
				<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, picture, 12)}}>
					<Chip x={lp(1100, 880, t)} y={lp(520, 360, t)} at={-60} size={46} color={VIOLET}>tangent line?</Chip>
					<Chip x={lp(1100, 1260, t)} y={lp(630, 360, t)} at={-60} size={46} color={TEAL}>normal line?</Chip>
				</div>
				{/* the gradient board joined to the ring */}
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: vis(f, three, line1 - 14, 12)}}>
					<line x1={ringP[0] + 24} y1={ringP[1] - 20} x2={bx[0] + 10} y2={bx[1] + 70} stroke={VIOLET} strokeWidth={3} strokeDasharray="8 6" />
				</svg>
				<Panel x={bx[0]} y={bx[1]} w={290} at={three} out={line1 - 14} border={VIOLET} pad="4px 20px 8px">
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: VIOLET}}>gradient</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: VIOLET, lineHeight: 1.05}}>−√3</div>
				</Panel>
				<HandTag x={bx[0]} y={bx[1] + 20} text="each dashed line:" at={line1 + 10} out={onCurve} size={36} color={VIOLET} />
				<HandTag x={bx[0]} y={bx[1] + 66} text="gradient −√3" at={line1 + 30} out={onCurve} size={36} color={VIOLET} />
				<HandTag x={bx[0]} y={bx[1] + 20} text="right gradient," at={onCurve + 30} out={across - 20} size={36} color={GREY_INK} />
				<HandTag x={bx[0]} y={bx[1] + 66} text="wrong place" at={onCurve + 48} out={across - 20} size={36} color={GREY_INK} />
				{/* the close-up and the readouts */}
				<CloseUp {...CU} M={Ms} fam={COS2} X={X} k={K} at={picture + 10} pieces={ROAD} glowO={gO} tangentO={tO} acrossO={acrossO} acrossSolid={solid} night={nightO} title="CLOSE-UP">
					<HandTag x={24} y={78} text="headlights: the tangent" at={lights + 24} size={40} color={VIOLET} />
					<HandTag x={24} y={CU.h - 40} text="straight across: the normal" at={across + 10} size={40} color={TEAL} />
				</CloseUp>
				<DriveStrip x={880} y={762} w={960} X={X} m={COS2.df(X, {})} at={picture + 14} acrossAt={across} mGlow={vis(f, three, three + 60, 10)} />
				<Chip x={880} y={168} at={sits} size={44} color={VIOLET}>gradient: direction only</Chip>
				<Chip x={880} y={252} at={normal - 6} size={40} color={MATH_STRAND_ACCENT}>point + gradient → tangent and normal?</Chip>
			</div>
		</>
	);
};

// ---------- 2. two ingredients ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const met = cue(id, 'You met the formula'), yminus = cue(id, 'y minus y one'), point = cue(id, 'The point comes'), subst = cue(id, 'Substitute'), height = cue(id, 'the height');
	const grad = cue(id, 'The gradient comes'), same2 = cue(id, 'at that same x'), def = cue(id, 'that gradient') + 6, once = cue(id, "doesn't have to"), again = cue(id, 'meets the curve again'), along = cue(id, 'further along') + 10;
	const M = gmap(SQ.x, SQ.y, SQ.w, SQ.h, WIN_SQ);
	const P = M.pt(P6, 0.5), A0 = M.pt(P6, 0), Q = M.pt(MEET_X, MEET_Y);
	const run = prog(f, again + 4, 40);
	const runEnd: [number, number] = [P[0] + (Q[0] - P[0]) * run, P[1] + (Q[1] - P[1]) * run];
	return (
		<>
			<SceneHeading text="Two ingredients: a point and a gradient" at={met - 30} size={56} />
			<SceneHeading text="Tangents and normals: a point and a gradient" at={-300} size={56} out={met - 40} />
			<RoadView S={SQ} win={WIN_SQ} fam={COS2} X={P6} at={-60} xTicks={xTicksIn(WIN_SQ)} yTicks={SQ_YTICKS} xLabel="x (radians)"
				road={{at: -60, pieces: ROAD}} carO={1} tangentO={1} glowO={1} ringO={1}
				normalO={1 - 0.7 * prog(f, 4, 20)} acrossO={1 - 0.7 * prog(f, 4, 20)} acrossSolid={1 - prog(f, 4, 20)} rightO={1 - prog(f, 4, 20)}
				under={Mm => <>
					{famLine(Mm, 1.9, 0.45 * (1 - prog(f, 2, 18)))}
					{famLine(Mm, 1.0, 0.45 * (1 - prog(f, 2, 18)))}
					{famLine(Mm, 0.6, 0.45 * (1 - prog(f, 2, 18)))}
				</>}
				over={() => <>
					{/* the height rises from the axis to the car (point from f) */}
					{f >= subst ? <DrawPath d={`M${A0[0]},${A0[1]} L${P[0]},${P[1] + 40}`} at={subst} dur={22} color={INK} width={4} dash="9 7" /> : null}
					{f >= subst + 18 ? <path d={`M${P[0] - 12},${P[1] + 56} L${P[0]},${P[1] + 40} L${P[0] + 12},${P[1] + 56}`} stroke={INK} strokeWidth={4} fill="none" opacity={prog(f, subst + 18, 8)} /> : null}
					<circle cx={A0[0]} cy={A0[1]} r={9} fill={INK} opacity={prog(f, subst, 10)} />
					{/* the beam runs on to the second meeting */}
					{run > 0 ? <line x1={P[0]} y1={P[1]} x2={runEnd[0]} y2={runEnd[1]} stroke="#ffd970" strokeWidth={22} strokeLinecap="round" opacity={0.7} /> : null}
					{run > 0 ? <line x1={P[0]} y1={P[1]} x2={runEnd[0]} y2={runEnd[1]} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /> : null}
					<circle cx={Q[0]} cy={Q[1]} r={28} fill="none" stroke={VIOLET} strokeWidth={5} opacity={prog(f, along, 10)} />
				</>} />
			<CurveLabel x={P[0] - 215} y={P[1] - 30} at={-60} size={38} color={INK}>(π/6, ½)</CurveLabel>
			<CurveLabel x={M.pt(1.3, 0)[0]} y={M.pt(0, 1.17)[1]} at={-60} size={42} color={INK}>y = cos 2x</CurveLabel>
			<HandTag x={A0[0] + 18} y={A0[1] - 70} text="height from f" at={subst + 20} out={once} size={36} color={INK} />
			<HandTag x={M.pt(0.62, 0)[0]} y={M.pt(0, -1.06)[1]} text="the beam lights the road again" at={along + 4} size={36} color={VIOLET} />
			<Note x={Q[0] + 40} y={Q[1] - 70} at={along + 16} size={30}>meets again: still the tangent at π/6</Note>
			{/* scene 1's chips and close-up leave as the formula arrives */}
			<Chip x={880} y={168} at={-60} out={met - 20} size={44} color={VIOLET}>gradient: direction only</Chip>
			<Chip x={880} y={252} at={-60} out={met - 20} size={40} color={MATH_STRAND_ACCENT}>point + gradient → tangent and normal?</Chip>
			<CloseUp x={880} y={kf(f, [[met - 30, CU.y], [met, 490]])} w={960} h={kf(f, [[met - 30, CU.h], [met, 300]])} M={M} fam={COS2} X={P6} k={kf(f, [[met - 30, K], [met, 2.0]])} at={-60} out={def - 14} pieces={ROAD} glowO={1} tangentO={1} acrossO={1 - 0.7 * prog(f, 4, 20)}>
				<HandTag x={24} y={78} text="headlights: the tangent" at={-60} size={40} color={VIOLET} />
			</CloseUp>
			{/* the two ingredients */}
			<RecallChip x={880} y={168} at={met} size={40}>Year 11:  <span style={{color: INK, fontWeight: 800, background: vis(f, yminus, yminus + 120, 10) > 0 ? `rgba(248,232,200,${0.9 * vis(f, yminus, yminus + 120, 10)})` : undefined, borderRadius: 8}}>y − y₁ = m(x − x₁)</span></RecallChip>
			{f >= point - 4 ? (
				<div style={{position: 'absolute', left: 880, top: 270, width: 960, opacity: prog(f, point - 4, 14)}}>
					<div style={{background: CARD, borderRadius: 20, padding: '12px 26px 14px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', width: 720}}>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>A TANGENT NEEDS</div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre', lineHeight: 1.35}}>point: (a, f(a))   <span style={{fontWeight: 700, fontSize: 36, color: INK_SOFT}}>from f</span></div>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: VIOLET, whiteSpace: 'pre', lineHeight: 1.35, opacity: prog(f, grad, 12)}}>gradient: m = f′(a)   <span style={{fontWeight: 700, fontSize: 36, color: INK_SOFT}}>from f′</span></div>
					</div>
				</div>
			) : null}
			{f >= same2 ? <svg width={1920} height={1080} style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}><DrawPath d="M1612,322 Q1640,322 1640,350 L1640,382 Q1640,394 1656,398 Q1640,402 1640,414 L1640,446 Q1640,474 1612,474" at={same2} dur={16} color={INK} width={4} /></svg> : null}
			<HandTag x={1672} y={400} text="same x" at={same2 + 8} size={42} color={INK} />
			{f >= def - 2 ? (
				<div style={{position: 'absolute', left: 880, top: 500, width: 960, opacity: prog(f, def - 2, 14)}}>
					<div style={{background: CARD, borderRadius: 20, padding: '12px 26px 14px', boxShadow: CARD_SHADOW, border: `4px solid ${VIOLET}`}}>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, lineHeight: 1.25}}><div style={{color: VIOLET}}>tangent at x = a:</div><div style={{whiteSpace: 'pre'}}>the line through (a, f(a)) with gradient f′(a)</div></div>
					</div>
				</div>
			) : null}
			<DriveStrip x={880} y={812} w={960} X={P6} m={COS2.df(P6, {})} at={-60} mGlow={vis(f, grad, grad + 110, 10)} />
			<Legend at={10} />
		</>
	);
};
