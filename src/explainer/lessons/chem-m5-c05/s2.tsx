import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cueFrame, cues} from '../../cues';
import {Chip, Cross, EqStrip, Frac, GasTube, Overlay, Ring, Sx, TEAL, fracGeom, eqLayout, eqWidth} from './parts';
import type {EqItem, Term} from './parts';
import {Heading, HI_INK, H2_INK, I2_INK, cw, kf, sc} from './common';

// ---------- 3. The rule for any equation, and a check on the power ----------
const D = 'any-equation';
const K5 = cues(sc(D), {
	rule: 'Here is the rule', any: 'any balanced equation', written: 'as written', top: 'Products go on top', under: 'reactants underneath', raised: 'raised to the power of its coefficient',
	test: 'Let us test the power', tube1: 'hydrogen iodide tube', hpi: 'hydrogen plus iodine making', two: 'two hydrogen iodide', settled: 'Settled', tube2: 'A tube that started', settles2: 'settles at two eight',
	again: 'forty-nine again', leave: 'Leave the power off', put: 'no longer stays put',
});
const c1 = (k: number) => cw(D, 'fourteen squared over two times two', k);
const c1b = (k: number) => cw(D, 'a hundred and ninety-six over four', k);
const c2 = (k: number) => cw(D, 'twenty-eight squared over two times eight', k);
const c2b = (k: number) => cw(D, 'seven hundred and eighty-four over sixteen', k);
const GEN: EqItem[] = [{k: 'sp', coef: 'a', t: 'A', color: '#3d6fd6'}, {k: 'plus'}, {k: 'sp', coef: 'b', t: 'B', color: '#c4582f'}, {k: 'arrow'}, {k: 'sp', coef: 'c', t: 'C', color: '#2f8a5b'}, {k: 'plus'}, {k: 'sp', coef: 'd', t: 'D', color: '#8a4fc4'}];
const HEQ: EqItem[] = [{k: 'sp', t: 'H_2', color: H2_INK}, {k: 'plus'}, {k: 'sp', t: 'I_2', color: I2_INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'HI', color: HI_INK}];
export const SceneAny: React.FC = () => {
	const f = useCurrentFrame();
	// stage A: the general rule
	const GS = 72, GX = 960, GY = 270;
	const g = eqLayout(GEN, GS, GX - eqWidth(GEN, GS) / 2);
	const co = (i: number): [number, number] => [g.pos[i].cx, GY];
	const sp = (i: number): [number, number] => [g.pos[i].sx, GY];
	const raised = K5.raised;
	const num: Term[] = [
		{t: 'C', p: 'c', at: K5.top, from: sp(4), color: '#2f8a5b', pAt: raised + 24, pFrom: co(4)},
		{t: 'D', p: 'd', at: K5.top + 14, from: sp(6), color: '#8a4fc4', pAt: raised + 36, pFrom: co(6)},
	];
	const den: Term[] = [
		{t: 'A', p: 'a', at: K5.under, from: sp(0), color: '#3d6fd6', pAt: raised, pFrom: co(0)},
		{t: 'B', p: 'b', at: K5.under + 14, from: sp(2), color: '#c4582f', pAt: raised + 12, pFrom: co(2)},
	];
	// the general rule shrinks to the top right corner as a reminder when the check begins
	const shrink = kf(f, [[K5.tube1 - 8, 0], [K5.tube1 + 30, 1]]);
	const px = 960 + (1660 - 960) * shrink, py = 640 + (196 - 640) * shrink, ss = 1 - 0.62 * shrink;
	const stageA = 1 - prog(f, K5.tube1 - 8, 14);
	// stage B: the hydrogen iodide check
	const HS = 50, HX = 120, HY = 290;
	const he = eqLayout(HEQ, HS, HX);
	const HFX = 880, HFY = 268;
	const hNum: Term[] = [{t: 'HI', p: '2', color: HI_INK, at: K5.two + 12, from: [he.pos[4].sx, HY], dur: 26, pAt: K5.two + 30, pFrom: [he.pos[4].cx, HY]}];
	const hDen: Term[] = [{t: 'H_2', color: H2_INK, at: K5.two + 22, from: [he.pos[0].sx, HY], dur: 26}, {t: 'I_2', color: I2_INK, at: K5.two + 30, from: [he.pos[2].sx, HY], dur: 26}];
	const hg = fracGeom(HFX, HFY, HS, hNum, hDen);
	const S = 52, yA = 470, yB = 750;
	const n14: Term[] = [{t: '14', p: '2', br: false, at: c1(0), pAt: c1(1)}];
	const d22: Term[] = [{t: '2', br: false, at: c1(3)}, {t: '×', br: false, at: c1(4)}, {t: '2', br: false, at: c1(5)}];
	const n28: Term[] = [{t: '28', p: '2', br: false, at: c2(0), pAt: c2(1)}];
	const d28: Term[] = [{t: '2', br: false, at: c2(3)}, {t: '×', br: false, at: c2(4)}, {t: '8', br: false, at: c2(5)}];
	const wrong = (n: string, d: Term[], at: number, resAt: number, res: string, cy: number) => (
		<>
			<Frac cx={1540} cy={cy} size={48} num={[{t: n, br: false, at, color: AMBER_INK}]} den={d.map((m, i) => ({...m, at: at + 6 + i * 6, color: AMBER_INK}))} barAt={at} barColor={AMBER_INK} />
			<Sx x={1632} y={cy + 17} text="=" size={48} anchor="middle" color={AMBER_INK} at={resAt} />
			<Sx x={1662} y={cy + 20} text={res} size={56} color={AMBER_INK} at={resAt + 4} />
		</>
	);
	const fortyNine = cueFrame(sc(D), 'forty-nine', 1);
	return (
		<>
			<Heading text="The rule for any equation" at={4} size={64} out={K5.tube1 - 8} />
			<Heading text="Testing the power" at={K5.tube1 + 4} size={64} />
			<Overlay>
				{/* stage A: the general form */}
				<g opacity={stageA}>
					<Sx x={GX} y={186} text="any balanced equation, as written" size={42} color={INK_SOFT} hand anchor="middle" at={K5.any} />
					<EqStrip items={GEN} x={GX} y={GY} size={GS} at={K5.any} anchor="middle" />
					<Sx x={1400} y={560} text="products on top" size={42} color="#2f8a5b" hand at={K5.top + 6} />
					<Sx x={1400} y={720} text="reactants underneath" size={42} color="#3d6fd6" hand at={K5.under + 6} />
					<Sx x={960} y={880} text="each coefficient becomes a power" size={46} color={TEAL} anchor="middle" hand at={raised + 44} />
				</g>
				<g transform={`translate(${px} ${py}) scale(${ss}) translate(-960 -640)`}>
					<Frac cx={960} cy={640} size={78} num={num} den={den} barAt={K5.top - 6} prefix="K =" />
				</g>
				<Sx x={1660} y={300} text="the rule" size={34} color={INK_SOFT} anchor="middle" hand at={K5.tube1 + 30} />
				{/* the hydrogen iodide equation and its expression; the coefficient 2 flies up to the power */}
				<Sx x={HX} y={HY - 72} text="the tube from the catalyst video" size={34} color={INK_SOFT} hand at={K5.tube1 + 6} />
				<EqStrip items={HEQ} x={HX} y={HY} size={HS} at={K5.hpi} />
				<Ring cx={he.pos[4].cx + 10} cy={HY - 16} rx={24} ry={32} at={K5.two} out={K5.two + 50} color={TEAL} seed={6} />
				<Frac cx={HFX} cy={HFY} size={HS} num={hNum} den={hDen} barAt={K5.two + 8} prefix="K =" />
				<Sx x={hg.x2 + 30} y={HFY + 16} text="checking that the ratio stays put" size={36} color={TEAL} hand at={K5.two + 40} />
				{/* two tubes at one temperature */}
				<GasTube x={120} y={400} w={330} h={140} counts={{h: 2, i: 2, hi: 14}} seed={5} reveal={prog(f, K5.tube1, 20)} clamps={false} />
				<GasTube x={120} y={680} w={330} h={140} counts={{h: 2, i: 8, hi: 28}} seed={9} reveal={prog(f, K5.tube2 - 8, 20)} clamps={false} />
				<Sx x={120} y={584} text="settled: 2, 2, 14" size={38} color={INK_SOFT} hand at={K5.settled} />
				<Sx x={120} y={864} text="started with 16 H_2 and 22 I_2, settles at 2, 8, 28" size={34} color={INK_SOFT} hand at={K5.settles2} />
				{/* row 1 */}
				<Frac cx={640} cy={yA} size={S} num={n14} den={d22} barAt={c1(0)} />
				<Sx x={742} y={yA + 17} text="=" size={S} anchor="middle" at={c1b(0) - 4} />
				<Frac cx={830} cy={yA} size={S} num={[{t: '196', br: false, at: c1b(0)}]} den={[{t: '4', br: false, at: c1b(5)}]} barAt={c1b(0)} />
				<Sx x={930} y={yA + 17} text="=" size={S} anchor="middle" at={fortyNine - 6} />
				<Sx x={962} y={yA + 24} text="49" size={74} color={TEAL} at={fortyNine} />
				{/* row 2 */}
				<Frac cx={640} cy={yB} size={S} num={n28} den={d28} barAt={c2(0)} />
				<Sx x={742} y={yB + 17} text="=" size={S} anchor="middle" at={c2b(0) - 4} />
				<Frac cx={830} cy={yB} size={S} num={[{t: '784', br: false, at: c2b(0)}]} den={[{t: '16', br: false, at: c2b(5)}]} barAt={c2b(0)} />
				<Sx x={930} y={yB + 17} text="=" size={S} anchor="middle" at={K5.again - 6} />
				<Sx x={962} y={yB + 24} text="49" size={74} color={TEAL} at={K5.again} />
				<DrawPath d={`M1090,${yA + 6} L1122,${yA + 6} L1122,${yB + 6} L1090,${yB + 6}`} at={K5.again + 10} dur={26} color={TEAL} width={6} dash="12 10" />
				<Sx x={1142} y={(yA + yB) / 2 + 16} text="same value" size={46} color={TEAL} hand at={K5.again + 20} />
				{/* without the power */}
				{wrong('14', d22, K5.leave, cw(D, 'three and a half', 0), '3.5', yA)}
				{wrong('28', d28, cw(D, 'then one point seven five', 0), cw(D, 'one point seven five', 0), '1.75', yB)}
				<Sx x={1540} y={yA - 84} text="no power on [HI]" size={36} color={AMBER_INK} anchor="middle" hand at={K5.leave + 4} />
				<Sx x={1540} y={yB - 84} text="no power on [HI]" size={36} color={AMBER_INK} anchor="middle" hand at={cw(D, 'then one point seven five', 0)} />
				<Sx x={1640} y={(yA + yB) / 2 - 12} text="not constant" size={48} color={AMBER_INK} anchor="middle" hand at={K5.put} />
				<Cross x={1810} y={(yA + yB) / 2 - 26} at={K5.put} s={26} />
				<Chip x={560} y={920} w={420} text="same temperature" size={38} at={K5.settles2 + 20} color={INK_SOFT} />
				<Chip x={1020} y={920} w={660} text="made-up numbers to show the pattern" size={36} at={K5.settled + 10} color={INK_SOFT} />
				{K5.rule + K5.written + K5.test < 0 ? <Sx x={0} y={0} text="" color={INK} /> : null}
			</Overlay>
		</>
	);
};
