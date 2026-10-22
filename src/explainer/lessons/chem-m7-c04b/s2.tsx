// M7 C04b scenes 5 to 7: one product or two (the condensed pair; the addition model replay against the ethane model,
// where one H lifts off and a Br docks in the same place and the carbon stays tetrahedral), substitution keeps going and
// happens anywhere (the chloromethane ladder; the site picker on propane) and alkynes add twice (the two-step strip,
// dibromoethene then tetrabromoethane; the ball-and-stick goes linear, flat, tetrahedral).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, INK_SOFT, Overlay, Sx, TEAL, mw, smooth} from '../chem-m6-c01/parts';
import {Brace, CHAIN_INK, Edges, MULTI, NameLbl, Place, RuleChip, Tag, VIOLET, ethane3d, lerpV, proj} from '../chem-m7-c01/molecules';
import type {Atom3, V2, Vec3} from '../chem-m7-c01/molecules';
import {AddModel, BROM, Box, CHLOR, CT, CondEq, Halo, Mol2D, MorphStick, Opener, Plus, RxArrow, apt, cmol, ctW, diat, dimAt, ethaneDirs, loc, pairUp, vis} from '../chem-m7-c04a/parts';
import type {MKey} from '../chem-m7-c04a/parts';
import {sc} from './common';
import {UV, UV_SOFT} from './parts';

// ---------- 5. One product or two ----------
const K5 = cues(sc('one-or-two-products'), {put: 'Put the two', ethene: 'Ethene plus', one: 'one product', name: 'two-dibromoethane', ethane: 'Ethane plus', two: 'makes two', sign: 'sign of substitution', models: 'In the models', flat: 'flat carbons', tet: 'turn tetrahedral', ethanes: "Ethane's carbons", stay: 'stay', atom: 'One atom'});
const E3 = ethane3d();
const upH = [5, 6, 7].sort((a, b) => E3.atoms[b].p[1] - E3.atoms[a].p[1])[0];
const SW_ELS: Atom3['el'][] = [...E3.atoms.map(a => a.el), 'Br'];
const SW_BONDS: [number, number][] = [...E3.bonds, [1, 8]];
const swapKeys = (at: number): MKey[] => {
	const c = E3.atoms[1].p, h = E3.atoms[upH].p;
	const dir: Vec3 = [h[0] - c[0], h[1] - c[1], h[2] - c[2]];
	const brP: Vec3 = [c[0] + dir[0] / 0.62 * 0.95, c[1] + dir[1] / 0.62 * 0.95, c[2] + dir[2] / 0.62 * 0.95];
	const s0 = [...E3.atoms.map(a => a.p), [brP[0] + 0.3, brP[1] + 1.5, brP[2]] as Vec3];
	const s1 = s0.map((p, i) => (i === upH ? ([h[0] + 0.9, h[1] + 0.9, h[2]] as Vec3) : i === 8 ? brP : p));
	return [{at: -1000, pos: s0}, {at, pos: s1, dur: 30}];
};
export const SceneOneTwo: React.FC = () => {
	const f = useCurrentFrame();
	const X = 880, SZ = 46, LEN = 150;
	const rx2 = X + LEN + 22 + ctW('CH_3CH_2Br + ', SZ), w2 = ctW('HBr', SZ);
	const M = {x: 1420, y: 680, u: 190};
	const yaw = 0.5 + 0.004 * Math.max(0, f - K5.ethanes), pitch = 0.3;
	const keys = swapKeys(K5.stay);
	const P = proj({atoms: keys[1].pos.map(p => ({el: 'C' as const, p}))}, M.x, M.y, M.u, yaw, pitch);
	const P0 = proj({atoms: keys[0].pos.map(p => ({el: 'C' as const, p}))}, M.x, M.y, M.u, yaw, pitch);
	const t = smooth(prog(f, K5.stay, 30));
	const others = [5, 6, 7].filter(i => i !== upH);
	const slotP = t < 0.5 ? P0[upH] : P[8];
	return (
		<Overlay>
			<Sx x={96} y={150} text="Addition or substitution?" size={52} color={INK} hand at={K5.put} out={K5.models} />
			<Place keys={[{at: -100, x: 0, y: 0, s: 1}, {at: K5.models, x: 960 * 0.32, y: -40, s: 0.68, o: 0.55}]}>
				<CondEq x={X} y={260} left="CH_2=CH_2 + Br_2" right="CH_2BrCH_2Br" at={K5.ethene} len={LEN} size={SZ} />
				<Tag x={1500} y={232} text="1 product" at={K5.one} size={30} color="#1f6b44" fill="#e3f3e9" />
				<CondEq x={X} y={400} left="CH_3CH_3 + Br_2" right="CH_3CH_2Br + HBr" at={K5.ethane} len={LEN} size={SZ} above={[{t: 'UV light', at: K5.ethane + 10, color: UV, fill: UV_SOFT}]} />
				<Box x={rx2 - 12} y={400 - 46} w={w2 + 24} h={92} at={K5.two} pulse={K5.sign} color={UV} />
				<Tag x={1500} y={372} text="2 products" at={K5.two} size={30} color={UV} fill={UV_SOFT} />
				<Tag x={960} y={490} text="HX second product → substitution" at={K5.sign} out={K5.models} size={32} color={UV} fill={UV_SOFT} anchor="middle" />
			</Place>
			<AddModel T={{drift: K5.models, dock: K5.flat, tet: K5.tet}} cx={520} cy={690} u={175} o={vis(f, K5.models)} />
			<Tag x={520} y={920} text="addition: flat → tetrahedral" at={K5.tet + 20} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<g opacity={vis(f, K5.ethanes - 10)}>
				<Edges pts={[P0[0], P0[others[0]], P0[others[1]], slotP]} at={K5.ethanes} color={VIOLET} />
				<MorphStick els={SW_ELS} bonds={SW_BONDS} keys={keys} orders={SW_BONDS.map(() => 1)} cx={M.x} cy={M.y} u={M.u} yaw={yaw} pitch={pitch} bondO={k => (k === SW_BONDS.length - 1 ? prog(f, K5.stay + 26, 8) : E3.bonds[k] && (E3.bonds[k][1] === upH || E3.bonds[k][0] === upH) ? 1 - prog(f, K5.stay, 6) : 1)} atomO={i => (i === 8 ? prog(f, K5.stay - 16, 10) : i === upH ? 1 - prog(f, K5.stay + 24, 14) : 1)} />
			</g>
			<Tag x={M.x} y={920} text="substitution: still tetrahedral" at={K5.stay + 20} size={30} color={VIOLET} fill="#f1ebfa" anchor="middle" />
			{void K5.name}{void K5.atom}{void lerpV}
		</Overlay>
	);
};

