// M6 C08 scenes 1 to 5: the meter disagrees; a weak acid stays mostly whole (Ka and x); worked example 1: the ICE
// table, dropping the x, then the 5% check, the equilibrium concentrations and the pH.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BEAKER} from './assets';
import {
	AChip, AMBER, Counter, DimG, EqLine, Fade, Field, FieldLens, FullMeter, GCard, HopPair, INK, INK_SOFT, IceRows, KaFrac, KeptChip, LabelBeaker, MistakeX, Note, OpGlow, Overlay, P, PHChip, PHTrack,
	PROTON, PROTON_INK, ProtonHop, Ring, StepAfter, Sx, TEAL, TaskLine, Tick, Tie, WLine, XRuler, countRead, eSpan, eq, fitSize, fullMeterW, iceRowY, meterBeaker, mw, picW, subX,
} from './parts';
import type {EItem, IceR} from './parts';
import {Tray} from '../chem-m5-c10/parts';

// ---------- board geometry for the worked examples ----------
export const B8 = {task: {s: 52}, card: {x: 1290, y: 84, w: 534, lh: 56, s: 31}, strip: {x: 230, y: 345, maxW: 1570}, ice: {x: 96, y: 395, rh: 76}, ruler: {x: 230, y: 690, w: 1000}, ly: [790, 870, 950], ls: 42, kept: {x: 1380, y: 650}};
export const TASK_PH = 'Find the pH';
export const PROP_EQ = (at: number): EItem[] => eq(['CH_3CH_2COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3CH_2COO^{-}(aq)'], at, at);
export const stripGeom = (items: EItem[]) => {
	const s = Math.min(40, fitSize(items, B8.strip.maxW, 40));
	const cols = [0, 4, 6].map(i => eSpan(items, i, s, B8.strip.x).cx);
	const end = eSpan(items, items.length - 1, s, B8.strip.x).x2;
	return {s, cols, xR: end + 24};
};
/** The worked example's givens card (top right). */
export const PropCard: React.FC<{at?: [number, number]; o?: number}> = ({at = [-100, -100], o = 1}) => (
	<g opacity={o}>
		<GCard x={B8.card.x} y={B8.card.y} w={B8.card.w} lh={B8.card.lh} size={B8.card.s} at={at[0] - 6} lines={[{t: 'propanoic acid: 0.150 mol/L', at: at[0]}, {t: 'Ka = 1.3 × 10^{−5} (25 °C)', at: at[1]}]} />
	</g>
);

// ---------- 1. Hook: the meter disagrees ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {student: 'A student needs', propanoic: 'propanoic acid', treat: 'They treat it', hyd: 'the hydronium equals', ph: 'so the pH', r0824: 'zero point eight two', but: 'But the pH', reads: 'meter reads two', r285: 'two point eight five', two: 'two pH units', hundred: 'about a hundred', what: 'So what went', right: 'the right answer'});
export const SceneHook: React.FC = () => {
	const MX = 1250, MY = 250, MH = 450;
	const mb = meterBeaker(MX, MY, MH);
	const read = countRead([{t0: K1.r285 - 14, t1: K1.r285 + 8, a: 3.21, b: 2.85}], 2, K1.r285 - 14);
	void fullMeterW;
	return (
		<>
			<Heading text="Weak acid: what is the hydronium concentration?" at={K1.right} size={56} />
			<Overlay>
				<FullMeter x={MX} y={MY} h={MH} at={-100} read={read} pulse={K1.r285 + 8} />
				<Sx x={mb.cx} y={mb.bottom + 46} text="propanoic acid" size={32} color={INK} anchor="middle" weight={600} at={K1.propanoic} />
				<Sx x={mb.cx} y={mb.bottom + 86} text="0.150 mol/L" size={32} color={INK} anchor="middle" weight={600} at={K1.propanoic + 8} />
				<Ring cx={MX + (736 - 164) * MH / 1570} cy={MY + (1121 - 239) * MH / 1570} rx={115} ry={62} at={K1.r285 + 10} color={AMBER} seed={4} />
				<DimG at={K1.right} to={0.3}>
					<Note x={120} y={330} text="treat it like HCl:" size={36} color={INK_SOFT} at={K1.treat} />
					<Note x={120} y={410} text="[H_3O^{+}] = 0.150 mol/L" size={44} color={INK_SOFT} at={K1.hyd} />
					<Note x={120} y={500} text="pH = −log(0.150) = 0.824" size={52} color={INK_SOFT} at={K1.r0824 - 10} />
				</DimG>
				<PHTrack x={140} y={720} w={960} at={K1.two - 6} ghost={{v: 0.824, label: '0.824', at: K1.two}} mark={{v: () => 2.85, at: K1.two + 10, label: () => '2.85'}} bracket={{a: 0.824, b: 2.85, text: 'about 100 × less H_3O^{+} than predicted', at: K1.hundred}} />
				{void K1.student}{void K1.ph}{void K1.but}{void K1.what}
			</Overlay>
		</>
	);
};

