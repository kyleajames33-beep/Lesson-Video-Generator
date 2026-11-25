// Scenes 1 to 6: the hook (last time's beam region turns into the 3D field box in the painted horseshoe magnet's gap,
// three protons: still, along, across), when there is a force (the across proton turns on the field motion engine),
// dots and crosses (two arrows turning end-on; the box turning to face the page), how big (θ, v∥ and v⊥, the force
// growing and shrinking), which way (the axis triad rotating into place on the cross grid), negative charges.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Gun, Particle} from '../../physics/electromagnetism/plates';
import {Arrow2, Arrow3, AxisTriad, EndOnArrow, RightAngle, add3, lerpCam, project} from '../../physics/electromagnetism/magnetic';
import type {Cam, V3} from '../../physics/electromagnetism/magnetic';
import {runMotion, stateAt, trailTo} from '../../sims/field-motion';
import {M6V03FinalFrame} from '../phys-y12-m6-v03/s3';
import {HEAD, HEAD_SIZE, cap, cue, holdIf, mono} from './common';
import {AMBER, CAM_MAG, CAM_V03, CardRect, FIELD, GREY, Lbl, MagnetBox, NAVY, P3, Ring, Strip, TEAL, ThetaArc, facesFor} from './parts';

const S = (n: number) => Math.sin((n * Math.PI) / 180), C = (n: number) => Math.cos((n * Math.PI) / 180);
// the three protons of the hook (world px; field along −z)
const PS: V3 = [-200, -40, 0], PA: V3 = [-20, -40, 100], PX: V3 = [120, -40, 0];
const NS: React.FC<{cam: Cam; at: number}> = ({cam, at}) => {
	const m = facesFor(cam);
	return <>
		<Lbl x={m.x + 300} y={m.top - 70} at={at} color={INK} size={36} anchor="middle">N</Lbl>
		<Lbl x={m.x + 300} y={m.bot + 90} at={at} color={INK} size={36} anchor="middle">S</Lbl>
	</>;
};

