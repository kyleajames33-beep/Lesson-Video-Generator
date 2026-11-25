// Scenes 1 to 5: the hook (the copper pendulum stops within a few swings in the field and swings on without it; a
// still magnet beside copper: no pull; prediction), eddy currents (a close-up of the plate straddling both edges of
// the field: loops everywhere, the entry and exit swirls), the force pushes back (the in-field segments, both forces
// backwards, Lenz), where the energy goes (a swinging pendulum beside split energy bars whose total steps down) and
// the magnet in a copper tube (cut-away window, eddy rings below and above, forces balancing the weight, the plastic
// tube's free fall).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Boss, Stand} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {CutTube, Pendulum, UprightMagnet, magnetHalfH, pendGeom, tubeGeom} from '../../physics/electromagnetism/eddy';
import {HandoffBoard, M6V19FinalFrame, RIG, V19_END} from '../phys-y12-m6-v19/s3';
import {HEAD, HEAD_SIZE, S_TUBE, G, T_FALL, cap, cue, dur, holdIf} from './common';
import {AMBER, CU, CloseUp, FLUX, GREY, HEAT, Lbl, MoveArrow, NAVY, ORANGE, ROSE, Rig, VBar, fx, swingAt, swirlAt} from './parts';

const R = RIG.region;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const swings = cue(id, 'within a few swings'), away = cue(id, 'Take the magnet away'), on = cue(id, 'swings on and on'), still = cue(id, 'Hold a magnet still'), all = cue(id, 'no pull at all'), pred = cue(id, 'Make your prediction'), curr = cap(id, cue(id, "It's induced currents"));
	const h = holdIf(id);
	if (f < 1) return <M6V19FinalFrame />;
	const fade = prog(f, 1, 22);
	const s1 = swingAt(f, 24, -RIG.pose, 54, 0.55);
	const thAway = swingAt(away, 24, -RIG.pose, 54, 0.55).theta;
	const s2 = swingAt(f, away + 56, -RIG.pose, 54, 0.985);
	const theta = f < 24 ? RIG.pose : f < away ? s1.theta : f < away + 56 ? kf(f, [[away, thAway], [away + 40, RIG.pose]]) : s2.theta;
	const field = 1 - prog(f, away, 18);
	const ledge = f >= away + 20 && f < away + 80 ? prog(f, away + 20, 10) * (1 - prog(f, away + 56, 14)) : 0;
	const count1 = Math.min(3, Math.max(1, Math.ceil(s1.passes / 2)));
	const count2 = Math.max(1, s2.swing);
	const pg = pendGeom(RIG.px, RIG.py, RIG.s, theta);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><HandoffBoard f={V19_END} final chip={false} heading={false} /></div>
			<FrameSvg>
				<g opacity={fade}>
					<Rig px={RIG.px} py={RIG.py} s={RIG.s} deg={theta} region={R} field={field} baseY={RIG.baseY} ledge={0} />
				</g>
				{ledge > 0.001 ? <line x1={pg.c[0] - pg.hw - 16 - 60 * prog(f, away + 56, 14)} y1={pg.c[1] - 50} x2={pg.c[0] - pg.hw - 16 - 60 * prog(f, away + 56, 14)} y2={pg.c[1] + 50} stroke="#6f6a62" strokeWidth={8} strokeLinecap="round" opacity={ledge} /> : null}
				{f >= still ? <g opacity={prog(f, still, 14)}>
					<rect x={1180} y={200} width={640} height={330} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Pendulum px={1440} py={220} s={0.25} deg={0} />
					<UprightMagnet cx={1530} cy={455} s={0.12} />
				</g> : null}
				{f >= all ? <ellipse cx={1480} cy={455} rx={120} ry={70} fill="none" stroke={GREY.stroke} strokeWidth={5} opacity={prog(f, all, 10)} /> : null}
				{f >= curr ? <Mark x={640} y={628} at={curr + 4} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={600} y={830} r={46} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={R.x + R.w + 50} y={R.y} at={-60} out={away} size={28} w={560} color={FLUX} border={FLUX}>B into the screen: magnet poles in front of and behind the plate</Chip>
			<Lbl x={96} y={320} at={swings - 30} out={away} color={INK} size={52}>{`swings: ${count1}`}</Lbl>
			<HandTag x={96} y={410} text="stops fast" at={swings + 30} out={away} size={38} color={AMBER.ink} />
			<Lbl x={96} y={320} at={away + 56} color={INK} size={52}>{`swings: ${count2}`}</Lbl>
			<HandTag x={96} y={410} text="magnet removed" at={away + 6} out={on} size={36} color={GREY.ink} />
			<HandTag x={96} y={410} text="swings on" at={on + 6} size={38} color={AMBER.ink} />
			<Lbl x={1500} y={575} at={still + 10} color={INK} size={28} anchor="middle">a still magnet beside copper</Lbl>
			<HandTag x={1500} y={640} text="at rest: no force" at={all + 6} size={36} color={GREY.ink} anchor="middle" />
			<Chip x={96} y={600} at={pred + 8} size={30} w={520}>currents are induced in the copper</Chip>
			<CrossedChip x={96} y={680} at={pred} crossAt={curr} size={30} caption="a still magnet: no pull">copper is weakly attracted</CrossedChip>
		</>
	);
};

