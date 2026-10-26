// M7 B09 scenes 13a to 15: two unseen exam items (a rabbit's antibodies to antigens P and Q on a coded log graph;
// evaluate a friend's claim that antivenom has made a bushwalker immune), each whole on screen, graph included,
// through "Pause here to answer." and its 10 s countdown, with nothing answer-bearing; brief feedback with the givens
// underlined in the question strip as they are used and one crossed classic mistake (no givens card); the decision
// rule beside the small table and graph with the handoff to practice; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ARow} from '../bio-m7-b06/s3';
import {ClaimBox, Verdict} from '../bio-m7-b08/s3';
import {WText} from '../bio-m6-p01/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {story, T2} from './s1';
import {
	AMBER, AMBER_INK, Axes, CARD, CardBox, Curve, EDGE, ExpArrow, GREY_INK, GTag, INK, INK_SOFT, ImmTable, PlateB, Sx, TEAL, interp, prog, quad, tw, vis,
} from './parts';
import type {G, Pts} from './parts';

// ---------- the card graph (anti-P and anti-Q, log scale) ----------
const P_PTS: Pts = [[0, 1], [6, 1], [14, 20], [40, 4], [42, 4], [48, 800], [70, 300]];
const Q_PTS: Pts = [[40, 1], [46, 1], [54, 20], [70, 8]];
const CardGraph: React.FC<{g: G; at: number; size?: number; pGlow?: number; qGlow?: number; pColor?: string; qColor?: string}> = ({g, at, size = 22, pGlow = 0, qGlow = 0, pColor = INK_SOFT, qColor = INK_SOFT}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const pEnd = interp(P_PTS, 70), qEnd = interp(Q_PTS, 70);
	return (
		<g opacity={o}>
			<Axes g={g} at={at} xMax={70} logT={1} xLabel="time (days)" yLabel="antibody concentration (arbitrary units)" xTicks={[0, 10, 20, 30, 40, 50, 60, 70]} size={size} />
			<Curve g={g} xMax={70} logT={1} fn={t => interp(P_PTS, t)} t0={0} tEnd={40} color={INK_SOFT} width={4} />
			<Curve g={g} xMax={70} logT={1} fn={t => interp(P_PTS, t)} t0={40} tEnd={70} color={pColor} width={4 + 2 * pGlow} glow={pGlow} />
			<Curve g={g} xMax={70} logT={1} fn={t => interp(Q_PTS, t)} t0={40} tEnd={70} color={qColor} width={4 + 2 * qGlow} dash="12 9" glow={qGlow} />
			<Sx x={g.x0 + g.w + 8} y={g.y0 + g.h - (Math.log10(pEnd) / 3) * g.h + 8} text="anti-P" size={size} color={INK} weight={700} at={-100} />
			<Sx x={g.x0 + g.w + 8} y={g.y0 + g.h - (Math.log10(qEnd) / 3) * g.h + 8} text="anti-Q" size={size} color={INK} weight={700} at={-100} />
			<ExpArrow g={g} xMax={70} t={0} label="P" at={-100} size={size} dy={-24} color={INK_SOFT} />
			<ExpArrow g={g} xMax={70} t={40} label="P + Q" at={-100} size={size} dy={-24} color={INK_SOFT} />
		</g>
	);
};

