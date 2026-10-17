// B8 scenes 1 to 4: the hook (one pod, different seeds), two jobs (reshuffle existing alleles or make a new one),
// tracing a parent's alleles from its own parents into four kinds of gamete, and genes on the same chromosome
// (crossing over splits them, in some cells only).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead8, AMBER, AMBER_INK, Card, Chip, Chr, Coin, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GAM_YR, GREYT, GREY_INK, GameteCell, GameteDot, GreyTag, Heading, INK,
	INK_SOFT, LP_Ab, LT_aB, MC, OVULES, Overlay, PCell, PL8, PP, PlainArrow, PlateB, Pollen, Ring, S, SEEDS, SRC, SpanBracket, Sx, TT, chipW, clamp01, gametes,
	lerp, pbPt, prog, pulse, scribbleEllipse, spaced, vis, TIP, chrBeadY, geomY,
} from './shared';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {pollen: 'Pollen from one', brushed: 'is brushed onto', another: 'the flower of another', weeks: 'A few weeks later', full: 'full of seeds', same: 'the same two parents', yet: "Yet the seeds aren't", yellow: 'Some are yellow', green: 'some green', round: 'some round', wrinkled: 'some wrinkled', why: 'So why are offspring', allele: 'carry an allele', neither: 'neither parent had'});
export const SceneHookB8: React.FC = () => {
	const f = useCurrentFrame();
	const O = {x: 1000, y: 420, w: 880};
	const pt = pbPt(PL8.ovary, O.x, O.y, O.w);
	const tip = pt(...TIP);
	const pod = prog(f, K1.weeks, 24);
	const brush = prog(f, K1.brushed - 10, 30);
	const seeds = OVULES.map(q => pt(...q));
	const row = [560, 790, 1020, 1250];
	const lands = [K1.yellow, K1.green, K1.wrinkled, K1.wrinkled + 8];
	const order = [0, 1, 2, 3];
	return (
		<>
			<Overlay>
				<PlateB p={PL8.ovary} cx={O.x} cy={O.y} w={O.w} o={prog(f, 0, 14) * (1 - pod)} />
				<PlateB p={PL8.pod} cx={O.x} cy={O.y} w={O.w} o={pod} />
				{/* a brush dusts pollen from plant 1 onto the flower of plant 2 */}
				<g opacity={vis(f, K1.pollen, K1.weeks)} transform={`translate(${lerp(tip[0] + 260, tip[0] + 60, brush)},${lerp(tip[1] - 230, tip[1] - 70, brush)}) rotate(-35)`}>
					<rect x={-8} y={-150} width={16} height={130} rx={6} fill="#b98a3e" stroke="#6d5224" strokeWidth={3} />
					<path d="M-14,-24 L14,-24 L8,20 L0,30 L-8,20 Z" fill="#e8d6a8" stroke="#8a7240" strokeWidth={3} />
				</g>
				{Array.from({length: 7}, (_, i) => {
					const t = clamp01((f - K1.brushed - i * 3) / 20);
					return <Pollen key={i} x={tip[0] + 40 - t * 40 + (i % 3) * 8} y={tip[1] - 60 + t * 50 + (i % 2) * 6} r={8} o={vis(f, K1.brushed + i * 3, K1.weeks)} />;
				})}
				<Sx x={tip[0] + 120} y={tip[1] - 200} text="pollen from plant 1" size={38} color={AMBER_INK} hand at={K1.pollen + 10} out={K1.weeks} />
				<Sx x={O.x} y={O.y + 200} text="flower of plant 2 (its ovary)" size={38} color={INK_SOFT} hand anchor="middle" at={K1.another} out={K1.weeks} />
				<Sx x={O.x} y={O.y + 200} text="a pod of seeds" size={38} color={INK_SOFT} hand anchor="middle" at={K1.full} />
				<SpanBracket x1={seeds[0][0] - 50} x2={seeds[2][0] + 50} y={O.y - 130} at={K1.same} label="same two parents" up size={36} />
				{/* the seeds are not all alike */}
				{order.map(k => {
					const t = prog(f, lands[k] - 4, 16);
					return <PlateB key={k} p={SEEDS[k].p} cx={row[k]} cy={lerp(O.y, 800, t)} w={lerp(60, 150, t)} o={t} />;
				})}
				<SpanBracket x1={row[0] - 75} x2={row[1] + 75} y={900} at={K1.round} label="round" size={36} color={INK} />
				<SpanBracket x1={row[2] - 75} x2={row[3] + 75} y={900} at={K1.wrinkled + 10} label="wrinkled" size={36} color={INK} />
				<Fade at={K1.neither - 4}>
					<circle cx={1500} cy={800} r={70} fill="none" stroke={GREYT} strokeWidth={4} strokeDasharray="12 9" />
				</Fade>
				<ABead8 x={1610} y={760} t="?" r={26} amber={1} o={prog(f, K1.neither, 12)} />
			</Overlay>
			<Heading text="Same parents, different offspring" at={K1.why} size={64} />
		</>
	);
};

