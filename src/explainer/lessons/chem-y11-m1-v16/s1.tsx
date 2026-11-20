// Y11 Chem M1 V16 scenes 1 to 6: V15's final frame (the potassium trough with its lilac flame) opening onto the painted
// burner (a loop carries potassium chloride, then sodium chloride, into the flame; the colour belongs to the metal),
// the cause recalled (heat lifts an electron on a small ladder, drops give photons, and a chance-engine run of
// sodium's photons blends into one colour), the method board, the reasons board with safety, the seven colours with
// the results table, and what a colour shows (sodium chloride and sodium nitrate give the same flame).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {runTrials, trialsShown} from '../../sims/chance';
import type {ChanceRun, TrialPace} from '../../sims/chance';
import {FLAME_N, GLASSES, MODEL_TAG, MT, SEVEN, SRC_LINES, dur, ph, sc} from './common';
import type {Metal} from './common';
import {
	Bottle, Bracket, Burner, Chip, Electron, Fade, Framed, GREEN_S, GREEN_T, Heading, INK, Ladder, NAVY_T, OText, PAPER, PenArrow, PenRing, Photon, Plate, RED_T,
	Rich, Strip, Swatch, Sx, TEAL_T, TickMark, VArrow, WireLoop, WordCard, Write, bottlePt, chipW, clamp01, dipPt, flamePt, kf, lerp, nmColor, nmInk, prog, richW, smooth, span,
} from './parts';
import type {BottleG, BurnerG, FS, LadderG} from './parts';
import {Opening} from './opening';

/** Loop keyframes: [frame, x, y]. */
type K3 = [number, number, number];
const edge = (g: BurnerG): [number, number] => flamePt(g, FLAME_N.cx + 40, FLAME_N.edge);
/** A trip from a bottle into the flame: leave `from` at t0, dip at t0 + 14, reach the flame by t1. */
const trip = (from: [number, number], b: [number, number], fl: [number, number], t0: number, t1: number): K3[] => [
	[t0, from[0], from[1]], [t0 + 12, b[0], b[1] - 60], [t0 + 18, b[0], b[1]], [t0 + 24, b[0], b[1] - 70], [t1, fl[0], fl[1]],
];

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {now: 'Now put', drop: 'a drop of', bunsen: 'Bunsen flame', sample: "The sample isn't", turns: 'flame turns lilac', lilac: ['lilac', 2], sodium: 'Sodium compounds', yellow: 'yellow-orange', metal: 'the metal', test: 'flame test', but: 'But how much', reliably: 'reliably'});
const G1: BurnerG = {cx: 960, bottom: 930, h: 680};
const B1K: BottleG = {cx: 560, bottom: 930, h: 360};
const B1N: BottleG = {cx: 1380, bottom: 930, h: 360};
const ST1: FS[] = [['blue', 0], ['k', K1.turns, 16], ['na', K1.yellow + 14, 16]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const e = edge(G1), dk = dipPt(B1K), dn = dipPt(B1N);
	const rest: [number, number] = [dk[0] + 40, dk[1] - 140];
	const keys: K3[] = [[0, rest[0], rest[1]], ...trip(rest, dk, e, K1.drop, K1.sample + 20), ...trip(e, dn, e, K1.sodium, K1.yellow + 14)];
	const inA = span(f, K1.now, K1.now + 30);
	const cw = chipW([{t: 'colour comes from the metal'}], 44, false);
	const mx = 960 - richW([{t: 'colour comes from the metal'}], 44, false, 800) / 2 + richW([{t: 'colour comes from the '}], 44, false, 800);
	return (
		<>
			<Opening out={K1.now} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<g transform={`translate(${(1 - inA) * 500},0)`} opacity={inA}>
					<Burner g={G1} states={ST1} />
				</g>
				<Bottle g={B1K} lines={['KCl', '(aq)']} at={K1.drop - 16} />
				<Bottle g={B1N} lines={['NaCl', '(aq)']} at={K1.sodium - 6} />
				<WireLoop pts={keys} at={K1.drop - 10} hot={K1.sample + 18} s={1.3} />
				<Write x={560} y={500} text="not burning" at={K1.sample + 4} size={42} color={INK} anchor="middle" />
				<PenArrow a={[640, 512]} b={[e[0] - 26, e[1] - 6]} at={K1.sample + 14} color={INK} bend={-0.15} />
				<Write x={1110} y={430} text="from the potassium" at={K1.lilac + 4} out={K1.sodium} size={42} color={MT.K.ink} />
				<Write x={1110} y={430} text="from the sodium" at={K1.yellow + 20} size={42} color={MT.Na.ink} />
				<Chip x={960} y={214} segs={[{t: 'colour comes from the metal'}]} at={K1.metal} size={44} color={INK} anchor="middle" />
				{prog(f, K1.metal + 12, 12) > 0.01 ? <line x1={mx} y1={292} x2={mx + richW([{t: 'metal'}], 44, false, 800) * prog(f, K1.metal + 12, 12)} y2={292} stroke={INK} strokeWidth={5} strokeLinecap="round" /> : null}
				<Heading text="Flame tests: what can a colour tell you?" at={K1.now + 24} />
				{void K1.bunsen}{void K1.but}{void K1.reliably}
			</svg>
		</>
	);
};

