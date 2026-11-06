// M6 B19 scenes 10a to 12: two unseen exam items (assess a laundry enzyme company's energy claim; evaluate the
// yeast-made hepatitis B vaccine against the plasma vaccine), each kept whole on screen through "Pause here to
// answer." and its 10 s countdown; brief feedback with the givens underlined as they are used and one crossed classic
// mistake (no givens card). Then the decision rule with the handoff to g02, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, Dot, EDGE, EnzymeG, GREY_INK, GTag, GreyCross, INK, INK_SOFT, PLATES, Pl, Sx, TestIcon, prog, smooth, vis} from './parts';
import {Thermo} from './parts2';
import type {DotK, TestK} from './parts';

const PauseHold: React.FC<{id: string; at: number}> = ({id, at}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={860} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	return (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text="answer" size={26} color={INK_SOFT} weight={700} at={at} />
		{[1, 2, 3, 4, 5].map(i => (y + 40 + i * 52 < y + h - 10 ? <line key={i} x1={x + 20} x2={x + w - 20} y1={y + 40 + i * 52} y2={y + 40 + i * 52} stroke="#e4dccb" strokeWidth={2} opacity={prog(f, at, 14)} /> : null))}
	</>
	);
};
/** A feedback row: optional test icon, a bold label, the hand answer and an optional strength dot. */
const FbRow: React.FC<{y: number; icon?: TestK; label: string; text: string; at: number; lit: number; dot?: DotK; grey?: boolean; w?: number}> = ({y, icon, label, text, at, lit, dot, grey = false, w = 1520}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5 && !grey;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={w} height={80} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			{icon !== undefined ? <TestIcon k={icon} x={172} y={y + 40} s={0.8} color={on ? AMBER_INK : INK_SOFT} /> : null}
			<Sx x={icon !== undefined ? 220 : 150} y={y + 51} text={label} size={28} color={on ? INK : GREY_INK} weight={800} />
			<Sx x={500} y={y + 53} text={text} size={34} color={on ? INK : GREY_INK} hand />
			{dot ? <Dot x={120 + w - 50} y={y + 40} k={dot} r={16} grey={on ? 0 : 1} /> : null}
		</g>
	);
};
/** The verdict chip (amber outline). */
const Verdict: React.FC<{x: number; y: number; text: string; at: number; w?: number}> = ({x, y, text, at, w = 1520}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={78} rx={39} fill="#fff3d9" stroke={AMBER} strokeWidth={3.5} />
			<Sx x={x + 30} y={y + 51} text="verdict:" size={28} color={AMBER_INK} weight={800} />
			<Sx x={x + 170} y={y + 53} text={text} size={36} color={INK} hand />
		</g>
	);
};

