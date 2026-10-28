// M7 G01 (Biology practice) scenes 4a to 6: question 3, cholera after a flood (card and weekly graph through the 10 s
// countdown); reading the graph against arrows A and B (amber and teal segments, reading guides, the incubation
// bracket) with answer (a); the route and the link (b10's chain, the faeces-water-mouth loop with the tank plate, the
// travel cut, a fenced house for quarantine and unfound carriers outside it) with answer (b) line by line; the crossed
// quarantine chip; the decision board and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {
	AMBER, AMBER_INK, AnsLines, CARD, CTag, CardBox, Chain3, CholGraph, DotField, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, PLATES, Pl, QStrip, Sx, TEAL, TERRA,
	Tank, chainX, prog, pulse, vis, wx, wy,
} from './parts';
import type {QBlock, QMark, WG3} from './parts';

type T3 = {s1: number; s2: number; a: number; b: number};
const Q3B = (t: T3): QBlock[] => [
	{text: "After a flood, Town V's piped water supply and toilets were damaged, and an outbreak of cholera began. Cholera is caused by the bacterium Vibrio cholerae. Symptoms begin 12 hours to 5 days after the bacteria are swallowed. Most infected people have mild or no symptoms, but they still pass the bacteria in their faeces for up to 10 days.", at: t.s1},
	{text: 'In week 3, health workers quarantined the household of every person with cholera for 5 days (measure A). In week 6, all drinking water was chlorinated and the toilets were repaired (measure B).', at: t.s2, para: true},
];
const Q3D = (t: T3): QBlock[] => [
	{text: '(a) Using the graph, identify which measure was followed by a decrease in new cases. (1 mark)', at: t.a, weight: 700, para: true},
	{text: '(b) Justify the use of environmental management rather than quarantine to control this outbreak. (3 marks)', at: t.b, weight: 700, para: true},
];
const ALL3: T3 = {s1: -100, s2: -100, a: -100, b: -100};
const Q3ALL = [...Q3B(ALL3), ...Q3D(ALL3)];
qCheck(Q3ALL, ['12 hours to 5 days', 'chlorinated', 'toilets were repaired', 'quarantined the household of every person with cholera', 'mild or no symptoms'].map(phrase => ({phrase, at: 0})));

// ---------- 4a. Question 3 ----------
const KQ = cues(S('q3-question'), {q: 'Question three', flood: 'After a flood', graph: 'The graph shows', w3: 'In week three', w6: 'In week six', identify: 'identify which measure', justify: 'Then justify using', pause: 'Pause here to answer'});
const GQ: WG3 = {x: 200, y: 570, w: 780, h: 190};
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	const t: T3 = {s1: KQ.flood, s2: KQ.w3, a: KQ.identify, b: KQ.justify};
	return (
		<>
			<Heading text="Question 3" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<CardBox x={100} y={170} w={1720} h={850} at={KQ.q + 4} />
				<Pl p={PLATES.vibrio} cx={220} cy={232} w={150} o={prog(f, KQ.flood, 14)} />
				<Pl p={PLATES.tank} cx={370} cy={232} w={60} o={prog(f, KQ.flood + 8, 14)} />
				<GTag x={420} y={214} text="Vibrio cholerae, drawn far larger than real" at={KQ.flood + 14} size={18} />
				<QText q={qCheck(Q3B(t), [])} x={140} y={330} w={1640} size={25} card={false} />
				<CholGraph g={GQ} at={KQ.graph} size={16} />
				<GTag x={760} y={540} text="illustrative data" at={KQ.graph + 10} size={18} />
				<QText q={qCheck(Q3D(t), [])} x={1080} y={600} w={700} size={25} card={false} />
				<AnsBox x={1080} y={790} w={500} h={90} at={KQ.identify + 30} />
				<AnsBox x={1080} y={890} w={500} h={120} at={KQ.justify + 40} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
				{void KQ.w6}
			</Overlay>
		</>
	);
};

