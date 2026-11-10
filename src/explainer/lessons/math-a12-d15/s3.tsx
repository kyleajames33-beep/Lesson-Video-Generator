// Scenes 6 to 8: a vertical tangent (the cube root's secants stand up; the board stands upright; the cusp), the
// method at a join ("meet, then match" on three tracks) and the worked example (choosing a and b).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {EquationStrip, FunctionSimulator, FrameSvg, GivensCard, HandTag, MarkSpan, MistakeCard, SceneHeading, StudioOneSidedSecants, TaskStrip, kf, vis} from '../../math/studio';
import {cue} from './common';
import {
	AMB, AMB_INK, AnswerBox, Am, BandLayer, BoardCloseUp, BoardLayer, BoxCard, CBRT, CORNER, CUSP, Cross, CurveLabel, GREEN, GREY, GREY_INK, JUMP, Legend, Line, MiniTrack, RED, RideBoard, Ring, SMOOTH, Tick, V, VIOLET,
	crossFrame, fmt3, gmap, piecewiseFamily, ride, stubLine, workedFam,
} from './parts';
import type {Stage, TMap, Win} from './parts';

const RX = 880;

// ---------- 6. a vertical tangent ----------
const WIN6: Win = {x: [-1.5, 1.5], y: [-1.5, 1.5]};
const G6: Stage = {x: 30, y: 150, w: 810, h: 804};
/** Small plain curve thumbnail (scene 6's three shapes). */
const Thumb: React.FC<{w: number; h: number; win: Win; fns: {fn: (x: number) => number; a: number; b: number}[]; label: string; mark?: [number, number]; vert?: boolean}> = ({w, h, win, fns, label, mark, vert}) => {
	const s = Math.min(w / (win.x[1] - win.x[0]), h / (win.y[1] - win.y[0]));
	const ox = (w - s * (win.x[1] - win.x[0])) / 2, oy = (h - s * (win.y[1] - win.y[0])) / 2;
	const pt = (a: number, b: number): [number, number] => [ox + (a - win.x[0]) * s, oy + (win.y[1] - b) * s];
	const path = (fn: (x: number) => number, a: number, b: number) => {const q: string[] = []; for (let i = 0; i <= 120; i++) {const x = a + ((b - a) * i) / 120; const P = pt(x, fn(x)); q.push(`${i ? 'L' : 'M'}${P[0].toFixed(1)},${P[1].toFixed(1)}`);} return q.join(' ');};
	const O = pt(0, 0);
	return (
		<div style={{position: 'relative', width: w}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'hidden', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.14)'}}>
				<path d={`M0,${O[1]} H${w} M${O[0]},0 V${h}`} stroke={INK_SOFT} strokeWidth={2.5} fill="none" />
				{vert && mark ? <line x1={pt(mark[0], 0)[0]} x2={pt(mark[0], 0)[0]} y1={0} y2={h} stroke={VIOLET} strokeWidth={4} /> : null}
				{fns.map((p, i) => <path key={i} d={path(p.fn, p.a, p.b)} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />)}
				{mark ? <circle cx={pt(mark[0], mark[1])[0]} cy={pt(mark[0], mark[1])[1]} r={16} fill="none" stroke={INK} strokeWidth={4} /> : null}
			</svg>
			<div style={{textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK, marginTop: 4}}>{label}</div>
		</div>
	);
};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const take = c('Take y'), unbroken = c('unbroken'), butSec = c('But the secant'), power = c('h to the power'), sides = c('both sides'), vertical = c('vertical.'), board = c('A board there'), aVert = c('A vertical tangent'), notDiff = c("isn't differentiable"), thatsWhy = c("That's why"), isntV = c("that isn't vertical"), cusp = c('At a cusp'), opposite = c('opposite'), either = c('either');
	const M = gmap(G6.x, G6.y, G6.w, G6.h, WIN6);
	const O = M.pt(0, 0);
	const upO = vis(f, board, aVert + 60, 10);
	return (
		<>
			<SceneHeading text="A vertical tangent" at={4} size={56} />
			<Legend at={butSec} />
			<StudioOneSidedSecants x={G6.x} y={G6.y} width={G6.w} height={G6.h} window={WIN6} family={CBRT} a={0}
				right={{stops: [{frame: butSec + 10, h: 1}, {frame: sides - 20, h: 0.1}, {frame: sides + 4, h: 0.01}, {frame: sides + 28, h: 0.001}], at: butSec}}
				left={{stops: [{frame: butSec + 10, h: -1}, {frame: sides - 20, h: -0.1}, {frame: sides + 4, h: -0.01}, {frame: sides + 28, h: -0.001}], at: butSec}}
				vertical={{at: vertical}} noLimit={{side: 'both', at: vertical + 20, text: '→ ∞'}}
				readout={{x: RX, y: 316, width: 520, title: 'Secant gradients', at: butSec}} format={fmt3}
				sim={{xTicks: [-1, 1], yTicks: [-1, 1], color: INK}} at={-60} />
			<BoardLayer S={G6} win={WIN6} fam={CBRT} board={{X: 0, o: upO, len: 230, upright: true}} clip={false} over={() => <Ring p={O} r={30} />} />
			<CurveLabel x={M.pt(-1.45, 0)[0]} y={M.pt(0, 1.4)[1]} at={take} size={44} color={INK}>y = ∛x = x<sup style={{fontSize: 28}}>1/3</sup></CurveLabel>
			<HandTag x={M.pt(0.1, 0)[0]} y={M.pt(0, -1.15)[1]} text="vertical tangent: no gradient" at={vertical + 10} size={42} color={VIOLET} />
			<HandTag x={M.pt(-1.45, 0)[0]} y={M.pt(0, 0.95)[1]} text="unbroken, looks smooth" at={unbroken + 10} out={butSec + 40} size={42} color={INK} />
			{/* right column */}
			<Line x={RX} y={164} at={take} size={52}>(∛h − 0)/h<span style={{opacity: prog(f, power, 12)}}> = h<sup style={{fontSize: 32}}>−2/3</sup></span></Line>
			<BoxCard x={RX} y={316} w={1000} at={6} out={butSec - 6} size={44} border={VIOLET} title="Differentiable at a (recall)">
				<div>the secant gradient settles on one finite value, from both sides</div>
				<div><V>a single non-vertical tangent</V></div>
			</BoxCard>
			<Line x={RX} y={240} at={power + 30} size={34} color={INK_SOFT} weight={700}>positive for h &gt; 0 and for h &lt; 0</Line>
			<Line x={RX} y={560} at={vertical + 30} size={36} color={GREY_INK} weight={700}>dy/dx = (1/3)x<sup style={{fontSize: 28}}>−2/3</sup>: undefined at x = 0</Line>
			<div style={{position: 'absolute', left: RX, top: 600, opacity: vis(f, 20, board - 10, 14)}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>WAYS TO FAIL SO FAR</div>
				<div style={{display: 'flex', gap: 24, marginTop: 6}}>
					<div><MiniTrack w={470} h={250} win={{x: [-0.5, 1.9], y: [-0.4, 2.3]}} fam={CORNER} ranges={[[-0.8, 2.2]]} corner={[1, 1]} label="a corner: 2 ≠ 1" /></div>
					<div><MiniTrack w={470} h={250} win={{x: [-0.5, 1.9], y: [-0.4, 3.0]}} fam={JUMP} ranges={[[-0.8, 2.2]]} step={{x: 1, lo: 1, hi: 2}} dots={[{X: 1, Y: 1}, {X: 1, Y: 2, open: true}]} label="a jump: no meet" /></div>
				</div>
			</div>
			<RideBoard x={RX} y={640} w={520} m={0} upright at={board} out={thatsWhy} title="Board at the origin" />
			<BoxCard x={RX} y={640} at={thatsWhy} size={38} border={VIOLET} title="The definition">needs a <MarkSpan kind="underline" at={isntV} color={VIOLET} width={5}>non-vertical</MarkSpan> tangent</BoxCard>
			{/* the cusp */}
			<div style={{position: 'absolute', left: 1500, top: 616, opacity: prog(f, cusp, 14)}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: INK, marginBottom: 6}}>cusp: y = x<sup style={{fontSize: 28}}>2/3</sup></div>
			</div>
			{f >= cusp - 2 ? <FunctionSimulator x={1470} y={650} width={420} height={290} window={{x: [-1.5, 1.5], y: [-0.5, 1.5]}} family={CUSP} timeline={[{frame: 0, x: 0}]} color={INK} at={cusp} xTicks={[]} yTicks={[]} xLabel="" yLabel=""
				overlay={g => {const P = g.toFrame(0, 0); const o = prog(f, cusp + 30, 14); return <FrameSvg><g opacity={o}><line x1={P[0]} y1={P[1]} x2={P[0] - 34} y2={P[1] - 150} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /><line x1={P[0]} y1={P[1]} x2={P[0] + 34} y2={P[1] - 150} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /></g></FrameSvg>;}} /> : null}
			<HandTag x={1500} y={725} text="left → −∞" at={cusp + 40} size={34} color={VIOLET} />
			<HandTag x={1870} y={725} text="right → +∞" at={cusp + 50} size={34} color={VIOLET} anchor="end" />
			<HandTag x={RX} y={912} text="corner, cusp, vertical tangent: continuous, not differentiable" at={opposite} size={38} color={INK} />
		</>
	);
};

