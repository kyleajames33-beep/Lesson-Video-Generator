// M8 C02 scenes 12 to 17: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the handoff to the hands-on practical and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {DESICC, FUNNEL, NB, hold, sc} from './common';
import {AChip, Beaker, INK, INK_SOFT, KeptChip, KeyNotesBoard, LensFrame, MistakeX, NAVY, Note, Overlay, P, PauseHold, PicF, QText, TEAL, TaskLine, UNK, WLine, WashDrops, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;
const GREYX = '#9a948a';

// ---------- 12/13. Attempt 1 ----------
const K12 = cues(sc('attempt-1'), {turn: 'Your turn', creek: 'Creek water', find: 'Find the chloride', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: `A 50.0${NB}mL sample of creek water was treated with excess silver nitrate solution.`, at: t[0]},
	{text: `The silver chloride precipitate was collected on a filter paper of mass 0.812${NB}g, washed, and dried to constant mass.`, at: t[0] + 20},
	{text: `The filter paper and precipitate then had a combined mass of 0.955${NB}g.`, at: t[1]},
	{text: 'Calculate the concentration of chloride ions in the creek water, in g L⁻¹.', at: t[2], para: true},
	{text: `M(AgCl) = 143.32${NB}g mol⁻¹;  M(Cl) = 35.45${NB}g mol⁻¹`, at: t[2] + 10, para: true},
] as QBlock[], marks);
const M1 = [`filter paper of mass 0.812${NB}g,`, `combined mass of 0.955${NB}g.`, "M(AgCl)", "M(Cl)", `50.0${NB}mL`];
qCheck(Q1([0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={470} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.creek, K12.creek + 50, K12.find]} />
		<PauseHold h={hold('attempt-1')} at={K12.pause} x={140} y={790} cx={1560} cy={800} />
	</Overlay>
);
const K13 = cues(sc('feedback-1'), {take: 'Take off the', three: 'one four three', silver: 'of silver chloride', divide: 'Divide by one', moles: 'for the moles', chloride: 'moles of chloride', times: 'Times thirty', divide2: 'then divide', p707: 'point seven zero', litre: 'grams per litre', forgetting: 'Forgetting the', big: 'too big'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100]} marks={[
					{phrase: M1[0], at: K13.take, color: NAVY}, {phrase: M1[1], at: K13.take + 12, color: NAVY},
					{phrase: M1[2], at: K13.divide, color: TEAL}, {phrase: M1[3], at: K13.times, color: TEAL}, {phrase: M1[4], at: K13.divide2, color: UNK},
				]} />
			</Shrink>
			<WLine x={X} y={540} size={S} dim={K13.divide} items={P('m(AgCl) = 0.955 − 0.812', K13.take + 10, {t: `= 0.143${NB}g`, color: TEAL}, K13.three)} />
			<WLine x={X} y={620} size={S} dim={K13.times} items={P('n(AgCl) = 0.143 ÷ 143.32', K13.divide, {t: `= 9.98 × 10^{−4}${NB}mol`, color: NAVY}, K13.moles, '= n(Cl^{−}) (1 : 1)', K13.chloride)} />
			<WLine x={X} y={700} size={S} dim={K13.divide2} items={P('m(Cl^{−}) = 9.98 × 10^{−4} × 35.45', K13.times, {t: `= 0.03537${NB}g`, color: NAVY}, K13.times + 30)} />
			<WLine x={X} y={780} size={S} items={P('c = 0.03537 ÷ 0.0500', K13.divide2 + 6, {t: `= 0.707${NB}g/L`, color: TEAL}, K13.p707)} />
			<MistakeX x={X} y={870} text={`0.955${NB}g used as AgCl → 4.72${NB}g/L`} at={K13.forgetting} cross={K13.big} note="subtract the paper" size={34} />
			{void K13.silver}{void K13.litre}
		</Overlay>
	);
};

