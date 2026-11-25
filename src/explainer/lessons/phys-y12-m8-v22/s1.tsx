// Scenes 1 to 7: the hook (last time's table and collider ring; the painted detector slides in; predict; the beams meet),
// why so much energy (make it: rest energy; see it: wavelength; the collision-energy slider past the rest energies),
// pushing with electric fields (W = qV; one giant voltage crossed; a staircase of small pushes), a straight line of
// pushes (the painted linac tunnel above coded drift tubes whose field arrows flip as the particle passes), bending it
// into a ring (push in the gap, steer in the magnets; the painted dipole), a field that keeps up (the energy slider with
// live p and B at fixed r) and the Australian Synchrotron booster worked.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {AccRing, DriftTubes, ringPt, tubeGaps} from '../../physics/atom/accelerator';
import {LPlate} from '../../physics/light/plates';
import {displacement} from '../../sims/waves';
import {HandoffBoard21, M8V21FinalFrame} from '../phys-y12-m8-v21/s3';
import {dur as dur21} from '../phys-y12-m8-v21/common';
import {AS, B01, B3, B_SLIP7, E_RAMP, HEAD, HEAD_SIZE, P01, P3, R_B, RAMP_RATIO, REST, V_ONE, W_1MV, bOf, cap, cue, hold, pOf} from './common';
import {AMBER, Arrow, CMS, DIPOLE, GOLD, GREY, Givens, INK, LINAC, Lbl, NAVY, PROTON, SLATE, Strip, fx, sci} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseAt = (f: number, at: number, d = 36) => Math.sin(Math.PI * Math.min(1, Math.max(0, (f - at) / d)));

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const mo = cue(id, 'Most of the Standard Model never turns up'), ht = cue(id, 'a Higgs boson, or a top quark'), si = cue(id, 'to study it'), pr = cue(id, 'Make your prediction'), sm = cue(id, 'You smash particles together'), ep = cap(id, cue(id, 'create and test evidence about particles'), 8);
	const h = hold(id);
	if (f < 1) return <M8V21FinalFrame />;
	const cms = prog(f, si, 24);
	const big = prog(f, ht, 16) * (1 - prog(f, si + 30, 16));
	return (
		<>
			<HandoffBoard21 f={dur21('handoff-v22') - 1} final heading={false} chip={false} tagPulse={pulseAt(f, mo, 40)} big={{t: big, H: big}} side={1 - cms} ringBright={prog(f, sm, 12)} flashAt={sm + 20} />
			<MarkedHeading text={HEAD} marks={['create and test evidence']} at={ep} size={HEAD_SIZE} color={INK} markColor={INK} />
			<Chip x={96} y={890} at={-60} out={ep} size={30} w={1728} color={INK} border={INK}>Next: how do accelerators create and test evidence about particles?</Chip>
			<FrameSvg>
				{cms > 0.001 ? <LPlate spec={CMS} p={{x: lerp(1960, 1320, cms), y: 560, w: 520}} /> : null}
				{f >= sm ? <Mark x={410} y={792} at={sm} kind="tick" color={INK} size={28} /> : null}
				<Countdown start={h.startFrame} end={h.endFrame} x={1760} y={190} r={40} />
			</FrameSvg>
			<HandTag x={1580} y={500} text="made and seen here" at={si + 20} size={30} color={GOLD.ink} marks={[{kind: 'arrow', from: [1560, 420], to: [1580, 600], bend: 0.1}]} />
			<Chip x={96} y={770} at={pr} size={30} color={INK}>heat something</Chip>
			<Chip x={430} y={770} at={pr + 4} size={30} color={INK} border={f >= sm ? INK : undefined}>smash particles together very fast</Chip>
			<Chip x={1000} y={770} at={pr + 8} size={30} color={INK}>find one in rocks</Chip>
		</>
	);
};