// ---------- 4b. Read it against the arrows ----------
const KG = cues(S('q3-graph'), {read: 'Read the graph', rising: 'kept rising', fell: 'cases fell within', five: 'five days later'});
const GB: WG3 = {x: 190, y: 380, w: 860, h: 400};
export const SceneQ3Graph: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: '12 hours to 5 days', at: KG.five, color: AMBER}];
	return (
		<>
			<Heading text="Read it against the arrows" at={4} size={48} />
			<Overlay>
				<Badge text="Epidemic curve" at={4} />
				<QStrip blocks={Q3ALL} marks={marks} h={150} />
				<CholGraph g={GB} at={0} size={20} pulseA={KG.rising - 10} pulseB={KG.fell - 6}
					seg={[{from: 3, to: 6, color: AMBER, at: KG.rising}, {from: 6, to: 10, color: TEAL, at: KG.fell + 6}]}
					guides={[{wk: 3, at: KG.rising + 10, out: KG.fell}, {wk: 6, at: KG.rising + 20}, {wk: 7, at: KG.fell + 20}, {wk: 10, at: KG.fell + 30}]} />
				<CTag x={430} y={330} text="after A: still rising" at={KG.rising + 16} color={AMBER_INK} size={28} dim={prog(f, KG.fell, 10)} out={KG.five} />
				<CTag x={820} y={420} text="after B: falling within a week" at={KG.fell + 24} color={TEAL} size={28} />
				{f >= KG.five ? <DrawPath d={`M${wx(GB, 6)},${wy(GB, 40) + 20} L${wx(GB, 6)},${wy(GB, 40) + 6} L${wx(GB, 7)},${wy(GB, 40) + 6} L${wx(GB, 7)},${wy(GB, 40) + 20}`} at={KG.five} dur={12} color={AMBER_INK} width={4} /> : null}
				<CTag x={500} y={330} text="infected before B, ill after B" at={KG.five + 10} color={AMBER_INK} size={28} />
				<AnsLines x={1140} y={330} w={680} h={420} label="(a)" at={6} lines={[{t: 'After measure A, cases rose from 15 to 38.', at: KG.rising + 30}, {t: 'Measure B (chlorination and toilet repair) was followed by a fall: 38 in week 6, 22 in week 7, 1 by week 10.', at: KG.fell + 40}]} size={28} />
				{void KG.read}
			</Overlay>
		</>
	);
};

