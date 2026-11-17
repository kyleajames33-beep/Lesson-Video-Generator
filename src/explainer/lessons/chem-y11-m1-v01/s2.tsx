// Y11 Chem M1 V01 scenes 6 to 10: jar D (O2 and CO2 together) for the 3 s prediction and its answer (the live run
// injects three O2 and the readouts move from 6 : 24 to 6 : 30), homogeneous against heterogeneous (salt water's
// ions spread evenly; two scoops of iron and sulfur differ), the uniform-is-not-pure trap with the alloy coins, and
// the full classification tree with the "Just one?" memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {COINS, FES, GLASS, JAR, LUMP, SALT, hold, sc} from './common';
import {
	AMB, Bench, Chip, Countdown, Fade, Framed, GREEN, Glyph, Heading, INK, Lattice, MIX, ModelTag, Particles, PenArrow, PenRing, Plate, PURE, RED, Readout, Rich, SVG, Sx,
	StrikeLine, TrackRing, ViewFrame, Write, Bracket, clamp01, countOf, kf, plateMap, prog, simF, slotXY, slotsOf, smooth, spec, tw, useRun,
} from './parts';
import type {GKind} from './parts';
import {K_B, Underline} from './s1';

const F6 = sc('prediction').durationInFrames;
// ---------- jar D board (scenes 6 and 7) ----------
const K_D: Record<string, GKind> = {O2: 'O2', CO2: 'CO2'};
const K7 = cues(sc('prediction-answer'), {mix: "It's a mixture", list: 'not the list', two: 'two different kinds', inside: 'Inside each carbon', but: 'But the carbon', mol: 'molecules.', add: 'add more oxygen', change: 'can change', comp: 'In a compound', never: 'never can'});
const RUN_D: BoxConfig = {seed: 41, frames: F6 + 780, w: 285, h: 285, species: spec(10, K_D, {CO2: 1.4}), initial: [{species: 'O2', count: 6}, {species: 'CO2', count: 6}], inject: [{at: F6 + K7.add, species: 'O2', count: 3}], speed: 1.2};
const DV = {cx: 1010, cy: 430, r: 210};
const DJ = {x: 640, y: 480, h: 420};
const DBoard: React.FC<{f0: number}> = ({f0}) => {
	const run = useRun(RUN_D);
	const jw = plateMap(JAR, 0, 0, DJ.h).w, sw = plateMap(JAR, 0, 0, 300).w;
	return (
		<>
			<Bench x0={100} x1={800} y={902} />
			{[170, 390].map((x, i) => (
				<g key={i}>
					<Plate p={JAR} x={x - sw / 2} y={600} h={300} />
					<Sx x={x} y={790} text={'AB'[i]} size={40} color={INK} anchor="middle" weight={800} at={-1000} />
					<Sx x={x} y={575} text={i ? 'CO₂ only' : 'O₂ only'} size={36} color={INK} anchor="middle" hand at={-1000} />
				</g>
			))}
			<Plate p={JAR} x={DJ.x - jw / 2} y={DJ.y} h={DJ.h} />
			<Sx x={DJ.x} y={DJ.y + 290} text="D" size={48} color={INK} anchor="middle" weight={800} at={-1000} />
			<ViewFrame id="v1d" cx={DV.cx} cy={DV.cy} r={DV.r} src={[DJ.x + 30, DJ.y + 170]}>
				<Particles run={run} cx={DV.cx} cy={DV.cy} kinds={K_D} u={10} f0={f0} />
			</ViewFrame>
		</>
	);
};
const OPTS = ['element', 'compound', 'mixture'];
const Opts: React.FC<{answer?: number}> = ({answer}) => {
	const f = useCurrentFrame();
	return (
		<>
			<Sx x={1410} y={262} text="Jar D: element," size={44} color={INK} weight={800} at={-1000} />
			<Sx x={1410} y={314} text="compound or mixture?" size={44} color={INK} weight={800} at={-1000} />
			{OPTS.map((t, i) => (answer !== undefined && i === 2 && f >= answer
				? <Framed key={t} x={1410} y={432 + i * 84} segs={[{t: 'mixture', c: GREEN}]} at={answer} size={48} />
				: <Chip key={t} x={1410} y={370 + i * 84} segs={[{t}]} at={-1000} size={44} color={INK} o={answer !== undefined && f >= answer ? 0.35 : 1} />))}
		</>
	);
};

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {jar: 'This jar holds', only: 'only carbon', think: 'Have a think'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<DBoard f0={0} />
			<Sx x={820} y={710} text="atoms present: C, O" size={38} color={INK} weight={800} at={K6.only} />
			<Opts />
			<Countdown start={h.startFrame} end={h.endFrame} x={1620} y={720} r={64} ringFrom={K6.think} />
			{void K6.jar}
		</SVG>
	);
};

