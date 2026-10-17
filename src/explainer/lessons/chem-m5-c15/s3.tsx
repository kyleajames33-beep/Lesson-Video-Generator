import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, CORAL_INK, Heading, S_INK, kf, sc} from './common';
import {SAT} from './assets';
import {ALine, AMBER, AMBER_INK, BD, CheckRuler, DrawPath, EqLine, Fade, GivensCard, IceS, INK, INK_SOFT, KMarker, Lock, LogLine, MistakeChip, Overlay, PicH, QMarker, Ring, RootOver, Sx, SwarmLens, TEAL, TaskLine, Tick, cardH, cellS, dissEq, eLayout, mw, picW, platePt, segXs, segsW} from './parts';
import {prog} from '../../kit';
import type {IceRow, Ln, MPiece} from './parts';

const B = BD;
const ice = (...rows: IceRow[]) => rows;
export const AGCL_EQ = (ats: number[] | number) => dissEq('AgCl(s)', 'Ag^{+}(aq)', 'Cl^{-}(aq)', ats);
const AG_COLS = (a: number) => [{name: 'Ag^{+}', at: a, color: CAT_INK}, {name: 'Cl^{-}', at: a + 6, color: AN_INK}];

// ---------- 10. The common ion effect: Ksp stays put ----------
const C1 = 'common-ion';
const K10 = cues(sc(C1), {one: 'One more case', sat: 'saturated silver chloride', solid: 'solid on the bottom', add: 'add some sodium chloride', already: 'already part', common: 'common ion', jumps: 'concentration jumps', bigger: 'bigger than Ksp', lock: 'lock onto the solid', until: 'until Qsp', back: 'back down to Ksp', shifts: 'shifts left', le: "Chatelier's principle", less: 'So less silver', stays: 'stays dissolved', but: 'But Ksp itself', changed: "hasn't changed", temp: 'only temperature'});
export const SceneCommonIon: React.FC = () => {
	const f = useCurrentFrame();
	const S = {x: 96, y: 250, s: 46};
	const eq = AGCL_EQ([K10.sat, K10.sat + 8, K10.sat + 14, K10.sat + 18, K10.sat + 22]);
	const ap = eLayout(eq.items, S.s, S.x).pos[eq.ix.arrow];
	const a0 = ap.x + S.s * 0.28, a1 = ap.x + ap.w - S.s * 0.28, yb = S.y - S.s * 0.18;
	const P = {x: 96, y: 340, h: 340};
	const fl = platePt(SAT, P.x, P.y, P.h, 0.62, 0.86);
	const L = {cx: 760, cy: 640, r: 250};
	const ln: Ln = {y: 470, x0: 1200, x1: 1720, lo: -12, hi: -8};
	const qe = (fr: number) => kf(fr, [[K10.jumps, Math.log10(1.77e-10)], [K10.bigger, -8.6], [K10.until, -8.6], [K10.back + 20, Math.log10(1.77e-10)]]);
	const barH = 220 * (1 - 0.55 * prog(f, K10.less, 30));
	const nFree = (fr: number) => kf(fr, [[K10.lock, 2], [K10.lock + 90, 1]]);
	return (
		<>
			<Heading text="The common ion effect" at={4} size={60} />
			<Overlay>
				<EqLine items={eq.items} x={S.x} y={S.y} size={S.s} />
				<Fade at={K10.shifts}>
					<path d={`M${a1},${yb} L${a0},${yb} M${a0 + 16},${yb + 13} L${a0},${yb}`} fill="none" stroke={AMBER} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Sx x={S.x + 680} y={S.y} text="shifts left (Le Chatelier)" size={34} color={AMBER_INK} hand at={K10.shifts + 6} />
				<Fade at={K10.sat}><PicH p={SAT} x={P.x} y={P.y} h={P.h} /></Fade>
				<Sx x={P.x + picW(SAT, P.h) / 2} y={P.y + P.h + 40} text="saturated AgCl(aq)" size={30} color={INK_SOFT} anchor="middle" hand at={K10.sat} />
				<Ring cx={fl[0] - 30} cy={fl[1]} rx={110} ry={30} at={K10.solid} out={K10.solid + 60} color={AMBER} seed={2} />
				<DrawPath d={`M${fl[0]},${fl[1]} L${L.cx - L.r},${L.cy + 30}`} at={K10.sat + 10} dur={14} color={INK_SOFT} width={3} />
				<SwarmLens cx={L.cx} cy={L.cy} r={L.r} at={K10.sat + 10} cat="Ag^{+}" an="Cl^{-}" nFree={nFree} scale={0.8}
					cycle={{from: K10.solid, to: K10.add, period: 44}}
					rain={{at: K10.add + 10, ion: 'Cl^{-}', n: 7, every: 7, partner: 'Na^{+}'}}
					units={[{at: K10.lock - 10, kind: 'join', slot: 3, ring: K10.lock + 20}, {at: K10.lock + 14, kind: 'join', slot: 7, ring: K10.lock + 44}, {at: K10.until, kind: 'join', slot: 5, ring: K10.until + 30}]}
					title="the crystal surface, close up" titleAt={K10.sat + 20} />
				<Sx x={1060} y={340} text="Cl^{−}: already in the equilibrium" size={34} color={AN_INK} hand at={K10.common} />
				<Sx x={1060} y={384} text="Na^{+}: a spectator" size={30} color={INK_SOFT} hand at={K10.common + 10} />
				<LogLine ln={ln} at={K10.jumps - 30} labels={false} />
				<KMarker k={1.77e-10} ln={ln} at={K10.jumps - 24} label="Ksp" size={36} />
				<QMarker ln={ln} at={K10.jumps - 18} value={fr => 10 ** qe(fr)} label="Qsp" side="mid" color={CORAL_INK} size={34} />
				<Fade at={K10.lock}>
					<path d={`M1200,${940} L1200,${940 - 230} M1200,940 L1320,940`} fill="none" stroke={INK} strokeWidth={4} />
					<rect x={1220} y={940 - barH} width={80} height={barH} rx={8} fill="#d9e8f6" stroke="#4f86ad" strokeWidth={3} />
					<Sx x={1260} y={980} text="AgCl dissolved" size={28} color={INK_SOFT} anchor="middle" hand at={K10.lock} />
				</Fade>
				<Sx x={1340} y={800} text="less stays dissolved" size={34} color={AMBER_INK} hand at={K10.stays} />
				<Fade at={K10.but}>
					<rect x={1340} y={850} width={480} height={62} rx={31} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1366} y={892} text="Ksp = 1.77 × 10^{−10}: unchanged" size={28} color={TEAL} weight={700} at={K10.but} />
				</Fade>
				<Lock x={1800} y={820} at={K10.changed} />
				<MistakeChip x={1340} y={940} text="added Cl^{−} changes Ksp" size={30} at={K10.changed + 20} />
				{void K10.one}{void K10.already}{void K10.le}{void K10.temp}
			</Overlay>
		</>
	);
};

