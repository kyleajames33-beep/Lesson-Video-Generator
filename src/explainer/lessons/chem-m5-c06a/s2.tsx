import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {ColourKey, slotXY as lensSlot} from '../chem-m5-c02/parts';
import {Arrow, EqStrip, Fade, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick} from '../chem-m5-c06/parts';
import {CARD, EQ, LENS, PCL_EQ, PclLens, TB, pclCols, pclPos} from '../chem-m5-c06/board';
import {IceTable, Ink, iceCell, iceRowY, LABEL_W} from '../chem-m5-c06/ice';
import {Heading, GREEN, GREENP, GREEN_INK, MINUS, NAVY, PLUS, VIOLET, cw, dur, kf, sc} from './common';
import {CurveArrow, EIBracket, RuleChip} from './types';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const PCL_CARD = [
	{text: 'PCl_5: 0.40 mol', at: -100}, {text: 'flask: 2.0 L', at: -100},
	{text: 'at equilibrium:', at: -100, color: INK_SOFT, size: 34}, {text: '[Cl_2] = 0.080 mol/L', at: -100, color: GREEN},
];
/** Lens position while the rule chip and the E - I bracket use the right side of the board. */
export const L2 = {cx: 1700, cy: 330, r: 110};
const lensAt = (f: number, a: number, b: number, back = false) => {
	const P = back ? [L2, LENS] : [LENS, L2];
	return {cx: kf(f, [[a, P[0].cx], [b, P[1].cx]]), cy: kf(f, [[a, P[0].cy], [b, P[1].cy]]), r: kf(f, [[a, P[0].r], [b, P[1].r]])};
};
const INIT_ROW = [{text: '0.20', at: -100, color: NAVY}, {text: '0', at: -100, color: INK_SOFT}, {text: '0', at: -100, color: INK_SOFT}];
const cell = (r: number, c: number) => iceCell(TB.x, TB.y, 1, r, c);
/** Dashed "?" in an empty Equilibrium cell. */
const Unknown: React.FC<{c: number; at: number; out?: number}> = ({c, at, out}) => {
	const [x, y] = cell(2, c);
	return (
		<Fade at={at} out={out}>
			<rect x={x - 44} y={y - 34} width={88} height={68} rx={18} fill="none" stroke={AMBER_INK} strokeWidth={3.5} strokeDasharray="8 6" />
			<Sx x={x} y={y + 18} text="?" size={52} color={AMBER_INK} anchor="middle" hand at={at} />
		</Fade>
	);
};
/** The 8 green particles that were measured, as a ghost inset. */
const GhostInset: React.FC<{at: number; out?: number}> = ({at, out}) => {
	const X = 1778, Y = 590, R = 52;
	const pts = [[-24, -20], [6, -30], [28, -8], [-30, 10], [-4, 4], [22, 22], [-14, 32], [10, -4]];
	return (
		<Fade at={at} out={out}>
			<circle cx={X} cy={Y} r={R} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 6" />
			{pts.map(([dx, dy], i) => <circle key={i} cx={X + dx} cy={Y + dy} r={8.5} fill={GREENP} stroke={INK} strokeWidth={2} />)}
			<Ring cx={X} cy={Y} rx={R + 14} ry={R + 14} at={at + 10} color={AMBER} seed={6} />
			<Sx x={X} y={Y + R + 40} text="measured: 8 green" size={28} color={INK_SOFT} anchor="middle" hand at={at + 6} />
			<Sx x={X} y={Y + R + 72} text="at equilibrium" size={28} color={INK_SOFT} anchor="middle" hand at={at + 10} />
		</Fade>
	);
};
const Board: React.FC = () => (
	<>
		<Tag x={460} y={96} w={330} text="illustrative values" at={-100} />
		<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
		<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={PCL_CARD} />
	</>
);
const RULE = {x: 96, y: 760, w: 560};

