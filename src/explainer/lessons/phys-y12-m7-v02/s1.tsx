// Scenes 1 to 5: the hook (last time's frame; v = d / t; ten nanoseconds; the bar stretching and the timer zooming;
// the two painted prediction cards), a moon that runs late (Sun, Earth and Jupiter plates, Io in Jupiter's shadow, a
// live "runs late" readout from the Earth to Jupiter distance), a spinning wheel (the painted toothed wheel with a
// returning pulse passing a gap or meeting a tooth, the wheel-speed slider and readouts, a magnified inset of the plate,
// the working), a spinning mirror (ray box, two painted mirrors, the returned beam turned through twice the mirror's
// small turn) and timing a pulse today (laser, two sensors, oscilloscope, illustrative graph).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Scope} from '../../physics/electromagnetism/motor';
import {EMWave} from '../../physics/light/em';
import {LightPath} from '../../physics/light/spectrum';
import {Disc, EARTH, JUPITER, LASER, LPlate, RAYBOX, SENSOR, SUN, WHEEL, ANCHOR, placeByAnchor} from '../../physics/light/plates';
import {HB} from '../phys-y12-m7-v01/s3';
import {M7V01FinalFrame} from '../phys-y12-m7-v01/s3';
import {dur as v01dur} from '../phys-y12-m7-v01/common';
import {C3, FC_V, FZ_C, FZ_D, FZ_F, FZ_F0, FZ_N, FZ_ROUND, FZ_T, FZ_WRONG, HEAD, HEAD_SIZE, IO_H, R_D, R_T, R_T22, R_V, R_V22, R_WRONG, TOF_D, TOF_DT, TOF_PATH, TOF_PTS, TOF_V, TOF_WRONG, cap, cue, gapToTooth, holdIf} from './common';
import {BLUE, CardRect, DataGraph, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, MirrorAt, NAVY, ORANGE, ROSE, Strip, TimerBox, WheelAt, fmtNs, fmtUs, fx, reflect, rimR, rot, sci, unit} from './parts';

