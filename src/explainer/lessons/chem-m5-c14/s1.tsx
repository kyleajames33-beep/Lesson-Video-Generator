import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, Heading, S_INK, WHITE_INK, sc} from './common';
import {MEAL, SAT, UNSAT} from './assets';
import {AMBER, AMBER_INK, Chip, CurveArrow, DrawPath, EqLine, Expr, Fade, Falling, GivensCard, INK, INK_SOFT, MistakeChip, Overlay, PicH, Ring, Sx, SwarmLens, TEAL, Tag, Tray, TwoWay, XName, dissEq, eCentre, exprTermX, MLine, mw, picW, platePt, pulseAt, mRowXs, subPt, smooth} from './parts';
import type {Term} from './parts';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 1. Hook: how much is "barely"? ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {video: 'precipitation video', safe: 'the safe one', barely: 'barely dissolves', meal: 'barium meal', gut: 'through the gut', but: 'But barely', notAll: 'not at all', some: 'Some barium sulfate', does: 'does dissolve', how: 'So how much', calc: 'calculate', table: 'data table', bigger: 'bigger', soluble: 'more soluble salt'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const G = {x: 150, y: 250, h: 460};
	const gw = picW(MEAL, G.h);
	const slide = smooth(clamp01((f - K1.calc) / 22));
	const L = {cx: 800, cy: 480, r: 200};
	const rowY = [420, 500];
	return (
		<>
			<Heading text="Barely dissolves. How much is barely?" at={4} size={58} />
			<Overlay>
				<Fade at={2}><PicH p={MEAL} x={G.x} y={G.y} h={G.h} /></Fade>
				<Sx x={G.x + gw / 2} y={G.y + G.h + 40} text="barium meal: BaSO_4 in water" size={30} color={INK_SOFT} anchor="middle" hand at={K1.meal} />
				<Sx x={96} y={812} text="from the precipitation video:" size={30} color={INK_SOFT} hand at={K1.video} />
				<Chip x={96} y={830} w={560} text="BaSO_4(s): barely dissolves" size={34} color={TEAL} at={K1.barely} hand={false} />
				<Sx x={96} y={940} text="barely is not none" size={38} color={AMBER_INK} hand at={K1.notAll} />
				{/* a lens on the suspension: solid specks, and a few dissolved ions */}
				<DrawPath d={`M${G.x + gw - 30},${G.y + G.h * 0.55} L${L.cx - L.r},${L.cy}`} at={K1.does - 6} dur={14} color={INK_SOFT} width={3} />
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={K1.does - 4} cat="Ba^{2+}" an="SO_4^{2-}" floorRows={0} specks={34} nFree={(fr: number) => 2 * clamp01((fr - K1.does) / 40)} scale={0.86} tint="#f4f6f7" title="mostly solid specks; a few ions dissolved" titleAt={K1.does + 20} />
				{/* the Ksp strip */}
				<g transform={`translate(0,${(1 - slide) * 60})`} opacity={slide}>
					<rect x={1080} y={320} width={740} height={250} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={1110} y={372} text="Ksp at 25 °C" size={34} color={INK_SOFT} hand at={-1000} />
					<Sx x={1110} y={rowY[0] + 30} text="BaSO_4" size={40} color={WHITE_INK} at={-1000} />
					<Sx x={1340} y={rowY[0] + 30} text="1.08 × 10^{−10}" size={40} color={TEAL} at={-1000} />
					<Sx x={1110} y={rowY[1] + 40} text="CaF_2" size={40} color={WHITE_INK} at={-1000} />
					<Sx x={1340} y={rowY[1] + 40} text="3.45 × 10^{−11}" size={40} color={TEAL} at={-1000} />
				</g>
				<Ring cx={1460} cy={rowY[0] + 16} rx={150} ry={40} at={K1.bigger} color={AMBER} seed={3} />
				<Sx x={1680} y={rowY[0] + 70} text="?" size={110} color={AMBER_INK} hand at={K1.bigger + 6} />
				<Sx x={1080} y={650} text="bigger number, more soluble?" size={42} color={AMBER_INK} hand at={K1.soluble} />
				{void K1.safe}{void K1.gut}{void K1.but}{void K1.some}{void K1.how}{void K1.table}
			</Overlay>
		</>
	);
};

