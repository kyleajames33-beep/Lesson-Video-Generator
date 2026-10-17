import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, GHOST, Heading, S_INK, WHITE_INK, sc} from './common';
import {MEAL, SAT} from './assets';
import {ALine, AMBER, AMBER_INK, BD, CoefChip, CompareBars, CurveArrow, EqLine, Fade, GivensCard, IceS, INK, INK_SOFT, MistakeChip, Overlay, PicH, Ring, RootOver, RowLetters, Struck, Sx, SwarmLens, TEAL, TaskLine, Tick, cardH, cellS, dissEq, eCentre, mw, picW, platePt, segXs, segsW, subPt} from './parts';
import type {IceRow, MPiece} from './parts';

const B = BD;
const ice = (...rows: IceRow[]) => rows;

// ---------- shared board for BaSO4 ----------
export const BA_EQ = (ats: number[] | number) => dissEq('BaSO_4(s)', 'Ba^{2+}(aq)', 'SO_4^{2-}(aq)', ats);
export const BA_COLS = (a: number) => [{name: 'Ba^{2+}', at: a, color: CAT_INK}, {name: 'SO_4^{2-}', at: a + 6, color: AN_INK}];
const BaCard: React.FC<{at: number; a1: number; a2: number}> = ({at, a1, a2}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={B.card.w} h={cardH(2)} at={at} lh={B.card.lh} lines={[
		{text: 'Ksp(BaSO_4) = 1.08 × 10^{−10} (25 °C)', at: a1, size: B.card.s},
		{text: 'in pure water', at: a2, size: B.card.s},
	]} />
);
const Plate: React.FC<{label: string; at: number; h?: number}> = ({label, at, h = B.plate.h}) => (
	<Fade at={at}>
		<PicH p={SAT} x={B.plate.x} y={B.plate.y} h={h} />
		<Sx x={B.plate.x + picW(SAT, h) / 2} y={B.plate.y + h + 40} text={label} size={30} color={INK_SOFT} anchor="middle" hand at={at} />
	</Fade>
);

// ---------- 6. Worked example 1: the ICE table (barium sulfate) ----------
const W1 = 'baso4-ice';
const K6 = cues(sc(W1), {table: 'I C E table', i: 'I for initial', c: 'C for change', e: 'E for equilibrium', pure: 'pure water', zero: 'zero', diss: 's dissolves', plus: 'plus s', eqrow: 'the equilibrium row', ss: ['s and s', 1], solid: 'The solid gets', col: 'no column'});
export const SceneBaIce: React.FC = () => {
	const eq = BA_EQ(6);
	const cell = (r: number, c: number) => cellS(B.ice.x, B.ice.y, B.ice.s, r, c);
	const ca = eCentre(eq.items, eq.ix.cat, B.strip.s, B.strip.x, B.strip.y), an = eCentre(eq.items, eq.ix.an, B.strip.s, B.strip.x, B.strip.y);
	const sAt = K6.ss + 12;
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for BaSO_4 in water" at={0} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<BaCard at={10} a1={12} a2={K6.pure} />
				<Plate label="saturated BaSO_4(aq)" at={16} />
				<RowLetters x={B.ice.x} y={B.ice.y} letterAt={K6.table} expand={[K6.i, K6.c, K6.e]} />
				<IceS x={B.ice.x} y={B.ice.y} outlineAt={K6.table - 10} solid={{name: 'BaSO_4(s)', at: K6.table, ring: K6.col, ringOut: K6.col + 70}} cols={BA_COLS(K6.table + 4)} rows={ice(
					{at: K6.i, labelAt: K6.i, lit: [K6.zero - 6, K6.diss], cells: [{text: '0', at: K6.zero}, {text: '0', at: K6.zero + 6}]},
					{at: K6.c, labelAt: K6.c, lit: [K6.plus - 6, K6.eqrow], cells: [{text: '+s', at: K6.plus + 6, color: S_INK}, {text: '+s', at: K6.plus + 14, color: S_INK}]},
					{at: K6.e, labelAt: K6.e, lit: [K6.eqrow, K6.solid], cells: [{text: 's', at: K6.ss, color: S_INK}, {text: 's', at: sAt, color: S_INK}]},
				)} />
				<CoefChip from={[ca[0] - 50, ca[1]]} to={[cell(1, 0)[0] - 50, cell(1, 0)[1]]} at={K6.plus - 24} text="1" />
				<CoefChip from={[an[0] - 60, an[1]]} to={[cell(1, 1)[0] - 50, cell(1, 1)[1]]} at={K6.plus - 16} text="1" />
				<Sx x={1484} y={cell(0, 1)[1] + 12} text="pure water:" size={32} color={INK_SOFT} hand at={K6.pure} />
				<Sx x={1484} y={cell(0, 1)[1] + 50} text="no ions at the start" size={32} color={INK_SOFT} hand at={K6.pure + 8} />
				<Sx x={1484} y={cell(1, 1)[1] + 30} text="each unit gives 1 of each" size={30} color={AMBER_INK} hand at={K6.plus} />
				<Sx x={B.ice.x} y={600} text="s = mol/L of BaSO_4 that dissolves" size={36} color={S_INK} hand at={K6.diss} />
				<Sx x={B.ice.x} y={660} text="the solid gets no column in Ksp" size={36} color={INK_SOFT} hand at={K6.col} />
			</Overlay>
		</>
	);
};

