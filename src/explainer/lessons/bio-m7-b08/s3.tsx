// M7 B08 scenes 13a to 15: two unseen exam items (cytotoxic T cells from a mouse infected with virus X mixed with
// three groups of cells; evaluate a claim that losing helper T cells weakens only the T cell arm), each whole on screen
// through "Pause here to answer." and its 10 s countdown, with no plates, strip or display model; brief feedback with
// the givens underlined in the question strip as they are used and one crossed classic mistake (no givens card); the
// decision rule beside the small strip with the handoff to immune memory; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ResponseStrip, stripRects} from '../bio-m7-b06/strip';
import {ARow} from '../bio-m7-b06/s3';
import {S, hold} from './common';
import {PLATES} from './assets';
import {strip8} from './board';
import {AMBER, AMBER_INK, CARD, CardBox, GREY_INK, GTag, INK, INK_SOFT, PlateB, Sx, TEAL, prog, tw, vis} from './parts';

/** A dashed claim box with a worded claim (marks underline its phrases on cue). Shared with b09. */
export const ClaimBox: React.FC<{x: number; y: number; w: number; at: number; text: string; label?: string; s?: number; marks?: QMark[]; h?: number}> = ({x, y, w, at, text, label = "Student's claim", s = 1, marks = [], h = 150}) => {
	const f = useCurrentFrame();
	return (
		<g transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			<g opacity={prog(f, at - 6, 12)}>
				<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffaf0" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<Sx x={x + 26} y={y + 38} text={label} size={26} color={INK_SOFT} weight={700} at={-100} />
			</g>
			<QText q={qCheck([{text, at}], marks)} x={x + 26} y={y + 84} w={w - 52} size={34} card={false} />
		</g>
	);
};
/** A rounded verdict chip. */
export const Verdict: React.FC<{x: number; y: number; text: string; at: number; size?: number}> = ({x, y, text, at, size = 32}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={prog(f, at, 12)}>
			<rect x={x} y={y} width={tw(text, size, true) * 1.06 + 50} height={size + 30} rx={(size + 30) / 2} fill="#fff3d9" stroke={AMBER} strokeWidth={3} />
			<Sx x={x + 25} y={y + size + 6} text={text} size={size} color={AMBER_INK} hand weight={700} at={-100} />
		</g>
	);
};

// ---------- item 1: three groups ----------
type T1 = {a: number; b: number; g1: number; g2: number; g3: number; k: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'Cytotoxic T cells were collected from a mouse infected with virus X.', at: t.a},
	{text: 'The T cells were mixed with three groups of body cells, all taken from mice of the same strain.', at: t.b},
	{text: 'Group 1: uninfected cells.', at: t.g1, para: true},
	{text: 'Group 2: cells infected with virus X.', at: t.g2, para: true},
	{text: 'Group 3: cells infected with virus Y.', at: t.g3, para: true},
	{text: 'Only the cells in group 2 were killed.', at: t.k, para: true},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Explain these results. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['mouse infected with virus X', 'uninfected cells', 'cells infected with virus X', 'cells infected with virus Y', 'Only the cells in group 2 were killed'];
