import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, fracXW, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceW} from '../chem-m5-c06/ice';
import {HscTag} from '../chem-m5-g03a/board';
import {hold, sc} from './common';
import {AidChip, Dim, GasFlask, MINUS, MistakeChip, NO2BK, NOK, PLUS, PauseHold, Pieces, RingLine, SO2K, SO3K, TaskLine, TrapStrip, TypeBadge} from '../chem-m5-g03c/board';
import {TRAPS_D} from './s1';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const Q4_EQ: EqItem[] = [{k: 'sp', t: 'NO_2(g)', color: NO2BK}, {k: 'plus'}, {k: 'sp', t: 'SO_2(g)', color: SO2K}, {k: 'arrow'}, {k: 'sp', t: 'NO(g)', color: NOK}, {k: 'plus'}, {k: 'sp', t: 'SO_3(g)', color: SO3K}];
const EQ = {x: 96, y: 250, s: 46};
const PRIOR4 = {0: [-100], 1: [-100], 2: [-100], 3: [-100]};

/** The teal "K from part a" card; it can slide from where K was found to the top right. */
const KC_TO: [number, number] = [1300, 236];
const KCard: React.FC<{at: number; from?: [number, number]; moveAt?: number; pulse?: number}> = ({at, from = KC_TO, moveAt, pulse}) => {
	const f = useCurrentFrame();
	const u = moveAt === undefined ? 0 : prog(f, moveAt, 26);
	const x = from[0] + (KC_TO[0] - from[0]) * u, y = from[1] + (KC_TO[1] - from[1]) * u;
	const pu = pulse === undefined || f < pulse ? 0 : Math.max(0, Math.sin(Math.min(1, (f - pulse) / 30) * Math.PI));
	return (
		<Fade at={at}>
			<g transform={`translate(${x + 262},${y + 36}) scale(${1 + 0.08 * pu}) translate(${-x - 262},${-y - 36})`}>
				<rect x={x} y={y} width={524} height={72} rx={18} fill="#e5f2ec" stroke={pu > 0.05 ? AMBER : TEAL} strokeWidth={3.5 + 2 * pu} />
				<Sx x={x + 22} y={y + 48} text="K = 81.0 (460 °C), from part a" size={34} color={TEAL} at={at} />
			</g>
		</Fade>
	);
};

