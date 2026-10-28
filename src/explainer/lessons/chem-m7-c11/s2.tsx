// M7 C11 scenes 7 to 12: amides build a hydrogen-bond network (213 °C against the acid's 141 °C), the amine as a weak
// base (lone pair takes H⁺ from water; litmus; ⇌, most unchanged), the amine salt with HCl and the lemon trick, why an
// amide is barely a base (the shared lone pair, as in c09's carboxylate), acid against base, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Proton, ProtonHop, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, Dots, Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Wisps} from '../chem-m7-c02/parts';
import {CT, apt, diat, dimAt, vis, water2} from '../chem-m7-c04a/parts';
import {Arrow2, EqRow, Plate, ptOn} from '../chem-m7-c06/parts';
import {ACID_F, Charge, Dimer, Drop, Spread, acidK} from '../chem-m7-c09/parts';
import {FISH, LEMON, LT, sc} from './common';
import {AMD_F, ETA_F, GREY, INDIGO, INK, Lens15, LP, NAVY, NMol, RED, SkN, amideOf} from './parts';

const PAM = amideOf(acidK(3));
const Pn = (m: {pts: V2[]}, i: number, x: number, y: number, s: number): V2 => [x + m.pts[i][0] * s, y + m.pts[i][1] * s];

// ---------- 7. The amide network ----------
const K7 = cues(sc('amide-network'), {amides: 'Amides go', polar: 'less polar', prop: 'Propanamide and', thirteen: 'thirteen', diff: 'The difference', give: 'to give', takes: 'takes hydrogen', links: 'links to', network: 'network', dimers: 'dimers'});
export const SceneNetwork: React.FC = () => {
	const f = useCurrentFrame();
	const X = 700, Y = 560, SS = 0.85;
	const cn = Pn(PAM, PAM.n, X, Y, SS), co = Pn(PAM, PAM.o, X, Y, SS);
	const place = (atom: number, target: V2): V2 => [target[0] - PAM.pts[atom][0] * SS, target[1] - PAM.pts[atom][1] * SS];
	const nbs = [place(PAM.o, [cn[0] + 230, cn[1] + 70]), place(PAM.o, [cn[0] - 50, cn[1] + 230]), place(PAM.n, [co[0] + 40, co[1] - 210]), place(PAM.n, [co[0] - 280, co[1] - 70])];
	return (
		<Overlay>
			<TaskLine text="Forces: amides" at={K7.amides} size={54} y={130} />
			<Tag x={96} y={190} text="N–H less polar than O–H (scene 5)" at={K7.polar} out={K7.prop + 30} size={22} />
			<Tag x={1200} y={300} text="propanoic acid 141 °C (dimers)" at={K7.prop} size={28} color={NAVY} fill="#e7edf8" />
			<Tag x={1200} y={370} text="propanamide 213 °C" at={K7.thirteen} size={32} color={VIOLET} fill="#e6ddf5" />
			<Tag x={1200} y={440} text="+72 °C; both 40 electrons" at={K7.thirteen + 20} size={24} />
			<Tag x={96} y={260} text="count the hydrogen bonds" at={K7.diff} out={K7.network} size={28} color={VIOLET} fill="#e6ddf5" />
			<SkN m={PAM} x={X} y={Y} s={SS} at={K7.diff} />
			<Tag x={96} y={700} text="primary amide: 2 N–H to give" at={K7.give} size={26} color={INDIGO} fill="#e2e5f7" o={dimAt(f, K7.network + 30, 0.5)} />
			<Tag x={96} y={330} text="C=O oxygen: takes" at={K7.takes} out={K7.network} size={26} color={RED} fill="#f9e1dc" />
			{nbs.map((p, i) => <SkN key={i} m={PAM} x={p[0]} y={p[1]} s={SS} at={K7.links + i * 8} o={0.55} />)}
			<Dots a={[cn[0] + 50, cn[1]]} b={Pn(PAM, PAM.o, nbs[0][0], nbs[0][1], SS)} at={K7.network - 10} color={VIOLET} width={6} />
			<Dots a={[cn[0] + 10, cn[1] + 30]} b={Pn(PAM, PAM.o, nbs[1][0], nbs[1][1], SS)} at={K7.network} color={VIOLET} width={6} />
			<Dots a={co} b={Pn(PAM, PAM.n, nbs[2][0], nbs[2][1], SS)} at={K7.network + 6} color={VIOLET} width={6} />
			<Dots a={co} b={Pn(PAM, PAM.n, nbs[3][0], nbs[3][1], SS)} at={K7.network + 12} color={VIOLET} width={6} />
			<Tag x={96} y={770} text="each molecule links to several: a network" at={K7.network + 10} size={28} color={VIOLET} fill="#e6ddf5" />
			<Dimer x={1300} y={780} s={0.55} at={K7.dimers - 10} slide={K7.dimers - 10} bonds={K7.dimers + 10} />
			<Tag x={1400} y={880} text="acid: pairs off" at={K7.dimers} size={24} anchor="middle" />
		</Overlay>
	);
};

