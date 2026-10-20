// M6 B08 scenes 1 to 3: the Florida panther and the Texas puma on a coded map (eight females released in 1995; the
// population roughly tripled, an illustrative icon grid); two gene pools and one count (25 x 2 = 50 copies, 10 / 50 =
// 0.2, computed from the rings); genetic drift as a random sample each generation (a seeded scoop, coins, and seeded
// Wright-Fisher lines at N = 20 and N = 500). No measured-looking allele frequency is shown for the panthers.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {rng} from '../../kit';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {CurveArrow, popGrid, qPt} from '../bio-m6-b01/parts';
import {Term} from '../bio-m6-b03/parts';
import {GPill, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER_INK, BIO_INK, Cat, CoinRow, DriftLines, FreqBar, INK, INK_SOFT, PoolBasin, Rg, RingBasin, TopChips, US_PATH, binom, clamp01, findSet, fmt, freq,
	lerp, lostAt, prog, slotsOf, smooth, tailPt, vis,
} from './parts';
import type {RK} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {early: 'By the early 1990s', only: 'only about twenty', cut: 'cut off', many: 'Many had kinked tails', heart: 'heart defects', texas: 'In Texas', same: 'same species', y1995: 'So in 1995', eight: 'eight female Texas pumas', within: 'Within about a decade', tripled: 'roughly tripled', what: 'What had gone wrong'});
const PAN = {x: 1490, y: 470, w: 330};
const PUM = {x: 520, y: 470, w: 330};
const GRID = popGrid(75, 15, 880, 795, 38, 36, 5, 0.25);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const [tx, ty] = tailPt(PAN.x, PAN.y, PAN.w);
	const a: [number, number] = [700, 560], b: [number, number] = [1300, 560];
	const shown = f < K1.tripled ? 25 : Math.round(lerp(25, 75, prog(f, K1.tripled, 40)));
	const gridO = prog(f, K1.within, 14);
	return (
		<>
			<Heading text="What changes a gene pool" at={K1.what + 30} size={60} />
			<Overlay>
				<path d={US_PATH} fill="#efe6cf" stroke={INK_SOFT} strokeWidth={3} strokeLinejoin="round" opacity={prog(f, 2, 16) * (1 - 0.4 * prog(f, K1.what, 20))} />
				<Sx x={420} y={620} text="Texas" size={34} color={INK_SOFT} hand anchor="middle" at={K1.texas} />
				<Sx x={1600} y={760} text="Florida" size={34} color={INK_SOFT} hand anchor="middle" at={K1.early + 30} />
				<Cat x={PAN.x} y={PAN.y} w={PAN.w} o={prog(f, K1.only - 20, 16)} />
				<Tg x={PAN.x} y={350} text="about 20 to 30 left, early 1990s" at={K1.only} out={K1.texas + 10} anchor="middle" size={36} />
				<ScribbleRing cx={tx} cy={ty} rx={34} ry={34} at={K1.many + 12} out={K1.texas + 10} seed={5} />
				<Cat x={PUM.x} y={PUM.y} w={PUM.w} texas o={prog(f, K1.texas, 16)} />
				<Tg x={PUM.x} y={340} text="same species" at={K1.same} out={K1.eight + 10} anchor="middle" size={38} />
				{/* eight females travel to Florida */}
				<CurveArrow a={a} b={b} at={K1.eight - 4} bow={-110} color={INK_SOFT} width={4} dash="10 8" out={K1.tripled} />
				{Array.from({length: 8}, (_, k) => {
					const t = smooth(prog(f, K1.eight + 4 + k * 7, 50));
					const o = prog(f, K1.eight + 4 + k * 7, 8) * (1 - prog(f, K1.tripled, 12));
					const [x, y] = qPt(a, b, -110, t);
					return <Cat key={k} x={x} y={y - 26} w={64} texas o={o} />;
				})}
				<Tg x={1000} y={420} text="1995: 8 females" at={K1.eight + 10} out={K1.tripled} anchor="middle" size={40} />
				{/* illustrative growth: about 25 icons to about 75 */}
				<g opacity={gridO}>
					{GRID.slice(0, shown).map(([x, y], k) => <Cat key={k} x={x} y={y} w={32} o={k < 25 ? 1 : prog(f, K1.tripled + (k - 25) * 0.7, 6)} />)}
				</g>
				<Tg x={1160} y={1000} text="about 3 times as many" at={K1.tripled + 20} out={K1.what + 30} anchor="middle" size={40} />
				{void K1.early}{void K1.cut}{void K1.heart}{void K1.y1995}
			</Overlay>
		</>
	);
};

