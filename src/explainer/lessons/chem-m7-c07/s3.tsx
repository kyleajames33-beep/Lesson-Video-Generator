// M7 C07 scenes 13 to 18: attempt 1 (butan-1-ol in a spirit burner; black deposit), brief feedback (6 O2, the tally;
// "13/2 O2" crossed; soot from incomplete combustion), attempt 2 (per gram from ΔH and M), brief feedback (29.67 and
// 47.91 kJ per gram; "4 × per mole" crossed; renewable crops), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {EqRow, Plate, RingAt, Tally, eqLay, ptOn} from '../chem-m7-c06/parts';
import {BURNER, CANE, hold, sc} from './common';
import {HEAT, INK, MiniBars, MiniLadder, MiniLoops, NAVY} from './parts';

const SY = 70;

// ---------- 13. Attempt 1 ----------
const Q1 = ['Butan-1-ol is burned in a spirit burner beneath a metal can of water.', '(a) Write a balanced equation for the complete combustion of butan-1-ol.', '(b) After a few minutes, a black deposit forms on the base of the can. Explain how', 'this deposit forms.'];
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', but: 'Butan-one-ol is', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCardX lines={Q1} at={K13.but} y={200} size={38} />
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {c4: 'C four H', six: 'plus six', gives: 'gives four', thirteen: 'Thirteen', brings: 'brings one,', twelve: 'twelve from', half: 'Six and a half', ohh: 'oxygen in the O H.', black: 'The black deposit', soot: 'soot:', inc: 'incomplete', little: 'too little oxygen'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const left = [{t: 'C_4H_9OH', at: K14.c4}, {t: '+', at: K14.six - 4}, {t: '6O_2', at: K14.six}];
	const right = [{t: '4CO_2', at: K14.gives}, {t: '+', at: K14.gives + 10}, {t: '5H_2O', at: K14.gives + 16}];
	const L = eqLay(left, right, 50, 220, 860);
	const rx = (L.rx[0] + L.rx[2] + L.wr[2]) / 2;
	const P = {cx: 1640, top: 520, h: 300};
	const patch = ptOn(BURNER.sooty, P.cx, P.top, P.h, 1117, 1140);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={26} under={[{line: 1, phrase: 'complete combustion of butan-1-ol', at: K14.six}, {line: 2, phrase: 'black deposit', at: K14.black}]} />
			<EqRow left={left} right={right} cx={860} y={410} size={50} len={220} arrow={{at: K14.six + 8}} />
			<Tally x={L.x0 - 80} lx={L.lc[0]} rx={rx} y={520} lh={58} size={34} tickDx={170} o={dimAt(f, K14.black, 0.55)} rows={[
				{el: 'C', at: K14.gives + 20, l: [{t: '4', at: K14.gives + 20}], r: [{t: '4', at: K14.gives + 26}]},
				{el: 'H', at: K14.gives + 34, l: [{t: '10', at: K14.gives + 34}], r: [{t: '10', at: K14.gives + 40}]},
				{el: 'O', at: K14.thirteen, l: [{t: '1 + ?', at: K14.brings}, {t: '1 + 12', at: K14.twelve}], r: [{t: '8 + 5 = 13', at: K14.thirteen}], tick: K14.twelve + 12},
			]} />
			<Crossed x={140} y={720} text="C_4H_9OH + 13/2 O_2 → 4CO_2 + 5H_2O" at={K14.half} cross={K14.ohh} note="the OH already supplies one O" size={32} />
			<g opacity={vis(f, K14.black)}>
				<Plate p={BURNER.sooty} cx={P.cx} top={P.top} h={P.h} />
				<RingAt c={patch} rx={64} ry={26} at={K14.soot} />
			</g>
			<AnswerChip x={140} y={890} text="soot = C; too little O_2 for the fuel → incomplete combustion" at={K14.inc} size={32} />
			{void K14.little}
		</Overlay>
	);
};