// ---------- 7. Worked example 1: solve, check and what it means ----------
const W2 = 'baso4-solve';
const K7 = cues(sc(W2), {sub: 'Substitute', ksp: 'Ksp is s', times: 's times s', sq: 's squared', eq: 'equals 1.08', root: 'Take the square root', val: '1.04 times', mpl: ['moles per litre', 1], check: 'Check', gives: 'gives 1.08', mult: 'Multiply by the molar', g: '233 grams', mg: '2.4 milligrams', litre: 'whole litre', barely: "That's what barely"});
export const BaIceDone: React.FC<{dimRows?: boolean}> = ({dimRows = true}) => (
	<IceS x={B.ice.x} y={B.ice.y} solid={{name: 'BaSO_4(s)', at: -100}} cols={BA_COLS(-100)} rows={ice(
		{at: -100, dim: dimRows ? [0, 0, 0.4] : undefined, cells: [{text: '0', at: -100}, {text: '0', at: -100}]},
		{at: -100, dim: dimRows ? [0, 0, 0.4] : undefined, cells: [{text: '+s', at: -100, color: S_INK}, {text: '+s', at: -100, color: S_INK}]},
		{at: -100, lit: [-100, 99999], cells: [{text: 's', at: -100, color: S_INK}, {text: 's', at: -100, color: S_INK}]},
	)} />
);
export const SceneBaSolve: React.FC = () => {
	const eq = BA_EQ(-100);
	const A = B.alg;
	const l2: MPiece[] = [{t: 's^{2}', at: K7.eq - 10, color: S_INK, gap: 34}, {t: '=', at: K7.eq, gap: 64}, {t: '1.08 × 10^{−10}', at: K7.eq + 10}];
	const x2 = segXs(l2, A.x, A.s);
	const y2 = A.y + 90;
	const l3: MPiece[] = [{t: 's = 1.04 × 10^{−5} mol/L', at: K7.val, color: S_INK}];
	const l4: MPiece[] = [{t: 'check:', at: K7.check, hand: true, color: INK_SOFT, size: 34}, {t: '(1.04 × 10^{−5})^{2} = 1.08 × 10^{−10}', at: K7.check + 26, color: INK_SOFT, size: 34}];
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for BaSO_4 in water" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<BaCard at={-100} a1={-100} a2={-100} />
				<BaIceDone />
				<ALine x={A.x} y={A.y} items={[{t: 'Ksp = [Ba^{2+}][SO_4^{2-}]', at: K7.sub}, {t: '= s × s', at: K7.times, color: S_INK}, {t: '= s^{2}', at: K7.sq, color: S_INK}]} />
				<ALine x={A.x} y={y2} items={l2} />
				<RootOver x0={x2[0].x} w={x2[0].w} y={y2} size={A.s} at={K7.root} />
				<RootOver x0={x2[2].x} w={x2[2].w} y={y2} size={A.s} at={K7.root + 8} />
				<Sx x={A.x + segsW(l2, A.s) + 70} y={y2} text="square root of both sides" size={38} color={AMBER_INK} hand at={K7.root + 4} />
				<ALine x={A.x} y={y2 + 90} items={l3} />
				<Tick x={A.x + segsW(l3, A.s) + 44} y={y2 + 76} at={K7.mpl} s={40} />
				<ALine x={A.x} y={y2 + 166} items={l4} size={34} />
				<Tick x={A.x + segsW(l4, 34) + 40} y={y2 + 154} at={K7.gives + 10} s={34} />
				{/* what it means: mass per litre */}
				<GivensCard x={B.card.x} y={500} w={B.card.w} h={170} at={K7.mult} title="in grams per litre" lh={48} lines={[
					{text: '1.04 × 10^{−5} mol/L × 233 g/mol', at: K7.g - 6, size: 30},
					{text: '= 2.4 × 10^{−3} g/L', at: K7.mg - 10, size: 32, color: TEAL},
				]} />
				<Fade at={K7.mg}><PicH p={MEAL} x={B.plate.x} y={700} h={270} /></Fade>
				<Sx x={290} y={800} text="about 2.4 mg" size={40} color={AMBER_INK} hand at={K7.mg + 6} />
				<Sx x={290} y={846} text="per litre dissolves" size={36} color={AMBER_INK} hand at={K7.litre} />
				<Sx x={290} y={920} text="that is barely" size={34} color={INK_SOFT} hand at={K7.barely} />
				{void K7.ksp}
			</Overlay>
		</>
	);
};

