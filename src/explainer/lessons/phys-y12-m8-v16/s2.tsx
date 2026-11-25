// Scenes 8 to 13: why per nucleon (total bars against per-nucleon bars), the curve (a live cursor on the binding-energy
// curve with A, E_b/A and total readouts), why it rises (neighbour links: short range, surface nucleons), why it falls
// (the repulsion web between every pair of protons; extra neutrons), which changes release energy (both arrows rising
// towards the peak) and the memory aid with the comparison balance.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {BindingCurve, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {CurveMark, NeighbourLinks, RepulsionWeb, neighbourCount} from '../../physics/atom/binding';
import {GraphPaper} from '../phys-y12-m8-v14/parts';
import {AMBER, C12, GREY, INK, Lbl, LiveBalance, NAVY, NEUTRON, NUC_RED, ORANGE, ROSE, TEAL, fx} from './parts';
import {C_EBA, HEAD, HEAD_SIZE, NZ_O, NZ_PB, PTS, cap, cue, total} from './common';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const tot = (p: {A: number; b: number}) => { const t = total(p); return t >= 100 ? fx(t) : fx(t, 1); };

// ---------- 8. why per nucleon ----------
const BARS = {base: 820, k: 600 / total(PTS[5])};
export const S08: React.FC = () => {
	const id = 'per-nucleon';
	const f = useCurrentFrame();
	const sm = cue(id, 'simply because it has more nucleons'), se = cue(id, 'seventeen hundred and eighty'), cf = cap(id, cue(id, 'compare nuclei fairly'), 24);
	const div = prog(f, cf, 24);
	const C = PTS[1], U = PTS[5];
	const perH = (b: number) => (b / 9) * 520;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GraphPaper x={180} y={220} w={700} h={600} step={50} />
				<line x1={180} y1={BARS.base} x2={880} y2={BARS.base} stroke={INK} strokeWidth={4} />
				<rect x={300} y={BARS.base - total(C) * BARS.k} width={120} height={total(C) * BARS.k} fill={ORANGE.soft} stroke={ORANGE.stroke} strokeWidth={3} />
				<rect x={620} y={BARS.base - total(U) * BARS.k} width={120} height={total(U) * BARS.k} fill={ORANGE.soft} stroke={ORANGE.stroke} strokeWidth={3 + 4 * pulseOf(f, se, 30)} />
				{div > 0.001 ? <g opacity={div}>
					<line x1={1080} y1={BARS.base} x2={1720} y2={BARS.base} stroke={INK} strokeWidth={4} />
					<rect x={1160} y={BARS.base - perH(C.b) * div} width={140} height={perH(C.b) * div} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
					<rect x={1460} y={BARS.base - perH(U.b) * div} width={140} height={perH(U.b) * div} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			<Lbl x={360} y={BARS.base - total(C) * BARS.k - 20} at={-30} color={ORANGE.ink} size={30} anchor="middle">¹²C: 92 MeV</Lbl>
			<Lbl x={760} y={BARS.base - total(U) * BARS.k + 40} at={-30} color={ORANGE.ink} size={30}>²³⁵U: 1784 MeV (about 1780)</Lbl>
			<Lbl x={360} y={BARS.base + 40} at={sm} color={INK} size={28} anchor="middle">12 nucleons</Lbl>
			<Lbl x={680} y={BARS.base + 40} at={sm + 8} color={INK} size={28} anchor="middle">235 nucleons</Lbl>
			<Lbl x={180} y={210} at={-30} color={INK} size={28}>total binding energy</Lbl>
			<Lbl x={1000} y={300} at={-30} out={cf} color={NAVY.ink} size={34}>which holds each nucleon more tightly?</Lbl>
			<Lbl x={1230} y={BARS.base - perH(C.b) - 24} at={cf + 10} color={NAVY.ink} size={30} anchor="middle">{`${fx(C_EBA, 2)}`}</Lbl>
			<Lbl x={1530} y={BARS.base - perH(U.b) - 24} at={cf + 14} color={NAVY.ink} size={30} anchor="middle">{`${fx(U.b, 2)} MeV per nucleon`}</Lbl>
			<div style={{position: 'absolute', left: 1080, top: 850}}><Row at={cf + 16} size={32}><AnswerBox at={cf + 20}>per nucleon: a fair comparison</AnswerBox></Row></div>
			<HandTag x={1300} y={BARS.base - perH(C.b) - 90} text="÷ A" at={cf + 20} size={40} color={NAVY.ink} />
		</>
	);
};

