import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Cross, EqStrip, Fade, FracX, HotTube, Overlay, Ring, Sx, TEAL, Tick, TubeScale, eqLayout, tw} from './parts';
import type {EqItem, Term} from './parts';
import {EQ, H2I2_EQ, hiCols} from './board';
import {IceTable, iceCell, iceRowY} from './ice';
import {Heading, CROSS, MINUS, PLUS, cw, kf, sc} from './common';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
const Gone: React.FC<{at: number; dur?: number; children: React.ReactNode}> = ({at, dur = 16, children}) => {
	const f = useCurrentFrame();
	const o = 1 - prog(f, at, dur);
	if (o <= 0.01) return null;
	return <g opacity={o}>{children}</g>;
};
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- 6c. The answer and a check ----------
const K = 'check';
const KK = cues(sc(K), {x: 'x is 0.35', each: 'So hydrogen and iodine', r010: ['0.10', 1], hi2: 'two times 0.35', r070: ['0.70', 1], chk: 'Check by substituting back', sq: '0.70 squared', d: 'over 0.10 times 0.10', which: 'which is 0.010', gives: 'gives 49', why: 'Why not minus seven', x063: 'That would need x of 0.63', more: 'more than the 0.45', neg: 'so hydrogen would be negative', negw: 'negative'});
const kk = (p: string, k: number, occ = 1) => cw(K, p, k, occ);
export const SceneCheck: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: 96, y: 250, s: 0.78};
	const cnt = {
		h: Math.round(kf(f, [[KK.r010, 9], [KK.r010 + 40, 2]])),
		i: Math.round(kf(f, [[KK.r010, 9], [KK.r010 + 40, 2]])),
		hi: Math.round(kf(f, [[KK.r070 - 10, 0], [KK.r070 + 50, 14]])),
	};
	const c3 = iceCell(T.x, T.y, T.s, 1, 2);
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={-100} size={58} />
			<Overlay>
				<IceTable x={T.x} y={T.y} s={T.s} cols={hiCols([-100, -100, -100])} rows={ice(
					{at: -100, dim: [KK.each, 0, 0.35], cells: [{text: '0.45', at: -100, color: H2K}, {text: '0.45', at: -100, color: I2K}, {text: '0', at: -100, color: HIK}]},
					{at: -100, cells: [
						{text: '−x', at: -100, color: MINUS, swap: {text: '−0.35', at: KK.each, color: MINUS}},
						{text: '−x', at: -100, color: MINUS, swap: {text: '−0.35', at: KK.each + 8, color: MINUS}},
						{text: '+2x', at: -100, color: PLUS, swap: {text: '+0.70', at: KK.hi2, color: PLUS}},
					]},
					{at: -100, cells: [
						{text: '0.45 − x', at: -100, color: H2K, size: 42, swap: {text: '0.10', at: KK.r010, color: H2K}},
						{text: '0.45 − x', at: -100, color: I2K, size: 42, swap: {text: '0.10', at: KK.r010 + 8, color: I2K}},
						{text: '2x', at: -100, color: HIK, swap: {text: '0.70', at: KK.r070, color: HIK}},
					]},
				)} />
				{/* x */}
				<Sx x={880} y={330} text="x = 0.35 mol/L" size={92} color={AMBER_INK} hand at={KK.x} />
				<Ring cx={1155} cy={300} rx={300} ry={66} at={KK.x + 16} out={KK.each} color={AMBER} seed={2} />
				{/* check by substituting back */}
				<Sx x={880} y={410} text="independent check" size={42} color={TEAL} hand at={KK.chk} />
				<Sx x={880} y={490} text="0.70^{2}" size={56} at={KK.sq} />
				<Sx x={1040} y={490} text="= 0.49" size={56} at={kk('squared is 0.49', 2)} />
				<Sx x={880} y={570} text="0.10 × 0.10" size={56} at={KK.d + 20} />
				<Sx x={1160} y={570} text="= 0.010" size={56} at={kk('which is 0.010', 2)} />
				<Sx x={880} y={660} text="0.49 ÷ 0.010" size={56} at={KK.gives} />
				<Sx x={1230} y={660} text="= 49" size={56} at={kk('gives 49', 1)} />
				<Sx x={1390} y={660} text="= K" size={60} color={TEAL} hand at={kk('gives 49', 1) + 14} />
				<Tick x={1540} y={650} at={kk('gives 49', 1) + 24} s={48} />
				{/* the settled tube */}
				<HotTube x={1640} y={250} counts={cnt} />
				<TubeScale x={1550} y={700} at={KK.r010} />
				<Sx x={1640} y={640} text="2, 2, 14" size={50} color={TEAL} hand at={KK.r070 + 40} />
				<Sx x={1710} y={228} text="450 °C" size={40} color="#c4582f" anchor="middle" hand at={-100} />
				{/* why not minus seven */}
				<Fade at={KK.why}>
					<FracX cx={300} cy={720} size={46} num={[[{t: '2x', br: false, at: KK.why, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: KK.why, color: H2K}]]} barAt={KK.why} hold={200} prefix="" />
					<Sx x={450} y={742} text="= " size={46} at={KK.why} />
					<Sx x={500} y={750} text="−7" size={72} color={CROSS} hand at={KK.why + 6} />
					<Sx x={96} y={850} text="x = 0.63 > 0.45" size={52} color={INK} at={KK.x063} />
					<Sx x={96} y={930} text="H_2 = 0.45 − 0.63 < 0" size={52} color={CROSS} at={KK.neg} />
					<Cross x={700} y={915} at={KK.negw} s={26} color={INK_SOFT} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 7. Memory aid ----------
