// Scenes 6 to 8: the flat tangent on the xe^(−x) road (upright normal x = 1, the crashed −1/0, never meets the
// x-axis), any function (ln x / cos x at 1, only the derivative step changes) and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, EquationStrip, HandTag, MarkSpan, MistakeCard, TaskStrip, kf, smooth, vis} from '../../math/studio';
import {Givens} from '../math-a12-d08/parts';
import {cue} from './common';
import {
	AMB, AMB_INK, AnswerBox, AnswerStack, CarSprite, Chip, CloseUp, COS2, CurveLabel, DriveStrip, E, Frac2, GREY, Legend, LNCOS, Line, MiniRoad, Note, P, PI, RecallChip, RoadView, Tl, V, VIOLET, TEAL, WK, Win, XEX, dirs, gmap,
} from './parts';

// ---------- 6. a flat tangent and an upright normal ----------
const WIN6: Win = {x: [-0.5, 3], y: [-0.6, 0.8]};
const G6 = {x: 880, y: 520, w: 966, h: 456};
const ROAD6: [number, number][] = [[-0.7, 3.3]];
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const findAt = cue(id, 'Find the tangent'), one0 = cue(id, 'at x equals one') + 29, ptIs = cue(id, 'The point is'), e = cue(id, 'over e') + 7, prod = cue(id, 'By the product rule'), times = cue(id, 'times one minus x'), atOne = cue(id, 'At x equals one', 2), zero = cue(id, "that's zero") + 8;
	const horiz = cue(id, 'horizontal: y'), turn = cue(id, 'a quarter turn'), up = cue(id, 'straight up') + 16, vertical = cue(id, 'The normal is vertical'), slash = cue(id, 'minus one over zero'), write = cue(id, 'as x equals one') + 27, never = cue(id, 'never does'), parallel = cue(id, 'parallel to it');
	const M = gmap(G6.x, G6.y, G6.w, G6.h, WIN6);
	const X = kf(f, [[ptIs, 0], [e, 1]]);
	const m = XEX.df(X, {});
	const Pp = M.pt(1, 1 / E);
	const phi = (PI / 2) * smooth(prog(f, turn + 4, 46));
	const legEnd: [number, number] = [Pp[0] + Math.cos(phi) * M.sx, Pp[1] - Math.sin(phi) * M.sy];
	const legO = prog(f, cue(id, 'Turn its flat'), 12) * (1 - prog(f, up + 30, 14));
	const arr = prog(f, never, 40);
	const ax0 = M.pt(1.6, 0)[0], ax1 = ax0 + (M.pt(2.75, 0)[0] - ax0) * arr;
	const yE = M.pt(0, 1 / E)[1], y0 = M.pt(0, 0)[1];
	const head = (x: number, y: number, c: string) => <path d={`M${x - 16},${y - 12} L${x},${y} L${x - 16},${y + 12}`} stroke={c} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
	return (
		<>
			<TaskStrip text="Find the tangent and normal. Where does the tangent meet the x-axis?" at={findAt - 40} size={46} />
			<EquationStrip at={10} size={66}>y = xe<P>−x</P></EquationStrip>
			<Givens x={96} y={262} w={300} size={44} lines={[{content: 'x = 1', at: one0}]} />
			<RecallChip x={430} y={276} at={prod} size={30}>product rule (d07)</RecallChip>
			<Line x={96} y={420} at={ptIs} size={48}>y = 1 × e<P>−1</P><span style={{opacity: prog(f, e - 12, 12)}}> = 1/e</span><span style={{opacity: prog(f, e, 12), fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ 0.368</span></Line>
			<Line x={96} y={490} at={prod + 30} size={48}>y′ = e<P>−x</P> − xe<P>−x</P><span style={{opacity: prog(f, times, 12)}}> = e<P>−x</P>(1 − x)</span></Line>
			<Line x={96} y={560} at={atOne} size={48}>x = 1:  e<P>−1</P>(1 − 1)<span style={{opacity: prog(f, zero, 10)}}> = <V>0</V></span></Line>
			<Line x={96} y={640} at={horiz} out={write} size={50}>tangent:  y = 1/e</Line>
			<AnswerStack x={70} y={630} at={write} size={48} rows={[{content: <>tangent:  <V>y = 1/e</V></>, at: write}, {content: <>normal:   <Tl>x = 1</Tl></>, at: write}]} />
			<MistakeCard x={96} y={790} w={720} at={slash} size={44} wrong={<>m<sub style={{fontSize: 28}}>N</sub> = −1/0</>} caption="no gradient: vertical" />
			{/* the road map */}
			<RoadView S={G6} win={WIN6} fam={XEX} X={X} px={1} at={-60} xTicks={[1, 2, 3]} yTicks={[{value: 0.2, label: '0.2'}, {value: 0.4, label: '0.4'}, {value: 0.6, label: '0.6'}]}
				road={{at: -60, pieces: ROAD6}} carO={1} ringO={prog(f, e, 12)} tangentO={prog(f, zero, 16)} glowO={prog(f, zero, 14)} glowReach={220}
				acrossO={prog(f, cue(id, 'Turn its flat'), 12)} acrossSolid={prog(f, up, 8)} acrossHalf={60} normalO={prog(f, up + 6, 20)}
				over={() => <>
					{legO > 0.001 ? <line x1={Pp[0]} y1={Pp[1]} x2={legEnd[0]} y2={legEnd[1]} stroke={TEAL} strokeWidth={8} strokeLinecap="round" opacity={legO} /> : null}
					{arr > 0 ? <g>
						<line x1={ax0} y1={yE} x2={ax1} y2={yE} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />{head(ax1, yE, VIOLET)}
						<line x1={ax0} y1={y0} x2={ax1} y2={y0} stroke={INK} strokeWidth={6} strokeLinecap="round" />{head(ax1, y0, INK)}
						<line x1={ax1 - 40} y1={yE + 10} x2={ax1 - 40} y2={y0 - 10} stroke={GREY} strokeWidth={3} strokeDasharray="6 6" />
					</g> : null}
				</>} />
			<CurveLabel x={M.pt(2.15, 0)[0]} y={M.pt(0, -0.12)[1]} at={-60} out={never - 10} size={40} color={INK}>y = xe<P>−x</P></CurveLabel>
			<CurveLabel x={Pp[0] + 30} y={Pp[1] + 44} at={e} size={34} color={INK}>(1, 1/e)</CurveLabel>
			<HandTag x={M.pt(-0.42, 0)[0]} y={M.pt(0, 0.68)[1]} text="top of the bend: beam flat" at={zero + 16} out={vertical} size={36} color={VIOLET} />
			<HandTag x={M.pt(1.25, 0)[0]} y={M.pt(0, 0.68)[1]} text="across the road: upright" at={up + 4} out={parallel - 14} size={36} color={TEAL} />
			<Legend at={-60} />
			<CurveLabel x={Pp[0] + 14} y={M.pt(0, -0.4)[1]} at={write} size={36} color={TEAL}>x = 1</CurveLabel>
			<Chip x={M.pt(1.2, 0)[0]} y={M.box.top + 8} at={parallel - 10} size={36} color={VIOLET}>y = 1/e ∥ x-axis: never meets</Chip>
			<HandTag x={M.pt(2.0, 0)[0]} y={y0 + 44} text="never meets   (1/e ≠ 0)" at={never + 16} size={34} color={INK} />
			{/* close-up and readouts */}
			<CloseUp x={880} y={170} w={540} h={330} M={M} fam={XEX} X={X} k={2.4} at={-60} pieces={ROAD6} glowO={prog(f, zero, 14)} tangentO={prog(f, zero, 16)} acrossO={prog(f, cue(id, 'Turn its flat'), 12)} acrossSolid={prog(f, up, 8)} title="CLOSE-UP" />
			<DriveStrip x={1440} y={170} w={400} X={X} m={m} at={-60} acrossAt={up} vertical mGlow={vis(f, zero, zero + 60, 10)} aGlow={vis(f, up, up + 80, 10)} />
		</>
	);
};

// ---------- 7. any function, same two steps ----------
const W7: Win = {x: [0, 2.4], y: [-1.2, 1.2]};
const ROAD7: [number, number][] = [[0.03, PI / 2 - 0.004], [PI / 2 + 0.004, 2.6]];
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const only = cue(id, 'Only the differentiating'), take = cue(id, 'Take y equals'), one0 = cue(id, 'at x equals one') + 25, easy = cue(id, 'The point is easy'), zero1 = cue(id, 'one is zero') + 14, soPt = cue(id, 'So the point is'), zero2 = cue(id, 'one, zero') + 14;
	const tanIs = cue(id, 'The tangent is'), one1 = cue(id, 'over cos one', 2) + 20, flip = cue(id, 'Flip and change'), mcos = cue(id, 'minus cos one'), normIs = cue(id, 'So the normal is'), one2 = cue(id, 'times x minus one') + 39, radians = cue(id, 'in radians') + 4;
	const M = gmap(WK.x, WK.y, WK.w, WK.h, W7);
	const X = kf(f, [[soPt, 0.6], [zero2 + 6, 1]]);
	const Pp = M.pt(1, 0);
	const ax = M.pt(PI / 2, 0)[0];
	return (
		<>
			<TaskStrip text="Find the equations of the tangent and the normal" at={4} size={52} />
			<EquationStrip at={10} size={60}>y = <Frac2 n="ln x" d="cos x" /></EquationStrip>
			<Givens x={96} y={262} w={560} size={42} lines={[
				{content: <>x = 1  <span style={{fontSize: 32, color: INK_SOFT}}>(radians)</span></>, at: Math.min(one0, 30)},
				{content: 'domain: x > 0, cos x ≠ 0', at: Math.min(one0, 30) + 10, role: 'k'},
			]} />
			<RecallChip x={690} y={262} at={30} size={32}>quotient video (d08):<br /><span style={{color: INK, fontWeight: 800}}>dy/dx at 1 = 1/cos 1</span>  = sec 1</RecallChip>
			<div style={{position: 'absolute', left: 96, top: 440, opacity: prog(f, 14, 14)}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '6px 22px 8px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.18)', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, lineHeight: 1.3}}>
					<div>1. point from f</div>
					<div style={{opacity: prog(f, only, 12)}}>2. gradient from f′: <span style={{color: VIOLET}}>the only step that depends on the function</span></div>
				</div>
			</div>
			<Line x={96} y={556} at={easy} size={46}>y = ln 1 / cos 1 = 0/cos 1<span style={{opacity: prog(f, zero1, 12)}}> = 0</span></Line>
			<Line x={96} y={622} at={tanIs} size={44}>tangent:  y − 0 = (<V>1/cos 1</V>)(x − 1)</Line>
			<AnswerBox x={96} y={684} at={one1} size={46}><span>tangent:  y = (x − 1)/cos 1</span></AnswerBox>
			<Line x={720} y={698} at={one1 + 14} size={32} color={INK_SOFT} weight={700}>gradient ≈ 1.851</Line>
			<Line x={96} y={774} at={mcos} size={44}>m<sub style={{fontSize: 28}}>N</sub> = −1 ÷ (<V>1/cos 1</V>) = <Tl>−cos 1</Tl></Line>
			<AnswerBox x={96} y={838} at={one2} size={46}><span>normal:  y = <Tl>−cos 1</Tl>(x − 1)</span></AnswerBox>
			<Line x={720} y={852} at={radians} size={32} color={INK_SOFT} weight={700}>cos 1 ≈ 0.540 (1 radian)</Line>
			<RoadView S={WK} win={W7} fam={LNCOS} X={X} px={1} at={-60} xTicks={[0.5, 1, 1.5, 2]} yTicks={[{value: -1, label: '−1'}, {value: 1, label: '1'}]}
				road={{at: -60, pieces: ROAD7}} carO={1} ringO={prog(f, zero2, 12)} tangentO={prog(f, one1, 16)} glowO={prog(f, one1, 14)} glowReach={220}
				acrossO={prog(f, normIs, 12)} acrossSolid={prog(f, one2, 8)} normalO={prog(f, one2, 16)} rightO={prog(f, one2 + 10, 12)}
				under={() => <line x1={ax} x2={ax} y1={M.box.top} y2={M.box.top + M.box.height} stroke={AMB} strokeWidth={4} strokeDasharray="12 9" />} />
			<CurveLabel x={ax + 10} y={M.box.top + 6} at={-60} size={32} color={AMB_INK}>x = π/2</CurveLabel>
			<CurveLabel x={M.pt(0.06, 0)[0]} y={M.pt(0, 1.17)[1]} at={-60} size={40} color={INK}>y = ln x / cos x</CurveLabel>
			<CurveLabel x={Pp[0] - 130} y={Pp[1] + 20} at={zero2} size={34} color={INK}>(1, 0)</CurveLabel>
			<Note x={M.pt(0.1, 0)[0] + 20} y={M.pt(0, -0.95)[1]} at={take} size={30}>domain: x &gt; 0, x ≠ π/2</Note>
			<CloseUp x={96} y={560} w={900} h={340} M={M} fam={LNCOS} X={X} k={2.4} at={20} out={easy - 6} pieces={ROAD7} title="CLOSE-UP: A NEW ROAD">
				<HandTag x={24} y={300} text="same car, same two steps" at={only + 10} size={40} color={INK} />
			</CloseUp>
			<Legend at={-60} />
		</>
	);
};

