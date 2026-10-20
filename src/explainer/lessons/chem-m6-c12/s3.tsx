// M6 C12 scenes 11 to 16: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {DrawPath} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BURETTE} from './assets';
import {AChip, DimG, Fade, EqLine, IonSite, KeyNotesBoard, LensFrame, MistakeX, NAVY, Overlay, P, PauseHold, PlateAt, QText, RuleCard, Sx, TEAL, TaskLine, UNK, WLine, eq, fitSize, mw, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';
import {ETH_SITES} from '../chem-m6-c09/s1';

const QX = 140, QW = 1640;
const GREYX = '#9a948a';

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', aliquot: 'A twenty five', titres: 'The titres were', calc: 'Calculate the concentration', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A 25.00 mL aliquot of sulfuric acid, H₂SO₄, of unknown concentration was titrated with 0.1000 mol/L sodium hydroxide solution.', at: t[0]},
	{text: 'The titres were 23.45 mL, 23.70 mL, 23.40 mL and 23.50 mL.', at: t[1]},
	{text: 'Calculate the concentration of the sulfuric acid.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: '23.45 mL, 23.70 mL, 23.40 mL and 23.50 mL', at: 0}, {phrase: '0.1000 mol/L', at: 0}, {phrase: 'sulfuric acid, H₂SO₄', at: 0}, {phrase: '25.00 mL aliquot', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K11.turn} />
		<Question1 t={[K11.aliquot, K11.titres, K11.calc]} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={700} cx={1560} cy={690} />
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {notc: "isn't concordant", mean: 'twenty three point four five', r2345: 'two point three four five', sulf: 'Sulfuric acid gives', onetwo: 'one to two', halve: 'halve it', divide: 'Divide by zero', r0469: 'zero point zero four six nine zero', using: 'Using one to', doubles: 'doubles the'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 36;
	const e = eq(['H_2SO_4(aq)', '+', '2NaOH(aq)', '->', 'Na_2SO_4(aq)', '+', '2H_2O(l)'], K12.onetwo);
	const es = fitSize(e, 900, S);
	const OX = 1120, OY = 460, ow = mw('23.70', 34, false, 700);
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100]} marks={[
					{phrase: '23.45 mL, 23.70 mL, 23.40 mL and 23.50 mL', at: K12.notc - 10},
					{phrase: '0.1000 mol/L', at: K12.r2345 - 10, color: NAVY},
					{phrase: 'sulfuric acid, H₂SO₄', at: K12.onetwo - 20, color: TEAL},
					{phrase: '25.00 mL aliquot', at: K12.divide, color: UNK},
				]} />
			</Shrink>
			<WLine x={X} y={460} size={S} dim={K12.r2345} items={P('mean = (23.45 + 23.40 + 23.50) ÷ 3', K12.mean - 20, {t: '= 23.45 mL', color: TEAL}, K12.mean)} />
			<Fade at={K12.notc} out={K12.sulf}>
			<Sx x={OX} y={OY} text="23.70" size={34} color={GREYX} weight={700} at={K12.notc} />
			<DrawPath d={`M${OX - 6},${OY - 8} L${OX + ow + 6},${OY - 22}`} at={K12.notc + 10} dur={8} color={GREYX} width={5} />
			<Sx x={OX + ow + 20} y={OY} text="not concordant" size={30} color={GREYX} hand at={K12.notc + 14} />
			</Fade>
			<WLine x={X} y={530} size={S} dim={K12.sulf} items={P('n(NaOH) = 0.1000 × 0.02345', K12.r2345 - 30, {t: '= 2.345 × 10^{−3} mol', color: NAVY}, K12.r2345)} />
			<DimG at={K12.divide} to={0.35}><EqLine items={e} x={X} y={610} size={es} /></DimG>
			<WLine x={X} y={680} size={S} dim={K12.r0469} items={P('n(H_2SO_4) = 2.345 × 10^{−3} ÷ 2', K12.halve, {t: '= 1.1725 × 10^{−3} mol', color: UNK}, K12.halve + 16)} />
			<WLine x={X} y={750} size={S} items={P('c = 1.1725 × 10^{−3} ÷ 0.02500', K12.divide + 10, {t: '= 0.04690 mol/L', color: UNK}, K12.r0469)} />
			<AChip x={1120} y={700} text="c(H_2SO_4) = 0.04690 mol/L" size={40} color={UNK} hand={false} at={K12.r0469 + 20} />
			<MistakeX x={X} y={850} text="1 : 1, so c = 0.09380 mol/L" at={K12.using} cross={K12.doubles + 6} note="read the ratio from the equation" size={38} />
		</Overlay>
	);
};

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', two: 'Two flasks each', hcl: 'hydrochloric acid in', each: 'Each is titrated', predict: 'Predict the volume', explain: 'and explain given', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Two conical flasks each contain a 25.00 mL aliquot of an acid.', at: t[0]},
	{text: 'Flask A contains 0.100 mol/L hydrochloric acid, HCl, and flask B contains 0.100 mol/L ethanoic acid, CH₃COOH.', at: t[1]},
	{text: 'Each is titrated with 0.100 mol/L sodium hydroxide solution.', at: t[2]},
	{text: 'Predict the volume of sodium hydroxide needed to reach the equivalence point in each flask.', at: t[3], para: true},
	{text: 'Explain your prediction, given that the two acids have different pH values.', at: t[4]},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0, 0]).blocks, [{phrase: '25.00 mL aliquot', at: 0}, {phrase: '0.100 mol/L', at: 0}, {phrase: '0.100 mol/L', occ: 2, at: 0}, {phrase: '0.100 mol/L', occ: 3, at: 0}, {phrase: 'different pH values', at: 0}]);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={380} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K13.last} />
		<Question2 t={[K13.two, K13.hcl - 30, K13.each, K13.predict, K13.explain]} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={780} cx={1560} cy={770} />
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {both: 'twenty five point zero', each: 'Each acid gives', r250: 'two point five zero', starts: 'Ethanoic acid starts', hyd: 'as hydroxide removes', ionise: 'ionise until', saying: 'Saying the weak', less: 'less confuses'});
export const SceneFeedback2: React.FC = () => {
	const X = 140, S = 36;
	const L = {cx: 1560, cy: 720, r: 170};
	const U = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const t0 = K14.hyd, span = K14.saying - 30 - t0;
	const order = [1, 5, 0, 7, 2, 6, 3, 8];
	const ionAt = (i: number) => (i === 4 ? -100 : t0 + 20 + (order.indexOf(i) / (order.length - 1)) * span * 0.8);
	const meetAt = (i: number) => (i === 4 ? t0 + 10 : ionAt(i) + 40);
	return (
		<Overlay>
			<Shrink k={0.55}>
				<Question2 t={[-100, -100, -100, -100, -100]} marks={[
					{phrase: '25.00 mL aliquot', at: K14.both + 10}, {phrase: '0.100 mol/L', at: K14.both + 16}, {phrase: '0.100 mol/L', occ: 2, at: K14.both + 22}, {phrase: '0.100 mol/L', occ: 3, at: K14.both + 28},
					{phrase: 'different pH values', at: K14.ionise, color: TEAL},
				]} />
			</Shrink>
			<AChip x={X} y={470} text="A: 25.0 mL | B: 25.0 mL" size={44} color={TEAL} hand={false} at={K14.both + 30} />
			<WLine x={X} y={640} size={S} items={P('n(acid) = 0.100 × 0.02500', K14.r250 - 30, {t: '= 2.50 × 10^{−3} mol in each', color: UNK}, K14.r250)} />
			<WLine x={X} y={710} size={S} items={P('V(NaOH) = 2.50 × 10^{−3} ÷ 0.100', K14.r250 + 30, {t: '= 0.0250 L', color: NAVY}, K14.r250 + 60)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K14.starts} title="flask B" titleAt={K14.starts}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{ETH_SITES.map(([u, v, a], i) => { const [x, y] = U(u * 0.9, v * 0.9); return <IonSite key={i} x={x} y={y} ion={ionAt(i)} meet={meetAt(i)} from={[L.cx - L.r - 30, y]} s={1.05} ang={a} />; })}
			</LensFrame>
			<MistakeX x={X} y={850} text="B needs less NaOH: only partly ionised" at={K14.saying} cross={K14.less + 10} note="titre counts moles, not strength" size={38} />
			{void K14.each}
		</Overlay>
	);
};

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {so: 'So for any', avg: 'average only the', write: 'write the balanced', known: 'known to moles', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any titration" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K15.so} lh={88} lines={[
				{t: '1  Concordant titres only (within 0.10 mL); average them.', at: K15.avg, lit: [K15.avg, K15.write], size: 38, hand: false},
				{t: '2  Balanced equation → mole ratio.', at: K15.write, lit: [K15.write, K15.known], size: 38, hand: false},
				{t: '3  n(known) = c × V (V in L).', at: K15.known, lit: [K15.known, K15.next], size: 38, hand: false},
				{t: '4  n(unknown) from the ratio; c(unknown) = n ÷ V.', at: K15.known, lit: [K15.known, K15.next], size: 38, hand: false},
			]} />
			<AChip x={96} y={680} text="Next: titration in the lab" size={40} color={TEAL} hand={false} at={K15.next} />
			<PlateAt p={BURETTE} x={1500} y={640} h={380} at={K15.next + 6} />
		</Overlay>
	</>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'Titration: an exact volume (aliquot) of one solution reacts with the other solution, added from a burette, until the equivalence point. One of the two is a standard solution. The indicator\'s colour change is the endpoint, very close to the equivalence point.',
	'A primary standard is very pure, stable in air and does not take up water while weighed, so its mass gives its moles exactly (for example, anhydrous Na_2CO_3 dried in an oven). NaOH absorbs water and CO_2, so its solution is standardised first.',
	'Average only concordant titres (usually agreeing within 0.10 mL). The rough titre is not used.',
	'Four steps: balanced equation and mole ratio; n(known) = c × V (V in litres); n(unknown) from the ratio; c(unknown) = n ÷ V.',
	'A titration counts all of the acid, weak or strong: the titre depends on the moles of acid, not its strength.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={790} aids={['Known to moles, ratio, unknown.', 'Average only concordant titres.']} tag="read the ratio from the balanced equation; volumes in litres" />
);
