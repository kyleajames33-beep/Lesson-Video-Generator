// M6 G01 scenes 4a to 4d: question 3 (HCl at pH 1.00 mixed with NaOH at pH 13.00): the attempt; each pH to a
// concentration, then moles; neutralise first (the two bars, the hydroxide runs out), then dilute through the total
// volume, with the pH track check; the "average the pH values" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {
	AChip, BASE_INK, DimG, INK, INK_SOFT, IonBars, LabelBeaker, MistakeX, Note, Overlay, P, PHTrack, PROTON_INK, PauseHold, Sx, TEAL, WLine, pulseAt,
} from './parts';
import type {QBlock} from './parts';
import {ChemBadge, Checks, HscTag, QCardC} from './board';
import type {QDef} from './board';

export const Q3: QDef = {
	blocks: t => [
		{text: '30.0 mL of hydrochloric acid with a pH of 1.00 is mixed with', at: t[0]},
		{text: '20.0 mL of sodium hydroxide solution with a pH of 13.00.', at: t[1]},
		{text: 'Both solutions are at 25 °C.', at: t[2]},
		{text: 'Assume the volumes add.', at: t[3]},
		{text: 'Calculate the pH of the resulting mixture.', at: t[4], para: true, weight: 700},
	] as QBlock[],
	h: 320,
	ans: [{label: 'pH', y: 400}],
};
const Q3M = {pa: 'pH of 1.00', pb: 'pH of 13.00', va: '30.0 mL', vb: '20.0 mL', add: 'Assume the volumes add'};
const FILL = 'pH = 1.70';
const WX = 840;

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(sc('q3-question'), {q: 'Question three', thirty: 'Thirty millilitres', twenty: 'twenty millilitres', at25: 'at twenty five', assume: 'Assume the volumes', calc: 'Calculate the pH', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<QCardC q={Q3} t={[KA.thirty, KA.twenty, KA.at25, KA.assume, KA.calc]} ansAt={[KA.calc + 20]} />
				<LabelBeaker x={1250} y={260} h={200} at={KA.thirty + 10} size={28} lines={[{t: 'HCl(aq)', at: KA.thirty + 10}, {t: 'pH 1.00', at: KA.thirty + 20}, {t: '30.0 mL', at: KA.thirty + 30}]} />
				<LabelBeaker x={1550} y={260} h={200} at={KA.twenty + 10} size={28} lines={[{t: 'NaOH(aq)', at: KA.twenty + 10}, {t: 'pH 13.00', at: KA.twenty + 20}, {t: '20.0 mL', at: KA.twenty + 30}]} />
				<PauseHold h={h} at={KA.pause} x={1180} y={720} cx={1520} cy={830} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. pH to concentration to moles ----------
const KB = cues(sc('q3-moles'), {cant: "can't mix pH", logs: 'logs', turn: 'turn each one', p100: 'A pH of one point zero zero', z010: 'zero point one zero moles', base: 'For the base', poh: 'the pOH is', also: 'also zero point', inmoles: 'In moles', z0030: 'zero point zero zero three zero', z0020: 'zero point zero zero two zero'});
export const SceneQ3Moles: React.FC = () => {
	const S = 36;
	return (
		<>
			<Heading text="Question 3: what's in there?" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Mixing" at={6} />
				<QCardC q={Q3} strip shrinkAt={0} marks={[{phrase: Q3M.pa, at: KB.z010}, {phrase: Q3M.pb, at: KB.poh}, {phrase: Q3M.va, at: KB.z0030}, {phrase: Q3M.vb, at: KB.z0030 + 8}]} ansAt={[-100]} />
				<Sx x={WX} y={230} text="Find the pH of the mixture" size={42} color={INK} hand at={4} />
				<DimG at={KB.p100} to={0.4}><Note x={WX} y={310} text="pH values are logs: turn each into a concentration" size={32} color={INK_SOFT} at={KB.logs} /></DimG>
				<WLine x={WX} y={420} size={S} dim={KB.poh} items={P('[H_3O^{+}] = 10^{−1.00}', KB.p100 + 20, {t: '= 0.10 mol/L', color: PROTON_INK}, KB.z010)} />
				<Note x={WX + 620} y={420} text="2 d.p. → 2 s.f." size={30} color={INK_SOFT} at={KB.z010 + 20} out={KB.base} />
				<WLine x={WX} y={495} size={S} dim={KB.inmoles} items={P('pOH = 14.00 − 13.00 = 1.00;', KB.poh, {t: '[OH^{−}] = 0.10 mol/L', color: BASE_INK}, KB.also)} />
				<WLine x={WX} y={590} size={S} items={P('n(H_3O^{+}) = 0.10 × 0.0300', KB.inmoles + 10, {t: '= 0.0030 mol', color: PROTON_INK}, KB.z0030)} />
				<WLine x={WX} y={660} size={S} items={P('n(OH^{−}) = 0.10 × 0.0200', KB.inmoles + 20, {t: '= 0.0020 mol', color: BASE_INK}, KB.z0020)} />
				<Checks ticks={{0: [KB.z0030]}} />
			</Overlay>
		</>
	);
};

// ---------- 4c. Neutralise first, then dilute ----------
const KC = cues(sc('q3-excess'), {neut: 'Neutralise first', make: 'make water', runs: 'runs out', z0010: 'zero point zero zero one zero', dilute: 'Then dilute', fifty: 'fifty millilitres', z020: 'zero point zero two zero', ph: 'and the pH', p170: 'one point seven zero', check: 'Check', below: 'below seven'});
export const SceneQ3Excess: React.FC = () => {
	const S = 36;
	const hT = (fr: number) => kf(fr, [[KC.runs, 300], [KC.runs + 40, 100]]);
	const hV = (fr: number) => kf(fr, [[KC.runs, 200], [KC.runs + 40, 0]]);
	return (
		<>
			<Heading text="Question 3: neutralise, then dilute" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Mixing" at={-100} />
				<QCardC q={Q3} strip marks={[{phrase: Q3M.pa, at: -100}, {phrase: Q3M.pb, at: -100}, {phrase: Q3M.va, at: KC.fifty}, {phrase: Q3M.vb, at: KC.fifty + 8}, {phrase: Q3M.add, at: KC.fifty + 16}]} fills={[{i: 0, text: FILL, at: KC.p170 + 10}]} ansAt={[-100]} />
				<DimG at={KC.fifty} to={0.4}>
					<IonBars x={900} base={560} gap={190} bw={90} hT={hT} hV={hV} at={2} labT="H_3O^{+}" labV="OH^{−}" valT={{t: '0.0030 mol', at: 4, out: KC.runs}} valV={{t: '0.0020 mol', at: 4, out: KC.runs}} />
					<Note x={1300} y={300} text="H_3O^{+} + OH^{−} → H_2O" size={32} color={INK} at={KC.make} />
					<AChip x={1300} y={400} text="excess H_3O^{+} = 0.0010 mol" size={34} color={PROTON_INK} hand={false} at={KC.z0010} />
				</DimG>
				<WLine x={WX} y={690} size={S} dim={KC.z020} items={P('V(total) = 30.0 + 20.0 = 50.0 mL = 0.0500 L', KC.fifty)} />
				<WLine x={WX} y={760} size={S} dim={KC.p170} items={P('[H_3O^{+}] = 0.0010 ÷ 0.0500', KC.fifty + 30, {t: '= 0.020 mol/L', color: PROTON_INK}, KC.z020)} />
				<WLine x={WX} y={835} size={40} items={P('pH = −log(0.020)', KC.ph, {t: '= 1.70', color: TEAL}, KC.p170)} />
				<PHTrack x={180} y={900} w={560} at={KC.check} wall={KC.check + 10} mark={{v: () => 1.7, at: KC.check + 16, label: () => '1.70'}} size={22} />
				<Note x={180} y={820} text="acid in excess: below 7 ✓" size={32} color={TEAL} at={KC.below} />
				<Checks ticks={{0: [-100], 1: [KC.fifty], 2: [KC.check]}} />
				{void KC.neut}{void KC.dilute}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {classic: 'The classic mistake', averaging: 'averaging', one: 'One and thirteen', log: 'log scale', more: 'more acid than base', acidic: 'still acidic'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const pz = pulseAt(f, KD.more, 0.15, 36);
	return (
		<>
			<Heading text="Question 3: the classic mistake" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Mixing" at={-100} />
				<QCardC q={Q3} strip marks={[{phrase: Q3M.pa, at: -100}, {phrase: Q3M.pb, at: -100}]} fills={[{i: 0, text: FILL, at: -100}]} ansAt={[-100]} />
				<MistakeX x={WX} y={240} text="(1.00 + 13.00) ÷ 2 = 7.00, neutral" at={4} cross={KD.classic + 24} note="work in moles, not pH" size={32} />
				<g transform={`translate(1000,760) scale(${pz}) translate(-1000,-760)`}>
					<IonBars x={900} base={760} gap={190} bw={90} hT={() => 100} hV={() => 0} at={-100} labT="H_3O^{+}" labV="OH^{−}" valT={{t: '0.0010 mol left', at: -100}} />
				</g>
				<Note x={1260} y={700} text="more acid than base" size={34} color={PROTON_INK} at={KD.more} />
				<Note x={1260} y={750} text="mixture still acidic" size={34} color={TEAL} at={KD.acidic} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
				{void KD.averaging}{void KD.one}{void KD.log}{void prog}
			</Overlay>
		</>
	);
};