// ---------- 8. Worked example 2: calcium fluoride (fluoride is 2s) ----------
const W3 = 'caf2-setup';
const K8 = cues(sc(W3), {now: 'Now calcium fluoride', ksp: 'Ksp of 3.45', each: 'Each formula unit', oneCa: 'one calcium ion', twoF: 'two fluoride ions', caRises: 'calcium rises by s', fRises: 'fluoride rises by', twoS: ['by two s', 1], eqrow: 'The equilibrium row', sAnd: ['s and two s', 1], sub: 'Substitute', kspIs: 'Ksp is s', allSq: ['all squared', 1], twoSAll: 'Two s all squared', fourSq: 'four s squared', not: 'not two s squared', fourCubed: 'four s cubed'});
export const CA_EQ = (ats: number[] | number) => dissEq('CaF_2(s)', 'Ca^{2+}(aq)', 'F^{-}(aq)', ats, {anCoef: '2'});
export const CA_COLS = (a: number) => [{name: 'Ca^{2+}', at: a, color: CAT_INK}, {name: 'F^{-}', at: a + 6, color: AN_INK}];
const CaCard: React.FC<{at: number; a1: number}> = ({at, a1}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={B.card.w} h={cardH(2)} at={at} lh={B.card.lh} lines={[
		{text: 'Ksp(CaF_2) = 3.45 × 10^{−11} (25 °C)', at: a1, size: B.card.s},
		{text: 'in pure water', at: a1 + 20, size: B.card.s},
	]} />
);
export const SceneCaSetup: React.FC = () => {
	const eq = CA_EQ([K8.now, K8.now + 6, K8.now + 10, K8.now + 14, K8.now + 18]);
	const cell = (r: number, c: number) => cellS(B.ice.x, B.ice.y, B.ice.s, r, c);
	const coef = eCentre(eq.items, eq.ix.anCoef, B.strip.s, B.strip.x, B.strip.y);
	const P = {x: 96, y: 600, h: 280};
	const fl = platePt(SAT, P.x, P.y, P.h, 0.62, 0.86);
	const L = {cx: 500, cy: 760, r: 150};
	const A = B.alg;
	const l1: MPiece[] = [{t: 'Ksp = [Ca^{2+}][F^{−}]^{2}', at: K8.kspIs - 10}, {t: '= s ×', at: K8.kspIs + 20, color: S_INK}, {t: '(2s)^{2}', at: K8.kspIs + 50, color: S_INK}];
	const x1 = segXs(l1, A.x, A.s);
	const l2: MPiece[] = [{t: '(2s)^{2} = 2s × 2s', at: K8.twoSAll, color: S_INK}, {t: '= 4s^{2}', at: K8.fourSq, color: S_INK}];
	const l3: MPiece[] = [{t: 'Ksp = 4s^{3}', at: K8.fourCubed, color: TEAL, size: 50}];
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for CaF_2 in water" at={K8.now} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<CaCard at={K8.ksp - 10} a1={K8.ksp} />
				<Fade at={K8.now + 10}><PicH p={SAT} x={P.x} y={P.y} h={P.h} /></Fade>
				<Sx x={P.x + picW(SAT, P.h) / 2} y={P.y + P.h + 40} text="saturated CaF_2(aq)" size={28} color={INK_SOFT} anchor="middle" hand at={K8.now + 14} />
				<Fade at={K8.each - 20}><path d={`M${fl[0]},${fl[1]} L${L.cx - L.r},${L.cy + 20}`} stroke={INK_SOFT} strokeWidth={3} /></Fade>
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={K8.each - 20} cat="Ca^{2+}" an="F^{-}" k={2} nFree={1} scale={0.6} units={[{at: K8.oneCa - 10, kind: 'split', slot: 3, ring: K8.twoF}]} title="one CaF_2 unit" titleAt={K8.each} />
				<IceS x={B.ice.x} y={B.ice.y} outlineAt={K8.now} solid={{name: 'CaF_2(s)', at: K8.now + 10}} cols={CA_COLS(K8.now + 10)} rows={ice(
					{at: K8.now + 16, cells: [{text: '0', at: K8.each}, {text: '0', at: K8.each + 6}]},
					{at: K8.now + 22, lit: [K8.caRises, K8.eqrow], cells: [{text: '+s', at: K8.caRises + 26, color: S_INK}, {text: '+2s', at: K8.twoS + 4, color: S_INK}]},
					{at: K8.now + 28, lit: [K8.eqrow, K8.sub], cells: [{text: 's', at: K8.sAnd, color: S_INK}, {text: '2s', at: K8.sAnd + 17, color: S_INK}]},
				)} />
				<CoefChip from={[coef[0], coef[1]]} to={[cell(1, 1)[0] - 60, cell(1, 1)[1]]} at={K8.fRises} />
				<ALine x={A.x} y={A.y} items={l1} />
				<Ring cx={x1[2].x + x1[2].w / 2} cy={A.y - 16} rx={x1[2].w / 2 + 8} ry={38} at={K8.allSq} color={AMBER} seed={4} />
				<ALine x={A.x} y={A.y + 82} items={l2} />
				<MistakeChip x={A.x + segsW(l2, A.s) + 40} y={A.y + 82 - 50} text="2s^{2}" size={34} at={K8.not} w={190} />
				<ALine x={A.x} y={A.y + 176} items={l3} size={50} />
				<Ring cx={A.x + segsW(l3, 50) / 2} cy={A.y + 160} rx={segsW(l3, 50) / 2 + 26} ry={46} at={K8.fourCubed + 10} color={TEAL} seed={7} />
				{void K8.sub}
			</Overlay>
		</>
	);
};