// ---------- 1. hook: still, along or across ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const without = cue(id, 'without speeding up'), but = cue(id, "But a magnetic field doesn't"), still = cue(id, 'sitting still'), along = cue(id, 'Then fire it along'), across = cue(id, 'Then fire it across'), which = cue(id, 'Which of these'), make = cue(id, 'Make your prediction');
	const h = holdIf(id);
	if (f < 1) return <M6V03FinalFrame />;
	const cut = prog(f, without, 24);
	const t = prog(f, but - 10, 50);
	const cam = lerpCam(CAM_V03, CAM_MAG, t);
	const mag = prog(f, but + 34, 24);
	const [pax] = project(cam, PA), [pxx] = project(cam, PX), [psx] = project(cam, PS);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - cut, clipPath: 'inset(150px 0 0 0)'}}><M6V03FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetBox cam={cam} magnet={mag} edges={cut} />
				{f >= still ? <P3 cam={cam} p={PS} opacity={prog(f, still, 12)} /> : null}
				{f >= along ? <g opacity={prog(f, along, 12)}><P3 cam={cam} p={PA} /><Arrow3 cam={cam} p={add3(PA, [0, 0, -30])} d={[0, 0, -80]} color={TEAL.stroke} /></g> : null}
				{f >= across ? <g opacity={prog(f, across, 12)}><P3 cam={cam} p={PX} /><Arrow3 cam={cam} p={add3(PX, [26, 0, 0])} d={[100, 0, 0]} color={TEAL.stroke} /></g> : null}
			</FrameSvg>
			{mag > 0 ? <NS cam={cam} at={but + 40} /> : null}
			<HandTag x={1440} y={800} text="B: N to S" at={but + 60} size={32} color={GREY.ink} marks={[{kind: 'arrow', from: [1430, 790], to: [1290, 620], bend: 0.2}]} markAt={but + 64} />
			<Lbl x={psx} y={650} at={still + 8} color={INK} size={30} anchor="middle">still</Lbl>
			<HandTag x={pax} y={650} text="along" at={along + 8} size={32} color={TEAL.ink} anchor="middle" />
			<HandTag x={pxx + 50} y={650} text="across" at={across + 8} size={32} color={TEAL.ink} anchor="middle" />
			{[['still', still], ['along', along], ['across', across]].map(([s, a], i) => <Chip key={s} x={1450} y={300 + i * 110} at={Math.max(which, Number(a))} size={34} w={380}>{s}: force?</Chip>)}
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={make} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. only moving charges, and only across the field ----------
/** The across proton's turn: a magnetic run in the x-y plane (world px per frame), a quarter turn. */
const R2 = 150, V2 = 4;
const TURN2 = runMotion({field: {kind: 'magnetic', qOverM: 1, b: -V2 / R2}, start: {x: 0, y: 0, vx: V2, vy: 0}, duration: ((Math.PI / 2) * R2) / V2, steps: 800});
export const S02: React.FC = () => {
	const id = 'when-force';
	const f = useCurrentFrame();
	const only = cue(id, 'Only one of them'), moving = cue(id, 'charges that are moving'), fired = cue(id, 'Fired straight along'), line = cue(id, 'in a straight line'), side = cue(id, "it's pushed sideways"), contrast = cue(id, "That's a big contrast");
	const cam = CAM_MAG;
	const zA = kf(f, mono([[fired, 100], [fired + 70, -110]]));
	const pa: V3 = [PA[0], PA[1], zA];
	const tt = prog(f, side + 6, 80, x => x) * TURN2.duration;
	const s = stateAt(TURN2, tt);
	const px: V3 = [PX[0] + s.x, PX[1] + s.y, 0];
	const sp = Math.hypot(s.vx, s.vy) || 1;
	const trail = tt > 0 ? trailTo(TURN2, tt, 60).map(([x, y]) => project(cam, [PX[0] + x, PX[1] + y, 0])) : [];
	const [psx, psy] = project(cam, PS), [pxx, pxy] = project(cam, px);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetBox cam={cam} magnet={1} />
				<P3 cam={cam} p={PS} />
				<P3 cam={cam} p={pa} />
				<Arrow3 cam={cam} p={add3(pa, [0, 0, -30])} d={[0, 0, -80]} color={TEAL.stroke} />
				{trail.length > 1 ? <polyline points={trail.map(p => p.join(',')).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="10 7" /> : null}
				<P3 cam={cam} p={px} />
				<Arrow3 cam={cam} p={add3(px, [(26 * s.vx) / sp, (26 * s.vy) / sp, 0])} d={[(100 * s.vx) / sp, (100 * s.vy) / sp, 0]} color={TEAL.stroke} />
				{f >= side ? <Arrow3 cam={cam} p={add3(px, [(-26 * s.vy) / sp, (26 * s.vx) / sp, 0])} d={[(-150 * s.vy) / sp, (150 * s.vx) / sp, 0]} color={AMBER.stroke} width={8} head={24} opacity={prog(f, side, 10)} /> : null}
				<Ring cx={pxx} cy={pxy - 20} rx={110} ry={90} at={side + 40} color={AMBER.stroke} />
			</FrameSvg>
			<NS cam={cam} at={-30} />
			<Lbl x={psx} y={psy - 44} at={moving + 4} color={INK} size={32} anchor="middle">F = 0</Lbl>
			<Lbl x={project(cam, pa)[0] + 40} y={project(cam, pa)[1] - 30} at={line} color={INK} size={32}>F = 0</Lbl>
			<Lbl x={pxx + 60} y={pxy - 70} at={side + 12} color={AMBER.ink} size={36}>F</Lbl>
			<CrossedChip x={1450} y={300} at={only} crossAt={moving + 10} size={32} caption="not moving">still: force?</CrossedChip>
			<CrossedChip x={1450} y={430} at={only + 6} crossAt={line + 10} size={32} caption="rides along: nothing">along: force?</CrossedChip>
			<Chip x={1450} y={560} at={side} size={32} w={380} border={AMBER.stroke} color={AMBER.ink}>across: pushed sideways</Chip>
			<HandTag x={1450} y={690} text="moving + across = push" at={side + 46} size={32} color={AMBER.ink} />
			<Chip x={96} y={890} at={contrast} size={32} border={NAVY.stroke} color={NAVY.ink}>electric field: F = qE, even at rest</Chip>
		</>
	);
};

