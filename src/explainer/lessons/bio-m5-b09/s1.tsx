// B9 scenes 1 to 4: the hook (Mendel's short plants vanish and return), why one allele can hide another (one working
// enzyme makes enough hormone), homozygous, heterozygous and what goes into a gamete (B5b's plum and teal chromosomes),
// and the Punnett square with its computed ratios.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AText, AlleleChip, CPLUM, Chr, DrawPath, EDGE, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GameteDisc, GeneCard, GenoTag, GreyTag,
	Heading, INK, INK_SOFT, MENDEL, Overlay, PL9, PeaPlant, PlainArrow, PlantIcon, PocketBlob, Punnett, S, SpanBracket, Sx, TEALC, Trio, TtTt, clamp01, fadeV,
	lerp, pct, peaH, pgeom, prog, pulse, rng,
} from './shared';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {crossed: 'Mendel crossed tall', every: 'every one of their offspring', vanished: 'seemed to have vanished', poll: 'pollinate themselves', plants: '1,064 plants', short: '277 were short', how: 'So how can two tall plants', family: 'a family tree'});
const FIELD = {x0: 880, y0: 250, cols: 38, rows: 28, px: 24.5, py: 15.5};
const N_ALL = MENDEL.tall + MENDEL.short;
const SHORT_SET = (() => {
	const r = rng(9);
	const idx = Array.from({length: N_ALL}, (_, i) => i);
	for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
	return new Set(idx.slice(0, MENDEL.short));
})();
if (FIELD.cols * FIELD.rows !== N_ALL || SHORT_SET.size !== MENDEL.short) throw new Error('field must hold 1,064 plants with 277 short');
export const SceneHookB9: React.FC = () => {
	const f = useCurrentFrame();
	const fill = prog(f, K1.plants - 6, Math.max(30, K1.short - K1.plants - 4), (t: number) => t);
	const shown = Math.round(fill * N_ALL);
	const drop = prog(f, K1.short, 18);
	const fieldO = fadeV(f, K1.plants - 8, K1.how);
	const kids = [150, 270, 390, 510];
	return (
		<>
			<Heading text="Predicting offspring" at={K1.how + 4} size={64} />
			<Overlay>
				{/* parents */}
				<PeaPlant tall x={250} ground={470} k={0.2} o={prog(f, 4, 14)} soil={150} />
				<PeaPlant tall={false} x={530} ground={470} k={0.2} o={prog(f, 10, 14)} soil={150} />
				<Sx x={390} y={380} text="×" size={64} color={INK} weight={800} anchor="middle" at={K1.crossed} />
				<Sx x={390} y={540} text="parents" size={36} color={INK_SOFT} hand anchor="middle" at={K1.crossed + 6} />
				<PlainArrow x1={390} y1={560} x2={390} y2={612} at={K1.every - 6} color={INK_SOFT} width={4} />
				{/* all offspring tall */}
				{kids.map((x, i) => {
					const t = prog(f, K1.every + i * 5, 18);
					return <PeaPlant key={i} tall x={x} ground={lerp(860, 840, t)} k={0.14} o={t} soil={110} />;
				})}
				<Sx x={330} y={900} text="all tall" size={38} color={AMBER_INK} hand anchor="middle" at={K1.every + 24} />
				{/* the short trait seems to vanish */}
				<g opacity={0.3 * fadeV(f, K1.vanished, K1.how)}>
					<PeaPlant tall={false} x={640} ground={840} k={0.14} filter="grayscale(1)" />
				</g>
				<Sx x={640} y={700} text="?" size={70} color={GREY_INK} weight={800} anchor="middle" at={K1.vanished + 4} out={K1.how} />
				{/* self-pollination loop on one offspring */}
				<Fade at={K1.poll} out={K1.how}>
					<DrawPath d="M300,700 C330,640 210,640 240,700 C252,724 286,724 298,706" at={K1.poll} dur={20} color={AMBER_INK} width={4} />
					<path d="M298,706 L304,690 M298,706 L284,700" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
					<Sx x={270} y={628} text="pollinates itself" size={30} color={AMBER_INK} hand anchor="middle" at={K1.poll + 6} />
				</Fade>
				{/* the next generation: 1,064 plants, 277 short */}
				<g opacity={fieldO}>
					<rect x={FIELD.x0 - 24} y={FIELD.y0 - 34} width={FIELD.cols * FIELD.px + 30} height={FIELD.rows * FIELD.py + 44} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					{Array.from({length: Math.min(shown, N_ALL)}, (_, i) => {
						const row = Math.floor(i / FIELD.cols);
						const cx = FIELD.x0 + (i % FIELD.cols) * FIELD.px + (row % 2) * FIELD.px * 0.5, by = FIELD.y0 + row * FIELD.py;
						const sh = SHORT_SET.has(i);
						const h = sh ? lerp(10, 3, drop) : 10;
						const col = sh && drop > 0.5 ? AMBER_INK : '#4f8a3c';
						return (
							<g key={i}>
								<line x1={cx} y1={by} x2={cx} y2={by - h} stroke={col} strokeWidth={2.5} strokeLinecap="round" />
								<ellipse cx={cx + 3} cy={by - h} rx={4} ry={2.4} fill={col} />
							</g>
						);
					})}
					<Sx x={FIELD.x0 - 20} y={FIELD.y0 + FIELD.rows * FIELD.py + 62} text={`${shown.toLocaleString('en-AU')} plants`} size={44} color={INK} weight={800} />
					<Sx x={FIELD.x0 + 320} y={FIELD.y0 + FIELD.rows * FIELD.py + 62} text={`${Math.round(drop * MENDEL.short)} short`} size={44} color={AMBER_INK} weight={800} at={K1.short} />
					<Sx x={FIELD.x0 - 20} y={FIELD.y0 + FIELD.rows * FIELD.py + 112} text={`${MENDEL.tall} tall + ${MENDEL.short} short = ${N_ALL.toLocaleString('en-AU')}`} size={32} color={INK_SOFT} weight={600} at={K1.short + 20} />
					<PeaPlant tall={false} x={1720} ground={lerp(900, 880, prog(f, K1.short + 6, 16))} k={0.14} o={prog(f, K1.short + 6, 16)} />
				</g>
				{/* the question: two tall parents, a short offspring */}
				<Fade at={K1.how}>
					<PeaPlant tall x={1040} ground={560} k={0.17} />
					<PeaPlant tall x={1260} ground={560} k={0.17} />
					<Sx x={1150} y={460} text="×" size={56} color={INK} weight={800} anchor="middle" at={K1.how} />
					<PlainArrow x1={1150} y1={600} x2={1150} y2={680} at={K1.how + 8} color={INK_SOFT} width={4} />
					<PeaPlant tall={false} x={1150} ground={870} k={0.17} o={prog(f, K1.how + 14, 14)} />
					<Sx x={1250} y={790} text="?" size={80} color={AMBER_INK} weight={800} at={K1.how + 18} />
					<SpanBracket x1={980} x2={1320} y={590} at={K1.how + 4} label="two tall parents" size={32} />
				</Fade>
				{/* and a family tree */}
				<Trio x={1640} y={640} sz={52} parentsAff={false} childAff o={prog(f, K1.family, 14)} />
				<Sx x={1640} y={810} text="a family tree" size={36} color={INK_SOFT} hand anchor="middle" at={K1.family + 6} />
			</Overlay>
		</>
	);
};

