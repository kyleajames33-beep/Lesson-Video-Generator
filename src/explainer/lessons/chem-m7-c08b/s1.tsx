// M7 C08b scenes 1 to 7: the hook (same formula, one silver mirror), the carbonyl at the end or in the middle (polar
// C=O; the aldehyde H), naming aldehydes (-al, carbon 1, no number), naming ketones (-one; a number from five carbons),
// functional group isomers, forces and boiling points (dipole–dipole, no hydrogen bonds between them; the strip), and
// the aldehyde H and solubility (water hydrogen bonds to the C=O oxygen).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, DISP, Dots, Locants, NameBuilder, NameLbl, Tag, Trace, VIOLET, zigOffs} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import type {SMol} from '../chem-m7-c04a/parts';
import {Delta, LonePairs} from '../chem-m7-c05/parts';
import {Mark, Strip, WaterMol} from '../chem-m7-c03/parts';
import {Arrow2, Leader, RingAt} from '../chem-m7-c06/parts';
import {CarbAt, P2, RED, Tube, carb} from '../chem-m7-c08a/parts';
import {Heading, TOLL, sc} from './common';
import {INK, INK_SOFT, NAVY} from '../chem-m7-c08a/parts';

const GREY = '#8a847a';
export const dblO = (m: SMol, key: string): SMol => ({...m, bonds: m.bonds.map(b => (b.b === m.k[key] ? {...b, order: 2 as const, color: RED} : b))});
export const PAL = dblO(cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', r: 'O'}]), '2r');
export const PONE_F = dblO(cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'O'}, {u: 'H', d: 'H', r: 'H'}]), '1u');
export const ETAL_F = dblO(cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', r: 'O'}]), '1r');
const CO = (m: SMol, ci: string, oi: string, x: number, y: number, s: number): [V2, V2] => [apt(m, m.k[ci], x, y, s), apt(m, m.k[oi], x, y, s)];
const mid = (a: V2, b: V2): V2 => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {alcohol: 'In the alcohol', aldehyde: 'an aldehyde', both: 'Both have the formula', liquids: 'colourless liquids', warm: 'warm each', mirror: 'silver mirror', nothing: 'does nothing', what: "What's the difference"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const th = dimAt(f, K1.what, 0.35);
	const pl = 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K1.both) / 24)) * Math.PI));
	return (
		<>
			<Heading text="Aldehydes and ketones: how can you tell?" at={4} size={56} />
			<Overlay>
				<g opacity={th}>
					<CT x={96} y={230} text="propan-2-ol + [O] → propanone" size={26} color={GREY} at={K1.alcohol} />
					<CT x={96} y={272} text="propan-1-ol + [O] (distil) → propanal" size={26} color={GREY} at={K1.aldehyde - 20} />
					<Tag x={96} y={290} text="like ethanol → ethanal (C08a)" at={K1.aldehyde} size={20} />
				</g>
				<CT x={700} y={420} text="CH_3CH_2CHO" size={48} anchor="middle" at={K1.aldehyde} />
				<CT x={1300} y={420} text="CH_3COCH_3" size={48} anchor="middle" at={K1.alcohol + 20} />
				{[700, 1300].map((x, i) => <g key={i} transform={`translate(${x},470) scale(${pl}) translate(${-x},-470)`}><Tag x={x} y={450} text="C_3H_6O" at={K1.both} size={30} color={NAVY} fill="#e7edf8" anchor="middle" /></g>)}
				<Tube p={TOLL.clear} to={TOLL.mirror} swap={K1.mirror} cx={700} top={530} h={360} at={K1.warm} />
				<Tube p={TOLL.clear} cx={1300} top={530} h={360} at={K1.warm + 6} />
				<g opacity={th}><Sx x={700} y={940} text="Tollens' reagent, warmed" size={26} color={INK} anchor="middle" weight={700} at={K1.warm} /></g>
				<Tag x={700} y={960} text="propanal: silver mirror" at={K1.mirror + 20} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
				<Tag x={1300} y={960} text="propanone: no change" at={K1.nothing} size={28} anchor="middle" />
				{void K1.liquids}
			</Overlay>
		</>
	);
};

