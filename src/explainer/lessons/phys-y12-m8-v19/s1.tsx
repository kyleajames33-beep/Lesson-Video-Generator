// Scenes 1 to 6: the hook (last time's curve to a corner; the two repelling light nuclei grow to the centre and edge
// together on the field motion engine, the arrows lengthening; predict; the painted Sun), two forces at two ranges (a
// live separation slider with force and barrier readouts; the force curves, then the energy curve: the hill and the
// valley), how big the push is (Coulomb's law worked), getting past the hill (the particle box with its temperature
// rising, a typical nucleus rolling back, tunnelling through well below the top), why fission is easier to start (hill
// against no hill) and why energy comes out (binding bars).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {BindingCurve} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {NucleonCluster} from '../../physics/atom/decay';
import {CurveMark} from '../../physics/atom/binding';
import {Hill, SepAxes, fnPath, hillX, hillXin, hillY, sepX, sepY} from '../../physics/atom/fusion';
import type {HillG, SepBox} from '../../physics/atom/fusion';
import {StackColumn} from '../../physics/atom/qvalue';
import {Disc} from '../../physics/atom/neutron';
import {LPlate, discPlace} from '../../physics/light/plates';
import {runMotion, stateAt} from '../../sims/field-motion';
import {runBox} from '../../sims/particle-box';
import {ParticleBoxView} from '../../sims/views';
import {HandoffBoard18, INSET18, M8V18FinalFrame, RepelInset} from '../phys-y12-m8-v18/s3';
import {dur as dur18} from '../phys-y12-m8-v18/common';
import {BEA_D, BEA_HE, BEA_T, BE_D, BE_GAIN, BE_HE, BE_T, F3, F_ATOM, F_RATIO, F_SLIP, HEAD, HEAD_SIZE, KG_EQ, M_DEUTERON, T_REACTOR, T_SUN, U3, barrierAt, cap, cue, dur, forceAt, hold, kT} from './common';
import {AMBER, Arrow, GREY, Givens, INK, L_H2, L_H3, Lbl, NAVY, NEUTRON, NUC_RED, RED, SLATE, SUN, Strip, T, fx, sci} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook ----------
/** The approach: separation (fm) of two nuclei under repulsion alone (field motion engine, custom 1/r² push). */
const APPROACH = runMotion({field: {kind: 'custom', accel: x => [3.09 / (x * x), 0] as const}, start: {x: 10, y: 0, vx: -1.2, vy: 0}, duration: 5.5, steps: 400});
const sepAt = (t: number) => stateAt(APPROACH, Math.min(APPROACH.duration, Math.max(0, t))).x;
const THUMB: BCBox = {x: 1460, y: 200, w: 340, h: 170};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const dt = cue(id, 'deuterium and tritium'), hh = cue(id, 'harder and harder as they get closer'), pr = cue(id, 'Make your prediction'), yc = cue(id, 'Yes, it can'), nu = cap(id, cue(id, 'despite repulsion between nuclei'), 8);
	const h = hold(id);
	if (f < 1) return <M8V18FinalFrame />;
	const g = prog(f, 1, 40);
	const s = lerp(1, 2, g), x = lerp(INSET18.x, 900, g), y = lerp(INSET18.y, 470, g);
	const sep = sepAt(5.0 * prog(f, hh, 80, t => t));
	const gap = 22 + 4.8 * sep, len = 40 * (10 / sep);
	const sun = prog(f, yc, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 1, 24)}}><HandoffBoard18 f={dur18('handoff-v19') - 1} final heading={false} chip={false} inset={false} /></div>
			<MarkedHeading text={HEAD} marks={['despite repulsion']} at={nu} size={HEAD_SIZE} color={INK} markColor={RED.ink} />
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why can fusion release energy despite repulsion between nuclei?</Chip>
			<FrameSvg>
				<g opacity={prog(f, 6, 24)}>
					<BindingCurve b={THUMB} size={26} ticksA={[]} ticksB={[]} xTitle="" yTitle="" width={4} />
					<CurveMark b={THUMB} A={235} B={7.59} text="" color={NAVY.stroke} r={7} />
					<CurveMark b={THUMB} A={4} B={7.074} text="" color={NAVY.stroke} r={7} />
				</g>
				<RepelInset x={x} y={y} s={s} gap={gap} len={len} box={1 - g} labels={1 - g} />
				<Countdown start={h.startFrame} end={h.endFrame} x={420} y={600} r={40} />
				{f >= yc ? <Mark x={500} y={392} at={yc} kind="tick" color={INK} size={30} /> : null}
				{sun > 0.001 ? <LPlate spec={SUN} p={discPlace(SUN, 1620, 690, 360)} opacity={sun} /> : null}
			</FrameSvg>
			<Lbl x={1460} y={420} at={10} color={GREY.ink} size={26}>last time: the curve</Lbl>
			<Lbl x={830} y={590} at={dt} color={INK} size={30} anchor="end">²H (deuterium): 1p + 1n</Lbl>
			<Lbl x={970} y={640} at={dt + 10} color={INK} size={30}>³H (tritium): 1p + 2n</Lbl>
			<Lbl x={900} y={250} at={hh + 20} color={RED.ink} size={30} anchor="middle">both positive: they repel</Lbl>
			<Chip x={96} y={270} at={pr} size={32} color={INK}>no, it costs energy</Chip>
			<Chip x={96} y={350} at={pr + 4} size={32} color={INK} border={f >= yc ? INK : undefined}>yes, it pays back more</Chip>
			<Chip x={96} y={430} at={pr + 8} size={32} color={INK}>they can never join</Chip>
			<HandTag x={1330} y={470} text="the Sun runs on fusion" at={yc + 12} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [1500, 490], to: [1560, 545], bend: 0.1}]} />
			<Lbl x={1460} y={890} at={yc + 16} color={GREY.ink} size={26}>(an earlier video)</Lbl>
		</>
	);
};

