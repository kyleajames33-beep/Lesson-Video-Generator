// M6 P03 scenes 1 to 6: is the meter broken (5.82 for distilled water); the range of solutions (five labelled beakers,
// one concentration); how the meter works (probe in its holder, the glass-bulb close-up, voltage to pH, drift);
// calibration (buffer bottles, the probe on its arc through three buffers, the calibration line and its slope);
// the measuring routine (rinse, blot, carry-over, wait, fresh portions); the results table and mean chips.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {HOLDER, HOLD_N, TISSUE, WASH, WASH_N} from './assets';
import {
	AChip, AMBER, AMBER_INK, BASE_INK, Bottle, CalAxes, CalPt, CalSeg, CupOutline, DimG, Fade, FullMeter, GLINE, Ghost, GlassWall, INK, INK_SOFT, LabelBeaker, LensFrame, Meter, Note,
	Overlay, PROTON_INK, PicH, ROW, Ring, Row, Stream, StableDot, Sx, TEAL, TRead, TaskLine, TempChip, beakerW, bottleW, clamp01, flicker, fullMeterW, holdPt, holdW, lerp, meterBeaker,
	meterH, meterScreen, picW, rowCx, smooth, treadW, vis, ClingDrop,
} from './parts';
import type {GG, RowG} from './parts';

// ---------- 1. Hook: is the meter broken? ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {calibrated: 'just been calibrated', reads: 'five point eight two', seven: 'be seven', faulty: 'meter faulty', hold: 'Hold that', practical: 'In this practical', trust: 'before you trust'});
export const M1 = {x: 560, y: 260, h: 600};
export const SceneHook: React.FC = () => {
	const {x, y, h} = M1;
	const scr = meterScreen(x, y, h);
	const mb = meterBeaker(x, y, h);
	const tw = treadW(34);
	return (
		<>
			<Heading text="Faulty meter, or real?" at={K1.faulty} size={62} />
			<Overlay>
				<FullMeter x={x} y={y} h={h} at={-100} read={flicker(K1.calibrated, K1.reads, '5.82', 5.5, 6.3)} />
				<StableDot x={scr.right - 22} y={scr.top + 20} at={K1.reads + 4} />
				<Sx x={mb.cx} y={mb.bottom + 50} text="distilled water" size={34} color={INK} anchor="middle" weight={700} at={4} />
				<Note x={x + 60} y={y + h + 50} text="calibrated: yes" size={32} color={TEAL} at={K1.calibrated + 10} />
				<Ghost x={scr.cx - tw / 2} y={scr.top - 130} text={() => '7.00?'} at={K1.seven} />
				<Sx x={scr.cx + tw / 2 + 30} y={scr.top - 60} text="?" size={70} color={AMBER_INK} hand at={K1.seven + 8} />
				<Note x={x + fullMeterW(h) + 30} y={y + 120} text="pure water: 7?" size={38} color={AMBER_INK} at={K1.seven + 10} />
				<Note x={x + fullMeterW(h) + 30} y={y + 190} text="meter, method, or water?" size={36} color={INK_SOFT} at={K1.trust} />
				{void K1.hold}{void K1.practical}
			</Overlay>
		</>
	);
};

// ---------- the beaker row used in scenes 2 to 7 ----------
export const RG: RowG = {x0: 470, dx: 280, y: 470, h: 230};

