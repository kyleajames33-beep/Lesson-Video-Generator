import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {ColourKey} from '../chem-m5-c02/parts';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, HotTube, Overlay, Push, Ring, Sx, Tag, TubeScale, TEAL, Tick, tw} from './parts';
import type {Term} from './parts';
import {CARD, EQ, LENS, PCL_EQ, PclLens, TB, hiCols, hiPos, H2I2_EQ, pclCols, pclPos} from './board';
import {IceTable, iceCell, iceRowY, LABEL_W} from './ice';
import {Heading, GREEN, MINUS, NAVY, PLUS, VIOLET, GREEN_INK, cw, dur, kf, sc} from './common';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const PCL_CARD = [
	{text: 'PCl_5: 0.40 mol', at: -100}, {text: 'flask: 2.0 L', at: -100},
	{text: 'at equilibrium:', at: -100, color: INK_SOFT, size: 34}, {text: '[Cl_2] = 0.080 mol/L', at: -100, color: GREEN},
];

// ---------- 4a. The equilibrium row ----------
const E = 'equilibrium-row';
const KE = cues(sc(E), {eqrow: 'The equilibrium row', is: ['is', 1], init: 'initial row', plus: 'plus', chg: 'change row', z20: '0.20', r12: '0.12', m080: ['0.080', 2]});
const e3 = cw(E, 'P C L three and chlorine', 3);
const eIs = cw(E, 'row is the', 1);
export const SceneEquilibriumRow: React.FC = () => {
	const f = useCurrentFrame();
	const sy = (r: number) => TB.y + 110 + r * 100;
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Tag x={460} y={96} w={330} text="illustrative values" at={-100} />
				<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={PCL_CARD} />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, lit: [KE.init, KE.plus + 40], cells: [{text: '0.20', at: -100, color: NAVY}, {text: '0', at: -100, color: INK_SOFT}, {text: '0', at: -100, color: INK_SOFT}]},
					{at: -100, lit: [KE.chg, KE.chg + 50], cells: [{text: '−0.080', at: -100, color: MINUS}, {text: '+0.080', at: -100, color: PLUS}, {text: '+0.080', at: -100, color: PLUS}]},
					{at: KE.eqrow, cells: [
						{text: '0.12', at: KE.r12, color: NAVY, pre: {text: '0.20 + (−0.080)', at: KE.z20}},
						{text: '0.080', at: e3, color: VIOLET},
						{text: '0.080', at: KE.m080, color: GREEN_INK},
					]},
				)} />
				<Ring cx={TB.x + 130} cy={iceRowY(TB.y, 1, 2)} rx={150} ry={46} at={KE.eqrow} out={KE.init + 40} color={AMBER} seed={5} />
				{/* pen plus and equals between the rows */}
				<DrawPath d={`M${TB.x + 200},${sy(1)} L${TB.x + 240},${sy(1)}`} at={KE.plus} dur={8} color={AMBER_INK} width={8} />
				<DrawPath d={`M${TB.x + 220},${sy(1) - 20} L${TB.x + 220},${sy(1) + 20}`} at={KE.plus + 6} dur={8} color={AMBER_INK} width={8} />
				<DrawPath d={`M${TB.x + 200},${sy(2) - 7} L${TB.x + 240},${sy(2) - 7}`} at={eIs} dur={8} color={AMBER_INK} width={8} />
				<DrawPath d={`M${TB.x + 200},${sy(2) + 7} L${TB.x + 240},${sy(2) + 7}`} at={eIs + 5} dur={8} color={AMBER_INK} width={8} />
				<PclLens counts={() => ({n: 12, v: 8})} />
				<ColourKey x={1480} y={800} at={-100} />
			</Overlay>
		</>
	);
};

// ---------- 4b. K and a check ----------
const F = 'find-k';
const KF = cues(sc(F), {now: 'Now K', ratio: 'Products over reactants', every: 'every coefficient', keq: 'K equals', pcl3: 'P C L three', cl: 'times chlorine', over: 'over P C L five', sub: 'Substitute the equilibrium values',
	a1: ['0.080', 1], a2: ['0.080', 2], den: ['0.12', 1], top: 'The top is', t64: ['0.0064', 1], t64b: ['0.0064', 2], divby: 'divided by', r0533: '0.0533', kis: 'K is', k053: '0.053', two: 'to two significant', chk: 'Check the subtraction', c12: ['0.12', 3], c8: ['0.080', 3], c20: '0.20', start: 'what we started with'});
