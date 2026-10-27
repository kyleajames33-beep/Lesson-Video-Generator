// M7 B12 scenes 12a to 14: two unseen exam items (a survival trend under yearly spraying with a data table; sterile
// males against Wolbachia in two towns), each whole on screen through "Pause here to answer." and its 10 s countdown
// with nothing answer-bearing; brief feedback with the givens underlined in the question strip as they are used and one
// crossed classic mistake (no givens card); the decision rule beside the small wheel with the handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ARow} from '../bio-m7-b06/s3';
import {S, hold} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, CARD, CardBox, DrawPath, EDGE, GREY_INK, GTag, INK, MistakeChip, Pl, PopRow, StepChip, Sx, TEAL, WText, Wheel, between, clamp01, prog, tw, vis, BITE,
} from './parts';
import type {WG} from './parts';

// ---------- item 1: insecticide X ----------
type T1 = {a: number; b: number; q: number};
const STEM1 = (t: T1): QBlock[] => [
	{text: 'A town sprayed insecticide X once a year to control the Aedes aegypti mosquitoes that carry dengue virus.', at: t.a},
	{text: 'Each year, a sample of mosquitoes was caught and exposed to a standard dose of insecticide X in the laboratory.', at: t.b},
];
const DEM1 = (t: T1, para = false): QBlock[] => [{text: "Explain the trend in the data, and propose one change to the town's mosquito control program. Justify your proposal. (4 marks)", at: t.q, weight: 700, para}];
const ALL1: T1 = {a: -100, b: -100, q: -100};
qCheck([...STEM1(ALL1), ...DEM1(ALL1)], [{phrase: 'sprayed insecticide X once a year', at: 0}, {phrase: 'propose one change', at: 0}]);
const YEARS = ['2016', '2018', '2020', '2022'], VALS = [2, 9, 38, 75];
/** The data table: year row and survival row; value k writes at vAt[k]. `markAt` underlines the survival values. */
const SurvTable: React.FC<{x: number; y: number; vAt: number[]; at: number; s?: number; markAt?: number}> = ({x, y, vAt, at, s = 1, markAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const hw = 560, cw = 150, rh = 60;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={0} width={hw + 4 * cw} height={rh * 2} rx={12} fill={CARD} stroke={INK} strokeWidth={2.5} />
			<line x1={0} x2={hw + 4 * cw} y1={rh} y2={rh} stroke={EDGE} strokeWidth={2} />
			{[0, 1, 2, 3, 4].map(i => <line key={i} x1={hw + i * cw} x2={hw + i * cw} y1={0} y2={rh * 2} stroke={EDGE} strokeWidth={2} />)}
			<text x={18} y={rh * 0.66} style={{fontFamily: '"Inter Tight"', fontWeight: 700, fontSize: 28}} fill={INK}>Year</text>
			<text x={18} y={rh * 1.66} style={{fontFamily: '"Inter Tight"', fontWeight: 600, fontSize: 26}} fill={INK}>Mosquitoes surviving the standard dose (%)</text>
			{YEARS.map((yv, i) => <text key={yv} x={hw + i * cw + cw / 2} y={rh * 0.66} textAnchor="middle" style={{fontFamily: '"Inter Tight"', fontWeight: 700, fontSize: 28}} fill={INK}>{yv}</text>)}
			{VALS.map((v, i) => <text key={v} x={hw + i * cw + cw / 2} y={rh * 1.66} textAnchor="middle" opacity={prog(f, vAt[i], 10)} style={{fontFamily: '"Inter Tight"', fontWeight: 600, fontSize: 28}} fill={INK}>{v}</text>)}
			{markAt !== undefined && f >= markAt ? <DrawPath d={`M${hw + 20},${rh * 1.82} L${hw + 4 * cw - 20},${rh * 1.82}`} at={markAt} dur={16} color={AMBER} width={5} /> : null}
		</g>
	);
};
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', town: 'A town sprayed', each: 'Each year, mosquitoes', v2: 'Two per cent', v9: 'nine per cent', v38: 'thirty-eight per', v75: 'seventy-five per', explain: 'Explain this trend', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.town, b: KA.each, q: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1640} size={34} card={false} />
				<SurvTable x={140} y={360} vAt={[KA.v2, KA.v9, KA.v38, KA.v75]} at={KA.v2 - 20} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={560} w={1640} size={34} card={false} />
				<AnsBox x={140} y={660} w={1340} h={340} at={KA.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

const KB = cues(S('feedback-one'), {rose: 'Survival rose', selected: 'spraying selected resistant', remove: 'remove breeding water', saying: 'Saying the mosquitoes', classic: 'classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'sprayed insecticide X once a year', at: KB.selected, color: AMBER},
		{phrase: 'propose one change', at: KB.remove, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('the mosquitoes got used to the spray', 30) + 48;
	return (
		<>
			<Heading text="Selected, not used to it" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={150} at={-100} />
				<QText q={qCheck([...STEM1(ALL1), ...DEM1(ALL1)], marks)} x={140} y={194} w={2260} size={34} card={false} s={0.72} />
				<SurvTable x={120} y={320} vAt={[-100, -100, -100, -100]} at={-100} s={0.72} markAt={KB.rose + 4} />
				{VALS.map((v, i) => {
					const hgt = v * 2.2 * prog(f, 6 + i * 6, 16);
					return (
						<g key={v}>
							<rect x={1300 + i * 110} y={480 - hgt} width={70} height={hgt} rx={6} fill={AMBER} opacity={0.8} />
							<Sx x={1335 + i * 110} y={505} text={YEARS[i]} size={20} color={GREY_INK} weight={600} anchor="middle" at={-100} />
							<Sx x={1335 + i * 110} y={470 - hgt} text={`${v}%`} size={20} color={INK} weight={700} anchor="middle" at={6 + i * 6} />
						</g>
					);
				})}
				<ARow y={540} text="trend: survival rose from 2% to 75%" at={KB.rose + 10} lit={lit(KB.rose + 10, KB.selected)} w={1680} size={32} color={AMBER_INK} />
				<ARow y={640} text="spraying selected resistance alleles that were already present; survivors bred; allele frequency rose each generation" at={KB.selected + 10} lit={lit(KB.selected + 10, KB.remove)} w={1680} size={28} color={AMBER_INK} />
				<ARow y={740} text="change: remove breeding water, or use Wolbachia; neither is defeated by insecticide resistance" at={KB.remove + 10} lit={lit(KB.remove + 10, KB.saying)} w={1680} size={30} color={TEAL} />
				<MistakeChip x={130} y={880} text="the mosquitoes got used to the spray" at={KB.saying} cross={KB.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="individuals don't adapt; the population changes" at={KB.classic + 16} size={24} />
			</Overlay>
		</>
	);
};

// ---------- item 2: two towns ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2): QBlock[] => [
	{text: 'Two towns use different methods against Aedes aegypti, which carries dengue virus.', at: t.a},
	{text: 'Town P releases sterile male Aedes every week for two years, then stops.', at: t.b, para: true},
	{text: 'Town Q releases male and female Aedes carrying Wolbachia bacteria for four months, then stops.', at: t.c, para: true},
	{text: 'Two years after releases end: in town P, Aedes numbers have returned to their original level; in town Q, about 90% of Aedes carry Wolbachia and local dengue cases remain rare.', at: t.d, para: true},
];
const DEM2 = (t: T2, para = false): QBlock[] => [{text: 'Explain the difference between the long-term outcomes in the two towns. (3 marks)', at: t.q, weight: 700, para}];
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
qCheck([...STEM2(ALL2), ...DEM2(ALL2)], ['sterile male', 'then stops', 'carrying Wolbachia', 'about 90%', 'local dengue cases remain rare'].map(phrase => ({phrase, at: 0})));
const KC = cues(S('attempt-two'), {second: 'Second', p: 'Town P releases', q: 'Town Q releases', later: 'Two years later', explain: 'Explain the difference', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.second + 10, b: KC.p, c: KC.q, d: KC.later, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={250} w={1640} size={34} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={620} w={1640} size={34} card={false} />
				<AnsBox x={140} y={680} w={1340} h={320} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

const KD = cues(S('feedback-two'), {sterile: 'Sterile males leave', passes: 'passes from mothers', rarely: 'rarely pass on', saying: 'Saying Wolbachia', classic: 'classic mistake'});
const Col: React.FC<{x: number; title: string; text: string; at: number; lit: number; color: string; children?: React.ReactNode}> = ({x, title, text, at, lit, color, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = clamp01(lit) > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.7)}>
			<rect x={x} y={380} width={820} height={440} rx={20} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={x + 30} y={430} text={title} size={34} color={color} hand weight={700} at={-100} />
			<WText x={x + 30} y={490} text={text} size={30} maxW={760} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
			{children}
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'sterile male', at: KD.sterile, color: AMBER},
		{phrase: 'then stops', at: KD.sterile + 14, color: AMBER},
		{phrase: 'carrying Wolbachia', at: KD.passes, color: TEAL},
		{phrase: 'about 90%', at: KD.passes + 14, color: TEAL},
		{phrase: 'local dengue cases remain rare', at: KD.rarely, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('Wolbachia kills the mosquitoes', 30) + 48;
	const refill = prog(f, KD.sterile + 40, 60);
	return (
		<>
			<Heading text="Gone, or kept going" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={210} at={-100} />
				<QText q={qCheck([...STEM2(ALL2), ...DEM2(ALL2)].map(b => ({...b, para: false})), marks)} x={140} y={194} w={2260} size={34} card={false} s={0.72} />
				<Col x={100} title="town P" text="sterile males leave no offspring; when releases stop, survivors breed back" at={KD.sterile + 10} lit={lit(KD.sterile + 10, KD.passes)} color={AMBER_INK}>
					<PopRow x={160} y={740} n={10} dx={70} w={56} alive={i => (i < 3 ? 1 : refill)} />
				</Col>
				<Col x={1000} title="town Q" text="passed to eggs; uninfected females mated by infected males: eggs don't hatch; Wolbachia stays" at={KD.passes + 10} lit={lit(KD.passes + 10, KD.saying)} color={TEAL}>
					<PopRow x={1060} y={740} n={10} dx={70} w={56} teal={i => (i === 4 ? 0 : 1)} />
					<Sx x={1030} y={800} text="infected Aedes rarely transmit dengue" size={26} color={TEAL} hand weight={700} at={KD.rarely + 6} />
				</Col>
				<MistakeChip x={130} y={900} text="Wolbachia kills the mosquitoes" at={KD.saying} cross={KD.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={906} text="the mosquitoes stay; dengue is blocked" at={KD.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {follow: 'follow the life', find: 'find the step', weigh: 'weigh how long', next: 'Next, what'});
const WD: WG = {cx: 360, cy: 560, R: 170, ps: 110};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [{at: KE.follow, text: 'follow the life cycle'}, {at: KE.find, text: 'find the step it attacks'}, {at: KE.weigh, text: 'weigh how long it lasts against harm'}];
	return (
		<>
			<Heading text="Cycle, step, weigh" at={4} size={56} />
			<Overlay>
				<Wheel g={WD} flood={1} bite={{o: 1}} at={0} labelSize={18} breaks={[{deg: between(0), at: -100}, {deg: 0, at: -100}, {deg: 180, at: -100}, {deg: BITE, at: -100, color: TEAL}]} />
				{chips.map((c, i) => <StepChip key={i} x={640} y={250 + i * 140} w={1180} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={720} y={880} w={1100} text="Next: what limits malaria or dengue control?" at={KE.next}>
					<Pl p={PLATES.anoph} cx={756} cy={922} w={44} />
					<Pl p={PLATES.aedes} cx={800} cy={922} w={44} />
				</NextChip>
				{void AMBER_INK}{void prog}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Vector: a living carrier. Dengue (a virus) is carried by Aedes aegypti; malaria (Plasmodium) by Anopheles. A mosquito transmits only if it bites an infected person, survives while the pathogen multiplies, then bites again. Cut infection with fewer mosquitoes, fewer bites, or mosquitoes that rarely pass it on.',
	'Aedes life cycle: eggs on container walls above the water (survive months dry); rain floods them; larvae and pupae in water; adult in about a week; only females bite. Environmental management: remove breeding water (tip out containers, screen tanks, clear gutters); cheap, no chemicals, needs nearly every household (public health campaigns).',
	'Pesticides: larvicides in water; adult sprays; insecticides attack insect nerves. Bed nets for night-biting Anopheles; indoor spraying of resting sites against both (in Queensland, against day-biting Aedes in dengue outbreaks). Limits: resistance by natural selection (DDT; pyrethroids today); harm to other insects; DDT builds up in food chains (thin raptor eggshells).',
	'Sterile insect technique: release radiation-sterilised males; eggs don\'t hatch; species-specific; releases must continue. Genetic engineering: males with an inserted gene that kills their daughters; releases must continue. Gene drives: spread by themselves, hard to reverse, not yet released.',
	"Wolbachia (not genetic engineering): a natural bacterium that blocks dengue in Aedes; passed through eggs; an infected female's eggs hatch whichever male she mates with, but eggs of uninfected females mated by infected males don't hatch, so it spreads and persists after releases stop (Townsville, from 2014: local dengue rare, though not zero). Evaluate by transmission cut, how long, cost and harm; combine methods.",
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Fewer mosquitoes, fewer bites, or mosquitoes that rarely pass it on." tag="Follow the life cycle; find the step a method attacks." size={22} aidTop={860} />
);
