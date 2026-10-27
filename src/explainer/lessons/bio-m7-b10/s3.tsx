// M7 B10 scenes 9 to 12: herd immunity (the board's last station opens into the contact network; most circles take
// teal immune rings; one infection's pulses stop at immune circles and the chain dies out; a baby circle is never
// reached), how many must be immune (one case with fifteen contacts, fourteen of fifteen immune, the coverage bar,
// then two schools where a traveller's infection stops or spreads), judging the measures (the criteria table, a missed
// contact, layered break marks) and the two memory lines.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, Board, BreakMark, CARD, CTag, DrawPath, EDGE, GREYT, GREY_INK, GTag, HEAD, INK, INK_SOFT, Network, Pl, ST_PLATE, ST4, SX, SignText, Sx, TEAL, TERRA, WText,
	clamp01, fitW, lerp, makeNet, nbrs, prog, smooth, vis,
} from './parts';
import type {BoardPlate, Net, PB, Pt, Pulse} from './parts';

/** Infection times and pulses for a chain that spreads only through susceptible circles (step frames per link). */
export const spread = (n: Net, start: number, t0: number, sus: Set<number>, step = 22, extraEdges: [number, number][] = []) => {
	const nb = (i: number) => [...nbrs(n, i), ...extraEdges.filter(e => e[0] === i || e[1] === i).map(e => (e[0] === i ? e[1] : e[0]))];
	const inf = new Map<number, number>([[start, t0]]);
	const pulses: Pulse[] = [];
	const q = [start];
	const from = new Map<number, number>();
	while (q.length) {
		const a = q.shift()!;
		const ta = inf.get(a)!;
		for (const b of nb(a)) {
			if (b === from.get(a)) continue;
			const go = sus.has(b) && !inf.has(b);
			if (inf.has(b) && b !== start) continue;
			if (b === start) continue;
			pulses.push({a, b, at: ta + 8, stop: !go});
			if (go) { inf.set(b, ta + 8 + step); from.set(b, a); q.push(b); }
		}
	}
	return {inf, pulses};
};
const infAt = (m: Map<number, number>, f: number) => (i: number) => (m.has(i) ? prog(f, m.get(i)!, 10) : 0);

// ---------- 9. Herd immunity ----------
const K9 = cues(S('herd-immunity'), {vacc: 'A vaccinated person', enough: 'when enough people', meets: 'meets too few', fewer: 'fewer than one', fizzles: 'fizzles out', herd: 'herd immunity', babies: 'babies too young'});
const N9 = makeNet(8, 5, 230, 280, 130, 165, 11);
const GREY9 = new Set([17, 38, 5, 23]);
const FIRST_IMM = 12, BABY = 38, CASE9 = 16;
export const SceneHerd: React.FC = () => {
	const f = useCurrentFrame();
	const grow = smooth(prog(f, 6, 30));
	const sp = spread(N9, CASE9, K9.meets + 6, GREY9);
	const immune = (i: number) => (i === FIRST_IMM ? prog(f, K9.vacc + 10, 12) : GREY9.has(i) || i === CASE9 ? 0 : prog(f, K9.enough + 6 + (i % 10) * 3, 10));
	const inf = infAt(sp.inf, f);
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 190, h: 120}, {p: PLATES.sink, at: ST_PLATE[1], w: 140, h: 115}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100}];
	const fi = N9.pts[FIRST_IMM], bb = N9.pts[BABY];
	const last = Math.max(...[...sp.inf.values()]);
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board s={lerp(0.45, 0.8, grow)} ox={lerp(20, -500, grow)} oy={lerp(140, -60, grow)} stLit={[1, 1, 0]} st4Lit={1} plates={plates} o={1 - prog(f, 4, 22)} />
				<Network n={N9} immune={immune} infected={inf} pulses={sp.pulses} grow={grow} />
				<Pl p={PLATES.vial} cx={fi[0] + 70} cy={fi[1] - 40} w={90} o={vis(f, K9.vacc + 10, K9.enough + 30, 12)} />
				<GTag x={fi[0] + 20} y={fi[1] + 34} text="b09: memory cells" at={K9.vacc + 20} out={K9.enough + 30} size={20} />
				<CTag x={1330} y={250} text="most immune" at={K9.enough + 30} color={TEAL} size={30} dim={prog(f, K9.meets, 10)} />
				<CTag x={1330} y={340} text="chain dies out" at={last + 40} color={AMBER_INK} size={30} dim={prog(f, K9.herd, 10)} />
				<CTag x={1330} y={430} text="new cases per case: below 1" at={K9.fewer + 6} color={AMBER_INK} size={30} dim={prog(f, K9.herd, 10)} />
				<CTag x={1330} y={540} text="herd immunity: enough people immune that chains die out" at={K9.herd + 6} color={TEAL} size={30} maxW={520} />
				{f >= K9.babies + 4 ? <DrawPath d={`M${bb[0] + 30},${bb[1]} L1320,${bb[1] - 10}`} at={K9.babies + 4} dur={12} color={GREYT} width={2.5} dash="5 6" /> : null}
				<CTag x={1330} y={bb[1] - 44} text="too young to vaccinate: protected by those around it" at={K9.babies + 10} color={GREY_INK} size={26} maxW={440} />
				{void K9.fizzles}{void ST4}{void SX}
			</Overlay>
		</>
	);
};

