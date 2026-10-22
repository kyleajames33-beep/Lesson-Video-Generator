// M6 P06 scenes 15 to 20: two worded attempts (the full question on screen through the countdown, nothing
// answer-bearing); brief feedback with the question's phrases underlined as they are used, the error chain and one
// crossed mistake each; the decision rule and handoff; key notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {CFLASK, FLASK, PIPETTE_G} from './assets';
import {AChip, ChainV, Fade, INK, INK_SOFT, KeyNotesBoard, MistakeX, NAVY, Note, Overlay, PauseHold, PicH, PipettePlate, QBox, QText, RuleCard, ShrinkTo, Sx, TEAL, TERRA, VIO, flaskW, qCheck} from './parts';
import type {QBlock, QMark} from './parts';

const QX = 130, QW = 1040;

// ---------- 15/16. Question 1 ----------
const A1 = 'attempt-1';
const K15 = cues(sc(A1), {turn: 'Your turn', student: 'A student rinses', everything: 'Everything else', explain: 'Explain the effect', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student rinses a 25.00 mL pipette with distilled water and then, without drying it, uses it to transfer the sodium carbonate aliquot into the conical flask.', at: t[0]},
	{text: 'All other steps are carried out correctly.', at: t[1]},
	{text: 'Explain the effect of this on the calculated concentration of the hydrochloric acid.', at: t[2], para: true},
] as QBlock[], marks);
const M1 = ['with distilled water', 'without drying it', 'the sodium carbonate aliquot', 'calculated concentration of the hydrochloric acid'];
qCheck(Q1([0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={300} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K15.turn} />
		<Question1 t={[K15.student, K15.everything, K15.explain]} />
		<Fade at={K15.student + 20}><PipettePlate tipX={1520} tipY={760} h={460} rot={PIPETTE_G.tilt} /></Fade>
		<Sx x={1520} y={810} text="25.00 mL pipette" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K15.student + 30} />
		<PauseHold h={hold(A1)} at={K15.pause} x={130} y={780} cx={900} cy={760} />
	</Overlay>
);

const F1 = 'feedback-1';
const K16 = cues(sc(F1), {water: 'The water left', fewer: 'fewer moles', less: 'needs less acid', smaller: 'smaller', divides: 'divides the full', high: 'high', saying: 'Saying', forgets: 'forgets'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<ShrinkTo k={0.62} cx={100} cy={180}>
			<Question1 t={[-100, -100, -100]} marks={[{phrase: M1[0], at: K16.fewer}, {phrase: M1[1], at: K16.fewer + 10}, {phrase: M1[2], at: K16.smaller}, {phrase: M1[3], at: K16.high}]} />
		</ShrinkTo>
		<ChainV x={QX} y={500} gap={106} size={32} items={[
			{t: 'wet pipette → fewer moles of Na_2CO_3 in the flask', color: INK_SOFT, at: K16.fewer},
			{t: '→ titre smaller', color: VIO, at: K16.smaller},
			{t: '→ c(HCl) too high', color: TERRA, at: K16.high},
		]} />
		<Sx x={QX + 440} y={746} text="c = n(calculated) ÷ smaller titre" size={32} color={INK_SOFT} weight={700} at={K16.high + 16} />
		<MistakeX x={QX} y={850} text="diluted, so c(HCl) too low" at={K16.saying} cross={K16.forgets} note="follow the titre, not the word diluted" size={32} />
		{void K16.water}{void K16.less}{void K16.divides}
	</Overlay>
);

// ---------- 17/18. Question 2 ----------
const A2 = 'attempt-2';
const K17 = cues(sc(A2), {more: 'One more', before: 'Before adding', everything: 'Everything else', explain: 'Explain the effect', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Before adding the aliquot, a student rinses the conical flask with the sodium carbonate solution.', at: t[0]},
	{text: 'All other steps are carried out correctly.', at: t[1]},
	{text: 'Explain the effect of this on the calculated concentration of the hydrochloric acid.', at: t[2], para: true},
] as QBlock[], marks);
const M2 = ['rinses the conical flask with the sodium carbonate solution', 'All other steps are carried out correctly', 'calculated concentration of the hydrochloric acid'];
qCheck(Q2([0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={300} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K17.more} />
		<Question2 t={[K17.before, K17.everything, K17.explain]} />
		<Fade at={K17.before + 20}><PicH p={CFLASK} x={1440} y={300} h={300} /></Fade>
		<Sx x={1440 + flaskW(300) / 2} y={650} text="conical flask" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K17.before + 30} />
		<PauseHold h={hold(A2)} at={K17.pause} x={130} y={720} cx={900} cy={700} />
	</Overlay>
);

const F2 = 'feedback-2';
const K18 = cues(sc(F2), {rinse: 'The rinse leaves', solution: 'solution', more: 'needs more acid', bigger: 'bigger', divides: 'divides the', low: 'low', rinsing: 'Rinsing with', flask: ['flask', 2]});
export const SceneFeedback2: React.FC = () => {
	const FX = 1440, FY = 300, FHh = 300, fw = flaskW(FHh);
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: M2[0], at: K18.solution}, {phrase: M2[1], at: K18.bigger}, {phrase: M2[2], at: K18.low}]} />
			</ShrinkTo>
			<PicH p={CFLASK} x={FX} y={FY} h={FHh} />
			<Fade at={K18.solution}><ellipse cx={FX + fw / 2} cy={FY + FHh * 0.9} rx={fw * 0.36} ry={FHh * 0.045} fill={NAVY} opacity={0.45} /></Fade>
			<Note x={FX + fw / 2} y={FY + FHh + 46} text="carbonate film" size={30} color={NAVY} anchor="middle" at={K18.solution + 10} />
			<ChainV x={QX} y={460} gap={106} size={32} items={[
				{t: 'carbonate film + aliquot → more moles of Na_2CO_3 in the flask', color: INK_SOFT, at: K18.solution},
				{t: '→ titre bigger', color: VIO, at: K18.bigger},
				{t: '→ c(HCl) too low', color: TERRA, at: K18.low},
			]} />
			<Sx x={QX + 420} y={706} text="c = n(aliquot only) ÷ bigger titre" size={32} color={INK_SOFT} weight={700} at={K18.low + 16} />
			<MistakeX x={QX} y={820} text="rinsing with the solution is correct, so no effect" at={K18.rinsing} cross={K18.flask} note="pipette: the solution; flask: distilled water only" size={32} />
			{void K18.rinse}{void K18.more}{void K18.divides}
		</Overlay>
	);
};

