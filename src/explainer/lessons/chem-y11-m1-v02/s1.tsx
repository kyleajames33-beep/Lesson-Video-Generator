// Y11 Chem M1 V02 scenes 1 to 5: V01's final bench heats up (one live heating model drives both readouts, bubbles,
// level markers, "liquid left" and the curve), the properties board, why pure water holds at 100 (surface view and
// the full heating curve), why salt water creeps up (ions stay; then a pure and an impure lattice melting) and reading
// melting data for samples A and B.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {HB} from '../chem-y11-m1-v01/s3';
import {BEAKER, CANDLE, ICE, LUMP, THERMO, heatAt, sc} from './common';
import type {HeatRun} from './common';
import {
	AMB, Axes, Bracket, Bubbles, Chip, Curve, Fade, Glow, Glyph, Heading, INK, Lattice, Level, MIX, PenArrow, PenRing, Plate, PURE, Readout, Rich, SVG, Sx, ViewFrame, Write,
	clamp01, fmtT, gx, gy, kf, plateMap, prog, smooth, spec, useRun, Particles,
} from './parts';
import type {G, GKind} from './parts';

/** Beaker on a hotplate with its thermometer; returns geometry for overlays. */
export const beakerGeo = (x: number, y: number, w: number) => {
	const k = w / BEAKER.box[2], h = BEAKER.box[3] * k;
	const X = (u: number) => x + (u - BEAKER.box[0]) * k, Y = (v: number) => y + (v - BEAKER.box[1]) * k;
	return {k, h, X, Y, in0: X(630), in1: X(1398), surf: Y(640), bot: Y(1125), tx: X(950), bulb: Y(1060), glow: [X(1520), Y(1585)] as [number, number]};
};
export const BeakerT: React.FC<{x: number; y: number; w: number; th?: number}> = ({x, y, w, th}) => {
	const b = beakerGeo(x, y, w);
	const tH = th ?? w * 0.82;
	const tw0 = plateMap(THERMO, 0, 0, tH).w;
	return <><Plate p={BEAKER} x={x} y={y} h={b.h} /><Plate p={THERMO} x={b.tx - tw0 / 2} y={b.bulb - tH} h={tH} /></>;
};
/** Label above a readout box. */
const RLabel: React.FC<{x: number; y: number; t: string; anchor?: 'start' | 'middle'}> = ({x, y, t, anchor = 'start'}) => <Sx x={x} y={y} text={t} size={30} color={INK} anchor={anchor} weight={700} at={-1000} />;

/** Surface view: liquid molecules from a run in the lower part of a circle; molecules of kind `esc` leave the surface at a steady rate from `from`. */
export const SurfaceView: React.FC<{id: string; cx: number; cy: number; r: number; run: ReturnType<typeof useRun>; kinds: Record<string, GKind>; u: number; from: number; until?: number; every?: number; esc?: GKind; src?: [number, number]; at?: number; tint?: string}> = ({id, cx, cy, r, run, kinds, u, from, until = 1e9, every = 20, esc = 'H2O', src, at = -1000, tint = '#e3eef6'}) => {
	const f = useCurrentFrame();
	const bw = run.config.w, bh = run.config.h;
	const top = cy + r - bh - 8;
	const ex: React.ReactNode[] = [];
	for (let k = 0; k < 40; k++) {
		const s = from + k * every;
		if (s > until || f < s) continue;
		const a = f - s;
		const x0 = cx - bw / 2 + 20 + ((k * 73) % (bw - 40));
		const y = top - a * 2.1, x = x0 + Math.sin(k * 1.7) * a * 0.6;
		if (y < cy - r - 20) continue;
		ex.push(<Glyph key={k} k={esc} x={x} y={y} u={u} rot={k * 40 + a} />);
	}
	return (
		<ViewFrame id={id} cx={cx} cy={cy} r={r} at={at} src={src}>
			<rect x={cx - r} y={top - 4} width={2 * r} height={bh + 30} fill={tint} />
			<line x1={cx - r} x2={cx + r} y1={top - 4} y2={top - 4} stroke="#7aa0bd" strokeWidth={3} />
			<Particles run={run} cx={cx} cy={top + bh / 2} kinds={kinds} u={u} />
			{ex}
		</ViewFrame>
	);
};

