// C8-09 scenes 13 to 18: attempt 1 (pentan-2-one or pentan-3-one, with the pentan-3-one spectrum), feedback 1 (givens
// underlined, the 86 to 57 gap, pentan-3-one's two ethyl sides, pentan-2-one's expected 43 dashed over the real small
// 43, crossed CHO slip), attempt 2 (bromine, with the bromomethane spectrum), feedback 2 (M at 94, M+2 at 96, the 94 to
// 15 gap, crossed "furthest right" trap), the decision rule with the Next chip, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {
	AMBER_INK, Box, CARD, Chip, EDGE, FRAG, FRAG_INK, GOLD, GOLD_INK, GREYT, GTag, GapBracket, HscTag, INK, INK_SOFT, ISO, Mistake, MolAt, MolSplit, NAVY, NEUT, Pause, PeakLab, PreRing, QPart, SPEC, SpecAxes, StickSpec, Svg, Sx, T, Title, marksCheck, prog, sxm, syh,
} from './parts';
import type {QMark, SG} from './parts';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;
const P3 = SPEC.pentan3one, BR = SPEC.bromomethane;

// ---------- 13. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
const GA: SG = {x: 230, y: 520, w: 1060, h: 380, m0: 10, m1: 100};
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: which pentanone?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={226} w={1660} size={40} />
		<QPart blocks={Q1_DEM} x={126} y={362} w={1660} size={42} />
		<SpecAxes g={GA} at={ON} size={26} />
		<StickSpec g={GA} bars={P3} />
		{[29, 57, 86].map(m => <PeakLab key={m} g={GA} mz={m} h={(P3.find(b => b[0] === m) ?? [m, 0])[1]} text={`${m}`} size={30} color={INK} dy={-14} weight={800} hand={false} />)}
		<Chip x={1400} y={540} text="pentan-2-one" size={36} color={NAVY} ink={INK} />
		<Chip x={1400} y={620} text="pentan-3-one" size={36} color={NAVY} ink={INK} />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={1400} ty={780} cx={1700} cy={880} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 14. feedback 1 ----------