// ---------- item 1: laundry enzymes ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'A company produces laundry enzymes using genetically modified microorganisms.', at: t.a},
	{text: 'The enzymes remove common stains in water at 20 °C.', at: t.b},
	{text: 'Older detergents needed water at 40 to 60 °C to remove the same stains.', at: t.c},
	{text: 'Most of the energy used by a washing machine is used to heat the water.', at: t.d},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'The company claims that its enzymes reduce household energy use. Assess this claim. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['40 to 60 °C', '20 °C', 'used to heat the water'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First.', company: 'A company makes', remove: 'The enzymes remove', older: 'older detergents', most: 'Most of the energy', claims: 'The company claims', assess: 'Assess this claim', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	// Quality fix (6 Nov): the first stem sentence lands with the card on "First." (the card sat nearly empty until the
	// company sentence), and the givens are drawn beside the stem as read: the washing machine and the microbe enzyme,
	// two thermometers (20 °C against 40 to 60 °C) and an energy bar where heating the water takes most of it. No
	// verdict is drawn; that is the answer.
	const f = useCurrentFrame();
	const t: T1 = {a: KA.first, b: KA.remove, c: KA.older, d: KA.most, q: KA.claims};
	const heat = smooth(prog(f, KA.most + 20, 30));
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={260} w={1100} size={34} card={false} />
				<Pl p={PLATES.washer} cx={1420} cy={330} w={190} o={prog(f, KA.first + 8, 14)} />
				<EnzymeG x={1680} y={320} s={1.3} o={prog(f, KA.company + 20, 12)} />
				<Sx x={1680} y={420} text="enzymes from GM microbes" size={28} color={INK} hand weight={700} anchor="middle" at={KA.company + 26} />
				<Thermo x={1420} y={600} h={120} level={0.25} color="#4f86b8" label="enzyme: 20 °C" size={30} o={prog(f, KA.remove + 10, 12)} />
				<Thermo x={1680} y={600} h={120} level={0.7 * smooth(prog(f, KA.older, 20))} color="#c0643f" label="older: 40 to 60 °C" size={30} o={prog(f, KA.older, 12)} />
				<g opacity={prog(f, KA.most, 12)}>
					<rect x={1300} y={706} width={490} height={34} rx={17} fill="#f3f2ee" stroke={EDGE} strokeWidth={2} />
					<rect x={1300} y={706} width={490 * 0.8 * heat} height={34} rx={17} fill="#e9a640" />
					<Sx x={1545} y={782} text="machine energy: most heats the water" size={28} color={INK} hand weight={700} anchor="middle" />
				</g>
				<QText q={qCheck(DEM1(t), [])} x={140} y={600} w={1100} size={34} card={false} />
				<AnsBox x={140} y={690} w={1100} h={315} at={KA.assess + 20} />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {partly: 'holds only partly', hot: 'Compared with a hot', saves: 'saves most', heating: 'heating the water', but: 'But the enzyme', saving: 'The saving happens', onlyIf: 'only if people', measured: 'measured energy use', saying: 'Saying the enzyme', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	// Quality fix (6 Nov): the rows are narrower and the right side shows the reason: energy per wash as two bars (a hot
	// wash against a 20 °C wash), the cold bar ringed "only if people choose it", and a real-homes meter on "measured".
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS1[0], at: KB.hot}, {phrase: MARKS1[1], at: KB.hot + 10}, {phrase: MARKS1[2], at: KB.heating}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const hotH = 300 * smooth(prog(f, KB.hot + 10, 24)), coldH = 80 * smooth(prog(f, KB.saves, 24));
	const ring = prog(f, KB.onlyIf, 14);
	return (
		<>
			<Heading text="Only if people wash cold" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={214} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={370} icon={0} label="better than what?" text="a hot wash: most energy saved" at={KB.hot} lit={lit(KB.hot, KB.onlyIf)} dot="full" w={1100} />
				<FbRow y={470} icon={1} label="shown how?" text="only if people wash cold" at={KB.onlyIf} lit={lit(KB.onlyIf, KB.measured)} dot="half" w={1100} />
				<FbRow y={570} icon={1} label="evidence:" text="energy use in real homes" at={KB.measured} lit={lit(KB.measured, KB.saying)} w={1100} />
				<Verdict x={120} y={680} text="partly supported, if people wash cold" at={KB.partly} w={1100} />
				<MistakeChip x={140} y={830} text="the enzyme saves energy by itself" at={KB.saying} cross={KB.mistake} size={30} />
				{/* the reason, drawn */}
				<g opacity={prog(f, KB.hot, 12)}>
					<rect x={1270} y={350} width={540} height={560} rx={24} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} />
					<Sx x={1540} y={410} text="energy per wash" size={34} color={INK} hand weight={700} anchor="middle" />
					<line x1={1310} x2={1770} y1={760} y2={760} stroke={INK_SOFT} strokeWidth={3} />
					<rect x={1340} y={760 - hotH} width={150} height={hotH} rx={10} fill="#c0643f" />
					<rect x={1600} y={760 - coldH} width={150} height={coldH} rx={10} fill="#4f86b8" />
					<Sx x={1415} y={805} text="hot wash" size={32} color={INK} hand weight={700} anchor="middle" />
					<Sx x={1675} y={805} text="20 °C wash" size={32} color={INK} hand weight={700} anchor="middle" opacity={prog(f, KB.saves, 12)} />
					<Sx x={1415} y={440 + (300 - hotH)} text="mostly heating" size={28} color={GREY_INK} hand weight={700} anchor="middle" opacity={prog(f, KB.heating, 12)} />
				</g>
				{ring > 0.01 ? <ellipse cx={1675} cy={690} rx={110} ry={110} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
				<Sx x={1675} y={870} text="only if people choose it" size={30} color={AMBER_INK} hand weight={700} anchor="middle" at={KB.onlyIf + 8} />
				{void KB.but}{void KB.saving}
			</Overlay>
		</>
	);
};

