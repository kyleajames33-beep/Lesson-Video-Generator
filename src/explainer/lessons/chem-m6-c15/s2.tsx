// M6 C15 scenes 5 to 10: the worked back titration (task line, equation strips, grouped givens, the moles bar, one
// stage per line, the crossed volume subtraction, the pie); a hidden endpoint (red vinegar, the conductivity meter,
// two C14 thumbnails); two straight lines and where they cross (points one by one, the ion tally, the best-fit
// ruler); dilution (the beaker sleeve and the sagging pair); reading the vinegar's concentration.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {ANTACID, PHTH, RVIN} from './assets';
import {VIN_L1, VIN_L2, VIN_X, VIN_XS, condVin, condVinRaw} from './curves';
import {condEth, condHCl, samples} from '../chem-m6-c13/curves';
import {
	AChip, Axes, CondMeter, CondTint, CrossMark, Curve, DilBeaker, DimG, EqLine, FIT1, FIT2, FallDrop, Fade, FitRuler, GCard, Glow, INK, INK_SOFT, IonTally, KeptChip, MistakeX, MolesBar, NAVY,
	Note, OpGlow, Overlay, P, PicH, Pie, PlateAt, Pts, ShrinkAt, StepAfter, Sx, TEAL, TFlask, Blot, TaskLine, USED_INK, WLine, clamp01, eq, fitSize, gx, gy, mw, picW, smooth,
} from './parts';
import type {GG, IonK} from './parts';
import {USEDF} from './s1';

