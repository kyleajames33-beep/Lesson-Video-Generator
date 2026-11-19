// Y11 Chem M1 V03 scenes 7 to 11: the four terms beside the filtrate's particle view and a saturation meter; the basin
// on its hotplate (water leaves the view, the meter fills, ions lock into a lattice, then off the heat and filtered);
// the solubility graph with a cooling marker on each curve and live readouts read from the same curves; the growing
// crystal face that turns impurity particles away (slow against fast cooling, boiled to dryness); the order strip, the
// framed rule and the sieve with its limit.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {BASIN, BASIN_X, CRYS, FUN_S, SIEVE, WG_SALT, sc} from './common';
import {PenArrow as PA} from './parts';
import {
	AMB, Axes, Bracket, Checklist, Chip, Curve, Fade, Framed, Glow, Glyph, Grain, Heading, INK, Inset, Meter, PURE, PenArrow, PenRing, Plate, Particles, Readout, RED, Rich,
	SAND_INK, StrikeLine, SVG, Sx, TEAL, VIOL, ViewFrame, Write, clamp01, gx, gy, kf, lerp, ph, plateMap, prog, rigGeo, smooth, spec, useRun,
} from './parts';
import type {G, GKind} from './parts';
import {Underline} from '../chem-y11-m1-v01/s1';

const IK: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};

// ---------- 7. solubility and saturation ----------
const K7 = cues(sc('solubility-saturation'), {now: 'Now the salt', words: 'few words', solute: 'is the solute', subst: 'the substance that', solvent: 'is the solvent', liquid: 'the liquid it', solub: 'Solubility is', hundred: 'a hundred grams', temp: 'temperature', and: 'And a solution', sat: 'saturated'});
const F7_RUN: BoxConfig = {seed: 61, frames: 740, w: 340, h: 340, species: spec(8, IK), initial: [{species: 'H2O', count: 18}, {species: 'Na', count: 4}, {species: 'Cl', count: 4}], speed: 1};
export const SceneTerms: React.FC = () => {
	const run = useRun(F7_RUN);
	const g = rigGeo(110, 290, 600);
	return (
		<SVG>
			<Heading text="Getting the salt back: four words" at={0} />
			<Plate p={FUN_S} x={110} y={290} h={600} />
			<Sx x={g.X(522)} y={g.bot + 40} text="filtrate" size={34} color={PURE} anchor="middle" weight={800} at={-1000} />
			<ViewFrame id="v3s7" cx={620} cy={560} r={170} src={[g.X(600), g.Y(1220)]}>
				<rect x={450} y={390} width={340} height={340} fill="#e6eff6" />
				<Particles run={run} cx={620} cy={560} kinds={IK} u={8} />
			</ViewFrame>
			<Meter x={832} y={400} h={300} v={0.3} at={K7.sat} label="" />
			<Sx x={860} y={744} text="how full" size={30} color={INK} anchor="middle" weight={700} at={K7.sat} />
			<Write x={500} y={812} text="meter full = saturated" at={K7.sat + 10} size={42} color={AMB} />
			<Rich x={1010} y={300} segs={[{t: 'solute: ', c: VIOL}, {t: 'the substance'}]} size={44} at={K7.solute} />
			<Rich x={1010} y={352} segs={[{t: 'that dissolves (the salt)'}]} size={44} at={K7.subst} />
			<PenArrow a={[1000, 330]} b={[680, 520]} at={K7.subst} color={VIOL} bend={0.15} />
			<Rich x={1010} y={440} segs={[{t: 'solvent: ', c: PURE}, {t: 'the liquid'}]} size={44} at={K7.solvent} />
			<Rich x={1010} y={492} segs={[{t: 'it dissolves in (the water)'}]} size={44} at={K7.liquid} />
			<PenArrow a={[1000, 470]} b={[600, 610]} at={K7.liquid} color={PURE} bend={-0.15} />
			<Rich x={1010} y={580} segs={[{t: 'solubility: ', c: INK}, {t: 'the most solute that'}]} size={44} at={K7.solub} />
			<Rich x={1010} y={632} segs={[{t: 'dissolves in 100 g of water'}]} size={44} at={K7.solub + 30} />
			<Rich x={1010} y={684} segs={[{t: 'at a stated temperature'}]} size={44} at={K7.temp - 10} />
			<Underline x0={1010 + 300} x1={1010 + 600} y={646} at={K7.hundred} color={INK} />
			<Write x={1460} y={744} text="per 100 g of water" at={K7.hundred + 10} size={42} color={INK} />
			<Rich x={1010} y={830} segs={[{t: 'saturated: ', c: AMB}, {t: 'holding as much'}]} size={44} at={K7.and + 30} />
			<Rich x={1010} y={882} segs={[{t: 'solute as it can'}]} size={44} at={K7.sat - 10} />
			<Checklist sandAt={-1000} />
			{void K7.now}{void K7.words}
		</SVG>
	);
};

