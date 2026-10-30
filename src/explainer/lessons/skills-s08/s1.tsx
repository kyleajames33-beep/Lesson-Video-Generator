// S08 scenes 1 to 5: the hook (an exam page, twelve NESA report tiles flagged; plan, build, stimulus, judgement land in
// the long answer box), how long answers are marked (the band meter; a ghost answer settles as a whole), the worked
// question card with its 10 s countdown, taking it apart (two verbs, a constraint, the stimulus; four demand boxes) and
// the one-minute plan (the card shrinks, the plan card fills one row per cue, number chips tie rows to table cells).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, DrillCountdown, DrawSquiggle, GREEN, GREY, GREY_INK, GreyTag, Heading, INK, INK_SOFT, Overlay, PEN, QuestionCard, RoutineStrip, Stopwatch,
	T, TEAL, cardGeom, lerp, prog, smooth, vis,
} from './kit';
import type {Ann} from './kit';
import {ABOX, CARD_S, DEMANDS, RW, RX, WORK, hold, sc, workSpec} from './common';
import {BandMeter, Demands, ExamPage, MiniFlag, PlanCard, VIOLET, pageBox, planLayout} from './pieces';
import type {PlanRow} from './pieces';

const ALL4 = [-100, -100, -100, -100];
export const cardBottom = () => WORK.y + cardGeom(WORK).h;

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {worth: 'worth six', band: 'decide a band', six: 'In six years', every: 'every report', ignored: 'ignored the stimulus', more: 'more than half', reasons: 'without reasons', so: "So here's", plan: 'plan a long', build: 'build it one', stim: 'use the stimulus', judge: 'with a judgement', asks: 'verb asks'});
const PG = {x: 130, y: 210, w: 540, h: 790};
const JUDG: Record<string, number[]> = {Chemistry: [2020, 2022, 2023], Biology: [2021, 2022, 2023, 2025]};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const B = pageBox(PG.x, PG.y, PG.w, PG.h);
	const tileO = 1 - 0.72 * prog(f, K1.so, 16);
	const tiles = (['Chemistry', 'Biology'] as const).flatMap(s => [2020, 2021, 2022, 2023, 2024, 2025].map(y => ({s, y})));
	let jk = 0;
	const chips = [
		{t: 'plan it in a minute', at: K1.plan},
		{t: 'build it: one idea per paragraph', at: K1.build},
		{t: 'use the stimulus', at: K1.stim},
		{t: 'finish with the judgement (when the verb asks)', at: K1.judge},
	];
	return (
		<>
			<Heading text="Long answers: plan it, build it, judge it" at={K1.asks + 10} size={58} />
			<Overlay>
				<ExamPage x={PG.x} y={PG.y} w={PG.w} h={PG.h} at={4} badgeAt={K1.worth + 20} />
				{/* the long answer fills: a plan, three paragraphs, a stimulus icon, the judgement line */}
				<g opacity={prog(f, K1.plan, 10)}>
					{[0, 1, 2].map(k => <rect key={k} x={B.x + 20} y={B.y + 22 + k * 18} width={90 - k * 16} height={7} rx={3} fill={AMBER} opacity={0.8} />)}
					<T x={B.x + 124} y={B.y + 44} text="plan" size={22} hand weight={700} color={AMBER_INK} />
				</g>
				{[0, 1, 2].map(k => (f >= K1.build + k * 10 ? <g key={k}><DrawSquiggle x={B.x + 24} y={B.y + 100 + k * 72} w={B.w - 150} at={K1.build + k * 10} color={INK_SOFT} /><DrawSquiggle x={B.x + 24} y={B.y + 124 + k * 72} w={B.w - 220} at={K1.build + k * 10 + 6} color={INK_SOFT} /></g> : null))}
				<g opacity={prog(f, K1.stim, 10)}>
					<rect x={B.x + B.w - 104} y={B.y + 92} width={80} height={70} rx={6} fill={CARD} stroke={TEAL} strokeWidth={3} />
					{[0, 1, 2, 3].map(k => <rect key={k} x={B.x + B.w - 94 + k * 17} y={B.y + 150 - [20, 38, 30, 48][k]} width={11} height={[20, 38, 30, 48][k]} fill={TEAL} opacity={0.75} />)}
				</g>
				{f >= K1.judge ? <g>
					<DrawPath d={`M${B.x + 30},${B.y + B.h - 34} L${B.x + B.w - 70},${B.y + B.h - 36}`} at={K1.judge + 4} dur={14} color={INK} width={8} />
					<DrawPath d={`M${B.x + 22},${B.y + B.h - 52} L${B.x + 12},${B.y + B.h - 52} L${B.x + 12},${B.y + B.h - 18} L${B.x + 22},${B.y + B.h - 18}`} at={K1.judge + 14} dur={10} color={GREEN} width={5} cap="butt" />
				</g> : null}
				{/* twelve report tiles */}
				{tiles.map((t, i) => {
					const col = i % 6, row = Math.floor(i / 6);
					const x = 760 + col * 184, y = 250 + row * 112;
					const flagged = JUDG[t.s].includes(t.y);
					const ja = flagged ? K1.more + 14 + (jk++) * 8 : 0;
					return (
						<g key={i} opacity={tileO * prog(f, K1.six + i * 3, 10)}>
							<rect x={x} y={y} width={170} height={92} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
							<T x={x + 14} y={y + 38} text={t.s} size={22} weight={700} color={INK} />
							<T x={x + 14} y={y + 72} text={`${t.y}`} size={22} weight={500} color={INK_SOFT} />
							<MiniFlag x={x + 136} y={y + 34} at={K1.ignored + i * 5} color={TEAL} />
							{flagged ? <MiniFlag x={x + 156} y={y + 58} at={ja} color={AMBER} /> : null}
						</g>
					);
				})}
				<g opacity={tileO}>
					<GreyTag x={760} y={490} text="HSCScience summary of NESA marking feedback, Chemistry and Biology 2020 to 2025: stimulus unused or copied without interpretation, 12 of 12 reports; judgement without adequate reasons, 7 of 12 (counts of reports, not of students)" at={K1.every} size={21} maxW={1080} />
					<g opacity={prog(f, K1.ignored, 10)}><MiniFlag x={772} y={640} at={K1.ignored} color={TEAL} /><T x={792} y={646} text="stimulus ignored or copied: 12 of 12" size={24} weight={700} color={TEAL} /></g>
					<g opacity={prog(f, K1.more + 10, 10)}><MiniFlag x={1300} y={640} at={K1.more + 10} color={AMBER} /><T x={1320} y={646} text="judgement without reasons: 7 of 12" size={24} weight={700} color={AMBER_INK} /></g>
				</g>
				{chips.map((c, i) => {
					const next = chips[i + 1]?.at;
					const o = next === undefined ? 1 : 1 - 0.5 * prog(f, next, 12);
					return <Chip key={i} x={760} y={700 + i * 88} text={c.t} at={c.at} size={36} color={i === 3 ? GREEN : i === 2 ? TEAL : INK} o={o} />;
				})}
				{void K1.band}{void K1.reasons}{void K1.asks}
			</Overlay>
		</>
	);
};

