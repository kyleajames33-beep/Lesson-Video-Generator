// M7 G01 scenes 1 to 2d: the hook (stimulus thumbnails, the three checks, four question cards) and question 1 (name two
// skeletal alkenes, classify them): the attempt; the chain tracer, locant counter and name builder for A and B (the
// ghost count from the left fades, the real count runs from the right); the atom count with implied-H ghosts and the
// what-changed card (chain isomers); "2-methylpent-3-ene" crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {AMBER, DrawPath, INK, INK_SOFT, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {BRANCH, BRANCH_INK, CARDC, Crossed, QCardX, HGhosts, Locants, MULTI, NameBuilder, Skel, Tag, Trace, ghostDirs, hCount, nbrsOf, outward, zig, zigOffs} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {UVGlow} from '../chem-m7-c04b/parts';
import {Tally, WhatChanged} from '../chem-m7-c02/parts';
import {CheckList, MiniCard} from '../chem-m6-g01/board';
import {AnsBox, Badge, BondIcon, Checks7, QF, QStrip, SplitIcon, TallyIcon} from './board';
import {BRW, Heading, LAMP, hold, sc} from './common';

// ---------- the two molecules of question 1 (local coordinates) ----------
const A_PTS: V2[] = zig(6, -325, 0, 130, 76);
const A_BONDS: Bond[] = Array.from({length: 5}, (_, i) => (i === 1 ? {a: 1, b: 2, order: 2 as const, color: MULTI} : {a: i, b: i + 1}));
const B_CH: V2[] = zig(5, -260, 30, 130, 76);
const B_PTS: V2[] = [...B_CH, outward(B_CH, 1, 130)];
const B_BONDS: Bond[] = [{a: 0, b: 1}, {a: 1, b: 2}, {a: 2, b: 3, order: 2, color: MULTI}, {a: 3, b: 4}, {a: 1, b: 5}];
export const place = (pts: V2[], x: number, y: number, s: number): V2[] => pts.map(p => [x + p[0] * s, y + p[1] * s]);
/** Implied-H ghosts on every carbon of a skeletal molecule (placed points). */
export const AllGhosts: React.FC<{pts: V2[]; bonds: Bond[]; at: number; out?: number; s?: number; o?: number}> = ({pts, bonds, at, out, s = 1, o = 1}) => (
	<g>{pts.map((p, i) => <HGhosts key={i} p={p} dirs={ghostDirs(p, nbrsOf(pts, bonds, i), hCount(bonds, i))} at={at + i * 5} out={out} len={56 * s} size={26 * s} o={o} />)}</g>
);

