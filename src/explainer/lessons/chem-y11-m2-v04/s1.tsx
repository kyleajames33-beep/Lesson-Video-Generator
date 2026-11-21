// Y11 Chem M2 V04 scenes 1 to 5: V03's final frame ("MM = m ÷ n", m: weigh it, n: find it another way?) opening onto
// the trick (a gas volume can count); a gas volume counts particles (three particle-box runs of H2, O2 and CO2 with the
// same count, one warmed so it expands, one squeezed so it shrinks; the data-sheet molar volume card; the conditions
// strip); the element method (the magnesium equation, one Mg atom to one H2 molecule, the ribbon on the balance); the
// collection (the painted upturned burette with the gas space growing to the live level and three live readouts:
// volume, n so far and "MM if you stopped now"); and the calculation in the g01 layout.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V03Handoff, BAL17, EQ17, FL17, NEXT17, RIB17, TAGS17} from '../chem-y11-m2-v03/s3';
import {dur as v03dur} from '../chem-y11-m2-v03/common';
import {BUR0, COND, EL, EL_MM, EL_N, FLASK, GMOL, ILLUS, LMOL, RIBBON, VM, elV, fix, nOf, ph, pw, sc, sci} from './common';
import {
	AMB_S, AMB_T, Balance, Burette, Chip, Di, EL as ELC, Fade, Framed, GOLD_S, GOLD_T, GREEN_S, GasBox, INK, NAVY_T, PAPER, PenArrow, PenRing, Plate, Readout, Reveal, Rich,
	ROSE_S, ROSE_T, SLATE_S, SLATE_SOFT, SLATE_T, SVG, SmallBridge, Sx, TEAL_S, TEAL_T, TaskStrip, TickMark, Write, balGeo, burMap, clamp01, lerp, levelN, prog, richW, smooth, span, useRun, BUR_N,
} from './parts';
import type {Seg} from './parts';
import type {BoxConfig} from '../../sims/particle-box';

