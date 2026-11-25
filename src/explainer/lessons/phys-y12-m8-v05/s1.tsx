// Scenes 1 to 6: the hook (last time's core inset grows in front of the painted Sun; heavier, lighter or the same?),
// how a star switches on (the painted cloud collapses, a live core-temperature readout, gravity and pressure arrows that
// reach equal length, a self-correcting loop), why fusion is hard (a repelled pair on the field motion engine, a particle
// box where most collisions bounce off), less than its parts (springs, a ball in a hole, mass bars, 28.3 MeV), climbing
// the curve (the live curve marker with nuclide, A and binding-energy readouts) and the proton-proton chain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import {Anti, BoxParticles, CLOUD, Readout} from '../../physics/atom/universe';
import {BindingCurve, NeutrinoDot, NucEq, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {runBox} from '../../sims/particle-box';
import {runMotion, stateAt} from '../../sims/field-motion';
import {lazy} from '../../sims';
import type {HRBox} from '../../physics/atom/stellar';
import {HandoffBoard04, M8V04FinalFrame} from '../phys-y12-m8-v04/s3';
import {BE_HE, BE_HE_N, DM_HE, FRAC_PP, HEAD, HEAD_SIZE, M, MARKER, T_SUN_CORE, U_MEV, cap, cue, dur} from './common';
import {AMBER, CoreInset, GREY, HRDiagram, INK, Lbl, MassBars, NAVY, NEUTRON, PP1, PP2, PP3, RED, ROSE, TEAL, fx} from './parts';

/** Powers of ten as "10ⁿ" (whole), or "m × 10ⁿ". */
const SUPS: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
export const pow10 = (e: number) => `10${String(e).split('').map(c => SUPS[c]).join('')}`;
const tempText = (lt: number) => { let e = Math.floor(lt + 1e-9), m = Math.round(10 ** (lt - e)); if (m >= 10) { e += 1; m = 1; } return m === 1 ? `${pow10(e)} K` : `${m} × ${pow10(e)} K`; };
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);

// ---------- 1. hook ----------
const THUMB: HRBox = {x: 1560, y: 200, w: 250, h: 160, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
const C0 = {x: 300, y: 600, r: 150}, C1 = {x: 620, y: 560, r: 250};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const fh = cue(id, 'Four hydrogen nuclei go in'), oh = cue(id, 'one helium nucleus comes out'), pred = cue(id, 'prediction'), le = cue(id, 'Less, by about zero point seven per cent'), nx = cap(id, cue(id, 'release energy by combining light nuclei'));
	if (f < 1) return <M8V04FinalFrame />;
	const m = prog(f, 4, 34);
	const cx = C0.x + (C1.x - C0.x) * m, cy = C0.y + (C1.y - C0.y) * m, r = C0.r + (C1.r - C0.r) * m;
	const tickAt = Math.max(le, pred + 92);
	const gap = 260 * FRAC_PP * 10;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 2, 18)}}><HandoffBoard04 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={SUN} cx={cx} cy={cy} d={300 + 400 * m} opacity={prog(f, 6, 20)} />
				<CoreInset cx={cx} cy={cy} r={r} pulseH={pulseOf(f, fh)} pulseHe={pulseOf(f, oh)} />
				<g opacity={prog(f, 12, 20)}><HRDiagram b={THUMB} f={f} L={{axes: 1, band: 1, ms: 1, regions: 1}} size={20} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" /></g>
				<Countdown start={pred} end={pred + 90} x={1110} y={470} r={40} />
				{f >= tickAt ? <Mark x={1580} y={470} at={tickAt} kind="tick" color={INK} size={32} /> : null}
				<MassBars x={1260} base={880} h={260} gap={gap} w={110} sep={60} grow={prog(f, le + 6, 18)} opacity={prog(f, le, 12)} />
			</FrameSvg>
			<Lbl x={THUMB.x} y={THUMB.y - 18} at={12} color={INK} size={26}>last time: the HR diagram</Lbl>
			<Lbl x={cx} y={cy + r + 40} at={10} color={INK} size={28} anchor="middle">{"the Sun's core"}</Lbl>
			<HandTag x={150} y={420} text="4 in" at={fh + 10} out={pred} size={40} color={ROSE.ink} marks={[{kind: 'arrow', from: [230, 440], to: [cx - 120, cy - 70]}]} />
			<HandTag x={cx + 60} y={cy + 150} text="1 out" at={oh + 10} out={pred} size={40} color={ROSE.ink} />
			<Chip x={1200} y={380} at={pred} size={28} color={INK}>more mass</Chip>
			<Chip x={1200} y={440} at={pred + 4} size={28} color={INK}>less mass</Chip>
			<Chip x={1200} y={500} at={pred + 8} size={28} color={INK}>the same</Chip>
			<Lbl x={1260 + 55} y={912} at={le + 10} color={TEAL.ink} size={28} anchor="middle">4 × ¹H</Lbl>
			<Lbl x={1260 + 165 + 55} y={912} at={le + 10} color={TEAL.ink} size={28} anchor="middle">⁴He</Lbl>
			<Lbl x={1560} y={636} at={le + 20} color={TEAL.ink} size={30}>{`${fx(FRAC_PP * 100, 1)}% less`}</Lbl>
			<Lbl x={1560} y={676} at={le + 20} color={GREY.ink} size={26}>gap drawn × 10</Lbl>
			<HandTag x={0} y={0} at={le + 24} color={TEAL.stroke} marks={[{kind: 'brace', x: 1542, y1: 880 - 260, y2: 880 - 260 + gap, facing: 'right'}]} />
			<HandTag x={1200} y={580} text="missing mass → energy" at={le + 34} size={34} color={TEAL.ink} />
			<Chip x={96} y={870} at={-30} out={nx} size={30} w={1728} color={INK} border={INK}>Next: why do main-sequence stars release energy by combining light nuclei?</Chip>
		</>
	);
};

