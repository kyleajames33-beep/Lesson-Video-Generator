// C8-11a scenes 9 to 17: reading shifts off the data sheet (ethyl ethanoate, one row at a time), ranges overlap (21 and
// 70; the formula settles it), the memory aid, attempt 1 (four butanols), feedback 1 (2-methylpropan-2-ol), attempt 2
// (propanoic acid or methyl ethanoate, with the data sheet), feedback 2 (52 decides), the decision rule with the Next
// chip, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {
	AMBER_INK, AxisArrow, BUTAN2OL, Box, CARD, Chip, DataSheet13, E1, E2, E3, E4, EDGE, GREYT, GTag, HscTag, INK, INK_SOFT, MEPROP1OL, MOL10, Mistake, MolAt, NAVY, NmrAxis, NmrSpec, PROPANOIC, Pause, PreRing, QPart, Svg, Sx, T, Title, dx, marksCheck, mirror, prog, vis,
} from './parts';
import type {NG, QMark} from './parts';
import {GN, TITLE} from './s1';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 9. reading shifts off the data sheet ----------
const K9 = K('data-sheet', {where: 'Where a', memorise: 'memorise the', take: 'Take ethyl', s171: 'at 171', s60: 'at 60', s21: 'at 21', right: 'the right.'});
const G9: NG = {x: 160, y: 760, w: 1660, h: 170, d0: 220};
export const SceneDataSheet: React.FC = () => (
	<Svg>
		<Title text="Reading shifts off the data sheet" />
		<Sx x={96} y={196} text="where a peak sits tells you what kind of carbon it is" size={38} color={NAVY} hand at={K9.where} />
		<DataSheet13 x={1080} y={230} w={740} rowH={46} size={28} lit={[{i: 8, at: K9.s171, out: K9.s60, color: E4}, {i: 4, at: K9.s60, out: K9.s21, color: E3}, {i: 0, at: K9.s21, color: E2}]} />
		<MolAt m={MOL10.etEthanoate} x={500} y={420} s={1.25} at={K9.take} atoms={[{i: 1, at: K9.s171, color: E4}, {i: 3, at: K9.s60, color: E3}, {i: 0, at: K9.s21, color: E2}, {i: 4, at: K9.s21 + 30, color: E1}]} />
		<Sx x={500} y={580} text="ethyl ethanoate: 4 carbon environments" size={32} color={INK} anchor="middle" weight={800} at={K9.take} />
		<NmrAxis g={G9} />
		<NmrSpec g={G9} tmsTag="TMS" peaks={[
			{d: 171, h: 0.55, color: GREYT, at: K9.take + 20, out: K9.s171}, {d: 171, h: 0.55, color: E4, at: K9.s171, tag: '171: C=O'},
			{d: 60, h: 0.8, color: GREYT, at: K9.take + 26, out: K9.s60}, {d: 60, h: 0.8, color: E3, at: K9.s60, tag: '60: C–O'},
			{d: 21, h: 0.75, color: GREYT, at: K9.take + 32, out: K9.s21}, {d: 21, h: 0.75, color: E2, at: K9.s21, tag: '21', tagDy: -40},
			{d: 14, h: 0.85, color: GREYT, at: K9.take + 38, out: K9.s21 + 30}, {d: 14, h: 0.85, color: E1, at: K9.s21 + 30, tag: '14'},
		]} />
		<GTag x={96} y={610} text="you don't memorise the ranges" size={28} at={K9.memorise} />
		<Sx x={96} y={712} text="alkyl carbons: further from the oxygens, on the right" size={30} color={E2} hand weight={800} at={K9.right - 20} />
	</Svg>
);

