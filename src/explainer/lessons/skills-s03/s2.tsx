// S03 scenes 5 to 9: the pair table (with the hair and petal zoom), table to sentence, comparison words and the
// mismatched pair, weak against strong, and what the marking guidelines show.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, DrawSquiggle, GREEN, GREY, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, Overlay, PenArrow, PenTick, RED, RoutineStrip, T, TEAL, WeakStrongPanel,
	ZONE, ansSpans, answerGeom, measure, prog, smooth, vis,
} from './kit';
import type {AnsSpec, ARow, Span} from './kit';
import {scribbleEllipse as scribble} from '../../kit';
import {PT_COLW, PT_HEAD, PT_HEADH, PT_ROWS, PtHead, ROWS3_DONE, ROWS3_TEXT, SnapCardSmall, SplitSlots, box3, boxTop, sc} from './common';
import {HairZoom, PairLines, PairTable, cellAt, pairGeom} from './pieces';

const SX = ZONE.side.x;
const ALL4 = [-100, -100, -100, -100];
const mid = (s: Span[], first = true, dy = 8): [number, number] => { const sp = first ? s[0] : s[s.length - 1]; return [(sp.x1 + sp.x2) / 2, sp.y + dy]; };

// ---------- 5. The pair table ----------
const K5 = cues(sc('pair-table'), {trick: 'the trick', sketch: 'sketch', feature: 'feature', row1: 'Row one', both1: 'both crosses', row2: 'Row two', bothp: 'both parents', row3: 'Row three', between: 'in between', bothc: 'both colours', lines: 'lines up one feature', cases: 'cases'});
export const SceneTable: React.FC = () => {
	const f = useCurrentFrame();
	const top = boxTop();
	const rows = PT_ROWS([
		{at: K5.row1 + 20, link: {at: K5.lines, mark: '='}},
		{at: K5.row2 + 20, note: {at: K5.bothp, text: '≠ red, ≠ white'}, link: {at: K5.lines + 10, mark: '='}},
		{at: K5.row3 + 20, link: {at: K5.lines + 20, mark: '≠'}, glow: [K5.between, K5.lines - 10]},
	]);
	const g = pairGeom(SX, top, PT_COLW, rows, 25, PT_HEADH);
	const zoomOut = K5.lines - 20;
	const zv = vis(f, K5.between, zoomOut + 10, 12);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} none={{row: 3, at: -100}} />
			<SnapCardSmall />
			<AnswerBox spec={box3()} at={-100} counter={{total: 3, label: true}} o={1 - 0.75 * zv}>
				<SplitSlots spec={box3()} at={-100} />
			</AnswerBox>
			<PairTable x={SX} y={top} colW={PT_COLW} rows={rows} head={{labels: PT_HEAD, at: K5.sketch, extra: <PtHead x={SX} y={top} />}} headH={PT_HEADH} featureGlow={[K5.feature, K5.row1]} headDim={K5.row3} />
			<GreyTag x={SX} y={g.bottom + 22} text="one row per feature" at={K5.feature + 6} out={K5.row3} size={24} />
			<HairZoom petal={[560, 700]} roan={[1010, 700]} r={128} petalAt={K5.between} roanAt={K5.bothc} out={zoomOut} />
			{void K5.trick}{void K5.both1}{void K5.cases}
		</Overlay>
	);
};

