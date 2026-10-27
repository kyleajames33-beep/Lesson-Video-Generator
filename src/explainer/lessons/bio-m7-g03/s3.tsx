// M7 G03 scenes 4a to 6: question 3 (a flying fox scratch; rabies antibodies and the first rabies vaccine dose). The
// attempt keeps the whole card on screen through the countdown (the flying fox plate alone, no person). The
// walkthrough fills b09's two-by-two table (who made the antibodies? how?), then a coded two-curve sketch (her own
// antibodies slow to start and lasting; injected antibodies immediate and fading) with the gap shaded, and crosses the
// "works straight away" mistake. Then the decision board of first moves with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, DecisionRows, HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {DRow, QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ResponseStrip} from '../bio-m7-b06/strip';
import {ImmTable, TBL, quad} from '../bio-m7-b09/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {fullStrip, MiniGraph, MiniTable} from './s1';
import {
	AMBER, AMBER_INK, AnsFill, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, Gloss, INK, INK_SOFT, MistakeChip, Pl, PlateB, Sx, TEAL, clamp01, fitW, lerp, prog,
	pulse, smooth, vis,
} from './parts';
import type {LG} from './parts';

// ---------- the Q3 card ----------
type TQ = {a: number; b: number; c: number; d: number; e: number; g: number; h: number; da: number; db: number};
const STEM3 = (t: TQ, para = true): QBlock[] => [
	{text: 'A wildlife carer is scratched by a flying fox.', at: t.a},
	{text: 'Some Australian flying foxes carry Australian bat lyssavirus, a close relative of the rabies virus.', at: t.b},
	{text: 'Rabies vaccine and human rabies immunoglobulin (rabies antibodies) are used to prevent Australian bat lyssavirus infection and are highly effective in almost all cases.', at: t.c},
	{text: 'Infection is almost always fatal once symptoms start. Symptoms usually take weeks or months to appear.', at: t.d},
	{text: 'The scratch is washed thoroughly with soap and water.', at: t.e},
	{text: 'On the same day, she is given: an injection of rabies antibodies (immunoglobulin collected from human blood donors), into and around the wound; and', at: t.g, para},
	{text: 'the first dose of rabies vaccine. Further vaccine doses follow over the next two weeks.', at: t.h},
];
const DEM3 = (t: TQ, para = true): QBlock[] => [
	{text: '(a) Identify the type of immunity provided by each injection. (2 marks)', at: t.da, para, weight: 700},
	{text: '(b) Explain why both injections are given. (3 marks)', at: t.db, para, weight: 700},
];
const ALL: TQ = {a: -100, b: -100, c: -100, d: -100, e: -100, g: -100, h: -100, da: -100, db: -100};
qCheck([...STEM3(ALL), ...DEM3(ALL)], ['collected from human blood donors', 'first dose of rabies vaccine', 'into and around the wound', 'weeks or months to appear'].map(phrase => ({phrase, at: 0})));
const Strip3: React.FC<{marks?: QMark[]}> = ({marks = []}) => (
	<g>
		<CardBox x={100} y={150} w={1720} h={196} at={-100} />
		<QText q={qCheck([...STEM3(ALL, false), ...DEM3(ALL, false)], marks)} x={130} y={190} w={2700} size={30} card={false} s={0.62} />
	</g>
);
/** One answer-table row: grey label cell and a hand answer written at `at`. */
const AnsRow: React.FC<{x: number; y: number; w: number; label: string; ans?: string; at?: number; lit?: number; lw?: number; size?: number; boxAt?: number}> = ({x, y, w, label, ans, at = 1e9, lit = 0, lw = 300, size = 30, boxAt = -100}) => {
	const f = useCurrentFrame();
	const o = prog(f, boxAt, 12);
	if (o <= 0.01) return null;
	const ao = prog(f, at, 12);
	const on = clamp01(lit) > 0.5;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={64} rx={14} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<line x1={x + lw} x2={x + lw} y1={y + 8} y2={y + 56} stroke={EDGE} strokeWidth={2.5} />
			<Sx x={x + 22} y={y + 42} text={label} size={size * 0.85} color={INK_SOFT} weight={700} at={-100} />
			{ans && ao > 0.01 ? <Sx x={x + lw + 24} y={y + 44} text={ans} size={size} color={on ? AMBER_INK : INK} hand weight={700} at={-100} opacity={ao} /> : null}
		</g>
	);
};