// ---------- 10. ranges overlap ----------
const K10 = K('overlap', {overlap: 'ranges overlap,', s21: 'at 21', also: 'also fits', s70: 'at 70', check: 'check the', no: "If there's", points: 'points to', narrows: 'narrows the', job: 'the job'});
const G10: NG = {x: 120, y: 470, w: 820, h: 180, d0: 100};
export const SceneOverlap: React.FC = () => {
	const f = useCurrentFrame();
	const b21 = vis(f, K10.s21 + 10, K10.s70, 12);
	const b70 = prog(f, K10.s70 + 10, 12);
	return (
		<Svg>
			<Title text="Ranges overlap" />
			<Sx x={96} y={196} text="one shift can fit more than one kind of carbon" size={40} color={NAVY} hand at={K10.overlap} />
			<DataSheet13 x={1080} y={150} w={740} rowH={50} size={28} lit={[{i: 0, at: K10.s21, out: K10.s70}, {i: 2, at: K10.also, out: K10.s70}, {i: 4, at: K10.s70 + 10, color: E3}, {i: 1, at: K10.s70 + 20, out: K10.points}]} strike={[{i: 1, at: K10.no + 20}]} />
			<NmrAxis g={G10} step={10} size={24} />
			<NmrSpec g={G10} tms={false} peaks={[{d: 21, h: 0.8, color: GREYT, at: K10.s21, out: K10.s70, tag: '21'}, {d: 70, h: 0.8, color: E3, at: K10.s70, tag: '70'}]} />
			{b21 > 0.01 ? <g opacity={b21}>
				<rect x={dx(G10, 40)} y={G10.y} width={dx(G10, 20) - dx(G10, 40)} height={G10.h} fill={AMBER_INK} opacity={0.15} />
				<Sx x={dx(G10, 30)} y={G10.y - 12} text="both fit: alkyl, or next to C=O" size={28} color={AMBER_INK} anchor="middle" hand weight={800} at={ON} />
			</g> : null}
			{b70 > 0.01 ? <g opacity={b70}>
				<rect x={dx(G10, 70)} y={G10.y} width={dx(G10, 50) - dx(G10, 70)} height={G10.h} fill={E3} opacity={0.12} />
				<Sx x={dx(G10, 60)} y={G10.y - 12} text="C–O, or C–Cl / C–Br?" size={28} color={E3} anchor="middle" hand weight={800} at={ON} />
			</g> : null}
			<Chip x={120} y={820} text="formula: C_4H_10O" size={36} color={NAVY} ink={INK} at={K10.check} />
			<Sx x={540} y={862} text="no Cl or Br → C–O" size={36} color={E3} hand weight={800} at={K10.points} />
			<Chip x={120} y={920} text="count + shifts + formula" size={40} color={AMBER_INK} ink={INK} at={K10.job - 20} sw={4} />
			{void E1}
		</Svg>
	);
};

// ---------- 11. memory aid ----------
const K11 = K('memory-aid', {two: 'Two lines', swap: 'Carbons that', further: 'further left', check: 'check the'});
const G11: NG = {x: 860, y: 560, w: 940, h: 160, d0: 220};
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const sw = vis(f, K11.swap + 20, K11.further, 14);
	return (
		<Svg>
			<Sx x={96} y={170} text="Carbons that swap share a peak." size={60} color={NAVY} hand at={K11.swap} />
			<MolAt m={MOL10.propan2ol} x={380} y={420} s={1.4} atoms={[{i: 0, at: K11.swap + 10, color: E1}, {i: 2, at: K11.swap + 10, color: E1}, {i: 1, at: K11.swap + 10, color: E2}]} />
			<line x1={380} x2={380} y1={320} y2={540} stroke={NAVY} strokeWidth={4} strokeDasharray="12 9" opacity={prog(f, K11.swap + 10, 12)} />
			{sw > 0.01 ? <g opacity={0.4 * sw}><MolAt m={mirror(MOL10.propan2ol)} x={380} y={420} s={1.4} color={E1} labelColor={E1} /></g> : null}
			<Sx x={860} y={330} text="Further left: more deshielded." size={50} color={NAVY} hand at={K11.further} />
			<Sx x={860} y={400} text="Check the data-sheet group." size={50} color={NAVY} hand at={K11.check} />
			<NmrAxis g={G11} size={24} />
			{[[50, 90, E2, 'C–O'], [90, 160, GREYT, 'C=C, aromatic'], [160, 220, E4, 'C=O']].map(([a, b, c, t], i) => <g key={i} opacity={prog(f, K11.check + i * 10, 12)}>
				<rect x={dx(G11, b as number)} y={G11.y} width={dx(G11, a as number) - dx(G11, b as number)} height={G11.h} fill={c as string} opacity={0.18} />
				<Sx x={dx(G11, ((a as number) + (b as number)) / 2)} y={G11.y + 40} text={t as string} size={28} color={c as string} anchor="middle" weight={800} at={ON} />
			</g>)}
			<AxisArrow x0={dx(G11, 20)} x1={dx(G11, 200)} y={G11.y + G11.h + 110} text="more deshielded" at={K11.further} />
			<GTag x={860} y={480} text="different groups, different reasons" size={28} at={K11.check + 20} />
		</Svg>
	);
};