// ---------- 9. the curve ----------
export const BC: BCBox = {x: 220, y: 270, w: 1080, h: 520};
const CurveBase: React.FC<{b?: BCBox}> = ({b = BC}) => (
	<g>
		<GraphPaper x={b.x} y={b.y} w={b.w} h={b.h} step={b.w / 24} />
		<BindingCurve b={b} size={26} ticksA={[4, 16, 56, 100, 150, 235]} />
	</g>
);
const STOPS = ['h4', 'c12', 'fe', 'u'] as const;
const SPOKEN = ['7.1', '7.7', '8.8', '7.6'] as const;
export const S09: React.FC = () => {
	const id = 'curve-values';
	const f = useCurrentFrame();
	const at = {h4: cue(id, 'Helium four'), c12: cue(id, 'carbon twelve seven point seven'), fe: cue(id, 'iron fifty six'), u: cap(id, cue(id, 'drops back to seven point six'), 24)};
	const As = [1, 4, 12, 56, 235], ts = [0, at.h4, at.c12, at.fe, at.u];
	let sA = Math.sqrt(As[0]);
	for (let i = 1; i < As.length; i++) sA = lerp(sA, Math.sqrt(As[i]), prog(f, ts[i], i >= 3 ? 30 : 20));
	const A = sA * sA;
	const passed = PTS.filter(p => p.A <= A + 0.5);
	const last = passed[passed.length - 1];
	const named = [PTS[0], PTS[1], PTS[3], PTS[5]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CurveBase />
				{PTS.map(p => (p.A <= A + 0.5 ? <CurveMark key={p.A} b={BC} A={p.A} B={p.b} text={p.s} color={[4, 12, 56, 235].includes(p.A) ? NAVY.stroke : GREY.stroke} size={26} dy={p.A === 208 ? 40 : -22} /> : null))}
				<line x1={bcX(BC, A)} y1={BC.y + BC.h} x2={bcX(BC, A)} y2={bcY(BC, bindingAt(A))} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" />
				<circle cx={bcX(BC, A)} cy={BC.y + BC.h} r={12} fill={NAVY.stroke} />
			</FrameSvg>
			<Readout x={1400} y={250} label="nuclide (cursor A)" value={last ? `${last.s} (A = ${last.A})` : 'A = 1'} color={NAVY.ink} w={420} />
			<Readout x={1400} y={390} label="E_b/A (MeV)" value={last ? fx(last.b, 2) : '0'} color={INK} w={420} />
			<Readout x={1400} y={530} label="total E_b (MeV)" value={last ? tot(last) : '0'} color={ORANGE.ink} w={420} />
			{STOPS.map((k, i) => { const p = named[i]; return <Lbl key={k} x={1400} y={690 + i * 40} at={at[k] + 10} color={NAVY.ink} size={28}>{`${p.s}: ${fx(p.b, 2)} (said ${SPOKEN[i]})`}</Lbl>; })}
			<HandTag x={bcX(BC, 56) - 80} y={BC.y - 10} text="top: most tightly held" at={at.fe + 30} size={34} color={NAVY.ink} marks={[{kind: 'circle', cx: bcX(BC, 60), cy: bcY(BC, 8.79), rx: 120, ry: 40}]} />
			<Lbl x={bcX(BC, 12) + 20} y={bcY(BC, 7.68) + 40} at={at.c12 + 10} color={'#287347'} size={28}>✓ worked example</Lbl>
		</>
	);
};

