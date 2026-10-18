// B8 scenes 5 to 8: random fertilisation multiplies (pollen tubes to ovules, the 4 by 4 pairings, then 2 to the 23
// squared for one human couple), why siblings resemble but differ, mutation as the only source of new alleles (and
// only in the egg or sperm line), and genetic against environmental variation.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead8, AMBER, AMBER_INK, Chip, Chr, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GAM_YR, GREYT, GREY_INK, GeneCard, GreyTag, Heading, INK, INK_SOFT, OVULES, Overlay,
	Cell8, PL8, PlainArrow, PlateB, Pollen, S, SEEDS, Soil, SpanBracket, Strand, Sx, Tick, TIP, clamp01, fmt, lerp, pbPt, pow2, prog, pulse, scribbleEllipse, vis,
} from './shared';
import {CPL, CTE} from './s1';

// ---------- 5. Random fertilisation multiplies ----------
const K5 = cues(S('fertilisation'), {now: 'Now fertilisation', ovule: 'each ovule is reached', tube: 'its own pollen tube', grain: 'its own pollen grain', chance: 'which grain gets there is chance', seed: 'each seed in the pod', pair: 'a different pair of gametes', four: 'four kinds of pollen', sixteen: 'sixteen possible pairings', people: 'For people', million: 'more than 8 million', couple: 'one couple has', trillion: 'about 70 trillion', before: 'before crossing over adds'});
const GRID = {x0: 1170, y0: 330, cw: 158, rh: 82};
export const SceneFertB8: React.FC = () => {
	const f = useCurrentFrame();
	const O = {x: 520, y: 480, w: 820};
	const pt = pbPt(PL8.ovary, O.x, O.y, O.w);
	const tip = pt(...TIP);
	const phaseA = 1 - prog(f, K5.people, 16);
	const pod = prog(f, K5.seed, 22);
	const tubePath = (k: number, part = 1) => {
		const ov = OVULES[k];
		const pts = [pt(TIP[0] - 10, TIP[1] - 4), pt(1170, 716), pt(ov[0] + 40, 712), pt(ov[0], 752)];
		const use = part >= 1 ? pts : pts.slice(0, 3).map((p, i) => (i === 2 ? [lerp(pts[1][0], p[0], part), lerp(pts[1][1], p[1], part)] : p));
		return use.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	};
	const grains = [{lbl: 'Y R', dx: -70, dy: -150, k: 0, at: K5.tube}, {lbl: 'y r', dx: 10, dy: -190, k: 1, at: K5.tube + 12}, {lbl: 'Y r', dx: 90, dy: -150, k: 2, at: K5.chance + 18}];
	const loser = {lbl: 'y R', dx: 150, dy: -220};
	const seeds = OVULES.map(q => pt(...q));
	const seedTags = ['YR + yr', 'yr + Yr', 'Yr + yR'];
	const tick = clamp01((f - K5.trillion) / 50);
	const big = pow2(23) * pow2(23);
	return (
		<>
			<Heading text="Random fertilisation multiplies" at={4} size={56} />
			<Overlay>
				<g opacity={phaseA}>
					<PlateB p={PL8.ovary} cx={O.x} cy={O.y} w={O.w} o={prog(f, 0, 12) * (1 - pod)} />
					<PlateB p={PL8.pod} cx={O.x} cy={O.y} w={O.w} o={pod} />
					{grains.map((g, i) => (
						<g key={i} opacity={1 - pod}>
							<Pollen x={tip[0] + g.dx} y={tip[1] + g.dy} r={13} o={prog(f, K5.ovule + i * 5, 10)} />
							<Sx x={tip[0] + g.dx} y={tip[1] + g.dy - 24} text={g.lbl} size={28} color={INK} weight={800} anchor="middle" at={K5.ovule + i * 5} />
							<g opacity={0.9}><DrawPath d={`M${tip[0] + g.dx},${tip[1] + g.dy + 12} L${tip[0]},${tip[1] - 6}`} at={g.at} dur={10} color="#c99a2e" width={3.5} /></g>
							<DrawPath d={tubePath(g.k)} at={g.at + 8} dur={40} color="#c99a2e" width={4} />
						</g>
					))}
					{/* a different grain set off first, but stalls: which grain gets there is chance */}
					<g opacity={(1 - prog(f, K5.chance + 30, 14)) * (1 - pod)}>
						<Pollen x={tip[0] + loser.dx} y={tip[1] + loser.dy} r={13} o={prog(f, K5.grain, 10)} />
						<Sx x={tip[0] + loser.dx} y={tip[1] + loser.dy - 24} text={loser.lbl} size={28} color={GREY_INK} weight={800} anchor="middle" at={K5.grain} />
						<DrawPath d={`M${tip[0] + loser.dx},${tip[1] + loser.dy + 12} L${tip[0]},${tip[1] - 6}`} at={K5.grain + 6} dur={10} color={GREYT} width={3.5} />
						<DrawPath d={tubePath(2, 0.45)} at={K5.grain + 14} dur={30} color={GREYT} width={4} />
					</g>
					<Sx x={tip[0] + 200} y={tip[1] - 120} text="chance" size={40} color={AMBER_INK} hand at={K5.chance + 10} out={K5.seed} />
					{seeds.map(([x, y], i) => <Sx key={i} x={x} y={y + 150} text={seedTags[i]} size={24} color={INK} weight={800} anchor="middle" at={K5.pair + i * 6} />)}
					<Sx x={O.x} y={O.y + 230} text="each seed: pollen gamete + egg gamete" size={32} color={INK_SOFT} hand anchor="middle" at={K5.pair + 20} />
					{/* the 4 by 4 pairings (counts only) */}
					<Fade at={K5.four}>
						<Sx x={GRID.x0 + 2 * GRID.cw} y={250} text="pollen" size={34} color={INK_SOFT} hand anchor="middle" at={K5.four} />
						<Sx x={GRID.x0 - 20} y={GRID.y0 - 20} text="egg" size={34} color={INK_SOFT} hand anchor="end" at={K5.four} />
						{GAM_YR.map((g, c) => <Sx key={'c' + g} x={GRID.x0 + c * GRID.cw + GRID.cw / 2} y={GRID.y0 - 22} text={g} size={30} color={INK} weight={800} anchor="middle" at={K5.four + c * 3} />)}
						{GAM_YR.map((g, r) => <Sx key={'r' + g} x={GRID.x0 - 20} y={GRID.y0 + r * GRID.rh + GRID.rh / 2 + 10} text={g} size={30} color={INK} weight={800} anchor="end" at={K5.four + 6 + r * 3} />)}
					</Fade>
					{GAM_YR.map((e, r) => GAM_YR.map((p, c) => {
						const at = K5.sixteen - 20 + (r * 4 + c) * 2;
						return (
							<Fade key={p + e} at={at}>
								<rect x={GRID.x0 + c * GRID.cw + 4} y={GRID.y0 + r * GRID.rh + 4} width={GRID.cw - 8} height={GRID.rh - 8} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
								<text x={GRID.x0 + c * GRID.cw + GRID.cw / 2} y={GRID.y0 + r * GRID.rh + GRID.rh / 2 + 9} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}} fill={INK}>{`${p} + ${e}`}</text>
							</Fade>
						);
					}))}
					<Sx x={GRID.x0 + 2 * GRID.cw} y={GRID.y0 + 4 * GRID.rh + 66} text={`4 × 4 = ${GAM_YR.length * GAM_YR.length}`} size={52} color={AMBER_INK} weight={800} anchor="middle" at={K5.sixteen + 10} />
					<GreyTag x={GRID.x0 + 2 * GRID.cw} y={GRID.y0 + 4 * GRID.rh + 92} text="pairings only; which seed looks how: next video" at={K5.sixteen + 20} size={24} anchor="middle" />
				</g>
				{/* people */}
				<g opacity={prog(f, K5.people, 16)}>
					<PlateB p={PL8.sperm} cx={480} cy={380} w={560} />
					<PlateB p={PL8.egg} cx={1400} cy={390} w={290} />
				</g>
				<Sx x={480} y={620} text={`2^{23} = ${fmt(pow2(23))}`} size={48} color={INK} weight={800} anchor="middle" at={K5.million} />
				<Sx x={1400} y={620} text={`2^{23} = ${fmt(pow2(23))}`} size={48} color={INK} weight={800} anchor="middle" at={K5.million + 6} />
				<Sx x={940} y={604} text="per parent" size={32} color={INK_SOFT} hand anchor="middle" at={K5.million + 10} />
				<GreyTag x={940} y={630} text="B5b" at={K5.million + 14} size={24} anchor="middle" />
				<Sx x={940} y={750} text={`${fmt(pow2(23))} × ${fmt(pow2(23))}`} size={50} color={INK} weight={800} anchor="middle" at={K5.couple} />
				<Fade at={K5.trillion - 6}>
					<text x={940} y={870} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 70}} fill={AMBER_INK}>{fmt(big * tick)}</text>
				</Fade>
				<Sx x={940} y={950} text="about 70 trillion pairings" size={50} color={AMBER_INK} hand anchor="middle" at={K5.trillion + 30} />
				<Sx x={1340} y={872} text="+" size={80} color={AMBER_INK} weight={800} at={K5.before} />
				<Fade at={K5.before + 6}>
					<path d="M1420,830 L1460,870 M1460,830 L1420,870" stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
				</Fade>
				<Sx x={1480} y={866} text="crossing over adds more" size={34} color={INK_SOFT} hand at={K5.before + 8} />
			</Overlay>
		</>
	);
};

