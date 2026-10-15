import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, eqLayout, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceRowY, iceW} from '../chem-m5-c06/ice';
import {CurveArrow, EIBracket} from '../chem-m5-c06a/types';
import {HscTag} from '../chem-m5-g03a/board';
import {hold, sc} from './common';
import {AidChip, COK, CROSS, Dim, H2K, MEOHK, MINUS, MistakeChip, PLUS, PauseHold, Pieces, SteelVessel, TaskLine, TrapStrip, TypeBadge} from './board';
import {TRAPS_C} from './s1';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const Q2_EQ: EqItem[] = [{k: 'sp', t: 'CO(g)', color: COK}, {k: 'plus'}, {k: 'sp', coef: '2', t: 'H_2(g)', color: H2K}, {k: 'arrow'}, {k: 'sp', t: 'CH_3OH(g)', color: MEOHK}];
const EQ = {x: 96, y: 250, s: 46};
const lay2 = eqLayout(Q2_EQ, EQ.s, EQ.x);
const q2Pos = lay2.pos;
const CARD = {x: 96, y: 330, w: 600, lh: 52};
const lineY = (i: number) => CARD.y + 108 + i * CARD.lh;
const T2 = {x: 720, y: 330, s: 0.85};
const cell2 = (r: number, c: number) => iceCell(T2.x, T2.y, T2.s, r, c);
const T2R = T2.x + iceW(3, T2.s);
const TASK2 = 'Calculate K.';
const BADGE2 = 'Type 2: start + one equilibrium value';
const PRIOR = {0: [-100], 3: [-100], 4: [-100]};