// ---------- 2. two forces, two ranges ----------
const SB: SepBox = {x: 220, y: 380, w: 1050, h: 440, rMax: 10, yMin: -30, yMax: 30};
const att = (r: number) => (r >= 3 ? 0 : -14 * (3 - r) ** 1.6);
const HG2: HillG = {x0: sepX(SB, 0), x1: sepX(SB, 10), xc: sepX(SB, 3), xw0: sepX(SB, 0.9), xw1: sepX(SB, 2.4), y0: 620, top: 170, deep: 200};
export const S02: React.FC = () => {
	const id = 'two-ranges';
	const f = useCurrentFrame();
	const er = cue(id, 'The electric repulsion reaches a long way'), tf = cue(id, 'only within about three femtometres'), rp = cue(id, 'far stronger than the repulsion'), pe = cue(id, 'So plot energy against separation'), cb = cue(id, 'called the Coulomb barrier'), dv = cap(id, cue(id, "there's a deep valley"), 24);
	let r = 10;
	r = lerp(r, 5, prog(f, er, 30));
	r = lerp(r, 3, prog(f, er + 70, 30));
	r = lerp(r, 2.4, prog(f, rp, 24));
	const fr = forceAt(r), fa = r < 3 ? Math.abs(att(r)) : 0;
	const en = prog(f, pe, 24), force = 1 - en;
	const rx = sepX(SB, r), lx = sepX(SB, 0);
	const redLen = Math.min(150, 5 * fr), navyLen = Math.min(220, 9 * fa);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={lx} y1={270} x2={sepX(SB, 10)} y2={270} stroke="rgba(60,45,20,0.3)" strokeWidth={3} strokeDasharray="8 6" />
				<NucleonCluster cx={lx} cy={270} r={13} discs={L_H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<NucleonCluster cx={rx} cy={270} r={13} discs={L_H3} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<Arrow x0={rx + 34} y0={250} x1={rx + 34 + redLen} y1={250} color={RED.stroke} width={6} opacity={prog(f, er, 12)} />
				<Arrow x0={rx - 30} y0={292} x1={rx - 30 - navyLen} y1={292} color={NAVY.stroke} width={8} opacity={navyLen > 4 ? 1 : 0} />
				<g opacity={force}>
					<SepAxes b={SB} yTitle="force between them (N)" size={26} />
					{[-30, -15, 15, 30].map(v => <text key={v} x={SB.x - 12} y={sepY(SB, v) + 9} textAnchor="end" style={T(26, INK, 700)}>{v > 0 ? v : '−' + Math.abs(v)}</text>)}
					<path d={fnPath(SB, rr => forceAt(rr), 0.6, 10)} fill="none" stroke={RED.stroke} strokeWidth={6} opacity={prog(f, er, 16)} />
					<path d={fnPath(SB, att, 0.6, 10)} fill="none" stroke={NAVY.stroke} strokeWidth={6} opacity={prog(f, tf, 16)} />
					<circle cx={sepX(SB, r)} cy={sepY(SB, Math.min(30, fr))} r={10} fill={RED.stroke} opacity={prog(f, er, 12)} />
				</g>
				<g opacity={en}>
					<SepAxes b={{...SB, yMin: 0, yMax: 1}} zero={false} yTitle="energy (schematic, not to scale)" size={26} />
					<Hill g={HG2} shadeHill={prog(f, cb, 16)} shadeWell={prog(f, dv, 16)} />
					<circle cx={rx} cy={hillY(HG2, rx)} r={12} fill={RED.stroke} stroke="#fffdf8" strokeWidth={3} />
				</g>
			</FrameSvg>
			<Readout x={1390} y={210} label="separation r" value={`${fx(r, 1)} fm`} color={INK} w={420} />
			<Readout x={1390} y={350} label="repulsion F" value={`${fx(fr, 1)} N`} color={RED.ink} w={420} />
			<Readout x={1390} y={490} label="repulsion energy at this r" value={`${fx(barrierAt(r), 2)} MeV`} color={RED.ink} w={420} />
			<Lbl x={sepX(SB, 6)} y={sepY(SB, 22)} at={er + 6} out={pe} color={RED.ink} size={28}>repulsion (Coulomb&apos;s law)</Lbl>
			<Lbl x={sepX(SB, 3.4)} y={sepY(SB, -22)} at={tf + 6} out={pe} color={NAVY.ink} size={28}>strong attraction (schematic)</Lbl>
			<Lbl x={1390} y={660} at={tf + 10} color={INK} size={28}>1 fm = 10⁻¹⁵ m</Lbl>
			<HandTag x={1390} y={720} text="closer → harder push" at={er + 100} out={pe} size={34} color={RED.ink} />
			<HandTag x={1390} y={790} text="short range, much stronger" at={rp + 10} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: sepX(SB, 3), cy: 270, rx: 50, ry: 40}]} />
			<Chip x={760} y={330} at={cb} size={28} color={RED.ink}>Coulomb barrier: the energy hill from repulsion</Chip>
			<Lbl x={HG2.x0 + 20} y={HG2.y0 + 70} at={dv + 6} color={NAVY.ink} size={28}>strong force: deep valley</Lbl>
		</>
	);
};

