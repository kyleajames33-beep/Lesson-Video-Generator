// Scenes 1 to 6: the hook (last time's decaying grid; the painted source and Geiger counter clicking at random; the
// halving sketch made solid; a gram or a tonne), one nucleus has no memory (an age readout racing past a fixed chance),
// a safe model (the painted tray and 200 counters thrown by the chance engine: 200, 103, 49, 27), what half-life halves
// (the staircase and a log half-life ruler), why equal halving times (decays per second = λN from particle-box grids;
// N_t = N₀e^(−λt)) and linking λ to t½ (ln step by step).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Strip as BStrip} from './parts';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {CountDisplay, DECAY_AT, GEIGER, NucleiGrid, NucleonCluster, SEALED, clickRun, clicksTo, clusterLayout, decayFrames, decayRun} from '../../physics/atom/decay';
import {runTrials} from '../../sims/chance';
import {lazy} from '../../sims';
import {HandoffBoard14, GR14, M8V14FinalFrame} from '../phys-y12-m8-v14/s3';
import {dur as dur14} from '../phys-y12-m8-v14/common';
import {dispRect} from '../phys-y12-m8-v14/parts';
import {COUNTER_SEEDS, COUNTS, EXPECTED, HEAD, HEAD_SIZE, RULER, cap, cue, dur} from './common';
import {AMBER, Axes, CounterImg, ExpLaw, GREY, INK, LPlate, LamLaw, Lbl, N0, NAVY, NEUTRON, NUC_RED, Nt, RED, T, TEAL, TRAY, Th, curveD, gx, gy, placeAt} from './parts';
import {GraphPaper} from '../phys-y12-m8-v14/parts';
import type {GBox} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 1. hook ----------
const SRC1 = placeAt(SEALED, DECAY_AT.window, 860, 770, 170), GEI1 = placeAt(GEIGER, DECAY_AT.tube, 900, 770, 270);
const CL1 = lazy(() => clickRun(31, dur('hook'), 0.08));
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const dm = cue(id, 'decays at a moment nobody can predict'), ah = cue(id, 'always halves in the same time'), gt = cue(id, 'a gram or a tonne'), at = cap(id, cue(id, 'not one atom'), 8);
	if (f < 1) return <M8V14FinalFrame />;
	const plates = prog(f, dm + 10, 20) * (1 - prog(f, gt, 20));
	const solid = prog(f, ah, 24), two = prog(f, gt + 10, 20);
	const ticks = clicksTo(CL1(), f).filter(k => k >= dm + 10);
	const disp = dispRect(GEI1);
	const G = GR14, half = (n0: number) => Array.from({length: 61}, (_, i) => { const t = i / 60; return `${i ? 'L' : 'M'}${(G.x + t * G.w).toFixed(1)},${(G.y + G.h - G.h * 0.9 * n0 * 0.5 ** (t * 4)).toFixed(1)}`; }).join(' ');
	return (
		<>
			<HandoffBoard14 f={dur14('handoff') - 1} final heading={false} chip={false} />
			<MarkedHeading text={HEAD} marks={['population', 'one atom']} at={at} size={HEAD_SIZE} />
			<Chip x={96} y={870} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why does half-life predict a population but not one atom?</Chip>
			<FrameSvg>
				{f >= dm ? <circle cx={120 + 7 * 54 + 27} cy={300 + 2 * 54 + 27} r={22 + 20 * pulseOf(f, dm, 24)} fill="none" stroke={AMBER.stroke} strokeWidth={4} opacity={pulseOf(f, dm, 24)} /> : null}
				{solid > 0.001 ? <g opacity={solid * (1 - two)}>
					<path d={half(1)} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
					{[1, 2, 3].map(n => <line key={n} x1={G.x + (G.w * n) / 4} y1={G.y + G.h} x2={G.x + (G.w * n) / 4} y2={G.y + G.h - G.h * 0.9 * 0.5 ** n} stroke={TEAL.stroke} strokeWidth={4} />)}
				</g> : null}
				{two > 0.001 ? <g opacity={two}>
					<rect x={G.x + 4} y={G.y - 10} width={G.w} height={G.h + 6} fill="#f6f1e7" />
					<path d={half(1)} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
					<path d={half(0.55)} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 7" />
					{[1, 2, 3].map(n => <line key={n} x1={G.x + (G.w * n) / 4} y1={G.y + G.h} x2={G.x + (G.w * n) / 4} y2={G.y + 20} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="6 6" />)}
				</g> : null}
				{plates > 0.001 ? <g opacity={plates}>
					<LPlate spec={SEALED} p={SRC1} /><LPlate spec={GEIGER} p={GEI1} />
					<CountDisplay r={disp} text={String(ticks.length)} />
				</g> : null}
			</FrameSvg>
			{plates > 0.001 ? <HandTag x={700} y={860} text="random clicks" at={dm + 30} out={gt} size={34} color={GREY.ink} marks={[{kind: 'circle', cx: (disp[0] + disp[2]) / 2, cy: (disp[1] + disp[3]) / 2, rx: 70, ry: 28}]} /> : null}
			<Lbl x={G.x + G.w - 10} y={G.y + 30} at={ah + 10} out={gt} color={TEAL.ink} size={30} anchor="end">equal halving times</Lbl>
			<Lbl x={G.x + G.w - 10} y={G.y + 30} at={gt + 20} color={NAVY.ink} size={28} anchor="end">a gram (solid), less (dashed)</Lbl>
			<HandTag x={G.x + G.w * 0.32} y={G.y + G.h * 0.42} text="same t½" at={gt + 30} size={40} color={TEAL.ink} marks={[{kind: 'underline', x1: G.x + 8, x2: G.x + G.w / 4 - 8, y: G.y + G.h - 8}]} />
		</>
	);
};

