// Scenes 1 to 6: the hook (last time's curve with the Sun and a massive star; which climbs higher? the painted gold ring),
// when the hydrogen runs out (a star cross-section whose core shrinks and heats while the envelope swells into the
// painted cool-red star; an HR point moving up and right), burning helium (helium nuclei on the particle box engine,
// three merging into carbon, the triple-alpha and alpha-capture equations with tallies), the pattern (the core
// temperature ladder with the live mass slider and its four readouts), a star like the Sun (the painted planetary
// nebula and a small painted white dwarf) and the massive star's climb (onion shells with the stage clock).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Disc, LPlate} from '../../physics/light/plates';
import {STAR_RED, STAR_WHITE} from '../../physics/light/stars';
import {Packet} from '../../physics/light/photo';
import {Nucleus} from '../../physics/light/massenergy';
import {BoxParticles, Readout} from '../../physics/atom/universe';
import {NucEq, Tally, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import {GOLD_RING, NEBULA, Onion, ReachBar, TempLadder, ladderY} from '../../physics/atom/elements';
import type {Ladder} from '../../physics/atom/elements';
import {Slider} from '../../physics/electromagnetism/plates';
import {hrX, hrY} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {runBox} from '../../sims/particle-box';
import {lazy} from '../../sims';
import {HRDiagram} from '../phys-y12-m8-v04/parts';
import {BC16, HandoffBoard05, M8V05FinalFrame, STEPS} from '../phys-y12-m8-v05/s3';
import {HE4} from '../phys-y12-m8-v05/parts';
import {AC_E, HEAD, HEAD_SIZE, IGNITE, MASSES, M_MASSIVE, STAGES, T_SUN_CORE, cap, cue, dur} from './common';
import {AMBER, CurveThumb, GREY, INK, LADDER_MARKS, Lbl, NAVY, NEUTRON, NucDisc, PURPLE, RED, ROSE, StarSection, THUMB, ThumbLabel, fx} from './parts';

const SUPS: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
const p10 = (e: number) => `10${String(e).split('').map(c => SUPS[c]).join('')}`;
/** Temperature text: "about 10⁸ K" or "about 3 × 10⁹ K" (one figure). */
export const tText = (T: number) => { let e = Math.floor(Math.log10(T) + 1e-9), m = Math.round(T / 10 ** e); if (m >= 10) { e += 1; m = 1; } return m === 1 ? `${p10(e)} K` : `${m} × ${p10(e)} K`; };
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
/** Reached-stage arrows on the thumbnail (mass numbers along the curve). */
export const R_MS: readonly [number, number, string] = [1, 4, AMBER.stroke];
export const R_HE: readonly [number, number, string] = [4, 16, AMBER.stroke];

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const kc = cue(id, 'can it keep climbing the curve'), tf = cue(id, 'one twenty-five times more massive'), pred = cue(id, 'prediction'), mo = cue(id, 'The massive one, by far'), gr = cue(id, 'the gold in a ring'), mk = cap(id, cue(id, 'So how does stellar mass change'));
	if (f < 1) return <M8V05FinalFrame />;
	const tickAt = Math.max(mo, pred + 92);
	const pl = pulseOf(f, kc, 40);
	const bars = prog(f, tickAt + 4, 30), shrink = prog(f, mk, 22);
	const pk = [bcX(BC16, 56), bcY(BC16, 8.79)] as const;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard05 f={0} final heading={false} chip={false} /></div>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - shrink}}><HandoffBoard05 f={0} final heading={false} chip={false} marks={false} core={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{pl > 0 ? STEPS.map(([a, b], i) => <path key={i} d={`M${bcX(BC16, a) + 10},${bcY(BC16, bindingAt(a)) - 30} Q${(bcX(BC16, a) + bcX(BC16, b)) / 2},${Math.min(bcY(BC16, bindingAt(a)), bcY(BC16, bindingAt(b))) - 70} ${bcX(BC16, b) - 6},${bcY(BC16, bindingAt(b)) - 34}`} fill="none" stroke={AMBER.stroke} strokeWidth={5 + 5 * pl} opacity={pl} />) : null}
				<Countdown start={pred} end={pred + 90} x={1450} y={290} r={40} />
				{f >= tickAt ? <Mark x={1530} y={272} at={tickAt} kind="tick" color={INK} size={32} /> : null}
				<g opacity={1 - shrink}>
					<rect x={712} y={760 - 70 * bars} width={24} height={70 * bars} rx={6} fill={PURPLE.stroke} />
					<rect x={1392} y={760 - 330 * bars} width={24} height={330 * bars} rx={6} fill={PURPLE.stroke} />
					{f >= gr + 30 ? <circle cx={pk[0]} cy={pk[1]} r={36} fill="none" stroke={RED.stroke} strokeWidth={4} opacity={prog(f, gr + 30, 10)} /> : null}
				</g>
				<LPlate spec={GOLD_RING} p={{x: 1500, y: 470, w: 300}} opacity={prog(f, gr, 14)} />
				<CurveThumb opacity={shrink} />
			</FrameSvg>
			<HandTag x={0} y={0} at={kc + 10} out={pred} color={AMBER.stroke} marks={[{kind: 'arrow', from: [bcX(BC16, 4) + 20, bcY(BC16, 7.07) - 60], to: [pk[0] - 20, pk[1] - 50], bend: -0.15}]} />
			<Lbl x={620} y={740} at={tf} out={mk} color={PURPLE.ink} size={30} anchor="middle">1 M☉</Lbl>
			<Lbl x={1240} y={770} at={tf} out={mk} color={PURPLE.ink} size={30} anchor="middle">25 M☉</Lbl>
			<Chip x={1520} y={196} at={pred} size={28} color={INK}>the Sun-like star</Chip>
			<Chip x={1520} y={252} at={pred + 4} size={28} color={INK}>the massive star</Chip>
			<Chip x={1520} y={308} at={pred + 8} size={28} color={INK}>both the same</Chip>
			<Lbl x={760} y={700} at={tickAt + 10} out={mk} color={PURPLE.ink} size={26}>how far up</Lbl>
			<HandTag x={1060} y={400} text="Au: beyond iron" at={gr + 20} out={mk} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [1160, 360], to: [bcX(BC16, 150), bcY(BC16, 8.27) + 30], bend: 0.1}]} />
			<Lbl x={1650} y={730} at={gr + 10} color={INK} size={26} anchor="middle">a gold ring</Lbl>
			<ThumbLabel at={mk + 10} />
			<Chip x={96} y={870} at={-30} out={mk} size={30} w={1728} color={INK} border={INK}>Next: how does stellar mass change the elements a star can make?</Chip>
		</>
	);
};

