// M7 G02 scenes 4a to 6: question 3 (is trial 3 anomalous?): the attempt; the same steps for trial 3 (the table cell
// fills; the trial strip); find the cause before you drop it (the columns compared; fuel lost without burning, n too
// big); the mean of the trials that fit; "mean of all four" crossed; the decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag, qLineY} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {ChainRow} from '../chem-m6-p02/parts';
import {Wisps} from '../chem-m7-p01/parts';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {Balance} from '../chem-m7-p03/s1';
import {Heading, hold, sc} from './common';
import {BLUE, Checks4, INK, INK_SOFT, ORANGE, QTable, TEALD, TrialStrip, WL} from './board';
import type {Cell} from './board';

export const Q3 = ['A student burned propan-1-ol (C₃H₇OH, M = 60.09 g mol⁻¹) in a spirit burner beneath a', 'copper can with a draught shield and lid. In each trial she heated 250.0 g of fresh water.', 'The specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹.', '(a) Calculate the molar enthalpy of combustion of propan-1-ol for trial 3.', '(b) Explain whether trial 3 should be included when calculating the mean, and calculate', 'the mean molar enthalpy of combustion.'];
const AM = '#c98a1b';
const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});
const STRIP_GAP = 175;
/** The walkthrough strip with the table inside it (size 26 text, table at 22). */
const Strip3: React.FC<{under?: {line: number; phrase: string; at: number; color?: string}[]; tu?: Cell[]; ring?: Cell; fill?: number}> = ({under = [], tu = [], ring, fill}) => (
	<QStrip lines={Q3} gaps={[0, 0, STRIP_GAP]} under={under}>
		<QTable x={180} y={qLineY(70, 26, [0, 0, STRIP_GAP], 2) + 40} size={22} rowH={30} scale={0.85} under={tu} ring={ring} fill={fill === undefined ? undefined : {r: 2, c: 3, text: '−705', at: fill}} />
	</QStrip>
);
const AnsQ3: React.FC<{a?: number; b1?: number; b2?: number}> = ({a = 1e6, b1 = 1e6, b2 = 1e6}) => (
	<>
		<AnsBox x={140} y={910} w={560} label="(a)" at={-100} parts={[{t: '−705 kJ mol⁻¹', at: a, lit: true}]} />
		<AnsBox x={730} y={910} w={1050} label="(b)" at={-100} size={24} parts={[{t: 'exclude trial 3 (cause found)', at: b1, lit: true}, {t: ';  mean of 1, 2, 4: ', at: b2}, {t: '−974 kJ mol⁻¹', at: b2 + 6, lit: true}]} />
	</>
);

