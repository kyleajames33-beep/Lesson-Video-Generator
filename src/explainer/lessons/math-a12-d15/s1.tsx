// Scenes 1 and 2: the hook (d14's two joins turn into skate tracks: one board glides, one jolts; then the zooms)
// and what differentiable means (one-sided secants, the definition with both sides and a non-vertical tangent).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {HandTag, MarkSpan, SceneHeading, StudioOneSidedSecants, smooth, vis, zoomFactorKeys, MATH_STRAND_ACCENT} from '../../math/studio';
import {D14FinalFrame} from '../math-a12-d14/s5';
import {cue} from './common';
import {
	BLUE, BandLayer, BoardCloseUp, BoardLayer, BoxCard, Bl, CORNER, Chip, CurveLabel, G_J, GREY, JoltMarks, Legend, Line, RED, RecallChip, RideBoard, Ring, SMOOTH, TEAL, Tl, TrackView, V, VIOLET, WIN_H, WIN_J,
	Am, crossFrame, gmap, hAt, lerpStage, mixHex, ride, shakeAt, trackSlope,
} from './parts';
import type {Stage} from './parts';

// ---------- 1. hook ----------
const PA_L: Stage = {x: 150, y: 276, w: 686, h: 680};
const PA_R: Stage = {x: 1084, y: 276, w: 686, h: 680};
const PB_L: Stage = {x: 10, y: 170, w: 700, h: 694};
const PB_R: Stage = {x: 1210, y: 170, w: 700, h: 694};
const BOARD_U = 0.95; // board length in units on the hook tracks
const RIDE_L = (c: (p: string, n?: number) => number) => [[c('Roll') - 20, 1.5], [c('join'), 1], [c('bump') + 40, -0.5]] as const;
const RIDE_R = (c: (p: string, n?: number) => number) => [[c('On the second') - 6, 1.6], [c('jolts'), 1], [c('jolts') + 50, 0.3], [c('Both tracks'), -0.4]] as const;

/** One hook panel: the card, the band, the curve (blue to ink), the formulas, the ring, the board. */
const HookPanel: React.FC<{S: Stage; right: boolean; t: number; ink: number; bandO: number; bandGrow: number; X: number; boardO: number; shake: number; ringO: number; d14LabelO: number; formulaAt: number; zoom?: {cx: number; cy: number; at: number; keys: {frame: number; factor: number}[]}; traceO: number; trace: number; joltO: number}> = p => {
	const fam = p.right ? CORNER : SMOOTH;
	const M = gmap(p.S.x, p.S.y, p.S.w, p.S.h, WIN_H);
	const R = M.pt(1, 1);
	const color = mixHex(BLUE, INK, p.ink);
	const len = BOARD_U * M.sx;
	const hi = -1.2 + 3.6 * p.bandGrow;
	const tracePath = (() => {
		const q: string[] = [];
		const end = -1 + 3.2 * p.trace;
		for (let i = 0; i <= 160; i++) {const x = -1 + ((end + 1) * i) / 160; const P = M.pt(x, fam.f(x, {})); q.push(`${i ? 'L' : 'M'}${P[0].toFixed(1)},${P[1].toFixed(1)}`);}
		return q.join(' ');
	})();
	return (
		<>
			<TrackView S={p.S} win={WIN_H} fam={fam} color={color} at={-60} card={1}
				band={{o: p.bandO, ranges: [[-1.2, hi]], depth: 0.13 * M.sx}}
				board={{X: p.X, o: p.boardO, len, shake: p.shake}}
				xTicks={[1, 2]} yTicks={[1, 2]}
				zoom={p.zoom ? {cx: p.zoom.cx, cy: p.zoom.cy, r: 155, factor: zoomFactorKeys(p.zoom.keys), at: p.zoom.at} : undefined}
				under={() => (p.traceO > 0.001 ? <path d={tracePath} stroke="#d6a640" strokeWidth={16} strokeLinecap="round" fill="none" opacity={0.55 * p.traceO} /> : null)}
				over={() => <>
					<Ring p={R} r={26} o={p.ringO} />
					<JoltMarks p={M.pt(1, 1)} o={p.joltO} r={40} />
				</>} />
			<CurveLabel x={M.pt(0.15, 0)[0]} y={M.pt(0, -0.45)[1]} at={-60} size={38} color={BLUE} opacity={p.d14LabelO}>{p.right ? 'x², then x' : 'x², then 2x − 1'}</CurveLabel>
			<div style={{position: 'absolute', left: M.pt(-0.92, 0)[0], top: M.pt(0, 2.12)[1], fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.25, whiteSpace: 'pre', textShadow: '0 0 6px #fffdf8, 0 0 12px #fffdf8'}}>
				<div style={{opacity: prog(useCurrentFrame(), p.formulaAt, 12)}}>x², x ≤ 1</div>
				<div style={{opacity: prog(useCurrentFrame(), p.formulaAt + 40, 12)}}>{p.right ? 'x, x > 1' : '2x − 1, x > 1'}</div>
			</div>
		</>
	);
};

