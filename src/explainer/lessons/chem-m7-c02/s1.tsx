// M7 C02 scenes 1 to 4: the hook (ethanol and methoxymethane, both C2H6O, 78 °C against about −25 °C), a formula counts
// atoms not how they're joined (full structural pair, the ink ball-and-stick turn, the definition), why the arrangement
// matters (ethanol hydrogen bonds to its neighbours, methoxymethane cannot) and chain isomers (butane to 2-methylpropane
// with the chain shortener; the stove and its two screen-only boiling points).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DrawPath, INK, INK_SOFT, Overlay, PicH, Sx, TEAL, picW, smooth} from '../chem-m6-c01/parts';
import {
	BRANCH, BRANCH_INK, BallStick, CARDC, CHAIN_INK, Dots, FullMol, HGREY, NameBuilder, NameLbl, OXY, OXY_INK, Place, Skel, Tag, Trace, V2, VIOLET, ethanol3d, lerpV, methoxymethane3d, outward,
} from '../chem-m7-c01/molecules';
import type {FAtom, FBond} from '../chem-m7-c01/molecules';
import {Burner} from '../chem-m7-c01/s1';
import {BOTTLE, CAN, CAN_NOZZLE, Heading, sc} from './common';
import {M, SkelAt, Tally, Therm, WhatChanged, Wisps, at2, lerp, vis} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {eth: 'Ethanol, the', formula: 'formula C two', meth: ['Methoxymethane', 1], same: 'same formula', two: 'two carbons', seventy: 'seventy eight', minus: 'minus twenty five', gas: 'gas at room', atoms: 'Same atoms', so: 'So how'});
const TOP = 0.333; // 0 °C on the thermometer scale (−50 to 100 °C)
const lvl = (c: number) => (c + 50) / 150;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const bh = 420, bx = 230, by = 400, bw = picW(BOTTLE, bh);
	const ch = 420, cx = 1560, cy = 400, cw = picW(CAN, ch);
	const slide = 1 - smooth(prog(f, K1.meth, 24));
	const noz: V2 = [cx + cw * CAN_NOZZLE[0] + slide * 300, cy + ch * CAN_NOZZLE[1]];
	return (
		<>
			<Heading text="How can the same formula make different molecules?" at={K1.so} size={60} />
			<Overlay>
				<g opacity={vis(f, 0)}>
					<PicH p={BOTTLE} x={bx} y={by} h={bh} />
					<Tag x={bx + bw / 2} y={by - 66} text="ethanol" at={2} size={32} color={INK} fill={CARDC} anchor="middle" />
					<Tag x={bx + bw / 2} y={by + bh + 30} text="C_2H_6O" at={K1.formula} size={40} color={INK} fill={CARDC} anchor="middle" />
				</g>
				<g opacity={prog(f, K1.meth, 12)} transform={`translate(${slide * 300},0)`}>
					<PicH p={CAN} x={cx} y={cy} h={ch} />
					<Tag x={cx + cw / 2} y={cy - 66} text="methoxymethane" at={K1.meth + 6} size={32} color={INK} fill={CARDC} anchor="middle" />
				</g>
				<Tag x={cx + cw / 2} y={cy + ch + 30} text="C_2H_6O" at={K1.same} size={40} color={INK} fill={CARDC} anchor="middle" />
				<Tally x={960} y={420} text="C 2, H 6, O 1" at={K1.same + 6} ticks={[K1.two + 6, K1.two + 14]} />
				{/* thermometers: both start at room temperature */}
				<Therm x={500} y={430} h={330} from={lvl(25)} to={lvl(78)} at={K1.seventy} o={prog(f, K1.seventy - 14, 12)} zero={TOP} />
				<Sx x={534} y={430 + 330 * (1 - lvl(78)) + 12} text="78 °C" size={44} color="#a3321f" weight={800} at={K1.seventy + 20} />
				<Tag x={534} y={430 + 330 * (1 - lvl(78)) + 30} text="boils" at={K1.seventy + 26} size={26} />
				<Therm x={1420} y={430} h={330} from={lvl(25)} to={lvl(-25)} at={K1.minus} o={prog(f, K1.minus - 14, 12)} zero={TOP} />
				<Sx x={1390} y={430 + 330 * (1 - lvl(-25)) + 12} text="about −25 °C" size={40} color="#2c5f8a" weight={800} anchor="end" at={K1.minus + 22} />
				<Tag x={1390} y={430 + 330 * (1 - lvl(-25)) + 30} text="boils" at={K1.minus + 28} size={26} anchor="end" />
				<Wisps x={noz[0]} y={noz[1]} at={K1.gas - 10} />
				{void K1.eth}{void K1.atoms}
			</Overlay>
		</>
	);
};

