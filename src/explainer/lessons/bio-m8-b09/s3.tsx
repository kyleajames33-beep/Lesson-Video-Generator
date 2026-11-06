// B8-09 scenes 12a to 14: question 1 (one copy each) with the countdown; its brief feedback (givens underlined, answer
// lines, framed answer, crossed "equally likely"); question 2 (HPV and the cervix) with the countdown; its feedback;
// the decision rule (the five-box chain) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, BLUE, BlankLines, Box, Bracket, CARD, CauseChain5, Chip, DrawPath, EDGE, Framed, GTag, GeneChip, HscTag, INK, INK_SOFT, Mistake, ON, P53, Pause, PedalIcon, Pic, PreRing, QPart,
	Svg, Sx, T, TEAL, Title, chainThumbs, marksCheck, prog, smooth,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

/** A coded strip of question 2's growth: a wavy membrane line with a small cluster above it, not crossing. */
const GrowthStrip: React.FC<{x: number; y: number; w: number; hi?: number}> = ({x, y, w, hi}) => {
	const f = useCurrentFrame();
	const h = hi === undefined ? 0 : prog(f, hi, 12);
	const pts = Array.from({length: 13}, (_, i) => `${x + (w * i) / 12},${y + Math.sin(i * 1.1) * 12}`).join(' L');
	return (
		<g>
			<rect x={x - 20} y={y - 150} width={w + 40} height={260} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={x - 6} y={y - 136} width={w + 12} height={136} fill="#f6dfe0" opacity={0.7} />
			<rect x={x - 6} y={y + 2} width={w + 12} height={94} fill="#f7ece0" opacity={0.8} />
			{[0, 1, 2, 3, 4, 5, 6, 7].map(i => <circle key={i} cx={x + w * 0.38 + (i % 4) * 26} cy={y - 34 - Math.floor(i / 4) * 26} r={12} fill="#b5728a" stroke="#7a3f55" strokeWidth={2} />)}
			<path d={'M' + pts} fill="none" stroke={h > 0.5 ? TEAL : '#2a8fd6'} strokeWidth={6} strokeLinecap="round" />
			<Sx x={x + w / 2} y={y - 100} text="abnormal cells" size={28} color={INK} anchor="middle" hand at={ON} />
			<Sx x={x + w / 2} y={y + 44} text="basement membrane: not crossed" size={28} color={INK} anchor="middle" hand at={ON} />
			<Sx x={x + w / 2} y={y + 82} text="vessels below" size={28} color={GREYT_} anchor="middle" hand at={ON} />
		</g>
	);
};
const GREYT_ = '#575148';

// ---------- 12a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: one copy each" />
		<HscTag />
		<Box x={96} y={150} w={1100} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={226} w={1040} size={42} />
		<QPart blocks={Q1_DEM} x={126} y={780} w={1040} size={42} />
		<Pic p={PL.inter} cx={1380} cy={300} w={270} />
		<Pic p={PL.inter} cx={1680} cy={300} w={270} />
		<Sx x={1380} y={480} text="Cell A" size={40} color={INK} anchor="middle" weight={800} at={ON} />
		<Sx x={1680} y={480} text="Cell B" size={40} color={INK} anchor="middle" weight={800} at={ON} />
		<GeneChip x={1240} y={506} w={280} text="1: switched on" color={AMBER_INK} size={28} />
		<GeneChip x={1240} y={566} w={280} text="2: normal" color="#9a9387" size={28} />
		<GeneChip x={1540} y={506} w={284} text="1: not working" color={AMBER_INK} size={28} />
		<GeneChip x={1540} y={566} w={284} text="2: normal" color={TEAL} size={28} />
		<BlankLines x={1240} y={650} w={584} h={170} label="your answer" />
		<Pause h={hold('attempt')} at={KA.pause} tx={1240} ty={895} cx={1752} cy={968} r={42} />
		<PreRing at={KA.pause - 12} start={hold('attempt').startFrame} x={1752} y={968} r={42} />
	</Svg>
);

