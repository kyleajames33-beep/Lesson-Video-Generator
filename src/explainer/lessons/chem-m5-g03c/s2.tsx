import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, PAPER, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, EqStrip, Fade, FracX, GivensCard, Overlay, Sx, Tag, TEAL, Tick, eqLayout, fracXW, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {CheckRuler} from '../chem-m5-c06b/parts';
import {CrossedGhost} from '../chem-m5-c06a/types';
import {HscTag} from '../chem-m5-g03a/board';
import {hold, sc} from './common';
import {AidChip, CO2K, COK, Dim, FEK, FEOK, FeVessel, MINUS, MistakeChip, PLUS, PauseHold, Pieces, piecesW, RingLine, TaskLine, TrapStrip, TypeBadge} from './board';
import {TRAPS_C} from './s1';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const Q1_EQ: EqItem[] = [{k: 'sp', t: 'FeO(s)', color: FEOK}, {k: 'plus'}, {k: 'sp', t: 'CO(g)', color: COK}, {k: 'arrow'}, {k: 'sp', t: 'Fe(s)', color: FEK}, {k: 'plus'}, {k: 'sp', t: 'CO_2(g)', color: CO2K}];
const EQ = {x: 96, y: 250, s: 46};
const q1Pos = eqLayout(Q1_EQ, EQ.s, EQ.x).pos;
const CARD = {x: 96, y: 330, w: 560, lh: 52};
const lineY = (i: number) => CARD.y + 108 + i * CARD.lh;
const T1 = {x: 700, y: 330, s: 0.85};
const cell1 = (r: number, c: number) => iceCell(T1.x, T1.y, T1.s, r, c);
const V1 = {x: 1460, y: 300, h: 480};
const TASK1 = 'Find the mass of iron at equilibrium.';
const q1Card = (a: {k: number; two: number; ex: number; mol: number; none: number; m: number}) => [
	{text: 'K = 0.50 (about 800 °C)', at: a.k, color: TEAL, size: 36},
	{text: 'vessel: 2.00 L', at: a.two, size: 36},
	{text: 'FeO: solid, in excess', at: a.ex, color: FEOK, size: 36},
	{text: 'start: CO 0.600 mol', at: a.mol, color: COK, size: 36},
	{text: 'start: no Fe, no CO_2', at: a.none, size: 36},
	{text: 'Fe: 55.85 g/mol (data sheet)', at: a.m, color: INK_SOFT, size: 32},
];
const CARD_DONE = {k: -100, two: -100, ex: -100, mol: -100, none: -100, m: -100};
const Q1Card: React.FC<{a?: typeof CARD_DONE}> = ({a = CARD_DONE}) => <GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={408} at={Math.min(a.k, a.two) - 6} lh={CARD.lh} lines={q1Card(a)} />;
/** Greys FeO and Fe in the equation strip (solids stay out of K). */
const GreySolids: React.FC<{at: number; tag?: boolean}> = ({at, tag = false}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{[0, 4].map(i => <rect key={i} x={q1Pos[i].sx - 6} y={EQ.y - 42} width={q1Pos[i].w + 12} height={56} fill={PAPER} opacity={0.62} />)}
			{tag ? <Sx x={q1Pos[6].sx + q1Pos[6].w + 40} y={EQ.y - 4} text="solids: not in K" size={36} color={AMBER_INK} hand at={at + 6} /> : null}
		</g>
	);
};
type Q1Rows = {labs?: [number, number, number]; head: number; i1: number; pre: number; i2: number; c: number; e1: number; e2: number; swap?: number; lit?: [number, number]};
const q1Rows = (t: Q1Rows) => ice(
	{at: t.head, labelAt: t.labs?.[0] ?? t.head, cells: [{text: '0.300', at: t.i1, color: COK, pre: {text: '0.600 ÷ 2.00', at: t.pre}}, {text: '0', at: t.i2, color: CO2K}]},
	{at: t.head, labelAt: t.labs?.[1] ?? t.head, cells: [{text: '−x', at: t.c, color: MINUS, tag: {text: '1 : 1', at: t.c + 14, color: AMBER_INK}}, {text: '+x', at: t.c + 8, color: PLUS}]},
	{at: t.head, labelAt: t.labs?.[2] ?? t.head, lit: t.lit, cells: [
		{text: '0.300 − x', at: t.e1, color: COK, size: 40, swap: t.swap === undefined ? undefined : {text: '0.200', at: t.swap}},
		{text: 'x', at: t.e2, color: CO2K, swap: t.swap === undefined ? undefined : {text: '0.100', at: t.swap + 8}}]},
);
const q1Cols = (a: number) => [{name: 'CO', at: a, color: COK}, {name: 'CO_2', at: a + 8, color: CO2K}];
const ROWS_DONE: Q1Rows = {head: -100, i1: -100, pre: -100, i2: -100, c: -100, e1: -100, e2: -100};