export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const tracks = c('tracks'), roll = c('Roll'), bump = c('bump'), second = c('On the second'), jolts = c('jolts'), both = c('Both tracks'), gaps = c('no gaps');
	const zoomIn = c('Now zoom'), straight = c('straightens'), line = c('line'), stays = c('stays'), corner = c('corner'), sowhat = c('So what');
	const cross = prog(f, 40, 20);
	const t = smooth(prog(f, tracks, 32));
	const SL = lerpStage(PA_L, PB_L, t), SR = lerpStage(PA_R, PB_R, t);
	const ink = prog(f, tracks, 18);
	const bandO = prog(f, tracks + 8, 14), bandGrow = prog(f, tracks + 8, 36);
	const rl = RIDE_L(c), rr = RIDE_R(c);
	const XL = ride(f, rl), XR = ride(f, rr);
	const oL = vis(f, roll - 34, gaps + 20, 12), oR = vis(f, second - 14, zoomIn, 12);
	const jR = crossFrame(rr, 1);
	const active: 'L' | 'R' = f < second - 8 ? 'L' : 'R';
	const famA = active === 'L' ? SMOOTH : CORNER, XA = active === 'L' ? XL : XR;
	const mA = trackSlope(famA, XA);
	const shakeR = shakeAt(f, jR);
	const joltO = jR === undefined ? 0 : vis(f, jR, jR + 26, 4);
	const traceO = vis(f, gaps, zoomIn + 40, 10), trace = prog(f, gaps, 40);
	const MB = gmap(PB_L.x, PB_L.y, PB_L.w, PB_L.h, WIN_H);
	const len = BOARD_U * MB.sx;
	return (
		<>
			{cross < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - cross}}><D14FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: cross}}>
				<SceneHeading text="Differentiable at a join" at={46} size={56} />
				<HookPanel S={SL} right={false} t={t} ink={ink} bandO={bandO} bandGrow={bandGrow} X={XL} boardO={oL} shake={0} ringO={1 - prog(f, tracks, 14)} d14LabelO={1 - prog(f, 60, 14)} formulaAt={70} traceO={traceO} trace={trace} joltO={0}
					zoom={{cx: 990, cy: 755, at: zoomIn + 14, keys: [{frame: straight, factor: 1}, {frame: line + 30, factor: 40}]}} />
				<HookPanel S={SR} right t={t} ink={ink} bandO={bandO} bandGrow={bandGrow} X={XR} boardO={oR} shake={shakeR} ringO={1 - prog(f, tracks, 14)} d14LabelO={1 - prog(f, 60, 14)} formulaAt={150} traceO={traceO} trace={trace} joltO={joltO}
					zoom={{cx: 990, cy: 355, at: zoomIn + 20, keys: [{frame: stays, factor: 1}, {frame: corner + 34, factor: 40}]}} />
				<Chip x={744} y={206} at={-60} out={tracks} size={44} color={MATH_STRAND_ACCENT}>a tangent at the join?</Chip>
				{/* the close-up and its readouts between the panels */}
				<BoardCloseUp x={700} y={186} w={570} h={404} M={MB} fam={famA} board={{X: XA, o: 1, len, shake: active === 'R' ? shakeR : 0}} k={2.2} band={{o: 1, ranges: [[-1.2, 2.4]], depth: 0.13 * MB.sx}} range={[-1.4, 2.6]}
					at={roll - 30} out={zoomIn} title={active === 'L' ? 'CLOSE-UP: FIRST TRACK' : 'CLOSE-UP: SECOND TRACK'} jolt={active === 'R' ? joltO : 0} />
				<RideBoard x={700} y={600} w={570} m={mA} at={roll - 20} out={zoomIn} glow={jR !== undefined && active === 'R' ? [jR, jR + 50] : undefined} />
				{/* tags under each panel (one live per side) */}
				<HandTag x={360} y={905} text="no bump" at={bump - 6} out={gaps} size={44} color={VIOLET} anchor="middle" />
				<HandTag x={1560} y={905} text="angle jumps 18.4°" at={jolts + 14} out={gaps} size={44} color={VIOLET} anchor="middle" />
				<HandTag x={360} y={905} text="unbroken" at={gaps + 4} out={straight} size={44} color={INK} anchor="middle" />
				<HandTag x={1560} y={905} text="unbroken" at={gaps + 10} out={stays} size={44} color={INK} anchor="middle" />
				<HandTag x={360} y={905} text="straightens into one line" at={line + 10} size={42} color={INK} anchor="middle" />
				<HandTag x={1560} y={905} text="same angle at ×40" at={corner + 30} size={42} color={INK} anchor="middle" />
				<Chip x={1110} y={74} at={sowhat + 10} size={40} color={MATH_STRAND_ACCENT}>what does a join need for a tangent?</Chip>
			</div>
		</>
	);
};