// ---------- 2. when the hydrogen runs out ----------
const ST = {x: 520, y: 560};
const HRT: HRBox = {x: 1120, y: 560, w: 380, h: 260, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
const ARR = Array.from({length: 8}, (_, i) => (i * Math.PI) / 4 + Math.PI / 8);
export const S02: React.FC = () => {
	const id = 'after-hydrogen';
	const f = useCurrentFrame();
	const fs = cue(id, 'Fusion in the core stops'), gs = cue(id, 'gravity squeezes it smaller'), ho = cue(id, 'so the core gets hotter'), sh = cue(id, 'in a shell around the core'), sc = cue(id, 'They swell and cool'), gi = cap(id, cue(id, 'the star becomes a red giant'));
	const glow = 1 - prog(f, fs, 20), squeeze = prog(f, gs, 30), swell = prog(f, sc, 40);
	const R = 190 + 140 * swell, r = 70 - 22 * squeeze;
	const lt = kf(f, [[ho, Math.log10(T_SUN_CORE)], [ho + 40, 8]]);
	const pL = 70 * (1 - 0.7 * prog(f, fs, 20));
	const mv = prog(f, gi, 40);
	const ptT = 5800 * (1 - mv) + 4200 * mv, ptL = 10 ** (2.5 * mv);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={STAR_RED} cx={ST.x} cy={ST.y} d={2 * R + 20} opacity={swell} />
				<StarSection cx={ST.x} cy={ST.y} R={R} r={r} red={swell} glow={glow} shell={prog(f, sh, 16)} envO={1 - 0.75 * swell}>
					{[[-22, -18], [20, -20], [-18, 22], [22, 18], [0, 0]].map(([dx, dy], i) => <Nucleus key={i} cx={ST.x + dx * (r / 70)} cy={ST.y + dy * (r / 70)} p={2} n={2} r={7} proton={ROSE.stroke} neutron={NEUTRON} />)}
				</StarSection>
				{ARR.map((a, i) => { const c = Math.cos(a), s = Math.sin(a), x0 = ST.x + c * (r + 40), y0 = ST.y + s * (r + 40); return <g key={i}>
					<line x1={x0 + c * 90} y1={y0 + s * 90} x2={x0 + c * 12} y2={y0 + s * 12} stroke={NAVY.stroke} strokeWidth={6} opacity={1 - swell} /><path d="M0,0 L-18,-10 L-18,10 z" transform={`translate(${x0} ${y0}) rotate(${(a * 180) / Math.PI + 180})`} fill={NAVY.stroke} opacity={1 - swell} />
					{pL > 6 && swell < 0.5 ? <g><line x1={ST.x + c * (r + 6)} y1={ST.y + s * (r + 6)} x2={ST.x + c * (r + pL - 10)} y2={ST.y + s * (r + pL - 10)} stroke={AMBER.stroke} strokeWidth={5} /><path d="M0,0 L-16,-9 L-16,9 z" transform={`translate(${ST.x + c * (r + pL)} ${ST.y + s * (r + pL)}) rotate(${(a * 180) / Math.PI})`} fill={AMBER.stroke} /></g> : null}
				</g>; })}
				<g opacity={prog(f, sc + 20, 14)}><HRDiagram b={HRT} f={f} L={{axes: 1, band: 1}} size={20} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" />
					<circle cx={hrX(HRT, ptT)} cy={hrY(HRT, ptL)} r={12} fill="#f6b36a" stroke={INK} strokeWidth={3} />
					{mv > 0.02 ? <path d={`M${hrX(HRT, 5800)},${hrY(HRT, 1)} L${hrX(HRT, ptT)},${hrY(HRT, ptL)}`} stroke={INK} strokeWidth={3} strokeDasharray="8 6" /> : null}
				</g>
				<CurveThumb reach={[R_MS]} />
			</FrameSvg>
			<ThumbLabel />
			<Readout x={1060} y={180} label="core temperature" value={`≈ ${tText(10 ** lt)}`} color={RED.ink} w={380} />
			<Lbl x={ST.x} y={ST.y + 360} at={0} out={sc} color={INK} size={26} anchor="middle">a Sun-like star (cross-section): core full of ⁴He</Lbl>
			<HandTag x={96} y={260} text="squeezed, so hotter" at={ho + 10} out={sc} size={34} color={NAVY.ink} />
			<Chip x={1060} y={330} at={sh} size={28} color={AMBER.ink}>shell burning: fusion in a layer around the core</Chip>
			<HandTag x={ST.x + 90} y={ST.y + 170} text="shell burning" at={sh + 16} out={sc} size={32} color={AMBER.ink} marks={[{kind: 'circle', cx: ST.x, cy: ST.y, rx: r + 40, ry: r + 40}]} />
			<HandTag x={1060} y={450} text="swells, cools" at={sc + 20} size={36} color={RED.ink} />
			<Lbl x={HRT.x} y={HRT.y - 20} at={sc + 20} color={INK} size={26}>HR diagram: up and to the right</Lbl>
			<Lbl x={hrX(HRT, 4200) + 20} y={hrY(HRT, 10 ** 2.5) - 20} at={gi + 30} color={INK} size={26}>red giant</Lbl>
		</>
	);
};

