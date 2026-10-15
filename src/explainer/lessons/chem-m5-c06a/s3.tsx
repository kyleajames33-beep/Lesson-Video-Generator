import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, TEAL, Tick, NO2Vessel, DotRow, eqLayout} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceRowY} from '../chem-m5-c06/ice';
import {pclCols} from '../chem-m5-c06/board';
import {Heading, CROSS, GREEN_INK, MINUS, N2O4C, NAVY, NO2C, PLUS, VIOLET, cw, kf, sc} from './common';
import {CurveArrow, EIBracket} from './types';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- 10. Two habits for type two ----------
const M = 'memory-aid';
const KM = cues(sc(M), {habits: 'Two habits', first: 'First the measured value', eqrow: 'equilibrium row', change: 'its change comes from the table', second: 'Second only the change', m1: 'minus 0.080', p1: ['plus 0.080', 1], p2: ['plus 0.080', 2], ratio: 'one to one to one', eqr: 'The equilibrium row does not', r12: '0.12', not: 'are not'});
const a4 = cw(M, '0.080', 0, 4), a5 = cw(M, '0.080', 0, 5), oneEnd = cw(M, 'one to one to one', 4);
export const SceneAidA: React.FC = () => {
	const T = {x: 200, y: 290, s: 1};
	const row = (r: number) => iceRowY(T.y, T.s, r);
	const [ex, ey] = iceCell(T.x, T.y, T.s, 2, 2);
	const cc = iceCell(T.x, T.y, T.s, 1, 2);
	return (
		<>
			<Heading text="Measured value: Equilibrium row first." at={KM.first} size={58} />
			<Overlay>
				<Sx x={96} y={248} text="Only the change row follows the coefficients." size={52} color={TEAL} hand at={KM.second} />
				<IceTable x={T.x} y={T.y} s={T.s} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, dim: [KM.second, 0, 0.35], cells: [{text: '0.20', at: -100, color: NAVY}, {text: '0', at: -100, color: INK_SOFT}, {text: '0', at: -100, color: INK_SOFT}]},
					{at: -100, lit: [KM.second, KM.eqr - 10], cells: [{text: '−0.080', at: -100, color: MINUS}, {text: '+0.080', at: -100, color: PLUS}, {text: '+0.080', at: -100, color: PLUS}]},
					{at: -100, lit: [KM.eqr, KM.not + 60], cells: [{text: '0.12', at: -100, color: NAVY}, {text: '0.080', at: -100, color: VIOLET}, {text: '0.080', at: -100, color: GREEN_INK}]},
				)} />
				{/* habit 1: the pen arrow replays into the Cl2 equilibrium cell; its change comes from the table */}
				<CurveArrow d={[[1030, 150], [1200, 250], [1190, 640], [ex + 70, ey + 4]]} at={KM.eqrow - 10} dur={28} out={KM.second - 10} />
				<Ring cx={ex} cy={ey} rx={88} ry={42} at={KM.eqrow + 18} out={KM.second - 10} color={AMBER} seed={4} />
				<Ring cx={cc[0]} cy={cc[1]} rx={90} ry={42} at={KM.change + 6} out={KM.second - 10} color={AMBER_INK} seed={6} />
				<Sx x={cc[0] - 60} y={cc[1] - 56} text="E − I" size={40} color={AMBER_INK} hand at={KM.change + 12} out={KM.second - 10} />
				{/* habit 2: change row in ratio, equilibrium row not */}
				<Fade at={KM.m1 - 6}>
					<rect x={1180} y={row(1) - 80} width={560} height={64} rx={32} fill="#fffdf8" stroke={PLUS} strokeWidth={3} />
					<Sx x={1205} y={row(1) - 34} text="−0.080" size={50} color={MINUS} hand at={KM.m1} />
					<Sx x={1340} y={row(1) - 34} text=":" size={50} hand at={KM.p1 - 6} />
					<Sx x={1370} y={row(1) - 34} text="+0.080" size={50} color={PLUS} hand at={KM.p1} />
					<Sx x={1505} y={row(1) - 34} text=":" size={50} hand at={KM.p2 - 6} />
					<Sx x={1535} y={row(1) - 34} text="+0.080" size={50} color={PLUS} hand at={KM.p2} />
				</Fade>
				<Fade at={KM.ratio}>
					<rect x={1180} y={row(1) + 4} width={560} height={64} rx={32} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1460} y={row(1) + 50} text="1 : 1 : 1" size={50} color={TEAL} anchor="middle" hand at={KM.ratio} />
				</Fade>
				<Tick x={1772} y={row(1) + 30} at={oneEnd + 6} s={34} />
				<Fade at={KM.r12}>
					<rect x={1180} y={row(2) - 32} width={560} height={64} rx={32} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3} />
					<Sx x={1215} y={row(2) + 14} text="0.12" size={50} color={NAVY} hand at={KM.r12} />
					<Sx x={1340} y={row(2) + 14} text=":" size={50} hand at={a4 - 8} />
					<Sx x={1375} y={row(2) + 14} text="0.080" size={50} color={VIOLET} hand at={a4} />
					<Sx x={1505} y={row(2) + 14} text=":" size={50} hand at={a5 - 8} />
					<Sx x={1540} y={row(2) + 14} text="0.080" size={50} color={GREEN_INK} hand at={a5} />
				</Fade>
				<Cross x={1772} y={row(2)} at={KM.not} s={22} />
				<Sx x={1180} y={row(2) + 104} text="not 1 : 1 : 1" size={58} color={CROSS} hand at={KM.not + 10} />
				<Sx x={96} y={880} text="used up is minus, made is plus" size={46} color={TEAL} hand at={KM.m1} />
			</Overlay>
		</>
	);
};

