// Y11 Chem M2 V01 scenes 1 to 6: m1-v27's final frame (drawn here) giving way to copper carbonate heated beside the
// balance (2.47 g falls to 1.59 g); the system boundary with carbon dioxide crossing out; the magnesium prediction;
// magnesium gaining 0.16 g of oxygen from the air; the closed system on the balance (a precipitate, no gas, the same
// reading, the law); atoms rearranged in hydrogen burning (six atoms tracked, live readouts steady).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BK_CLEAR, BK_EMPTY, BK_PPT, CRU_BL, CRU_G, CRU_GL, CRU_N, ILLUS, M, MGO, RIBBON, g2, hold, pw, sc} from './common';
import type {PDef} from './common';
import {
	Balance, Boundary, Chip, Countdown, Fade, Framed, GREEN_C, Heading, INK, Mol, NAVY_C, PAPER, PenArrow, PenRing, Plate, RED_C, ROSE_C, SLATE_C, StrikeLine, Sx, TEAL_C,
	TickMark, Wisps, Write, balGeo, bowlBox, clamp01, cruPt, lerp, prog, smooth,
} from './parts';
import type {AtomP} from './parts';
import {G27, V27Final} from './opening';

const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number; out?: number; o?: number}> = ({p, cx, bottom, h, at = -1000, out, o = 1}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} out={out} o={o} />;
const span = (f: number, a: number, b: number) => smooth(clamp01((f - a) / Math.max(1, b - a)));
/** A display value that ticks from a to b between frames t0 and t1 (two decimals). */
const tick = (f: number, a: number, b: number, t0: number, t1: number) => lerp(a, b, clamp01((f - t0) / Math.max(1, t1 - t0)));
const HEAD = 'Conservation of mass';
/** The crucible stage: plate at cx with height h, bottom at y. */
const CR = {cx: 1010, bottom: 870, h: 440};
const crX = (p: PDef) => CR.cx - pw(p, CR.h) / 2, crY = CR.bottom - CR.h;
/** Before and after readouts at the right. */
const RX = 1280;
const ReadPanel: React.FC<{before: string; after: string; afterAt: number; chip: string; chipAt: number; chipColor: string; o?: number}> = ({before, after, afterAt, chip, chipAt, chipColor, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	return (
		<g opacity={o}>
			<Sx x={RX} y={330} text="before heating" size={34} color={INK} weight={800} at={-1000} />
			<rect x={RX} y={350} width={300} height={76} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={RX + 24} y={406} text={before} size={52} color={INK} weight={800} at={-1000} />
			<Sx x={RX} y={480} text="after heating" size={34} color={INK} weight={800} at={-1000} />
			<rect x={RX} y={500} width={300} height={76} rx={14} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={RX + 24} y={556} text={f >= afterAt ? after : '?'} size={52} color={INK} weight={800} at={-1000} />
			<Sx x={RX + 320} y={406} text={ILLUS} size={26} color={INK} weight={700} at={-1000} />
			<Chip x={RX} y={610} segs={[{t: chip}]} at={chipAt} size={48} color={chipColor} />
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {dissolving: 'Dissolving is', so: 'So what happens', here: "Here's green", heat: 'Heat it', black: 'turns black', falls: 'reading falls', by: 'by zero point', destroyed: 'get destroyed'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const lift = span(f, K1.so, K1.so + 26);
	const disp = f < K1.so + 26 ? `${(M.water + M.salt).toFixed(1)} g` : f < K1.here ? g2(0) : g2(tick(f, M.cuco3, M.cuo, K1.falls, K1.falls + 20));
	const plate = f < K1.heat ? CRU_G : f < K1.black ? CRU_GL : CRU_BL;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<g transform={`translate(0,${-lift * 60})`} opacity={1}>
				<V27Final display={disp} outs={{heading: K1.so - 10, chip: K1.so - 10, tag: K1.so - 10, rows: K1.so, lens: K1.so, beaker: K1.so + 4, tared: K1.so}} />
			</g>
			<Heading text={HEAD} at={K1.so + 4} />
			<Sx x={G27.disp[0]} y={G27.Y(1028) - 60 + 44} text="crucible tared" size={34} color={INK} anchor="middle" weight={800} at={K1.so + 30} />
			{/* the crucible beside the balance */}
			<Fade at={K1.here}>
				<Plate p={plate} x={crX(plate)} y={crY} h={CR.h} />
				{f >= K1.heat && f < K1.black + 16 ? <Plate p={CRU_GL} x={crX(CRU_GL)} y={crY} h={CR.h} o={1 - prog(f, K1.black, 16)} /> : null}
			</Fade>
			<Sx x={CR.cx} y={CR.bottom - CR.h - 26} text="copper carbonate" size={38} color={INK} anchor="middle" weight={800} at={K1.here} out={K1.black} />
			<Sx x={CR.cx} y={CR.bottom - CR.h - 26} text="black after heating" size={38} color={INK} anchor="middle" weight={800} at={K1.black + 8} />
			<Chip x={900} y={330} segs={[{t: "a chemical reaction: what happens to mass?"}]} at={K1.so} out={K1.here} size={44} color={INK} />
			<PenArrow a={[CR.cx - 150, 640]} b={[G27.disp[0] + 170, G27.disp[1] - 10]} at={K1.here + 10} color={INK} bend={0.2} />
			<Sx x={430} y={300} text="reading: crucible + contents" size={34} color={INK} anchor="middle" weight={800} at={K1.here + 10} />
			<ReadPanel before={g2(M.cuco3)} after={g2(M.cuo)} afterAt={K1.falls + 20} chip={`−${M.co2.toFixed(2)} g`} chipAt={K1.by} chipColor={ROSE_C} o={prog(f, K1.here, 12)} />
			<Sx x={1720} y={700} text="?" size={120} color={RED_C} anchor="middle" weight={800} at={K1.destroyed} />
			<Write x={RX} y={800} text="mass destroyed?" at={K1.destroyed + 4} size={46} color={RED_C} />
			{void K1.dissolving}{void CRU_N}
		</svg>
	);
};

// ---------- 2. where it went: the system boundary ----------
const K2 = cues(sc('boundary'), {no: 'No.', breaks: 'Heating breaks', black: 'black copper oxide', carbon: 'carbon dioxide gas', stays: 'copper oxide stays', drifts: 'gas drifts', draw: 'Draw a line', system: 'the system', crossed: 'crossed that line', has: 'It has a mass', exactly: 'exactly the mass'});
export const SceneBoundary: React.FC = () => {
	const f = useCurrentFrame();
	const x = crX(CRU_BL);
	const bb = bowlBox(CRU_BL, x, crY, CR.h);
	const pw0 = cruPt(CRU_BL, x, crY, CR.h, CRU_N.powder[0], CRU_N.powder[1]);
	const cross: [number, number] = [pw0[0] + 20, bb.y];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Balance g={balGeo(96, 340, 470)} text={g2(M.cuo)} />
			<Sx x={balGeo(96, 340, 470).disp[0]} y={870} text="crucible + contents" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Plate p={CRU_BL} x={x} y={crY} h={CR.h} />
			<Sx x={96} y={236} text="copper carbonate → copper oxide + carbon dioxide" size={44} color={INK} weight={800} at={K2.breaks} />
			<Wisps a={[pw0[0], pw0[1] - 10]} b={[pw0[0] + 60, pw0[1] - 220]} at={K2.carbon - 10} n={4} spread={40} />
			<Sx x={pw0[0] - 30} y={pw0[1] - 170} text="carbon dioxide gas" size={38} color={SLATE_C} anchor="end" weight={800} at={K2.carbon} />
			<Sx x={CR.cx} y={CR.bottom + 50} text="copper oxide stays" size={34} color={INK} anchor="middle" weight={800} at={K2.stays} />
			<Boundary x={bb.x} y={bb.y} w={bb.w} h={bb.h} at={K2.draw} />
			<PenRing cx={cross[0]} cy={cross[1]} rx={48} ry={34} at={K2.crossed} color={TEAL_C} seed={4} />
			<Write x={cross[0] - 60} y={cross[1] - 50} text="gas out" at={K2.crossed + 6} size={44} color={TEAL_C} anchor="end" />
			<ReadPanel before={g2(M.cuco3)} after={g2(M.cuo)} afterAt={-1000} chip={f >= K2.has ? `carbon dioxide: ${M.co2.toFixed(2)} g` : `−${M.co2.toFixed(2)} g`} chipAt={-1000} chipColor={f >= K2.has ? SLATE_C : ROSE_C} />
			<Write x={RX} y={760} text="mass destroyed?" at={-1000} size={46} color={RED_C} />
			<StrikeLine x1={RX - 10} y1={744} x2={RX + 330} y2={734} at={K2.exactly} />
			<Write x={RX} y={840} text="same 0.88 g: it left" at={K2.exactly + 10} size={44} color={INK} />
			<Fade at={K2.system}>
				<Sx x={RX} y={900} text="system: everything inside" size={32} color={TEAL_C} weight={800} at={-1000} />
				<Sx x={RX} y={938} text="the boundary we weigh" size={32} color={TEAL_C} weight={800} at={-1000} />
			</Fade>
			{void K2.no}{void K2.black}{void K2.drifts}
		</svg>
	);
};

// ---------- 3. prediction ----------
const K3 = cues(sc('prediction'), {now: 'Now a quick', burn: 'Burn a strip', flares: 'flares into', will: 'Will the mass', same: 'the same'});
const G3 = balGeo(96, 360, 470);
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	const rw = 330;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Quick prediction" at={0} />
			<Balance g={G3} text={g2(M.mg)} />
			<Plate p={RIBBON} x={G3.pan[0] - rw / 2} y={G3.pan[1] + 18 - (rw / RIBBON.box[2]) * RIBBON.box[3]} h={(rw / RIBBON.box[2]) * RIBBON.box[3]} />
			<Sx x={G3.disp[0]} y={880} text="magnesium ribbon: 0.24 g" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={G3.disp[0]} y={920} text={ILLUS} size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			<PB p={CRU_BL} cx={1700} bottom={420} h={190} />
			<Sx x={1700} y={460} text="0.88 g out" size={34} color={SLATE_C} anchor="middle" weight={800} at={-1000} />
			<Chip x={880} y={300} segs={[{t: 'burn it: mass up, down or the same?'}]} at={-1000} size={44} color={INK} />
			{['up', 'down', 'same'].map((t, i) => <Chip key={t} x={900 + i * 230} y={470} segs={[{t}]} at={-1000} size={52} color={INK} />)}
			<Countdown start={h.startFrame} end={h.endFrame} x={1200} y={740} r={64} ringFrom={K3.same} />
			{void K3.now}{void K3.burn}{void K3.flares}{void K3.will}
		</svg>
	);
};