type Pt = [number, number];
const V01_END = v01dur('handoff') - 1;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const time = cue(id, 'distance over time'), ns = cue(id, 'ten nanoseconds'), enorm = cue(id, 'enormous'), tiny = cue(id, 'something tiny'), pred = cue(id, 'Make your prediction'), planets = cap(id, cue(id, 'It was the planets'));
	const h = holdIf(id);
	if (f < 1) return <M7V01FinalFrame />;
	const W = HB.wave, Bb = HB.bar;
	const board = 1 - prog(f, pred, 20);
	const stretch = prog(f, enorm, 30);
	const zoom = 1 + 0.35 * prog(f, tiny, 16);
	const pulse = f >= ns && f < ns + 40 ? Math.sin((Math.PI * (f - ns)) / 40) : 0;
	const T = HB.timer;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: board}}>
				<FrameSvg>
					<EMWave {...W} phase={(V01_END + f - 1) * 0.06} eColor={BLUE.stroke} bColor={FLUX} axisColor={NAVY.stroke} arrows={0.8} tilt={1} />
					<line x1={Bb.x0} y1={Bb.y} x2={Bb.x1 + 400 * stretch} y2={Bb.y} stroke={INK} strokeWidth={5} />
					<line x1={Bb.x0} y1={Bb.y - 18} x2={Bb.x0} y2={Bb.y + 18} stroke={INK} strokeWidth={5} />
					<line x1={Bb.x1 + 400 * stretch} y1={Bb.y - 18} x2={Bb.x1 + 400 * stretch} y2={Bb.y + 18} stroke={INK} strokeWidth={5} opacity={1 - stretch} />
					<g transform={`translate(${HB.room.x0 + 160} ${Bb.y + 75}) scale(${1 + 0.12 * pulse}) translate(${-(HB.room.x0 + 160)} ${-(Bb.y + 75)})`}>
						<path d={`M${HB.room.x0},${Bb.y - 50} v-14 h${HB.room.x1 - HB.room.x0} v14`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} />
						<TimerBox x={HB.room.x0 + 30} y={Bb.y + 40} w={260} h={70} text="≈ 10 ns" />
					</g>
					<g transform={`translate(${T.x + T.w / 2} ${T.y + T.h / 2}) scale(${zoom}) translate(${-(T.x + T.w / 2)} ${-(T.y + T.h / 2)})`}><TimerBox x={T.x} y={T.y} w={T.w} h={T.h} text="t = ?" /></g>
				</FrameSvg>
				<Lbl x={W.x0 + 40} y={W.y - W.amp - 50} at={-60} color={INK} size={32}>E ↔ B</Lbl>
				<Lbl x={W.x1 + 70} y={W.y + 70} at={-60} color={NAVY.ink} size={26}>direction of travel</Lbl>
				<Chip x={HB.cChip.x} y={HB.cChip.y} at={-60} out={ns} size={30} w={680} color={ORANGE.ink}>{`c = 1/√(μ₀ε₀) ≈ ${sci(C3, 2)} m s⁻¹ (predicted)`}</Chip>
				<Lbl x={(HB.room.x0 + HB.room.x1) / 2} y={Bb.y - 80} at={-60} color={ORANGE.ink} size={30} anchor="middle">3 m</Lbl>
				<Lbl x={1000} y={Bb.y + 60} at={-60} color={INK} size={32} anchor="middle">distance d = ?</Lbl>
				<Lbl x={T.x + T.w / 2} y={T.y - 20 - 20 * (zoom - 1) * 2} at={-60} color={INK} size={28} anchor="middle">time</Lbl>
				<Chip x={HB.sChip.x} y={HB.sChip.y} at={-60} out={time} size={34} w={420} color={INK}>speed = d / t</Chip>
				<CrossedChip x={1150} y={180} at={ns + 10} crossAt={ns + 26} size={30}>stopwatch (about 0.1 s at best)</CrossedChip>
				<HandTag x={1160} y={300} text="far too fast to time by hand" at={ns + 40} size={34} color={NAVY.ink} />
			</div>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how can a time-and-distance measurement reveal the speed of light?</Chip>
			<Strip x={96} y={180} at={time} size={52}>v = d / t</Strip>
			<FrameSvg>
				<g opacity={prog(f, pred, 16)}>
					<CardRect x={200} y={300} w={640} h={480} />
					<CardRect x={1080} y={300} w={640} h={480} />
					<Disc spec={JUPITER} cx={520} cy={500} d={280} />
					<Disc spec={WHEEL} cx={1400} cy={500} d={280} spin={f * 0.6} />
				</g>
				{f >= planets ? <ellipse cx={520} cy={540} rx={340} ry={270} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, planets + 10, 12)} /> : null}
				{f >= planets ? <Mark x={790} y={720} at={planets} kind="tick" color={INK} size={40} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={960} y={850} r={46} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Lbl x={520} y={730} at={pred} color={INK} size={40} anchor="middle">planets</Lbl>
			<Lbl x={1400} y={730} at={pred + 6} color={INK} size={40} anchor="middle">on the ground</Lbl>
			<HandTag x={520} y={860} text="1676 versus 1849" at={planets + 16} size={38} color={NAVY.ink} anchor="middle" />
		</>
	);
};

