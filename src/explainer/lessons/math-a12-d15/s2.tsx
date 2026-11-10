// Scenes 3 to 5: the smooth join (both sides settle on 2; the secants merge into one tangent; the board glides),
// the corner (2 and 1; the board jolts) and a join that doesn't meet (the step; the rise stays above 1 while the
// run shrinks, so differentiable forces continuous).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {HandTag, MistakeCard, SceneHeading, StudioOneSidedSecants, vis} from '../../math/studio';
import {cue} from './common';
import {
	AMB, AMB_INK, AnswerBox, Am, BandLayer, BoardCloseUp, BoardLayer, BoxCard, Bl, Chip, CurveLabel, G_J, GREY, GREY_INK, JUMP, JoltMarks, Legend, Line, RED, Ring, SMOOTH, TEAL, Tl, V, VIOLET, WIN_J,
	crossFrame, deg1, fmt3, gmap, piecewiseFamily, ride, shakeAt, stubLine, swingFam, trackSlope,
} from './parts';
import type {BoardState, Win} from './parts';

const RX = 880;
const M_J = gmap(G_J.x, G_J.y, G_J.w, G_J.h, WIN_J);
const BOARD_J = 0.9 * M_J.sx;

/** Close-up of the board on the big graph, with its live angle under it. */
const RideCloseUp: React.FC<{fam: Parameters<typeof trackSlope>[0]; X: number; shake?: number; jolt?: number; at?: number; out?: number; y?: number}> = ({fam, X, shake = 0, jolt = 0, at = -30, out, y = 300}) => {
	const m = trackSlope(fam, X);
	return (
		<BoardCloseUp x={1430} y={y} w={450} h={400} M={M_J} fam={fam} board={{X, o: 1, len: BOARD_J, shake}} k={1.75} band={{o: 1, ranges: [[-0.8, 2.6]]}} range={[-1, 2.8]} at={at} out={out} title="CLOSE-UP" jolt={jolt}>
			<div style={{position: 'absolute', left: 18, bottom: 10, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: VIOLET, textShadow: '0 0 6px #f3efe4, 0 0 10px #f3efe4'}}>angle ≈ {deg1(m)}</div>
		</BoardCloseUp>
	);
};

// ---------- 3. the smooth join ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const fromR = c('From the right'), two1 = c('exactly two'), fromL = c('From the left'), twoH = c('two plus h'), p5 = c('one point five'), p9 = c('one point nine'), p99 = c('one point nine nine'), heading = c('heading to two'), two3 = c('heading to two') + 14;
	const both = c('Both sides'), fpOne = c('f prime of one'), tangentTo = c('The line is the tangent'), direction = c('direction'), why = c("That's why"), jolt = c('jolt');
	const keys = [[why, 1.66], [jolt + 20, 0.15]] as const;
	const X = ride(f, keys);
	const Pp = M_J.pt(1, 1);
	const arrO = prog(f, direction, 14);
	const arrow = (dir: -1 | 1) => {const l = stubLine(M_J, 1, 1, 2, dir, 170); const x = dir === 1 ? l.x2 : l.x1, y = dir === 1 ? l.y2 : l.y1; const ang = Math.atan2(y - Pp[1], x - Pp[0]); return <g key={dir}><line x1={Pp[0]} y1={Pp[1]} x2={x} y2={y} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" /><path d={`M${x - 24 * Math.cos(ang - 0.45)},${y - 24 * Math.sin(ang - 0.45)} L${x},${y} L${x - 24 * Math.cos(ang + 0.45)},${y - 24 * Math.sin(ang + 0.45)}`} stroke={VIOLET} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>;};
	return (
		<>
			<SceneHeading text="The smooth join" at={4} size={56} />
			<Legend at={-30} />
			<BandLayer S={G_J} win={WIN_J} fam={SMOOTH} spec={{o: 1, ranges: [[-0.8, 2.6]]}} dim={0.55} />
			<StudioOneSidedSecants x={G_J.x} y={G_J.y} width={G_J.w} height={G_J.h} window={WIN_J} family={SMOOTH} a={1}
				right={{stops: [{frame: fromR + 10, h: 0.5}, {frame: fromR + 90, h: 0.1}, {frame: two1 - 10, h: 0.01}], at: fromR}}
				left={{stops: [{frame: fromL + 14, h: -0.5}, {frame: p9, h: -0.1}, {frame: p99, h: -0.01}], at: fromL}}
				merge={{at: two3, slope: 2, halfLength: 440}}
				readout={{x: RX, y: 300, width: 520, title: 'Secant gradients'}} format={fmt3}
				sim={{xTicks: [1, 2], yTicks: [1, 2], color: INK}} at={-60} />
			<BoardLayer S={G_J} win={WIN_J} fam={SMOOTH} board={{X, o: 1, len: BOARD_J}} over={() => <>
				<Ring p={Pp} r={30} />
				{arrO > 0.001 ? <g opacity={arrO}>{arrow(-1)}{arrow(1)}</g> : null}
			</>} />
			<CurveLabel x={Pp[0] + 30} y={Pp[1] + 20} at={-30} size={42} color={INK}>P(1, 1)</CurveLabel>
			<HandTag x={M_J.pt(-0.42, 0)[0]} y={M_J.pt(0, 2.3)[1]} text="same direction" at={direction + 8} size={46} color={VIOLET} />
			<HandTag x={M_J.pt(1.2, 0)[0]} y={M_J.pt(0, 0.1)[1]} text="no jolt" at={jolt} size={46} color={VIOLET} />
			{/* right column */}
			<BoxCard x={RX} y={156} at={-30} size={44} title="Givens">f(x) = x² for x ≤ 1,  2x − 1 for x &gt; 1</BoxCard>
			<RideCloseUp fam={SMOOTH} X={X} />
			<Line x={RX} y={720} at={fromR + 40} size={40} dim={f > fromL ? 1 : 0}><Tl>right:</Tl>  (2(1 + h) − 1 − 1)/h = <Tl>2</Tl></Line>
			<Line x={RX} y={776} at={twoH} size={44}><Bl>left:</Bl>  ((1 + h)² − 1)/h = <Bl>2 + h</Bl></Line>
			<AnswerBox x={RX} y={846} at={heading + 20} size={52}><span>both settle on <V>2</V>:  f′(1) = <V>2</V></span></AnswerBox>
			<HandTag x={RX + 30} y={666} text="tangent to x² at 1" at={tangentTo + 10} size={40} color={VIOLET} />
		</>
	);
};