// ---------- question 1 card ----------
export const Q1 = ['The skeletal formulas of two hydrocarbons, A and B, are shown.', '(a) Give the IUPAC name of each compound.', '(b) Identify the type of structural isomerism shown by A and B. Justify your answer.'];
/** The two structures inside the card (attempt size: gap 230; strip size: gap 100). */
const CardMols: React.FC<{y: number; s: number; at: number; lab: number}> = ({y, s, at, lab}) => (
	<g>
		<Sx x={300} y={y + lab * 0.36} text="A" size={lab} color={INK} weight={800} at={at} />
		<Skel pts={place(A_PTS, 600, y, s)} bonds={A_BONDS} at={at + 4} width={6 * Math.max(0.6, s)} />
		<Sx x={1000} y={y + lab * 0.36} text="B" size={lab} color={INK} weight={800} at={at + 10} />
		<Skel pts={place(B_PTS, 1300, y, s)} bonds={B_BONDS} at={at + 14} width={6 * Math.max(0.6, s)} />
	</g>
);
export const Q1Strip: React.FC<{under?: {line: number; phrase: string; at: number}[]}> = ({under = []}) => (
	<QStrip lines={Q1} gaps={[100]} under={under}>
		<CardMols y={196} s={0.36} at={-100} lab={30} />
	</QStrip>
);
const ANS_Y = 880;
const AnsQ1: React.FC<{a?: number; b?: number; c?: number}> = ({a = 1e6, b = 1e6, c = 1e6}) => (
	<>
		<AnsBox x={140} y={ANS_Y} w={760} label="(a)" at={-100} parts={[{t: 'A: hex-2-ene', at: a, lit: true}, {t: '     B: 4-methylpent-2-ene', at: b, lit: true}]} />
		<AnsBox x={930} y={ANS_Y} w={850} label="(b)" at={-100} size={24} parts={[{t: 'chain isomers', at: c, lit: true}, {t: ': same C₆H₁₂, both alkenes, different skeleton', at: c + 6}]} />
	</>
);

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {name: 'name a molecule', sort: 'sort its', predict: 'predict', three: 'three checks', which: 'Which bonds', added: 'added or', atoms: 'atoms and', four: 'four HSC-style', pause: 'Pause and', step: 'one step at'});
const Thumb: React.FC<{x: number; y: number; at: number; out: number; children: React.ReactNode}> = ({x, y, at, out, children}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const k = 0.7 + 0.3 * prog(f, at, 16);
	return (
		<g opacity={v} transform={`translate(${x + 165},${y + 115}) scale(${k}) translate(${-(x + 165)},${-(y + 115)})`}>
			<rect x={x} y={y} width={330} height={230} rx={18} fill={CARDC} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			{children}
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const shrink = KH.step + 24;
	return (
		<>
			<Heading text="Hydrocarbon questions: name, sort, react" at={4} size={56} />
			<Overlay>
				<Sx x={96} y={290} text="three checks" size={36} color={INK_SOFT} hand at={KH.three} out={shrink} />
				<CheckList shrink={shrink} rows={[
					{text: 'which bonds?', at: KH.which, icon: <BondIcon />},
					{text: "added or swapped? what conditions?", at: KH.added, icon: <SplitIcon />},
					{text: 'atoms and name check?', at: KH.atoms, icon: <TallyIcon />},
				]} />
				<Thumb x={1060} y={230} at={KH.name} out={KH.four}>
					<Skel pts={place(zig(5, -2, 0, 1, 0.6), 1225, 345, 60)} bonds={[{a: 0, b: 1}, {a: 1, b: 2, order: 2, color: MULTI}, {a: 2, b: 3}, {a: 3, b: 4}]} at={KH.name + 4} width={5} />
				</Thumb>
				<Thumb x={1450} y={230} at={KH.sort} out={KH.four}>
					<Sx x={1615} y={370} text="C_5H_8" size={72} color={INK} anchor="middle" weight={800} at={KH.sort} />
				</Thumb>
				<Thumb x={1060} y={540} at={KH.predict} out={KH.four}>
					<UVGlow x={1225} y={655} rx={130} ry={70} at={KH.predict} pulse={KH.predict + 10} />
					<PlateC p={LAMP} cx={1225} top={600} h={110} />
				</Thumb>
				<Thumb x={1450} y={540} at={KH.predict + 8} out={KH.four}>
					<PlateC p={BRW.orange} cx={1615} top={555} h={200} />
				</Thumb>
				<MiniCard x={1060} y={230} label="Question 1" at={KH.four} />
				<MiniCard x={1450} y={230} label="Question 2" at={KH.four + 6} />
				<MiniCard x={1060} y={540} label="Question 3" at={KH.four + 12} />
				<MiniCard x={1450} y={540} label="Question 4" at={KH.four + 18} />
				<Checks7 at={shrink + 8} />
				{void KH.pause}
			</Overlay>
		</>
	);
};

// ---------- 2a. Question 1 (attempt) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', two: 'Two hydrocarbons', give: 'Give the', then: 'Then identify', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q1} at={KA.two} y={QF.y} size={QF.size} gaps={[230]} />
				<CardMols y={QF.y + 64 + QF.size + 130} s={0.62} at={KA.two + 20} lab={44} />
				<AnsBoxes at={KA.then + 20} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks7 hold={h} />
				{void KA.give}
			</Overlay>
		</>
	);
};
const AnsBoxes: React.FC<{at: number}> = ({at}) => (
	<>
		<AnsBox x={140} y={660} w={760} label="(a)" at={at} />
		<AnsBox x={930} y={660} w={850} label="(b)" at={at + 6} />
	</>
);

