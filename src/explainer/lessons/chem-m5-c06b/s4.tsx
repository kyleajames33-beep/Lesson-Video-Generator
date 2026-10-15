import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, GivensCard, Overlay, Radical, Ring, Sx, Tag, TEAL, Tick, eqLayout, fracXW, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {Heading, MINUS, N2K, NOK, O2K, PLUS, cw, sc} from './common';
import {CheckRuler, EngineCylinder} from './parts';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const NO_EQ: EqItem[] = [{k: 'sp', t: 'N_2(g)', color: N2K}, {k: 'plus'}, {k: 'sp', t: 'O_2(g)', color: O2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO(g)', color: NOK}];
const noCols = (a: number) => [{name: 'N_2', at: a, color: N2K}, {name: 'O_2', at: a + 8, color: O2K}, {name: 'NO', at: a + 16, color: NOK}];
const Badge: React.FC<{x: number; y: number; n: string; at: number}> = ({x, y, n, at}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={26} fill={TEAL} />
		<text x={x} y={y + 11} textAnchor="middle" fill="#fff" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}}>{n}</text>
	</Fade>
);

// ---------- 11. Attempt ----------
const A = 'attempt';
const KA = cues(sc(A), {turn: 'Your turn', engine: 'very hot engine', make: 'make a little', eq: 'N two plus O two makes', k: 'At this temperature', k40: '4.0 times ten', start: 'The gases start', n050: ['0.50 moles', 1], o050: '0.50 of oxygen', nono: 'no N O', find: 'Find the concentration', pause: 'Pause'});
export const SceneAttemptB: React.FC = () => {
	const hold = sc(A).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn" at={KA.turn} size={62} />
			<Overlay>
				<Tag x={440} y={96} w={330} text="illustrative values" at={KA.k40 + 20} />
				<EqStrip items={NO_EQ} x={96} y={250} size={52} at={KA.eq} />
				<GivensCard x={96} y={330} w={760} h={430} at={KA.k - 10} lh={56} lines={[
					{text: 'K = 4.0 × 10^{−4}', at: KA.k40, color: TEAL, size: 40},
					{text: 'very hot engine: much hotter than in', at: KA.k40 + 14, color: INK_SOFT, size: 28},
					{text: 'the expressions video, so a different K', at: KA.k40 + 18, color: INK_SOFT, size: 28},
					{text: '[N_2] at start: 0.50 mol/L', at: KA.n050, size: 36},
					{text: '[O_2] at start: 0.50 mol/L', at: KA.o050, size: 36},
					{text: 'no NO at start', at: KA.nono, size: 36},
				]} />
				{/* the demand stays visible */}
				<Badge x={926} y={366} n="?" at={KA.find} />
				<Sx x={976} y={382} text="Find [NO] at equilibrium." size={48} at={KA.find + 4} />
				<IceTable x={900} y={450} s={0.7} outlineAt={KA.find + 10} cols={noCols(KA.find + 24)} rows={ice({at: KA.find + 20, cells: []}, {at: KA.find + 26, cells: []}, {at: KA.find + 32, cells: []})} />
				<EngineCylinder x={1570} y={250} at={KA.engine} />
				<Sx x={900} y={840} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1650} y={840} r={72} />
			</Overlay>
		</>
	);
};