// ---------- 2. A saturated solution is an equilibrium ----------
const H2 = 'saturated';
const K2 = cues(sc(H2), {put: 'Put excess', stir: 'and stir', tiny: 'A tiny amount', rest: 'the rest sits', sat: ['saturated solution', 1], holds: 'holds as much', temp: 'that temperature', video: 'dissolving video', leaving: 'leaving', rejoin: 'rejoining', equal: 'equal rates', eqm: 'an equilibrium', equation: 'an equation', solid: 'solid barium sulfate', bai: 'barium ions', soi: 'sulfate ions'});
export const SceneSaturated: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 120, y: 260, h: 400};
	const q = smooth(clamp01((f - K2.rest) / 30));
	const [x0] = platePt(UNSAT, B.x, B.y, B.h, 0.25, 0);
	const [x1] = platePt(UNSAT, B.x, B.y, B.h, 0.75, 0);
	const surf = platePt(UNSAT, B.x, B.y, B.h, 0.5, 0.29)[1];
	const floor = platePt(UNSAT, B.x, B.y, B.h, 0.5, 0.86)[1];
	const fl = platePt(SAT, B.x, B.y, B.h, 0.62, 0.86);
	const L = {cx: 1000, cy: 510, r: 250};
	const eq = dissEq('BaSO_4(s)', 'Ba^{2+}(aq)', 'SO_4^{2-}(aq)', [K2.solid, K2.solid + 30, K2.bai, K2.bai + 22, K2.soi]);
	return (
		<>
			<Heading text="A saturated solution" at={4} size={60} />
			<Overlay>
				<PicH p={UNSAT} x={B.x} y={B.y} h={B.h} o={1 - q} />
				{q > 0.01 ? <PicH p={SAT} x={B.x} y={B.y} h={B.h} o={q} /> : null}
				<Falling x0={x0} x1={x1} yTop={B.y - 80} ySurf={surf} yFloor={floor} at={K2.put} until={K2.tiny + 20} every={9} dissolve={false} seed={4} />
				<Sx x={B.x + picW(SAT, B.h) / 2} y={B.y - 24} text="excess BaSO_4 in water, stirred" size={30} color={INK_SOFT} anchor="middle" hand at={K2.put + 6} />
				<Sx x={120} y={730} text="saturated solution:" size={46} color={TEAL} hand at={K2.sat} />
				<Sx x={120} y={782} text="holds as much dissolved solid as it can" size={32} color={INK} hand at={K2.holds} />
				<Sx x={120} y={824} text="at that temperature, with solid left over" size={32} color={INK} hand at={K2.temp} />
				{/* the crystal floor, close up: formula units leave and rejoin in a 1 : 1 ratio */}
				<DrawPath d={`M${fl[0]},${fl[1]} L${L.cx - L.r + 10},${L.cy + 60}`} at={K2.video + 10} dur={14} color={INK_SOFT} width={3} />
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={K2.video + 10} cat="Ba^{2+}" an="SO_4^{2-}" nFree={2} scale={0.84}
					units={[{at: K2.leaving - 4, kind: 'leave', slot: 3}, {at: K2.rejoin - 4, kind: 'join', slot: 6}]} cycle={{from: K2.equal + 10, to: 917, period: 40}}
					title="the crystal floor, close up" titleAt={K2.leaving} />
				<Chip x={1320} y={262} w={330} text="dissolving video" size={32} color={INK_SOFT} at={K2.video} />
				<TwoWay x={1340} y={470} w={230} at={K2.equal} fwd="dissolving" rev="crystallising" />
				<Sx x={1340} y={600} text="equal rates" size={44} color={TEAL} hand at={K2.equal + 6} />
				<Sx x={700} y={890} text="a saturated solution is an equilibrium:" size={38} color={INK} hand at={K2.eqm} />
				<EqLine items={eq.items} x={700} y={970} size={52} />
				{void K2.stir}{void K2.equation}
			</Overlay>
		</>
	);
};