// ---------- 2. currents inside solid metal ----------
const drift = (f: number, x0: number, x1: number, n: number) => x0 + ((x1 - x0) * Math.min(f, n)) / n;
export const S02: React.FC = () => {
	const id = 'eddy-currents';
	const f = useCurrentFrame();
	const paths = cue(id, 'full of closed paths'), incr = cue(id, 'the flux through loops there is increasing'), swirl = cue(id, 'a current swirls round'), eddy = cue(id, 'is called an eddy current'), out = cue(id, 'moving out of the field'), way = cap(id, cue(id, 'swirls the other way'));
	const x = drift(f, 980, 1020, dur(id));
	const e = swirlAt.entry, xo = swirlAt.exit;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CloseUp plateX={x} loops={prog(f, paths, 14) * (1 - prog(f, swirl, 14))} entry={prog(f, swirl, 14)} exit={prog(f, way, 14)} phase={f * 0.06} />
				<MoveArrow from={[x - 110, 212]} to={[x + 110, 212]} />
				{f >= incr ? <circle cx={e[0]} cy={e[1]} r={170} fill="none" stroke={FLUX} strokeWidth={5} strokeDasharray="12 8" opacity={prog(f, incr, 12) * (1 - prog(f, swirl + 30, 12))} /> : null}
				{f >= out ? <circle cx={xo[0]} cy={xo[1]} r={170} fill="none" stroke={FLUX} strokeWidth={5} strokeDasharray="12 8" opacity={prog(f, out, 12) * (1 - prog(f, way + 20, 12))} /> : null}
				{f >= way ? <path d={`M${e[0]},${CU.cy + 200} l0,24 l${xo[0] - e[0]},0 l0,-24`} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={prog(f, way, 12)} /> : null}
			</FrameSvg>
			<Lbl x={x + 150} y={196} at={-30} color={AMBER.ink} size={28}>moving</Lbl>
			<HandTag x={96} y={300} text="loops everywhere" at={paths + 10} out={swirl + 20} size={38} color={GREY.ink} />
			<Lbl x={96} y={420} at={incr} color={FLUX} size={36}>moving in: Φ ↑</Lbl>
			<Lbl x={96} y={490} at={out} color={FLUX} size={36}>moving out: Φ ↓</Lbl>
			<Lbl x={e[0]} y={CU.cy - 200} at={swirl} color={ROSE.ink} size={30} anchor="middle">eddy current</Lbl>
			<Chip x={96} y={890} at={eddy} size={28} w={1730} color={ROSE.ink} border={ROSE.stroke}>Eddy currents: “Loops of electric current induced within the bulk of a conductor by a changing magnetic field.”</Chip>
			<HandTag x={96} y={600} text="like a swirl in a stream" at={eddy + 20} size={32} color={ROSE.ink} />
			<HandTag x={(e[0] + xo[0]) / 2} y={CU.cy + 270} text="opposite swirls" at={way + 6} size={36} color={ROSE.ink} anchor="middle" />
			<Lbl x={CU.region.x + CU.region.w + 140} y={300} at={-30} color={FLUX} size={28}>field region</Lbl>
		</>
	);
};