// ---------- 9. Worked example 2: divide by four, then the cube root ----------
const W4 = 'caf2-solve';
const K9 = cues(sc(W4), {four: 'Four s cubed equals', div: 'Divide both sides by four', s3: 's cubed is', root: 'take the cube root', val: '2.05 times', mpl: ['moles per litre', 1], fl: 'The fluoride concentration', two: 'is two s', v410: '4.10'});
export const CaIceDone: React.FC<{tags?: [number, number]}> = ({tags}) => (
	<IceS x={B.ice.x} y={B.ice.y} solid={{name: 'CaF_2(s)', at: -100}} cols={CA_COLS(-100)} rows={ice(
		{at: -100, dim: [0, 0, 0.4], cells: [{text: '0', at: -100}, {text: '0', at: -100}]},
		{at: -100, dim: [0, 0, 0.4], cells: [{text: '+s', at: -100, color: S_INK}, {text: '+2s', at: -100, color: S_INK}]},
		{at: -100, lit: [-100, 99999], cells: [
			{text: 's', at: -100, color: S_INK, tag: tags ? {text: '2.05 × 10^{−4}', at: tags[0], color: TEAL} : undefined},
			{text: '2s', at: -100, color: S_INK, tag: tags ? {text: '4.10 × 10^{−4}', at: tags[1], color: TEAL} : undefined},
		]},
	)} />
);
export const SceneCaSolve: React.FC = () => {
	const eq = CA_EQ(-100);
	const A = B.alg;
	const l1: MPiece[] = [{t: '4s^{3}', at: 0, color: S_INK}, {t: '=', at: K9.four + 30}, {t: '3.45 × 10^{−11}', at: K9.four + 50}];
	const l2: MPiece[] = [{t: 's^{3}', at: K9.s3, color: S_INK, gap: 34}, {t: '=', at: K9.s3 + 20, gap: 70}, {t: '8.63 × 10^{−12}', at: K9.s3 + 30}];
	const ya = [A.y, A.y + 80, A.y + 164, A.y + 236, A.y + 292, A.y + 356];
	const x2 = segXs(l2, A.x, A.s);
	const l3: MPiece[] = [{t: 's = 2.05 × 10^{−4} mol/L', at: K9.val, color: S_INK}];
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for CaF_2 in water" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<CaCard at={-100} a1={-100} />
				<PicH p={SAT} x={96} y={600} h={280} />
				<Sx x={96 + picW(SAT, 280) / 2} y={920} text="saturated CaF_2(aq)" size={28} color={INK_SOFT} anchor="middle" hand at={-100} />
				<CaIceDone />
				<ALine x={A.x} y={ya[0]} items={l1} />
				<Sx x={A.x + segsW(l1, A.s) + 60} y={ya[0]} text="divide both sides by 4" size={36} color={AMBER_INK} hand at={K9.div} />
				<ALine x={A.x} y={ya[1]} items={l2} />
				<RootOver x0={x2[0].x} w={x2[0].w} y={ya[1]} size={A.s} at={K9.root} cube />
				<RootOver x0={x2[2].x} w={x2[2].w} y={ya[1]} size={A.s} at={K9.root + 8} cube />
				<Sx x={A.x + segsW(l2, A.s) + 60} y={ya[1] - 10} text="cube root of both sides" size={36} color={AMBER_INK} hand at={K9.root + 4} />
				<Sx x={A.x + segsW(l2, A.s) + 60} y={ya[1] + 30} text="calculator: ^(1/3)" size={28} color={INK_SOFT} weight={600} at={K9.root + 16} />
				<ALine x={A.x} y={ya[2]} items={l3} />
				<Tick x={A.x + segsW(l3, A.s) + 44} y={ya[2] - 14} at={K9.mpl} s={40} />
				<ALine x={A.x} y={ya[3]} items={[{t: '[F^{−}] = 2s = 4.10 × 10^{−4} mol/L', at: K9.two, color: AN_INK}]} size={36} />
				<ALine x={A.x} y={ya[4]} items={[{t: '[Ca^{2+}] = s = 2.05 × 10^{−4} mol/L', at: K9.v410 + 30, color: CAT_INK}]} size={36} />
				<ALine x={A.x} y={ya[5]} items={[{t: 'check:', at: 720, hand: true, color: INK_SOFT}, {t: '4 × (2.05 × 10^{−4})^{3} = 3.45 × 10^{−11}', at: 726, color: INK_SOFT}]} size={30} />
				<Tick x={A.x + segsW([{t: 'check:', at: 0, hand: true}, {t: '4 × (2.05 × 10^{−4})^{3} = 3.45 × 10^{−11}', at: 0}], 30) + 36} y={ya[5] - 10} at={750} s={30} />
				{void K9.fl}
			</Overlay>
		</>
	);
};