// ---------- 3. burning helium ----------
const BOX = {x: 96, y: 240, w: 620, h: 520};
const RUN3 = lazy(() => {
	const id = 'helium-burning';
	const hk = cue(id, 'about a hundred million kelvin'), os = cue(id, 'making oxygen sixteen');
	return runBox({seed: 61, frames: dur(id), w: BOX.w, h: BOX.h, speed: 4, temperature: [[0, 0.7], [hk, 0.7], [hk + 40, 2.4]],
		species: [{id: 'he', r: 15, mass: 4}, {id: 'be', r: 19, mass: 8}, {id: 'c', r: 24, mass: 12}, {id: 'o', r: 26, mass: 16}],
		initial: [{species: 'he', count: 30}],
		reactions: [{from: ['he', 'he'], to: ['be'], ea: 5.5}, {from: ['be'], to: ['he', 'he'], rate: 3}, {from: ['be', 'he'], to: ['c'], ea: 0}, {from: ['c', 'he'], to: ['o'], ea: 5, activeFrom: os}]});
});
export const S03: React.FC = () => {
	const id = 'helium-burning';
	const f = useCurrentFrame();
	const hk = cue(id, 'about a hundred million kelvin'), rm = cue(id, 'they repel more strongly than protons'), tj = cue(id, 'Three helium four nuclei join to make carbon twelve'), pa = cue(id, 'is also an alpha particle'), os = cue(id, 'making oxygen sixteen'), ox = cap(id, cue(id, 'fills with carbon and oxygen'));
	const run = RUN3();
	const cIdx = run.config.species.findIndex(s => s.id === 'c'), oIdx = run.config.species.findIndex(s => s.id === 'o');
	const fr = Math.min(run.frames - 1, f);
	const app = prog(f, rm, 40), back = prog(f, rm + 44, 30), mg = prog(f, tj + 10, 36);
	const sep = f < rm + 44 ? 380 - 240 * app : 140 + 240 * back;
	const MX = 1080, MY = 390;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx={BOX.h / 2.2} fill="#fff1d0" stroke={AMBER.stroke} strokeWidth={4} />
				<BoxParticles run={run} f={f} x={BOX.x} y={BOX.y} draw={{
					he: (x, y, k) => <Nucleus key={k} cx={x} cy={y} p={2} n={2} r={8} proton={ROSE.stroke} neutron={NEUTRON} />,
					be: (x, y, k) => <Nucleus key={k} cx={x} cy={y} p={4} n={4} r={7} proton={ROSE.stroke} neutron={NEUTRON} />,
					c: (x, y, k) => <NucDisc key={k} x={x} y={y} r={22} text="C" />,
					o: (x, y, k) => <NucDisc key={k} x={x} y={y} r={24} text="O" fill="#dcefe2" />,
				}} />
				{f >= rm - 10 && f < tj ? <g opacity={prog(f, rm - 10, 12) * (1 - prog(f, tj - 12, 12))}>
					<Nucleus cx={MX - sep / 2} cy={MY} p={2} n={2} r={20} proton={ROSE.stroke} neutron={NEUTRON} />
					<Nucleus cx={MX + sep / 2} cy={MY} p={2} n={2} r={20} proton={ROSE.stroke} neutron={NEUTRON} />
					{[-1, 1].map(s => { const L = Math.min(200, 22000 / (sep * sep) * 60); return L > 10 ? <g key={s}><line x1={MX + s * (sep / 2 + 50)} y1={MY} x2={MX + s * (sep / 2 + 50 + L)} y2={MY} stroke={RED.stroke} strokeWidth={7} /><path d="M0,0 L-18,-11 L-18,11 z" transform={`translate(${MX + s * (sep / 2 + 50 + L + 14)} ${MY}) rotate(${s > 0 ? 0 : 180})`} fill={RED.stroke} /></g> : null; })}
				</g> : null}
				{f >= tj - 10 ? <g opacity={prog(f, tj - 10, 12)}>
					{mg < 1 ? [[-150, -40], [0, 60], [150, -40]].map(([dx, dy], i) => <Nucleus key={i} cx={MX + dx * (1 - mg)} cy={MY + dy * (1 - mg)} p={2} n={2} r={18} proton={ROSE.stroke} neutron={NEUTRON} opacity={1 - mg} />) : null}
					<NucDisc x={MX} y={MY} r={46} text="¹²C" opacity={mg} />
					{mg >= 1 ? <Packet x={MX + 130} y={MY - 70} deg={-30} len={56} color={AMBER.stroke} label="γ" size={22} /> : null}
				</g> : null}
				<CurveThumb reach={f >= ox ? [R_MS, R_HE] : [R_MS]} />
			</FrameSvg>
			<ThumbLabel />
			<Lbl x={BOX.x} y={BOX.y - 20} at={0} color={GREY.ink} size={26}>inside the core (model)</Lbl>
			<Readout x={800} y={170} label="core temperature" value={f >= hk ? '≈ 10⁸ K' : `≈ ${tText(1.5e7 * 10 ** (0.8 * prog(f, 0, Math.max(30, hk))))}`} color={RED.ink} w={320} size={44} />
			<Lbl x={1140} y={240} at={hk} color={RED.ink} size={30}>helium ignites</Lbl>
			<Lbl x={MX} y={MY + 90} at={rm} out={tj - 10} color={INK} size={28} anchor="middle">charge +2 each</Lbl>
			<HandTag x={MX - 160} y={MY - 90} text="+2 each: more push" at={rm + 20} out={tj} size={32} color={RED.ink} />
			<HandTag x={0} y={0} at={tj + 6} out={pa} color={INK} marks={[{kind: 'circle', cx: MX, cy: MY + 10, rx: 200, ry: 100}]} />
			<div style={{position: 'absolute', left: 800, top: 520}}><Row at={tj} size={48}><AnswerBox at={tj + 10}><NucEq terms={[{...HE4, k: 3}, '→', {A: 12, Z: 6, s: 'C'}, '+', 'γ']} size={48} /></AnswerBox></Row></div>
			<div style={{position: 'absolute', left: 820, top: 610, display: 'flex', gap: 40}}>
				{f >= tj + 20 ? <Tally label="A" sum="3 × 4 = 12" tickAt={tj + 30} size={30} /> : null}
				{f >= tj + 26 ? <Tally label="Z" sum="3 × 2 = 6" tickAt={tj + 36} size={30} /> : null}
			</div>
			<Chip x={800} y={680} at={pa} size={28} color={INK}>alpha particle = helium-4 nucleus</Chip>
			<div style={{position: 'absolute', left: 800, top: 790, opacity: prog(f, os, 14)}}><NucEq terms={[{A: 12, Z: 6, s: 'C'}, '+', HE4, '→', {A: 16, Z: 8, s: 'O'}, '+', 'γ']} size={44} /></div>
			<Lbl x={1370} y={830} at={os + 20} color={AMBER.ink} size={26}>{`releases ${fx(AC_E, 2)} MeV`}</Lbl>
			<Lbl x={BOX.x + 10} y={BOX.y + BOX.h + 40} at={tj} color={INK} size={28}>{`carbon made (model): ${run.counts[cIdx][fr]}`}</Lbl>
			<Lbl x={BOX.x + 10} y={BOX.y + BOX.h + 80} at={os} color={INK} size={28}>{`oxygen made (model): ${run.counts[oIdx][fr]}`}</Lbl>
		</>
	);
};

