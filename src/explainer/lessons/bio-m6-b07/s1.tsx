// M6 B07 scenes 1 to 5: the 1977 drought on Daphne Major (island board: finches, the split seed plate, beak-depth dot
// strips, no numbers); the three processes and their jobs; one new allele followed through a carrier, meiosis I and
// half the gametes; crossing over and independent assortment giving it new neighbours (gamete labels computed); and
// fertilisation making a genotype that never existed (letters-only Punnett squares, computed). Cells and chromosomes
// are clean ink diagrams (owner, 20 Oct), never coded bars over a painted cell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, Heading, Overlay, PlateB, Sx} from '../bio-m5-b13/shared';
import {gametes} from '../bio-m5-b08/shared';
import {S, dur} from './common';
import {AN, CD, CdStage, SideBead, pt} from './painted';
import type {Place} from './painted';
import {PLATES} from './assets';
import {
	ABead, AMBER, AMBER_INK, BIO_INK, Brace, Chrom, Finch, GPill, GameteCell, GreyCross, HalfPlate, INK, INK_SOFT, InkCell, Punnett, ROSE, ScribbleRing,
	SrcChip, TEALC, Tg, TickG, DotStrip, blobPath, clamp01, lerp, platePt, prog, smooth, stripX, vis,
} from './parts';
import type {Loc, Piece, SDot, SetK} from './parts';

const FP = {deep: PLATES.deep, slender: PLATES.slender};

