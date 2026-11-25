// Scenes 1 to 7: the hook (last time's balance made live: pan readouts, the nucleons counted 12 = 12, 0.82% lighter),
// pulling a nucleus apart (strong-force links breaking as an energy bar flows in; the system's mass rising), not lost
// matter (the motion in reverse with energy and gamma rays leaving; Δm = E_b/c² framed), the method (Δm, E_b, 931.5),
// carbon-12's mass defect, its binding energy and per nucleon (two stages) and the atomic mass trap (electrons on one
// side only, then cancelling with hydrogen atom masses).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {Balance, NucleonCluster, clusterLayout, panAt} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {NeighbourLinks} from '../../physics/atom/binding';
import {Packet} from '../../physics/light/photo';
import {BAL15, HandoffBoard15, M8V15FinalFrame, TILT15} from '../phys-y12-m8-v15/s3';
import {dur as dur15} from '../phys-y12-m8-v15/common';
import {C_DM, C_EB, C_EBA, C_FRAC, C_SUM, C_VS_H, FIX_DM, FIX_EB, HEAD, HEAD_SIZE, M_C, M_C_ATOM, M_H, M_N, M_P, TRAP_DM, TRAP_EB, U_MEV, cap, cue} from './common';
import {AMBER, C12, EnergyBar, GREEN_C, GREY, Givens, INK, Lbl, LiveBalance, NAVY, NEUTRON, NUC_RED, ORANGE, Strip, T, TEAL, fx, u6} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpG = (a: BalanceG, b: BalanceG, t: number): BalanceG => ({cx: lerp(a.cx, b.cx, t), cy: lerp(a.cy, b.cy, t), arm: lerp(a.arm, b.arm, t), drop: lerp(a.drop, b.drop, t)});

// ---------- 1. hook ----------
export const BAL16: BalanceG = {cx: 960, cy: 400, arm: 400, drop: 200};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const lm = cue(id, 'less mass than the six protons and six neutrons'), ng = cue(id, 'nothing has gone missing'), ct = cue(id, 'Count them'), lo = cue(id, 'less than one per cent'), be = cap(id, cue(id, 'nuclear binding energy'), 8);
	if (f < 1) return <M8V15FinalFrame />;
	const base = 1 - prog(f, 1, 15), grow = prog(f, 16, 30);
	const g = lerpG(BAL15, BAL16, grow), r = lerp(20, 24, grow);
	const [pl, pr] = panAt(g, TILT15);
	return (
		<>
			{base > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: base}}><HandoffBoard15 f={dur15('handoff') - 1} final heading={false} chip={false} /></div> : null}
			<MarkedHeading text={HEAD} marks={['missing mass', 'binding energy']} at={be} size={HEAD_SIZE} />
			<Chip x={96} y={870} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how does missing mass measure nuclear binding energy?</Chip>
			<FrameSvg><LiveBalance g={g} deg={TILT15} r={r} numbers={prog(f, ct, 30)} /></FrameSvg>
			<Readout x={200} y={190} label="bound nucleus" value={`${u6(M_C)} u`} color={INK} w={420} opacity={prog(f, lm, 12)} />
			<Readout x={1300} y={190} label="separate nucleons" value={`${u6(C_SUM)} u`} color={INK} w={420} opacity={prog(f, lm + 10, 12)} />
			<Readout x={700} y={790} label="difference" value={f < lo ? '?' : `${fx(C_FRAC * 100, 2)}% lighter`} color={INK} w={520} opacity={prog(f, lm + 20, 12)} />
			<CrossedChip x={96} y={400} at={ng} crossAt={ng + 14} size={30}>lost particles</CrossedChip>
			<HandTag x={880} y={300} text="12 = 12" at={ct + 30} size={44} color={INK} marks={[{kind: 'circle', cx: pl[0], cy: pl[1] - 60, rx: 150, ry: 110}, {kind: 'circle', cx: pr[0], cy: pr[1] - 30, rx: 180, ry: 90}]} />
			<HandTag x={0} y={0} at={lo + 10} color={INK} marks={[{kind: 'brace', x: pr[0] + 220, y1: pl[1], y2: pr[1], facing: 'right'}]} />
		</>
	);
};

