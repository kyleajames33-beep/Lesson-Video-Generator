// S04 scenes 6 to 10: the worked evaluate answer (verdict, three criteria with table evidence, a weighed limitation,
// the linked verdict) with role tags and the balance beam, weak against strong, what the guidelines show, and assess
// against evaluate with the justify pattern.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CardSpec, Chip, DrawPath, GREY, GREY_INK, GreyTag, HandLine, INK, LostMarksTag, Overlay, PenArrow, PenTick, Plate, QuestionCard, RED, RED_SOFT, T,
	TEAL, WeakStrongPanel, ZONE, answerGeom, chipW, phraseAt, plateW, prog, pulse, smooth, vis,
} from './kit';
import type {AnsSpec, ARow} from './kit';
import {BOX4, CARD_S, MARBLE, ROW_LABELS, ROWS4_DONE, ROWS4_TEXT, SPILL_CARD, SX4, SpillCardSmall, TAG_X, TableVeil, boxTop, sc} from './common';
import {BalanceBeam, BandLadder, Icon4, RoleTag, VerdictStrip} from './pieces';
import type {Role} from './pieces';
import {STRIP_BOX} from './s1';

const tagY = (g: ReturnType<typeof answerGeom>, row: number, k = 0) => g.base(g.rows[row].first) - 28 + k * 40;
const BEAM = {x: SX4 + 220, y: 400, w: 300};
const Tags: React.FC<{g: ReturnType<typeof answerGeom>; tags: {row: number; role: Role; at: number; k?: number}[]}> = ({g, tags}) => (
	<g>{tags.map((t, i) => <RoleTag key={i} x={TAG_X} y={tagY(g, t.row, t.k ?? 0)} role={t.role} at={t.at} />)}</g>
);

// ---------- 6. Build 1 ----------
const K6 = cues(sc('build-1'), {start: 'Start with the verdict', cal0: 'calcium carbonate is the', more: 'more suitable', crit1: 'criterion one', safety: 'safety', cal1: 'Calcium carbonate is low', corrosive: 'corrosive', crit2: 'Criterion two', cal2: 'Calcium carbonate is insoluble', eight: 'eight', extra: 'Extra', twelve: 'twelve'});
export const B1_ROWS = (): ARow[] => [
	{text: ROWS4_TEXT[0], at: K6.cal0, dur: 50},
	{text: ROWS4_TEXT[1], at: K6.cal1, dur: K6.crit2 - K6.cal1 - 20, tick: K6.crit2 - 8},
	{text: ROWS4_TEXT[2], at: K6.cal2, dur: K6.twelve - K6.cal2 + 4, tick: K6.twelve + 20},
];
export const SceneBuild1: React.FC = () => {
	const box = BOX4();
	const rows = B1_ROWS();
	const g = answerGeom(box, rows);
	const cor = phraseAt(SPILL_CARD, 'corrosive to skin and eyes', 1, CARD_S);
	return (
		<Overlay>
			<SpillCardSmall ann={[{kind: 'ring', phrase: 'about 8', at: K6.eight - 4}, {kind: 'ring', phrase: 'above 12', at: K6.twelve - 4}]}>
				<TableVeil spec={SPILL_CARD} item={1} windows={[{from: -100, to: K6.crit2, rows: [2, 3, 4, 5]}, {from: K6.crit2, rows: [1, 4, 5]}]} />
			</SpillCardSmall>
			<VerdictStrip rows={[-100, -100, -100]} miniBox={STRIP_BOX} lit={[{row: 0, from: K6.start, to: K6.crit1}, {row: 1, from: K6.crit1, to: K6.cal1}, {row: 2, from: K6.cal1, to: K6.crit2 - 20}, {row: 1, from: K6.crit2, to: K6.cal2}, {row: 2, from: K6.cal2, to: K6.twelve + 30}]} />
			<AnswerBox spec={box} at={0} counter={{total: 4, label: true}} rows={rows} />
			<Tags g={g} tags={[{row: 0, role: 'verdict', at: K6.more}, {row: 1, role: 'criterion + evidence', at: K6.safety}, {row: 2, role: 'criterion + evidence', at: K6.crit2 + 20}]} />
			<GreyTag x={box.x + box.w - 16} y={tagY(g, 0)} text="ticked once supported" at={K6.more + 30} size={16} anchor="end" />
			<g opacity={vis(useCurrentFrame(), K6.more + 30)}><circle cx={box.x + 32} cy={g.base(0) - 10} r={15} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="4 5" /></g>
			<PenArrow a={[cor.endX - 40, cor.bottom + 4]} b={[box.x + box.w - 40, g.base(g.rows[1].first) - 22]} at={K6.corrosive} out={K6.crit2} color={AMBER_INK} bow={-20} />
			<BalanceBeam x={BEAM.x} y={BEAM.y} w={BEAM.w} labels={['CaCO_3', 'NaOH']} at={-100} weights={[{side: -1, text: 'safer', at: K6.crit2 - 8}, {side: -1, text: 'excess stays solid', at: K6.eight + 10}]} />
			{void K6.extra}
		</Overlay>
	);
};

