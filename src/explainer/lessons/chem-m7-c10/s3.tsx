// M7 C10 scenes 12 to 17: attempt 1 (name CH3CH2COOCH2CH2CH2CH3 and its acid and alcohol), brief feedback (the cut;
// butyl propanoate; "propyl butanoate" crossed), attempt 2 (0.50 mol each, 0.32 mol ester: equation and one change),
// brief feedback (the equation; excess methanol; "heat it for longer" crossed), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, Locants, QCardX, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {EqRow, Plate} from '../chem-m7-c06/parts';
import {FUNNEL, REFLUX, hold, sc} from './common';
import {AMB, BLUE, EsterAt, EsterName, INK, NAVY, YieldBar, esterK, sides} from './parts';

const SY = 60;
const BP = esterK(3, 4);

// ---------- 12. Attempt 1 ----------
const Q1 = ['An ester has the condensed structural formula CH₃CH₂COOCH₂CH₂CH₂CH₃. Give the IUPAC name', 'of the ester, and name the carboxylic acid and the alcohol used to make it.'];
const K12 = cues(sc('attempt-1'), {turn: 'Your turn', an: 'An ester', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K12.turn} />
		<QCardX lines={Q1} at={K12.an} y={200} size={36} />
		<EsterAt e={BP} x={900} y={580} s={1.15} at={K12.an + 20} plain />
		<PauseHold h={hold('attempt-1')} at={K12.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 13. Feedback 1 ----------
const K13 = cues(sc('feedback-1'), {find: 'Find the C', cut: 'and cut', acid: 'The acid side', three: 'has three', prop: 'propanoic acid', alc: 'The alcohol side', four: 'has four', buol: 'butan-one-ol', first: 'The alcohol part', bp: 'butyl propanoate', pb: 'Propyl butanoate', diff: 'different ester'});
export const SceneFeedback1: React.FC = () => {
	const X = 700, Y = 470, S = 1.1;
	const sd = sides(BP, X, Y, S);
	const ac = [BP.c, 1, 0].map(i => sd.P(i)), al = [4, 5, 6, 7].map(i => sd.P(i));
	const offs = (ps: V2[]) => ps.map((p, i) => [0, (i % 2 ? 1 : -1) * 50 * (p[1] > Y ? -1 : 1)] as V2);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={28} under={[{line: 1, phrase: 'carboxylic acid', at: K13.three}, {line: 1, phrase: 'alcohol', at: K13.four}, {line: 0, phrase: 'IUPAC name', at: K13.bp}]} />
			<EsterAt e={BP} x={X} y={Y} s={S} at={-100} cut={K13.cut} acidT={K13.acid} alcT={K13.alc} />
			<Locants pts={ac} at={K13.three} offs={offs(ac)} />
			<Locants pts={al} at={K13.four} offs={offs(al)} />
			<Tag x={sd.acid.x0} y={sd.acid.y1 + 30} text="acid: propanoic acid" at={K13.prop} size={28} color={AMB} fill="#fbedd0" />
			<Tag x={sd.alc.x0 + 40} y={sd.alc.y1 + 30} text="alcohol: butan-1-ol" at={K13.buol} size={28} color={BLUE} fill="#e3f0fa" />
			<EsterName x={560} y={720} at={K13.first} a={[{text: 'butyl', at: K13.bp}]} b={[{text: 'propanoate', at: K13.bp + 10}]} glow={K13.bp + 24} size={36} w={[220, 320]} />
			<AnswerChip x={1180} y={730} text="butyl propanoate" at={K13.bp + 20} size={34} />
			<Crossed x={1180} y={850} text="propyl butanoate" at={K13.pb} cross={K13.diff} note="alcohol part first: butyl" size={30} />
			{void K13.find}
		</Overlay>
	);
};

// ---------- 14. Attempt 2 ----------
const Q2 = ['A student heats 0.50 mol of propanoic acid with 0.50 mol of methanol and a few drops of concentrated', 'sulfuric acid under reflux. At equilibrium, 0.32 mol of methyl propanoate has formed.', '(a) Write a balanced equation for the reaction.', '(b) Suggest one change to the reactants that would give more than 0.32 mol of ester, and explain', "your answer using Le Chatelier's principle."];
const K14 = cues(sc('attempt-2'), {last: 'Last one', a: 'A student', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K14.last} />
		<QCardX lines={Q2} at={K14.a} y={200} size={32} />
		<PauseHold h={hold('attempt-2')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 15. Feedback 2 ----------
const K15 = cues(sc('feedback-2'), {prop: 'Propanoic acid', eq: 'in equilibrium', sulf: 'with sulfuric', excess: 'use an excess', shifts: 'shifts right', more: 'more ester', longer: 'Heating it', once: 'Once it'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={24} under={[{line: 2, phrase: 'balanced equation', at: K15.eq}, {line: 0, phrase: 'a few drops of concentrated', at: K15.sulf}, {line: 3, phrase: 'one change to the reactants', at: K15.excess}, {line: 0, phrase: '0.50 mol of methanol', at: K15.excess + 8}, {line: 4, phrase: "Le Chatelier's principle", at: K15.shifts}, {line: 1, phrase: '0.32 mol of methyl propanoate', at: K15.more}]} />
			<EqRow left={[{t: 'CH_3CH_2COOH', at: K15.prop}, {t: '+', at: K15.prop}, {t: 'CH_3OH', at: K15.prop + 10}]} right={[{t: 'CH_3CH_2COOCH_3', at: K15.eq + 20}, {t: '+', at: K15.eq + 20}, {t: 'H_2O', at: K15.eq + 26}]} cx={960} y={460} size={42} len={200} arrow={{at: K15.eq, eqAt: K15.eq, above: [{t: 'conc. H_2SO_4', at: K15.sulf}]}} />
			<AnswerChip x={140} y={560} text="use excess methanol" at={K15.excess} size={34} />
			<g opacity={vis(f, K15.shifts)}><Tag x={960} y={500} text="shifts right →" at={K15.shifts} size={28} color={NAVY} fill="#e7edf8" anchor="middle" /></g>
			<Tag x={140} y={660} text="system shifts right to use up some of the added methanol" at={K15.shifts + 10} size={24} />
			<YieldBar x={1000} y={600} w={700} at={K15.excess} keys={[{at: -100, v: 0.64}, {at: K15.more - 10, v: 0.84}]} ghost={{v: 0.64, at: K15.excess, label: '0.32 of 0.50'}} label="ester formed from the acid" />
			<Tag x={1400} y={710} text="more than 0.32 mol" at={K15.more} size={26} color="#a8761a" fill="#fbedd0" />
			<Crossed x={140} y={820} text="Heat it for longer, so more ester forms." at={K15.longer} cross={K15.longer + 40} note="at equilibrium, more time adds no ester" size={32} />
			{void K15.once}
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {so: 'So an acid', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Alcohol gets '-yl' (first), acid gets '-oate' (second)." at={K16.so} size={40} x={120} y={180} color={TEAL} />
			<TaskLine text="Catalyst: faster, not more. Heat: faster. Reflux: nothing escapes." at={K16.so + 20} size={36} x={120} y={250} color={TEAL} />
			<g opacity={vis(f, K16.next)}>
				<Plate p={REFLUX} cx={1150} top={320} h={380} />
				<Plate p={FUNNEL.clear} cx={1500} top={320} h={380} />
				<rect x={400} y={760} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={810} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={854} text="prepare a simple ester in a school laboratory" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Esterification (a condensation reaction): carboxylic acid + alcohol ⇌ ester + water, with conc. H₂SO₄ (catalyst), heated under reflux. The acid loses OH, the alcohol loses H. Ester group –COO–. Example: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O (ethyl ethanoate).',
	"Names: alcohol part first ('-yl'), acid part second ('-oate'). Working back: cut at the single-bonded O next to the C=O; the C=O side is the acid (CH₃CH₂COOCH₃ = methyl propanoate, from propanoic acid + methanol).",
	'Esters have no O–H, so no hydrogen bonds between their molecules (dipole–dipole + dispersion): similar mass, ester < alcohol < carboxylic acid (77, 138, 164 °C at 88 g/mol). Small esters are volatile and often fruity-smelling. Esters are isomers of acids; only the acid fizzes with NaHCO₃.',
	'Reversible: about 2/3 ester from equal amounts. More yield: excess reactant (it is partly used up), remove water. A catalyst reaches equilibrium sooner without changing the yield. Heating speeds the reaction. Reflux: nothing escapes.',
	'Get it out: separating funnel with water (most ethanol and H₂SO₄ dissolve in it), wash with Na₂CO₃(aq) (leftover acid becomes a salt in the water layer; vent the CO₂), separate, dry, distil. The boiling point is a rough check (ethanol boils at 78 °C).',
	'Flow chart: ethanol → (K₂Cr₂O₇/H⁺, reflux) ethanoic acid → (+ ethanol, conc. H₂SO₄, reflux) ethyl ethanoate. Main road: alkene → primary alcohol → acid → ester.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={23} aidTop={856} aids={["Alcohol gets '-yl' (first), acid gets '-oate' (second).", 'Catalyst: faster, not more. Heat: faster. Reflux: nothing escapes.']} tag="esterification, ester names, yield and separation" />
);