// ---------- 2. The carbonyl ----------
const K2 = cues(sc('carbonyl-position'), {both: 'Both contain', carbonyl: 'carbonyl group', oxygen: 'Oxygen pulls', polar: 'is polar', diff: 'The difference', end: 'at the end', hydrogen: 'carries a hydrogen', inside: "it's inside", each: 'a carbon on each', noh: 'and no hydrogen'});
export const AX = 500, KX = 1380, SY2 = 440;
export const ScenePosition: React.FC = () => {
	const f = useCurrentFrame();
	const [ac, ao] = CO(PAL, 'c2', '2r', AX, SY2, 1), [kc, ko] = CO(PONE_F, 'c1', '1u', KX, SY2, 1);
	const k0 = apt(PONE_F, PONE_F.k.c0, KX, SY2, 1), k2 = apt(PONE_F, PONE_F.k.c2, KX, SY2, 1);
	const dl = dimAt(f, K2.diff + 30, 0.25);
	return (
		<Overlay>
			<TaskLine text="Aldehyde or ketone?" at={K2.both} size={54} y={130} />
			<Mol2D m={PAL} x={AX} y={SY2} s={1} at={K2.both} glow={{[PAL.k['2u']]: [K2.hydrogen, 1e9]}} />
			<Mol2D m={PONE_F} x={KX} y={SY2} s={1} at={K2.both + 8} />
			<RingAt c={mid(ac, ao)} rx={70} ry={40} at={K2.carbonyl} />
			<RingAt c={mid(kc, ko)} rx={40} ry={70} at={K2.carbonyl + 6} />
			<Tag x={960} y={200} text="carbonyl: C=O (C08a)" at={K2.carbonyl} size={28} color={RED} fill="#f9e1dc" anchor="middle" o={dimAt(f, K2.diff, 0.4)} />
			<g opacity={dl}>
				<Delta x={ao[0]} y={ao[1] - 44} t="−" at={K2.polar} /><Delta x={ac[0]} y={ac[1] + 70} t="+" at={K2.polar + 10} />
				<Delta x={ko[0] + 44} y={ko[1] + 6} t="−" at={K2.polar} /><Delta x={kc[0] + 40} y={kc[1] + 50} t="+" at={K2.polar + 10} />
				<Tag x={960} y={260} text="O pulls the shared electrons: polar C=O" at={K2.oxygen} out={K2.diff} size={24} anchor="middle" />
			</g>
			<Tag x={AX - 280} y={640} text="aldehyde: C=O at the end, H on the carbonyl carbon (–CHO)" at={K2.hydrogen} size={26} color={NAVY} fill="#e7edf8" />
			<Arrow2 a={[kc[0] - 30, kc[1] + 30]} b={[k0[0] + 30, k0[1] + 10]} at={K2.each} color={INK} />
			<Arrow2 a={[kc[0] + 30, kc[1] + 30]} b={[k2[0] - 30, k2[1] + 10]} at={K2.each + 6} color={INK} />
			<Tag x={KX - 300} y={760} text="ketone: C=O inside, a carbon each side, no H" at={K2.noh} size={26} color={NAVY} fill="#e7edf8" />
			{void K2.end}{void K2.inside}
		</Overlay>
	);
};

// ---------- 3. Naming aldehydes ----------
const K3 = cues(sc('naming-aldehydes'), {find: 'find the longest', alk: "Take the alkane's", al: 'add al', one: 'always carbon one', no: 'no number', list: 'methanal,', anyb: 'Any branch', two: 'two-methylpropanal'});
const BUTAL = carb(4, 3), MPAL = carb(3, 2, [1]);
export const SceneNameAl: React.FC = () => {
	const f = useCurrentFrame();
	const X = 480, Y = 380, S = 1.15;
	const ch = [0, 1, 2, 3].map(i => P2(BUTAL.m, X, Y, S, i));
	const X2 = 480, Y2 = 760;
	const ch2 = [2, 1, 0].map(i => P2(MPAL.m, X2, Y2, S, i));
	const LIST = ['HCHO  methanal', 'CH_3CHO  ethanal', 'CH_3CH_2CHO  propanal', 'CH_3CH_2CH_2CHO  butanal'];
	const out1 = K3.two - 6;
	return (
		<Overlay>
			<TaskLine text="Name it: aldehydes" at={K3.find} size={54} y={130} />
			<g opacity={dimAt(f, out1, 0.25)}>
				<Trace path={ch} at={K3.find} dur={30} />
				<CarbAt k={BUTAL} x={X} y={Y} s={S} at={0} ring={K3.find + 20} />
				<Locants pts={[ch[3]]} at={K3.one} offs={[[0, 46]]} ring={[{i: 0, at: K3.one + 10}]} />
				<NameBuilder x={920} y={260} s={0.72} at={K3.find} fills={[{slot: 1, text: 'butane', at: K3.alk}, {slot: 1, text: 'butan', at: K3.al - 10}, {slot: 2, text: 'al', at: K3.al}]} />
			</g>
			<Tag x={920} y={420} text="always C1: no number" at={K3.no} size={26} color={NAVY} fill="#e7edf8" />
			{LIST.map((t, i) => { const a = K3.list + i * 22; return <g key={i} opacity={vis(f, a, a + 40) * 0.6 + 0.4 * vis(f, a, out1)}><CT x={1360} y={520 + i * 56} text={t} size={30} at={a} /></g>; })}
			<CarbAt k={MPAL} x={X2} y={Y2} s={S} at={K3.two - 4} ring={K3.two + 10} />
			<Locants pts={ch2} at={K3.two + 20} offs={zigOffs(ch2)} />
			<NameBuilder x={920} y={660} s={0.72} at={K3.two} fills={[{slot: 0, text: '2-methyl', at: K3.two + 20}, {slot: 1, text: 'propan', at: K3.two + 26}, {slot: 2, text: 'al', at: K3.two + 32}]} />
			{void K3.anyb}
		</Overlay>
	);
};