// ---------- 2a. Question 1 (pause) ----------
const Q = 'q1-question';
const KQ = cues(sc(Q), {q: 'Question one', solid: ['solid', 1], co: 'reacts with carbon monoxide', k: 'K is 0.50', two: 'sealed 2.00 litre', ex: 'an excess of', mol: '0.600 moles', none: 'with no iron', mass: 'What mass of iron', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const h = hold(Q);
	const fs = q1Pos[0];
	const sw = tw('(s)', EQ.s);
	return (
		<>
			<Overlay>
				<TaskLine text={TASK1} at={6} />
				<RingLine x={96} y={150} text={TASK1} size={58} at={KQ.mass} />
				<HscTag at={10} />
				<TypeBadge text="Type 3: K + start" at={KQ.q} />
				<EqStrip items={Q1_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={KQ.q + 20} />
				<RingLineAt cx={fs.sx + fs.w - sw / 2} cy={EQ.y - 16} at={KQ.solid} />
				<Q1Card a={{k: KQ.k, two: KQ.two, ex: KQ.ex, mol: KQ.mol, none: KQ.none, m: KQ.mass}} />
				<Tag x={96} y={752} w={560} text="K close to the real value near 800 °C" at={KQ.k + 20} size={26} color={AMBER_INK} />
				<IceTable x={T1.x} y={T1.y} s={T1.s} outlineAt={KQ.mass - 20} cols={[{name: '', at: -100, color: INK}, {name: '', at: -100, color: INK}]} unit="" rowNames={['I', 'C', 'E']} rows={ice({at: KQ.mass - 10, cells: []}, {at: KQ.mass - 6, cells: []}, {at: KQ.mass - 2, cells: []})} />
				<FeVessel x={V1.x} y={V1.y} h={V1.h} at={KQ.q + 10} counts={() => [0, 6]} label="FeO: solid" labelAt={KQ.solid} />
				<PauseHold h={h} at={KQ.pause} />
				<TrapStrip labels={TRAPS_C} hold={h} />
			</Overlay>
		</>
	);
};
/** A pen ring at a point (used on the state symbol). */
const RingLineAt: React.FC<{cx: number; cy: number; at: number; out?: number}> = ({cx, cy, at, out}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <g opacity={out === undefined ? 1 : 1 - prog(f, out, 10)}><DrawPath d={`M${cx},${cy - 30} C${cx + 44},${cy - 32} ${cx + 46},${cy + 28} ${cx},${cy + 30} C${cx - 46},${cy + 30} ${cx - 44},${cy - 30} ${cx + 6},${cy - 34}`} at={at} dur={18} color={AMBER} width={5} /></g>;
};

// ---------- 2b. Leave the solids out; the ICE table ----------
const X2 = 'q1-expression';
const KX = cues(sc(X2), {start: 'Start with the expression', solids: 'are solids', leaves: 'That leaves K', nopow: 'no powers', ice: 'I C E table', ini: 'I for initial', chg: 'C for change', eq: 'E for equilibrium', moles: 'in moles', div: 'divide first', c300: '0.300 moles per litre', zero: 'starts at zero', nothing: 'Nothing at equilibrium', x: 'the change is x', co: 'carbon monoxide ends', e1: ['0.300 minus x', 1], e2: 'and carbon dioxide at x'});
export const SceneQ1Expression: React.FC = () => {
	const f = useCurrentFrame();
	const num: Term[][] = [[{t: 'CO_2', at: KX.leaves + 6, color: CO2K}]];
	const den: Term[][] = [[{t: 'CO', at: KX.leaves + 12, color: COK}]];
	const letterY = (i: number) => T1.y + T1.s * (110 + i * 100 + 62);
	const [i0x, i0y] = cell1(0, 0);
	const e2 = KX.e2 + 22;
	return (
		<>
			<Overlay>
				<TaskLine text={TASK1} at={-100} />
				<HscTag at={-100} />
				<TypeBadge text="Type 3: K + start" at={-100} />
				<EqStrip items={Q1_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GreySolids at={KX.solids} tag />
				<Q1Card />
				<Tag x={96} y={900} w={880} text="same rule: pure liquids and water as the solvent stay out of K" at={KX.solids + 40} size={28} />
				{/* the expression, solids left out */}
				<FracX cx={860} cy={770} size={50} num={num} den={den} barAt={KX.leaves} prefix="K =" prefixAt={KX.leaves} />
				<CrossedGhost x={1000} y={738} w={420} text="[Fe][CO_2] / ([FeO][CO])" at={KX.solids + 10} out={KX.nopow + 20} />
				<Sx x={1000} y={850} text="no powers: every coefficient is 1" size={34} color={AMBER_INK} hand at={KX.nopow} out={KX.ice} />
				{/* ICE table: the letters expand to words on their cues */}
				{['I', 'C', 'E'].map((l, i) => <Sx key={l} x={T1.x + 20 * T1.s} y={letterY(i)} text={l} size={(i === 2 ? 44 : 52) * T1.s} hand at={-100} out={[KX.ini, KX.chg, KX.eq][i]} />)}
				<IceTable x={T1.x} y={T1.y} s={T1.s} outlineAt={-400} cols={q1Cols(KX.ice)} rows={q1Rows({labs: [KX.ini, KX.chg, KX.eq], head: KX.ini, i1: KX.c300, pre: KX.div + 6, i2: KX.zero, c: KX.x, e1: KX.e1, e2})}
					rowNames={['Initial', 'Change', 'Equilibrium']} />
				<Arrow x1={520} y1={lineY(3) - 12} x2={i0x - 60} y2={i0y - 8} at={KX.div} color={AMBER_INK} width={4} dur={14} out={KX.zero + 20} />
				<Sx x={96} y={850} text="nothing at equilibrium is measured: the change is x" size={32} color={TEAL} hand at={KX.nothing} />
				<FeVessel x={V1.x} y={V1.y} h={V1.h} at={-100} counts={() => [0, 6]} grey={prog(f, KX.solids, 16)} label="solid: not in K" labelAt={KX.solids + 6} />
				<TrapStrip labels={TRAPS_C} ticks={{3: [KX.solids + 16], 0: [KX.c300]}} />
			</Overlay>
		</>
	);
};

// ---------- 2c. K is not tiny: keep x, multiply both sides by the bottom, then divide ----------
const S2 = 'q1-solve';
const KS = cues(sc(S2), {so: 'So x over', notdrop: 'do not drop the x', simple: 'already simple', mult: 'Multiply both sides by the bottom', bottom: 'the bottom 0.300 minus', eq1: 'x equals 0.150', add: 'Add 0.50 x', l150: '1.50 x is 0.150', div: 'divide both sides by 1.50', x100: 'x is 0.100', check: 'Check', chk: '0.100 over 0.200'});
export const SceneQ1Solve: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 1510, cy: 380, size: 46};
	const num: Term[][] = [[{t: 'x', br: false, at: KS.so, color: CO2K}]];
	const den: Term[][] = [[{t: '0.300 − x', br: false, at: KS.so + 10, color: COK}]];
	const W = fracXW(num, den, L.size);
	const X = 1320, S = 44;
	const R = {x: 1330, y: 640, w: 470};
	const l4 = 'x = 0.100 mol/L';
	const CHK = [{t: '0.100 ÷ 0.200 = 0.50', at: KS.chk}, {t: '= K', at: KS.chk + 40, color: TEAL}];
	return (
		<>
			<Overlay>
				<TaskLine text={TASK1} at={-100} />
				<HscTag at={-100} />
				<TypeBadge text="Type 3: K + start" at={-100} />
				<EqStrip items={Q1_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GreySolids at={-100} />
				<Q1Card />
				<IceTable x={T1.x} y={T1.y} s={T1.s} cols={q1Cols(-100)} rows={q1Rows({...ROWS_DONE, swap: KS.x100 + 14, lit: [KS.x100 + 14, KS.chk + 40]})} />
				<Fade at={-100} out={6}><FeVessel x={V1.x} y={V1.y} h={V1.h} at={-100} counts={() => [0, 6]} grey={1} /></Fade>
				{/* the K line */}
				<Dim at={KS.div}>
					<FracX cx={L.cx} cy={L.cy} size={L.size} num={num} den={den} barAt={KS.so} prefix="" />
					<Sx x={L.cx + W / 2 + 18} y={L.cy + 16} text="= 0.50" size={L.size} color={TEAL} at={KS.so + 24} />
					<Sx x={X} y={L.cy + 16} text="K:" size={L.size} color={TEAL} at={KS.so} />
				</Dim>
				<Tag x={X} y={470} w={330} text="K: no unit written" at={KS.so + 30} color={AMBER_INK} size={26} />
				{/* ghost: what dropping x would do */}
				<Fade at={KS.notdrop} out={KS.mult - 8}>
					<Sx x={R.x} y={R.y - 70} text="if you drop x: x = 0.150" size={36} color={INK_SOFT} hand at={KS.notdrop} />
					<CheckRuler x={R.x} y={R.y} w={R.w} frac={0.5} at={KS.notdrop} sliverAt={KS.notdrop + 10} side="start" color="#e9b49a" fiveAt={KS.notdrop + 16} fiveLabel="5%" labelSize={30} />
					<Sx x={R.x} y={R.y + 90} text="half the start: far past 5%" size={34} color={AMBER_INK} hand at={KS.notdrop + 20} />
					<DrawPath d={`M${R.x - 10},${R.y + 50} L${R.x + R.w + 10},${R.y - 20}`} at={KS.notdrop + 30} dur={10} color="#c4432f" width={7} />
					<Sx x={R.x} y={R.y + 150} text="K = 0.50 is not tiny: keep x" size={36} color={TEAL} hand at={KS.notdrop + 36} />
				</Fade>
				{/* step 1: multiply both sides by the bottom */}
				<Fade at={KS.mult} out={KS.add}>
					<Sx x={X} y={548} text="multiply both sides by the bottom" size={30} color={AMBER_INK} hand at={KS.mult} />
				</Fade>
				<Arrow x1={L.cx + 30} y1={L.cy + 74} x2={X + 250} y2={572} at={KS.bottom} color={AMBER_INK} width={4} dur={12} out={KS.eq1 + 30} />
				<Dim at={KS.add}><Sx x={X} y={610} text="x = 0.50 (0.300 − x)" size={S} at={KS.bottom} /></Dim>
				<Dim at={KS.l150}><Sx x={X} y={676} text="x = 0.150 − 0.50x" size={S} at={KS.eq1} /></Dim>
				<Fade at={KS.add} out={KS.div}>
					<Sx x={X} y={728} text="add 0.50x to both sides" size={30} color={AMBER_INK} hand at={KS.add} />
				</Fade>
				<Dim at={KS.x100}><Sx x={X} y={790} text="1.50x = 0.150" size={S} at={KS.l150} /></Dim>
				<Fade at={KS.div}>
					<Sx x={X} y={842} text="divide by 1.50" size={30} color={AMBER_INK} hand at={KS.div} />
				</Fade>
				<Sx x={X} y={910} text={l4} size={50} color={TEAL} at={KS.x100} />
				<Tick x={X + tw(l4, 50) + 34} y={892} at={KS.x100 + 14} s={40} />
				{/* the check, under the table */}
				<Sx x={96} y={806} text="check:" size={38} color={INK_SOFT} hand at={KS.check} />
				<Pieces x={96} y={870} size={42} items={CHK} />
				<Tick x={96 + piecesW(CHK, 42) * 1.15 + 30} y={852} at={KS.chk + 48} s={40} />
				<TrapStrip labels={TRAPS_C} ticks={{3: [-100], 0: [-100]}} />
				{void f}
			</Overlay>
		</>
	);
};

// ---------- 2d. Convert back to a mass ----------
const M = 'q1-mass';
const KM = cues(sc(M), {mass: 'mass of iron', one: 'one iron for every', so: 'so the moles of iron', c100: '0.100 moles per litre', l2: '2.00 litres', m200: '0.200 moles', times: '55.85 grams', g112: '11.2 grams', classic: 'The classic mistake', stop: 'stopping at the concentration', g56: '5.6 grams'});
export const SceneQ1Mass: React.FC = () => {
	const fe = q1Pos[4], co2 = q1Pos[6];
	const a = fe.sx + fe.w / 2, b = co2.sx + co2.w / 2;
	const [ex, ey] = cell1(2, 1);
	const r3 = [{t: '× 55.85 g/mol', at: KM.times}, {t: '= 11.2 g Fe', at: KM.g112, color: TEAL, size: 48}];
	return (
		<>
			<Overlay>
				<TaskLine text={TASK1} at={-100} />
				<RingLine x={96} y={150} text={TASK1} size={58} at={KM.mass} out={KM.one} seed={6} />
				<HscTag at={-100} />
				<TypeBadge text="Type 3: K + start" at={-100} />
				<EqStrip items={Q1_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GreySolids at={-100} />
				{/* one Fe for every CO2 */}
				<Fade at={KM.one}>
					<DrawPath d={`M${a},${EQ.y + 12} Q${(a + b) / 2},${EQ.y + 44} ${b},${EQ.y + 12}`} at={KM.one} dur={16} color={AMBER_INK} width={4} />
					<Sx x={(a + b) / 2 + 30} y={EQ.y + 66} text="1 : 1" size={30} color={AMBER_INK} hand at={KM.one + 10} />
				</Fade>
				<Q1Card />
				<RingLine x={CARD.x + 28} y={lineY(1)} text="vessel: 2.00 L" size={36} at={KM.g56 + 10} hand={false} seed={4} />
				<IceTable x={T1.x} y={T1.y} s={T1.s} cols={q1Cols(-100)} rows={q1Rows({...ROWS_DONE, swap: -100})} />
				<RingLineAt cx={ex} cy={ey} at={KM.c100} out={KM.m200} />
				{/* the convert-back chain */}
				<Pieces x={700} y={772} size={40} items={[{t: '[CO_2] = 0.100 mol/L', at: KM.c100, color: CO2K}, {t: '× 2.00 L', at: KM.l2}]} />
				<Pieces x={700} y={852} size={40} items={[{t: '= 0.200 mol CO_2', at: KM.m200, color: CO2K}, {t: '= 0.200 mol Fe', at: KM.m200 + 24, color: FEK}]} />
				<Pieces x={700} y={938} size={40} items={r3} />
				<Tick x={1290} y={920} at={KM.g112 + 12} s={40} />
				<FeVessel x={V1.x} y={V1.y} h={V1.h} at={0} counts={() => [2, 4]} grey={0} flecks={KM.g112} />
				<AidChip x={1350} y={880} text="Convert back last." at={KM.g112 + 30} />
				{/* the classic mistakes */}
				<MistakeChip x={96} y={770} text="0.100 × 55.85 = 5.6 g: volume forgotten" at={KM.g56} size={30} />
				<MistakeChip x={96} y={860} text="0.100: a concentration, not a mass" at={KM.g56 + 40} size={30} />
				<TrapStrip labels={TRAPS_C} ticks={{3: [-100], 0: [-100], 4: [KM.g112 + 20]}} />
			</Overlay>
		</>
	);
};
void INK;
