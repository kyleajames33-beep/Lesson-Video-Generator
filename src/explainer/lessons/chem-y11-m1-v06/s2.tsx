// Y11 Chem M1 V06 scenes 6 to 10: a real run with a shortfall (25.00 g bar with a rose hatched gap and a struck
// "divide by what came back" slip), the loss board (the separation plates large with loss markers), the damp-sand
// prediction, the damp sand drying on one clock (display, bar, overhang and total all from the same reading) and the
// memory line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {BASIN_X, DRYB, FILT, HOTB, ROD, SAND, SANDB, g2, hold, p1, pct, sc} from './common';
import {SAND_INK, ViewFrame} from './parts';
import {
	AccBar, Balance, Bracket, Chip, Framed, Heading, INK, PURE, PenArrow, PenRing, Plate, ROSE, Readout, Rich, SVG, Sx, TEAL, TEAL_INK, TaskStrip, Write,
	balGeo, barX, clamp01, placeAt, plateMap, prog, richW, smooth, tw,
} from './parts';
import {Equation, SALT_SEG, SAND_SEG, eqX, tick} from './s1';

const GREEN_T = '#2f8a5b';
const SAND_F_ = '#d2a35e';
const RED_T = '#c4362f';

// ---------- 6. a real run: some mass goes missing ----------
const K6 = cues(sc('loss-run'), {real: 'Real practicals', t25: 'twenty-five', back: 'They get back', eight: 'eight', sixteen: 'sixteen', sand: 'The sand is', t32: 'thirty-two', saltis: 'and the salt is', t64: 'sixty-four', only: "you've only accounted", n96: 'ninety-six', one: 'One gram', missing: 'is missing'});
export const SceneLossRun: React.FC = () => {
	const f = useCurrentFrame();
	const r1 = [{t: 'sand:    '}, {t: '8.00 ÷ 25.00', c: PURE}, {t: ' × 100 = '}];
	const r2 = [{t: 'salt:   '}, {t: '16.00 ÷ 25.00', c: PURE}, {t: ' × 100 = '}];
	const SA = K6.back + 12, SB = K6.sixteen;
	const tot = 32 * smooth(prog(f, SA, 18)) + 64 * smooth(prog(f, SB, 18));
	const BX = 440, BW = 560;
	const bg = balGeo(96, 590, 300);
	const RX = 620;
	return (
		<SVG>
			<Heading text="A real run: some mass goes missing" at={0} />
			<TaskStrip text="find the percentage by mass of each component" />
			<rect x={96} y={268} width={1380} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Rich x={124} y={318} segs={[{t: 'givens:   mixture 25.00 g     |     sand 8.00 g     |     salt 16.00 g', c: PURE}]} size={40} weight={700} />
			<Sx x={1500} y={318} text="example data" size={30} color={INK} weight={700} at={-1000} />
			<Balance g={bg} text="25.00 g" />
			{(() => { const pl = placeAt(DRYB, [571, 1200], [bg.pan[0], bg.pan[1] + 8], 210 / DRYB.box[2]); return <Plate p={DRYB} x={pl.x} y={pl.y} h={pl.h} />; })()}
			<AccBar id="v6b6" x={BX} y={440} w={BW} whole={25} segs={[SAND_SEG(8, SA, '8.00 g'), SALT_SEG(16, SB, '16.00 g')]} gapAt={K6.one} gapLabel="missing 1.00 g = 4.0%" wholeLabel="25.00 g" base="whole mixture: 25.00 g" />
			<Plate p={SAND} x={1240} y={420} h={SAND.box[3] * (280 / SAND.box[2])} />
			<Plate p={BASIN_X} x={1540} y={380} h={BASIN_X.box[3] * (280 / BASIN_X.box[2])} />
			<Sx x={1380} y={560} text="sand 8.00 g" size={36} color={SAND_INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1680} y={560} text="salt 16.00 g" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1240} y={366} text="what came back:" size={34} color={INK} weight={800} at={-1000} />
			<Write x={1012} y={410} text="1.00 g short" at={K6.missing} size={42} color={ROSE} />
			<PenArrow a={[1022, 420]} b={[barX(BX, BW, 25, 24.6), 446]} at={K6.missing + 4} color={ROSE} bend={0.2} />
			<Sx x={RX} y={608} text="total recovered" size={30} color={INK} weight={700} at={SA} />
			<Readout x={RX} y={618} w={290} text={p1(tot)} size={52} color={PURE} frame={PURE} anchor="middle" at={SA} />
			<PenRing cx={RX + 145} cy={657} rx={170} ry={58} at={K6.n96} color={ROSE} seed={3} />
			<Rich x={RX} y={760} segs={r1.map((s, i) => ({...s, at: [K6.back, K6.eight, K6.sand][i]}))} at={K6.back} size={50} />
			<Framed x={RX + richW(r1, 50)} y={760} segs={[{t: '32.0%', c: '#a35c00'}]} at={K6.t32} size={52} tick={false} stroke="#e8a33d" />
			<Rich x={RX} y={845} segs={r2.map((s, i) => ({...s, at: [K6.back + 10, K6.sixteen, K6.saltis][i]}))} at={K6.back + 10} size={50} />
			<Framed x={RX + richW(r2, 50)} y={845} segs={[{t: '64.0%', c: '#a35c00'}]} at={K6.t64} size={52} tick={false} stroke="#e8a33d" />
			<Chip x={1000} y={600} segs={[{t: '÷ 24.00 g (what came back): 33.3% + 66.7% = 100%'}]} at={K6.only} size={30} color={RED_T} strike={K6.n96 + 20} />
			<Write x={1020} y={712} text="that hides the loss" at={K6.n96 + 26} size={42} color={RED_T} />
			{void K6.real}{void K6.back}{void tw}
		</SVG>
	);
};