// ---------- 4. Naming ketones ----------
const K4 = cues(sc('naming-ketones'), {ket: 'Ketones end', prop: 'Propanone needs', but: 'Butanone is', often: "you'll often", five: 'From five', nearer: 'Number from', p2: 'pentan-two-one', p3: 'pentan-three-one'});
const PRO = carb(3, 1), BUO = carb(4, 1), P2O = carb(5, 1), P3O = carb(5, 2);
export const SceneNameOne: React.FC = () => {
	const f = useCurrentFrame();
	const S = 1.05;
	const a = [0, 1, 2, 3, 4].map(i => P2(P2O.m, 520, 480, S, i)), b = [0, 1, 2, 3, 4].map(i => P2(P3O.m, 520, 780, S, i));
	return (
		<Overlay>
			<TaskLine text="Name it: ketones" at={K4.ket} size={54} y={130} />
			<g opacity={vis(f, K4.ket, K4.five)}>
				<CarbAt k={PRO} x={420} y={420} s={S} at={K4.prop - 10} ring={K4.prop} />
				<NameBuilder x={860} y={300} s={0.72} at={K4.ket} fills={[{slot: 1, text: 'propane', at: K4.prop}, {slot: 1, text: 'propan', at: K4.prop + 20}, {slot: 2, text: 'one', at: K4.prop + 26}]} />
				<Tag x={860} y={450} text="only one place: no number" at={K4.prop + 30} size={24} />
				<CarbAt k={BUO} x={470} y={720} s={0.9} at={K4.but} />
				<Tag x={860} y={700} text="butanone = butan-2-one" at={K4.often} size={28} color={NAVY} fill="#e7edf8" />
			</g>
			<g opacity={vis(f, K4.five)}>
				<Trace path={a} at={K4.five} dur={26} width={26} />
				<CarbAt k={P2O} x={520} y={480} s={S} at={K4.five} />
				<Locants pts={a} at={K4.nearer} offs={zigOffs(a)} ring={[{i: 1, at: K4.p2 - 10}]} />
				<NameLbl x={1340} y={490} parts={[['pentan', '#2d6f9e'], ['-2-one', RED]]} at={K4.p2} size={44} />
				<Trace path={b} at={K4.five + 10} dur={26} width={26} />
				<CarbAt k={P3O} x={520} y={780} s={S} at={K4.five + 10} />
				<Locants pts={b} at={K4.p3 - 20} offs={zigOffs(b)} ring={[{i: 2, at: K4.p3}]} />
				<NameLbl x={1340} y={790} parts={[['pentan', '#2d6f9e'], ['-3-one', RED]]} at={K4.p3} size={44} />
				<Tag x={1340} y={830} text="3 from both ends" at={K4.p3 + 20} size={26} anchor="middle" />
			</g>
		</Overlay>
	);
};

