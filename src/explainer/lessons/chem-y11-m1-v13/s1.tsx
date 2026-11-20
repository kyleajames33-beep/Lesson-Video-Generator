// Y11 Chem M1 V13 scenes 1 to 5: V12's final frame (the table with period 3 and the Li to K column outlined, Na, Cl
// and K shell models in dashed "radius?" circles) opening out into the puzzle board (the table shrinks to a locator,
// the dashed circles fade, sodium and chlorine meet their real samples, chlorine contracts to its measured size,
// lithium joins potassium), the bonded chlorine pair and the radius ruler, the large sodium atom with pull, shielding
// and core charge, the period 3 strip with the radius stepper and bars, and sodium against chlorine.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V12Handoff, GF as V12GF} from '../chem-y11-m1-v12/s3';
import {dur as v12dur} from '../chem-y11-m1-v12/common';
import {CLJAR, NA, P3, core, pw, sc, stepAt} from './common';
import {
	AMB_S, AMB_T, BLUE_T, Bracket, Chip, DashRing, DrawBox, DrawPath, Fade, Framed, Heading, INK, LitCell, NAVY_T, PGrid, PenArrow, PenRing, PlateB, Pull, RAtom, RED_T,
	Readouts, Rich, Ruler, SLATE_T, SVG, Sx, TEAL_T, VBar, Write, boxRC, cellXY, ePos, lerp, lerpG, prog, ringsOf, smooth, toward,
} from './parts';
import type {PG} from './parts';

const RCV12 = 80;
const V12_ROT = [0, 1, 2, 3].map(i => -Math.PI / 2 + i * 0.4);
const v12Rings = (n: number) => Array.from({length: n}, (_, i) => (RCV12 * 0.84 * (i + 1)) / n);
const lerpA = (a: number[], b: number[], t: number) => a.map((v, i) => lerp(v, b[i], t));

