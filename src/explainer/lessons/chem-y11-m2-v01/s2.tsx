// Y11 Chem M2 V01 scenes 7 to 13: the unbalanced equation and its atom tally (an oxygen atom "vanished"); subscripts
// against coefficients; the coefficient stepper for hydrogen and oxygen (dials step, tiles copy in, the live tally
// recounts); magnesium and oxygen with state symbols; copper carbonate already balanced; mass-change problems in the
// calculation layout; the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CRU_BL, CRU_N, EQ, F, GLASS, ILLUS, M, MGO, g2, pw, sc, tally} from './common';
import type {Eq, PDef} from './common';
import {
	AMB_C, AMB_CT, Boundary, Chip, EqLine, Fade, Framed, GREEN_C, Heading, INK, Mol, NAVY_C, PAPER, PenArrow, PenRing, Plate, RED_C, ROSE_C, Rich, SLATE_C, StrikeLine,
	Sx, TEAL_C, Tally, Tile, TickMark, Wisps, Write, bowlBox, clamp01, cruPt, prog, richW, smooth, termX, terms,
} from './parts';
import type {TRow, Term} from './parts';
import {mgoGeo} from './s1';
import {Givens} from '../chem-y11-m1-v01/s3';

const span = (f: number, a: number, b: number) => smooth(clamp01((f - a) / Math.max(1, b - a)));
const HEAD = 'Balancing equations';
/** Coefficients at frame f from steps [frame, index, value]. */
const coefAt = (f: number, base: number[], steps: [number, number, number][]) => { const c = [...base]; for (const [t, i, v] of steps) if (f >= t) c[i] = v; return c; };
const rowsOf = (e: Eq, c: number[], els: string[], at?: Record<string, number>): TRow[] => tally(e, c, els).map(r => ({...r, at: at?.[r.el]}));

// ---------- 7. an equation must keep every atom ----------
const K7 = cues(sc('unbalanced'), {so: 'So a chemical', here: "Here's the reaction", count: 'Count the oxygen', two: 'Two on the left', right: 'on the right', read: 'Read literally', vanished: 'atom vanished', that: 'do that', isnt: "isn't balanced"});
const EQY = 500, EQX = 700;
export const SceneUnbalanced: React.FC = () => {
	const f = useCurrentFrame();
	const T = terms(EQ.water, [1, 1, 1]);
	const blink = f >= K7.vanished && f < K7.vanished + 30 ? 0.5 + 0.5 * Math.cos((f - K7.vanished) * 0.6) : 1;
	const o2x = termX(T, 2, 96, EQX, 1, 'middle', true).f;
	const ox = termX(T, 2, 96, EQX, 2, 'middle', true).f;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="An equation must keep every atom" at={0} />
			{/* the particle model from scene 6, small */}
			<Mol x={1530} y={250} atoms={[{el: 'O', x: 0, y: 0}, {el: 'H', x: -46, y: 26}, {el: 'H', x: 46, y: 26}]} bonds={[[0, 1], [0, 2]]} r={24} />
			<Mol x={1690} y={250} atoms={[{el: 'O', x: 0, y: 0}, {el: 'H', x: -46, y: 26}, {el: 'H', x: 46, y: 26}]} bonds={[[0, 1], [0, 2]]} r={24} />
			<Sx x={1610} y={330} text="4 H, 2 O" size={34} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
			<EqLine x={EQX} y={EQY} terms={T} nl={2} size={96} />
			{T.map((t, i) => <Tile key={i} f={t.f} x={termX(T, 2, 96, EQX, i, 'middle', true).f} y={EQY + 130} r={32} o={prog(f, K7.here + i * 8, 10) * (i === 1 ? blink : 1)} />)}
			<Tally x={1300} y={400} w={520} size={60} rows={rowsOf(EQ.water, [1, 1, 1], ['H', 'O'], {O: K7.count, H: K7.right})} />
			<PenArrow a={[o2x + 70, EQY + 190]} b={[1700, 700]} at={K7.vanished} color={RED_C} bend={0.25} />
			<Write x={o2x - 120} y={EQY + 240} text="an atom vanished?" at={K7.vanished + 4} size={46} color={RED_C} />
			<Write x={o2x - 120} y={EQY + 320} text="atoms can't vanish" at={K7.that} size={46} color={INK} />
			<Chip x={96} y={790} segs={[{t: 'not balanced yet'}]} at={K7.isnt} size={44} color={ROSE_C} />
			{void K7.so}{void K7.two}{void K7.read}{void ox}
		</svg>
	);
};

