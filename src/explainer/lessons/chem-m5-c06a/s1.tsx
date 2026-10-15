import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {ColourStrip} from '../chem-m5-c03/parts';
import {PaintedFlask} from '../chem-m5-c02/common';
import {Arrow, Chip, Dial, EqStrip, Fade, FracX, GivensCard, HotTube, Overlay, Ring, Sx, Tag, TEAL, TubeScale, cardLineY, fracXW, tubeDot, tw} from '../chem-m5-c06/parts';
import type {Term} from '../chem-m5-c06/parts';
import {CARD, EQ, H2I2_EQ, PCL_EQ, TB, hiPos, pclCols, pclPos} from '../chem-m5-c06/board';
import {IceTable} from '../chem-m5-c06/ice';
import {Heading, GREEN, cw, kf, sc} from './common';
import {COL_Y, TYPE_SPECS, TypeCard} from './types';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
const Gone: React.FC<{at: number; dur?: number; children: React.ReactNode}> = ({at, dur = 16, children}) => {
	const f = useCurrentFrame();
	const o = 1 - prog(f, at, dur);
	if (o <= 0.01) return null;
	return <g opacity={o}>{children}</g>;
};
/** A card sliding from its column slot up to the task line (top-left), fading as the heading writes on. */
const slideToTask = (f: number, from: number, y0: number) => ({
	x: 96, y: kf(f, [[from, y0], [from + 34, 86]]), s: kf(f, [[from, 1], [from + 34, 0.32]]), opacity: 1 - prog(f, from + 22, 14),
});

// ---------- 1. Three types of question ----------
const HT = 'hook-types';
const K1 = cues(sc(HT), {write: 'write K', numbers: 'put numbers in', three: 'three types', t1: 'Type one gives', t2: 'Type two gives', t3: 'Type three gives', kstart: 'K and the start', easiest: 'easiest first', both: 'types one and two', next: 'in the next'});
const oneAt = cw(HT, 'just one value', 1), nextW = cw(HT, 'in the next', 2);
export const SceneHookTypes: React.FC = () => {
	const f = useCurrentFrame();
	const cx = 1060, cy = 470, S = 76;
	const num: Term[][] = [[{t: 'HI', p: '2', at: K1.write + 6, color: HIK}]];
	const den: Term[][] = [[{t: 'H_2', at: K1.write + 14, color: H2K}, {t: 'I_2', at: K1.write + 20, color: I2K}]];
	const W = fracXW(num, den, S);
	const bright = prog(f, K1.both, 14);
	return (
		<>
			<Heading text="Calculating with K: three types" at={4} size={62} />
			<Overlay>
				{/* K for any equation; now we put numbers in */}
				<Gone at={K1.three - 12}>
					<FracX cx={cx} cy={cy} size={S} num={num} den={den} barAt={K1.write} prefix="K =" prefixAt={K1.write} />
					<Sx x={cx + W / 2 + 30} y={cy + 26} text="= ?" size={S} color={AMBER_INK} hand at={K1.numbers} />
					<Sx x={cx} y={cy + 230} text="now put numbers in" size={46} color={AMBER_INK} anchor="middle" hand at={K1.numbers + 10} />
				</Gone>
				<TypeCard spec={TYPE_SPECS[0]} x={96} y={COL_Y[0]} at={K1.t1} lift={bright} />
				<TypeCard spec={TYPE_SPECS[1]} x={96} y={COL_Y[1]} at={K1.t2} lift={bright} ringCell={{r: 2, c: 2, at: oneAt, out: oneAt + 80}} />
				<TypeCard spec={TYPE_SPECS[2]} x={96} y={COL_Y[2]} at={K1.t3} ringK={{at: K1.kstart, out: K1.kstart + 80}} dim={prog(f, nextW, 16)} nextTag={[nextW + 6]} />
				<Sx x={1530} y={COL_Y[0] + 120} text="this video" size={40} color={TEAL} hand at={K1.both + 6} />
				<Sx x={1530} y={COL_Y[1] + 120} text="this video" size={40} color={TEAL} hand at={K1.both + 14} />
			</Overlay>
		</>
	);
};