// ---------- 1. hook (opens on V12's final frame) ----------
const K1 = cues(sc('hook'), {sodium: 'Sodium and', six: 'six more protons', sixE: ['six more', 2], expect: "you'd expect", bigger: 'bigger', not: "It's not", much: 'much smaller', column: 'down a column', lithium: 'lithium', larger: 'larger', why: 'So why', across: 'across a period', down: 'down a group'});
const GL: PG = {x: 1196, y: 226, cw: 36, ch: 32, fg: 6};
const S1 = 0.8; // px per pm on this board
const NA1: [number, number] = [610, 420], CL1: [number, number] = [970, 420], K1C: [number, number] = [270, 715], LI1: [number, number] = [270, 395];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const t = smooth(prog(f, 34, 42));
	const g = lerpG(V12GF, GL, t);
	const na0 = cellXY(V12GF, 11), cl0 = cellXY(V12GF, 17), k0 = cellXY(V12GF, 19);
	const naS: [number, number] = [na0[0] + V12GF.cw / 2, 352], clS: [number, number] = [cl0[0] + V12GF.cw / 2, 352], kS: [number, number] = [200, k0[1] + V12GF.ch / 2];
	const P = (a: [number, number], b: [number, number]): [number, number] => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
	const naC = P(naS, NA1), clC = P(clS, CL1), kC = P(kS, K1C);
	const RNa = S1 * 166, RK = S1 * 203, RLi = S1 * 128;
	const shrink = smooth(prog(f, K1.much, 30));
	const RCl = lerp(RNa, S1 * 102, shrink);
	const ring3 = (R: number) => lerpA(v12Rings(3), ringsOf(3, R), t);
	const dashO = 1 - prog(f, 34, 22);
	const rowB = boxRC(g, 3, 3, 1, 18), colB = boxRC(g, 2, 4, 1, 1);
	const lit = [3, 11, 19, 12, 13, 14, 15, 16, 17, 18];
	const exp = prog(f, K1.expect + 6, 20) * (1 - prog(f, K1.not, 14));
	const liP = prog(f, K1.lithium, 18);
	const atomCommon = {nr: lerp(8, 22, t), dot: lerp(5.5, 8, t), labelO: t, rots: V12_ROT};
	const dashed = (c: [number, number], side: 'left' | 'top') => (
		<g opacity={dashO}>
			<circle cx={c[0]} cy={c[1]} r={RCV12} fill="none" stroke={INK} strokeWidth={3.5} strokeDasharray="11 8" />
			<line x1={c[0]} y1={c[1]} x2={c[0] + RCV12 * 0.94} y2={c[1] - RCV12 * 0.34} stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
			<Sx x={c[0] + RCV12 + 8} y={c[1] - RCV12 * 0.3} text="?" size={34} color={INK} weight={800} at={-1000} />
			{side === 'top' ? <Sx x={c[0]} y={c[1] - RCV12 - 12} text="radius?" size={28} color={INK} anchor="middle" weight={800} at={-1000} /> : <Sx x={c[0] - RCV12 - 12} y={c[1] + 10} text="radius?" size={28} color={INK} anchor="end" weight={800} at={-1000} />}
		</g>
	);
	return (
		<SVG>
			{/* my board, laid out exactly as V12's final frame until the morph starts */}
			<Fade at={-1000} out={30} d={14}>
				<Sx x={96} y={150} text="Groups, periods and blocks" size={60} color={INK} hand at={-1000} />
				<Chip x={96} y={178} segs={[{t: 'Next: Why does atomic radius change across a period and down a group?'}]} at={-1000} size={38} color={NAVY_T} />
				<DrawPath d={`M${naS[0] - 24},${naS[1] + RCV12 - 4} L${naS[0] - 24},${na0[1] + 4}`} at={-1000} color={INK} width={2.5} />
				<DrawPath d={`M${clS[0]},${clS[1] + RCV12} L${clS[0]},${cl0[1] + 4}`} at={-1000} color={INK} width={2.5} />
				<DrawPath d={`M${kS[0] + RCV12},${kS[1]} L${k0[0] - 4},${kS[1]}`} at={-1000} color={INK} width={2.5} />
				<Sx x={naS[0] + RCV12 + 40} y={naS[1] + 10} text="3 shells each" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={clS[0] + RCV12 + 30} y={clS[1] + 10} text="3 shells each" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={kS[0]} y={kS[1] + RCV12 + 38} text="4 shells" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={960} y={428} text="shell model, not to scale" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<PGrid g={g} tint={{s: 0.65, p: 0.65, d: 0.65, f: 0.65}} fRows={1 - t} />
			{lit.map(z => [3, 11, 19, 17].includes(z)
				? <LitCell key={z} g={g} z={z} at={-1000} color={INK} fill="#fffdf8" pop={1} symSize={Math.round(lerp(26, 22, t))} />
				: <g key={z}><LitCell g={g} z={z} at={-1000} color={INK} fill="#fffdf8" pop={1} noSym /><Fade at={-1000} out={36} d={14}><LitCell g={g} z={z} at={-1000} color={INK} fill="#fffdf8" pop={1} symSize={26} /></Fade></g>)}
			<DrawBox {...rowB} at={-1000} color={INK} width={6} pad={2} />
			<DrawBox {...colB} at={-1000} color={INK} width={6} pad={5} />
			{dashed(naS, 'left')}{dashed(clS, 'left')}{dashed(kS, 'top')}
			{/* the atoms (V12's look at the start, the to-scale models after the morph) */}
			<RAtom cx={naC[0]} cy={naC[1]} rings={ring3(RNa)} counts={[2, 8, 1]} label="11+" {...atomCommon} outerRot={lerp(V12_ROT[2], 0, t)} />
			<RAtom cx={clC[0]} cy={clC[1]} rings={ring3(RCl)} counts={[2, 8, 7]} label="17+" {...atomCommon} />
			<RAtom cx={kC[0]} cy={kC[1]} rings={lerpA(v12Rings(4), ringsOf(4, RK), t)} counts={[2, 8, 8, 1]} label="19+" {...atomCommon} />
			{liP > 0.005 ? <g opacity={liP} transform={`translate(${LI1[0]},${LI1[1]}) scale(${0.7 + 0.3 * smooth(liP)}) translate(${-LI1[0]},${-LI1[1]})`}><RAtom cx={LI1[0]} cy={LI1[1]} rings={ringsOf(2, RLi)} counts={[2, 1]} label="3+" nr={20} dot={8} /></g> : null}
			{/* the real samples */}
			<PlateB p={NA} cx={NA1[0]} bottom={925} h={290} at={84} dy={24} />
			<PlateB p={CLJAR} cx={CL1[0]} bottom={925} h={290} at={92} dy={24} />
			<Sx x={NA1[0] + pw(NA, 290) / 2 + 14} y={890} text="sodium" size={34} color={INK} weight={800} at={96} />
			<Sx x={CL1[0] + pw(CLJAR, 290) / 2 + 14} y={890} text="chlorine" size={34} color={INK} weight={800} at={100} />
			{/* more particles */}
			<Sx x={1250} y={660} text="chlorine has:" size={34} color={INK} weight={800} at={K1.six} />
			<Rich x={1250} y={722} segs={[{t: '+6 protons', c: RED_T}]} size={44} at={K1.six + 6} />
			<Rich x={1250} y={784} segs={[{t: '+6 electrons', c: BLUE_T}]} size={44} at={K1.sixE + 6} />
			{/* expected: bigger */}
			<DashRing cx={CL1[0]} cy={CL1[1]} r={RNa * (1 + 0.2 * smooth(exp))} o={exp} />
			<Write x={CL1[0]} y={244} text="bigger?" at={K1.bigger} out={K1.not} size={42} color={INK} anchor="middle" />
			{/* measured: smaller */}
			<Ruler c={NA1} R={RNa} at={K1.much} />
			<Ruler c={CL1} R={S1 * 102} at={K1.much + 30} />
			<Sx x={NA1[0]} y={604} text="Na  166 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={K1.much + 6} />
			<Sx x={CL1[0]} y={604} text="Cl  102 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={K1.much + 32} />
			<Write x={CL1[0]} y={244} text="smaller!" at={K1.much + 34} size={42} color={TEAL_T} anchor="middle" />
			{/* down a column */}
			<Ruler c={LI1} R={RLi} at={K1.larger} />
			<Ruler c={K1C} R={RK} at={K1.larger + 6} />
			<Sx x={LI1[0]} y={538} text="Li  128 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={K1.larger + 6} />
			<Sx x={K1C[0]} y={926} text="K  203 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={K1.larger + 12} />
			{/* the cross on the locator */}
			<PenArrow a={[GL.x + 6, GL.y + 2.5 * GL.ch]} b={[GL.x + 17.6 * GL.cw, GL.y + 2.5 * GL.ch]} at={K1.across} color={TEAL_T} bend={0} width={6} head={20} />
			<PenArrow a={[GL.x + 0.5 * GL.cw, GL.y + 1.1 * GL.ch]} b={[GL.x + 0.5 * GL.cw, GL.y + 4.3 * GL.ch]} at={K1.down} color={TEAL_T} bend={0} width={6} head={20} />
			<Write x={GL.x + 20} y={GL.y + 7 * GL.ch + 52} text="across: smaller" at={K1.across + 8} size={42} color={TEAL_T} />
			<Write x={GL.x + 20} y={GL.y + 7 * GL.ch + 104} text="down: larger" at={K1.down + 6} size={42} color={TEAL_T} />
			<Heading text="Atomic radius: why does it change?" at={K1.why} />
			{void K1.column}{void core}
		</SVG>
	);
};

