// Scenes 1 to 5: the hook (last time's tilted loop turns face on: 6 lines through; then edge on: none; a framed inset of
// the painted coil, magnet and galvanometer this leads to), the rain panel (the same loop in falling rain, then the panel
// turns so the rain becomes the field), magnetic flux (Φ = BA face on), the normal and the part that goes through (the
// field arrow splitting along the normal and along the surface), and turning the loop (live readouts and a dot on the
// cos curve).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {LoopInField, fieldGrid, fproj, throughCount} from '../../physics/electromagnetism/flux';
import type {FluxCam} from '../../physics/electromagnetism/flux';
import {BARMAG, COIL, Galvanometer, Plate} from '../../physics/electromagnetism/bench';
import {M6V08FinalFrame} from '../phys-y12-m6-v08/s3';
import {HEAD, HEAD_SIZE, LIVE, cap, cosd, cue, holdIf, mono} from './common';
import {A0, CAM0, CardRect, FIELD1, GREY, LIT, Lbl, NAVY, RAIN, Ring, fx} from './parts';

const rad = (d: number) => (d * Math.PI) / 180;
const Loop: React.FC<{cam: FluxCam; phi: number; lit?: number; normal?: number; arc?: number; line?: string; litColor?: string; fieldOpacity?: number}> = ({cam, phi, lit = 1, normal = 0, arc = 0, line = FIELD1, litColor = LIT, fieldOpacity = 1}) => (
	<LoopInField clip={[0, 150, 1920, 790]} cam={cam} a={A0} phi={phi} L={4} lit={lit} normal={normal} arc={arc} lineColor={line} litColor={litColor} normalColor={NAVY.stroke} fieldOpacity={fieldOpacity} />
);

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a square loop of wire"), faces = cue(id, 'faces the field square on'), turn = cue(id, 'Now turn the loop'), pred = cue(id, 'Make your prediction'), zero = cue(id, 'all the way to zero'), same = cue(id, "The field hasn't changed"), only = cap(id, cue(id, 'Only its direction has')), why = cue(id, 'So why does turning');
	const h = holdIf(id);
	if (f < 1) return <M6V08FinalFrame />;
	const phi = kf(f, mono([[faces - 6, 50], [faces + 30, 0], [zero - 4, 0], [zero + 60, 90], [only - 4, 90], [only + 40, 60]]));
	const n = throughCount(A0, phi);
	const inset = prog(f, here, 14) * (1 - prog(f, turn, 14));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 16), clipPath: 'inset(150px 0 0 0)'}}><M6V08FinalFrame /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 1, 16)}><Loop cam={CAM0} phi={phi} normal={1 - prog(f, 1, 16)} /></g>
				{inset > 0 ? <g opacity={inset}>
					<CardRect x={1200} y={180} w={624} h={330} />
					<Plate spec={BARMAG} p={{x: 1230, y: 380, w: 180}} flip />
					<Plate spec={COIL} p={{x: 1430, y: 330, w: 220}} />
					<Galvanometer p={{x: 1670, y: 300, w: 130}} />
				</g> : null}
				<Ring cx={1650} cy={720} rx={130} ry={60} at={zero + 40} color={GREY.stroke} />
			</FrameSvg>
			<Lbl x={1420} y={770} color={GREY.ink} size={40}>B</Lbl>
			<HandTag x={1230} y={540} text="every turn is a loop like this" at={here + 20} out={turn} size={30} color={INK} marks={[{kind: 'arrow', from: [1500, 520], to: [1000, 560], bend: 0.25}]} markAt={here + 24} />
			<Readouts x={1500} y={640} w={320} size={52} at={faces} rows={[{label: 'through the loop', value: String(n), color: LIT}]} />
			<HandTag x={1500} y={800} text={f >= zero + 50 ? '0 through' : '6 through'} at={faces + 30} out={same} size={32} color={LIT} />
			{['more', 'less', 'the same'].map((c, i) => <Chip key={c} x={96} y={260 + i * 80} at={pred + i * 6} size={32} w={240}>{c}{i === 1 && f >= zero ? ' ✓' : ''}</Chip>)}
			<HandTag x={96} y={560} text="same B, same loop" at={same + 10} size={34} color={INK} />
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={why} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. a loop in the rain ----------
const CAM2: FluxCam = {cx: 760, cy: 560, k: 1.15, yaw: -70, pitch: 22};
export const S02: React.FC = () => {
	const id = 'rain';
	const f = useCurrentFrame();
	const steady = cue(id, 'steady rain'), flat = cue(id, 'Hold it flat'), tilt = cue(id, 'Tilt it'), edge = cue(id, 'Turn it on its edge'), field = cue(id, 'Magnetic field passes through'), faces = cap(id, cue(id, "how much of the loop's area faces"));
	const phi = kf(f, mono([[flat - 4, 60], [flat + 30, 0], [tilt, 0], [tilt + 36, 60], [edge, 60], [edge + 36, 90], [field, 90], [field + 50, 60]]));
	const rot = kf(f, [[field, 44.2], [field + 50, 0]]);
	const rain = rot > 22;
	const n = throughCount(A0, phi);
	const drops = fieldGrid(A0).map(([y0, z0], i) => [0, 1, 2].map(k => { const x = -4 * A0 + (((f * 9 + k * 260 + i * 37) % (8 * A0)) + 8 * A0) % (8 * A0); const p = fproj(CAM2, [x, y0, z0]), q = fproj(CAM2, [x + 30, y0, z0]); return <line key={`${i}-${k}`} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke="#3d6d96" strokeWidth={5} strokeLinecap="round" />; }));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v09-rain"><rect x={0} y={150} width={1920} height={800} /></clipPath></defs>
				<g clipPath="url(#v09-rain)"><g transform={`rotate(${rot} ${CAM2.cx} ${CAM2.cy})`}>
					<LoopInField cam={CAM2} a={A0} phi={phi} L={4} lit={1} lineColor={rain ? RAIN : FIELD1} litColor={rain ? '#3d6d96' : LIT} normalColor={NAVY.stroke} fieldOpacity={prog(f, steady - 10, 14)} />
					{rain ? <g opacity={prog(f, steady, 14) * (1 - prog(f, field, 20))}>{drops}</g> : null}
				</g></g>
				<Ring cx={CAM2.cx} cy={CAM2.cy} rx={200} ry={230} at={faces} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={1240} y={240} at={steady} out={field} color="#3d6d96" size={36}>rain, falling straight down</Lbl>
			<Lbl x={1150} y={870} at={field + 30} color={GREY.ink} size={40}>B</Lbl>
			<Readouts x={1340} y={360} w={460} size={52} at={flat} rows={[{label: rain ? 'drops through' : 'lines through', value: String(n), color: LIT}]} />
			<HandTag x={1340} y={560} text="flat: most" at={flat + 30} size={32} color="#3d6d96" />
			<HandTag x={1340} y={620} text="tilted: less" at={tilt + 30} size={32} color="#3d6d96" />
			<HandTag x={1340} y={680} text="edge: none" at={edge + 30} size={32} color="#3d6d96" />
			<HandTag x={1340} y={760} text="same loop, same rain" at={edge + 60} out={field} size={30} color={INK} />
			<Chip x={1100} y={830} at={faces} size={30} w={720}>what counts: how much of the loop faces the field</Chip>
		</>
	);
};

