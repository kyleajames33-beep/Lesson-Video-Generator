// Scenes 5 to 8: the angle (the flat field panel with the live dial: the wire turns, the current splits into its
// across and along parts, readouts θ, I⊥ and F every frame, a point riding the F/BIl graph), which way (the palm-rule
// axes rotating into place on the top view, the three flip variants, the electron check), the loudspeaker (the painted
// cross-section with its cone, the end-on and side-section coil views, every push adding along the axis), and two checks
// with the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT, PAPER} from '../../shared/tokens';
import {AidCard, AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2, AxisTriad, FieldSymbol, DotRegion} from '../../physics/electromagnetism/magnetic';
import type {TriadArm} from '../../physics/electromagnetism/magnetic';
import {CrossRegion} from '../../physics/electromagnetism/plates';
import {Loudspeaker, Rod, speakerPts} from '../../physics/electromagnetism/bench';
import {CurrentArrow} from '../../physics/electromagnetism/wires';
import {QuarterDial, ThetaArc} from '../phys-y12-m6-v04/parts';
import {HEAD, HEAD_SIZE, LS, MC, cap, cue, dialAt, mono} from './common';
import {AMBER, CAM_T, CardRect, GREY, Givens, Lbl, MagnetStage, NAVY, ORANGE, Ring, Strip, fx, rodEnds} from './parts';

const rad = (d: number) => (d * Math.PI) / 180;
const FIELD_C = GREY.stroke;

