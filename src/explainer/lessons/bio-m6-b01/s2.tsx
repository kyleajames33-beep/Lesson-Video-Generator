// M6 B01 scenes 5 to 8 on the population board: passing a new allele on (bacteria: both daughter cells; animals: only
// from cells that make eggs or sperm), random with respect to need, the Lederbergs' replica plates (1952) and what
// penicillin actually does (selection of an existing resistance allele).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {kf} from '../chem-m5-c03/common';
import {Chip, DrawPath, Heading, MistakeChip, Overlay, PlateB, Sx, Tick, prog, rng} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, AlleleRing, BIO_INK, Bact, CardBox, CellIcon, CurveArrow, DayStrip, FillBar, GREYT, GTag, INK, INK_SOFT, Lbl, PlateAt, clamp01, lerp, popGrid, smooth, vis,
} from './parts';

// ---------- 5. Passing it on ----------
const K5 = cues(S('passing-on'), {
	how: 'How does that one copy spread', depends: 'It depends on how', bact: 'A bacterium copies its DNA', splits: 'splits in two', both: 'both daughter cells', every: 'every cell descended',
	animals: 'In animals', only: "only if it's in a cell that makes eggs or sperm", skin: 'skin cell', affect: 'can affect that animal', offspring: "its offspring don't inherit it",
});
type Node = {x: number; y: number; at: number; px?: number; py?: number};
const lineage = (rootX: number, rootY: number, half: number, dy: number, gens: number, times: number[]): Node[] => {
	const out: Node[] = [{x: rootX, y: rootY, at: -100}];
	let level = [{x: rootX, y: rootY}];
	for (let g = 0; g < gens; g++) {
		const span = half / Math.pow(2, g);
		const next: {x: number; y: number}[] = [];
		for (const p of level) for (const s of [-1, 1]) {
			const c = {x: p.x + s * span, y: p.y + dy};
			next.push(c);
			out.push({...c, at: times[g], px: p.x, py: p.y});
		}
		level = next;
	}
	return out;
};
export const ScenePassingOn: React.FC = () => {
	const f = useCurrentFrame();
	const tree = lineage(526, 340, 200, 150, 3, [K5.splits + 6, K5.both + 30, K5.every + 6]);
	return (
		<>
			<Heading text="How the new allele is passed on" at={K5.how} size={56} />
			<Overlay>
				<CardBox x={96} y={200} w={860} h={820} at={K5.depends - 6} />
				<CardBox x={980} y={200} w={844} h={820} at={K5.animals - 6} />
				<Lbl x={130} y={258} text="bacteria" size={42} color={BIO_INK} at={K5.depends} />
				<Lbl x={1014} y={258} text="animals" size={42} color={BIO_INK} at={K5.animals} />
				{/* the dividing lineage, every cell copying the ring */}
				{tree.map((n, i) => {
					const o = i === 0 ? prog(f, K5.bact - 10, 12) : prog(f, n.at, 14);
					if (o <= 0.01) return null;
					const t = smooth(prog(f, n.at, 18));
					const x = n.px === undefined ? n.x : lerp(n.px, n.x, t), y = n.py === undefined ? n.y : lerp(n.py, n.y, t);
					const w = i < 3 ? 120 : i < 7 ? 104 : 82;
					return (
						<g key={i}>
							{n.px !== undefined ? <line x1={n.px + 6} y1={(n.py ?? 0) + 26} x2={x + 6} y2={y - 22} stroke="#cdbfa8" strokeWidth={3} opacity={o} /> : null}
							<Bact cx={x + 12} cy={y} w={w} o={o} ring="new" r={i < 7 ? 12 : 10} />
						</g>
					);
				})}
				<Lbl x={130} y={960} text="division: both daughter cells get it" size={38} color={AMBER_INK} at={K5.both + 8} />
				{/* animals: germ line against a skin cell */}
				<PlateAt p={PLATES.flyRed} cx={1130} cy={470} w={230} at={K5.animals} />
				<g opacity={prog(f, K5.animals + 20, 12)}>
					<DrawPath d="M1215,420 L1366,365" at={K5.animals + 20} dur={12} color={GREYT} width={2.5} dash="6 6" />
					<DrawPath d="M1215,520 L1366,575" at={K5.animals + 26} dur={12} color={GREYT} width={2.5} dash="6 6" />
					<CellIcon x={1420} y={360} r={46} fill="#e9e1f2" stroke="#8a74a8" ring={prog(f, K5.only + 30, 12)} />
					<CellIcon x={1420} y={580} r={46} ring={prog(f, K5.skin + 6, 12)} />
				</g>
				<Lbl x={1480} y={350} text="cell that makes" size={28} color={INK} at={K5.animals + 24} />
				<Lbl x={1480} y={384} text="eggs or sperm" size={28} color={INK} at={K5.animals + 24} />
				<Lbl x={1420} y={665} text="skin cell" size={30} color={INK} anchor="middle" at={K5.animals + 30} />
				<CurveArrow a={[1468, 395]} b={[1680, 738]} at={K5.only + 40} bow={0} color={AMBER_INK} width={4} />
				<PlateAt p={PLATES.flyWhite} cx={1700} cy={840} w={170} at={K5.only + 52} />
				<Lbl x={1580} y={990} text="offspring inherit it" size={28} color={AMBER_INK} at={K5.only + 60} />
				<GTag x={1470} y={870} text="B8: 1910" at={K5.only + 70} size={22} />
				{/* skin cell: blocked */}
				<DrawPath d="M1452,622 Q1500,700 1520,760" at={K5.skin + 20} dur={14} color={GREYT} width={4} />
				<DrawPath d="M1496,776 L1546,750" at={K5.skin + 34} dur={8} color={GREYT} width={7} />
				<Lbl x={1014} y={700} text="affects this animal only" size={32} color={GREYT} at={K5.affect + 10} />
				<GTag x={1014} y={940} text="plants differ: later video" at={K5.offspring + 10} size={24} />
			</Overlay>
		</>
	);
};