// ---------- the progress strip (scenes 3 to 5) ----------
const STEPS = ['mutation', 'meiosis', 'fertilisation'];
const stepX = [1080, 1330, 1610];
export const Progress: React.FC<{active: number; o?: number}> = ({active, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{STEPS.map((t, i) => <SrcChip key={t} x={stepX[i]} y={124} text={t} size={30} lit={active === i ? 1 : 0} o={active === i ? 1 : 0.55} />)}
	</g>
));

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {daphne: 'Daphne Major', small: 'small soft seeds', ran: 'ran out', most: 'most of the medium', surv: 'The survivors', crack: 'crack the big', inh: 'largely inherited', chicks: 'their chicks hatched', already: 'already there', where: 'So where'});
const BV = [0.22, 0.68, 0.35, 0.82, 0.15, 0.6, 0.42, 0.9, 0.3, 0.74];
const BS = [0.95, 1.04, 0.9, 1.0, 0.97, 1.08, 0.92, 1.02, 0.88, 0.99];
const SURV = [3, 5, 6, 7];
const NEXT = [0.42, 0.53, 0.6, 0.66, 0.72, 0.78, 0.85, 0.93];
const SX0 = 820, SX1 = 1720, SY0 = 400, SY1 = 300;
const ISLAND = blobPath([[150, 600], [420, 500], [900, 470], [1400, 490], [1760, 560], [1800, 800], [1600, 1010], [1000, 1040], [380, 1010], [130, 840]]);
// two staggered rows of larger birds (quality pass, 6 Nov)
const birdX = (i: number) => 300 + (i >> 1) * 330 + (i % 2) * 165;
const birdY = (i: number) => (i % 2 ? 830 : 640);
const BIRD_W = 215;
const SEED = {cx: 330, cy: 330, w: 400};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dies = (i: number) => !SURV.includes(i);
	const grey = (i: number) => (dies(i) ? prog(f, K1.most + 6 + i * 4, 16) : 0);
	const gone = (i: number) => (dies(i) ? prog(f, K1.surv + 4 + i * 3, 18) : 0);
	const flash = vis(f, K1.already, K1.already + 36, 10);
	const dots: SDot[] = BV.map((v, i) => ({v, o: dies(i) ? Math.max(1 - prog(f, K1.most + 20 + i * 4, 16), 0.45 * flash) : 1, dy: dies(i) ? 40 * prog(f, K1.most + 20 + i * 4, 16) * (1 - flash) : 0, glow: flash, amber: false}));
	const next: SDot[] = NEXT.map((v, i) => ({v, o: prog(f, K1.chicks + 8 + i * 5, 10)}));
	const [hx, hy] = platePt(PLATES.deep, birdX(7), birdY(7), BIRD_W * BS[7], 1520, 460);
	const [sx, sy] = platePt(PLATES.seeds, SEED.cx, SEED.cy, SEED.w, 1650, 1125);
	const stripO = 1 - prog(f, K1.where + 40, 14) * 0;
	return (
		<>
			<Heading text="Where each generation's variation comes from" at={K1.where + 24} size={58} />
			<Overlay>
				<path d={ISLAND} fill="#efe6cf" stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, 2, 18)} />
				<Tg x={960} y={1010} text="Daphne Major, Galápagos" at={K1.daphne} out={K1.small} size={44} color={BIO_INK} anchor="middle" />
				{BV.map((v, i) => (
					<g key={i} opacity={(1 - gone(i)) * prog(f, 6 + i * 3, 12)}>
						<Finch deep={i % 2 === 1} cx={birdX(i)} cy={birdY(i)} w={BIRD_W * BS[i]} grey={grey(i)} plates={FP} />
					</g>
				))}
				{/* the seeds: the soft half fades when the drought starts */}
				<HalfPlate p={PLATES.seeds} cx={SEED.cx} cy={SEED.cy} w={SEED.w} side="L" id="b07-seed-l" o={prog(f, 8, 14) * (1 - prog(f, K1.ran, 24))} />
				<HalfPlate p={PLATES.seeds} cx={SEED.cx} cy={SEED.cy} w={SEED.w} side="R" id="b07-seed-r" o={prog(f, 8, 14)} />
				<Tg x={330} y={520} text="1977 drought" at={K1.ran} out={K1.chicks} size={46} anchor="middle" />
				<ScribbleRing cx={hx} cy={hy} rx={70} ry={62} at={K1.crack} out={K1.inh} seed={4} />
				<ScribbleRing cx={sx} cy={sy} rx={56} ry={52} at={K1.crack + 8} out={K1.inh} seed={6} />
				{/* beak-depth strips */}
				<g opacity={stripO * prog(f, 10, 14)}>
					<DotStrip x0={SX0} x1={SX1} y={SY0} dots={dots} r={14} />
					<Sx x={SX1 - 10} y={SY0 + 46} text="deeper →" size={32} color={INK_SOFT} hand anchor="end" />
				</g>
				<Tg x={SX0 - 20} y={SY0 - 2} text="beak depth" at={14} out={K1.where} size={38} color={INK_SOFT} anchor="end" />
				<g opacity={prog(f, K1.inh, 10) * (1 - prog(f, K1.where, 12))}>
					<DrawPath d={`M${stripX(SX0, SX1, BV[7])},${SY0 - 28} L${stripX(SX0, SX1, 0.93)},${SY1 - 4}`} at={K1.inh + 4} dur={14} color={AMBER_INK} width={3} />
					<circle cx={stripX(SX0, SX1, 0.93)} cy={SY1 - 14} r={11} fill="#8a6a48" stroke={INK} strokeWidth={1.5} opacity={1 - prog(f, K1.chicks + 40, 10)} />
				</g>
				<DotStrip x0={SX0} x1={SX1} y={SY1} dots={next} r={14} lineO={prog(f, K1.chicks, 12)} o={prog(f, K1.chicks - 4, 10)} />
				<Tg x={SX0 - 20} y={SY1 - 2} text="next generation" at={K1.chicks} out={K1.where} size={38} color={INK_SOFT} anchor="end" />
				{void dur}
			</Overlay>
		</>
	);
};