// ---------- 2. why a metal colours a flame (photon run) ----------
const K2 = cues(sc('cause'), {met: 'met the cause', hydrogen: "hydrogen's line", heat: "flame's heat", lifting: 'lifting them', drop: 'drop back', photons: 'give out photons', gaps: 'set by the gaps', shows: 'A flame shows', blends: 'your eye blends', single: 'single colour', each: 'So each metal'});
const G2: BurnerG = {cx: 230, bottom: 930, h: 560};
const LG: LadderG = {x0: 500, x1: 800, ys: [860, 680, 590, 520]};
/** Each sodium line drawn as one drop on the model ladder (bigger drop, more energy; not to scale). */
const NA_LINES = MT.Na.lines ?? [];
const DROP: [number, number][] = NA_LINES.map(l => (l.nm < 520 ? [3, 0] : l.nm < 580 ? [2, 0] : l.nm < 600 ? [1, 0] : [3, 1]));
const RUN2: ChanceRun = runTrials({seed: 16, trials: 90, experiment: {kind: 'weighted', outcomes: NA_LINES.map(l => ({label: `${l.nm} nm`, weight: l.weight}))}});
const PACE2: TrialPace = {at: K2.shows, slow: 4, every: 14, until: K2.single};
const FLY2 = 16;
const START2: number[] = (() => {
	const out: number[] = [];
	let shown = 0;
	for (let fr = 0; fr <= dur('cause'); fr++) { const n = trialsShown(RUN2, fr, PACE2); while (shown < n) { out.push(fr); shown++; } }
	return out;
})();
const SW = {x: 1040, y: 560, w: 260, h: 280};
const rnd = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
const hexRgb = (h: string) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const blend = (counts: number[], nms: number[]) => {
	const tot = counts.reduce((a, b) => a + b, 0);
	if (!tot) return '#ffffff';
	const c = [0, 0, 0];
	counts.forEach((n, i) => hexRgb(nmColor(nms[i])).forEach((v, k) => { c[k] += (v * n) / tot; }));
	return '#' + c.map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
};
const LG2: LadderG = {x0: 1500, x1: 1700, ys: [500, 420, 330, 300]};
const H_STRIP = {x: 1200, y: 236, w: 620, h: 96};
export const SceneCause: React.FC = () => {
	const f = useCurrentFrame();
	const slide = span(f, 0, 30);
	const g: BurnerG = {cx: lerp(960, G2.cx, slide), bottom: 930, h: lerp(680, G2.h, slide)};
	const landed = START2.filter(t => t + FLY2 <= f).length;
	const started = START2.filter(t => t <= f).length;
	const counts = NA_LINES.map(() => 0);
	for (let k = 0; k < landed; k++) counts[RUN2.outcome[k]]++;
	const nms = NA_LINES.map(l => l.nm);
	// the single electron: lifted on "lifting", dropped on "drop back"; during the run it follows the latest drop
	const ex = 600;
	let ey = LG.ys[0];
	if (f >= K2.lifting && f < K2.drop) ey = lerp(LG.ys[0], LG.ys[2], span(f, K2.lifting, K2.lifting + 14));
	if (f >= K2.drop && f < K2.shows) ey = lerp(LG.ys[2], LG.ys[0], span(f, K2.drop, K2.drop + 10));
	const latest = started > 0 && f >= K2.shows ? RUN2.outcome[started - 1] : -1;
	if (latest >= 0) { const [a, b] = DROP[latest], t0 = START2[started - 1]; ey = lerp(LG.ys[a], LG.ys[b], span(f, t0, t0 + 8)); }
	const each = prog(f, K2.each, 14);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Why a metal colours a flame" at={6} />
			{/* the bottles from scene 1 leave */}
			<Bottle g={B1K} lines={['KCl', '(aq)']} out={0} />
			<Bottle g={B1N} lines={['NaCl', '(aq)']} out={0} />
			<Burner g={g} states={[['na', -1000]]} />
			{/* the ladder */}
			<Write x={LG.x0} y={470} text="energy levels" at={8} size={42} color={INK} />
			<Ladder g={LG} />
			<Sx x={LG.x0 - 16} y={LG.ys[0] + 12} text="low" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={LG.x0 - 16} y={LG.ys[3] + 12} text="high" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			<PenArrow a={[g.cx + 70, 520]} b={[LG.x0 - 70, 760]} at={K2.heat} color="#e07b12" bend={0.15} width={6} />
			<VArrow x={560} y0={LG.ys[0] - 8} y1={LG.ys[2] + 8} at={K2.lifting} color="#e07b12" width={7} out={K2.shows} />
			<Write x={480} y={790} text="heat lifts" at={K2.lifting + 6} size={42} color="#a35400" anchor="end" />
			<VArrow x={650} y0={LG.ys[2] + 8} y1={LG.ys[0] - 8} at={K2.drop} color={MT.Na.ink} width={7} out={K2.shows} />
			<Photon a={[670, 730]} b={[SW.x + 120, SW.y + 140]} at={K2.drop + 8} dur={22} color={nmInk(589)} fadeAt={K2.shows} stay />
			<Write x={830} y={470} text="drops: photons" at={K2.photons} out={K2.shows + 60} size={42} color={MT.Na.ink} />
			{/* the run: each trial is one photon */}
			{latest >= 0 ? (() => { const [a, b] = DROP[latest]; return <VArrow key={started} x={720} y0={LG.ys[a] + 8} y1={LG.ys[b] - 8} at={START2[started - 1]} color={nmInk(nms[latest])} width={7} dur={8} />; })() : null}
			{Array.from({length: started}, (_, k) => k).filter(k => f < START2[k] + FLY2 + 2).map(k => {
				const i = RUN2.outcome[k], [a, b] = DROP[i];
				return <Photon key={k} a={[740, (LG.ys[a] + LG.ys[b]) / 2]} b={[SW.x + 30 + rnd(k, 1) * (SW.w - 60), SW.y + 30 + rnd(k, 2) * (SW.h - 60)]} at={START2[k]} dur={FLY2} color={nmInk(nms[i])} />;
			})}
			<Electron x={ex} y={ey - 15} r={14} />
			{/* the swatch: landed photons and their blend */}
			<rect x={SW.x} y={SW.y} width={SW.w} height={SW.h} rx={18} fill={PAPER} stroke={INK} strokeWidth={4} />
			<rect x={SW.x + 4} y={SW.y + 4} width={SW.w - 8} height={SW.h - 8} rx={15} fill={blend(counts, nms)} opacity={clamp01(landed / 30)} />
			{Array.from({length: Math.min(landed, 40)}, (_, k) => <circle key={k} cx={SW.x + 30 + rnd(k, 1) * (SW.w - 60)} cy={SW.y + 30 + rnd(k, 2) * (SW.h - 60)} r={9} fill={nmColor(nms[RUN2.outcome[k]])} stroke={INK} strokeWidth={2} opacity={1 - clamp01((landed - 30) / 20)} />)}
			<Sx x={SW.x + SW.w / 2} y={SW.y - 32} text="what your eye gets" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<PenRing cx={SW.x + SW.w / 2} cy={SW.y + SW.h / 2} rx={SW.w * 0.6} ry={SW.h * 0.55} at={K2.single} color={MT.Na.ink} seed={4} />
			{/* readouts */}
			<Sx x={1360} y={582} text="photons counted" size={34} color={INK} weight={800} at={-1000} />
			<rect x={1360} y={600} width={460} height={78} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={1382} y={656} text={`${landed}`} size={52} color={INK} weight={800} at={-1000} />
			<Sx x={1360} y={732} text="your eye sees" size={34} color={INK} weight={800} at={-1000} />
			<rect x={1360} y={750} width={460} height={78} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Swatch x={1376} y={764} w={50} h={50} fill={landed ? blend(counts, nms) : PAPER} r={10} />
			<Sx x={1442} y={806} text={landed >= 12 ? 'yellow-orange' : landed ? 'separate photons' : '?'} size={landed >= 12 ? 44 : 40} color={landed >= 12 ? MT.Na.ink : INK} weight={800} at={-1000} />
			<Sx x={1040} y={896} text={MODEL_TAG} size={30} color={INK} weight={700} at={-1000} />
			{/* top right: hydrogen recalled, then a second metal */}
			<g opacity={1 - prog(f, K2.each - 14, 12)}>
				<Write x={H_STRIP.x} y={H_STRIP.y - 20} text="hydrogen's line spectrum" at={K2.hydrogen} size={42} color={INK} />
				<Strip id="v16h" g={H_STRIP} lines={[656.3, 486.1, 434.0, 410.2].map(nm => ({nm}))} />
				<Write x={H_STRIP.x} y={H_STRIP.y + H_STRIP.h + 56} text="same cause: drops give photons" at={K2.met + 20} size={38} color={INK} />
			</g>
			{each > 0.005 ? (
				<g opacity={each}>
					<Burner g={{cx: 1270, bottom: 480, h: 280}} states={[['k', -1000]]} />
					<Ladder g={{...LG2, x0: 1380, x1: 1510, ys: [460, 410, 330, 260]}} color={MT.K.ink} />
					<VArrow x={1445} y0={268} y1={452} at={K2.each + 10} color={MT.K.ink} width={7} />
					<Write x={1540} y={340} text="different gaps," at={K2.each + 8} size={40} color={MT.K.ink} />
					<Write x={1540} y={392} text="different colour" at={K2.each + 18} size={40} color={MT.K.ink} />
				</g>
			) : null}
			<Sx x={1824} y={938} text={SRC_LINES} size={26} color={INK} anchor="end" weight={700} at={-1000} />
			{void K2.gaps}{void K2.blends}{void G2}
		</svg>
	);
};