// ---------- 1. hook: same look, different boiling ----------
const K1 = cues(sc('hook'), {on: 'on.', pure: 'The pure water heats', boil: 'starts to boil', stays: 'stays at a hundred', boils: 'boils.', salt: 'The salt water starts', one: 'a hundred and one', creep: 'keeps creeping', same: 'Same look', so: 'So what can', us: ['us', 2]});
const HP: HeatRun = {t0: K1.on, rate: 0.765, boilRate: 0.5 / 610, salt: false};
const HS: HeatRun = {...HP, salt: true};
const G1: G = {x: 800, y: 330, w: 300, h: 330, x0: K1.on, x1: 1043, y0: 90, y1: 104};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const runs = [HP, HS];
	const on = prog(f, K1.on, 8);
	return (
		<SVG>
			{HB.xs.map((x, i) => {
				const b = beakerGeo(x, HB.y, HB.w);
				const s = heatAt(runs[i], f);
				const lvl = b.bot - (b.bot - b.surf) * (0.15 + 0.85 * s.frac);
				return (
					<g key={i}>
						<BeakerT x={x} y={HB.y} w={HB.w} th={360} />
						<Glow x={b.glow[0]} y={b.glow[1]} on={on} />
						<Bubbles x={b.in0 + 10} y={b.surf + 6} w={b.in1 - b.in0 - 20} h={b.bot - b.surf - 10} on={s.boiling ? 1 : 0} seed={i * 5 + 1} />
						{f >= K1.on ? <Level x0={b.in0 + 6} x1={b.in1 - 6} y={lvl} color={i ? AMB : PURE} /> : null}
						<Sx x={x + HB.w / 2} y={936} text={i ? 'salt water' : 'pure water'} size={40} color={INK} anchor="middle" hand at={-1000} />
						<Readout x={x + HB.w / 2 - 130} y={212} w={260} text={f < K1.on ? '? °C' : fmtT(s.T)} size={50} color={i ? MIX : PURE} frame={i ? AMB : PURE} anchor="middle" />
					</g>
				);
			})}
			<Chip x={960} y={96} segs={[{t: 'Next: what can melting and boiling tell us?'}]} at={-1000} out={4} size={38} color={PURE} anchor="middle" />
			<Write x={960} y={272} text="both at normal air pressure" at={30} size={36} color={INK} anchor="middle" />
			{/* liquid left (from the same model) */}
			{[0, 1].map(i => {
				const s = heatAt(runs[i], f);
				const x = i ? 1650 : 96;
				return (
					<Fade key={'l' + i} at={K1.on}>
						<RLabel x={x} y={604} t="liquid left" />
						<Readout x={x} y={618} w={176} text={`${Math.round(s.frac * 100)}%`} size={44} color={i ? MIX : PURE} frame={i ? AMB : PURE} anchor="middle" />
					</Fade>
				);
			})}
			{/* the live heating curve */}
			<Axes g={G1} at={K1.on} xLabel="time" yLabel="temperature (°C)" yTicks={[90, 95, 100]} brk size={28} />
			<Curve g={G1} fn={t => heatAt(HP, t).T} t0={K1.on} color={PURE} />
			<Curve g={G1} fn={t => heatAt(HS, t).T} t0={K1.on} color={AMB} />
			<Sx x={G1.x - 20} y={G1.y + G1.h + 84} text="example readings" size={30} color={INK} weight={700} at={K1.on} />
			<Sx x={G1.x - 20} y={G1.y + G1.h + 120} text="time sped up" size={30} color={INK} weight={700} at={K1.on} />
			<Bracket a={[gx(G1, 420), gy(G1, 100) + 12]} b={[gx(G1, 680), gy(G1, 100) + 12]} at={K1.stays} color={PURE} depth={16} />
			<Write x={gx(G1, 470)} y={gy(G1, 100) + 76} text="holds" at={K1.stays + 6} size={40} color={PURE} />
			<PenArrow a={[gx(G1, 640), gy(G1, 101.6) + 26]} b={[gx(G1, 1000), gy(G1, 102.0) + 22]} at={K1.creep} color={AMB} bend={0.1} />
			<Write x={G1.x + 30} y={gy(G1, 93.6)} text="still climbing" at={K1.creep + 6} size={38} color={MIX} />
			<Heading text="Melting and boiling: what can they tell us?" at={K1.us - 10} />
			{void K1.pure}{void K1.boil}{void K1.boils}{void K1.salt}{void K1.one}{void K1.same}{void K1.so}
		</SVG>
	);
};