// ---------- 2. How long answers are marked ----------
const K2 = cues(sc('how-marked'), {long: 'Long answers', ticking: 'ticking separate', marker: 'A marker reads', band: 'in a band', top: 'the top band', target: 'So the target', every: "It's every demand", evidence: 'with evidence', order: 'in an order'});
const M = {x: 1300, y: 190, h: 540};
export const SceneMarked: React.FC = () => {
	const f = useCurrentFrame();
	const s = smooth(prog(f, K2.band + 4, 30));
	const gx = lerp(300, M.x + 100, s), gy = lerp(250, M.y + M.h * (1 - 4.5 / 7.2) - 60, s), gk = lerp(1, 0.22, s);
	const listO = vis(f, K2.ticking, K2.band + 30, 12) * (1 - 0.55 * prog(f, K2.marker, 12));
	const ty1 = M.y + M.h * (1 - 7.2 / 7.2), ty2 = M.y + M.h * (1 - 5.5 / 7.2);
	return (
		<Overlay>
			{/* the ghost answer, read whole */}
			<g opacity={prog(f, K2.long, 12)} transform={`translate(${gx},${gy}) scale(${gk})`}>
				<rect x={0} y={0} width={560} height={420} rx={12} fill={CARD} stroke="rgba(60,45,20,0.28)" strokeWidth={3 / Math.max(0.3, gk)} />
				<T x={22} y={44} text="Answer" size={30} hand weight={700} color={INK_SOFT} />
				{Array.from({length: 9}, (_, k) => <DrawSquiggle key={k} x={30} y={92 + k * 36} w={k % 3 === 2 ? 340 : 480} at={K2.long + 6 + k * 3} color={GREY} />)}
			</g>
			{s > 0.98 ? <T x={M.x + 100 + 560 * 0.22 + 16} y={M.y + M.h * (1 - 4.5 / 7.2) - 60 + 52} text="placed as a whole" size={26} hand weight={700} color={INK_SOFT} /> : null}
			<g opacity={listO}>
				{['point 1', 'point 2', 'point 3'].map((t, i) => (
					<g key={t}>
						<Chip x={900} y={270 + i * 82} text={t} at={K2.ticking + i * 8} size={32} color={GREY} textColor={GREY_INK} tick={K2.ticking + 10 + i * 8} />
					</g>
				))}
				{f >= K2.marker ? <g><DrawPath d={`M${880},${250} L${1110},${510}`} at={K2.marker + 4} dur={10} color={GREY} width={6} /><DrawPath d={`M${1110},${250} L${880},${510}`} at={K2.marker + 10} dur={10} color={GREY} width={6} /></g> : null}
				<T x={900} y={560} text="read as a whole" size={34} hand weight={700} color={INK} o={prog(f, K2.marker + 16, 10)} />
			</g>
			<BandMeter x={M.x} y={M.y} h={M.h} at={K2.band - 20} lit={[{band: 0, from: K2.top, to: K2.target + 60}]} />
			<g opacity={prog(f, K2.top, 12)}>
				<T x={M.x + 100} y={ty1 + 46} text="top band:" size={30} hand weight={700} color={GREEN} />
				<T x={M.x + 100} y={ty1 + 84} text="detailed use of the stimulus;" size={27} weight={700} color={INK} />
				<T x={M.x + 100} y={ty1 + 118} text="well-supported judgement" size={27} weight={700} color={INK} />
			</g>
			<GreyTag x={M.x - 160} y={M.y + M.h + 30} text="pattern in recent NESA marking guidelines, for example Biology 2022 Q27 and 2023 Q30; paraphrased" at={K2.top + 30} size={19} maxW={480} />
			<Chip x={300} y={820} text="every demand" at={K2.every} size={40} color={INK} />
			<Chip x={640} y={820} text="evidence" at={K2.evidence} size={40} color={TEAL} />
			<Chip x={900} y={820} text="clear order" at={K2.order} size={40} color={INK} />
			<T x={300} y={790} text="The target:" size={34} hand weight={700} color={INK_SOFT} o={prog(f, K2.target, 10)} />
		</Overlay>
	);
};

