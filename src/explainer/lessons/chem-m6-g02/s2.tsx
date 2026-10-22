// M6 G02 scenes 3a to 4d: question 2 (chloroethanoic acid: the shortcut's check fails, so the full equation is solved,
// and the crossed mistake keeps the shortcut answer), then question 3 (benzoic acid from a measured pH: the table run
// backwards, Ka, pKa and its sense check, and the crossed mistake "pKa = pH").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {hold, sc} from './common';
import {Question2, Question3, Q2M, Q3M} from './questions';
import {G, Head, stripGeom} from './s1';
import {
	AChip, AMBER_INK, AnsPanel, Arrow, Checks, DimG, EmptyBox, EqLine, Fade, GTag, HscTag, INK, INK_SOFT, IceRows, KaFrac, MiniTrack, MistakeX, NAVY, Note, Overlay, P, PROTON_INK, PauseHold,
	PkaZoom, QGroup, Sx, TEAL, TaskLine, WLine, XRuler, eq, kaFracW, mw,
} from './parts';
import type {IceR, QMark} from './parts';

const ALL = -100;
const RED = '#c4432f', GRN = '#1f8a5b';

// ---------- 3a. Question 2 ----------
const KQ2 = cues(sc('q2-question'), {q: 'Question two', chl: 'Chloroethanoic acid is', ka: 'with a K', show: 'Show that the', then: 'Then calculate', pause: 'Pause here to answer'});
export const SceneQ2: React.FC = () => (
	<Overlay>
		<TaskLine text="Question 2" at={KQ2.q} />
		<HscTag at={KQ2.q} />
		<Question2 t={[KQ2.chl, KQ2.ka, KQ2.show, KQ2.then]} />
		<EmptyBox x={140} y={580} w={680} h={280} at={KQ2.show + 30} label="(a)" />
		<EmptyBox x={860} y={580} w={680} h={280} at={KQ2.then + 20} label="(b)" />
		<PauseHold h={hold('q2-question')} at={KQ2.pause} x={140} y={950} cx={1690} cy={720} />
		<Checks hold={hold('q2-question')} />
	</Overlay>
);

const CL_EQ = (at: number) => eq(['CH_2ClCOOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_2ClCOO^{-}(aq)'], at, at);
const q2Marks = (a: number, b: number): QMark[] => [{phrase: Q2M.ka, at: a}, {phrase: Q2M.kaV, at: a + 4}, {phrase: Q2M.kaE, at: a + 8}, {phrase: Q2M.c, at: b}];
const Q2Strip: React.FC<{marks: QMark[]; anim?: boolean}> = ({marks, anim = false}) => (
	<QGroup k={G.k} anim={anim}><Question2 t={[ALL, ALL, ALL, ALL]} marks={marks} /></QGroup>
);
const KA2_A = 'Ka = x^{2} / (0.0200', KA2_B = ' − x', KA2_C = ') = 1.4 × 10^{−3}';

