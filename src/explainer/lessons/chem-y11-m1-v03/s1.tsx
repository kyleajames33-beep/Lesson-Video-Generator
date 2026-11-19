// Y11 Chem M1 V03 scenes 1 to 6: V02's final beaker (sand and salty water) with its two particle views, the filter
// paper as a live membrane run (water and ions cross, sand grains cannot), the filter rig (the beaker tilts by itself,
// the stream runs down a coded rod, drips fill the flask and the plate cross-fades to the sand residue), the clear
// filtrate prediction, the drop test on a warm watch glass and washing and drying the sand.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown} from '../../kit';
import type {BoxConfig} from '../../sims/particle-box';
import {FUN_E, FUN_S, OVEN, SANDB, WASH, WG, WG_SAND, hold, sc} from './common';
import {
	Checklist, Chip, Drips, Fade, FlaskFill, Framed, Glyph, Grain, Heading, INK, Inset, PURE, PenArrow, PenRing, Plate, Particles, Readout, RED, Rich,
	SAND_INK, SVG, Stream, Sx, VIOL, ViewFrame, Write, clamp01, kf, lerp, ph, plateMap, prog, rigGeo, slotXY, smooth, spec, useRun, vis,
} from './parts';
import type {BoxRun, GKind} from './parts';

const WK: Record<string, GKind> = {H2O: 'H2O'};
const IK: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};
/** The opening beaker (V02's final frame). */
const OB = {x: 630, y: 222, w: 540};
const obk = OB.w / SANDB.box[2];
const OX = (u: number) => OB.x + (u - SANDB.box[0]) * obk, OY = (v: number) => OB.y + (v - SANDB.box[1]) * obk;

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {want: 'We want two', trick: 'The trick', prop: "use the property that's", insol: 'Sand is insoluble', sol: 'Salt is soluble', spread: 'spread out', so: 'So how can', mix: 'mixture'});
const SAND_RUN: BoxConfig = {seed: 31, frames: 800, w: 340, h: 300, species: spec(8, WK), initial: [{species: 'H2O', count: 15}], speed: 1.1};
const ION_RUN: BoxConfig = {seed: 32, frames: 800, w: 360, h: 360, species: spec(8, IK), initial: [{species: 'H2O', count: 16}, {species: 'Na', count: 5}, {species: 'Cl', count: 5}], speed: 1.1};
const GRAINS1: [number, number, number][] = [[230, 760, 46], [330, 778, 52], [440, 758, 44], [280, 700, 38], [395, 702, 40]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sr = useRun(SAND_RUN), ir = useRun(ION_RUN);
	const h = SANDB.box[3] * obk;
	const sy = OY(1140), wy = OY(700);
	return (
		<SVG>
			<Plate p={SANDB} x={OB.x} y={OB.y} h={h} />
			{/* V02's final-frame callouts and chips, handing over to the checklist */}
			<Fade at={-1000} out={K1.insol}>
				<Sx x={OB.x - 30} y={sy + 12} text="sand: doesn't dissolve" size={44} color={INK} anchor="end" weight={800} at={-1000} />
				<line x1={OB.x - 20} y1={sy} x2={OB.x + 110} y2={sy} stroke={INK} strokeWidth={3} />
			</Fade>
			<Fade at={-1000} out={K1.sol}>
				<Sx x={OB.x + OB.w + 30} y={wy + 12} text="salt: dissolved" size={44} color={INK} weight={800} at={-1000} />
				<line x1={OB.x + OB.w + 20} y1={wy} x2={OB.x + OB.w - 120} y2={wy} stroke={INK} strokeWidth={3} />
			</Fade>
			<Chip x={900} y={130} segs={[{t: 'Next: how do we get both back?'}]} at={-1000} out={14} size={40} color={PURE} anchor="middle" />
			<Chip x={1560} y={660} segs={[{t: 'dry sand'}]} at={-1000} out={24} size={46} color={INK} />
			<Chip x={1560} y={770} segs={[{t: 'dry salt'}]} at={-1000} out={24} size={46} color={INK} />
			<Checklist o={prog(f, 20, 16)} />
			<Write x={900} y={204} text="what's different?" at={K1.prop} out={K1.mix - 20} size={42} color={INK} anchor="middle" />
			{/* insoluble: grains lie separate on the bottom */}
			<ViewFrame id="v3s1a" cx={330} cy={640} r={190} at={K1.insol} src={[OX(560), OY(1060)]}>
				<rect x={140} y={460} width={380} height={380} fill="#e6eff6" />
				<Particles run={sr} cx={330} cy={610} kinds={WK} u={8} />
				{GRAINS1.map(([x, y, r], i) => <Grain key={i} x={x} y={y + Math.sin(f * 0.04 + i) * 1.2} r={r} rot={i * 37} />)}
			</ViewFrame>
			<PenRing cx={330} cy={778} rx={66} ry={60} at={K1.insol + 30} color={SAND_INK} seed={3} />
			<Write x={330} y={428} text="stays as grains" at={K1.insol + 20} size={42} color={SAND_INK} anchor="middle" />
			<Sx x={330} y={884} text="insoluble:" size={44} color={SAND_INK} anchor="middle" weight={800} at={K1.insol + 10} />
			<Sx x={330} y={936} text="doesn't dissolve" size={44} color={INK} anchor="middle" weight={800} at={K1.insol + 10} />
			{/* soluble: ions spread through the water */}
			<ViewFrame id="v3s1b" cx={1500} cy={470} r={190} at={K1.sol} src={[OX(800), OY(640)]}>
				<rect x={1310} y={280} width={380} height={380} fill="#e6eff6" />
				<Particles run={ir} cx={1500} cy={470} kinds={IK} u={8} />
			</ViewFrame>
			<Sx x={1500} y={726} text="soluble: dissolves" size={44} color={VIOL} anchor="middle" weight={800} at={K1.sol + 10} />
			<Write x={1500} y={796} text="spread out as ions" at={K1.spread} size={42} color={VIOL} anchor="middle" />
			<Heading text="Filtration and crystallisation: getting sand and salt back" at={K1.mix - 6} />
			{void K1.want}{void K1.so}
		</SVG>
	);
};