const fK = (p: string, k: number) => cw(F, p, k);
const d = dur(F);
export const SceneFindK: React.FC = () => {
	const f = useCurrentFrame();
	const s = kf(f, [[8, 1], [52, 0.72]]);
	const tx = kf(f, [[8, TB.x], [52, 96]]), ty = kf(f, [[8, TB.y], [52, 300]]);
	const lens = {cx: kf(f, [[26, LENS.cx], [70, 240]]), cy: kf(f, [[8, LENS.cy], [40, 790]]), r: kf(f, [[8, LENS.r], [40, 125]])};
	const cellP = (c: number) => iceCell(96, 300, 0.72, 2, c);
	const faintOut = KF.sub - 6;
	const SYM = {cx: 1250, cy: 330, size: 60};
	const sx = (i: number) => pclPos[i].sx;
	const symNum: Term[][] = [[
		{t: 'PCl_3', at: fK('K equals P C L three', 2), from: [sx(2), EQ.y], color: VIOLET, faint1: faintOut, dur: 32},
		{t: 'Cl_2', at: fK('times chlorine', 1), from: [sx(4), EQ.y], color: GREEN_INK, faint1: faintOut, dur: 32},
	]];
	const symDen: Term[][] = [[{t: 'PCl_5', at: fK('over P C L five', 1), from: [sx(0), EQ.y], color: NAVY, faint1: faintOut, dur: 32}]];
	const NUM = {cx: 1250, cy: 590, size: 60};
	const numNum: Term[][] = [
		[{t: '0.080', br: false, at: KF.a1, from: cellP(1), color: VIOLET, dur: 34, out: KF.top}, {t: '×', br: false, at: KF.a1 + 22, out: KF.top}, {t: '0.080', br: false, at: KF.a2, from: cellP(2), color: GREEN_INK, dur: 34, out: KF.top}],
		[{t: '0.0064', br: false, at: KF.t64 - 2}],
	];
	const numDen: Term[][] = [[{t: '0.12', br: false, at: KF.den, from: cellP(0), color: NAVY, dur: 34}]];
	const Wn = 430;
	const check = KF.chk;
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Push outAt={d - 34}>
					<Tag x={460} y={96} w={330} text="illustrative values" at={-100} />
					<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
					<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} out={4} lh={58} lines={PCL_CARD} />
					{/* faint coefficient 1s on the equation */}
					{[0, 2, 4].map(i => <Sx key={i} x={sx(i) - 14} y={EQ.y - 36} text="1" size={30} color={INK_SOFT} hand at={KF.every + i * 4} out={faintOut + 10} />)}
					<IceTable x={tx} y={ty} s={s} cols={pclCols([-100, -100, -100])} rows={ice(
						{at: -100, dim: [KF.sub, 0, 0.3], cells: [{text: '0.20', at: -100, color: NAVY}, {text: '0', at: -100, color: INK_SOFT}, {text: '0', at: -100, color: INK_SOFT}]},
						{at: -100, dim: [KF.sub, 0, 0.3], cells: [{text: '−0.080', at: -100, color: MINUS}, {text: '+0.080', at: -100, color: PLUS}, {text: '+0.080', at: -100, color: PLUS}]},
						{at: -100, lit: [KF.sub, KF.top + 30], cells: [{text: '0.12', at: -100, color: NAVY}, {text: '0.080', at: -100, color: VIOLET}, {text: '0.080', at: -100, color: GREEN_INK}]},
					)} />
					<Fade at={KF.ratio}>
						<Sx x={1250} y={190} text="products over reactants" size={40} color={TEAL} anchor="middle" hand at={KF.ratio} out={KF.sub - 10} />
					</Fade>
					<FracX cx={SYM.cx} cy={SYM.cy} size={SYM.size} num={symNum} den={symDen} barAt={KF.keq} prefix="K =" prefixAt={KF.keq} />
					<Tag x={1490} y={290} w={380} text="K: no unit written" at={KF.sub} color={AMBER_INK} />
					<Fade at={KF.sub}>
						<Sx x={96} y={645} text="equilibrium values only" size={40} color={AMBER_INK} hand at={KF.sub} />
					</Fade>
					<FracX cx={NUM.cx} cy={NUM.cy} size={NUM.size} num={numNum} den={numDen} barAt={KF.a1 - 4} prefix="K =" prefixAt={KF.a1 - 4} hold={Wn} />
					<Sx x={NUM.cx + Wn / 2 + 24} y={NUM.cy + 22} text="= 0.0533" size={60} at={KF.r0533} />
					<Sx x={940} y={800} text="K = 0.053" size={112} color={TEAL} hand at={KF.k053} />
					<Sx x={1470} y={800} text="2 s.f." size={46} color={INK_SOFT} hand at={KF.two} />
					{/* the check */}
					<PclLens counts={() => ({n: 12, v: 8})} cx={lens.cx} cy={lens.cy} r={lens.r} />
					<Fade at={check}>
						<Ring cx={lens.cx} cy={lens.cy} rx={lens.r + 20} ry={lens.r + 20} at={check} out={KF.start + 10} color={AMBER} seed={3} />
					</Fade>
					<Sx x={420} y={800} text="12" size={54} color={NAVY} at={KF.c12} />
					<Sx x={490} y={800} text="+ 8" size={54} color={VIOLET} at={KF.c8} />
					<Sx x={620} y={800} text="= 20" size={54} color={INK} at={KF.c20} />
					<Sx x={780} y={800} text="= start" size={54} color={TEAL} at={KF.start} />
					<Tick x={720} y={868} at={KF.start + 10} s={44} />
					<Sx x={420} y={880} text="checks the subtraction" size={40} color={TEAL} hand at={check + 10} />
				</Push>
			</Overlay>
		</>
	);
};

