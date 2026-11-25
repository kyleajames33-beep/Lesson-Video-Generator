// Scenes 1 to 6: the hook (last time's standing-wave orbit; the electron as a tiny charged ball; the evidence panel with
// the painted electron diffraction tube), turning light's rule around (p = E/c = hf/c = h/λ, flipped to λ = h/p), a
// particle's wavelength (λ = h/mv on the formula sheet; the momentum slider squeezing the wave), the steel ball (task,
// equation, givens; a log size ladder), the electron's wavelength (atom-sized; crystal rows as a grating) and Davisson
// and Germer's peak (the detector arm sweeping, a polar lobe growing to 50°).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {kf} from '../../math/studio';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout, WaveLine} from '../../physics/atom/universe';
import {Packet} from '../../physics/light/photo';
import {Arrow} from '../../physics/light/em';
import {CrystalRows, PolarLobe} from '../../physics/atom/matterwave';
import {OrbitWave} from '../../physics/atom/bohr';
import {HandoffBoard11, M8V11FinalFrame, PANEL11} from '../phys-y12-m8-v11/s3';
import {BALL_LAM, BALL_SLIP, E_LAM, HEAD, HEAD_SIZE, cap, cue} from './common';
import {AMBER, DGSchematic, GREY, Givens, INK, LPlate, Lbl, MatterDot, NAVY, Nucleus, STEEL_BALL, SizeLadder, Strip, TEAL, Tube, fx, sci, sizeY, tubeH} from './parts';
import type {DG} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);

// ---------- 1. hook ----------
const PN = {x: 560, y: 300, w: 860, h: 520};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const db = cue(id, 'De Broglie suggested'), wn = cue(id, 'a whole number of its wavelengths'), tb = cue(id, 'a tiny charged ball'), nt = cue(id, 'needs a test');
	if (f < 1) return <M8V11FinalFrame />;
	const mv = prog(f, nt, 30);
	const px = PANEL11.x + (PN.x - PANEL11.x) * mv, py = PANEL11.y + (PN.y - PANEL11.y) * mv, pw = PANEL11.w + (PN.w - PANEL11.w) * mv, ph = PANEL11.h + (PN.h - PANEL11.h) * mv;
	const tw = 760, th = tubeH(tw);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - 0.85 * mv}}><HandoffBoard11 f={0} final heading={false} chip={false} panel={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pulseOf(f, db, 40) > 0 ? <rect x={970} y={630} width={280} height={56} rx={10} fill="none" stroke={INK} strokeWidth={5} opacity={pulseOf(f, db, 40)} /> : null}
				{pulseOf(f, wn, 50) > 0 ? <circle cx={700} cy={570} r={262} fill="none" stroke={NAVY.stroke} strokeWidth={7} opacity={pulseOf(f, wn, 50)} /> : null}
				<rect x={px} y={py} width={pw} height={ph} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray={mv > 0.5 ? undefined : '14 10'} />
				{mv > 0.02 ? <Tube p={{x: PN.x + (PN.w - tw) / 2, y: PN.y + 70 + (PN.h - 70 - th) / 2, w: tw}} opacity={prog(f, nt + 20, 14)} /> : null}
				{f >= tb ? <g opacity={prog(f, tb, 12)}>
					<circle cx={250} cy={560} r={22} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} />
					<line x1={110} y1={560} x2={220} y2={560} stroke={NAVY.stroke} strokeWidth={4} />
					<path d="M290,560 l40,0" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" />
				</g> : null}
			</FrameSvg>
			<Lbl x={px + pw / 2} y={py + 50} at={-30} color={INK} size={40} anchor="middle">evidence?</Lbl>
			<Lbl x={110} y={490} at={tb} color={NAVY.ink} size={28}>mass, charge, a path</Lbl>
			<Lbl x={110} y={640} at={tb + 10} color={NAVY.ink} size={26}>Thomson, 1897: a particle</Lbl>
			<HandTag x={0} y={0} at={tb + 20} color={NAVY.stroke} marks={[{kind: 'circle', cx: 250, cy: 560, rx: 44, ry: 40}]} />
			<HandTag x={PN.x + 40} y={PN.y + PN.h + 50} text="the test?" at={nt + 30} size={36} color={NAVY.ink} marks={[{kind: 'arrow', from: [300, 600], to: [PN.x + 30, PN.y + PN.h / 2], bend: -0.2}]} />
		</>
	);
};