// ---------- 3b. Q2: try the shortcut, and check it ----------
const KQ2b = cues(sc('q2-check-fails'), {tryit: 'Try the shortcut', xsq: 'x squared is', r28: 'two point eight', xabout: 'so x is about', r53: 'five point three', check: 'Now check', r26: 'twenty six percent', far: 'far over five', quarter: 'About a quarter', nowhere: 'nowhere near c', keep: 'Keep the x'});
export const SceneQ2Fails: React.FC = () => {
	const f = useCurrentFrame();
	const K = KQ2b;
	const items = CL_EQ(6);
	const g = stripGeom(items);
	const rows: IceR[] = [
		{cells: [{t: '0.0200', at: 10}, {t: '0', at: 12}, {t: '0', at: 14}], dim: [16, 0.25]},
		{cells: [{t: '−x', at: 12, color: RED}, {t: '+x', at: 14, color: GRN}, {t: '+x', at: 16, color: GRN}], dim: [18, 0.25]},
		{cells: [{t: '0.0200 − x', at: 18}, {t: 'x', at: 20}, {t: 'x', at: 22}], lit: [K.nowhere - 4, K.keep]},
	];
	const X = 140, Y = G.ly[0], S = 42;
	const aW = mw(KA2_A, S), bW = mw(KA2_B, S);
	const gIn = K.tryit + 34;
	const out = prog(f, gIn, 16) * (1 - prog(f, K.keep + 4, 16));
	const R = {x: 1300, y: 640, w: 500};
	return (
		<Overlay>
			<Head n={2} badge="Ka given: full equation" badgeAt={6} />
			<Q2Strip anim marks={[...q2Marks(K.xsq + 26, K.xsq + 46), {phrase: Q2M.show, at: K.r26 + 16, color: TEAL}]} />
			<DimG at={20} to={0.45}><EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} /></DimG>
			<IceRows x={G.ice.x} xR={g.xR} y={G.ice.y} rh={G.ice.rh} cols={g.cols} rows={rows} at={4} unit={{at: 8}} />
			{/* the Ka line: the − x greys and drops out for the trial, then slides back on "Keep the x" */}
			<Sx x={X} y={Y} text={KA2_A} size={S} color={INK} weight={700} at={K.tryit + 8} />
			<g transform={`translate(0,${30 * out})`} opacity={1 - 0.75 * out}><Sx x={X + aW} y={Y} text={KA2_B} size={S} color={out > 0.3 ? INK_SOFT : INK} weight={700} at={K.tryit + 8} /></g>
			<Sx x={X + aW + bW} y={Y} text={KA2_C} size={S} color={INK} weight={700} at={K.tryit + 8} />
			<GTag x={X + aW + bW + mw(KA2_C, S) + 30} y={Y} text="try: drop x" at={gIn} out={K.keep} />
			<WLine x={X} y={G.ly[1]} size={38} dim={K.keep} items={P({t: 'x^{2} ≈ 1.4 × 10^{−3} × 0.0200', color: INK_SOFT}, K.xsq + 6, {t: '= 2.8 × 10^{−5}', color: INK_SOFT}, K.r28)} />
			<WLine x={X} y={G.ly[2]} size={38} dim={K.keep} items={P({t: 'x ≈ 5.29 × 10^{−3} mol/L', color: INK_SOFT}, K.r53)} />
			{/* the check ruler: a visible chunk, far past the 5% line */}
			<XRuler x={R.x} y={R.y} w={R.w} frac={0.2645} at={K.check} sliverAt={K.r26} grow={K.r26} five={K.check + 10} fiveLabel="5%" over={K.r26 + 24} size={28} />
			<Sx x={R.x + R.w} y={R.y - 18} text="c = 0.0200 mol/L" size={28} color={INK} anchor="end" weight={700} at={K.check + 4} />
			<Sx x={R.x} y={R.y + 84} text="5.29 × 10^{−3} ÷ 0.0200 × 100%" size={30} color={PROTON_INK} weight={700} at={K.r26} />
			<Sx x={R.x} y={R.y + 126} text="= 26% > 5% ✗" size={34} color={AMBER_INK} weight={800} at={K.r26 + 6} />
			<AnsPanel x={G.right} y={820} w={584} h={150} rows={[{t: 'x ÷ c ≈ 26%, over 5%,', at: K.far, label: '(a)', size: 28}, {t: 'so [HA] ≈ c is not valid', at: K.far + 14, size: 28}]} lh={42} />
			<Checks ticks={{0: [K.xsq + 50], 1: [K.far + 10]}} />
			{void K.quarter}
		</Overlay>
	);
};

