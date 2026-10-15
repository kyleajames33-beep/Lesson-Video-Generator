import React from 'react';
import {AMBER, AMBER_INK, Countdown, INK, INK_SOFT} from '../../kit';
import {cues} from '../../cues';
import {Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import type {IceRow} from '../chem-m5-c06/ice';
import {CurveArrow} from '../chem-m5-c06a/types';
import {CO2K, COK, H2K, H2OK, MINUS, PLUS, hold, sc} from './common';
import {HscTag, SlipChip, Task} from '../chem-m5-g03a/board';

export const W_EQ: EqItem[] = [{k: 'sp', t: 'CO(g)', color: COK}, {k: 'plus'}, {k: 'sp', t: 'H_2O(g)', color: H2OK}, {k: 'arrow'}, {k: 'sp', t: 'CO_2(g)', color: CO2K}, {k: 'plus'}, {k: 'sp', t: 'H_2(g)', color: H2K}];
const wCols = (a: number) => [{name: 'CO', at: a, color: COK}, {name: 'H_2O', at: a + 6, color: H2OK}, {name: 'CO_2', at: a + 12, color: CO2K}, {name: 'H_2', at: a + 18, color: H2K}];
const TASK = 'How many moles of steam were added?';
const Top: React.FC<{at?: number; eq?: number}> = ({at = -100, eq = -100}) => (
	<>
		<Task text={TASK} at={at} />
		<HscTag at={at} />
		<EqStrip items={W_EQ} x={96} y={250} size={46} at={eq} />
	</>
);
/** Compact givens once the amounts are converted. */
const SmallGivens: React.FC<{at?: number}> = ({at = -100}) => (
	<GivensCard x={96} y={330} w={560} h={334} at={at} lh={50} lines={[
		{text: 'K = 4.00 (same temperature)', at, color: TEAL, size: 30},
		{text: 'vessel: 2.00 L', at, size: 30},
		{text: 'old eq: CO 0.200, H_2O 0.200,', at, size: 30},
		{text: 'CO_2 0.400, H_2 0.400 (mol/L)', at, size: 30},
		{text: 'new [CO] = 0.100 mol/L', at, color: COK, size: 30},
	]} />
);

// ---------- 4a. Type 5: set up and convert ----------
const A = 'addition-setup';
const KA = cues(sc(A), {type: 'Type five', amount: 'an amount added', make: 'Carbon monoxide and steam make', k: 'K is 4.00', vessel: '2.00 litre', ateq: 'at equilibrium', co: '0.400 moles of', st: '0.400 of steam', each: '0.800 each', added: 'Steam is added', neweq: 'the new equilibrium', n200: '0.200 moles', how: 'How much steam', convert: 'First convert', c1: ['0.200', 2], c2: ['0.200', 3], c3: ['0.400', 3], c4: ['0.400', 4], newco: 'The new carbon monoxide', n100: '0.100'});
export const SceneAddSetup: React.FC = () => {
	const X = 760;
	const rows = [
		{sp: 'CO', mol: '0.400', c: '0.200', at: KA.c1, col: COK},
		{sp: 'H_2O', mol: '0.400', c: '0.200', at: KA.c2, col: H2OK},
		{sp: 'CO_2', mol: '0.800', c: '0.400', at: KA.c3, col: CO2K},
		{sp: 'H_2', mol: '0.800', c: '0.400', at: KA.c4, col: H2K},
	];
	return (
		<Overlay>
			<Top at={KA.type} eq={KA.make} />
			<Ring cx={96 + tw(TASK, 58, true) / 2} cy={136} rx={tw(TASK, 58, true) / 2 + 24} ry={42} at={KA.how} out={KA.convert} color={AMBER} seed={3} />
			<GivensCard x={96} y={330} w={620} h={434} at={KA.k - 8} lh={50} lines={[
				{text: 'K = 4.00 (same temperature)', at: KA.k, color: TEAL, size: 32},
				{text: 'vessel: 2.00 L', at: KA.vessel, size: 32, ring: KA.convert + 4},
				{text: 'old equilibrium:', at: KA.ateq, color: INK_SOFT, size: 30},
				{text: 'CO 0.400 mol,  H_2O 0.400 mol', at: KA.co, size: 32},
				{text: 'CO_2 0.800 mol,  H_2 0.800 mol', at: KA.each, size: 32},
				{text: 'steam added', at: KA.added, color: H2OK, size: 32},
				{text: 'new equilibrium: CO 0.200 mol', at: KA.n200, color: COK, size: 32},
			]} />
			<Sx x={X} y={390} text="÷ 2.00 L, so mol/L" size={42} color={AMBER_INK} hand at={KA.convert} />
			<Sx x={X} y={430} text="old equilibrium" size={30} color={INK_SOFT} hand at={KA.convert + 6} />
			{rows.map((r, i) => (
				<g key={i}>
					<Sx x={X} y={490 + i * 62} text={`${r.sp}:  ${r.mol} mol ÷ 2.00 L =`} size={36} at={r.at - 6} />
					<Sx x={X + 470} y={490 + i * 62} text={`${r.c} mol/L`} size={38} color={r.col} at={r.at} />
				</g>
			))}
			<Sx x={X} y={770} text="new equilibrium" size={30} color={INK_SOFT} hand at={KA.newco} />
			<Sx x={X} y={826} text="CO:  0.200 mol ÷ 2.00 L =" size={36} at={KA.newco + 6} />
			<Sx x={X + 470} y={826} text="0.100 mol/L" size={40} color={COK} at={KA.n100} />
			<Ring cx={X + 570} cy={812} rx={130} ry={36} at={KA.n100 + 8} color={AMBER} seed={6} />
			<Chip x={96} y={800} w={560} text="Concentrations, not moles." size={40} at={KA.convert + 20} color={TEAL} />
		</Overlay>
	);
};

// ---------- 4b. The ICE table after adding ----------
const B = 'addition-ice-table';
const KB = cues(sc(B), {right: 'Right after', before: 'before anything reacts', old: 'the old equilibrium plus', unknown: 'the unknown goes', initial: 'initial row', plusy: '0.200 plus y', where: 'where y is', newco: 'The new carbon monoxide', eqrow: 'equilibrium row first', change: 'its change is', minus: 'which is minus', ratio: 'one to one', falls: 'Steam also falls', used: 'used up', rise: 'each rise'});
const AT = {x: 700, y: 330, s: 0.8};
const addRows = (t: {i: number; i2: number; c0: number; c1: number; c2: number; e0: number; e1: number; e2: number; ratio: number; lit?: [number, number]; dimIC?: number}): IceRow[] => [
	{at: -100, dim: t.dimIC ? [t.dimIC, 0, 0.3] : undefined, cells: [
		{text: '0.200', at: t.i, color: COK}, {text: '0.200 + y', at: t.i2, color: H2OK, size: 40}, {text: '0.400', at: t.i, color: CO2K}, {text: '0.400', at: t.i, color: H2K}]},
	{at: -100, dim: t.dimIC ? [t.dimIC, 0, 0.3] : undefined, cells: [
		{text: '−0.100', at: t.c0, color: MINUS, size: 44}, {text: '−0.100', at: t.c1, color: MINUS, size: 44, tag: {text: 'used up', at: t.c1 + 10, color: MINUS}},
		{text: '+0.100', at: t.c2, color: PLUS, size: 44}, {text: '+0.100', at: t.c2 + 6, color: PLUS, size: 44}]},
	{at: -100, lit: t.lit, cells: [
		{text: '0.100', at: t.e0, color: COK, size: 46}, {text: '0.100 + y', at: t.e1, color: H2OK, size: 40}, {text: '0.500', at: t.e2, color: CO2K, size: 46}, {text: '0.500', at: t.e2 + 6, color: H2K, size: 46}]},
];
export const SceneAddIce: React.FC = () => {
	const cell = (r: number, c: number) => iceCell(AT.x, AT.y, AT.s, r, c);
	const [e0x, e0y] = cell(2, 0), [i0x, i0y] = cell(0, 0), [i1x, i1y] = cell(0, 1);
	return (
		<Overlay>
			<Top />
			<SmallGivens />
			<Sx x={AT.x} y={308} text="the instant after adding, before anything reacts: old equilibrium + y" size={32} color={AMBER_INK} hand at={KB.before} />
			<IceTable x={AT.x} y={AT.y} s={AT.s} outlineAt={KB.right - 20} cols={wCols(KB.right - 10)} rows={addRows({
				i: KB.old, i2: KB.plusy, c0: KB.minus, c1: KB.falls, c2: KB.rise, e0: KB.eqrow + 16, e1: KB.falls + 30, e2: KB.rise + 24, ratio: KB.ratio, lit: [KB.eqrow, KB.change + 40],
			})} />
			<Ring cx={i1x} cy={i1y} rx={98} ry={40} at={KB.plusy + 10} out={KB.newco} color={AMBER} seed={4} />
			<Sx x={AT.x} y={712} text="y = steam added, in mol/L" size={36} color={AMBER_INK} hand at={KB.where} />
			{/* the new CO value goes in the Equilibrium row first */}
			<CurveArrow d={[[400, 638], [460, 760], [e0x - 120, 760], [e0x - 6, e0y + 36]]} at={KB.eqrow - 10} dur={26} out={KB.change + 10} />
			<Ring cx={e0x} cy={e0y} rx={70} ry={36} at={KB.change} out={KB.minus + 40} color={AMBER_INK} seed={3} />
			<Ring cx={i0x} cy={i0y} rx={70} ry={36} at={KB.change + 14} out={KB.minus + 40} color={AMBER_INK} seed={5} />
			<Sx x={AT.x} y={790} text="CO: E − I = 0.100 − 0.200 = −0.100" size={40} at={KB.change + 6} />
			<Sx x={AT.x} y={850} text="ratio 1 : 1 : 1 : 1, so every change is 0.100" size={34} color={INK_SOFT} hand at={KB.ratio} />
			<Sx x={AT.x} y={910} text="some of the added steam is used up" size={36} color={MINUS} hand at={KB.used} />
			<Chip x={96} y={700} w={560} text="The added substance goes in the initial row" size={30} at={KB.initial + 10} color={TEAL} />
			<SlipChip x={1320} y={710} w={500} text="y in the change row" at={KB.initial + 30} out={KB.newco} />
		</Overlay>
	);
};

// ---------- 4c. K stays: the equation for y (pause and try it) ----------
const C = 'addition-k-equation';
const KC = cues(sc(C), {ateq: 'At equilibrium that', py: '0.100 plus y', v500: '0.500 and', knot: 'K has not changed', temp: 'the temperature has not', k4: 'it is 4.00', times: 'So 0.500 times', allover: 'all over', bracket: 'the bracket', eq4: 'equals 4.00', solve: 'Solve for y', pause: 'Pause here'});
export const SceneAddK: React.FC = () => {
	const h = hold(C);
	const S = {x: 96, y: 330, s: 0.7};
	const num: Term[][] = [[{t: '0.500 × 0.500', br: false, at: KC.times, color: CO2K}]];
	const den: Term[][] = [[{t: '0.100 × (0.100 + y)', br: false, at: KC.allover + 6, color: H2OK}]];
	return (
		<Overlay>
			<Top />
			<IceTable x={S.x} y={S.y} s={S.s} cols={wCols(-100)} rows={addRows({i: -100, i2: -100, c0: -100, c1: -100, c2: -100, e0: -100, e1: -100, e2: -100, ratio: -100, lit: [KC.ateq, KC.knot + 30], dimIC: KC.ateq})} />
			<Chip x={940} y={350} w={884} text="K = 4.00: the same temperature, so K stays" size={38} at={KC.knot} color={TEAL} />
			<FracX cx={1240} cy={540} size={50} num={num} den={den} barAt={KC.times - 4} prefix="K =" prefixAt={KC.times - 4} />
			<Sx x={1500} y={558} text="= 4.00" size={50} color={TEAL} at={KC.eq4} />
			<Tag x={940} y={680} w={330} text="K: no unit written" at={KC.eq4 + 10} color={AMBER_INK} size={28} />
			<Sx x={96} y={760} text="Solve for y:  y = ? mol/L" size={56} color={AMBER_INK} hand at={KC.solve} />
			<Sx x={96} y={860} text="Pause here and try it." size={54} color={AMBER_INK} hand at={KC.pause} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1500} y={860} r={64} />
		</Overlay>
	);
};