// ---------- 10. why the curve rises ----------
const SMALLB: BCBox = {x: 1440, y: 240, w: 360, h: 190};
const MiniCurve: React.FC<{hiLeft?: number; hiRight?: number}> = ({hiLeft = 0, hiRight = 0}) => (
	<g>
		<BindingCurve b={SMALLB} size={26} ticksA={[]} ticksB={[]} xTitle="" yTitle="" width={4} />
		{hiLeft > 0.001 ? <path d={PTS_PATH(SMALLB, 1, 56)} fill="none" stroke={TEAL.stroke} strokeWidth={9} opacity={hiLeft} strokeLinecap="round" /> : null}
		{hiRight > 0.001 ? <path d={PTS_PATH(SMALLB, 56, 238)} fill="none" stroke={ROSE.stroke} strokeWidth={9} opacity={hiRight} strokeLinecap="round" /> : null}
	</g>
);
const PTS_PATH = (b: BCBox, a0: number, a1: number) => {
	const pts = [[1, 0], [2, 1.112], [4, 7.074], [7, 5.606], [12, 7.68], [16, 7.976], [24, 8.261], [40, 8.551], [56, 8.79], [80, 8.71], [120, 8.51], [180, 8.04], [208, 7.87], [238, 7.57]].filter(([A]) => A >= a0 && A <= a1);
	return pts.map(([A, B], i) => `${i ? 'L' : 'M'}${bcX(b, A).toFixed(1)},${bcY(b, B).toFixed(1)}`).join(' ');
};
const BIGN = clusterLayout(28, 33, 5);
const SMALL_NC = neighbourCount(C12), BIG_NC = neighbourCount(BIGN);
export const S10: React.FC = () => {
	const id = 'curve-rises';
	const f = useCurrentFrame();
	const nn = cue(id, "only reaches a nucleon's nearest neighbours"), os = cue(id, 'sit on the surface'), sa = cue(id, 'surrounded on all sides'), br = cap(id, cue(id, 'the binding per nucleon rises'), 24);
	const sSurf = SMALL_NC.filter(n => n < 6).length, bSurf = BIG_NC.filter(n => n < 6).length;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MiniCurve hiLeft={prog(f, br, 20)} />
				<NucleonCluster cx={360} cy={600} r={34} discs={C12} pFill={NUC_RED} nFill={NEUTRON} />
				{f >= os ? C12.map((d, i) => (SMALL_NC[i] < 6 ? <circle key={i} cx={360 + d.x * 68} cy={600 + d.y * 68} r={38} fill="none" stroke={TEAL.stroke} strokeWidth={5} opacity={prog(f, os + i * 2, 10)} /> : null)) : null}
				<NeighbourLinks cx={1040} cy={620} r={26} discs={BIGN} color={TEAL.stroke} width={5} opacity={prog(f, sa, 20)} />
				<NucleonCluster cx={1040} cy={620} r={26} discs={BIGN} pFill={NUC_RED} nFill={NEUTRON} glow={f >= sa ? BIGN.map((_, i) => i).filter(i => BIG_NC[i] === 6) : []} glowColor={TEAL.soft} letters={false} />
				<NeighbourLinks cx={1040} cy={620} r={26} discs={BIGN} color={TEAL.ink} only={0} width={7} opacity={prog(f, nn, 14) * (1 - prog(f, sa, 14))} />
			</FrameSvg>
			<Lbl x={1440} y={460} at={-30} color={INK} size={26}>binding per nucleon</Lbl>
			<Lbl x={360} y={360} at={-30} color={INK} size={30} anchor="middle">small nucleus (12)</Lbl>
			<Lbl x={1040} y={330} at={-30} color={INK} size={30} anchor="middle">{`larger nucleus (${BIGN.length})`}</Lbl>
			<HandTag x={1280} y={860} text="short range: neighbours only" at={nn + 16} size={34} color={TEAL.ink} marks={[{kind: 'circle', cx: 1040, cy: 620, rx: 80, ry: 76}]} />
			<Lbl x={360} y={860} at={os + 10} color={TEAL.ink} size={30} anchor="middle">{`most on the surface: ${sSurf} of 12`}</Lbl>
			<Lbl x={1040} y={920} at={sa + 10} color={TEAL.ink} size={30} anchor="middle">{`more fully surrounded: ${BIGN.length - bSurf} of ${BIGN.length} inside`}</Lbl>
		</>
	);
};

