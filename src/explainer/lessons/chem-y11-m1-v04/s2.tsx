// Y11 Chem M1 V04 scenes 6 to 10: the fractional rig with a bead cutaway (vapour rises, condenses on beads, trickles
// down, reboils richer) and the run's values placed up the column; beads, height and fractions (the side-arm reading
// climbs); the azeotrope gauge stage; choosing simple or fractional (with the industrial column); safety and the
// ladder memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BARREL, FRAC, INDCOL, SIMPLE, pctAt, sc} from './common';
import {
	Chip, ETH, ETH_INK, Eth, Fade, Gauge, Glyph, Heading, INK, PURE, PenArrow, PenRing, Plate, RED, Readout, Rich, SVG, StrikeLine, Sx, TERRA_INK, Tile, Write, chipW, fracGeo,
	kf, plateMap, prog, tw,
} from './parts';
import {Underline} from '../chem-y11-m1-v01/s1';
import {RF} from './s1';

/** Bead cutaway: glass beads in a circle; vapour rises through the gaps; drops form on beads and trickle down;
 *  from `reboil` some drops send ethanol back up. */
export const BeadView: React.FC<{cx: number; cy: number; r: number; from: number; reboil: number; scale?: number; id: string; src?: [number, number]}> = ({cx, cy, r, from, reboil, scale = 1, id, src}) => {
	const f = useCurrentFrame();
	const br = 34 * scale, sp = 92 * scale;
	const beads: [number, number][] = [];
	for (let j = -4; j <= 4; j++) for (let i = -4; i <= 4; i++) { const x = cx + i * sp + (j % 2 ? sp / 2 : 0), y = cy + j * sp * 0.82; if (Math.hypot(x - cx, y - cy) < r + br) beads.push([x, y]); }
	const items: React.ReactNode[] = [];
	// rising vapour in the gaps
	for (let k = 0; k < 14; k++) {
		const lane = cx - r + ((k * 0.37 + 0.11) % 1) * 2 * r;
		const t = ((f * 2.2 + k * 53) % (2 * r + 60)) - 30;
		const y = cy + r - t;
		items.push(k % 3 ? <Eth key={'v' + k} x={lane} y={y} u={6 * scale + 1} rot={k * 30 + f} /> : <Glyph key={'v' + k} k="H2O" x={lane} y={y} u={6 * scale + 1} rot={k * 30 + f} />);
	}
	// drops forming on beads, trickling down
	if (f >= from) beads.forEach(([x, y], n) => {
		if (n % 2) return;
		const ph = ((f - from) + n * 23) % 90;
		const grow = Math.min(1, ph / 40), slide = Math.max(0, (ph - 40) / 50);
		items.push(<ellipse key={'d' + n} cx={x + br * 0.2} cy={y + br * 0.9 + slide * sp * 0.6} rx={7 * grow * scale + 2} ry={9 * grow * scale + 2} fill="rgba(110,160,210,0.95)" stroke="#4a7aa5" strokeWidth={1.5} />);
		if (f >= reboil && n % 4 === 0 && ph > 60) { const a = ph - 60; items.push(<Eth key={'e' + n} x={x - br * 0.4} y={y - a * 2.2} u={6 * scale + 1} rot={a * 6} o={1 - a / 30} />); }
	});
	return (
		<g>
			{src ? <path d={`M${src[0]},${src[1]} L${cx - r * 0.7},${cy - r * 0.7} L${cx - r * 0.7},${cy + r * 0.7} Z`} fill="rgba(60,45,20,0.07)" stroke="rgba(60,45,20,0.35)" strokeWidth={2} strokeDasharray="8 7" /> : null}
			<defs><clipPath id={id}><circle cx={cx} cy={cy} r={r - 3} /></clipPath></defs>
			<circle cx={cx} cy={cy} r={r} fill="#fbf3e2" />
			<g clipPath={`url(#${id})`}>
				{beads.map(([x, y], n) => <g key={n}><circle cx={x} cy={y} r={br} fill="#eef4f8" stroke="#7d97ad" strokeWidth={3} /><circle cx={x - br * 0.35} cy={y - br * 0.35} r={br * 0.25} fill="#ffffff" /></g>)}
				{items}
			</g>
			<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={5} />
		</g>
	);
};

