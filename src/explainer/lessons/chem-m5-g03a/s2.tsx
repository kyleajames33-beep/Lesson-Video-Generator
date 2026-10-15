import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceRowY} from '../chem-m5-c06/ice';
import {CrossedGhost, CurveArrow, EIBracket} from '../chem-m5-c06a/types';
import {Heading, MINUS, PLUS, O2K, SO2K, SO3K, sc} from './common';
import {HscTag, MoveCard, SlipChip, VesselOne} from './board';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const SO3_EQ: EqItem[] = [{k: 'sp', coef: '2', t: 'SO_2(g)', color: SO2K}, {k: 'plus'}, {k: 'sp', t: 'O_2(g)', color: O2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'SO_3(g)', color: SO3K}];
export const soCols = (a: number) => [{name: 'SO_2', at: a, color: SO2K}, {name: 'O_2', at: a + 6, color: O2K}, {name: 'SO_3', at: a + 12, color: SO3K}];
const CARD = {x: 96, y: 330};
const ly = (i: number, lh = 56) => CARD.y + 108 + i * lh;

// ---------- 2. Type 1: settled amounts, find K ----------
const DK = 'direct-k';
const KD = cues(sc(DK), {type: 'Type one', two: 'two litre', so2: '0.300 moles of', o2: '0.150 of oxygen', so3: '0.600 of sulfur', kuses: 'K uses concentrations', div: 'divide by two first', c1: ['0.150', 2], c2: '0.0750 and', c3: '0.300 moles per litre', write: 'Write the expression', powers: 'powers', notm: 'not multipliers', ksq: 'K is 0.300 squared', prod: 'product of 0.150', w0750: ['0.0750', 2], r533: '53.3', moles: 'Use moles', r267: '26.7', wrong: 'which is wrong'});
export const SceneDirectK: React.FC = () => {
	const X = 690;
	const conv = [
		{t: '0.150', at: KD.c1, c: SO2K}, {t: '0.0750', at: KD.c2, c: O2K}, {t: '0.300', at: KD.c3, c: SO3K},
	];
	const num: Term[][] = [[{t: 'SO_3', p: '2', at: KD.write + 10, pAt: KD.powers, color: SO3K}]];
	const den: Term[][] = [[{t: 'SO_2', p: '2', at: KD.write + 16, pAt: KD.powers + 6, color: SO2K}, {t: 'O_2', at: KD.write + 22, color: O2K}]];
	const W = 1000;
	const l3 = 'K = 0.0900 ÷ 0.0016875 = ';
	return (
		<>
			<Heading text="Find K" at={4} size={62} />
			<Overlay>
				<HscTag at={10} />
				<EqStrip items={SO3_EQ} x={96} y={250} size={46} at={KD.type} />
				<GivensCard x={CARD.x} y={CARD.y} w={540} h={358} at={KD.type + 6} lh={56} lines={[
					{text: 'vessel: 2.00 L', at: KD.two, ring: KD.div + 4},
					{text: 'SO_2: 0.300 mol', at: KD.so2, color: SO2K},
					{text: 'O_2: 0.150 mol', at: KD.o2, color: O2K},
					{text: 'SO_3: 0.600 mol', at: KD.so3, color: SO3K},
					{text: 'all at equilibrium', at: KD.so3 + 20, color: INK_SOFT, size: 30},
				]} />
				{/* divide each amount by the volume: a mol/L column */}
				<Sx x={X} y={400} text="÷ 2.00 L" size={40} color={AMBER_INK} hand at={KD.div} />
				{conv.map((c, i) => (
					<g key={i}>
						<Arrow x1={600} y1={ly(i + 1) - 12} x2={X - 10} y2={ly(i + 1) - 12} at={c.at - 6} color={AMBER_INK} width={4} dur={10} />
						<Sx x={X + 6} y={ly(i + 1)} text={c.t} size={40} color={c.c} at={c.at} />
						<Sx x={X + 6 + tw(c.t, 40) + 10} y={ly(i + 1)} text="mol/L" size={28} color={INK_SOFT} hand at={c.at + 4} />
					</g>
				))}
				<Chip x={96} y={720} w={560} text="Concentrations, not moles." size={40} at={KD.kuses + 6} color={TEAL} />
				<VesselOne x={96} y={820} at={KD.c3 + 40} />
				{/* the expression: coefficients become powers */}
				<FracX cx={1400} cy={300} size={52} num={num} den={den} barAt={KD.write + 4} prefix="K =" prefixAt={KD.write + 4} />
				<CrossedGhost x={1080} y={426} w={330} text="2 × [SO_2]" at={KD.notm - 4} out={KD.ksq + 10} />
				<Sx x={1440} y={470} text="power, not multiplier" size={38} color={AMBER_INK} hand at={KD.notm + 6} out={KD.ksq + 10} />
				{/* the working, one beat at a time */}
				<Sx x={W} y={560} text="0.300^{2} = 0.0900" size={44} color={SO3K} at={KD.ksq + 6} />
				<Sx x={W} y={634} text="0.150^{2} × 0.0750 =" size={44} at={KD.prod + 6} />
				<Sx x={W + tw('0.150^{2} × 0.0750 =', 44) + 14} y={634} text="0.0016875" size={44} at={KD.w0750 + 14} />
				<Sx x={W} y={714} text={l3} size={44} at={KD.r533 - 24} />
				<Sx x={W + tw(l3, 44)} y={718} text="53.3" size={64} color={TEAL} hand at={KD.r533} />
				<Tick x={W + tw(l3, 44) + 150} y={700} at={KD.r533 + 10} s={40} />
				<Tag x={W} y={742} w={330} text="K: no unit written" at={KD.r533 + 16} color={AMBER_INK} size={28} />
				{/* the moles slip */}
				<SlipChip x={W} y={826} w={824} text="moles used: 0.600^{2} ÷ (0.300^{2} × 0.150) = 26.7" at={KD.r267 - 6} note="K needs mol/L" size={30} />
				{/* silent reminder: solids stay out of K */}
				<Fade at={KD.wrong + 16}>
					<rect x={430} y={820} width={530} height={170} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={450} y={858} text="Solids stay out of K:" size={32} color={INK_SOFT} hand at={KD.wrong + 16} />
					<EqStrip items={[{k: 'sp', t: 'CaCO_3(s)'}, {k: 'arrow'}, {k: 'sp', t: 'CaO(s)'}, {k: 'plus'}, {k: 'sp', t: 'CO_2(g)'}]} x={450} y={914} size={28} at={KD.wrong + 20} />
					<Sx x={450} y={966} text="K = [CO_2]" size={34} color={TEAL} at={KD.wrong + 26} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 3. Type 2: a start plus one settled value ----------
const IV = 'ice-one-value';
const KI = cues(sc(IV), {type: 'Type two', one: 'one settled', put: 'Put 0.400', o2: '0.300 of oxygen', another: 'another two litre', diff: 'different temperature', ateq: 'at equilibrium sulfur', m160: '0.160 moles per litre', start: 'The start is', s200: '0.200', s150: '0.150 moles', meas: 'The measured 0.160', eqrow: 'equilibrium row first', change: "sulfur trioxide's change", plus: 'plus 0.160', coef: 'Then the coefficients', falls: 'falls 0.160', half: 'half of that', erow: 'The equilibrium row is', e040: '0.0400', e070: '0.0700', only: 'only that row', giving: 'giving 229'});
export const T2 = {x: 620, y: 330, s: 0.85};
export const SceneIceOneValue: React.FC = () => {
	const cell = (r: number, c: number) => iceCell(T2.x, T2.y, T2.s, r, c);
	const [ex, ey] = cell(2, 2);
	const yTop = iceRowY(T2.y, T2.s, 0), yBot = iceRowY(T2.y, T2.s, 2);
	const right = T2.x + T2.s * (240 + 3 * 220);
	const W = 620;
	const r3 = 'K = 0.0256 ÷ 0.000112 = ';
	return (
		<>
			<Heading text="Find K" at={4} size={62} />
			<Overlay>
				<HscTag at={10} />
				<EqStrip items={SO3_EQ} x={96} y={250} size={46} at={KI.type} />
				<Tag x={720} y={204} w={820} text="a different temperature from the last question, so a different K" at={KI.diff} size={28} color={AMBER_INK} />
				<GivensCard x={CARD.x} y={CARD.y} w={500} h={350} at={KI.type + 6} lh={54} lines={[
					{text: 'vessel: 2.00 L', at: KI.another, size: 34},
					{text: 'start: SO_2 0.400 mol', at: KI.put, size: 34, color: SO2K},
					{text: 'start: O_2 0.300 mol', at: KI.o2, size: 34, color: O2K},
					{text: 'at equilibrium:', at: KI.ateq, size: 30, color: INK_SOFT},
					{text: '[SO_3] = 0.160 mol/L', at: KI.m160, size: 34, color: SO3K, ring: KI.meas},
				]} />
				<Chip x={96} y={712} w={500} text="Measured value: Equilibrium row first" size={30} at={KI.eqrow + 10} color={TEAL} />
				<IceTable x={T2.x} y={T2.y} s={T2.s} outlineAt={KI.start - 24} cols={soCols(KI.start - 14)} rows={ice(
					{at: KI.start - 8, dim: [KI.only, 0, 0.35], cells: [
						{text: '0.200', at: KI.s200, color: SO2K, pre: {text: '0.400 ÷ 2', at: KI.start}},
						{text: '0.150', at: KI.s150, color: O2K, pre: {text: '0.300 ÷ 2', at: KI.start + 6}},
						{text: '0', at: KI.s150 + 10, color: INK_SOFT}]},
					{at: KI.start - 2, dim: [KI.only, 0, 0.35], lit: [KI.coef, KI.erow], cells: [
						{text: '−0.160', at: KI.falls, color: MINUS, size: 46, tag: {text: '2 : 2', at: KI.falls + 10, color: AMBER_INK}},
						{text: '−0.0800', at: KI.half + 10, color: MINUS, size: 42, tag: {text: '1 : 2, so ÷ 2', at: KI.half + 4, color: AMBER_INK}},
						{text: '+0.160', at: KI.plus, color: PLUS, size: 46}]},
					{at: KI.start + 4, lit: [KI.erow, KI.giving + 40], cells: [
						{text: '0.0400', at: KI.e040, color: SO2K, size: 46},
						{text: '0.0700', at: KI.e070, color: O2K, size: 46},
						{text: '0.160', at: KI.eqrow + 20, color: SO3K, size: 46}]},
				)} />
				{/* the measured value goes in the Equilibrium row first */}
				<CurveArrow d={[[420, 632], [520, 820], [ex - 120, 800], [ex - 10, ey + 36]]} at={KI.eqrow - 10} dur={28} out={KI.change + 20} />
				<Ring cx={ex} cy={ey} rx={78} ry={38} at={KI.eqrow + 26} out={KI.change + 30} color={AMBER} seed={8} />
				<EIBracket x={right + 12} yTop={yTop} yBot={yBot} at={KI.change} size={42} />
				<Ring cx={T2.x + T2.s * (240 + 1.5 * 220) * 1} cy={yBot} rx={T2.s * 330} ry={40} at={KI.only} out={KI.giving + 40} color={AMBER} seed={6} />
				{/* K from the equilibrium row only */}
				<Sx x={W} y={760} text="0.160^{2} = 0.0256" size={40} color={SO3K} at={KI.only + 10} />
				<Sx x={W} y={822} text="0.0400^{2} × 0.0700 = 0.000112" size={40} at={KI.only + 24} />
				<Sx x={W} y={904} text={r3} size={46} at={KI.giving - 16} />
				<Sx x={W + tw(r3, 46)} y={908} text="229" size={66} color={TEAL} hand at={KI.giving} />
				<Sx x={W} y={966} text="equilibrium values only" size={36} color={TEAL} hand at={KI.only + 4} />
				{/* the classic slips, one at a time */}
				<SlipChip x={1350} y={740} w={474} text="0.160 as the start of SO_3" at={KI.eqrow + 36} out={KI.coef} size={30} />
				<SlipChip x={1350} y={740} w={474} text="O_2: −0.160 (not halved)" at={KI.half + 30} out={KI.only} size={30} />
				<SlipChip x={1350} y={740} w={474} text="initial values in K" at={KI.only + 30} out={KI.giving + 10} size={30} />
				<MoveCard text="K = 229" sub="ICE table question (this temperature)" at={KI.giving + 24} from={[1350, 860]} w={474} />
			</Overlay>
		</>
	);
};
void prog; void INK; void useCurrentFrame;