// ---------- 6. Substitution keeps going, and can happen anywhere ----------
const K6 = cues(sc('mixtures'), {subst: 'Substitution is', more: 'With more', methane: 'methane can', second: 'second hydrogen', third: 'third', fourth: 'fourth', tetra: 'tetrachloromethane', each: 'each swap', longer: 'And in a longer', propane: 'Propane can', p1: 'one-chloropropane', p2: 'two-chloropropane', so: 'So substitution', mixture: 'mixture', one: 'one product'});
const LAD = ['CH_4', 'CH_3Cl', 'CH_2Cl_2', 'CHCl_3', 'CCl_4'];
const LX = [190, 560, 950, 1340, 1720];
const PROPANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const CP1 = cmol([{l: 'Cl*', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const CP2 = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Cl*', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const SceneMixtures: React.FC = () => {
	const f = useCurrentFrame();
	const T = [K6.methane, K6.methane + 26, K6.second, K6.third, K6.fourth];
	const ladO = dimAt(f, K6.longer, 0.35) * dimAt(f, K6.propane, 0.4);
	const Y = 320;
	const PR = {x: 400, y: 720, s: 1.0};
	const pc = (i: number) => apt(PROPANE, i, PR.x, PR.y, PR.s);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Substitution is harder to control" size={50} color={INK} hand at={K6.subst} />
			<g opacity={ladO}>
				{LAD.map((t, i) => <CT key={t} x={LX[i]} y={Y + 18} text={t} size={50} anchor="middle" at={T[i]} o={i < 4 ? dimAt(f, T[i + 1] + 10, 0.45) : 1} />)}
				{LAD.slice(1).map((_, i) => {
					const x1 = LX[i] + ctW(LAD[i], 50) / 2 + 24, x2 = LX[i + 1] - ctW(LAD[i + 1], 50) / 2 - 24;
					const end = i < 3 ? T[i + 2] - 4 : K6.each + 20;
					return <RxArrow key={i} x1={x1} x2={x2} y={Y} at={T[i + 1] - 8} above={[{t: '+ Cl_2, UV', at: T[i + 1] - 4, out: end, color: UV, fill: UV_SOFT}]} below={[{t: '+ HCl', at: T[i + 1] - 4, out: end, color: INK_SOFT, fill: '#f1efea'}]} size={22} />;
				})}
				<Sx x={LX[4]} y={Y + 90} text="tetrachloromethane" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K6.tetra} />
				<Tag x={960} y={Y + 140} text="more Cl_2: more swaps, one more HCl each time" at={K6.tetra + 20} size={30} anchor="middle" />
			</g>
			<Mol2D m={PROPANE} x={PR.x} y={PR.y} s={PR.s} at={K6.longer} />
			{['1', '2', '3'].map((t, i) => <Sx key={t} x={pc(i)[0]} y={PR.y + 140} text={t} size={28} color="#24407a" anchor="middle" weight={800} at={K6.longer + 10 + i * 6} />)}
			<Halo x={pc(0)[0]} y={pc(0)[1]} r={48} at={K6.p1 - 10} out={K6.p2} />
			<Halo x={pc(1)[0]} y={pc(1)[1]} r={48} at={K6.p2} out={K6.so} />
			<RxArrow x1={680} x2={820} y={PR.y} at={K6.p1 - 10} above={[{t: '+ Cl_2, UV', at: K6.p1 - 6, color: UV, fill: UV_SOFT}]} size={22} />
			<Mol2D m={CP1} x={1100} y={PR.y} s={0.9} at={K6.p1} fly={{[CP1.k['0l']]: {from: [-60, -200], at: K6.p1 + 6, dur: 22}}} />
			<Sx x={1350} y={PR.y + 14} text="or" size={40} color={INK_SOFT} anchor="middle" hand at={K6.p2} />
			<Mol2D m={CP2} x={1600} y={PR.y} s={0.9} at={K6.p2} fly={{[CP2.k['1u']]: {from: [0, -220], at: K6.p2 + 6, dur: 22}}} />
			<NameLbl x={1100} y={PR.y + 140} parts={[['1-chloro', CHLOR], ['propane', CHAIN_INK]]} at={K6.p1 + 10} size={32} />
			<NameLbl x={1600} y={PR.y + 140} parts={[['2-chloro', CHLOR], ['propane', CHAIN_INK]]} at={K6.p2 + 10} size={32} />
			<Brace x1={900} x2={1800} y={PR.y + 165} text="a mixture" at={K6.mixture} size={32} />
			<Tag x={1350} y={PR.y + 260} text="write one product + HX" at={K6.one} size={34} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K6.more}{void K6.so}{void Plus}{void MULTI}{void BROM}
		</Overlay>
	);
};