// ---------- 19. Decision rule and handoff ----------
const DR = 'decision-rule';
const K19 = cues(sc(DR), {trust: 'for a titration', rinse: 'rinse with', bubble: 'clear the bubble', eye: 'read at eye', avg: 'average concordant', trace: 'Trace any error', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="A titration you can trust" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K19.trust - 10} lh={86} lines={[
				{t: '1  Standard: dried, weighed exactly, rinsed in, made to the mark, inverted.', at: K19.trust, lit: [K19.trust, K19.rinse], size: 36, hand: false},
				{t: "2  Rinse with what's going in; flasks with distilled water.", at: K19.rinse, lit: [K19.rinse, K19.bubble], size: 36, hand: false},
				{t: '3  No tip bubble; read the meniscus at eye level, to 0.05 mL.', at: K19.bubble, lit: [K19.bubble, K19.avg], size: 36, hand: false},
				{t: '4  Rough run, then dropwise to the first permanent colour; concordant titres.', at: K19.avg, lit: [K19.avg, K19.trace], size: 36, hand: false},
				{t: '5  Error → titre bigger or smaller → answer lower or higher.', at: K19.trace, lit: [K19.trace, K19.next], size: 36, hand: false},
			]} />
			<AChip x={96} y={760} text="Next: standardisation and titration calculations (practice)" size={38} color={TEAL} hand={false} at={K19.next} />
			<Fade at={K19.next + 8}><PicH p={FLASK} x={1560} y={700} h={320} /></Fade>
			{void K19.eye}
		</Overlay>
	</>
);

// ---------- 20. Key notes ----------
const NOTES = [
	'Standard: anhydrous Na_2CO_3 dried, cooled in a desiccator, weighed exactly (1.3656 g), dissolved, rinsed into a 250.0 mL volumetric flask, made to the mark, inverted: 0.05154 mol/L.',
	"Rinse with what's going in: burette with the HCl, pipette with the Na_2CO_3 solution; conical flask with distilled water only (water adds no moles). Leave the pipette's last drop.",
	'Burette: fill below eye level, remove the funnel, no tip bubble; read the bottom of the meniscus at eye level, to 0.05 mL. Rough run first; then dropwise to the first permanent orange.',
	'Exclude a run with a known fault and repeat it; average concordant titres (within 0.10 mL): 24.33 mL; c(HCl) = 0.1059 mol/L.',
	'Trace errors through the titre: water in the burette or carbonate in the flask → titre bigger → c(HCl) too low; wet pipette → titre smaller → c(HCl) too high. Concordant titres can still be inaccurate.',
	'Risk: safety glasses (Na_2CO_3 dust, splashes); methyl orange solid is toxic if swallowed; pipette filler.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={800} aids={["Rinse with what's going in."]} tag="burette: what it delivers; pipette: what it measures; flasks: distilled water" />
);
