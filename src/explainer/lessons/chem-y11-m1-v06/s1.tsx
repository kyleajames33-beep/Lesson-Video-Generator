// Y11 Chem M1 V06 scenes 1 to 5: V05's final bench gives way to the 20.00 g mixture, the separation in fast forward
// (a four-slot process strip), weighing by difference on the balance (one reading model drives the display and the
// rows), percentage by mass with the accounting bar, and the conservation board (three painted containers, model
// tokens that move but never change in number, the bar splitting and rejoining).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BASIN_X, DRYB, FILT, HOTB, SALT, SAND, SANDB, WG, g2, sc} from './common';
import {
	AMB, AccBar, BasinBowl, Balance, Bracket, Chip, Chromatogram, DrawPath, Drops, Fade, Framed, GivensCard, Heading, INK, MIX, PURE, PenArrow, PenRing, Plate, ROSE,
	Readout, Rich, SALT_F, SAND_F, SAND_INK, SVG, Sx, TaskStrip, Write, balGeo, clamp01, kf, placeAt, plateMap, prog, richW, smooth, tw, ArrowLine,
} from './parts';
import type {BarSeg} from './parts';

/** Linear tick between two readings over [a, b] frames, rounded to the balance's 0.01 g. */
export const tick = (f: number, a: number, b: number, v0: number, v1: number) => Math.round((v0 + (v1 - v0) * clamp01((f - a) / (b - a))) * 100) / 100;
/** A group that slides by (dx, dy) and fades over [at, at + d]. */
const Slide: React.FC<{at: number; dx: number; dy?: number; d?: number; fadeOut?: boolean; children: React.ReactNode}> = ({at, dx, dy = 0, d = 20, fadeOut = true, children}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, d));
	const o = fadeOut ? 1 - p : p;
	if (o <= 0.005) return null;
	const k = fadeOut ? p : 1 - p;
	return <g opacity={o} transform={`translate(${dx * k},${dy * k})`}>{children}</g>;
};
export const SAND_SEG = (m: number, at: number, label?: string, out?: number): BarSeg => ({m, fill: SAND_F, ink: SAND_INK, label, at, out});
export const SALT_SEG = (m: number, at: number, label?: string, out?: number): BarSeg => ({m, fill: SALT_F, ink: INK, label, at, out});

