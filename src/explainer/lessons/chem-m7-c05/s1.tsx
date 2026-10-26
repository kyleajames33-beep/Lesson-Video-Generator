// M7 C05 scenes 1 to 7: the hook (fewer electrons than butane, yet ethanol boils 80 °C higher and mixes with water), the
// hydroxyl group (ethane gains an OH; polar O–H; lone pairs; the model), naming alcohols, the OH wins the numbering,
// primary, secondary and tertiary (the carbon counter), the class comes from the C–OH carbon, and hydrogen bonds.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TaskLine} from '../chem-m6-c01/parts';
import {BallStick, CHAIN_INK, Crossed, DISP, Dots, Locants, NameBuilder, NameLbl, Tag, Trace, VIOLET, ethanol3d, proj, zigOffs} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Mol2D, PlateC, apt, cmol, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {BOTTLE, BURNER, Heading, sc} from './common';
import {AlcAt, Counter, Delta, INK, LonePairs, OXY_INK, P, RED, alc} from './parts';

const GREY = '#6b6358';
const chainOf = (a: ReturnType<typeof alc>, n: number, x: number, y: number, s: number): V2[] => Array.from({length: n}, (_, i) => P(a.m, x, y, s, i));

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {butane: 'mostly butane', ethanol: ['ethanol.', 1], fewer: 'fewer electrons', seventy: 'seventy eight', water: 'water,', barely: 'barely', oh: ['O H group.', 1], how: 'So how'});
const ETH = alc(2, 1);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dimC = dimAt(f, K1.oh, 0.35);
	return (
		<>
			<Heading text="Alcohols: what does the OH group change?" at={4} size={56} />
			<Overlay>
				<PlateC p={BURNER} cx={420} top={330} h={300} />
				<g opacity={dimC}>
					<Tag x={420} y={660} text="butane, C_4H_10: 34 electrons, boils near −1 °C" at={K1.butane} size={26} anchor="middle" />
					<Tag x={420} y={720} text="barely dissolves" at={K1.barely} size={24} anchor="middle" />
					<Tag x={1450} y={660} text="C_2H_5OH: 26 electrons" at={K1.fewer} size={26} anchor="middle" />
					<Tag x={1450} y={720} text="boils at 78 °C" at={K1.seventy} size={26} anchor="middle" />
					<Tag x={1450} y={780} text="mixes with water" at={K1.water} size={24} anchor="middle" />
				</g>
				<g opacity={vis(f, K1.ethanol)}><PlateC p={BOTTLE} cx={1450} top={lerp0(f, K1.ethanol)} h={300} /></g>
				<g opacity={vis(f, K1.seventy + 12)}>
					<path d="M700,560 L1180,560 M1160,546 L1180,560 L1160,574" fill="none" stroke={RED} strokeWidth={5} strokeLinecap="round" />
					<Sx x={940} y={540} text="about +80 °C" size={40} color={RED} anchor="middle" hand at={K1.seventy + 12} />
				</g>
				<AlcAt a={ETH} x={1000} y={380} s={1.1} at={K1.oh - 10} ring={K1.oh} />
				{void K1.how}{void INK}
			</Overlay>
		</>
	);
};
const lerp0 = (f: number, at: number) => 330 + 40 * (1 - Math.min(1, Math.max(0, (f - at) / 16)));

