// M7 C08b scenes 14 to 19: attempt 1 (name CH3CH2COCH(CH3)CH3), brief feedback (ketone; 2-methylpentan-3-one;
// "4-methylpentan-3-one" crossed), attempt 2 (C4H8O, A mirror, B no change), brief feedback (butanal, butan-2-one; "both
// should react" crossed), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, Locants, NameBuilder, QCardX, Tag, Trace, zigOffs} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Arrow2, Plate} from '../chem-m7-c06/parts';
import {CarbAt, HChip, INK, NAVY, P2, Tube, carb} from '../chem-m7-c08a/parts';
import type {Carb} from '../chem-m7-c08a/parts';
import {SkelAt} from '../chem-m7-c02/parts';
import {DISTIL, TOLL, hold, sc} from './common';

const SY = 70;
const Q1K = carb(5, 2, [3]);
const PLAIN: Carb = {...Q1K, m: {...Q1K.m, bonds: Q1K.m.bonds.map(b => ({...b, color: undefined}))}};

// ---------- 14. Attempt 1 ----------
const Q1 = ['A compound has the condensed structural formula CH₃CH₂COCH(CH₃)CH₃. State whether', 'it is an aldehyde or a ketone, giving a reason, and give its IUPAC name.'];
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', a: 'A compound', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K14.turn} />
		<QCardX lines={Q1} at={K14.a} y={200} size={38} />
		<SkelAt m={PLAIN.m} x={900} y={560} s={1.2} at={K14.a + 20} />
		<PauseHold h={hold('attempt-1')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 15. Feedback 1 ----------
const K15 = cues(sc('feedback-1'), {each: 'a carbon on each', ketone: "so it's a ketone", five: 'five carbons', three: 'carbon three', number: 'So number', two: 'on carbon two', name: 'two-methylpentan-three-one', wrong: 'wrong end'});
export const SceneFeedback1: React.FC = () => {
	const X = 560, Y = 500, S = 1.2;
	const ch = [0, 1, 2, 3, 4].map(i => P2(Q1K.m, X, Y, S, i));
	const rev = [...ch].reverse();
	const c = ch[2];
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={28} under={[{line: 1, phrase: 'aldehyde or a ketone', at: K15.each}, {line: 1, phrase: 'giving a reason', at: K15.ketone}, {line: 1, phrase: 'IUPAC name', at: K15.two}]} />
			<Trace path={ch} at={K15.five} dur={30} width={26} />
			<CarbAt k={Q1K} x={X} y={Y} s={S} at={-100} ring={K15.each} />
			<Tag x={c[0] - 150} y={c[1] + 120} text="C each side" at={K15.each + 10} out={K15.five} size={22} />
			<Tag x={1080} y={560} text="ketone: a carbon each side of C=O" at={K15.ketone} size={28} color={NAVY} fill="#e7edf8" />
			<Locants pts={ch} at={K15.three} out={K15.number} offs={zigOffs(ch)} ghost />
			<Locants pts={rev} at={K15.number + 10} offs={zigOffs(rev)} ring={[{i: 1, at: K15.two}, {i: 2, at: K15.two + 20}]} />
			<NameBuilder x={1080} y={340} s={0.72} at={K15.five} fills={[{slot: 0, text: '2-methyl', at: K15.name}, {slot: 1, text: 'pentan', at: K15.name + 6}, {slot: 2, text: '-3-one', at: K15.name + 12}]} />
			<Crossed x={140} y={800} text="4-methylpentan-3-one" at={K15.name + 40} cross={K15.wrong} note="C=O ties at 3, so the branch gets the lower number" size={36} />
		</Overlay>
	);
};