// ---------- 12. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: which butanol?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={236} w={1660} size={40} />
		<QPart blocks={Q1_DEM} x={126} y={480} w={1660} size={44} />
		{['butan-1-ol', 'butan-2-ol', '2-methylpropan-1-ol', '2-methylpropan-2-ol'].map((n, i) => <Chip key={n} x={126 + i * 410} y={600} text={n} size={34} color={NAVY} ink={INK} />)}
		<Pause h={hold('attempt-1')} at={KA.pause} tx={126} ty={880} cx={1700} cy={880} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 13. feedback 1 ----------
const KB = K('feedback-1', {its: "It's 2-methylpropan-2-ol.", three: 'three methyl', s31: 'at 31.', central: 'The central', s69: 'at 69.', butan: 'Butan-1-ol and', gives: 'gives three.', slip: 'the slip'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'two peaks', at: KB.three},
	{phrase: '31 ppm', at: KB.s31},
	{phrase: '69 ppm', at: KB.s69},
]);
const GF: NG = {x: 120, y: 640, w: 760, h: 180, d0: 100};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const dm = prog(f, KB.butan, 12);
	return (
		<Svg>
			<Title text="Feedback: the methyls swap" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={200} />
			<QPart blocks={Q1_STEM} marks={M_B} x={64} y={204} w={1736} size={30} />
			<QPart blocks={Q1_DEM} marks={M_B} x={64} y={310} w={1736} size={30} />
			<MolAt m={MOL10.tBuOH} x={300} y={470} s={0.95} atoms={[{i: 1, at: KB.three, color: E1}, {i: 2, at: KB.three, color: E1}, {i: 3, at: KB.three, color: E1}, {i: 0, at: KB.s69, color: E2}]} />
			<Sx x={480} y={440} text="three CH_3 swap: one environment" size={30} color={E1} hand weight={800} at={KB.three} />
			<Sx x={480} y={500} text="central C carries the OH: C–O, 50 to 90" size={30} color={E2} hand weight={800} at={KB.s69} />
			<NmrAxis g={GF} step={20} size={24} />
			<NmrSpec g={GF} peaks={[{d: 69, h: 0.5, color: E2, at: KB.s69, tag: '69'}, {d: 31, h: 0.85, color: E1, at: KB.s31, tag: '31'}]} />
			{[{m: MOL10.butan1ol, n: 'butan-1-ol', c: '4'}, {m: BUTAN2OL, n: 'butan-2-ol', c: '4'}, {m: MEPROP1OL, n: '2-methylpropan-1-ol', c: '3'}].map((q, i) => (
				<g key={q.n} opacity={1 - 0.45 * dm}>
					<MolAt m={q.m} x={1150 + (i % 2) * 380} y={470 + Math.floor(i / 2) * 230} s={0.6} />
					<Sx x={1150 + (i % 2) * 380} y={540 + Math.floor(i / 2) * 230} text={q.n} size={26} color={INK} anchor="middle" weight={800} at={ON} />
					<Chip x={1150 + (i % 2) * 380} y={560 + Math.floor(i / 2) * 230} text={`${q.c} peaks`} size={28} color={GREYT} ink={INK} anchor="middle" at={KB.butan + i * 12} />
				</g>
			))}
			<Mistake x={1060} y={900} text="4 carbons, so 4 peaks" size={38} at={KB.slip - 30} cross={KB.slip} note="count environments, not atoms" noteW={740} />
			{void CARD}{void EDGE}{void INK_SOFT}{void E3}
		</Svg>
	);
};

// ---------- 14. attempt 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: acid or ester?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={236} w={880} size={38} />
		<QPart blocks={Q2_DEM} x={126} y={560} w={880} size={40} />
		<DataSheet13 x={1060} y={190} w={740} rowH={50} size={28} dimAll={false} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={126} ty={870} cx={1700} cy={880} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 15. feedback 2 ----------
