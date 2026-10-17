import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, Heading, S_INK, WHITE_INK, sc} from './common';
import {SAT} from './assets';
import {ALine, AMBER, AMBER_INK, BD, CoefChip, CurveArrow, EIBracket, EqLine, ExpLabels, Fade, GivensCard, HBracket, IceS, INK, INK_SOFT, LogLine, MistakeChip, Overlay, PicH, Pin, Ring, Struck, Sx, TEAL, Tag, TaskLine, cardH, cardLineY, cellS, dissEq, eCentre, lgx, mw, picW, pulseAt, segsW} from './parts';
import type {IceRow, Ln, MPiece} from './parts';

const B = BD;
const ice = (...rows: IceRow[]) => rows;

// ---------- 11. Bigger Ksp, less soluble: compare like with like ----------
const C11 = 'compare-ksp';
const K11 = cues(sc(C11), {compare: 'compare the two salts', ba: 'Barium sulfate has', bigger: ['bigger Ksp', 1], but: 'but calcium', twenty: 'twenty times bigger', how: 'How', baSq: ["sulfate's Ksp is s squared", 1], ca4: "fluoride's is four s cubed", diff: 'different powers', scale: 'same scale', cmp: 'Compare Ksp values', only: 'only for the same formula type', like: 'like barium sulfate against', agcl: 'silver chloride', other: 'Otherwise', calc: 'calculate s for each'});
export const SceneCompare: React.FC = () => {
	const f = useCurrentFrame();
	const rowY = [326, 400];
	const col = {salt: 130, ksp: 390, s: 800, pow: 1320};
	const ln: Ln = {y: 650, x0: 300, x1: 1300, lo: -6, hi: -3};
	const xa = lgx(1.04e-5, ln), xb = lgx(2.05e-4, ln);
	const pz = pulseAt(f, K11.diff, 0.18, 30);
	return (
		<>
			<Heading text="Bigger Ksp, more soluble?" at={4} size={60} />
			<Overlay>
				<Fade at={K11.compare}><rect x={96} y={200} width={1180} height={240} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} /></Fade>
				<Sx x={col.salt} y={256} text="salt" size={30} color={INK_SOFT} hand at={K11.compare} />
				<Sx x={col.ksp} y={256} text="Ksp (25 °C)" size={30} color={INK_SOFT} hand at={K11.compare} />
				<Sx x={col.s} y={256} text="molar solubility, s" size={30} color={INK_SOFT} hand at={K11.but} />
				<Sx x={col.salt} y={rowY[0]} text="BaSO_4" size={40} color={WHITE_INK} at={K11.compare + 6} />
				<Sx x={col.ksp} y={rowY[0]} text="1.08 × 10^{−10}" size={40} color={TEAL} at={K11.compare + 6} />
				<Sx x={col.s} y={rowY[0]} text="1.04 × 10^{−5} mol/L" size={40} color={S_INK} at={K11.but + 10} />
				<Sx x={col.salt} y={rowY[1]} text="CaF_2" size={40} color={WHITE_INK} at={K11.compare + 12} />
				<Sx x={col.ksp} y={rowY[1]} text="3.45 × 10^{−11}" size={40} color={TEAL} at={K11.compare + 12} />
				<Sx x={col.s} y={rowY[1]} text="2.05 × 10^{−4} mol/L" size={40} color={S_INK} at={K11.but + 20} />
				<Ring cx={col.ksp + 140} cy={rowY[0] - 14} rx={160} ry={38} at={K11.bigger} out={K11.how} color={AMBER} seed={3} />
				<Ring cx={col.s + 190} cy={rowY[1] - 14} rx={210} ry={38} at={K11.twenty} out={K11.diff} color={AMBER} seed={6} />
				{/* the formula powers */}
				<g transform={`translate(${col.pow + 40},${rowY[0] - 14}) scale(${pz}) translate(${-(col.pow + 40)},${-(rowY[0] - 14)})`}>
					<Sx x={col.pow} y={rowY[0]} text="Ksp = s^{2}" size={40} color={S_INK} at={K11.baSq + 20} />
				</g>
				<g transform={`translate(${col.pow + 40},${rowY[1] - 14}) scale(${pz}) translate(${-(col.pow + 40)},${-(rowY[1] - 14)})`}>
					<Sx x={col.pow} y={rowY[1]} text="Ksp = 4s^{3}" size={40} color={S_INK} at={K11.ca4 + 20} />
				</g>
				<Sx x={col.pow} y={466} text="different powers: not on one scale" size={32} color={AMBER_INK} hand at={K11.diff} />
				{/* solubilities on a power-of-ten line */}
				<LogLine ln={ln} at={K11.but} labels={false} />
				<ExpLabels ln={ln} at={K11.but + 10} />
				<Pin ln={ln} v={1.04e-5} at={K11.but + 14} label="BaSO_4" color={S_INK} />
				<Pin ln={ln} v={2.05e-4} at={K11.but + 24} label="CaF_2" color={S_INK} />
				<Sx x={ln.x1 + 40} y={ln.y + 10} text="s (mol/L)" size={30} color={INK_SOFT} hand at={K11.but + 10} />
				<HBracket x1={xa} x2={xb} y={530} at={K11.twenty} d={18} color={AMBER_INK} />
				<Sx x={(xa + xb) / 2} y={512} text="about 20 × bigger" size={38} color={AMBER_INK} anchor="middle" hand at={K11.twenty + 8} />
				<MistakeChip x={1330} y={540} text="smaller Ksp, so less soluble" size={30} at={K11.how} />
				{/* the rule */}
				<Fade at={K11.cmp}><rect x={96} y={740} width={1420} height={290} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<Sx x={130} y={800} text="Compare Ksp directly only for the same ion ratio (1 : 1 with 1 : 1)." size={40} color={INK} hand at={K11.cmp} />
				<Sx x={130} y={860} text="BaSO_4 (1.08 × 10^{−10}) vs AgCl (1.77 × 10^{−10}): both 1 : 1," size={32} color={INK} weight={600} at={K11.like} />
				<Sx x={130} y={908} text="so AgCl, with the bigger Ksp, is more soluble" size={32} color={INK} weight={600} at={K11.agcl + 10} />
				<Sx x={130} y={984} text="Otherwise, calculate s for each." size={44} color={TEAL} hand at={K11.other} />
				{void K11.ba}{void K11.scale}{void K11.only}{void K11.calc}{void mw}
			</Overlay>
		</>
	);
};

