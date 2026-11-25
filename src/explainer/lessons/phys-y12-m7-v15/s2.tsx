// Scenes 7 to 12: light itself (the probe races a photon packet), invariant mass (older books against today), the
// worked proton (the painted accelerator tunnel, the momentum against speed plot with both values), the worked electron
// (a small step in speed, a large step in momentum), accelerators (the tunnel beside a coded storage ring with the real
// and the classical radius) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {CurvePlot, LINAC, MomentumBar, REL_ANCHOR, SpeedGauge, StorageRing, plotX, plotY} from '../../physics/light/relativity';
import type {PlotBox} from '../../physics/light/relativity';
import {nat} from '../../physics/light/thermal';
import {B_E1, B_E2, B_LHC, B_P, G_E1, G_E2, G_LHC, G_P, HEAD, HEAD_SIZE, LHC_SHORT, LHC_SHORT_MS, P_E1, P_E2, P_P, P_P_CL, P_P_SHORT, P_RATIO, R_CL, R_LHC, V_UP, cap, cue, vOfK} from './common';
import {AMBER, GREY, Givens, INK, Lbl, NAVY, SLATE, Strip, TEAL, VIOLET, fx, pOfB, sci} from './parts';
import {Probe} from './s1';

// ---------- 7. light itself ----------
export const S07: React.FC = () => {
	const id = 'photons';
	const f = useCurrentFrame();
	const cm = cue(id, 'they still carry momentum'), ms = cap(id, cue(id, 'anything with mass'));
	const ph = 300 + ((f * 16) % 1400), pr = 120 + Math.min(1, f / 300) * 380;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={96} y1={340} x2={1824} y2={340} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<line x1={96} y1={760} x2={1824} y2={760} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<Packet x={ph} y={290} len={110} color={AMBER.stroke} />
				{f >= cm ? <g opacity={prog(f, cm, 12)}><line x1={ph + 70} y1={290} x2={ph + 170} y2={290} stroke={AMBER.stroke} strokeWidth={6} /><path d={`M${ph + 190},290 l-20,-11 v22 z`} fill={AMBER.stroke} /></g> : null}
				<Probe p={{x: pr, y: 520, w: 520}} force={1} />
			</FrameSvg>
			<Lbl x={96} y={220} at={0} color={AMBER.ink} size={40}>photon: c</Lbl>
			<Lbl x={96} y={480} at={0} color={TEAL.ink} size={40}>probe: v &lt; c</Lbl>
			<HandTag x={500} y={220} text="photon: m₀ = 0, always at c" at={10} size={36} color={AMBER.ink} />
			<Lbl x={ph + 200} y={300} at={cm} color={AMBER.ink} size={30}>p</Lbl>
			<Lbl x={1200} y={440} at={cm + 6} color={AMBER.ink} size={32}>photons carry momentum</Lbl>
			<Chip x={96} y={830} at={ms} size={40} color={INK} border={INK}>m₀ &gt; 0: v &lt; c always</Chip>
			<HandTag x={0} y={0} at={ms + 8} color={TEAL.stroke} marks={[{kind: 'circle', cx: 210, cy: 470, rx: 150, ry: 44}]} />
		</>
	);
};

