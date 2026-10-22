// M6 G04 scenes 5a to 7: question 4 (blue-dyed ammonia titrated with 0.500 mol/L HCl, corrected conductivity): the
// attempt (17 computed amber points, no lines); the shape (low start, gentle rise, steep rise) with the ion tally
// changing per portion; the best-fit lines and their crossing at 8.40 mL, then the concentration; the "first steep
// reading" mistake crossed; the decision board; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {COND, PHMETER} from './assets';
import {AChip, Axes, CrossMark, Fade, FitRuler, INK, INK_SOFT, KeptChip, KeyNotesBoard, MistakeX, NAVY, Note, Overlay, P, PauseHold, PicH, Sx, TEAL, UNK, WLine, gy, vis} from './parts';
import type {GG, QBlock} from './parts';
import {APts, ChemBadge, GLOW, HBr, HscTag, NTally, PCard, qMarksOk} from './board';
import type {QDef} from './board';
import {Checks} from './s1';
import {L1, L2, XQ4, XS4, condQ4} from './curves';

const WX = 760;
const G4: GG = {x: 1210, y: 250, w: 590, h: 400, x0: 0, x1: 16, y0: 0, y1: 48000};
const FIT = '#1f8a7a';
const CondAxes: React.FC<{at: number}> = ({at}) => (
	<Axes g={G4} at={at} xTicks={[0, 2, 4, 6, 8, 10, 12, 14, 16]} xGrid={Array.from({length: 17}, (_, i) => i)} yTicks={[]} yNumbers={false} xLabel="volume of 0.500 mol/L HCl added (mL)" yLabel="conductivity (relative)" size={22} />
);

export const Q4: QDef = {
	size: 30,
	secs: [
		{y: 232, w: 780, blocks: t => [
			{text: 'A 50.00 mL sample of an ammonia solution coloured with a blue dye was titrated with 0.500 mol/L hydrochloric acid.', at: t[0]},
			{text: 'The dye hides indicator colours.', at: t[0] + 10},
			{text: 'The acid was added in 1.00 mL portions and the conductivity was measured after each addition.', at: t[1]},
			{text: 'The results, corrected for the volume added, are shown in the graph.', at: t[1] + 10},
		] as QBlock[]},
		{y: 570, blocks: t => [
			{text: '(a) Explain the shape of the graph.', at: t[2], weight: 700},
			{text: '(b) Use the graph to determine the concentration of the ammonia solution.', at: t[3], para: true, weight: 700},
		] as QBlock[]},
	],
	h: 720,
	ans: [{label: '(a)', y: 690, h: 100}, {label: '(b)', y: 800}],
};
const Q4M = {shape: 'Explain the shape of the graph', c: '0.500 mol/L hydrochloric acid', s: '50.00 mL sample'};
qMarksOk(Q4, Object.values(Q4M));
const FA = ['weak base: few ions, low start; NH_4^{+} and Cl^{−} form, gentle rise;', 'after equivalence excess H_3O^{+} (high conductivity), steep rise'];
const FILL_B = 'lines cross at 8.40 mL; c(NH_3) = 0.0840 mol/L';
const Meter: React.FC = () => (
	<g>
		<PicH p={COND} x={925} y={192} h={150} />
		<Sx x={995} y={372} text="blue-dyed NH_3(aq)" size={20} color={NAVY} anchor="middle" weight={800} at={-1000} />
	</g>
);
const fillsA = (t: number[]) => FA.map((s, k) => ({i: 0, text: s, at: t[k], size: 22, line: k * 0.8}));