// ---------- 4a. Attempt ----------
const KA = cues(sc('q3-question'), {q: 'Question three', a: 'A student', calc: 'Calculate the', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	const gap = 220;
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q3} at={KA.a} y={160} size={30} gaps={[0, 0, gap]} />
				<g opacity={vis(f, KA.a + 20)}><QTable x={190} y={qLineY(160, 30, [0, 0, gap], 2) + 50} size={28} rowH={38} /></g>
				<AnsBox x={140} y={780} w={560} label="(a)" at={KA.calc + 20} />
				<AnsBox x={730} y={780} w={760} label="(b)" at={KA.calc + 26} />
				<PauseHold h={h} at={KA.pause} x={140} y={930} cx={1700} cy={860} />
				<Checks4 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Same steps for trial 3 ----------
const KB = cues(sc('q3-trial3'), {trial: 'Trial three', q: 'q is', e18: 'eighteen point two', ninet: 'nineteen thousand', n: 'n is', sixty: 'sixty point', zero: 'zero point zero two', minus: 'minus seven', close: 'close to'});
export const SceneQ3Trial: React.FC = () => (
	<Overlay>
		<Badge text="Table: is it anomalous?" at={6} />
		<Sx x={1780} y={86} text="anomalous result: doesn't fit the pattern of the others" size={20} color={INK_SOFT} anchor="end" weight={600} at={10} />
		<Strip3 under={[u(1, '250.0 g of fresh water', KB.q), u(2, '4.18 J g⁻¹ °C⁻¹', KB.q + 8), u(0, 'M = 60.09 g mol⁻¹', KB.sixty)]} tu={[{r: 2, c: 1, at: KB.e18}, {r: 2, c: 2, at: KB.n}]} fill={KB.minus + 30} />
		<WL x={160} y={610} t="q = 250.0 × 4.18 × 18.2 = 19 019 J = 19.019 kJ" at={KB.ninet - 20} color={ORANGE} />
		<WL x={160} y={675} t="n = 1.62 ÷ 60.09 = 0.026960 mol" at={KB.zero - 10} color={BLUE} />
		<WL x={160} y={740} t="ΔHc = −19.019 ÷ 0.026960 = −705.46 → −705 kJ mol⁻¹" at={KB.minus} color={TEALD} />
		<TrialStrip x={1300} y={600} at={KB.close} />
		<AnsQ3 a={KB.minus + 30} />
		<Checks4 ticks={{0: [KB.ninet], 1: [KB.zero + 10]}} />
		{void KB.trial}
	</Overlay>
);

// ---------- 4c. Find the cause ----------
const KC = cues(sc('q3-judge'), {belong: 'does it belong', look: 'Look for', temp: 'temperature rise', half: 'half a gram', extra: 'Extra mass', likely: 'Most likely', uncap: 'uncapped', n: 'makes n', anomaly: 'an anomaly', leave: 'leave it'});
export const SceneQ3Judge: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Badge text="Table: is it anomalous?" at={-100} />
			<Strip3 under={[u(1, '250.0 g of fresh water', -100), u(0, 'M = 60.09 g mol⁻¹', -100)]} tu={[0, 1, 2, 3].map(r => ({r, c: 1, at: KC.temp + r * 4})).concat([0, 1, 3].map(r => ({r, c: 2, at: KC.half + r * 4})))} ring={{r: 2, c: 2, at: KC.half + 20}} fill={-100} />
			<Tag x={160} y={570} text="rises match" at={KC.temp + 20} size={26} o={dimAt(f, KC.half, 0.5)} />
			<Tag x={400} y={570} text="about 0.45 g more fuel for the same heat" at={KC.half + 20} size={26} color={AM} fill="#fbeec4" o={dimAt(f, KC.n, 0.5)} />
			<g opacity={vis(f, KC.uncap, KC.anomaly + 30)}>
				<Balance cx={1580} top={620} h={180} at={KC.uncap} text={() => 'mass lost'} />
				<Wisps x={1580} y={660} at={KC.uncap} n={3} dots={false} />
				<Tag x={1580} y={830} text="mass lost, no heat" at={KC.uncap} size={22} anchor="middle" />
			</g>
			<ChainRow x={160} y={640} ws={[400, 120, 320]} h={100} gap={46} at={KC.n} size={26} cells={[{lines: ['fuel lost', 'without burning'], at: KC.n}, {lines: ['n'], at: KC.n + 12, dir: 'up', color: BLUE}, {lines: ['ΔH less', 'negative'], at: KC.n + 24}]} />
			<Tag x={160} y={770} text="other possible causes: a draught or a sooty flame in that trial" at={KC.n + 40} size={22} />
			<Tag x={160} y={830} text="anomaly with a likely cause: exclude it; repeat that trial if you can" at={KC.anomaly} size={26} color={TEALD} fill="#dff2ef" />
			<AnsQ3 a={-100} b1={KC.leave} />
			<Checks4 ticks={{0: [-100], 1: [-100], 3: [KC.anomaly]}} />
			{void KC.belong}{void KC.look}{void KC.extra}{void KC.likely}
		</Overlay>
	);
};

// ---------- 4d. The mean of the trials that fit ----------
const KD = cues(sc('q3-mean'), {avg: 'Average the', m974: 'Minus nine', mean: 'give a mean', fe: 'forty eight', only: 'Only drop'});
export const SceneQ3Mean: React.FC = () => (
	<Overlay>
		<Badge text="Table: is it anomalous?" at={-100} />
		<Strip3 tu={[0, 1, 3].map(r => ({r, c: 3, at: KD.m974 + r * 6}))} fill={-100} />
		<WL x={160} y={620} t="mean = (−974 + −977 + −971) ÷ 3 = −974 kJ mol⁻¹" at={KD.mean} color={TEALD} size={36} />
		<Tag x={160} y={650} text="unrounded trials give −974.4: the same" at={KD.mean + 30} out={KD.fe} size={22} />
		<Tag x={160} y={710} text="974 ÷ 2021 = 48%: about half, as expected" at={KD.fe} size={26} color={INK} fill="#fffdf8" />
		<TaskLine text="Only drop a result when you can explain it." at={KD.only} size={50} x={160} y={850} color={TEAL} />
		<AnsQ3 a={-100} b1={-100} b2={KD.mean + 20} />
		<Checks4 ticks={{0: [-100], 1: [-100], 3: [-100]}} />
		{void KD.avg}
	</Overlay>
);

