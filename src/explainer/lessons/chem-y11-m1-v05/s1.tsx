// Y11 Chem M1 V05 scenes 1 to 5: V04's final strip goes into the painted jar and develops (one clock drives the jar's
// strip and the close-up), the two phases with a fibre close-up, the switching model (dye particles alternate between
// stuck and carried; live "time moving" shares on one timer), the 3 s prediction and the Rf definition with its
// dimension lines on the strip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown} from '../../kit';
import {InkBoard} from '../chem-y11-m1-v04/s3';
import {DYE, HOOK_SPOTS, hold, sc} from './common';
import {
	Bracket, Chip, Cross, DevStrip, Dim, Fade, Framed, Glyph, Heading, INK, Jar, PURE, PenArrow, PenRing, RF_INK, Readout, Rich, SLATE_INK, SVG, Solvent, Sx, Write, jarGeo,
	kf, prog, spotY,
} from './parts';
import {Underline} from '../chem-y11-m1-v01/s1';

/** The painted jar with a developed strip inside (hook values). */
export const JarStrip: React.FC<{x: number; y: number; h: number}> = ({x, y, h}) => {
	const g = jarGeo(x, y, h);
	const sh = g.Y(1370) - g.Y(520), sw = Math.max(40, h * 0.13);
	return (
		<Jar x={x} y={y} h={h}>
			<Solvent g={g} lvl={h * 0.07} />
			<DevStrip x={g.cx - sw / 2} y={g.Y(520)} w={sw} h={sh} base={sh / 6} travel={0.82 * (sh - sh / 6)} spots={HOOK_SPOTS} spotR={Math.max(6, sw * 0.12)} />
		</Jar>
	);
};

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {stand: 'Stand the strip', water: 'little water', below: 'below the line', lid: 'lid', soaks: 'slowly soaks', apart: 'apart', blue: 'A blue dye', same: 'same line', time: 'same time', chrom: 'chromatography'});
const BIG = {x: 640, y: 220, w: 220, h: 700};
export const BIG_BASE = BIG.h / 6;
const J1 = {x: 600, y: 215, h: 720};
export const devAt = (f: number, a: number, b: number) => kf(f, [[a, 0], [b, 1]]);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const g = jarGeo(J1.x, J1.y, J1.h);
	const jarIn = prog(f, K1.stand - 10, 30);
	const slide = kf(f, [[K1.stand, 0], [K1.stand + 40, 1]]);
	const bx = BIG.x + slide * (1360 - BIG.x);
	const dev = devAt(f, K1.soaks, K1.soaks + 330);
	const sep = prog(f, K1.apart - 30, 70);
	const tBig = 0.82 * (BIG.h - BIG_BASE) * dev;
	const IS = {x: g.cx - 50, y: g.Y(520), w: 100, h: g.Y(1370) - g.Y(520)};
	const ib = IS.h / 6;
	const tIn = 0.82 * (IS.h - ib) * dev;
	const lvl = 60 * prog(f, K1.water, 30);
	return (
		<SVG>
			<g opacity={1 - prog(f, K1.stand - 20, 30)}><InkBoard /></g>
			<Jar x={J1.x} y={J1.y} h={J1.h} o={jarIn} front={prog(f, K1.stand + 30, 20)}>
				<Solvent g={g} lvl={lvl} />
				<DevStrip x={IS.x} y={IS.y + (1 - jarIn) * -120} w={IS.w} h={IS.h} base={ib} travel={tIn} spots={HOOK_SPOTS} sep={sep} spotR={9} />
			</Jar>
			<DevStrip x={bx} y={BIG.y} w={BIG.w} h={BIG.h} base={BIG_BASE} travel={tBig} spots={HOOK_SPOTS} sep={sep} />
			<Sx x={bx + BIG.w / 2} y={204} text="the strip, close up" size={30} color={INK} anchor="middle" weight={800} at={K1.stand + 30} />
			<Rich x={96} y={640} segs={[{t: 'water below', c: PURE}]} size={44} at={K1.below} />
			<Rich x={96} y={692} segs={[{t: 'the pencil line', c: PURE}]} size={44} at={K1.below} />
			<PenArrow a={[420, 700]} b={[g.inL + 30, g.bot - 40]} at={K1.below + 6} color={PURE} bend={0.2} width={4} />
			<PenRing cx={g.lidC[0]} cy={g.lidC[1]} rx={230} ry={56} at={K1.lid} color={INK} seed={2} />
			<Write x={300} y={330} text="lid on" at={K1.lid + 4} size={42} color={INK} />
			<Sx x={96} y={460} text="about 20 minutes," size={30} color={INK} weight={800} at={K1.soaks} />
			<Sx x={96} y={498} text="sped up" size={30} color={INK} weight={800} at={K1.soaks} />
			<Bracket a={[1600, spotY(BIG.y, BIG.h, BIG_BASE, tBig, 0.8)]} b={[1600, spotY(BIG.y, BIG.h, BIG_BASE, tBig, 0.2)]} at={K1.blue} color={INK} depth={18} />
			<Write x={1640} y={spotY(BIG.y, BIG.h, BIG_BASE, 0.82 * (BIG.h - BIG_BASE), 0.5) + 14} text="one dot," at={K1.apart + 20} size={42} color={INK} />
			<Write x={1640} y={spotY(BIG.y, BIG.h, BIG_BASE, 0.82 * (BIG.h - BIG_BASE), 0.5) + 64} text="three dyes" at={K1.apart + 30} size={42} color={INK} />
			<Underline x0={1360} x1={1580} y={BIG.y + BIG.h - BIG_BASE + 14} at={K1.same} color={PURE} />
			<Write x={1100} y={BIG.y + BIG.h - BIG_BASE + 12} text="same start" at={K1.same + 6} size={42} color={PURE} />
			<Chip x={1100} y={830} segs={[{t: 'same run'}]} at={K1.time} size={34} color={INK} />
			<Heading text="Chromatography: why do the dyes travel different distances?" at={K1.chrom - 8} />
		</SVG>
	);
};

