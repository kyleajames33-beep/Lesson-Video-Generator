import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, HotTube, MeetDemo, Overlay, Ring, Sx, Tag, TubeScale, TEAL, Tick, Radical, fracXW, tubeDot, tw} from './parts';
import type {Term} from './parts';
import {Line, rowXs} from '../chem-m5-c05/parts';
import {CARD, EQ, TB, H2I2_EQ, hiCols, hiPos} from './board';
import {IceTable, iceCell} from './ice';
import {Heading, GREEN, MINUS, PLUS, cw, kf, sc} from './common';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
const Gone: React.FC<{at: number; dur?: number; children: React.ReactNode}> = ({at, dur = 16, children}) => {
	const f = useCurrentFrame();
	const o = 1 - prog(f, at, dur);
	if (o <= 0.01) return null;
	return <g opacity={o}>{children}</g>;
};
const START_ROW = [{text: '0.45', at: -100, color: H2K}, {text: '0.45', at: -100, color: I2K}, {text: '0', at: -100, color: HIK}];

// ---------- 5b. The unknown x and the change row ----------
const U = 'unknown-x';
const KU = cues(sc(U), {call: 'call the amount', unit: 'in moles per litre', eq: 'The equation', two: 'two H I', rest: 'gives the rest', each: 'For each hydrogen used', iod: 'one iodine is used', made: 'two hydrogen iodide are made', so: 'So the change row is', m1: ['minus x', 1], m2: ['minus x', 2], p2: 'plus two x'});
const xAt = cw(U, 'used up x', 2);
export const SceneUnknownX: React.FC = () => {
	const f = useCurrentFrame();
	const dot = tubeDot(1610, 330, 0, 3, KU.call + 30);
	const live = tubeDot(1610, 330, 0, 3, f);
	const chip = (i: number, at: number, label: string, text: string) => {
		const src = [hiPos[0], hiPos[2], hiPos[4]][i];
		const x0 = i === 2 ? src.cx + 8 : src.sx + src.w / 2, y0 = EQ.y - 14;
		const [x1, y1] = iceCell(TB.x, TB.y, 1, 1, i);
		const e = prog(f, at, 30);
		const px = x0 + (x1 - x0) * e, py = y0 + (y1 - 54 - y0) * e;
		const o = prog(f, at, 6) * (1 - prog(f, at + 56, 12));
		if (o <= 0.01) return null;
		return (
			<g key={i} opacity={o}>
				<circle cx={px} cy={py} r={26} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={px} y={py + 12} text={text} size={36} color={AMBER_INK} anchor="middle" hand at={-1000} />
				<Sx x={px + 42} y={py + 12} text={label} size={40} color={AMBER_INK} hand at={at + 22} />
			</g>
		);
	};
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={-100} size={58} />
			<Overlay>
				<Tag x={1060} y={100} w={330} text="illustrative values" at={-100} />
				<EqStrip items={H2I2_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<Ring cx={hiPos[4].cx + 14} cy={EQ.y - 14} rx={21} ry={32} at={-100} color={AMBER} seed={4} />
				<Ring cx={hiPos[4].cx + 14} cy={EQ.y - 14} rx={28} ry={40} at={KU.two} out={KU.rest + 40} color={AMBER_INK} seed={9} />
				<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={340} at={-100} lh={58} lines={[
					{text: 'K = 49   (450 °C)', at: -100, color: TEAL},
					{text: '[H_2] at start: 0.45 mol/L', at: -100, size: 34},
					{text: '[I_2] at start: 0.45 mol/L', at: -100, size: 34},
					{text: '[HI] at start: 0', at: -100, size: 34},
				]} />
				<IceTable x={TB.x} y={TB.y} cols={hiCols([-100, -100, -100])} rows={ice(
					{at: -100, cells: START_ROW},
					{at: KU.so - 10, lit: [KU.so, KU.p2 + 60], cells: [
						{text: '−x', at: KU.m1, color: MINUS},
						{text: '−x', at: KU.m2, color: MINUS},
						{text: '+2x', at: KU.p2, color: PLUS},
					]},
					{at: -100, cells: []},
				)} />
				<HotTube x={1610} y={330} counts={{h: 9, i: 9, hi: 0}} />
				<TubeScale x={1550} y={760} at={-100} />
				{/* x and its meaning */}
				<Sx x={1380} y={266} text="x = H_2 used up" size={46} color={AMBER_INK} hand at={xAt} />
				<Sx x={1380} y={312} text="in mol/L" size={36} color={INK_SOFT} hand at={KU.unit} />
				<Arrow x1={1560} y1={290} x2={dot[0] - 18} y2={dot[1] - 6} at={xAt + 12} color={AMBER_INK} width={5} />
				<circle cx={live[0]} cy={live[1]} r={17} fill="none" stroke={AMBER} strokeWidth={5} opacity={prog(f, xAt + 24, 8)} />
				{/* one H2 and one I2 give two HI */}
				<MeetDemo x={96} y={780} at={KU.each} />
				{chip(0, KU.so - 4, '× 1', '1')}
				{chip(1, KU.so + 4, '× 1', '1')}
				{chip(2, KU.so + 22, '× 2', '2')}
				<Chip x={860} y={800} w={380} text="+x for HI" size={40} at={KU.p2 + 14} color={INK_SOFT} cross={KU.p2 + 38} />
				<Sx x={860} y={900} text="the coefficient is 2" size={44} color={AMBER_INK} hand at={KU.p2 + 46} />
			</Overlay>
		</>
	);
};

