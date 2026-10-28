// M7 C09 scenes 1 to 6: the hook (same mass, both O–H, only the acid boils high, turns litmus red and fizzes), the
// carboxyl group (C=O and O–H on one carbon), naming (-oic acid; the COOH carbon is C1), the dimer lock and the strip,
// the series and solubility (strip; the water lattice), and the weak acid (proton hop, ⇌, the 1 in 80 lens).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, ProtonHop, Proton, Sx, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, DISP, Dots, Locants, NameBuilder, Tag, Trace, zigOffs} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, ctW, dimAt, vis, water2} from '../chem-m7-c04a/parts';
import {Delta, LonePairs} from '../chem-m7-c05/parts';
import {Mark, Strip, WaterMol} from '../chem-m7-c03/parts';
import {Arrow2, EqRow, Plate, RingAt} from '../chem-m7-c06/parts';
import {P2} from '../chem-m7-c08a/parts';
import {Heading, VINEGAR, sc} from './common';
import {ACID_F, AcidAt, Charge, Dimer, ETA, GREY, INK, INK_SOFT, Lens, NAVY, NoChip, OkChip, RED, VIOLET, acidK, dimerPts} from './parts';

/** Ring centre for the carboxyl group of a full structural acid (C at k.c1-like key, O up, OH right). */
const coohF = (m: typeof ACID_F, c: string, ou: string, or: string, x: number, y: number, s: number) => {
	const C = apt(m, m.k[c], x, y, s), O = apt(m, m.k[ou], x, y, s), R = apt(m, m.k[or], x, y, s);
	return {C, O, R, c: [(C[0] + R[0]) / 2 + 18 * s, (O[1] + C[1]) / 2 + 4 * s] as V2, rx: (R[0] - C[0]) / 2 + 90 * s, ry: (C[1] - O[1]) / 2 + 50 * s};
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {alcohol: 'In the alcohol', vinegar: 'vinegar', compare: 'Now compare', both: 'Both have a molar', oh: 'both contain', yet: 'Yet the acid', e118: 'eighteen', e97: 'ninety seven', red: 'red', fizz: 'fizzes', neither: 'neither', so: 'So what'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const AX = 860, BX = 1440, Y = 420, SZ = 56;
	const pl = 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K1.both) / 24)) * Math.PI));
	const ohRing = (t: string, x: number): V2 => { const w = ctW(t, SZ), wo = ctW('OH', SZ); return [x + w / 2 - wo / 2, Y - SZ * 0.32]; };
	const massO = dimAt(f, K1.red, 0.35);
	return (
		<>
			<Heading text="Carboxylic acids: why are they acidic?" at={4} size={56} />
			<Overlay>
				<g opacity={dimAt(f, K1.so, 0.35)}>
					<CT x={96} y={230} text="ethanol + [O] (reflux) → ethanoic acid" size={26} color={GREY} at={K1.alcohol} />
					<Tag x={96} y={248} text="alcohol reactions video" at={K1.alcohol + 20} size={20} />
				</g>
				<g opacity={vis(f, K1.vinegar - 6) * dimAt(f, K1.compare, 0.3)}>
					<Plate p={VINEGAR} cx={250} top={380} h={420} />
				</g>
				<Tag x={250} y={820} text="vinegar: dilute ethanoic acid" at={K1.vinegar} out={K1.compare + 30} size={24} anchor="middle" />
				<CT x={AX} y={Y} text="CH_3COOH" size={SZ} anchor="middle" at={K1.alcohol + 120} />
				<Sx x={AX} y={Y - 80} text="ethanoic acid" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K1.alcohol + 120} />
				<CT x={BX} y={Y} text="CH_3CH_2CH_2OH" size={SZ} anchor="middle" at={K1.compare} />
				<Sx x={BX} y={Y - 80} text="propan-1-ol" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K1.compare} />
				<g opacity={massO}>{[AX, BX].map((x, i) => <g key={i} transform={`translate(${x},500) scale(${pl}) translate(${-x},-500)`}><Tag x={x} y={470} text="60 g/mol" at={K1.both} size={28} color={NAVY} fill="#e7edf8" anchor="middle" /></g>)}</g>
				<RingAt c={ohRing('CH_3COOH', AX)} rx={50} ry={38} at={K1.oh} color={GREY} out={K1.yet + 40} />
				<RingAt c={ohRing('CH_3CH_2CH_2OH', BX)} rx={50} ry={38} at={K1.oh + 6} color={GREY} out={K1.yet + 40} />
				<Tag x={(AX + BX) / 2} y={300} text="both have O–H" at={K1.oh + 10} out={K1.yet} size={26} anchor="middle" />
				<Tag x={AX} y={560} text="118 °C" at={K1.e118} size={32} color={RED} fill="#f9e1dc" anchor="middle" />
				<Tag x={BX} y={560} text="97 °C" at={K1.e97} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
				<OkChip x={AX - 130} y={650} text="litmus: red" at={K1.red} />
				<OkChip x={AX - 130} y={720} text="NaHCO₃: fizz" at={K1.fizz} />
				<NoChip x={BX - 150} y={650} text="litmus: no change" at={K1.neither} />
				<NoChip x={BX - 150} y={720} text="NaHCO₃: no fizz" at={K1.neither + 10} />
				<Sx x={960} y={900} text="What does the acid's group change?" size={44} color={INK} anchor="middle" hand at={K1.so} />
			</Overlay>
		</>
	);
};

