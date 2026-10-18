import React from 'react';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, Heading, S_INK, hold, sc} from './common';
import {NOPPT, PBI2} from './assets';
import {ALine, AMBER_INK, BD, Chip, CoefChip, CurveArrow, EqLine, Fade, Glow, GivensCard, IceS, INK, INK_SOFT, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, PiecesM, RootOver, Ring, Sx, TEAL, Tag, TaskLine, cardH, cellS, dissEq, eCentre, iceSW, mw, segXs, segsW, AMBER} from './parts';
import type {IceRow, MPiece} from './parts';

const B = BD;
const ice = (...rows: IceRow[]) => rows;
const blankRows = (at: number): IceRow[] => [{at, cells: [null, null]}, {at: at + 4, cells: [null, null]}, {at: at + 8, cells: [null, null]}];
const blankCols = (at: number) => [{name: '', at, color: INK}, {name: '', at, color: INK}];

// ---------- 14. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K15 = cues(sc(A1), {turn: 'Your turn', lead: 'Lead iodide', ksp: 'Ksp of 9.8', deg: '25 degrees', calc: 'Calculate its molar', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K15.turn} />
				<Sx x={96} y={252} text="Calculate the molar solubility of PbI_2 in water." size={48} color={INK} hand at={K15.calc} />
				<GivensCard x={96} y={300} w={660} h={cardH(3)} at={K15.lead} lh={B.card.lh} lines={[
					{text: 'lead iodide, PbI_2', at: K15.lead, size: 32},
					{text: 'Ksp = 9.8 × 10^{−9} (25 °C)', at: K15.ksp + 20, size: 32, color: TEAL},
					{text: 'Pb^{2+} is 2+,  I^{−} is 1−', at: K15.deg + 10, size: 32},
				]} />
				<IceS x={900} y={300} s={0.7} outlineAt={K15.calc} cols={blankCols(K15.calc)} rows={blankRows(K15.calc + 10)} />
				<PauseHold h={h} at={K15.pause} x={96} y={720} cx={1560} cy={820} />
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K16 = cues(sc(F1), {each: 'Each lead iodide', onePb: 'one lead ion', twoI: 'two iodide ions', ksp: 'so Ksp is', twoS: 'two s squared', four: 'four s cubed', div: 'Divide both sides', root: 'take the cube root', val: '1.35 times', got: 'If you got', instead: 's instead of two s', iodide: 'for iodide'});
export const SceneFeedback1: React.FC = () => {
	const S = {x: 96, y: 250, s: 42};
	const eq = dissEq('PbI_2(s)', 'Pb^{2+}(aq)', 'I^{-}(aq)', [K16.each, K16.each + 8, K16.onePb, K16.twoI - 8, K16.twoI], {anCoef: '2'});
	const T = {x: 96, y: 300, s: 0.66};
	const cell = (r: number, c: number) => cellS(T.x, T.y, T.s, r, c);
	const coef = eCentre(eq.items, eq.ix.anCoef, S.s, S.x, S.y);
	const X = 780;
	const l3: MPiece[] = [{t: 's^{3}', at: K16.div, gap: 34}, {t: '=', at: K16.div + 6, gap: 70}, {t: '2.45 × 10^{−9}', at: K16.div + 12}];
	const x3 = segXs(l3, X, 42);
	return (
		<>
			<Overlay>
				<TaskLine text="Molar solubility of PbI_2 in water" at={-100} size={46} color={INK_SOFT} />
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<IceS x={T.x} y={T.y} s={T.s} outlineAt={-100} solid={{name: 'PbI_2(s)', at: -100}} cols={[{name: 'Pb^{2+}', at: -100, color: CAT_INK}, {name: 'I^{-}', at: -100, color: AN_INK}]} rows={ice(
					{at: -100, cells: [{text: '0', at: K16.onePb}, {text: '0', at: K16.onePb + 4}]},
					{at: -100, cells: [{text: '+s', at: K16.onePb + 10, color: S_INK}, {text: '+2s', at: K16.twoI + 30, color: S_INK}]},
					{at: -100, cells: [{text: 's', at: K16.twoI + 40, color: S_INK}, {text: '2s', at: K16.twoI + 46, color: S_INK}]},
				)} />
				<CoefChip from={coef} to={[cell(1, 1)[0] - 50, cell(1, 1)[1]]} at={K16.twoI} />
				<ALine x={X} y={360} items={[{t: 'Ksp = [Pb^{2+}][I^{−}]^{2}', at: K16.ksp}, {t: '= s(2s)^{2}', at: K16.twoS, color: S_INK}, {t: '= 4s^{3}', at: K16.four, color: S_INK}]} />
				<ALine x={X} y={440} items={[{t: '4s^{3} = 9.8 × 10^{−9}', at: K16.four + 20}]} />
				<ALine x={X} y={530} items={l3} />
				<Sx x={X + segsW(l3, 42) + 50} y={530} text="÷ 4, then cube root" size={36} color={AMBER_INK} hand at={K16.div + 6} />
				<RootOver x0={x3[0].x} w={x3[0].w} y={530} size={42} at={K16.root} cube />
				<RootOver x0={x3[2].x} w={x3[2].w} y={530} size={42} at={K16.root + 6} cube />
				<Chip x={X} y={590} w={600} text="s = 1.35 × 10^{−3} mol/L" size={40} color={TEAL} at={K16.val} hand={false} />
				<MistakeChip x={X} y={720} text="s = 2.14 × 10^{−3}" size={36} at={K16.got + 10} note="iodide is 2s, not s" />
				{void K16.instead}{void K16.iodide}
			</Overlay>
		</>
	);
};