// ---------- 2. The hydroxyl group ----------
const K2 = cues(sc('hydroxyl-group'), {take: 'take ethane', swap: 'swap one', gives: 'That gives', alcohol: 'alcohol.', hydroxyl: 'hydroxyl group', cov: 'covalently', inside: 'Inside the', polar: 'polar:', lone: 'lone pairs'});
const ETHANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const ETHOH = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH*'}]);
const E3 = ethanol3d();
export const SceneHydroxyl: React.FC = () => {
	const f = useCurrentFrame();
	const X = 420, Y = 520, S = 1.3;
	const o = apt(ETHOH, ETHOH.k['1r'], X, Y, S), h = apt(ETHOH, ETHOH.k['1rH'], X, Y, S);
	const ohX = (o[0] + h[0]) / 2;
	return (
		<Overlay>
			<TaskLine text="The OH group" at={0} size={54} y={130} />
			<Mol2D m={ETHANE} x={X} y={Y} s={S} at={K2.take} out={K2.swap + 26} hideAt={{[ETHANE.k['1r']]: K2.swap}} />
			<Mol2D m={ETHOH} x={X} y={Y} s={S} at={K2.swap + 14} fly={{[ETHOH.k['1r']]: {from: loc([X + 420, Y - 200], X, Y, S), at: K2.swap + 14, dur: 26}, [ETHOH.k['1rH']]: {from: loc([X + 500, Y - 200], X, Y, S), at: K2.swap + 18, dur: 26}}} />
			<g opacity={vis(f, K2.hydroxyl)}><ellipse cx={ohX} cy={o[1]} rx={88} ry={46} fill="none" stroke={RED} strokeWidth={4} /></g>
			<NameBuilder x={180} y={760} s={0.75} at={K2.gives} fills={[{slot: 1, text: 'ethan', at: K2.gives + 6}, {slot: 2, text: 'ol', at: K2.gives + 14}]} />
			<Tag x={180} y={260} text="alcohol: OH on a carbon with only single bonds" at={K2.alcohol} size={28} color={OXY_INK} fill="#f5ddd3" o={dimAt(f, K2.polar, 0.5)} />
			<Tag x={180} y={320} text="covalent OH, not OH⁻: not alkaline" at={K2.cov} out={K2.inside + 20} size={24} />
			<g opacity={vis(f, K2.inside)}><BallStick atoms={E3.atoms} bonds={E3.bonds} orders={E3.orders} cx={1380} cy={500} unitPx={230} yaw={0.4} pitch={0.25} /></g>
			<Sx x={1380} y={720} text="model of ethanol" size={26} color={GREY} anchor="middle" weight={700} at={K2.inside} />
			<Delta x={o[0]} y={o[1] - 50} t="−" at={K2.polar + 10} />
			<Delta x={h[0] + 6} y={h[1] - 50} t="+" at={K2.polar + 30} />
			<Tag x={o[0] - 60} y={o[1] + 120} text="polar O–H: intramolecular" at={K2.polar} size={26} color="#24407a" fill="#e7edf8" />
			<LonePairs p={o} at={K2.lone} a0={1.0} />
			<Tag x={o[0] - 60} y={o[1] + 180} text="2 lone pairs" at={K2.lone + 6} size={26} color={RED} fill="#f9e1dc" />
		</Overlay>
	);
};

// ---------- 3. Naming alcohols ----------
const K3 = cues(sc('naming-alcohols'), {naming: 'Naming uses', longest: 'longest chain', take: "Take the alkane's", ol: ['ol.', 1], number: 'Number from', p1: 'propan-one-ol.', move: 'Move the', p2: 'propan-two-ol.', meth: 'Methanol and', one: 'one place'});
const P1 = alc(3, 2), P2 = alc(3, 1), ME = alc(1, 0), ET = alc(2, 1);
export const SceneNaming: React.FC = () => {
	const f = useCurrentFrame();
	const ch = chainOf(P1, 3, 520, 470, 1.4);
	const up = dimAt(f, K3.move, 0.45);
	return (
		<Overlay>
			<TaskLine text="Name it" at={K3.naming} size={54} y={130} />
			<g opacity={up}>
				<Trace path={ch} at={K3.longest} dur={30} />
				<AlcAt a={P1} x={520} y={470} s={1.4} at={K3.naming + 10} ring={K3.longest} />
				<Locants pts={[...ch].reverse()} at={K3.number + 10} offs={zigOffs([...ch].reverse())} ring={[{i: 0, at: K3.number + 40}]} />
			</g>
			<NameBuilder x={980} y={330} s={0.8} at={K3.naming + 10} fills={[{slot: 1, text: 'propane', at: K3.take}, {slot: 1, text: 'propan', at: K3.ol - 16}, {slot: 2, text: 'ol', at: K3.ol}, {slot: 2, text: '-1-ol', at: K3.p1}]} />
			<NameLbl x={1320} y={520} parts={[['propan', CHAIN_INK], ['-1-ol', OXY_INK]]} at={K3.p1 + 10} size={40} o={dimAt(f, K3.meth, 0.6)} />
			<AlcAt a={P2} x={520} y={800} s={1.0} at={K3.move} ring={K3.move + 20} />
			<NameLbl x={1320} y={740} parts={[['propan', CHAIN_INK], ['-2-ol', OXY_INK]]} at={K3.p2} size={40} />
			<Tag x={1320} y={780} text="c02: position isomers" at={K3.p2 + 10} out={K3.meth} size={22} anchor="middle" />
			<AlcAt a={ME} x={1060} y={900} s={0.8} at={K3.meth} />
			<Sx x={1100} y={970} text="methanol" size={28} color={INK} anchor="middle" weight={700} at={K3.meth} />
			<AlcAt a={ET} x={1400} y={900} s={0.8} at={K3.meth + 10} />
			<Sx x={1400} y={970} text="ethanol" size={28} color={INK} anchor="middle" weight={700} at={K3.meth + 10} />
			<Tag x={1560} y={880} text="one position only" at={K3.one} size={28} />
		</Overlay>
	);
};