// ---------- 2b. Names ----------
const KB = cues(sc('q1-names'), {a: 'with A', longest: 'longest chain', six: 'six carbons', double: 'one double bond', hexene: 'hexene', number: 'Number from', starts: 'starts at', hex2: 'hex-two-ene', b: 'Now B', longest2: ['longest chain', 2], five: 'five carbons', methyl: 'methyl branch', wins: 'wins the', right: 'right-hand', puts: 'That puts', two: ['carbon two', 2], four: 'carbon four', name: 'four-methylpent-two-ene'});
const BX = 620, BY = 620;
export const SceneQ1Names: React.FC = () => {
	const f = useCurrentFrame();
	const A = place(A_PTS, BX, BY, 1);
	const B = place(B_PTS, BX, BY, 1);
	const Bch = B.slice(0, 5);
	const Brev = [...Bch].reverse();
	const offsB = zigOffs(Brev).map((o, i) => (i === 3 ? ([-56, -26] as V2) : o));
	const offsBg = zigOffs(Bch).map((o, i) => (i === 1 ? ([-56, -26] as V2) : o));
	const aOut = KB.b - 6;
	return (
		<Overlay>
			<Badge text="Naming and isomers" at={6} />
			<Q1Strip under={[{line: 0, phrase: 'skeletal formulas', at: KB.a}, {line: 1, phrase: 'IUPAC name', at: KB.a + 8}]} />
			{/* A */}
			<Sx x={BX - 420} y={BY + 14} text="A" size={56} color={INK} weight={800} at={KB.a} out={aOut} />
			<Trace path={A} at={KB.longest} dur={36} out={aOut} tally={[BX - 85, BY + 90]} />
			<g opacity={vis(f, KB.a, aOut)}><Skel pts={A} bonds={A_BONDS} at={KB.a} pulse={{bond: 1, at: KB.double}} /></g>
			<Locants pts={A} at={KB.number} out={aOut} offs={zigOffs(A)} ring={[{i: 1, at: KB.starts}]} />
			<NameBuilder x={1080} y={470} s={0.78} at={KB.a + 10} out={aOut} fills={[{slot: 1, text: 'hex', at: KB.six}, {slot: 2, text: '-ene', at: KB.hexene}, {slot: 2, text: '-2-ene', at: KB.hex2}]} glow={[{slot: 2, from: KB.double, to: KB.hexene + 20}]} />
			{/* B */}
			<Sx x={BX - 420} y={BY + 14} text="B" size={56} color={INK} weight={800} at={KB.b} />
			<Trace path={Bch} at={KB.longest2} dur={32} out={KB.right} tally={[BX - 85, BY + 120]} />
			<Skel pts={B} bonds={B_BONDS} at={KB.b} pulse={{bond: 2, at: KB.wins}} />
			{f >= KB.methyl ? <DrawPath d={`M${B[1][0]},${B[1][1]} L${B[5][0]},${B[5][1]}`} at={KB.methyl} dur={12} color={BRANCH} width={10} /> : null}
			<Tag x={B[5][0] + 30} y={B[5][1] - 30} text="methyl" at={KB.methyl} out={KB.wins} size={26} color={BRANCH_INK} fill="#fff3d6" />
			<Locants pts={Bch} at={KB.right - 20} out={KB.right + 30} offs={offsBg} ghost step={6} />
			<Locants pts={Brev} at={KB.right + 20} offs={offsB} step={6} ring={[{i: 1, at: KB.two}, {i: 3, at: KB.four}]} />
			<Tag x={BX} y={780} text="the multiple bond wins the numbering (C01)" at={KB.wins} out={KB.name} size={26} anchor="middle" />
			<NameBuilder x={1080} y={470} s={0.78} at={KB.b + 10} fills={[{slot: 1, text: 'pent', at: KB.five}, {slot: 2, text: '-2-ene', at: KB.two}, {slot: 0, text: '4-methyl', at: KB.four}]} />
			<AnsQ1 a={KB.hex2 + 16} b={KB.name + 20} />
			<Checks7 ticks={{0: [KB.wins]}} />
			{void KB.puts}{void TEAL}{void AMBER}
		</Overlay>
	);
};