// ---------- 4. magnesium gains mass ----------
const K4 = cues(sc('magnesium-gain'), {up: 'It goes up', becomes: 'becomes', oxide: 'magnesium oxide', extra: 'The extra', came: 'It came from', crossed: 'crossed into', joined: 'joined the', burning: 'Burning things', because: "that's because", away: 'float away'});
/** The magnesium oxide crucible plate's bowl (native box on its 1280 x 1920 canvas) and powder point. */
const MGO_N = {bowl: [380, 190, 930, 600] as [number, number, number, number], powder: [655, 262] as [number, number]};
export const mgoGeo = (cx: number, bottom: number, h: number) => {
	const k = h / MGO.box[3], x = cx - pw(MGO, h) / 2, y = bottom - h;
	const P = (u: number, v: number): [number, number] => [x + (u - MGO.box[0]) * k, y + (v - MGO.box[1]) * k];
	const [x0, y0] = P(MGO_N.bowl[0], MGO_N.bowl[1]), [x1, y1] = P(MGO_N.bowl[2], MGO_N.bowl[3]);
	return {x, y, h, P, bowl: {x: x0 - 20, y: y0 - 20, w: x1 - x0 + 40, h: y1 - y0 + 40}, powder: P(MGO_N.powder[0], MGO_N.powder[1])};
};
export const SceneMgGain: React.FC = () => {
	const f = useCurrentFrame();
	const g = mgoGeo(CR.cx, 820, 400);
	const disp = g2(tick(f, M.mg, M.mgo, K4.oxide, K4.oxide + 18));
	const inA: [number, number] = [g.powder[0] + 150, g.powder[1] - 200];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Magnesium gains mass" at={0} />
			<Balance g={G3} text={disp} />
			<Plate p={RIBBON} x={G3.pan[0] - 165} y={G3.pan[1] + 18 - (330 / RIBBON.box[2]) * RIBBON.box[3]} h={(330 / RIBBON.box[2]) * RIBBON.box[3]} o={1 - prog(f, K4.becomes, 16)} />
			<Sx x={G3.disp[0]} y={880} text="magnesium + crucible" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K4.becomes} />
			<Sx x={G3.disp[0]} y={880} text="crucible + contents" size={34} color={INK} anchor="middle" weight={800} at={K4.becomes + 6} />
			<Plate p={MGO} x={g.x} y={g.y} h={g.h} at={K4.becomes - 8} />
			<Sx x={CR.cx} y={870} text="magnesium oxide" size={38} color={INK} anchor="middle" weight={800} at={K4.oxide} />
			<Chip x={RX} y={240} segs={[{t: 'mass goes up'}]} at={K4.up} size={44} color={GREEN_C} />
			<TickMark x={RX + 330} y={276} at={K4.up + 8} color={GREEN_C} />
			{/* readings */}
			<Sx x={RX} y={380} text="before" size={34} color={INK} weight={800} at={-1000} />
			<Sx x={RX} y={440} text={g2(M.mg)} size={52} color={INK} weight={800} at={-1000} />
			<Sx x={RX + 260} y={380} text="after" size={34} color={INK} weight={800} at={K4.oxide} />
			<Sx x={RX + 260} y={440} text={g2(M.mgo)} size={52} color={INK} weight={800} at={K4.oxide} />
			<Chip x={RX} y={480} segs={[{t: f >= K4.came ? `oxygen: ${M.o2.toFixed(2)} g` : `+${M.o2.toFixed(2)} g`}]} at={K4.extra} size={48} color={TEAL_C} />
			<Sx x={1824} y={380} text={ILLUS} size={26} color={INK} anchor="end" weight={700} at={-1000} />
			{/* oxygen crosses in */}
			<Boundary x={g.bowl.x} y={g.bowl.y} w={g.bowl.w} h={g.bowl.h} at={K4.came} />
			<Wisps a={inA} b={[g.powder[0] + 10, g.powder[1] + 6]} at={K4.came} n={4} spread={36} color={SLATE_C} />
			<Sx x={inA[0] - 10} y={inA[1] - 26} text="oxygen from the air" size={36} color={SLATE_C} weight={800} at={K4.came + 6} />
			<PenRing cx={g.powder[0] + 70} cy={g.bowl.y} rx={46} ry={32} at={K4.crossed} color={TEAL_C} seed={5} />
			<Write x={g.bowl.x - 20} y={g.bowl.y - 10} text="gas in" at={K4.crossed + 6} size={44} color={TEAL_C} anchor="end" />
			{/* burning makes things lighter? */}
			<Fade at={K4.burning}>
				<rect x={RX - 40} y={600} width={1824 - RX + 40} height={130} rx={16} fill={PAPER} stroke={INK} strokeWidth={4} />
				<Sx x={RX - 20} y={652} text="copper carbonate: gas out, mass falls" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={RX - 20} y={704} text="magnesium: gas in, mass rises" size={30} color={INK} weight={800} at={-1000} />
			</Fade>
			<Chip x={RX} y={760} segs={[{t: 'burning makes things lighter?'}]} at={K4.burning} size={40} color={RED_C} strike={K4.because} />
			<Write x={RX} y={900} text="ash: the gases float away" at={K4.because + 8} size={42} color={RED_C} />
			{void K4.joined}{void K4.away}{void Framed}
		</svg>
	);
};