// ---------- 7. Build 2 ----------
const K7 = cues(sc('build-2'), {c3: 'Criterion three', knowing: 'knowing when', fizzes: 'fizzes', stops: 'stops', sodium: 'Sodium hydroxide gives', nosign: 'no sign', limit: 'weigh a limitation', slower: 'slower', co2: 'carbon dioxide', loop: 'close the loop', small: 'For a small spill', matter: 'matter more', better: 'better choice', four: "That's four"});
export const SceneBuild2: React.FC = () => {
	const f = useCurrentFrame();
	const box = BOX4();
	const done = B1_ROWS().map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000}));
	const rows: ARow[] = [...done,
		{text: ROWS4_TEXT[3], at: K7.fizzes - 33, dur: K7.nosign + 10 - (K7.fizzes - 33), tick: K7.limit - 10},
		{text: ROWS4_TEXT[4], at: K7.slower - 34, dur: K7.better + 10 - (K7.slower - 34), tick: K7.four + 4},
	];
	const g = answerGeom(box, rows);
	const r0 = g.base(0) - 10, r4 = g.base(g.rows[4].first) - 10;
	const mh = 200, mw = plateW(MARBLE, mh);
	return (
		<Overlay>
			<SpillCardSmall ann={[{kind: 'ring', phrase: 'about 8', at: -100}, {kind: 'ring', phrase: 'above 12', at: -100}]}>
				<TableVeil spec={SPILL_CARD} item={1} windows={[{from: -100, to: K7.limit, rows: [1, 2, 3, 5]}, {from: K7.limit, rows: [1, 2, 3, 4]}]} />
			</SpillCardSmall>
			<VerdictStrip rows={[-100, -100, -100]} miniBox={STRIP_BOX} lit={[{row: 1, from: K7.c3, to: K7.fizzes}, {row: 2, from: K7.fizzes, to: K7.limit}, {row: 0, from: K7.loop, to: K7.four + 40}]} />
			<AnswerBox spec={box} at={-100} counter={{total: 4, label: true}} rows={rows} />
			<Tags g={g} tags={[{row: 0, role: 'verdict', at: -100}, {row: 1, role: 'criterion + evidence', at: -100}, {row: 2, role: 'criterion + evidence', at: -100}, {row: 3, role: 'criterion + evidence', at: K7.knowing}, {row: 4, role: 'limitation', at: K7.limit}, {row: 4, role: 'verdict', at: K7.better - 30, k: 1}]} />
			<GreyTag x={box.x + box.w - 16} y={tagY(g, 0)} text="ticked once supported" at={-100} out={K7.four} size={16} anchor="end" />
			<GreyTag x={box.x + box.w - 16} y={tagY(g, 0)} text="verdict supported" at={K7.four + 8} size={16} anchor="end" />
			<g opacity={1 - prog(f, K7.four, 8)}><circle cx={box.x + 32} cy={r0} r={15} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="4 5" /></g>
			<PenTick x={box.x + 32} y={r0} at={K7.four + 6} s={30} />
			<PenArrow a={[box.x + box.w + 6, r4]} b={[box.x + box.w + 6, r0 + 4]} at={K7.loop} color={AMBER_INK} bow={-50} />
			<g opacity={vis(f, K7.fizzes - 4, K7.limit, 14)}>
				<Plate p={MARBLE} x={SX4 + 220 - mw / 2} y={640} h={mh} />
				<T x={SX4 + 220} y={880} text="CaCO_3 + acid: CO_2 bubbles" size={26} hand weight={700} color={GREY_INK} anchor="middle" />
			</g>
			<g opacity={vis(f, K7.co2)}>
				<T x={SX4} y={700} text="CaCO_3(s) + 2HCl(aq) →" size={26} weight={600} color={INK} />
				<T x={SX4 + 30} y={740} text="CaCl_2(aq) + H_2O(l) + CO_2(g)" size={26} weight={600} color={INK} />
				<GreyTag x={SX4} y={760} text="the fizzing" at={K7.co2 + 10} size={20} />
			</g>
			<BalanceBeam x={BEAM.x} y={BEAM.y} w={BEAM.w} labels={['CaCO_3', 'NaOH']} at={-100}
				weights={[{side: -1, text: 'safer', at: -100}, {side: -1, text: 'excess stays solid', at: -100}, {side: -1, text: 'shows the end', at: K7.limit - 10}, {side: 1, text: 'faster', at: K7.slower, color: GREY_INK, fill: '#eceae4', w: 5}]}
				settle={[{at: K7.matter, deg: -6}]} />
			{void K7.stops}{void K7.sodium}{void K7.small}
		</Overlay>
	);
};