// ---------- 3. The worked question card ----------
const K3 = cues(sc('question-card'), {here: "Here's an", region: 'Region', table: 'The table gives', seven: 'Seven marks', read: 'Read it', take: 'Take a full', pause: 'Pause here'});
export const SceneCard: React.FC = () => {
	const h = hold('question-card');
	const spec = workSpec([K3.region, K3.table, K3.seven - 46, K3.seven - 24], K3.seven);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} miniY={110} />
			<AnswerBox spec={ABOX} at={K3.read} />
			<Demands at={K3.read + 6} />
			<QuestionCard spec={spec} at={K3.here} />
			<DrillCountdown hold={h} at={K3.pause} x={RX} y={cardBottom() + 90} cx={RX + 200} cy={cardBottom() + 210} r={50} />
			{void K3.take}
		</Overlay>
	);
};

// ---------- 4. Take it apart ----------
const K4 = cues(sc('take-apart'), {step: 'Step one', verbs: 'two verbs', analyse: 'Analyse the data', explain: 'to explain the', assess: 'and assess', constraint: "There's a constraint", population: 'the population', stimulus: "there's the stimulus", four: 'four demands', ticks: 'four small ticks', tick: 'tick each one'});
export const ANN4 = (): Ann[] => [
	{kind: 'marks', at: K4.step + 40, color: PEN},
	{kind: 'verb', phrase: 'Analyse', at: K4.analyse},
	{kind: 'given', phrase: 'explain the changes in measles cases', at: K4.explain},
	{kind: 'verb', phrase: 'Assess', at: K4.assess},
	{kind: 'given', phrase: 'the catch-up program.', item: 3, at: K4.assess + 18},
	{kind: 'constraint', phrase: 'refer to immunity in individuals and in the population.', at: K4.population, color: VIOLET},
];
export const TableRing: React.FC<{at: number; color?: string; out?: number}> = ({at, color = TEAL, out}) => {
	const f = useCurrentFrame();
	const g = cardGeom(WORK);
	const it = g.items[1];
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (!it.colX || f < at || o <= 0.01) return null;
	const x0 = it.colX[0] - 8, x1 = it.colX[it.colX.length - 1] + 8, y0 = it.y0 - 8, y1 = it.y1 + 8;
	return <g opacity={o}><DrawPath d={`M${x0},${y0} L${x1},${y0} L${x1},${y1} L${x0},${y1} Z`} at={at} dur={24} color={color} width={4.5} /></g>;
};
export const LABEL_AT4 = () => [K4.explain + 10, K4.population + 14, K4.assess + 30, K4.stimulus + 18];
export const SceneTakeApart: React.FC = () => (
	<Overlay>
		<AnswerBox spec={ABOX} at={-100} />
		<Demands at={-100} texts={DEMANDS} labels={LABEL_AT4()} pulse={K4.ticks} lit={[{row: 0, from: K4.analyse, to: K4.assess}, {row: 2, from: K4.assess, to: K4.constraint}, {row: 1, from: K4.population - 20, to: K4.stimulus}, {row: 3, from: K4.stimulus, to: K4.four}]} />
		<QuestionCard spec={WORK} at={-100} ann={ANN4()}>
			<TableRing at={K4.stimulus} />
		</QuestionCard>
		<GreyTag x={RX} y={cardBottom() + 40} text="s01: verb, marks, constraints" at={K4.step + 20} size={22} maxW={RW} />
		<Chip x={RX} y={cardBottom() + 110} text="2 verbs + 1 constraint + the stimulus = 4 demands" at={K4.four} size={30} color={INK} maxW={RW} />
		{void K4.verbs}{void K4.tick}
	</Overlay>
);