// ---------- 8. crystallisation ----------
const K8 = cues(sc('crystallisation'), {so: "So here's", pour: 'Pour the filtrate', heat: 'heat it gently', water: 'The water evaporates', cant: "salt can't", conc: 'concentrated', once: "Once it's", extra: 'the extra salt', cryst: 'solid crystals', stop: 'Stop heating', cool: 'let it cool', filter: 'filter off', rinse: 'rinse them', dry: 'dry them'});
const B8 = {x: 96, y: 250, w: 580};
const C8_RUN: BoxConfig = {seed: 71, frames: 960, w: 320, h: 200, species: spec(8, IK), initial: [{species: 'H2O', count: 18}, {species: 'Na', count: 6}, {species: 'Cl', count: 6}], speed: 1.1};
const frac8 = (f: number) => kf(f, [[K8.heat, 1], [K8.once + 10, 0.5], [K8.stop, 0.4]]);
export const SceneCryst: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(C8_RUN);
	const bk = B8.w / BASIN.box[2], bh = BASIN.box[3] * bk;
	const BX = (u: number) => B8.x + (u - BASIN.box[0]) * bk, BY = (v: number) => B8.y + (v - BASIN.box[1]) * bk;
	const fr = frac8(f);
	const sat = Math.min(1, 0.5 / fr);
	const off = prog(f, K8.stop + 6, 30);
	const nX = Math.round(clamp01((f - K8.extra) / 160) * 16);
	// hide water slots as water leaves, and ions as they join the crystal
	const wSlots: number[] = [], iSlots: number[] = [];
	for (let i = 0; i < run.slots; i++) { const s = run.sp[i]; if (s === 0) wSlots.push(i); else if (s > 0) iSlots.push(i); }
	const wKeep = new Set(wSlots.slice(0, Math.round(wSlots.length * fr)));
	const iKeep = new Set(iSlots.slice(0, Math.max(2, iSlots.length - Math.round(nX * 0.6))));
	const V = {cx: 1000, cy: 420, r: 170};
	const top = V.cy - 40;
	const esc: React.ReactNode[] = [];
	for (let k = 0; k < 30; k++) {
		const s = K8.heat + 20 + k * 16;
		if (s > K8.stop || f < s) continue;
		const a = f - s;
		const y = top - a * 2.2;
		if (y < V.cy - V.r - 20) continue;
		esc.push(<Glyph key={k} k="H2O" x={V.cx - 120 + ((k * 67) % 240)} y={y} u={8} rot={k * 40 + a} />);
	}
	const lat: React.ReactNode[] = [];
	for (let n = 0; n < nX; n++) { const i = n % 4, j = Math.floor(n / 4); lat.push(<Glyph key={n} k={(i + j) % 2 ? 'Cl' : 'Na'} x={V.cx - 60 + i * 30} y={V.cy + 130 - j * 30} u={9} />); }
	const mini = rigGeo(800, 700, 200);
	return (
		<SVG>
			<Heading text="Crystallisation" at={0} />
			<Plate p={BASIN} x={B8.x} y={B8.y} h={bh} o={1 - off} />
			<Plate p={BASIN_X} x={B8.x} y={B8.y} h={bh} o={off} />
			<Glow x={BX(765)} y={BY(920)} on={f >= K8.heat && f < K8.stop + 6 ? 1 : 0} />
			<Write x={BX(1060)} y={BY(980)} text="heat gently" at={K8.heat} out={K8.stop} size={42} color={INK} />
			<Write x={BX(1060)} y={BY(980)} text="stop before dry" at={K8.stop + 4} size={42} color={INK} />
			<ViewFrame id="v3s8" cx={V.cx} cy={V.cy} r={V.r} src={[BX(640), BY(500)]}>
				<rect x={V.cx - V.r} y={top} width={2 * V.r} height={V.r * 2} fill="#e6eff6" />
				<line x1={V.cx - V.r} x2={V.cx + V.r} y1={top} y2={top} stroke="#7aa0bd" strokeWidth={3} />
				<Particles run={run} cx={V.cx} cy={top + 104} kinds={IK} u={8} dim={(id, s) => (id === 'H2O' ? (wKeep.has(s) ? 1 : 0) : iKeep.has(s) ? 1 : 0)} />
				{lat}
				{esc}
			</ViewFrame>
			<PenRing cx={V.cx} cy={top + 104} rx={110} ry={70} at={K8.cant} out={K8.once} color={VIOL} seed={6} />
			<Write x={1220} y={520} text="salt stays" at={K8.cant + 4} size={42} color={VIOL} />
			<Write x={1220} y={600} text="no room left: crystals" at={K8.cryst} size={42} color={VIOL} />
			<PenArrow a={[1210, 590]} b={[V.cx + 70, V.cy + 120]} at={K8.cryst + 8} color={VIOL} bend={0.2} />
			{/* live readouts from the same model */}
			<Sx x={1220} y={290} text="water left" size={34} color={INK} weight={800} at={-1000} />
			<Readout x={1220} y={306} w={220} text={`${Math.round(fr * 100)}%`} size={52} color={PURE} frame={PURE} anchor="middle" />
			<Sx x={1220} y={430} text="(model)" size={30} color={INK} weight={700} at={-1000} />
			<Meter x={1560} y={270} h={260} v={sat} />
			<Sx x={1588} y={570} text="how full" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			{/* filter off and dry */}
			<Plate p={FUN_S} x={800} y={700} h={200} at={K8.filter - 6} />
			<PenArrow a={[BX(1000), BY(600)]} b={[mini.X(300), mini.Y(200)]} at={K8.filter} color={INK} bend={-0.2} />
			<Plate p={WG_SALT} x={920} y={800} h={ph(WG_SALT, 280)} at={K8.rinse} />
			<Sx x={1060} y={940} text="salt crystals" size={30} color={INK} anchor="middle" weight={700} at={K8.rinse} />
			<g>
				<rect x={1300} y={680} width={520} height={250} rx={16} fill="#fffdf8" stroke="#c4582f" strokeWidth={4} />
				<Sx x={1324} y={724} text="safe heating" size={34} color="#a8421c" weight={800} at={-1000} />
				<Sx x={1324} y={770} text="safety glasses on" size={30} color={INK} weight={700} at={-1000} />
				<Sx x={1324} y={812} text="heat gently (electric hotplate)" size={30} color={INK} weight={700} at={-1000} />
				<Sx x={1324} y={854} text="stop before it's dry: it can spit" size={30} color={INK} weight={700} at={-1000} />
				<Sx x={1324} y={896} text="cool on a heatproof mat" size={30} color={INK} weight={700} at={-1000} />
			</g>
			<Checklist sandAt={-1000} saltAt={K8.dry} />
			{void K8.so}{void K8.pour}{void K8.water}{void K8.conc}{void K8.cool}{void plateMap}{void lerp}
		</SVG>
	);
};