// ---------- 2. what an atomic radius measures ----------
const K2 = cues(sc('measuring-radius'), {edge: 'no hard edge', measure: 'measure the distance', take: 'take half', radius: 'atomic radius', tiny: "It's tiny", pico: ['A picometre', 1], metre: 'millionth of a millionth', every: 'Every value'});
const RP = 170; // px for 102 pm on this board
const C2L: [number, number] = [960 - RP, 500], C2R: [number, number] = [960 + RP, 500];
const Cloud: React.FC<{c: [number, number]; id: string}> = ({c, id}) => (
	<g>
		<defs>
			<radialGradient id={id}>
				<stop offset="0%" stopColor="#5b8fd8" stopOpacity={0.75} />
				<stop offset="62%" stopColor="#8fb3e6" stopOpacity={0.55} />
				<stop offset="100%" stopColor="#c9dbf3" stopOpacity={0.05} />
			</radialGradient>
		</defs>
		<circle cx={c[0]} cy={c[1]} r={215} fill={`url(#${id})`} />
		<circle cx={c[0]} cy={c[1]} r={26} fill="#d24a3c" stroke="#a8322a" strokeWidth={3} />
		<Sx x={c[0]} y={c[1] + 10} text="Cl" size={28} color="#ffffff" anchor="middle" weight={800} at={-1000} />
	</g>
);
export const SceneMeasure: React.FC = () => {
	const f = useCurrentFrame();
	const rule = prog(f, K2.take, 18);
	return (
		<SVG>
			<Heading text="What an atomic radius measures" at={0} />
			<PlateB p={CLJAR} cx={190} bottom={560} h={330} />
			<Sx x={190} y={610} text="chlorine gas" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={190} y={652} text="(Cl_2 molecules)" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Cloud c={C2L} id="v13c2a" />
			<Cloud c={C2R} id="v13c2b" />
			<Sx x={960} y={760} text="two identical atoms bonded together" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* fuzzy edge */}
			<Write x={1440} y={300} text="fuzzy edge" at={K2.edge} size={42} color={INK} />
			<PenArrow a={[1460, 320]} b={[1330, 400]} at={K2.edge + 10} color={INK} bend={-0.2} />
			{/* the ruler: nucleus to nucleus, then half */}
			<DrawPath d={`M${C2L[0]},${C2L[1]} L${C2R[0]},${C2R[1]}`} at={K2.measure + 10} dur={20} color={TEAL_T} width={6} />
			{[C2L, C2R].map((c, i) => <line key={i} x1={c[0]} y1={c[1] - 20} x2={c[0]} y2={c[1] + 20} stroke={TEAL_T} strokeWidth={6} strokeLinecap="round" opacity={prog(f, K2.measure + 26, 8)} />)}
			<Rich x={960} y={830} segs={[{t: 'nucleus to nucleus: 204 pm', c: TEAL_T}, {t: '  (model: 2 × 102)'}]} size={44} anchor="middle" at={K2.measure + 24} />
			<line x1={960} y1={C2L[1] - 22} x2={960} y2={C2L[1] + 22} stroke={TEAL_T} strokeWidth={6} opacity={rule} />
			<Bracket a={[C2L[0], 262]} b={[960, 262]} at={K2.take + 4} color={TEAL_T} depth={-16} />
			<Sx x={C2L[0] + RP / 2} y={232} text="radius = 102 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={K2.take + 10} />
			<Write x={1180} y={232} text="half = radius" at={K2.take + 16} size={42} color={TEAL_T} />
			<Rich x={960} y={900} segs={[{t: 'atomic radius', c: TEAL_T}, {t: ': half the distance between two identical bonded nuclei'}]} size={38} anchor="middle" at={K2.radius} />
			{/* picometres */}
			<Fade at={K2.pico - 6}>
				<rect x={1380} y={500} width={456} height={190} rx={18} fill="#fffdf8" stroke={TEAL_T} strokeWidth={4} />
				<Sx x={1404} y={556} text="1 pm =" size={44} color={TEAL_T} weight={800} at={-1000} />
			</Fade>
			<Sx x={1404} y={612} text="0.000 000 000 001 m" size={38} color={INK} weight={800} at={K2.pico + 10} />
			<Sx x={1404} y={664} text="(10^{−12} m)" size={34} color={INK} weight={700} at={K2.metre} />
			<Sx x={1824} y={940} text="covalent radius; source: Cordero et al., 2008" size={26} color={INK} anchor="end" weight={700} at={K2.every} />
			{void K2.pico}
		</SVG>
	);
};