// ---------- 4. the pattern ----------
export const LAD: Ladder = {x: 380, y0: 820, y1: 260, lo: 7, hi: 9.7};
const SL = {x: 640, y: 830, w: 500};
const massPos = (m: number) => Math.log10(m) / Math.log10(25);
export const S04: React.FC = () => {
	const id = 'pattern';
	const f = useCurrentFrame();
	const ea = cue(id, 'Each time a fuel runs out, the core contracts and heats'), hc = cue(id, 'Helium and carbon have bigger charges than hydrogen'), el = cue(id, 'each later stage needs a hotter core again'), ho = cue(id, 'and makes it hotter'), cl = cap(id, cue(id, 'how far up the curve it can climb'));
	const steps = [ho, ho + 30, ho + 60, ho + 90];
	const k = steps.filter(s => f >= s).length - 1;
	const cur = MASSES[Math.max(0, k)];
	const mPos = f < ho ? 0 : kf(f, steps.map((s, i) => [s, massPos(MASSES[i].m)] as [number, number]));
	const reachT = f < ho ? 1e7 : 10 ** kf(f, steps.map((s, i) => [s, Math.log10(MASSES[i].T)] as [number, number]));
	const lit = (i: number) => (i < 3 ? 1 : prog(f, el + 10 * (i - 3), 12));
	const CY = [[800, 300], [1010, 380], [900, 520], [700, 450]] as const;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TempLadder g={LAD} color={RED.stroke} marks={LADDER_MARKS({Ne: lit(3), O: lit(4), Si: lit(5)}, f >= hc ? {H: '+1', He: '+2', C: '+6'} : {})} />
				<ReachBar g={LAD} T={reachT} dx={-110} color={PURPLE.stroke} opacity={prog(f, ho, 12)} />
				<Slider x={SL.x} y={SL.y} w={SL.w} value={mPos} color={PURPLE.stroke} label="mass (M☉, log scale)" ticks={[[0, '1'], [massPos(4), '4'], [massPos(15), '15'], [1, '25']]} opacity={prog(f, ho - 20, 12)} />
				<CurveThumb reach={f >= cl ? [[1, 16, PURPLE.stroke], [1, 56, PURPLE.stroke]] : [R_MS, R_HE]} />
			</FrameSvg>
			<ThumbLabel />
			<Lbl x={LAD.x} y={LAD.y1 - 40} at={0} color={RED.ink} size={28} anchor="middle">core temperature (log scale)</Lbl>
			{['fuel out', 'core contracts', 'core heats', 'next fuel burns'].map((t, i) => <Chip key={t} x={CY[i][0]} y={CY[i][1]} at={ea + 8 * i} size={28} color={INK}>{t}</Chip>)}
			<HandTag x={0} y={0} at={ea + 40} color={INK} marks={[{kind: 'circle', cx: 920, cy: 420, rx: 250, ry: 150}]} />
			<HandTag x={LAD.x - 300} y={LAD.y0 + 10} text="bigger charge, more push" at={hc + 20} out={el} size={30} color={RED.ink} />
			<HandTag x={LAD.x - 250} y={ladderY(LAD, 2e9) - 60} text="hotter still" at={el + 40} out={ho} size={32} color={GREY.ink} />
			<Readout x={1230} y={380} label="mass" value={f >= ho ? `${cur.m} M☉` : '·'} color={PURPLE.ink} w={590} size={40} />
			<Readout x={1230} y={490} label="hottest core" value={f >= ho ? `about ${tText(cur.T)}` : '·'} color={RED.ink} w={590} size={40} />
			<Readout x={1230} y={600} label="last fuel" value={f >= ho ? cur.fuel : '·'} color={INK} w={590} size={40} />
			<Readout x={1230} y={710} label="ends as" value={f >= ho ? cur.end : '·'} color={INK} w={590} size={40} />
			<HandTag x={1230} y={860} text="more mass, hotter core" at={ho + 100} size={34} color={PURPLE.ink} />
			<Lbl x={THUMB.x - 30} y={THUMB.y + THUMB.h + 96} at={cl} color={PURPLE.ink} size={26}>{`short: Sun-like; long: > ${M_MASSIVE} M☉`}</Lbl>
		</>
	);
};

