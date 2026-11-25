// Scenes 7 to 12: stage 1 (the electrons' speed from 54 V), stage 2 (h/mv against d sin θ: 1.67 and 1.65 × 10⁻¹⁰ m),
// rings and the school tube (G. P. Thomson's foil; the painted diffraction tube and supply; a live voltage slider with
// V, v, λ and the inner ring radius; rings from the waves engine shrinking in a face-on screen view), why it is evidence
// (waves add and cancel; the matching number; spots from the chance engine building the rings), back to the atom (one
// wavelength fits the ground orbit) and Bohr's rule explained (2πr = nλ; an orbit that does not fit cancels itself).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout, WaveLine} from '../../physics/atom/universe';
import {Arrow} from '../../physics/light/em';
import {CrystalRows, PolarLobe, RingScreen, ringSpotRun, ringSpots} from '../../physics/atom/matterwave';
import {OrbitWave} from '../../physics/atom/bohr';
import {supplyPts} from '../../physics/electromagnetism/plates';
import {trialsShown} from '../../sims/chance';
import {lazy} from '../../sims';
import {CIRC1, DG_EK, DG_FRAC_C, DG_LAM, DG_MEAS, DG_RAD_SLIP, DG_SPEED3, E_LAM, GRAPHITE_D, HEAD, HEAD_SIZE, TUBE_L, cap, cue, tubeLam, tubeRmm, tubeV} from './common';
import {DGSchematic, GREEN_C, GREY, Givens, INK, Lbl, NAVY, Nucleus, Strip, Supply, TEAL, Tube, fx, sci, tubeAt, tubeH} from './parts';
import {ringRadius} from '../../physics/atom/matterwave';

