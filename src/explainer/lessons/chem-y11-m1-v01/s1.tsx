// Y11 Chem M1 V01 scenes 1 to 5: the three painted gas jars and their live particle views (cold open), one substance
// or more than one (the side tree starts), the element board (jar A and the iron lump), the compound board (jar B,
// a glass of water, a watch glass of salt and three ratio readouts) and the mixture board (iron and sulfur under the
// hanging magnet, the residue cross-fade and the add-more control).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {FES, FES_RES, GLASS, JAR, LUMP, MAGNET, SALT, SULFUR, sc} from './common';
import {
	AMB, Bench, Chip, Fade, Glyph, Heading, INK, Lattice, MIX, ModelTag, Particles, PenArrow, PenRing, Plate, PURE, Readout, Rich, SVG, SideTree, Sx, TrackRing, ViewFrame,
	Write, clamp01, countOf, kf, kindsOf, plateMap, prog, simF, slotsOf, smooth, spec, tw, useRun,
} from './parts';
import type {GKind} from './parts';

// ---------- the jar row (scenes 1 and 2) ----------
export const JX = [360, 790, 1220];
export const JAR_Y = 500, JAR_H = 400;
export const VY = 310, VR = 138, VB = 188, VU = 8;
const S12 = 915 + 1128 + 4;
export const K_A: Record<string, GKind> = {O2: 'O2'};
export const K_B: Record<string, GKind> = {CO2: 'CO2'};
export const K_C: Record<string, GKind> = {N2: 'N2', O2: 'O2', Ar: 'Ar', CO2: 'CO2'};
export const RUN_A: BoxConfig = {seed: 11, frames: S12, w: VB, h: VB, species: spec(VU, K_A), initial: [{species: 'O2', count: 10}], speed: 1.3};
export const RUN_B: BoxConfig = {seed: 23, frames: S12, w: VB, h: VB, species: spec(VU, K_B, {CO2: 1.4}), initial: [{species: 'CO2', count: 9}], speed: 1.3};
export const RUN_C: BoxConfig = {seed: 37, frames: S12, w: VB, h: VB, species: spec(VU, K_C, {CO2: 1.4}), initial: [{species: 'N2', count: 16}, {species: 'O2', count: 4}, {species: 'Ar', count: 1}], inject: [{at: 915 + 909, species: 'CO2', count: 1}], speed: 1.3};
const jarW = plateMap(JAR, 0, 0, JAR_H).w;
const Jars: React.FC<{letters?: boolean}> = ({letters = true}) => (
	<>
		<Bench x0={150} x1={1360} y={JAR_Y + JAR_H + 2} />
		{JX.map((x, i) => (
			<g key={i}>
				<Plate p={JAR} x={x - jarW / 2} y={JAR_Y} h={JAR_H} />
				{letters ? <Sx x={x} y={JAR_Y + 270} text={'ABC'[i]} size={44} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
			</g>
		))}
	</>
);
/** The three live views over the jars; f0 is the sim frame at this scene's frame 0. */
const RowViews: React.FC<{f0: number; at?: number[]}> = ({f0, at = [-1000, -1000, -1000]}) => {
	const ra = useRun(RUN_A), rb = useRun(RUN_B), rc = useRun(RUN_C);
	return (
		<>
			{[[ra, K_A], [rb, K_B], [rc, K_C]].map(([run, kinds], i) => (
				<ViewFrame key={i} id={'v1row' + i} cx={JX[i]} cy={VY} r={VR} at={at[i]} src={[JX[i], JAR_Y + 150]}>
					<Particles run={run as ReturnType<typeof useRun>} cx={JX[i]} cy={VY} kinds={kinds as Record<string, GKind>} u={VU} f0={f0} />
				</ViewFrame>
			))}
		</>
	);
};
/** Readout panel: kinds of particle per jar, read from the runs (C can be overridden by the ring tally). */
const KindsPanel: React.FC<{f0: number; at?: number; cText?: string; pulse?: number}> = ({f0, at = -1000, cText, pulse}) => {
	const f = useCurrentFrame();
	const ra = useRun(RUN_A), rb = useRun(RUN_B), rc = useRun(RUN_C);
	const sf = f + f0;
	const vals = [`${kindsOf(ra, sf)}`, `${kindsOf(rb, sf)}`, cText ?? `${kindsOf(rc, sf)}`];
	const o = prog(f, at, 14);
	if (o <= 0.005) return null;
	return (
		<g opacity={o}>
			<rect x={1410} y={548} width={414} height={282} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={1436} y={598} text="kinds of particle" size={36} color={INK} weight={800} at={-1000} />
			{['jar A', 'jar B', 'jar C'].map((t, i) => (
				<g key={t}>
					<Sx x={1436} y={666 + i * 68} text={t} size={44} color={INK} weight={700} at={-1000} />
					<Sx x={1790} y={668 + i * 68} text={vals[i]} size={52} color={i === 2 ? MIX : PURE} anchor="end" weight={800} at={-1000} />
				</g>
			))}
			{pulse !== undefined ? <><PenRing cx={1617} cy={650} rx={196} ry={34} at={pulse} out={pulse + 70} color={PURE} seed={2} /><PenRing cx={1617} cy={718} rx={196} ry={34} at={pulse + 8} out={pulse + 78} color={PURE} seed={6} /></> : null}
		</g>
	);
};
const BAND_Y = 490;
const TAG_T = ['oxygen', 'carbon dioxide', 'air'];

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {gas: 'gas', ox: 'pure oxygen', co: 'pure carbon', air: 'ordinary air', same: 'They look exactly', parts: 'the particles inside', apart: 'apart'});
const TITLE = 'Element, compound or mixture: what do the particles show?';
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const fly = smooth(prog(f, K1.parts, 30));
	const tagAt = [K1.ox, K1.co, K1.air];
	return (
		<SVG>
			<Jars />
			<RowViews f0={0} at={[K1.parts, K1.parts + 8, K1.parts + 16]} />
			{TAG_T.map((t, i) => {
				const x = kf(f, [[K1.parts, 1420], [K1.parts + 30, JX[i]]]);
				const y = kf(f, [[K1.parts, 300 + i * 80], [K1.parts + 30, BAND_Y]]);
				const anchor = fly > 0.5 ? 'middle' : 'start';
				const xx = fly > 0.5 ? x : x;
				return f >= tagAt[i] ? (
					<g key={t}>
						<Write x={xx} y={y} text={t} at={tagAt[i]} size={42} color={INK} anchor={anchor} />
						<Sx x={1420 + tw(t, 42, true) + 18} y={300 + i * 80} text="?" size={46} color={AMB} weight={800} at={tagAt[i] + 8} out={K1.parts - 10} />
					</g>
				) : null;
			})}
			<Write x={1420} y={545} text="which jar is which?" at={K1.air + 20} out={K1.parts - 10} size={40} color={INK} />
			<Write x={1420} y={660} text="same to the eye" at={K1.same} out={K1.parts - 10} size={44} color={MIX} />
			<PenArrowBracket at={K1.same + 6} out={K1.parts - 10} />
			<Write x={110} y={640} text="zoom in" at={K1.parts + 14} size={42} color={PURE} />
			<PenArrow a={[200, 600]} b={[268, 438]} at={K1.parts + 20} color={PURE} bend={0.15} />
			<KindsPanel f0={0} at={K1.apart} />
			<Heading text={TITLE} at={K1.apart} />
			{void K1.gas}
		</SVG>
	);
};
/** Pen bracket under all three jars. */
const PenArrowBracket: React.FC<{at: number; out: number}> = ({at, out}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = 1 - prog(f, out, 10);
	return (
		<g opacity={o}>
			<path d={`M${JX[0] - 110},${JAR_Y + JAR_H + 16} Q${JX[0] - 110},${JAR_Y + JAR_H + 34} ${JX[0] - 80},${JAR_Y + JAR_H + 34} L${JX[2] + 80},${JAR_Y + JAR_H + 34} Q${JX[2] + 110},${JAR_Y + JAR_H + 34} ${JX[2] + 110},${JAR_Y + JAR_H + 16}`} fill="none" stroke={AMB} strokeWidth={5} strokeLinecap="round" strokeDasharray={2400} strokeDashoffset={2400 * (1 - prog(f, at, 20))} />
		</g>
	);
};