// ---------- 7. prediction answer ----------
export const ScenePredAnswer: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(RUN_D);
	const F0 = F6;
	const sf0 = simF(run, F0 + K7.two);
	const o2 = slotsOf(run, 'O2', sf0)[0], co = slotsOf(run, 'CO2', sf0)[0], co2 = slotsOf(run, 'CO2', sf0)[1];
	const sf = F0 + f;
	const nO2 = countOf(run, 'O2', sf), nC = countOf(run, 'CO2', sf);
	const oAtoms = 2 * nC + 2 * nO2;
	// the gap line between one CO2 and its nearest O2 (from the run)
	const gapF = F0 + K7.but;
	const near = (() => {
		const a = slotXY(run, co2, gapF, DV.cx, DV.cy);
		let best = slotsOf(run, 'O2', simF(run, gapF))[0], bd = 1e9;
		for (const s of slotsOf(run, 'O2', simF(run, gapF))) { const b = slotXY(run, s, gapF, DV.cx, DV.cy); const d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (d < bd) { bd = d; best = s; } }
		return best;
	})();
	const A = slotXY(run, co2, sf, DV.cx, DV.cy), B = slotXY(run, near, sf, DV.cx, DV.cy);
	const gapO = prog(f, K7.but + 10, 10) * (1 - prog(f, K7.add, 10));
	const chipX = 820;
	return (
		<SVG>
			<Heading text="Quick prediction" at={-1000} />
			<DBoard f0={F0} />
			<Opts answer={K7.mix} />
			{/* the atom list is not enough */}
			<Sx x={820} y={710} text="atoms present: C, O" size={38} color={INK} weight={800} at={-1000} out={K7.inside} />
			<Chip x={chipX} y={734} segs={[{t: 'compound: it only has C and O'}]} at={K7.list} out={K7.inside} size={36} color={RED} strike={K7.list + 22} />
			<Write x={chipX + 10} y={870} text="the atom list isn't enough" at={K7.list + 30} out={K7.inside} size={42} color={RED} />
			{/* two kinds of particle */}
			<TrackRing run={run} slot={o2} cx={DV.cx} cy={DV.cy} f0={F0} rad={30} at={K7.two} out={K7.inside} color={MIX} label="kind 1: O₂" />
			<TrackRing run={run} slot={co} cx={DV.cx} cy={DV.cy} f0={F0} rad={36} at={K7.two + 10} out={K7.inside} color={MIX} label="kind 2: CO₂" ldy={1} />
			<PenRing cx={DV.cx} cy={DV.cy} rx={DV.r + 22} ry={DV.r + 18} at={K7.two + 20} out={K7.inside + 10} color={AMB} seed={3} />
			<Write x={1410} y={700} text="2 kinds = mixture" at={K7.two + 24} out={K7.add - 20} size={44} color={MIX} />
			{/* bonded inside, not to each other */}
			<TrackRing run={run} slot={co2} cx={DV.cx} cy={DV.cy} f0={F0} rad={36} at={K7.inside} out={K7.add} color={PURE} label="bonded inside, 1 : 2" ldy={1} />
			{gapO > 0.01 ? <g opacity={gapO}><line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke={RED} strokeWidth={4} strokeDasharray="7 7" /></g> : null}
			<Sx x={820} y={730} text="not bonded to each other" size={38} color={INK} weight={700} at={K7.but + 10} out={K7.add} />
			{/* add more oxygen: three O2 injected into the run */}
			<Chip x={1235} y={232} segs={[{t: '+ O_2'}]} at={K7.add - 6} size={40} color={PURE} />
			<g opacity={prog(f, K7.add - 4, 12)}>
				<Readout x={820} y={700} w={340} text={`O_2 particles ${nO2}`} size={44} color={PURE} frame={PURE} />
				<rect x={1410} y={662} width={414} height={150} rx={14} fill="#fffdf8" stroke={MIX} strokeWidth={4} />
				<Sx x={1434} y={706} text="overall C : O" size={34} color={INK} weight={800} at={-1000} />
				<Sx x={1434} y={784} text={`${nC} : ${oAtoms}`} size={56} color={MIX} weight={800} at={-1000} />
				<Sx x={1170} y={810} text="read from this run" size={28} color={INK} anchor="end" weight={700} at={-1000} />
			</g>
			<PenRing cx={1530} cy={765} rx={110} ry={42} at={K7.change} color={AMB} seed={5} />
			<Write x={1410} y={900} text="ratio moved" at={K7.change + 6} size={42} color={MIX} />
			{/* jar B's view returns: fixed 1 : 2 */}
			<SmallB at={K7.comp} />
			{void K7.mol}{void K7.never}{void smooth}{void clamp01}{void kf}
		</SVG>
	);
};
const SB_RUN: BoxConfig = {seed: 52, frames: 800, w: 120, h: 120, species: spec(6, K_B, {CO2: 1.4}), initial: [{species: 'CO2', count: 5}], speed: 1.1};
const SmallB: React.FC<{at: number}> = ({at}) => {
	const run = useRun(SB_RUN);
	return (
		<Fade at={at}>
			<ViewFrame id="v1sb" cx={390} cy={330} r={92} at={at} src={[390, 680]}>
				<Particles run={run} cx={390} cy={330} kinds={K_B} u={6} />
			</ViewFrame>
			<Sx x={390} y={470} text="B: always 1 : 2" size={36} color={PURE} anchor="middle" weight={800} at={at + 8} />
		</Fade>
	);
};