// ---------- 14/15. Attempt 2 ----------
const K14 = cues(sc('attempt-2'), {last: 'Last one', student: 'A student', repeated: 'then repeated', explain: 'Explain the effect', assess: 'and assess', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'In a gravimetric analysis of sulfate, a student did not wash the barium sulfate precipitate before drying and weighing it.', at: t[0]},
	{text: 'The student repeated the whole analysis three times in the same way and averaged the results.', at: t[1]},
	{text: '(a) Explain the effect of not washing the precipitate on the calculated percentage of sulfate.', at: t[2], para: true},
	{text: '(b) Assess whether repeating the analysis improves the result.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['did not wash', 'calculated percentage of sulfate.', 'repeated the whole analysis three times in the same way', 'averaged'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={440} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.student, K14.repeated, K14.explain, K14.assess]} />
		<PauseHold h={hold('attempt-2')} at={K14.pause} x={140} y={780} cx={1560} cy={790} />
	</Overlay>
);
const K15 = cues(sc('feedback-2'), {without: 'Without washing', solid: 'onto the solid', mass: 'The mass is', high: 'come out too', repeating: 'Repeating it', same: 'same extra mass', avg: 'Averaging may', cancel: 'cancel an error', every: 'same every time'});
export const SceneFeedback2: React.FC = () => {
	const L = {cx: 1560, cy: 700, r: 170};
	const X = 140;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: M2[0], at: K15.solid - 20, color: UNK}, {phrase: M2[1], at: K15.high, color: UNK},
					{phrase: M2[2], at: K15.repeating, color: NAVY}, {phrase: M2[3], at: K15.avg, color: NAVY},
				]} />
			</Shrink>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K15.without} title="unwashed" titleAt={K15.without + 6}>
				<WashDrops cx={L.cx} cy={L.cy} r={L.r} at={K15.without} washed={false} />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 96} text="ions dry onto the solid" size={26} color={INK} anchor="middle" at={K15.solid} />
			<AChip x={X} y={530} text="mass ↑ → % sulfate too high" size={40} color={UNK} hand={false} at={K15.high - 20} />
			<AChip x={X} y={620} text="same extra mass each time" size={36} color={NAVY} hand={false} at={K15.same} />
			<AChip x={X} y={700} text="repeats do not remove this bias" size={36} color={NAVY} hand={false} at={K15.avg} />
			<MistakeX x={X} y={810} text="Averaging three trials cancels the error." at={K15.cancel - 10} cross={K15.every} note="systematic: same every time" size={34} />
			{void K15.mass}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {pick: 'So pick a', barely: 'barely dissolves', clean: 'keep it clean', dry: 'dry it to', mass: 'the mass tells', next: 'Next', lab: 'in the lab'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [{t: 'pick a solid that barely dissolves', at: K16.pick}, {t: 'keep it clean', at: K16.clean}, {t: 'dry it to constant mass', at: K16.dry}, {t: 'the mass tells you the ion', at: K16.mass}];
	return (
		<Overlay>
			<Note x={96} y={150} text="mass → moles → ratio → target" size={44} color={TEAL} at={4} />
			<g opacity={1 - 0.5 * prog(f, K16.next, 14)}>
				<Beaker x={120} y={260} h={380} settle={-100} />
				{lines.map((l, i) => <Note key={i} x={600} y={330 + i * 80} text={l.t} size={40} color={INK} at={l.at} />)}
			</g>
			<PicF p={FUNNEL} x={1240} y={560} h={300} o={prog(f, K16.next + 6, 14)} />
			<PicF p={DESICC} x={1420} y={560} h={300} o={prog(f, K16.next + 12, 14)} />
			<AChip x={1100} y={920} text="Next: carry out a gravimetric analysis" size={40} color={TEAL} hand={false} at={K16.next} />
			{void K16.barely}{void K16.lab}{void KeptChip}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Gravimetric analysis: turn the ion into a solid of known formula, then weigh it. Needs: almost all the ion in the solid; known formula; only that solid weighed, clean and dry.',
	'Choose a very insoluble solid: SO_4^{2−} with Ba^{2+} (BaSO_4, Ksp 1.08 × 10^{−10}, not CaSO_4, 4.93 × 10^{−5}); Cl^{−} with Ag^{+} (AgCl). Excess reagent lowers what stays dissolved (common ion effect).',
	'Method: dissolve → acidify (dilute HCl removes carbonate) → add excess reagent → digest (bigger crystals filter better, trap less) → filter (pre-weighed paper) → wash → dry → cool in a desiccator → weigh on the tared watch glass; repeat to constant mass (drying no longer removing water).',
	`Calculation: m(solid) by difference → n = m ÷ M → formula ratio → m(ion) → % = m(ion) ÷ m(sample) × 100, or c = n ÷ V. Example: 0.350${NB}g BaSO_4 from 0.500${NB}g → 28.8% sulfate.`,
	"Errors: extra mass (damp, unwashed) reads high; lost solid (torn paper, incomplete precipitation) reads low. Repeating and averaging don't remove an error that is the same every time.",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={28} aidTop={800} aids={['mass → moles → ratio → target.', 'Too wet reads high; lost reads low.']} tag="weigh at constant mass (and wash first)" />
);
