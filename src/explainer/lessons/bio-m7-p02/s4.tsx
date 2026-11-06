// M7 P02 (Biology practical) scenes 13a to 15: two unseen exam items (CFU per mL from three creek plates at 10^-2;
// identify two problems in a flawed method and fix each), each whole on screen through "Pause here to answer." and
// its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined in the question strip as
// they are used and one crossed classic mistake (no givens card); the plan card with the handoff to disease in
// agriculture; the key notes with the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import type {PB} from './parts';
import {AMBER, AMBER_INK, CARD, CrossChip, Dish, EDGE, FEAT, GREEN, GREY_INK, INK, PLATES, Pl, PlateB, Sx, TERRA, VIOLET, WText, crossChipW, fitW, prog, ptOf, vis, wrapT} from './parts';

// ---------- item 1: CFU per mL ----------
type T1 = {s: number; p: number; a: number; d: number};
const Q1 = (t: T1) => [
	{text: 'A student diluted a sample of creek water to 10⁻².', at: t.s},
	{text: 'She spread 0.1 mL of this dilution onto each of three nutrient agar plates.', at: t.p},
	{text: 'After incubation at 28 °C for 48 hours, the plates had 41, 47 and 53 colonies.', at: t.a},
] as QBlock[];
const D1 = (t: T1) => [{text: 'Calculate the number of colony-forming units (CFU) per mL in the creek water. Show your working. (3 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck([...Q1({s: 0, p: 0, a: 0, d: 0}), ...D1({s: 0, p: 0, a: 0, d: 0})], [{phrase: '41, 47 and 53', at: 0}, {phrase: '10⁻².', at: 0}, {phrase: '0.1 mL', at: 0}, {phrase: 'CFU per mL in the creek water', at: 0}]);

// ---------- 13a. Attempt 1 ----------
const KA = cues(S('attempt-1'), {turn: 'Your turn', student: 'A student diluted', spread: 'she spread', after: 'After two days', calc: 'Calculate the number', pause: 'Pause here to answer'});
// The whole question arrives with its card. The givens sit beside it as apparatus: the dilution rack with the 10⁻²
// tube marked, and three sealed plates with their counts (data only, nothing answer-bearing).
const RQ = {cx: 1510, cy: 360, w: 430};
const GivensOne: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const t2 = ptOf(PLATES.rack, RQ.cx, RQ.cy, RQ.w, [FEAT.tubeX[1], FEAT.tubeLiquid + 60]);
	return (
		<g opacity={o}>
			<Pl p={PLATES.rack} cx={RQ.cx} cy={RQ.cy} w={RQ.w} />
			<rect x={t2[0] - 46} y={t2[1] - 23} width={92} height={46} rx={12} fill="#fff3d9" stroke={AMBER_INK} strokeWidth={3} />
			<Sx x={t2[0]} y={t2[1] + 11} text="10⁻²" size={30} color={AMBER_INK} weight={800} anchor="middle" at={-100} />
			{['41', '47', '53'].map((n, i) => (
				<g key={n}>
					<Dish p={PLATES.countable} cx={1345 + i * 170} cy={640} w={150} rot={i * 120} />
					<Sx x={1345 + i * 170} y={752} text={n} size={36} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
			))}
			<Sx x={1515} y={545} text="0.1 mL on each plate" size={28} color={GREY_INK} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
export const SceneAttemptOne: React.FC = () => {
	const c = KA.turn + 6;
	const t: T1 = {s: c, p: c, a: c, d: c};
	const h = hold('attempt-1');
	return (
		<>
			<Heading text="Exam question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(Q1(t), [])} x={140} y={250} w={1080} size={38} card={false} />
				<QText q={qCheck(D1(t), [])} x={140} y={560} w={1080} size={38} card={false} />
				<GivensOne at={c} />
				<AnsBox x={140} y={720} w={1080} h={290} at={c} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback 1 ----------
const KB = cues(S('feedback-1'), {mean: 'the mean', n47: 'forty seven', point: 'Point one times', thousandth: 'thousandth', n47k: 'forty seven thousand', slip: 'Four thousand seven hundred', classic: 'classic slip', forgets: 'forgets the point'});
const ALL1: T1 = {s: -100, p: -100, a: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: '41, 47 and 53', at: KB.mean + 10},
		{phrase: '10⁻².', at: KB.point},
		{phrase: '0.1 mL', at: KB.point + 10},
		{phrase: 'CFU per mL in the creek water', at: KB.n47k},
	];
	const line = (y: number, text: string, at: number, out: number, size = 44, color = INK) => {
		const dim = prog(f, out, 12);
		return <Sx x={160} y={y} text={text} size={size} color={dim > 0.5 ? GREY_INK : color} weight={700} at={at} />;
	};
	const chip = '4 700 CFU per mL';
	return (
		<>
			<Heading text="Divide by volume times dilution" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck([...Q1(ALL1), {...D1(ALL1)[0], para: true}], marks)} x={140} y={200} w={2240} size={36} card={false} s={0.74} />
				{line(450, '(41 + 47 + 53) ÷ 3 = 141 ÷ 3 = 47', KB.n47, KB.n47k)}
				{line(550, '0.1 × 10⁻² = 10⁻³ mL', KB.thousandth, KB.n47k)}
				<CardBox x={140} y={610} w={1340} h={130} at={KB.n47k - 4} stroke={AMBER} />
				<Sx x={170} y={694} text="47 ÷ 10⁻³ = 47 000 = 4.7 × 10⁴ CFU per mL" size={48} color={AMBER_INK} weight={800} at={KB.n47k} />
				<CrossChip x={160} y={800} text={chip} at={KB.slip} cross={KB.classic + 6} size={34} />
				<Sx x={160 + crossChipW(chip, 34) + 30} y={840} text="forgot the 0.1 mL plated" size={30} color={GREY_INK} weight={600} at={KB.forgets} />
				{void CARD}{void vis}
			</Overlay>
		</>
	);
};

// ---------- item 2: a flawed method ----------
type T2 = {s: number; i: number; d: number};
const Q2 = (t: T2) => [
	{text: 'A student spread 1 mL of undiluted creek water onto a single nutrient agar plate.', at: t.s},
	{text: "She incubated the plate at 37 °C for 48 hours, then opened it and recorded: 'Too many colonies to count. The creek water contains dangerous bacteria.'", at: t.i},
] as QBlock[];
const D2 = (t: T2) => [{text: 'Identify TWO problems with this investigation and propose an improvement that fixes each problem. (4 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck(Q2({s: 0, i: 0, d: 0}), [{phrase: '1 mL of undiluted creek water', at: 0}, {phrase: '37 °C', at: 0}, {phrase: 'then opened it', at: 0}, {phrase: 'The creek water contains dangerous', at: 0}]);

// ---------- 13c. Attempt 2 ----------
const KC = cues(S('attempt-2'), {student: 'A student spread', incub: 'incubated it', identify: 'Identify two problems', pause: 'Pause here to answer'});
// The whole question arrives with its card; beside it the givens as apparatus: the creek bottle, 1 mL undiluted onto
// one plate (the lawn: "too many to count", as the question says), and 37 °C for 48 h. Nothing answer-bearing.
const CREEK: PB = {...PLATES.bottles, box: [770, 575, 1232, 1407]};
const GivensTwo: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<PlateB p={CREEK} cx={1340} cy={310} w={fitW(CREEK, 150, 210)} id="p02-a2-creek" />
			<Sx x={1340} y={450} text="creek water" size={28} color={VIOLET} hand weight={700} anchor="middle" at={-100} />
			<path d="M1420,310 Q1490,280 1550,320" fill="none" stroke={GREY_INK} strokeWidth={4} strokeLinecap="round" />
			<path d="M1536,306 L1552,322 L1530,328" fill="none" stroke={GREY_INK} strokeWidth={4} strokeLinecap="round" />
			<Dish p={PLATES.lawn} cx={1660} cy={320} w={200} />
			<Sx x={1660} y={450} text="1 mL, undiluted" size={28} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
			<Sx x={1660} y={488} text="37 °C, 48 h" size={28} color={TERRA} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
export const SceneAttemptTwo: React.FC = () => {
	const c = KC.student + 6;
	const t: T2 = {s: c, i: c, d: c};
	const h = hold('attempt-2');
	return (
		<>
			<Heading text="Exam question 2" at={KC.student} size={50} />
			<Overlay>
				<HscTag at={KC.student} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(Q2(t), [])} x={140} y={250} w={1080} size={38} card={false} />
				<QText q={qCheck(D2(t), [])} x={140} y={580} w={1600} size={38} card={false} />
				<GivensTwo at={c} />
				<AnsBox x={140} y={720} w={1340} h={290} at={c} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback 2 ----------
const KD = cues(S('feedback-2'), {undiluted: 'undiluted the colonies', dilute: 'serially dilute', t37: 'thirty seven degrees favours', opening: 'opening it exposed', incubate: 'so incubate', claim: 'Her claim', over: 'overreaches', repeating: 'Repeating the undiluted', classic: 'classic mistake'});
const ALL2: T2 = {s: -100, i: -100, d: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: '1 mL of undiluted creek water', at: KD.undiluted + 4},
		{phrase: '37 °C', at: KD.t37},
		{phrase: 'then opened it', at: KD.opening},
		{phrase: 'The creek water contains dangerous', at: KD.over},
	];
	const rows = [
		{p: 'undiluted → colonies merged, uncountable', fix: 'serial dilution; count the plate with about 30 to 300 colonies', at: KD.undiluted, fixAt: KD.dilute},
		{p: '37 °C favours microbes adapted to humans; opening exposes her', fix: '25 to 30 °C; taped; never opened; count through the lid', at: KD.t37, fixAt: KD.incubate},
		{p: "claims 'dangerous bacteria' (colonies ≠ pathogens)", fix: "conclude 'many culturable microbes'", at: KD.over, fixAt: KD.over + 30},
	];
	const X1 = 120, W1 = 760, X2 = 900, W2 = 920, Y0 = 400, RH = 130;
	const chip = 'repeat the plate 3 times';
	return (
		<>
			<Heading text="Each fix must fix its problem" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={160} at={-100} />
				<QText q={qCheck(Q2(ALL2), marks)} x={140} y={200} w={2240} size={36} card={false} s={0.74} />
				<g opacity={prog(f, KD.undiluted - 6, 12)}>
					<Sx x={X1 + 20} y={Y0 - 16} text="problem" size={30} color={INK} weight={800} at={-100} />
					<Sx x={X2 + 20} y={Y0 - 16} text="improvement that fixes it" size={30} color={INK} weight={800} at={-100} />
				</g>
				{rows.map((r, i) => {
					const o = prog(f, r.at, 12);
					if (o <= 0.01) return null;
					const dim = i < 2 ? prog(f, KD.over, 12) : 0;
					const y = Y0 + i * (RH + 12);
					const ink = dim > 0.5 ? GREY_INK : INK;
					return (
						<g key={i} opacity={o * (1 - 0.35 * dim)}>
							<rect x={X1} y={y} width={W1} height={RH} rx={16} fill={dim > 0.5 ? CARD : '#fffaf0'} stroke={dim > 0.5 ? EDGE : AMBER} strokeWidth={dim > 0.5 ? 2.5 : 3.5} />
							<rect x={X2} y={y} width={W2} height={RH} rx={16} fill={dim > 0.5 ? CARD : '#fffaf0'} stroke={dim > 0.5 ? EDGE : AMBER} strokeWidth={dim > 0.5 ? 2.5 : 3.5} />
							<WText x={X1 + 22} y={y + 50} text={r.p} size={32} maxW={W1 - (i === 0 ? 140 : 44)} color={ink} hand weight={700} at={r.at} />
							<WText x={X2 + 22} y={y + 50} text={r.fix} size={32} maxW={W2 - (i === 0 ? 150 : 44)} color={dim > 0.5 ? GREY_INK : AMBER_INK} hand weight={700} at={r.fixAt} />
							{i === 0 ? <Dish p={PLATES.lawn} cx={X1 + W1 - 64} cy={y + RH / 2} w={100} dim={dim} /> : null}
							{i === 0 ? <Dish p={PLATES.countable} cx={X2 + W2 - 70} cy={y + RH / 2} w={100} o={prog(f, r.fixAt, 12)} dim={dim} /> : null}
						</g>
					);
				})}
				<CrossChip x={140} y={850} text={chip} at={KD.repeating} cross={KD.classic + 6} size={32} />
				<Sx x={140 + crossChipW(chip, 32) + 30} y={890} text="repeats don't make a lawn countable" size={30} color={GREY_INK} weight={600} at={KD.classic + 16} />
				{void KD.claim}{void Pl}{void fitW}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {sterile: 'sterile samples', three: 'three plates each', taped: 'taped plates', count: 'Count the plate', claim: 'claim culturable', next: 'Next'});
// Each plan row has its apparatus in the right panel, on the row's cue: the dilution rack, the three plates and both
// controls, the incubator, then the countable plate. The panel is there from the first frame.
const PX = 1310, PW = 540;
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{at: KE.sterile, t: '1 Sterile samples; serial dilutions (1 mL into 9 mL).'},
		{at: KE.three, t: '2 Three plates per dilution; negative and positive controls.'},
		{at: KE.taped, t: '3 Label the base, tape, invert, 25 to 30 °C, never opened.'},
		{at: KE.count, t: '4 Count the plate with about 30 to 300; CFU per mL = colonies ÷ (volume × dilution).'},
		{at: KE.claim, t: '5 Claim culturable microbes, not pathogens.'},
	];
	const at = lines.map(l => l.at);
	const st = (i: number) => vis(f, i === 0 ? -100 : at[i], i === 3 ? 1e9 : at[i + 1], 12);
	let y = 200;
	return (
		<>
			<Heading text="The plan, start to finish" at={4} size={56} />
			<Overlay>
				{lines.map((l, i) => {
					const o = prog(f, l.at, 14);
					const lit = vis(f, l.at, lines[i + 1]?.at ?? KE.next, 10);
					const n = wrapT(l.t, 36, 1100, true).length;
					const h = n * 46 + 44;
					const y0 = y;
					y += h + 16;
					if (o <= 0.01) return null;
					return (
						<g key={i} opacity={o * (lit > 0.5 ? 1 : 0.7)} transform={`translate(0,${(1 - o) * 16})`}>
							<rect x={110} y={y0} width={1160} height={h} rx={24} fill={lit > 0.5 ? '#fff3d9' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={3.5} />
							<WText x={140} y={y0 + 50} text={l.t} size={36} maxW={1100} color={INK} hand weight={700} lh={46} at={-100} />
						</g>
					);
				})}
				<rect x={PX} y={200} width={PW} height={600} rx={22} fill="#fffdf8" stroke={EDGE} strokeWidth={3} opacity={prog(f, 0, 12)} />
				<g opacity={st(0)}>
					<Pl p={PLATES.rack} cx={PX + PW / 2} cy={470} w={480} />
					<Sx x={PX + PW / 2} y={740} text="10⁻¹, 10⁻², 10⁻³, 10⁻⁴" size={34} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(1)}>
					{[0, 1, 2].map(i => <Dish key={i} p={PLATES.countable} cx={PX + 105 + i * 165} cy={350} w={150} rot={i * 120} />)}
					<Sx x={PX + PW / 2} y={470} text="three plates per dilution" size={30} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
					<Dish p={PLATES.clear} cx={PX + 150} cy={600} w={150} />
					<Dish p={PLATES.posCtl} cx={PX + 390} cy={600} w={150} />
					<Sx x={PX + 150} y={720} text="− sterile water" size={28} color={GREEN} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + 390} y={720} text="+ known culture" size={28} color={GREEN} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(2)}>
					<Pl p={PLATES.incubator} cx={PX + PW / 2} cy={470} w={420} />
					<Sx x={PX + PW / 2} y={740} text="25 to 30 °C, 48 h" size={34} color={TERRA} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(3)}>
					<Dish p={PLATES.countable} cx={PX + PW / 2} cy={440} w={300} />
					<Sx x={PX + PW / 2} y={650} text="about 30 to 300 colonies" size={32} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + PW / 2} y={720} text="culturable, not pathogens" size={32} color={GREEN} hand weight={700} anchor="middle" at={KE.claim + 6} />
				</g>
				<NextChip x={820} y={860} w={1000} text="Next: disease in agriculture" at={KE.next}>
					<Pl p={PLATES.leaf} cx={886} cy={902} w={fitW(PLATES.leaf, 90, 60)} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Authorities test water for E. coli; a school test counts all culturable microbes.',
	'Independent: water source. Dependent: CFU per mL. Three plates per dilution.',
	'Controls: sterile water (no growth); known harmless culture (growth).',
	'Serial dilution: 1 mL into 9 mL sterile water = 10⁻¹, then repeat.',
	'Count the plate with about 30 to 300 colonies.',
	'CFU per mL = colonies ÷ (volume plated × dilution).',
	'Colonies are culturable microbes, not proven pathogens; no colonies ≠ safe.',
	'Plates taped, inverted, 25 to 30 °C, never opened; autoclaved before disposal.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Label the base, tape don't seal, upside down, 25 to 30 °C." tag="lids get swapped; air gets in; drips stay off the agar; not body temperature" size={34} aidTop={720} />
);
void WText;