// ---------- the flat field panel (scenes 5 and 8) ----------
const PANEL = {x: 96, y: 200, w: 780, h: 470};
const PANEL_A = PANEL;
const PANEL8 = {x: 96, y: 190, w: 1000, h: 560};
/** Field arrows across the panel at screen angle `deg` (0 = right, anticlockwise positive). */
const FlatField: React.FC<{deg?: number; opacity?: number; panel?: typeof PANEL}> = ({deg = 0, opacity = 1, panel: PANEL = PANEL_A}) => {
	const cx = PANEL.x + PANEL.w / 2, cy = PANEL.y + PANEL.h / 2;
	const ux = Math.cos(rad(deg)), uy = -Math.sin(rad(deg));
	return (
		<g opacity={opacity}>
			<rect x={PANEL.x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx={14} fill="#fbf8f1" stroke={FIELD_C} strokeWidth={3} strokeDasharray="10 8" />
			<defs><clipPath id={`v07-panel-${PANEL.w}`}><rect x={PANEL.x + 8} y={PANEL.y + 8} width={PANEL.w - 16} height={PANEL.h - 16} /></clipPath></defs>
			<g clipPath={`url(#v07-panel-${PANEL.w})`}>
				{[-3, -2, -1, 0, 1, 2, 3].map(i => {
					const ox = cx - uy * i * 80, oy = cy + ux * i * 80;
					return <Arrow2 key={i} from={[ox - ux * 600, oy - uy * 600]} to={[ox + ux * 340, oy + uy * 340]} color={FIELD_C} width={4} head={22} />;
				})}
			</g>
		</g>
	);
};
/** The wire in the panel: the painted rod turned so its current runs at `deg` (screen), and its current arrow. */
const PanelWire: React.FC<{cx: number; cy: number; deg: number; len?: number; arrow?: number; opacity?: number}> = ({cx, cy, deg, len = 520, arrow = 180, opacity = 1}) => (
	<g opacity={opacity}>
		<Rod cx={cx} cy={cy} len={len} deg={-deg} />
		{arrow > 0 ? <CurrentArrow x={cx} y={cy} len={arrow} deg={deg} color={ORANGE.stroke} width={8} head={26} /> : null}
	</g>
);

// ---------- 5. the angle ----------
const GR = {ox: 1450, oy: 430, w: 330, h: 190};
const gp = (deg: number): [number, number] => [GR.ox + (deg / 90) * GR.w, GR.oy - Math.sin(rad(deg)) * GR.h];
const C5 = {x: PANEL.x + PANEL.w / 2, y: PANEL.y + PANEL.h / 2 + 20};
export const S05: React.FC = () => {
	const id = 'angle';
	const f = useCurrentFrame();
	const lay = cue(id, 'lay the field flat'), turn = cue(id, 'makes an angle theta'), split = cue(id, "Split the current's direction"), across = cue(id, 'One part runs across'), none = cue(id, 'feels no force at all'), cos = cue(id, 'Cos is close'), force = cue(id, 'So the force is B'), seen = cue(id, 'also see written as'), thirty = cue(id, 'At thirty degrees'), newtons = cue(id, 'zero three zero newtons'), ninety = cue(id, 'At ninety degrees'), along = cue(id, 'when the current runs along'), big = cap(id, cue(id, 'however big the current'));
	const th = kf(f, mono([[turn, 90], [turn + 50, 30], [ninety - 4, 30], [ninety + 40, 90], [along - 4, 90], [along + 50, 0]]));
	const d = dialAt(th);
	const L = 190 * kf(f, mono([[big - 10, 1], [big + 20, 1.4]]));
	const ux = Math.cos(rad(th)), uy = -Math.sin(rad(th));
	const sp = prog(f, split, 16), dim = prog(f, none, 14);
	const curve = Array.from({length: 46}, (_, i) => gp(i * 2).join(',')).join(' ');
	const graphO = prog(f, force, 14);
	const fs = 10 + 14 * d.s;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FlatField opacity={prog(f, lay, 16)} />
				<PanelWire cx={C5.x} cy={C5.y} deg={th} arrow={L} opacity={prog(f, lay + 10, 14)} />
				{th > 1 && th < 89 ? <ThetaArc x={C5.x} y={C5.y} a={[1, 0]} b={[ux, uy]} r={80} color={INK} /> : null}
				{sp > 0 ? <g opacity={sp}>
					<Arrow2 from={[C5.x, C5.y]} to={[C5.x + L * ux, C5.y]} color={GREY.ink} width={6} head={20} dash="10 7" opacity={1 - 0.5 * dim} />
					<Arrow2 from={[C5.x + L * ux, C5.y]} to={[C5.x + L * ux, C5.y + L * uy]} color={ORANGE.stroke} width={6} head={20} dash="10 7" />
				</g> : null}
				{d.s > 0.02 ? <FieldSymbol x={C5.x - 120 * ux} y={C5.y - 120 * uy} dir="in" size={fs} color={AMBER.stroke} ring /> : null}
				<QuarterDial x={150} y={900} r={110} deg={th} />
				<g opacity={graphO}>
					<line x1={GR.ox} y1={GR.oy} x2={GR.ox + GR.w + 20} y2={GR.oy} stroke={INK} strokeWidth={3} />
					<line x1={GR.ox} y1={GR.oy} x2={GR.ox} y2={GR.oy - GR.h - 20} stroke={INK} strokeWidth={3} />
					<polyline points={curve} fill="none" stroke={AMBER.stroke} strokeWidth={4} />
					{[0, 30, 60, 90].map(a => <circle key={a} cx={gp(a)[0]} cy={gp(a)[1]} r={8} fill="#fbe7c4" stroke={AMBER.stroke} strokeWidth={3} />)}
					<circle cx={gp(th)[0]} cy={gp(th)[1]} r={13} fill={AMBER.stroke} stroke={INK} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={PANEL.x + PANEL.w - 20} y={PANEL.y + 40} at={lay} color={GREY.ink} size={34} anchor="end">B</Lbl>
			<Lbl x={C5.x + L * ux + 16} y={C5.y + L * uy - 10} at={lay + 10} color={ORANGE.ink} size={34}>I</Lbl>
			{th > 1 && th < 89 ? <Lbl x={C5.x + 92} y={C5.y - 20} color={INK} size={32}>θ</Lbl> : null}
			<Lbl x={C5.x + 30} y={C5.y + 56} at={split} out={along} color={GREY.ink} size={28}>I cos θ (along B)</Lbl>
			<Lbl x={C5.x + L * ux + 16} y={C5.y + (L * uy) / 2} at={split} out={along} color={ORANGE.ink} size={28}>I sin θ (across B)</Lbl>
			{d.s > 0.02 ? <Lbl x={C5.x - 120 * ux - 40} y={C5.y - 120 * uy + fs * 2 + 26} color={AMBER.ink} size={28} anchor="end">F into the screen</Lbl> : null}
			<HandTag x={C5.x + 220} y={PANEL.y + 60} text="across: pushed" at={across + 10} out={along} size={32} color={ORANGE.ink} />
			<HandTag x={PANEL.x + 30} y={PANEL.y + PANEL.h - 40} text="along: ignored" at={none + 10} out={along} size={32} color={GREY.ink} />
			<Lbl x={280} y={900} color={INK} size={30}>θ dial</Lbl>
			<Readouts x={940} y={180} w={440} size={44} at={lay + 10} rows={[
				{label: 'θ', value: `${fx(th)}°`, color: INK},
				{label: <>I<Sub>⊥</Sub> = I sin θ</>, value: fx(d.Iperp, 2), unit: 'A', color: ORANGE.ink},
				{label: 'F', value: fx(d.F, 3), unit: 'N', color: AMBER.ink},
			]} />
			<Lbl x={GR.ox - 12} y={GR.oy - GR.h + 8} at={force} color={INK} size={28} anchor="end">1</Lbl>
			<Lbl x={GR.ox + 10} y={GR.oy - GR.h - 34} at={force} color={AMBER.ink} size={28}>F ÷ BIl</Lbl>
			<Lbl x={GR.ox} y={GR.oy + 36} at={force} color={INK} size={28} anchor="middle">0°</Lbl>
			<Lbl x={GR.ox + GR.w} y={GR.oy + 36} at={force} color={INK} size={28} anchor="middle">90°</Lbl>
			<Lbl x={GR.ox + GR.w / 2} y={GR.oy + 36} at={force} color={INK} size={28} anchor="middle">θ</Lbl>
			<HandTag x={GR.ox + 60} y={GR.oy - GR.h - 80} text="sin, not angle" at={force + 30} size={30} color={AMBER.ink} />
			<Chip x={940} y={490} at={cos} size={28} w={880}>Cos is close: along B is next to θ (cos); across B is opposite (sin)</Chip>
			<div style={{position: 'absolute', left: 940, top: 590, display: 'flex', flexDirection: 'column', gap: 6, width: 900}}>
				<Row at={force} ageAt={seen + 10} size={44} oldSize={32}><span style={{color: AMBER.ink}}>F = BIl sin θ</span></Row>
				<Row at={seen} ageAt={thirty} size={52} oldSize={34}><AnswerBox at={seen + 12} tick={false}>F = lI<Sub>⊥</Sub>B = lIB sin θ</AnswerBox></Row>
				<Row at={thirty} ageAt={ninety} size={44} oldSize={32}>30°: F = 0.060 × sin 30° = <AnswerBox at={newtons}><span style={{color: AMBER.ink}}>{fx(dialAt(30).F, 3)} N</span></AnswerBox></Row>
				<Row at={ninety} ageAt={along} size={44} oldSize={32}>90°: F<Sub>max</Sub> = BIl = <AnswerBox at={ninety + 30}><span style={{color: AMBER.ink}}>{fx(MC.F, 3)} N</span></AnswerBox></Row>
				<Row at={along + 20} size={44}>0°: F = BIl sin 0° = <AnswerBox at={along + 40}><span style={{color: AMBER.ink}}>0</span></AnswerBox></Row>
			</div>
			<HandTag x={PANEL.x + 120} y={PANEL.y + PANEL.h + 60} text="bigger current, still zero" at={big} size={32} color={ORANGE.ink} />
		</>
	);
};

