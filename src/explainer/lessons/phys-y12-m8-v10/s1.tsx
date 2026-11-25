// Scenes 1 to 7: the hook (last time's orbiting electron; what should it do? the painted discharge tube's sharp lines),
// radiating costs energy (an orbit shedding rose wavelets, an energy bar draining), the spiral and failure 1 (the
// classical spiral on the field motion engine, a slowed clock to 1.6 × 10⁻¹¹ s, the hydrogen cell), failure 2 (the live
// spectrum sweep: radius, orbit frequency and emitted wavelength read from the run, a smear across the strip against
// hydrogen's sharp lines; the painted tube, supply and spectroscope), what Rutherford got right, Bohr's stationary
// states and the energy levels.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {Arrow} from '../../physics/light/em';
import {wlColor} from '../../physics/light/spectrum';
import {HLevels, runIndex, spiralPath, yOf} from '../../physics/atom/bohr';
import type {LevelsGeom} from '../../physics/atom/bohr';
import {HANDOFF09_END, HandoffBoard09, M8V09FinalFrame} from '../phys-y12-m8-v09/s3';
import {E1, HEAD, HEAD_SIZE, T_COLLAPSE, cap, cue, lineNm, orbitF, orbitNm} from './common';
import {AMBER, Elec, GREY, GlowTube, INK, LPlate, Lbl, LineStrip, NAVY, Nucleus, ORANGE, ROSE, SPECTRO, SPIRAL, SmearStrip, Supply, TEAL, VCELL, Wavelets, fx, rA0At, sci, tubeW} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
export const LINES5 = [lineNm(3), lineNm(4), lineNm(5), lineNm(6), lineNm(7)];
export const STR5 = [1, 1, 1, 1, 0.45];

// ---------- 1. hook ----------
const STRIP1 = {x: 1160, y: 800, w: 420, h: 56};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const aa = cue(id, 'always accelerating'), ac = cue(id, 'accelerating charges give out electromagnetic waves'), pred = cue(id, 'prediction'), cl = cue(id, 'Classical physics says'), dc = cue(id, "atoms don't collapse"), sl = cue(id, 'sharp lines of light');
	if (f < 1) return <M8V09FinalFrame />;
	const ff = HANDOFF09_END + f;
	const lo = 1 - prog(f, pred - 24, 16);
	const th = -0.6 - ff * 0.035, ex = 660 + 300 * Math.cos(th), ey = 570 + 300 * Math.sin(th);
	const pa = pulseOf(f, aa, 40);
	const tickAt = Math.max(dc, pred + 92);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard09 f={ff} final heading={false} chip={false} lo={lo} /></div>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 2, 18)}}><HandoffBoard09 f={ff} final heading={false} chip={false} marks={false} lo={lo} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pa > 0 ? <circle cx={ex - 70 * Math.cos(th)} cy={ey - 70 * Math.sin(th)} r={58 + 10 * pa} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={pa} /> : null}
				{f >= ac ? <Wavelets x={ex} y={ey} u={(f % 30) / 30} r1={180} opacity={(1 - prog(f, ac + 60, 20)) * prog(f, ac, 10)} /> : null}
				<Countdown start={pred} end={pred + 90} x={1100} y={230} r={40} />
				{f >= tickAt ? <Mark x={1180} y={232} at={tickAt} kind="tick" color={INK} size={30} /> : null}
				<GlowTube x={1640} y={400} h={400} glow={prog(f, sl, 16)} opacity={prog(f, sl, 14)} />
				<LineStrip x={STRIP1.x} y={STRIP1.y} w={STRIP1.w} h={STRIP1.h} lines={LINES5} strengths={STR5} opacity={prog(f, sl + 10, 14)} />
			</FrameSvg>
			<Chip x={1160} y={300} at={pred} size={32} color={INK} border={f >= dc ? INK : undefined}>stays as it is</Chip>
			<Chip x={1160} y={380} at={pred + 4} size={32} color={INK}>drifts away</Chip>
			<Chip x={1160} y={460} at={pred + 8} size={32} color={INK} border={f >= cl && f < dc ? GREY.stroke : undefined}>spirals into the nucleus</Chip>
			<Lbl x={1580} y={490} at={cl} color={GREY.ink} size={28}>classical physics</Lbl>
			<HandTag x={1160} y={580} text="observed: atoms are stable" at={dc} size={36} color={NAVY.ink} marks={[{kind: 'circle', cx: 1270, cy: 326, rx: 140, ry: 40}]} />
			<Lbl x={STRIP1.x} y={STRIP1.y - 24} at={sl + 10} color={INK} size={26}>glowing hydrogen: sharp lines</Lbl>
			<HandTag x={0} y={0} at={sl + 24} color={'#c0392b'} marks={[{kind: 'circle', cx: STRIP1.x + ((LINES5[0] - 380) / 370) * STRIP1.w, cy: STRIP1.y + STRIP1.h / 2, rx: 22, ry: 40}]} />
		</>
	);
};

