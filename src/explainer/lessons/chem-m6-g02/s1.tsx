// M6 G02 scenes 1 to 2d: the hook (the data choose the method; the three checks; four HSC-style questions), then
// question 1 (hypochlorous acid, Ka and c given): the worded question and its countdown, the ICE table and the
// shortcut, the 5% check and the pH, and the crossed classic mistake (the forgotten square root).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {PHMETER} from './assets';
import {Question1, Q1M} from './questions';
import {
	AMBER, AMBER_INK, AnsPanel, Arrow, BASE, BASE_INK, Checks, DimG, EmptyBox, EqLine, FArrow, Fade, FullMeter, GTag, HscTag, INK, INK_SOFT, IceRows, KeptChip, MistakeX, Note, Overlay, P, PHTrack,
	PROTON, PROTON_INK, PauseHold, QGroup, SmallCross, Sx, TEAL, TaskLine, TypeBadge, WLine, XRuler, eSpan, eq, fitSize, mw, smooth,
} from './parts';
import type {EItem, IceR, QMark} from './parts';

// ---------- shared walkthrough geometry ----------
export const G = {strip: {x: 230, y: 420, maxW: 1000}, ice: {x: 96, y: 470, rh: 68}, ly: [740, 820, 900], ls: 40, right: 1240, k: 0.55};
export const stripGeom = (items: EItem[]) => {
	const s = Math.min(40, fitSize(items, G.strip.maxW, 40));
	const cols = [0, 4, 6].map(i => eSpan(items, i, s, G.strip.x).cx);
	const end = eSpan(items, items.length - 1, s, G.strip.x).x2;
	return {s, cols, xR: end + 24};
};
/** The walkthrough header: the task line, the HSC tag and the type badge (badge from `badgeAt`). */
export const Head: React.FC<{n: number; badge: string; badgeAt?: number}> = ({n, badge, badgeAt = -100}) => (
	<>
		<TaskLine text={`Question ${n}`} at={-100} />
		<HscTag at={-100} />
		<TypeBadge text={badge} at={badgeAt} />
	</>
);
const ALL = -100;