// ---------- 2. The carboxyl group ----------
const K2 = cues(sc('carboxyl-group'), {group: 'carboxyl group', carbonyl: "It's a carbonyl", same: 'same carbon', alike: "aren't alike", one: 'just one', inside: 'Inside the molecule', polar: 'polar'});
export const SceneCarboxyl: React.FC = () => {
	const f = useCurrentFrame();
	const X = 640, Y = 520, S = 1.45;
	const r = coohF(ACID_F, 'c1', '1u', '1r', X, Y, S);
	const h = apt(ACID_F, ACID_F.k['1rH'], X, Y, S);
	return (
		<Overlay>
			<TaskLine text="Acid or alcohol? The carboxyl group" at={0} size={54} y={130} />
			<Mol2D m={ACID_F} x={X} y={Y} s={S} at={4} glow={{[ACID_F.k['1rH']]: [K2.one, K2.inside + 30]}} />
			<RingAt c={r.c} rx={r.rx} ry={r.ry} at={K2.group} />
			<Tag x={1180} y={300} text="carboxyl group: –COOH" at={K2.group} size={34} color={RED} fill="#f9e1dc" />
			<Tag x={1180} y={370} text="carbonyl C=O + hydroxyl O–H" at={K2.carbonyl} out={K2.alike + 30} size={24} />
			<RingAt c={r.C} rx={34} ry={34} at={K2.same} out={K2.alike + 30} color={NAVY} />
			<Arrow2 a={[r.O[0] + 40, r.O[1] - 6]} b={[r.C[0] + 30, r.C[1] - 30]} at={K2.same} out={K2.alike + 30} color={NAVY} bend={30} />
			<Arrow2 a={[h[0] + 10, h[1] + 40]} b={[r.C[0] + 20, r.C[1] + 34]} at={K2.same + 6} out={K2.alike + 30} color={NAVY} bend={40} />
			<Tag x={X - 80} y={720} text="both on one carbon" at={K2.same + 10} out={K2.alike + 30} size={26} color={NAVY} fill="#e7edf8" />
			<Crossed x={1180} y={480} text="two O–H groups" at={K2.alike} cross={K2.one} note="one O–H; the C=O oxygen has no H" size={34} />
			<g opacity={dimAt(f, K2.polar + 70, 0.5)}>
				<Delta x={r.O[0] - 40} y={r.O[1] - 10} t="−" at={K2.polar} />
				<Delta x={r.R[0]} y={r.R[1] - 46} t="−" at={K2.polar} />
				<Delta x={r.C[0] - 34} y={r.C[1] + 50} t="+" at={K2.polar + 8} />
				<Delta x={h[0] + 6} y={h[1] + 52} t="+" at={K2.polar + 8} />
			</g>
			<Tag x={X - 230} y={800} text="intramolecular: covalent bonds inside the molecule, both polar" at={K2.inside} out={K2.polar + 60} size={24} />
		</Overlay>
	);
};

