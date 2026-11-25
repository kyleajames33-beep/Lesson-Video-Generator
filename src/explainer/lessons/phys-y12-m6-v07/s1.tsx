// Scenes 1 to 4: the hook (last time's wire, then the painted bench: horseshoe magnet, copper rod on two leads from the
// stand, knife switch and supply on the circuits engine; the rod swings away, then towards us), inside the wire (the
// camera tilts to the top view: down arrows become crosses; a push into the rod shows ions fixed, electrons drifting,
// each pushed up the screen), adding up the pushes (F = BIl, the active length), and a first calculation.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, PAPER} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, ClockFace, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2, Arrow3, FieldSymbol, lerpCam, project} from '../../physics/electromagnetism/magnetic';
import type {Cam} from '../../physics/electromagnetism/magnetic';
import {ChargeBand} from '../../physics/electromagnetism/wires';
import {circuitAt} from '../../sims/circuits';
import {M6V06FinalFrame} from '../phys-y12-m6-v06/s3';
import {HEAD, HEAD_SIZE, MC, benchRun, cap, cue, holdIf, mono} from './common';
import {AMBER, BOX, Bench, CAM_F, CAM_T, CardRect, GREY, Givens, Lbl, MagnetStage, NAVY, ORANGE, Ring, Strip, facesFor, fx, rodEnds, rodWorld} from './parts';