// ---------- 7. stage 1: the electrons' speed ----------
export const S07: React.FC = () => {
	const id = 'dg-speed';
	const f = useCurrentFrame();
	const cn = cue(id, "Let's check the numbers"), fe = cue(id, 'fifty four electron volts'), es = cue(id, 'eight point six five'), ke = cue(id, 'Kinetic energy is half m v squared'), sp = cap(id, cue(id, 'four point three six times ten to the six'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DGSchematic g={{ox: 300, oy: 520, arm: 180, s: 0.5}} theta={50} beam={1} t={f} labels={false} />
				<PolarLobe cx={300} cy={520} r0={14} amp={150} peak={50} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={96} y={640} at={0} color={GREY.ink} size={26}>peak at 50°, 54 V electrons</Lbl>
			<Strip x={640} y={190} at={cn} size={34}>Does λ = h/mv match the peak?</Strip>
			<Strip x={640} y={265} at={cn} size={32}>E<sub>k</sub> = qV = ½mv²,  λ = h/mv,  d sin θ = mλ</Strip>
			<Givens x={640} y={340} w={1180} at={cn} size={28} lines={['V = 54 V (gun)', 'θ = 50°, d = 2.15 × 10⁻¹⁰ m (crystal rows)', 'mₑ = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C, h = 6.626 × 10⁻³⁴ J s (data sheet)']} />
			<div style={{position: 'absolute', left: 640, top: 540, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={fe} ageAt={ke} size={52}>{`E_k = qV = (1.602 × 10⁻¹⁹)(54) = ${sci(DG_EK, 2)} J`}</Row>
				<Row at={sp - 10} size={44}><AnswerBox at={sp}>{`v = √(2E_k/m) = √(2 × ${sci(DG_EK, 2)} / (9.109 × 10⁻³¹)) = ${sci(DG_SPEED3, 2)} m s⁻¹`}</AnswerBox></Row>
			</div>
			<HandTag x={96} y={760} text="eV → J: × 1.602 × 10⁻¹⁹" at={es} size={30} color={GREY.ink} />
			<HandTag x={96} y={850} text={`${fx(DG_FRAC_C * 100, 1)}% of c: p = mv is fine`} at={sp + 6} size={30} color={GREY.ink} />
		</>
	);
};

// ---------- 8. stage 2: prediction against measurement ----------
const CR = {x: 1260, y: 420, s: 80};
export const S08: React.FC = () => {
	const id = 'dg-wavelength';
	const f = useCurrentFrame();
	const hm = cue(id, 'lambda equals h over m v'), sx = cue(id, 'one point six seven'), tr = cue(id, 'treat the rows of nickel atoms as a grating'), ds = cue(id, 'So d sine theta gives'), sf = cue(id, 'one point six five'), pc = cap(id, cue(id, 'agree to about one per cent'));
	const t50 = (50 * Math.PI) / 180;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={190} at={0} size={32}>{`kept: v = ${sci(DG_SPEED3, 2)} m s⁻¹`}</Strip>
			<div style={{position: 'absolute', left: 96, top: 290, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={hm} ageAt={tr} size={44}>{`λ = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × ${sci(DG_SPEED3, 2)})`}</Row>
				<Row at={sx} size={44}><AnswerBox at={sx + 4}>{`= ${sci(DG_LAM, 2)} m (predicted)`}</AnswerBox></Row>
				<Row at={ds} ageAt={pc} size={40}>λ = d sin θ = 2.15 × 10⁻¹⁰ × sin 50° (first order, m = 1)</Row>
				<Row at={sf} size={44}><AnswerBox at={sf + 4}>{`= ${sci(DG_MEAS, 2)} m (measured)`}</AnswerBox></Row>
			</div>
			<FrameSvg>
				<g opacity={prog(f, tr, 14)}>
					<CrystalRows x={CR.x} y={CR.y} cols={7} rows={2} s={CR.s} r={22} />
					{[0, 1, 2].map(i => <line key={i} x1={CR.x + i * CR.s * 2} y1={CR.y} x2={CR.x + i * CR.s * 2 + 220 * Math.sin(t50)} y2={CR.y - 220 * Math.cos(t50)} stroke={TEAL.stroke} strokeWidth={4} />)}
					<line x1={CR.x} y1={CR.y + 60} x2={CR.x + CR.s} y2={CR.y + 60} stroke={INK} strokeWidth={3} />
					<line x1={CR.x} y1={CR.y + 50} x2={CR.x} y2={CR.y + 70} stroke={INK} strokeWidth={3} /><line x1={CR.x + CR.s} y1={CR.y + 50} x2={CR.x + CR.s} y2={CR.y + 70} stroke={INK} strokeWidth={3} />
					<line x1={CR.x + 4 * CR.s} y1={CR.y} x2={CR.x + 4 * CR.s} y2={CR.y - 200} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="8 6" />
				</g>
				{f >= pc ? <g opacity={prog(f, pc, 12)}><path d={`M560,${760} Q860,700 1160,760`} fill="none" stroke={GREEN_C.stroke} strokeWidth={5} /></g> : null}
			</FrameSvg>
			<Lbl x={CR.x} y={CR.y + 110} at={tr} color={INK} size={28}>d = 2.15 × 10⁻¹⁰ m (rows of nickel atoms)</Lbl>
			<Lbl x={CR.x + 4 * CR.s + 60} y={CR.y - 130} at={tr} color={TEAL.ink} size={28}>50°</Lbl>
			<HandTag x={1040} y={410} text="de Broglie" at={sx + 10} size={32} color={NAVY.ink} />
			<HandTag x={1040} y={560} text="from the peak" at={sf + 10} size={32} color={TEAL.ink} />
			<CrossedChip x={1220} y={620} at={sf + 20} crossAt={sf + 36} size={26} caption="calculator in degrees">{`sin 50 in radians → λ = ${sci(DG_RAD_SLIP, 1)} m`}</CrossedChip>
			<div style={{position: 'absolute', left: 300, top: 790, display: 'flex', gap: 40, alignItems: 'center'}}>
				<Row at={pc} size={40}><AnswerBox at={pc + 4}>{`${sci(DG_LAM, 2)} m`}</AnswerBox></Row>
				<Row at={pc} size={40}>vs</Row>
				<Row at={pc} size={40}><AnswerBox at={pc + 4}>{`${sci(DG_MEAS, 2)} m`}</AnswerBox></Row>
			</div>
			<HandTag x={1300} y={830} text="agree within about 1%" at={pc + 6} size={34} color={GREEN_C.ink} />
		</>
	);
};

// ---------- 9. rings, and a family surprise (the school tube, live voltage slider) ----------
const TP = {x: 1040, y: 300, w: 780};
const SV = {cx: 720, cy: 500, R: 170};
const PX_PER_MM = SV.R / 30;
export const ringsPx = (kv: number) => [tubeRmm(kv), ringRadius(0.123e-9, tubeLam(kv), TUBE_L) * 1000].map(r => r * PX_PER_MM);
export const S09: React.FC = () => {
	const id = 'rings-and-tube';
	const f = useCurrentFrame();
	const gt = cue(id, 'George Thomson'), jj = cue(id, 'His father, J J Thomson'), st = cue(id, 'A school electron diffraction tube'), br = cue(id, 'make bright rings'), td = cue(id, 'teacher demonstration'), tu = cue(id, 'Turn up the voltage'), fm = cue(id, 'Faster electrons have more momentum'), pr = cap(id, cue(id, 'just as h over m v predicts'));
	const kv = f < tu ? 3 : kf(f, [[tu, 3], [tu + 40, 4], [tu + 60, 4], [fm, 5]]);
	const lit = prog(f, br, 16);
	const g = tubeAt(TP, 'graphite'), gun = tubeAt(TP, 'gun'), scr = tubeAt(TP, 'screen');
	const sp = supplyPts({x: 1120, y: 720, w: 340});
	const pb = tubeAt(TP, 'postBlack'), prd = tubeAt(TP, 'postRed');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={300} height={260} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
				<rect x={240} y={230} width={10} height={200} fill="#c9b27a" stroke={INK} strokeWidth={1.5} opacity={prog(f, gt, 12)} />
				{f >= gt ? <g opacity={prog(f, gt, 12)}><line x1={110} y1={330} x2={236} y2={330} stroke={NAVY.stroke} strokeWidth={5} />{[26, 50].map(r => <ellipse key={r} cx={340} cy={330} rx={r * 0.35} ry={r} fill="none" stroke={TEAL.stroke} strokeWidth={4} />)}</g> : null}
				<Tube p={TP} />
				<Supply at={{x: 1120, y: 720, w: 340}} reading={<>{fx(kv, 1)} kV</>} />
				<path d={`M${sp.neg[0]},${sp.neg[1]} C${sp.neg[0]},${sp.neg[1] - 60} ${pb[0]},${pb[1] + 80} ${pb[0]},${pb[1]}`} fill="none" stroke={INK} strokeWidth={4} />
				<path d={`M${sp.pos[0]},${sp.pos[1]} C${sp.pos[0]},${sp.pos[1] - 60} ${prd[0]},${prd[1] + 80} ${prd[0]},${prd[1]}`} fill="none" stroke="#c0392b" strokeWidth={4} />
				<RingScreen cx={SV.cx} cy={SV.cy} R={SV.R} lit={lit} rings={ringsPx(kv)} ringW={12} ringColor={TEAL.stroke} ringOpacity={prog(f, br, 16)} />
				{f >= td ? <ellipse cx={1120 + 170} cy={720 + 95} rx={210} ry={120} fill="none" stroke="#c0392b" strokeWidth={4} opacity={prog(f, td, 12)} /> : null}
			</FrameSvg>
			<HandTag x={0} y={0} at={st + 20} color={GREY.stroke} marks={[{kind: 'arrow', from: [scr[0] - 60, scr[1] - 150], to: [SV.cx + SV.R + 20, SV.cy - 40], bend: 0.2}]} />
			<Lbl x={SV.cx} y={SV.cy - SV.R - 24} at={0} color={INK} size={26} anchor="middle">screen view (face-on)</Lbl>
			<Lbl x={110} y={490} at={gt} color={INK} size={26}>G. P. Thomson, 1927: thin foil</Lbl>
			<Lbl x={110} y={540} at={jj} color={INK} size={26}>J. J. Thomson, 1897: electron = particle</Lbl>
			<Lbl x={110} y={590} at={jj + 10} color={INK} size={26}>father: particle; son: wave</Lbl>
			<HandTag x={110} y={650} text="both were right" at={jj + 30} size={32} color={NAVY.ink} />
			<Lbl x={gun[0]} y={gun[1] - 60} at={st} color={INK} size={28} anchor="middle">electron gun</Lbl>
			<Lbl x={g[0]} y={g[1] + 130} at={st + 6} color={INK} size={28} anchor="middle">graphite</Lbl>
			<Lbl x={scr[0]} y={TP.y + tubeH(TP.w) + 40} at={st + 12} color={INK} size={28} anchor="middle">glowing screen</Lbl>
			<Chip x={96} y={700} at={td} size={26} color={INK}>thousands of volts, evacuated glass: teacher demonstration</Chip>
			<Readout x={430} y={700} label="V" value={`${fx(kv, 1)} kV`} color={GREY.ink} w={300} opacity={prog(f, tu, 12)} />
			<Readout x={750} y={700} label="v" value={`${sci(tubeV(kv), 2)} m s⁻¹`} color={TEAL.ink} w={340} size={40} opacity={prog(f, tu, 12)} />
			<Readout x={430} y={820} label="λ" value={`${sci(tubeLam(kv), 2)} m`} color={NAVY.ink} w={300} size={40} opacity={prog(f, tu, 12)} />
			<Readout x={750} y={820} label="inner ring r (model tube)" value={`≈ ${fx(tubeRmm(kv))} mm`} color={TEAL.ink} w={340} size={40} opacity={prog(f, tu, 12)} />
			<HandTag x={SV.cx + SV.R + 20} y={SV.cy + 60} text="V up, rings shrink" at={tu + 20} size={30} color={TEAL.ink} />
			<Chip x={1500} y={200} at={fm} size={24} color={GREY.ink}>{'11 to 14% of c: λ = h/mv within 0.3% of the relativistic value'}</Chip>
			<div style={{position: 'absolute', left: 96, top: 770}}><Row at={pr} size={28}><AnswerBox at={pr + 4}>V ↑ → v ↑ → p ↑ → λ ↓ → smaller rings</AnswerBox></Row></div>
		</>
	);
};
export const graphiteD = GRAPHITE_D;

// ---------- 10. why this counts as evidence ----------
const RS = {cx: 1420, cy: 560, R: 230};
export const SPOT_RUN = lazy(() => ringSpotRun({seed: 12, trials: 2000, weights: [1, 0.7], background: 0.25}));
export const RS_RINGS = [95, 165] as const;
export const S10: React.FC = () => {
	const id = 'why-evidence';
	const f = useCurrentFrame();
	const ad = cue(id, 'adding in some directions'), cc = cue(id, "can't cancel each other out"), mh = cue(id, 'matches h over m v'), ev = cue(id, 'make strong evidence'), sp = cue(id, 'still particles too'), es = cue(id, 'Each one lands as a single spot'), bu = cap(id, cue(id, 'build up from many spots'));
	const run = SPOT_RUN();
	const n = trialsShown(run, f, {at: es, slow: 6, every: 10, until: Math.max(es + 100, bu)});
	const ph = f / 6;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={800} height={700} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
				<g opacity={prog(f, ad, 12)}>
					<WaveLine x0={130} x1={500} y={300} lambda={90} amp={22} color={NAVY.stroke} width={4} phase={ph} />
					<WaveLine x0={130} x1={500} y={300} lambda={90} amp={22} color={NAVY.stroke} width={4} phase={ph} dash="6 6" />
					<WaveLine x0={540} x1={860} y={300} lambda={90} amp={44} color={TEAL.stroke} width={6} phase={ph} />
					<WaveLine x0={130} x1={500} y={420} lambda={90} amp={22} color={NAVY.stroke} width={4} phase={ph} />
					<WaveLine x0={130} x1={500} y={420} lambda={90} amp={22} color={NAVY.stroke} width={4} phase={ph + Math.PI} dash="6 6" />
					<line x1={540} y1={420} x2={860} y2={420} stroke={GREY.stroke} strokeWidth={5} />
				</g>
				{f >= cc ? <g opacity={prog(f, cc, 12)}>
					<line x1={150} y1={480} x2={450} y2={600} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" /><line x1={150} y1={600} x2={450} y2={480} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<circle cx={150 + 300 * ((f / 60) % 1)} cy={480 + 120 * ((f / 60) % 1)} r={11} fill={NAVY.stroke} /><circle cx={150 + 300 * ((f / 60) % 1)} cy={600 - 120 * ((f / 60) % 1)} r={11} fill={NAVY.stroke} />
				</g> : null}
				<RingScreen cx={RS.cx} cy={RS.cy} R={RS.R} lit={prog(f, sp, 14)} rings={RS_RINGS} ringColor={TEAL.stroke} ringOpacity={0} spots={ringSpots(run, n, RS_RINGS, RS.R)} spotR={3.4} />
				{n > 0 && n < 12 ? <circle cx={RS.cx + ringSpots(run, 1, RS_RINGS, RS.R)[0][0]} cy={RS.cy + ringSpots(run, 1, RS_RINGS, RS.R)[0][1]} r={14} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
			</FrameSvg>
			<HandTag x={600} y={255} text="add" at={ad + 10} size={30} color={TEAL.ink} />
			<HandTag x={600} y={380} text="cancel" at={ad + 30} size={30} color={GREY.ink} />
			<Lbl x={130} y={240} at={ad} color={INK} size={26}>interference: only waves do this</Lbl>
			<Lbl x={500} y={545} at={cc} color={GREY.ink} size={28}>particles: no cancelling</Lbl>
			<div style={{position: 'absolute', left: 130, top: 640, display: 'flex', gap: 20, alignItems: 'center'}}>
				<Row at={mh} size={30}><AnswerBox at={mh + 4}>{`${sci(DG_MEAS, 2)} vs ${sci(DG_LAM, 2)} m`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 130, top: 720, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={ev} size={34}><AnswerBox at={ev + 4}>pattern needs waves</AnswerBox></Row>
				<Row at={ev + 10} size={34}><AnswerBox at={ev + 14}>λ = h/mv</AnswerBox></Row>
			</div>
			<Lbl x={RS.cx} y={RS.cy - RS.R - 24} at={0} color={INK} size={26} anchor="middle">screen view</Lbl>
			<Readout x={RS.cx - 200} y={RS.cy + RS.R + 20} label="electrons" value={n ? n.toLocaleString('en-AU').replace(/,/g, ' ') : '0'} color={NAVY.ink} w={400} opacity={prog(f, es, 12)} />
			<HandTag x={RS.cx - 220} y={RS.cy - RS.R - 70} text="each electron: one spot" at={es + 30} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 940, top: 196, width: 240, opacity: prog(f, bu, 14), fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 30, color: INK, lineHeight: 1.05, border: `3px solid ${INK}`, borderRadius: 14, padding: '6px 10px', background: '#fffdf8'}}>Pattern + number = evidence. Travels as a wave, lands as a spot.</div>
		</>
	);
};

// ---------- 11. back to the atom ----------
const O11 = {cx: 560, cy: 590, r: 260};
export const S11: React.FC = () => {
	const id = 'ground-orbit';
	const f = useCurrentFrame();
	const tt = cue(id, 'two point two times ten to the six'), to = cue(id, 'three point three one'), tp = cue(id, 'two pi r'), ex = cap(id, cue(id, 'One wavelength fits exactly'));
	const a = -Math.PI / 2 + f * 0.04;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OrbitWave cx={O11.cx} cy={O11.cy} r={O11.r} waves={1} amp={34} color={NAVY.stroke} draw={prog(f, ex, 26)} width={6} waveOpacity={f >= ex ? 1 : 0} />
				<Nucleus x={O11.cx} y={O11.cy} r={22} />
				<circle cx={O11.cx + O11.r * Math.cos(a)} cy={O11.cy + O11.r * Math.sin(a)} r={14} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} />
				{f >= tt ? <Arrow from={[O11.cx + O11.r * Math.cos(a), O11.cy + O11.r * Math.sin(a)]} to={[O11.cx + O11.r * Math.cos(a) - 110 * Math.sin(a), O11.cy + O11.r * Math.sin(a) + 110 * Math.cos(a)]} color={TEAL.stroke} width={6} head={18} opacity={prog(f, tt, 12)} /> : null}
			</FrameSvg>
			<Lbl x={O11.cx} y={O11.cy + O11.r + 60} at={0} color={INK} size={28} anchor="middle">n = 1, r₁ = 5.29 × 10⁻¹¹ m (Bohr)</Lbl>
			<Lbl x={1000} y={240} at={tt} color={TEAL.ink} size={32}>v = 2.2 × 10⁶ m s⁻¹</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 320, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={to} size={44}>{f >= ex ? <AnswerBox at={ex}>{`λ = ${sci(E_LAM, 2)} m`}</AnswerBox> : `λ = ${sci(E_LAM, 2)} m (found earlier)`}</Row>
				<Row at={tp} size={44}>{f >= ex ? <AnswerBox at={ex}>{`2πr₁ = 2π × 5.29 × 10⁻¹¹ = ${sci(CIRC1, 2)} m`}</AnswerBox> : `2πr₁ = 2π × 5.29 × 10⁻¹¹ = ${sci(CIRC1, 2)} m`}</Row>
			</div>
			<HandTag x={1000} y={600} text="λ = 2πr₁: one wavelength fits" at={ex + 6} size={36} color={NAVY.ink} marks={[{kind: 'circle', cx: O11.cx, cy: O11.cy - O11.r, rx: 50, ry: 44}]} />
			<Lbl x={1000} y={700} at={ex + 6} color={GREY.ink} size={26}>(0.5% apart: both values are rounded)</Lbl>
		</>
	);
};