// ---------- 7. Alkynes: two extra bonds, two additions ----------
const K7 = cues(sc('alkyne-adds-twice'), {now: 'Now alkynes', two: 'two of those', ethyne: 'Ethyne plus', onebr: 'one bromine', gives: 'gives one', name1: 'two-dibromoethene', double: 'double bond', ene: 'ene,', again: 'add again', second: 'With a second', opens: 'that bond opens', name2: 'two-tetrabromoethane', each: 'Each step', watch: 'Watch the model', flat: 'flat', tet: 'tetrahedral', alkene: 'An alkene has', once: 'just once'});
const ETHYNE = cmol([{l: 'H'}, {r: 'H'}], [3]);
const DBE1 = cmol([{ul: 'Br*', dl: 'H'}, {ur: 'Br*', dr: 'H'}], [2]);
const DBE1R = cmol([{ul: 'Br', dl: 'H'}, {ur: 'Br', dr: 'H'}], [2]);
const TBE = cmol([{l: 'H', u: 'Br', d: 'Br*'}, {u: 'Br', d: 'Br*', r: 'H'}]);
const BR2 = diat('Br', 'Br', 96);
const ETHENE_S = cmol([{ul: 'H', dl: 'H'}, {ur: 'H', dr: 'H'}], [2]);
const AK_BONDS: [number, number][] = [[0, 1], [0, 2], [1, 3], [0, 4], [1, 5], [0, 6], [1, 7]];
const AK_ELS: Atom3['el'][] = ['C', 'C', 'H', 'H', 'Br', 'Br', 'Br', 'Br'];
const add = (a: Vec3, d: Vec3, k: number): Vec3 => [a[0] + d[0] * k, a[1] + d[1] * k, a[2] + d[2] * k];
const alkyneKeys = (flat: number, tet: number): MKey[] => {
	const lin: Vec3[] = [[-0.38, 0, 0], [0.38, 0, 0], [-1.0, 0, 0], [1.0, 0, 0], [-0.5, 2.4, 0], [0.5, 2.4, 0], [-0.6, 2.6, 0.4], [0.6, 2.6, 0.4]];
	const c0: Vec3 = [-0.42, 0, 0], c1: Vec3 = [0.42, 0, 0];
	const fl: Vec3[] = [c0, c1, add(c0, [-0.5, -0.866, 0], 0.62), add(c1, [0.5, -0.866, 0], 0.62), add(c0, [-0.5, 0.866, 0], 0.95), add(c1, [0.5, 0.866, 0], 0.95), lin[6], lin[7]];
	const {C, dirs} = ethaneDirs();
	const tet0 = dirs[0], tet1 = dirs[1];
	// Br from step 1 takes the top direction; the H and the new Br pair to the other two
	const r0 = pairUp([fl[2]], [add(C[0], tet0[1], 0.62), add(C[0], tet0[2], 0.62)])[0], r1 = pairUp([fl[3]], [add(C[1], tet1[1], 0.62), add(C[1], tet1[2], 0.62)])[0];
	const t: Vec3[] = [C[0], C[1], add(C[0], tet0[1 + r0], 0.62), add(C[1], tet1[1 + r1], 0.62), add(C[0], tet0[0], 0.95), add(C[1], tet1[0], 0.95), add(C[0], tet0[2 - r0], 0.95), add(C[1], tet1[2 - r1], 0.95)];
	return [{at: -1000, pos: lin}, {at: flat, pos: fl, dur: 30}, {at: tet, pos: t, dur: 36}];
};
export const SceneAlkyne: React.FC = () => {
	const f = useCurrentFrame();
	const Y1 = 330, Y2 = 640, s = 1.1;
	const dim1 = dimAt(f, K7.second, 0.35);
	const dimAll = dimAt(f, K7.watch, 0.3);
	const slide = smooth(prog(f, K7.second, 30));
	const mv: V2 = [1180 + (230 - 1180) * slide, Y1 + (Y2 - Y1) * slide];
	const mp = smooth(prog(f, K7.watch, 30));
	const M = {x: 1650 + (1640 - 1650) * mp, y: 560 + (800 - 560) * mp, u: 110 + 40 * mp};
	const keys = alkyneKeys(K7.flat, K7.tet);
	const singleAt = K7.tet + 14, doubleAt = K7.flat + 14;
	const ord = f >= singleAt ? 1 : f >= doubleAt ? 2 : 3;
	const yaw = 0.35 + 0.003 * Math.max(0, f - K7.watch), pitch = 0.25;
	const name1W = mw('1,2-dibromoethene', 36, false, 800);
	return (
		<Overlay>
			<RuleChip text="Alkyne: step 1 of 2" at={K7.now} out={K7.second} />
			<RuleChip text="Alkyne: step 2 of 2" at={K7.second} />
			<g opacity={dim1 * dimAll}>
				<Mol2D m={ETHYNE} x={230} y={Y1} s={s} at={K7.now} />
				<Opener c1={apt(ETHYNE, 0, 230, Y1, s)} c2={apt(ETHYNE, 1, 230, Y1, s)} at={K7.two} double out={K7.gives + 10} />
				<Tag x={230} y={Y1 + 70} text="triple bond: 2 weaker extra bonds" at={K7.two + 10} out={K7.second} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
				<Plus x={450} y={Y1} at={K7.ethyne} />
				<Mol2D m={BR2} x={590} y={Y1} s={s} at={K7.ethyne} />
				<RxArrow x1={730} x2={950} y={Y1} at={K7.onebr} above={[{t: 'room temperature', at: K7.onebr + 6}]} />
				{f < K7.second + 2 ? <Mol2D m={DBE1} x={1180} y={Y1} s={s} at={K7.gives - 6} fly={{[DBE1.k['0ul']]: {from: loc(apt(BR2, 0, 590, Y1, s), 1180, Y1, s), at: K7.gives, dur: 26}, [DBE1.k['1ur']]: {from: loc(apt(BR2, 1, 590, Y1, s), 1180, Y1, s), at: K7.gives + 6, dur: 26}}} /> : <Mol2D m={DBE1R} x={1180} y={Y1} s={s} at={-100} o={0.6} />}
				<NameLbl x={1180} y={Y1 + 150} parts={[['1,2-dibromo', BROM], ['eth', CHAIN_INK], ['ene', TEAL]]} at={K7.name1} size={36} />
				<rect x={1180 + name1W / 2 - mw('ene', 36, false, 800) - 6} y={Y1 + 116} width={mw('ene', 36, false, 800) + 12} height={46} rx={10} fill="#f6d77a" opacity={0.5 * vis(f, K7.ene, K7.second)} />
				<Tag x={1180} y={Y1 + 175} text="a C=C left: still ends in -ene" at={K7.double} out={K7.second} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			</g>
			<g opacity={dimAll}>
				{f >= K7.second ? <Mol2D m={DBE1R} x={mv[0]} y={mv[1]} s={s} at={-100} /> : null}
				<Plus x={450} y={Y2} at={K7.second + 20} />
				<Mol2D m={BR2} x={590} y={Y2} s={s} at={K7.second + 20} />
				<RxArrow x1={730} x2={950} y={Y2} at={K7.opens} above={[{t: 'room temperature', at: K7.opens + 6}]} />
				<Mol2D m={TBE} x={1180} y={Y2} s={s} at={K7.opens + 10} fly={{[TBE.k['0d']]: {from: loc(apt(BR2, 0, 590, Y2, s), 1180, Y2, s), at: K7.opens + 18, dur: 26}, [TBE.k['1d']]: {from: loc(apt(BR2, 1, 590, Y2, s), 1180, Y2, s), at: K7.opens + 24, dur: 26}}} />
				{['1, 1', '2, 2'].map((t, i) => <Tag key={t} x={apt(TBE, i, 1180, Y2, s)[0]} y={Y2 + 120} text={t} at={K7.name2 + 6 * i} size={22} color="#24407a" fill="#e7edf8" anchor="middle" />)}
			</g>
			<NameLbl x={1180} y={Y2 + 200} parts={[['1,1,2,2-tetrabromo', BROM], ['ethane', CHAIN_INK]]} at={K7.name2} size={36} o={dimAt(f, K7.watch, 0.6)} />
			<Tag x={1180} y={Y2 + 220} text="tetra- = four" at={K7.name2 + 20} out={K7.each} size={26} anchor="middle" />
			<g opacity={vis(f, K7.ethyne)}>
				<MorphStick els={AK_ELS} bonds={AK_BONDS} keys={keys} orders={AK_BONDS.map((_, k) => (k === 0 ? ord : 1))} cx={M.x} cy={M.y} u={M.u} yaw={yaw} pitch={pitch} atomO={i => (i === 4 || i === 5 ? prog(f, K7.flat - 24, 10) : i >= 6 ? prog(f, K7.tet - 24, 10) : 1)} bondO={k => (k === 3 || k === 4 ? prog(f, K7.flat + 16, 8) : k >= 5 ? prog(f, K7.tet + 18, 8) : 1)} />
			</g>
			<Tag x={M.x} y={M.y + 70 + M.u * 0.9} text="linear" at={K7.ethyne} out={K7.flat} size={26} color="#24407a" fill="#e7edf8" anchor="middle" />
			<Tag x={M.x} y={M.y + 70 + M.u * 0.9} text="trigonal planar" at={K7.flat} out={K7.tet} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Tag x={M.x} y={M.y + 70 + M.u * 0.9} text="tetrahedral: single bonds only" at={K7.tet} size={30} color={VIOLET} fill="#f1ebfa" anchor="middle" />
			<g opacity={vis(f, K7.alkene)}>
				<Mol2D m={ETHENE_S} x={230} y={930} s={0.7} at={K7.alkene} />
				<Opener c1={apt(ETHENE_S, 0, 230, 930, 0.7)} c2={apt(ETHENE_S, 1, 230, 930, 0.7)} at={K7.alkene + 10} />
			</g>
			<Tag x={380} y={905} text="C=C: adds once" at={K7.once} size={34} color={TEAL} fill="#dff2ef" />
			{void K7.again}{void K7.each}{void INK_SOFT}{void ([] as V2[])}{void Box}{void CT}{void CondEq}{void Brace}{void Halo}
		</Overlay>
	);
};
