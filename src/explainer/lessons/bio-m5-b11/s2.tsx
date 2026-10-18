// B11 scenes 5 to 9 on the read strip and the group panel: what a SNP is (three samples, two copies each; a scan finds
// the one column that differs; genotypes read directly), how common SNPs are (a chromosome bar of ticks, most in
// non-coding DNA, one in a gene: B7's sickle change), counting SNP alleles (a 100-copy pool, T lit by source),
// association, not cause (two bead groups, then a linked chromosome pair that crossing over doesn't split) and one SNP
// is one marker (a 40-SNP grid with the shared count computed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BaseT, CARD, CPLUM, ChromBar, Chip, DataTable, DrawPath, EDGE, FILL, Fade, GreyTag, Heading, IdCard, INK, INK_SOFT, LINE, MistakeChip, Overlay,
	Panel, PlainArrow, PoolBar, Ring, S, SERIF, SNP40, SNP7, SNP8, Sx, TEALC, Tick, TileRow, codonToAA, lerp, nPeople, pc, prog, rng, tCopies, vis,
} from './shared';

// ---------- 5. What a SNP is ----------
const K5 = cues(S('what-is-a-snp'), {
	line: 'Line up the same stretch', most: 'most bases match', differ: 'differ by just one base', here: 'some copies have C', others: 'others have T',
	snp: 'single nucleotide polymorphism', snip: 'or snip for short', single: 'Single nucleotide means one base', poly: 'polymorphism means more than one form',
	each: 'Each form is an allele', both: 'because both copies are read', every: 'every genotype shows directly', carriers: 'including the heterozygous one',
});
export const SNP_SEQ = 'GACC?GATC';
const SAMPLES5: [string, string][] = [['C', 'C'], ['C', 'T'], ['T', 'T']];
const rowSeq = (k: number, c: number) => SNP_SEQ.replace('?', SAMPLES5[k][c]);
/** The differing column, computed from the six rows. */
const DIFF_COL = (() => {
	const rows = SAMPLES5.flatMap((_, k) => [rowSeq(k, 0), rowSeq(k, 1)]);
	const cols = SNP_SEQ.split('').map((_, i) => new Set(rows.map(r => r[i])).size > 1);
	if (cols.filter(Boolean).length !== 1) throw new Error('B11 scene 5: exactly one column must differ');
	return cols.indexOf(true);
})();
const genoOf = (k: number) => [...SAMPLES5[k]].sort().join('');
const X5 = 430, P5 = 76, Y5 = 300, B5 = 232;
export const SceneSnpB11: React.FC = () => {
	const f = useCurrentFrame();
	const scanDur = Math.max(30, K5.differ - K5.most - 6);
	const scanCol = (f - K5.most) / (scanDur / 9);
	const scanO = vis(f, K5.most, K5.differ + 10);
	const colX = (i: number) => X5 + i * P5;
	return (
		<>
			<Heading text="What is a SNP?" at={K5.line} size={56} />
			<Overlay>
				{SAMPLES5.map((_, k) => (
					<g key={k} opacity={prog(f, K5.line + k * 8, 14)}>
						<IdCard x={110} y={Y5 + k * B5 - 6} label={`sample ${k + 1}`} />
						{[0, 1].map(c => (
							<g key={c}>
								<Sx x={300} y={Y5 + k * B5 + c * 68 + 10} text={`copy ${c + 1}`} size={24} color={INK_SOFT} weight={700} at={-100} />
								<TileRow x={X5} y={Y5 + k * B5 + c * 68} seq={rowSeq(k, c)} pitch={P5} w={66} h={56}
									tile={i => ({glow: i === DIFF_COL ? Math.max(rowSeq(k, c)[i] === 'C' ? vis(f, K5.here, K5.others) : 0, rowSeq(k, c)[i] === 'T' ? vis(f, K5.others, K5.snp) : 0) : 0})} />
							</g>
						))}
					</g>
				))}
				{/* the scan */}
				{scanO > 0.01 && scanCol >= 0 && scanCol < 9.5 ? <rect x={colX(Math.min(8, scanCol)) - 38} y={Y5 - 40} width={76} height={B5 * 2 + 150} rx={14} fill={AMBER} opacity={0.16 * scanO} /> : null}
				{SNP_SEQ.split('').map((_, i) => (i === DIFF_COL ? null : <Tick key={i} x={colX(i)} y={240} at={K5.most + Math.round((i + 0.6) * (scanDur / 9))} s={26} />))}
				{f >= K5.differ ? <Ring cx={colX(DIFF_COL)} cy={Y5 + B5 + 34} rx={54} ry={B5 + 66} at={K5.differ} /> : null}
				<Sx x={colX(DIFF_COL)} y={212} text="differs" size={30} color={AMBER_INK} hand anchor="middle" at={K5.differ + 10} out={K5.each - 4} />
				{/* alleles above the column */}
				<Chip x={colX(DIFF_COL) - 12} y={150} anchor="end" text="C allele" at={K5.each} size={30} />
				<Chip x={colX(DIFF_COL) + 12} y={150} text="T allele" at={K5.each + 8} size={30} />
				{/* the term */}
				<Sx x={1240} y={300} text="single nucleotide polymorphism" size={48} color={INK} hand at={K5.snp} />
				<GreyTag x={1240} y={326} text="SNP (said 'snip')" at={K5.snip} size={28} />
				<Chip x={1240} y={420} text="single nucleotide: one base" at={K5.single} size={32} />
				<Chip x={1240} y={500} text="polymorphism: more than one form in the population" at={K5.poly} size={24} />
				{/* genotypes, read directly */}
				{SAMPLES5.map((_, k) => (
					<g key={k} opacity={prog(f, K5.every + k * 8, 12)}>
						<rect x={1080} y={Y5 + k * B5 - 4} width={110} height={76} rx={38} fill="#fffdf8" stroke={k === 1 ? AMBER : INK_SOFT} strokeWidth={k === 1 ? 4 : 2.5} />
						<text x={1135} y={Y5 + k * B5 + 49} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 40}} fill={INK}>{genoOf(k)}</text>
					</g>
				))}
				<Sx x={1060} y={Y5 + B5 + 150} text="heterozygous: one C, one T" size={32} color={AMBER_INK} hand at={K5.carriers} />
				<Sx x={1240} y={800} text="both copies read: the genotype shows directly" size={32} color={INK} hand at={K5.both} />
			</Overlay>
		</>
	);
};