// ---------- 2. why so much energy? ----------
const EB = {x: 150, y: 380, w: 760, max: 200};
const ebX = (g: number) => EB.x + (g / EB.max) * EB.w;
const SB = {x: 150, y: 790, w: 1100};
const sbX = (g: number) => SB.x + (g / EB.max) * SB.w;
export const S02: React.FC = () => {
	const id = 'why-energy';
	const f = useCurrentFrame();
	const mh = cue(id, 'to make a heavy particle'), em = cue(id, 'E equals m c squared'), al = cue(id, 'at least a hundred and twenty-five GeV'), ts = cue(id, 'seeing tiny structure'), cd = cap(id, cue(id, 'So the collision energy decides'), 90);
	const fill = 125 * prog(f, mh, 40);
	const sweep = EB.max * prog(f, cd, 80, t => t);
	const wave = Array.from({length: 161}, (_, i) => { const x = 1240 + (300 * i) / 160; return `${i ? 'L' : 'M'}${x.toFixed(1)},${(470 + displacement({amplitude: 16, wavelength: 26, period: 1.2}, x, f / 30)).toFixed(1)}`; }).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={190} width={880} height={500} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<rect x={1010} y={190} width={814} height={500} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<rect x={EB.x} y={EB.y} width={EB.w} height={60} rx={10} fill="none" stroke={INK} strokeWidth={3} />
				<rect x={EB.x} y={EB.y} width={ebX(fill) - EB.x} height={60} rx={10} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={3} />
				<line x1={ebX(125)} y1={EB.y - 30} x2={ebX(125)} y2={EB.y + 90} stroke={GOLD.stroke} strokeWidth={5} strokeDasharray="10 7" opacity={prog(f, em, 12)} />
				<line x1={ebX(173)} y1={EB.y - 30} x2={ebX(173)} y2={EB.y + 90} stroke={AMBER.stroke} strokeWidth={5} strokeDasharray="10 7" opacity={prog(f, al + 20, 12)} />
				<defs><clipPath id="v22-p2"><circle cx={1390} cy={470} r={150} /></clipPath></defs>
				<circle cx={1390} cy={470} r={150} fill="#f3c9c2" stroke="#c8443a" strokeWidth={5} />
				<path d={wave} fill="none" stroke={NAVY.stroke} strokeWidth={4} clipPath="url(#v22-p2)" opacity={prog(f, ts, 14)} />
				<line x1={SB.x} y1={SB.y} x2={SB.x + SB.w} y2={SB.y} stroke="rgba(60,45,20,0.35)" strokeWidth={10} strokeLinecap="round" />
				{REST.map(r => <line key={r.s} x1={sbX(r.m)} y1={SB.y - 22} x2={sbX(r.m)} y2={SB.y + 22} stroke={INK} strokeWidth={4} />)}
				<circle cx={sbX(sweep)} cy={SB.y} r={18} fill={SLATE.stroke} stroke="#fffdf8" strokeWidth={4} opacity={prog(f, cd, 10)} />
			</FrameSvg>
			<Lbl x={120} y={236} at={-30} color={INK} size={36}>make it</Lbl>
			<Lbl x={1034} y={236} at={-30} color={INK} size={36}>see it</Lbl>
			<Lbl x={EB.x} y={EB.y + 100} at={mh} color={SLATE.ink} size={28}>collision energy (GeV)</Lbl>
			<Lbl x={ebX(125) - 8} y={EB.y - 44} at={em} color={GOLD.ink} size={28} anchor="end">Higgs: mc² = 125 GeV</Lbl>
			<Lbl x={ebX(173) - 8} y={EB.y + 140} at={al + 20} color={AMBER.ink} size={28} anchor="end">top quark: 173 GeV</Lbl>
			<Chip x={150} y={570} at={em + 6} size={30} color={INK}>E = mc² (earlier video)</Chip>
			<Chip x={1034} y={570} at={ts + 6} size={28} w={760} color={NAVY.ink}>λ = h/p: more momentum, finer detail (last two videos)</Chip>
			<Lbl x={1390} y={300} at={-30} color={INK} size={28} anchor="middle">a proton, probed</Lbl>
			{REST.map(r => <Lbl key={r.s} x={sbX(r.m)} y={SB.y - 36} at={cd} color={INK} size={28} anchor="middle">{`${r.s} ${fx(r.m, 0)}`}</Lbl>)}
			<Readout x={1300} y={730} label="collision energy" value={`${fx(sweep, 0)} GeV`} color={SLATE.ink} w={330} opacity={prog(f, cd, 10)} />
			<HandTag x={150} y={922} text="at least mc²: needed, not enough alone" at={cd + 50} size={30} color={SLATE.ink} marks={[{kind: 'brace', x: sbX(200) + 20, y1: SB.y - 30, y2: SB.y + 30, facing: 'right'}]} />
			<Lbl x={150} y={860} at={cd + 60} color={GREY.ink} size={26}>other particles must usually be made too</Lbl>
		</>
	);
};