// ---------- 6. what the column does ----------
const K6 = cues(sc('column'), {col: 'fractionating column', tube: 'tall tube', beads: 'glass beads', hot: 'hottest', top: 'towards the top', rising: 'Rising vapour', down: 'down', hotter: 'Hotter vapour', boils: 'boils some', esc: 'escapes', over: 'over and over', below: ['below', 2], bytop: 'By the top', mostly: 'mostly ethanol', deg: 'degrees'});
export const SceneColumn: React.FC = () => {
	const f = useCurrentFrame();
	const g = fracGeo(RF.x, RF.y, RF.h);
	const c = kf(f, [[K6.over, 0], [K6.below, 4]]);
	const vals = [62, 80, 86, 89];
	const colH = g.colBot[1] - g.colTop[1];
	return (
		<SVG>
			<Heading text="What the column does" at={0} />
			<Plate p={FRAC} x={RF.x} y={RF.y} h={RF.h} />
			<PenRing cx={g.colTop[0]} cy={(g.colTop[1] + g.colBot[1]) / 2} rx={52} ry={colH / 2 + 30} at={K6.col} color={ETH} seed={2} />
			<Sx x={600} y={790} text="fractionating column:" size={34} color={INK} weight={800} at={K6.tube} />
			<Sx x={600} y={832} text="packed with glass beads" size={34} color={INK} weight={800} at={K6.beads} />
			<line x1={592} y1={780} x2={g.colTop[0] + 30} y2={g.colTop[1] + colH * 0.6} stroke={INK} strokeWidth={3} opacity={prog(f, K6.tube, 10)} />
			{/* temperature along the column */}
			<Fade at={K6.hot}>
				<defs><linearGradient id="v4grad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#d9532c" /><stop offset="1" stopColor="#f2c14e" /></linearGradient></defs>
				<rect x={g.colTop[0] + 36} y={g.colTop[1]} width={14} height={colH} rx={6} fill="url(#v4grad)" stroke={INK} strokeWidth={2} />
				<Sx x={470} y={g.colBot[1] - 14} text="about" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={470} y={g.colBot[1] + 18} text="89 °C" size={32} color={INK} weight={800} at={-1000} />
			</Fade>
			<Sx x={470} y={g.colTop[1] + 50} text="about" size={30} color={INK} weight={800} at={K6.top} />
			<Sx x={470} y={g.colTop[1] + 82} text="78 °C" size={32} color={INK} weight={800} at={K6.top} />
			{/* the run placed up the column */}
			{vals.map((v, i) => { const yy = g.colBot[1] - 20 - (i * colH) / 4; return <g key={v} opacity={prog(f, K6.over + i * 30, 10)}><line x1={g.colTop[0] + 52} x2={g.colTop[0] + 66} y1={yy} y2={yy} stroke={ETH_INK} strokeWidth={3} /><Sx x={328} y={yy + 12} text={`${v}%`} size={34} color={ETH_INK} weight={800} at={-1000} /></g>; })}
			<Sx x={336} y={g.flask[1] - 4} text="17%" size={34} color={ETH_INK} weight={800} at={K6.over - 20} />
			<BeadView cx={1420} cy={420} r={220} from={K6.rising} reboil={K6.hotter} id="v4bv6" src={[g.colTop[0] + 30, (g.colTop[1] + g.colBot[1]) / 2]} />
			<Sx x={1420} y={676} text="inside the column (model)" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={1190} y={720} text="vapour: % ethanol" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1190} y={734} w={280} text={`${Math.round(pctAt(c))}%`} size={52} color={ETH_INK} frame={ETH} anchor="middle" />
			<Sx x={1510} y={720} text="top of column" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={1510} y={734} w={300} text={f >= K6.deg - 30 ? 'about 78 °C' : 'warming'} size={f >= K6.deg - 30 ? 44 : 40} color={INK} frame={INK} anchor="middle" />
			<PenRing cx={1660} cy={772} rx={170} ry={56} at={K6.deg} color={INK} seed={5} />
			<Write x={1190} y={880} text="condenses, trickles down" at={K6.down} out={K6.mostly - 10} size={42} color={PURE} />
			<Write x={1190} y={940} text="boils again: richer" at={K6.esc} out={K6.mostly - 10} size={42} color={ETH_INK} />
			<PenArrow a={[1300, 300]} b={[1300, 420]} at={K6.down + 4} color={PURE} bend={0.15} />
			<PenArrow a={[1560, 520]} b={[1560, 330]} at={K6.esc + 4} color={ETH} bend={0.15} />
			<Write x={1190} y={900} text="mostly ethanol at the top" at={K6.mostly} size={42} color={ETH_INK} />
			{void K6.boils}{void K6.bytop}
		</SVG>
	);
};

