// M6 B15 scenes 10a to 12: two unseen exam items (compare a tomato breeder's and a cattle breeder's processes so only
// the chosen father's gametes take part; analyse hypothetical breed data on cows, bulls fathering calves and a recessive
// disorder, and suggest one change), each kept whole on screen through "Pause here to answer." and its 10 s countdown;
// brief feedback with the givens underlined (or the data rows outlined) as they are used and one crossed classic
// mistake (no givens card). Then the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, DataTable, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import type {Col} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox, GTag} from '../bio-m6-b01/parts';
import {GreyCross} from '../bio-m6-b07/parts';
import {S, hold} from './common';
import {ANTHERS} from './assets';
import {DotPair, SelfLoop} from './parts2';
import {AMBER, AMBER_INK, CARD, EDGE, GREYT, GREY_INK, INK, INK_SOFT, PLATES, Pill, Pl, PlC, Rg, lerp, platePt, prog, smooth, vis} from './parts';
import type {RK} from './parts';

const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1680, cy = 840}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text={label} size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);

// ---------- item 1: tomatoes and cattle ----------
type T1 = {a: number; b: number; c: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'A tomato breeder wants seeds whose father (pollen parent) is one chosen tomato plant.', at: t.a},
	{text: 'Tomato flowers usually pollinate themselves.', at: t.b},
	{text: 'A beef cattle breeder in New South Wales wants calves whose father is a chosen bull kept on a farm in Western Australia.', at: t.c},
] as QBlock[];
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), {text: "Compare the processes each breeder would use to ensure that only the chosen father's gametes take part in fertilisation. (4 marks)", at: t.d, para: true, weight: 700}], marks);
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck(STEM1(t), marks);
const MARKS1 = ['a farm in Western Australia', 'usually pollinate themselves', 'one chosen tomato plant'];
qCheck(STRIP1({a: 0, b: 0, c: 0, d: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', tomato: 'A tomato breeder', flowers: 'Tomato flowers usually', cattle: 'A cattle breeder', compare: 'Compare the processes', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<Pl p={PLATES.tomato} cx={1600} cy={300} w={170} o={prog(f, KA.tomato, 14)} />
				<Pl p={PLATES.bull} cx={1720} cy={470} w={180} o={prog(f, KA.cattle, 14)} />
				<QText q={Q1({a: KA.tomato, b: KA.flowers, c: KA.cattle, d: KA.compare})} x={140} y={250} w={1360} size={36} card={false} />
				{/* the givens drawn as they are read; they clear when the answer box opens */}
				<g opacity={1 - prog(f, KA.compare + 16, 14)}>
					<Pl p={PLATES.tomato} cx={330} cy={740} w={250} o={prog(f, KA.tomato + 6, 14)} />
					<Sx x={330} y={930} text="one chosen father plant" size={34} color={INK} hand anchor="middle" at={KA.tomato + 16} />
					{f < KA.compare + 30 ? <SelfLoop x={420} y={700} r={80} at={KA.flowers + 6} /> : null}
					<Pl p={PLATES.bull} cx={900} cy={640} w={220} o={prog(f, KA.cattle, 14)} />
					<DotPair a={[900, 760]} b={[1340, 760]} la="WA farm" lb="NSW calves" t={prog(f, KA.cattle + 24, 40)} o={prog(f, KA.cattle + 10, 12)} />
				</g>
				<AnsBox x={140} y={520} w={1320} h={470} at={KA.compare + 30} label="answer" />
				<PauseHold id="attempt" at={KA.pause} cy={840} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {both: 'Both collect gametes', frozen: 'frozen and sent interstate', w1: ['whereas', 1], cow: 'The cow is inseminated', w2: ['whereas', 2], anthers: 'anthers removed', stray: 'stray pollen kept off', bag: 'a bag being', describing: 'Describing each breeder', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [
		{at: KB.both, label: 'collect', ai: ['semen from the bull'], ap: ['pollen from the chosen plant'], w: KB.both + 10},
		{at: KB.frozen, label: 'store', ai: ['frozen, sent interstate'], ap: ['from a plant close by'], w: KB.w1},
		{at: KB.cow, label: 'keep others out', ai: ['on heat, no bull'], ap: ['anthers removed, stray pollen kept off,', 'chosen pollen on (bag optional)'], w: KB.w2},
	];
	const ry = (i: number) => 432 + i * 122;
	const fl = {cx: 1710, cy: 760, w: 240};
	const A = ANTHERS.map(a => platePt(PLATES.floret, fl.cx, fl.cy, fl.w, a[0], a[1]));
	const lift = smooth(prog(f, KB.anthers + 10, 30));
	const kk = fl.w / (PLATES.floret.box[2] - PLATES.floret.box[0]);
	return (
		<>
			<Heading text="Same feature, both sides" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={184} at={-100} />
				<QText q={STRIP1(ALL1, [{phrase: MARKS1[2], at: KB.both + 10}, {phrase: MARKS1[0], at: KB.frozen}, {phrase: MARKS1[1], at: KB.anthers}])} x={140} y={222} w={2040} size={36} card={false} s={0.8} />
				<Sx x={440} y={412} text="cattle" size={34} color={GREY_INK} weight={800} opacity={prog(f, KB.both, 10)} />
				<Sx x={1080} y={412} text="tomato" size={34} color={GREY_INK} weight={800} opacity={prog(f, KB.both, 10)} />
				{rows.map((r, i) => {
					const lit = vis(f, r.at, i < 2 ? rows[i + 1].at : KB.describing, 10);
					return (
						<g key={i} opacity={prog(f, r.at, 12)}>
							<rect x={120} y={ry(i)} width={1460} height={r.ap.length > 1 ? 104 : 80} rx={16} fill={lit > 0.5 ? '#fffaf0' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={lit > 0.5 ? 3.5 : 2.5} />
							<Sx x={140} y={ry(i) + 50} text={r.label} size={30} color={lit > 0.5 ? INK : GREY_INK} weight={800} />
							{r.ai.map((t, k) => <Sx key={k} x={440} y={ry(i) + 52 + k * 38} text={t} size={36} color={lit > 0.5 ? INK : GREY_INK} hand />)}
							<Sx x={920} y={ry(i) + 52} text="whereas" size={34} color={AMBER_INK} hand opacity={prog(f, r.w, 8)} />
							{r.ap.map((t, k) => <Sx key={k} x={1080} y={ry(i) + 52 + k * 38} text={t} size={k ? 32 : 36} color={lit > 0.5 ? INK : GREY_INK} hand />)}
						</g>
					);
				})}
				{/* a small floret: the forceps lift its anthers */}
				<g opacity={prog(f, KB.anthers, 12)}>
					<PlC p={PLATES.floret} cx={fl.cx} cy={fl.cy} w={fl.w} id="b15-fb1-floret" />
					{A.map((a, i) => <ellipse key={i} cx={a[0]} cy={a[1]} rx={46 * kk} ry={104 * kk} fill={i === 1 ? '#f6f1e7' : '#e9dcb4'} opacity={prog(f, KB.anthers + 14 + i * 6, 8)} />)}
					<Pl p={PLATES.forceps} cx={A[1][0] + 4} cy={lerp(A[1][1] - 70, A[1][1] - 150, lift)} w={26} />
					<ellipse cx={A[1][0] + 4} cy={lerp(A[1][1] + 10, A[1][1] - 70, lift)} rx={8} ry={18} fill="#e8b81f" stroke="#a9830a" strokeWidth={2} opacity={vis(f, KB.anthers + 10, KB.describing, 8)} />
				</g>
				{/* the classic mistake: a paragraph on each breeder */}
				<g opacity={prog(f, KB.describing, 12)}>
					{[0, 1].map(i => (
						<g key={i}>
							<rect x={1180 + i * 180} y={900} width={160} height={110} rx={12} fill="#eceeef" stroke={GREYT} strokeWidth={2} />
							{[0, 1, 2].map(k => <line key={k} x1={1196 + i * 180} y1={930 + k * 26} x2={1320 + i * 180 - (k % 2) * 30} y2={930 + k * 26} stroke={GREYT} strokeWidth={5} strokeLinecap="round" />)}
						</g>
					))}
				</g>
				<MistakeChip x={140} y={930} text="a paragraph on each breeder, no 'whereas'" at={KB.describing} cross={KB.mistake} size={34} />
				{void KB.stray}{void KB.bag}{void GTag}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- item 2: fewer fathers ----------
const COLS: Col[] = [{w: 760, head: 'hypothetical data'}, {w: 200, head: '1985', align: 'middle'}, {w: 200, head: '2025', align: 'middle'}];
const ROWS2 = [
	['cows in the breed', '500 000', '500 000'],
	['bulls fathering calves (by artificial insemination)', '1200', '150'],
	['calves born with a recessive disorder, per 10 000', '1', '6'],
];
type T2 = {a: number; d: number};
const STEM2 = (t: T2) => [{text: 'The table shows data for one dairy breed in which almost all cows are bred by artificial insemination.', at: t.a}] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Analyse how the use of artificial insemination could explain these data. Suggest ONE change to the breeding program that would reduce the problem. (5 marks)', at: t.d, weight: 700}] as QBlock[];

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', dairy: 'In a dairy breed', forty: 'forty years', over: 'Over that time', fell: 'fell sharply', disorder: 'more calves were born', analyse: 'Analyse how', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<HscTag at={KC.second} />
			<CardBox x={100} y={180} w={1720} h={830} at={KC.dairy - 6} />
			<QText q={qCheck(STEM2({a: KC.dairy, d: 0}), [])} x={140} y={250} w={1640} size={34} card={false} />
			<DataTable x={140} y={300} cols={COLS} rows={ROWS2} rowAt={[KC.forty - 20, KC.fell - 20, KC.disorder]} at={KC.dairy + 10} size={30} rowH={58} />
			<QText q={qCheck(DEM2({a: 0, d: KC.analyse}), [])} x={140} y={580} w={1150} size={34} card={false} />
			<GivensTwo />
			<AnsBox x={140} y={748} w={1150} h={244} at={KC.analyse + 30} label="answer" />
			<PauseHold id="attempt-two" at={KC.pause} cy={850} />
		</Overlay>
	</>
);

/** Item 2's data drawn row by row as they are read (right of the table): cows the same, fathers 1200 to 150,
 * affected calves 1 to 6 per 10 000. Nothing in it bears on the answer. */
const GivensTwo: React.FC = () => {
	const f = useCurrentFrame();
	const bar = (y: number, w: number, at: number, label: string, year: string) => (
		<g opacity={prog(f, at, 10)}>
			<Sx x={1480} y={y + 24} text={year} size={26} color={GREY_INK} weight={700} />
			<rect x={1556} y={y} width={w * smooth(prog(f, at, 20))} height={30} rx={8} fill="#8fa7b8" />
			<Sx x={w > 150 ? 1556 + w - 10 : 1556 + w + 12} y={y + 25} text={label} size={28} color={w > 150 ? '#fffdf8' : INK} weight={800} anchor={w > 150 ? 'end' : 'start'} />
		</g>
	);
	return (
		<g>
			<g opacity={prog(f, KC.forty - 14, 14)}>
				<Pl p={PLATES.cow} cx={1420} cy={340} w={150} />
				<Sx x={1510} y={334} text="cows: the same" size={34} color={INK} hand />
				<Sx x={1510} y={374} text="both years" size={30} color={GREY_INK} hand />
			</g>
			<g opacity={prog(f, KC.fell - 14, 14)}>
				<Pl p={PLATES.bull} cx={1400} cy={496} w={120} />
				<Sx x={1350} y={436} text="fathers" size={34} color={INK} hand />
			</g>
			{bar(452, 230, KC.fell - 4, '1200', '1985')}
			{bar(500, 29, KC.fell + 10, '150', '2025')}
			<g opacity={prog(f, KC.disorder, 14)}>
				<Sx x={1350} y={596} text="calves with the disorder, per 10 000" size={30} color={INK} hand />
				<Sx x={1350} y={646} text="1985" size={26} color={GREY_INK} weight={700} />
				<circle cx={1450} cy={637} r={12} fill="#c4632e" />
				<Sx x={1350} y={692} text="2025" size={26} color={GREY_INK} weight={700} />
				{Array.from({length: 6}, (_, i) => <circle key={i} cx={1450 + i * 34} cy={683} r={12} fill="#c4632e" opacity={prog(f, KC.disorder + 10 + i * 4, 8)} />)}
			</g>
		</g>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {fewer: 'With fewer bulls', small: 'like a small population', though: 'though cow numbers', related: 'more related', pair: 'pair up more often', rises: 'the disorder rises', change: 'Change', test: 'DNA-test them', thinking: 'Thinking the same', mistake: 'the classic mistake'});
const FEW_K: RK[] = ['A', 'C', 'flow'];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const hot = (r: number) => (r === 1 ? vis(f, KD.fewer, KD.though, 8) : r === 0 ? vis(f, KD.though, KD.related, 8) : r === 2 ? vis(f, KD.pair, KD.change, 8) : 0);
	const fan = smooth(prog(f, KD.fewer + 10, 30));
	const calf = (i: number): [number, number] => [280 + (i % 9) * 76, 700 + Math.floor(i / 9) * 76];
	const bull = (k: number): [number, number] => [440 + k * 210, 510];
	const pass = smooth(prog(f, KD.pair + 6, 30));
	return (
		<>
			<Heading text="Count the fathers" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<g transform="translate(0,-110)">
					<DataTable x={140} y={300} cols={COLS} rows={ROWS2} at={-100} size={30} rowH={58} hot={hot} />
				</g>
				<Sx x={1320} y={290} text="not the cows" size={36} color={AMBER_INK} hand at={KD.though + 10} />
				{/* a mini sire fan: few fathers, many calves */}
				<g opacity={prog(f, KD.fewer, 12)}>
					{FEW_K.map((k, i) => {
						const [x, y] = bull(i);
						return (
							<g key={i}>
								<Pl p={PLATES.bull} cx={x} cy={y} w={110} />
								<Rg x={x + 50} y={y + 30} r={9} k={k} />
							</g>
						);
					})}
					{Array.from({length: 18}, (_, i) => {
						const [x, y] = calf(i);
						const b = bull(i % 3);
						const sick = i === 13 ? prog(f, KD.pair + 30, 12) : 0;
						return (
							<g key={i}>
								<line x1={b[0]} y1={b[1] + 40} x2={lerp(b[0], x, fan)} y2={lerp(b[1] + 40, y - 20, fan)} stroke={GREYT} strokeWidth={1.6} opacity={0.6} />
								<Pl p={PLATES.calf} cx={x} cy={y} w={62} o={prog(f, KD.fewer + 10 + i, 8)} dim={sick} />
							</g>
						);
					})}
				</g>
				{/* two related calves pass a carrier ring to one offspring */}
				<g opacity={prog(f, KD.related, 12) * (1 - prog(f, KD.change + 40, 12))}>
					<path d={`M${calf(4)[0]},${calf(4)[1] - 26} Q${(calf(4)[0] + calf(7)[0]) / 2},${calf(4)[1] - 70} ${calf(7)[0]},${calf(7)[1] - 26}`} fill="none" stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" />
					<circle cx={lerp(calf(4)[0], calf(13)[0] - 10, pass)} cy={lerp(calf(4)[1] + 20, calf(13)[1] + 24, pass)} r={8} fill="#9aa3ab" stroke={GREY_INK} strokeWidth={2} />
					<circle cx={lerp(calf(7)[0], calf(13)[0] + 10, pass)} cy={lerp(calf(7)[1] + 20, calf(13)[1] + 24, pass)} r={8} fill="#9aa3ab" stroke={GREY_INK} strokeWidth={2} />
				</g>
				<Pill x={1000} y={500} text="fewer fathers: like a small population" size={34} o={prog(f, KD.small, 12)} lit={1 - prog(f, KD.related, 10)} />
				<Pill x={1000} y={596} text="relatedness: recessive alleles pair up" size={34} o={prog(f, KD.pair + 10, 12)} lit={1 - prog(f, KD.change, 10)} />
				<Pill x={1000} y={692} text="more unrelated bulls, or avoid carrier x carrier matings" size={30} o={prog(f, KD.change + 10, 12)} lit={1 - prog(f, KD.thinking, 10)} />
				<MistakeChip x={1000} y={890} text="just as many cows, so diversity can't fall" at={KD.thinking} cross={KD.mistake} size={32} />
				{void KD.rises}{void KD.test}{void GreyCross}{void CARD}{void EDGE}{void AMBER}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to compare', collect: 'collected and stored', delivered: "they're delivered", outcomes: 'the outcomes', offspring: 'for the offspring', gene: 'for the gene pool', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.collect, t: 'collect and store'},
		{at: KE.delivered, t: 'deliver + keep others out'},
		{at: KE.offspring, t: 'outcome: offspring'},
		{at: KE.gene, t: 'outcome: gene pool'},
	];
	return (
		<>
			<Heading text="Comparing reproductive technologies" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={(0.3 + 0.7 * prog(f, s.at, 14)) * prog(f, 0, 12)}>
						<rect x={140} y={215 + i * 118} width={900} height={94} rx={22} fill={CARD} stroke={prog(f, s.at, 14) > 0.5 ? AMBER : EDGE} strokeWidth={3.5} />
						<Sx x={190} y={278 + i * 118} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} />
						<Sx x={250} y={278 + i * 118} text={s.t} size={42} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.gene + 20, 12)}>
					<path d="M1070,262 L1100,262 L1100,640 L1070,640" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
					<line x1={1100} y1={451} x2={1140} y2={451} stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={1156} y={440} text="both sides, one feature" size={42} color={AMBER_INK} hand />
					<Sx x={1156} y={492} text="at a time (whereas)" size={42} color={AMBER_INK} hand />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={640} y={790} width={1180} height={150} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.jars} cx={760} cy={865} w={180} />
					<Sx x={880} y={858} text="Next: cloning a whole organism," size={38} color={INK} hand />
					<Sx x={880} y={906} text="and cloning a gene" size={38} color={INK} hand />
				</g>
				{void KE.outcomes}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	"Both methods choose which parents' gametes meet; neither changes any DNA.",
	'Meiosis still mixes alleles, so a trait becomes more likely, not certain.',
	'Insemination: semen collected, diluted into doses, frozen; it keeps for decades.',
	'The cow is inseminated on heat, with no bull present.',
	'Pollination: pollen from the chosen plant, often used fresh (it lasts hours).',
	"Remove the seed flower's anthers, keep stray pollen off, apply the chosen pollen.",
	'One bull reaches thousands; a few sires make a herd act like a small population.',
	'Compare one feature at a time, both sides ("whereas").',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Same aim, different reach. Count the fathers, not the cows." tag="compare one feature at a time: collect and store, deliver and keep others out, outcomes" size={34} aidTop={850} />
);