// ---------- 2. one nucleus has no memory ----------
const AGES = ['1 minute', '1 hour', '1 day', '1 year', '1000 years', '10⁶ years', '10⁹ years'] as const;
const NUC2 = clusterLayout(14, 16, 2);
const Dial: React.FC<{x: number; y: number; r: number; deg: number}> = ({x, y, r, deg}) => {
	const a = ((180 + deg) * Math.PI) / 180;
	return (
		<g>
			<path d={`M${x - r},${y} A${r},${r} 0 0 1 ${x + r},${y}`} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			{Array.from({length: 7}, (_, i) => { const t = (Math.PI * i) / 6; return <line key={i} x1={x - r * Math.cos(t)} y1={y - r * Math.sin(t)} x2={x - (r - 16) * Math.cos(t)} y2={y - (r - 16) * Math.sin(t)} stroke={INK} strokeWidth={3} />; })}
			<line x1={x} y1={y} x2={x + (r - 24) * Math.cos(a)} y2={y + (r - 24) * Math.sin(a)} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
			<circle cx={x} cy={y} r={10} fill={TEAL.stroke} />
		</g>
	);
};
export const S02: React.FC = () => {
	const id = 'no-memory';
	const f = useCurrentFrame();
	const da = cue(id, "doesn't age"), sc = cue(id, 'the same small chance'), hs = cue(id, 'Heating it, squeezing it'), ns = cue(id, 'you can never say when'), la = cap(id, cue(id, 'the decay constant, lambda'), 24);
	const ai = f < sc ? 0 : Math.min(AGES.length - 1, Math.floor((f - sc) / 14));
	const q = (f - ns) / 40;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NucleonCluster cx={560} cy={560} r={30} discs={NUC2} pFill={NUC_RED} nFill={NEUTRON} tremble={0.4} f={f} />
				{f >= ns ? <g opacity={prog(f, ns, 12)}><circle cx={560 + 230 * Math.cos(q)} cy={560 + 230 * Math.sin(q)} r={34} fill="#fffdf8" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" /><text x={560 + 230 * Math.cos(q)} y={572 + 230 * Math.sin(q)} textAnchor="middle" style={T(36, NAVY.ink)}>?</text></g> : null}
				<Dial x={1500} y={520} r={150} deg={14} />
			</FrameSvg>
			<Lbl x={560} y={330} at={-30} color={INK} size={32} anchor="middle">one nucleus</Lbl>
			<Readout x={1120} y={200} label="age of this nucleus" value={f < sc ? `${Math.max(1, Math.min(59, 1 + Math.floor(f / 30)))} s` : AGES[ai]} color={GREY.ink} w={460} />
			<Lbl x={1500} y={580} at={-30} color={TEAL.ink} size={28} anchor="middle">chance of decay per moment</Lbl>
			<HandTag x={1350} y={330} text="stays the same" at={sc + 20} size={34} color={TEAL.ink} marks={[{kind: 'circle', cx: 1500, cy: 460, rx: 180, ry: 110}]} />
			<CrossedChip x={96} y={200} at={da} crossAt={da + 16} size={30} caption="no countdown">wears out with age</CrossedChip>
			<CrossedChip x={1120} y={640} at={hs} crossAt={hs + 10} size={28}>temperature</CrossedChip>
			<CrossedChip x={1380} y={640} at={hs + 8} crossAt={hs + 18} size={28}>pressure</CrossedChip>
			<CrossedChip x={1590} y={640} at={hs + 16} crossAt={hs + 26} size={28}>chemistry</CrossedChip>
			<Lbl x={1120} y={760} at={hs + 30} color={TEAL.ink} size={30}>λ unchanged</Lbl>
			<div style={{position: 'absolute', left: 96, top: 830, width: 1100}}><Row at={la} size={38} style={{whiteSpace: 'normal'}}><AnswerBox at={la + 4}>λ: decay constant, the fixed decay rate per nucleus (s⁻¹)</AnswerBox></Row></div>
			<HandTag x={1250} y={860} text="short time Δt: chance ≈ λΔt" at={la + 20} size={32} color={TEAL.ink} />
		</>
	);
};