// ---------- 7. beads, height and fractions ----------
const K7 = cues(sc('beads-and-fractions'), {beads: 'The beads', surface: 'huge surface', short: 'short height', longer: 'longer column', better: 'better', fractions: 'fractions', while: 'While the', mostly: 'mostly ethanol', climbs: 'reading climbs', running: 'running out', swap: 'swap in', receiver: 'receiver'});
export const SceneFractions: React.FC = () => {
	const f = useCurrentFrame();
	const g = fracGeo(RF.x, RF.y, RF.h);
	const T = kf(f, [[K7.climbs, 78], [K7.climbs + 90, 99]]);
	const cyc = Math.round(kf(f, [[K7.longer, 4], [K7.better + 20, 8]]));
	const swap = prog(f, K7.receiver - 10, 24);
	return (
		<SVG>
			<Heading text="Beads, height and fractions" at={0} />
			<Plate p={FRAC} x={RF.x} y={RF.y} h={RF.h} />
			<Sx x={330} y={222} text="side-arm reading" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={330} y={236} w={240} text={`${Math.round(T)} °C`} size={52} color={INK} frame={INK} anchor="middle" />
			<PenRing cx={450} cy={286} rx={146} ry={38} at={K7.climbs + 10} color={INK} seed={3} />
			<Write x={600} y={330} text="ethanol running out" at={K7.running - 10} size={42} color={INK} />
			<BeadView cx={1560} cy={360} r={170} from={0} reboil={0} scale={0.55} id="v4bv7" src={[g.colTop[0] + 30, (g.colTop[1] + g.colBot[1]) / 2]} />
			<Write x={1250} y={600} text="more surface, more cycles" at={K7.surface} size={42} color={ETH_INK} />
			<Sx x={1250} y={660} text="cycles in the column (model)" size={30} color={INK} weight={800} at={K7.longer - 20} />
			<Readout x={1250} y={674} w={240} text={`${cyc}`} size={52} color={ETH_INK} frame={ETH} anchor="middle" at={K7.longer - 20} />
			<Write x={1520} y={730} text="taller: more steps" at={K7.longer + 10} size={42} color={ETH_INK} />
			<rect x={g.colTop[0] - 30} y={g.colTop[1] - 6} width={60} height={g.colBot[1] - g.colTop[1] + 12} rx={12} fill="none" stroke={ETH} strokeWidth={4} strokeDasharray="12 8" opacity={prog(f, K7.longer, 12)} />
			{/* fractions at the receiver */}
			<g opacity={1 - swap}>
				<Chip x={700} y={700} segs={[{t: 'fraction 1: mostly ethanol'}]} at={K7.fractions} size={38} color={ETH_INK} />
			</g>
			<Chip x={700} y={780} segs={[{t: 'fraction 2: new receiver'}]} at={K7.receiver} size={38} color={PURE} />
			<PenArrow a={[g.rMid[0] + 40, 778]} b={[g.rMid[0] + 6, g.rMid[1] + 64]} at={K7.swap} color={PURE} bend={0.3} />
			<Sx x={750} y={890} text="fractions: parts of the distillate" size={34} color={INK} weight={800} at={K7.fractions} />
			<Sx x={750} y={932} text="collected separately" size={34} color={INK} weight={800} at={K7.fractions} />
			{void K7.beads}{void K7.short}{void K7.while}{void K7.mostly}
		</SVG>
	);
};