// ---------- 6. Table to sentence ----------
const K6 = cues(sc('table-to-sentence'), {turn: 'turn each row', r1: 'Row one', inboth: 'in both', r2: 'Row two', both: 'both heterozygotes', r3: 'Row three', snap: 'snapdragons show', whereas: 'whereas', paired: 'Three paired', marks: 'marks'});
export const ROW_T = () => ({at: [K6.inboth, K6.both, K6.snap], tick: [K6.r2 - 14, K6.r3 - 12, K6.paired - 12]});
export const SceneSentence: React.FC = () => {
	const top = boxTop();
	const box = box3();
	const t = ROW_T();
	const rowsT: ARow[] = ROWS3_TEXT.map((text, i) => ({text, at: t.at[i], dur: t.tick[i] - t.at[i] - 12, tick: t.tick[i]}));
	const g = answerGeom(box, rowsT);
	const ptRows = PT_ROWS([{dim: t.at[0] + 50, glow: [K6.r1, t.at[0] + 40]}, {dim: t.at[1] + 50, glow: [K6.r2, t.at[1] + 40]}, {dim: t.at[2] + 60, glow: [K6.r3, t.at[2] + 50]}].map((o, i) => ({...o, link: {at: -100, mark: i < 2 ? '=' : '≠'}})) as never);
	const pg = pairGeom(SX, top, PT_COLW, ptRows, 25, PT_HEADH);
	const r3a = ansSpans(g, 2, 'incomplete dominance'), r3b = ansSpans(g, 2, 'co-dominance');
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} none={{row: 3, at: -100}} />
			<SnapCardSmall />
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={rowsT}
				ann={[{kind: 'ring', row: 0, phrase: 'In both', at: K6.inboth + 6}, {kind: 'ring', row: 1, phrase: 'Both', at: K6.both + 6}, {kind: 'ring', row: 2, phrase: 'whereas', at: K6.whereas + 4}, {kind: 'under', row: 2, phrase: 'incomplete dominance', at: K6.whereas + 26}, {kind: 'under', row: 2, phrase: 'co-dominance', at: K6.whereas + 32}]}>
				<SplitSlots spec={box} at={-100} out={K6.r1} />
			</AnswerBox>
			<PairTable x={SX} y={top} colW={PT_COLW} rows={ptRows} head={{labels: PT_HEAD, at: -100, extra: <PtHead x={SX} y={top} />}} headH={PT_HEADH} headDim={-100} />
			{[0, 1, 2].map(i => (
				<PenArrow key={i} a={[SX - 8, pg.rowY[i] + pg.rowH[i] / 2]} b={[box.x + box.w - 30, g.base(g.rows[i].first) - 10]} at={[K6.r1, K6.r2, K6.r3][i] + 4} out={t.at[i] + 50} color={AMBER_INK} bow={-20} />
			))}
			<PairLines links={[{a: [r3a[0].x1 + 4, r3a[0].y + 11], b: [r3b[0].x1 + 6, r3b[0].y - 30], at: K6.whereas + 40, bow: 0}]} />
		</Overlay>
	);
};

