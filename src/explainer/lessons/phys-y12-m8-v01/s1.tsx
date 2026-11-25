// Scenes 1 to 6: the hook (last time's pair production in the hot early Universe; would cooling make more pairs or
// fewer?), expansion and cooling (a uniformly stretching dot grid, a wave stretching with it, Wien's law), the threshold
// rule (photon-energy bars on a log scale against the dashed rest-energy line, a pair population that stops being
// replenished), the electron-pair temperature estimate (working layout), heavier particles first (two thresholds, quarks
// binding in threes) and the matter excess (a particle-box run: protons and hollow antiprotons annihilating into photons).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {Particle, PhotonField, TempBar} from '../../physics/light/massenergy';
import {runBox} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {Anti, BoxParticles, DotGrid, GALAXY, Readout, ThresholdGauge, WaveLine, gridPt, logPos} from '../../physics/atom/universe';
import {HandoffBoard16, M7V16FinalFrame} from '../phys-y12-m7-v16/s3';
import {E_E_MEV, E_E_SHOWN, E_E_SLIP, E_P_MEV, HEAD, HEAD_SIZE, LAM_E, LAM_E_SHOWN, PHOTONS_PER, P_OVER_E, SPREAD, TAIL_I, T_COOL, T_E, T_HOT, T_P, cap, cue, dur, ePeakMeV} from './common';
import {AMBER, COOL, GREY, Givens, INK, Lbl, NAVY, NEUTRON, PairEvent, RED, ROSE, SLATE, Strip, TEAL, fx, sci} from './parts';

/** The temperature bar at the right edge (scenes 1 to 12): level 0 to 1, colour reddening as it falls. */
export const Thermo: React.FC<{level: number; x?: number; y?: number; h?: number; label?: boolean}> = ({level, x = 1680, y = 440, h = 340, label = true}) => (
	<TempBar x={x} y={y} w={50} h={h} level={level} color={level < 0.5 ? '#c4582f' : '#d8452f'} label={label ? 'temperature' : undefined} size={28} />
);
/** A tick on the temperature bar at level u (left of the bar), with its label anchored at the right. */
export const ThermoTick: React.FC<{u: number; text: string; o: number; x?: number; y?: number; h?: number; color?: string}> = ({u, text, o, x = 1680, y = 440, h = 340, color = RED.ink}) => {
	if (o <= 0.001) return null;
	const ty = y + 6 + (h - 12) * (1 - u);
	return <g opacity={o}><line x1={x - 24} y1={ty} x2={x + 74} y2={ty} stroke={color} strokeWidth={4} /><text x={x - 32} y={ty + 10} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: color}}>{text}</text></g>;
};