// ---------- 1. Hook ----------
const K0 = cues(sc('hook'), {data: 'the data choose', kac: 'A K a and', est: 'Estimate x', check: 'check it was', meas: 'A measured pH', back: 'backwards to K', ion: 'An ion that', compare: 'Compare its K', four: 'four HSC-style', pause: 'Pause and try'});
const CL = ['what data?', 'is x small?', 'does it make sense?'];
const CardSlot: React.FC<{x: number; y: number; at: number; out?: number; children?: React.ReactNode; dashed?: boolean}> = ({x, y, at, out, children, dashed = false}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={360} height={220} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} strokeDasharray={dashed ? '9 7' : undefined} />
		{children}
	</Fade>
);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, K0.pause, 22));
	const listO = 1 - shrink;
	const rows = [K0.kac + 14, K0.check, K0.compare + 16];
	const slots: [number, number][] = [[1040, 250], [1440, 250], [1040, 520], [1440, 520]];
	const subs = ['Ka and c', 'Ka and c', 'a measured pH', 'two ions'];
	return (
		<>
			<Heading text="Weak acids: which method fits the data?" at={4} size={56} />
			<Overlay>
				{/* the three checks, built as the chips land, then shrunk into the bottom strip */}
				<g opacity={listO} transform={`translate(140,${360 + shrink * 600}) scale(${1 - 0.5 * shrink}) translate(-140,-360)`}>
					<Sx x={140} y={320} text="every question:" size={36} color={INK_SOFT} hand at={rows[0] - 6} />
					{CL.map((t, i) => (
						<Fade key={t} at={rows[i]}>
							<rect x={140} y={360 + i * 120} width={70} height={70} rx={14} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
							<Sx x={240} y={410 + i * 120} text={t} size={48} color={INK} hand at={rows[i]} />
						</Fade>
					))}
				</g>
				<Checks at={K0.pause + 12} />
				{/* chip 1: Ka and c, then the check ruler */}
				<CardSlot x={slots[0][0]} y={slots[0][1]} at={K0.kac} out={K0.four}>
					<Sx x={slots[0][0] + 30} y={slots[0][1] + 70} text="Ka = ..., c = ..." size={40} color={TEAL} weight={700} at={K0.kac} />
					<XRuler x={slots[0][0] + 30} y={slots[0][1] + 140} w={300} frac={0.02} at={K0.check - 6} sliverAt={K0.check} five={K0.check + 6} fiveLabel="5%" size={24} />
				</CardSlot>
				{/* chip 2: a measured pH, worked backwards */}
				<CardSlot x={slots[1][0]} y={slots[1][1]} at={K0.meas} out={K0.four}>
					<FullMeter x={slots[1][0] + 30} y={slots[1][1] + 26} h={170} at={K0.meas} read={() => '?.??'} pulse={K0.meas + 6} />
					<Arrow x1={slots[1][0] + 340} y1={slots[1][1] + 196} x2={slots[1][0] + 230} y2={slots[1][1] + 196} at={K0.back} color={TEAL} width={5} />
					<Sx x={slots[1][0] + 330} y={slots[1][1] + 170} text="back to Ka" size={26} color={TEAL} anchor="end" hand at={K0.back + 6} />
				</CardSlot>
				{/* chip 3: an ion that can go either way */}
				<CardSlot x={slots[2][0]} y={slots[2][1]} at={K0.ion} out={K0.four}>
					<Sx x={slots[2][0] + 180} y={slots[2][1] + 128} text="HCO_3^{-}" size={48} color={INK} anchor="middle" weight={800} at={K0.ion} />
					<FArrow x1={slots[2][0] + 260} x2={slots[2][0] + 340} y={slots[2][1] + 112} at={K0.compare} color={PROTON} />
					<FArrow x1={slots[2][0] + 100} x2={slots[2][0] + 20} y={slots[2][1] + 112} at={K0.compare + 4} color={BASE} />
					<Sx x={slots[2][0] + 300} y={slots[2][1] + 176} text="Ka" size={32} color={PROTON_INK} anchor="middle" weight={800} at={K0.compare + 10} />
					<Sx x={slots[2][0] + 60} y={slots[2][1] + 176} text="Kb" size={32} color={BASE_INK} anchor="middle" weight={800} at={K0.compare + 14} />
				</CardSlot>
				{/* four question cards */}
				{slots.map(([x, y], i) => (
					<CardSlot key={i} x={x} y={y} at={K0.four + i * 5}>
						<Sx x={x + 30} y={y + 70} text={`Question ${i + 1}`} size={46} color={INK} hand at={-1000} />
						<Sx x={x + 30} y={y + 130} text={subs[i]} size={32} color={INK_SOFT} hand at={-1000} />
						{[0, 1].map(k => <path key={k} d={`M${x + 30},${y + 166 + k * 24} L${x + 300 - k * 70},${y + 166 + k * 24}`} stroke="rgba(60,45,20,0.16)" strokeWidth={5} strokeLinecap="round" />)}
					</CardSlot>
				))}
				<Sx x={1420} y={810} text="HSC-style questions, written for HSCScience" size={30} color={INK_SOFT} anchor="middle" hand at={K0.four + 24} />
				{void K0.data}{void K0.est}{void PHMETER}
			</Overlay>
		</>
	);
};

// ---------- 2a. Question 1 ----------
const KQ1 = cues(sc('q1-question'), {q: 'Question one', hyp: 'Hypochlorous acid is', calc: 'Calculate the pH', given: 'given that K', just: 'Justify any', pause: 'Pause here to answer'});
export const SceneQ1: React.FC = () => (
	<Overlay>
		<TaskLine text="Question 1" at={KQ1.q} />
		<HscTag at={KQ1.q} />
		<Question1 t={[KQ1.hyp, KQ1.calc, KQ1.given, KQ1.just]} />
		<EmptyBox x={140} y={560} w={1300} h={300} at={KQ1.just + 24} />
		<PauseHold h={hold('q1-question')} at={KQ1.pause} x={140} y={950} cx={1660} cy={700} />
		<Checks hold={hold('q1-question')} />
	</Overlay>
);