const KB = K('feedback-1', {minus: 'Eighty-six minus', t29: 'twenty-nine,', ethyl: 'an ethyl', leaving: 'leaving C', p3has: 'Pentan-3-one has', either: 'either break', p2: 'Pentan-2-one would', big: 'big peak', so: "So it's", slip: 'the slip', neither: 'neither candidate'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'molar mass 86', at: KB.t29},
	{phrase: 'base peak is at m/z', at: KB.t29 + 8},
	{phrase: 'strong peak at m/z', at: KB.either + 50},
]);
const GB: SG = {x: 190, y: 430, w: 900, h: 400, m0: 10, m1: 100};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const exp = prog(f, KB.p2, 12);
	return (
		<Svg>
			<Title text="Feedback: follow the gap" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={180} />
			<QPart blocks={Q1_STEM} marks={M_B} x={64} y={204} w={1736} size={32} />
			<QPart blocks={Q1_DEM} marks={M_B} x={64} y={300} w={1736} size={30} />
			<SpecAxes g={GB} at={ON} size={26} />
			<StickSpec g={GB} bars={P3} paint={[{mz: 86, color: GOLD, at: KB.minus}]} />
			<PeakLab g={GB} mz={86} h={21.2} text="M^{+} 86" size={30} color={GOLD_INK} dy={-16} weight={800} at={KB.minus} />
			<GapBracket g={GB} a={57} b={86} y={620} text="− 29: C_2H_5" at={KB.t29} size={32} />
			<PeakLab g={GB} mz={57} h={100} text="C_2H_5CO^{+} = 57" at={KB.leaving} size={30} color={FRAG_INK} dx={16} dy={30} anchor="start" weight={800} />
			<PeakLab g={GB} mz={29} h={59.4} text="C_2H_5^{+}" at={KB.either + 50} size={30} color={FRAG_INK} dx={-12} dy={-14} anchor="end" weight={800} />
			{exp > 0.01 ? <g opacity={exp}>
				<rect x={sxm(GB, 43) - 6} y={syh(GB, 100)} width={12} height={GB.y + GB.h - syh(GB, 100)} fill="none" stroke={NEUT} strokeWidth={3} strokeDasharray="8 6" />
				<Sx x={sxm(GB, 43) - 16} y={syh(GB, 100) + 70} text="expected for" size={28} color={GREYT} anchor="end" hand at={ON} />
				<Sx x={sxm(GB, 43) - 16} y={syh(GB, 100) + 104} text="pentan-2-one:" size={28} color={GREYT} anchor="end" hand at={ON} />
				<Sx x={sxm(GB, 43) - 16} y={syh(GB, 100) + 138} text="CH_3CO^{+} = 43" size={28} color={GREYT} anchor="end" hand at={ON} />
			</g> : null}
			<PeakLab g={GB} mz={43} h={1.6} text="43: small" at={KB.big + 20} size={28} color={INK} dx={12} dy={-16} anchor="start" />
			<Sx x={1150} y={430} text="pentan-3-one" size={34} color={INK} weight={800} at={KB.p3has} />
			<MolAt k="pentan3one" x={1460} y={540} s={0.95} at={KB.p3has} out={KB.either} rings={[{bond: [1, 2], at: KB.p3has + 30, color: AMBER_INK}, {bond: [2, 3], at: KB.p3has + 40, color: AMBER_INK}]} />
			<MolSplit k="pentan3one" x={1460} y={540} s={0.95} at={KB.either} snap={KB.either + 4} keep={[2, 3, 4, 5]} cut={[1, 2]} to={[20, 140]} away={[-60, -90]} ion="C_2H_5CO^{+} = 57" ionDy={90} />
			<Sx x={1150} y={800} text="pentan-2-one" size={30} color={GREYT} weight={800} at={KB.p2} />
			<MolAt k="pentan2one" x={1480} y={790} s={0.6} at={KB.p2} color={GREYT} />
			{prog(f, KB.so, 12) > 0.01 ? <rect x={1130} y={390} width={680} height={270} rx={20} fill="none" stroke={GOLD} strokeWidth={5} opacity={prog(f, KB.so, 12)} /> : null}
			<Mistake x={1130} y={880} text="− 29 = CHO, so an aldehyde" size={34} at={KB.slip - 20} cross={KB.slip} />
			<GTag x={1130} y={980} text="check which piece each candidate can lose" size={28} at={KB.neither} />
			{void CARD}{void EDGE}{void FRAG}{void ISO}{void INK_SOFT}{void GOLD}
		</Svg>
	);
};

// ---------- 15. attempt 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
const GA2: SG = {x: 230, y: 560, w: 1060, h: 340, m0: 10, m1: 100};
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: a bromine compound" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={226} w={1660} size={40} />
		<QPart blocks={Q2_DEM} x={126} y={378} w={1660} size={42} />
		<SpecAxes g={GA2} at={ON} size={26} />
		<StickSpec g={GA2} bars={BR} />
		{[15, 94, 96].map(m => <PeakLab key={m} g={GA2} mz={m} h={(BR.find(b => b[0] === m) ?? [m, 0])[1]} text={`${m}`} size={30} color={INK} dy={-14} dx={m === 94 ? -14 : m === 96 ? 14 : 0} weight={800} hand={false} />)}
		<GTag x={1400} y={580} text="heights read from a measured spectrum" size={26} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={1400} ty={780} cx={1700} cy={880} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 16. feedback 2 ----------