// ---------- 8. Weak against strong ----------
const K8 = cues(sc('weak-vs-strong'), {weaker: 'a weaker answer', calcium: 'Calcium carbonate is better', verdict: 'verdict', because: ['because', 2], table: 'table', matters: 'why that matters', one: 'one of four', earning: 'earning'});
const WEAK = 'Calcium carbonate is better than sodium hydroxide because it is safer and it is a weak base.';
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const strong = BOX4();
	const weak: AnsSpec = {x: ZONE.box.x, y: boxTop(), w: 1080, lines: 3, lh: 52, size: 33};
	const wrows: ARow[] = [{text: WEAK, at: K8.calcium, dur: K8.verdict - K8.calcium - 30}];
	const wg = answerGeom(weak, wrows);
	const slotY = wg.y + wg.h + 58;
	const slots: [string, number, number, number, number][] = [['evidence from the table?', weak.x, slotY, 470, K8.table + 6], ['why does weak base matter here?', weak.x + 500, slotY, 560, K8.matters], ['any limitation weighed?', weak.x, slotY + 76, 470, K8.matters + 30]];
	return (
		<Overlay>
			<SpillCardSmall ann={ROW_LABELS.map((p, i) => ({kind: 'pulse' as const, phrase: p, at: K8.table + i * 6}))} />
			<WeakStrongPanel
				strong={{spec: strong, rows: ROWS4_DONE, total: 4, to: {x: SX4, y: boxTop(), s: 440 / 1080}, moveAt: 2, dim: 0.75}}
				weak={{spec: weak, rows: wrows, total: 4, ann: [{kind: 'tick', row: 0, phrase: 'Calcium carbonate is better than sodium hydroxide', at: K8.one + 8}, {kind: 'ring', row: 0, phrase: 'because', at: K8.because + 4, color: '#e0962a'}], at: K8.weaker}} />
			<RoleTag x={TAG_X} y={wg.base(0) - 30} role="verdict" at={K8.verdict} />
			{slots.map(([t, x, y, w, at]) => (
				<g key={t} opacity={vis(f, at)}>
					<rect x={x} y={y} width={w} height={60} rx={12} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
					<T x={x + 20} y={y + 40} text={t} size={30} hand weight={700} color={GREY_INK} />
				</g>
			))}
			<LostMarksTag x={weak.x} y={slotY + 166} text="−3: criteria not shown with evidence; no limitation weighed" at={K8.one + 40} maxW={1080} />
			<BalanceBeam x={SX4 + 220} y={boxTop() + 300} w={240} labels={['CaCO_3', 'NaOH']} at={K8.earning} />
			<T x={SX4 + 220} y={boxTop() + 270} text="Answer A: nothing weighed" size={24} hand weight={700} color={GREY_INK} anchor="middle" o={prog(f, K8.earning + 10, 10)} />
		</Overlay>
	);
};