// ---------- 4. The OH wins the numbering ----------
const K4 = cues(sc('oh-wins-numbering'), {wins: 'wins the', chain: 'chain of', left: 'from the left', name: 'four-methylpentan-two-ol.', right: 'From the right', wrong: 'wrong.'});
const MP = alc(5, 1, [3]);
export const SceneWins: React.FC = () => {
	const ch = chainOf(MP, 5, 700, 560, 1.5);
	return (
		<Overlay>
			<TaskLine text="Name it: the OH wins" at={0} size={54} y={130} />
			<Tag x={96} y={190} text="C01: the multiple bond wins; now the OH wins" at={K4.wins} size={26} />
			<Trace path={ch} at={K4.chain} dur={30} />
			<AlcAt a={MP} x={700} y={560} s={1.5} at={0} ring={K4.wins} />
			<Locants pts={ch} at={K4.left} out={K4.right} offs={zigOffs(ch)} ring={[{i: 1, at: K4.left + 26}, {i: 3, at: K4.left + 80}]} />
			<Locants pts={[...ch].reverse()} at={K4.right + 10} offs={zigOffs([...ch].reverse())} ghost />
			<NameBuilder x={1100} y={330} s={0.72} at={K4.chain} fills={[{slot: 0, text: '4-methyl', at: K4.name}, {slot: 1, text: 'pentan', at: K4.name + 6}, {slot: 2, text: '-2-ol', at: K4.name + 12}]} />
			<Crossed x={1100} y={720} text="2-methylpentan-4-ol" at={K4.wrong - 40} cross={K4.wrong} note="the OH gets the lower number" size={36} />
		</Overlay>
	);
};

// ---------- 5. Primary, secondary, tertiary ----------
const K5 = cues(sc('classify-alcohols'), {count: 'count the', one: 'One carbon', sec: 'secondary,', ter: 'tertiary,', only: 'Count only', not: 'not hydrogens', meth: 'Methanol has', counted: 'counted as'});
const C1 = alc(2, 1), C2 = alc(3, 1), C3 = alc(3, 1, [1]);
const ClassChip: React.FC<{x: number; y: number; t: string; at: number; o?: number}> = ({x, y, t, at, o}) => <Tag x={x} y={y} text={t} at={at} size={30} color={RED} fill="#f9e1dc" anchor="middle" o={o} />;
export const SceneClassify: React.FC = () => {
	const f = useCurrentFrame();
	const S = 1.5, xs = [620, 1080, 1560], Y = 560;
	const c = (a: ReturnType<typeof alc>, x: number, i: number) => P(a.m, x, Y, S, i);
	const late = dimAt(f, K5.counted + 30, 0.3);
	return (
		<Overlay>
			<TaskLine text="Classify it" at={0} size={54} y={130} />
			<AlcAt a={C1} x={xs[0]} y={Y} s={S} at={0} letters />
			<AlcAt a={C2} x={xs[1]} y={Y} s={S} at={6} letters />
			<AlcAt a={C3} x={xs[2]} y={Y} s={S} at={12} letters />
			<Counter c={c(C1, xs[0], 1)} nb={[c(C1, xs[0], 0)]} at={K5.count + 10} />
			<Counter c={c(C2, xs[1], 1)} nb={[c(C2, xs[1], 0), c(C2, xs[1], 2)]} at={K5.sec} />
			<Counter c={c(C3, xs[2], 1)} nb={[c(C3, xs[2], 0), c(C3, xs[2], 2), c(C3, xs[2], 3)]} at={K5.ter} />
			<ClassChip x={xs[0]} y={720} t="primary (1°)" at={K5.one + 20} />
			<ClassChip x={xs[1]} y={720} t="secondary (2°)" at={K5.sec + 20} />
			<ClassChip x={xs[2]} y={720} t="tertiary (3°)" at={K5.ter + 30} />
			<Tag x={xs[2]} y={800} text="H and O: not counted" at={K5.not} size={24} anchor="middle" o={late} />
			<g opacity={late}>
				<AlcAt a={ME} x={170} y={Y} s={0.9} at={K5.meth} letters />
				<Counter c={P(ME.m, 170, Y, 0.9, 0)} nb={[]} at={K5.meth + 10} />
				<ClassChip x={210} y={720} t="primary (by convention)" at={K5.counted} />
			</g>
			<Tag x={960} y={900} text="reactions: later video" at={K5.counted + 20} out={K5.counted + 60} size={22} anchor="middle" />
			{void K5.only}
		</Overlay>
	);
};