// ---------- 11. why the curve falls ----------
const MED = clusterLayout(28, 33, 5), BIGR = clusterLayout(40, 51, 9), EXTRA = clusterLayout(0, 103, 1).slice(91);
export const S11: React.FC = () => {
	const id = 'curve-falls';
	const f = useCurrentFrame();
	const rp = cue(id, 'every proton pushes on every other one'), pi = cue(id, 'Past iron'), en = cue(id, 'Heavy nuclei need extra neutrons'), sa = cap(id, cue(id, 'no arrangement is stable at all'), 24);
	const pairs = (z: number) => (z * (z - 1)) / 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MiniCurve hiRight={prog(f, pi, 20)} />
				<NucleonCluster cx={500} cy={600} r={24} discs={MED} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<RepulsionWeb cx={500} cy={600} r={24} discs={MED} color={ROSE.stroke} opacity={0.5 * prog(f, 0, 20)} />
				<NucleonCluster cx={1120} cy={600} r={20} discs={[...BIGR, ...EXTRA.map(d => ({...d, kind: 'n' as const}))].slice(0, 91 + Math.round(12 * prog(f, en, 30)))} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<RepulsionWeb cx={1120} cy={600} r={20} discs={BIGR} color={ROSE.stroke} opacity={0.45 * prog(f, rp, 20)} width={1.2} />
				{f >= sa ? <g opacity={prog(f, sa, 14)}><path d={PTS_PATH(SMALLB, 60, 238)} fill="none" stroke={ROSE.ink} strokeWidth={3} /></g> : null}
			</FrameSvg>
			<Lbl x={1440} y={460} at={-30} color={INK} size={26}>binding per nucleon</Lbl>
			<Lbl x={500} y={330} at={-30} color={ROSE.ink} size={28} anchor="middle">{`28 protons: ${pairs(28)} repelling pairs`}</Lbl>
			<Lbl x={1120} y={330} at={rp} color={ROSE.ink} size={28} anchor="middle">{`40 protons: ${pairs(40)} repelling pairs`}</Lbl>
			<HandTag x={96} y={880} text="every pair of protons repels" at={rp + 10} size={36} color={ROSE.ink} />
			<Chip x={1440} y={520} at={en} size={28} color={INK}>{`¹⁶O: N/Z = ${fx(NZ_O, 1)}`}</Chip>
			<Chip x={1440} y={590} at={en + 10} size={28} color={INK}>{`²⁰⁸Pb: N/Z = ${fx(NZ_PB, 2)}`}</Chip>
			<Lbl x={1120} y={880} at={en + 20} color={GREY.ink} size={28} anchor="middle">extra neutrons: attraction, no repulsion</Lbl>
			<div style={{position: 'absolute', left: 860, top: 200, width: 560}}><Row at={sa} size={30} style={{whiteSpace: 'normal'}}><AnswerBox at={sa + 4}>beyond lead (Z &gt; 82): all unstable (for example U-238&apos;s alpha decay, an earlier video)</AnswerBox></Row></div>
		</>
	);
};