// ---------- 5. The ICE table and the initial row ----------
const I = 'ice-initial';
const KI = cues(sc(I), {iceI: 'I C E table', iFor: 'I for initial', cFor: 'C for change', eFor: 'E for equilibrium', col: 'column for each', row: 'row for each', fill: 'We fill', kuses: 'K uses concentrations', div: 'divide', m040: '0.40', over: 'over', l20: '2.0', r20: '0.20', ofp: 'of P C L five', prod: 'products', zero: 'zero'});
const ice2 = cw(I, 'I C E table', 1), ice3 = cw(I, 'I C E table', 2);
export const SceneIceInitial: React.FC = () => {
	const f = useCurrentFrame();
	const LET = [{t: 'I', x: 880, at: KI.iceI, go: KI.iFor, row: 0}, {t: 'C', x: 1060, at: ice2, go: KI.cFor, row: 1}, {t: 'E', x: 1240, at: ice3, go: KI.eFor, row: 2}];
	const c0 = cell(0, 0);
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Board />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={[
					{text: 'PCl_5: 0.40 mol', at: -100, ring: KI.m040 + 4},
					{text: 'flask: 2.0 L', at: -100, ring: KI.l20 + 4},
					{text: 'at equilibrium:', at: -100, color: INK_SOFT, size: 34},
					{text: '[Cl_2] = 0.080 mol/L', at: -100, color: GREEN},
				]} />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([KI.col, KI.col + 14, KI.col + 28])} rows={ice(
					{at: KI.iFor, labelAt: KI.iFor + 30, lit: [KI.fill, KI.zero + 40], cells: [
						{text: '0.20', at: KI.r20 + 8, color: NAVY, from: [260, 800], flyDur: 30},
						{text: '0', at: KI.zero - 2, color: INK_SOFT}, {text: '0', at: KI.zero + 8, color: INK_SOFT}]},
					{at: KI.cFor, labelAt: KI.cFor + 30, cells: []},
					{at: KI.eFor, labelAt: KI.eFor + 30, cells: []},
				)} />
				{/* big I C E letters: ringed as each is said, then they settle into the row labels */}
				{LET.map(l => {
					const u = prog(f, l.go + 10, 24);
					const px = l.x + (TB.x + 14 - l.x) * u, py = 640 + (iceRowY(TB.y, 1, l.row) + 16 - 640) * u;
					const sc2 = 1 - 0.78 * u;
					return (
						<g key={l.t}>
							<g opacity={(1 - prog(f, l.go + 28, 8)) * prog(f, l.at, 12)} transform={`translate(${px},${py}) scale(${sc2})`}>
								<text x={0} y={0} fill={AMBER_INK} style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 240}}>{l.t}</text>
							</g>
							<Ring cx={l.x + 52} cy={560} rx={86} ry={104} at={l.go - 4} out={l.go + 12} color={AMBER} seed={l.row + 2} />
						</g>
					);
				})}
				{[0, 1, 2].map(r => <Ring key={r} cx={TB.x + 130} cy={iceRowY(TB.y, 1, r)} rx={150} ry={46} at={KI.row + 20 * r} out={KI.row + 20 * r + 40} color={AMBER} seed={r + 3} />)}
				<Fade at={KI.kuses} out={KI.div + 10}>
					<Sx x={96} y={760} text="K uses concentrations: mol/L" size={46} color={AMBER_INK} hand at={KI.kuses} />
				</Fade>
				<Sx x={96} y={770} text="0.40 mol" size={50} color={INK} at={KI.m040} out={KI.r20 + 40} />
				<Sx x={96} y={836} text="÷  2.0 L" size={50} color={INK} at={KI.over} out={KI.r20 + 40} />
				<Sx x={96} y={916} text="= 0.20 mol/L" size={56} color={NAVY} at={KI.r20} out={KI.r20 + 90} />
				<Arrow x1={380} y1={890} x2={c0[0] - 60} y2={c0[1] + 40} at={KI.r20 + 4} color={AMBER_INK} width={5} out={KI.r20 + 40} />
				<Sx x={TB.x + LABEL_W + 330} y={TB.y + 450} text="products start at zero" size={40} color={INK_SOFT} hand at={KI.zero} />
				<PclLens counts={() => ({n: 20, v: 0})} reveal={prog(f, KI.ofp, 16)} />
				<Fade at={KI.ofp}><ColourKey x={1480} y={800} at={KI.ofp} /></Fade>
			</Overlay>
		</>
	);
};