// ---------- 3. the method ----------
const K3S = cues(sc('method'), {follows: 'follows your', chlorides: 'chlorides', need: "You'll need", blue: 'hot blue flame', nichrome: 'nichrome wire', doesnt: "doesn't colour", clean: ['Clean the loop', 1], heat: 'then heat it', none: ['no colour', 1], dip: 'Then dip', hold: 'hold it at', record: 'record the colour', away: 'straight away', clean2: ['Clean the loop', 2], repeat: 'repeat with'});
export const G3: BurnerG = {cx: 330, bottom: 650, h: 460};
export const BX3 = (i: number) => 150 + i * 132;
export const BG3 = (i: number): BottleG => ({cx: BX3(i), bottom: 880, h: 200});
export const STEPS: {n: string; lines: string[]}[] = [
	{n: '1', lines: ['clean the loop until the', 'flame shows no colour']},
	{n: '2', lines: ['dip in a solution']},
	{n: '3', lines: ['hold at the flame edge;', 'record the colour at once']},
	{n: '4', lines: ['clean, then repeat']},
];
export const SY3 = [290, 450, 570, 730];
/** One method step: hand numeral in a teal ring and its lines (38 px). */
export const Step: React.FC<{i: number; x: number; y: number; at: number; size?: number; lines?: string[]; n?: string}> = ({i, x, y, at, size = 42, lines, n}) => {
	const f = useCurrentFrame();
	const L = lines ?? STEPS[i].lines;
	return (
		<g>
			<circle cx={x + 28} cy={y - size * 0.36} r={30} fill={PAPER} stroke={TEAL_T} strokeWidth={4} />
			<Sx x={x + 28} y={y - size * 0.36 + 16} text={n ?? STEPS[i].n} size={44} color={TEAL_T} anchor="middle" hand weight={700} at={-1000} />
			{prog(f, at, 1) <= 0 ? <line x1={x + 78} x2={x + 600} y1={y + 6} y2={y + 6} stroke={TEAL_T} strokeWidth={3} strokeDasharray="10 10" opacity={0.6} /> : null}
			{L.map((t, k) => <Write key={k} x={x + 78} y={y + k * size * 1.25} text={t} at={at + k * 10} size={size} color={INK} cps={44} />)}
		</g>
	);
};
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const e = edge(G3);
	const rest: [number, number] = [480, 610];
	const d0 = dipPt(BG3(0));
	const keys: K3[] = [[0, rest[0], rest[1]], [K3S.heat - 10, rest[0], rest[1]], [K3S.heat + 8, e[0], e[1]], [K3S.none + 30, e[0], e[1]], ...trip(e, d0, e, K3S.dip, K3S.hold + 10), [K3S.clean2, e[0], e[1]], [K3S.clean2 + 20, rest[0], rest[1]]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="The method" at={0} />
			<Chip x={1824} y={104} segs={[{t: "follows the school's risk assessment"}]} at={K3S.follows} size={38} color={GREEN_S} anchor="end" />
			<Burner g={G3} states={[['blue', -1000], ['li', K3S.hold + 12, 16], ['blue', K3S.clean2 + 6, 16]]} />
			<WireLoop pts={keys} at={K3S.nichrome - 6} hot={K3S.heat + 8} s={1.2} />
			{/* bottles: examples only */}
			{SEVEN.map((m, i) => <Bottle key={m.sym} g={BG3(i)} lines={[m.salt]} size={34} />)}
			<Sx x={96} y={936} text="examples: your teacher chooses the approved solutions" size={30} color={INK} weight={700} at={K3S.chlorides} />
			<Write x={620} y={262} text="blue flame" at={K3S.blue} size={42} color={TEAL_T} />
			<PenArrow a={[612, 252]} b={[flamePt(G3, FLAME_N.cx + 50, 420)[0] + 6, flamePt(G3, FLAME_N.cx, 420)[1]]} at={K3S.blue + 8} color={TEAL_T} bend={0.2} />
			<Sx x={620} y={318} text="air hole open" size={34} color={INK} weight={800} at={K3S.need + 30} />
			<Write x={700} y={470} text="nichrome:" at={K3S.doesnt} size={42} color={TEAL_T} />
			<Write x={700} y={518} text="no colour of its own" at={K3S.doesnt + 12} size={42} color={TEAL_T} />
			{/* the steps */}
			{STEPS.map((_, i) => <Step key={i} i={i} x={1080} y={SY3[i]} at={[K3S.none - 20, K3S.dip, K3S.hold, K3S.clean2][i]} />)}
			<PenArrow a={[1090, SY3[3] - 50]} b={[1080, SY3[0] + 10]} at={K3S.repeat} color={TEAL_T} bend={-0.35} width={5} />
			{void K3S.clean}{void K3S.record}{void K3S.away}{void dur}
		</svg>
	);
};

