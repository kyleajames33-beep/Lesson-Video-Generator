// M6 C03 scenes 6 to 9: worked example 1 (the hook experiment). Three zones: the short task with a step chip, the
// equation strip, the givens card (grouped, units attached, assumptions grey); the working on the right, one stage
// per line, earlier lines dimming; kept result chips under the card; the calorimeter beside them with its readout.
// Quality fix (6 Nov): the calorimeter is 390 px tall in the left column (was 280 px in the bottom-right corner), the
// working is 46 px (was 42), the strip 42 px and the givens 36 px. The task line and a faint preview of the three
// steps are on the board from the start of the givens scene; each step still lights on its cue.
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
import type {EItem, GLine, GMark, Piece} from './parts';

// ---------- board geometry (the same zones in both worked examples) ----------
export const BW = {task: {x: 96, y: 150, s: 52}, strip: {x: 96, y: 256, s: 42}, card: {x: 96, y: 300, w: 700, lh: 64, s: 36}, wx: 830, wy: [420, 530, 640, 750], ws: 46, keep: {x: 96, y: [672, 756]}, cal: {x: 500, y: 650, h: 390}};
/** Working-line size: 46 px, reduced only if a line would run past x 1824. */
export const wsFor = (items: Piece[], x = BW.wx) => Math.min(BW.ws, (BW.ws * (1824 - x)) / piecesW(items, BW.ws));
export const TASK = 'Find ΔH of neutralisation';
export const StepChip: React.FC<{n: number; text: string; at: number; out?: number}> = ({n, text, at, out}) => (
	<AChip x={BW.task.x + mw(TASK, BW.task.s, true, 700) + 46} y={106} text={`Step ${n} of 3: ${text}`} size={30} color={TEAL} at={at} out={out} hand={false} />
);
export const SmallCal: React.FC<{at: number; temp: number; out?: number; scale?: number; up?: number; from?: number; rise?: number}> = ({at, temp, out, scale = 1, up, from, rise}) => {
	const f = useCurrentFrame();
	const C = BW.cal;
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const cx = C.x + calW(C.h) / 2, cy = C.y + C.h / 2;
	const probe = calPt(C.x, C.y, C.h, CAL_G.probe);
	return (
		<g opacity={o} transform={`translate(${cx},${cy}) scale(${scale}) translate(${-cx},${-cy})`}>
			<CalCup x={C.x} y={C.y} h={C.h} />
			<TempChip x={probe[0] - 16 - readW(32)} y={probe[1] - 4} from={from ?? temp} to={from === undefined ? undefined : temp} rise={rise} dur={50} at={-100} size={32} up={up} />
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
const Board1: React.FC<{taskAt?: number; eqAt?: number; cardAt?: number; g?: [number, number, number, number]; marks?: GMark[][]; lit?: ([number, number] | undefined)[]; cal?: boolean; calOut?: number; calScale?: number; up?: number; calFrom?: number; calRise?: number}> = ({taskAt = -100, eqAt = -100, cardAt, g = [-100, -100, -100, -100], marks, lit, cal = true, calOut, calScale, up, calFrom, calRise}) => (
	<>
		<TaskLine text={TASK} at={taskAt} size={BW.task.s} />
		<EqLine items={WE1_EQ(eqAt)} x={BW.strip.x} y={BW.strip.y} size={BW.strip.s} />
		<GCard x={BW.card.x} y={BW.card.y} w={BW.card.w} lh={BW.card.lh} size={BW.card.s} at={cardAt ?? g[0] - 6} lines={G1(g, marks, lit)} />
		{cal ? <SmallCal at={-100} temp={28.0} out={calOut} scale={calScale} up={up} from={calFrom} rise={calRise} /> : null}
	</>
);
const Kept: React.FC<{i: number; text: string; at: number; out?: number; pulse?: number}> = ({i, text, at, out, pulse}) => {
	const f = useCurrentFrame();
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.08, 30);
	const x = BW.keep.x, y = BW.keep.y[i];
	return <g transform={`translate(${x},${y + 26}) scale(${s}) translate(${-x},${-(y + 26)})`}><AChip x={x} y={y} text={text} size={34} color={INK} hand={false} at={at} out={out} /></g>;
};
/** A step of the plan: faint from `pre`, full from `at`. */
const PlanLine: React.FC<{x: number; y: number; text: string; pre: number; at: number}> = ({x, y, text, pre, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, pre, 14) * (0.3 + 0.7 * prog(f, at, 12));
	return o > 0.01 ? <g opacity={o}><Sx x={x} y={y} text={text} size={50} color={INK} weight={700} at={-1000} /></g> : null;
};

// ---------- 6. Worked example 1: the task and givens ----------
const W6 = 'we1-givens';
const K6 = cues(sc(W6), {hook: 'the hook experiment', fifty: 'Fifty millilitres each', hcl: 'hydrochloric acid and', naoh: 'sodium hydroxide, warming', warm: 'warming from', find: 'Find the enthalpy', heat: 'the heat', moles: 'the moles of water', divide: 'then divide'});
export const SceneWe1Givens: React.FC = () => {
	const f = useCurrentFrame();
	const lad = prog(f, 575, 20);
	const LX = 960, LY = 470;
	return (
		<Overlay>
			<Board1 taskAt={6} eqAt={K6.hook + 10} g={[K6.hcl, K6.naoh, K6.warm, K6.warm + 50]} calFrom={21.5} calRise={K6.warm + 10} />
			<Note x={BW.cal.x - 24} y={BW.cal.y + 250} text="the hook" size={36} color={INK_SOFT} anchor="end" at={K6.hook} out={K6.hcl} />
			<Note x={BW.cal.x - 24} y={BW.cal.y + 296} text="experiment" size={36} color={INK_SOFT} anchor="end" at={K6.hook} out={K6.hcl} />
			<g opacity={1 - lad}>
				<Sx x={LX} y={LY - 90} text="three steps" size={40} color={INK_SOFT} hand at={K6.find} />
				<PlanLine x={LX} y={LY} text="1   q = mcΔT" pre={10} at={K6.heat} />
				<PlanLine x={LX} y={LY + 100} text="2   n(H_2O)" pre={16} at={K6.moles} />
				<PlanLine x={LX} y={LY + 200} text="3   ΔH = −q ÷ n" pre={22} at={K6.divide} />
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
	const {wx, wy} = BW;
	const keep = K7.kj + 60;
	const l3 = P('q = 100.0 × 4.18 × 6.5', K7.soq + 16, '= 2717 J', K7.res, {t: '= 2.717 kJ', color: TEAL}, K7.kj);
	return (
		<Overlay>
			<Board1 marks={[[{sub: '50.0 mL', at: K7.hund - 12, out: K7.dT}], [{sub: '50.0 mL', at: K7.hund - 4, out: K7.dT}], [{sub: '21.5 °C', at: K7.dT + 8, out: K7.soq}, {sub: '28.0 °C', at: K7.dT + 16, out: K7.soq}]]} />
			<StepChip n={1} text="q" at={-100} />
			<WLine x={wx} y={wy[0]} size={BW.ws} dim={K7.dT} items={P('m = 50.0 + 50.0', K7.mass + 16, '= 100.0 g', K7.hund)} />
			<Mistake x={wx + 600} y={wy[0] - 54} text="m = 50.0 g" at={K7.every} out={K7.dT + 40} note="all the solution is warmed" size={36} />
			<WLine x={wx} y={wy[1]} size={BW.ws} dim={K7.kj} items={P('ΔT = 28.0 − 21.5', K7.dT + 14, '= 6.5 °C', K7.six)} />
			<WLine x={wx} y={wy[2]} size={wsFor(l3)} out={keep} items={l3} />
			<Note x={wx} y={wy[2] + 62} text="keep the digits; round at the end" size={34} color={INK_SOFT} at={K7.kj + 16} out={keep} />
			<Kept i={0} text="q = 2.717 kJ" at={keep + 6} />
		</Overlay>
	);
};

// ---------- 8. Step 2: the moles of water ----------
const W8 = 'we1-moles';
const K8 = cues(sc(W8), {moles: 'Moles equals concentration', fifty: 'fifty millilitres is', acid: 'For the acid', res1: 'gives zero point zero five', naoh: 'the sodium hydroxide gives', same: 'the same amount', one: 'One hydrogen ion and', water: 'moles of water form'});
export const SceneWe1Moles: React.FC = () => {
	const f = useCurrentFrame();
	const {wx, wy} = BW;
	const L = {cx: 1560, cy: 880, r: 150};
	const j = smooth(prog(f, K8.one + 20, 26));
	return (
		<Overlay>
			<Board1 marks={[[{sub: '50.0 mL, 1.00 mol/L', at: K8.acid, out: K8.naoh}], [{sub: '50.0 mL, 1.00 mol/L', at: K8.naoh, out: K8.one}]]} />
			<StepChip n={2} text="n(H_2O)" at={0} />
			<Kept i={0} text="q = 2.717 kJ" at={-100} />
			<WLine x={wx} y={wy[0]} size={BW.ws} dim={K8.acid} items={P('n = c × V', K8.moles + 10, {t: '(V in L)', color: INK_SOFT}, K8.moles + 40)} />
			<Note x={wx} y={wy[0] + 56} text="50.0 mL = 0.0500 L" size={34} color={INK_SOFT} hand={false} at={K8.fifty} out={K8.acid + 20} />
			<WLine x={wx} y={wy[1]} size={BW.ws} dim={K8.water} items={P('n(H^{+}) = 1.00 × 0.0500', K8.acid + 20, '= 0.0500 mol', K8.res1)} />
			<WLine x={wx} y={wy[2]} size={BW.ws} dim={K8.water} items={P('n(OH^{-}) = 1.00 × 0.0500', K8.naoh, '= 0.0500 mol', K8.same)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K8.one - 6} out={K8.water + 60}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{j < 1 ? <><HTok s={1.3} x={lerp(L.cx - 70, L.cx - 20, j)} y={L.cy} /><OHTok s={1.3} x={lerp(L.cx + 70, L.cx + 22, j)} y={L.cy} /></> : <WTok x={L.cx} y={L.cy} s={1.5} />}
			</LensFrame>
			<Note x={L.cx} y={L.cy - L.r - 24} text="1 : 1" size={44} color={TEAL} anchor="middle" hand={false} at={K8.one + 6} out={K8.water + 60} />
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
	const {wx, wy} = BW;
	const grow = 1 + 0.08 * smooth(prog(f, K9.loss - 6, 20));
	const C = BW.cal;
	const cx = C.x + calW(C.h) / 2, cy = C.y + C.h / 2;
	const sc2 = (p: [number, number]): [number, number] => [cx + (p[0] - cx) * grow, cy + (p[1] - cy) * grow];
	const lidR = sc2(calPt(C.x, C.y, C.h, CAL_G.lidR)), lidL = sc2(calPt(C.x, C.y, C.h, CAL_G.lidL)), wl = sc2(calPt(C.x, C.y, C.h, CAL_G.wallL)), wr = sc2(calPt(C.x, C.y, C.h, CAL_G.wallR));
	const sfW = mw('ΔT = 6.5 °C: 2 s.f.', 36, false, 700) + 36 * 1.4;
	const l1 = P('q ÷ n = 2.717 kJ ÷ 0.0500 mol', K9.two, '= 54.34 kJ/mol', K9.res);
	return (
		<Overlay>
			<Board1 marks={[[], [], [{sub: '21.5 °C', at: K9.sf, out: K9.rose}, {sub: '28.0 °C', at: K9.sf + 6, out: K9.rose}]]} calScale={grow} up={K9.rose} />
			<StepChip n={3} text="ΔH" at={0} />
			<Kept i={0} text="q = 2.717 kJ" at={-100} out={K9.res + 30} pulse={K9.two} />
			<Kept i={1} text="n(H_2O) = 0.0500 mol" at={-100} out={K9.res + 30} pulse={K9.two + 30} />
			<WLine x={wx} y={wy[0]} size={wsFor(l1)} dim={K9.minus} items={l1} />
			<AChip x={wx} y={wy[1] - 42} text="ΔT = 6.5 °C: 2 s.f." size={36} color={AMBER_INK} hand={false} at={K9.sf} out={K9.minus + 10} />
			<Ring cx={wx + sfW / 2} cy={wy[1] - 13} rx={sfW / 2 + 16} ry={46} at={K9.sf + 10} out={K9.minus + 10} color={AMBER} seed={3} />
			<WLine x={wx} y={wy[2]} size={BW.ws} dim={K9.minus} items={P('54.34 → 54 kJ/mol', K9.round)} />
			<Note x={1310} y={wy[2] - 6} text="temperature up: ΔH negative" size={38} color={TEAL} at={K9.rose} out={K9.m57} />
			<AChip x={wx} y={wy[3] - 46} text="ΔH = −54 kJ/mol" size={50} color={TEAL} hand={false} at={K9.minus} />
			<NumLine x={wx + 20} y={920} w={700} lo={-60} hi={-50} at={K9.m57 - 6} ticks={[-60, -55, -50]} marks={[{v: -57, label: '−57', color: INK_SOFT, at: K9.m57}, {v: -54, label: '−54', color: TEAL, at: K9.m57 + 12}]} bracket={{a: -57, b: -54, text: 'less negative', at: K9.m57 + 24}} />
			<HeatOut pts={[[lidR[0] + 6, lidR[1], -0.5], [lidL[0] - 6, lidL[1], -2.64], [wl[0] - 6, wl[1], Math.PI], [wr[0] + 6, wr[1], 0]]} at={K9.loss} />
			<Note x={96} y={900} text="heat lost," size={36} color={HEAT_INK} at={K9.escaped} />
			<Note x={96} y={948} text="so ΔT too small" size={36} color={HEAT_INK} at={K9.escaped + 6} />
			{void lerp}{void BASE}{void BASE_INK}{void PROTON_INK}{void INK}{void Fade}
		</Overlay>
	);
};
