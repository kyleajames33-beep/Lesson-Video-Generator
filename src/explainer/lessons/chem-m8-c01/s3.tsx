// M8 C01 scenes 12 to 17: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the handoff to gravimetric analysis and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BALANCE, MOHR, hold, sc} from './common';
import {
	AChip, CRC, CR_INK, Cr, DimG, Hp, H_INK, INK, INK_SOFT, KeyNotesBoard, LensFrame, MistakeX, NAVY, Note, Overlay, P, PauseHold, PlateAt, QText, Sx, TEAL, TaskLine, UNK, WLine, clamp01, lerp, qCheck,
	smooth,
} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;
const GREYX = '#9a948a';

// ---------- 12/13. Attempt 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', bore: 'Bore water', find: 'Find the chloride', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A 20.00 mL sample of bore water was titrated with 0.0250 mol L⁻¹ silver nitrate solution, using potassium chromate as the indicator.', at: t[0]},
	{text: 'The titres were 15.10 mL (rough), 14.62 mL, 14.70 mL and 14.66 mL.', at: t[1]},
	{text: 'Calculate the concentration of chloride ions in the bore water, in mol L⁻¹ and in g L⁻¹.', at: t[2], para: true},
	{text: 'M(Cl) = 35.45 g mol⁻¹', at: t[2] + 10, para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: '15.10 mL (rough),', at: 0}, {phrase: '14.62 mL, 14.70 mL and 14.66 mL.', at: 0}, {phrase: '0.0250 mol L⁻¹', at: 0}, {phrase: '20.00 mL', at: 0}, {phrase: '35.45 g mol⁻¹', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={440} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.bore, K12.bore + 30, K12.find]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={780} cx={1560} cy={770} />
	</Overlay>
);
const F1 = 'feedback-1';
const K13 = cues(sc(F1), {leave: 'Leave out', average: 'average the rest', r1466: 'fourteen point six', silver: 'moles of silver', chloride: 'moles of chloride', divide: 'Divide by the', p0183: 'point zero one eight', times: 'Times thirty five', p650: 'point six five', litre: 'grams per litre', doubling: 'Doubling the', slip: 'classic slip'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100]} marks={[
					{phrase: '15.10 mL (rough),', at: K13.leave, color: GREYX},
					{phrase: '14.62 mL, 14.70 mL and 14.66 mL.', at: K13.average, color: TEAL},
					{phrase: '0.0250 mol L⁻¹', at: K13.silver - 20, color: NAVY},
					{phrase: '20.00 mL', at: K13.divide, color: UNK},
					{phrase: '35.45 g mol⁻¹', at: K13.times, color: TEAL},
				]} />
			</Shrink>
			<Note x={1180} y={530} text="15.10 mL: rough, left out" size={30} color={GREYX} hand={false} at={K13.leave + 10} out={K13.silver} />
			<WLine x={X} y={530} size={S} dim={K13.silver} items={P('mean = (14.62 + 14.70 + 14.66) ÷ 3', K13.average + 6, {t: '= 14.66 mL', color: TEAL}, K13.r1466)} />
			<WLine x={X} y={610} size={S} dim={K13.divide} items={P('n(Ag^{+}) = 0.0250 × 0.01466', K13.silver - 14, {t: '= 3.665 × 10^{−4} mol', color: NAVY}, K13.silver, '= n(Cl^{−}) (1 : 1)', K13.chloride)} />
			<WLine x={X} y={690} size={S} dim={K13.times} items={P('c = 3.665 × 10^{−4} ÷ 0.02000', K13.divide + 6, {t: '= 0.0183 mol/L', color: UNK}, K13.p0183)} />
			<WLine x={X} y={770} size={S} items={P('0.018325 × 35.45', K13.times + 6, {t: '= 0.650 g/L', color: UNK}, K13.p650)} />
			<AChip x={1180} y={640} text="0.0183 mol/L; 0.650 g/L" size={40} color={UNK} hand={false} at={K13.litre} />
			<MistakeX x={X} y={850} text="n(Cl^{−}) = 2 × n(Ag^{+}) → 0.0367 mol/L" at={K13.doubling} cross={K13.slip} note="Ag^{+} : Cl^{−} is 1 : 1" size={36} />
		</Overlay>
	);
};