// ---------- 4. why each step matters, and safety ----------
const K4 = cues(sc('reasons-safety'), {each: 'Each step', blank: 'is a blank', shows: 'It shows what', sample: 'from the sample', bluef: 'A blue flame', yellow: 'the yellow flame', hide: 'would hide', cleaning: 'Cleaning between', stops: 'stops one sample', testing: 'And testing', reliable: 'is reliable', safety: 'For safety', glasses: 'wear safety glasses', hair: 'tie back', hot: 'stays hot', toxic: 'are toxic', wash: 'wash your hands'});
const G4: BurnerG = {cx: 790, bottom: 920, h: 620};
const RX = 1080;
export const SceneReasons: React.FC = () => {
	const e = edge(G4);
	const gl = {w: 360, h: ph(GLASSES, 360)};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Why each step matters" at={0} />
			<Burner g={G4} states={[['blue', -1000]]} />
			<WireLoop pts={[[0, e[0], e[1]]]} at={-1000} hot={-1000} s={1.3} />
			<Write x={650} y={400} text="blue flame" at={K4.bluef} size={42} color={TEAL_T} anchor="end" />
			{/* the steps, each gaining its reason */}
			<Step i={0} x={RX} y={270} at={-1000} lines={['clean loop, no sample']} />
			<Write x={RX + 78} y={334} text="blank = control" at={K4.blank} size={42} color={TEAL_T} />
			<Chip x={RX + 78} y={356} segs={[{t: 'any colour later comes from the sample'}]} at={K4.sample - 6} size={34} color={TEAL_T} />
			<Step i={3} n="2" x={RX} y={510} at={-1000} lines={['clean between tests']} />
			<Chip x={RX + 78} y={540} segs={[{t: 'stops carry-over to the next'}]} at={K4.stops} size={34} color={TEAL_T} />
			<PenArrow a={[RX + 70, 566]} b={[RX + 30, 530]} at={K4.stops + 10} color={TEAL_T} bend={0.3} width={4} head={14} />
			<Step i={1} n="3" x={RX} y={700} at={-1000} lines={['test each solution again']} />
			<Chip x={RX + 78} y={730} segs={[{t: 'checks it is reliable'}]} at={K4.reliable} size={34} color={TEAL_T} />
			<PenArrow a={[RX + 70, 756]} b={[RX + 30, 720]} at={K4.reliable + 10} color={TEAL_T} bend={0.3} width={4} head={14} />
			<Chip x={RX} y={846} segs={[{t: 'some compounds are toxic: wash hands'}]} at={K4.wash - 10} size={34} color={GREEN_S} />
			{/* the blue flame matters: a word card, no drawn flame */}
			<WordCard x={96} y={214} w={440} lines={['air hole closed:', 'yellow flame']} at={K4.yellow} cross={K4.hide} />
			<Write x={96} y={420} text="hides the colours" at={K4.hide + 6} size={42} color={INK} />
			{/* safety */}
			<Plate p={GLASSES} x={140} y={500} h={gl.h} />
			<Chip x={96} y={704} segs={[{t: 'safety glasses'}]} at={K4.glasses + 8} size={34} color={GREEN_S} />
			<Chip x={96} y={774} segs={[{t: 'hair tied back'}]} at={K4.hair} size={34} color={GREEN_S} />
			<Chip x={96} y={844} segs={[{t: 'loop stays hot'}]} at={K4.hot} size={34} color={GREEN_S} />
			{void K4.each}{void K4.shows}{void K4.cleaning}{void K4.testing}{void K4.safety}{void K4.toxic}{void Fade}
		</svg>
	);
};

