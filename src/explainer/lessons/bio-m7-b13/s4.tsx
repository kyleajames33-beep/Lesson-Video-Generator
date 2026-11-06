// M7 B13 scenes 12a to 14: two unseen exam items (district incidence with a data table; City R's outbreak with
// serosurvey, water storage and mobility data), each whole on screen through "Pause here to answer." and its 10 s
// countdown with nothing answer-bearing; brief feedback with the givens underlined as they are used and one crossed
// classic mistake (no givens card); the decision rule under the small four-conditions bar, with the handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, FRow, FourBar, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, StepChip, Sx, TEAL, fRowH, tw, vis, Pl, PLATES, prog} from './parts';

// ---------- item 1: two districts ----------
type T1 = {a: number; qa: number; qb: number};
const STEM1 = (t: T1): QBlock[] => [{text: 'Two districts in a South East Asian country recorded the following dengue cases in 2023.', at: t.a}];
const DEM1 = (t: T1): QBlock[] => [
	{text: '(a) Calculate the incidence of dengue in each district in 2023, as cases per 100,000 people. (2 marks)', at: t.qa, weight: 700, para: true},
	{text: '(b) Identify which district had the greater risk of dengue, and justify your answer. (1 mark)', at: t.qb, weight: 700, para: true},
];
const ALL1: T1 = {a: -100, qa: -100, qb: -100};
qCheck([...STEM1(ALL1), ...DEM1(ALL1)], [{phrase: 'greater risk', at: 0}]);
const ROWS = [['District', 'P', 'Q'], ['Population', '200,000', '40,000'], ['Dengue cases in 2023', '1,000', '400']];
/** The district table; `vAt[k]` writes row k; `mark` underlines cells keyed 'r,c' from a frame. */
const DTable: React.FC<{x: number; y: number; at: number; vAt?: number[]; s?: number; mark?: Record<string, number>}> = ({x, y, at, vAt = [-100, -100, -100], s = 1, mark = {}}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 12);
	if (o <= 0.01) return null;
	const hw = 420, cw = 220, rh = 56;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={0} width={hw + 2 * cw} height={rh * 3} rx={12} fill={CARD} stroke={INK} strokeWidth={2.5} />
			{[1, 2].map(i => <line key={'h' + i} x1={0} x2={hw + 2 * cw} y1={rh * i} y2={rh * i} stroke={EDGE} strokeWidth={2} />)}
			{[0, 1].map(i => <line key={'v' + i} x1={hw + i * cw} x2={hw + i * cw} y1={0} y2={rh * 3} stroke={EDGE} strokeWidth={2} />)}
			{ROWS.map((r, ri) => r.map((c, ci) => (
				<text key={ri + '-' + ci} x={ci === 0 ? 18 : hw + (ci - 1) * cw + cw / 2} y={rh * ri + rh * 0.66} textAnchor={ci === 0 ? 'start' : 'middle'} opacity={vis(f, vAt[ri], undefined, 10)} style={{fontFamily: '"Inter Tight"', fontWeight: ri === 0 || ci === 0 ? 700 : 600, fontSize: 28}} fill={INK}>{c}</text>
			)))}
			{Object.entries(mark).map(([k, m]) => {
				const [ri, ci] = k.split(',').map(Number);
				const cx = hw + (ci - 1) * cw + cw / 2, w = tw(ROWS[ri][ci], 28) + 16;
				return f >= m ? <DrawPath key={k} d={`M${cx - w / 2},${rh * ri + rh * 0.84} L${cx + w / 2},${rh * ri + rh * 0.84}`} at={m} dur={12} color={AMBER} width={5} /> : null;
			})}
		</g>
	);
};
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', p: 'District P', q: 'District Q', calc: 'Calculate the incidence', identify: 'identify which district', pause: 'Pause here to answer'});
// Quality fix (6 Nov 2026): the whole question arrives with the card; the text narrows to 1100 px and the right column
// shows the disease and its vector as painted plates (nothing answer-bearing).
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const c = KA.first - 6;
	const t: T1 = {a: c, qa: c, qb: c};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1100} size={34} card={false} />
				<DTable x={140} y={340} at={c} vAt={[c, c, c]} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={570} w={1100} size={34} card={false} />
				<AnsBox x={140} y={830} w={1100} h={170} at={KA.calc + 40} />
				<CardBox x={1290} y={210} w={490} h={560} at={c} fill="#fffdf8" />
				<Pl p={PLATES.virus} cx={1420} cy={340} w={190} o={prog(f, KA.p, 14)} />
				<Pl p={PLATES.aedes} cx={1610} cy={500} w={300} o={prog(f, KA.p + 12, 14)} />
				<CTag x={1310} y={630} text="dengue: a virus carried by Aedes aegypti" at={KA.p + 20} color={INK} size={28} maxW={440} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
				{void KA.q}
			</Overlay>
		</>
	);
};