// ---------- 2. radiating costs energy ----------
const C2 = {x: 620, y: 570};
const PER = 60;
export const S02: React.FC = () => {
	const id = 'radiating';
	const f = useCurrentFrame();
	const ca = cue(id, 'classical argument'), sw = cue(id, 'sends out electromagnetic waves'), ea = cue(id, 'carry energy away'), nu = cap(id, cue(id, 'closer to the nucleus'));
	const r = 280 - 50 * prog(f, nu, 40);
	const ang = (t: number) => -Math.PI / 2 + (2 * Math.PI * t) / PER;
	const ex = C2.x + r * Math.cos(ang(f)), ey = C2.y + r * Math.sin(ang(f));
	const bar = 1 - 0.35 * prog(f, ea, Math.max(40, nu + 40 - ea));
	const emits = f >= sw ? Array.from({length: 4}, (_, k) => Math.floor((f - sw) / PER) * PER + sw - k * PER).filter(t => t >= sw) : [];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={C2.x} cy={C2.y} r={r} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 10" />
				{emits.map(t => { const age = f - t, px = C2.x + r * Math.cos(ang(t)), py = C2.y + r * Math.sin(ang(t)); return <circle key={t} cx={px} cy={py} r={20 + age * 4} fill="none" stroke={ROSE.stroke} strokeWidth={4} opacity={Math.max(0, 1 - age / (4 * PER))} />; })}
				<Nucleus x={C2.x} y={C2.y} r={26} />
				<Elec x={ex} y={ey} r={18} />
				<rect x={1300} y={300} width={110} height={520} rx={10} fill="none" stroke={INK} strokeWidth={3} />
				<rect x={1300} y={300 + 520 * (1 - bar)} width={110} height={520 * bar} rx={10} fill={ORANGE.soft} stroke={ORANGE.stroke} strokeWidth={3} />
			</FrameSvg>
			<Lbl x={C2.x} y={C2.y + 70} at={0} color={INK} size={26} anchor="middle">nucleus (not to scale)</Lbl>
			<Chip x={96} y={190} at={ca} size={30} color={NAVY.ink}>classical physics: Newton and Maxwell</Chip>
			<Lbl x={1300} y={280} at={0} color={ORANGE.ink} size={28}>{"electron's energy"}</Lbl>
			<Chip x={1460} y={360} at={sw + 10} size={30} color={ROSE.ink}>f (wave) = f (orbit)</Chip>
			<HandTag x={1460} y={460} text="shaking charge → waves" at={sw + 30} size={32} color={ROSE.ink} />
			<HandTag x={1460} y={620} text="energy leaks away" at={ea + 10} size={34} color={ORANGE.ink} marks={[{kind: 'brace', x: 1420, y1: 300, y2: 300 + 520 * 0.35, facing: 'right'}]} />
			<Lbl x={96} y={900} at={nu} color={INK} size={30}>less energy: a smaller orbit, closer to the nucleus</Lbl>
		</>
	);
};