// ---------- 2. turning light's rule around ----------
export const S02: React.FC = () => {
	const id = 'light-turned-around';
	const f = useCurrentFrame();
	const dw = cue(id, 'light diffracted like a wave'), ph = cue(id, 'it arrived as photons'), cm = cue(id, 'it still carries momentum'), pe = cue(id, 'p equals E over c'), hf = cue(id, 'Its energy is h f'), fc = cue(id, 'f over c is one over lambda'), pl = cue(id, "a photon's momentum is h over lambda"), ta = cue(id, 'turned that around'), am = cue(id, 'anything with momentum'), hp = cap(id, cue(id, 'lambda equals h over p'));
	const morph = prog(f, am, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={190} at={dw} size={30} color={AMBER.ink}>light: diffraction → wave</Chip>
			<Chip x={560} y={190} at={ph} size={30} color={AMBER.ink}>light: photoelectric effect → photon</Chip>
			<FrameSvg>
				<rect x={96} y={300} width={720} height={540} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<g opacity={1 - prog(f, cm - 10, 14)}>
					<rect x={150} y={360} width={16} height={60} fill={INK} /><rect x={150} y={450} width={16} height={60} fill={INK} />
					<WaveLine x0={110} x1={150} y={435} lambda={30} amp={10} color={AMBER.stroke} width={3} />
					{[40, 80, 120, 160].map(r => <path key={r} d={`M${166 + r * 0.2},${435 - r} A${r},${r} 0 0 1 ${166 + r * 0.2},${435 + r}`} fill="none" stroke={AMBER.stroke} strokeWidth={3} />)}
					<rect x={520} y={600} width={24} height={200} fill="#b9b2a6" stroke={INK} strokeWidth={2} />
					{[0, 1, 2].map(i => <Packet key={i} x={380 + 40 * i} y={640 + 60 * i} len={50} color={AMBER.stroke} />)}
					<circle cx={600} cy={660} r={10} fill={NAVY.stroke} /><line x1={560} y1={660} x2={590} y2={660} stroke={NAVY.stroke} strokeWidth={3} />
				</g>
				{morph < 1 && f >= cm - 10 ? <g opacity={(1 - morph) * prog(f, cm - 10, 14)}><Packet x={360} y={500} len={110} color={AMBER.stroke} label="γ" size={34} /><Arrow from={[430, 500]} to={[560, 500]} color={TEAL.stroke} width={7} head={20} opacity={prog(f, cm, 12)} /></g> : null}
				<MatterDot x={420} y={680} p={1.2} phase={-f / 8} opacity={morph} />
				<OrbitWave cx={1620} cy={440} r={130} waves={3} amp={16} color={NAVY.stroke} width={4} />
				<Nucleus x={1620} y={440} r={12} />
				<rect x={900} y={690} width={920} height={200} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<MatterDot x={1300 + 160 * ((f / 90) % 1)} y={810} p={1.2} phase={-f / 8} wave={prog(f, am, 20)} len={380} />
			</FrameSvg>
			<Lbl x={300} y={420} at={cm} out={am} color={AMBER.ink} size={28} anchor="middle">no mass, but momentum</Lbl>
			<Lbl x={330} y={340} at={0} out={cm - 10} color={AMBER.ink} size={28}>diffraction: a wave</Lbl>
			<Lbl x={330} y={830} at={0} out={cm - 10} color={AMBER.ink} size={28}>photoelectric effect: photons</Lbl>
			<HandTag x={480} y={580} text="no mass, still momentum" at={cm + 20} out={am} size={30} color={AMBER.ink} />
			<Lbl x={140} y={790} at={am} color={NAVY.ink} size={28}>any particle with momentum: a wave?</Lbl>
			<div style={{position: 'absolute', left: 900, top: 310, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={pe} ageAt={pl} size={48}>p = E/c</Row>
				<Row at={hf} ageAt={pl} size={48}>&nbsp;&nbsp;= hf/c</Row>
				<Row at={fc} ageAt={pl} size={48}>&nbsp;&nbsp;= h/λ</Row>
				<Row at={pl} ageAt={ta} size={48}><AnswerBox at={pl + 6} tick={false}>photon: p = h/λ</AnswerBox></Row>
				<Row at={hp} size={56}><AnswerBox at={hp + 4}>λ = h/p</AnswerBox></Row>
			</div>
			<Lbl x={1620} y={270} at={0} color={NAVY.ink} size={28} anchor="middle">{"de Broglie's claim: electron = wave?"}</Lbl>
			<Lbl x={930} y={725} at={0} color={NAVY.ink} size={28}>{f >= am ? 'a particle with momentum: a wave too?' : 'a particle: momentum p = mv'}</Lbl>
			<HandTag x={1300} y={590} text="turn it around" at={ta} size={36} color={TEAL.ink} marks={[{kind: 'arrow', from: [1250, 540], to: [1250, 670], bend: 0.4}]} />
			<Lbl x={1260} y={545} at={hp + 4} color={NAVY.ink} size={30}>de Broglie wavelength</Lbl>
		</>
	);
};

// ---------- 3. a particle's wavelength ----------
export const S03: React.FC = () => {
	const id = 'particle-wavelength';
	const f = useCurrentFrame();
	const hm = cue(id, 'lambda equals h over m v'), fs = cue(id, 'formula sheet'), tc = cue(id, 'under a tenth of c'), rm = cue(id, 'relativistic momentum'), mm = cue(id, 'The more momentum a particle has'), sw = cap(id, cue(id, 'the shorter its wavelength'));
	const p = 0.8 + 1.6 * prog(f, mm, Math.max(30, sw - mm + 10));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={-30} ageAt={hm} size={44}>λ = h/p,  p = mv</Row>
				<Row at={hm} size={56}><AnswerBox at={hm + 6}>λ = h/mv</AnswerBox></Row>
			</div>
			<Chip x={560} y={300} at={fs} size={30} color={AMBER.ink}>HSC formula sheet</Chip>
			<HandTag x={96} y={460} text="p = mv: for v below about 0.1c" at={tc} size={34} color={GREY.ink} marks={[{kind: 'underline', x1: 330, x2: 420, y: 404}]} />
			<Chip x={96} y={520} at={rm} size={30} color={GREY.ink}>faster: relativistic momentum</Chip>
			<FrameSvg>
				<rect x={96} y={620} width={1724} height={280} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<MatterDot x={900} y={760} p={p} phase={-f / 6} len={760} />
			</FrameSvg>
			<Lbl x={120} y={660} at={0} color={INK} size={28}>a moving particle and its wave</Lbl>
			<Readout x={1300} y={190} label="momentum p (relative)" value={fx(p, 1)} color={TEAL.ink} w={500} />
			<Readout x={1300} y={330} label="wavelength λ (relative)" value={fx(1 / p, 2)} color={NAVY.ink} w={500} />
			<HandTag x={1220} y={860} text="more momentum → shorter λ" at={mm + 20} size={34} color={TEAL.ink} />
		</>
	);
};

// ---------- 4. why nobody had noticed (the steel ball) ----------
const LAD4 = {x: 1640, y0: 230, y1: 880, lo: -35, hi: -8};
export const S04: React.FC = () => {
	const id = 'steel-ball';
	const f = useCurrentFrame();
	const sb = cue(id, 'Take a fifty gram steel ball'), oz = cue(id, 'over zero point zero five zero'), mt = cue(id, 'six point six times ten to the minus thirty three metres'), fp = cue(id, 'far smaller than a proton'), ng = cue(id, 'No gap is ever that narrow'), nd = cap(id, cue(id, 'never shows diffraction'));
	const roll = (f / 30) * 40;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={96} y1={520} x2={560} y2={520} stroke={INK} strokeWidth={4} />
				<LPlate spec={STEEL_BALL} p={{x: 150 + (roll % 160), y: 520 - 200, w: 200}} />
				<Arrow from={[350 + (roll % 160), 420]} to={[460 + (roll % 160), 420]} color={TEAL.stroke} width={7} head={20} />
				<SizeLadder x={LAD4.x} y0={LAD4.y0} y1={LAD4.y1} lo={LAD4.lo} hi={LAD4.hi} marks={[{v: 1e-10, label: 'atom ≈ 10⁻¹⁰ m'}, {v: 1e-15, label: 'proton ≈ 10⁻¹⁵ m', color: '#b8322a'}, {v: BALL_LAM, label: "ball's λ ≈ 10⁻³³ m", color: GREY.ink, o: prog(f, fp, 14)}]} />
				{f >= ng ? <g opacity={prog(f, ng, 12)}>
					<rect x={96} y={760} width={30} height={60} fill={INK} /><rect x={96} y={860} width={30} height={60} fill={INK} />
					<WaveLine x0={130} x1={520} y={840} lambda={8} amp={6} color={GREY.stroke} width={3} />
				</g> : null}
			</FrameSvg>
			<Lbl x={96} y={560} at={sb} color={GREY.ink} size={28}>steel ball: 50 g, 2.0 m s⁻¹</Lbl>
			<Strip x={640} y={190} at={0} size={34}>{"Find the ball's de Broglie wavelength"}</Strip>
			<Strip x={640} y={270} at={0} size={34}>λ = h/mv</Strip>
			<Givens x={640} y={350} w={900} at={0} size={30} lines={['m = 0.050 kg, v = 2.0 m s⁻¹ (ball)', 'h = 6.626 × 10⁻³⁴ J s (data sheet)']} />
			<div style={{position: 'absolute', left: 640, top: 500}}><Row at={oz} size={44}>{f >= mt ? <AnswerBox at={mt}>{`λ = 6.626 × 10⁻³⁴ / (0.050 × 2.0) = ${sci(BALL_LAM, 1)} m`}</AnswerBox> : 'λ = 6.626 × 10⁻³⁴ / (0.050 × 2.0)'}</Row></div>
			<CrossedChip x={640} y={600} at={mt + 20} crossAt={mt + 40} size={28} caption="grams → kg first">{`m = 50 → λ = ${sci(BALL_SLIP, 1)} m`}</CrossedChip>
			<HandTag x={LAD4.x - 400} y={(sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, 1e-15) + sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, BALL_LAM)) / 2} text="10¹⁸ times smaller" at={fp + 20} size={32} color={GREY.ink} marks={[{kind: 'brace', x: LAD4.x - 30, y1: sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, 1e-15), y2: sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, BALL_LAM), facing: 'left'}]} />
			<Lbl x={LAD4.x} y={LAD4.y0 - 24} at={0} color={INK} size={26} anchor="middle">size (m, log scale)</Lbl>
			<Lbl x={560} y={790} at={ng} color={INK} size={28}>no gap is that narrow: the wave passes straight on</Lbl>
			<CrossedChip x={560} y={840} at={nd} crossAt={nd + 8} size={28}>diffraction of the ball</CrossedChip>
		</>
	);
};

