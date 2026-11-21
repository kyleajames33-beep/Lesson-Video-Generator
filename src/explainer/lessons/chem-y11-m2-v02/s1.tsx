// Y11 Chem M2 V02 scenes 2 to 6: counting in bulk (dots fall into a dozen box with a live counter, the same count
// for big things, five dozen, then the "1 mol" box), the mole and the Avogadro constant (the box opens to 6.022 x
// 10^23 particles; the violet N_A card; the amber chemical-amount card), the scale stage (the counting dial with live
// counted and time readouts, the universe bars, the painted measuring cylinder and the power-of-ten strip), why this
// number (the painted carbon lump, the carbon-12 card and the relative-mass tile) and the N to n slider stage (the
// bridge builds large, the n handle sweeps 0 to 2.5 mol while mole tiles drop and N ticks live, then runs back to
// 0.50 mol; the bridge shrinks to the top right). Scene 1 (the hook) is in hook.tsx.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BAL, CYL, CYL_N, D, LUMP, NA, NA_S, NA_UNIT, R, RIBBON, YEARS, dur, fix, ph, pw, sc, sci} from './common';
import {
	AMB_S, AMB_SOFT, AMB_T, Balance, Bracket, Bridge, Chip, CountBox, Dial, DotField, Fade, Framed, GREEN_S, Heading, INK, MoleTile, NAVY_SOFT, NAVY_T, NSlider, PAPER,
	PenArrow, PenRing, Plate, PowStrip, Readout, Reveal, Rich, SMALL_BRIDGE, SVG, Sx, VIO_S, VIO_SOFT, VIO_T, Write, balGeo, clamp01, gridPts, kf, lerp, nX, prog,
	richW, smooth, span,
} from './parts';
import type {BridgeG} from './parts';

// ---------- the balance and ribbon (scene 1's anchor), drawn at any size ----------
export const BAL1 = {x: 96, y: 420, h: 440};
export const BalRibbon: React.FC<{x: number; y: number; h: number; text?: string; ribbon?: number; o?: number}> = ({x, y, h, text = '0.24 g', ribbon = 1, o = 1}) => {
	if (o <= 0.005) return null;
	const g = balGeo(x, y, h);
	const rw = 300 * (h / 440), rh = ph(RIBBON, rw);
	return (
		<g opacity={o}>
			<Balance g={g} text={text} />
			{ribbon > 0.005 ? <Plate p={RIBBON} x={g.pan[0] - rw / 2} y={g.pan[1] + 18 * (h / 440) - rh} h={rh} o={ribbon} /> : null}
		</g>
	);
};
void BAL;