// ---------- 2. two phases ----------
const K2 = cues(sc('two-phases'), {two: 'two parts', paper: 'The paper is', still: 'stays still', water: 'The water is', moves: 'moves', climbs: 'It climbs', fibres: 'fibres', carries: 'it carries', speed: 'same speed'});
const J2 = {x: 96, y: 250, h: 640};
const S2 = {x: 560, y: 220, w: 200, h: 700};
export const SceneTwoPhases: React.FC = () => {
	const f = useCurrentFrame();
	const g = jarGeo(J2.x, J2.y, J2.h);
	const IS = {x: g.cx - 44, y: g.Y(520), w: 88, h: g.Y(1370) - g.Y(520)};
	const sb = S2.h / 6, tr = 0.82 * (S2.h - sb);
	const V = {cx: 1580, cy: 740, r: 170};
	return (
		<SVG>
			<Heading text="Two phases" at={0} />
			<Jar x={J2.x} y={J2.y} h={J2.h}>
				<Solvent g={g} lvl={52} />
				<DevStrip x={IS.x} y={IS.y} w={IS.w} h={IS.h} base={IS.h / 6} travel={0.82 * (IS.h - IS.h / 6)} spots={HOOK_SPOTS} spotR={8} />
			</Jar>
			<DevStrip x={S2.x} y={S2.y} w={S2.w} h={S2.h} base={sb} travel={tr} spots={HOOK_SPOTS} />
			<Rich x={830} y={300} segs={[{t: 'stationary phase: ', c: SLATE_INK}, {t: 'stays still'}]} size={44} at={K2.paper} />
			<Rich x={830} y={352} segs={[{t: '(the paper)'}]} size={44} at={K2.still} />
			<Rich x={830} y={450} segs={[{t: 'mobile phase: ', c: PURE}, {t: 'moves'}]} size={44} at={K2.water} />
			<Rich x={830} y={502} segs={[{t: '(the solvent, here water)'}]} size={44} at={K2.moves} />
			<Write x={830} y={620} text="paper: still" at={K2.still} size={42} color={SLATE_INK} />
			<PenArrow a={[820, 606]} b={[S2.x + S2.w - 10, S2.y + 120]} at={K2.still + 6} color={SLATE_INK} bend={0.2} width={4} />
			<Write x={830} y={700} text="water: climbing" at={K2.moves} size={42} color={PURE} />
			<PenArrow a={[S2.x - 30, S2.y + S2.h - 40]} b={[S2.x - 30, S2.y + S2.h - sb - tr + 20]} at={K2.moves + 6} color={PURE} bend={0} width={5} />
			<Write x={830} y={780} text="drawn up between the fibres" at={K2.fibres} size={42} color={PURE} />
			{/* fibre close-up */}
			<g opacity={prog(f, K2.climbs, 14)}>
				<defs><clipPath id="v5fib"><circle cx={V.cx} cy={V.cy} r={V.r - 3} /></clipPath></defs>
				<path d={`M${S2.x + S2.w},${S2.y + S2.h - sb - tr + 60} L${V.cx - V.r * 0.9},${V.cy - V.r * 0.4} L${V.cx - V.r * 0.7},${V.cy + V.r * 0.7} Z`} fill="rgba(60,45,20,0.06)" stroke="rgba(60,45,20,0.35)" strokeWidth={2} strokeDasharray="8 7" />
				<circle cx={V.cx} cy={V.cy} r={V.r} fill="#ffffff" />
				<g clipPath="url(#v5fib)">
					{Array.from({length: 9}, (_, i) => <path key={i} d={`M${V.cx - V.r + i * 44},${V.cy + V.r} q-22,-${V.r * 0.6} 6,-${V.r} t-4,-${V.r}`} fill="none" stroke="#d8cdb6" strokeWidth={16} strokeLinecap="round" />)}
					<rect x={V.cx - V.r} y={V.cy - 40 + Math.sin(f * 0.02) * 6} width={2 * V.r} height={V.r + 60} fill="rgba(120,170,220,0.28)" />
					{Array.from({length: 8}, (_, i) => { const t = ((f - K2.climbs) * 0.8 + i * 40) % 300; return <Glyph key={i} k="H2O" x={V.cx - V.r + 22 + i * 44} y={V.cy + V.r - t} u={8} rot={i * 40 + t} />; })}
				</g>
				<circle cx={V.cx} cy={V.cy} r={V.r} fill="none" stroke={INK} strokeWidth={5} />
				<Sx x={V.cx} y={V.cy + V.r + 40} text="paper fibres (model)" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			{HOOK_SPOTS.map((p, i) => { const y = spotY(S2.y, S2.h, sb, tr, p.rf); return <PenArrow key={i} a={[S2.x + S2.w / 2 + 30, y]} b={[S2.x + S2.w / 2 + 30, y - [30, 60, 100][i]]} at={K2.speed - 20 + i * 6} color={p.c} bend={0} width={6} />; })}
			<Sx x={830} y={880} text="carries the dyes up, at different speeds" size={34} color={INK} weight={800} at={K2.carries} />
			{void K2.two}{void DYE}
		</SVG>
	);
};

