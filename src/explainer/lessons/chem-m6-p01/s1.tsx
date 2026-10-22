// M6 P01 scenes 1 to 6: the hook (purple, red, green, red); where the colour comes from (anthocyanins, tokens that
// lose more than one proton, a mixture); preparing the extract (chop, hot water, the cell lens, filter, cool, record);
// calibrating against solutions of known pH with equal drops; reading the colour chart; the water control.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {CHOPPED, FILTER, HOTPLATE, STEEP} from './assets';
import {
	ACID_T, AChip, BASE_T, C, CHART, CTok, CabBeaker, CellLens, Chart, ChartBr, ClockChip, DBottle, DimG, DropCount, Fade, FullMeter, GREYX, HopOff, INK, INK_SOFT, LensFrame,
	LoopArrow, Note, Overlay, PHRuler, PicH, RX, RingAt, Sx, TEAL, TaskLine, ThermoChip, WATER_T, Well, Wells, cabSurf, cabW, chartX, dRest, dropLand, lerp, pale, picW, rx, smooth,
	wellPt, wellR,
} from './parts';
import type {ChartG, DDrop, Trip, WFill} from './parts';
import {GREEN} from './common';

// ---------- 1. Hook: purple, red, green, red ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {purple: 'purple juice', acid: ['acid', 1], red: ['red', 2], base: 'Add a base', green: 'green', again: 'acid again', comes: 'comes back', so: 'So can', how: 'And how', ways: 'both ways'});
const BK = {x: 740, y: 300, h: 520};
export const SceneHook: React.FC = () => {
	const [sx, sy] = cabSurf(BK.x, BK.y, BK.h);
	const cx = BK.x + cabW(BK.h) / 2;
	const t1: Trip = {at: K1.red - 50, to: [sx - 60, sy - 60], n: 3, gap: 8, y1: sy, color: C.red};
	const t2: Trip = {at: K1.green - 50, to: [sx + 40, sy - 60], n: 3, gap: 8, y1: sy, color: C.green};
	const t3: Trip = {at: K1.comes - 50, to: [sx - 60, sy - 60], n: 3, gap: 8, y1: sy, color: C.red};
	return (
		<>
			<Heading text="A cabbage indicator: does it run both ways?" at={K1.how} size={62} />
			<Overlay>
				<CabBeaker x={BK.x} y={BK.y} h={BK.h} states={[{at: -100, s: 'p'}, {at: dropLand(t1, 0), s: 'r'}, {at: dropLand(t2, 0), s: 'g'}, {at: dropLand(t3, 0), s: 'r'}]} />
				<DBottle x={340} y={560} h={320} lines={['HCl', '0.10 mol/L']} tab={ACID_T} at={K1.acid - 30} trips={[t1, t3]} />
				<DBottle x={1475} y={560} h={320} lines={['NaOH', '0.10 mol/L']} tab={BASE_T} at={K1.base - 20} trips={[t2]} />
				<Sx x={392} y={930} text="acid" size={32} color={ACID_T} anchor="middle" weight={800} at={K1.acid} />
				<Sx x={1527} y={930} text="base" size={32} color={BASE_T} anchor="middle" weight={800} at={K1.base} />
				<Sx x={cx} y={BK.y + BK.h + 50} text="red cabbage extract" size={32} color={INK_SOFT} anchor="middle" hand at={K1.purple} out={K1.comes} />
				<LoopArrow cx={cx} cy={BK.y + BK.h * 0.55} rx={300} ry={300} at={K1.comes + 18} label="acid → base → acid" size={34} />
				{void K1.so}{void K1.again}{void K1.ways}
			</Overlay>
		</>
	);
};

