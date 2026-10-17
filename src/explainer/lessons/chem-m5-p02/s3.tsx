import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {EqStrip, Overlay} from '../chem-m5-c05/parts';
import type {Term} from '../chem-m5-c05/parts';
import {FracX, GivensCard} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceRowY} from '../chem-m5-c06/ice';
import {EIBracket, RuleChip} from '../chem-m5-c06a/types';
import {Thermometer} from '../chem-m5-c03/parts';
import {MistakeChip, TaskLine} from '../chem-m5-g03c/board';
import {Arrow, Cuvette, DataChip, Fade, Grid100, MixFlask, PipetteH, Ring, Sx, TEAL, Tick, cuvW, mixFlaskW, tw} from './parts';
import {CROSS, FE, FE_INK, GREEN, Heading, MINUS, PLUS, RED, RED_INK, SCN, SCN_INK, WATER, kf, sc} from './common';
import {IRON_EQ} from './s1';
import {MIX_CARD} from './s2';

const E44 = {x: 96, y: 240, s: 44};
const ironCols = (a: number) => [{name: 'Fe^{3+}', at: a, color: FE_INK}, {name: 'SCN^{-}', at: a + 8, color: SCN_INK}, {name: 'FeSCN^{2+}', at: a + 16, color: RED_INK}];
const Board: React.FC<{task?: boolean}> = ({task = true}) => (
	<>
		{task ? <TaskLine text="Find K for this mixture" at={-100} /> : null}
		<EqStrip items={IRON_EQ} x={E44.x} y={E44.y} size={E44.s} at={-100} />
	</>
);