// ---------- 3. the field pushes back ----------
export const S03: React.FC = () => {
	const id = 'pushes-back';
	const f = useCurrentFrame();
	const partly = cue(id, 'flows partly inside the field'), motion = cue(id, 'against the motion'), lenz = cue(id, "That's Lenz's law"), cin = cue(id, 'Coming in, it pushes back'), cout = cue(id, 'Going out, it pulls back'), braked = cap(id, cue(id, 'the plate is braked'));
	const x = drift(f, 1020, 1040, dur(id));
	const pulse = (at: number) => (f >= at && f < at + 40 ? Math.sin((Math.PI * (f - at)) / 40) : 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CloseUp plateX={x} entry={1} exit={1} seg={prog(f, partly, 12)} forces={prog(f, motion, 12) * (1 - prog(f, braked, 14))} phase={f * 0.06} pulseIn={pulse(cin)} pulseOut={pulse(cout)} />
				<MoveArrow from={[x - 110, 212]} to={[x + 110, 212]} />
				{f >= braked ? <Arrow2 from={[x + 60, CU.cy + 320]} to={[x - 260, CU.cy + 320]} color={AMBER.stroke} width={16} head={44} opacity={prog(f, braked, 12)} /> : null}
				{f >= braked ? <path d={`M${CU.region.x + CU.region.w + 20},${CU.cy - 300} l20,0 l0,600 l-20,0`} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, braked + 8, 12)} /> : null}
			</FrameSvg>
			<Lbl x={x + 150} y={196} at={-30} color={AMBER.ink} size={28}>moving</Lbl>
			<Lbl x={96} y={300} at={partly} color={ROSE.ink} size={32}>these parts are inside B</Lbl>
			<Chip x={96} y={360} at={motion} size={30} w={560} color={AMBER.ink}>F on I in B (motor effect)</Chip>
			<HandTag x={96} y={460} text="both backwards" at={motion + 10} size={40} color={AMBER.ink} />
			<Chip x={96} y={520} at={lenz} size={30} w={560} color={INK}>Lenz: opposes the change</Chip>
			<Chip x={96} y={610} at={cout} size={30} w={580} color={INK}>Coming in, it pushes back. Going away, it pulls back.</Chip>
			<Lbl x={swirlAt.entry[0] - 20} y={CU.cy - 200} at={cin} color={ROSE.ink} size={30} anchor="end">coming in</Lbl>
			<Lbl x={swirlAt.exit[0] + 20} y={CU.cy - 200} at={cout} color={ROSE.ink} size={30}>going out</Lbl>
			<div style={{position: 'absolute', left: 96, top: 860, width: 600}}><Row at={braked} size={44}><AnswerBox at={braked + 6}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>braking force</span></AnswerBox></Row></div>
			<HandTag x={CU.region.x + CU.region.w + 60} y={CU.cy} text="no contact" at={braked + 12} size={36} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. where the energy goes ----------
