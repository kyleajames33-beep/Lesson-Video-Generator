import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {EqStrip, Overlay} from '../chem-m5-c05/parts';
import {LitArrows} from '../chem-m5-c08/parts';
import {GivensCard} from '../chem-m5-c06/parts';
import {TaskLine} from '../chem-m5-g03c/board';
import {Arrow, Bottle, CalGraph, Cuvette, DataChip, DotLens, Fade, ReadGuide, Readout, Ring, Sx, TEAL, Tick, cuvW, gx, gy, lensSlots} from './parts';
import type {Dot, GPoint, GraphGeom} from './parts';
import {CROSS, FE, FE_INK, GREEN, Heading, RED, RED_INK, SCN, SCN_INK, STD_A, STD_C, sc} from './common';
import {BOTTLE_FE, BOTTLE_SCN} from './assets';
import {IRON_EQ} from './s1';

const E44 = {x: 96, y: 240, s: 44};
const STD_LABELS = ['0.40', '0.80', '1.20', '1.60', '2.00'];

// ---------- 4. Standards: solutions where you know the answer ----------
const S = 'standards';
const K4 = cues(sc(S), {need: 'we need solutions', std: 'These are the standards', meas: 'a measured amount', excess: 'big excess', pushes: 'pushes the equilibrium', far: 'far to the right', dist: 'disturbance videos', almost: 'almost every', ends: 'ends up in', means: 'That means', equals: 'about equal to', made: 'how it was made', five: 'five known concentrations', pale: 'pale to deep'});
const LZ = {cx: 860, cy: 520, r: 190};
const SCN_SLOTS = lensSlots(LZ.cx, LZ.cy, LZ.r * 0.7, 6, 3);
const FE_SLOTS = lensSlots(LZ.cx, LZ.cy, LZ.r, 34, 9);
const BOT_MOUTH: [number, number] = [470, 350];
export const SceneStandards: React.FC = () => {
	const f = useCurrentFrame();
	const dots: Dot[] = [];
	// partner for each of the first five SCN- ions: the nearest Fe3+ slot
	const partner = SCN_SLOTS.map(([sx, sy]) => FE_SLOTS.reduce((b, p, i) => (Math.hypot(p[0] - sx, p[1] - sy) < Math.hypot(FE_SLOTS[b][0] - sx, FE_SLOTS[b][1] - sy) ? i : b), 0));
	FE_SLOTS.forEach(([x, y], i) => {
		const t0 = K4.excess + i * 3;
		const e = prog(f, t0, 22);
		if (f < t0) return;
		const pi = partner.indexOf(i);
		const pair = pi >= 0 && pi < 5 ? prog(f, K4.almost + pi * 12, 14) : 0;
		const tx = pi >= 0 && pi < 5 ? SCN_SLOTS[pi][0] + 14 : x, ty = pi >= 0 && pi < 5 ? SCN_SLOTS[pi][1] : y;
		const bx = BOT_MOUTH[0] + (x - BOT_MOUTH[0]) * e, by = BOT_MOUTH[1] + (y - BOT_MOUTH[1]) * e;
		const join = pi >= 0 && pi < 5 ? prog(f, K4.almost + pi * 12 + 14, 8) : 0;
		dots.push({x: bx + (tx - x) * pair, y: by + (ty - y) * pair, c: FE, r: 10, o: 1 - join});
	});
	SCN_SLOTS.forEach(([x, y], i) => {
		const join = i < 5 ? prog(f, K4.almost + i * 12 + 14, 8) : 0;
		dots.push({x, y, c: SCN, r: 10, o: 1 - join});
		if (join > 0) dots.push({x: x + 7, y, c: RED, r: 10 + 4 * join, o: join});
	});
	const cuvAt = (i: number) => K4.five + 4 + i * 8;
	return (
		<>
			<Heading text="Standards: solutions where you know the answer" at={4} size={56} />
			<Overlay>
				<EqStrip items={IRON_EQ} x={E44.x} y={E44.y} size={E44.s} at={K4.std} />
				<LitArrows items={IRON_EQ} x={E44.x} y={E44.y} size={E44.s} fwd={K4.far} />
				<Sx x={E44.x + 860} y={E44.y} text="extra Fe^{3+} pushes it right" size={38} color="#1f6fb2" hand at={K4.far + 6} />
				{/* the two reagents */}
				<Fade at={K4.meas}><Bottle p={BOTTLE_SCN} x={110} y={330} h={300} label="SCN^{-}" labelColor={SCN_INK} /></Fade>
				<Sx x={110} y={680} text="SCN^{-}: 0.00200 mol/L" size={30} color={SCN_INK} weight={700} at={K4.meas + 6} />
				<Sx x={110} y={716} text="a measured amount" size={30} color={INK_SOFT} hand at={K4.meas + 10} />
				<Fade at={K4.excess - 10}><Bottle p={BOTTLE_FE} x={360} y={330} h={300} tint={FE} label="Fe^{3+}" labelColor={FE_INK} /></Fade>
				<Sx x={360} y={770} text="Fe^{3+}: 0.200 mol/L" size={30} color={FE_INK} weight={700} at={K4.excess} />
				<Sx x={360} y={806} text="a big excess" size={34} color={AMBER_INK} hand at={K4.excess + 6} />
				{/* the dot view: extra iron, almost every SCN- becomes the red ion */}
				<DotLens cx={LZ.cx} cy={LZ.cy} r={LZ.r} dots={dots} at={K4.meas} />
				<Sx x={LZ.cx} y={LZ.cy + LZ.r + 44} text="in one standard" size={32} color={INK_SOFT} anchor="middle" hand at={K4.meas} />
				<Ring cx={SCN_SLOTS[5][0]} cy={SCN_SLOTS[5][1]} rx={24} ry={24} at={K4.ends + 20} color={AMBER} seed={3} />
				<Sx x={LZ.cx} y={LZ.cy + LZ.r + 88} anchor="middle" text="almost all, not quite all" size={32} color={AMBER_INK} hand at={K4.ends + 24} />
				{/* the known concentration */}
				<Sx x={1110} y={430} text="[FeSCN^{2+}] ≈ [SCN^{-}]" size={50} color={INK} at={K4.equals} />
				<Sx x={1110} y={480} text="in the standard" size={36} color={INK_SOFT} hand at={K4.equals + 10} />
				<Tick x={1700} y={410} at={K4.equals + 24} s={40} />
				<Sx x={1110} y={530} text="known from how it was made" size={36} color={TEAL} hand at={K4.made} />
				{/* five standards, pale to deep */}
				{STD_LABELS.map((t, i) => {
					const x = 1110 + i * 140, sl = (1 - prog(f, cuvAt(i), 20)) * 300;
					return (
						<g key={i} transform={`translate(${sl},0)`} opacity={prog(f, cuvAt(i), 10)}>
							<Cuvette kind={i} x={x} y={600} h={230} />
							<Sx x={x + cuvW(230) / 2} y={880} text={t} size={34} color={RED_INK} anchor="middle" weight={700} at={cuvAt(i) + 10} />
						</g>
					);
				})}
				<Sx x={1110 + 280 + cuvW(230) / 2} y={926} text="[FeSCN^{2+}]  (× 10^{-4} mol/L)" size={30} color={INK_SOFT} anchor="middle" hand at={K4.five + 30} />
				<Arrow x1={1110} y1={968} x2={1110 + 560 + cuvW(230)} y2={968} at={K4.pale} color={RED} width={4} />
				<Sx x={1110} y={1010} text="pale" size={30} color={INK_SOFT} hand at={K4.pale} />
				<Sx x={1110 + 560 + cuvW(230)} y={1010} text="deep" size={30} color={RED_INK} anchor="end" hand at={K4.pale + 8} />
				<Sx x={96} y={1010} text="standards are not equilibrium mixtures: never calculate K from one" size={30} color={INK_SOFT} hand at={K4.pale + 20} />
			</Overlay>
		</>
	);
};