// ---------- 2. filtration: why it works (live membrane run) ----------
const K2 = cues(sc('filtration-why'), {start: 'Start with', pores: 'called pores', water: 'Water molecules', through: ['through', 2], ions: 'The dissolved salt', withw: 'go through with', but: 'But a sand', trapped: 'trapped', filt: "That's filtration", sep: 'It separates'});
const PV = {x: 130, y: 230, w: 1000, h: 600};
const MEM = 0.42;
const PK: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};
const PORE_RUN: BoxConfig = {
	seed: 7, frames: 980, w: PV.h, h: PV.w, speed: 1.8,
	species: [...spec(12, PK), {id: 'sand', r: 50, mass: 25}],
	initial: [{species: 'H2O', count: 36, region: 'left'}],
	inject: [{at: K2.ions - 40, species: 'Na', count: 9, region: 'left'}, {at: K2.ions - 40, species: 'Cl', count: 9, region: 'left'}, {at: K2.but - 70, species: 'sand', count: 3, region: 'left'}],
	membrane: {x: MEM, passes: ['H2O', 'Na', 'Cl'], chance: 0.3},
};
const memY = PV.y + PV.h * MEM;
/** Screen position of a slot (the run's x axis runs down the screen). */
const pxy = (run: BoxRun, slot: number, f: number): [number, number] => {
	const [rx, ry] = slotXY(run, slot, f, run.config.w / 2, run.config.h / 2);
	return [PV.x + ry, PV.y + rx];
};
const idx = (run: BoxRun, id: string) => run.config.species.findIndex(s => s.id === id);
const through = (run: BoxRun, id: string, f: number) => { const i = idx(run, id), k = Math.min(run.frames - 1, Math.max(0, Math.round(f))); return run.counts[i][k] - run.left[i][k]; };
const Fibres: React.FC = () => (
	<g>
		<rect x={PV.x} y={memY - 20} width={PV.w} height={40} fill="#efe6d3" />
		{Array.from({length: 7}, (_, i) => (
			<path key={i} d={`M${PV.x},${memY - 16 + i * 5} ${Array.from({length: 26}, (_, k) => `Q${PV.x + k * 40 + 20},${memY - 16 + i * 5 + ((k + i) % 2 ? 9 : -9)} ${PV.x + (k + 1) * 40},${memY - 16 + i * 5}`).join(' ')}`} fill="none" stroke="#a89470" strokeWidth={2.4} />
		))}
		{Array.from({length: 11}, (_, i) => <rect key={'g' + i} x={PV.x + 40 + i * 90} y={memY - 22} width={26} height={44} rx={8} fill="#e6eff6" />)}
	</g>
);
export const SceneFiltWhy: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(PORE_RUN);
	const sf = Math.min(run.frames - 1, f);
	const parts: React.ReactNode[] = [];
	const sandI = idx(run, 'sand');
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const [x, y] = pxy(run, i, sf);
		const id = run.config.species[s].id;
		parts.push(s === sandI ? <Grain key={i} x={x} y={y} r={50} rot={i * 41} /> : <Glyph key={i} k={PK[id]} x={x} y={y} u={12} rot={(i * 47 + sf * 0.6) % 360} />);
	}
	// the sand grain nearest the paper when "trapped" is spoken (followed by the ring)
	let ring: [number, number] | null = null;
	if (f >= K2.trapped) {
		let best = -1, bd = 1e9;
		for (let i = 0; i < run.slots; i++) if (run.sp[Math.min(run.frames - 1, K2.trapped + 20) * run.slots + i] === sandI) { const [, y] = pxy(run, i, K2.trapped + 20); if (memY - y < bd) { bd = memY - y; best = i; } }
		if (best >= 0) ring = pxy(run, best, sf);
	}
	const pulse = f >= K2.trapped ? 1 + 0.08 * Math.sin(clamp01((f - K2.trapped) / 30) * Math.PI) : 1;
	return (
		<SVG>
			<Heading text="Filtration: why it works" at={0} />
			<defs><clipPath id="v3pv"><rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} /></clipPath></defs>
			<rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} fill="#e6eff6" />
			<g clipPath="url(#v3pv)"><Fibres />{parts}</g>
			<rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} fill="none" stroke={INK} strokeWidth={5} />
			<Sx x={PV.x + PV.w - 20} y={memY - 32} text="filter paper" size={34} color={INK} anchor="end" weight={800} at={K2.start} />
			<PenRing cx={PV.x + 40 + 5 * 90 + 13} cy={memY} rx={34} ry={34} at={K2.pores} color={INK} seed={5} />
			<Sx x={PV.x + 40 + 5 * 90 + 13} y={memY + 74} text="pore" size={34} color={INK} anchor="middle" weight={800} at={K2.pores + 6} />
			<Sx x={PV.x + 20} y={PV.y + PV.h - 20} text="model, not to scale" size={30} color={INK} weight={700} at={-1000} />
			<PenArrow a={[PV.x + 220, PV.y + 120]} b={[PV.x + 220, PV.y + 420]} at={K2.through} color={PURE} bend={0.1} width={5} />
			<Write x={PV.x + 250} y={PV.y + 400} text="tiny: through" at={K2.through + 6} size={42} color={PURE} />
			<Write x={PV.x + 640} y={PV.y + 520} text="ions too" at={K2.withw} size={42} color={VIOL} />
			{ring ? <PenRing cx={ring[0]} cy={ring[1]} rx={66} ry={62} at={K2.trapped} color={SAND_INK} seed={2} /> : null}
			{ring ? <Write x={ring[0]} y={ring[1] - 82} text="too big" at={K2.trapped + 6} size={42} color={SAND_INK} anchor="middle" /> : null}
			{/* live readouts read from the run */}
			<Sx x={1200} y={262} text="through the paper:" size={34} color={INK} weight={800} at={-1000} />
			<Readout x={1200} y={280} w={560} text={`water molecules: ${through(run, 'H2O', sf)}`} size={44} color={PURE} frame={PURE} />
			<Readout x={1200} y={370} w={560} text={`ions: ${through(run, 'Na', sf) + through(run, 'Cl', sf)}`} size={44} color={VIOL} frame={VIOL} at={K2.ions - 30} />
			<g transform={`translate(1480,493) scale(${pulse}) translate(-1480,-493)`}>
				<Readout x={1200} y={460} w={560} text={`sand grains: ${through(run, 'sand', sf)}`} size={44} color={SAND_INK} frame={SAND_INK} at={K2.but - 50} />
			</g>
			<Sx x={1200} y={590} text="(model counts)" size={30} color={INK} weight={700} at={-1000} />
			<Fade at={-1000} out={K2.filt - 10}>
				<Sx x={1200} y={660} text="key" size={34} color={INK} weight={800} at={-1000} />
				<Glyph k="H2O" x={1232} y={712} u={12} /><Sx x={1280} y={724} text="water molecule" size={34} color={INK} weight={700} at={-1000} />
				<Glyph k="Na" x={1232} y={772} u={12} /><Glyph k="Cl" x={1262} y={772} u={12} /><Sx x={1300} y={784} text="ions of the salt" size={34} color={INK} weight={700} at={-1000} />
				<Grain x={1240} y={850} r={34} /><Sx x={1300} y={862} text="sand grain" size={34} color={INK} weight={700} at={-1000} />
			</Fade>
			<Rich x={1200} y={700} segs={[{t: 'filtration', c: PURE}]} size={52} at={K2.filt} />
			<Rich x={1200} y={760} segs={[{t: 'separates an '}, {t: 'insoluble', c: SAND_INK}]} size={44} at={K2.sep} />
			<Rich x={1200} y={816} segs={[{t: 'solid from a liquid,'}]} size={44} at={K2.sep + 10} />
			<Rich x={1200} y={872} segs={[{t: 'by particle size', c: PURE}]} size={44} at={K2.sep + 20} />
			<Checklist />
			{void K2.water}{void K2.ions}
		</SVG>
	);
};

