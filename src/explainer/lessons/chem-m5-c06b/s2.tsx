import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Push, Ring, Sx, Tag, TEAL, Tick, eqLayout, fracXW, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {rowXs} from '../chem-m5-c05/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {CROSS, Heading, H2K, HIK, I2K, IAT_INK, MINUS, PLUS, cw, kf, sc} from './common';
import {CheckRuler, IodineKey, IodineTube, iodineHotLabel, iodinePainted, splitPos} from './parts';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;

// ---------- 8. Why the square root worked ----------
const Q = 'square-condition';
const KQ = cues(sc(Q), {why: 'Why did the square root', equal: 'started equal', bottom: 'the bottom of the fraction', times: 'times itself', sq: ['a square', 1], top: 'just like the top', knot: 'K does not have to be', k50: '50', root: 'about 7.07', still: 'still work', needs: 'What it needs', both: 'both squares', whole: 'the whole fraction is something', means: 'perfect square means', frac: 'the fraction not the number', many: 'Many questions', tiny: 'tiny K'});
export const SceneSquareCondition: React.FC = () => {
	const f = useCurrentFrame();
	const E = {cx: 760, cy: 430, size: 62};
	const num: Term[][] = [[{t: '(2x)', p: '2', br: false, at: 14, color: HIK}]];
	const den: Term[][] = [
		[{t: '0.45 − x', at: 14, color: H2K, out: KQ.sq}, {t: '0.45 − x', at: 14, color: I2K, out: KQ.sq}],
		[{t: '(0.45 − x)', p: '2', br: false, at: KQ.sq + 4, pAt: KQ.sq + 14, color: H2K}],
	];
	const W = fracXW(num, den, E.size);
	const rx = E.cx + W / 2 + 26;
	const yDen = E.cy + E.size * 1.1, yNum = E.cy - E.size * 0.36;
	const T50 = {cx: 560, cy: 690, size: 46};
	const W50 = fracXW([[{t: '2x', br: false, at: 0}]], [[{t: '0.45 − x', br: false, at: 0}]], T50.size);
	return (
		<>
			<Heading text="Why the square root worked" at={4} size={62} />
			<Overlay>
				<Sx x={96} y={254} text="start: [H_2] = [I_2] = 0.45 mol/L" size={40} color={INK} at={10} />
				<FracX cx={E.cx} cy={E.cy} size={E.size} num={num} den={den} barAt={10} />
				<Sx x={rx} y={E.cy + 22} text="=" size={E.size} at={14} />
				<Sx x={rx + 56} y={E.cy + 22} text="49" size={E.size} color={TEAL} at={14} out={KQ.k50} />
				<Sx x={rx + 56} y={E.cy + 22} text="50" size={E.size} color={INK_SOFT} at={KQ.k50 + 4} out={KQ.needs} />
				<Sx x={rx + 56} y={E.cy + 22} text="49" size={E.size} color={TEAL} at={KQ.needs + 4} />
				{/* started equal: the two factors match, joined to the start line */}
				<Ring cx={E.cx} cy={yDen - 20} rx={W / 2 + 10} ry={50} at={KQ.equal} out={KQ.sq} color={AMBER} seed={4} />
				<DrawPath d={`M${E.cx - W / 2 - 4},${yDen - 30} Q${300},${400} ${330},${270}`} at={KQ.equal + 8} dur={20} color={AMBER} width={4} opacity={1 - prog(f, KQ.sq, 10)} />
				<Ring cx={300} cy={240} rx={230} ry={36} at={KQ.equal + 14} out={KQ.sq + 20} color={AMBER} seed={5} />
				{/* the bottom is a square, just like the top */}
				<Fade at={KQ.sq + 6}>
					<DrawPath d={`M${E.cx - 150},${yDen + 30} Q${E.cx},${yDen + 54} ${E.cx + 150},${yDen + 30}`} at={KQ.sq + 6} dur={14} color={AMBER_INK} width={5} />
					<Sx x={E.cx} y={yDen + 92} text="square" size={40} color={AMBER_INK} anchor="middle" hand at={KQ.sq + 12} />
				</Fade>
				<Fade at={KQ.top}>
					<DrawPath d={`M${E.cx - 90},${yNum - 70} Q${E.cx},${yNum - 92} ${E.cx + 90},${yNum - 70}`} at={KQ.top} dur={14} color={AMBER_INK} width={5} />
					<Sx x={E.cx + 110} y={yNum - 78} text="square" size={40} color={AMBER_INK} hand at={KQ.top + 6} />
				</Fade>
				<Ring cx={E.cx} cy={yNum - 20} rx={110} ry={50} at={KQ.both} out={KQ.both + 50} color={AMBER} seed={7} />
				<Ring cx={E.cx} cy={yDen - 20} rx={150} ry={50} at={KQ.both + 8} out={KQ.both + 58} color={AMBER} seed={8} />
				<Sx x={rx + 160} y={E.cy + 22} text="K need not be a square number" size={38} color={INK_SOFT} hand at={KQ.knot} out={KQ.needs} />
				{/* if K were 50 */}
				<Fade at={KQ.k50} out={KQ.means - 10}>
					<Sx x={96} y={T50.cy + 18} text="If K = 50:" size={44} color={INK_SOFT} hand at={KQ.k50} />
					<FracX cx={T50.cx} cy={T50.cy} size={T50.size} num={[[{t: '2x', br: false, at: KQ.root - 10, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: KQ.root - 10, color: H2K}]]} barAt={KQ.root - 12} />
					<Sx x={T50.cx + W50 / 2 + 20} y={T50.cy + 16} text="= 7.07" size={T50.size} color={TEAL} at={KQ.root} />
					<Tick x={T50.cx + W50 / 2 + 230} y={T50.cy} at={KQ.still} s={40} />
					<Sx x={T50.cx + W50 / 2 + 270} y={T50.cy + 14} text="still works" size={40} color={TEAL} hand at={KQ.still + 4} />
				</Fade>
				{/* the meaning from now on */}
				<Sx x={96} y={812} text="perfect square = the whole fraction is something squared" size={46} color={AMBER_INK} hand at={KQ.whole} />
				<Ring cx={E.cx + 40} cy={E.cy + 6} rx={W / 2 + 120} ry={130} at={KQ.frac} out={KQ.frac + 60} color={AMBER_INK} seed={2} />
				<Fade at={KQ.many}>
					<Sx x={96} y={892} text="[H_2] = 0.45, [I_2] = 0.30  →  bottom (0.45 − x)(0.30 − x): not a square" size={34} color={INK_SOFT} at={KQ.many} />
					<Cross x={1460} y={880} at={KQ.many + 30} s={20} color={CROSS} />
				</Fade>
				<Chip x={1420} y={624} w={380} text="next: tiny K" size={44} at={KQ.tiny} color={TEAL} />
			</Overlay>
		</>
	);
};