// ---------- 3. pushing with electric fields ----------
const STEPS3 = 18;
export const S03: React.FC = () => {
	const id = 'electric-push';
	const f = useCurrentFrame();
	const pc = cue(id, 'A proton crossing one million volts'), sm = cue(id, 'almost seven million million volts'), ms = cap(id, cue(id, 'many smaller pushes'), 110);
	const cross = prog(f, pc, 40);
	const tall = prog(f, sm, 30);
	const stairs = prog(f, ms, 100, t => t);
	const n = Math.floor(stairs * STEPS3 + 1e-6);
	const sx = (i: number) => 1010 + (i * 780) / STEPS3, sy = (i: number) => 860 - (i * 540) / STEPS3;
	const path = Array.from({length: n}, (_, i) => `L${sx(i)},${sy(i + 1)} L${sx(i + 1)},${sy(i + 1)}`).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={260} y={300} width={24} height={360} fill="#c8443a" stroke={INK} strokeWidth={2} />
				<rect x={536} y={300} width={24} height={360} fill="#1f3a68" stroke={INK} strokeWidth={2} />
				{[330, 390, 450, 510, 570].map(y => <Arrow key={y} x0={330} y0={y + 20} x1={490} y1={y + 20} color={AMBER.stroke} width={4} />)}
				{f >= pc ? <circle cx={lerp(300, 520, cross)} cy={480} r={16} fill={PROTON} stroke="#fffdf8" strokeWidth={3} /> : null}
				<rect x={740} y={lerp(860, -60, tall)} width={100} height={860 - lerp(860, -60, tall)} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={4} opacity={prog(f, sm, 8)} />
				{f >= sm + 30 ? <Mark x={790} y={560} at={sm + 34} kind="cross" color={SLATE.stroke} size={90} /> : null}
				<rect x={960} y={280} width={880} height={640} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<line x1={1000} y1={300} x2={1000} y2={870} stroke={INK} strokeWidth={3} />
				<line x1={1000} y1={870} x2={1810} y2={870} stroke={INK} strokeWidth={3} />
				{n > 0 ? <path d={`M${sx(0)},${sy(0)} ${path}`} fill="none" stroke={AMBER.stroke} strokeWidth={6} /> : null}
				{n > 0 ? <circle cx={sx(n)} cy={sy(n)} r={14} fill={PROTON} stroke="#fffdf8" strokeWidth={3} /> : null}
			</FrameSvg>
			<Chip x={96} y={190} at={-30} size={34} color={INK}>W = qV (earlier video)</Chip>
			<Lbl x={410} y={640} at={-30} color={INK} size={32} anchor="middle">1 MV</Lbl>
			<Lbl x={410} y={280} at={-30} color={AMBER.ink} size={26} anchor="middle">electric field between two plates</Lbl>
			<Lbl x={1810} y={910} at={-30} color={INK} size={26} anchor="end">number of pushes →</Lbl>
			<Lbl x={1010} y={320} at={-30} color={SLATE.ink} size={26}>energy ↑</Lbl>
			<Lbl x={272} y={700} at={-30} color={INK} size={30} anchor="middle">+</Lbl>
			<Lbl x={548} y={700} at={-30} color={INK} size={30} anchor="middle">−</Lbl>
			<Readout x={150} y={740} label="energy gained by a proton" value={f >= pc + 40 ? `1 MeV (${sci(W_1MV, 3)} J)` : '0'} color={SLATE.ink} w={560} />
			<Lbl x={860} y={260} at={sm + 10} color={SLATE.ink} size={32}>{`${sci(V_ONE, 1)} V`}</Lbl>
			<HandTag x={860} y={330} text="impossible in one step" at={sm + 40} size={32} color={SLATE.ink} />
			<Readout x={1300} y={200} label="energy so far" value={`${n} × qV`} color={SLATE.ink} w={300} opacity={prog(f, ms, 10)} />
			<HandTag x={1100} y={930} text="many small pushes" at={ms + 30} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 4. a straight line of pushes ----------
const TUBES = tubeGaps(150, 7, 100, 30, 52);
const TY = 790;
/** Particle x after `t` segments (one segment per tube-and-gap, equal times: the tubes lengthen as it speeds up). */
const tubeX = (t: number) => {
	const i = Math.min(TUBES.length - 1, Math.floor(t)), u = t - i, seg = TUBES[i];
	const end = i < TUBES.length - 1 ? TUBES[i + 1].x0 : seg.x1 + 40;
	return lerp(seg.x0 + 10, end, u);
};
export const S04: React.FC = () => {
	const id = 'linac';
	const f = useCurrentFrame();
	const la = cue(id, 'a linear accelerator'), rg = cue(id, 'a row of gaps'), fs = cue(id, 'flip in step'), pf = cue(id, "it's pushed forwards"), eg = cue(id, 'Each gap adds a little more energy'), sl = cue(id, 'can only be so long'), lr = cap(id, cue(id, 'limits the energy it can reach'), 24);
	const t = Math.min(TUBES.length - 0.02, Math.max(0, (f - fs) / 34));
	const x = tubeX(t), seg = Math.floor(t);
	const inGap = f >= fs && seg < TUBES.length - 1 && x > TUBES[seg].x1 - 4;
	const gapsPassed = f < fs ? 0 : TUBES.slice(0, -1).filter(g => x > g.gx).length;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LINAC} p={{x: 96, y: 170, w: 900}} />
				<DriftTubes tubes={TUBES} y={TY} forward={() => inGap || f < fs} hi={pulseAt(f, rg, 40)} />
				{f >= fs ? <circle cx={x} cy={TY} r={15} fill={PROTON} stroke="#fffdf8" strokeWidth={3} /> : null}
				<rect x={1080} y={330} width={60} height={250} fill="none" stroke={INK} strokeWidth={3} />
				<rect x={1080} y={580 - 250 * (gapsPassed / (TUBES.length - 1))} width={60} height={250 * (gapsPassed / (TUBES.length - 1))} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={3} />
				{f >= sl ? <g opacity={prog(f, sl, 14)}><line x1={1240} y1={480} x2={1800} y2={480} stroke={INK} strokeWidth={6} /><line x1={1240} y1={460} x2={1240} y2={500} stroke={INK} strokeWidth={5} /><line x1={1800} y1={460} x2={1800} y2={500} stroke={INK} strokeWidth={5} /></g> : null}
			</FrameSvg>
			<Lbl x={96} y={650} at={-30} color={GREY.ink} size={26}>linear accelerator tunnel (illustration)</Lbl>
			<Lbl x={150} y={720} at={la} color={INK} size={28}>drift tubes (coded); field arrows in the gaps</Lbl>
			<Lbl x={1080} y={300} at={eg} color={SLATE.ink} size={28}>energy</Lbl>
			<Readout x={1180} y={200} label="gaps crossed" value={`${gapsPassed}`} color={SLATE.ink} w={240} opacity={prog(f, eg, 10)} />
			<Lbl x={1240} y={440} at={sl} color={INK} size={30}>3 km → energy limit</Lbl>
			<Chip x={1240} y={540} at={lr} size={30} color={INK}>linac: one pass, limited by length</Chip>
			<HandTag x={1240} y={660} text="always pushed forwards" at={pf + 10} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [1230, 690], to: [TUBES[3].gx + 10, TY - 50], bend: 0.15}]} />
			<Lbl x={150} y={890} at={fs + 20} color={GREY.ink} size={26}>inside a tube the particle is shielded while the field flips</Lbl>
		</>
	);
};