// ---------- 11a. How much less? ICE with a common ion ----------
const C2 = 'common-ion-ice';
const K11 = cues(sc(C2), {how: 'How much less', find: 'Find silver', nacl: 'sodium chloride', ksp: 'with Ksp', v177: '1.77', ice: 'I C E table', zero: 'starts at zero', cl: 'chloride starts at', diss: 's dissolves', eqrow: 'the equilibrium row', s: ['s', 2], plus: ['plus s', 1], tiny: 'is tiny', about: 'about 0.10', quad: 'gives a quadratic', hsc: 'HSC questions'});
export const AgCard: React.FC<{at: number; a1: number; a2: number}> = ({at, a1, a2}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={B.card.w} h={cardH(2)} at={at} lh={B.card.lh} lines={[
		{text: '[Cl^{−}] from NaCl: 0.10 mol/L', at: a1, size: B.card.s, color: AN_INK},
		{text: 'Ksp(AgCl) = 1.77 × 10^{−10} (25 °C)', at: a2, size: B.card.s, color: TEAL},
	]} />
);
export const RULER = {x: 760, y: 620, w: 900};
export const SceneIceCommon: React.FC = () => {
	const eq = AGCL_EQ(K11.find);
	const cell = (r: number, c: number) => cellS(B.ice.x, B.ice.y, B.ice.s, r, c);
	const ic = cell(0, 1);
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for AgCl in 0.10 mol/L NaCl" at={K11.find} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<AgCard at={K11.nacl - 10} a1={K11.nacl} a2={K11.v177} />
				<Fade at={K11.find}><PicH p={SAT} x={96} y={560} h={300} /></Fade>
				<Sx x={96 + picW(SAT, 300) / 2} y={900} text="AgCl in 0.10 mol/L NaCl" size={28} color={INK_SOFT} anchor="middle" hand at={K11.find + 10} />
				<IceS x={B.ice.x} y={B.ice.y} outlineAt={K11.ice - 10} solid={{name: 'AgCl(s)', at: K11.ice}} cols={AG_COLS(K11.ice)} rows={ice(
					{at: K11.ice + 6, cells: [{text: '0', at: K11.zero + 10}, {text: '0.10', at: K11.cl + 30, color: AN_INK}]},
					{at: K11.ice + 12, cells: [{text: '+s', at: K11.diss + 10, color: S_INK}, {text: '+s', at: K11.diss + 16, color: S_INK}]},
					{at: K11.ice + 18, lit: [K11.eqrow, K11.hsc], cells: [{text: 's', at: K11.s, color: S_INK}, {text: '0.10 + s', at: K11.plus, color: S_INK, size: 40, swap: {text: '≈ 0.10', at: K11.about + 10, color: S_INK}}]},
				)} />
				<Ring cx={ic[0]} cy={ic[1]} rx={80} ry={42} at={K11.cl + 34} color={AMBER} seed={4} />
				<Sx x={1490} y={ic[1] + 12} text="from NaCl:" size={32} color={AMBER_INK} hand at={K11.cl + 40} />
				<Sx x={1490} y={ic[1] + 50} text="not zero" size={32} color={AMBER_INK} hand at={K11.cl + 46} />
				<CheckRuler x={RULER.x} y={RULER.y} w={RULER.w} frac={0.004} at={K11.tiny - 20} sliverAt={K11.tiny} sliverLabel="s?" labelSize={36} color="#8a5cc2" />
				<Sx x={RULER.x + RULER.w / 2} y={RULER.y - 16} text="[Cl^{−}] = 0.10" size={34} color={AN_INK} anchor="middle" hand at={K11.tiny - 10} />
				<Sx x={RULER.x} y={RULER.y + 110} text="0.10 + s ≈ 0.10" size={44} color={S_INK} hand at={K11.about + 10} />
				<Fade at={K11.quad} out={1250}>
					<rect x={RULER.x} y={780} width={980} height={150} rx={20} fill="#f0ece4" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="9 7" />
					<Sx x={RULER.x + 30} y={840} text="Keeping the s gives a quadratic: allowed." size={32} color={INK_SOFT} weight={600} at={K11.quad} />
					<Sx x={RULER.x + 30} y={892} text="HSC questions are written so you should not need it." size={32} color={INK_SOFT} weight={600} at={K11.hsc} />
				</Fade>
				{void K11.how}{void K11.ksp}
			</Overlay>
		</>
	);
};