// ---------- 2. The range of solutions ----------
const S2 = 'range';
const K2 = cues(sc(S2), {range: 'the range', hcl: 'hydrochloric acid', acetic: 'acetic acid', water: 'distilled water', ammonia: 'ammonia solution', naoh: 'sodium hydroxide', two: 'two acids', conc: 'zero point zero one zero', substance: 'the substance', pour: 'Pour about', labelled: 'labelled beaker'});
export const SceneRange: React.FC = () => {
	const f = useCurrentFrame();
	const sl = smooth(prog(f, 0, 26));
	const mh = lerp(M1.h, 300, sl), mx = lerp(M1.x, 70, sl), my = lerp(M1.y, 330, sl);
	const at = [K2.hcl, K2.acetic, K2.water, K2.ammonia, K2.naoh];
	const by = RG.y - 50;
	const x1 = rowCx(RG, 0) - 90, x5 = rowCx(RG, 4) + 90, wl = rowCx(RG, 2) - 110, wr = rowCx(RG, 2) + 110;
	const bo = vis(f, K2.conc, undefined, 12);
	return (
		<Overlay>
			<TaskLine text="The range of solutions" at={4} size={56} />
			<FullMeter x={mx} y={my} h={mh} at={-100} read={() => ''} />
			<Row g={RG} at={at.map(a => a - 10)} lab={at} dimAt={K2.conc + 40} tick={K2.labelled} />
			{bo > 0.01 ? (
				<g opacity={bo} fill="none" strokeLinecap="round">
					<path d={`M${x1},${by + 18} L${x1},${by} L${wl},${by}`} stroke={TEAL} strokeWidth={5} />
					<path d={`M${wr},${by} L${x5},${by} L${x5},${by + 18}`} stroke={TEAL} strokeWidth={5} />
					<path d={`M${wl},${by} L${wr},${by}`} stroke={GLINE} strokeWidth={3} strokeDasharray="8 8" />
				</g>
			) : null}
			<Sx x={(x1 + x5) / 2} y={by - 22} text="acids and bases: all 0.010 mol/L" size={38} color={TEAL} anchor="middle" hand weight={700} at={K2.conc + 6} />
			<Sx x={rowCx(RG, 2)} y={by + 40} text="water: no solute" size={24} color={INK_SOFT} anchor="middle" weight={600} at={K2.conc + 16} />
			<DimG at={K2.pour} to={0.45}><Note x={470} y={900} text="so any difference comes from the substance" size={38} color={INK} at={K2.substance} /></DimG>
			<Note x={470} y={970} text="about 20 mL each, clean, labelled beakers" size={36} color={INK} at={K2.pour + 10} />
			{void K2.range}{void K2.two}
		</Overlay>
	);
};

// ---------- 3. How the meter works ----------
const S3 = 'meter';
const K3 = cues(sc(S3), {how: 'How does', bulb: 'glass bulb', hyd: 'Hydronium ions', voltage: 'tiny voltage', turns: 'turns the voltage', drifts: 'drifts', ages: 'probe ages', temp: 'with temperature', shown: 'has to be shown'});
export const SceneMeter: React.FC = () => {
	const f = useCurrentFrame();
	const x = 260, y = 210, h = 740;
	const bulb = holdPt(x, y, h, HOLD_N.bulb), collar = holdPt(x, y, h, [1114, 760]), cab = holdPt(x, y, h, HOLD_N.cable);
	const L = {cx: 1180, cy: 500, r: 230};
	const wob = f > K3.drifts ? Math.sin((f - K3.drifts) / 6) * 10 * (1 - prog(f, K3.shown + 30, 20)) : 0;
	const vp = clamp01((f - K3.voltage) / 30);
	const ay = lerp(bulb[1] - 30, collar[1], smooth(vp));
	return (
		<Overlay>
			<TaskLine text="How does the meter know?" at={4} size={56} />
			<PicH p={HOLDER} x={x} y={y} h={h} />
			<Ring cx={bulb[0]} cy={bulb[1]} rx={42} ry={58} at={K3.bulb} color={AMBER} seed={3} />
			<line x1={bulb[0] + 40} y1={bulb[1] - 20} x2={L.cx - L.r * 0.95} y2={L.cy + 60} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" opacity={vis(f, K3.bulb, K3.shown + 20, 10)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K3.bulb} out={K3.shown + 20}>
				<GlassWall cx={L.cx} cy={L.cy} r={L.r} gather={K3.hyd + 20} />
			</LensFrame>
			<Sx x={L.cx - 150} y={L.cy + L.r * 0.62} text="sample" size={26} color={INK_SOFT} weight={700} at={K3.bulb + 10} out={K3.shown + 20} />
			<Sx x={L.cx + 60} y={L.cy - L.r * 0.7} text="glass" size={26} color={INK_SOFT} weight={700} at={K3.bulb + 10} out={K3.shown + 20} />
			<Note x={L.cx} y={L.cy + L.r + 50} text="hydronium ions at the glass" size={32} color={PROTON_INK} anchor="middle" at={K3.hyd + 10} out={K3.shown + 20} />
			{/* the voltage runs up the probe and cable to the meter */}
			{f > K3.voltage ? (
				<g opacity={vis(f, K3.voltage, undefined, 10)} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" transform={`translate(${wob},0)`}>
					<path d={`M${bulb[0] + 34},${bulb[1] - 30} L${bulb[0] + 34},${ay}`} />
					<path d={`M${bulb[0] + 22},${ay + 14} L${bulb[0] + 34},${ay} L${bulb[0] + 46},${ay + 14}`} />
				</g>
			) : null}
			<Note x={bulb[0] + 150} y={(bulb[1] + collar[1]) / 2} text="tiny voltage" size={34} color={TEAL} at={K3.voltage + 10} />
			<TRead x={70} y={cab[1] + 40} text={fr => (fr < K3.turns + 10 ? '' : '5.82')} at={K3.voltage} sample="10.00" />
			<AChip x={70} y={cab[1] + 130} text="voltage → pH" size={34} color={TEAL} hand={false} at={K3.turns} />
			<Note x={70} y={cab[1] + 240} text="link drifts: probe age, temperature" size={28} color={INK_SOFT} at={K3.drifts + 6} />
			<Note x={L.cx - 140} y={980} text="so show it the right answers" size={38} color={INK} at={K3.shown} />
			{void K3.how}{void K3.ages}{void K3.temp}{void holdW}
		</Overlay>
	);
};