// ---------- 2. Type one: every concentration given ----------
const T1 = 'type-one';
const K2 = cues(sc(T1), {here: 'Here is the hot', settled: 'settled', dot: 'Each dot', h010: ['0.10 moles', 1], i010: ['0.10 of iodine', 1], hi070: ['0.70 of', 1], write: 'Write the expression', hiSq: 'hydrogen iodide squared', sq: 'squared because', coef: 'coefficient is two', sub: 'Then substitute', s070: ['0.70 squared', 1], s049: ['0.49', 1], s010: ['0.10 times', 1], s0010: ['0.010', 1], kis: 'so K is', k49: 'which is 49', moles: 'gives moles in a vessel', divide: 'divide by the volume'});
const over1 = cw(T1, 'over hydrogen times iodine', 1), over2 = cw(T1, 'over hydrogen times iodine', 3);
const s010b = cw(T1, '0.10 times 0.10', 2), k49w = cw(T1, 'which is 49', 2);
export const SceneTypeOne: React.FC = () => {
	const f = useCurrentFrame();
	const c1 = slideToTask(f, 0, COL_Y[0]);
	const TX = 700, TY = 340;
	const lineY = (i: number) => cardLineY(CARD.y, i, 58);
	const dot = (type: number, k: number, at: number) => tubeDot(TX, TY, type, k, at);
	const SYM = {cx: 1250, cy: 340, size: 60}, NUM = {cx: 1250, cy: 570, size: 60};
	const symNum: Term[][] = [[{t: 'HI', p: '2', at: K2.hiSq, color: HIK, pAt: K2.sq, pFrom: [hiPos[4].cx, EQ.y]}]];
	const symDen: Term[][] = [[{t: 'H_2', at: over1, color: H2K}, {t: 'I_2', at: over2, color: I2K}]];
	const numNum: Term[][] = [[{t: '0.70', p: '2', br: false, at: K2.s070, from: [330, lineY(3) - 12], dur: 30, color: HIK, pAt: K2.s070 + 14}]];
	const numDen: Term[][] = [[{t: '0.10', br: false, at: K2.s010, from: [330, lineY(1) - 12], dur: 30, color: H2K}, {t: '×', br: false, at: K2.s010 + 10}, {t: '0.10', br: false, at: s010b, from: [330, lineY(2) - 12], dur: 30, color: I2K}]];
	const kLine = 'K = 0.49 ÷ 0.010';
	return (
		<>
			<Heading text="Find K" at={30} size={62} />
			<Overlay>
				{/* the type cards leave; card 1 becomes the task line */}
				<TypeCard spec={TYPE_SPECS[1]} x={96} y={COL_Y[1]} at={-100} out={0} />
				<TypeCard spec={TYPE_SPECS[2]} x={96} y={COL_Y[2]} at={-100} out={0} dim={1} />
				<TypeCard spec={TYPE_SPECS[0]} x={c1.x} y={c1.y} s={c1.s} at={-100} opacity={c1.opacity} />
				<Tag x={330} y={96} w={330} text="illustrative values" at={K2.here + 20} />
				<EqStrip items={H2I2_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={36} />
				<Ring cx={hiPos[4].cx + 14} cy={EQ.y - 14} rx={21} ry={32} at={52} color={AMBER} seed={4} />
				<Ring cx={hiPos[4].cx + 14} cy={EQ.y - 14} rx={30} ry={42} at={K2.coef} out={K2.coef + 60} color={AMBER_INK} seed={9} />
				{/* the settled tube and its values */}
				<HotTube x={TX} y={TY} counts={{h: 2, i: 2, hi: 14}} reveal={prog(f, K2.here, 20)} />
				<Fade at={K2.here + 10}><Sx x={TX + 70} y={TY - 18} text="450 °C, settled" size={38} color="#c4582f" anchor="middle" hand at={K2.here + 10} /></Fade>
				<TubeScale x={650} y={738} at={K2.dot} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={K2.dot} lh={58} lines={[
					{text: 'at equilibrium:', at: K2.h010 - 6, color: INK_SOFT, size: 34},
					{text: '[H_2] = 0.10 mol/L', at: K2.h010 + 4, color: H2K},
					{text: '[I_2] = 0.10 mol/L', at: K2.i010, color: I2K},
					{text: '[HI] = 0.70 mol/L', at: K2.hi070 + 4, color: HIK},
				]} />
				{[[0, K2.h010, 1], [1, K2.i010, 2], [2, K2.hi070, 3]].map(([type, at, li]) => {
					const p = dot(type, 0, at);
					return <Arrow key={type} x1={p[0] - 12} y1={p[1]} x2={478} y2={lineY(li) - 14} at={at} color={AMBER_INK} width={4.5} out={at + 70} />;
				})}
				{/* the expression, then the numbers */}
				<FracX cx={SYM.cx} cy={SYM.cy} size={SYM.size} num={symNum} den={symDen} barAt={K2.write} prefix="K =" prefixAt={K2.write} />
				<FracX cx={NUM.cx} cy={NUM.cy} size={NUM.size} num={numNum} den={numDen} barAt={K2.sub} prefix="K =" prefixAt={K2.sub} />
				<Tag x={1470} y={530} w={330} text="K: no unit written" at={K2.sub + 10} color={AMBER_INK} />
				<Sx x={960} y={770} text="0.70^{2} = 0.49" size={52} at={K2.s049} />
				<Sx x={960} y={846} text="0.10 × 0.10 = 0.010" size={52} at={K2.s0010} />
				<Sx x={960} y={950} text={kLine} size={74} color={TEAL} at={K2.kis} />
				<Sx x={960 + tw(kLine, 74) + 30} y={950} text="= 49" size={74} color={TEAL} at={k49w} />
				<Ring cx={960 + tw(kLine, 74) + 110} cy={926} rx={110} ry={56} at={k49w + 8} color={AMBER} seed={3} />
				{/* moles in a vessel? concentrations first */}
				<Fade at={K2.divide}>
					<Sx x={96} y={744} text="given moles? divide by litres first" size={36} color={INK_SOFT} hand at={K2.divide} />
					<Sx x={96} y={796} text="mol ÷ L = mol/L" size={34} color={INK_SOFT} at={K2.divide + 10} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 4a. Type two: start and one equilibrium value ----------
const T2 = 'type-two';
const K4 = cues(sc(T2), {now: 'Now type two', start: 'the start', findK: 'find K'});
const one2 = cw(T2, 'just one value', 1);
export const SceneTypeTwo: React.FC = () => {
	const f = useCurrentFrame();
	const go = K4.findK + 14;
	const c2 = slideToTask(f, go, COL_Y[1]);
	return (
		<>
			<Heading text="Find K" at={go + 20} size={62} />
			<Overlay>
				<TypeCard spec={TYPE_SPECS[0]} x={96} y={COL_Y[0]} at={2} out={go - 6} tick={K4.now + 4} />
				<TypeCard spec={TYPE_SPECS[2]} x={96} y={COL_Y[2]} at={2} out={go - 6} dim={1} nextTag={[2]} />
				<TypeCard spec={TYPE_SPECS[1]} x={c2.x} y={c2.y} s={c2.s} at={2} opacity={c2.opacity} lift={prog(f, K4.now + 8, 14)} pulse={K4.start} ringCell={{r: 2, c: 2, at: one2, out: go}} ringRow={{r: 0, at: K4.start, out: one2}} />
			</Overlay>
		</>
	);
};

// ---------- 4b. One measured value (recorded hook take; heading is the type 2 task line) ----------
const H = 'one-value';
const KH = cues(sc(H), {back: 'Back to the', seal: 'seal', m040: '0.40', l20: '2.0', heat: 'heat it', yg: 'yellow-green', eqm: 'at equilibrium', read: '0.080', per: 'per litre', other: 'other two', eqc: 'equilibrium constant'});
export const SceneOneValue: React.FC = () => {
	const f = useCurrentFrame();
	const FW = 270, FX = 1560, FY = 190;
	const q = (i: number) => pclPos[i].sx + pclPos[i].w / 2;
	return (
		<>
			<Heading text="Find K" at={-100} size={62} />
			<PaintedFlask x={FX} y={FY} w={FW} eq={prog(f, KH.yg, 60)} opacity={prog(f, 10, 24)} />
			<Overlay>
				<Tag x={460} y={96} w={330} text="illustrative values" at={KH.back + 40} />
				<EqStrip items={PCL_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={KH.back + 36} />
				<Chip x={1190} y={190} w={360} text="sealed, about 250 °C" size={34} at={KH.seal} color={INK_SOFT} />
				<Arrow x1={1440} y1={790} x2={1548} y2={790} at={KH.heat} color="#c4582f" width={7} />
				<Sx x={1440} y={760} text="heat" size={50} color="#c4582f" hand at={KH.heat} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={KH.m040 - 14} lh={58} lines={[
					{text: 'PCl_5: 0.40 mol', at: KH.m040, ring: KH.m040 + 8},
					{text: 'flask: 2.0 L', at: KH.l20, ring: KH.l20 + 8},
					{text: 'at equilibrium:', at: KH.per + 6, color: INK_SOFT, size: 34},
					{text: '[Cl_2] = 0.080 mol/L', at: KH.per + 12, color: GREEN},
				]} />
				<Dial cx={900} cy={500} r={110} at={KH.eqm} settle={KH.read + 50} label="Cl_2: 0.080 mol/L" labelAt={KH.read + 54} out={KH.per + 30} />
				<Fade at={KH.read + 20} out={KH.per + 30}><Sx x={900} y={470} text="0.080" size={40} color={INK} anchor="middle" at={KH.read + 20} /></Fade>
				<ColourStrip x={880} y={760} w={300} from="#fbf7e9" to="#c5d54a" t={kf(f, [[KH.yg, 0], [KH.yg + 70, 0.85]])} at={KH.yg} label="gas colour" />
				<Fade at={KH.other}>
					<rect x={q(0) - 36} y={EQ.y + 22} width={72} height={64} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<Sx x={q(0)} y={EQ.y + 72} text="?" size={60} color={AMBER_INK} anchor="middle" hand at={KH.other} />
				</Fade>
				<Fade at={KH.other + 14}>
					<rect x={q(2) - 36} y={EQ.y + 22} width={72} height={64} rx={20} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
					<Sx x={q(2)} y={EQ.y + 72} text="?" size={60} color={AMBER_INK} anchor="middle" hand at={KH.other + 14} />
				</Fade>
				<Fade at={KH.eqc}>
					<Sx x={970} y={EQ.y + 4} text="K = ?" size={64} color={AMBER_INK} hand at={KH.eqc} />
					<rect x={960} y={EQ.y - 62} width={190} height={84} rx={22} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 6" />
				</Fade>
				<IceTable x={TB.x} y={TB.y} outlineAt={KH.eqc} cols={pclCols([99999, 99999, 99999])} rows={ice({at: 0, hideLabel: true, cells: []}, {at: 0, hideLabel: true, cells: []}, {at: 0, hideLabel: true, cells: []})} />
			</Overlay>
		</>
	);
};
void INK;