// ---------- 4a. Question 3 ----------
const KQ = cues(S('q3-question'), {q: 'Question three', carer: 'A wildlife carer', some: 'Some Australian flying', rabies: 'Rabies vaccine and', once: 'Once symptoms start', wound: 'The wound is', given: "She's then given", first: 'and the first', identify: 'Identify the type', explain: 'Then explain why', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	const t: TQ = {a: KQ.carer, b: KQ.some, c: KQ.rabies, d: KQ.once, e: KQ.wound, g: KQ.given, h: KQ.first, da: KQ.identify, db: KQ.explain};
	return (
		<>
			<Heading text="Question 3" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<CardBox x={90} y={160} w={1740} h={860} at={KQ.q + 4} />
				<QText q={qCheck(STEM3(t), [])} x={130} y={215} w={1220} size={25} card={false} />
				<QText q={qCheck(DEM3(t), [])} x={130} y={530} w={1220} size={25} card={false} />
				<Pl p={PLATES.flyfox} cx={1610} cy={430} w={fitW(PLATES.flyfox, 300, 400)} o={prog(f, KQ.carer, 14)} />
				<AnsRow x={130} y={612} w={980} label="rabies antibodies" boxAt={KQ.identify + 20} />
				<AnsRow x={130} y={688} w={980} label="rabies vaccine" boxAt={KQ.identify + 26} />
				<AnsBox x={130} y={776} w={980} h={234} at={KQ.explain + 24} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
			</Overlay>
		</>
	);
};

// ---------- the table (screen placement) ----------
const TS = 0.6, TO: [number, number] = [110, 410];
const tPt = (x: number, y: number): [number, number] => [TO[0] + (x - TBL.x) * TS, TO[1] + (y - TBL.y) * TS];
/** Quadrant text and plate, in table coordinates (inside the scaled group). */
const QFill: React.FC<{r: number; c: number; at: number; label: string; p?: typeof PLATES.vial; grey?: boolean; dim?: number; lit?: number}> = ({r, c, at, label, p, grey = false, dim = 0, lit = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const Q = quad(r, c);
	const col = grey ? GREY_INK : r ? AMBER_INK : TEAL;
	return (
		<g opacity={o * (1 - 0.55 * clamp01(dim))}>
			{lit > 0.01 ? <rect x={Q.x + 10} y={Q.y + 10} width={Q.w - 20} height={Q.h - 20} rx={16} fill="none" stroke={r ? AMBER : TEAL} strokeWidth={6} opacity={lit} /> : null}
			{p ? <PlateB p={p} cx={Q.x + Q.w / 2} cy={Q.y + Q.h / 2 - 34} w={fitW(p, 280, 150)} /> : null}
			<Sx x={Q.x + Q.w / 2} y={p ? Q.y + Q.h - 34 : Q.y + Q.h / 2 + 16} text={label} size={46} color={col} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
const TableG: React.FC<{children: React.ReactNode; o?: number}> = ({children, o = 1}) => (
	<g opacity={o} transform={`translate(${TO[0]},${TO[1]}) scale(${TS}) translate(${-TBL.x},${-TBL.y})`}>{children}</g>
);
const AIDQ3 = "Active: you do the work. Passive: you're handed the antibodies.";

// ---------- 4b. Who made the antibodies? ----------
const KT = cues(S('q3-types'), {use: 'Use the two', who: 'Who made the', made: 'made by other', passive: 'artificial passive', vaccine: 'The vaccine gives', own: 'her own B', active: 'artificial active', both: 'Both are artificial', medical: 'medical treatment', natural: 'Natural would mean'});
export const SceneQ3Types: React.FC = () => {
	const f = useCurrentFrame();
	const arrowRow = `M296,${TBL.y + TBL.hh + 30} L296,${TBL.y + TBL.hh + 2 * TBL.rh - 30}`;
	const cx0 = TBL.x + TBL.hw + TBL.cw + 30, cx1 = TBL.x + TBL.hw + 2 * TBL.cw - 30;
	const arrowCol = `M${cx0},${TBL.y - 24} L${cx1},${TBL.y - 24}`;
	const natDim = prog(f, KT.natural + 70, 20);
	return (
		<>
			<Heading text="Who made the antibodies?" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Type of immunity" at={10} />
				<Strip3 marks={[{phrase: 'collected from human blood donors', at: KT.made + 4, color: AMBER}, {phrase: 'first dose of rabies vaccine', at: KT.own, color: AMBER}]} />
				<TableG>
					<ImmTable at={6} rowAt={[10, 14]} rowLit={[prog(f, KT.active, 10), prog(f, KT.passive, 10)]} />
					{f >= KT.who + 4 ? <g><DrawPath d={arrowRow} at={KT.who + 4} dur={18} color={TEAL} width={6} /><path d={`M282,${TBL.y + TBL.hh + 2 * TBL.rh - 48} L296,${TBL.y + TBL.hh + 2 * TBL.rh - 28} L310,${TBL.y + TBL.hh + 2 * TBL.rh - 48}`} fill="none" stroke={TEAL} strokeWidth={6} opacity={prog(f, KT.who + 18, 6)} /></g> : null}
					{f >= KT.medical ? <g><DrawPath d={arrowCol} at={KT.medical} dur={18} color={AMBER} width={6} /><path d={`M${cx1 - 22},${TBL.y - 38} L${cx1},${TBL.y - 24} L${cx1 - 22},${TBL.y - 10}`} fill="none" stroke={AMBER} strokeWidth={6} opacity={prog(f, KT.medical + 14, 6)} /></g> : null}
					<QFill r={1} c={1} at={KT.passive} label="rabies antibodies" lit={vis(f, KT.passive, KT.vaccine, 10)} />
					<QFill r={0} c={1} at={KT.active - 6} label="rabies vaccine" p={PLATES.vial} lit={vis(f, KT.active - 6, KT.both, 10)} />
					<QFill r={0} c={0} at={KT.natural + 10} label="catching the infection" grey dim={natDim} />
					<QFill r={1} c={0} at={KT.natural + 40} label="antibodies from the mother" grey dim={natDim} />
				</TableG>
				<GTag x={tPt(TBL.x + TBL.hw + 2 * TBL.cw, 0)[0] - 50} y={tPt(0, TBL.y)[1] - 50} text="b09" at={10} size={18} />
				<CTag x={160} y={tPt(0, TBL.y)[1] - 56} text="who made them?" at={KT.who + 8} color={TEAL} size={24} dim={prog(f, KT.medical, 10)} />
				<CTag x={tPt(cx0, 0)[0]} y={tPt(0, TBL.y)[1] - 56} text="how? medical: artificial" at={KT.medical + 8} color={AMBER_INK} size={24} />
				<AnsRow x={900} y={430} w={920} label="rabies antibodies" ans="artificial passive" at={KT.passive + 10} lit={vis(f, KT.passive + 10, KT.vaccine, 10)} boxAt={4} lw={320} />
				<AnsRow x={900} y={516} w={920} label="rabies vaccine" ans="artificial active" at={KT.active + 10} lit={vis(f, KT.active + 10, KT.both, 10)} boxAt={8} lw={320} />
				<Gloss x={900} y={640} text="made by other people: passive" at={KT.made + 10} out={KT.vaccine} size={28} color={AMBER_INK} />
				<Gloss x={900} y={640} text="her own B cells and memory cells: active" at={KT.own + 10} out={KT.both} size={28} color={TEAL} />
				<Sx x={110} y={880} text={AIDQ3} size={32} color={TEAL} hand weight={700} at={KT.natural + 70} />
				{void KT.use}{void INK}
			</Overlay>
		</>
	);
};

// ---------- the two-curve sketch ----------
const SK = {x0: 1000, y0: 650, w: 740, h: 180, wk: 8};
const skx = (t: number) => SK.x0 + (t / SK.wk) * SK.w;
const sky = (v: number) => SK.y0 + SK.h - v * SK.h;
const own = (t: number) => (t < 1 ? 0.04 : 0.04 + 0.86 * smooth((t - 1) / 2.2));
const inj = (t: number) => 0.82 * Math.exp(-t / 2.4);
const path = (fn: (t: number) => number, t0: number, t1: number) => Array.from({length: 41}, (_, i) => {
	const t = t0 + ((t1 - t0) * i) / 40;
	return `${i ? 'L' : 'M'}${skx(t).toFixed(1)},${sky(fn(t)).toFixed(1)}`;
}).join(' ');
const Sketch: React.FC<{ownT: number; injT: number; at: number; gap?: number; ownGlow?: number; flatGlow?: number}> = ({ownT, injT, at, gap = 0, ownGlow = 0, flatGlow = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const cross = 1.62;
	const gapD = `${path(inj, 0, cross)} ${path(own, cross, 0).replace('M', 'L')} Z`;
	return (
		<g opacity={o}>
			{gap > 0.01 ? <path d={gapD} fill={AMBER} opacity={0.18 * gap} /> : null}
			<path d={`M${SK.x0},${SK.y0 - 10} L${SK.x0},${SK.y0 + SK.h} L${SK.x0 + SK.w + 14},${SK.y0 + SK.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} />
			{[0, 2, 4, 6, 8].map(t => <g key={t}><line x1={skx(t)} x2={skx(t)} y1={SK.y0 + SK.h} y2={SK.y0 + SK.h + 8} stroke={INK_SOFT} strokeWidth={3} /><Sx x={skx(t)} y={SK.y0 + SK.h + 30} text={`${t}`} size={20} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
			<Sx x={SK.x0 + SK.w} y={SK.y0 + SK.h + 56} text="weeks after the scratch" size={22} color={GREY_INK} weight={600} anchor="end" at={-100} />
			<g transform={`translate(${SK.x0 - 22},${SK.y0 + SK.h / 2}) rotate(-90)`}><Sx x={0} y={0} text="antibody level" size={20} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>
			{flatGlow > 0.01 ? <path d={path(own, 0, 1.2)} fill="none" stroke={TEAL} strokeWidth={18} opacity={0.25 * flatGlow} strokeLinecap="round" /> : null}
			{ownT > 0 ? <path d={path(own, 0, ownT)} fill="none" stroke={TEAL} strokeWidth={5 + 2 * ownGlow} strokeLinecap="round" /> : null}
			{injT > 0 ? <path d={path(inj, 0, injT)} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" /> : null}
		</g>
	);
};
const Base3: React.FC<{dim?: number}> = ({dim = 0.6}) => (
	<>
		<TableG o={1 - 0.45 * dim}>
			<ImmTable at={-100} rowAt={[-100, -100]} rowLit={[1, 1]} />
			<QFill r={1} c={1} at={-100} label="rabies antibodies" />
			<QFill r={0} c={1} at={-100} label="rabies vaccine" p={PLATES.vial} />
			<QFill r={0} c={0} at={-100} label="catching the infection" grey dim={1} />
			<QFill r={1} c={0} at={-100} label="antibodies from the mother" grey dim={1} />
		</TableG>
		<g opacity={1 - 0.4 * dim}>
			<AnsRow x={900} y={430} w={920} label="rabies antibodies" ans="artificial passive" at={-100} lw={320} />
			<AnsRow x={900} y={516} w={920} label="rabies vaccine" ans="artificial active" at={-100} lw={320} />
		</g>
	</>
);

// ---------- 4c. Why both ----------
const KW = cues(S('q3-why-both'), {why: 'Now why both', week: 'takes a week', nerves: 'entering nerves near', straight: 'work straight away', fade: 'fade over weeks', cover: 'cover the gap', builds: 'builds lasting protection', weeks: 'weeks or months'});
const ANS_B3 = 'own response to the vaccine takes a week or more; injected antibodies act immediately at the wound but fade with no memory; together they protect during the gap while the vaccine builds memory, possible because symptoms take weeks or months';
export const SceneQ3WhyBoth: React.FC = () => {
	const f = useCurrentFrame();
	const ownT = f < KW.week ? 0 : lerp(0, 8, smooth(prog(f, KW.week, 50)));
	const injT = f < KW.straight ? 0 : f < KW.fade ? lerp(0, 0.6, smooth(prog(f, KW.straight, 16))) : lerp(0.6, 8, smooth(prog(f, KW.fade, 40)));
	return (
		<>
			<Heading text="Why both? Cover the gap" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Type of immunity" at={-100} />
				<Strip3 marks={[{phrase: 'into and around the wound', at: KW.fade + 4, color: AMBER}, {phrase: 'weeks or months to appear', at: KW.weeks, color: AMBER}]} />
				<Base3 />
				<Sketch ownT={ownT} injT={injT} at={KW.why} gap={prog(f, KW.cover + 4, 16)} />
				<CTag x={skx(4.2)} y={sky(own(8)) + 16} text="her own antibodies (vaccine): slow to start, lasting" at={KW.week + 40} color={TEAL} size={22} maxW={380} dim={prog(f, KW.fade, 10)} out={KW.fade + 16} />
				<Gloss x={110} y={866} text="virus spreads along nerves towards the brain" at={KW.nerves + 4} out={KW.cover} size={24} color={GREY_INK} />
				<CTag x={skx(0.3)} y={sky(inj(0)) - 66} text="injected antibodies: immediate" at={KW.straight + 8} color={AMBER_INK} size={22} dim={prog(f, KW.fade, 10)} />
				<CTag x={skx(4.2)} y={sky(own(8)) + 30} text="fades; no memory" at={KW.fade + 20} color={AMBER_INK} size={22} dim={prog(f, KW.cover, 10)} />
				<CTag x={skx(0.2)} y={SK.y0 + SK.h - 52} text="the gap" at={KW.cover + 14} color={AMBER_INK} size={22} />
				<AnsFill x={100} y={918} w={1720} h={128} label="(b)" text={ANS_B3} at={KW.builds} boxAt={KW.why + 10} size={22} />
				{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KX = cues(S('q3-mistake'), {classic: 'classic mistake', needed: "isn't needed", starts: 'starts a primary', time: 'takes time'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="A vaccine takes time" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Type of immunity" at={-100} />
				<Strip3 />
				<Base3 dim={0.8} />
				<Sketch ownT={8} injT={8} at={-100} gap={1} flatGlow={pulse(f, KX.starts + 4, 50)} />
				<CTag x={skx(0)} y={SK.y0 - 50} text="primary: a week or more" at={KX.starts + 10} color={TEAL} size={24} />
				<MistakeChip x={110} y={926} text="the vaccine works straight away" at={2} cross={KX.needed + 10} size={28} />
				<MistakeChip x={900} y={926} text="the antibody injection protects her next year too" at={KX.time + 24} cross={KX.time + 38} size={24} />
				{void KX.classic}
			</Overlay>
		</>
	);
};

// ---------- 5. Decision board ----------
const KB = cues(S('decision-board'), {start: 'To put a', graph: 'For a graph', imm: 'For immunity', next: 'Next, how'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const rows: DRow[] = [
		{see: 'a list of events', doo: ['barrier, then block, alarm, eat, alert,', 'then fit, go-ahead, clone, plasma cells, antibodies'], badge: 'Q1', at: KB.start, lit: [KB.start, KB.graph]},
		{see: 'an antibody graph', doo: ['read the scale (log?),', 'then: same antigen or new?'], badge: 'Q2', at: KB.graph, lit: [KB.graph, KB.imm]},
		{see: 'a case', doo: ['who made the antibodies?', 'natural or medical?'], badge: 'Q3', at: KB.imm, lit: [KB.imm, KB.next]},
	];
	const y0 = 300, lh = 168;
	const mid = (i: number) => y0 + i * lh + (lh - 16) / 2;
	const mg: LG = {x0: 560, y0: mid(1) - 46, w: 150, h: 90, xMax: 56, dec: 3};
	return (
		<>
			<Heading text="Order it, read it, name it" at={4} size={56} />
			<Overlay>
				<DecisionRows rows={rows} y0={y0} lh={lh} seeSize={38} dooSize={31} split={760} />
				<g opacity={prog(f, KB.start + 6, 14)}><ResponseStrip {...fullStrip(600, mid(0) - 56, 0.17)} /></g>
				<MiniGraph g={mg} tEnd={56} o={prog(f, KB.graph + 6, 14)} color2={AMBER} />
				<MiniTable x={560} y={mid(2) - 40} s={0.12} at={KB.imm + 6} />
				<NextChip x={720} y={880} w={1100} text="Next: how hygiene and quarantine interrupt spread" at={KB.next}>
					<Pl p={PLATES.sink} cx={790} cy={922} w={fitW(PLATES.sink, 90, 70)} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	'Order of events: entry past a barrier; innate response (histamine widens and leaks small vessels; neutrophils engulf; a dendritic cell carries pieces to a lymph node); adaptive response (B cells that fit bind the antigen; a helper T cell gives the go-ahead; a clone of plasma and memory cells; antibodies bind).',
	'A first response takes about a week because few B cells fit and they must be selected and divide many times; innate defences hold the pathogen meanwhile.',
	'Antibody graphs: check for a log scale (each gridline ten times the last); read peak values and divide. Same antigen again: shorter lag, much higher peak (secondary response, from memory cells). A protective line shows whether a level protects.',
	'Antibodies made by your own B cells (infection or vaccine) = active, with memory, slow to start. Antibodies made by another person or animal and given to you = passive, immediate, no memory, fades. Medical treatment = artificial.',
	'Antibodies plus vaccine together (for example after a bat scratch): immediate cover while the vaccine builds memory.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Block, alarm, eat, alert. Then fit, go-ahead, clone, plasma cells, antibodies." tag="Active: you do the work. Passive: you're handed the antibodies." size={28} aidTop={800} />
);
void GTag; void AMBER;