// ---------- 3. dots and crosses ----------
const CAM3A: Cam = {cx: 1330, cy: 560, k: 0.62, tilt: 1, maxDeg: 65, depthX: 0.45, depthY: 0};
const CAM3B: Cam = {cx: 1350, cy: 560, k: 0.85, tilt: 0, maxDeg: 65, depthX: 0.45, depthY: 0};
export const S03: React.FC = () => {
	const id = 'dots-crosses';
	const f = useCurrentFrame();
	const three = cue(id, 'Magnetic fields are three'), crossM = cue(id, 'A cross means'), you = cue(id, 'flying away from you'), dotM = cue(id, 'A dot means'), towards = cue(id, 'coming towards you'), turn = cue(id, 'Turn our view to face'), grid = cue(id, 'become a grid of crosses'), exam = cue(id, 'Exam questions almost always');
	const t1 = prog(f, crossM + 20, you - crossM + 10), t2 = prog(f, dotM + 20, towards - dotM + 10);
	const r = prog(f, turn, grid - turn + 10);
	const cam = lerpCam(CAM3A, CAM3B, r);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={three} size={32}>3D field, flat page: we need symbols</Strip>
			<FrameSvg>
				<EndOnArrow cx={400} cy={400} len={380} turn={t1} away />
				<EndOnArrow cx={400} cy={720} len={380} turn={t2} away={false} />
				<MagnetBox cam={cam} magnet={1 - prog(f, turn, 30)} edges={1 - r} />
			</FrameSvg>
			<Lbl x={400} y={320} at={crossM} out={you - 10} color={INK_SOFT} size={30} anchor="middle">arrow flying away</Lbl>
			<Lbl x={400} y={640} at={dotM} out={towards - 10} color={INK_SOFT} size={30} anchor="middle">arrow coming towards you</Lbl>
			<Lbl x={540} y={410} at={you} color={GREY.ink} size={36}>×: into the page</Lbl>
			<Lbl x={540} y={730} at={towards} color={GREY.ink} size={36}>•: out of the page</Lbl>
			<HandTag x={540} y={470} text="× tail: away" at={you + 16} size={32} color={GREY.ink} />
			<HandTag x={540} y={790} text="• tip: towards" at={towards + 16} size={32} color={GREY.ink} />
			<HandTag x={760} y={300} at={grid} marks={[{kind: 'arrow', from: [470, 360], to: [1060, 330], bend: -0.12}]} color={GREY.ink} />
			<Lbl x={1350} y={300} at={grid + 10} color={GREY.ink} size={34} anchor="middle">B into page</Lbl>
			<Lbl x={1350} y={300} at={three} out={turn} color={GREY.ink} size={30} anchor="middle">the magnet's gap, side view</Lbl>
			<Strip x={96} y={880} at={exam} size={30}>exam diagrams: × into the page, • out of the page</Strip>
		</>
	);
};