const M = 'memory-aid';
const KM = cues(sc(M), {only: 'Only the change row follows', m1: ['minus 0.35', 1], m2: ['minus 0.35', 2], p70: 'plus 0.70', ratio: 'in the ratio one', two: 'two', ie: 'The initial and equilibrium rows', dont: 'do not have to be', r1: '0.10', r2: ['0.10', 2], r3: ['0.70', 2], not: 'are not'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: 200, y: 250, s: 1.1};
	const row = (r: number) => iceRowY(T.y, T.s, r);
	const two = cw(M, 'one one two', 2);
	void two;
	return (
		<>
			<Heading text="Only the change row follows the coefficients." at={KM.only} size={60} />
			<Overlay>
				<IceTable x={T.x} y={T.y} s={T.s} cols={hiCols([-100, -100, -100])} rows={ice(
					{at: -100, dim: [KM.only, KM.ie, 0.35], cells: [{text: '0.45', at: -100, color: H2K}, {text: '0.45', at: -100, color: I2K}, {text: '0', at: -100, color: HIK}]},
					{at: -100, lit: [KM.only, KM.ie - 10], cells: [{text: '−0.35', at: -100, color: MINUS}, {text: '−0.35', at: -100, color: MINUS}, {text: '+0.70', at: -100, color: PLUS}]},
					{at: -100, lit: [KM.ie, KM.not + 60], cells: [{text: '0.10', at: -100, color: H2K}, {text: '0.10', at: -100, color: I2K}, {text: '0.70', at: -100, color: HIK}]},
				)} />
				{/* change row ratio */}
				<Fade at={KM.m1 - 6}>
					<rect x={1250} y={row(1) - 80} width={590} height={64} rx={32} fill="#fffdf8" stroke={PLUS} strokeWidth={3} />
					<Sx x={1280} y={row(1) - 34} text="−0.35" size={50} color={MINUS} hand at={KM.m1} />
					<Sx x={1400} y={row(1) - 34} text=":" size={50} hand at={KM.m2 - 6} />
					<Sx x={1430} y={row(1) - 34} text="−0.35" size={50} color={MINUS} hand at={KM.m2} />
					<Sx x={1550} y={row(1) - 34} text=":" size={50} hand at={KM.p70 - 6} />
					<Sx x={1580} y={row(1) - 34} text="+0.70" size={50} color={PLUS} hand at={KM.p70} />
				</Fade>
				<Fade at={KM.ratio}>
					<rect x={1250} y={row(1) + 4} width={590} height={64} rx={32} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1545} y={row(1) + 50} text="1 : 1 : 2" size={50} color={TEAL} anchor="middle" hand at={KM.ratio} />
				</Fade>
				<Tick x={1870} y={row(1) + 30} at={cw(M, 'one one two', 2) + 6} s={34} />
				{/* equilibrium row is not in that ratio */}
				<Fade at={KM.r1}>
					<rect x={1250} y={row(2) - 32} width={590} height={64} rx={32} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3} />
					<Sx x={1285} y={row(2) + 14} text="0.10" size={50} color={H2K} hand at={KM.r1} />
					<Sx x={1400} y={row(2) + 14} text=":" size={50} hand at={KM.r2 - 8} />
					<Sx x={1430} y={row(2) + 14} text="0.10" size={50} color={I2K} hand at={KM.r2} />
					<Sx x={1550} y={row(2) + 14} text=":" size={50} hand at={KM.r2 + 12} />
					<Sx x={1580} y={row(2) + 14} text="0.70" size={50} color={HIK} hand at={KM.r3} />
				</Fade>
				<Cross x={1862} y={row(2)} at={KM.not} s={22} />
				<Sx x={1250} y={row(2) + 104} text="not 1 : 1 : 2" size={58} color={CROSS} hand at={KM.not + 10} />
				<Sx x={96} y={850} text="H_2 and I_2 match 1 : 1 only because they started equal" size={50} color={INK} hand at={KM.dont} />
				<Sx x={96} y={920} text="used up is minus, made is plus" size={46} color={TEAL} hand at={KM.m1} />
			</Overlay>
		</>
	);
};

