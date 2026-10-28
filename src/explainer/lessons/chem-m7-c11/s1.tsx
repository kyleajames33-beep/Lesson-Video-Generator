// M7 C11 scenes 1 to 6: the hook (the fishy amine turns red litmus blue, the amide doesn't; lemon), the amine group
// and classifying it (count carbon groups on N), naming amines (-amine, N-), the amide group (C=O on N; condensation;
// -amide), amine forces (weaker N–H hydrogen bonds; the strip) and counting N–H hydrogens in three isomers.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, DISP, Dots, Locants, NameBuilder, Tag, Trace, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Wisps} from '../chem-m7-c02/parts';
import {CT, apt, ctW, dimAt, vis} from '../chem-m7-c04a/parts';
import {Delta, alc} from '../chem-m7-c05/parts';
import {Mark, Strip, WaterMol} from '../chem-m7-c03/parts';
import {EqRow, Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {acidK, Drop} from '../chem-m7-c09/parts';
import {AMMONIA, FISH, Heading, LEMON, LT, sc} from './common';
import {AMBER_INK, AMD_F, ETA_F, GREY, INDIGO, INK, INK_SOFT, LP, NAVY, NCount, NH3_F, NMol, RED, SkN, TMA, amideOf, amineOf, chainN, nbrPts} from './parts';

export const NME = chainN(4, 1, [], true);
export const P1A = amineOf(alc(3, 2)), P2A = amineOf(alc(3, 1)), ETA_K = amineOf(alc(2, 1));
const Pn = (m: {pts: V2[]}, i: number, x: number, y: number, s: number): V2 => [x + m.pts[i][0] * s, y + m.pts[i][1] * s];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {leave: 'Leave seafood', tma: 'trimethylamine', lemon: 'lemon', fades: 'smell fades', amine: "The amine's", blue: 'blue,', amide: 'Ethanamide', unch: 'unchanged', so: 'So why'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const fd = dimAt(f, K1.amine, 0.35) * (1 - prog(f, K1.so, 14));
	const fx = 330, ft = 520, fh = 230;
	const fishTop = ptOn(FISH, fx, ft, fh, 1000, 800);
	const LX = 1000, RX = 1500, LTOP = 470, LH = 230;
	const dl = ptOn(LT.red, LX, LTOP, LH, 1000, 930), dr = ptOn(LT.red, RX, LTOP, LH, 1000, 930);
	return (
		<>
			<Heading text="Amines and amides: why is one a base?" at={4} size={56} />
			<Overlay>
				<g opacity={fd}>
					<Plate p={FISH} cx={fx} top={ft} h={fh} at={0} />
					<Wisps x={fishTop[0]} y={fishTop[1]} at={K1.leave + 20} out={K1.fades + 10} />
					<CT x={fx} y={330} text="(CH_3)_3N" size={40} anchor="middle" at={K1.tma} />
					<Tag x={fx} y={350} text="trimethylamine vapour" at={K1.tma + 10} out={K1.lemon} size={22} anchor="middle" />
					<Plate p={LEMON} cx={620} top={470} h={150} at={K1.lemon} />
					<Drop x={fishTop[0] + 60} y={fishTop[1] + 20} at={K1.lemon + 10} color="#f2df7a" />
					<Drop x={fishTop[0] + 20} y={fishTop[1] + 30} at={K1.lemon + 18} color="#f2df7a" />
					<Tag x={fx} y={ft + fh + 20} text="smell fades" at={K1.fades} out={K1.blue} size={26} anchor="middle" />
				</g>
				<Plate p={LT.red} to={LT.toBlue} swap={K1.blue - 6} swapDur={26} cx={LX} top={LTOP} h={LH} at={K1.amine} />
				<Drop x={dl[0]} y={dl[1]} at={K1.blue - 24} />
				<Sx x={LX} y={LTOP - 30} text="amine (aq)" size={30} color={INK} anchor="middle" weight={700} at={K1.amine} />
				<Tag x={LX} y={LTOP + LH + 20} text="red → blue: a base" at={K1.blue + 6} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
				<CT x={RX} y={300} text="CH_3CONH_2" size={40} anchor="middle" at={K1.amide} />
				<RingAt c={[RX + ctW('CH_3CONH_2', 40) / 2 - ctW('NH_2', 40) / 2, 286]} rx={52} ry={34} at={K1.amide + 10} color={INDIGO} />
				<Tag x={RX} y={330} text="ethanamide: also has N" at={K1.amide + 14} out={K1.unch + 20} size={22} anchor="middle" />
				<Plate p={LT.red} cx={RX} top={LTOP} h={LH} at={K1.amide + 10} />
				<Sx x={RX} y={LTOP - 30} text="amide (aq)" size={30} color={INK} anchor="middle" weight={700} at={K1.amide + 10} />
				<Drop x={dr[0]} y={dr[1]} at={K1.unch - 20} />
				<Tag x={RX} y={LTOP + LH + 20} text="no change" at={K1.unch} size={28} anchor="middle" />
				<Sx x={960} y={900} text="Why is one nitrogen compound a base?" size={44} color={INK} anchor="middle" hand at={K1.so} />
			</Overlay>
		</>
	);
};

// ---------- 2. The amine group ----------
const K2 = cues(sc('amine-group'), {like: 'like ammonia', swapped: 'swapped', keeps: 'keeps its', classify: 'To classify', count: 'count the carbon', one: 'One is primary', two: 'two is secondary', three: 'three is tertiary', not: "That's not", p2: 'propan-two-amine', only: 'only one', prim: ['primary amine', 1]});
export const SceneGroup: React.FC = () => {
	const f = useCurrentFrame();
	const X = 760, Y = 420, SS = 1.25;
	const n = apt(ETA_F, ETA_F.k.n, X, Y, SS);
	const row = [{m: ETA_K, x: 360, at: K2.one, t: 'primary (1°)'}, {m: NME, x: 900, at: K2.two, t: 'secondary (2°)'}, {m: TMA, x: 1450, at: K2.three, t: 'tertiary (3°)'}];
	const RY = 760, RS = 0.9;
	const rowO = vis(f, K2.count - 10) * dimAt(f, K2.p2, 0.25);
	const PX = 760, PY = 400, PS = 1.3;
	const pn = Pn(P2A, P2A.n, PX, PY, PS);
	return (
		<Overlay>
			<TaskLine text="Classify" at={0} size={54} y={130} />
			<g opacity={vis(f, 0, K2.count - 10)}>
				<g opacity={dimAt(f, K2.swapped + 20, 0.35)}><Plate p={AMMONIA} cx={200} top={300} h={320} at={0} /></g>
				<Tag x={200} y={650} text="ammonia solution, NH₃(aq) (M6)" at={6} out={K2.keeps} size={22} anchor="middle" />
				<NMol m={NH3_F} x={X + 130 * SS} y={Y} s={SS} at={K2.like} out={K2.swapped + 10} />
				<NMol m={ETA_F} x={X} y={Y} s={SS} at={K2.swapped + 6} />
				<RingAt c={[n[0], n[1]]} rx={80} ry={110} at={K2.swapped + 30} color={INDIGO} />
				<LP p={n} at={K2.like} dir={0} r={40} pulse={K2.keeps} />
				<Tag x={n[0] + 80} y={n[1] - 30} text="lone pair: electrons not used in bonding" at={K2.keeps} size={26} color={INDIGO} fill="#e2e5f7" />
			</g>
			<g opacity={rowO}>
				{row.map((r, i) => {
					const nn = Pn(r.m, r.m.n, r.x, RY, RS);
					const lit = vis(f, r.at) * (row[i + 1] ? dimAt(f, row[i + 1].at, 0.5) : 1);
					return (
						<g key={i} opacity={vis(f, K2.count + i * 8) * (0.4 + 0.6 * Math.max(lit, prog(f, K2.not, 10)))}>
							<SkN m={r.m} x={r.x} y={RY} s={RS} at={K2.count + i * 8} />
							<NCount n={nn} nb={nbrPts(r.m, r.m.n, r.x, RY, RS)} at={r.at} />
							<Tag x={r.x} y={RY + 110} text={r.t} at={r.at + 6} size={28} color={AMBER_INK} fill="#fff3d6" anchor="middle" />
						</g>
					);
				})}
			</g>
			<g opacity={vis(f, K2.p2 - 6)}>
				<SkN m={P2A} x={PX} y={PY} s={PS} at={K2.p2 - 6} />
				<Crossed x={1140} y={300} text="secondary, like propan-2-ol" at={K2.p2 + 20} cross={K2.only} note="count carbons on the N, not on the C" size={30} />
				<NCount n={pn} nb={nbrPts(P2A, P2A.n, PX, PY, PS)} at={K2.only + 10} />
				<Tag x={1140} y={460} text="primary amine: 1 carbon group on N" at={K2.prim} size={30} color={AMBER_INK} fill="#fff3d6" />
			</g>
			{void K2.classify}
		</Overlay>
	);
};

// ---------- 3. Naming amines ----------
const K3 = cues(sc('naming-amines'), {to: 'To name', drop: 'drop the', add: 'add amine', eth: 'ethanamine', p1: 'propan-one-amine', p2: 'propan-two-amine', if: 'If the nitrogen', longest: 'longest chain', nme: 'N-methylethanamine', two: 'with two', nnd: 'N,N-dimethylethanamine'});
const NND = chainN(4, 1, [[0, -1]], false);
const W3: [number, number, number] = [330, 200, 230];
export const SceneNaming: React.FC = () => {
	const f = useCurrentFrame();
	const o1 = vis(f, 0, K3.if);
	const X = 520, Y = 560, SS = 1.3;
	const ch = [1, 2, 3].map(i => Pn(NME, i, X, Y, SS));
	return (
		<Overlay>
			<TaskLine text="Name it: amines" at={K3.to} size={54} y={130} />
			<NameBuilder x={860} y={250} s={0.72} widths={W3} at={K3.to} fills={[{slot: 1, text: 'ethane', at: K3.drop}, {slot: 1, text: 'ethan', at: K3.add - 6}, {slot: 2, text: 'amine', at: K3.add}, {slot: 0, text: 'N-methyl', at: K3.nme}, {slot: 0, text: 'N,N-dimethyl', at: K3.nnd}]} />
			<g opacity={o1}>
				<SkN m={ETA_K} x={420} y={380} s={1.2} at={0} />
				<Tag x={860} y={400} text="ethanamine (also called ethylamine)" at={K3.eth} size={26} color={NAVY} fill="#e7edf8" />
				<SkN m={P1A} x={360} y={700} s={0.9} at={K3.p1 - 10} />
				<Locants pts={[Pn(P1A, 2, 360, 700, 0.9)]} at={K3.p1} offs={[[0, 50]]} />
				<Sx x={360} y={820} text="propan-1-amine" size={28} color={INK} anchor="middle" weight={700} at={K3.p1} />
				<SkN m={P2A} x={860} y={700} s={0.9} at={K3.p2 - 10} />
				<Locants pts={[Pn(P2A, 1, 860, 700, 0.9)]} at={K3.p2} offs={[[0, 50]]} />
				<Sx x={860} y={820} text="propan-2-amine" size={28} color={INK} anchor="middle" weight={700} at={K3.p2} />
			</g>
			<g opacity={vis(f, K3.if)}>
				<Trace path={ch} at={K3.longest} dur={24} width={26} />
				<SkN m={NME} x={X} y={Y} s={SS} at={K3.if} out={K3.two + 6} />
				<SkN m={NND} x={X} y={Y} s={SS} at={K3.two} />
				<Tag x={860} y={420} text="longest chain on N: ethan-; methyl on N" at={K3.longest} out={K3.nme + 30} size={26} color="#2d6f9e" fill="#e3f0fa" />
				<Tag x={860} y={420} text="N- : the group is on the nitrogen" at={K3.nme + 30} size={28} color={INDIGO} fill="#e2e5f7" />
			</g>
		</Overlay>
	);
};

// ---------- 4. The amide group ----------
const K4 = cues(sc('amide-group'), {amide: 'An amide has', con: 'C O N H', ester: 'like an ester', forms: 'It forms', heated: 'heated strongly', water: 'lose water', name: 'To name an amide', drop: 'drop the e', c1: 'carbon one', eth: 'ethanamide,', prop: 'propanamide'});
export const SceneAmide: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 400, SS = 1.25;
	const c = apt(AMD_F, AMD_F.k.c1, X, Y, SS), o = apt(AMD_F, AMD_F.k.o, X, Y, SS), n = apt(AMD_F, AMD_F.k.n, X, Y, SS);
	const stripO = dimAt(f, K4.name, 0.4);
	return (
		<Overlay>
			<TaskLine text="Name it: amides" at={K4.amide} size={54} y={130} />
			<NMol m={AMD_F} x={X} y={Y} s={SS} at={0} />
			<RingAt c={[(c[0] + o[0]) / 2, (c[1] + o[1]) / 2]} rx={44} ry={78} at={K4.con} color={RED} />
			<RingAt c={n} rx={50} ry={110} at={K4.con + 8} color={INDIGO} />
			<Tag x={900} y={260} text="amide group: –CONH₂ (C=O on N)" at={K4.con} size={30} color={INDIGO} fill="#e2e5f7" />
			<g opacity={vis(f, K4.ester, K4.forms + 20)}>
				<CT x={900} y={380} text="CH_3COOCH_2CH_3" size={36} color={GREY} />
				<Tag x={900} y={400} text="ester (C10): the single-bonded O becomes N" at={K4.ester + 10} size={24} />
			</g>
			<g opacity={stripO}>
				<EqRow left={[{t: 'CH_3COOH', at: K4.heated}, {t: '+', at: K4.heated}, {t: 'H_2NCH_3', at: K4.heated}]} right={[{t: 'CH_3CONHCH_3', at: K4.heated + 14}, {t: '+', at: K4.heated + 14}, {t: 'H_2O', at: K4.heated + 14, ring: 'H_2O', ringAt: K4.water}]} cx={960} y={640} size={40} len={150} arrow={{at: K4.heated + 8, above: [{t: 'strong heat', at: K4.heated + 10}]}} />
				<Tag x={960} y={700} text="condensation: join and lose water (like esterification)" at={K4.water + 6} size={24} anchor="middle" />
			</g>
			<NameBuilder x={560} y={800} s={0.72} widths={W3} at={K4.name} fills={[{slot: 1, text: 'ethane', at: K4.drop}, {slot: 1, text: 'ethan', at: K4.drop + 20}, {slot: 2, text: 'amide', at: K4.drop + 26}, {slot: 0, text: 'N-methyl', at: K4.prop + 40}]} />
			<Locants pts={[c]} at={K4.c1} offs={[[-40, 40]]} />
			<Tag x={1180} y={800} text="C=O carbon is C1: no number" at={K4.c1} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1180} y={870} text="ethanamide, propanamide; N-methylethanamide" at={K4.eth} size={26} />
		</Overlay>
	);
};

