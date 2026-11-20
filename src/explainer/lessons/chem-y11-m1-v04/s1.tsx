// Y11 Chem M1 V04 scenes 1 to 5: V03's final basin (catch the vapour), the simple rig with its vapour path, cooling
// water, drops and live counts; the detail board (two uniform-scale crops: the bulb at the side arm, the open
// receiver); the two-liquids board (both kinds of molecule leave the surface, a live tally drives the vapour gauge);
// the enrichment staircase read from one run.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import type {BoxConfig} from '../../sims/particle-box';
import {HB16} from '../chem-y11-m1-v03/s3';
import {BASIN, FRAC, SIMPLE, pctAt, sc} from './common';
import {
	AMB, Bracket, Chip, Crop, ETH, ETH_INK, Eth, Fade, Gauge, Glow, Glyph, Heading, INK, Inset, PURE, PenArrow, PenRing, Plate, Particles, RED, Readout, Rich, SVG, StrikeLine, Sx, Tile,
	TickMark, VIOL, VapourPath, ViewFrame, Wisps, Write, chipW, clamp01, cropPt, fracGeo, kf, plateMap, prog, simpleGeo, spec, useRun,
} from './parts';
import type {GKind} from './parts';

export const RS = {x: 96, y: 210, h: 717};
export const RF = {x: 96, y: 210, h: 717};
const IK: Record<string, GKind> = {H2O: 'H2O', Na: 'Na', Cl: 'Cl'};
/** Coded distillate in the simple rig's open receiver, from the bottom up to native level lvl (975 empty). */
export const RecvFill: React.FC<{g: ReturnType<typeof simpleGeo>; lvl: number; id: string; color?: string}> = ({g, lvl, id, color = 'rgba(170,205,235,0.6)'}) => {
	if (lvl >= 974) return null;
	const poly: [number, number][] = [[1150, 800], [1222, 800], [1288, 958], [1278, 978], [1094, 978], [1084, 958]];
	const pts = poly.map(([u, v]) => `${g.X(u)},${g.Y(v)}`).join(' ');
	return (
		<g>
			<defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
			<g clipPath={`url(#${id})`}><rect x={g.X(1060)} y={g.Y(lvl)} width={g.X(1320) - g.X(1060)} height={g.Y(990) - g.Y(lvl)} fill={color} /><line x1={g.X(1060)} x2={g.X(1320)} y1={g.Y(lvl)} y2={g.Y(lvl)} stroke="#6f9cc4" strokeWidth={2.5} /></g>
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {catch: 'catch that vapour', liquid: 'liquid', dist: 'called distillation', salt: 'salt water', two: 'two liquids', tall: 'tall column', so: 'So why', sep: 'separation'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const bk = HB16.w / BASIN.box[2], bh = BASIN.box[3] * bk;
	const BX = (u: number) => HB16.x + (u - BASIN.box[0]) * bk, BY = (v: number) => HB16.y + (v - BASIN.box[1]) * bk;
	const toRig = prog(f, K1.salt - 6, 24);
	const toFrac = prog(f, K1.tall - 6, 20) * (1 - prog(f, K1.so - 10, 20));
	const fg = fracGeo(RF.x, RF.y, RF.h);
	const c1 = chipW([{t: 'catch the water?'}], 46, false), c2 = chipW([{t: 'two liquids?'}], 46, false);
	return (
		<SVG>
			{/* V03's final frame */}
			<g opacity={1 - toRig}>
				<Plate p={BASIN} x={HB16.x} y={HB16.y} h={bh} />
				<Wisps x0={BX(420)} x1={BX(940)} y={BY(470)} n={7} />
				<Sx x={1120} y={360} text="water lost as steam" size={48} color={INK} weight={800} at={-1000} />
				<line x1={1110} y1={346} x2={BX(900)} y2={BY(230)} stroke={INK} strokeWidth={3} />
				<PenArrow a={[BX(560), BY(330)]} b={[BX(1020), BY(150)]} at={K1.catch} color={PURE} bend={-0.4} width={5} />
			</g>
			<Chip x={960} y={110} segs={[{t: 'Next: why does a fractionating column separate liquids better?'}]} at={-1000} out={14} size={38} color={PURE} anchor="middle" />
			<Write x={1120} y={270} text="catch it, cool it" at={K1.catch + 6} size={42} color={PURE} />
			<Chip x={1120} y={500} segs={[{t: 'catch the water?'}]} at={-1000} size={46} color={PURE} />
			<TickMark x={1120 + c1 + 40} y={536} at={K1.liquid} s={1.2} />
			<Chip x={1120} y={620} segs={[{t: 'two liquids?'}]} at={-1000} size={46} color={PURE} />
			<PenRing cx={1120 + c2 / 2} cy={656} rx={c2 / 2 + 30} ry={56} at={K1.two} color={ETH} seed={4} />
			{/* the simple rig, and a look at the column */}
			<Plate p={SIMPLE} x={RS.x} y={RS.y} h={RS.h} o={toRig * (1 - toFrac)} />
			<Plate p={FRAC} x={RF.x} y={RF.y} h={RF.h} o={toFrac} />
			{toFrac > 0.5 ? <PenRing cx={fg.colTop[0]} cy={(fg.colTop[1] + fg.colBot[1]) / 2} rx={60} ry={130} at={K1.tall} color={ETH} seed={2} /> : null}
			<Write x={fg.colTop[0] + 90} y={fg.colTop[1] + 120} text="the column" at={K1.tall + 8} out={K1.so - 10} size={42} color={ETH_INK} />
			<Sx x={1120} y={800} text="distillation: catch the vapour," size={34} color={INK} weight={800} at={K1.dist} />
			<Sx x={1120} y={844} text="cool it back to liquid" size={34} color={INK} weight={800} at={K1.dist} />
			<Heading text="Distillation: why does a column separate liquids better?" at={K1.sep - 12} />
			{void clamp01}
		</SVG>
	);
};

// ---------- 2. simple distillation of salt water ----------
const K2 = cues(sc('simple-distillation'), {heat: 'Heat salt', flask: 'flask', escape: 'escape', dont: "ions don't", temps: 'temperatures', cond: 'the condenser', cold: 'The cold glass', conds: 'condenses back', distillate: 'distillate', drips: 'drips into', receiver: 'receiver', stays: 'The salt stays'});
const S2_RUN: BoxConfig = {seed: 91, frames: 980, w: 340, h: 170, species: spec(8, IK), initial: [{species: 'H2O', count: 14}, {species: 'Na', count: 4}, {species: 'Cl', count: 4}], speed: 1.1};
export const SceneSimple: React.FC = () => {
	const f = useCurrentFrame();
	const g = simpleGeo(RS.x, RS.y, RS.h);
	const run = useRun(S2_RUN);
	const V = {cx: 1480, cy: 330, r: 170};
	const top = V.cy - 10;
	const esc: React.ReactNode[] = [];
	for (let k = 0; k < 50; k++) {
		const s = K2.escape + k * 18;
		if (f < s) continue;
		const a = f - s, y = top - a * 2.2;
		if (y < V.cy - V.r - 20) continue;
		esc.push(<Glyph key={k} k="H2O" x={V.cx - 120 + ((k * 71) % 240)} y={y} u={8} rot={k * 40 + a} />);
	}
	const drops = Math.max(0, Math.floor((f - K2.conds) / 14));
	const lvl = 975 - Math.min(60, drops * 1.6);
	const lab = (x: number, y: number, t: string, at: number, anchor: 'start' | 'end' = 'start') => <Sx x={x} y={y} text={t} size={34} color={INK} anchor={anchor} weight={800} at={at} />;
	return (
		<SVG>
			<Heading text="Simple distillation" at={0} />
			<Plate p={SIMPLE} x={RS.x} y={RS.y} h={RS.h} />
			<Glow x={g.light[0]} y={g.light[1]} on={f >= K2.heat ? 1 : 0} />
			<RecvFill g={g} lvl={lvl} id="v4rf2" />
			<VapourPath pts={[[g.flask[0], g.surf[1] - 30], g.neck, g.bulb, g.arm, g.cEnd, g.tip]} from={K2.escape} n={10} speed={0.0045} cond={0.7} />
			{f >= K2.conds - 20 ? <g>{Array.from({length: 4}, (_, k) => { const a = ((f + k * 11) % 44) / 44; return <ellipse key={k} cx={g.tip[0]} cy={g.tip[1] + 8 + a * (g.Y(lvl) - g.tip[1] - 12)} rx={5} ry={7} fill="rgba(110,160,210,0.9)" stroke="#4a7aa5" strokeWidth={1.5} />; })}</g> : null}
			{/* labels stay */}
			{lab(g.X(560), g.Y(840), 'flask', K2.flask)}
			<line x1={g.X(552)} y1={g.Y(828)} x2={g.X(440)} y2={g.Y(760)} stroke={INK} strokeWidth={3} opacity={prog(f, K2.flask, 10)} />
			{lab(g.X(700), g.Y(470), 'condenser', K2.cond)}
			{lab(g.X(1100), g.Y(880), 'receiver', K2.receiver, 'end')}
			{/* cooling water */}
			<Fade at={K2.cond + 30}>
				<PenArrow a={[g.wIn[0] + 40, g.wIn[1] + 70]} b={[g.wIn[0] + 4, g.wIn[1] + 6]} at={K2.cond + 30} color={PURE} bend={0.2} width={5} />
				<Sx x={g.wIn[0] + 50} y={g.wIn[1] + 110} text="cold water in" size={30} color={PURE} weight={800} at={-1000} />
				<PenArrow a={[g.wOut[0] - 4, g.wOut[1] - 4]} b={[g.wOut[0] - 50, g.wOut[1] - 70]} at={K2.cond + 40} color={PURE} bend={0.2} width={5} />
				<Sx x={g.wOut[0] - 60} y={g.wOut[1] - 84} text="out" size={30} color={PURE} anchor="end" weight={800} at={-1000} />
			</Fade>
			<Write x={560} y={300} text="cooled: vapour → liquid" at={K2.conds} size={42} color={PURE} />
			{/* the flask surface, close up */}
			<ViewFrame id="v4s2" cx={V.cx} cy={V.cy} r={V.r} src={[g.surf[0] + 30, g.surf[1]]}>
				<rect x={V.cx - V.r} y={top} width={2 * V.r} height={V.r * 2} fill="#e6eff6" />
				<line x1={V.cx - V.r} x2={V.cx + V.r} y1={top} y2={top} stroke="#7aa0bd" strokeWidth={3} />
				<Particles run={run} cx={V.cx} cy={top + 90} kinds={IK} u={8} />
				{esc}
			</ViewFrame>
			<PenRing cx={V.cx} cy={top + 90} rx={120} ry={60} at={K2.dont} out={K2.temps + 30} color={VIOL} seed={6} />
			<Write x={1250} y={556} text="salt stays" at={K2.dont + 6} size={42} color={VIOL} />
			<Rich x={1250} y={640} segs={[{t: 'non-volatile: ', c: VIOL}, {t: "doesn't"}]} size={44} at={K2.temps} />
			<Rich x={1250} y={692} segs={[{t: 'evaporate at these temperatures'}]} size={34} weight={700} at={K2.temps + 6} />
			<Readout x={1250} y={730} w={560} text={`drops collected: ${drops}`} size={44} color={PURE} frame={PURE} at={K2.conds} />
			<Readout x={1250} y={830} w={560} text="salt in the flask: all of it" size={44} color={VIOL} frame={VIOL} at={K2.dont} />
			<Rich x={1110} y={942} segs={[{t: 'distillate: ', c: PURE}, {t: 'pure water'}]} size={44} at={K2.distillate} />
			<Sx x={1824} y={942} text="(model)" size={30} color={INK} anchor="end" weight={700} at={K2.conds} />
			{void K2.cold}{void K2.drips}{void K2.stays}{void plateMap}
		</SVG>
	);
};

// ---------- 3. two details ----------
const K3 = cues(sc('thermometer-and-safety'), {two: 'Two details', bulb: 'thermometer bulb', side: 'side arm', leave: 'about to leave', pure: 'pure water', deg: 'degrees', never: 'never be sealed', open: 'open to the air', closed: 'closed system', burst: 'burst'});
const C1 = {u: 360, v: 520, k: 2.4, x: 96, y: 210, w: 820, h: 580};
const C2 = {u: 1160, v: 830, k: 2.0, x: 1004, y: 210, w: 820, h: 580};
export const SceneThermo: React.FC = () => {
	const bulb = cropPt(C1, 350, 507), mouth = cropPt(C2, 1186, 745);
	return (
		<SVG>
			<Heading text="Two details" at={0} />
			<Crop p={SIMPLE} {...C1} id="v4c1" />
			<Crop p={SIMPLE} {...C2} id="v4c2" />
			<PenRing cx={bulb[0]} cy={bulb[1]} rx={70} ry={50} at={K3.side} color={INK} seed={3} />
			<Write x={bulb[0] + 110} y={bulb[1] + 130} text="reads the vapour" at={K3.leave} size={42} color={INK} />
			<Sx x={C1.x + C1.w - 300} y={C1.y + 50} text="vapour temperature" size={30} color={INK} weight={800} at={K3.pure} />
			<Readout x={C1.x + C1.w - 300} y={C1.y + 64} w={270} text="100 °C" size={52} color={INK} frame={INK} anchor="middle" at={K3.deg - 30} />
			<Sx x={C1.x} y={840} text="bulb level with the side arm" size={34} color={INK} weight={800} at={K3.bulb} />
			<PenArrow a={[mouth[0] + 160, mouth[1] - 230]} b={[mouth[0] + 10, mouth[1] - 20]} at={K3.open} color="#287347" bend={0.25} width={5} />
			<Write x={mouth[0] + 170} y={mouth[1] - 240} text="open" at={K3.open + 6} size={44} color="#287347" />
			<Sx x={C2.x} y={840} text="receiver open to the air" size={34} color={INK} weight={800} at={K3.never} />
			<Inset x={1004} y={862} w={820} h={90} title="sealed: pressure builds, glass can burst" at={K3.closed - 6} />
			<StrikeA at={K3.burst} />
			<Write x={96} y={930} text="never heat a sealed system" at={K3.burst + 4} size={44} color={RED} />
			{void K3.two}
		</SVG>
	);
};
const StrikeA: React.FC<{at: number}> = ({at}) => <StrikeLine x1={1020} y1={936} x2={1800} y2={880} at={at} />;

// ---------- 4. the surprise: both liquids evaporate ----------
const K4 = cues(sc('surprise-two-liquids'), {now: 'Now try', eth: 'Ethanol boils', water: 'water boils', expect: 'You might expect', behind: 'behind', not: "That's not what", seventeen: 'seventeen', deg: ['degrees', 2], both: 'both kinds', em: 'Ethanol molecules', away: 'away', richer: 'is richer', sixty: 'sixty two', still: "that's still", wat: ['water', 3]});
const CF = {u: 345, v: 740, k: 1.5, x: 96, y: 220, w: 440, h: 560};
const EW: BoxConfig = {seed: 101, frames: 980, w: 360, h: 150, species: [{id: 'W', r: 12}, {id: 'E', r: 16}], initial: [{species: 'W', count: 12}, {species: 'E', count: 5}], speed: 1};
const PAT = [1, 0, 1, 1, 0, 1, 0, 1];
export const SceneTwoLiquids: React.FC = () => {
	const f = useCurrentFrame();
	const run = useRun(EW);
	const V = {cx: 900, cy: 760, r: 180};
	const top = V.cy - 20;
	const esc: React.ReactNode[] = [];
	let nE = 0, nW = 0;
	for (let k = 0; k < 40; k++) {
		const s = K4.both - 20 + k * 18;
		if (f < s) continue;
		const isE = PAT[k % 8] === 1;
		if (isE) nE++; else nW++;
		const a = f - s, y = top - a * 2.4;
		if (y < V.cy - V.r - 30) continue;
		const x = V.cx - 130 + ((k * 67) % 260);
		esc.push(isE ? <Eth key={k} x={x} y={y} u={8} rot={k * 40 + a} /> : <Glyph key={k} k="H2O" x={x} y={y} u={8} rot={k * 40 + a} />);
	}
	const share = nE + nW ? (100 * nE) / (nE + nW) : 0;
	const parts: React.ReactNode[] = [];
	const sf = Math.min(run.frames - 1, f);
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const x = V.cx - 180 + run.x[sf * run.slots + i], y = top + run.y[sf * run.slots + i];
		parts.push(s === 1 ? <Eth key={i} x={x} y={y} u={8} rot={(i * 47 + sf) % 360} /> : <Glyph key={i} k="H2O" x={x} y={y} u={8} rot={(i * 47 + sf) % 360} />);
	}
	return (
		<SVG>
			<Heading text="Two liquids: ethanol and water" at={0} />
			<Crop p={SIMPLE} {...CF} id="v4cf" />
			<Sx x={CF.x} y={CF.y + CF.h + 40} text="ethanol + water" size={34} color={INK} weight={800} at={-1000} />
			<Sx x={CF.x} y={CF.y + CF.h + 82} text="17% ethanol by mass" size={34} color={ETH_INK} weight={800} at={K4.seventeen} />
			<Sx x={CF.x + 20} y={CF.y + 44} text="boiling at" size={30} color={INK} weight={800} at={K4.deg - 20} />
			<Readout x={CF.x + 20} y={CF.y + 58} w={300} text="about 89 °C" size={52} color={INK} frame={INK} anchor="middle" at={K4.deg - 20} />
			<Chip x={600} y={206} segs={[{t: 'ethanol: boils at 78 °C'}]} at={K4.eth} size={44} color={ETH_INK} />
			<Chip x={600} y={290} segs={[{t: 'water: boils at 100 °C'}]} at={K4.water} size={44} color={PURE} />
			<Inset x={600} y={380} w={700} h={130} title="you might expect" at={K4.expect} out={K4.both - 30}>
				<Rich x={622} y={480} segs={[{t: '78 °C: ethanol off, water left'}]} size={40} weight={800} />
				<StrikeLine x1={612} y1={496} x2={1290} y2={430} at={K4.not} />
				<Write x={620} y={555} text="both evaporate" at={K4.not + 8} size={42} color={RED} />
			</Inset>
			<ViewFrame id="v4s4" cx={V.cx} cy={V.cy} r={V.r} src={[cropPt(CF, 345, 745)[0] + 60, cropPt(CF, 345, 745)[1]]}>
				<rect x={V.cx - V.r} y={top} width={2 * V.r} height={V.r * 2} fill="#f3ead6" />
				<line x1={V.cx - V.r} x2={V.cx + V.r} y1={top} y2={top} stroke="#7aa0bd" strokeWidth={3} />
				{parts}
				{esc}
			</ViewFrame>
			<PenArrow a={[V.cx + 60, top - 10]} b={[V.cx + 120, V.cy - V.r - 10]} at={K4.away} color={ETH} bend={0.2} />
			<Write x={600} y={556} text="ethanol escapes more easily" at={K4.away + 6} size={42} color={ETH_INK} />
			{/* live tally and the vapour gauge */}
			<Sx x={1340} y={330} text="left the surface (model)" size={30} color={INK} weight={800} at={K4.both - 20} />
			<Readout x={1340} y={346} w={460} text={`ethanol: ${nE}`} size={44} color={ETH_INK} frame={ETH} at={K4.both - 20} />
			<Readout x={1340} y={432} w={460} text={`water: ${nW}`} size={44} color={PURE} frame={PURE} at={K4.both - 20} />
			<Gauge x={1340} y={590} w={460} v={share} at={K4.both - 20} label="vapour: % ethanol" />
			<Readout x={1340} y={720} w={480} text="about 62% ethanol" size={52} color={ETH_INK} frame={ETH} anchor="middle" at={K4.sixty} />
			<Bracket a={[1340 + 460 * 0.62, 580]} b={[1800, 580]} at={K4.still} color={PURE} depth={16} />
			<Write x={1340} y={880} text="38% water: richer, not pure" at={K4.still + 6} size={42} color={PURE} />
			{void K4.now}{void K4.behind}{void K4.em}{void K4.richer}{void K4.wat}{void Chip}{void AMB}
		</SVG>
	);
};

// ---------- 5. one cycle isn't enough ----------
const K5 = cues(sc('staircase'), {again: 'do it again', cond: 'Condense that', boil: 'boil the new', eighty: 'eighty percent', again2: ['again', 2], six: 'eighty six', nine: 'eighty nine', each: 'Each cycle', enr: 'enriches', vol: 'more volatile', notice: 'Notice', smaller: 'smaller', simple: 'Simple distillation', one: 'only one cycle', many: 'many'});
export const TX = (i: number) => 150 + i * 360, TY = (i: number) => 790 - i * 150;
export const SceneStairs: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K5.boil, 1], [K5.eighty, 2], [K5.six - 6, 3], [K5.nine - 4, 4]]);
	const cur = f >= K5.nine - 10 ? 3 : f >= K5.six - 10 ? 2 : f >= K5.eighty - 20 ? 1 : 0;
	const ats = [-1000, K5.eighty - 20, K5.six - 10, K5.nine - 10];
	const sm = plateMap(SIMPLE, 0, 0, 230);
	return (
		<SVG>
			<Heading text="Do it again" at={0} />
			<Plate p={SIMPLE} x={96} y={200} h={230} />
			<Sx x={96 + sm.w / 2} y={470} text="one simple distillation" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={96 + sm.w / 2} y={506} text="= one cycle" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1300} y={200} text="vapour: % ethanol" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1300} y={214} w={260} text={`${Math.round(pctAt(c))}%`} size={52} color={ETH_INK} frame={ETH} anchor="middle" />
			<Sx x={1584} y={200} text="cycles" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1584} y={214} w={200} text={`${Math.floor(c + 0.02)}`} size={52} color={INK} frame={INK} anchor="middle" />
			{[0, 1, 2, 3].map(i => <Tile key={i} x={TX(i)} y={TY(i)} a={[17, 62, 80, 86][i]} b={[62, 80, 86, 89][i]} at={ats[i]} cur={cur === i} />)}
			{[0, 1, 2].map(i => <PenArrow key={'a' + i} a={[TX(i) + 250, TY(i) - 6]} b={[TX(i + 1) - 10, TY(i + 1) + 38]} at={ats[i + 1] - 6} color={ETH} bend={-0.25} width={4} />)}
			{[0, 1, 2, 3].map(i => <Sx key={'r' + i} x={TX(i) + 150} y={TY(i) + 130} text={`+${[45, 18, 6, 3][i]}`} size={38} color={ETH_INK} anchor="middle" weight={800} at={K5.notice + 10 + i * 10} />)}
			<Write x={TX(2) + 40} y={TY(0) + 170} text="smaller gains" at={K5.smaller} size={42} color={ETH_INK} />
			<Write x={96} y={630} text="richer each time" at={K5.enr} size={42} color={ETH_INK} />
			<Sx x={1300} y={884} text="enriches: raises the share of" size={34} color={INK} weight={800} at={K5.vol - 20} />
			<Sx x={1300} y={926} text="the more volatile liquid" size={34} color={INK} weight={800} at={K5.vol} />
			<PenRing cx={TX(0) + 150} cy={TY(0) + 38} rx={190} ry={70} at={K5.one} color={PURE} seed={2} />
			<Write x={TX(0)} y={TY(0) - 50} text="simple: one step" at={K5.one + 6} size={42} color={PURE} />
			<Chip x={TX(3) - 20} y={TY(3) + 130} segs={[{t: 'two liquids: many steps'}]} at={K5.many - 6} size={40} color={ETH_INK} />
			<Sx x={1824} y={800} text="ideal steps, % ethanol by mass, rounded" size={30} color={INK} anchor="end" weight={700} at={-1000} />
			{void K5.again}{void K5.cond}{void K5.again2}{void K5.each}{void K5.simple}{void Fade}{void Bracket}{void Gauge}
		</SVG>
	);
};