// ---------- 2. what differentiable means ----------
const RX = 880;
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const P0 = c('point P'), Q = c('point Q'), h = c('h along'), fah = c('f of a plus'), right = c('from the right'), left = c('left'), ifThose = c('If those'), settle = c('settle'), fprime = c('f prime'), single = c('single tangent'), vertical = c('vertical'), dont = c("If they don't");
	const RS = [{frame: Q, h: 0.7}, {frame: right + 26, h: 0.35}, {frame: right + 52, h: 0.12}];
	const LS = [{frame: left, h: -0.7}, {frame: left + 30, h: -0.35}, {frame: left + 56, h: -0.12}];
	const M = gmap(G_J.x, G_J.y, G_J.w, G_J.h, WIN_J);
	const Pp = M.pt(1, 1);
	const hr = hAt(RS, f), hl = hAt(LS, f);
	const Qr = M.pt(1 + hr, SMOOTH.f(1 + hr, {})), Ql = M.pt(1 + hl, SMOOTH.f(1 + hl, {}));
	const y0 = M.pt(0, 0)[1];
	const brO = vis(f, h, right, 12);
	return (
		<>
			<SceneHeading text="What differentiable means" at={4} size={56} />
			<Legend at={right} />
			<BandLayer S={G_J} win={WIN_J} fam={SMOOTH} spec={{o: 1, ranges: [[-0.8, 2.6]]}} dim={0.55} />
			<StudioOneSidedSecants x={G_J.x} y={G_J.y} width={G_J.w} height={G_J.h} window={WIN_J} family={SMOOTH} a={1}
				right={{stops: RS, at: Q}} left={{stops: LS, at: left}}
				sim={{xTicks: [{value: 1, label: 'a'}], yTicks: [], color: INK}} at={-60} />
			<BoardLayer S={G_J} win={WIN_J} fam={SMOOTH} board={{X: 1.66, o: 1, len: 0.9 * M.sx}} over={() => <>
				<Ring p={Pp} r={30} o={prog(f, P0, 12)} />
				{brO > 0.001 ? <g opacity={brO}>
					<path d={`M${Pp[0]},${y0 + 40} V${y0 + 62} H${Qr[0]} V${y0 + 40}`} stroke={TEAL} strokeWidth={6} fill="none" />
					<text x={(Pp[0] + Qr[0]) / 2} y={y0 + 112} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, fill: TEAL}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">h</text>
				</g> : null}
			</>} />
			<CurveLabel x={Pp[0] - 250} y={Pp[1] - 78} at={P0} size={42} color={INK}>P(a, f(a))</CurveLabel>
			<CurveLabel x={Qr[0] + 22} y={Qr[1] + 6} at={Q} size={42} color={TEAL}>Q</CurveLabel>
			<CurveLabel x={Ql[0] - 58} y={Ql[1] - 10} at={left} size={42} color={BLUE}>Q</CurveLabel>
			<HandTag x={M.pt(-0.42, 0)[0]} y={M.pt(0, 1.55)[1]} text="h < 0" at={left + 12} size={46} color={BLUE} />
			<HandTag x={M.pt(1.25, 0)[0]} y={M.pt(0, 0.35)[1]} text="h > 0" at={right + 12} out={left + 10} size={46} color={TEAL} />
			<CurveLabel x={M.pt(-0.42, 0)[0]} y={M.pt(0, 2.42)[1]} at={-60} size={40} color={INK}>x², then 2x − 1</CurveLabel>
			{/* right column */}
			<RecallChip x={RX} y={164} at={0} size={32}>Year 11: the gradient of the secant through P and Q</RecallChip>
			<Line x={RX} y={236} at={-60} size={52}><Am g={vis(f, fah, fah + 110, 10)}>gradient PQ = (f(a + h) − f(a)) / h</Am></Line>
			<BoxCard x={RX} y={330} w={1000} at={6} out={right - 10} size={48} title="The question">
				<div>what does a join need for a tangent?</div>
				<div style={{fontSize: 40, color: VIOLET}}>test: secants from P, from both sides</div>
			</BoxCard>
			<BoardCloseUp x={RX} y={500} w={1000} h={430} M={M} fam={SMOOTH} board={{X: 1.02, o: 1, len: 0.9 * M.sx}} k={1.75} band={{o: 1, ranges: [[-0.8, 2.6]]}} range={[-0.8, 2.8]} at={-30} out={ifThose - 10} title="CLOSE-UP: THE BOARD AT THE JOIN">
				<div style={{position: 'absolute', right: 22, bottom: 14, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: VIOLET, textShadow: '0 0 6px #f3efe4, 0 0 10px #f3efe4'}}>one tangent here?</div>
			</BoardCloseUp>
			<Line x={RX} y={330} at={right} size={44}><Tl>h → 0 from the right:  h &gt; 0</Tl></Line>
			<Line x={RX} y={396} at={left} size={44}><Bl>h → 0 from the left:  h &lt; 0</Bl></Line>
			<BoxCard x={RX} y={478} w={1000} at={ifThose} border={VIOLET} size={42} title="Differentiable at x = a">
				<div>lim<sub style={{fontSize: 28}}>h→0</sub> (f(a + h) − f(a)) / h <MarkSpan kind="underline" at={settle} color={VIOLET} width={5}>exists</MarkSpan>:</div>
				<div><V>one finite value</V>, from <span style={{opacity: 1}}>both sides</span></div>
			</BoxCard>
			<HandTag x={RX + 520} y={700} text="settles on one finite number" at={settle + 8} out={fprime} size={40} color={VIOLET} />
			<Line x={RX} y={692} at={fprime} size={52}>f′(a) = <V>that value</V></Line>
			<Line x={RX} y={770} at={single} size={42}>a single <MarkSpan kind="underline" at={vertical} color={VIOLET} width={5}>non-vertical</MarkSpan> tangent at P(a, f(a))</Line>
			{f >= vertical ? <svg width={80} height={90} style={{position: 'absolute', left: RX + 870, top: 752, opacity: prog(f, vertical, 12), overflow: 'visible'}}>
				<line x1={40} x2={40} y1={6} y2={84} stroke={GREY} strokeWidth={6} />
				<line x1={10} x2={70} y1={70} y2={20} stroke={RED} strokeWidth={6} strokeLinecap="round" opacity={prog(f, vertical + 10, 10)} />
			</svg> : null}
			<Line x={RX} y={852} at={dont} size={40} color={INK_SOFT} weight={700}>no settling:  no derivative at a</Line>
		</>
	);
};