// ---------- 8. the limit: the azeotrope ----------
const K8 = cues(sc('azeotrope'), {limit: 'the limit', however: 'However tall', ninety: 'ninety six', at: 'At that', same: 'same composition', nothing: 'nothing', az: 'azeotrope', steady: 'one steady', like: 'like a pure', so: 'So a steady', purity: 'purity'});
const T8: [number, number][] = [[17, 62], [62, 80], [80, 86], [86, 89], [89, 92], [92, 94], [94, 96], [96, 96]];
export const SceneAzeo: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K8.however, 4], [K8.ninety + 10, 12]]);
	const v = pctAt(c);
	const tAt = (i: number) => (i < 4 ? -1000 : i < 7 ? K8.however + (i - 3) * 30 : K8.nothing - 10);
	const fm = plateMap(FRAC, 0, 0, 300);
	return (
		<SVG>
			<Heading text="The limit: an azeotrope" at={0} />
			<Plate p={FRAC} x={96} y={200} h={300} />
			<Sx x={96 + fm.w / 2} y={540} text="however tall the column" size={30} color={INK} anchor="middle" weight={800} at={K8.however} />
			{T8.map(([a, b], i) => <Tile key={i} x={520 + (i % 4) * 330} y={i < 4 ? 210 : 320} a={a} b={b} at={tAt(i)} w={300} cur={i === 7 ? f >= K8.nothing - 10 : i === 6 && f < K8.nothing - 10 && f >= tAt(6)} />)}
			<Write x={1180} y={460} text="vapour = liquid: no change" at={K8.nothing} size={42} color={ETH_INK} />
			<Gauge x={520} y={560} w={1280} v={v} label="distillate: % ethanol by mass" stopAt={K8.ninety} stopV={96} />
			<Write x={1640} y={520} text="stops here" at={K8.ninety + 8} size={42} color={ETH_INK} />
			<Sx x={96} y={600} text="distillate" size={30} color={INK} weight={800} at={-1000} />
			<Readout x={96} y={614} w={420} text={`${v >= 95.5 ? 'about 96' : Math.round(v)}% ethanol`} size={44} color={ETH_INK} frame={ETH} anchor="middle" />
			<Rich x={96} y={770} segs={[{t: 'azeotrope:', c: ETH_INK}]} size={52} at={K8.az} />
			<Rich x={96} y={830} segs={[{t: 'a mixture that boils without changing composition'}]} size={44} at={K8.az + 8} />
			<Sx x={1300} y={724} text="boils steadily at" size={30} color={INK} weight={800} at={K8.steady} />
			<Readout x={1300} y={738} w={320} text="about 78 °C" size={52} color={INK} frame={INK} anchor="middle" at={K8.steady} />
			<Sx x={1640} y={790} text="like nearly" size={30} color={INK} weight={800} at={K8.like} />
			<Sx x={1640} y={826} text="pure ethanol" size={30} color={INK} weight={800} at={K8.like} />
			<Chip x={96} y={860} segs={[{t: 'steady reading = pure'}]} at={K8.so} size={40} color={RED} strike={K8.purity} />
			<Write x={640} y={912} text="a hint, not proof" at={K8.purity + 4} size={44} color={RED} />
			{void K8.limit}{void K8.at}{void K8.same}
		</SVG>
	);
};

// ---------- 9. choosing simple or fractional ----------
const K9 = cues(sc('choosing'), {which: 'which should', one: 'one part', far: 'far apart', enough: 'is enough', two: 'two liquids mix', close: 'are close', twenty: 'twenty five', law: 'a law', matters: 'What matters', pure: 'how pure', oil: 'Oil refineries', petrol: 'petrol', diesel: 'diesel'});
export const SceneChoose: React.FC = () => {
	const f = useCurrentFrame();
	const sh = plateMap(SIMPLE, 0, 0, 1).k;
	void sh;
	const ih = 330, iw = plateMap(INDCOL, 0, 0, ih).w;
	const chip = 'about 25 °C apart: a rough guide only';
	const cw = chipW([{t: chip}], 40, false);
	const ux = 960 - cw / 2 + 20 * 1.1 + tw('about 25 °C apart: a ', 40, false, 700);
	return (
		<SVG>
			<Heading text="Simple or fractional?" at={0} />
			<rect x={96} y={190} width={830} height={530} rx={20} fill="#fffdf8" stroke={PURE} strokeWidth={4} />
			<Plate p={SIMPLE} x={150} y={205} h={330} />
			<Sx x={124} y={590} text="simple distillation" size={44} color={PURE} weight={800} at={-1000} />
			<Sx x={124} y={640} text="one part non-volatile, or" size={38} color={INK} weight={700} at={-1000} />
			<Sx x={124} y={686} text="boiling points far apart (salt water)" size={38} color={INK} weight={700} at={-1000} />
			<rect x={994} y={190} width={830} height={530} rx={20} fill="#fffdf8" stroke={ETH} strokeWidth={4} />
			<Plate p={FRAC} x={1040} y={205} h={330} out={K9.oil - 6} />
			<Fade at={K9.oil}>
				<Plate p={BARREL} x={1030} y={205} h={300} />
				<Plate p={INDCOL} x={1360} y={200} h={ih} />
				<Sx x={1250} y={540} text="industrial" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Sx x={1370 + iw + 20} y={300} text="petrol" size={34} color={ETH_INK} weight={800} at={K9.petrol} />
			<Sx x={1370 + iw + 20} y={420} text="diesel" size={34} color={ETH_INK} weight={800} at={K9.diesel} />
			<Sx x={1022} y={590} text="fractional distillation" size={44} color={ETH_INK} weight={800} at={-1000} />
			<Sx x={1022} y={640} text="liquids that mix, with close" size={38} color={INK} weight={700} at={-1000} />
			<Sx x={1022} y={686} text="boiling points (ethanol and water)" size={38} color={INK} weight={700} at={-1000} />
			<Write x={124} y={780} text="one cycle" at={K9.enough} size={42} color={PURE} />
			<Write x={1022} y={780} text="many cycles" at={K9.close} size={42} color={ETH_INK} />
			<Chip x={960} y={800} segs={[{t: chip}]} at={K9.twenty} size={40} color={INK} anchor="middle" />
			<Underline x0={ux} x1={ux + tw('rough guide', 40, false, 700)} y={854} at={K9.law} color={INK} />
			<Rich x={960} y={930} segs={[{t: 'what matters: '}, {t: 'how easily each evaporates', c: ETH_INK}, {t: ', and the purity needed'}]} size={38} weight={700} anchor="middle" at={K9.matters} />
			{void K9.which}{void K9.one}{void K9.far}{void K9.two}{void K9.pure}{void f}
		</SVG>
	);
};