// ---------- 3. why the distances differ ----------
const K3 = cues(sc('why-distances-differ'), {key: 'the key', each: 'Each dye', stick: 'stick to the paper', carried: 'get carried', attr: 'attracted more', behind: 'falls behind', dist: 'distance', diss: 'dissolves well', further: 'further', every: 'Every dye', spots: "That's why"});
const PV = {x: 96, y: 200, w: 1180, h: 730};
const LANES = [170, 300, 430, 560, 690, 820, 950, 1080, 1210];
/** Frames spent moving up to frame f for a particle with a 60-frame cycle, `mv` moving frames per cycle, offset o. */
const cnt = (t: number, mv: number) => Math.floor(t / 60) * mv + Math.min(t % 60, mv);
const moved = (f: number, mv: number, o: number) => cnt(Math.max(0, f) + o, mv) - cnt(o, mv);
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const dyes = Array.from({length: 8}, (_, k) => ({blue: k % 2 === 0, lane: LANES[k] + 65, o: k * 13}));
	const items: React.ReactNode[] = [];
	let stuckBlue: [number, number] | null = null, ridingY: [number, number] | null = null;
	dyes.forEach((d, k) => {
		const mv = d.blue ? 15 : 45;
		const m = moved(f, mv, d.o);
		const isMoving = (f + d.o) % 60 < mv;
		const y = PV.y + PV.h - 60 - m * 0.55;
		const x = d.lane + (isMoving ? 0 : -42);
		if (!isMoving && d.blue && !stuckBlue) stuckBlue = [x, y];
		if (isMoving && !d.blue && !ridingY) ridingY = [x, y];
		items.push(<circle key={'d' + k} cx={x} cy={y} r={15} fill={d.blue ? DYE.blue : DYE.yellow} stroke="#222" strokeWidth={2.5} />);
	});
	const share = (mv: number) => (f < 30 ? 0 : Math.round((100 * moved(f, mv, 0)) / f));
	const secs = (f / 30).toFixed(0);
	return (
		<SVG>
			<Heading text="Why the distances differ" at={0} />
			<defs><clipPath id="v5pv"><rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} /></clipPath></defs>
			<rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} fill="#dfeaf5" />
			<g clipPath="url(#v5pv)">
				{LANES.map((x, i) => <rect key={i} x={x - 24} y={PV.y} width={44} height={PV.h} rx={18} fill="#e9dfc9" stroke="#cbbd9c" strokeWidth={2} />)}
				{Array.from({length: 18}, (_, i) => { const t = (f * 1.6 + i * 41) % PV.h; return <Glyph key={'w' + i} k="H2O" x={LANES[i % 8] + 65} y={PV.y + PV.h - t} u={8} rot={i * 37 + t} />; })}
				{items}
			</g>
			<rect x={PV.x} y={PV.y} width={PV.w} height={PV.h} rx={18} fill="none" stroke={INK} strokeWidth={5} />
			<Sx x={PV.x + 20} y={PV.y + PV.h - 18} text="paper fibres and moving water (model, not to scale)" size={30} color={INK} weight={700} at={-1000} />
			{stuckBlue ? <PenRing cx={(stuckBlue as [number, number])[0]} cy={(stuckBlue as [number, number])[1]} rx={30} ry={30} at={K3.stick} out={K3.carried} color={SLATE_INK} seed={2} /> : null}
			<Fade at={K3.stick}><rect x={110} y={218} width={330} height={56} rx={12} fill="#fffdf8" opacity={0.92} /></Fade>
			<Write x={PV.x + 30} y={PV.y + 60} text="stuck: stays put" at={K3.stick + 4} size={42} color={SLATE_INK} />
			<Fade at={K3.carried}><rect x={110} y={278} width={330} height={56} rx={12} fill="#fffdf8" opacity={0.92} /></Fade>
			<Write x={PV.x + 30} y={PV.y + 120} text="carried: rides up" at={K3.carried} size={42} color={PURE} />
			{ridingY ? <PenArrow a={[(ridingY as [number, number])[0] + 30, (ridingY as [number, number])[1] + 40]} b={[(ridingY as [number, number])[0] + 30, (ridingY as [number, number])[1] - 60]} at={K3.carried} out={K3.attr} color={PURE} bend={0} width={5} /> : null}
			{/* live shares on one timer */}
			<Sx x={1320} y={240} text="shared timer (model)" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1320} y={256} w={240} text={`${secs} s`} size={52} color={INK} frame={INK} anchor="middle" />
			<Sx x={1320} y={420} text="blue: time moving" size={34} color={DYE.blue} weight={800} at={-1000} />
			<rect x={1320} y={436} width={480} height={44} rx={10} fill="#eef2fa" stroke={INK} strokeWidth={3} />
			<rect x={1324} y={440} width={472 * share(15) / 100} height={36} rx={8} fill={DYE.blue} />
			<Readout x={1320} y={492} w={220} text={`${share(15)}%`} size={44} color={DYE.blue} frame={DYE.blue} anchor="middle" />
			<Sx x={1320} y={640} text="yellow: time moving" size={34} color="#8a6a00" weight={800} at={-1000} />
			<rect x={1320} y={656} width={480} height={44} rx={10} fill="#eef2fa" stroke={INK} strokeWidth={3} />
			<rect x={1324} y={660} width={472 * share(45) / 100} height={36} rx={8} fill={DYE.yellow} />
			<Readout x={1320} y={712} w={220} text={`${share(45)}%`} size={44} color="#8a6a00" frame={DYE.yellow} anchor="middle" />
			<Fade at={K3.behind}><rect x={110} y={338} width={470} height={56} rx={12} fill="#fffdf8" opacity={0.92} /></Fade>
			<Write x={PV.x + 30} y={PV.y + 180} text="sticks more: falls behind" at={K3.behind} size={42} color={DYE.blue} />
			<Fade at={K3.further}><rect x={700} y={218} width={470} height={56} rx={12} fill="#fffdf8" opacity={0.92} /></Fade>
			<Write x={PV.x + 620} y={PV.y + 60} text="moves more: goes further" at={K3.further} size={42} color={INK} />
			<Sx x={1320} y={880} text="same time, different attraction" size={34} color={INK} weight={800} at={K3.every} />
			<Sx x={1320} y={922} text="so the dyes spread apart" size={34} color={INK} weight={800} at={K3.every} />
			{void K3.key}{void K3.each}{void K3.dist}{void K3.diss}{void K3.spots}{void Fade}
		</SVG>
	);
};