// ---------- 5. The calibration graph ----------
const CB = 'calibration';
const K5 = cues(sc(CB), {measure: 'Now measure', up: 'absorbance up the side', along: 'concentration along the bottom', blank: 'The blank gives', straight: 'straight line', fit: 'line of best fit', dot: 'not dot to dot', zeroed: 'Because we zeroed', origin: 'the origin', why: 'Why not just', slope: 'The slope you measure', inst: 'this instrument', filter: 'its filter', cuvs: 'these cuvettes', book: 'book value', own: 'own standards', cal: 'the calibration', range: 'inside the range'});
export const G5: GraphGeom = {ox: 780, oy: 860, w: 1000, h: 560};
const ROW = {x: 110, y: 270, h: 180, gap: 80};
export const STD_POINTS = (at: number): GPoint[] => STD_C.map((c, i) => ({c, a: STD_A[i], at, label: STD_A[i].toFixed(3)}));
export const SceneCalibration: React.FC = () => {
	const f = useCurrentFrame();
	const flyAt = (i: number) => K5.up + 30 + i * 16;
	const pts: GPoint[] = [
		{c: 0, a: 0, at: K5.blank + 10, from: [ROW.x + cuvW(ROW.h) / 2, ROW.y + ROW.h * 0.6]},
		...STD_C.map((c, i) => ({c, a: STD_A[i], at: flyAt(i), from: [ROW.x + (i + 1) * ROW.gap + cuvW(ROW.h) / 2, ROW.y + ROW.h * 0.6] as [number, number], label: STD_A[i].toFixed(3)})),
	];
	const zig = pts.slice().sort((a, b) => a.c - b.c).map((p, i) => `${i ? 'L' : 'M'}${gx(G5, p.c)},${gy(G5, p.a) + (i % 2 ? 26 : -26)}`).join(' ');
	return (
		<>
			<Heading text="The calibration graph" at={4} size={62} />
			<Overlay>
				{/* blank and the five standards, each leaving its reading on the graph */}
				{[-1, 0, 1, 2, 3, 4].map(i => {
					const at = i < 0 ? K5.blank + 10 : flyAt(i);
					return <Cuvette key={i} kind={i < 0 ? 'blank' : i} x={ROW.x + (i + 1) * ROW.gap} y={ROW.y} h={ROW.h} o={prog(f, 4 + (i + 1) * 4, 10) * (1 - 0.75 * prog(f, at, 14))} />;
				})}
				<Sx x={ROW.x} y={ROW.y + ROW.h + 46} text="blank, then the five standards" size={32} color={INK_SOFT} hand at={8} />
				<CalGraph g={G5} at={K5.measure} yLabelAt={K5.up} xLabelAt={K5.along} points={pts} lineAt={K5.straight + 6} extendAt={K5.range} />
				{/* best fit, not dot to dot */}
				<Fade at={K5.dot} out={K5.zeroed + 10}>
					<path d={zig} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					<DrawPath d={`M${gx(G5, 0.9)},${gy(G5, 0.62)} L${gx(G5, 1.3)},${gy(G5, 0.42)}`} at={K5.dot + 8} dur={8} color={CROSS} width={7} />
					<DrawPath d={`M${gx(G5, 1.3)},${gy(G5, 0.62)} L${gx(G5, 0.9)},${gy(G5, 0.42)}`} at={K5.dot + 14} dur={8} color={CROSS} width={7} />
					<Sx x={gx(G5, 1.1)} y={gy(G5, 0.7)} text="not dot to dot" size={36} color={CROSS} anchor="middle" hand at={K5.dot + 4} />
				</Fade>
				<Sx x={gx(G5, 0.3)} y={gy(G5, 0.92)} text="line of best fit" size={40} color={TEAL} hand at={K5.fit} />
				{/* close to the origin */}
				<Ring cx={G5.ox} cy={G5.oy} rx={36} ry={36} at={K5.origin} color={AMBER} seed={6} />
				<Sx x={96} y={560} text="passes close to (0, 0):" size={36} color={AMBER_INK} hand at={K5.origin + 4} />
				<Sx x={96} y={604} text="intercept 0.001" size={36} color={AMBER_INK} hand at={K5.origin + 10} />
				<Arrow x1={380} y1={600} x2={G5.ox - 40} y2={G5.oy - 20} at={K5.origin + 8} color={AMBER_INK} width={4} />
				{/* why not the formula */}
				<Sx x={96} y={690} text="the slope depends on:" size={36} color={INK} hand at={K5.slope} />
				<Sx x={120} y={736} text="• this instrument" size={34} color={INK} hand at={K5.inst} />
				<Sx x={120} y={778} text="• its filter" size={34} color={INK} hand at={K5.filter} />
				<Sx x={120} y={820} text="• these cuvettes" size={34} color={INK} hand at={K5.cuvs} />
				<Sx x={96} y={872} text="a book value of ε won't quite match" size={34} color={CROSS} hand at={K5.book} />
				<Sx x={gx(G5, 0.14)} y={gy(G5, 0.78)} text="calibration" size={66} color={TEAL} hand at={K5.cal} />
				<Sx x={gx(G5, 0.14)} y={gy(G5, 0.78) + 44} text="your own standards, same machine" size={32} color={TEAL} hand at={K5.cal + 10} />
				<Sx x={96} y={950} text="use the line only inside the standards" size={36} color={AMBER_INK} hand at={K5.range} />
				<Sx x={96} y={992} text="(blank to 2.00 × 10^{-4} mol/L)" size={32} color={AMBER_INK} hand at={K5.range + 10} />
				<DataChip x={1440} y={990} at={K5.measure + 10} />
			</Overlay>
		</>
	);
};