// ---------- 4. Calibration with buffers ----------
const S4 = 'calibration';
const K4 = cues(sc(S4), {calibration: 'calibration', buffer: 'buffer solutions', start: 'Start with', seven: 'seven buffer', four: 'pH four', ten: 'pH ten', bases: 'measure bases', straight: 'straight line', one: 'only one point', guess: 'guess the', both: 'both sides', check: 'check the line', calibrate: 'Calibrate at', same: 'same temperature'});
export const GC: GG = {x: 1190, y: 300, w: 620, h: 420, x0: 0, x1: 14, y0: 0, y1: 1};
const BUFS = [{ph: 'pH 4.00', p: 4, c: '#e06a5a', tint: '#f6d8d2'}, {ph: 'pH 7.00', p: 7, c: '#e8c547', tint: '#f8efc9'}, {ph: 'pH 10.00', p: 10, c: '#5b8fd6', tint: '#d9e6f6'}];
export const SceneCal: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 200, bw = bottleW(BH), BKH = 150, bkw = beakerW(BKH);
	const bx = (i: number) => 470 + i * 220;
	const bkx = (i: number) => bx(i) + bw / 2 - bkw / 2;
	const BKY = 640;
	const cxB = (i: number) => bkx(i) + bkw / 2;
	const tipIn = BKY + BKH * 0.82, tipUp = BKY - 70;
	const [t7, t4, t10] = [K4.seven, K4.four, K4.ten];
	const rest = 430;
	const s7 = t7 + 34, s4 = t4 + 28, s10 = t10 + 40;
	const px = kf(f, [[t7 - 10, rest], [t7 + 12, cxB(1)], [t4 - 4, cxB(1)], [t4 + 4, cxB(0)], [t10 - 4, cxB(0)], [t10 + 8, cxB(2)], [K4.straight + 10, cxB(2)], [K4.straight + 40, rest]]);
	const py = kf(f, [[t7 + 6, tipUp], [t7 + 24, tipIn], [t4 - 14, tipIn], [t4 - 4, tipUp], [t4 + 4, tipUp], [t4 + 14, tipIn], [t10 - 14, tipIn], [t10 - 4, tipUp], [t10 + 8, tipUp], [t10 + 20, tipIn], [K4.straight + 10, tipIn], [K4.straight + 28, tipUp]]);
	const read = (fr: number) => {
		if (fr < t7 + 24) return '';
		if (fr < t4 + 14) return flicker(t7 + 24, s7, '7.00', 6.6, 7.4)(fr);
		if (fr < t10 + 20) return flicker(t4 + 14, s4, '4.00', 3.6, 4.6)(fr);
		return flicker(t10 + 20, s10, '10.00', 9.5, 10.5)(fr);
	};
	const onePt = vis(f, K4.one, K4.both - 20, 12);
	const both = prog(f, K4.both, 14);
	const MX = 60, MW = 320;
	return (
		<Overlay>
			<DimG at={t7 - 10} to={0.38}>
				<Note x={96} y={150} text="calibration: show the meter solutions of known pH" size={40} color={TEAL} at={K4.calibration} />
				<Note x={96} y={210} text="buffer: holds a known pH (later video)" size={34} color={INK_SOFT} at={K4.buffer} />
			</DimG>
			<Meter x={MX} y={600} w={MW} at={-100} probe={() => [px, py]} read={read} />
			{BUFS.map((b, i) => (
				<g key={i}>
					<Bottle x={bx(i)} y={300} h={BH} ph={b.ph} color={b.c} at={K4.buffer + i * 6} tick={[s4, s7, s10][i]} />
					<LabelBeaker x={bkx(i)} y={BKY} h={BKH} at={K4.start + i * 6} tint={b.tint} lines={[{t: b.ph, at: K4.start + i * 6}]} size={26} />
				</g>
			))}
			<CalAxes g={GC} at={K4.start} />
			<CalPt g={GC} p={7} at={s7} />
			<CalPt g={GC} p={4} at={s4} o={1 - onePt} />
			<CalPt g={GC} p={10} at={s10} o={1 - onePt} />
			<CalSeg g={GC} a={4} b={10} at={K4.straight} color="#2f5d9e" o={1 - onePt} />
			<CalSeg g={GC} a={2} b={4} at={K4.straight + 16} color="#2f5d9e" dash="10 8" o={1 - onePt} />
			<CalSeg g={GC} a={10} b={12} at={K4.straight + 16} color="#2f5d9e" dash="10 8" o={1 - onePt} />
			<CalSeg g={GC} a={2} b={12} at={K4.one + 6} color={GLINE} slope={0.55} o={onePt} width={4} />
			<CalSeg g={GC} a={2} b={12} at={K4.one + 12} color={GLINE} slope={1.5} o={onePt} width={4} />
			<Note x={GC.x + 20} y={GC.y + GC.h + 110} text="one point: slope unknown" size={34} color={INK_SOFT} at={K4.one + 10} out={K4.both - 20} />
			<CalSeg g={GC} a={2} b={7} at={K4.both} color={TEAL} width={7} o={both} />
			<CalSeg g={GC} a={7} b={12} at={K4.both + 8} color={BASE_INK} width={7} o={both} />
			<Sx x={GC.x + 30} y={GC.y + 40} text="acids" size={28} color={TEAL} weight={700} at={K4.both + 6} />
			<Sx x={GC.x + GC.w - 20} y={GC.y + GC.h - 50} text="bases" size={28} color={BASE_INK} anchor="end" weight={700} at={K4.both + 14} />
			<DimG at={K4.one} to={0.4}><Note x={GC.x + 20} y={GC.y + GC.h + 110} text="readings near 2 and 12 use the same line, extended" size={26} color={INK_SOFT} at={K4.straight + 30} hand={false} /></DimG>
			<TempChip x={1190} y={190} from={25.0} at={K4.same} />
			<Note x={1400} y={232} text="same temperature as the samples" size={30} color={INK} at={K4.same + 6} />
			{void K4.bases}{void K4.guess}{void K4.check}{void K4.calibrate}{void meterH}{void AMBER}
		</Overlay>
	);
};