// ---------- 11b. Solve, check and compare ----------
const C3 = 'common-ion-solve';
const K12 = cues(sc(C3), {ksp: 'Ksp is s times', div: 'Divide both sides', v177: '1.77 times', far: 'far under', safe: 'dropping it was safe', pure: 'In pure water', root: 'square root of Ksp', v133: '1.33 times', seven: 'seven and a half thousand'});
export const SceneSolveCommon: React.FC = () => {
	const eq = AGCL_EQ(-100);
	const X = B.ice.x;
	const l1: MPiece[] = [{t: 'Ksp = [Ag^{+}][Cl^{−}] ≈ s × 0.10', at: K12.ksp}, {t: '= 1.77 × 10^{−10}', at: K12.ksp + 40}];
	const l2: MPiece[] = [{t: 's = 1.77 × 10^{−9} mol/L', at: K12.v177, color: S_INK}];
	const C = {x: 96, y: 560, w: 620};
	const cy = (i: number) => C.y + 108 + i * 52;
	const pw: MPiece[] = [{t: 'pure water: s = ', at: 0}, {t: '1.77 × 10^{−10}', at: 0}];
	const pwx = segXs(pw, C.x + 28, 28);
	return (
		<>
			<Overlay>
				<TaskLine text="Find s for AgCl in 0.10 mol/L NaCl" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<AgCard at={-100} a1={-100} a2={-100} />
				<IceS x={B.ice.x} y={B.ice.y} solid={{name: 'AgCl(s)', at: -100}} cols={AG_COLS(-100)} rows={ice(
					{at: -100, dim: [0, 0, 0.4], cells: [{text: '0', at: -100}, {text: '0.10', at: -100, color: AN_INK}]},
					{at: -100, dim: [0, 0, 0.4], cells: [{text: '+s', at: -100, color: S_INK}, {text: '+s', at: -100, color: S_INK}]},
					{at: -100, lit: [-100, 99999], cells: [{text: 's', at: -100, color: S_INK}, {text: '≈ 0.10', at: -100, color: S_INK}]},
				)} />
				<Sx x={RULER.x + RULER.w / 2} y={RULER.y - 16} text="[Cl^{−}] = 0.10" size={34} color={AN_INK} anchor="middle" hand at={-100} />
				<CheckRuler x={RULER.x} y={RULER.y} w={RULER.w} frac={0.004} at={-100} sliverAt={-100} sliverLabel="s" labelSize={36} color="#8a5cc2" fiveAt={K12.far} fiveLabel="5% of 0.10" pctLabel="s ÷ 0.10 = 0.000002%" pctAt={K12.far + 20} />
				<ALine x={X} y={790} items={l1} size={38} />
				<Sx x={X + segsW(l2, 42) + 90} y={870} text="divide both sides by 0.10" size={36} color={AMBER_INK} hand at={K12.div} />
				<ALine x={X} y={870} items={l2} />
				<Tick x={X + segsW(l2, 42) + 30} y={856} at={K12.v177 + 70} s={34} />
				<Sx x={X} y={940} text="far under 5%: dropping s was safe" size={36} color={TEAL} hand at={K12.safe} />
				{/* how much less: against pure water */}
				<Fade at={K12.pure}><rect x={C.x} y={C.y} width={C.w} height={330} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} /></Fade>
				<Sx x={C.x + 28} y={C.y + 56} text="how much less?" size={38} color={INK_SOFT} hand at={K12.pure} />
				<Sx x={pwx[0].x} y={cy(0)} text="pure water: s = " size={28} color={INK} weight={600} at={K12.pure} />
				<Sx x={pwx[1].x + 18} y={cy(0)} text="1.77 × 10^{−10}" size={28} color={INK} weight={600} at={K12.root} />
				<RootOver x0={pwx[1].x + 18} w={mw('1.77 × 10^{−10}', 28, false, 600)} y={cy(0)} size={28} at={K12.root} />
				<Sx x={C.x + 140} y={cy(1)} text="= 1.33 × 10^{−5} mol/L" size={28} color={INK} weight={600} at={K12.v133} />
				<Sx x={C.x + 28} y={cy(2)} text="0.10 mol/L Cl^{−}: s = 1.77 × 10^{−9}" size={28} color={S_INK} weight={600} at={K12.seven - 20} />
				<Sx x={C.x + 28} y={cy(3) + 10} text="about 7,500 × less" size={42} color={AMBER_INK} hand at={K12.seven} />
				{void INK}{void DrawPath}
			</Overlay>
		</>
	);
};