// ---------- 3c. Q2: solve the full equation ----------
const KQ2c = cues(sc('q2-full'), {so: 'So K a equals', mult: 'Multiply both sides', sqplus: 'squared, plus', zero: 'equals zero', quad: 'The quadratic formula', pos: 'positive root', r46: 'four point six', ph: 'So the pH', r233: 'two point three three'});
const Q2A = (dimAll?: number, b?: [number, number]) => [
	{t: 'x ÷ c ≈ 26%: not valid', at: ALL, label: '(a)', size: 28, dim: 0},
	{t: 'pH = −log(4.64 × 10^{−3})', at: b ? b[0] : ALL, label: '(b)', size: 28},
	{t: '= 2.33', at: b ? b[1] : ALL, color: TEAL, size: 36},
].map(r => ({...r, dim: r.dim ?? dimAll}));
export const SceneQ2Full: React.FC = () => {
	const K = KQ2c;
	const items = CL_EQ(ALL);
	const g = stripGeom(items);
	const X = 140;
	return (
		<Overlay>
			<Head n={2} badge="Ka given: full equation" />
			<Q2Strip marks={[...q2Marks(ALL, ALL), {phrase: Q2M.show, at: ALL, color: TEAL}, {phrase: Q2M.calc, at: K.ph, color: TEAL}]} />
			<DimG at={ALL} to={0.3}><EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} /></DimG>
			<AChip x={G.right + 40} y={410} text="check: 26% > 5% ✗" size={30} color={AMBER_INK} at={ALL} />
			<WLine x={X} y={510} size={40} dim={K.mult} items={P('Ka = x^{2} / (0.0200 − x) = 1.4 × 10^{−3}', K.so)} />
			<WLine x={X} y={590} size={40} dim={K.sqplus} items={P('x^{2} = 1.4 × 10^{−3} (0.0200 − x)', K.mult + 24)} />
			<WLine x={X} y={670} size={40} dim={K.pos} items={P('x^{2} + 1.4 × 10^{−3} x − 2.8 × 10^{−5}', K.sqplus, {t: '= 0', color: TEAL}, K.zero)} />
			<WLine x={X} y={750} size={30} dim={K.ph} items={P('x = [−1.4 × 10^{−3} + √((1.4 × 10^{−3})^{2} + 4 × 2.8 × 10^{−5})] ÷ 2', K.quad + 10)} />
			<WLine x={X} y={830} size={40} items={P('= 4.64 × 10^{−3}', K.pos, {t: '→ 4.6 × 10^{−3} mol/L', color: TEAL}, K.r46)} />
			<GTag x={X + 820} y={830} text="the negative root is not a concentration" at={K.pos + 12} out={K.ph} size={26} />
			<WLine x={X} y={905} size={30} items={P({t: 'check: (4.64 × 10^{−3})^{2} ÷ (0.0200 − 0.00464) = 1.4 × 10^{−3} ✓', color: PROTON_INK}, K.r46 + 40)} />
			<AnsPanel x={G.right} y={600} w={584} h={250} rows={Q2A(undefined, [K.ph + 4, K.r233])} lh={52} />
			<Checks ticks={{0: [ALL], 1: [ALL], 2: [K.r46 + 60]}} />
		</Overlay>
	);
};

// ---------- 3d. Q2: the classic mistake ----------
const KQ2d = cues(sc('q2-mistake'), {classic: 'The classic mistake', keeping: 'keeping the shortcut', r228: 'two point two', z005: 'about zero point', once: 'Once the check'});
export const SceneQ2Mistake: React.FC = () => {
	const K = KQ2d;
	return (
		<Overlay>
			<Head n={2} badge="Ka given: full equation" />
			<Q2Strip marks={[...q2Marks(ALL, ALL), {phrase: Q2M.show, at: ALL, color: TEAL}, {phrase: Q2M.calc, at: ALL, color: TEAL}]} />
			<AnsPanel x={G.right} y={600} w={584} h={250} rows={Q2A()} lh={52} />
			<MistakeX x={140} y={520} text="check failed, but pH = −log(5.29 × 10^{−3}) = 2.28 kept" at={K.classic + 2} cross={K.keeping + 10} note="failed check: solve the full equation" size={34} />
			<MiniTrack x0={240} x1={1080} y={850} at={K.z005} a={2.28} b={2.33} lo={2.2} hi={2.4} text="about 0.05 out" />
			<Checks ticks={{0: [ALL], 1: [ALL], 2: [ALL]}} />
			{void K.r228}{void K.once}
		</Overlay>
	);
};

// ---------- 4a. Question 3 ----------
const KQ3 = cues(sc('q3-question'), {q: 'Question three', benz: 'Benzoic acid is', sol: 'A zero point', calc: 'Calculate K a', pause: 'Pause here to answer'});
export const SceneQ3: React.FC = () => (
	<Overlay>
		<TaskLine text="Question 3" at={KQ3.q} />
		<HscTag at={KQ3.q} />
		<Question3 t={[KQ3.benz, KQ3.sol, KQ3.calc]} />
		<EmptyBox x={140} y={580} w={1300} h={280} at={KQ3.calc + 24} />
		<PauseHold h={hold('q3-question')} at={KQ3.pause} x={140} y={950} cx={1690} cy={720} />
		<Checks hold={hold('q3-question')} />
	</Overlay>
);