// ---------- 3. two effects on an outer electron ----------
const K3 = cues(sc('two-effects'), {first: 'The first is', protons: 'Its positive', more: 'more protons pull', second: 'The second', inner: 'Inner electrons', cancels: 'cancels part', estimate: 'A simple way', core: 'core charge', number: ['the number of protons', 1], minus: 'minus the number', sodium: 'For sodium', plus: 'so plus one', exam: 'Exam answers', effective: 'effective nuclear'});
const C3: [number, number] = [440, 560];
const R3 = 260;
const A3 = -Math.PI / 6;
export const SceneTwoEffects: React.FC = () => {
	const f = useCurrentFrame();
	const rings = ringsOf(3, R3);
	const e: [number, number] = [C3[0] + R3 * Math.cos(A3), C3[1] + R3 * Math.sin(A3)];
	const nr = 54;
	const shield = prog(f, K3.second, 18);
	const thin = prog(f, K3.cancels, 16);
	const so = rings[1] + 12 * 1.9;
	const tShield = (R3 - 18 - so) / (R3 - 18 - (nr + 6));
	const pulse = 1 + 0.08 * Math.sin(Math.PI * Math.min(1, prog(f, K3.first + 6, 24)));
	return (
		<SVG>
			<Heading text="Two effects on an outer electron" at={0} />
			<PlateB p={NA} cx={1720} bottom={720} h={230} />
			<Sx x={1720} y={758} text="sodium" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<g transform={`translate(${C3[0]},${C3[1]}) scale(${pulse}) translate(${-C3[0]},${-C3[1]})`}>
				<RAtom cx={C3[0]} cy={C3[1]} rings={rings} counts={[2, 8, 1]} label="11+" nr={nr} dot={12} labelSize={40} outerRot={A3} shield={shield} />
			</g>
			<Pull a={toward(C3, e, R3 - 18)} b={toward(C3, e, nr + 6)} w={lerp(12, 13, thin)} p={prog(f, K3.protons, 18)} thin={thin > 0.01 ? {w: lerp(12, 5, thin), t: tShield} : undefined} />
			<Write x={e[0] + 20} y={e[1] - 34} text="attraction" at={K3.protons + 12} size={42} color={AMB_T} />
			<Write x={C3[0] + 60} y={C3[1] - 110} text="pull" at={K3.more} size={42} color={RED_T} />
			{/* shielding */}
			<Bracket a={[C3[0] - so, C3[1] + R3 + 22]} b={[C3[0] + so, C3[1] + R3 + 22]} at={K3.cancels} color={SLATE_T} depth={16} />
			<Write x={C3[0]} y={C3[1] + R3 + 84} text="inner electrons shield" at={K3.cancels + 8} size={42} color={SLATE_T} anchor="middle" />
			{/* right column */}
			<Rich x={900} y={320} segs={[{t: '1  '}, {t: 'nucleus', c: RED_T}, {t: ': protons attract electrons'}]} size={40} at={K3.first} />
			<Rich x={960} y={372} segs={[{t: 'more protons, stronger pull'}]} size={34} at={K3.more} />
			<Rich x={900} y={452} segs={[{t: '2  '}, {t: 'shielding', c: SLATE_T}, {t: ': inner electrons cancel'}]} size={40} at={K3.second} />
			<Rich x={960} y={504} segs={[{t: 'part of the pull'}]} size={40} at={K3.second + 4} />
			<Rich x={900} y={604} segs={[{t: 'core charge =', c: AMB_T}]} size={52} at={K3.core} />
			<Rich x={900} y={676} segs={[{t: 'protons', c: RED_T}, {t: ' − '}, {t: 'inner electrons', c: BLUE_T}]} size={52} at={K3.number} />
			<Rich x={900} y={776} segs={[{t: 'Na:  11 − 10 = '}]} size={52} at={K3.sodium} />
			<Framed x={1270} y={776} segs={[{t: '+1', c: AMB_T}]} at={K3.plus} size={52} stroke={AMB_S} tick={false} />
			<Sx x={900} y={828} text="an estimate of the pull on the outer electron" size={30} color={INK} weight={800} at={K3.plus + 8} />
			<Write x={e[0] + 26} y={e[1] + 56} text="+1" at={K3.plus} size={52} color={AMB_T} />
			<Rich x={900} y={890} segs={[{t: 'exam term: '}, {t: 'effective nuclear charge', c: AMB_T}]} size={34} at={K3.effective} />
			<Sx x={900} y={930} text="(core charge is a simple estimate of it)" size={30} color={INK} weight={700} at={K3.effective + 6} />
			{void K3.inner}{void K3.estimate}{void K3.core}{void K3.minus}{void K3.exam}
		</SVG>
	);
};