// ---------- 5. bending it into a ring ----------
const RG5 = {cx: 500, cy: 570, r: 290};
export const S05: React.FC = () => {
	const id = 'ring-steer';
	const f = useCurrentFrame();
	const sg = cue(id, 'the same gaps push the particles again'), um = cue(id, 'use magnetic fields'), mf = cue(id, 'A magnetic force is at right angles'), rc = cue(id, 'round a curve'), sq = cue(id, 'Other magnets squeeze the beam'), st = cap(id, cue(id, 'magnetic fields steer'), 24);
	const turns = f < sg ? 0 : (f - sg) / 120;
	const laps = Math.floor(turns);
	const a = 0.3, [px, py] = ringPt(RG5.cx, RG5.cy, RG5.r, a);
	const tx = Math.cos(2 * Math.PI * a), ty = -Math.sin(2 * Math.PI * a);
	const fx0 = (RG5.cx - px) / RG5.r, fy0 = (RG5.cy - py) / RG5.r;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<AccRing cx={RG5.cx} cy={RG5.cy} r={RG5.r} glow={pulseAt(f, sg + Math.max(0, laps) * 120, 30)} magnets={0.4 + 0.6 * prog(f, um, 14)} squeeze={prog(f, sq, 14)} dots={f >= sg ? [{turns: turns % 1, color: PROTON}] : []} />
				{f >= mf ? <g opacity={prog(f, mf, 12)}>
					<circle cx={px} cy={py} r={14} fill={PROTON} stroke="#fffdf8" strokeWidth={3} />
					<Arrow x0={px} y0={py} x1={px + tx * 120} y1={py + ty * 120} color="#13767a" width={6} />
					<Arrow x0={px} y0={py} x1={px + fx0 * 110} y1={py + fy0 * 110} color={NAVY.stroke} width={6} />
				</g> : null}
				{f >= rc ? <LPlate spec={DIPOLE} p={{x: lerp(1960, 1110, prog(f, rc, 20)), y: 330, w: 700}} /> : null}
			</FrameSvg>
			<Readout x={96} y={190} label="laps" value={`${Math.max(0, laps)}`} color={SLATE.ink} w={160} opacity={prog(f, sg, 10)} />
			<Readout x={280} y={190} label="energy so far" value={`${Math.max(0, laps)} × qV`} color={SLATE.ink} w={260} opacity={prog(f, sg, 10)} />
			<Lbl x={RG5.cx} y={RG5.cy + RG5.r + 60} at={-30} color={AMBER.ink} size={28} anchor="middle">accelerating gap</Lbl>
			<Lbl x={px + tx * 120 + 10} y={py + ty * 120 - 10} at={mf + 6} color="#13767a" size={30}>v</Lbl>
			<Lbl x={px + fx0 * 110 - 34} y={py + fy0 * 110 + 40} at={mf + 6} color={NAVY.ink} size={30}>F</Lbl>
			<Chip x={1110} y={200} at={mf + 10} size={30} color={NAVY.ink}>F ⊥ v: no work (earlier video)</Chip>
			<HandTag x={1110} y={740} text="bending (dipole) magnet" at={rc + 20} size={32} color={NAVY.ink} marks={[{kind: 'arrow', from: [1100, 700], to: [RG5.cx + RG5.r * 0.78, RG5.cy - RG5.r * 0.62], bend: 0.2}]} />
			<Lbl x={RG5.cx + 40} y={RG5.cy - RG5.r - 22} at={sq + 6} color="#6b4fa0" size={28}>focusing (quadrupole) magnets</Lbl>
			<div style={{position: 'absolute', left: 1110, top: 820}}><Row at={st} size={40}><AnswerBox at={st + 4}>electric fields push; magnetic fields steer</AnswerBox></Row></div>
		</>
	);
};

