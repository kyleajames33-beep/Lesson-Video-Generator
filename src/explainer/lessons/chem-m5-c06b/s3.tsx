import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, EqStrip, Fade, FracX, Overlay, Ring, Sx, TEAL, Tick, Radical, fracXW, tw} from '../chem-m5-c06/parts';
import type {Term} from '../chem-m5-c06/parts';
import {IceTable, iceCell} from '../chem-m5-c06/ice';
import {Heading, H2K, HIK, I2K, IAT_INK, cw, sc} from './common';
import {CheckRuler, ShortcutCard} from './parts';
import {ConditionCard, GivensStrip, I_EQ, TS, iCols, tinyTable} from './s2';

/** Dims an earlier algebra line once the next stage is written. */
const Dim: React.FC<{at: number; to?: number; children: React.ReactNode}> = ({at, to = 0.4, children}) => {
	const f = useCurrentFrame();
	return <g opacity={1 - (1 - to) * prog(f, at, 14)}>{children}</g>;
};

// ---------- 9c. Solve the easier equation (Revision 4, take03: multiply both sides by the bottom, then divide by 4) ----------
const C9 = 'tiny-k-solve';
const KC = cues(sc(C9), {easy: 'the equation is easy', four: 'four x squared', over: 'four x squared over', mult: 'Multiply both sides by the bottom', e4: '4.0 times ten', divide: 'divide both sides by four', xsq: 'x squared is 1.0', x0010: '0.0010', atoms: 'The iodine atoms are', a0020: '0.0020', still: 'still about 0.25'});
const b025 = cw(C9, 'the bottom 0.25', 2);
export const SceneTinySolve: React.FC = () => {
	const L1 = {cx: 960, cy: 320, size: 54};
	const num: Term[][] = [[{t: '(2x)', p: '2', br: false, at: -100, color: IAT_INK, out: KC.four}], [{t: '4x', p: '2', br: false, at: KC.four + 4, color: IAT_INK}]];
	const den: Term[][] = [[{t: '0.25', br: false, at: -100, color: I2K}]];
	const W = fracXW(num, den, L1.size);
	const rx = L1.cx + W / 2 + 24;
	const X = 760, S = 52;
	const m1 = '4x^{2} = 1.6 × 10^{−5}', m2 = ' × 0.25';
	const m3 = ' = 4.0 × 10^{−6}';
	const Y = {a1: 436, l2: 500, a2: 574, l3: 634, l4: 714};
	// tw over-measures a superscript tail, so the follow-on pieces are pulled back to a normal space
	const p2 = X + tw(m1, S) - 26, p3 = p2 + tw(m2, S) - 4;
	return (
		<>
			<Heading text="Find [I] at equilibrium" at={-100} size={62} />
			<Overlay>
				<EqStrip items={I_EQ} x={96} y={250} size={46} at={-100} />
				<GivensStrip at={-100} />
				<IceTable x={TS.x} y={TS.y} s={TS.s} cols={iCols(-100)} rows={tinyTable({drop: -100, i2x: KC.a0020})} />
				<Ring cx={iceCell(TS.x, TS.y, TS.s, 2, 0)[0]} cy={iceCell(TS.x, TS.y, TS.s, 2, 0)[1]} rx={86} ry={34} at={KC.still} color={AMBER} seed={3} />
				<Ring cx={iceCell(TS.x, TS.y, TS.s, 2, 1)[0]} cy={iceCell(TS.x, TS.y, TS.s, 2, 1)[1]} rx={86} ry={34} at={KC.a0020} out={KC.still} color={AMBER} seed={4} />
				<Sx x={96} y={760} text="[I] = 2x = 0.0020 mol/L" size={38} color={TEAL} at={KC.a0020 + 6} />
				{/* the algebra, one stage per line, each written on its spoken step */}
				<Dim at={KC.divide}>
					<FracX cx={L1.cx} cy={L1.cy} size={L1.size} num={num} den={den} barAt={-100} />
					<Sx x={rx} y={L1.cy + 20} text="=" size={L1.size} color={AMBER_INK} at={-100} />
					<Sx x={rx + 56} y={L1.cy + 20} text="1.6 × 10^{−5}" size={L1.size} color={TEAL} at={-100} />
					<Sx x={L1.cx - W / 2 - 40} y={L1.cy - 64} text="(2x)^{2} = 2x × 2x = 4x^{2}" size={34} color={INK_SOFT} anchor="end" hand at={KC.four + 10} out={KC.mult - 10} />
				</Dim>
				{/* step 1: multiply both sides by the bottom; the 0.25 is carried across */}
				<Fade at={KC.mult} out={KC.divide}>
					<Sx x={X} y={Y.a1} text="multiply both sides by the bottom" size={32} color={AMBER_INK} hand at={KC.mult} />
				</Fade>
				<Ring cx={L1.cx} cy={L1.cy + 52} rx={70} ry={36} at={KC.mult + 4} out={KC.e4 + 20} color={AMBER} seed={6} />
				<Arrow x1={L1.cx + 84} y1={L1.cy + 40} x2={p2 + 110} y2={Y.l2 - 46} at={b025 - 4} color={AMBER_INK} width={4} out={KC.e4 + 20} />
				<Dim at={KC.xsq}>
					<Sx x={X} y={Y.l2} text={m1} size={S} color={IAT_INK} at={b025} />
					<Sx x={p2} y={Y.l2} text={m2} size={S} color={I2K} at={b025 + 8} />
					<Sx x={p3} y={Y.l2} text={m3} size={S} color={TEAL} at={KC.e4} />
				</Dim>
				{/* step 2: divide by 4 */}
				<Fade at={KC.divide} out={KC.x0010}>
					<Sx x={X} y={Y.a2} text="divide by 4" size={32} color={AMBER_INK} hand at={KC.divide} />
				</Fade>
				<Dim at={KC.x0010}>
					<Sx x={X} y={Y.l3} text="x^{2} = 1.0 × 10^{−6}" size={S} at={KC.xsq} />
				</Dim>
				<Sx x={X} y={Y.l4} text="x = 0.0010 mol/L" size={S} color={TEAL} at={KC.x0010} />
				<Tick x={X + tw('x = 0.0010 mol/L', S) + 40} y={Y.l4 - 18} at={KC.x0010 + 20} s={40} />
				<ConditionCard at={-100} t1={-100} t2={-100} />
			</Overlay>
		</>
	);
};