// ---------- 3. the spiral, and failure 1 ----------
const C3 = {x: 620, y: 570, k: 57.5};
export const S03: React.FC = () => {
	const id = 'spiral-stability';
	const f = useCurrentFrame();
	const mf = cue(id, 'moves faster and radiates more strongly'), sf = cue(id, 'sinks faster still'), te = cue(id, 'about ten to the minus eleven seconds'), jh = cue(id, 'a jar of hydrogen gas'), ff = cue(id, "That's the first failure"), st = cap(id, cue(id, "atoms can't be stable"));
	const run = SPIRAL();
	const u = f < mf ? 0 : prog(f, mf, Math.max(40, te + 20 - mf), t => t);
	const i = runIndex(run, u);
	const ex = C3.x + run.x[i] * C3.k, ey = C3.y - run.y[i] * C3.k;
	const sp = Math.hypot(run.vx[i], run.vy[i]);
	const vx = run.vx[i] / sp, vy = -run.vy[i] / sp;
	const done = u >= 0.999;
	const tNow = T_COLLAPSE * (run.n ? i / run.n : 0);
	const rr = rA0At(i);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{f < mf ? <circle cx={C3.x} cy={C3.y} r={4 * C3.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 10" /> : <path d={spiralPath(run, C3.x, C3.y, C3.k, u)} fill="none" stroke={NAVY.stroke} strokeWidth={3} opacity={0.9} />}
				{!done ? <Wavelets x={ex} y={ey} u={(f * Math.min(3, 0.25 * (8 / rr) ** 1.5) / 20) % 1} r0={20} r1={90} n={f < sf ? 2 : 4} /> : null}
				<Nucleus x={C3.x} y={C3.y} r={done ? 30 : 26} />
				{!done ? <Elec x={ex} y={ey} r={16} /> : null}
				{!done && f >= mf ? <Arrow from={[ex + 20 * vx, ey + 20 * vy]} to={[ex + (40 + 26 * Math.min(4, sp * 2)) * vx, ey + (40 + 26 * Math.min(4, sp * 2)) * vy]} color={TEAL.stroke} width={5} head={14} /> : null}
				<LPlate spec={VCELL} p={{x: 1290, y: 600, w: 480}} opacity={prog(f, jh, 14)} />
			</FrameSvg>
			<Lbl x={C3.x} y={C3.y + 320} at={0} color={GREY.ink} size={26} anchor="middle">classical prediction (time slowed)</Lbl>
			<Readout x={1290} y={200} label="time t (classical)" value={`${f < mf ? '0' : sci(Math.max(1e-14, tNow), 1)} s`} color={GREY.ink} w={480} />
			<HandTag x={96} y={260} text="faster and faster" at={sf + 10} size={34} color={GREY.ink} />
			<HandTag x={0} y={0} at={te + 20} color={GREY.stroke} marks={[{kind: 'circle', cx: 1530, cy: 270, rx: 260, ry: 70}]} />
			<Lbl x={1290} y={360} at={te + 20} color={INK} size={30}>under a ten-billionth of a second</Lbl>
			<Lbl x={1530} y={890} at={jh} color={INK} size={28} anchor="middle">H₂ gas: stable for years</Lbl>
			<div style={{position: 'absolute', left: 1290, top: 430}}><Row at={ff} size={40}><AnswerBox at={ff + 6}>failure 1: stability</AnswerBox></Row></div>
			<CrossedChip x={1290} y={510} at={st} crossAt={st + 10} size={28}>{`Rutherford's atom lasts 10⁻¹¹ s`}</CrossedChip>
		</>
	);
};

// ---------- 4. failure 2: the light ----------
const SP4 = {x: 260, y: 360, k: 30};
const PS = {x: 1030, y: 250, w: 670, h: 70, band: 110};
const OS = {x: 1030, y: 420, w: 670, h: 70};
export const S04: React.FC = () => {
	const id = 'line-failure';
	const f = useCurrentFrame();
	const rs = cue(id, 'its orbit frequency rises smoothly'), cs = cue(id, 'a continuous smear of colour'), gh = cue(id, 'glowing hydrogen gives sharp lines'), fb = cue(id, 'four bright visible ones'), sm = cue(id, 'gives the same lines'), al = cap(id, cue(id, 'a line spectrum at all'));
	const run = SPIRAL();
	const u = f < rs ? 0 : prog(f, rs, Math.max(60, cs + 40 - rs), t => t);
	const i = runIndex(run, u), ra = rA0At(i), nm = orbitNm(ra), fr = orbitF(ra);
	const ex = SP4.x + run.x[i] * SP4.k, ey = SP4.y - run.y[i] * SP4.k;
	const sw = u > 0 ? (nm > 750 ? '#b9b2a6' : nm < 380 ? '#b9b2a6' : wlColor(nm)) : '#b9b2a6';
	const region = nm > 750 ? ' (IR)' : nm < 380 ? ' (UV)' : '';
	const sp = (y0: number) => <SmearStrip x={PS.x} y={y0} w={PS.w} h={PS.h} band={PS.band} fromNm={u > 0 ? nm : 9999} ir={u > 0 ? 1 : 0} uv={u > 0 && nm < 380 ? Math.min(1, (380 - nm) / 200) : 0} />;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={spiralPath(run, SP4.x, SP4.y, SP4.k, Math.max(0.001, u))} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} />
				<Nucleus x={SP4.x} y={SP4.y} r={14} />
				<Elec x={ex} y={ey} r={12} />
				{sp(PS.y)}
				<rect x={860} y={PS.y} width={70} height={PS.h} rx={8} fill={sw} stroke={INK} strokeWidth={2.5} />
				<LineStrip x={OS.x} y={OS.y} w={OS.w} h={OS.h} lines={LINES5} strengths={STR5} labels={['656', '486', '434', '410', '']} opacity={prog(f, fb, 14)} />
				<Supply at={{x: 96, y: 690, w: 300}} opacity={prog(f, gh, 14)} />
				<GlowTube x={450} y={600} h={300} glow={prog(f, gh, 16)} opacity={prog(f, gh, 14)} />
				<LPlate spec={SPECTRO} p={{x: 470 + tubeW(300), y: 700, w: 400}} opacity={prog(f, gh + 6, 14)} />
				{f >= sm ? [0, 1, 2].map(k => <LineStrip key={k} x={OS.x + 120} y={600 + k * 62} w={OS.w - 120} h={36} lines={LINES5} strengths={STR5} opacity={prog(f, sm + 6 * k, 12)} />) : null}
				{f >= al ? <g opacity={prog(f, al, 12)} stroke={GREY.stroke} strokeWidth={8}><line x1={PS.x - 20} y1={PS.y - 10} x2={PS.x + PS.w + 20} y2={PS.y + PS.h + 10} /><line x1={PS.x - 20} y1={PS.y + PS.h + 10} x2={PS.x + PS.w + 20} y2={PS.y - 10} /></g> : null}
			</FrameSvg>
			<Readout x={460} y={190} label="r (orbit radius)" value={`${fx(ra, 1)} a₀`} color={ROSE.ink} w={380} size={44} />
			<Readout x={460} y={300} label="orbit frequency" value={`${sci(fr, 1)} Hz`} color={ROSE.ink} w={380} size={44} />
			<Readout x={460} y={410} label="λ emitted" value={`${nm >= 100 ? fx(nm) : fx(nm)} nm${region}`} color={INK} w={380} size={44} />
			<Lbl x={860} y={PS.y - 20} at={0} color={INK} size={26}>colour</Lbl>
			<Lbl x={PS.x} y={PS.y - 20} at={0} color={INK} size={26}>predicted: classical spiral (380 to 750 nm visible)</Lbl>
			<HandTag x={PS.x} y={PS.y + PS.h + 40} text="predicted: every colour, smoothly" at={cs + 10} size={30} color={ROSE.ink} />
			<Lbl x={OS.x} y={OS.y - 20} at={fb} color={INK} size={26}>observed: sharp lines (four bright; earlier video)</Lbl>
			<Lbl x={96} y={640} at={gh} color={INK} size={26}>supply, hydrogen tube, spectroscope</Lbl>
			{['lab', 'star', 'another lab'].map((t, k) => <Lbl key={t} x={OS.x} y={618 + k * 62} at={sm + 6 * k} color={INK} size={26}>{t}</Lbl>)}
			<HandTag x={0} y={0} at={sm + 24} color={INK} marks={[{kind: 'brace', x: OS.x + OS.w + 10, y1: 600, y2: 760, facing: 'right'}]} />
			<div style={{position: 'absolute', left: 1030, top: 820}}><Row at={al} size={40}><AnswerBox at={al + 6}>failure 2: line spectra</AnswerBox></Row></div>
		</>
	);
};