// ---------- 2. counting in bulk ----------
const K2 = cues(sc('counting-unit'), {they: 'They count', unit: 'counting unit', dozen1: 'A dozen', ream: 'a ream', eggs: 'Twelve eggs', melons: 'watermelons', still: 'still a dozen', five: 'five dozen', sixty: 'sixty', one: 'each one', chemists: 'Chemists use', mole: 'called the mole'});
const BA = {x: 110, y: 280, w: 470, h: 400};
const BB = {x: 660, y: 270, w: 520, h: 410};
const SMALL_F = '#f1dfb8', BIG_F = '#6aa84f';
export const MOLE_BOX2 = {x: 1240, y: 560, w: 580, h: 300};
const land = (i: number) => K2.they + 4 + i * 9;
/** Everything on the counting board at frame f (so scene 3 can fade it out). */
const Board2: React.FC<{f: number; o?: number}> = ({f, o = 1}) => {
	if (o <= 0.005) return null;
	const ptsA = gridPts(BA.x + 20, BA.y + 20, BA.w - 40, BA.h - 40, 4, 3);
	const ptsB = gridPts(BB.x + 20, BB.y + 20, BB.w - 40, BB.h - 40, 4, 3);
	const count = Array.from({length: 12}, (_, i) => i).filter(i => f >= land(i) + 10).length;
	const bIn = prog(f, K2.melons - 20, 14);
	const five = prog(f, K2.five, 14);
	const moleIn = prog(f, K2.mole - 18, 14);
	return (
		<g opacity={o}>
			<CountBox x={BA.x} y={BA.y} w={BA.w} h={BA.h} label="small things" color={NAVY_T}>
				{ptsA.map(([x, y], i) => {
					const t = clamp01((f - land(i)) / 10);
					if (t <= 0) return null;
					return <circle key={i} cx={x} cy={lerp(BA.y + 20, y, smooth(t))} r={30} fill={SMALL_F} stroke={INK} strokeWidth={3} />;
				})}
			</CountBox>
			<g opacity={1 - prog(f, K2.eggs, 12)}>
				<Sx x={BA.x + BA.w + 60} y={BA.y + 60} text="count" size={40} color={NAVY_T} weight={800} at={-1000} />
				<Sx x={BA.x + BA.w + 60} y={BA.y + 170} text={`${count}`} size={110} color={NAVY_T} weight={800} at={-1000} />
			</g>
			<Sx x={BA.x + BA.w / 2} y={BA.y + BA.h + 62} text="1 dozen = 12" size={44} color={NAVY_T} anchor="middle" weight={800} at={K2.dozen1} />
			<Chip x={660} y={600} segs={[{t: 'counting unit: a fixed number'}]} at={K2.unit} out={K2.melons - 30} size={44} color={NAVY_T} />
			<Chip x={1240} y={250} segs={[{t: '1 ream = 500 sheets'}]} at={K2.ream} out={K2.five - 10} size={44} color={INK} />
			{bIn > 0.005 ? (
				<g opacity={bIn}>
					<CountBox x={BB.x} y={BB.y} w={BB.w} h={BB.h} label="big things" color={NAVY_T}>
						{ptsB.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={40} fill={BIG_F} stroke={INK} strokeWidth={3} opacity={prog(f, K2.melons - 20 + i * 2, 8)} />)}
					</CountBox>
					<Sx x={BB.x + BB.w / 2} y={BA.y + BA.h + 62} text="1 dozen = 12" size={44} color={NAVY_T} anchor="middle" weight={800} at={K2.melons + 8} />
				</g>
			) : null}
			<Bracket a={[BA.x, 772]} b={[BB.x + BB.w, 772]} at={K2.still} color={NAVY_T} depth={22} />
			<Write x={(BA.x + BB.x + BB.w) / 2} y={872} text="same count" at={K2.still + 10} size={46} color={NAVY_T} anchor="middle" />
			{five > 0.005 ? (
				<g opacity={five}>
					{Array.from({length: D.dozens}, (_, k) => {
						const x = 1240 + k * 116, y = 250;
						const v = prog(f, K2.five + k * 4, 10);
						return (
							<g key={k} opacity={v} transform={`translate(0,${(1 - smooth(v)) * -30})`}>
								<rect x={x} y={y} width={104} height={104} rx={12} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
								{gridPts(x + 8, y + 8, 88, 88, 4, 3).map(([px, py], i) => <circle key={i} cx={px} cy={py} r={8} fill={SMALL_F} stroke={INK} strokeWidth={2} />)}
							</g>
						);
					})}
					<Sx x={1240} y={400} text="5 dozen" size={34} color={NAVY_T} weight={800} at={-1000} />
					<Rich x={1240} y={480} segs={[{t: `${D.dozens} dozen = ${D.dozens} × ${D.dozen} = `, c: NAVY_T}]} size={44} at={K2.sixty} />
					<Framed x={1240 + richW([{t: `${D.dozens} dozen = ${D.dozens} × ${D.dozen} = `}], 44)} y={480} segs={[{t: `${D.dozens * D.dozen}`, c: NAVY_T}]} at={K2.sixty + 6} size={44} tick={false} />
					<Write x={1240} y={540} text="no need to count each one" at={K2.one} size={40} color={INK} />
				</g>
			) : null}
			{moleIn > 0.005 ? (
				<g opacity={moleIn}>
					<CountBox x={MOLE_BOX2.x} y={MOLE_BOX2.y + 40} w={MOLE_BOX2.w} h={MOLE_BOX2.h - 40} label="1 mol" color={AMB_T} size={44} fill={AMB_SOFT}>
						<DotField x={MOLE_BOX2.x + 10} y={MOLE_BOX2.y + 50} w={MOLE_BOX2.w - 20} h={MOLE_BOX2.h - 60} n={420} r={2.6} color="#5b6470" seed={5} jitter={0.8} />
					</CountBox>
				</g>
			) : null}
			<Write x={MOLE_BOX2.x - 20} y={820} text="a chemist's dozen" at={K2.mole} size={44} color={AMB_T} anchor="end" />
		</g>
	);
};
export const SceneCounting: React.FC = () => {
	const f = useCurrentFrame();
	const m = span(f, 0, 16);
	return (
		<SVG>
			<Heading text="The mole: counting particles" at={-1000} />
			{/* the balance and ribbon shrink to a thumbnail at the top right */}
			<BalRibbon x={BAL1.x} y={BAL1.y} h={BAL1.h} o={1 - m} />
			<BalRibbon x={1660} y={26} h={120} o={m} text="" />
			<Board2 f={f} />
			{void K2.chemists}
		</SVG>
	);
};