// ---------- 8. invariant mass, not relativistic mass ----------
export const S08: React.FC = () => {
	const id = 'invariant-mass';
	const f = useCurrentFrame();
	const rm = cue(id, 'call gamma m zero the relativistic mass'), av = cue(id, 'Physicists now avoid that idea'), sm = cue(id, 'the same at every speed'), mu = cue(id, 'In its own frame, a fast muon'), gr = cue(id, 'What grows is the momentum, and the energy'), inf = cap(id, cue(id, 'infinite'));
	const grow = kf(f, [[gr, 0], [gr + 60, 1]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={200} width={820} height={600} rx={18} fill="#f4f1ea" stroke={GREY.stroke} strokeWidth={3} />
				<rect x={1000} y={200} width={824} height={600} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				{f >= mu ? <g opacity={prog(f, mu, 12)}><circle cx={1120} cy={520} r={22} fill={SLATE.stroke} /><line x1={1150} y1={520} x2={1300} y2={520} stroke={TEAL.stroke} strokeWidth={4} /></g> : null}
				<MomentumBar x={1500} base={760} w={80} bh={36} n={6 * grow} color={AMBER.stroke} label="p" opacity={prog(f, gr, 12)} />
				<MomentumBar x={1660} base={760} w={80} bh={36} n={6 * grow} color={GREY.stroke} soft="#efe9de" label="energy" opacity={prog(f, gr + 6, 12)} />
			</FrameSvg>
			<Lbl x={120} y={250} at={0} color={GREY.ink} size={38}>older books</Lbl>
			<Lbl x={1024} y={250} at={0} color={INK} size={38}>today</Lbl>
			<Chip x={130} y={320} at={rm} size={34} color={GREY.ink}>relativistic mass m = γm₀ (older idea)</Chip>
			<Lbl x={130} y={460} at={av} color={GREY.ink} size={48}>! avoided today</Lbl>
			<Chip x={1030} y={320} at={sm} size={32} color={INK} border={INK}>invariant mass m₀: same in every frame</Chip>
			<Chip x={1320} y={500} at={mu + 6} size={28} color={TEAL.ink} border={TEAL.stroke}>own frame: m₀ unchanged</Chip>
			<Lbl x={1120} y={580} at={mu} color={SLATE.ink} size={28} anchor="middle">fast muon</Lbl>
			<Lbl x={1700} y={460} at={gr + 20} color={GREY.ink} size={26} anchor="middle">next video</Lbl>
			<HandTag x={1030} y={660} text="what grows: p and energy" at={gr + 20} size={32} color={AMBER.ink} />
			<CrossedChip x={130} y={600} at={inf} crossAt={inf + 10} size={32} caption="say: momentum (and energy) increase without limit">mass becomes infinite</CrossedChip>
		</>
	);
};

// ---------- 9. worked example: a proton in an accelerator ----------
const TUN: Place = {x: 96, y: 170, w: 460};
const SPV: PlotBox = {x: 660, y: 200, w: 340, h: 210, yMax: 2};
/** A beam dot moving along the painted tunnel's beam line (towards the vanishing point and back). */
export const BeamDot: React.FC<{p: Place; f: number; color: string; r?: number}> = ({p, f, color, r = 9}) => {
	const a = nat(LINAC, p, REL_ANCHOR.beamNear[0], REL_ANCHOR.beamNear[1]), b = nat(LINAC, p, REL_ANCHOR.beamFar[0], REL_ANCHOR.beamFar[1]);
	const u = (f % 60) / 60;
	return <circle cx={a[0] + (b[0] - a[0]) * u} cy={a[1] + (b[1] - a[1]) * u} r={r * (1 - 0.6 * u)} fill={color} stroke="#fff" strokeWidth={2} />;
};
export const S09: React.FC = () => {
	const id = 'worked-proton';
	const f = useCurrentFrame();
	const gt = cue(id, 'is one point five three'), sec = cue(id, 'metres per second'), sm = cap(id, cue(id, 'small'));
	const cl = P_P_CL / (1.673e-27 * 3.0e8), rl = P_P / (1.673e-27 * 3.0e8);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LINAC} p={TUN} />
				<BeamDot p={TUN} f={f} color={AMBER.stroke} />
				<CurvePlot b={SPV} f={pOfB} color={AMBER.stroke} betaMax={0.9} classical={b => b} classicalDraw={1} xTicks={[0, 1]} yTicks={[0, 1, 2]} xLabel="v/c" yLabel="p / (m₀c)" size={26} />
				{f >= sec ? <circle cx={plotX(SPV, B_P)} cy={plotY(SPV, rl)} r={10} fill={AMBER.stroke} stroke="#fff" strokeWidth={2.5} /> : null}
				{f >= sm ? <g><circle cx={plotX(SPV, B_P)} cy={plotY(SPV, cl)} r={10} fill={GREY.stroke} stroke="#fff" strokeWidth={2.5} /><line x1={plotX(SPV, B_P) + 18} y1={plotY(SPV, rl)} x2={plotX(SPV, B_P) + 18} y2={plotY(SPV, cl)} stroke={AMBER.stroke} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<Lbl x={TUN.x + 10} y={TUN.y + 280} at={0} color={AMBER.ink} size={28}>{`proton at ${B_P}c`}</Lbl>
			<Strip x={1080} y={168} at={2} w={740} size={30}>{'Find the proton’s momentum, and compare with the classical value.'}</Strip>
			<Strip x={1080} y={276} at={6} size={34}><span>p<Sub>v</Sub> = m₀v / √(1 − v²/c²) = γm₀v</span></Strip>
			<Givens x={1080} y={350} w={740} at={10} size={28} lines={[`v = ${B_P}c (proton, site worked example)`, 'm₀ = 1.673 × 10⁻²⁷ kg, c = 3.00 × 10⁸ m s⁻¹ (data sheet)']} />
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 14, width: 1730}}>
				<Row at={gt - 6} ageAt={sec} size={48}><span style={{color: VIOLET.ink}}>{`γ = 1 / √(1 − ${B_P}²) = 1 / √${fx(1 - B_P * B_P, 4)} = ${fx(G_P, 3)}`}</span></Row>
				<Row at={sec - 30} size={42}><AnswerBox at={sec}>{`p = ${fx(G_P, 3)} × 1.673 × 10⁻²⁷ × ${B_P} × 3.00 × 10⁸ = ${sci(P_P, 2)} kg m s⁻¹`}</AnswerBox></Row>
			</div>
			<HandTag x={1250} y={515} text="γ first" at={gt + 10} size={34} color={VIOLET.ink} />
			<CrossedChip x={96} y={720} at={sm - 20} crossAt={sm} size={32} caption={`${fx(P_P_SHORT * 100)}% too small at ${B_P}c`}>{`classical: m₀v = ${sci(P_P_CL, 2)} kg m s⁻¹`}</CrossedChip>
		</>
	);
};