// ---------- 5. The measuring routine ----------
const S5 = 'routine';
const K5 = cues(sc(S5), {every: 'for every sample', rinse: 'rinse the probe', blot: 'gently blot', any: 'Any solution', carried: 'carried into', lower: 'Lower the', swirl: 'swirl gently', wait: 'wait until', respond: 'to respond', three: 'Take three', fresh: 'fresh portion', contaminated: 'one contaminated'});
export const SceneRoutine: React.FC = () => {
	const f = useCurrentFrame();
	const x = 140, y = 200, h = 640;
	const bulb = holdPt(x, y, h, HOLD_N.bulb), tip = holdPt(x, y, h, HOLD_N.tip), cab = holdPt(x, y, h, HOLD_N.cable);
	const BH = 210, bw = beakerW(BH);
	const yLow = tip[1] + 24, yIn = tip[1] - 46 - BH * 0.416;
	const wasteX = kf(f, [[K5.rinse - 30, 1000], [K5.rinse - 6, bulb[0] - bw / 2], [K5.carried - 40, bulb[0] - bw / 2], [K5.carried - 16, bulb[0] - bw / 2 - 500]]);
	const wasteO = vis(f, K5.rinse - 30, K5.carried - 20, 10);
	const sampX = kf(f, [[K5.carried - 20, 1000], [K5.carried + 4, bulb[0] - bw / 2]]);
	const sampY = kf(f, [[K5.lower, yLow], [K5.lower + 22, yIn]]);
	const surf = sampY + BH * 0.416;
	// wash bottle, mirrored so its nozzle points left at the bulb
	const WH = 250, k = WH / WASH.box[3], ww = picW(WASH, WH);
	const nozzle: [number, number] = [bulb[0] + 80, bulb[1] - 150];
	const wx = nozzle[0] - (ww - (WASH_N.nozzle[0] - WASH.box[0]) * k), wy = nozzle[1] - (WASH_N.nozzle[1] - WASH.box[1]) * k;
	const washO = vis(f, K5.rinse - 16, K5.blot - 6, 10);
	const tq = smooth(clamp01((f - K5.blot + 6) / 16)) * (1 - smooth(clamp01((f - K5.blot - 34) / 16)));
	const tisO = vis(f, K5.blot - 10, K5.blot + 54, 8);
	const TW = 120, tisH = (TISSUE.box[3] / TISSUE.box[2]) * TW;
	const read = (fr: number) => (fr < K5.lower + 22 ? '' : flicker(K5.lower + 22, K5.wait + 40, '2.03', 1.8, 2.5)(fr));
	const CX = 1150;
	const slotsX = (i: number) => 700 + i * 130;
	const vals = ['2.03', '2.02', '2.04'];
	return (
		<Overlay>
			<TaskLine text="For every sample" at={K5.every - 10} size={56} />
			<PicH p={HOLDER} x={x} y={y} h={h} />
			<g opacity={wasteO}><LabelBeaker x={wasteX} y={yLow} h={BH} at={-100} lines={[{t: 'waste', at: -100}]} size={26} /></g>
			<Fade at={K5.carried - 20}><LabelBeaker x={sampX} y={sampY} h={BH} at={-100} /></Fade>
			<g opacity={washO}><g transform={`translate(${wx + ww},${wy}) scale(-1,1)`}><PicH p={WASH} x={0} y={0} h={WH} /></g></g>
			<Stream a={nozzle} b={[bulb[0] + 10, bulb[1] - 40]} at={K5.rinse + 4} out={K5.blot - 10} />
			{tisO > 0.01 ? <g opacity={tisO} transform={`translate(${lerp(bulb[0] + 220, bulb[0] - 6, tq)},${lerp(bulb[1] - 20, bulb[1] - 40, tq)}) rotate(-70)`}><PicH p={TISSUE} x={-TW / 2} y={-tisH / 2} h={tisH} /></g> : null}
			<ClingDrop x={tip[0]} y0={tip[1] + 6} y1={yLow + BH * 0.416} at={K5.carried - 6} fall={K5.carried + 22} color="#c9b8e8" />
			<Note x={bulb[0] + 70} y={tip[1] + 80} text="carry-over changes the reading" size={32} color={BASE_INK} at={K5.carried + 10} out={K5.lower} />
			<TRead x={cab[0] - 40} y={cab[1] + 40} text={read} at={K5.lower} sample="10.00" />
			<StableDot x={cab[0] - 40 + treadW(34, '10.00') + 22} y={cab[1] + 66} at={K5.wait + 40} />
			{[0, 1, 2].map(i => (
				<g key={i}>
					<CupOutline x={slotsX(i)} y={880} w={90} h={90} fill={0.6} at={K5.three + i * 10} />
					<Sx x={slotsX(i) + 45} y={1010} text={vals[i]} size={30} color={INK} anchor="middle" weight={800} at={K5.fresh + i * 10} />
				</g>
			))}
			<Note x={slotsX(0)} y={860} text="a fresh portion each time" size={28} color={INK_SOFT} at={K5.fresh} />
			<DimG at={K5.blot} to={0.38}><Sx x={CX} y={330} text="1 Rinse with distilled water" size={40} color={INK} hand at={K5.rinse} /></DimG>
			<DimG at={K5.lower} to={0.38}><Sx x={CX} y={420} text="2 Blot gently (don't rub)" size={40} color={INK} hand at={K5.blot} /></DimG>
			<DimG at={K5.three} to={0.38}>
				<Sx x={CX} y={510} text="3 Bulb fully in; swirl;" size={40} color={INK} hand at={K5.lower} />
				<Sx x={CX + 32} y={560} text="wait for a steady reading" size={40} color={INK} hand at={K5.wait} />
			</DimG>
			<Sx x={CX} y={650} text="4 Three readings, fresh portions" size={40} color={INK} hand at={K5.three} />
			<Note x={CX} y={720} text="the glass needs time to respond" size={30} color={INK_SOFT} at={K5.respond} out={K5.three} />
			<Note x={CX} y={720} text="one bad portion can't spoil all three" size={30} color={INK_SOFT} at={K5.contaminated} />
			<Note x={60} y={tip[1] + 140} text="next sample" size={30} color={INK_SOFT} at={K5.carried} />
			{void K5.any}{void K5.swirl}{void surf}{void ROW}
		</Overlay>
	);
};