// ---------- 4d. The answer and the slips ----------
const D = 'addition-answer-and-slips';
const KD = cues(sc(D), {top: 'The top is', py: 'plus y is', div: 'divided by the product', r625: '0.625', y525: 'y is 0.525', vessel: 'The vessel is', added: 'steam added is', r105: '1.05 moles', check: 'Check', div2: ['divided by the product', 2], is4: 'and 0.625 is', slips: 'The slips', own: 'on its own', vol: 'the volume', w425: '0.425', used: 'used up'});
export const SceneAddAnswer: React.FC = () => {
	const num: Term[][] = [[{t: '0.500 × 0.500', br: false, at: -100, out: KD.top, color: CO2K}], [{t: '0.250', br: false, at: KD.top + 6, color: CO2K}]];
	const den: Term[][] = [[{t: '0.100 × (0.100 + y)', br: false, at: -100, color: H2OK}]];
	const X = 96, R = 1120;
	const l2 = '0.525 mol/L × 2.00 L = ';
	return (
		<Overlay>
			<Top />
			<FracX cx={460} cy={390} size={46} num={num} den={den} barAt={-100} prefix="K =" prefixAt={-100} hold={460} />
			<Sx x={720} y={406} text="= 4.00" size={46} color={TEAL} at={-100} />
			<Sx x={X} y={560} text="0.100 + y = 0.250 ÷ (4.00 × 0.100) =" size={42} at={KD.py} />
			<Sx x={X + tw('0.100 + y = 0.250 ÷ (4.00 × 0.100) = ', 42)} y={560} text="0.625" size={46} color={H2OK} at={KD.r625} />
			<Sx x={X} y={640} text="y = 0.625 − 0.100 = 0.525 mol/L" size={44} at={KD.y525} />
			<Sx x={X} y={740} text={l2} size={46} at={KD.vessel} />
			<Sx x={X + tw(l2, 46)} y={746} text="1.05 mol" size={66} color={TEAL} hand at={KD.r105} />
			<Ring cx={X + tw(l2, 46) + 110} cy={724} rx={140} ry={50} at={KD.r105 + 10} color={AMBER} seed={5} />
			<Sx x={X} y={810} text="steam added" size={36} color={INK_SOFT} hand at={KD.r105 + 8} />
			{/* check by substituting back */}
			<Sx x={R} y={380} text="check:" size={44} color={TEAL} hand at={KD.check} />
			<Sx x={R} y={450} text="0.250 ÷ (0.100 × 0.625)" size={42} at={KD.div2} />
			<Sx x={R} y={520} text="= 0.250 ÷ 0.0625 = 4.00" size={42} at={KD.is4} />
			<Sx x={R + tw('= 0.250 ÷ 0.0625 = 4.00', 42) + 20} y={520} text="= K" size={46} color={TEAL} hand at={KD.is4 + 20} />
			<Tick x={R + tw('= 0.250 ÷ 0.0625 = 4.00', 42) + 140} y={502} at={KD.is4 + 30} s={40} />
			{/* the slips */}
			<SlipChip x={R} y={600} w={704} text="0.525 (mol/L, not mol): volume forgotten" at={KD.own} size={30} />
			<SlipChip x={R} y={690} w={704} text="0.425 mol/L: steam used up not counted" at={KD.w425} size={30} />
			<Fade at={KD.check - 30}>
				<Sx x={X} y={900} text="Q right after adding steam: 0.160 ÷ (0.200 × 0.725) = 1.10, below K = 4.00, so forward" size={28} color={INK_SOFT} at={KD.check - 30} />
			</Fade>
			<Chip x={X} y={950} w={600} text="Initial row: plus y. K stays." size={40} at={KD.slips} color={TEAL} />
		</Overlay>
	);
};
void INK;