// ---------- 3. The Ksp expression: no bottom ----------
const H3 = 'ksp-expression';
const K3 = cues(sc(H3), {every: 'Every equilibrium', prod: 'Products go on top', reactant: 'The reactant', solid: 'solid', left: 'left out', noBottom: 'no bottom', just: 'K is just', ba: 'barium ion concentration', times: 'times the sulfate', so: 'sulfate ion concentration', product: 'product of ion', sp: 'solubility product', ksp: ['K s p', 1], temp: 'changes only with temperature', unit: 'without a unit', deg: '25 degrees', table: 'data table', val: '1.08 times'});
const FlyText: React.FC<{text: string; from: [number, number]; to: [number, number]; at: number; out?: number; size: number; color?: string}> = ({text, from, to, at, out, size, color = INK}) => {
	const f = useCurrentFrame();
	const e = smooth(clamp01((f - at) / 28));
	if (f < at) return null;
	const x = from[0] + (to[0] - from[0]) * e, y = from[1] + (to[1] - from[1]) * e - Math.sin(e * Math.PI) * 50;
	return <Sx x={x} y={y + size * 0.32} text={text} size={size} color={color} anchor="middle" at={at} out={out} />;
};
export const SceneKspExpression: React.FC = () => {
	const f = useCurrentFrame();
	const S = {x: 96, y: 262, s: 50};
	const eq = dissEq('BaSO_4(s)', 'Ba^{2+}(aq)', 'SO_4^{2-}(aq)', 0);
	const c = (i: number) => eCentre(eq.items, i, S.s, S.x, S.y);
	const E = {x: 700, y: 560, s: 70};
	const xT = exprTermX(E.x, E.s);
	const drop = smooth(clamp01((f - K3.noBottom - 8) / 24));
	const lift = -64 * (1 - drop);
	const terms: Term[] = [
		{t: 'Ba^{2+}', at: K3.prod + 8, color: CAT_INK, from: [c(eq.ix.cat)[0] - 40, c(eq.ix.cat)[1] + 64 + 22]},
		{t: 'SO_4^{2-}', at: K3.prod + 18, color: AN_INK, from: [c(eq.ix.an)[0] - 50, c(eq.ix.an)[1] + 64 + 22]},
	];
	const xs = mRowXs(terms, E.s, xT);
	const W = xs[1].x + xs[1].w - xT;
	const den: [number, number] = [xT + W / 2, E.y + 30];
	const k = pulseAt(f, K3.ksp, 0.14, 30);
	return (
		<>
			<Heading text="Its K: the solubility product" at={4} size={60} />
			<Overlay>
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				{/* K = products over (nothing) */}
				<g transform={`translate(${E.x + 20},${E.y - 24}) scale(${k}) translate(${-(E.x + 20)},${-(E.y - 24)})`}>
					<XName x={E.x} y={E.y} size={E.s} at={K3.every} nameAt={K3.ksp} />
				</g>
				<Sx x={E.x + mw('K', E.s) + mw('sp', E.s * 0.6) + 4 + E.s * 0.25} y={E.y} text="=" size={E.s} at={K3.every} />
				<g transform={`translate(0,${lift})`}><MLine x={xT} y={E.y} size={E.s} items={terms} /></g>
				<g opacity={1 - drop}>
					<DrawPath d={`M${xT - 10},${E.y - 30} L${xT + W + 10},${E.y - 30}`} at={K3.prod} dur={14} width={5} />
				</g>
				<FlyText text="[BaSO_4]" from={c(eq.ix.solid)} to={den} at={K3.reactant} out={K3.left} size={58} color={WHITE_INK} />
				<Tray x={96} y={640} w={460} at={K3.solid} label="left out of K: the solid" items={[{t: 'BaSO_4(s)', at: K3.left, from: den, color: WHITE_INK}]} />
				<Sx x={xT + W + 40} y={E.y + 40} text="no bottom" size={40} color={AMBER_INK} hand at={K3.noBottom + 10} out={K3.just + 30} />
				<MistakeChip x={96} y={830} text="[Ba^{2+}][SO_4^{2-}] / [BaSO_4]" size={32} at={K3.noBottom + 16} note="no solid, so no bottom" />
				<Ring cx={xs[0].x + xs[0].w / 2} cy={E.y - 22} rx={xs[0].w / 2 + 16} ry={52} at={K3.ba} out={K3.ba + 50} color={AMBER} seed={2} />
				<Ring cx={xs[1].x + xs[1].w / 2} cy={E.y - 22} rx={xs[1].w / 2 + 16} ry={52} at={K3.so} out={K3.so + 50} color={AMBER} seed={5} />
				<Sx x={E.x} y={668} text="a product of ion concentrations" size={38} color={INK_SOFT} hand at={K3.product} />
				<Sx x={E.x} y={736} text="solubility product, Ksp" size={50} color={TEAL} hand at={K3.sp} />
				<Sx x={E.x} y={784} text="the K for a saturated solution" size={34} color={INK} hand at={K3.sp + 24} />
				<Tag x={E.x} y={812} w={520} text="changes only with temperature" at={K3.temp} color={TEAL} />
				<Tag x={E.x + 540} y={812} w={330} text="no unit written" at={K3.unit} color={TEAL} />
				<GivensCard x={1120} y={882} w={700} h={150} at={K3.deg} title="data table, 25 °C" lines={[{text: 'Ksp(BaSO_4) = 1.08 × 10^{−10}', at: K3.val, size: 36, color: TEAL}]} />
				{void K3.times}{void K3.table}
			</Overlay>
		</>
	);
};

