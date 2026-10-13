import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {HeatIcon} from '../chem-m5-c03/parts';
import {ColourStrip} from '../chem-m5-c03/parts';
import {ColourKey, slotXY as lensSlot} from '../chem-m5-c02/parts';
import {PaintedFlask, paintedH} from '../chem-m5-c02/common';
import {Arrow, Chip, Dial, EqStrip, Fade, GivensCard, Overlay, Ring, Sx, Tag, tw} from './parts';
import {CARD, EQ, LENS, PCL_EQ, PclLens, TB, pclCols, pclPos} from './board';
import {IceTable, Ink, iceCell, iceRowY, LABEL_W} from './ice';
import {Heading, GREEN, NAVY, PLUS, MINUS, cw, hexMix, kf, sc} from './common';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;

// ---------- 1. Hook: one measured value ----------
const H = 'hook';
const K1 = cues(sc(H), {back: 'Back to the', seal: 'seal', m040: '0.40', l20: '2.0', heat: 'heat it', yg: 'yellow-green', eqm: 'at equilibrium', read: '0.080', per: 'per litre', other: 'other two', eqc: 'equilibrium constant'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const FW = 270, FX = 1560, FY = 190;
	void paintedH;
	const q = (i: number) => pclPos[i].sx + pclPos[i].w / 2;
	return (
		<>
			<Heading text="One measured value" at={4} size={62} />
			<PaintedFlask x={FX} y={FY} w={FW} eq={prog(f, K1.yg, 60)} opacity={prog(f, 10, 24)} />
			<Overlay>
				<Tag x={760} y={96} w={330} text="illustrative values" at={K1.back + 40} />
				<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={K1.back + 36} />
				<Chip x={1190} y={190} w={360} text="sealed, about 250 °C" size={34} at={K1.seal} color={INK_SOFT} />
				<Arrow x1={1440} y1={790} x2={1548} y2={790} at={K1.heat} color="#c4582f" width={7} />
				<Sx x={1440} y={760} text="heat" size={50} color="#c4582f" hand at={K1.heat} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={K1.m040 - 14} lh={58} lines={[
					{text: 'PCl_5: 0.40 mol', at: K1.m040, ring: K1.m040 + 8},
					{text: 'flask: 2.0 L', at: K1.l20, ring: K1.l20 + 8},
					{text: 'at equilibrium:', at: K1.per + 6, color: INK_SOFT, size: 34},
					{text: '[Cl_2] = 0.080 mol/L', at: K1.per + 12, color: GREEN},
				]} />
				<Dial cx={900} cy={500} r={110} at={K1.eqm} settle={K1.read + 50} label="Cl_2: 0.080 mol/L" labelAt={K1.read + 54} out={K1.per + 30} />
				<ColourStrip x={880} y={760} w={300} from="#fbf7e9" to="#c5d54a" t={kf(f, [[K1.yg, 0], [K1.yg + 70, 0.85]])} at={K1.yg} label="gas colour" />
				{/* the three unknowns */}
				<Fade at={K1.other}>
					<rect x={q(0) - 36} y={EQ.y + 22} width={72} height={64} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<Sx x={q(0)} y={EQ.y + 72} text="?" size={60} color={AMBER_INK} anchor="middle" hand at={K1.other} />
				</Fade>
				<Fade at={K1.other + 14}>
					<rect x={q(2) - 36} y={EQ.y + 22} width={72} height={64} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<Sx x={q(2)} y={EQ.y + 72} text="?" size={60} color={AMBER_INK} anchor="middle" hand at={K1.other + 14} />
				</Fade>
				<Fade at={K1.eqc}>
					<Sx x={970} y={EQ.y + 4} text="K = ?" size={64} color={AMBER_INK} hand at={K1.eqc} />
					<rect x={960} y={EQ.y - 62} width={190} height={84} rx={22} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
				</Fade>
				<IceTable x={TB.x} y={TB.y} outlineAt={K1.eqc} cols={pclCols([99999, 99999, 99999])} rows={ice({at: 0, hideLabel: true, cells: []}, {at: 0, hideLabel: true, cells: []}, {at: 0, hideLabel: true, cells: []})} />
			</Overlay>
		</>
	);
};

// ---------- 2. The ICE table and the initial row ----------
const I = 'ice-initial';
const KI = cues(sc(I), {iceI: 'I C E table', init: 'initial change and equilibrium', col: 'column', row: 'row for each', fill: 'We fill', kuses: 'K uses concentrations', div: 'divide', m040: '0.40', over: 'over', l20: '2.0', r20: '0.20', ofp: 'of P C L five', prod: 'products', zero: 'zero'});
const iw = (k: number) => cw(I, 'initial change and equilibrium', k);
const ice3 = cw(I, 'I C E table', 2), ice2 = cw(I, 'I C E table', 1);
const colCue = cw(I, 'column for each substance', 0);
const subst = cw(I, 'column for each substance', 3);
export const SceneIceInitial: React.FC = () => {
	const f = useCurrentFrame();
	const LET = [{t: 'I', x: 880, at: KI.iceI, go: iw(0), row: 0}, {t: 'C', x: 1060, at: ice2, go: iw(1), row: 1}, {t: 'E', x: 1240, at: ice3, go: iw(3), row: 2}];
	const cell = iceCell(TB.x, TB.y, 1, 0, 0);
	return (
		<>
			<Heading text="Find K" at={4} size={62} />
			<Overlay>
				<Tag x={460} y={96} w={330} text="illustrative values" at={-100} />
				<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={[
					{text: 'PCl_5: 0.40 mol', at: -100, ring: KI.m040 + 4, color: INK},
					{text: 'flask: 2.0 L', at: -100, ring: KI.l20 + 4},
					{text: 'at equilibrium:', at: -100, color: INK_SOFT, size: 34},
					{text: '[Cl_2] = 0.080 mol/L', at: -100, color: GREEN},
				]} />
				<IceTable x={TB.x} y={TB.y} cols={pclCols([colCue, colCue + 14, colCue + 28])} rows={ice(
					{at: iw(0), labelAt: iw(0) + 16, lit: [KI.fill, KI.zero + 40], cells: [
						{text: '0.20', at: KI.r20 + 8, color: NAVY, from: [260, 800], flyDur: 30},
						{text: '0', at: KI.zero - 2, color: INK_SOFT}, {text: '0', at: KI.zero + 8, color: INK_SOFT}]},
					{at: iw(1), labelAt: iw(1) + 16, cells: []},
					{at: iw(3), labelAt: iw(3) + 16, cells: []},
				)} />
				{/* big I C E letters that settle into the row labels */}
				{LET.map(l => {
					const u = prog(f, l.go, 24);
					const px = l.x + (TB.x + 14 - l.x) * u, py = 640 + (iceRowY(TB.y, 1, l.row) + 16 - 640) * u;
					const sc2 = 1 - 0.78 * u;
					return <g key={l.t} opacity={(1 - prog(f, l.go + 18, 8)) * prog(f, l.at, 12)} transform={`translate(${px},${py}) scale(${sc2})`}>
						<text x={0} y={0} fill={AMBER_INK} style={{fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 240}}>{l.t}</text>
					</g>;
				})}
				{/* pen rings: each row in turn */}
				{[0, 1, 2].map(r => <Ring key={r} cx={TB.x + 130} cy={iceRowY(TB.y, 1, r)} rx={150} ry={46} at={KI.row + 28 * r} out={KI.row + 28 * r + 40} color={AMBER} seed={r + 3} />)}
				<Fade at={KI.kuses} out={KI.div + 10}>
					<Sx x={96} y={760} text="K uses concentrations: mol/L" size={46} color={AMBER_INK} hand at={KI.kuses} />
				</Fade>
				{/* the division on the givens card */}
				<Fade at={KI.m040}>
					<Sx x={96} y={770} text="0.40 mol" size={50} color={INK} at={KI.m040} out={KI.r20 + 40} />
				</Fade>
				<Fade at={KI.over}>
					<Sx x={96} y={836} text="÷  2.0 L" size={50} color={INK} at={KI.over} out={KI.r20 + 40} />
				</Fade>
				<Fade at={KI.r20}>
					<Sx x={96} y={916} text="= 0.20 mol/L" size={56} color={NAVY} at={KI.r20} out={KI.r20 + 90} />
				</Fade>
				<Arrow x1={380} y1={890} x2={cell[0] - 60} y2={cell[1] + 40} at={KI.r20 + 4} color={AMBER_INK} width={5} out={KI.r20 + 40} />
				<Fade at={KI.zero}>
					<Sx x={TB.x + LABEL_W + 330} y={TB.y + 110 + 100 + 50 + 190} text="products start at zero" size={40} color={INK_SOFT} hand at={KI.zero} />
				</Fade>
				<PclLens counts={() => ({n: 20, v: 0})} reveal={prog(f, KI.ofp, 16)} />
				<Fade at={KI.ofp}><ColourKey x={1480} y={800} at={KI.ofp} /></Fade>
			</Overlay>
		</>
	);
};

// ---------- 3. The change row follows the coefficients ----------
const C = 'change-row';
const KC = cues(sc(C), {now: 'change row', rose: 'chlorine rose', zero: 'from zero', rise: 'plus 0.080', others: 'How much did the others change', splits: 'Each P C L five that splits', one: 'makes one', oneCl: 'and one chlorine', also: 'also rises', falls: 'falls by', because: 'because one is used up', follows: 'follows the coefficients', coef: 'coefficients', used: 'used up gets a minus sign', made: 'made gets a plus'});
export const SceneChangeRow: React.FC = () => {
	const f = useCurrentFrame();
	const k = Math.round(kf(f, [[KC.splits + 16, 0], [KC.oneCl + 6, 8]], false));
	const counts = () => ({n: 20 - Math.round(kf(f, [[KC.splits + 16, 0], [KC.oneCl + 6, 8]], false)), v: k});
	const countsAt = (ff: number) => ({n: 20 - Math.round(kf(ff, [[KC.splits + 16, 0], [KC.oneCl + 6, 8]], false)), v: Math.round(kf(ff, [[KC.splits + 16, 0], [KC.oneCl + 6, 8]], false))});
	void counts;
	const cell = (c: number) => iceCell(TB.x, TB.y, 1, 1, c);
	const chipFly = (c: number, at: number, label: string) => {
		const e = prog(f, at, 30);
		const x0 = pclPos[c === 0 ? 0 : c === 1 ? 2 : 4].sx + pclPos[c === 0 ? 0 : c === 1 ? 2 : 4].w / 2, y0 = EQ.y - 12;
		const [x1, y1] = cell(c);
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
	// ring on the first splitting particle, following it
	const sp = lensSlot(4, 0, 19, f, LENS.cx, LENS.cy, LENS.r);
	const ringO = prog(f, KC.splits, 8) * (1 - prog(f, KC.splits + 44, 10));
	const patt = prog(f, KC.coef + 4, 34);
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<Overlay>
				<Tag x={460} y={96} w={330} text="illustrative values" at={-100} />
				<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={[
					{text: 'PCl_5: 0.40 mol', at: -100}, {text: 'flask: 2.0 L', at: -100},
					{text: 'at equilibrium:', at: -100, color: INK_SOFT, size: 34}, {text: '[Cl_2] = 0.080 mol/L', at: -100, color: GREEN},
				]} />
				<Ring cx={CARD.x + 28 + 150} cy={CARD.y + 108 + 3 * 58 - 12} rx={200} ry={30} at={KC.rose + 12} out={KC.rise + 40} color={AMBER} seed={4} />
				<IceTable x={TB.x} y={TB.y} outlineAt={-400} cols={pclCols([-100, -100, -100])} rows={ice(
					{at: -100, lit: [KC.zero - 4, KC.zero + 30], cells: [{text: '0.20', at: -100, color: NAVY}, {text: '0', at: -100, color: INK_SOFT}, {text: '0', at: -100, color: INK_SOFT}]},
					{at: KC.now, cells: [
						{text: '−0.080', at: KC.falls + 6, color: MINUS, tag: {text: 'used up', at: KC.falls + 30, color: MINUS}},
						{text: '+0.080', at: KC.also + 4, color: PLUS, tag: {text: 'made', at: KC.also + 28, color: PLUS}},
						{text: '+0.080', at: KC.rise + 6, color: PLUS, tag: {text: 'made', at: KC.oneCl + 14, color: PLUS}},
					]},
					{at: -100, cells: []},
				)} />
				<Ring cx={iceCell(TB.x, TB.y, 1, 0, 2)[0]} cy={iceCell(TB.x, TB.y, 1, 0, 2)[1]} rx={52} ry={40} at={KC.zero} out={KC.rise} color={AMBER} seed={6} />
				<Arrow x1={CARD.x + CARD.w + 6} y1={CARD.y + 300} x2={cell(2)[0] - 100} y2={cell(2)[1] + 4} at={KC.zero + 14} color={AMBER_INK} width={5} out={KC.rise + 30} />
				{chipFly(1, KC.one, '× 1')}
				{chipFly(2, KC.oneCl, '× 1')}
				{chipFly(0, KC.falls - 10, '× 1')}
				<Ring cx={cell(0)[0]} cy={cell(0)[1]} rx={96} ry={44} at={KC.because} out={KC.because + 90} color={MINUS} seed={7} />
				{/* particle view: each split makes one violet and one green */}
				<PclLens counts={countsAt} />
				<circle cx={sp.x} cy={sp.y} r={22} fill="none" stroke={AMBER} strokeWidth={5} opacity={ringO} />
				<Fade at={KC.splits}><ColourKey x={1480} y={800} at={KC.splits} /></Fade>
				{/* the pattern */}
				<Fade at={KC.follows}>
					<Sx x={TB.x} y={820} text="Change row: same ratio as the equation" size={40} color={INK_SOFT} hand at={KC.follows} />
				</Fade>
				<Ink x={TB.x + 190} y={915} text="coefficients" size={84} color={AMBER_INK} at={KC.coef} hand dur={22} />
				<DrawPath d={`M${TB.x + 20},${935} Q${TB.x + 190},${925} ${TB.x + 370},${938}`} at={KC.coef + 16} dur={16} color={AMBER_INK} width={6} />
				{[0, 1, 2].map(i => {
					const [sx2, sy2] = cell(i);
					const tx = TB.x + 640 + i * 90, ty = 906;
					const x = sx2 + (tx - sx2) * patt, y = sy2 + 50 + (ty - sy2 - 50) * patt;
					return <g key={i} opacity={prog(f, KC.coef + 2, 6)}>
						<circle cx={x} cy={y} r={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
						<Sx x={x} y={y + 12} text="1" size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
						{i < 2 ? <Sx x={tx + 45} y={ty + 12} text=":" size={44} color={AMBER_INK} anchor="middle" hand at={KC.coef + 26} /> : null}
					</g>;
				})}
				<Ring cx={cell(0)[0]} cy={cell(0)[1]} rx={96} ry={44} at={KC.used} out={KC.made} color={MINUS} seed={8} />
				<Ring cx={cell(1)[0]} cy={cell(1)[1]} rx={96} ry={44} at={KC.made} color={PLUS} seed={9} />
				<Ring cx={cell(2)[0]} cy={cell(2)[1]} rx={96} ry={44} at={KC.made + 10} color={PLUS} seed={10} />
			</Overlay>
		</>
	);
};
void HandText; void hexMix; void tw; void AMBER; void INK;