// ---------- 8. homogeneous and heterogeneous ----------
const K8 = cues(sc('homogeneous-heterogeneous'), {stir: 'Stir salt', breaks: 'breaks up', spread: 'spread evenly', mol: 'molecules.', every: 'Every drop', homo: 'homogeneous mixture', air: 'Air is one', fes: 'iron and sulfur', patches: 'grey patches', scoop: 'a scoop from one side', other: 'other.', het: "That's a heterogeneous", region: 'region.'});
const SW_KIND: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};
const SW_RUN: BoxConfig = {seed: 61, frames: 1080, w: 258, h: 258, species: spec(7.5, SW_KIND), initial: [{species: 'H2O', count: 22}, {species: 'Na', count: 4}, {species: 'Cl', count: 4}], speed: 0.9};
const SV = {cx: 570, cy: 420, r: 190};
/** Mini iron and sulfur scoop view. */
const Scoop: React.FC<{cx: number; cy: number; fe: number; s: number; seed: number}> = ({cx, cy, fe, s, seed}) => {
	const pos: [number, number][] = [];
	for (let i = 0; pos.length < fe + s && i < 400; i++) {
		const a = (i * 2.399 + seed) % (Math.PI * 2), d = 18 + ((i * 37 + seed * 11) % 64);
		const p: [number, number] = [cx + Math.cos(a) * d, cy + Math.sin(a) * d];
		if (pos.every(q => Math.hypot(q[0] - p[0], q[1] - p[1]) > 34)) pos.push(p);
	}
	return <>{pos.map((p, i) => (i < fe ? <g key={i}>{[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b], k) => <Glyph key={k} k="Fe" x={p[0] + a * 6} y={p[1] + b * 6} u={6} />)}</g> : <Glyph key={i} k="S8" x={p[0]} y={p[1]} u={5.5} rot={i * 40} />))}</>;
};
export const SceneHomoHet: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(SW_RUN);
	const gm = plateMap(GLASS, 0, 0, 420);
	const fm = plateMap(FES, 0, 0, 260);
	const FX = 1290 - fm.w, FY = 630;
	const sf = simF(run, f);
	// ions: from a lattice corner to their run positions between "breaks up" and "spread evenly"
	const spreadU = smooth(prog(f, K8.breaks, K8.spread - K8.breaks + 20));
	const ions: React.ReactNode[] = [];
	let n = 0;
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const id = run.config.species[s].id;
		if (id === 'H2O') continue;
		const lx = SV.cx - 110 + (n % 3) * 24, ly = SV.cy - 110 + Math.floor(n / 3) * 24;
		const [x, y] = slotXY(run, i, sf, SV.cx, SV.cy);
		ions.push(<Glyph key={i} k={id as GKind} x={lx + (x - lx) * spreadU} y={ly + (y - ly) * spreadU} u={7.5} />);
		n++;
	}
	const cryst = (i: number) => {
		const t = clamp01((f - 20 - i * 6) / 40);
		const sh = 1 - clamp01((f - 70 - i * 6) / 50);
		return {x: 205 + (i % 4) * 14, y: lerp(430, 640, t), s: 9 * sh};
	};
	const stir = f > 110 && f < 300 ? Math.sin((f - 110) * 0.12) * 50 : 0;
	const saltOut = K8.fes - 10;
	return (
		<SVG>
			<Heading text="Homogeneous or heterogeneous?" at={0} />
			<Bench x0={96} x1={420} y={902} />
			<Plate p={GLASS} x={230 - gm.w / 2} y={480} h={420} />
			{/* coded spoon and salt crystals, then a coded rod stirring by itself */}
			<g opacity={1 - prog(f, 90, 14)}>
				<path d="M150,400 Q190,445 260,420 Q300,404 240,384 Q190,372 150,400 Z" fill="#fffdf8" stroke={INK} strokeWidth={4} />
				<line x1={150} y1={400} x2={60} y2={330} stroke={INK} strokeWidth={8} strokeLinecap="round" />
			</g>
			{Array.from({length: 12}, (_, i) => { const c = cryst(i); return c.s > 0.3 && f > 18 ? <rect key={i} x={c.x - c.s / 2} y={c.y - c.s / 2} width={c.s} height={c.s} fill="#ffffff" stroke="#8a8478" strokeWidth={1.5} transform={`rotate(${i * 23},${c.x},${c.y})`} /> : null; })}
			<g opacity={prog(f, 100, 10) * (1 - prog(f, 300, 14))}><rect x={222 + stir} y={440} width={14} height={420} rx={7} fill="rgba(255,255,255,0.5)" stroke={INK} strokeWidth={3} transform={`rotate(${stir * 0.12},${229 + stir},860)`} /></g>
			<ViewFrame id="v1sw" cx={SV.cx} cy={SV.cy} r={SV.r} at={K8.stir} src={[260, 720]}>
				<Particles run={run} cx={SV.cx} cy={SV.cy} kinds={{H2O: 'H2O', Na: 'Na', Cl: 'Cl'}} u={7.5} dim={id => (id === 'H2O' ? 1 : 0)} />
				{ions}
				{[310, 420, 530].map((y, i) => <circle key={i} cx={SV.cx} cy={y} r={48} fill="none" stroke={MIX} strokeWidth={4} strokeDasharray="9 7" opacity={prog(f, K8.every + i * 8, 10) * (1 - prog(f, saltOut, 12))} />)}
			</ViewFrame>
			{[310, 420, 530].map((y, i) => <Rich key={i} x={790} y={y + 12} segs={[{t: 'Na^{+} 2, Cl^{−} 2, H_2O 12'}]} size={34} at={K8.every + 10 + i * 8} out={saltOut} weight={700} />)}
			<Bracket a={[1220, 280]} b={[1220, 560]} at={K8.every + 40} out={saltOut} color={AMB} depth={-20} />
			<Write x={790} y={640} text="any drop: same mix" at={K8.every + 40} out={saltOut} size={42} color={MIX} />
			<ModelTag x={790} y={690} out={saltOut} at={K8.every + 40} />
			<Sx x={230} y={960 - 20} text="salt water" size={34} color={INK} anchor="middle" hand at={K8.homo} />
			{/* iron and sulfur arrives: two scoops differ */}
			<Plate p={FES} x={FX} y={FY} h={260} at={K8.fes - 6} dy={-40} />
			<Fade at={K8.scoop}>
				<circle cx={FX + fm.w * 0.2} cy={FY + 135} r={40} fill="none" stroke={MIX} strokeWidth={4} strokeDasharray="9 7" />
				<circle cx={FX + fm.w * 0.8} cy={FY + 135} r={40} fill="none" stroke={MIX} strokeWidth={4} strokeDasharray="9 7" />
				<line x1={FX + fm.w * 0.2} y1={FY + 95} x2={890} y2={515} stroke="rgba(60,45,20,0.4)" strokeWidth={2} strokeDasharray="7 6" />
				<line x1={FX + fm.w * 0.8} y1={FY + 95} x2={1200} y2={515} stroke="rgba(60,45,20,0.4)" strokeWidth={2} strokeDasharray="7 6" />
			</Fade>
			<ViewFrame id="v1sc1" cx={890} cy={400} r={105} at={K8.scoop + 10}><Scoop cx={890} cy={400} fe={9} s={2} seed={1} /></ViewFrame>
			<ViewFrame id="v1sc2" cx={1200} cy={400} r={105} at={K8.other - 10}><Scoop cx={1200} cy={400} fe={2} s={8} seed={3} /></ViewFrame>
			<Sx x={890} y={280} text="scoop 1" size={34} color={INK} anchor="middle" hand at={K8.scoop + 10} />
			<Sx x={1200} y={280} text="scoop 2" size={34} color={INK} anchor="middle" hand at={K8.other - 10} />
			<Sx x={890} y={548} text="iron 9, sulfur 2" size={34} color={INK} anchor="middle" weight={700} at={K8.scoop + 20} />
			<Sx x={1200} y={548} text="iron 2, sulfur 8" size={34} color={INK} anchor="middle" weight={700} at={K8.other} />
			<ModelTag x={1045} y={592} at={K8.other} anchor="middle" />
			<Sx x={1045} y={420} text="≠" size={72} color={MIX} anchor="middle" weight={800} at={K8.other + 6} />
			<PenRing cx={1045} cy={398} rx={36} ry={40} at={K8.other + 14} color={AMB} seed={4} />
			<Write x={1045} y={236} text="scoops differ" at={K8.other + 14} size={42} color={MIX} anchor="middle" />
			<SideTreeFull f={f} homoAt={K8.homo} hetAt={K8.het} />
			{void K8.mol}{void K8.air}{void K8.patches}{void K8.region}
		</SVG>
	);
};
import {SideTree} from './parts';
const SideTreeFull: React.FC<{f: number; homoAt: number; hetAt: number}> = ({homoAt, hetAt}) => <SideTree y={210} show={{pure: -1000, mix: -1000, el: -1000, comp: -1000, homo: homoAt, het: hetAt}} nodes={{homo: [GLASS, JAR], het: [FES]}} hi="mix" hiAt={0} />;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 9. the trap: uniform doesn't mean pure ----------
const K9 = cues(sc('uniform-not-pure'), {trap: 'classic exam trap', pure: 'Pure water and salt', uni: 'But uniform', pure2: ['pure', 2], salt: 'The salt water is still', saltier: 'saltier', alloys: 'Alloys are', coins: 'Gold-coloured', copper: 'mostly copper', nickel: 'nickel.', spread: 'Those atoms', maker: 'chosen by the maker', so: 'So an alloy', not: 'not a compound'});
const PW_RUN: BoxConfig = {seed: 71, frames: 620, w: 156, h: 156, species: spec(6.5, SW_KIND), initial: [{species: 'H2O', count: 12}], speed: 0.8};
const SS_RUN: BoxConfig = {seed: 73, frames: 620, w: 156, h: 156, species: spec(6.5, SW_KIND), initial: [{species: 'H2O', count: 11}, {species: 'Na', count: 2}, {species: 'Cl', count: 2}], inject: [{at: K9.saltier + 4, species: 'Na', count: 2}, {at: K9.saltier + 4, species: 'Cl', count: 2}], speed: 0.8};
const ALLOY: Record<string, GKind> = {'1-1': 'Al', '5-2': 'Al', '2-5': 'Al', '6-6': 'Al', '3-3': 'Ni'};
export const SceneUniform: React.FC = () => {
	const f = useCurrentFrame();
	const rp = useRun(PW_RUN), rs = useRun(SS_RUN);
	const gm = plateMap(GLASS, 0, 0, 400), cm = plateMap(COINS, 0, 0, 320);
	const part1 = 1 - prog(f, K9.alloys - 10, 16);
	const ionsS = countOf(rs, 'Na', f) + countOf(rs, 'Cl', f);
	const GX = [260, 680];
	return (
		<SVG>
			<Heading text="The classic trap: uniform isn't pure" at={0} />
			<g opacity={part1}>
				<Bench x0={96} x1={760} y={902} />
				{GX.map((x, i) => (
					<g key={i}>
						<Plate p={GLASS} x={x - gm.w / 2} y={500} h={400} />
						<Sx x={x} y={760} text={i ? 'salt water' : 'pure water'} size={38} color={INK} anchor="middle" hand at={-1000} />
					</g>
				))}
				<ViewFrame id="v1pw" cx={GX[0]} cy={300} r={128} at={K9.pure} src={[GX[0], 620]}><Particles run={rp} cx={GX[0]} cy={300} kinds={SW_KIND} u={6.5} /></ViewFrame>
				<ViewFrame id="v1ss" cx={GX[1]} cy={300} r={128} at={K9.pure + 8} src={[GX[1], 620]}><Particles run={rs} cx={GX[1]} cy={300} kinds={SW_KIND} u={6.5} /></ViewFrame>
				<Readout x={GX[0] - 90} y={436} w={180} text="ions 0" size={40} color={PURE} frame={PURE} at={K9.pure + 20} anchor="middle" />
				<Readout x={GX[1] - 90} y={436} w={180} text={`ions ${ionsS}`} size={40} color={MIX} frame={AMB} at={K9.pure + 20} anchor="middle" />
				<ModelTag x={790} y={480} at={K9.pure + 20} />
				<Chip x={830} y={250} segs={[{t: '+ salt'}]} at={K9.saltier - 8} size={40} color={MIX} />
				<Chip x={1000} y={330} segs={[{t: 'look the same'}]} at={-1000} out={K9.pure2} size={52} color={INK} />
				<Chip x={1000} y={330} segs={[{t: 'uniform ≠ pure'}]} at={K9.pure2} size={64} color={MIX} />
				<Underline x0={1020} x1={1480} y={446} at={K9.pure2 + 10} color={AMB} />
				<Write x={1000} y={560} text="uniform = evenly mixed, that's all" at={K9.uni + 100} size={44} color={MIX} />
				<Write x={1000} y={700} text="still two substances:" at={K9.salt} size={44} color={INK} />
				<Write x={1000} y={760} text="saltier or less salty" at={K9.saltier} size={44} color={MIX} />
			</g>
			{/* the alloy board */}
			<Fade at={K9.alloys}>
				<Bench x0={96} x1={680} y={872} />
				<Plate p={COINS} x={110} y={550} h={320} />
				<Sx x={110 + cm.w / 2} y={520} text="gold-coloured $1 and $2 coins" size={36} color={INK} anchor="middle" hand at={-1000} />
			</Fade>
			<ViewFrame id="v1al" cx={930} cy={470} r={210} at={K9.copper} src={[400, 700]}>
				<Lattice cx={930} cy={470} cols={9} rows={9} sp={44} u={19} kindAt={(i, j) => ALLOY[`${i}-${j}`] ?? 'Cu'} vib={1.1} />
			</ViewFrame>
			<Fade at={K9.nickel - 10}>
				<Sx x={1180} y={300} text="Australian $1 and $2 coins:" size={32} color={INK} weight={800} at={-1000} />
				<Sx x={1180} y={344} text="about 92% copper, 6% aluminium," size={32} color={INK} weight={600} at={-1000} />
				<Sx x={1180} y={384} text="2% nickel" size={32} color={INK} weight={600} at={-1000} />
				{[['Cu', 'copper'], ['Al', 'aluminium'], ['Ni', 'nickel']].map(([k, t], i) => (
					<g key={k}><Glyph k={k as GKind} x={1196 + i * 200} y={430} u={14} /><Sx x={1218 + i * 200} y={442} text={t} size={30} color={INK} weight={600} at={-1000} /></g>
				))}
			</Fade>
			<Fade at={K9.maker}>
				<Sx x={1180} y={510} text="brass: copper + zinc, proportions vary" size={30} color={INK} weight={600} at={-1000} />
				<Sx x={1180} y={548} text="steel: iron + carbon" size={30} color={INK} weight={600} at={-1000} />
			</Fade>
			<Write x={1180} y={640} text="the recipe can change" at={K9.maker + 6} size={44} color={MIX} />
			<PenArrow a={[1170, 625]} b={[1090, 560]} at={K9.maker + 14} color={AMB} bend={0.2} />
			<Chip x={1180} y={690} segs={[{t: 'alloy = compound'}]} at={K9.so} size={44} color={RED} strike={K9.not} />
			<Write x={1180} y={850} text="no fixed formula" at={K9.not + 6} size={42} color={RED} />
			<Sx x={1180} y={905} text="homogeneous mixture" size={40} color={MIX} weight={800} at={K9.not + 10} />
			{void K9.trap}{void K9.coins}{void K9.spread}{void StrikeLine}
		</SVG>
	);
};

