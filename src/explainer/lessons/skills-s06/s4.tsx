// S06 scenes 10 to 15: the Chemistry drill (marble chips and acid; the student's pencil graph with equally spaced
// times, no unit and dot to dot), its brief feedback (the axis re-spaces, the label gains its unit, a smooth curve of
// best fit; "best fit must be straight" crossed), the Biology drill (antiseptic discs; describe the relationship), its
// brief feedback (a small graph, direction, data, change; the no-numbers answer crossed), the decision board and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AnswerBox, Chip, CrossedHabit, DrawPath, DrillCountdown, GREY_INK, GreyTag, HandLine, Heading, INK, KeyNotes, Overlay, Plate, QuestionCard, RoutineStrip, T, TEAL, ZONE, cardGeom, lerp,
	plateW, prog, smooth,
} from './kit';
import type {ARow, CardSpec} from './kit';
import {scribbleEllipse} from '../../kit';
import {DISCPLATE, MARBLE, SX, SW, hold, sc} from './common';
import type {Grid} from './common';
import {AxesInk, GridPaper, PathLine, TERRA, Ticks, TrendMove, XMark} from './pieces';

const ALL4 = [-100, -100, -100, -100];
const PENCIL = '#5d5a55';
const scribbleEllipseSafe = (x: number, y: number, rx: number, ry: number) => scribbleEllipse(x, y, rx, ry, 5, 1.1);

// ---------- 10/11. Drill 1 (Chemistry) ----------
const d1Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 230, size: 26, note: 'example data',
	items: [
		{text: 'A student measured the volume of carbon dioxide produced when marble chips reacted with excess hydrochloric acid. Her results and her graph are shown.', at: t[0]},
		{table: {head: ['Time (s)', '0', '30', '60', '120', '240'], rows: [['Volume of CO_2 (mL)', '0', '22', '38', '55', '62']], colW: [300, 110, 110, 110, 110, 110]}, at: t[1]},
		{text: "Identify THREE problems with the student's graph and explain how to correct each.", marks: '3 marks', at: t[2], marksAt},
	],
});
const D1 = d1Spec();
const MarbleSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(170, g.slot.h - 34), w = plateW(MARBLE, h);
	const x = g.slot.x + (g.slot.w - w) / 2, y = g.slot.y + 4;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={MARBLE} x={x} y={y} h={h} />
			<T x={x + w / 2} y={y + h + 22} text="marble chips in acid" size={16} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const TIMES = [0, 30, 60, 120, 240], VOLS = [0, 22, 38, 55, 62];
const gas = (t: number) => 64 * (1 - Math.exp(-t / 60));
const g1 = (): Grid => ({x: ZONE.box.x + 80, y: D1.y + cardGeom(D1).h + 50, s: 20, nx: 16, ny: 14});
/** The student's graph; `fix` 0..1 re-spaces the time axis to real positions, `unit` adds the unit, `curve` draws the
 *  curve of best fit; `rings` frames ring the faulty parts. */
