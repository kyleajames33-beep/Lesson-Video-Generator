import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, CORAL, CORAL_INK, Heading, kf, sc} from './common';
import {KIDNEY, SAT, UNSAT} from './assets';
import {AMBER_INK, Chip, Clock, CodeBeaker, DrawPath, Expr, Fade, FreeLens, INK, INK_SOFT, IonBox, KMarker, LogLine, MistakeChip, Overlay, PicH, PiecesM, QMarker, QspLens, Ring, Sx, TEAL, Tick, picW, platePt, smooth} from './parts';
import type {FreeIon, Ln} from './parts';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 1. Hook: insoluble, yet no stone ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {stone: 'kidney stone', ox: 'calcium oxalate', rules: 'solubility rules', insol: ['insoluble', 1], urine: 'urine always contains', ca: 'calcium ions', oxi: 'oxalate ions', yet: 'Yet most', none: 'no stone forms', story: 'whole story', solid: 'A solid only forms', enough: ['enough ions', 1], how: 'How many is enough'});
const URINE: FreeIon[] = [
	{ion: 'Ca^{2+}', u: -0.5, v: -0.45, ph: 0.3, at: 0}, {ion: 'Ca^{2+}', u: 0.4, v: -0.2, ph: 1.9, at: 8}, {ion: 'Ca^{2+}', u: -0.15, v: 0.45, ph: 3.1, at: 16},
	{ion: 'C_2O_4^{2-}', u: 0.1, v: -0.55, ph: 2.4, at: 1000}, {ion: 'C_2O_4^{2-}', u: -0.55, v: 0.12, ph: 4.2, at: 1008}, {ion: 'C_2O_4^{2-}', u: 0.45, v: 0.38, ph: 5.6, at: 1016},
];
export const SceneHook: React.FC = () => {
	const ions = URINE.map(d => ({...d, at: d.ion === 'Ca^{2+}' ? K1.ca + d.at : K1.oxi + d.at - 1000}));
	const kw = picW(KIDNEY, 300);
	return (
		<>
			<Heading text="Insoluble, yet no stone. How many ions is enough?" at={4} size={54} />
			<Overlay>
				<Fade at={2}><PicH p={KIDNEY} x={96} y={250} h={300} /></Fade>
				<Sx x={96 + kw / 2} y={598} text="kidney stone (coin for scale)" size={30} color={INK_SOFT} anchor="middle" hand at={K1.stone} />
				<Sx x={96} y={680} text="mainly calcium oxalate, CaC_2O_4" size={36} color={INK} weight={700} at={K1.ox} />
				<Chip x={96} y={712} w={520} text="solubility rules: insoluble" size={34} color={AMBER_INK} at={K1.insol} />
				<FreeLens cx={1010} cy={560} r={240} at={K1.urine} ions={ions} title="urine, close up" titleAt={K1.urine + 10} />
				<Tick x={1310} y={600} at={K1.none} s={44} />
				<Sx x={1350} y={614} text="usually no solid forms" size={40} color={TEAL} hand at={K1.none + 4} />
				<Sx x={96} y={880} text="'insoluble' is not the whole story" size={40} color={AMBER_INK} hand at={K1.story} />
				<Fade at={K1.enough}>
					<rect x={1290} y={760} width={520} height={180} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} />
					<Sx x={1320} y={830} text="a solid needs enough ions" size={38} color={TEAL} hand at={K1.enough} />
					<Sx x={1320} y={900} text="how many ions?" size={44} color={INK} hand at={K1.how} />
					<Sx x={1700} y={910} text="?" size={90} color={AMBER_INK} hand at={K1.how + 8} />
				</Fade>
				{void K1.rules}{void K1.yet}{void K1.solid}{void CAT_INK}
			</Overlay>
		</>
	);
};

