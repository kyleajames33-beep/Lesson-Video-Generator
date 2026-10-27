// M7 B11 scenes 12a to 14: two unseen exam items (drug K against penicillin for a virus; one drug or three, with
// resistance probabilities), each whole on screen through "Pause here to answer." and its 10 s countdown with nothing
// answer-bearing; brief feedback with the givens underlined in the question strip as they are used and one crossed
// classic mistake (no givens card); the decision rule beside the small bench with the handoff; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ARow} from '../bio-m7-b06/s3';
import {S, hold} from './common';
import {PLATES} from './assets';
import {AMBER, AMBER_INK, CardBox, GREY_INK, GTag, MistakeChip, Pl, PlateB, StepChip, TEAL, TickMark, fitW, prog, tw, vis, wOfH} from './parts';

// ---------- item 1: drug K ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1): QBlock[] => [
	{text: 'Virus V is an RNA virus. It copies its RNA genome using its own enzyme, V polymerase.', at: t.a},
	{text: 'Human cells have no enzyme like V polymerase, so drug K does not bind to any human enzyme.', at: t.b},
	{text: 'Drug K binds to V polymerase and blocks it.', at: t.c},
	{text: 'A patient infected with virus V asks to be given penicillin instead of drug K.', at: t.d, para: true},
];
const DEM1 = (t: T1, para = false): QBlock[] => [{text: 'Explain why drug K, but not penicillin, can treat this infection, and why drug K is most effective when taken soon after symptoms begin. (3 marks)', at: t.q, weight: 700, para}];
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
qCheck([...STEM1(ALL1), ...DEM1(ALL1)], ['its own enzyme, V polymerase', 'Human cells have no enzyme like V polymerase', 'penicillin', 'soon after symptoms begin'].map(phrase => ({phrase, at: 0})));