// ---------- Q1 walkthrough board ----------
export const HOCL_EQ = (at: number) => eq(['HOCl(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'OCl^{-}(aq)'], at, at);
const RED = '#c4432f', GRN = '#1f8a5b';
const q1Marks = (a: number, b: number): QMark[] => [{phrase: Q1M.ka, at: a}, {phrase: Q1M.kaV, at: a + 4}, {phrase: Q1M.kaE, at: a + 8}, {phrase: Q1M.c, at: b}];
const Q1Strip: React.FC<{marks: QMark[]; anim?: boolean}> = ({marks, anim = false}) => (
	<QGroup k={G.k} anim={anim}><Question1 t={[ALL, ALL, ALL, ALL]} marks={marks} /></QGroup>
);
/** The equation strip and the filled ICE table (scenes 2c and 2d), dimmed. */
const Board1: React.FC<{dimAt?: number; to?: number}> = ({dimAt = 8, to = 0.35}) => {
	const items = HOCL_EQ(ALL);
	const g = stripGeom(items);
	const rows: IceR[] = [
		{cells: [{t: '0.0500', at: ALL}, {t: '0', at: ALL}, {t: '0', at: ALL}], dim: [ALL]},
		{cells: [{t: '−x', at: ALL, color: RED}, {t: '+x', at: ALL, color: GRN}, {t: '+x', at: ALL, color: GRN}], dim: [ALL]},
		{cells: [{t: '≈ 0.0500', at: ALL, color: TEAL}, {t: 'x', at: ALL}, {t: 'x', at: ALL}]},
	];
	return (
		<DimG at={dimAt} to={to}>
			<EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} />
			<IceRows x={G.ice.x} xR={g.xR} y={G.ice.y} rh={G.ice.rh} cols={g.cols} rows={rows} at={ALL} unit={{at: ALL}} />
		</DimG>
	);
};

// ---------- 2b. Q1: the ICE table and the shortcut ----------
const KQ1b = cues(sc('q1-estimate'), {kac: 'K a and a', ice: 'set up the ICE', down: 'goes down by', up: 'up by x', tiny: 'is tiny next', drop: 'drop the x', then: 'Then x squared', r15: 'one point five', xis: 'and x is', r39: 'three point nine', mpl: 'moles per litre'});
export const KA1_A = 'Ka = x^{2} / (0.0500', KA1_B = ' − x', KA1_C = ') = 3.0 × 10^{−8}';
export const SceneQ1Estimate: React.FC = () => {
	const f = useCurrentFrame();
	const K = KQ1b;
	const items = HOCL_EQ(6);
	const g = stripGeom(items);
	const rows: IceR[] = [
		{cells: [{t: '0.0500', at: K.ice + 22}, {t: '0', at: K.ice + 28}, {t: '0', at: K.ice + 32}], dim: [K.tiny - 10], expand: K.ice + 10},
		{cells: [{t: '−x', at: K.down + 12, color: RED}, {t: '+x', at: K.up, color: GRN}, {t: '+x', at: K.up + 6, color: GRN}], dim: [K.tiny - 10]},
		{cells: [{t: '0.0500 − x', at: K.up + 22, swap: {t: '≈ 0.0500', at: K.drop + 14, color: TEAL}}, {t: 'x', at: K.up + 28}, {t: 'x', at: K.up + 32}], lit: [K.up + 22, K.then]},
	];
	const X = 140, Y = G.ly[0], S = 42;
	const aW = mw(KA1_A, S), bW = mw(KA1_B, S);
	const grey = prog(f, K.tiny + 8, 12);
	const slide = prog(f, K.drop + 4, 18);
	return (
		<Overlay>
			<Head n={1} badge="Ka given: shortcut" badgeAt={6} />
			<Q1Strip anim marks={q1Marks(K.kac + 4, K.kac + 24)} />
			<DimG at={K.tiny - 10} to={0.45}><EqLine items={items} x={G.strip.x} y={G.strip.y} size={g.s} /></DimG>
			<IceRows x={G.ice.x} xR={g.xR} y={G.ice.y} rh={G.ice.rh} cols={g.cols} rows={rows} at={K.ice} unit={{at: K.ice + 20}} />
			<DimG at={K.then} to={0.32}>
				<g opacity={1 - prog(f, K.drop + 24, 10)}>
					<Sx x={X} y={Y} text={KA1_A} size={S} color={INK} weight={700} at={K.tiny - 16} />
					<g opacity={1 - slide} transform={`translate(0,${44 * slide})`}><Sx x={X + aW} y={Y} text={KA1_B} size={S} color={grey > 0.5 ? INK_SOFT : INK} weight={700} at={K.tiny - 16} /></g>
					<Sx x={X + aW + bW} y={Y} text={KA1_C} size={S} color={INK} weight={700} at={K.tiny - 16} />
				</g>
				<Sx x={X} y={Y} text="Ka ≈ x^{2} / 0.0500 = 3.0 × 10^{−8}" size={S} color={INK} weight={700} at={K.drop + 24} />
			</DimG>
			<WLine x={X} y={G.ly[1]} size={G.ls} dim={K.xis} items={P('x^{2} = 3.0 × 10^{−8} × 0.0500', K.then + 14, '= 1.5 × 10^{−9}', K.r15)} />
			<WLine x={X} y={G.ly[2]} size={G.ls} items={P('x = √(1.5 × 10^{−9}) = 3.87 × 10^{−5}', K.xis + 4, {t: '→ 3.9 × 10^{−5} mol/L', color: TEAL}, K.r39)} />
			<KeptChip x={G.right} y={560} text="x = [H_3O^{+}] = 3.9 × 10^{−5} mol/L" at={K.mpl + 20} color={TEAL} size={32} />
			<Checks ticks={{0: [K.kac + 40]}} />
		</Overlay>
	);
};

// ---------- 2c. Q1: justify it, then the pH ----------
const KQ1c = cues(sc('q1-check'), {now: 'Now justify', x: 'x is only', r077: 'zero point zero seven', far: 'far under five', ph: 'The pH is', r441: 'four point four one', two: 'two decimal places', below: 'below seven'});
export const Q1_TRACK = {x: 1300, y: 880, w: 470};
export const SceneQ1Check: React.FC = () => {
	const K = KQ1c;
	const R = {x: 140, y: 762, w: 1000};
	const lab = '3.87 × 10^{−5} ÷ 0.0500 × 100% = 0.077% < 5% ✓';
	return (
		<Overlay>
			<Head n={1} badge="Ka given: shortcut" />
			<Q1Strip marks={[...q1Marks(ALL, ALL), {phrase: Q1M.just, at: K.r077, color: TEAL}]} />
			<Board1 />
			<KeptChip x={G.right} y={560} text="x = [H_3O^{+}] = 3.9 × 10^{−5} mol/L" at={ALL} color={TEAL} size={32} />
			<DimG at={K.ph} to={0.3}>
				<XRuler x={R.x} y={R.y} w={R.w} frac={0.00077} at={K.now + 4} sliverAt={K.x} five={K.far} fiveLabel="5%" size={30} />
				<Sx x={R.x + R.w} y={R.y - 18} text="c = 0.0500 mol/L" size={30} color={INK} anchor="end" weight={700} at={K.now + 10} />
				<Sx x={R.x} y={R.y + 82} text={lab} size={34} color={PROTON_INK} weight={700} at={K.r077} />
			</DimG>
			<WLine x={R.x} y={918} size={G.ls} items={P('pH = −log(3.87 × 10^{−5})', K.ph + 4, {t: '= 4.41', color: TEAL}, K.r441)} />
			<GTag x={830} y={918} text="x: 2 s.f. (from Ka) → 2 d.p." at={K.two} out={K.below} />
			<AnsPanel x={G.right} y={640} w={584} h={160} rows={[{t: 'pH = 4.41', at: K.r441 + 18, color: TEAL, size: 38}, {t: '(approximation valid: 0.077% < 5%)', at: K.r441 + 30, size: 26}]} />
			<PHTrack x={Q1_TRACK.x} y={Q1_TRACK.y} w={Q1_TRACK.w} at={K.below} wall={K.below + 8} mark={{v: () => 4.41, at: K.below + 14, label: () => '4.41'}} size={22} />
			<Note x={Q1_TRACK.x + Q1_TRACK.w} y={968} text="acid: below 7 ✓" size={30} color={TEAL} anchor="end" at={K.below + 24} />
			<Checks ticks={{0: [ALL], 1: [K.far + 10], 2: [K.below + 30]}} />
		</Overlay>
	);
};

// ---------- 2d. Q1: the classic mistake ----------
const KQ1d = cues(sc('q1-mistake'), {classic: 'The classic mistake', root: 'square root', then: 'Then x is', r882: 'eight point eight', basic: 'a basic pH'});
export const SceneQ1Mistake: React.FC = () => {
	const K = KQ1d;
	const X8 = Q1_TRACK.x + (8.82 / 14) * Q1_TRACK.w;
	return (
		<Overlay>
			<Head n={1} badge="Ka given: shortcut" />
			<Q1Strip marks={[...q1Marks(ALL, ALL), {phrase: Q1M.just, at: ALL, color: TEAL}]} />
			<Board1 dimAt={ALL} to={0.25} />
			<AnsPanel x={G.right} y={640} w={584} h={160} rows={[{t: 'pH = 4.41', at: ALL, color: TEAL, size: 38}, {t: '(approximation valid: 0.077% < 5%)', at: ALL, size: 26}]} />
			<PHTrack x={Q1_TRACK.x} y={Q1_TRACK.y} w={Q1_TRACK.w} at={ALL} wall={ALL} mark={{v: () => 4.41, at: ALL, label: () => '4.41'}} ghost={{v: 8.82, label: '8.82', at: K.basic}} size={22} />
			<SmallCross x={X8} y={Q1_TRACK.y - 16} at={K.basic + 12} s={14} />
			<MistakeX x={140} y={730} text="x = Ka × c = 1.5 × 10^{−9}: pH 8.82" at={K.classic + 2} cross={K.root + 8} note="x^{2} = Ka × c, so take the square root" size={36} />
			<Checks ticks={{0: [ALL], 1: [ALL], 2: [ALL]}} />
			{void K.then}{void K.r882}{void AMBER}{void AMBER_INK}
		</Overlay>
	);
};