// ---------- 3. Naming ----------
const K3 = cues(sc('naming-acids'), {find: 'find the longest', drop: 'Drop the', oic: 'add oic', one: 'always carbon one', no: 'no number', list: 'methanoic', butanoic: 'butanoic acid', count: 'Count that', two: 'has two carbons', branches: 'Branches are', mp: 'two-methylpropanoic'});
const BUA = acidK(4), MPA = acidK(3, [1]);
const W3: [number, number, number] = [300, 200, 250];
export const SceneNaming: React.FC = () => {
	const f = useCurrentFrame();
	const X = 470, Y = 380, S = 1.15, X2 = 470, Y2 = 760;
	const ch = [0, 1, 2, 3].map(i => P2(BUA.m, X, Y, S, i));
	const ch2 = [2, 1, 0].map(i => P2(MPA.m, X2, Y2, S, i));
	const LIST = ['HCOOH  methanoic acid', 'CH_3COOH  ethanoic acid', 'CH_3CH_2COOH  propanoic acid', 'CH_3CH_2CH_2COOH  butanoic acid'];
	const lAt = [K3.list, K3.list + 26, K3.list + 53, K3.butanoic];
	const out1 = K3.mp - 10;
	return (
		<Overlay>
			<TaskLine text="Name it" at={K3.find} size={54} y={130} />
			<g opacity={dimAt(f, out1, 0.2)}>
				<Trace path={ch} at={K3.find + 10} dur={34} />
				<AcidAt k={BUA} x={X} y={Y} s={S} at={0} ring={K3.find + 30} />
				<Locants pts={[ch[3]]} at={K3.one} offs={[[0, 60]]} ring={[{i: 0, at: K3.one + 10}]} />
				<NameBuilder x={920} y={250} s={0.72} widths={W3} at={K3.find} fills={[{slot: 1, text: 'butane', at: K3.drop}, {slot: 1, text: 'butan', at: K3.oic - 6}, {slot: 2, text: 'oic acid', at: K3.oic}]} />
			</g>
			<Tag x={920} y={390} text="always C1: no number" at={K3.no} size={26} color={NAVY} fill="#e7edf8" />
			{LIST.map((t, i) => { const a = lAt[i]; const lit = i === 1 ? vis(f, K3.two, K3.branches) : 0; return <g key={i} opacity={vis(f, a, K3.branches) * (0.45 + 0.55 * Math.max(vis(f, a, lAt[i + 1] ?? K3.count), lit))}><CT x={920} y={500 + i * 56} text={t} size={30} at={a} /></g>; })}
			<Tag x={920} y={720} text="ethanoic: 2 carbons, counting the COOH carbon" at={K3.two} out={K3.branches} size={24} color="#2d6f9e" fill="#e3f0fa" />
			<AcidAt k={MPA} x={X2} y={Y2} s={S} at={K3.mp - 8} ring={K3.mp + 10} />
			<Locants pts={ch2} at={K3.mp + 6} offs={zigOffs(ch2)} />
			<NameBuilder x={920} y={640} s={0.72} widths={W3} at={K3.mp} fills={[{slot: 0, text: '2-methyl', at: K3.mp + 20}, {slot: 1, text: 'propan', at: K3.mp + 26}, {slot: 2, text: 'oic acid', at: K3.mp + 32}]} />
			{void K3.count}
		</Overlay>
	);
};