// ---------- 14/15. Attempt 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', waste: 'Wastewater from', student: 'and a student', explain: 'Explain the effect', suggest: 'and suggest', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Wastewater from a pickling factory has a pH of 3.', at: t[0]},
	{text: 'A student determines its chloride concentration by Mohr titration with standard silver nitrate solution and potassium chromate indicator, without adjusting the pH.', at: t[1]},
	{text: '(a) Explain the effect on the calculated chloride concentration.', at: t[2], para: true},
	{text: '(b) Suggest one change to the method that would correct this.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0]).blocks, [{phrase: 'pH of 3.', at: 0}, {phrase: 'potassium chromate indicator,', at: 0}, {phrase: 'calculated chloride concentration.', at: 0}, {phrase: 'without adjusting the pH.', at: 0}]);
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={440} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.waste, K14.student, K14.explain, K14.suggest]} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={780} cx={1560} cy={770} />
	</Overlay>
);
const F2 = 'feedback-2';
const K15 = cues(sc(F2), {ph3: 'At p H three', hydrogen: 'hydrogen ions turn', chromate: 'of the chromate', with: 'With less chromate', extra: 'extra silver', high: "titre's too high", calc: 'the calculated chloride', fix: 'Fix it by', neut: 'neutralising the sample', example: 'for example with', seven: 'seven or eight'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const X = 140;
	const L = {cx: 1560, cy: 650, r: 150};
	const m = smooth(clamp01((f - (K15.chromate + 30)) / 20));
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: 'pH of 3.', at: K15.ph3 + 6, color: H_INK},
					{phrase: 'potassium chromate indicator,', at: K15.high - 10, color: TEAL},
					{phrase: 'calculated chloride concentration.', at: K15.calc, color: UNK},
					{phrase: 'without adjusting the pH.', at: K15.fix, color: NAVY},
				]} />
			</Shrink>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K15.hydrogen - 10} title="at pH 3" titleAt={K15.hydrogen}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#fbf0e4" />
				{[[-0.4, -0.2], [0.1, -0.35], [0.45, 0.2]].map(([u, v], i) => {
					const x = L.cx + u * L.r, y = L.cy + v * L.r;
					const a = smooth(clamp01((f - (K15.hydrogen + i * 8)) / 20));
					return (
						<g key={i}>
							{i < 2 ? <Cr x={lerp(x, L.cx - 20, m)} y={lerp(y, L.cy - 40, m)} o={1 - m} /> : <Cr x={x} y={y} />}
							{i < 2 && a > 0 ? <Hp x={lerp(L.cx - L.r, x + 30, a)} y={y + 30} o={1 - m} /> : null}
						</g>
					);
				})}
				{m > 0.01 ? <g opacity={m}><rect x={L.cx - 74} y={L.cy - 64} width={108} height={44} rx={12} fill="#f3c08a" stroke={H_INK} strokeWidth={2.5} /><Sx x={L.cx - 20} y={L.cy - 34} text="Cr_2O_7^{2−}" size={22} color={H_INK} anchor="middle" weight={800} at={-1000} /></g> : null}
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 90} text="less CrO_4^{2−} for the red" size={28} color={CR_INK} anchor="middle" hand={false} at={K15.with} />
			<AChip x={X} y={540} text="late endpoint → titre high → Cl^{−} too high" size={40} color={UNK} hand={false} at={K15.high} />
			<AChip x={X} y={650} text="fix: neutralise first (e.g. NaHCO_3) to about pH 7 to 8" size={38} color={TEAL} hand={false} at={K15.fix} />
			<MistakeX x={X} y={790} text="No effect: H^{+} isn't in Ag^{+} + Cl^{−} → AgCl" at={K15.seven - 4} cross={K15.seven + 12} note="acid changes the indicator" size={34} />
			{void K15.extra}{void K15.neut}{void K15.example}{void CRC}{void INK}{void DimG}
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {so: 'So silver counts', chromate: 'and chromate tells', next: 'Next', weigh: "we'll weigh"});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Note x={96} y={200} text="White while Cl^{−} lasts; stop at the first lasting red-brown." size={40} color={TEAL} at={4} />
			<g opacity={1 - 0.5 * prog(f, K16.next, 14)}>
				<PlateAt p={MOHR.end} x={300} y={330} h={380} at={K16.so} />
				<Note x={420} y={780} text="silver counts the chloride" size={34} color={INK} anchor="middle" at={K16.so + 6} />
				<Note x={420} y={830} text="chromate tells you when to stop" size={34} color={INK_SOFT} anchor="middle" at={K16.chromate} />
			</g>
			<PlateAt p={BALANCE} x={1180} y={360} h={380} at={K16.next + 6} />
			<AChip x={1100} y={800} text="Next: gravimetric analysis" size={44} color={TEAL} hand={false} at={K16.next} />
			<Note x={1100} y={920} text="weigh the precipitate instead of measuring a volume" size={32} color={INK_SOFT} at={K16.weigh} />
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Mohr method: AgNO_3 in the burette, chloride sample in the flask, a little K_2CrO_4 indicator. Ag^{+} + Cl^{−} → AgCl(s), white, 1 : 1.',
	'Endpoint: the first lasting red-brown, 2Ag^{+} + CrO_4^{2−} → Ag_2CrO_4(s). It appears once more than 99.9% of the Cl^{−} is gone, because with lots of Cl^{−} and little CrO_4^{2−}, AgCl needs far less Ag^{+} to pass its Ksp.',
	'Valid: about pH 6.5 to 10. Acid turns CrO_4^{2−} into Cr_2O_7^{2−}, so the endpoint is late and the titre too high. Base gives Ag_2O. Br^{−} and I^{−} are counted as Cl^{−}. A blank corrects the slightly late endpoint.',
	'Calculation: concordant mean titre → n(Ag^{+}) = cV → n(Cl^{−}) (1 : 1) → c = n ÷ V(aliquot) → × 35.45 for g/L. Example: 25.00 mL, 18.50 mL of 0.1000 mol/L → 0.0740 mol/L, 2.62 g/L.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={760} aids={['White while Cl⁻ lasts; stop at the first lasting red-brown.', "Ag⁺ : Cl⁻ = 1 : 1 (the 2 : 1 is the indicator's)."]} tag="with a small, set amount of chromate, near neutral pH; no dilution step" />
);