// ---------- 8. two kinds of number ----------
const K8 = cues(sc('subscript-coefficient'), {two: 'two kinds', small: 'The small number', says: 'It says how many atoms', is: ['substance is', 1], change: 'Change H two O', peroxide: 'hydrogen peroxide', different: 'a different chemical', big: 'The big number', coefficient: 'is a coefficient', many: 'how many of those', balance: 'To balance an', only: 'only change'});
export const SceneSubCoef: React.FC = () => {
	const f = useCurrentFrame();
	const S = 190, X = 640, Y = 500;
	const per = f >= K8.change + 40 && f < K8.big - 4;
	const ft = per ? 'H_2O_2' : 'H_2O';
	const hw = richW([{t: 'H'}], S);
	const subX = X + hw + S * 0.18, subY = Y + S * 0.2;
	const slot = prog(f, K8.coefficient, 12);
	const T: Term[] = terms(EQ.water, [1, 1, 1]);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Two kinds of number" at={0} />
			<Plate p={GLASS} x={1710 - pw(GLASS, 440) / 2} y={490} h={440} />
			<Sx x={1710} y={985 - 30} text="water, H_2O" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{slot > 0.005 ? <g opacity={slot}>
				<rect x={X - 140} y={Y - S * 0.95} width={120} height={S * 1.15} rx={12} fill="#fff6e6" stroke={AMB_C} strokeWidth={5} strokeDasharray="12 8" />
				<Sx x={X - 80} y={Y} text="2" size={S} color={AMB_CT} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Rich x={X} y={Y} segs={[{t: ft}]} size={S} weight={800} />
			<PenArrow a={[1110, 340]} b={[subX + 20, subY - 30]} at={K8.small} color={INK} bend={-0.2} />
			<Sx x={1120} y={330} text="subscript: atoms in one particle" size={38} color={INK} weight={800} at={K8.says} />
			<PenRing cx={subX + 6} cy={subY - 22} rx={34} ry={44} at={K8.is} color={INK} seed={4} />
			<Write x={1120} y={430} text="locked: fixes the substance" at={K8.is + 4} size={44} color={INK} />
			{/* peroxide: a different substance */}
			{per ? <Tile f={F.H2O2} x={X + 170} y={Y + 170} r={38} /> : <Tile f={F.H2O} x={X + 170} y={Y + 170} r={38} o={1 - prog(f, K8.coefficient, 10)} />}
			<Sx x={X + 170} y={Y + 250} text="one particle: 2 H + 1 O" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K8.coefficient} />
			<Sx x={1120} y={530} text="hydrogen peroxide:" size={38} color={RED_C} weight={800} at={K8.peroxide} out={K8.big - 4} />
			<Sx x={1120} y={574} text="a different substance" size={38} color={RED_C} weight={800} at={K8.peroxide} out={K8.big - 4} />
			{per ? <StrikeLine x1={X - 10} y1={Y - 40} x2={X + 360} y2={Y - 60} at={K8.different} /> : null}
			{/* coefficient: two separate water particles */}
			<Fade at={K8.coefficient + 6}>
				<Tile f={F.H2O} x={X + 40} y={Y + 170} r={38} />
				<Tile f={F.H2O} x={X + 320} y={Y + 170} r={38} />
			</Fade>
			<Sx x={X - 80} y={Y + 270} text="coefficient: how many particles" size={38} color={AMB_CT} weight={800} at={K8.many} />
			{/* the scene 7 equation with empty slots */}
			<EqLine x={760} y={910} terms={T} nl={2} size={56} slots={prog(f, K8.balance, 12)} />
			<Write x={termX(T, 2, 56, 760, 2).slot - 40} y={838} text="change this" at={K8.only} size={42} color={AMB_CT} anchor="middle" />
			<Write x={1160} y={910} text="never the subscript" at={K8.only + 6} size={42} color={INK} />
			{void K8.two}{void K8.big}{void PAPER}
		</svg>
	);
};

