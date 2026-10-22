// M6 C16 scenes 1 to 5: four samples, four methods (plates on a bench line, unmatched method chips, flickering
// links); pH or amount (the question fork, the pH meter reading 2.40, the burette, the C08 lens of mostly whole
// ethanoic acid molecules); what a pH probe measures (glass-bulb close-up, millivolt readout, the 59 mV scale, a dark
// sample); calibration with two buffers (the calibration line: zero point, then slope; the drifted line crossed);
// digital instruments in industry (the outlet probe and dosing trace; the autotitrator and its curve).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {ANTACID, PHMETER, RWGLASS, VINEGAR, WASTE} from './assets';
import {XS25, phEth} from '../chem-m6-c13/curves';
import {
	AChip, AMT_C, An, Axes, BuretteFill, Curve, DimG, DosingTrace, Fade, Fork, FullMeter, GDot, GlassWall, H3O, HA, INK, INK_SOFT, IconChip, LabelBeaker, LensFrame, MistakeX, MotorBurette, Note,
	Overlay, PH_C, PhmTint, PicH, PlateAt, ProbeIcon, Sx, TEAL, TaskLine, Valve, WashBottle, burAt, clamp01, gx, gy, iconChipW, lerp, picW, smooth, vis,
} from './parts';
import type {GG, IconK} from './parts';

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {four: 'Four samples', white: 'white vinegar', antacid: 'antacid tablet', red: 'red wine', pipe: 'factory pipe', met: "You've now", probe: 'a pH probe', direct: 'a direct', back: 'a back', cond: 'a conductivity', which: 'But which', tell: 'actually tell'});
type Sm = {p: typeof VINEGAR; x: number; y: number; h: number; at: number};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const S: Sm[] = [
		{p: VINEGAR, x: 260, y: 510, h: 310, at: K1.white},
		{p: ANTACID, x: 600, y: 660, h: 160, at: K1.antacid},
		{p: RWGLASS, x: 1060, y: 510, h: 310, at: K1.red},
		{p: WASTE, x: 1420, y: 560, h: 260, at: K1.pipe},
	];
	const chips: {t: string; k: IconK; at: number}[] = [
		{t: 'pH probe', k: 'probe', at: K1.probe}, {t: 'direct titration', k: 'burette', at: K1.direct}, {t: 'back titration', k: 'bar', at: K1.back}, {t: 'conductivity titration', k: 'cross', at: K1.cond},
	];
	const ws = chips.map(c => iconChipW(c.t, 30));
	const total = ws.reduce((a, b) => a + b, 0) + 3 * 44;
	let cx = (1920 - total) / 2;
	const cxs = ws.map(w => { const x = cx; cx += w + 44; return x; });
	const CY = 330, CH = 57;
	const fl = f >= K1.which - 40 && f < K1.tell + 30;
	const phase = Math.floor((f - K1.which) / 22);
	const sCx = (i: number) => S[i].x + picW(S[i].p, S[i].h) / 2;
	return (
		<Overlay>
			<DimG at={K1.probe} to={0.4}><TaskLine text="Which method, and what does it tell you?" at={4} size={58} /></DimG>
			<line x1={160} y1={822} x2={1760} y2={822} stroke="rgba(60,45,20,0.25)" strokeWidth={3} strokeLinecap="round" opacity={prog(f, K1.white - 10, 14)} />
			{S.map((s, i) => <PlateAt key={i} p={s.p} x={s.x} y={s.y} h={s.h} at={s.at} />)}
			{chips.map((c, i) => <IconChip key={i} x={cxs[i]} y={CY} text={c.t} k={c.k} at={c.at} />)}
			{fl ? [0, 1, 2, 3].map(i => {
				const j = (i + 1 + (((phase % 3) + 3) % 3)) % 4;
				const o = Math.sin(clamp01(((f - K1.which + 40) % 22) / 22) * Math.PI) * 0.8;
				return <line key={i} x1={cxs[i] + ws[i] / 2} y1={CY + CH + 6} x2={sCx(j)} y2={S[j].y - 14} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 8" opacity={o} />;
			}) : null}
			{void K1.four}{void K1.met}
		</Overlay>
	);
};