const StudentGraph: React.FC<{at: number; fix?: number; unitAt?: number; curveAt?: number; ringAt?: [number, number, number]; segOut?: number}> = ({at, fix = 0, unitAt, curveAt, ringAt, segOut}) => {
	const f = useCurrentFrame();
	const g = g1();
	const W = g.nx * g.s, H = g.ny * g.s;
	const eqX = (i: number) => g.x + (i * W) / 4;
	const realX = (t: number) => g.x + (t / 240) * W;
	const px = (i: number) => lerp(eqX(i), realX(TIMES[i]), smooth(fix));
	const py = (v: number) => g.y + H - (v / 70) * H;
	const pts = TIMES.map((_, i) => [px(i), py(VOLS[i])] as [number, number]);
	const xticks = fix < 0.5 ? TIMES.map((t, i) => ({pos: eqX(i), label: `${t}`})) : [0, 30, 60, 90, 120, 150, 180, 210, 240].map(t => ({pos: realX(t), label: `${t}`}));
	const unitOn = unitAt !== undefined && f >= unitAt;
	const ring = (x: number, y: number, rx: number, ry: number, t?: number) => (t !== undefined && f >= t ? <DrawPath d={scribbleEllipseSafe(x, y, rx, ry)} at={t} dur={14} color={TERRA} width={4} /> : null);
	return (
		<g opacity={prog(f, at, 14)}>
			<T x={g.x + W / 2} y={g.y - 14} text="Gas produced over time" size={20} weight={600} color={PENCIL} anchor="middle" hand />
			<GridPaper g={g} at={at} />
			<AxesInk g={g} at={at + 4} width={3} />
			<Ticks g={g} axis="x" ticks={xticks} at={fix < 0.5 ? at + 8 : -100} size={16} color={PENCIL} />
			<Ticks g={g} axis="y" ticks={[0, 10, 20, 30, 40, 50, 60, 70].map(v => ({pos: py(v), label: `${v}`}))} at={at + 8} size={16} color={PENCIL} />
			<T x={g.x + W / 2} y={g.y + H + 54} text="Time (s)" size={20} weight={600} color={PENCIL} anchor="middle" />
			<g transform={`translate(${g.x - 46},${g.y + H / 2}) rotate(-90)`}><T x={0} y={0} text={unitOn ? 'Volume of CO_2 (mL)' : 'volume'} size={20} weight={unitOn ? 700 : 600} color={unitOn ? INK : PENCIL} anchor="middle" /></g>
			<PathLine pts={pts} at={at + 14} dur={18} color={PENCIL} width={2.5} out={segOut} />
			{pts.map((p, i) => <XMark key={i} x={p[0]} y={p[1]} at={at + 10 + i * 3} s={6} color={PENCIL} />)}
			{curveAt !== undefined ? <PathLine pts={Array.from({length: 25}, (_, i) => { const t = i * 10; return [realX(t), py(gas(t))] as [number, number]; })} at={curveAt} dur={24} color={INK} width={3.5} /> : null}
			{ringAt ? ring(g.x + W / 2, g.y + H + 26, W / 2 + 14, 18, ringAt[0]) : null}
			{ringAt ? ring(g.x - 46, g.y + H / 2, 18, 60, ringAt[1]) : null}
			{ringAt ? ring((pts[0][0] + pts[4][0]) / 2, (pts[0][1] + pts[4][1]) / 2, (pts[4][0] - pts[0][0]) / 2 + 16, (pts[0][1] - pts[4][1]) / 2 + 16, ringAt[2]) : null}
		</g>
	);
};
const box1 = () => ({x: ZONE.box.x + 470, y: g1().y - 20, w: 1030, lines: 5, lh: 44, size: 26, margin: 80});
const K10 = cues(sc('drill-1'), {turn: 'Your turn', one: 'Do the one', chem: 'Chemistry first', student: 'A student collected', drew: 'drew the graph', identify: 'Identify three', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold('drill-1');
	const spec = d1Spec([K10.student, K10.drew - 10, K10.identify], K10.identify + 30);
	const b = box1();
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			
			<QuestionCard spec={spec} at={K10.chem - 6}><MarbleSlot spec={spec} at={K10.student + 30} /></QuestionCard>
			<StudentGraph at={K10.drew} />
			<AnswerBox spec={b} at={K10.identify} counter={{total: 3, label: true}} />
			<GreyTag x={b.x + 560} y={b.y + 330} text="do the one in your subject, or both" at={K10.one} size={22} />
			<DrillCountdown hold={h} at={K10.pause} x={b.x + 40} y={b.y + 400} cx={b.x + 700} cy={b.y + 440} r={46} />
			{void K10.turn}
		</Overlay>
	);
};
const K11 = cues(sc('feedback-1'), {gaps: 'equal gaps', even: 'even', steps: 'equal steps', nounit: 'no unit', label: 'label it', ml: 'millilitres', dots: 'joined the dots', smooth: 'smooth curve', habit: 'habit to drop', straight: 'must be straight', curve: ['a curve', 1]});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const b = box1();
	const rows: ARow[] = [
		{text: 'Uneven time scale (30, 60, 120, 240 s equally spaced) → use equal steps, for example every 30 s, each time at its real position', at: K11.even, dur: 60, tick: K11.steps + 20},
		{text: "No unit on the volume axis → 'Volume of CO_2 (mL)'", at: K11.nounit, dur: 40, tick: K11.ml},
		{text: 'Dot to dot → one smooth curve of best fit, levelling off', at: K11.dots, dur: 40, tick: K11.smooth + 30},
	];
	return (
		<Overlay>
			<QuestionCard spec={D1} at={-100} ann={[{kind: 'verb', phrase: 'Identify', at: 4}, {kind: 'given', phrase: 'explain how to correct', at: 10}, {kind: 'marks', at: 14}, {kind: 'given', phrase: '30 60 120 240', item: 1, at: K11.even}, {kind: 'given', phrase: 'Volume of CO_2 (mL)', item: 1, at: K11.nounit}]}>
				<MarbleSlot spec={D1} at={-100} />
			</QuestionCard>
			<StudentGraph at={-100} fix={prog(f, K11.steps + 10, 24)} unitAt={K11.label + 20} curveAt={K11.smooth} ringAt={[K11.even, K11.nounit, K11.dots]} segOut={K11.smooth + 10} />
			<AnswerBox spec={b} rows={rows} at={-100} counter={{total: 3, label: true}} />
			<GreyTag x={b.x} y={b.y + 300} text="levels off as the marble chips are used up (Year 11 rates)" at={K11.smooth + 30} size={20} />
			<CrossedHabit x={b.x} y={b.y + 370} text="a line of best fit must be straight" at={K11.habit} cross={K11.curve} caption="best fit can be a curve" size={28} maxW={620} />
			{void K11.gaps}{void K11.straight}{void SW}
		</Overlay>
	);
};

