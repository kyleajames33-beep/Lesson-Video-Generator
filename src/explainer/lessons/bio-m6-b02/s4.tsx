// M6 B02 scenes 11a to 13: two unseen worded items (compare UV and X-rays; the UV yeast data), each kept whole on
// screen through "Pause here to answer." and its 10 s countdown, brief feedback with the givens underlined as they are
// used and one crossed classic mistake, the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, DataTable, DrawPath, Heading, MistakeChip, ModelLine, Overlay, PlateB, Sx, prog} from '../bio-m5-b13/shared';
import type {Col} from '../bio-m5-b13/shared';
import {NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {PLATES} from '../bio-m6-b01/assets';
import {S, hold} from './common';
import {AMBER, AMBER_INK, BEAKER, CardBox, CurveArrow, INK, INK_SOFT, MechIcon, SUN, wForH} from './parts';

const QX = 140;
const PauseHold: React.FC<{id: string; at: number; y?: number; cx?: number; cy?: number}> = ({id, at, y = 1010, cx = 1690, cy = 880}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={y} text="Pause here to answer." size={52} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};

// ---------- 11a. Attempt one (UV against X-rays) ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'Ultraviolet radiation and X-rays', compare: 'Compare how each increases', which: 'and which cells each', pause: 'Pause here to answer'});
type T1 = {a: number; b: number; c: number};
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([
	{text: 'Ultraviolet (UV) radiation and X-rays are both forms of electromagnetic radiation.', at: t.a},
	{text: 'Compare how each increases the risk of mutation in human cells,', at: t.b, para: true, weight: 700},
	{text: 'and which cells each is likely to affect. (4 marks)', at: t.c, weight: 700},
] as QBlock[], marks);
const Question1: React.FC<{t: T1; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<CardBox x={100} y={190} w={1720} h={250} at={t.a - 6} />
		<QText q={Q1(t, marks)} x={QX} y={260} w={1640} size={40} card={false} />
	</>
);
export const SceneAttempt: React.FC = () => (
	<>
		<Heading text="Exam question 1" at={KA.two} size={50} />
		<Overlay>
			<Question1 t={{a: KA.first, b: KA.compare, c: KA.which}} />
			<CardBox x={100} y={480} w={1420} h={360} at={KA.which + 10} dash="10 7" />
			<Sx x={130} y={524} text="answer" size={26} color={INK_SOFT} weight={700} at={KA.which + 10} />
			<PauseHold id="attempt" at={KA.pause} />
		</Overlay>
	</>
);

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {both: 'Both damage DNA', repair: 'repair fixes most of it', neither: 'neither guarantees a mutation', differ: 'They differ', uvisnt: "UV isn't ionising", joins: 'It joins neighbouring thymines', so: 'so wrong bases go in', skin: 'mostly in skin cells', xion: 'X-rays are ionising', breaks: 'break DNA strands', rej: 'wrongly rejoined breaks', deep: 'even in deep cells', saying: 'Saying UV and X-rays damage DNA', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100};
qCheck(Q1(ALL1).blocks, [{phrase: 'both forms of electromagnetic radiation', at: 0}, {phrase: 'increases the risk', at: 0}, {phrase: 'which cells each is likely to affect', at: 0}, {phrase: 'X-rays', at: 0}]);
export const SceneFeedbackOne: React.FC = () => {
	const cols = [
		{x: 100, head: 'UV', color: '#5c3f8a', at: KB.uvisnt, lines: [['not ionising', KB.uvisnt], ["bonds neighbouring T's (thymine dimer)", KB.joins], ['kink → wrong base when copied', KB.so], ['mainly skin cells', KB.skin]] as [string, number][]},
		{x: 980, head: 'X-rays', color: '#2d5584', at: KB.xion, lines: [['ionising', KB.xion], ['breaks strands (directly and via free radicals)', KB.breaks], ['wrongly rejoined breaks lose or swap pieces', KB.rej], ['reach deep cells', KB.deep]] as [string, number][]},
	];
	return (
		<>
			<Heading text="Compare: one similarity, then the differences" at={4} size={50} />
			<Overlay>
				<Question1 t={ALL1} marks={[
					{phrase: 'both forms of electromagnetic radiation', at: KB.both},
					{phrase: 'increases the risk', at: KB.neither},
					{phrase: 'which cells each is likely to affect', at: KB.skin},
					{phrase: 'X-rays', at: KB.xion},
				]} />
				<ModelLine x={130} y={500} text="similarity: both damage DNA; most damage is repaired, so neither guarantees a mutation" at={KB.repair} size={30} />
				{cols.map((c, k) => (
					<g key={k}>
						<CardBox x={c.x} y={540} w={840} h={350} at={c.at - 6} stroke={c.color} sw={3} />
						<Sx x={c.x + 30} y={600} text={c.head} size={46} color={c.color} hand at={c.at} />
						{c.lines.map(([t, at], j) => <ModelLine key={j} x={c.x + 60} y={660 + j * 58} text={t} at={at} size={29} />)}
					</g>
				))}
				<MistakeChip x={100} y={930} text="UV and X-rays damage DNA in exactly the same way" at={KB.saying} cross={KB.mistake} size={30} />
				{void KB.differ}
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two (the UV yeast data) ----------
const KC = cues(S('attempt-two'), {second: 'Second', student: 'A student spread equal volumes', exposed: 'exposed them to UV light', incub: 'then incubated them', table: 'The table shows', describe: 'Describe the relationship', assess: 'Then assess', pause: 'Pause here to answer'});
export const YEAST: [number, number][] = [[0, 142], [15, 98], [30, 61], [60, 24], [120, 5]];
(() => {
	for (let i = 1; i < YEAST.length; i++) if (!(YEAST[i][1] < YEAST[i - 1][1])) throw new Error('M6 B02: colonies must fall with exposure');
	const rate = YEAST.slice(1).map((p, i) => (YEAST[i][1] - p[1]) / (p[0] - YEAST[i][0]));
	if (!(rate[0] > rate[rate.length - 1])) throw new Error('M6 B02: the drop must be steepest at first');
})();
type T2 = {a: number; b: number; c: number; d: number; e: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'A student spread equal volumes of the same yeast suspension onto agar plates,', at: t.a},
	{text: 'exposed the plates to UV light for different times at a fixed distance,', at: t.b},
	{text: 'then incubated all plates under the same conditions. Each time was tested on three plates.', at: t.c},
	{text: '(a) Describe the relationship between UV exposure time and the number of colonies. (2 marks)', at: t.d, para: true, weight: 700},
	{text: '(b) The student concluded that UV increased the mutation rate in the yeast. Assess this conclusion. (3 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], marks);
const COLS_Y: Col[] = [{w: 300, head: 'UV exposure time (s)', align: 'middle'}, {w: 230, head: 'mean colonies', align: 'middle'}];
const ROWS_Y = YEAST.map(([t, n]) => [String(t), String(n)]);
const Question2: React.FC<{t: T2; marks?: QMark[]; rowAt?: number; hot?: (r: number) => number}> = ({t, marks = [], rowAt, hot}) => (
	<>
		<CardBox x={100} y={180} w={1720} h={650} at={t.a - 6} />
		<QText q={Q2(t, marks)} x={QX} y={240} w={1080} size={31} card={false} />
		<DataTable x={1270} y={470} cols={COLS_Y} rows={ROWS_Y} at={rowAt ?? -100} rowAt={rowAt === undefined ? undefined : ROWS_Y.map((_, i) => rowAt + 10 + i * 6)} size={30} rowH={52} hot={hot} />
	</>
);
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<Question2 t={{a: KC.student, b: KC.exposed, c: KC.incub, d: KC.describe, e: KC.assess}} rowAt={KC.table} />
				<g opacity={prog(f, KC.exposed, 14)}><PlateB p={PLATES.cabinet} cx={1535} cy={330} w={320} /></g>
				<CardBox x={140} y={620} w={1080} h={86} at={KC.describe + 20} dash="10 7" />
				<Sx x={160} y={656} text="(a)" size={24} color={INK_SOFT} weight={700} at={KC.describe + 20} />
				<CardBox x={140} y={720} w={1080} h={90} at={KC.assess + 20} dash="10 7" />
				<Sx x={160} y={758} text="(b)" size={24} color={INK_SOFT} weight={700} at={KC.assess + 20} />
				<PauseHold id="attempt-two" at={KC.pause} cy={930} cx={1700} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {as: 'As exposure time increases', falls: 'the number of colonies falls', from: 'from a hundred and forty-two', five: 'just five after two minutes', far: 'goes too far', count: 'A colony count shows', surv: 'survived and divided', notmut: 'not how many mutated', measure: 'To measure mutation', trait: 'a changed trait', treating: 'Treating fewer colonies', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, e: -100};
qCheck(Q2(ALL2).blocks, [{phrase: 'number of colonies', at: 0}, {phrase: 'UV increased the mutation rate', at: 0}]);
/** The yeast data as a small line graph (x 0 to 120 s, y 0 to 150 colonies). */
const YeastGraph: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	const X = (t: number) => x + (t / 120) * w, Y = (n: number) => y + h - (n / 150) * h;
	const d = YEAST.map(([t, n], i) => `${i ? 'L' : 'M'}${X(t)},${Y(n)}`).join(' ');
	return (
		<g opacity={prog(f, at, 12)}>
			<rect x={x - 80} y={y - 30} width={w + 110} height={h + 100} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			{[0, 60, 120].map(t => <text key={t} x={X(t)} y={y + h + 24} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 18}} fill={INK_SOFT}>{t}</text>)}
			{[0, 150].map(n => <text key={n} x={x - 10} y={Y(n) + 6} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 18}} fill={INK_SOFT}>{n}</text>)}
			<text x={x + w / 2} y={y + h + 50} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 18}} fill={INK}>UV exposure time (s)</text>
			<text x={x - 46} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 46} ${y + h / 2})`} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 18}} fill={INK}>mean colonies</text>
			<DrawPath d={d} at={at + 6} dur={36} color={AMBER} width={4} />
			{YEAST.map(([t, n], i) => <circle key={i} cx={X(t)} cy={Y(n)} r={7} fill={INK} opacity={prog(f, at + 4 + i * 6, 8)} />)}
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const hot = (r: number) => (r === 0 ? prog(f, KD.from, 10) : r === 4 ? prog(f, KD.five, 10) : 0);
	return (
		<>
			<Heading text="Survival is not mutation" at={4} size={50} />
			<Overlay>
				<Question2 t={ALL2} hot={hot} marks={[{phrase: 'number of colonies', at: KD.falls}, {phrase: 'UV increased the mutation rate', at: KD.far}]} />
				<YeastGraph x={1370} y={225} w={400} h={170} at={KD.as} />
				<ModelLine x={170} y={610} text="(a) longer exposure, fewer colonies: 142 → 5; steepest drop at first" at={KD.five + 10} size={27} />
				<ModelLine x={170} y={656} text="(b) not supported: counts measure survival, not mutation" at={KD.surv} size={27} color={AMBER_INK} />
				<ModelLine x={170} y={700} text="dead cells and mutated cells aren't separated" at={KD.notmut} size={27} />
				<ModelLine x={170} y={744} text="better: count surviving colonies with a new visible trait (e.g. colour)," at={KD.trait} size={27} />
				<Sx x={170} y={782} text="against the 0 s control" size={27} color={INK} weight={600} at={KD.trait + 8} />
				<MistakeChip x={100} y={860} text="fewer colonies = more mutations" at={KD.treating} cross={KD.mistake} size={32} />
				{void KD.count}{void KD.measure}
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to explain how a mutagen works', name: 'name its group', say: 'say what it physically does', finish: 'finish with how the change lasts', damage: 'damage copied before repair', brk: 'a break joined back wrongly', virus: 'DNA inserted by a virus', next: "Next you'll see what one changed base"});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [110, 700, 1290], PY = 230, PW = 520, PH = 470;
	const steps = [
		{at: KE.name, t: '1. name its group', l: ['EM radiation, chemical,', 'or naturally occurring']},
		{at: KE.say, t: '2. what it does to DNA', l: ['kinks, breaks, changes', 'bases, inserts DNA']},
		{at: KE.finish, t: '3. how it lasts', l: []},
	];
	const lasts = [{t: 'copied before repair', at: KE.damage}, {t: 'break rejoined wrongly', at: KE.brk}, {t: 'viral DNA inserted', at: KE.virus}];
	return (
		<>
			<Heading text="Explain any mutagen in three steps" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<CardBox x={PX[i]} y={PY} w={PW} h={PH} at={-100} stroke={AMBER} sw={3.5} />
						<Sx x={PX[i] + 30} y={PY + 66} text={s.t} size={46} color={INK} hand />
						{s.l.map((l, k) => <Sx key={k} x={PX[i] + 30} y={PY + 380 + k * 40} text={l} size={30} color={INK} weight={600} />)}
						{i < 2 ? <CurveArrow a={[PX[i] + PW + 10, PY + PH / 2]} b={[PX[i + 1] - 10, PY + PH / 2]} at={steps[i + 1].at - 4} bow={0} color={AMBER_INK} width={6} /> : null}
					</g>
				))}
				<g opacity={prog(f, KE.name + 10, 14)}>
					<PlateB p={SUN} cx={PX[0] + 100} cy={PY + 220} w={130} id="dr-sun" />
					<PlateB p={BEAKER} cx={PX[0] + 260} cy={PY + 220} w={wForH(BEAKER, 140)} />
					<PlateB p={PLATES.granite} cx={PX[0] + 410} cy={PY + 220} w={150} />
				</g>
				<g opacity={prog(f, KE.say + 10, 14)}>
					{(['kink', 'gap', 'base', 'insert'] as const).map((k, j) => <MechIcon key={k} kind={k} x={PX[1] + 50 + (j % 2) * 230} y={PY + 150 + Math.floor(j / 2) * 110} s={1.5} />)}
				</g>
				{lasts.map((l, k) => <Sx key={k} x={PX[2] + 40} y={PY + 160 + k * 90} text={'• ' + l.t} size={38} color={k === 0 ? AMBER_INK : INK} hand at={l.at} />)}
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={900} y={780} w={920} h={170} at={-100} stroke={AMBER} sw={3.5} />
					<PlateB p={PLATES.sickle} cx={1040} cy={865} w={220} />
					<Sx x={1180} y={878} text="Next: what one changed base does to a protein" size={34} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Mutagen: an agent that increases the chance of a DNA change. Mutation: the change in base sequence itself.',
	'Some base damage becomes a mutation when DNA is copied before repair; a wrongly repaired break or an inserted viral sequence can also make a lasting DNA change. Most damage is repaired, so exposure raises risk; it does not guarantee a mutation.',
	'Electromagnetic radiation: UV is not ionising; it bonds neighbouring thymines (thymine dimer), kinking DNA (mainly skin cells). X-rays and gamma rays are ionising; they break DNA strands directly and through free radicals, and reach deep cells.',
	'Chemicals: base analogues (mimic a base, then mispair); base-modifying chemicals (e.g. in tobacco smoke); chemicals that slide between bases (add or skip a base).',
	'Naturally occurring: background radiation (rocks and soil, radon, cosmic rays), aflatoxin from mould, viruses that insert DNA into a gene or its switch region (breaking it or switching it on). Natural does not mean harmless.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Mutagen = cause, mutation = change. UV kinks, X-rays snap." tag="name the group, say what it does to DNA, say how the change lasts" size={30} aidTop={790} />
);