// ---------- 6. which way: the palm rule ----------
const CAM6 = {...CAM_T, cx: 520, cy: 560, k: 1.35};
const ARMS: readonly TriadArm[] = [
	{d: [1, 0, 0], color: ORANGE.stroke, label: 'thumb: I'},
	{d: [0, 0, -1], color: FIELD_C, label: 'fingers: B'},
	{d: [0, 1, 0], color: AMBER.stroke, label: 'palm faces: F'},
];
/** A small flip panel: a field of crosses or dots, a wire with its current, the force up or down. */
const FlipPanel: React.FC<{x: number; y: number; iLeft: boolean; dots: boolean; fUp: boolean; opacity: number}> = ({x, y, iLeft, dots, fUp, opacity}) => (
	<g opacity={opacity}>
		<CardRect x={x} y={y} w={270} h={230} />
		{dots ? <DotRegion x={x + 15} y={y + 15} w={240} h={200} step={50} border={false} r={5} /> : <CrossRegion x={x + 15} y={y + 15} w={240} h={200} step={50} border={false} />}
		<rect x={x + 25} y={y + 105} width={220} height={20} rx={10} fill="#d99a5b" stroke="#8a4f1c" strokeWidth={3} />
		<Arrow2 from={[x + (iLeft ? 200 : 70), y + 150]} to={[x + (iLeft ? 70 : 200), y + 150]} color={ORANGE.stroke} width={5} head={16} />
		<Arrow2 from={[x + 135, y + (fUp ? 100 : 130)]} to={[x + 135, y + (fUp ? 30 : 200)]} color={AMBER.stroke} width={6} head={18} />
	</g>
);
export const S06: React.FC = () => {
	const id = 'palm-rule';
	const f = useCurrentFrame();
	const both2 = cue(id, 'right angles to both'), rule = cue(id, 'use the right-hand palm rule'), force = cue(id, 'in the direction of the force'), screen = cue(id, 'palm faces up the screen'), rev = cue(id, 'Reverse the current, or'), both = cue(id, 'Reverse both'), elec = cue(id, 'And the electrons give'), cancel = cap(id, cue(id, 'so the two flips cancel'));
	const cam = CAM6;
	const e = rodEnds(cam, 0);
	const y = e.c[1];
	const rot = 1 - prog(f, force, 40);
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - force - 30) / 24)));
	const triadOut = prog(f, elec, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetStage cam={cam} magnet={0} leads={0} />
				<Arrow2 from={[e.x1 + 30, y - 56]} to={[e.x1 + 180, y - 56]} color={ORANGE.stroke} width={6} head={20} />
				{f < force + 20 ? <g opacity={prog(f, both2, 12) * (1 - prog(f, force, 16))}>
					<Arrow2 from={[cam.cx + 60, y - 28]} to={[cam.cx + 60, y - 220]} color={AMBER.stroke} width={8} head={28} dash="14 9" />
					<Arrow2 from={[cam.cx + 60, y + 28]} to={[cam.cx + 60, y + 220]} color={AMBER.stroke} width={8} head={28} dash="14 9" />
				</g> : null}
				<Arrow2 from={[cam.cx, y - 28]} to={[cam.cx, y - 200 - 20 * pulse]} color={AMBER.stroke} width={10 + 4 * pulse} head={30} opacity={prog(f, force, 12)} />
				<AxisTriad cx={1330} cy={430} len={160} arms={ARMS} ax={40 * rot} ay={-55 * rot} az={25 * rot} size={34} opacity={prog(f, rule, 14) * (1 - triadOut)} />
				<Ring cx={1390} cy={380} rx={230} ry={180} at={force + 44} color={INK} />
				<FlipPanel x={940} y={650} iLeft dots={false} fUp={false} opacity={prog(f, rev, 12)} />
				<FlipPanel x={1240} y={650} iLeft={false} dots fUp={false} opacity={prog(f, rev + 12, 12)} />
				<FlipPanel x={1540} y={650} iLeft dots fUp opacity={prog(f, both, 12)} />
				{f >= elec ? <g opacity={triadOut}>
					<CardRect x={940} y={190} w={884} h={420} />
					<rect x={990} y={330} width={500} height={70} rx={35} fill="#d99a5b" stroke="#8a4f1c" strokeWidth={4} />
					<circle cx={1240 - ((f - elec) * 0.8) % 200} cy={365} r={22} fill="#fffdf8" stroke="#5d6670" strokeWidth={3} />
					<Arrow2 from={[1240 - ((f - elec) * 0.8) % 200, 337]} to={[1240 - ((f - elec) * 0.8) % 200, 250]} color={AMBER.stroke} width={6} head={20} />
					<Arrow2 from={[1100, 450]} to={[1380, 450]} color={ORANGE.stroke} width={6} head={20} />
				</g> : null}
			</FrameSvg>
			<Lbl x={e.x1 + 190} y={y - 48} color={ORANGE.ink} size={32}>I</Lbl>
			<Lbl x={cam.cx + 24} y={y - 190} at={force} color={AMBER.ink} size={36}>F</Lbl>
			<Lbl x={cam.cx + 90} y={y - 160} at={both2} out={force} color={AMBER.ink} size={36}>up?</Lbl>
			<Lbl x={cam.cx + 90} y={y + 200} at={both2} out={force} color={AMBER.ink} size={36}>down?</Lbl>
			<Lbl x={e.x1} y={y + 330} color={GREY.ink} size={30}>B into the screen (×)</Lbl>
			<Row at={both2} out={elec} size={48} style={{position: 'absolute', left: 1000, top: 186}}>F ⟂ I and F ⟂ B</Row>
			<Row at={screen} size={48} style={{position: 'absolute', left: 96, top: 800}}><AnswerBox at={screen + 12}><span style={{color: AMBER.ink}}>F: up the screen</span></AnswerBox></Row>
			<Lbl x={1000} y={620} at={rule + 20} out={rev} color={INK_SOFT} size={28}>one common rule; others give the same direction</Lbl>
			<Lbl x={1075} y={918} at={rev} color={INK} size={28} anchor="middle">flip I</Lbl>
			<Lbl x={1375} y={918} at={rev + 12} color={INK} size={28} anchor="middle">flip B</Lbl>
			<Lbl x={1675} y={918} at={both} color={INK} size={28} anchor="middle">flip both ✓</Lbl>
			<HandTag x={1060} y={615} text="flip one: F flips" at={rev + 30} out={elec} size={32} color={AMBER.ink} />
			<HandTag x={1560} y={615} text="flip both: back" at={both + 16} out={elec} size={32} color={AMBER.ink} />
			<Lbl x={990} y={240} at={elec} color={GREY.ink} size={30}>electron: − charge, moving left</Lbl>
			<Lbl x={1400} y={460} at={elec} color={ORANGE.ink} size={30}>I</Lbl>
			<Chip x={970} y={500} at={elec + 20} size={28} w={830}>electron: opposite motion × negative charge = same force direction</Chip>
			<Lbl x={1300} y={280} at={cancel} color={AMBER.ink} size={30}>F up</Lbl>
		</>
	);
};

