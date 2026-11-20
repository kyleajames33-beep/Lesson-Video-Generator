// Y11 Chem WS V03 scenes 5 to 10: accurate and precise on one number line (gloss chips, the gold accepted value, class
// 1's dots), the 3 s prediction (class 2 waiting above the line), precise but not accurate (spread and gap brackets,
// the shared shift, the open crucible on the bench, a live chance-engine run of more repeats with readouts, then a
// second run after the method changes), choosing reliable sources (source cards, the four-question check list, the
// framed memory card, the online comment crossed four times), extracting three hazard facts from the safety data
// sheet into the plan's controls, and acknowledging sources (in-text citation, a labelled reference entry).
import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {runTrials, trialsShown} from '../../sims/chance';
import {ACCEPTED, CLASS1, CLASS2, CRU_LIDW, CRU_W, DESIC, GLASSES, WASTE, hold, sc} from './common';
import {
	Bracket, Chip, DrawPath, Fade, Filler, Framed, GOLD_T, GREEN_S, GoldMark, Heading, Highlight, INK, MiniTable, NAVY_T, NumberLine, PenArrow, PenCross, PenRing, Plate, Readout, Rich, ROSE_S, ROSE_T,
	SourceCard, SVG, Sx, TEAL_S, TEAL_T, TERRA_T, Tag, VIOLET_S, VIOLET_T, Dot, chipW, nx, prog, richW, smooth, vis,
} from './parts';
import type {NL, Seg} from './parts';
import {Water} from '../chem-y11-m2-v06/parts';