// ---------- shared 60-cell population (scenes 6 and 8) ----------
export const POP60 = popGrid(60, 10, 150, 340, 110, 82, 21, 0.24);
const BW = 74;
const RES = [33, 52];

// ---------- 6. Random with respect to need ----------
const K6 = cues(S('random-not-needed'), {
	back: 'Now back to', chance: 'Mutations happen by chance', help: 'whether or not the change would help', sense: "can't sense penicillin", huge: 'in a huge population', rare: 'rare mutations keep turning up',
	already: 'may already carry a resistance allele', before: 'before any penicillin is used', random: 'random with respect to need',
});
const MUTS = [
	{i: 7, t: 'colour'}, {i: 18, t: 'sugar use'}, {i: 33, t: 'resistance'}, {i: 26, t: 'cell wall'}, {i: 45, t: 'movement'}, {i: 11, t: 'sugar use'},
	{i: 52, t: 'resistance'}, {i: 39, t: 'colour'},
];
export const SceneRandom: React.FC = () => {
	const f = useCurrentFrame();
	const at = (k: number) => (k < 6 ? K6.chance + 12 + k * 22 : K6.rare + (k - 6) * 18);
	const resHot = vis(f, K6.already, undefined, 14);
	return (
		<>
			<Heading text="Random with respect to need" at={K6.random} size={56} />
			<Overlay>
				<Chip x={150} y={200} text="made by penicillin?" at={K6.back} size={32} />
				<Chip x={490} y={200} text="already there?" at={K6.back + 8} size={32} />
				{POP60.map(([x, y], i) => {
					const k = MUTS.findIndex(m => m.i === i);
					const on = k >= 0 && f >= at(k);
					const res = RES.includes(i);
					return <Bact key={i} cx={x} cy={y} w={BW} o={prog(f, (i % 10) * 2 + Math.floor(i / 10), 12)} ring={on ? 'new' : undefined} r={10} glow={res ? resHot : 0} />;
				})}
				{MUTS.map((m, k) => {
					const [x, y] = POP60[m.i];
					const res = m.t === 'resistance';
					return <Sx key={k} x={x - BW * 0.62} y={y - 26} text={m.t} size={res ? 26 : 22} color={res ? AMBER_INK : GREYT} weight={700} anchor="middle" at={at(k) + 4} />;
				})}
				<MistakeChip x={150} y={935} text="bacterium senses the drug and picks a mutation" at={K6.sense} cross={K6.sense + 40} size={30} />
				<DayStrip x={1290} y={330} w={540} labels={['before penicillin', 'with it']} active={0} o={prog(f, K6.before - 20, 12)} size={26} />
				<Lbl x={1290} y={450} text="a few cells already carry" size={32} color={INK} at={K6.already + 10} />
				<Lbl x={1290} y={490} text="a resistance allele" size={32} color={AMBER_INK} at={K6.already + 10} />
				<Lbl x={1290} y={640} text="random with" size={52} color={INK} at={K6.random} />
				<Lbl x={1290} y={700} text="respect to need" size={52} color={INK} at={K6.random + 8} />
				<Lbl x={1290} y={760} text="it happens whether or not it helps" size={30} color={INK_SOFT} hand={false} at={K6.random + 20} />
				<Lbl x={1290} y={580} text="by chance, helpful or not" size={30} color={INK_SOFT} at={K6.help} out={K6.random - 10} />
			</Overlay>
		</>
	);
};

