// Scenes 7 to 12: the same answer from masses (the D-T working), paying back the climb (the energy ledger beside the
// hill: kinetic energy in is kept, Q is added; the painted steel ball past a hump), who gets the energy (equal and
// opposite momentum, the neutron four times faster, the wall heating), back to the stars (the painted Sun, gravity,
// ten times the Sun's core temperature), holding a star on Earth (the painted tokamak with coded helical field lines and
// a charge spiralling along one) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {Tally} from '../../physics/atom/nuclear';
import {NucleonCluster} from '../../physics/atom/decay';
import {Hill, HelixLines, hillX, hillXin, hillY, torusPt} from '../../physics/atom/fusion';
import type {HillG, TorusG} from '../../physics/atom/fusion';
import {Ledger} from '../../physics/atom/qvalue';
import {Disc} from '../../physics/atom/neutron';
import {LPlate, discPlace, placeOf} from '../../physics/light/plates';
import {MemoryCard} from '../../shared/scenes';
import {BE_GAIN, DT_DM, DT_IN, DT_OUT, DT_Q, HEAD, HEAD_SIZE, ITER_T, M, PN_FIS, PN_FUS, SH_A, SH_N, T_REACTOR, T_SUN, U_MEV, V_RATIO, cap, cue} from './common';
import {AMBER, Arrow, GREEN_C, GREY, Givens, INK, L_H2, L_H3, L_HE4, Lbl, NAVY, NEUTRON, NUC_RED, RED, SLATE, STEEL_BALL, SUN, Strip, T, TOKAMAK, TOK_AT, fx, sci, u6} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 7. the same answer from masses ----------
export const S07: React.FC = () => {
	const id = 'worked-q';
	const f = useCurrentFrame();
	const rx = cue(id, 'five point zero three zero two u'), px = cue(id, 'five point zero one one three'), du = cue(id, 'zero point zero one eight nine u'), sa = cue(id, 'the same answer'), mb = cap(id, cue(id, 'because they\'re more tightly bound'), 24);
	const tick = Math.min(1, prog(f, sa, 24));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={190} at={-30} size={32}>Energy released in ²₁H + ³₁H → ⁴₂He + ¹₀n</Strip>
			<Strip x={96} y={256} at={-30} size={30}>Δm = m(reactants) − m(products); E = Δm × {U_MEV} MeV</Strip>
			<Givens x={96} y={326} w={1100} at={-30} size={30} lines={[<>m(²H) = {u6(M.h2)} u; m(³H) = {u6(M.h3)} u</>, <>m(⁴He) = {u6(M.he4)} u; m(n) = {u6(M.n)} u</>, <>1 u = {U_MEV} MeV/c² (data sheet)</>]} />
			<FrameSvg>
				<rect x={1300} y={190} width={520} height={300} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
				<NucleonCluster cx={1360} cy={300} r={14} discs={L_H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<NucleonCluster cx={1460} cy={300} r={14} discs={L_H3} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<text x={1540} y={312} textAnchor="middle" style={T(36, INK)}>→</text>
				<NucleonCluster cx={1630} cy={300} r={14} discs={L_HE4} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<Disc x={1750} y={300} r={14} fill={NEUTRON} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 1320, top: 360, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Tally label="A" sum="2 + 3 = 4 + 1" tickAt={12} size={30} />
				<Tally label="Z" sum="1 + 1 = 2 + 0" tickAt={20} size={30} color={RED.ink} />
			</div>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={rx} ageAt={sa} size={44} oldSize={34}>{`reactants: ${u6(M.h2)} + ${u6(M.h3)} = ${u6(DT_IN)} u`}</Row>
				<Row at={px} ageAt={sa} size={44} oldSize={34}>{`products: ${u6(M.he4)} + ${u6(M.n)} = ${u6(DT_OUT)} u`}</Row>
				<Row at={du} ageAt={sa} size={44} oldSize={34}>{`Δm = ${u6(DT_DM)} u`}</Row>
				<Row at={sa} size={52}><AnswerBox at={sa + 4}>{`E = ${u6(DT_DM)} × ${U_MEV} ≈ ${fx(DT_Q * tick, 1)} MeV`}</AnswerBox></Row>
			</div>
			<Lbl x={96} y={830} at={du + 6} color={GREY.ink} size={26}>{`said: ${fx(DT_IN, 4)}, ${fx(DT_OUT, 4)} and ${fx(DT_DM, 4)}`}</Lbl>
			<Lbl x={1000} y={760} at={sa + 10} color={GREY.ink} size={28}>{`binding energies gave ${fx(BE_GAIN, 1)} MeV ✓`}</Lbl>
			<HandTag x={1000} y={700} text="two routes, one Q" at={sa + 16} size={36} color={GREEN_C.ink} />
			<Chip x={96} y={870} at={mb} size={30} color={INK}>more tightly bound → less mass → energy out</Chip>
		</>
	);
};