// ---------- 3. the mole and the Avogadro constant ----------
const K3 = cues(sc('mole-and-avogadro'), {one: 'One mole', particles: 'particles', avog: 'Avogadro constant', amedeo: 'Amedeo', written: "It's written", per: 'per mole', each: 'each mole', when: 'When we count', chem: 'chemical amount', small: 'small n', unit: 'and its unit is the', mol: 'written m o l'});
const BIG3 = {x: 96, y: 230, w: 820, h: 420};
const TALL3 = {h: 660};
export const SceneMoleAvogadro: React.FC = () => {
	const f = useCurrentFrame();
	const e = span(f, 0, 30);
	const sh = span(f, K3.chem - 16, K3.chem + 6);
	const bx = lerp(MOLE_BOX2.x, BIG3.x, e), by = lerp(MOLE_BOX2.y + 40, BIG3.y, e), bw = lerp(MOLE_BOX2.w, BIG3.w, e), bh = lerp(MOLE_BOX2.h - 40, lerp(TALL3.h, BIG3.h, sh), e);
	const naX = 1000, naY = 210;
	const valSegs = [{t: 'N_A = ', c: VIO_T}, {t: `${NA_S} `, c: VIO_T}, {t: NA_UNIT, c: VIO_T}];
	const unitX = naX + 40 + richW(valSegs.slice(0, 2), 48);
	const unitW = richW([{t: NA_UNIT}], 48);
	return (
		<SVG>
			<Heading text="The mole: counting particles" at={-1000} />
			<Board2 f={dur('counting-unit') - 1} o={1 - prog(f, 0, 14)} />
			<CountBox x={bx} y={by} w={bw} h={bh} label="1 mol" color={AMB_T} size={44} fill={AMB_SOFT}>
				<DotField x={bx + 10} y={by + 10} w={bw - 20} h={bh - 20} n={900} r={2.8} color="#5b6470" seed={5} jitter={0.8} />
			</CountBox>
			<Fade at={K3.particles - 4}>
				<rect x={BIG3.x + 40} y={by + bh - 130} width={BIG3.w - 80} height={100} rx={16} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
			</Fade>
			<Reveal at={K3.particles - 2} dur={24}>
				<Rich x={BIG3.x + BIG3.w / 2} y={by + bh - 60} segs={[{t: NA_S, c: NAVY_T}, {t: ' particles', c: NAVY_T}]} size={56} anchor="middle" />
			</Reveal>
			<Fade at={K3.one + 10} out={K3.chem - 16}>
				<rect x={1000} y={540} width={824} height={130} rx={18} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
				<Rich x={1030} y={594} segs={[{t: 'a dozen: ', c: INK}, {t: '12 things', c: NAVY_T}]} size={40} />
				<Rich x={1030} y={648} segs={[{t: 'a mole: ', c: AMB_T}, {t: `${NA_S} things`, c: NAVY_T}]} size={40} />
			</Fade>
			{/* the violet N_A card */}
			<Fade at={K3.avog}>
				<rect x={naX} y={naY} width={824} height={230} rx={20} fill={VIO_SOFT} stroke={VIO_S} strokeWidth={5} />
				<Sx x={naX + 40} y={naY + 70} text="Avogadro constant" size={48} color={VIO_T} weight={800} at={-1000} />
			</Fade>
			<Reveal at={K3.avog + 14} dur={22}>
				<Rich x={naX + 40} y={naY + 160} segs={valSegs} size={48} />
			</Reveal>
			<Sx x={naX + 804} y={naY + 70} text="HSC data sheet" size={30} color={INK} anchor="end" weight={700} at={K3.amedeo} />
			<PenRing cx={unitX + unitW / 2 + 12} cy={naY + 146} rx={unitW / 2 + 12} ry={42} at={K3.per} color={VIO_S} seed={5} />
			<Write x={naX + 40} y={naY + 300} text="per mole: particles in each mole" at={K3.each} size={44} color={VIO_T} />
			{/* the amber chemical-amount card */}
			<Fade at={K3.chem - 10}>
				<rect x={96} y={700} width={1728} height={226} rx={20} fill={AMB_SOFT} stroke={AMB_S} strokeWidth={5} />
				<Sx x={130} y={760} text="counting a substance in moles:" size={34} color={INK} weight={700} at={-1000} />
			</Fade>
			<Reveal at={K3.chem} dur={16}>
				<Rich x={130} y={832} segs={[{t: 'chemical amount', c: AMB_T}]} size={52} />
			</Reveal>
			<Reveal at={K3.small} dur={20}>
				<Rich x={130 + richW([{t: 'chemical amount'}], 52)} y={832} segs={[{t: ', n', c: AMB_T}, {t: ': a count of particles, in moles', c: INK}]} size={52} />
			</Reveal>
			<Reveal at={K3.mol - 4} dur={10}>
				<Rich x={130 + richW([{t: 'chemical amount, n: a count of particles, in moles'}], 52)} y={832} segs={[{t: ' (mol)', c: AMB_T}]} size={52} />
			</Reveal>
			<Sx x={130} y={898} text="also called amount of substance" size={34} color={INK} weight={700} at={K3.unit} />
			<Write x={1790} y={898} text="n counts in moles" at={K3.mol} size={44} color={AMB_T} anchor="end" />
			{void K3.one}{void NAVY_SOFT}
		</SVG>
	);
};