// ---------- 2. how a star switches on ----------
const CC = {x: 700, y: 560};
const ARROWS = Array.from({length: 8}, (_, i) => (i * Math.PI) / 4 + Math.PI / 8);
export const S02: React.FC = () => {
	const id = 'ignition-balance';
	const f = useCurrentFrame();
	const cg = cue(id, 'collapses under its own gravity'), up = cue(id, 'the core heats up'), ig = cue(id, 'and the star ignites'), po = cue(id, 'pushes outwards with pressure'), st = cue(id, 'makes a main-sequence star'), cr = cue(id, 'And it corrects itself'), dn = cap(id, cue(id, 'and fusion slows down'));
	const sh = prog(f, cg, Math.max(30, up - cg));
	const loop = f >= cr ? Math.sin(Math.min(1, (f - cr) / Math.max(40, dn + 30 - cr)) * Math.PI) : 0;
	const lt = kf(f, [[0, 1], [cg, 1], [up, 4.5], [up + 40, 6], [ig, 7]]) - 0.15 * loop;
	const ballR = 60 + 40 * prog(f, up, 30), cloudW = 760 * (1 - 0.8 * sh);
	const cloudH = cloudW * (846 / 1305);
	const sun = prog(f, st, 20);
	const gIn = prog(f, cg, 16), pOut = prog(f, po, 30) * (1 - 0.45 * loop);
	const flash = pulseOf(f, ig, 24);
	const R0 = 230, gL = 110, pL = 110 * pOut;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={CLOUD} p={{x: CC.x - cloudW / 2, y: CC.y - cloudH / 2, w: cloudW}} opacity={1 - prog(f, up - 10, 24)} />
				{f >= up - 20 ? <g opacity={prog(f, up - 20, 20) * (1 - sun)}>
					<circle cx={CC.x} cy={CC.y} r={ballR * (1 + 0.08 * loop) + 24} fill="#f6c46a" opacity={0.35} />
					<circle cx={CC.x} cy={CC.y} r={ballR * (1 + 0.08 * loop)} fill="#f2a43a" stroke={AMBER.stroke} strokeWidth={4} />
					{flash > 0 ? <circle cx={CC.x} cy={CC.y} r={ballR + 70 * flash} fill="none" stroke={AMBER.stroke} strokeWidth={8} opacity={flash} /> : null}
				</g> : null}
				<Disc spec={SUN} cx={CC.x} cy={CC.y} d={2 * (ballR + 20) * (1 + 0.06 * loop)} opacity={sun} />
				{ARROWS.map((a, i) => {
					const c = Math.cos(a), s = Math.sin(a), x0 = CC.x + c * R0, y0 = CC.y + s * R0;
					return <g key={i}>
						{gIn > 0.001 ? <g opacity={gIn}><line x1={x0 + c * gL} y1={y0 + s * gL} x2={x0 + c * 14} y2={y0 + s * 14} stroke={NAVY.stroke} strokeWidth={7} /><path d="M0,0 L-20,-11 L-20,11 z" transform={`translate(${x0} ${y0}) rotate(${(a * 180) / Math.PI + 180})`} fill={NAVY.stroke} /></g> : null}
						{pL > 4 ? <g><line x1={CC.x + c * (ballR + 34)} y1={CC.y + s * (ballR + 34)} x2={CC.x + c * (ballR + 34 + pL - 16)} y2={CC.y + s * (ballR + 34 + pL - 16)} stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L-20,-11 L-20,11 z" transform={`translate(${CC.x + c * (ballR + 34 + pL)} ${CC.y + s * (ballR + 34 + pL)}) rotate(${(a * 180) / Math.PI})`} fill={AMBER.stroke} /></g> : null}
					</g>;
				})}
			</FrameSvg>
			<Readout x={1300} y={180} label="core temperature" value={`≈ ${tempText(lt)}`} color="#b8322a" w={420} />
			<Lbl x={1300} y={340} at={ig} color={RED.ink} size={30}>≈ 10⁷ K: fusion starts</Lbl>
			<Lbl x={CC.x} y={CC.y + 330} at={0} out={up} color={GREY.ink} size={26} anchor="middle">a cold gas cloud, mostly hydrogen</Lbl>
			<HandTag x={96} y={260} text="gravity squeezes" at={cg + 16} out={po} size={34} color={NAVY.ink} />
			<HandTag x={1300} y={420} text="squeezing heats" at={up + 10} out={st} size={34} color={RED.ink} />
			<Chip x={1300} y={480} at={po + 20} size={28} w={520} color={INK}>balance: pressure out = gravity in</Chip>
			<HandTag x={0} y={0} at={po + 36} color={INK} marks={[{kind: 'circle', cx: CC.x + 268, cy: CC.y - 116, rx: 140, ry: 70}]} />
			<Chip x={1300} y={590} at={st} size={28} w={520} color={INK}>main-sequence star: core hydrogen fusion, balanced</Chip>
			<Chip x={1300} y={720} at={cr} size={28} w={520} color={INK}>too fast → core expands and cools → fusion slows</Chip>
			<Lbl x={1300} y={850} at={dn} color={INK} size={32}>self-correcting</Lbl>
			<HandTag x={96} y={860} text="a thermostat" at={cr + 30} size={38} color={AMBER.ink} />
		</>
	);
};