// ---------- 9d. Check the shortcut ----------
const D9 = 'tiny-k-check';
const KK = cues(sc(D9), {now: 'Now check that', x0010: ['0.0010', 1], outof: 'out of 0.25', p04: '0.4 per cent', rule: 'rule of thumb', five: '5 per cent', safe: 'the shortcut is safe', passes: 'passes easily', sub: 'Substitute back', s0020: '0.0020 squared', s40: '4.0 times ten', over: 'over 0.25', gives: 'gives 1.6'});
export const SceneTinyCheck: React.FC = () => {
	const R = {x: 160, y: 470, w: 1600};
	const b2 = '4.0 × 10^{−6} ÷ 0.25';
	const b3 = '= 1.6 × 10^{−5}';
	return (
		<>
			<Heading text="Find [I] at equilibrium" at={-100} size={62} />
			<Overlay>
				<EqStrip items={I_EQ} x={96} y={250} size={46} at={-100} />
				<GivensStrip at={-100} />
				<Fade at={-100} out={0}>
					<IceTable x={TS.x} y={TS.y} s={TS.s} cols={iCols(-100)} rows={tinyTable({drop: -100, i2x: -100})} />
					<ConditionCard at={-100} t1={-100} t2={-100} />
				</Fade>
				<Sx x={800} y={341} text="x = 0.0010 mol/L" size={50} color={TEAL} hand at={KK.x0010} />
				<Sx x={R.x} y={R.y - 70} text="Is dropping x fair? Compare x with the start." size={40} color={INK_SOFT} hand at={6} out={KK.rule} />
				<CheckRuler x={R.x} y={R.y} w={R.w} frac={0.0010 / 0.25} at={8} sliverAt={KK.x0010} side="start" sliverLabel="x = 0.0010" fiveAt={KK.five} fiveLabel="5%: a school rule of thumb" />
				<Sx x={R.x + R.w} y={R.y - 16} text="start: 0.25 mol/L" size={40} anchor="end" hand at={14} />
				<Sx x={560} y={R.y + 86} text="0.0010 ÷ 0.25 = 0.4%" size={46} color={AMBER_INK} at={KK.p04} />
				<Tick x={1090} y={R.y + 70} at={KK.safe} s={44} />
				<Sx x={1130} y={R.y + 86} text="under 5%: safe" size={42} color={TEAL} hand at={KK.safe + 6} />
				<Chip x={960} y={640} w={860} text="K this small, a normal start: it passes easily" size={38} at={KK.passes} color={TEAL} />
				{/* substitute back */}
				<Sx x={96} y={700} text="substitute back:" size={44} color={TEAL} hand at={KK.sub} />
				<Sx x={96} y={790} text="0.0020^{2} = 4.0 × 10^{−6}" size={50} at={KK.s40} />
				<Sx x={96} y={872} text={b2} size={50} at={KK.over} />
				<Sx x={96 + tw(b2, 50)} y={872} text={b3} size={50} color={TEAL} at={KK.gives} />
				<Sx x={96 + tw(b2 + b3, 50) + 70} y={872} text="= K" size={54} color={TEAL} hand at={KK.gives + 30} />
				<Tick x={96 + tw(b2 + b3, 50) + 190} y={856} at={KK.gives + 40} s={42} />
				<Sx x={96} y={950} text="exact x is 0.000998, so the shortcut is 0.2% off" size={34} color={INK_SOFT} hand at={KK.gives + 50} />
			</Overlay>
		</>
	);
};