// ---------- 3. how big is the hill? ----------
const HG3: HillG = {x0: 1300, x1: 1810, xc: 1400, xw0: 1310, xw1: 1370, y0: 820, top: 150, deep: 60};
export const S03: React.FC = () => {
	const id = 'coulomb-push';
	const f = useCurrentFrame();
	const cl = cue(id, "Use Coulomb's law"), tn = cue(id, 'twenty-six newtons'), tk = cue(id, 'a two and a half kilogram mass'), bl = cue(id, 'about a billion times less'), he = cap(id, cue(id, 'half an MeV of kinetic energy'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={190} at={-30} size={32}>Force between ²H and ³H nuclei 3.0 fm apart</Strip>
			<Strip x={96} y={256} at={-30} size={32}>F = kq₁q₂ / r²</Strip>
			<Givens x={96} y={326} w={1100} at={-30} size={30} lines={[<>q₁ = q₂ = 1.602 × 10⁻¹⁹ C (one proton each)</>, <>r = 3.0 fm = 3.0 × 10⁻¹⁵ m</>, <>k = 8.99 × 10⁹ N m² C⁻² (data sheet)</>]} />
			<FrameSvg>
				<rect x={1300} y={190} width={520} height={250} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				<NucleonCluster cx={1460} cy={300} r={16} discs={L_H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<NucleonCluster cx={1640} cy={300} r={16} discs={L_H3} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<Arrow x0={1420} y0={300} x1={1350} y1={300} color={RED.stroke} width={6} />
				<Arrow x0={1690} y0={300} x1={1780} y1={300} color={RED.stroke} width={6} />
				<line x1={1460} y1={370} x2={1640} y2={370} stroke={INK} strokeWidth={3} />
				<Hill g={HG3} opacity={prog(f, he, 16)} shadeHill={1} />
			</FrameSvg>
			<Lbl x={1550} y={410} at={-30} color={INK} size={28} anchor="middle">3.0 fm</Lbl>
			<Lbl x={1320} y={230} at={-30} color={GREY.ink} size={26}>²H and ³H</Lbl>
			<HandTag x={480} y={276} text={"Coulomb's law (Year 11)"} at={cl + 10} size={30} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={tn} ageAt={tk} size={44} oldSize={34}>F = 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)² / (3.0 × 10⁻¹⁵)²</Row>
				<Row at={tn + 20} size={56}><AnswerBox at={tn + 24}>{`F = ${fx(F3, 1)} N ≈ ${fx(F3, 0)} N`}</AnswerBox></Row>
			</div>
			<Lbl x={96} y={740} at={tk} color={INK} size={32}>{`≈ the weight of a ${fx(KG_EQ, 1)} kg mass (about two and a half)`}</Lbl>
			<Lbl x={96} y={790} at={tk + 10} color={INK} size={32}>{`acting on a nucleus of only ${sci(M_DEUTERON, 1)} kg`}</Lbl>
			<Lbl x={96} y={860} at={bl} color={GREY.ink} size={30}>{`at 10⁻¹⁰ m: ${sci(F_ATOM, 1)} N (${sci(F_RATIO, 1)} times smaller: about a billion)`}</Lbl>
			<CrossedChip x={1300} y={480} at={tn + 50} crossAt={tn + 64} size={28} caption="fm → m: × 10⁻¹⁵">{`r = 3.0 → F = ${sci(F_SLIP, 1)} N`}</CrossedChip>
			<Lbl x={HG3.xc + 30} y={HG3.y0 - HG3.top - 20} at={he + 10} color={RED.ink} size={30}>{`hilltop ≈ ${fx(U3, 2)} MeV (about half)`}</Lbl>
			<Lbl x={1300} y={900} at={he + 14} color={GREY.ink} size={26}>energy (schematic)</Lbl>
		</>
	);
};

// ---------- 4. getting past the hill ----------
const HG4: HillG = {x0: 960, x1: 1810, xc: 1100, xw0: 975, xw1: 1050, y0: 760, top: 400, deep: 110, p: 3};
const OVER = (() => {
	const id = 'over-the-hill';
	return {hf: cue(id, 'a hundred and fifty million kelvin'), df: cue(id, 'a dense fuel')};
})();
export const BOX4 = runBox({seed: 1, frames: dur('over-the-hill'), w: 760, h: 500, species: [{id: 'd', r: 12, mass: 2}, {id: 't', r: 13, mass: 3}, {id: 'he', r: 14, mass: 4}, {id: 'n', r: 9, mass: 1}],
	initial: [{species: 'd', count: 16}, {species: 't', count: 16}], temperature: [[0, 1], [OVER.hf, 1], [OVER.hf + 60, 2.4]], volume: [[0, 1], [OVER.df, 1], [OVER.df + 60, 0.7]],
	reactions: [{from: ['d', 't'], to: ['he', 'n'], ea: 6, p: 1}], speed: 3});
export const S04: React.FC = () => {
	const id = 'over-the-hill';
	const f = useCurrentFrame();
	const et = cue(id, 'enormous temperatures'), fp = cue(id, 'about four per cent'), tu = cue(id, 'called tunnelling'), th = cue(id, 'right through the hill'), ra = cap(id, cue(id, 'the fast ones are always rare'), 24);
	const hot = f >= OVER.hf;
	const TT = hot ? T_REACTOR : T_SUN, e = kT(TT), share = e / (U3 * 1e3);
	const typ = 0.04 * HG4.top, xt = hillX(HG4, typ);
	const roll = f >= fp ? Math.sin(Math.min(1, (f - fp) / 70) * Math.PI) : 0;
	const mx = lerp(HG4.x1, xt, roll);
	const tun = 0.125 * HG4.top, xo = hillX(HG4, tun), xi = hillXin(HG4, tun);
	const tp = prog(f, th, 50);
	const tx = tp < 0.5 ? lerp(HG4.x1, xo, tp * 2) : tp < 0.8 ? lerp(xo, xi, (tp - 0.5) / 0.3) : lerp(xi, 1010, (tp - 0.8) / 0.2);
	const ty = tp < 0.5 ? hillY(HG4, tx) : tp < 0.8 ? HG4.y0 - tun : lerp(HG4.y0 - tun, HG4.y0 + HG4.deep, (tp - 0.8) / 0.2);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<ParticleBoxView run={BOX4} x={100} y={230} looks={{d: {tone: 'red'}, t: {tone: 'warm'}, he: {tone: 'amber'}, n: {tone: 'grey'}}} failed heat />
			<FrameSvg>
				<Hill g={HG4} shadeHill={1} shadeWell={1} />
				{f >= tu ? <path d={`M${HG4.x1},${hillY(HG4, HG4.x1) - 6} ` + Array.from({length: 40}, (_, i) => { const x = lerp(HG4.x1, HG4.xc - 10, i / 39); return `L${x.toFixed(1)},${(hillY(HG4, x) - 14).toFixed(1)}`; }).join(' ')} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, tu, 14)} /> : null}
				{f >= th ? <line x1={xo} y1={HG4.y0 - tun} x2={xi} y2={HG4.y0 - tun} stroke={NAVY.stroke} strokeWidth={5} strokeDasharray="12 8" /> : null}
				{f >= fp ? <circle cx={mx} cy={hillY(HG4, mx) - 12} r={13} fill={SLATE.stroke} stroke="#fffdf8" strokeWidth={3} /> : null}
				{f >= th ? <circle cx={tx} cy={ty - 12} r={13} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} /> : null}
			</FrameSvg>
			<Lbl x={100} y={212} at={-30} color={GREY.ink} size={26}>model: hot ²H and ³H nuclei colliding</Lbl>
			<Readout x={100} y={760} label="temperature" value={`${sci(TT, 1)} K`} color={SLATE.ink} w={360} />
			<Readout x={480} y={760} label="typical energy (share of barrier)" value={`${fx(e, 1)} keV (${fx(share * 100, 1)}%)`} color={SLATE.ink} w={440} />
			<Lbl x={HG4.x0} y={HG4.y0 + HG4.deep + 60} at={-30} color={GREY.ink} size={26}>energy against separation (schematic, not to scale)</Lbl>
			<Lbl x={1240} y={hillY(HG4, 1240) - 70} at={fp} color={SLATE.ink} size={28}>{`typical: ≈ ${fx(kT(T_REACTOR), 0)} keV ≈ ${fx((kT(T_REACTOR) / (U3 * 1e3)) * 100, 0)}% of the barrier`}</Lbl>
			<Lbl x={960} y={250} at={et} out={cue(id, 'a dense fuel')} color={SLATE.ink} size={28}>enormous speeds need enormous temperatures</Lbl>
			<Lbl x={HG4.xc - 20} y={HG4.y0 - HG4.top - 30} at={tu + 8} color={GREY.ink} size={28}>classically: climb over (almost none can)</Lbl>
			<HandTag x={1150} y={860} text="tunnelling: through, well below the top" at={th + 20} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: (xo + xi) / 2, cy: HG4.y0 - tun, rx: (xo - xi) / 2 + 30, ry: 34}]} />
			<Chip x={960} y={190} at={cue(id, 'a dense fuel')} size={28} color={INK}>needs: very hot + very dense + held long enough</Chip>
			<Readout x={1560} y={420} label="fusions (model)" value={f >= ra ? `${BOX4.reacted[0][Math.min(BOX4.frames - 1, f)]}` : '0'} color={AMBER.ink} w={250} />
			<Lbl x={1560} y={560} at={ra} color={AMBER.ink} size={26}>{`out of ${BOX4.collisions[Math.min(BOX4.frames - 1, f)]} collisions`}</Lbl>
		</>
	);
};