const E4 = {px: 420, py: 200, s: 0.42, baseY: 900, region: {x: 310, y: 500, w: 220, h: 190}};
const BAR = {base: 830, H: 500};
export const S04: React.FC = () => {
	const id = 'energy';
	const f = useCurrentFrame();
	const trading = cue(id, 'keep trading places'), total = cue(id, 'their total falls'), drives = cue(id, 'drives the eddy currents'), i2r = cue(id, 'I squared R'), heat = cue(id, 'which becomes heat'), done = cap(id, cue(id, "It's only transformed"));
	const T = 70, keep = 0.93;
	const sw = swingAt(f, 0, 30, T, 1);
	const p0 = swingAt(total, 0, 30, T, 1).passes;
	const k = f < total ? 0 : sw.passes - p0;
	const a = 30 * Math.pow(keep, k);
	const w = (2 * Math.PI) / T;
	const theta = -a * Math.cos(w * f);
	const E = Math.pow(keep, 2 * k);
	const K = E * Math.sin(w * f) ** 2, U = E * Math.cos(w * f) ** 2;
	const elec = f >= drives ? 0.22 * K / Math.max(E, 0.01) * (1 - E) * 2.4 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Rig px={E4.px} py={E4.py} s={E4.s} deg={theta} region={E4.region} baseY={E4.baseY} tint={prog(f, heat, 30)} />
				<VBar x={860} base={BAR.base} w={150} h={BAR.H * K} color={AMBER.stroke} />
				<VBar x={860} base={BAR.base - BAR.H * K} w={150} h={BAR.H * U} color="#a8a399" />
				<VBar x={852} base={BAR.base + 8} w={166} h={BAR.H * E + 16} color={NAVY.stroke} outline />
				<line x1={820} y1={BAR.base - BAR.H} x2={1050} y2={BAR.base - BAR.H} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, total, 12)} />
				<VBar x={1150} base={BAR.base} w={130} h={BAR.H * Math.min(0.6, elec)} color={ORANGE.stroke} opacity={prog(f, drives, 12)} />
				<VBar x={1420} base={BAR.base} w={150} h={BAR.H * (1 - E)} color={HEAT} opacity={prog(f, total, 12)} />
				<line x1={820} y1={BAR.base} x2={1620} y2={BAR.base} stroke={INK} strokeWidth={4} />
				{f >= total ? <Arrow2 from={[1060, BAR.base - BAR.H * E - 10]} to={[1400, BAR.base - BAR.H * (1 - E) - 10]} color={INK} width={4} head={16} dash="8 6" opacity={prog(f, total, 12) * 0.9} /> : null}
			</FrameSvg>
			<Lbl x={935} y={875} at={0} color={AMBER.ink} size={28} anchor="middle">kinetic</Lbl>
			<Lbl x={935} y={915} at={0} color={GREY.ink} size={28} anchor="middle">+ gravitational</Lbl>
			<Lbl x={935} y={BAR.base - BAR.H - 40} at={0} color={NAVY.ink} size={28} anchor="middle">total mechanical energy</Lbl>
			<Lbl x={1215} y={875} at={drives} color={ORANGE.ink} size={28} anchor="middle">electrical</Lbl>
			<Lbl x={1495} y={875} at={total} color={HEAT} size={28} anchor="middle">heat in the copper</Lbl>
			<HandTag x={1100} y={220} text="they trade places" at={trading + 6} out={total} size={38} color={NAVY.ink} />
			<HandTag x={1100} y={220} text="the total drops at each pass" at={total + 10} size={38} color={HEAT} />
			<Chip x={1660} y={600} at={i2r} size={34} color={INK}>P = I²R</Chip>
			<div style={{position: 'absolute', left: 820, top: 270, width: 1000}}><Row at={done} size={40}><AnswerBox at={done + 6}><span style={{whiteSpace: 'nowrap'}}>mechanical → electrical → heat: total unchanged</span></AnswerBox></Row></div>
		</>
	);
};