// ---------- 2. Why: a weak acid stays mostly whole ----------
const S2 = 'why-weak';
const K2 = cues(sc(S2), {weak: 'acid is weak', moment: 'At any moment', given: 'given a proton', whole: 'the rest stay', far: 'far less than', eq: 'in equilibrium', written: "you've already written", ka: 'its constant K', hyd: 'hydronium times propanoate', over: 'over the whole', left: 'water left out', real: 'So the real', call: 'Call that amount', x: 'x'});
export const SceneWhyWeak: React.FC = () => {
	const items = PROP_EQ(K2.eq);
	const s = Math.min(40, fitSize(items, 1720, 40));
	const SY = 250;
	const L = {cx: 700, cy: 640, r: 290};
	const P0 = 120, t0 = K2.weak;
	const stop = K2.x - 40;
	const evA = Array.from({length: 12}, (_, i) => t0 + i * P0).filter(t => t < stop);
	const evB = Array.from({length: 12}, (_, i) => t0 + (i + 1) * P0).filter(t => t < stop);
	const A = {a: [600, 560] as [number, number], b: [672, 526] as [number, number]}, B = {a: [770, 730] as [number, number], b: [842, 696] as [number, number]};
	const nA = evA.filter(t => t + 24 <= K2.x).length, splitA = nA % 2 === 1;
	const pick = splitA ? A : B;
	const pc: [number, number] = [(pick.a[0] + pick.b[0]) / 2, (pick.a[1] + pick.b[1]) / 2];
	const w2 = eSpan(items, 2, s, 96);
	const FX = 1080, FY = 560;
	return (
		<>
			<Overlay>
				<EqLine items={items} x={96} y={SY} size={s} />
				<LabelBeaker x={96} y={600} h={230} at={-100} lines={[{t: 'propanoic acid', at: 0}, {t: '0.150 mol/L', at: 0}]} size={28} />
				<FieldLens cx={L.cx} cy={L.cy} r={L.r} at={4}>
					<Field cx={L.cx} cy={L.cy} r={L.r} seed={31} acidFrac={0.5} at={-1000} />
					<HopPair a={A.a} b={A.b} events={evA} s={1.5} />
					<HopPair a={B.a} b={B.b} events={evB} s={1.5} />
				</FieldLens>
				<Counter x={L.cx} y={L.cy + L.r + 18} text="ionised: about 1 in 100" at={K2.moment} out={K2.x} />
				<Ring cx={pc[0]} cy={pc[1]} rx={78} ry={58} at={K2.x} color={TEAL} seed={5} />
				<Tie a={[pc[0] + 70, pc[1] + 30]} b={[FX - 10, 930]} at={K2.x + 6} />
				<Note x={FX} y={940} text="x = concentration that ionises (mol/L)" size={40} color={TEAL} at={K2.x + 8} />
				<KaFrac x={FX} y={FY} prefix="Ka =" num="[H_3O^{+}][CH_3CH_2COO^{-}]" den="[CH_3CH_2COOH]" size={42} at={K2.ka} numAt={K2.hyd} denAt={K2.over} />
				<Tray x={FX + 140} y={660} w={260} at={K2.left - 10} label="left out" items={[{t: 'H_2O', at: K2.left, from: [w2.cx, SY - 14]}]} size={38} />
				<Sx x={1800} y={470} text="Module 5" size={28} color={INK_SOFT} anchor="end" hand at={K2.written} out={K2.real} />
				{void K2.given}{void K2.whole}{void K2.far}{void K2.call}{void BEAKER}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 3. Worked example 1: the task and the ICE table ----------
const S3 = 'we1-ice-table';
const K3 = cues(sc(S3), {here: "Here's the full", ka: 'propanoic acid one', ice: 'An ICE table', initial: 'initial', change: 'change', equil: 'equilibrium', start: 'At the start', ignoring: "ignoring water's", noions: 'no ions', each: 'Each molecule that', one: 'one hydronium and', down: 'acid goes down', byx: 'by x and', up: 'each ion goes', at: 'At equilibrium', minus: 'zero minus x', thenx: 'then x', andx: 'and x', ka2: 'So K a equals', xsq: 'x squared over'});
export const KA_A = 'Ka = ', KA_B = 'x^{2} / (0.150', KA_C = ' − x', KA_D = ')', KA_E = ' = 1.3 × 10^{−5}';
export const SceneWe1Ice: React.FC = () => {
	const items = PROP_EQ(K3.here + 6);
	const g = stripGeom(items);
	const I = B8.ice;
	const rows: IceR[] = [
		{cells: [{t: '0.150', at: K3.start + 24}, {t: '0', at: K3.noions}, {t: '0', at: K3.noions + 6}], dim: [K3.xsq], expand: K3.initial},
		{cells: [{t: '−x', at: K3.byx, color: '#c4432f'}, {t: '+x', at: K3.up + 24, color: '#1f8a5b'}, {t: '+x', at: K3.up + 30, color: '#1f8a5b'}], dim: [K3.xsq], expand: K3.change},
		{cells: [{t: '0.150 − x', at: K3.minus + 6}, {t: 'x', at: K3.thenx}, {t: 'x', at: K3.andx}], expand: K3.equil, lit: [K3.at, K3.xsq]},
	];
	const w0 = eSpan(items, 0, g.s, B8.strip.x), w2 = eSpan(items, 2, g.s, B8.strip.x);
	const X = 96, Y = B8.ly[0], S = 46;
	const xx = X + mw(KA_A, S, false, 700);
	const old = 'x · x / (0.150 − x)';
	return (
		<Overlay>
			<TaskLine text={TASK_PH} at={2} size={B8.task.s} />
			<PropCard at={[K3.here + 40, K3.ka]} />
			<OpGlow items={items} i={0} size={g.s} x={B8.strip.x} y={B8.strip.y} at={K3.byx - 10} len={36} color={AMBER} />
			<OpGlow items={items} i={4} size={g.s} x={B8.strip.x} y={B8.strip.y} at={K3.up + 18} len={36} color={PROTON} />
			<OpGlow items={items} i={6} size={g.s} x={B8.strip.x} y={B8.strip.y} at={K3.up + 26} len={36} color={PROTON} />
			<EqLine items={items} x={B8.strip.x} y={B8.strip.y} size={g.s} />
			<ProtonHop a={[w0.x2 - 30, B8.strip.y - g.s]} b={[w2.cx, B8.strip.y - g.s]} at={K3.one} dur={30} s={0.8} bow={-60} />
			<IceRows x={I.x} xR={g.xR} y={I.y} rh={I.rh} cols={g.cols} rows={rows} at={K3.ice} unit={{at: K3.ice + 20}} />
			<Note x={(g.cols[1] + g.cols[2]) / 2} y={iceRowY(I.y, 0) + 14} text="ignore water's 10^{−7}" size={28} color={INK_SOFT} anchor="middle" at={K3.ignoring + 6} out={K3.each} />
			<Sx x={X} y={Y} text={KA_A} size={S} color={INK} weight={700} at={K3.ka2} />
			<Sx x={xx} y={Y} text={old} size={S} color={INK} weight={700} at={K3.ka2 + 18} out={K3.xsq + 20} />
			<Sx x={xx} y={Y} text={KA_B + KA_C + KA_D} size={S} color={INK} weight={700} at={K3.xsq + 20} />
			<Sx x={xx + mw(KA_B + KA_C + KA_D, S) + 4} y={Y} text={KA_E} size={S} color={TEAL} weight={700} at={K3.xsq + 50} />
			{void K3.down}{void K3.each}{void K3.at}{void subX}
		</Overlay>
	);
};

// ---------- 4. Worked example 1: drop the x ----------
const S4 = 'we1-drop-x';
const K4 = cues(sc(S4), {tiny: 'K a is tiny', xtiny: 'x is tiny', taking: 'Taking a tiny', leaves: 'still leaves about', drop: 'we drop the', module: 'shortcut in Module', then: 'Then x squared', r195: 'one point nine five', root: 'its square root', r14: 'one point four times'});
/** The worked example board after the table is built (scenes 4 and 5). */
export const Board8: React.FC<{dimAt?: number; eCells?: IceR['cells']; eLit?: [number, number]; eDim?: number}> = ({dimAt = 10, eCells, eLit, eDim}) => {
	const items = PROP_EQ(-100);
	const g = stripGeom(items);
	const I = B8.ice;
	const rows: IceR[] = [
		{cells: [{t: '0.150', at: -100}, {t: '0', at: -100}, {t: '0', at: -100}], dim: [-100]},
		{cells: [{t: '−x', at: -100, color: '#c4432f'}, {t: '+x', at: -100, color: '#1f8a5b'}, {t: '+x', at: -100, color: '#1f8a5b'}], dim: [-100]},
		{cells: eCells ?? [{t: '0.150 − x', at: -100}, {t: 'x', at: -100}, {t: 'x', at: -100}], lit: eLit, dim: eDim === undefined ? undefined : [eDim, 0.5]},
	];
	return (
		<>
			<TaskLine text={TASK_PH} at={-100} size={B8.task.s} />
			<DimG at={dimAt} to={0.4}>
				<PropCard />
				<EqLine items={items} x={B8.strip.x} y={B8.strip.y} size={g.s} />
			</DimG>
			<IceRows x={I.x} xR={g.xR} y={I.y} rh={I.rh} cols={g.cols} rows={rows} at={-100} unit={{at: -100}} />
		</>
	);
};
export const SceneWe1Drop: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96, Y = B8.ly[0], S = 46;
	const xx = X + mw(KA_A, S, false, 700);
	const bW = mw(KA_B, S), cW = mw(KA_C, S);
	const slide = prog(f, K4.drop + 8, 18);
	const R = B8.ruler;
	return (
		<Overlay>
			<Board8 eCells={[{t: '0.150 − x', at: -100, swap: {t: '≈ 0.150', at: K4.drop + 14, color: TEAL}}, {t: 'x', at: -100}, {t: 'x', at: -100}]} />
			<StepAfter task={TASK_PH} text="Step 1 of 2: x" at={6} />
			<XRuler x={R.x} y={R.y} w={R.w} frac={0.0093} at={K4.tiny + 4} sliverAt={K4.xtiny} side="end" startLabel="start: 0.150" sliverLabel="x?" />
			<Note x={R.x + R.w + 80} y={R.y + 26} text="0.150 − x ≈ 0.150" size={34} color={TEAL} at={K4.leaves + 10} out={K4.r195} />
			<DimG at={K4.r195} to={0.32}>
				<Sx x={X} y={Y} text={KA_A} size={S} color={INK} weight={700} at={-100} out={K4.drop + 30} />
				<Sx x={xx} y={Y} text={KA_B} size={S} color={INK} weight={700} at={-100} out={K4.drop + 30} />
				<g opacity={1 - slide} transform={`translate(0,${40 * slide})`}><Sx x={xx + bW} y={Y} text={KA_C} size={S} color={slide > 0.01 ? INK_SOFT : INK} weight={700} at={-100} /></g>
				<Sx x={xx + bW + cW} y={Y} text={KA_D + KA_E} size={S} color={INK} weight={700} at={-100} out={K4.drop + 30} />
				<Sx x={X} y={Y} text="x^{2} / 0.150 ≈ 1.3 × 10^{−5}" size={S} color={INK} weight={700} at={K4.drop + 30} />
			</DimG>
			<WLine x={X} y={B8.ly[1]} size={B8.ls} dim={K4.r14} items={P('x^{2} = 1.3 × 10^{−5} × 0.150', K4.then + 20, '= 1.95 × 10^{−6}', K4.r195)} />
			<WLine x={X} y={B8.ly[2]} size={B8.ls} items={P('x = √(1.95 × 10^{−6}) = 1.396 × 10^{−3}', K4.root, {t: '→ 1.4 × 10^{−3} mol/L', color: TEAL}, K4.r14)} />
			<KeptChip x={B8.kept.x} y={B8.kept.y} text="x = 1.4 × 10^{−3} mol/L" at={K4.r14 + 50} color={TEAL} size={36} />
			{void K4.taking}{void K4.module}
		</Overlay>
	);
};

// ---------- 5. Worked example 1: check, concentrations and pH ----------
const S5 = 'we1-check-ph';
const K5 = cues(sc(S5), {now: 'Now check that', z093: 'zero point nine three', under: 'well under the', five: 'five percent rule', so: 'So at equilibrium', hyd: 'hydronium and propanoate', acid: 'the acid is', ph: 'The pH is', r285: 'two point eight five', x: 'x has only', meter: 'matches the meter', fewer: 'Fewer than one', molecule: 'one molecule in'});
export const SceneWe1Check: React.FC = () => {
	const R = B8.ruler;
	const AX = 1380;
	const chipW = mw('pH = 2.85', 42, false, 700) + 42 * 1.4;
	return (
		<Overlay>
			<Board8 eCells={[
				{t: '≈ 0.150', at: -100, color: TEAL, swap: {t: '0.149', at: K5.acid + 10}, dim: K5.r285},
				{t: 'x', at: -100, swap: {t: '1.4 × 10^{−3}', at: K5.hyd + 30, color: PROTON_INK}},
				{t: 'x', at: -100, swap: {t: '1.4 × 10^{−3}', at: K5.hyd + 40, color: PROTON_INK}},
			]} eLit={[K5.hyd, K5.r285]} eDim={K5.molecule} />
			<StepAfter task={TASK_PH} text="Step 2 of 2: check and pH" at={6} />
			<DimG at={K5.molecule} to={0.35}><KeptChip x={B8.kept.x} y={B8.kept.y} text="x = 1.4 × 10^{−3} mol/L" at={-100} color={TEAL} size={36} /></DimG>
			<DimG at={K5.so} to={0.3}>
				<XRuler x={R.x} y={R.y} w={R.w} frac={0.0093} at={4} sliverAt={10} five={K5.under} fiveLabel="5%: rule of thumb" />
				<Sx x={R.x + R.w} y={R.y - 16} text="c = 0.150" size={32} color={INK} anchor="end" weight={700} at={12} />
				<Sx x={R.x} y={R.y + 76} text="1.396 × 10^{−3} ÷ 0.150 = 0.93%" size={36} color={PROTON_INK} weight={700} at={K5.z093} />
				<Tick x={R.x + mw('1.396 × 10^{−3} ÷ 0.150 = 0.93%', 36) + 40} y={R.y + 64} at={K5.z093 + 30} s={36} />
			</DimG>
			<DimG at={K5.molecule} to={0.35}>
				<WLine x={96} y={B8.ly[1]} size={B8.ls} items={P('pH = −log(1.396 × 10^{−3})', K5.ph, {t: '= 2.85', color: TEAL}, K5.r285)} />
			</DimG>
			<Note x={96} y={B8.ly[1] + 56} text="x: 2 s.f. (from Ka) → 2 d.p." size={32} color={INK_SOFT} hand={false} at={K5.x} out={K5.meter} />
			<KeptChip x={AX} y={750} text="pH = 2.85" at={K5.r285 + 20} color={TEAL} size={42} />
			<PHChip x={AX + chipW + 20} y={752} text="2.85 ✓" size={34} at={K5.meter} drop />
			<FieldLens cx={1690} cy={900} r={92} at={K5.molecule}>
				<Field cx={1690} cy={900} r={92} sp={34} seed={31} acidFrac={0.5} at={-1000} s={0.6} />
			</FieldLens>
			<Counter x={1690} y={1000} text="about 1 in 100" at={K5.molecule + 10} size={26} />
			<MistakeX x={96} y={930} text="[H_3O^{+}] = 0.150: pH 0.824" at={K5.molecule + 16} cross={K5.molecule + 40} note="weak: [H_3O^{+}] ≠ c" size={34} />
			{void K5.now}{void K5.five}{void K5.fewer}{void AChip}{void Fade}
		</Overlay>
	);
};