// ---------- 7. Comparison words ----------
const K7 = cues(sc('comparison-words'), {little: 'These little words', sim: 'For similarities', both: 'both', inboth: 'in both', similarly: 'similarly', diff: 'For differences', whereas: 'whereas', while: 'while', but: 'but', unlike: 'unlike', larger: 'larger', slower: 'slower', mis: 'mismatched pair', snap: 'Snapdragons are pink', colour: 'colour with hair', same: 'Same feature'});
const SENT = ['Snapdragons are ', 'pink', ', ', 'whereas', ' cattle ', 'have hair', '.'];
export const SceneWords: React.FC = () => {
	const f = useCurrentFrame();
	const box = box3();
	const tdim = 1 - 0.6 * vis(f, K7.mis, undefined, 12);
	const TX = ZONE.box.x, TW = 990;
	const tray = (y: number, label: string, col: string, words: [string, number][], at: number) => {
		let x = TX + 26;
		return (
			<g opacity={vis(f, at - 4) * tdim}>
				<rect x={TX} y={y} width={TW} height={128} rx={18} fill={CARD} stroke={col} strokeWidth={3.5} />
				<T x={TX + 26} y={y + 42} text={label} size={32} hand weight={700} color={col} />
				{words.map(([w, wat]) => { const x0 = x; x += measure(w, 30, true, 700) + 30 * 1.1 + 14; return <Chip key={w} x={x0} y={y + 60} text={w} at={wat} size={30} color={INK} />; })}
			</g>
		);
	};
	// sentence layout
	const SY = 790, SS = 46;
	const xs: number[] = [];
	let cx = TX;
	SENT.forEach(p => { xs.push(cx); cx += measure(p, SS, true, 700); });
	const wid = (i: number) => measure(SENT[i], SS, true, 700);
	const so = vis(f, K7.snap - 6) * (1 - 0.5 * vis(f, K7.same + 10, undefined, 14));
	const pinkC: [number, number] = [xs[1] + wid(1) / 2, SY + 14], hairC: [number, number] = [xs[5] + wid(5) / 2, SY + 14];
	return (
		<Overlay>
			<SnapCardSmall />
			<AnswerBox spec={box} at={-100} rows={ROWS3_DONE} counter={{total: 3}} move={{at: 0, dur: 20, x: SX, y: top7(), s: 0.5}} o={1 - 0.3 * prog(f, 20, 14)} />
			{tray(410, 'similarity', GREEN, [['both', K7.both], ['in both', K7.inboth], ['similarly', K7.similarly]], K7.sim)}
			{tray(570, 'difference', AMBER_INK, [['whereas', K7.whereas], ['while', K7.while], ['but', K7.but], ['unlike', K7.unlike], ['larger than', K7.larger], ['slower than', K7.slower]], K7.diff)}
			<g opacity={so}>
				{SENT.map((p, i) => <T key={i} x={xs[i]} y={SY} text={p} size={SS} hand weight={700} color={INK} />)}
				<DrawPath d={scribble(xs[3] + wid(3) / 2, SY - 15, wid(3) / 2 + 12, 30, 4, 1.12)} at={K7.snap + 40} dur={14} color={AMBER} width={4} />
				<g opacity={vis(f, K7.colour)}>
					<DrawPath d={`M${xs[1] - 2},${SY + 12} L${xs[1] + wid(1) + 2},${SY + 10}`} at={K7.colour} dur={8} color="#2c4a7c" width={4} />
					<DrawPath d={`M${xs[5] - 2},${SY + 12} L${xs[5] + wid(5) + 2},${SY + 10}`} at={K7.colour + 6} dur={10} color="#2c4a7c" width={4} />
					<T x={pinkC[0]} y={SY + 52} text="colour" size={28} hand weight={700} color="#2c4a7c" anchor="middle" />
					<T x={hairC[0]} y={SY + 52} text="coat type" size={28} hand weight={700} color="#2c4a7c" anchor="middle" />
					<PenArrow a={[pinkC[0] + 52, SY + 42]} b={[hairC[0] - 70, SY + 42]} at={K7.colour + 14} color={RED} dash head={false} bow={-16} />
					<Chip x={(pinkC[0] + hairC[0]) / 2} y={SY + 58} text="≠ feature" at={K7.colour + 20} size={26} color={RED} anchor="middle" />
				</g>
				<DrawPath d={`M${TX - 12},${SY + 4} L${cx + 12},${SY - 34}`} at={K7.colour + 30} dur={12} color={RED} width={6} />
			</g>
			<HandLine x={TX} y={1000} text="Same feature, both sides, one sentence." at={K7.same} size={60} color={TEAL} dur={40} />
			{void K7.little}{void GREY}
		</Overlay>
	);
};
export const top7 = () => boxTop();