// ---------- 2. physical properties ----------
const K2 = cues(sc('physical-properties'), {bp: 'Boiling point is a', def: 'A physical property is', diff: 'a different substance', mp: 'Melting point is', bp2: ['Boiling point is', 2], surface: 'surface.', dens: 'Density', pure: 'A pure substance has', fixed: 'fixed values', table: 'table.'});
export const SceneProperties: React.FC = () => {
	const f = useCurrentFrame();
	const b = beakerGeo(700, 500, 360);
	return (
		<SVG>
			<Heading text="Physical properties" at={0} />
			<Rich x={96} y={250} segs={[{t: 'physical property: ', c: PURE}, {t: 'measured without changing the substance'}]} size={44} at={K2.def} />
			<Write x={96} y={318} text="same substance afterwards" at={K2.diff} size={42} color={PURE} />
			{['density', 'solubility', 'electrical conductivity'].map((t, i) => <Chip key={t} x={[96, 330, 600][i]} y={372} segs={[{t}]} at={K2.dens + i * 14} size={38} color={INK} />)}
			{/* ice cube */}
			<Plate p={ICE} x={130} y={490} h={300} />
			<Chip x={96} y={830} segs={[{t: 'melting point: solid → liquid'}]} at={K2.mp} size={38} color={INK} />
			{/* boiling beaker: bubbles form deep in the liquid */}
			<BeakerT x={700} y={500} w={360} th={230} />
			<Glow x={b.glow[0]} y={b.glow[1]} on={1} />
			<Bubbles x={b.in0 + 10} y={b.surf + 4} w={b.in1 - b.in0 - 30} h={b.bot - b.surf - 8} on={1} seed={3} n={16} />
			<PenRing cx={(b.in0 + b.in1) / 2 - 10} cy={b.bot - 30} rx={95} ry={32} at={K2.surface} color={INK} seed={4} />
			<Write x={700} y={478} text="bubbles from inside" at={K2.surface + 6} size={40} color={INK} />
			<Sx x={700} y={938} text="boiling: gas forms all through the liquid" size={30} color={INK} weight={700} at={K2.bp2 + 40} />
			{/* data card */}
			<g opacity={prog(f, 0, 12)}>
				<rect x={1180} y={500} width={644} height={390} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} />
				<Sx x={1206} y={550} text="data table (normal air pressure)" size={32} color={INK} weight={800} at={-1000} />
				<line x1={1200} x2={1804} y1={570} y2={570} stroke={INK} strokeWidth={2} />
				<Sx x={1206} y={616} text="substance" size={32} color={INK} weight={700} at={-1000} />
				<Sx x={1440} y={616} text="melts" size={32} color={INK} weight={700} at={-1000} />
				<Sx x={1630} y={616} text="boils" size={32} color={INK} weight={700} at={-1000} />
			</g>
			<Sx x={1206} y={696} text="water" size={44} color={INK} weight={800} at={K2.pure} />
			<Sx x={1440} y={696} text="0 °C" size={44} color={PURE} weight={800} at={K2.pure + 6} />
			<Sx x={1630} y={696} text="100 °C" size={44} color={PURE} weight={800} at={K2.pure + 12} />
			<Sx x={1206} y={766} text="pure substance: fixed values" size={34} color={INK} weight={700} at={K2.pure + 20} />
			<path d="M1436,712 L1540,710 M1626,712 L1770,710" fill="none" stroke={PURE} strokeWidth={5} strokeLinecap="round" opacity={prog(f, K2.fixed, 10)} />
			<Write x={1206} y={850} text="always the same" at={K2.fixed + 6} size={42} color={PURE} />
			{void K2.bp}{void K2.table}{void smooth}
		</SVG>
	);
};