// ---------- 9. balancing hydrogen and oxygen (the stepper) ----------
const K9 = cues(sc('balance-water'), {lets: "Let's balance", get: 'To get two', o: 'front of H two O', now: 'Now the right', well: 'as well', count: 'Count again', four: 'Four hydrogen', side: 'each side', two: 'Two hydrogen molecules'});
export const STEPS9: [number, number, number][] = [[K9.o, 2, 2], [K9.well - 8, 0, 2]];
export const SceneBalanceWater: React.FC = () => {
	const f = useCurrentFrame();
	const c = coefAt(f, [1, 1, 1], STEPS9);
	const T = terms(EQ.water, c, [STEPS9[1][0], undefined, STEPS9[0][0]]);
	const rows = rowsOf(EQ.water, c, ['H', 'O']);
	const done = f >= K9.side;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={0} />
			<Plate p={GLASS} x={260 - pw(GLASS, 420) / 2} y={460} h={420} />
			<Sx x={260} y={930} text="water" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<EqLine x={1000} y={320} terms={T} nl={2} slots={1} size={84} />
			{T.map((t, i) => {
				const cx = termX(T, 2, 84, 1000, i).f;
				return Array.from({length: t.c}, (_, k) => <Tile key={`${i}-${k}`} f={t.f} x={cx + (k - (t.c - 1) / 2) * 150} y={440} r={26} o={k === 0 ? 1 : prog(f, (i === 0 ? STEPS9[1][0] : STEPS9[0][0]) + 4, 10)} />);
			})}
			<Tally x={740} y={540} w={560} size={60} rows={rows} />
			<Write x={1340} y={660} text="fixes O, breaks H" at={K9.o + 10} size={44} color={AMB_CT} out={K9.well} />
			<PenArrow a={[1330, 670]} b={[1260, 660]} at={K9.o + 16} color={AMB_CT} bend={0} out={K9.well} />
			<PenRing cx={1020} cy={710} rx={320} ry={170} at={K9.count} color={TEAL_C} seed={6} />
			<Write x={1360} y={800} text="count again" at={K9.count + 4} size={44} color={TEAL_C} />
			<Framed x={1020} y={930} segs={[{t: '2H_2 + O_2 → 2H_2O', c: GREEN_C}, {t: ', balanced'}]} at={K9.side} size={48} anchor="middle" stroke={GREEN_C} />
			<Sx x={1000} y={510} text="2 molecules + 1 molecule → 2 molecules" size={34} color={INK} anchor="middle" weight={800} at={K9.two} />
			{void K9.lets}{void K9.get}{void K9.now}{void K9.four}{void done}
		</svg>
	);
};

