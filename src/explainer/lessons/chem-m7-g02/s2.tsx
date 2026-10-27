// M7 G02 scenes 3a to 3d: question 2 (backwards to a mass): the attempt; the heat the water needs, then the heat
// released (the split bar with only its share known); heat to moles to mass; "× 0.450" crossed on a number line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay, PauseHold, Sx} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {BOTTLE, Heading, hold, sc} from './common';
import {BLUE, Checks4, INK, NumLine, ORANGE, SplitBar, TEALD, WL} from './board';

export const Q2 = ['A student plans to heat 250.0 g of water from 20.0 °C to 35.0 °C using a spirit burner', 'containing ethanol (C₂H₅OH, M = 46.07 g mol⁻¹). In earlier trials with the same apparatus,', 'the water absorbed 45.0% of the heat released by the burning ethanol. The molar enthalpy', 'of combustion of ethanol is −1367 kJ mol⁻¹, and the specific heat capacity of water is', '4.18 J g⁻¹ °C⁻¹. Calculate the mass of ethanol that the student should expect to burn.'];
const AM = '#c98a1b';
const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});
const U2 = (T: {w: number; p?: number; h?: number; M?: number}) => [u(0, '250.0 g of water', T.w), u(0, 'from 20.0 °C to 35.0 °C', T.w + 8), u(4, '4.18 J g⁻¹ °C⁻¹', T.w + 16), ...(T.p !== undefined ? [u(2, '45.0%', T.p)] : []), ...(T.h !== undefined ? [u(3, '−1367 kJ mol⁻¹', T.h)] : []), ...(T.M !== undefined ? [u(1, 'M = 46.07 g mol⁻¹', T.M)] : [])];
const AnsQ2: React.FC<{a?: number}> = ({a = 1e6}) => <AnsBox x={140} y={900} w={900} label="mass" at={-100} parts={[{t: '1.17 g', at: a, lit: true}, {t: ' of ethanol', at: a + 6}]} />;

// ---------- 3a. Attempt ----------
const KA = cues(sc('q2-question'), {q: 'Question two', a: 'A student', calc: 'calculate the', pause: 'Pause here'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q2} at={KA.a} y={175} size={32} />
				<Plate p={BOTTLE} cx={1420} top={540} h={260} at={KA.a + 20} />
				<Sx x={1420} y={830} text="ethanol" size={26} color={INK} anchor="middle" weight={700} at={KA.a + 20} />
				<AnsBox x={140} y={560} w={900} label="mass" at={KA.calc + 20} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1700} cy={840} />
				<Checks4 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Heat the water needs, then heat released ----------
const KB = cues(sc('q2-heat'), {first: 'First,', two: 'two hundred', ftt: 'fifteen point six', but: 'But only', more: 'must release', div: 'divided by', tf: 'thirty four'});
export const SceneQ2Heat: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Badge text="Backwards: heat to mass" at={6} />
			<QStrip lines={Q2} under={U2({w: KB.two, p: KB.but})} />
			<WL x={160} y={420} t="ΔT = 35.0 − 20.0 = 15.0 °C" at={KB.two} color={ORANGE} dim={KB.but} />
			<WL x={160} y={485} t="q(water) = 250.0 × 4.18 × 15.0 = 15 675 J = 15.675 kJ" at={KB.ftt - 10} color={ORANGE} dim={KB.tf} dimTo={0.6} />
			<SplitBar x={160} y={560} w={1000} frac={0.45} at={KB.but} fillAt={KB.but + 6} fullAt={KB.tf} full="34.83 kJ released" share="15.675 kJ = 45.0% of the heat released" q={KB.more} />
			<WL x={160} y={760} t="heat released = 15.675 ÷ 0.450 = 34.833 kJ" at={KB.div - 20} color={INK} size={36} />
			<AnsQ2 />
			<Checks4 ticks={{0: [KB.ftt]}} />
			{void KB.first}{void dimAt}{void f}
		</Overlay>
	);
};

// ---------- 3c. Heat to moles to mass ----------
const KC = cues(sc('q2-mass'), {now: 'Now the fuel', each: 'Each mole', so: 'so thirty', times: 'Times forty', one: 'one point one', three: 'Three significant'});
export const SceneQ2Mass: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Badge text="Backwards: heat to mass" at={-100} />
			<QStrip lines={Q2} under={U2({w: -100, p: -100, h: KC.each, M: KC.times})} />
			<Tag x={160} y={400} text="heat released = 34.833 kJ" at={-100} size={30} color={INK} fill="#fffdf8" />
			<WL x={160} y={530} t="n(ethanol) = 34.833 ÷ 1367 = 0.025482 mol" at={KC.so} color={BLUE} size={36} dim={KC.times} dimTo={0.6} />
			<Tag x={160} y={560} text="use the size, 1367: the sign only says heat is released" at={KC.so + 30} out={KC.times + 10} size={24} />
			<WL x={160} y={680} t="m = 0.025482 × 46.07 = 1.1739 g → 1.17 g" at={KC.times} color={BLUE} size={36} />
			<Tag x={160} y={720} text="3 s.f.: 15.0 °C and 45.0%" at={KC.three} size={24} />
			<AnsQ2 a={KC.one + 20} />
			<Checks4 ticks={{0: [-100], 1: [KC.so + 10], 2: [KC.one]}} />
			{void KC.now}{void TEALD}
		</Overlay>
	);
};

// ---------- 3d. The classic slip ----------
const KD = cues(sc('q2-mistake'), {slip: 'classic slip', gives: 'That gives', lost: 'if heat', more: 'need more', not: 'not less', bigger: 'bigger than'});
export const SceneQ2Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Backwards: heat to mass" at={-100} />
		<QStrip lines={Q2} under={U2({w: -100, p: -100, h: -100, M: -100})} />
		<Crossed x={160} y={420} text="15.675 × 0.450 = 7.05 kJ → 0.238 g" at={KD.slip} cross={KD.not} note="less heat reaches the water, so more fuel must burn" size={40} />
		<NumLine x={260} y={740} w={1300} max={1.3} at={KD.lost} marks={[{v: 0.238, t: '0.238 g (× 0.450)', color: '#c4432f', at: KD.lost}, {v: 0.528, t: '0.528 g (no heat lost)', at: KD.bigger}, {v: 1.17, t: '1.17 g (55% lost)', color: TEALD, at: KD.bigger + 10}]} arrow={{from: 0.528, t: 'heat lost → more fuel', at: KD.more}} />
		<AnsQ2 a={-100} />
		<Checks4 ticks={{0: [-100], 1: [-100], 2: [-100], 3: [KD.bigger]}} />
		{void KD.gives}{void ORANGE}
	</Overlay>
);