// ---------- 3. a safe model: counters ----------
const TRAY3 = {x: 96, y: 290, w: 980};
const FLOOR = (() => { const s = TRAY3.w / (TRAY.box[2] - TRAY.box[0]); const [x0, y0, x1, y1] = DECAY_AT.trayFloor; return {x0: TRAY3.x + (x0 - TRAY.box[0]) * s + 24, y0: TRAY3.y + (y0 - TRAY.box[1]) * s + 24, x1: TRAY3.x + (x1 - TRAY.box[0]) * s - 24, y1: TRAY3.y + (y1 - TRAY.box[1]) * s - 24}; })();
const hsh = (n: number, k: number) => { const s = Math.sin(n * 12.9898 + k * 78.233) * 43758.5453; return s - Math.floor(s); };
/** The three seeded throws: for each, the ids thrown and which landed red up (chance engine, p = 1/2). */
export const THROWS = lazy(() => {
	let ids = Array.from({length: 200}, (_, i) => i);
	return COUNTER_SEEDS.map(seed => {
		const run = runTrials({seed, trials: 1, experiment: {kind: 'coins', coins: ids.length, p: 0.5}});
		const red = new Set(ids.filter((_, j) => run.parts[j] === 1));
		const out = {ids, red};
		ids = ids.filter(i => !red.has(i));
		return out;
	});
});
const posOf = (id: number, k: number): [number, number] => [lerp(FLOOR.x0, FLOOR.x1, hsh(id, k * 3 + 1)), lerp(FLOOR.y0, FLOOR.y1, hsh(id, k * 3 + 2))];
export const S03: React.FC = () => {
	const id = 'counters-model';
	const f = useCurrentFrame();
	const rr = cue(id, 'remove every one that lands red side up'), oc = cue(id, 'a one in two chance'), cp = cue(id, "You can't predict which ones"), ah = cue(id, 'about half go each time'), tf = cap(id, cue(id, 'about twenty five'), 30);
	const gap = Math.max(50, Math.min(80, Math.floor((tf - ah) / 2)));
	const tStart = [rr, ah, ah + gap];
	const k = f < tStart[1] ? 0 : f < tStart[2] ? 1 : 2;
	const th = THROWS()[k];
	const scatter = k === 0 ? 1 : prog(f, tStart[k], 14), lift = prog(f, tStart[k] + (k === 0 ? 6 : 20), 22);
	const done = [rr + 28, ah + 42, ah + gap + 42];
	const thrown = COUNTS.filter((_, i) => i === 0 || f >= done[i - 1]).length - 1;
	const hover = Math.floor(f / 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={TRAY} p={TRAY3} />
				{th.ids.map(i => {
					const p1 = posOf(i, k), p0 = k > 0 ? posOf(i, k - 1) : p1, red = th.red.has(i);
					const x = lerp(p0[0], p1[0], scatter), y = lerp(p0[1], p1[1], scatter) - (red ? 260 * lift : 0);
					return <CounterImg key={i} x={x} y={y} d={34} red={red} opacity={red ? 1 - lift : 1} />;
				})}
				{f >= cp && f < ah ? (() => { const ids = THROWS()[1].ids, i = ids[Math.floor(hsh(hover, 9) * ids.length)], p = posOf(i, 0); return <circle cx={p[0]} cy={p[1]} r={26} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="6 5" />; })() : null}
				{f >= tf ? <g opacity={prog(f, tf, 14)}>
					{COUNTS.map((c, i) => <rect key={i} x={1460 + i * 90} y={900 - c * 1.2} width={60} height={c * 1.2} fill={i === 0 ? '#d9d1c2' : '#e3b9b3'} stroke={INK} strokeWidth={2.5} />)}
					<path d={Array.from({length: 31}, (_, j) => { const t = (j / 30) * 3; return `${j ? 'L' : 'M'}${(1490 + t * 90).toFixed(1)},${(900 - 200 * 0.5 ** t * 1.2).toFixed(1)}`; }).join(' ')} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 7" />
				</g> : null}
			</FrameSvg>
			<Readout x={1140} y={200} label="throw" value={String(thrown)} color={INK} w={300} />
			<Readout x={1460} y={200} label="remaining" value={String(COUNTS[thrown])} color={RED.ink} w={300} />
			<div style={{position: 'absolute', left: 1140, top: 350, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: INK, lineHeight: 1.35}}>
				{COUNTS.map((c, i) => (i <= thrown ? <div key={i}>{`throw ${i}: ${c} `}<span style={{color: GREY.ink}}>{`(expect ${EXPECTED[i]})`}</span></div> : null))}
			</div>
			<Chip x={96} y={790} at={-30} size={28} color={INK}>model: try it in class</Chip>
			<Chip x={96} y={850} at={oc} size={28} color={INK}>chance per throw = ½, so one throw = one half-life</Chip>
			<Lbl x={860} y={808} at={oc + 20} color={GREY.ink} size={26}>a chance per throw, not λ itself</Lbl>
			<HandTag x={700} y={250} text="red up: removed" at={rr + 10} size={36} color={RED.ink} marks={[{kind: 'circle', cx: 590, cy: 360, rx: 420, ry: 70}]} />
			<Lbl x={1460} y={540} at={tf} color={INK} size={26}>model: one throw = one half-life</Lbl>
			<HandTag x={1140} y={600} text="about half, not always exactly half" at={tf + 16} size={30} color={NAVY.ink} />
		</>
	);
};