// ---------- 5. Amine forces ----------
const K5 = cues(sc('amine-forces'), {now: 'Now the forces', two: 'two N H', hb: 'hydrogen bond,', but: 'But nitrogen', polar: 'less polar', weaker: 'weaker', same: 'same number', boils: 'boils at', n97: 'ninety seven'});
const POL = alc(3, 2);
export const SceneForces: React.FC = () => {
	const f = useCurrentFrame();
	const AX = 360, BX = 860, Y = 420, SS = 1.0;
	const an = Pn(P1A, P1A.n, AX, Y, SS), bo = Pn(POL.m, POL.o, BX, Y, SS);
	const fo = dimAt(f, K5.boils, 0.4);
	return (
		<Overlay>
			<TaskLine text="Forces: amines" at={K5.now} size={54} y={130} />
			<g opacity={fo}>
				<SkN m={P1A} x={AX} y={Y} s={SS} at={0} />
				<SkN m={P1A} x={AX} y={Y + 200} s={SS} at={K5.hb - 10} o={0.6} />
				<SkN m={{...POL.m, labels: [{i: POL.o, text: 'OH'}]}} x={BX} y={Y} s={SS} at={6} />
				<SkN m={{...POL.m, labels: [{i: POL.o, text: 'OH'}]}} x={BX} y={Y + 200} s={SS} at={K5.hb - 10} o={0.6} />
				<Dots a={[an[0] + 30, an[1] + 30]} b={[an[0] + 10, an[1] + 170]} at={K5.hb} color={VIOLET} width={3} />
				<Dots a={[bo[0] + 30, bo[1] + 30]} b={[bo[0] + 10, bo[1] + 170]} at={K5.hb} color={VIOLET} width={6} />
				<Delta x={an[0] + 70} y={an[1] - 30} t="+" at={K5.polar} size={22} />
				<Delta x={bo[0] + 60} y={bo[1] - 30} t="+" at={K5.polar} size={38} />
				<Tag x={96} y={200} text="electronegativity: O 3.4, N 3.0 (Year 11)" at={K5.but} out={K5.same} size={24} />
				<Tag x={96} y={260} text="N–H less polar: smaller δ+, weaker hydrogen bonds" at={K5.polar + 10} out={K5.same} size={26} color={VIOLET} fill="#e6ddf5" />
				<Tag x={610} y={760} text="both 34 electrons" at={K5.same} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			</g>
			<Strip at={K5.boils - 20} x={1560} />
			<Mark T={48} label="48 °C" at={K5.boils} x={1560} left />
			<Mark T={97} label="97 °C" at={K5.n97} x={1560} />
			<Tag x={96} y={860} text="propan-1-amine 48 °C: N–H hydrogen bonds" at={K5.boils + 10} size={28} color={VIOLET} fill="#e6ddf5" />
			<Tag x={96} y={930} text="propan-1-ol 97 °C: O–H hydrogen bonds" at={K5.n97 + 10} size={28} color={VIOLET} fill="#e6ddf5" />
			{void K5.two}{void K5.weaker}{void RED}
		</Overlay>
	);
};