// ---------- 1. hook ----------
const EV = {x: 860, y: 600};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const rep = cue(id, 'two energetic photons meeting head-on made an electron and a positron'), you = cue(id, "You're made of matter"), pred = cue(id, 'prediction'), few = cue(id, "Fewer, and that's the key"), uni = cap(id, cue(id, 'form in the early Universe'));
	if (f < 1) return <M7V16FinalFrame />;
	const tickAt = Math.max(few, pred + 92);
	const gap = f < rep ? 162 : kf(f, [[rep, 162], [rep + 12, 360], [rep + 60, 0]]);
	const emerge = f < rep ? 1 : prog(f, rep + 60, 20) * (1 - prog(f, tickAt + 10, 14));
	const pairO = 1 - prog(f, tickAt + 10, 14);
	const coolGap = kf(f, [[tickAt + 20, 380], [tickAt + 110, -380]], false);
	const level = 0.3 - 0.12 * prog(f, tickAt, 30);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard16 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PhotonField x={96} y={360} w={1480} h={470} t={f / 30} n={24} cool={0.7 + 0.2 * prog(f, tickAt, 30)} opacity={0.55} />
				<PairEvent x={EV.x} y={EV.y} gap={gap} emerge={emerge} opacity={pairO} />
				{f >= tickAt + 20 ? <PairEvent x={EV.x} y={EV.y} gap={coolGap} color={COOL} len={130} through opacity={1 - prog(f, tickAt + 110, 14)} /> : null}
				<Thermo level={level} />
				<Countdown start={pred} end={pred + 90} x={1080} y={250} r={40} />
				{f >= tickAt ? <Mark x={1400} y={262} at={tickAt} kind="tick" color={INK} size={34} /> : null}
				<LPlate spec={GALAXY} p={{x: 1190, y: 590, w: 380}} opacity={prog(f, you, 16)} />
				<Particle x={1240} y={890} r={24} color={ROSE.stroke} text="p" opacity={prog(f, you + 10, 12)} />
				<Particle x={1310} y={890} r={24} color={NEUTRON} text="n" opacity={prog(f, you + 14, 12)} />
				<Particle x={1380} y={890} r={24} color={NAVY.stroke} text="e⁻" size={22} opacity={prog(f, you + 18, 12)} />
			</FrameSvg>
			<Lbl x={EV.x} y={EV.y + 200} at={-30} out={tickAt + 10} color={INK} size={34} anchor="middle">pair production</Lbl>
			<Lbl x={EV.x} y={EV.y - 112} at={-30} out={tickAt + 10} color={AMBER.ink} size={32} anchor="middle">≥ 0.51 MeV each</Lbl>
			<Lbl x={EV.x} y={EV.y - 74} at={-30} out={8} color={GREY.ink} size={26} anchor="middle">head-on, equal energies</Lbl>
			<Lbl x={1200} y={400} at={-30} out={you} color={AMBER.ink} size={32}>hot early Universe</Lbl>
			<HandTag x={1420} y={890} text="today: matter" at={you + 6} size={36} color={INK} />
			<HandTag x={120} y={400} text="then: light" at={you + 20} size={38} color={AMBER.ink} />
			<HandTag x={0} y={0} at={rep + 12} color={AMBER.ink} marks={[{kind: 'arrow', from: [380, 540], to: [700, 560], bend: -0.08}, {kind: 'arrow', from: [1340, 540], to: [1020, 560], bend: 0.08}]} />
			<Chip x={1150} y={172} at={pred} size={30} color={INK}>more pairs</Chip>
			<Chip x={1150} y={232} at={pred + 4} size={30} color={INK}>fewer pairs</Chip>
			<Chip x={1150} y={292} at={pred + 8} size={30} color={INK}>no change</Chip>
			<HandTag x={980} y={760} text="not enough energy" at={tickAt + 70} size={36} color={SLATE.ink} marks={[{kind: 'cross', cx: EV.x, cy: EV.y + 110, size: 60}]} />
			<Chip x={96} y={870} at={-30} out={uni} size={30} w={1728} color={INK} border={INK}>Next: how did cooling radiation allow matter to form in the early Universe?</Chip>
			<HandTag x={0} y={0} at={uni + 4} color={INK} marks={[{kind: 'underline', x1: 96, x2: 1560, y: 152}]} />
		</>
	);
};