// ---------- item 2: two hepatitis B vaccines ----------
type T2 = {a: number; b: number; c: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Vaccine A (from 1981): hepatitis B surface protein purified from the blood plasma of people chronically infected with hepatitis B virus.', at: t.a},
	{text: 'Vaccine B (from 1986): the same surface protein made by yeast cells carrying the gene for it, grown in fermenters.', at: t.b, para: true},
	{text: 'Both vaccines gave strong protection against hepatitis B.', at: t.c, para: true},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Evaluate the benefit of Vaccine B compared with Vaccine A. (5 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS2 = ['Both vaccines gave strong protection', 'blood plasma of people chronically infected'];
qCheck(STEM2({a: 0, b: 0, c: 0, q: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second.', first: 'The first hepatitis', from86: 'From 1986,', both: 'Both vaccines protected', evaluate: 'Evaluate the benefit', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.first, b: KC.from86, c: KC.both, q: KC.evaluate};
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.vaccine} cx={1640} cy={300} w={250} o={prog(f, KC.first, 14)} />
				<Pl p={PLATES.yeast} cx={1640} cy={470} w={210} o={prog(f, KC.from86, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={260} w={1300} size={34} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={590} w={1300} size={34} card={false} />
				<AnsBox x={140} y={660} w={1340} h={340} at={KC.evaluate + 30} />
				<PauseHold id="attempt-two" at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {prot: "Protection wasn't", both: 'both protected well', gain: 'The gain was', longer: 'no longer depended', consist: 'made consistently', eased: 'eased fears', baby: 'every baby', so: 'So the benefit', saying: 'Saying it protects', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, q: -100};
export const SceneFeedbackTwo: React.FC = () => {
	// Quality fix (6 Nov): the rows are narrower and the right side draws the argument: two vaccine vials with an equals
	// sign (same protection, so not the gain), the plasma source crossed out, then yeast into the fermenter (made
	// consistently at scale).
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS2[0], at: KD.both}, {phrase: MARKS2[1], at: KD.longer + 10}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="The gain was supply and safety" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={180} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={210} w={2600} size={34} card={false} s={0.6} />
				<FbRow y={390} label="protection:" text="the same, not the gain" at={KD.both} lit={0} grey w={1100} />
				<FbRow y={490} label="supply:" text="no infected donors; fermenters scale" at={KD.longer} lit={lit(KD.longer, KD.eased)} dot="full" w={1100} />
				<FbRow y={590} label="safety:" text="no blood-derived material" at={KD.eased} lit={lit(KD.eased, KD.so)} dot="full" w={1100} />
				<GTag x={150} y={690} text="routine infant vaccination (Australia: since 2000)" at={KD.baby} out={KD.so} size={28} />
				<Verdict x={120} y={690} text="large benefit, from supply and safety" at={KD.so + 4} w={1100} />
				<MistakeChip x={140} y={830} text="Vaccine B protects better" at={KD.saying} cross={KD.mistake} size={30} />
				{/* the argument, drawn */}
				<g opacity={prog(f, 4, 12)}>
					<rect x={1270} y={370} width={540} height={600} rx={24} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} />
				</g>
				<Pl p={PLATES.vaccine} cx={1400} cy={450} w={190} o={prog(f, KD.prot, 12)} dim={prog(f, KD.gain, 12) * 0.5} />
				<Pl p={PLATES.vaccine} cx={1680} cy={450} w={190} o={prog(f, KD.prot + 8, 12)} dim={prog(f, KD.gain, 12) * 0.5} />
				<Sx x={1400} y={560} text="A" size={40} color={INK} weight={800} anchor="middle" at={KD.prot} />
				<Sx x={1680} y={560} text="B" size={40} color={INK} weight={800} anchor="middle" at={KD.prot + 8} />
				<Sx x={1540} y={470} text="=" size={70} color={AMBER_INK} weight={800} anchor="middle" at={KD.both} />
				<Sx x={1540} y={610} text="same protection" size={32} color={GREY_INK} hand weight={700} anchor="middle" at={KD.both + 10} />
				<Sx x={1540} y={680} text="plasma from infected donors" size={30} color={GREY_INK} hand weight={700} anchor="middle" at={KD.longer} />
				<GreyCross x={1540} y={670} at={KD.longer + 20} s={40} />
				<Pl p={PLATES.yeast} cx={1400} cy={800} w={190} o={prog(f, KD.consist - 10, 14)} />
				{f >= KD.consist ? <path d={`M1505,800 L${1505 + 60 * smooth(prog(f, KD.consist, 14))},800`} stroke={AMBER} strokeWidth={6} strokeLinecap="round" /> : null}
				<Pl p={PLATES.fermenter} cx={1680} cy={790} w={110} o={prog(f, KD.consist + 6, 14)} />
				<Sx x={1540} y={940} text="yeast in fermenters: at scale" size={30} color={AMBER_INK} hand weight={700} anchor="middle" at={KD.consist + 10} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to evaluate', name: 'name the domain', then: 'Then ask:', weigh: 'Weigh it against', finish: 'finish with a', verdict: 'verdict.', next: 'Next, practice'});
const FieldMini: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<rect x={x - 40} y={y - 26} width={80} height={52} rx={8} fill="#eef3e2" stroke="#7c9a5a" strokeWidth={2.5} />
		{[-24, -8, 8, 24].map(dx => <line key={dx} x1={x + dx} y1={y - 18} x2={x + dx} y2={y + 18} stroke="#2f8a5b" strokeWidth={3} strokeDasharray="5 4" />)}
	</g>
);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {at: number; lines: string[]; icon: React.ReactNode; amber?: boolean}[] = [
		{at: KE.name, lines: ['domain +', 'exact benefit'], icon: <><Pl p={PLATES.papayaOk} cx={-60} cy={0} w={50} /><Pl p={PLATES.vial} cx={0} cy={0} w={24} /><Pl p={PLATES.cheese} cx={60} cy={4} w={64} /></>},
		{at: KE.then, lines: ['better than what?', 'shown how?', 'who gets it?'], icon: <><TestIcon k={0} x={-70} y={0} s={0.9} /><TestIcon k={1} x={0} y={0} s={0.9} /><TestIcon k={2} x={70} y={0} s={0.9} /></>},
		{at: KE.weigh, lines: ['weigh the trade-off', '(farm: biodiversity)'], icon: <FieldMini x={0} y={0} />},
		{at: KE.verdict - 6, lines: ['verdict'], icon: <TestIcon k={0} x={0} y={0} s={1.2} color={AMBER_INK} />, amber: true},
	];
	return (
		<>
			<Heading text="Evaluating a benefit" at={KE.so} size={54} />
			<Overlay>
				{steps.map((s, i) => {
					const x = 110 + i * 430, y = 260;
					// Quality fix (6 Nov): all four cards wait at 35% from the start and light on their cues.
					const on = prog(f, s.at, 14);
					const o = prog(f, 0, 14) * (0.35 + 0.65 * on);
					return (
						<g key={i} opacity={o} transform={`translate(0,${(1 - on) * 12})`}>
							<rect x={x} y={y} width={400} height={360} rx={26} fill={s.amber && on > 0.5 ? '#fff3d9' : CARD} stroke={on > 0.5 ? AMBER : EDGE} strokeWidth={3.5} />
							<Sx x={x + 30} y={y + 56} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} />
							<g transform={`translate(${x + 200},${y + 100}) scale(1.4)`}>{s.icon}</g>
							{s.lines.map((t, k) => <Sx key={k} x={x + 200} y={y + 210 + k * 48} text={t} size={40} color={INK} hand anchor="middle" />)}
							{i < 3 ? <path d={`M${x + 404},${y + 165} l22,0 m-8,-8 l8,8 l-8,8`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" /> : null}
						</g>
					);
				})}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={760} width={1120} height={150} rx={40} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.maize} cx={790} cy={835} w={100} />
					<Pl p={PLATES.sheep} cx={900} cy={835} w={110} />
					<Sx x={980} y={852} text="Next: practice: benefits, biodiversity and ethics" size={38} color={INK} hand />
				</g>
				{void KE.finish}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
// Quality fix (6 Nov): nine one-line bullets at 33 px replace five paragraphs at 26 px. Same content, split.
const NOTES = [
	'A benefit must be better than an alternative, shown by evidence, and received by someone.',
	'Test it: Better than what? Shown how? Who gets it?',
	"Farm: virus-resistant papaya saved Hawaii's papaya (seed 1998); no ordinary variety resisted the virus.",
	'Released crops: pests can evolve resistance; one variety everywhere narrows crop genetic diversity.',
	'Insulin from bacteria: about as good as pig insulin; the clear gain is a reliable, scalable supply.',
	'Growth hormone from bacteria (1985) replaced a scarce, sometimes deadly supply: a bigger benefit.',
	'Chymosin: the same enzyme as calf rennet, without calves. Medical and industrial microbes stay in tanks.',
	'Access still depends on price.',
	'Benefits hold up best where the old method failed, evidence measures the real outcome, and it reaches people.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Better than what? Shown how? Who gets it? A gain in harvest isn't a gain in biodiversity." tag="test each benefit claim, weigh the trade-off, then give a verdict" size={33} aidTop={850} />
);
