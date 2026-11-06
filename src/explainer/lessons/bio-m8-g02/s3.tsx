// M8 G02 (Biology) scenes 10 to 15: question 3 (a cochlear implant clinic) as the full worded card with the countdown;
// the right measure (the ladder) and the gains (the score chart); limits, access and the judgement; the crossed
// "everyone improved to 70%" mistake with the spread behind the average; the decision board (the four moves and the
// course close) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, Badge, BLUE, BlankLines, CARD, Chip, EDGE, EvalStrip, Framed, GTag, Givens, HscTag, INK, INK_SOFT, Ladder, Mistake, Pause, Pic, PicH, PL, PreRing, Q3Col, Q3Full, ScoreChart,
	Spread, Svg, Sx, T, TEAL, Tag, Title, prog, q3Marks, tLines,
} from './parts';
import {K, hold} from './common';

const ON = -1000;

// ---------- 4a. question 3 ----------
const KQ3 = K('q3-question', {pause: 'Pause here'});
export const SceneQ3: React.FC = () => (
	<Svg>
		<Title text="Question 3: a hearing technology" />
		<HscTag />
		<Q3Full />
		<Pic p={PL.implant} cx={1582} cy={330} w={440} />
		<Givens x={1340} y={560} items={[['quiet: 15% → 70%', TEAL], ['noise: 5% → 35%', TEAL], ['28 of 30 use it daily', INK], ['wait: 9 months', AMBER_INK]]} />
		<BlankLines x={1340} y={784} w={484} h={56} label="your answer" />
		<Pause h={hold('q3-question')} at={KQ3.pause} tx={1340} ty={898} cx={1745} cy={962} r={44} />
		<PreRing at={KQ3.pause} start={hold('q3-question').startFrame} x={1745} y={962} r={44} />
	</Svg>
);

// ---------- 4b. the right measure, then the gains ----------
const KM = K('q3-measure', {process: 'process', counts: 'It counts', changed: 'not what changed', disorder: "The disorder's", speech: 'trouble understanding', score: 'speech score', seventy: 'seventy', five: 'from five', own: 'own best hearing', fair: 'fair baseline', twenty: 'twenty-eight'});
const M_M = q3Marks([{phrase: 'we fitted 30 implants this year', at: KM.process}]);
const CH = {x: 1390, y: 196, w: 450, h: 360};
export const SceneQ3Measure: React.FC = () => (
	<Svg>
		<Title text="The right measure, then the gains" />
		<HscTag />
		<Badge text="Evaluate a technology" />
		<Q3Col marks={M_M} cells={{'1,1': KM.seventy - 8, '1,2': KM.seventy, '2,1': KM.five, '2,2': KM.five + 16, '0,1': KM.own, '3,2': KM.twenty}} />
		<Ladder x={790} y={206} w={470} rh={78} size={30} rungs={[{lit: KM.process, tag: ['activity', KM.counts]}, {}, {lit: KM.speech, relabel: ['what changed for the person', KM.speech]}]} />
		<AnsBox x={790} y={472} w={470} h={392} label="answer (a)" size={44} sizeOld={30} hint="What changed for the patients?" lines={[
			{t: 'Implants fitted: a process measure (what the clinic did).', at: KM.counts},
			{t: 'Outcome: speech scores, because the disorder makes speech hard to understand.', at: KM.speech},
		]} />
		<ScoreChart x={CH.x} y={CH.y} w={CH.w} h={CH.h} t={{quiet: KM.seventy - 20, noise: KM.five}} />
		<PicH p={PL.implant} cx={1730} cy={260} h={130} />
		<Chip x={1320} y={662} text="fair baseline: same people, best aids" size={28} color={BLUE} ink={INK} at={KM.own} />
		<Chip x={1320} y={720} text="28 of 30 still use it daily" size={28} color={TEAL} ink={INK} at={KM.twenty} />
		<GTag x={1320} y={778} text="b15: access to sound" size={26} at={KM.speech} />
		<EvalStrip fills={[{t: 'implant bypasses hair cells and stimulates the auditory nerve (b15)', at: KM.speech + 30}, {t: 'quiet 15% → 70%; noise 5% → 35%; 28 of 30 daily', at: KM.twenty}, undefined, undefined]} />
	</Svg>
);