// ---------- 8. Reversing the equation ----------
const R = 'reverse-equation';
const KR = cues(sc(R), {belongs: 'K belongs', written: 'as it is written', tube: 'Take the same settled tube', back: 'backwards', now: 'K is now', flip: 'Flip the equation', dbl: 'Double every coefficient', pow: 'every power doubles', ksq: 'K is squared', sq49: '49 squared'});
const rr = (p: string, k: number, occ = 1) => cw(R, p, k, occ);
const ORIG: EqItem[] = [{k: 'sp', t: 'H_2', color: H2K}, {k: 'plus'}, {k: 'sp', t: 'I_2', color: I2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'HI', color: HIK}];
const NEWE: EqItem[] = [{k: 'sp', coef: '2', t: 'HI', color: HIK}, {k: 'arrow'}, {k: 'sp', t: 'H_2', color: H2K}, {k: 'plus'}, {k: 'sp', t: 'I_2', color: I2K}];
const DBL: EqItem[] = [{k: 'sp', coef: '2', t: 'H_2', color: H2K}, {k: 'plus'}, {k: 'sp', coef: '2', t: 'I_2', color: I2K}, {k: 'arrow'}, {k: 'sp', coef: '4', t: 'HI', color: HIK}];
export const SceneReverse: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 640, S = 50, Y1 = 240, Y2 = 360;
	const po = eqLayout(ORIG, S, X0).pos, pn = eqLayout(NEWE, S, X0).pos, pd = eqLayout(DBL, S, X0).pos;
	const u = smooth((f - KR.back) / 36);
	const lerp = (a: number, b: number) => a + (b - a) * u;
	const origDim = 1 - 0.55 * prog(f, KR.back + 36, 12) * (1 - prog(f, KR.dbl, 12));
	const flying = f >= KR.back && f < KR.back + 40;
	const arc = 30 * Math.sin(Math.PI * Math.min(1, u));
	const val = (y: number, name: string, v: string, col: string, at: number) => (
		<g key={name}>
			<Sx x={300} y={y} text={name} size={48} color={col} at={at} />
			<Sx x={400} y={y} text={v} size={52} color={col} at={at} />
		</g>
	);
	// reversed fractions
	const vals: [number, number] = [380, 450];
	void vals;
	const symNum: Term[][] = [[
		{t: 'H_2', at: rr('K is now hydrogen times iodine over', 3), from: [pn[2].sx, Y2], color: H2K, dur: 30},
		{t: 'I_2', at: rr('K is now hydrogen times iodine over', 5), from: [pn[4].sx, Y2], color: I2K, dur: 30},
	]];
	const symDen: Term[][] = [[{t: 'HI', p: '2', at: rr('over H I squared', 1), from: [pn[0].sx, Y2], color: HIK, dur: 30, pAt: rr('over H I squared', 3)}]];
	const numNum: Term[][] = [[
		{t: '0.10', br: false, at: rr('0.10', 0, 3), from: [420, 390], color: H2K, dur: 30}, {t: '×', br: false, at: rr('0.10 times', 1, 1)},
		{t: '0.10', br: false, at: rr('0.10', 0, 4), from: [420, 460], color: I2K, dur: 30},
	]];
	const numDen: Term[][] = [[{t: '0.70', p: '2', br: false, at: rr('0.70', 0, 2), from: [430, 530], color: HIK, dur: 30, pAt: rr('0.70 squared', 1)}]];
	const dbl = KR.dbl;
	const doubled: Term[][] = [[{t: 'HI', p: '4', at: KR.pow - 12, pAt: KR.pow, pFrom: [pd[4].cx, Y2], color: HIK}]];
	const doubledD: Term[][] = [[{t: 'H_2', p: '2', at: KR.pow - 12, pAt: KR.pow + 6, pFrom: [pd[0].cx, Y2], color: H2K}, {t: 'I_2', p: '2', at: KR.pow - 6, pAt: KR.pow + 12, pFrom: [pd[2].cx, Y2], color: I2K}]];
	const kLine = 'K = 49^{2}';
	return (
		<>
			<Heading text="K belongs to the equation as written" at={4} size={58} />
			<Overlay>
				{/* the settled tube and its three values */}
				<HotTube x={110} y={290} counts={{h: 2, i: 2, hi: 14}} reveal={prog(f, KR.tube, 20)} />
				<Sx x={290} y={330} text="mol/L" size={34} color={INK_SOFT} hand at={KR.tube + 6} />
				{val(390, 'H_2', '0.10', H2K, rr('0.10', 0, 1))}
				{val(460, 'I_2', '0.10', I2K, rr('0.10', 0, 2))}
				{val(530, 'HI', '0.70', HIK, rr('0.70', 0, 1))}
				{/* row one: the original equation, K = 49 */}
				<g opacity={origDim}>
					<EqStrip items={ORIG} x={X0} y={Y1} size={S} at={6} />
					<Sx x={1420} y={Y1 + 8} text="K = 49" size={60} color={TEAL} hand at={KR.written} />
				</g>
				{/* the flip */}
				{flying ? (
					<g>
						<Sx x={lerp(po[4].cx, pn[0].cx)} y={lerp(Y1, Y2) - arc} text="2" size={S} color={HIK} at={-100} />
						<Sx x={lerp(po[4].sx, pn[0].sx)} y={lerp(Y1, Y2) - arc} text="HI" size={S} color={HIK} at={-100} />
						<Sx x={lerp(po[0].sx, pn[2].sx)} y={lerp(Y1, Y2) + arc} text="H_2" size={S} color={H2K} at={-100} />
						<Sx x={lerp(po[2].sx, pn[4].sx)} y={lerp(Y1, Y2) + arc} text="I_2" size={S} color={I2K} at={-100} />
					</g>
				) : null}
				<Gone at={dbl - 8}>
					<EqStrip items={NEWE} x={X0} y={Y2} size={S} at={KR.back + 34} />
					<DrawPath d={`M${X0 - 40},${Y1 + 10} C${X0 - 110},${Y1 + 50} ${X0 - 110},${Y2 - 60} ${X0 - 44},${Y2 - 14}`} at={KR.back} dur={26} color={AMBER_INK} width={6} />
					<DrawPath d={`M${X0 - 70},${Y2 - 22} L${X0 - 44},${Y2 - 14} L${X0 - 56},${Y2 - 44}`} at={KR.back + 22} dur={8} color={AMBER_INK} width={6} />
					<FracX cx={910} cy={570} size={52} num={symNum} den={symDen} barAt={KR.now} prefix="K =" prefixAt={KR.now} />
					<Sx x={1090} y={590} text="=" size={52} at={rr('0.10', 0, 3) - 12} />
					<FracX cx={1330} cy={570} size={52} num={numNum} den={numDen} barAt={rr('0.10', 0, 3) - 6} hold={330} />
					<Sx x={730} y={790} text="=" size={52} at={rr('0.010', 0)} />
					<FracX cx={860} cy={780} size={52} num={[[{t: '0.010', br: false, at: rr('0.010', 0), color: INK}]]} den={[[{t: '0.49', br: false, at: rr('0.49', 0), color: INK}]]} barAt={rr('0.010', 0)} hold={170} />
					<Sx x={970} y={802} text="= 0.020" size={56} color={TEAL} at={rr('about 0.020', 1)} />
					<Sx x={1250} y={802} text="=" size={52} at={rr('one over 49', 0)} />
					<FracX cx={1350} cy={780} size={52} num={[[{t: '1', br: false, at: rr('one over 49', 0)}]]} den={[[{t: '49', br: false, at: rr('one over 49', 2), color: TEAL}]]} barAt={rr('one over 49', 1)} hold={110} />
					<Sx x={1450} y={800} text="flipped" size={50} color={AMBER_INK} hand at={rr('one over 49', 2) + 8} />
				</Gone>
				{/* the habit */}
				<Chip x={96} y={700} w={540} text="Flip the equation, flip K." size={44} at={KR.flip} color={TEAL} />
				<Sx x={96} y={808} text="same temperature," size={34} color={INK_SOFT} hand at={KR.flip + 24} />
				<Sx x={96} y={850} text="equation as written" size={34} color={INK_SOFT} hand at={KR.flip + 30} />
				{/* doubling */}
				<Fade at={dbl}>
					<EqStrip items={DBL} x={X0} y={Y2} size={S} at={dbl + 4} />
					<Ring cx={pd[0].cx + 12} cy={Y2 - 14} rx={26} ry={34} at={dbl + 14} color={AMBER} seed={3} />
					<Ring cx={pd[2].cx + 12} cy={Y2 - 14} rx={26} ry={34} at={dbl + 20} color={AMBER} seed={4} />
					<Ring cx={pd[4].cx + 12} cy={Y2 - 14} rx={26} ry={34} at={dbl + 26} color={AMBER} seed={5} />
					<FracX cx={910} cy={600} size={56} num={doubled} den={doubledD} barAt={KR.pow - 16} prefix="K =" prefixAt={KR.pow - 16} />
					<Sx x={960} y={830} text={kLine} size={80} color={TEAL} at={KR.ksq + 12} />
					<Sx x={960 + tw(kLine + ' ', 80) * 1.0 + 24} y={830} text="= 2401" size={80} color={TEAL} at={rr('2401', 0)} />
				</Fade>
			</Overlay>
		</>
	);
};
void AMBER; void H2I2_EQ; void EQ; void Tick;
