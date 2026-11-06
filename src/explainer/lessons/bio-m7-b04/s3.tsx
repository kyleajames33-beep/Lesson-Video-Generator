// M7 B04 scenes 12a to 14: two unseen exam items (an FMD outbreak in an exporting country: distinguish direct and
// indirect effects and say which costs more; district-wide wheat rust: one biological and one agricultural cause),
// each whole on screen through "Pause here to answer." and its 10 s countdown, with no plates or ledger; brief
// feedback with the givens underlined in the question strip as they are used and one crossed classic mistake (no
// givens card); the decision rule with the handoff to plant defence; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CTag, CardBox, Crop, CurveArrow, DoorBar, DrawPath, EDGE, FEAT, GREY_INK, GTag, Gate, INK, PLATES, Pl, SideWash, SporeDrift, Sx, TEAL, WText, WaterFilm, prog, ptOf, tw, vis} from './parts';

/** Quality fix (6 Nov): a small herd of plain dots (cols x rows), popping in from `at`; `hollow` empties them (culled). */
const Herd: React.FC<{x: number; y: number; cols: number; rows: number; sp?: number; r?: number; at: number; color?: string; hollow?: number}> = ({x, y, cols, rows, sp = 26, r = 9, at, color = '#7d6646', hollow = 0}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const h = prog(f, hollow || 1e9, 12);
	return (
		<g>
			{Array.from({length: cols * rows}, (_, i) => <circle key={i} cx={x + (i % cols) * sp} cy={y + Math.floor(i / cols) * sp} r={r} fill={color} fillOpacity={1 - 0.85 * h} stroke={color} strokeWidth={2} opacity={prog(f, at + Math.floor(i / 2), 6)} />)}
		</g>
	);
};