// ---------- 3. why fusion is hard ----------
const LANE = {y: 470, cx: 660};
const BOX3 = {x: 1130, y: 250, w: 690, h: 420};
const pairRun = lazy(() => runMotion({field: {kind: 'custom', accel: x => [4224 / (x * x), 0]}, start: {x: 660, y: 0, vx: -8, vy: 0}, duration: 200, steps: 800}));
const RUN3 = lazy(() => {
	const id = 'fusion-hard';
	const hd = cue(id, 'such a hot, dense core');
	return runBox({seed: 23, frames: dur(id), w: BOX3.w, h: BOX3.h, speed: 4.2, temperature: [[0, 0.8], [hd, 0.8], [hd + 30, 2.2]],
		species: [{id: 'p', r: 16}, {id: 'd', r: 22, mass: 2}], initial: [{species: 'p', count: 26}],
		reactions: [{from: ['p', 'p'], to: ['d'], ea: 6.5}]});
});
export const S03: React.FC = () => {
	const id = 'fusion-hard';
	const f = useCurrentFrame();
	const rp = cue(id, 'so they repel each other'), mb = cue(id, 'most bounce off'), to = cue(id, 'protons must almost touch'), hd = cue(id, 'such a hot, dense core'), yr = cap(id, cue(id, 'last about ten billion years'));
	const run = RUN3();
	const t = Math.max(0, f - rp);
	const s = f < rp ? 660 : t <= 200 ? stateAt(pairRun(), t).x : 660;
	const show1 = f < to - 10 ? prog(f, rp - 10, 12) : 1 - prog(f, to - 10, 10);
	const join = prog(f, to, 30), fuse = prog(f, to + 34, 10);
	const s2 = 300 - 266 * join;
	const force = Math.min(160, 4224 / (s * s) * 400);
	const fusedNow = run.reacted[0][Math.min(run.frames - 1, f)];
	const recent = run.events.filter(e => e.f <= f && e.f > f - 10 && f >= mb - 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={SUN} cx={200} cy={300} d={250} />
				{show1 > 0.001 ? <g opacity={show1}>
					<Particle x={LANE.cx - s / 2} y={LANE.y} r={30} color={ROSE.stroke} text="p" />
					<Particle x={LANE.cx + s / 2} y={LANE.y} r={30} color={ROSE.stroke} text="p" />
					{force > 12 ? <g><line x1={LANE.cx - s / 2 - 34} y1={LANE.y} x2={LANE.cx - s / 2 - 34 - force} y2={LANE.y} stroke={RED.stroke} strokeWidth={6} /><path d="M0,0 L18,-10 L18,10 z" transform={`translate(${LANE.cx - s / 2 - 34 - force - 16} ${LANE.y})`} fill={RED.stroke} /><line x1={LANE.cx + s / 2 + 34} y1={LANE.y} x2={LANE.cx + s / 2 + 34 + force} y2={LANE.y} stroke={RED.stroke} strokeWidth={6} /><path d="M0,0 L-18,-10 L-18,10 z" transform={`translate(${LANE.cx + s / 2 + 34 + force + 16} ${LANE.y})`} fill={RED.stroke} /></g> : null}
				</g> : null}
				{f >= to - 10 ? <g opacity={prog(f, to - 10, 10)}>
					{fuse < 1 ? <g opacity={1 - fuse}><Particle x={LANE.cx - s2 / 2} y={LANE.y} r={30} color={ROSE.stroke} text="p" /><Particle x={LANE.cx + s2 / 2} y={LANE.y} r={30} color={ROSE.stroke} text="p" /></g> : null}
					{fuse > 0 ? <g opacity={fuse}><Particle x={LANE.cx - 22} y={LANE.y} r={30} color={ROSE.stroke} /><Particle x={LANE.cx + 22} y={LANE.y} r={30} color={NEUTRON} /><circle cx={LANE.cx} cy={LANE.y} r={70 + 40 * fuse} fill="none" stroke={AMBER.stroke} strokeWidth={6} opacity={1 - fuse * 0.7} /></g> : null}
					{join > 0.95 && fuse < 0.5 ? <g><line x1={LANE.cx - s2 / 2} y1={LANE.y - 56} x2={LANE.cx + s2 / 2} y2={LANE.y - 56} stroke={INK} strokeWidth={3} /><line x1={LANE.cx - s2 / 2} y1={LANE.y - 66} x2={LANE.cx - s2 / 2} y2={LANE.y - 46} stroke={INK} strokeWidth={3} /><line x1={LANE.cx + s2 / 2} y1={LANE.y - 66} x2={LANE.cx + s2 / 2} y2={LANE.y - 46} stroke={INK} strokeWidth={3} /></g> : null}
				</g> : null}
				<rect x={BOX3.x} y={BOX3.y} width={BOX3.w} height={BOX3.h} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} opacity={prog(f, mb - 20, 14)} />
				<BoxParticles run={run} f={f} x={BOX3.x} y={BOX3.y} opacity={prog(f, mb - 20, 14)} draw={{
					p: (x, y, k) => <Particle key={k} x={x} y={y} r={16} color={ROSE.stroke} />,
					d: (x, y, k) => <g key={k}><Particle x={x - 11} y={y} r={16} color={ROSE.stroke} /><Particle x={x + 11} y={y} r={16} color={NEUTRON} /></g>,
				}} />
				{recent.map((e, i) => <circle key={i} cx={BOX3.x + e.x} cy={BOX3.y + e.y} r={18 + 2 * (f - e.f)} fill="none" stroke={e.ok ? AMBER.stroke : GREY.stroke} strokeWidth={e.ok ? 6 : 3} opacity={1 - (f - e.f) / 10} />)}
				{f >= yr ? <g opacity={prog(f, yr, 12)}><rect x={96} y={836} width={1100 * prog(f, yr, 24)} height={34} rx={8} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /></g> : null}
			</FrameSvg>
			<HandTag x={LANE.cx - 160} y={300} text="like charges repel" at={rp + 20} out={to - 10} size={34} color={RED.ink} />
			<Lbl x={LANE.cx} y={LANE.y - 86} at={to + 20} out={to + 44} color={INK} size={28} anchor="middle">≈ 10⁻¹⁵ m</Lbl>
			<HandTag x={LANE.cx - 150} y={560} text="must almost touch" at={to + 26} size={34} color={INK} />
			<Lbl x={BOX3.x} y={BOX3.y - 24} at={mb - 20} color={GREY.ink} size={26}>model: protons (rose) colliding in a hot core</Lbl>
			<HandTag x={BOX3.x + 10} y={BOX3.y + BOX3.h + 46} text="most bounce off" at={mb + 10} size={34} color={GREY.ink} />
			<Readout x={BOX3.x + 360} y={BOX3.y + BOX3.h + 14} label="pairs that fused (model)" value={`${fusedNow}`} color={AMBER.ink} w={330} size={44} opacity={prog(f, mb, 12)} />
			<Readout x={96} y={640} label="core temperature" value={`≈ ${fx(T_SUN_CORE / 1e7, 1)} × 10⁷ K (Sun)`} color="#b8322a" w={420} size={40} opacity={prog(f, hd, 12)} />
			<Lbl x={BOX3.x} y={BOX3.y + BOX3.h + 140} at={hd + 20} color={RED.ink} size={28}>hotter box: more pairs fuse</Lbl>
			<Lbl x={110} y={856} at={yr + 10} color={AMBER.ink} size={28}>{"Sun's main-sequence life ≈ 10 billion years"}</Lbl>
		</>
	);
};