// ---------- 2. hot, dense and stretching ----------
const GB = {x: 96, y: 220, w: 1000, h: 520};
const GC = {x: 596, y: 480};
const NEIGH: readonly (readonly [number, number])[] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
export const S02: React.FC = () => {
	const id = 'expansion-cooling';
	const f = useCurrentFrame();
	const exp = cue(id, 'expanding ever since'), expl = cue(id, "isn't an explosion into empty space"), cen = cue(id, 'centre'), wv = cue(id, 'so does every light wave travelling through it'), lam = cue(id, 'lambda'), wi = cue(id, "Wien's law"), hal = cap(id, cue(id, 'halves'));
	const s = 64 * 2 ** prog(f, exp, Math.max(60, dur(id) - 64 - exp));
	const hop = f < cen ? -1 : Math.min(2, Math.floor((f - cen) / 26));
	const hiDot: readonly (readonly [number, number])[] = [[0, 0], [-2, 1], [2, -1]];
	const hd = hop >= 0 ? hiDot[hop] : null;
	const lam0 = 70, lamW = lam0 * (1 + prog(f, wv, 60));
	const level = 0.8 - 0.4 * prog(f, hal, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DotGrid box={GB} cx={GC.x} cy={GC.y} s={s} n={8} hi={hd ? [hd] : []} hiColor={INK} />
				{Array.from({length: 7}, (_, i) => { const [x, y] = gridPt(GC.x, GC.y, s, (i % 4) - 2 + 0.5, Math.floor(i / 4) - 1 + 0.5); return x > GB.x + 30 && x < GB.x + GB.w - 60 && y > GB.y + 20 && y < GB.y + GB.h - 20 ? <Packet key={i} x={x} y={y} deg={(i * 70) % 360} len={34 + 12 * prog(f, exp, 200)} color={AMBER.stroke} opacity={0.8} /> : null; })}
				{hd ? NEIGH.map(([di, dj], k) => { const [x0, y0] = gridPt(GC.x, GC.y, s, hd[0], hd[1]); return <line key={k} x1={x0 + di * 14} y1={y0 + dj * 14} x2={x0 + di * s * 0.8} y2={y0 + dj * s * 0.8} stroke={RED.stroke} strokeWidth={5} />; }) : null}
				<circle cx={GC.x} cy={GC.y} r={70} fill="none" stroke={SLATE.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, cen + 70, 12)} />
				{f >= expl ? <g opacity={prog(f, expl, 12)}>
					<rect x={1150} y={220} width={330} height={190} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					{Array.from({length: 10}, (_, i) => { const a = (i / 10) * 2 * Math.PI, r = 10 + 70 * prog(f, expl + 4, 30); return <g key={i}><line x1={1315} y1={315} x2={1315 + r * Math.cos(a)} y2={315 + r * Math.sin(a) * 0.9} stroke={GREY.stroke} strokeWidth={2} /><circle cx={1315 + r * Math.cos(a)} cy={315 + r * Math.sin(a) * 0.9} r={7} fill={INK} /></g>; })}
				</g> : null}
				<line x1={120} y1={862} x2={120 + 4 * lamW} y2={862} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
				<circle cx={120} cy={862} r={9} fill={INK} opacity={prog(f, wv, 12)} />
				<circle cx={120 + 4 * lamW} cy={862} r={9} fill={INK} opacity={prog(f, wv, 12)} />
				<WaveLine x0={120} x1={120 + 4 * lamW} y={862} lambda={lamW} amp={22} color={f >= wv + 30 ? COOL : AMBER.stroke} draw={prog(f, wv, 20)} />
				{f >= wv + 64 ? <g stroke={AMBER.stroke} strokeWidth={4} fill="none"><path d={`M120,820 V810 H${120 + lamW} V820`} /></g> : null}
				<Thermo level={level} />
			</FrameSvg>
			<Lbl x={GB.x} y={GB.y - 24} at={0} color={INK} size={30}>13.8 billion years ago: extremely hot and dense</Lbl>
			<CrossedChip x={1150} y={420} at={expl + 10} crossAt={expl + 30} size={28} caption="space itself stretches">explosion into empty space</CrossedChip>
			<Lbl x={GC.x} y={GC.y - 86} at={cen + 70} color={SLATE.ink} size={28} anchor="middle">centre?</Lbl>
			<HandTag x={0} y={0} at={cen + 84} color={SLATE.stroke} marks={[{kind: 'cross', cx: GC.x, cy: GC.y, size: 70}]} />
			<HandTag x={GB.x + 20} y={GB.y + GB.h - 30} text="no edge, no centre" at={cen + 92} size={36} color={INK} />
			<HandTag x={120 + 4 * lamW + 30} y={862} text="stretched: less energy" at={wv + 70} size={34} color={AMBER.ink} />
			<Lbl x={120} y={930} at={wv + 10} color={GREY.ink} size={26}>colour here = energy, not what you would see</Lbl>
			<Chip x={1150} y={540} at={lam} size={30} color={INK}>E = hf = hc/λ: longer λ, less energy</Chip>
			<Chip x={1150} y={610} at={wi} size={30} color={INK}>λmax = b/T (an earlier video)</Chip>
			<div style={{position: 'absolute', left: 1150, top: 690, opacity: prog(f, hal, 12)}}><Row at={hal} size={44}>size × 2 → λ × 2 → <MarkSpan at={hal + 16} color={RED.stroke}><span style={{color: RED.ink}}>T ÷ 2</span></MarkSpan></Row></div>
		</>
	);
};