const KD = K('feedback-2', {its: "It's methyl", s171: 'at 171', range: 'range covers', s52: 'at 52', sits: 'It sits', ester: "ester's methyl", prop: 'Propanoic acid', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: '171 ppm', at: KD.s171},
	{phrase: '52 ppm', at: KD.s52},
]);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: 52 ppm decides" />
			<HscTag />
			<Box x={40} y={150} w={1000} h={250} />
			<QPart blocks={Q2_STEM} marks={M_D} x={64} y={200} w={950} size={28} />
			<QPart blocks={Q2_DEM} marks={M_D} x={64} y={330} w={950} size={28} />
			<DataSheet13 x={1080} y={150} w={740} rowH={46} size={27} lit={[{i: 8, at: KD.s171, color: E4}, {i: 4, at: KD.s52, color: E3}]} />
			<Chip x={1080} y={740} text="160 to 185: both candidates" size={30} color={E4} ink={E4} at={KD.range} />
			<MolAt m={MOL10.meEthanoate} x={330} y={560} s={1.1} at={KD.s52} atoms={[{i: 3, at: KD.sits, color: E3}, {i: 1, at: KD.s171, color: E4}]} />
			<Sx x={330} y={690} text="methyl ethanoate" size={32} color={INK} anchor="middle" weight={800} at={KD.s52} />
			<Sx x={560} y={520} text="O–CH_3: C–O range, 50 to 90" size={30} color={E3} hand weight={800} at={KD.ester} />
			<g opacity={(1 - 0.45 * prog(f, KD.prop + 40, 12)) * prog(f, KD.prop, 12)}>
				<MolAt m={PROPANOIC} x={780} y={800} s={0.7} />
				<Sx x={780} y={880} text="propanoic acid: about 181, 28, 9" size={28} color={GREYT} anchor="middle" weight={800} at={ON} />
				<Sx x={780} y={920} text="nothing in 50 to 90" size={28} color={GREYT} anchor="middle" hand weight={800} at={ON} />
			</g>
			<Mistake x={1080} y={830} text="171 ppm, so an acid" size={38} at={KD.trap - 30} cross={KD.trap} note="160 to 185: acids and esters" noteW={740} />
			{void E2}{void E1}{void vis}
		</Svg>
	);
};

// ---------- 16. decision rule and handoff ----------
const KR = K('decision-handoff', {count: 'count the', sym: 'use symmetry', read: 'Then read', formula: 'let the', next: 'Next,'});
const STEPS: [string, string, keyof typeof KR][] = [
	['1', 'count peaks = carbon environments (swap test)', 'count'],
	['2', 'read each shift off the data sheet', 'read'],
	['3', 'check the count and shifts against the formula', 'formula'],
];
const G16: NG = {x: 300, y: 720, w: 1000, h: 130, d0: 220};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="With a carbon-13 spectrum" />
			{STEPS.map(([n, t, k], i) => {
				const v = prog(f, KR[k], 12);
				if (v <= 0.01) return null;
				const y = 180 + i * 140;
				return (
					<g key={n} opacity={v}>
						<rect x={96} y={y} width={1560} height={116} rx={22} fill={CARD} stroke={NAVY} strokeWidth={3} />
						<circle cx={160} cy={y + 58} r={38} fill={NAVY} />
						<Sx x={160} y={y + 74} text={n} size={46} color={CARD} anchor="middle" weight={800} at={ON} />
						<Sx x={230} y={y + 76} text={t} size={44} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<NmrAxis g={G16} size={26} title="ethyl ethanoate" />
			<NmrSpec g={G16} lw={6} peaks={[{d: 171, h: 0.55, color: E4}, {d: 60, h: 0.8, color: E3}, {d: 21, h: 0.75, color: E2}, {d: 14, h: 0.85, color: E1}]} />
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={1300} y={900} width={524} height={100} rx={50} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1562} y={964} text="Next: proton NMR" size={40} color={INK} anchor="middle" hand at={ON} />
			</g>
			{void GN}{void TITLE}{void T}
		</Svg>
	);
};

// ---------- 17. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={40} aidTop={660} tag="carbon-13 NMR" aids={['Carbons that swap share a peak.', 'Further left: more deshielded. Check the data-sheet group.']} notes={[
		'¹³C and ¹H nuclei are tiny magnets; radio waves flip them.',
		'Nearby electronegative atoms deshield: the peak sits further left.',
		'TMS sets 0 ppm and is not counted.',
		'Number of ¹³C peaks = number of carbon environments; heights are not counts.',
		'Read shifts off the data sheet; the formula settles overlaps.',
	]} />
);