// ---------- 12/13. Drill 2 (Biology) ----------
const d2Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 230, size: 25, note: 'example data',
	items: [
		{text: 'A student soaked paper discs (6 mm in diameter) in five concentrations of an antiseptic and placed them on agar spread with a harmless bacterium. After incubation she measured the diameter of the clear zone around each disc (the zone of inhibition), including the disc. The table shows her mean results.', at: t[0]},
		{table: {head: ['Antiseptic concentration (%)', '0', '1', '2', '3', '6'], rows: [['Mean zone diameter (mm)', '6', '9', '12', '15', '16']], colW: [400, 100, 100, 100, 100, 100]}, at: t[1]},
		{text: 'Describe the relationship between antiseptic concentration and zone diameter.', marks: '2 marks', at: t[2], marksAt},
	],
});
const D2 = d2Spec();
const DiscSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(170, g.slot.h - 40), w = plateW(DISCPLATE, h);
	const x = g.slot.x + (g.slot.w - w) / 2, y = g.slot.y + 4;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={DISCPLATE} x={x} y={y} h={h} />
			<T x={x + w / 2} y={y + h + 22} text="a disc test: clear zones" size={16} weight={600} color={GREY_INK} anchor="middle" />
			<T x={x + w / 2} y={y + h + 42} text="around discs" size={16} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const box2 = () => ({x: ZONE.box.x, y: D2.y + cardGeom(D2).h + 24, w: ZONE.box.w, lines: 4, lh: 46, size: 26, margin: 80});
