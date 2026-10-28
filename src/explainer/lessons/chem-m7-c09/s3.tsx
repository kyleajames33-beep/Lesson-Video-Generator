// M7 C09 scenes 12 to 17: attempt 1 (name X, CH3CH(CH3)CH2COOH, and explain its boiling point), brief feedback
// (3-methylbutanoic acid; "2-methylpropanoic acid" crossed; dimers), attempt 2 (test butanoic acid against butan-1-ol),
// brief feedback (NaHCO₃ fizz and its equation; shared against single charge; "both have an O–H" crossed), the handoff
// and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, Locants, NameBuilder, QCardX, Tag, Trace, zigOffs} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {alc} from '../chem-m7-c05/parts';
import {Arrow2, EqRow, Plate} from '../chem-m7-c06/parts';
import {P2} from '../chem-m7-c08a/parts';
import {FRUIT, SODA_CLIP, hold, sc} from './common';
import {AcidAt, Charge, Dimer, GREY, INK, NAVY, RED, acidK, ionK} from './parts';

const SY = 60;
const X3 = acidK(4, [1]);

// ---------- 12. Attempt 1 ----------
const Q1 = ['Compound X has the condensed structural formula CH₃CH(CH₃)CH₂COOH and boils at 177 °C.', 'Hexan-1-ol, which has a similar molar mass, boils at 157 °C.', '(a) Give the IUPAC name of X.', '(b) Explain why X has the higher boiling point, with reference to the intermolecular', 'forces present.'];
const K12 = cues(sc('attempt-1'), {turn: 'Your turn', c: 'Compound X', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K12.turn} />
		<QCardX lines={Q1} at={K12.c} y={190} size={34} />
		<Sx x={1300} y={640} text="X" size={40} color={INK} weight={800} at={K12.c + 30} />
		<AcidAt k={X3} x={900} y={650} s={1.15} at={K12.c + 20} ink />
		<PauseHold h={hold('attempt-1')} at={K12.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 13. Feedback 1 ----------
const K13 = cues(sc('feedback-1'), {cc: 'The carboxyl carbon', four: 'four carbons', methyl: 'a methyl', name: 'three-methylbutanoic', two: 'Two-methylpropanoic', leaves: 'leaves out', bp: 'For the boiling', similar: 'similar molar masses', both: 'both hydrogen', dimers: 'dimers', so: 'So more energy'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const X = 480, Y = 440, S = 1.15;
	const ch = [3, 2, 1, 0].map(i => P2(X3.m, X, Y, S, i));
	const top = dimAt(f, K13.bp, 0.3);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={24} under={[{line: 2, phrase: 'IUPAC name', at: K13.cc}, {line: 1, phrase: 'similar molar mass', at: K13.similar}, {line: 0, phrase: '177 °C', at: K13.both}, {line: 1, phrase: '157 °C', at: K13.both + 6}, {line: 3, phrase: 'intermolecular', at: K13.dimers}]} />
			<g opacity={top}>
				<Trace path={ch} at={K13.four} dur={30} width={26} />
				<AcidAt k={X3} x={X} y={Y} s={S} at={-100} ring={K13.cc} />
				<Locants pts={ch} at={K13.cc + 20} offs={zigOffs(ch)} ring={[{i: 2, at: K13.methyl}]} />
			</g>
			<NameBuilder x={980} y={340} s={0.72} widths={[300, 200, 250]} at={K13.cc} fills={[{slot: 0, text: '3-methyl', at: K13.name}, {slot: 1, text: 'butan', at: K13.name + 6}, {slot: 2, text: 'oic acid', at: K13.name + 12}]} />
			<AnswerChip x={980} y={460} text="3-methylbutanoic acid" at={K13.name + 20} size={34} />
			<Crossed x={980} y={580} text="2-methylpropanoic acid" at={K13.two} cross={K13.leaves} out={K13.bp + 20} note="a different, smaller acid: count the COOH carbon" size={32} />
			<Tag x={96} y={660} text="similar size: similar dispersion; both hydrogen bond" at={K13.similar} size={26} o={dimAt(f, K13.dimers + 20, 0.5)} />
			<Dimer k={X3} x={360} y={850} s={0.75} at={K13.dimers - 10} slide={K13.dimers - 10} bonds={K13.dimers + 16} />
			<Tag x={1080} y={790} text="dimers: 2 hydrogen bonds + dipole–dipole" at={K13.dimers + 20} size={30} color="#7a5bb5" fill="#e6ddf5" />
			<Tag x={1080} y={860} text="more energy to separate: higher boiling point" at={K13.so} size={26} color={NAVY} fill="#e7edf8" />
		</Overlay>
	);
};

// ---------- 14. Attempt 2 ----------
const Q2 = ['Butanoic acid and butan-1-ol are both colourless liquids. Describe a chemical test that would', 'distinguish them, including a balanced equation for any reaction. Explain why only one of', 'them reacts.'];
const K14 = cues(sc('attempt-2'), {last: 'Last one', b: 'Butanoic acid', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K14.last} />
		<QCardX lines={Q2} at={K14.b} y={200} size={36} />
		<PauseHold h={hold('attempt-2')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 15. Feedback 2 ----------
const K15 = cues(sc('feedback-2'), {add: 'Add sodium', fizzes: 'fizzes', giving: 'giving sodium', no: 'shows no change', why: 'Why?', shared: 'shared over', stronger: 'stronger acid', alc: "The alcohol's", saying: 'Saying both', trap: 'trap'});
const BUA = acidK(4), BUO = alc(4, 3);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const IX = 380, IY = 800, AX = 1120, S = 0.85;
	const ion = ionK(BUA);
	const o1 = P2(ion.m, IX, IY, S, ion.o), o2 = P2(ion.m, IX, IY, S, ion.oh as number);
	const ao = P2(BUO.m, AX, IY, S, BUO.o);
	const tags = dimAt(f, K15.saying, 0.5);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={26} under={[{line: 0, phrase: 'chemical test', at: K15.add}, {line: 0, phrase: 'Butanoic acid', at: K15.fizzes}, {line: 1, phrase: 'balanced equation', at: K15.giving}, {line: 0, phrase: 'butan-1-ol', at: K15.no}, {line: 1, phrase: 'Explain why only one of', at: K15.shared}]} />
			<Plate p={SODA_CLIP.before} to={SODA_CLIP.fizz} swap={K15.fizzes} cx={260} top={290} h={200} at={K15.add} />
			<Plate p={SODA_CLIP.before} cx={520} top={290} h={200} at={K15.add + 6} />
			<Sx x={260} y={520} text="butanoic acid" size={22} color={INK} anchor="middle" weight={700} at={K15.add + 10} />
			<Sx x={520} y={520} text="butan-1-ol" size={22} color={INK} anchor="middle" weight={700} at={K15.add + 10} />
			<Tag x={760} y={320} text="bubbles of colourless gas (CO₂)" at={K15.fizzes + 10} size={26} color={RED} fill="#f9e1dc" o={dimAt(f, K15.why, 0.5)} />
			<Tag x={760} y={390} text="butan-1-ol: no change" at={K15.no} size={26} o={dimAt(f, K15.why, 0.5)} />
			<EqRow left={[{t: 'CH_3CH_2CH_2COOH(l)', at: K15.giving}, {t: '+', at: K15.giving}, {t: 'NaHCO_3(s)', at: K15.giving}]} right={[{t: 'CH_3CH_2CH_2COONa(aq)', at: K15.giving + 14}, {t: '+', at: K15.giving + 14}, {t: 'H_2O(l)', at: K15.giving + 14}, {t: '+', at: K15.giving + 14}, {t: 'CO_2(g)', at: K15.giving + 14}]} cx={960} y={590} size={30} len={80} arrow={{at: K15.giving + 8}} />
			<g opacity={vis(f, K15.shared - 10)}>
				<SkelAt m={ion.m} x={IX} y={IY} s={S} at={K15.shared - 10} />
				<Charge p={o1} at={K15.shared} r={34} label="½−" dx={44} dy={-20} />
				<Charge p={o2} at={K15.shared + 6} r={34} label="½−" dx={-40} dy={30} />
				<SkelAt m={{...BUO.m, labels: [{i: BUO.o, text: 'O'}]}} x={AX} y={IY} s={S} at={K15.alc} />
				<Charge p={ao} at={K15.alc + 10} r={34} label="−" dx={44} dy={-30} />
			</g>
			<g opacity={tags}>
				<Tag x={IX - 200} y={880} text="charge shared: weaker grip on H⁺" at={K15.shared + 10} size={24} color="#5e4a8c" fill="#e4ddf0" />
				<Tag x={AX - 180} y={880} text="charge on one O: tight grip" at={K15.alc + 10} size={24} color="#5e4a8c" fill="#e4ddf0" />
			</g>
			<Tag x={1280} y={950} text="pKa: butanoic ≈ 4.8 < carbonic 6.4" at={K15.stronger} size={22} />
			<Crossed x={96} y={940} text="Both contain an O–H group, so both react." at={K15.saying} cross={K15.trap} note="only the carboxylate can share its charge" size={28} />
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {so: 'So the', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Similar size: carboxylic acid > alcohol > aldehyde, ketone > alkane." at={K16.so} size={34} x={120} y={170} color={TEAL} />
			<TaskLine text="Share the charge, loosen the grip." at={K16.so + 20} size={44} x={120} y={240} color={TEAL} />
			<g opacity={vis(f, K16.next)}>
				<CT x={260} y={480} text="CH_3COOH" size={44} anchor="middle" />
				<Sx x={480} y={492} text="+" size={50} color={GREY} anchor="middle" weight={700} at={-1000} />
				<CT x={690} y={480} text="CH_3CH_2OH" size={44} anchor="middle" />
				<Arrow2 a={[880, 466]} b={[1020, 466]} at={K16.next + 6} color={INK} />
				<rect x={1040} y={410} width={110} height={110} rx={16} fill="none" stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />
				<Sx x={1095} y={482} text="?" size={52} color={GREY} anchor="middle" weight={800} at={-1000} />
				<Plate p={FRUIT} cx={1500} top={340} h={260} />
				<rect x={400} y={720} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={770} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={814} text="how do an acid and an alcohol make an ester?" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	"Carboxyl group –COOH: a C=O and an O–H on the same carbon (only one O–H). Names: longest chain including the COOH carbon, '-oic acid', the COOH carbon is C1 (no number): methanoic, ethanoic CH₃COOH, propanoic, butanoic; 2-methylpropanoic acid. Salts end '-oate' (sodium ethanoate).",
	'Forces: the O–H gives and the C=O beside it takes hydrogen bonds, so pairs form dimers (2 hydrogen bonds per pair) + dipole–dipole. Similar size: carboxylic acid > alcohol > aldehyde, ketone > alkane (ethanoic acid 118 °C, propan-1-ol 97 °C, both 60 g/mol).',
	'Within the family: longer chain, higher boiling point (more dispersion). Small acids (to C4) mix with water; solubility falls after.',
	'Weak acid (partly ionised; the equilibrium lies to the left): CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺. The C=O beside the O lets the conjugate base\'s charge spread over both O, so it pulls H⁺ back less strongly than an alcohol\'s ion would (pKa ≈ 4.7). An alcohol\'s would sit on one O (pKa ≈ 16), so an alcohol is no more acidic than water.',
	'Reactions: with NaOH → salt + water; with Mg → salt + H₂; with NaHCO₃ → salt + H₂O + CO₂ (fizz). Test: fizzes with NaHCO₃ = carboxylic acid; an alcohol gives no change. Blue litmus turns red (more H₃O⁺).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={25} aidTop={846} aids={['Similar size: carboxylic acid > alcohol > aldehyde, ketone > alkane.', 'Share the charge, loosen the grip.']} tag="structure, names, forces and acidity of carboxylic acids" />
);