// ---------- 2. Where the colour comes from ----------
const S2 = 'pigments';
const K2 = cues(sc(S2), {purple: 'The purple', antho: 'anthocyanins', dissolve: 'dissolve', each: 'Each one', weak: 'weak acid', but: 'But each', more: 'more than one', mix: 'mix', several: ['several', 2], blend: 'blending', two: 'not just two'});
export const ScenePigments: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 110, y: 330, h: 440};
	const [sx, sy] = cabSurf(B.x, B.y, B.h);
	const L = {cx: 800, cy: 560, r: 225};
	const X = [L.cx - 135, L.cx, L.cx + 135], Y = 500;
	const row = smooth(prog(f, K2.more, 14));
	const single = 1 - row;
	const nH = (i: number) => {
		if (i === 0) return 2;
		if (i === 1) return f < K2.more + 30 ? 2 : 1;
		return f < K2.more + 30 ? 2 : f < K2.more + 56 ? 1 : 0;
	};
	const rowsIn = smooth(prog(f, K2.mix, 20));
	const OFF = [[C.pink, C.violet, C.bg], [C.red, C.blue, C.green]];
	return (
		<Overlay>
			<TaskLine text="Where does the colour come from?" at={4} size={52} />
			<CabBeaker x={B.x} y={B.y} h={B.h} states={[{at: -100, s: 'p'}]} />
			<DimG at={K2.mix} to={0.4}>
				<Note x={RX} y={300} text="anthocyanins:" size={44} color={TEAL} at={K2.antho} />
				<Note x={RX} y={350} text="the purple pigments in red cabbage;" size={30} color={INK} hand={false} at={K2.antho + 10} />
				<Note x={RX} y={392} text="they dissolve in water" size={30} color={INK} hand={false} at={K2.dissolve} />
			</DimG>
			<Fade at={K2.each - 6}><line x1={sx + 40} y1={sy} x2={L.cx - L.r} y2={L.cy - 40} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 7" /></Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.each - 6}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={L.r * 2} height={L.r * 2} fill={pale(C.stock, 0.82)} />
				<CTok x={L.cx} y={L.cy - 10} color={C.purple} nH={1} s={1.5} o={single * prog(f, K2.each, 10)} />
				<Sx x={L.cx} y={L.cy + 70} text="HIn" size={34} color={INK} anchor="middle" weight={800} at={K2.each + 6} opacity={single} />
				{row > 0.01 ? (
					<g opacity={row}>
						{rowsIn > 0.01 ? OFF.map((cs, k) => (
							<g key={k} opacity={0.5 * rowsIn} transform={`translate(${(k === 0 ? 40 : -40) * (1 - rowsIn) + (k === 0 ? 22 : -22)},${122 + k * 78})`}>
								{cs.map((c, i) => <CTok key={i} x={X[i]} y={Y} color={c} nH={2 - i} s={0.85} />)}
							</g>
						)) : null}
						{[C.red, C.purple, C.green].map((c, i) => <CTok key={i} x={X[i]} y={Y} color={c} nH={nH(i)} />)}
						<HopOff x={X[1] + 30} y={Y - 20} at={K2.more + 30} />
						<HopOff x={X[2] + 30} y={Y - 30} at={K2.more + 56} />
						{[0, 1].map(i => (
							<g key={i} opacity={prog(f, K2.more + 20 + i * 26, 8)}>
								<path d={`M${X[i] + 34},${Y + 40} L${X[i + 1] - 34},${Y + 40}`} stroke={INK_SOFT} strokeWidth={3} />
								<path d={`M${X[i + 1] - 44},${Y + 32} L${X[i + 1] - 34},${Y + 40} L${X[i + 1] - 44},${Y + 48}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
								<Sx x={(X[i] + X[i + 1]) / 2} y={Y + 72} text="lose H^{+}" size={22} color={'#1d6f66'} anchor="middle" weight={700} at={-1000} />
							</g>
						))}
					</g>
				) : null}
			</LensFrame>
			<DimG at={K2.but} to={0.4}><Note x={RX} y={480} text="indicator video: a weak acid, two coloured forms" size={26} color={INK_SOFT} at={K2.weak} /></DimG>
			<DimG at={K2.mix + 30} to={0.4}><Note x={RX} y={540} text="several forms, several colours" size={34} color={TEAL} at={K2.more + 30} /></DimG>
			<Note x={RX} y={610} text="a mixture: colours blend" size={36} color={TEAL} at={K2.several} />
			<Fade at={K2.blend}>
				<defs><linearGradient id="p01blend" x1={0} x2={1} y1={0} y2={0}>{CHART.map((s, i) => <stop key={i} offset={i / 6} stopColor={s.c} />)}</linearGradient></defs>
				<rect x={L.cx - 260} y={850} width={520 * smooth(prog(f, K2.blend, 30))} height={40} rx={12} fill="url(#p01blend)" stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
				<Sx x={L.cx} y={930} text="gradual, not just two colours" size={28} color={INK_SOFT} anchor="middle" hand at={K2.two} />
			</Fade>
			{void K2.purple}{void K2.weak}
		</Overlay>
	);
};

// ---------- 3. Preparing the extract ----------
const S3 = 'prepare';
const K3 = cues(sc(S3), {teacher: 'your teacher', grams: 'grams', hot: 'hot water', ten: 'ten minutes', heat: 'Heat damages', membranes: 'membranes', leaks: 'leaks out', filter: 'filter', solids: 'solids', cool: 'cool', record: 'Record', purple: 'purple'});
const MLine: React.FC<{y: number; text: string; at: number; dim?: number}> = ({y, text, at, dim}) => (
	<DimG at={dim ?? 99999} to={0.45}><Note x={RX + 28} y={y} text={text} size={32} color={INK} hand={false} at={at} /></DimG>
);
export const ScenePrepare: React.FC = () => {
	const ST = {x: 250, y: 330, h: 470};
	const sk = ST.h / STEEP.box[3];
	const shred: [number, number] = [ST.x + (1000 - STEEP.box[0]) * sk, ST.y + (1250 - STEEP.box[1]) * sk];
	const FL = {x: 300, y: 300, h: 520};
	const L = {cx: 900, cy: 560, r: 185};
	return (
		<Overlay>
			<TaskLine text="Preparing the extract" at={4} size={52} />
			<Fade at={6}>
				<rect x={RX} y={210} width={660} height={330} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
				<Sx x={RX + 28} y={258} text="Method" size={38} color={TEAL} hand at={6} />
			</Fade>
			<MLine y={318} text="1  Chop (teacher), about 20 g." at={K3.teacher} dim={K3.hot} />
			<MLine y={378} text="2  Hot water, 100 mL, 10 min." at={K3.hot} dim={K3.filter} />
			<MLine y={438} text="3  Filter off solids." at={K3.filter} dim={K3.cool} />
			<MLine y={498} text="4  Cool; record starting colour." at={K3.cool} />
			<Fade at={4} out={K3.ten}>
				<PicH p={CHOPPED} x={110} y={400} h={250} />
				<Note x={330} y={700} text="about 20 g" size={34} color={INK} anchor="middle" at={K3.grams} />
			</Fade>
			<Fade at={K3.hot} out={K3.ten}>
				<PicH p={HOTPLATE} x={640} y={330} h={330} />
				<Note x={640 + picW(HOTPLATE, 330) / 2} y={710} text="100 mL hot water" size={32} color={'#b5502b'} anchor="middle" at={K3.hot + 8} />
			</Fade>
			<Fade at={K3.ten} out={K3.filter}>
				<PicH p={STEEP} x={ST.x} y={ST.y} h={ST.h} />
				<ClockChip x={ST.x + 40} y={870} text="10 min" at={K3.ten} run={K3.ten + 6} len={100} />
			</Fade>
			<Fade at={K3.heat} out={K3.filter}>
				<line x1={shred[0]} y1={shred[1]} x2={L.cx - L.r * 0.95} y2={L.cy + 40} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 7" />
				<circle cx={shred[0]} cy={shred[1]} r={16} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			</Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K3.heat} out={K3.filter}>
				<CellLens cx={L.cx} cy={L.cy} r={L.r} brk={K3.leaks} />
			</LensFrame>
			<Note x={L.cx} y={L.cy - L.r - 22} text="a cabbage cell" size={28} color={INK_SOFT} anchor="middle" at={K3.heat + 10} out={K3.filter} />
			<Note x={L.cx} y={L.cy + L.r + 50} text="heat damages the membranes: pigment leaks out" size={30} color={C.purple} anchor="middle" at={K3.leaks} out={K3.filter} />
			<Fade at={K3.filter} out={K3.purple - 6}><PicH p={FILTER} x={FL.x} y={FL.y} h={FL.h} /></Fade>
			<DimG at={K3.cool} to={0.4}><Note x={620} y={760} text="filtrate: the liquid that passes through" size={30} color={INK} at={K3.filter + 14} out={K3.purple - 6} /></DimG>
			<ThermoChip x={700} y={440} at={K3.cool - 4} run={K3.cool + 8} out={K3.purple + 30} />
			<Note x={640} y={570} text="safer to handle;" size={26} color={INK_SOFT} at={K3.cool + 20} out={K3.purple + 30} />
			<Note x={640} y={604} text="colours compared at room temperature" size={26} color={INK_SOFT} at={K3.cool + 26} out={K3.purple + 30} />
			<Fade at={K3.purple - 6}><CabBeaker x={280} y={330} h={450} states={[{at: -100, s: 'p'}]} /></Fade>
			<Fade at={K3.purple}>
				<rect x={640} y={820} width={560} height={84} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<rect x={662} y={838} width={70} height={48} rx={10} fill={C.stock} />
				<Sx x={752} y={874} text="Starting colour: purple" size={34} color={INK} weight={800} at={K3.purple} />
			</Fade>
			{void K3.membranes}{void K3.solids}{void K3.record}
		</Overlay>
	);
};

// ---------- 4. Giving each colour a meaning ----------
const S4 = 'calibrate';
const K4 = cues(sc(S4), {next: 'Next', put: 'Put about', known: 'solutions of known', two: ['two', 1], buffers: 'Buffers', meter: 'pH meter', three: 'three drops', depth: 'Colour depth', comparing: 'comparing', same: 'same'});
export const PL4 = {x: 120, y: 420, h: 500};
const STEP4 = 26;
const wellTimes = (t0: number) => CHART.map((_, i) => t0 + 22 + i * STEP4);
export const SceneCalibrate: React.FC = () => {
	const f = useCurrentFrame();
	const P = PL4;
	const W = CHART.map((_, i) => wellPt(P.x, P.y, P.h, 0, i));
	const DB = {x: 960, y: 640, h: 240};
	const rest = dRest(DB.x, DB.y, DB.h);
	const T0 = K4.three;
	const wt = wellTimes(T0);
	const tip = (f: number, r: [number, number]): [number, number] => {
		const above = (i: number): [number, number] => [W[i][0], W[i][1] - 100];
		if (f < T0) return r;
		if (f < wt[0]) { const q = smooth((f - T0) / 22); return [lerp(r[0], above(0)[0], q), lerp(r[1], above(0)[1], q) - Math.sin(q * Math.PI) * 140]; }
		const last = wt[6] + 20;
		if (f >= last) { const q = smooth(Math.min(1, (f - last) / 20)); return [lerp(above(6)[0], r[0], q), lerp(above(6)[1], r[1], q) - Math.sin(q * Math.PI) * 100]; }
		const i = Math.min(6, Math.floor((f - wt[0]) / STEP4));
		const u = (f - wt[i]) / STEP4;
		if (i < 6 && u > 0.7) { const q = smooth((u - 0.7) / 0.3); return [lerp(above(i)[0], above(i + 1)[0], q), above(i)[1] - Math.sin(q * Math.PI) * 30]; }
		return above(i);
	};
	const drops: DDrop[] = [];
	wt.forEach((t, i) => [0, 1, 2].forEach(j => drops.push({x: W[i][0], y0: W[i][1] - 94, y1: W[i][1] - 4, at: t + j * 6, color: C.stock})));
	const fills: WFill[] = CHART.map((s, i) => ({r: 0, c: i, color: s.c, at: K4.known + i * 4, bloom: wt[i] + 26}));
	const count = (f: number) => {
		if (f < wt[0]) return '3 drops';
		const i = Math.min(6, Math.floor((f - wt[0]) / STEP4));
		const n = [0, 1, 2].filter(j => f >= wt[i] + j * 6 + 14).length;
		return `${n} drop${n === 1 ? '' : 's'}`;
	};
	const R = wellR(P.h);
	return (
		<Overlay>
			<TaskLine text="Giving each colour a meaning" at={4} size={52} />
			<Wells x={P.x} y={P.y} h={P.h} fills={fills} at={4} />
			{CHART.map((s, i) => <Sx key={i} x={W[i][0]} y={P.y - 18} text={i === 0 ? 'pH 2' : String(s.p)} size={30} color={INK} anchor="middle" weight={800} at={K4.known + 4 + i * 5} />)}
			<DimG at={K4.three} to={0.4}>
				<Note x={RX} y={300} text="reference solutions: known pH" size={34} color={TEAL} at={K4.known} />
				<Note x={RX} y={344} text="(buffers, checked with a meter)" size={28} color={INK_SOFT} at={K4.buffers} />
				<FullMeter x={RX + 40} y={400} h={260} at={K4.buffers} out={K4.comparing} read={() => '7.00'} />
			</DimG>
			<DBottle x={DB.x} y={DB.y} h={DB.h} lines={['extract']} tab={C.purple} at={K4.three - 30} tip={tip} drops={drops} />
			{f >= wt[0] - 4 && f <= wt[6] + 40 ? <DropCount x={tip(f, rest)[0] + 30} y={tip(f, rest)[1] + 30} text={count} at={wt[0] - 4} out={wt[6] + 30} color={C.purple} size={28} /> : null}
			<Fade at={K4.comparing}>
				<Well cx={RX + 110} cy={800} r={R * 0.95} color={pale(C.purple, 0.7)} at={K4.comparing} label="1 drop" />
				<Well cx={RX + 300} cy={800} r={R * 0.95} color={'#4b1450'} at={K4.comparing + 8} label="8 drops" />
				<Sx x={RX + 205} y={720} text="both pH 7" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K4.comparing + 10} />
			</Fade>
			<Note x={RX} y={930} text="same pH, different depth:" size={32} color={TEAL} at={K4.same - 10} />
			<Note x={RX} y={972} text="keep the drops equal" size={32} color={TEAL} at={K4.same} />
			{void K4.next}{void K4.put}{void K4.two}{void K4.meter}{void K4.depth}
		</Overlay>
	);
};

// ---------- 5. Reading the colour chart ----------
const S5 = 'colour-chart';
const K5 = cues(sc(S5), {red: ['red', 1], pink: 'pink', violet: 'violet', purple: 'purple', blue: ['blue', 1], bg: 'blue-green', green: ['green', 1], batch: 'Your batch', several: 'several', spread: 'spread', precise: 'precise', spacing: 'spacing', apart: 'apart'});
export const CG5: ChartG = {x: 780, y: 280, sw: 120, sh: 90, gap: 26};
export const SceneChart: React.FC = () => {
	const R = {x: 780, w: 996, lo: 0, hi: 14};
	const ats = [K5.red, K5.pink, K5.violet, K5.purple, K5.blue, K5.bg, K5.green];
	const g = CG5;
	const fills: WFill[] = CHART.map((s, i) => ({r: 0, c: i, color: s.c}));
	return (
		<Overlay>
			<TaskLine text="Reading the colour chart" at={4} size={52} />
			<Wells x={60} y={420} h={300} fills={fills} at={2} o={0.85} />
			<Sx x={60 + 216} y={790} text="a typical result" size={30} color={INK_SOFT} anchor="middle" hand at={6} />
			<Chart g={g} at={ats} size={26} names />
			<PHRuler R={R} y={640} at={K5.batch - 20} size={24} />
			{CHART.map((s, i) => (
				<Fade key={i} at={K5.batch - 10 + i * 3}>
					<line x1={chartX(g, i) + g.sw / 2} y1={g.y + g.sh + 76} x2={rx(R, s.p)} y2={624} stroke={s.c} strokeWidth={3} strokeDasharray="5 6" />
					<circle cx={rx(R, s.p)} cy={640} r={10} fill={s.c} stroke="#fffdf8" strokeWidth={2} />
				</Fade>
			))}
			<DimG at={K5.spacing} to={0.35}>
				{[[0, 1], [1, 2], [3, 4], [4, 5], [5, 6]].map(([i, j], k) => <ChartBr key={k} g={g} i={i} j={j} at={K5.several + k * 5} color={TEAL} />)}
				<Note x={780} y={790} text="several gradual changes, not one" size={36} color={TEAL} at={K5.several + 20} />
			</DimG>
			<ChartBr g={g} i={4} j={5} at={K5.spacing} color={'#b07a12'} text="2 units apart" dy={40} />
			<Note x={780} y={860} text="a colour between them: pH between 8 and 10" size={32} color={INK_SOFT} at={K5.apart} />
			<Note x={780} y={1000} text="results vary with the cabbage and the extract" size={26} color={INK_SOFT} at={K5.batch} />
			{void K5.spread}{void K5.precise}
		</Overlay>
	);
};

// ---------- 6. The water control ----------
const S6 = 'water-control';
const K6 = cues(sc(S6), {test: 'Now test', hcl: 'hydrochloric acid', water: 'distilled water', naoh: 'sodium hydroxide', why: 'Why the water', dilutes: 'dilutes', paler: ['paler', 1], shows: 'shows that', turns: 'turns red', causing: 'causing', not: 'not dilution'});
export const WC = [1, 3, 5];
export const SceneWater: React.FC = () => {
	const P = {x: 120, y: 360, h: 480};
	const W = WC.map(c => wellPt(P.x, P.y, P.h, 0, c));
	const R = wellR(P.h);
	const fills: WFill[] = [
		{r: 0, c: 1, color: C.red, at: K6.test, bloom: K6.hcl},
		{r: 0, c: 3, color: C.purple, pale: 0.35, at: K6.test, bloom: K6.water},
		{r: 0, c: 5, color: C.green, at: K6.test, bloom: K6.naoh},
	];
	const labs = [{t: 'A  HCl', c: ACID_T}, {t: 'B  water', c: WATER_T}, {t: 'C  NaOH', c: BASE_T}];
	const lat = [K6.hcl, K6.water, K6.naoh];
	return (
		<Overlay>
			<TaskLine text="Why a water well?" at={4} size={52} />
			<Wells x={P.x} y={P.y} h={P.h} fills={fills} at={2} />
			{labs.map((l, i) => (
				<Fade key={i} at={lat[i] - 6}>
					<rect x={W[i][0] - 70} y={P.y - 50} width={12} height={30} rx={3} fill={l.c} />
					<Sx x={W[i][0] - 50} y={P.y - 24} text={l.t} size={30} color={INK} weight={800} at={-1000} />
				</Fade>
			))}
			<DimG at={K6.why} to={0.4}><Note x={W[2][0]} y={P.y + P.h + 48} text="read it straight away" size={28} color={INK_SOFT} anchor="middle" at={K6.naoh + 10} /></DimG>
			<Fade at={K6.dilutes}>
				<rect x={RX} y={250} width={150} height={90} rx={14} fill={C.stock} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
				<Sx x={RX + 75} y={380} text="extract" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
				<rect x={RX + 200} y={250} width={150} height={90} rx={14} fill={pale(C.purple, 0.35)} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
				<Sx x={RX + 275} y={380} text="well B" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
			</Fade>
			<DimG at={K6.turns} to={0.4}><Note x={RX} y={460} text="water: paler, still purple" size={36} color={C.purple} at={K6.paler} /></DimG>
			<RingAt cx={W[0][0]} cy={W[0][1]} rx={R + 18} ry={R + 18} at={K6.not} />
			<RingAt cx={W[2][0]} cy={W[2][1]} rx={R + 18} ry={R + 18} at={K6.not + 6} />
			<Note x={RX} y={580} text="control: same dilution," size={36} color={GREEN} at={K6.not} />
			<Note x={RX} y={626} text="no acid or base" size={36} color={GREEN} at={K6.not + 8} />
			<Note x={RX} y={740} text="the extract shows the pH of what it's in" size={27} color={INK_SOFT} at={K6.not + 40} />
			{void K6.shows}{void K6.causing}{void GREYX}{void AChip}
		</Overlay>
	);
};