// ---------- 5. Functional group isomers ----------
const K5 = cues(sc('functional-group-isomers'), {count: 'count the atoms', both: 'Both are C', same: 'Same formula', fgi: 'functional group isomers', three: 'three or more', miss: 'easy to miss'});
export const SceneIsomers: React.FC = () => {
	const f = useCurrentFrame();
	const fl = vis(f, K5.miss, K5.miss + 40);
	return (
		<Overlay>
			<TaskLine text="Same formula, different group" at={K5.count} size={54} y={130} />
			<Mol2D m={PAL} x={AX} y={SY2} s={1} at={0} />
			<Mol2D m={PONE_F} x={KX} y={SY2} s={1} at={4} />
			<Tag x={AX} y={600} text="C 3, H 6, O 1" at={K5.count + 10} size={28} anchor="middle" />
			<Tag x={KX} y={600} text="C 3, H 6, O 1" at={K5.count + 20} size={28} anchor="middle" />
			<Tag x={AX} y={670} text="C_3H_6O" at={K5.both} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={KX} y={670} text="C_3H_6O" at={K5.both} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
			<g opacity={vis(f, K5.fgi)}><path d={`M${AX},250 L${AX},226 L${KX},226 L${KX},250`} fill="none" stroke={TEAL} strokeWidth={4} /></g>
			<Tag x={940} y={170} text="functional group isomers: same formula, different group" at={K5.fgi} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<g opacity={vis(f, K5.three, K5.miss)}>
				<Mol2D m={ETAL_F} x={940} y={860} s={0.7} at={K5.three} o={0.6} />
				<Tag x={1180} y={840} text="C2: no ketone possible (needs a carbon each side)" at={K5.three + 10} size={22} />
			</g>
			<rect x={KX - 230} y={SY2 - 160} width={460} height={310} rx={20} fill="none" stroke={RED} strokeWidth={4} strokeDasharray="12 9" opacity={fl} />
			<Tag x={KX} y={800} text="the pair students miss" at={K5.miss} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
			{void K5.same}
		</Overlay>
	);
};

// ---------- 6. Forces and boiling points ----------
const K6 = cues(sc('forces-boiling'), {between: 'Between the molecules', dd: 'dipole-dipole attractions', attracts: 'attracts the slightly', disp: 'dispersion forces', but: "But there's", cant: "can't hydrogen", middle: 'in the middle', pent: 'pentane boils', butal: 'butanal at', buone: 'butan-two-one at', close: 'which is close', e118: 'one hundred and eighteen'});
const FV: [number, number][] = [[260, 360], [700, 330], [300, 600], [740, 580]];
export const SceneForces: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.75, SX = 1520;
	const fo = dimAt(f, K6.middle, 0.45);
	const cpt = (i: number) => P2(BUTAL.m, FV[i][0], FV[i][1], S, BUTAL.c), opt = (i: number) => P2(BUTAL.m, FV[i][0], FV[i][1], S, BUTAL.o);
	return (
		<Overlay>
			<TaskLine text="Forces" at={K6.between} size={54} y={130} />
			<g opacity={fo}>
				{FV.map(([x, y], i) => <CarbAt key={i} k={BUTAL} x={x} y={y} s={S} at={K6.between + i * 6} hLabel={false} />)}
				{FV.map((_, i) => <g key={'d' + i} opacity={0.6 + 0.4 * prog(f, K6.dd, 12)}><Delta x={opt(i)[0]} y={opt(i)[1] - 30} t="−" at={K6.between + 20} size={24} /><Delta x={cpt(i)[0] + 26} y={cpt(i)[1] + 30} t="+" at={K6.between + 26} size={24} /></g>)}
				{[[0, 1], [2, 3], [0, 2]].map(([a, b], k) => <Dots key={k} a={cpt(a)} b={opt(b)} at={K6.attracts + k * 14} color={TEAL} width={5} />)}
				{[[0, 2], [1, 3]].map(([a, b], k) => <Dots key={'p' + k} a={P2(BUTAL.m, FV[a][0], FV[a][1], S, 1)} b={P2(BUTAL.m, FV[b][0], FV[b][1], S, 1)} at={K6.disp + k * 8} color={DISP} width={4} flicker />)}
				<Tag x={96} y={720} text="dipole–dipole: δ+ C attracts δ− O" at={K6.attracts + 10} size={26} color={TEAL} fill="#dff2ef" />
				<Tag x={560} y={720} text="dispersion" at={K6.disp} size={26} color="#2d6f9e" fill="#e3f0fa" />
			</g>
			<Crossed x={96} y={810} text="aldehyde: O, so hydrogen bonds?" at={K6.but} cross={K6.cant} note="no O–H: no hydrogen bonds between them" size={32} />
			<Strip at={K6.middle} x={SX} />
			<Tag x={1060} y={210} text="C05: Same size? Hydrogen bonding wins." at={K6.middle + 10} out={K6.e118 - 20} size={22} />
			<Mark T={36} label="pentane 36 °C" at={K6.pent} x={SX} />
			<Mark T={75} label="butanal 75 °C" at={K6.butal} x={SX} left />
			<Mark T={80} label="butan-2-one 80 °C" at={K6.buone} x={SX} />
			<Mark T={118} label="butan-1-ol 118 °C" at={K6.e118} x={SX} left />
			<Tag x={1060} y={570} text="dipole–dipole: close" at={K6.close} size={22} color={TEAL} fill="#dff2ef" />
			<Tag x={1080} y={300} text="hydrogen bonding" at={K6.e118 + 10} size={24} color={VIOLET} fill="#e6ddf5" />
			{void K6.dd}
		</Overlay>
	);
};

