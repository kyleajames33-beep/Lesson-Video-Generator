// M7 G03 scenes 1 to 2e: the hook (three stimulus thumbnails, the complete response strip, a two-hump graph and the
// empty immunity table, that become three numbered question cards) and question 1 (secateurs cut; eight events out
// of order). The attempt keeps the whole card on screen through the 10 s countdown. The walkthrough scales the event
// list into a left column (still readable), rebuilds b06's response strip rung by rung as each letter badge lifts from
// its event line and settles on its rung or chip, fills the eight answer boxes, then explains the week with a few
// fitting cells, a growing clone and a day axis, and crosses the classic mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ResponseStrip, stepRect, stripRects} from '../bio-m7-b06/strip';
import type {StripProps, StripStep} from '../bio-m7-b06/strip';
import {B5, strip8} from '../bio-m7-b08/board';
import {CloneTree} from '../bio-m7-b07/parts';
import {ImmTable} from '../bio-m7-b09/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, AnsFill, CTag, CardBox, DrawPath, EVENTS, FlyBadge, GREYT, GREY_INK, GTag, Gloss, INK_SOFT, LBadge, LCurve, LetterBoxes, MiniField, MistakeChip, Pl, PlateB,
	ROWS_O, ROW_S, Sx, TEAL, EventRow, badgeAt, clamp01, evIdx, lerp, prog, pulse, smooth, tw, vis, Yg,
} from './parts';
import type {LG, Pt, Pts} from './parts';