// ---------- 5. a closed system ----------
const K5 = cues(sc('closed-system'), {what: 'So what if', here: 'Here, two', balance: 'on the balance', pour: 'Pour one', cloudy: 'a cloudy white', made: 'gas is made', nothing: 'Nothing crosses', change: "doesn't change", law: "That's the law", closed: 'In a closed', before: 'mass before'});
const G5 = balGeo(820, 400, 480);
const BW = 205;
export const SceneClosed: React.FC = () => {
	const f = useCurrentFrame();
	const bh = (BW / BK_CLEAR.box[2]) * BK_CLEAR.box[3];
	const lx = G5.pan[0] - 118, rx = G5.pan[0] + 118, bot = G5.pan[1] + 16;
	const tilt = span(f, K5.pour, K5.pour + 30) * (1 - span(f, K5.cloudy + 30, K5.cloudy + 60));
	const ang = -62 * tilt;
	const piv: [number, number] = [lx + BW / 2 - 10, bot - bh + 12];
	const empty = f >= K5.cloudy + 10;
	const pour = f >= K5.pour + 24 && f < K5.cloudy + 34;
	const ppt = prog(f, K5.cloudy - 6, 24);
	const blink = f >= K5.change && f < K5.change + 16 && Math.floor((f - K5.change) / 4) % 2 === 1;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="A closed system" at={0} />
			{/* earlier cases, small */}
			<PB p={CRU_BL} cx={180} bottom={420} h={190} />
			<Sx x={180} y={460} text="gas out" size={34} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
			<PB p={MGO} cx={420} bottom={420} h={190} />
			<Sx x={420} y={460} text="gas in" size={34} color={TEAL_C} anchor="middle" weight={800} at={-1000} />
			{/* the balance with two beakers */}
			<Balance g={G5} text={blink ? '' : g2(M.closed)} />
			<Sx x={G5.disp[0]} y={G5.Y(1028) + 40} text={ILLUS} size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			<g transform={`rotate(${ang},${piv[0]},${piv[1]})`}>
				<Plate p={empty ? BK_EMPTY : BK_CLEAR} x={lx - BW / 2} y={bot - bh} h={empty ? (BW / BK_EMPTY.box[2]) * BK_EMPTY.box[3] : bh} />
			</g>
			{pour ? <path d={`M${piv[0] + 30},${piv[1] - 10} Q${(piv[0] + rx) / 2 + 30},${piv[1] - 60} ${rx - 20},${bot - bh + 30}`} fill="none" stroke="#9cc8e8" strokeWidth={14} strokeLinecap="round" opacity={0.9} /> : null}
			<Plate p={BK_CLEAR} x={rx - BW / 2} y={bot - bh} h={bh} o={1 - ppt} />
			<Plate p={BK_PPT} x={rx - BW / 2} y={bot - bh} h={bh} o={ppt} />
			<Sx x={lx + 30} y={bot - bh - 66} text="sodium carbonate" size={30} color={NAVY_C} anchor="end" weight={800} at={K5.here} />
			<Sx x={lx + 30} y={bot - bh - 30} text="solution" size={30} color={NAVY_C} anchor="end" weight={800} at={K5.here} />
			<Sx x={rx + 90} y={bot - bh - 66} text="calcium chloride" size={30} color={NAVY_C} anchor="end" weight={800} at={K5.here + 6} />
			<Sx x={rx + 90} y={bot - bh - 30} text="solution" size={30} color={NAVY_C} anchor="end" weight={800} at={K5.here + 6} />
			<Boundary x={lx - BW / 2 - 40} y={bot - bh - 120} w={(rx - lx) + BW + 80} h={bh + 150} at={K5.balance} />
			<Write x={rx + BW / 2 + 50} y={bot - bh - 80} text="everything we weigh" at={K5.balance + 10} size={36} color={INK} />
			<Write x={rx + BW / 2 + 50} y={bot - bh + 10} text="no gas made" at={K5.made} size={40} color={TEAL_C} />
			<Sx x={rx + BW / 2 + 50} y={bot - bh + 60} text="white solid forms" size={34} color={INK} weight={800} at={K5.cloudy} />
			<TickMark x={G5.disp[0] + 230} y={G5.disp[1] + 10} at={K5.change + 6} color={TEAL_C} />
			<Write x={G5.disp[0] + 270} y={G5.disp[1] + 26} text="same reading" at={K5.change + 8} size={42} color={TEAL_C} />
			{/* the law */}
			<Fade at={K5.law}>
				<rect x={96} y={540} width={700} height={250} rx={20} fill={PAPER} stroke={INK} strokeWidth={5} />
				<Sx x={124} y={600} text="Law of conservation of mass:" size={44} color={INK} weight={800} at={-1000} />
				<Sx x={124} y={660} text="in a closed system, total" size={44} color={INK} weight={800} at={-1000} />
				<Sx x={124} y={720} text="mass before = mass after" size={44} color={TEAL_C} weight={800} at={-1000} />
			</Fade>
			<TickMark x={760} y={580} at={K5.law + 10} color={GREEN_C} />
			<Sx x={96} y={850} text="closed system: nothing crosses the boundary" size={34} color={INK} weight={800} at={K5.closed} />
			{void K5.what}{void K5.nothing}{void K5.before}{void lerp}
		</svg>
	);
};