// ---------- 2. Qsp: the same expression, right now ----------
const H2 = 'qsp-idea';
const K2 = cues(sc(H2), {ksp: 'Ksp describes', eqm: 'at equilibrium', mix: 'For the mixture', now: ['right now', 1], same: 'same expression', moment: 'at this moment', ion: 'ion product', qsp: ['Q s p', 1], just: 'Just as Q', way: 'which way', powers: 'same powers', pbi: 'for lead iodide', qis: 'Qsp is lead', sq: 'iodide squared'});
export const SceneQspIdea: React.FC = () => {
	const ln: Ln = {y: 850, x0: 1120, x1: 1700, lo: -2, hi: 2};
	const terms = (at: number) => [{t: 'Ca^{2+}', at, color: CAT_INK}, {t: 'SO_4^{2-}', at: at + 6, color: AN_INK}];
	return (
		<>
			<Heading text="Qsp: the same expression, right now" at={4} size={58} />
			<Overlay>
				<Fade at={K2.ksp}><rect x={96} y={210} width={830} height={400} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<Sx x={126} y={262} text="a saturated solution, at equilibrium" size={34} color={TEAL} hand at={K2.ksp} />
				<Expr x={126} y={360} size={50} at={K2.ksp + 10} terms={terms(K2.ksp + 16)} />
				<Sx x={126} y={440} text="equilibrium concentrations" size={32} color={INK_SOFT} hand at={K2.eqm} />
				<Fade at={K2.ksp + 10}><PicH p={SAT} x={720} y={400} h={190} /></Fade>
				<Fade at={K2.mix}><rect x={994} y={210} width={830} height={400} rx={22} fill="#fffdf8" stroke={CORAL} strokeWidth={3} /></Fade>
				<Sx x={1024} y={262} text="the mixture in front of you, right now" size={34} color={CORAL_INK} hand at={K2.mix} />
				<Expr x={1024} y={360} size={50} at={K2.same} base="Q" color={CORAL_INK} terms={terms(K2.same + 8)} />
				<Sx x={1024} y={440} text="the concentrations at this moment" size={32} color={INK_SOFT} hand at={K2.moment} />
				<Fade at={K2.mix + 10}><PicH p={UNSAT} x={1620} y={400} h={190} /></Fade>
				<Clock x={1560} y={460} at={K2.moment} />
				<Sx x={96} y={700} text="Qsp, the ion product" size={50} color={CORAL_INK} hand at={K2.ion} />
				<Sx x={96} y={750} text="the Ksp expression with the current concentrations" size={32} color={INK} hand at={K2.qsp} />
				<Chip x={1120} y={672} w={380} text="Q against K video" size={32} color={INK_SOFT} at={K2.just} />
				<Sx x={1120} y={756} text="it tells you which way things go" size={32} color={INK_SOFT} hand at={K2.way} />
				<LogLine ln={ln} at={K2.just} labels={false} out={K2.pbi} />
				<KMarker k={1} ln={ln} at={K2.just + 8} label="K" size={40} out={K2.pbi} />
				<QMarker ln={ln} at={K2.just + 14} value={10 ** 1.2} label="Q" side="mid" color={CORAL_INK} size={36} out={K2.pbi} />
				<PiecesM x={96} y={870} size={50} items={[{t: 'PbI_2:', at: K2.pbi, color: INK_SOFT}]} />
				<Expr x={290} y={870} size={50} at={K2.qis} base="Q" color={CORAL_INK} terms={[{t: 'Pb^{2+}', at: K2.qis + 10, color: CAT_INK}, {t: 'I^{-}', at: K2.sq - 6, color: AN_INK, p: '2', pAt: K2.sq + 4, pColor: AMBER_INK}]} />
				<Sx x={290} y={930} text="same powers as Ksp" size={34} color={AMBER_INK} hand at={K2.powers} />
				<MistakeChip x={1000} y={940} text="Qsp = [Pb^{2+}][I^{−}]" size={32} at={K2.sq + 20} />
				{void K2.eqm}{void K2.now}
			</Overlay>
		</>
	);
};