// ---------- 5. a star like the Sun ----------
const LAD5: Ladder = {x: 300, y0: 820, y1: 300, lo: 7, hi: 9.7};
const NEB = {cx: 900, cy: 540, w: 540};
const HR5: HRBox = {x: 1300, y: 520, w: 400, h: 280, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
export const S05: React.FC = () => {
	const id = 'sun-like-end';
	const f = useCurrentFrame();
	const st = cue(id, 'the climb stops at carbon and oxygen'), nh = cue(id, 'Its core never gets hot enough'), pn = cue(id, 'a planetary nebula'), np = cue(id, 'nothing to do with planets'), hc = cue(id, 'helium, carbon and nitrogen back into space'), wd = cue(id, 'a white dwarf, mostly carbon and oxygen'), yr = cap(id, cue(id, 'slowly cooling for billions of years'));
	const neb = prog(f, pn, 20), drift = f >= hc ? ((f - hc) / 90) % 1 : 0, wdG = prog(f, wd, 20);
	const mv = prog(f, wd + 10, 40);
	const ptT = 4200 * (1 - mv) + 20000 * mv, ptL = 10 ** (2.5 * (1 - mv) - 2.5 * mv);
	const cy = ladderY(LAD5, IGNITE.C);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TempLadder g={LAD5} color={RED.stroke} marks={LADDER_MARKS().slice(0, 3)} size={26} />
				<ReachBar g={LAD5} T={1e8} dx={-80} color={PURPLE.stroke} opacity={prog(f, st, 12)} />
				{f >= st ? <line x1={LAD5.x - 100} y1={ladderY(LAD5, 1e8) - 6} x2={LAD5.x - 60} y2={ladderY(LAD5, 1e8) - 6} stroke={INK} strokeWidth={6} opacity={prog(f, st + 10, 10)} /> : null}
				<LPlate spec={NEBULA} p={{x: NEB.cx - NEB.w / 2, y: NEB.cy - (NEB.w * 1118) / 1172 / 2, w: NEB.w}} opacity={neb} />
				<Disc spec={STAR_WHITE} cx={NEB.cx} cy={NEB.cy} d={40 + 30 * wdG} opacity={prog(f, pn + 10, 14)} />
				{f >= hc ? [['He', -1, -0.4], ['C', 1, -0.5], ['N', -0.6, 1], ['He', 0.9, 0.7]].map(([t, dx, dy], i) => { const u = (drift + i * 0.25) % 1; return <NucDisc key={i} x={NEB.cx + (dx as number) * (120 + 220 * u)} y={NEB.cy + (dy as number) * (120 + 160 * u)} r={20} text={t as string} opacity={1 - u} />; }) : null}
				<g opacity={prog(f, wd, 14)}><HRDiagram b={HR5} f={f} L={{axes: 1, band: 1, regions: 1}} size={20} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" />
					<circle cx={hrX(HR5, ptT)} cy={hrY(HR5, ptL)} r={12} fill={mv > 0.5 ? '#f4f6fb' : '#f6b36a'} stroke={INK} strokeWidth={3} />
				</g>
				<CurveThumb reach={[R_MS, R_HE]} />
			</FrameSvg>
			<ThumbLabel />
			<Lbl x={LAD5.x} y={LAD5.y1 - 40} at={0} color={RED.ink} size={26} anchor="middle">core temperature (log)</Lbl>
			<Lbl x={LAD5.x - 80} y={LAD5.y0 + 40} at={st} color={PURPLE.ink} size={28} anchor="middle">1 M☉</Lbl>
			<HandTag x={0} y={0} at={nh} color={GREY.stroke} marks={[{kind: 'cross', cx: LAD5.x, cy, size: 40}]} />
			<HandTag x={LAD5.x + 30} y={cy + 60} text="never hot enough" at={nh + 14} out={wd} size={30} color={RED.ink} />
			<Lbl x={NEB.cx} y={NEB.cy - 300} at={pn} color={INK} size={28} anchor="middle">planetary nebula (illustrative)</Lbl>
			<HandTag x={NEB.cx - 120} y={NEB.cy + 320} text="not about planets" at={np} out={wd} size={32} color={GREY.ink} />
			<Lbl x={NEB.cx} y={NEB.cy + 320} at={hc + 10} out={wd} color={INK} size={26} anchor="middle">gas carries He, C and N back into space</Lbl>
			<Chip x={NEB.cx - 160} y={NEB.cy + 290} at={wd} size={28} color={INK}>C + O white dwarf</Chip>
			<HandTag x={0} y={0} at={yr} color={INK} marks={[{kind: 'circle', cx: NEB.cx, cy: NEB.cy, rx: 60, ry: 60}]} />
			<Lbl x={1300} y={480} at={yr} color={INK} size={28}>cools slowly; no more fusion</Lbl>
			<Lbl x={hrX(HR5, 20000) + 20} y={hrY(HR5, 10 ** -2.5) + 40} at={wd + 40} color={INK} size={26}>white dwarf</Lbl>
		</>
	);
};