qCheck(STEM1({a: 0, b: 0, g1: 0, g2: 0, g3: 0, k: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', cyto: 'Cytotoxic T cells were', mixed: 'They were mixed', g1: 'Group one', g2: 'Group two', g3: 'Group three', only: 'Only the group', explain: 'Explain these', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.cyto, b: KA.mixed, g1: KA.g1, g2: KA.g2, g3: KA.g3, k: KA.only, q: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={640} w={1640} size={36} card={false} />
				<AnsBox x={140} y={700} w={1340} h={300} at={KA.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {sel: 'Virus X selected', g2: 'Group two cells displayed', g1: 'Group one cells', y: 'virus Y pieces', saying: 'Saying the T', mistake: 'classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const all: T1 = {a: -100, b: -100, g1: -100, g2: -100, g3: -100, k: -100, q: -100};
	const marks: QMark[] = [
		{phrase: 'mouse infected with virus X', at: KB.sel + 4, color: TEAL},
		{phrase: 'cells infected with virus X', at: KB.g2 + 4, color: TEAL},
		{phrase: 'Only the cells in group 2 were killed', at: KB.g2 + 20, color: TEAL},
		{phrase: 'uninfected cells', at: KB.g1 + 4, color: TEAL},
		{phrase: 'cells infected with virus Y', at: KB.y, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('T cells killed the virus', 30) + 48;
	return (
		<>
			<Heading text="Only matching pieces are killed" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={270} at={-100} />
				<QText q={qCheck(STEM1(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<Sx x={130} y={470} text={'virus X → fitting cytotoxic T cells selected and cloned'} size={36} color={lit(KB.sel, KB.g2) > 0.5 ? INK_SOFT : GREY_INK} hand weight={700} at={KB.sel + 8} />
				<ARow y={500} label="group 1" text="own pieces only: no fit" at={KB.g1 + 8} lit={lit(KB.g1, KB.y)} color={GREY_INK} />
				<ARow y={600} label="group 2" text={'displays X pieces → receptors fit → apoptosis'} at={KB.g2 + 8} lit={lit(KB.g2, KB.g1)} color={AMBER_INK} />
				<ARow y={700} label="group 3" text={"Y pieces: don't fit X receptors"} at={KB.y + 8} lit={lit(KB.y, KB.saying)} color={GREY_INK} />
				<GTag x={130} y={808} text="same strain: same display molecules" at={KB.y + 30} size={22} />
				<MistakeChip x={130} y={870} text="T cells killed the virus" at={KB.saying} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={876} text="they kill infected cells" at={KB.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- item 2: a claim about HIV ----------
type T2 = {a: number; b: number; claim: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'HIV (human immunodeficiency virus) infects and destroys helper T cells.', at: t.a},
	{text: 'Over several years without treatment, the number of helper T cells in the blood falls.', at: t.b},
] as QBlock[];
const CLAIM2 = '"Losing helper T cells weakens only the T cell arm of the immune system, because antibodies are made by B cells."';
const DEM2 = (t: T2) => [{text: "Evaluate the student's claim. (4 marks)", at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, claim: 0, q: 0}), [{phrase: 'destroys helper T cells', at: 0}]);
qCheck([{text: CLAIM2, at: 0}], [{phrase: 'antibodies are made by B cells', at: 0}]);

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', hiv: 'HIV infects', without: 'Without treatment', student: 'A student says', evaluate: 'Evaluate the', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.hiv, b: KC.without, claim: KC.student, q: KC.evaluate};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<ClaimBox x={140} y={360} w={1640} at={t.claim} text={CLAIM2} h={160} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={590} w={1640} size={36} card={false} />
				<AnsBox x={140} y={650} w={1340} h={350} at={KC.evaluate + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {make: 'B cells do make', claim: 'but the claim', most: 'Most B cells need', cyto: 'Cytotoxic T cells rely', both: 'Both arms weaken', thinking: 'Thinking B cells', mistake: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const all: T2 = {a: -100, b: -100, claim: -100, q: -100};
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const thumb = strip8(5, [0, 1, 2, 3, 4].map(() => ({lit: 0})), {x: 1500, y: 470, w: 300, rh: 30, gap: 6, stepH: 30, size: 14});
	thumb.rungs = thumb.rungs.map(r => ({...r, thumbs: [], label: r.steps ? r.label : undefined}));
	return (
		<>
			<Heading text="Helpers switch on both arms" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={250} at={-100} />
				<QText q={qCheck(STEM2(all), [{phrase: 'destroys helper T cells', at: KD.cyto, color: TEAL}])} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<ClaimBox x={140} y={250} w={2200} at={-100} text={CLAIM2} s={0.74} marks={[{phrase: 'antibodies are made by B cells', at: KD.make + 4, color: AMBER}]} h={180} />
				<Verdict x={120} y={430} text="B cells make antibodies: true. Only the T cell arm: not supported" at={KD.claim + 6} size={30} />
				<ARow y={520} text={'B cells: usually need the helper\'s go-ahead → fewer plasma cells, less antibody'} at={KD.most + 6} lit={lit(KD.most, KD.cyto)} w={1340} size={34} />
				<ARow y={630} text={'cytotoxic T cells: rely on helper cytokines to multiply → fewer killers'} at={KD.cyto + 6} lit={lit(KD.cyto, KD.both)} w={1340} size={34} />
				<g opacity={prog(f, KD.both, 12)} style={{filter: 'grayscale(0.85)'}}>
					<ResponseStrip {...thumb} o={1 - 0.5 * prog(f, KD.both + 20, 20)} />
				</g>
				<GTag x={1500} y={430} text="both arms weaken" at={KD.both + 8} size={24} />
				<MistakeChip x={130} y={790} text="B cells work without helper T cells" at={KD.thinking} cross={KD.mistake + 6} size={30} />
				{void CARD}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', which: 'which cell displays', fit: 'which T cells fit', helper: 'what helper T', cyto: 'how cytotoxic', next: 'Next, why'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const strip = strip8(5, [], {x: 70, y: 190, w: 420, rh: 64, gap: 14, stepH: 50, size: 24});
	strip.rungs = strip.rungs.map(r => ({...r, thumbs: []}));
	const R = stripRects(strip);
	const steps = [
		{at: KE.which, text: 'who displays the pieces'},
		{at: KE.fit, text: 'fitting T cells: selected, cloned'},
		{at: KE.helper, text: 'helpers: cytokines to B cells and killers'},
		{at: KE.cyto, text: 'killers: bind, apoptosis'},
	];
	return (
		<>
			<Heading text="Display, fit, signal, destroy" at={KE.so} size={56} />
			<Overlay>
				<ResponseStrip {...strip} />
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = R[3].y - 120 + i * 130;
					const next = steps[i + 1]?.at ?? KE.next;
					const dim = 1 - 0.35 * prog(f, next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(${(1 - o) * 18},0)`}>
							<rect x={560} y={y} width={1240} height={96} rx={26} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={600} y={y + 64} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={670} y={y + 64} text={s.text} size={42} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={940} w={1100} text="Next: why a second infection is often stopped faster" at={KE.next}>
					<PlateB p={PLATES.helper} cx={780} cy={982} w={60} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	"Antibodies can't reach a virus inside a cell. Cell-mediated immunity: T cells act on infected cells.",
	'Antigen presentation: almost every cell displays pieces of the proteins it makes in display molecules (MHC). Infected cells display virus pieces; dendritic cells display pieces of what they took up.',
	'A T cell receptor fits a displayed piece together with its display molecule, not free virus. In a lymph node, the few fitting T cells are selected and cloned (days): helper and cytotoxic T cells.',
	'Helper T cells mainly coordinate: they release cytokines that give B cells the go-ahead, make cytotoxic T cells multiply and make macrophages better at destroying what they engulf.',
	'Cytotoxic T cells bind infected cells displaying the matching piece and trigger apoptosis (self-destruct); healthy cells are left alone. NK cells (innate) also kill infected cells, without a receptor for one pathogen.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="B cells make antiBodies; T cells Terminate or Tell." tag="cytotoxic T cells terminate infected cells; helper T cells tell other cells to act" size={27} aidTop={850} />
);