// ---------- 9a. Tiny K: hot iodine, x and the equilibrium row ----------
export const I_EQ: EqItem[] = [{k: 'sp', t: 'I_2(g)', color: I2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'I(g)', color: IAT_INK}];
const iPos = eqLayout(I_EQ, 46, 96).pos;
export const iCols = (a: number) => [{name: 'I_2', at: a, color: I2K}, {name: 'I', at: a + 10, color: IAT_INK}];
export const ITB = {x: 620, y: 330};
const TUBE_XY = {x: 1560, y: 340};
const A9 = 'tiny-k-setup';
const KA = cues(sc(A9), {here: 'Here is iodine again', hot: 'very hot', few: 'A few I two molecules', atoms: 'iodine atoms', makes: 'I two makes two I', ktiny: 'K is tiny', k16: '1.6 times ten', start: 'we start with', s025: ['0.25 moles', 1], noat: 'no atoms', call: 'Call the I two', each: 'Each I two makes', chg: 'the change row is', mx: 'minus x and plus', p2x: ['plus two x', 1], eqrow: 'the equilibrium row is', e025: ['0.25 minus x', 1], e2x: ['and two x', 1], kis: 'So K is two x', over: 'over 0.25 minus x'});
const xAt9 = cw(A9, 'that splits x', 2), two9 = cw(A9, 'So K is two x', 3), sq9 = cw(A9, 'all squared over', 1);
export const SceneTinySetup: React.FC = () => {
	const f = useCurrentFrame();
	const cell = (r: number, c: number) => iceCell(ITB.x, ITB.y, 1, r, c);
	const chip = (at: number) => {
		const x0 = iPos[2].cx + 8, y0 = 236;
		const [x1, y1] = cell(1, 1);
		const e = prog(f, at, 30);
		const px = x0 + (x1 - 46 - x0) * e, py = y0 + (y1 - 6 - y0) * e;
		const o = prog(f, at, 6) * (1 - prog(f, at + 40, 10));
		if (o <= 0.01) return null;
		return (
			<g opacity={o}>
				<circle cx={px} cy={py} r={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={px} y={py + 12} text="2" size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
				<Sx x={px + 42} y={py + 12} text="× 2" size={40} color={AMBER_INK} hand at={at + 22} />
			</g>
		);
	};
	const sp = splitPos(TUBE_XY.x, TUBE_XY.y, KA.atoms);
	const hot = iodineHotLabel(TUBE_XY.x, TUBE_XY.y);
	const LOG = {x0: 110, x1: 590, y: 742};
	const lx = (e: number) => LOG.x1 + (e / 6) * (LOG.x1 - LOG.x0); // e from 0 (K = 1) down to -6
	const symNum: Term[][] = [[{t: 'I', p: '2', at: KA.kis + 4, color: IAT_INK}]];
	const symDen: Term[][] = [[{t: 'I_2', at: KA.kis + 10, color: I2K}]];
	const xNum: Term[][] = [[{t: '(2x)', p: '2', br: false, at: two9, color: IAT_INK, pAt: sq9}]];
	const xDen: Term[][] = [[{t: '0.25 − x', br: false, at: KA.over + 6, color: I2K}]];
	const Y = 840;
	return (
		<>
			<Heading text="Find [I] at equilibrium" at={14} size={62} />
			<Overlay>
				<Push inAt={0}>
					<EqStrip items={I_EQ} x={96} y={250} size={46} at={20} />
					<Ring cx={iPos[2].cx + 11} cy={236} rx={17} ry={30} at={KA.makes + 10} color={AMBER} seed={4} />
					<GivensCard x={96} y={330} w={520} h={260} at={KA.ktiny - 10} lh={58} lines={[
						{text: 'K = 1.6 × 10^{−5}   (very hot)', at: KA.k16, color: TEAL, size: 34},
						{text: '[I_2] at start: 0.25 mol/L', at: KA.s025, size: 34},
						{text: 'no I atoms at start', at: KA.noat, size: 34},
					]} />
					<Tag x={96} y={606} w={300} text="illustrative value" at={KA.k16 + 16} color={AMBER_INK} />
					{/* the size of K on a power-of-ten line (C5 callback) */}
					<Fade at={KA.k16 + 24}>
						<DrawPath d={`M${LOG.x0},${LOG.y} L${LOG.x1},${LOG.y}`} at={KA.k16 + 24} dur={14} color={INK} width={4} />
						{[0, -1, -2, -3, -4, -5, -6].map(e => <path key={e} d={`M${lx(e)},${LOG.y - 10} L${lx(e)},${LOG.y + 10}`} stroke={INK} strokeWidth={3} />)}
						<Sx x={lx(0)} y={LOG.y + 44} text="1" size={30} anchor="middle" at={KA.k16 + 28} />
						<Sx x={lx(-5)} y={LOG.y + 44} text="10^{−5}" size={30} anchor="middle" at={KA.k16 + 28} />
						<circle cx={lx(-4.8)} cy={LOG.y} r={11} fill={TEAL} stroke={INK} strokeWidth={2.5} />
						<Sx x={lx(-4.8)} y={LOG.y - 22} text="K" size={34} color={TEAL} anchor="middle" hand at={KA.k16 + 32} />
						<Sx x={LOG.x0} y={LOG.y + 92} text="tiny: hardly any splits" size={38} color={AMBER_INK} hand at={KA.k16 + 40} />
					</Fade>
					<IceTable x={ITB.x} y={ITB.y} outlineAt={KA.start - 20} cols={iCols(KA.start - 10)} rows={ice(
						{at: KA.start - 6, cells: [{text: '0.25', at: KA.s025 + 6, color: I2K}, {text: '0', at: KA.noat, color: IAT_INK}]},
						{at: KA.start, lit: [KA.chg, KA.p2x + 50], cells: [{text: '−x', at: KA.mx, color: MINUS}, {text: '+2x', at: KA.p2x, color: PLUS}]},
						{at: KA.start + 6, lit: [KA.eqrow, KA.e2x + 50], cells: [{text: '0.25 − x', at: KA.e025, color: I2K, size: 42}, {text: '2x', at: KA.e2x, color: IAT_INK, size: 46}]},
					)} />
					{chip(KA.each + 8)}
					{/* the tube: only one molecule splits in view */}
					<IodineTube x={TUBE_XY.x} y={TUBE_XY.y} splitAt={KA.atoms} reveal={prog(f, KA.here, 20)} />
					<Fade at={KA.hot}><Sx x={hot.x} y={hot.y} text="very hot" size={40} color="#c4582f" anchor={hot.anchor} hand at={KA.hot} /></Fade>
					<IodineKey x={iodinePainted() ? 1372 : 1530} y={iodinePainted() ? 560 : 756} at={KA.few} />
					<Sx x={1336} y={272} text="x = I_2 that splits" size={42} color={AMBER_INK} hand at={xAt9} />
					<Sx x={1336} y={312} text="in mol/L" size={34} color={INK_SOFT} hand at={xAt9 + 8} />
					<Ring cx={sp.x} cy={sp.y} rx={36} ry={36} at={xAt9 + 6} out={xAt9 + 60} color={AMBER_INK} seed={5} />
					{/* K in x */}
					<FracX cx={800} cy={Y} size={50} num={symNum} den={symDen} barAt={KA.kis} prefix="K =" prefixAt={KA.kis} />
					<Sx x={890} y={Y + 18} text="=" size={50} at={KA.over - 6} />
					<FracX cx={1110} cy={Y} size={50} num={xNum} den={xDen} barAt={KA.over - 4} />
					<Sx x={1240} y={Y + 18} text="= 1.6 × 10^{−5}" size={50} color={TEAL} at={KA.over + 20} />
					<Tag x={1240} y={Y + 46} w={330} text="K: no unit written" at={KA.over + 30} color={AMBER_INK} />
					<Sx x={1110} y={Y + 140} text="not a square" size={34} color={INK_SOFT} anchor="middle" hand at={KA.over + 40} />
				</Push>
			</Overlay>
		</>
	);
};

// ---------- 9b. The condition and the drop ----------
const B9 = 'tiny-k-drop';
const KB = cues(sc(B9), {bottom: 'The bottom is not a square', help: 'will not help', look: 'look at the size', tinyK: 'A tiny K means', xtiny: 'x is tiny', taking: 'Taking a tiny amount', about: 'about 0.25', drop: 'drop the x', keep: 'Keep the x on top', answer: 'the answer we want', needs: 'This shortcut needs', kvs: 'K very small', start: 'a start that is not tiny'});
export const TS = {x: 96, y: 410, s: 0.72};
export const EQX = {cx: 1000, cy: 390, size: 60};
export const tinyTable = (e: {drop?: number; i2x?: number; ring?: number}) => ice(
	{at: -100, cells: [{text: '0.25', at: -100, color: I2K}, {text: '0', at: -100, color: IAT_INK}]},
	{at: -100, cells: [{text: '−x', at: -100, color: MINUS}, {text: '+2x', at: -100, color: PLUS}]},
	{at: -100, cells: [
		{text: '0.25 − x', at: -100, color: I2K, size: 42, swap: {text: '≈ 0.25', at: e.drop ?? -100, color: I2K}},
		{text: '2x', at: -100, color: IAT_INK, size: 40, swap: e.i2x === undefined ? undefined : {text: '0.0020', at: e.i2x, color: IAT_INK}},
	]},
);
export const GivensStrip: React.FC<{at: number}> = ({at}) => (
	<Fade at={at}>
		<rect x={96} y={300} width={640} height={60} rx={30} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
		<Sx x={120} y={341} text="K = 1.6 × 10^{−5},   start 0.25 mol/L" size={32} color={INK} weight={600} at={at} />
	</Fade>
);
export const ConditionCard: React.FC<{at: number; t1: number; t2: number; x?: number; y?: number}> = ({at, t1, t2, x = 680, y = 760}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={1140} height={214} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
		<Sx x={x + 30} y={y + 58} text="Drop x only when:" size={46} color={TEAL} hand at={at} />
		<Sx x={x + 40} y={y + 124} text="K very small" size={44} hand at={t1} />
		<Tick x={x + 420} y={y + 110} at={t1 + 10} s={36} />
		<Sx x={x + 470} y={y + 124} text="K = 1.6 × 10^{−5}" size={36} color={INK_SOFT} at={t1 + 12} />
		<Sx x={x + 40} y={y + 186} text="the start not tiny" size={44} hand at={t2} />
		<Tick x={x + 420} y={y + 172} at={t2 + 10} s={36} />
		<Sx x={x + 470} y={y + 186} text="start 0.25 mol/L" size={36} color={INK_SOFT} at={t2 + 12} />
	</Fade>
);
const RUL = {x: 700, y: 560, w: 1000};
export const SceneTinyDrop: React.FC = () => {
	const f = useCurrentFrame();
	const T = {x: kf(f, [[0, ITB.x], [30, TS.x]]), y: kf(f, [[0, ITB.y], [30, TS.y]]), s: kf(f, [[0, 1], [30, TS.s]])};
	const den: Term[] = [{t: '0.25', br: false, at: -100, color: I2K}, {t: '− x', br: false, at: 99999}];
	const xs = rowXs(den, EQX.size, EQX.cx, 'middle');
	const W = fracXW([[{t: '(2x)', p: '2', br: false, at: 0}]], [den], EQX.size);
	const rx = EQX.cx + W / 2 + 24;
	const dp = prog(f, KB.drop, 26);
	const yDen = EQX.cy + EQX.size * 1.1;
	return (
		<>
			<Heading text="Find [I] at equilibrium" at={-100} size={62} />
			<Overlay>
				<EqStrip items={I_EQ} x={96} y={250} size={46} at={-100} />
				<GivensCard x={96} y={330} w={520} h={260} at={-100} out={4} lh={58} lines={[
					{text: 'K = 1.6 × 10^{−5}   (very hot)', at: -100, color: TEAL, size: 34},
					{text: '[I_2] at start: 0.25 mol/L', at: -100, size: 34},
					{text: 'no I atoms at start', at: -100, size: 34},
				]} />
				<GivensStrip at={10} />
				<IceTable x={T.x} y={T.y} s={T.s} cols={iCols(-100)} rows={tinyTable({drop: KB.drop + 10})} />
				<Ring cx={iceCell(TS.x, TS.y, TS.s, 2, 0)[0]} cy={iceCell(TS.x, TS.y, TS.s, 2, 0)[1]} rx={86} ry={34} at={KB.drop + 10} out={KB.drop + 80} color={AMBER} seed={3} />
				{/* the K line */}
				<FracX cx={EQX.cx} cy={EQX.cy} size={EQX.size} num={[[{t: '(2x)', p: '2', br: false, at: 6, color: IAT_INK}]]} den={[den]} barAt={4} />
				<g opacity={1 - dp} transform={`translate(${60 * dp},${30 * dp})`}>
					<Sx x={xs[1].x} y={yDen} text="− x" size={EQX.size} color={dp > 0.02 ? INK_SOFT : I2K} at={6} />
				</g>
				<Sx x={rx} y={EQX.cy + 22} text="=" size={EQX.size} at={6} out={KB.drop + 6} />
				<Sx x={rx} y={EQX.cy + 22} text="≈" size={EQX.size} color={AMBER_INK} at={KB.drop + 10} />
				<Sx x={rx + 60} y={EQX.cy + 22} text="1.6 × 10^{−5}" size={EQX.size} color={TEAL} at={6} />
				<Sx x={EQX.cx} y={yDen + 70} text="not a square: the root will not help" size={34} color={INK_SOFT} anchor="middle" hand at={KB.bottom + 10} out={KB.look} />
				<Ring cx={EQX.cx} cy={EQX.cy - 44} rx={100} ry={52} at={KB.keep} color={AMBER_INK} seed={6} />
				<Sx x={EQX.cx} y={EQX.cy - 124} text="keep: this is the answer" size={40} color={AMBER_INK} anchor="middle" hand at={KB.keep + 8} />
				{/* the check ruler: x is a sliver of the start */}
				<Sx x={RUL.x} y={RUL.y - 64} text="a tiny K: hardly any I_2 splits" size={38} color={INK_SOFT} hand at={KB.tinyK} out={KB.taking} />
				<CheckRuler x={RUL.x} y={RUL.y} w={RUL.w} frac={0.008} at={KB.tinyK} sliverAt={KB.xtiny} side="end" startLabel="start: 0.25" sliverLabel="x?" overlayAt={KB.about} overlayLabel="≈ 0.25" />
				<Sx x={RUL.x} y={RUL.y + 136} text="0.25 − x" size={36} color={INK_SOFT} hand at={KB.about + 10} />
				<ConditionCard at={KB.needs} t1={KB.kvs} t2={KB.start} />
			</Overlay>
		</>
	);
};
void INK; void tw;