// ---------- 7a. Dilution first ----------
const D = 'dilution';
const K7 = cues(sc(D), {before: 'Before the ICE table', trap: 'one trap', bottles: 'The bottles were', pour: 'pouring 5', total: 'millilitre total', spreads: 'spreads each ion', twice: 'twice the volume', halves: 'concentration halves', c200: ['0.00200 times', 1], v5: '5.00 over', v10: '10.00 is', c100: ['0.00100 moles', 1], forIron: 'for iron and', forThio: 'for thiocyanate', always: 'Always use', after: 'after mixing', never: 'never the bottle values'});
const DOTS8: [number, number][] = [[0.2, 0.25], [0.55, 0.2], [0.8, 0.35], [0.3, 0.55], [0.65, 0.6], [0.15, 0.82], [0.45, 0.85], [0.82, 0.78]];
const DensityBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		{DOTS8.map(([u, v], i) => <circle key={i} cx={x + 14 + (w - 28) * u} cy={y + 14 + (h - 28) * v} r={10} fill={FE} stroke={INK} strokeWidth={2} />)}
		<Sx x={x + w / 2} y={y + h + 36} text={label} size={30} color={INK_SOFT} anchor="middle" hand at={at} />
	</Fade>
);
export const SceneDilution: React.FC = () => {
	const f = useCurrentFrame();
	const pour = prog(f, K7.pour, 80);
	const FL = {x: 1500, y: 320, h: 420};
	return (
		<>
			<Overlay>
				<Board />
				<GivensCard x={96} y={280} w={720} h={378} at={-100} lh={50} lines={MIX_CARD([-100, -100, -100, -100], {at: -100})} />
				<Sx x={880} y={300} text="one trap: mixing dilutes" size={44} color={AMBER_INK} hand at={K7.trap} />
				{/* two 5.00 mL portions into one 10.00 mL total */}
				<Fade at={K7.bottles}>
					<PipetteH x={900} y={450} w={480} fill={1 - pour} color={FE} />
					<Sx x={900} y={380} text="5.00 mL of Fe^{3+} (0.00200 mol/L)" size={30} color={FE_INK} weight={700} at={K7.bottles} />
					<PipetteH x={900} y={600} w={480} fill={1 - pour} color={WATER} />
					<Sx x={900} y={530} text="5.00 mL of SCN^{-} (0.00200 mol/L)" size={30} color={SCN_INK} weight={700} at={K7.bottles + 6} />
					<MixFlask x={FL.x} y={FL.y} h={FL.h} fill={pour} color="#f3e4a8" />
				</Fade>
				<Sx x={FL.x + mixFlaskW(FL.h) / 2} y={FL.y + FL.h + 46} text="10.00 mL total" size={38} color={INK} anchor="middle" hand at={K7.total} />
				{/* the same particles in twice the volume */}
				<DensityBox x={920} y={695} w={130} h={100} at={K7.spreads} label="in 5.00 mL" />
				<Arrow x1={1066} y1={745} x2={1130} y2={745} at={K7.spreads + 10} color={AMBER_INK} width={4} />
				<DensityBox x={1150} y={680} w={200} h={130} at={K7.spreads + 14} label="in 10.00 mL (half as crowded)" />
				<Sx x={920} y={900} text="same particles, twice the volume" size={36} color={AMBER_INK} hand at={K7.twice} />
				{/* the working: halves */}
				<Sx x={900} y={960} text="0.00200" size={46} weight={700} at={K7.c200} />
				<Sx x={1100} y={960} text="× 5.00" size={46} weight={700} at={K7.v5 - 10} />
				<Sx x={1270} y={960} text="/ 10.00" size={46} weight={700} at={K7.v10 - 8} />
				<Sx x={1460} y={960} text="= 0.00100 mol/L" size={46} color={GREEN} weight={800} at={K7.c100 - 6} />
				<Sx x={880} y={1020} text="each starting concentration halves" size={34} color={INK_SOFT} hand at={K7.halves} />
				<Ring cx={960} cy={370} rx={78} ry={26} at={K7.v5} out={K7.forIron} color={AMBER} seed={3} />
				<Ring cx={960} cy={520} rx={78} ry={26} at={K7.v5 + 6} out={K7.forIron} color={AMBER} seed={4} />
				<Ring cx={1182} cy={946} rx={88} ry={34} at={K7.v5} out={K7.forIron} color={AMBER} seed={5} />
				<Ring cx={FL.x + mixFlaskW(FL.h) / 2} cy={FL.y + FL.h + 34} rx={120} ry={32} at={K7.v10} out={K7.forIron} color={AMBER} seed={6} />
				<Ring cx={1352} cy={946} rx={90} ry={34} at={K7.v10} out={K7.forIron} color={AMBER} seed={7} />
				{/* the two starting values join the board */}
				<Fade at={K7.forIron - 6}>
					<rect x={96} y={690} width={720} height={170} rx={22} fill="#fffdf8" stroke={GREEN} strokeWidth={3} />
					<Sx x={122} y={738} text="starting (after mixing)" size={32} color={INK_SOFT} hand at={K7.forIron - 6} />
					<Sx x={122} y={790} text="Fe^{3+}: 0.00100 mol/L" size={36} color={FE_INK} weight={700} at={K7.forIron} />
					<Sx x={122} y={838} text="SCN^{-}: 0.00100 mol/L" size={36} color={SCN_INK} weight={700} at={K7.forThio} />
				</Fade>
				<MistakeChip x={96} y={900} text="start = 0.00200 (bottle value)" size={34} at={K7.never} note="mixing dilutes: use 0.00100" />
			</Overlay>
		</>
	);
};