// ---------- 2. pH or amount? ----------
const S2 = 'ph-or-amount';
const K2 = cues(sc(S2), {start: 'Start with', ph: 'its pH', cal: 'A calibrated', total: 'in total', needs: 'That needs', video: 'titration video', ionised: 'has ionised', every: 'every acid', why: "That's why", r088: 'zero point eight eight'});
export const FORK2 = {x0: 120, y0: 560, x1: 560, yU: 330, yL: 790};
const MOLS: [number, number, number][] = [[-0.55, -0.5, -0.6], [-0.1, -0.62, 0.4], [0.4, -0.5, 2.2], [-0.25, -0.15, -2.2], [0.25, -0.1, -0.7], [-0.5, 0.35, -1.0], [0.05, 0.3, 2.6], [0.45, 0.4, -0.4], [-0.15, 0.68, 0.5], [0.3, 0.72, -2.4]];
export const ScenePhAmount: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 1330, cy: 560, r: 240};
	const P = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const b = burAt(650, 950, 300);
	const allLit = prog(f, K2.every, 14);
	const ionLit = vis(f, K2.ionised, undefined, 12);
	return (
		<Overlay>
			<Fork g={FORK2} at={K2.start + 10} atU={K2.ph - 6} atL={K2.total - 6} />
			<FullMeter x={600} y={190} h={250} at={K2.ph} read={fr => (fr < K2.cal + 20 ? '' : '2.40')} />
			<Fade at={K2.total}><BuretteFill x={b.x} y={b.y} h={300} level={() => 0} /></Fade>
			<Fade at={K2.video}><line x1={600 + picW(PHMETER, 250) * 0.83} y1={190 + 250 * 0.8} x2={L.cx - L.r * 0.9} y2={L.cy - L.r * 0.4} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" /></Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.video}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{MOLS.map(([u, v, a], i) => (
					<g key={i}>
						{allLit > 0.01 ? <circle cx={P(u, v)[0]} cy={P(u, v)[1]} r={30} fill="#f6d77a" opacity={0.55 * allLit} /> : null}
						<HA x={P(u, v)[0]} y={P(u, v)[1]} s={1.3} a={a} />
					</g>
				))}
				{[[0.5, 0.05], [-0.78, -0.05]].map(([u, v], i) => (
					<g key={'i' + i}>
						{ionLit > 0.01 ? <circle cx={P(u, v)[0] + 18} cy={P(u, v)[1]} r={46} fill={PH_C} opacity={0.2 * ionLit} /> : null}
						<An x={P(u, v)[0]} y={P(u, v)[1]} s={1.3} />
						<H3O x={P(u, v)[0] + 40} y={P(u, v)[1] - 4} s={1.0} />
					</g>
				))}
			</LensFrame>
			<PlateAt p={VINEGAR} x={1660} y={660} h={200} at={K2.video + 10} />
			<Note x={L.cx} y={L.cy - L.r - 24} text="titration video" size={28} color={INK_SOFT} anchor="middle" at={K2.video + 6} out={K2.every} />
			<DimG at={K2.r088} to={0.4}>
				<Note x={L.cx} y={L.cy + L.r + 56} text="probe senses these" size={34} color={PH_C} anchor="middle" at={K2.ionised + 6} out={K2.every} />
				<Note x={L.cx} y={L.cy + L.r + 56} text="a titration reacts all of these" size={34} color={AMT_C} anchor="middle" at={K2.every + 10} />
			</DimG>
			<AChip x={880} y={930} text="pH 2.40, yet about 0.88 mol/L (under 1% ionised)" size={32} color={INK} hand={false} at={K2.r088} />
			{void K2.needs}{void K2.why}
		</Overlay>
	);
};