// ---------- 6. The class comes from the C–OH carbon ----------
const K6 = cues(sc('class-not-branching'), {dont: "Don't judge", name: 'Two-methylpropan-one-ol', one: 'just one', prim: 'primary.', count: 'then count'});
const MPO = alc(3, 2, [1]);
export const SceneNotBranching: React.FC = () => {
	const X = 820, Y = 560, S = 1.4;
	return (
		<Overlay>
			<TaskLine text="Classify it: count, don't guess" at={0} size={54} y={130} />
			<AlcAt a={MPO} x={X} y={Y} s={S} at={0} letters />
			<Tag x={1240} y={380} text="branched, so tertiary?" at={K6.dont + 30} out={K6.name + 20} size={30} o={0.7} />
			<Counter c={P(MPO.m, X, Y, S, 2)} nb={[P(MPO.m, X, Y, S, 1)]} at={K6.one} />
			<Tag x={1240} y={540} text="primary (1°)" at={K6.prim} size={34} color={RED} fill="#f9e1dc" />
			<Tag x={560} y={800} text="1 find the C–OH carbon;  2 count its carbons" at={K6.count - 10} size={32} color="#24407a" fill="#e7edf8" />
		</Overlay>
	);
};

// ---------- 7. Hydrogen bonds ----------
const K7 = cues(sc('hydrogen-bonds'), {back: 'Back to', liquid: 'In liquid', lone: 'lone pair', hb: "That's a", donor: 'the donor', still: "It's still", disp: 'dispersion'});
const OH_H = E3.bonds.find(([a, b]) => (a === 2 && E3.atoms[b].el === 'H') || (b === 2 && E3.atoms[a].el === 'H'))!;
const HI = OH_H[0] === 2 ? OH_H[1] : OH_H[0];
const CL: {x: number; y: number; yaw: number}[] = [{x: 640, y: 470, yaw: 0.2}, {x: 1040, y: 420, yaw: 2.6}, {x: 1080, y: 740, yaw: 0.9}, {x: 660, y: 770, yaw: 3.6}];
export const SceneHBonds: React.FC = () => {
	const f = useCurrentFrame();
	const U = 95;
	const pts = CL.map(c => proj(E3, c.x, c.y, U, c.yaw, 0.3));
	const pairs: [number, number][] = [[0, 1], [1, 2], [2, 3]];
	return (
		<Overlay>
			<TaskLine text="Why higher? Hydrogen bonds" at={K7.back} size={54} y={130} />
			<g opacity={vis(f, K7.liquid)}>
				{CL.map((c, i) => <BallStick key={i} atoms={E3.atoms} bonds={E3.bonds} orders={E3.orders} cx={c.x} cy={c.y} unitPx={U} yaw={c.yaw} pitch={0.3} glowAtoms={f >= K7.still && f < K7.disp && i === 0 ? (k => (k === 2 || k === HI ? '#bbb4a8' : undefined)) : undefined} />)}
				{pts.map((p, i) => <g key={'d' + i}><Delta x={p[2][0]} y={p[2][1] - 34} t="−" at={K7.liquid + 10} size={24} /><Delta x={p[HI][0]} y={p[HI][1] - 22} t="+" at={K7.liquid + 16} size={24} /></g>)}
			</g>
			{pairs.map(([a, b], k) => <Dots key={k} a={pts[a][HI]} b={pts[b][2]} at={K7.lone + k * 30} color={VIOLET} width={6} />)}
			{[[0, 3], [1, 2]].map(([a, b], k) => <Dots key={'p' + k} a={pts[a][0]} b={pts[b][0]} at={K7.disp + k * 10} color={DISP} width={5} flicker />)}
			<Tag x={1280} y={300} text="hydrogen bond" at={K7.hb} size={30} color={VIOLET} fill="#e6ddf5" />
			<Tag x={1280} y={360} text="donor: H;  acceptor: lone pair on O" at={K7.donor} size={24} o={dimAt(f, K7.still, 0.5)} />
			<Tag x={1280} y={420} text="c02: ethanol 78 °C, methoxymethane −25 °C" at={K7.hb + 20} out={K7.donor + 40} size={22} />
			<Tag x={1280} y={480} text="covalent O–H: much stronger" at={K7.still} out={K7.disp} size={26} color={INK} fill="#fffdf8" />
			<Tag x={1280} y={540} text="dispersion forces too" at={K7.disp + 10} size={28} color="#2d6f9e" fill="#e3f0fa" />
			{void prog}
		</Overlay>
	);
};