// ---------- 6. why: atoms are rearranged ----------
const K6 = cues(sc('atoms-rearranged'), {why: 'Why must', because: 'Because a reaction', bonds: 'Bonds break', created: 'created or destroyed', keeps: 'keeps its own', look: 'Look at', same: 'The same four', after: 'and after', joined: 'joined up', differently: 'differently', sameAtoms: 'Same atoms'});
const R6 = 42;
/** Six atoms: [id, element, reactant position, product position]. */
const AT6: [string, string, [number, number], [number, number]][] = [
	['H1', 'H', [250, 520], [1290, 470]], ['H2', 'H', [330, 520], [1450, 470]],
	['H3', 'H', [250, 720], [1290, 720]], ['H4', 'H', [330, 720], [1450, 720]],
	['O1', 'O', [600, 580], [1370, 540]], ['O2', 'O', [600, 660], [1370, 790]],
];
export const SceneAtoms: React.FC = () => {
	const f = useCurrentFrame();
	const mv = span(f, K6.after - 10, K6.after + 34);
	const rBond = 1 - prog(f, K6.after - 14, 10);
	const pBond = prog(f, K6.after + 30, 12);
	const pos = (i: number): [number, number] => [lerp(AT6[i][2][0], AT6[i][3][0], mv), lerp(AT6[i][2][1], AT6[i][3][1], mv) - Math.sin(Math.PI * mv) * 60];
	const atoms: AtomP[] = AT6.map((a, i) => ({el: a[1], x: pos(i)[0], y: pos(i)[1], label: a[0]}));
	const RB: [number, number][] = [[0, 1], [2, 3], [4, 5]];
	const PBd: [number, number][] = [[0, 4], [1, 4], [2, 5], [3, 5]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Why: atoms are rearranged" at={0} />
			<Sx x={96} y={222} text="Law: in a closed system, total mass before = total mass after" size={34} color={INK} weight={800} at={-1000} />
			{[['atoms', '6'], ['mass', 'unchanged']].map(([l, v], i) => (
				<g key={l}>
					<rect x={560 + i * 380} y={264} width={i ? 460 : 300} height={80} rx={14} fill="#eaf6f4" stroke={TEAL_C} strokeWidth={4} />
					<Sx x={584 + i * 380} y={322} text={`${l}: ${v}`} size={50} color={TEAL_C} weight={800} at={-1000} />
				</g>
			))}
			<Sx x={450} y={420} text="2H_2  +  O_2" size={44} color={INK} anchor="middle" weight={800} at={K6.look} />
			<Sx x={1370} y={400} text="2H_2O" size={44} color={INK} anchor="middle" weight={800} at={K6.after + 30} />
			<rect x={1150} y={440} width={440} height={420} rx={24} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="14 10" opacity={1 - prog(f, K6.after - 10, 12)} />
			<Sx x={1370} y={670} text="after?" size={52} color={INK} anchor="middle" weight={800} at={-1000} out={K6.after - 10} />
			<Sx x={900} y={640} text="→" size={90} color={INK} anchor="middle" weight={800} at={-1000} />
			<Mol x={0} y={0} atoms={atoms} bonds={RB} r={R6} bondO={rBond} />
			{pBond > 0.005 ? <Mol x={0} y={0} atoms={atoms} bonds={PBd} r={R6} bondO={pBond} /> : null}
			<Write x={900} y={500} text="bonds break and re-form" at={K6.bonds} size={42} color={INK} anchor="middle" />
			<PenRing cx={pos(4)[0]} cy={pos(4)[1]} rx={66} ry={66} at={K6.keeps} color={INK} seed={3} out={K6.after - 20} />
			<Write x={480} y={850} text="each atom keeps its mass" at={K6.keeps + 6} size={42} color={INK} out={K6.after - 20} />
			<Sx x={450} y={900} text="4 H, 2 O" size={52} color={TEAL_C} anchor="middle" weight={800} at={K6.differently} />
			<Sx x={1370} y={900} text="4 H, 2 O" size={52} color={TEAL_C} anchor="middle" weight={800} at={K6.differently + 4} />
			<Write x={900} y={830} text="same atoms → same mass" at={K6.sameAtoms} size={44} color={TEAL_C} anchor="middle" />
			{void K6.why}{void K6.because}{void K6.created}{void K6.same}{void K6.joined}{void SLATE_C}{void RED_C}
		</svg>
	);
};