// ---------- 2c. Isomers ----------
const KC = cues(sc('q1-isomers'), {count: 'count the', twelve: 'twelve', six: 'six carbons', same: 'Same formula', alkenes: 'alkenes,', changed: 'What changed', skeleton: 'skeleton', straight: 'straight', branched: 'branched', chain: 'chain isomers'});
export const SceneQ1Isomers: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.62;
	const A = place(A_PTS, 380, 520, s), B = place(B_PTS, 960, 560, s);
	const dimT = dimAt(f, KC.alkenes, 0.3);
	return (
		<Overlay>
			<Badge text="Naming and isomers" at={-100} />
			<Q1Strip under={[{line: 0, phrase: 'skeletal formulas', at: -100}, {line: 1, phrase: 'IUPAC name', at: -100}, {line: 2, phrase: 'Identify the type of structural isomerism', at: KC.chain}, {line: 2, phrase: 'Justify', at: KC.straight}]} />
			<Sx x={90} y={534} text="A" size={40} color={INK} weight={800} at={0} />
			<Sx x={700} y={534} text="B" size={40} color={INK} weight={800} at={0} />
			<Trace path={A} at={KC.skeleton} dur={30} width={26} />
			<Trace path={B.slice(0, 5)} at={KC.skeleton + 10} dur={26} width={26} />
			<Skel pts={A} bonds={A_BONDS} at={-100} width={5} />
			<Skel pts={B} bonds={B_BONDS} at={-100} width={5} />
			<AllGhosts pts={A} bonds={A_BONDS} at={KC.twelve - 20} out={KC.alkenes} s={0.75} />
			<AllGhosts pts={B} bonds={B_BONDS} at={KC.twelve - 10} out={KC.alkenes} s={0.75} />
			<Tally x={640} y={720} text="A: C_6H_12   |   B: C_6H_12" at={KC.twelve} ticks={[KC.twelve + 20, KC.twelve + 26]} o={dimT} size={36} />
			<Tag x={640} y={835} text="CnH2n: one C=C (C03)" at={KC.six} out={KC.alkenes} size={24} anchor="middle" />
			<Tag x={380} y={640} text="straight chain" at={KC.straight} size={26} color={BRANCH_INK} fill="#fff3d6" anchor="middle" />
			<Tag x={960} y={680} text="branched" at={KC.branched} size={26} color={BRANCH_INK} fill="#fff3d6" anchor="middle" />
			<WhatChanged x={1300} y={400} at={KC.alkenes} rows={[{v: 'changed', at: KC.skeleton, lit: KC.skeleton}, {v: 'same: C=C at C2', at: KC.alkenes + 40, grey: true}, {v: 'same: alkenes', at: KC.alkenes + 10, grey: true}]} label={{text: 'chain isomers', at: KC.chain}} />
			<AnsQ1 a={-100} b={-100} c={KC.chain + 12} />
			<Checks7 ticks={{0: [-100], 2: [KC.twelve]}} />
			{void KC.count}{void KC.same}{void KC.changed}
		</Overlay>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {mistake: 'classic mistake', left: 'the left', gives: 'That gives', branch: 'The branch', ending: 'the ending', claim: 'first claim'});
export const SceneQ1Mistake: React.FC = () => {
	const B = place(B_PTS, 1180, 650, 0.85);
	const Bch = B.slice(0, 5), Brev = [...Bch].reverse();
	const offsB = zigOffs(Brev).map((o, i) => (i === 3 ? ([-50, -22] as V2) : o));
	const offsBg = zigOffs(Bch).map((o, i) => (i === 1 ? ([-50, -22] as V2) : o));
	return (
		<Overlay>
			<Badge text="Naming and isomers" at={-100} />
			<Q1Strip under={[{line: 0, phrase: 'skeletal formulas', at: -100}, {line: 1, phrase: 'IUPAC name', at: -100}, {line: 2, phrase: 'Identify the type of structural isomerism', at: -100}, {line: 2, phrase: 'Justify', at: -100}]} />
			<Crossed x={140} y={440} text="B: 2-methylpent-3-ene" at={0} cross={KD.mistake + 12} note="number from the end nearer the C=C" size={40} />
			<Skel pts={B} bonds={B_BONDS} at={KD.left - 10} pulse={{bond: 2, at: KD.claim}} />
			<Locants pts={Bch} at={KD.left} out={KD.ending} offs={offsBg} ghost step={6} />
			<Locants pts={Brev} at={KD.claim - 10} offs={offsB} step={6} ring={[{i: 1, at: KD.claim + 10}]} />
			<Tag x={1180} y={780} text="ending -2-ene: the C=C gets the low number" at={KD.ending} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
			<AnsQ1 a={-100} b={-100} c={-100} />
			<Checks7 ticks={{0: [-100], 2: [-100]}} />
			{void KD.gives}{void KD.branch}{void INK_SOFT}
		</Overlay>
	);
};