// ---------- 7. the loudspeaker ----------
const SP = {x: 96, y: 200, w: 420};
const RING = {cx: 240, cy: 790, r: 86}, SIDE = {cx: 560, cy: 790};
export const S07: React.FC = () => {
	const id = 'loudspeaker';
	const f = useCurrentFrame();
	const inside = cue(id, 'Inside a loudspeaker'), ring = cue(id, 'ring-shaped magnet'), spokes = cue(id, 'spokes of a wheel'), say = cue(id, 'Say the coil has'), ideal = cue(id, 'In this ideal model'), turn = cue(id, 'One turn is pi'), wire = cue(id, 'metres of wire'), newton = cue(id, 'one point zero newton'), axis = cue(id, 'along its axis'), back = cue(id, 'back and forth'), sound = cap(id, cue(id, "That's sound"));
	const p = speakerPts(SP);
	const osc = f >= back ? Math.sin((f - back) * 0.32) : 0;
	const dx = 7 * osc;
	const rev = osc < 0;
	const radial = 1 + 0.25 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - spokes) / 24)));
	const pushO = prog(f, axis, 14);
	const coilArrows = [45, 135, 225, 315];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Loudspeaker p={SP} dx={dx} opacity={prog(f, inside, 14)} />
				<Ring cx={p.magnet[0]} cy={p.magnet[1]} rx={50} ry={95} at={ring} color={GREY.stroke} />
				{f >= newton ? <Arrow2 from={[p.coil[0], p.coil[1]]} to={[p.coil[0] + 170 * (rev ? -0.6 : 1), p.coil[1]]} color={AMBER.stroke} width={9} head={28} opacity={prog(f, newton, 12)} /> : null}
				{f >= sound ? [0, 1, 2].map(i => { const r = 30 + (((f - sound) * 2 + i * 40) % 120); return <path key={i} d={`M${p.rim[0] + r * 0.6},${p.rim[1] - r} A${r},${r} 0 0 1 ${p.rim[0] + r * 0.6},${p.rim[1] + r}`} fill="none" stroke={GREY.ink} strokeWidth={4} opacity={prog(f, sound, 10)} />; }) : null}
				{/* end-on view: radial field, current round the coil, the push out of the screen at every segment */}
				<g opacity={prog(f, inside + 20, 14)}>
					<circle cx={RING.cx} cy={RING.cy} r={RING.r} fill="none" stroke="#c46a1c" strokeWidth={10} />
					<circle cx={RING.cx} cy={RING.cy} r={26} fill="#5f6368" />
					{[0, 45, 90, 135, 180, 225, 270, 315].map(a => { const u = [Math.cos(rad(a)), -Math.sin(rad(a))]; return <Arrow2 key={a} from={[RING.cx + u[0] * 34, RING.cy + u[1] * 34]} to={[RING.cx + u[0] * (128 * radial), RING.cy + u[1] * (128 * radial)]} color={FIELD_C} width={4} head={16} />; })}
					{coilArrows.map(a => { const u = [Math.cos(rad(a)), -Math.sin(rad(a))], t = rev ? [u[1], -u[0]] : [-u[1], u[0]]; const x = RING.cx + u[0] * RING.r, y = RING.cy + u[1] * RING.r; return <Arrow2 key={a} from={[x - t[0] * 22, y - t[1] * 22]} to={[x + t[0] * 26, y + t[1] * 26]} color={ORANGE.stroke} width={6} head={18} />; })}
					{pushO > 0 ? [0, 90, 180, 270].map(a => <FieldSymbol key={a} x={RING.cx + Math.cos(rad(a)) * RING.r} y={RING.cy - Math.sin(rad(a)) * RING.r} dir={rev ? 'in' : 'out'} size={11} color={AMBER.stroke} ring opacity={pushO} />) : null}
				</g>
				{/* side section through the axis */}
				<g opacity={prog(f, inside + 30, 14)}>
					<rect x={SIDE.cx - 40} y={SIDE.cy - 130} width={80} height={260} rx={10} fill="#5f6368" opacity={0.85} />
					<line x1={SIDE.cx - 170} y1={SIDE.cy} x2={SIDE.cx + 170} y2={SIDE.cy} stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
					<FieldSymbol x={SIDE.cx + 60} y={SIDE.cy - 95} dir={rev ? 'out' : 'in'} size={16} color={ORANGE.stroke} ring />
					<FieldSymbol x={SIDE.cx + 60} y={SIDE.cy + 95} dir={rev ? 'in' : 'out'} size={16} color={ORANGE.stroke} ring />
					<Arrow2 from={[SIDE.cx + 120, SIDE.cy - 40]} to={[SIDE.cx + 120, SIDE.cy - 150]} color={FIELD_C} width={5} head={18} />
					<Arrow2 from={[SIDE.cx + 120, SIDE.cy + 40]} to={[SIDE.cx + 120, SIDE.cy + 150]} color={FIELD_C} width={5} head={18} />
					{pushO > 0 ? <g opacity={pushO}>
						<Arrow2 from={[SIDE.cx + 100, SIDE.cy - 95]} to={[SIDE.cx + (rev ? -40 : 230), SIDE.cy - 95]} color={AMBER.stroke} width={7} head={20} />
						<Arrow2 from={[SIDE.cx + 100, SIDE.cy + 95]} to={[SIDE.cx + (rev ? -40 : 230), SIDE.cy + 95]} color={AMBER.stroke} width={7} head={20} />
					</g> : null}
				</g>
			</FrameSvg>
			<Lbl x={RING.cx} y={640} at={inside + 20} color={INK} size={28} anchor="middle">end-on view</Lbl>
			<Lbl x={430} y={640} at={inside + 30} color={INK} size={28}>side section (cut through the axis)</Lbl>
			<Lbl x={p.magnet[0] - 20} y={p.magnet[1] + 140} at={ring} color={GREY.ink} size={28} anchor="middle">ring magnet</Lbl>
			<HandTag x={96} y={600} text="spokes: radial" at={spokes + 10} size={30} color={GREY.ink} />
			<Lbl x={p.coil[0] + 180} y={p.coil[1] + 10} at={newton} color={AMBER.ink} size={36}>{fx(LS.F, 1)} N</Lbl>
			<HandTag x={430} y={600} text="all add along the axis" at={axis + 16} size={30} color={AMBER.ink} marks={[{kind: 'arrow', from: [560, 610], to: [p.coil[0] + 60, p.coil[1] + 30], bend: -0.3}]} markAt={axis + 20} />
			<Strip x={880} y={176} at={say} size={30} w={940}>Find the force on the voice coil.</Strip>
			<Strip x={880} y={246} at={say + 8} size={30} border={INK}>F = BIl (l = total length in the field)</Strip>
			<Givens x={880} y={316} w={940} at={say + 16} size={30} lines={[<>N = 80 turns, d = 2.0 cm = 0.020 m</>, <>B = 0.40 T (radial), I = 0.50 A</>]} />
			<Chip x={880} y={440} at={ideal} size={28} w={940} color={INK_SOFT}>ideal: all the coil in the field, at right angles to it</Chip>
			<div style={{position: 'absolute', left: 880, top: 520, display: 'flex', flexDirection: 'column', gap: 8, width: 960}}>
				<Row at={turn} ageAt={newton} size={44} oldSize={34}>one turn: πd = π × 0.020 = {fx(LS.turn, 4)} m</Row>
				<Row at={wire} ageAt={newton + 20} size={44} oldSize={34}>l = 80 × {fx(LS.turn, 4)} = {fx(LS.l, 2)} m</Row>
				<Row at={newton} size={48}>F = 0.40 × 0.50 × {fx(LS.l, 2)} = <AnswerBox at={newton + 12}><span style={{color: AMBER.ink}}>{fx(LS.F, 1)} N</span></AnswerBox></Row>
			</div>
			<CrossedChip x={880} y={800} at={axis} crossAt={cap(id, axis + 30)} size={30} caption="× 80 turns">l = one turn: F = {fx(LS.slip, 3)} N</CrossedChip>
		</>
	);
};