// ---------- 7. where the missing mass went ----------
const K7 = cues(sc('loss-causes'), {where: 'So where', vanish: "didn't vanish", third: 'mystery third', sub: 'substance.', never: 'never made', paper: 'filter paper', spit: 'spit out', hard: 'hard.', crystals: 'some crystals', basin: ['basin', 2], report: 'report the missing', name: 'name where', happened: 'happened.'});
export const SceneLossCauses: React.FC = () => {
	const f = useCurrentFrame();
	const bm = plateMap(SANDB, 130, 290, 340);
	const fm = plateMap(FILT, 700, 230, 420);
	const hm = plateMap(HOTB, 1180, 300, 330);
	const rim: [number, number] = [hm.X(560), hm.Y(150)];
	const tagsOut = K7.name;
	const glow = prog(f, K7.happened, 10) * (1 - prog(f, K7.happened + 20, 10));
	return (
		<SVG>
			<Heading text="Where did the missing mass go?" at={0} />
			<Chip x={1824} y={190} segs={[{t: 'a third substance?'}]} at={K7.third} size={40} color={RED_T} anchor="end" strike={K7.sub + 10} />
			<Write x={1460} y={320} text="lost, not new" at={K7.sub + 16} size={42} color={RED_T} />
			<Plate p={SANDB} x={130} y={290} h={340} />
			<Plate p={FILT} x={700} y={230} h={420} />
			<Plate p={HOTB} x={1180} y={300} h={330} />
			{/* wet film and drops on the beaker wall and the filter paper */}
			<g opacity={prog(f, K7.paper - 30, 12)}>
				{[[bm.X(240), bm.Y(330)], [bm.X(250), bm.Y(470)], [bm.X(900), bm.Y(380)], [fm.X(420), fm.Y(250)], [fm.X(620), fm.Y(280)]].map(([x, y], i) => <path key={i} d={`M${x},${y - 12} q9,13 0,20 q-9,-7 0,-20 Z`} fill="#7fb6dd" stroke="#2d6f9c" strokeWidth={2} />)}
			</g>
			<PenArrow a={[150, 690]} b={[bm.X(250), bm.Y(1000)]} at={K7.paper - 30} out={tagsOut} color={ROSE} bend={-0.15} />
			<PenArrow a={[560, 690]} b={[fm.X(420), fm.Y(260)]} at={K7.paper - 22} out={tagsOut} color={ROSE} bend={0.25} />
			<Write x={130} y={730} text="left wetting the glass and paper" at={K7.paper - 26} out={tagsOut} size={42} color={ROSE} />
			{/* spitting from the basin */}
			{Array.from({length: 6}, (_, i) => {
				const t = ((f - K7.spit) % 40) / 40;
				if (f < K7.spit || f > K7.basin) return null;
				const tt = clamp01(t + i * 0.12) % 1;
				const dx = (i % 2 ? 1 : -1) * (40 + i * 18) * tt, dy = -150 * tt + 200 * tt * tt;
				return <circle key={i} cx={rim[0] + dx} cy={rim[1] + dy} r={7} fill="#7fb6dd" stroke="#2d6f9c" strokeWidth={2} />;
			})}
			<Write x={1500} y={430} text="spat out" at={K7.hard - 20} out={tagsOut} size={42} color={ROSE} />
			<PenArrow a={[1510, 400]} b={[rim[0] + 70, rim[1] - 20]} at={K7.hard - 16} out={tagsOut} color={ROSE} bend={0.2} />
			{/* crystals stuck to the rod and the basin rim */}
			<Plate p={ROD} x={1160} y={668} h={ROD.box[3] * (380 / ROD.box[2])} at={K7.crystals} />
			<g opacity={prog(f, K7.crystals, 10)}>
				{[0, 1, 2, 3, 4].map(i => <rect key={i} x={1250 + i * 30} y={660 + (i % 2) * 6} width={11} height={11} fill="#fff" stroke={INK} strokeWidth={2} transform={`rotate(${i * 20},${1255 + i * 30},${665})`} />)}
				{[0, 1, 2].map(i => <rect key={'r' + i} x={hm.X(470) + i * 26} y={hm.Y(170) + (i % 2) * 5} width={11} height={11} fill="#fff" stroke={INK} strokeWidth={2} />)}
			</g>
			<Write x={1580} y={690} text="stuck crystals" at={K7.basin - 10} out={tagsOut} size={42} color={ROSE} />
			<PenArrow a={[1590, 660]} b={[hm.X(560), hm.Y(190)]} at={K7.basin - 6} out={tagsOut} color={ROSE} bend={0.25} />
			{/* the 25.00 g bar with its gap */}
			<AccBar id="v6b7" x={130} y={790} w={600} whole={25} segs={[SAND_SEG(8, -1000, '32.0%'), SALT_SEG(16, -1000, '64.0%')]} gapAt={-1000} wholeLabel="25.00 g mixture" />
			{glow > 0.01 ? <rect x={130 + 576 - 8} y={782} width={40} height={100} rx={8} fill="none" stroke={ROSE} strokeWidth={6} opacity={glow} /> : null}
			<Sx x={800} y={780} text="where the 1.00 g went:" size={34} color={INK} weight={800} at={K7.name} />
			{['solution left on glassware and paper', 'spitting during heating', 'crystals left on rod and basin'].map((t, i) => (
				<g key={t}>
					<circle cx={812} cy={818 + i * 46} r={7} fill={ROSE} opacity={prog(f, K7.name + 8 + i * 10, 8)} />
					<Sx x={830} y={830 + i * 46} text={t} size={34} color={INK} weight={700} at={K7.name + 8 + i * 10} />
				</g>
			))}
			{void K7.where}{void K7.vanish}{void K7.never}{void K7.report}{void BASIN_X}
		</SVG>
	);
};