// ---------- 6. a field that keeps up ----------
const RG6 = {cx: 420, cy: 580, r: 230};
const rampE = (f: number, at: number) => { const k = Math.min(E_RAMP.length - 1, Math.max(0, Math.floor((f - at) / 22))); return E_RAMP[f < at ? 0 : k]; };
export const S06: React.FC = () => {
	const id = 'field-ramp';
	const f = useCurrentFrame();
	const rq = cue(id, 'r equals p over q B'), ls = cue(id, "At low speeds, that's m v"), mg = cue(id, 'their momentum grows'), gs = cue(id, 'the magnetic field has to grow in step'), bq = cue(id, 'B equals p over q r'), sy = cue(id, 'is called a synchrotron'), sn = cap(id, cue(id, 'synchronised'), 24);
	const tracking = f >= gs;
	const E = tracking ? rampE(f, gs) : rampE(f, mg);
	const p = pOf(E), B = tracking ? bOf(p) : B01;
	const ghostR = Math.min(2.3, p / (B * 1.602e-19 * R_B)) * RG6.r;
	const turns = (f / 70) % 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<AccRing cx={RG6.cx} cy={RG6.cy} r={RG6.r} glow={pulseAt(f, sn, 30)} dots={[{turns, color: NAVY.stroke}]} />
				{!tracking && f >= mg ? <circle cx={RG6.cx} cy={RG6.cy - (ghostR - RG6.r)} r={ghostR} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 9" /> : null}
				<line x1={RG6.cx} y1={RG6.cy} x2={RG6.cx + RG6.r} y2={RG6.cy} stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
			</FrameSvg>
			<Lbl x={RG6.cx + 30} y={RG6.cy - 14} at={-30} color={INK} size={28}>r = 8.0 m</Lbl>
			<Readout x={760} y={190} label="electron energy E" value={`${fx(E, 1)} GeV`} color={SLATE.ink} w={420} />
			<Readout x={760} y={330} label="momentum p" value={`${sci(p, 2)} kg m s⁻¹`} color={SLATE.ink} w={520} />
			<Readout x={760} y={470} label="field B" value={`${fx(B, B < 0.1 ? 3 : 2)} T`} color={NAVY.ink} w={320} opacity={1} />
			<Readout x={760} y={610} label="radius r" value={`${fx(R_B, 1)} m (fixed)`} color={INK} w={420} />
			<Chip x={1320} y={200} at={rq} size={34} color={INK}>r = p/(qB)</Chip>
			<Lbl x={1320} y={300} at={ls} color={GREY.ink} size={28}>low speed: p = mv (earlier video)</Lbl>
			<Lbl x={96} y={250} at={mg + 10} out={gs} color={GREY.ink} size={28}>B held: the orbit would widen</Lbl>
			<HandTag x={96} y={250} text="p up, B up, r fixed" at={gs + 20} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: RG6.cx + RG6.r / 2, cy: RG6.cy, rx: RG6.r / 2 + 30, ry: 40}]} />
			<div style={{position: 'absolute', left: 1320, top: 380}}><Row at={bq} size={48}><AnswerBox at={bq + 4}>r = p/(qB) → B = p/(qr)</AnswerBox></Row></div>
			<Chip x={1320} y={520} at={sy} size={30} w={500} color={NAVY.ink}>synchrotron: B rises in step with p (fixed r)</Chip>
			<HandTag x={1320} y={700} text="in step: synchro-" at={sn} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 7. worked example: the Australian Synchrotron ----------