// ---------- 2. a moon that runs late ----------
const S = {x: 440, y: 520}, RO = 250, J = {x: 1040, y: 440};
const thJ = Math.atan2(J.y - S.y, J.x - S.x);
const earthAt = (a: number): Pt => [S.x + RO * Math.cos(thJ - (a * Math.PI) / 180), S.y + RO * Math.sin(thJ - (a * Math.PI) / 180)];
const dJ = (p: Pt) => Math.hypot(J.x - p[0], J.y - p[1]);
const D_NEAR = dJ(earthAt(0)), D_FAR = dJ(earthAt(170));
export const S02: React.FC = () => {
	const id = 'romer';
	const f = useCurrentFrame();
	const shadow = cue(id, "Io slips into Jupiter's shadow"), clock = cue(id, 'as regular as a clock'), later = cue(id, 'later and later'), closer = cue(id, 'earlier as it came closer'), further = cue(id, 'further to travel'), metres = cue(id, 'eleven metres'), thou = cue(id, 'about a thousand seconds'), sec = cue(id, 'eight metres per second'), mins = cue(id, 'twenty-two minutes'), finite = cap(id, cue(id, 'speed is finite'));
	const a = kf(f, [[later, 0], [later + 150, 170], [closer, 170], [closer + 110, 0], [further, 0], [further + 90, 170]]);
	const E = earthAt(a);
	const io = f * 0.05;
	const ioP: Pt = [J.x + 130 * Math.cos(io), J.y - 130 * Math.sin(io)];
	const inShadow = ioP[0] > J.x && Math.abs(ioP[1] - J.y) < 80;
	const late = ((dJ(E) - D_NEAR) / (D_FAR - D_NEAR)) * R_T;
	const near = earthAt(0), far = earthAt(170);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={S.x} cy={S.y} r={RO} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<Disc spec={SUN} cx={S.x} cy={S.y} d={130} />
				{f >= shadow ? <path d={`M${J.x},${J.y - 84} L${J.x + 200},${J.y - 60} L${J.x + 200},${J.y + 60} L${J.x},${J.y + 84} Z`} fill="#5b5650" opacity={0.28 * prog(f, shadow, 12)} /> : null}
				<circle cx={J.x} cy={J.y} r={130} fill="none" stroke={INK} strokeWidth={2} strokeDasharray="5 7" opacity={0.6} />
				<Disc spec={JUPITER} cx={J.x} cy={J.y} d={170} />
				<circle cx={ioP[0]} cy={ioP[1]} r={10} fill={inShadow ? '#8a8378' : '#e8d9a8'} stroke={INK} strokeWidth={2} opacity={inShadow ? 0.35 : 1} />
				{f >= further ? <g>
					<LightPath pts={[ioP, near]} color={LIGHT} width={5} opacity={prog(f, further, 12) * 0.9} dash="12 8" />
					<LightPath pts={[ioP, far]} color={LIGHT} width={7} draw={prog(f, further + 90, 30)} />
				</g> : null}
				<Disc spec={EARTH} cx={E[0]} cy={E[1]} d={76} />
				{f >= metres ? <g opacity={prog(f, metres, 12)}>
					<line x1={far[0]} y1={far[1] + 60} x2={near[0]} y2={near[1] + 60} stroke={ORANGE.stroke} strokeWidth={4} />
					<line x1={far[0]} y1={far[1] + 46} x2={far[0]} y2={far[1] + 74} stroke={ORANGE.stroke} strokeWidth={4} />
					<line x1={near[0]} y1={near[1] + 46} x2={near[0]} y2={near[1] + 74} stroke={ORANGE.stroke} strokeWidth={4} />
				</g> : null}
				{f >= finite ? <ellipse cx={1500} cy={655} rx={300} ry={44} fill="none" stroke={ORANGE.stroke} strokeWidth={0} /> : null}
			</FrameSvg>
			<Lbl x={S.x} y={S.y - 90} at={0} color={INK} size={26} anchor="middle">Sun</Lbl>
			<Lbl x={J.x} y={J.y + 175} at={0} color={INK} size={26} anchor="middle">Jupiter and its moon Io</Lbl>
			<Lbl x={E[0]} y={E[1] - 50} at={0} color={BLUE.ink} size={26} anchor="middle">Earth</Lbl>
			<Lbl x={96} y={930} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<Chip x={1260} y={190} at={6} size={30} w={560} color={NAVY.ink} border={NAVY.stroke}>{`Io's eclipses: every ${IO_H} h`}</Chip>
			<Lbl x={1280} y={262} at={clock} color={GREY.ink} size={26}>(regular as a clock)</Lbl>
			<Lbl x={1260} y={310} at={later} color={NAVY.ink} size={30}>observed: late</Lbl>
			<HandTag x={1560} y={312} text="late" at={later + 20} size={36} color={NAVY.ink} />
			<Lbl x={1260} y={360} at={closer} color={NAVY.ink} size={30}>observed: early</Lbl>
			<HandTag x={1560} y={362} text="early" at={closer + 20} size={36} color={NAVY.ink} />
			<Lbl x={1260} y={430} at={0} color={GREY.ink} size={28}>eclipse runs late by</Lbl>
			<Lbl x={1260} y={490} at={0} color={NAVY.ink} size={52}>{`≈ ${fx(late, 0)} s`}</Lbl>
			<Lbl x={(near[0] + far[0]) / 2} y={near[1] + 110} at={metres} color={ORANGE.ink} size={28} anchor="middle">{`extra distance = orbit diameter ≈ ${sci(R_D, 1)} m`}</Lbl>
			<HandTag x={(near[0] + far[0]) / 2} y={near[1] + 160} text="extra trip across the orbit" at={metres + 16} size={32} color={ORANGE.ink} anchor="middle" />
			<Chip x={1260} y={550} at={thou} size={34} w={380} color={NAVY.ink} border={NAVY.stroke}>{`delay ≈ ${R_T} s`}</Chip>
			<CrossedChip x={1260} y={640} at={sec + 30} crossAt={sec + 50} size={26} caption="the extra path is the diameter">{`orbit radius: (${sci(R_D / 2, 1)}) / ${R_T} = ${sci(R_WRONG, 1)}`}</CrossedChip>
			<div style={{position: 'absolute', left: 96, top: 800}}><Row at={sec - 6} size={44}><AnswerBox at={sec}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`v = d / t = (${sci(R_D, 1)}) / ${R_T} = ${sci(R_V, 1)} m s⁻¹`}</span></AnswerBox></Row></div>
			<Chip x={1260} y={780} at={mins} size={28} w={580} color={GREY.ink} border={GREY.stroke}>{`Rømer's delay ≈ ${22} min = ${R_T22} s → ${sci(R_V22, 1)} m s⁻¹`}</Chip>
			<Chip x={1260} y={860} at={finite} size={30} w={580} color={INK}>✓ light takes time to travel: speed finite</Chip>
		</>
	);
};