// ---------- 4. less than its parts ----------
const NUC0 = [[150, 330, 'p'], [330, 300, 'n'], [180, 470, 'n'], [360, 450, 'p']] as const;
export const S04: React.FC = () => {
	const id = 'binding-energy';
	const f = useCurrentFrame();
	const at = cue(id, 'attract each other through the strong nuclear force'), bd = cue(id, 'like a ball dropping into a hole'), lm = cue(id, 'less mass than its separate parts'), be = cue(id, 'is its binding energy'), tw = cue(id, 'twenty-eight point three MeV'), nu = cap(id, cue(id, 'for every nucleon'));
	const pull = prog(f, at + 20, Math.max(30, bd - at - 20));
	const ctr = [262, 392];
	const pos = NUC0.map(([x, y, k]) => [x + (ctr[0] - x) * 0.55 * pull, y + (ctr[1] - y) * 0.55 * pull, k] as const);
	const ball = kf(f, [[bd, 0], [bd + 30, 1]]);
	const bx = 1020 + 150 * ball, by = 300 + 110 * Math.sin(ball * Math.PI * 0.5) ** 2;
	const gap = 300 * (DM_HE / (2 * M.H1 + 2 * M.n)) * 10;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{f >= at ? <g opacity={prog(f, at, 12)}>{[[0, 1], [1, 3], [3, 2], [2, 0]].map(([a, b], i) => {
					const [x1, y1] = pos[a], [x2, y2] = pos[b], n = 10;
					const d = Array.from({length: n + 1}, (_, k) => { const u = k / n, px = x1 + (x2 - x1) * u, py = y1 + (y2 - y1) * u, nx = -(y2 - y1), ny = x2 - x1, L = Math.hypot(nx, ny) || 1, w = k === 0 || k === n ? 0 : (k % 2 ? 8 : -8); return `${k ? 'L' : 'M'}${px + (nx / L) * w},${py + (ny / L) * w}`; }).join(' ');
					return <path key={i} d={d} fill="none" stroke={TEAL.stroke} strokeWidth={3.5} />;
				})}</g> : null}
				{pos.map(([x, y, k], i) => <Particle key={i} x={x} y={y} r={34} color={k === 'p' ? ROSE.stroke : NEUTRON} text={k} size={28} />)}
				<Nucleus cx={700} cy={390} p={2} n={2} r={26} proton={ROSE.stroke} neutron={NEUTRON} />
				{f >= bd ? <g opacity={prog(f, bd, 12)}>
					<path d="M960,300 L1040,300 Q1110,300 1130,380 Q1170,450 1210,380 Q1230,300 1300,300 L1380,300" fill="none" stroke={INK} strokeWidth={4} />
					<circle cx={bx} cy={by - 22} r={20} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
					{ball >= 1 ? [0, 1, 2].map(i => { const u = ((f - bd - 30) / 40 + i / 3) % 1; return <Packet key={i} x={1170 + 30 * i - 40} y={380 - 160 * u} deg={-90} len={40} color={AMBER.stroke} opacity={1 - u} />; }) : null}
				</g> : null}
				<MassBars x={1420} base={680} h={300} gap={gap} w={120} sep={60} grow={prog(f, lm + 6, 18)} opacity={prog(f, lm, 12)} />
			</FrameSvg>
			<Lbl x={262} y={600} at={0} color={INK} size={28} anchor="middle">2 protons + 2 neutrons</Lbl>
			<Lbl x={700} y={600} at={0} color={INK} size={28} anchor="middle">⁴He nucleus</Lbl>
			<Lbl x={262} y={230} at={at + 10} color={TEAL.ink} size={28} anchor="middle">strong force: attracts nucleons</Lbl>
			<HandTag x={960} y={500} text="energy leaves" at={bd + 36} size={32} color={AMBER.ink} />
			<Lbl x={1420 + 60} y={718} at={lm + 10} color={TEAL.ink} size={26} anchor="middle">2p + 2n</Lbl>
			<Lbl x={1420 + 60} y={750} at={lm + 10} color={TEAL.ink} size={26} anchor="middle">(separate)</Lbl>
			<Lbl x={1420 + 180 + 60} y={718} at={lm + 10} color={TEAL.ink} size={26} anchor="middle">⁴He</Lbl>
			<Lbl x={1420} y={340} at={lm + 20} color={TEAL.ink} size={28}>mass defect Δm</Lbl>
			<Lbl x={1420} y={300} at={lm + 20} color={GREY.ink} size={26}>gap drawn × 10</Lbl>
			<HandTag x={0} y={0} at={lm + 24} color={TEAL.stroke} marks={[{kind: 'brace', x: 1782, y1: 380, y2: 380 + gap, facing: 'right'}]} />
			<HandTag x={980} y={620} text="less than its parts" at={lm + 34} size={34} color={TEAL.ink} />
			<Chip x={96} y={650} at={be} size={30} color={INK}>binding energy = Δm c²: the energy to pull it apart</Chip>
			<div style={{position: 'absolute', left: 96, top: 740, display: 'flex', flexDirection: 'column', gap: 10, width: 1700}}>
				<Row at={tw - 6} size={30}>{`Δm = 2(${M.H1}) + 2(${M.n}) − ${M.He4} = ${fx(DM_HE, 6)} u`}</Row>
				<Row at={tw} size={46}><AnswerBox at={tw + 6}>{`⁴He: binding energy = ${fx(DM_HE, 6)} × ${U_MEV} = ${fx(BE_HE, 1)} MeV`}</AnswerBox></Row>
				<Row at={nu} size={44}>{`${fx(BE_HE, 1)} / 4 ≈ ${fx(BE_HE_N, 1)} MeV per nucleon (about 7)`}</Row>
			</div>
		</>
	);
};