// ---------- 4. how big is the force? ----------
const CAM4: Cam = {cx: 560, cy: 590, k: 1.15, tilt: 1, maxDeg: 65, depthX: 0.45, depthY: 0};
const P4: V3 = [-70, 0, 70], L4 = 220;
export const S04: React.FC = () => {
	const id = 'size';
	const f = useCurrentFrame();
	const how = cue(id, 'How big is the force'), eq = cue(id, 'F equals q v B sine theta'), qis = cue(id, 'q is the charge'), field = cue(id, 'between the velocity and the field'), another = cue(id, 'Another way to see it'), perp = cue(id, 'v perpendicular'), ninety = cue(id, 'At ninety degrees'), biggest = cue(id, 'so the force is biggest'), zero = cue(id, 'Along the field, theta is zero');
	const th = kf(f, mono([[how, 50], [ninety, 50], [ninety + 40, 90], [zero, 90], [zero + 50, 0]]));
	const cam = CAM4;
	const v: V3 = [L4 * S(th), 0, -L4 * C(th)];
	const o = project(cam, P4), tip = project(cam, add3(P4, v)), fd = project(cam, add3(P4, [0, 0, -L4]));
	const comp = prog(f, perp, 16);
	const Fl = 170 * S(th);
	const vpar = project(cam, add3(P4, [0, 0, -L4 * C(th)]));
	const vperpEnd = project(cam, add3(P4, [L4 * S(th), 0, 0]));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetBox cam={cam} />
				<line x1={o[0]} y1={o[1]} x2={fd[0]} y2={fd[1]} stroke={FIELD} strokeWidth={3} strokeDasharray="8 7" opacity={prog(f, field, 12)} />
				{f >= field ? <ThetaArc x={o[0]} y={o[1]} a={[fd[0] - o[0], fd[1] - o[1]]} b={[tip[0] - o[0], tip[1] - o[1]]} r={70} /> : null}
				<g opacity={comp}>
					<Arrow2 from={o} to={vpar} color={TEAL.stroke} width={4} head={16} dash="9 7" opacity={0.85} />
					<Arrow2 from={o} to={vperpEnd} color={TEAL.stroke} width={6} head={20} dash="9 7" />
				</g>
				<Arrow2 from={o} to={tip} color={TEAL.stroke} width={7} head={24} />
				{Fl > 3 ? <Arrow3 cam={cam} p={P4} d={[0, Fl, 0]} color={AMBER.stroke} width={9} head={26} opacity={prog(f, eq, 14)} /> : null}
				<P3 cam={cam} p={P4} />
				<Ring cx={(o[0] + vperpEnd[0]) / 2} cy={vperpEnd[1]} rx={Math.max(60, (vperpEnd[0] - o[0]) / 2 + 30)} ry={34} at={perp + 30} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={tip[0] + 18} y={tip[1] + 10} color={TEAL.ink} size={36}>v</Lbl>
			{f >= field ? <Lbl x={o[0] + 60 * S(th / 2) + 10} y={o[1] + 92 * C(th / 2)} color={TEAL.ink} size={34}>θ</Lbl> : null}
			<Lbl x={fd[0] + 14} y={fd[1] + 28} at={field} color={GREY.ink} size={32}>B</Lbl>
			{th > 8 ? <Lbl x={vperpEnd[0] + 22} y={vperpEnd[1] - 16} at={perp} color={TEAL.ink} size={32}>v⊥ = v sin θ</Lbl> : null}
			{th < 82 ? <Lbl x={vpar[0] - 18} y={vpar[1] + 40} at={perp} color={TEAL.ink} size={30} anchor="end">v∥ = v cos θ</Lbl> : null}
			{Fl > 20 ? <Lbl x={project(cam, add3(P4, [0, Fl, 0]))[0] + 16} y={project(cam, add3(P4, [0, Fl, 0]))[1] - 8} at={eq} color={AMBER.ink} size={36}>F</Lbl> : null}
			<HandTag x={200} y={870} text="only the across part" at={perp + 36} size={32} color={TEAL.ink} />
			<div style={{position: 'absolute', left: 1010, top: 180, width: 814, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={eq} size={60}><AnswerBox at={eq + 14} tick={false}>F = qvB sin θ</AnswerBox></Row>
				<Row at={qis} ageAt={another} size={32} oldSize={28}><span style={{color: NAVY.ink}}>q</span>: charge, <span style={{color: TEAL.ink}}>v</span>: speed, <span style={{color: GREY.ink}}>B</span>: field (T)</Row>
				<Row at={field} ageAt={another} size={32} oldSize={28}><span style={{color: TEAL.ink}}>θ</span>: angle between v and B</Row>
				<Row at={qis + 30} size={30}><span style={{color: GREY.ink}}>1 T = 1 N A⁻¹ m⁻¹</span></Row>
				<Row at={another} ageAt={ninety} size={44} oldSize={34}>only v⊥ counts: F = qv<Sub>⊥</Sub>B</Row>
			</div>
			<Chip x={1010} y={560} at={perp + 24} size={30} w={814}>Cos is close: v cos θ is next to θ; v⊥ is opposite, so v sin θ</Chip>
			<div style={{position: 'absolute', left: 1010, top: 700, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={biggest} ageAt={zero} size={44} oldSize={36}>90°: sin θ = 1, <span style={{color: AMBER.ink}}>F = qvB</span> (max)</Row>
				<Row at={cap(id, zero + 20)} size={44}>0°: sin θ = 0, <span style={{color: AMBER.ink}}>F = 0</span></Row>
			</div>
			<HandTag x={1560} y={660} text="max at 90°" at={biggest + 20} size={32} color={AMBER.ink} />
		</>
	);
};

// ---------- 5. which way does it push? ----------
export const TRIAD = {cx: 380, cy: 620, len: 200};
export const triadArms = (labels = true) => [
	{d: [1, 0, 0] as V3, color: TEAL.stroke, label: labels ? 'thumb: v' : 'v'},
	{d: [0, 0, -1] as V3, color: FIELD, label: labels ? 'fingers: B (into page)' : 'B'},
	{d: [0, 1, 0] as V3, color: AMBER.stroke, label: labels ? 'palm: F (+ charge)' : 'F'},
];
export const GRID5 = {x: 900, y: 230, w: 900, h: 600};
export const PROTON5 = {x: 1220, y: 430}, ELECTRON6 = {x: 1220, y: 690};
export const S05: React.FC = () => {
	const id = 'direction';
	const f = useCurrentFrame();
	const strange = cue(id, 'The direction is the strange'), both = cue(id, 'at right angles to both'), palm = cue(id, 'right-hand palm rule'), thumb = cue(id, 'Point your thumb'), fingers = cue(id, 'and your fingers along'), faces = cue(id, 'Your palm faces'), pushes = cue(id, 'the way the force pushes'), pos = cue(id, 'For a positive charge moving right'), up = cap(id, cue(id, 'the force is up'));
	const r = 1 - prog(f, pushes - 6, 50);
	const arms = triadArms().filter((_, i) => f >= [thumb, fingers, faces][i]);
	const P = PROTON5;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={both} size={32}>F is at right angles to both v and B</Strip>
			<FrameSvg>
				<CrossRegion x={GRID5.x} y={GRID5.y} w={GRID5.w} h={GRID5.h} step={80} opacity={prog(f, strange - 10, 16)} />
				<AxisTriad cx={TRIAD.cx} cy={TRIAD.cy} len={TRIAD.len} arms={arms} ax={35 * r} ay={-55 * r} az={25 * r} />
				{f >= pos ? <g opacity={prog(f, pos, 12)}>
					<Arrow2 from={[P.x + 30, P.y]} to={[P.x + 190, P.y]} color={TEAL.stroke} width={7} head={24} />
					<Particle cx={P.x} cy={P.y} sign="+" r={26} />
				</g> : null}
				{f >= up ? <g opacity={prog(f, up, 12)}>
					<Arrow2 from={[P.x, P.y - 30]} to={[P.x, P.y - 170]} color={AMBER.stroke} width={8} head={26} />
					<RightAngle x={P.x} y={P.y} u={[1, 0]} v={[0, -1]} size={44} />
				</g> : null}
			</FrameSvg>
			<Lbl x={96} y={890} at={palm} color={INK_SOFT} size={30}>one common rule; others give the same direction</Lbl>
			<Lbl x={P.x + 200} y={P.y + 10} at={pos} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={P.x + 20} y={P.y - 190} at={up} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={GRID5.x + GRID5.w} y={GRID5.y - 22} at={strange} color={GREY.ink} size={32} anchor="end">B into page</Lbl>
			<Row at={up} size={48} style={{position: 'absolute', left: 1440, top: 600}}><AnswerBox at={up + 10}><span style={{color: AMBER.ink}}>F: up</span></AnswerBox></Row>
			<HandTag x={P.x + 60} y={P.y - 100} text="⊥ to v and B" at={up + 20} size={32} color={AMBER.ink} />
		</>
	);
};

// ---------- 6. negative charges go the other way ----------
const INSET = {x: 96, y: 190, w: 720, h: 560};
const ARC6 = runMotion({field: {kind: 'magnetic', qOverM: -1, b: -5 / 300}, start: {x: 0, y: 0, vx: 5, vy: 0}, duration: ((Math.PI / 2) * 300) / 5 * 0.9, steps: 800});
export const S06: React.FC = () => {
	const id = 'negative-charge';
	const f = useCurrentFrame();
	const neg = cue(id, 'For a negative charge'), down = cue(id, 'is pushed down'), same = cue(id, 'Same field, same direction'), curved = cue(id, 'curved downwards'), find = cue(id, 'Find the direction for a positive');
	const P = PROTON5, E = ELECTRON6;
	const inset = prog(f, curved - 20, 20);
	const ta = prog(f, curved, 70, x => x) * ARC6.duration;
	const pts = ta > 0 ? trailTo(ARC6, ta, 100).map(([x, y]) => [INSET.x + 330 + x, INSET.y + 200 - y]) : [];
	const end = stateAt(ARC6, ta);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={GRID5.x} y={GRID5.y} w={GRID5.w} h={GRID5.h} step={80} />
				<AxisTriad cx={TRIAD.cx} cy={TRIAD.cy} len={TRIAD.len} arms={triadArms()} opacity={1 - inset} />
				<Arrow2 from={[P.x + 30, P.y]} to={[P.x + 190, P.y]} color={TEAL.stroke} width={7} head={24} />
				<Arrow2 from={[P.x, P.y - 30]} to={[P.x, P.y - 170]} color={AMBER.stroke} width={8} head={26} />
				<Particle cx={P.x} cy={P.y} sign="+" r={26} />
				{f >= neg ? <g opacity={prog(f, neg, 12)}>
					<Arrow2 from={[E.x + 30, E.y]} to={[E.x + 190, E.y]} color={TEAL.stroke} width={7} head={24} />
					<Particle cx={E.x} cy={E.y} sign="−" r={26} />
				</g> : null}
				{f >= down ? <g opacity={prog(f, down, 12)}>
					<Arrow2 from={[E.x, E.y + 30]} to={[E.x, E.y + 140]} color={AMBER.stroke} width={8} head={26} />
					<RightAngle x={E.x} y={E.y} u={[1, 0]} v={[0, 1]} size={44} />
				</g> : null}
				{inset > 0 ? <g opacity={inset}>
					<CardRect x={INSET.x} y={INSET.y} w={INSET.w} h={INSET.h} />
					<CrossRegion x={INSET.x + 330} y={INSET.y + 60} w={360} h={470} step={70} />
					<Gun x={INSET.x + 40} y={INSET.y + 200} h={110} gap={70} />
					<line x1={INSET.x + 196} y1={INSET.y + 200} x2={INSET.x + 330} y2={INSET.y + 200} stroke={TEAL.stroke} strokeWidth={5} />
					{pts.length > 1 ? <polyline points={pts.map(p => p.join(',')).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={5} /> : null}
					{pts.length > 1 ? <Particle cx={INSET.x + 330 + end.x} cy={INSET.y + 200 - end.y} sign="−" r={14} /> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={E.x + 200} y={E.y + 10} at={neg} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={E.x + 20} y={E.y + 160} at={down} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={P.x + 200} y={P.y + 10} color={TEAL.ink} size={36}>v</Lbl>
			<Lbl x={P.x + 20} y={P.y - 190} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={GRID5.x + GRID5.w} y={GRID5.y - 22} color={GREY.ink} size={32} anchor="end">B into page</Lbl>
			<HandTag x={P.x + 260} y={(P.y + E.y) / 2} text="flip for −" at={down + 24} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [P.x + 40, P.y - 120], to: [E.x + 40, E.y + 110], bend: -0.35}]} markAt={down + 20} />
			<Lbl x={INSET.x + 20} y={INSET.y + 520} at={curved - 10} color={INK} size={30}>last time: the beam curved down</Lbl>
			<CrossedChip x={1210} y={860} at={same} crossAt={same + 40} size={30}>electron: same way as proton</CrossedChip>
			<Strip x={96} y={800} at={find} size={32} border={INK}>1. + charge: palm rule.  2. − charge: reverse.</Strip>
		</>
	);
};