// ---------- 3. magnetic flux ----------
const CAM3: FluxCam = {cx: 620, cy: 560, k: 1.05, yaw: -70, pitch: 22};
export const S03: React.FC = () => {
	const id = 'flux';
	const f = useCurrentFrame();
	const name = cue(id, 'magnetic flux'), straight = cue(id, 'When the field goes straight through'), times = cue(id, 'field strength times the area'), phiBA = cue(id, 'Phi equals B'), webers = cue(id, 'Flux is measured in webers'), metre = cap(id, cue(id, 'one square metre'));
	const phi = kf(f, [[0, 60], [straight + 20, 0]]);
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - times) / 30)));
	const c = fproj(CAM3, [0, 0, 0]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LoopInField clip={[0, 150, 1920, 790]} cam={CAM3} a={A0} phi={phi} L={3.6} lit={1} lineColor={FIELD1} litColor={LIT} normalColor={NAVY.stroke} />
				<Ring cx={c[0] + 120} cy={c[1] - 40} rx={190} ry={170} at={straight + 40} color={LIT} />
			</FrameSvg>
			<Lbl x={c[0] + 400} y={880} color={GREY.ink} size={40 + 8 * pulse}>B (T)</Lbl>
			<Lbl x={c[0] - 40} y={c[1] + 230} at={times - 10} color={NAVY.ink} size={36 + 8 * pulse} anchor="middle">A (m²)</Lbl>
			<HandTag x={c[0] - 360} y={c[1] - 230} text="straight through" at={straight + 44} size={32} color={LIT} />
			<Chip x={1120} y={200} at={name} size={32} w={700}>magnetic flux Φ: how much magnetic field passes through an area</Chip>
			<Row at={straight} size={34} style={{position: 'absolute', left: 1120, top: 360}}>B at right angles to the surface</Row>
			<Row at={phiBA} size={64} style={{position: 'absolute', left: 1120, top: 440}}><AnswerBox at={phiBA + 12}>Φ = BA</AnswerBox></Row>
			<Row at={webers} size={44} style={{position: 'absolute', left: 1120, top: 580}}>unit: weber (Wb)</Row>
			<Chip x={1120} y={670} at={metre} size={36} w={600}>1 Wb = 1 T m²</Chip>
		</>
	);
};

