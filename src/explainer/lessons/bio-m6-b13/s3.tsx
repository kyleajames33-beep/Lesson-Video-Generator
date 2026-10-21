// M6 B13 scenes 9a to 11: two unseen exam items (a self-limiting male mosquito release: why the gene disappears after
// releases stop, and why stopping releases alone may not remove a self-sustaining suppression gene drive; evaluate a
// drought-tolerant wheat replacing twenty local varieties), each kept whole on screen through "Pause here to answer."
// and its 10 s countdown; brief feedback with the givens underlined as they are used and one crossed classic mistake
// (no givens card). Then the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox, GTag} from '../bio-m6-b01/parts';
import {Brace} from '../bio-m6-b07/parts';
import {FemaleSym} from '../bio-m6-b12/parts';
import {S, hold} from './common';
import {
	AMBER, AMBER_INK, BIO_INK, Balance, CARD, ChromoMini, EDGE, GREYT, GREY_INK, GrassTufts, INK, INK_SOFT, OffRow, PLATES, Pill, Pl, ReturnArrow, RingCluster,
	VerdictBar, clusterPt, lerp, prog, smooth, vis,
} from './parts';
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
/** A coded male symbol (circle and arrow). */
const MaleSym: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} fill="none" stroke={BIO_INK} strokeWidth={4} strokeLinecap="round">
		<circle cx={x - 3 * s} cy={y + 4 * s} r={10 * s} /><path d={`M${x + 4 * s},${y - 3 * s} L${x + 13 * s},${y - 12 * s} M${x + 5 * s},${y - 12 * s} L${x + 13 * s},${y - 12 * s} L${x + 13 * s},${y - 4 * s}`} />
	</g>
));

// ---------- item 1: a self-limiting release ----------
type T1 = {a: number; b: number; c: number; qa: number; qb: number};
const STEM1 = (t: T1) => [
	{text: 'Some mosquito-control programs release large numbers of male Aedes mosquitoes that carry a "self-limiting" gene.', at: t.a},
	{text: 'Female offspring that inherit the gene die before becoming adults.', at: t.b},
	{text: 'Male offspring that inherit it survive and carry one copy, which each passes to about half of his own offspring, as normal inheritance predicts.', at: t.c},
] as QBlock[];
const QA1 = (t: T1) => ({text: '(a) Explain why the gene is expected to disappear from the wild population after releases stop. (3 marks)', at: t.qa, para: true, weight: 700} as QBlock);
const QB1 = (t: T1, para = true) => ({text: '(b) Explain why stopping releases alone may not remove a self-sustaining suppression gene drive from a population. (2 marks)', at: t.qb, para, weight: 700} as QBlock);
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), QA1(t), QB1(t)], marks);
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), QB1(t, false)], marks);
const MARKS1 = ['about half of his own offspring', 'Female offspring that inherit the gene die', 'self-sustaining suppression gene drive'];
qCheck(STRIP1({a: 0, b: 0, c: 0, qa: 0, qb: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 9a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', some: 'Some mosquito control', kills: 'kills daughters', sons: 'Sons who inherit', explain: 'Explain why the gene', why: 'and why stopping', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {a: KA.some, b: KA.kills, c: KA.sons, qa: KA.explain, qb: KA.why};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<Pl p={PLATES.aedes} cx={1660} cy={290} w={250} o={prog(f, KA.some, 14)} />
				<QText q={Q1(t)} x={140} y={250} w={1380} size={34} card={false} />
				<AnsBox x={140} y={650} w={660} h={340} at={KA.why + 30} label="(a)" />
				<AnsBox x={830} y={650} w={660} h={340} at={KA.why + 36} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} cy={860} />
			</Overlay>
		</>
	);
};