// ---------- 10. How many must be immune? ----------
const K10 = cues(S('how-many'), {more: 'The more contagious', nobody: 'Where nobody is', fifteen: 'about fifteen people', below: 'below one', fourteen: 'more than fourteen', ninety: 'about ninety-three', aim: 'aim for ninety-five', because: 'because no vaccine', local: 'local coverage matters', drops: 'vaccination drops', traveller: 'by a traveller'});
const STAR_C: Pt = [560, 600];
const STAR = Array.from({length: 15}, (_, i) => [STAR_C[0] + 290 * Math.cos(((-90 + i * 24) * Math.PI) / 180), STAR_C[1] + 290 * Math.sin(((-90 + i * 24) * Math.PI) / 180)] as Pt);
const LEFT1 = 9;
/** A school cluster: a 5 x 5 net plus a traveller node (25) joined to three edge circles. */
const school = (x0: number, seed: number): Net => {
	const n = makeNet(5, 5, x0, 380, 100, 110, seed, 0.3);
	const t = n.pts[10];
	return {pts: [...n.pts, [t[0] - 110, t[1] - 10] as Pt], edges: [...n.edges, [25, 10], [25, 5], [25, 15]]};
};
const NA = school(220, 3), NB = school(960, 5);
const GREY_A = new Set([18]), GREY_B = new Set([10, 11, 12, 13, 18]);
export const SceneHowMany: React.FC = () => {
	const f = useCurrentFrame();
	const starO = 1 - prog(f, K10.local, 20);
	const schoolO = prog(f, K10.local + 10, 20);
	const cov = smooth(prog(f, K10.aim + 4, 40));
	const spA = spread(NA, 25, K10.traveller + 6, GREY_A, 16);
	const spB = spread(NB, 25, K10.traveller + 6, GREY_B, 16);
	const imA = (i: number) => (i === 25 || GREY_A.has(i) ? 0 : 1);
	const imB = (i: number) => (i === 25 || GREY_B.has(i) ? 0 : 1);
	const hideT = f < K10.traveller ? [25] : [];
	const tOff = (1 - smooth(prog(f, K10.traveller, 16))) * 60;
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				{starO > 0.01 ? (
					<g opacity={starO * prog(f, 0, 16)}>
						{STAR.map((p, i) => f >= K10.fifteen + i * 3 ? <DrawPath key={'l' + i} d={`M${STAR_C[0]},${STAR_C[1]} L${p[0]},${p[1]}`} at={K10.fifteen + i * 3} dur={10} color={AMBER} width={3} /> : null)}
						{STAR.map((p, i) => {
							const im = i === LEFT1 ? 0 : prog(f, K10.fourteen + 6 + i * 2, 8);
							return (
								<g key={i} opacity={prog(f, K10.nobody + i * 2, 8)}>
									<circle cx={p[0]} cy={p[1]} r={24} fill="#f1eee6" stroke="#9a9890" strokeWidth={3} />
									{im > 0.01 ? <circle cx={p[0]} cy={p[1]} r={31} fill="none" stroke={TEAL} strokeWidth={5} opacity={im} /> : null}
								</g>
							);
						})}
						<circle cx={STAR_C[0]} cy={STAR_C[1]} r={38} fill={AMBER} opacity={0.25} />
						<circle cx={STAR_C[0]} cy={STAR_C[1]} r={26} fill="#f6c35a" stroke={AMBER_INK} strokeWidth={3} />
					</g>
				) : null}
				<CTag x={1210} y={240} text="about 15 per case where no one is immune" at={K10.fifteen + 30} color={AMBER_INK} size={28} maxW={620} dim={prog(f, K10.fourteen, 10)} out={K10.local} />
				<GTag x={1210} y={330} text="R₀ for measles: 12 to 18" at={K10.fifteen + 50} out={K10.local} size={22} />
				<CTag x={1210} y={400} text="14 of 15 immune: 1 left" at={K10.fourteen + 44} color={TEAL} size={28} dim={prog(f, K10.ninety, 10)} out={K10.local} />
				<Sx x={1210} y={540} text="14 ÷ 15 ≈ 93%" size={52} color={AMBER_INK} hand weight={700} at={K10.ninety} out={K10.local} />
				<GTag x={1210} y={566} text="threshold = 1 − 1/R₀: 92 to 94% for measles" at={K10.ninety + 16} out={K10.local} size={20} />
				{cov > 0.001 ? (
					<g opacity={1 - prog(f, K10.local, 16)}>
						<Sx x={1210} y={690} text="coverage (per cent vaccinated)" size={24} color={GREY_INK} weight={600} at={-100} />
						<rect x={1210} y={710} width={600} height={40} rx={12} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
						<rect x={1210} y={710} width={600 * 0.95 * cov} height={40} rx={12} fill={TEAL} opacity={0.8} />
						<rect x={1210 + 600 * 0.92} y={710} width={600 * 0.03 * prog(f, K10.because, 12)} height={40} fill="#9a9890" />
						<Sx x={1210 + 600 * 0.95 * cov + 10} y={740} text={`${Math.round(95 * cov)}%`} size={26} color={TEAL} weight={800} at={-100} />
						<GTag x={1210} y={770} text="some vaccinated people aren't protected" at={K10.because + 10} size={20} />
					</g>
				) : null}
				<g opacity={schoolO}>
					<Network n={NA} immune={imA} infected={infAt(spA.inf, f)} pulses={spA.pulses} hide={hideT} />
					<Network n={NB} immune={imB} infected={infAt(spB.inf, f)} pulses={spB.pulses} hide={hideT} />
				</g>
				{f >= K10.traveller ? [NA, NB].map((n, k) => <g key={k} opacity={1 - tOff / 60}><path d={`M${n.pts[25][0] - 60 - tOff},${n.pts[25][1]} L${n.pts[25][0] - 28},${n.pts[25][1]}`} stroke={AMBER_INK} strokeWidth={4} /></g>) : null}
				<CTag x={320} y={290} text="school A: 96%" at={K10.local + 20} color={TEAL} size={30} />
				<CTag x={1060} y={290} text="school B: 80%" at={K10.local + 30} color={TERRA} size={30} />
				<CTag x={1450} y={880} text="outbreak where coverage is low" at={K10.traveller + 70} color={TERRA} size={30} maxW={420} />
				{void K10.more}{void K10.below}{void K10.drops}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 11. Judge the measures ----------
const K11 = cues(S('judge'), {how: 'how do you', which: 'which link it', fast: 'how fast it', long: 'how long it', costs: 'what it costs', hyg: 'Hygiene is cheap', mostly: 'mostly stops routes', iso: 'Isolation and quarantine', only: 'only work if', vacc: 'Vaccination lasts', coverage: 'high coverage', several: 'several measures at'});
const TB = {x: 100, y: 220, rhw: 420, cw: 325, hh: 70, rh: 150, gap: 10};
const rowY = (r: number) => TB.y + TB.hh + 10 + r * (TB.rh + TB.gap);
const colX = (c: number) => TB.x + TB.rhw + c * TB.cw;
const HEADS = ['which link?', 'how fast?', 'how long can it last?', 'cost to people?'];
const ROWS: {label: string; p: PB; cells: string[]; note: string}[] = [
	{label: 'hygiene and environmental management', p: PLATES.sink, cells: ['travel', 'ongoing', 'lasting', 'low'], note: 'not the air route'},
	{label: 'isolation and quarantine', p: PLATES.bed, cells: ['leave', 'fast', 'hard to keep up', 'high'], note: "misses contacts who aren't found"},
	{label: 'vaccination', p: PLATES.vial, cells: ['next host', 'takes weeks to build coverage', 'lasting', 'low to moderate'], note: '95% for measles'},
];
export const SceneJudge: React.FC = () => {
	const f = useCurrentFrame();
	const hAt = [K11.which, K11.fast, K11.long, K11.costs];
	const rAt = [K11.hyg, K11.iso, K11.vacc];
	const nAt = [K11.mostly, K11.only, K11.coverage];
	const all = prog(f, K11.several, 12);
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 190, h: 120}, {p: PLATES.sink, at: ST_PLATE[1], w: 140, h: 115}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100}];
	return (
		<>
			<Heading text="Judge a measure" at={4} size={52} />
			<Overlay>
				<rect x={TB.x} y={TB.y} width={TB.rhw + 4 * TB.cw} height={TB.hh} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={prog(f, K11.how, 14)} />
				{HEADS.map((h, c) => <Sx key={h} x={colX(c) + TB.cw / 2} y={TB.y + 46} text={h} size={30} color={vis(f, hAt[c], hAt[c + 1] ?? K11.hyg, 10) > 0.5 ? AMBER_INK : INK_SOFT} hand weight={700} anchor="middle" at={hAt[c]} />)}
				{ROWS.map((r, i) => {
					const o = prog(f, rAt[i], 14);
					if (o <= 0.01) return null;
					const on = Math.max(vis(f, rAt[i], rAt[i + 1] ?? K11.several, 10), all) > 0.5;
					const y = rowY(i);
					return (
						<g key={i} opacity={o * (on ? 1 : 0.6)}>
							<rect x={TB.x} y={y} width={TB.rhw + 4 * TB.cw} height={TB.rh} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
							<Pl p={r.p} cx={TB.x + 70} cy={y + TB.rh / 2} w={fitW(r.p, 110, 90)} dim={on ? 0 : 0.6} />
							<WText x={TB.x + 140} y={y + 60} text={r.label} size={28} maxW={TB.rhw - 160} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
							{r.cells.map((c, k) => <g key={k} opacity={prog(f, rAt[i] + 8 + k * 8, 10)}><WText x={colX(k) + 18} y={y + 54} text={c} size={30} maxW={TB.cw - 36} color={on ? INK : GREY_INK} hand weight={700} at={-100} /></g>)}
							<Sx x={colX(0) + 18} y={y + TB.rh - 18} text={r.note} size={22} color={GREY_INK} weight={600} at={nAt[i] + 6} />
						</g>
					);
				})}
				<g opacity={vis(f, K11.only + 4, K11.vacc + 20, 12)}>
					<circle cx={colX(2) + 60} cy={rowY(1) + TB.rh - 26} r={16} fill="#f4efe4" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="4 4" />
					<Sx x={colX(2) + 86} y={rowY(1) + TB.rh - 18} text="missed contact" size={20} color={GREY_INK} weight={600} at={-100} />
				</g>
				<Board s={0.42} ox={120} oy={650} stLit={[1, 1, 0]} st4Lit={1} plates={plates} o={prog(f, K11.several - 20, 16)}>
					{[SX[0] + 90, SX[1] + 110, ST4[0] - 150].map((x, i) => <BreakMark key={i} x={x} y={470} h={120} at={K11.several + 8} />)}
				</Board>
				<CTag x={960} y={840} text="layers: each catches what another misses" at={K11.several + 20} color={AMBER_INK} size={32} maxW={820} />
				{void HEAD}{void TERRA}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 12. Memory ----------
const K12 = cues(S('memory'), {two: 'Two ideas', isolate: 'Isolate the infected', quar: 'quarantine the exposed', herd: 'for herd immunity', brk: 'break enough links'});
const N12 = makeNet(7, 2, 640, 900, 110, 80, 21, 0.2);
const G12 = new Set([7]);
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const sp = spread(N12, 7, K12.brk + 10, G12, 18);
	return (
		<>
			<Heading text="Two ideas to keep" at={4} size={52} />
			<Overlay>
				<Sx x={200} y={330} text="Isolate the infected." size={68} color={AMBER_INK} hand weight={700} at={K12.isolate} />
				<Sx x={1000} y={330} text="Quarantine the exposed." size={68} color={AMBER_INK} hand weight={700} at={K12.quar} />
				<Pl p={PLATES.bed} cx={480} cy={490} w={fitW(PLATES.bed, 260, 160)} o={prog(f, K12.isolate + 10, 14)} />
				<Pl p={PLATES.sign} cx={1330} cy={500} w={170} o={prog(f, K12.quar + 10, 14)} />
				<SignText cx={1330} cy={500} w={170} text="quarantine" o={prog(f, K12.quar + 16, 14)} />
				<Sx x={960} y={760} text="Herd immunity: break enough links and the chain dies out." size={54} color={TEAL} hand weight={700} anchor="middle" at={K12.herd} />
				<Network n={N12} r={18} immune={i => (i === 7 ? 0 : prog(f, K12.brk, 12))} infected={infAt(sp.inf, f)} pulses={sp.pulses} grow={prog(f, K12.brk - 10, 20)} />
				{void K12.two}{void INK}{void AMBER}
			</Overlay>
		</>
	);
};