// ---------- 3. What a pH probe measures ----------
const S3 = 'probe-measures';
const K3 = cues(sc(S3), {bulb: 'glass bulb', hyd: 'Hydronium ions', voltage: 'small voltage', meter: 'The meter', converts: 'converts it', fifty: 'fifty nine', because: 'And because', dark: 'dark or cloudy'});
export const MT = {x: 1100, y: 250, h: 560};
export const SceneProbe: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 520, cy: 520, r: 230};
	const mw = picW(PHMETER, MT.h);
	const tip: [number, number] = [MT.x + mw * 0.83, MT.y + MT.h * 0.91];
	const mv = Math.round(272 * smooth(clamp01((f - K3.voltage) / 40)));
	const darkO = prog(f, K3.dark, 24);
	const SX = [320, 560, 800], SY = 900;
	return (
		<Overlay>
			<FullMeter x={MT.x} y={MT.y} h={MT.h} at={-100} read={fr => (fr < K3.voltage ? '' : fr < K3.converts + 10 ? `${mv} mV` : '2.40')} pulse={K3.converts + 10} />
			<PhmTint x={MT.x} y={MT.y} h={MT.h} o={darkO} />
			<Fade at={K3.bulb}><circle cx={tip[0]} cy={tip[1] - 6} r={34} fill="none" stroke={INK} strokeWidth={4} /></Fade>
			<Sx x={L.cx} y={L.cy - L.r - 24} text="the probe's glass bulb, close up" size={28} color={INK_SOFT} anchor="middle" hand at={K3.bulb + 6} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K3.bulb}>
				<GlassWall cx={L.cx} cy={L.cy} r={L.r} gather={K3.hyd + 20} dark={fr => prog(fr, K3.dark, 24)} />
			</LensFrame>
			<Sx x={L.cx - 190} y={L.cy + L.r * 0.62} text="sample" size={26} color={INK_SOFT} weight={700} at={K3.bulb + 10} />
			<Sx x={L.cx + 50} y={L.cy - L.r * 0.66} text="glass" size={26} color={INK_SOFT} anchor="start" weight={700} at={K3.bulb + 10} />
			<DimG at={K3.fifty} to={0.4}>
				<Note x={L.cx} y={L.cy + L.r + 50} text="hydronium at the glass → voltage" size={34} color={PH_C} anchor="middle" at={K3.voltage + 6} />
			</DimG>
			<Note x={L.cx} y={L.cy + L.r + 100} text="not an indicator: no colour" size={28} color={INK_SOFT} anchor="middle" at={K3.voltage + 40} out={K3.converts} />
			<Fade at={K3.fifty}>
				<line x1={SX[0]} y1={SY} x2={SX[2]} y2={SY} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
				{SX.map((x, i) => <g key={i}><line x1={x} y1={SY - 12} x2={x} y2={SY + 12} stroke={INK_SOFT} strokeWidth={3} /><Sx x={x} y={SY + 46} text={`pH ${3 + i}`} size={28} color={INK} anchor="middle" weight={700} at={K3.fifty + i * 8} /></g>)}
				{[0, 1].map(i => <path key={'b' + i} d={`M${SX[i] + 8},${SY - 18} Q${(SX[i] + SX[i + 1]) / 2},${SY - 56} ${SX[i + 1] - 8},${SY - 18}`} fill="none" stroke={PH_C} strokeWidth={3.5} opacity={prog(f, K3.fifty + 16 + i * 8, 10)} />)}
				{[0, 1].map(i => <Sx key={'t' + i} x={(SX[i] + SX[i + 1]) / 2} y={SY - 52} text="59 mV" size={26} color={PH_C} anchor="middle" weight={800} at={K3.fifty + 20 + i * 8} />)}
			</Fade>
			<Sx x={840} y={SY + 8} text="≈ 59 mV per pH unit (25 °C)" size={30} color={PH_C} weight={700} at={K3.fifty + 30} />
			<Note x={MT.x + mw * 0.5} y={MT.y + MT.h + 70} text="reads voltage, not colour" size={34} color={TEAL} anchor="middle" at={K3.dark + 20} />
			{void K3.meter}{void K3.because}
		</Overlay>
	);
};