// ---------- 4. A subscript becomes a power (calcium fluoride) ----------
const H4 = 'powers';
const K4 = cues(sc(H4), {sub: 'subscript', coef: 'gets a coefficient', ca: 'Calcium fluoride', cafs: 'C a F two', into: 'dissolves into one', twoF: 'two fluoride ions', power: 'a power', ksp: 'Ksp is calcium', times: 'times fluoride', sq: 'squared'});
export const ScenePowers: React.FC = () => {
	const S = {x: 300, y: 430, s: 72};
	const eq = dissEq('CaF_2(s)', 'Ca^{2+}(aq)', 'F^{-}(aq)', [K4.ca, K4.into, K4.into + 14, K4.into + 40, K4.twoF + 6], {anCoef: '2'});
	eq.items[eq.ix.anCoef] = {...eq.items[eq.ix.anCoef], at: K4.twoF};
	const sp = subPt(eq.items, eq.ix.solid, S.s, S.x, S.y, 'CaF', '2');
	const cp = eCentre(eq.items, eq.ix.anCoef, S.s, S.x, S.y);
	const sol = eCentre(eq.items, eq.ix.solid, S.s, S.x, S.y);
	const E = {x: 520, y: 820, s: 66};
	return (
		<>
			<Heading text="A subscript becomes a power" at={4} size={60} />
			<Overlay>
				<Sx x={96} y={262} text="subscript in the formula" size={40} color={INK} hand at={K4.sub} />
				<Sx x={560} y={262} text="→  coefficient in the equation" size={40} color={INK} hand at={K4.coef} />
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<Ring cx={sp[0]} cy={sp[1] - 8} rx={22} ry={30} at={K4.twoF} color={AMBER} seed={3} />
				<CurveArrow d={[[sp[0], sp[1] + 28], [sp[0] + 160, 600], [cp[0] - 160, 600], [cp[0], S.y + 26]]} at={K4.twoF + 6} dur={26} />
				<Sx x={sp[0]} y={640} text="1 CaF_2 has 2 F" size={32} color={AMBER_INK} anchor="middle" hand at={K4.twoF + 20} />
				<Sx x={cp[0]} y={640} text="so 2 F^{−} ions" size={32} color={AMBER_INK} anchor="middle" hand at={K4.twoF + 26} />
				<Ring cx={cp[0]} cy={cp[1]} rx={30} ry={40} at={K4.power} out={K4.sq + 30} color={AMBER_INK} seed={6} />
				<Sx x={1200} y={700} text="the coefficient becomes a power" size={40} color={AMBER_INK} hand at={K4.power + 4} />
				<Expr x={E.x} y={E.y} size={E.s} at={K4.ksp} terms={[
					{t: 'Ca^{2+}', at: K4.ksp + 14, color: CAT_INK},
					{t: 'F^{-}', at: K4.times + 8, color: AN_INK, p: '2', pAt: K4.sq - 4, pFrom: [cp[0] - 10, cp[1] - 10], pColor: AMBER_INK},
				]} />
				<Tray x={96} y={700} w={380} at={K4.ksp} label="left out: the solid" items={[{t: 'CaF_2(s)', at: K4.ksp + 6, from: sol, color: WHITE_INK}]} />
				{void K4.cafs}
			</Overlay>
		</>
	);
};