// ---------- 16. Attempt 2 ----------
const Q2 = ['Compounds A and B both have the molecular formula C₄H₈O, and both contain a C=O group.', "When each is warmed with Tollens' reagent, A forms a silver mirror and B shows no change.", 'A has an unbranched chain. Identify A and B by IUPAC name, and explain the difference in', 'their results.'];
const K16 = cues(sc('attempt-2'), {last: 'Last one', c: 'Compounds A and B', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K16.last} />
		<QCardX lines={Q2} at={K16.c} y={200} size={36} />
		<PauseHold h={hold('attempt-2')} at={K16.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 17. Feedback 2 ----------
const K17 = cues(sc('feedback-2'), {mirror: 'A forms a mirror', aldehyde: 'an aldehyde', butanal: "it's butanal", b: 'B has a', butanone: 'butan-two-one,', saying: 'Saying both', hyd: 'The hydrogen decides'});
const BUTAL = carb(4, 3), BUONE = carb(4, 1);
export const SceneFeedback2: React.FC = () => (
	<Overlay>
		<QCardX lines={Q2} at={-100} y={SY} size={26} under={[{line: 1, phrase: 'A forms a silver mirror', at: K17.mirror}, {line: 2, phrase: 'unbranched chain', at: K17.butanal}, {line: 0, phrase: 'C₄H₈O', at: K17.butanal + 6}, {line: 1, phrase: 'B shows no change', at: K17.b}, {line: 0, phrase: 'both contain a C=O group', at: K17.b + 6}, {line: 2, phrase: 'explain the difference', at: K17.saying - 20}]} />
		<Tube p={TOLL.mirror} cx={220} top={340} h={200} at={K17.mirror} />
		<CarbAt k={BUTAL} x={640} y={450} s={1} at={K17.aldehyde - 10} hGlow={K17.aldehyde} />
		<HChip x={560} y={510} t="1 H" at={K17.aldehyde + 10} />
		<AnswerChip x={1000} y={410} text="A: butanal" at={K17.butanal} size={34} />
		<Tube p={TOLL.clear} cx={220} top={590} h={200} at={K17.b} />
		<CarbAt k={BUONE} x={640} y={700} s={1} at={K17.b} ring={K17.butanone} />
		<HChip x={560} y={780} t="0 H" at={K17.butanone + 10} />
		<AnswerChip x={1000} y={660} text="B: butan-2-one" at={K17.butanone} size={34} />
		<Tag x={96} y={850} text="aldehyde: H on the C=O carbon, oxidised, Ag⁺ reduced to Ag. Ketone: no H, no reaction" at={K17.butanone + 30} size={24} color={NAVY} fill="#e7edf8" />
		<Crossed x={96} y={920} text="Both have a C=O group, so both should form a mirror." at={K17.saying} cross={K17.hyd} note="the H on the carbonyl carbon decides" size={28} />
	</Overlay>
);

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So the', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Aldehyde at the end, ketone in the middle." at={K18.so} size={56} x={120} y={200} color={TEAL} />
			<Tag x={120} y={250} text="position decides the name, the forces and the test results" at={K18.so + 30} size={28} />
			<g opacity={vis(f, K18.next)}>
				<Plate p={DISTIL} cx={1450} top={360} h={300} />
				<Tube p={TOLL.mirror} cx={1000} top={380} h={280} />
				<rect x={400} y={780} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={830} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={874} text="investigate alcohol oxidation products (practical)" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Carbonyl group C=O (polar: O δ−, C δ+). Aldehyde: C=O at the end of the chain, H on the carbonyl carbon (–CHO); "-al", no number (the CHO carbon is C1): propanal, 2-methylpropanal. Ketone: C=O inside the chain, a carbon each side; "-one", number from C5 from the end nearer the C=O: propanone, butanone (butan-2-one), pentan-3-one.',
	'With three or more carbons, an aldehyde and a ketone can share a formula: functional group isomers (propanal and propanone, C_3H_6O).',
	'Forces: dipole–dipole + dispersion; no O–H, so no hydrogen bonds between their own molecules. Similar size: pentane 36 °C < butanal 75 °C ≈ butan-2-one 80 °C < butan-1-ol 118 °C. Water hydrogen bonds to the C=O oxygen, so small ones dissolve; less as the chain grows.',
	"Tests for simple compounds (aldehyde positive, ketone no change), all because the aldehyde has an H on the carbonyl carbon: Tollens' (warm) → silver mirror; Fehling's or Benedict's (warm) → blue to brick-red precipitate; acidified dichromate → orange to green. Test the distilled oxidation product: aldehyde means a primary alcohol, ketone a secondary one. Tollens': make fresh, dispose of promptly.",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={820} aids={['Aldehyde at the end, ketone in the middle.', 'Every test asks: is there an H on the carbonyl carbon?']} tag="naming, forces and tests for aldehydes and ketones" />
);