// ---------- 2 and 3. pulling a nucleus apart; not lost matter ----------
const NUC2 = {cx: 380, cy: 560, r: 34};
const BALS: BalanceG = {cx: 1450, cy: 470, arm: 230, drop: 130};
const SMALL_R = 13;
/** The small balance: a bound reference nucleus on the left, the system being pulled apart (spread s) on the right. */
const SmallBalance: React.FC<{deg: number; s: number}> = ({deg, s}) => {
	const [pl, pr] = panAt(BALS, deg);
	return (
		<g>
			<Balance g={BALS} deg={deg} panW={220} size={26} />
			<NucleonCluster cx={pl[0]} cy={pl[1] - 36} r={SMALL_R} discs={C12} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
			<NucleonCluster cx={pr[0]} cy={pr[1] - 36} r={SMALL_R} discs={C12.map(d => ({...d, x: d.x * s, y: d.y * Math.min(s, 1.35)}))} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		</g>
	);
};
const BigNucleus: React.FC<{s: number; links: number; f: number}> = ({s, links, f}) => (
	<g>
		<NeighbourLinks cx={NUC2.cx} cy={NUC2.cy} r={NUC2.r} discs={C12} color={TEAL.stroke} spread={s} width={6} opacity={links} />
		<NucleonCluster cx={NUC2.cx} cy={NUC2.cy} r={NUC2.r} discs={C12.map(d => ({...d, x: d.x * s, y: d.y * s}))} pFill={NUC_RED} nFill={NEUTRON} tremble={0.3} f={f} />
	</g>
);
export const S02: React.FC = () => {
	const id = 'pull-apart';
	const f = useCurrentFrame();
	const ym = cue(id, 'You met the idea'), sf = cue(id, 'attract each other through the strong force'), pa = cue(id, 'pulling a nucleus apart takes energy'), em = cue(id, 'E equals m c squared'), mn = cap(id, cue(id, 'more mass than the nucleus'), 30);
	const pull = prog(f, pa, 60), s = 1 + 1.0 * pull, tilt = 7 * prog(f, mn, 30);
	const mass = lerp(M_C, C_SUM, prog(f, mn, 30));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BigNucleus s={s} links={prog(f, sf, 14) * (1 - prog(f, pa + 10, 30))} f={f} />
				<EnergyBar x={96} y={880} w={620 * pull} />
				<SmallBalance deg={tilt} s={1 + 1.4 * pull} />
			</FrameSvg>
			<Chip x={96} y={190} at={ym} size={28} color={GREY.ink}>earlier video (stars): binding energy, helium-4: 28.3 MeV</Chip>
			<Lbl x={NUC2.cx} y={NUC2.cy - 290} at={-30} color={INK} size={30} anchor="middle">carbon-12 nucleus</Lbl>
			<HandTag x={NUC2.cx + 160} y={NUC2.cy - 150} text="strong force: attraction" at={sf + 10} out={pa + 30} size={32} color={TEAL.ink} />
			<Readout x={760} y={830} label="energy in" value={`${fx(C_EB * pull, 1)} MeV`} color={ORANGE.ink} w={360} opacity={prog(f, pa, 12)} />
			<HandTag x={96} y={852} text="energy in = binding energy, E_b" at={pa + 30} size={32} color={ORANGE.ink} />
			<Chip x={860} y={280} at={em} size={30} color={INK}>E = mc² (Module 7)</Chip>
			<Readout x={1330} y={190} label="pulled-apart system" value={`${u6(mass)} u`} color={INK} w={420} />
			<Lbl x={1220} y={470} at={-30} color={GREY.ink} size={26} anchor="middle">bound</Lbl>
			<HandTag x={1150} y={870} text="more energy → more mass" at={mn + 14} size={32} color={ORANGE.ink} marks={[{kind: 'arrow', from: [730, 880], to: [1320, 290], bend: -0.2}]} />
		</>
	);
};
export const S03: React.FC = () => {
	const id = 'not-lost-matter';
	const f = useCurrentFrame();
	const im = cue(id, "isn't matter that's been lost"), me = cue(id, 'the mass of that energy left with it'), ap = cue(id, 'to pull the nucleus apart'), ed = cap(id, cue(id, 'energy out, mass down'), 20);
	const back = prog(f, 8, 70), s = 1 + 1.0 * (1 - back);
	const again = prog(f, ap, 30), tilt = 7 * (1 - back) + 7 * again;
	const mass = lerp(C_SUM, M_C, back);
	const gOut = (k: number) => { const u = prog(f, 20 + k * 14, 50); return u > 0.001 && u < 1 ? <Packet key={k} x={NUC2.cx + 150 + 520 * u} y={NUC2.cy - 120 + k * 240 - (k ? -60 : 60) * u} deg={k ? 20 : -20} len={70} color={AMBER.stroke} label="γ" /> : null; };
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BigNucleus s={s} links={back} f={f} />
				<EnergyBar x={96 + 620 * back} y={880} w={620 * (1 - back)} />
				{gOut(0)}{gOut(1)}
				<SmallBalance deg={tilt} s={1 + 1.4 * Math.max(1 - back, again)} />
				{f >= ap ? <g opacity={again}><line x1={BALS.cx + BALS.arm + 150} y1={panAt(BALS, 7)[0][1]} x2={BALS.cx + BALS.arm + 150} y2={panAt(BALS, 7)[1][1]} stroke={INK} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<Lbl x={NUC2.cx} y={NUC2.cy - 290} at={-30} color={INK} size={30} anchor="middle">forming: nucleons come together</Lbl>
			<Readout x={1330} y={190} label="system mass" value={`${u6(mass)} u`} color={INK} w={420} />
			<CrossedChip x={96} y={190} at={im} crossAt={im + 14} size={30} caption="same 12 nucleons">mass defect = lost matter</CrossedChip>
			<Lbl x={760} y={360} at={me} color={ORANGE.ink} size={32}>energy out → mass down (Module 7)</Lbl>
			<div style={{position: 'absolute', left: 760, top: 420}}><Row at={ap + 20} size={44}><AnswerBox at={ap + 24}>mass defect Δm = E_b / c²</AnswerBox></Row></div>
			<Chip x={760} y={540} at={ed} size={30} color={INK}>the Sun: energy out, mass down (Module 7)</Chip>
		</>
	);
};