// ---------- the number-line board for scenes 5 to 7 ----------
const G: NL = {x0: 200, x1: 1720, v0: 33, v1: 37, y: 760};
const MARK_TOP = 640;
const GLOSS: {segs: Seg[]; key: 'acc' | 'pre' | 'val' | 'rel'}[] = [
	{segs: [{t: 'accurate: ', c: TEAL_T}, {t: 'close to the accepted value'}], key: 'acc'},
	{segs: [{t: 'precise: ', c: VIOLET_T}, {t: 'readings agree closely (small spread)'}], key: 'pre'},
	{segs: [{t: 'valid: '}, {t: 'measures what it claims to'}], key: 'val'},
	{segs: [{t: 'reliable: '}, {t: 'whole experiment repeats consistently'}], key: 'rel'},
];
const GL_Y = [196, 280, 364, 448];
const GS = 41;
const Gloss: React.FC<{at: Record<'acc' | 'pre' | 'val' | 'rel', number>; out?: number}> = ({at, out}) => (
	<>{GLOSS.map((g, i) => <Chip key={g.key} x={96} y={GL_Y[i]} segs={g.segs} at={at[g.key]} out={out} size={GS} color={g.key === 'acc' ? TEAL_S : g.key === 'pre' ? VIOLET_S : INK} />)}</>
);
/** The two classes' results, each under a copy of the heated crucible. */
const DATA = [{label: 'class 1', vals: CLASS1, c: TEAL_T, x: 1380}, {label: 'class 2', vals: CLASS2, c: NAVY_T, x: 1680}];
const DataCard: React.FC<{out?: number}> = ({out}) => {
	const ch = 230, cw = (ch / CRU_LIDW.box[3]) * CRU_LIDW.box[2];
	return (
		<Fade at={-1000} out={out}>
			{DATA.map((d, i) => (
				<g key={i}>
					<Plate p={CRU_LIDW} x={d.x - cw / 2} y={196} h={ch} />
					<Sx x={d.x} y={466} text={d.label} size={36} color={d.c} anchor="middle" weight={800} at={-1000} />
					<Sx x={d.x} y={508} text={d.vals.map(v => v.toFixed(1)).join(', ')} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<Sx x={1530} y={182} text="% water lost (illustrative data)" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
		</Fade>
	);
};
const LineBoard: React.FC<{pulse?: number; top?: number}> = ({pulse, top = MARK_TOP}) => (
	<>
		<NumberLine g={G} />
		<GoldMark g={G} v={ACCEPTED} label="accepted value (formula)" top={top} pulse={pulse} />
	</>
);

// ---------- 5. accurate and precise ----------
const K5 = cues(sc('accurate-precise'), {apart: 'two words apart', acc: 'Accurate means', close: 'close to the accepted', pre: 'Precise means', spread: 'small spread', from: 'From planning', valid: 'valid means', rel: 'reliable means', results: 'consistent results', our: 'Our accepted value', formula: 'from the formula', line: 'the same line'});
export const SceneAccPrec: React.FC = () => {
	const numsW = richW([{t: CLASS1.map(v => v.toFixed(1)).join(', ')}], 32);
	const numsX = DATA[0].x - numsW / 2;
	return (
		<SVG>
			<Heading text="Accurate and precise" at={0} />
			<Gloss at={{acc: K5.acc, pre: K5.pre, val: K5.valid, rel: K5.rel}} />
			<Tag x={96 + chipW(GLOSS[2].segs, GS, false) + 24} y={410} text="from planning" at={K5.valid + 10} color={INK} />
			<DataCard />
			<LineBoard pulse={K5.our + 10} />
			<PenArrow a={[96 + chipW(GLOSS[0].segs, GS, false) + 16, 228]} b={[nx(G, ACCEPTED) - 20, MARK_TOP - 44]} at={K5.close} out={K5.pre - 6} color={TEAL_S} bend={-0.12} />
			<Bracket a={[numsX + numsW, 522]} b={[numsX, 522]} at={K5.spread} color={VIOLET_S} depth={-14} />
			<Tag x={1200} y={592} text="agree: a small spread" at={K5.spread + 6} color={VIOLET_T} />
			{CLASS1.map((v, i) => <Dot key={i} g={G} v={v} at={K5.line + 4 + i * 5} color={TEAL_S} />)}
			{void K5.apart}{void K5.from}{void K5.results}{void K5.formula}
		</SVG>
	);
};

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {pre: 'precise,', acc: 'accurate,', both: 'both,', neither: 'neither'});
export const ScenePredict: React.FC = () => {
	const h = hold('prediction');
	const opts: [string, number][] = [['precise?', K6.pre], ['accurate?', K6.acc], ['both?', K6.both], ['neither?', K6.neither]];
	let x = 96;
	return (
		<SVG>
			<Heading text="Accurate and precise" at={-1000} />
			<Gloss at={{acc: -1000, pre: -1000, val: -1000, rel: -1000}} />
			<DataCard />
			<LineBoard />
			{CLASS1.map((v, i) => <Dot key={i} g={G} v={v} at={-1000} color={TEAL_S} />)}
			{CLASS2.map((v, i) => <Dot key={i} g={G} v={v} at={1e9} wait={4 + i * 4} color="#3d5a9a" lift={120} />)}
			<Sx x={nx(G, 34.3) - 34} y={G.y - 108} text="class 2" size={34} color={NAVY_T} anchor="end" weight={800} at={6} />
			{opts.map(([t, a]) => {
				const x0 = x;
				x += chipW([{t}], 44, false) + 18;
				return <Chip key={t} x={x0} y={548} segs={[{t}]} at={a} size={44} color={INK} />;
			})}
			<Countdown start={h.startFrame} end={h.endFrame} x={1100} y={584} r={56} ringFrom={K6.neither} />
		</SVG>
	);
};

// ---------- 7. precise, but not accurate ----------
const K7 = cues(sc('judge-accuracy'), {pna: 'Precise, but not', below: 'well below', one: 'Class one is', shifted: 'shifted the same', something: 'something in the method', cooled: 'cooled their', bench: 'open bench', took: 'took back', trial: 'trial run', more: 'More repeats', every: 'every repeat', only: 'Only changing', will: 'method will', later: 'a later video', video: 'video.'});
const C2 = '#3d5a9a';
const OUT1 = [{label: '34.3', weight: 1}, {label: '34.4', weight: 2}, {label: '34.5', weight: 1}];
const OUT2 = [{label: '36.0', weight: 1}, {label: '36.1', weight: 2}, {label: '36.2', weight: 1}];
const V1 = [34.3, 34.4, 34.5], V2 = [36.0, 36.1, 36.2];
const DR = 11, DSP = 22;
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	const run1 = useMemo(() => runTrials({seed: 11, trials: 24, experiment: {kind: 'weighted', outcomes: OUT1}}), []);
	const run2 = useMemo(() => runTrials({seed: 5, trials: 9, experiment: {kind: 'weighted', outcomes: OUT2}}), []);
	const n1 = trialsShown(run1, f, {at: K7.more + 6, slow: 4, every: 12, until: K7.only - 6});
	const n2 = trialsShown(run2, f, {at: K7.will + 2, slow: 3, every: 6, until: K7.will + 56});
	const second = n2 > 0;
	const stack = (run: typeof run1, n: number, vals: number[], base: number[]) => {
		const h = [...base];
		const out: React.ReactNode[] = [];
		for (let k = 0; k < n; k++) {
			const i = run.outcome[k];
			const y = G.y - 30 - h[i] * DSP;
			h[i]++;
			out.push(<circle key={k} cx={nx(G, vals[i])} cy={y} r={DR} fill={C2} stroke={INK} strokeWidth={2.5} />);
		}
		return out;
	};
	const meanOf = (run: typeof run1, n: number, vals: number[]) => { let s = 0; for (let k = 0; k < n; k++) s += vals[run.outcome[k]]; return n ? s / n : 0; };
	const N = second ? n2 : 3 + n1;
	const mean = second ? meanOf(run2, n2, V2) : (CLASS2.reduce((a, b) => a + b, 0) + meanOf(run1, n1, V1) * n1) / (3 + n1);
	const gap = ACCEPTED - mean;
	const push = smooth(prog(f, K7.shifted, 20)) * (1 - smooth(prog(f, K7.shifted + 34, 20)));
	const ch = 220, cw = (ch / CRU_W.box[3]) * CRU_W.box[2];
	const dh = 240;
	const roFrame = second ? TEAL_S : NAVY_T;
	return (
		<SVG>
			<Heading text="Precise, but not accurate" at={0} />
			<Fade at={-1000} out={6}><Gloss at={{acc: -1000, pre: -1000, val: -1000, rel: -1000}} /></Fade>
			<DataCard out={K7.more - 10} />
			<LineBoard top={570} />
			<Framed x={96} y={300} segs={[{t: 'precise', c: VIOLET_T}, {t: ', not '}, {t: 'accurate', c: TEAL_T}]} at={K7.pna + 4} size={52} stroke={GREEN_S} />
			{CLASS1.map((v, i) => <Dot key={i} g={G} v={v} at={-1000} color={TEAL_S} />)}
			{CLASS2.map((v, i) => <Dot key={i} g={G} v={v} at={2 + i * 3} wait={-1000} color={C2} lift={120} dxPush={-26 * push} />)}
			{/* spreads (precise) and the gap (not accurate) */}
			<Bracket a={[nx(G, 34.5) + 18, G.y - 30]} b={[nx(G, 34.3) - 18, G.y - 30]} at={K7.pna + 14} out={K7.more} color={VIOLET_S} depth={16} />
			<Sx x={nx(G, 34.4)} y={G.y - 70} text="precise" size={34} color={VIOLET_T} anchor="middle" weight={800} at={K7.pna + 18} out={K7.more} />
			<Bracket a={[nx(G, 36.2) + 18, G.y - 30]} b={[nx(G, 35.8) - 18, G.y - 30]} at={K7.one} out={K7.will} color={VIOLET_S} depth={16} />
			<Tag x={nx(G, 36.2) + 40} y={G.y - 40} text="accurate and precise" at={K7.one + 6} color={TEAL_T} />
			<Bracket a={[nx(G, 34.4), G.y + 82]} b={[nx(G, ACCEPTED), G.y + 82]} at={K7.below} color={INK} depth={18} />
			<Rich x={(nx(G, 34.4) + nx(G, ACCEPTED)) / 2} y={G.y + 160} segs={[{t: '≈ 1.7 below'}]} size={38} anchor="middle" at={K7.below + 8} />
			<Tag x={(nx(G, 34.4) + nx(G, ACCEPTED)) / 2 + 150} y={G.y + 160} text="not accurate" at={K7.below + 16} color={ROSE_T} />
			{/* the shared shift */}
			<PenArrow a={[nx(G, 34.5) + 90, G.y - 110]} b={[nx(G, 34.3) - 30, G.y - 110]} at={K7.shifted} out={K7.more} color={NAVY_T} bend={0} />
			<Tag x={660} y={G.y - 170} text="all pushed the same way" at={K7.something} out={K7.more} color={NAVY_T} anchor="end" />
			{/* the cause: cooling on the open bench */}
			<Plate p={CRU_W} x={110} y={400} h={ch} at={K7.cooled} dy={16} />
			{Array.from({length: 7}, (_, i) => {
				const t = (f - (K7.took - 10 + i * 9)) / 50;
				if (t < 0) return null;
				const u = Math.min(1, t);
				const xa = 110 + cw / 2 - 150 + ((i * 47) % 300), xb = 110 + cw / 2 - 40 + ((i * 13) % 80);
				const x = xa + (xb - xa) * u + Math.sin(f * 0.12 + i) * 8 * (1 - u);
				const y = 350 + (470 - 350) * u * u;
				const o = (u < 1 ? 1 : 1 - prog(f, K7.took + 80 + i * 9, 16));
				return o > 0.01 ? <Water key={i} x={x} y={y} r={10} o={o} /> : null;
			})}
			<Tag x={110} y={680} text="the trial run" at={K7.trial} color={INK} />
			<Plate p={DESIC} x={300} y={640 - dh} h={dh} at={K7.only + 4} dy={24} />
			<Tag x={300} y={720} text="method changed" at={K7.will} color={TEAL_T} />
			{/* the chance run: more repeats, then the changed method */}
			{stack(run1, n1, V1, [0, 0, 0])}
			{stack(run2, n2, V2, [0, 0, 0])}
			<Sx x={1420} y={220} text={second ? 'new method (illustrative)' : 'repeats (illustrative)'} size={30} color={INK} weight={800} at={K7.more + 2} />
			<Readout x={1420} y={236} w={404} text={`repeats: ${N}`} size={44} frame={roFrame} at={K7.more + 2} />
			<Readout x={1420} y={316} w={404} text={`mean: ${mean.toFixed(1)}%`} size={44} frame={roFrame} at={K7.more + 2} />
			<Readout x={1420} y={396} w={404} text={`gap to 36.1: ${Math.abs(gap).toFixed(1)}`} size={44} frame={roFrame} at={K7.more + 2} />
			<Chip x={96} y={880} segs={[{t: 'error types: a later video'}]} at={K7.later} size={30} color={INK} />
			{void K7.bench}{void K7.every}{void K7.video}{void vis}
		</SVG>
	);
};

// ---------- 8. choosing reliable secondary sources ----------
const K8 = cues(sc('reliable-sources'), {rests: 'rests on', dataSheet: 'published data sheet', sds: 'from a safety data', supplier: "chemical's supplier", how: 'How do we know', ask: 'Ask four things', who: 'Who wrote it', why: 'Why was it', when: 'When was it', agree: 'And does it agree', memo: ['Who, why, when', 1], comment: 'A comment online', fails: 'fails every one', disagrees: 'disagrees with'});
export const CARD1 = {x: 96, y: 196, w: 540, h: 300};
export const DataSheetCard: React.FC<{at?: number; out?: number; x?: number; y?: number}> = ({at = -1000, out, x = CARD1.x, y = CARD1.y}) => (
	<SourceCard x={x} y={y} w={CARD1.w} h={CARD1.h} title="Data sheet" sub="relative atomic masses" at={at} out={out}>
		<MiniTable x={x + 54} y={y + 120} cw={24} ch={22} />
	</SourceCard>
);
const SDS1 = {x: 96, y: 516, w: 540, h: 220};
const SdsCard: React.FC<{at?: number}> = ({at = -1000}) => (
	<SourceCard {...SDS1} title="Safety data sheet (SDS)" sub="from the supplier" color={TERRA_T} at={at}>
		<Filler x={SDS1.x + 22} y={SDS1.y + 112} w={460} n={2} gap={24} />
		<Rich x={SDS1.x + 22} y={SDS1.y + 196} segs={[{t: 'Harmful if swallowed.', c: TERRA_T}]} size={34} />
	</SourceCard>
);
const QS: {lead: string; rest: string; key: 'who' | 'why' | 'when' | 'agree'}[] = [
	{lead: 'who', rest: 'experts? accountable?', key: 'who'},
	{lead: 'why', rest: 'to inform, or to sell?', key: 'why'},
	{lead: 'when', rest: 'dated? up to date?', key: 'when'},
	{lead: 'agree', rest: 'with other reliable sources?', key: 'agree'},
];
const QY = [312, 404, 496, 588];
export const SceneSources: React.FC = () => {
	const f = useCurrentFrame();
	const slide = 1 - smooth(prog(f, K8.comment, 20));
	return (
		<SVG>
			<Heading text="Choosing reliable sources" at={0} />
			<DataSheetCard />
			<SdsCard />
			<SourceCard x={96} y={756} w={540} h={130} title="Chemistry data handbook" sub="university press" color={NAVY_T} />
			<Tag x={760} y={150} text="a range of sources" at={-1000} color={INK} />
			{/* what each source gave the plan */}
			<Fade at={-1000} out={K8.ask - 10}>
				<Chip x={700} y={300} segs={[{t: 'accepted value: 36.1%'}]} at={-1000} size={50} color={GOLD_T} />
			</Fade>
			<PenArrow a={[CARD1.x + CARD1.w + 8, 340]} b={[690, 334]} at={K8.dataSheet + 6} out={K8.ask - 10} color={GOLD_T} bend={0.1} />
			<Fade at={-1000} out={K8.ask - 10}>
				<Chip x={700} y={590} segs={[{t: 'hazards in our risk table'}]} at={-1000} size={50} color={TERRA_T} />
			</Fade>
			<PenArrow a={[SDS1.x + SDS1.w + 8, 620]} b={[690, 624]} at={K8.sds + 6} out={K8.ask - 10} color={TERRA_T} bend={0.1} />
			<Tag x={700} y={790} text="secondary sources: other people's data" at={-1000} out={K8.ask - 10} color={INK} />
			{/* the four questions */}
			<Fade at={K8.how}>
				<rect x={680} y={226} width={760} height={404} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				<Sx x={704} y={268} text="Is it reliable? Ask four things." size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			{QS.map((q, i) => (
				<g key={q.key}>
					<Sx x={704} y={QY[i] + 30} text={q.lead} size={46} color={NAVY_T} hand weight={700} at={K8.ask + i * 6} />
					<Rich x={826} y={QY[i] + 30} segs={[{t: q.rest}]} size={36} at={K8[q.key] + 6} />
					<PenCross x={1404} y={QY[i] + 18} at={K8.fails + 4 + i * 6} />
				</g>
			))}
			<Tag x={1560} y={700} text="0 out of 4" at={K8.fails + 28} color={ROSE_T} />
			{/* the online comment */}
			{f >= K8.comment - 2 ? (
				<g transform={`translate(${slide * 480},0)`} opacity={prog(f, K8.comment - 2, 10)}>
					<rect x={1470} y={226} width={354} height={404} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<Sx x={1488} y={272} text="online comment" size={30} color={INK} weight={800} at={-1000} />
					<line x1={1488} x2={1800} y1={290} y2={290} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
					{['"copper sulfate', 'is harmless,', "I've touched", 'it heaps"'].map((t, i) => <Sx key={i} x={1488} y={342 + i * 46} text={t} size={34} color={INK} weight={700} at={-1000} />)}
					<Sx x={1488} y={566} text="author: ?" size={30} color={ROSE_T} weight={800} at={-1000} />
					<Sx x={1488} y={606} text="date: ?" size={30} color={ROSE_T} weight={800} at={-1000} />
				</g>
			) : null}
			<DrawPath d={`M1500,632 Q1060,760 ${SDS1.x + SDS1.w + 8},${SDS1.y + 186}`} at={K8.disagrees} dur={18} color={ROSE_S} width={5} />
			<Tag x={960} y={676} text="disagrees" at={K8.disagrees + 8} color={ROSE_T} />
			{/* the memory aid */}
			<Fade at={K8.memo - 4}>
				<rect x={680} y={770} width={1144} height={124} rx={20} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
				<Sx x={704} y={808} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Rich x={1252} y={866} segs={[{t: 'Who, why, when, ', c: NAVY_T}, {t: 'and does it agree?', c: NAVY_T}]} size={52} hand weight={700} anchor="middle" />
			</Fade>
			{void K8.supplier}{void K8.ask}{void vis}
		</SVG>
	);
};

// ---------- 9. extracting what the plan needs ----------
const K9 = cues(sc('extract'), {only: 'extract only', three: 'three facts', swallowed: 'harmful if swallowed', eye: 'serious eye', aquatic: 'aquatic life', those: 'Those three', food: 'no food', glasses: 'safety glasses', waste: 'a waste container'});
const HZ = [{t: 'Harmful if swallowed.', at: 'swallowed' as const, ctl: 'food' as const}, {t: 'Causes serious eye irritation.', at: 'eye' as const, ctl: 'glasses' as const}, {t: 'Very toxic to aquatic life.', at: 'aquatic' as const, ctl: 'waste' as const}];
const HZY = [462, 528, 594];
const CTL_Y = [390, 590, 790];
export const SceneExtract: React.FC = () => {
	const gw = 200, gh = (gw / GLASSES.box[2]) * GLASSES.box[3];
	const wh = 190, ww = (wh / WASTE.box[3]) * WASTE.box[2];
	return (
		<SVG>
			<Heading text="Extract only what you need" at={0} />
			<SourceCard x={96} y={190} w={860} h={720} title="Safety data sheet" color={TERRA_T} size={38}>
				<Sx x={120} y={300} text="Copper(II) sulfate pentahydrate" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={120} y={354} text="1  Identification" size={30} color={INK} weight={800} at={-1000} />
				<Filler x={120} y={370} w={700} n={1} />
				<Sx x={120} y={414} text="2  Hazards" size={30} color={INK} weight={800} at={-1000} />
				{HZ.map((h, i) => (
					<g key={i}>
						<Highlight x={112} y={HZY[i] - 36} w={richW([{t: h.t}], 38) + 20} h={48} at={K9[h.at]} />
						<Rich x={120} y={HZY[i]} segs={[{t: h.t, c: TERRA_T}]} size={38} />
					</g>
				))}
				<Sx x={120} y={664} text="7  Handling and storage" size={30} color={INK} weight={800} at={-1000} />
				<Filler x={120} y={684} w={700} n={3} />
				<Sx x={120} y={800} text="13  Disposal" size={30} color={INK} weight={800} at={-1000} />
				<Filler x={120} y={820} w={700} n={2} />
			</SourceCard>
			<Tag x={1140} y={236} text="take only what you need" at={K9.three} color={INK} />
			<Sx x={1140} y={300} text="the plan's controls" size={34} color={INK} weight={800} at={-1000} />
			<Chip x={1140} y={CTL_Y[0] - 34} segs={[{t: 'no food or drink'}]} at={-1000} size={38} color={NAVY_T} />
			<Chip x={1140} y={CTL_Y[1] - 34} segs={[{t: 'safety glasses'}]} at={-1000} size={38} color={NAVY_T} />
			<Plate p={GLASSES} x={1560} y={CTL_Y[1] - gh / 2} h={gh} />
			<Chip x={1140} y={CTL_Y[2] - 34} segs={[{t: 'waste container'}]} at={-1000} size={38} color={NAVY_T} />
			<Plate p={WASTE} x={1600} y={CTL_Y[2] - wh / 2 - 10} h={wh} />
			{HZ.map((h, i) => <PenArrow key={i} a={[120 + richW([{t: h.t}], 38) + 30, HZY[i] - 14]} b={[1128, CTL_Y[i]]} at={K9[h.ctl]} color={TEAL_S} bend={0.06} />)}
			<Bracket a={[1110, CTL_Y[0] - 40]} b={[1110, CTL_Y[2] + 40]} at={K9.waste + 6} color={TEAL_S} depth={14} />
			<Tag x={1560} y={466} text="fact → control" at={K9.waste + 8} color={TEAL_T} />
			{void K9.only}{void K9.those}{void ww}
		</SVG>
	);
};

// ---------- 10. acknowledging sources ----------
const K10 = cues(sc('acknowledge'), {every: 'every source', text: 'In the text', short: 'a short citation', end: 'At the end', list: 'reference list', full: 'full entry', author: ['the author,', 2], year: ['the year,', 2], title: 'the title', publisher: 'the publisher', where: 'where to find', many: 'Many schools', apa: 'A P A', style: 'the style your', consistent: 'be consistent', find: 'find and check', again: 'again.'});
const EX = 680;
export const SceneAcknowledge: React.FC = () => {
	const l1a = '[Data sheet publisher]. ', l1b = '([year]).';
	const l1aW = richW([{t: l1a}], 38), l1bW = richW([{t: l1b}], 38);
	const l2 = '[Data sheet title]: Relative atomic masses.';
	const l3a = '[Publisher].    ', l3b = '[URL]';
	const l3aW = richW([{t: l3a}], 38), l3bW = richW([{t: l3b}], 38);
	const cite = '([Data sheet publisher], [year]).';
	const citeX = EX + 24, citeW = richW([{t: cite}], 38);
	const Lab: React.FC<{x: number; w: number; y: number; t: string; at: number}> = ({x, w, y, t, at}) => (
		<>
			<DrawPath d={`M${x},${y + 10} L${x + w - 12},${y + 10}`} at={at} dur={10} color={NAVY_T} width={4} />
			<Sx x={x + (w - 12) / 2} y={y + 46} text={t} size={30} color={NAVY_T} anchor="middle" weight={800} at={at + 4} />
		</>
	);
	const LabS: React.FC<{x: number; w: number; y: number; t: string; at: number}> = ({x, w, y, t, at}) => (
		<>
			<DrawPath d={`M${x},${y + 10} L${x + w - 12},${y + 10}`} at={at} dur={10} color={NAVY_T} width={4} />
			<Sx x={x} y={y + 46} text={t} size={30} color={NAVY_T} weight={800} at={at + 4} />
		</>
	);
	return (
		<SVG>
			<Heading text="Acknowledging sources" at={0} />
			<DataSheetCard />
			<SdsCard />
			{/* the report extract */}
			<rect x={EX} y={196} width={1174} height={176} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3.5} />
			<Sx x={EX + 24} y={236} text="from our report" size={30} color={INK} hand at={-1000} />
			<Rich x={EX + 24} y={292} segs={[{t: '... the crystals should lose 36.1% of their mass'}]} size={38} />
			<Rich x={citeX} y={346} segs={[{t: cite}]} size={38} />
			<DrawPath d={`M${citeX},${358} L${citeX + citeW},${358}`} at={K10.short} dur={12} color={NAVY_T} width={5} />
			<Tag x={citeX + citeW + 30} y={350} text="in-text: author, year" at={K10.short + 8} color={NAVY_T} />
			{/* the reference list */}
			<Sx x={EX + 24} y={440} text="References" size={44} color={INK} hand weight={700} at={-1000} />
			<Tag x={EX + 280} y={440} text="example layout, APA style" at={K10.apa} color={INK} />
			<Rich x={EX + 24} y={510} segs={[{t: l1a}, {t: l1b}]} size={38} />
			<Rich x={EX + 24} y={600} segs={[{t: l2}]} size={38} />
			<Rich x={EX + 24} y={690} segs={[{t: l3a}, {t: l3b}]} size={38} />
			<Lab x={EX + 24} w={l1aW} y={510} t="author" at={K10.author} />
			<Lab x={EX + 24 + l1aW} w={l1bW} y={510} t="year" at={K10.year} />
			<Lab x={EX + 24} w={richW([{t: l2}], 38)} y={600} t="title" at={K10.title} />
			<Lab x={EX + 24} w={l3aW} y={690} t="publisher" at={K10.publisher} />
			<LabS x={EX + 24 + l3aW} w={l3bW + 12} y={690} t="where to find it" at={K10.where} />
			<Bracket a={[EX + 4, 750]} b={[EX + 4, 466]} at={K10.full} color={INK} depth={-16} />
			{/* a second example entry */}
			<Sx x={EX + 24} y={800} text="another entry: a safety data sheet" size={30} color={INK} hand weight={700} at={K10.many} />
			<Rich x={EX + 24} y={842} segs={[{t: '[Supplier name]. ([year]). Copper(II) sulfate pentahydrate:'}]} size={30} weight={700} at={K10.many + 6} />
			<Rich x={EX + 24} y={880} segs={[{t: 'Safety data sheet. [URL]'}]} size={30} weight={700} at={K10.many + 10} />
			<Tag x={1824} y={760} text="one style, all the way through" at={K10.consistent} color={INK} anchor="end" />
			{/* a reader can find and check it */}
			<PenArrow a={[citeX + 40, 372]} b={[EX + 60, 474]} at={K10.find} color={NAVY_T} bend={-0.4} />
			<PenArrow a={[EX + 14, 500]} b={[CARD1.x + CARD1.w + 8, 380]} at={K10.find + 14} color={NAVY_T} bend={0.2} />
			<PenRing cx={CARD1.x + CARD1.w / 2} cy={CARD1.y + CARD1.h / 2} rx={260} ry={152} at={K10.again} color={NAVY_T} seed={8} />
			{void K10.every}{void K10.text}{void K10.end}{void K10.list}{void K10.style}{void PenRing}
		</SVG>
	);
};