const BZ_EQ = (at: number) => eq(['C_6H_5COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'C_6H_5COO^{-}(aq)'], at, at);
const H = '9.33 × 10^{−4}';
const Q3Strip: React.FC<{marks: QMark[]; anim?: boolean; readPulse?: number; labelPulse?: number}> = ({marks, anim = false, readPulse, labelPulse}) => (
	<QGroup k={G.k} anim={anim}><Question3 t={[ALL, ALL, ALL]} marks={marks} readPulse={readPulse} labelPulse={labelPulse} /></QGroup>
);
/** The backwards table once filled (scenes 4c and 4d). */
const Board3: React.FC<{dimAt?: number; to?: number}> = ({dimAt = 8, to = 0.4}) => {
	const items = BZ_EQ(ALL);
	const g = stripGeom(items);
	const rows: IceR[] = [
		{cells: [{t: '0.0150', at: ALL}, {t: '0', at: ALL}, {t: '0', at: ALL}], dim: [ALL, 0.35]},
		{cells: [{t: '−' + H, at: ALL, color: RED, size: 28}, {t: '+' + H, at: ALL, color: GRN, size: 28}, {t: '+' + H, at: ALL, color: GRN, size: 28}], dim: [ALL, 0.35]},
		{cells: [{t: '0.0141', at: ALL, size: 34}, {t: H, at: ALL, size: 32}, {t: H, at: ALL, size: 32}]},
	];
	return (
		<DimG at={dimAt} to={to}>
			<EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} />
			<IceRows x={G.ice.x} xR={g.xR} y={G.ice.y} rh={G.ice.rh} cols={g.cols} rows={rows} at={ALL} unit={{at: ALL}} />
		</DimG>
	);
};

// ---------- 4b. Q3: run the table backwards ----------
const KQ3b = cues(sc('q3-backwards'), {given: 'pH is given', back: 'work backwards', hyd: 'The hydronium is', r933: 'nine point three three', each: 'Each ionised molecule', same: 'benzoate is the same', left: 'The acid left', r0141: 'zero point zero one four'});
export const SceneQ3Back: React.FC = () => {
	const K = KQ3b;
	const items = BZ_EQ(6);
	const g = stripGeom(items);
	const I = G.ice;
	const rows: IceR[] = [
		{cells: [{t: '0.0150', at: K.back + 12}, {t: '0', at: K.back + 16}, {t: '0', at: K.back + 20}], dim: [K.back + 40, 0.35]},
		{cells: [{t: '−' + H, at: K.each + 30, color: RED, size: 28}, {t: '+' + H, at: K.each + 20, color: GRN, size: 28}, {t: '+' + H, at: K.each + 24, color: GRN, size: 28}], dim: [K.left, 0.35]},
		{cells: [{t: '0.0150 − 0.000933', at: K.left + 10, size: 30, swap: {t: '0.0141', at: K.r0141 + 10}}, {t: H, at: K.r933 + 20, size: 32}, {t: H, at: K.same + 6, size: 32}], lit: [K.r933 + 10, 820]},
	];
	const yE = I.y + 2.5 * I.rh, yC = I.y + 1.5 * I.rh;
	return (
		<Overlay>
			<Head n={3} badge="pH given: backwards" badgeAt={6} />
			<Q3Strip anim readPulse={K.back} marks={[{phrase: Q3M.ph, at: K.back}, {phrase: Q3M.c, at: K.left + 30}]} />
			<DimG at={K.back + 40} to={0.45}><EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} /></DimG>
			<IceRows x={I.x} xR={g.xR} y={I.y} rh={I.rh} cols={g.cols} rows={rows} at={K.back} unit={{at: K.back + 10}} />
			<Fade at={K.each} out={K.left}>
				{[1, 2].map(j => <Arrow key={j} x1={g.cols[j] + 140} y1={yE - 14} x2={g.cols[j] + 140} y2={yC + 10} at={K.each} color={TEAL} width={4} />)}
				<Note x={g.cols[2] + 170} y={(yE + yC) / 2 + 6} text="work backwards" size={30} color={TEAL} at={-1000} />
			</Fade>
			<WLine x={140} y={G.ly[0]} size={42} dim={K.same} items={P('[H_3O^{+}] = 10^{−3.03}', K.hyd + 4, {t: '= 9.33 × 10^{−4} mol/L', color: TEAL}, K.r933)} />
			<GTag x={140} y={G.ly[1]} text="keep the digits; round at the end" at={K.r933 + 30} out={K.each + 20} />
			<WLine x={140} y={G.ly[1]} size={42} dim={K.left} items={P('[C_6H_5COO^{-}] = [H_3O^{+}]', K.same)} />
			<WLine x={140} y={G.ly[2]} size={42} items={P('[C_6H_5COOH] = 0.0150 − 0.000933', K.left + 10, {t: '= 0.0141 mol/L', color: TEAL}, K.r0141)} />
			<GTag x={G.right} y={G.ly[1]} text="[H_3O^{+}] is measured: no 5% check" at={K.r0141 + 20} out={800} />
			<Checks ticks={{0: [K.back + 20]}} />
			{void K.given}
		</Overlay>
	);
};