// ---------- 4. Dimers and boiling points ----------
const K4 = cues(sc('dimers-boiling'), {now: 'Now the boiling', give: 'give and take', isnt: "isn't the difference", beside: 'right beside', gives: 'gives a hydrogen', takes: 'takes one', two: 'with two hydrogen', dimer: 'called a dimer', dd: 'Add dipole-dipole', more: 'More energy', higher: 'boils higher'});
export const SceneDimers: React.FC = () => {
	const f = useCurrentFrame();
	const X = 470, Y = 540, S = 1.35;
	const {a, b} = dimerPts(X, Y, S);
	const oh = ETA.oh as number;
	const shrink = smooth(prog(f, K4.more, 26));
	const sc2 = 1 - 0.3 * shrink, tx = -150 * shrink;
	const ghostO = vis(f, K4.dd - 6, K4.more);
	return (
		<Overlay>
			<TaskLine text="Forces" at={K4.now} size={54} y={130} />
			<Tag x={96} y={190} text="C05: an O–H gives and takes hydrogen bonds" at={K4.give} out={K4.isnt + 30} size={24} />
			<g transform={`translate(${tx},${(1 - sc2) * Y * 0.3}) translate(${X},${Y}) scale(${sc2}) translate(${-X},${-Y})`}>
				<Dimer x={X} y={Y} s={S} at={0} slide={K4.two} bonds={K4.two + 30} ring={K4.beside - 20} />
				<LonePairs p={a(ETA.o)} at={K4.beside} a0={-1.5} r={40} />
				<Arrow2 a={[a(oh)[0] + 60, a(oh)[1] + 10]} b={[a(oh)[0] + 150, a(oh)[1] + 10]} at={K4.gives} out={K4.dimer} color={VIOLET} width={5} />
				<Arrow2 a={[a(ETA.o)[0] + 150, a(ETA.o)[1] - 10]} b={[a(ETA.o)[0] + 50, a(ETA.o)[1] - 10]} at={K4.takes} out={K4.dimer} color={VIOLET} width={5} />
				<g opacity={ghostO * 0.55}>
					<Dots a={[b(ETA.c)[0], b(ETA.c)[1] + 40]} b={[b(ETA.c)[0] + 40, b(ETA.c)[1] + 170]} at={K4.dd + 4} color="#2a8c7e" width={5} flicker />
					<Dots a={[a(ETA.c)[0], a(ETA.c)[1] - 50]} b={[a(ETA.c)[0] - 40, a(ETA.c)[1] - 180]} at={K4.dd + 10} color="#2a8c7e" width={5} flicker />
				</g>
			</g>
			<Tag x={96} y={290} text="second O: a second taker" at={K4.beside} out={K4.dimer} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={96} y={350} text="O–H gives" at={K4.gives} out={K4.dimer} size={26} color={VIOLET} fill="#e6ddf5" />
			<Tag x={300} y={350} text="C=O takes" at={K4.takes} out={K4.dimer} size={26} color={VIOLET} fill="#e6ddf5" />
			<Tag x={96} y={810} text="dimer: a pair held by 2 hydrogen bonds" at={K4.dimer} size={30} color={VIOLET} fill="#e6ddf5" />
			<Tag x={96} y={880} text="+ dipole–dipole (C=O)" at={K4.dd} size={26} color="#2a8c7e" fill="#dff2ef" o={dimAt(f, K4.higher, 0.5)} />
			<Strip at={K4.more} x={1560} />
			<Mark T={97} label="propan-1-ol 97 °C" at={K4.more + 20} x={1560} left />
			<Mark T={118} label="ethanoic acid 118 °C" at={K4.higher - 10} x={1560} />
			<Tag x={1590} y={560} text="both 60 g/mol" at={K4.more + 30} size={24} color={NAVY} fill="#e7edf8" />
			<Crossed x={860} y={910} text="more O atoms, so a higher boiling point" at={K4.higher + 10} cross={K4.higher + 30} size={28} />
		</Overlay>
	);
};