// ---------- 5. climbing the curve ----------
export const BC5: BCBox = {x: 200, y: 230, w: 1160, h: 520};
const B_LABELS = MARKER.map(m => ({A: m.A, text: m.A === 56 ? `peak near iron (⁵⁶Fe: ${fx(m.B, 1)} MeV)` : m.A === 1 ? m.s : `${m.s} (${fx(m.B, 1)})`}));
export const S05: React.FC = () => {
	const id = 'binding-curve';
	const f = useCurrentFrame();
	const cl = cue(id, 'climbs steeply for light nuclei'), pk = cue(id, 'peaks near iron'), sf = cue(id, 'then slowly falls'), rl = cue(id, 'and energy is released'), nb = cue(id, 'with no binding energy at all'), en = cue(id, 'a big release of energy'), th = cap(id, cue(id, "That's why combining light nuclei gives out energy"));
	const step = Math.max(10, Math.min(24, (pk - cl) / 5));
	const sq = kf(f, [[cl, 1], [cl + step, Math.sqrt(2)], [cl + 2 * step, 2], [cl + 3 * step, Math.sqrt(12)], [cl + 4 * step, 4], [pk, Math.sqrt(56)], [sf, Math.sqrt(56)], [sf + 50, Math.sqrt(238)]], false);
	const sq2 = f >= en ? kf(f, [[en, 1], [en + 40, 2]]) : sq;
	const A = sq2 * sq2, maxA = f >= sf + 50 ? 240 : Math.max(1, sq * sq);
	const B = bindingAt(A);
	const near = [...MARKER].reverse().find(m => A >= m.A - 0.2 && Math.abs(Math.sqrt(A) - Math.sqrt(m.A)) < 0.25);
	const climb = f >= en ? prog(f, en, 40) * (7.074 / 9) : 0;
	const pulse = pulseOf(f, th, 40);
	const mx = bcX(BC5, A), my = bcY(BC5, B);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BindingCurve b={BC5} upTo={maxA} labels={B_LABELS.map((l, i) => ({...l, o: f >= cl + i * step || (l.A === 56 && f >= pk) ? 1 : 0, dy: l.A === 56 ? 66 : l.A === 12 ? 40 : l.A === 1 ? 6 : l.A === 2 ? 40 : -26, dx: l.A === 2 ? 34 : l.A === 1 ? -12 : l.A === 12 ? 16 : 0, anchor: l.A === 238 || l.A === 1 ? 'end' : l.A === 2 || l.A === 12 ? 'start' : 'middle'}))} />
				{f >= pk + 10 ? <circle cx={bcX(BC5, 56)} cy={bcY(BC5, 8.79)} r={40} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, pk + 10, 12)} /> : null}
				{f >= rl ? <g opacity={prog(f, rl, 12)}><path d={`M${bcX(BC5, 6)},${bcY(BC5, 5.0)} Q${bcX(BC5, 10)},${bcY(BC5, 8.1)} ${bcX(BC5, 30)},${bcY(BC5, 8.0)}`} fill="none" stroke={AMBER.stroke} strokeWidth={7} /><path d="M0,0 L-22,-12 L-22,12 z" transform={`translate(${bcX(BC5, 30)} ${bcY(BC5, 8.0)}) rotate(0)`} fill={AMBER.stroke} /></g> : null}
				{f >= nb ? <circle cx={bcX(BC5, 1)} cy={bcY(BC5, 0)} r={14 + 8 * pulseOf(f, nb, 30)} fill={ROSE.stroke} stroke={INK} strokeWidth={3} /> : null}
				{f >= en ? <g opacity={prog(f, en, 12)}><line x1={bcX(BC5, 1) + 10} y1={bcY(BC5, 0) - 10} x2={bcX(BC5, 1) + 10 + (bcX(BC5, 4) - bcX(BC5, 1) - 26) * prog(f, en, 40)} y2={bcY(BC5, 0) - 10 + (bcY(BC5, 7.07) - bcY(BC5, 0) + 26) * prog(f, en, 40)} stroke={AMBER.stroke} strokeWidth={10} strokeLinecap="round" /></g> : null}
				{f >= cl - 10 ? <g><circle cx={mx} cy={my} r={16} fill={AMBER.stroke} stroke={INK} strokeWidth={4} /><line x1={mx} y1={my + 16} x2={mx} y2={BC5.y + BC5.h} stroke={AMBER.stroke} strokeWidth={2.5} strokeDasharray="6 6" /></g> : <circle cx={bcX(BC5, 1)} cy={bcY(BC5, 0)} r={16} fill={AMBER.stroke} stroke={INK} strokeWidth={4} />}
				<rect x={1470} y={620} width={340} height={40} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<rect x={1470} y={620} width={340 * climb} height={40} rx={8} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
				{pulse > 0 ? <line x1={96} y1={158} x2={96 + 1700 * pulse} y2={158} stroke={AMBER.stroke} strokeWidth={6} /> : null}
			</FrameSvg>
			<Readout x={1470} y={200} label="nuclide" value={near ? near.s : '·'} color={INK} w={340} size={48} />
			<Readout x={1470} y={320} label="mass number A" value={`${Math.round(A)}`} color={INK} w={340} size={48} />
			<Readout x={1470} y={440} label="B.E. per nucleon" value={`${fx(B, 2)} MeV`} color={AMBER.ink} w={340} size={48} />
			<Lbl x={1470} y={600} at={0} color={AMBER.ink} size={26}>climb from ¹H (MeV per nucleon)</Lbl>
			<Lbl x={1470} y={700} at={en + 30} color={AMBER.ink} size={30}>{`${fx(BE_HE_N, 1)} MeV per nucleon`}</Lbl>
			<Lbl x={1470} y={740} at={en + 30} color={AMBER.ink} size={28}>(about 7)</Lbl>
			<HandTag x={bcX(BC5, 56) - 60} y={bcY(BC5, 8.79) + 110} text="most tightly bound" at={pk + 20} out={rl} size={32} color={INK} />
			<Lbl x={bcX(BC5, 150)} y={bcY(BC5, 7.4) + 70} at={sf + 30} color={GREY.ink} size={26} anchor="middle">falling side: fission (later)</Lbl>
			<Chip x={200} y={866} at={rl + 10} size={28} color={INK}>climb the curve: more tightly bound → less mass → energy out (E = Δmc²)</Chip>
			<HandTag x={bcX(BC5, 6) + 20} y={bcY(BC5, 3.2)} text="H → He: a big climb" at={en + 30} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 6. the proton-proton chain ----------
