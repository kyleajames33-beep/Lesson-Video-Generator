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
const SX0 = 600, SX1 = 1400, SY0 = 400, SY1 = 300;
const ISLAND = blobPath([[150, 600], [420, 500], [900, 470], [1400, 490], [1760, 560], [1800, 800], [1600, 1010], [1000, 1040], [380, 1010], [130, 840]]);
const birdX = (i: number) => 255 + i * 157;
const BIRD_Y = 660, BIRD_W = 140;
const SEED = {cx: 960, cy: 895, w: 430};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const dies = (i: number) => !SURV.includes(i);
	const grey = (i: number) => (dies(i) ? prog(f, K1.most + 6 + i * 4, 16) : 0);
	const gone = (i: number) => (dies(i) ? prog(f, K1.surv + 4 + i * 3, 18) : 0);
	const flash = vis(f, K1.already, K1.already + 36, 10);
	const dots: SDot[] = BV.map((v, i) => ({v, o: dies(i) ? Math.max(1 - prog(f, K1.most + 20 + i * 4, 16), 0.45 * flash) : 1, dy: dies(i) ? 40 * prog(f, K1.most + 20 + i * 4, 16) * (1 - flash) : 0, glow: flash, amber: false}));
	const next: SDot[] = NEXT.map((v, i) => ({v, o: prog(f, K1.chicks + 8 + i * 5, 10)}));
	const [hx, hy] = platePt(PLATES.deep, birdX(7), BIRD_Y, BIRD_W * BS[7], 1520, 460);
	const [sx, sy] = platePt(PLATES.seeds, SEED.cx, SEED.cy, SEED.w, 1650, 1125);
	const stripO = 1 - prog(f, K1.where + 40, 14) * 0;
	return (
		<>
			<Heading text="Where each generation's variation comes from" at={K1.where + 24} size={58} />
			<Overlay>
				<path d={ISLAND} fill="#efe6cf" stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, 2, 18)} />
				<Tg x={190} y={560} text="Daphne Major, Galápagos" at={K1.daphne} out={K1.small} size={36} color={BIO_INK} />
				{BV.map((v, i) => (
					<g key={i} opacity={(1 - gone(i)) * prog(f, 6 + i * 3, 12)}>
						<Finch deep={i % 2 === 1} cx={birdX(i)} cy={BIRD_Y} w={BIRD_W * BS[i]} grey={grey(i)} plates={FP} />
					</g>
				))}
				{/* the seeds: the soft half fades when the drought starts */}
				<HalfPlate p={PLATES.seeds} cx={SEED.cx} cy={SEED.cy} w={SEED.w} side="L" id="b07-seed-l" o={prog(f, 8, 14) * (1 - prog(f, K1.ran, 24))} />
				<HalfPlate p={PLATES.seeds} cx={SEED.cx} cy={SEED.cy} w={SEED.w} side="R" id="b07-seed-r" o={prog(f, 8, 14)} />
				<Tg x={1250} y={930} text="1977 drought" at={K1.ran} out={K1.chicks} size={40} />
				<ScribbleRing cx={hx} cy={hy} rx={58} ry={52} at={K1.crack} out={K1.inh} seed={4} />
				<ScribbleRing cx={sx} cy={sy} rx={56} ry={52} at={K1.crack + 8} out={K1.inh} seed={6} />
				{/* beak-depth strips */}
				<g opacity={stripO * prog(f, 10, 14)}>
					<DotStrip x0={SX0} x1={SX1} y={SY0} dots={dots} />
					<Sx x={SX1 + 18} y={SY0 + 8} text="deeper" size={26} color={INK_SOFT} hand />
				</g>
				<Tg x={SX0 - 20} y={SY0 - 2} text="beak depth" at={14} out={K1.where} size={32} color={INK_SOFT} anchor="end" />
				<g opacity={prog(f, K1.inh, 10) * (1 - prog(f, K1.where, 12))}>
					<DrawPath d={`M${stripX(SX0, SX1, BV[7])},${SY0 - 28} L${stripX(SX0, SX1, 0.93)},${SY1 - 4}`} at={K1.inh + 4} dur={14} color={AMBER_INK} width={3} />
					<circle cx={stripX(SX0, SX1, 0.93)} cy={SY1 - 14} r={11} fill="#8a6a48" stroke={INK} strokeWidth={1.5} opacity={1 - prog(f, K1.chicks + 40, 10)} />
				</g>
				<DotStrip x0={SX0} x1={SX1} y={SY1} dots={next} lineO={prog(f, K1.chicks, 12)} o={prog(f, K1.chicks - 4, 10)} />
				<Tg x={SX0 - 20} y={SY1 - 2} text="next generation" at={K1.chicks} out={K1.where} size={32} color={INK_SOFT} anchor="end" />
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
	const sw = smooth(prog(f, K2.crossing + 6, 20));
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
					{/* icon 2: a small pair; the lower beads swap */}
					<g opacity={prog(f, K2.meiosis, 14)}>
						<Chrom x={470} y={ROWS[1].y - 70} L={140} w={34} set="rose" piecesA={[{t0: 0, t1: 0.55, set: 'rose'}, {t0: 0.55, t1: 1, set: 'rose', dx: 60 * sw}]} lociA={[{t: 0.25, l: 'E'}, {t: 0.78, l: 'D'}]} />
						<Chrom x={530} y={ROWS[1].y - 70} L={140} w={34} set="teal" piecesA={[{t0: 0, t1: 0.55, set: 'teal'}, {t0: 0.55, t1: 1, set: 'teal', dx: -60 * sw}]} lociA={[{t: 0.25, l: 'e'}, {t: 0.78, l: 'd'}]} />
					</g>
					{/* icon 3: two gametes meet */}
					<g opacity={prog(f, K2.fert, 14)}>
						<InkCell cx={lerp(410, 476, meet)} cy={ROWS[2].y} rx={36} />
						<InkCell cx={lerp(590, 524, meet)} cy={ROWS[2].y} rx={36} />
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
const LOC = 0.72;
const CLUSTER: [number, number][] = [[-52, -40], [52, -40], [-80, 30], [0, 22], [80, 30], [-40, 92], [40, 92], [0, -100]];
export const SceneHalf: React.FC = () => {
	const f = useCurrentFrame();
	// stage A: sperm meets egg, zygote, cluster
	const travel = smooth(prog(f, K3.fert - 6, 30));
	const spx = lerp(560, 860, travel), spy = 500;
	const fuse = prog(f, K3.fert + 26, 14);
	const split = clamp01((f - K3.copied) / 40);
	const nCells = split <= 0 ? 1 : split < 0.34 ? 2 : split < 0.67 ? 4 : 8;
	const stageA = 1 - prog(f, K3.sits - 6, 16);
	// stage B and C: the model cell
	const cellIn = prog(f, K3.sits, 16);
	const dupT = prog(f, K3.when + 6, 26);
	const sep = smooth(prog(f, K3.meiosis + 4, 30));
	const two = prog(f, K3.meiosis + 30, 14);
	const mii = smooth(prog(f, K3.meiosis + 52, 30));
	const roseX = lerp(lerp(905, 885, dupT), 640, sep), tealX = lerp(lerp(1015, 1035, dupT), 1280, sep);
	const chromY = 400, L = 300;
	const active = f < K3.when ? 0 : 1;
	const GX = [560, 760, 1160, 1360], GY = 860;
	const lociR: Loc[] = [{t: LOC, l: 'D'}];
	const lociT: Loc[] = [{t: LOC, l: 'd', amber: true}];
	return (
		<>
			<Heading text="Follow one new allele" at={4} size={60} />
			<Overlay>
				<Progress active={active} />
				{/* stage A */}
				<g opacity={stageA}>
					<PlateB p={PLATES.egg} cx={1000} cy={520} w={260} o={prog(f, K3.mut, 14) * (1 - fuse)} />
					<ABead x={1000} y={520} l="D" r={22} o={prog(f, K3.fert, 12) * (1 - fuse)} />
					<g opacity={1 - fuse}>
						<PlateB p={PLATES.sperm} cx={spx} cy={spy} w={240} o={prog(f, 4, 14)} />
						<ABead x={spx + 92} y={spy + 3} l="d" r={20} amber o={prog(f, K3.mut + 8, 12)} glow={vis(f, K3.mut + 8, K3.mut + 40, 8)} />
					</g>
					<DrawPath d={`M470,500 L${lerp(470, 950, travel)},${lerp(500, 520, travel)}`} at={K3.fert} dur={30} color={AMBER} width={3} dash="4 8" opacity={0.6 * (1 - prog(f, K3.chick + 30, 14))} />
					{fuse > 0.01 && nCells === 1 ? (
						<g opacity={fuse}>
							<InkCell cx={1000} cy={520} rx={110} />
							<ABead x={970} y={520} l="D" r={22} />
							<ABead x={1030} y={520} l="d" r={22} amber />
						</g>
					) : null}
					{nCells > 1 ? CLUSTER.slice(0, nCells).map(([dx, dy], k) => {
						const sc = nCells === 2 ? 1 : nCells === 4 ? 0.8 : 0.62;
						return (
							<g key={k}>
								<InkCell cx={1000 + dx * (nCells === 2 ? 0.7 : 1)} cy={520 + dy * (nCells === 2 ? 0 : 1)} rx={62 * sc} />
								<circle cx={1000 + dx * (nCells === 2 ? 0.7 : 1)} cy={520 + dy * (nCells === 2 ? 0 : 1)} r={10 * sc} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
							</g>
						);
					}) : null}
					<Tg x={1000} y={730} text="one copy in every cell" at={K3.every} out={K3.partner} anchor="middle" size={42} />
				</g>
				{/* stage B: the model cell, one pair */}
				<g opacity={cellIn * (1 - two)}>
					<InkCell cx={960} cy={550} rx={lerp(300, 470, sep)} ry={270} />
				</g>
				{two > 0.01 ? (
					<g opacity={two * (1 - 0.7 * prog(f, K3.meiosis + 60, 14))}>
						<InkCell cx={640} cy={550} rx={170} ry={210} />
						<InkCell cx={1280} cy={550} rx={170} ry={210} />
						<Sx x={960} y={560} text="meiosis I" size={34} color={INK_SOFT} hand anchor="middle" />
						{[[640, 560], [640, 760], [1280, 1160], [1280, 1360]].map(([a, b], k) => <line key={k} x1={a} y1={760} x2={b} y2={786} stroke={INK_SOFT} strokeWidth={2.5} opacity={mii} />)}
					</g>
				) : null}
				<g opacity={cellIn * (1 - prog(f, K3.meiosis + 52, 10))}>
					<Chrom x={roseX} y={chromY} L={L} set="rose" loci={lociR} dup={dupT} />
					<Chrom x={tealX} y={chromY} L={L} set="teal" loci={lociT} dup={dupT} />
					<g opacity={vis(f, K3.sits + 20, K3.when, 12)}>
						<line x1={roseX + 22} y1={chromY + LOC * L} x2={tealX - 22} y2={chromY + LOC * L} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="5 6" />
						<Sx x={960} y={chromY + L + 44} text="same gene" size={30} color={INK_SOFT} hand anchor="middle" />
					</g>
				</g>
				<Tg x={1060} y={chromY + LOC * L + 12} text="new allele" at={K3.sits + 14} out={K3.when} size={36} />
				<Tg x={860} y={chromY + LOC * L + 12} text="original allele" at={K3.partner + 6} out={K3.when} size={36} anchor="end" color={INK_SOFT} />
				{/* meiosis II: four gametes drop into a row */}
				{mii > 0.01 ? GX.map((x, k) => {
					const fromX = k < 2 ? 640 : 1280;
					const amb = k >= 2;
					return <GameteCell key={k} x={lerp(fromX, x, mii)} y={lerp(550, GY, mii)} r={74} o={mii} chroms={[{set: (amb ? 'teal' : 'rose') as SetK, loci: amb ? lociT : lociR, L: 110, cen: 0.3}]} w={36} />;
				}) : null}
				<Brace x1={1090} x2={1430} y={968} at={K3.about + 8} label="1/2 new allele" size={40} down />
				<Brace x1={490} x2={830} y={968} at={K3.orig} label="1/2 original" size={40} down />
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
const CUT = 0.6;
export const SceneCombos: React.FC = () => {
	const f = useCurrentFrame();
	const x0 = smooth(prog(f, K4.swap + 12, 34));
	const LY = 380, LL = 320, SYt = 470, SL = 190;
	const rose = 600, teal = 712;
	const shift = (teal - 24) - (rose + 24);
	const arc = Math.sin(x0 * Math.PI) * 22;
	const roseB: Piece[] = [{t0: 0, t1: CUT, set: 'rose'}, {t0: CUT, t1: 1, set: 'rose', dx: shift * x0, dy: -arc}];
	const tealA: Piece[] = [{t0: 0, t1: CUT, set: 'teal'}, {t0: CUT, t1: 1, set: 'teal', dx: -shift * x0, dy: arc}];
	const flip = (a: number) => smooth(prog(f, a, 18));
	const s = flip(K4.either) * (1 - flip(K4.either + 44));
	const sArc = Math.sin(Math.PI * clamp01(prog(f, K4.either, 18) + prog(f, K4.either + 44, 18))) * 50;
	const fx = lerp(900, 1010, s), tx = lerp(1010, 900, s);
	const coinO = vis(f, K4.either - 6, K4.either + 70, 8);
	const coinFlip = Math.abs(Math.cos((f - K4.either) * 0.25));
	const GP: [number, number][] = [[1350, 420], [1640, 420], [1350, 700], [1640, 700]];
	const fade = 1 - 0.55 * prog(f, K4.many, 14);
	return (
		<>
			<Heading text="New neighbours" at={4} size={60} />
			<Overlay>
				<Progress active={1} />
				<g opacity={fade} transform="translate(-150,0)">
					<InkCell cx={800} cy={560} rx={380} ry={300} o={prog(f, 2, 14)} />
					<g opacity={prog(f, 6, 14)}>
						<Chrom x={rose} y={LY} L={LL} set="rose" dup={1} lociA={[{t: 0.22, l: 'E'}, {t: 0.78, l: 'D'}]} lociB={[{t: 0.22, l: 'E'}, {t: 0.78, l: 'D'}]} piecesB={roseB} />
						<Chrom x={teal} y={LY} L={LL} set="teal" dup={1} lociA={[{t: 0.22, l: 'e'}, {t: 0.78, l: 'd', amber: true}]} lociB={[{t: 0.22, l: 'e'}, {t: 0.78, l: 'd', amber: true}]} piecesA={tealA} />
						<g transform={`translate(0,${-sArc})`}>
							<Chrom x={fx} y={SYt} L={SL} set="rose" dup={1} loci={[{t: 0.72, l: 'F'}]} cen={0.3} />
							<Chrom x={tx} y={SYt} L={SL} set="teal" dup={1} loci={[{t: 0.72, l: 'f'}]} cen={0.3} />
						</g>
					</g>
					{/* crossover mark between the inner chromatids */}
					<g opacity={vis(f, K4.swap - 4, K4.swap + 50, 8)}>
						<DrawPath d={`M${rose + 10},${LY + CUT * LL - 26} L${teal - 10},${LY + CUT * LL + 26} M${teal - 10},${LY + CUT * LL - 26} L${rose + 10},${LY + CUT * LL + 26}`} at={K4.swap - 4} dur={10} color={AMBER_INK} width={4} />
					</g>
					{/* coin: either way */}
					<g opacity={coinO} transform={`translate(960,${SYt - 70}) scale(${coinFlip},1)`}>
						<circle r={26} fill="#f3e2b0" stroke={AMBER_INK} strokeWidth={3} />
						<circle r={16} fill="none" stroke={AMBER_INK} strokeWidth={2} />
					</g>
				</g>
				<Tg x={300} y={920} text="new neighbour" at={K4.end} out={K4.indep} size={42} />
				<ScribbleRing cx={rose + 24 - 150} cy={LY + 0.5 * LL} rx={50} ry={190} at={K4.end + 4} out={K4.indep} seed={8} />
				<Tg x={300} y={920} text="either partner, either side" at={K4.either + 10} out={K4.many} size={42} color={INK_SOFT} />
				{/* gametes (computed labels) */}
				{ORDER.map((g, k) => {
					const [gx, gy] = GP[k];
					const o = prog(f, K4.many - 10 + k * 8, 12);
					const drop = (1 - smooth(o)) * -40;
					const recomb = g[0] === 'E';
					const longPieces: Piece[] = recomb ? [{t0: 0, t1: CUT, set: 'rose'}, {t0: CUT, t1: 1, set: 'teal'}] : [{t0: 0, t1: 1, set: 'teal'}];
					const shortSet: SetK = g[2] === 'F' ? 'rose' : 'teal';
					return (
						<g key={g} opacity={o} transform={`translate(0,${drop})`}>
							<GameteCell x={gx} y={gy} r={108} w={38} chroms={[
								{set: 'teal', pieces: longPieces, loci: [{t: 0.22, l: g[0]}, {t: 0.78, l: 'd', amber: true}], L: 160, dx: -26},
								{set: shortSet, loci: [{t: 0.72, l: g[2]}], L: 100, dx: 34, cen: 0.3},
							]} />
							<Sx x={gx} y={gy + 150} text={g.split('').join(' ')} size={36} color={INK} weight={800} anchor="middle" />
						</g>
					);
				})}
				<Tg x={1495} y={262} text="same new allele, new combinations" at={K4.many + 20} out={K4.none} anchor="middle" size={38} />
				<GPill x={1495} y={912} text="from many meioses" at={K4.many + 34} anchor="middle" />
				<ABead x={1255} y={262 - 12} l="" r={22} ghost o={prog(f, K4.none, 10)} />
				<GreyCross x={1255} y={250} at={K4.none + 12} s={24} />
				<Tg x={1295} y={262} text="no new allele from shuffling" at={K4.none + 10} size={38} />
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