// ---------- 8. paying back the climb ----------
const HG8: HillG = {x0: 120, x1: 980, xc: 330, xw0: 140, xw1: 280, y0: 560, top: 260, deep: 200, p: 2};
const BALL = {x0: 600, y0: 860, w: 480};
const ballPath = (u: number) => { const x = BALL.x0 + u * BALL.w; const hump = u < 0.45 ? 30 * Math.sin((u / 0.45) * Math.PI) : 0; const valley = u > 0.55 ? 70 * Math.sin(((u - 0.55) / 0.45) * Math.PI * 0.5) : 0; return [x, BALL.y0 - hump + valley] as const; };
export const S08: React.FC = () => {
	const id = 'energy-ledger';
	const f = useCurrentFrame();
	const kb = cue(id, 'the kinetic energy the nuclei brought in'), ot = cue(id, 'over the hill or tunnel through it'), gb = cue(id, 'get that energy back'), ps = cue(id, 'plus the seventeen point six MeV'), bv = cue(id, 'into a deep valley'), tm = cue(id, 'Total mass and energy together stay the same'), pr = cap(id, cue(id, 'kinetic energy of the products'), 24);
	const tun = 0.14 * HG8.top, xo = hillX(HG8, tun), xi = hillXin(HG8, tun);
	const mv = prog(f, gb, 50);
	const mx = mv < 0.6 ? lerp(xo, xi, mv / 0.6) : lerp(xi, 210, (mv - 0.6) / 0.4);
	const my = mv < 0.6 ? HG8.y0 - tun : lerp(HG8.y0 - tun, HG8.y0 + HG8.deep, (mv - 0.6) / 0.4);
	const kept = prog(f, gb + 10, 20), q = prog(f, ps, 24);
	const KIN = {fill: AMBER.soft, stroke: AMBER.stroke}, REST = {fill: '#e7e1d6', stroke: INK};
	const bu = prog(f, bv - 40, 60);
	const [bx, by] = ballPath(bu);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Hill g={HG8} shadeHill={1} shadeWell={1} />
				{f >= ot ? <path d={`M${xo},${HG8.y0 - tun} ` + Array.from({length: 30}, (_, i) => { const x = lerp(xo, HG8.xc, i / 29); return `L${x.toFixed(1)},${(hillY(HG8, x) - 14).toFixed(1)}`; }).join(' ')} fill="none" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, ot, 14)} /> : null}
				{f >= ot ? <line x1={xo} y1={HG8.y0 - tun} x2={xi} y2={HG8.y0 - tun} stroke={NAVY.stroke} strokeWidth={5} strokeDasharray="12 8" opacity={prog(f, ot + 10, 14)} /> : null}
				<circle cx={mx} cy={my - 12} r={13} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
				<rect x={mx + 20} y={my - 60} width={60} height={20} fill={AMBER.stroke} opacity={prog(f, kb, 12)} />
				<Ledger x={1180} base={860} w={170} gap={110} totals={prog(f, tm, 14)} before={[{h: 380, ...REST, brk: true, label: 'rest', labelSide: 'in'}, {h: 60, ...KIN, label: 'K in', labelSide: 'in', labelColor: AMBER.ink}]} after={[{h: 380 - 160 * q, ...REST, brk: true, label: 'rest', labelSide: 'in'}, {h: 60 * kept, ...KIN, label: kept > 0.5 ? 'kept' : undefined, labelSide: 'in', labelColor: AMBER.ink}, {h: 160 * q, fill: AMBER.stroke, stroke: INK, label: q > 0.5 ? '+ Q' : undefined, labelSide: 'in', labelColor: INK}]} />
				<path d={Array.from({length: 41}, (_, i) => { const [x, y] = ballPath(i / 40); return `${i ? 'L' : 'M'}${x.toFixed(1)},${(y + 22).toFixed(1)}`; }).join(' ')} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, bv - 40, 14)} />
				{f >= bv - 40 ? <LPlate spec={STEEL_BALL} p={discPlace(STEEL_BALL, bx, by, 40)} /> : null}
			</FrameSvg>
			<Lbl x={HG8.x0} y={HG8.y0 + HG8.deep + 40} at={-30} color={GREY.ink} size={26}>schematic, not to scale</Lbl>
			<Lbl x={xo - 40} y={HG8.y0 - tun - 60} at={kb + 6} color={AMBER.ink} size={28}>kinetic energy in</Lbl>
			<Lbl x={HG8.xc + 40} y={HG8.y0 - HG8.top - 20} at={ot + 6} color={GREY.ink} size={26}>classical: over the top</Lbl>
			<Lbl x={xi + 30} y={HG8.y0 - tun + 50} at={ot + 16} color={NAVY.ink} size={26}>tunnelling: through</Lbl>
			<Lbl x={1180} y={940} at={-30} color={GREY.ink} size={26}>ledger: bars not to scale</Lbl>
			<Lbl x={1640} y={540} at={ps + 10} color={AMBER.ink} size={28}>{`+ Q = ${fx(DT_Q, 1)} MeV`}</Lbl>
			<HandTag x={880} y={720} text="K in + Q out" at={bv + 6} size={36} color={AMBER.ink} />
			<Lbl x={600} y={790} at={bv - 40} color={GREY.ink} size={26}>a ball past a small hump into a deep valley</Lbl>
			<Chip x={1180} y={200} at={tm} size={30} color={INK}>mass-energy before = mass-energy after</Chip>
			<div style={{position: 'absolute', left: 1180, top: 280}}><Row at={pr} size={44}><AnswerBox at={pr + 4}>{`K_out = K_in + ${fx(DT_Q, 1)} MeV`}</AnswerBox></Row></div>
			<Lbl x={1460} y={400} at={pr + 10} color={GREY.ink} size={26}>rest mass down by Δm</Lbl>
		</>
	);
};

