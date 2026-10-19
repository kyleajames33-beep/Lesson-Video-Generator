// B6c scenes 4 to 6: tRNA as the adaptor, codon meets anticodon (antiparallel, ends on every sequence), and reading
// the codon chart with the mRNA codon.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, BbArrow, Chip, Cross, DrawPath, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay, PlainArrow,
	SpanBracket, Strand, Sx, cw, kf, prog,
} from '../bio-m5-b06b/shared';
import {AABead, CHART, CodonChart, PB, ProteinBlob, S, SOC, THC, TRNA_INK, TRna, TWC, anticodonOf, beadPos, chartLine, codonToAA, reverse} from './shared';

/** A short codon piece (tiles up) centred at local x 0, backbone at local y, inside a scaled group. */
export const CodonPiece: React.FC<{y: number; codon: string; glow?: (i: number) => number; ends?: boolean; arrow?: boolean}> = ({y, codon, glow, ends = true, arrow = false}) => (
	<g>
		<line x1={-1.5 * PB - 26} y1={y} x2={-1.5 * PB} y2={y} stroke={MRNA} strokeWidth={7} strokeLinecap="round" />
		<line x1={1.5 * PB} y1={y} x2={1.5 * PB + 26} y2={y} stroke={MRNA} strokeWidth={7} strokeLinecap="round" />
		<Strand x={-PB} y={y} letters={codon} pitch={PB} face="up" color={MRNA} tw={TWC} th={THC} so={SOC} thick={7} glow={glow} />
		{ends ? (
			<g>
				<text x={-1.5 * PB - 52} y={y + 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={MRNA_INK}>5'</text>
				<text x={1.5 * PB + 52} y={y + 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={MRNA_INK}>3'</text>
			</g>
		) : null}
		{arrow ? <BbArrow x={PB * 0.5} y={y} dir={1} /> : null}
	</g>
);
export const DOCK_DY = SOC + THC + 10 + THC; // codon backbone below a docked tRNA's anchor

// ---------- 4. tRNA, the adaptor ----------
const H4 = 'trna-adaptor';
const K4 = cues(S(H4), {trna: 'transfer RNA or tRNA', strand: 'a short strand of RNA', folded: 'folded into a compact shape', one: 'one particular amino acid', three: 'three exposed bases', anti: 'the anticodon', pairs: 'pairs with a codon', rules: 'same rules', adaptor: 'the adaptor', matches: 'one end matches the code', holds: 'the other holds the amino acid', many: 'many kinds of tRNA', enzymes: 'enzymes load each kind', own: 'its own amino acid'});
const KINDS = ['AUG', 'GAA', 'GCU', 'GGU'];
export const SceneTrna: React.FC = () => {
	const f = useCurrentFrame();
	const draw = prog(f, K4.strand - 6, 40);
	const lower = prog(f, K4.pairs, 22);
	const shrink = prog(f, K4.many - 6, 24);
	const gx = 560 - 290 * shrink, gy = 600 + 30 * shrink, gs = 1.55 - 0.6 * shrink;
	const labelsO = 1 - prog(f, K4.many - 10, 12);
	const kx = (i: number) => 700 + i * 280;
	const KY = 760;
	// the loading enzyme: a wrong bead bumps off the Gly tRNA, then the right one is loaded
	const gb = beadPos(kx(3), KY, 0.85);
	const t = f - (K4.enzymes - 6);
	const wrongO = t < 0 || t > 50 ? 0 : Math.min(1, t / 6) * (1 - Math.max(0, (t - 30) / 20));
	const wx = gb[0] + 140 - Math.min(1, t / 16) * 120 + Math.max(0, t - 18) * 4;
	const wy = gb[1] - 20 - Math.max(0, t - 18) * 3;
	const load = prog(f, K4.own - 10, 14);
	return (
		<>
			<Heading text="tRNA: the adaptor" at={4} size={58} />
			<Overlay>
				<g transform={`translate(${gx},${gy}) scale(${gs})`}>
					<CodonPiece y={DOCK_DY} codon="GAA" glow={i => pulse(f, K4.pairs + 16 + i * 4, 20)} ends={false} />
					<g transform={`translate(0,${-70 * (1 - lower)})`}>
						<TRna x={0} ya={0} anti={prog(f, K4.three - 4, 8) > 0.5 ? anticodonOf('GAA') : undefined} aa="Glu" beadO={prog(f, K4.one, 12)} draw={draw} tileGlow={i => pulse(f, K4.three + 4 + i * 5, 24)} ends={false} hi={pulse(f, K4.folded + 10, 40) * 0.8} />
					</g>
				</g>
				<g opacity={labelsO}>
					<Sx x={900} y={330} text="folds on itself" size={36} color={TRNA_INK} hand at={K4.folded + 10} />
					<Sx x={900} y={250} text="amino acid end" size={40} color={AMBER_INK} hand at={K4.one + 8} />
					<Sx x={900} y={720} text="anticodon: three exposed bases" size={40} color={TRNA_INK} hand at={K4.anti} />
					<Sx x={900} y={800} text="pairs with a codon: A with U, C with G" size={36} color={MRNA_INK} hand at={K4.rules} />
					<Fade at={K4.adaptor}>
						<DrawPath d="M1500,250 L1530,250 L1530,760 L1500,760" at={K4.adaptor} dur={16} color={AMBER} width={5} />
					</Fade>
					<Sx x={1560} y={520} text="adaptor" size={50} color={AMBER_INK} hand at={K4.adaptor + 6} />
					<Sx x={1160} y={300} text="holds the amino acid" size={34} color={INK} hand at={K4.holds} />
					<Sx x={1160} y={660} text="matches the code (bases)" size={34} color={INK} hand at={K4.matches} />
				</g>
				{/* many kinds, each loaded with its own amino acid */}
				{KINDS.map((c, i) => (
					<g key={c} opacity={prog(f, K4.many + i * 6, 12)}>
						<TRna x={kx(i)} ya={KY} s={0.85} anti={anticodonOf(c)} aa={codonToAA(c)} beadO={i === 3 ? load : 1} />
						<Sx x={kx(i)} y={KY + 110} text={`for ${c}`} size={30} color={MRNA_INK} hand anchor="middle" at={K4.many + i * 6} />
					</g>
				))}
				<ProteinBlob x={gb[0] + 130} y={gb[1] - 20} r={38} o={prog(f, K4.enzymes - 10, 10)} label="loading enzyme" />
				<AABead x={wx} y={wy} aa="Ala" r={26} o={wrongO} />
				<GreyTag x={1300} y={980} text="wrong amino acid: rejected" at={K4.enzymes + 14} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 5. Codon meets anticodon ----------
const H5 = 'codon-anticodon';
const S5 = S(H5);
const K5 = cues(S5, {opposite: 'run in opposite directions', dna: 'just as in DNA', gaa: "G A A from its 5' end", cuu: "C U U from its 3' end", own: "Written the tRNA's own way", uuc: 'that anticodon is U U C', keep: 'Keep the ends', confuse: "won't confuse the two"});
export const SceneCodonAnticodon: React.FC = () => {
	const f = useCurrentFrame();
	const dock = prog(f, K5.opposite - 10, 26);
	const gx = 720, gy = 640, gs = 1.5;
	const gW = (k: number) => cw(S5, "G A A from its 5' end", k);
	const cW = (k: number) => cw(S5, "C U U from its 3' end", k);
	const turn = prog(f, K5.own + 10, 22, (u: number) => u);
	const sx = Math.abs(Math.cos(turn * Math.PI));
	const anti = anticodonOf('GAA');
	return (
		<>
			<Heading text="Codon meets anticodon" at={4} size={58} />
			<Overlay>
				<g transform={`translate(${gx},${gy}) scale(${gs})`}>
					<CodonPiece y={DOCK_DY} codon="GAA" glow={i => pulse(f, gW(i), 22)} arrow />
					<g transform={`translate(0,${-80 * (1 - dock)})`}>
						<TRna x={0} ya={0} anti={anti} aa="Glu" tileGlow={i => pulse(f, cW(i), 22)} />
						<BbArrow x={-PB * 0.5} y={-9} dir={-1} />
					</g>
				</g>
				<Sx x={gx} y={gy + DOCK_DY * gs + 110} text="codon 5' GAA 3' pairs with anticodon 3' CUU 5'" size={36} color={INK} weight={700} anchor="middle" at={K5.cuu + 20} />
				<Chip x={1220} y={250} text="antiparallel, as in DNA" at={K5.dna} size={38} color={INK} stroke={AMBER} />
				{/* the anticodon written the tRNA's own way */}
				<Fade at={K5.own} out={K5.keep}>
					<g transform={`translate(1500,470) scale(${Math.max(0.02, sx)},1)`}>
						<text x={0} y={0} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52}} fill={TRNA_INK}>{turn < 0.5 ? `3' ${anti.split('').join(' ')} 5'` : `5' ${reverse(anti).split('').join(' ')} 3'`}</text>
					</g>
					<Sx x={1500} y={400} text="the same anticodon" size={34} color={INK_SOFT} hand anchor="middle" at={K5.own} />
				</Fade>
				<Fade at={-100} out={K5.keep}><Sx x={1500} y={540} text={`= 3' ${anti.split('').join(' ')} 5'`} size={40} color={TRNA_INK} weight={700} anchor="middle" at={K5.uuc + 10} /></Fade>
				{/* the pair rule card */}
				<Fade at={K5.keep}>
					<rect x={1150} y={720} width={690} height={250} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
				</Fade>
				<Sx x={1180} y={780} text="codon 5' GAA 3'" size={36} color={MRNA_INK} weight={700} at={K5.keep} />
				<Sx x={1180} y={830} text="anticodon 3' CUU 5' (= 5' UUC 3')" size={36} color={TRNA_INK} weight={700} at={K5.keep + 6} />
				<Sx x={1180} y={895} text={`codon 5' GCA 3'`} size={28} color={MRNA_INK} weight={600} at={K5.keep + 16} />
				<Sx x={1180} y={935} text={`anticodon 3' ${anticodonOf('GCA')} 5'`} size={28} color={TRNA_INK} weight={600} at={K5.keep + 20} />
				<Sx x={96} y={1000} text="Keep the ends on every sequence." size={40} color={AMBER_INK} hand at={K5.confuse - 10} />
			</Overlay>
		</>
	);
};

// ---------- 6. Reading the codon chart ----------
const H6 = 'codon-chart';
const S6 = S(H6);
const K6 = cues(S6, {which: 'Which amino acid', chart: 'the codon chart', s1960: 'in the 1960s', look: 'look up the mRNA codon', never: 'never the anticodon or the DNA', take: 'Take G A A', first: 'first base G', second: 'second base A', third: 'third base A', glu: 'codes for glutamate', written: 'written Glu', aug: 'A U G the start codon', met: 'methionine Met'});
export const SceneCodonChart: React.FC = () => {
	const f = useCurrentFrame();
	const isAug = f >= K6.aug;
	const row = isAug ? 2 : 3, col = isAug ? 0 : 2;
	const rowHi = isAug ? prog(f, K6.aug, 10) : prog(f, K6.first, 12);
	const colHi = isAug ? prog(f, K6.aug + 10, 10) : prog(f, K6.second, 12);
	const lineHi: Record<string, number> = isAug ? {AUG: prog(f, K6.aug + 20, 10)} : {GAA: prog(f, K6.third, 10)};
	const gaa = chartLine(CHART, 'GAA'), aug = chartLine(CHART, 'AUG');
	const glides = (at: number) => kf(f, [[at, 0], [at + 24, 1]]);
	return (
		<>
			<Heading text="Reading the codon chart" at={4} size={58} />
			<Overlay>
				<CodonChart at={K6.chart - 10} row={row} col={col} rowHi={rowHi} colHi={colHi} lineHi={lineHi} />
				<GreyTag x={1500} y={240} text="worked out in the 1960s" at={K6.s1960} size={26} />
				<Chip x={1500} y={300} text="mRNA codons only" at={K6.look} size={36} color={MRNA_INK} stroke={MRNA} />
				{/* two wrong lookups stopped */}
				{[{t: 'UUC', y: 420, lab: 'anticodon'}, {t: 'CTT', y: 520, lab: 'DNA'}].map((g, i) => {
					const u = glides(K6.never + i * 8);
					return (
						<g key={g.t} opacity={prog(f, K6.never + i * 8, 8) * (1 - prog(f, K6.take - 6, 12))}>
							<g transform={`translate(${-60 * u},0)`}><Chip x={1560} y={g.y} text={`${g.t} (${g.lab})`} at={-100} size={34} color={GREY_INK} hand={false} fill="#eceeef" stroke={GREYT} /></g>
							<Cross x={1530} y={g.y + 30} at={K6.never + 20 + i * 8} s={22} />
						</g>
					);
				})}
				<Sx x={1500} y={650} text="G A A" size={56} color={MRNA_INK} weight={800} at={K6.take} out={K6.aug - 4} />
				<Sx x={1500} y={710} text="1st G: row" size={34} color={INK} hand at={K6.first} out={K6.aug - 4} />
				<Sx x={1500} y={755} text="2nd A: column" size={34} color={INK} hand at={K6.second} out={K6.aug - 4} />
				<Sx x={1500} y={800} text="3rd A: line" size={34} color={INK} hand at={K6.third} out={K6.aug - 4} />
				<PlainArrow x1={1490} y1={790} x2={1405} y2={gaa.y - 8} at={K6.third + 4} color={AMBER_INK} width={5} out={K6.aug - 4} />
				<AABead x={1560} y={880} aa="Glu" r={44} o={prog(f, K6.glu, 10) * (1 - prog(f, K6.aug - 4, 10))} />
				<Sx x={1615} y={892} text="glutamate" size={36} color={INK} hand at={K6.written} out={K6.aug - 4} />
				<Sx x={1500} y={650} text="A U G" size={56} color={MRNA_INK} weight={800} at={K6.aug} />
				<PlainArrow x1={1490} y1={700} x2={1405} y2={aug.y - 8} at={K6.aug + 24} color={AMBER_INK} width={5} />
				<AABead x={1560} y={880} aa="Met" r={44} o={prog(f, K6.met, 10)} />
				<Sx x={1615} y={892} text="methionine (start)" size={34} color={INK} hand at={K6.met + 4} />
			</Overlay>
		</>
	);
};
void AMBER; void INK; void SpanBracket; void TWC; void codonToAA;