// ---------- 8. Weak base ----------
const K8 = cues(sc('weak-base'), {back: 'Back to', takes: 'takes a proton', like: 'like ammonia', forms: 'That forms', ion: 'hydroxide ion', raised: 'The raised', blue: 'blue.', rev: 'reversible', left: 'left,', weak: 'weak bases'});
const WAT = water2();
export const SceneWeakBase: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 400, SS = 1.15, WX = 1000;
	const n = apt(ETA_F, ETA_F.k.n, X, Y, SS);
	const wh = apt(WAT, WAT.k.h, WX, Y, SS), wo = apt(WAT, WAT.k.o, WX, Y, SS);
	const land: V2 = [n[0] + 62, n[1]];
	return (
		<Overlay>
			<TaskLine text="Proton test: an amine is a weak base" at={K8.back} size={50} y={130} />
			<NMol m={ETA_F} x={X} y={Y} s={SS} at={0} />
			<LP p={n} at={0} out={K8.takes + 20} dir={0} r={42} />
			<NMolW at={4} hideAt={K8.takes} />
			<ProtonHop a={wh} b={land} at={K8.takes} dur={28} bow={-80} />
			<Proton x={land[0]} y={land[1]} o={prog(f, K8.takes + 26, 4)} />
			<Tag x={n[0] - 40} y={Y + 110} text="lone pair takes H⁺: N gains +" at={K8.takes + 20} size={26} color={INDIGO} fill="#e2e5f7" o={dimAt(f, K8.raised, 0.5)} />
			<Tag x={96} y={190} text="M6: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻" at={K8.like} out={K8.ion} size={22} />
			<Charge p={wo} at={K8.ion} label="−" r={44} />
			<Tag x={WX - 60} y={Y + 110} text="hydroxide left behind" at={K8.ion} size={26} color="#5e4a8c" fill="#e4ddf0" o={dimAt(f, K8.raised, 0.5)} />
			<EqRow left={[{t: 'CH_3CH_2NH_2', at: K8.forms}, {t: '+', at: K8.forms}, {t: 'H_2O', at: K8.forms}]} right={[{t: 'CH_3CH_2NH_3⁺', at: K8.forms + 10}, {t: '+', at: K8.forms + 10}, {t: 'OH⁻', at: K8.ion}]} cx={760} y={680} size={42} len={150} arrow={{at: K8.forms + 6, eqAt: K8.forms + 6}} />
			<Tag x={560} y={740} text="ethylammonium ion" at={K8.forms + 20} out={K8.left} size={24} />
			<Plate p={LT.red} to={LT.toBlue} swap={K8.blue - 10} swapDur={26} cx={1560} top={560} h={200} at={K8.raised} />
			<Tag x={1560} y={780} text="more OH⁻: red → blue" at={K8.blue} size={26} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={760} y={740} text="lies to the left: most stay unchanged" at={K8.left} size={26} anchor="middle" />
			<Lens15 x={1460} y={260} at={K8.left + 10} />
			<Tag x={96} y={880} text="weak base: only partly takes protons" at={K8.weak} size={28} color={TEAL} fill="#dff2ef" />
			{void K8.rev}{void wh}
		</Overlay>
	);
};
const NMolW: React.FC<{at: number; hideAt: number}> = ({at, hideAt}) => {
	const W = WAT;
	return <NMol m={W} x={1000} y={400} s={1.15} at={at} hideAt={{[W.k.h]: hideAt}} />;
};