// ---------- 10. magnesium and oxygen ----------
const K10 = cues(sc('balance-magnesium'), {now: 'Now magnesium', plus: 'Magnesium plus', gas: 'Oxygen gas is', two: 'two oxygen atoms', right: 'on the right', put: 'Put a two', then: 'then a two', twoMg: 'Two magnesium plus', letter: 'The letter g', crossed: 'crossed into'});
export const SceneBalanceMg: React.FC = () => {
	const f = useCurrentFrame();
	const steps: [number, number, number][] = [[K10.put + 20, 2, 2], [K10.then + 18, 0, 2]];
	const c = coefAt(f, [1, 1, 1], steps);
	const st = f >= K10.letter;
	const T = terms(EQ.mg, c, [steps[1][0], undefined, steps[0][0]]);
	const g = mgoGeo(260, 640, 420);
	const rows = rowsOf(EQ.mg, c, ['Mg', 'O'], {O: K10.two, Mg: K10.put});
	const T2 = terms(EQ.mg, [2, 1, 2], [], true);
	const gX = termX(T2, 2, 52, 1060, 1, 'middle', true);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Plate p={MGO} x={g.x} y={g.y} h={g.h} />
			<Boundary x={g.bowl.x} y={g.bowl.y} w={g.bowl.w} h={g.bowl.h} at={-1000} />
			<Wisps a={[g.powder[0] + 120, g.powder[1] - 150]} b={[g.powder[0] + 6, g.powder[1] + 4]} at={-1000} n={3} spread={26} />
			<Sx x={260} y={700} text="oxygen: 0.16 g" size={34} color={SLATE_C} anchor="middle" weight={800} at={-1000} />
			<Sx x={260} y={740} text="magnesium oxide" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<EqLine x={1000} y={330} terms={T} nl={2} slots={1} size={84} o={prog(f, K10.plus, 12)} />
			<Tally x={1360} y={474} w={460} size={56} rows={rows} />
			{T.map((t, i) => {
				const cx = termX(T, 2, 84, 1000, i).f;
				return Array.from({length: t.c}, (_, k) => <Tile key={`${i}-${k}`} f={t.f} x={cx + (k - (t.c - 1) / 2) * 110} y={440} r={24} />);
			})}
			<Sx x={900} y={520} text="magnesium + oxygen → magnesium oxide" size={38} color={INK} anchor="middle" weight={800} at={K10.plus} />
			<Write x={termX(T, 2, 84, 1000, 2).slot} y={210} text="MgO first" at={K10.right} size={44} color={AMB_CT} anchor="middle" />
			<Framed x={800} y={625} segs={[{t: "2Mg + O_2 → 2MgO", c: GREEN_C}]} at={K10.twoMg} size={52} anchor="middle" stroke={GREEN_C} />
			<Fade at={K10.letter}>
				<EqLine x={1060} y={790} terms={T2} nl={2} size={52} />
				<Sx x={1060} y={864} text="(s) solid, (l) liquid, (g) gas, (aq) dissolved in water" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<PenRing cx={gX.fx + gX.fw - 40} cy={774} rx={44} ry={34} at={K10.letter + 16} color={TEAL_C} seed={3} />
			<Write x={1420} y={800} text="crossed in" at={K10.crossed} size={44} color={TEAL_C} />
			{void K10.now}{void K10.gas}{void st}{void cruPt}{void CRU_N}
		</svg>
	);
};