// ---------- item 1: an FMD outbreak in Country P ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'Country P exports most of the beef it produces and has been free of foot-and-mouth disease (FMD) for decades.', at: t.a},
	{text: 'FMD is confirmed in one herd of 40 cattle.', at: t.b},
	{text: 'All 40 cattle are culled, together with 2000 healthy cattle on nearby farms.', at: t.c},
	{text: 'Three trading partners suspend imports of beef from Country P.', at: t.d},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Distinguish between the direct and indirect effects of this outbreak on agricultural production. Explain which is likely to have the greater economic cost. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['one herd of 40 cattle', '2000 healthy cattle on nearby farms', 'suspend imports of beef', 'exports most of the beef it produces'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 12a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', country: 'A country that exports', confirmed: 'The disease is confirmed', all: 'All 40', three: 'three trading partners', dist: 'Distinguish between', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	// Quality fix (6 Nov): the first stem sentence now lands with the card on "First" (it was keyed 1.3 s later to
	// "A country that exports", so the card sat empty), and the givens are drawn beside the stem as they are read:
	// the beef going to export, one herd of 40, 2000 healthy cattle nearby, both culled, and the barred container.
	// Nothing is labelled direct or indirect; that is the answer.
	const f = useCurrentFrame();
	const t: T1 = {a: KA.first, b: KA.confirmed, c: KA.all, d: KA.three, q: KA.dist};
	const h = hold('attempt');
	const ct = {cx: 1690, cy: 320, w: 200};
	const d0 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[0]);
	const d1 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[1]);
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1110} size={36} card={false} />
				<Pl p={PLATES.cattle} cx={1400} cy={320} w={210} o={prog(f, KA.first + 8, 14)} />
				<Pl p={PLATES.container} cx={ct.cx} cy={ct.cy} w={ct.w} o={prog(f, KA.country + 14, 14)} />
				<CurveArrow a={[1510, 300]} b={[1585, 300]} at={KA.country + 24} bow={-20} color={INK} width={4} />
				<Sx x={1545} y={440} text="most beef exported" size={30} color={INK} hand weight={700} anchor="middle" at={KA.country + 30} />
				<Herd x={1320} y={500} cols={8} rows={5} sp={24} r={8} at={KA.confirmed} hollow={KA.all} />
				<Sx x={1404} y={650} text="one herd: 40" size={30} color={INK} hand weight={700} anchor="middle" at={KA.confirmed + 10} />
				<Herd x={1540} y={500} cols={10} rows={5} sp={24} r={8} at={KA.all + 30} color="#8e9399" hollow={KA.all + 60} />
				<Sx x={1648} y={650} text="2000 healthy nearby" size={30} color={INK} hand weight={700} anchor="middle" at={KA.all + 34} />
				<Sx x={1540} y={692} text="all culled" size={30} color={GREY_INK} hand weight={700} anchor="middle" at={KA.all + 60} />
				<DoorBar a={d0} b={d1} at={KA.three + 10} />
				<Sx x={1690} y={232} text="imports suspended" size={28} color={GREY_INK} hand weight={700} anchor="middle" at={KA.three + 14} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={590} w={1110} size={34} card={false} />
				<AnsBox x={140} y={735} w={1340} h={270} at={KA.dist + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const KB = cues(S('feedback-one'), {direct: 'Direct effects are', sick: 'the 40 sick cattle', indirect: 'Indirect effects come', healthy: 'the 2,000 healthy', lost: 'lost beef exports', far: 'cost far more', exports: 'the country exports most', counting: 'Counting the healthy', mistake: 'classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	// Quality fix (6 Nov): each answer line now has its picture. Direct: the red cattle and the 40 sick animals (teal),
	// emptied on "culled". Indirect: 2000 healthy cattle (grey dots, each 50), the container barred on "lost beef
	// exports", then a larger framed verdict.
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'one herd of 40 cattle', at: KB.sick, color: TEAL},
		{phrase: '2000 healthy cattle on nearby farms', at: KB.healthy, color: AMBER},
		{phrase: 'suspend imports of beef', at: KB.lost, color: AMBER},
		{phrase: 'exports most of the beef it produces', at: KB.exports, color: AMBER},
	];
	const mw = tw('healthy culled cattle = direct', 30) + 48;
	const ct = {cx: 1600, cy: 520, w: 280};
	const d0 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[0]);
	const d1 = ptOf(PLATES.container, ct.cx, ct.cy, ct.w, FEAT.doors[1]);
	const ldim = vis(f, KB.indirect, undefined, 10);
	return (
		<>
			<Heading text="Direct or indirect?" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={198} w={2200} size={34} card={false} s={0.74} />
				<SideWash x0={975} x1={1800} y0={360} y1={810} o={prog(f, KB.exports, 16)} />
				<Gate at={0} x={960} y0={370} y1={800} labelAt={6} sidesAt={10} sideY={836} />
				<CTag x={130} y={380} text="direct: 40 infected cattle, lost production, then culled" at={KB.sick + 6} color={TEAL} size={32} maxW={780} dim={ldim} />
				<g opacity={1 - 0.45 * ldim}>
					<Pl p={PLATES.cattle} cx={320} cy={640} w={320} o={prog(f, KB.direct + 10, 14)} />
					<Herd x={560} y={565} cols={8} rows={5} sp={30} r={10} at={KB.sick} color={TEAL} hollow={KB.sick + 70} />
					<Sx x={665} y={740} text="40 sick, then culled" size={32} color={TEAL} hand weight={700} anchor="middle" at={KB.sick + 12} />
				</g>
				<CTag x={990} y={380} text="indirect: 2000 healthy cattle culled" at={KB.healthy + 6} color={AMBER_INK} size={32} maxW={790} dim={prog(f, KB.lost, 10)} />
				<Herd x={1010} y={480} cols={10} rows={4} sp={28} r={9} at={KB.healthy + 10} color="#8e9399" hollow={KB.healthy + 40} />
				<Sx x={1010} y={612} text="each dot: 50 healthy cattle" size={26} color={GREY_INK} weight={600} at={KB.healthy + 16} />
				<Pl p={PLATES.container} cx={ct.cx} cy={ct.cy} w={ct.w} o={prog(f, KB.lost, 14)} />
				<DoorBar a={d0} b={d1} at={KB.lost + 12} />
				<CTag x={1600} y={630} text="indirect: lost exports" at={KB.lost + 6} color={AMBER_INK} size={32} anchor="middle" dim={prog(f, KB.exports, 10)} />
				<CTag x={1385} y={712} text="indirect larger: export dependent" at={KB.exports + 8} color={AMBER_INK} size={40} anchor="middle" fill="#fff3d9" />
				<MistakeChip x={130} y={880} text="healthy culled cattle = direct" at={KB.counting} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="never infected: a cost of control" at={KB.mistake + 16} size={28} />
				{void KB.far}
			</Overlay>
		</>
	);
};