// ---------- 10. You should not need the quadratic formula (Revision 3 wording, take02) ----------
const NQ = 'no-quadratic';
const KN = cues(sc(NQ), {notice: 'Notice what we never', quad: 'quadratic formula', use: 'You can use it', like: 'if you like', hsc: 'HSC questions are written', need: "shouldn't need it", when: 'When K and a start', look: 'look for one of two', ps: 'Is it a perfect square', root: 'Take the square root', tiny: 'Is K tiny', drop: 'Drop the x then check', check: 'then check it'});
export const SceneNoQuadratic: React.FC = () => {
	const f = useCurrentFrame();
	const grey = prog(f, KN.need, 20);
	const Q = {cx: 1450, cy: 300, size: 46};
	const qn: Term[][] = [[{t: '−b ± √(b^{2} − 4ac)', br: false, at: KN.quad + 10, color: INK_SOFT}]];
	const qd: Term[][] = [[{t: '2a', br: false, at: KN.quad + 14, color: INK_SOFT}]];
	const t1 = 'Quadratic formula:';
	return (
		<>
			<Heading text="You should not need the quadratic formula" at={4} size={58} />
			<Overlay>
				<Fade at={KN.notice + 10}>
					<rect x={96} y={190} width={1728} height={270} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<Sx x={136} y={268} text={t1} size={58} hand at={KN.quad} />
				<Sx x={136 + tw(t1, 58, true) + 22} y={268} text="allowed" size={58} color={INK_SOFT} hand at={KN.use} />
				<Sx x={136} y={350} text="HSC questions are written so" size={44} hand at={KN.hsc} />
				<Sx x={136} y={420} text="you should not need it." size={52} color={TEAL} hand at={KN.need} />
				{/* the formula from maths: a reminder that greys as "shouldn't need" is said (allowed, so not crossed out) */}
				<g opacity={1 - 0.55 * grey}>
					<FracX cx={Q.cx} cy={Q.cy} size={Q.size} num={qn} den={qd} barAt={KN.quad + 8} barColor={INK_SOFT} prefix="x =" prefixAt={KN.quad + 8} prefixColor={INK_SOFT} />
				</g>
				<Sx x={Q.cx} y={Q.cy + 136} text="from maths: you may still use it" size={32} color={INK_SOFT} anchor="middle" hand at={KN.need + 12} />
				{/* look for one of two things */}
				<Sx x={96} y={530} text="An equation in x? Look for one of two things:" size={44} color={INK} hand at={KN.look} />
				<ShortcutCard x={96} y={566} w={1728} h={390} at={KN.ps - 4} leftAt={KN.ps} rightAt={KN.tiny} leftLit={[KN.ps, KN.tiny]} rightLit={[KN.tiny, KN.check + 60]} />
			</Overlay>
		</>
	);
};
void H2K; void HIK; void Radical; void INK; void DrawPath;