// ---------- item 1: two antigens ----------
type T1 = {g: number; a: number; b: number; q: number};
const STEM1 = (t: T1) => [
	{text: "The graph shows the concentration of antibodies against antigens P and Q in a rabbit's blood.", at: t.g},
	{text: 'On day 0, the rabbit was injected with antigen P.', at: t.a},
	{text: 'On day 40, it was injected with antigen P again and with a new antigen, Q.', at: t.b},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Explain the difference between the responses to antigens P and Q after day 40. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['injected with antigen P', 'injected with antigen P again', 'a new antigen, Q'];
qCheck(STEM1({g: 0, a: 0, b: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', graph: 'The graph shows', day0: 'On day zero', day40: 'On day forty', explain: 'Explain the difference', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {g: KA.graph, a: KA.day0, b: KA.day40, q: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={840} size={34} card={false} />
				<CardGraph g={{x0: 1120, y0: 230, w: 560, h: 380}} at={KA.graph + 4} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={770} w={1640} size={34} card={false} />
				<AnsBox x={140} y={800} w={1340} h={200} at={KA.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {after: 'After day forty', secondary: 'secondary response', first: 'The first injection', q: 'Q got a', selected: 'had to be selected', thinking: 'Thinking the first', mistake: 'classic mistake'});
/** A labelled answer block: bold label line, hand text wrapped under it; bright while current. */
const Block: React.FC<{x: number; y: number; w: number; label: string; text: string; at: number; lit: number; color?: string}> = ({x, y, w, label, text, at, lit, color = TEAL}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={x} y={y} width={w} height={170} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={x + 26} y={y + 46} text={label} size={30} color={on ? color : GREY_INK} weight={800} at={-100} />
			<WText x={x + 26} y={y + 98} text={text} size={34} maxW={w - 52} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const all: T1 = {g: -100, a: -100, b: -100, q: -100};
	const marks: QMark[] = [
		{phrase: 'injected with antigen P again', at: KB.after + 6, color: AMBER},
		{phrase: 'injected with antigen P', at: KB.first + 4, color: TEAL},
		{phrase: 'a new antigen, Q', at: KB.q + 4, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const pTxt = f < KB.first ? 'short lag, peak about 40 times higher: secondary' : 'short lag, peak about 40 times higher: secondary; memory cells from day 0 fit P';
	const qTxt = f < KB.selected ? 'lag about a week, low peak: primary' : 'lag about a week, low peak: primary; no memory: few fitting cells';
	const mw = tw('the first injection boosts every antibody', 30) + 48;
	return (
		<>
			<Heading text="Memory is specific" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={170} at={-100} />
				<QText q={qCheck(STEM1(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<CardGraph g={{x0: 220, y0: 400, w: 560, h: 340}} at={-100} pColor={lit(KB.after, KB.q) > 0.5 ? AMBER : INK_SOFT} pGlow={lit(KB.after, KB.q)} qColor={prog(f, KB.q, 10) > 0.5 ? TEAL : INK_SOFT} qGlow={lit(KB.q, KB.thinking)} />
				<Block x={900} y={380} w={900} label="anti-P after day 40" text={pTxt} at={KB.after + 10} lit={lit(KB.after, KB.q)} color={AMBER_INK} />
				<Block x={900} y={580} w={900} label="anti-Q after day 40" text={qTxt} at={KB.q + 10} lit={lit(KB.q, KB.thinking)} />
				<MistakeChip x={130} y={880} text="the first injection boosts every antibody" at={KB.thinking} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="memory is specific to P" at={KB.mistake + 16} size={26} />
				{void KB.secondary}
			</Overlay>
		</>
	);
};

// ---------- item 2: antivenom ----------
type T2b = {a: number; b: number; claim: number; q: number};
const STEM2 = (t: T2b) => [
	{text: 'A bushwalker was bitten by an eastern brown snake. She was given brown snake antivenom (antibodies against the venom, collected from horses) and recovered.', at: t.a},
	{text: 'A year later, she was bitten by the same species again.', at: t.b},
] as QBlock[];
const CLAIM2 = '"She is now immune to the venom, because she has already had antibodies against it."';
const DEM2 = (t: T2b) => [{text: "Evaluate the friend's claim. (3 marks)", at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, claim: 0, q: 0}), [{phrase: 'antibodies against the venom, collected from horses', at: 0}, {phrase: 'A year later', at: 0}]);

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', bush: 'A bushwalker', year: 'A year later', friend: 'Her friend says', evaluate: 'Evaluate the', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2b = {a: KC.bush, b: KC.year, claim: KC.friend, q: KC.evaluate};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<ClaimBox x={140} y={400} w={1640} at={t.claim} text={CLAIM2} label="Friend's claim" />
				<QText q={qCheck(DEM2(t), [])} x={140} y={620} w={1640} size={36} card={false} />
				<AnsBox x={140} y={680} w={1340} h={320} at={KC.evaluate + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {wrong: 'The claim is wrong', art: 'artificial passive', fade: 'fade within weeks', form: 'form memory cells', dep: 'dependable protection', calling: 'Calling antivenom', mistake: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const all: T2b = {a: -100, b: -100, claim: -100, q: -100};
	const marks: QMark[] = [
		{phrase: 'antibodies against the venom, collected from horses', at: KD.art + 4, color: TEAL},
		{phrase: 'A year later', at: KD.dep + 4, color: AMBER},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('antivenom is a vaccine', 30) + 48;
	return (
		<>
			<Heading text="Handed antibodies, no memory" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={210} at={-100} />
				<QText q={qCheck(STEM2(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<ClaimBox x={140} y={262} w={2200} at={-100} text={CLAIM2} label="Friend's claim" s={0.6} />
				<Verdict x={120} y={380} text="claim: not supported" at={KD.wrong + 6} size={30} />
				<ARow y={460} text="made by a horse: artificial passive" at={KD.art + 6} lit={lit(KD.art, KD.fade)} w={1300} size={34} />
				<PlateB p={PLATES.snake} cx={1580} cy={504} w={300} o={prog(f, KD.art + 10, 12) * (1 - 0.5 * prog(f, KD.fade, 10))} />
				<ARow y={560} text="horse antibodies fade within weeks" at={KD.fade + 6} lit={lit(KD.fade, KD.form)} w={1300} size={34} />
				<ARow y={660} text="receiving antibodies: no memory made" at={KD.form + 6} lit={lit(KD.form, KD.dep)} w={1300} size={34} />
				<ARow y={760} text="no dependable protection: needs antivenom again" at={KD.dep + 6} lit={lit(KD.dep, KD.calling)} w={1300} size={34} color={AMBER_INK} />
				<MistakeChip x={130} y={880} text="antivenom is a vaccine" at={KD.calling} cross={KD.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="a vaccine gives antigen, not antibodies" at={KD.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {ask: 'ask two things', mem: 'Are there memory', who: 'And who made', decide: 'Then decide', next: 'Next, practice'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const both = prog(f, KE.decide, 10);
	const chips = [
		{at: KE.mem, text: 'memory cells for this antigen? secondary : primary', y: 330},
		{at: KE.who, text: 'who made the antibodies? active : passive', y: 480},
	];
	const gm: G = {x0: 140, y0: 620, w: 400, h: 220};
	return (
		<>
			<Heading text="Memory? Who made the antibodies?" at={4} size={56} />
			<Overlay>
				<ImmTable at={-100} rowAt={[-100, -100]} rowLit={[1, 1]} s={0.4} ox={90} oy={220} />
				{[[0, 0, PLATES.varicella], [0, 1, PLATES.vial], [1, 0, PLATES.placenta], [1, 1, PLATES.snake]].map(([r, c, p], i) => {
					const Q = quad(r as number, c as number);
					const cx = 90 + (Q.x + Q.w / 2 - 120) * 0.4, cy = 220 + (Q.y + Q.h / 2 - 250) * 0.4;
					return <PlateB key={i} p={p as typeof PLATES.vial} cx={cx} cy={cy} w={i === 3 ? 150 : 80} />;
				})}
				<Axes g={gm} at={-100} xMax={110} logT={1} xLabel="" yLabel="" size={16} />
				<Curve g={gm} xMax={110} logT={1} fn={story(T2)} t0={0} tEnd={T2} color={TEAL} width={4} />
				<Curve g={gm} xMax={110} logT={1} fn={story(T2)} t0={T2} tEnd={110} color={AMBER} width={4} />
				{chips.map((c, i) => {
					const o = prog(f, c.at, 14);
					const dim = 1 - 0.35 * (i === 0 ? prog(f, KE.who, 12) : 0) * (1 - both);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(${(1 - o) * 18},0)`}>
							<rect x={680} y={c.y} width={1140} height={100} rx={28} fill={both > 0.5 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5 + 2 * both} />
							<Sx x={720} y={c.y + 66} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={790} y={c.y + 66} text={c.text} size={40} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={900} w={1100} text="Next: immune response practice" at={KE.next} />
				{void KE.ask}
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Primary response (first exposure): few fitting B and T cells must be selected and multiply; antibody appears after a week or more, peaks low (mainly IgM at first); illness often occurs while it builds. Most plasma cells then die, so antibody falls.',
	'Memory B and T cells are long-lived and far more numerous than the original fitting cells. Memory is stored mainly in these cells; antibody falls far below its peak.',
	'Secondary response (same antigen again): short lag, much higher peak (often 10 to 100 times, log scale), lasts longer; memory helper and cytotoxic T cells act sooner; often cleared before illness. A new antigen gets a primary response.',
	"Vaccination: antigen in a form that doesn't cause the full disease (weakened live, killed, one protein, mRNA instructions) gives a primary response and memory without illness. A booster is a later extra dose: secondary response, more memory.",
	'Acquired immunity (gained during life). Active (own response, memory, often long-lasting, slow to build): natural = infection; artificial = vaccine. Passive (given antibodies another person or animal made, immediate; receiving them makes no memory cells; fades in weeks to months): natural = mother\'s antibodies across the placenta and in breast milk; artificial = antibody injection, such as antivenom.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Second exposure: faster, bigger, longer." tag="Active: you do the work. Passive: you're handed the antibodies." size={25} aidTop={870} />
);