const RAMP7 = {x: 1180, y: 700, w: 560, h: 190};
export const S07: React.FC = () => {
	const id = 'worked-booster';
	const f = useCurrentFrame();
	const tr = cue(id, 'Try it on the Australian Synchrotron'), sz = cue(id, 'one point six zero times ten'), em = cue(id, 'eight point zero metres'), tt = cue(id, 'one point two five tesla'), th = cue(id, 'a thirtieth of that momentum'), ra = cap(id, cue(id, 'ramps up as they accelerate'), 40);
	const gr = prog(f, ra, 40, t => t);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={-30} size={32}>Magnetic field needed in the booster at 3.0 GeV</Strip>
			<Strip x={96} y={246} at={-30} size={32}>B = p/(qr)</Strip>
			<Givens x={96} y={316} w={1000} at={-30} size={30} lines={[<span key="p">{f >= sz ? `p = ${sci(P3, 2)} kg m s⁻¹ (3.0 GeV electrons)` : 'p = ? (3.0 GeV electrons)'}</span>, <span key="r">{f >= em ? `r = ${fx(R_B, 1)} m (bending radius)` : 'r = ? (bending radius)'}</span>, <span key="q">q = 1.602 × 10⁻¹⁹ C (data sheet)</span>]} />
			<Lbl x={96} y={510} at={tr} color={GREY.ink} size={26}>{`Australian Synchrotron, Clayton (Vic): linac ${AS.linac} MeV → booster (${AS.booster} m) → ${fx(AS.e, 1)} GeV → storage ring (${AS.ring} m)`}</Lbl>
			<FrameSvg>
				<AccRing cx={1600} cy={330} r={130} segments={6} dots={[{turns: (f / 60) % 1, color: NAVY.stroke, r: 10}]} />
				{gr > 0.001 ? <g>
					<line x1={RAMP7.x} y1={RAMP7.y} x2={RAMP7.x} y2={RAMP7.y + RAMP7.h} stroke={INK} strokeWidth={3} />
					<line x1={RAMP7.x} y1={RAMP7.y + RAMP7.h} x2={RAMP7.x + RAMP7.w} y2={RAMP7.y + RAMP7.h} stroke={INK} strokeWidth={3} />
					<line x1={RAMP7.x} y1={RAMP7.y + RAMP7.h - (B01 / B3) * RAMP7.h} x2={RAMP7.x + gr * RAMP7.w} y2={RAMP7.y + RAMP7.h - lerp(B01 / B3, 1, gr) * RAMP7.h} stroke={NAVY.stroke} strokeWidth={5} />
				</g> : null}
			</FrameSvg>
			<Lbl x={1460} y={500} at={-30} color={GREY.ink} size={26}>booster ring (schematic)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 560, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={tt - 40} ageAt={th} size={44} oldSize={34}>{`B = ${sci(P3, 2)} / (1.602 × 10⁻¹⁹ × ${fx(R_B, 1)})`}</Row>
				<Row at={tt} size={56}><AnswerBox at={tt + 4}>{`B ≈ ${fx(B3, 2)} T`}</AnswerBox></Row>
				<Row at={th} size={40}>{`at 0.1 GeV: p ÷ ${fx(RAMP_RATIO, 0)} = ${sci(P01, 2)} → B ≈ ${fx(B01, 3)} T`}</Row>
			</div>
			<CrossedChip x={1180} y={560} at={tt + 30} crossAt={tt + 50} size={26} caption="use p in kg m s⁻¹, not GeV">{`B = 3.0 × 10⁹ / (1.602 × 10⁻¹⁹ × 8.0) = ${sci(B_SLIP7, 1)} T`}</CrossedChip>
			<Lbl x={RAMP7.x} y={RAMP7.y - 16} at={ra} color={NAVY.ink} size={28}>B (T): 0.042 → 1.25 each cycle</Lbl>
			<Lbl x={RAMP7.x + RAMP7.w} y={RAMP7.y + RAMP7.h + 36} at={ra} color={INK} size={26} anchor="end">time in each cycle →</Lbl>
		</>
	);
};