// ---------- 4. across a period: same shells, stronger pull ----------
const K4 = cues(sc('across-period'), {now: 'Now go', step: 'Each step', newE: 'The new electron', same: 'same third shell', still: 'still ten', climbs: 'So the core', plus7: 'plus seven', stronger: 'A stronger', draws: 'draws the', smaller: 'smaller'});
const XS = (i: number) => 150 + i * 186;
const YA = 450;
const SA = 0.5; // px per pm, strip
const SB = 1.0; // px per pm, stepper atom
const BASE = 905, KB = 1.3;
const STEP4 = (k: {climbs: number; plus7: number}) => P3.map((_, i) => [k.climbs + 10 + Math.round(((k.plus7 + 20 - k.climbs - 10) * i) / 6), i] as [number, number]);
export const SceneAcross: React.FC = () => {
	const f = useCurrentFrame();
	const steps = STEP4(K4);
	const cur = stepAt(f, steps);
	const e = P3[cur];
	const c = core(e);
	const sbC: [number, number] = [1650, 500];
	const stepP = (i: number) => prog(f, steps[i][0], 18);
	const shield = prog(f, K4.still, 16);
	const ringHi = prog(f, K4.same, 12) * (1 - prog(f, K4.still, 14));
	const Rsb = SB * lerp(P3[Math.max(0, cur - 1)].r, e.r, cur === 0 ? 1 : smooth(prog(f, steps[cur][0], 18)));
	return (
		<SVG>
			<Heading text="Across period 3" at={0} />
			<Readouts x={720} y={216} w={258} items={[
				{label: 'protons', text: `${e.z}`, color: RED_T},
				{label: 'inner electrons', text: `${e.inner}`, color: BLUE_T},
				{label: 'core charge', text: `+${c}`, color: AMB_T},
				{label: 'radius (pm)', text: `${e.r}`, color: TEAL_T},
			]} />
			{/* the strip */}
			{P3.map((p, i) => {
				const R = SA * lerp(166, p.r, smooth(stepP(i)));
				const cc: [number, number] = [XS(i), YA];
				const lab = prog(f, K4.step + i * 6, 10);
				const k = core(p);
				const aP = stepP(i);
				const out: [number, number] = [cc[0] + R, cc[1]];
				return (
					<g key={p.sym}>
						<Sx x={cc[0]} y={YA - SA * 166 - 22} text={p.sym} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
						<RAtom cx={cc[0]} cy={cc[1]} rings={ringsOf(3, R)} counts={p.shells} label={`${p.z}+`} labelO={lab} nr={22} dot={6.5} labelSize={24} outerRot={0} shield={shield} ringHi={ringHi} />
						<Pull a={toward(cc, out, R - 6)} b={toward(cc, out, 26)} w={2 + 1.6 * k} p={aP} />
						<Chip x={cc[0]} y={YA + 98} segs={[{t: `+${k}`, c: AMB_T}]} at={steps[i][0]} size={38} color={AMB_S} anchor="middle" />
						<VBar x={cc[0]} y0={BASE} w={84} r={p.r} k={KB} p={stepP(i)} slot={false} />
						<rect x={cc[0] - 42} y={BASE - 166 * KB} width={84} height={166 * KB} rx={5} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" opacity={1 - stepP(i)} />
					</g>
				);
			})}
			<line x1={60} y1={BASE} x2={1310} y2={BASE} stroke={INK} strokeWidth={3} />
			<Sx x={60} y={BASE + 36} text="radius (pm)" size={30} color={INK} weight={800} at={-1000} />
			{/* same shield */}
			<Bracket a={[XS(0) - 60, YA + 96]} b={[XS(6) + 60, YA + 96]} at={K4.still} out={K4.climbs} color={SLATE_T} depth={14} />
			<Write x={XS(3)} y={YA + 168} text="same shield: 10 inner electrons" at={K4.still + 6} out={K4.climbs} size={42} color={SLATE_T} anchor="middle" />
			{/* the stepper atom */}
			<RAtom cx={sbC[0]} cy={sbC[1]} rings={ringsOf(3, Rsb)} counts={e.shells} label={`${e.z}+`} nr={32} dot={9} labelSize={30} outerRot={0} shield={shield} />
			<Pull a={toward(sbC, [sbC[0] + Rsb, sbC[1]], Rsb - 10)} b={toward(sbC, [sbC[0] + Rsb, sbC[1]], 36)} w={2 + 1.6 * c} p={prog(f, K4.climbs, 16)} />
			<Ruler c={sbC} R={Rsb} ang={Math.PI / 2} at={K4.now} />
			<Sx x={sbC[0]} y={sbC[1] + Rsb + 56} text={`${e.sym}: ${e.r} pm`} size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			{/* tags */}
			<Write x={XS(3) - 40} y={662} text="pull grows" at={K4.plus7} size={42} color={AMB_T} anchor="end" />
			<PenArrow a={[XS(3), 650]} b={[XS(6) + 20, 650]} at={K4.plus7 + 8} color={AMB_S} bend={0} width={5} />
			<Write x={1340} y={770} text="radius falls" at={K4.draws} size={42} color={TEAL_T} />
			<PenArrow a={[1390, 792]} b={[1318, 832]} at={K4.draws + 6} color={TEAL_T} bend={-0.2} width={5} />
			<Sx x={1340} y={890} text="argon left out: noble-gas radii" size={30} color={INK} weight={700} at={K4.smaller - 40} />
			<Sx x={1340} y={926} text="are measured differently" size={30} color={INK} weight={700} at={K4.smaller - 40} />
			{void K4.newE}{void K4.stronger}
		</SVG>
	);
};