// ---------- 8. prediction ----------
const K8 = cues(sc('prediction'), {quick: 'Quick prediction', damp: 'damp.', will: 'Will the percentage', what: 'And what will', think: 'think.'});
/** Sand watch glass on the pan of balance g; a dark damp patch and a few drops while `damp` > 0. */
const DampGlass: React.FC<{g: ReturnType<typeof balGeo>; damp: number}> = ({g, damp}) => {
	const kw = (0.78 * 890 * g.k) / SAND.box[2];
	const P: [number, number] = [g.pan[0], g.pan[1] - 10];
	const ws = placeAt(SAND, [830, 476], P, kw);
	const sx = ws.x + (830 - SAND.box[0]) * kw, sy = ws.y + (470 - SAND.box[1]) * kw;
	return (
		<g>
			<Plate p={SAND} x={ws.x} y={ws.y} h={ws.h} />
			{damp > 0.01 ? (
				<g opacity={damp}>
					<ellipse cx={sx} cy={sy} rx={64 * kw / 0.25} ry={22 * kw / 0.25} fill="#5b4326" opacity={0.45} />
					{[[-40, -14], [20, -22], [46, 4], [-10, 10]].map(([dx, dy], i) => <path key={i} d={`M${sx + dx * kw / 0.25},${sy + dy - 10} q7,10 0,16 q-7,-6 0,-16 Z`} fill="#7fb6dd" stroke="#2d6f9c" strokeWidth={2} />)}
				</g>
			) : null}
		</g>
	);
};
export const ScenePrediction: React.FC = () => {
	const g = balGeo(90, 400, 470);
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<Balance g={g} text="? g" />
			<DampGlass g={g} damp={1} />
			<Sx x={100} y={290} text="sand still a little damp" size={40} color={INK} weight={800} at={K8.damp - 20} />
			<ViewFrame id="v6p8" cx={790} cy={290} r={105} at={K8.damp - 20} src={[g.pan[0] + 20, g.pan[1] - 30]}>
				{Array.from({length: 24}, (_, i) => <circle key={i} cx={700 + (i % 6) * 36 + (Math.floor(i / 6) % 2) * 16} cy={228 + Math.floor(i / 6) * 38} r={15} fill={SAND_F_} stroke={SAND_INK} strokeWidth={2} />)}
				{[[718, 247], [790, 266], [754, 304], [826, 342], [700, 340], [850, 260]].map(([x, y], i) => <path key={'w' + i} d={`M${x},${y - 12} q9,13 0,20 q-9,-7 0,-20 Z`} fill="#7fb6dd" stroke="#2d6f9c" strokeWidth={2} />)}
			</ViewFrame>
			<Sx x={100} y={340} text="water between the grains" size={32} color={INK} weight={700} at={K8.damp} />
			<Sx x={960} y={262} text="the dry run (20.00 g)" size={34} color={INK} weight={800} at={-1000} />
			<AccBar id="v6b8" x={960} y={300} w={600} whole={20} segs={[SAND_SEG(6, -1000, '30.0%'), SALT_SEG(14, -1000, '70.0%')]} />
			<Chip x={960} y={480} segs={[{t: 'sand %: too high or too low?'}]} at={K8.will} size={44} color={INK} />
			<Chip x={960} y={600} segs={[{t: 'total: ? %'}]} at={K8.what} size={44} color={INK} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1640} y={800} r={64} ringFrom={K8.think} />
			{void K8.quick}
		</SVG>
	);
};