// ---------- 3. why the pure water holds at 100 ----------
const K3 = cues(sc('plateau'), {why: 'So why does', heats: 'While it heats', rises: 'rises.', once: 'Once it boils', pull: 'pulling molecules', every: 'Every molecule is', all: 'all escape', gone: 'gone.', plot: 'Plot temperature', curve: 'heating curve', pure: 'A pure substance gives', plat: 'called a plateau', melt: 'melting point', boil: ['boiling point', 1]});
const WK: Record<string, GKind> = {H2O: 'H2O'};
const WRUN: BoxConfig = {seed: 13, frames: 1060, w: 230, h: 120, species: spec(7, WK), initial: [{species: 'H2O', count: 16}], speed: 0.7, temperature: [[0, 1], [K3.heats, 1], [K3.rises, 2.4]]};
/** Full heating curve of ice to steam over model time u (0 to 1). */
const CURVE: [number, number][] = [[0, -20], [0.12, 0], [0.3, 0], [0.55, 100], [0.9, 100], [1, 118]];
export const curveT = (pts: [number, number][], u: number) => {
	if (u <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) if (u <= pts[i + 1][0]) { const [a, va] = pts[i], [b, vb] = pts[i + 1]; return va + ((vb - va) * (u - a)) / (b - a); }
	return pts[pts.length - 1][1];
};
const U25 = 0.3625;
const G3: G = {x: 1000, y: 250, w: 780, h: 470, x0: 0, x1: 1, y0: -30, y1: 120};
export const ScenePlateau: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(WRUN);
	const u = kf(f, [[K3.heats, U25], [K3.rises, 0.55], [K3.gone, 0.9], [K3.gone + 60, 1]]);
	const lin = (a: number, b: number, t: number) => a + (b - a) * clamp01(t);
	const uu = f < K3.heats ? U25 : f < K3.rises ? lin(U25, 0.55, (f - K3.heats) / (K3.rises - K3.heats)) : f < K3.gone ? lin(0.55, 0.9, (f - K3.rises) / (K3.gone - K3.rises)) : lin(0.9, 1, (f - K3.gone) / 60);
	void u;
	const T = curveT(CURVE, uu);
	const left = f < K3.rises ? 100 : Math.max(0, Math.round(100 * (1 - (f - K3.rises) / (K3.gone - K3.rises))));
	const back = kf(f, [[K3.pure, U25], [K3.pure + 60, 0]]);
	const b = beakerGeo(96, 390, 440);
	return (
		<SVG>
			<Heading text="Why pure water holds at 100 °C" at={0} />
			<BeakerT x={96} y={390} w={440} th={260} />
			<Glow x={b.glow[0]} y={b.glow[1]} on={1} />
			<Bubbles x={b.in0 + 10} y={b.surf + 4} w={b.in1 - b.in0 - 30} h={b.bot - b.surf - 8} on={f >= K3.rises ? 1 : 0} seed={2} />
			<Level x0={b.in0 + 6} x1={b.in1 - 6} y={b.bot - (b.bot - b.surf) * (0.12 + 0.88 * left / 100)} color={PURE} />
			<RLabel x={96} y={202} t="temperature" />
			<Readout x={96} y={214} w={250} text={fmtT(T)} size={50} color={PURE} frame={PURE} anchor="middle" />
			<RLabel x={364} y={202} t="liquid left" />
			<Readout x={364} y={214} w={190} text={`${left}%`} size={50} color={PURE} frame={PURE} anchor="middle" />
			<PenRing cx={221} cy={252} rx={138} ry={48} at={K3.all} color={PURE} seed={6} />
			<Write x={96} y={372} text="all identical: one temperature" at={K3.all + 6} size={38} color={PURE} />
			<SurfaceView id="v2s3" cx={760} cy={480} r={160} run={run} kinds={WK} u={7} from={K3.pull} until={K3.gone} every={16} src={[b.X(1000), b.surf + 6]} />
			<Sx x={760} y={684} text="energy separates" size={32} color={INK} anchor="middle" weight={700} at={K3.pull + 10} />
			<Sx x={760} y={722} text="the molecules" size={32} color={INK} anchor="middle" weight={700} at={K3.pull + 10} />
			{/* the heating curve */}
			<Axes g={G3} xLabel="time" yLabel="temperature (°C)" yTicks={[0, 50, 100]} size={30} labelAt={K3.plot} />
			<Curve g={G3} fn={v => curveT(CURVE, v)} t0={U25} upto={uu} color={PURE} />
			{f >= K3.pure ? <Curve g={G3} fn={v => curveT(CURVE, v)} t0={back} upto={U25} color={PURE} /> : null}
			<Write x={1030} y={612} text="energy → faster molecules" at={K3.rises - 20} out={K3.pure - 20} size={38} color={PURE} />
			<Bracket a={[gx(G3, 0.56), gy(G3, 100) - 14]} b={[gx(G3, 0.89), gy(G3, 100) - 14]} at={K3.gone} color={PURE} depth={-16} />
			<Write x={gx(G3, 0.62)} y={gy(G3, 100) - 52} text="flat = plateau" at={K3.plat} size={40} color={PURE} />
			<Bracket a={[gx(G3, 0.125), gy(G3, 0) - 14]} b={[gx(G3, 0.295), gy(G3, 0) - 14]} at={K3.melt} color={PURE} depth={-16} />
			<Sx x={gx(G3, 0.21)} y={gy(G3, 0) - 48} text="melting" size={32} color={PURE} anchor="middle" weight={800} at={K3.melt} />
			<Sx x={gx(G3, 0.725)} y={gy(G3, 100) + 50} text="boiling" size={32} color={PURE} anchor="middle" weight={800} at={K3.boil} />
			{void K3.why}{void K3.once}{void K3.every}{void K3.curve}
		</SVG>
	);
};