const MM_EQ: Seg[] = [{t: 'MM', c: TEAL_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'n', c: AMB_T}];
/** The "MM = m ÷ n" strip at the top centre and the conditions strip at the top right (from scene 2 on). */
export const TopStrips: React.FC<{cond?: string; condAt?: number; tick?: boolean; o?: number}> = ({cond, condAt = -1000, tick = false, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const cw = cond ? richW([{t: cond}], 32) + 50 : 0;
	return (
		<g opacity={o}>
			<rect x={900} y={26} width={300} height={74} rx={16} fill={PAPER} stroke={TEAL_S} strokeWidth={4} />
			<Rich x={1050} y={78} segs={MM_EQ} size={44} anchor="middle" />
			{cond ? (
				<g opacity={prog(f, condAt, 12)}>
					<rect x={1824 - cw - (tick ? 40 : 0)} y={26} width={cw + (tick ? 40 : 0)} height={74} rx={16} fill={SLATE_SOFT} stroke={SLATE_S} strokeWidth={4} />
					<Sx x={1824 - cw - (tick ? 40 : 0) + 25} y={74} text={cond} size={32} color={SLATE_T} weight={800} at={-1000} />
					{tick ? <TickMark x={1800} y={62} at={condAt + 8} s={1} /> : null}
				</g>
			) : null}
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {last: 'Last time', molar: 'Molar mass equals', easy: 'easy', us: 'it to us', hard: 'The hard part', cant: "You can't weigh", trick: "But there's a trick", gas: 'If the substance', counting: 'counting'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = balGeo(BAL17.x, BAL17.y, BAL17.h);
	const rh = ph(RIBBON, RIB17.w), fh = ph(FLASK, FL17.w);
	const eqW = richW(MM_EQ, EQ17.size), nW = richW([{t: 'n'}], EQ17.size);
	const nX = EQ17.x + eqW / 2 - nW / 2;
	const gasO = prog(f, K1.gas, 14);
	const cfg = GAS1;
	const run = useRun(cfg);
	return (
		<SVG>
			{/* V03's final frame, redrawn */}
			<Write x={96} y={150} text="When you don't know the formula" at={-1000} out={K1.trick - 6} size={60} color={INK} />
			<Write x={96} y={150} text="Measuring molar mass" at={K1.trick} size={60} color={INK} />
			<SmallBridge o={1 - prog(f, K1.molar, 14)} />
			<Fade at={-1000} out={K1.molar}>
				<rect x={96} y={190} width={1300} height={84} rx={22} fill={PAPER} stroke={NAVY_T} strokeWidth={5} />
				<Sx x={126} y={246} text={NEXT17} size={46} color={NAVY_T} weight={800} at={-1000} />
			</Fade>
			<Rich x={EQ17.x} y={EQ17.y} segs={MM_EQ} size={EQ17.size} anchor="middle" />
			<Write x={TAGS17.m[0]} y={TAGS17.m[1]} text="m: weigh it" at={-1000} size={52} color={NAVY_T} />
			<TickMark x={TAGS17.tick[0]} y={TAGS17.tick[1]} at={-1000} s={1.4} />
			<Balance g={g} text="? g" />
			<Write x={TAGS17.n[0]} y={TAGS17.n[1]} text="n: find it another way?" at={-1000} size={52} color={AMB_T} />
			<Sx x={TAGS17.q[0]} y={TAGS17.q[1]} text="?" size={TAGS17.q[2]} color={AMB_T} anchor="middle" weight={800} at={-1000} out={K1.gas - 4} />
			<PenRing cx={nX} cy={EQ17.y - 42} rx={nW / 2 + 28} ry={84} at={-1000} color={AMB_S} seed={4} />
			<Plate p={RIBBON} x={RIB17.x} y={RIB17.y} h={rh} />
			<Sx x={RIB17.x + RIB17.w / 2} y={RIB17.y + rh + 50} text="an element" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={RIB17.x + RIB17.w / 2} y={RIB17.y + rh + 104} text="MM = ?" size={48} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<Plate p={FLASK} x={FL17.cx - FL17.w / 2} y={FL17.y} h={fh} />
			<rect x={FL17.cx - FL17.w * 0.34} y={FL17.y + fh * 0.8} width={FL17.w * 0.68} height={fh * 0.12} rx={10} fill="#c9a2d8" opacity={0.6} />
			<Sx x={FL17.cx} y={FL17.y + fh + 44} text="an unknown liquid" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={FL17.cx} y={FL17.y + fh + 96} text="MM = ?" size={48} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			{/* m is easy; n is the hard part */}
			<PenRing cx={TAGS17.m[0] + 138} cy={TAGS17.m[1] - 18} rx={160} ry={46} at={K1.us - 8} color={NAVY_T} seed={2} />
			<Write x={TAGS17.m[0]} y={TAGS17.m[1] - 80} text="easy: a balance" at={K1.us} size={48} color={NAVY_T} />
			<PenRing cx={nX} cy={EQ17.y - 42} rx={nW / 2 + 46} ry={100} at={K1.hard + 4} color={ROSE_S} seed={7} />
			<Write x={TAGS17.n[0]} y={TAGS17.n[1] - 80} text="the hard part" at={K1.hard + 10} size={48} color={ROSE_T} />
			{/* a gas volume can count */}
			{gasO > 0.005 ? (
				<g opacity={gasO}>
					<GasBox run={run} x={1060} y={650} kind="O2" u={11} />
					<Sx x={1060} y={930} text="volume → moles?" size={38} color={SLATE_T} weight={800} at={K1.counting - 20} />
				</g>
			) : null}
			{/* V03's frame itself, frozen on top for the first frames */}
			{f < 34 ? <Fade at={-1000} out={4} d={26}><Freeze frame={v03dur('handoff') - 1}><V03Handoff /></Freeze></Fade> : null}
			{void K1.last}{void K1.easy}{void K1.cant}{void clamp01}
		</SVG>
	);
};
const GAS1: BoxConfig = {seed: 41, frames: 640, w: 330, h: 230, species: [{id: 'g', r: 20, mass: 2}], initial: [{species: 'g', count: 9}], speed: 3};

// ---------- 2. a gas volume counts particles ----------
const K2 = cues(sc('gas-counts'), {same: 'At the same temperature', equal: 'equal volumes', reason: "That's because", far: 'so far apart', are: 'they are', at: 'At twenty-five', litres: 'litres', warm: 'warm a gas', squeeze: 'Squeeze it', must: 'So you must', steady: 'steady'});
const BW = 420, BH = 330, BY = 360;
const BX = [96, 720, 1340];
const D2 = 867;
const GH: BoxConfig = {seed: 7, frames: D2, w: BW, h: BH, species: [{id: 'g', r: 16, mass: 2}], initial: [{species: 'g', count: 10}], speed: 3.4, temperature: [[0, 1], [K2.warm + 4, 1], [K2.warm + 34, 1.35]], volume: [[0, 1], [K2.warm + 4, 1], [K2.warm + 34, 1.3]]};
const GO: BoxConfig = {seed: 9, frames: D2, w: BW, h: BH, species: [{id: 'g', r: 24, mass: 32}], initial: [{species: 'g', count: 10}], speed: 3};
const GC: BoxConfig = {seed: 11, frames: D2, w: BW, h: BH, species: [{id: 'g', r: 30, mass: 44}], initial: [{species: 'g', count: 10}], speed: 3, volume: [[0, 1], [K2.squeeze + 4, 1], [K2.squeeze + 34, 0.7]]};
export const SceneGasCounts: React.FC = () => {
	const f = useCurrentFrame();
	const rh = useRun(GH), ro = useRun(GO), rc = useRun(GC);
	const warm = span(f, K2.warm + 4, K2.warm + 34);
	return (
		<SVG>
			<Write x={96} y={150} text="A gas volume counts particles" at={4} size={60} color={INK} />
			<TopStrips cond="record T and P; keep them steady" condAt={K2.must} />
			<Write x={960} y={262} text="same T and P: same volume, same number of particles" at={K2.equal} size={46} color={SLATE_T} anchor="middle" />
			<GasBox run={rh} x={BX[0]} y={BY} kind="H2" u={9} tint={warm} label="H_2" />
			<GasBox run={ro} x={BX[1]} y={BY} kind="O2" u={14} label="O_2" />
			<GasBox run={rc} x={BX[2]} y={BY} kind="CO2" u={13} label="CO_2" />
			<Sx x={960} y={746} text="(model: 10 particles in each box)" size={30} color={INK} anchor="middle" weight={700} at={K2.equal + 10} />
			<PenRing cx={BX[1] + BW / 2} cy={BY + BH / 2} rx={BW / 2 + 16} ry={BH / 2 + 16} at={K2.far} color={SLATE_S} seed={5} />
			<Write x={BX[1] + BW / 2} y={BY + BH + 104} text="mostly empty space" at={K2.far + 8} out={K2.litres - 20} size={46} color={SLATE_T} anchor="middle" />
			<Write x={BX[0]} y={BY + BH + 64} text="warmer: expands" at={K2.warm + 10} size={44} color={ROSE_T} />
			<Write x={BX[2]} y={BY + BH + 64} text="squeezed: shrinks" at={K2.squeeze + 10} size={44} color={ROSE_T} />
			<Fade at={K2.litres - 20}>
				<rect x={430} y={800} width={1060} height={130} rx={18} fill={SLATE_SOFT} stroke={SLATE_S} strokeWidth={5} />
				<Rich x={460} y={862} segs={[{t: 'molar volume: ', c: SLATE_T}, {t: `${VM} ${LMOL}`, c: SLATE_T}, {t: ` at ${COND.room.replace(', ', ' and ')}`, c: SLATE_T}]} size={42} />
				<Sx x={460} y={910} text="HSC data sheet   |   explained in a later video" size={28} color={INK} weight={700} at={-1000} />
			</Fade>
			<PenRing cx={1824 - (richW([{t: 'record T and P; keep them steady'}], 32) + 50) / 2} cy={63} rx={(richW([{t: 'record T and P; keep them steady'}], 32) + 50) / 2 + 16} ry={50} at={K2.must + 12} color={SLATE_S} seed={3} />
			<Write x={1580} y={160} text="measure both" at={K2.must + 16} size={46} color={SLATE_T} />
			{void K2.same}{void K2.reason}{void K2.are}{void K2.at}{void K2.steady}
		</SVG>
	);
};

// ---------- 3. the element method: magnesium makes hydrogen ----------
const K3 = cues(sc('element-setup'), {first: 'First, an element', makes: 'makes one', reacts: 'Magnesium reacts', eq: 'The equation says', molecule: 'hydrogen molecule', so: 'So the moles', ribbon: 'The ribbon is rubbed', emery: 'emery paper', weighed: 'then weighed', thousandth: 'thousandth', gram: 'gram'});
const EQ3: Seg[] = [{t: 'Mg(s)'}, {t: ' + 2HCl(aq) → MgCl_2(aq) + '}, {t: 'H_2(g)'}];
export const SceneElementSetup: React.FC = () => {
	const f = useCurrentFrame();
	const ex = 1180, ey = 290, es = 58;
	const w0 = richW(EQ3, es), x0 = ex - w0 / 2;
	const mgC = x0 + richW([EQ3[0]], es) / 2;
	const h2C = x0 + richW([EQ3[0], EQ3[1]], es) + richW([EQ3[2]], es) / 2;
	const g = balGeo(96, 470, 400);
	const rw = 300 * (400 / 440), rh = ph(RIBBON, rw);
	const shown = f >= K3.weighed + 10;
	return (
		<SVG>
			<Write x={96} y={150} text="Measuring molar mass: an element" at={4} size={60} color={INK} />
			<TopStrips cond={`room: ${COND.room}`} condAt={-1000} />
			<Write x={700} y={470} text="first, an element: magnesium" at={K3.first} out={K3.reacts - 6} size={64} color={INK} />
			<Write x={96} y={260} text="magnesium makes a gas" at={K3.makes} size={48} color={INK} />
			<Reveal at={K3.reacts} dur={40}><Rich x={x0} y={ey} segs={EQ3} size={es} /></Reveal>
			{[0, 1, 2].map(i => {
				const y = 390 + i * 76, at = K3.molecule + i * 10;
				return (
					<g key={i} opacity={prog(f, at, 10)}>
						<circle cx={mgC} cy={y} r={24} fill={ELC.Mg} stroke="rgba(35,28,20,0.7)" strokeWidth={3} />
						<path d={`M${mgC + 34},${y} L${h2C - 50},${y}`} stroke={INK} strokeWidth={4} strokeDasharray="12 9" />
						<path d={`M${h2C - 64},${y - 10} L${h2C - 50},${y} L${h2C - 64},${y + 10}`} fill="none" stroke={INK} strokeWidth={4} />
						<Di el="H" x={h2C} y={y} r={18} />
					</g>
				);
			})}
			<PenRing cx={mgC} cy={ey - 20} rx={90} ry={50} at={K3.molecule + 4} color={AMB_S} seed={3} />
			<PenRing cx={h2C} cy={ey - 20} rx={90} ry={50} at={K3.molecule + 10} color={AMB_S} seed={5} />
			<Write x={h2C + 120} y={480} text="1 : 1" at={K3.molecule + 16} size={60} color={AMB_T} />
			<Rich x={660} y={660} segs={[{t: '1 Mg atom → 1 H_2 molecule, so '}, {t: 'n(Mg) = n(H_2)', c: AMB_T}]} size={46} at={K3.so} />
			{/* the ribbon on the balance */}
			<Balance g={g} text={shown ? `${fix(EL.m, 3)} g` : '? g'} />
			<Plate p={RIBBON} x={g.pan[0] - rw / 2} y={g.pan[1] + 18 * (400 / 440) - rh} h={rh} />
			<Write x={96} y={360} text="cleaned with emery paper" at={K3.emery} size={44} color={INK} />
			<Write x={660} y={780} text="weighed to 0.001 g" at={K3.thousandth - 10} size={50} color={NAVY_T} />
			<PenArrow a={[650, 770]} b={[g.disp[0] + 140, g.disp[1] + 10]} at={K3.thousandth} color={NAVY_T} bend={-0.2} />
			<Sx x={660} y={840} text="method: RSC, Nuffield Practical Collection" size={28} color={INK} weight={700} at={K3.ribbon} />
			<Fade at={K3.ribbon}>
				<rect x={660} y={868} width={1164} height={56} rx={12} fill={PAPER} stroke={GREEN_S} strokeWidth={3} />
				<Sx x={684} y={906} text="safety: dilute acid; safety glasses; no flames near hydrogen" size={30} color={INK} weight={700} at={-1000} />
			</Fade>
			{void K3.first}{void K3.eq}{void K3.gram}{void pw}
		</SVG>
	);
};

// ---------- 4. collecting the hydrogen (the collection simulation) ----------
const K4 = cues(sc('collect-hydrogen'), {ribbon: 'The ribbon sits', acid: 'As the acid', down: 'liquid down', gone: 'When the ribbon', ml: 'millilitres', room: 'The room is'});
export const BUR4 = {x: 230, y: 180, h: 750};
/** The collected volume at frame f (scene 4): 0 until the acid reaches the ribbon, then up to 42.2 mL by "millilitres". */
const vAt4 = (f: number) => elV * smooth(clamp01((f - (K4.acid + 20)) / (K4.ml - 6 - (K4.acid + 20))));
export const CollectReadouts: React.FC<{v: number; x: number; y: number; w?: number; size?: number; rose?: boolean; blank?: boolean}> = ({v, x, y, w = 820, size = 54, rose = false, blank = false}) => {
	const n = nOf(v);
	const mm = v > 0.05 ? EL.m / n : NaN;
	const lh = size * 2.9;
	return (
		<g>
			<Sx x={x} y={y - 12} text="gas collected" size={32} color={SLATE_T} weight={800} at={-1000} />
			<Readout x={x} y={y} w={w} text={blank ? '?' : `${fix(v, 1)} mL`} color={SLATE_T} frame={SLATE_S} size={size} />
			<Sx x={x} y={y + lh - 12} text="n(H_2) so far" size={32} color={AMB_T} weight={800} at={-1000} />
			<Readout x={x} y={y + lh} w={w} text={blank ? '?' : v > 0.05 ? `${sci(n, 3)} mol` : '0 mol'} color={AMB_T} frame={AMB_S} size={size} />
			<Sx x={x} y={y + 2 * lh - 12} text="MM if you stopped now = 0.042 ÷ n" size={32} color={TEAL_T} weight={800} at={-1000} />
			<Readout x={x} y={y + 2 * lh} w={w} text={blank ? '?' : Number.isNaN(mm) ? '?' : `${fix(mm, 1)} ${GMOL}`} color={rose ? ROSE_T : TEAL_T} frame={rose ? ROSE_S : TEAL_S} size={size} />
		</g>
	);
};
export const SceneCollect: React.FC = () => {
	const f = useCurrentFrame();
	const v = vAt4(f);
	const m = burMap(BUR4.x, BUR4.y, BUR4.h);
	const yS = m.Y(levelN(0, elV)), yE = m.Y(levelN(elV, elV));
	const RX = 760;
	return (
		<SVG>
			<Write x={96} y={150} text="Collecting the hydrogen" at={4} size={60} color={INK} />
			<TopStrips cond={COND.room} condAt={K4.room} tick />
			<Burette id="v04b4" x={BUR4.x} y={BUR4.y} h={BUR4.h} v={v} vEnd={elV} bubbling={f > K4.acid + 20 && f < K4.ml} done={K4.gone} />
			<Sx x={m.X(BUR_N.cx) - 70} y={m.Y(BUR_N.mouth) + 8} text="Mg" size={30} color={INK} anchor="end" weight={800} at={-1000} out={K4.gone} />
			<Sx x={m.X(BUR_N.tubeR) + 26} y={yS + 10} text={`start ${fix(EL.start, 2)} mL`} size={32} color={SLATE_T} weight={800} at={K4.acid} />
			<Sx x={m.X(BUR_N.tubeR) + 26} y={yE + 10} text={`end ${fix(EL.end, 2)} mL`} size={32} color={SLATE_T} weight={800} at={K4.ml} />
			{v > 0.3 ? <g>
				<path d={`M${m.X(BUR_N.tubeL) - 16},${m.Y(BUR_N.top)} l-14,0 l0,${yE * 0 + (m.Y(levelN(v, elV)) - m.Y(BUR_N.top))} l14,0`} fill="none" stroke={SLATE_S} strokeWidth={4} />
				<Sx x={m.X(BUR_N.tubeL) - 36} y={(m.Y(BUR_N.top) + m.Y(levelN(v, elV))) / 2 + 12} text="H_2 gas" size={32} color={SLATE_T} anchor="end" weight={800} at={-1000} />
			</g> : null}
			<CollectReadouts v={v} x={RX} y={230} />
			<Write x={RX + 180} y={760} text="more gas, smaller MM" at={K4.down + 20} size={46} color={TEAL_T} />
			<Sx x={RX} y={840} text={`gas collected over water: ${fix(elV, 1)} mL`} size={36} color={SLATE_T} weight={800} at={K4.ml + 10} />
			<Sx x={RX} y={880} text="uncorrected (includes some water vapour)  |  levels matched before reading" size={28} color={INK} weight={700} at={K4.ml + 16} />
			<Sx x={RX} y={916} text={ILLUS} size={28} color={INK} weight={700} at={K4.ml + 16} />
			{void K4.ribbon}{void K4.room}{void lerp}
		</SVG>
	);
};

// ---------- 5. calculating the molar mass ----------
const K5 = cues(sc('element-calc'), {now: 'Now the calculation', change: 'Change forty-two', divide: 'divide by', thats: "That's one point", mg: 'amount of magnesium', mm: 'Molar mass equals', zero: 'Zero point zero four two', ans: 'seven grams per mole', accepted: 'The accepted value', close: "That's close", high: 'high'});
export const SceneElementCalc: React.FC = () => {
	const f = useCurrentFrame();
	const r1: Seg[] = [{t: 'n(H_2) ≈ '}, {t: fix(elV / 1000, 4), c: SLATE_T}, {t: ' ÷ '}, {t: `${VM}`, c: SLATE_T}, {t: ' = '}, {t: `${sci(EL_N, 3)} mol`, c: AMB_T}];
	const r2: Seg[] = [{t: 'n(Mg) = n(H_2) = '}, {t: `${sci(EL_N, 2)} mol`, c: AMB_T}];
	const r3: Seg[] = [{t: 'MM = m ÷ n = '}, {t: fix(EL.m, 3), c: NAVY_T}, {t: ' ÷ '}, {t: sci(EL_N, 3), c: AMB_T}];
	const gw = 1180;
	return (
		<SVG>
			<Write x={96} y={150} text="Calculating the molar mass" at={4} size={60} color={INK} />
			<TopStrips cond={COND.room} condAt={-1000} tick />
			<TaskStrip text="Find the molar mass of magnesium" />
			<rect x={96} y={270} width={gw} height={210} rx={16} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
			<Sx x={120} y={306} text="givens" size={28} color={NAVY_T} weight={800} at={-1000} />
			<Rich x={120} y={356} segs={[{t: `m(Mg) = ${fix(EL.m, 3)} g`, c: NAVY_T}]} size={38} />
			<Rich x={120} y={410} segs={[{t: 'V(gas over water, uncorrected) = ', c: SLATE_T}, {t: `${fix(elV, 1)} mL = ${fix(elV / 1000, 4)} L`, c: SLATE_T}]} size={38} />
			<Rich x={120} y={464} segs={[{t: `molar volume = ${VM} ${LMOL} (${COND.room})`, c: SLATE_T}]} size={38} />
			<PenRing cx={830} cy={398} rx={250} ry={36} at={K5.change} color={SLATE_S} seed={4} />
			<Write x={1100} y={540} text="mL → L first" at={K5.change + 8} size={46} color={SLATE_T} />
			<Burette id="v04b5" x={1560} y={250} h={560} v={elV} vEnd={elV} done={-1000} />
			<Sx x={1660} y={860} text={`${fix(elV, 1)} mL of gas`} size={32} color={SLATE_T} anchor="middle" weight={800} at={-1000} />
			<Reveal at={K5.divide - 30} dur={50}><Rich x={96} y={580} segs={r1} size={46} /></Reveal>
			<Sx x={96} y={620} text="keep the unrounded value" size={28} color={INK} weight={700} at={K5.thats} />
			<Reveal at={K5.mg - 20} dur={30}><Rich x={96} y={690} segs={r2} size={46} /></Reveal>
			<Reveal at={K5.mm} dur={60}><Rich x={96} y={790} segs={r3} size={46} /></Reveal>
			<Framed x={96 + richW(r3, 46) + 20} y={790} segs={[{t: `= ${fix(EL_MM, 1)} ${GMOL}`, c: TEAL_T}]} at={K5.ans} size={50} stroke={GREEN_S} />
			<Sx x={96} y={850} text="uncorrected gas: water vapour makes this read about 3% low" size={28} color={INK} weight={700} at={K5.ans + 10} />
			<Chip x={96} y={872} segs={[{t: `accepted: ${fix(EL.accepted, 2)} ${GMOL}`, c: GOLD_T}]} at={K5.accepted} size={36} color={GOLD_S} />
			<Write x={720} y={925} text="a little high: accurate means close to this" at={K5.close} size={42} color={GOLD_T} />
			{void K5.now}{void K5.high}{void pw}{void BUR0}
		</SVG>
	);
};