// ---------- 10. worked example: a small step in speed ----------
export const S10: React.FC = () => {
	const id = 'worked-electron';
	const f = useCurrentFrame();
	const lt = cue(id, 'less than one per cent'), gs = cue(id, 'seven point zero nine to twenty two point four'), tr = cap(id, cue(id, 'triples'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={-30} size={30}>{`last example: p = ${sci(P_P, 2)} kg m s⁻¹`}</Strip>
			<Chip x={96} y={860} at={2} size={30} color={NAVY.ink} border={NAVY.stroke}>mₑ = 9.109 × 10⁻³¹ kg (data sheet)</Chip>
			<Lbl x={300} y={320} at={0} color={TEAL.ink} size={60} anchor="middle">{`${B_E1}c`}</Lbl>
			<Lbl x={1100} y={320} at={0} color={TEAL.ink} size={60} anchor="middle">{`${B_E2}c`}</Lbl>
			<FrameSvg>
				<line x1={420} y1={300} x2={980} y2={300} stroke={TEAL.stroke} strokeWidth={5} opacity={prog(f, lt, 12)} />
				<path d="M980,300 l-18,-10 v20 z" fill={TEAL.stroke} opacity={prog(f, lt, 12)} />
			</FrameSvg>
			<Lbl x={700} y={270} at={lt} color={TEAL.ink} size={36} anchor="middle">{`+${fx(V_UP, 1)}%`}</Lbl>
			<Lbl x={300} y={420} at={gs} color={VIOLET.ink} size={48} anchor="middle">{`γ = ${fx(G_E1, 2)}`}</Lbl>
			<Lbl x={1100} y={420} at={gs + 10} color={VIOLET.ink} size={48} anchor="middle">{`γ = ${fx(G_E2, 1)}`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 18, width: 1730}}>
				<Row at={tr - 40} size={40}><AnswerBox at={tr - 30}>{`p = ${fx(G_E1, 2)} × 9.109 × 10⁻³¹ × ${B_E1} × 3.00 × 10⁸ = ${sci(P_E1, 2)} kg m s⁻¹`}</AnswerBox></Row>
				<Row at={tr - 14} size={40}><AnswerBox at={tr}>{`p = ${fx(G_E2, 2)} × 9.109 × 10⁻³¹ × ${B_E2} × 3.00 × 10⁸ = ${sci(P_E2, 2)} kg m s⁻¹`}</AnswerBox></Row>
			</div>
			<FrameSvg>
				<MomentumBar x={1520} base={450} w={70} bh={22} n={(P_E1 / 1e-21) * 2} color={AMBER.stroke} label="p" size={26} opacity={prog(f, gs, 12)} />
				<MomentumBar x={1670} base={450} w={70} bh={22} n={(P_E2 / 1e-21) * 2} color={AMBER.stroke} label="p" size={26} opacity={prog(f, gs + 10, 12)} />
			</FrameSvg>
			<HandTag x={1490} y={300} text={`× ${fx(P_RATIO, 1)}`} at={tr + 10} size={40} color={AMBER.ink} anchor="end" />
			<HandTag x={96} y={740} text="speed limit at work: tiny speed step, big momentum step" at={tr + 16} size={34} color={INK} />
		</>
	);
};