// ---------- 5a. Worked example 2: K given, the start ----------
const G = 'k-given';
const KG = cues(sc(G), {now: 'Now the other', know: 'We know', want: 'want the settled', hot: 'hot', k49: ['49', 1], dot: 'Each dot', r005: '0.05', start: 'the start is', h2: ['0.45', 1], ofI: 'of iodine', no: 'no hydrogen iodide'});
const iodineAt = cw(G, 'of iodine', 0);
export const SceneKGiven: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={4} size={58} />
			<Overlay>
				<Push inAt={0}>
					<Tag x={1060} y={100} w={330} text="illustrative values" at={KG.k49 + 20} />
					<EqStrip items={H2I2_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={14} />
					<Ring cx={hiPos[4].cx + 14} cy={EQ.y - 14} rx={21} ry={32} at={34} color={AMBER} seed={4} />
					<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={KG.know - 8} lh={58} lines={[
						{text: 'K = 49   (450 °C)', at: KG.know + 4, color: TEAL, ring: KG.k49 + 4},
						{text: '[H_2] at start: 0.45 mol/L', at: KG.h2, size: 34},
						{text: '[I_2] at start: 0.45 mol/L', at: iodineAt, size: 34},
						{text: '[HI] at start: 0', at: KG.no, size: 34},
					]} />
					<IceTable x={TB.x} y={TB.y} outlineAt={20} cols={hiCols([26, 40, 54])} rows={ice(
						{at: 20, cells: [{text: '0.45', at: cw(G, 'of hydrogen', 1), color: '#6b6358'}, {text: '0.45', at: iodineAt + 4, color: '#5f2f94'}, {text: '0', at: KG.no, color: '#4a4f57'}]},
						{at: 28, cells: []},
						{at: 36, cells: []},
					)} />
					<HotTube x={1610} y={330} counts={{h: 9, i: 9, hi: 0}} reveal={prog(f, KG.hot, 20)} />
					<Fade at={KG.hot + 10}><Sx x={1680} y={298} text="450 °C" size={44} color="#c4582f" anchor="middle" hand at={KG.hot + 10} /></Fade>
					<TubeScale x={1550} y={760} at={KG.dot} />
				</Push>
			</Overlay>
		</>
	);
};
void AMBER; void Arrow; void Chip; void tw; void LABEL_W; void PLUS; void MINUS; void INK; void NAVY;