// ---------- 2. one substance, or more than one ----------
const K2 = cues(sc('substance-or-mixture'), {sub: 'A substance is', together: 'together', b: 'Jar B', atoms: ['atoms', 2], pure: 'pure substance', air: 'Now look at the air', n: 'nitrogen', o: ['oxygen', 3], ar: 'argon', co: ['dioxide', 1], sep: 'moving around separately', mix: 'A sample with two', mixture: 'mixture'});
export const SceneSubstance: React.FC = () => {
	const f = useCurrentFrame();
	const F0 = 915;
	const ra = useRun(RUN_A), rb = useRun(RUN_B), rc = useRun(RUN_C);
	const sA = slotsOf(ra, 'O2', simF(ra, F0 + K2.together)), sB = slotsOf(rb, 'CO2', simF(rb, F0 + K2.atoms));
	const ringC: [string, number, string][] = [['N2', K2.n, 'N₂'], ['O2', K2.o, 'O₂'], ['Ar', K2.ar, 'Ar'], ['CO2', K2.co + 4, 'CO₂']];
	const tally = ringC.filter(r => f >= r[1]).length;
	const cText = f < K2.air ? undefined : f < K2.n ? '?' : f < K2.co + 4 ? `${tally}` : undefined;
	return (
		<SVG>
			<Heading text={TITLE} at={-1000} />
			<Jars />
			<RowViews f0={F0} />
			{/* band tags: the names, then what every particle is */}
			<Sx x={JX[0]} y={BAND_Y} text="oxygen" size={42} color={INK} anchor="middle" hand at={-1000} out={K2.together} />
			<Write x={JX[0]} y={BAND_Y} text="all the same: O₂" at={K2.together + 8} size={42} color={PURE} anchor="middle" />
			<Sx x={JX[1]} y={BAND_Y} text="carbon dioxide" size={42} color={INK} anchor="middle" hand at={-1000} out={K2.atoms} />
			<Write x={JX[1]} y={BAND_Y} text="all the same: CO₂" at={K2.atoms + 8} size={42} color={PURE} anchor="middle" />
			<Sx x={JX[2]} y={BAND_Y} text="air" size={42} color={INK} anchor="middle" hand at={-1000} />
			{sA.slice(0, 3).map((s, i) => <TrackRing key={'a' + i} run={ra} slot={s} cx={JX[0]} cy={VY} f0={F0} rad={22} at={K2.together - 10 + i * 14} out={K2.together + 50 + i * 14} color={PURE} />)}
			{sB.slice(0, 3).map((s, i) => <TrackRing key={'b' + i} run={rb} slot={s} cx={JX[1]} cy={VY} f0={F0} rad={27} at={K2.atoms - 12 + i * 14} out={K2.atoms + 50 + i * 14} color={PURE} />)}
			{ringC.map(([id, at, lbl], i) => {
				const sf = simF(rc, F0 + at);
				const sl = slotsOf(rc, id, sf);
				return sl.length ? <TrackRing key={'c' + i} run={rc} slot={sl[0]} cx={JX[2]} cy={VY} f0={F0} rad={id === 'CO2' ? 28 : 22} at={at} out={K2.sep + 40} color={MIX} label={lbl} /> : null;
			})}
			<PenRing cx={JX[2]} cy={VY + 4} rx={VR + 18} ry={VR + 6} at={K2.sep} color={AMB} seed={8} />
			<Write x={1410} y={880} text="4 kinds, not joined" at={K2.sep + 6} size={42} color={MIX} />
			<Write x={1410} y={926} text="to each other" at={K2.sep + 24} size={42} color={MIX} />
			<KindsPanel f0={F0} cText={cText} pulse={K2.atoms + 10} />
			<SideTree y={210} show={{pure: K2.pure, mix: K2.mix}} nodes={{pure: [JAR, JAR], mix: [JAR]}} />
			{void K2.sub}{void K2.b}{void K2.mixture}{void countOf}
		</SVG>
	);
};