// ---------- 6. a massive star climbs to iron ----------
const ON = {cx: 760, cy: 580};
const LAD6: Ladder = {x: 170, y0: 860, y1: 520, lo: 8.5, hi: 9.7};
const SHELLS = [{r: 300, fill: '#f7e3a8', label: 'H'}, {r: 240, fill: '#f3cf8a', label: 'He'}, {r: 185, fill: '#e9b27a', label: 'C'}, {r: 135, fill: '#dc9a72', label: 'O, Ne'}, {r: 88, fill: '#c98a7c', label: 'Si'}, {r: 48, fill: '#9c8b86', label: 'Fe'}] as const;
export const S06: React.FC = () => {
	const id = 'massive-climb';
	const f = useCurrentFrame();
	const kg = cue(id, 'keeps going'), cf = cue(id, 'Carbon fuses at about six hundred million kelvin'), nn = cue(id, 'then neon, then oxygen'), ir = cue(id, 'making iron'), on = cue(id, 'layered like an onion'), sp = cue(id, 'And the stages speed up'), da = cap(id, cue(id, 'silicon lasts about eighteen days'));
	const shellAt = [-30, -30, cf, nn, ir - 20, ir];
	const rowAt = STAGES.map((_, i) => sp + 10 + i * Math.max(10, (da - sp - 30) / 6));
	const spin = f >= sp ? ((f - sp) ** 1.6) * 0.6 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={STAR_RED} cx={200} cy={330} d={220} />
				<TempLadder g={LAD6} color={RED.stroke} size={26} marks={[{T: IGNITE.C, label: 'C', o: prog(f, cf, 12)}, {T: IGNITE.Ne, label: 'Ne', o: prog(f, nn, 12), dy: 14}, {T: IGNITE.O, label: 'O', o: prog(f, nn + 16, 12), dy: -14}, {T: IGNITE.Si, label: 'Si', o: prog(f, ir - 20, 12)}]} />
				<Onion cx={ON.cx} cy={ON.cy} shells={SHELLS.map((s, i) => ({...s, o: prog(f, shellAt[i], 16)}))} />
				{f >= on ? SHELLS.map((s, i) => { const r0 = i === 5 ? 0 : SHELLS[i + 1].r; const ry = ON.cy - (s.r + r0) / 2; return <text key={i} x={ON.cx} y={ry + 10} textAnchor="middle" opacity={prog(f, on + 6 * i, 10)} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>{s.label}</text>; }) : null}
				{f >= sp ? <g opacity={prog(f, sp, 12)}><circle cx={1290} cy={360} r={70} fill="#fffdf8" stroke={INK} strokeWidth={4} /><line x1={1290} y1={360} x2={1290 + 56 * Math.sin(spin / 20)} y2={360 - 56 * Math.cos(spin / 20)} stroke={PURPLE.stroke} strokeWidth={6} strokeLinecap="round" /></g> : null}
				<CurveThumb reach={f >= da ? [R_MS, [4, 56, PURPLE.stroke]] : [R_MS, R_HE]} />
			</FrameSvg>
			<ThumbLabel />
			<Lbl x={200} y={480} at={0} color={INK} size={26} anchor="middle">outside view</Lbl>
			<Lbl x={96} y={200} at={kg} color={PURPLE.ink} size={30}>{`more than about ${M_MASSIVE} M☉`}</Lbl>
			<Lbl x={ON.cx} y={ON.cy + 350} at={0} color={INK} size={26} anchor="middle">a massive star (cross-section, not to scale)</Lbl>
			<HandTag x={ON.cx + 200} y={ON.cy + 300} text="ash in layers" at={on + 40} size={34} color={INK} marks={[{kind: 'brace', x: ON.cx + 310, y1: ON.cy - 300, y2: ON.cy, facing: 'right'}]} />
			<Lbl x={1390} y={330} at={sp} color={INK} size={28}>stage clock</Lbl>
			<Lbl x={1390} y={370} at={sp} color={GREY.ink} size={26}>15 M☉ model</Lbl>
			<Lbl x={1390} y={404} at={sp} color={GREY.ink} size={26}>(Woosley and Janka 2005)</Lbl>
			{STAGES.map((s, i) => <Lbl key={s.f} x={1230} y={480 + 58 * i} at={rowAt[i]} color={i === 5 ? RED.ink : INK} size={34}>{`${s.f}: ${s.t}`}</Lbl>)}
			<HandTag x={1560} y={600} text="faster overall" at={rowAt[5] + 10} size={34} color={PURPLE.ink} />
			<HandTag x={0} y={0} at={da} color={RED.stroke} marks={[{kind: 'circle', cx: 1340, cy: 480 + 58 * 5 - 10, rx: 140, ry: 34}]} />
		</>
	);
};