// ---------- 1. hook: which, but how much? ----------
const K1 = cues(sc('hook'), {much: 'how much of each one', today: 'Today', here: "Here's twenty", together: 'together.', salt2: ['salt', 2], start: 'the mass you start', back: 'the masses you get back'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const bg = balGeo(560, 380, 420);
	const thumb = smooth(prog(f, K1.together, 24));
	const sx = 120 + (1690 - 120) * thumb, sy = 300 + (176 - 300) * thumb, ss = 1 - 0.55 * thumb;
	const beakIn = smooth(prog(f, K1.together + 6, 22));
	const sm = plateMap(SAND, 0, 0, 150);
	return (
		<SVG>
			<Chip x={960} y={70} segs={[{t: 'Next: what fraction of a separated mixture came from each component?'}]} at={-1000} out={30} size={36} color={PURE} anchor="middle" />
			<Chromatogram x={sx} y={sy} s={ss} />
			<Sx x={185} y={790} text="which components?" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={50} />
			<Rich x={185} y={790} segs={[{t: 'which: yes', c: PURE}]} size={36} anchor="middle" at={56} out={K1.together} />
			<Write x={110} y={262} text="how much?" at={K1.much} out={K1.together} size={42} color={MIX} />
			<Slide at={K1.together} dx={900}>
				<Balance g={bg} text="---.-- g" />
				<Plate p={SAND} x={1330} y={330} h={sm.k * SAND.box[3]} />
				<Plate p={SALT} x={1330} y={560} h={sm.k * SALT.box[3]} />
				<Sx x={1330 + sm.w / 2} y={520} text="sand" size={40} color={INK} anchor="middle" hand at={-1000} />
				<Sx x={1330 + sm.w / 2} y={750} text="salt" size={40} color={INK} anchor="middle" hand at={-1000} />
				<Chip x={1330 + sm.w / 2} y={790} segs={[{t: 'how much of each?'}]} at={-1000} size={40} color={MIX} anchor="middle" />
			</Slide>
			{/* the mixture we can weigh */}
			<g opacity={beakIn} transform={`translate(${-420 * (1 - beakIn)},0)`}>
				<Plate p={DRYB} x={150} y={260} h={520} />
			</g>
			<Readout x={640} y={330} w={520} text="mixture: 20.00 g" size={52} color={PURE} frame={PURE} at={K1.together + 20} />
			<Sx x={644} y={470} text="example data" size={30} color={INK} weight={700} at={K1.together + 30} />
			<Chip x={1260} y={520} segs={[{t: 'sand: ? %'}]} at={K1.salt2} size={48} color={INK} dashed />
			<Chip x={1260} y={660} segs={[{t: 'salt: ? %'}]} at={K1.salt2 + 8} size={48} color={INK} dashed />
			<Heading text="Percentage by mass: how much of each?" at={K1.salt2} />
			<Write x={760} y={600} text="start" at={K1.start} size={42} color={PURE} />
			<PenArrow a={[800, 560]} b={[860, 424]} at={K1.start + 4} color={PURE} bend={0.15} />
			<Bracket a={[1236, 750]} b={[1236, 520]} at={K1.back} color={PURE} depth={20} />
			<Write x={1100} y={650} text="back" at={K1.back + 6} size={42} color={PURE} />
			{void K1.today}{void K1.here}
		</SVG>
	);
};

// ---------- 2. the separation, in fast forward ----------
const K2 = cues(sc('separation-recall'), {fast: 'fast forward', add: 'Add water', doesnt: "doesn't.", pour: 'Pour it', stays: 'sand stays behind', residue: 'residue,', runs: 'runs through', rinse: 'Rinse the sand', dry: 'then dry it', evap: 'evaporating basin', gently: 'heat it gently', warm: 'somewhere warm', container: 'its own container'});
const SLOT = (i: number) => 96 + i * 440;
const SW = 410, SY = 260, SH = 520;
/** Coded steam wisps above a point, thinning out from `thin` to `gone`. */
const Wisps: React.FC<{x: number; y: number; at: number; thin: number; gone: number}> = ({x, y, at, thin, gone}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (1 - 0.7 * clamp01((f - thin) / (gone - thin)));
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{[0, 1, 2].map(i => {
				const ph = ((f * 1.2 + i * 40) % 120) / 120;
				const yy = y - ph * 110;
				return <path key={i} d={`M${x - 50 + i * 50},${yy} q-16,-22 0,-44 q16,-22 0,-44`} fill="none" stroke="#9fb4c4" strokeWidth={5} strokeLinecap="round" opacity={1 - ph} />;
			})}
		</g>
	);
};
export const SceneSeparation: React.FC = () => {
	const f = useCurrentFrame();
	const col = smooth(prog(f, K2.container, 20));
	const fm = plateMap(FILT, SLOT(1) + SW / 2 - 118, SY + 10, 520);
	const wgW = 360, wgH = (wgW / SAND.box[2]) * SAND.box[3];
	const hk = 400 / HOTB.box[3];
	const bxW = 380, bxH = (bxW / BASIN_X.box[2]) * BASIN_X.box[3];
	const c3 = SLOT(2) + SW / 2, c4 = SLOT(3) + SW / 2;
	const t3 = 720 - c3, t4 = 1220 - c4;
	return (
		<SVG>
			<Heading text="The separation, in fast forward" at={0} />
			{/* the four numbered slots; the active step's frame turns amber on its cue */}
			{[0, 1, 2, 3].map(i => {
				const act = [K2.add, K2.pour, K2.rinse, K2.evap][i];
				const nxt = [K2.pour, K2.rinse, K2.evap, 1e9][i];
				const on = prog(f, act, 8) * (1 - prog(f, nxt, 8));
				return (
					<g key={i} opacity={1 - col}>
						<rect x={SLOT(i)} y={SY} width={SW} height={SH} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.28)" strokeWidth={3} />
						{on > 0.01 ? <rect x={SLOT(i)} y={SY} width={SW} height={SH} rx={18} fill="none" stroke={AMB} strokeWidth={6} opacity={on} /> : null}
						<circle cx={SLOT(i) + 34} cy={SY + 34} r={22} fill={PURE} />
						<Sx x={SLOT(i) + 34} y={SY + 46} text={`${i + 1}`} size={32} color="#fff" anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<g opacity={1 - col}>
				{/* 1 dissolve */}
				<Plate p={DRYB} x={SLOT(0) + SW / 2 - 155} y={SY + 100} h={400} out={K2.add + 10} />
				<Plate p={SANDB} x={SLOT(0) + SW / 2 - 155} y={SY + 100} h={400} at={K2.add} />
				<Sx x={SLOT(0) + SW / 2} y={830} text="1 dissolve" size={36} color={INK} anchor="middle" weight={800} at={K2.doesnt} />
				{/* 2 filter */}
				<Plate p={FILT} x={SLOT(1) + SW / 2 - 118} y={SY + 10} h={520} />
				<Write x={fm.X(700)} y={fm.Y(300)} text="sand stays" at={K2.stays} size={42} color={SAND_INK} />
				<PenArrow a={[fm.X(690), fm.Y(330)]} b={[fm.X(560), fm.Y(430)]} at={K2.stays + 4} color={SAND_INK} bend={-0.2} />
				<Sx x={SLOT(1) + SW / 2} y={830} text="2 filter" size={36} color={INK} anchor="middle" weight={800} at={K2.residue} />
				<Write x={fm.X(720)} y={fm.Y(820)} text="salt goes through," at={K2.runs} size={38} color={INK} />
				<Write x={fm.X(720)} y={fm.Y(820) + 46} text="dissolved" at={K2.runs + 16} size={38} color={INK} />
				<PenArrow a={[fm.X(760), fm.Y(900)]} b={[fm.X(600), fm.Y(1110)]} at={K2.runs + 8} color={INK} bend={-0.2} />
				<Drops x={fm.X(512)} y0={SY - 10} y1={fm.Y(420)} at={K2.rinse} n={3} every={12} />
				<Sx x={SLOT(2) + SW / 2} y={830} text="3 rinse and dry" size={36} color={INK} anchor="middle" weight={800} at={K2.dry} />
				{/* 4 evaporate */}
				<Plate p={HOTB} x={c4 - (HOTB.box[2] * hk) / 2} y={SY + 100} h={400} out={K2.warm} />
				<Wisps x={c4 - 10} y={SY + 120} at={K2.evap} thin={K2.gently} gone={K2.warm} />
				<Chip x={c4} y={SY - 70} segs={[{t: 'heat gently, stop before it spits'}]} at={K2.gently} size={30} color={INK} anchor="middle" />
				<Sx x={c4} y={830} text="4 evaporate" size={36} color={INK} anchor="middle" weight={800} at={K2.evap} />
			</g>
			{/* the two products slide together */}
			<g transform={`translate(${t3 * col},0)`}>
				<Plate p={SAND} x={c3 - wgW / 2} y={SY + 330} h={wgH} />
			</g>
			<g transform={`translate(${t4 * col},0)`}>
				<Plate p={BASIN_X} x={c4 - bxW / 2} y={SY + 480 - bxH} h={bxH} at={K2.warm} />
			</g>
			<Readout x={720 - 110} y={800} w={220} text="? g" size={52} color={PURE} frame={PURE} anchor="middle" at={K2.container + 6} />
			<Readout x={1220 - 110} y={800} w={220} text="? g" size={52} color={PURE} frame={PURE} anchor="middle" at={K2.container + 6} />
			<PenRing cx={720} cy={839} rx={140} ry={58} at={K2.container + 14} color={PURE} seed={2} />
			<PenRing cx={1220} cy={839} rx={140} ry={58} at={K2.container + 18} color={PURE} seed={5} />
			{void K2.fast}{void Drops}
		</SVG>
	);
};

// ---------- 3. weighing by difference ----------
const K3 = cues(sc('weigh-by-difference'), {container: 'weigh its container', too: 'too.', empty: 'The empty basin', r1: 'forty-five', withs: 'With the dry salt', r2: 'fifty-nine', sub: 'Subtract', alone: 'the salt alone', fourteen: 'fourteen', called: "That's called", wbd: 'weighing by difference', dried: 'The dried sand', r3: 'twenty-seven', minus: 'minus', r4: 'twenty-one', gives: 'gives six', sand: 'sand.'});
const REL = K3.minus - 14;
export const reading3 = (f: number) => {
	if (f < K3.dried) return f < K3.withs ? tick(f, K3.too + 8, K3.too + 36, 0, 45.12) : tick(f, K3.withs + 10, K3.withs + 38, 45.12, 59.12);
	if (f < K3.dried + 22) return tick(f, K3.dried, K3.dried + 12, 59.12, 0);
	if (f < REL) return tick(f, K3.dried + 30, K3.dried + 60, 0, 27.35);
	return tick(f, REL + 6, REL + 18, 27.35, 21.35);
};
export const SceneWeigh: React.FC = () => {
	const f = useCurrentFrame();
	const g = balGeo(60, 380, 520);
	const drop = (at: number) => (1 - smooth(prog(f, at, 14))) * -60;
	const basinO = prog(f, K3.too - 6, 10) * (1 - prog(f, K3.dried, 10));
	const lift = smooth(prog(f, K3.dried, 14)) * -80;
	const kw = (0.78 * 890 * g.k) / WG.box[2];
	const wgP: [number, number] = [g.pan[0], g.pan[1] - 10];
	const ws = placeAt(SAND, [830, 476], wgP, kw), we = placeAt(WG, [830, 476], wgP, kw);
	const sandGO = prog(f, K3.dried + 22, 10) * (1 - prog(f, REL, 8));
	const emptyGO = prog(f, REL, 8);
	const r = reading3(f);
	const RX = 970;
	const e1 = 'salt = 59.12 − 45.12 = ', e2 = 'sand = 27.35 − 21.35 = ';
	return (
		<SVG>
			<Heading text="Weighing by difference" at={0} />
			<Balance g={g} text={g2(r)} />
			<g transform={`translate(0,${drop(K3.too - 6) + lift})`}>
				<BasinBowl id="v6b3a" p={g.pan} k={g.k} o={basinO * (1 - prog(f, K3.withs, 14))} />
				<BasinBowl id="v6b3b" p={g.pan} k={g.k} plate={BASIN_X} o={basinO * prog(f, K3.withs, 14)} />
			</g>
			<g transform={`translate(0,${drop(K3.dried + 22)})`}>
				<Plate p={SAND} x={ws.x} y={ws.y} h={ws.h} o={sandGO} />
			</g>
			<Plate p={WG} x={we.x} y={we.y} h={we.h} o={emptyGO} />
			<Fade at={-1000} out={K3.dried}>
				<Plate p={SAND} x={1000} y={700} h={SAND.box[3] * (300 / SAND.box[2])} />
				<Plate p={WG} x={1400} y={700} h={WG.box[3] * (300 / WG.box[2])} />
				<Sx x={1150} y={850} text="sand on its watch glass" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				<Sx x={1550} y={850} text="empty watch glass" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				<Sx x={1000} y={670} text="weighed next:" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			<Write x={650} y={250} text="container first" at={K3.container} out={K3.dried} size={42} color={PURE} />
			<PenArrow a={[700, 266]} b={[g.pan[0] + 150, g.pan[1] - 150]} at={K3.container + 6} out={K3.dried} color={PURE} bend={-0.2} />
			{/* salt rows */}
			<Rich x={RX} y={300} segs={[{t: 'empty basin       '}, {t: '45.12 g', c: PURE}]} size={40} weight={700} at={K3.r1 - 6} />
			<Rich x={RX} y={364} segs={[{t: 'basin + salt      '}, {t: '59.12 g', c: PURE}]} size={40} weight={700} at={K3.r2 - 6} />
			<Bracket a={[RX - 16, 376]} b={[RX - 16, 262]} at={K3.alone} color={PURE} depth={18} />
			<Rich x={RX} y={472} segs={[{t: e1}]} size={46} at={K3.sub} />
			<Framed x={RX + richW([{t: e1}], 46)} y={472} segs={[{t: '14.00 g', c: '#2f8a5b'}]} at={K3.fourteen} size={52} />
			<Write x={RX} y={560} text="weighing by difference" at={K3.wbd} size={42} color={PURE} />
			{/* sand rows */}
			<Rich x={RX} y={660} segs={[{t: 'glass + sand      '}, {t: '27.35 g', c: PURE}]} size={40} weight={700} at={K3.r3 - 6} />
			<Rich x={RX} y={724} segs={[{t: 'empty glass        '}, {t: '21.35 g', c: PURE}]} size={40} weight={700} at={K3.r4 - 6} />
			<Rich x={RX} y={832} segs={[{t: e2}]} size={46} at={K3.gives - 20} />
			<Framed x={RX + richW([{t: e2}], 46)} y={832} segs={[{t: '6.00 g', c: '#2f8a5b'}]} at={K3.gives + 8} size={52} />
			{void K3.empty}{void K3.called}{void K3.sand}{void tw}
		</SVG>
	);
};

// ---------- 4. percentage by mass ----------
const K4 = cues(sc('percentage'), {frac: 'Now the fraction', pbm: 'Percentage by mass', one: 'mass of one', div: 'divided by', whole: 'whole mixture', times: 'times one', sand: 'For the sand', six: 'six point', over: 'over twenty', times2: 'times a hundred', thirty: 'thirty', salt: 'For the salt', fourteen: 'fourteen', gives: 'gives seventy', together: 'And together', check: 'useful check'});
export const EQ = [{t: '% by mass = '}, {t: '(mass of component '}, {t: '÷ mass of '}, {t: 'original mixture', c: PURE}, {t: ') × 100'}];
export const Equation: React.FC<{x: number; y: number; size?: number; ats?: number[]; ulAt?: number}> = ({x, y, size = 42, ats, ulAt}) => {
	const f = useCurrentFrame();
	const segs = EQ.map((s, i) => ({...s, at: ats ? ats[Math.min(i, ats.length - 1)] : undefined}));
	const u0 = x + richW(EQ.slice(0, 3), size), u1 = u0 + richW([EQ[3]], size);
	return (
		<g>
			<Rich x={x} y={y} segs={segs} size={size} weight={800} />
			{ulAt !== undefined && f >= ulAt ? <DrawPath d={`M${u0},${y + 12} L${u1},${y + 12}`} at={ulAt} dur={12} color={PURE} width={5} /> : null}
		</g>
	);
};
export const eqX = (x: number, size: number) => ({u0: x + richW(EQ.slice(0, 3), size), u1: x + richW(EQ.slice(0, 4), size)});
export const ScenePercentage: React.FC = () => {
	const ex = eqX(110, 44);
	const r1 = [{t: 'sand:  '}, {t: '6.00 ÷ 20.00', c: PURE}, {t: ' × 100 = '}];
	const r2 = [{t: 'salt:  '}, {t: '14.00 ÷ 20.00', c: PURE}, {t: ' × 100 = '}];
	return (
		<SVG>
			<Heading text="Percentage by mass" at={0} />
			<TaskStrip text="find the percentage by mass of each component" />
			<Equation x={110} y={330} size={44} ats={[K4.pbm, K4.one, K4.div, K4.div + 10, K4.times]} ulAt={K4.whole} />
			<Write x={(ex.u0 + ex.u1) / 2 + 120} y={420} text="the whole goes underneath" at={K4.whole} size={42} color={PURE} />
			<PenArrow a={[(ex.u0 + ex.u1) / 2 + 110, 402]} b={[(ex.u0 + ex.u1) / 2, 352]} at={K4.whole + 4} color={PURE} bend={-0.2} />
			<Plate p={DRYB} x={110} y={420} h={300} />
			<GivensCard x={370} y={450} w={450} lines={[[{t: 'mixture   20.00 g'}], [{t: 'sand        6.00 g'}], [{t: 'salt       14.00 g'}]]} />
			<AccBar id="v6b4" x={1040} y={520} w={600} whole={20} segs={[SAND_SEG(6, K4.thirty, '30.0%'), SALT_SEG(14, K4.gives, '70.0%')]} okAt={K4.check} wholeLabel="20.00 g" base="whole mixture: 20.00 g" />
			<Chip x={1040} y={650} segs={[{t: '30.0% + 70.0% = 100.0%'}]} at={K4.together} size={44} color={INK} />
			<Write x={1100} y={790} text="adds to 100" at={K4.check} size={42} color="#2f8a5b" />
			<Rich x={110} y={790} segs={r1.map((s, i) => ({...s, at: [K4.sand, K4.six, K4.times2][i]}))} at={K4.sand} size={52} />
			<Framed x={110 + richW(r1, 52)} y={790} segs={[{t: '30.0%', c: '#2f8a5b'}]} at={K4.thirty} size={52} />
			<Rich x={110} y={900} segs={r2.map((s, i) => ({...s, at: [K4.salt, K4.fourteen, K4.fourteen + 40][i]}))} at={K4.salt} size={52} />
			<Framed x={110 + richW(r2, 52)} y={900} segs={[{t: '70.0%', c: '#2f8a5b'}]} at={K4.gives} size={52} />
			{void K4.frac}{void K4.over}{void AMB}
		</SVG>
	);
};

// ---------- 5. why the starting mass, and why it adds up ----------
const K5 = cues(sc('conservation'), {why: 'Why divide', because: 'Because the question', whole: 'the whole is what', works: 'why the check works', phys: 'physical changes', move: 'They move', create: "don't create", matter: 'matter.', nothing: 'if nothing is lost', add: 'must add up', with: ['started with', 2]});
const T5 = {beaker: [330, 600] as [number, number]};
export const SceneConservation: React.FC = () => {
	const f = useCurrentFrame();
	const fm = plateMap(FILT, 808, 290, 400);
	const paper: [number, number] = [fm.X(512), fm.Y(400)], flask: [number, number] = [fm.X(517), fm.Y(1120)];
	const basin: [number, number] = [1460, 560];
	const p1 = smooth(prog(f, K5.move, 70)), p2 = smooth(prog(f, K5.matter, 60));
	const tokO = 1;
	const lerp2 = (a: [number, number], b: [number, number], t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
	const sandPos = (i: number): [number, number] => {
		const a: [number, number] = [T5.beaker[0] - 70 + (i % 3) * 50, T5.beaker[1] + Math.floor(i / 3) * 34];
		const b: [number, number] = [paper[0] - 22 + (i % 3) * 22, paper[1] - 6 + Math.floor(i / 3) * 16];
		const arc = Math.sin(Math.PI * p1) * -120;
		const q = lerp2(a, b, p1);
		return [q[0], q[1] + arc];
	};
	const saltPos = (i: number): [number, number] => {
		const a: [number, number] = [T5.beaker[0] - 100 + (i % 7) * 33, T5.beaker[1] - 40 + Math.floor(i / 7) * 34];
		const fl: [number, number] = [flask[0] - 60 + (i % 7) * 20, flask[1] - 10 + Math.floor(i / 7) * 22];
		const bs: [number, number] = [basin[0] - 120 + (i % 7) * 40, basin[1] - 10 + Math.floor(i / 7) * 26];
		if (p2 <= 0) {
			const q = lerp2(a, fl, p1);
			return [q[0], q[1] + Math.sin(Math.PI * p1) * -160];
		}
		const q = lerp2(fl, bs, p2);
		return [q[0], q[1] + Math.sin(Math.PI * p2) * -200];
	};
	const sp = clamp01(prog(f, K5.move, 16) - prog(f, K5.add, 16)) * 46;
	const ro = 'sand 6.00 g + salt 14.00 g = ';
	const r20x = 96 + 22 + tw(ro, 52, false, 800) + tw('20.00 g', 52, false, 800) / 2;
	const t0 = saltPos(3);
	const RW = 50 + tw(ro + '20.00 g', 52, false, 800);
	return (
		<SVG>
			<Heading text="Why it all adds back to 20.00 g" at={0} />
			<Readout x={96} y={196} w={RW} text={ro + '20.00 g'} size={52} color={PURE} frame={PURE} />
			<PenRing cx={r20x} cy={235} rx={130} ry={50} at={K5.because} color={PURE} seed={4} />
			<Write x={96 + RW + 40} y={250} text="the whole" at={K5.whole} size={42} color={PURE} />
			<Plate p={DRYB} x={198} y={330} h={340} />
			<Plate p={FILT} x={808} y={290} h={400} />
			<Plate p={BASIN_X} x={1250} y={470} h={218} />
			<ArrowLine a={[480, 520]} b={[740, 440]} at={K5.move} color={INK} />
			<ArrowLine a={[1000, 620]} b={[1220, 590]} at={K5.matter} color={INK} />
			<Write x={1150} y={350} text="physical change:" at={K5.phys} size={38} color={INK} />
			<Write x={1150} y={398} text="nothing made, nothing destroyed" at={K5.phys + 14} size={38} color={INK} />
			{/* model tokens: 6 sand, 14 salt, never more or fewer */}
			<g opacity={tokO}>
				{Array.from({length: 6}, (_, i) => { const [x, y] = sandPos(i); return <circle key={'s' + i} cx={x} cy={y} r={11} fill={SAND_F} stroke={SAND_INK} strokeWidth={3} />; })}
				{Array.from({length: 14}, (_, i) => { const [x, y] = saltPos(i); return <rect key={'c' + i} x={x - 9} y={y - 9} width={18} height={18} fill={SALT_F} stroke={INK} strokeWidth={2.5} />; })}
			</g>
			<Sx x={96} y={760} text="model: 1 token = 1 g" size={30} color={INK} weight={700} at={-1000} />
			{f >= K5.create ? <circle cx={t0[0]} cy={t0[1]} r={26} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, K5.create, 8)} /> : null}
			<Write x={490} y={720} text="moved, not made" at={K5.create} size={42} color={INK} />
			<AccBar id="v6b5" x={660} y={790} w={600} whole={20} split={sp} segs={[SAND_SEG(6, -1000, '6.00 g'), SALT_SEG(14, -1000, '14.00 g')]} okAt={K5.with} wholeLabel="20.00 g at the start" />
			{void K5.why}{void K5.works}{void K5.nothing}{void Fade}{void ROSE}{void kf}{void GivensCard}{void Drops}
		</SVG>
	);
};