// ---------- 5a. Question 4 (pause) ----------
const KA = cues(sc('q4-question'), {q: 'Question four', fifty: 'Fifty millilitres', graph: 'the graph shows', explain: 'Explain its shape', use: 'use it to', pause: 'Pause here to answer'});
export const SceneQ4Question: React.FC = () => {
	const h = hold('q4-question');
	return (
		<>
			<Heading text="Question 4" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q4} t={[KA.fifty, KA.graph - 40, KA.explain, KA.use]} ansAt={[KA.explain + 20, KA.use + 20]}>
					<Fade at={KA.fifty + 10}><Meter /></Fade>
				</PCard>
				<CondAxes at={KA.graph} />
				<APts g={G4} fn={condQ4} xs={XS4} at={KA.graph + 14} />
				<PauseHold h={h} at={KA.pause} x={1180} y={800} cx={1740} cy={880} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

const Q4Board: React.FC<{marks?: {phrase: string; at: number}[]; fills?: {i: number; text: string; at: number; size?: number; line?: number}[]; shrinkAt?: number; lit?: (i: number) => number | undefined; pulse?: {i: number[]; at: number}}> = ({marks = [], fills = [], shrinkAt, lit, pulse}) => (
	<>
		<HscTag at={-100} />
		<ChemBadge text="Conductivity: where the lines cross" at={shrinkAt === undefined ? -100 : 6} />
		<PCard q={Q4} strip shrinkAt={shrinkAt} marks={marks} fills={fills} ansAt={[-100, -100]}>
			<Meter />
		</PCard>
		<CondAxes at={-100} />
		<APts g={G4} fn={condQ4} xs={XS4} at={-100} lit={lit} pulse={pulse} />
	</>
);

// ---------- 5b. The shape ----------
const KB = cues(sc('q4-shape'), {weak: 'weak base', molecules: 'whole molecules', low: 'starts low', each: 'Each portion', turns: 'turns ammonia', build: 'ions build up', gently: 'gently', after: 'After equivalence', adds: 'adds hydronium', far: 'conducts far better', steeply: 'steeply'});
export const SceneQ4Shape: React.FC = () => {
	const vol = (fr: number) => kf(fr, [[KB.each, 0], [KB.gently, 8], [KB.after, 8], [KB.steeply, 16]], false);
	const lit = (i: number) => (i === 0 ? KB.low : i <= 8 ? KB.each + ((KB.gently - KB.each) * (i - 1)) / 8 : KB.after + ((KB.steeply - KB.after) * (i - 9)) / 8);
	return (
		<>
			<Heading text="Question 4: the shape" at={4} size={52} />
			<Overlay>
				<Q4Board shrinkAt={0} lit={lit} marks={[{phrase: Q4M.shape, at: KB.low}]} fills={fillsA([KB.steeply + 14, KB.steeply + 24])} />
				<Note x={WX} y={300} text="C14: H_3O^{+} and OH^{−} conduct far better" size={24} color={INK_SOFT} at={KB.weak} out={KB.each} />
				<NTally x={WX + 20} y={750} v={vol} at={KB.molecules} />
				<Sx x={WX} y={560} text="NH_3 + H_3O^{+} → NH_4^{+} + H_2O" size={26} color={INK} weight={700} at={KB.turns} />
				<Note x={WX} y={420} text="ions added: NH_4^{+} and Cl^{−}" size={26} color={TEAL} at={KB.build} out={KB.after} />
				<Note x={WX} y={420} text="excess H_3O^{+}: conducts far better" size={26} color={TEAL} at={KB.adds} />
				<Checks />
				{void KB.far}
			</Overlay>
		</>
	);
};

// ---------- 5c. Read where the lines cross ----------
const KC = cues(sc('q4-crossing'), {eq: 'Equivalence is where', draw: 'Draw a best-fit', cross: 'cross at', v840: 'eight point four zero', between: 'between two readings', moles: 'Moles of acid', n: 'four point two zero', divide: 'Divide by', c: 'zero point zero eight four zero'});
const yX = L1.at(XQ4);
export const SceneQ4Crossing: React.FC = () => (
	<>
		<Heading text="Question 4: where the lines cross" at={4} size={52} />
		<Overlay>
			<Q4Board marks={[{phrase: Q4M.shape, at: -100}, {phrase: Q4M.c, at: KC.n}, {phrase: Q4M.s, at: KC.c}]} fills={[...fillsA([-100, -100]), {i: 1, text: FILL_B, at: KC.c + 16, size: 26}]} />
			<FitRuler g={G4} line={L1} a={2} b={7} lo={0} hi={XQ4 + 1.3} at={KC.draw} color={FIT} />
			<FitRuler g={G4} line={L2} a={10} b={16} lo={XQ4 - 1.3} hi={16} at={KC.draw + 24} color={FIT} />
			<CrossMark g={G4} x={XQ4} p={yX} at={KC.cross} label="8.40 mL" labelAt={KC.v840} labelDx={-175} labelY={gy(G4, yX) - 30} />
			<HBr g={G4} a={8} b={9} p={1500} up at={KC.between} text="between readings" size={20} dx={100} />
			<WLine x={WX} y={790} size={32} dim={KC.c} items={P('n(HCl) = 0.500 × 0.00840', KC.moles + 10, {t: '= 4.20 × 10^{−3} mol = n(NH_3) (1 : 1)', color: NAVY}, KC.n)} />
			<WLine x={WX} y={865} size={36} items={P('c(NH_3) = 4.20 × 10^{−3} ÷ 0.05000', KC.divide + 10, {t: '= 0.0840 mol/L', color: UNK}, KC.c)} />
			<Note x={WX} y={300} text="3 s.f.: 0.500 mol/L;" size={26} color={INK_SOFT} at={KC.c + 30} />
			<Note x={WX} y={336} text="crossing read as 8.40 mL" size={26} color={INK_SOFT} at={KC.c + 36} />
			<Checks ticks={{0: [KC.v840], 2: [KC.between]}} />
			{void KC.eq}
		</Overlay>
	</>
);

// ---------- 5d. The classic mistake ----------
const KD = cues(sc('q4-mistake'), {classic: 'The classic mistake', nine: 'nine millilitres', gives: 'That gives', high: 'too high', usually: 'Equivalence usually', between: 'between', lines: 'use the lines'});
export const SceneQ4Mistake: React.FC = () => (
	<>
		<Heading text="Question 4: the classic mistake" at={4} size={52} />
		<Overlay>
			<Q4Board pulse={{i: [8, 9], at: KD.between}} fills={[...fillsA([-100, -100]), {i: 1, text: FILL_B, at: -100, size: 26}]} />
			<FitRuler g={G4} line={L1} a={2} b={7} lo={0} hi={XQ4 + 1.3} at={-200} color={FIT} ruler={false} />
			<FitRuler g={G4} line={L2} a={10} b={16} lo={XQ4 - 1.3} hi={16} at={-200} color={FIT} ruler={false} />
			<CrossMark g={G4} x={XQ4} p={yX} at={KD.lines - 10} pulse={KD.lines} />
			<MistakeX x={WX} y={760} text="V(eq) = 9.00 mL, the first steep reading: c = 0.0900 mol/L" at={4} cross={KD.classic + 20} note="read where the lines cross" size={30} />
			<Checks ticks={{0: [-100], 2: [-100]}} />
			{void KD.nine}{void KD.gives}{void KD.high}{void KD.usually}{void KeptChip}
		</Overlay>
	</>
);

// ---------- 6. Decision board ----------
const KE = cues(sc('decision-board'), {ph: 'A pH curve', inside: 'inside it', error: 'An error', titre: 'titre moves', formula: 'the formula', back: 'In a back', less: 'less sample', cond: 'A conductivity graph', cross: 'lines cross', next: 'Next, how'});
const ROWS = [
	{see: 'pH curve', act: ['equivalence: middle of the steepest part;', 'indicator: changes inside it'], q: 'Q1', at: KE.ph, lit: [KE.ph, KE.error]},
	{see: 'an error', act: ['which way does the titre move? Then follow it through', 'the formula; unknown in the burette: V on the bottom'], q: 'Q2', at: KE.titre, lit: [KE.titre, KE.back]},
	{see: 'back titration', act: ['more left over, less sample'], q: 'Q3', at: KE.back, lit: [KE.back, KE.cond]},
	{see: 'conductivity graph', act: ['equivalence where the best-fit lines cross'], q: 'Q4', at: KE.cross, lit: [KE.cross, KE.next]},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 96, X1 = 640, Y0 = 260, LH = 136;
	return (
		<>
			<Heading text="Curves, indicators, back titration: where is equivalence?" at={4} size={50} />
			<Overlay>
				<Sx x={X0 + 24} y={Y0 - 30} text="What you're given" size={34} color={INK_SOFT} hand at={KE.ph} />
				<Sx x={X1} y={Y0 - 30} text="What you do first" size={34} color={INK_SOFT} hand at={KE.ph} />
				{ROWS.map((r, i) => {
					const y = Y0 + i * LH;
					const g = vis(f, r.lit[0], r.lit[1], 10);
					return (
						<Fade key={i} at={r.at}>
							<rect x={X0} y={y} width={1728} height={LH - 18} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
							{g > 0.01 ? <rect x={X0} y={y} width={1728} height={LH - 18} rx={18} fill={GLOW} opacity={0.35 * g} /> : null}
							<Sx x={X0 + 24} y={y + 70} text={r.see} size={38} color={INK} hand at={r.at} />
							<Sx x={X1 - 56} y={y + 70} text="→" size={40} color={INK_SOFT} at={r.at + 4} />
							{r.act.map((a, k) => <Sx key={k} x={X1} y={y + (r.act.length > 1 ? 50 + k * 40 : 70)} text={a} size={31} color={INK} weight={700} at={r.at + 6} />)}
							<AChip x={1820 - 110} y={y + 30} text={r.q} size={26} color={TEAL} hand={false} at={r.at + 10} />
						</Fade>
					);
				})}
				<AChip x={X0} y={880} text="Next: which analysis method fits a sample?" size={36} color={TEAL} hand={false} at={KE.next} />
				<Fade at={KE.next + 8}><PicH p={PHMETER} x={1400} y={820} h={170} /></Fade>
				{void KE.inside}{void KE.error}{void KE.formula}{void KE.less}{void KE.cond}{void prog}
			</Overlay>
		</>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'pH curve: equivalence is in the middle of the steepest part, not where pH = 7. Strong acid + weak base: equivalence acidic (NH_4^{+} + H_2O ⇌ NH_3 + H_3O^{+}), so methyl red (4.4 to 6.2), which changes inside the steep drop.',
	'Error direction: first decide which way the titre moves, then follow it through the formula. Unknown in the flask: c = c(titrant) × V(titre) × ratio ÷ V(sample), so a larger titre gives a larger c. Unknown in the burette: c = n(standard) × ratio ÷ V(titre), so a larger titre gives a smaller c.',
	'Ammonia in the burette with phenolphthalein: after equivalence an NH_3 and NH_4^{+} buffer holds the pH below 8.3 until extra ammonia is added, so the titre is too large and c(NH_3) too low.',
	'Back titration: n(acid used) = n(added) − n(left over); the back titre measures the leftover. Anything that makes the back titre too large (a water-rinsed NaOH burette; CO_2 not boiled off) makes the % too low.',
	'Conductivity, weak base with strong acid: starts low (few ions), rises gently (NH_4^{+} and Cl^{−} form), then steeply (excess H_3O^{+}). Equivalence where the best-fit lines cross, usually between readings.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={770} aids={['Move the titre, then follow it through the formula.', 'Back titration: more left over means less sample.']} tag="check which solution is the unknown and where it sits; if the error changes another value, follow that value instead" />
);
void INK;