// ---------- 7b. ICE table, E row first ----------
const I = 'ice-table';
const K8 = cues(sc(I), {now: 'Now the ICE table', iI: 'I for initial', cC: 'C for change', eE: 'E for equilibrium', init: 'The initial row', f1: ['0.00100 for iron', 1], f2: ['0.00100 for thiocyanate', 1], zero: 'zero for the red ion', meas: 'The measured value', erow: 'equilibrium row first', v150: ['1.50 times ten', 1], its: 'Its change', eMinus: 'equilibrium minus initial', plus: 'so plus', one: 'one to one to one', fall: 'each fall', same: 'same amount', leaves: 'That leaves', v850: '8.50'});
export const ICE_CARD = (ats: number[]) => [
	{text: 'starting (after mixing):', at: ats[0], size: 30, color: INK_SOFT},
	{text: 'Fe^{3+}: 0.00100 = 1.00 × 10^{-3}', at: ats[0], size: 34, color: FE_INK},
	{text: 'SCN^{-}: 0.00100 = 1.00 × 10^{-3}', at: ats[0], size: 34, color: SCN_INK},
	{text: 'measured at equilibrium:', at: ats[1], size: 30, color: INK_SOFT},
	{text: '[FeSCN^{2+}] = 1.50 × 10^{-4}', at: ats[1], size: 34, color: GREEN},
];
const TB = {x: 820, y: 300};
const ICE_TXT = {i: '1.00 × 10^{-3}', e: '1.50 × 10^{-4}', ce: '+1.50 × 10^{-4}', cr: '−1.50 × 10^{-4}', er: '8.50 × 10^{-4}'};
export const SceneIce: React.FC = () => {
	const f = useCurrentFrame();
	const cell = (r: number, c: number) => iceCell(TB.x, TB.y, 1, r, c);
	const [ex, ey] = cell(2, 2);
	const yTop = iceRowY(TB.y, 1, 0), yBot = iceRowY(TB.y, 1, 2);
	const CS = 34;
	return (
		<>
			<Overlay>
				<Board />
				<GivensCard x={96} y={280} w={680} h={384} at={-100} lh={52} lines={ICE_CARD([-100, -100])} />
				<IceTable x={TB.x} y={TB.y} cols={ironCols(K8.now + 6)} outlineAt={K8.now} rows={[
					{at: K8.iI, labelAt: K8.iI, lit: [K8.init, K8.zero + 40], cells: [
						{text: ICE_TXT.i, at: K8.f1 + 10, color: FE_INK, size: CS, from: [400, 438], flyDur: 26},
						{text: ICE_TXT.i, at: K8.f2 + 10, color: SCN_INK, size: CS, from: [400, 490], flyDur: 26},
						{text: '0', at: K8.zero, color: INK_SOFT, size: CS}]},
					{at: K8.cC, labelAt: K8.cC, lit: [K8.its, K8.same + 40], cells: [
						{text: ICE_TXT.cr, at: K8.fall + 4, color: MINUS, size: CS, tag: {text: 'used up', at: K8.fall + 24, color: MINUS}},
						{text: ICE_TXT.cr, at: K8.fall + 12, color: MINUS, size: CS, tag: {text: 'used up', at: K8.fall + 30, color: MINUS}},
						{text: ICE_TXT.ce, at: K8.plus + 6, color: PLUS, size: CS, tag: {text: 'made', at: K8.plus + 26, color: PLUS}}]},
					{at: K8.eE, labelAt: K8.eE, lit: [K8.erow, K8.v150 + 60], cells: [
						{text: ICE_TXT.er, at: K8.v850 + 6, color: FE_INK, size: CS},
						{text: ICE_TXT.er, at: K8.v850 + 14, color: SCN_INK, size: CS},
						{text: ICE_TXT.e, at: K8.v150 + 4, color: GREEN, size: CS, from: [400, 606], flyDur: 30}]},
				]} />
				<Ring cx={ex} cy={ey} rx={100} ry={40} at={K8.v150 + 36} out={K8.its + 40} color={AMBER} seed={8} />
				{/* change = E - I */}
				<EIBracket x={TB.x + 905} yTop={yTop} yBot={yBot} at={K8.eMinus} size={40} />
				<Sx x={TB.x} y={790} text="1.50 × 10^{-4} − 0 = +1.50 × 10^{-4}" size={40} weight={700} at={K8.eMinus + 10} out={K8.leaves - 10} />
				{/* 1 : 1 : 1 */}
				{[0, 1, 2].map(i => {
					const [cx, cy] = cell(1, i);
					const p = prog(f, K8.one + i * 8, 22);
					const o = prog(f, K8.one + i * 8, 6) * (1 - prog(f, K8.fall + 30, 12));
					const y = TB.y - 40 + (cy - 46 - (TB.y - 40)) * p;
					return o > 0.01 ? (
						<g key={i} opacity={o}>
							<circle cx={cx} cy={y} r={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
							<Sx x={cx} y={y + 12} text="1" size={34} color={AMBER_INK} anchor="middle" hand at={-1000} />
						</g>
					) : null;
				})}
				<Sx x={TB.x + 905} y={TB.y - 20} text="1 : 1 : 1" size={40} color={AMBER_INK} anchor="end" hand at={K8.one + 20} out={K8.fall + 40} />
				<Sx x={TB.x} y={790} text="1.00 × 10^{-3} − 1.50 × 10^{-4} = 8.50 × 10^{-4}" size={40} weight={700} at={K8.leaves} />
				<RuleChip x={96} y={700} w={680} at={K8.meas} title="E row first" ats={[K8.erow, K8.eMinus, K8.one, K8.leaves]} lit={[[0, K8.erow], [1, K8.eMinus], [2, K8.one], [3, K8.leaves]]} />
			</Overlay>
		</>
	);
};

// ---------- 8. Find K, and what its size means ----------
const FK = 'find-k';
const K9 = cues(sc(FK), {sub: 'Now substitute', into: 'into the expression', redOver: 'the red ion over', ironT: 'iron times thiocyanate', thatIs: 'That is 1.50', over: 'over 8.50', sq: 'squared', gives: 'which gives about', unit: 'no unit written', notice: 'Notice what', pct: 'fifteen percent', hundreds: 'K in the hundreds', almost: 'almost all products', band: 'middle band', meas: 'measurable amounts'});
const MT = {x: 96, y: 210, s: 0.62};
/** Small finished table from the last scene, Equilibrium row lit. */
const MiniTable: React.FC<{litAt: number; litOut: number}> = ({litAt, litOut}) => (
	<IceTable x={MT.x} y={MT.y} s={MT.s} cols={ironCols(-100)} rows={[
		{at: -100, cells: [{text: ICE_TXT.i, at: -100, color: FE_INK, size: 34}, {text: ICE_TXT.i, at: -100, color: SCN_INK, size: 34}, {text: '0', at: -100, color: INK_SOFT, size: 34}]},
		{at: -100, cells: [{text: ICE_TXT.cr, at: -100, color: MINUS, size: 34}, {text: ICE_TXT.cr, at: -100, color: MINUS, size: 34}, {text: ICE_TXT.ce, at: -100, color: PLUS, size: 34}]},
		{at: -100, lit: [litAt, litOut], cells: [{text: ICE_TXT.er, at: -100, color: FE_INK, size: 34}, {text: ICE_TXT.er, at: -100, color: SCN_INK, size: 34}, {text: ICE_TXT.e, at: -100, color: GREEN, size: 34}]},
	]} />
);
/** The C5 size bands on a log line, with a marker. */
export const BandLine: React.FC<{x0: number; x1: number; y: number; at: number; k: number; kAt: number; label: string}> = ({x0, x1, y, at, k, kAt, label}) => {
	const f = useCurrentFrame();
	const lo = -6, hi = 6;
	const X = (v: number) => x0 + ((Math.log10(v) - lo) / (hi - lo)) * (x1 - x0);
	const drop = (1 - prog(f, kAt, 14)) * -50;
	return (
		<Fade at={at}>
			<rect x={x0} y={y - 18} width={X(1e-3) - x0} height={36} fill="#c9d8ea" opacity={0.55} />
			<rect x={X(1e-3)} y={y - 18} width={X(1e3) - X(1e-3)} height={36} fill="#f6d77a" opacity={0.55} />
			<rect x={X(1e3)} y={y - 18} width={x1 - X(1e3)} height={36} fill="#cfe6d6" opacity={0.7} />
			<path d={`M${x0},${y} L${x1},${y}`} stroke={INK} strokeWidth={4} />
			{[1e-3, 1, 1e3].map(v => <g key={v}><path d={`M${X(v)},${y - 22} L${X(v)},${y + 22}`} stroke={INK} strokeWidth={3} /><Sx x={X(v)} y={y + 52} text={v === 1e-3 ? '0.001' : v === 1 ? '1' : '1000'} size={26} color={INK_SOFT} anchor="middle" weight={600} at={-100} /></g>)}
			<Sx x={(x0 + X(1e-3)) / 2} y={y + 86} text="mostly reactants" size={26} color={INK_SOFT} anchor="middle" hand at={at} />
			<Sx x={(X(1e-3) + X(1e3)) / 2} y={y + 86} text="all present in measurable amounts" size={28} color={AMBER_INK} anchor="middle" hand at={at} />
			<Sx x={(X(1e3) + x1) / 2} y={y + 86} text="mostly products" size={26} color={INK_SOFT} anchor="middle" hand at={at} />
			<g opacity={prog(f, kAt, 10)} transform={`translate(0,${drop})`}>
				<path d={`M${X(k)},${y - 8} L${X(k) - 16},${y - 40} Q${X(k)},${y - 54} ${X(k) + 16},${y - 40} Z`} fill={TEAL} stroke={INK} strokeWidth={3} />
				<Sx x={X(k)} y={y - 64} text={label} size={36} color={TEAL} anchor="middle" hand at={kAt} />
			</g>
		</Fade>
	);
};
/** A plain fraction of two marked-up strings, centred on cx. */
const TextFrac: React.FC<{cx: number; cy: number; num: string; den: string; size: number; at: number; numAt?: number; denAt?: number; out?: number; color?: string; prefix?: string}> = ({cx, cy, num, den, size, at, numAt, denAt, out, color = INK, prefix}) => {
	const w = Math.max(tw(num, size), tw(den, size)) + 30;
	return (
		<Fade at={at} out={out}>
			{prefix ? <Sx x={cx - w / 2 - 16} y={cy + size * 0.32} text={prefix} size={size} color={color} anchor="end" weight={700} at={at} /> : null}
			<DrawPath d={`M${cx - w / 2},${cy} L${cx + w / 2},${cy}`} at={at} dur={12} width={size * 0.07} color={color} />
			<Sx x={cx} y={cy - size * 0.32} text={num} size={size} color={color} anchor="middle" weight={700} at={numAt ?? at} />
			<Sx x={cx} y={cy + size * 1.06} text={den} size={size} color={color} anchor="middle" weight={700} at={denAt ?? at} />
		</Fade>
	);
};
export const SceneFindK: React.FC = () => {
	const t = (s: string, at: number, color: string): Term => ({t: s, at, color});
	return (
		<>
			<Overlay>
				<TaskLine text="Find K for this mixture" at={-100} />
				<MiniTable litAt={K9.sub} litOut={K9.gives + 20} />
				<FracX cx={1300} cy={300} size={56} prefix="K =" prefixAt={K9.into} barAt={K9.redOver + 10}
					num={[[t('FeSCN^{2+}', K9.redOver, RED_INK)]]} den={[[t('Fe^{3+}', K9.ironT, FE_INK), t('SCN^{-}', K9.ironT + 14, SCN_INK)]]} />
				<TextFrac cx={1300} cy={540} prefix="K =" num="1.50 × 10^{-4}" den="(8.50 × 10^{-4})(8.50 × 10^{-4})" size={48} at={K9.thatIs} numAt={K9.thatIs + 10} denAt={K9.over + 6} out={K9.sq + 10} />
				<TextFrac cx={1300} cy={540} prefix="K =" num="1.50 × 10^{-4}" den="(8.50 × 10^{-4})^{2} = 7.225 × 10^{-7}" size={48} at={K9.sq + 10} />
				<Sx x={1300} y={770} text="K = 208" size={84} color={TEAL} anchor="middle" hand at={K9.gives + 10} />
				<Sx x={1530} y={760} text="no unit written" size={34} color={INK_SOFT} hand at={K9.unit} />
				{/* what the size does not mean */}
				<Grid100 x={96} y={540} cell={30} n={15} at={K9.pct - 6} every={2} />
				<Sx x={96} y={880} text="one square = 1 in 100 of the iron" size={30} color={INK_SOFT} hand at={K9.pct} />
				<Sx x={96} y={930} text="1.50 × 10^{-4} / 1.00 × 10^{-3} = 15%" size={34} weight={700} color={RED_INK} at={K9.pct + 12} />
				<MistakeChip x={440} y={660} text="K = 208, so mostly products" size={32} at={K9.almost - 10} note="only 15% reacted" />
				<BandLine x0={900} x1={1800} y={960} at={K9.band} k={208} kAt={K9.band + 12} label="208" />
			</Overlay>
		</>
	);
};

// ---------- 9. Is the value any good? ----------
const RP = 'repeats';
const K10 = cues(sc(RP), {not: 'is not enough', five: 'A class makes five', temp: 'same temperature', ifK: 'If K really', vals: 'five values', between: 'between 205', avg: 'average of 208', spread: 'That spread', trust: 'how far to trust', write: 'Write the temperature', changes: 'K changes with temperature', weak: 'The weak points', small: 'small volumes', fits: 'how well the line fits', assume: 'the assumption'});
const RT = {x: 96, y: 220, cols: [150, 280, 160, 160], head: 64, row: 62};
const ROWS = [['1', '1.00', '0.162', '214'], ['2', '2.00', '0.303', '205'], ['3', '3.00', '0.448', '209'], ['4', '4.00', '0.575', '205'], ['5', '5.00', '0.705', '208']];
const KS = [214, 205, 209, 205, 208];
export const SceneRepeats: React.FC = () => {
	const f = useCurrentFrame();
	const W = RT.cols.reduce((a, b) => a + b, 0);
	const colX = (c: number) => RT.x + RT.cols.slice(0, c).reduce((a, b) => a + b, 0);
	const rowY = (r: number) => RT.y + RT.head + r * RT.row;
	const rowAt = (r: number) => K10.five + 14 + r * 12;
	const kAt = (r: number) => K10.vals + r * 9;
	const SP = {x0: 1060, x1: 1780, y: 360};
	const sx = (k: number) => SP.x0 + ((k - 200) / 20) * (SP.x1 - SP.x0);
	return (
		<>
			<Heading text="Is the value any good?" at={4} size={62} />
			<Overlay>
				{/* the class results table */}
				<Fade at={K10.five}>
					<rect x={RT.x} y={RT.y} width={W} height={RT.head + 5 * RT.row} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<rect x={RT.x} y={RT.y} width={W} height={RT.head} rx={16} fill="#efe6d6" />
					{['mixture', 'SCN^{-} added (mL)', 'A', 'K'].map((h, c) => <Sx key={h} x={colX(c) + RT.cols[c] / 2} y={RT.y + 44} text={h} size={30} color={c === 3 ? TEAL : INK} anchor="middle" weight={700} at={K10.five} />)}
					{[1, 2, 3, 4].map(r => <path key={r} d={`M${RT.x},${rowY(r)} L${RT.x + W},${rowY(r)}`} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />)}
				</Fade>
				{ROWS.map((row, r) => (
					<g key={r}>
						{row.slice(0, 3).map((v, c) => <Sx key={c} x={colX(c) + RT.cols[c] / 2} y={rowY(r) + 42} text={v} size={34} color={c === 2 ? RED_INK : INK} anchor="middle" weight={600} at={rowAt(r) + c * 3} />)}
						<Sx x={colX(3) + RT.cols[3] / 2} y={rowY(r) + 42} text={row[3]} size={36} color={TEAL} anchor="middle" weight={800} at={kAt(r)} />
					</g>
				))}
				<Sx x={RT.x} y={RT.y + RT.head + 5 * RT.row + 40} text="each with 5.00 mL of Fe^{3+}, made up to 10.00 mL" size={30} color={INK_SOFT} hand at={K10.five + 30} />
				<Sx x={RT.x + W + 20} y={rowY(4) + 42} text="← the worked mixture" size={30} color={AMBER_INK} hand at={K10.vals + 50} out={K10.between} />
				<DataChip x={RT.x} y={RT.y + RT.head + 5 * RT.row + 64} at={K10.five + 30} />
				{/* the spread */}
				<Fade at={K10.between}>
					<DrawPath d={`M${RT.x + W + 14},${rowY(0) + 14} L${RT.x + W + 30},${rowY(0) + 14} L${RT.x + W + 30},${rowY(4) + 50} L${RT.x + W + 14},${rowY(4) + 50}`} at={K10.between} dur={18} color={AMBER_INK} width={5} />
					<Sx x={RT.x + W + 44} y={rowY(2) + 30} text="range" size={34} color={AMBER_INK} hand at={K10.between + 6} />
					<Sx x={RT.x + W + 44} y={rowY(2) + 72} text="205 to 214" size={34} color={AMBER_INK} hand at={K10.between + 12} />
				</Fade>
				<Fade at={K10.temp}>
					<Sx x={SP.x0} y={SP.y - 90} text="the five K values" size={32} color={INK_SOFT} hand at={K10.temp} />
					<path d={`M${SP.x0},${SP.y} L${SP.x1},${SP.y}`} stroke={INK} strokeWidth={4} />
					{[200, 205, 210, 215, 220].map(k => <g key={k}><path d={`M${sx(k)},${SP.y - 12} L${sx(k)},${SP.y + 12}`} stroke={INK} strokeWidth={3} /><Sx x={sx(k)} y={SP.y + 46} text={String(k)} size={28} color={INK_SOFT} anchor="middle" weight={600} at={-100} /></g>)}
				</Fade>
				{KS.map((k, i) => {
					const dup = KS.slice(0, i).filter(v => v === k).length;
					return <circle key={i} cx={sx(k)} cy={SP.y - 22 - dup * 24} r={10 * prog(f, kAt(i) + 4, 8)} fill={TEAL} stroke={INK} strokeWidth={2} />;
				})}
				<Fade at={K10.avg}>
					<path d={`M${sx(208)},${SP.y - 80} L${sx(208)},${SP.y + 12}`} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<Sx x={sx(208)} y={SP.y - 92} text="mean 208" size={36} color={AMBER_INK} anchor="middle" hand at={K10.avg} />
				</Fade>
				<Sx x={SP.x0} y={SP.y + 110} text="a small spread: you can trust it more" size={34} color={INK} hand at={K10.trust} />
				{/* record the temperature */}
				<Thermometer x={1100} y={500} h={250} temp={25} at={K10.write} label=" " />
				<Sx x={1200} y={600} text="T = ___ C" size={46} color={INK} weight={700} at={K10.write + 6} />
				<Sx x={1200} y={650} text="record it beside K" size={36} color={AMBER_INK} hand at={K10.write + 12} />
				<Sx x={1200} y={700} text="K changes with temperature" size={34} color={INK_SOFT} hand at={K10.changes} />
				{/* the weak points */}
				<Sx x={96} y={850} text="weak points:" size={38} color={INK} hand at={K10.weak} />
				<Fade at={K10.small}>
					<PipetteH x={300} y={840} w={220} fill={0.6} color={FE} />
					<Sx x={410} y={900} text="small volumes" size={32} color={INK} anchor="middle" hand at={K10.small} />
				</Fade>
				<Fade at={K10.fits}>
					<path d="M620,900 L620,810 M620,900 L760,900" fill="none" stroke={INK} strokeWidth={3} />
					<path d="M620,898 L752,820" stroke={TEAL} strokeWidth={4} />
					{[[650, 872], [680, 866], [705, 846], [735, 838]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={RED} />)}
					<Sx x={690} y={950} text="how well the line fits" size={32} color={INK} anchor="middle" hand at={K10.fits} />
				</Fade>
				<Fade at={K10.assume}>
					<Cuvette kind={2} x={900} y={780} h={140} />
					<circle cx={900 + cuvW(140) / 2} cy={860} r={8} fill={SCN} stroke={INK} strokeWidth={2} />
					<Sx x={1000} y={830} text="standards: almost all" size={32} color={INK} hand at={K10.assume} />
					<Sx x={1000} y={870} text="the SCN^{-} turned red, not all" size={32} color={INK} hand at={K10.assume + 6} />
				</Fade>
				<Sx x={1460} y={980} text="handle cuvettes by the ribbed sides;" size={26} color={INK_SOFT} hand at={K10.assume + 30} />
				<Sx x={1460} y={1012} text="same cuvette for blank and samples" size={26} color={INK_SOFT} hand at={K10.assume + 34} />
			</Overlay>
		</>
	);
};
void FE; void tw;
