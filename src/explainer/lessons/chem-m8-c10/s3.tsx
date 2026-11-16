// C8-10 scenes 15 to 20: attempt 1 (butanoic acid or ethyl ethanoate, with the ethyl ethanoate trace and the data
// sheet), feedback 1 (the missing band decides; no beard, no acid), attempt 2 (alcohol or aldehyde; trace Z is
// butan-1-ol, unnamed), feedback 2 (no C=O, so not an aldehyde; 2960 is C–H), the decision rule with the Next chip, and
// the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {
	AMBER_INK, BandMark, Box, CARD, CO1, COC, Chip, DataSheet, DrawPath, EDGE, GREYT, GTag, HscTag, INK, IRAxes, IRTrace, Mistake, NAVY, OHC, Pause, PreRing, QPart, RED, RangeShade, Svg, Sx, Title, marksCheck, prog, wx,
} from './parts';
import type {IG, QMark} from './parts';
import {IR_butan1ol, IR_ethylEthanoate} from './irdata';
import {Struct} from './s1';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;
const GQ: IG = {x: 200, y: 590, w: 1040, h: 300};

// ---------- 15. attempt 1 ----------
const KA = K('attempt-1', {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Svg>
		<Title text="Your turn: acid or ester?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={224} w={1140} size={34} />
		<QPart blocks={Q1_DEM} x={126} y={476} w={1140} size={36} />
		<IRAxes g={GQ} ticksAt={ON} size={26} />
		<IRTrace g={GQ} pts={IR_ethylEthanoate} />
		<Sx x={GQ.x + GQ.w} y={GQ.y - 16} text="compound X" size={28} color={INK} anchor="end" weight={800} at={ON} />
		<DataSheet x={1300} y={190} w={520} rowH={50} size={28} />
		<Pause h={hold('attempt-1')} at={KA.pause} tx={1300} ty={790} cx={1700} cy={880} r={46} />
		<PreRing at={KA.pause} start={hold('attempt-1').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 16. feedback 1 ----------
const KB = K('feedback-1', {both: 'Both candidates', s1740: 'seventeen forty', missing: 'missing band', none: 'X has', ester: 'an ester.', ethyl: 'ethyl ethanoate.', slip: 'the slip'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'a strong sharp absorption at 1740', at: KB.s1740},
	{phrase: 'no broad absorption between 2500 and 3550', at: KB.missing},
	{phrase: '1240 cm⁻¹ and 1050', at: KB.ester - 20},
]);
const GF: IG = {x: 220, y: 380, w: 1560, h: 340};
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const res = prog(f, KB.ethyl, 12);
	return (
		<Svg>
			<Title text="Feedback: the missing band decides" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={170} />
			<QPart blocks={Q1_STEM} marks={M_B} x={64} y={196} w={1736} size={28} />
			<QPart blocks={Q1_DEM} marks={M_B} x={64} y={296} w={1736} size={28} />
			<IRAxes g={GF} ticksAt={ON} size={26} />
			<RangeShade g={GF} a={2500} b={3000} at={KB.missing} color={OHC} op={0.12} />
			<IRTrace g={GF} pts={IR_ethylEthanoate} />
			<BandMark g={GF} wn={1744} t={4} top={50} rx={20} at={KB.s1740} color={COC} text="both have C=O" dx={-30} dy={-6} anchor="end" />
			<Chip x={wx(GF, 2750)} y={GF.y + 14} text="no broad band: only sharp C–H dips, no acid O–H" size={28} color={OHC} ink={OHC} anchor="middle" at={KB.missing + 10} />
			<BandMark g={GF} wn={1243} t={6} top={55} rx={18} at={KB.ester - 20} color={CO1} />
			<BandMark g={GF} wn={1048} t={19} top={60} rx={18} at={KB.ester - 14} color={CO1} text="C–O: fits an ester" dx={30} dy={-6} anchor="start" />
			<g opacity={res}><rect x={70} y={820} width={430} height={220} rx={20} fill="#fff4d8" stroke={AMBER_INK} strokeWidth={4} /></g>
			<Struct k="etEthanoate" x={285} y={900} s={0.7} at={KB.ethyl - 10} name="ethyl ethanoate" nameDy={130} />
			<Struct k="butanoic" x={760} y={900} s={0.7} at={KB.ethyl - 10} name="butanoic acid" nameDy={130} o={1 - 0.5 * res} />
			{res > 0.01 ? <DrawPath d="M580,1020 L940,830" at={KB.ethyl} dur={10} color={RED} width={6} /> : null}
			<Mistake x={1060} y={870} text="C=O + C–O, so an acid" size={38} at={KB.slip - 30} cross={KB.slip} note="no beard, no acid" noteW={700} />
		</Svg>
	);
};

// ---------- 17. attempt 2 ----------
const KC = K('attempt-2', {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Svg>
		<Title text="Your turn: alcohol or aldehyde?" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={224} w={1140} size={34} />
		<QPart blocks={Q2_DEM} x={126} y={476} w={1140} size={36} />
		<IRAxes g={GQ} ticksAt={ON} size={26} />
		<IRTrace g={GQ} pts={IR_butan1ol} />
		<Sx x={GQ.x + GQ.w} y={GQ.y - 16} text="Z" size={34} color={INK} anchor="end" weight={800} at={ON} />
		<DataSheet x={1300} y={190} w={520} rowH={50} size={28} />
		<Pause h={hold('attempt-2')} at={KC.pause} tx={1300} ty={790} cx={1700} cy={880} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-2').startFrame} x={1700} y={880} r={46} />
	</Svg>
);

// ---------- 18. feedback 2 ----------
const KD = K('feedback-2', {green: 'Green only', oxidised: 'was oxidised,', nothing: 'Nothing between', noCO: 'no C equals', ald: 'an aldehyde.', broad: 'The broad', s3330: 'thirty-three thirty', alcohol: 'secondary alcohol.', trap: 'the trap'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'turns warm acidified potassium dichromate from orange to green', at: KD.oxidised},
	{phrase: 'no absorption between 1680 and 1750', at: KD.nothing},
	{phrase: 'broad absorption centred at 3330', at: KD.s3330},
	{phrase: 'strong absorption at 1070', at: KD.s3330 + 30},
]);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: no C=O, so an alcohol" />
			<HscTag />
			<Box x={40} y={150} w={1784} h={190} />
			<QPart blocks={Q2_STEM} marks={M_D} x={64} y={196} w={1736} size={28} />
			<QPart blocks={Q2_DEM} marks={M_D} x={64} y={312} w={1736} size={28} />
			<IRAxes g={GF} ticksAt={ON} size={26} />
			<RangeShade g={GF} a={1680} b={1750} at={KD.noCO} none />
			<IRTrace g={GF} pts={IR_butan1ol} />
			<Chip x={wx(GF, 1715)} y={GF.y + 14} text="none: no C=O" size={28} color={GREYT} ink={GREYT} anchor="middle" at={KD.noCO} />
			<BandMark g={GF} wn={3318} t={17} top={70} rx={60} at={KD.s3330} color={OHC} text="O–H (alcohol), broad" dx={-44} dy={-310} anchor="start" />
			<BandMark g={GF} wn={1068} t={20} top={60} rx={18} at={KD.s3330 + 30} color={CO1} text="C–O" dx={30} dy={-6} anchor="start" />
			<GTag x={70} y={830} text="green: 1° or 2° alcohol, or an aldehyde (c08)" size={30} at={KD.oxidised + 10} />
			<Chip x={70} y={900} text="1° or 2° alcohol" size={36} color={AMBER_INK} ink={INK} at={KD.broad} glow={prog(f, KD.alcohol, 12)} />
			<g opacity={prog(f, KD.green, 12)}>
				<Chip x={460} y={900} text="aldehyde" size={36} color={GREYT} ink={GREYT} />
				{prog(f, KD.ald, 12) > 0.01 ? <DrawPath d="M470,950 L640,906" at={KD.ald} dur={10} color={RED} width={6} /> : null}
			</g>
			<Mistake x={1060} y={870} text="2960 = O–H" size={40} at={KD.trap - 30} cross={KD.trap} note="2960 is C–H" noteW={600} />
			{void CARD}{void EDGE}
		</Svg>
	);
};