// ---------- 8. two checks and a way to remember ----------
const C8 = {x: PANEL8.x + PANEL8.w / 2 - 120, y: PANEL8.y + PANEL8.h / 2 + 30};
const B8 = -25; // the field runs down to the right; the bench is level
export const S08: React.FC = () => {
	const id = 'checks-memory-aid';
	const f = useCurrentFrame();
	const two = cue(id, 'Two quick checks'), bench = cue(id, 'not between the wire and the bench'), count = cue(id, 'And count only the length'), remember = cue(id, "Here's a way to remember"), full = cue(id, 'Across the field, full force'), no = cap(id, cue(id, 'Along the field, no force'));
	const rel = kf(f, mono([[full - 4, 30], [full + 30, 90], [no - 4, 90], [no + 30, 0]]));
	const wdeg = B8 + rel;
	const ux = Math.cos(rad(wdeg)), uy = -Math.sin(rad(wdeg)), bx = Math.cos(rad(B8)), by = -Math.sin(rad(B8));
	const long = prog(f, count, 16);
	const len = 620 + 380 * long;
	const s = Math.sin(rad(rel));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FlatField deg={B8} panel={PANEL8} />
				<PanelWire cx={C8.x + ((len - 620) / 2) * ux} cy={C8.y + ((len - 620) / 2) * uy} deg={wdeg} len={len} arrow={0} />
				<CurrentArrow x={C8.x} y={C8.y} len={170} deg={wdeg} color={ORANGE.stroke} width={8} head={26} />
				{long > 0 ? <rect x={PANEL8.x + PANEL8.w + 2} y={PANEL8.y + 120} width={300} height={PANEL8.h - 160} fill={PAPER} opacity={0.6 * long} /> : null}
				<ThetaArc x={C8.x} y={C8.y} a={[bx, by]} b={[ux, uy]} r={90} color={INK} />
				{f >= bench ? <g opacity={prog(f, bench, 12) * (1 - prog(f, full, 12))}>
					<line x1={C8.x - 260} y1={C8.y + 40} x2={C8.x + 300} y2={C8.y + 40} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 9" />
				</g> : null}
				{s > 0.05 ? <FieldSymbol x={C8.x - 130 * ux} y={C8.y - 130 * uy + 70} dir="in" size={10 + 14 * s} color={AMBER.stroke} ring /> : null}
			</FrameSvg>
			<Lbl x={C8.x + 100} y={C8.y - 50} color={INK} size={32}>θ</Lbl>
			<Lbl x={PANEL8.x + 30} y={PANEL8.y + 40} color={GREY.ink} size={32}>B</Lbl>
			<Lbl x={C8.x - 250} y={C8.y + 80} at={bench} out={full} color={INK_SOFT} size={28}>bench</Lbl>
			<CrossedChip x={96} y={780} at={bench} crossAt={bench + 30} size={30} caption="I to B">θ = angle to the bench</CrossedChip>
			<Chip x={560} y={790} at={bench + 40} size={32} w={560}>θ = angle between I and B ✓</Chip>
			<Lbl x={PANEL8.x + PANEL8.w - 20} y={PANEL8.y + PANEL8.h - 30} at={count + 10} color={NAVY.ink} size={32} anchor="end">l = inside only</Lbl>
			<HandTag x={PANEL8.x + PANEL8.w - 300} y={PANEL8.y + 90} text="inside only" at={count + 20} size={32} color={NAVY.ink} />
			<AidCard x={1200} y={530} w={624} at={remember}>
				<div style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 46, color: INK, lineHeight: 1.1}}>Across the field, full force.<br />Along the field, no force.</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: AMBER.ink, marginTop: 10}}>F = lIB sin θ</div>
			</AidCard>
			<Strip x={1200} y={200} at={two} size={32} w={624}>Two checks for exam questions</Strip>
			<Row at={two + 30} size={44} style={{position: 'absolute', left: 1200, top: 290, width: 624}}>θ: between I and B</Row>
			<Row at={count} size={44} style={{position: 'absolute', left: 1200, top: 380, width: 624}}>l: only inside B</Row>
		</>
	);
};