// ---------- 12. Bohr's rule, explained ----------
const SMALL = [{cx: 900, n: 1}, {cx: 1180, n: 2}, {cx: 1460, n: 3}] as const;
export const S12: React.FC = () => {
	const id = 'bohr-rule-explained';
	const f = useCurrentFrame();
	const tr = cue(id, 'Two pi r equals n lambda'), lh = cue(id, 'lambda is h over m v'), re = cue(id, 'Rearrange'), br = cue(id, "That's Bohr's rule"), df = cue(id, "An orbit that doesn't fit"), ls = cap(id, cue(id, "so it can't last"));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{SMALL.map(o => <g key={o.n}><OrbitWave cx={o.cx} cy={380} r={60 + 40 * o.n} waves={o.n} amp={12} color={NAVY.stroke} width={f >= ls ? 6 : 4} /><Nucleus x={o.cx} y={380} r={10} /></g>)}
				{f >= df ? <g opacity={prog(f, df, 12)}><OrbitWave cx={1700} cy={380} r={100} waves={2.5} amp={12} color={NAVY.stroke} laps={3} draw={prog(f, df, 60)} width={4} /><Nucleus x={1700} y={380} r={10} /></g> : null}
			</FrameSvg>
			{SMALL.map(o => <Lbl key={o.n} x={o.cx} y={600} at={0} color={NAVY.ink} size={28} anchor="middle">{`n = ${o.n}: ${o.n}λ = 2πr`}</Lbl>)}
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={tr} ageAt={re} size={48}>2πr = nλ</Row>
				<Row at={lh} ageAt={re} size={48}>2πr = nh/mv</Row>
				<Row at={re} size={56}><AnswerBox at={re + 6}>mvr = nh/2π</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', alignItems: 'center', gap: 16}}><Chip x={0} y={0} at={-30} size={30} color={GREY.ink}>{f >= br ? 'why? ✓' : 'why?'}</Chip></div>
			<Lbl x={96} y={640} at={br} color={INK} size={30}>assumed (Bohr 1913) → explained (de Broglie 1924)</Lbl>
			<HandTag x={1480} y={560} text="doesn't fit: cancels itself" at={df + 20} size={30} color={GREY.ink} />
			{f >= df ? <Mark x={1700} y={380} at={df + 30} kind="cross" color={GREY.stroke} size={60} /> : null}
			<Lbl x={96} y={760} at={ls} color={NAVY.ink} size={32}>only whole numbers of wavelengths last: the allowed orbits</Lbl>
		</>
	);
};
