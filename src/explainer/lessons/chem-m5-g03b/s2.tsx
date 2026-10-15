import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, INK, INK_SOFT, PAPER, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, Cross, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {CheckRuler, ShortcutCard} from '../chem-m5-c06b/parts';
import {Heading, MINUS, N2O4K, NO2K, PLUS, hold, sc} from './common';
import {HscTag, SlipChip, Task} from '../chem-m5-g03a/board';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const N_EQ: EqItem[] = [{k: 'sp', t: 'N_2O_4(g)', color: N2O4K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2K}];
const nCols = (a: number) => [{name: 'N_2O_4', at: a, color: N2O4K}, {name: 'NO_2', at: a + 8, color: NO2K}];
const NT = {x: 720, y: 330, s: 0.7};
const TASK = 'Which shortcut fits? Find [NO_2] at equilibrium.';
const givens = (a: {k: number; s: number; n: number}) => [
	{text: 'K = 4.0 × 10^{−4}', at: a.k, color: TEAL, size: 36},
	{text: 'start: [N_2O_4] = 0.500 mol/L', at: a.s, color: N2O4K, size: 34},
	{text: 'no NO_2 at start', at: a.n, color: NO2K, size: 34},
];
/** Task, equation and givens: the same three zones in every type 3 scene. */
const Board: React.FC<{a?: {task: number; eq: number; k: number; s: number; n: number}}> = ({a}) => {
	const z = a ?? {task: -100, eq: -100, k: -100, s: -100, n: -100};
	return (
		<>
			<Task text={TASK} at={z.task} size={54} />
			<HscTag at={z.task} />
			<EqStrip items={N_EQ} x={96} y={250} size={46} at={z.eq} />
			<GivensCard x={96} y={330} w={560} h={246} at={Math.min(z.k, z.s) - 8} lh={56} lines={givens(z)} />
		</>
	);
};