const SWING = 0.33;
/** A swing that overshoots a little and settles (illustrative, author note d). */
const swingTo = (from: number, to: number, at: number): [number, number][] => [[at, from], [at + 26, to + (to - from) * 0.12], [at + 40, to - (to - from) * 0.05], [at + 54, to]];

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const wire = cue(id, 'So does the wire itself'), rod = cue(id, "Here's a real copper rod"), down = cue(id, 'points straight down'), close = cue(id, 'Close the switch'), away = cue(id, 'The rod swings away'), rev = cue(id, 'Now reverse the current'), which = cue(id, 'Which way will it swing'), toward = cue(id, 'Towards us'), charge = cue(id, 'no overall charge'), why = cue(id, 'So why does a magnetic');
	const h = holdIf(id);
	if (f < 1) return <M6V06FinalFrame />;
	const run = benchRun(close, rev, toward);
	const I = circuitAt(run, f).current.rod ?? 0;
	const a = kf(f, mono([...swingTo(0, SWING, close + 8), [rev + 4, SWING], [rev + 34, 0], ...swingTo(0, -SWING, toward + 4)]));
	const open = f < close ? 1 : f < close + 10 ? 1 - prog(f, close, 10) : f < rev ? 0 : f < toward ? prog(f, rev, 10) : 1 - prog(f, toward, 10);
	const cam = CAM_F;
	const stage = prog(f, rod, 20);
	const e = rodEnds(cam, a);
	const m = facesFor(cam);
	const fwd = I > 0.1, back = f >= which;
	const c = project(cam, rodWorld(a));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - stage, clipPath: 'inset(150px 0 0 0)'}}><M6V06FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{f < rod + 20 ? <FrameSvg><Ring cx={1020} cy={360} rx={90} ry={170} at={wire} color={AMBER.stroke} /></FrameSvg> : null}
			{stage > 0 ? <div style={{position: 'absolute', inset: 0, opacity: stage}}>
				<FrameSvg>
					<Bench cam={cam} open={open} />
					<MagnetStage cam={cam} a={a} edges={0} field={prog(f, down, 16)} />
					{fwd || (f >= which && f < toward) || I < -0.1 ? (
						<Arrow2 from={[c[0] + (back ? 120 : -120), c[1] - 62]} to={[c[0] + (back ? -120 : 120), c[1] - 62]} color={ORANGE.stroke} width={7} head={24} dash={f >= which && f < toward ? '12 8' : undefined} />
					) : null}
					{f >= away && f < rev + 10 ? <Arrow3 cam={cam} p={[0, rodWorld(a)[1] + 20, rodWorld(a)[2]]} d={[0, 230, 0]} color={AMBER.stroke} width={9} head={28} opacity={prog(f, away, 12) * (1 - prog(f, rev, 10))} /> : null}
					{f >= toward + 20 ? <Arrow3 cam={cam} p={[0, rodWorld(a)[1] - 20, rodWorld(a)[2]]} d={[0, -230, 0]} color={AMBER.stroke} width={9} head={28} opacity={prog(f, toward + 20, 12)} /> : null}
					<Ring cx={c[0]} cy={c[1]} rx={(e.x2 - e.x1) / 2 + 30} ry={46} at={charge} color={INK} />
				</FrameSvg>
				<Lbl x={m.x + 120} y={m.top - 70} at={rod} color={INK} size={40} anchor="middle">N</Lbl>
				<Lbl x={m.x + 120} y={m.bot + 86} at={rod} color={INK} size={40} anchor="middle">S</Lbl>
				<Lbl x={m.x + 192} y={m.top + 28} at={down} color={GREY.ink} size={36}>B</Lbl>
				<HandTag x={980} y={480} text="N above: B down" at={down + 16} size={32} color={GREY.ink} />
				<Lbl x={c[0] + 140} y={c[1] - 80} at={close} color={ORANGE.ink} size={38}>I</Lbl>
				<HandTag x={c[0] - 220} y={c[1] - 110} text={f >= which ? 'I ←' : 'I →'} at={close + 8} size={32} color={ORANGE.ink} />
				<HandTag x={760} y={330} text="away from us" at={away + 10} out={rev} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [740, 340], to: [700, 440], bend: 0.3}]} markAt={away + 14} />
				<HandTag x={560} y={800} text="towards us" at={toward + 24} size={32} color={AMBER.ink} />
				<HandTag x={500} y={300} text="no net charge!" at={charge + 10} size={34} color={INK} />
				<Chip x={1580} y={650} at={rod + 10} size={44} w={250} color={ORANGE.ink}>{`${fx(Math.abs(I), 1)} A`}</Chip>
				<Lbl x={1580} y={630} at={rod + 10} color={GREY.ink} size={28}>current</Lbl>
				<Chip x={1290} y={250} at={which} size={32} w={270}>towards us{f >= toward ? ' ✓' : ''}</Chip>
				<Chip x={1290} y={330} at={which + 6} size={32} w={270}>away from us</Chip>
				<Chip x={1290} y={440} at={cap(id, why)} size={30} w={560} color={INK}>the motor effect: a force on a current in a magnetic field</Chip>
			</div> : null}
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={300} r={46} ringFrom={why} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. inside the wire ----------
export const S02: React.FC = () => {
	const id = 'inside-the-wire';
	const f = useCurrentFrame();
	const into = cue(id, 'into the screen'), vids = cue(id, 'just as in earlier videos'), zoom = cue(id, 'Now zoom into the rod'), ions = cue(id, 'The metal ions stay put'), drift = cue(id, 'free electrons drift'), conv = cue(id, 'conventional current'), push = cue(id, 'feels a sideways push'), leave = cue(id, "can't leave the metal"), moves = cue(id, 'the whole rod moves'), neutral = cap(id, cue(id, 'A neutral wire feels'));
	const tilt = kf(f, [[4, 1], [Math.min(50, into), 0]]);
	const k = kf(f, mono([[4, 1], [Math.min(50, into), 1.3], [zoom, 1.3], [zoom + 50, 2.8], [moves + 10, 2.8], [moves + 50, 1.3]]));
	const cx = kf(f, mono([[4, 700], [Math.min(50, into), 760], [zoom, 760], [zoom + 50, 960], [moves + 10, 960], [moves + 50, 760]]));
	const cam: Cam = lerpCam(CAM_F, CAM_T, 1 - tilt);
	cam.k = k; cam.cx = cx;
	const a0 = kf(f, [[0, -SWING], [24, 0]]);
	const shift = kf(f, mono([[moves + 30, 0], [moves + 70, 40]]));
	const e = rodEnds(cam, 0, shift);
	const thick = (133 / 1770) * (e.x2 - e.x1);
	const band = prog(f, ions, 14);
	const zoomed = prog(f, zoom + 30, 20) * (1 - prog(f, moves + 20, 20));
	const bigF = prog(f, moves, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench cam={cam} open={0} opacity={1 - prog(f, 0, 20)} />
				<MagnetStage cam={cam} magnet={1 - prog(f, 4, 30)} leads={1 - prog(f, 4, 20)} shift={shift} a={a0} />
				<ChargeBand x1={e.x1 + 10} x2={e.x2 - 10} y={e.c[1]} h={thick} phase={f >= drift ? -(f - drift) * 0.9 * (cam.k / 2.8) : 0} step={46 * cam.k} push={prog(f, push, 16)} pushLen={22 * cam.k} bunch={prog(f, leave, 20)} forceColor={AMBER.stroke} opacity={band} />
				{zoomed > 0 ? <Arrow2 from={[e.c[0] - 300, e.c[1] + thick / 2 + 70]} to={[e.c[0] + 300, e.c[1] + thick / 2 + 70]} color={ORANGE.stroke} width={7} head={24} opacity={prog(f, conv, 12) * zoomed} /> : null}
				{zoomed < 0.5 && f > 40 ? <Arrow2 from={[e.x1 + 40, e.c[1] - thick / 2 - 40]} to={[e.x1 + 40 + 150 * cam.k / 1.3, e.c[1] - thick / 2 - 40]} color={ORANGE.stroke} width={6} head={20} opacity={prog(f, 40, 12) * (1 - 2 * zoomed)} /> : null}
				{bigF > 0 ? <Arrow2 from={[e.c[0], e.c[1] - thick / 2 - 8]} to={[e.c[0], e.c[1] - thick / 2 - 8 - 170]} color={AMBER.stroke} width={12} head={34} opacity={bigF} /> : null}
				{f >= vids ? <g opacity={prog(f, vids, 14)}>
					<CardRect x={1440} y={190} w={384} h={190} />
					<FieldSymbol x={1510} y={260} dir="in" size={18} />
					<FieldSymbol x={1510} y={330} dir="out" size={18} />
				</g> : null}
			</FrameSvg>
			<Lbl x={1550} y={262} at={vids} color={GREY.ink} size={30}>into the screen</Lbl>
			<Lbl x={1550} y={332} at={vids} color={GREY.ink} size={30}>out of the screen</Lbl>
			<HandTag x={1100} y={250} text="N pole above" at={Math.min(50, into)} out={zoom + 20} size={32} color={GREY.ink} />
			<Lbl x={1100} y={320} at={Math.min(56, into)} out={zoom + 20} color={GREY.ink} size={32}>B into the screen (×)</Lbl>
			<Lbl x={1100} y={400} at={Math.min(62, into)} out={zoom + 20} color={ORANGE.ink} size={32}>I to the right</Lbl>
			<Lbl x={e.c[0] - 300} y={e.c[1] + thick / 2 + 130} at={conv} out={moves + 20} color={ORANGE.ink} size={34}>conventional current, I</Lbl>
			<HandTag x={e.c[0] + 60} y={e.c[1] + thick / 2 + 190} text="electrons drift the other way" at={conv + 20} out={moves + 20} size={32} color={GREY.ink} />
			<HandTag x={e.c[0] + 420} y={e.c[1] - thick / 2 - 110} text="each one pushed" at={push + 20} out={moves + 20} size={34} color={AMBER.ink} />
			<HandTag x={140} y={330} text="can't leave the metal" at={leave + 10} out={moves + 20} size={34} color={GREY.ink} />
			<Lbl x={e.c[0] + 30} y={e.c[1] - thick / 2 - 150} at={moves + 6} color={AMBER.ink} size={44}>F</Lbl>
			<HandTag x={1110} y={760} text="up the screen = away from us in the front view" at={moves + 40} size={30} color={AMBER.ink} anchor="middle" />
			<CrossedChip x={96} y={840} at={neutral} crossAt={cap(id, neutral + 30)} size={32} caption="moving charges, not net charge">the wire is charged</CrossedChip>
		</>
	);
};