// ---------- 3. the setup: residue and filtrate ----------
const K3 = cues(sc('filtration-setup'), {fold: 'Fold the', funnel: 'sit it in', flask: 'conical flask', pour: 'Pour the mixture', rod: 'glass rod', so: 'so it runs', residue: 'residue', liquid: 'The liquid that', filtrate: 'filtrate'});
const R3 = {x: 560, y: 300, h: 640};
const UP: [number, number] = [868, 372], POUR: [number, number] = [780, 262];
export const BeakerPour: React.FC<{t: number; up: [number, number]; pour: [number, number]; h: number; ang?: number}> = ({t, up, pour, h, ang = -50}) => {
	const k = h / SANDB.box[3];
	const sx = lerp(up[0], pour[0], t), sy = lerp(up[1], pour[1], t);
	return (
		<g transform={`translate(${sx},${sy}) rotate(${ang * t})`}>
			<Plate p={SANDB} x={-(175 - SANDB.box[0]) * k} y={-(300 - SANDB.box[1]) * k} h={h} />
		</g>
	);
};
export const Rod: React.FC<{a: [number, number]; b: [number, number]; o?: number}> = ({a, b, o = 1}) => (
	<g opacity={o}>
		<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#8fb0c8" strokeWidth={13} strokeLinecap="round" />
		<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#eef6fb" strokeWidth={5} strokeLinecap="round" />
		<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#4d6f88" strokeWidth={13} strokeLinecap="round" opacity={0.25} strokeDasharray="1 0" />
	</g>
);
export const SceneSetup: React.FC = () => {
	const f = useCurrentFrame();
	const g = rigGeo(R3.x, R3.y, R3.h);
	const t = kf(f, [[K3.rod - 34, 0], [K3.rod - 4, 1], [K3.residue - 50, 1], [K3.residue - 16, 0]]);
	const pouring = f >= K3.rod - 4 && f < K3.residue - 50 ? 1 : 0;
	const lvl = kf(f, [[K3.rod + 16, 1395], [K3.residue - 10, 1100]]);
	const sandX = prog(f, K3.residue - 40, 30);
	const rodA: [number, number] = [790, 236], rodB: [number, number] = [g.tip[0] + 20, g.tip[1] - 30];
	return (
		<SVG>
			<Heading text="Filtration: the setup" at={0} />
			<Plate p={FUN_E} x={R3.x} y={R3.y} h={R3.h} />
			<FlaskFill x={R3.x} y={R3.y} h={R3.h} lvl={lvl} o={1 - sandX} id="v3ff3" />
			<Plate p={FUN_S} x={R3.x} y={R3.y} h={R3.h} o={sandX} />
			<Rod a={rodA} b={rodB} />
			<Stream d={`M${POUR[0] - 6},${POUR[1] + 8} L${rodB[0] + 4},${rodB[1] - 6}`} on={pouring} />
			<Drips x={g.stem[0]} y0={g.stem[1] + 6} y1={g.Y(lvl) - 4} on={f >= K3.rod + 10 && f < K3.residue + 40 ? 1 : 0} />
			<BeakerPour t={t} up={UP} pour={POUR} h={280} />
			{/* part labels (stay) */}
			<Sx x={470} y={410} text="filter paper cone" size={34} color={INK} anchor="end" weight={800} at={K3.fold} />
			<line x1={482} y1={398} x2={650} y2={398} stroke={INK} strokeWidth={3} opacity={prog(f, K3.fold, 10)} />
			<Sx x={470} y={590} text="funnel" size={34} color={INK} anchor="end" weight={800} at={K3.funnel} />
			<line x1={482} y1={578} x2={g.stem[0] - 10} y2={578} stroke={INK} strokeWidth={3} opacity={prog(f, K3.funnel, 10)} />
			<Sx x={470} y={850} text="conical flask" size={34} color={INK} anchor="end" weight={800} at={K3.flask} />
			<line x1={482} y1={838} x2={g.X(260)} y2={838} stroke={INK} strokeWidth={3} opacity={prog(f, K3.flask, 10)} />
			<Write x={1000} y={250} text="slowly, no splashing" at={K3.rod + 4} size={42} color={INK} />
			<ViewFrame id="v3s3" cx={1580} cy={310} r={140} at={K3.rod + 20} src={[g.tip[0] + 20, g.tip[1] - 26]}>
				<rect x={1440} y={170} width={280} height={280} fill="#e6eff6" />
				<rect x={1440} y={372} width={280} height={26} fill="#efe6d3" />
				{Array.from({length: 5}, (_, i) => <path key={i} d={`M1440,${376 + i * 5} q35,8 70,0 t70,0 t70,0 t70,0`} fill="none" stroke="#a89470" strokeWidth={2} />)}
				{Array.from({length: 6}, (_, i) => { const t = ((f - K3.rod) * 2.4 + i * 47) % 300; return f > K3.rod ? <Glyph key={i} k="H2O" x={1470 + i * 45} y={170 + t} u={9} rot={i * 50 + t} /> : null; })}
				{Array.from({length: 8}, (_, i) => { const land = K3.rod + 30 + i * 22; if (f < land - 40) return null; const a = smooth(prog(f, land - 40, 40)); return <Grain key={'g' + i} x={1470 + ((i * 97) % 230)} y={lerp(170, 350 - Math.floor(i / 4) * 34, a)} r={22} rot={i * 33} />; })}
			</ViewFrame>
			<Sx x={1580} y={490} text="on the paper (close up)" size={30} color={INK} anchor="middle" weight={700} at={K3.rod + 20} />
			<PenArrow a={[1010, 270]} b={[(POUR[0] + rodB[0]) / 2 + 30, (POUR[1] + rodB[1]) / 2]} at={K3.rod + 14} color={INK} bend={0.25} />
			{/* the two terms */}
			<Rich x={1150} y={560} segs={[{t: 'residue:', c: SAND_INK}]} size={52} at={K3.residue} />
			<Rich x={1150} y={616} segs={[{t: 'the solid left on the paper'}]} size={44} at={K3.residue + 6} />
			<line x1={1136} y1={548} x2={g.tip[0] + 26} y2={g.tip[1] - 16} stroke={SAND_INK} strokeWidth={3} opacity={prog(f, K3.residue, 10)} />
			<Write x={1150} y={682} text="stays" at={K3.residue + 14} size={42} color={SAND_INK} />
			<Rich x={1150} y={790} segs={[{t: 'filtrate:', c: PURE}]} size={52} at={K3.filtrate} />
			<Rich x={1150} y={846} segs={[{t: 'the liquid that drips through'}]} size={44} at={K3.filtrate + 6} />
			<line x1={1136} y1={778} x2={g.X(700)} y2={g.Y(1180)} stroke={PURE} strokeWidth={3} opacity={prog(f, K3.filtrate, 10)} />
			<PenArrow a={[g.stem[0] + 50, g.Y(600)]} b={[g.stem[0] + 50, g.Y(1040)]} at={K3.liquid} color={PURE} bend={-0.15} />
			<Write x={1150} y={912} text="into the flask" at={K3.liquid + 10} size={42} color={PURE} />
			<Checklist />
			{void K3.pour}{void K3.so}{void smooth}
		</SVG>
	);
};