// ---------- 5. an electron's wavelength ----------
export const S05: React.FC = () => {
	const id = 'electron-wavelength';
	const f = useCurrentFrame();
	const te = cue(id, 'Now take an electron'), mt = cue(id, 'three point three one times ten to the minus ten metres'), sa = cue(id, 'the spacing of atoms'), wd = cue(id, 'Waves diffract strongly'), gr = cap(id, cue(id, 'act like a diffraction grating for electrons'));
	const cr = prog(f, gr - 30, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={190} at={0} size={30}>{`kept: ball: λ = ${sci(BALL_LAM, 1)} m`}</Strip>
			<Strip x={96} y={260} at={te} size={34}>{"Find an electron's de Broglie wavelength"}</Strip>
			<Givens x={96} y={340} w={1000} at={te} size={30} lines={['v = 2.2 × 10⁶ m s⁻¹ (electron)', 'mₑ = 9.109 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J s (data sheet)']} />
			<div style={{position: 'absolute', left: 96, top: 500}}><Row at={mt - 20} size={44}>{f >= mt ? <AnswerBox at={mt}>{`λ = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × 2.2 × 10⁶) = ${sci(E_LAM, 2)} m`}</AnswerBox> : 'λ = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × 2.2 × 10⁶)'}</Row></div>
			<FrameSvg>
				<SizeLadder x={LAD4.x} y0={LAD4.y0} y1={LAD4.y1} lo={LAD4.lo} hi={LAD4.hi} marks={[{v: 1e-10, label: 'atom ≈ 10⁻¹⁰ m'}, {v: 1e-15, label: 'proton ≈ 10⁻¹⁵ m', color: '#b8322a'}, {v: BALL_LAM, label: "ball's λ", color: GREY.ink}, {v: E_LAM, label: "electron's λ", color: TEAL.ink, side: 'left', o: prog(f, sa, 14)}]} />
				<g opacity={cr}><CrystalRows x={180} y={700} cols={12} rows={3} s={70} r={22} /></g>
				<MatterDot x={f < gr - 30 ? 420 + 300 * ((f / 120) % 1) : 120 + 400 * prog(f, gr - 30, 40)} y={f < gr - 30 ? 760 : 650} p={1.6} phase={-f / 6} len={f < gr - 30 ? 320 : 200} />
			</FrameSvg>
			<HandTag x={LAD4.x - 420} y={sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, 1e-10) + 50} text="≈ atom spacing" at={sa + 10} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: LAD4.x, cy: sizeY(LAD4.y0, LAD4.y1, LAD4.lo, LAD4.hi, 1e-10) + 2, rx: 30, ry: 26}]} />
			<Chip x={96} y={600} at={wd} out={gr - 30} size={30} color={INK}>strong diffraction when gap ≈ λ</Chip>
			<Lbl x={96} y={860} at={0} out={gr - 30} color={NAVY.ink} size={28}>an electron at 2.2 × 10⁶ m s⁻¹ and its wave</Lbl>
			<Lbl x={LAD4.x} y={LAD4.y0 - 24} at={0} color={INK} size={26} anchor="middle">size (m, log scale)</Lbl>
			<Lbl x={180} y={940} at={gr - 20} color={INK} size={28}>rows of atoms: a grating made by nature</Lbl>
		</>
	);
};