// ---------- 3. adding up the pushes ----------
const CAM3: Cam = {...CAM_T, cx: 520, cy: 560, k: 1.15};
export const S03: React.FC = () => {
	const id = 'adding-pushes';
	const f = useCurrentFrame();
	const how = cue(id, 'So how big is the total force'), flows = cue(id, 'flows through the rod'), qt = cue(id, 'The current is I equals'), lt = cue(id, 'so their speed is l over'), one = cue(id, 'Each moving charge gets'), all = cue(id, 'Q times v times B'), swap = cue(id, 'Now swap in'), cancel = cue(id, "The t's cancel"), bil = cue(id, 'and the force is B'), active = cap(id, cue(id, 'called the active'));
	const cam = CAM3;
	const e = rodEnds(cam, 0);
	const bx1 = cam.cx - BOX.hx * cam.k, bx2 = cam.cx + BOX.hx * cam.k;
	const y = e.c[1], thick = (133 / 1770) * (e.x2 - e.x1);
	const tt = prog(f, flows + 10, 110, x => x);
	const bandX = bx1 + (bx2 - bx1 - 70) * tt;
	const grey = prog(f, active, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetStage cam={cam} magnet={0} leads={0} />
				{f >= flows ? <rect x={bandX} y={y - thick / 2 + 3} width={70} height={thick - 6} rx={8} fill="#f6c28f" stroke={ORANGE.stroke} strokeWidth={3} opacity={prog(f, flows, 10)} /> : null}
				<g opacity={grey}>
					<rect x={e.x1 - 4} y={y - thick / 2 - 4} width={bx1 - e.x1 + 4} height={thick + 8} fill={PAPER} opacity={0.62} />
					<rect x={bx2} y={y - thick / 2 - 4} width={e.x2 - bx2 + 4} height={thick + 8} fill={PAPER} opacity={0.62} />
				</g>
				<Arrow2 from={[e.x1 + 40, y - 70]} to={[e.x1 + 200, y - 70]} color={ORANGE.stroke} width={6} head={20} />
				{f >= flows ? <ClockFace cx={bx2 - 40} cy={y + 130} r={30} t={tt} /> : null}
				<Ring cx={(bx1 + bx2) / 2} cy={y + 64} rx={(bx2 - bx1) / 2 + 30} ry={40} at={active + 16} color={NAVY.stroke} />
				<Bracket x1={bx1} y1={y + 64} x2={bx2} y2={y + 64} color={NAVY.stroke} at={how} label="l" size={40} ly={y + 104} />
			</FrameSvg>
			<Lbl x={e.x1 + 210} y={y - 62} color={ORANGE.ink} size={34}>I</Lbl>
			<Lbl x={bx2 + 10} y={y + 136} at={flows} color={INK} size={34}>t</Lbl>
			<Lbl x={bandX + 35} y={y - thick / 2 - 26} at={flows} color={ORANGE.ink} size={32} anchor="middle">Q</Lbl>
			<div style={{position: 'absolute', left: 1040, top: 180, display: 'flex', flexDirection: 'column', gap: 10, width: 800}}>
				<Row at={qt} ageAt={swap} size={44} oldSize={34}>I = Q/t</Row>
				<Row at={lt} ageAt={swap} size={44} oldSize={34}>v = l/t</Row>
				<Row at={one} ageAt={swap} size={40} oldSize={32}>one charge: F = qvB (v ⟂ B)</Row>
				<Row at={all} ageAt={bil} size={44} oldSize={34}>all the moving charge: F = QvB</Row>
				<Row at={swap} ageAt={bil + 30} size={48} oldSize={36}>F = (I<MarkSpan kind="strike" at={cancel} color={NAVY.stroke}>t</MarkSpan>)(l/<MarkSpan kind="strike" at={cancel + 6} color={NAVY.stroke}>t</MarkSpan>)B</Row>
				<Row at={bil} size={60}><AnswerBox at={bil + 12}><span style={{color: AMBER.ink}}>F = BIl</span></AnswerBox></Row>
			</div>
			<HandTag x={1500} y={640} text="t's cancel" at={cancel + 10} size={34} color={INK} />
			<Chip x={96} y={830} at={active} size={32} w={860} color={NAVY.ink}>active length: only the wire inside the field</Chip>
			<HandTag x={(bx1 + bx2) / 2 + 120} y={y + 190} text="inside only" at={active + 20} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. a first calculation ----------
const CAM4: Cam = {...CAM_T, cx: 420, cy: 600, k: 0.95};
export const S04: React.FC = () => {
	const id = 'first-calculation';
	const f = useCurrentFrame();
	const lets = cue(id, "Let's try it"), newtons = cue(id, 'zero point zero six zero newtons'), mass = cue(id, 'six gram mass'), small = cap(id, cue(id, 'Small, but enough'));
	const cam = CAM4;
	const e = rodEnds(cam, 0);
	const bx1 = cam.cx - BOX.hx * cam.k, bx2 = cam.cx + BOX.hx * cam.k;
	const y = e.c[1];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetStage cam={cam} magnet={0} leads={0} />
				<Arrow2 from={[e.x1 + 30, y - 60]} to={[e.x1 + 170, y - 60]} color={ORANGE.stroke} width={6} head={20} />
				{f >= newtons ? <Arrow2 from={[cam.cx, y - 30]} to={[cam.cx, y - 210]} color={AMBER.stroke} width={10} head={30} opacity={prog(f, newtons, 12)} /> : null}
				<Bracket x1={bx1} y1={y + 60} x2={bx2} y2={y + 60} color={NAVY.stroke} at={lets} label="l = 0.30 m" size={32} ly={y + 100} />
			</FrameSvg>
			<Lbl x={e.x1 + 180} y={y - 52} color={ORANGE.ink} size={32}>I</Lbl>
			<Lbl x={cam.cx + 20} y={y - 200} at={newtons} color={AMBER.ink} size={36}>{fx(MC.F, 3)} N</Lbl>
			<Lbl x={bx1} y={y - 290} at={lets} color={GREY.ink} size={30}>B into the screen</Lbl>
			<Strip x={880} y={176} at={lets} size={32} w={940}>Find the force on the rod.</Strip>
			<Strip x={880} y={250} at={lets + 8} size={32} border={INK}>F = BIl (current at right angles to B)</Strip>
			<Givens x={880} y={322} w={940} at={lets + 16} size={32} lines={[<>B = 0.050 T</>, <>I = 4.0 A</>, <>l = <MarkSpan kind="circle" at={lets + 60} color={NAVY.stroke}>0.30 m</MarkSpan> (inside the field)</>]} />
			<HandTag x={1500} y={460} text="inside the field" at={lets + 70} size={32} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 880, top: 520, width: 960}}>
				<Row at={newtons - 30} size={48}>F = 0.050 × 4.0 × 0.30 = <AnswerBox at={newtons + 10}><span style={{color: AMBER.ink}}>{fx(MC.F, 3)} N</span></AnswerBox></Row>
			</div>
			<Chip x={880} y={630} at={mass} size={34} w={940}>≈ weight of 6 g (0.060 ÷ 9.8 ≈ {fx(MC.mass, 4)} kg)</Chip>
			<CrossedChip x={880} y={740} at={small} crossAt={cap(id, small + 26)} size={32} caption="cm → m">l = 30 (cm left in): F = {fx(MC.slipCm, 1)} N</CrossedChip>
		</>
	);
};
