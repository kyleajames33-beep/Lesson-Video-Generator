import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick} from '../chem-m5-c06/parts';
import type {Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {CheckRuler} from '../chem-m5-c06b/parts';
import {MINUS, O2K, PLUS, SO2K, SO3K, sc} from './common';
import {HscTag, SlipChip, Task} from '../chem-m5-g03a/board';
import {SO3_EQ, soCols} from '../chem-m5-g03a/s2';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
const HT = {x: 640, y: 330, s: 0.72};
const TASK = 'Find [O_2] at equilibrium.';
const Board: React.FC<{a?: {task: number; eq: number; k: number; s: number; n: number}}> = ({a}) => {
	const z = a ?? {task: -100, eq: -100, k: -100, s: -100, n: -100};
	return (
		<>
			<Task text={TASK} at={z.task} />
			<HscTag at={z.task} />
			<EqStrip items={SO3_EQ} x={96} y={250} size={46} at={z.eq} />
			<GivensCard x={96} y={330} w={510} h={246} at={Math.min(z.k, z.s) - 8} lh={56} lines={[
				{text: 'K = 4.0 × 10^{10}', at: z.k, color: TEAL, size: 36},
				{text: 'start: [SO_3] = 0.400 mol/L', at: z.s, color: SO3K, size: 33},
				{text: 'no SO_2, no O_2', at: z.n, color: INK_SOFT, size: 33},
			]} />
		</>
	);
};

// ---------- 3a. Huge K: the mirror image ----------
const A = 'huge-k-setup';
const KA = cues(sc(A), {huge: 'A huge K', mirror: 'mirror image', start: 'Start with sulfur', s400: '0.400 moles', kfor: 'K for sulfur', k10: '4.0 times ten to the ten', almost: 'Almost nothing splits', oxy: 'let the oxygen be x', so2: 'Sulfur dioxide is two x', about: 'about 0.400'});
/** Tiny K and huge K as mirror images on a power-of-ten line. */
const Mirror: React.FC<{at: number; hugeAt: number}> = ({at, hugeAt}) => {
	const f = useCurrentFrame();
	const L = {x0: 1380, x1: 1800, y: 470};
	const xOf = (e: number) => L.x0 + ((e + 10) / 20) * (L.x1 - L.x0);
	const pin = (e: number, col: string, a: number, label: string, ghost = false) => (
		<g opacity={prog(f, a, 12) * (ghost ? 0.55 : 1)}>
			<path d={`M${xOf(e)},${L.y - 6} l-14,-26 q14,-12 28,0 z`} fill={ghost ? '#fffdf8' : col} stroke={col} strokeWidth={3} />
			<Sx x={xOf(e)} y={L.y - 46} text={label} size={30} color={col} anchor="middle" at={a} />
		</g>
	);
	return (
		<Fade at={at}>
			<DrawPath d={`M${L.x0},${L.y} L${L.x1},${L.y}`} at={at} dur={16} width={5} />
			<DrawPath d={`M${xOf(0)},${L.y - 70} L${xOf(0)},${L.y + 40}`} at={at + 8} dur={12} color={INK_SOFT} width={3} dash="7 6" />
			<Sx x={xOf(0)} y={L.y + 72} text="1" size={30} color={INK_SOFT} anchor="middle" at={at + 8} />
			{pin(-4, INK_SOFT, at + 10, 'tiny K', true)}
			{pin(10, TEAL, hugeAt, 'huge K')}
			<Sx x={L.x0 - 10} y={L.y + 72} text="mostly reactants" size={26} color={INK_SOFT} hand at={at + 14} />
			<Sx x={L.x1} y={L.y + 72} text="mostly products" size={26} color={TEAL} anchor="end" hand at={hugeAt + 6} />
		</Fade>
	);
};
export const SceneHugeSetup: React.FC = () => {
	const [ox, oy] = iceCell(HT.x, HT.y, HT.s, 1, 1);
	return (
		<Overlay>
			<Board a={{task: 6, eq: KA.kfor, k: KA.k10, s: KA.s400, n: KA.s400 + 20}} />
			<Tag x={720} y={204} w={640} text="a different temperature from other SO_3 questions" at={KA.k10 + 12} size={28} color={AMBER_INK} />
			<Mirror at={KA.huge} hugeAt={KA.mirror} />
			<Sx x={1380} y={630} text="almost nothing splits back" size={34} color={AMBER_INK} hand at={KA.almost} />
			<IceTable x={HT.x} y={HT.y} s={HT.s} outlineAt={KA.start - 16} cols={soCols(KA.start - 8)} rows={ice(
				{at: KA.start, cells: [{text: '0', at: KA.s400 + 10, color: INK_SOFT}, {text: '0', at: KA.s400 + 14, color: INK_SOFT}, {text: '0.400', at: KA.s400, color: SO3K}]},
				{at: KA.start + 4, cells: [{text: '+2x', at: KA.so2, color: PLUS}, {text: '+x', at: KA.oxy + 8, color: PLUS}, {text: '−2x', at: KA.so2 + 12, color: MINUS}]},
				{at: KA.start + 8, lit: [KA.about, KA.about + 80], cells: [{text: '2x', at: KA.so2 + 18, color: SO2K}, {text: 'x', at: KA.oxy + 14, color: O2K}, {text: '0.400 − 2x', at: KA.so2 + 24, color: SO3K, size: 38, swap: {text: '≈ 0.400', at: KA.about + 8, color: SO3K}}]},
			)} />
			<Ring cx={ox} cy={oy + 36} rx={80} ry={110} at={KA.oxy} out={KA.so2 + 30} color={AMBER} seed={4} />
			<Sx x={HT.x} y={HT.y + 330} text="x = O_2 formed, mol/L" size={34} color={AMBER_INK} hand at={KA.oxy + 6} />
			<Tag x={HT.x} y={HT.y + 360} w={660} text="K is very large; test how little SO_3 splits" at={KA.about + 20} size={28} />
		</Overlay>
	);
};

// ---------- 3b. Solve for x ----------
const B = 'huge-k-solve';
const KB = cues(sc(B), {ink: 'In K', sq: '0.400 squared', r160: 'is 0.160', four: 'four x cubed', r040: '0.040 over', xc: 'So x cubed', m12: 'minus twelve', xis: 'and x is', m4: 'minus four'});
export const SceneHugeSolve: React.FC = () => {
	const num: Term[][] = [[{t: '0.400', p: '2', br: false, at: KB.ink + 6, out: KB.r160 + 4, color: SO3K}], [{t: '0.160', br: false, at: KB.r160 + 4, color: SO3K}]];
	const den: Term[][] = [[{t: '(2x)', p: '2', br: false, at: KB.ink + 12, out: KB.four, color: SO2K}, {t: '× x', br: false, at: KB.ink + 16, out: KB.four, color: O2K}], [{t: '4x', p: '3', br: false, at: KB.four + 2, color: INK}]];
	const X = 720;
	return (
		<Overlay>
			<Board />
			<Fade at={-100}>
				<rect x={96} y={610} width={510} height={140} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				<Sx x={120} y={660} text="equilibrium row" size={32} color={INK_SOFT} hand at={-100} />
				<Sx x={120} y={718} text="SO_2: 2x   O_2: x   SO_3: ≈ 0.400" size={30} at={-100} />
			</Fade>
			<FracX cx={1000} cy={380} size={50} num={num} den={den} barAt={KB.ink} prefix="K =" prefixAt={KB.ink} hold={260} />
			<Sx x={1160} y={398} text="= 4.0 × 10^{10}" size={48} color={TEAL} at={KB.ink + 20} />
			<Sx x={1160} y={300} text="0.400^{2} = 0.160" size={34} color={INK_SOFT} hand at={KB.r160} out={KB.xc} />
			<Sx x={1160} y={470} text="(2x)^{2} × x = 4x^{3}" size={34} color={INK_SOFT} hand at={KB.four} out={KB.xc} />
			<Sx x={X} y={580} text="0.040 ÷ x^{3} = 4.0 × 10^{10}" size={46} at={KB.r040} />
			<Sx x={X} y={660} text="x^{3} = 0.040 ÷ (4.0 × 10^{10}) = 1.0 × 10^{−12}" size={40} at={KB.xc} />
			<Sx x={X} y={750} text="x = 1.0 × 10^{−4} mol/L" size={54} color={O2K} at={KB.xis} />
			<Ring cx={X + 290} cy={732} rx={320} ry={46} at={KB.m4 + 10} color={AMBER} seed={7} />
			<Tag x={X} y={800} w={330} text="K: no unit written" at={KB.ink + 30} color={AMBER_INK} size={28} />
			<SlipChip x={1300} y={820} w={520} text="(2x)^{2} = 2x^{2}" at={KB.four + 20} out={KB.m4 + 30} note="(2x)^{2} = 4x^{2}" />
			{/* Revision 2 pen tag (owner rule): how the x^3 line was rearranged */}
			<Tag x={96} y={790} w={600} text="multiply both sides by the bottom, then divide" at={KB.xc + 12} size={28} color={AMBER_INK} />
			<Arrow x1={600} y1={786} x2={708} y2={656} at={KB.xc + 18} color={AMBER_INK} width={4} dur={12} />
		</Overlay>
	);
};

// ---------- 3c. Test it, and the reactant start ----------
const C = 'huge-k-test-and-reactant-start';
const KC = cues(sc(C), {test: 'Test it', two: 'two x', v: '0.00020', tinyp: 'a tiny part', other: 'the other way round', started: 'started with just', ratio: 'in the ratio', huge: 'K was huge', products: 'turn to products', back: 'take a small x', excess: 'An excess'});
export const SceneHugeTest: React.FC = () => {
	const f = useCurrentFrame();
	const R = {x: 720, y: 420, w: 1000};
	const Y0 = 800;
	const grow = prog(f, KC.products, 30);
	return (
		<Overlay>
			<Board />
			<CheckRuler x={R.x} y={R.y} w={R.w} frac={0.0005} at={KC.test} sliverAt={KC.v} side="start" sliverLabel="2x = 0.00020, the amount taken off the start" fiveAt={KC.tinyp + 8} fiveLabel="5%" labelSize={34} />
			<Sx x={R.x + R.w} y={R.y - 16} text="start: 0.400 mol/L" size={36} anchor="end" hand at={KC.test + 6} />
			<Sx x={R.x} y={R.y + 150} text="0.00020 ÷ 0.400 = 0.05%" size={40} color={AMBER_INK} at={KC.tinyp} />
			<Tick x={R.x + 560} y={R.y + 134} at={KC.tinyp + 12} s={40} />
			<Sx x={96} y={660} text="[O_2] = 1.0 × 10^{−4} mol/L,  [SO_2] = 2.0 × 10^{−4} mol/L" size={36} color={TEAL} at={KC.tinyp + 20} />
			{/* the other way round: start from reactants in the equation's ratio */}
			<Sx x={96} y={746} text="Now the other way round:" size={46} hand at={KC.other} />
			<Fade at={KC.started}>
				<rect x={96} y={Y0} width={320} height={44} rx={10} fill={SO2K} opacity={0.85} stroke={INK} strokeWidth={2.5} />
				<Sx x={110} y={Y0 + 32} text="SO_2" size={30} color="#fffdf8" at={KC.started} />
				<rect x={96} y={Y0 + 56} width={160} height={44} rx={10} fill={O2K} opacity={0.85} stroke={INK} strokeWidth={2.5} />
				<Sx x={110} y={Y0 + 88} text="O_2" size={30} color="#fffdf8" at={KC.started} />
				<Sx x={96} y={Y0 + 150} text="reactants, in the ratio 2 : 1" size={32} color={INK_SOFT} hand at={KC.ratio} />
			</Fade>
			<Arrow x1={460} y1={Y0 + 50} x2={600} y2={Y0 + 50} at={KC.huge} color={TEAL} width={6} />
			<Sx x={530} y={Y0 + 20} text="huge K" size={30} color={TEAL} anchor="middle" hand at={KC.huge} />
			<Fade at={KC.products - 4}>
				<rect x={630} y={Y0 + 20} width={480 * grow} height={60} rx={12} fill={SO3K} opacity={0.85} stroke={INK} strokeWidth={2.5} />
				<Sx x={646} y={Y0 + 62} text="SO_3: nearly all products" size={32} color="#fffdf8" at={KC.products + 10} />
			</Fade>
			<Fade at={KC.back}>
				<rect x={1124} y={Y0 + 20} width={26} height={60} rx={6} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 4" />
				<Arrow x1={1150} y1={Y0 + 110} x2={1124} y2={Y0 + 86} at={KC.back} color={AMBER_INK} width={4} dur={10} />
				<Sx x={1170} y={Y0 + 132} text="then take a small x back" size={34} color={AMBER_INK} hand at={KC.back + 6} />
			</Fade>
			<Fade at={KC.excess}>
				<rect x={1180} y={Y0 + 20} width={90} height={44} rx={10} fill={O2K} opacity={0.6} stroke={INK} strokeWidth={2.5} strokeDasharray="7 5" />
				<Sx x={1290} y={Y0 + 52} text="an excess reactant stays" size={32} color={O2K} hand at={KC.excess + 6} />
			</Fade>
			<Tag x={96} y={990} w={1500} text="huge K from reactants in the equation's ratio: go to products first, then take x back; an excess reactant stays" at={KC.excess + 30} size={26} />
		</Overlay>
	);
};
void INK;