// ---------- 9b. Feedback one ----------
const KB = cues(S('feedback-one'), {without: 'Without new releases', half: 'only half', daughter: 'every daughter', selection: 'So selection', rarer: 'gets rarer', lost: "until it's lost", drive: 'A drive designed', onehalf: 'one-half', keep: 'keep spreading', untested: 'still untested', saying: 'Saying that stopping', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, qa: -100, qb: -100};
const HALF_CARRY = [0, 2, 5, 7];
const DRIVE_CARRY = [0, 1, 2, 4, 5, 7];
const POOL1: RK[] = ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'B', 'C', 'A'];
const AMB1 = [1, 4, 7, 10];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const gens = [KB.rarer, KB.rarer + 24, KB.lost];
	const ambLeft = f >= gens[2] ? 0 : f >= gens[1] ? 1 : f >= gens[0] ? 2 : 4;
	const rise = prog(f, KB.keep - 10, 60, x => x);
	const popPt = (t: number): [number, number] => [1060 + t * 700, 760 - 120 * (t < 0.3 ? t / 0.3 * 0.35 : 0.35 + 0.65 * smooth((t - 0.3) / 0.7))];
	const N = 30;
	const solid = Array.from({length: N + 1}, (_, i) => i / N).filter(t => t <= rise && t <= 0.62).map(t => popPt(t).join(','));
	const dashedPts = Array.from({length: N + 1}, (_, i) => i / N).filter(t => t <= rise && t >= 0.6).map(t => popPt(t).join(','));
	const dashed = f >= KB.untested;
	return (
		<>
			<Heading text="Why the gene disappears, and a drive may not" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={180} at={-100} />
				<QText q={STRIP1(ALL1, [{phrase: MARKS1[0], at: KB.half}, {phrase: MARKS1[1], at: KB.daughter}, {phrase: MARKS1[2], at: KB.onehalf}])} x={140} y={226} w={2620} size={36} card={false} s={0.62} />
				{/* (a) the self-limiting gene: half the offspring, the daughters die, selection removes it */}
				<rect x={100} y={390} width={840} height={460} rx={22} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
				<Sx x={124} y={430} text="(a) self-limiting gene" size={26} color={GREY_INK} hand />
				<ChromoMini x={190} y={540} h={120} o={prog(f, KB.without, 12)} />
				{Array.from({length: 8}, (_, i) => {
					const x = 300 + i * 78;
					const female = i % 2 === 0;
					const carry = HALF_CARRY.includes(i);
					const dead = female && carry ? prog(f, KB.daughter + 10, 14) : 0;
					return (
						<g key={i} opacity={prog(f, KB.half + i * 3, 8) * (1 - 0.6 * dead)}>
							<Pl p={PLATES.aedes} cx={x} cy={490} w={62} dim={dead} />
							<g transform={`translate(${x},540) scale(0.62)`}><OffRow x={0} y={0} n={1} carry={() => (carry && dead < 0.5 ? 1 : 0)} /></g>
							{female ? <FemaleSym x={x} y={582} s={0.8} /> : <MaleSym x={x} y={580} s={0.8} />}
						</g>
					);
				})}
				<RingCluster x={420} y={720} kinds={POOL1} cols={6} gap={36} r={11} o={prog(f, KB.selection, 12)} kindOf={i => (AMB1.indexOf(i) >= 0 && AMB1.indexOf(i) < ambLeft ? 'new' : POOL1[i])} />
				{gens.map((g, k) => (
					<g key={k} opacity={prog(f, g, 8)}>
						<line x1={660 + k * 80} y1={700} x2={660 + k * 80} y2={740} stroke={GREYT} strokeWidth={3} />
						<Sx x={660 + k * 80} y={770} text={`gen ${k + 1}`} size={22} color={GREY_INK} hand anchor="middle" />
					</g>
				))}
				<Pill x={124} y={790} text="passed to only half" size={28} o={vis(f, KB.half + 12, KB.selection, 10)} />
				<Pill x={124} y={790} text="selection: rarer each generation" size={28} o={vis(f, KB.selection + 6, KB.lost, 10)} />
				<Pill x={124} y={790} text="lost" size={28} o={prog(f, KB.lost + 6, 10)} lit={1 - prog(f, KB.drive, 10)} />
				{/* (b) a designed drive: above one-half, can keep spreading; untested in the wild */}
				<rect x={980} y={390} width={840} height={460} rx={22} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={prog(f, KB.drive - 10, 12)} />
				<g opacity={prog(f, KB.drive - 6, 12)}>
					<Sx x={1004} y={430} text="(b) designed drive" size={26} color={GREY_INK} hand />
					<ChromoMini x={1070} y={540} h={120} copy={prog(f, KB.drive + 20, 24)} />
					<OffRow x={1180} y={540} n={8} gap={78} s={0.62} carry={i => (DRIVE_CARRY.includes(i) ? prog(f, KB.onehalf + i * 3, 8) : 0)} o={i => prog(f, KB.drive + 30 + i * 2, 8)} />
					<Sx x={1180} y={604} text="6 of 8 carry it" size={24} color={GREY_INK} hand opacity={prog(f, KB.onehalf + 30, 10)} />
					{/* population of carriers, no new releases */}
					<line x1={1060} y1={640} x2={1060} y2={780} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={1060} y1={780} x2={1780} y2={780} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={1220} y1={650} x2={1220} y2={780} stroke={GREYT} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, KB.keep - 10, 10)} />
					<Sx x={1228} y={668} text="releases stop" size={22} color={GREY_INK} hand opacity={prog(f, KB.keep - 10, 10)} />
					{solid.length > 1 ? <polyline points={solid.join(' ')} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
					{dashedPts.length > 1 ? <polyline points={dashedPts.join(' ')} fill="none" stroke={dashed ? GREYT : AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dashed ? '10 9' : undefined} /> : null}
				</g>
				<GTag x={1800} y={580} text="spread in the wild: untested" at={KB.untested + 4} size={24} anchor="end" />
				<Pill x={1004} y={790} text="inheritance above one-half: can keep spreading" size={26} o={prog(f, KB.onehalf + 16, 10)} lit={1 - prog(f, KB.saying, 10)} />
				<MistakeChip x={140} y={900} text="stopping releases stops any gene drive" at={KB.saying} cross={KB.mistake} size={32} />
				{void lerp}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- item 2: local wheat ----------
type T2 = {a: number; b: number; c: number; d: number; e: number};
const STEM2 = (t: T2) => [
	{text: 'In a farming region, farmers grow about twenty different local wheat varieties that have been saved and replanted for generations.', at: t.a},
	{text: 'A genetically modified drought-tolerant wheat has given higher yields than the local varieties in dry-year field trials.', at: t.b},
	{text: 'A wild grass that can cross-pollinate with wheat grows along the field edges.', at: t.c},
	{text: 'It is proposed that the modified wheat replace the local varieties across the region.', at: t.d},
] as QBlock[];
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([...STEM2(t), {text: 'Evaluate this proposal, weighing its benefits against its effects on biodiversity. (6 marks)', at: t.e, para: true, weight: 700}], marks);
const S2 = (t: T2, marks: QMark[] = []) => qCheck(STEM2(t), marks);
const MARKS2 = ['higher yields than the local varieties in dry-year field trials', 'about twenty different local wheat varieties', 'can cross-pollinate with wheat', 'replace the local varieties across the region'];
qCheck(S2({a: 0, b: 0, c: 0, d: 0, e: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 9c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', region: "A region's farmers", modified: 'A modified', grass: 'a wild grass', proposed: "It's proposed", evaluate: 'Evaluate this proposal', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={830} at={KC.region - 6} />
				<Pl p={PLATES.wheat} cx={1670} cy={310} w={240} o={prog(f, KC.region, 14)} />
				<QText q={Q2({a: KC.region, b: KC.modified, c: KC.grass, d: KC.proposed, e: KC.evaluate})} x={140} y={250} w={1380} size={34} card={false} />
				<AnsBox x={140} y={690} w={1320} h={300} at={KC.evaluate + 20} label="answer" />
				<PauseHold id="attempt-two" at={KC.pause} cy={840} />
			</Overlay>
		</>
	);
};

// ---------- 9d. Feedback two ----------
const KD = cues(S('feedback-two'), {benefit: 'The benefit', steadier: 'steadier drought harvests', genetic: 'genetic diversity', never: 'may never return', gene: 'The gene could also', spread: 'spread into the wild grass', replacing: 'So replacing them all', provided: 'provided local varieties', noverdict: 'No verdict', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, e: -100};
const MINI = [{key: 'benefit', y0: 390, h: 92}, {key: 'biodiversity', y0: 492, h: 170}, {key: 'can it be undone?', y0: 672, h: 92}];
const VARIETY: RK[] = ['A', 'B', 'C', 'D', 'flow', 'B', 'C', 'A', 'D', 'flow'];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [KD.steadier, KD.genetic, KD.never];
	const toOne = (i: number) => f >= KD.genetic + 14 + i * 3;
	const grassRing = (i: number) => (i === 0 ? prog(f, KD.spread + 40, 10) : prog(f, KD.spread + 60 + i * 10, 10));
	return (
		<>
			<Heading text="Weigh it, then a verdict" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={180} at={-100} />
				<QText q={S2(ALL2, [{phrase: MARKS2[0], at: KD.steadier}, {phrase: MARKS2[1], at: KD.genetic}, {phrase: MARKS2[2], at: KD.spread}, {phrase: MARKS2[3], at: KD.replacing}])} x={140} y={226} w={2620} size={36} card={false} s={0.62} />
				{/* a one-column weighing board */}
				{MINI.map((r, i) => (
					<g key={i} opacity={prog(f, 4 + i * 4, 12)}>
						<rect x={100} y={r.y0} width={1080} height={r.h} rx={16} fill={CARD} stroke={vis(f, rowAt[i], i < 2 ? rowAt[i + 1] : KD.gene, 10) > 0.5 ? AMBER : EDGE} strokeWidth={2.5} />
						<Sx x={124} y={r.y0 + 54} text={r.key} size={30} color={f >= rowAt[i] ? INK : GREY_INK} weight={800} />
					</g>
				))}
				<Sx x={430} y={447} text="drought yield: shown in trials" size={30} color={f >= KD.genetic ? GREY_INK : INK} hand at={KD.steadier + 10} />
				{/* genetic level: twenty varieties to one */}
				<RingCluster x={530} y={575} kinds={VARIETY} cols={5} gap={36} r={11} o={prog(f, KD.genetic, 12)} kindOf={i => (toOne(i) ? 'A' : VARIETY[i])} />
				<Sx x={430} y={650} text="genetic level: 20 varieties to 1" size={26} color={f >= KD.spread ? GREY_INK : INK} hand at={KD.genetic + 20} />
				{/* gene flow into the wild grass */}
				<g opacity={prog(f, KD.gene, 12)}>
					<GrassTufts x={900} y={610} n={4} />
					{[0, 1, 2].map(i => <circle key={i} cx={lerp(640, 920 + i * 34, smooth(prog(f, KD.spread + i * 8, 30)))} cy={lerp(560, 560 - (i % 2) * 18, smooth(prog(f, KD.spread + i * 8, 30)))} r={6} fill="#f3d27a" stroke={AMBER_INK} strokeWidth={2} opacity={vis(f, KD.spread + i * 8, KD.spread + 40 + i * 8, 6)} />)}
					{[0, 1, 2].map(i => <circle key={`r${i}`} cx={912 + i * 34} cy={590} r={11} fill="#f6c35a" stroke={AMBER_INK} strokeWidth={3} opacity={grassRing(i)} />)}
				</g>
				<Sx x={880} y={650} text="gene flow to the wild grass" size={26} color={f >= KD.replacing ? GREY_INK : INK} hand at={KD.spread + 30} />
				<ReturnArrow x={530} y={736} w={120} kind="broken" draw={prog(f, KD.never, 20)} o={prog(f, KD.never, 8)} />
				<Sx x={640} y={730} text="lost varieties may never return" size={28} color={f >= KD.gene ? GREY_INK : INK} hand at={KD.never + 8} />
				{/* the verdict */}
				<VerdictBar x={1220} y={390} w={600} h={290} at={KD.replacing} size={32} lines={[
					[{t: 'As proposed (replace all): '}],
					[{t: 'not justified.', mark: KD.replacing + 20}],
					[{t: 'Growing it could be, '}, {t: 'provided', mark: KD.provided}],
					[{t: 'local varieties are kept (grown'}],
					[{t: 'or banked) and it is kept away from'}],
					[{t: 'the wild grass.'}],
				]} />
				<Pl p={PLATES.vault} cx={1420} cy={790} w={190} o={prog(f, KD.provided + 20, 12)} />
				<Sx x={1540} y={800} text="banked" size={28} color={GREY_INK} hand opacity={prog(f, KD.provided + 26, 10)} />
				<MistakeChip x={140} y={890} text="there are pros and cons" at={KD.noverdict} cross={KD.mistake} size={32} />
				{void KD.benefit}{void clusterPt}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 10. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', four: 'the same four questions', benefit: 'benefit and evidence', level: 'level and baseline', undone: 'can it be undone', who: 'who gains and', verdict: 'end with a verdict', check: 'evidence could check', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.benefit, t: 'benefit + evidence'},
		{at: KE.level, t: 'level + baseline'},
		{at: KE.undone, t: 'can it be undone?'},
		{at: KE.who, t: 'who gains, who carries the risk?'},
	];
	return (
		<>
			<Heading text="Weighing a biotechnology" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<rect x={140} y={215 + i * 118} width={980} height={94} rx={22} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<Sx x={190} y={278 + i * 118} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} />
						<Sx x={250} y={278 + i * 118} text={s.t} size={42} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.verdict, 12)}>
					<path d="M1150,262 L1180,262 L1180,640 L1150,640" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
					<line x1={1180} y1={451} x2={1220} y2={451} stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={1236} y={466} text="verdict, provided that ..." size={44} color={AMBER_INK} hand />
					<Balance x={1720} y={600} s={0.9} tilt={12} weight={1} />
				</g>
				<GTag x={1236} y={500} text="checkable?" at={KE.check} size={28} />
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={640} y={790} width={1180} height={160} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.straw} cx={720} cy={870} w={80} />
					<Pl p={PLATES.brush} cx={830} cy={870} w={120} />
					<Sx x={920} y={862} text="Next: artificial insemination and" size={38} color={INK} hand />
					<Sx x={920} y={912} text="artificial pollination compared" size={38} color={INK} hand />
				</g>
				{void KE.four}{void Brace}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 11. Key notes ----------