// ---------- feedback board (shared by 12a to 12c) ----------
const FT = {x: 96, y: 250, s: 0.62};
const fc = (r: number, c: number) => iceCell(FT.x, FT.y, FT.s, r, c);
const KL = {cx: 1150, cy: 360, size: 52};
const eqPos = eqLayout(NO_EQ, 40, 720).pos;
const FeedbackTop: React.FC<{t?: {i: number; c1: number; c2: number; c3: number; e: number; kis: number; over: number; eq: number}; kOut?: number}> = ({t, kOut}) => {
	const z = t ?? {i: -100, c1: -100, c2: -100, c3: -100, e: -100, kis: -100, over: -100, eq: -100};
	const num: Term[][] = [[{t: '(2x)', p: '2', br: false, at: z.kis + 10, color: NOK}]];
	const den: Term[][] = [[{t: '(0.50 − x)', p: '2', br: false, at: z.over, color: N2K}]];
	const W = fracXW(num, den, KL.size);
	return (
		<>
			<EqStrip items={NO_EQ} x={720} y={150} size={40} at={-100} />
			<Sx x={96} y={222} text="K = 4.0 × 10^{−4};  start [N_2] = [O_2] = 0.50 mol/L, no NO" size={28} color={INK_SOFT} weight={600} at={-100} />
			<IceTable x={FT.x} y={FT.y} s={FT.s} cols={noCols(-100)} rows={ice(
				{at: -100, cells: [{text: '0.50', at: z.i, color: N2K}, {text: '0.50', at: z.i + 6, color: O2K}, {text: '0', at: z.i + 12, color: NOK}]},
				{at: -100, cells: [{text: '−x', at: z.c1, color: MINUS}, {text: '−x', at: z.c2, color: MINUS}, {text: '+2x', at: z.c3, color: PLUS}]},
				{at: -100, cells: [{text: '0.50 − x', at: z.e, color: N2K, size: 40}, {text: '0.50 − x', at: z.e + 8, color: O2K, size: 40}, {text: '2x', at: z.e + 16, color: NOK}]},
			)} />
			<Sx x={672} y={fc(1, 2)[1] + 14} text="1 : 1 : 2" size={38} color={AMBER_INK} hand at={z.c3 + 12} />
			<FracX cx={KL.cx} cy={KL.cy} size={KL.size} num={num} den={den} barAt={z.kis} />
			<Sx x={KL.cx - W / 2 - KL.size * 0.3} y={KL.cy + KL.size * 0.3} anchor="end" text="K =" size={KL.size} at={z.kis} out={kOut} />
			<Sx x={KL.cx + W / 2 + 20} y={KL.cy + 18} text="= 4.0 × 10^{−4}" size={KL.size} color={TEAL} at={z.eq} />
		</>
	);
};
const COLY = 575;
const ColumnHeads: React.FC<{at: number; rightAt: number}> = ({at, rightAt}) => (
	<>
		<DrawPath d={`M950,${COLY - 40} L950,${COLY + 380}`} at={at} dur={16} color={INK_SOFT} width={3} dash="8 8" />
		<Sx x={96} y={COLY} text="Perfect square: square root" size={44} color={TEAL} hand at={at + 6} />
		<Sx x={990} y={COLY} text="Tiny K: drop the x" size={44} color={TEAL} hand at={rightAt} />
	</>
);
const LeftCol: React.FC<{a: {root: number; r020: number; rearr: number; x495: number; no99: number}; dim?: number}> = ({a, dim = 1}) => {
	const S = 44, cx = 260, cy = 650;
	const W = fracXW([[{t: '2x', br: false, at: 0}]], [[{t: '0.50 − x', br: false, at: 0}]], S);
	return (
		<>
			<g opacity={dim}>
				<FracX cx={cx} cy={cy} size={S} num={[[{t: '2x', br: false, at: a.root + 10, color: NOK}]]} den={[[{t: '0.50 − x', br: false, at: a.root + 10, color: N2K}]]} barAt={a.root + 8} />
				<Sx x={cx + W / 2 + 18} y={cy + 15} text="= 0.020" size={S} color={TEAL} at={a.r020} />
				<Sx x={120} y={765} text="2x = 0.010 − 0.020x" size={40} at={a.rearr} />
				<Sx x={120} y={820} text="2.02x = 0.010" size={40} at={a.rearr + 30} />
				<Sx x={120} y={875} text="x = 0.00495" size={40} at={a.x495} />
			</g>
			<Sx x={120} y={942} text="[NO] = 2x = 0.0099 mol/L" size={40} color={TEAL} at={a.no99} />
			<Tick x={640} y={926} at={a.no99 + 16} s={40} />
		</>
	);
};
type RA = {drop: number; q25: number; four: number; equals: number; mult: number; b025: number; e10: number; div: number; x2: number; x50: number; no010: number; check: number; one: number; under: number};
const RightCol: React.FC<{a: RA; dim?: number}> = ({a, dim = 1}) => {
	const f = useCurrentFrame();
	const X = 990, S = 38;
	const q0 = '(0.50 − x)^{2} ≈ 0.50 × 0.50';
	const r1 = '4x^{2} ÷ 0.25';
	const m1 = '4x^{2} = 4.0 × 10^{−4}', m2 = ' × 0.25';
	const q1 = 'x^{2} = 2.5 × 10^{−5},';
	// once checked, the working gives way to the check ruler; the results (x and [NO]) stay
	const work = 1 - prog(f, a.check - 8, 14);
	return (
		<>
			<g opacity={dim}>
				<g opacity={work}>
					<Sx x={X} y={640} text={q0} size={S} at={a.drop + 6} />
					<Sx x={X + tw(q0, S) + 2} y={640} text="= 0.25" size={S} at={a.q25} />
					<g opacity={1 - 0.55 * prog(f, a.div, 14)}>
						<Sx x={X} y={694} text={r1} size={S} at={a.four} />
						<Sx x={X + tw(r1, S) + 14} y={694} text="= 4.0 × 10^{−4}" size={S} color={TEAL} at={a.equals} />
					</g>
					<Fade at={a.mult} out={a.div}>
						<Sx x={X} y={738} text="multiply both sides by the bottom" size={32} color={AMBER_INK} hand at={a.mult} />
					</Fade>
					<g opacity={1 - 0.55 * prog(f, a.x2, 14)}>
						<Sx x={X} y={786} text={m1} size={S} at={a.b025} />
						<Sx x={X + tw(m1, S) - 6} y={786} text={m2} size={S} color={N2K} at={a.b025 + 8} />
						<Sx x={X + tw(m1 + m2, S) + 2} y={786} text="= 1.0 × 10^{−4}" size={S} color={TEAL} at={a.e10} />
					</g>
					<Fade at={a.div} out={a.x50 + 20}>
						<Sx x={X} y={830} text="divide by 4" size={32} color={AMBER_INK} hand at={a.div} />
					</Fade>
				</g>
				<Sx x={X} y={878} text={q1} size={S} at={a.x2} />
				<Sx x={X + tw(q1, S) + 18} y={878} text="x = 0.0050" size={S} color={TEAL} at={a.x50} />
				<CheckRuler x={X} y={690} w={800} h={22} frac={0.01} at={a.check} sliverAt={a.one} side="start" fiveAt={a.one + 10} labelSize={30} />
				<Sx x={X} y={790} text="x is 1% of 0.50: under 5%, so the shortcut is safe" size={30} color={AMBER_INK} hand at={a.under} />
			</g>
			<Sx x={X} y={942} text="[NO] = 2x = 0.010 mol/L" size={40} color={TEAL} at={a.no010} />
			<Tick x={X + 500} y={926} at={a.no010 + 16} s={40} />
		</>
	);
};