// ---------- 6a. Substitute into K and take the square root ----------
const S = 'substitute';
const KS = cues(sc(S), {eqrow: 'The equilibrium row', plus: 'plus', sub: 'Substitute into K', hiSq: 'Hydrogen iodide squared', sq2x: 'two x all squared', pos: 'both positive', perfect: 'perfect square', sevenSq: 'seven squared', root: 'square root', whole: 'the whole fraction is squared', topSq: 'The top is squared'});
const sw = (p: string, k: number, occ = 1) => cw(S, p, k, occ);
export const SceneSubstitute: React.FC = () => {
	const f = useCurrentFrame();
	const s = kf(f, [[316, 1], [358, 0.72]]);
	const tx = kf(f, [[316, TB.x], [358, 96]]), ty = kf(f, [[316, TB.y], [358, 270]]);
	const cell = (c: number): [number, number] => iceCell(96, 270, 0.72, 2, c);
	const eqT = sw('0.45 minus x', 0), iodT = sw('for iodine', 0), hiT = sw('two x for hydrogen', 0);
	const overH = sw('over hydrogen times iodine', 1), overI = sw('over hydrogen times iodine', 3);
	const v2a = sw('0.45 minus x', 0, 2), bottom = sw('the bottom is 0.45', 3), allSq = sw('all squared', 0, 3);
	const sq2x = KS.sq2x;
	const eq49a = sw('That equals 49', 2), eq49b = sw('equals 49', 0, 2);
	const E1 = {cx: 1300, cy: 440, size: 56};
	const num1: Term[][] = [
		[{t: 'HI', p: '2', at: KS.hiSq, from: cell(2), color: HIK, dur: 30, out: sq2x, pAt: sw('Hydrogen iodide squared', 2)}],
		[{t: '(2x)', p: '2', br: false, at: sq2x, color: HIK}],
	];
	const den1: Term[][] = [
		[{t: 'H_2', at: overH, from: cell(0), color: H2K, dur: 30, out: v2a - 4}, {t: 'I_2', at: overI, from: cell(1), color: I2K, dur: 30, out: v2a - 4}],
		[{t: '0.45 − x', at: v2a - 4, color: H2K, br: true, out: bottom - 4}, {t: '0.45 − x', at: v2a + 44, color: I2K, br: true, out: bottom - 4}],
		[{t: '(0.45 − x)', p: '2', br: false, at: bottom, pAt: sw('all squared', 0, 2) - 4}],
	];
	const glide = sw('Something squared', 0);
	const E2 = {cx: 860, cy: kf(f, [[glide, 720], [glide + 40, 440]]), size: 64};
	const W2 = fracXW([[{t: '2x', at: 0, br: false}]], [[{t: '0.45 − x', at: 0, br: false}]], E2.size);
	const lp = E2.cx - W2 / 2 - 38, rp = E2.cx + W2 / 2 + 38;
	const twoX = sw('two x over', 0, 1), d045 = sw('over 0.45 minus x', 1, 1);
	const allSq2 = allSq;
	const tx2 = sw('two x over', 0, 2);
	const eqSeven = sw('equals seven', 1);
	const E3 = {cx: 860, cy: 440, size: 64};
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={-100} size={58} />
			<Overlay>
				<IceTable x={tx} y={ty} s={s} opacity={1 - prog(f, KS.whole - 12, 22)} cols={hiCols([-100, -100, -100])} rows={ice(
					{at: -100, lit: [KS.eqrow + 40, KS.plus + 20], dim: [KS.sub, 0, 0.3], cells: START_ROW},
					{at: -100, lit: [KS.plus + 10, KS.plus + 50], dim: [KS.sub, 0, 0.3], cells: [{text: '−x', at: -100, color: MINUS}, {text: '−x', at: -100, color: MINUS}, {text: '+2x', at: -100, color: PLUS}]},
					{at: -100, cells: [
						{text: '0.45 − x', at: eqT, color: H2K, size: 42},
						{text: '0.45 − x', at: iodT, color: I2K, size: 42},
						{text: '2x', at: hiT, color: HIK, size: 46},
					]},
				)} />
				<DrawPath d={`M${TB.x + 200},${TB.y + 210} L${TB.x + 240},${TB.y + 210}`} at={KS.plus} dur={8} color={AMBER_INK} width={8} opacity={1 - prog(f, KS.sub - 10, 12)} />
				<DrawPath d={`M${TB.x + 220},${TB.y + 190} L${TB.x + 220},${TB.y + 230}`} at={KS.plus + 6} dur={8} color={AMBER_INK} width={8} opacity={1 - prog(f, KS.sub - 10, 12)} />
				{/* K expression with the table cells dropping in */}
				<Gone at={glide}>
					<FracX cx={E1.cx} cy={E1.cy} size={E1.size} num={num1} den={den1} barAt={KS.sub + 6} prefix="K =" prefixAt={KS.sub + 6} hold={400} />
					<Sx x={E1.cx + 200 + 30} y={E1.cy + 22} text="= 49" size={56} color={TEAL} at={eq49a} />
					<Chip x={960} y={250} w={760} text="(2x)^{2} = 2x times 2x, not 2x^{2}" size={36} at={sq2x} out={sq2x + 130} color={AMBER_INK} />
					<Fade at={KS.sub + 20} out={KS.whole - 12}>
						<Sx x={96} y={640} text="equilibrium row only" size={40} color={AMBER_INK} hand at={KS.sub + 20} />
					</Fade>
				</Gone>
				{/* the whole fraction is squared */}
				<Fade at={KS.whole - 4} out={tx2 - 8}>
					<DrawPath d={`M${lp + 22},${E2.cy - 100} Q${lp - 22},${E2.cy + 10} ${lp + 22},${E2.cy + 124}`} at={KS.whole} dur={16} color={INK} width={6} />
					<DrawPath d={`M${rp - 22},${E2.cy - 100} Q${rp + 22},${E2.cy + 10} ${rp - 22},${E2.cy + 124}`} at={KS.whole + 4} dur={16} color={INK} width={6} />
					<Sx x={rp + 14} y={E2.cy - 56} text="2" size={46} color={TEAL} at={allSq2} />
					<FracX cx={E2.cx} cy={E2.cy} size={E2.size} num={[[{t: '2x', br: false, at: twoX, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: d045, color: H2K}]]} barAt={twoX - 4} />
					<Sx x={rp + 70} y={E2.cy + 24} text="= " size={64} at={eq49b - 6} />
					<Sx x={rp + 130} y={E2.cy + 24} text="49" size={64} color={TEAL} at={eq49b} out={KS.sevenSq + 6} />
					<Sx x={rp + 130} y={E2.cy + 24} text="7^{2}" size={64} color={TEAL} at={KS.sevenSq + 8} />
					<Radical x={lp - 14} y={E2.cy - 190} w={rp - lp + 70} h={64} at={KS.root} />
					<Radical x={rp + 120} y={E2.cy - 190} w={110} h={64} at={KS.root + 8} />
					<Sx x={E2.cx} y={E2.cy + 215} text="perfect square: something squared" size={40} color={AMBER_INK} anchor="middle" hand at={KS.perfect} />
				</Fade>
				{/* after the square root */}
				<Fade at={tx2 - 4}>
					<FracX cx={E3.cx} cy={E3.cy} size={E3.size} num={[[{t: '2x', br: false, at: tx2, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: tx2 + 26, color: H2K}]]} barAt={tx2 - 4} />
					<Sx x={E3.cx + W2 / 2 + 40} y={E3.cy + 24} text="= 7" size={64} color={TEAL} at={eqSeven} />
					<Tick x={E3.cx + W2 / 2 + 250} y={E3.cy + 6} at={sw('plus seven', 0)} s={52} />
					<Sx x={E3.cx} y={E3.cy + 215} text="[HI] / [H_2] > 0" size={46} color={AMBER_INK} anchor="middle" hand at={KS.pos} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 6b. Solve (pause here and try it) ----------
const V = 'solve';
const KV = cues(sc(V), {rearr: 'rearrange', mult: 'Multiply both sides', by: 'by 0.45 minus x', two: 'two x equals', which: 'which is', add: 'Add 7x', both: 'to both sides', nine: 'nine x', findx: 'Find x', pause: 'Pause'});
const c7 = cw(V, '7 times', 0), cT = cw(V, '7 times', 1), c045 = cw(V, '0.45 minus x', 0, 2);
const c315 = cw(V, '3.15 minus 7x', 0), cMinus = cw(V, '3.15 minus 7x', 1), c7x = cw(V, '3.15 minus 7x', 2);
const c315b = cw(V, 'equals 3.15', 1);
export const SceneSolve: React.FC = () => {
	const f = useCurrentFrame();
	const hold = sc(V).responseHold as {startFrame: number; endFrame: number};
	const SZ = 60;
	const ecx = kf(f, [[0, 860], [28, 520]]), ecy = kf(f, [[0, 440], [28, 250]]);
	const W3 = fracXW([[{t: '2x', at: 0, br: false}]], [[{t: '0.45 − x', at: 0, br: false}]], SZ);
	const L1: Term[] = [
		{t: '2x', br: false, at: KV.two, color: HIK},
		{t: '=', br: false, at: KV.two + 14},
		{t: '7', br: false, at: c7, from: [ecx + W3 / 2 + 90, ecy + 22], dur: 26, color: TEAL, out: 400},
		{t: '(0.45 − x)', br: false, at: c045, from: [ecx - 80, ecy + 60], dur: 30, color: H2K},
	].map(t => ({...t, out: 410})) as Term[];
	const L2: Term[] = [
		{t: '2x', br: false, at: KV.which - 8, color: HIK},
		{t: '=', br: false, at: KV.which},
		{t: '3.15', br: false, at: c315, color: TEAL},
		{t: '−', br: false, at: cMinus},
		{t: '7x', br: false, at: c7x, color: MINUS},
	].map(t => ({...t, out: KV.nine + 6})) as Term[];
	const L3a: Term[] = [
		{t: '2x', br: false, at: KV.both, color: HIK},
		{t: '+', br: false, at: KV.both + 6, color: PLUS},
		{t: '7x', br: false, at: KV.both + 4, from: [rowXs(L2, SZ, 300, 'start')[4].x, 600], dur: 36, color: PLUS},
		{t: '=', br: false, at: KV.both + 12},
		{t: '3.15', br: false, at: KV.both + 14, color: TEAL},
	].map(t => ({...t, out: KV.nine + 8})) as Term[];
	const bigX = 300;
	return (
		<>
			<Heading text="Find the equilibrium concentrations" at={-100} size={58} />
			<Overlay>
				<Gone at={c7 + 20}>
					<FracX cx={ecx} cy={ecy} size={SZ} num={[[{t: '2x', br: false, at: -100, color: HIK}]]} den={[[{t: '0.45 − x', br: false, at: -100, color: H2K}]]} barAt={-100} />
					<Sx x={ecx + W3 / 2 + 40} y={ecy + 22} text="= 7" size={SZ} color={TEAL} at={-100} />
					<Sx x={ecx} y={ecy + 150} text="× (0.45 − x) on both sides" size={40} color={AMBER_INK} anchor="middle" hand at={KV.mult + 16} out={KV.two - 6} />
				</Gone>
				<Line x={300} y={440} size={SZ} items={L1} />
				<Line x={300} y={600} size={SZ} items={L2} />
				<Fade at={KV.add} out={KV.nine}>
					<Sx x={300} y={676} text="+ 7x on both sides" size={42} color={PLUS} hand at={KV.add} />
				</Fade>
				<Line x={300} y={750} size={SZ} items={L3a} />
				{/* the finished stage and the question */}
				<Sx x={bigX} y={570} text="9x" size={124} color={INK} at={KV.nine} />
				<Sx x={bigX + 175} y={570} text="=" size={124} color={INK} at={KV.nine + 14} />
				<Sx x={bigX + 290} y={570} text="3.15" size={124} color={TEAL} at={c315b} />
				<Sx x={bigX} y={740} text="x = ?" size={116} color={AMBER_INK} hand at={KV.findx} />
				<Sx x={1040} y={330} text="Pause here and try it." size={66} color={AMBER_INK} hand at={KV.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1500} y={560} r={80} />
			</Overlay>
		</>
	);
};
void AMBER; void INK; void GREEN; void tw; void Chip;