// ---------- 4. prediction (3 s) ----------
const K4 = cues(sc('prediction'), {quick: 'Quick prediction', clear: 'perfectly clear', so: 'So is it', think: 'Have a think'});
export const ScenePrediction: React.FC = () => {
	const f = useCurrentFrame();
	const g = rigGeo(300, 215, 700);
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<Plate p={FUN_S} x={300} y={215} h={700} />
			<Chip x={860} y={560} segs={[{t: 'filtrate: clear'}]} at={K4.clear} size={40} color={INK} />
			<line x1={850} y1={590} x2={g.X(720)} y2={g.Y(1180)} stroke={INK} strokeWidth={3} opacity={prog(f, K4.clear, 10)} />
			<Rich x={860} y={430} segs={[{t: 'Is the filtrate '}, {t: 'pure water?', c: PURE}]} size={56} at={K4.so} />
			<Sx x={860} y={760} text="Have a think." size={44} color={INK} weight={800} at={K4.think} />
			<Checklist />
			{void K4.quick}
			<CountdownFrom h={h} at={K4.think} />
		</SVG>
	);
};
const CountdownFrom: React.FC<{h: {startFrame: number; endFrame: number}; at: number}> = ({h, at}) => <Countdown start={h.startFrame} end={h.endFrame} x={1500} y={740} r={64} ringFrom={at} />;