// ---------- 10. memory aid ----------
const K10 = cues(sc('memory-aid'), {ask: 'Ask the same', q1: 'Is there just one substance', mix: 'mixture.', q2: 'is there just one element', comp: 'compound.', q3: 'is it just one region', het: 'heterogeneous'});
type BN = {x: number; y: number; t: string; sub?: string; c: string; th?: PDefLite[]};
type PDefLite = typeof JAR;
const NODES: Record<string, BN> = {
	root: {x: 960, y: 395, t: 'matter', c: INK},
	pure: {x: 520, y: 545, t: 'pure substance', c: PURE},
	mix: {x: 1400, y: 545, t: 'mixture', c: MIX},
	el: {x: 290, y: 705, t: 'element', sub: 'one kind of atom', c: PURE, th: [JAR, LUMP]},
	comp: {x: 750, y: 705, t: 'compound', sub: 'bonded, fixed ratio', c: PURE, th: [JAR, SALT]},
	homo: {x: 1170, y: 705, t: 'homogeneous', sub: 'same throughout', c: MIX, th: [GLASS, JAR]},
	het: {x: 1630, y: 705, t: 'heterogeneous', sub: 'differs by region', c: MIX, th: [FES]},
};
const EDGES: [string, string, string][] = [['root', 'pure', 'yes'], ['root', 'mix', 'no'], ['pure', 'el', 'yes'], ['pure', 'comp', 'no'], ['mix', 'homo', 'yes'], ['mix', 'het', 'no']];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const forks: [string, string, number, number, string][] = [['root', 'just one substance?', K10.q1, K10.mix, AMB], ['pure', 'just one element?', K10.q2, K10.comp, PURE], ['mix', 'just one region?', K10.q3, K10.het, AMB]];
	return (
		<SVG>
			<rect x={640} y={176} width={640} height={128} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
			<Sx x={660} y={208} text="memory aid" size={28} color={INK} hand at={-1000} />
			<Sx x={960} y={276} text="Just one?" size={66} color={INK} anchor="middle" hand at={-1000} />
			{EDGES.map(([a, b, yn]) => {
				const A = NODES[a], B = NODES[b];
				const lit = forks.find(k => k[0] === a);
				const on = lit ? prog(f, lit[3], 12) : 0;
				const mx = A.x + (B.x - A.x) * 0.8, my = A.y + 30 + (B.y - 80 - A.y - 30) * 0.8;
				return (
					<g key={a + b}>
						<path d={`M${A.x},${A.y + 30} L${B.x},${B.y - 50}`} stroke={B.c} strokeWidth={3 + 3 * on} fill="none" opacity={0.6 + 0.4 * on} />
						<Sx x={mx + (B.x < A.x ? -24 : 24)} y={my + 10} text={yn} size={30} color={B.c} anchor={B.x < A.x ? 'end' : 'start'} weight={800} at={lit ? lit[2] : -1000} />
					</g>
				);
			})}
			{Object.entries(NODES).map(([k, n]) => (
				<g key={k}>
					<Sx x={n.x} y={n.y} text={n.t} size={k === 'root' ? 42 : 40} color={n.c} anchor="middle" weight={800} at={-1000} />
					{n.sub ? <Sx x={n.x} y={n.y + 40} text={n.sub} size={30} color={n.c} anchor="middle" weight={600} at={-1000} /> : null}
					{n.th ? (() => {
						const hs = n.th.map(p => (p === FES || p === SALT ? 80 : 120));
						const ws = n.th.map((p, i) => plateMap(p, 0, 0, hs[i]).w);
						const tot = ws.reduce((a, b) => a + b, 0) + (ws.length - 1) * 16;
						let x = n.x - tot / 2;
						return n.th.map((p, i) => { const el = <Plate key={i} p={p} x={x} y={n.y + 190 - hs[i]} h={hs[i]} />; x += ws[i] + 16; return el; });
					})() : null}
				</g>
			))}
			{forks.map(([k, q, at, lit, c], i) => {
				const n = NODES[k];
				const y = n.y + 66;
				return (
					<g key={i}>
						<rect x={n.x - tw(q, 38, true) / 2 - 18} y={y - 42} width={tw(q, 38, true) + 36} height={56} rx={14} fill="#fbf7ef" opacity={prog(f, at, 10)} />
						<Write x={n.x} y={y} text={q} at={at} size={38} color={INK} anchor="middle" />
						<PenRing cx={n.x} cy={y - 12} rx={tw(q, 38, true) / 2 + 26} ry={34} at={lit} color={c} seed={i + 2} />
					</g>
				);
			})}
			{void Framed}{void GREEN}{void Rich}{void slotsOf}{void TrackRing}{void kf}
		</SVG>
	);
};