// ---------- 11. accelerators are built for it ----------
const TU11: Place = {x: 96, y: 300, w: 420};
const RING = {cx: 1260, cy: 560, r: 300};
export const S11: React.FC = () => {
	const id = 'accelerators';
	const f = useCurrentFrame();
	const rq = cue(id, 'a circle of radius p over q B'), w3 = cue(id, 'within about three metres per second of the speed of light'), g7 = cue(id, 'gamma near seven thousand'), n3 = cue(id, 'nearly three kilometres'), ce = cap(id, cue(id, 'centimetres'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={LINAC} p={TU11} />
				<BeamDot p={TU11} f={f} color={AMBER.stroke} />
				<StorageRing cx={RING.cx} cy={RING.cy} r={RING.r} t={f / 30} period={2.4} dot={AMBER.stroke} n={3} field={SLATE.stroke} />
				{f >= n3 ? <g opacity={prog(f, n3, 12)}><line x1={RING.cx} y1={RING.cy} x2={RING.cx + RING.r * 0.7} y2={RING.cy - RING.r * 0.7} stroke={AMBER.stroke} strokeWidth={5} /><circle cx={RING.cx} cy={RING.cy} r={6} fill={INK} /></g> : null}
				{f >= ce ? <circle cx={RING.cx} cy={RING.cy} r={20} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 5" /> : null}
			</FrameSvg>
			<Lbl x={TU11.x} y={TU11.y - 30} at={0} color={INK} size={28}>inside the ring</Lbl>
			<Lbl x={RING.cx} y={220} at={0} color={INK} size={32} anchor="middle">LHC: 6.5 TeV operating example</Lbl>
			<Lbl x={RING.cx + RING.r + 10} y={RING.cy + RING.r} at={0} color={GREY.ink} size={26} anchor="end">not to scale</Lbl>
			<Chip x={96} y={600} at={rq} size={28} w={700} color={INK}>{'earlier: r = mv/qB → relativistic: r = p/qB, p = γm₀v'}</Chip>
			<Lbl x={96} y={720} at={w3} color={TEAL.ink} size={30}>{`v = ${fx(1 - LHC_SHORT, 10)}c (${fx(LHC_SHORT_MS)} m s⁻¹ short of c)`}</Lbl>
			<Lbl x={96} y={770} at={g7} color={VIOLET.ink} size={34}>{`γ ≈ ${sci(G_LHC, 1)}`}</Lbl>
			<Lbl x={RING.cx - 20} y={RING.cy - 40} at={n3} color={AMBER.ink} size={32} anchor="end">{`r ≈ ${fx(R_LHC / 1000, 1)} km (B ≈ ${fx(B_LHC, 1)} T)`}</Lbl>
			<CrossedChip x={RING.cx - 320} y={RING.cy + 60} at={ce} crossAt={ce + 8} size={26}>{`classical p = m₀v: r ≈ ${fx(R_CL, 2)} m`}</CrossedChip>
			<HandTag x={96} y={850} text="magnets designed for γm₀v" at={ce + 16} size={36} color={AMBER.ink} />
		</>
	);
};

// ---------- 12. a way to remember ----------
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const mn = cue(id, 'Momentum has no ceiling'), ds = cap(id, cue(id, 'does'));
	const grow = kf(f, [[mn, 6], [mn + 90, 14]], false);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 860, top: 220, width: 960}}>
				<MemoryCard at={mn - 10} main={<><span style={{color: AMBER.ink}}>Momentum has no ceiling.</span> <span style={{color: TEAL.ink}}>Speed does.</span></>} />
			</div>
			<FrameSvg>
				<Probe p={{x: 96, y: 200, w: 520}} force={1} />
				<MomentumBar x={180} base={900} w={80} bh={40} n={grow} color={AMBER.stroke} label="p" maxH={500} />
				<SpeedGauge cx={560} cy={760} r={170} beta={vOfK(grow)} color={TEAL.stroke} label="v" tremble={f >= ds ? 0.004 * Math.sin(f / 2) : 0} />
			</FrameSvg>
		</>
	);
};