// ---------- 4. how big is a mole? ----------
const K4 = cues(sc('scale'), {how: 'How big', counted: 'If you counted', every: 'every second', one: 'one mole would', years: 'years', universe: 'universe', yet: 'Yet a mole', table: 'tablespoon', small: 'how small', are: 'are'});
const T0 = K4.counted + 9;
/** Particles counted at frame f: one per second, then a fast-forward (log scale) to one mole at "years". */
const counted = (f: number) => {
	if (f < T0) return 0;
	const slow = Math.min(4, Math.floor((f - T0) / 30) + 1);
	if (f < K4.one) return slow;
	const p = smooth(clamp01((f - K4.one) / (K4.years + 8 - K4.one)));
	return 10 ** lerp(Math.log10(4), Math.log10(NA), p);
};
const fmtCount = (n: number) => (n < 1000 ? `${Math.round(n)}` : sci(n, n >= NA * 0.999 ? 3 : 1));
const fmtTime = (n: number) => {
	if (n < 60) return `${Math.round(n)} s`;
	const y = n / D.yearS;
	if (y < 1) return `${sci(n, 1)} s`;
	return y >= YEARS * 0.999 ? `≈ ${R.years} years` : `${sci(y, 1)} years`;
};
export const CYL4 = {cx: 1520, top: 210, h: 600};
export const ScaleBoard: React.FC<{f: number; shrink: number; o?: number}> = ({f, shrink, o = 1}) => {
	if (o <= 0.005) return null;
	const n = counted(f);
	const turns = f < K4.one ? Math.min(4, Math.max(0, (f - T0) / 30)) / 60 : 4 / 60 + (f - K4.one) * 0.12 * clamp01((K4.years + 8 - f) / 20 + 0.2);
	const s = lerp(1, 0.72, shrink);
	return (
		<g opacity={o} transform={`translate(96,210) scale(${s}) translate(-96,-210)`}>
			<Dial cx={390} cy={560} r={260} turns={Math.min(turns, 40)} />
			<Sx x={760} y={350} text="particles counted" size={40} color={NAVY_T} weight={800} at={-1000} />
			<Readout x={760} y={372} w={820} text={fmtCount(n)} color={NAVY_T} size={66} />
			<Sx x={760} y={560} text="time taken (one per second)" size={40} color={INK} weight={800} at={-1000} />
			<Readout x={760} y={582} w={820} text={fmtTime(n)} color={INK} size={66} frame={INK} />
		</g>
	);
};
export const SceneScale: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = span(f, K4.universe - 12, K4.universe + 12);
	const cylIn = span(f, K4.table - 6, K4.table + 20);
	const cw = pw(CYL, CYL4.h);
	const cx = lerp(2100, CYL4.cx, cylIn);
	const k = CYL4.h / CYL.box[3];
	const X = (u: number) => cx - cw / 2 + (u - CYL.box[0]) * k, Y = (v: number) => CYL4.top + (v - CYL.box[1]) * k;
	const level = lerp(CYL_N.base, CYL_N.top, 0.2);
	const fill = prog(f, K4.table + 14, 18);
	const uni = prog(f, K4.universe, 14) * (1 - prog(f, K4.table - 10, 12));
	const longP = span(f, K4.universe + 10, K4.universe + 40);
	return (
		<SVG>
			<Heading text="How big is a mole?" at={0} />
			<ScaleBoard f={f} shrink={shrink} />
			<Write x={1140} y={850} text="one per second" at={K4.every} out={K4.universe - 14} size={56} color={NAVY_T} anchor="middle" />
			<PenArrow a={[920, 840]} b={[640, 760]} at={K4.every + 8} out={K4.universe - 14} color={NAVY_T} bend={0.15} />
			{uni > 0.005 ? (
				<g opacity={uni}>
					<Sx x={120} y={706} text={`age of the universe ≈ ${R.universe} years`} size={34} color={INK} weight={800} at={-1000} />
					<rect x={120} y={724} width={40} height={30} rx={4} fill="#8a8478" stroke={INK} strokeWidth={3} />
					<rect x={120} y={790} width={(1660 - 120) * longP} height={38} rx={4} fill={NAVY_T} />
					{longP > 0.99 ? <path d="M1660,780 l26,0 l-14,30 l28,30 l-14,0" fill="none" stroke={INK} strokeWidth={4} /> : null}
					{longP > 0.99 ? <path d="M1708,809 l100,0 M1786,792 l22,17 l-22,17" fill="none" stroke={NAVY_T} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /> : null}
					<Sx x={120} y={884} text={`counting one mole: ≈ ${R.years} years`} size={34} color={NAVY_T} weight={800} at={K4.universe + 20} />
					<Write x={1220} y={884} text={`× ${Math.floor(TIMES_UNIVERSE_M)} million+`} at={K4.universe + 26} size={48} color={INK} />
				</g>
			) : null}
			{/* the painted measuring cylinder with a mole of water */}
			{cylIn > 0.005 ? (
				<g>
					<Plate p={CYL} x={cx - cw / 2} y={CYL4.top} h={CYL4.h} />
					{fill > 0.005 ? (
						<g opacity={fill}>
							<rect x={X(CYL_N.l)} y={Y(level)} width={X(CYL_N.r) - X(CYL_N.l)} height={Y(CYL_N.base) - Y(level)} fill="#5b9fd0" opacity={0.62} />
							<path d={`M${X(CYL_N.l)},${Y(level)} Q${(X(CYL_N.l) + X(CYL_N.r)) / 2},${Y(level) + 10} ${X(CYL_N.r)},${Y(level)}`} fill="none" stroke="#2d6f9c" strokeWidth={4} />
						</g>
					) : null}
				</g>
			) : null}
			<Write x={1360} y={560} text="only this much!" at={K4.table + 18} size={52} color={INK} anchor="end" />
			<Sx x={1360} y={650} text="1 mol of water" size={42} color={AMB_T} anchor="end" weight={800} at={K4.table + 10} />
			<Sx x={1360} y={700} text="molecules" size={42} color={AMB_T} anchor="end" weight={800} at={K4.table + 10} />
			<PenArrow a={[1370, 676]} b={[X(CYL_N.l) - 10, Y(level) + 30]} at={K4.table + 26} color={INK} bend={0.2} />
			<PowStrip x={150} y={830} w={1050} m={23} markAt={K4.are - 14} label="1 mol" at={K4.small - 8} />
			{void K4.how}{void K4.yet}{void AMB_S}
		</SVG>
	);
};
const TIMES_UNIVERSE_M = YEARS / D.universe / 1e6;