// ---------- 9. What the guidelines show ----------
const K9 = cues(sc('no-reasons'), {nesa: "NESA's marking", six: 'six-mark', first: 'first appears', informed: 'informed', four: 'four-mark', describing: 'describing', evaluating: 'evaluating', both: 'In both', without: 'without a judgement', own: 'own'});
export const SceneNoReasons: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 1260;
	const s1 = smooth(prog(f, K9.describing, 18)), s2 = smooth(prog(f, K9.evaluating, 18));
	const cA = 'reasons, no verdict', cB = 'verdict, no reasons';
	const wA = chipW(cA, 30), wB = chipW(cB, 30);
	return (
		<Overlay>
			<BandLadder x={96} y={170} at={K9.six} critW={500} o={1 - 0.55 * vis(f, K9.four, undefined, 14)}
				rungs={[
					{mark: '6', crit: 'extensive evaluation, detailed analysis of the stimulus', judge: 'well-informed judgement'},
					{mark: '5', crit: 'thorough evaluation, analysis of the data', judge: 'informed judgement'},
					{mark: '4', crit: 'evaluation with reference to the data', judge: 'a judgement'},
					{mark: '2 to 3', crit: 'some points, links to the data', slot: true},
					{mark: '1', crit: 'some relevant information'},
				]}
				lit={[{rungs: [0, 1], from: K9.informed, to: K9.four}]} under={K9.first} bracket={{from: 0, to: 2, at: K9.first + 10, label: 'judgement'}} />
			<g opacity={1 - 0.5 * vis(f, K9.four, undefined, 14)}><GreyTag x={96} y={700} text="a NESA Biology marking guideline, 2022 (6 marks)" at={K9.six + 30} size={22} /></g>
			<g opacity={vis(f, K9.four) * (1 - 0.5 * vis(f, K9.without, undefined, 14))}>
				<rect x={BX} y={330} width={520 * s1} height={74} rx={10} fill="#ecd9b5" />
				<T x={BX + 18} y={378} text="describes the effects for both: 3" size={27} weight={600} o={prog(f, K9.describing + 10, 10)} />
				<rect x={BX} y={246} width={570 * s2} height={74} rx={10} fill={AMBER} />
				<T x={BX + 18} y={294} text="+ evaluates them: 4" size={27} weight={700} color="#3d2a05" o={prog(f, K9.evaluating + 10, 10)} />
				<GreyTag x={BX} y={420} text="a NESA Biology marking guideline, 2025 (4 marks; gene flow)" at={K9.four + 10} size={21} maxW={570} />
			</g>
			<g opacity={vis(f, K9.without) * (1 - 0.4 * vis(f, K9.own, undefined, 14))}>
				<Chip x={BX} y={540} text={cA} at={K9.without} size={30} color={GREY_INK} fill="#eceae4" />
				<rect x={BX + wA + 14} y={540} width={130} height={54} rx={20} fill="none" stroke={AMBER} strokeWidth={2.5} strokeDasharray="6 6" />
				<T x={BX + wA + 79} y={576} text="verdict?" size={24} hand weight={700} color={AMBER_INK} anchor="middle" />
				<Chip x={BX} y={610} text="short of the top" at={K9.without + 14} size={22} color={RED} fill={RED_SOFT} hand={false} />
			</g>
			<g opacity={vis(f, K9.own - 8)}>
				<Chip x={BX} y={690} text={cB} at={K9.own - 8} size={30} color={AMBER_INK} fill="#fff8e6" />
				{[0.25, 0.5, 0.75].map(u => <line key={u} x1={BX + wB * u} x2={BX + wB * u + (u - 0.5) * 30} y1={750} y2={790} stroke={GREY} strokeWidth={3} strokeDasharray="5 5" />)}
				<Chip x={BX + wB + 14} y={694} text="short of the top" at={K9.own + 4} size={22} color={RED} fill={RED_SOFT} hand={false} />
				<GreyTag x={BX} y={820} text="in these two guidelines" at={K9.own + 10} size={22} />
			</g>
			<HandLine x={96} y={1000} text="No verdict without a reason, no reason without evidence." at={K9.own + 24} size={40} color={TEAL} dur={36} />
			{void K9.nesa}{void K9.both}{void CARD}{void INK}{void DrawPath}
		</Overlay>
	);
};