// ---------- 2a. Type 3: K and a start; which shortcut? (pause) ----------
const Q = 'tiny-k-question';
const KQ = cues(sc(Q), {type: 'Type three', quad: 'quadratic formula', need: "shouldn't need it", look: 'Look for a perfect', ps: 'perfect square', tiny: 'a tiny K', n2o4: 'N two O four splits', k: 'K is 4.0', start: 'the start is', s500: '0.500 moles', none: 'with no N O two', which: 'Which shortcut fits', find: 'Find the N O two', pause: 'Pause here'});
export const SceneTinyQuestion: React.FC = () => {
	const h = hold(Q);
	return (
		<>
			<Overlay>
				<Board a={{task: 6, eq: KQ.n2o4, k: KQ.k, s: KQ.s500, n: KQ.none}} />
				<Ring cx={96 + tw('Which shortcut fits?', 54, true) / 2} cy={136} rx={tw('Which shortcut fits?', 54, true) / 2 + 24} ry={40} at={KQ.which} out={KQ.find} color={AMBER} seed={3} />
				<Ring cx={96 + tw('Which shortcut fits? ', 54, true) + tw('Find [NO_2] at equilibrium.', 54, true) / 2} cy={136} rx={tw('Find [NO_2] at equilibrium.', 54, true) / 2 + 24} ry={40} at={KQ.find} out={KQ.pause + 20} color={AMBER} seed={5} />
				<Tag x={720} y={204} w={840} text="a different temperature from the ICE table video, so a different K" at={KQ.k + 12} size={28} color={AMBER_INK} />
				<IceTable x={NT.x} y={NT.y} s={NT.s} outlineAt={KQ.start - 20} cols={nCols(KQ.start - 10)} rows={ice({at: KQ.start, cells: []}, {at: KQ.start + 4, cells: []}, {at: KQ.start + 8, cells: []})} />
				{/* the quadratic formula: allowed, but you should not need it */}
				<Fade at={KQ.quad} out={KQ.look + 20}>
					<rect x={1240} y={330} width={584} height={200} rx={22} fill="#f3efe7" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={1270} y={390} text="Quadratic formula: allowed." size={40} color={INK_SOFT} hand at={KQ.quad} />
					<Sx x={1270} y={444} text="HSC questions are written so" size={38} color={INK} hand at={KQ.need - 20} />
					<Sx x={1270} y={496} text="you should not need it." size={40} color={TEAL} hand at={KQ.need} />
				</Fade>
				<ShortcutCard x={720} y={660} w={1104} h={240} at={KQ.ps - 4} leftAt={KQ.ps} rightAt={KQ.tiny} thumbs={false} size={38} />
				<Sx x={96} y={680} text="Pause here to answer." size={52} color={AMBER_INK} hand at={KQ.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1530} y={460} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Choose the shortcut ----------
const S = 'tiny-k-setup';
const KS = cues(sc(S), {ifx: 'If x of the', left: 'left is 0.500', no2: 'N O two is two x', kis: 'so K is two', sq: 'all squared', over: 'over 0.500 minus', bottom: 'The bottom is not', root: 'square root will not', tiny: 'K is tiny', drop: 'drop the x', about: 'is about 0.500'});
export const SceneTinySetupG3: React.FC = () => {
	const f = useCurrentFrame();
	const num: Term[][] = [[{t: '(2x)', p: '2', br: false, at: KS.kis, pAt: KS.sq, color: NO2K}]];
	const den: Term[][] = [[{t: '0.500 − x', br: false, at: KS.over, out: KS.drop + 10, color: N2O4K}], [{t: '0.500', br: false, at: KS.drop + 14, color: N2O4K}]];
	const SC = {x: 96, y: 680, w: 1150, h: 250};
	const half = (SC.w - 24) / 2;
	const grey = prog(f, KS.root, 14);
	return (
		<>
			<Overlay>
				<Board />
				<IceTable x={NT.x} y={NT.y} s={NT.s} cols={nCols(-100)} rows={ice(
					{at: -100, cells: [{text: '0.500', at: KS.ifx, color: N2O4K}, {text: '0', at: KS.ifx + 6, color: INK_SOFT}]},
					{at: -100, cells: [{text: '−x', at: KS.ifx + 14, color: MINUS}, {text: '+2x', at: KS.no2, color: PLUS, tag: {text: '1 : 2', at: KS.no2 + 8, color: AMBER_INK}}]},
					{at: -100, lit: [KS.left, KS.kis], cells: [{text: '0.500 − x', at: KS.left, color: N2O4K, size: 42, swap: {text: '≈ 0.500', at: KS.drop + 14, color: N2O4K}}, {text: '2x', at: KS.no2 + 10, color: NO2K}]},
				)} />
				<FracX cx={1530} cy={380} size={52} num={num} den={den} barAt={KS.kis - 4} prefix="K =" prefixAt={KS.kis - 4} hold={260} />
				<Sx x={1330} y={540} text="= 4.0 × 10^{−4}" size={46} color={TEAL} at={KS.over + 20} />
				<Tag x={1330} y={566} w={330} text="K: no unit written" at={KS.over + 30} color={AMBER_INK} size={28} />
				<Ring cx={1530} cy={438} rx={150} ry={38} at={KS.bottom} out={KS.tiny} color={AMBER} seed={4} />
				<Sx x={1530} y={496} text="not a square" size={34} color={AMBER_INK} anchor="middle" hand at={KS.bottom + 8} out={KS.tiny} />
				{/* which shortcut: the square root does not apply, the tiny K does */}
				<ShortcutCard x={SC.x} y={SC.y} w={SC.w} h={SC.h} at={KS.bottom - 8} leftAt={KS.bottom - 8} rightAt={KS.bottom - 4} leftLit={[KS.bottom, KS.root + 10]} rightLit={[KS.tiny, KS.about + 120]} thumbs={false} size={40} />
				<rect x={SC.x + 4} y={SC.y + 4} width={half - 8} height={SC.h - 8} rx={20} fill={PAPER} opacity={0.6 * grey} />
				<Cross x={SC.x + half - 60} y={SC.y + 60} at={KS.root} s={26} />
				<Tick x={SC.x + SC.w - 60} y={SC.y + 60} at={KS.tiny + 4} s={44} />
				<Sx x={1330} y={690} text="x is tiny next to 0.500, so" size={36} color={INK_SOFT} hand at={KS.tiny + 10} />
				<Sx x={1330} y={750} text="0.500 − x ≈ 0.500" size={46} color={TEAL} at={KS.drop + 10} />
				<SlipChip x={1330} y={810} w={494} text="(2x)^{2} = 2x^{2}" at={KS.sq + 30} out={KS.bottom} note="(2x)^{2} = 4x^{2}" />
			</Overlay>
		</>
	);
};

// ---------- 2c. Solve and test the shortcut ----------
const T = 'tiny-k-solve-and-test';
const KT = cues(sc(T), {four: 'Four x squared', eight: 'eight x squared', equals: 'that equals', xsq: 'So x squared', x71: 'x is 0.0071', no2: 'N O two is two x', r014: '0.014', test: 'Test it', taken: 'the amount taken', a71: ['0.0071', 2], p14: '1.4 per cent', five: 'under about 5', holds: 'the shortcut holds'});
export const SceneTinySolveG3: React.FC = () => {
	const X = 720;
	const R = {x: 160, y: 800, w: 1600};
	return (
		<>
			<Overlay>
				<Board />
				<Sx x={X} y={380} text="4x^{2} ÷ 0.500 = 8x^{2}" size={48} at={KT.four} />
				<Sx x={X + tw('4x^{2} ÷ 0.500 = 8x^{2} ', 48)} y={380} text="= 4.0 × 10^{−4}" size={48} color={TEAL} at={KT.equals} />
				<Sx x={X} y={460} text="x^{2} = 5.0 × 10^{−5}" size={48} at={KT.xsq} />
				<Sx x={X} y={540} text="x = 0.0071 mol/L" size={48} at={KT.x71} />
				<Sx x={X} y={630} text="[NO_2] = 2x = 0.014 mol/L" size={52} color={NO2K} at={KT.no2} />
				<Ring cx={X + tw('[NO_2] = 2x = ', 52) + tw('0.014', 52) / 2} cy={614} rx={tw('0.014', 52) / 2 + 26} ry={40} at={KT.r014 + 4} color={AMBER} seed={6} />
				<Chip x={1440} y={420} w={384} text="Test it or don't use it." size={38} at={KT.test} color={TEAL} />
				{/* the test: x against the start */}
				<CheckRuler x={R.x} y={R.y} w={R.w} frac={0.0071 / 0.5} at={KT.test} sliverAt={KT.a71} side="start" sliverLabel="x = 0.0071, taken off the start" fiveAt={KT.five} fiveLabel="5%: a school rule of thumb" />
				<Sx x={R.x + R.w} y={R.y - 16} text="start: 0.500 mol/L" size={40} anchor="end" hand at={KT.test + 8} />
				<Sx x={900} y={R.y + 130} text="0.0071 ÷ 0.500 = 1.4%" size={44} color={AMBER_INK} at={KT.p14} />
				<Tick x={1430} y={R.y + 114} at={KT.holds} s={44} />
				<Sx x={1470} y={R.y + 130} text="under 5%: it holds" size={40} color={TEAL} hand at={KT.holds + 6} />
				<Tag x={96} y={990} w={900} text="exact answer 0.0140; the shortcut is about 0.7% high" at={KT.holds + 20} size={28} />
			</Overlay>
		</>
	);
};
void INK; void iceCell; void Heading;
