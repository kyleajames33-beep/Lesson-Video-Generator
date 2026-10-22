// M6 P02 scenes 1 to 6: the peak you never see (the C03 cup, readout climbing while heat leaves); the set-up (cup in
// a beaker, foam lens, lid, measuring cylinders, acid poured); the starting temperature (two readouts, the average,
// the crossed one-temperature chip); mix and log (NaOH poured, lid settles, stirrer bobs, the results log); the
// temperature-time graph; extrapolating the cooling line back to the moment of mixing.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {CAL_G, CUP_N} from './assets';
import {
	AMBER, AMBER_INK, CalCup, Inset, CupB, Cyl, DimG, Fade, GBracket, GHeat, GLINE, GSeg, GTick, Ghost, HEAT, HEAT_INK, HeatOut, INK, INK_SOFT, LensFrame, MistakeX, Note, Overlay, PourCyl,
	ProbeIcon, Ring, RowsLog, Sx, TEAL, TGraph, TPts, TRead, TaskLine, TempChip, TimerIcon, Under, calPt, calW, clamp01, cupHeat, cupPt, cupW, cylMark, cylW, gx, gy, pulseAt, readW, smooth, treadW, vis,
} from './parts';
import type {GG, Pt} from './parts';

// the logged run (author note a): readings every 0.5 min; cooling line T = 28.1 - 0.20 t from 1.5 min
export const RUN: Pt[] = [[0, 21.5], [0.5, 25.9], [1, 27.8], [1.5, 27.8], [2, 27.7], [2.5, 27.6], [3, 27.5], [3.5, 27.4], [4, 27.3], [4.5, 27.2], [5, 27.1], [6, 26.9], [7, 26.7]];
export const COOL_FROM = 3; // index of the 1.5 min point
export const cool = (t: number) => 28.1 - 0.2 * t;
export const RUN_X = [0, 1, 2, 3, 4, 5, 6, 7];
export const RUN_Y = [21, 22, 23, 24, 25, 26, 27, 28, 29];
const fmtT = (v: number) => v.toFixed(1) + ' °C';

// ---------- 1. Hook: the peak you never see ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {mix: 'When you mix', thermo: 'the thermometer', escaping: 'escaping', peaks: 'reading peaks', last: 'partly why', never: 'never actually see'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const CH = 640, cw = calW(CH), CX = (1920 - cw) / 2 - 120, CY = 300;
	const probe = calPt(CX, CY, CH, CAL_G.probe);
	const rx = probe[0] + 18, ry = probe[1] - 8;
	const lidR = calPt(CX, CY, CH, CAL_G.lidR), lidL = calPt(CX, CY, CH, CAL_G.lidL), wl = calPt(CX, CY, CH, CAL_G.wallL), wr = calPt(CX, CY, CH, CAL_G.wallR);
	const glow = prog(f, K1.thermo, 80);
	return (
		<>
			<Heading text="The peak you never see." at={K1.never} size={62} />
			<Overlay>
				<CalCup x={CX} y={CY} h={CH} glow={glow} />
				<TempChip x={rx} y={ry} from={21.5} to={27.8} at={K1.mix} rise={K1.thermo} dur={K1.peaks - K1.thermo + 20} />
				<HeatOut pts={[[lidR[0] + 6, lidR[1], -0.5], [lidL[0] - 6, lidL[1], -2.64], [wl[0] - 6, wl[1], Math.PI], [wr[0] + 6, wr[1], 0], [wr[0] + 6, wr[1] + 120, 0.25]]} at={K1.escaping} />
				<Note x={rx + readW() + 40} y={ry + 40} text="heat leaves from the first second" size={34} color={HEAT_INK} at={K1.escaping + 8} out={K1.never - 20} />
				<Note x={rx + readW() + 40} y={ry + 100} text="last video: −54, not −57" size={30} color={INK_SOFT} at={K1.last} out={K1.never - 20} hand={false} />
				<Ghost x={rx} y={ry - 110} text={() => '?'} at={K1.never} />
				<Fade at={K1.never + 6}>
					<path d={`M${rx - 18},${ry - 110 + 26} L${rx - 30},${ry - 110 + 26} L${rx - 30},${ry + 26} L${rx - 18},${ry + 26}`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				</Fade>
				<Note x={rx + readW() + 40} y={ry - 66} text="the temperature with no heat lost" size={34} color={AMBER_INK} at={K1.never + 10} />
			</Overlay>
		</>
	);
};

