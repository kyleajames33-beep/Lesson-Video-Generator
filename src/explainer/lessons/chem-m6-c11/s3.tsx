// M6 C11 scenes 12 to 17: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {PHMETER} from './assets';
import {AChip, ACID_INK, BASE_INK, BUF, BottleLabel, DimG, EqLine, KeyNotesBoard, MistakeX, Overlay, P, PauseHold, PlateAt, QText, RatioBar, RuleCard, Sx, TaskLine, WLine, eq, fitSize, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 12/13. Question 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', sol: 'A solution contains', explain: 'Explain using equations', then: 'Then estimate', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A solution contains 0.20 mol/L ammonia (NH₃) and 0.20 mol/L ammonium chloride (NH₄Cl).', at: t[0]},
	{text: '(a) Explain, using equations, how this solution resists a change in pH when a small amount of hydrochloric acid or sodium hydroxide is added.', at: t[1], para: true},
	{text: '(b) Estimate the pH of the solution, given that the pKa of NH₄⁺ is 9.25 at 25 °C.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: '0.20 mol/L ammonia', at: 0}, {phrase: 'hydrochloric acid', at: 0}, {phrase: 'ammonium chloride', at: 0}, {phrase: 'sodium hydroxide', at: 0}, {phrase: '0.20 mol/L', occ: 2, at: 0}, {phrase: 'pKa of NH₄⁺ is 9.25', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={470} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={1470} size={42} card={false} />
		<BottleLabel x={1640} y={230} h={240} lines={['ammonia', 'NH_3(aq)']} at={t[0]} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.sol, K12.explain, K12.then]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={790} cx={1560} cy={780} />
	</Overlay>
);

const F1 = 'feedback-1';
const K13 = cues(sc(F1), {base: 'Ammonia is the', amm: 'ammonium and water', acidp: 'Ammonium is the', hyd: 'hydroxide making', equal: 'The two are', r925: 'nine point two five', writing: 'Writing ammonium as', swaps: 'swaps the'});
export const SceneFeedback1: React.FC = () => {
	const e1 = eq(['NH_3(aq)', '+', 'H_3O^{+}(aq)', '->', 'NH_4^{+}(aq)', '+', 'H_2O(l)'], K13.amm - 20);
	const e2 = eq(['NH_4^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'NH_3(aq)', '+', 'H_2O(l)'], K13.hyd - 10);
	const s = fitSize(e1, 1100, 46);
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100]} marks={[
					{phrase: '0.20 mol/L ammonia', at: K13.base + 10}, {phrase: 'hydrochloric acid', at: K13.amm - 20},
					{phrase: 'ammonium chloride', at: K13.acidp + 10}, {phrase: 'sodium hydroxide', at: K13.hyd - 10},
					{phrase: '0.20 mol/L', at: K13.equal, color: BUF}, {phrase: '0.20 mol/L', occ: 2, at: K13.equal + 6, color: BUF}, {phrase: 'pKa of NH₄⁺ is 9.25', at: K13.r925 - 10, color: BUF},
				]} />
			</Shrink>
			<DimG at={K13.hyd} to={0.4}><EqLine items={e1} x={QX} y={570} size={s} /></DimG>
			<DimG at={K13.r925} to={0.4}><EqLine items={e2} x={QX} y={670} size={s} /></DimG>
			<AChip x={QX} y={720} text="equal partners: pH ≈ pKa = 9.25" size={44} color={BUF} hand={false} at={K13.r925 + 10} />
			<MistakeX x={QX} y={850} text="NH_4^{+} + H_3O^{+} → ..." at={K13.writing} cross={K13.swaps + 10} note="the base partner takes added acid" size={40} />
		</Overlay>
	);
};

// ---------- 14/15. Question 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', buffers: 'Buffers X and', x: 'X contains', y: 'Y contains', student: 'A student adds', predict: 'Predict and explain', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Two buffer solutions, X and Y, each have a volume of 100 mL and a pH of 4.74 at 25 °C.', at: t[0]},
	{text: 'X contains 0.010 mol of ethanoic acid and 0.010 mol of sodium ethanoate.', at: t[1]},
	{text: 'Y contains 0.0010 mol of ethanoic acid and 0.0010 mol of sodium ethanoate.', at: t[2]},
	{text: 'A student adds 0.0020 mol of hydrochloric acid to each solution.', at: t[3]},
	{text: 'Predict and explain the change in pH in each solution. Assume the volume does not change. Ka(CH₃COOH) = 1.8 × 10⁻⁵.', at: t[4], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0, 0]).blocks, [{phrase: '0.010 mol', at: 0}, {phrase: '0.0020 mol', at: 0}, {phrase: 'Ka(CH₃COOH)', at: 0}, {phrase: '10⁻⁵.', at: 0}, {phrase: '0.0010 mol', at: 0}]);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={420} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.buffers, K14.x, K14.y, K14.student, K14.predict]} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={770} cx={1560} cy={760} />
	</Overlay>
);