// ---------- 9. Amine salts ----------
const K9 = cues(sc('amine-salts'), {with: 'With a stronger', comp: 'completion', form: 'form ethylammonium', ionic: 'ionic salt', ions: 'Its ions', barely: 'barely evaporates', lemon: 'lemon trick', citric: 'Citric acid', salt: ['salt that', 1]});
const HCL = diat('H', 'Cl');
export const SceneSalt: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 360, SS = 1.1, HX = 950;
	const n = apt(ETA_F, ETA_F.k.n, X, Y, SS), h = apt(HCL, 0, HX, Y, SS);
	const land: V2 = [n[0] + 60, n[1]];
	const top = dimAt(f, K9.lemon, 0.35);
	const fx = 380, ft = 760, fh = 170;
	const fp = ptOn(FISH, fx, ft, fh, 1000, 800);
	return (
		<Overlay>
			<TaskLine text="Amine + acid: a salt" at={K9.with} size={54} y={130} />
			<g opacity={top}>
				<NMol m={ETA_F} x={X} y={Y} s={SS} at={0} />
				<LP p={n} at={0} out={K9.comp + 20} dir={0} r={40} />
				<NMol m={HCL} x={HX} y={Y} s={SS} at={4} hideAt={{0: K9.comp}} />
				<ProtonHop a={h} b={land} at={K9.comp} dur={26} />
				<Proton x={land[0]} y={land[1]} o={prog(f, K9.comp + 24, 4)} />
				<EqRow left={[{t: 'CH_3CH_2NH_2', at: K9.form - 20}, {t: '+', at: K9.form - 20}, {t: 'HCl', at: K9.form - 20}]} right={[{t: 'CH_3CH_2NH_3⁺Cl⁻', at: K9.form, box: K9.ionic}]} cx={860} y={560} size={42} len={160} arrow={{at: K9.form - 10}} />
				<Tag x={860} y={620} text="ethylammonium chloride: an ionic salt" at={K9.ionic} size={26} anchor="middle" />
			</g>
			<Tag x={1230} y={300} text="goes to completion" at={K9.comp + 20} out={K9.lemon} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={860} y={680} text="ions attract strongly: the salt barely evaporates" at={K9.ions} size={26} color={NAVY} fill="#e7edf8" anchor="middle" o={dimAt(f, K9.lemon + 30, 0.5)} />
			<g opacity={vis(f, K9.lemon)}>
				<Plate p={FISH} cx={fx} top={ft} h={fh} />
				<Plate p={LEMON} cx={640} top={760} h={120} />
				<Wisps x={fp[0]} y={fp[1]} at={K9.lemon} out={K9.salt + 10} />
				<Drop x={fp[0] + 40} y={fp[1] + 10} at={K9.citric} color="#f2df7a" />
				<CT x={880} y={800} text="(CH_3)_3N + H⁺ → (CH_3)_3NH⁺" size={34} at={K9.citric + 20} />
				<Tag x={880} y={830} text="trimethylammonium: a salt, stays on the fish" at={K9.salt} size={26} color={INDIGO} fill="#e2e5f7" />
			</g>
			{void K9.barely}
		</Overlay>
	);
};

