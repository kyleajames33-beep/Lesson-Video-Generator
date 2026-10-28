// M7 C14 scenes 11 to 16: attempt 1 (repeat unit of CH2=CCl2; monomer of [–CH2–CH(CH3)–]n), brief feedback, attempt 2
// (HDPE against LDPE; recycling), brief feedback, the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {HDPE, LDPE, OBJ, hold, sc} from './common';
import {ChainBox, INK, NAVY, RU} from './parts';

const SY = 60;

// ---------- 11. Attempt 1 ----------
const Q1 = ['(a) 1,1-Dichloroethene, CH₂=CCl₂, forms an addition polymer. Draw the repeat unit of this polymer.', '(b) Another addition polymer has the repeat unit shown. Name and draw its monomer.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', a: '1,1-dichloroethene', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K11.turn} />
		<QCardX lines={Q1} at={K11.a} y={200} size={34} />
		<Sx x={1000} y={560} text="(b)" size={34} color={INK} weight={700} at={K11.a + 20} />
		<RU x={1250} y={560} s={0.95} subs={[['H', 'H'], ['H', 'CH3']]} at={K11.a + 20} stamp={-100} />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 12. Feedback 1 ----------
const K12 = cues(sc('feedback-1'), {open: 'Open the', brackets: 'brackets', second: 'For the second', propene: 'propene,', trap: 'trap', gives: 'That gives'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<QCardX lines={Q1} at={-100} y={SY} size={28} under={[{line: 0, phrase: 'CH₂=CCl₂', at: K12.open}, {line: 0, phrase: 'repeat unit', at: K12.brackets}, {line: 1, phrase: 'the repeat unit shown', at: K12.second}, {line: 1, phrase: 'Name and draw its monomer', at: K12.propene}]} />
		<RU x={480} y={480} s={1.05} subs={[['H', 'H'], ['Cl', 'Cl']]} at={K12.open} stamp={K12.brackets} />
		<AnswerChip x={480} y={700} text="[–CH₂–CCl₂–]ₙ" at={K12.brackets + 10} size={32} anchor="middle" />
		<RU x={1300} y={480} s={1.05} subs={[['H', 'H'], ['H', 'CH3']]} at={K12.second - 20} unstamp={K12.second + 20} />
		<AnswerChip x={1300} y={700} text="propene, CH₂=CH–CH₃" at={K12.propene} size={32} anchor="middle" />
		<Crossed x={140} y={840} text="monomer: CH₃–CH₂–CH₃" at={K12.trap - 20} cross={K12.trap + 10} note="no extra H: restore the C=C" size={32} />
		{void K12.gives}
	</Overlay>
);

// ---------- 13. Attempt 2 ----------
const Q2 = ['High-density polyethylene (HDPE) is used for rigid chopping boards, and low-density polyethylene', '(LDPE) is used for soft squeeze bottles. Both are made from ethene. Explain how differences in chain', 'structure lead to these different properties, and explain why both can be melted and remoulded for', 'recycling.'];
const K13 = cues(sc('attempt-2'), {last: 'Last one', h: 'HDPE is', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K13.last} />
		<QCardX lines={Q2} at={K13.h} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 2 ----------
const K14 = cues(sc('feedback-2'), {str: 'straight', ldpe: "LDPE's", no: 'No bonds', slide: 'slide,', trap: 'trap', only: 'Only the'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const slide = vis(f, K14.slide - 20, K14.slide + 60, 16);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={26} under={[{line: 0, phrase: 'rigid chopping boards', at: K14.str}, {line: 1, phrase: 'soft squeeze bottles', at: K14.ldpe}, {line: 1, phrase: 'chain', at: K14.str + 6}, {line: 2, phrase: 'melted and remoulded', at: K14.slide}]} />
			<ChainBox x={200} y={330} w={560} h={300} at={K14.str - 10} c={{ticks: 1, slide, heat: slide}} />
			<Tag x={200} y={650} text="HDPE straight: packed, stronger dispersion, stiff" at={K14.str + 10} size={24} color={NAVY} fill="#e7edf8" />
			<ChainBox x={1000} y={330} w={560} h={300} at={K14.ldpe - 10} c={{branch: 1, spread: 1, ticks: 0.5, slide, heat: slide}} />
			<Tag x={1000} y={650} text="LDPE branched: apart, weaker forces, soft" at={K14.ldpe + 10} size={24} color="#2d6f9e" fill="#e3f0fa" />
			<g opacity={vis(f, K14.str + 20)}><Plate p={HDPE} cx={1700} top={300} h={110} /></g>
			<g opacity={vis(f, K14.ldpe + 20)}><Plate p={LDPE} cx={1700} top={450} h={150} /></g>
			<Tag x={200} y={730} text="no bonds between chains: heat lets them slide; chain bonds intact" at={K14.slide} size={26} color={TEAL} fill="#dff2ef" />
			<Crossed x={140} y={840} text="Melting breaks the covalent bonds in the chains." at={K14.trap - 30} cross={K14.trap} note="only the forces between chains are overcome" size={30} />
			{void K14.no}{void K14.only}{void prog}
		</Overlay>
	);
};

// ---------- 15. Handoff ----------
const K15 = cues(sc('handoff'), {next: 'Next:', join: 'join'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const bottle = ptOn(OBJ, 960, 300, 380, 1640, 1040);
	return (
		<Overlay>
			<TaskLine text="Open the double bond, add brackets. Nothing lost." at={0} size={40} x={120} y={170} color={TEAL} />
			<Plate p={OBJ} cx={960} top={300} h={380} at={0} />
			<RingAt c={bottle} rx={70} ry={140} at={10} />
			<g opacity={vis(f, K15.next)}>
				<rect x={400} y={780} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={830} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={874} text="how does condensation build a polymer?" size={34} color={INK} weight={700} at={-1000} />
			</g>
			{void K15.join}{void NAVY}
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	"Addition polymerisation: the C=C's second bond breaks and each carbon bonds to the next monomer, thousands of times; nothing else forms. n CH₂=CHCl → [–CH₂–CHCl–]ₙ (PVC).",
	'Repeat unit: single bond between the two backbone carbons, side groups kept, a continuation bond through each bracket, n outside. Monomer from repeat unit: restore the C=C; add no H.',
	'Chains are held only by intermolecular forces along their length (no bonds between chains). Thermoplastic: heating lets chains slide (chain bonds stay intact), so it softens and can be remoulded and recycled.',
	'LDPE (branched): poor packing, weaker dispersion, softer, lower melting (about 110 °C): squeeze bottles, films. HDPE (straight): close packing, stronger dispersion, stiffer, denser (about 130 °C): crates, milk bottles.',
	'PVC (CH₂=CHCl): polar C–Cl adds dipole–dipole, rigid (pipes); plasticisers push chains apart, flexible (cable coating).',
	"PS (CH₂=CHC₆H₅): bulky, stiff rings stop chains sliding, rigid and brittle; foam traps air, insulates (cups). PTFE (CF₂=CF₂): strong C–F bonds and F sheath, chemically resistant; even F coating cancels the C–F dipoles and F's electrons hardly shift, so only very weak surface forces: non-stick (pans, plumber's tape).",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={23} aidTop={860} aids={['Open the double bond, add brackets. Nothing lost.', 'structure → forces → property → use']} tag="addition polymers: repeat units, structure and properties" />
);
