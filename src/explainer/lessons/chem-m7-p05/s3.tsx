// M7 P05 scenes 13 to 18: attempt 1 (butyl ethanoate yield, two reasons), brief feedback (mole bridge on the shrunk card;
// small ladder; "divide the masses" crossed), attempt 2 (a 104% yield), brief feedback (wet-mass flag; FixRail; "it went
// to completion" crossed), the decision rule and handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, P, PauseHold, Sx, TaskLine, WLine} from '../chem-m6-p02/parts';
import {AnswerChip, Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {FixRail} from '../skills-s07/pieces';
import {DRY, FUNNEL, REFLUX, hold, sc} from './common';
import {BalR, INK, Ladder, NAVY, TERRA, WetFlag} from './parts';

const SY = 70;

// ---------- 13. Attempt 1 ----------
const Q1 = [
	'A student heated 3.70 g of butan-1-ol with excess ethanoic acid and a few',
	'drops of concentrated sulfuric acid under reflux. After washing and drying the',
	'product, she collected 3.19 g of butyl ethanoate.',
	'Molar masses: butan-1-ol 74.12 g mol⁻¹; butyl ethanoate 116.16 g mol⁻¹.',
	'(a) Calculate the percentage yield of butyl ethanoate.',
	'(b) Explain TWO reasons why the yield is less than 100%.   (4 marks)',
];
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', a: 'A student', calc: 'Calculate', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K13.turn} />
		<QCardX lines={Q1} at={K13.a} y={190} size={32} w={1320} />
		<Plate p={REFLUX} cx={1660} top={240} h={500} at={K13.a + 20} />
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
		{void K13.calc}
	</Overlay>
);

// ---------- 14. Feedback 1 ----------
const K14 = cues(sc('feedback-1'), {three: 'Three point', over: 'over', zero: 'zero point', ester: 'ester:', five: 'five point', three2: ['Three point', 2], fifty: 'fifty five', lower: "It's lower", eq: 'equilibrium,', lost: 'lost', trap: 'The trap', directly: 'directly.'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const x = 160, s = 34;
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={24} under={[{line: 0, phrase: '3.70 g of butan-1-ol', at: K14.three}, {line: 3, phrase: 'butan-1-ol 74.12 g mol⁻¹', at: K14.over}, {line: 0, phrase: 'excess ethanoic acid', at: K14.ester - 20}, {line: 3, phrase: 'butyl ethanoate 116.16 g mol⁻¹', at: K14.five}, {line: 2, phrase: '3.19 g of butyl ethanoate', at: K14.three2}, {line: 5, phrase: 'less than 100%', at: K14.eq}]} />
			<WLine x={x} y={440} size={s} dim={K14.ester - 20} dimTo={0.45} items={P('n(butan-1-ol) = 3.70 ÷ 74.12', K14.over, '= 0.0499 mol', K14.zero)} />
			<WLine x={x} y={510} size={s} dim={K14.three2} dimTo={0.45} items={P('1 : 1 → 0.0499 mol ester;', K14.ester - 10, '× 116.16 = 5.80 g', K14.five)} />
			<Tag x={1100} y={478} text="alcohol is limiting" at={K14.ester - 20} out={K14.three2} size={24} color={NAVY} fill="#e7edf8" />
			<WLine x={x} y={580} size={s} items={P('% yield = 3.19 ÷ 5.80 × 100', K14.three2 + 30, '= 55.0%', K14.fifty)} />
			<AnswerChip x={x} y={610} text="percentage yield = 55.0%" at={K14.fifty + 20} size={34} o={dimAt(f, K14.trap, 0.6)} />
			<g opacity={vis(f, K14.eq - 10)}>
				<Ladder L={{x: 1300, y: 430, w: 70, h: 300}} at={K14.eq - 10} fill={[{at: -1000, v: 0.55}]} band={K14.eq} loss={K14.lost} size={20} color={NAVY} />
				<Tag x={1480} y={470} text="equilibrium" at={K14.eq} size={26} color={NAVY} fill="#e7edf8" />
				<Tag x={1480} y={540} text="losses" at={K14.lost} size={26} color={TERRA} fill="#f6e2d3" />
			</g>
			<Crossed x={x} y={790} text="3.19 ÷ 3.70 × 100 = 86%" at={K14.trap} cross={K14.directly} note="masses of different substances: use moles" size={34} />
			{void K14.lower}
		</Overlay>
	);
};

// ---------- 15. Attempt 2 ----------
const Q2 = [
	'A student prepared propyl ethanoate from propan-1-ol and excess ethanoic acid.',
	'She ran off the water layer from the separating funnel and weighed the ester',
	'layer straight away, without washing or drying it. She calculated a percentage',
	'yield of 104%.',
	'Explain why her result is inaccurate, and describe TWO changes to her method',
	'that would give a more accurate yield.   (3 marks)',
];
const K15 = cues(sc('attempt-2'), {last: 'Last one', a: 'A student', explain: 'Explain why', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K15.last} />
		<QCardX lines={Q2} at={K15.a} y={190} size={32} w={1340} />
		<Plate p={FUNNEL.clear} cx={1680} top={250} h={480} at={K15.a + 20} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
		{void K15.explain}
	</Overlay>
);