// ---------- 11. copper carbonate: already balanced ----------
const K11 = cues(sc('copper-carbonate'), {and: 'And copper carbonate', makes: 'C u C O three', count: 'Count it', side: 'each side', balanced: 'already balanced', here: 'Here, the g', crossed: 'crossed out'});
export const SceneCopper: React.FC = () => {
	const f = useCurrentFrame();
	const h = 460, x = 250 - pw(CRU_BL, h) / 2, y = 700 - h;
	const bb = bowlBox(CRU_BL, x, y, h, 16);
	const pp = cruPt(CRU_BL, x, y, h, CRU_N.powder[0], CRU_N.powder[1]);
	const T = terms(EQ.cu, [1, 1, 1]);
	const T2 = terms(EQ.cu, [1, 1, 1], [], true);
	const gX = termX(T2, 1, 52, 1100, 2, 'middle', true);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Plate p={CRU_BL} x={x} y={y} h={h} />
			<Boundary x={bb.x} y={bb.y} w={bb.w} h={bb.h} at={-1000} />
			<Wisps a={[pp[0], pp[1] - 6]} b={[pp[0] + 60, pp[1] - 170]} at={-1000} n={3} spread={26} />
			<Sx x={250} y={750} text="carbon dioxide: 0.88 g" size={34} color={SLATE_C} anchor="middle" weight={800} at={-1000} />
			<EqLine x={1100} y={300} terms={T} nl={1} size={84} o={prog(f, K11.makes - 6, 12)} />
			{T.map((t, i) => <Tile key={i} f={t.f} x={termX(T, 1, 84, 1100, i, 'middle', true).f} y={400} r={24} o={prog(f, K11.makes + i * 10, 10)} />)}
			<Tally x={640} y={440} size={44} rows={rowsOf(EQ.cu, [1, 1, 1], ['Cu', 'C', 'O'], {Cu: K11.count + 10, C: K11.count + 20, O: K11.side})} />
			<PenRing cx={875} cy={576} rx={270} ry={160} at={K11.balanced} color={TEAL_C} seed={8} />
			<Write x={1160} y={520} text="already equal" at={K11.balanced + 4} size={44} color={TEAL_C} />
			<Sx x={1160} y={590} text="no coefficients needed (each is 1)" size={38} color={INK} weight={800} at={K11.balanced + 8} />
			<Fade at={K11.here}>
				<EqLine x={1100} y={820} terms={T2} nl={1} size={52} />
			</Fade>
			<PenRing cx={gX.fx + gX.fw - 40} cy={804} rx={44} ry={34} at={K11.here + 16} color={TEAL_C} seed={3} />
			<Write x={gX.fx + gX.fw + 30} y={830} text="crossed out" at={K11.crossed} size={44} color={TEAL_C} />
			{void K11.and}
		</svg>
	);
};

// ---------- 12. solving mass changes ----------
const K12 = cues(sc('mass-changes'), {cons: 'Conservation of mass', masses: 'The masses of', mg: 'For magnesium', plus: 'plus the oxygen', so: 'so the oxygen', gram1: 'one six of a gram', cu: 'For copper carbonate', makes: 'makes one point', must: 'must be', gram2: 'eight eight of a gram', equation: 'The equation tells', balance: 'The balance tells'});
export const SceneMassChanges: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = span(f, K12.cu - 6, K12.cu + 14);
	const s1 = 48 - 8 * shrink;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Solving mass changes" at={0} />
			<Givens segs={[{t: `Mg ${g2(M.mg)};  MgO ${g2(M.mgo)}     |     CuCO_3 ${g2(M.cuco3)};  CuO ${g2(M.cuo)}     (${ILLUS})`}]} />
			<Sx x={96} y={330} text="mass of reactants = mass of products" size={44} color={TEAL_C} weight={800} at={-1000} />
			<Sx x={1824} y={330} text="find the mass of the gas" size={38} color={INK} anchor="end" weight={800} at={-1000} />
			<Plate p={MGO} x={1700 - pw(MGO, 270) / 2} y={370} h={270} />
			<Plate p={CRU_BL} x={1700 - pw(CRU_BL, 270) / 2} y={660} h={270} />
			{/* magnesium */}
			<Sx x={140} y={430 + 10 * shrink} text={`${M.mg.toFixed(2)} g + m(O_2) = ${M.mgo.toFixed(2)} g`} size={s1} color={INK} weight={800} at={K12.mg} />
			<Sx x={140} y={510 - 20 * shrink} text={`m(O_2) = ${M.mgo.toFixed(2)} − ${M.mg.toFixed(2)} =`} size={s1} color={INK} weight={800} at={K12.so} />
			<Framed x={140 + richW([{t: `m(O_2) = ${M.mgo.toFixed(2)} − ${M.mg.toFixed(2)} = `}], s1)} y={510 - 20 * shrink} segs={[{t: g2(M.o2), c: GREEN_C}]} at={K12.gram1} size={s1} stroke={GREEN_C} />
			<Write x={1240} y={430} text="gas in: the gain" at={K12.gram1 + 6} size={44} color={TEAL_C} out={K12.cu + 10} />
			<Chip x={140} y={570} segs={[{t: `${M.mg.toFixed(2)} + ${M.mgo.toFixed(2)} = ${(M.mg + M.mgo).toFixed(2)} g`}]} at={K12.gram1 + 4} out={K12.cu} size={40} color={RED_C} strike={K12.gram1 + 14} />
			<Write x={700} y={620} text="don't add before and after" at={K12.gram1 + 20} size={42} color={RED_C} out={K12.cu} />
			{/* copper carbonate */}
			<Sx x={140} y={680} text={`${M.cuco3.toFixed(2)} g = ${M.cuo.toFixed(2)} g + m(CO_2)`} size={48} color={INK} weight={800} at={K12.makes} />
			<Sx x={140} y={770} text={`m(CO_2) = ${M.cuco3.toFixed(2)} − ${M.cuo.toFixed(2)} =`} size={48} color={INK} weight={800} at={K12.must - 10} />
			<Framed x={140 + richW([{t: `m(CO_2) = ${M.cuco3.toFixed(2)} − ${M.cuo.toFixed(2)} = `}], 48)} y={770} segs={[{t: g2(M.co2), c: GREEN_C}]} at={K12.gram2} size={48} stroke={GREEN_C} />
			<Write x={1240} y={700} text="gas out: the loss" at={K12.gram2 + 6} size={44} color={TEAL_C} />
			<Chip x={140} y={830} segs={[{t: 'equation: which gas (g)'}]} at={K12.equation} size={40} color={INK} />
			<Chip x={720} y={830} segs={[{t: 'balance: how much'}]} at={K12.balance} size={40} color={INK} />
			{void K12.cons}{void K12.masses}{void K12.mg}{void NAVY_C}{void TickMark}
		</svg>
	);
};

