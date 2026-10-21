// M6 C14 scenes 11 to 16: two worded attempts with their graphs (full question on screen through the countdown), brief
// feedback with the givens underlined as they are used and one crossed mistake each, the decision rule and the notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {condA2, phA1, samples, fine} from '../chem-m6-c13/curves';
import {
	AChip, Axes, Caliper, CondMeter, Curve, DimG, Drop, ETH_C, EqLine, Fade, GDot, HCL_C, INK, INK_SOFT, IonTally, KeyNotesBoard, MistakeX, NAVY, Note, Overlay, P, PauseHold, QText, RuleCard,
	SpanBracket, Sx, TEAL, UNK, WLine, eq, fitSize, gx, gy, qCheck, tallyHCl,
} from './parts';
import type {GG, QBlock, QMark} from './parts';

const QX = 140, QW = 800;
/** The question card covers only the text column, so the graph beside it can stay large when the card shrinks. */
const QCard: React.FC<{h: number; at: number}> = ({h, at}) => (
	<Fade at={at}><rect x={100} y={200} width={880} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
const ShrinkL: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * Math.min(1, Math.max(0, f / 20));
	return <g transform={`translate(100,178) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', student: 'A student titrates', plots: 'plots this curve', using: 'Using two features', calc: 'Then calculate', ka: 'and its K', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student titrated 20.00 mL of an acid, HA, with 0.1000 mol/L sodium hydroxide solution and plotted the titration curve shown.', at: t[0]},
	{text: '(a) Using two features of the curve, identify whether HA is a strong or a weak acid.', at: t[1], para: true},
	{text: '(b) Calculate the concentration of HA.', at: t[2], para: true},
	{text: '(c) Determine the Ka of HA.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0, 0]).blocks, [{phrase: '20.00 mL', at: 0}, {phrase: '0.1000 mol/L', at: 0}]);
const GA: GG = {x: 1100, y: 260, w: 680, h: 500, x0: 0, x1: 30, y0: 0, y1: 14};
const XA = samples(30, 20);
const DOTS: [number, string][] = [[0, '2.79'], [5, '4.10'], [10, '4.57'], [15, '5.05'], [20, '8.63'], [25, '12.05']];
const CurveA1: React.FC<{at: number}> = ({at}) => (
	<>
		<Axes g={GA} at={at - 20} xTicks={[0, 5, 10, 15, 20, 25, 30]} yTicks={Array.from({length: 15}, (_, i) => i)} xGrid={[5, 10, 15, 20, 25, 30]} xLabel="volume of 0.1000 mol/L NaOH added (mL)" yLabel="pH" size={20} />
		<Curve g={GA} fn={phA1} xs={XA} color={ETH_C} at={at} dur={40} width={5} />
		{DOTS.map(([v, t], i) => <GDot key={i} g={GA} v={v} p={phA1(v)} at={at + 40 + i * 3} color={INK} r={7} label={t} dx={v === 20 ? 30 : 12} dy={v === 20 ? 6 : 26} size={22} />)}
	</>
);
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QCard h={620} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={262} w={QW} size={34} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K11.turn} />
		<Question1 t={[K11.student, K11.using, K11.calc, K11.ka]} />
		<CurveA1 at={K11.plots} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={940} cx={1700} cy={950} />
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {weak: "It's weak", buffer: 'buffer region before', above: 'above seven', middle: "The jump's middle", twenty: 'twenty point zero', conc: 'so the concentration', r100: 'zero point one zero zero', half: 'Half of twenty', where: 'where the pH', r27: 'two point seven', reading: 'Reading p', slip: 'the slip'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<ShrinkL k={0.6}>
			<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: '20.00 mL', at: K12.r100 - 20, color: UNK}, {phrase: '0.1000 mol/L', at: K12.r100 - 10, color: NAVY}]} />
		</ShrinkL>
		<CurveA1 at={-100} />
		<SpanBracket x1={gx(GA, 2.5)} x2={gx(GA, 17.5)} y={gy(GA, 6.6)} text="buffer region" at={K12.buffer} up color={ETH_C} size={26} />
		<GDot g={GA} v={20} p={phA1(20)} at={K12.above - 20} color={INK} r={7} ring />
		<DimG at={K12.middle} to={0.4}>
			<AChip x={140} y={610} text="weak: buffer region; equivalence pH > 7" size={30} color={ETH_C} hand={false} at={K12.weak} />
		</DimG>
		<Drop g={GA} v={20} p={phA1(20)} at={K12.twenty} color={INK} xLabel="20.0 mL" size={22} o={fr => 1 - 0.6 * prog(fr, K12.half, 12)} />
		<WLine x={140} y={720} size={28} dim={K12.half} items={P('c(HA) = (0.1000 mol/L × 0.0200 L) ÷ 0.02000 L', K12.conc, {t: '= 0.100 mol/L', color: UNK}, K12.r100 + 50)} />
		<Note x={140} y={770} text="20.0 mL read from the graph → 3 s.f." size={26} color={INK_SOFT} at={K12.r100 + 50} out={K12.half} />
		<Note x={140} y={770} text="a strong acid at 0.100 mol/L would start at pH 1.000, not 2.79" size={26} color={INK_SOFT} at={K12.half + 6} out={K12.r27} />
		<Caliper g={GA} full={20} half={10} at={K12.half - 6} fold={K12.half + 10} fullLabel="20.0 mL" halfLabel="10.0 mL" size={22} color={INK} />
		<Drop g={GA} v={10} p={4.57} at={K12.where} color={ETH_C} toY yLabel="4.57" size={24} />
		<WLine x={140} y={830} size={30} items={P('Ka = 10^{−4.57}', K12.where + 40, {t: '= 2.7 × 10^{−5}', color: ETH_C}, K12.r27)} />
		<AChip x={140} y={870} text="weak; c = 0.100 mol/L; Ka = 2.7 × 10^{−5}" size={30} color={TEAL} hand={false} at={K12.r27 + 50} />
		<MistakeX x={1100} y={890} text="pKa = 8.63 (pH at equivalence)" at={K12.reading} cross={K12.slip} note="pKa: at half the equivalence volume" size={30} />
	</Overlay>
);

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', zero: 'Zero point one', cond: 'The conductivity falls', explain: 'Explain the shape', calc: 'and calculate', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: '0.100 mol/L sodium hydroxide solution is added to 20.00 mL of hydrochloric acid, and the conductivity is measured.', at: t[0]},
	{text: 'The conductivity falls to a minimum when 16.0 mL of sodium hydroxide has been added, then rises.', at: t[1]},
	{text: '(a) Explain the shape of the conductivity graph.', at: t[2], para: true},
	{text: '(b) Calculate the concentration of the hydrochloric acid.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0]).blocks, [{phrase: 'falls to a minimum', at: 0}, {phrase: 'then rises', at: 0}, {phrase: '16.0 mL', at: 0}, {phrase: '0.100 mol/L', at: 0}, {phrase: '20.00 mL', at: 0}]);
const GB: GG = {x: 1100, y: 300, w: 680, h: 440, x0: 0, x1: 32, y0: 0, y1: 36};
const XB = fine(0, 32, 320);
const GraphA2: React.FC<{at: number}> = ({at}) => (
	<>
		<Axes g={GB} at={at - 20} xTicks={[0, 4, 8, 12, 16, 20, 24, 28, 32]} xGrid={[4, 8, 12, 16, 20, 24, 28, 32]} yTicks={[]} xLabel="volume of 0.100 mol/L NaOH added (mL)" yLabel="conductivity (relative)" size={20} grid={false} yNumbers={false} />
		<Curve g={GB} fn={condA2} xs={XB} color={HCL_C} at={at} dur={50} width={5} />
	</>
);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QCard h={560} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={262} w={QW} size={34} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Last one" size={58} color={INK} hand at={K13.last} />
		<Question2 t={[K13.zero, K13.cond, K13.explain, K13.calc]} />
		<GraphA2 at={K13.cond} />
		<CondMeter x={1690} y={90} h={170} level={() => 0.3} at={K13.zero + 30} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={880} cx={860} cy={870} />
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {before: 'Before equivalence', sodium: 'a sodium ion', falls: 'conductivity falls', after: 'After it', hyd: 'extra hydroxide', minimum: 'The minimum', r08: 'zero point zero eight', saying: 'Saying it', used: 'used up', misses: 'misses that'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const v = (fr: number) => kf(fr, [[K14.sodium, 0], [K14.falls + 20, 16], [K14.hyd, 16], [K14.hyd + 40, 24]], false);
	const t = tallyHCl((v(f) * 25) / 16);
	const e = eq(['H_3O^{+}(aq)', '+', 'OH^{−}(aq)', '->', '2H_2O(l)'], K14.before + 20);
	return (
		<Overlay>
			<ShrinkL k={0.6}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: 'falls to a minimum', at: K14.sodium, color: HCL_C}, {phrase: 'then rises', at: K14.hyd, color: '#7a4fb5'},
					{phrase: '16.0 mL', at: K14.r08 - 30, color: UNK}, {phrase: '0.100 mol/L', at: K14.r08 - 20, color: NAVY}, {phrase: '20.00 mL', at: K14.r08 - 10, color: UNK},
				]} />
			</ShrinkL>
			<GraphA2 at={-100} />
			<CondMeter x={1690} y={90} h={170} level={fr => condA2(v(fr)) / 36} at={-100} />
			<DimG at={K14.minimum} to={0.4}>
				<EqLine items={e} x={140} y={620} size={fitSize(e, 760, 38)} />
				<Note x={140} y={680} text="Na^{+}, Cl^{−}: spectators" size={28} color={INK_SOFT} at={K14.sodium + 10} />
			</DimG>
			<IonTally x={1100} y={880} pos={() => t.pos} neg={() => t.neg} at={K14.before} lh={70} />
			<GDot g={GB} v={16} p={condA2(16)} at={K14.minimum} color={INK} ring />
			<WLine x={140} y={770} size={28} items={P('c(HCl) = (0.100 mol/L × 0.0160 L) ÷ 0.02000 L', K14.minimum + 40, {t: '= 0.0800 mol/L', color: UNK}, K14.r08 + 40)} />
			<AChip x={140} y={810} text="c(HCl) = 0.0800 mol/L" size={32} color={UNK} hand={false} at={K14.r08 + 70} />
			<MistakeX x={140} y={900} text="falls because ions are used up" at={K14.saying} cross={K14.misses} note="same number of ions, slower ones" size={30} />
			{void K14.after}{void K14.used}{void TEAL}
		</Overlay>
	);
};

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {any: 'For any', read: 'read the starting', look: 'look for a buffer', find: 'find equivalence', halve: 'and halve', cond: 'For conductivity', next: 'Next', back: 'back titrations'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any titration curve" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K15.any} lh={80} lines={[
				{t: '1  Starting pH: low → strong; higher → weak (same c).', at: K15.read, lit: [K15.read, K15.look], size: 36, hand: false},
				{t: '2  Buffer region before the jump → weak acid.', at: K15.look, lit: [K15.look, K15.find], size: 36, hand: false},
				{t: '3  Equivalence: middle of the jump; read volume and pH.', at: K15.find, lit: [K15.find, K15.halve], size: 36, hand: false},
				{t: '4  Half the equivalence volume: pH = pKa.', at: K15.halve, lit: [K15.halve, K15.cond], size: 36, hand: false},
				{t: '5  Conductivity: minimum (strong acid) or bend (weak acid).', at: K15.cond, lit: [K15.cond, K15.next], size: 36, hand: false},
			]} />
			<AChip x={96} y={760} text="Next: back and conductivity titrations" size={42} color={TEAL} hand={false} at={K15.next} />
			<CondMeter x={1480} y={730} h={280} level={() => 0.5} at={K15.next + 6} />
			{void K15.back}
		</Overlay>
	</>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'A titration curve plots the pH in the flask against the volume of titrant added. At the same concentration, a weak acid starts at a higher pH than a strong acid.',
	'A weak acid curve has a buffer region (weak acid + conjugate base) before the jump. At half the equivalence volume, pH = pKa.',
	'The equivalence point is in the middle of the steep jump. Its volume gives the concentration; its pH is 7.00 (25 °C) for strong acid + strong base, above 7 for weak acid + strong base and below 7 for strong acid + weak base.',
	'Conductivity: H_3O^{+} and OH^{−} conduct best. HCl + NaOH falls (H_3O^{+} replaced by slower Na^{+}) to a minimum at equivalence, then rises (excess OH^{−}). CH_3COOH + NaOH starts low, rises gently, then more steeply; equivalence is at the change of slope.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={720} aids={['At half-equivalence, pH = pKa.', 'H_3O^{+} and OH^{−} are the best conductors.']} tag="pKa from a weak acid curve; read the equivalence volume first" />
);