// ---------- item 2: a district of one wheat variety ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Nearly every farm in a wheat-growing district plants the same wheat variety.', at: t.a},
	{text: 'A new strain of a rust fungus appears that is able to infect this variety.', at: t.b},
	{text: 'Its spores are carried by wind, and the growing season is warm and wet.', at: t.c},
	{text: 'Wheat yields fall across the whole district.', at: t.d},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Explain ONE biological cause and ONE agricultural cause of the losses in this district. (3 marks)', at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0, q: 0}), ['able to infect this variety', 'carried by wind', 'warm and wet', 'plants the same wheat variety'].map(phrase => ({phrase, at: 0})));

// ---------- 12c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', nearly: 'Nearly every farm', strain: 'A new strain', spores: 'Its spores travel', yields: 'Yields fall', explain: 'Explain one biological', pause: 'Pause here to answer'});
const MONO = {...PLATES.field, box: [200, 709, 1000, 1291] as [number, number, number, number]};
export const SceneAttemptTwo: React.FC = () => {
	// Quality fix (6 Nov): the first stem sentence lands with the card (it waited about a second for "Nearly every
	// farm"), and the givens are drawn beside the stem as read: one variety on every farm (the uniform rows), the new
	// rust strain on a leaf, wind-borne spores and wet weather, and the fall in yield. No cause is labelled.
	const f = useCurrentFrame();
	const t: T2 = {a: KC.second + 6, b: KC.strain, c: KC.spores, d: KC.yields, q: KC.explain};
	const h = hold('attempt-two');
	const sk = PLATES.wheatSick;
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1110} size={36} card={false} />
				<Crop p={MONO} cx={1545} cy={345} w={420} id="b04-a2-mono" o={prog(f, KC.nearly, 14)} />
				<Sx x={1545} y={540} text="one variety, every farm" size={30} color={INK} hand weight={700} anchor="middle" at={KC.nearly + 12} />
				<Crop p={sk} cx={1430} cy={620} w={(sk.box[2] - sk.box[0]) * (280 / (sk.box[3] - sk.box[1]))} rot={-90} id="b04-a2-leaf" o={prog(f, KC.strain, 14)} />
				<Sx x={1430} y={712} text="new rust strain" size={30} color={INK} hand weight={700} anchor="middle" at={KC.strain + 12} />
				<SporeDrift sx={1560} sy={600} x1={1800} band={26} at={KC.spores} n={12} period={90} />
				<WaterFilm x0={1620} x1={1780} y={662} at={KC.spores + 70} />
				<Sx x={1700} y={712} text="wind; warm, wet" size={30} color={INK} hand weight={700} anchor="middle" at={KC.spores + 20} />
				{f >= KC.yields ? <DrawPath d="M1380,742 L1380,800 M1362,782 L1380,802 L1398,782" at={KC.yields} dur={12} color={INK} width={5} /> : null}
				<Sx x={1410} y={790} text="yields fall district-wide" size={30} color={INK} hand weight={700} at={KC.yields + 6} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={520} w={1110} size={34} card={false} />
				<AnsBox x={140} y={640} w={1100} h={365} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const KD = cues(S('feedback-two'), {bio: 'Biological', strain: 'the new strain can infect', wind: 'wind spreads', wet: 'Wet weather helps', agri: 'Agricultural', every: 'every farm grows', blaming: 'Blaming the weather', mistake: 'classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
/** One answer-table row (label column, hand answer wrapped), bright while current. */
const Row: React.FC<{y: number; h: number; label: string; text: string; at: number; lit: number; color: string}> = ({y, h, label, text, at, lit, color}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={120} y={y} width={1680} height={h} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={150} y={y + 58} text={label} size={34} color={on ? color : GREY_INK} weight={800} at={-100} />
			<WText x={470} y={y + 58} text={text} size={36} maxW={1290} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'able to infect this variety', at: KD.strain, color: TEAL},
		{phrase: 'carried by wind', at: KD.wind, color: TEAL},
		{phrase: 'warm and wet', at: KD.wet, color: TEAL},
		{phrase: 'plants the same wheat variety', at: KD.every, color: AMBER},
	];
	const mw = tw('the wet weather caused it', 30) + 48;
	return (
		<>
			<Heading text="Biology plus farming" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={198} w={2200} size={34} card={false} s={0.74} />
				<Row y={360} h={130} label="biological" text="a strain that infects it, wind-borne spores (helped by wet weather)" at={KD.bio + 4} lit={vis(f, KD.bio, KD.agri, 10)} color={TEAL} />
				<Row y={520} h={130} label="agricultural" text="one variety everywhere, so no resistant plants to slow spread" at={KD.agri + 4} lit={vis(f, KD.agri, KD.blaming, 10)} color={AMBER_INK} />
				<MistakeChip x={130} y={720} text="the wet weather caused it" at={KD.blaming} cross={KD.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={726} text="conditions help; the pathogen causes" at={KD.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', name: 'name the cause', follow: 'follow the effects', next: 'Next, how a plant'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.name, text: 'name the cause: pathogen, host, conditions, farming'},
		{at: KE.follow, text: 'follow the effects: on the farm, then past the gate'},
	];
	return (
		<>
			<Heading text="Name the cause, follow the effects" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = 280 + i * 170;
					const dim = 1 - 0.35 * prog(f, steps[i + 1]?.at ?? KE.next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(0,${(1 - o) * 18})`}>
							<rect x={140} y={y} width={1640} height={120} rx={30} fill={i === 1 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={190} y={y + 78} text={`${i + 1}`} size={50} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={270} y={y + 80} text={s.text} size={46} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={620} y={820} w={1200} text="Next: how a banksia defends itself" at={KE.next}>
					<g opacity={prog(f, KE.next, 12)}><Pl p={PLATES.banksia} cx={690} cy={862} w={62} /></g>
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
// Quality fix (6 Nov): nine one-line bullets at 33 px replace five paragraphs at 29 px. Same content, split.
const NOTES = [
	'Disease needs a pathogen, a host it can infect and the right conditions (rust spores need water).',
	'Farming adds risk: one variety over a large area (monoculture), and moving plants, soil and machinery.',
	'Direct effects hit the infected crop or animals: lower yield, lower quality, control costs.',
	'Rust takes sugars and leaf area; root-knot nematode galls squeeze the xylem.',
	'Myrtle rust (fungus, Australia 2010): little resistance; spread by wind and nursery plants; here to stay.',
	'Myrtle rust effects: fungicide, lost lemon myrtle and tea tree crops, native guava critically endangered.',
	'Foot-and-mouth disease (virus; cloven-hoofed animals): blisters, lameness, less milk and meat.',
	'Indirect FMD effects (healthy animals culled, movement bans, closed exports) usually cost more for an exporter.',
	'Assess an effect: how big, how long, how far it reaches.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Count past the farm gate." tag="the sick plant or animal is only the first cost" size={33} aidTop={820} />
);