// ---------- 9. extra mass, and drying to constant mass ----------
const K9 = cues(sc('extra-mass'), {high: 'Too high', bal: 'The balance', counted: 'counted as sand', pushes: 'pushes the total', above1: 'above one hundred percent', dirs: 'both directions', below: 'Below one', above: 'Above one', water: 'usually water', fix: 'The fix', heat: 'Heat it', cool: 'let it cool', weigh: 'and weigh it', again: 'Then heat and weigh', until: 'until two readings', match: 'match.'});
export const mass9 = (f: number) => {
	if (f < K9.heat) return tick(f, K9.bal, K9.bal + 40, 0, 6.4);
	if (f < K9.again) return tick(f, K9.weigh - 30, K9.weigh, 6.4, 6.12);
	return tick(f, K9.again + 10, K9.again + 34, 6.12, 6.0);
};
const READS: {v: string; at: number}[] = [{v: '6.40 g', at: K9.fix}, {v: '6.12 g', at: K9.weigh}, {v: '6.00 g', at: K9.again + 34}, {v: '6.00 g', at: K9.until + 14}];
export const SceneExtra: React.FC = () => {
	const f = useCurrentFrame();
	const g = balGeo(80, 480, 420);
	const m = mass9(f);
	const water = Math.max(0, m - 6);
	const total = pct(m + 14, 20);
	const BX = 960, BW = 600, bsc = BW / 20;
	const wx = BX + 6 * bsc;
	const exEnd = BX + BW + Math.max(24, water * bsc);
	return (
		<SVG>
			<Heading text="Extra mass, and drying to constant mass" at={0} />
			<Framed x={100} y={300} segs={[{t: 'too high', c: GREEN_T}]} at={K9.high} size={52} />
			<Balance g={g} text={f < K9.bal ? '? g' : g2(m)} />
			<DampGlass g={g} damp={clamp01(water / 0.4)} />
			<Sx x={1490} y={186} text="total" size={30} color={INK} weight={700} at={-1000} />
			<Readout x={1490} y={196} w={300} text={f < K9.bal + 40 ? '? %' : p1(total)} size={52} color={total > 100.05 ? TEAL_INK : PURE} frame={total > 100.05 ? TEAL : PURE} anchor="middle" />
			{/* comparison: the run with a shortfall */}
			<g opacity={smooth(prog(f, K9.dirs, 18))} transform={`translate(${(1 - smooth(prog(f, K9.dirs, 18))) * 200},0)`}>
				<AccBar id="v6b9c" x={BX} y={290} w={360} whole={25} h={56} labelSize={28} segs={[SAND_SEG(8, -1000), SALT_SEG(16, -1000)]} gapAt={-1000} />
			</g>
			<Write x={BX + 400} y={334} text="below 100%: something lost" at={K9.below} size={36} color={ROSE} />
			<AccBar id="v6b9" x={BX} y={430} w={BW} whole={20} segs={[SAND_SEG(6, -1000, `${pct(m, 20).toFixed(1)}%`), {m: water, fill: TEAL, ink: TEAL_INK, at: -1000}, SALT_SEG(14, -1000, '70.0%')]} extraAt={K9.pushes} wholeLabel="20.00 g mixture" />
			<PenRing cx={wx + 6} cy={472} rx={30} ry={60} at={K9.counted} out={K9.fix} color={TEAL} seed={6} />
			<Write x={BX} y={600} text="water weighed as sand" at={K9.counted + 6} out={K9.dirs} size={42} color={TEAL_INK} />
			<Bracket a={[BX + BW - 2, 410]} b={[exEnd + 2, 410]} at={K9.above1} out={K9.fix} color={TEAL} depth={-14} />
			<Write x={BX} y={600} text="above 100%: something extra, usually water" at={K9.above} size={38} color={TEAL_INK} />
			{/* the drying loop */}
			{['heat', 'cool', 'weigh'].map((t, i) => <Chip key={t} x={BX + i * 270} y={660} segs={[{t}]} at={[K9.heat, K9.cool, K9.weigh][i]} size={44} color={INK} w={190} />)}
			<path d={`M${BX + 196},${694} l64,0 M${BX + 466},${694} l64,0`} stroke={INK} strokeWidth={4} opacity={prog(f, K9.cool, 8)} />
			<path d={`M${BX + 250},684 l12,10 l-12,10 M${BX + 520},684 l12,10 l-12,10`} stroke={INK} strokeWidth={4} fill="none" opacity={prog(f, K9.cool, 8)} />
			<path d={`M${BX + 640},${738} q0,46 -60,46 l-440,0 q-50,0 -50,-46`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, K9.again, 10)} />
			<path d={`M${BX + 80},740 l10,-14 l10,14`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, K9.again, 10)} />
			<Sx x={BX} y={862} text="readings:" size={34} color={INK} weight={800} at={K9.fix} />
			{READS.map((r, i) => <Sx key={i} x={BX + 170 + i * 165} y={862} text={r.v} size={40} color={PURE} weight={800} at={r.at} />)}
			<PenRing cx={BX + 170 + 2.5 * 165 + 60} cy={850} rx={190} ry={40} at={K9.match - 8} color={PURE} seed={8} />
			<Write x={BX + 400} y={926} text="constant mass" at={K9.match - 4} size={42} color={PURE} />
			{void K9.water}{void K9.until}{void tw}
		</SVG>
	);
};