// ---------- 5. The series and solubility ----------
const K5 = cues(sc('series-solubility'), {within: 'Within the family', like: 'like the alcohols', disp: 'adds dispersion', meth: 'Methanoic acid', eth: 'ethanoic at', prop: 'propanoic at', sixty: 'sixty four', group: 'The carboxyl group', water: 'with water', mix: 'mix with', after: 'After that', long: 'long non-polar', falls: 'falls'});
const SER = [acidK(1), acidK(2), acidK(3), acidK(4)];
export const SceneSeries: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 1500;
	const at = [K5.meth, K5.eth, K5.prop, K5.sixty];
	const lab = ['methanoic 101 °C', 'ethanoic 118 °C', 'propanoic 141 °C', 'butanoic 164 °C'];
	const T = [101, 118, 141, 164];
	const PA = acidK(3), PX = 760, PY = 560, PS = 1.3;
	const po = P2(PA.m, PX, PY, PS, PA.o), ph = P2(PA.m, PX, PY, PS, PA.oh as number);
	const W = [{o: [po[0] - 40, po[1] - 150] as V2, a: 1.6}, {o: [po[0] + 150, po[1] - 70] as V2, a: 3.1}, {o: [ph[0] + 190, ph[1] + 20] as V2, a: 3.3}, {o: [ph[0] + 40, ph[1] + 150] as V2, a: -1.6}];
	const latt = vis(f, K5.water - 10);
	return (
		<Overlay>
			<TaskLine text="Within the family" at={K5.within} size={54} y={130} />
			<Tag x={96} y={190} text="C05: Same family? Size wins." at={K5.like} out={K5.meth} size={24} />
			<g opacity={vis(f, 0, K5.group)}>
				{SER.map((k, i) => { const y = 290 + i * 175, x = 300 + i * 70; const n = i + 1; const pts = Array.from({length: n}, (_, j) => P2(k.m, x, y, 0.85, j)); return (
					<g key={i}>
						<AcidAt k={k} x={x} y={y} s={0.85} at={at[i] - 10} ring={at[i]} ringOut={at[i] + 40} />
						{n > 1 ? <Dots a={[pts[0][0], pts[0][1] + 34]} b={[pts[n - 1][0], pts[n - 1][1] + 34]} at={Math.max(K5.disp, at[i])} color={DISP} width={5} flicker /> : null}
						<Mark T={T[i]} label={lab[i]} at={at[i]} x={SX} left={i % 2 === 1} />
					</g>
				); })}
				<Strip at={0} x={SX} />
				<Tag x={96} y={950} text="longer chain: more dispersion, higher boiling point" at={K5.disp} size={26} color="#2d6f9e" fill="#e3f0fa" o={dimAt(f, K5.meth, 0.5)} />
			</g>
			<g opacity={latt * dimAt(f, K5.long, 0.4)}>
				<AcidAt k={PA} x={PX} y={PY} s={PS} at={K5.water - 10} ring={K5.water} />
				{W.map((w, i) => <WaterMol key={i} p={w} o={prog(f, K5.water + i * 5, 10)} />)}
				<Dots a={[W[0].o[0] + 6, W[0].o[1] + 34]} b={[po[0], po[1] - 34]} at={K5.water + 20} color={VIOLET} width={5} />
				<Dots a={[W[1].o[0] - 34, W[1].o[1] + 16]} b={[po[0] + 34, po[1] - 4]} at={K5.water + 26} color={VIOLET} width={5} />
				<Dots a={[ph[0] + 60, ph[1]]} b={[W[2].o[0] - 32, W[2].o[1]]} at={K5.water + 32} color={VIOLET} width={5} />
				<Dots a={[W[3].o[0], W[3].o[1] - 34]} b={[ph[0] - 4, ph[1] + 34]} at={K5.water + 38} color={VIOLET} width={5} />
			</g>
			<Tag x={1140} y={300} text="hydrogen bonds with water" at={K5.water} out={K5.long} size={28} color={VIOLET} fill="#e6ddf5" />
			<Tag x={1140} y={370} text="small acids, up to butanoic: mix with water" at={K5.mix} size={26} color={NAVY} fill="#e7edf8" o={dimAt(f, K5.long, 0.5)} />
			{['butanoic: mixes', 'pentanoic: partly', 'hexanoic: barely'].map((t, i) => { const a = K5.after + i * 30; return <g key={i} opacity={i < 2 ? dimAt(f, a + 30, 0.45) : 1}><Tag x={300 + i * 470} y={860} text={t} at={a} size={30} /></g>; })}
			<Tag x={960} y={950} text="longer non-polar chain, less soluble" at={K5.falls - 10} size={24} anchor="middle" />
			{void INK}{void K5.eth}
		</Overlay>
	);
};