// ---------- 6. Why siblings resemble but differ ----------
const K6 = cues(S('siblings'), {why: "That's why brothers", seeds: 'seeds in one pod', share: 'share alleles but differ', every: 'Every allele they carry', same: 'the same two parents', alike: 'alike in many ways', each: 'each got a different combination', gametes: 'from different gametes', never: 'almost never genetically identical', no: 'No new mutation is needed', explain: 'to explain it'});
type CDef = {dx: number; kind: 'L' | 'S'; col: 'P' | 'T'; t: string};
const P1: CDef[] = [{dx: -110, kind: 'L', col: 'P', t: 'Y'}, {dx: -40, kind: 'L', col: 'T', t: 'y'}, {dx: 50, kind: 'S', col: 'P', t: 'R'}, {dx: 120, kind: 'S', col: 'T', t: 'r'}];
const P2: CDef[] = [{dx: -110, kind: 'L', col: 'P', t: 'y'}, {dx: -40, kind: 'L', col: 'T', t: 'Y'}, {dx: 50, kind: 'S', col: 'P', t: 'r'}, {dx: 120, kind: 'S', col: 'T', t: 'R'}];
/** Each seed: [parent, chromosome index] for its four chromosomes (long from 1, long from 2, short from 1, short from 2). */
const SEED_SRC: [number, number][][] = [[[1, 0], [2, 0], [1, 2], [2, 3]], [[1, 1], [2, 0], [1, 3], [2, 2]]];
const PAR = [{x: 560, y: 330}, {x: 1360, y: 330}], SEEDC = [{x: 660, y: 760}, {x: 1260, y: 760}];
const SDX = [-110, -40, 50, 120];
export const SceneSiblingsB8: React.FC = () => {
	const f = useCurrentFrame();
	const defOf = (p: number, i: number) => (p === 1 ? P1 : P2)[i];
	const letters = SEED_SRC.map(src => src.map(([p, i]) => defOf(p, i).t));
	return (
		<>
			<Heading text="Same alleles, different combinations" at={4} size={56} />
			<Overlay>
				{PAR.map((c, k) => (
					<g key={k} opacity={prog(f, 4 + k * 6, 14)}>
						<Cell8 cx={c.x} cy={c.y} rx={230} ry={120} />
						{(k === 0 ? P1 : P2).map((d, i) => <Chr key={i} x={c.x + d.dx} y={c.y + (d.kind === 'S' ? 8 : 0)} kind={d.kind} col={d.col} s={0.6} top={d.t} r={15} />)}
					</g>
				))}
				<Sx x={300} y={340} text="parent 1" size={36} color={INK_SOFT} hand anchor="end" at={4} />
				<Sx x={1620} y={340} text="parent 2" size={36} color={INK_SOFT} hand at={10} />
				{SEEDC.map((c, k) => (
					<g key={k} opacity={prog(f, K6.seeds + k * 6, 14)}>
						<Cell8 cx={c.x} cy={c.y} rx={230} ry={120} />
						{SEED_SRC[k].map(([p, i], j) => { const d = defOf(p, i); return <Chr key={j} x={c.x + SDX[j]} y={c.y + (d.kind === 'S' ? 8 : 0)} kind={d.kind} col={d.col} s={0.6} top={d.t} r={15} />; })}
					</g>
				))}
				{/* every allele traces back to a parent */}
				{SEEDC.map((c, k) => SEED_SRC[k].map(([p, i], j) => {
					const from = PAR[p - 1];
					const d = defOf(p, i);
					return <g key={k + '-' + j} opacity={vis(f, K6.same - 6 + j * 3 + k * 8, K6.each + 30)}><line x1={from.x + d.dx} y1={from.y + 90} x2={c.x + SDX[j]} y2={c.y - 90} stroke={d.col === 'P' ? CPL : CTE} strokeWidth={3} strokeDasharray="2 9" strokeLinecap="round" /></g>;
				}))}
				<Sx x={960} y={560} text="every allele came from the two parents" size={34} color={INK_SOFT} hand anchor="middle" at={K6.alike} />
				{/* different combinations */}
				{letters.map((ls, k) => (
					<g key={k}>
						{ls.map((l, j) => <Sx key={j} x={SEEDC[k].x - 90 + j * 60} y={940} text={l} size={44} color={INK} weight={800} anchor="middle" at={K6.each + k * 6} />)}
					</g>
				))}
				{letters[0].map((l, j) => (l !== letters[1][j] ? (
					<g key={j}>
						<Ring2 cx={SEEDC[0].x - 90 + j * 60} cy={926} at={K6.gametes + j * 4} />
						<Ring2 cx={SEEDC[1].x - 90 + j * 60} cy={926} at={K6.gametes + j * 4 + 2} />
					</g>
				) : null))}
				<PlateB p={SEEDS[0].p} cx={330} cy={760} w={120} o={prog(f, K6.never, 12)} />
				<PlateB p={SEEDS[3].p} cx={1590} cy={760} w={120} o={prog(f, K6.never + 6, 12)} />
				<Sx x={330} y={860} text="seed 1" size={32} color={INK_SOFT} hand anchor="middle" at={K6.never} />
				<Sx x={1590} y={860} text="seed 2" size={32} color={INK_SOFT} hand anchor="middle" at={K6.never + 6} />
				{/* no new allele needed */}
				<Fade at={K6.no}>
					<circle cx={960} cy={760} r={28} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="8 7" />
					<DrawPath d="M932,732 L988,788" at={K6.no + 10} dur={8} color={GREYT} width={6} />
					<DrawPath d="M988,732 L932,788" at={K6.no + 15} dur={8} color={GREYT} width={6} />
				</Fade>
				<GreyTag x={960} y={990} text="no new allele needed" at={K6.no + 16} size={26} anchor="middle" />
			</Overlay>
		</>
	);
};
const Ring2: React.FC<{cx: number; cy: number; at: number}> = ({cx, cy, at}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={scribbleEllipse(cx, cy, 28, 34, 3)} at={at} dur={14} color={AMBER} width={4} />;
};