// ---------- 3. a spinning wheel ----------
const WH = {cx: 280, cy: 470, d: 280};
const BEAM_Y = WH.cy - rimR(WH.d) + 10;
const MX = 1180;
export const S03: React.FC = () => {
	const id = 'fizeau';
	const f = useCurrentFrame();
	const pass = cue(id, 'Light passes through a gap'), gap = cue(id, 'returns through the same gap'), it = cue(id, 'a tooth blocks it'), half = cue(id, 'half of one tooth spacing'), sec = cue(id, 'turns per second'), t1 = cue(id, 'five point five one times ten to the minus five seconds'), t2 = cap(id, cue(id, 'three point one three times ten to the eight'));
	const turns = kf(f, [[it, FZ_F0], [it + 40, FZ_F]]);
	const blocked = f >= it + 40;
	const deg = 0.8 * f + 0.8 * Math.max(0, Math.min(f - it, 40)) / 2 + 0.8 * Math.max(0, f - it - 40);
	const P = 100;
	const u = f >= pass ? ((f - pass) % P) / P : -1;
	const path: Pt[] = [[60, BEAM_Y], [WH.cx, BEAM_Y], [MX, BEAM_Y], [WH.cx + 20, BEAM_Y + 0.001]];
	const stopU = 0.985;
	const pu = blocked && u > stopU ? stopU : u;
	const flash = blocked && u > stopU - 0.05 ? 1 : 0;
	const ins = {cx: 900, cy: 495, r: 95};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LightPath pts={[[60, BEAM_Y], [MX, BEAM_Y]]} color={LIGHT} width={4} opacity={0.45} />
				<WheelAt cx={WH.cx} cy={WH.cy} d={WH.d} deg={deg} />
				<MirrorAt x={MX + 30} y={BEAM_Y} w={170} n={[-1, 0]} />
				<line x1={MX - 60} y1={BEAM_Y + 110} x2={MX + 120} y2={BEAM_Y + 110} stroke="#8a8378" strokeWidth={4} />
				{u >= 0 ? <LightPath pts={path} color={LIGHT} draw={0} width={6} pulses={[pu]} pulseLen={0.03} /> : null}
				{flash ? <circle cx={WH.cx} cy={BEAM_Y} r={26} fill="none" stroke={ROSE.stroke} strokeWidth={5} /> : null}
				<path d={`M${WH.cx},${BEAM_Y - 60} v-14 h${MX - WH.cx} v14`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} />
				{f >= half ? <g opacity={prog(f, half, 14)}>
					<defs><clipPath id="v02-ins"><circle cx={ins.cx} cy={ins.cy} r={ins.r} /></clipPath></defs>
					<circle cx={ins.cx} cy={ins.cy} r={ins.r} fill={CARD} />
					<g clipPath="url(#v02-ins)"><Disc spec={WHEEL} cx={ins.cx} cy={ins.cy + rimR(WH.d * 6)} d={WH.d * 6} spin={-1} /></g>
					<circle cx={ins.cx} cy={ins.cy} r={ins.r} fill="none" stroke={INK} strokeWidth={4} />
					<line x1={WH.cx + 20} y1={BEAM_Y + 10} x2={ins.cx - ins.r} y2={ins.cy} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<path d={`M${ins.cx - 36},${ins.cy - 30} A${rimR(WH.d * 6)},${rimR(WH.d * 6)} 0 0 1 ${ins.cx + 36},${ins.cy - 30}`} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
					<path d={`M${ins.cx + 36},${ins.cy - 30} l-16,-10 l2,18 Z`} fill={NAVY.stroke} />
				</g> : null}
				<CardRect x={1310} y={170} w={520} h={300} />
				<line x1={1350} y1={270} x2={1790} y2={270} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<circle cx={1350 + 440 * ((turns - 4) / 10)} cy={270} r={16} fill={ROSE.stroke} stroke={CARD} strokeWidth={3} />
			</FrameSvg>
			<Lbl x={(WH.cx + MX) / 2} y={BEAM_Y - 90} at={0} color={ORANGE.ink} size={30} anchor="middle">{`d = ${FZ_D} m (one way)`}</Lbl>
			<HandTag x={640} y={BEAM_Y - 24} text="there and back: 2d" at={sec - 20} size={32} color={ORANGE.ink} anchor="middle" />
			<Lbl x={MX + 30} y={BEAM_Y + 150} at={0} color={INK} size={26} anchor="middle">mirror</Lbl>
			<Lbl x={MX - 160} y={BEAM_Y + 190} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<Lbl x={1340} y={225} at={0} color={GREY.ink} size={26}>wheel speed (live)</Lbl>
			<Lbl x={1340} y={330} at={0} color={ROSE.ink} size={34}>{`f = ${fx(turns, 1)} turns per second`}</Lbl>
			<Lbl x={1340} y={385} at={gap - 20} color={ROSE.ink} size={34}>{`gap → tooth = ${fmtUs(gapToTooth(turns))}`}</Lbl>
			<Lbl x={1340} y={440} at={gap - 20} color={NAVY.ink} size={34}>{`round trip = ${fmtUs(FZ_ROUND)}`}</Lbl>
			<HandTag x={480} y={430} text="gap still open" at={gap + 10} out={it} size={34} color={ROSE.ink} />
			<HandTag x={480} y={430} text="blocked" at={it + 46} size={38} color={ROSE.ink} />
			<Lbl x={ins.cx} y={ins.cy - ins.r - 18} at={half} color={NAVY.ink} size={28} anchor="middle">gap → tooth = ½ of a tooth spacing</Lbl>
			<Strip x={96} y={660} at={pass} size={30}>Find c from Fizeau's wheel.</Strip>
			<Strip x={560} y={650} at={pass + 10} size={40}>c = 2d / t</Strip>
			<div style={{position: 'absolute', left: 1100, top: 560, width: 430, background: NAVY.soft, border: `3px solid ${sec <= f ? INK : NAVY.stroke}`, borderRadius: 14, padding: '6px 18px 10px', opacity: prog(f, pass + 20, 12), fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: NAVY.ink}}>
				<div>{`N = ${FZ_N} teeth`}</div><div style={{color: ROSE.ink}}>{`f = ${FZ_F} turns per second`}</div><div style={{color: ORANGE.ink}}>{`d = ${FZ_D} m`}</div>
			</div>
			<div style={{position: 'absolute', left: 96, top: 760, display: 'flex', flexDirection: 'column', gap: 8, width: 1300}}>
				<Row at={t1} ageAt={t2} size={40} oldSize={32}>{`t = 1 / (2Nf) = 1 / (2 × ${FZ_N} × ${FZ_F}) = ${sci(FZ_T, 2)} s`}</Row>
				<Row at={t2 - 6} size={40}><AnswerBox at={t2}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`c = 2d / t = (2 × ${FZ_D}) / (${sci(FZ_T, 2)}) = ${sci(FZ_C, 2)} m s⁻¹`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1300} y={780} at={t2 + 20} crossAt={t2 + 36} size={26} caption="gap to tooth is half a spacing">{`t = 1 / (Nf): c = ${sci(FZ_WRONG, 2)} m s⁻¹`}</CrossedChip>
		</>
	);
};