// ---------- 16. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K17 = cues(sc(A2), {last: 'Last one', sat: 'A saturated solution', ag: 'silver carbonate', contains: 'contains', mass: 'molar mass', calc: 'Calculate Ksp', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const h = hold(A2);
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K17.last} />
				<Sx x={96} y={252} text="Calculate Ksp for Ag_2CO_3." size={48} color={INK} hand at={K17.calc} />
				<GivensCard x={96} y={300} w={660} h={cardH(3)} at={K17.sat} lh={B.card.lh} lines={[
					{text: 'saturated Ag_2CO_3(aq), 25 °C', at: K17.ag, size: 32},
					{text: '0.0354 g/L dissolved', at: K17.contains + 10, size: 32, color: TEAL},
					{text: 'M(Ag_2CO_3) = 275.8 g/mol', at: K17.mass + 20, size: 32},
				]} />
				<IceS x={900} y={300} s={0.7} outlineAt={K17.calc} cols={blankCols(K17.calc)} rows={blankRows(K17.calc + 10)} />
				<PauseHold h={h} at={K17.pause} x={96} y={720} cx={1560} cy={820} />
			</Overlay>
		</>
	);
};

// ---------- 17. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K18 = cues(sc(F2), {conv: 'convert to moles', div: 'divided by', v128: '1.28 times', mpl: 'moles per litre', meas: 'That measured value', erow: 'the equilibrium row', carb: 'carbonate is s', silver: 'silver is two s', ksp: 'Ksp is two s', times: 'times s', v846: '8.46 times', keep: 'Keep the unrounded', put: 'If you put', straight: 'straight in as s', skipped: 'skipped the conversion'});
export const SceneFeedback2: React.FC = () => {
	const S = {x: 96, y: 610, s: 36};
	const eq = dissEq('Ag_2CO_3(s)', 'Ag^{+}(aq)', 'CO_3^{2-}(aq)', [K18.meas, K18.meas + 8, K18.silver - 10, K18.carb - 6, K18.carb - 10], {catCoef: '2'});
	const T = {x: 820, y: 196, s: 0.78};
	const cell = (r: number, c: number) => cellS(T.x, T.y, T.s, r, c);
	const coef = eCentre(eq.items, eq.ix.catCoef, S.s, S.x, S.y);
	const C = {x: 96, y: 210, w: 640};
	const resY = C.y + 108 + 3 * 50;
	const src: [number, number] = [C.x + 28 + mw('= 1.28 × 10^{−4} mol/L', 32) + 14, resY - 12];
	const eC = cell(2, 1);
	return (
		<>
			<Overlay>
				<TaskLine text="Calculate Ksp for Ag_2CO_3" at={-100} size={46} color={INK_SOFT} />
				<GivensCard x={C.x} y={C.y} w={C.w} h={cardH(4)} at={-100} lh={50} lines={[
					{text: '0.0354 g/L (25 °C)', at: -100, size: 32},
					{text: 'M = 275.8 g/mol', at: -100, size: 32},
					{text: 'to mol/L: 0.0354 ÷ 275.8', at: K18.conv, size: 30, color: S_INK},
					{text: '= 1.28 × 10^{−4} mol/L', at: K18.v128, size: 32, color: S_INK},
				]} />
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<IceS x={T.x} y={T.y} s={T.s} outlineAt={K18.meas - 20} solid={{name: 'Ag_2CO_3(s)', at: K18.meas - 10}} cols={[{name: 'Ag^{+}', at: K18.meas - 10, color: CAT_INK}, {name: 'CO_3^{2-}', at: K18.meas - 4, color: AN_INK}]} rows={ice(
					{at: K18.meas, cells: [{text: '0', at: K18.meas + 10}, {text: '0', at: K18.meas + 14}]},
					{at: K18.meas + 4, cells: [{text: '+2.57 × 10^{−4}', at: K18.silver + 40, color: S_INK, size: 30}, {text: '+1.28 × 10^{−4}', at: K18.carb + 30, color: S_INK, size: 30}]},
					{at: K18.meas + 8, lit: [K18.erow, K18.ksp], cells: [
						{text: '2.57 × 10^{−4}', at: K18.silver + 20, color: S_INK, size: 32},
						{text: '1.28 × 10^{−4}', at: K18.erow + 30, color: S_INK, size: 32},
					]},
				)} />
				<CurveArrow d={[src, [620, 548], [eC[0] - 200, 548], [eC[0] - 70, eC[1] + 30]]} at={K18.erow - 6} dur={30} out={K18.ksp} />
				<Sx x={T.x + iceSW(2, T.s) + 24} y={eC[1] + 4} text="CO_3^{2−}: s" size={32} color={AN_INK} hand at={K18.carb} />
				<Sx x={T.x + iceSW(2, T.s) + 24} y={eC[1] + 46} text="Ag^{+}: 2s" size={32} color={CAT_INK} hand at={K18.silver} />
				<CoefChip from={coef} to={[cell(2, 0)[0] - 70, cell(2, 0)[1]]} at={K18.silver - 6} />
				<ALine x={T.x} y={690} items={[{t: 'Ksp = [Ag^{+}]^{2}[CO_3^{2-}]', at: K18.ksp}]} size={40} />
				<ALine x={T.x} y={764} items={[{t: '= (2.57 × 10^{−4})^{2}(1.28 × 10^{−4})', at: K18.times}]} size={40} />
				<Chip x={T.x} y={800} w={520} text="Ksp = 8.46 × 10^{−12}" size={40} color={TEAL} at={K18.v846} hand={false} />
				<Tag x={T.x + 540} y={804} w={360} text="from the unrounded s" at={K18.keep} color={AMBER_INK} />
				<MistakeChip x={96} y={900} text="s = 0.0354" size={36} at={K18.put + 14} note="g/L: divide by M first" />
				{void K18.mpl}{void K18.straight}{void K18.skipped}
			</Overlay>
		</>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K19 = cues(sc(DR), {any: 'any Ksp question', write: 'write the dissolving', each: 'each ion as', given: ['Given Ksp', 1], root: 'square or cube root', meas: 'Given a measured', put: 'put it in the equilibrium', mult: 'multiply out', cmp: 'compare Ksp directly', same: 'same formula type', next: 'Next', mixed: 'two solutions are mixed', form: 'actually form'});
export const SceneDecision: React.FC = () => {
	const ys = [300, 400, 500, 600, 700];
	const lines: MPiece[][] = [
		[{t: '1  Write the dissolving equation.', at: K19.write, hand: true}],
		[{t: '2  Each ion = its count × s; raise it to that count.', at: K19.each, hand: true}],
		[{t: '3  Ksp given: solve for s (1 : 1 or 1 : 2: square or cube root).', at: K19.given, hand: true}],
		[{t: '4  s measured: E row first (g/L to mol/L first), then Ksp.', at: K19.meas, hand: true}],
		[{t: '5  Compare Ksp directly only for the same formula type.', at: K19.cmp, hand: true}],
	];
	const outs = [K19.each, K19.given, K19.meas, K19.cmp, K19.next];
	return (
		<>
			<Heading text="For any Ksp question" at={4} size={60} />
			<Overlay>
				<Fade at={K19.any}><rect x={96} y={210} width={1320} height={540} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				{ys.map((y, i) => <Glow key={i} y={y} at={lines[i][0].at} out={outs[i]} />)}
				{ys.map((y, i) => <PiecesM key={i} x={130} y={y} items={lines[i]} size={44} />)}
				<Chip x={96} y={830} w={980} text="Next: will mixing form a precipitate? (Qsp)" size={38} color={TEAL} at={K19.next + 6} />
				<Fade at={K19.mixed}><PicH p={PBI2} x={1130} y={790} h={210} /></Fade>
				<Sx x={1290} y={930} text="?" size={90} color={AMBER_INK} anchor="middle" hand at={K19.form} />
				<Fade at={K19.mixed + 8}><PicH p={NOPPT} x={1350} y={790} h={210} /></Fade>
				{void K19.root}{void K19.put}{void K19.mult}{void K19.same}{void AMBER}{void Ring}
			</Overlay>
		</>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Ksp is K for a saturated solution of an ionic solid. The solid is left out (no denominator); coefficients become powers; no unit is written; it changes only with temperature. Example: CaF_2(s) ⇌ Ca^{2+}(aq) + 2F^{−}(aq), Ksp = [Ca^{2+}][F^{−}]^{2}.',
	'Molar solubility s = moles of solid that dissolve per litre of saturated solution (mol/L). In pure water each ion is its count × s.',
	'Ksp to s: 1 : 1, Ksp = s^{2}, so s = √Ksp. 1 : 2 or 2 : 1, Ksp = s(2s)^{2} = 4s^{3}, so s = (Ksp ÷ 4)^{1/3}. The 2 goes inside the bracket before squaring.',
	's to Ksp: convert g/L to mol/L first (÷ M); put the measured value in the E row first; multiply out.',
	'Compare Ksp values directly only for the same formula type. Otherwise calculate s for each (BaSO_4 has the bigger Ksp, but CaF_2 is about 20 times more soluble).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={31} aidTop={800} aids={['Each ion is its count times s. Then raise it to that count.']} tag="pure water, saturated, same temperature" />
);
void B;