// ---------- 7. Mutation: the only source of new alleles ----------
const K7 = cues(S('mutation'), {where: 'So where does', mut: 'From a mutation', change: "a change in the DNA's base sequence", error: 'a copying error', repaired: "that isn't repaired", y1910: 'In 1910', red: 'red-eyed fruit flies', male: 'one male hatched', white: 'with white eyes', appeared: 'A new allele had appeared', passed: 'he passed it on', only: 'That only works', cell: 'a cell that makes eggs or sperm', gut: "a fly's gut cell", stays: 'stays in that fly'});
const DNA_TOP = 'ATGCCGA', DNA_BOT = 'TACAGCT'; // index 3: A sits opposite C (the copying error)
export const SceneMutationB8: React.FC = () => {
	const f = useCurrentFrame();
	const err = prog(f, K7.error, 1);
	const whiteT = prog(f, K7.white, 20);
	const fly = {x: 260, y: 905, w: 230};
	const fp = pbPt(PL8.flyRed, fly.x, fly.y, fly.w);
	const gut = fp(1000, 1150), germ = fp(1000, 1420);
	const travel = prog(f, K7.cell + 10, 50);
	return (
		<>
			<Heading text="Mutation: the only source of new alleles" at={4} size={52} />
			<Overlay>
				{/* a copying error that is not repaired */}
				<g opacity={prog(f, K7.mut - 6, 14)}>
					<Strand x={170} y={250} letters={DNA_TOP} pitch={88} face="down" color={CPL} tw={70} th={52} so={20} thick={7} />
					<Strand x={170} y={394} letters={DNA_BOT} pitch={88} face="up" color={CPL} tw={70} th={52} so={20} thick={7} letterOf={i => (i === 3 ? (err > 0.5 ? 'A' : 'G') : DNA_BOT[i])} glow={i => (i === 3 ? Math.max(pulse(f, K7.error, 30), err * 0.7) : 0)} />
				</g>
				<Sx x={120} y={470} text="copying error, not repaired" size={36} color={AMBER_INK} hand at={K7.repaired} />
				<ABead8 x={170 + 3 * 88} y={205} t="w" r={24} amber={prog(f, K7.repaired + 10, 1)} o={prog(f, K7.change, 12)} />
				<Sx x={170 + 3 * 88 + 40} y={214} text="new allele" size={32} color={AMBER_INK} hand at={K7.repaired + 12} />
				{/* the 1910 lab */}
				<Fade at={K7.y1910}>
					<rect x={900} y={200} width={920} height={300} rx={40} fill="rgba(255,253,248,0.6)" stroke={INK_SOFT} strokeWidth={4} />
					<line x1={930} y1={228} x2={1790} y2={228} stroke={INK_SOFT} strokeWidth={3} />
				</Fade>
				<GreyTag x={930} y={240} text="a lab, 1910" at={K7.y1910} size={24} />
				{[0, 1, 2, 3, 4].map(i => {
					const x = 1010 + i * 175;
					const isW = i === 2;
					return (
						<g key={i}>
							<PlateB p={PL8.flyRed} cx={x} cy={385} w={110} o={prog(f, K7.red + i * 4, 10) * (isW ? 1 - whiteT : 1)} />
							{isW ? <PlateB p={PL8.flyWhite} cx={x} cy={385} w={110} o={whiteT} /> : null}
						</g>
					);
				})}
				<Fade at={K7.white + 10}><circle cx={1360} cy={385} r={76} fill="none" stroke={AMBER} strokeWidth={6} /></Fade>
				<Sx x={1440} y={300} text="white eyes" size={32} color={AMBER_INK} hand at={K7.white + 12} />
				{/* his offspring carry the new allele */}
				<PlainArrow x1={1360} y1={466} x2={1360} y2={540} at={K7.passed} color={INK_SOFT} />
				{[0, 1, 2, 3].map(i => {
					const x = 1080 + i * 190;
					return (
						<g key={i} opacity={prog(f, K7.passed + 6 + i * 4, 10)}>
							<PlateB p={PL8.flyRed} cx={x} cy={610} w={78} />
							{i % 2 === 1 ? <ABead8 x={x + 58} y={590} t="w" r={18} amber={1} /> : null}
						</g>
					);
				})}
				<Sx x={1360} y={720} text="the new allele is inherited" size={34} color={INK} hand anchor="middle" at={K7.passed + 20} />
				{/* only in the egg or sperm line */}
				<PlateB p={PL8.flyRed} cx={fly.x} cy={fly.y} w={fly.w} o={prog(f, K7.only, 14)} />
				<Fade at={K7.gut - 6}>
					<line x1={gut[0]} y1={gut[1]} x2={526} y2={840} stroke={INK_SOFT} strokeWidth={3} />
					<circle cx={gut[0]} cy={gut[1]} r={9} fill={AMBER} />
					<circle cx={560} cy={840} r={34} fill="#f6e6dc" stroke={INK_SOFT} strokeWidth={3} />
					<ABead8 x={560} y={840} t="w" r={14} amber={1} />
					<Sx x={560} y={796} text="gut cell" size={30} color={INK} hand anchor="middle" at={K7.gut - 6} />
					<PlainArrow x1={600} y1={840} x2={860} y2={840} at={K7.gut} color={INK_SOFT} />
				</Fade>
				<PlateB p={PL8.flyRed} cx={920} cy={840} w={60} o={prog(f, K7.gut + 6, 10)} />
				<Fade at={K7.stays}><path d="M900,820 L940,860 M940,820 L900,860" stroke="#c4432f" strokeWidth={6} strokeLinecap="round" /></Fade>
				<Sx x={980} y={852} text="stays in that fly" size={32} color={GREY_INK} hand at={K7.stays} />
				<Fade at={K7.cell - 6}>
					<line x1={germ[0]} y1={germ[1]} x2={526} y2={990} stroke={INK_SOFT} strokeWidth={3} />
					<circle cx={germ[0]} cy={germ[1]} r={9} fill={AMBER} />
					<circle cx={560} cy={990} r={34} fill="#f6e6dc" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={560} y={946} text="cell that makes eggs or sperm" size={28} color={INK} hand anchor="start" at={K7.cell - 6} />
					<PlainArrow x1={600} y1={990} x2={760} y2={990} at={K7.cell + 4} color={INK_SOFT} />
					<Cell8 cx={800} cy={990} rx={30} ry={24} />
					<PlainArrow x1={840} y1={990} x2={1000} y2={990} at={K7.cell + 30} color={INK_SOFT} />
				</Fade>
				<PlateB p={PL8.flyRed} cx={1060} cy={990} w={60} o={prog(f, K7.cell + 40, 10)} />
				<ABead8 x={lerp(560, 1104, travel)} y={lerp(990, 962, travel) - Math.sin(Math.PI * travel) * 30} t="w" r={14} amber={1} o={prog(f, K7.cell, 10)} />
				<Tick x={1150} y={1000} at={K7.cell + 56} s={36} />
			</Overlay>
		</>
	);
};