// ---------- 4. a spinning mirror ----------
const SRC: Pt = [260, 650], M: Pt = [860, 650], F: Pt = [1560, 290];
const DIN = unit([M[0] - SRC[0], M[1] - SRC[1]]), DOUT = unit([F[0] - M[0], F[1] - M[1]]);
const N0 = unit([DOUT[0] - DIN[0], DOUT[1] - DIN[1]]);
const TURN = 3; // degrees, exaggerated
export const S04: React.FC = () => {
	const id = 'foucault';
	const f = useCurrentFrame();
	const out = cue(id, 'spinning mirror to a fixed mirror'), ang = cue(id, 'small angle'), path = cue(id, 'off its original path'), close = cue(id, 'close to three times ten to the eight'), vid = cap(id, cue(id, 'later video'));
	const P = 110;
	const cyc = f >= out ? ((f - out) % P) / P : 0;
	const turned = f >= ang ? Math.min(1, cyc * 2) : 0;
	const n1 = rot(N0, TURN);
	const ret = reflect([-DOUT[0], -DOUT[1]], n1);
	const tEnd = (SRC[0] + 70 - M[0]) / ret[0];
	const S2: Pt = [M[0] + ret[0] * tEnd, M[1] + ret[1] * tEnd];
	const nNow = rot(N0, TURN * turned);
	const showRet = f >= path;
	const pulsePts: Pt[] = showRet ? [SRC, M, F, M, S2] : [SRC, M, F, M, SRC];
	const raybox = placeByAnchor(RAYBOX, ANCHOR.raySlit[0], ANCHOR.raySlit[1], SRC[0] - 30, SRC[1], 210);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={RAYBOX} p={raybox} />
				<LightPath pts={[SRC, M, F]} color={LIGHT} width={5} draw={f >= out ? prog(f, out, 30) : 0} />
				{showRet ? <LightPath pts={[F, M, S2]} color={LIGHT} width={5} dash="12 8" opacity={prog(f, path, 12)} /> : null}
				{f >= out ? <LightPath pts={pulsePts} color={LIGHT} draw={0} pulses={[cyc]} pulseLen={0.03} width={6} /> : null}
				<circle cx={M[0]} cy={M[1]} r={14} fill={INK} />
				<path d={`M${M[0] - 70},${M[1] + 90} A80,40 0 0 0 ${M[0] + 70},${M[1] + 90}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				<path d={`M${M[0] + 70},${M[1] + 90} l-4,-18 l-14,12 Z`} fill={NAVY.stroke} />
				<MirrorAt x={M[0]} y={M[1]} w={190} n={nNow} />
				<MirrorAt x={F[0]} y={F[1]} w={190} n={[-DOUT[0], -DOUT[1]]} />
				{f >= ang ? <path d={`M${M[0] - 120},${M[1]} A120,120 0 0 1 ${M[0] - 120 * Math.cos(Math.atan2(ret[1], -ret[0]) * 1)},${M[1] + 120 * Math.sin(Math.atan2(ret[1], -ret[0]))}`} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, ang, 12) * (showRet ? 1 : 0)} /> : null}
			</FrameSvg>
			<Lbl x={SRC[0]} y={SRC[1] + 80} at={0} color={INK} size={26} anchor="middle">light source</Lbl>
			<Lbl x={M[0]} y={M[1] + 170} at={0} color={INK} size={26} anchor="middle">spinning mirror</Lbl>
			<Lbl x={F[0]} y={F[1] + 120} at={0} color={INK} size={26} anchor="middle">fixed mirror</Lbl>
			<HandTag x={M[0] - 40} y={M[1] - 160} text="turned while the light was away" at={ang + 10} size={32} color={NAVY.ink} anchor="middle" />
			<Lbl x={S2[0] + 40} y={S2[1] + 60} at={path} color={GREY.ink} size={28}>deflection</Lbl>
			<HandTag x={SRC[0] + 120} y={S2[1] - 70} text="comes back off target" at={path + 16} size={32} color={LIGHT_INK} />
			<Lbl x={96} y={930} at={0} color={GREY.ink} size={26}>angle exaggerated; not to scale</Lbl>
			<Chip x={1140} y={560} at={close} size={30} w={640} color={GREY.ink} border={GREY.stroke}>{`Foucault (1862): ≈ ${sci(FC_V, 2)} m s⁻¹`}</Chip>
			<Chip x={1140} y={650} at={vid} size={28} w={640} color={GREY.ink} border={GREY.stroke}>water tube: a later video</Chip>
		</>
	);
};

// ---------- 5. timing a pulse today ----------
const LZ = placeByAnchor(LASER, ANCHOR.laserOut[0], ANCHOR.laserOut[1], 420, 300, 330);
const OUT_Y = 300, RET_Y = 420, MIR_X = 1690, SPLIT_X = 540, SB: Pt = [800, RET_Y];
/** Sensor B is flipped (window facing right) with its window at SB. */
const sbPlace = (() => { const p = placeByAnchor(SENSOR, ANCHOR.sensorWin[0], ANCHOR.sensorWin[1], SB[0], SB[1], 160); const flippedX = 2 * (p.x + p.w / 2) - SB[0]; return {...p, x: p.x + (SB[0] - flippedX)}; })();
const saPlace = placeByAnchor(SENSOR, ANCHOR.sensorWin[0], ANCHOR.sensorWin[1], SPLIT_X, 470, 160);
const SCOPE_P = {x: 980, y: 560, w: 440};
export const S05: React.FC = () => {
	const id = 'time-of-flight';
	const f = useCurrentFrame();
	const sens = cue(id, 'two fast light sensors'), back = cue(id, 'fifteen metres away and back'), apart = cue(id, 'nanoseconds apart'), say = cue(id, 'a hundred and one nanoseconds'), res = cue(id, 'two point nine seven times ten to the eight'), lt = cap(id, cue(id, 'is the speed of light'));
	const P = 90;
	const u = f >= back ? ((f - back) % P) / P : -1;
	const trace = (x: number) => 0.9 * Math.exp(-(((x - 0.45) / 0.05) ** 2)) + 0.9 * Math.exp(-(((x - 1.45) / 0.05) ** 2));
	const grow = f >= apart ? prog(f, apart - 10, 30) : 0;
	const sp = {x: SCOPE_P.x + 0.06 * SCOPE_P.w, y: SCOPE_P.y + 0.11 * SCOPE_P.w, w: 0.59 * SCOPE_P.w};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LASER} p={LZ} />
				<LPlate spec={SENSOR} p={sbPlace} flip />
				<g transform={`rotate(90 ${SPLIT_X} 470)`}><LPlate spec={SENSOR} p={saPlace} /></g>
				<LightPath pts={[[420, OUT_Y], [MIR_X, (OUT_Y + RET_Y) / 2], SB]} color={LIGHT} width={4} opacity={0.5} />
				<line x1={SPLIT_X - 22} y1={OUT_Y + 22} x2={SPLIT_X + 22} y2={OUT_Y - 22} stroke="#7fb3c9" strokeWidth={6} />
				<line x1={SPLIT_X} y1={OUT_Y} x2={SPLIT_X} y2={460} stroke={LIGHT} strokeWidth={3} strokeDasharray="8 7" />
				{u >= 0 ? <LightPath pts={[[420, OUT_Y], [MIR_X, (OUT_Y + RET_Y) / 2], SB]} color={LIGHT} draw={0} pulses={[u]} pulseLen={0.04} width={6} /> : null}
				<MirrorAt x={MIR_X + 26} y={(OUT_Y + RET_Y) / 2} w={170} n={[-1, 0]} />
				{f >= sens ? <g opacity={prog(f, sens, 14)} fill="none" stroke={INK} strokeWidth={4}>
					<path d={`M${SPLIT_X - 60},520 C${SPLIT_X - 60},760 ${SCOPE_P.x + 380},820 ${SCOPE_P.x + 0.86 * SCOPE_P.w},${SCOPE_P.y + 0.65 * SCOPE_P.w * 0.57}`} />
					<path d={`M${SB[0] - 80},${RET_Y + 60} C${SB[0] - 60},520 ${SCOPE_P.x + 430},520 ${SCOPE_P.x + 0.93 * SCOPE_P.w},${SCOPE_P.y + 0.65 * SCOPE_P.w * 0.57}`} />
				</g> : null}
				<Scope p={SCOPE_P} fn={f >= apart - 10 ? trace : undefined} grow={grow} amp={0.9} />
				{f >= apart ? <g opacity={prog(f, apart + 20, 12)}>
					<path d={`M${sp.x + sp.w * 0.21},${sp.y - 22} v-12 h${sp.w * 0.5} v12`} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				</g> : null}
				{f >= apart ? <ellipse cx={sp.x + sp.w * 0.46} cy={sp.y + 70} rx={sp.w * 0.42} ry={80} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, apart + 30, 12)} /> : null}
				<path d={`M${SB[0]},${OUT_Y - 70} v-14 h${MIR_X - SB[0]} v14`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} />
				{f >= lt ? <g opacity={prog(f, lt, 14)}><DataGraph x={1490} y={560} w={320} h={210} pts={TOF_PTS} xMax={110} yMax={33} xLabel="delay (ns)" yLabel="extra path (m)" grow={prog(f, lt, 30)} /></g> : null}
			</FrameSvg>
			<Lbl x={(SB[0] + MIR_X) / 2} y={OUT_Y - 100} at={0} color={ORANGE.ink} size={30} anchor="middle">{`${fx(TOF_D, 1)} m (not to scale)`}</Lbl>
			<Lbl x={300} y={430} at={0} color={INK} size={26} anchor="middle">pulsed laser</Lbl>
			<Lbl x={SPLIT_X - 130} y={700} at={sens} color={INK} size={26} anchor="middle">sensor 1: pulse leaves</Lbl>
			<Lbl x={SB[0]} y={RET_Y + 140} at={sens} color={INK} size={26} anchor="middle">sensor 2: after the trip</Lbl>
			<Lbl x={MIR_X} y={RET_Y + 120} at={0} color={INK} size={26} anchor="middle">mirror</Lbl>
			<Lbl x={1060} y={250} at={back} color={ORANGE.ink} size={30}>{`extra path = 2 × ${fx(TOF_D, 1)} = ${fx(TOF_PATH, 1)} m`}</Lbl>
			<Lbl x={sp.x + sp.w * 0.46} y={sp.y - 44} at={apart + 20} color={NAVY.ink} size={30} anchor="middle">Δt</Lbl>
			<HandTag x={SCOPE_P.x + 40} y={SCOPE_P.y + 300} text={fmtNs(TOF_DT)} at={say + 10} size={34} color={NAVY.ink} />
			<Lbl x={SCOPE_P.x + 190} y={SCOPE_P.y + 302} at={say} color={GREY.ink} size={26}>{`illustrative reading: Δt = ${fmtNs(TOF_DT)}`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 800}}><Row at={res - 6} size={48}><AnswerBox at={res}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`v = ${fx(TOF_PATH, 1)} / (101 × 10⁻⁹) = ${sci(TOF_V, 2)} m s⁻¹`}</span></AnswerBox></Row></div>
			<CrossedChip x={1100} y={850} at={res + 30} crossAt={res + 46} size={26} caption="ns → × 10⁻⁹ s">{`${fx(TOF_PATH, 1)} / 101 = ${fx(TOF_WRONG, 3)} m s⁻¹`}</CrossedChip>
			<HandTag x={1500} y={510} text="gradient = speed" at={lt + 16} size={32} color={NAVY.ink} />
		</>
	);
};