export const HEAD = 'Order it, read it, name it';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {order: 'in order', graph: 'Read a graph', name: 'name the immunity', trap: 'Each one hides', three: 'three HSC-style', pause: 'Pause and try'});
const CX = [400, 960, 1520];
const HOOK_PTS: Pts = [[0, 1], [6, 1], [14, 40], [28, 10], [30, 10], [35, 800], [56, 500]];
/** A tiny two-hump antibody graph (no values): axes and a curve drawn up to `tEnd`. */
export const MiniGraph: React.FC<{g: LG; tEnd: number; o?: number; color2?: string}> = ({g, tEnd, o = 1, color2 = INK_SOFT}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${g.x0},${g.y0 - 6} L${g.x0},${g.y0 + g.h} L${g.x0 + g.w + 10},${g.y0 + g.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
		<LCurve g={g} pts={HOOK_PTS} t0={0} t1={Math.min(tEnd, 29)} color={INK_SOFT} width={4} />
		{tEnd > 29 ? <LCurve g={g} pts={HOOK_PTS} t0={29} t1={tEnd} color={color2} width={4} /> : null}
	</g>
));
/** The complete b08 strip as b09 left it (all chips written, grey). */
export const fullStrip = (x: number, y: number, s: number): StripProps => strip8(5, [0, 1, 2, 3, 4].map(() => ({lit: 0})), {x, y, s});
/** b09's empty two-by-two table, scaled `s` with its top-left at (x, y). */
export const MiniTable: React.FC<{x: number; y: number; s: number; at: number; o?: number}> = ({x, y, s, at, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s}) translate(-120,-250)`}><ImmTable at={at} rowAt={[at + 4, at + 8]} rowLit={[0, 0]} /></g>
));
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cues3 = [K1.order, K1.graph, K1.name];
	const cur = (i: number) => vis(f, cues3[i], cues3[i + 1] ?? K1.trap, 10);
	const g: LG = {x0: 960 - 170, y0: 440, w: 330, h: 220, xMax: 56, dec: 3};
	const tEnd = lerp(0, 56, smooth(prog(f, K1.graph + 4, 50)));
	const card = prog(f, K1.three, 16);
	return (
		<>
			<Heading text={HEAD} at={4} size={60} />
			<Overlay>
				{CX.map((x, i) => (
					<g key={i} opacity={card}>
						<CardBox x={x - 240} y={340} w={480} h={430} at={K1.three} />
						<LBadge x={x - 205} y={378} ch={`${i + 1}`} r={24} placed={1} o={card} />
					</g>
				))}
				<g opacity={prog(f, K1.order, 14)} transform={`translate(0,${(1 - prog(f, K1.order, 18)) * 30})`}><ResponseStrip {...fullStrip(CX[0] - 120, 375, 0.5)} /></g>
				<g transform={`translate(0,${(1 - prog(f, K1.graph, 18)) * 30})`}><MiniGraph g={g} tEnd={tEnd} o={prog(f, K1.graph, 14)} color2={cur(1) > 0.5 ? AMBER : INK_SOFT} /></g>
				<g transform={`translate(0,${(1 - prog(f, K1.name, 18)) * 30})`}><MiniTable x={CX[2] - 183} y={440} s={0.3} at={K1.name} /></g>
				{['order it', 'read it', 'name it'].map((t, i) => <Sx key={t} x={CX[i]} y={740} text={t} size={38} color={cur(i) > 0.5 ? AMBER_INK : INK_SOFT} hand weight={700} anchor="middle" at={cues3[i] + 6} />)}
				<GTag x={960} y={820} text="HSC-style questions, written for HSCScience" at={K1.three + 18} size={26} anchor="middle" />
				<Sx x={960} y={940} text="Pause, try it, then we work through it." size={36} color={INK_SOFT} hand weight={700} anchor="middle" at={K1.pause + 6} />
			</Overlay>
		</>
	);
};

// ---------- the Q1 card ----------
const STEM_Q1 = "A gardener's thumb is cut by pruning secateurs, and soil bacteria enter the cut. The events below occur in the gardener's body. They are listed in random order.";
const DEM_Q1 = (ta: number, tb: number): QBlock[] => [
	{text: '(a) Write the letters in the order the events occur, from entry to antibody production. (3 marks)', at: ta, weight: 700},
	{text: '(b) Explain why antibodies against these bacteria are not detected in the blood until about a week after the cut. (2 marks)', at: tb, para: true, weight: 700},
];
qCheck(DEM_Q1(0, 0), [{phrase: 'about a week after the cut', at: 0}]);
/** Underlined phrase of each event when it is placed. */
const EV_MARK: Record<string, string> = {
	C: 'Bacteria get past the skin through the cut.', E: 'release chemicals such as histamine', G: 'Neutrophils leave the blood and engulf bacteria.', F: 'carries them to a lymph node',
	A: 'fit an antigen', D: 'gives these B cells the go-ahead to divide', H: 'a clone of plasma cells and memory B cells', B: 'Plasma cells release antibodies',
};
/** Attempt (tr 0) to walkthrough (tr 1) layout of the whole question card. */
const Q1Card: React.FC<{tr: number; stemAt?: number; rowsAt?: number; demAt?: [number, number]; markAt?: Record<string, number>; placed?: Record<string, number>; demMarks?: QMark[]; platesAt?: number; cardAt?: number}> = ({tr, cardAt = -100, stemAt = -100, rowsAt = -100, demAt = [-100, -100], markAt = {}, placed = {}, demMarks = [], platesAt = -100}) => {
	const f = useCurrentFrame();
	const s = lerp(1, ROW_S, tr);
	const po = prog(f, platesAt, 14) * (1 - clamp01(tr * 1.6));
	return (
		<g>
			<CardBox x={lerp(90, 100, tr)} y={lerp(160, 165, tr)} w={lerp(1740, 815, tr)} h={lerp(860, 865, tr)} at={cardAt} />
			<g transform={`translate(${ROWS_O[0]},${ROWS_O[1]}) scale(${s}) translate(${-ROWS_O[0]},${-ROWS_O[1]})`}>
				<QText q={qCheck([{text: STEM_Q1, at: stemAt}], [])} x={130} y={215} w={960} size={25} card={false} />
				{EVENTS.map((e, i) => <EventRow key={e.k} i={i} at={rowsAt + i * 6} mark={EV_MARK[e.k]} markAt={markAt[e.k]} placed={placed[e.k] !== undefined && f >= placed[e.k] ? 1 : 0} />)}
			</g>
			<QText q={qCheck(DEM_Q1(demAt[0], demAt[1]), demMarks)} x={lerp(1180, 130, tr)} y={lerp(410, 800, tr)} w={610} size={25} card={false} s={lerp(1, 0.8, tr)} />
			{po > 0.01 ? (
				<g opacity={po}>
					<Pl p={PLATES.secateurs} cx={1330} cy={262} w={230} />
					<Pl p={PLATES.bact} cx={1630} cy={256} w={220} />
				</g>
			) : null}
		</g>
	);
};

// ---------- 2a. Question 1 ----------
const KQ = cues(S('q1-question'), {q: 'Question one', pruning: 'Pruning secateurs', eight: 'Eight events are', put: 'Put them in', explain: 'Then explain why', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KQ.q} size={50} />
			<Overlay>
				<HscTag at={KQ.q} />
				<g opacity={1}><Q1Card tr={0} cardAt={KQ.q + 4} stemAt={KQ.pruning} rowsAt={KQ.eight} demAt={[KQ.put, KQ.explain]} platesAt={KQ.pruning} /></g>
				<GTag x={1480} y={318} text="soil bacteria, drawn far larger than real" at={KQ.pruning + 20} size={18} anchor="middle" />
				<LetterBoxes x={1230} y={636} at={KQ.put + 20} />
				<AnsBox x={1180} y={716} w={410} h={224} at={KQ.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KQ.pause} />
			</Overlay>
		</>
	);
};

// ---------- the Q1 strip and placements ----------
const RL = ['always there: barriers', 'minutes: inflammation', 'hours: phagocytes', 'days: adaptive'];
const SQ = {x: 990, y: 178, w: 455, rh: 84, gap: 20, stepH: 50, size: 24};
type RungState = {lit?: number; dim?: number; at?: number; thumbAt?: number; pulse?: number};
const stripQ1 = (r: RungState[], steps?: StripStep[], extra: Partial<StripProps> = {}, adaptiveLit = 0): StripProps => ({
	...SQ,
	rungs: [
		{label: RL[0], thumbs: [PLATES.skinTop], ...r[0]},
		{label: RL[1], thumbs: [PLATES.mast], ...r[1]},
		{label: RL[2], thumbs: [PLATES.neutrophil], ...r[2]},
		{label: RL[3], color: 'amber', lit: adaptiveLit, steps, ...r[3]},
	],
	...extra,
});
/** Where each letter settles: innate rungs (slot 1 sits left of slot 0) or adaptive chips. */
const target = (p: StripProps, k: string): Pt => {
	const R = stripRects(p);
	const rung = (i: number, slot = 0): Pt => [R[i].x + R[i].w - 30 - slot * 44, R[i].y + R[i].h / 2];
	const chip = (c: number): Pt => { const r = stepRect(p, 3, c); return [r.x + 250, r.y + r.h / 2]; };
	switch (k) {
		case 'C': return rung(0);
		case 'E': return rung(1);
		case 'G': return rung(2);
		case 'F': return rung(2, 1);
		case 'A': return chip(0);
		case 'D': return chip(1);
		case 'H': return chip(2);
		default: return chip(4);
	}
};
/** Badges already placed (fly time -1000) or flying at their cue. */
const Placed: React.FC<{p: StripProps; fly: Record<string, number>; glow?: Record<string, number>}> = ({p, fly, glow = {}}) => (
	<g>{Object.entries(fly).map(([k, at]) => {
		const a = badgeAt(evIdx(k), ROW_S);
		const chipK = 'ADHB'.includes(k);
		return <FlyBadge key={k} a={a} b={target(p, k)} at={at} ch={k} r1={chipK ? 15 : 17} glow={glow[k] ?? 0} />;
	})}</g>
);
const ORDER = ['C', 'E', 'G', 'F', 'A', 'D', 'H', 'B'];
const FLY = 18;
const BOX = {x: 1012, y: 852};

// ---------- 2b. Barrier, then innate ----------
const KI = cues(S('q1-innate'), {start: 'Start where', c: 'C, the', innate: 'innate defences', e: 'E, damaged', chem: 'chemical change causing', g: 'G, neutrophils', f: 'And F', baea: "That's block", block: 'block,', alarm: 'alarm,', eat: 'eat,', alert: 'alert.'});
const FLY_I = {C: KI.c, E: KI.e, G: KI.g, F: KI.f + 14};
export const SceneQ1Innate: React.FC = () => {
	const f = useCurrentFrame();
	const tr = smooth(prog(f, 0, 24));
	const land = (k: keyof typeof FLY_I) => FLY_I[k] + FLY;
	const nextOf = [land('E'), land('G'), KI.baea];
	const r: RungState[] = [
		{at: 14, thumbAt: land('C'), lit: vis(f, land('C'), nextOf[0], 10)},
		{at: 18, thumbAt: land('E'), lit: vis(f, land('E'), nextOf[1], 10)},
		{at: 22, thumbAt: land('G'), lit: vis(f, land('G'), KI.baea, 10)},
		{at: 26},
	];
	const p = stripQ1(r, undefined, {bracket: {from: 0, to: 2, at: KI.innate + 4, label: 'innate', lit: vis(f, KI.innate + 4, land('E'), 10)}});
	const R = stripRects(p);
	const fx = target(p, 'F');
	const vx = 1556;
	const verbs: [string, number, number][] = [['block', KI.block, R[0].y + R[0].h / 2], ['alarm', KI.alarm, R[1].y + R[1].h / 2], ['eat', KI.eat, R[2].y + R[2].h / 2 - 2], ['alert', KI.alert, R[2].y + R[2].h + 14]];
	return (
		<>
			<Heading text="Barrier, then the innate response" at={6} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Sequence" at={10} />
				<Q1Card tr={tr} markAt={{C: FLY_I.C, E: FLY_I.E, G: FLY_I.G, F: FLY_I.F}} placed={{C: land('C'), E: land('E'), G: land('G'), F: land('F')}} />
				<ResponseStrip {...p} o={prog(f, 12, 16)} />
				<Placed p={p} fly={FLY_I} />
				{f >= land('F') ? <g><DrawPath d={`M${fx[0]},${fx[1] + 18} L${fx[0]},${R[3].y - 6}`} at={land('F')} dur={10} color={AMBER} width={4} /><path d={`M${fx[0] - 8},${R[3].y - 16} L${fx[0]},${R[3].y - 5} L${fx[0] + 8},${R[3].y - 16}`} fill="none" stroke={AMBER} strokeWidth={4} opacity={prog(f, land('F') + 8, 6)} /></g> : null}
				{/* E glosses: chemical causes physical */}
				<Gloss x={1620} y={R[1].y + 32} text="chemical: histamine" at={KI.chem + 4} out={KI.alarm - 4} size={22} color={vis(f, 0, KI.baea, 10) > 0.5 ? AMBER_INK : GREY_INK} />
				<Gloss x={1620} y={R[1].y + 62} text="physical: vessels widen and leak" at={KI.chem + 22} out={KI.alarm - 4} size={22} color={vis(f, 0, KI.baea, 10) > 0.5 ? AMBER_INK : GREY_INK} />
				{/* F: dendritic cell to a lymph node */}
				<g opacity={prog(f, land('F'), 12) * (1 - 0.4 * prog(f, KI.baea, 12))}>
					<PlateB p={PLATES.dendritic} cx={1690} cy={R[2].y + 30} w={62} />
					<path d={`M1726,${R[2].y + 30} L1754,${R[2].y + 30}`} stroke={INK_SOFT} strokeWidth={3} />
					<PlateB p={PLATES.node} cx={1790} cy={R[2].y + 30} w={60} />
				</g>
				<GTag x={1640} y={R[2].y + 66} text="starts the adaptive response" at={land('F') + 10} out={KI.baea + 30} size={18} />
				{verbs.map(([t, at, y]) => <Sx key={t} x={vx} y={y + 8} text={t} size={24} color={GREY_INK} hand weight={700} at={at} />)}
				<GTag x={1640} y={R[3].y + 26} text="b06" at={KI.baea + 8} size={18} />
				<LetterBoxes x={BOX.x} y={BOX.y} at={20} bw={48} fill={ORDER.slice(0, 4).map(k => ({ch: k, at: land(k as keyof typeof FLY_I)}))} />
				<GTag x={BOX.x + 56} y={BOX.y + 64} text="E, G and F overlap in time" at={KI.alert + 26} size={18} />
				{void KI.start}
			</Overlay>
		</>
	);
};

// ---------- the placed innate state (2c on) ----------
const PLACED_INNATE: Record<string, number> = {C: -1000, E: -1000, G: -1000, F: -1000};
const innateRungs = (pu = 0): RungState[] => [{pulse: pu, lit: pu > 0.3 ? 1 : 0}, {pulse: pu, lit: pu > 0.3 ? 1 : 0}, {pulse: pu, lit: pu > 0.3 ? 1 : 0}, {}];
/** The adaptive chips: written at `at[i]`, lit from `lit[i]`; thumbnails inside (B cell, T cell, plasma cell). */
const chips = (at: number[], lit: number[], plasmaAt: number): StripStep[] => B5.map((label, i) => ({
	label, at: at[i], lit: lit[i],
	thumb: i === 0 ? PLATES.bcell : i === 1 ? PLATES.tcell : i === 3 ? PLATES.plasma : i === 4 ? PLATES.bact : undefined,
	thumbAt: i === 3 ? plasmaAt : at[i],
}));
/** Small coded antibody Ys around the bacterium thumbnail in chip 5. */
const ChipYs: React.FC<{p: StripProps; o: number}> = ({p, o}) => {
	if (o <= 0.01) return null;
	const r = stepRect(p, 3, 4);
	const cx = r.x + r.w - 16 - 26, cy = r.y + r.h / 2;
	return <g opacity={o}>{[[-30, -12, -0.4], [-30, 12, 0.5], [30, -12, -2.7], [30, 12, 2.6]].map(([dx, dy, a], i) => <Yg key={i} x={cx + dx} y={cy + dy} ang={a} L={14} k="tri" />)}</g>;
};
/** A small clone thumbnail beside the clone chip. */
const MiniClone: React.FC<{p: StripProps; at: number; o?: number}> = ({p, at, o = 1}) => {
	const r = stepRect(p, 3, 2);
	const x = r.x + r.w + 40, y = r.y + r.h / 2;
	return <CloneTree x={x} y={y} at={at} dx={34} h={44} step={6} cellW={14} o={o} cluster={{cx: x + 4 * 34 + 26, cy: y, rx: 24, ry: 18}} />;
};

// ---------- 2c. The adaptive response ----------
const KA = cues(S('q1-adaptive'), {now: 'Now the adaptive', a: 'A, the', fit: 'already fit an', d: 'D, a', switched: 'already switched on', h: 'H, they', plasma: 'most become plasma', memory: 'some become memory', b: 'B, plasma', order: 'So the order', oC: 'C,', oE: 'E,', oG: 'G,', oF: 'F,', oA: ['A,', 2], oD: ['D,', 2], oH: ['H,', 2], oB: ['B', 3], notice: 'Notice that', bridge: 'the bridge between'});
const FLY_A = {A: KA.a, D: KA.d, H: KA.h, B: KA.b};
export const SceneQ1Adaptive: React.FC = () => {
	const f = useCurrentFrame();
	const land = (k: keyof typeof FLY_A) => FLY_A[k] + FLY;
	const at = [land('A'), land('D'), land('H'), KA.plasma + 4, land('B')];
	const litT = [land('A'), land('D'), land('H'), KA.plasma + 4, land('B'), KA.order];
	const lit = at.map((_, i) => vis(f, litT[i], litT[i + 1], 10));
	const oc = [KA.oC, KA.oE, KA.oG, KA.oF, KA.oA, KA.oD, KA.oH, KA.oB];
	const glowAll = pulse(f, KA.oB + 6, 40);
	const p = stripQ1(innateRungs(glowAll), chips(at, lit.map((l, i) => Math.max(l, i < 5 ? glowAll : 0)), KA.plasma + 4), {}, 1);
	const R = stripRects(p);
	const fx = target(p, 'F');
	const t2 = stepRect(p, 3, 1);
	const tx = t2.x + t2.w - 42, ty = t2.y + t2.h / 2;
	const bridge = pulse(f, KA.bridge + 4, 40);
	const arrowD = `M${fx[0] + 18},${fx[1]} Q${1520},${(fx[1] + ty) / 2} ${tx + 26},${ty}`;
	return (
		<>
			<Heading text="The adaptive response" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Sequence" at={-100} />
				<Q1Card tr={1} markAt={{C: -1000, E: -1000, G: -1000, F: -1000, A: FLY_A.A, D: FLY_A.D, H: FLY_A.H, B: FLY_A.B}} placed={{C: -1000, E: -1000, G: -1000, F: -1000, A: land('A'), D: land('D'), H: land('H'), B: land('B')}} />
				<ResponseStrip {...p} bracket={{from: 0, to: 2, at: -100, label: 'innate', lit: 0}} />
				<Placed p={p} fly={{...PLACED_INNATE, ...FLY_A}} glow={Object.fromEntries(ORDER.map((k, i) => [k, pulse(f, oc[i], 24)]))} />
				{f >= KA.switched + 4 ? (
					<g>
						{bridge > 0.01 ? <path d={arrowD} fill="none" stroke={AMBER} strokeWidth={14} opacity={0.25 * bridge} /> : null}
						<DrawPath d={arrowD} at={KA.switched + 4} dur={18} color={bridge > 0.3 ? AMBER : INK_SOFT} width={3.5} />
						<path d={`M${tx + 38},${ty - 9} L${tx + 26},${ty} L${tx + 38},${ty + 9}`} fill="none" stroke={bridge > 0.3 ? AMBER : INK_SOFT} strokeWidth={3.5} opacity={prog(f, KA.switched + 18, 6)} />
					</g>
				) : null}
				<GTag x={1560} y={R[2].y + 70} text="b08" at={KA.switched + 12} out={KA.order} size={18} />
				<MiniClone p={p} at={land('H') + 4} />
				<g opacity={prog(f, KA.memory + 4, 12)}>
					<ellipse cx={R[3].x + 120} cy={R[3].y + R[3].h + 16} rx={70} ry={11} fill="none" stroke={TEAL} strokeWidth={3.5} />
					<Sx x={R[3].x + 206} y={R[3].y + R[3].h + 24} text="M" size={22} color={GREY_INK} weight={800} at={-100} />
				</g>
				<ChipYs p={p} o={prog(f, land('B') + 6, 12)} />
				<CTag x={1520} y={R[3].y + R[3].h - 70} text="dendritic cell: innate to adaptive" at={KA.bridge + 6} color={AMBER_INK} size={22} maxW={330} />
				<LetterBoxes x={BOX.x} y={BOX.y} at={-100} bw={48} fill={ORDER.map((k, i) => ({ch: k, at: i < 4 ? -1000 : land(k as keyof typeof FLY_A)}))} glow={oc.map(t => pulse(f, t, 24))} />
				{void KA.now}{void KA.fit}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- the complete Q1 strip (2d, 2e) ----------
const DONE_CHIPS = (lit: number[]) => chips([-100, -100, -100, -100, -100], lit, -100);
const PLACED_ALL: Record<string, number> = Object.fromEntries(ORDER.map(k => [k, -1000]));
const BOXES_ALL = ORDER.map(k => ({ch: k, at: -1000}));

// ---------- 2d. Why about a week ----------
const KD = cues(S('q1-days'), {week: 'about a week', few: 'Only a few', meet: 'meet it', divide: 'divide many times', measure: 'antibodies you can', meanwhile: 'Meanwhile'});
const ANS_B = "few B cells fit at first; they must bind the antigen, get a helper T cell's go-ahead and divide many times before enough plasma cells release measurable antibody; innate defences hold the bacteria meanwhile";
export const SceneQ1Days: React.FC = () => {
	const f = useCurrentFrame();
	const pu = pulse(f, KD.meanwhile + 6, 44);
	const fitLit = pulse(f, KD.few + 4, 40);
	const p = stripQ1(innateRungs(pu), DONE_CHIPS([fitLit, 0, vis(f, KD.divide, KD.measure, 10), 0, 0]), {}, 1);
	const ax = {x0: 1520, x1: 1860, y: 800};
	const day = f < KD.divide ? 0 : lerp(0, 7, smooth(prog(f, KD.divide, KD.measure - KD.divide)));
	const dX = (d: number) => lerp(ax.x0, ax.x1, d / 10);
	const curveP = prog(f, KD.measure + 4, 30);
	const cPts = Array.from({length: 13}, (_, i) => {
		const d = 7 + (3 * i) / 12;
		return [dX(d), ax.y - 70 * (1 - Math.exp(-(d - 7) * 1.2))] as Pt;
	});
	const cD = cPts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
	return (
		<>
			<Heading text="Part (b): why about a week?" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Sequence" at={-100} />
				<Q1Card tr={1} markAt={{}} placed={PLACED_ALL} demMarks={[{phrase: 'about a week after the cut', at: KD.week, color: AMBER}]} />
				<ResponseStrip {...p} bracket={{from: 0, to: 2, at: -100, label: 'innate', lit: pu}} />
				<Placed p={p} fly={PLACED_ALL} />
				<MiniField x={1540} y={300} cols={7} rows={3} dx={46} dy={40} cw={28} lit={[3, 9, 16]} litO={prog(f, KD.few + 8, 12)} o={prog(f, KD.few, 14)} />
				<CTag x={1520} y={420} text="few fit at first" at={KD.few + 14} color={TEAL} size={24} dim={prog(f, KD.divide, 10)} />
				<CloneTree x={1530} y={600} at={KD.divide + 2} dx={64} h={150} step={12} cellW={26} cluster={{cx: 1530 + 4 * 64 + 40, cy: 600, rx: 40, ry: 60}} />
				<CTag x={1520} y={700} text="days of division" at={KD.divide + 20} color={TEAL} size={24} out={KD.measure + 8} />
				<g opacity={prog(f, KD.week + 6, 14)}>
					<line x1={ax.x0} x2={ax.x1} y1={ax.y} y2={ax.y} stroke={GREYT} strokeWidth={3.5} />
					{[0, 2, 4, 6, 8, 10].map(d => <g key={d}><line x1={dX(d)} x2={dX(d)} y1={ax.y} y2={ax.y + 8} stroke={GREYT} strokeWidth={3} /><Sx x={dX(d)} y={ax.y + 30} text={`${d}`} size={18} color={GREY_INK} weight={600} anchor="middle" at={-100} /></g>)}
					<Sx x={ax.x1} y={ax.y + 54} text="days after the cut" size={18} color={GREY_INK} weight={600} anchor="end" at={-100} />
					{f >= KD.divide ? <path d={`M${dX(day)},${ax.y - 16} L${dX(day) - 8},${ax.y - 30} L${dX(day) + 8},${ax.y - 30} Z`} fill={AMBER} /> : null}
					{curveP > 0.01 ? <path d={cD} fill="none" stroke={TEAL} strokeWidth={4.5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - curveP} /> : null}
				</g>
				<CTag x={1520} y={700} text="detectable after about a week" at={KD.measure + 20} color={TEAL} size={22} maxW={330} dim={prog(f, KD.meanwhile, 10)} />
				<GTag x={1520} y={stripRects(p)[0].y + 10} text="meanwhile: innate" at={KD.meanwhile + 10} size={20} />
				<LetterBoxes x={BOX.x} y={BOX.y} at={-100} bw={48} fill={BOXES_ALL} />
				<AnsFill x={935} y={918} w={960} h={150} label="(b)" text={ANS_B} at={KD.meanwhile + 30} boxAt={KD.week + 10} size={21} />
				{void KD.meet}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 2e. The classic mistake ----------
const KM = cues(S('q1-mistake'), {classic: 'classic mistake', design: "doesn't design", selects: 'It selects', already: 'already fit', copies: 'copies them'});
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const p = stripQ1(innateRungs(0), DONE_CHIPS([vis(f, KM.selects, KM.copies, 10), 0, pulse(f, KM.copies + 4, 40), 0, 0]), {}, 1);
	const r0 = stepRect(p, 3, 0);
	const t2 = 'the body makes an antibody to fit the bacteria';
	return (
		<>
			<Heading text="Selected, not designed" at={4} size={46} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Sequence" at={-100} />
				<Q1Card tr={1} placed={PLACED_ALL} />
				<ResponseStrip {...p} bracket={{from: 0, to: 2, at: -100, label: 'innate', lit: 0}} />
				<Placed p={p} fly={PLACED_ALL} />
				<MiniClone p={p} at={-100} o={1} />
				<LetterBoxes x={BOX.x} y={BOX.y} at={-100} bw={48} fill={BOXES_ALL} />
				<MistakeChip x={930} y={924} text={t2} at={2} cross={KM.design} size={28} />
				<CTag x={1500} y={r0.y - 6} text="clonal selection: the name is the process" at={KM.selects + 8} color={TEAL} size={22} maxW={360} />
				<GTag x={1500} y={r0.y + 80} text="b07" at={KM.selects + 16} size={18} />
				<MistakeChip x={930} y={998} text="B before A (antibodies before any B cell is selected)" at={KM.copies + 30} cross={KM.copies + 44} size={22} />
				{void KM.design}{void KM.already}{void tw}{void AnsFill}
			</Overlay>
		</>
	);
};