const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', virus: 'Virus V copies', human: 'Human cells have', drug: 'Drug K blocks', patient: 'A patient infected', explain: 'Explain why drug', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.virus, b: KA.human, c: KA.drug, d: KA.patient, q: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={540} w={1640} size={36} card={false} />
				<AnsBox x={140} y={650} w={1340} h={350} at={KA.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

const KB = cues(S('feedback-one'), {only: 'an enzyme only', nowall: 'has no wall', early: 'works best early', saying: 'Saying the virus', classic: 'classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'its own enzyme, V polymerase', at: KB.only, color: TEAL},
		{phrase: 'Human cells have no enzyme like V polymerase', at: KB.only + 14, color: TEAL},
		{phrase: 'penicillin', at: KB.nowall, color: AMBER},
		{phrase: 'soon after symptoms begin', at: KB.early, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('the virus is resistant to penicillin', 30) + 48;
	return (
		<>
			<Heading text="Nothing to hit, so nothing to resist" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck([...STEM1(ALL1), ...DEM1(ALL1)].map(b => ({...b, para: false})), marks)} x={140} y={194} w={2260} size={34} card={false} s={0.72} />
				<ARow y={400} text="K: blocks a virus-only enzyme; host cells unharmed" at={KB.only + 20} lit={lit(KB.only + 20, KB.nowall)} w={1680} size={34} color={TEAL} />
				<ARow y={510} text="penicillin: targets wall building; a virus has no wall" at={KB.nowall + 10} lit={lit(KB.nowall + 10, KB.early)} w={1680} size={34} color={AMBER_INK} />
				<TickMark x={1760} y={554} at={KB.nowall + 24} ok={false} s={20} />
				<ARow y={620} text="early: K stops new copies, doesn't destroy existing viruses" at={KB.early + 10} lit={lit(KB.early + 10, KB.saying)} w={1680} size={34} color={TEAL} />
				<MistakeChip x={130} y={800} text="the virus is resistant to penicillin" at={KB.saying} cross={KB.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={806} text="there is no target to resist" at={KB.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

/** A working row set in the question font (Inter Tight carries the superscripts). */
const WorkRow: React.FC<{y: number; text: string; at: number; lit: number; color: string}> = ({y, text, at, lit, color}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.7)}>
			<rect x={120} y={y} width={1680} height={88} rx={18} fill={on ? '#fffaf0' : '#fffdf8'} stroke={on ? color : 'rgba(60,45,20,0.22)'} strokeWidth={on ? 3.5 : 2.5} />
			<text x={150} y={y + 56} style={{fontFamily: '"Inter Tight"', fontWeight: 700, fontSize: 32}} fill={on ? '#2b2620' : GREY_INK}>{text}</text>
		</g>
	);
};

// ---------- item 2: one drug or three ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2): QBlock[] => [
	{text: 'In an untreated patient, virus W produces about 10 000 000 000 (10¹⁰) new virus particles each day.', at: t.a},
	{text: 'About 1 in every 100 000 new particles (a probability of 10⁻⁵) carries resistance to drug A.', at: t.b},
	{text: 'The same is true for drug B and for drug C.', at: t.c},
	{text: "Resistance to each drug arises independently, and each drug blocks a different step in the virus's replication.", at: t.d},
];
const DEM2 = (t: T2, para = false): QBlock[] => [{text: 'Explain why treatment with drugs A, B and C together is more effective than treatment with drug A alone. (3 marks)', at: t.q, weight: 700, para}];
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
qCheck([...STEM2(ALL2), ...DEM2(ALL2)], ['about 10 000 000 000 (10¹⁰)', '1 in every 100 000', 'arises independently'].map(phrase => ({phrase, at: 0})));

const KC = cues(S('attempt-two'), {second: 'Second', untreated: 'In an untreated', about: 'About one particle', same: 'The same is', arises: 'arises separately', explain: 'Explain why treating', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.untreated, b: KC.about, c: KC.same, d: KC.arises - 20, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={250} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={560} w={1640} size={36} card={false} />
				<AnsBox x={140} y={670} w={1340} h={330} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

const KD = cues(S('feedback-two'), {hundred: 'about a hundred', all: 'resistance to A', century: 'one a century', saying: 'Saying the drugs', classic: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'about 10 000 000 000 (10¹⁰)', at: KD.hundred, color: AMBER},
		{phrase: '1 in every 100 000', at: KD.hundred + 14, color: AMBER},
		{phrase: 'arises independently', at: KD.all, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('the drugs make the virus mutate', 30) + 48;
	return (
		<>
			<Heading text="Three at once: very unlikely" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck([...STEM2(ALL2), ...DEM2(ALL2)], marks)} x={140} y={194} w={2260} size={34} card={false} s={0.72} />
				<WorkRow y={400} text="A alone: 10¹⁰ ÷ 10⁵ = 10⁵ resistant particles a day: selected, so A fails" at={KD.hundred + 20} lit={lit(KD.hundred + 20, KD.all)} color={AMBER} />
				<WorkRow y={510} text="A, B and C: 10⁻⁵ × 10⁻⁵ × 10⁻⁵ = 10⁻¹⁵ per particle; 10¹⁰ × 10⁻¹⁵ = 10⁻⁵ a day" at={KD.all + 10} lit={lit(KD.all + 10, KD.saying)} color={TEAL} />
				<GTag x={150} y={620} text="1 every 100 000 days (about 270 years)" at={KD.century + 6} size={24} />
				<MistakeChip x={130} y={800} text="the drugs make the virus mutate" at={KD.saying} cross={KD.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={806} text="variants arise by chance; the drug selects" at={KD.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {why: 'ask why the', which: 'which step it', how: 'how resistance could', next: 'Next, a practical'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [{at: KE.why, text: 'why does it harm the pathogen more than us?'}, {at: KE.which, text: 'which step does it block?'}, {at: KE.how, text: 'how could resistance be selected?'}];
	return (
		<>
			<Heading text="Difference, step, selection" at={4} size={56} />
			<Overlay>
				<Pl p={PLATES.bac} cx={290} cy={330} w={360} o={prog(f, 0, 14)} />
				<GTag x={290} y={440} text="bacterium" at={4} size={18} anchor="middle" />
				<PlateB p={PLATES.blocked} cx={290} cy={660} w={wOfH(PLATES.blocked, 300)} o={prog(f, 4, 14)} />
				<GTag x={290} y={830} text="virus in an airway cell" at={8} size={18} anchor="middle" />
				{chips.map((c, i) => <StepChip key={i} x={600} y={250 + i * 140} w={1220} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={720} y={880} w={1100} text="Next: testing antimicrobials on agar" at={KE.next}>
					<Pl p={PLATES.agar} cx={790} cy={922} w={fitW(PLATES.agar, 70, 70)} />
				</NextChip>
				{void GREY_INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Selective toxicity: a drug harms the pathogen much more than the host, often by hitting something the pathogen has and our cells lack, or have in a different form.',
	'Antibiotics act on bacteria: penicillin stops wall building, so growing bacteria burst (our cells have no wall); others block bacterial ribosomes. Some kill (bactericidal); some stop growth so the immune system clears the rest (bacteriostatic). They have no effect on viruses (no wall, no ribosomes), but still select resistant bacteria in the body.',
	'Antivirals block a step the virus needs: entry, copying (viral polymerase) or release (oseltamivir blocks flu neuraminidase). Many target a viral enzyme; some block a host part the virus needs. They stop new viruses but don\'t destroy existing ones, so the flu antiviral helps most early; for HIV, treatment controls an established infection. Most are narrow, though some act on several virus families; there are far fewer of them than antibiotics.',
	"Resistance: the drug selects microbes that already carry resistance; it doesn't create it. Bacteria share resistance genes on plasmids, even between species. Bacteria become resistant, not people. Combination therapy (HIV, three drugs) makes resistance to all three at once very unlikely.",
	'Use well: not for viral infections, not routinely in healthy farm animals, exactly as prescribed, reserve antibiotics. Assess effectiveness by selectivity (why it spares our cells), breadth and how long a drug keeps working (every use selects resistance; the burden in 2021: about 1.14 million deaths directly caused by resistant bacteria).',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Antivirals block a step the virus needs. The drug selects resistance; it doesn't create it." tag="Selective toxicity: harm the pathogen much more than the host." size={23} aidTop={850} />
);