// ---------- 8. Weak against strong ----------
const K8 = cues(sc('weak-vs-strong'), {weaker: 'a weaker answer', snap: 'Snapdragons show', cattle: 'Cattle show', every: 'Every word', two: 'two descriptions', nosim: 'no similarity', diff: 'the difference is left', one: 'one of three', fix: 'The fix', pairing: 'pairing'});
const W1 = 'Snapdragons show incomplete dominance, and their offspring are pink.';
const W2 = 'Cattle show co-dominance, and the calves are roan, with red and white hairs.';
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const strong = box3();
	const S = 0.505, BY = 140;
	const map = (p: [number, number]): [number, number] => [SX + (p[0] - strong.x) * S, BY + (p[1] - strong.y) * S];
	const sg = answerGeom(strong, ROWS3_DONE);
	const weak: AnsSpec = {x: ZONE.box.x, y: 140, w: ZONE.box.w, lines: 5, lh: 52, size: 33};
	const wrows: ARow[] = [{text: W1, at: K8.snap, dur: K8.cattle - K8.snap - 14}, {text: W2, at: K8.cattle, dur: K8.every - K8.cattle - 20, gapLines: 1}];
	const wg = answerGeom(weak, wrows);
	const slotY = wg.y + wg.h + 56;
	const blockBox = (r: number, at: number) => {
		const info = wg.rows[r];
		const y0 = wg.ruleY(info.first - 1) + 4, y1 = wg.ruleY(info.first + info.n - 1) - 2;
		return (
			<g key={r} opacity={vis(f, at)}>
				<rect x={wg.tx - 10} y={y0} width={wg.tw + 4} height={y1 - y0} rx={10} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="8 6" />
			</g>
		);
	};
	const pa = ansSpans(wg, 0, 'incomplete dominance,'), pb = ansSpans(wg, 1, 'co-dominance,');
	const qa = ansSpans(wg, 0, 'pink.'), qb = ansSpans(wg, 1, 'red and white hairs.');
	const s3a = ansSpans(sg, 2, 'incomplete dominance'), s3b = ansSpans(sg, 2, 'co-dominance');
	return (
		<Overlay>
			<SnapCardSmall o={1 - prog(f, 0, 16)} />
			<WeakStrongPanel
				strong={{spec: strong, rows: ROWS3_DONE, total: 3, ann: [{kind: 'ring', row: 0, phrase: 'In both', at: -100}, {kind: 'ring', row: 1, phrase: 'Both', at: -100}, {kind: 'ring', row: 2, phrase: 'whereas', at: -100}], to: {x: SX, y: BY, s: S}, moveAt: 2, dim: 0.75}}
				weak={{spec: weak, rows: wrows, total: 3, ann: [{kind: 'tick', row: 1, phrase: 'Cattle show co-dominance,', at: K8.one + 8}], at: K8.weaker}}
				lost={{x: weak.x, y: slotY + 170, text: '−2: no similarity; the difference is never stated as a pair', at: K8.one + 40, maxW: 970}} />
			<PairLines links={[{a: map([s3a[0].x1 + 4, s3a[0].y + 11]), b: map([s3b[0].x1 + 6, s3b[0].y - 30]), at: K8.two + 10, bow: 0}]} />
			<GreyTag x={weak.x + 230} y={weak.y + 12} text="correct biology" at={K8.every} size={22} />
			{blockBox(0, K8.two)}{blockBox(1, K8.two + 8)}
			{['similarity?', 'the difference, said in one sentence?'].map((t, i) => (
				<g key={t} opacity={vis(f, [K8.nosim, K8.diff][i])}>
					<rect x={weak.x} y={slotY + i * 76} width={i === 0 ? 320 : 640} height={60} rx={12} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
					<T x={weak.x + 20} y={slotY + i * 76 + 40} text={t} size={32} hand weight={700} color={GREY_INK} />
				</g>
			))}
			<PairLines links={[
				{a: mid(pa, true, 12), b: mid(pb, true, -30), at: K8.pairing, dash: true, bow: -30},
				{a: mid(qa, true, 12), b: mid(qb, true, -30), at: K8.pairing + 10, dash: true, bow: 30},
			]} />
			{void INK_SOFT}{void RED}
		</Overlay>
	);
};

