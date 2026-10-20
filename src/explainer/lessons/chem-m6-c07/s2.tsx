// M6 C07 scenes 5 to 9: Kw on water's own equilibrium; Kw and temperature; the base's pH and pOH; worked example 2
// (a base that releases two hydroxide ions, and the sulfuric acid condition); dilution.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {
	AChip, AMBER, BASE_INK, CondChip, DimG, EqLine, Fade, FlaskFill, FullMeter, GCard, INK, INK_SOFT, IonBars, KeptChip, LabelBeaker, LadderRows, LensFrame, MeetPair, MistakeX, Note, OHg, OpGlow,
	Overlay, P, PHTrack, PROTON_INK, PipettePlate, Ring, ShrinkAt, StepAfter, Sx, TEAL, TaskLine, Tick, VolBox, WLine, clamp01, eSpan, eq, flaskPt, fullMeterW, keys, lerp, mw, smooth, subX, vis,
} from './parts';
import type {Piece} from './parts';
import {Tray} from '../chem-m5-c10/parts';
import {FLASK_G} from './assets';
import {BW, TASK_PH} from './s1';

// ---------- the water strip shared by scenes 5 and 6 ----------
const WS = 48;
const wItems = (at: number, x0: number) => ({items: eq(['H_2O(l)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'OH^{-}(aq)'], at, at), x: x0});

// ---------- 5. Kw ----------
const S5 = 'kw';
const K5 = cues(sc(S5), {base: 'Now the base', last: 'In the last video', equal: 'making equal amounts', leaves: 'leaves water out', kw: 'K w equals', val: 'one point zero times', pure: 'In pure water', seven: 'ten to the minus seven', ph7: 'pH seven', every: 'every watery solution', add: 'add hydroxide', shifts: 'shifts back', using: 'using up hydronium', again: 'product is ten'});
export const SceneKw: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 96, SY = 250;
	const {items} = wItems(K5.last, SX);
	const w0 = eSpan(items, 0, WS, SX), w2 = eSpan(items, 2, WS, SX);
	const shrink = smooth(prog(f, K5.every, 22));
	const hT = keys([[0, 190], [K5.using, 190], [K5.again + 16, 12]]);
	const hV = keys([[0, 190], [K5.add, 190], [K5.add + 40, 400]]);
	const meets: [number, number][] = [[K5.shifts, 0], [K5.shifts + 26, 1], [K5.using + 10, 2]];
	return (
		<Overlay>
			<DimG at={K5.val + 30} to={0.35} undim={K5.every}>
				<DimG at={K5.again + 20} to={0.45}>
					<OpGlow items={items} i={3} size={WS} x={SX} y={SY} at={K5.shifts} len={70} color="#8e6bbf" />
					<EqLine items={items} x={SX} y={SY} size={WS} />
				</DimG>
			</DimG>
			<g transform={`translate(${SX},${420}) scale(${1 - 0.36 * shrink}) translate(${-SX},${-420})`}>
				<Sx x={SX} y={420} text="Kw = [H_3O^{+}][OH^{-}]" size={58} color={INK} weight={800} at={K5.kw} />
				<Sx x={SX + mw('Kw = [H_3O^{+}][OH^{-}]', 58, false, 800) + 24} y={420} text="= 1.0 × 10^{−14} at 25 °C" size={50} color={TEAL} weight={800} at={K5.val} />
			</g>
			<Fade at={K5.kw - 4} out={K5.val + 24}>
				<Tray x={SX} y={460} w={360} at={K5.kw - 4} label="left out of Kw" items={[{t: 'H_2O', at: K5.kw + 4, from: [w0.cx, SY - 16]}, {t: 'H_2O', at: K5.kw + 12, from: [w2.cx, SY - 16]}]} size={40} />
			</Fade>
			<LabelBeaker x={150} y={680} h={240} at={K5.last} lines={[{t: 'pure water, 25 °C', at: K5.pure, out: K5.every}, {t: 'sodium hydroxide solution', at: K5.every + 6}]} size={30} tint={'#cfe1f0'} />
			<IonBars x={1310} base={870} gap={210} bw={100} hT={hT} hV={hV} at={K5.seven} valT={{t: '1.0 × 10^{−7}', at: K5.seven + 10, out: K5.every}} valV={{t: '1.0 × 10^{−7}', at: K5.seven + 10, out: K5.every}} />
			<Note x={1460} y={600} text="neutral: equal; pH 7.00" size={38} color={TEAL} anchor="middle" at={K5.ph7} out={K5.every} />
			<Fade at={K5.add} out={K5.again + 40}>
				{meets.map(([t, i]) => <MeetPair key={i} a={[900 + i * 40, 560 + i * 90]} b={[1060 + i * 40, 560 + i * 90]} at={t} s={1.3} />)}
			</Fade>
			<Note x={980} y={500} text="H_3O^{+} + OH^{-} → H_2O" size={30} color={INK_SOFT} anchor="middle" at={K5.shifts} out={K5.again + 40} />
			<AChip x={1110} y={950} text="[H_3O^{+}] × [OH^{-}] = 1.0 × 10^{−14}" size={34} color={TEAL} hand={false} at={K5.again + 10} />
			{void K5.base}{void K5.equal}{void K5.leaves}{void lerp}{void clamp01}
		</Overlay>
	);
};

// ---------- 6. Kw and temperature ----------
const S6 = 'kw-temperature';
const K6 = cues(sc(S6), {only: 'That value is only', absorbs: 'absorbs heat', warming: 'so warming pushes', right: 'equilibrium right', grows: 'K w grows', t37: 'At thirty seven', r681: 'six point eight one', t60: 'at sixty', r651: 'six point five one', neutral: "It's still neutral", because: 'because its hydronium', so: 'So pH seven means'});
export const SceneKwTemp: React.FC = () => {
	const SX = 96 + 190, SY = 250;
	const {items} = wItems(-100, SX);
	const lit = (i: number, f: number) => i === 1 ? vis(f, 8, K6.grows, 12) : i === 2 ? vis(f, K6.r681 - 6, K6.t60, 12) : i === 3 ? vis(f, K6.r651 - 6, K6.neutral, 12) : 0;
	const rows = [
		{temp: '10 °C', kw: '2.9 × 10^{−15}', ph: '7.27', at: K6.grows + 4},
		{temp: '25 °C', kw: '1.0 × 10^{−14}', ph: '7.00', at: 6},
		{temp: '37 °C', kw: '2.4 × 10^{−14}', ph: '6.81', at: K6.grows + 12},
		{temp: '60 °C', kw: '9.6 × 10^{−14}', ph: '6.51', at: K6.grows + 20},
	];
	const LX = 160, LY = 430;
	return (
		<Overlay>
			<DimG at={K6.neutral} to={0.3}>
				<Sx x={96} y={SY} text="heat +" size={WS} color="#b5561a" weight={800} at={K6.absorbs} />
				<OpGlow items={items} i={3} size={WS} x={SX} y={SY} at={K6.warming} len={60} color={AMBER} />
				<EqLine items={items} x={SX} y={SY} size={WS} />
			</DimG>
			<Note x={SX + 300} y={SY + 74} text="warmer: shifts right, Kw bigger" size={38} color="#b5561a" at={K6.warming + 10} out={K6.neutral} />
			<LadderRows x={LX} y={LY} rows={rows} lit={lit} dimAll={K6.neutral} keep={3} head={4} />
			<IonBars x={1250} base={760} gap={270} bw={90} hT={() => 140} hV={() => 140} at={K6.neutral + 6} valT={{t: '3.1 × 10^{−7}', at: K6.neutral + 14}} valV={{t: '3.1 × 10^{−7}', at: K6.neutral + 14}} eq={{at: K6.neutral + 24}} size={30} />
			<Sx x={1250 + 225} y={560} text="pure water, 60 °C" size={30} color={INK_SOFT} anchor="middle" hand at={K6.neutral + 10} />
			<MistakeX x={LX} y={820} text="pH below 7, so acidic" at={K6.neutral + 30} cross={K6.because + 20} note="neutral means equal, not pH 7" size={36} />
			{void K6.only}{void K6.right}{void K6.t37}{void K6.so}
		</Overlay>
	);
};
/** Row 4 (60 °C) stays bright after the others dim. */
void LadderRows;

// ---------- 7. The base's pH, and pOH ----------
const S7 = 'base-poh';
const K7 = cues(sc(S7), {back: 'Back to sodium', strong: "It's strong, so", hyd: 'the hydroxide is zero', z010: 'zero point one zero', h3o: 'the hydronium is ten', thirteen: 'minus thirteen', ph13: 'pH thirteen', quick: 'For a quicker', use: 'use pOH', taking: 'Taking the negative', plus: 'pH plus pOH', so: 'So for a base', subtract: 'subtract from fourteen'});
export const SceneBasePoh: React.FC = () => {
	const X = 96, S = 44;
	const MX = 1380, MY = 240, MH = 330;
	const mw0 = fullMeterW(MH);
	const lab = 'sodium hydroxide, 0.10 mol/L';
	const u = subX(lab, '0.10 mol/L', 30, 600);
	const lx = MX + mw0 / 2 - mw(lab, 30, false, 600) / 2;
	return (
		<Overlay>
			<DimG at={K7.quick} to={0.3}>
				<WLine x={X} y={300} size={S} items={P('[OH^{-}] =', K7.hyd, '0.10 mol/L', K7.z010)} />
				<WLine x={X} y={390} size={S} items={P('[H_3O^{+}] = 1.0 × 10^{−14} ÷ 0.10', K7.h3o, '= 1.0 × 10^{−13} mol/L', K7.thirteen)} />
				<WLine x={X} y={480} size={S} items={P({t: 'pH = 13.00', color: TEAL}, K7.ph13)} />
				<FullMeter x={MX} y={MY} h={MH} at={-100} read={() => '13.00'} pulse={K7.ph13} />
				<Sx x={lx} y={MY + MH + 44} text={lab} size={30} color={INK} weight={600} at={4} />
				<Under2 x1={lx + u.x1} x2={lx + u.x2} y={MY + MH + 54} at={K7.z010} />
				<Fade at={-100} out={K7.use}>
					<Note x={MX + 30} y={MY + MH + 120} text="H_3O^{+}?" size={40} color={PROTON_INK} at={K7.ph13 - 4} />
					<Tick x={MX + 200} y={MY + MH + 106} at={K7.ph13 + 14} s={36} />
				</Fade>
			</DimG>
			<Sx x={X} y={640} text="pOH = −log_10[OH^{-}]" size={48} color={BASE_INK} weight={800} at={K7.use} />
			<DimG at={K7.subtract} to={0.35}>
				<Sx x={X} y={740} text="Kw = [H_3O^{+}][OH^{-}] = 1.0 × 10^{−14}" size={42} color={INK} weight={700} at={K7.taking} />
			</DimG>
			<Sx x={X} y={850} text="−log of both sides:" size={34} color={INK_SOFT} weight={600} at={K7.taking + 24} />
			<Sx x={X + mw('−log of both sides:', 34, false, 600) + 24} y={850} text="pH + pOH = 14.00 (25 °C)" size={60} color={TEAL} weight={800} at={K7.plus} />
			<AChip x={1120} y={700} text="[OH^{-}] → pOH → pH = 14.00 − pOH" size={36} color={INK} hand={false} at={K7.subtract} />
			{void K7.back}{void K7.strong}{void K7.so}
		</Overlay>
	);
};
const Under2: React.FC<{x1: number; x2: number; y: number; at: number}> = ({x1, x2, y, at}) => (
	<Fade at={at}><path d={`M${x1},${y} C${x1 + (x2 - x1) * 0.3},${y + 4} ${x1 + (x2 - x1) * 0.7},${y - 2} ${x2},${y + 2}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" /></Fade>
);

// ---------- 8. Worked example 2: a base that releases two hydroxide ions ----------
const S8 = 'we2-strong-base';
const K8 = cues(sc(S8), {cal: 'Calcium hydroxide at', each: 'Each formula unit', two: 'releases two hydroxide', hyd: 'the hydroxide is zero', poh: 'The pOH is', r210: 'two point one zero', then: 'Then the pH', r1190: 'eleven point nine zero', stop: 'Stopping at the', slip: 'classic slip', cant: "can't have a pH", sulf: 'Sulfuric acid is', first: 'only its first', assume: 'assume both do', only: 'only then is', twice: 'twice the'});
export const SceneWe2: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const items = eq(['Ca(OH)_2(aq)', '->', 'Ca^{2+}(aq)', '+', '2OH^{-}(aq)'], 8);
	const s0 = eSpan(items, 0, BW.strip.s, BW.strip.x);
	const sub = subX('Ca(OH)_2(aq)', '_2', BW.strip.s);
	const r2x = s0.x1 + (sub.x1 + sub.x2) / 2, r2y = BW.strip.y - 2;
	const drop = smooth(prog(f, K8.two + 12, 26));
	const dimBoard = K8.hyd + 60;
	const l2: Piece[] = P('pOH = −log(0.0080)', K8.poh, '= 2.097', K8.r210, {t: '→ 2.10', color: BASE_INK}, K8.r210 + 22);
	return (
		<Overlay>
			<DimG at={K8.sulf} to={0.3}>
				<TaskLine text={TASK_PH} at={2} size={BW.task.s} />
			</DimG>
			<DimG at={dimBoard} to={0.35}>
				<EqLine items={items} x={BW.strip.x} y={BW.strip.y} size={BW.strip.s} />
				<GCard x={BW.card.x} y={BW.card.y} w={BW.card.w} lh={BW.card.lh} size={BW.card.s} at={K8.cal + 14} lines={[
					{t: 'Ca(OH)_2: 0.0040 mol/L (strong)', at: K8.cal + 20, marks: [{sub: '0.0040 mol/L', at: K8.hyd, out: dimBoard + 20}]},
					{t: '25 °C', at: K8.cal + 30, grey: true},
				]} />
			</DimG>
			<Ring cx={r2x} cy={r2y} rx={18} ry={24} at={K8.two} out={dimBoard} color={AMBER} seed={4} />
			<Fade at={K8.two + 10} out={dimBoard + 10}>
				<OHg x={lerp(r2x, r2x - 40, drop)} y={lerp(r2y + 10, r2y + 70, drop)} s={1.4} />
				<OHg x={lerp(r2x, r2x + 40, drop)} y={lerp(r2y + 10, r2y + 70, drop)} s={1.4} />
			</Fade>
			<DimG at={K8.sulf} to={0.3}>
				<WLine x={wx} y={wy[0]} size={ws} dim={K8.r210} items={P('[OH^{-}] = 2 × 0.0040', K8.two + 30, '= 0.0080 mol/L', K8.hyd + 34)} />
				<WLine x={wx} y={wy[1]} size={ws} dim={K8.r1190} items={l2} />
				<Note x={wx} y={wy[1] + 52} text="2 s.f. → 2 d.p." size={30} color={INK_SOFT} hand={false} at={K8.r210 + 30} out={K8.then} />
				<WLine x={wx} y={wy[2]} size={ws} items={P('pH = 14.00 − 2.10', K8.then + 10, {t: '= 11.90', color: TEAL}, K8.r1190)} />
			</DimG>
			<KeptChip x={BW.card.x} y={540} text="pH = 11.90" at={K8.r1190 + 30} color={TEAL} size={40} />
			<MistakeX x={wx} y={wy[2] + 50} text="pH = 2.10" at={K8.stop} cross={K8.slip + 10} out={K8.sulf} note="that's the pOH; a base has pH above 7" size={36} />
			<CondChip x={wx} y={720} w={1000} at={K8.first - 10} lh={58} lines={[
				{t: 'H_2SO_4: first H^{+} complete, second only partly.', at: K8.first, size: 34},
				{t: 'Only if the question says assume both H^{+} are released completely:', at: K8.assume, size: 30, color: INK_SOFT},
				{t: '[H^{+}] = 2 × c', at: K8.only, size: 40, color: TEAL, weight: 800},
			]} />
			{void K8.each}{void K8.cant}{void K8.twice}{void StepAfter}{void AChip}
		</Overlay>
	);
};

// ---------- 9. Dilution ----------
const S9 = 'dilution';
const K9 = cues(sc(S9), {adding: 'Adding water', moles: 'moles stay the same', vol: 'only the volume grows', tf: 'Twenty five millilitres', holds: 'holds zero point', made: 'Made up to', z0100: "that's zero point zero", r2000: 'two point zero zero', three: 'three decimal places', fig: 'significant figures', keep: 'Keep diluting', toward: 'toward seven', never: 'never past it', water: 'water supplies its'});
export const SceneDilution: React.FC = () => {
	const f = useCurrentFrame();
	const FX = 520, FY = 330, FH = 520;
	const neck = flaskPt(FX, FY, FH, 1024, FLASK_G.cropTop + 10);
	const mv = smooth(prog(f, 14, 40));
	const tip: [number, number] = [lerp(300, neck[0] - 4, mv), lerp(880, neck[1] - 6, mv) - Math.sin(mv * Math.PI) * 120];
	const rot = lerp(-13.8, 0, mv);
	const pipOut = prog(f, K9.moles - 10, 20);
	const level = keys([[0, 1852], [60, 1852], [110, 1790], [K9.moles, 1790], [K9.vol + 24, FLASK_G.ring]]);
	const thumbs = smooth(prog(f, K9.tf, 26));
	const k = 4.47;
	const grow = smooth(prog(f, K9.moles + 10, K9.vol + 30 - K9.moles - 10));
	const L = {cx: 1320, cy: 560, r: 300};
	const pts: [number, number][] = [[-0.6, -0.5], [0.1, -0.7], [0.65, -0.35], [-0.2, 0.05], [0.45, 0.3], [-0.7, 0.45], [0.05, 0.7], [0.75, 0.75]];
	const S = 42, X = 96;
	const fig = K9.fig + 20;
	const mval = keys([[0, 0.699], [fig + 20, 0.699], [fig + 56, 2.0], [K9.toward, 2.0], [K9.toward + 20, 3], [K9.toward + 40, 4], [K9.toward + 58, 5], [K9.toward + 74, 6], [K9.toward + 88, 6.45], [K9.toward + 100, 6.62], [K9.toward + 112, 6.72]]);
	return (
		<Overlay>
			<TaskLine text="Find the pH after dilution" at={K9.tf} size={BW.task.s} />
			<g opacity={1 - 0.55 * thumbs} transform={`translate(${1150 * thumbs},${-170 * thumbs}) translate(500,600) scale(${1 - 0.55 * thumbs}) translate(-500,-600)`}>
				<FlaskFill x={FX} y={FY} h={FH} level={level} />
				<Sx x={FX + 103} y={FY + FH + 50} text="500.0 mL" size={34} color={INK} anchor="middle" weight={700} at={6} />
				<g opacity={1 - pipOut}>
					<PipettePlate tipX={tip[0]} tipY={tip[1]} h={560} rot={rot} />
				</g>
				<Fade at={2} out={K9.moles - 10}>
					<Sx x={110} y={420} text="25.0 mL of" size={32} color={INK} weight={600} at={-1000} />
					<Sx x={110} y={462} text="0.200 mol/L HCl" size={32} color={INK} weight={600} at={-1000} />
				</Fade>
				<Sx x={FX + 103} y={FY - 30} text="25.0 mL of 0.200 mol/L HCl, made up to the mark" size={30} color={INK_SOFT} anchor="middle" hand at={K9.moles + 10} out={K9.tf} />
			</g>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K9.moles - 6} out={K9.tf + 10}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f3f8fb" />
				<VolBox cx={L.cx} cy={L.cy} w={() => 120 * (1 + (k - 1) * grow)} h={() => 86 * (1 + (k - 1) * grow)} pts={pts} kind="H" at={-100} s={1.15} />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 50} text="same moles, bigger volume" size={40} color={TEAL} anchor="middle" at={K9.moles + 20} out={K9.tf} />
			<WLine x={X} y={300} size={S} dim={K9.z0100} items={P('n(H_3O^{+}) = 0.200 × 0.0250', K9.tf + 24, '= 0.00500 mol', K9.holds + 20)} />
			<WLine x={X} y={390} size={S} dim={fig} items={P('c = 0.00500 mol ÷ 0.5000 L', K9.made, '= 0.0100 mol/L', K9.z0100 + 12)} />
			<WLine x={X} y={480} size={S} items={P('pH = −log(0.0100)', K9.r2000 - 24, {t: '= 2.000', color: TEAL}, K9.r2000)} />
			<PHTrack x={200} y={700} w={1100} at={fig} ghost={{v: 0.699, label: 'before 0.699', at: fig + 6}} mark={{v: mval, at: fig + 10, label: fr => (fr < K9.toward ? '2.000' : '')}} wall={K9.toward + 70} bracket={{a: 0.699, b: 2.0, text: '× 20 dilution: +1.301 (= log 20)', at: fig + 60, out: K9.toward}} />
			<MistakeX x={200} y={850} text="dilute enough and it passes 7" at={K9.toward + 40} cross={K9.never + 12} note="water's own H_3O^{+}" size={36} />
			{void K9.adding}{void K9.three}{void K9.keep}{void K9.water}{void clamp01}
		</Overlay>
	);
};
void Heading; void KeptChip; void IonBars;