// ---------- 5. what Rutherford got right ----------
export const S05: React.FC = () => {
	const id = 'rutherford-verdict';
	const f = useCurrentFrame();
	const nr = cue(id, 'got the nucleus right'), ce = cue(id, "couldn't explain the electrons"), ch = cap(id, cue(id, 'had to change'));
	const th = -Math.PI / 2 + f * 0.06;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', gap: 30}}>
				<Row at={-30} size={40}><AnswerBox at={-30}>failure 1: stability</AnswerBox></Row>
				<Row at={-30} size={40}><AnswerBox at={-30}>failure 2: line spectra</AnswerBox></Row>
			</div>
			<FrameSvg>
				<circle cx={560} cy={590} r={240} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 10" />
				<Nucleus x={560} y={590} r={30} />
				<Elec x={560 + 240 * Math.cos(th)} y={590 + 240 * Math.sin(th)} r={18} />
				{f >= nr ? <Mark x={640} y={560} at={nr} kind="tick" color={INK} size={46} /> : null}
				{f >= ce ? <Mark x={800} y={430} at={ce} kind="cross" color={GREY.stroke} size={56} /> : null}
				<GlowTube x={1500} y={330} h={520} />
			</FrameSvg>
			<Lbl x={560} y={880} at={0} color={INK} size={28} anchor="middle">{"Rutherford's atom"}</Lbl>
			<Lbl x={680} y={540} at={nr} color={RED_INK} size={30}>nucleus: right</Lbl>
			<Lbl x={860} y={420} at={ce} color={GREY.ink} size={30}>electrons: classical physics fails</Lbl>
			<Lbl x={1500 + tubeW(520) + 20} y={600} at={0} color={INK} size={26}>sharp lines</Lbl>
			<Chip x={900} y={700} at={ch} size={34} color={INK} border={INK}>new rules needed for electrons</Chip>
			<HandTag x={900} y={820} text="new rules" at={ch + 10} size={40} color={INK} />
		</>
	);
};
const RED_INK = '#b8322a';