// ---------- 4c. Q3: Ka, then pKa ----------
const KQ3c = cues(sc('q3-ka'), {so: 'So K a is', hyd: 'hydronium times benzoate', over: 'over the acid', sub: 'nine point three three', sq: 'squared, over', r62: 'six point two', two: 'two significant figures', then: 'Then p K', r421: 'four point two one'});
const NUM = '[H_3O^{+}][C_6H_5COO^{-}]', DEN = '[C_6H_5COOH]';
const Q3A = (ka: number, pka: number, pulse?: number) => [
	{t: 'Ka = 6.2 × 10^{−5}', at: ka, color: TEAL, size: 32},
	{t: 'pKa = 4.21', at: pka, color: NAVY, size: 32, pulse},
];
const ZM = (at: number) => [
	{p: 3.74, name: 'methanoic 3.74', at},
	{p: 4.74, name: 'ethanoic 4.74', at: at + 4},
	{p: 4.21, name: 'benzoic 4.21', at: at + 12, color: NAVY, above: false},
];
export const SceneQ3Ka: React.FC = () => {
	const K = KQ3c;
	const S = 38;
	const fw = kaFracW('Ka =', NUM, DEN, S);
	return (
		<Overlay>
			<Head n={3} badge="pH given: backwards" />
			<Q3Strip marks={[{phrase: Q3M.ph, at: ALL}, {phrase: Q3M.c, at: ALL}]} />
			<Board3 />
			<DimG at={K.then} to={0.32}>
				<KaFrac x={140} y={740} prefix="Ka =" num={NUM} den={DEN} size={S} at={K.so + 8} numAt={K.hyd} denAt={K.over} />
				<WLine x={140 + fw + 24} y={752} size={40} items={P('= (9.33 × 10^{−4})^{2} / 0.0141', K.sub)} />
				<WLine x={140} y={850} size={40} items={P({t: '= 6.17 × 10^{−5} → 6.2 × 10^{−5}', color: TEAL}, K.r62)} />
			</DimG>
			<GTag x={820} y={850} text="pH: 2 d.p. → Ka: 2 s.f." at={K.two} out={K.then} />
			<WLine x={140} y={935} size={40} items={P('pKa = −log(6.17 × 10^{−5})', K.then + 6, {t: '= 4.21', color: NAVY}, K.r421)} />
			<AnsPanel x={1300} y={470} w={524} h={160} rows={Q3A(K.r62 + 20, K.r421 + 16)} lh={48} />
			<PkaZoom x0={1360} x1={1790} y={900} at={K.r421 + 24} marks={ZM(K.r421 + 30)} />
			<Note x={1575} y={820} text="between methanoic and ethanoic acid ✓" size={26} color={TEAL} anchor="middle" at={K.r421 + 50} />
			<Checks ticks={{0: [ALL], 2: [K.r421 + 50]}} />
			{void K.sq}
		</Overlay>
	);
};

// ---------- 4d. Q3: the classic mistake ----------
const KQ3d = cues(sc('q3-mistake'), {classic: 'The classic mistake', writing: 'is writing the', same: 'the same as', desc: 'The pH describes', conc: 'this concentration', acid: 'describes the acid'});
export const SceneQ3Mistake: React.FC = () => {
	const K = KQ3d;
	return (
		<Overlay>
			<Head n={3} badge="pH given: backwards" />
			<Q3Strip labelPulse={K.conc} marks={[{phrase: Q3M.ph, at: ALL}, {phrase: Q3M.c, at: ALL}]} />
			<Board3 dimAt={ALL} to={0.25} />
			<AnsPanel x={1300} y={470} w={524} h={160} rows={Q3A(ALL, ALL, K.acid + 6)} lh={48} />
			<PkaZoom x0={1360} x1={1790} y={900} at={ALL} marks={ZM(ALL)} o={0.5} />
			<MistakeX x={140} y={720} text="pKa = pH = 3.03" at={K.classic + 2} cross={K.writing + 10} note="pH: this solution; pKa: the acid" size={40} />
			<Checks ticks={{0: [ALL], 2: [ALL]}} />
			{void K.same}{void K.desc}{void Sx}
		</Overlay>
	);
};