// ---------- 7. The replica plates ----------
const K7 = cues(S('replica-plates'), {
	how: 'How do we know', y1952: 'In 1952', grew: 'grew bacterial colonies', noab: 'with no antibiotic', velvet: 'velvet pad', onto: 'onto it', then: 'then onto a dish', strep: 'the antibiotic streptomycin',
	print: 'printing the same pattern', few: 'Only a few colonies grew', back: 'Then they went back', matching: 'the matching spots on the first dish', never: 'never touched the antibiotic',
	from: 'bacteria from those spots', grow: 'could grow on streptomycin too', first: 'The resistance was there first',
});
const D1 = {cx: 430, cy: 620, w: 480}, D2 = {cx: 1060, cy: 620, w: 480}, D3 = {cx: 1630, cy: 700, w: 280};
/** Forty colonies at fixed positions inside the agar (radius as a fraction of the dish width). */
const COLS: [number, number][] = (() => {
	const r = rng(52);
	const out: [number, number][] = [];
	while (out.length < 40) {
		const a = r() * Math.PI * 2, d = Math.sqrt(r()) * 0.34;
		const p: [number, number] = [Math.cos(a) * d, Math.sin(a) * d];
		if (out.every(q => Math.hypot(q[0] - p[0], q[1] - p[1]) > 0.075)) out.push(p);
	}
	return out;
})();
const RESC = [5, 17, 29];
const colPt = (d: {cx: number; cy: number; w: number}, i: number): [number, number] => [d.cx + COLS[i][0] * d.w, d.cy + COLS[i][1] * d.w];
const Colony: React.FC<{x: number; y: number; r?: number; o?: number; ghost?: boolean}> = ({x, y, r = 10, o = 1, ghost}) => (o <= 0.01 ? null : (
	<circle cx={x} cy={y} r={r} fill={ghost ? 'none' : '#f4ecd6'} stroke={ghost ? '#b8a77f' : '#9a8556'} strokeWidth={ghost ? 2 : 2.5} strokeDasharray={ghost ? '4 3' : undefined} opacity={o} />
));
export const SceneReplica: React.FC = () => {
	const f = useCurrentFrame();
	const vh = (360 * (PLATES.velvet.box[3] - PLATES.velvet.box[1])) / (PLATES.velvet.box[2] - PLATES.velvet.box[0]);
	const up = 250, down = D1.cy - vh / 2 + 70;
	const vx = kf(f, [[K7.then - 4, D1.cx], [K7.then + 18, D2.cx]]);
	const vy = kf(f, [[K7.velvet, up], [K7.onto - 2, down], [K7.onto + 10, down], [K7.then - 4, up], [K7.then + 18, up], [K7.strep - 10, down], [K7.strep + 6, down], [K7.print + 6, up]]);
	const vo = vis(f, K7.velvet - 8, K7.print + 24, 12);
	const ghost = vis(f, K7.print, K7.few + 30, 14);
	return (
		<>
			<Heading text="The replica plates" at={K7.how} size={56} />
			<Overlay>
				<Lbl x={96} y={240} text="1952: Joshua and Esther Lederberg" size={32} color={INK_SOFT} at={K7.y1952} />
				{/* dish 1 */}
				<PlateAt p={PLATES.dish} cx={D1.cx} cy={D1.cy} w={D1.w} at={K7.grew - 10} />
				<Lbl x={D1.cx} y={350} text="dish 1: no antibiotic" size={34} color={INK} anchor="middle" at={K7.noab} />
				{COLS.map((_, i) => {
					const [x, y] = colPt(D1, i);
					return <Colony key={i} x={x} y={y} o={prog(f, K7.grew + 4 + i, 10)} />;
				})}
				{/* dish 2: streptomycin */}
				<PlateAt p={PLATES.dish} cx={D2.cx} cy={D2.cy} w={D2.w} at={K7.then} />
				<Lbl x={D2.cx} y={350} text="dish 2: streptomycin" size={34} color={INK} anchor="middle" at={K7.strep} />
				{COLS.map((_, i) => {
					const [x, y] = colPt(D2, i);
					return <Colony key={i} x={x} y={y} o={ghost * 0.8} ghost />;
				})}
				{RESC.map((i, k) => {
					const [x, y] = colPt(D2, i);
					const [x1, y1] = colPt(D1, i);
					return (
						<g key={k}>
							<Colony x={x} y={y} r={11} o={prog(f, K7.few + 6 + k * 6, 10)} />
							{f >= K7.few + 24 ? <circle cx={x} cy={y} r={22} fill="none" stroke={AMBER} strokeWidth={4} opacity={prog(f, K7.few + 24 + k * 6, 10)} /> : null}
							<DrawPath d={`M${x},${y} Q${(x + x1) / 2},${Math.min(y, y1) - 150 - k * 30} ${x1},${y1}`} at={K7.matching + k * 10} dur={22} color={AMBER_INK} width={3} dash="8 7" />
							{f >= K7.matching + 20 ? <circle cx={x1} cy={y1} r={22} fill="none" stroke={AMBER} strokeWidth={4} opacity={prog(f, K7.matching + 20 + k * 10, 10)} /> : null}
						</g>
					);
				})}
				<Lbl x={1060} y={910} text="only a few colonies grow" size={32} color={AMBER_INK} anchor="middle" at={K7.few + 30} />
				<Lbl x={D1.cx} y={910} text="never exposed" size={38} color={AMBER_INK} anchor="middle" at={K7.never} />
				{/* the velvet block prints dish 1 onto dish 2 */}
				{vo > 0.01 ? <PlateB p={PLATES.velvet} cx={vx} cy={vy} w={360} o={vo} /> : null}
				{/* dish 3: picked from dish 1 */}
				<PlateAt p={PLATES.dish} cx={D3.cx} cy={D3.cy} w={D3.w} at={K7.from} />
				<Lbl x={D3.cx} y={530} text="streptomycin" size={30} color={INK} anchor="middle" at={K7.from + 6} />
				<DrawPath d={`M${colPt(D1, RESC[0])[0]},${colPt(D1, RESC[0])[1]} C${colPt(D1, RESC[0])[0]},120 ${D3.cx},120 ${D3.cx},${D3.cy - 60}`} at={K7.from + 4} dur={30} color={AMBER_INK} width={3.5} dash="9 7" />
				<path d={`M${D3.cx - 12},${D3.cy - 80} L${D3.cx},${D3.cy - 60} L${D3.cx + 12},${D3.cy - 80}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" opacity={prog(f, K7.from + 30, 8)} />
				{f >= K7.grow ? <circle cx={D3.cx} cy={D3.cy} r={8 + 30 * smooth(prog(f, K7.grow, 40))} fill="#f4ecd6" stroke="#9a8556" strokeWidth={3} /> : null}
				<Lbl x={D3.cx} y={890} text="picked from dish 1:" size={28} color={INK} anchor="middle" at={K7.grow + 20} />
				<Lbl x={D3.cx} y={926} text="resistant" size={32} color={AMBER_INK} anchor="middle" at={K7.grow + 24} />
				<Chip x={560} y={960} text="already there?" at={K7.first - 6} size={36} />
				<Tick x={870} y={990} at={K7.first + 8} s={34} />
				<MistakeChip x={1000} y={962} text="made by penicillin?" at={K7.first - 6} cross={K7.first + 14} size={32} />
			</Overlay>
		</>
	);
};

// ---------- 8. What penicillin actually does ----------
const K8 = cues(S('selection'), {
	what: 'So what does penicillin actually do', kills: 'It kills the bacteria', few: 'The few that do carry one', surv: 'survive and keep dividing', each: 'each daughter cell inherits', days: 'Within days',
	most: 'most of the population can be resistant', little: 'too little penicillin', spares: 'spares cells that are only slightly resistant', didnt: "didn't create the allele", changed: 'It changed how common it is',
	natsel: 'natural selection',
});
const PART = [8, 21, 40, 57];
/** Daughters fill the slots of killed cells, nearest first, one doubling per generation (computed). */
const daughters = (() => {
	const alive = [...RES];
	const out: {slot: number; parent: number; gen: number}[] = [];
	for (let g = 0; g < 5; g++) {
		for (const p of [...alive]) {
			let best = -1, bd = 1e9;
			for (let s = 0; s < 60; s++) {
				if (alive.includes(s) || PART.includes(s)) continue;
				const d = Math.hypot(POP60[s][0] - POP60[p][0], POP60[s][1] - POP60[p][1]);
				if (d < bd) { bd = d; best = s; }
			}
			if (best < 0) break;
			alive.push(best);
			out.push({slot: best, parent: p, gen: g});
		}
	}
	return out;
})();
if (daughters.length + RES.length !== 56) throw new Error('M6 B01: selection should end with 56 resistant cells');
export const SceneSelection: React.FC = () => {
	const f = useCurrentFrame();
	const gAt = (g: number) => K8.surv + 16 + g * 40;
	const count = RES.length + daughters.filter(d => f >= gAt(d.gen) + 10).length;
	const low = prog(f, K8.little + 10, 16);
	return (
		<>
			<Heading text="What penicillin actually does" at={K8.what} size={56} />
			<Overlay>
				<DayStrip x={150} y={215} w={1000} labels={['day 0', 'day 1', 'day 2', 'day 3']} active={lerp(0, 3, prog(f, K8.surv, K8.most + 30 - K8.surv, t => t))} o={prog(f, K8.what, 12)} size={28} />
				{POP60.map(([x, y], i) => {
					const res = RES.includes(i), part = PART.includes(i);
					if (res) return <Bact key={i} cx={x} cy={y} w={BW} ring="new" r={10} glow={vis(f, K8.few, K8.most, 12)} />;
					const die = prog(f, K8.kills + 8 + (i % 10) * 3, 18);
					const revive = part ? low : 0;
					return <Bact key={i} cx={x} cy={y} w={BW} ring={part ? 'part' : undefined} r={10} ringGlow={part ? vis(f, K8.spares, K8.didnt, 12) : 0} grey={die * (1 - revive)} o={1 - 0.8 * prog(f, K8.kills + 24 + (i % 10) * 3, 18) * (1 - revive)} dy={22 * die * (1 - revive)} />;
				})}
				{daughters.map((d, k) => {
					const t = smooth(prog(f, gAt(d.gen), 18));
					if (t <= 0.01) return null;
					const [px, py] = POP60[d.parent], [sx, sy] = POP60[d.slot];
					return <Bact key={k} cx={lerp(px, sx, t)} cy={lerp(py, sy, t)} w={BW} ring="new" r={10} o={t} />;
				})}
				{/* right column */}
				<Lbl x={1290} y={340} text="no resistance allele: killed" size={30} color={GREYT} at={K8.kills + 20} />
				<FillBar x={1290} y={420} w={520} h={34} p={count / 60} o={prog(f, K8.few, 12)} label="cells with the resistance allele" size={26} />
				<Sx x={1810} y={492} text={`${count} of 60`} size={30} color={AMBER_INK} weight={800} anchor="end" at={K8.few} />
				<Lbl x={1290} y={540} text="its frequency rises" size={34} color={AMBER_INK} at={K8.most + 10} />
				<FillBar x={1290} y={640} w={420} h={30} p={0.33} o={prog(f, K8.little, 12)} label="too little penicillin" size={26} color="#d9b45a" />
				<Lbl x={1290} y={720} text="partly resistant cells survive too" size={30} color={INK} at={K8.spares} />
				<AlleleRing x={1772} y={711} r={11} kind="part" o={prog(f, K8.spares, 12)} />
				<Lbl x={1290} y={830} text="natural selection" size={54} color={INK} at={K8.natsel} />
				<Lbl x={1290} y={872} text="some survive and reproduce more," size={26} color={INK_SOFT} hand={false} at={K8.natsel + 14} />
				<Lbl x={1290} y={904} text="so their alleles become more common" size={26} color={INK_SOFT} hand={false} at={K8.natsel + 18} />
				<MistakeChip x={150} y={905} text="penicillin made the allele" at={K8.didnt} cross={K8.didnt + 30} size={30} />
				<GTag x={150} y={990} text="individuals don't change their alleles; the population's mix changes" at={K8.changed} size={22} />
				<GTag x={1060} y={990} text="Staph also share resistance genes on plasmids (B6a)" at={K8.natsel + 40} size={22} />
				{void clamp01}{void BIO_INK}{void AMBER}{void K8.each}{void K8.days}
			</Overlay>
		</>
	);
};