// ---------- 6. Bohr's first postulate: stationary states ----------
const C6 = {x: 560, y: 590};
export const RADII = [70, 150, 230, 310] as const;
export const S06: React.FC = () => {
	const id = 'stationary-states';
	const f = useCurrentFrame();
	const nb = cue(id, 'Niels Bohr changed the rules'), ps = cue(id, 'A postulate is a starting assumption'), ao = cue(id, 'certain allowed orbits'), fe = cue(id, 'each with a fixed energy'), nr = cue(id, "it doesn't radiate at all"), bw = cue(id, "Bohr didn't explain why"), th = cap(id, cue(id, "doesn't happen there"));
	const hatch = prog(f, ao, 16);
	const a = -Math.PI / 2 + f * 0.09;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><pattern id="m8v10-hatch" width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={14} stroke="#cfc8bb" strokeWidth={5} /></pattern></defs>
				{hatch > 0 ? RADII.slice(0, 3).map((r, i) => <path key={i} opacity={hatch} d={`M${C6.x + r + 8},${C6.y} A${r + 8},${r + 8} 0 1 0 ${C6.x - r - 8},${C6.y} A${r + 8},${r + 8} 0 1 0 ${C6.x + r + 8},${C6.y} M${C6.x + RADII[i + 1] - 8},${C6.y} A${RADII[i + 1] - 8},${RADII[i + 1] - 8} 0 1 1 ${C6.x - RADII[i + 1] + 8},${C6.y} A${RADII[i + 1] - 8},${RADII[i + 1] - 8} 0 1 1 ${C6.x + RADII[i + 1] - 8},${C6.y} Z`} fill="url(#m8v10-hatch)" fillRule="evenodd" />) : null}
				{RADII.map((r, i) => <circle key={i} cx={C6.x} cy={C6.y} r={r} fill="none" stroke={NAVY.stroke} strokeWidth={4} />)}
				<Nucleus x={C6.x} y={C6.y} r={20} />
				<Elec x={C6.x + RADII[0] * Math.cos(a)} y={C6.y + RADII[0] * Math.sin(a)} r={14} />
			</FrameSvg>
			{RADII.map((r, i) => <Lbl key={i} x={C6.x + r * 0.71 + 8} y={C6.y - r * 0.71 - 8} at={fe + 4 * i} color={NAVY.ink} size={28}>{`E${'₁₂₃₄'[i]}`}</Lbl>)}
			<Lbl x={C6.x} y={C6.y + 360} at={0} color={GREY.ink} size={26} anchor="middle">allowed orbits n = 1 to 4 (not to scale)</Lbl>
			<Lbl x={1080} y={230} at={nb} color={INK} size={32}>Bohr, 1913</Lbl>
			<Chip x={1080} y={280} at={ps} size={30} color={INK}>postulate: a starting assumption, not derived</Chip>
			<Lbl x={1080} y={410} at={ao} color={NAVY.ink} size={30}>only these orbits allowed</Lbl>
			<HandTag x={1080} y={470} text="only these" at={ao + 20} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: C6.x, cy: C6.y, rx: RADII[0] + 18, ry: RADII[0] + 18}]} />
			<Lbl x={1080} y={540} at={fe} color={NAVY.ink} size={30}>each with a fixed energy</Lbl>
			<div style={{position: 'absolute', left: 1080, top: 590}}><Row at={nr} size={40}><AnswerBox at={nr + 6}>stationary state: no radiation</AnswerBox></Row></div>
			<HandTag x={1080} y={720} text="no reason given" at={bw} size={34} color={GREY.ink} />
			<Chip x={1080} y={790} at={th} size={30} color={ROSE.ink}>classical radiation: switched off (assumed) ✗</Chip>
		</>
	);
};