// ---------- 4c. limits, access, judgement ----------
const KE = K('q3-evaluate', {noise: 'Noise is still', most: 'most words', clinic: 'one clinic', access: 'for access', wait: 'average wait', surgery: 'needs surgery', not: 'not everyone', highly: 'highly effective', partly: 'partly effective', help: 'They help', without: 'without restoring'});
const M_E = q3Marks([{phrase: 'Average wait from referral to surgery: 9 months', at: KE.wait}]);
const DONE = [{t: 'implant bypasses hair cells and stimulates the auditory nerve (b15)', at: ON}, {t: 'quiet 15% → 70%; noise 5% → 35%; 28 of 30 daily', at: ON}];
export const SceneQ3Evaluate: React.FC = () => (
	<Svg>
		<Title text="Limits, access, judgement" />
		<HscTag />
		<Badge text="Evaluate a technology" />
		<Q3Col marks={M_E} cells={{'2,2': KE.noise}} />
		<AnsBox x={790} y={176} w={470} h={688} label="answer (b)" size={44} sizeOld={30} hint="What is still hard, and who can reach it?" lines={[
			{t: 'Noise: 35% means most words are still missed.', at: KE.most},
			{t: 'One clinic, no comparison group.', at: KE.clinic},
			{t: 'Access: 9-month wait; surgery, programming, months of practice.', at: KE.wait},
			{t: 'Highly effective in quiet; partly in noise.', at: KE.highly, color: TEAL},
			{t: 'Access to speech, not normal hearing.', at: KE.without, color: TEAL},
		]} />
		<ScoreChart x={CH.x} y={CH.y} w={CH.w} h={CH.h} t={{quiet: ON, noise: ON, pulseNoise: KE.most}} />
		<PicH p={PL.implant} cx={1730} cy={260} h={130} />
		<Tag x={1320} y={652} w={520} text="65% of words missed in noise" size={32} color={AMBER_INK} at={KE.most} />
		<Chip x={1320} y={720} text="9-month wait" size={30} color={AMBER_INK} ink={INK} at={KE.wait} />
		<Chip x={1550} y={720} text="one clinic" size={30} color="#8d857a" ink={INK} at={KE.clinic} />
		<Chip x={1320} y={782} text="surgery, programming, months of practice" size={28} color={AMBER_INK} ink={INK} at={KE.surgery} />
		<EvalStrip fills={[...DONE, {t: 'noise still hard; one clinic; access: 9-month wait, surgery, rehabilitation', at: KE.not}, {t: 'highly effective in quiet; partly in noise; not normal hearing', at: KE.highly}]} />
	</Svg>
);

// ---------- 4d. the classic mistake ----------
const KX = K('q3-mistake', {classic: 'classic mistake', avg: 'An average', hide: 'could hide', say: 'Say what', spread: 'note the spread'});
export const SceneQ3Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Evaluate a technology" />
		<Q3Col cells={{'1,2': KX.spread}} />
		<Mistake x={790} y={170} text="every patient improved to 70%" size={44} at={ON} cross={KX.classic + 8} />
		<Spread x={840} y={560} w={780} at={KX.hide} size={30} />
		<GTag x={840} y={300} text="illustrative spread" size={28} at={KX.hide + 20} />
		<Tag x={1180} y={286} w={320} text="same average, wide spread" size={32} color={AMBER_INK} at={KX.hide + 30} />
		<PicH p={PL.implant} cx={1740} cy={470} h={190} />
		<Framed x={790} y={790} text="average 70% in quiet: some gained far less" size={44} color={TEAL} at={ON} />
		<T x={790} y={900} w={1050} text="Say what the average shows, then note the spread it hides." size={44} color={BLUE} at={KX.avg} />
	</Svg>
);