// ---------- 3. The decision: over, equal, under ----------
const H3 = 'qsp-decision';
const K3 = cues(sc(H3), {bigger: 'bigger than Ksp', more: 'more ions than', hold: 'can hold', lock: 'Ions lock together', ppt: 'a precipitate forms', until: 'until Qsp falls', back: 'back to Ksp', eq: 'Qsp equals Ksp', sat: 'just saturated', smaller: 'is smaller', nothing: 'nothing precipitates', dissolve: 'dissolve more'});
export const SceneDecideQ: React.FC = () => {
	const ln: Ln = {y: 400, x0: 300, x1: 1500, lo: -3, hi: 3};
	const e = (f: number) => kf(f, [[K3.bigger, 1.6], [K3.until, 1.6], [K3.back + 10, 0], [K3.smaller, 0], [K3.smaller + 26, -1.6]]);
	const lab = (f: number) => (f < K3.until ? 'Qsp > Ksp' : f < K3.smaller ? 'Qsp = Ksp' : 'Qsp < Ksp');
	const side = (f: number) => (f < K3.until ? 'right' : f < K3.smaller ? 'mid' : 'left') as 'right' | 'mid' | 'left';
	const n = (f: number) => kf(f, [[K3.smaller, 3], [K3.smaller + 20, 1]]);
	return (
		<>
			<Heading text="Compare Qsp with Ksp" at={4} size={60} />
			<Overlay>
				<LogLine ln={ln} at={0} labels={false} />
				<KMarker k={1} ln={ln} at={6} label="Ksp: saturated" size={42} />
				<QMarker ln={ln} at={K3.bigger} value={f => 10 ** e(f)} label={lab} side={side} color={CORAL_INK} size={40} />
				<Sx x={1540} y={ln.y + 10} text="more ions" size={30} color={INK_SOFT} hand at={6} />
				<Sx x={260} y={ln.y + 10} text="fewer ions" size={30} color={INK_SOFT} hand anchor="end" at={6} />
				<QspLens cx={1630} cy={770} r={190} at={K3.bigger - 6} cat="Ca^{2+}" an="SO_4^{2-}" n={n} lock={{appear: K3.bigger, at: K3.lock, n: 4, clearAt: K3.smaller}} />
				<Sx x={1630} y={1005} text="crowded: ions lock together" size={30} color={CORAL_INK} anchor="middle" hand at={K3.lock} out={K3.sat - 10} />
				<Sx x={1630} y={1005} text="saturated" size={30} color={TEAL} anchor="middle" hand at={K3.sat} out={K3.nothing - 10} />
				<Sx x={1630} y={1005} text="sparse: could dissolve more" size={30} color={INK_SOFT} anchor="middle" hand at={K3.nothing} />
				<Fade at={K3.ppt - 10}><rect x={96} y={630} width={1240} height={290} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<Sx x={130} y={700} text="Qsp > Ksp: a precipitate forms, until Qsp = Ksp" size={44} color={INK} hand at={K3.ppt} />
				<Sx x={130} y={790} text="Qsp = Ksp: saturated" size={44} color={INK} hand at={K3.sat} />
				<Sx x={130} y={880} text="Qsp < Ksp: no precipitate (could dissolve more)" size={44} color={INK} hand at={K3.nothing} />
				<MistakeChip x={96} y={950} text="Qsp < Ksp: precipitate" size={32} at={K3.dissolve + 6} />
				{void K3.more}{void K3.hold}
			</Overlay>
		</>
	);
};