// ---------- 7. energy levels ----------
export const LAD: LevelsGeom = {x: 760, w: 460, top: 240, bot: 820};
export const S07: React.FC = () => {
	const id = 'energy-levels';
	const f = useCurrentFrame();
	const el = cue(id, 'Each allowed orbit is an energy level'), gs = cue(id, 'the ground state'), xs = cue(id, 'excited states'), ng = cue(id, 'The energies are negative'), jf = cue(id, 'A just-free electron has zero energy'), mt = cue(id, 'minus thirteen point six electron volts'), at = cap(id, cue(id, 'to ionise the atom'));
	const un = prog(f, el, 30);
	const y1 = yOf(LAD, 1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${-340 * un} 0) translate(560 590) scale(${1 - 0.45 * un}) translate(-560 -590)`}>{RADII.map((r, i) => <circle key={i} cx={560} cy={590} r={r} fill="none" stroke={NAVY.stroke} strokeWidth={4} />)}<Nucleus x={560} y={590} r={20} /></g>
				<HLevels g={LAD} levels={[1, 2, 3, 4, 5]} color={NAVY.stroke} label={n => (n <= 3 ? `n = ${n}` : '')} draw={un} size={28} />
				{f >= ng ? <g opacity={prog(f, ng, 12)}><line x1={640} y1={y1 + 30} x2={640} y2={LAD.top - 40} stroke={INK} strokeWidth={4} /><path d={`M640,${LAD.top - 52} l-10,18 l20,0 Z`} fill={INK} /></g> : null}
				{f >= jf ? <Elec x={LAD.x + 330} y={LAD.top - 46} r={14} opacity={prog(f, jf, 12)} /> : null}
				{f >= at ? <Arrow from={[LAD.x + 230, y1 - 10]} to={[LAD.x + 230, LAD.top + 12]} color={AMBER.stroke} width={7} head={20} opacity={prog(f, at, 10)} /> : null}
			</FrameSvg>
			<Lbl x={620} y={LAD.top - 70} at={ng} color={INK} size={28} anchor="end">E (eV)</Lbl>
			<Lbl x={625} y={LAD.top + 8} at={ng} color={INK} size={28} anchor="end">0</Lbl>
			<Lbl x={LAD.x + LAD.w + 20} y={y1} at={gs} color={NAVY.ink} size={30}>ground state</Lbl>
			<Lbl x={LAD.x + LAD.w + 20} y={yOf(LAD, 3)} at={xs} color={NAVY.ink} size={30}>excited states (n &gt; 1)</Lbl>
			<HandTag x={LAD.x + LAD.w + 20} y={yOf(LAD, 2) + 6} text="bound: below zero" at={ng + 16} size={32} color={NAVY.ink} marks={[{kind: 'brace', x: LAD.x - 150, y1: LAD.top, y2: y1, facing: 'left'}]} />
			<Lbl x={LAD.x + 360} y={LAD.top - 40} at={jf + 6} color={NAVY.ink} size={28}>free: E ≥ 0</Lbl>
			<Lbl x={LAD.x + LAD.w + 20} y={y1 + 46} at={mt} color={NAVY.ink} size={30}>{`E₁ = ${fx(E1, 1)} eV`}</Lbl>
			<Lbl x={LAD.x - 14} y={yOf(LAD, 5) - 4} at={el} color={NAVY.ink} size={24} anchor="end">4, 5</Lbl>
			<Lbl x={300} y={880} at={el} color={GREY.ink} size={26} anchor="middle">orbits → levels</Lbl>
			<div style={{position: 'absolute', left: 1420, top: 620}}><Row at={at} size={36}><AnswerBox at={at + 4}>ionisation energy: +13.6 eV</AnswerBox></Row></div>
			<CrossedChip x={1420} y={740} at={at} crossAt={at + 6} size={28} caption="energy you add: positive">ionisation energy = −13.6 eV</CrossedChip>
		</>
	);
};