// ---------- 6. Reading the equilibrium mixture ----------
const R = 'read-mixture';
const K6 = cues(sc(R), {real: 'Now a real equilibrium', mix: 'Mix 5.00', fe: ['iron three plus', 1], with: 'with 5.00', thio: 'litre thiocyanate', neither: 'neither is in excess', all: 'all three ions', nobody: 'nobody knows', measure: 'That is what we measure', abs: 'Its absorbance is', v705: ['0.705', 1], across: 'Go across', down: 'straight down', value: '1.50 times ten', eqn: "line's equation", sub: 'subtract the intercept', div: 'divide both sides', same: 'same value'});
export const G6: GraphGeom = {ox: 920, oy: 850, w: 880, h: 520};
export const MIX_CARD = (ats: number[], extra?: {at: number}) => [
	{text: '5.00 mL of 0.00200 mol/L Fe^{3+}', at: ats[0], size: 34},
	{text: '5.00 mL of 0.00200 mol/L SCN^{-}', at: ats[1], size: 34},
	{text: 'total volume: 10.00 mL', at: ats[2], size: 34},
	{text: 'same temperature as the standards', at: ats[3], size: 32, color: INK_SOFT},
	...(extra ? [{text: 'measured: [FeSCN^{2+}] = 1.50 × 10^{-4} mol/L', at: extra.at, size: 32, color: GREEN}] : []),
];
export const SceneReadMixture: React.FC = () => {
	const lz = {cx: 220, cy: 790, r: 100};
	const ds = lensSlots(lz.cx, lz.cy, lz.r, 14, 4);
	const dots: Dot[] = ds.map(([x, y], i) => ({x, y, c: i % 3 === 0 ? RED : i % 3 === 1 ? FE : SCN, r: 10}));
	return (
		<>
			<Overlay>
				<TaskLine text="Find K for this mixture" at={K6.real} />
				<EqStrip items={IRON_EQ} x={E44.x} y={E44.y} size={E44.s} at={K6.real + 10} />
				<GivensCard x={96} y={280} w={720} h={378} at={K6.mix} lh={50} lines={MIX_CARD([K6.mix + 6, K6.with + 6, K6.thio + 20, K6.neither - 20], {at: K6.value + 20})} />
				{/* neither in excess: a real equilibrium mixture with all three present */}
				<DotLens cx={lz.cx} cy={lz.cy} r={lz.r} dots={dots} at={K6.neither} out={K6.eqn - 20} />
				<Sx x={lz.cx} y={lz.cy + lz.r + 40} text="all three present" size={32} color={INK_SOFT} anchor="middle" hand at={K6.all} out={K6.eqn - 20} />
				<Fade at={K6.measure} out={K6.eqn - 20}>
					<Cuvette kind="unknown" x={400} y={680} h={220} />
					<Sx x={400 + cuvW(220) / 2} y={940} text="the mixture" size={30} color={INK_SOFT} anchor="middle" hand at={K6.measure} />
				</Fade>
				<Readout x={500} y={740} w={260} text="A = 0.705" at={K6.v705} out={K6.eqn - 20} />
				<Sx x={500} y={720} text="unknown red ion" size={30} color={RED_INK} hand at={K6.nobody} out={K6.v705} />
				{/* across, then down */}
				<CalGraph g={G6} at={K6.real + 20} points={STD_POINTS(-100).map(p => ({...p, label: undefined}))} lineAt={-100} />
				<ReadGuide g={G6} a={0.705} at={K6.across} downAt={K6.down} value="1.50" valueAt={K6.value} />
				<Sx x={gx(G6, 0.12)} y={gy(G6, 0.92)} text="across, then down" size={40} color={AMBER_INK} hand at={K6.down + 10} />
				{/* or from the line's equation */}
				<Fade at={K6.eqn}>
					<rect x={96} y={690} width={716} height={330} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={122} y={740} text="from the line's equation" size={32} color={INK_SOFT} hand at={K6.eqn} />
					<Sx x={122} y={800} text="A = 4690c + 0.001" size={40} color={TEAL} weight={700} at={K6.eqn + 10} />
					<Sx x={122} y={870} text="0.705 − 0.001 = 4690c" size={40} weight={700} at={K6.sub} />
					<Sx x={570} y={870} text="subtract the intercept" size={28} color={INK_SOFT} hand at={K6.sub + 10} />
					<Sx x={122} y={940} text="c = 0.704 / 4690 = 1.50 × 10^{-4}" size={40} weight={700} at={K6.div} />
					<Sx x={122} y={990} text="divide both sides by the gradient" size={28} color={INK_SOFT} hand at={K6.div + 10} />
					<Tick x={770} y={900} at={K6.same} s={38} />
				</Fade>
				<DataChip x={1400} y={985} at={K6.real + 20} />
			</Overlay>
		</>
	);
};
void INK; void RED_INK;