// ---------- shared board for Mg(OH)2 ----------
export const MG_EQ = (ats: number[] | number) => dissEq('Mg(OH)_2(s)', 'Mg^{2+}(aq)', 'OH^{-}(aq)', ats, {anCoef: '2'});
const MG_COLS = (a: number) => [{name: 'Mg^{2+}', at: a, color: CAT_INK}, {name: 'OH^{-}', at: a + 6, color: AN_INK}];
const MgCard: React.FC<{at: number; a1: number; a2: number}> = ({at, a1, a2}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={B.card.w} h={cardH(3)} at={at} lh={B.card.lh} lines={[
		{text: 'dissolved Mg(OH)_2:', at: a1, size: B.card.s},
		{text: '1.12 × 10^{−4} mol/L', at: a1 + 8, size: B.card.s, color: S_INK},
		{text: 'measured at 25 °C', at: a2, size: B.card.s},
	]} />
);
const MgPlate: React.FC<{at: number}> = ({at}) => (
	<Fade at={at}>
		<PicH p={SAT} x={96} y={660} h={260} />
		<Sx x={96 + picW(SAT, 260) / 2} y={960} text="saturated Mg(OH)_2(aq)" size={28} color={INK_SOFT} anchor="middle" hand at={at} />
	</Fade>
);
const NUM = 34;