// ---------- 4c. Find the route, then the link ----------
const KJ = cues(S('q3-justify'), {now: 'Now justify', faeces: 'contaminated with faeces', chlorine: 'Chlorine kills', toilets: 'repaired toilets', travel: 'travel link', known: 'known cases', mild: 'mild or no', water: 'the water keeps'});
const CH = {x: 280, y: 420};
/** The faeces, water, mouth loop over the chain's travel link, with the water tank plate. */
const Loop: React.FC<{at: number; pulseAt?: number}> = ({at, pulseAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const cx = chainX(CH.x, 1), cy = CH.y + 150;
	const pu = pulseAt !== undefined ? pulse(f, pulseAt, 40) : 0;
	return (
		<g opacity={o}>
			<ellipse cx={cx} cy={cy} rx={220} ry={80} fill="none" stroke={TERRA} strokeWidth={4 + 4 * pu} strokeDasharray="12 8" />
			{[['faeces', -220, 0], ['water', 0, 80], ['mouth', 220, 0]].map(([t, dx, dy]) => (
				<g key={t as string}>
					<rect x={cx + (dx as number) - 58} y={cy + (dy as number) - 20} width={116} height={40} rx={20} fill="#fff3ea" stroke={TERRA} strokeWidth={2.5} />
					<Sx x={cx + (dx as number)} y={cy + (dy as number) + 8} text={t as string} size={22} color={TERRA} weight={700} anchor="middle" at={-100} />
				</g>
			))}
			<Pl p={PLATES.tank} cx={cx} cy={cy + 10} w={44} />
		</g>
	);
};
export const SceneQ3Justify: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'chlorinated', at: KJ.chlorine, color: AMBER},
		{phrase: 'toilets were repaired', at: KJ.toilets, color: AMBER},
		{phrase: 'quarantined the household of every person with cholera', at: KJ.known, color: AMBER},
		{phrase: 'mild or no symptoms', at: KJ.mild, color: AMBER},
	];
	const lines = [
		{t: 'Cholera travels mainly in water contaminated with faeces.', at: KJ.faeces + 20},
		{t: 'Chlorination kills the bacteria and repaired toilets keep faeces out of the water, so environmental management breaks the travel link for the whole town without needing cases to be found.', at: KJ.travel + 20},
		{t: "Quarantine holds only known cases' households,", at: KJ.known + 20},
		{t: 'but most infected people have mild or no symptoms and still pass the bacteria, so many are missed,', at: KJ.mild + 30},
		{t: 'and contaminated water keeps infecting others.', at: KJ.water + 20},
	];
	const hx = 230, hy = 820;
	return (
		<>
			<Heading text="Find the route, then the link" at={4} size={48} />
			<Overlay>
				<Badge text="Epidemic curve" at={-100} />
				<QStrip blocks={Q3ALL} marks={marks} h={150} />
				<Chain3 x={CH.x} y={CH.y} at={4} cutAt={KJ.travel} lit={[0, vis(f, KJ.faeces, KJ.known, 10), 0]} />
				<GTag x={CH.x - 90} y={340} text="b10" at={8} size={18} />
				<Loop at={KJ.faeces} pulseAt={KJ.water} />
				<CTag x={700} y={330} text="B: breaks the travel link for everyone" at={KJ.travel + 8} color={TEAL} size={26} maxW={420} dim={prog(f, KJ.known, 10)} />
				<g opacity={prog(f, KJ.known, 12)}>
					<path d={`M${hx - 50},${hy} l0,-60 l50,-40 l50,40 l0,60 Z`} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
					<rect x={hx - 80} y={hy - 130} width={160} height={150} rx={10} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="8 7" />
					<DotField x={hx - 40} y={hy - 60} w={80} h={40} n={4} seed={2} color={TERRA} />
				</g>
				<GTag x={hx - 80} y={hy + 34} text="A: holds known cases only" at={KJ.known + 10} size={18} />
				<GTag x={hx - 80} y={hy + 74} text="Isolate the infected, quarantine the exposed (b10)" at={KJ.known + 20} size={16} />
				<DotField x={380} y={700} w={700} h={200} n={46} seed={9} o={0.25 * prog(f, KJ.known, 14) + 0.75 * prog(f, KJ.mild + 10, 14)} color={vis(f, KJ.mild + 10, 1e9, 10) > 0.5 ? '#d9a441' : '#cfcac0'} />
				<CTag x={500} y={920} text="many carriers never found" at={KJ.mild + 20} color={AMBER_INK} size={26} dim={prog(f, KJ.water, 10)} />
				<CTag x={820} y={920} text="the route stays open" at={KJ.water + 8} color={TERRA} size={26} />
				<AnsLines x={1140} y={330} w={680} h={690} label="(b)" at={6} lines={lines} size={26} />
				{void KJ.now}{void KJ.chlorine}{void KJ.toilets}{void EDGE}{void CARD}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KM = cues(S('q3-mistake'), {classic: 'The classic mistake', each: 'to each other', water: 'mainly the water'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Here, the water passes it on" at={4} size={48} />
			<Overlay>
				<Badge text="Epidemic curve" at={-100} />
				<QStrip blocks={Q3ALL} marks={[]} h={150} />
				<MistakeChip x={130} y={330} text="quarantine works because it keeps infected people away from others" at={2} cross={KM.classic + 40} size={28} />
				<GTag x={130} y={420} text="helps when people pass a disease to each other" at={KM.each} size={22} />
				<Chain3 x={CH.x} y={560} at={0} cutAt={-100} lit={[0, pulse(f, KM.water, 40) > 0.2 ? 1 : 0, 0]} />
				<g transform="translate(0,140)"><Loop at={0} pulseAt={KM.water} /></g>
				<CTag x={1100} y={600} text="cholera: mainly the water passes it on" at={KM.water + 6} color={TERRA} size={32} maxW={700} />
			</Overlay>
		</>
	);
};

// ---------- 5. Decision board ----------
const KB = cues(S('decision-board'), {start: 'how to start', table: 'For a table', change: 'For a change', control: 'For a control', next: 'Next, how'});
const ROWS: {see: string; doo: string; q: string; k: 'table' | 'change' | 'control'}[] = [
	{see: 'a table of groups', doo: 'divide by who could have caught it (16 ÷ 28)', q: 'Q1', k: 'table'},
	{see: 'incidence and prevalence', doo: 'whole population, or people tested? tap or tank?', q: 'Q2', k: 'change'},
	{see: 'an epidemic curve and a control', doo: 'route first, then the link it breaks; check the timing', q: 'Q3', k: 'control'},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="First moves" at={4} size={56} />
			<Overlay>
				<Sx x={260} y={300} text="What you see" size={30} color={GREY_INK} weight={800} at={KB.start} />
				<Sx x={840} y={300} text="What you do first" size={30} color={GREY_INK} weight={800} at={KB.start} />
				{ROWS.map((r, i) => {
					const at = KB[r.k];
					const o = prog(f, at, 12);
					if (o <= 0.01) return null;
					const on = vis(f, at, ROWS[i + 1] ? KB[ROWS[i + 1].k] : KB.next, 10) > 0.5;
					const y = 330 + i * 170;
					return (
						<g key={i} opacity={o * (on ? 1 : 0.75)}>
							<rect x={120} y={y} width={1680} height={140} rx={24} fill={on ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={on ? 4 : 2.5} />
							<circle cx={170} cy={y + 70} r={28} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
							<Sx x={170} y={y + 79} text={r.q} size={22} color={AMBER_INK} weight={800} anchor="middle" at={-100} />
							<Sx x={260} y={y + 82} text={r.see} size={34} color={INK} hand weight={700} at={-100} />
							<Sx x={840} y={y + 82} text={r.doo} size={32} color={on ? AMBER_INK : INK} hand weight={700} at={-100} />
							{i === 1 ? <Tank x={1700} y={y + 30} w={60} h={80} at={-100} level={0.5} /> : null}
							{i === 2 ? <polyline points={`${1690},${y + 110} ${1710},${y + 80} ${1730},${y + 40} ${1750},${y + 70} ${1770},${y + 108}`} fill="none" stroke={INK_SOFT} strokeWidth={3} /> : null}
							{i === 0 ? <g>{[0, 1, 2].map(k => <rect key={k} x={1690} y={y + 34 + k * 26} width={90} height={22} fill="none" stroke={GREYT} strokeWidth={2} />)}</g> : null}
						</g>
					);
				})}
				<Sx x={960} y={880} text="Before you compare, find the denominator." size={40} color={INK_SOFT} hand weight={700} anchor="middle" at={KB.control + 40} />
				<NextChip x={720} y={930} w={1100} text="Next: how disease control ideas have changed" at={KB.next}>
					<Pl p={PLATES.sign} cx={782} cy={972} w={56} />
				</NextChip>
				{void AMBER}{void EDGE}{void TEAL}{void TERRA}{void DrawPath}{void wx}{void wy}{void DotField}
			</Overlay>
		</>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	'Before you compare, find the denominator: divide by the people who could have caught it (each exposure group, or the whole population at risk), or by the people tested in a survey.',
	'Food outbreak: compare the percentage ill among people who ate a food with those who did not. Most ill people eating a food is not enough.',
	'Epidemic curve, three shapes: one sharp peak a set time after a shared meal = point source (Q1 had two, one per meal); a curve that keeps rising or stays high while its source lasts = continuing common source, such as water (Q3); repeated waves about one incubation period apart = person-to-person spread. Check the timing against the incubation period.',
	'Incidence = new cases in a set time ÷ population at risk (× 1000 or × 100 000). Prevalence = people infected at one time ÷ the population, or ÷ the people tested in a survey (× 100). Fewer new infections lower incidence, and so prevalence too; shorter infections lower prevalence further.',
	'Justify a control: name the route, the link the measure breaks, and why other measures miss it (for example, people with no symptoms who still spread it).',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Before you compare, find the denominator. Then the cause, then the control." tag="Who could have caught it, or who was tested? Tap or tank? Route, then link." size={27} aidTop={790} />
);