// ---------- 10. The trap: s instead of 2s ----------
const W5 = 'trap-2s';
const K10 = cues(sc(W5), {slip: 'classic slip', writing: 'writing s for fluoride', instead: 'instead of two s', looks: 'Ksp looks like', cubed: 's cubed', v326: '3.26 times', big: 'too big', two: 'The two comes', formula: 'from the formula', inside: 'inside the bracket', before: 'before you square'});
export const SceneTrap: React.FC = () => {
	const f = useCurrentFrame();
	const S = {x: 96, y: 246, s: 40};
	const eq = CA_EQ(-100);
	const sp = subPt(eq.items, eq.ix.solid, S.s, S.x, S.y, 'CaF', '2');
	const T = {y: 362, s: 0.55};
	const real: IceRow[] = [
		{at: -100, dim: [0, 0, 0.35], cells: [{text: '0', at: -100}, {text: '0', at: -100}]},
		{at: -100, dim: [0, 0, 0.35], cells: [{text: '+s', at: -100, color: S_INK}, {text: '+2s', at: -100, color: S_INK}]},
		{at: -100, cells: [{text: 's', at: -100, color: S_INK}, {text: '2s', at: -100, color: S_INK}]},
	];
	const ghost: IceRow[] = [
		{at: K10.slip, dim: [0, 0, 0.35], cells: [{text: '0', at: K10.slip}, {text: '0', at: K10.slip}]},
		{at: K10.slip, dim: [0, 0, 0.35], cells: [{text: '+s', at: K10.slip, color: S_INK}, {text: '+s', at: K10.writing, color: GHOST}]},
		{at: K10.slip, cells: [{text: 's', at: K10.slip, color: S_INK}, {text: 's', at: K10.writing + 8, color: GHOST}]},
	];
	const g = {x: 640};
	const yL = 880, sL = 64;
	const big: MPiece[] = [{t: 'Ksp = s ×', at: K10.two}, {t: '(2s)^{2}', at: K10.two, color: S_INK}];
	const bx = segXs(big, 380, sL);
	const twoX = bx[1].x + mw('(', sL) + mw('2', sL) / 2;
	const pulse = 1 + 0.25 * Math.max(0, Math.sin(Math.min(1, Math.max(0, f - K10.inside) / 30) * Math.PI));
	return (
		<>
			<Heading text="The classic slip: s instead of 2s" at={4} size={56} />
			<Overlay>
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<Sx x={96 + 187} y={T.y - 12} text="right" size={32} color={TEAL} anchor="middle" hand at={0} />
				<IceS x={96} y={T.y} s={T.s} cols={CA_COLS(-100)} rows={real} />
				<Sx x={g.x + 187} y={T.y - 12} text="the slip" size={32} color={GHOST} anchor="middle" hand at={K10.slip} />
				<IceS x={g.x} y={T.y} s={T.s} outlineAt={K10.slip - 20} cols={CA_COLS(K10.slip)} rows={ghost} />
				<Struck x={g.x} y={650} text="Ksp = s × s^{2} = s^{3}" size={40} at={K10.looks} strike={K10.v326 + 40} />
				<Struck x={g.x} y={720} text="s = 3.26 × 10^{−4}" size={40} at={K10.v326} strike={K10.v326 + 48} />
				<CompareBars x={1100} y={380} scale={150} rows={[
					{label: 'from the slip: 3.26 × 10^{−4}', v: 3.26, color: GHOST, at: K10.v326},
					{label: 'right: 2.05 × 10^{−4}', v: 2.05, color: S_INK, at: K10.v326 + 30},
				]} />
				<Sx x={1100} y={590} text="1.59 × too big" size={48} color={AMBER_INK} hand at={K10.big - 10} />
				{/* the 2 comes from the formula and goes inside the bracket */}
				<ALine x={380} y={yL} items={big} size={sL} />
				<g transform={`translate(${twoX},${yL - 22}) scale(${pulse}) translate(${-twoX},${-(yL - 22)})`}>
					<Ring cx={twoX} cy={yL - 22} rx={30} ry={44} at={K10.inside} color={AMBER} seed={5} />
				</g>
				{/* pen line: from the subscript, over the tables, down the gap between them, into the bracket */}
				<DrawPath d={`M${sp[0]},${sp[1] + 14} Q${sp[0]},${296} ${sp[0] + 40},${296} L${515},${296} Q${555},${296} ${555},${336} L${555},${720} Q${555},${800} ${twoX - 30},${yL - 46}`} at={K10.formula} dur={34} color={AMBER_INK} width={5} />
				<path d={`M${twoX - 30 - 24},${yL - 46 - 14} L${twoX - 30},${yL - 46} L${twoX - 30 - 20},${yL - 46 + 16}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, K10.formula + 30, 8)} />
				<Sx x={bx[1].x + bx[1].w + 50} y={yL - 14} text="the 2 goes inside," size={40} color={AMBER_INK} hand at={K10.inside + 6} />
				<Sx x={bx[1].x + bx[1].w + 50} y={yL + 34} text="then square" size={40} color={AMBER_INK} hand at={K10.before} />
				{void K10.instead}{void K10.cubed}{void INK}
			</Overlay>
		</>
	);
};
void WHITE_INK; void Tick; void INK_SOFT;