// ---------- 3. element ----------
const K3 = cues(sc('element'), {ox: 'Oxygen is an element', def: 'An element is', mol: 'molecule,', both: 'both atoms are oxygen', so: 'So a molecule', iron: 'Iron is an element', every: 'every atom is an iron', els: 'Elements are', formula: 'formula', symbol: 'symbol'});
const EL_RUN: BoxConfig = {seed: 5, frames: 900, w: 210, h: 210, species: spec(9, K_A), initial: [{species: 'O2', count: 8}], speed: 1.1};
const UA = {cx: 290, cy: 360, r: 150}, UF = {cx: 990, cy: 360, r: 150};
export const SceneElement: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(EL_RUN);
	const slot = slotsOf(run, 'O2', simF(run, K3.both))[0];
	const lumpH = 250, lm = plateMap(LUMP, 0, 0, lumpH);
	const flash = f >= K3.both && f < K3.both + 40 ? 0.5 + 0.5 * Math.sin((f - K3.both) * 0.5) : 0;
	return (
		<SVG>
			<Heading text="Element: one kind of atom" at={0} />
			{/* jar A and its enlarged view */}
			<Bench x0={150} x1={1300} y={902} />
			<Plate p={JAR} x={UA.cx - plateMap(JAR, 0, 0, 370).w / 2} y={530} h={370} />
			<Sx x={UA.cx} y={780} text="A" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<ViewFrame id="v1el" cx={UA.cx} cy={UA.cy} r={UA.r} src={[UA.cx, 650]}>
				<Particles run={run} cx={UA.cx} cy={UA.cy} kinds={K_A} u={9} />
				{flash > 0 ? (() => { const [x, y] = [UA.cx - 105 + run.x[simF(run, f) * run.slots + slot], UA.cy - 105 + run.y[simF(run, f) * run.slots + slot]]; return <circle cx={x} cy={y} r={20} fill="#fff4c2" opacity={flash * 0.6} />; })() : null}
			</ViewFrame>
			<TrackRing run={run} slot={slot} cx={UA.cx} cy={UA.cy} rad={26} at={K3.mol} color={PURE} />
			<Sx x={480} y={262} text="molecule:" size={34} color={INK} weight={800} at={K3.mol} />
			<Sx x={480} y={302} text="atoms joined together" size={34} color={INK} weight={600} at={K3.mol + 6} />
			<Write x={480} y={398} text="2 atoms, 1 kind" at={K3.both} size={42} color={PURE} />
			<Chip x={480} y={450} segs={[{t: 'molecule ≠ compound'}]} at={K3.so} size={36} color={INK} />
			<Underline x0={500} x1={890} y={518} at={K3.so + 14} color={PURE} />
			{/* the iron lump and its lattice view */}
			<Plate p={LUMP} x={UF.cx - lm.w / 2} y={640} h={lumpH} />
			<ViewFrame id="v1fe" cx={UF.cx} cy={UF.cy} r={UF.r} at={K3.every - 20} src={[UF.cx, 700]}>
				<Lattice cx={UF.cx} cy={UF.cy} cols={8} rows={8} sp={38} u={15} kindAt={() => 'Fe'} />
			</ViewFrame>
			<Sx x={UF.cx + lm.w / 2 + 20} y={800} text="iron" size={44} color={INK} hand at={-1000} />
			<Write x={UF.cx + UF.r + 16} y={300} text="all iron" at={K3.every + 6} size={42} color={PURE} />
			{/* formula strip and the sulfur sample */}
			<Rich x={480} y={630} segs={[{t: 'O_2', c: PURE}, {t: ', '}, {t: 'Fe', c: PURE}, {t: ', '}, {t: 'S_8', c: PURE}, {t: ': one symbol each'}]} size={40} at={K3.formula} weight={800} />
			<PenRing cx={480 + tw('O_2, Fe, ', 40) + tw('S_8', 40) / 2} cy={618} rx={34} ry={30} at={K3.symbol} color={PURE} seed={5} />
			<Plate p={SULFUR} x={490} y={670} h={100} at={K3.formula + 6} dy={-40} />
			<Sx x={500 + plateMap(SULFUR, 0, 0, 100).w + 14} y={736} text="sulfur, S₈" size={34} color={INK} hand at={K3.formula + 10} />
			{/* readouts */}
			<rect x={1410} y={600} width={414} height={214} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Sx x={1436} y={650} text="kinds of atom" size={36} color={INK} weight={800} at={-1000} />
			<Sx x={1436} y={718} text="oxygen" size={44} color={INK} weight={700} at={K3.both} />
			<Sx x={1790} y={720} text="1" size={52} color={PURE} anchor="end" weight={800} at={K3.both + 6} />
			<Sx x={1436} y={786} text="iron" size={44} color={INK} weight={700} at={K3.every} />
			<Sx x={1790} y={788} text="1" size={52} color={PURE} anchor="end" weight={800} at={K3.every + 6} />
			<SideTree y={210} show={{pure: -1000, mix: -1000, el: K3.els}} nodes={{el: [JAR, LUMP]}} hi="el" hiAt={K3.els} />
			{void K3.ox}{void K3.def}{void K3.iron}
		</SVG>
	);
};
export const Underline: React.FC<{x0: number; x1: number; y: number; at: number; out?: number; color?: string}> = ({x0, x1, y, at, out, color = PURE}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	const p = prog(f, at, 14);
	return <path d={`M${x0},${y} Q${(x0 + x1) / 2},${y + 6} ${x0 + (x1 - x0) * p},${y - 2}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" opacity={o} />;
};

// ---------- 4. compound ----------
const K4 = cues(sc('compound'), {def: 'A compound is', every: 'Every carbon', one: 'one carbon atom', two: 'two oxygen atoms', always: ['always', 1], two2: ['two', 3], water: 'Water is a compound', oxy: ['oxygen', 2], some: 'Some compounds', sep: 'separate molecules', ions: 'Charged particles', one1: 'one to one', marks: 'marks a compound', because: 'And because', reaction: 'reaction'});
const CO_RUN: BoxConfig = {seed: 9, frames: 1300, w: 180, h: 180, species: spec(8.5, K_B, {CO2: 1.4}), initial: [{species: 'CO2', count: 7}], speed: 1.2};
const W_KIND: Record<string, GKind> = {H2O: 'H2O'};
const H2O_RUN: BoxConfig = {seed: 17, frames: 1300, w: 180, h: 180, species: spec(9.5, W_KIND), initial: [{species: 'H2O', count: 11}], speed: 0.8};
const CX4 = [300, 730, 1150], CY4 = 330, R4 = 130;
export const SceneCompound: React.FC = () => {
	const f = useCurrentFrame();
	const rc = useRun(CO_RUN), rw = useRun(H2O_RUN);
	const sl = slotsOf(rc, 'CO2', 0);
	const gm = plateMap(GLASS, 0, 0, 300), jm = plateMap(JAR, 0, 0, 330), sm = plateMap(SALT, 0, 0, 120);
	const naCl = (i: number, j: number): GKind => ((i + j) % 2 ? 'Cl' : 'Na');
	const lockO = prog(f, K4.two2, 12);
	return (
		<SVG>
			<Heading text="Compound: elements bonded in a fixed ratio" at={0} />
			<Bench x0={130} x1={1340} y={902} />
			{/* jar B */}
			<Plate p={JAR} x={CX4[0] - jm.w / 2} y={570} h={330} />
			<Sx x={CX4[0]} y={790} text="B" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<ViewFrame id="v1co" cx={CX4[0]} cy={CY4} r={R4} src={[CX4[0], 680]}>
				<Particles run={rc} cx={CX4[0]} cy={CY4} kinds={K_B} u={8.5} />
			</ViewFrame>
			{[K4.every, K4.one, K4.two].map((at, i) => <TrackRing key={i} run={rc} slot={sl[i]} cx={CX4[0]} cy={CY4} rad={32} at={at} out={at + 44} color={PURE} />)}
			<Write x={CX4[0]} y={520} text="same in every particle" at={K4.two2} out={K4.because - 10} size={38} color={PURE} anchor="middle" />
			{/* glass of water */}
			<Plate p={GLASS} x={CX4[1] - gm.w / 2} y={600} h={300} />
			<ViewFrame id="v1w" cx={CX4[1]} cy={CY4} r={R4} at={K4.water} src={[CX4[1], 700]}>
				<Particles run={rw} cx={CX4[1]} cy={CY4} kinds={W_KIND} u={9.5} />
			</ViewFrame>
			{/* watch glass of salt */}
			<Plate p={SALT} x={CX4[2] - sm.w / 2} y={760} h={120} />
			<Sx x={CX4[2]} y={930} text="table salt" size={34} color={INK} anchor="middle" hand at={-1000} />
			<ViewFrame id="v1s" cx={CX4[2]} cy={CY4} r={R4} at={K4.some} src={[CX4[2], 805]}>
				<Lattice cx={CX4[2]} cy={CY4} cols={7} rows={7} sp={38} u={14} kindAt={naCl} vib={1.2} />
				<rect x={CX4[2] - 19 - 19} y={CY4 - 19 - 19} width={76} height={38} fill="none" stroke={PURE} strokeWidth={4} strokeDasharray="8 6" opacity={prog(f, K4.one1, 10)} />
			</ViewFrame>
			<Write x={CX4[2]} y={520} text="no separate molecules" at={K4.sep} out={K4.one1 - 6} size={38} color={INK} anchor="middle" />
			<Write x={CX4[2]} y={520} text="ions, still a fixed ratio" at={K4.one1 + 4} out={K4.because - 10} size={38} color={PURE} anchor="middle" />
			{/* ratio readouts (right column) */}
			<rect x={1410} y={612} width={414} height={276} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} opacity={prog(f, K4.every, 12)} />
			<Sx x={1436} y={660} text="fixed ratios" size={36} color={INK} weight={800} at={K4.every} />
			<Rich x={1436} y={734} segs={[{t: 'C : O = '}, {t: '1 : 2', c: PURE}]} size={52} at={K4.every} />
			<Rich x={1436} y={800} segs={[{t: 'H : O = '}, {t: '2 : 1', c: PURE}]} size={52} at={K4.oxy - 8} />
			<Rich x={1436} y={866} segs={[{t: 'Na^{+} : Cl^{−} = '}, {t: '1 : 1', c: PURE}]} size={52} at={K4.one1} />
			<PenRing cx={1617} cy={716} rx={200} ry={40} at={K4.two2} out={K4.water + 30} color={PURE} seed={4} />
			<Sx x={1800} y={734} text="✓" size={44} color={PURE} anchor="end" weight={800} at={K4.two2} opacity={lockO} />
			<SideTree y={210} show={{pure: -1000, mix: -1000, el: -1000, comp: K4.marks}} nodes={{comp: [JAR, GLASS, SALT]}} hi="comp" hiAt={K4.marks} />
			{/* only a reaction splits it */}
			<Chip x={110} y={474} segs={[{t: 'split into elements only by a chemical reaction'}]} at={K4.because} size={34} color={INK} />
			<Write x={470} y={572} text="bonded: needs a reaction" at={K4.because + 30} size={42} color={PURE} />
			{void K4.def}{void K4.always}{void K4.ions}{void K4.reaction}
		</SVG>
	);
};

// ---------- 5. mixture ----------
const K5 = cues(sc('mixture'), {def: 'A mixture is', keeps: 'keeps its own', here: 'Here are iron', bonded: "aren't bonded", magnet: 'magnet', out: 'out.', recipe: 'no fixed recipe', pinch: 'pinch', spoon: 'spoonful', still: "it's still a mixture", prop: 'Proportions', mixture: ['mixture', 3]});
/** Scattered grain positions (fixed, not touching) in a view of radius 190 centred at 0, 0. */
const FE_POS: [number, number][] = [[-120, -60], [-60, 40], [-140, 60], [-30, -110], [40, 120], [-80, 130], [20, -20], [-10, 60]];
const S_POS: [number, number][] = [[90, -90], [130, 10], [70, 60], [120, 110], [40, -140], [150, -50], [-100, -130], [0, 150], [-150, -10], [80, -30], [-40, -60], [100, 160], [-160, 110], [160, 70], [-60, -150], [-20, 110]];
const MV = {cx: 930, cy: 400, r: 190};
const FeGrain: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => <g opacity={o}>{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b], i) => <Glyph key={i} k="Fe" x={x + a * 9} y={y + b * 9} u={9} />)}</g>;
export const SceneMixture: React.FC = () => {
	const f = useCurrentFrame();
	const mixW = 560, mm = plateMap(FES, 0, 0, 0);
	void mm;
	const mixH = (mixW / FES.box[2]) * FES.box[3];
	const MX = 96, MY = 600;
	// magnet: bar about 210 px wide; rest bar bottom y 470, lowered 560, lifted 400
	const k = 210 / MAGNET.box[2], mh = MAGNET.box[3] * k;
	const barB = kf(f, [[K5.magnet - 4, 470], [K5.magnet + 20, 572], [K5.out, 572], [K5.out + 30, 470]]);
	const magTop = barB - mh, magX = 290 - (443 - MAGNET.box[0]) * k;
	const lift = prog(f, K5.out, 34);
	const res = prog(f, K5.out + 4, 24);
	const fresh = prog(f, K5.recipe, 20);
	const sAdd = f < K5.spoon ? 0 : f < K5.spoon + 22 ? 4 : 10;
	const nS = 6 + sAdd;
	const ironN = f < K5.out ? 8 : f < K5.recipe ? 0 : 8;
	return (
		<SVG>
			<Heading text="Mixture: each substance keeps its own properties" at={0} />
			<Bench x0={96} x1={700} y={MY + mixH + 2} />
			<Plate p={FES} x={MX} y={MY} h={mixH} o={1 - res} />
			<Plate p={FES_RES} x={MX} y={MY} h={mixH} o={res} />
			{/* clamp bar and string (coded), magnet plate hanging below it */}
			<defs><clipPath id="v1mag"><rect x={0} y={206} width={1920} height={900} /></clipPath></defs>
			<line x1={290} x2={290} y1={200} y2={magTop + 4} stroke="#8a8478" strokeWidth={3} />
			<g clipPath="url(#v1mag)"><Plate p={MAGNET} x={magX} y={magTop} h={mh} /></g>
			<rect x={170} y={186} width={260} height={20} rx={6} fill="#7d766b" stroke={INK} strokeWidth={3} />
			{/* filing specks lifted by the magnet */}
			{f >= K5.out ? Array.from({length: 26}, (_, i) => {
				const sx = 130 + ((i * 53) % 230), sy = 690 + ((i * 37) % 70);
				const tx = 200 + ((i * 29) % 180), ty = barB + 4 + ((i * 7) % 12);
				const u = smooth(clamp01((f - K5.out - (i % 8) * 2) / 22));
				return <rect key={i} x={lerp(sx, tx, u)} y={lerp(sy, ty, u)} width={7} height={2.6} rx={1} fill="#4a4a4a" transform={`rotate(${i * 37},${lerp(sx, tx, u)},${lerp(sy, ty, u)})`} />;
			}) : null}
			<Write x={440} y={300} text="iron still" at={K5.out - 20} size={42} color={MIX} />
			<Write x={440} y={346} text="acts like iron" at={K5.out - 10} size={42} color={MIX} />
			<PenArrow a={[520, 370]} b={[360, barB - 10]} at={K5.out} color={AMB} bend={-0.2} />
			{/* particle view */}
			<ViewFrame id="v1mx" cx={MV.cx} cy={MV.cy} r={MV.r} src={[380, 700]}>
				{FE_POS.map(([x, y], i) => {
					const leave = clamp01((f - K5.out - i * 3) / 30) * (1 - fresh);
					return <FeGrain key={'fe' + i} x={MV.cx + x + Math.sin(f * 0.4 + i) * 1.2} y={MV.cy + y - leave * 300} o={f < K5.recipe ? 1 - leave : fresh} />;
				})}
				{S_POS.slice(0, 16).map(([x, y], i) => {
					const on = i < 6 ? 1 : i < 10 ? prog(f, K5.spoon, 14) : prog(f, K5.spoon + 22, 14);
					const drop = (1 - smooth(on)) * 80;
					return on > 0.01 ? <Glyph key={'s' + i} k="S8" x={MV.cx + x} y={MV.cy + y - drop} u={8} rot={i * 33} o={on} /> : null;
				})}
			</ViewFrame>
			<Readout x={740} y={612} w={330} text={`iron grains ${ironN}`} size={42} color={INK} frame={INK} />
			<Readout x={740} y={692} w={380} text={`sulfur clusters ${nS}`} size={42} color={MIX} frame={AMB} />
			<ModelTag x={740} y={808} />
			<Chip x={1140} y={250} segs={[{t: '+ sulfur'}]} at={K5.recipe} size={40} color={MIX} />
			<Write x={1140} y={380} text="any amount" at={K5.spoon + 6} size={42} color={MIX} />
			<Sx x={740} y={890} text="not bonded to each other" size={38} color={INK} weight={700} at={K5.bonded} out={K5.out - 6} />
			<Sx x={740} y={890} text="each keeps its own properties" size={38} color={INK} weight={700} at={K5.out + 4} out={K5.recipe + 60} />
			<Sx x={740} y={890} text="still iron + sulfur" size={38} color={INK} weight={700} at={K5.still} />
			<Sx x={1124} y={226} text="a fresh mix" size={30} color={INK} hand at={K5.recipe} out={K5.spoon} />
			{/* tree and the definition */}
			<SideTree y={210} show={{pure: -1000, mix: -1000, el: -1000, comp: -1000}} hi="mix" hiAt={0} />
			<Write x={1410} y={700} text="variable composition:" at={K5.prop} size={40} color={MIX} />
			<Sx x={1410} y={746} text="the proportions can change" size={34} color={MIX} weight={700} at={K5.prop + 30} />
			{void K5.def}{void K5.keeps}{void K5.here}{void K5.pinch}{void K5.mixture}{void lift}
		</SVG>
	);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