// ---------- 12 and 13. which changes release energy; the memory aid ----------
const arrowPts = (b: BCBox, a0: number, b0: number, a1: number, b1: number, lift = 28): [[number, number], [number, number]] => [[bcX(b, a0), bcY(b, b0) - lift], [bcX(b, a1), bcY(b, b1) - lift]];
export const CurveArrows: React.FC<{b: BCBox; draw: number; bursts?: number; pulse?: number}> = ({b, draw, bursts = 0, pulse = 0}) => {
	const fu = arrowPts(b, 2, 1.112, 48, 8.67), fi = arrowPts(b, 235, 7.591, 110, 8.56);
	const ar = (p: [[number, number], [number, number]], c: string) => { const x = lerp(p[0][0], p[1][0], draw), y = lerp(p[0][1], p[1][1], draw), a = Math.atan2(y - p[0][1], x - p[0][0]); return <g><line x1={p[0][0]} y1={p[0][1]} x2={x} y2={y} stroke={c} strokeWidth={8 + 4 * pulse} strokeLinecap="round" /><path d={`M${x + 22 * Math.cos(a)},${y + 22 * Math.sin(a)} L${x + 12 * Math.cos(a + 2.2)},${y + 12 * Math.sin(a + 2.2)} L${x + 12 * Math.cos(a - 2.2)},${y + 12 * Math.sin(a - 2.2)} Z`} fill={c} stroke={c} strokeWidth={6} /></g>; };
	return (
		<g>
			{draw > 0.001 ? <>{ar(fu, AMBER.stroke)}{ar(fi, TEAL.stroke)}</> : null}
			{bursts > 0.001 ? [fu[1], fi[1]].map(([x, y], i) => <g key={i} opacity={bursts}>{Array.from({length: 8}, (_, k) => { const a = (k / 8) * Math.PI * 2; return <line key={k} x1={x + 26 * Math.cos(a)} y1={y - 30 + 26 * Math.sin(a)} x2={x + 46 * Math.cos(a)} y2={y - 30 + 46 * Math.sin(a)} stroke={ORANGE.stroke} strokeWidth={5} />; })}</g>) : null}
		</g>
	);
};
export const S12: React.FC = () => {
	const id = 'energy-release';
	const f = useCurrentFrame();
	const mt = cue(id, 'Moving towards the peak, from either side'), lm = cue(id, 'less mass, and the difference is released'), fl = cue(id, 'Fusing light nuclei'), sh = cue(id, 'Splitting a heavy nucleus'), cs = cap(id, cue(id, 'coming soon'), 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CurveBase />
				<CurveArrows b={BC} draw={prog(f, mt, 40)} bursts={prog(f, lm, 14)} />
			</FrameSvg>
			<Lbl x={1400} y={260} at={-30} color={INK} size={32}>which changes release energy?</Lbl>
			<div style={{position: 'absolute', left: 1400, top: 330, width: 430}}><Row at={lm + 10} size={30} style={{whiteSpace: 'normal'}}><AnswerBox at={lm + 14}>more tightly bound → less mass → energy out</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={lm + 20} color={ORANGE.stroke} marks={[{kind: 'circle', cx: bcX(BC, 48), cy: bcY(BC, 8.67) - 58, rx: 60, ry: 50}, {kind: 'circle', cx: bcX(BC, 110), cy: bcY(BC, 8.56) - 58, rx: 60, ry: 50}]} />
			<Lbl x={bcX(BC, 6)} y={bcY(BC, 5.2)} at={fl} color={AMBER.ink} size={32}>fusion (an earlier video)</Lbl>
			<Lbl x={bcX(BC, 150)} y={bcY(BC, 7.0)} at={sh} color={TEAL.ink} size={32}>fission</Lbl>
			<HandTag x={bcX(BC, 140)} y={bcY(BC, 6.2)} text="up and left" at={sh + 14} size={36} color={TEAL.ink} />
			<Chip x={1400} y={560} at={cs} size={30} color={TEAL.ink}>fission: coming up</Chip>
		</>
	);
};
const BC13: BCBox = {x: 200, y: 280, w: 900, h: 440};
const BALM: BalanceG = {cx: 1480, cy: 330, arm: 230, drop: 140};
export const S13: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const sn = cue(id, 'Same nucleons, tighter binding, less mass'), en = cap(id, cue(id, 'comes out as energy'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CurveBase b={BC13} />
				<CurveArrows b={BC13} draw={1} pulse={pulseOf(f, en, 30)} />
				<LiveBalance g={BALM} deg={7} r={13} />
				{f >= en ? Array.from({length: 8}, (_, k) => { const a = (k / 8) * Math.PI * 2, x = BALM.cx - BALM.arm, y = BALM.cy + BALM.drop - 120, u = prog(f, en, 24); return <line key={k} x1={x + (20 + 30 * u) * Math.cos(a)} y1={y + (20 + 30 * u) * Math.sin(a)} x2={x + (40 + 40 * u) * Math.cos(a)} y2={y + (40 + 40 * u) * Math.sin(a)} stroke={ORANGE.stroke} strokeWidth={5} opacity={1 - 0.5 * u} />; }) : null}
			</FrameSvg>
			<Lbl x={BALM.cx - BALM.arm} y={BALM.cy + BALM.drop + 70} at={-30} color={INK} size={26} anchor="middle">bound</Lbl>
			<Lbl x={BALM.cx + BALM.arm} y={BALM.cy + BALM.drop + 100} at={-30} color={INK} size={26} anchor="middle">same nucleons, apart</Lbl>
			<div style={{position: 'absolute', left: 200, top: 830, width: 1520, opacity: prog(f, sn, 14), background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 6px #fffdf8, inset 0 0 0 8.5px ${INK}`, padding: '8px 30px', fontFamily: 'Caveat', fontWeight: 700, fontSize: 56, color: INK, textAlign: 'center'}}>Same nucleons, tighter binding, less mass.</div>
		</>
	);
};