// ---------- 4. prediction (3 s) ----------
const K4 = cues(sc('prediction'), {which: 'which one', think: 'Have a think'});
export const ST = {x: 840, y: 190, w: 240, h: 760};
export const ST_BASE = ST.h / 6, ST_TR = 0.82 * (ST.h - ST_BASE);
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<DevStrip x={ST.x} y={ST.y} w={ST.w} h={ST.h} base={ST_BASE} travel={ST_TR} spots={HOOK_SPOTS} />
			<Rich x={96} y={400} segs={[{t: 'Which dye is most'}]} size={52} at={-1000} />
			<Rich x={96} y={466} segs={[{t: 'strongly attracted'}]} size={52} at={-1000} />
			<Rich x={96} y={532} segs={[{t: 'to the paper?', c: SLATE_INK}]} size={52} at={-1000} />
			<Rich x={96} y={600} segs={[{t: '(the stationary phase)'}]} size={38} weight={700} at={-1000} />
			<Sx x={96} y={720} text="Have a think." size={44} color={INK} weight={800} at={K4.think} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1460} y={560} r={64} ringFrom={K4.think} />
			{void K4.which}
		</SVG>
	);
};

// ---------- 5. the Rf value ----------
const K5 = cues(sc('rf-value'), {blue: 'blue one', most: 'most time stuck', ratio: 'R F value', dist: 'the distance the spot', div: 'divided by', moved: 'solvent moved', both: 'Both are', base: 'baseline', centre: 'centre', front: 'solvent front', never: 'never get ahead', one: 'zero and one', units: 'no units'});
const S5 = {x: 300, y: 190, w: 240, h: 760};
export const SceneRf = () => {
	const by = S5.y + S5.h - ST_BASE, fy = by - ST_TR;
	const blueY = spotY(S5.y, S5.h, ST_BASE, ST_TR, 0.2);
	return (
		<SVG>
			<Heading text="The Rf value" at={0} />
			<DevStrip x={S5.x} y={S5.y} w={S5.w} h={S5.h} base={ST_BASE} travel={ST_TR} spots={HOOK_SPOTS} />
			<JarStrip x={1600} y={590} h={340} />
			<Sx x={1696} y={950} text="developed in the jar" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<PenRing cx={S5.x + S5.w / 2} cy={blueY} rx={40} ry={34} at={K5.blue} color={'#287347'} seed={3} />
			<Framed x={700} y={262} segs={[{t: 'blue: lowest', c: '#23704a'}]} at={K5.blue} size={44} />
			<Write x={1060} y={262} text="most time stuck" at={K5.most} size={42} color={SLATE_INK} />
			<Fade at={-1000} out={K5.dist}>
				<Sx x={1100} y={330} text="time moving (from the model)" size={30} color={INK} weight={800} at={-1000} />
				{HOOK_SPOTS.map((p, i) => <g key={i}><rect x={1100} y={350 + i * 48} width={500} height={34} rx={8} fill="#eef2fa" stroke={INK} strokeWidth={2} /><rect x={1103} y={353 + i * 48} width={494 * [0.25, 0.5, 0.75][i]} height={28} rx={6} fill={p.c} /><Sx x={1620} y={378 + i * 48} text={['blue: least', 'pink', 'yellow: most'][i]} size={30} color={INK} weight={800} at={-1000} /></g>)}
			</Fade>
			<Rich x={700} y={512} segs={[{t: 'Rf =', c: RF_INK}]} size={52} at={K5.ratio} />
			<Rich x={860} y={478} segs={[{t: 'distance moved by the spot', c: RF_INK}]} size={44} at={K5.dist} />
			<line x1={860} x2={1680} y1={498} y2={498} stroke={INK} strokeWidth={4} opacity={prog(useCurrentFrame(), K5.div, 10)} />
			<Rich x={860} y={556} segs={[{t: 'distance moved by the solvent front', c: PURE}]} size={44} at={K5.div} />
			<Rich x={700} y={660} segs={[{t: 'baseline: where the sample started'}]} size={38} weight={700} at={K5.base} />
			<Write x={96} y={by + 70} text="start here" at={K5.base} size={42} color={PURE} />
			<PenArrow a={[200, by + 44]} b={[S5.x + 10, by + 4]} at={K5.base + 6} color={PURE} bend={0.2} width={4} />
			<Cross x={S5.x + S5.w / 2} y={blueY} at={K5.centre} color={RF_INK} />
			<Dim x={S5.x + S5.w + 30} y0={by} y1={blueY} at={K5.centre} label="spot" color={RF_INK} />
			<Write x={700} y={740} text="to the centre" at={K5.centre + 6} size={42} color={RF_INK} />
			<Dim x={S5.x - 30} y0={by} y1={fy} at={K5.front} label="front" color={PURE} side="left" />
			<Rich x={700} y={820} segs={[{t: 'solvent front: ', c: PURE}, {t: 'the highest point reached'}]} size={38} weight={700} at={K5.front} />
			<Chip x={700} y={858} segs={[{t: '0 ≤ Rf ≤ 1, no units', c: RF_INK}]} at={K5.one} size={44} color={RF_INK} />
			<PenArrow a={[S5.x + 30, blueY - 20]} b={[S5.x + 30, fy + 12]} at={K5.never} color={INK} bend={0} width={5} />
			<line x1={S5.x + 6} x2={S5.x + 56} y1={fy + 2} y2={fy + 2} stroke={INK} strokeWidth={6} opacity={prog(useCurrentFrame(), K5.never + 10, 8)} />
			{void K5.moved}{void K5.both}{void K5.units}
		</SVG>
	);
};