// ---------- 8. memory aid ----------
export const AID_MAIN = 'Point from f, slope from f′.';
export const CarBadge: React.FC<{w?: number}> = ({w = 260}) => {
	const h = w * 0.62;
	const d = dirs(1, 1, 0);
	return (
		<svg width={w + 120} height={h} viewBox={`0 0 ${w + 120} ${h}`} style={{display: 'block', overflow: 'visible'}}>
			<rect x={0} y={h / 2 - h * 0.34} width={w + 120} height={h * 0.68} rx={12} fill="#bdb8ae" />
			<polygon points={`${w * 0.92},${h / 2 - 34} ${w + 120},${h / 2 - 60} ${w + 120},${h / 2 + 60} ${w * 0.92},${h / 2 + 34}`} fill="#ffe39a" opacity={0.75} />
			<line x1={0} x2={w + 120} y1={h / 2} y2={h / 2} stroke={VIOLET} strokeWidth={5} />
			<line x1={w / 2} x2={w / 2} y1={2} y2={h - 2} stroke={TEAL} strokeWidth={5} strokeDasharray="12 8" />
			<CarSprite p={[w / 2, h / 2]} deg={d.deg} len={w * 0.86} />
		</svg>
	);
};
const MINI = {w: 490, h: 350};
export const MemoryViews: React.FC<{glow?: number; ring?: number}> = ({glow = 0, ring}) => (
	<div style={{display: 'flex', gap: 30}}>
		<MiniRoad {...MINI} win={{x: [-0.6, 2.6], y: [-1.15, 1.15]}} fam={COS2} X={PI / 6} pieces={[[-0.8, 2.8]]} label="y = cos 2x at π/6" tag="tangent and normal" />
		<MiniRoad {...MINI} win={{x: [-0.6, 3.4], y: [-0.85, 1.2]}} fam={XEX} X={1} pieces={[[-0.8, 3.6]]} normalGlow={glow} label={<>y = xe<P>−x</P> at 1</>}
			tag={<>flat: y = 1/e,  normal {ring !== undefined ? <MarkSpan kind="circle" at={ring} color={TEAL} width={4}><Tl>x = 1</Tl></MarkSpan> : <Tl>x = 1</Tl>}</>} />
		<MiniRoad {...MINI} win={{x: [-0.1, 2.6], y: [-1.2, 1.2]}} fam={LNCOS} X={1} pieces={[[0.03, PI / 2 - 0.01], [PI / 2 + 0.01, 2.8]]} asym={PI / 2} label="y = ln x / cos x at 1" tag="any function: same two steps" />
	</div>
);
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const point = cue(id, 'Point from f'), normal = cue(id, 'Then for the normal'), unless = cue(id, 'unless the tangent'), flat = cue(id, 'A flat tangent'), number = cue(id, 'a number') + 3;
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const hl = (g: number) => (g > 0.001 ? `rgba(248,232,200,${0.9 * g})` : undefined);
	return (
		<>
			<TaskStrip text="The short version" at={4} size={52} />
			<div style={{position: 'absolute', left: 120, top: 160, width: 1680, height: 790, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 182, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 168, top: 236, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 68, lineHeight: 1.05, color: INK, background: hl(lit(point, normal)), borderRadius: 12}}>{AID_MAIN}</div>
			<div style={{position: 'absolute', left: 168, top: 330, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.35}}>
				<div><span style={{background: hl(lit(normal, flat)), borderRadius: 10}}><Tl>Normal:</Tl> flip and change the sign (m ≠ 0).</span></div>
				<div><span style={{background: hl(lit(unless, 470)), borderRadius: 10}}>Flat tangent: upright normal, <Tl>x = a</Tl>.</span></div>
			</div>
			<div style={{position: 'absolute', left: 1290, top: 196}}><CarBadge w={250} /></div>
			<div style={{position: 'absolute', left: 1290, top: 360, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, lineHeight: 1.15}}>
				<div style={{color: VIOLET}}>headlights: tangent;</div>
				<div style={{color: TEAL}}>straight across: normal</div>
			</div>
			<div style={{position: 'absolute', left: 160, top: 476}}><MemoryViews glow={vis(f, number - 10, 470, 10)} ring={number} /></div>
		</>
	);
};