// ---------- 12a. Feedback: the table and the perfect-square route ----------
const F1 = 'feedback-square';
const K1 = cues(sc(F1), {nit: 'Nitrogen and oxygen each fall', fall: 'fall by x', no: 'N O rises by two x', two: 'two x so', kis: 'K is two x', over: 'over 0.50 minus x', allsq: ['all squared', 2], either: 'You could use either', equal: 'The starts are equal', perf: 'perfect square', root: 'take the square root', r020: '0.020', rearr: 'Rearrange as before', x495: '0.00495', no99: '0.0099'});
const L1A = {root: K1.root, r020: K1.r020, rearr: K1.rearr, x495: K1.x495, no99: K1.no99};
export const SceneFeedbackSquare: React.FC = () => {
	const W = fracXW([[{t: '(2x)', p: '2', br: false, at: 0}]], [[{t: '(0.50 − x)', p: '2', br: false, at: 0}]], KL.size);
	return (
		<>
			<Heading text="Feedback: find [NO]" at={4} size={56} />
			<Overlay>
				<FeedbackTop t={{i: 6, c1: K1.fall, c2: K1.fall + 8, c3: K1.two, e: K1.two + 14, kis: K1.kis, over: K1.over, eq: K1.allsq + 10}} />
				<ColumnHeads at={K1.either} rightAt={K1.either + 20} />
				<Sx x={950} y={COLY - 56} text="either shortcut works here" size={34} color={INK_SOFT} anchor="middle" hand at={K1.either + 4} out={K1.root - 4} />
				{/* the starts are equal: a perfect square, so take the root of both sides */}
				<Ring cx={KL.cx} cy={KL.cy + 44} rx={W / 2 + 30} ry={48} at={K1.equal} out={K1.root + 40} color={AMBER} seed={4} />
				<Sx x={KL.cx} y={KL.cy + 140} text="equal starts: top and bottom both squares" size={34} color={AMBER_INK} anchor="middle" hand at={K1.equal + 10} out={K1.root - 4} />
				<Sx x={KL.cx + 60} y={KL.cy + 112} text="√ of both sides: √(4.0 × 10^{−4}) = 0.020" size={36} color={AMBER_INK} anchor="middle" hand at={K1.root} />
				<Arrow x1={KL.cx - 190} y1={KL.cy + 104} x2={470} y2={624} at={K1.root + 16} color={AMBER_INK} width={4} out={K1.rearr} />
				<LeftCol a={L1A} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback: the tiny-K route, and the check ----------
const F2 = 'feedback-tiny-k';
const K2 = cues(sc(F2), {tiny: 'Or K is tiny', drop: 'drop the x', q25: 'which is 0.25', four: 'four x squared over', equals: 'equals 4.0', mult: 'Multiply both sides by 0.25', e10: '1.0 times ten', div: 'Divide by four', x2: 'x squared is 2.5', x50: '0.0050', no010: '0.010', check: 'Check it', one: ['1 per cent', 1], under: 'well under 5', agree: 'the two answers agree'});
const R2: RA = {drop: K2.drop, q25: K2.q25, four: K2.four, equals: K2.equals, mult: K2.mult, b025: cw(F2, 'Multiply both sides by 0.25', 4), e10: K2.e10, div: K2.div, x2: K2.x2, x50: K2.x50, no010: K2.no010, check: K2.check, one: K2.one, under: K2.under};
const DONE_L = {root: -100, r020: -100, rearr: -100, x495: -100, no99: -100};
export const SceneFeedbackTiny: React.FC = () => {
	const f = useCurrentFrame();
	const W = fracXW([[{t: '(2x)', p: '2', br: false, at: 0}]], [[{t: '(0.50 − x)', p: '2', br: false, at: 0}]], KL.size);
	return (
		<>
			<Heading text="Feedback: find [NO]" at={-100} size={56} />
			<Overlay>
				<FeedbackTop />
				<ColumnHeads at={-100} rightAt={-100} />
				<LeftCol a={DONE_L} dim={1 - 0.6 * prog(f, 4, 16)} />
				<Ring cx={KL.cx} cy={KL.cy + 44} rx={W / 2 + 30} ry={48} at={K2.drop} out={K2.q25 + 30} color={AMBER} seed={5} />
				<RightCol a={R2} />
				{/* the two answers agree */}
				<Fade at={K2.agree}>
					<path d="M680,930 L960,930" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 7" />
					<Sx x={820} y={905} text="agree to about 1%" size={32} color={AMBER_INK} anchor="middle" hand at={K2.agree} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 12c. Feedback: the likely slips ----------
const F3 = 'feedback-slips';
const K3 = cues(sc(F3), {w1: '0.0050', w1b: 'that is x', w1c: 'but N O is two x', w2: '0.014', w2b: 'you put 0.50', w2c: 'instead of 0.50 times', w3: 'if you wrote plus x', w3b: 'look at the coefficient', w3c: 'two N O are made'});
const DONE_R: RA = {drop: -100, q25: -100, four: -100, equals: -100, mult: -100, b025: -100, e10: -100, div: -100, x2: -100, x50: -100, no010: -100, check: -100, one: -100, under: -100};
export const SceneFeedbackSlipsB: React.FC = () => {
	const f = useCurrentFrame();
	const fade = 1 - prog(f, 4, 16);
	const cell = fc(1, 2);
	return (
		<>
			<Heading text="Feedback: find [NO]" at={-100} size={56} />
			<Overlay>
				<FeedbackTop />
				<g opacity={fade}>
					<ColumnHeads at={-100} rightAt={-100} />
					<LeftCol a={DONE_L} />
					<RightCol a={DONE_R} />
				</g>
				<Sx x={120} y={COLY + 6} text="likely slips" size={40} color={INK_SOFT} hand at={6} />
				{/* 0.0050: that is x */}
				<Chip x={120} y={620} w={760} text="0.0050: that is x, and [NO] = 2x" size={38} at={K3.w1} color={INK_SOFT} cross={K3.w1c} />
				<Arrow x1={500} y1={618} x2={cell[0] + 10} y2={cell[1] + 26} at={K3.w1b} color="#c4432f" width={5} out={K3.w2 - 10} />
				<Ring cx={cell[0]} cy={cell[1]} rx={60} ry={30} at={K3.w1b + 8} out={K3.w2 - 10} color="#c4432f" seed={4} />
				{/* 0.014: one concentration on the bottom */}
				<Chip x={120} y={720} w={1000} text="0.014: the bottom should be [N_2][O_2] = 0.50 × 0.50" size={38} at={K3.w2} color={INK_SOFT} cross={K3.w2c + 30} />
				<Ring cx={KL.cx} cy={KL.cy + 44} rx={150} ry={46} at={K3.w2b} out={K3.w3 - 10} color="#c4432f" seed={6} />
				<Sx x={150} y={826} text="4x^{2} ÷ 0.50 = 4.0 × 10^{−4},  x = 0.0071,  2x = 0.014" size={30} color={INK_SOFT} at={K3.w2b + 20} />
				{/* +x for NO: look at the coefficient */}
				<Chip x={120} y={866} w={760} text="+x for NO: the coefficient is 2" size={38} at={K3.w3} color={INK_SOFT} cross={K3.w3c + 20} />
				<Ring cx={eqPos[4].cx + 10} cy={136} rx={22} ry={30} at={K3.w3b} color={AMBER} seed={3} />
				<Arrow x1={eqPos[4].cx - 6} y1={168} x2={cell[0] + 40} y2={cell[1] - 22} at={K3.w3b + 8} color={AMBER_INK} width={5} />
			</Overlay>
		</>
	);
};
void AMBER; void INK;