// ---------- 4. what half-life halves ----------
const ST: GBox = {x: 200, y: 260, w: 1200, h: 440, tMax: 5};
const LR = {x0: 200, x1: 1700, y: 850, lo: -4, hi: 18};
const lrX = (s: number) => LR.x0 + ((Math.log10(s) - LR.lo) / (LR.hi - LR.lo)) * (LR.x1 - LR.x0);
export const Staircase: React.FC<{b: GBox; f: number; brackets?: number; labels?: boolean; bars?: number}> = ({b, brackets = 0, labels = true, bars = 1}) => (
	<g>
		{[0, 1, 2, 3, 4].map(n => <rect key={n} x={gx(b, n) - 40} y={gy(b, 0.5 ** n)} width={80} height={b.h * 0.5 ** n} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} opacity={bars} />)}
		{labels ? ['1', '½', '¼', '⅛', '1/16'].map((t, n) => <text key={t} x={gx(b, n)} y={gy(b, 0.5 ** n) - 14} textAnchor="middle" style={T(32, NAVY.ink)}>{t}</text>) : null}
		{brackets > 0.001 ? [1, 2, 3, 4].map(n => <path key={n} d={`M${gx(b, n - 1) + 44},${gy(b, 0.5 ** (n - 1)) + 6} Q${(gx(b, n - 1) + gx(b, n)) / 2},${gy(b, 0.5 ** (n - 1)) - 30} ${gx(b, n) - 10},${gy(b, 0.5 ** n) - 46}`} fill="none" stroke={NAVY.stroke} strokeWidth={3.5} opacity={brackets} />) : null}
	</g>
);
export const S04: React.FC = () => {
	const id = 'half-life-trap';
	const f = useCurrentFrame();
	const th = cue(id, 'the time for half the nuclei in a sample to decay'), wl = cue(id, "It's what's left"), tq = cue(id, 'After two, a quarter'), nz = cue(id, 'never quite reaches zero'), fs = cue(id, 'fractions of a second to billions of years'), fb = cap(id, cue(id, 'four and a half billion years'), 10);
	const run = prog(f, nz, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GraphPaper x={ST.x} y={ST.y} w={ST.w} h={ST.h} step={ST.w / 20} />
				<Axes b={ST} xLabel="number of half-lives" yLabel="N/N₀" ticks={[0, 1, 2, 3, 4, 5]} />
				<Staircase b={ST} f={f} brackets={prog(f, wl, 20)} />
				<path d={curveD(ST, t => 0.5 ** t, 0, 4 + run)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{f >= fs ? <g opacity={prog(f, fs, 14)}>
					<line x1={LR.x0} y1={LR.y} x2={LR.x1} y2={LR.y} stroke={INK} strokeWidth={4} />
					{[-4, 0, 4, 8, 12, 16].map(e => <g key={e}><line x1={lrX(10 ** e)} y1={LR.y - 8} x2={lrX(10 ** e)} y2={LR.y + 8} stroke={INK} strokeWidth={3} /><text x={lrX(10 ** e)} y={LR.y + 40} textAnchor="middle" style={T(26, INK)}>{`10${String(e).replace('-', '⁻').replace(/\d/g, c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c])}`}</text></g>)}
					{RULER.map((r, i) => (i < 3 || f >= fb ? <circle key={i} cx={lrX(r.s)} cy={LR.y} r={9} fill={AMBER.stroke} stroke="#ffffff" strokeWidth={2} /> : null))}
				</g> : null}
			</FrameSvg>
			<Chip x={1420} y={260} at={th} size={30} color={INK}>t½: half-life</Chip>
			<Lbl x={1420} y={720} at={-30} out={nz} color={NAVY.ink} size={30}>how much is left each time?</Lbl>
			<HandTag x={1420} y={380} text="half of what's left" at={wl + 20} size={36} color={NAVY.ink} />
			<CrossedChip x={1420} y={430} at={tq} crossAt={tq + 14} size={28} caption="¼ left, not 0">two half-lives = all gone</CrossedChip>
			<Lbl x={1420} y={620} at={nz + 10} color={NAVY.ink} size={28}>expected number: never reaches 0</Lbl>
			{RULER.map((r, i) => <Lbl key={i} x={lrX(r.s)} y={LR.y - (i % 2 ? 60 : 30)} at={i < 3 ? fs + 10 + i * 8 : fb} color={AMBER.ink} size={26} anchor="middle">{r.label}</Lbl>)}
			<Lbl x={LR.x1} y={LR.y + 80} at={fs} color={INK} size={26} anchor="end">half-life in seconds (log scale)</Lbl>
		</>
	);
};

// ---------- 5. why equal halving times ----------
const GA = {x: 96, y: 250, cols: 8, rows: 8, cell: 38};
const RUN5A = lazy(() => decayFrames(decayRun(51, 64, dur('exponential-law'), 0.018)));
const RUN5B = lazy(() => decayFrames(decayRun(52, 64, dur('exponential-law'), 0.018)));
const SB: GBox = {x: 860, y: 250, w: 900, h: 340, tMax: 4};
export const S05: React.FC = () => {
	const id = 'exponential-law';
	const f = useCurrentFrame();
	const lt = cue(id, 'lambda times the number left'), tm = cue(id, 'Twice as many nuclei'), sf = cue(id, 'the same fraction disappears'), sa = cue(id, 'steep at first'), ed = cue(id, "That's exponential decay"), mt = cap(id, cue(id, 'minus lambda t'), 24);
	const twoO = prog(f, tm, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NucleiGrid x={GA.x} y={GA.y} cols={8} rows={8} cell={GA.cell} decayAt={i => RUN5A()[i]} f={f} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} />
				<NucleiGrid x={GA.x + 8 * GA.cell + 30} y={GA.y} cols={8} rows={8} cell={GA.cell} decayAt={i => (f >= tm ? RUN5B()[i] : -1)} f={f} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} opacity={twoO} />
				<Axes b={SB} xLabel="time (half-lives)" yLabel="N" ticks={[0, 1, 2, 3, 4]} size={26} />
				<Staircase b={SB} f={f} brackets={prog(f, sf, 20)} labels={false} bars={prog(f, sf, 20)} />
				<path d={curveD(SB, t => 0.5 ** t)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{f >= sa ? <g opacity={prog(f, sa, 14)}>
					<line x1={gx(SB, 0)} y1={gy(SB, 1)} x2={gx(SB, 0.6)} y2={gy(SB, 1 - 0.693 * 0.6)} stroke={ORANGE_I} strokeWidth={4} />
					<line x1={gx(SB, 2.6)} y1={gy(SB, 0.25 * (1 + 0.693 * 0.4))} x2={gx(SB, 3.4)} y2={gy(SB, 0.25 * (1 - 0.693 * 0.4))} stroke={ORANGE_I} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={GA.x} y={GA.y + 8 * GA.cell + 40} at={-30} color={INK} size={28}>each nucleus: the same decay rate λ</Lbl>
			<div style={{position: 'absolute', left: 96, top: 640}}><Row at={lt} size={52}>decays per second = λN</Row></div>
			<HandTag x={96} y={760} text="rate × how many" at={lt + 20} size={36} color={TEAL.ink} />
			<Lbl x={GA.x + 8 * GA.cell + 30} y={GA.y - 30} at={tm} color={INK} size={28}>2N → 2 × decays</Lbl>
			{[1, 2, 3, 4].map(n => <Lbl key={n} x={(gx(SB, n - 1) + gx(SB, n)) / 2} y={gy(SB, 0.5 ** (n - 1)) - 40} at={sf + 10 + n * 4} color={NAVY.ink} size={26} anchor="middle">−½</Lbl>)}
			<Lbl x={gx(SB, 0.7)} y={gy(SB, 0.86)} at={sa + 10} color={INK} size={26}>many N: many decays</Lbl>
			<Lbl x={gx(SB, 2.5)} y={gy(SB, 0.38)} at={sa + 20} color={INK} size={26}>few N: few decays</Lbl>
			<Chip x={860} y={660} at={ed} size={28} color={INK}>same fraction per equal time = exponential</Chip>
			<div style={{position: 'absolute', left: 860, top: 740}}><Row at={mt} size={56}><AnswerBox at={mt + 4}><ExpLaw /></AnswerBox></Row></div>
			<Chip x={1300} y={750} at={mt + 10} size={26} color={AMBER.ink}>HSC formula sheet</Chip>
			<Lbl x={1300} y={850} at={mt + 16} color={INK} size={26}><N0 />: number at the start; <Nt />: number left at time t</Lbl>
		</>
	);
};
const ORANGE_I = '#c4582f';

// ---------- 6. linking λ to half-life ----------
const SM: GBox = {x: 120, y: 270, w: 440, h: 260, tMax: 3};
const RUN6S = lazy(() => decayFrames(decayRun(61, 36, dur('lambda-half-life'), 0.25)));
const RUN6L = lazy(() => decayFrames(decayRun(62, 36, dur('lambda-half-life'), 0.03)));
export const S06: React.FC = () => {
	const id = 'lambda-half-life';
	const f = useCurrentFrame();
	const nh = cue(id, 'N t is half of N nought'), eh = cue(id, 'e to the minus lambda t half equals one half'), tl = cue(id, 'Take the natural log of both sides'), lt = cue(id, 'lambda t half equals the natural log of two'), ol = cue(id, 'over the half life'), ms = cap(id, cue(id, 'more likely to decay each second'), 24);
	const g0 = ms;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<GraphPaper x={SM.x} y={SM.y} w={SM.w} h={SM.h} step={SM.w / 12} />
				<Axes b={SM} xLabel="t" yLabel="N" size={26} />
				<path d={curveD(SM, t => 0.5 ** t)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				<line x1={gx(SM, 1)} y1={gy(SM, 0)} x2={gx(SM, 1)} y2={gy(SM, 0.5)} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="6 5" />
				<line x1={gx(SM, 0)} y1={gy(SM, 0.5)} x2={gx(SM, 1)} y2={gy(SM, 0.5)} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="6 5" />
				<NucleiGrid x={1180} y={640} cols={6} rows={6} cell={34} decayAt={i => (f >= g0 ? RUN6S()[i] : -1)} f={f} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} />
				<NucleiGrid x={1500} y={640} cols={6} rows={6} cell={34} decayAt={i => (f >= g0 ? RUN6L()[i] : -1)} f={f} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={gx(SM, 1) + 8} y={gy(SM, 0) + 40} at={-30} color={TEAL.ink} size={26}>t½</Lbl>
			<BStrip x={620} y={200} at={-30} size={34} color={INK}>Link λ and <Th /></BStrip>
			<div style={{position: 'absolute', left: 620, top: 290, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={nh} ageAt={ol} size={48}>at t = <Th />: <Nt /> = ½<N0 /></Row>
				<Row at={eh} ageAt={ol} size={48}>e<sup>−λ<Th /></sup> = ½</Row>
				<Row at={tl} ageAt={ol} size={48}>−λ<Th /> = ln(½) = −ln2</Row>
				<Row at={lt} ageAt={ol} size={48}>λ<Th /> = ln2 = 0.693</Row>
				<Row at={ol} size={56}><AnswerBox at={ol + 4}><LamLaw /></AnswerBox></Row>
			</div>
			<Chip x={1380} y={430} at={tl + 6} size={28} color={GREY.ink}>ln(eˣ) = x</Chip>
			<div style={{position: 'absolute', left: 1240, top: 250, opacity: 1 - prog(f, ms, 12), fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, color: NAVY.ink, lineHeight: 1.3}}>known: <ExpLaw /><br /><span style={{color: TEAL.ink}}>want: λ in terms of <Th /></span></div>
			<Lbl x={120} y={640} at={-30} color={INK} size={28}>after one half-life, N is halved</Lbl>
			<Chip x={1380} y={700 - 200} at={ol + 10} size={26} color={AMBER.ink}>HSC formula sheet</Chip>
			<Lbl x={1180} y={620} at={-30} color={TEAL.ink} size={26}>{f >= g0 ? 'short t½ → big λ' : 'short t½'}</Lbl>
			<Lbl x={1500} y={620} at={-30} color={TEAL.ink} size={26}>{f >= g0 ? 'long t½ → small λ' : 'long t½'}</Lbl>
			<HandTag x={620} y={880} text="t½ ↓, λ ↑" at={g0 + 10} size={40} color={TEAL.ink} />
		</>
	);
};
export {ExpLaw};