// ---------- 3a. Question 4, part a (pause) ----------
const CA = {x: 96, y: 330, w: 560, lh: 50};
const laY = (i: number) => CA.y + 108 + i * CA.lh;
const FLA = {x: 1500, y: 300, h: 480};
type AA = {five: number; n1: number; n2: number; n3: number; n4: number};
const AD: AA = {five: -100, n1: -100, n2: -100, n3: -100, n4: -100};
const ALINES = ['NO_2 0.100 mol', 'SO_2 0.200 mol', 'NO 0.900 mol', 'SO_3 1.80 mol'];
const ACOL = [NO2BK, SO2K, NOK, SO3K];
const Q4aCard: React.FC<{a?: AA}> = ({a = AD}) => (
	<GivensCard x={CA.x} y={CA.y} w={CA.w} h={394} at={a.five - 6} lh={CA.lh} lines={[
		{text: 'vessel: 5.00 L (460 °C)', at: a.five, size: 34},
		{text: 'at equilibrium:', at: a.five + 20, color: INK_SOFT, size: 30},
		...ALINES.map((t, i) => ({text: t, at: [a.n1, a.n2, a.n3, a.n4][i], color: ACOL[i], size: 34})),
	]} />
);
const TASK4A = '4(a) Calculate K.';
const Q = 'q4a-question';
const KQ = cues(sc(Q), {q: 'Question four has', no2: 'Nitrogen dioxide and', gases: 'all gases', t460: 'At 460', five: '5.00 litre', n1: '0.100 moles of', n2: '0.200 of S', n3: '0.900 of N', n4: '1.80 of S', parta: 'Part a calculate', pause: 'Pause here'});
export const SceneQ4aQuestion: React.FC = () => {
	const h = hold(Q);
	return (
		<>
			<Overlay>
				<TaskLine text={TASK4A} at={KQ.q} />
				<Sx x={560} y={150} text="4(b) uses your K" size={40} color={INK_SOFT} hand at={KQ.q + 30} opacity={0.7} />
				<HscTag at={10} />
				<TypeBadge text="Type 1: every equilibrium value given" at={KQ.q + 10} />
				<EqStrip items={Q4_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={KQ.no2} />
				<Q4aCard a={{five: KQ.five, n1: KQ.n1, n2: KQ.n2, n3: KQ.n3, n4: KQ.n4}} />
				<Tag x={96} y={738} w={330} text="illustrative amounts" at={KQ.t460 + 20} size={26} color={AMBER_INK} />
				<GasFlask x={FLA.x} y={FLA.y} h={FLA.h} at={KQ.five} brown={1} />
				<Sx x={FLA.x + 120} y={FLA.y + FLA.h + 40} text="at equilibrium, 460 °C" size={30} color={INK_SOFT} anchor="middle" hand at={KQ.t460 + 10} />
				<PauseHold h={h} at={KQ.pause} x={760} y={470} cx={1040} cy={640} />
				<TrapStrip labels={TRAPS_D} ticks={PRIOR4} hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Part a: divide first, then K ----------
const A = 'q4a-answer';
const KA = cues(sc(A), {div: 'Divide each amount', c1: ['0.0200', 1], c2: ['0.0400', 1], c3: ['0.180', 1], c4: ['0.360', 1], every: 'Every coefficient is one', kis: 'so K is N O', top: 'On top', r0648: '0.0648', under: 'Underneath', r0008: '0.000800', so: 'So K is', k81: 'K is 81.0'});
export const SceneQ4aAnswer: React.FC = () => {
	const conv = [{t: '0.0200', at: KA.c1}, {t: '0.0400', at: KA.c2}, {t: '0.180', at: KA.c3}, {t: '0.360', at: KA.c4}];
	const num: Term[][] = [[{t: 'NO', at: KA.kis + 6, color: NOK}, {t: 'SO_3', at: KA.kis + 12, color: SO3K}]];
	const den: Term[][] = [[{t: 'NO_2', at: KA.kis + 20, color: NO2BK}, {t: 'SO_2', at: KA.kis + 26, color: SO2K}]];
	const X = 1040;
	const kl = 'K = 0.0648 ÷ 0.000800 =';
	return (
		<>
			<Overlay>
				<TaskLine text={TASK4A} at={-100} />
				<Sx x={560} y={150} text="4(b) uses your K" size={40} color={INK_SOFT} hand at={-100} opacity={0.7} />
				<HscTag at={-100} />
				<TypeBadge text="Type 1: every equilibrium value given" at={-100} />
				<EqStrip items={Q4_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<Q4aCard />
				<Sx x={720} y={480} text="÷ 5.00 L" size={38} color={AMBER_INK} hand at={KA.div} />
				{conv.map((c, i) => (
					<g key={i}>
						<Arrow x1={CA.x + 28 + tw(ALINES[i], 34) + 14} y1={laY(i + 2) - 12} x2={710} y2={laY(i + 2) - 12} at={c.at - 8} color={AMBER_INK} width={3.5} dur={10} />
						<Sx x={720} y={laY(i + 2)} text={c.t} size={36} color={ACOL[i]} at={c.at} />
						<Sx x={720 + tw(c.t, 36) + 10} y={laY(i + 2)} text="mol/L" size={26} color={INK_SOFT} hand at={c.at + 4} />
					</g>
				))}
				{/* K expression and the working */}
				<FracX cx={1400} cy={420} size={48} num={num} den={den} barAt={KA.kis} prefix="K =" prefixAt={KA.kis} />
				<Sx x={1120} y={560} text="every coefficient is 1: no powers" size={32} color={AMBER_INK} hand at={KA.every} />
				<Dim at={KA.so}><Pieces x={X} y={650} size={38} items={[{t: 'top: 0.180 × 0.360 =', at: KA.top}, {t: '0.0648', at: KA.r0648}]} /></Dim>
				<Dim at={KA.so}><Pieces x={X} y={720} size={38} items={[{t: 'bottom: 0.0200 × 0.0400 =', at: KA.under}, {t: '0.000800', at: KA.r0008}]} /></Dim>
				<Sx x={X} y={806} text={kl} size={38} at={KA.so} />
				<Sx x={X + tw(kl, 38) + 12} y={810} text="81.0" size={62} color={TEAL} hand at={KA.k81} />
				<Tag x={X} y={830} w={330} text="K: no unit written" at={KA.k81 + 10} color={AMBER_INK} size={26} />
				<KCard at={KA.k81 + 30} from={[X, 900]} moveAt={KA.k81 + 60} />
				<TrapStrip labels={TRAPS_D} ticks={{...PRIOR4, 0: [-100, KA.div + 10]}} />
			</Overlay>
		</>
	);
};

// ---------- 4a. Part b: use that K (pause) ----------
const CB = {x: 96, y: 330, w: 600, lh: 52};
const lbY = (i: number) => CB.y + 108 + i * CB.lh;
const T4 = {x: 720, y: 330, s: 0.8};
const cell4 = (r: number, c: number) => iceCell(T4.x, T4.y, T4.s, r, c);
const FLB = {x: 1664, y: 380, h: 300};
const TASK4B = '4(b) Find [NO_2] at equilibrium.';
const BADGE4B = 'Type 3: K + start';
type BA = {same: number; two: number; m1: number; m2: number};
const BD: BA = {same: -100, two: -100, m1: -100, m2: -100};
const Q4bCard: React.FC<{a?: BA}> = ({a = BD}) => (
	<GivensCard x={CB.x} y={CB.y} w={CB.w} h={352} at={a.same - 6} lh={CB.lh} lines={[
		{text: 'same temperature: 460 °C', at: a.same, size: 34},
		{text: 'vessel: 2.00 L', at: a.two, size: 34},
		{text: 'start: NO_2 0.500 mol', at: a.m1, color: NO2BK, size: 34},
		{text: 'start: SO_2 0.500 mol', at: a.m2, color: SO2K, size: 34},
		{text: 'start: no NO, no SO_3', at: a.m2 + 20, size: 34},
	]} />
);
const q4Cols = (a: number) => [{name: 'NO_2', at: a, color: NO2BK}, {name: 'SO_2', at: a + 6, color: SO2K}, {name: 'NO', at: a + 12, color: NOK}, {name: 'SO_3', at: a + 18, color: SO3K}];
type R4 = {i: number; i0: number; c1: number; c2: number; e: number; fly?: boolean; sw?: number; lit?: [number, number]};
const R4D: R4 = {i: -100, i0: -100, c1: -100, c2: -100, e: -100};
const q4Rows = (t: R4) => ice(
	{at: -100, cells: [
		{text: '0.250', at: t.i, color: NO2BK, pre: {text: '0.500 ÷ 2.00', at: t.i - 30}, from: t.fly ? [CB.x + 400, lbY(2) - 12] : undefined},
		{text: '0.250', at: t.i + 8, color: SO2K, pre: {text: '0.500 ÷ 2.00', at: t.i - 22}, from: t.fly ? [CB.x + 400, lbY(3) - 12] : undefined},
		{text: '0', at: t.i0, color: NOK}, {text: '0', at: t.i0 + 6, color: SO3K}]},
	{at: -100, cells: [{text: '−x', at: t.c1, color: MINUS}, {text: '−x', at: t.c1 + 6, color: MINUS}, {text: '+x', at: t.c2, color: PLUS}, {text: '+x', at: t.c2 + 6, color: PLUS}]},
	{at: -100, lit: t.lit, cells: [
		{text: '0.250 − x', at: t.e, color: NO2BK, size: 40, swap: t.sw === undefined ? undefined : {text: '0.0250', at: t.sw}},
		{text: '0.250 − x', at: t.e + 6, color: SO2K, size: 40, swap: t.sw === undefined ? undefined : {text: '0.0250', at: t.sw + 8}},
		{text: 'x', at: t.e + 12, color: NOK, swap: t.sw === undefined ? undefined : {text: '0.225', at: t.sw + 16}},
		{text: 'x', at: t.e + 18, color: SO3K, swap: t.sw === undefined ? undefined : {text: '0.225', at: t.sw + 24}}]},
);
const Board4b: React.FC = () => (
	<>
		<TaskLine text={TASK4B} at={-100} />
		<HscTag at={-100} />
		<TypeBadge text={BADGE4B} at={-100} />
		<EqStrip items={Q4_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
		<Q4bCard />
		<GasFlask x={FLB.x} y={FLB.y} h={FLB.h} at={-100} brown={0.6} />
	</>
);
const PB = 'q4b-question';
const KB = cues(sc(PB), {pb: 'Part b', same: 'same temperature', m1: ['0.500 moles of', 1], m2: ['0.500 moles of', 2], two: '2.00 litre', find: 'Find the concentration', pause: 'Pause here'});
export const SceneQ4bQuestion: React.FC = () => {
	const h = hold(PB);
	void tw;
	return (
		<>
			<Overlay>
				<TaskLine text={TASK4B} at={KB.find} />
				<HscTag at={10} />
				<TypeBadge text={BADGE4B} at={KB.pb} />
				<EqStrip items={Q4_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={6} />
				<KCard at={-100} pulse={KB.same + 10} />
				<Q4bCard a={{same: KB.same, two: KB.two, m1: KB.m1, m2: KB.m2}} />
				<RingLine x={CB.x + 28} y={lbY(0)} text="same temperature: 460 °C" size={34} hand={false} at={KB.same + 6} seed={5} />
				<IceTable x={T4.x} y={T4.y} s={T4.s} outlineAt={KB.find - 20} cols={[0, 1, 2, 3].map(() => ({name: '', at: -100, color: INK}))} unit="" rows={ice({at: KB.find - 10, cells: []}, {at: KB.find - 6, cells: []}, {at: KB.find - 2, cells: []})} />
				<GasFlask x={FLB.x} y={FLB.y} h={FLB.h} at={KB.two} brown={0.6} />
				<Sx x={FLB.x + 75} y={FLB.y + FLB.h + 36} text="new 2.00 L flask" size={28} color={INK_SOFT} anchor="middle" hand at={KB.two + 10} />
				<PauseHold h={h} at={KB.pause} />
				<TrapStrip labels={TRAPS_D} ticks={{...PRIOR4, 0: [-100, -100]}} hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Same K, and a hidden perfect square ----------
const SQ = 'q4b-square';
const KS = cues(sc(SQ), {same: 'Same temperature so', samek: 'the same K', k81: '81.0 from part a', start: 'The start is 0.250', each: 'Each reactant changes', minus: 'minus x', plus: 'plus x', so: 'So K is x times', quad: 'quadratic formula', use: 'You can use it', look: 'look again', top: 'The top is', xsq: 'x squared', bottom: 'the bottom is', allsq: 'all squared', ps: 'perfect square', equal: 'started equal'});
export const SceneQ4bSquare: React.FC = () => {
	const C = {cx: 920, cy: 770, size: 44};
	const num: Term[][] = [[{t: 'x', br: false, at: KS.so + 10, out: KS.xsq, color: NOK}, {t: '×', br: false, at: KS.so + 14, out: KS.xsq}, {t: 'x', br: false, at: KS.so + 18, out: KS.xsq, color: SO3K}], [{t: 'x', p: '2', br: false, at: KS.xsq + 4, color: NOK}]];
	const den: Term[][] = [[{t: '0.250 − x', at: KS.so + 30, out: KS.allsq, color: NO2BK}, {t: '0.250 − x', at: KS.so + 40, out: KS.allsq, color: SO2K}], [{t: '(0.250 − x)', p: '2', br: false, at: KS.allsq + 4, color: NO2BK}]];
	const W = fracXW(num, den, C.size);
	const yd = C.cy + C.size * 1.1;
	return (
		<>
			<Overlay>
				<Board4b />
				<KCard at={-100} pulse={KS.samek} />
				<IceTable x={T4.x} y={T4.y} s={T4.s} cols={q4Cols(6)} rows={q4Rows({i: KS.start + 14, i0: KS.start + 30, c1: KS.minus, c2: KS.plus, e: KS.plus + 24, fly: true})} />
				<Chip x={96} y={700} w={330} text="ratio 1 : 1 : 1 : 1" size={32} at={KS.each} color={AMBER_INK} />
				{/* K in x: the top and the bottom are both squares */}
				<FracX cx={C.cx} cy={C.cy} size={C.size} num={num} den={den} barAt={KS.so} prefix="K =" prefixAt={KS.so} hold={W} />
				<Sx x={C.cx + W / 2 + 20} y={C.cy + 16} text="= 81.0" size={C.size} color={TEAL} at={KS.so + 48} />
				<Ring cx={C.cx} cy={yd - 14} rx={W / 2 + 10} ry={40} at={KS.allsq - 4} out={KS.ps + 40} color={AMBER} seed={7} />
				<Ring cx={CB.x + 200} cy={(lbY(2) + lbY(3)) / 2 - 12} rx={220} ry={54} at={KS.equal} color={AMBER} seed={8} />
				<Sx x={110} y={810} text="equal starts" size={36} color={AMBER_INK} hand at={KS.equal + 10} />
				{/* the quadratic is possible, but not needed */}
				<Fade at={KS.quad} out={KS.ps}>
					<Sx x={1330} y={760} text="80x^{2} − 40.5x + 5.0625 = 0" size={30} color={INK_SOFT} at={KS.quad} />
					<DrawPath d={`M1320,${762} L1790,${734}`} at={KS.look} dur={10} color="#c4432f" width={5} />
					<Sx x={1330} y={810} text="You can use it if you like, but HSC" size={26} color={INK_SOFT} hand at={KS.use} />
					<Sx x={1330} y={844} text="questions are written so you shouldn't need it" size={26} color={INK_SOFT} hand at={KS.use + 10} />
				</Fade>
				{/* the two-shortcut card: perfect square ticked */}
				<Fade at={KS.ps}>
					<rect x={1330} y={700} width={494} height={150} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1356} y={752} text="Perfect square → square root" size={34} color={TEAL} hand at={KS.ps} />
					<Tick x={1790} y={740} at={KS.ps + 10} s={32} />
					<Sx x={1356} y={810} text="Tiny K → drop x, then check" size={30} color={INK_SOFT} hand at={KS.ps + 6} opacity={0.5} />
				</Fade>
				<Pieces x={720} y={940} size={42} items={[{t: '(x ÷ (0.250 − x))^{2} = 81.0', at: KS.ps + 20, color: TEAL}]} />
				<TrapStrip labels={TRAPS_D} ticks={{...PRIOR4, 0: [-100, -100, KS.start + 10], 4: [KS.ps + 10], 5: [KS.samek + 6]}} />
			</Overlay>
		</>
	);
};

// ---------- 4c. Take the root, then answer what was asked ----------
const SV = 'q4b-solve';
const KV = cues(sc(SV), {root: 'Take the square root', r9: 'is 9.00', mult: 'Multiply both sides by the bottom', l1: 'x equals 2.25', add: 'Add 9 x', ten: 'ten x is 2.25', div: 'divide by ten', x225: 'x is 0.225', but: 'But the question asks', no2: ['N O two', 1], which: 'which is 0.250 minus', c025: '0.0250 moles per litre', check: 'Check', chk2: '0.225 squared over', is81: 'is 81', classic: 'The classic mistake', stop: 'stopping at x', xchange: 'x is the change'});
export const SceneQ4bSolve: React.FC = () => {
	const X = 720;
	const [nx, ny] = cell4(2, 0), [cx1, cy1] = cell4(1, 0);
	const out = KV.but + 4;
	const chk = 'check: 0.225^{2} ÷ 0.0250^{2} = 0.050625 ÷ 0.000625 =';
	return (
		<>
			<Overlay>
				<Board4b />
				<RingLine x={96} y={150} text={TASK4B} size={58} at={KV.no2} out={KV.c025 + 30} />
				<KCard at={-100} />
				<IceTable x={T4.x} y={T4.y} s={T4.s} cols={q4Cols(-100)} rows={q4Rows({...R4D, sw: KV.c025, lit: [KV.c025, KV.check]})} />
				<Ring cx={nx} cy={ny} rx={80} ry={36} at={KV.no2 + 6} out={KV.c025 + 40} color={AMBER} seed={3} />
				{/* the algebra */}
				<Fade at={-100} out={out}>
					<Pieces x={X} y={730} size={42} items={[{t: 'square root of both sides:', at: KV.root, color: AMBER_INK, hand: true, size: 32}, {t: 'x ÷ (0.250 − x) = 9.00', at: KV.r9}]} />
					<Sx x={X} y={774} text="positive root: concentrations are positive" size={26} color={TEAL} hand at={KV.r9 + 16} />
					<Sx x={X + 470} y={774} text="(−9.00 gives x = 0.281, more than the start)" size={24} color={INK_SOFT} hand at={KV.r9 + 30} />
					<Fade at={KV.mult} out={KV.add}><Sx x={X} y={826} text="multiply both sides by the bottom" size={30} color={AMBER_INK} hand at={KV.mult} /></Fade>
					<Dim at={KV.ten}><Pieces x={X} y={884} size={42} items={[{t: 'x = 9.00(0.250 − x)', at: KV.mult + 30}, {t: '= 2.25 − 9x', at: KV.l1}, {t: 'add 9x to both sides', at: KV.add, color: AMBER_INK, hand: true, size: 28}]} /></Dim>
					<Pieces x={X} y={952} size={42} items={[{t: '10x = 2.25', at: KV.ten}, {t: 'divide by 10:', at: KV.div, color: AMBER_INK, hand: true, size: 30}, {t: 'x = 0.225', at: KV.x225, color: TEAL}]} />
				</Fade>
				{/* answer what was asked, then check */}
				<Pieces x={X} y={740} size={40} items={[{t: '[NO_2] = 0.250 − x =', at: KV.which}, {t: '0.0250 mol/L', at: KV.c025, color: TEAL, size: 46}]} />
				<Tick x={X + tw('[NO_2] = 0.250 − x =', 40) + tw('0.0250 mol/L', 46) + 50} y={722} at={KV.c025 + 12} s={40} />
				<Pieces x={X} y={812} size={32} items={[{t: chk, at: KV.chk2}, {t: '81.0 = K', at: KV.is81, color: TEAL}]} />
				<MistakeChip x={X} y={850} text="[NO_2] = 0.225: that is x, the change" at={KV.stop} size={30} />
				<Ring cx={cx1} cy={cy1} rx={60} ry={34} at={KV.stop + 14} color={AMBER} seed={6} />
				<MistakeChip x={X} y={936} text="drop x: x^{2} ÷ 0.0625 = 81, x = 2.25 > 0.250 start: K is not tiny" at={KV.stop + 50} size={24} />
				<AidChip x={96} y={720} text="Answer what was asked." at={KV.xchange} size={36} />
				<TrapStrip labels={TRAPS_D} ticks={{...PRIOR4, 0: [-100, -100, -100], 4: [-100], 5: [-100]}} />
			</Overlay>
		</>
	);
};
void iceW; void Fade;
