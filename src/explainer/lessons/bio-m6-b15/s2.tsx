// M6 B15 scenes 5 to 9: outcomes, reach (offspring of the chosen parents on both sides; one bull's straw reaching farms
// across the world map; hand pollination flower by flower; hybrid maize seed fields with tassels removed from the seed
// rows and wind carrying pollen from the chosen rows); the gene pool (ten thousand cows and five bulls: every calf has
// one of five fathers, the ring cluster narrows, half-sibling arcs, a carrier bull's recessive allele pairs up); the
// choice, not the method (many or imported bulls widen it; embryo transfer narrows from the mothers' side; a crop cross
// makes new combinations, one variety everywhere narrows); writing a compare; memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {GreyCross, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {BoardTop} from './s1';
import {
	AMBER, AMBER_INK, CARD, EDGE, Embryos, FlowerG, GREYT, GREY_INK, INK, INK_SOFT, MarkText, PLATES, Pill, Pl, PlC, PollenDot, RAIL, ROWS, ReachMap, Rg, RingCluster,
	StrawG, TOP, Wisp, clamp01, clusterPt, colsAt, lerp, platePt, prog, railY, smooth, vis,
} from './parts';
import type {RK} from './parts';

const C0 = colsAt(0);

// ---------- 5. Outcomes: reach ----------
const K5 = cues(S('reach'), {outcomes: 'Now the outcomes', both: 'Both give offspring', reach: ['reach', 1], frozen: 'frozen semen keeps', tens: 'tens of thousands', flower: 'flower by flower', seed: 'Seed companies control', hybrid: 'hybrid maize seed', tassels: 'pollen-making tassels', removed: 'are removed from', wind: 'wind carries pollen'});
export const SceneReach: React.FC = () => {
	const f = useCurrentFrame();
	const rightLit = prog(f, K5.flower - 6, 12);
	const leftDim = prog(f, K5.flower, 12);
	const mz = {cx: 1475, cy: 660, w: 560};
	const M = (u: [number, number]) => platePt(PLATES.maize, mz.cx, mz.cy, mz.w, u[0], u[1]);
	const seedRow = M([1240, 640]);
	const brushO = vis(f, K5.flower - 6, K5.hybrid, 12);
	return (
		<>
			<Heading text="Outcomes: reach" at={4} size={60} />
			<Overlay>
				<BoardTop n={4} last={prog(f, K5.outcomes, 14)} active={3} lit={[1 - 0.7 * leftDim, 0.3 + 0.7 * Math.max(rightLit, 1 - prog(f, K5.frozen, 10))]} />
				<Pill x={C0[0].cx + 360} y={TOP + 6} text="offspring of the chosen parents" size={30} anchor="middle" o={vis(f, K5.both, K5.frozen + 20, 10)} />
				<Pl p={PLATES.calf} cx={C0[0].cx} cy={440} w={150} o={vis(f, K5.both + 6, K5.frozen, 10)} />
				<g opacity={vis(f, K5.both + 12, K5.flower - 6, 10)}>
					{[0, 1, 2].map(i => <ellipse key={i} cx={C0[1].cx - 30 + i * 30} cy={440 + (i % 2) * 8} rx={13} ry={9} fill="#d9b86a" stroke="#9a7a1f" strokeWidth={2.5} />)}
					<Sx x={C0[1].cx} y={490} text="seeds" size={26} color={GREY_INK} hand anchor="middle" />
				</g>
				{/* one bull's straw reaches farms across the world */}
				<g opacity={1 - 0.6 * leftDim}>
					<ReachMap cx={C0[0].cx} cy={620} w={640} t={prog(f, K5.frozen, 80, x => x)} calves={prog(f, K5.tens, 50, x => x)} o={prog(f, K5.frozen - 6, 12)} />
				</g>
				<Pill x={430} y={900} text="one bull: tens of thousands of calves" size={30} o={vis(f, K5.tens + 10, K5.flower, 10)} />
				{/* hand pollination, flower by flower */}
				<g opacity={brushO}>
					<Pl p={PLATES.brush} cx={1260} cy={500} w={180} />
					{[0, 1, 2, 3].map(i => <FlowerG key={i} x={1430 + i * 100} y={500} r={26} lit={vis(f, K5.flower + 8 + i * 14, K5.flower + 22 + i * 14, 4)} />)}
				</g>
				<Pill x={1150} y={900} text="flower by flower" size={30} o={vis(f, K5.flower + 10, K5.hybrid, 10)} />
				{/* hybrid seed fields: tassels off the seed rows, wind carries the chosen pollen */}
				<Pl p={PLATES.maize} cx={mz.cx} cy={mz.cy} w={mz.w} o={prog(f, K5.hybrid, 14)} />
				<ScribbleRing cx={seedRow[0]} cy={seedRow[1]} rx={70} ry={40} at={K5.removed} out={K5.wind + 60} seed={6} />
				<Sx x={seedRow[0] + 30} y={seedRow[1] - 56} text="seed rows: tassels removed" size={26} color={GREY_INK} hand anchor="middle" at={K5.removed + 8} out={K5.wind + 70} />
				{[0, 1, 2].map(k => {
					const t = prog(f, K5.wind + k * 12, 50, x => x);
					const a = M([420 + k * 140, 320]);
					return (
						<g key={k} opacity={vis(f, K5.wind + k * 12, K5.wind + k * 12 + 50, 6)}>
							<Wisp x={lerp(a[0], seedRow[0] - 40, t)} y={lerp(a[1], seedRow[1] - 20, t)} s={0.8} />
							<PollenDot x={lerp(a[0] + 20, seedRow[0] + (k - 1) * 20, t)} y={lerp(a[1] + 20, seedRow[1] + 10, t)} r={6} />
						</g>
					);
				})}
				<Pill x={1150} y={940} text="whole fields: hybrid seed (two chosen parents)" size={28} o={prog(f, K5.wind + 30, 10)} />
				{void K5.reach}{void K5.seed}{void K5.tassels}{void INK}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- the gene pool pieces ----------
const BULL_K: RK[] = ['A', 'B', 'C', 'D', 'flow'];
const POOL0: RK[] = ['A', 'B', 'C', 'D', 'flow', 'new', 'A', 'C', 'B', 'new', 'D', 'flow'];
const calfPos = (i: number): [number, number] => [470 + (i % 10) * 50, 700 + Math.floor(i / 10) * 64];
const bullPos = (k: number): [number, number] => [480 + k * 105, 550];
/** Calf glyphs under the bulls; `fan` draws a line from each calf to its father; `grey(i)` greys a calf. */
const CalfBlock: React.FC<{fan: number; o?: number; grey?: (i: number) => number; ring?: number}> = ({fan, o = 1, grey, ring = 1}) => (
	<g opacity={o}>
		{Array.from({length: 30}, (_, i) => {
			const [x, y] = calfPos(i);
			const b = bullPos(i % 5);
			return fan > 0.01 ? <line key={`l${i}`} x1={b[0]} y1={b[1] + 30} x2={lerp(b[0], x, fan)} y2={lerp(b[1] + 30, y - 18, fan)} stroke={GREYT} strokeWidth={1.6} opacity={0.6} /> : null;
		})}
		{Array.from({length: 30}, (_, i) => {
			const [x, y] = calfPos(i);
			const g = grey ? grey(i) : 0;
			return (
				<g key={i}>
					<Pl p={PLATES.calf} cx={x} cy={y} w={44} dim={g} />
					<Rg x={x} y={y + 24} r={6} k={BULL_K[i % 5]} o={ring} />
				</g>
			);
		})}
	</g>
);

// ---------- 6. Outcomes: the gene pool ----------
const K6 = cues(S('gene-pool'), {changes: 'changes the gene pool', picture: 'Picture ten thousand', five: 'just five bulls', every: 'Every calf has', one5: 'one of five fathers', behaves: 'behaves genetically', chance: 'Chance loses alleles', related: 'more closely related', harmful: 'a harmful recessive', pair: 'pair up in calves', holstein: 'In Holstein cattle'});
export const SceneGenePool: React.FC = () => {
	const f = useCurrentFrame();
	const cols = colsAt(smooth(prog(f, 0, 24)));
	const cowsO = prog(f, K6.picture, 14) * (1 - 0.5 * prog(f, K6.every, 12));
	const keep = (i: number) => (f < K6.behaves + 10 ? true : BULL_K.includes(POOL0[i]) && !(f >= K6.chance + 10 && (i === 4 || i === 8)));
	const carrierO = prog(f, K6.harmful + 10, 12);
	const pairGrey = (i: number) => ([3, 13, 23].includes(i) ? prog(f, K6.pair + 10 + i, 12) : 0);
	return (
		<>
			<Heading text="Outcomes: the gene pool" at={4} size={60} />
			<Overlay>
				<BoardTop cols={cols} n={5} last={prog(f, K6.changes, 14)} active={4} lit={[1, 0]} />
				{/* ten thousand cows */}
				<g opacity={cowsO}>
					{Array.from({length: 20}, (_, i) => <Pl key={i} p={PLATES.cow} cx={470 + (i % 10) * 52} cy={330 + Math.floor(i / 10) * 46} w={44} />)}
					<Sx x={1020} y={360} text="10,000 cows" size={28} color={GREY_INK} hand />
				</g>
				{/* five bulls, every calf one of five fathers */}
				{BULL_K.map((k, i) => {
					const [x, y] = bullPos(i);
					return (
						<g key={i} opacity={prog(f, K6.five + i * 4, 10)}>
							<Pl p={PLATES.bull} cx={x} cy={y} w={90} />
							<Rg x={x + 40} y={y + 26} r={9} k={k} />
						</g>
					);
				})}
				<g opacity={carrierO}>
					<circle cx={bullPos(3)[0] - 34} cy={bullPos(3)[1] + 24} r={9} fill="#9aa3ab" stroke={GREY_INK} strokeWidth={2.5} />
					<Sx x={bullPos(3)[0] - 34} y={bullPos(3)[1] - 34} text="carrier" size={22} color={GREY_INK} hand anchor="middle" />
				</g>
				<CalfBlock fan={smooth(prog(f, K6.one5, 30))} o={prog(f, K6.every, 12)} grey={pairGrey} />
				{/* half-sibling arcs */}
				<g opacity={vis(f, K6.related, K6.holstein + 40, 10)}>
					{[[0, 5], [10, 15], [1, 6], [21, 26]].map(([a, b], k) => {
						const pa = calfPos(a), pb = calfPos(b);
						return <path key={k} d={`M${pa[0]},${pa[1] - 22} Q${(pa[0] + pb[0]) / 2},${pa[1] - 60} ${pb[0]},${pb[1] - 22}`} fill="none" stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" />;
					})}
				</g>
				{/* the gene pool narrows */}
				<g opacity={prog(f, K6.behaves - 10, 12)}>
					<RingCluster x={1210} y={560} kinds={POOL0} cols={4} gap={40} r={12} ringO={i => (keep(i) ? 1 : 1 - prog(f, (i === 4 || i === 8) ? K6.chance + 10 : K6.behaves + 10, 14))} />
					<Sx x={1210} y={470} text="gene pool" size={26} color={GREY_INK} hand anchor="middle" />
				</g>
				<Sx x={1210} y={680} text="effective size: about 20 animals" size={24} color={GREY_INK} hand anchor="middle" at={K6.behaves + 30} out={K6.chance} />
				<Tg x={980} y={790} text="every calf: one of five fathers" at={K6.one5 + 20} out={K6.related} size={34} />
				<Tg x={980} y={790} text="more related" at={K6.related + 10} out={K6.harmful + 30} size={34} />
				<Tg x={980} y={790} text="recessive alleles pair up" at={K6.pair + 20} out={K6.holstein + 30} size={34} />
				<Pl p={PLATES.cow} cx={1370} cy={890} w={150} o={prog(f, K6.holstein, 12)} />
				<Pill x={440} y={940} text="Holstein: disorders traced to single popular bulls" size={28} o={prog(f, K6.holstein + 10, 12)} />
				{void CARD}{void EDGE}
			</Overlay>
		</>
	);
};

// ---------- 7. The choice, not the method ----------
const K7 = cues(S('choice-not-method'), {narrowing: 'So the narrowing', many: 'many unrelated bulls', importing: 'importing it from', flow: "That's gene flow", widen: 'can widen a gene pool', fathers: 'only fathers', embryo: 'Embryo transfer', prize: 'one prize cow', mothers: 'a few mothers', crops: 'In crops, too', crossing: 'Crossing two varieties', planted: 'planted everywhere'});
const MANY_K: RK[] = ['A', 'B', 'C', 'D', 'flow', 'A', 'C', 'B', 'D', 'flow', 'C', 'A', 'D', 'B', 'flow'];
export const SceneChoice: React.FC = () => {
	const f = useCurrentFrame();
	const t = 1 - smooth(prog(f, K7.crops - 10, 24));
	const cols = colsAt(t);
	const leftO = 1 - 0.6 * prog(f, K7.crops, 12);
	const bullsO = vis(f, 0, K7.embryo, 12);
	const poolK = (i: number): RK => (i < 12 ? POOL0[i] : 'new');
	const importT = smooth(prog(f, K7.importing + 6, 40));
	const mp = {cx: 1260, cy: 390, w: 300};
	const edge = platePt(PLATES.map, mp.cx, mp.cy, mp.w, 1600, 860);
	const surrogates = [0, 1, 2, 3].map(i => [700 + i * 150, 760] as [number, number]);
	return (
		<>
			<Heading text="The choice, not the method" at={4} size={60} />
			<Overlay>
				<BoardTop cols={cols} n={5} active={4} lit={[leftO, 1 - t]} />
				<g opacity={leftO}>
					{/* many unrelated bulls */}
					<g opacity={bullsO}>
						{MANY_K.map((k, i) => {
							const x = 470 + (i % 8) * 72, y = 360 + Math.floor(i / 8) * 110;
							return (
								<g key={i} opacity={i < 5 ? 1 : prog(f, K7.many + (i - 5) * 3, 10)}>
									<Pl p={PLATES.bull} cx={x} cy={y} w={70} />
									<Rg x={x + 28} y={y + 26} r={8} k={k} />
								</g>
							);
						})}
					</g>
					<g opacity={vis(f, 0, K7.embryo, 12)}>
						<RingCluster x={830} y={720} kinds={[...POOL0, 'new', 'new']} cols={7} gap={40} r={12} kindOf={poolK} ringO={i => (i < 5 ? 1 : i < 12 ? prog(f, K7.many + 10 + i * 3, 10) : prog(f, K7.importing + 46 + (i - 12) * 6, 10))} />
						<Sx x={830} y={640} text="gene pool" size={26} color={GREY_INK} hand anchor="middle" />
						<Pl p={PLATES.map} cx={mp.cx} cy={mp.cy} w={mp.w} o={vis(f, K7.importing - 6, K7.widen + 30, 10)} />
						<StrawG x={lerp(edge[0], 900, importT)} y={lerp(edge[1], 700, importT)} w={90} frost={1} o={vis(f, K7.importing, K7.importing + 50, 8)} />
					</g>
					<Tg x={960} y={880} text="imported semen: gene flow" at={K7.flow} out={K7.embryo} size={36} />
					<Pill x={440} y={930} text="narrows or widens: depends on the choice" size={30} o={vis(f, K7.widen + 6, K7.crops, 10)} lit={1 - prog(f, K7.embryo, 10)} />
					{/* embryo transfer: one prize cow, many calves */}
					<g opacity={vis(f, K7.embryo, K7.crops + 20, 12)}>
						<Pl p={PLATES.cow} cx={540} cy={460} w={200} />
						<Rg x={640} y={500} r={11} k="D" />
						<Sx x={540} y={560} text="prize cow" size={26} color={GREY_INK} hand anchor="middle" />
						{surrogates.map(([x, y], i) => {
							const e = smooth(prog(f, K7.prize + i * 8, 30));
							return (
								<g key={i}>
									<Embryos x={lerp(600, x, e)} y={lerp(480, y - 60, e)} n={1} lostIdx={[]} o={vis(f, K7.prize + i * 8, K7.prize + i * 8 + 40, 6)} />
									<Pl p={PLATES.cow} cx={x} cy={y} w={130} dim={0.85} o={prog(f, K7.embryo + 10 + i * 4, 10)} />
									<Pl p={PLATES.calf} cx={x + 40} cy={y + 60} w={60} o={prog(f, K7.prize + 40 + i * 8, 10)} />
									<Rg x={x + 70} y={y + 84} r={7} k="D" o={prog(f, K7.prize + 40 + i * 8, 10)} />
								</g>
							);
						})}
					</g>
					<Tg x={700} y={900} text="embryo transfer: a few mothers, many calves" at={K7.prize + 30} out={K7.crops} size={34} />
				</g>
				{/* crops: a cross makes new combinations; one variety everywhere narrows */}
				<g opacity={prog(f, K7.crops, 14)}>
					<PlC p={PLATES.ear} cx={cols[1].x0 + 110} cy={430} w={90} id="b15-s7-earA" />
					<PlC p={PLATES.ear} cx={cols[1].x0 + 250} cy={430} w={90} id="b15-s7-earB" filter="hue-rotate(-25deg) saturate(1.4) brightness(0.85)" />
					<Rg x={cols[1].x0 + 110} y={545} r={11} k="A" /><Rg x={cols[1].x0 + 250} y={545} r={11} k="B" />
					{Array.from({length: 6}, (_, i) => {
						const combo: [RK, RK] = [i % 2 ? 'A' : 'B', ['C', 'D', 'flow'][i % 3] as RK];
						const one = f >= K7.planted + 10;
						return (
							<g key={i} opacity={prog(f, K7.crossing + 10 + i * 4, 10)}>
								<line x1={cols[1].x0 + 60 + i * 70} y1={700} x2={cols[1].x0 + 60 + i * 70} y2={640} stroke="#6f8a4a" strokeWidth={4} />
								<ellipse cx={cols[1].x0 + 60 + i * 70} cy={630} rx={9} ry={18} fill="#e6c97a" stroke="#9a7a1f" strokeWidth={2} />
								<Rg x={cols[1].x0 + 48 + i * 70} y={725} r={8} k={one ? 'A' : combo[0]} />
								<Rg x={cols[1].x0 + 72 + i * 70} y={725} r={8} k={one ? 'C' : combo[1]} />
							</g>
						);
					})}
				</g>
				<g opacity={prog(f, K7.planted, 14)}>
					<rect x={cols[1].x0 + 20} y={770} width={cols[1].w - 40} height={110} rx={12} fill="#f3ecd2" stroke="#b7a65f" strokeWidth={2.5} />
					{Array.from({length: 18}, (_, i) => <g key={i}><Rg x={cols[1].x0 + 52 + (i % 9) * 66} y={800 + Math.floor(i / 9) * 50} r={8} k="A" /><Rg x={cols[1].x0 + 70 + (i % 9) * 66} y={800 + Math.floor(i / 9) * 50} r={8} k="C" /></g>)}
					<Pl p={PLATES.bunch} cx={cols[1].x1 - 70} cy={700} w={110} />
				</g>
				<Tg x={cols[1].x0 + 20} y={330} text="a cross: new combinations" at={K7.crossing + 20} out={K7.planted} size={34} />
				<Pill x={cols[1].x0 + 20} y={920} text="one variety everywhere: narrows" size={30} o={prog(f, K7.planted + 20, 10)} />
				{void K7.narrowing}{void K7.fathers}{void K7.mothers}{void clusterPt}{void clamp01}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 8. Writing a compare ----------
const K8 = cues(S('writing-compare'), {compare: 'compare means', same: 'same feature', dont: "don't write a paragraph", take: 'Take one feature', both: 'Both choose the parents', semen: 'but semen is frozen', w1: ['whereas', 1], cow: "A cow's timing", w2: ['whereas', 2], reach: "insemination's reach"});
const TABLE: [string, string][] = [
	['choose the parents; no DNA changed', 'choose the parents; no DNA changed'],
	['frozen, keeps decades, sent anywhere', 'mostly used fresh (lasts hours)'],
	['timing on heat, no bull', 'anthers removed + stray pollen kept off'],
	['one bull: tens of thousands', 'flower by flower (hybrid fields)'],
	['few sires can narrow a breed fast', 'one variety everywhere narrows'],
];
export const SceneWriting: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{at: K8.both, parts: [{t: 'Both choose the parents (no DNA changed).'}], rows: [0]},
		{at: K8.semen, parts: [{t: 'Semen: frozen, sent anywhere, '}, {t: 'whereas', mark: K8.w1}, {t: ' pollen: mostly used fresh.'}], rows: [1]},
		{at: K8.cow, parts: [{t: 'Cow: timing, no bull, '}, {t: 'whereas', mark: K8.w2}, {t: ' flower: anthers removed + stray pollen kept off.'}], rows: [2]},
		{at: K8.reach, parts: [{t: "Insemination's reach can narrow a breed far faster."}], rows: [3, 4]},
	];
	const rowLit = (r: number) => lines.reduce((a, l, i) => (l.rows.includes(r) ? Math.max(a, vis(f, l.at, i < 3 ? lines[i + 1].at : 1e9, 10)) : a), 0);
	const ty = (r: number) => 310 + r * 74;
	return (
		<>
			<Heading text="Writing a compare" at={4} size={60} />
			<Overlay>
				<BoardTop n={0} divider={false} />
				{TABLE.map((row, r) => {
					const L = rowLit(r);
					return (
						<g key={r}>
							<rect x={RAIL.x0} y={ty(r)} width={1830 - RAIL.x0} height={64} rx={14} fill={L > 0.5 ? '#fff3d9' : CARD} stroke={L > 0.5 ? AMBER : EDGE} strokeWidth={L > 0.5 ? 3.5 : 2.5} />
							<Sx x={RAIL.x0 + 18} y={ty(r) + 41} text={ROWS[r]} size={24} color={L > 0.5 ? INK : GREY_INK} weight={800} />
							<Sx x={C0[0].x0 + 14} y={ty(r) + 42} text={row[0]} size={26} color={L > 0.5 ? INK : GREY_INK} hand />
							<Sx x={C0[1].x0 + 14} y={ty(r) + 42} text={row[1]} size={26} color={L > 0.5 ? INK : GREY_INK} hand />
							{L > 0.01 ? <g opacity={L}><path d={`M${C0[0].x1 - 60},${ty(r) + 32} L${C0[1].x0 - 4},${ty(r) + 32}`} stroke={AMBER_INK} strokeWidth={3} /><path d={`M${C0[1].x0 - 14},${ty(r) + 24} L${C0[1].x0 - 4},${ty(r) + 32} L${C0[1].x0 - 14},${ty(r) + 40}`} fill="none" stroke={AMBER_INK} strokeWidth={3} /></g> : null}
						</g>
					);
				})}
				{/* a paragraph on each method: crossed */}
				<g opacity={vis(f, K8.dont, K8.take + 10, 10)}>
					{[C0[0], C0[1]].map((c, i) => (
						<g key={i}>
							<rect x={c.x0 + 30} y={720} width={c.w - 60} height={230} rx={16} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
							{[0, 1, 2, 3, 4].map(k => <line key={k} x1={c.x0 + 60} y1={760 + k * 38} x2={c.x1 - 60 - (k % 2) * 80} y2={760 + k * 38} stroke={GREYT} strokeWidth={6} strokeLinecap="round" />)}
							<GreyCross x={c.cx} y={835} at={K8.dont + 20 + i * 6} s={70} />
						</g>
					))}
				</g>
				{lines.map((l, i) => (
					<g key={i} opacity={1 - 0.55 * prog(f, i < 3 ? lines[i + 1].at : 1e9, 10)}>
						<MarkText x={140} y={740 + i * 72} size={34} at={l.at} parts={l.parts} color={f >= (i < 3 ? lines[i + 1].at : 1e9) ? GREY_INK : INK} />
					</g>
				))}
				{void K8.compare}{void K8.same}{void railY}{void TOP}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {two: 'Two things', aid1: 'Same aim, different reach', both: 'both choose the parents', aid2: 'count the fathers'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two things to hold on to" at={4} size={60} />
			<Overlay>
				<Sx x={140} y={400} text="Same aim, different reach." size={74} color={INK} hand at={K9.aid1} />
				<GTag x={140} y={440} text="Pick few parents: gain speed, risk variety." at={K9.aid1 + 40} size={28} />
				<g opacity={prog(f, K9.aid1 + 10, 14)}>
					<ReachMap cx={1450} cy={380} w={360} t={1} calves={0} />
					<FlowerG x={1720} y={300} r={24} lit={0.6} />
				</g>
				<Sx x={140} y={780} text="Count the fathers, not the cows." size={74} color={AMBER_INK} hand at={K9.aid2} />
				<g opacity={prog(f, K9.aid2 + 10, 14)}>
					{Array.from({length: 12}, (_, i) => <Pl key={i} p={PLATES.cow} cx={1300 + (i % 6) * 72} cy={870 + Math.floor(i / 6) * 56} w={66} dim={0.6} />)}
					{BULL_K.map((k, i) => (
						<g key={i}>
							<line x1={1320 + i * 90} y1={736} x2={1320 + i * 90} y2={840} stroke={GREYT} strokeWidth={2} />
							<Pl p={PLATES.bull} cx={1320 + i * 90} cy={710} w={86} />
						</g>
					))}
				</g>
				{void K9.two}{void K9.both}{void MistakeChip}
			</Overlay>
		</>
	);
};