// ---------- 5. Plan in a minute ----------
const K5 = cues(sc('plan-minute'), {step: 'Step two', judgement: 'a judgement so', decide: 'decide it first', here: 'Here the program', limit: 'with a limit', jot: 'Then jot', vaccine: 'Vaccine memory', ninety: 'Ninety five', coverage: 'Coverage fell', catch: 'Catchup cases', next: 'Next to each', number: 'the number from', plan: "That's your plan", minute: 'about a minute'});
export const PLAN_ROWS = (t: number[], c: number[]): PlanRow[] => [
	{t: 'vaccine → memory B and T cells', at: t[0], chip: {t: '97% (card)', at: c[0]}},
	{t: '95% coverage target → herd immunity', at: t[1], chip: {t: '95 to 96% | 12, 8', at: c[1]}},
	{t: 'coverage fell → cases rose', at: t[2], chip: {t: '95 → 87% | 8 → 310', at: c[2]}},
	{t: 'catch-up → cases fell; limit: already falling', at: t[3], chip: {t: '310 → 180 | 89 → 95% | 180 → 6', at: c[3]}},
];
export const VERDICT = 'Verdict: probably contributed (+ condition)';
/** Teal underlines on the cells each plan chip uses (card annotations), from frame c[i]. */
export const CELLS = (c: number[], out?: number): Ann[] => [
	{kind: 'given', phrase: '97%', item: 0, at: c[0], color: TEAL, out},
	{kind: 'given', phrase: '96', item: 1, at: c[1], color: TEAL, out}, {kind: 'given', phrase: '95', item: 1, at: c[1] + 4, color: TEAL, out}, {kind: 'given', phrase: '12', item: 1, at: c[1] + 8, color: TEAL, out}, {kind: 'given', phrase: '8', item: 1, at: c[1] + 12, color: TEAL, out},
	{kind: 'given', phrase: '87', item: 1, at: c[2], color: TEAL, out}, {kind: 'given', phrase: '310', item: 1, at: c[2] + 6, color: TEAL, out},
	{kind: 'given', phrase: '180', item: 1, at: c[3], color: TEAL, out}, {kind: 'given', phrase: '89', item: 1, at: c[3] + 4, color: TEAL, out}, {kind: 'given', phrase: '95', occ: 2, item: 1, at: c[3] + 8, color: TEAL, out}, {kind: 'given', phrase: '6', item: 1, at: c[3] + 12, color: TEAL, out},
];
export const cardShrink = (from = 0) => (fr: number) => lerp(1, CARD_S, smooth(prog(fr, from, 26)));
export const PLAN_Y = 96;
export const PLAN_SIZE = 27;
export const ScenePlan: React.FC = () => {
	const c = [0, 1, 2, 3].map(i => K5.number + 16 + i * 16);
	const rows = PLAN_ROWS([K5.vaccine, K5.ninety, K5.coverage, K5.catch], c);
	const ph = planLayout(RW, rows, VERDICT, PLAN_SIZE).h;
	return (
		<Overlay>
			<AnswerBox spec={ABOX} at={-100} />
			<Demands at={-100} texts={DEMANDS} labels={ALL4} />
			<QuestionCard spec={WORK} at={-100} s={cardShrink(0)} ann={[{kind: 'verb', phrase: 'Analyse', at: -100}, {kind: 'verb', phrase: 'Assess', at: -100}, ...CELLS(c)]} />
			<PlanCard x={RX} y={PLAN_Y} w={RW} at={K5.step} verdict={{t: VERDICT, at: K5.here}} rows={rows} clock={K5.minute} size={PLAN_SIZE} />
			<Stopwatch x={RX + 40} y={PLAN_Y + ph + 60} at={K5.minute} label="about 60 s" r={28} />
			<Chip x={ABOX.x + 90} y={ABOX.y + 80} text="judgement asked for? decide it first" at={K5.decide} out={K5.jot} size={34} color={GREEN} />
			{void K5.judgement}{void K5.limit}{void K5.next}{void K5.plan}{void GREY}{void INK}
		</Overlay>
	);
};
