// M7 B07 scenes 13a to 15: two unseen exam items (serum from a mouse injected with killed bacterium A, mixed with A
// and with B; evaluate a claim that B cells must design an antibody), each whole on screen through "Pause here to
// answer." and its 10 s countdown, with no plates, tubes, strip or shape model; brief feedback with the givens
// underlined in the question strip as they are used and one crossed classic mistake (no givens card); the decision
// rule beside the small strip with the handoff to T cells; the key notes.
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
import {PLATES2} from './plates2';
import {strip7} from './board';
import {AMBER, AMBER_INK, CARD, CardBox, CloneTree, GREY_INK, GTag, INK, INK_SOFT, PlainArrow, PlateB, Sx, TEAL, prog, tw, vis} from './parts';

// ---------- item 1: two tubes ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'A mouse was injected with killed cells of bacterium A.', at: t.a},
	{text: 'Two weeks later, a sample of serum (the liquid part of the blood, without cells) was taken from the mouse.', at: t.b},
	{text: 'The serum was mixed with bacterium A in tube 1 and with bacterium B in tube 2.', at: t.c},
	{text: 'In tube 1, the bacteria clumped together. In tube 2, the bacteria stayed evenly spread through the liquid.', at: t.d},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Explain the results in both tubes. (4 marks)', at: t.q, weight: 700}] as QBlock[];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, q: 0}), ['killed cells of bacterium A', 'Two weeks later', 'serum', 'clumped together', 'stayed evenly spread'].map(phrase => ({phrase, at: 0})));

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', mouse: 'A mouse was', weeks: 'Two weeks later', serum: 'The serum was mixed', tube: ['In tube one', 2], explain: 'Explain the results', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	// Quality fix (6 Nov): the whole question lands with its card (read along), and painted plates carry the named
	// things on their cues: the mouse, then bacterium A in tube 1 and bacterium B in tube 2. Nothing answer-bearing.
	const f = useCurrentFrame();
	const c = KA.first;
	const t: T1 = {a: c, b: c, c: c, d: c, q: c};
	const h = hold('attempt');
	const tubesO = prog(f, KA.serum + 4, 14);
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={c - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1120} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={610} w={1120} size={36} card={false} />
				<AnsBox x={140} y={660} w={1120} h={340} at={KA.explain + 30} />
				<PlateB p={PLATES2.mouse} cx={1550} cy={290} w={340} o={prog(f, KA.mouse, 14)} />
				<Sx x={1550} y={440} text="injected: killed bacterium A" size={30} color={INK_SOFT} weight={600} anchor="middle" at={KA.mouse + 12} />
				<g opacity={tubesO}>
					<rect x={1330} y={480} width={210} height={250} rx={22} fill="#fffaf0" stroke={EDGE_Q} strokeWidth={2.5} />
					<rect x={1570} y={480} width={210} height={250} rx={22} fill="#fffaf0" stroke={EDGE_Q} strokeWidth={2.5} />
					<PlateB p={PLATES.bact} cx={1435} cy={615} w={190} />
					<PlateB p={PLATES.coccus} cx={1675} cy={615} w={110} id="b07-q1-cc" />
					<Sx x={1435} y={526} text="tube 1" size={32} color={INK} weight={700} anchor="middle" at={-100} />
					<Sx x={1675} y={526} text="tube 2" size={32} color={INK} weight={700} anchor="middle" at={-100} />
					<Sx x={1435} y={710} text="bacterium A" size={28} color={INK_SOFT} weight={600} anchor="middle" at={-100} />
					<Sx x={1675} y={710} text="bacterium B" size={28} color={INK_SOFT} weight={600} anchor="middle" at={-100} />
				</g>
				<Sx x={1555} y={772} text="+ serum from the mouse" size={28} color={INK_SOFT} weight={600} anchor="middle" at={KA.serum + 14} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
				{void KA.weeks}{void KA.tube}
			</Overlay>
		</>
	);
};
const EDGE_Q = '#d9cdb8';

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {selected: 'antigens selected the', released: 'released antibodies', linked: 'linked them into', visibly: 'visibly clump', alone: 'this test alone', saying: 'Saying they killed', mistake: 'classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const all: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
	const marks: QMark[] = [
		{phrase: 'killed cells of bacterium A', at: KB.selected, color: TEAL},
		{phrase: 'Two weeks later', at: KB.released, color: TEAL},
		{phrase: 'serum', at: KB.released + 8, color: TEAL},
		{phrase: 'clumped together', at: KB.linked, color: TEAL},
		{phrase: 'stayed evenly spread', at: KB.visibly, color: AMBER},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('antibodies killed bacterium A', 30) + 48;
	return (
		<>
			<Heading text="Clumping shows binding" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck(STEM1(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<Sx x={130} y={410} text={"A's antigens → fitting B cells → clone → plasma cells"} size={36} color={lit(KB.selected, KB.linked) > 0.5 ? INK_SOFT : GREY_INK} hand weight={700} at={KB.selected + 6} />
				<Sx x={1110} y={410} text={"→ antibodies in serum"} size={36} color={lit(KB.released, KB.linked) > 0.5 ? TEAL : GREY_INK} hand weight={700} at={KB.released + 10} />
				<ARow y={450} label="tube 1" text="antibodies bind A; two arms link cells" at={KB.linked + 4} lit={lit(KB.linked, KB.visibly)} />
				<ARow y={560} label="tube 2" text="no visible clumping: no evidence of antibodies linking B" at={KB.visibly + 6} lit={lit(KB.visibly, KB.saying)} color={AMBER_INK} />
				<Sx x={390} y={690} text="B may lack the matching antigen: this test alone can't tell" size={28} color={GREY_INK} weight={600} at={KB.alone + 4} />
				<MistakeChip x={130} y={770} text="antibodies killed bacterium A" at={KB.saying} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={776} text="clumping shows binding, not killing" at={KB.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- item 2: a claim about time ----------
type T2 = {a: number; claim: number; d: number};
const STEM2 = (t: T2) => [{text: 'After a first infection with a new pathogen, antibodies against it are usually first detected in the blood about 7 to 10 days later.', at: t.a}] as QBlock[];
const CLAIM = (at: number) => [{text: '"It takes this long because B cells must first design an antibody that fits the new pathogen."', at}] as QBlock[];
const DEM2 = (t: T2) => [{text: "Evaluate the student's claim. (3 marks)", at: t.d, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, claim: 0, d: 0}), [{phrase: 'about 7 to 10 days later', at: 0}]);
qCheck(CLAIM(0), [{phrase: 'design an antibody', at: 0}]);
const ClaimBox: React.FC<{x: number; y: number; w: number; at: number; s?: number; marks?: QMark[]}> = ({x, y, w, at, s = 1, marks = []}) => {
	const f = useCurrentFrame();
	return (
		<g transform={s !== 1 ? `translate(${x},${y}) scale(${s}) translate(${-x},${-y})` : undefined}>
			<g opacity={prog(f, at - 6, 12)}>
				<rect x={x} y={y} width={w} height={150} rx={16} fill="#fffaf0" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<Sx x={x + 26} y={y + 38} text="Student's claim" size={26} color={INK_SOFT} weight={700} at={-100} />
			</g>
			<QText q={qCheck(CLAIM(at), marks)} x={x + 26} y={y + 84} w={w - 52} size={34} card={false} />
		</g>
	);
};

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', anti: 'Antibodies against a', week: 'a week or more', student: 'A student says', evaluate: 'Evaluate the', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	// Quality fix (6 Nov): the whole question lands with its card, and a small painted timeline carries the given
	// (new pathogen at day 0, antibodies first detected 7 to 10 days later). No B cells, so nothing answer-bearing.
	const f = useCurrentFrame();
	const c = KC.second + 8;
	const t: T2 = {a: c, claim: c, d: c};
	const h = hold('attempt-two');
	const dayO = prog(f, KC.week, 14);
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<ClaimBox x={140} y={330} w={1220} at={t.claim} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={550} w={1220} size={36} card={false} />
				<AnsBox x={140} y={620} w={1220} h={380} at={KC.evaluate + 30} />
				<PlateB p={PLATES.bact} cx={1610} cy={410} w={260} o={prog(f, KC.anti, 14)} />
				<Sx x={1610} y={510} text="day 0: new pathogen" size={28} color={INK_SOFT} weight={600} anchor="middle" at={KC.anti + 8} />
				{f >= KC.week - 10 ? <PlainArrow x1={1610} y1={532} x2={1610} y2={590} at={KC.week - 10} color={AMBER} width={4} /> : null}
				<PlateB p={PLATES.antibody} cx={1610} cy={650} w={120} o={dayO} />
				<Sx x={1610} y={738} text="day 7 to 10:" size={28} color={AMBER_INK} weight={700} anchor="middle" at={KC.week + 8} />
				<Sx x={1610} y={770} text="antibodies detected" size={28} color={AMBER_INK} weight={700} anchor="middle" at={KC.week + 8} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
				{void KC.student}{void KC.evaluate}
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {real: 'The delay is real', exist: 'already exist before', rare: 'cells are rare', divide: 'divide many times', thinking: 'Thinking the pathogen', mistake: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const all: T2 = {a: -100, claim: -100, d: -100};
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="Selection, not design" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck(STEM2(all), [{phrase: 'about 7 to 10 days later', at: KD.rare, color: TEAL}])} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<ClaimBox x={140} y={226} w={1900} at={-100} s={0.74} marks={[{phrase: 'design an antibody', at: KD.exist, color: AMBER}]} />
				<g opacity={prog(f, KD.real + 4, 12)}>
					<rect x={120} y={370} width={tw('delay: real; reason: not supported', 34, true) * 1.06 + 50} height={62} rx={31} fill="#fff3d9" stroke={AMBER} strokeWidth={3} />
					<Sx x={145} y={413} text="delay: real; reason: not supported" size={34} color={AMBER_INK} hand weight={700} at={-100} />
				</g>
				<ARow y={460} text="fitting B cells already exist: selection, not design" at={KD.exist + 6} lit={lit(KD.exist, KD.rare)} />
				<ARow y={570} text="delay: rare cells must be selected and multiply" at={KD.rare + 6} lit={lit(KD.rare, KD.thinking)} w={1380} />
				<g opacity={prog(f, KD.divide, 12) * 0.8} style={{filter: 'grayscale(0.8)'}}>
					<CloneTree x={1530} y={614} dx={40} h={80} cellW={24} at={KD.divide} step={6} cluster={{cx: 1730, cy: 614, rx: 30, ry: 34}} />
				</g>
				<MistakeChip x={130} y={740} text="pathogen tells the cell what to make" at={KD.thinking} cross={KD.mistake + 6} size={30} />
				{void CARD}{void INK}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', which: 'say which B', selected: 'selected and multiplied', plasma: 'what plasma cells', anti: 'what the antibodies', next: 'Next, the T'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const strip = strip7(5, [], {x: 90, y: 190, w: 340, rh: 70, gap: 16, stepH: 56, size: 26});
	strip.rungs = strip.rungs.map(r => ({...r, thumbs: []}));
	const R = stripRects(strip);
	const steps = [
		{at: KE.which, text: 'which B cells fit'},
		{at: KE.selected, text: 'selected, then cloned'},
		{at: KE.plasma, text: 'plasma cells: antibodies'},
		{at: KE.anti, text: 'antibodies: block, clump, coat'},
	];
	const y0 = R[3].y + 10;
	return (
		<>
			<Heading text="Fit, select, clone, release, bind" at={KE.so} size={56} />
			<Overlay>
				<ResponseStrip {...strip} />
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = y0 - 260 + i * 130;
					const next = steps[i + 1]?.at ?? KE.next;
					const dim = 1 - 0.35 * prog(f, next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(${(1 - o) * 18},0)`}>
							<rect x={540} y={y} width={1240} height={96} rx={26} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={580} y={y + 64} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={650} y={y + 64} text={s.text} size={42} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={930} w={1100} text="Next: how T cells respond to infected cells" at={KE.next}>
					<PlateB p={PLATES.tcell} cx={780} cy={972} w={64} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	"Antigen: a molecule the immune system can recognise, usually a protein or sugar chain on a pathogen's surface.",
	'Antibody: a Y-shaped protein with two identical binding sites at its arm tips.',
	"A B cell's receptors are antibodies held in its membrane. Each B cell has one receptor shape.",
	'Random shuffling of receptor genes makes millions of shapes before any infection.',
	'Clonal selection: the antigen picks out the few fitting B cells (usually with a helper T cell go-ahead).',
	'The chosen cell divides into a clone (days): plasma cells release antibodies; memory B cells stay.',
	"Antibodies don't kill: they block attachment and toxins, clump bacteria and coat them for phagocytes.",
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Clonal selection: the name is the process." tag="selected, then cloned" size={32} aidTop={820} />
);