// ---------- 5. a magnet in a copper tube ----------
const TP = {x: 360, y: 340, w: 80};
const PL = {x: 760};
const BENCH = 890;
export const S05: React.FC = () => {
	const id = 'copper-tube';
	const f = useCurrentFrame();
	const drop = cue(id, 'Drop a strong magnet'), repels = cue(id, 'there repels it'), attracts = cue(id, 'there attracts it'), up = cue(id, 'Both forces point up'), weight = cue(id, 'equals its weight'), plastic = cue(id, 'In a plastic tube'), quarter = cue(id, 'quarter of a second'), energy = cap(id, cue(id, 'not kinetic energy'));
	const g = tubeGeom(TP);
	const ms = g.s * 0.34, hh = magnetHalfH(ms);
	const y0 = g.top - hh - 6;
	const t = Math.max(0, f - drop), tau = 12, vt = 0.5;
	const ym = y0 + vt * (t - tau * (1 - Math.exp(-t / tau))) + (t > 0 ? 0 : 0);
	const tp = Math.max(0, f - plastic);
	const ypl = Math.min(BENCH - hh, y0 + 0.5 * 22 * tp * tp);
	const pcx = PL.x + g.halfW;
	const ringO = (at: number) => prog(f, at, 12);
	const ledgeOut = (at: number) => 90 * prog(f, at, 10);
	const insideTop = g.top + 8;
	const nrg = prog(f, energy, 16);
	const fall = Math.min(1, t / 900);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v20-s5above"><rect x={0} y={0} width={1920} height={insideTop} /></clipPath></defs>
				{[g.cx, pcx].map((cx, i) => { const rodX = cx + 120; return <g key={i}><Stand rodX={rodX} baseY={BENCH} height={BENCH - g.top + 40} /><Boss x={rodX} y={g.top + 60} w={260} /></g>; })}
				<line x1={160} y1={BENCH} x2={1040} y2={BENCH} stroke="#8a8378" strokeWidth={5} />
				<CutTube p={TP} id="v20-s5" my={ym} rings={[[ym + hh + 40, 1, ringO(repels)], [ym - hh - 40, -1, ringO(attracts)]]} ringColor={ROSE.stroke} />
				<g clipPath="url(#v20-s5above)"><UprightMagnet cx={g.cx} cy={ym} s={ms} /></g>
				<line x1={g.cx - 40 + ledgeOut(drop)} y1={g.top - 3} x2={g.cx + 40 + ledgeOut(drop)} y2={g.top - 3} stroke="#6f6a62" strokeWidth={7} strokeLinecap="round" opacity={1 - prog(f, drop + 6, 10)} />
				<UprightMagnet cx={pcx} cy={ypl} s={ms} />
				<rect x={PL.x} y={g.top} width={2 * g.halfW} height={g.bot - g.top} rx={10} fill="rgba(215,218,222,0.45)" stroke="#9aa0a6" strokeWidth={4} />
				<ellipse cx={pcx} cy={g.top} rx={g.halfW} ry={10} fill="none" stroke="#9aa0a6" strokeWidth={4} />
				<line x1={pcx - 40 + ledgeOut(plastic)} y1={g.top - 3} x2={pcx + 40 + ledgeOut(plastic)} y2={g.top - 3} stroke="#6f6a62" strokeWidth={7} strokeLinecap="round" opacity={1 - prog(f, plastic + 6, 10)} />
				{f >= repels ? <Arrow2 from={[g.cx - 95, ym + 50]} to={[g.cx - 95, ym - 60]} color={AMBER.stroke} width={8 + 4 * (f >= up && f < up + 30 ? 1 : 0)} head={24} opacity={ringO(repels)} /> : null}
				{f >= attracts ? <Arrow2 from={[g.cx - 135, ym + 50]} to={[g.cx - 135, ym - 60]} color={AMBER.stroke} width={8 + 4 * (f >= up && f < up + 30 ? 1 : 0)} head={24} opacity={ringO(attracts)} /> : null}
				{f >= weight ? <Arrow2 from={[g.cx - 180, ym - 60]} to={[g.cx - 180, ym + 160]} color="#7d7a74" width={8} head={24} opacity={ringO(weight)} /> : null}
				{nrg > 0.001 ? <g opacity={nrg}>
					<rect x={520} y={700 - 180 * (1 - 0.6 * fall)} width={44} height={180 * (1 - 0.6 * fall)} fill="#a8a399" />
					<rect x={574} y={700 - 180 * 0.6 * fall} width={44} height={180 * 0.6 * fall} fill={HEAT} />
					<rect x={628} y={700 - 30} width={44} height={30} fill={AMBER.stroke} />
					<line x1={510} y1={700} x2={682} y2={700} stroke={INK} strokeWidth={3} />
					<ellipse cx={650} cy={685} rx={36} ry={30} fill="none" stroke={AMBER.stroke} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={g.cx} y={935} at={-30} color={INK} size={30} anchor="middle">copper</Lbl>
			<Lbl x={pcx} y={935} at={-30} color={INK} size={30} anchor="middle">plastic</Lbl>
			<Lbl x={g.cx - 150} y={g.top - 30} at={-30} color={INK} size={26} anchor="end">cut-away view</Lbl>
			<HandTag x={1180} y={260} text="push below, pull above" at={attracts + 10} size={38} color={ROSE.ink} />
			<Lbl x={1180} y={340} at={repels} color={FLUX} size={30}>below: Φ increasing → repels</Lbl>
			<Lbl x={1180} y={390} at={attracts} color={FLUX} size={30}>above: Φ decreasing → attracts</Lbl>
			<Chip x={1180} y={440} at={weight} size={30} w={700} color={INK}>terminal speed: steady (upward force = weight)</Chip>
			<Chip x={1180} y={530} at={weight + 20} size={28} w={700} color={GREY.ink} border={GREY.stroke}>copper: a few seconds (depends on magnet and tube)</Chip>
			<Lbl x={pcx + 80} y={760} at={quarter} color={INK} size={36}>{`≈ ${fx(T_FALL, 2)} s`}</Lbl>
			<Lbl x={pcx + 80} y={805} at={quarter} color={GREY.ink} size={26}>{`free fall, ${fx(S_TUBE * 100, 0)} cm`}</Lbl>
			<div style={{position: 'absolute', left: 1120, top: 640, width: 760}}><Row at={quarter} size={40}><AnswerBox at={quarter + 8}><span style={{whiteSpace: 'nowrap'}}>t = √(2s/g) = √(2 × {fx(S_TUBE, 2)} / {fx(G, 1)}) = {fx(T_FALL, 2)} s</span></AnswerBox></Row></div>
			<Lbl x={595} y={740} at={energy} color={INK} size={26} anchor="middle">grav. · heat · kinetic</Lbl>
		</>
	);
};