// ---------- 6. The measured value goes in the equilibrium row first ----------
const EF = 'equilibrium-first';
const KE = cues(sc(EF), {next: 'Next the one value', chl: 'Chlorine is 0.080', eqrow: ['equilibrium row', 1], under: 'under chlorine', gives: 'the table gives us', minus: 'equilibrium minus initial', because: 'because the change is', sub: '0.080 minus zero', plus: 'plus 0.080', always: 'That is always', eqrow2: ['equilibrium row', 2], subtract: 'then subtract'});
export const SceneEquilibriumFirst: React.FC = () => {
	const f = useCurrentFrame();
	const lens = lensAt(f, 0, 34);
	const [ex, ey] = cell(2, 2);
	const yTop = iceRowY(TB.y, 1, 0), yBot = iceRowY(TB.y, 1, 2);
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Board />
				<Ring cx={CARD.x + 28 + 160} cy={CARD.y + 108 + 3 * 58 - 12} rx={196} ry={30} at={KE.chl} out={KE.under + 30} color={AMBER} seed={4} />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, cells: INIT_ROW},
					{at: -100, lit: [KE.gives, KE.plus + 50], cells: [null, null, {text: '+0.080', at: KE.plus + 4, color: PLUS, tag: {text: 'made', at: KE.plus + 26, color: PLUS}}]},
					{at: -100, lit: [KE.eqrow, KE.under + 40], cells: [null, null, {text: '0.080', at: KE.eqrow + 24, color: GREEN_INK}]},
				)} />
				<Unknown c={0} at={KE.eqrow + 4} />
				<Unknown c={1} at={KE.eqrow + 10} />
				{/* the pen arrow: givens card line into the Cl2 equilibrium cell */}
				<CurveArrow d={[[470, 624], [560, 900], [1260, 860], [ex - 10, ey + 46]]} at={KE.eqrow - 8} dur={30} out={KE.gives} />
				<Ring cx={ex} cy={ey} rx={88} ry={42} at={KE.eqrow + 30} out={KE.gives + 20} color={AMBER} seed={8} />
				{/* change = equilibrium minus initial */}
				<EIBracket x={1540} yTop={yTop} yBot={yBot} at={KE.minus} size={42} />
				<Ring cx={ex} cy={ey} rx={70} ry={36} at={KE.minus + 8} out={KE.minus + 50} color={AMBER_INK} seed={3} />
				<Ring cx={cell(0, 2)[0]} cy={cell(0, 2)[1]} rx={50} ry={36} at={KE.minus + 24} out={KE.minus + 66} color={AMBER_INK} seed={5} />
				<Sx x={860} y={812} text="0.080 − 0 = +0.080" size={46} at={KE.sub} />
				<Sx x={860} y={866} text="how far it moved from the start" size={36} color={INK_SOFT} hand at={KE.because} />
				<Tick x={1300} y={796} at={KE.plus + 10} s={40} />
				{/* the rule chip */}
				<RuleChip x={RULE.x} y={RULE.y} w={RULE.w} at={KE.eqrow2 - 6} ats={[KE.eqrow2, KE.subtract, 99999, 99999]} lit={[[0, KE.eqrow2], [1, KE.subtract]]} />
				<PclLens counts={() => ({n: 20, v: 0})} cx={lens.cx} cy={lens.cy} r={lens.r} />
				<GhostInset at={KE.chl} />
				<ColourKey x={1480} y={800} at={-100} />
			</Overlay>
		</>
	);
};