// ---------- 9. who gets the energy ----------
const C9 = {x: 860, y: 430};
export const S09: React.FC = () => {
	const id = 'energy-share';
	const f = useCurrentFrame();
	const fa = cue(id, 'fly apart in opposite directions'), mf = cue(id, 'so it moves much faster'), ft = cue(id, 'about fourteen MeV'), mh = cue(id, "magnetic fields can't hold it"), hh = cue(id, 'its energy becomes heat'), pn = cue(id, 'Per nucleon'), fg = cap(id, cue(id, 'four times what fission gives'), 24);
	const t = prog(f, fa, 220, x => x);
	const ax = C9.x - 18 - 140 * t, nx = Math.min(1660, C9.x + 18 + 140 * V_RATIO * t);
	const wall = prog(f, hh, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={1700} y={240} width={90} height={420} rx={8} fill={wall > 0 ? AMBER.soft : '#d9d4ca'} stroke={INK} strokeWidth={3} />
				{wall > 0.001 ? <rect x={1700} y={240} width={90} height={420} rx={8} fill={AMBER.stroke} opacity={0.5 * wall} /> : null}
				<NucleonCluster cx={ax} cy={C9.y} r={26} discs={L_HE4} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<Disc x={nx} y={C9.y} r={24} fill={NEUTRON} text="n" />
				<Arrow x0={ax - 40} y0={C9.y - 70} x1={ax - 170} y1={C9.y - 70} color={AMBER.stroke} width={6} opacity={prog(f, fa, 12)} />
				<Arrow x0={nx + 30} y0={C9.y - 70} x1={nx + 160} y1={C9.y - 70} color={AMBER.stroke} width={6} opacity={prog(f, fa, 12) * (nx < 1500 ? 1 : 0)} />
				<text x={ax - 105} y={C9.y - 92} textAnchor="middle" style={T(30, AMBER.ink)} opacity={prog(f, fa + 6, 12)}>p</text>
				<text x={nx + 95} y={C9.y - 92} textAnchor="middle" style={T(30, AMBER.ink)} opacity={prog(f, fa + 6, 12) * (nx < 1500 ? 1 : 0)}>p</text>
				<g opacity={prog(f, mf, 14)}>
					<rect x={180} y={590} width={100} height={30} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
					<rect x={180} y={640} width={100 * V_RATIO} height={30} fill={GREY.soft} stroke={GREY.stroke} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={ax} y={C9.y + 70} at={fa} color={INK} size={28} anchor="middle">⁴He</Lbl>
			<Lbl x={C9.x} y={C9.y - 150} at={fa + 10} out={mh} color={AMBER.ink} size={28} anchor="middle">equal and opposite momentum p</Lbl>
			<Lbl x={96} y={590 + 24} at={mf} color={NAVY.ink} size={28}>⁴He</Lbl>
			<Lbl x={96} y={640 + 24} at={mf} color={GREY.ink} size={28}>n</Lbl>
			<Lbl x={180} y={570} at={mf} color={INK} size={26}>speed</Lbl>
			<Lbl x={200 + 100 * V_RATIO} y={664} at={mf + 6} color={GREY.ink} size={28}>{`about ${fx(V_RATIO, 0)} times faster`}</Lbl>
			<Readout x={180} y={710} label="neutron" value={`≈ ${fx(SH_N, 1)} MeV`} color={GREY.ink} w={300} />
			<Readout x={500} y={710} label="⁴He" value={`≈ ${fx(SH_A, 1)} MeV`} color={NAVY.ink} w={260} />
			<HandTag x={800} y={750} text="lighter → faster → more KE" at={ft + 10} size={32} color={GREY.ink} />
			<Lbl x={180} y={860} at={ft + 16} color={GREY.ink} size={26}>{`${fx(SH_N, 1)} of ${fx(DT_Q, 1)} MeV: about four fifths`}</Lbl>
			<Lbl x={1300} y={300} at={mh} color={GREY.ink} size={28} anchor="middle">neutral: not confined</Lbl>
			<Lbl x={1745} y={700} at={hh + 10} color={AMBER.ink} size={26} anchor="middle">wall</Lbl>
			<Lbl x={1260} y={700} at={hh + 16} color={AMBER.ink} size={28}>reactor heat comes mostly</Lbl>
			<Lbl x={1260} y={736} at={hh + 20} color={AMBER.ink} size={28}>from the neutrons</Lbl>
			<Strip x={96} y={190} at={-30} size={34}>{`²₁H + ³₁H → ⁴₂He + ¹₀n + ${fx(DT_Q, 1)} MeV`}</Strip>
			<Chip x={960} y={820} at={pn} size={28} color={INK}>{`fusion (D-T): ${fx(DT_Q, 1)} ÷ 5 ≈ ${fx(PN_FUS, 1)} MeV per nucleon`}</Chip>
			<Chip x={960} y={880} at={fg} size={28} color={INK}>{`fission (U-235, last video): 200 ÷ 236 ≈ ${fx(PN_FIS, 2)} MeV per nucleon`}</Chip>
		</>
	);
};