// ---------- 5. why fission is easier to start ----------
const HG5L: HillG = {x0: 140, x1: 860, xc: 300, xw0: 160, xw1: 250, y0: 640, top: 260, deep: 150, p: 2};
const HG5R: HillG = {x0: 1040, x1: 1780, xc: 1200, xw0: 1060, xw1: 1150, y0: 640, top: 260, deep: 150, p: 2};
export const S05: React.FC = () => {
	const id = 'neutron-contrast';
	const f = useCurrentFrame();
	const nc = cue(id, 'A neutron has no charge'), ca = cue(id, 'be captured'), fn = cue(id, 'fusion needs millions of kelvin'), ce = cap(id, cue(id, 'getting the nuclei close enough'), 24);
	const cp = prog(f, ca - 40, 60);
	const nx = cp < 0.75 ? lerp(HG5R.x1, HG5R.xc, cp / 0.75) : lerp(HG5R.xc, HG5R.xw1 - 30, (cp - 0.75) / 0.25);
	const ny = nx >= HG5R.xc ? HG5R.y0 : Math.min(HG5R.y0, hillY(HG5R, nx));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Hill g={HG5L} shadeHill={1} shadeWell={1} />
				<Hill g={HG5R} flat shadeWell={1} />
				{f >= nc ? <line x1={HG5R.xc} y1={HG5R.y0} x2={HG5R.x1} y2={HG5R.y0} stroke={GREY.stroke} strokeWidth={12} opacity={0.35 * prog(f, nc, 14)} strokeLinecap="round" /> : null}
				{f >= ca - 40 ? <Disc x={nx} y={ny - 16} r={15} fill={NEUTRON} text="n" /> : null}
				{f >= fn ? <g><circle cx={760} cy={hillY(HG5L, 760) - 16} r={15} fill={NUC_RED} stroke="#fffdf8" strokeWidth={3} /><rect x={560} y={hillY(HG5L, 760) - 70} width={200 * prog(f, fn, 20)} height={20} fill={AMBER.stroke} /></g> : null}
			</FrameSvg>
			<Lbl x={500} y={260} at={-30} color={INK} size={34} anchor="middle">²H + ³H</Lbl>
			<Lbl x={1410} y={260} at={-30} color={INK} size={34} anchor="middle">n + ²³⁵U</Lbl>
			<Lbl x={140} y={HG5L.y0 + HG5L.deep + 60} at={-30} color={GREY.ink} size={26}>energy against separation (schematic, not to scale)</Lbl>
			<Lbl x={1350} y={600} at={nc + 10} color={GREY.ink} size={30}>no charge → no Coulomb barrier</Lbl>
			<Lbl x={1200} y={HG5R.y0 + HG5R.deep + 30} at={ca} color={GREY.ink} size={28}>captured, even when slow</Lbl>
			<HandTag x={420} y={330} text="fusion: must get past the hill (over or through)" at={fn + 10} size={30} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 560, top: 880}}><Row at={ce} size={40}><AnswerBox at={ce + 4}>fusion&apos;s difficulty: getting close, not the energy released</AnswerBox></Row></div>
			<HandTag x={1500} y={690} text="no charge, no hill" at={nc + 40} size={32} color={GREY.ink} marks={[{kind: 'arrow', from: [1760, 620], to: [1280, 620], bend: 0.05}]} />
		</>
	);
};