// ---------- 3. the threshold rule ----------
const PB = {x: 96, y: 420, w: 520, h: 420};
const SLOTS = Array.from({length: 12}, (_, k) => [PB.x + 70 + (k % 4) * 125, PB.y + 80 + Math.floor(k / 4) * 130] as const);
const GG = {x: 720, w: 560, y0: 860, y1: 300, lo: -2, hi: 3};
export const S03: React.FC = () => {
	const id = 'threshold-rule';
	const f = useCurrentFrame();
	const sq = cue(id, 'squared'), fm = cue(id, 'far more than that'), bal = cue(id, 'balance'), typ = cue(id, 'typical photons fell below the threshold'), rare = cue(id, 'Only the rare, extra energetic photons could still make pairs'), ann = cue(id, 'annihilation carried on'), mk = cap(id, cue(id, 'making'));
	const T = 10 ** (Math.log10(T_HOT) + (Math.log10(T_COOL) - Math.log10(T_HOT)) * prog(f, typ, 60));
	const vals = SPREAD.map(k => ePeakMeV(T) * k);
	const alive = SLOTS.map((_, k) => {
		if (f >= ann && f >= ann + 14 * k) return k === 5 && f < ann + 14 * k + 40 && f >= rare + 30;
		if (f < bal) return true;
		return ((f - bal + 7 * k) % 64) < 44;
	});
	const n = alive.filter(Boolean).length;
	const thin = prog(f, rare, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				{SLOTS.map(([x, y], k) => alive[k] ? <g key={k}><Particle x={x - 22} y={y} r={20} color={NAVY.stroke} text="e⁻" size={18} /><Anti x={x + 22} y={y} r={20} color={ROSE.stroke} text="e⁺" size={18} /></g>
					: <g key={k}><Packet x={x - 30} y={y} deg={180} len={40} color={AMBER.stroke} /><Packet x={x + 30} y={y} deg={0} len={40} color={AMBER.stroke} /></g>)}
				<ThresholdGauge x={GG.x} w={GG.w} y0={GG.y0} y1={GG.y1} lo={GG.lo} hi={GG.hi} values={vals} line={E_E_MEV} lineLabel="mc²" color={AMBER.stroke} lineColor={SLATE.ink} ring={f >= rare ? TAIL_I : -1} ticks={[-2, -1, 0, 1, 2, 3]} tickLabel={e => (e < 0 ? `0.${'0'.repeat(-e - 1)}1` : `${10 ** e}`)} axisLabel="photon energy (MeV, log scale)" />
				<g opacity={prog(f, bal, 12)}>
					<line x1={PB.x + 40} y1={PB.y - 34} x2={PB.x + 250} y2={PB.y - 34} stroke={INK} strokeWidth={Math.max(1.5, 7 * (1 - thin))} />
					<path d={`M${PB.x + 250},${PB.y - 34} l-16,-9 v18 z`} fill={INK} />
					<line x1={PB.x + 250} y1={PB.y - 14} x2={PB.x + 40} y2={PB.y - 14} stroke={INK} strokeWidth={7} />
					<path d={`M${PB.x + 40},${PB.y - 14} l16,-9 v18 z`} fill={INK} />
				</g>
				<Thermo level={0.85 - 0.6 * prog(f, typ, 60)} />
			</FrameSvg>
			<Strip x={96} y={168} at={sq} size={32}>head-on, equal energies: each photon E ≥ mc²</Strip>
			<Lbl x={96} y={272} at={sq + 10} color={INK} size={28}>antiparticle: same mass, opposite charge</Lbl>
			<HandTag x={GG.x + GG.w + 18} y={logPos(E_E_MEV, GG.lo, GG.hi, GG.y0, GG.y1) + 44} text="rest energy" at={sq + 16} size={30} color={SLATE.ink} marks={[{kind: 'underline', x1: GG.x, x2: GG.x + GG.w, y: logPos(E_E_MEV, GG.lo, GG.hi, GG.y0, GG.y1) + 12}]} />
			<HandTag x={GG.x + 20} y={GG.y1 - 70} text="plenty to spare" at={fm} out={typ} size={34} color={AMBER.ink} />
			<Lbl x={PB.x + 270} y={PB.y - 22} at={bal} color={INK} size={28}>making ⇄ annihilating</Lbl>
			<Lbl x={PB.x} y={PB.y + PB.h + 40} at={0} color={INK} size={30}>{`e⁻ e⁺ pairs (model): ${n}`}</Lbl>
			<HandTag x={GG.x + 120} y={GG.y1 - 70} text="the energetic tail" at={rare + 10} size={34} color={AMBER.ink} />
			<HandTag x={96} y={940} text="making: rare; annihilation: no threshold" at={mk} size={34} color={SLATE.ink} />
			<Readout x={1380} y={170} label="T" value={`${sci(T, 0)} K`} color={RED.ink} w={260} />
		</>
	);
};