// ---------- 10. Why an amide is barely a base ----------
const K10 = cues(sc('amide-not-basic'), {so: 'So why', its: 'Its nitrogen', but: 'But the C', shares: 'shares it', same: 'same effect', carb: 'carboxylate', grip: 'grip', helped: 'That helped', here: 'Here, ethanamide', acid: 'acid either', change: 'change'});
export const SceneAmideBase: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 360, LY = 420, RX = 1060, RY = 440, RS = 1.25;
	const ln = apt(ETA_F, ETA_F.k.n, LX, LY, 0.95);
	const n = apt(AMD_F, AMD_F.k.n, RX, RY, RS), o = apt(AMD_F, AMD_F.k.o, RX, RY, RS);
	const t = prog(f, K10.here, 60), d = Math.sin(t * Math.PI);
	const pp: V2 = [n[0] + 170 - 90 * d, n[1] - 120 + 40 * d];
	const pl = ptOn(LT.red, 1180, 790, 130, 1000, 930), pb = ptOn(LT.blue, 1420, 790, 130, 1000, 930);
	return (
		<Overlay>
			<TaskLine text="Base or not?" at={K10.so} size={54} y={130} />
			<NMol m={ETA_F} x={LX} y={LY} s={0.95} at={0} />
			<LP p={ln} at={0} dir={0} r={36} />
			<Tag x={LX - 100} y={LY + 100} text="free pair" at={6} out={K10.grip} size={26} color={INDIGO} fill="#e2e5f7" />
			<ProtonHop a={[ln[0] + 140, ln[1] - 140]} b={[ln[0] + 50, ln[1]]} at={K10.here} dur={22} />
			<Proton x={ln[0] + 50} y={ln[1]} o={prog(f, K10.here + 20, 4)} />
			<Tag x={LX - 100} y={LY + 160} text="grabs H⁺" at={K10.here + 20} out={K10.acid} size={26} />
			<NMol m={AMD_F} x={RX} y={RY} s={RS} at={0} />
			<LP p={n} at={K10.its} dir={0} r={44} o={1 - 0.5 * prog(f, K10.shares, 20)} />
			<Spread a={o} b={n} at={K10.shares} />
			<Charge p={n} at={K10.shares} r={40} />
			<Charge p={o} at={K10.shares + 16} r={40} />
			<Tag x={RX - 240} y={RY + 130} text="lone pair shared with the C=O" at={K10.shares} size={28} color="#5e4a8c" fill="#e4ddf0" />
			<Sx x={RX - 224} y={RY + 210} text="(lone pair delocalised: resonance)" size={22} color={GREY} weight={600} at={K10.shares + 20} />
			<g opacity={vis(f, K10.carb) * dimAt(f, K10.grip + 30, 0.5)}>
				<CT x={1380} y={240} text="CH_3COO⁻" size={30} color={GREY} />
				<Tag x={1380} y={260} text="c09: sharing loosens the grip" at={K10.carb} size={22} />
			</g>
			<Tag x={1380} y={320} text="acid: gives H⁺ more easily | amide: barely takes H⁺" at={K10.grip + 10} size={22} anchor="start" o={dimAt(f, K10.acid, 0.5)} />
			{f >= K10.here && t < 1 ? <Proton x={pp[0]} y={pp[1]} dashed /> : null}
			<Tag x={RX + 100} y={RY - 160} text="barely grabs H⁺" at={K10.here + 20} out={K10.acid} size={26} />
			<Crossed x={96} y={720} text="has a C=O, so it's an acid" at={K10.acid - 10} cross={K10.acid + 20} note="no O–H to give; its N–H barely lets go" size={30} />
			<Plate p={LT.red} cx={1180} top={790} h={130} at={K10.change - 30} />
			<Plate p={LT.blue} cx={1420} top={790} h={130} at={K10.change - 30} />
			<Drop x={pl[0]} y={pl[1]} at={K10.change - 20} />
			<Drop x={pb[0]} y={pb[1]} at={K10.change - 14} />
			<Tag x={1300} y={950} text="no change: close to neutral" at={K10.change} size={26} anchor="middle" />
			{void K10.but}{void K10.same}{void K10.helped}
		</Overlay>
	);
};