// ---------- 5. decision board and the course close ----------
const KB = K('decision-board', {four: 'four moves', say: 'Say how', judge: 'Judge what', name: 'Name a real', commit: 'commit', close: 'to a close', revise: 'When you revise'});
const MiniBars: React.FC<{x: number; base: number}> = ({x, base}) => (
	<g>
		<line x1={x} x2={x + 230} y1={base} y2={base} stroke={INK} strokeWidth={3} />
		{[[0, 38, '#2f7f86', 0.45], [1, 47, '#2f7f86', 0.85], [3, 38, '#9a8f80', 0.45], [4, 40, '#9a8f80', 0.85], [6, 7, '#b5502b', 0.85]].map(([i, v, c, o]) => <rect key={i as number} x={x + 10 + (i as number) * 30} y={base - (v as number) * 2} width={24} height={(v as number) * 2} rx={3} fill={c as string} opacity={o as number} />)}
	</g>
);
const MiniSpread: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<line x1={x} x2={x + 210} y1={y} y2={y} stroke={INK} strokeWidth={3} />
		<line x1={x + 147} x2={x + 147} y1={y - 70} y2={y} stroke={TEAL} strokeWidth={4} />
		{[40, 60, 85, 100, 120, 135, 150, 160, 175, 190].map((v, i) => <circle key={i} cx={x + v} cy={y - 14 - ((i * 37) % 50)} r={6} fill="#7b838c" />)}
	</g>
);
type Row = {see: string; doo: string; badge: string; at: number; thumb: (y: number) => React.ReactNode};
const ROWS: Row[] = [
	{see: 'How it works', doo: 'Say how the method or technology works.', badge: 'Q2', at: KB.say, thumb: y => <PicH p={PL.aav} cx={250} cy={y + 70} h={120} />},
	{see: 'What the evidence shows', doo: 'Judge the data, with a fair comparison.', badge: 'Q1', at: KB.judge, thumb: y => <MiniBars x={140} base={y + 118} />},
	{see: 'A real limit', doo: 'Name one: measure, size, time, spread or access.', badge: 'Q3', at: KB.name, thumb: y => <MiniSpread x={150} y={y + 104} />},
	{see: 'A judgement', doo: 'Commit to a judgement for that case.', badge: 'Q1 to Q3', at: KB.commit, thumb: y => <g><PicH p={PL.kit} cx={180} cy={y + 70} h={80} /><Pic p={PL.eye} cx={260} cy={y + 70} w={80} /><Pic p={PL.implant} cx={340} cy={y + 70} w={84} /></g>},
];
const MODS = ['Year 11', 'Module 5', 'Module 6', 'Module 7', 'Module 8'];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const y0 = 196, rh = 140, gap = 12;
	return (
		<Svg>
			<Title text="Four moves for any evaluate question" />
			<Sx x={430} y={y0 - 14} text="Move" size={34} color={INK_SOFT} hand at={ON} />
			<Sx x={960} y={y0 - 14} text="What you write" size={34} color={INK_SOFT} hand at={ON} />
			{ROWS.map((r, i) => {
				const y = y0 + i * (rh + gap);
				const L = prog(f, r.at, 14);
				const o = 0.5 + 0.5 * L;
				return (
					<g key={i}>
						<rect x={96} y={y} width={1728} height={rh} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
						{r.thumb(y)}
						<g opacity={o}>
							<T x={430} y={y + rh / 2 + 15 - ((tLines(r.see, 46, 460) - 1) * 50) / 2} text={r.see} size={46} w={460} color={INK} lh={50} />
							<path d={`M${900},${y + rh / 2} L${940},${y + rh / 2} M${926},${y + rh / 2 - 13} L${940},${y + rh / 2} L${926},${y + rh / 2 + 13}`} fill="none" stroke={BLUE} strokeWidth={5} strokeLinecap="round" />
							<T x={960} y={y + rh / 2 + 14 - ((tLines(r.doo, 42, 700) - 1) * 46) / 2} text={r.doo} size={42} w={700} color={BLUE} lh={46} />
							<Chip x={1806} y={y + rh / 2 - 22} text={r.badge} size={28} color={BLUE} anchor="end" />
						</g>
					</g>
				);
			})}
			<g opacity={prog(f, KB.four, 14)}>
				<rect x={96} y={812} width={1728} height={84} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
				<Sx x={960} y={868} text="How it works, what the evidence shows, a real limit, a judgement." size={44} color={TEAL} hand anchor="middle" at={ON} />
			</g>
			<g>
				{MODS.map((m, i) => {
					const k = prog(f, KB.close - 40 + i * 12, 12);
					const x = 96 + i * 276;
					return (
						<g key={m}>
							<rect x={x} y={930} width={258} height={80} rx={40} fill={k > 0.5 ? TEAL : CARD} stroke={k > 0.5 ? TEAL : EDGE} strokeWidth={3} />
							<Sx x={x + 129} y={982} text={m} size={36} color={k > 0.5 ? CARD : INK} anchor="middle" weight={800} at={ON} />
						</g>
					);
				})}
				<Sx x={1640} y={964} text="Year 12 Biology:" size={34} color={INK} anchor="middle" hand weight={700} at={KB.close} />
				<Sx x={1640} y={1006} text="course complete" size={34} color={TEAL} anchor="middle" hand weight={700} at={KB.close} />
			</g>
		</Svg>
	);
};

// ---------- 6. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={46} aidTop={690} tag="for any evaluate question: a prevention method or a technology" aid="How it works, what the evidence shows, a real limit, a judgement." notes={[
		'Evaluate: how it works, evidence, a real limit, a judgement.',
		'Process = what was done; impact = what people did; outcome = what changed.',
		'Subtract the comparison group’s change before crediting a campaign.',
		'Somatic gene therapy treats one person; children can still inherit the gene.',
		'Averages hide spread; for a technology, include access (wait, surgery, cost).',
	]} />
);