// ---------- 4. Mixing spreads the ions (dilute first) ----------
const H4 = 'mixing-dilutes';
const K4 = cues(sc(H4), {miss: 'most people miss', mixed: 'are mixed', spreads: 'spreads into', comb: 'combined volume', fifty: 'Mix 50', hundred: '100 millilitres', halves: 'concentration halves', after: 'after mixing first', then: 'then Qsp'});
export const SceneMixing: React.FC = () => {
	const f = useCurrentFrame();
	const H = 200;
	const bw = picW(UNSAT, H);
	const b1 = {x: 120, y: 250}, b2 = {x: 470, y: 250};
	const tilt = kf(f, [[K4.mixed, 0], [K4.mixed + 26, 48], [K4.comb + 6, 48], [K4.comb + 30, 0]]);
	const pour = smooth(clamp01((f - K4.mixed - 20) / 70));
	const done = smooth(clamp01((f - K4.comb) / 20));
	const M = {x: 300, y: 600, w: 300, h: 320};
	const lip1 = platePt(UNSAT, b1.x, b1.y, H, 0.94, 0.06), lip2 = platePt(UNSAT, b2.x, b2.y, H, 0.06, 0.06);
	const streamO = clamp01((f - K4.mixed - 22) / 6) * (1 - clamp01((f - K4.comb - 4) / 8));
	const grow = smooth(clamp01((f - K4.hundred) / 30));
	const bar = 1 - 0.5 * smooth(clamp01((f - K4.halves + 6) / 24));
	return (
		<>
			<Heading text="Mixing dilutes every ion" at={4} size={60} />
			<Overlay>
				<g opacity={1 - 0.85 * done} transform={`rotate(${tilt},${b1.x + bw},${b1.y + 20})`}><PicH p={UNSAT} x={b1.x} y={b1.y} h={H} /></g>
				<g opacity={1 - 0.85 * done} transform={`rotate(${-tilt},${b2.x},${b2.y + 20})`}><PicH p={UNSAT} x={b2.x} y={b2.y} h={H} /></g>
				<Sx x={b1.x + bw / 2} y={b1.y + H + 40} text="50 mL" size={36} color={INK} anchor="middle" hand at={2} out={K4.mixed} />
				<Sx x={b2.x + bw / 2} y={b2.y + H + 40} text="50 mL" size={36} color={INK} anchor="middle" hand at={2} out={K4.mixed} />
				{streamO > 0.01 ? (
					<g opacity={streamO}>
						<path d={`M${lip1[0] + 26},${lip1[1] + 20} Q${M.x + 70},${M.y - 120} ${M.x + 110},${M.y + 40}`} fill="none" stroke="#9cc9e6" strokeWidth={9} strokeLinecap="round" />
						<path d={`M${lip2[0] - 26},${lip2[1] + 20} Q${M.x + M.w - 70},${M.y - 120} ${M.x + M.w - 110},${M.y + 40}`} fill="none" stroke="#9cc9e6" strokeWidth={9} strokeLinecap="round" />
					</g>
				) : null}
				<CodeBeaker x={M.x} y={M.y} w={M.w} h={M.h} level={0.84 * pour} at={K4.mixed - 6} ticks={[0.42, 0.84]} />
				<Sx x={M.x + M.w + 20} y={M.y + M.h - 8 - (M.h - 22) * 0.42 + 10} text="50 mL" size={28} color={INK_SOFT} hand at={K4.mixed} />
				<Sx x={M.x + M.w + 20} y={M.y + M.h - 8 - (M.h - 22) * 0.84 + 10} text="100 mL" size={32} color={TEAL} hand at={K4.comb} />
				<Sx x={M.x + M.w / 2} y={M.y + M.h + 50} text="combined volume" size={34} color={TEAL} anchor="middle" hand at={K4.comb} />
				{/* the same 8 ions, then twice the volume */}
				<Sx x={880} y={260} text="the same ions" size={34} color={INK_SOFT} hand at={K4.spreads} />
				<IonBox x={880} y={290} w={320} h={210} grow={grow} at={K4.spreads} ion="Ca^{2+}" />
				<Sx x={1220} y={400} text="50 mL" size={32} color={INK} hand at={K4.spreads} out={K4.hundred} />
				<Sx x={1220} y={610} text="100 mL" size={32} color={TEAL} hand at={K4.hundred + 10} />
				<Fade at={K4.fifty}>
					<path d={`M1400,${810 - 300} L1400,810 L1560,810`} fill="none" stroke={INK} strokeWidth={4} />
					<rect x={1430} y={810 - 300 * bar} width={90} height={300 * bar} rx={8} fill={CAT_INK} opacity={0.55} stroke={CAT_INK} strokeWidth={3} />
					<path d={`M1420,510 L1540,510`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" opacity={1 - bar < 0.01 ? 0 : 1} />
					<Sx x={1475} y={850} text="concentration" size={30} color={INK_SOFT} anchor="middle" hand at={K4.fifty} />
				</Fade>
				<Sx x={1580} y={600} text="same ions," size={34} color={AMBER_INK} hand at={K4.halves} />
				<Sx x={1580} y={644} text="twice the volume:" size={34} color={AMBER_INK} hand at={K4.halves + 6} />
				<Sx x={1580} y={688} text="half the concentration" size={34} color={AMBER_INK} hand at={K4.halves + 12} />
				<Fade at={K4.after - 6}><rect x={760} y={930} width={1060} height={90} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<PiecesM x={790} y={990} size={42} items={[{t: '1  concentrations after mixing', at: K4.after, hand: true, color: TEAL}, {t: '→  2  then Qsp', at: K4.then, hand: true, color: TEAL}]} />
				{void K4.miss}{void DrawPath}{void INK}{void Ring}{void MistakeChip}
			</Overlay>
		</>
	);
};