// ---------- 13. one line to remember ----------
const K13 = cues(sc('memory-line'), {here: "Here's a line", atoms: 'Atoms in', change: 'Change the big', never: 'never the small'});
export const SceneMemory: React.FC = () => {
	const eqs: [Eq, number[], number][] = [[EQ.water, [2, 1, 2], 2], [EQ.mg, [2, 1, 2], 2], [EQ.cu, [1, 1, 1], 1]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="One line to remember" at={0} />
			{eqs.map(([e, c, nl], i) => (
				<g key={i}>
					<EqLine x={120} y={330 + i * 110} terms={terms(e, c)} nl={nl} size={48} anchor="start" />
					<TickMark x={720} y={316 + i * 110} at={-1000} color={TEAL_C} />
				</g>
			))}
			<rect x={860} y={230} width={964} height={430} rx={24} fill={PAPER} stroke={INK} strokeWidth={5} />
			<Sx x={890} y={278} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Write x={900} y={380} text="Atoms in, atoms out." at={K13.atoms} size={64} color={TEAL_C} />
			<Write x={900} y={480} text="Change the big number in front," at={K13.change} size={50} color={AMB_CT} />
			<Write x={900} y={560} text="never the small number inside." at={K13.never} size={50} color={INK} />
			{/* the example: 2H2O with its two kinds of number ringed */}
			<Rich x={960} y={840} segs={[{t: '2', c: AMB_CT}, {t: 'H_2O'}]} size={110} anchor="middle" weight={800} />
			<PenRing cx={960 - richW([{t: '2H_2O'}], 110) / 2 + 30} cy={800} rx={44} ry={56} at={K13.change} color={AMB_C} seed={3} />
			<PenRing cx={960 - richW([{t: '2H_2O'}], 110) / 2 + richW([{t: '2H'}], 110) + 18} cy={830} rx={30} ry={38} at={K13.never} color={INK} seed={4} />
			{void K13.here}{void ROSE_C}{void EqLine}
		</svg>
	);
};
export type {PDef};