// ---------- 4. the normal and the part that goes through ----------
const CAM4: FluxCam = {cx: 520, cy: 600, k: 1.25, yaw: -70, pitch: 22};
export const S04: React.FC = () => {
	const id = 'normal';
	const f = useCurrentFrame();
	const tilted = cue(id, 'To describe a tilted loop'), normal = cue(id, 'we use its normal'), surface = cue(id, 'at right angles to its surface'), theta = cue(id, 'Theta is the angle between'), split = cue(id, 'split the field into two parts'), goes = cue(id, 'The part along the normal goes'), skims = cue(id, 'just skims across it'), cos = cue(id, 'Cos is close'), flux = cue(id, 'and the flux is B A cos'), seen = cue(id, 'also see it written'), par = cap(id, cue(id, 'parallel to the normal'));
	const th = kf(f, [[tilted, 0], [tilted + 40, 60]]);
	const c = cosd(th), s = Math.sin(rad(th));
	const Bm = 2.3 * A0;
	const O = fproj(CAM4, [0, 0, 0]);
	const nTip = fproj(CAM4, [1.3 * A0 * c, 0, 1.3 * A0 * s]);
	const sp = prog(f, split, 16);
	const slide = prog(f, skims, 50);
	const tip = (v: [number, number, number]) => fproj(CAM4, v);
	const bn = tip([Bm * c * c, 0, Bm * c * s]);
	const off = 1.4 * A0 * slide;
	const t0 = tip([off * s, 0, -off * c]), t1 = tip([off * s + Bm * s * s, 0, -off * c - Bm * s * c]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LoopInField clip={[0, 150, 1920, 790]} cam={CAM4} a={A0} phi={th} L={3.4} lit={0.35} normal={prog(f, normal, 16)} arc={prog(f, theta, 14)} lineColor={FIELD1} litColor={LIT} normalColor={NAVY.stroke} fieldOpacity={1 - 0.35 * sp} />
				{f >= surface && f < split ? <polyline points={`${O[0] + 26},${O[1] - 6} ${O[0] + 26},${O[1] + 20} ${O[0] + 2},${O[1] + 26}`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, surface, 10)} /> : null}
				{sp > 0 ? <g opacity={sp}>
					<Arrow2 from={O} to={tip([Bm, 0, 0])} color={FIELD1} width={8} head={26} />
					<Arrow2 from={O} to={bn} color={LIT} width={9} head={28} />
					<Arrow2 from={t0} to={t1} color={GREY.ink} width={8} head={26} dash="12 8" />
				</g> : null}
				<Ring cx={(O[0] + bn[0]) / 2} cy={(O[1] + bn[1]) / 2} rx={90} ry={60} at={goes + 10} color={LIT} />
			</FrameSvg>
			<Lbl x={tip([Bm, 0, 0])[0] + 14} y={tip([Bm, 0, 0])[1] + 30} at={split} color={GREY.ink} size={32}>B</Lbl>
			<Lbl x={nTip[0] - 20} y={nTip[1] + 46} at={normal + 10} color={NAVY.ink} size={32} anchor="end">normal</Lbl>
			<Lbl x={O[0] + 74} y={O[1] + 50} at={theta} color={INK} size={32}>θ</Lbl>
			<Lbl x={bn[0] - 20} y={bn[1] - 34} at={goes} color={LIT} size={30} anchor="end">B cos θ (through)</Lbl>
			<Lbl x={t1[0] + 24} y={t1[1] + 10} at={split + 10} color={GREY.ink} size={30}>B sin θ (along the surface)</Lbl>
			<HandTag x={140} y={860} text="skims across" at={skims + 10} size={32} color={GREY.ink} />
			<HandTag x={140} y={930} text="θ: from the normal" at={theta + 16} size={30} color={NAVY.ink} />
			<Chip x={1060} y={200} at={cos} size={30} w={760}>Cos is close: next to θ, along the normal → B cos θ</Chip>
			<div style={{position: 'absolute', left: 1060, top: 320, display: 'flex', flexDirection: 'column', gap: 12, width: 780}}>
				<Row at={flux} ageAt={seen} size={44} oldSize={36}>Φ = (B cos θ) × A = BA cos θ</Row>
				<Row at={seen} size={60}><AnswerBox at={seen + 12}>Φ = B<Sub>∥</Sub>A = BA cos θ</AnswerBox></Row>
				<Row at={par} size={32}>B<Sub>∥</Sub>: the part of B along the normal</Row>
			</div>
		</>
	);
};