// ---------- 5. what you'll see: seven colours ----------
const K5 = cues(sc('colours'), {record: "you'll record", li: 'crimson red', na: 'bright yellow-orange', k: 'pale lilac', ca: 'orange-red', sr: 'deep red', lot: 'a lot like', ba: 'pale green', cu: 'blue-green'});
const G5: BurnerG = {cx: 420, bottom: 920, h: 600};
const B5: BottleG = {cx: 140, bottom: 920, h: 280};
export const AT5 = [K5.li, K5.na, K5.k, K5.ca, K5.sr, K5.ba, K5.cu];
export const TX = 790, TW = 1824 - TX, RY = (i: number) => 316 + i * 82;
/** The results table frame (header and seven row lines). */
export const Table: React.FC<{y0?: number}> = () => (
	<g>
		<rect x={TX - 10} y={226} width={TW + 10} height={RY(6) + 36 - 226} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
		<Sx x={TX + 20} y={270} text="ion" size={34} color={INK} weight={800} at={-1000} />
		<Sx x={TX + 200} y={270} text="flame colour" size={34} color={INK} weight={800} at={-1000} />
		<Sx x={TX + 860} y={270} text="repeat" size={34} color={INK} weight={800} at={-1000} />
		<line x1={TX - 10} x2={1824} y1={288} y2={288} stroke={INK} strokeWidth={3} />
		{SEVEN.map((_, i) => <line key={i} x1={TX - 10} x2={1824} y1={RY(i) + 36} y2={RY(i) + 36} stroke={INK} strokeWidth={1.5} opacity={0.5} />)}
		<line x1={TX + 840} x2={TX + 840} y1={226} y2={RY(6) + 36} stroke={INK} strokeWidth={2} />
	</g>
);
export const Row: React.FC<{m: Metal; i: number; at: number}> = ({m, i, at}) => {
	const f = useCurrentFrame();
	return (
	<g>
		<OText x={TX + 20} y={RY(i) + 14} text={m.ion} size={40} fill={m.fill} at={at} />
		<Swatch x={TX + 150} y={RY(i) - 20} w={40} h={40} fill={m.fill} o={prog(f, at, 10)} r={8} />
		<Rich x={TX + 210} y={RY(i) + 14} segs={[{t: m.colour, c: m.ink}]} size={38} at={at + 4} />
		<TickMark x={TX + 900} y={RY(i)} at={at + 16} color={GREEN_T} />
	</g>
	);
};
export const SceneColours: React.FC = () => {
	const f = useCurrentFrame();
	const e = edge(G5), d = dipPt(B5);
	const keys: K3[] = [[0, e[0] + 120, e[1] + 120]];
	AT5.forEach((t, i) => { const t0 = i === 0 ? t - 46 : Math.max(AT5[i - 1] + 8, t - 44); keys.push(...trip(i === 0 ? [e[0] + 120, e[1] + 120] : e, d, e, t0, t - 4)); });
	const cur = AT5.reduce((k, t, i) => (f >= (i === 0 ? t - 60 : AT5[i - 1] + 8) ? i : k), 0);
	const states: FS[] = [['cu', -1000], ['blue', 0, 10], ...SEVEN.map((m, i) => [m.plate, AT5[i], 14] as FS)];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="What you'll see" at={0} />
			<Burner g={G5} states={states} />
			<Bottle g={B5} lines={[SEVEN[cur].salt, '(aq)']} />
			<WireLoop pts={keys} at={-1000} hot={AT5[0]} s={1.2} />
			<Table />
			{SEVEN.map((m, i) => <Row key={m.sym} m={m} i={i} at={AT5[i]} />)}
			<Bracket a={[TX - 24, RY(0) - 26]} b={[TX - 24, RY(4) + 26]} at={K5.lot} color={RED_T} depth={22} />
			<Write x={TX - 60} y={RY(2) - 6} text="nearly" at={K5.lot + 10} size={42} color={RED_T} anchor="end" />
			<Write x={TX - 60} y={RY(2) + 42} text="the same" at={K5.lot + 18} size={42} color={RED_T} anchor="end" />
			<Sx x={TX} y={936} text="primary data: your own observations" size={30} color={INK} weight={700} at={K5.record} />
			{void K5.ba}{void K5.cu}
		</svg>
	);
};