// ---------- 6. How common SNPs are, and when they matter ----------
const K6 = cues(S('snp-markers'), {
	two: 'Two unrelated people differ', thousand: 'one base in every thousand', millions: 'carries millions of snips', most: 'Most sit in DNA', code: "doesn't code for a protein",
	nothing: 'change nothing we can see', few: 'A few do matter', sickle: 'The sickle cell allele', single: 'a single A changed to T', markers: 'snips are markers we can count', causes: 'only sometimes causes',
});
const BAR6 = {x: 140, y: 440, w: 1640};
const GENES6: [number, number][] = [[0.12, 0.17], [0.38, 0.42], [0.63, 0.69], [0.86, 0.9]];
const TICKS6 = (() => {
	const r = rng(66);
	const out: number[] = [];
	while (out.length < 64) {
		const t = 0.02 + r() * 0.96;
		const inGene = GENES6.some(([a, b]) => t > a && t < b);
		if (inGene && r() < 0.8) continue;
		out.push(t);
	}
	out.push(0.66); // the sickle site inside a gene
	return out;
})();
const SICKLE_T = 0.66;
export const SceneSnpMarkersB11: React.FC = () => {
	const f = useCurrentFrame();
	const zoom = prog(f, 0, 30);
	const X = (t: number) => BAR6.x + t * BAR6.w;
	const geneO = prog(f, K6.code, 14);
	return (
		<>
			<Heading text="How common SNPs are" at={K6.two} size={56} />
			<Overlay>
				{/* the read strip zooms out into a tick */}
				<g opacity={1 - zoom} transform={`translate(${lerp(560, X(0.3), zoom)},${lerp(440, BAR6.y, zoom)}) scale(${1 - 0.9 * zoom})`}>
					<TileRow x={0} y={0} seq="GACCTGATC" pitch={70} />
				</g>
				<ChromBar x={BAR6.x} y={BAR6.y} w={BAR6.w} h={60} o={prog(f, 10, 16)} />
				{GENES6.map(([a, b], i) => (
					<g key={i} opacity={geneO}>
						<rect x={X(a)} y={BAR6.y - 30} width={X(b) - X(a)} height={60} fill={TEALC} opacity={0.4} />
						<text x={(X(a) + X(b)) / 2} y={BAR6.y + 66} textAnchor="middle" style={{fontFamily: FONT_HAND_S, fontWeight: 700, fontSize: 30}} fill={TEALC}>gene</text>
					</g>
				))}
				{TICKS6.map((t, i) => {
					const o = prog(f, K6.two + 20 + i * 1.2, 8);
					if (o <= 0.01) return null;
					const sickle = t === SICKLE_T;
					return <line key={i} x1={X(t)} y1={BAR6.y - 26} x2={X(t)} y2={BAR6.y + 26} stroke={sickle && f >= K6.few ? AMBER_INK : CPLUM} strokeWidth={sickle && f >= K6.few ? 6 : 3.5} opacity={o} />;
				})}
				<GreyTag x={BAR6.x} y={BAR6.y - 120} text="about 1 base in 1,000 differs between two unrelated people" at={K6.thousand} size={26} />
				<Sx x={BAR6.x + 1000} y={BAR6.y - 80} text="millions of SNPs each" size={42} color={INK} hand at={K6.millions} />
				{/* non-coding stretches */}
				<g opacity={prog(f, K6.code + 8, 12)}>
					<DrawPath d={`M${X(0.18)},${BAR6.y + 44} L${X(0.18)},${BAR6.y + 56} L${X(0.37)},${BAR6.y + 56} L${X(0.37)},${BAR6.y + 44}`} at={K6.code + 8} dur={12} color={INK_SOFT} width={3} />
					<DrawPath d={`M${X(0.43)},${BAR6.y + 44} L${X(0.43)},${BAR6.y + 56} L${X(0.62)},${BAR6.y + 56} L${X(0.62)},${BAR6.y + 44}`} at={K6.code + 12} dur={12} color={INK_SOFT} width={3} />
				</g>
				<GreyTag x={X(0.2)} y={BAR6.y + 76} text="non-coding DNA" at={K6.code + 10} size={26} />
				<GreyTag x={X(0.45)} y={BAR6.y + 76} text="non-coding DNA" at={K6.code + 14} size={26} />
				<Sx x={BAR6.x} y={BAR6.y + 190} text="most change nothing we can see" size={36} color={INK} hand at={K6.nothing} />
				{f >= K6.few ? <Ring cx={X(SICKLE_T)} cy={BAR6.y} rx={34} ry={48} at={K6.few} /> : null}
				{/* B7 recall card */}
				<g opacity={prog(f, K6.sickle, 14)} transform={`translate(0,${(1 - prog(f, K6.sickle, 18)) * 30})`}>
					<DrawPath d={`M${X(SICKLE_T)},${BAR6.y + 50} L${1250},${700}`} at={K6.sickle} dur={14} color={AMBER_INK} width={3} dash="8 7" />
					<Panel x={900} y={700} w={800} h={230} stroke={AMBER} sw={3.5} />
					<Sx x={930} y={746} text="coding strand: sickle cell" size={32} color={INK} hand />
					<TileRow x={970} y={810} seq="GAG" pitch={66} w={58} h={48} />
					<Sx x={1170} y={824} text="to" size={32} color={INK_SOFT} hand />
					<TileRow x={1250} y={810} seq="GTG" pitch={66} w={58} h={48} tile={i => ({glow: i === 1 ? prog(f, K6.single, 12) : 0})} />
					<Sx x={970} y={900} text={`${codonToAA('GAG')} to ${codonToAA('GTG')}`} size={34} color={INK} weight={700} />
					<Sx x={1250} y={900} text="one A changed to T" size={32} color={AMBER_INK} hand at={K6.single} />
				</g>
				<GreyTag x={1720} y={706} text="B7" at={K6.sickle + 6} size={24} />
				<Sx x={BAR6.x} y={800} text="most SNPs: markers" size={46} color={INK} hand at={K6.markers} />
				<Sx x={BAR6.x} y={866} text="some: causes" size={46} color={AMBER_INK} hand at={K6.causes} />
			</Overlay>
		</>
	);
};
const FONT_HAND_S = 'Caveat';