// ---------- 10. one line to remember ----------
const K10 = cues(sc('memory-line'), {line: 'in one line', divide: 'Divide by', then: 'then account', each: 'Each', orig: 'original mass', left: 'left over', loss: 'loss,', extra: 'extra mass'});
export const SceneMemoryLine: React.FC = () => {
	const ex = eqX(110, 44);
	const l1 = 'Divide by what you started with,';
	const sw = 150 + tw('Divide by what you ', 56, true, 700) + tw('started with', 56, true, 700) / 2;
	const BX = 760, BW = 600;
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<Equation x={110} y={260} size={44} />
			<rect x={110} y={330} width={1700} height={240} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
			<Sx x={140} y={372} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Write x={150} y={450} text={l1} at={K10.divide} size={56} color={PURE} />
			<Write x={150} y={530} text="then account for the rest." at={K10.then} size={56} color={ROSE} />
			<PenArrow a={[sw, 410]} b={[(ex.u0 + ex.u1) / 2, 280]} at={K10.orig} color={PURE} bend={-0.15} />
			<Plate p={SAND} x={110} y={700} h={SAND.box[3] * (240 / SAND.box[2])} />
			<Plate p={BASIN_X} x={390} y={650} h={BASIN_X.box[3] * (300 / BASIN_X.box[2])} />
			<AccBar id="v6b10" x={BX} y={700} w={BW} whole={25} segs={[SAND_SEG(8, -1000, '32.0%'), SALT_SEG(16, -1000, '64.0%')]} gapAt={-1000} gapLabel="lost" wholeLabel="25.00 g mixture" />
			<PenArrow a={[150 + tw('then account for ', 56, true, 700) + 60, 556]} b={[BX + BW - 12, 690]} at={K10.left} color={ROSE} bend={0.15} />
			<g opacity={prog(useCurrentFrame(), K10.extra, 12)}>
				<rect x={BX + BW + 60} y={700} width={36} height={84} fill={TEAL} stroke={TEAL_INK} strokeWidth={3} />
				<Sx x={BX + BW + 112} y={756} text="or extra (usually water)" size={34} color={TEAL_INK} weight={800} at={-1000} />
			</g>
			{void K10.line}{void K10.each}{void K10.loss}{void barX}{void Rich}
		</SVG>
	);
};