// ---------- 10. safety and the memory aid ----------
const K10 = cues(sc('safety-and-memory-aid'), {fire: 'catches fire', never: 'never a flame', open: 'receiver open', remember: 'way to remember', simple: 'Simple distillation', column: 'A column climbs', ends: 'ladder ends', az: 'azeotrope'});
export const SceneSafety: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<SVG>
			<Heading text="Safety, and a way to remember" at={0} />
			<Plate p={FRAC} x={96} y={250} h={600} />
			<rect x={860} y={200} width={964} height={270} rx={18} fill="#fffdf8" stroke="#c4582f" strokeWidth={4} />
			<Sx x={890} y={250} text="safety: ethanol catches fire easily" size={34} color={TERRA_INK} weight={800} at={-1000} />
			<Sx x={890} y={310} text="heat with an electric heating mantle" size={34} color={INK} weight={700} at={K10.fire} />
			<Sx x={890} y={356} text="or a water bath: no flame" size={34} color={INK} weight={700} at={K10.fire + 10} />
			<Sx x={890} y={402} text="apparatus clamped; receiver open" size={34} color={INK} weight={700} at={K10.open - 20} />
			<Sx x={890} y={448} text="ventilate; teacher approval" size={34} color={INK} weight={700} at={K10.open} />
			<Underline x0={890 + tw('or a water bath: ', 34, false, 700)} x1={890 + tw('or a water bath: no flame', 34, false, 700)} y={368} at={K10.never} color={RED} />
			<Fade at={-1000}>
				<rect x={860} y={510} width={964} height={420} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<rect x={870} y={520} width={944} height={400} rx={16} fill="none" stroke={INK} strokeWidth={2} />
				<Sx x={900} y={568} text="memory aid" size={30} color={INK} hand weight={700} at={-1000} />
			</Fade>
			{[[17, 62], [62, 80], [80, 86]].map(([a, b], i) => <Tile key={i} x={900 + i * 300} y={596} a={a} b={b} at={-1000} w={270} />)}
			<Rich x={900} y={740} segs={[{t: 'Simple: one step.', c: PURE}]} size={48} hand at={K10.simple} />
			<Rich x={900} y={808} segs={[{t: 'Column: many steps.', c: ETH_INK}]} size={48} hand at={K10.column} />
			<Rich x={900} y={876} segs={[{t: 'The ladder ends at the azeotrope.', c: ETH_INK}]} size={48} hand at={K10.ends} />
			<Sx x={1800} y={912} text="about 96%" size={34} color={ETH_INK} anchor="end" weight={800} at={K10.az} />
			<PenRing cx={900 + 135} cy={634} rx={120} ry={52} at={K10.simple} color={PURE} seed={2} />
			{void StrikeLine}{void Eth}{void Glyph}
		</SVG>
	);
};