// ---------- 4. why the salt water creeps up ----------
const K4 = cues(sc('drift-and-range'), {salt: 'The salt water behaves', only: 'Only the water', ions: 'The ions from the salt', so: 'So as it boils', saltier: 'saltier water needs', boil: 'boil.', why: "That's why", impure: 'impure solid', diff: 'The different particles', starts: 'starts melting', range: 'range.'});
const SK: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};
const SRUN: BoxConfig = {seed: 19, frames: 1000, w: 230, h: 120, species: spec(7, SK), initial: [{species: 'H2O', count: 12}, {species: 'Na', count: 3}, {species: 'Cl', count: 3}], speed: 0.9};
const G4: G = {x: 1000, y: 250, w: 780, h: 420, x0: 0, x1: 640, y0: 96, y1: 104};
const fracAt = (f: number) => 1 - 0.5 * clamp01((f - K4.only) / (K4.boil - K4.only));
const saltT = (f: number) => (f < 40 ? 90 + (11.024 * f) / 40 : f < K4.only ? 101.024 : 100 + 1.024 / fracAt(f));
export const SceneDrift: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(SRUN);
	const b = beakerGeo(96, 390, 440);
	const fr = fracAt(f);
	const ions = Math.round((8 / (8 + 92 * fr)) * 100);
	const melt2 = prog(f, K4.impure - 10, 16);
	const v = clamp01((f - K4.diff) / (K4.range - K4.diff + 10));
	const thr = (i: number, j: number) => 0.3 + 0.38 * (((i * 7 + j * 11) % 13) / 12);
	const IMP = new Set(['1-1', '4-2', '2-4', '5-5', '0-3']);
	const scaleX = (t: number) => 1010 + t * 770;
	return (
		<SVG>
			<Heading text="Why salt water creeps up" at={0} />
			<BeakerT x={96} y={390} w={440} th={260} />
			<Glow x={b.glow[0]} y={b.glow[1]} on={1} />
			<Bubbles x={b.in0 + 10} y={b.surf + 4} w={b.in1 - b.in0 - 30} h={b.bot - b.surf - 8} on={1} seed={4} />
			<Level x0={b.in0 + 6} x1={b.in1 - 6} y={b.bot - (b.bot - b.surf) * (0.12 + 0.88 * fr)} color={AMB} />
			<Sx x={b.X(1000)} y={936} text="salt water" size={40} color={INK} anchor="middle" hand at={-1000} />
			<RLabel x={96} y={202} t="temperature" />
			<Readout x={96} y={214} w={250} text={fmtT(Math.max(100, saltT(f)))} size={50} color={MIX} frame={AMB} anchor="middle" />
			<RLabel x={364} y={202} t="liquid left" />
			<Readout x={364} y={214} w={190} text={`${Math.round(fr * 100)}%`} size={50} color={MIX} frame={AMB} anchor="middle" />
			<g opacity={1 - melt2}>
				<SurfaceView id="v2s4" cx={760} cy={480} r={160} run={run} kinds={SK} u={7} from={K4.only} until={K4.boil} every={22} src={[b.X(1000), b.surf + 6]} />
				<PenRing cx={760} cy={580} rx={60} ry={40} at={K4.ions} out={K4.so + 30} color={AMB} seed={2} />
				<Write x={620} y={300} text="ions stay" at={K4.ions + 6} size={40} color={MIX} />
				<Sx x={580} y={694} text="ions per 100 particles" size={30} color={INK} weight={700} at={K4.ions} />
				<Sx x={580} y={730} text="in the liquid (model count)" size={30} color={INK} weight={700} at={K4.ions} />
				<Readout x={600} y={748} w={150} text={`${ions}`} size={44} color={MIX} frame={AMB} anchor="middle" at={K4.ions} />
				<Axes g={G4} xLabel="time" yLabel="temperature (°C)" yTicks={[96, 98, 100, 102, 104]} brk size={28} />
				<Curve g={G4} fn={saltT} t0={0} color={AMB} />
				<Sx x={G4.x + G4.w} y={G4.y + G4.h - 20} text="zoomed in near boiling" size={30} color={INK} anchor="end" weight={700} at={-1000} />
				<PenArrow a={[gx(G4, K4.saltier - 60), gy(G4, 101.4) + 40]} b={[gx(G4, K4.boil), gy(G4, 102.05) + 22]} at={K4.saltier} color={AMB} bend={0.12} width={4} />
				<Write x={gx(G4, K4.only)} y={gy(G4, 99.6)} text="saltier → hotter" at={K4.saltier + 6} size={40} color={MIX} />
			</g>
			{/* an impure solid melts over a range */}
			<Fade at={K4.impure - 4}>
				<Sx x={1150} y={250} text="pure solid" size={36} color={PURE} anchor="middle" weight={800} at={-1000} />
				<Sx x={1580} y={250} text="impure solid" size={36} color={MIX} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<ViewFrame id="v2lp" cx={1150} cy={440} r={150} at={K4.impure}>
				<Lattice cx={1150} cy={460} cols={6} rows={5} sp={40} u={16} kindAt={() => 'Al'} melt={() => clamp01((v - 0.8) / 0.04)} />
			</ViewFrame>
			<ViewFrame id="v2li" cx={1580} cy={440} r={150} at={K4.impure + 6}>
				<Lattice cx={1580} cy={460} cols={6} rows={5} sp={40} u={16} kindAt={(i, j) => (IMP.has(`${i}-${j}`) ? 'S' as GKind : 'Al')} melt={(i, j) => clamp01((v - thr(i, j)) / 0.05)} />
			</ViewFrame>
			<Fade at={K4.diff}>
				<line x1={1010} x2={1780} y1={700} y2={700} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<path d="M1780,700 l-16,-10 m16,10 l-16,10" stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				<Sx x={1010} y={660} text="temperature rising →" size={30} color={INK} weight={700} at={-1000} />
				<circle cx={scaleX(v)} cy={700} r={12} fill={INK} />
				<line x1={scaleX(0.8)} x2={scaleX(0.8)} y1={680} y2={720} stroke={PURE} strokeWidth={6} />
				<Sx x={scaleX(0.8)} y={760} text="pure: all at once" size={30} color={PURE} anchor="middle" weight={800} at={-1000} opacity={prog(f, K4.diff + (0.8 * (K4.range - K4.diff + 10)), 10)} />
			</Fade>
			<Bracket a={[scaleX(0.3), 726]} b={[scaleX(0.7), 726]} at={K4.starts} color={AMB} depth={18} />
			<Write x={scaleX(0.3)} y={820} text="starts lower, melts over a range" at={K4.starts + 10} size={40} color={MIX} />
			{void K4.salt}{void K4.why}{void Glyph}{void kf}{void gy}
		</SVG>
	);
};