// ---------- 7. Counting SNP alleles ----------
const K7 = cues(S('counting-snps'), {
	now: 'Now count them', fifty: 'Fifty people are tested', cc: 'Eighteen have C on both', ct: 'twenty-four have one C', tt: 'and eight have T', hundred: 'carry a hundred copies',
	ttwo: 'come to twenty-four', plus: 'plus sixteen', makes: 'which makes forty', forty: 'is forty per cent', count: 'Count alleles, not people',
});
/** Pool order: C copies first (CC then CT), then T copies (CT then TT). */
const pool7 = (() => {
	const cells: {t: 'C' | 'T'; src: 'CC' | 'CT' | 'TT'}[] = [];
	for (let i = 0; i < SNP7.CC; i++) cells.push({t: 'C', src: 'CC'}, {t: 'C', src: 'CC'});
	for (let i = 0; i < SNP7.CT; i++) cells.push({t: 'C', src: 'CT'});
	for (let i = 0; i < SNP7.CT; i++) cells.push({t: 'T', src: 'CT'});
	for (let i = 0; i < SNP7.TT; i++) cells.push({t: 'T', src: 'TT'}, {t: 'T', src: 'TT'});
	if (cells.length !== 100 || cells.filter(c => c.t === 'T').length !== tCopies(SNP7)) throw new Error('B11 scene 7 pool');
	return cells;
})();
export const SceneCountSnpB11: React.FC = () => {
	const f = useCurrentFrame();
	const n7 = nPeople(SNP7), T7 = tCopies(SNP7), C7 = 2 * n7 - T7;
	const gCT = vis(f, K7.ttwo, K7.count + 60), gTT = vis(f, K7.plus, K7.count + 60);
	return (
		<>
			<Heading text="Counting SNP alleles" at={K7.now} size={56} />
			<Overlay>
				<DataTable x={110} y={230} cols={[{w: 220, head: 'genotype'}, {w: 170, head: 'people', align: 'middle'}]}
					rows={[['CC', String(SNP7.CC)], ['CT', String(SNP7.CT)], ['TT', String(SNP7.TT)], ['total', `${n7} people`]]}
					rowAt={[K7.cc, K7.ct, K7.tt, K7.hundred - 20]} at={K7.fifty} size={34} rowH={62} hot={r => (r === 1 ? gCT * prog(f, K7.ttwo, 8) : r === 2 ? gTT : 0)} />
				<GreyTag x={110} y={560} text="example data" at={K7.fifty + 10} size={24} />
				<Sx x={110} y={640} text={`${n7} people x 2 = ${2 * n7} copies`} size={36} color={INK} hand at={K7.hundred} />
				<PoolBar x={110} y={670} w={1700} h={64} n={100} letters o={prog(f, K7.hundred - 6, 12)}
					cell={j => ({t: pool7[j].t, o: prog(f, K7.hundred + j * 0.5, 6), glow: pool7[j].t === 'T' ? (pool7[j].src === 'CT' ? gCT : gTT) : 0})} />
				<Sx x={640} y={300} text={`from CT: ${SNP7.CT} x 1 = ${SNP7.CT}`} size={42} color={INK} weight={700} at={K7.ttwo} />
				<Sx x={640} y={370} text={`from TT: ${SNP7.TT} x 2 = ${2 * SNP7.TT}`} size={42} color={INK} weight={700} at={K7.plus} />
				<Sx x={640} y={462} text={`T: ${T7} / ${2 * n7} = ${(T7 / (2 * n7)).toFixed(2)} = ${pc(T7, 2 * n7)}%`} size={48} color={AMBER_INK} weight={800} at={K7.forty} />
				<Sx x={640} y={532} text={`C: ${C7} / ${2 * n7} = ${pc(C7, 2 * n7)}%`} size={42} color={INK} weight={700} at={K7.forty + 14} />
				<Sx x={110} y={880} text="Count alleles, not people." size={72} color={AMBER_INK} hand at={K7.count} />
				<MistakeChip x={1060} y={830} text={`T = ${SNP7.TT} / ${n7} = ${pc(SNP7.TT, n7)}%`} at={K7.count + 10} cross={K7.count + 30} size={34} />
				<GreyTag x={1500} y={836} text="that counts people" at={K7.count + 34} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 8. Comparing groups: association, not cause ----------
const K8 = cues(S('association'), {
	snips: 'Snips become evidence', say: 'Say those fifty people', without: 'and fifty people without it', second: 'In that second group', trend: "That's a trend",
	more: 'T turns up more often', assoc: 'We call that an association', prove: "it doesn't prove that", cause: 'T causes it', close: 'sit close to the DNA', same: 'on the same chromosome',
	rarely: 'rarely split by crossing over', inherited: "they're inherited together",
});
/** 100 allele beads for a group, T beads seeded among them; lit = T beads glow. */
const beadsFor = (nT: number, seed: number) => {
	const r = rng(seed);
	return Array.from({length: 100}, (_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).map((q, j) => (j < nT ? 'T' : 'C'));
};
const BEADS_D = beadsFor(tCopies(SNP7), 81);
const BEADS_N = beadsFor(tCopies(SNP8), 82);
const Beads100: React.FC<{x: number; y: number; letters: string[]; glow: number; o?: number}> = ({x, y, letters, glow, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{letters.map((l, i) => {
			const cx = x + (i % 10) * 27, cy = y + Math.floor(i / 10) * 27;
			return (
				<g key={i}>
					{l === 'T' && glow > 0.01 ? <circle cx={cx} cy={cy} r={16} fill={AMBER} opacity={0.7 * glow} /> : null}
					<circle cx={cx} cy={cy} r={11.5} fill={FILL[l]} stroke={LINE[l]} strokeWidth={2} />
					<text x={cx} y={cy + 5} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 14}} fill={INK}>{l}</text>
				</g>
			);
		})}
	</g>
));
export const SceneAssocB11: React.FC = () => {
	const f = useCurrentFrame();
	const groups = [
		{x: 100, title: `with the disease (${nPeople(SNP7)} people)`, tab: `CC ${SNP7.CC} | CT ${SNP7.CT} | TT ${SNP7.TT}`, b: BEADS_D, t: tCopies(SNP7), at: K8.say, lit: K8.say + 20},
		{x: 640, title: `without the disease (${nPeople(SNP8)} people)`, tab: `CC ${SNP8.CC} | CT ${SNP8.CT} | TT ${SNP8.TT}`, b: BEADS_N, t: tCopies(SNP8), at: K8.without, lit: K8.second},
	];
	const cross = prog(f, K8.rarely + 10, 30);
	const CX = 150, CW = 1000, Y1 = 790, Y2 = 862, CUT = 0.82;
	const snpX = CX + 0.42 * CW, causeX = CX + 0.5 * CW;
	return (
		<>
			<Heading text="Association, not cause" at={K8.assoc} size={56} />
			<Overlay>
				{groups.map((g, i) => (
					<g key={i} opacity={prog(f, g.at, 14)}>
						<Panel x={g.x} y={196} w={500} h={500} />
						<Sx x={g.x + 24} y={240} text={g.title} size={30} color={INK} weight={800} />
						<Sx x={g.x + 24} y={280} text={g.tab} size={26} color={INK_SOFT} weight={700} />
						<Beads100 x={g.x + 128} y={320} letters={g.b} glow={prog(f, g.lit, 14)} />
						<Sx x={g.x + 40} y={614} text={`T: ${g.t} / 100 copies = ${pc(g.t, 100)}%`} size={30} color={INK} weight={800} at={g.lit + 16} />
						<rect x={g.x + 40} y={636} width={420} height={30} rx={8} fill="#f1ebdd" stroke={EDGE} strokeWidth={1.5} />
						<rect x={g.x + 40} y={636} width={(420 * g.t * prog(f, g.lit + 10, 20)) / 100} height={30} rx={8} fill={AMBER} />
					</g>
				))}
				<GreyTag x={1200} y={540} text="example data" at={K8.say + 10} size={22} />
				{/* the trend */}
				<Fade at={K8.trend}>
					<DrawPath d="M764,674 C720,728 360,728 314,674" at={K8.trend} dur={18} color={AMBER_INK} width={6} />
					<path d="M310,698 L314,674 L338,680" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Sx x={1200} y={250} text="T more common with the disease" size={40} color={AMBER_INK} hand at={K8.more} />
				<Sx x={1200} y={350} text="association" size={70} color={INK} hand at={K8.assoc} />
				<Sx x={1200} y={400} text="found together more often" size={34} color={INK_SOFT} weight={700} at={K8.assoc + 10} />
				<MistakeChip x={1200} y={450} text="T causes the disease" at={K8.prove} cross={K8.cause + 6} size={32} />
				{/* the linked pair */}
				<g opacity={prog(f, K8.close - 6, 14)}>
					<Sx x={CX} y={Y1 - 50} text="one chromosome pair" size={28} color={INK_SOFT} weight={700} />
					{[[Y1, CPLUM, TEALC], [Y2, TEALC, CPLUM]].map(([y, a, b], k) => (
						<g key={k}>
							<rect x={CX} y={(y as number) - 18} width={CW * CUT} height={36} rx={18} fill={a as string} opacity={0.75} />
							<rect x={CX + CW * CUT - 18} y={(y as number) - 18} width={CW * (1 - CUT) + 18} height={36} rx={18} fill={(cross > 0.5 ? b : a) as string} opacity={0.75} />
						</g>
					))}
					<line x1={snpX} y1={Y1 - 24} x2={snpX} y2={Y1 + 24} stroke={AMBER_INK} strokeWidth={6} />
					<Sx x={snpX} y={Y1 - 36} text="SNP" size={26} color={AMBER_INK} weight={800} anchor="middle" />
				</g>
				<g opacity={prog(f, K8.close + 16, 12)}>
					<circle cx={causeX} cy={Y1} r={12} fill="#c4432f" stroke="#fff" strokeWidth={3} />
					<Sx x={causeX + 4} y={Y1 - 36} text="real cause?" size={28} color="#c4432f" hand />
				</g>
				{/* crossing over at a far point */}
				<g opacity={vis(f, K8.rarely, K8.inherited + 40)}>
					<path d={`M${CX + CW * CUT - 24},${Y1 - 30} L${CX + CW * CUT + 24},${Y2 + 30} M${CX + CW * CUT + 24},${Y1 - 30} L${CX + CW * CUT - 24},${Y2 + 30}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				</g>
				<GreyTag x={CX + CW * CUT - 30} y={Y2 + 40} text="B8: crossing over" at={K8.rarely + 4} size={22} />
				{f >= K8.inherited ? <Ring cx={(snpX + causeX) / 2} cy={Y1} rx={86} ry={28} at={K8.inherited} /> : null}
				<GreyTag x={CX} y={Y2 + 40} text="close together: inherited together" at={K8.inherited + 6} size={26} />
				<GreyTag x={1200} y={950} text="showing cause needs more evidence, such as" at={K8.inherited + 30} size={22} />
				<GreyTag x={1200} y={996} text="what the variant does to a protein" at={K8.inherited + 34} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 9. One SNP is one marker ----------
const K9 = cues(S('one-marker'), {one: 'one snip is only one marker', share: 'can share a version at one snip', thousands: 'differ at thousands of others', why: "That's why studies", many: 'compare many snips at once', pattern: 'look at the overall pattern'});
export const SceneOneMarkerB11: React.FC = () => {
	const f = useCurrentFrame();
	const grow = prog(f, K9.thousands - 4, 40);
	const X0 = 420, PIT = 35;
	const fillP = prog(f, K9.many, 40);
	const sharedSoFar = SNP40.same.filter((s, i) => s && i < fillP * 40).length;
	return (
		<>
			<Heading text="One SNP is one marker" at={K9.one} size={56} />
			<Overlay>
				{[0, 1].map(k => (
					<g key={k} opacity={prog(f, K9.one + k * 8, 14)}>
						<Panel x={110} y={300 + k * 150} w={270} h={96} />
						<Sx x={135} y={360 + k * 150} text={`population ${k + 1}`} size={34} color={INK} weight={800} />
						{(k ? SNP40.p2 : SNP40.p1).map((b, i) => {
							const o = i === 0 ? 1 : clamp01(grow * 40 - i + 1);
							return <BaseT key={i} x={i === 0 ? lerp(520, X0, grow) : X0 + i * PIT} y={348 + k * 150} l={b} w={i === 0 ? lerp(70, 32, grow) : 32} h={i === 0 ? lerp(60, 32, grow) : 32} o={o} />;
						})}
					</g>
				))}
				<Tick x={lerp(520, X0, grow)} y={450} at={K9.one + 20} s={30} />
				<MistakeChip x={640} y={230} text="same at one SNP: closely related" at={K9.share} cross={K9.thousands} size={32} />
				{/* differing columns marked once the grid shows */}
				{SNP40.same.map((s, i) => (
					<rect key={i} x={X0 + i * PIT - 15} y={540} width={30} height={10} rx={4} fill={s ? '#2f8a5b' : '#c9c1b3'} opacity={prog(f, K9.thousands + 20 + i, 8)} />
				))}
				<GreyTag x={X0 - 15} y={570} text="40 SNPs shown (green: same version)" at={K9.thousands + 30} size={24} />
				<g opacity={prog(f, K9.many, 12)}>
					<rect x={X0 - 15} y={700} width={40 * PIT} height={44} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
					<rect x={X0 - 15} y={700} width={40 * PIT * (sharedSoFar / 40)} height={44} rx={12} fill={AMBER} opacity={0.85} />
					<Sx x={X0 - 15} y={800} text={`shared at ${sharedSoFar} of 40 SNPs`} size={46} color={INK} weight={800} />
				</g>
				<Sx x={X0 + 700} y={800} text="many markers: a pattern" size={44} color={AMBER_INK} hand at={K9.pattern} />
			</Overlay>
		</>
	);
};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
void PlainArrow; void Chip;