// ---------- 5. why that number? ----------
const K5 = cues(sc('why-this-number'), {why: 'Why such', chosen: 'chosen to link', weighing: 'weighing', twelve: 'Twelve grams', almost: 'almost exactly', so: 'so a mole of particles', know: 'already know', next: 'next time', now: 'For now', count: 'a count'});
const LUMP5 = {x: 110, y: 250, h: 330};
export const SceneWhyNumber: React.FC = () => {
	const f = useCurrentFrame();
	const tile = {x: 1440, y: 250, w: 250, h: 250};
	const boxIn = prog(f, K5.now - 6, 14);
	return (
		<SVG>
			<Heading text="Why this number?" at={4} />
			{/* scene 4's board leaves; the strip stays */}
			<ScaleBoard f={599} shrink={1} o={1 - prog(f, 0, 14)} />
			<g opacity={1 - prog(f, 0, 16)} transform={`translate(${span(f, 0, 20) * 500},0)`}>
				<Plate p={CYL} x={CYL4.cx - pw(CYL, CYL4.h) / 2} y={CYL4.top} h={CYL4.h} />
			</g>
			<PowStrip x={150} y={830} w={1050} m={23} markAt={-1000} label="1 mol" out={K5.now} />
			<Plate p={LUMP} x={LUMP5.x} y={LUMP5.y} h={LUMP5.h} at={6} dy={20} />
			<Sx x={LUMP5.x + pw(LUMP, LUMP5.h) / 2} y={LUMP5.y + LUMP5.h + 50} text="carbon" size={34} color={INK} anchor="middle" weight={800} at={10} />
			<Write x={560} y={250} text="link counting with weighing" at={K5.chosen} size={46} color={INK} />
			<Fade at={K5.twelve}>
				<rect x={540} y={290} width={800} height={110} rx={18} fill={PAPER} stroke={INK} strokeWidth={4} />
			</Fade>
			<Reveal at={K5.twelve} dur={24}>
				<Rich x={570} y={364} segs={[{t: 'carbon-12: '}, {t: '12 g'}, {t: ' ≈ '}, {t: '1 mol of atoms', c: AMB_T}]} size={48} />
			</Reveal>
			<Write x={570} y={470} text="almost exactly" at={K5.almost} size={44} color={INK} />
			<PenArrow a={[540, 345]} b={[LUMP5.x + pw(LUMP, LUMP5.h) + 6, 380]} at={K5.twelve + 16} color={INK} bend={0.2} />
			{/* the relative atomic mass tile */}
			<Fade at={K5.know - 6}>
				<rect x={tile.x} y={tile.y} width={tile.w} height={tile.h} rx={14} fill={PAPER} stroke={INK} strokeWidth={5} />
				<Sx x={tile.x + tile.w / 2} y={tile.y + 140} text="C" size={110} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={tile.x + tile.w / 2} y={tile.y + 214} text="12.0" size={48} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={tile.x + tile.w / 2} y={tile.y + tile.h + 44} text="next video" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<path d={`M1340,345 L${tile.x - 14},${tile.y + 110}`} stroke={INK} strokeWidth={4} strokeDasharray="12 9" fill="none" />
				<path d={`M${tile.x - 30},${tile.y + 96} L${tile.x - 12},${tile.y + 110} L${tile.x - 32},${tile.y + 122}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" />
			</Fade>
			<Write x={1440} y={620} text="the link to weighing" at={K5.know + 8} size={46} color={INK} />
			<Sx x={1440} y={664} text="relative atomic mass" size={30} color={INK} weight={700} at={K5.know + 8} />
			{/* counting linked with weighing */}
			<Rich x={560} y={360} segs={[{t: 'Why '}, {t: NA_S, c: NAVY_T}, {t: '?'}]} size={60} at={-1000} out={K5.twelve - 6} />
			<Fade at={-1000} out={K5.now - 10}>
				<Dial cx={640} cy={600} r={86} turns={0.15 + f * 0.004} />
				<Sx x={640} y={726} text="counting" size={36} color={NAVY_T} anchor="middle" weight={800} at={-1000} />
				<BalRibbon x={960} y={510} h={170} text="" ribbon={0} />
				<Sx x={1080} y={726} text="weighing" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
				<path d="M750,600 L930,600 M766,588 L750,600 L766,612 M914,588 L930,600 L914,612" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" transform="translate(0,0)" />
			</Fade>
			{/* the mole returns as a count */}
			{boxIn > 0.005 ? (
				<g opacity={boxIn}>
					<CountBox x={560} y={720} w={700} h={190} label="1 mol" color={AMB_T} size={40} fill={AMB_SOFT}>
						<DotField x={570} y={730} w={680} h={80} n={300} r={2.4} color="#5b6470" seed={9} jitter={0.6} />
						<Rich x={910} y={882} segs={[{t: NA_S, c: NAVY_T}, {t: ' particles', c: NAVY_T}]} size={52} anchor="middle" />
					</CountBox>
				</g>
			) : null}
			<PenRing cx={910} cy={815} rx={390} ry={130} at={K5.count - 8} color={AMB_S} seed={2} />
			<Write x={1340} y={800} text="a count," at={K5.count - 4} size={48} color={AMB_T} />
			<Write x={1340} y={860} text="like a dozen" at={K5.count + 2} size={48} color={AMB_T} />
			{void K5.why}{void K5.weighing}{void K5.so}{void K5.next}
		</SVG>
	);
};

// ---------- 6. N and n: the slider ----------
const K6 = cues(sc('n-and-N'), {two: 'two numbers', huge: 'huge count', capN: 'Capital N', nounit: 'no unit', smalln: 'Small n', moles: 'in moles', linked: 'linked', avog: 'Avogadro constant', number: 'The number of particles equals', times: 'times N A', back: 'going back', divided: 'divided by'});
export const BIG6: BridgeG = {x: 96, y: 200, wN: 700, wn: 700, h: 150, gap: 328, size: 42};
const SL = {x0: 330, x1: 1150, y: 640};
const SW_A = K6.number + 6;
/** n on the slider at frame f (sweep 0, 1, 2, 2.5 mol; then back to 0.50 mol). */
const nAt = (f: number) => kf(f, [[SW_A, 0], [SW_A + 18, 1], [SW_A + 30, 1], [SW_A + 48, 2], [SW_A + 58, 2], [SW_A + 72, D.slider[3]], [K6.back + 16, D.slider[3]], [K6.divided + 10, D.back.N / NA]]);
export const SceneNandN: React.FC = () => {
	const f = useCurrentFrame();
	const n = nAt(f);
	const N = n * NA;
	const out = span(f, 662, 678);
	const g: BridgeG = {
		x: lerp(BIG6.x, SMALL_BRIDGE.x, out), y: lerp(BIG6.y, SMALL_BRIDGE.y, out), wN: lerp(BIG6.wN, SMALL_BRIDGE.wN, out), wn: lerp(BIG6.wn, SMALL_BRIDGE.wn, out),
		h: lerp(BIG6.h, SMALL_BRIDGE.h, out), gap: lerp(BIG6.gap, SMALL_BRIDGE.gap, out), size: lerp(BIG6.size, SMALL_BRIDGE.size, out),
	};
	const lines = out > 0.5 ? {N: ['N: number of particles'], n: ['n: amount (mol)']} : {N: ['N: number of particles', '(no unit)'], n: ['n: chemical amount', '(mol)']};
	const fade = 1 - out;
	const whole = Math.floor(n + 1e-6), half = n - whole >= 0.49;
	const reverse = f >= K6.back + 16;
	const nTxt = `n = ${fix(n, 2)} mol`;
	const NTxt = `N = ${N < 1 ? '0' : sci(N, 3)}`;
	return (
		<SVG>
			<Heading text="N and n" at={4} out={662} />
			<Bridge g={g} NLines={lines.N} nLines={lines.n} NAt={-1000} nAt={-1000} mulAt={K6.avog} divAt={K6.back} arrowSize={out > 0.5 ? 30 : 44} />
			<g opacity={fade}>
				<PenRing cx={BIG6.x + BIG6.wN / 2} cy={BIG6.y + BIG6.h / 2} rx={BIG6.wN / 2 + 20} ry={BIG6.h / 2 + 22} at={K6.capN} out={K6.smalln} color={NAVY_T} seed={3} />
				<PenRing cx={BIG6.x + BIG6.wN + BIG6.gap + BIG6.wn / 2} cy={BIG6.y + BIG6.h / 2} rx={BIG6.wn / 2 + 20} ry={BIG6.h / 2 + 22} at={K6.smalln} out={K6.linked} color={AMB_S} seed={5} />
				<Write x={BIG6.x + 20} y={BIG6.y + BIG6.h + 50} text="a huge count" at={K6.huge} out={K6.number} size={44} color={NAVY_T} />
				<Write x={BIG6.x + BIG6.wN + BIG6.gap + 20} y={BIG6.y + BIG6.h + 50} text="counted in moles" at={K6.moles} out={K6.number} size={44} color={AMB_T} />
			</g>
			<g opacity={fade}>
				<Write x={330} y={480} text="two numbers to keep apart" at={K6.two} out={K6.number - 8} size={56} color={INK} />
				<Reveal at={K6.number} dur={20}>
					<Rich x={330} y={470} segs={[{t: 'N', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'N_A', c: VIO_T}]} size={56} />
				</Reveal>
				<Reveal at={K6.divided} dur={20}>
					<Rich x={800} y={470} segs={[{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'N', c: NAVY_T}, {t: ' ÷ '}, {t: 'N_A', c: VIO_T}]} size={56} />
				</Reveal>
				<Write x={330} y={548} text="× N_A every time" at={K6.times} out={K6.back} size={44} color={VIO_T} />
				<Write x={800} y={548} text="count → moles: divide" at={K6.divided + 8} size={44} color={NAVY_T} />
				<NSlider x0={SL.x0} x1={SL.x1} y={SL.y} n={n} />
				<Sx x={SL.x0 - 40} y={SL.y + 12} text="n" size={44} color={AMB_T} anchor="end" weight={800} at={-1000} />
				<Readout x={1290} y={460} w={534} text={nTxt} color={AMB_T} frame={AMB_S} size={52} />
				<Readout x={1290} y={600} w={534} text={NTxt} color={NAVY_T} size={52} />
				<Sx x={1300} y={450} text="chemical amount" size={30} color={AMB_T} weight={800} at={-1000} />
				<Sx x={1300} y={590} text="number of particles" size={30} color={NAVY_T} weight={800} at={-1000} />
				<MoleTile x={110} y={770} w={150} h={140} seed={29} />
				<Sx x={280} y={830} text={`1 tile = 1 mol`} size={34} color={AMB_T} weight={800} at={-1000} />
				<Sx x={280} y={874} text={`= ${NA_S}`} size={34} color={NAVY_T} weight={800} at={-1000} />
				<Sx x={280} y={914} text="particles" size={34} color={NAVY_T} weight={800} at={-1000} />
				{reverse ? <Write x={1330} y={760} text="start from N" at={K6.back + 16} size={44} color={NAVY_T} /> : null}
				{/* the tray of mole tiles */}
				{Array.from({length: whole}, (_, i) => <MoleTile key={i} x={640 + i * 200} y={770} w={180} h={140} seed={11 + i} />)}
				{half ? <MoleTile x={640 + whole * 200} y={770} w={180} h={140} frac={0.5} seed={19} /> : null}
				<Sx x={960} y={404} text="mol × mol^{−1} = no unit" size={30} color={INK} anchor="middle" weight={800} at={K6.times + 10} />
			</g>
			{void K6.two}{void K6.nounit}{void K6.moles}{void K6.linked}{void nX}{void GREEN_S}{void prog}
		</SVG>
	);
};