// ---------- 16. Feedback 2 ----------
const K16 = cues(sc('feedback-2'), {over: 'Over a', water: 'water,', so: 'so the yield', should: 'She should', dry: 'dry it', weighing: 'weighing.', trap: 'The trap', completion: 'completion.', even: 'Even then'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={24} under={[{line: 2, phrase: 'without washing or drying it', at: K16.water}, {line: 3, phrase: 'yield of 104%', at: K16.water + 10}, {line: 4, phrase: 'describe TWO changes', at: K16.should}]} />
			<g opacity={dimAt(f, K16.trap, 0.5)}>
				<BalR cx={330} top={420} h={230} at={K16.over} text={() => 'too high'} sample="too high" />
				<WetFlag x={490} y={700} at={K16.water} parts={['ester', 'water', 'acid', 'alcohol']} size={20} />
				<Tag x={130} y={720} text="ester + water + acid + alcohol → mass too high" at={K16.so} size={22} color={TERRA} fill="#f6e2d3" />
			</g>
			<FixRail box={{x: 820, y: 400, w: 1000}} rowH={110} s={0.85} size={32} rows={[K16.water, K16.water + 20, K16.should]} lit={[{row: 2, from: K16.should, to: K16.trap}]} ex={[{text: 'accuracy', at: K16.water + 10}, {text: 'weighed wet and unwashed', at: K16.water + 30}, {text: 'two changes, below', at: K16.should + 10}]} />
			<Sx x={840} y={790} text="1  wash with NaHCO₃(aq), then water" size={30} color={INK} weight={700} at={K16.should + 10} />
			<Sx x={840} y={840} text="2  dry with anhydrous MgSO₄ (distil if possible)" size={30} color={INK} weight={700} at={K16.dry} />
			<Plate p={DRY} cx={1780} top={760} h={130} at={K16.dry} />
			<Crossed x={130} y={890} text="104%: it went to completion" at={K16.trap} cross={K16.completion} note="100% is the most possible" size={32} />
			{void K16.weighing}{void K16.even}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {reflux: 'reflux', wash: 'wash and', calc: 'calculate', eq: 'Equilibrium caps', compare: 'To compare', next: 'Next:'});
export const SceneRule: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: '1  Reflux (mantle, open top) → approach equilibrium', at: K17.reflux},
		{t: '2  Wash, dry, weigh → get the ester out', at: K17.wash},
		{t: '3  Yield: moles of limiting reactant → max mass → %', at: K17.calc},
		{t: '4  Ceiling: equilibrium.  Gap: losses.', at: K17.eq},
		{t: '5  Fair comparison: matched work-up, dry and pure product', at: K17.compare},
	];
	return (
		<Overlay>
			<TaskLine text="The plan" at={0} size={54} y={130} />
			{lines.map((l, i) => <g key={i} opacity={lines[i + 1] ? dimAt(f, lines[i + 1].at, 0.6) : 1}><Sx x={140} y={260 + i * 92} text={l.t} size={38} color={INK} weight={700} at={l.at} /></g>)}
			<g opacity={vis(f, K17.next)}>
				<rect x={900} y={790} width={920} height={130} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={940} y={840} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={940} y={890} text="how do amines and amides differ?" size={36} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Aim: does excess ethanoic acid raise the yield of pentyl ethanoate? CH₃COOH + C₅H₁₁OH ⇌ CH₃COOC₅H₁₁ + H₂O (conc. H₂SO₄ catalyst; reflux on an electric mantle, open top, anti-bumping granules). Pentan-1-ol sets the maximum (limiting at 2 : 1; at 1 : 1 both set the same maximum).',
	'Variables: independent, acid : alcohol ratio (1 : 1 or 2 : 1); dependent, % yield; controlled, alcohol mass, catalyst, reflux time, matched work-up.',
	'Work-up: separating funnel with water (ester on top here); wash with NaHCO₃ (or Na₂CO₃) solution, venting often; dry with anhydrous MgSO₄; weigh (distil near 149 °C if required).',
	'% yield = mass collected ÷ maximum mass × 100, with the maximum from moles of the limiting reactant (4.41 g → 0.0500 mol → 6.51 g; 3.90 g collected → 60%).',
	"Equilibrium stops the reaction short of 100%; work-up losses lower the isolated yield further. A dry, pure product weighed correctly gives a correct isolated yield; repeats show variation but can't recover lost ester. Over 100% means a wet or impure product (mass too high).",
	'Safety: teacher adds conc. H₂SO₄ (severe burns); glacial ethanoic acid corrosive and flammable; flammable organics, no flames; vent the funnel away from people; waft, never sniff; organic waste container, never the sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={870} aids={['Equilibrium sets the ceiling; the work-up decides how close you get.', 'Yield from moles of the limiting reactant.']} tag="preparing an ester and calculating its yield" />
);