// ---------- 12a. Backwards: a measured solubility goes into the E row first ----------
const R1 = 'reverse-erow';
const K12 = cues(sc(R1), {back: 'works backwards', sat: 'saturated magnesium hydroxide', val: '1.12 times', mpl: 'moles per litre', diss: 'of dissolved magnesium', meas: 'measured value', erow: 'equilibrium row first', mg: 'magnesium ions', change: 'The change is', eMinus: 'equilibrium minus initial', same: 'the same amount'});
export const SceneReverseE: React.FC = () => {
	const eq = MG_EQ([K12.sat, K12.sat + 8, K12.sat + 16, K12.sat + 24, K12.sat + 30]);
	const cell = (r: number, c: number) => cellS(B.ice.x, B.ice.y, B.ice.s, r, c);
	const e = cell(2, 0), iC = cell(0, 0);
	const xR = B.ice.x + B.ice.s * (240 + 220 * 2) + 26;
	const src: [number, number] = [B.card.x + 28 + mw('1.12 × 10^{−4} mol/L', B.card.s) + 16, cardLineY(1) - 12];
	return (
		<>
			<Overlay>
				<TaskLine text="Find Ksp for Mg(OH)_2" at={K12.back} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<MgCard at={K12.val - 20} a1={K12.val - 8} a2={K12.meas} />
				<MgPlate at={K12.sat} />
				<IceS x={B.ice.x} y={B.ice.y} outlineAt={K12.sat} solid={{name: 'Mg(OH)_2(s)', at: K12.sat + 10}} cols={MG_COLS(K12.sat + 10)} rows={ice(
					{at: K12.sat + 16, cells: [{text: '0', at: K12.sat + 40}, {text: '0', at: K12.sat + 46}]},
					{at: K12.sat + 22, lit: [K12.change, K12.same + 40], cells: [{text: '+1.12 × 10^{−4}', at: K12.same, color: S_INK, size: NUM}, null]},
					{at: K12.sat + 28, lit: [K12.erow, K12.change], cells: [{text: '1.12 × 10^{−4}', at: K12.erow + 30, color: S_INK, size: NUM}, null]},
				)} />
				<CurveArrow d={[src, [620, 560], [900, 600], [e[0] - 100, e[1] + 30]]} at={K12.erow - 4} dur={30} out={K12.change} />
				<Ring cx={e[0]} cy={e[1]} rx={96} ry={38} at={K12.erow + 34} out={K12.change + 20} color={AMBER} seed={8} />
				<Sx x={B.ice.x} y={590} text="a measured value is an equilibrium value" size={34} color={INK_SOFT} hand at={K12.meas} />
				<EIBracket x={xR} yTop={iC[1]} yBot={e[1]} at={K12.eMinus} size={40} />
				<ALine x={B.ice.x} y={680} items={[{t: '1.12 × 10^{−4} − 0', at: K12.eMinus + 10}, {t: '= +1.12 × 10^{−4}', at: K12.same - 10, color: S_INK}]} size={40} />
				<Sx x={B.ice.x} y={746} text="OH^{−}: next" size={32} color={INK_SOFT} hand at={K12.same + 20} />
				{void K12.mpl}{void K12.mg}
			</Overlay>
		</>
	);
};

// ---------- 12b. Backwards: double the hydroxide, then Ksp ----------
const R2 = 'reverse-ksp';
const K13 = cues(sc(R2), {each: 'Each formula unit', two: 'two hydroxide ions', twice: 'rises by twice', v224: '2.24 times', ksp: 'Ksp is magnesium', times: 'times hydroxide squared', v562: '5.62 times', forget: 'Forget to double', four: 'four times too small'});
export const SceneReverseK: React.FC = () => {
	const eq = MG_EQ(-100);
	const cell = (r: number, c: number) => cellS(B.ice.x, B.ice.y, B.ice.s, r, c);
	const coef = eCentre(eq.items, eq.ix.anCoef, B.strip.s, B.strip.x, B.strip.y);
	const A = {x: B.ice.x, s: 40};
	const l3: MPiece[] = [{t: '= 5.62 × 10^{−12}', at: K13.v562, color: TEAL}];
	return (
		<>
			<Overlay>
				<TaskLine text="Find Ksp for Mg(OH)_2" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<MgCard at={-100} a1={-100} a2={-100} />
				<MgPlate at={-100} />
				<IceS x={B.ice.x} y={B.ice.y} solid={{name: 'Mg(OH)_2(s)', at: -100}} cols={MG_COLS(-100)} rows={ice(
					{at: -100, dim: [K13.ksp, 0, 0.4], cells: [{text: '0', at: -100}, {text: '0', at: -100}]},
					{at: -100, lit: [K13.two, K13.v224 + 30], dim: [K13.ksp, 0, 0.4], cells: [{text: '+1.12 × 10^{−4}', at: -100, color: S_INK, size: NUM}, {text: '+2.24 × 10^{−4}', at: K13.v224, color: S_INK, size: NUM}]},
					{at: -100, lit: [K13.v224 + 30, 99999], cells: [{text: '1.12 × 10^{−4}', at: -100, color: S_INK, size: NUM}, {text: '2.24 × 10^{−4}', at: K13.v224 + 20, color: S_INK, size: NUM}]},
				)} />
				<CoefChip from={coef} to={[cell(1, 1)[0] - 60, cell(1, 1)[1]]} at={K13.two} />
				<Sx x={B.ice.x} y={580} text="2 OH^{−} per formula unit: × 2" size={34} color={AMBER_INK} hand at={K13.twice} />
				<ALine x={A.x} y={660} items={[{t: 'Ksp = [Mg^{2+}][OH^{−}]^{2}', at: K13.ksp}]} size={A.s} />
				<ALine x={A.x} y={734} items={[{t: '= (1.12 × 10^{−4})(2.24 × 10^{−4})^{2}', at: K13.times + 10}]} size={A.s} />
				<ALine x={A.x} y={808} items={l3} size={A.s} />
				<Tag x={A.x + segsW(l3, A.s) + 40} y={772} w={300} text="no unit written" at={K13.v562 + 20} color={TEAL} />
				<Sx x={A.x} y={852} text="data sheet: 5.61 × 10^{−12} (the measured value is rounded)" size={26} color={INK_SOFT} weight={600} at={K13.v562 + 40} />
				<Struck x={A.x} y={934} text="(1.12 × 10^{−4})^{3} = 1.40 × 10^{−12}" size={38} at={K13.forget} strike={K13.forget + 40} />
				<Sx x={A.x} y={990} text="forgot to double: 4 × too small" size={38} color={AMBER_INK} hand at={K13.four} />
				{void K13.each}
			</Overlay>
		</>
	);
};