// ---------- 6. Davisson and Germer's peak ----------
export const DG6: DG = {ox: 640, oy: 760, arm: 380, s: 1};
export const S06: React.FC = () => {
	const id = 'davisson-germer';
	const f = useCurrentFrame();
	const fb = cue(id, 'fired a beam of electrons'), sw = cue(id, 'set by the wavelength'), pk = cue(id, 'a strong peak at fifty degrees'), gw = cap(id, cue(id, 'what a grating does with waves'));
	const th = f < pk ? 0 : kf(f, [[pk, 5], [pk + 50, 85], [pk + 80, 50]]);
	const grow = f < pk ? 0 : prog(f, pk, 70);
	const mk = f < sw ? -1 : kf(f, [[sw, 5], [sw + 40, 50]]);
	const t = (mk * Math.PI) / 180;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DGSchematic g={DG6} theta={f < pk ? 30 : th} beam={prog(f, fb, 12)} t={f} />
				<PolarLobe cx={DG6.ox} cy={DG6.oy} r0={30} amp={300} peak={50} grow={grow} color={TEAL.stroke} />
				{mk >= 0 && f < pk ? <g><line x1={DG6.ox} y1={DG6.oy} x2={DG6.ox + (DG6.arm + 40) * Math.sin(t)} y2={DG6.oy - (DG6.arm + 40) * Math.cos(t)} stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="10 8" /><text x={DG6.ox + (DG6.arm + 70) * Math.sin(t)} y={DG6.oy - (DG6.arm + 70) * Math.cos(t)} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: TEAL.ink}}>?</text></g> : null}
			</FrameSvg>
			<Lbl x={1180} y={230} at={0} color={INK} size={30}>Davisson and Germer, 1927</Lbl>
			<Readout x={1180} y={290} label="detector angle θ (from the beam)" value={f < pk ? '·' : `${fx(th)}°`} color={TEAL.ink} w={560} />
			<HandTag x={1180} y={460} text="waves: one strongest angle" at={sw + 10} out={pk} size={32} color={TEAL.ink} />
			<Lbl x={1180} y={480} at={pk + 80} color={TEAL.ink} size={34}>θ = 50°: measured peak</Lbl>
			<HandTag x={0} y={0} at={pk + 90} color={TEAL.stroke} marks={[{kind: 'circle', cx: DG6.ox + 330 * Math.sin((50 * Math.PI) / 180), cy: DG6.oy - 330 * Math.cos((50 * Math.PI) / 180), rx: 50, ry: 44}]} />
			<Chip x={1180} y={560} at={gw} size={30} color={INK}>grating + waves → peaks at set angles</Chip>
			<HandTag x={1180} y={680} text="is it h/mv's angle?" at={gw + 10} size={34} color={TEAL.ink} />
		</>
	);
};