// ---------- 5. more electrons, still smaller ----------
const K5 = cues(sc('more-electrons'), {hang: 'Hang on', shouldnt: "Shouldn't", extra: 'The extra', barely: 'barely shield', wins: 'pull wins', more: ['More electrons', 1], doesnt: "doesn't mean", atom: 'bigger atom'});
const S5 = 1.265;
const NA5: [number, number] = [470, 560], CL5: [number, number] = [1180, 560];
export const SceneMoreElectrons: React.FC = () => {
	const f = useCurrentFrame();
	const RN = S5 * 166, RC = S5 * 102;
	const pulse = prog(f, K5.barely - 30, 12) * (1 - prog(f, K5.wins, 16));
	const naE: [number, number] = [NA5[0] + RN, NA5[1]];
	const pullP = prog(f, K5.wins - 20, 16);
	return (
		<SVG>
			<Heading text="More electrons, still smaller" at={0} />
			<RAtom cx={NA5[0]} cy={NA5[1]} rings={ringsOf(3, RN)} counts={[2, 8, 1]} label="11+" nr={36} dot={10} labelSize={34} outerRot={0} />
			<RAtom cx={CL5[0]} cy={CL5[1]} rings={ringsOf(3, RC)} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={0} outerHi={pulse} />
			<Pull a={toward(NA5, naE, RN - 14)} b={toward(NA5, naE, 42)} w={4} p={pullP} />
			{[0, 1, 2, 3, 4, 5, 6].map(j => {
				const ep = ePos(CL5[0], CL5[1], RC, 7, j, 0);
				return <Pull key={j} a={toward(CL5, ep, RC - 13)} b={toward(CL5, ep, 36)} w={9} p={prog(f, K5.wins - 20 + j * 2, 14)} />;
			})}
			<Framed x={640} y={380} segs={[{t: '+1', c: AMB_T}]} at={K5.wins - 10} size={52} stroke={AMB_S} tick={false} />
			<Framed x={1290} y={430} segs={[{t: '+7', c: AMB_T}]} at={K5.wins - 4} size={52} stroke={AMB_S} tick={false} />
			<Sx x={NA5[0]} y={NA5[1] + RN + 62} text="Na  166 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<Sx x={CL5[0]} y={CL5[1] + RC + 62} text="Cl  102 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<PlateB p={NA} cx={150} bottom={930} h={160} />
			<PlateB p={CLJAR} cx={1730} bottom={930} h={240} />
			{/* the misconception */}
			<Chip x={1180} y={190} segs={[{t: 'more electrons, so bigger?'}]} at={K5.shouldnt} size={44} color={RED_T} anchor="middle" strike={K5.doesnt} />
			<PenRing cx={CL5[0]} cy={CL5[1]} rx={RC + 26} ry={RC + 26} at={K5.barely} color={BLUE_T} seed={7} />
			<Write x={1360} y={600} text="side by side:" at={K5.barely + 6} size={42} color={BLUE_T} />
			<Write x={1360} y={652} text="little shielding" at={K5.barely + 14} size={42} color={BLUE_T} />
			<Write x={1180} y={326} text="same shell, stronger pull" at={K5.doesnt + 10} size={42} color={RED_T} anchor="middle" />
			<Rich x={1180} y={810} segs={[{t: '7 outer electrons, one shell', c: BLUE_T}]} size={38} anchor="middle" at={K5.extra} />
			{void K5.hang}{void K5.more}{void K5.atom}{void Fade}{void DashRing}
		</SVG>
	);
};