// ---------- 2. Three processes, three jobs ----------
const K2 = cues(S('three-jobs'), {three: 'Three processes', mutation: 'A mutation changes', brand: 'brand-new allele', meiosis: 'Meiosis shuffles', crossing: 'crossing over', fert: 'And fertilisation joins', random: 'at random', how: 'So how do', follow: 'follow one new allele'});
export const SceneThreeJobs: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, K2.follow, 24));
	const rowO = 1 - shrink;
	const ROWS = [
		{y: 340, at: K2.mutation, name: 'mutation', job: 'makes a new allele'},
		{y: 560, at: K2.meiosis, name: 'meiosis', job: 'shuffles alleles into gametes'},
		{y: 780, at: K2.fert, name: 'fertilisation', job: 'joins two gametes'},
	];
	const amber = prog(f, K2.brand, 10);
	const meet = smooth(prog(f, K2.random - 30, 30));
	const drop = smooth(prog(f, K2.follow + 20, 24));
	return (
		<>
			<Heading text="Three processes, three jobs" at={4} size={60} />
			<Overlay>
				<g opacity={rowO}>
					{ROWS.map((r, i) => (
						<g key={i} opacity={prog(f, r.at, 14)}>
							<rect x={300} y={r.y - 90} width={1320} height={170} rx={26} fill="#fffdf8" stroke={i === 0 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={i === 0 ? 3.5 : 3} />
							<Sx x={720} y={r.y + 4} text={r.name + ':'} size={58} color={INK} weight={800} />
							<Sx x={720 + (r.name.length + 1) * 31} y={r.y + 4} text={r.job} size={50} color={BIO_INK} hand />
						</g>
					))}
					{/* icon 1: a bead turns amber */}
					<g opacity={prog(f, K2.mutation, 14)}>
						<ABead x={500} y={ROWS[0].y - 4} l="" r={34} amber={amber > 0.5} glow={vis(f, K2.brand, K2.brand + 30, 8)} />
					</g>
					{/* icon 2: the painted crossing-over pair */}
					<PlateB p={PLATES.coIcon} cx={500} cy={ROWS[1].y - 4} w={150} o={prog(f, K2.meiosis, 14)} />
					{/* icon 3: a sperm meets an egg */}
					<g opacity={prog(f, K2.fert, 14)}>
						<PlateB p={PLATES.egg} cx={540} cy={ROWS[2].y} w={120} />
						<PlateB p={PLATES.sperm} cx={lerp(360, 430, meet)} cy={ROWS[2].y} w={150} />
					</g>
				</g>
				<Progress active={-1} o={shrink} />
				<g opacity={drop}>
					<ABead x={960} y={lerp(200, 600, drop)} l="" r={40} amber glow={vis(f, K2.follow + 40, K2.follow + 80, 10)} />
				</g>
				{void K2.three}{void K2.how}{void ROSE}{void TEALC}
			</Overlay>
		</>
	);
};