// ---------- 5. still a solution ----------
const K5 = cues(sc('prediction-answer'), {no: 'No', ions: "salt's ions", solution: 'solution', clear: 'Clear only', put: 'Put a drop', evap: 'evaporates', tiny: 'tiny white', behind: 'behind', filt: "Filtration can't", cdm: 'clear doesn\'t mean', pure: 'pure'});
const SOL_RUN: BoxConfig = {seed: 41, frames: 780, w: 300, h: 300, species: spec(8, IK), initial: [{species: 'H2O', count: 14}, {species: 'Na', count: 4}, {species: 'Cl', count: 4}], speed: 1.1};
const R5 = {x: 120, y: 280, h: 600};
const WG5 = {x: 1400, y: 760, w: 380};
export const SceneAnswer: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(SOL_RUN);
	const g = rigGeo(R5.x, R5.y, R5.h);
	const wk = WG5.w / WG.box[2];
	const wc: [number, number] = [WG5.x + (830 - WG.box[0]) * wk, WG5.y + (470 - WG.box[1]) * wk];
	const src: [number, number] = [g.X(560), g.Y(1200)];
	const mv = smooth(prog(f, K5.put + 4, 34));
	const dx = lerp(src[0], wc[0], mv), dy = lerp(src[1], wc[1] - 6, mv) - Math.sin(mv * Math.PI) * 160;
	const dr = 16 * (1 - 0.85 * prog(f, K5.evap, K5.behind - K5.evap));
	const left = f >= K5.behind;
	return (
		<SVG>
			<Heading text="Is the clear filtrate pure water?" at={-1000} />
			<Plate p={FUN_S} x={R5.x} y={R5.y} h={R5.h} />
			<Framed x={560} y={300} segs={[{t: 'No: still salt water', c: '#23704a'}]} at={K5.no} size={52} />
			<PenArrow a={[g.X(760), g.tip[1] - 10]} b={[g.X(760), g.Y(1120)]} at={K5.ions} color={VIOL} bend={-0.25} />
			<Write x={130} y={936} text="ions went through" at={K5.ions + 8} size={42} color={VIOL} />
			<ViewFrame id="v3s5" cx={760} cy={580} r={150} at={K5.solution} src={src}>
				<rect x={600} y={420} width={320} height={320} fill="#e6eff6" />
				<Particles run={run} cx={760} cy={580} kinds={IK} u={8} />
			</ViewFrame>
			<Rich x={950} y={520} segs={[{t: 'solution:', c: VIOL}]} size={52} at={K5.solution} />
			<Rich x={950} y={576} segs={[{t: 'a liquid with something'}]} size={44} at={K5.solution + 6} />
			<Rich x={950} y={630} segs={[{t: 'dissolved in it'}]} size={44} at={K5.solution + 12} />
			{/* the drop test on a warm watch glass */}
			<Plate p={WG} x={WG5.x} y={WG5.y} h={WG.box[3] * wk} at={K5.put - 10} />
			<Sx x={WG5.x + WG5.w / 2} y={WG5.y + WG.box[3] * wk + 40} text="warm watch glass" size={30} color={INK} anchor="middle" weight={700} at={K5.put} />
			{f >= K5.put && dr > 3 && f < K5.behind + 10 ? <ellipse cx={dx} cy={dy} rx={dr} ry={dr * 0.8} fill="rgba(130,180,225,0.9)" stroke="#4a7aa5" strokeWidth={2} /> : null}
			{f >= K5.evap ? Array.from({length: 6}, (_, i) => { const a = f - K5.evap - i * 10; if (a < 0 || a > 80) return null; return <Glyph key={i} k="H2O" x={wc[0] - 30 + i * 12 + Math.sin(a * 0.1 + i) * 8} y={wc[1] - 20 - a * 2.4} u={6} rot={a * 3} o={1 - a / 80} />; }) : null}
			{left ? <g opacity={prog(f, K5.behind, 12)}>{Array.from({length: 14}, (_, i) => { const a = (i / 14) * Math.PI * 2; return <rect key={i} x={wc[0] + Math.cos(a) * 44 - 5} y={wc[1] + Math.sin(a) * 12 - 5} width={10} height={10} fill="#ffffff" stroke={INK} strokeWidth={2} transform={`rotate(${i * 25},${wc[0] + Math.cos(a) * 44},${wc[1] + Math.sin(a) * 12})`} />; })}</g> : null}
			<Write x={1240} y={720} text="the salt was there all along" at={K5.behind + 6} size={42} color={VIOL} />
			<Chip x={560} y={860} segs={[{t: 'clear = pure water'}]} at={K5.cdm - 20} size={40} color={RED} strike={K5.pure - 4} />
			<Write x={1010} y={906} text="clear ≠ pure" at={K5.pure + 4} size={44} color={RED} />
			<Checklist />
			{void K5.clear}{void K5.tiny}{void K5.filt}{void vis}
		</SVG>
	);
};