// ---------- 2. Two jobs: reshuffle or make new ----------
const K2 = cues(S('two-jobs'), {four: 'four sources of genetic variation', met: "Three of them you've met", co: 'crossing over', ia: 'independent assortment', meiosis: 'in meiosis', rf: 'random fertilisation', reshuffle: 'Those three reshuffle', exist: 'already exist', dealing: 'dealing new hands', deck: 'same deck of cards', fourth: 'The fourth', mut: 'mutation is different', dna: 'changes the DNA itself', only: "it's the only one", brand: 'a brand-new allele', card: 'a new card in the deck'});
const CHIP_TOP: [number, number][] = [[250, 230], [690, 230], [1140, 230], [1600, 230]];
const CHIP_BIN: [number, number][] = [[140, 470], [140, 560], [140, 650], [1300, 470]];
export const SceneTwoJobsB8: React.FC = () => {
	const f = useCurrentFrame();
	const drop = [K2.co, K2.ia, K2.rf, K2.mut];
	const into = [K2.reshuffle + 6, K2.reshuffle + 12, K2.reshuffle + 18, K2.mut + 20];
	const split = prog(f, K2.dealing, 30);
	const deckCards = ['A', 'b', 'D', 'a', 'B', 'd'];
	return (
		<>
			<Heading text="Four sources of variation" at={4} size={60} />
			<Overlay>
				<Fade at={K2.reshuffle - 6}>
					<rect x={100} y={410} width={1080} height={360} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Sx x={130} y={448} text="reshuffle existing alleles" size={36} color={INK} hand at={K2.reshuffle - 6} />
				</Fade>
				<Fade at={K2.fourth}>
					<rect x={1260} y={410} width={560} height={360} rx={24} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Sx x={1290} y={448} text="make a new allele" size={36} color={AMBER_INK} hand at={K2.fourth} />
				</Fade>
				{SRC.map((s, i) => {
					const t = prog(f, into[i], 26);
					const w = chipW(s, 38);
					const x = lerp(CHIP_TOP[i][0] - w / 2, CHIP_BIN[i][0], t), y = lerp(CHIP_TOP[i][1], CHIP_BIN[i][1], t);
					return <g key={s} opacity={prog(f, drop[i] - 4, 10)}><Chip x={x} y={y} text={s} at={drop[i] - 4} size={38} color={i === 3 ? AMBER_INK : INK} stroke={i === 3 ? AMBER : 'rgba(60,45,20,0.3)'} /></g>;
				})}
				<GreyTag x={470} y={300} text="B5b: meiosis" at={K2.meiosis} out={K2.reshuffle} size={26} anchor="middle" />
				{/* each reshuffle chip: the same white beads change neighbours, never letters */}
				{[0, 1, 2].map(i => {
					const t = prog(f, into[i] + 20, 24);
					const y = CHIP_BIN[i][1] + 32;
					const order = [['A', 'b'], ['a', 'B'], ['D', 'd']][i];
					return (
						<g key={i} opacity={prog(f, into[i] + 14, 10)}>
							<ABead8 x={lerp(620, 670, t)} y={y} t={order[0]} r={18} />
							<ABead8 x={lerp(670, 620, t)} y={y} t={order[1]} r={18} />
						</g>
					);
				})}
				{/* the deck: same cards, new hands */}
				{deckCards.map((c, i) => {
					const hand = i % 2;
					const k = Math.floor(i / 2);
					const x = lerp(900 + i * 4, (hand ? 1000 : 760) + k * 62, split), y = lerp(560 - i * 4, 560 + Math.abs(k - 1) * 8, split);
					return <Card key={i} x={x} y={y} t={c} rot={split * (k - 1) * 8} o={prog(f, K2.dealing - 10, 12)} />;
				})}
				<Sx x={940} y={700} text="same cards, new hands" size={34} color={INK_SOFT} hand anchor="middle" at={K2.deck} />
				{/* mutation: a new allele, amber */}
				<ABead8 x={1430} y={610} t="A'" r={30} amber={prog(f, K2.brand, 1)} o={prog(f, K2.dna, 12)} />
				<Sx x={1430} y={690} text="new allele" size={36} color={AMBER_INK} hand anchor="middle" at={K2.brand + 4} />
				<Card x={1680} y={600} t="A'" amber={1} o={prog(f, K2.card, 12)} />
				<Sx x={1680} y={690} text="a new card" size={34} color={AMBER_INK} hand anchor="middle" at={K2.card + 4} />
				<GreyTag x={100} y={800} text="crossing over makes no new alleles" at={K2.only} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 3. Tracing a parent's alleles ----------
const K3 = cues(S('trace-parent'), {trace: "Let's trace", take: 'Take one parent plant', two: 'two different chromosomes', got: 'one set of chromosomes from each', capY: 'capital Y and capital R', small: 'small y and small r', makes: 'When it makes gametes', either: 'lines up either way', own: 'on its own', gYR: 'a gamete can get Y with R', gyr: 'or small y with small r', like: 'like the grandparents', newm: 'two new mixes', Yr: ['Y with small r', 2], yR: 'and small y with R', equally: 'both ways are equally likely', nothing: 'nothing mutates', quarter: 'a quarter of the gametes'});
const CELL = {x: 700, y: 500, rx: 300, ry: 150};
const CARDS = [{x: 560, col: 'P' as const, Y: 'Y', R: 'R'}, {x: 840, col: 'T' as const, Y: 'y', R: 'r'}];
const IN_CELL = {LP: 560, LT: 640, SP: 780, ST: 860};
export const GX = [380, 680, 980, 1280];
export const SceneTraceB8: React.FC = () => {
	const f = useCurrentFrame();
	const cardsO = prog(f, K3.got, 14);
	const beadsP = prog(f, K3.capY, 12), beadsT = prog(f, K3.small, 12);
	const gat = [K3.gYR, K3.gyr, K3.Yr, K3.yR];
	const gdefs: {long: ['P' | 'T', string]; short: ['P' | 'T', string]; label: string; mix: boolean}[] = [
		{long: ['P', 'Y'], short: ['P', 'R'], label: 'Y R', mix: false}, {long: ['T', 'y'], short: ['T', 'r'], label: 'y r', mix: false},
		{long: ['P', 'Y'], short: ['T', 'r'], label: 'Y r', mix: true}, {long: ['T', 'y'], short: ['P', 'R'], label: 'y R', mix: true},
	];
	if (gdefs.map(g => g.label.replace(' ', '')).sort().join() !== [...GAM_YR].sort().join()) throw new Error('trace gametes disagree with the cross logic');
	return (
		<>
			<Heading text="Tracing a parent's alleles" at={4} size={56} />
			<Overlay>
				<Sx x={96} y={262} text="its parents" size={36} color={INK_SOFT} hand at={K3.got} />
				<Sx x={96} y={508} text="parent plant" size={36} color={INK_SOFT} hand at={K3.take} />
				<Sx x={96} y={840} text="gametes" size={36} color={INK_SOFT} hand at={K3.makes} />
				{/* grandparent set-cards */}
				{CARDS.map((c, i) => (
					<g key={i} opacity={cardsO}>
						<rect x={c.x - 115} y={176} width={230} height={150} rx={18} fill="#fffdf8" stroke={c.col === 'P' ? CPL : CTE} strokeWidth={4} />
						<Chr x={c.x - 40} y={252} kind="L" col={c.col} s={0.5} top={c.Y} r={15} beadO={i === 0 ? beadsP : beadsT} />
						<Chr x={c.x + 40} y={258} kind="S" col={c.col} s={0.5} top={c.R} r={15} beadO={i === 0 ? beadsP : beadsT} />
					</g>
				))}
				{/* the parent plant's cell */}
				<g opacity={prog(f, K3.take, 14)}><PCell cx={CELL.x} cy={CELL.y} rx={CELL.rx} ry={CELL.ry} /></g>
				<Chr x={IN_CELL.LP} y={CELL.y} kind="L" col="P" s={0.8} top="Y" o={prog(f, K3.two, 12)} beadO={beadsP} />
				<Chr x={IN_CELL.LT} y={CELL.y} kind="L" col="T" s={0.8} top="y" o={prog(f, K3.two, 12)} beadO={beadsT} />
				<Chr x={IN_CELL.SP} y={CELL.y + 10} kind="S" col="P" s={0.8} top="R" o={prog(f, K3.two + 6, 12)} beadO={beadsP} />
				<Chr x={IN_CELL.ST} y={CELL.y + 10} kind="S" col="T" s={0.8} top="r" o={prog(f, K3.two + 6, 12)} beadO={beadsT} />
				{/* tracing lines from each card to its chromosomes */}
				{[[CARDS[0].x - 40, IN_CELL.LP], [CARDS[0].x + 40, IN_CELL.SP], [CARDS[1].x - 40, IN_CELL.LT], [CARDS[1].x + 40, IN_CELL.ST]].map(([a, b], i) => (
					<g key={i} opacity={prog(f, K3.got + 10 + i * 4, 12)}><line x1={a} y1={328} x2={b} y2={CELL.y - 110} stroke={i < 2 ? CPL : CTE} strokeWidth={3} strokeDasharray="2 9" strokeLinecap="round" /></g>
				))}
				{/* each pair lines up either way, on its own */}
				<Coin x={(IN_CELL.LP + IN_CELL.LT) / 2} y={CELL.y - 140} r={22} from={K3.either} to={K3.either + 40} face="P" o={vis(f, K3.either - 4, K3.gYR)} />
				<Coin x={(IN_CELL.SP + IN_CELL.ST) / 2} y={CELL.y - 100} r={22} from={K3.own} to={K3.own + 40} face="T" o={vis(f, K3.own - 4, K3.gYR)} />
				{/* the four gametes */}
				{gdefs.map((g, i) => {
					const t = prog(f, gat[i] - 4, 18);
					return (
						<g key={i}>
							<g transform={`translate(0,${(1 - t) * -60})`}><GameteCell x={GX[i]} y={830} long={g.long} short={g.short} o={t} ring={g.mix ? prog(f, K3.newm + 10, 12) : 0} /></g>
							<Sx x={GX[i]} y={982} text={g.label} size={36} color={INK} weight={800} anchor="middle" at={gat[i] + 6} />
							<Sx x={GX[i]} y={1032} text="1/4" size={34} color={AMBER_INK} weight={800} anchor="middle" at={K3.quarter + i * 4} />
						</g>
					);
				})}
				{/* like the grandparents: lines back up to the cards */}
				<g opacity={prog(f, K3.like, 12)}>
					<DrawPath d={`M${GX[0] - 60},740 C250,600 260,400 445,300`} at={K3.like} dur={24} color={CPL} width={3.5} dash="3 10" />
					<DrawPath d={`M${GX[1] + 90},760 C1080,690 1080,400 955,300`} at={K3.like + 6} dur={24} color={CTE} width={3.5} dash="3 10" />
				</g>
				<Sx x={1130} y={700} text="new combinations" size={34} color={AMBER_INK} hand anchor="middle" at={K3.newm + 14} />
				{/* the assumptions */}
				<Fade at={K3.equally}>
					<rect x={1440} y={380} width={390} height={230} rx={18} fill="#fffdf8" stroke={AMBER} strokeWidth={3} strokeDasharray="10 7" />
					<Sx x={1464} y={424} text="assume:" size={32} color={AMBER_INK} hand at={K3.equally} />
					<Sx x={1464} y={468} text="genes on different" size={28} color={INK} weight={600} at={K3.equally + 4} />
					<Sx x={1464} y={504} text="chromosomes" size={28} color={INK} weight={600} at={K3.equally + 4} />
					<Sx x={1464} y={548} text="either way equally likely" size={28} color={INK} weight={600} at={K3.equally + 8} />
					<Sx x={1464} y={590} text="no mutation" size={28} color={INK} weight={600} at={K3.nothing} />
				</Fade>
				<GreyTag x={1010} y={180} text="letters are labels only; which version shows: next video" at={K3.capY + 20} size={24} />
			</Overlay>
		</>
	);
};
export const CPL = '#a8508f', CTE = '#2b9a8e';

// ---------- 4. Genes on the same chromosome ----------
const K4 = cues(S('same-chromosome'), {what: 'But what about', same: 'the same chromosome', moves: 'Assortment moves whole chromosomes', together: 'keep their alleles together', AB: 'capital A with capital B', ab: 'small a with small b', splits: 'Crossing over is what splits', swap: 'If the swap you saw', between: 'between the two genes', Ab: 'capital A and small b', aB: 'small a with capital B', stretch: 'A swap in that stretch', some: 'only some cells', less: 'usually less common'});
const PAIR = {lp: 470, lt: 690, y: 580, s: 1.7};
const SWAP_DX = PAIR.lt - PAIR.lp;
const GD = [1100, 1300, 1530, 1730];
export const SceneSameChromB8: React.FC = () => {
	const f = useCurrentFrame();
	const t = prog(f, K4.between - 6, 70);
	const done = t >= 0.999;
	const dy = 30 * Math.sin(Math.PI * t);
	const hiNew = vis(f, K4.Ab, K4.stretch + 20);
	const shrink = prog(f, K4.less, 20);
	const ab = gametes([[['A', 'B'], ['a', 'b']]], {pair: 0, after: 0});
	const labels = [...ab.parental, ...ab.recombinant].map(spaced);
	const gat = [K4.AB, K4.ab, K4.Ab + 6, K4.aB + 6];
	return (
		<>
			<Heading text="Two genes on one chromosome" at={4} size={56} />
			<Overlay>
				<g opacity={prog(f, 0, 14)}>
					<MC x={PAIR.lp} y={PAIR.y} kind="L" a={PP} b={done ? LP_Ab : PP} pb={done ? undefined : [SWAP_DX * t, dy]} swapT={done ? 0 : t} s={PAIR.s} hiB={hiNew} />
					<MC x={PAIR.lt} y={PAIR.y} kind="L" a={done ? LT_aB : TT} b={TT} pa={done ? undefined : [-SWAP_DX * t, -dy]} swapT={done ? 0 : t} s={PAIR.s} hiA={hiNew} />
				</g>
				<Sx x={PAIR.lp - 70} y={300} text="from one parent" size={30} color={CPL} hand anchor="end" at={K4.same} />
				<Sx x={PAIR.lt + 70} y={300} text="from the other" size={30} color={CTE} hand at={K4.same} />
				{/* swap between the genes */}
				<Fade at={K4.between}>
					<line x1={PAIR.lp - 80} y1={geomY(PAIR.y, 'L', PAIR.s, 0.62)} x2={PAIR.lt + 80} y2={geomY(PAIR.y, 'L', PAIR.s, 0.62)} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 8" opacity={1 - prog(f, K4.stretch, 14)} />
				</Fade>
				<GreyTag x={580} y={870} text="crossing over (B5b)" at={K4.splits} size={28} anchor="middle" />
				{/* the gamete list */}
				<Sx x={1000} y={240} text="gametes" size={38} color={INK_SOFT} hand at={K4.together} />
				{labels.map((l, i) => {
					const isNew = i >= 2;
					const r = isNew ? lerp(62, 46, shrink) : 62;
					return <GameteDot key={i} x={GD[i]} y={340} text={l} r={r} o={prog(f, gat[i] - 4, 12)} ring={isNew ? prog(f, gat[i] + 6, 12) : 0} />;
				})}
				<SpanBracket x1={GD[0] - 70} x2={GD[1] + 70} y={430} at={K4.ab + 8} label="no crossing over: 2 kinds" size={30} />
				<Sx x={(GD[2] + GD[3]) / 2} y={480} text="new combinations," size={30} color={AMBER_INK} hand anchor="middle" at={K4.aB + 14} />
				<Sx x={(GD[2] + GD[3]) / 2} y={516} text="same alleles" size={30} color={AMBER_INK} hand anchor="middle" at={K4.aB + 18} />
				<Sx x={(GD[2] + GD[3]) / 2} y={600} text="usually less common" size={36} color={INK} hand anchor="middle" at={K4.less + 6} />
				{/* the swap happens in some cells only */}
				{Array.from({length: 8}, (_, i) => {
					const x = 1040 + i * 100, y = 830;
					const sw = i === 2 || i === 5;
					return (
						<g key={i} opacity={prog(f, K4.some - 8 + i * 3, 10)}>
							<PCell cx={x} cy={y} rx={42} ry={36} />
							<line x1={x - 8} y1={y - 22} x2={x - 8} y2={y + 22} stroke={CPL} strokeWidth={6} strokeLinecap="round" />
							<line x1={x + 8} y1={y - 22} x2={x + 8} y2={y + 22} stroke={CTE} strokeWidth={6} strokeLinecap="round" />
							{sw ? <path d={`M${x - 16},${y - 8} L${x + 16},${y + 8} M${x + 16},${y - 8} L${x - 16},${y + 8}`} stroke={AMBER} strokeWidth={5} strokeLinecap="round" /> : null}
						</g>
					);
				})}
				<Sx x={1390} y={920} text="swap here in some cells only" size={34} color={AMBER_INK} hand anchor="middle" at={K4.some + 20} />
			</Overlay>
		</>
	);
};
void AMBER; void FONT_DISPLAY; void FONT_HAND; void GREY_INK; void INK; void PlainArrow; void Ring; void TT; void pulse; void scribbleEllipse; void Card; void SRC;
