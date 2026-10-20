// M6 B07 scenes 6 to 9: the tally board (about 70 new mutations scattered on a 6 billion base genome bar against
// 2^23 chromosome combinations per parent, computed), mutation as the ultimate source (a tray of alleles that each
// were once new; with mutation off, lost alleles stay lost), bacteria (clones except for new mutations, many divisions,
// plasmid transfer) and B8's deck of cards extended. No people: human numbers sit beside a gamete dish and a coded bar.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {rng} from '../../kit';
import {DrawPath, Heading, Overlay, PlateB, Sx, Ticker} from '../bio-m5-b13/shared';
import {Card, pow2} from '../bio-m5-b08/shared';
import {AlleleRing, Bact, PoolBasin, basinSlots, popGrid} from '../bio-m6-b01/parts';
import {S} from './common';
import {PLATES} from './assets';
import {ABead, AMBER, AMBER_INK, BIO_INK, Brace, Chromatid, DotStrip, EDGE, Finch, GREYT, GREY_INK, INK, INK_SOFT, SrcChip, Tg, TickG, lerp, platePt, prog, smooth, vis} from './parts';

const FP = {deep: PLATES.deep, slender: PLATES.slender};

// ---------- 6. How much does each add in one generation? ----------
const K6 = cues(S('one-generation'), {so: 'So how much', humans: 'In humans', each: 'Each child carries', sixty: 'sixty to seventy', six: 'six billion bases', meanwhile: 'Meanwhile', millions: 'millions of places', eight: 'more than eight million', before: 'before crossing over', mult: 'multiplies', siblings: 'two siblings differ', almost: 'almost all of those'});
const COMB = pow2(23);
if (COMB !== 8388608) throw new Error('2^23 check failed');
const TICKS = (() => { const r = rng(71); return Array.from({length: 70}, () => r()); })();
const PAIR_R = ['A', 'B', 'c', 'D', 'F', 'g', 'H', 'j'];
const PAIR_T = ['A', 'b', 'c', 'd', 'F', 'G', 'H', 'J'];
const PAIR_Y = [0.07, 0.17, 0.27, 0.37, 0.63, 0.73, 0.83, 0.93];
export const SceneOneGen: React.FC = () => {
	const f = useCurrentFrame();
	const leftDim = 1 - 0.6 * prog(f, K6.almost, 14);
	const glow = prog(f, K6.almost, 14);
	const BX0 = 170, BX1 = 850, BY = 520;
	return (
		<>
			<Heading text="How much in one generation?" at={4} size={60} />
			<Overlay>
				{/* left: new mutations in one child */}
				<g opacity={leftDim * prog(f, K6.humans, 14)}>
					<rect x={110} y={230} width={800} height={580} rx={24} fill="#fffdf8" stroke={EDGE} strokeWidth={3} />
					<Sx x={510} y={300} text="new mutations per child" size={38} color={INK} hand anchor="middle" />
					<rect x={BX0} y={BY - 12} width={BX1 - BX0} height={24} rx={12} fill="#ece3d1" stroke={INK_SOFT} strokeWidth={2} />
					{TICKS.map((t, k) => <line key={k} x1={lerp(BX0 + 8, BX1 - 8, t)} y1={BY - 20} x2={lerp(BX0 + 8, BX1 - 8, t)} y2={BY + 20} stroke={AMBER} strokeWidth={2.2} opacity={prog(f, K6.sixty + k * 0.7, 6)} />)}
					<Sx x={510} y={680} text="about 60 to 70" size={64} color={AMBER_INK} weight={800} anchor="middle" at={K6.sixty + 10} />
				</g>
				<Tg x={510} y={455} text="about 6 billion bases" at={K6.six} out={K6.meanwhile + 20} anchor="middle" size={36} color={INK_SOFT} />
				<Tg x={510} y={750} text="new in this child" at={K6.sixty + 30} out={K6.almost + 20} anchor="middle" size={36} />
				{/* right: combinations per parent */}
				<g opacity={prog(f, K6.meanwhile, 14)}>
					<rect x={1010} y={230} width={800} height={580} rx={24} fill={glow > 0.5 ? '#fff6e0' : '#fffdf8'} stroke={glow > 0.5 ? AMBER : EDGE} strokeWidth={glow > 0.5 ? 4 : 3} />
					<Sx x={1410} y={300} text="combinations per parent" size={38} color={INK} hand anchor="middle" />
					<PlateB p={PLATES.dish} cx={1170} cy={470} w={210} />
				</g>
				<g opacity={prog(f, K6.millions, 12)}>
					<Chromatid x={1420} y={340} L={290} w={30} pieces={[{t0: 0, t1: 1, set: 'rose'}]} loci={PAIR_R.map((l, i) => ({t: PAIR_Y[i], l}))} beadR={12} />
					<Chromatid x={1480} y={340} L={290} w={30} pieces={[{t0: 0, t1: 1, set: 'teal'}]} loci={PAIR_T.map((l, i) => ({t: PAIR_Y[i], l}))} beadR={12} />
					{PAIR_R.map((l, i) => (l !== PAIR_T[i] ? <circle key={i} cx={1550} cy={340 + PAIR_Y[i] * 290} r={5} fill={INK_SOFT} opacity={prog(f, K6.millions + 10 + i * 3, 8)} /> : null))}
				</g>
				<Ticker x={1410} y={700} from={0} to={COMB} a={K6.eight} b={K6.eight + 40} size={56} anchor="middle" prefix="2^{23} = " at={K6.eight - 4} />
				<g opacity={prog(f, K6.before, 12)}>
					<path d="M1640,450 a26,26 0 1 1 -8,-18" fill="none" stroke={INK_SOFT} strokeWidth={4} />
					<path d="M1626,420 l8,12 l-14,4" fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
					<Sx x={1656} y={462} text="+ more" size={32} color={INK_SOFT} hand />
				</g>
				<SrcChip x={1410} y={770} text="× the other parent" size={34} o={prog(f, K6.mult, 12)} lit={1} />
				<Tg x={960} y={910} text="one generation: almost all from reshuffling" at={K6.almost + 6} anchor="middle" size={54} />
				{void K6.so}{void K6.each}{void K6.siblings}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- 7. Why mutation still matters ----------
const K7 = cues(S('ultimate-source'), {but: 'But remember', every: 'every allele being reshuffled', first: 'first appeared as a mutation', why: "That's why mutation", ultimate: 'ultimate source', immediate: 'immediate source', stopped: 'If mutation stopped', dealing: 'keep dealing new combinations', fixed: 'a fixed set', any: 'Any allele the population lost', lost: 'lost by chance', never: 'never be made again', finches: "The finches' beak alleles"});
const TRAY = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g'];
const LOST = [3, 10];
const PB0 = {x: 200, y: 380, w: 700, h: 330};
export const SceneUltimate: React.FC = () => {
	const f = useCurrentFrame();
	const slots: [number, number][] = TRAY.map((_, i) => [PB0.x + 110 + (i % 7) * 80, PB0.y + 70 + Math.floor(i / 7) * 120 + (i % 2) * 22]);
	// reshuffle: beads drift to a permuted slot while mutation is off
	const perm = [5, 0, 9, 13, 2, 7, 11, 1, 12, 4, 8, 3, 6, 10];
	const mix = smooth(prog(f, K7.dealing, 40)) * (1 - smooth(prog(f, K7.dealing + 90, 40)));
	const goneO = (i: number) => (LOST.includes(i) ? 1 - prog(f, K7.lost + 10 + LOST.indexOf(i) * 10, 16) : 1);
	const mini = prog(f, K7.finches, 16);
	return (
		<>
			<Heading text="Why mutation still matters" at={4} size={60} />
			<Overlay>
				<PoolBasin x={PB0.x} y={PB0.y} w={PB0.w} h={PB0.h} o={prog(f, 2, 14)} />
				{TRAY.map((l, i) => {
					const [ax, ay] = slots[i];
					const [bx, by] = slots[perm[i]];
					const x = lerp(ax, bx, mix), y = lerp(ay, by, mix) - Math.sin(mix * Math.PI) * 30 * (i % 2 ? 1 : -1);
					const flash = vis(f, K7.first + 6 + i * 6, K7.first + 22 + i * 6, 6);
					return (
						<g key={i}>
							{LOST.includes(i) ? <ABead x={ax} y={ay} l="" r={22} ghost o={prog(f, K7.lost + 24, 12)} /> : null}
							<ABead x={x} y={y} l={l} r={22} amber={flash > 0.5} glow={flash} o={goneO(i) * prog(f, 6 + i, 10)} />
						</g>
					);
				})}
				<Tg x={550} y={330} text="every allele: once a new mutation" at={K7.first} out={K7.ultimate} anchor="middle" size={40} />
				<Sx x={1020} y={450} text="mutation: ultimate source" size={50} color={AMBER_INK} hand at={K7.ultimate} />
				<Sx x={1020} y={530} text="meiosis and fertilisation:" size={46} color={BIO_INK} hand at={K7.immediate - 6} />
				<Sx x={1020} y={584} text="immediate source" size={46} color={BIO_INK} hand at={K7.immediate} />
				{/* the switch */}
				<g opacity={vis(f, K7.stopped, K7.lost + 20, 12)}>
					<rect x={1020} y={655} width={90} height={44} rx={22} fill="#eceeef" stroke={GREYT} strokeWidth={3} />
					<circle cx={1020 + 22 + 46 * (1 - prog(f, K7.stopped + 8, 10))} cy={677} r={16} fill={prog(f, K7.stopped + 8, 10) > 0.5 ? GREYT : AMBER} />
					<Sx x={1130} y={690} text="mutation: off" size={38} color={GREY_INK} hand />
				</g>
				<Tg x={550} y={800} text="lost alleles not made again" at={K7.lost + 26} out={K7.finches} anchor="middle" size={42} />
				{/* the island board returns small */}
				<g opacity={mini}>
					<Finch deep cx={1240} cy={790} w={130} plates={FP} />
					<DotStrip x0={1360} x1={1800} y={845} dots={[0.4, 0.53, 0.6, 0.66, 0.72, 0.8, 0.88].map(v => ({v}))} r={8} />
					<DotStrip x0={1360} x1={1800} y={905} dots={[0.2, 0.35, 0.5, 0.62, 0.7, 0.82, 0.9].map(v => ({v}))} r={8} />
					<DrawPath d="M1350,915 C1150,1000 900,990 700,945" at={K7.finches + 10} dur={30} color={AMBER} width={4} dash="6 8" />
				</g>
				<Tg x={680} y={945} text="past mutations" at={K7.finches + 34} anchor="end" size={40} />
				{void K7.but}{void K7.every}{void K7.why}{void K7.fixed}{void K7.any}{void K7.never}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 8. Without meiosis or fertilisation ----------
const K8 = cues(S('asexual'), {what: 'What about organisms', bact: 'A bacterium copies', splits: 'splits in two', clones: 'are clones', except: 'except for any new mutations', huge: 'huge numbers', pick: 'pick up genes', plasmids: 'on plasmids', asex: 'reproduce asexually', mut: 'mutation and gene transfer', not: 'not from meiosis'});
const GEN: {x: number; ys: number[]; w: number}[] = [
	{x: 230, ys: [560], w: 170},
	{x: 500, ys: [420, 700], w: 140},
	{x: 770, ys: [350, 490, 630, 770], w: 116},
	{x: 1040, ys: [315, 385, 455, 525, 595, 665, 735, 805], w: 92},
];
const RINGED = (g: number, j: number) => (g === 2 && j === 1) || (g === 3 && (j === 2 || j === 3));
const FIELD = popGrid(36, 6, 1290, 330, 88, 74, 9, 0.35);
const FIELD_RING = [4, 13, 22, 31];
export const SceneAsexual: React.FC = () => {
	const f = useCurrentFrame();
	const genAt = [K8.bact, K8.splits + 6, K8.splits + 40, K8.clones + 4];
	const treeO = 1 - 0.65 * prog(f, K8.huge, 14);
	const fieldO = prog(f, K8.huge + 6, 10) * (1 - prog(f, K8.pick, 14));
	const slide = smooth(prog(f, K8.plasmids, 30));
	const [px, py] = platePt(PLATES.plasmid, 1360, 520, 320, 1164, 948);
	const nx = 1700, ny = 520;
	return (
		<>
			<Heading text="Without meiosis or fertilisation" at={4} size={60} />
			<Overlay>
				<g opacity={treeO}>
					{GEN.map((g, gi) => g.ys.map((y, j) => {
						const o = prog(f, genAt[gi], 14);
						const parent = gi > 0 ? GEN[gi - 1] : null;
						const py0 = parent ? parent.ys[j >> 1] : y;
						const yy = lerp(py0, y, smooth(o));
						const xx = parent ? lerp(parent.x, g.x, smooth(o)) : g.x;
						const ring = RINGED(gi, j);
						const ringO = gi === 2 ? prog(f, K8.except + 10, 12) : prog(f, Math.max(K8.except + 30, genAt[3]), 12);
						return (
							<g key={gi + '-' + j} opacity={o}>
								{parent ? <line x1={parent.x + parent.w * 0.45} y1={py0} x2={xx - g.w * 0.62} y2={yy} stroke={INK_SOFT} strokeWidth={2} opacity={0.6} /> : null}
								<Bact cx={xx} cy={yy} w={g.w} ring={ring ? 'new' : undefined} ringO={ring ? ringO : 0} />
							</g>
						);
					}))}
				</g>
				<Tg x={1140} y={260} text="clones" at={K8.clones + 10} out={K8.huge} size={42} />
				{FIELD.map(([x, y], k) => (
					<g key={k} opacity={fieldO * prog(f, K8.huge + 6 + k * 1.2, 6)}>
						<Bact cx={x} cy={y} w={62} ring={FIELD_RING.includes(k) ? 'new' : undefined} r={8} />
					</g>
				))}
				<Tg x={1540} y={880} text="many divisions: many chances" at={K8.huge + 20} out={K8.pick} anchor="middle" size={40} />
				{/* gene transfer */}
				<g opacity={prog(f, K8.pick, 14)}>
					<PlateB p={PLATES.plasmid} cx={1360} cy={520} w={320} />
					<Bact cx={nx} cy={ny} w={230} />
				</g>
				{f >= K8.plasmids ? <circle cx={lerp(px, nx - 40, slide)} cy={lerp(py, ny + 6, slide) - Math.sin(slide * Math.PI) * 60} r={14} fill="none" stroke={TEAL_PL} strokeWidth={5} opacity={prog(f, K8.plasmids, 8)} /> : null}
				<Sx x={160} y={940} text="asexual: no meiosis, no fertilisation" size={44} color={INK} hand at={K8.asex} />
				<TickG x={760} y={928} at={K8.not + 6} s={40} />
				<SrcChip x={1100} y={926} text="mutation" anchor="start" lit={1} o={prog(f, K8.mut, 12)} icon={<AlleleRing x={0} y={0} r={13} kind="new" />} />
				<SrcChip x={1400} y={926} text="gene transfer" anchor="start" lit={1} o={prog(f, K8.mut + 14, 12)} icon={<circle r={13} fill="none" stroke={TEAL_PL} strokeWidth={4} />} />
				{void K8.what}{void AMBER}
			</Overlay>
		</>
	);
};
const TEAL_PL = '#3c8f9a';

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {heres: "Here's a way", deck: 'deck of cards', prints: 'Mutation prints', deals: 'Meiosis deals', puts: 'fertilisation puts', one: 'In one generation', dealing: 'from the dealing', long: 'over a long time', every: 'every card was once'});
const HAND1 = ['A', 'b', 'C'], HAND2 = ['a', 'B', 'c'];
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const dimL = 1 - 0.6 * prog(f, K9.one, 14);
	const deal = smooth(prog(f, K9.deals + 6, 30));
	const join = smooth(prog(f, K9.puts + 10, 30));
	const DX = 280, DY = 790;
	return (
		<>
			<Heading text="The deck of cards" at={K9.heres} size={60} />
			<Overlay>
				<g opacity={dimL}>
					<Sx x={200} y={320} text="Mutation: prints a new card" size={54} color={AMBER_INK} hand at={K9.prints} />
					<Sx x={200} y={410} text="Meiosis: deals each gamete a hand" size={54} color={INK} hand at={K9.deals} />
					<Sx x={200} y={500} text="Fertilisation: two hands together" size={54} color={INK} hand at={K9.puts} />
				</g>
				{/* the deck */}
				<g opacity={prog(f, K9.deck, 14)}>
					{[0, 1, 2, 3, 4].map(k => <Card key={k} x={DX - 8 + k * 4} y={DY + 8 - k * 4} t="" />)}
					<Card x={DX + 12} y={DY - 12} t="C" amber={prog(f, K9.prints + 8, 8)} />
				</g>
				{/* the two hands */}
				{HAND1.map((t, k) => <Card key={'h1' + k} x={lerp(DX, lerp(700, 860, join) + k * 70, deal)} y={lerp(DY, DY, deal)} t={t} rot={(k - 1) * 8 * deal} o={deal} amber={t === 'C' ? 1 : 0} />)}
				{HAND2.map((t, k) => <Card key={'h2' + k} x={lerp(DX, lerp(1240, 1080, join) + k * 70, deal)} y={DY} t={t} rot={(k - 1) * 8 * deal} o={deal} />)}
				<Brace x1={790} x2={1290} y={700} at={K9.one + 6} label="one generation: the dealing" size={46} />
				<Brace x1={200} x2={380} y={880} at={K9.long + 6} down label="" size={40} />
				<Sx x={160} y={950} text="long term: every card was once new" size={46} color={AMBER_INK} hand at={K9.long + 14} />
				{void K9.dealing}{void K9.every}
			</Overlay>
		</>
	);
};