// ---------- 11. Acid against base ----------
const K11 = cues(sc('acid-vs-base'), {now: 'Now, organic', gives: 'gives a proton', takes: 'takes a proton', both: 'Both are weak', red: 'turns red', blue: 'turns blue', mix: 'Mix the two', salt: 'making a salt', meth: 'methylammonium', no: 'No water', making: 'Making an amide'});
export const SceneVs: React.FC = () => {
	const f = useCurrentFrame();
	const AX = 470, BX = 1400, Y = 330, SS = 0.95;
	const ah = apt(ACID_F, ACID_F.k['1rH'], AX, Y, SS), bn = apt(ETA_F, ETA_F.k.n, BX, Y, SS);
	const cols = dimAt(f, K11.mix, 0.3);
	const PT = 470, PH = 170;
	return (
		<Overlay>
			<TaskLine text="Acid or base?" at={K11.now} size={54} y={130} />
			<g opacity={cols}>
				<Sx x={AX} y={210} text="carboxylic acid" size={32} color={RED} anchor="middle" hand at={K11.now} />
				<Sx x={BX} y={210} text="amine" size={32} color={INDIGO} anchor="middle" hand at={K11.now} />
				<NMol m={ACID_F} x={AX} y={Y} s={SS} at={K11.now} />
				<NMol m={ETA_F} x={BX} y={Y} s={SS} at={K11.now + 6} />
				<LP p={bn} at={K11.now + 6} dir={0} r={36} />
				<Arrow2 a={[ah[0] + 20, ah[1] - 20]} b={[ah[0] + 120, ah[1] - 90]} at={K11.gives} color={RED} />
				<Tag x={AX + 140} y={Y - 170} text="gives H⁺: O–H" at={K11.gives + 6} size={26} color={RED} fill="#f9e1dc" />
				<Arrow2 a={[bn[0] + 150, bn[1] - 90]} b={[bn[0] + 50, bn[1] - 10]} at={K11.takes} color={INDIGO} />
				<Tag x={BX + 40} y={Y - 170} text="takes H⁺: lone pair" at={K11.takes + 6} size={26} color={INDIGO} fill="#e2e5f7" />
				<Tag x={960} y={330} text="both weak" at={K11.both} size={28} anchor="middle" />
				<Plate p={LT.blue} to={LT.red} swap={K11.red - 10} cx={AX} top={PT} h={PH} at={K11.red - 40} />
				<Tag x={AX} y={PT + PH + 14} text="more H₃O⁺: blue → red; NaHCO₃: fizz (c09)" at={K11.red} size={22} color={RED} fill="#f9e1dc" anchor="middle" />
				<Plate p={LT.red} to={LT.toBlue} swap={K11.blue - 10} cx={BX} top={PT} h={PH} at={K11.blue - 40} />
				<Tag x={BX} y={PT + PH + 14} text="more OH⁻: red → blue; NaHCO₃: no fizz" at={K11.blue} size={22} color={NAVY} fill="#e7edf8" anchor="middle" />
			</g>
			<EqRow left={[{t: 'CH_3COOH', at: K11.mix + 20}, {t: '+', at: K11.mix + 20}, {t: 'CH_3NH_2', at: K11.mix + 20}]} right={[{t: 'CH_3NH_3⁺CH_3COO⁻', at: K11.salt}]} cx={960} y={780} size={44} len={160} arrow={{at: K11.salt - 6}} />
			<ProtonHop a={[600, 740]} b={[860, 740]} at={K11.salt - 30} dur={26} bow={-60} />
			<Tag x={960} y={830} text="methylammonium ethanoate: a salt" at={K11.meth} size={28} color={TEAL} fill="#dff2ef" anchor="middle" />
			<Crossed x={300} y={900} text="acid + amine → amide + water (room temperature)" at={K11.no} cross={K11.making} note="room temperature: a salt; an amide needs strong heat" size={28} />
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {so: 'So, amines', free: 'Their free', amide: 'In an amide', amine: 'Amine, free', base: ['base', 2]});
const CARDS = ['classify: count carbon groups on N (1°, 2°, 3°)', 'N–H < O–H hydrogen bonds: N less electronegative', 'amine + acid → salt (proton transfer)'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K12.so, K12.free, K12.amide];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120} y={200 + i * 90} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Amines are organic ammonia." at={K12.so} size={64} x={120} y={600} color={TEAL} />
			<TaskLine text="Amine: free pair, a base. Amide: shared pair, barely a base." at={K12.amine} size={48} x={120} y={730} color={TEAL} />
			<TaskLine text="Similar size: primary amide > acid > alcohol > amine > alkane." at={K12.base + 20} size={34} x={120} y={830} color={INK} />
			{void GREY}
		</Overlay>
	);
};