// ---------- 4. how hot for electron pairs? ----------
export const S04: React.FC = () => {
	const id = 'worked-electron-scale';
	const f = useCurrentFrame();
	const j = cue(id, 'joules'), m = cue(id, 'metres'), k = cue(id, 'kelvin'), mi = cap(id, cue(id, 'minutes'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={168} at={2} size={32}>Estimate the temperature at which peak photons can just make electron pairs.</Strip>
			<Strip x={96} y={236} at={6} size={34}>E = mc²; E = hc/λ; λmax = b/T</Strip>
			<Givens x={96} y={312} w={1500} at={10} size={30} lines={['mₑ = 9.109 × 10⁻³¹ kg', 'h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, b = 2.898 × 10⁻³ m K (data sheet)']} />
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 18, width: 1520}}>
				<Row at={j - 6} ageAt={m} size={46}>E = (9.109 × 10⁻³¹)<MarkSpan at={j + 30} color={SLATE.stroke}>(3.00 × 10⁸)²</MarkSpan>{` = ${sci(E_E_SHOWN, 1)} J (${fx(E_E_MEV, 2)} MeV)`}</Row>
				<Row at={m - 6} ageAt={k} size={46}>{`λ = hc/E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (${sci(E_E_SHOWN, 1)}) = ${sci(LAM_E, 1)} m`}</Row>
				<Row at={k - 6} size={52}><AnswerBox at={k}>{`T = b/λ = (2.898 × 10⁻³) / (${sci(LAM_E_SHOWN, 1)}) ≈ ${sci(T_E, 1)} K`}</AnswerBox></Row>
			</div>
			<HandTag x={1300} y={446} text="rest energy" at={j + 20} out={m} size={32} color={SLATE.ink} />
			<CrossedChip x={1100} y={740} at={j + 50} crossAt={j + 70} out={k} size={28} caption="square c">{`c not squared: ${sci(E_E_SLIP, 1)} J`}</CrossedChip>
			<HandTag x={1180} y={590} text="λ in metres" at={m + 20} out={k + 30} size={32} color={AMBER.ink} />
			<HandTag x={96} y={790} text="estimate of the scale" at={k + 16} size={36} color={RED.ink} />
			<FrameSvg>
				<Thermo level={0.55} x={1740} y={480} h={300} label={false} />
				<ThermoTick u={0.4} text="~10⁹ K: electron pairs mostly gone" o={prog(f, mi, 12)} x={1740} y={480} h={300} />
			</FrameSvg>
			<Lbl x={1240} y={880} at={mi + 8} color={GREY.ink} size={30}>first few minutes</Lbl>
		</>
	);
};