// ---------- 13. Memory aid ----------
const MA = 'memory-aid';
const K14 = cues(sc(MA), {habit: 'the habit', each: 'Each ion is', raise: 'Then raise it', oneOne: 'One to one', sq: 's squared', oneTwo: 'One to two', either: 'either way round', four: 'four s cubed'});
export const SceneAid: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 200}}><HandText text="Each ion = its count × s." at={K14.each} size={86} cps={26} color={TEAL} /></div>
		<div style={{position: 'absolute', left: 96, top: 320}}><HandText text="Then raise it to that count." at={K14.raise} size={86} cps={26} color={TEAL} /></div>
		<Overlay>
			<Sx x={96} y={170} text="the habit" size={42} color={INK_SOFT} hand at={K14.habit} />
			<Fade at={K14.oneOne}>
				<rect x={96} y={500} width={760} height={320} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				<Sx x={126} y={560} text="1 : 1" size={40} color={INK_SOFT} hand at={K14.oneOne} />
				<Sx x={126} y={640} text="BaSO_4: [Ba^{2+}] = s, [SO_4^{2-}] = s" size={34} color={INK} at={K14.oneOne + 6} />
				<Sx x={126} y={740} text="Ksp = s × s = s^{2}" size={48} color={S_INK} at={K14.sq} />
			</Fade>
			<Fade at={K14.oneTwo}>
				<rect x={900} y={500} width={920} height={320} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				<Sx x={930} y={560} text="1 : 2" size={40} color={INK_SOFT} hand at={K14.oneTwo} />
				<Sx x={930} y={640} text="CaF_2: [Ca^{2+}] = s, [F^{−}] = 2s" size={34} color={INK} at={K14.oneTwo + 6} />
				<Sx x={930} y={740} text="Ksp = s × (2s)^{2} = 4s^{3}" size={48} color={S_INK} at={K14.four} />
				<Sx x={930} y={796} text="Mg(OH)_2, the other way round: also 4s^{3}" size={30} color={INK_SOFT} weight={600} at={K14.either} />
			</Fade>
			<Ring cx={930 + mw('CaF_2: [Ca^{2+}] = s, [F^{−}] = ', 34) + mw('2s', 34) / 2 + 14} cy={628} rx={30} ry={28} at={K14.oneTwo + 20} color={AMBER} seed={4} />
			<Tag x={96} y={880} w={720} text="pure water, saturated, same temperature" at={K14.four + 20} color={TEAL} />
		</Overlay>
	</>
);
void INK; void eCentre; void Struck; void MistakeChip;