// ---------- 7. The aldehyde H and solubility ----------
const K7 = cues(sc('aldehyde-h-solubility'), {and: "And the aldehyde's", carbon: 'bonded to carbon', positive: 'positive enough', lone: 'lone pairs', water: 'water molecules can', mix: "That's why small", grows: 'As the chain', falls: 'solubility falls'});
export const SceneSoluble: React.FC = () => {
	const f = useCurrentFrame();
	const X = 440, Y = 440;
	const h = apt(PAL, PAL.k['2u'], X, Y, 1), o = apt(PAL, PAL.k['2r'], X, Y, 1);
	const K = carb(3, 1), KX2 = 1300, KY2 = 520, S = 1.1;
	const ko = P2(K.m, KX2, KY2, S, K.o);
	const W1 = {o: [ko[0] - 120, ko[1] - 90] as V2, a: 0.3}, W2 = {o: [ko[0] + 120, ko[1] - 90] as V2, a: 2.8};
	const lab = ['propanone: mixes', 'butan-2-one: partly', 'pentan-3-one: a little'];
	return (
		<Overlay>
			<TaskLine text="The aldehyde H, and dissolving" at={K7.and} size={50} y={130} />
			<g opacity={dimAt(f, K7.water, 0.4)}>
				<Mol2D m={PAL} x={X} y={Y} s={1} at={0} glow={{[PAL.k['2u']]: [K7.carbon, K7.water]}} />
				<g opacity={vis(f, K7.positive)}><path d={`M${h[0] + 30},${h[1] - 40} l60,-30`} stroke={VIOLET} strokeWidth={5} strokeDasharray="4 8" /><path d={`M${h[0] + 46},${h[1] - 74} l28,28 M${h[0] + 74},${h[1] - 74} l-28,28`} stroke={RED} strokeWidth={5} /></g>
				<Tag x={X - 200} y={640} text="C–H: not a hydrogen bond donor" at={K7.positive} size={26} />
				<LonePairs p={o} at={K7.lone} a0={-0.6} />
			</g>
			<g opacity={vis(f, K7.water)}>
				<CarbAt k={K} x={KX2} y={KY2} s={S} at={K7.water} />
				<WaterMol p={W1} />
				<WaterMol p={W2} />
				<Dots a={[W1.o[0] + 30, W1.o[1] + 30]} b={[ko[0] - 18, ko[1] - 18]} at={K7.water + 14} color={VIOLET} width={5} />
				<Dots a={[W2.o[0] - 30, W2.o[1] + 30]} b={[ko[0] + 18, ko[1] - 18]} at={K7.water + 20} color={VIOLET} width={5} />
			</g>
			<Tag x={KX2} y={680} text="water donates, C=O accepts" at={K7.water + 24} size={26} color={VIOLET} fill="#e6ddf5" anchor="middle" />
			<Tag x={KX2} y={750} text="propanone, ethanal: mix with water" at={K7.mix} size={26} color={NAVY} fill="#e7edf8" anchor="middle" />
			{lab.map((t, i) => { const a = K7.falls + i * 20; return <g key={i} opacity={lab[i + 1] ? dimAt(f, a + 20, 0.5) : 1}><Tag x={300 + i * 470} y={880} text={t} at={a} size={28} /></g>; })}
			<Tag x={960} y={960} text="longer chain, less soluble (like the alcohols)" at={K7.falls + 50} size={22} anchor="middle" />
			{void K7.grows}{void Leader}{void INK_SOFT}
		</Overlay>
	);
};