// ---------- 10. back to the stars ----------
const SUNC = {x: 440, y: 560, d: 620};
export const S10: React.FC = () => {
	const id = 'stars';
	const f = useCurrentFrame();
	const gs = cue(id, 'gravity squeezes the hydrogen'), tt = cue(id, "about ten times the Sun's core temperature"), by = cue(id, 'billions of years'), fu = cap(id, cue(id, 'the easiest pair to fuse'), 24);
	const pack = prog(f, gs, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={SUN} p={discPlace(SUN, SUNC.x, SUNC.y, SUNC.d)} />
				{Array.from({length: 8}, (_, i) => { const a = (i / 8) * Math.PI * 2 + 0.2, r0 = SUNC.d / 2 + 70, r1 = SUNC.d / 2 + 6; return <Arrow key={i} x0={SUNC.x + r0 * Math.cos(a)} y0={SUNC.y + r0 * Math.sin(a)} x1={SUNC.x + r1 * Math.cos(a)} y1={SUNC.y + r1 * Math.sin(a)} color={NAVY.stroke} width={6} />; })}
				<circle cx={SUNC.x} cy={SUNC.y} r={50} fill="none" stroke="#fffdf8" strokeWidth={4} strokeDasharray="8 6" />
				<line x1={SUNC.x + 50} y1={SUNC.y} x2={880} y2={480} stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
				<circle cx={970} cy={480} r={90} fill="#fff4d6" stroke={INK} strokeWidth={3} />
				{Array.from({length: 14}, (_, i) => { const a = i * 2.4, rr = (18 + 52 * ((i * 37) % 11) / 11) * (1 - 0.45 * pack); return <circle key={i} cx={970 + rr * Math.cos(a)} cy={480 + rr * Math.sin(a)} r={10} fill={NUC_RED} stroke={INK} strokeWidth={1.5} />; })}
				<rect x={1160} y={720} width={60} height={30} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={3} opacity={prog(f, gs, 14)} />
				<rect x={1160} y={800} width={600 * prog(f, tt, 30)} height={30} fill={SLATE.soft} stroke={SLATE.stroke} strokeWidth={3} />
			</FrameSvg>
			<Lbl x={970} y={600} at={-30} color={INK} size={26} anchor="middle">core (diagram)</Lbl>
			<HandTag x={1100} y={240} text="gravity confines" at={-10} size={36} color={NAVY.ink} />
			<Readout x={1160} y={480} label="Sun's core" value={`≈ ${sci(T_SUN, 1)} K`} color={SLATE.ink} w={380} />
			<Lbl x={1240} y={744} at={gs + 6} color={SLATE.ink} size={26}>Sun&apos;s core</Lbl>
			<Lbl x={1160} y={870} at={tt + 6} color={SLATE.ink} size={28}>{`fusion reactor: ≈ ${sci(T_REACTOR, 1)} K (ten times hotter)`}</Lbl>
			<Lbl x={1100} y={330} at={by} color={GREY.ink} size={26}>Sun: pp chain, slow (an earlier video)</Lbl>
			<Lbl x={1100} y={380} at={fu} color={AMBER.ink} size={26}>reactor: D-T, the fastest at reachable temperatures</Lbl>
			<HandTag x={0} y={0} at={tt + 30} color={SLATE.ink} marks={[{kind: 'brace', x: 1160, y1: 712, y2: 838, facing: 'left'}]} />
			<Lbl x={SUNC.x} y={SUNC.y + SUNC.d / 2 + 50} at={-30} color={GREY.ink} size={26} anchor="middle">the Sun (illustration)</Lbl>
		</>
	);
};