// ---------- 7. the method at a join ----------
const WIN7: Win = {x: [-0.5, 1.9], y: [-0.4, 3.0]};
const PW = 590, PH = 500;
const PANELS = [{x: 40, fam: SMOOTH, label: 'x², then 2x − 1'}, {x: 665, fam: CORNER, label: 'x², then x'}, {x: 1290, fam: JUMP, label: 'x², then 2x'}] as const;
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const first = c('First'), stop = c('stop.'), second = c('Second,'), smoothOwn = c('smooth on'), equal = c('Equal gradients'), diff = c('mean differentiable'), different = c('Different gradients'), corner = c('corner.'), continuity = c('Continuity on');
	const sKeys = [[diff - 10, 1.45], [diff + 60, 0.1]] as const;
	const cKeys = [[different, 1.6], [corner + 6, 1.0], [corner + 40, 0.45]] as const;
	const jC = crossFrame(cKeys, 1);
	const Xs = ride(f, sKeys), Xc = ride(f, cKeys);
	const glow = [vis(f, equal, corner, 10), vis(f, corner, 900, 10), vis(f, stop - 20, second, 10)];
	const verdict = (i: number, at: number, ok: boolean, text: React.ReactNode, color: string) => (
		<div style={{position: 'absolute', left: PANELS[i].x, top: 160 + PH + 14, width: PW, display: 'flex', justifyContent: 'center', opacity: prog(f, at, 12)}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 12, background: '#fffdf8', borderRadius: 16, padding: '4px 20px', border: `4px solid ${color}`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}>
				{text}{ok ? <Tick size={40} /> : <Cross size={40} />}
			</div>
		</div>
	);
	return (
		<>
			<SceneHeading text="Testing a join: two checks, in order" at={4} size={56} />
			{PANELS.map((p, i) => (
				<div key={i} style={{position: 'absolute', left: p.x, top: 160}}>
					<MiniTrack w={PW} h={PH} win={WIN7} fam={p.fam} ranges={[[-0.8, 2.2]]} boardX={i === 0 ? Xs : i === 1 ? Xc : 0.55} boardLen={150} step={i === 2 ? {x: 1, lo: 1, hi: 2} : undefined}
						dots={i === 2 ? [{X: 1, Y: 1}, {X: 1, Y: 2, open: true}] : []} corner={i === 1 ? [1, 1] : undefined} label={p.label} glow={glow[i]} flip={i === 2} />
				</div>
			))}
			{jC !== undefined && f >= jC && f < jC + 26 ? <HandTag x={PANELS[1].x + 330} y={250} text="jolt!" at={jC} size={44} color={VIOLET} /> : null}
			{verdict(2, stop, false, 'no meet: stop', RED)}
			{verdict(0, diff, true, '2 = 2: differentiable', GREEN)}
			{verdict(1, corner, false, '2 ≠ 1: a corner', RED)}
			<Line x={96} y={752} at={first} size={42}><Am g={vis(f, first, second, 10)}>1. meet?  value at the join = height the other piece heads to</Am>  <span style={{color: INK_SOFT, fontSize: 34}}>(continuous)</span></Line>
			<Line x={96} y={822} at={second} size={42}><V g={vis(f, second, continuity, 10)}>2. match?  differentiate each piece, evaluate both at the join</V></Line>
			<Line x={96} y={890} at={smoothOwn} size={34} color={INK_SOFT} weight={700}>pieces smooth on their own sides</Line>
			<HandTag x={1290} y={915} text="continuous alone: not enough" at={continuity} size={42} color={RED} />
		</>
	);
};