// ---------- 3. One new allele, half the gametes ----------
const K3 = cues(S('half-the-gametes'), {suppose: 'Suppose one sperm', mut: 'carries a mutation', fert: 'fertilises an egg', chick: 'The chick that grows', every: 'every cell', copied: 'copied from that first one', sits: 'It sits on one chromosome', partner: 'partner chromosome', when: 'When this bird makes', meiosis: 'meiosis one separates', about: 'about half', orig: 'half get the original'});
// Painted stages (quality pass, 6 Nov): sperm meets egg, B3a's cleavage plates, then brief 88's homologous pair,
// meiosis I metaphase, anaphase, telophase and the four cells, with allele beads beside the painted chromosomes.
const PB3: Place = {cx: 960, cy: 600, size: 920};
const PRE3 = [CD('homologous-pair-loci'), CD('m1-metaphase'), CD('m1-anaphase'), CD('m1-telophase'), CD('four-cells')];
export const SceneHalf: React.FC = () => {
	const f = useCurrentFrame();
	// stage A: sperm meets egg, zygote, cleavage
	const travel = smooth(prog(f, K3.fert - 6, 30));
	const spx = lerp(330, 860, travel), spy = 560;
	const fuse = prog(f, K3.fert + 26, 14);
	const c2 = prog(f, K3.copied + 6, 12), c4 = prog(f, K3.copied + 30, 12);
	const stageA = 1 - prog(f, K3.sits - 6, 16);
	// stages B and C: painted pair, then meiosis I and the four gametes
	const pairO = prog(f, K3.sits, 16) * (1 - prog(f, K3.when + 4, 16));
	const metO = prog(f, K3.when + 4, 16) * (1 - prog(f, K3.meiosis + 4, 14));
	const anaO = prog(f, K3.meiosis + 4, 14) * (1 - prog(f, K3.meiosis + 34, 14));
	const telO = prog(f, K3.meiosis + 34, 14) * (1 - prog(f, K3.meiosis + 62, 14));
	const fourO = prog(f, K3.meiosis + 62, 14);
	const active = f < K3.when ? 0 : 1;
	return (
		<>
			<Heading text="Follow one new allele" at={4} size={60} />
			<Overlay>
				<Progress active={active} />
				{/* stage A */}
				<g opacity={stageA}>
					<PlateB p={PLATES.egg} cx={1200} cy={570} w={470} o={prog(f, K3.mut, 14) * (1 - fuse)} />
					<ABead x={1200} y={570} l="D" r={30} o={prog(f, K3.fert, 12) * (1 - fuse)} />
					<g opacity={1 - fuse}>
						<PlateB p={PLATES.sperm} cx={spx} cy={spy} w={460} o={prog(f, 4, 14)} />
						<ABead x={spx + 176} y={spy + 6} l="d" r={30} amber o={prog(f, K3.mut + 8, 12)} glow={vis(f, K3.mut + 8, K3.mut + 40, 8)} />
					</g>
					<Tg x={spx} y={spy + 150} text="sperm with a mutation" at={K3.mut + 10} out={K3.fert} anchor="middle" size={42} />
					<Tg x={1200} y={880} text="egg" at={K3.mut + 16} out={K3.fert} anchor="middle" size={42} color={INK_SOFT} />
					<g opacity={fuse}>
						<PlateB p={PLATES.cleave1} cx={1100} cy={570} w={560} o={1 - c2} />
						<PlateB p={PLATES.cleave2} cx={1100} cy={570} w={560} o={c2 * (1 - c4)} />
						<PlateB p={PLATES.cleave4} cx={1100} cy={570} w={560} o={c4} />
						<g opacity={1 - c2}>
							<ABead x={1070} y={570} l="D" r={26} />
							<ABead x={1130} y={570} l="d" r={26} amber />
						</g>
						{c4 > 0.01 ? <ellipse cx={1100} cy={570} rx={300} ry={300} fill="none" stroke={AMBER} strokeWidth={6} opacity={0.7 * c4} /> : null}
					</g>
					<Tg x={1100} y={920} text="fertilised egg: D and the new d" at={K3.fert + 34} out={K3.copied} anchor="middle" size={44} />
					<g opacity={vis(f, K3.every, K3.sits - 6, 10)}>
						<ABead x={560} y={560} l="d" r={34} amber />
						<Sx x={560} y={650} text="one copy" size={48} color={AMBER_INK} hand anchor="middle" />
						<Sx x={560} y={706} text="in every cell" size={48} color={AMBER_INK} hand anchor="middle" />
					</g>
				</g>
				{/* stages B and C: painted chromosomes, beads beside them */}
				<CdStage pl={PB3} preload={PRE3} layers={[
					{src: CD('homologous-pair-loci'), o: pairO},
					{src: CD('m1-metaphase'), o: metO},
					{src: CD('m1-anaphase'), o: anaO},
					{src: CD('m1-telophase'), o: telO},
					{src: CD('four-cells'), o: fourO},
				]} />
				<SideBead pl={PB3} at={[520, 1435]} to={[660, 1435]} l="D" o={pairO} r={32} />
				<SideBead pl={PB3} at={[1480, 1435]} to={[1340, 1435]} l="d" amber o={pairO} r={32} glow={vis(f, K3.sits + 10, K3.sits + 40, 8)} />
				<g opacity={vis(f, K3.sits + 20, K3.when, 12)}>
					<line x1={pt(PB3, 870, 1435)[0]} y1={pt(PB3, 0, 1435)[1]} x2={pt(PB3, 1130, 1435)[0]} y2={pt(PB3, 0, 1435)[1]} stroke={INK} strokeWidth={3} strokeDasharray="5 7" />
					<Sx x={960} y={pt(PB3, 0, 1690)[1]} text="same gene" size={40} color={INK} hand anchor="middle" />
				</g>
				<Tg x={pt(PB3, 90, 0)[0] - 20} y={pt(PB3, 0, 1435)[1] + 14} text="original allele" at={K3.partner + 6} out={K3.when} size={44} anchor="end" color={INK_SOFT} />
				<Tg x={pt(PB3, 1910, 0)[0] + 20} y={pt(PB3, 0, 1435)[1] + 14} text="new allele" at={K3.sits + 14} out={K3.when} size={44} />
				<SideBead pl={PB3} at={[700, 1000]} to={[845, 1000]} l="D" o={metO} r={30} />
				<SideBead pl={PB3} at={[1300, 1000]} to={[1155, 1000]} l="d" amber o={metO} r={30} />
				<SideBead pl={PB3} at={[580, 740]} to={[600, 880]} l="D" o={anaO} r={30} />
				<SideBead pl={PB3} at={[1420, 740]} to={[1420, 880]} l="d" amber o={anaO} r={30} />
				<SideBead pl={PB3} at={[575, 620]} to={[575, 760]} l="D" o={telO} r={30} />
				<SideBead pl={PB3} at={[1325, 620]} to={[1325, 760]} l="d" amber o={telO} r={30} />
				<Tg x={960} y={1000} text="meiosis I separates the partners" at={K3.meiosis + 6} out={K3.meiosis + 60} anchor="middle" size={44} />
				{[[380, 560, false], [380, 1525, false], [1360, 560, true], [1360, 1525, true]].map(([x, y, am], k) => (
					<SideBead key={k} pl={PB3} at={[x as number, y as number]} to={[(x as number) + 90, (y as number) + 20]} l={am ? 'd' : 'D'} amber={am as boolean} o={fourO * prog(f, K3.meiosis + 70 + k * 4, 10)} r={30} />
				))}
				<g opacity={prog(f, K3.about + 4, 12)}>
					<Sx x={1660} y={560} text="1/2" size={96} color={AMBER_INK} weight={800} anchor="middle" />
					<Sx x={1660} y={630} text="new allele d" size={44} color={AMBER_INK} hand anchor="middle" />
				</g>
				<g opacity={prog(f, K3.orig, 12)}>
					<Sx x={260} y={560} text="1/2" size={96} color={INK} weight={800} anchor="middle" />
					<Sx x={260} y={630} text="original D" size={44} color={INK_SOFT} hand anchor="middle" />
				</g>
				{void K3.suppose}{void K3.chick}
			</Overlay>
		</>
	);
};