// ---------- 11. holding a star on Earth ----------
const TP = {x: 100, y: 210, w: 960};
export const S11: React.FC = () => {
	const id = 'tokamak';
	const f = useCurrentFrame();
	const nw = cue(id, 'no wall can touch fuel that hot'), pl = cue(id, 'kept as a plasma'), mf = cue(id, 'held by magnetic fields'), ci = cue(id, 'a charged particle circles around a magnetic field'), wa = cue(id, 'away from the walls'), fr = cap(id, cue(id, 'being built in France'), 24);
	const pp = placeOf(TOKAMAK, TP);
	const [cx, cy] = pp.at(TOK_AT.ring[0], TOK_AT.ring[1]);
	const tg: TorusG = {cx, cy, R: TOK_AT.rx * pp.s, a: TOK_AT.minor * pp.s, tilt: TOK_AT.ry / TOK_AT.rx};
	const phi = ((f - wa) / 120) * Math.PI * 2;
	const [qx, qy] = torusPt(tg, phi, 7, 0.4);
	const circ = ((f - ci) / 40) * Math.PI * 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={TOKAMAK} p={TP} />
				<HelixLines g={tg} turns={7} lines={2} draw={prog(f, mf, 40)} color={NAVY.stroke} width={3.5} />
				{f >= wa ? <circle cx={qx} cy={qy} r={10} fill={RED.stroke} stroke="#fffdf8" strokeWidth={2.5} /> : null}
				{f >= ci ? <g opacity={prog(f, ci, 14)}>
					<rect x={1460} y={560} width={340} height={250} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					{Array.from({length: 12}, (_, i) => { const x = 1500 + (i % 4) * 86, y = 600 + Math.floor(i / 4) * 80; return <g key={i}><line x1={x - 8} y1={y - 8} x2={x + 8} y2={y + 8} stroke={NAVY.stroke} strokeWidth={2.5} /><line x1={x + 8} y1={y - 8} x2={x - 8} y2={y + 8} stroke={NAVY.stroke} strokeWidth={2.5} /></g>; })}
					<circle cx={1630} cy={685} r={70} fill="none" stroke={RED.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<circle cx={1630 + 70 * Math.cos(circ)} cy={685 + 70 * Math.sin(circ)} r={10} fill={RED.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={TP.x} y={940} at={-30} color={GREY.ink} size={26}>a tokamak (illustration); field lines drawn over it</Lbl>
			<CrossedChip x={1120} y={200} at={nw} crossAt={nw + 14} size={30} caption="cools the fuel, damages the wall">fuel touching a wall</CrossedChip>
			<Chip x={1120} y={340} at={pl} size={30} color={INK}>plasma: nuclei and electrons separated</Chip>
			<HandTag x={1120} y={450} text="twisted field lines" at={mf + 30} size={36} color={NAVY.ink} />
			<Lbl x={1470} y={840} at={ci + 6} color={NAVY.ink} size={26}>B into page: a charge circles</Lbl>
			<HandTag x={0} y={0} at={wa + 20} color={NAVY.ink} marks={[{kind: 'circle', cx: cx + tg.R * 0.9, cy: cy + 20, rx: 70, ry: 60}]} />
			<Lbl x={1120} y={520} at={wa + 10} color={RED.ink} size={28}>charges spiral round, clear of the wall</Lbl>
			<Lbl x={1120} y={880} at={fr} color={INK} size={28}>{`ITER (France): aiming for ${ITER_T} million °C`}</Lbl>
			<Chip x={1120} y={600} at={fr + 6} size={26} w={320} color={INK}>Australia (ANSTO): first ITER cooperation agreement with a non-member, 2016</Chip>
			<Lbl x={1120} y={925} at={fr + 12} color={GREY.ink} size={26}>other approach: lasers squeeze fuel pellets</Lbl>
		</>
	);
};

// ---------- 12. a way to remember ----------
const HG12: HillG = {x0: 140, x1: 1100, xc: 360, xw0: 160, xw1: 300, y0: 560, top: 280, deep: 230, p: 2};
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const gp = cue(id, 'Get past the hill'), wv = cap(id, cue(id, 'win the valley'), 10);
	const tun = 0.14 * HG12.top, xo = hillX(HG12, tun), xi = hillXin(HG12, tun);
	const a = prog(f, gp - 10, 30), b = prog(f, wv, 16);
	const mx = b > 0 ? lerp(xi, 230, b) : lerp(xo + 80, xi, a), my = b > 0 ? lerp(HG12.y0 - tun, HG12.y0 + HG12.deep, b) : HG12.y0 - tun;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Hill g={HG12} shadeHill={1} shadeWell={1} />
				<path d={Array.from({length: 30}, (_, i) => { const x = lerp(xo, HG12.xc, i / 29); return `${i ? 'L' : 'M'}${x.toFixed(1)},${(hillY(HG12, x) - 14).toFixed(1)}`; }).join(' ')} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<line x1={xo} y1={HG12.y0 - tun} x2={xi} y2={HG12.y0 - tun} stroke={NAVY.stroke} strokeWidth={5} strokeDasharray="12 8" />
				<circle cx={mx} cy={my - 12} r={13} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} />
				<rect x={430} y={HG12.y0 + 60} width={380 * b} height={30} fill={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={HG12.xc + 40} y={HG12.y0 - HG12.top - 20} at={-30} color={RED.ink} size={28}>hill ≈ 0.5 MeV</Lbl>
			<Lbl x={830} y={HG12.y0 + 84} at={wv + 4} color={AMBER.ink} size={30}>{`+ ${fx(DT_Q, 1)} MeV`}</Lbl>
			<Lbl x={140} y={HG12.y0 + HG12.deep + 50} at={-30} color={GREY.ink} size={26}>schematic, not to scale</Lbl>
			<div style={{position: 'absolute', left: 1140, top: 300, width: 680}}><MemoryCard at={gp} main={<>Get past the hill, win the valley.</>} /></div>
		</>
	);
};