// ---------- N2O4 board (as C6) ----------
export const N2O4_EQ: EqItem[] = [{k: 'sp', t: 'N_2O_4(g)', color: N2O4C}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2C}];
export const nCols = (a: number) => [{name: 'N_2O_4', at: a, color: N2O4C}, {name: 'NO_2', at: a + 8, color: NO2C}];
export const NT = {x: 720, y: 620, s: 0.76};
export const VES = {x: 757, y: 322, h: 272};
export const n2o4Card = (at: number) => [
	{text: 'N_2O_4 start: 0.100 mol', at, size: 34},
	{text: 'start: no NO_2', at, size: 34},
	{text: 'vessel: 2.00 L', at, size: 34},
	{text: '[NO_2] at equilibrium:', at, size: 34},
	{text: '0.0300 mol/L', at, size: 38, color: NO2C},
	{text: 'constant temperature', at, size: 34, color: INK_SOFT},
];
const nc = (r: number, col: number) => iceCell(NT.x, NT.y, NT.s, r, col);
const N_FULL = ice(
	{at: -100, cells: [{text: '0.0500', at: -100, color: N2O4C}, {text: '0', at: -100, color: INK_SOFT}]},
	{at: -100, cells: [{text: '−0.0150', at: -100, color: MINUS}, {text: '+0.0300', at: -100, color: PLUS}]},
	{at: -100, cells: [{text: '0.0350', at: -100, color: N2O4C}, {text: '0.0300', at: -100, color: NO2C}]},
);