// ---------- 5. Molar solubility: what one formula unit gives ----------
const H5 = 'molar-solubility';
const K5 = cues(sc(H5), {isnt: "Ksp isn't the solubility", molar: 'molar solubility', s: ['s', 1], moles: 'number of moles', litre: 'per litre', sat: 'saturated solution', link: 'To link the two', unit: 'one formula unit', each: 'Each barium sulfate', oneBa: 'one barium ion', oneSo: 'one sulfate ion', ifS: 'So if s', both: 'both ion concentrations', areS: 'are s'});
export const SceneMolarSolubility: React.FC = () => {
	const B = {x: 120, y: 300, h: 380};
	const S = {x: 700, y: 262, s: 46};
	const eq = dissEq('BaSO_4(s)', 'Ba^{2+}(aq)', 'SO_4^{2-}(aq)', 0);
	const ca = eCentre(eq.items, eq.ix.cat, S.s, S.x, S.y), an = eCentre(eq.items, eq.ix.an, S.s, S.x, S.y);
	const fl = platePt(SAT, B.x, B.y, B.h, 0.6, 0.86);
	const L = {cx: 1500, cy: 760, r: 210};
	return (
		<>
			<Heading text="Molar solubility, s" at={4} size={60} />
			<Overlay>
				<PicH p={SAT} x={B.x} y={B.y} h={B.h} />
				<Sx x={B.x + picW(SAT, B.h) / 2} y={B.y + B.h + 44} text="saturated BaSO_4(aq)" size={32} color={INK_SOFT} anchor="middle" hand at={0} />
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<Sx x={700} y={372} text="Ksp is not the solubility itself" size={36} color={INK_SOFT} hand at={K5.isnt} />
				<Sx x={700} y={450} text="molar solubility, s" size={52} color={S_INK} hand at={K5.molar} />
				<Sx x={700} y={508} text="= moles of solid that dissolve per litre (mol/L)" size={34} color={INK} weight={600} at={K5.moles} />
				<Sx x={700} y={556} text="to make a saturated solution" size={32} color={INK_SOFT} hand at={K5.sat} />
				<Sx x={700} y={636} text="one formula unit = one BaSO_4" size={38} color={INK} hand at={K5.unit} />
				<DrawPath d={`M${fl[0]},${fl[1]} L${L.cx - L.r},${L.cy}`} at={K5.link} dur={16} color={INK_SOFT} width={3} />
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={K5.link} cat="Ba^{2+}" an="SO_4^{2-}" nFree={1} scale={0.78}
					units={[{at: K5.each, kind: 'split', slot: 3, tags: K5.oneBa}, {at: K5.oneSo + 30, kind: 'leave', slot: 6}, {at: K5.oneSo + 56, kind: 'leave', slot: 1}, {at: K5.ifS + 10, kind: 'leave', slot: 5}]}
					title="each unit gives one of each" titleAt={K5.oneSo} />
				<Sx x={ca[0]} y={S.y + 48} text="s" size={42} color={S_INK} anchor="middle" hand at={K5.areS - 30} />
				<Sx x={an[0]} y={S.y + 48} text="s" size={42} color={S_INK} anchor="middle" hand at={K5.areS - 20} />
				<Sx x={120} y={830} text="[Ba^{2+}] = s" size={42} color={S_INK} at={K5.both} />
				<Sx x={120} y={900} text="[SO_4^{2-}] = s" size={42} color={S_INK} at={K5.both + 10} />
				{void K5.s}{void K5.litre}
			</Overlay>
		</>
	);
};
void AMBER; void INK; void CAT_INK;