// ---------- 6. Three isomers ----------
const K6 = cues(sc('amine-isomers'), {num: 'The number', iso: 'isomers', p1: 'Propan-one-amine', two: 'has two', nme: 'N-methylethanamine', one: 'only one', t37: 'thirty seven', tri: 'Trimethylamine', none: 'none', t3: 'three degrees', small: 'Small amines', lone: 'lone pair'});
export const SceneIsomers: React.FC = () => {
	const f = useCurrentFrame();
	const RY = 450, RS = 0.95;
	const row = [{m: P1A, x: 240, chip: '2 N–H', at: K6.two, cls: 'primary'}, {m: NME, x: 620, chip: '1 N–H', at: K6.one, cls: 'secondary'}, {m: TMA, x: 1000, chip: '0 N–H', at: K6.none, cls: 'tertiary'}];
	const rowO = dimAt(f, K6.small, 0.3);
	const tn = Pn(TMA, 0, 1000, RY, RS);
	const W = {o: [tn[0] + 190, tn[1] + 70] as V2, a: Math.PI + 0.9};
	return (
		<Overlay>
			<TaskLine text="Forces: count the N–H" at={K6.num} size={54} y={130} />
			<Strip at={-100} x={1560} o={dimAt(f, K6.small, 0.5)} />
			<Mark T={97} label="propan-1-ol 97 °C" at={-100} x={1560} o={0.35} />
			<Mark T={48} label="48 °C" at={-100} x={1560} left />
			<Mark T={37} label="37 °C" at={K6.t37} x={1560} />
			<Mark T={3} label="3 °C" at={K6.t3} x={1560} left />
			<g opacity={rowO}>
				{row.map((r, i) => (
					<g key={i}>
						<SkN m={r.m} x={r.x} y={RY} s={RS} at={K6.iso + i * 8} />
						<Tag x={r.x} y={RY + 120} text={r.cls} at={K6.iso + 10 + i * 8} size={22} color={AMBER_INK} fill="#fff3d6" anchor="middle" />
						<Tag x={r.x} y={RY + 180} text={r.chip} at={r.at} size={32} color={VIOLET} fill="#e6ddf5" anchor="middle" />
					</g>
				))}
				<Tag x={96} y={220} text="all C₃H₉N: similar dispersion" at={K6.iso + 20} out={K6.p1 + 30} size={26} />
				<Tag x={96} y={820} text="fewer hydrogen bonds" at={K6.t37 - 10} out={K6.tri} size={26} />
				<Tag x={96} y={820} text="no hydrogen bonds to each other" at={K6.none + 10} out={K6.small} size={26} />
				<Tag x={1000} y={RY - 160} text="IUPAC: N,N-dimethylmethanamine" at={K6.tri + 20} out={K6.small} size={20} anchor="middle" />
			</g>
			<g opacity={vis(f, K6.small)}>
				<WaterMol p={W} />
				<Dots a={[W.o[0] - 40, W.o[1] - 22]} b={[tn[0] + 36, tn[1] + 14]} at={K6.lone} color={VIOLET} width={6} />
				<Tag x={1080} y={RY + 250} text="water gives, N's lone pair takes" at={K6.lone} size={28} color={VIOLET} fill="#e6ddf5" />
				<Tag x={96} y={900} text="small amines mix with water" at={K6.small + 10} size={26} color={NAVY} fill="#e7edf8" />
			</g>
			{void DISP}{void INK_SOFT}{void GREY}
		</Overlay>
	);
};
export {acidK, amideOf};