// ---------- 4. the corner ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const yx = c('y equals x'), fromL = c('From the left'), two = c('head to two') + 9, fromR = c('But from the right'), one = c('exactly one') + 14, twoFrom = c('Two from one side'), noSingle = c("There's no single"), unbroken = c('unbroken'), corner = c('corner is'), grads = c('gradients', 2), track = c('On the track'), instant = c('instant');
	const s = prog(f, 24, 50);
	const fam = swingFam(s);
	const keys = [[track, 1.75], [instant, 1.0], [instant + 22, 0.62]] as const;
	const X = ride(f, keys);
	const jF = crossFrame(keys, 1);
	const sh = shakeAt(f, jF);
	const joltO = jF === undefined ? 0 : vis(f, jF, jF + 24, 4);
	const Pp = M_J.pt(1, 1);
	const stubO = prog(f, twoFrom, 14);
	return (
		<>
			<SceneHeading text="The corner" at={4} size={56} />
			<Legend at={-30} />
			<BandLayer S={G_J} win={WIN_J} fam={fam} spec={{o: 1, ranges: [[-0.8, 2.6]]}} dim={0.55} />
			<StudioOneSidedSecants x={G_J.x} y={G_J.y} width={G_J.w} height={G_J.h} window={WIN_J} family={fam} a={1}
				left={{stops: [{frame: fromL + 20, h: -0.5}, {frame: two - 30, h: -0.1}, {frame: two, h: -0.01}], at: fromL}}
				right={{stops: [{frame: fromR + 10, h: 0.5}, {frame: one - 30, h: 0.1}, {frame: one, h: 0.01}], at: fromR}}
				readout={{x: RX, y: 300, width: 520, title: 'Secant gradients', at: fromL}} format={fmt3}
				sim={{xTicks: [1, 2], yTicks: [1, 2], color: INK, curves: [{fn: X0 => 2 * X0 - 1, domain: [1, 2.3], at: 40, color: GREY, dash: '12 10', width: 4}]}} at={-60} />
			<BoardLayer S={G_J} win={WIN_J} fam={fam} board={{X, o: 1, len: BOARD_J, shake: sh}} over={() => <>
				<Ring p={Pp} r={30} />
				{stubO > 0.001 ? <g opacity={stubO}>
					<line {...stubLine(M_J, 1, 1, 2, -1, 210)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
					<line {...stubLine(M_J, 1, 1, 1, 1, 210)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
				</g> : null}
				<JoltMarks p={M_J.pt(1, 1)} o={joltO} r={44} />
			</>} />
			<CurveLabel x={Pp[0] - 300} y={Pp[1] - 120} at={twoFrom + 6} size={40} color={VIOLET}>gradient 2</CurveLabel>
			<CurveLabel x={Pp[0] + 120} y={Pp[1] - 100} at={twoFrom + 12} size={40} color={VIOLET}>gradient 1</CurveLabel>
			<CurveLabel x={Pp[0] + 30} y={Pp[1] + 24} at={-30} size={42} color={INK}>(1, 1)</CurveLabel>
			<CurveLabel x={M_J.pt(1.75, 0)[0]} y={M_J.pt(0, 2.42)[1]} at={50} size={32} color={GREY_INK}>last join</CurveLabel>
			<HandTag x={M_J.pt(-0.42, 0)[0]} y={M_J.pt(0, 2.3)[1]} text="continuous, not differentiable" at={unbroken + 30} out={track} size={42} color={INK} />
			<HandTag x={M_J.pt(-0.42, 0)[0]} y={M_J.pt(0, 2.3)[1]} text="corner = jolt" at={instant + 4} size={46} color={VIOLET} />
			{/* right column */}
			<BoxCard x={RX} y={156} at={-30} size={44} title="Givens">g(x) = x² for x ≤ 1,  x for x &gt; 1</BoxCard>
			<RideCloseUp fam={fam} X={X} shake={sh} jolt={joltO} at={-30} />
			<Chip x={RX} y={548} w={520} at={grads} size={38} color={VIOLET}>corner: the one-sided gradients differ</Chip>
			<Line x={RX} y={720} at={-30} size={34} color={INK_SOFT} weight={700}>left (as before):  2 + h → 2</Line>
			<Line x={RX} y={776} at={one - 10} size={44}><Tl>right:</Tl>  ((1 + h) − 1)/h = <Tl>1</Tl></Line>
			<BoxCard x={RX} y={846} at={noSingle} border={RED} size={48} bw={4}>2 ≠ 1:  g′(1) does not exist</BoxCard>
		</>
	);
};

// ---------- 5. a join that doesn't meet ----------
const WIN5: Win = {x: [-0.5, 2.2], y: [-0.5, 4.4]};
const M5 = gmap(G_J.x, G_J.y, G_J.w, G_J.h, WIN5);
const LEFT_ONLY = piecewiseFamily([{from: -Infinity, to: 1, includeTo: true, f: (x: number) => x * x, df: (x: number) => 2 * x}]);
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const here = c('Here,'), oneOne = c('one, one'), twoX = c('two x,'), two = c('height two') + 8, step = c('step'), itsGrad = c('Its gradient'), contAt = c('continuous at'), fromRight = c('from the right it'), fOfOne = c('f of one'), notCont = c("So it isn't");
	const look = c('Now look'), secant = c('secant from'), rise = c('The rise'), shrinks = c('run shrinks'), twelve = c('twelve'), hundred = c('a hundred and two'), beyond = c('beyond'), noDeriv = c('No derivative'), must = c('must be continuous'), riseIs = c('rise is that'), soRise = c('So the rise'), jump = c('jump');
	const secStage = f >= look;
	const fam = secStage ? JUMP : LEFT_ONLY;
	const grow = prog(f, twoX, 30);
	const keys = [[step - 4, -0.4], [step + 50, 0.66]] as const;
	const X = ride(f, keys);
	const stopAt = step + 50;
	const bump = f >= stopAt && f < stopAt + 4 ? (f % 2 ? 4 : -4) : 0;
	const board: BoardState = {X, o: vis(f, 6, look - 20, 12), len: 0.95 * M5.sx, flip: true, shake: bump};
	const A = M5.pt(1, 1), Bt = M5.pt(1, 2);
	const gapO = prog(f, two, 14);
	const stubO = vis(f, itsGrad, look, 12);
	return (
		<>
			<SceneHeading text="A join that doesn't meet" at={4} size={56} />
			<Legend at={look} />
			<BandLayer S={G_J} win={WIN5} fam={f >= step ? JUMP : LEFT_ONLY} spec={{o: 1, ranges: [[-0.8, 2.6]], step: f >= step ? {x: 1, lo: 1, hi: 2} : undefined, depth: 26}} dim={secStage ? 0.5 : 0} />
			<StudioOneSidedSecants x={G_J.x} y={G_J.y} width={G_J.w} height={G_J.h} window={WIN5} family={fam} a={1}
				right={secStage ? {stops: [{frame: secant + 10, h: 0.5}, {frame: twelve, h: 0.1}, {frame: hundred, h: 0.01}], at: secant} : undefined}
				legs={{side: 'right', at: rise}} noLimit={{side: 'right', at: beyond}}
				readout={secStage ? {x: RX, y: 300, width: 520, title: 'Secant gradient', at: secant} : undefined} format={fmt3}
				sim={{xTicks: [1, 2], yTicks: [1, 2, 3, 4], color: INK,
					curves: secStage ? [] : [{fn: X0 => 2 * X0, domain: [1.0005, 1.0005 + 1.25 * Math.max(0.001, grow)], at: twoX, color: INK, width: 7}],
					markers: [{X: 1, Y: 1, at: -60}, {X: 1, Y: 2, at: twoX, open: true, color: GREY}]}} at={-60} />
			<BoardLayer S={G_J} win={WIN5} fam={LEFT_ONLY} board={board} over={() => <>
				{gapO > 0.001 ? <g opacity={gapO}>
					<line x1={A[0]} y1={A[1] - 16} x2={Bt[0]} y2={Bt[1] + 16} stroke={AMB} strokeWidth={6} strokeDasharray="12 9" />
				</g> : null}
				{stubO > 0.001 ? <g opacity={stubO}>
					<line {...stubLine(M5, 1, 1, 2, -1, 170)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
					<line {...stubLine(M5, 1, 2, 2, 1, 170)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
				</g> : null}
			</>} />
			<CurveLabel x={A[0] + (secStage ? -24 : 24)} y={A[1] + 8} at={oneOne} size={40} color={INK} anchor={secStage ? 'end' : 'start'}>f(1) = 1</CurveLabel>
			<CurveLabel x={Bt[0] - 108} y={(A[1] + Bt[1]) / 2 - (secStage ? 70 : 26)} at={two} size={40} color={AMB_INK}>jump</CurveLabel>
			<CurveLabel x={M5.pt(-0.42, 0)[0]} y={M5.pt(0, 4.25)[1]} at={-30} size={40} color={INK}>y = x², then y = 2x</CurveLabel>
			<HandTag x={M5.pt(-0.42, 0)[0]} y={M5.pt(0, 3.45)[1]} text="both gradients 2" at={itsGrad + 10} out={look} size={44} color={VIOLET} />
			<HandTag x={M5.pt(-0.42, 0)[0]} y={M5.pt(0, 2.75)[1]} text="the pieces don't meet" at={step + 10} out={look} size={44} color={AMB_INK} />
			{/* right column */}
			<BoxCard x={RX} y={156} at={-30} size={44} title="Givens">f(x) = x² for x ≤ 1,  2x for x &gt; 1</BoxCard>
			<BoxCard x={RX} y={300} at={6} out={contAt} size={44} title="Question">gradients match, but do the pieces meet?</BoxCard>
			<BoxCard x={RX} y={300} at={contAt} out={look} size={42} title="Continuous at a">from both sides, the curve heads to f(a)</BoxCard>
			<Line x={RX} y={446} at={fromRight} out={look} size={44}><Am>meet?</Am>  from the right → <Am>2</Am>;<span style={{opacity: prog(f, fOfOne, 12)}}>  f(1) = 1</span></Line>
			<BoardCloseUp x={RX} y={580} w={760} h={360} M={M5} fam={f >= twoX ? JUMP : LEFT_ONLY} board={board} k={1.85} band={{o: 1, ranges: [[-0.8, 2.6]], step: f >= step ? {x: 1, lo: 1, hi: 2} : undefined, depth: 26}} range={[-1, 2.5]} at={6} out={shrinks - 10} title={f >= step ? 'CLOSE-UP: THE STEP' : 'CLOSE-UP'} />
			<Line x={RX} y={512} at={notCont} out={look + 50} size={44}><Am>2 ≠ 1:  not continuous</Am></Line>
			<Line x={RX} y={500} at={look + 70} size={42} out={undefined}><Tl>right:</Tl>  (2(1 + h) − 1)/h = <Tl>2 + 1/h</Tl></Line>
			<Line x={RX} y={584} at={shrinks} size={36} color={INK_SOFT} weight={700}><Am>rise = 1 + 2h &gt; 1</Am>,  <Tl>run = h → 0</Tl></Line>
			<MistakeCard x={RX} y={660} w={820} at={noDeriv} out={must - 10} size={42} wrong={<>gradients match, so differentiable</>} caption="the pieces must meet first" />
			<BoxCard x={RX} y={660} at={must} border={INK} size={52} bw={4}>differentiable at a ⇒ continuous at a</BoxCard>
			<Line x={RX} y={770} at={riseIs} size={38} color={INK_SOFT} weight={700}>rise = gradient × run → finite × 0 = 0</Line>
			<Chip x={RX} y={846} at={jump - 20} size={42} color={RED}>a jump: never differentiable</Chip>
		</>
	);
};