// ---------- 10. Assess against evaluate; the justify pattern ----------
const K10 = cues(sc('assess-vs-evaluate'), {so: 'So how', overlap: 'overlap', criteria: 'criteria', how: 'how much', all: 'all three parts', justify: 'Justify asks', recent: 'In one recent', one: ['one', 2], worth: 'worth as much'});
const mini = (text: string): CardSpec => ({x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', items: [{text, marks: '4 marks'}]});
const EVAL = mini('Evaluate the use of calcium carbonate, rather than sodium hydroxide solution, to neutralise this spill.');
const ASSESS = mini('Assess the suitability of calcium carbonate for neutralising this spill.');
export const SceneAssess: React.FC = () => {
	const f = useCurrentFrame();
	const sw = prog(f, K10.how - 6, 14);
	const needle = -2.3 + 1.9 * smooth(prog(f, K10.how + 20, 24));
	const DX = 1250, DY = 520;
	const bar = (x: number, y: number, w: number, text: string, fill: string, at: number, col = INK) => (
		<g opacity={prog(f, at, 10)}>
			<rect x={x} y={y} width={w * smooth(prog(f, at, 18))} height={70} rx={10} fill={fill} />
			<T x={x + 18} y={y + 46} text={text} size={28} weight={700} color={col} o={prog(f, at + 10, 10)} />
		</g>
	);
	return (
		<Overlay>
			<QuestionCard spec={EVAL} at={-100} o={1 - sw} ann={[{kind: 'verb', phrase: 'Evaluate', at: K10.criteria - 4}]} />
			<QuestionCard spec={ASSESS} at={-100} o={sw} ann={[{kind: 'verb', phrase: 'Assess', at: K10.how + 6}]} />
			<Chip x={ZONE.card.x} y={330} text="evaluate → criteria, both ways, then decide" at={K10.criteria} out={K10.justify} size={32} color={AMBER_INK} fill="#fff8e6" maxW={720} />
			<Chip x={1100} y={330} text="assess → how suitable, how far; then support it" at={K10.how} out={K10.justify} size={32} color={AMBER_INK} fill="#fff8e6" maxW={720} />
			<Chip x={ZONE.card.x} y={330} text="evaluate" at={K10.justify + 4} size={28} color={GREY_INK} />
			<Chip x={1100} y={330} text="assess" at={K10.justify + 4} size={28} color={GREY_INK} />
			<g opacity={vis(f, K10.how + 10, K10.justify, 12)}>
				<path d={`M${DX - 60},${DY} A60,60 0 0 1 ${DX + 60},${DY}`} fill="none" stroke={INK} strokeWidth={4} />
				<line x1={DX} y1={DY} x2={DX + Math.cos(needle) * 52} y2={DY + Math.sin(needle) * 52} stroke={RED} strokeWidth={4} strokeLinecap="round" />
				<circle cx={DX} cy={DY} r={5} fill={INK} />
				<T x={DX + 80} y={DY - 6} text="highly suitable" size={30} hand weight={700} color={AMBER_INK} />
			</g>
			<g opacity={vis(f, K10.all - 4, K10.justify, 12)}>
				<VerdictStrip rows={[-100, -100, -100]} miniBox={{x: 700, y: 560, w: 440}} allLit={[K10.all, K10.justify]} />
				<GreyTag x={920} y={750} text="overlap: both need verdict + criteria + evidence" at={K10.all + 10} size={24} anchor="middle" />
			</g>
			<Chip x={ZONE.card.x} y={460} text="justify → given or chosen, your job is the support" at={K10.justify} size={36} color={TEAL} />
			<g opacity={prog(f, K10.justify + 14, 10)}><Icon4 k="struts" x={ZONE.card.x + chipW('justify → given or chosen, your job is the support', 36) + 50} y={494} s={1.2} color={TEAL} /></g>
			{bar(ZONE.card.x, 620, 640, 'justifies TWO changes: 3', AMBER, K10.one + 6, '#3d2a05')}
			{bar(ZONE.card.x, 720, 420, 'justifies ONE change: 2', '#ecd9b5', K10.one + 16)}
			{bar(ZONE.card.x + 500, 720, 420, 'identifies TWO changes: 2', '#ecd9b5', K10.one + 26)}
			<g opacity={prog(f, K10.worth, 10)}>
				<rect x={ZONE.card.x - 6} y={714} width={432} height={82} rx={14} fill="none" stroke={AMBER} strokeWidth={4} opacity={0.5 + 0.5 * pulse(f, K10.worth, 40)} />
				<circle cx={ZONE.card.x + 460} cy={755} r={22} fill="#fff8e6" stroke={AMBER} strokeWidth={3} />
				<T x={ZONE.card.x + 460} y={765} text="=" size={30} weight={800} color={AMBER_INK} anchor="middle" />
				<HandLine x={ZONE.card.x} y={840} text="the reason was worth a second change" at={K10.worth + 8} size={36} color={AMBER_INK} />
			</g>
			<GreyTag x={ZONE.card.x} y={880} text="a NESA Chemistry marking guideline, 2025 (3 marks)" at={K10.one + 30} size={22} />
			{void K10.so}{void K10.overlap}{void K10.recent}{void GREY}
		</Overlay>
	);
};