// ---------- 4. the method ----------
const ICON: BalanceG = {cx: 300, cy: 430, arm: 190, drop: 110};
export const S04: React.FC = () => {
	const id = 'method';
	const zp = cue(id, 'the mass of Z protons and N neutrons'), tc = cue(id, 'times c squared'), sc = cue(id, 'a shortcut'), ds = cap(id, cue(id, 'from your data sheet'), 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><LiveBalance g={ICON} deg={7} r={10} /></FrameSvg>
			<Readout x={1330} y={560} label="carbon-12: parts (6 p + 6 n)" value={`${u6(C_SUM)} u`} color={INK} w={480} />
			<Readout x={1330} y={700} label="carbon-12: whole nucleus" value={`${u6(M_C)} u`} color={INK} w={480} />
			<Lbl x={96} y={210} at={-30} color={INK} size={34}>the method</Lbl>
			<Lbl x={96} y={800} at={-30} color={GREY.ink} size={28}>parts − whole = Δm</Lbl>
			<div style={{position: 'absolute', left: 520, top: 220, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={zp} size={52}>Δm = Zm<sub>p</sub> + Nm<sub>n</sub> − m<sub>nucleus</sub></Row>
				<Row at={zp + 30} size={32} style={{color: GREY.ink}}>Z: protons; N: neutrons (A − Z)</Row>
				<Row at={tc} size={52}>E<sub>b</sub> = Δm c²</Row>
				<Row at={ds} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={ds + 4}>{`1 u = ${U_MEV} MeV/c² → E_b (MeV) = Δm (u) × ${U_MEV}`}</AnswerBox></Row>
			</div>
			<Chip x={520} y={680} at={sc} size={30} color={INK}>Δm in u</Chip>
			<Chip x={760} y={680} at={ds + 10} size={30} color={AMBER.ink}>HSC data sheet</Chip>
			<HandTag x={900} y={800} text="u → MeV: × 931.5" at={ds + 16} size={36} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5 and 6. carbon-12 in two stages ----------
const WorkHead: React.FC = () => (
	<>
		<Strip x={96} y={190} at={-30} size={32}>Find the binding energy per nucleon of carbon-12</Strip>
		<Strip x={96} y={260} at={-30} size={32}>Δm = Zm<sub>p</sub> + Nm<sub>n</sub> − m<sub>nucleus</sub>, E<sub>b</sub> = Δm × 931.5 MeV</Strip>
		<Givens x={96} y={340} w={1100} at={-30} size={32} lines={[<>Z = 6, N = 6, m<sub>nucleus</sub> = {u6(M_C)} u (carbon-12 nucleus)</>, <>m<sub>p</sub> = {u6(M_P)} u, m<sub>n</sub> = {u6(M_N)} u (particles)</>]} />
	</>
);
const ICON2: BalanceG = {cx: 1520, cy: 420, arm: 200, drop: 110};
export const S05: React.FC = () => {
	const id = 'c12-mass-defect';
	const f = useCurrentFrame();
	const ad = cue(id, 'add to twelve point zero nine five six four six'), dm = cap(id, cue(id, 'zero point zero nine eight nine three seven u'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkHead />
			<FrameSvg><LiveBalance g={ICON2} deg={7} r={11} /></FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={ad} ageAt={dm} size={48}>{`6(${u6(M_P)}) + 6(${u6(M_N)}) = ${u6(C_SUM)} u`}</Row>
				<Row at={dm} size={52}><AnswerBox at={dm + 4}>{`Δm = ${u6(C_SUM)} − ${u6(M_C)} = ${u6(C_DM)} u`}</AnswerBox></Row>
			</div>
			<Readout x={1330} y={170} label="gap: Δm" value={f >= dm ? `${u6(C_DM)} u` : '?'} color={INK} w={420} />
			<HandTag x={1000} y={780} text="parts − whole" at={dm + 14} size={36} color={INK} marks={[{kind: 'arrow', from: [700, 560], to: [700, 620], bend: 0.4}]} />
		</>
	);
};
export const S06: React.FC = () => {
	const id = 'c12-binding';
	const f = useCurrentFrame();
	const nt = cue(id, 'ninety two point two mega electron volts'), ca = cue(id, 'completely apart'), sp = cue(id, 'seven point six eight mega electron volts per nucleon'), te = cap(id, cue(id, 'thirteen point six electron volts'), 20);
	const tick = Math.min(1, prog(f, nt, 24));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<WorkHead />
			<FrameSvg>
				<NucleonCluster cx={1520} cy={560} r={22} discs={C12.map(d => ({...d, x: d.x * (1 + 1.2 * prog(f, ca, 40)), y: d.y * (1 + 1.2 * prog(f, ca, 40))}))} pFill={NUC_RED} nFill={NEUTRON} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={-30} size={32} style={{color: GREY.ink}}>{`kept: Δm = ${u6(C_DM)} u`}</Row>
				<Row at={nt} ageAt={sp} size={52}><AnswerBox at={nt + 4}>{`E_b = ${u6(C_DM)} × 931.5 = ${fx(C_EB * tick, 1)} MeV`}</AnswerBox></Row>
				<Row at={sp} size={52}><AnswerBox at={sp + 4}>{`E_b/A = ${fx(C_EB, 1)} / 12 = ${fx(C_EBA, 2)} MeV per nucleon`}</AnswerBox></Row>
			</div>
			<Lbl x={1520} y={780} at={ca + 10} color={ORANGE.ink} size={30} anchor="middle">{`${fx(C_EB, 1)} MeV to separate`}</Lbl>
			<HandTag x={1180} y={500 + 230} text="÷ A = 12" at={sp + 14} size={36} color={ORANGE.ink} />
			<Chip x={96} y={830} at={te} size={28} w={1500} color={INK}>{`hydrogen atom: 13.6 eV; nucleon in ¹²C: ${fx(C_EBA, 2)} MeV, over half a million times more (${fx(C_VS_H / 1e5, 2)} × 10⁵)`}</Chip>
		</>
	);
};

// ---------- 7. the atomic mass trap ----------
const Dots: React.FC<{x: number; y: number; n: number; o?: number; pair?: number}> = ({x, y, n, o = 1, pair = 0}) => (o <= 0.001 ? null : <g opacity={o}>{Array.from({length: n}, (_, i) => <circle key={i} cx={x + i * 30} cy={y} r={9} fill={NAVY.stroke} opacity={1 - 0.7 * pair} />)}</g>);
export const S07: React.FC = () => {
	const id = 'atomic-mass-trap';
	const f = useCurrentFrame();
	const ie = cue(id, 'which include the electrons'), et = cue(id, 'exactly twelve u'), ub = cue(id, 'Use that with bare proton masses'), ks = cue(id, 'keep both sides the same'), uh = cue(id, 'Use hydrogen atom masses'), ag = cap(id, cue(id, 'ninety two point two again'), 24);
	const pairOff = prog(f, uh + 50, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, ie, 14)}>
					<circle cx={960} cy={300} r={90} fill="none" stroke={GREY.stroke} strokeWidth={2.5} strokeDasharray="8 6" />
					<NucleonCluster cx={960} cy={300} r={9} discs={C12} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					{Array.from({length: 6}, (_, i) => { const a = (i / 6) * Math.PI * 2; return <circle key={i} cx={960 + 90 * Math.cos(a)} cy={300 + 90 * Math.sin(a)} r={9} fill={NAVY.stroke} />; })}
				</g>
				<line x1={960} y1={430} x2={960} y2={900} stroke="rgba(60,45,20,0.35)" strokeWidth={4} />
				{f >= ub ? <g opacity={prog(f, ub, 14)}><text x={110} y={720} style={T(28, INK)}>6 protons: no e⁻</text><text x={560} y={720} style={T(28, INK)}>C atom:</text><Dots x={680} y={711} n={6} /></g> : null}
				{f >= uh ? <g opacity={prog(f, uh, 14)}><text x={1010} y={720} style={T(28, INK)}>6 H atoms:</text><Dots x={1160} y={711} n={6} pair={pairOff} /><text x={1400} y={720} style={T(28, INK)}>C atom:</text><Dots x={1510} y={711} n={6} pair={pairOff} />{pairOff > 0.001 ? Array.from({length: 6}, (_, i) => <path key={i} d={`M${1160 + i * 30},${700} Q${(1160 + 1510) / 2 + i * 30},${640 - i * 6} ${1510 + i * 30},${700}`} fill="none" stroke={NAVY.stroke} strokeWidth={2} strokeDasharray="5 5" opacity={pairOff} />) : null}<text x={1330} y={598} textAnchor="middle" style={T(28, NAVY.ink)} opacity={pairOff}>6 e⁻ each side: they cancel</text></g> : null}
			</FrameSvg>
			<Lbl x={1080} y={250} at={ie + 10} color={NAVY.ink} size={28}>atomic mass = nucleus + electrons</Lbl>
			<Chip x={1080} y={300} at={et} size={30} color={INK}>{`m(¹²C atom) = ${u6(M_C_ATOM)} u`}</Chip>
			<div style={{position: 'absolute', left: 96, top: 460, width: 820, opacity: prog(f, ub, 14)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: INK, lineHeight: 1.3}}>{`6(${u6(M_P)}) + 6(${u6(M_N)})`}<br />{`− ${u6(M_C_ATOM)} = ${u6(TRAP_DM)} u → ${fx(TRAP_EB, 1)} MeV`}</div>
			</div>
			<CrossedChip x={96} y={770} at={ub + 30} crossAt={ub + 44} size={30} caption="electrons on one side only">{`${fx(TRAP_EB, 1)} MeV`}</CrossedChip>
			<Chip x={340} y={196} at={ks} size={30} color={INK}>same kind of mass on both sides</Chip>
			<div style={{position: 'absolute', left: 1000, top: 460, width: 820, opacity: prog(f, uh, 14)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: INK, lineHeight: 1.3}}>{`6(${u6(M_H)}) + 6(${u6(M_N)})`}<br />{`− ${u6(M_C_ATOM)} = ${u6(FIX_DM)} u`}</div>
			</div>
			<div style={{position: 'absolute', left: 1000, top: 770}}><Row at={ag} size={44}><AnswerBox at={ag + 4}>{`→ ${fx(FIX_EB, 1)} MeV`}</AnswerBox></Row></div>
			<HandTag x={1330} y={810} text="electrons cancel" at={ag + 14} size={36} color={GREEN_C.ink} marks={[{kind: 'circle', cx: 1330, cy: 711, rx: 220, ry: 34}]} />
		</>
	);
};
export {clusterLayout};