// ---------- 5. heavier particles first ----------
const G5 = {x: 200, w: 220, y0: 860, y1: 300, lo: -1, hi: 4};
const QF = {x: 680, y: 300, w: 520, h: 520};
const GROUPS = [[780, 400, 'p'], [960, 380, 'n'], [1110, 470, 'p'], [820, 600, 'p'], [1010, 640, 'n'], [1120, 750, 'p'], [770, 760, 'p']] as const;
const QK = (g: number) => (GROUPS[g][2] === 'p' ? ['u', 'u', 'd'] : ['u', 'd', 'd']);
export const S05: React.FC = () => {
	const id = 'heavier-particles';
	const f = useCurrentFrame();
	const ab = cue(id, "about eighteen hundred times an electron's"), tt = cue(id, 'two times ten to the twelve kelvin'), qk = cue(id, 'quarks'), ms = cue(id, 'a millionth of a second'), nt = cap(id, cue(id, 'neutrons', 2));
	const bind = prog(f, nt, 30);
	const t = f / 30;
	const yP = logPos(E_P_MEV, G5.lo, G5.hi, G5.y0, G5.y1), yE = logPos(E_E_MEV, G5.lo, G5.hi, G5.y0, G5.y1);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 168}}><Row at={-30} size={32}><AnswerBox at={-30} tick={false}>electrons: ~10⁹ K</AnswerBox></Row></div>
			<FrameSvg>
				<ThresholdGauge x={G5.x} w={G5.w} y0={G5.y0} y1={G5.y1} lo={G5.lo} hi={G5.hi} values={[]} line={E_E_MEV} lineLabel="mₑc²" extraLine={f >= ab ? {v: E_P_MEV, label: `mₚc² (× ${fx(P_OVER_E)}, about 1800)`} : undefined} color={AMBER.stroke} lineColor={SLATE.ink} ticks={[-1, 0, 1, 2, 3, 4]} tickLabel={e => (e < 0 ? '0.1' : `${10 ** e}`)} axisLabel="rest energy (MeV, log scale)" />
				{f >= qk ? <g opacity={prog(f, qk, 14)}>
					<rect x={QF.x} y={QF.y} width={QF.w} height={QF.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
					{GROUPS.map(([gx, gy, kind], g) => <g key={g}>
						{bind > 0.001 ? <circle cx={gx} cy={gy} r={46} fill={kind === 'p' ? ROSE.stroke : NEUTRON} opacity={0.85 * bind} /> : null}
						{QK(g).map((q, i) => {
							const a = i * 2.1 + g, fx0 = QF.x + 40 + ((g * 157 + i * 211) % (QF.w - 80)), fy0 = QF.y + 40 + ((g * 113 + i * 89) % (QF.h - 80));
							const wx = fx0 + 18 * Math.sin(t * 1.3 + g + i), wy = fy0 + 18 * Math.cos(t * 1.1 + 2 * i + g);
							const bx = gx + 22 * Math.cos(a), by = gy + 22 * Math.sin(a);
							return <Particle key={i} x={wx + (bx - wx) * bind} y={wy + (by - wy) * bind} r={14} color={TEAL.stroke} text={q} size={18} />;
						})}
					</g>)}
					{Array.from({length: 6}, (_, i) => <Packet key={`g${i}`} x={QF.x + 60 + ((i * 97 + t * 40) % (QF.w - 120))} y={QF.y + 70 + i * 75} deg={i * 50} len={36} color={AMBER.stroke} opacity={0.8} />)}
				</g> : null}
				<Thermo level={0.9} y={300} h={500} label={false} />
				<ThermoTick u={0.85} text="~2 × 10¹² K" o={prog(f, tt, 12)} y={300} h={500} />
				<ThermoTick u={0.25} text="~10⁹ K" o={1} y={300} h={500} />
			</FrameSvg>
			<HandTag x={0} y={0} at={ab + 14} color={SLATE.stroke} marks={[{kind: 'brace', x: G5.x + G5.w / 2, y1: yP, y2: yE, facing: 'right'}]} />
			<HandTag x={G5.x + 20} y={yP + 50} text={`${fx(Math.round(E_P_MEV / 10) * 10)} MeV (data-sheet masses)`} at={ab + 20} size={30} color={SLATE.ink} />
			<HandTag x={1250} y={880} text="heavier: hotter" at={tt + 16} size={34} color={RED.ink} />
			<Lbl x={1640} y={250} at={tt} color={RED.ink} size={28} anchor="end">proton pairs mostly gone</Lbl>
			<Lbl x={1250} y={190} at={tt} color={RED.ink} size={30}>{`T ≈ ${sci(T_P, 1)} K`}</Lbl>
			<Lbl x={QF.x} y={QF.y - 22} at={qk} color={TEAL.ink} size={30}>quarks: smaller particles inside protons and neutrons</Lbl>
			<Lbl x={QF.x + QF.w - 10} y={QF.y + QF.h + 40} at={ms} color={GREY.ink} size={30} anchor="end">~10⁻⁶ s</Lbl>
			<Lbl x={GROUPS[0][0]} y={GROUPS[0][1] - 62} at={nt + 20} color={ROSE.ink} size={26} anchor="middle">p (uud)</Lbl>
			<Lbl x={GROUPS[1][0]} y={GROUPS[1][1] - 62} at={nt + 24} color={GREY.ink} size={26} anchor="middle">n (udd)</Lbl>
			<HandTag x={QF.x + 20} y={QF.y + QF.h + 40} text="bound in threes" at={nt + 30} size={34} color={TEAL.ink} marks={[{kind: 'circle', cx: GROUPS[3][0], cy: GROUPS[3][1], rx: 60, ry: 58}]} />
		</>
	);
};