// ---------- 6. The results ----------
const S6 = 'results';
const K6 = cues(sc(S6), {means: 'means of three', hcl: 'Hydrochloric acid', h203: 'two point zero three', acetic: 'Acetic acid', a340: 'three point four zero', water: 'Distilled water', w596: 'five point nine six', wandered: 'wandered', ammonia: 'Ammonia', a1059: 'ten point five nine', naoh: 'sodium hydroxide', n1196: 'eleven point nine six', notice: 'Notice the', r002: 'zero point zero two'});
export const RES = [
	{name: 'HCl', r: ['2.03', '2.02', '2.04'], m: '2.03'},
	{name: 'acetic acid', r: ['3.40', '3.39', '3.41'], m: '3.40'},
	{name: 'distilled water', r: ['5.82', '5.95', '6.10'], m: '5.96'},
	{name: 'ammonia', r: ['10.58', '10.60', '10.59'], m: '10.59'},
	{name: 'NaOH', r: ['11.95', '11.97', '11.96'], m: '11.96'},
];
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const g: RowG = {x0: 330, dx: 280, y: 240, h: 150};
	const rowAt = [K6.hcl, K6.acetic, K6.water, K6.ammonia, K6.naoh];
	const meanAt = [K6.h203, K6.a340, K6.w596, K6.a1059, K6.n1196];
	const TX = 230, TY = 560, LH = 72, C = [0, 420, 620, 820, 1060];
	const ry = (i: number) => TY + 70 + i * LH;
	return (
		<Overlay>
			<Row g={g} at={[-100, -100, -100, -100, -100]} chip={meanAt} size={22} />
			<Fade at={K6.means - 10}>
				{['solution', 'reading 1', '2', '3', 'mean'].map((t, i) => <Sx key={i} x={TX + C[i]} y={TY} text={t} size={30} color={INK_SOFT} hand weight={700} at={-1000} />)}
				<line x1={TX - 10} y1={TY + 18} x2={TX + 1240} y2={TY + 18} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
			</Fade>
			{RES.map((r, i) => {
				const dimTo = i < 4 ? prog(f, meanAt[i + 1], 14) : 0;
				const back = i !== 2 ? prog(f, K6.notice, 14) : 0;
				const o = 1 - 0.6 * dimTo * (1 - back);
				return (
					<g key={i} opacity={o}>
						<Sx x={TX + C[0]} y={ry(i)} text={r.name} size={36} color={INK} weight={700} at={rowAt[i]} />
						{r.r.map((v, k) => <Sx key={k} x={TX + C[k + 1]} y={ry(i)} text={v} size={36} color={INK} weight={600} at={rowAt[i] + 8 + k * 5} />)}
						<Sx x={TX + C[4]} y={ry(i)} text={'→ ' + r.m} size={36} color={TEAL} weight={800} at={meanAt[i]} />
						{i !== 2 ? <Sx x={TX + C[4] + 170} y={ry(i)} text="range 0.02" size={26} color={TEAL} hand weight={700} at={K6.r002 + i * 4} /> : null}
					</g>
				);
			})}
			{(() => {
				const o = prog(f, K6.w596 + 10, 10);
				if (o <= 0.01) return null;
				const yy = ry(2) + 12;
				const pts = Array.from({length: 40}, (_, i) => `${TX + C[1] + i * 15},${yy + Math.sin(i * 1.3) * 4}`).join(' L');
				return <g opacity={o}><path d={`M${pts}`} fill="none" stroke={GLINE} strokeWidth={3} /><Sx x={TX + C[4] + 170} y={ry(2)} text="drifted" size={28} color={INK_SOFT} hand weight={700} at={-1000} /></g>;
			})()}
			{void K6.wandered}{void AMBER_INK}
		</Overlay>
	);
};