// ---------- 8. Genetic or environmental? ----------
const K8 = cues(S('genetic-or-environmental'), {not: 'Not every difference', remember: 'Remember the hydrangea cuttings', clones: 'clones with the same genotype', bp: 'flowered blue or pink', env: 'come from the environment', seeds: 'Differences between seeds', genetic: 'mostly genetic', four: 'from the four sources', tell: 'To tell them apart', cond: 'the same conditions', compare: 'or compare clones', only: 'only genetic differences are inherited', alleles: "doesn't change the alleles"});
export const SceneGenEnvB8: React.FC = () => {
	const f = useCurrentFrame();
	const move = prog(f, K8.cond, 30);
	const same = prog(f, K8.cond + 20, 20);
	const sx = [1150, 1330, 1510, 1690];
	return (
		<>
			<Heading text="Genetic or environmental?" at={4} size={56} />
			<Overlay>
				<Fade at={K8.remember - 6}>
					<rect x={96} y={190} width={840} height={650} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<Sx x={126} y={244} text="environmental variation" size={40} color={INK} hand at={K8.remember - 6} />
				</Fade>
				<GreyTag x={800} y={212} text="B7" at={K8.remember} size={24} />
				<PlateB p={PL8.hydBlue} cx={lerp(310, 380, move)} cy={500} w={240} o={prog(f, K8.remember, 12) * (1 - same)} />
				<PlateB p={PL8.hydPink} cx={lerp(310, 380, move)} cy={500} w={240} o={prog(f, K8.remember, 12) * same} />
				<PlateB p={PL8.hydPink} cx={lerp(720, 660, move)} cy={500} w={240} o={prog(f, K8.remember + 6, 12)} />
				<Soil x={310} y={618} w={280} o={prog(f, K8.remember, 12) * (1 - move)} />
				<Soil x={720} y={618} w={280} o={prog(f, K8.remember, 12) * (1 - move)} />
				<Soil x={520} y={618} w={520} o={move} />
				<SpanBracket x1={300} x2={730} y={700} at={K8.clones} label="= genotype (clones)" size={32} color={INK} />
				<Sx x={516} y={812} text="differences vanish: environmental" size={34} color={AMBER_INK} hand anchor="middle" at={K8.cond + 30} />
				<Fade at={K8.seeds - 6}>
					<rect x={984} y={190} width={840} height={650} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<Sx x={1014} y={244} text="genetic variation" size={40} color={INK} hand at={K8.seeds - 6} />
				</Fade>
				{SEEDS.map((s, i) => (
					<g key={i}>
						<PlateB p={s.p} cx={sx[i]} cy={520} w={120} o={prog(f, K8.seeds + i * 4, 10)} />
						<Sx x={sx[i]} y={680} text={s.tag} size={30} color={INK} weight={800} anchor="middle" at={K8.genetic + i * 3} />
					</g>
				))}
				<Soil x={1420} y={590} w={760} o={prog(f, K8.seeds, 12)} />
				<Chip x={1420} y={700} anchor="middle" text="same conditions" at={K8.cond} size={32} color="#6b4a2b" stroke="#a9825a" />
				<Sx x={1404} y={812} text="differences remain: genetic" size={34} color={AMBER_INK} hand anchor="middle" at={K8.cond + 30} />
				{/* only genetic differences are passed on */}
				<PlainArrow x1={516} y1={846} x2={516} y2={900} at={K8.only} color={INK_SOFT} />
				<GeneCard x={516} y={910} text="same alleles: colour not passed on" at={K8.only + 6} />
				<PlainArrow x1={1404} y1={846} x2={1404} y2={900} at={K8.only + 10} color={INK_SOFT} />
				<GeneCard x={1404} y={910} text="different alleles, passed on" at={K8.only + 16} tick={K8.only + 26} />
				<Sx x={960} y={1050} text="the environment does not change the alleles in the gametes" size={34} color={INK_SOFT} hand anchor="middle" at={K8.alleles} />
			</Overlay>
		</>
	);
};
void AMBER; void FONT_HAND; void INK; void clamp01; void ABead8; void Chip;