// ---------- 12a. Feedback, item one (E row first) ----------
const F1 = 'feedback-one';
const KF1 = cues(sc(F1), {start: 'Start with concentrations', div: ['0.100', 1], over: ['2.00', 1], is: ['0.0500', 1], meas: 'The measured 0.0300', eqrow: 'equilibrium row first', under: 'under N O two', chg: 'its change is', sub: '0.0300 minus zero', plus: 'plus 0.0300', makes: 'makes two N O two', fell: 'N two O four fell', half: 'half of that', c0150: ['0.0150', 1], eqr: 'Equilibrium N two O four is', eq0500: ['0.0500', 2], eq0350: ['0.0350', 1], kis: 'K is N O two squared', t900: '0.000900', over350: ['0.0350', 2], r257: '0.0257'});
const f1 = (p: string, k: number, occ = 1) => cw(F1, p, k, occ);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = nc;
	const tint = kf(f, [[KF1.meas, 0], [KF1.meas + 290, 1]]);
	const pos = eqLayout(N2O4_EQ, 56, 96).pos;
	const chipFly = (i: number, at: number, label: string, text: string) => {
		const src = i === 0 ? pos[0] : pos[2];
		const x0 = i === 0 ? src.sx + src.w / 2 : src.cx + 8, y0 = 236;
		const [x1, y1] = c(1, i);
		const e = prog(f, at, 30);
		const px = x0 + (x1 - x0) * e, py = y0 + (y1 - 48 - y0) * e;
		const o = prog(f, at, 6) * (1 - prog(f, at + 52, 12));
		if (o <= 0.01) return null;
		return (
			<g key={i} opacity={o}>
				<circle cx={px} cy={py} r={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={px} y={py + 11} text={text} size={32} color={AMBER_INK} anchor="middle" hand at={-1000} />
				<Sx x={px + 38} y={py + 10} text={label} size={30} color={AMBER_INK} hand at={at + 20} />
			</g>
		);
	};
	const SX = 1340, SY = 392;
	const split = (i: number) => smooth((f - KF1.makes - (i - 7) * 14) / 34);
	const num: Term[][] = [[{t: 'NO_2', p: '2', at: f1('K is N O two squared', 2), from: c(2, 1), color: NO2C, dur: 32, pAt: f1('K is N O two squared', 5)}]];
	const den: Term[][] = [[{t: 'N_2O_4', at: f1('over N two O four', 1) + 4, from: c(2, 0), color: N2O4C, dur: 32}]];
	const [ex, ey] = c(2, 1);
	const bx = NT.x + NT.s * (240 + 440) + 18;
	return (
		<>
			<Heading text="Item one" at={4} size={62} />
			<Overlay>
				<EqStrip items={N2O4_EQ} x={96} y={250} size={56} at={-100} />
				<GivensCard x={96} y={330} w={560} h={420} at={-100} lh={52} lines={n2o4Card(-100)} />
				<IceTable x={NT.x} y={NT.y} s={NT.s} outlineAt={-400} cols={nCols(-100)} rows={ice(
					{at: -100, lit: [KF1.start, KF1.is + 50], cells: [
						{text: '0.0500', at: KF1.is + 6, color: N2O4C, from: [330, 850], flyDur: 30},
						{text: '0', at: KF1.is + 30, color: INK_SOFT},
					]},
					{at: -100, lit: [KF1.chg, KF1.c0150 + 40], cells: [
						{text: '−0.0150', at: KF1.c0150, color: MINUS},
						{text: '+0.0300', at: KF1.plus + 6, color: PLUS},
					]},
					{at: -100, lit: [KF1.eqrow, KF1.under + 30], cells: [
						{text: '0.0350', at: KF1.eq0350, color: N2O4C, pre: {text: '0.0500 − 0.0150', at: KF1.eq0500}},
						{text: '0.0300', at: KF1.eqrow + 26, color: NO2C},
					]},
				)} />
				{/* concentration = moles over litres */}
				<Fade at={KF1.div} out={KF1.meas - 10}>
					<Sx x={96} y={836} text="0.100 mol" size={44} at={KF1.div} />
					<Sx x={96} y={892} text="÷  2.00 L" size={44} at={KF1.over} />
					<Sx x={300} y={880} text="= 0.0500 mol/L" size={44} color={N2O4C} at={KF1.is} />
				</Fade>
				{/* the measured value goes in the equilibrium row first */}
				<Ring cx={96 + 28 + 120} cy={330 + 108 + 4 * 52 - 12} rx={150} ry={30} at={KF1.meas} out={KF1.under + 30} color={AMBER} seed={4} />
				<CurveArrow d={[[380, 660], [520, 990], [1080, 1010], [ex, ey + 32]]} at={KF1.eqrow - 6} dur={28} out={KF1.chg} />
				<Ring cx={ex} cy={ey} rx={70} ry={34} at={KF1.eqrow + 30} out={KF1.chg + 10} color={AMBER} seed={8} />
				{/* its change is E - I */}
				<EIBracket x={bx} yTop={iceRowY(NT.y, NT.s, 0)} yBot={iceRowY(NT.y, NT.s, 2)} at={KF1.chg} out={KF1.makes} size={44} />
				<Fade at={KF1.sub} out={KF1.makes}>
					<Sx x={bx + 30} y={908} text="0.0300 − 0 = +0.0300" size={36} at={KF1.sub} />
				</Fade>
				{chipFly(1, KF1.makes - 6, '× 2', '2')}
				{chipFly(0, KF1.makes + 12, '× 1', '1')}
				{/* the change in N2O4 is half the change in NO2 */}
				<Fade at={KF1.half} out={KF1.eqr - 20}>
					<DrawPath d={`M${c(1, 1)[0]},${c(1, 1)[1] + 36} C${c(1, 1)[0] - 20},${c(1, 1)[1] + 92} ${c(1, 0)[0] + 20},${c(1, 0)[1] + 92} ${c(1, 0)[0]},${c(1, 0)[1] + 38}`} at={KF1.half} dur={22} color={AMBER_INK} width={5} />
					<Sx x={(c(1, 0)[0] + c(1, 1)[0]) / 2} y={c(1, 0)[1] + 112} text="÷ 2" size={44} color={AMBER_INK} anchor="middle" hand at={KF1.half + 14} />
				</Fade>
				{/* particle strip: 1 dot = 0.005 mol/L */}
				<Fade at={KF1.div}>
					<Sx x={SX - 10} y={SY - 56} text="1 dot = 0.005 mol/L" size={36} color={INK_SOFT} hand at={KF1.meas} />
					<Sx x={SX + 7 * 50 - 100} y={SY + 100} text="NO_2" size={36} color={NO2C} hand at={KF1.makes} />
				</Fade>
				<DotRow x={SX} y={SY} n={7} gap={50} r={16} fill={N2O4C} at={KF1.is} every={3} />
				{[7, 8, 9].map(i => {
					const u = split(i);
					const born = prog(f, KF1.is + i * 3, 8);
					return (
						<g key={i}>
							{born > 0.01 && u < 1 ? <circle cx={SX + i * 50} cy={SY} r={16 * born * (1 - u)} fill={N2O4C} stroke={INK} strokeWidth={2.5} /> : null}
							{u > 0 ? (
								<>
									<circle cx={SX + i * 50 - 14 * u} cy={SY + 36 + 40 * u} r={11 * (0.4 + 0.6 * u)} fill={NO2C} stroke={INK} strokeWidth={2.5} />
									<circle cx={SX + i * 50 + 14 * u} cy={SY + 36 + 40 * u} r={11 * (0.4 + 0.6 * u)} fill={NO2C} stroke={INK} strokeWidth={2.5} />
								</>
							) : null}
						</g>
					);
				})}
				{/* K and the three beats */}
				<FracX cx={1620} cy={610} size={54} num={num} den={den} barAt={KF1.kis} prefix="K =" prefixAt={KF1.kis} hold={260} />
				<Sx x={1310} y={745} text="0.0300^{2} = 0.000900" size={46} at={KF1.t900} />
				<Sx x={1310} y={815} text="0.000900 ÷ 0.0350" size={46} at={KF1.over350} />
				<Sx x={1310} y={905} text="K = 0.0257" size={84} color={TEAL} hand at={KF1.r257} />
				<Fade at={KF1.r257 + 40}>
					<Sx x={96} y={890} text="check" size={36} color={TEAL} hand at={KF1.r257 + 40} />
					<Sx x={96} y={940} text="0.0350 + 0.0150 = 0.0500" size={36} color={INK_SOFT} at={KF1.r257 + 46} />
					<Tick x={650} y={930} at={KF1.r257 + 66} s={36} />
				</Fade>
			</Overlay>
			<NO2Vessel x={VES.x} y={VES.y} h={VES.h} tint={tint} at={-100} />
		</>
	);
};