// ---------- 8. worked example ----------
const WIN8: Win = {x: [-0.5, 3.5], y: [-1, 9]};
const G8: Stage = {x: 1080, y: 236, w: 760, h: 640};
const LEFT2 = piecewiseFamily([{from: -Infinity, to: 2, includeTo: true, f: (x: number) => x * x, df: (x: number) => 2 * x}]);
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const hOf = c('h of x'), find = c('Find a and'), match = c('Match the'), xsq = c('x squared has'), four1 = c('four at x'), lineG = c("The line's"), aIs4 = c('equals four') + 10, meet = c('make the pieces'), atTwo = c('At x equals two', 2), soFour = c('So four equals'), bIs = c('minus four') + 12, lineIs = c('The line is'), tangentTo = c('the tangent to'), boardRolls = c('a board rolls'), jolt = c('jolt'), need = c('You need both'), alone = c('The gradient alone'), free = c('free'), jump = c('jump');
	const turn = prog(f, aIs4, 30);
	const slide = prog(f, bIs, 36);
	const lift = vis(f, alone + 10, alone + 90, 24);
	const a = 1.5 + 2.5 * turn;
	const b = 7 - 2 * a - 3 * slide + 1.5 * lift;
	const gap = 2 * a + b - 4;
	const met = Math.abs(gap) < 0.02;
	const M = gmap(G8.x, G8.y, G8.w, G8.h, WIN8);
	const P2 = M.pt(2, 4), Q2 = M.pt(2, 2 * a + b);
	const S = 125;
	const Mloc: TMap = {pt: (u, v) => [700 + (u - 2) * S, 400 - (v - 4) * S], sx: S, sy: S};
	const rideKeys = [[boardRolls - 10, 2.5], [jolt + 30, 1.45]] as const;
	const Xb = ride(f, rideKeys);
	return (
		<>
			<TaskStrip text="Find a and b so that h is differentiable at x = 2" at={find - 30} size={52} />
			<EquationStrip at={hOf} size={60}>h(x) = x² for x ≤ 2,  ax + b for x &gt; 2</EquationStrip>
			<GivensCard x={96} y={258} w={900} at={hOf + 30} size={42} lines={[{content: <>join at x = 2;   <Am>x = 2 belongs to x²  (≤)</Am></>, at: hOf + 30}]} />
			<Line x={96} y={410} at={xsq} size={48} dim={f > meet ? 1 : 0}><V>match:</V>  (x²)′ = 2x<span style={{opacity: prog(f, four1, 12)}}> = <V>4</V> at x = 2</span></Line>
			<Line x={96} y={476} at={lineG} size={48} dim={f > meet ? 1 : 0}>line gradient = a,<span style={{opacity: prog(f, aIs4, 12)}}>  so <V>a = 4</V></span></Line>
			<Line x={96} y={552} at={atTwo} size={48}><Am>meet:</Am>  2² = a(2) + b</Line>
			<Line x={96} y={618} at={soFour} size={48}>4 = 8 + b,<span style={{opacity: prog(f, bIs, 12)}}>  so <Am>b = −4</Am></span></Line>
			<AnswerBox x={96} y={696} at={lineIs} size={46}><span>a = 4, b = −4:  h(x) = 4x − 4 for x &gt; 2</span></AnswerBox>
			<MistakeCard x={96} y={800} w={820} at={alone} size={40} wrong={<>a = 4 only</>} caption="b free: the pieces can miss" />
			{/* the graph: x² on its band, the trial line turning and sliding */}
			<BandLayer S={G8} win={WIN8} fam={met && f > bIs + 30 && lift < 0.05 ? workedFam(4, -4) : LEFT2} spec={{o: 1, ranges: [[-0.8, 3.6]], depth: 22}} />
			<FunctionSimulator x={G8.x} y={G8.y} width={G8.w} height={G8.h} window={WIN8} family={LEFT2} timeline={[{frame: 0, x: 2}]} color={INK} at={-60}
				xTicks={[1, 2, 3]} yTicks={[2, 4, 6, 8]} xLabel="x" yLabel="y"
				curves={[{fn: X => a * X + b, domain: [2, 3.6], at: hOf + 20, color: met && lift < 0.05 ? INK : GREY, dash: met && lift < 0.05 ? undefined : '14 10', width: met ? 7 : 5}]}
				markers={[{X: 2, Y: 4, at: -60}]}
				zoom={{cx: 1300, cy: 420, r: 105, factor: 8, at: lineIs + 10, out: boardRolls - 10}} />
			<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible'}}>
				{Math.abs(gap) > 0.05 ? <g>
					<line x1={P2[0]} y1={P2[1]} x2={Q2[0]} y2={Q2[1]} stroke={AMB} strokeWidth={6} strokeDasharray="10 8" />
					<circle cx={Q2[0]} cy={Q2[1]} r={10} fill="#fffdf8" stroke={GREY} strokeWidth={4} />
				</g> : null}
				<line {...stubLine(M, 2, 4, 4, -1, 120)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={prog(f, four1, 12)} />
			</svg>
			<CurveLabel x={M.pt(-0.4, 0)[0]} y={M.pt(0, 8.6)[1]} at={-30} out={lineIs} size={40} color={INK}>y = x² (x ≤ 2)</CurveLabel>
			<CurveLabel x={P2[0] + 26} y={P2[1] - 96} at={four1} size={36} color={VIOLET}>gradient 4</CurveLabel>
			<CurveLabel x={M.pt(2.55, 0)[0]} y={M.pt(0, 2.6 * a + b + 0.6)[1]} at={hOf + 20} size={36} color={met ? INK : GREY_INK}>y = ax + b</CurveLabel>
			<CurveLabel x={P2[0] + 20} y={P2[1] + 18} at={-30} size={34} color={INK}>(2, 4)</CurveLabel>
			<HandTag x={M.pt(2.1, 0)[0]} y={M.pt(0, 0.5)[1]} text="gap: the pieces miss" at={hOf + 30} out={bIs} size={36} color={AMB_INK} />
			<HandTag x={M.pt(2.1, 0)[0]} y={M.pt(0, 0.5)[1]} text="b free: a step again" at={alone + 20} out={alone + 100} size={36} color={RED} />
			<HandTag x={M.pt(-0.4, 0)[0]} y={M.pt(0, 0.4)[1]} text="same line as the tangent to x² at 2" at={tangentTo} out={alone} size={34} color={GREY_INK} />
			{/* the board through the join (equal-unit close-up) */}
			<BoardCloseUp x={1100} y={250} w={400} h={390} M={Mloc} fam={workedFam(4, -4)} board={{X: Xb, o: 1, len: 300}} k={1} band={{o: 1, ranges: [[0.6, 3.4]], depth: 22}} range={[0.5, 3.5]} at={boardRolls - 10} out={alone} title="CLOSE-UP">
				<div style={{position: 'absolute', left: 16, bottom: 8, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: VIOLET, textShadow: '0 0 6px #f3efe4'}}>angle ≈ 76.0°</div>
			</BoardCloseUp>
			<HandTag x={1110} y={680} text="no jolt" at={jolt} out={alone} size={44} color={VIOLET} />
		</>
	);
};