// ---------- 12b. feedback one ----------
const KB = K('feedback-one', {cellA: 'Cell A', act: 'activating mutation', onco: 'an oncogene', stuck: 'stuck on', drive: 'drive division', cellB: 'In cell', normal: 'the normal copy', brake: 'enough brake', holds: 'control holds', classic: 'classic mistake', equally: 'equally likely'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'an activating mutation that keeps one copy of a proto-oncogene switched on', at: KB.act},
	{phrase: 'one normal copy is enough for that gene’s function', at: KB.normal, color: TEAL},
	{phrase: 'All other copies of these genes are normal', at: KB.holds, color: TEAL},
]);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: one copy each" />
			<HscTag />
			<Box x={40} y={150} w={680} h={890} />
			<QPart blocks={Q1_STEM} marks={M_B} x={62} y={210} w={636} size={32} />
			<QPart blocks={Q1_DEM} marks={M_B} x={62} y={690} w={636} size={32} />
			<Pic p={PL.inter} cx={850} cy={270} w={200} />
			<Sx x={850} y={400} text="Cell A" size={36} color={INK} anchor="middle" weight={800} at={ON} />
			<PedalIcon x={850} y={520} s={0.3} accLock={smooth(prog(f, KB.onco, 16))} brakePress={0.6} o={0.45 + 0.55 * prog(f, KB.act, 12)} />
			<Pic p={PL.inter} cx={850} cy={680} w={200} />
			<Sx x={850} y={810} text="Cell B" size={36} color={INK} anchor="middle" weight={800} at={ON} />
			<PedalIcon x={850} y={930} s={0.3} accLock={0} brakePress={prog(f, KB.brake, 14)} o={0.45 + 0.55 * prog(f, KB.cellB, 12)} />
			<AnsBox x={1000} y={160} w={824} h={470} label="answer" size={42} sizeOld={34} lines={[
				{t: 'Cell A is more likely', at: KB.cellA + 4},
				{t: 'A: the oncogene’s protein is stuck on, so one copy drives division with no signal', at: KB.stuck},
				{t: 'B: the normal copy still makes enough brake; control holds until it is lost too', at: KB.holds},
			]} />
			<Framed x={1010} y={730} text="Cell A" at={KB.cellA + 4} size={50} />
			<Mistake x={1000} y={790} text="equally likely: one mutation each" size={40} at={KB.classic} cross={KB.equally + 10} note="accelerator: one copy is enough; brake: usually both must go" noteW={820} />
		</Svg>
	);
};

// ---------- 12c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: HPV and the cervix" />
		<HscTag />
		<Box x={96} y={150} w={1100} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={226} w={1040} size={42} />
		<QPart blocks={Q2_DEM} x={126} y={640} w={1040} size={42} />
		<Pic p={PL.inter} cx={1400} cy={300} w={300} />
		<P53 x={1700} y={230} s={30} />
		<DrawPath d="M1670,202 L1730,262 M1730,202 L1670,262" at={ON} color="#c4432f" width={6} />
		<Sx x={1700} y={420} text="E6: p53 destroyed" size={30} color={INK} anchor="middle" hand at={ON} />
		<Sx x={1400} y={480} text="an infected lining cell" size={32} color={INK} anchor="middle" hand at={ON} />
		<GrowthStrip x={1260} y={680} w={544} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1240} ty={895} cx={1752} cy={968} r={42} />
		<PreRing at={KC.pause - 12} start={hold('attempt-two').startFrame} x={1752} y={968} r={42} />
	</Svg>
);

