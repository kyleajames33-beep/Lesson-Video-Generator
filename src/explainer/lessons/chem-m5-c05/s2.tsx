import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cueFrame, cues} from '../../cues';
import {Chip, Cross, TermView, Dot, EqStrip, FWD, Fade, Frac, GasTube, Line, Overlay, RateBars, Ring, Sx, TEAL, fracGeom, eqLayout, eqWidth, rowXs, wob} from './parts';
import type {EqItem, Term} from './parts';
import {Heading, H2C, H2_INK, HIC, HI_INK, I2C, I2_INK, cw, kf, sc} from './common';

const HIs: Term = {t: 'HI', at: 0, color: HI_INK};
const H2s: Term = {t: 'H_2', at: 0, color: H2_INK};
const I2s: Term = {t: 'I_2', at: 0, color: I2_INK};

// ---------- 3a. A coefficient of two becomes a power of two ----------
const C = 'coefficient-power';
const K4 = cues(sc(C), {tube: 'Now the hydrogen iodide tube', fifth: 'both rates a fifth', meet: 'a hydrogen and an iodine to meet', times: 'a number times hydrogen times iodine', five: 'point oh five', split: 'Splitting needs two hydrogen iodide to meet', nitro: 'nitrogen dioxide pairs', squared: 'squared', set: 'Set the rates equal', coef: 'The coefficient two', pow: 'power of two'});
const vals = (k: number) => cw(C, 'With fourteen of them and a fifth', k);
const sq = (k: number) => cw(C, 'hydrogen iodide squared over hydrogen times iodine equals forty-nine', k);
const EQ_ITEMS: EqItem[] = [{k: 'sp', t: 'H_2', color: H2_INK}, {k: 'plus'}, {k: 'sp', t: 'I_2', color: I2_INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'HI', color: HI_INK}];
export const SceneCoef: React.FC = () => {
	const f = useCurrentFrame();
	const EQS = 44, EQX = 1250, EQY = 112;
	const eq = eqLayout(EQ_ITEMS, EQS, EQX);
	const eqW = eqWidth(EQ_ITEMS, EQS);
	const coefPos: [number, number] = [eq.pos[4].cx, EQY];
	// forward line
	const fwdItems: Term[] = [{t: 'forward =', br: false, hand: true, color: FWD, at: K4.meet}, {t: 'number', br: false, hand: true, at: K4.times, out: K4.five}, {t: '×', br: false, at: K4.times + 8}, {...H2s, at: K4.times + 14}, {...I2s, at: K4.times + 26}];
	// reverse line, with the two HI brackets merging into one squared bracket
	const revItems: Term[] = [{t: 'reverse =', br: false, hand: true, color: AMBER_INK, at: K4.split}, {t: 'number', br: false, hand: true, at: K4.split + 22}, {t: '×', br: false, at: K4.split + 30}, {...HIs, at: K4.split + 36, out: K4.squared}, {t: '×', br: false, at: K4.split + 48, out: K4.squared}, {...HIs, at: K4.split + 56, out: K4.squared}];
	const LX = 1010;
	const fxs = rowXs(fwdItems, 50, LX);
	const rx = rowXs(revItems, 50, LX);
	const merged: Term = {...HIs, p: '2', at: K4.squared + 4, pAt: K4.squared + 14};
	const fw1 = cw(C, 'a fifth means that number is point oh five', 0);
	const fOut = vals(0) - 6;
	const valF: Term[] = [{t: '0.05', br: false, at: K4.five, out: fOut}, {t: '×', br: false, at: K4.five + 14, out: fOut}, {t: '2', br: false, at: K4.five + 20, out: fOut}, {t: '×', br: false, at: K4.five + 26, out: fOut}, {t: '2', br: false, at: K4.five + 32, out: fOut}, {t: '=', br: false, at: K4.five + 40, out: fOut}, {t: '0.2', br: false, at: K4.five + 46, color: FWD, out: fOut}];
	const algebra: Term[] = [{t: '0.05', br: false, at: K4.set + 6}, {t: '×', br: false, at: K4.set + 12}, {...H2s, at: K4.set + 16}, {...I2s, at: K4.set + 22}, {t: '=', br: false, at: K4.set + 30}, {t: '0.05 / 49', br: false, at: K4.set + 36, color: AMBER_INK}, {t: '×', br: false, at: K4.set + 42}, {...HIs, p: '2', at: K4.set + 46, pAt: K4.set + 50}];
	const valR: Term[] = [{t: '0.2 / 14', p: '2', br: false, at: vals(0)}, {t: '= 0.2 / 196', br: false, at: vals(4)}, {t: '= 0.05 / 49', br: false, at: cw(C, 'point oh five over forty-nine', 0, 1), color: AMBER_INK}];
	// final fraction
	const FS = 56, FCX = 1130, FCY = 880;
	const gS = fracGeom(FCX, FCY, FS, [{...HIs, p: '2', at: 0}], [H2s, I2s]);
	const expPos: [number, number] = [gS.num[0].x + 0.55 * FS * 2 + 2 * FS * 0.3 + FS * 0.06 - 2, gS.yn - FS * 0.5];
	const pe = prog(f, K4.coef + 10, 36);
	const fly: [number, number] = [coefPos[0] + (expPos[0] - coefPos[0]) * pe, coefPos[1] + (expPos[1] - coefPos[1]) * pe - Math.sin(pe * Math.PI) * 90];
	// vignettes
	const mF = prog(f, K4.meet, 34);
	const mR = prog(f, K4.split, 34);
	const sR = prog(f, K4.split + 80, 34);
	const w1 = wob(f, 1, 0, 0, 6, 6), w2 = wob(f, 2, 0, 0, 6, 6);
	return (
		<>
			<Heading text="Why a coefficient becomes a power" at={4} size={62} />
			<Overlay>
				<GasTube x={110} y={240} w={190} h={430} counts={{h: 2, i: 2, hi: 14}} seed={5} reveal={prog(f, K4.tube, 16)} />
				<Sx x={205} y={806} text="settled: H_2 2, I_2 2, HI 14" size={34} color={INK_SOFT} anchor="middle" at={K4.tube + 10} />
				<Sx x={205} y={850} text="units, as in earlier videos" size={32} color={INK_SOFT} anchor="middle" at={K4.tube + 14} />
				<Fade at={K4.tube}>
					<rect x={EQX - 30} y={52} width={eqW + 60} height={86} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
				</Fade>
				<EqStrip items={EQ_ITEMS} x={EQX} y={EQY} size={EQS} at={K4.tube} />
				<RateBars x0={360} base={690} scale={1400} fwd={0.2} rev={0.2} at={K4.fifth} fwdLabel="0.2" revLabel="0.2" bw={100} gx={200} axisLabel={null} />
				{/* forward: one H2 and one I2 meet */}
				<Dot x={820 + 50 * mF + w1.x} y={296 - 24 * (1 - mF) + w1.y} r={12} fill={H2C} stroke={H2_INK} opacity={mF > 0 ? 1 : 0} />
				<Dot x={940 - 50 * mF + w2.x} y={310 + 4 * (1 - mF) + w2.y} r={16} fill={I2C} opacity={mF > 0 ? 1 : 0} />
				<Ring cx={880} cy={302} rx={74} ry={56} at={K4.meet + 30} color={FWD} seed={3} />
				<Line x={LX} y={320} size={50} items={fwdItems} />
				<TermView m={{t: '0.05', br: false, at: K4.five, color: FWD}} x={fxs[1].x} y={320} size={50} />
				<Line x={LX} y={388} size={46} items={valF} />
				{/* reverse: two HI meet and split */}
				<Dot x={800 + 60 * mR + w1.x} y={540 + w1.y} r={14} fill={HIC} stroke={HI_INK} opacity={mR > 0 && sR < 0.5 ? 1 : 0} />
				<Dot x={960 - 60 * mR + w2.x} y={540 + w2.y} r={14} fill={HIC} stroke={HI_INK} opacity={mR > 0 && sR < 0.5 ? 1 : 0} />
				<Dot x={870 - 46 * sR} y={540 - 20 * sR} r={12} fill={H2C} stroke={H2_INK} opacity={sR > 0.02 ? 1 : 0} />
				<Dot x={890 + 46 * sR} y={540 + 20 * sR} r={16} fill={I2C} opacity={sR > 0.02 ? 1 : 0} />
				<Ring cx={880} cy={540} rx={90} ry={50} at={K4.split + 34} out={K4.split + 84} color={AMBER_INK} seed={8} />
				<Sx x={1000} y={620} text="two HI meet" size={34} hand color={AMBER_INK} anchor="end" at={K4.split + 10} out={K4.split + 84} />
				<Sx x={980} y={620} text="split into H_2 and I_2" size={34} hand color={INK_SOFT} anchor="end" at={K4.split + 90} />
				<Line x={LX} y={540} size={50} items={revItems} />
				{f >= K4.squared ? <TermAt m={merged} x={rx[3].x} y={540} size={50} /> : null}
				<DrawPath d={`M${rx[3].x + 60},${470} Q${rx[3].x + 120},${440} ${rx[3].x + 150},${486}`} at={K4.squared + 16} dur={18} color={TEAL} width={5} />
				<Chip x={LX} y={576} w={640} h={54} text="like 2NO_2 in the squeeze video" size={36} at={K4.nitro} color={INK_SOFT} />
				<Line x={LX} y={700} size={42} items={valR} />
				<Line x={LX} y={772} size={40} items={algebra} />
				{/* set equal */}
				<Fade at={K4.set}>
					<DrawPath d="M770,330 Q735,430 770,530" at={K4.set} dur={20} color={TEAL} width={7} />
					<Sx x={700} y={444} text="=" size={80} color={TEAL} anchor="middle" at={K4.set + 8} />
				</Fade>
				<Frac cx={FCX} cy={FCY} size={FS} num={[{...HIs, p: '2', at: sq(2), pAt: sq(2) + 4}]} den={[{...H2s, at: sq(4)}, {...I2s, at: sq(6)}]} barAt={sq(0)} />
				<Sx x={gS.x2 + 36} y={FCY + 18} text="=" size={FS} anchor="middle" at={sq(7)} />
				<Sx x={gS.x2 + 76} y={FCY + 24} text="49" size={74} color={TEAL} at={sq(8)} />
				{/* the coefficient flies to the power */}
				{f >= K4.coef + 10 && pe < 1 ? <Sx x={fly[0]} y={fly[1]} text="2" size={56} color={TEAL} at={K4.coef + 10} /> : null}
				<Ring cx={eq.pos[4].cx + 8} cy={EQY - 14} rx={26} ry={34} at={K4.coef} out={K4.coef + 50} color={TEAL} seed={6} />
				<Ring cx={expPos[0] + 8} cy={expPos[1] - 4} rx={30} ry={30} at={K4.pow} color={TEAL} seed={4} />
				<Sx x={FCX} y={FCY + 160} text="the coefficient 2 is now a power of 2" size={44} color={TEAL} anchor="middle" hand at={K4.pow} />
				<Fade at={0}><g /></Fade>
				{fw1 < 0 ? null : null}
			</Overlay>
		</>
	);
};
/** Term drawn at a given place (used where a Line cannot place it). */
const TermAt: React.FC<{m: Term; x: number; y: number; size: number}> = ({m, x, y, size}) => <TermView m={m} x={x} y={y} size={size} />;