// ---------- 5. reading melting data ----------
const K5 = cues(sc('melting-data'), {data: 'shows up in data', a: 'Sample A melts', all: 'All of it', temp: 'temperature.', b: 'Sample B starts', sixty: 'sixty', eighty: 'eighty', range: 'twenty degree range', sharp: 'A sharp melting', cons: 'consistent with a pure', mr: 'A melting range', mix: 'mixture.', wax: 'Candle wax', comp: 'compounds.'});
const A_PTS: [number, number][] = [[60, 20], [200, 327], [330, 327], [430, 380]];
const B_PTS: [number, number][] = [[60, 20], [387, 60], [478, 80], [700, 135]];
const G5: G = {x: 960, y: 240, w: 820, h: 470, x0: 60, x1: 988, y0: 0, y1: 400};
export const SceneData: React.FC = () => {
	const f = useCurrentFrame();
	const TA = curveT(A_PTS, f), TB = curveT(B_PTS, f);
	const lm = plateMap(LUMP, 0, 0, 250), cm = plateMap(CANDLE, 0, 0, 290);
	return (
		<SVG>
			<Heading text="Reading melting data" at={0} />
			<Plate p={LUMP} x={250 - lm.w / 2} y={510} h={250} />
			<Plate p={CANDLE} x={600 - cm.w / 2} y={470} h={290} />
			<Sx x={250} y={806} text="sample A" size={40} color={INK} anchor="middle" hand at={-1000} />
			<Sx x={600} y={806} text="sample B" size={40} color={INK} anchor="middle" hand at={-1000} />
			<RLabel x={250} y={300} t="temperature" anchor="middle" />
			<Readout x={130} y={314} w={240} text={`${Math.round(TA)} °C`} size={50} color={PURE} frame={PURE} anchor="middle" />
			<RLabel x={600} y={300} t="temperature" anchor="middle" />
			<Readout x={480} y={314} w={240} text={`${Math.round(TB)} °C`} size={50} color={MIX} frame={AMB} anchor="middle" />
			<Axes g={G5} xLabel="time" yLabel="temperature (°C)" yTicks={[0, 100, 200, 300, 400]} size={28} />
			<Curve g={G5} fn={t => curveT(A_PTS, t)} t0={60} tEnd={430} color={PURE} />
			<Curve g={G5} fn={t => curveT(B_PTS, t)} t0={60} tEnd={700} color={AMB} />
			<Bracket a={[gx(G5, 205), gy(G5, 327) - 14]} b={[gx(G5, 325), gy(G5, 327) - 14]} at={K5.all} color={PURE} depth={-16} />
			<Sx x={gx(G5, 290)} y={gy(G5, 327) + 46} text="melts at 327 °C" size={30} color={PURE} anchor="middle" weight={800} at={K5.all} />
			<Write x={gx(G5, 240)} y={gy(G5, 327) + 96} text="sharp" at={K5.temp - 10} size={42} color={PURE} />
			<Bracket a={[gx(G5, 387), gy(G5, 60) - 26]} b={[gx(G5, 478), gy(G5, 80) - 26]} at={K5.range} color={AMB} depth={-16} />
			<Sx x={gx(G5, 430)} y={gy(G5, 80) - 70} text="60 °C to 80 °C" size={30} color={MIX} anchor="middle" weight={800} at={K5.range} />
			<Write x={gx(G5, 520)} y={gy(G5, 80) + 20} text="20 °C wide" at={K5.range + 6} size={42} color={MIX} />
			<Chip x={96} y={834} segs={[{t: 'consistent with pure'}]} at={K5.cons} size={42} color={PURE} />
			<Chip x={640} y={834} segs={[{t: 'physical evidence: probably a mixture'}]} at={K5.mr} size={42} color={MIX} />
			<Write x={96} y={240} text="candle wax: a mixture, melts over a range" at={K5.wax} size={38} color={MIX} />
			{void K5.data}{void K5.a}{void K5.b}{void K5.sixty}{void K5.eighty}{void K5.sharp}{void K5.mix}{void K5.comp}{void Rich}
		</SVG>
	);
};