// ---------- 15. Attempt 2 ----------
const Q2 = ['The molar enthalpy of combustion of ethanol is −1367 kJ mol⁻¹ (M = 46.07 g mol⁻¹)', 'and of octane is −5471 kJ mol⁻¹ (M = 114.2 g mol⁻¹).', '(a) Calculate the energy released per gram of each fuel.', '(b) Compare ethanol and octane as fuels, including one advantage of ethanol that is', 'not related to energy.'];
const K15 = cues(sc('attempt-2'), {last: 'Last one', eth: "Ethanol's molar", screen: 'on screen.', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCardX lines={Q2} at={K15.eth} y={200} size={36} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
		{void K15.screen}
	</Overlay>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {div: 'Divide each', e: 'twenty nine', o: 'forty seven', so: 'So octane', pm: 'Per mole,', four: 'four times', pg: 'compare per gram', adv: "Ethanol's advantage", renew: 'renewable'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={24} under={[{line: 0, phrase: '−1367 kJ mol⁻¹', at: K16.e}, {line: 0, phrase: '46.07 g mol⁻¹', at: K16.e + 8}, {line: 1, phrase: '−5471 kJ mol⁻¹', at: K16.o}, {line: 1, phrase: '114.2 g mol⁻¹', at: K16.o + 8}, {line: 3, phrase: 'one advantage of ethanol', at: K16.renew}]} />
			<Sx x={160} y={410} text="|ΔH| ÷ M" size={34} color={NAVY} weight={800} at={K16.div} opacity={dimAt(f, K16.e, 0.5)} />
			<g opacity={dimAt(f, K16.o, 0.5)}><Sx x={160} y={480} text="ethanol: 1367 ÷ 46.07 = 29.67 kJ g⁻¹ (4 s.f.)" size={38} color={INK} weight={700} at={K16.e} /></g>
			<Sx x={160} y={550} text="octane: 5471 ÷ 114.2 = 47.91 kJ g⁻¹ (4 s.f.)" size={38} color={INK} weight={700} at={K16.o} />
			<AnswerChip x={160} y={590} text="octane: more energy per gram" at={K16.so} size={34} />
			<Crossed x={160} y={720} text="octane: 4 × the energy per mole, so 4 × better" at={K16.pm} cross={K16.pg} note="compare per gram: octane molecules are heavier" size={32} />
			<Plate p={CANE} cx={1640} top={430} h={300} at={K16.renew - 10} />
			<AnswerChip x={160} y={890} text="ethanol: renewable crops; carbon recently from the air" at={K16.renew + 6} size={32} />
			{void K16.four}{void K16.adv}
		</Overlay>
	);
};

// ---------- 17. Handoff ----------
const K17 = cues(sc('handoff'), {so: 'So an', grows: 'grows with', lowers: 'oxygen lowers', choose: 'choosing a fuel', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const lit = (a: number) => 0.45 + 0.55 * vis(f, a);
	return (
		<Overlay>
			<g opacity={lit(K17.grows)}><MiniLadder x={160} y={250} at={K17.so} /><Sx x={160} y={420} text="energy grows with the chain" size={28} color={INK} weight={700} at={K17.grows} /></g>
			<g opacity={lit(K17.lowers)}><MiniBars x={760} y={260} at={K17.so + 8} /><Sx x={760} y={420} text="oxygen lowers energy per gram" size={28} color={INK} weight={700} at={K17.lowers} /></g>
			<g opacity={lit(K17.choose)}><MiniLoops x={1360} y={220} at={K17.so + 16} /><Sx x={1360} y={460} text="carbon and cost" size={28} color={INK} weight={700} at={K17.choose} /></g>
			<g opacity={vis(f, K17.next)}>
				<Plate p={BURNER.clean} cx={330} top={560} h={300} />
				<rect x={560} y={640} width={11 * 22} height={34} rx={8} fill={HEAT} />
				<rect x={560} y={688} width={22.7 * 22} height={34} rx={8} fill="#f4c69a" />
				<Sx x={560 + 22.7 * 22 + 14} y={714} text="about 50% reached the water" size={24} color={INK} weight={700} at={-1000} />
				<rect x={560} y={780} width={1180} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={600} y={830} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={600} y={874} text="measure and compare alcohol combustion enthalpy" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Complete combustion (plenty of O_2): C_2H_5OH(l) + 3O_2(g) → 2CO_2(g) + 3H_2O(l). Balance C, then H, then O, counting the alcohol\'s own O. Per mole of fuel: CH_3OH(l) + 3/2 O_2(g) → CO_2(g) + 2H_2O(l), ΔH = −726 kJ mol⁻¹ (negative: heat released).',
	'Incomplete combustion (too little O_2): CO (toxic) and C (soot) form; yellow smoky flame; less energy released. Soot shows the oxygen supply was too low.',
	'ΔHc (kJ mol⁻¹): methanol −726, ethanol −1367, propan-1-ol −2021, butan-1-ol −2676. About −650 kJ mol⁻¹ per extra CH_2: the same extra bonds broken and the same extra CO_2 and H_2O formed. A simple can catches only about half.',
	'Fuels compare per gram (|ΔHc| ÷ M): ethanol 29.7, octane 47.9 kJ g⁻¹. Alcohols give less: the O adds mass, and the C bonded to O is already partly oxidised. Ethanol: about 30% less energy per litre.',
	'Ethanol against petrol: same products (CO_2 + H_2O). Ethanol\'s carbon came recently from the air (renewable crops), but growing, fermenting and distilling use energy, land and water, so it is not automatically carbon neutral. Petrol: more energy, fossil carbon adds CO_2; extraction brings jobs, income and energy security, with spills, habitat loss and community costs near the site.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={28} aidTop={840} aids={['Per mole: each CH₂ adds about 650 kJ.', 'Per gram: oxygen costs energy.']} tag="alcohol combustion and fuel choice" />
);