// ---------- 6. wash and dry the sand ----------
const K6 = cues(sc('wash-dry'), {now: 'Now finish', wet: "It's still wet", dried: 'If you dried', grains: 'grains', so: 'So rinse', dist: 'distilled water', fresh: 'The fresh water', carries: 'carries', filtrate: 'filtrate', then: 'Then dry', oven: 'warm oven', comp: 'completely dry', dry: ['dry', 2], recov: 'recovered'});
const WET_RUN: BoxConfig = {seed: 52, frames: 800, w: 300, h: 300, species: spec(8, IK), initial: [{species: 'H2O', count: 12}, {species: 'Na', count: 5}, {species: 'Cl', count: 5}], speed: 1};
const R6 = {x: 120, y: 330, h: 560};
const GR6: [number, number, number][] = [[750, 640, 44], [850, 660, 50], [940, 630, 40], [800, 560, 36], [900, 560, 34]];
export const SceneWash: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(WET_RUN);
	const g = rigGeo(R6.x, R6.y, R6.h);
	const ions = Math.round(10 * (1 - clamp01((f - K6.carries) / (K6.filtrate + 50 - K6.carries))));
	const ionSlots: number[] = [];
	for (let i = 0; i < run.slots; i++) { const s = run.sp[i]; if (s > 0) ionSlots.push(i); }
	const keep = new Set(ionSlots.slice(0, ions));
	const sandGone = prog(f, K6.then + 4, 20);
	const wm = plateMap(WASH, 0, 0, 300);
	const nozzle: [number, number] = [470 + (1456 - WASH.box[0]) * wm.k, 170 + (428 - WASH.box[1]) * wm.k];
	const squeeze = f >= K6.so + 10 && f < K6.filtrate + 20 ? 1 : 0;
	const tilt = kf(f, [[K6.so, 0], [K6.so + 14, -8], [K6.filtrate + 10, -8], [K6.filtrate + 30, 0]]);
	// the watch glass of sand: out of the cone, into the oven, back out dry
	const wgw = 300, wgk = wgw / WG_SAND.box[2], wgh = WG_SAND.box[3] * wgk;
	const into = smooth(prog(f, K6.oven - 6, 30));
	const back = smooth(prog(f, K6.comp - 24, 24));
	const wx = lerp(lerp(1000, 1500, into), 1500, back), wy = lerp(lerp(850, 560, into), 820, back), ws = back > 0 ? lerp(0.5, 1, back) : lerp(1, 0.5, into);
	const wo = f < K6.then ? 0 : back > 0 ? back : 1 - prog(f, K6.oven + 26, 10);
	return (
		<SVG>
			<Heading text="Wash, then dry the sand" at={0} />
			<Plate p={FUN_S} x={R6.x} y={R6.y} h={R6.h} o={1 - sandGone} />
			<Plate p={FUN_E} x={R6.x} y={R6.y} h={R6.h} o={sandGone} />
			<g transform={`rotate(${tilt},${470 + wm.w / 2},470)`}><Plate p={WASH} x={470} y={170} h={300} /></g>
			<Stream d={`M${nozzle[0]},${nozzle[1]} Q${(nozzle[0] + g.tip[0]) / 2},${nozzle[1] - 60} ${g.tip[0] + 10},${g.tip[1] - 40}`} on={squeeze} width={6} />
			<Drips x={g.stem[0]} y0={g.stem[1] + 6} y1={g.liq - 4} on={squeeze} />
			<Sx x={640} y={262} text="distilled water" size={34} color={PURE} weight={800} at={K6.dist} />
			{/* the wet sand, close up */}
			<ViewFrame id="v3s6" cx={850} cy={600} r={160} at={-1000} src={[g.X(522), g.tip[1] - 14]} >
				<rect x={690} y={440} width={320} height={320} fill="#e6eff6" />
				<Particles run={run} cx={850} cy={600} kinds={IK} u={8} dim={(id, s) => (id === 'H2O' ? 1 : keep.has(s) ? 1 : 0)} />
				{GR6.map(([x, y, r], i) => <Grain key={i} x={x} y={y} r={r} rot={i * 50} />)}
			</ViewFrame>
			<Sx x={850} y={800} text="wet sand: salt water between grains" size={30} color={INK} anchor="middle" weight={700} at={K6.wet} />
			<Sx x={1060} y={600} text="ions left in the sand" size={34} color={INK} weight={800} at={K6.carries - 10} />
			<Readout x={1060} y={620} w={200} text={`${ions}`} size={52} color={VIOL} frame={VIOL} anchor="middle" at={K6.carries - 10} />
			<Sx x={1280} y={676} text="(model)" size={30} color={INK} weight={700} at={K6.carries - 10} />
			<PenArrow a={[g.X(700), g.Y(260)]} b={[g.X(700), g.Y(1000)]} at={K6.carries} color={PURE} bend={-0.2} />
			<Write x={1060} y={760} text="rinsed away" at={K6.carries + 10} size={42} color={PURE} />
			{/* if you dried it now */}
			<Inset x={1000} y={200} w={420} h={300} title="if you dried it now" at={K6.grains - 20} out={K6.fresh}>
				{[[1110, 380, 50], [1220, 400, 56], [1320, 375, 46]].map(([x, y, r], i) => (
					<g key={i}>
						<Grain x={x} y={y} r={r} rot={i * 40} />
						{Array.from({length: 8}, (_, k) => { const a = (k / 8) * Math.PI * 2 + i; return <rect key={k} x={x + Math.cos(a) * r * 0.85 - 6} y={y + Math.sin(a) * r * 0.85 - 6} width={12} height={12} fill="#fff" stroke={INK} strokeWidth={2} />; })}
					</g>
				))}
				<Write x={1030} y={480} text="salt on the sand" at={K6.grains + 4} size={42} color={RED} />
			</Inset>
			{/* oven */}
			<Plate p={OVEN} x={1440} y={420} h={380} />
			<Write x={1500} y={400} text="warm oven, or air" at={K6.oven} size={42} color={INK} />
			<Sx x={1632} y={850} text="later" size={34} color={INK} anchor="middle" weight={800} at={K6.oven + 30} out={K6.comp - 24} />
			{wo > 0.01 ? <g opacity={wo} transform={`translate(${wx},${wy}) scale(${ws})`}><Plate p={WG_SAND} x={-wgw / 2} y={-wgh / 2} h={wgh} /></g> : null}
			<PenRing cx={1500} cy={820} rx={170} ry={70} at={K6.dry + 4} color="#23704a" seed={4} />
			<Checklist sandAt={K6.dry + 4} />
			{void K6.now}{void K6.dried}{void K6.fresh}{void K6.recov}{void ph}{void Rich}
		</SVG>
	);
};