// ---------- 7. The other changes follow the coefficients ----------
const C = 'change-row';
const KC = cues(sc(C), {others: 'How much did the others change', splits: 'Each P C L five that splits', one: 'makes one', oneCl: 'and one chlorine', also: 'also rises', falls: 'falls by', because: 'because one is used up', follows: 'follows the coefficients', coef: 'coefficients', used: 'used up gets a minus sign', made: 'made gets a plus'});
export const SceneChangeRow: React.FC = () => {
	const f = useCurrentFrame();
	const nSplit = (ff: number) => Math.round(kf(ff, [[KC.splits + 16, 0], [KC.oneCl + 6, 8]], false));
	const countsAt = (ff: number) => ({n: 20 - nSplit(ff), v: nSplit(ff)});
	const chipFly = (c: number, at: number, label: string) => {
		const e = prog(f, at, 30);
		const p = pclPos[c === 0 ? 0 : c === 1 ? 2 : 4];
		const x0 = p.sx + p.w / 2, y0 = EQ.y - 12;
		const [x1, y1] = cell(1, c);
		const px = x0 + (x1 - x0) * e, py = y0 + (y1 - 52 - y0) * e;
		const o = prog(f, at, 6) * (1 - prog(f, at + 60, 12));
		if (o <= 0.01) return null;
		return (
			<g key={c} opacity={o}>
				<circle cx={px} cy={py} r={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={px} y={py + 12} text="1" size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
				<Sx x={px + 44} y={py + 12} text={label} size={40} color={AMBER_INK} hand at={at + 24} />
			</g>
		);
	};
	const sp = lensSlot(4, 0, 19, f, L2.cx, L2.cy, L2.r);
	const ringO = prog(f, KC.splits, 8) * (1 - prog(f, KC.splits + 44, 10));
	const patt = prog(f, KC.coef + 4, 34);
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Board />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, cells: INIT_ROW},
					{at: -100, lit: [KC.splits, KC.made + 50], cells: [
						{text: '−0.080', at: KC.falls + 6, color: MINUS, tag: {text: 'used up', at: KC.falls + 30, color: MINUS}},
						{text: '+0.080', at: KC.also + 4, color: PLUS, tag: {text: 'made', at: KC.also + 28, color: PLUS}},
						{text: '+0.080', at: -100, color: PLUS, tag: {text: 'made', at: -100, color: PLUS}},
					]},
					{at: -100, cells: [null, null, {text: '0.080', at: -100, color: GREEN_INK}]},
				)} />
				<Unknown c={0} at={-100} />
				<Unknown c={1} at={-100} />
				{chipFly(1, KC.one, '× 1')}
				{chipFly(2, KC.oneCl, '× 1')}
				{chipFly(0, KC.falls - 10, '× 1')}
				<Ring cx={cell(1, 0)[0]} cy={cell(1, 0)[1]} rx={96} ry={44} at={KC.because} out={KC.because + 80} color={MINUS} seed={7} />
				{/* particle view: each split makes one violet and one green */}
				<PclLens counts={countsAt} cx={L2.cx} cy={L2.cy} r={L2.r} />
				<circle cx={sp.x} cy={sp.y} r={18} fill="none" stroke={AMBER} strokeWidth={5} opacity={ringO} />
				<ColourKey x={1480} y={800} at={-100} />
				{/* the change row follows the coefficients: 1 : 1 : 1 at the end of the row */}
				<Sx x={700} y={830} text="Change row: same ratio as the equation" size={42} color={INK_SOFT} hand at={KC.follows} />
				<DrawPath d={`M${1040},${846} Q${1170},${838} ${1300},${848}`} at={KC.coef + 10} dur={16} color={AMBER_INK} width={5} />
				{[0, 1, 2].map(i => {
					const [sx2, sy2] = cell(1, i);
					const tx = 1590 + i * 92, ty = cell(1, 0)[1];
					const x = sx2 + (tx - sx2) * patt, y = sy2 + 50 + (ty - sy2 - 50) * patt;
					return <g key={i} opacity={prog(f, KC.coef + 2, 6)}>
						<circle cx={x} cy={y} r={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
						<Sx x={x} y={y + 12} text="1" size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
						{i < 2 ? <Sx x={tx + 46} y={ty + 12} text=":" size={44} color={AMBER_INK} anchor="middle" hand at={KC.coef + 26} /> : null}
					</g>;
				})}
				<Ring cx={cell(1, 0)[0]} cy={cell(1, 0)[1]} rx={96} ry={44} at={KC.used} out={KC.made} color={MINUS} seed={8} />
				<Ring cx={cell(1, 1)[0]} cy={cell(1, 1)[1]} rx={96} ry={44} at={KC.made} color={PLUS} seed={9} />
				<Ring cx={cell(1, 2)[0]} cy={cell(1, 2)[1]} rx={96} ry={44} at={KC.made + 10} color={PLUS} seed={10} />
				<RuleChip x={RULE.x} y={RULE.y} w={RULE.w} at={-100} ats={[-100, -100, KC.coef + 6, 99999]} lit={[[2, KC.coef + 6]]} />
				<GhostInset at={-100} out={0} />
			</Overlay>
		</>
	);
};