// ---------- 5. turning the loop ----------
const CAM5: FluxCam = {cx: 430, cy: 470, k: 0.82, yaw: -70, pitch: 22};
const GR = {ox: 960, oy: 520, w: 800, h: 250};
const gp = (deg: number): [number, number] => [GR.ox + (deg / 180) * GR.w, GR.oy - cosd(deg) * GR.h];
export const S05: React.FC = () => {
	const id = 'turning';
	const f = useCurrentFrame();
	const watch = cue(id, 'Now watch the flux'), facing = cue(id, 'Facing the field square on'), sixty = cue(id, 'At sixty degrees'), halves = cue(id, 'so the flux halves'), edge = cue(id, 'Edge on, theta is ninety'), zero = cue(id, 'and the flux is zero'), keep = cue(id, 'Keep turning'), neg = cue(id, 'we call the flux negative'), round = cue(id, 'Turned right round'), why = cue(id, "That's why orientation matters"), same = cap(id, cue(id, 'stay exactly the same'));
	const th = kf(f, mono([[sixty, 0], [sixty + 40, 60], [edge, 60], [edge + 40, 90], [keep, 90], [keep + 40, 135], [round - 4, 135], [round + 30, 180], [why, 180], [why + 70, 0]]));
	const Phi = LIVE.phi(th);
	const n = throughCount(A0, th);
	const curve = Array.from({length: 91}, (_, i) => gp(i * 2).join(',')).join(' ');
	const show = prog(f, facing, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LoopInField clip={[0, 150, 1920, 790]} cam={CAM5} a={A0} phi={th} L={3.2} lit={1} normal={1} arc={1} lineColor={FIELD1} litColor={LIT} normalColor={NAVY.stroke} />
				<g opacity={prog(f, watch, 14)}>
					<line x1={GR.ox} y1={GR.oy} x2={GR.ox + GR.w + 20} y2={GR.oy} stroke={INK} strokeWidth={3} />
					<line x1={GR.ox} y1={GR.oy + GR.h + 20} x2={GR.ox} y2={GR.oy - GR.h - 20} stroke={INK} strokeWidth={3} />
					{[60, 90, 180].map(d => <line key={d} x1={gp(d)[0]} y1={GR.oy - 8} x2={gp(d)[0]} y2={GR.oy + 8} stroke={INK} strokeWidth={3} />)}
					<polyline points={curve} fill="none" stroke={FIELD1} strokeWidth={4} opacity={show} />
					<circle cx={gp(th)[0]} cy={gp(th)[1]} r={14} fill={LIT} stroke="#fff" strokeWidth={3} opacity={show} />
				</g>
				<Ring cx={gp(60)[0]} cy={gp(60)[1]} rx={40} ry={34} at={halves} color={LIT} />
				<Ring cx={gp(90)[0]} cy={gp(90)[1]} rx={40} ry={34} at={zero} color={LIT} />
			</FrameSvg>
			<Lbl x={GR.ox - 14} y={GR.oy - GR.h + 10} at={watch} color={INK} size={30} anchor="end">1</Lbl>
			<Lbl x={GR.ox - 14} y={GR.oy + GR.h + 10} at={watch} color={INK} size={30} anchor="end">−1</Lbl>
			<Lbl x={GR.ox + 14} y={GR.oy - GR.h - 30} at={watch} color={LIT} size={30}>Φ / BA</Lbl>
			<Lbl x={gp(60)[0]} y={GR.oy + 44} at={watch} color={INK} size={28} anchor="middle">60°</Lbl>
			<Lbl x={gp(90)[0] + 10} y={GR.oy + 44} at={watch} color={INK} size={28} anchor="middle">90°</Lbl>
			<Lbl x={gp(180)[0]} y={GR.oy - 30} at={watch} color={INK} size={28} anchor="middle">180°</Lbl>
			<Lbl x={GR.ox + GR.w + 30} y={GR.oy + 10} at={watch} color={INK} size={30}>θ</Lbl>
			<HandTag x={gp(60)[0] + 40} y={gp(60)[1] - 50} text="halves" at={halves + 10} size={32} color={LIT} />
			<HandTag x={gp(90)[0] + 30} y={GR.oy - 60} text="zero" at={zero + 10} size={32} color={LIT} />
			<HandTag x={gp(135)[0]} y={GR.oy + GR.h - 10} text="other side: minus" at={neg + 10} size={32} color={INK_SOFT} />
			<Lbl x={gp(180)[0] - 20} y={gp(180)[1] + 50} at={round + 20} color={LIT} size={34} anchor="end">Φ = −BA</Lbl>
			<Readouts x={96} y={740} w={760} size={44} at={facing} rows={[
				{label: 'θ', value: `${fx(th)}°`, color: INK},
				{label: 'cos θ', value: fx(cosd(th), 2), color: INK},
			]} />
			<Readouts x={880} y={840} w={520} size={44} at={facing} rows={[{label: 'Φ', value: Math.abs(Phi) < 5e-5 ? '0' : fx(Phi, 3), unit: 'Wb', color: LIT}]} />
			<Lbl x={1460} y={250} at={watch} color={NAVY.ink} size={30}>B = 0.50 T, A = 0.040 m²</Lbl>
			<Readouts x={1440} y={840} w={380} size={44} at={facing} rows={[{label: th > 90 ? 'through (back)' : 'lines through', value: String(n), color: LIT}]} />
			{['B fixed', 'A fixed', 'θ changes'].map((t, i) => <Chip key={t} x={96 + i * 260} y={170} at={why + 20 + i * 8} size={30} w={240}>{t}</Chip>)}
			<HandTag x={900} y={190} text="same B, same A: only θ" at={same} size={30} color={INK} />
		</>
	);
};
