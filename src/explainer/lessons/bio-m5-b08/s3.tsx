// B8 scenes 9 and 10: why variation matters and which source does what (one generation against long periods), and
// the memory aid (Cross, Independently, Randomly; only Mutation makes new).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead8, AMBER, AMBER_INK, Chip, DrawPath, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, Overlay, PlateB, S, SEEDS, SRC, Soil, SpanBracket,
	Sx, clamp01, fmt, lerp, pow2, prog, rng, vis,
} from './shared';

// ---------- 9. Why it matters, and which source does what ----------
const K9 = cues(S('why-it-matters'), {why: 'Why does any', variation: 'Variation means that', change: 'when conditions change', survive: 'more likely to survive', population: 'the population is more likely', gen: 'In any one generation', huge: 'huge numbers of new combinations', rare: 'Mutation is rare', long: 'over long periods', supplies: 'it supplies every new allele', mixes: 'the reshuffling then mixes'});
const ROW = Array.from({length: 8}, (_, i) => 330 + i * 180);
const DIES = [1, 4, 6];
const MUTS = [0.18, 0.5, 0.82];
export const SceneWhyMattersB8: React.FC = () => {
	const f = useCurrentFrame();
	const dry = prog(f, K9.change, 40);
	const sprout = prog(f, K9.survive, 30);
	const r = rng(9);
	const mix = MUTS.map(() => [[-51, -78], [-17, -86], [17, -86], [51, -78]] as [number, number][]);
	void r;
	return (
		<>
			<Heading text="Why variation matters" at={4} size={56} />
			<Overlay>
				{ROW.map((x, i) => {
					const dies = DIES.includes(i);
					return (
						<g key={i}>
							<rect x={x - 82} y={400} width={164} height={40} rx={8} fill={dies ? (dry > 0.5 ? '#d3d6da' : '#a9825a') : '#a9825a'} stroke="#6b4a2b" strokeWidth={2.5} opacity={prog(f, K9.variation, 12)} />
							<PlateB p={SEEDS[i % 4].p} cx={x} cy={350} w={92} o={prog(f, K9.variation + i * 2, 10) * (dies ? 1 - 0.65 * dry : 1)} />
							{!dies && sprout > 0.01 ? <DrawPath d={`M${x},${306} C${x - 4},${280} ${x + 6},${262} ${x + 2},${240}`} at={K9.survive} dur={20} color="#5c7f3a" width={6} /> : null}
							{!dies && sprout > 0.5 ? <ellipse cx={x + 14} cy={246} rx={16} ry={8} fill="#7ea255" opacity={sprout} transform={`rotate(-25 ${x + 14} 246)`} /> : null}
						</g>
					);
				})}
				<g opacity={vis(f, K9.change - 6, K9.gen)} transform={`translate(${lerp(-200, 0, prog(f, K9.change - 6, 30))},0)`}>
					<Chip x={150} y={190} text="dry spell" at={K9.change - 6} size={34} color="#6b4a2b" stroke="#a9825a" />
					{[0, 1, 2].map(k => <path key={k} d={`M${330 + k * 30},214 l10,10 l-8,10 l12,12`} fill="none" stroke="#6b4a2b" strokeWidth={3} />)}
				</g>
				<Sx x={960} y={500} text="some survive: the population continues" size={38} color={AMBER_INK} hand anchor="middle" at={K9.population} />
				<GreyTag x={1300} y={470} text="B1: variation helps survival" at={K9.population + 6} size={24} />
				{/* one generation: reshuffling makes huge numbers of combinations */}
				<Fade at={K9.gen - 6}>
					<rect x={96} y={560} width={840} height={450} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<Sx x={126} y={612} text="one generation" size={40} color={INK} hand at={K9.gen - 6} />
				</Fade>
				{SRC.slice(0, 3).map((s, i) => <Chip key={s} x={130} y={650 + i * 80} text={s} at={K9.gen + i * 6} size={34} color={INK} />)}
				<Sx x={740} y={760} text="×" size={110} color={AMBER_INK} weight={800} anchor="middle" at={K9.huge} />
				<Sx x={740} y={830} text="huge numbers of" size={32} color={AMBER_INK} hand anchor="middle" at={K9.huge + 4} />
				<Sx x={740} y={868} text="combinations" size={32} color={AMBER_INK} hand anchor="middle" at={K9.huge + 4} />
				<Sx x={516} y={970} text={`one couple: ${fmt(pow2(46))} pairings`} size={28} color={GREY_INK} weight={600} anchor="middle" at={K9.huge + 10} />
				{/* long periods: rare mutations supply new alleles, then reshuffling mixes them */}
				<Fade at={K9.rare - 6}>
					<rect x={984} y={560} width={840} height={450} rx={24} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					<Sx x={1014} y={612} text="long periods" size={40} color={INK} hand at={K9.rare - 6} />
				</Fade>
				<Chip x={1014} y={640} text="mutation: rare" at={K9.rare} size={34} color={AMBER_INK} stroke={AMBER} />
				<Fade at={K9.long}>
					<DrawPath d="M1040,830 L1780,830" at={K9.long} dur={30} color={INK_SOFT} width={4} />
					<path d="M1764,818 L1784,830 L1764,842" fill="none" stroke={INK_SOFT} strokeWidth={4} />
					<Sx x={1780} y={880} text="time" size={30} color={INK_SOFT} hand anchor="end" at={K9.long} />
				</Fade>
				{MUTS.map((u, k) => {
					const x = lerp(1080, 1720, u);
					const at = K9.supplies + k * 24;
					const spread = prog(f, at + 14, 30);
					return (
						<g key={k}>
							{mix[k].map(([dx, dy], j) => <ABead8 key={j} x={x + dx * spread} y={830 + dy * spread} t={['A', 'a', 'B', j === 3 ? 'new' : 'b'][j]} r={j === 3 ? 18 : 15} amber={j === 3 ? 1 : 0} o={prog(f, at + 14 + j * 3, 8)} />)}
							<ABead8 x={x} y={830} t="new" r={25} amber={1} o={prog(f, at, 10)} />
						</g>
					);
				})}
				<Sx x={1404} y={960} text="mutation supplies new alleles;" size={30} color={AMBER_INK} hand anchor="middle" at={K9.mixes - 10} />
				<Sx x={1404} y={995} text="reshuffling mixes them" size={30} color={AMBER_INK} hand anchor="middle" at={K9.mixes} />
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K10 = cues(S('memory'), {remember: 'To remember the four', cross: 'Cross', ind: 'Independently', rand: 'Randomly', fr: 'for crossing over', three: 'the three that reshuffle', only: 'only Mutation makes new'});
const FIRST_W: Record<string, number> = {C: 0.4, I: 0.24, R: 0.42, M: 0.55};
const Word: React.FC<{x: number; y: number; w: string; at: number; size?: number}> = ({x, y, w, at, size = 100}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<text x={x} y={y} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={AMBER_INK}>{w}</text>
			<line x1={x + 2} y1={y + 12} x2={x + size * (FIRST_W[w[0]] ?? 0.42)} y2={y + 12} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
		</g>
	);
};
export const SceneMemoryB8: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="To remember the four" at={4} size={60} />
			<Overlay>
				<Word x={180} y={330} w="Cross" at={K10.cross} />
				<Word x={180} y={480} w="Independently" at={K10.ind} />
				<Word x={180} y={630} w="Randomly" at={K10.rand} />
				{SRC.slice(0, 3).map((s, i) => <Chip key={s} x={900} y={276 + i * 150} text={s} at={K10.fr + i * 14} size={38} color={INK} />)}
				<Fade at={K10.three}>
					<DrawPath d="M1440,260 L1470,260 L1470,660 L1440,660" at={K10.three} dur={16} color={AMBER_INK} width={5} />
				</Fade>
				<Sx x={1500} y={474} text="reshuffle" size={54} color={AMBER_INK} hand at={K10.three + 6} />
				<g opacity={prog(f, K10.only, 12)}>
					<text x={180} y={850} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 92}} fill={INK}>only <tspan fill={AMBER_INK}>Mutation</tspan> makes new</text>
					<line x1={340} y1={864} x2={392} y2={864} stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" />
				</g>
				<ABead8 x={1220} y={820} t="new" r={36} amber={1} o={prog(f, K10.only + 10, 12)} />
			</Overlay>
		</>
	);
};
void AMBER; void GREYT; void Soil; void SpanBracket; void clamp01;