// ---------- 9. What the guidelines show ----------
const K9 = cues(sc('what-guidelines-show'), {nesa: "NESA's marking guidelines", two: 'two sentences', table: 'In a table question', all: 'all', most: 'most', complete: 'complete pairing', criteria: 'The criteria are set'});
export const SceneGuide: React.FC = () => {
	const f = useCurrentFrame();
	const frameOut = K9.table + 30;
	const tblOut = K9.complete - 8;
	const X = 300;
	const l1 = 'A similarity is that both', l2 = 'A difference is that';
	const fs = 44;
	const allBar = smooth(prog(f, K9.all + 20, 20));
	const most = smooth(prog(f, K9.most, 18));
	const ptRows = PT_ROWS([{at: -100, link: {at: -100, mark: '='}}, {at: -100, link: {at: -100, mark: '='}}, {at: -100, link: {at: -100, mark: '≠'}}]);
	const PY = 300;
	const pg = pairGeom(X, PY, PT_COLW.map(w => w * 1.25), ptRows, 28, 64);
	const po = vis(f, K9.complete);
	return (
		<Overlay>
			{/* the sample-answer frame: form only */}
			<g opacity={1 - 0.55 * prog(f, frameOut, 14)}>
				<GreyTag x={X} y={210} text="a NESA Biology sample answer, 2025: its form only" at={K9.two} size={24} out={K9.complete - 10} />
			</g>
			<g opacity={vis(f, K9.two, frameOut, 12)}>
				<HandLine x={X} y={360} text={l1} at={K9.two + 6} size={fs} color={INK} />
				<DrawSquiggle x={X + measure(l1, fs, true, 700) + 20} y={346} w={420} at={K9.two + 30} seed={2} />
				<HandLine x={X} y={450} text={l2} at={K9.two + 60} size={fs} color={INK} />
				<DrawSquiggle x={X + measure(l2, fs, true, 700) + 20} y={436} w={260} at={K9.two + 84} seed={4} />
				<HandLine x={X + measure(l2, fs, true, 700) + 300} y={450} text=", whereas" at={K9.two + 96} size={fs} color={AMBER_INK} />
				<DrawSquiggle x={X + measure(l2, fs, true, 700) + 300 + measure(', whereas', fs, true, 700) + 16} y={436} w={240} at={K9.two + 108} seed={6} />
				<Chip x={X} y={500} text="a similarity" at={K9.two + 30} size={26} color={GREEN} />
				<Chip x={X + 230} y={500} text="a difference" at={K9.two + 60} size={26} color={AMBER_INK} />
			</g>
			{/* all against most */}
			<g opacity={vis(f, K9.all, tblOut, 12)}>
				{[0, 1, 2].map(i => (
					<g key={i}>
						<rect x={X} y={300 + i * 70} width={460} height={60} rx={10} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2} />
						<DrawSquiggle x={X + 20} y={330 + i * 70} w={160} at={K9.all + i * 6} seed={i + 1} />
						<DrawSquiggle x={X + 250} y={330 + i * 70} w={160} at={K9.all + 4 + i * 6} seed={i + 7} />
						<line x1={X + 230} x2={X + 230} y1={306 + i * 70} y2={354 + i * 70} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<g opacity={i === 2 ? 1 - most : 1}><PenTick x={X + 500} y={330 + i * 70} at={K9.all + 10 + i * 8} s={32} /></g>
					</g>
				))}
				<rect x={900} y={330} width={(640 - 120 * most) * allBar} height={80} rx={12} fill={AMBER} opacity={0.85} />
				<T x={920} y={384} text="all features compared: 3" size={34} weight={700} color="#3d2a05" o={allBar * (1 - most)} />
				<T x={920} y={384} text="most features compared: 2" size={34} weight={700} color="#3d2a05" o={most} />
				<GreyTag x={900} y={440} text="a NESA Biology marking guideline, 2024" at={K9.all + 20} size={22} />
			</g>
			{/* complete pairing */}
			<g opacity={po}>
				<PairTable x={X} y={PY} colW={PT_COLW.map(w => w * 1.25)} rows={ptRows} head={{labels: PT_HEAD, at: K9.complete}} size={28} headH={64} />
				{[0, 1, 2].map(i => <PenTick key={i} x={X + pg.w + 40} y={pg.rowY[i] + pg.rowH[i] / 2} at={K9.complete + 20 + i * 8} s={34} />)}
				<T x={X} y={PY - 24} text="every feature paired" size={34} hand weight={700} color={GREEN} o={prog(f, K9.complete + 10, 10)} />
				<T x={1180} y={PY - 24} text="loose descriptions" size={34} hand weight={700} color={GREY_INK} o={prog(f, K9.complete + 20, 10)} />
				{['pink flowers', 'heterozygous', 'roan coat', 'red hairs', 'dominance', 'white hairs'].map((t, i) => (
					<Chip key={t} x={1180 + (i % 2) * 240 + (i % 3) * 18} y={PY + 30 + Math.floor(i / 2) * 110 + (i % 2) * 30} text={t} at={K9.complete + 16 + i * 5} size={30} color={GREY} fill="#eceae4" textColor={GREY_INK} />
				))}
			</g>
			<GreyTag x={960} y={960} text="NESA's criteria are set question by question" at={K9.criteria} size={26} anchor="middle" />
			{void K9.nesa}{void INK_SOFT}{void TEAL}{void cellAt}
		</Overlay>
	);
};