// ---------- 2. A formula counts atoms, not how they're joined ----------
const K2 = cues(sc('formula-vs-structure'), {counts: 'only counts', joined: 'joined.', oh: 'O H group', between: 'between the two', iso: 'structural isomers', diff: "They're different", names: 'different names', props: 'different properties', last: 'last video', now: 'Now one formula'});
const YS = 520;
/** Full structural ethanol (x0 = left carbon). */
const ethanolFull = (x0: number, y: number, t0: number): {atoms: FAtom[]; bonds: FBond[]} => {
	const at = (k: number) => t0 + k * 4;
	const atoms: FAtom[] = [
		{el: 'C', p: [x0, y], at: at(0)}, {el: 'C', p: [x0 + 170, y], at: at(1)}, {el: 'O', p: [x0 + 340, y], at: at(2)}, {el: 'H', p: [x0 + 440, y], at: at(3)},
		{el: 'H', p: [x0, y - 95], at: at(4)}, {el: 'H', p: [x0, y + 95], at: at(5)}, {el: 'H', p: [x0 - 100, y], at: at(6)}, {el: 'H', p: [x0 + 170, y - 95], at: at(7)}, {el: 'H', p: [x0 + 170, y + 95], at: at(8)},
	];
	return {atoms, bonds: [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]].map(([a, b]) => ({a, b}))};
};
const methoxyFull = (x0: number, y: number, t0: number): {atoms: FAtom[]; bonds: FBond[]} => {
	const at = (k: number) => t0 + k * 4;
	const atoms: FAtom[] = [
		{el: 'C', p: [x0, y], at: at(0)}, {el: 'O', p: [x0 + 170, y], at: at(1)}, {el: 'C', p: [x0 + 340, y], at: at(2)},
		{el: 'H', p: [x0, y - 95], at: at(3)}, {el: 'H', p: [x0, y + 95], at: at(4)}, {el: 'H', p: [x0 - 100, y], at: at(5)}, {el: 'H', p: [x0 + 340, y - 95], at: at(6)}, {el: 'H', p: [x0 + 340, y + 95], at: at(7)}, {el: 'H', p: [x0 + 440, y], at: at(8)},
	];
	return {atoms, bonds: [[0, 1], [1, 2], [0, 3], [0, 4], [0, 5], [2, 6], [2, 7], [2, 8]].map(([a, b]) => ({a, b}))};
};
const E3 = ethanol3d(), MM3 = methoxymethane3d();
export const SceneFormula: React.FC = () => {
	const f = useCurrentFrame();
	const lift = K2.between + 34, settle = K2.iso - 24;
	const flat = 1 - vis(f, lift, settle, 14);
	const yaw = 0.7 * Math.sin(Math.PI * Math.min(1, Math.max(0, (f - lift) / (settle - lift))));
	const ex = 390, mx = 1190;
	const E = ethanolFull(ex, YS, K2.joined), MMf = methoxyFull(mx, YS, K2.joined + 10);
	return (
		<Overlay>
			<Place keys={[{at: -100, x: 0, y: 180}, {at: 0, x: 0, y: 0}]} dur={20}><Tally x={960} y={150} text="C 2, H 6, O 1" at={-100} ticks={[K2.joined + 46, K2.joined + 54]} /></Place>
			<g opacity={flat}>
				<FullMol atoms={E.atoms} bonds={E.bonds} size={44} />
				<FullMol atoms={MMf.atoms} bonds={MMf.bonds} size={44} />
			</g>
			<BallStick {...E3} orders={E3.orders} cx={560} cy={YS} unitPx={170} yaw={yaw} pitch={0.18} o={vis(f, lift, settle, 14)} />
			<BallStick {...MM3} orders={MM3.orders} cx={1360} cy={YS} unitPx={170} yaw={-yaw} pitch={0.18} o={vis(f, lift, settle, 14)} />
			<Tag x={960} y={YS - 230} text="same atoms, turned in 3D" at={lift + 6} out={settle} size={28} anchor="middle" />
			{/* the O-H group and the O between two carbons */}
			<g opacity={vis(f, K2.oh) * flat}>
				<DrawPath d={`M${ex + 300},${YS} a90,46 0 1 0 180,0 a90,46 0 1 0 -180,0`} at={K2.oh} dur={16} color={OXY} width={4} />
			</g>
			<Tag x={ex + 390} y={YS + 70} text="O–H group" at={K2.oh + 10} out={K2.iso} size={28} color={OXY_INK} fill="#f7e6df" anchor="middle" />
			<g opacity={vis(f, K2.between) * flat}><DrawPath d={`M${mx + 120},${YS} a50,50 0 1 0 100,0 a50,50 0 1 0 -100,0`} at={K2.between} dur={16} color={OXY} width={4} /></g>
			<Tag x={mx + 170} y={YS + 140} text="O between two carbons" at={K2.between + 10} out={K2.iso} size={28} color={OXY_INK} fill="#f7e6df" anchor="middle" />
			<Sx x={560} y={YS + 175} text="ethanol" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K2.names} />
			<Sx x={1360} y={YS + 175} text="methoxymethane" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K2.names + 6} />
			<Sx x={560} y={YS + 215} text="boils 78 °C" size={28} color={INK_SOFT} anchor="middle" weight={600} at={K2.props} />
			<Sx x={1360} y={YS + 215} text="boils about −25 °C" size={28} color={INK_SOFT} anchor="middle" weight={600} at={K2.props + 6} />
			<Sx x={960} y={845} text="structural isomers: same molecular formula, atoms joined differently" size={46} color={TEAL} anchor="middle" hand at={K2.iso} />
			<g opacity={vis(f, K2.last, K2.last + 210) * (f > K2.now + 60 ? 0.5 : 1)}>
				<NameBuilder x={120} y={930} widths={[380, 210, 230]} s={0.42} at={K2.last} labels={false} fills={[{slot: 0, text: '3-methyl', at: -100}, {slot: 1, text: 'pent', at: -100}, {slot: 2, text: '-1-ene', at: -100}]} />
				<Sx x={500} y={968} text="one name → one structure" size={30} color={INK_SOFT} hand at={K2.last + 8} />
				<Sx x={880} y={968} text="one formula → several structures" size={30} color={TEAL} hand at={K2.now} />
			</g>
			{void K2.counts}{void K2.diff}
		</Overlay>
	);
};