// ---------- 8. Complete the equilibrium row ----------
const ER = 'equilibrium-row';
const KR = cues(sc(ER), {eqrow: 'complete the equilibrium row', each: 'Each box', plus: 'plus the change', z20: '0.20', r12: '0.12', p3: 'P C L three', zero: ['zero plus 0.080', 1], chl: 'Chlorine is already', agrees: 'agrees', z2: ['zero plus 0.080', 2]});
const r080 = cw(ER, 'zero plus 0.080 is 0.080', 4, 1);
const dER = dur(ER);
export const SceneEquilibriumRow: React.FC = () => {
	const f = useCurrentFrame();
	const sy = (r: number) => TB.y + 110 + r * 100;
	const marks = 1 - prog(f, r080 + 40, 14);
	const lens = lensAt(f, dER - 70, dER - 24, true);
	const [ex, ey] = cell(2, 2);
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Board />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, lit: [KR.each, KR.plus + 40], cells: INIT_ROW},
					{at: -100, lit: [KR.plus, KR.plus + 50], cells: [{text: '−0.080', at: -100, color: MINUS}, {text: '+0.080', at: -100, color: PLUS}, {text: '+0.080', at: -100, color: PLUS}]},
					{at: -100, cells: [
						{text: '0.12', at: KR.r12, color: NAVY, pre: {text: '0.20 + (−0.080)', at: KR.z20 + 4}},
						{text: '0.080', at: r080, color: VIOLET, pre: {text: '0 + 0.080', at: KR.zero + 4}},
						{text: '0.080', at: -100, color: GREEN_INK},
					]},
				)} />
				<Unknown c={0} at={-100} out={KR.z20 - 6} />
				<Unknown c={1} at={-100} out={KR.zero - 6} />
				<Ring cx={TB.x + 130} cy={iceRowY(TB.y, 1, 2)} rx={150} ry={46} at={KR.eqrow} out={KR.each + 40} color={AMBER} seed={5} />
				{/* pen plus and equals between the rows */}
				<g opacity={marks}>
					<DrawPath d={`M${TB.x + 200},${sy(1)} L${TB.x + 240},${sy(1)}`} at={KR.plus} dur={8} color={AMBER_INK} width={8} />
					<DrawPath d={`M${TB.x + 220},${sy(1) - 20} L${TB.x + 220},${sy(1) + 20}`} at={KR.plus + 6} dur={8} color={AMBER_INK} width={8} />
					<DrawPath d={`M${TB.x + 200},${sy(2) - 7} L${TB.x + 240},${sy(2) - 7}`} at={KR.plus + 20} dur={8} color={AMBER_INK} width={8} />
					<DrawPath d={`M${TB.x + 200},${sy(2) + 7} L${TB.x + 240},${sy(2) + 7}`} at={KR.plus + 25} dur={8} color={AMBER_INK} width={8} />
				</g>
				{/* chlorine agrees */}
				<Ring cx={ex} cy={ey} rx={84} ry={40} at={KR.chl} out={KR.agrees + 60} color={TEAL} seed={6} />
				<Tick x={1488} y={ey - 30} at={KR.agrees + 4} s={36} />
				<Sx x={1545} y={ey + 12} text="0 + 0.080 = 0.080" size={32} color={TEAL} at={KR.z2} out={dER - 78} />
				<RuleChip x={RULE.x} y={RULE.y} w={RULE.w} at={-100} ats={[-100, -100, -100, KR.each + 4]} lit={[[3, KR.each + 4]]} />
				<PclLens counts={() => ({n: 12, v: 8})} cx={lens.cx} cy={lens.cy} r={lens.r} />
				<ColourKey x={1480} y={800} at={-100} />
			</Overlay>
		</>
	);
};
void VIOLET;