// ---------- 4. Calibrating with two buffers ----------
const S4 = 'calibration';
const K4 = cues(sc(S4), {told: 'told which', drifts: 'drifts', temp: 'temperature changes', buffers: 'two buffers', seven: 'A pH seven', zero: 'zero point', second: 'A second buffer', slope: 'the slope', choose: 'Choose buffers', either: 'either side', rinse: 'rinse the', skip: 'Skip it', wrong: 'simply wrong'});
export const GC: GG = {x: 640, y: 260, w: 680, h: 430, x0: 2, x1: 10, y0: -260, y1: 340};
const TRUE_M = 59.16, DRIFT = {b: 45, m: 50};
const lineV = (b: number, m: number) => (p: number) => b + m * (7 - p);
const LinePath: React.FC<{g: GG; fn: (p: number) => number; color: string; width?: number; dash?: string; o?: number}> = ({g, fn, color, width = 5, dash, o = 1}) =>
	o <= 0.01 ? null : <line x1={gx(g, 2)} y1={gy(g, fn(2))} x2={gx(g, 10)} y2={gy(g, fn(10))} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" opacity={o} />;
const CalPoint: React.FC<{g: GG; p: number; v: number; at: number; color?: string}> = ({g, p, v, at, color = '#6aa3d8'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const q = smooth(clamp01((f - at) / 18));
	const y = lerp(g.y - 30, gy(g, v), q);
	return <circle cx={gx(g, p)} cy={y} r={12} fill={color} stroke="#2f5d9e" strokeWidth={3} />;
};
export const SceneCal: React.FC = () => {
	const f = useCurrentFrame();
	const g = GC;
	const wob = Math.sin((f - K4.drifts) / 14);
	const driftFn = lineV(DRIFT.b + 25 * wob, DRIFT.m + 6 * Math.cos((f - K4.drifts) / 19));
	const driftO = vis(f, K4.drifts, K4.seven, 14) * 0.6;
	const m = kf(f, [[K4.slope, DRIFT.m], [K4.slope + 30, TRUE_M]]);
	const calO = prog(f, K4.zero + 14, 14);
	const B = {x: 110, h: 180};
	const tipX = B.x + 78;
	const tipY = kf(f, [[K4.seven, 250], [K4.seven + 20, 430], [K4.second - 60, 430], [K4.second - 40, 300], [K4.second - 20, 520], [K4.second, 690]]);
	const probeO = vis(f, K4.seven, K4.choose, 12);
	return (
		<Overlay>
			<Axes g={g} at={-100} xTicks={[2, 3, 4, 5, 6, 7, 8, 9, 10]} yTicks={[]} xLabel="pH" yLabel="voltage (mV)" grid={false} yNumbers={false} />
			<LinePath g={g} fn={driftFn} color={INK_SOFT} width={4} dash="12 9" o={driftO} />
			<Note x={g.x} y={830} text="glass ages; temperature changes the slope" size={32} color={INK_SOFT} at={K4.drifts + 10} out={K4.buffers + 20} />
			<LabelBeaker x={B.x} y={300} h={B.h} at={K4.buffers} lines={[{t: 'pH 7.00 buffer', at: K4.buffers + 10}]} size={28} />
			<LabelBeaker x={B.x} y={580} h={B.h} at={K4.buffers + 10} lines={[{t: 'pH 4.00 buffer', at: K4.buffers + 20}]} size={28} />
			<Note x={96} y={1010} text="buffer video: a buffer holds its pH" size={26} color={INK_SOFT} at={K4.buffers + 20} out={K4.seven} hand={false} />
			<ProbeIcon x={tipX} y={tipY} h={140} o={probeO} cable={false} />
			<WashBottle x={tipX + 140} y={330} at={K4.second - 70} out={K4.second - 10} />
			<CalPoint g={g} p={7} v={0} at={K4.zero} />
			<LinePath g={g} fn={lineV(0, m)} color="#2f5d9e" width={5} o={calO} />
			<Sx x={gx(g, 7) - 24} y={gy(g, 0) + 50} text="zero point" size={30} color="#2f5d9e" anchor="end" weight={800} at={K4.zero + 16} />
			<CalPoint g={g} p={4} v={TRUE_M * 3} at={K4.slope} />
			<Sx x={gx(g, 4) + 24} y={gy(g, TRUE_M * 3) - 22} text="slope: mV per pH unit" size={30} color="#2f5d9e" weight={800} at={K4.slope + 30} />
			<DimG at={K4.wrong} to={0.4}>
				<Note x={g.x} y={830} text="buffers close to your samples, ideally either side; rinse between" size={30} color={INK} at={K4.either} />
			</DimG>
			<LinePath g={g} fn={lineV(DRIFT.b, DRIFT.m)} color={INK_SOFT} width={4} dash="12 9" o={0.6 * prog(f, K4.wrong - 10, 14)} />
			<MistakeX x={1370} y={430} text="pH 2.71 ?" at={K4.wrong} cross={K4.wrong + 16} note="uncalibrated" size={34} />
			{void K4.told}{void K4.temp}{void K4.rinse}{void K4.skip}
		</Overlay>
	);
};

// ---------- 5. Digital instruments in industry ----------
const S5 = 'industry-digital';
const K5 = cues(sc(S5), {probes: 'Probes also', plant: 'treatment plant', every: 'every few seconds', controller: 'a controller', drift: 'drift outside', licence: "plant's licence", labs: 'many labs', auto: 'autotitrator', jump: 'the jump itself', noone: 'No one'});
const DGG = {x: 580, y: 330, w: 520, h: 300};
const GA: GG = {x: 1470, y: 330, w: 340, h: 250, x0: 0, x1: 50, y0: 0, y1: 14};
export const SceneIndustry: React.FC = () => {
	const T0 = K5.every, DUR = 260;
	const tv = (K5.drift - T0) / DUR;
	const ss = (q: number) => { const u = clamp01(q); return u * u * (3 - 2 * u); };
	const tr = (t: number) => 0.5 + 0.035 * Math.sin(t * 26) + (t < tv ? 0.3 * ss((t - (tv - 0.24)) / 0.22) : 0.3 * (1 - ss((t - tv) / 0.2)));
	return (
		<Overlay>
			<PlateAt p={WASTE} x={70} y={300} h={400} at={K5.plant - 10} />
			<DosingTrace g={DGG} tr={tr} at={T0} dur={DUR} lo={0.16} hi={0.86} />
			<DimG at={K5.labs} to={0.4}>
				<Note x={DGG.x + DGG.w} y={DGG.y - 16} text="continuous" size={30} color={TEAL} anchor="end" at={T0 + 10} />
				<Note x={DGG.x + DGG.w - 6} y={DGG.y + DGG.h * 0.14 - 12} text="licence range" size={28} color={INK_SOFT} anchor="end" at={K5.licence} />
			</DimG>
			<Valve x={1170} y={430} at={K5.controller} open={K5.drift} close={K5.drift + 80} />
			<Note x={1170} y={500} text="dose acid" size={28} color={TEAL} anchor="middle" at={K5.drift} out={K5.labs} />
			<MotorBurette x={1330} y={300} at={K5.auto - 14} level={fr => kf(fr, [[K5.auto + 10, 0], [K5.jump + 40, 0.7]])} />
			<Axes g={GA} at={K5.auto} xTicks={[]} yTicks={[]} xLabel="" yLabel="pH" grid={false} size={22} />
			<Curve g={GA} fn={phEth} xs={XS25} color="#1f8a7a" at={K5.auto + 10} dur={110} width={4} />
			<GDot g={GA} v={25} p={8.72} at={K5.jump} color={INK} ring />
			<Note x={GA.x} y={GA.y + GA.h + 60} text="finds the jump: no indicator" size={30} color={TEAL} at={K5.jump + 10} />
			{void K5.probes}{void K5.noone}{void PicH}{void INK}
		</Overlay>
	);
};