const NOTES = [
	'To weigh a biotechnology, ask of each case: How big is the benefit, and how strong is the evidence? Which level of biodiversity changes, compared with what? Can the change be undone? Who gains, and who carries the risk?',
	'Reversibility matters: a benefit given up can usually be regained, but an extinction cannot, and alleles that spread into a wild population can be very hard to remove. A possibly permanent risk needs stronger evidence.',
	'Bt cotton (Australia): insecticide use down about 85% (with better pest management); can leave more insect species than sprayed cotton; resistance (a genetic change in the pest) slowed by refuges; growers can stop planting it. Model verdict: to a large extent justified, provided refuges keep resistance rare.',
	'Malaria gene drive: huge need, but lab-cage evidence only; target mosquito population down if the drive works, but local species loss and ecosystem effects uncertain; spreads by itself, so may not be recallable; risk crosses borders. Model verdict: not yet justified for release; staged trials could be, if each stage shows no serious harm and communities agree.',
	'End an evaluation with a verdict and its condition ("to a large extent", "provided that"), not "there are pros and cons". Make the condition something evidence could check (for example, yearly resistance monitoring in Bt cotton).',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="A benefit can be paused; an extinction can't be undone. Verdict, provided that ..." tag="ask the same four questions of each case, then give a verdict with a checkable condition" size={29} aidTop={850} />
);