// ---------- 4. New neighbours, new combinations ----------
const K4 = cues(S('new-combinations'), {doesnt: "Meiosis doesn't just", neighbours: 'new neighbours', crossing: 'In crossing over', swap: 'swap matching pieces', end: 'end up beside', indep: 'Independent assortment then', either: 'either partner of every other pair', many: 'many combinations', none: 'none of that makes'});
// gamete labels computed from the stated chromosomes (E above D on rose, e above d on teal; F rose, f teal), one crossover
const G4 = gametes([[['E', 'D'], ['e', 'd']], [['F'], ['f']]], {pair: 0, after: 0});
const WITH_D = [...G4.parental, ...G4.recombinant].filter(g => g.includes('d'));
const ORDER = ['EdF', 'edf', 'Edf', 'edF'];
if (ORDER.some(g => !WITH_D.includes(g)) || WITH_D.length !== 4) throw new Error('B07 scene 4 gamete labels must come from the cross function: ' + WITH_D.join());
const PB4: Place = {cx: 600, cy: 610, size: 860};
const PRE4 = [CD('crossing-over-a'), CD('crossing-over-b'), CD('crossing-over-c'), CD('m1-metaphase-empty'), CD('m1-metaphase')];
const XC = AN.crossing.chromatidX;
export const SceneCombos: React.FC = () => {
	const f = useCurrentFrame();
	const bO = prog(f, K4.swap - 6, 12), cO = prog(f, K4.swap + 22, 14);
	const metO = prog(f, K4.indep - 10, 16);
	const coA = 1 - metO;
	const sw = smooth(prog(f, K4.swap + 4, 34));
	// the short pair flips over (independent assortment): sx 1 -> -1 -> 1
	const flip = (q: number) => smooth(prog(f, q, 18));
	const s = flip(K4.either) * (1 - flip(K4.either + 50));
	const sx = 1 - 2 * s;
	const fade = 1 - 0.5 * prog(f, K4.many, 14);
	// beads: upper band (E or e) above each chromatid, lower band (D or d) below; the inner lower beads swap on the cue
	const upper = ['E', 'E', 'e', 'e'];
	const lowX = [XC[0], lerp(XC[1], XC[2], sw), lerp(XC[2], XC[1], sw), XC[3]];
	const lowL = ['D', 'D', 'd', 'd'];
	const ring = vis(f, K4.end, K4.indep, 10);
	const GP: [number, number][] = [[1330, 430], [1650, 430], [1330, 640], [1650, 640]];
	return (
		<>
			<Heading text="New neighbours" at={4} size={60} />
			<Overlay>
				<Progress active={1} />
				<g opacity={fade}>
					<CdStage pl={PB4} preload={PRE4} layers={[
						{src: CD('crossing-over-a'), o: coA * (1 - bO)},
						{src: CD('crossing-over-b'), o: coA * bO * (1 - cO)},
						{src: CD('crossing-over-c'), o: coA * cO},
						{src: CD('m1-metaphase-empty'), o: metO},
						{src: CD('m1-metaphase'), o: metO, box: [760, 590, 1240, 1118], feather: 16},
						{src: CD('m1-metaphase'), o: metO, box: [760, 1118, 1240, 1405], feather: 16, mirror: 1000, sx},
					]} />
					{/* crossing over: alleles beside the painted bands */}
					<g opacity={coA}>
						{XC.map((x, i) => <SideBead key={'u' + i} pl={PB4} at={[x, 225]} to={[x, 340]} l={upper[i]} r={26} o={prog(f, 8 + i * 3, 10)} />)}
						{lowX.map((x, i) => <SideBead key={'l' + i} pl={PB4} at={[x, 1745]} to={[XC[i], 1630]} l={lowL[i]} amber={lowL[i] === 'd'} r={26} o={prog(f, 14 + i * 3, 10)} />)}
						<ScribbleRing cx={pt(PB4, 1000, 1175)[0]} cy={pt(PB4, 0, 1175)[1]} rx={70} ry={60} at={K4.swap - 4} out={K4.end} seed={8} />
						<g opacity={ring}>
							<ScribbleRing cx={pt(PB4, XC[1] + 30, 0)[0]} cy={pt(PB4, 0, 990)[1]} rx={66} ry={420} at={K4.end + 4} seed={5} />
						</g>
					</g>
						{/* assortment: the F and f beads ride with the flipping short pair */}
					<g opacity={metO}>
						<SideBead pl={PB4} at={[1290, 900]} to={[1140, 900]} l="d" amber r={28} />
						<SideBead pl={PB4} at={[lerp(1290, 710, s), 1250]} to={[lerp(1140, 860, s), 1250]} l="F" r={28} />
						<SideBead pl={PB4} at={[lerp(710, 1290, s), 1250]} to={[lerp(860, 1140, s), 1250]} l="f" r={28} />
					</g>
				</g>
				<Tg x={1060} y={520} text="new neighbour:" at={K4.end + 6} out={K4.indep} size={48} />
				<Tg x={1060} y={584} text="E now beside the new d" at={K4.end + 12} out={K4.indep} size={48} />
				<Tg x={1060} y={470} text="partner chromatids swap pieces" at={K4.swap} out={K4.end} size={48} />
				<Tg x={1060} y={400} text="crossing over" at={K4.crossing} out={K4.end} size={60} />
				<Tg x={1060} y={470} text="independent assortment:" at={K4.indep} out={K4.many - 10} size={52} />
				<Tg x={1060} y={540} text="each pair can face either way" at={K4.either} out={K4.many - 10} size={48} color={INK_SOFT} />
				{/* gametes (labels computed by the cross function) */}
				{ORDER.map((g, k) => {
					const [gx, gy] = GP[k];
					const o = prog(f, K4.many - 10 + k * 8, 12);
					const drop = (1 - smooth(o)) * -40;
					return (
						<g key={g} opacity={o} transform={`translate(0,${drop})`}>
							<rect x={gx - 145} y={gy - 70} width={290} height={140} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
							<ABead x={gx - 80} y={gy - 8} l={g[0]} r={32} />
							<ABead x={gx} y={gy - 8} l="d" r={32} amber />
							<ABead x={gx + 80} y={gy - 8} l={g[2]} r={32} />
							<Sx x={gx} y={gy + 56} text="gamete" size={28} color={INK_SOFT} hand anchor="middle" />
						</g>
					);
				})}
				<Tg x={1490} y={320} text="same new allele, new combinations" at={K4.many + 20} out={K4.none} anchor="middle" size={42} />
				<GPill x={1490} y={790} text="from many meioses" at={K4.many + 34} anchor="middle" size={30} />
				<ABead x={1250} y={880} l="" r={30} ghost o={prog(f, K4.none, 10)} />
				<GreyCross x={1250} y={880} at={K4.none + 12} s={32} />
				<Tg x={1300} y={896} text="no new allele from shuffling" at={K4.none + 10} size={44} />
				{void K4.doesnt}{void K4.neighbours}{void K4.crossing}{void ROSE}{void TEALC}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 5. Fertilisation: a genotype that never existed ----------
const K5 = cues(S('fertilisation'), {then: 'Then fertilisation joins', ifc: 'If the carrier mates', lacks: 'lacks the new allele', no: 'no chick can get two copies', spreads: 'spreads to some', later: 'when two of those carriers mate', one4: 'one in four', recessive: 'recessive', hidden: 'stays hidden', never: 'never existed before'});
const CHICKS: [string, string][] = [['D', 'D'], ['D', 'd'], ['D', 'D'], ['D', 'd']];
export const SceneFert: React.FC = () => {
	const f = useCurrentFrame();
	const rowO = vis(f, K5.lacks + 20, K5.later, 12);
	const PX = 830, PY = 330, PC = 130;
	const pulse = Math.sin(clamp01((f - K5.recessive) / 30) * Math.PI * 2) * vis(f, K5.recessive, K5.hidden + 40, 6);
	return (
		<>
			<Heading text="Two copies need two carriers" at={4} size={60} />
			<Overlay>
				<Progress active={2} />
				<Finch deep cx={330} cy={540} w={300} plates={FP} o={prog(f, 2, 14)} />
				<Finch deep={false} cx={1600} cy={540} w={300} plates={FP} o={prog(f, 8, 14)} />
				<Sx x={330} y={760} text="Dd" size={50} color={INK} weight={800} anchor="middle" at={K5.ifc} />
				<Sx x={330} y={806} text="carrier" size={34} color={AMBER_INK} hand anchor="middle" at={K5.ifc + 6} out={K5.never + 10} />
				<Sx x={1600} y={760} text="DD" size={50} color={INK} weight={800} anchor="middle" at={K5.lacks} out={K5.later} />
				<Sx x={1600} y={760} text="Dd" size={50} color={INK} weight={800} anchor="middle" at={K5.later + 10} />
				<Sx x={1600} y={806} text="carrier" size={34} color={AMBER_INK} hand anchor="middle" at={K5.later + 16} out={K5.never + 10} />
				{/* carrier x DD: chicks */}
				<g opacity={rowO}>
					{CHICKS.map(([a, b], k) => {
						const x = 780 + k * 120;
						const hasD = b === 'd';
						return (
							<g key={k} opacity={prog(f, K5.lacks + 20 + k * 6, 10)}>
								<circle cx={x} cy={560} r={34} fill="#fdf8ec" stroke={INK_SOFT} strokeWidth={3} />
								{hasD ? <circle cx={x} cy={560} r={12} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, K5.spreads + 4 + k * 4, 10)} /> : null}
								<Sx x={x} y={636} text={a + b} size={38} color={INK} weight={800} anchor="middle" />
							</g>
						);
					})}
					<Tg x={960} y={430} text="chicks" at={K5.lacks + 20} anchor="middle" size={36} color={INK_SOFT} />
					<TickG x={1270} y={556} at={K5.no + 8} s={40} />
					<Tg x={960} y={720} text="no chick with two copies" at={K5.no + 10} anchor="middle" size={38} />
				</g>
				{/* carrier x carrier: letters-only Punnett square (computed) */}
				<Punnett x={PX} y={PY} c={PC} top={['D', 'd']} side={['D', 'd']} at={K5.later + 24} hot={(i, j) => (i === 1 && j === 1 ? prog(f, K5.one4, 12) : 0)} pulse={pulse} ring={{i: 1, j: 1, at: K5.never}} />
				<Sx x={PX + 2 * PC + 40} y={PY + 1.5 * PC + 18} text="1/4" size={60} color={AMBER_INK} weight={800} at={K5.one4 + 8} />
				<Tg x={PX + PC} y={PY + 2 * PC + 200} text="new genotype, existing alleles" at={K5.never + 10} anchor="middle" size={42} />
				<g opacity={vis(f, K5.never + 6, dur('fertilisation') - 10, 14)}>
					<DrawPath d={`M440,600 C620,760 ${PX + 1.5 * PC},${PY + 2 * PC + 130} ${PX + 1.5 * PC},${PY + 2 * PC + 8}`} at={K5.never + 6} dur={26} color={AMBER} width={3} dash="4 8" />
				</g>
				{void K5.then}{void ROSE}{void TEALC}{void lerp}
			</Overlay>
		</>
	);
};