// ---------- 12b. Feedback: the likely slips ----------
const FS = 'feedback-slips';
const KS = cues(sc(FS), {w1: '0.018', w1b: 'used the starting', w2: '0.045', w2b: 'took off the whole', w3: '0.86', w3b: 'forgot to square'});
export const SceneFeedbackSlips: React.FC = () => {
	const c = nc;
	return (
		<>
			<Heading text="Item one" at={-100} size={62} />
			<Overlay>
				<EqStrip items={N2O4_EQ} x={96} y={250} size={56} at={-100} />
				<GivensCard x={96} y={330} w={560} h={420} at={-100} lh={52} lines={n2o4Card(-100)} />
				<IceTable x={NT.x} y={NT.y} s={NT.s} outlineAt={-400} cols={nCols(-100)} rows={N_FULL} />
				<FracX cx={1620} cy={610} size={54} num={[[{t: 'NO_2', p: '2', at: -100, color: NO2C}]]} den={[[{t: 'N_2O_4', at: -100, color: N2O4C}]]} barAt={-100} prefix="K =" prefixAt={-100} hold={260} />
				<Sx x={1310} y={745} text="0.0300^{2} = 0.000900" size={46} at={-100} />
				<Sx x={1310} y={815} text="0.000900 ÷ 0.0350" size={46} at={-100} />
				<Sx x={1310} y={905} text="K = 0.0257" size={84} color={TEAL} hand at={-100} />
				<Sx x={1320} y={262} text="likely slips" size={40} color={INK_SOFT} hand at={4} />
				<Chip x={1320} y={290} w={540} text="0.018: initial used" size={38} at={KS.w1} color={INK_SOFT} cross={KS.w1b + 30} />
				<Arrow x1={1318} y1={324} x2={c(0, 0)[0] + 60} y2={c(0, 0)[1] - 6} at={KS.w1b} color={CROSS} width={5} out={KS.w2 - 10} />
				<Ring cx={c(0, 0)[0]} cy={c(0, 0)[1]} rx={80} ry={32} at={KS.w1b + 10} out={KS.w2 - 10} color={CROSS} seed={4} />
				<Chip x={1320} y={372} w={540} text="0.045: change not halved" size={38} at={KS.w2} color={INK_SOFT} cross={KS.w2b + 30} />
				<Arrow x1={1318} y1={406} x2={c(1, 0)[0] + 76} y2={c(1, 0)[1] - 20} at={KS.w2b} color={CROSS} width={5} out={KS.w3 - 10} />
				<Ring cx={c(1, 0)[0]} cy={c(1, 0)[1]} rx={86} ry={32} at={KS.w2b + 10} out={KS.w3 - 10} color={CROSS} seed={5} />
				<Fade at={KS.w2b + 24} out={KS.w3 - 10}>
					<Sx x={706} y={806} text="not halved: −0.0300" size={38} color={INK_SOFT} anchor="end" hand at={KS.w2b + 24} />
					<Sx x={706} y={852} text="leaves 0.0200" size={38} color={INK_SOFT} anchor="end" hand at={KS.w2b + 32} />
				</Fade>
				<Chip x={1320} y={454} w={540} text="0.86: power left off" size={38} at={KS.w3} color={INK_SOFT} cross={KS.w3b + 30} />
				<Ring cx={1690} cy={560} rx={22} ry={28} at={KS.w3b} color={CROSS} seed={3} />
			</Overlay>
			<NO2Vessel x={VES.x} y={VES.y} h={VES.h} tint={1} at={-100} />
		</>
	);
};
void INK; void PLUS; void TEAL;