// ---------- 19. decision rule and handoff ----------
const KR = K('decision-handoff', {scan: 'scan from', check: 'Check the', co: 'then the C equals', c_o: 'then the C O', name: 'Name each', next: 'Next'});
const STEPS: [string, string, keyof typeof KR][] = [
	['1', 'O–H? broad (alcohol) or very broad with C=O (acid)', 'check'],
	['2', 'C=O? strong, sharp, 1680 to 1750', 'co'],
	['3', 'C–O? 1000 to 1300', 'c_o'],
	['4', "name each bond; say what's missing; add formula and MS", 'name'],
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="When you meet an infrared spectrum" />
			<Sx x={96} y={196} text="scan from left to right" size={40} color={NAVY} hand at={KR.scan} />
			{STEPS.map(([n, t, k], i) => {
				const v = prog(f, KR[k], 12);
				if (v <= 0.01) return null;
				const y = 240 + i * 150;
				const nk = STEPS[i + 1]?.[2];
				const dim = nk ? prog(f, KR[nk], 14) : 0;
				return (
					<g key={n} opacity={v * (1 - 0.3 * dim)}>
						<rect x={96} y={y} width={1560} height={120} rx={22} fill={CARD} stroke={dim > 0.5 ? EDGE : NAVY} strokeWidth={dim > 0.5 ? 2.5 : 4} />
						<circle cx={160} cy={y + 60} r={38} fill={NAVY} />
						<Sx x={160} y={y + 76} text={n} size={46} color={CARD} anchor="middle" weight={800} at={ON} />
						<Sx x={230} y={y + 78} text={t} size={44} color={INK} weight={700} at={ON} />
					</g>
				);
			})}
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={960} y={890} width={864} height={110} rx={55} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1392} y={960} text="Next: How does NMR reveal carbon environments?" size={36} color={INK} anchor="middle" hand at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 20. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={40} aidTop={660} tag="infrared spectroscopy" aids={['Beard + sword = acid.', 'A missing band rules a group out.']} notes={[
		'A bond absorbs infrared that matches its vibration: a dip.',
		'Stronger bonds and lighter atoms absorb at higher wavenumber.',
		'Alcohol O–H: broad, 3230 to 3550. Acid O–H: very broad, 2500 to 3000, with C=O.',
		'C=O: strong, sharp, 1680 to 1750. N–H: narrower, weaker than O–H.',
		"Fingerprint (below 1500): match, don't assign.",
	]} />
);