export const EQX = 900, EQY = [250, 440, 650] as const;
export const PPEqs: React.FC<{f: number; at: readonly number[]; size?: number}> = ({f, at, size = 46}) => (
	<>
		{[PP1, PP2, PP3].map((t, i) => <div key={i} style={{position: 'absolute', left: EQX - 14, top: EQY[i] - size * 0.95, width: 700, height: size * 1.9, border: `3px dashed ${prog(f, at[i], 14) > 0.5 ? 'transparent' : 'rgba(60,45,20,0.3)'}`, borderRadius: 14}} />)}
		{[PP1, PP2, PP3].map((t, i) => <div key={`e${i}`} style={{position: 'absolute', left: EQX, top: EQY[i] - size * 0.7, opacity: prog(f, at[i], 14)}}><NucEq terms={t} size={size} /></div>)}
		{['step 1', 'step 2', 'step 3'].map((s, i) => <Lbl key={s} x={EQX - 24} y={EQY[i]} at={-30} color={GREY.ink} size={28} anchor="end">{s}</Lbl>)}
	</>
);
export const S06: React.FC = () => {
	const id = 'pp-chain';
	const f = useCurrentFrame();
	const s1 = cue(id, 'Step one, two protons fuse into deuterium'), pn = cue(id, 'One proton turns into a neutron'), gp = cue(id, 'giving out a positron and a neutrino'), lo = cue(id, 'the main reason the Sun lasts so long'), s2 = cue(id, 'Step two, deuterium fuses with another proton'), ph = cue(id, 'giving out a gamma ray photon'), tw = cue(id, 'Steps one and two happen twice'), s3 = cue(id, 'Step three, two helium three nuclei'), fr = cap(id, cue(id, 'two protons are set free'));
	const j1 = prog(f, s1 + 6, 30), turn = prog(f, pn, 20), out1 = prog(f, gp, 40);
	const j2 = prog(f, s2 + 6, 30), out2 = prog(f, ph, 40);
	const dup = prog(f, tw, 20), j3 = prog(f, s3 + 6, 30), out3 = prog(f, fr, 40);
	const L1 = 300, L2 = 470, L3 = 680;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{f >= s1 - 10 ? <g opacity={prog(f, s1 - 10, 12)}>
					<Particle x={170 + 180 * j1} y={L1} r={28} color={ROSE.stroke} text="p" size={24} />
					<Particle x={590 - 180 * j1} y={L1} r={28} color={turn > 0.5 ? NEUTRON : ROSE.stroke} text={turn > 0.5 ? 'n' : 'p'} size={24} />
					{out1 > 0.001 ? <g><Anti x={410 + 150 * out1} y={L1 - 70 * out1} r={20} color={ROSE.stroke} text="e⁺" size={18} opacity={1 - 0.3 * out1} /><NeutrinoDot x={410 + 170 * out1} y={L1 + 70 * out1} /></g> : null}
				</g> : null}
				{f >= s2 - 10 ? <g opacity={prog(f, s2 - 10, 12)}>
					<Particle x={300} y={L2} r={26} color={ROSE.stroke} /><Particle x={340} y={L2} r={26} color={NEUTRON} />
					<Particle x={600 - 200 * j2} y={L2} r={26} color={ROSE.stroke} text="p" size={22} />
					{out2 > 0.001 ? <Packet x={420 + 180 * out2} y={L2 - 60 * out2} deg={-20} len={60} color={AMBER.stroke} label="γ" size={24} opacity={1 - 0.3 * out2} /> : null}
				</g> : null}
				{dup > 0.001 ? <g opacity={dup}>
					<path d={`M1660,${EQY[0] - 40} Q1700,${EQY[0] - 40} 1700,${EQY[0]} L1700,${EQY[1]} Q1700,${EQY[1] + 40} 1660,${EQY[1] + 40}`} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
				</g> : null}
				{f >= s3 - 10 ? <g opacity={prog(f, s3 - 10, 12)}>
					<Nucleus cx={170 + 170 * j3} cy={L3} p={2} n={1} r={20} proton={ROSE.stroke} neutron={NEUTRON} />
					<Nucleus cx={610 - 170 * j3} cy={L3} p={2} n={1} r={20} proton={ROSE.stroke} neutron={NEUTRON} />
					{out3 > 0.001 ? <g><Particle x={400 + 60 * out3} y={L3 - 110 * out3} r={22} color={ROSE.stroke} text="p" size={18} /><Particle x={400 + 60 * out3} y={L3 + 110 * out3} r={22} color={ROSE.stroke} text="p" size={18} /></g> : null}
				</g> : null}
			</FrameSvg>
			<PPEqs f={f} at={[s1, s2, s3]} />
			<FrameSvg><Disc spec={SUN} cx={1690} cy={790} d={240} /></FrameSvg>
			<Lbl x={1690} y={930} at={0} color={INK} size={26} anchor="middle">the Sun</Lbl>
			<Lbl x={96} y={200} at={0} color={INK} size={28}>{"the proton-proton chain (the Sun's main route)"}</Lbl>
			{[[300, 'lane for step 1'], [470, 'lane for step 2'], [680, 'lane for step 3']].map(([y, s]) => <div key={s as string} style={{position: 'absolute', left: 96, top: (y as number) - 70, width: 640, height: 140, border: '3px dashed rgba(60,45,20,0.18)', borderRadius: 18}} />)}
			<HandTag x={450} y={L1 + 90} text="p → n here" at={pn + 10} out={s2} size={32} color={ROSE.ink} />
			<HandTag x={0} y={0} at={gp + 30} color={GREY.stroke} marks={[{kind: 'circle', cx: 590, cy: L1 + 70, rx: 46, ry: 34}]} />
			<Lbl x={EQX} y={EQY[0] + 64} at={lo} color={INK} size={28}>slow step: a proton must turn into a neutron</Lbl>
			<Lbl x={96} y={L2 + 90} at={s2 + 10} color={INK} size={26}>²H + p → ³He</Lbl>
			<HandTag x={1720} y={(EQY[0] + EQY[1]) / 2} text="× 2" at={tw + 10} size={42} color={AMBER.ink} />
			<Lbl x={EQX} y={EQY[1] + 64} at={tw + 20} color={AMBER.ink} size={28}>twice: makes two ³He nuclei</Lbl>
			<Lbl x={96} y={L3 + 120} at={fr + 20} color={INK} size={26}>two protons set free</Lbl>
		</>
	);
};