// ---------- 6. what a flame colour shows ----------
const K6 = cues(sc('what-it-shows'), {what: 'what does', which: 'which metal', because: 'because the colour', doesnt: "doesn't tell", sodium: 'Sodium chloride', nitrate: 'sodium nitrate', flame: 'yellow-orange flame', part: 'The chloride or', record: 'watch and record', data: 'primary data'});
const G6: BurnerG = {cx: 360, bottom: 860, h: 580};
const B6A: BottleG = {cx: 720, bottom: 860, h: 340}, B6B: BottleG = {cx: 1000, bottom: 860, h: 340};
const lab = (g: BottleG) => bottlePt(g, 1000, 1170);
export const SceneShows: React.FC = () => {
	const e = edge(G6), da = dipPt(B6A), db = dipPt(B6B);
	const restA: [number, number] = [da[0], da[1] - 120], restB: [number, number] = [db[0], db[1] - 120];
	const keysA: K3[] = [[0, restA[0], restA[1]], ...trip(restA, da, e, K6.sodium - 20, K6.sodium + 22), [K6.nitrate - 4, e[0], e[1]], [K6.nitrate + 14, restA[0], restA[1]]];
	const keysB: K3[] = [[0, restB[0], restB[1]], ...trip(restB, db, [e[0] + 6, e[1] - 6], K6.nitrate - 4, K6.nitrate + 40)];
	const [ax, ay] = lab(B6A), [bx, by] = lab(B6B);
	const naW = richW([{t: 'Na'}], 38), aW = richW([{t: 'NaCl'}], 38), bW = richW([{t: 'NaNO_3'}], 38);
	const naA = ax - aW / 2 + naW / 2, naB = bx - bW / 2 + naW / 2;
	const restXA0 = ax - aW / 2 + naW, restXA1 = ax + aW / 2, restXB0 = bx - bW / 2 + naW, restXB1 = bx + bW / 2;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="What does a flame colour show?" at={0} />
			<Burner g={G6} states={[['cu', -1000], ['blue', 0, 12], ['na', K6.sodium + 22, 16]]} />
			<Bottle g={B6A} lines={[]} />
			<Bottle g={B6B} lines={[]} />
			<Rich x={ax} y={ay} segs={[{t: 'Na', c: MT.Na.ink}, {t: 'Cl'}]} size={38} anchor="middle" />
			<Rich x={bx} y={by} segs={[{t: 'Na', c: MT.Na.ink}, {t: 'NO_3'}]} size={38} anchor="middle" />
			<Sx x={ax} y={ay + 58} text="(aq)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={bx} y={by + 58} text="(aq)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<WireLoop pts={keysA} at={K6.sodium - 24} out={K6.nitrate + 30} hot={K6.sodium + 22} s={1.1} />
			<WireLoop pts={keysB} at={K6.nitrate - 8} hot={K6.nitrate + 40} s={1.1} />
			<Write x={860} y={440} text="the metal" at={K6.which} size={42} color={INK} anchor="middle" />
			<PenArrow a={[820, 456]} b={[naA + 4, ay - 44]} at={K6.which + 10} color={INK} bend={0.15} />
			<PenArrow a={[900, 456]} b={[naB - 4, by - 44]} at={K6.which + 16} color={INK} bend={-0.15} />
			<Bracket a={[restXA0, ay + 8]} b={[restXA1, ay + 8]} at={K6.doesnt} color={INK} depth={10} />
			<Bracket a={[restXB0, by + 8]} b={[restXB1, by + 8]} at={K6.doesnt + 6} color={INK} depth={10} />
			<Write x={860} y={918} text="not the rest" at={K6.doesnt + 10} size={42} color={INK} anchor="middle" />
			{/* results */}
			<rect x={1180} y={196} width={644} height={226} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={1204} y={244} text="sample" size={34} color={INK} weight={800} at={-1000} />
			<Sx x={1470} y={244} text="flame" size={34} color={INK} weight={800} at={-1000} />
			<line x1={1180} x2={1824} y1={262} y2={262} stroke={INK} strokeWidth={3} />
			<Rich x={1204} y={318} segs={[{t: 'NaCl(aq)'}]} size={38} />
			<Rich x={1204} y={392} segs={[{t: 'NaNO_3(aq)'}]} size={38} />
			<Rich x={1470} y={318} segs={[{t: 'yellow-orange', c: MT.Na.ink}]} size={38} at={K6.sodium + 30} />
			<Rich x={1470} y={392} segs={[{t: 'yellow-orange', c: MT.Na.ink}]} size={38} at={K6.nitrate + 46} />
			<Sx x={1180} y={530} text="a flame colour shows:" size={34} color={INK} weight={800} at={K6.flame} />
			<Framed x={1166} y={612} segs={[{t: 'the metal, not the compound'}]} at={K6.flame + 6} size={44} tick={false} />
			<TickMark x={1800} y={230} at={K6.data} color={TEAL_T} s={1.2} />
			<Write x={1180} y={720} text="primary data:" at={K6.record} size={42} color={TEAL_T} />
			<Write x={1180} y={772} text="observed and recorded by you" at={K6.record + 14} size={42} color={TEAL_T} />
			{void K6.what}{void K6.because}{void K6.part}{void NAVY_T}{void kf}{void smooth}{void chipW}
		</svg>
	);
};
