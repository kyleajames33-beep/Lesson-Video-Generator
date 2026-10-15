import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, EqStrip, Fade, FracX, GivensCard, Overlay, Ring, Sx, Tag, TEAL, Tick, eqLayout, fracXW, tw} from '../chem-m5-c06/parts';
import type {EqItem, Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceColX} from '../chem-m5-c06/ice';
import {CheckRuler} from '../chem-m5-c06b/parts';
import {CurveArrow} from '../chem-m5-c06a/types';
import {HscTag} from '../chem-m5-g03a/board';
import {hold, sc} from './common';
import {AidChip, CL2K, COK, Dim, GasFlask, H2K, MEOHK, MINUS, MistakeChip, NOCLK, NOCL_FILL, NOK, NoclDots, PLUS, PauseHold, Pieces, piecesW, TaskLine, TrapStrip, TypeBadge, noclSplitPos} from '../chem-m5-g03c/board';
import {TRAPS_D} from './s1';

const ice = (...rows: Parameters<typeof IceTable>[0]['rows']) => rows;
export const Q3_EQ: EqItem[] = [{k: 'sp', coef: '2', t: 'NO(g)', color: NOK}, {k: 'plus'}, {k: 'sp', t: 'Cl_2(g)', color: CL2K}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NOCl(g)', color: NOCLK}];
export const Q3_FLIP: EqItem[] = [{k: 'sp', coef: '2', t: 'NOCl(g)', color: NOCLK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO(g)', color: NOK}, {k: 'plus'}, {k: 'sp', t: 'Cl_2(g)', color: CL2K}];
const EQ = {x: 96, y: 250, s: 46};
const endGiven = eqLayout(Q3_EQ, EQ.s, EQ.x).end;
const CARD = {x: 96, y: 330, w: 600, lh: 52};
const lineY = (i: number) => CARD.y + 108 + i * CARD.lh;
const T3 = {x: 720, y: 330, s: 0.85};
const TS = {x: 96, y: 340, s: 0.72};
const FL = {x: 1570, y: 300, h: 460};
const TASK3 = 'Find the moles of chlorine at equilibrium.';
const BADGE3 = 'Type 3: K + start';
const TINT = {color: NOCL_FILL, o: 0.32};
const q3Cols = (a: number) => [{name: 'NOCl', at: a, color: NOCLK}, {name: 'NO', at: a + 6, color: NOK}, {name: 'Cl_2', at: a + 12, color: CL2K}];
type CA = {k: number; four: number; two: number};
const Q3Card: React.FC<{a?: CA}> = ({a = {k: -100, four: -100, two: -100}}) => (
	<GivensCard x={CARD.x} y={CARD.y} w={CARD.w} h={352} at={a.k - 6} lh={CARD.lh} lines={[
		{text: 'K = 6.25 × 10^{4}', at: a.k, color: TEAL, size: 36},
		{text: '(for the equation as given, this temperature)', at: a.k + 10, color: INK_SOFT, size: 26},
		{text: 'vessel: 4.00 L', at: a.four, size: 36},
		{text: 'start: NOCl 2.00 mol', at: a.two, color: NOCLK, size: 36},
		{text: 'start: no NO, no Cl_2', at: a.two + 20, size: 36},
	]} />
);
type RA = {head: number; i1: number; pre: number; i0: number; c1: number; c2: number; c3: number; e1: number; e2: number; e3: number; drop?: number; fly?: boolean};
const DONE: RA = {head: -100, i1: -100, pre: -100, i0: -100, c1: -100, c2: -100, c3: -100, e1: -100, e2: -100, e3: -100};
const q3Rows = (t: RA) => ice(
	{at: -100, cells: [{text: '0.500', at: t.i1, color: NOCLK, pre: {text: '2.00 ÷ 4.00', at: t.pre}, from: t.fly ? [CARD.x + 380, lineY(3) - 12] : undefined}, {text: '0', at: t.i0, color: NOK}, {text: '0', at: t.i0 + 6, color: CL2K}]},
	{at: -100, cells: [
		{text: '−2x', at: t.c1, color: MINUS, tag: {text: '× 2', at: t.c1 + 8, color: AMBER_INK}},
		{text: '+2x', at: t.c2, color: PLUS, tag: {text: '× 2', at: t.c2 + 8, color: AMBER_INK}},
		{text: '+x', at: t.c3, color: PLUS, tag: {text: '× 1', at: t.c3 + 8, color: AMBER_INK}}]},
	{at: -100, cells: [
		{text: '0.500 − 2x', at: t.e1, color: NOCLK, size: 38, swap: t.drop === undefined ? undefined : {text: '≈ 0.500', at: t.drop}},
		{text: '2x', at: t.e2, color: NOK}, {text: 'x', at: t.e3, color: CL2K}]},
);
const PRIOR3 = {0: [-100], 1: [-100]};
/** One-line givens strip used once the working needs the room. */
const GivensLine: React.FC = () => <Sx x={96} y={316} text="K = 1.6 × 10^{−5} (flipped),  start [NOCl] = 0.500 mol/L,  4.00 L" size={30} color={INK_SOFT} at={-100} />;

// ---------- 2a. Question 3 (pause) ----------
const Q = 'q3-question';
const KQ = cues(sc(Q), {q: 'Question three', for: 'For two N O plus', k: '6.25 times ten', two: '2.00 moles of', four: '4.00 litre', split: 'some of it splits', how: 'How many moles', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(Q);
	const sp = noclSplitPos(FL.x, FL.y, FL.h, f);
	return (
		<>
			<Overlay>
				<TaskLine text={TASK3} at={KQ.how} />
				<HscTag at={10} />
				<TypeBadge text={BADGE3} at={KQ.q} />
				<EqStrip items={Q3_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={KQ.for} />
				<Q3Card a={{k: KQ.k, four: KQ.four, two: KQ.two}} />
				<Tag x={96} y={696} w={300} text="illustrative value" at={KQ.k + 20} size={26} color={AMBER_INK} />
				<IceTable x={T3.x} y={T3.y} s={T3.s} outlineAt={KQ.how - 20} cols={[{name: '', at: -100, color: INK}, {name: '', at: -100, color: INK}, {name: '', at: -100, color: INK}]} unit="" rows={ice({at: KQ.how - 10, cells: []}, {at: KQ.how - 6, cells: []}, {at: KQ.how - 2, cells: []})} />
				<GasFlask x={FL.x} y={FL.y} h={FL.h} at={KQ.two} tint={TINT}><NoclDots x={FL.x} y={FL.y} h={FL.h} split={KQ.split} /></GasFlask>
				<Ring cx={sp.x} cy={sp.y} rx={44} ry={44} at={KQ.split + 6} out={KQ.split + 70} color={AMBER_INK} seed={5} />
				<Sx x={FL.x + 115} y={FL.y + FL.h + 40} text="some NOCl splits" size={30} color={NOCLK} anchor="middle" hand at={KQ.split + 10} />
				<PauseHold h={h} at={KQ.pause} />
				<TrapStrip labels={TRAPS_D} hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Flip K with the equation, then the table ----------
const F = 'q3-flip-and-table';
const KF = cues(sc(F), {look: 'Look at which way', makes: 'makes N O C L', starts: 'this vessel starts with', splits: 'which splits', belongs: 'K belongs to', write: 'write the equation the way', flipk: 'flip K with it', one: 'one over 6.25', k16: '1.6 times ten', tiny: 'which is tiny', q2: 'Question two ran', kept: 'kept its equation', now: 'Now the table', start: 'The start is', r500: '0.500 moles per litre', xcl: 'If x of chlorine', forms: ['forms', 1], c1: 'two x of N O C L', c2: 'two x of N O forms', erow: 'the equilibrium row is', e1: '0.500 minus two x', e2: ['two x', 4], e3: 'and x'});
export const SceneQ3Flip: React.FC = () => {
	const f = useCurrentFrame();
	const sp = noclSplitPos(FL.x, FL.y, FL.h, f);
	const LOG = {x0: 720, x1: 1100, y: 940};
	const lxl = (e: number) => LOG.x1 + (e / 6) * (LOG.x1 - LOG.x0);
	return (
		<>
			<Overlay>
				<TaskLine text={TASK3} at={-100} />
				<HscTag at={-100} />
				<TypeBadge text={BADGE3} at={-100} />
				{/* the given equation, then rewritten the way this vessel runs */}
				<EqStrip items={Q3_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} out={KF.write + 4} />
				<Arrow x1={120} y1={286} x2={endGiven - 20} y2={286} at={KF.makes} color={AMBER_INK} width={4} out={KF.write} />
				<Sx x={endGiven + 20} y={EQ.y} text="K given for this way" size={32} color={AMBER_INK} hand at={KF.makes + 6} out={KF.write} />
				<CurveArrow d={[[endGiven - 10, 200], [endGiven - 120, 176], [200, 176], [84, 206]]} at={KF.write} dur={20} out={KF.now} />
				<EqStrip items={Q3_FLIP} x={EQ.x} y={EQ.y} size={EQ.s} at={KF.write + 16} />
				<Sx x={endGiven + 20} y={EQ.y} text="the way this vessel runs" size={32} color={TEAL} hand at={KF.write + 24} />
				<Q3Card />
				{/* flip K */}
				<Pieces x={720} y={770} size={42} items={[{t: 'K = 1 ÷ (6.25 × 10^{4})', at: KF.one}, {t: '= 1.6 × 10^{−5}', at: KF.k16, color: TEAL}]} />
				<AidChip x={720} y={796} text="Flip the equation, flip K." at={KF.flipk + 6} size={34} />
				<Tag x={1180} y={800} w={560} text="same temperature, equation as written" at={KF.flipk + 20} size={26} color={TEAL} />
				<Fade at={KF.tiny}>
					<DrawPath d={`M${LOG.x0},${LOG.y} L${LOG.x1},${LOG.y}`} at={KF.tiny} dur={12} color={INK} width={3} />
					{[0, -1, -2, -3, -4, -5, -6].map(e => <path key={e} d={`M${lxl(e)},${LOG.y - 9} L${lxl(e)},${LOG.y + 9}`} stroke={INK} strokeWidth={3} />)}
					<Sx x={lxl(0)} y={LOG.y + 36} text="1" size={26} anchor="middle" at={KF.tiny} />
					<Sx x={lxl(-5)} y={LOG.y + 36} text="10^{−5}" size={26} anchor="middle" at={KF.tiny} />
					<circle cx={lxl(-4.8)} cy={LOG.y} r={10} fill={TEAL} stroke={INK} strokeWidth={2} />
					<Sx x={LOG.x1 + 30} y={LOG.y + 10} text="tiny" size={36} color={AMBER_INK} hand at={KF.tiny + 6} />
				</Fade>
				{/* question 2 (part 1) thumbnail: it ran backwards but kept its equation and its K */}
				<Fade at={KF.q2} out={KF.now}>
					<rect x={1230} y={866} width={594} height={116} rx={18} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
					<EqStrip items={[{k: 'sp', t: 'CO', color: COK}, {k: 'plus'}, {k: 'sp', coef: '2', t: 'H_2', color: H2K}, {k: 'arrow'}, {k: 'sp', t: 'CH_3OH', color: MEOHK}]} x={1254} y={916} size={30} at={KF.q2} />
					<DrawPath d={`M${1560},${932} L${1300},${932}`} at={KF.q2 + 6} dur={12} color={AMBER_INK} width={3.5} />
					<path d="M1314,924 L1300,932 L1314,940" fill="none" stroke={AMBER_INK} strokeWidth={3.5} opacity={prog(f, KF.q2 + 16, 6)} />
					<Sx x={1254} y={968} text="Q2 (part 1): K = 14.6, equation kept" size={28} color={INK_SOFT} hand at={KF.q2 + 8} />
				</Fade>
				<Sx x={96} y={716} text="or keep the given equation:" size={24} color={INK_SOFT} hand at={KF.kept + 40} />
				<Sx x={96} y={748} text="[NOCl]^{2} ÷ ([NO]^{2}[Cl_2]) = 6.25 × 10^{4} gives the same x" size={22} color={INK_SOFT} at={KF.kept + 46} />
				{/* the table */}
				<Sx x={iceColX(T3.x, T3.s, 2)} y={318} text="x = Cl_2 formed, mol/L" size={26} color={AMBER_INK} anchor="middle" hand at={KF.xcl} />
				<IceTable x={T3.x} y={T3.y} s={T3.s} cols={q3Cols(KF.now)} rows={q3Rows({head: KF.now, i1: KF.r500, pre: KF.start + 10, i0: KF.r500 + 14, c1: KF.c1, c2: KF.c2, c3: KF.forms, e1: KF.e1, e2: KF.e2, e3: KF.e3, fly: true})} />
				<GasFlask x={FL.x} y={FL.y} h={FL.h} at={-100} tint={TINT}><NoclDots x={FL.x} y={FL.y} h={FL.h} split={-100} /></GasFlask>
				<Ring cx={sp.x} cy={sp.y} rx={44} ry={44} at={KF.splits} out={KF.splits + 60} color={AMBER_INK} seed={6} />
				<TrapStrip labels={TRAPS_D} ticks={{1: [KF.flipk + 10], 0: [KF.r500 + 10]}} />
			</Overlay>
		</>
	);
};

// ---------- 2c. Drop the 2x from the bottom, solve the cube ----------
const S = 'q3-drop-and-solve';
const KS = cues(sc(S), {kis: 'K is two x', tiny: 'K is tiny', drop: 'drop the two x', keep: 'keep the x on top', bottom: 'The bottom becomes', b250: ['0.250', 1], top: 'On top', four: ['four x cubed', 1], mult: 'Multiply both sides by the bottom', b025: 'the bottom 0.250', e4: '4.0 times ten', div: 'divide both sides by four', x3: 'x cubed is 1.0', x0100: 'x is 0.0100'});
export const SceneQ3Solve: React.FC = () => {
	const L = {cx: 1180, cy: 430, size: 46};
	const num: Term[][] = [[{t: '(2x)', p: '2', br: false, at: KS.kis + 6, color: NOK}, {t: 'x', br: false, at: KS.kis + 20, color: CL2K}]];
	const den: Term[][] = [[{t: '(0.500 − 2x)', p: '2', br: false, at: KS.kis + 30, color: NOCLK, out: KS.drop + 10}], [{t: '0.500', p: '2', br: false, at: KS.drop + 14, color: NOCLK}]];
	const W = fracXW(num, den, L.size);
	const rx = L.cx + W / 2 + 20;
	const X = 860;
	return (
		<>
			<Overlay>
				<TaskLine text={TASK3} at={-100} />
				<HscTag at={-100} />
				<TypeBadge text={BADGE3} at={-100} />
				<EqStrip items={Q3_FLIP} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GivensLine />
				<IceTable x={TS.x} y={TS.y} s={TS.s} cols={q3Cols(-100)} rows={q3Rows({...DONE, drop: KS.drop + 20})} />
				{/* K in x */}
				<Dim at={KS.mult}>
					<FracX cx={L.cx} cy={L.cy} size={L.size} num={num} den={den} barAt={KS.kis} prefix="K =" prefixAt={KS.kis} />
					<Sx x={rx} y={L.cy + 16} text="=" size={L.size} at={KS.kis + 40} out={KS.drop + 10} />
					<Sx x={rx} y={L.cy + 16} text="≈" size={L.size} color={AMBER_INK} at={KS.drop + 14} />
					<Sx x={rx + 50} y={L.cy + 16} text="1.6 × 10^{−5}" size={L.size} color={TEAL} at={KS.kis + 44} />
				</Dim>
				<Tag x={rx} y={L.cy + 44} w={300} text="K: no unit written" at={KS.kis + 50} color={AMBER_INK} size={24} />
				<Sx x={L.cx + W / 2 - 60} y={L.cy + 130} text="drop the 2x: very little splits" size={30} color={AMBER_INK} hand at={KS.drop + 6} />
				<Ring cx={L.cx} cy={L.cy - 30} rx={W / 2 - 10} ry={40} at={KS.keep} out={KS.mult} color={AMBER} seed={4} />
				<Sx x={L.cx} y={L.cy - 84} text="keep: this is the answer" size={30} color={AMBER_INK} anchor="middle" hand at={KS.keep + 6} out={KS.mult} />
				{/* the algebra, one step per line */}
				<Dim at={KS.mult}><Pieces x={X} y={590} size={42} items={[{t: '0.500^{2} =', at: KS.bottom}, {t: '0.250', at: KS.b250}]} /></Dim>
				<Dim at={KS.mult}><Pieces x={X} y={656} size={42} items={[{t: '(2x)^{2} × x =', at: KS.top}, {t: '4x^{3}', at: KS.four}]} /></Dim>
				<Dim at={KS.e4}><Sx x={X} y={722} text="4x^{3} ÷ 0.250 = 1.6 × 10^{−5}" size={42} at={KS.four + 24} /></Dim>
				<Fade at={KS.mult} out={KS.div}><Sx x={X} y={772} text="multiply both sides by the bottom" size={30} color={AMBER_INK} hand at={KS.mult} /></Fade>
				<Dim at={KS.x3}><Pieces x={X} y={836} size={42} items={[{t: '4x^{3} = 1.6 × 10^{−5} × 0.250', at: KS.b025}, {t: '= 4.0 × 10^{−6}', at: KS.e4, color: TEAL}]} /></Dim>
				<Fade at={KS.div}><Sx x={X} y={884} text="divide by 4, then take the cube root" size={30} color={AMBER_INK} hand at={KS.div} /></Fade>
				<Pieces x={X} y={948} size={42} items={[{t: 'x^{3} = 1.0 × 10^{−6}', at: KS.x3}, {t: 'x = 0.0100 mol/L', at: KS.x0100, color: TEAL}]} />
				<MistakeChip x={96} y={690} text="(2x)^{2} = 2x^{2}" at={KS.four + 12} size={32} note="(2x)^{2} = 2x × 2x = 4x^{2}" />
				<TrapStrip labels={TRAPS_D} ticks={PRIOR3} />
			</Overlay>
		</>
	);
};

// ---------- 2d. The 5 per cent check on 2x, then the moles ----------
const C = 'q3-check-and-moles';
const KC = cues(sc(C), {check: 'Check the shortcut', amount: 'The amount taken off', twox: ['two x', 1], notx: 'not x', r0200: '0.0200 out of', pct: '4 per cent', under: 'under about 5', passes: 'it passes', chl: 'Chlorine is 0.0100', l4: '4.00 litres', mol: '0.0400 moles', classic: 'The classic mistake', without: 'without flipping it', gives: 'That gives x', sixteen: '16 moles', imp: 'which is impossible'});
export const SceneQ3Check: React.FC = () => {
	const R = {x: 160, y: 470, w: 1600};
	const ch = [{t: '[Cl_2] = 0.0100 mol/L', at: KC.chl, color: CL2K}, {t: '× 4.00 L', at: KC.l4}, {t: '= 0.0400 mol', at: KC.mol, color: TEAL, size: 48}];
	return (
		<>
			<Overlay>
				<TaskLine text={TASK3} at={-100} />
				<HscTag at={-100} />
				<TypeBadge text={BADGE3} at={-100} />
				<EqStrip items={Q3_FLIP} x={EQ.x} y={EQ.y} size={EQ.s} at={-100} />
				<GivensLine />
				<Sx x={R.x} y={R.y - 70} text="Is dropping 2x fair? Compare the amount taken off with the start." size={36} color={INK_SOFT} hand at={6} out={KC.chl} />
				<CheckRuler x={R.x} y={R.y} w={R.w} frac={0.0200 / 0.500} at={8} sliverAt={KC.twox} side="start" color={NOCL_FILL} fiveAt={KC.under} fiveLabel="5%: a school rule of thumb" labelSize={34} />
				<Sx x={R.x + R.w} y={R.y - 16} text="start: [NOCl] = 0.500 mol/L" size={34} anchor="end" hand at={14} />
				<Sx x={R.x} y={R.y + 92} text="2x = 0.0200" size={40} color={AMBER_INK} hand at={KC.r0200} />
				<Sx x={500} y={R.y + 92} text="0.0200 ÷ 0.500 = 4%" size={44} color={AMBER_INK} at={KC.pct} />
				<Tick x={1010} y={R.y + 76} at={KC.passes} s={40} />
				<Sx x={1050} y={R.y + 92} text="under 5%: passes, only just" size={40} color={TEAL} hand at={KC.passes + 6} />
				<MistakeChip x={R.x} y={R.y + 130} text="x ÷ 0.500 = 2%: wrong amount, NOCl loses 2x" at={KC.notx} out={KC.chl - 10} size={30} />
				{/* convert back to moles */}
				<Pieces x={R.x} y={726} size={42} items={ch} />
				<Tick x={R.x + piecesW(ch, 42) * 1.15 + 40} y={708} at={KC.mol + 12} s={40} />
				<Tag x={R.x} y={752} w={700} text="exact answer 0.0390 mol; the shortcut is about 3% high" at={KC.mol + 24} size={24} />
				{/* the classic mistake: K not flipped */}
				<MistakeChip x={R.x} y={834} text="K not flipped: 4x^{3} = 6.25 × 10^{4} × 0.250, so x = 15.7 mol/L" at={KC.without} size={30} />
				<Sx x={R.x + 26} y={946} text="far more than the 0.500 mol/L start: impossible" size={34} color={TEAL} hand at={KC.imp} />
				<TrapStrip labels={TRAPS_D} ticks={{...PRIOR3, 2: [KC.pct + 10], 3: [KC.mol + 10]}} />
			</Overlay>
		</>
	);
};
void iceCell; void tw;