// ---------- 2. Why one allele can hide another ----------
const K2 = cues(S('hide-allele'), {rem: 'genes code for proteins', enz: 'many proteins are enzymes', tall: 'The tall allele codes', hormone: 'makes a growth hormone', barely: 'barely works', oneeach: 'A plant with one of each', enough: 'still makes enough hormone', grows: 'so it grows tall', dominant: "That's what dominant means", onecopy: 'only one copy', recessive: 'The short allele is recessive', two: 'only with two copies'});
const BASE = 790;
/** A stem outline that fills with hormone dots from an enzyme blob and grows. */
const Stem: React.FC<{x: number; from: [number, number][]; start: number; n: number; every: number; h0: number; h1: number; grow: [number, number]; o?: number}> = ({x, from, start, n, every, h0, h1, grow, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const h = lerp(h0, h1, prog(f, grow[0], grow[1]));
	const r = rng(x);
	return (
		<g opacity={o}>
			<rect x={x - 22} y={BASE - h} width={44} height={h} rx={20} fill="#eef3e4" stroke="#4f8a3c" strokeWidth={4} />
			{Array.from({length: n}, (_, i) => {
				const src = from[i % from.length];
				const t0 = start + i * every;
				const t = clamp01((f - t0) / 22);
				if (t <= 0) return null;
				const tx = x + (r() - 0.5) * 22, ty = BASE - 14 - ((i * 37) % Math.max(20, h - 28));
				const cx = lerp(src[0], tx, t), cy = lerp(src[1], ty, t) - Math.sin(Math.PI * t) * 40;
				return <circle key={i} cx={cx} cy={cy} r={6} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.5} />;
			})}
		</g>
	);
};
export const SceneHideAlleleB9: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [380, 960, 1540];
	return (
		<>
			<Overlay>
				{/* B8's grey tag answered */}
				<GreyTag x={1220} y={96} text="which version shows: next video" at={0} out={K2.tall} size={28} />
				<Fade at={16} out={K2.tall}><DrawPath d="M1226,118 L1690,118" at={16} dur={12} color={GREYT} width={5} /></Fade>
				<Sx x={1730} y={128} text="now" size={42} color={AMBER_INK} hand at={24} out={K2.tall} />
				{/* recall: gene codes for a protein, often an enzyme */}
				<GeneCard x={300} y={150} text="gene" at={K2.rem - 4} w={190} />
				<PlainArrow x1={410} y1={182} x2={490} y2={182} at={K2.rem + 8} color={INK_SOFT} width={4} />
				<PocketBlob cx={580} cy={186} R={62} o={prog(f, K2.enz - 4, 12)} sub={0} subO={0} />
				<Sx x={670} y={198} text="protein: an enzyme" size={36} color={INK} hand at={K2.enz} />
				<GreyTag x={980} y={164} text="B7" at={K2.rem} size={26} />
				{/* panel A: the tall allele, a working enzyme */}
				<Fade at={K2.tall - 4}>
					<AlleleChip x={PX[0] - 90} y={330} t="T" r={30} />
					<Sx x={PX[0] - 40} y={342} text="tall allele" size={34} color={INK} hand at={K2.tall} />
				</Fade>
				<PocketBlob cx={PX[0] - 80} cy={470} R={62} o={prog(f, K2.tall, 12)} sub={0} subO={0} />
				<Stem x={PX[0] + 100} from={[[PX[0] - 30, 470]]} start={K2.hormone} n={14} every={5} h0={70} h1={300} grow={[K2.hormone + 10, 70]} o={prog(f, K2.hormone - 6, 12)} />
				<Sx x={PX[0] + 10} y={850} text="lots of hormone: tall" size={32} color={INK_SOFT} hand anchor="middle" at={K2.hormone + 30} />
				{/* panel B: the short allele barely works */}
				<Fade at={K2.barely - 10}>
					<AlleleChip x={PX[1] - 90} y={330} t="t" r={30} />
					<Sx x={PX[1] - 40} y={342} text="short allele" size={34} color={INK} hand at={K2.barely - 10} />
				</Fade>
				<g style={{filter: 'grayscale(0.85)'}} opacity={0.65}><PocketBlob cx={PX[1] - 80} cy={470} R={62} squeeze={0.85} o={prog(f, K2.barely - 6, 12)} sub={0} subO={0} /></g>
				<Sx x={PX[1] - 80} y={570} text="weak enzyme" size={28} color={INK_SOFT} hand anchor="middle" at={K2.barely} />
				<Stem x={PX[1] + 100} from={[[PX[1] - 30, 470]]} start={K2.barely + 6} n={1} every={5} h0={70} h1={90} grow={[K2.barely, 30]} o={prog(f, K2.barely - 4, 12)} />
				<Sx x={PX[1] + 10} y={850} text="barely works" size={32} color={AMBER_INK} hand anchor="middle" at={K2.barely + 6} />
				{/* panel C: one of each still makes enough */}
				<Fade at={K2.oneeach - 4}>
					<AlleleChip x={PX[2] - 130} y={330} t="T" r={28} />
					<AlleleChip x={PX[2] - 66} y={330} t="t" r={28} />
					<Sx x={PX[2] - 24} y={342} text="one of each" size={34} color={INK} hand at={K2.oneeach} />
				</Fade>
				<PocketBlob cx={PX[2] - 90} cy={440} R={52} o={prog(f, K2.oneeach, 12)} sub={0} subO={0} />
				<g style={{filter: 'grayscale(0.85)'}} opacity={0.65}><PocketBlob cx={PX[2] - 90} cy={590} R={52} squeeze={0.85} o={prog(f, K2.oneeach + 6, 12)} sub={0} subO={0} /></g>
				<Stem x={PX[2] + 60} from={[[PX[2] - 50, 440], [PX[2] - 50, 440], [PX[2] - 50, 440], [PX[2] - 50, 590]]} start={K2.enough - 6} n={14} every={5} h0={70} h1={300} grow={[K2.enough, Math.max(30, K2.grows - K2.enough + 10)]} o={prog(f, K2.oneeach + 4, 12)} />
				<PeaPlant tall x={PX[2] + 200} ground={BASE + 6} k={0.2} o={prog(f, K2.grows, 14)} />
				<Sx x={PX[2] + 60} y={850} text="enough hormone: tall" size={32} color={INK_SOFT} hand anchor="middle" at={K2.grows} />
				{/* the two words */}
				<AlleleChip x={150} y={930} t="T" r={30} o={prog(f, K2.dominant, 12)} />
				<Sx x={200} y={944} text="dominant: shows with one copy" size={42} color={INK} hand at={K2.dominant + 4} />
				<AlleleChip x={900} y={930} t="t" r={30} o={prog(f, K2.recessive, 12)} />
				<Sx x={950} y={944} text="recessive: shows only with two copies" size={42} color={INK} hand at={K2.recessive + 4} />
				<PeaPlant tall={false} x={1790} ground={1000} k={0.14} o={prog(f, K2.two, 14)} />
				<GenoTag x={1790} y={1040} text="tt" size={26} o={prog(f, K2.two + 6, 12)} />
				<GreyTag x={150} y={990} text="genotype: the alleles; phenotype: what you see (B7)" at={K2.two + 20} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 3. Homozygous, heterozygous, and what goes into a gamete ----------
const K3 = cues(S('gametes'), {homo: 'Two of the same allele', hetero: 'one of each is heterozygous', which: 'which alleles go into a gamete', meiosis: 'In meiosis', separate: 'pair separate', justone: 'just one allele of each gene', twokinds: 'two kinds of gamete', halfT: 'half carry the tall allele', halft: 'half carry the short one', first: "explains Mendel's first cross", tallTwo: 'A tall plant with two tall alleles', crossed: 'crossed with a short plant', allget: 'all get one of each', alltall: "They're all tall", every: 'every one carries the short allele'});
export const SceneGametesB9: React.FC = () => {
	const f = useCurrentFrame();
	const s1 = fadeV(f, 0, K3.which + 6);
	const s2 = fadeV(f, K3.which, K3.first);
	const s3 = prog(f, K3.first + 4, 14);
	const sep = prog(f, K3.separate, 28);
	const disc = prog(f, K3.separate + 22, 14);
	const cols: {x: number; tall: boolean; g: string; tag: string; at: number}[] = [
		{x: 420, tall: true, g: 'TT', tag: 'homozygous', at: K3.homo}, {x: 960, tall: true, g: 'Tt', tag: 'heterozygous', at: K3.hetero}, {x: 1500, tall: false, g: 'tt', tag: 'homozygous', at: K3.homo + 10},
	];
	const kidsX = [600, 840, 1080, 1320];
	return (
		<>
			<Heading text="What goes into a gamete?" at={K3.which} size={56} out={K3.first} />
			<Heading text="Mendel's first cross" at={K3.first + 8} size={56} />
			<Overlay>
				{/* stage 1: three genotypes */}
				<g opacity={s1}>
					{cols.map(c => (
						<g key={c.g}>
							<PeaPlant tall={c.tall} x={c.x} ground={600} k={0.19} o={prog(f, c.at - 6, 14)} soil={150} />
							<GenoTag x={c.x} y={670} text={c.g} size={40} o={prog(f, c.at - 2, 12)} />
							<Sx x={c.x} y={760} text={c.tag} size={40} color={AMBER_INK} hand anchor="middle" at={c.at + 6} />
						</g>
					))}
				</g>
				{/* stage 2: the Tt plant's two chromosomes separate into two kinds of gamete */}
				<g opacity={s2}>
					<PeaPlant tall x={230} ground={560} k={0.17} soil={130} />
					<GenoTag x={230} y={620} text="Tt" size={36} />
					<g opacity={1 - disc}>
						<Chr x={lerp(900, 760, sep)} y={460} kind="S" col="P" s={1.5} top="T" r={26} />
						<Chr x={lerp(1020, 1160, sep)} y={460} kind="S" col="T" s={1.5} top="t" r={26} />
					</g>
					<GreyTag x={1300} y={300} text="B5b: homologous chromosomes separate" at={K3.meiosis} size={26} />
					<GameteDisc x={760} y={460} t="T" r={80} edge={CPLUM} o={disc} label={prog(f, K3.halfT, 1) > 0 ? '1/2' : undefined} labelO={prog(f, K3.halfT, 12)} />
					<GameteDisc x={1160} y={460} t="t" r={80} edge={TEALC} o={disc} label={prog(f, K3.halft, 1) > 0 ? '1/2' : undefined} labelO={prog(f, K3.halft, 12)} />
					<Sx x={960} y={720} text="each gamete: one allele of each gene" size={40} color={INK} hand anchor="middle" at={K3.justone} />
					<Sx x={960} y={790} text="a heterozygous plant: two kinds of gamete" size={36} color={INK_SOFT} hand anchor="middle" at={K3.twokinds} />
				</g>
				{/* stage 3: TT x tt gives all Tt */}
				<g opacity={s3}>
					<PeaPlant tall x={300} ground={470} k={0.17} soil={130} />
					<GenoTag x={300} y={530} text="TT" size={36} o={prog(f, K3.tallTwo, 12)} />
					<PeaPlant tall={false} x={1620} ground={470} k={0.17} soil={130} o={prog(f, K3.crossed - 4, 12)} />
					<GenoTag x={1620} y={530} text="tt" size={36} o={prog(f, K3.crossed, 12)} />
					<Sx x={960} y={300} text="TT × tt" size={56} color={INK} weight={800} anchor="middle" at={K3.crossed} />
					{[0, 1].map(k => <GameteDisc key={'a' + k} x={lerp(380, 700 + k * 110, prog(f, K3.tallTwo + 10 + k * 6, 22))} y={lerp(380, 420, prog(f, K3.tallTwo + 10, 22))} t="T" r={44} edge={CPLUM} o={prog(f, K3.tallTwo + 8 + k * 6, 10)} />)}
					{[0, 1].map(k => <GameteDisc key={'b' + k} x={lerp(1540, 1110 + k * 110, prog(f, K3.crossed + 10 + k * 6, 22))} y={lerp(380, 420, prog(f, K3.crossed + 10, 22))} t="t" r={44} edge={TEALC} o={prog(f, K3.crossed + 8 + k * 6, 10)} />)}
					<Sx x={755} y={510} text="only T" size={30} color={CPLUM} hand anchor="middle" at={K3.tallTwo + 26} />
					<Sx x={1165} y={510} text="only t" size={30} color={TEALC} hand anchor="middle" at={K3.crossed + 26} />
					{kidsX.map((x, i) => {
						const t = prog(f, K3.allget + i * 5, 16);
						return (
							<g key={i} opacity={t}>
								<PeaPlant tall x={x} ground={lerp(830, 810, t)} k={0.13} o={prog(f, K3.alltall - 6, 12)} />
								<AlleleChip x={x - 26} y={870} t="T" r={22} edge={EDGE.top} />
								<AlleleChip x={x + 26} y={870} t="t" r={22} edge={EDGE.side} ring={prog(f, K3.every + i * 4, 10)} />
							</g>
						);
					})}
					<Sx x={960} y={960} text="all Tt: all tall" size={40} color={INK} hand anchor="middle" at={K3.alltall} />
					<Sx x={960} y={1018} text="every one carries t: hidden, not lost" size={38} color={AMBER_INK} hand anchor="middle" at={K3.every + 10} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 4. The Punnett square ----------
const K4 = cues(S('punnett'), {ps: 'A Punnett square lays out', top: 'go across the top', side: 'down the side', each: 'Each box is one', fill: 'Fill them in', b1: 'one box with two tall', b2: 'two heterozygous boxes', b4: 'one with two short', g121: 'genotype ratio of 1', three: 'Three of the four boxes', phen: 'the phenotype ratio is', m787: "Mendel's 787", close: 'is very close'});
export const GX4 = {x: 760, y: 330, cell: 200, dr: 42};
export const ScenePunnettB9: React.FC = () => {
	const f = useCurrentFrame();
	const G = pgeom(GX4.x, GX4.y, GX4.cell, GX4.dr);
	const fills = [K4.b1, K4.b2, K4.b2 + 14, K4.b4];
	const each = fadeV(f, K4.each, K4.fill);
	const b0 = G.box(0);
	return (
		<>
			<Heading text="The Punnett square" at={K4.ps} size={56} />
			<Overlay>
				{/* parents */}
				<PeaPlant tall x={230} ground={430} k={0.14} o={prog(f, 4, 12)} />
				<Sx x={330} y={330} text="parent 1" size={34} color={CPLUM} hand at={6} />
				<AlleleChip x={350} y={392} t="T" r={24} edge={EDGE.top} o={prog(f, 8, 12)} />
				<AlleleChip x={410} y={392} t="t" r={24} edge={EDGE.top} o={prog(f, 8, 12)} />
				<Sx x={300} y={540} text="×" size={56} color={INK} weight={800} anchor="middle" at={8} />
				<PeaPlant tall x={230} ground={790} k={0.14} o={prog(f, 10, 12)} />
				<Sx x={330} y={690} text="parent 2" size={34} color={TEALC} hand at={12} />
				<AlleleChip x={350} y={752} t="T" r={24} edge={EDGE.side} o={prog(f, 14, 12)} />
				<AlleleChip x={410} y={752} t="t" r={24} edge={EDGE.side} o={prog(f, 14, 12)} />
				<Sx x={GX4.x + GX4.cell} y={GX4.y - 120} text="Tt × Tt" size={44} color={INK} weight={800} anchor="middle" at={K4.ps} />
				<Punnett x={GX4.x} y={GX4.y} cell={GX4.cell} res={TtTt} top={['T', 't']} side={['T', 't']} gridAt={K4.ps + 6} topAt={K4.top} sideAt={K4.side} fillAt={i => fills[i]} discR={GX4.dr}
					icon={(i, x, y) => <PlantIcon x={x} y={y + 44} tall={TtTt.cells[i].ph === 'tall'} s={1.1} o={prog(f, K4.three + i * 4, 10)} />}
					hi={i => (i === 0 ? each : 0)} />
				<Sx x={GX4.x + GX4.cell} y={GX4.y - 76} text="gametes of parent 1" size={28} color={CPLUM} hand anchor="middle" at={K4.top + 10} out={K4.fill} />
				<g opacity={each}>
					<line x1={G.top(0)[0]} y1={G.top(0)[1] + 40} x2={b0[0]} y2={b0[1] - 30} stroke={CPLUM} strokeWidth={3} strokeDasharray="6 6" />
					<line x1={G.side(0)[0] + 46} y1={G.side(0)[1]} x2={b0[0] - 40} y2={b0[1]} stroke={TEALC} strokeWidth={3} strokeDasharray="6 6" />
				</g>
				<Sx x={GX4.x + GX4.cell} y={GX4.y + 2 * GX4.cell + 70} text="each box: one fertilisation, chance 1/4" size={38} color={AMBER_INK} hand anchor="middle" at={K4.each + 6} />
				{/* ratios, computed by merging boxes */}
				<Fade at={K4.g121 - 4}>
					<rect x={1250} y={330} width={600} height={300} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<Sx x={1280} y={384} text="genotypes" size={32} color={INK_SOFT} hand at={K4.g121 - 4} />
				</Fade>
				<Sx x={1280} y={440} text={TtTt.genoText} size={40} color={INK} weight={800} at={K4.g121} />
				<Sx x={1280} y={520} text="phenotypes" size={32} color={INK_SOFT} hand at={K4.phen - 4} />
				<Sx x={1280} y={580} text={TtTt.phenText} size={40} color={INK} weight={800} at={K4.phen} />
				<Fade at={K4.m787}>
					<rect x={1250} y={680} width={600} height={170} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					<Sx x={1280} y={730} text="Mendel's plants" size={32} color={INK_SOFT} hand at={K4.m787} />
					<Sx x={1280} y={790} text={`${MENDEL.tall} : ${MENDEL.short} = ${(MENDEL.tall / MENDEL.short).toFixed(2)} : 1`} size={40} color={INK} weight={800} at={K4.m787 + 4} />
					<Sx x={1280} y={834} text="close to 3 : 1" size={32} color={AMBER_INK} hand at={K4.close} />
				</Fade>
			</Overlay>
		</>
	);
};
void FONT_DISPLAY; void FONT_HAND; void peaH; void pct; void PL9; void AMBER;