// ---------- 6. Weak acid ----------
const K6 = cues(sc('weak-acid'), {why: 'So why', proton: 'as a proton', join: 'join a water', hyd: 'makes hydronium', eth: 'ethanoate ion', rev: 'reversible', left: 'lies well', back: 'keep taking', from: 'From the strength', ph: 'two point nine', eighty: 'eighty', weak: 'weak acid', means: 'Weak means'});
const WAT = water2();
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 400, S = 1.15, WX = 1000;
	const H = apt(ACID_F, ACID_F.k['1rH'], X, Y, S), O = apt(ACID_F, ACID_F.k['1r'], X, Y, S);
	const wo = apt(WAT, WAT.k.o, WX, Y, S);
	const land: V2 = [wo[0], wo[1] - 70];
	const mo = dimAt(f, K6.from, 0.3);
	return (
		<Overlay>
			<TaskLine text="Why acidic?" at={K6.why} size={54} y={130} />
			<g opacity={mo}>
				<Mol2D m={ACID_F} x={X} y={Y} s={S} at={0} hideAt={{[ACID_F.k['1rH']]: K6.proton}} />
				<Mol2D m={WAT} x={WX} y={Y} s={S} at={4} />
				<ProtonHop a={H} b={land} at={K6.proton} dur={30} />
				<Proton x={land[0]} y={land[1]} o={prog(f, K6.proton + 28, 4)} />
				<Tag x={WX} y={Y + 70} text="hydronium, H₃O⁺" at={K6.hyd} size={28} color="#1d6f66" fill="#cdeee8" anchor="middle" />
				<Charge p={O} at={K6.eth} label="−" />
				<Tag x={X - 160} y={Y + 150} text="ethanoate ion: the acid after losing H⁺" at={K6.eth} size={26} color="#5e4a8c" fill="#e4ddf0" />
				<ProtonHop a={land} b={[O[0] + 20, O[1] - 10]} at={K6.back} dur={34} bow={-110} />
			</g>
			<EqRow left={[{t: 'CH_3COOH', at: K6.eth + 20}, {t: '+', at: K6.eth + 20}, {t: 'H_2O', at: K6.eth + 20}]} right={[{t: 'CH_3COO⁻', at: K6.eth + 26}, {t: '+', at: K6.eth + 26}, {t: 'H_3O⁺', at: K6.eth + 26}]} cx={760} y={700} size={44} len={150} arrow={{at: K6.eth + 22, eqAt: K6.rev}} />
			<Tag x={760} y={760} text="lies to the left: most molecules stay whole" at={K6.left} out={K6.ph} size={26} anchor="middle" />
			<Tag x={1300} y={590} text="M6: 0.10 mol/L, pH 2.9" at={K6.ph} size={24} o={dimAt(f, K6.eighty + 20, 0.5)} />
			<Lens x={1300} y={190} at={K6.eighty - 10} cell={38} />
			<Tag x={1490} y={530} text="about 1 in 80" at={K6.eighty + 14} size={30} color="#1d6f66" fill="#cdeee8" anchor="middle" />
			<Crossed x={140} y={830} text="carboxylic acids are strong acids" at={K6.weak - 6} cross={K6.weak + 10} note="weak: only partly ionised" size={32} />
			<Tag x={1180} y={860} text="weak ≠ dilute" at={K6.means} size={28} />
			{void RED}{void INK}
		</Overlay>
	);
};