// ---------- 12d. feedback two ----------
const KD = K('feedback-two', {losing: 'Losing p53', weakens: 'weakens', more: 'More damaged', build: 'build up', raises: 'That raises', not: 'not every', spread: 'to spread', bm: 'break through', classic: 'classic mistake', catch: 'you catch'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'destroy its p53 protein', at: KD.losing + 4},
	{phrase: 'has not crossed the basement membrane', at: KD.bm, color: TEAL},
]);
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: HPV and the cervix" />
			<HscTag />
			<Box x={40} y={150} w={680} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={62} y={210} w={636} size={32} />
			<QPart blocks={Q2_DEM} marks={M_D} x={62} y={640} w={636} size={32} />
			<AnsBox x={760} y={160} w={800} h={430} label="answer (a)" size={40} sizeOld={33} lines={[
				{t: 'less p53: a key DNA-damage checkpoint is weakened', at: KD.weakens},
				{t: 'more damaged cells survive and divide', at: KD.more},
				{t: 'mutations build up in that line → risk rises (not certain)', at: KD.raises},
			]} />
			<PedalIcon x={1690} y={420} s={0.36} accLock={0} brakeSlack={smooth(prog(f, KD.weakens, 16))} />
			<Sx x={1690} y={490} text="brake lost" size={32} color={AMBER_INK} anchor="middle" hand at={KD.weakens + 10} />
			<P53 x={1690} y={230} s={34} o={1 - 0.7 * prog(f, KD.losing + 6, 14)} />
			<AnsBox x={760} y={610} w={1064} h={150} label="answer (b)" size={40} hint="why it is unlikely to have spread" lines={[{t: 'not through the basement membrane: can’t reach blood or lymph vessels yet', at: KD.bm + 10}]} />
			<Framed x={770} y={850} text="lost p53 → mutations build up" at={KD.build} size={42} />
			<Mistake x={1300} y={800} text="cervical cancer is caught" size={36} at={KD.classic} cross={KD.catch} note="the virus is caught; the cancer comes from the cell’s own genes" noteW={520} />
		</Svg>
	);
};

// ---------- 13. decision rule ----------
const KR = K('decision-rule', {chain: 'follow the', build: 'mutations build', control: 'a control breaks', acc: 'an accelerator', brake: 'a brake lost', div: 'division without', tumour: 'a tumour', mal: "if it's malignant", inv: 'invasion and', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const bw = (1728 - 4 * 40) / 5;
	const bx = (i: number) => 96 + i * (bw + 40);
	return (
		<Svg>
			<Title text="Any cancer question: follow the chain" />
			<Chip x={bx(1) + bw / 2} y={190} text="accelerator stuck" size={30} color={AMBER_INK} anchor="middle" o={0.3 + 0.7 * prog(f, KR.acc, 12)} />
			<Chip x={bx(1) + bw / 2} y={250} text="brake lost" size={30} color={AMBER_INK} anchor="middle" o={0.3 + 0.7 * prog(f, KR.brake, 12)} />
			<Bracket xa={bx(4) + 10} xb={bx(4) + bw - 10} y={290} at={KR.mal} label="malignant only" size={34} />
			<CauseChain5 y={330} h={290} lit={[KR.build, KR.control, KR.div, KR.tumour, KR.inv]} thumbs={chainThumbs()} size={34} />
			<g opacity={0.3 + 0.7 * prog(f, KR.acc, 12)}>
				<rect x={96} y={680} width={840} height={110} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={516} y={750} text="a stuck accelerator and failed brakes" size={42} color={BLUE} anchor="middle" hand at={ON} />
			</g>
			<g opacity={0.3 + 0.7 * prog(f, KR.mal, 12)}>
				<rect x={984} y={680} width={840} height={110} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={1404} y={750} text="malignant moves; benign is bound" size={42} color={BLUE} anchor="middle" hand at={ON} />
			</g>
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={760} y={850} width={1064} height={150} rx={75} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				{[0, 1, 2].map(i => <rect key={i} x={826 + i * 34} y={960 - [50, 80, 30][i]} width={24} height={[50, 80, 30][i]} rx={4} fill={['#7f9cbd', AMBER_INK, TEAL][i]} />)}
				<line x1={816} x2={936} y1={962} y2={962} stroke={INK} strokeWidth={3} />
				<T x={960} y={915} w={840} text="Next: What do incidence, prevalence and mortality measure?" size={38} color={INK} lh={44} />
			</g>
			<GTag x={96} y={890} text="b10: how common is a disease?" size={30} at={KR.next} />
			{void INK_SOFT}{void EDGE}
		</Svg>
	);
};

// ---------- 14. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={40} aidTop={760} tag="Where it breaks: a real cancer usually needs several such changes, and the genes differ between cancers." aid="A stuck accelerator and failed brakes. Malignant moves; benign is bound." notes={[
		'Cancer: cells divide by mitosis without normal control.',
		'Checkpoints pause the cycle; p53 responds to DNA damage: repair, or apoptosis.',
		'Usually several mutations build up in one cell line, so risk rises with age.',
		'Oncogene (stuck accelerator): one copy is enough. Tumour suppressor (brake): usually both copies lost.',
		'Malignant cells cross the basement membrane, enter vessels, form secondary tumours. UV damages melanocyte DNA.',
	]} />
);