// ---------- 4e. The classic mistake ----------
const KE = cues(sc('q3-mistake'), {mistake: 'classic mistake', drags: 'drags', no: 'no good'});
export const SceneQ3Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Table: is it anomalous?" at={-100} />
		<Strip3 fill={-100} />
		<Crossed x={160} y={600} text="mean of all four = −907 kJ mol⁻¹" at={KE.mistake} cross={KE.no} note="one faulty trial drags the mean away from every good trial" size={40} />
		<TrialStrip x={1300} y={600} at={-100} tick={{v: 907, at: KE.drags}} />
		<AnsQ3 a={-100} b1={-100} b2={-100} />
		<Checks4 ticks={{0: [-100], 1: [-100], 3: [-100]}} />
	</Overlay>
);

// ---------- 5. Decision board ----------
const KF = cues(sc('decision-board'), {so: 'So for any', q: 'go into', n: 'gives n', dh: 'minus q over', part: 'If only', div: 'divide by', cause: 'find its', next: 'Next,'});
const ROWS = [
	{c: 'Water in q', d: 'q = m(water) × 4.18 × ΔT, in J then kJ', b: 'Q1, Q2, Q3'},
	{c: 'Fuel in n', d: 'n = (initial − final mass) ÷ M', b: 'Q1, Q3'},
	{c: 'kJ, per mole, sign', d: 'ΔHc = −q ÷ n; ÷ grams gives kJ per gram', b: 'Q1'},
	{c: 'Part of the heat', d: 'heat released = q(water) ÷ fraction; heat lost → more fuel', b: 'Q2'},
	{c: 'Odd trial', d: 'find the cause (q or n?); exclude only if explained; mean the rest', b: 'Q3'},
];
export const SceneBoard: React.FC = () => {
	const f = useCurrentFrame();
	const at = [KF.q, KF.n, KF.dh, KF.div, KF.cause];
	return (
		<Overlay>
			<TaskLine text="Any combustion calculation" at={KF.so} size={54} y={130} />
			<Sx x={140} y={220} text="Check" size={34} color={INK_SOFT} hand weight={700} at={KF.so} />
			<Sx x={560} y={220} text="What you do" size={34} color={INK_SOFT} hand weight={700} at={KF.so} />
			{ROWS.map((r, i) => {
				const nx = at[i + 1];
				const o = vis(f, at[i]) * (nx === undefined ? 1 : dimAt(f, nx, 0.5));
				if (o <= 0.01) return null;
				const y = 300 + i * 110;
				return (
					<g key={i} opacity={o}>
						<rect x={120} y={y - 50} width={1680} height={90} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
						<Sx x={140} y={y + 8} text={r.c} size={32} color={TEALD} weight={800} at={-1000} />
						<Sx x={560} y={y + 8} text={r.d} size={28} color={INK} weight={600} at={-1000} />
						<Sx x={1780} y={y + 8} text={r.b} size={22} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
					</g>
				);
			})}
			<Sx x={140} y={870} text="Answers to the data's significant figures." size={26} color={INK_SOFT} weight={600} at={KF.cause + 30} />
			<Tag x={1800} y={900} text="Next: where can an alcohol reaction lead?" at={KF.next} size={32} color={TEALD} fill="#dff2ef" anchor="end" />
			{void KF.part}{void ORANGE}{void BLUE}
		</Overlay>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	'q = m(water) × c × ΔT (in J, then ÷ 1000 for kJ). n = (initial − final burner mass) ÷ M. ΔHc = −q ÷ n, in kJ mol⁻¹. Dividing by grams gives kJ per gram, a different quantity.',
	'Percentage of heat reaching the water = q(water) ÷ (n × |ΔHc data value|) × 100%. Example: methanol, 12.540 ÷ 24.925 × 100% = 50.3%.',
	'Backwards: heat released = q(water) ÷ fraction reaching the water; n = heat released ÷ |ΔHc|; mass = n × M. Heat lost means more fuel.',
	'Anomalous trial: find its cause first (does it affect q or n?). Exclude it only when it is explained; take the mean of the rest; repeat that trial if possible.',
	'Example (propan-1-ol): trial 3 lost 0.45 g extra for the same rise, so that fuel gave the water no heat (most likely lost without burning, for example evaporation from an uncapped burner, or a spill), so n too big and ΔH less negative (−705); mean of the others −974 kJ mol⁻¹.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={840} aids={['Water in q, fuel in n.', 'Only drop a result when you can explain it.']} tag="combustion enthalpy calculations" />
);