// ---------- worked example board ----------
export const TASK = 'Find the mass and % of CaCO_3 in the tablet';
const TS = 52;
const GX = 96, GY = 340, GW = 780, GS = 28, GLH = 50;
const GIV = ['tablet: 0.620 g', 'HCl added: 25.00 mL, 0.5000 mol/L', 'NaOH for the leftover: 18.40 mL, 0.250 mol/L', 'M(CaCO_3) = 100.1 g/mol'];
export const EQB = (at: number | number[]) => eq(['CaCO_3(s)', '+', '2HCl(aq)', '->', 'CaCl_2(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], at);
export const EQN = (at: number) => eq(['HCl(aq)', '+', 'NaOH(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)'], at);
const WB = {x: 920, y: 400, w: 680, h: 60};
const wbU = WB.x + WB.w * USEDF;
const Strips: React.FC<{at: number; dim?: number; glow?: number}> = ({at, dim = 1e9, glow}) => {
	const s1 = EQB(at), s2 = EQN(at + 10);
	const z1 = fitSize(s1, 1080, 40), z2 = fitSize(s2, 700, 28);
	return (
		<>
			<DimG at={dim} to={0.4}>
				<EqLine items={s1} x={96} y={240} size={z1} />
				<EqLine items={s2} x={96} y={296} size={z2} />
			</DimG>
			{glow !== undefined ? <OpGlow items={s1} i={0} size={z1} x={96} y={240} at={glow} len={60} color={TEAL} /> : null}
			{glow !== undefined ? <OpGlow items={s1} i={2} size={z1} x={96} y={240} at={glow + 6} len={60} color={TEAL} /> : null}
		</>
	);
};

// ---------- 5. Worked example: acid added and acid left over ----------
const S5 = 'we-added-left';
const K5 = cues(sc(S5), {here: "Here's one", one: 'Step one', ncv: 'n equals', r1250: 'zero point zero one two five zero', two: 'Step two', reacts: 'reacts with', r460: 'zero point zero zero four six zero', notice: 'Notice', moles: 'subtract moles', volumes: 'not volumes', concs: 'different concentrations'});
export const SceneWeAdded: React.FC = () => (
	<Overlay>
		<TaskLine text={TASK} at={K5.here} size={TS} />
		<StepAfter size={TS} task={TASK} text="Step 1 of 4: acid added" at={K5.one} out={K5.two - 6} />
		<StepAfter size={TS} task={TASK} text="Step 2 of 4: acid left over" at={K5.two} />
		<Strips at={K5.here + 20} dim={K5.one + 30} />
		<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={K5.here + 30} lines={GIV.map((t, i) => ({t, at: K5.here + 36 + i * 8, lit: i === 1 ? [K5.ncv, K5.two] as [number, number] : i === 2 ? [K5.reacts, K5.notice] as [number, number] : undefined}))} />
		<PlateAt p={ANTACID} x={1640} y={330} h={110} at={K5.here + 20} />
		<MolesBar x={WB.x} y={WB.y} w={WB.w} h={WB.h} at={K5.one + 10} split={K5.r460 - 10} size={24} usedText="used" />
		<Note x={WB.x} y={WB.y - 20} text="acid added" size={30} color={TEAL} at={K5.one + 20} hand={false} weight={700} />
		<Sx x={WB.x + 175} y={WB.y - 20} text="1.250 × 10^{−2} mol" size={30} color={TEAL} weight={800} at={K5.r1250 + 10} />
		<Sx x={(wbU + WB.x + WB.w) / 2} y={WB.y + WB.h + 40} text="4.60 × 10^{−3} mol" size={28} color={NAVY} anchor="middle" weight={800} at={K5.r460 + 10} />
		<WLine x={96} y={700} size={36} dim={K5.two} out={K5.r460 - 30} items={P('n(HCl added) = 0.5000 mol/L × 0.02500 L', K5.ncv + 10, {t: '= 1.250 × 10^{−2} mol', color: TEAL}, K5.r1250)} />
		<KeptChip x={WB.x} y={560} text="added: 1.250 × 10^{−2} mol" at={K5.r460 - 30} color={TEAL} size={32} />
		<WLine x={96} y={700} size={36} items={P('n(HCl left) = n(NaOH) = 0.250 mol/L × 0.01840 L', K5.reacts + 30, {t: '= 4.60 × 10^{−3} mol', color: NAVY}, K5.r460)} />
		<DimG at={K5.concs + 40} to={0.35}>
			<MistakeX x={96} y={790} text="25.00 mL − 18.40 mL = 6.60 mL ?" at={K5.moles} cross={K5.volumes + 4} note="different concentrations: subtract moles" size={32} />
		</DimG>
	</Overlay>
);

// ---------- 6. Worked example: acid used, the ratio, mass and percentage ----------
const S6 = 'we-used-mass';
const K6 = cues(sc(S6), {three: 'Step three', r790: 'zero point zero zero seven nine zero', four: 'Step four', two: 'uses two', r395m: 'zero point zero zero three nine five', times: 'Times the', r395: 'zero point three nine five', r638: 'sixty three point eight', rest: 'The rest', binder: 'binder'});
export const SceneWeUsed: React.FC = () => (
	<Overlay>
		<TaskLine text={TASK} at={-100} size={TS} />
		<StepAfter size={TS} task={TASK} text="Step 3 of 4: acid used" at={K6.three} out={K6.four - 6} />
		<StepAfter size={TS} task={TASK} text="Step 4 of 4: ratio, mass, %" at={K6.four} />
		<Strips at={-100} dim={0} glow={K6.two} />
		<DimG at={0} to={0.45}>
			<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={-100} lines={GIV.map((t, i) => ({t, at: -100, lit: i === 3 ? [K6.times, K6.r638 - 10] as [number, number] : i === 0 ? [K6.r638 - 6, K6.binder] as [number, number] : undefined}))} />
		</DimG>
		<PicH p={ANTACID} x={1640} y={330} h={110} />
		<MolesBar x={WB.x} y={WB.y} w={WB.w} h={WB.h} at={-100} split={-100} glow={K6.r790 - 10} size={24} usedText="used" />
		<DimG at={0} to={0.45}>
			<Note x={WB.x} y={WB.y - 20} text="acid added" size={30} color={TEAL} at={-100} hand={false} weight={700} />
			<Sx x={WB.x + 175} y={WB.y - 20} text="1.250 × 10^{−2} mol" size={30} color={TEAL} weight={800} at={-100} />
			<Sx x={(wbU + WB.x + WB.w) / 2} y={WB.y + WB.h + 40} text="4.60 × 10^{−3} mol" size={28} color={NAVY} anchor="middle" weight={800} at={-100} />
		</DimG>
		<DimG at={K6.r638 + 20} to={0.45}>
			<Sx x={(WB.x + wbU) / 2} y={WB.y + WB.h + 40} text="7.90 × 10^{−3} mol" size={28} color={USED_INK} anchor="middle" weight={800} at={K6.r790 + 10} />
		</DimG>
		<DimG at={K6.two} to={0.45}><KeptChip x={WB.x} y={540} text="added: 1.250 × 10^{−2} mol" at={-100} color={TEAL} size={30} /></DimG>
		<WLine x={96} y={700} size={36} out={K6.two + 20} items={P('n(HCl used) = 1.250 × 10^{−2} − 4.60 × 10^{−3}', K6.three + 30, {t: '= 7.90 × 10^{−3} mol', color: USED_INK}, K6.r790)} />
		<Note x={96} y={752} text="both to 10^{−5} mol → 3 s.f." size={26} color={INK_SOFT} at={K6.r790 + 30} out={K6.four} hand={false} />
		<DimG at={K6.r638 + 20} to={0.45}><KeptChip x={WB.x} y={610} text="used: 7.90 × 10^{−3} mol" at={K6.two + 20} color={USED_INK} size={30} /></DimG>
		<WLine x={96} y={700} size={36} dim={K6.r395 - 10} items={P('n(CaCO_3) = 7.90 × 10^{−3} ÷ 2', K6.two + 30, {t: '= 3.95 × 10^{−3} mol', color: USED_INK}, K6.r395m)} />
		<WLine x={96} y={780} size={36} dim={K6.r638 - 10} items={P('m = 3.95 × 10^{−3} mol × 100.1 g/mol', K6.times, {t: '= 0.3954 g → 0.395 g', color: USED_INK}, K6.r395)} />
		<Note x={96} y={826} text="keep a guard digit for the next step" size={26} color={INK_SOFT} at={K6.r395 + 26} out={K6.r638 - 10} hand={false} />
		<WLine x={96} y={860} size={36} items={P('% CaCO_3 = 0.3954 g ÷ 0.620 g × 100', K6.r638 - 30, {t: '= 63.8%', color: USED_INK}, K6.r638)} />
		<AChip x={96} y={920} text="0.395 g CaCO_3; 63.8% by mass" size={36} color={USED_INK} hand={false} at={K6.r638 + 30} />
		<Pie cx={1712} cy={540} r={56} frac={fr => kf(fr, [[K6.binder - 20, 0], [K6.binder + 10, 0.638]])} at={K6.rest - 6} />
		<Sx x={1712} y={630} text="CaCO_3 63.8%" size={24} color={USED_INK} anchor="middle" weight={800} at={K6.binder} />
		<Sx x={1712} y={660} text="other ingredients" size={22} color={INK_SOFT} anchor="middle" weight={700} at={K6.binder + 6} />
	</Overlay>
);

// ---------- 7. A hidden endpoint: use a conductivity meter ----------
const S7 = 'hidden-endpoint';
const K7 = cues(sc(S7), {now: 'Now the', quick: 'reacts quickly', see: 'see the endpoint', meter: 'conductivity meter', colour: 'about colour', last: 'last video', vee: 'a V', bend: 'bend'});
const XC = samples(50, 25);
export const TG1: GG = {x: 1000, y: 150, w: 240, h: 130, x0: 0, x1: 50, y0: 0, y1: 45};
export const TG2: GG = {x: 1380, y: 150, w: 240, h: 130, x0: 0, x1: 50, y0: 0, y1: 45};
export const Thumbs: React.FC<{at1: number; at2: number; tags?: boolean}> = ({at1, at2, tags = true}) => (
	<>
		<Axes g={TG1} at={at1} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
		<Curve g={TG1} fn={condHCl} xs={XC} color="#6aa3d8" at={at1 + 6} dur={30} width={4} />
		<Axes g={TG2} at={at2} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
		<Curve g={TG2} fn={condEth} xs={XC} color="#1f8a7a" at={at2 + 6} dur={30} width={4} />
		{tags ? <Sx x={TG1.x + TG1.w / 2} y={TG1.y + TG1.h + 40} text="strong acid: minimum" size={26} color={INK_SOFT} anchor="middle" weight={700} at={at1 + 20} /> : null}
		{tags ? <Sx x={TG2.x + TG2.w / 2} y={TG2.y + TG2.h + 40} text="weak acid: bend" size={26} color={INK_SOFT} anchor="middle" weight={700} at={at2 + 20} /> : null}
	</>
);
export const SceneHidden: React.FC = () => {
	const f = useCurrentFrame();
	const MX = 820, MY = 380, MH = 540;
	const slide = smooth(prog(f, K7.meter - 10, 24));
	const FH = 260, FX = 260, FY = 420;
	const fc = FX + picW(PHTH.clear, FH) / 2;
	return (
		<Overlay>
			<PicH p={RVIN} x={110} y={330} h={330} />
			<TFlask x={FX} y={FY} h={FH} red={() => 1} />
			<Blot x={fc} y0={FY - 50} y1={FY + FH * 0.62} at={K7.see + 4} />
			<DimG at={K7.meter} to={0.4}>
				<Note x={fc} y={FY + FH + 60} text="indicator hidden" size={32} color={INK_SOFT} anchor="middle" at={K7.see + 24} />
			</DimG>
			<g transform={`translate(${(1 - slide) * 260},0)`} opacity={slide}>
				<CondMeter x={MX} y={MY} h={MH} level={fr => (fr < K7.meter + 20 ? 0.2 : 0.3 + 0.12 * Math.sin(fr / 9))} at={-100} />
				<CondTint x={MX} y={MY} h={MH} o={1} />
			</g>
			<Note x={1350} y={760} text="reads ions, not colour" size={36} color={TEAL} at={K7.meter + 30} />
			<Note x={96} y={1000} text="back titration doesn't help here: the colour stays in the flask" size={28} color={INK_SOFT} at={K7.colour + 10} out={K7.last} hand={false} />
			<Thumbs at1={K7.vee - 6} at2={K7.bend - 6} />
			{void K7.now}{void K7.quick}
		</Overlay>
	);
};

// ---------- conductivity graph for scenes 8 to 10 ----------
export const GV: GG = {x: 200, y: 200, w: 1000, h: 620, x0: 0, x1: 16, y0: 0, y1: 28};
export const VXT = [0, 2, 4, 6, 8, 10, 12, 14, 16];
export const VXLAB = 'volume of 1.00 mol/L NaOH added (mL)';
export const VinAxes: React.FC<{g: GG; at?: number; size?: number}> = ({g, at = -100, size = 26}) => <Axes g={g} at={at} xTicks={VXT} yTicks={[]} xLabel={VXLAB} yLabel="conductivity (relative)" grid={false} yNumbers={false} size={size} />;
export const VinLines: React.FC<{g: GG; at1?: number; at2?: number; ruler?: boolean}> = ({g, at1 = -200, at2 = -200, ruler = false}) => (
	<>
		<FitRuler g={g} line={VIN_L1} a={2} b={7} lo={0} hi={11} at={at1} color={FIT1} ruler={ruler} />
		<FitRuler g={g} line={VIN_L2} a={10} b={16} lo={5.6} hi={16} at={at2} color={FIT2} ruler={ruler} />
	</>
);
const tallyVin = (v: number) => {
	const pairs = Math.round(Math.min(v, 8.2) / 2);
	const oh = Math.floor(Math.max(0, v - 8.2) / 2);
	if (v <= 0) return {pos: ['H3O'] as IonK[], neg: ['Ac'] as IonK[]};
	return {pos: Array(pairs + oh).fill('Na') as IonK[], neg: [...Array(pairs).fill('Ac'), ...Array(oh).fill('OH')] as IonK[]};
};

// ---------- 8. Two straight lines, and where they cross ----------
const S8 = 'lines-cross';
const K8 = cues(sc(S8), {add: 'Add the', plot: 'plot the points', before: 'Before equivalence', same: 'same change', straight: 'straight line', after: 'After equivalence', steeper: 'steeper', first: 'first points', between: 'between', draw: 'Draw the', cross: 'cross'});
export const SceneLines: React.FC = () => {
	const f = useCurrentFrame();
	const time = (i: number) => (i <= 8 ? K8.plot + 4 + i * 36 : K8.after + 4 + (i - 9) * 17);
	let shown = -1;
	VIN_XS.forEach((_, i) => { if (f >= time(i)) shown = i; });
	const t = tallyVin(Math.max(0, shown));
	const g = GV;
	const yx = VIN_L1.at(VIN_X);
	return (
		<Overlay>
			<DimG at={0} to={0}><Thumbs at1={-100} at2={-100} tags={false} /></DimG>
			<VinAxes g={g} at={K8.add} />
			<Pts g={g} fn={condVin} xs={VIN_XS} time={time} grey={[0, 1]} greyAt={K8.first} greyOut={K8.draw} />
			<VinLines g={g} at1={K8.straight - 4} at2={K8.steeper - 4} ruler />
			<Counter2 x={1525} y={240} at={K8.plot} text={`NaOH added: ${Math.max(0, shown)}.00 mL`} />
			<IonTally x={1300} y={380} pos={() => t.pos} neg={() => t.neg} at={K8.plot} />
			<Note x={240} y={650} text="curved at the start: leave out" size={30} color={INK_SOFT} at={K8.first + 6} out={K8.between} />
			<Fade at={K8.between} out={K8.draw}>
				<path d={`M${gx(g, 8)},${gy(g, condVin(9)) - 40} L${gx(g, 8)},${gy(g, condVin(9)) - 54} L${gx(g, 9)},${gy(g, condVin(9)) - 54} L${gx(g, 9)},${gy(g, condVin(9)) - 40}`} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={gx(g, 8) - 14} y={gy(g, condVin(9)) - 44} text="no reading lands on equivalence" size={30} color={INK} anchor="end" hand at={K8.between + 4} />
			</Fade>
			<CrossMark g={g} x={VIN_X} p={yx} at={K8.cross} />
			<AChip x={1260} y={780} text="equivalence: where the lines cross" size={28} color={TEAL} hand={false} at={K8.cross + 10} />
			{void K8.before}{void K8.same}
		</Overlay>
	);
};
const Counter2: React.FC<{x: number; y: number; at: number; text: string}> = ({x, y, at, text}) => {
	const w = mw(text, 28, false, 700) + 36;
	return (
		<Fade at={at}>
			<rect x={x - w / 2} y={y} width={w} height={45} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={3} />
			<Sx x={x} y={y + 31} text={text} size={28} color={NAVY} anchor="middle" weight={700} at={-1000} />
		</Fade>
	);
};

// ---------- 9. Why dilution matters ----------
const S9 = 'dilution';
const K9 = cues(sc(S9), {catch: 'one catch', dilutes: 'dilutes', bends: 'bends the lines', water: 'of water', moles: "doesn't change", fraction: 'small fraction', conc: 'concentrated', corrected: 'corrected'});
const SIONS: [number, number, 'na' | 'ac'][] = [[-0.6, 0.15, 'na'], [0.1, 0.05, 'ac'], [0.6, 0.3, 'na'], [-0.25, 0.45, 'ac'], [0.35, 0.62, 'na'], [-0.55, 0.78, 'ac'], [0.05, 0.92, 'na'], [0.6, 0.95, 'ac']];
const GM: GG = {x: 540, y: 400, w: 360, h: 280, x0: 0, x1: 16, y0: 0, y1: 1};
const RAW16 = condVinRaw(16), COR16 = condVin(16);
const MorphPair: React.FC<{k: (f: number) => number; at: number}> = ({k, at}) => {
	const f = useCurrentFrame();
	const q = clamp01(k(f));
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const fn = (v: number) => (1 - q) * (condVinRaw(v) / RAW16) + q * (condVin(v) / COR16);
	const draw = Math.min(16, 16 * clamp01((f - at) / 40));
	const pts: string[] = [];
	for (let v = 0; v <= draw + 1e-9; v += 0.25) pts.push(`${gx(GM, v).toFixed(1)},${gy(GM, fn(v)).toFixed(1)}`);
	return (
		<g opacity={o}>
			<Axes g={GM} at={at} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
			{pts.length > 1 ? <path d={'M' + pts.join(' L')} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" /> : null}
		</g>
	);
};
export const SceneDilution: React.FC = () => {
	const B = {x: 140, y: 330, w: 300, h: 440};
	const pA = [0, 1, 2, 3, 4, 5].map(i => K9.dilutes + 12 + i * 14);
	const pB = [0, 1, 2, 3, 4, 5].map(i => K9.fraction - 70 + i * 14);
	const pC = [0, 1, 2, 3, 4, 5].map(i => K9.conc + 30 + i * 10);
	const level = (fr: number) => {
		if (fr < K9.water) { let L = 0.25; pA.forEach(t => { L += 0.11 * clamp01((fr - t - 14) / 8); }); return L; }
		let L = kf(fr, [[K9.water, 0.91], [K9.water + 20, 0.8]]);
		pB.forEach(t => { L += 0.016 * clamp01((fr - t - 14) / 8); });
		pC.forEach(t => { L += 0.004 * clamp01((fr - t - 14) / 8); });
		return L;
	};
	const lvY = (t: number) => B.y + B.h - 6 - (B.h - 16) * level(t + 14);
	return (
		<Overlay>
			<ShrinkAt cx={1200} cy={200} k={0.55} at={0} tx={600}>
				<VinAxes g={GV} />
				<Pts g={GV} fn={condVin} xs={VIN_XS} time={() => -100} />
				<VinLines g={GV} />
			</ShrinkAt>
			<Sx x={1525} y={615} text="(corrected for volume added)" size={22} color={INK_SOFT} anchor="middle" weight={700} at={K9.corrected + 16} />
			<DilBeaker x={B.x} y={B.y} w={B.w} h={B.h} level={level} at={0} ions={SIONS} />
			{pA.map((t, i) => <FallDrop key={'a' + i} x={B.x + B.w / 2} y0={B.y - 90} y1={lvY(t)} at={t} color="#7f9cc8" s={1.6} />)}
			{pB.map((t, i) => <FallDrop key={'b' + i} x={B.x + B.w / 2} y0={B.y - 90} y1={lvY(t)} at={t} color="#7f9cc8" s={1.6} />)}
			{pC.map((t, i) => <FallDrop key={'c' + i} x={B.x + B.w / 2} y0={B.y - 90} y1={lvY(t)} at={t} color={NAVY} s={0.8} />)}
			<MorphPair k={fr => prog(fr, K9.conc + 20, 50)} at={K9.dilutes + 20} />
			<Note x={B.x} y={850} text="shape: the ions and the dilution" size={32} color={INK} at={K9.bends} out={K9.water} />
			<Note x={B.x} y={850} text="+ water: same moles of acid" size={32} color={INK} at={K9.water + 10} out={K9.fraction} />
			<Note x={B.x} y={850} text="small fraction of the volume" size={32} color={INK} at={K9.fraction} out={K9.conc} />
			<Note x={B.x} y={850} text="large volume, concentrated titrant" size={32} color={TEAL} at={K9.conc + 10} />
			<Note x={B.x} y={920} text="or correct each reading for the volume added" size={30} color={INK_SOFT} at={K9.corrected + 6} hand={false} />
			{void K9.catch}{void K9.moles}
		</Overlay>
	);
};

// ---------- 10. Reading the vinegar's concentration ----------
const S10 = 'vinegar-reading';
const K10 = cues(sc(S10), {here: 'Here, ten', ten: 'ten point zero zero', one: 'one point zero zero', cross: 'lines cross', r820: 'eight point two zero', r00820: 'zero point zero zero eight two zero', divide: 'Divide by', vinegar: 'of vinegar', r0820: 'zero point eight two zero'});
export const GR: GG = {x: 200, y: 310, w: 840, h: 470, x0: 0, x1: 16, y0: 0, y1: 28};
const TASK10 = 'Find c(CH_3COOH) in the vinegar';
export const SceneVinegar: React.FC = () => {
	const e = eq(['CH_3COOH', '+', 'NaOH', '->', 'CH_3COONa', '+', 'H_2O'], K10.r00820 - 70);
	const RX = 1130;
	const g1 = 'vinegar: ';
	return (
		<Overlay>
			<TaskLine text={TASK10} at={K10.here} size={TS} />
			<Glow x={96 + mw(g1, 32, false, 600) - 8} y={236} w={mw('10.00 mL', 32, false, 600) + 16} at={K10.vinegar} len={50} />
			<Sx x={96} y={236} text="vinegar: 10.00 mL (+ water)" size={32} color={INK} weight={600} at={K10.ten} />
			<Sx x={640} y={236} text="NaOH: 1.00 mol/L" size={32} color={NAVY} weight={600} at={K10.one} />
			<VinAxes g={GR} />
			<Sx x={GR.x + GR.w / 2} y={GR.y + GR.h + 116} text="(corrected for volume added)" size={26} color={INK_SOFT} anchor="middle" weight={700} at={-100} />
			<Pts g={GR} fn={condVin} xs={VIN_XS} time={() => -100} />
			<VinLines g={GR} />
			<CrossMark g={GR} x={VIN_X} p={VIN_L1.at(VIN_X)} at={K10.cross} pulse={K10.r820} label="8.20 mL" labelAt={K10.r820 + 4} />
			<EqLine items={e} x={RX} y={350} size={fitSize(e, 640, 30)} />
			<DimG at={K10.divide} to={0.4}>
				<WLine x={RX} y={430} size={32} items={P('n(CH_3COOH) = n(NaOH)', K10.r00820 - 60)} />
				<WLine x={RX} y={485} size={32} items={P('= 1.00 mol/L × 0.00820 L', K10.r00820 - 30)} />
				<WLine x={RX} y={540} size={32} items={P({t: '= 8.20 × 10^{−3} mol', color: TEAL}, K10.r00820)} />
			</DimG>
			<Note x={RX} y={600} text="divide by the vinegar's volume: water adds no acid" size={24} color={INK_SOFT} at={K10.vinegar + 6} out={K10.r0820 + 40} hand={false} />
			<WLine x={RX} y={660} size={32} items={P('c = 8.20 × 10^{−3} mol ÷ 0.01000 L', K10.r0820 - 50)} />
			<WLine x={RX} y={715} size={32} items={P({t: '= 0.820 mol/L', color: TEAL}, K10.r0820)} />
			<AChip x={RX} y={770} text="c(CH_3COOH) = 0.820 mol/L" size={34} color={TEAL} hand={false} at={K10.r0820 + 30} />
			<PlateAt p={RVIN} x={1740} y={720} h={220} at={K10.r0820 + 36} />
		</Overlay>
	);
};
void INK; void PicH;