const K12 = cues(sc('drill-2'), {bio: 'Now Biology', student: 'A student measured', mean: 'Her mean results', describe: 'Describe the relationship', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold('drill-2');
	const spec = d2Spec([K12.student, K12.mean, K12.describe], K12.describe + 40);
	const b = box2();
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K12.bio - 6}><DiscSlot spec={spec} at={K12.student + 30} /></QuestionCard>
			<AnswerBox spec={b} at={K12.describe} counter={{total: 2, label: true}} />
			<DrillCountdown hold={h} at={K12.pause} x={SX} y={b.y + 60} cx={SX + 240} cy={b.y + 180} r={46} />
		</Overlay>
	);
};
const K13 = cues(sc('feedback-2'), {from: 'From zero to three', steadily: 'grew steadily', sixFifteen: 'six to fifteen', three6: 'From three to six', one: 'one more millimetre', levelled: 'levelled off', ddc: "That's direction", drop: 'answer to drop', asconc: 'as concentration increases', misses: 'misses'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const b = box2();
	const rows: ARow[] = [
		{text: 'From 0% to 3%, zone diameter increased steadily with concentration, from 6 mm to 15 mm (about 3 mm per 1%)', at: K13.steadily, dur: 70, tick: K13.sixFifteen + 30},
		{text: 'From 3% to 6%, it increased only 1 mm (15 to 16 mm): it levelled off', at: K13.three6 + 20, dur: 60, tick: K13.levelled + 10},
	];
	const g: Grid = {x: SX + 70, y: b.y + 10, s: 22, nx: 18, ny: 9};
	const W = g.nx * g.s, H = g.ny * g.s;
	const cx = (c: number) => g.x + (c / 6) * W, cy = (d: number) => g.y + H - (d / 18) * H;
	const C = [0, 1, 2, 3, 6], D = [6, 9, 12, 15, 16];
	return (
		<Overlay>
			<QuestionCard spec={D2} at={-100} ann={[{kind: 'verb', phrase: 'Describe', at: 4}, {kind: 'given', phrase: 'relationship', at: 10}, {kind: 'marks', at: 14},
				{kind: 'given', phrase: '0', item: 1, at: K13.sixFifteen}, {kind: 'given', phrase: '3', item: 1, at: K13.sixFifteen + 6}, {kind: 'given', phrase: '6', occ: 2, item: 1, at: K13.sixFifteen + 12}, {kind: 'given', phrase: '15', item: 1, at: K13.sixFifteen + 18},
				{kind: 'given', phrase: '6', occ: 1, item: 1, at: K13.levelled}, {kind: 'given', phrase: '16', item: 1, at: K13.levelled + 8}]}>
				<DiscSlot spec={D2} at={-100} />
			</QuestionCard>
			<g opacity={prog(f, K13.from, 14)}>
				<GridPaper g={g} at={K13.from} />
				<AxesInk g={g} at={K13.from + 4} width={3} />
				<Ticks g={g} axis="x" ticks={[0, 1, 2, 3, 4, 5, 6].map(c => ({pos: cx(c), label: `${c}`}))} at={K13.from + 8} size={15} stagger={1} />
				<Ticks g={g} axis="y" ticks={[0, 6, 12, 18].map(d => ({pos: cy(d), label: `${d}`}))} at={K13.from + 8} size={15} />
				<T x={g.x + W / 2} y={g.y + H + 46} text="concentration (%)" size={17} weight={600} color={GREY_INK} anchor="middle" />
				<g transform={`translate(${g.x - 38},${g.y + H / 2}) rotate(-90)`}><T x={0} y={0} text="zone (mm)" size={17} weight={600} color={GREY_INK} anchor="middle" /></g>
				{C.map((c, i) => <XMark key={i} x={cx(c)} y={cy(D[i])} at={K13.from + 12 + i * 3} s={6} />)}
				<PathLine pts={[[cx(0), cy(6)], [cx(3), cy(15)]]} at={K13.steadily} dur={18} color={TEAL} width={3.5} />
				<PathLine pts={[[cx(3), cy(15)], [cx(6), cy(16)]]} at={K13.levelled - 10} dur={18} color={TEAL} width={3.5} />
			</g>
			<TrendMove x={SX} y={g.y + H + 56} w={SW} rowH={62} rows={[K13.steadily, K13.sixFifteen, K13.levelled]} lit={[{row: 0, from: K13.steadily, to: K13.sixFifteen}, {row: 1, from: K13.sixFifteen, to: K13.three6}, {row: 2, from: K13.levelled, to: K13.ddc + 40}]} />
			<AnswerBox spec={b} rows={rows} at={-100} counter={{total: 2, label: true}} />
			<CrossedHabit x={ZONE.box.x} y={b.y + 50 + 4 * 46 + 60} text="as concentration increases, the zone increases" at={K13.asconc} cross={K13.misses} caption="no data; misses the change" size={28} maxW={760} />
			{void K13.one}{void K13.drop}
		</Overlay>
	);
};

// ---------- 14. Decision board ----------
const K14 = cues(sc('decision-rule'), {so: 'So, for a graph', read: 'Read the axes', draw: 'Draw with TAILS', describe: 'Describe with', points: 'percentage points', inside: 'Inside the data', next: 'Next:'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [
		{h: 'Read:', t: 'axes, units, one small square', ex: '28 mL, not 28', at: K14.read},
		{h: 'Draw:', t: 'TAILS + best fit', ex: 'years at real positions', at: K14.draw},
		{h: 'Describe:', t: 'direction, data, change', ex: '4% to 19%, about 1.5 points a year', at: K14.describe},
		{h: 'Extend:', t: 'inside, read it; outside, doubt it', ex: '2040: assumes the same rate', at: K14.inside},
	];
	return (
		<>
			<Heading text="Graphs: read it, draw it, describe it" at={4} size={56} />
			<Overlay>
				{rows.map((r, i) => {
					const o = prog(f, r.at - 6, 12);
					if (o <= 0.01) return null;
					const lit = f >= r.at && f < (rows[i + 1]?.at ?? K14.next);
					const y = 200 + i * 150;
					return (
						<g key={i} opacity={o * (lit ? 1 : 0.72)}>
							<rect x={150} y={y} width={1620} height={128} rx={24} fill={lit ? '#fff3d9' : '#fffefb'} stroke={lit ? '#e9b93c' : 'rgba(60,45,20,0.2)'} strokeWidth={3.5} />
							<T x={190} y={y + 58} text={r.h} size={44} hand weight={700} color={INK} />
							<T x={420} y={y + 58} text={r.t} size={40} hand weight={700} color={INK} />
							<T x={420} y={y + 104} text={r.ex} size={26} weight={600} color={GREY_INK} />
						</g>
					);
				})}
				<GreyTag x={1150} y={582} text="say whether you mean percentage points or per cent" at={K14.points} size={20} />
				<Chip x={980} y={830} text="Next: practical questions (fixes that fix)" at={K14.next} size={36} color="#8a5a12" fill="#fff8e6" />
				{void K14.so}{void HandLine}
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Read the axes first: quantity, unit, value of one small square. Write every value with its unit.',
	'Drawing (TAILS): Title, Axes (independent variable along the bottom), Intervals even (uneven years at their real positions), Labels with units, Scale. Small crosses; a line or curve of best fit, not dot to dot.',
	'Describe a trend: direction, data (values with units, a rate if useful), and any change. Explain adds a plausible reason (the graph alone doesn\'t prove the cause). Say "percentage points" for a difference between percentages (4% to 19% = 15 points, a 375% increase).',
	'Interpolate: read between data points from the line of best fit, with read-off lines shown.',
	'Extrapolate: beyond the data, the value assumes the trend continues. If asked, extend it and state that assumption; judge how far beyond the data it goes.',
	'Line graph: a continuous relationship or change over time (like years and percentages). Column graph: separate categories (like different antibiotics), with gaps between columns.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="TAILS, then best fit." tag="Inside the data, read it. Outside, doubt it." size={29} aidTop={790} />;