// ---------- 2. Two gene pools, and how to count them ----------
const K2 = cues(S('gene-pools'), {start: 'Start with their gene pools', pool: 'A gene pool is every allele', share: 'its share of all the copies', each: 'Each panther carries two copies', fifty: 'fifty copies', ten: 'If ten of those copies', point: 'zero point two', florida: 'The Florida pool was small', cut: 'cut off', wiped: 'wiped out', lost: 'lost alleles that the Texas pool', so: 'So what changes a gene pool'});
const TEX: RK[] = Array.from({length: 36}, (_, i) => (['A', 'B', 'C', 'D'] as RK[])[(i * 7 + (i >> 2)) % 4]);
const FLA: RK[] = [...Array.from({length: 18}, (_, i) => (i % 3 === 0 ? 'B' : 'A') as RK), 'ghost', 'ghost'];
// the counted gene: 25 panthers, two copies each, 10 of one allele (computed)
const COUNT: RK[] = Array.from({length: 50}, (_, i) => ([3, 8, 11, 17, 22, 26, 31, 38, 41, 47].includes(i) ? 'B' : 'A'));
const P_COUNT = freq(COUNT, 'B');
if (COUNT.length !== 25 * 2 || COUNT.filter(k => k === 'B').length !== 10 || P_COUNT !== 0.2) throw new Error('B08 scene 2 count must be 10 / 50 = 0.2');
export const SceneGenePools: React.FC = () => {
	const f = useCurrentFrame();
	const basins = 1 - vis(f, K2.share - 6, K2.florida, 14);
	const grid = vis(f, K2.share, K2.florida, 14);
	const lostO = prog(f, K2.lost, 12);
	const pulse = vis(f, K2.lost, K2.so, 10) * (0.5 + 0.5 * Math.sin((f - K2.lost) * 0.25));
	return (
		<>
			<Heading text="Two gene pools" at={4} size={60} />
			<Overlay>
				<TopChips show={prog(f, K2.so, 14)} filled={[0, 0, 0]} />
				<g opacity={basins}>
					<Cat x={480} y={330} w={210} texas o={prog(f, 4, 14)} />
					<Cat x={1420} y={370} w={170} o={prog(f, 8, 14)} />
					<RingBasin x={110} y={430} w={740} h={340} kinds={TEX} cols={9} label="Texas" o={prog(f, K2.pool, 14)} glow={i => ((TEX[i] === 'C' || TEX[i] === 'D') ? pulse : 0)} />
					<RingBasin x={1160} y={470} w={520} h={250} kinds={FLA} cols={7} label="Florida" o={prog(f, K2.pool + 10, 14)} ringO={i => (FLA[i] === 'ghost' ? lostO : 1)} />
				</g>
				{/* one gene, counted */}
				<g opacity={grid}>
					{Array.from({length: 25}, (_, k) => {
						const cx = 200 + (k % 5) * 130, cy = 290 + Math.floor(k / 5) * 128;
						return (
							<g key={k}>
								<Cat x={cx} y={cy} w={84} o={prog(f, K2.share + k, 8)} />
								{[0, 1].map(j => {
									const i = k * 2 + j;
									const hot = COUNT[i] === 'B' ? prog(f, K2.ten + 6, 10) : 0;
									return <Rg key={j} x={cx - 16 + j * 32} y={cy + 46} r={13} k={COUNT[i]} o={prog(f, K2.each + 6 + k * 0.6, 8)} glow={hot} />;
								})}
							</g>
						);
					})}
				</g>
				<Sx x={1000} y={450} text="25 × 2 = 50 copies" size={56} color={INK} weight={800} at={K2.fifty} out={K2.florida} opacity={1 - 0.55 * prog(f, K2.point, 12)} />
				<Sx x={1000} y={570} text={`10 / 50 = ${fmt(P_COUNT)}`} size={56} color={AMBER_INK} weight={800} at={K2.point - 8} out={K2.florida} />
				<FreqBar x={1000} y={620} w={360} p={P_COUNT * prog(f, K2.point, 20)} o={vis(f, K2.point, K2.florida, 12)} />
				<Rg x={1000 - 30} y={548 - 12} r={13} k="B" o={vis(f, K2.point - 8, K2.florida, 12)} />
				{/* cut off, and lost */}
				<g opacity={vis(f, K2.cut, K2.so + 40, 12)}>
					{[930, 1000, 1070].map(x => <line key={x} x1={x} y1={420} x2={x} y2={760} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 10" opacity={0.5} />)}
				</g>
				<Tg x={1000} y={850} text="no pumas in between" at={K2.cut + 10} out={K2.lost} anchor="middle" size={40} />
				<Tg x={1420} y={850} text="lost from Florida" at={K2.lost + 10} anchor="middle" size={40} />
				{void K2.start}{void K2.wiped}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 3. Genetic drift: chance ----------
const K3 = cues(S('drift'), {first: 'The first answer is chance', each: 'Each generation', only: 'only some animals happen to breed', chance: 'by chance', next: "next generation's alleles", random: 'a random sample', drift: 'genetic drift', coin: 'tossing a coin', ten: 'Toss it ten times', seven: 'seven heads', thousand: 'a thousand times', close: 'close to half', starting: 'becomes the starting point', add: 'the changes add up', small: 'in a small population', lose: 'lose it completely', whether: 'whether it helps'});
// generation 1: 20 animals, 40 copies, half B; next generations sampled with a seeded binomial
const G0: RK[] = Array.from({length: 40}, (_, i) => (i % 2 ? 'B' : 'A'));
const sampleGen = (prev: RK[], seed: number): RK[] => {
	const r = rng(seed);
	const n = binom(r, prev.length, freq(prev, 'B'));
	const out: RK[] = Array.from({length: prev.length}, (_, i) => (i < n ? 'B' : 'A'));
	for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
	return out;
};
const pick = (seed: number, ok: (g: RK[]) => boolean, prev: RK[]) => { for (let s = seed; s < seed + 500; s++) { const g = sampleGen(prev, s); if (ok(g)) return g; } throw new Error('no sample'); };
const G1 = pick(11, g => freq(g, 'B') >= 0.6 && freq(g, 'B') <= 0.65, G0);
const G2 = pick(31, g => Math.abs(freq(g, 'B') - freq(G1, 'B')) >= 0.07, G1);
const SRC1 = (() => { const r = rng(5); return G1.map(() => Math.floor(r() * 40)); })();
const BREED = [1, 4, 6, 9, 12, 15, 17, 19];
// coins: ten tosses landing 7 heads; a thousand landing close to half (seeded, checked)
const COINS = [true, true, false, true, true, false, true, true, false, true];
const THOUSAND = (() => { const r = rng(2024); let h = 0; for (let i = 0; i < 1000; i++) if (r() < 0.5) h++; return h; })();
if (COINS.filter(Boolean).length !== 7) throw new Error('coin row must land 7 heads');
if (THOUSAND < 490 || THOUSAND > 510) throw new Error('1000 tosses must land within 0.49 to 0.51, got ' + THOUSAND);
// drift lines, N = 20 and N = 500, five replicates over 50 generations from 0.5 (seed chosen so one N = 20 line is lost and one fixed)
const RUN20 = findSet(1, 20, 50, 0.5, 5, s => s.some(r => r.includes(0)) && s.some(r => r.includes(1)));
const RUN500 = findSet(7, 500, 50, 0.5, 5, s => s.every(r => Math.abs(r[50] - 0.5) < 0.12));
const LOSTLINE = RUN20.findIndex(r => r.includes(0));
const B1 = {x: 140, y: 380, w: 560, h: 230}, B2 = {x: 140, y: 720, w: 560, h: 230}, B3 = {x: 900, y: 720, w: 560, h: 230};
export const SceneDrift: React.FC = () => {
	const f = useCurrentFrame();
	const phaseAB = 1 - prog(f, K3.small - 10, 16);
	const s1 = smooth(prog(f, K3.chance + 8, 40));
	const s2 = smooth(prog(f, K3.add, 34));
	const sl0 = slotsOf(B1.x, B1.y, B1.w, B1.h, 40, 10), sl1 = slotsOf(B2.x, B2.y, B2.w, B2.h, 40, 10), sl2 = slotsOf(B3.x, B3.y, B3.w, B3.h, 40, 10);
	const draw20 = prog(f, K3.small + 6, 70, x => x), draw500 = prog(f, K3.small + 40, 50, x => x);
	const lostG = lostAt(RUN20[LOSTLINE]);
	return (
		<>
			<Heading text="Genetic drift: chance" at={4} size={60} />
			<Overlay>
				<TopChips show={1} filled={[prog(f, K3.drift + 10, 12), 0, 0]} lit={0} />
				<g opacity={phaseAB}>
					{/* 20 animals; some breed */}
					{Array.from({length: 20}, (_, k) => <Cat key={k} x={175 + k * 26} y={320} w={30} o={prog(f, K3.each + k, 6) * (f > K3.only && !BREED.includes(k) ? 0.3 : 1)} />)}
					<RingBasin x={B1.x} y={B1.y} w={B1.w} h={B1.h} kinds={G0} cols={10} o={prog(f, 4, 14)} />
					<FreqBar x={B1.x + 120} y={B1.y + B1.h + 20} w={240} p={freq(G0, 'B')} text={fmt(freq(G0, 'B'))} o={prog(f, 10, 12)} />
					<Rg x={B1.x + 92} y={B1.y + B1.h + 33} r={12} k="B" o={prog(f, 10, 12)} />
					<Tg x={B1.x + B1.w + 30} y={330} text="20 animals" at={K3.each} out={K3.drift} size={36} color={INK_SOFT} />
					{/* the sample: rings fly down into the next generation */}
					<PoolBasin x={B2.x} y={B2.y} w={B2.w} h={B2.h} o={prog(f, K3.chance, 12)} />
					{f >= K3.chance + 8 ? G1.map((k, i) => {
						const [ax, ay] = sl0[SRC1[i]], [bx, by] = sl1[i];
						const t = smooth(clamp01((f - K3.chance - 8 - i * 0.8) / 24));
						return <Rg key={i} x={lerp(ax, bx, t)} y={lerp(ay, by, t) - Math.sin(t * Math.PI) * 30} r={13} k={k} o={t > 0.01 ? 1 : 0} />;
					}) : null}
					<FreqBar x={B2.x + 120} y={B2.y + B2.h + 20} w={240} p={freq(G1, 'B')} text={fmt(freq(G1, 'B'))} o={prog(f, K3.random, 12)} />
					<Rg x={B2.x + 92} y={B2.y + B2.h + 33} r={12} k="B" o={prog(f, K3.random, 12)} />
					<Tg x={B2.x + B2.w + 30} y={790} text="next generation: a random sample" at={K3.random} out={K3.drift} size={38} />
					{/* the changes add up: a third generation from the second */}
					<PoolBasin x={B3.x} y={B3.y} w={B3.w} h={B3.h} o={prog(f, K3.add - 8, 12)} />
					{f >= K3.add ? G2.map((k, i) => {
						const [ax, ay] = sl1[(i * 7) % 40], [bx, by] = sl2[i];
						const t = smooth(clamp01((f - K3.add - i * 0.6) / 22));
						return <Rg key={i} x={lerp(ax, bx, t)} y={lerp(ay, by, t) - Math.sin(t * Math.PI) * 40} r={13} k={k} />;
					}) : null}
					<FreqBar x={B3.x + 120} y={B3.y + B3.h + 20} w={240} p={freq(G2, 'B')} text={fmt(freq(G2, 'B'))} o={prog(f, K3.add + 30, 12)} />
					<Rg x={B3.x + 92} y={B3.y + B3.h + 33} r={12} k="B" o={prog(f, K3.add + 30, 12)} />
					{/* the term */}
					<g opacity={1 - prog(f, K3.coin, 12)}>
						<Term x={820} y={480} term="genetic drift" gloss="allele frequency changes by chance" at={K3.drift} size={50} />
					</g>
					{/* coins */}
					<g opacity={1 - prog(f, K3.starting, 14)}>
						<CoinRow x={880} y={420} faces={COINS} at={K3.ten} gap={88} r={34} />
						<Sx x={1280} y={530} text="7 / 10 heads" size={46} color={AMBER_INK} hand anchor="middle" at={K3.seven + 6} />
						<Sx x={1280} y={630} text={`${THOUSAND} / 1000 heads`} size={46} color={INK} hand anchor="middle" at={K3.close - 10} />
						<Sx x={1280} y={680} text="close to half" size={34} color={INK_SOFT} hand anchor="middle" at={K3.close + 6} />
					</g>
				</g>
				{/* drift lines */}
				<g opacity={prog(f, K3.small, 14)}>
					<DriftLines x={200} y={330} w={860} h={520} runs={RUN20} draw={draw20} label="20 animals" hot={LOSTLINE} hotO={prog(f, K3.lose, 10)} />
					<DriftLines x={1260} y={330} w={540} h={520} runs={RUN500} draw={draw500} label="500 animals" />
				</g>
				{lostG > 0 ? <ScribbleRing cx={200 + (860 * lostG) / 50} cy={850} rx={34} ry={30} at={Math.max(K3.lose, K3.small + 6 + Math.round(70 * lostG / 50))} seed={9} /> : null}
				<Tg x={960} y={970} text="drift has no direction" at={K3.whether + 6} anchor="middle" size={50} />
				{void K3.first}{void K3.next}{void K3.thousand}{void GPill}{void INK}
			</Overlay>
		</>
	);
};