// ---------- 3. Why the arrangement matters ----------
const K3 = cues(sc('why-arrangement-matters'), {changes: 'arrangement changes', hb: 'hydrogen bond to', year: 'Year 11', hyd: 'the hydrogen on', meth: 'Methoxymethane has', cant: "can't", size: 'size.', make: 'make the difference', weaker: 'Weaker attractions', lower: 'lower boiling', three: 'three kinds'});
// ethanol cluster: each molecule drawn with its O at oPos and the H straight below it
const EO: V2[] = [[600, 330], [650, 480], [600, 630]];
const MO: V2[] = [[1340, 330], [1390, 480], [1340, 630]];
export const SceneArrange: React.FC = () => {
	const f = useCurrentFrame();
	const outC = K3.three - 14;
	const e = M.ethanol, m = M.methoxymethane;
	const eO = e.pts[2], mO = m.pts[1];
	return (
		<Overlay>
			<Tally x={960} y={150} text="C 2, H 6, O 1" at={-100} o={1 - 0.6 * prog(f, K3.hb, 12)} out={outC} />
			<Tag x={96} y={112} text="from Year 11: H bonded to O, N or F" at={K3.year} size={28} o={1 - 0.6 * prog(f, K3.hyd, 12)} out={outC} />
			{EO.map((o, k) => {
				const x = o[0] - eO[0], y = o[1] - eO[1];
				return (
					<g key={k} opacity={vis(f, 4 + k * 8, outC)}>
						<SkelAt m={{...e, labels: [{i: 2, text: 'O'}]}} x={x} y={y} at={4 + k * 8} />
						<line x1={o[0]} y1={o[1] + 22} x2={o[0]} y2={o[1] + 42} stroke={INK} strokeWidth={4} strokeLinecap="round" />
						<Sx x={o[0]} y={o[1] + 70} text="H" size={32} color={HGREY} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			{[0, 1].map(k => <Dots key={k} a={[EO[k][0] + 8, EO[k][1] + 76]} b={[EO[k + 1][0] - 6, EO[k + 1][1] - 22]} at={K3.hb + 10 + k * 8} out={outC} color={VIOLET} width={5} />)}
			<Sx x={560} y={770} text="H on O attracted to the O of the next molecule" size={30} color={INK_SOFT} anchor="middle" hand at={K3.hyd} out={K3.meth} />
			{MO.map((o, k) => <SkelAt key={k} m={m} x={o[0] - mO[0]} y={o[1] - mO[1]} at={4 + k * 8} out={outC} />)}
			<Tag x={1360} y={730} text="no O–H: no hydrogen bonds between its molecules" at={K3.cant} out={outC} size={28} anchor="middle" />
			<Sx x={560} y={850} text="78 °C" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K3.cant + 20} out={outC} />
			<Sx x={1360} y={850} text="about −25 °C" size={32} color={INK_SOFT} anchor="middle" weight={700} at={K3.cant + 26} out={outC} opacity={1 + 0.0 * prog(f, K3.lower, 10)} />
			<g opacity={vis(f, K3.lower, outC) * (1 - prog(f, K3.lower + 40, 20) * 0.6)}><DrawPath d="M1250,862 L1470,862" at={K3.lower} dur={12} color="#2c5f8a" width={4} /></g>
			<Sx x={960} y={500} text="C_2H_6O = C_2H_6O" size={34} color={INK_SOFT} anchor="middle" weight={700} at={K3.size} opacity={1 - 0.6 * prog(f, K3.make + 20, 14)} out={outC} />
			<Sx x={960} y={420} text="same size" size={28} color={INK_SOFT} anchor="middle" hand at={K3.size + 8} out={K3.make + 20} />
			<WhatChanged at={K3.three + 4} />
			{void K3.changes}{void K3.weaker}{void TEAL}
		</Overlay>
	);
};

// ---------- 4. Chain isomers ----------
const K4 = cues(sc('chain-isomers'), {chain: 'chain isomers', skel: 'carbon skeleton', here: 'here the alkanes', butane: 'Butane is four', take: 'Take a carbon', hang: 'hang it', tmp: 'two-methylpropane.', both: 'Both are C', alk: 'both are alkanes', camping: 'Camping gas', different: 'different temperatures', next: 'next video'});
export const LX = 440, RX = 1040, PY = 530;
export const SceneChain: React.FC = () => {
	const f = useCurrentFrame();
	const Z = at2(M.butane, RX, PY);
	const target = outward(Z, 1, 110);
	const lift = smooth(prog(f, K4.take + 6, 16)), move = smooth(prog(f, K4.hang, 26));
	const up: V2 = [Z[3][0], Z[3][1] - 60 * lift];
	const C = move > 0 ? lerpV(up, target, move) : up;
	const docked = K4.hang + 26;
	return (
		<Overlay>
			<Tally x={740} y={150} text="C 4, H 10" at={K4.chain} ticks={[K4.both + 4, K4.both + 12]} />
			<Trace path={at2(M.butane, LX, PY)} at={K4.butane - 10} dur={30} o={0.9} />
			<SkelAt m={M.butane} x={LX} y={PY} at={K4.chain + 6} width={7} />
			<NameLbl x={LX} y={PY + 140} parts={[['butane', CHAIN_INK]]} at={K4.butane} />
			{/* the chain shortener: copy, lift the end carbon, dock it on carbon 2 */}
			<g opacity={vis(f, K4.butane + 10)}>
				<Skel pts={Z.slice(0, 3)} bonds={[{a: 0, b: 1}, {a: 1, b: 2}]} at={K4.butane + 10} width={7} />
				<g opacity={1 - prog(f, K4.take, 8)}><Skel pts={[Z[2], Z[3]]} bonds={[{a: 0, b: 1}]} at={K4.butane + 18} width={7} /></g>
				{f >= K4.take && f < docked + 8 ? <circle cx={C[0]} cy={C[1]} r={11} fill={BRANCH} stroke={BRANCH_INK} strokeWidth={3} /> : null}
				{f >= K4.take && f < docked ? <DrawPath d={`M${Z[3][0]},${Z[3][1]} Q${(Z[3][0] + target[0]) / 2},${target[1] - 80} ${target[0]},${target[1]}`} at={K4.take + 6} dur={18} color={BRANCH} width={3} dash="6 8" /> : null}
				<Skel pts={[Z[1], target]} bonds={[{a: 0, b: 1, color: BRANCH}]} at={docked} width={7} />
			</g>
			<NameLbl x={RX - 55} y={PY + 140} parts={[['2-methyl', BRANCH_INK], ['propane', CHAIN_INK]]} at={K4.tmp} />
			<WhatChanged at={-100} rows={[{v: 'different', at: K4.tmp + 10, lit: K4.tmp + 10}, {v: 'n/a', at: K4.here, grey: true}, {v: 'same (alkane)', at: K4.here}]} pulse={[{row: 0, at: K4.skel}]} label={{text: 'chain isomers', at: K4.alk}} />
			<Burner x={110} y={720} h={260} o={vis(f, K4.different - 6)} />
			<Tag x={360} y={760} text="butane: about −1 °C" at={K4.different + 6} size={28} />
			<Tag x={360} y={830} text="2-methylpropane: about −12 °C" at={K4.different + 14} size={28} />
			<Tag x={360} y={900} text="why? next video" at={K4.next} size={28} color={TEAL} fill="#dff2ef" />
			{void K4.camping}{void OXY}
		</Overlay>
	);
};