type CardA = {two: number; co: number; h2: number; m4: number; m3: number; r4?: number; r3?: number};
const CARD_DONE: CardA = {two: -100, co: -100, h2: -100, m4: -100, m3: -100};
const Q2Card: React.FC<{a?: CardA}> = ({a = CARD_DONE}) => (
	<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={352} at={a.two - 6} lh={CARD.lh} lines={[
		{text: 'vessel: 2.00 L (about 230 °C)', at: a.two, size: 34},
		{text: 'start: CO 0.200 mol', at: a.co, color: COK, size: 34},
		{text: 'start: H_2 0.400 mol', at: a.h2, color: H2K, size: 34},
		{text: 'start: CH_3OH 0.400 mol', at: a.m4, color: MEOHK, size: 34, ring: a.r4},
		{text: 'at equilibrium: CH_3OH 0.320 mol', at: a.m3, color: MEOHK, size: 32, ring: a.r3},
	]} />
);
const q2Cols = (a: number) => [{name: 'CO', at: a, color: COK}, {name: 'H_2', at: a + 6, color: H2K}, {name: 'CH_3OH', at: a + 12, color: MEOHK}];
type RowsA = {i1: number; i2: number; i3: number; e3: number; c3: number; c1: number; c2: number; e1: number; e2: number; add: number; litE?: [number, number]};
const DONE: RowsA = {i1: -100, i2: -100, i3: -100, e3: -100, c3: -100, c1: -100, c2: -100, e1: -100, e2: -100, add: -100};
const NEVER = 99999;
const from = (i: number): [number, number] => [CARD.x + 420, lineY(i) - 12];
const q2Rows = (t: RowsA, fly = false) => ice(
	{at: -100, cells: [
		{text: '0.100', at: t.i1, color: COK, from: fly ? from(1) : undefined},
		{text: '0.200', at: t.i2, color: H2K, from: fly ? from(2) : undefined},
		{text: '0.200', at: t.i3, color: MEOHK, from: fly ? from(3) : undefined}]},
	{at: -100, cells: [
		{text: '+0.0400', at: t.c1, color: PLUS, size: 44},
		{text: '+0.0800', at: t.c2, color: PLUS, size: 44, tag: {text: '× 2', at: t.c2 + 8, color: AMBER_INK}},
		{text: '−0.0400', at: t.c3, color: MINUS, size: 44}]},
	{at: -100, lit: t.litE, cells: [
		{text: '0.140', at: t.e1, color: COK, pre: {text: '0.100 + 0.0400', at: t.add}},
		{text: '0.280', at: t.e2, color: H2K, pre: {text: '0.200 + 0.0800', at: t.add + 10}},
		{text: '0.160', at: t.e3, color: AMBER_INK}]},
);
/** Dashed "?" in the two equilibrium cells still unknown. */
const Unknowns: React.FC<{at: number; out?: number}> = ({at, out}) => (
	<g>
		{[0, 1].map(c => {
			const [x, y] = cell2(2, c);
			return (
				<Fade key={c} at={at + c * 6} out={out}>
					<rect x={x - 60} y={y - 30} width={120} height={60} rx={12} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
					<Sx x={x} y={y + 14} text="?" size={40} color={AMBER_INK} anchor="middle" hand at={at + c * 6} />
				</Fade>
			);
		})}
	</g>
);
const Board2: React.FC<{badgeAt?: number; stripAt?: number}> = ({badgeAt = -100, stripAt = -100}) => (
	<>
		<TaskLine text={TASK2} at={-100} />
		<HscTag at={-100} />
		<TypeBadge text={BADGE2} at={badgeAt} />
		<EqStrip items={Q2_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={stripAt} />
	</>
);

// ---------- 3a. Question 2 (pause) ----------
const Q = 'q2-question';
const KQ = cues(sc(Q), {q: 'Question two', meth: 'make methanol gas', eq: 'C O plus two', two: 'A 2.00 litre', t230: 'about 230', co: '0.200 moles of', h2: ['0.400 moles of', 1], m4: ['0.400 moles of', 2], ateq: 'At equilibrium it', m3: '0.320 moles', calc: 'Calculate K', pause: 'Pause here'});
export const SceneQ2Question: React.FC = () => {
	const h = hold(Q);
	const c2 = q2Pos[2];
	return (
		<>
			<Overlay>
				<TaskLine text={TASK2} at={KQ.calc} />
				<HscTag at={10} />
				<TypeBadge text={BADGE2} at={KQ.q} />
				<EqStrip items={Q2_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={KQ.meth} />
				<Ring cx={c2.cx + tw('2', EQ.s) / 2} cy={EQ.y - 16} rx={24} ry={32} at={KQ.eq + 18} color={AMBER} seed={4} />
				<Q2Card a={{two: KQ.two, co: KQ.co, h2: KQ.h2, m4: KQ.m4, m3: KQ.m3, r4: KQ.m4 + 10, r3: KQ.m3 + 8}} />
				<Tag x={96} y={696} w={330} text="illustrative amounts" at={KQ.t230 + 20} size={26} color={AMBER_INK} />
				<IceTable x={T2.x} y={T2.y} s={T2.s} outlineAt={KQ.ateq - 10} cols={q2Cols(KQ.ateq)} rows={ice({at: KQ.ateq, cells: []}, {at: KQ.ateq + 4, cells: []}, {at: KQ.ateq + 8, cells: []})} />
				<SteelVessel x={1590} y={300} h={420} at={KQ.two} />
				<Sx x={1690} y={770} text="sealed, about 230 °C" size={30} color={INK_SOFT} anchor="middle" hand at={KQ.t230} />
				<PauseHold h={h} at={KQ.pause} />
				<TrapStrip labels={TRAPS_C} ticks={PRIOR} hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Divide first, then the equilibrium row first ----------
const I2 = 'q2-initial';
const KI = cues(sc(I2), {div: 'first divide by 2.00', row: 'The initial row is', i1: '0.100 for carbon', i2: '0.200 for hydrogen', i3: '0.200 for methanol', meas: 'The measured methanol', c160: '0.160 moles per litre', erow: 'goes in the equilibrium row', emi: 'equilibrium minus initial', sub: '0.160 minus 0.200', m04: 'minus 0.0400', down: 'went down', back: 'ran backwards', sign: 'gave you the sign'});
export const SceneQ2Initial: React.FC = () => {
	const f = useCurrentFrame();
	const [ex, ey] = cell2(2, 2);
	const yTop = iceRowY(T2.y, T2.s, 0), yBot = iceRowY(T2.y, T2.s, 2);
	const end = lay2.end;
	return (
		<>
			<Overlay>
				<Board2 />
				<Q2Card />
				{/* divide each start by the volume, on the card */}
				{[1, 2, 3].map(i => <Sx key={i} x={CARD.x + 28 + tw(['', 'start: CO 0.200 mol', 'start: H_2 0.400 mol', 'start: CH_3OH 0.400 mol'][i], 34) + 14} y={lineY(i)} text="÷ 2.00" size={32} color={AMBER_INK} hand at={KI.div + (i - 1) * 8} />)}
				<Pieces x={96} y={748} size={34} items={[{t: '0.320 mol ÷ 2.00 L =', at: KI.meas}, {t: '0.160 mol/L', at: KI.c160, color: AMBER_INK}]} />
				<IceTable x={T2.x} y={T2.y} s={T2.s} cols={q2Cols(-100)} rows={q2Rows({...DONE, i1: KI.i1, i2: KI.i2, i3: KI.i3, e3: KI.erow + 14, c3: KI.m04, c1: NEVER, c2: NEVER, e1: NEVER, e2: NEVER, add: NEVER}, true)} />
				<Unknowns at={KI.erow + 24} />
				{/* the measured value goes in the Equilibrium row first */}
				<CurveArrow d={[[430, 770], [720, 830], [ex - 160, 760], [ex - 30, ey + 30]]} at={KI.erow - 6} dur={22} out={KI.emi + 10} />
				<Ring cx={ex} cy={ey} rx={70} ry={36} at={KI.erow + 20} out={KI.emi + 20} color={AMBER} seed={8} />
				<Sx x={720} y={760} text="measured value: Equilibrium row first" size={34} color={TEAL} hand at={KI.erow + 6} />
				{/* E - I gives the change and its sign */}
				<EIBracket x={T2R + 12} yTop={yTop} yBot={yBot} at={KI.emi} size={42} />
				<Sx x={T2R + 30} y={(yTop + yBot) / 2 + 66} text="0.160 − 0.200" size={34} color={AMBER_INK} at={KI.sub} />
				{/* ran backwards: an arrow beside the equation, right to left */}
				<Fade at={KI.down}>
					<DrawPath d={`M${end + 150},${EQ.y - 14} L${end + 20},${EQ.y - 14}`} at={KI.down} dur={14} color={AMBER_INK} width={5} />
					<path d={`M${end + 38},${EQ.y - 28} L${end + 20},${EQ.y - 14} L${end + 38},${EQ.y}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" opacity={prog(f, KI.down + 10, 8)} />
					<Sx x={end + 176} y={EQ.y} text="ran backwards: the sign says so" size={34} color={AMBER_INK} hand at={KI.back} />
				</Fade>
				<TrapStrip labels={TRAPS_C} ticks={{...PRIOR, 0: [-100, KI.div + 20], 2: [KI.m04 + 10]}} />
			</Overlay>
		</>
	);
};

// ---------- 3c. The coefficients, then K ----------
const C3 = 'q2-change-and-k';
const KC = cues(sc(C3), {coef: 'Now the coefficients', each: 'Each methanol that', two: 'two hydrogen', co4: 'rises by 0.0400', h8: 'rises by 0.0800', add: 'Add each change', e140: 'monoxide 0.140', e280: 'hydrogen 0.280', k: 'K is methanol', sq: ['squared', 1], w784: '0.280 squared is', r0784: '0.0784', times: 'times 0.140', r1098: ['0.01098', 1], extra: 'extra figures', over: '0.160 over', k146: 'K is 14.6'});
const FlyChip: React.FC<{text: string; from: [number, number]; to: [number, number]; at: number}> = ({text, from: a, to, at}) => {
	const f = useCurrentFrame();
	const e = prog(f, at, 28);
	const o = prog(f, at, 6) * (1 - prog(f, at + 44, 10));
	if (o <= 0.01) return null;
	const x = a[0] + (to[0] - a[0]) * e, y = a[1] + (to[1] - a[1]) * e;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
			<Sx x={x} y={y + 11} text={text} size={34} color={AMBER_INK} anchor="middle" hand at={-1000} />
		</g>
	);
};
export const SceneQ2ChangeK: React.FC = () => {
	const [c0x, c0y] = cell2(1, 0), [c1x, c1y] = cell2(1, 1);
	const h2 = q2Pos[2], co = q2Pos[0];
	const num: Term[][] = [[{t: 'CH_3OH', at: KC.k + 6, color: MEOHK}]];
	const den: Term[][] = [[{t: 'CO', at: KC.k + 14, color: COK}, {t: 'H_2', at: KC.k + 20, color: H2K, p: '2', pAt: KC.sq, pFrom: [h2.cx + 6, EQ.y - 30]}]];
	const vnum: Term[][] = [[{t: '0.160', br: false, at: KC.sq + 30, color: AMBER_INK}]];
	const vden: Term[][] = [[{t: '0.140', at: KC.sq + 36, color: COK}, {t: '0.280', p: '2', at: KC.sq + 42, color: H2K}]];
	const X = 1240;
	const kl = 'K = 0.160 ÷ 0.010976 =';
	const w2 = tw('0.140 × 0.0784 = ', 40);
	return (
		<>
			<Overlay>
				<Board2 />
				<Q2Card />
				<IceTable x={T2.x} y={T2.y} s={T2.s} cols={q2Cols(-100)} rows={q2Rows({...DONE, c1: KC.co4 + 10, c2: KC.h8 + 10, e1: KC.e140, e2: KC.e280, add: KC.add, litE: [KC.add, KC.k]})} />
				<Unknowns at={-100} out={KC.add} />
				<FlyChip text="1" from={[co.sx + co.w / 2, EQ.y - 60]} to={[c0x - 70, c0y - 30]} at={KC.two - 10} />
				<FlyChip text="2" from={[h2.cx + 12, EQ.y - 60]} to={[c1x - 70, c1y - 30]} at={KC.two} />
				<Chip x={96} y={712} w={420} text="change ratio 1 : 2 : 1" size={34} at={KC.each} color={AMBER_INK} />
				{/* K: the expression, then the equilibrium values */}
				<FracX cx={960} cy={760} size={44} num={num} den={den} barAt={KC.k} prefix="K =" prefixAt={KC.k} />
				<FracX cx={960} cy={900} size={40} num={vnum} den={vden} barAt={KC.sq + 28} prefix="=" prefixAt={KC.sq + 28} />
				<Sx x={96} y={834} text="equilibrium values only" size={34} color={TEAL} hand at={KC.sq + 40} />
				{/* the working, one beat at a time */}
				<Dim at={KC.times}><Pieces x={X} y={744} size={40} items={[{t: '0.280^{2} =', at: KC.w784}, {t: '0.0784', at: KC.r0784}]} /></Dim>
				<Dim at={KC.over}><Pieces x={X} y={814} size={40} items={[{t: '0.140 × 0.0784 =', at: KC.times}, {t: '0.010976', at: KC.r1098 - 10}]} /></Dim>
				<Ring cx={X + w2 + tw('0.010976', 40) / 2} cy={802} rx={tw('0.010976', 40) / 2 + 18} ry={30} at={KC.r1098} out={KC.over} color={AMBER} seed={5} />
				<Sx x={X} y={864} text="rounding to 0.0110 gives 14.5" size={28} color={INK_SOFT} hand at={KC.extra} />
				<Sx x={X} y={946} text={kl} size={36} at={KC.over} />
				<Sx x={X + tw(kl, 36) + 12} y={950} text="14.6" size={62} color={TEAL} hand at={KC.k146} />
				<Tag x={96} y={900} w={330} text="K: no unit written" at={KC.k146 + 12} color={AMBER_INK} size={26} />
				<TrapStrip labels={TRAPS_C} ticks={{...PRIOR, 0: [-100, -100], 2: [-100], 1: [KC.h8 + 16]}} />
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake: the measured value used as the change ----------
const M3 = 'q2-mistake';
const KM = cues(sc(M3), {classic: 'The classic mistake', change: 'change row', not: 'It is not a change', ended: 'ended up', put: 'Put it in', let: 'let equilibrium minus'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const ghost = prog(f, KM.change - 6, 12) * (1 - prog(f, KM.ended, 12));
	const [gx, gy] = cell2(1, 2), [hx, hy] = cell2(2, 2);
	return (
		<>
			<Overlay>
				<Board2 />
				<Q2Card />
				<IceTable x={T2.x} y={T2.y} s={T2.s} cols={q2Cols(-100)} rows={q2Rows(DONE)} opacity={1 - ghost} />
				{ghost > 0.01 ? (
					<g opacity={ghost}>
						<IceTable x={T2.x} y={T2.y} s={T2.s} cols={q2Cols(-100)} rows={ice(
							{at: -100, cells: [{text: '0.100', at: -100, color: COK}, {text: '0.200', at: -100, color: H2K}, {text: '0.200', at: -100, color: MEOHK}]},
							{at: -100, cells: [null, null, {text: '+0.160', at: -100, color: CROSS, size: 46}]},
							{at: -100, cells: [null, null, {text: '0.360', at: -100, color: CROSS}]},
						)} />
						<DrawPath d={`M${gx - 90},${gy - 50} L${hx + 90},${hy + 50}`} at={KM.change + 6} dur={10} color={CROSS} width={8} />
						<DrawPath d={`M${gx + 90},${gy - 50} L${hx - 90},${hy + 50}`} at={KM.change + 12} dur={10} color={CROSS} width={8} />
					</g>
				) : null}
				<Sx x={720} y={740} text="that is the equilibrium value, not the change" size={38} color={CROSS} hand at={KM.change + 10} out={KM.ended} />
				<Ring cx={hx} cy={hy} rx={70} ry={36} at={KM.ended + 6} color={AMBER} seed={9} />
				<Sx x={720} y={740} text="0.160 is where methanol ended up: E row" size={38} color={TEAL} hand at={KM.ended + 14} />
				<Arrow x1={1100} y1={710} x2={hx - 20} y2={hy + 40} at={KM.ended + 20} color={AMBER_INK} width={4} dur={12} />
				<Sx x={96} y={760} text="K = 14.6" size={50} color={TEAL} hand at={-100} />
				<AidChip x={96} y={820} text="E row first." at={KM.let} />
				<MistakeChip x={720} y={790} text="H_2 +0.0400 (coefficient missed): K = 19.8" at={KM.put} size={30} />
				<MistakeChip x={720} y={876} text="moles put into K: 3.64" at={KM.put + 30} size={30} />
				<TrapStrip labels={TRAPS_C} ticks={{...PRIOR, 0: [-100, -100], 2: [-100], 1: [-100]}} />
			</Overlay>
		</>
	);
};
void INK; void Tick;