// ---------- 6. why energy comes out ----------
const BPX = 20, BB = 820;
const THUMB6: BCBox = {x: 1220, y: 560, w: 560, h: 250};
export const S06: React.FC = () => {
	const id = 'binding-gain';
	const f = useCurrentFrame();
	const db = cue(id, "Deuterium's binding energy"), tb = cue(id, "Tritium's is about eight point five"), hb = cue(id, "helium four's is twenty-eight point three"), mt = cue(id, 'much more tightly bound'), pn = cue(id, 'seven MeV per nucleon'), rd = cue(id, 'Joining them releases the difference'), cv = cap(id, cue(id, 'higher up the binding energy curve'), 24);
	const gd = prog(f, db, 24), gt = prog(f, tb, 24), gh = prog(f, hb, 30), comb = prog(f, mt, 24);
	const lbl = (v: number, said: string) => `${fx(v, 2)} MeV (${said})`;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<StackColumn x={200} base={BB} w={130} segs={[{h: BE_D * BPX * gd, fill: '#f6d5d0', stroke: RED.stroke}]} title="²H" />
				<StackColumn x={400} base={BB} w={130} segs={[{h: BE_T * BPX * gt, fill: '#f6d5d0', stroke: RED.stroke}]} title="³H" />
				<StackColumn x={620} base={BB} w={130} segs={[{h: BE_D * BPX * comb, fill: '#f6d5d0', stroke: RED.stroke}, {h: BE_T * BPX * comb, fill: '#f6d5d0', stroke: RED.stroke}]} title="²H + ³H" />
				<StackColumn x={840} base={BB} w={130} segs={[{h: BE_HE * BPX * gh, fill: NAVY.soft, stroke: NAVY.stroke}]} title="⁴He" />
				{f >= rd ? <g opacity={prog(f, rd, 14)}><line x1={760} y1={BB - (BE_D + BE_T) * BPX} x2={990} y2={BB - (BE_D + BE_T) * BPX} stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
				<g opacity={prog(f, cv, 20)}>
					<BindingCurve b={THUMB6} size={26} ticksA={[4, 56, 235]} ticksB={[0, 8]} xTitle="" yTitle="" width={4} />
					<CurveMark b={THUMB6} A={2} B={1.112} text="²H" color={NAVY.ink} size={26} dx={22} dy={8} anchor="start" />
					<CurveMark b={THUMB6} A={4} B={7.074} text="⁴He" color={NAVY.ink} size={26} dx={-16} dy={-10} anchor="end" />
				</g>
				{f >= cv ? <Arrow x0={1254} y0={760} x1={1290} y1={612} color={AMBER.stroke} width={6} opacity={prog(f, cv + 6, 14)} /> : null}
			</FrameSvg>
			<Lbl x={265} y={BB - BE_D * BPX - 60} at={db + 10} color={RED.ink} size={26} anchor="middle">{lbl(BE_D, 'about 2.2')}</Lbl>
			<Lbl x={465} y={BB - BE_T * BPX - 60} at={tb + 10} color={RED.ink} size={26} anchor="middle">{lbl(BE_T, 'about 8.5')}</Lbl>
			<Lbl x={905} y={BB - BE_HE * BPX - 30} at={hb + 10} color={NAVY.ink} size={26} anchor="middle">{`${fx(BE_HE, 2)} MeV`}</Lbl>
			<Lbl x={265} y={BB - BE_D * BPX - 24} at={db + 20} color={GREY.ink} size={26} anchor="middle">{`${fx(BEA_D, 2)} per nucleon`}</Lbl>
			<Lbl x={465} y={BB - BE_T * BPX - 24} at={tb + 20} color={GREY.ink} size={26} anchor="middle">{`${fx(BEA_T, 2)} per nucleon`}</Lbl>
			<Chip x={1220} y={200} at={pn} size={30} color={NAVY.ink}>{`⁴He: ${fx(BEA_HE, 2)} MeV per nucleon (about seven)`}</Chip>
			<div style={{position: 'absolute', left: 1220, top: 270, display: 'flex', flexDirection: 'column', gap: 6}}><Row at={rd} size={44}>{`${fx(BE_HE, 2)} − (${fx(BE_D, 2)} + ${fx(BE_T, 2)})`}</Row><Row at={rd + 6} size={52}><AnswerBox at={rd + 10}>{`= ${fx(BE_GAIN, 1)} MeV`}</AnswerBox></Row></div>
			<HandTag x={1220} y={470} text="tighter → energy out" at={rd + 16} size={36} color={AMBER.ink} marks={[{kind: 'brace', x: 1000, y1: BB - BE_HE * BPX, y2: BB - (BE_D + BE_T) * BPX, facing: 'right'}]} />
			<Lbl x={1240} y={540} at={cv + 10} color={AMBER.ink} size={28}>fusion: up the curve from the light side</Lbl>
			<Lbl x={200} y={BB + 90} at={-30} color={GREY.ink} size={26}>binding energy (MeV)</Lbl>
		</>
	);
};