const KD = K('feedback-2', {m94: 'ninety-four:', m2: 'M plus', tall: 'about as', s79: 'seventy-nine,', br: 'a bromine atom', ch3: 'C H three plus', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: '94', at: KD.m94},
	{phrase: '96', at: KD.m2},
	{phrase: 'about equal height', at: KD.m2},
	{phrase: 'about 51% bromine-79 and 49% bromine-81', at: KD.tall},
	{phrase: 'a peak at m/z', at: KD.s79},
]);
const GD: SG = {x: 190, y: 440, w: 900, h: 380, m0: 10, m1: 100};
export const SceneFeedback2: React.FC = () => (
	<Svg>
		<Title text="Feedback: the cluster leads with M" />
		<HscTag />
		<Box x={40} y={150} w={1784} h={190} />
		<QPart blocks={Q2_STEM} marks={M_D} x={64} y={204} w={1736} size={32} />
		<QPart blocks={Q2_DEM} marks={M_D} x={64} y={300} w={1736} size={30} />
		<SpecAxes g={GD} at={ON} size={26} />
		<StickSpec g={GD} bars={BR} paint={[{mz: 94, color: GOLD, at: KD.m94}, {mz: 96, color: ISO, at: KD.m2}, {mz: 15, color: FRAG_INK, at: KD.s79}]} />
		<PeakLab g={GD} mz={94} h={100} text="M: CH_3⁷⁹Br^{+}" at={KD.m94} size={30} color={GOLD_INK} dx={-18} dy={30} anchor="end" weight={800} />
		<PeakLab g={GD} mz={96} h={94} text="M+2: CH_3⁸¹Br^{+}" at={KD.m2} size={30} color={ISO} dx={-18} dy={80} anchor="end" weight={800} />
		<GapBracket g={GD} a={15} b={94} y={660} text="− 79: Br" at={KD.s79} size={34} />
		<PeakLab g={GD} mz={15} h={47} text="CH_3^{+}" at={KD.ch3} size={32} color={FRAG_INK} dx={14} dy={0} anchor="start" weight={800} />
		<Sx x={1460} y={520} text="CH_3Br" size={56} color={INK} anchor="middle" weight={800} at={KD.ch3 + 10} />
		<Chip x={1460} y={560} text="fits bromomethane" size={34} color={FRAG_INK} ink={FRAG_INK} anchor="middle" at={KD.ch3 + 20} />
		<T x={1150} y={430} w={680} text="94 and 96: the same structure, two Br isotopes, about equally common" size={32} color={INK} at={KD.tall} />
		<Mistake x={1150} y={720} text="96 = M^{+} (furthest right)" size={36} at={KD.trap - 30} cross={KD.trap} note="M+2 is the same structure, heavier Br" noteW={670} />
		{void MolAt}{void MolSplit}{void GREYT}{void NAVY}{void NEUT}
	</Svg>
);

// ---------- 17. decision rule and handoff ----------
const KR = K('decision-handoff', {order: 'this order', find: 'Find the', partner: 'isotope partner', subtract: 'Subtract to', which: 'ask which', say: 'Then say', next: 'Next'});
const STEPS: [string, string, keyof typeof KR][] = [
	['1', 'M^{+} cluster at the right: M, then M+1 or M+2', 'find'],
	['2', 'isotope partner? 3 : 1 Cl, 1 : 1 Br', 'partner'],
	['3', 'subtract: gap = piece lost', 'subtract'],
	['4', "which candidates fit? what's still possible?", 'which'],
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="When you meet a mass spectrum" />
			{STEPS.map(([n, t, k], i) => {
				const v = prog(f, KR[k], 12);
				if (v <= 0.01) return null;
				const y = 190 + i * 150;
				const nextK = STEPS[i + 1]?.[2];
				const dim = nextK ? prog(f, KR[nextK], 14) : 0;
				return (
					<g key={n} opacity={v * (1 - 0.3 * dim)}>
						<rect x={96} y={y} width={1500} height={120} rx={22} fill={CARD} stroke={dim > 0.5 ? EDGE : NAVY} strokeWidth={dim > 0.5 ? 2.5 : 4} />
						<circle cx={160} cy={y + 60} r={38} fill={NAVY} />
						<Sx x={160} y={y + 76} text={n} size={46} color={CARD} anchor="middle" weight={800} at={ON} />
						<Sx x={230} y={y + 78} text={t} size={46} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<Sx x={96} y={850} text="then say what's still possible" size={44} color={NAVY} hand at={KR.say} />
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={1000} y={900} width={824} height={110} rx={55} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1412} y={970} text="Next: What bonds can an IR spectrum reveal?" size={36} color={INK} anchor="middle" hand at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 18. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={40} aidTop={660} tag="mass spectrometry" aids={['Find the molecular-ion cluster. Tallest is the base.', 'Then subtract to find what broke off.']} notes={[
		'Vaporise, ionise, accelerate, deflect, detect: only ions are detected.',
		'M^{+} leads the cluster at the right; its m/z is the molecular mass.',
		'Base peak: the tallest (100%), often a fragment, not M^{+}.',
		'Gap = piece lost: 15 CH_3, 17 OH, 29 C_2H_5 or CHO, 45 COOH.',
		'Cl: M and M+2 about 3 : 1. Br: about 1 : 1.',
	]} />
);