const KB = cues(S('feedback-one'), {p: "District P's incidence", q: "District Q's is", double: 'Q had double', saying: 'Saying P is', classic: 'classic mistake'});
const FB_STRIP: React.FC<{children: React.ReactNode; h: number}> = ({children, h}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={150} w={1720} h={h} at={-100} />
		{children}
	</>
);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: 'greater risk', at: KB.double, color: TEAL}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mtext = 'P is worse: it had more cases';
	const mw = tw(mtext, 30) + 48;
	const rows = [
		{t: 'P: 1,000 ÷ 200,000 × 100,000 = 500 per 100,000', at: KB.p + 10, end: KB.double, c: AMBER_INK},
		{t: 'Q: 400 ÷ 40,000 × 100,000 = 1,000 per 100,000', at: KB.q + 10, end: KB.double, c: AMBER_INK},
		{t: "Q: greater risk (double P's incidence), though fewer cases", at: KB.double + 10, end: 1e9, c: TEAL},
	];
	let y = 470;
	return (
		<>
			<Heading text="Rates, not counts" at={4} size={48} />
			<Overlay>
				<FB_STRIP h={300}>
					<QText q={qCheck([...STEM1(ALL1), ...DEM1(ALL1)], marks)} x={140} y={194} w={2300} size={34} card={false} s={0.7} />
					<DTable x={140} y={322} at={-100} s={0.68} mark={{'1,1': KB.p + 2, '2,1': KB.p + 8, '1,2': KB.q + 2, '2,2': KB.q + 8}} />
				</FB_STRIP>
				{rows.map((r, i) => {
					const y0 = y;
					y += fRowH(r.t, 34, 1680) + 16;
					return <FRow key={i} y={y0} text={r.t} at={r.at} lit={lit(r.at, r.end)} color={r.c} size={34} />;
				})}
				<MistakeChip x={130} y={880} text={mtext} at={KB.saying} cross={KB.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="compare rates, not counts" at={KB.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- item 2: City R ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2): QBlock[] => [
	{text: 'In 2022, a survey in City R, where Aedes aegypti is common, found that 80% of adults had antibodies from a past dengue infection. Almost all of these infections had been caused by dengue serotype 1 (DENV-1).', at: t.a},
	{text: 'Piped water in City R is often cut off, so most households store water in open jars.', at: t.b, para: true},
	{text: 'In 2025, dengue serotype 3 (DENV-3) was detected in travellers arriving in City R, and the city then had its largest dengue outbreak in ten years, with a higher proportion of severe cases than in earlier outbreaks.', at: t.c, para: true},
];
const DEM2 = (t: T2): QBlock[] => [{text: 'Explain the 2025 outbreak, with reference to biological and social factors in the data. (4 marks)', at: t.q, weight: 700, para: true}];
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
const M2 = ['80% of adults had antibodies', 'DENV-1', 'detected in travellers', 'open jars', 'Aedes aegypti is common', 'higher proportion of severe cases'];
qCheck([...STEM2(ALL2), ...DEM2(ALL2)], M2.map(phrase => ({phrase, at: 0})));
const KC = cues(S('attempt-two'), {second: 'Second', city: 'In City R', piped: 'Piped water is', travellers: 'travellers brought in', explain: 'Explain this outbreak', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.second + 6, b: KC.second + 6, c: KC.second + 6, d: -100, q: KC.second + 6}; // quality fix: whole question with the card
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck([...STEM2(t), ...DEM2(t)], [])} x={140} y={250} w={1640} size={33} card={false} />
				<AnsBox x={140} y={720} w={1340} h={290} at={KC.explain + 30} />
				{/* quality fix (6 Nov 2026): the givens as painted plates on their cues, in the strip under the text */}
				<Pl p={PLATES.virus} cx={230} cy={610} w={110} o={prog(f, KC.city, 14)} />
				<Sx x={300} y={622} text="DENV-1 antibodies (2022)" size={30} color={INK} hand weight={700} at={KC.city + 6} />
				<Pl p={PLATES.jar} cx={760} cy={610} w={110} o={prog(f, KC.piped, 14)} />
				<Sx x={830} y={622} text="open jars" size={30} color={INK} hand weight={700} at={KC.piped + 6} />
				<Pl p={PLATES.aedes} cx={1060} cy={610} w={150} o={prog(f, KC.piped + 10, 14)} />
				<Pl p={PLATES.virus} cx={1240} cy={610} w={110} o={prog(f, KC.travellers, 14)} />
				<Sx x={1310} y={622} text="DENV-3 (2025, travellers)" size={30} color={AMBER_INK} hand weight={700} at={KC.travellers + 6} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

const KD = cues(S('feedback-two'), {imm: 'Immunity to serotype', trav: 'Travellers brought the', breed: 'breeding in the', severe: 'more likely to be', saying: 'Saying eighty per', classic: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: '80% of adults had antibodies', at: KD.imm, color: AMBER},
		{phrase: 'DENV-1', at: KD.imm + 10, color: AMBER},
		{phrase: 'detected in travellers', at: KD.trav, color: AMBER},
		{phrase: 'open jars', at: KD.breed, color: AMBER},
		{phrase: 'Aedes aegypti is common', at: KD.breed + 10, color: AMBER},
		{phrase: 'higher proportion of severe cases', at: KD.severe, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mtext = '80% were immune, so no outbreak';
	const mw = tw(mtext, 30) + 48;
	const rows = [
		{t: "biological: immunity is serotype-specific; DENV-1 antibodies don't protect against DENV-3, so nearly everyone was susceptible to DENV-3", at: KD.imm + 16, end: KD.severe, c: AMBER_INK},
		{t: 'social: stored water in open jars bred Aedes near homes; travellers introduced DENV-3', at: KD.breed + 16, end: KD.severe, c: AMBER_INK},
		{t: 'second infection, different serotype: higher risk of severe dengue', at: KD.severe + 10, end: 1e9, c: TEAL},
	];
	let y = 380;
	return (
		<>
			<Heading text="A new serotype meets stored water" at={4} size={48} />
			<Overlay>
				<FB_STRIP h={210}>
					<QText q={qCheck([...STEM2(ALL2), ...DEM2(ALL2)].map(b => ({...b, para: false})), marks)} x={140} y={190} w={2700} size={34} card={false} s={0.6} />
				</FB_STRIP>
				{rows.map((r, i) => {
					const y0 = y;
					y += fRowH(r.t, 30, 1680) + 14;
					return <FRow key={i} y={y0} text={r.t} at={r.at} lit={lit(r.at, r.end)} color={r.c} size={30} />;
				})}
				<MistakeChip x={130} y={880} text={mtext} at={KD.saying} cross={KD.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={886} text="immune to DENV-1 only" at={KD.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {check: 'check the measure', pop: 'and its population', link: 'link each change', next: 'Next, practise'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [{at: KE.check, text: 'incidence or prevalence?'}, {at: KE.pop, text: 'per how many people?'}, {at: KE.link, text: 'biological or social cause?'}];
	return (
		<>
			<Heading text="Measure, population, cause" at={4} size={56} />
			<Overlay>
				<FourBar g={{x: 360, y: 200, w: 1700, s: 0.7}} at={0} fill={[1, 1, 1, 1]} />
				{chips.map((c, i) => <StepChip key={i} x={360} y={330 + i * 140} w={1200} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={720} y={860} w={1100} text="Next: outbreak data and control practice" at={KE.next}>
					<rect x={748} y={880} width={64} height={44} rx={6} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} />
					<polyline points="754,918 768,912 780,896 792,886 806,902" fill="none" stroke={AMBER} strokeWidth={3} />
				</NextChip>
				{void GREY_INK}{void Sx}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
// Quality fix (6 Nov 2026): seven short bullets at 34 px replace the five dense paragraphs.
const NOTES = [
	'Dengue: a virus with four serotypes, carried mainly by Aedes aegypti.',
	'Incidence: new cases in a set time per 100 000 people. Compare rates, not counts.',
	'Prevalence: the share of people with a disease at one time. Antibodies show past infection.',
	'Spread needs virus, Aedes, warmth and water, and non-immune people. Cut one far enough.',
	'Stored water, crowded cities and travel shape these conditions.',
	'Immunity is serotype-specific; a second infection with a new serotype is more often severe.',
	'Wolbachia: 77% fewer cases in the Yogyakarta trial. Limits: cost, support, water, travel.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Incidence is the tap, prevalence is the tank. Dengue needs virus, vector, warmth and water, and people, all at once." tag="Check the measure and its population; link each change to a biological or social cause." size={34} aidTop={690} />
);