// ---------- 9. the surprise: cooling barely helps salt ----------
const K9 = cues(sc('surprise-solubility'), {surprise: 'surprise', expect: 'You might expect', many: 'For many', kno: 'Potassium', eighty: 'eighty degrees', thirty: 'thirty one', deg: 'twenty degrees', cool: 'Cool a saturated', range: 'that range', cryst: 'crystallise', but: 'But salt', barely: 'barely', its: "It's about", e2: ['eighty', 2], six: 'thirty six', so: 'So for salt', not: 'not cooling'});
/** Smooth curve through points (Catmull-Rom on x). */
const cat = (pts: [number, number][]) => (x: number) => {
	if (x <= pts[0][0]) return pts[0][1];
	const n = pts.length;
	let i = 0;
	while (i < n - 2 && x > pts[i + 1][0]) i++;
	const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n - 1, i + 2)];
	const t = Math.min(1, (x - p1[0]) / (p2[0] - p1[0]));
	const t2 = t * t, t3 = t2 * t;
	return 0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
};
export const KNO3 = cat([[0, 13.3], [20, 31], [40, 63.9], [60, 110], [80, 169]]);
export const NACL = cat([[0, 35.7], [20, 36], [40, 36.6], [60, 37.3], [80, 38]]);
const G9: G = {x: 200, y: 250, w: 960, h: 600, x0: 0, x1: 90, y0: 0, y1: 180};
export const SceneSurprise: React.FC = () => {
	const f = useCurrentFrame();
	const kUp = 80 * smooth(prog(f, K9.kno, 70));
	const nUp = 80 * smooth(prog(f, K9.but, 50));
	const Tk = kf(f, [[K9.cool, 80], [K9.range + 70, 20]]);
	const Tn = kf(f, [[K9.six - 20, 80], [K9.six + 40, 20]]);
	const dk = KNO3(Tk), dn = NACL(Tn);
	const showK = f >= K9.cool - 10, showN = f >= K9.e2 - 10;
	return (
		<SVG>
			<Heading text="A surprise: does cooling make the crystals?" at={0} />
			<Axes g={G9} xLabel="" yLabel="solubility (g per 100 g of water)" yTicks={[0, 40, 80, 120, 160]} size={30} />
			{[0, 20, 40, 60, 80].map(t => <g key={t}><line x1={gx(G9, t)} x2={gx(G9, t)} y1={G9.y + G9.h} y2={G9.y + G9.h + 10} stroke={INK} strokeWidth={3} /><Sx x={gx(G9, t)} y={G9.y + G9.h + 40} text={`${t}`} size={30} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			<Sx x={G9.x + G9.w / 2} y={G9.y + G9.h + 86} text="temperature (°C)" size={32} color={INK} anchor="middle" weight={800} at={-1000} />
			<Curve g={G9} fn={KNO3} t0={0} upto={kUp} color={AMB} width={7} />
			<Curve g={G9} fn={NACL} t0={0} upto={nUp} color={PURE} width={7} />
			<Sx x={gx(G9, 66)} y={gy(G9, 150)} text="potassium nitrate" size={34} color="#9c5a00" anchor="end" weight={800} at={K9.kno + 40} />
			<Sx x={gx(G9, 4)} y={gy(G9, 38) - 20} text="salt (sodium chloride)" size={34} color={PURE} weight={800} at={K9.but + 20} />
			{/* start: the crystals basin and the expectation */}
			<Fade at={-1000} out={K9.cool - 30}>
				<Plate p={CRYS} x={1300} y={280} h={ph(CRYS, 460)} />
				<Write x={1320} y={620} text="cool it: more crystals?" at={K9.expect} size={42} color={INK} />
				<Write x={1320} y={700} text="for many solids, yes" at={K9.many} size={42} color="#9c5a00" />
			</Fade>
			{/* the potassium nitrate points and marker */}
			<circle cx={gx(G9, 80)} cy={gy(G9, 169)} r={10} fill={AMB} opacity={prog(f, K9.eighty, 8)} />
			<Sx x={gx(G9, 78)} y={gy(G9, 169) + 6} text="169 g at 80 °C" size={34} color="#9c5a00" anchor="end" weight={800} at={K9.eighty} />
			<circle cx={gx(G9, 20)} cy={gy(G9, 31)} r={10} fill={AMB} opacity={prog(f, K9.deg, 8)} />
			<Sx x={gx(G9, 22)} y={gy(G9, 31) - 22} text="31 g at 20 °C" size={34} color="#9c5a00" weight={800} at={K9.deg} />
			{showK ? <g><line x1={gx(G9, Tk)} x2={gx(G9, Tk)} y1={gy(G9, dk)} y2={G9.y + G9.h} stroke={AMB} strokeWidth={3} strokeDasharray="8 6" /><circle cx={gx(G9, Tk)} cy={gy(G9, dk)} r={16} fill="#fffdf8" stroke={AMB} strokeWidth={6} /></g> : null}
			<PenArrow a={[gx(G9, 76), gy(G9, 150)]} b={[gx(G9, 30), gy(G9, 52)]} at={K9.cool + 10} color={AMB} bend={0.18} width={5} />
			<Bracket a={[gx(G9, 86), gy(G9, 169)]} b={[gx(G9, 86), gy(G9, 31)]} at={K9.cryst - 10} color={AMB} depth={-18} />
			<Framed x={gx(G9, 64)} y={gy(G9, 96)} segs={[{t: '138 g', c: '#9c5a00'}]} at={K9.cryst} size={52} stroke={AMB} tick={false} />
			<Write x={gx(G9, 64)} y={gy(G9, 70)} text="a big drop" at={K9.cryst + 8} size={42} color="#9c5a00" />
			{/* salt */}
			<circle cx={gx(G9, 80)} cy={gy(G9, 38)} r={9} fill={PURE} opacity={prog(f, K9.e2, 8)} />
			<circle cx={gx(G9, 20)} cy={gy(G9, 36)} r={9} fill={PURE} opacity={prog(f, K9.six, 8)} />
			<Sx x={gx(G9, 80)} y={gy(G9, 38) + 44} text="38 g at 80 °C" size={30} color={PURE} anchor="middle" weight={800} at={K9.e2} />
			<Sx x={gx(G9, 20)} y={gy(G9, 36) + 44} text="36 g at 20 °C" size={30} color={PURE} anchor="middle" weight={800} at={K9.six} />
			{showN ? <circle cx={gx(G9, Tn)} cy={gy(G9, dn)} r={14} fill="#fffdf8" stroke={PURE} strokeWidth={6} /> : null}
			<Write x={gx(G9, 30)} y={gy(G9, 38) - 70} text="nearly flat: about 2 g" at={K9.barely} size={42} color={PURE} />
			{/* live readouts read from the same curves */}
			<Fade at={K9.cool - 20}>
				<Sx x={1300} y={300} text="potassium nitrate, per 100 g water" size={30} color="#9c5a00" weight={800} at={-1000} />
				<Readout x={1300} y={316} w={520} text={`still dissolved: ${Math.round(dk)} g`} size={44} color="#9c5a00" frame={AMB} />
				<Readout x={1300} y={402} w={520} text={`crystals out: ${Math.round(169 - dk)} g`} size={44} color="#9c5a00" frame={AMB} />
				<Readout x={1300} y={488} w={520} text={`temperature: ${Math.round(Tk)} °C`} size={44} color={INK} frame={INK} />
			</Fade>
			<Fade at={K9.e2 - 10}>
				<Sx x={1300} y={630} text="salt, per 100 g water" size={30} color={PURE} weight={800} at={-1000} />
				<Readout x={1300} y={646} w={520} text={`still dissolved: ${Math.round(dn)} g`} size={44} color={PURE} frame={PURE} />
				<Readout x={1300} y={732} w={520} text={`crystals out: ${Math.round(38 - dn)} g`} size={44} color={PURE} frame={PURE} />
			</Fade>
			<Framed x={1300} y={900} segs={[{t: 'salt: remove water', c: '#23704a'}]} at={K9.so} size={48} />
			<Sx x={1300} y={960} text="cooling helps potassium nitrate a lot" size={30} color="#9c5a00" weight={800} at={K9.not} />
			<Checklist sandAt={-1000} saltAt={-1000} />
			{void K9.surprise}{void K9.thirty}{void K9.its}{void K9.range}{void Chip}{void PenRing}
		</SVG>
	);
};

// ---------- 10. why the crystals are purer ----------
const K10 = cues(sc('purer-crystals'), {purer: 'makes it purer', grows: 'As a crystal', fit: 'fit into', lattice: 'lattice', parts: 'Particles of other', dont: "don't fit", stay: 'stay in the', liquor: 'liquor', slow: 'Slow cooling', larger: 'grow larger', boil: 'Boil it', every: 'every dissolved', solid: 'solid'});
const V10 = {cx: 1000, cy: 560, r: 290};
const L10_RUN: BoxConfig = {seed: 81, frames: 840, w: 230, h: 400, species: spec(8, IK), initial: [{species: 'H2O', count: 14}, {species: 'Na', count: 4}, {species: 'Cl', count: 4}], speed: 1};
const cellAt = (n: number) => { const i = Math.floor(n / 6), j = n % 6; return {x: V10.cx - 190 + i * 40, y: V10.cy + 120 - j * 40, k: ((i + j) % 2 ? 'Cl' : 'Na') as GKind}; };
const cellT = (n: number) => 30 + n * 17;
export const ScenePurer: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(L10_RUN);
	const cw = 600, chh = ph(CRYS, cw);
	const lat: React.ReactNode[] = [];
	let newest = -1;
	for (let n = 0; n < 30; n++) {
		const t = cellT(n);
		if (f < t) break;
		const c = cellAt(n);
		const a = smooth(prog(f, t, 18));
		lat.push(<Glyph key={n} k={c.k} x={lerp(V10.cx + 200, c.x, a)} y={lerp(V10.cy - 150 + (n % 3) * 60, c.y, a)} u={12} />);
		if (f >= t) newest = n;
	}
	const ringN = Math.min(29, Math.floor((K10.fit - 30) / 17));
	const rc = cellAt(ringN);
	// impurity particles bump the face and drift back into the liquid
	const imp = [K10.parts - 10, K10.dont - 20, K10.stay - 10].map((t0, i) => {
		const a = f - t0;
		const face = V10.cx - 190 + 40 * (Math.floor(Math.min(29, Math.max(0, Math.floor((f - 30) / 17))) / 6) + 1) + 10;
		const y = V10.cy - 40 + i * 70;
		let x = V10.cx + 200;
		if (a > 0) x = a < 40 ? lerp(V10.cx + 200, face, a / 40) : lerp(face, V10.cx + 190, clamp01((a - 40) / 60));
		return {x, y: y - (a > 40 ? Math.min(60, (a - 40) * 1.2) : 0)};
	});
	void newest;
	return (
		<SVG>
			<Heading text="Why the crystals are purer" at={0} />
			<Plate p={CRYS} x={96} y={290} h={chh} />
			<ViewFrame id="v3s10" cx={V10.cx} cy={V10.cy} r={V10.r} src={[96 + (680 - CRYS.box[0]) * (cw / CRYS.box[2]), 290 + (520 - CRYS.box[1]) * (cw / CRYS.box[2])]}>
				<rect x={V10.cx - V10.r} y={V10.cy - V10.r} width={2 * V10.r} height={2 * V10.r} fill="#e6eff6" />
				<Particles run={run} cx={V10.cx + 120} cy={V10.cy - 30} kinds={IK} u={8} />
				{lat}
				{imp.map((p, i) => <g key={i}><circle cx={p.x} cy={p.y} r={15} fill={TEAL} stroke="#0b4d50" strokeWidth={2.5} /><circle cx={p.x + 12} cy={p.y + 8} r={9} fill={TEAL} stroke="#0b4d50" strokeWidth={2} /></g>)}
			</ViewFrame>
			<PenRing cx={rc.x} cy={rc.y} rx={28} ry={28} at={K10.fit + 4} out={K10.parts} color={VIOL} seed={2} />
			<Write x={96} y={680} text="ions fit the pattern" at={K10.fit} size={42} color={VIOL} />
			<PenArrow a={[460, 664]} b={[rc.x - 26, rc.y + 10]} at={K10.fit + 6} out={K10.parts} color={VIOL} bend={-0.2} />
			<PenArrow a={[V10.cx + 120, V10.cy + 190]} b={[V10.cx + 180, V10.cy + 40]} at={K10.dont} color={TEAL} bend={0.3} />
			<Write x={V10.cx} y={912} text="doesn't fit: stays in the liquid" at={K10.dont + 6} size={42} color={TEAL} anchor="middle" />
			<Rich x={96} y={780} segs={[{t: 'mother liquor:', c: TEAL}]} size={52} at={K10.liquor} />
			<Rich x={96} y={836} segs={[{t: 'the leftover liquid,'}]} size={44} at={K10.liquor + 6} />
			<Rich x={96} y={890} segs={[{t: 'holding most impurities'}]} size={44} at={K10.liquor + 12} />
			{/* key, until the right column is needed */}
			<Fade at={K10.grows} out={K10.slow - 10}>
				<Sx x={1350} y={300} text="key" size={34} color={INK} weight={800} at={-1000} />
				<Glyph k="Na" x={1376} y={350} u={12} /><Sx x={1410} y={362} text="Na^{+} ion" size={34} color={INK} weight={700} at={-1000} />
				<Glyph k="Cl" x={1376} y={414} u={12} /><Sx x={1410} y={426} text="Cl^{−} ion" size={34} color={INK} weight={700} at={-1000} />
				<circle cx={1376} cy={478} r={15} fill={TEAL} stroke="#0b4d50" strokeWidth={2.5} /><Sx x={1410} y={490} text="other dissolved" size={34} color={INK} weight={700} at={-1000} /><Sx x={1410} y={526} text="particle" size={34} color={INK} weight={700} at={-1000} />
				<Glyph k="H2O" x={1376} y={590} u={9} /><Sx x={1410} y={602} text="water molecule" size={34} color={INK} weight={700} at={-1000} />
			</Fade>
			{/* slow against fast cooling */}
			<Fade at={K10.slow}>
				<rect x={1340} y={220} width={484} height={360} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				{Array.from({length: 25}, (_, n) => { const i = n % 5, j = Math.floor(n / 5); return <Glyph key={n} k={(i + j) % 2 ? 'Cl' : 'Na'} x={1385 + i * 26} y={290 + j * 26} u={8.5} />; })}
				{[[0, 0], [1, 0], [0, 1], [3, 0], [4, 0], [3, 1], [1, 3], [2, 3], [1, 4], [4, 3], [4, 4]].map(([i, j], n) => <Glyph key={'f' + n} k={(i + j) % 2 ? 'Cl' : 'Na'} x={1625 + i * 26} y={290 + j * 26} u={8.5} />)}
				{[[1665, 330], [1705, 400], [1640, 430]].map(([x, y], n) => <g key={'p' + n}><ellipse cx={x} cy={y} rx={22} ry={14} fill="#cfe2f2" stroke="#4a7aa5" strokeWidth={2} /><circle cx={x} cy={y} r={7} fill={TEAL} /></g>)}
				<Sx x={1360} y={490} text="slow: larger," size={34} color={INK} weight={800} at={-1000} />
				<Sx x={1360} y={530} text="purer" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={1600} y={490} text="fast: liquid" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={1600} y={530} text="trapped" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			<Inset x={1340} y={620} w={484} h={300} title="boiled to dryness" at={K10.boil}>
				{Array.from({length: 32}, (_, n) => { const x = 1380 + (n % 8) * 52 + (Math.floor(n / 8) % 2) * 20, y = 720 + Math.floor(n / 8) * 34; return n % 4 === 1 ? <circle key={n} cx={x} cy={y} r={11} fill={TEAL} stroke="#0b4d50" strokeWidth={2} /> : <rect key={n} x={x - 12} y={y - 12} width={24} height={24} fill="#fff" stroke={INK} strokeWidth={2} transform={`rotate(${n * 17},${x},${y})`} />; })}
				<Write x={1560} y={900} text="impurities kept" at={K10.every} size={42} color={RED} />
			</Inset>
			<Checklist sandAt={-1000} saltAt={-1000} />
			{void K10.purer}{void K10.lattice}{void K10.larger}{void K10.solid}
		</SVG>
	);
};

// ---------- 11. the order, and a rule to remember ----------
const K11 = cues(sc('order-and-rule'), {notice: 'Notice the order', filter: 'Filter first', then: 'then crystallise', cf: 'Crystallise first', crystals: 'crystals', und: 'Undissolved', dis: 'Dissolved, crystallise', works: 'Filter paper works', sieve: 'kitchen sieve', big: 'big pieces', through: 'through', but: 'But dissolved', sep: 'separate ions', catch: 'catch'});
const SV = {x: 1060, y: 330, w: 620};
export const SceneOrder: React.FC = () => {
	const f = useCurrentFrame();
	const sk = SV.w / SIEVE.box[2];
	const SX = (u: number) => SV.x + (u - SIEVE.box[0]) * sk, SY = (v: number) => SV.y + (v - SIEVE.box[1]) * sk;
	const P = {cx: 1680, cy: 820, r: 120};
	return (
		<SVG>
			<Heading text="The order, and a rule" at={0} />
			<Rich x={96} y={260} segs={[{t: '1. filter', c: SAND_INK}]} size={52} at={K11.filter} />
			<Rich x={340} y={260} segs={[{t: '→  2. crystallise the filtrate', c: VIOL}]} size={52} at={K11.then} />
			<Inset x={96} y={310} w={760} h={300} title="crystallise first?" at={K11.cf}>
				{Array.from({length: 36}, (_, n) => { const x = 150 + (n % 12) * 56, y = 410 + Math.floor(n / 12) * 56; return n % 5 === 2 ? <Grain key={n} x={x} y={y} r={22} rot={n * 30} /> : <rect key={n} x={x - 14} y={y - 14} width={28} height={28} fill="#fff" stroke={INK} strokeWidth={2} transform={`rotate(${n * 23},${x},${y})`} />; })}
				<StrikeLine x1={120} y1={590} x2={830} y2={340} at={K11.crystals} />
				<Write x={500} y={598} text="sand in the salt" at={K11.crystals + 8} size={42} color={RED} />
			</Inset>
			{/* framed memory card */}
			<Fade at={K11.und - 4}>
				<rect x={96} y={650} width={880} height={270} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={106} y={660} width={860} height={250} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={130} y={706} text="memory aid" size={30} color={INK} hand weight={700} at={-1000} />
			</Fade>
			<Rich x={140} y={790} segs={[{t: 'Undissolved: filter it out.', c: SAND_INK}]} size={56} hand at={K11.und} />
			<Rich x={140} y={874} segs={[{t: 'Dissolved: crystallise it out.', c: VIOL}]} size={56} hand at={K11.dis} />
			{/* the order as a picture: 1 filter, then 2 crystallise (until the sieve arrives) */}
			<Fade at={-1000} out={K11.works - 16}>
				<Plate p={FUN_S} x={1060} y={300} h={470} />
				<Plate p={CRYS} x={1420} y={470} h={ph(CRYS, 400) } />
				<PA a={[1290, 560]} b={[1410, 560]} at={K11.then - 10} color={VIOL} bend={-0.3} width={5} />
				<Sx x={1170} y={830} text="1. filter" size={44} color={SAND_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1620} y={830} text="2. crystallise" size={44} color={VIOL} anchor="middle" weight={800} at={-1000} />
				<Sx x={1620} y={880} text="the filtrate" size={34} color={VIOL} anchor="middle" weight={800} at={-1000} />
				<PenRing cx={1170} cy={530} rx={140} ry={250} at={K11.filter} color={SAND_INK} seed={2} />
				<PenRing cx={1620} cy={570} rx={220} ry={130} at={K11.then} color={VIOL} seed={5} />
			</Fade>
			{/* the sieve and its limit */}
			<Plate p={SIEVE} x={SV.x} y={SV.y} h={SIEVE.box[3] * sk} at={K11.works - 10} />
			<Sx x={SV.x + SV.w / 2} y={SV.y + SIEVE.box[3] * sk + 40} text="kitchen sieve over a bowl" size={30} color={INK} anchor="middle" weight={700} at={K11.sieve} />
			<PenRing cx={SX(600)} cy={SY(470)} rx={190} ry={80} at={K11.big} color={SAND_INK} seed={3} />
			<Write x={SX(1050)} y={SY(330)} text="big pieces stay" at={K11.big + 6} size={42} color={SAND_INK} />
			<PenRing cx={SX(720)} cy={SY(870)} rx={250} ry={40} at={K11.through} color={PURE} seed={5} />
			<Write x={SX(1050)} y={SY(800)} text="small pass" at={K11.through + 6} size={42} color={PURE} />
			<ViewFrame id="v3s11" cx={P.cx} cy={P.cy} r={P.r} at={K11.but}>
				<rect x={P.cx - P.r} y={P.cy - P.r} width={2 * P.r} height={2 * P.r} fill="#e6eff6" />
				<rect x={P.cx - P.r} y={P.cy - 14} width={2 * P.r} height={28} fill="#d9c9a6" />
				{Array.from({length: 5}, (_, i) => <rect key={i} x={P.cx - P.r + 14 + i * 50} y={P.cy - 16} width={18} height={32} rx={6} fill="#e6eff6" />)}
				{Array.from({length: 8}, (_, i) => { const t = ((f - K11.but) * 1.6 + i * 30) % 240; const x = P.cx - P.r + 23 + (i % 5) * 50; return <Glyph key={i} k={i % 2 ? 'Cl' : 'Na'} x={x} y={P.cy - P.r + t} u={9} />; })}
			</ViewFrame>
			<Write x={1060} y={880} text="ions, not tiny grains" at={K11.sep} size={42} color={VIOL} />
			<Sx x={1060} y={930} text="filter paper cannot catch them" size={30} color={INK} weight={700} at={K11.catch} />
			<Checklist sandAt={-1000} saltAt={-1000} />
			{void K11.notice}{void gy}{void Readout}{void Inset}{void Chip}{void Grain}
		</SVG>
	);
};