// ---------- 6. matter wins by a whisker ----------
const MB = {x: 96, y: 230, w: 1100, h: 600};
const RUN6 = lazy(() => {
	const id = 'matter-excess';
	const an = cue(id, "why didn't they annihilate completely"), one = cue(id, 'to one'), ep = cue(id, 'Electrons and positrons did the same'), of = cap(id, cue(id, 'made of'));
	return runBox({seed: 81, frames: dur(id), w: MB.w, h: MB.h, speed: 5,
		species: [{id: 'p', r: 20}, {id: 'pb', r: 20}, {id: 'n', r: 20}, {id: 'nb', r: 20}, {id: 'g', r: 6, mass: 0.2}, {id: 'e', r: 10, mass: 0.3}, {id: 'eb', r: 10, mass: 0.3}],
		initial: [{species: 'p', count: 13}, {species: 'pb', count: 12}, {species: 'n', count: 6}, {species: 'nb', count: 5}],
		inject: [{at: ep, species: 'e', count: 9}, {at: ep, species: 'eb', count: 8}],
		remove: [{at: one, species: 'pb', count: 20}, {at: one, species: 'nb', count: 20}, {at: of, species: 'eb', count: 20}],
		reactions: [{from: ['p', 'pb'], to: ['g', 'g'], ea: 0, activeFrom: an}, {from: ['n', 'nb'], to: ['g', 'g'], ea: 0, activeFrom: an}, {from: ['e', 'eb'], to: ['g', 'g'], ea: 0, activeFrom: ep}],
	});
});
export const S06: React.FC = () => {
	const id = 'matter-excess';
	const f = useCurrentFrame();
	const an = cue(id, "why didn't they annihilate completely"), ex = cue(id, 'a tiny excess of matter'), one = cue(id, 'to one'), ep = cue(id, 'Electrons and positrons did the same'), of = cap(id, cue(id, 'made of'));
	const run = RUN6();
	const cnt = (s: string) => run.counts[run.config.species.findIndex(q => q.id === s)][Math.min(run.frames - 1, Math.max(0, f))];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={MB.x} y={MB.y} width={MB.w} height={MB.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<BoxParticles run={run} f={f} x={MB.x} y={MB.y} draw={{
					p: (x, y, k) => <Particle key={k} x={x} y={y} r={20} color={ROSE.stroke} text="p" size={20} />,
					pb: (x, y, k) => <Anti key={k} x={x} y={y} r={20} color={ROSE.stroke} text="p̄" size={20} />,
					n: (x, y, k) => <Particle key={k} x={x} y={y} r={20} color={NEUTRON} text="n" size={20} />,
					nb: (x, y, k) => <Anti key={k} x={x} y={y} r={20} color={NEUTRON} text="n̄" size={20} />,
					g: (x, y, k) => <Packet key={k} x={x} y={y} deg={(k * 47) % 360} len={30} color={AMBER.stroke} opacity={0.85} />,
					e: (x, y, k) => <Particle key={k} x={x} y={y} r={11} color={NAVY.stroke} />,
					eb: (x, y, k) => <circle key={k} cx={x} cy={y} r={10} fill="#fffdf8" stroke={NAVY.stroke} strokeWidth={4} />,
				}} />
			</FrameSvg>
			<Readout x={1260} y={230} label="antiprotons (model)" value={`${cnt('pb') + cnt('nb')}`} color={ROSE.ink} w={420} />
			<Readout x={1260} y={380} label="photons (model)" value={`${cnt('g')}`} color={AMBER.ink} w={420} />
			<Lbl x={1260} y={560} at={ex} color={INK} size={30}>matter : antimatter</Lbl>
			<Lbl x={1260} y={608} at={ex} color={INK} size={34}>= 1 000 000 001 : 1 000 000 000</Lbl>
			<Lbl x={1260} y={656} at={ex + 8} color={GREY.ink} size={28}>illustrative: about 1 extra per billion</Lbl>
			<Lbl x={MB.x} y={MB.y + MB.h + 40} at={an} color={GREY.ink} size={28}>model: the real excess was about one in a billion</Lbl>
			<Lbl x={1260} y={730} at={one} color={AMBER.ink} size={32}>{`photons per proton or neutron: more than 10⁹ (≈ ${sci(PHOTONS_PER, 1)})`}</Lbl>
			<HandTag x={1260} y={800} text="photons win the count" at={one + 16} out={ep} size={34} color={AMBER.ink} />
			<HandTag x={MB.x + 30} y={MB.y + 36} text="the survivors" at={one + 10} out={ep} size={34} color={ROSE.ink} />
			<HandTag x={1260} y={800} text="electrons left over" at={of} size={34} color={NAVY.ink} />
		</>
	);
};