const F2 = 'feedback-2';
const K15 = cues(sc(F2), {x: 'X takes up', r0080: 'zero point zero zero eight zero', ratio: 'The ratio becomes', r457: 'four point five seven', iny: 'In Y', uses: 'uses up', rest: 'and the rest', two: 'two Thinking', thinking: 'Thinking equal pH', slip: 'slip pH'});
export const SceneFeedback2: React.FC = () => {
	const X = 140, S = 34;
	const XB = 1360, YB = 1620, BASE = 820, K = 12000;
	const v = (n: number) => n.toFixed(n < 0.005 ? 4 : 3);
	return (
		<Overlay>
			<Shrink k={0.55}>
				<Question2 t={[-100, -100, -100, -100, -100]} marks={[
					{phrase: '0.010 mol', at: K15.r0080 - 10}, {phrase: '0.0020 mol', at: K15.r0080},
					{phrase: 'Ka(CH₃COOH)', at: K15.r457 - 30, color: BUF}, {phrase: '10⁻⁵.', at: K15.r457 - 26, color: BUF},
					{phrase: '0.0010 mol', at: K15.uses, color: BASE_INK},
				]} />
			</Shrink>
			<Sx x={XB + 73} y={600} text="X" size={36} color={'#26231f'} anchor="middle" weight={800} at={4} />
			<Sx x={YB + 73} y={600} text="Y" size={36} color={'#26231f'} anchor="middle" weight={800} at={10} />
			<RatioBar x={XB} base={BASE} k={K} nA={f => kf(f, [[K15.r0080, 0.01], [K15.r0080 + 20, 0.012]])} nB={f => kf(f, [[K15.r0080, 0.01], [K15.r0080 + 20, 0.008]])} at={4} bw={60} gap={26} size={22} labA="HA" labB="A^{−}"
				valA={f => (f < K15.r0080 + 10 ? '0.010' : '0.012')} valB={f => (f < K15.r0080 + 10 ? '0.010' : '0.0080')} />
			<RatioBar x={YB} base={BASE} k={K} nA={f => kf(f, [[K15.uses, 0.001], [K15.uses + 20, 0.002]])} nB={f => kf(f, [[K15.uses, 0.001], [K15.uses + 20, 0]])} at={10} bw={60} gap={26} size={22} labA="HA" labB="A^{−}" greyB={K15.uses + 20}
				valA={f => (f < K15.uses + 10 ? v(0.001) : v(0.002))} valB={f => (f < K15.uses + 10 ? v(0.001) : '0')} />
			<Sx x={(XB + YB) / 2 + 73} y={BASE + 80} text="amounts in mol" size={22} color={'#6b6358'} anchor="middle" weight={600} at={10} />
			<WLine x={X} y={540} size={S} dim={K15.uses} items={P('[H_3O^{+}] = 1.8 × 10^{−5} × 0.012 / 0.0080 = 2.7 × 10^{−5} mol/L;', K15.r457 - 40, {t: 'pH = 4.57', color: BUF}, K15.r457)} />
			<AChip x={X} y={590} text="X: pH 4.74 → 4.57" size={40} color={BUF} hand={false} at={K15.r457 + 16} />
			<WLine x={X} y={760} size={S} dim={K15.slip} items={P('Y: excess H_3O^{+} = 0.0020 − 0.0010 = 0.0010 mol;', K15.rest - 10, '0.010 mol/L', K15.rest + 20)} />
			<AChip x={X} y={800} text="Y: pH 4.74 → about 2.00" size={40} color={ACID_INK} hand={false} at={K15.two} />
			<MistakeX x={X} y={895} text="same pH, so same resistance" at={K15.thinking} cross={K15.slip + 6} note="capacity depends on the amounts" size={36} />
			{void K15.x}{void K15.ratio}{void K15.iny}
		</Overlay>
	);
};

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K16 = cues(sc(DR), {find: 'For any buffer', added: 'Added acid reacts', get: 'Get the pH', check: 'check neither', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any buffer" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K16.find} lh={88} lines={[
				{t: '1  Find the pair: weak acid HA + conjugate base A^{−}.', at: K16.find + 10, lit: [K16.find + 10, K16.added], size: 38, hand: false},
				{t: '2  Added acid → reacts with A^{−}. Added base → reacts with HA.', at: K16.added, lit: [K16.added, K16.get], size: 38, hand: false},
				{t: '3  [H_3O^{+}] = Ka × n(HA) / n(A^{−}); equal amounts: pH = pKa.', at: K16.get, lit: [K16.get, K16.check], size: 38, hand: false},
				{t: '4  Check neither partner has run out (capacity).', at: K16.check, lit: [K16.check, K16.next], size: 38, hand: false},
			]} />
			<AChip x={96} y={680} text="Next: prepare and test a buffer" size={40} color={BUF} hand={false} at={K16.next} />
			<PlateAt p={PHMETER} x={1480} y={700} h={300} at={K16.next + 6} />
		</Overlay>
	</>
);

// ---------- 17. Key notes ----------
const NOTES = [
	'A buffer contains a weak acid and its conjugate base, both in large amounts. It resists a change in pH when small amounts of acid or base are added.',
	'Ethanoic acid / ethanoate buffer. Added acid: CH_3COO^{-}(aq) + H_3O^{+}(aq) → CH_3COOH(aq) + H_2O(l). Added base: CH_3COOH(aq) + OH^{-}(aq) → CH_3COO^{-}(aq) + H_2O(l).',
	'[H_3O^{+}] = Ka × n(HA) / n(A^{−}). Equal amounts: pH = pKa. More HA: pH below pKa; more A^{−}: pH above pKa.',
	'Capacity: the amount of acid or base a buffer can take up before one partner is nearly used up. It depends on the amounts of HA and A^{−}, not on the pH.',
	'Blood: H_2CO_3 / HCO_3^{-} keeps pH 7.35 to 7.45. Added acid forms H_2CO_3, which breaks down to CO_2 and H_2O; the lungs remove the CO_2.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={760} aids={['A buffer has a defender for each attack.', "Resists, doesn't prevent."]} tag="a weak acid and its conjugate base, both in large amounts" />
);
void ACID_INK;