// ---------- 2. The set-up, and why each part is there ----------
const S2 = 'setup';
const K2 = cues(sc(S2), {fifty: 'Fifty millilitres', beaker: 'beaker so', foam: 'Foam is full', insulator: 'insulator', lid: 'lid cuts', cyl: 'measuring cylinders', because: 'because the moles'});
export const CUP2 = {x: 690, y: 300, h: 620};
export const SceneSetup: React.FC = () => {
	const f = useCurrentFrame();
	const {x, y, h} = CUP2;
	const w = cupW(h);
	const CYH = 520, cyw = cylW(CYH);
	const A = {x: 110, y: 400}, B = {x: 120 + cyw + 50, y: 400};
	const [bx1] = cupPt(x, y, h, CUP_N.beakL), [bx2] = cupPt(x, y, h, CUP_N.beakR);
	const wallP = cupPt(x, y, h, [1268, 1350]);
	const L = {cx: x + w + 150, cy: 700, r: 105};
	const mouth = cupPt(x, y, h, CUP_N.mouth);
	const lidY = cupPt(x, y, h, [1000, 860])[1];
	const pP = cupPt(x, y, h, CUP_N.bungP), pS = cupPt(x, y, h, CUP_N.bungS);
	const [wx, wy] = cupPt(x, y, h, CUP_N.win);
	const TX = 1330;
	const pour = K2.because + 70;
	const lift2 = 36 * vis(f, pour + 10, pour + 96, 14);
	const mA = cylMark(A.x, A.y, CYH, 50), mB = cylMark(B.x, B.y, CYH, 50);
	return (
		<Overlay>
			<TaskLine text="The set-up" at={4} size={56} />
			<CupB x={x} y={y} h={h} glow={0} lift={lift2} />
			<TRead x={pP[0] - treadW(30) - 14} y={cupPt(x, y, h, CUP_N.probeTop)[1] - 10 - lift2} text={() => '21.4 °C'} at={K2.fifty} size={30} />
			{/* the two measuring cylinders, the acid one pours */}
			<PourCyl x={A.x} y={A.y} h={CYH} at={pour} to={[mouth[0] - 250, mouth[1] - 120]} ang={74} stream={[mouth[0] - 60, mouth[1] - 20]} mirror tint="#f3d9a6" before={K2.fifty - 6} />
			<Fade at={K2.fifty + 6}><Cyl x={B.x} y={B.y} h={CYH} ml={50} tint="#d8cdea" /></Fade>
			<DimG at={K2.cyl} to={0.4}>
				<Fade at={K2.fifty} out={pour + 20}>
					<Sx x={A.x + cyw / 2} y={A.y + CYH + 44} text="HCl" size={30} color={INK} anchor="middle" weight={700} at={K2.fifty} />
					<Sx x={A.x + cyw / 2} y={A.y + CYH + 80} text="1.00 mol/L" size={24} color={INK_SOFT} anchor="middle" weight={600} at={K2.fifty} />
				</Fade>
				<Sx x={B.x + cyw / 2} y={B.y + CYH + 44} text="NaOH" size={30} color={INK} anchor="middle" weight={700} at={K2.fifty + 6} />
				<Sx x={B.x + cyw / 2} y={B.y + CYH + 80} text="1.00 mol/L" size={24} color={INK_SOFT} anchor="middle" weight={600} at={K2.fifty + 6} />
			</DimG>
			{/* beaker: stops tipping */}
			<Ring cx={(bx1 + bx2) / 2} cy={cupPt(x, y, h, [1000, 1300])[1]} rx={(bx2 - bx1) / 2 + 26} ry={h * 0.36} at={K2.beaker} out={K2.foam + 10} color={AMBER} seed={4} />
			<DimG at={K2.insulator} to={0.4}><Note x={TX} y={330} text="beaker: stops tipping" size={38} color={INK} at={K2.beaker + 6} /></DimG>
			{/* foam lens */}
			<line x1={wallP[0]} y1={wallP[1]} x2={L.cx - L.r} y2={L.cy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" opacity={vis(f, K2.foam, K2.lid + 30, 10)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.foam} out={K2.lid + 30}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f7f4ee" />
				{Array.from({length: 22}, (_, i) => {
					const u = ((i * 37) % 100) / 100, v = ((i * 61) % 100) / 100;
					return <circle key={i} cx={L.cx - L.r + 18 + u * (2 * L.r - 36)} cy={L.cy - L.r + 18 + v * (2 * L.r - 36)} r={13 + (i % 3) * 3} fill="#ffffff" stroke="#c9c1b3" strokeWidth={2} />;
				})}
				{(() => {
					const q = smooth(clamp01((f - K2.insulator + 10) / 30));
					const ex = L.cx - L.r + 10 + q * (L.r - 10);
					return <g opacity={prog(f, K2.insulator - 10, 8)} fill="none" stroke={HEAT} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round"><path d={`M${L.cx - L.r + 6},${L.cy} L${ex},${L.cy}`} /><path d={`M${ex - 14},${L.cy - 12} L${ex},${L.cy} L${ex - 14},${L.cy + 12}`} /></g>;
				})()}
			</LensFrame>
			<DimG at={K2.lid} to={0.4}><Note x={TX} y={440} text="foam: insulator (trapped air)" size={38} color={INK} at={K2.insulator} /></DimG>
			{/* lid: arrows rise and stop under it, one thin arrow escapes at the probe hole */}
			{(() => {
				const o = vis(f, K2.lid - 4, K2.cyl + 10, 10);
				if (o <= 0.01) return null;
				return (
					<g opacity={o}>
						{[-120, -50, 60, 140].map((dx, i) => {
							const q = ((f - K2.lid + i * 10) % 36) / 36;
							const y0 = wy - 30, y1 = lidY + 40;
							const yy = y0 + (y1 - y0) * q;
							return <g key={i} opacity={Math.sin(q * Math.PI)} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"><path d={`M${wx + dx},${yy + 30} L${wx + dx},${yy}`} /><path d={`M${wx + dx - 10},${yy + 10} L${wx + dx},${yy} L${wx + dx + 10},${yy + 10}`} /></g>;
						})}
						<line x1={wx - 170} y1={lidY + 34} x2={wx + 200} y2={lidY + 34} stroke={HEAT_INK} strokeWidth={3} strokeDasharray="6 6" />
					</g>
				);
			})()}
			<HeatOut pts={[[pP[0] - 14, pP[1] - 6, -1.9]]} at={K2.lid + 10} out={K2.cyl + 10} len={50} />
			<GTick x={pP[0] - 34} y={pP[1] - 30} at={K2.lid + 20} out={K2.cyl + 20} s={0.9} />
			<GTick x={pS[0] + 34} y={pS[1] - 30} at={K2.lid + 26} out={K2.cyl + 20} s={0.9} />
			<DimG at={K2.cyl} to={0.4}><Note x={TX} y={550} text="lid: less heat lost to the air" size={38} color={INK} at={K2.lid + 6} /></DimG>
			{/* the 50.0 mL marks */}
			<Under x1={mA.x1 - 6} x2={mA.x2 + 6} y={mA.y + 4} at={K2.cyl + 6} out={pour} color={AMBER} />
			<Under x1={mB.x1 - 6} x2={mB.x2 + 6} y={mB.y + 4} at={K2.cyl + 14} color={AMBER} />
			<Sx x={B.x + cyw + 10} y={mB.y + 10} text="50.0 mL" size={26} color={AMBER_INK} weight={700} at={K2.cyl + 16} />
			<Note x={TX} y={680} text="volume → moles (n = cV)" size={38} color={TEAL} at={K2.because} />
			<Note x={TX} y={740} text="volume → mass (1 mL ≈ 1 g)" size={38} color={TEAL} at={K2.because + 30} />
			{void kf}{void INK}{void GLINE}{void gx}{void gy}
		</Overlay>
	);
};

// ---------- 3. The starting temperature ----------
const S3 = 'start-temperature';
const K3 = cues(sc(S3), {each: 'each solution', steady: 'both are steady', acid: 'acid reads', base: 'base twenty', average: 'use the average', equal: 'equal volumes', why: 'Why bother', noreact: 'no reaction'});
export const SceneStart: React.FC = () => {
	const f = useCurrentFrame();
	const CH = 560, CX = 200, CY = 330;
	const probe = calPt(CX, CY, CH, CAL_G.probe);
	const CYH = 480, cyw = cylW(CYH), YX = 760, YY = 400;
	const tip: [number, number] = [YX + cyw / 2, cylMark(YX, YY, CYH, 8).y];
	const sA = pulseAt(f, K3.acid, 0.18, 30) * pulseAt(f, K3.each, 0.12, 24);
	const sB = pulseAt(f, K3.base, 0.18, 30) * pulseAt(f, K3.each + 18, 0.12, 24);
	const ax = probe[0] + 18, ay = probe[1] - 8, bx = tip[0] + 40, by = tip[1] - 300;
	const TX = 1170;
	return (
		<Overlay>
			<TaskLine text="Starting temperature" at={4} size={56} />
			<CalCup x={CX} y={CY} h={CH} />
			<Sx x={CX + calW(CH) / 2} y={CY + CH + 50} text="HCl (in the cup)" size={30} color={INK} anchor="middle" weight={700} at={6} />
			<Cyl x={YX} y={YY} h={CYH} ml={50} tint="#d8cdea" />
			<ProbeIcon x={tip[0]} y={tip[1]} h={330} />
			<Sx x={YX + cyw / 2} y={YY + CYH + 50} text="NaOH" size={30} color={INK} anchor="middle" weight={700} at={6} />
			<g transform={`translate(${ax + 70},${ay + 26}) scale(${sA}) translate(${-ax - 70},${-ay - 26})`}><TempChip x={ax} y={ay} from={21.4} at={K3.each} /></g>
			<g transform={`translate(${bx + 70},${by + 26}) scale(${sB}) translate(${-bx - 70},${-by - 26})`}><TempChip x={bx} y={by} from={21.6} at={K3.each + 18} /></g>
			<Note x={TX} y={340} text="wait until both are steady" size={34} color={INK_SOFT} at={K3.steady} out={K3.average} />
			<DimG at={K3.why} to={0.45}>
				<Sx x={TX} y={420} text="T(initial) = (21.4 + 21.6) ÷ 2" size={40} color={INK} weight={700} at={K3.average} />
				<Sx x={TX + 186} y={480} text="= 21.5 °C" size={40} color={TEAL} weight={800} at={K3.average + 20} />
				<Note x={TX} y={548} text="equal volumes: the simple mean" size={30} color={INK_SOFT} at={K3.equal} hand={false} />
			</DimG>
			<MistakeX x={TX} y={650} text="use the acid's temperature only" at={K3.noreact - 30} cross={K3.noreact} note="a warmer base adds heat without reacting" size={32} />
			{void fmtT}
		</Overlay>
	);
};

// ---------- 4. Mix and keep logging ----------
const S4 = 'mix-log';
const K4 = cues(sc(S4), {pour: 'pour in', lid: 'lid on', stir: 'stir', read: 'Read the', thirty: 'thirty seconds', past: 'past the peak', tempting: 'tempting', after: 'readings after'});
const LOGT = ['0.5 min   25.9 °C', '1.0 min   27.8 °C', '1.5 min   27.8 °C', '2.0 min   27.7 °C', '2.5 min   27.6 °C', '3.0 min   27.5 °C', '3.5 min   27.4 °C', '4.0 min   27.3 °C', '4.5 min   27.2 °C', '5.0 min   27.1 °C', '6.0 min   26.9 °C', '7.0 min   26.7 °C'];
const VALS = [25.9, 27.8, 27.8, 27.7, 27.6, 27.5, 27.4, 27.3, 27.2, 27.1, 26.9, 26.7];
const MINS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7];
export const SceneMix: React.FC = () => {
	const f = useCurrentFrame();
	const x = 220, y = 300, h = 620, w = cupW(h);
	const lift = 44 * (1 - smooth(prog(f, K4.lid, 16)));
	const bob = f > K4.stir ? Math.abs(Math.sin((f - K4.stir) / 7)) * 10 * (1 - prog(f, K4.thirty + 40, 20)) : 0;
	const mouth = cupPt(x, y, h, CUP_N.mouth);
	const pP = cupPt(x, y, h, CUP_N.probeTop);
	const rowAt = (i: number) => (i < 4 ? K4.thirty + 4 + i * 26 : K4.thirty + 4 + 3 * 26 + (i - 3) * 13);
	const rows = LOGT.map((t, i) => ({t, at: rowAt(i)}));
	const nRows = rows.filter(r => f >= r.at).length;
	const temp = nRows === 0 ? (f < K4.pour + 50 ? 21.5 : 21.5 + 4.4 * smooth(prog(f, K4.pour + 50, K4.thirty - K4.pour - 50))) : VALS[nRows - 1];
	const mins = nRows === 0 ? Math.max(0, f - (K4.pour + 50)) / 30 / 60 : MINS[nRows - 1];
	const clock = (m: number) => { const s = Math.round(m * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
	const LX = 1180, LY = 300;
	const compact = K4.after - 24;
	const glow = prog(f, K4.pour + 50, 60);
	return (
		<Overlay>
			<TaskLine text="Mix, then keep logging" at={4} size={56} />
			<CupB x={x} y={y} h={h} lift={lift} bob={bob} glow={glow} />
			<TRead x={pP[0] - treadW(30) - 14} y={pP[1] - 10 - lift} text={() => temp.toFixed(1) + ' °C'} at={0} size={30} pulse={nRows > 0 ? rows[nRows - 1].at : undefined} />
			<PourCyl x={x + w + 120} y={360} h={480} at={K4.pour} to={[mouth[0] + 190, mouth[1] - 260]} ang={-62} stream={[mouth[0] + 30, mouth[1] - 50 - lift]} tint="#d8cdea" />
			<TimerIcon cx={x + w + 170} cy={360} r={42} at={K4.pour + 50} spin={300} />
			<Sx x={x + w + 230} y={350} text={clock(mins)} size={40} color={INK} weight={800} at={K4.pour + 50} />
			<Note x={x + w + 230} y={404} text="mixing: t = 0" size={30} color={INK_SOFT} at={K4.pour + 56} out={K4.thirty} />
			<RowsLog x={LX} y={LY} rows={rows} max={8} lh={56} lhC={40} compact={compact} size={36} at={K4.thirty} head="time after mixing, temperature" />
			<Note x={LX} y={LY + 30 + 8 * 56 + 50} text="keep going well past the peak" size={32} color={INK_SOFT} at={K4.past} out={compact} />
			{(() => {
				const o = vis(f, K4.after, undefined, 12);
				if (o <= 0.01) return null;
				const y1 = LY + 30 + 2 * 40 - 32, y2 = LY + 30 + 11 * 40 + 8;
				return (
					<g opacity={o}>
						<path d={`M${LX + 400},${y1} L${LX + 416},${y1} L${LX + 416},${y2} L${LX + 400},${y2}`} fill="none" stroke={TEAL} strokeWidth={5} />
						<Sx x={LX + 432} y={(y1 + y2) / 2 + 12} text="keep these" size={36} color={TEAL} hand weight={700} at={-1000} />
					</g>
				);
			})()}
			<MistakeX x={LX} y={940} text="stop at the highest reading" at={K4.tempting} cross={K4.after - 6} size={30} />
			{void AMBER}{void K4.read}
		</Overlay>
	);
};

// ---------- the graph used in scenes 5 and 6 ----------
export const G5: GG = {x: 230, y: 230, w: 1000, h: 620, x0: 0, x1: 7, y0: 21, y1: 29};
export const StartLine: React.FC<{g: GG; at: number; tag?: boolean; tagOut?: number}> = ({g, at, tag = true, tagOut}) => (
	<Fade at={at}>
		<line x1={g.x} y1={gy(g, 21.5)} x2={g.x + g.w} y2={gy(g, 21.5)} stroke={GLINE} strokeWidth={3} strokeDasharray="12 9" />
		{tag ? <Sx x={g.x + g.w - 10} y={gy(g, 21.5) - 14} text="average starting temperature 21.5 °C" size={26} color={INK_SOFT} anchor="end" weight={600} at={at + 6} out={tagOut} /> : null}
	</Fade>
);

// ---------- 5. The temperature-time graph ----------
const S5 = 'graph';
const K5 = cues(sc(S5), {plot: 'Plot temperature', shoots: 'shoots up', peak: 'twenty seven point eight', straight: 'straight line', during: 'during the rise', lower: 'lower than'});
export const SceneGraph: React.FC = () => {
	const g = G5;
	const time = (i: number) => (i <= 2 ? K5.shoots - 20 + i * 22 : K5.peak + 20 + (i - 3) * 9);
	const TX = 1290;
	const hx = gx(g, 1), hy = gy(g, 27.8);
	return (
		<Overlay>
			<TaskLine text="Temperature against time" at={4} size={56} />
			<TGraph g={g} at={K5.plot} xTicks={RUN_X} yTicks={RUN_Y} />
			<StartLine g={g} at={K5.plot + 20} tagOut={K5.straight} />
			<TPts g={g} pts={RUN} time={time} teal={{from: COOL_FROM, at: K5.straight}} />
			<Ring cx={hx} cy={hy} rx={24} ry={24} at={K5.peak} color={AMBER} seed={3} />
			<DimG at={K5.lower} to={0.4}><Note x={TX} y={340} text="highest reading: 27.8 °C" size={38} color={AMBER_INK} at={K5.peak + 6} /></DimG>
			<DimG at={K5.during} to={0.4}><Note x={TX} y={450} text="cooling line: only losing heat" size={38} color={TEAL} at={K5.straight + 6} /></DimG>
			<GHeat g={g} pts={[[0.35, 24.6], [0.6, 26.4], [0.85, 27.4]]} at={K5.during} />
			<Note x={TX} y={560} text="losing heat during the rise too" size={36} color={HEAT_INK} at={K5.during + 10} />
			<Ghost x={hx - treadW(30) / 2} y={hy - 120} text={() => '?'} at={K5.lower} size={30} />
			<Note x={TX} y={670} text="so the peak reads too low" size={36} color={INK} at={K5.lower + 10} />
		</Overlay>
	);
};

// ---------- 6. Extrapolate the cooling line back ----------
const S6 = 'extrapolate';
const K6 = cues(sc(S6), {draw: 'draw a straight', extend: 'extend it back', mixing: 'moment of mixing', instant: 'instant', mix2: 'moment you mix', here: 'Here the line', t281: 'twenty eight point one', best: 'best estimate', extrap: 'extrapolation', same: 'same rate'});
export const SceneExtrap: React.FC = () => {
	const f = useCurrentFrame();
	const g = G5;
	const TX = 1290;
	const hx = gx(g, 1), hy = gy(g, 27.8);
	const gx0 = gx(g, 0);
	return (
		<Overlay>
			<TaskLine text="Extrapolate the cooling line" at={4} size={56} />
			<TGraph g={g} at={-100} xTicks={RUN_X} yTicks={RUN_Y} />
			<StartLine g={g} at={-100} tag={false} />
			<TPts g={g} pts={RUN} time={() => -100} teal={{from: COOL_FROM, at: -100}} />
			<GSeg g={g} a={[1.5, cool(1.5)]} b={[7, cool(7)]} at={K6.draw + 10} dur={30} />
			<GSeg g={g} a={[1.5, cool(1.5)]} b={[0, cool(0)]} at={K6.extend + 6} dur={30} dash="14 10" />
			<Fade at={K6.mixing}>
				<line x1={gx0 + 3} y1={g.y} x2={gx0 + 3} y2={g.y + g.h} stroke={TEAL} strokeWidth={4} strokeDasharray="6 8" />
			</Fade>
			<DimG at={K6.t281} to={0.4}><Note x={gx0 + 24} y={gy(g, 23)} text="moment of mixing, t = 0" size={32} color={TEAL} at={K6.mixing + 6} /></DimG>
			<Fade at={K6.instant} out={K6.here - 10}>
				<line x1={gx0 + 14} y1={gy(g, 21.5)} x2={gx0 + 14} y2={gy(g, 21.5) - (gy(g, 21.5) - gy(g, 28.1)) * smooth(prog(f, K6.instant, 24))} stroke={GLINE} strokeWidth={4} strokeDasharray="8 7" />
				<Sx x={gx0 + 34} y={gy(g, 24.8)} text="no heat lost: instant jump" size={32} color={INK_SOFT} hand weight={700} at={K6.instant + 10} />
			</Fade>
			<Fade at={K6.t281}><circle cx={gx0} cy={gy(g, 28.1)} r={13} fill={AMBER} stroke={INK} strokeWidth={3} /></Fade>
			<DimG at={K6.extrap} to={0.45}><Note x={gx0 + 30} y={gy(g, 28.1) - 26} text="28.1 °C (extrapolated)" size={34} color={AMBER_INK} at={K6.t281 + 4} /></DimG>
			<Ghost x={TX} y={290} text={fr => (fr < K6.t281 + 8 ? '?' : '28.1 °C')} at={-100} size={34} fill={K6.t281 + 8} />
			<DimG at={K6.extrap} to={0.45}><Note x={TX} y={400} text="best estimate, no heat lost" size={34} color={INK} at={K6.best} /></DimG>
			<Inset x={1290} y={440} w={530} h={430} from={[gx(g, 0.7), gy(g, 27.95)]} r={56} at={K6.t281 + 24} title="close up">
				<ZoomGap at={K6.t281 + 24} />
			</Inset>
			<Sx x={g.x} y={1035} text="extrapolate: extend a line beyond the measured points" size={36} color={TEAL} hand weight={700} at={K6.extrap} />
			<Note x={TX} y={930} text="assumes the same cooling" size={32} color={INK_SOFT} at={K6.same} />
			<Note x={TX} y={972} text="rate during the rise" size={32} color={INK_SOFT} at={K6.same + 6} />
			{void hx}{void hy}{void GBracket}
			{void K6.mix2}{void INK}{void kf}{void Ring}
		</Overlay>
	);
};

/** The close-up of the gap: 0 to 2 min, 27.4 to 28.4 °C. */
const GZ: GG = {x: 1380, y: 500, w: 400, h: 300, x0: 0, x1: 2, y0: 27.5, y1: 28.3};
const ZoomGap: React.FC<{at: number}> = ({at}) => {
	const g = GZ;
	return (
		<g>
			{[27.6, 27.8, 28.0, 28.2].map(v => <g key={v}><line x1={g.x} y1={gy(g, v)} x2={g.x + g.w} y2={gy(g, v)} stroke="#ece4d4" strokeWidth={1.6} /><Sx x={g.x - 10} y={gy(g, v) + 8} text={v.toFixed(1)} size={22} color={INK_SOFT} anchor="end" weight={600} at={-1000} /></g>)}
			<line x1={g.x} y1={g.y} x2={g.x} y2={g.y + g.h} stroke={INK} strokeWidth={3} />
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w} y2={g.y + g.h} stroke={INK} strokeWidth={3} />
			{[0, 1, 2].map(t => <Sx key={t} x={gx(g, t)} y={g.y + g.h + 28} text={String(t)} size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />)}
			<line x1={gx(g, 0)} y1={gy(g, cool(0))} x2={gx(g, 1.5)} y2={gy(g, cool(1.5))} stroke={TEAL} strokeWidth={4} strokeDasharray="12 9" />
			<line x1={gx(g, 1.5)} y1={gy(g, cool(1.5))} x2={gx(g, 2)} y2={gy(g, cool(2))} stroke={TEAL} strokeWidth={4} />
			{[[1, 27.8, AMBER], [1.5, 27.8, TEAL], [2, 27.7, TEAL]].map(([t, T, c], i) => <circle key={i} cx={gx(g, t as number)} cy={gy(g, T as number)} r={9} fill={c as string} stroke={INK} strokeWidth={2.4} />)}
			<circle cx={gx(g, 0)} cy={gy(g, 28.1)} r={10} fill={AMBER} stroke={INK} strokeWidth={2.4} />
			<GSeg g={g} a={[1, 27.8]} b={[0, 27.8]} at={at + 14} color={AMBER_INK} dash="6 6" width={3} />
			<GBracket g={g} t={0} lo={27.8} hi={28.1} at={at + 24} text="heat already lost" dx={34} size={30} />
			<Sx x={gx(g, 1) + 14} y={gy(g, 27.8) + 34} text="highest 27.8" size={24} color={AMBER_INK} weight={700} at={at + 10} />
			<Sx x={gx(g, 0) + 18} y={gy(g, 28.1) - 14} text="28.1" size={26} color={AMBER_INK} weight={800} at={at + 6} />
		</g>
	);
};
