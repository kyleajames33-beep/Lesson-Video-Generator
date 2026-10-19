// M6 C03 scenes 6 to 9: worked example 1 (the hook experiment). Three zones: the short task with a step chip, the
// equation strip, the givens card (grouped, units attached, assumptions grey); the working on the right, one stage
// per line, earlier lines dimming; kept result chips under the card; the calorimeter small with its readout.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {sc} from './common';
import {CAL_G} from './assets';
import {
	AChip, AMBER, AMBER_INK, BASE, BASE_INK, CalCup, EqLine, Fade, GCard, HEAT_INK, HTok, HeatOut, INK, INK_SOFT, LensFrame, Mistake, NumLine, Note, OHTok, Overlay, P, PROTON, PROTON_INK, Ring,
	Sx, TEAL, TaskLine, TempChip, WLine, WTok, calPt, calW, eq, lerp, mw, piecesW, pulseAt, readW, smooth, vis,
} from './parts';
import type {EItem, GLine, GMark} from './parts';

// ---------- board geometry (the same zones in both worked examples) ----------
export const BW = {task: {x: 96, y: 150, s: 52}, strip: {x: 96, y: 252, s: 38}, card: {x: 96, y: 300, w: 650, lh: 62, s: 34}, wx: 820, wy: [410, 510, 610, 710], ws: 42, keep: {x: 96, y: [660, 744]}, cal: {x: 1690, y: 700, h: 280}};
export const TASK = 'Find ΔH of neutralisation';
export const StepChip: React.FC<{n: number; text: string; at: number; out?: number}> = ({n, text, at, out}) => (
	<AChip x={BW.task.x + mw(TASK, BW.task.s, true, 700) + 46} y={106} text={`Step ${n} of 3: ${text}`} size={30} color={TEAL} at={at} out={out} hand={false} />
);
export const SmallCal: React.FC<{at: number; temp: number; out?: number; scale?: number; up?: number}> = ({at, temp, out, scale = 1, up}) => {
	const f = useCurrentFrame();
	const C = BW.cal;
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const cx = C.x + calW(C.h) / 2, cy = C.y + C.h / 2;
	const probe = calPt(C.x, C.y, C.h, CAL_G.probe);
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${scale}) translate(${-cx},${-cy})`}>
			<CalCup x={C.x} y={C.y} h={C.h} />
			<TempChip x={probe[0] - 16 - readW(30)} y={probe[1] - 6} from={temp} at={-100} size={30} up={up} />
		</g>
	);
};

// worked example 1 givens
const WE1_EQ = (at: number): EItem[] => eq(['HCl(aq)', '+', 'NaOH(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)'], at);
export const ASSUME = 'assume: 1.00 g/mL; c = 4.18 J g^{-1} °C^{-1}';
const G1 = (a: [number, number, number, number], marks: GMark[][] = [], lit: ([number, number] | undefined)[] = []): GLine[] => [
	{t: 'HCl: 50.0 mL, 1.00 mol/L', at: a[0], marks: marks[0], lit: lit[0]},
	{t: 'NaOH: 50.0 mL, 1.00 mol/L', at: a[1], marks: marks[1], lit: lit[1]},
	{t: 'T: 21.5 °C → 28.0 °C', at: a[2], marks: marks[2], lit: lit[2]},
	{t: ASSUME, at: a[3], grey: true},
];
const Board1: React.FC<{taskAt?: number; eqAt?: number; g?: [number, number, number, number]; marks?: GMark[][]; lit?: ([number, number] | undefined)[]; cal?: boolean; calOut?: number; calScale?: number; up?: number}> = ({taskAt = -100, eqAt = -100, g = [-100, -100, -100, -100], marks, lit, cal = true, calOut, calScale, up}) => (
	<>
		<TaskLine text={TASK} at={taskAt} size={BW.task.s} />
		<EqLine items={WE1_EQ(eqAt)} x={BW.strip.x} y={BW.strip.y} size={BW.strip.s} />
		<GCard x={BW.card.x} y={BW.card.y} w={BW.card.w} lh={BW.card.lh} size={BW.card.s} at={g[0] - 6} lines={G1(g, marks, lit)} />
		{cal ? <SmallCal at={-100} temp={28.0} out={calOut} scale={calScale} up={up} /> : null}
	</>
);
const Kept: React.FC<{i: number; text: string; at: number; out?: number; pulse?: number}> = ({i, text, at, out, pulse}) => {
	const f = useCurrentFrame();
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.08, 30);
	const x = BW.keep.x, y = BW.keep.y[i];
	return <g transform={`translate(${x},${y + 26}) scale(${s}) translate(${-x},${-(y + 26)})`}><AChip x={x} y={y} text={text} size={34} color={INK} hand={false} at={at} out={out} /></g>;
};

// ---------- 6. Worked example 1: the task and givens ----------
const W6 = 'we1-givens';
const K6 = cues(sc(W6), {hook: 'the hook experiment', fifty: 'Fifty millilitres each', hcl: 'hydrochloric acid and', naoh: 'sodium hydroxide, warming', warm: 'warming from', find: 'Find the enthalpy', heat: 'the heat', moles: 'the moles of water', divide: 'then divide'});
export const SceneWe1Givens: React.FC = () => {
	const f = useCurrentFrame();
	const lad = prog(f, 575, 20);
	const LX = 1180, LY = 430;
	return (
		<Overlay>
			<Board1 taskAt={K6.find} eqAt={K6.hook + 10} g={[K6.hcl, K6.naoh, K6.warm, K6.warm + 50]} />
			<g opacity={1 - lad}>
				<Sx x={LX} y={LY - 70} text="three steps" size={34} color={INK_SOFT} hand at={K6.heat - 10} />
				<Sx x={LX} y={LY} text="1   q = mcΔT" size={44} color={INK} weight={700} at={K6.heat} />
				<Sx x={LX} y={LY + 80} text="2   n(H_2O)" size={44} color={INK} weight={700} at={K6.moles} />
				<Sx x={LX} y={LY + 160} text="3   ΔH = −q ÷ n" size={44} color={INK} weight={700} at={K6.divide} />
			</g>
			<StepChip n={1} text="q" at={590} />
			{void K6.fifty}
		</Overlay>
	);
};

// ---------- 7. Step 1: the heat ----------
const W7 = 'we1-heat';
const K7 = cues(sc(W7), {mass: 'The mass is', hund: 'one hundred grams', every: 'everything in the cup', dT: 'Delta T is', six: 'six point five', soq: 'So q is', res: 'two thousand seven hundred', kj: 'two point seven one seven'});
export const SceneWe1Heat: React.FC = () => {
	const {wx, wy, ws} = BW;
	const keep = K7.kj + 60;
	return (
		<Overlay>
			<Board1 marks={[[{sub: '50.0 mL', at: K7.hund - 12, out: K7.dT}], [{sub: '50.0 mL', at: K7.hund - 4, out: K7.dT}], [{sub: '21.5 °C', at: K7.dT + 8, out: K7.soq}, {sub: '28.0 °C', at: K7.dT + 16, out: K7.soq}]]} />
			<StepChip n={1} text="q" at={-100} />
			<WLine x={wx} y={wy[0]} size={ws} dim={K7.dT} items={P('m = 50.0 + 50.0', K7.mass + 16, '= 100.0 g', K7.hund)} />
			<Mistake x={wx + 560} y={wy[0] - 50} text="m = 50.0 g" at={K7.every} out={K7.dT + 40} note="all the solution is warmed" size={34} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K7.kj} items={P('ΔT = 28.0 − 21.5', K7.dT + 14, '= 6.5 °C', K7.six)} />
			<WLine x={wx} y={wy[2]} size={ws} out={keep} items={P('q = 100.0 × 4.18 × 6.5', K7.soq + 16, '= 2717 J', K7.res, {t: '= 2.717 kJ', color: TEAL}, K7.kj)} />
			<Note x={wx} y={wy[2] + 58} text="keep the digits; round at the end" size={30} color={INK_SOFT} at={K7.kj + 16} out={keep} />
			<Kept i={0} text="q = 2.717 kJ" at={keep + 6} />
		</Overlay>
	);
};

// ---------- 8. Step 2: the moles of water ----------
const W8 = 'we1-moles';
const K8 = cues(sc(W8), {moles: 'Moles equals concentration', fifty: 'fifty millilitres is', acid: 'For the acid', res1: 'gives zero point zero five', naoh: 'the sodium hydroxide gives', same: 'the same amount', one: 'One hydrogen ion and', water: 'moles of water form'});
export const SceneWe1Moles: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const L = {cx: 1640, cy: 800, r: 120};
	const j = smooth(prog(f, K8.one + 20, 26));
	return (
		<Overlay>
			<Board1 marks={[[{sub: '50.0 mL, 1.00 mol/L', at: K8.acid, out: K8.naoh}], [{sub: '50.0 mL, 1.00 mol/L', at: K8.naoh, out: K8.one}]]} cal calOut={20} />
			<StepChip n={2} text="n(H_2O)" at={0} />
			<Kept i={0} text="q = 2.717 kJ" at={-100} />
			<WLine x={wx} y={wy[0]} size={ws} dim={K8.acid} items={P('n = c × V', K8.moles + 10, {t: '(V in L)', color: INK_SOFT}, K8.moles + 40)} />
			<Note x={wx} y={wy[0] + 52} text="50.0 mL = 0.0500 L" size={32} color={INK_SOFT} hand={false} at={K8.fifty} out={K8.acid + 20} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K8.water} items={P('n(H^{+}) = 1.00 × 0.0500', K8.acid + 20, '= 0.0500 mol', K8.res1)} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K8.water} items={P('n(OH^{-}) = 1.00 × 0.0500', K8.naoh, '= 0.0500 mol', K8.same)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K8.one - 6} out={K8.water + 60}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{j < 1 ? <><HTok x={lerp(L.cx - 60, L.cx - 16, j)} y={L.cy} /><OHTok x={lerp(L.cx + 60, L.cx + 18, j)} y={L.cy} /></> : <WTok x={L.cx} y={L.cy} s={1.2} />}
			</LensFrame>
			<Note x={L.cx} y={L.cy - L.r - 22} text="1 : 1" size={40} color={TEAL} anchor="middle" hand={false} at={K8.one + 6} out={K8.water + 60} />
			<Kept i={1} text="n(H_2O) = 0.0500 mol" at={K8.water + 10} />
			{void PROTON}
		</Overlay>
	);
};

// ---------- 9. Step 3: divide, sign and compare ----------
const W9 = 'we1-enthalpy';
const K9 = cues(sc(W9), {two: 'Two point seven one', res: 'is fifty four point three', sf: 'two significant figures', round: 'round to fifty four', rose: 'temperature rose', minus: 'minus fifty four', m57: 'minus fifty seven', loss: 'heat loss', escaped: 'some heat escaped'});
export const SceneWe1Enthalpy: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy, ws} = BW;
	const grow = 1 + 0.18 * smooth(prog(f, K9.loss - 6, 20));
	const C = BW.cal;
	const cx = C.x + calW(C.h) / 2, cy = C.y + C.h / 2;
	const sc2 = (p: [number, number]): [number, number] => [cx + (p[0] - cx) * grow, cy + (p[1] - cy) * grow];
	const lidR = sc2(calPt(C.x, C.y, C.h, CAL_G.lidR)), lidL = sc2(calPt(C.x, C.y, C.h, CAL_G.lidL)), wl = sc2(calPt(C.x, C.y, C.h, CAL_G.wallL)), wr = sc2(calPt(C.x, C.y, C.h, CAL_G.wallR));
	const sfW = mw('ΔT = 6.5 °C: 2 s.f.', 34, false, 700) + 34 * 1.4;
	const l1 = P('q ÷ n = 2.717 kJ ÷ 0.0500 mol', K9.two, '= 54.34 kJ/mol', K9.res);
	return (
		<Overlay>
			<Board1 marks={[[], [], [{sub: '21.5 °C', at: K9.sf, out: K9.rose}, {sub: '28.0 °C', at: K9.sf + 6, out: K9.rose}]]} calScale={grow} up={K9.rose} />
			<StepChip n={3} text="ΔH" at={0} />
			<Kept i={0} text="q = 2.717 kJ" at={-100} out={K9.res + 30} pulse={K9.two} />
			<Kept i={1} text="n(H_2O) = 0.0500 mol" at={-100} out={K9.res + 30} pulse={K9.two + 30} />
			<WLine x={wx} y={wy[0]} size={ws} dim={K9.minus} items={l1} />
			<AChip x={wx} y={wy[1] - 40} text="ΔT = 6.5 °C: 2 s.f." size={34} color={AMBER_INK} hand={false} at={K9.sf} out={K9.minus + 10} />
			<Ring cx={wx + sfW / 2} cy={wy[1] - 13} rx={sfW / 2 + 16} ry={44} at={K9.sf + 10} out={K9.minus + 10} color={AMBER} seed={3} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K9.minus} items={P('54.34 → 54 kJ/mol', K9.round)} />
			<Note x={1240} y={630} text="temperature up: ΔH negative" size={36} color={TEAL} at={K9.rose} out={K9.m57} />
			<AChip x={wx} y={wy[3] - 46} text="ΔH = −54 kJ/mol" size={48} color={TEAL} hand={false} at={K9.minus} />
			<NumLine x={wx + 20} y={890} w={640} lo={-60} hi={-50} at={K9.m57 - 6} ticks={[-60, -55, -50]} marks={[{v: -57, label: '−57', color: INK_SOFT, at: K9.m57}, {v: -54, label: '−54', color: TEAL, at: K9.m57 + 12}]} bracket={{a: -57, b: -54, text: 'less negative', at: K9.m57 + 24}} />
			<HeatOut pts={[[lidR[0] + 6, lidR[1], -0.5], [lidL[0] - 6, lidL[1], -2.64], [wl[0] - 6, wl[1], Math.PI], [wr[0] + 6, wr[1], 0]]} at={K9.loss} />
			<Note x={1640} y={1020} text="heat lost, so ΔT too small" size={36} color={HEAT_INK} anchor="end" at={K9.escaped} />
			{void lerp}{void piecesW}{void BASE}{void BASE_INK}{void PROTON_INK}{void INK}{void INK_SOFT}{void Fade}
		</Overlay>
	);
};