// ---------- 3b. The pattern for any equation, and a check ----------
const D = 'any-equation';
const K5 = cues(sc(D), {shown: 'We have shown why', two: 'for two reactions', real: 'Real reactions', many: 'measurements on many reactions', pattern: 'same pattern', any: 'any balanced equation', top: 'Products go on top', under: 'reactants underneath', raised: 'raised to the power of its coefficient', given: 'for the equation exactly as given', tube1: 'Our settled tube', leave: 'Leave the power off', put: 'no longer stays put', tube2: 'A tube that started with more iodine', again: 'forty-nine again'});
const c1 = (k: number) => cw(D, 'fourteen squared over two times two', k);
const c1b = (k: number) => cw(D, 'a hundred and ninety-six over four', k);
const c2 = (k: number) => cw(D, 'twenty-eight squared over two times eight', k);
const c2b = (k: number) => cw(D, 'seven hundred and eighty-four over sixteen', k);
const GEN: EqItem[] = [{k: 'sp', coef: 'a', t: 'A', color: '#3d6fd6'}, {k: 'plus'}, {k: 'sp', coef: 'b', t: 'B', color: '#c4582f'}, {k: 'arrow'}, {k: 'sp', coef: 'c', t: 'C', color: '#2f8a5b'}, {k: 'plus'}, {k: 'sp', coef: 'd', t: 'D', color: '#8a4fc4'}];
export const SceneAny: React.FC = () => {
	const f = useCurrentFrame();
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
	const shrink = kf(f, [[K5.tube1 - 6, 0], [K5.tube1 + 34, 1]]);
	const px = 960 + (300 - 960) * shrink, py = 640 + (218 - 640) * shrink, ss = 1 - 0.5 * shrink;
	const stageA = 1 - prog(f, K5.tube1 - 6, 14);
	const stageB0 = 1 - prog(f, K5.top - 20, 14);
	const tubeA = prog(f, K5.tube1, 20);
	const S = 52, yA = 330, yB = 650;
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
	return (
		<>
			<Heading text="The rule for any equation" at={4} size={64} out={K5.tube1 - 6} />
			<Heading text="Checking that the ratio stays put" at={K5.tube1 + 4} size={64} />
			<Overlay>
				{/* stage A: the general form */}
				<g opacity={stageA}>
					<Sx x={GX - 170} y={192} text="the equation, as given" size={42} color={INK_SOFT} hand at={K5.shown} />
					<EqStrip items={GEN} x={GX} y={GY} size={GS} at={K5.any} anchor="middle" />
				</g>
				{/* the two worked cases, then the bridge sentence */}
				<g opacity={stageB0}>
					<Fade at={K5.shown + 6}>
						<rect x={330} y={430} width={540} height={250} rx={24} fill="#fffdf8" stroke={FWD} strokeWidth={3.5} />
						<Sx x={620} y={484} text="iron tube" size={40} color={FWD} hand anchor="middle" at={K5.shown + 8} />
					</Fade>
					<Frac cx={610} cy={570} size={44} num={[{t: 'FeSCN^{2+}', br: true, at: K5.shown + 14}]} den={[{t: 'Fe^{3+}', at: K5.shown + 20}, {t: 'SCN^{−}', at: K5.shown + 26}]} barAt={K5.shown + 12} prefix="K =" />
					<Sx x={620} y={660} text="each coefficient 1: power 1" size={34} color={INK_SOFT} hand anchor="middle" at={K5.shown + 30} />
					<Fade at={K5.two}>
						<rect x={1050} y={430} width={540} height={250} rx={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3.5} />
						<Sx x={1340} y={484} text="hydrogen iodide tube" size={40} color={AMBER_INK} hand anchor="middle" at={K5.two + 2} />
					</Fade>
					<Frac cx={1350} cy={570} size={44} num={[{t: 'HI', p: '2', at: K5.two + 8, pAt: K5.two + 12}]} den={[{t: 'H_2', at: K5.two + 14}, {t: 'I_2', at: K5.two + 20}]} barAt={K5.two + 6} prefix="K =" />
					<Sx x={1340} y={660} text="coefficient 2: power 2" size={34} color={INK_SOFT} hand anchor="middle" at={K5.two + 24} />
					<Sx x={960} y={770} text="real reactions: often several smaller steps" size={40} color={INK_SOFT} hand anchor="middle" at={K5.real} />
					<Sx x={960} y={830} text="many reactions measured: the same pattern" size={44} color={TEAL} hand anchor="middle" at={K5.many} />
				</g>
				<g transform={`translate(${px} ${py}) scale(${ss}) translate(-960 -640)`}>
					<Frac cx={960} cy={640} size={78} num={num} den={den} barAt={K5.top - 6} prefix="K =" />
				</g>
				<Sx x={960} y={830} text="for the equation as given" size={48} color={TEAL} anchor="middle" hand at={K5.given} out={K5.tube1 - 6} />
				{/* stage B: the check */}
				<GasTube x={120} y={296} w={360} h={180} counts={{h: 2, i: 2, hi: 14}} seed={5} reveal={tubeA} clamps={false} />
				<GasTube x={120} y={600} w={360} h={180} counts={{h: 2, i: 8, hi: 28}} seed={9} reveal={prog(f, K5.tube2 - 8, 20)} clamps={false} />
				<Sx x={120} y={524} text="settled: 2, 2, 14" size={40} color={INK_SOFT} hand at={K5.tube1 + 6} />
				<Sx x={120} y={834} text="started with 16 H_2 and 22 I_2, settles at 2, 8, 28" size={36} color={INK_SOFT} hand at={K5.tube2 + 6} />
				{/* row 1 */}
				<Frac cx={640} cy={yA} size={S} num={n14} den={d22} barAt={c1(0)} />
				<Sx x={742} y={yA + 17} text="=" size={S} anchor="middle" at={c1b(0) - 4} />
				<Frac cx={830} cy={yA} size={S} num={[{t: '196', br: false, at: c1b(0)}]} den={[{t: '4', br: false, at: c1b(5)}]} barAt={c1b(0)} />
				<Sx x={930} y={yA + 17} text="=" size={S} anchor="middle" at={cueFrame(sc(D), 'forty-nine', 1) - 6} />
				<Sx x={962} y={yA + 24} text="49" size={74} color={TEAL} at={cueFrame(sc(D), 'forty-nine', 1)} />
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
				<Sx x={1640} y={510} text="not constant" size={48} color={AMBER_INK} anchor="middle" hand at={K5.put} />
				<Cross x={1810} y={496} at={K5.put} s={26} />
				<Chip x={760} y={860} w={420} text="same temperature" size={38} at={K5.tube1 + 20} color={INK_SOFT} />
				<Chip x={1220} y={860} w={660} text="made-up numbers to show the pattern" size={36} at={K5.tube1 + 24} color={INK_SOFT} />
				{INK ? null : null}
			</Overlay>
		</>
	);
};
void I2C; void FWD; void HIC;
