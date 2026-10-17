// B7 scenes 5a, 5b and 6: sickle cell followed along the chain-to-trait strip (a base, a codon, an amino acid,
// haemoglobin fibres, the cell, the body), then the strip itself: no shortcut from gene to trait, genotype and
// phenotype, and most traits involving many genes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AABead, AMBER, AMBER_INK, DrawPath, ExcerptCard, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Hb, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay,
	PLT, PLUM, PlateB, S, SpanBracket, StText, Strand, Sx, Tick, TraitStrip, clamp01, codonToAA, lerp, prog, pulse, scribbleEllipse, stX, ST_W,
} from './shared';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const STRIP_Y = 180, STRIP_H = 230;
/** The beta chain's first seven amino acids (mature chain numbering), normal and sickle. */
export const BETA7 = ['Val', 'His', 'Leu', 'Thr', 'Pro', 'Glu', 'Glu'];
if (codonToAA('GAG') !== 'Glu' || codonToAA('GUG') !== 'Val' || codonToAA('GTG') !== 'Val') throw new Error('sickle codon check failed');

/** Station summaries after 5b (used again by 6, 9 and 12). */
export const StripSummaries: React.FC<{y?: number; upto?: number; at?: number}> = ({y = STRIP_Y, upto = 4, at = -100}) => (
	<>
		{upto >= 0 ? <StText i={0} y={y + 96} lines={['DNA: GAG to GTG', 'mRNA: GAG to GUG']} at={at} size={28} /> : null}
		{upto >= 1 ? <StText i={1} y={y + 112} lines={['Glu to Val', 'at position 6']} at={at} size={30} /> : null}
		{upto >= 2 ? <StText i={2} y={y + 112} lines={['Hb forms fibres', 'when oxygen is low']} at={at} size={28} /> : null}
		{upto >= 3 ? <StText i={3} y={y + 112} lines={['sickle-shaped,', 'stiff red cells']} at={at} size={28} /> : null}
		{upto >= 4 ? <StText i={4} y={y + 100} lines={['sickle cell disease', 'blocked vessels,', 'too few red cells']} at={at} size={27} color={INK} /> : null}
	</>
);

// ---------- 5a. One base, one amino acid ----------
const K5 = cues(S('sickle-base'), {follow: "Let's follow one", four: 'built from four chains', beta: 'the beta chain', single: 'a single base change', gag: 'the codon G A G', gug: 'into G U G', mrna: 'in the mRNA', chart: 'The chart gives', valine: 'valine instead of', glu: 'of glutamate', sixth: 'the sixth amino acid', one: 'So one base', hundred: 'a hundred and forty-six'});
const PIT = 92, TW = 72, TH = 54;
export const SceneSickleBaseB7: React.FC = () => {
	const f = useCurrentFrame();
	const chD = prog(f, K5.single + 14, 1);
	const chM = prog(f, K5.gug, 1);
	const flip = prog(f, K5.sixth + 12, 1);
	const draw = [0, 1, 2, 3, 4].map(i => prog(f, 4 + i * 6, 14));
	return (
		<>
			<Heading text="One real case: sickle cell" at={4} size={56} />
			<Overlay>
				<TraitStrip y={STRIP_Y} h={STRIP_H} at={0} draw={draw} lit={[vis(f, K5.single, K5.chart), vis(f, K5.sixth, K5.one), vis(f, K5.four, K5.single)]} />
				{/* station 3: haemoglobin, four chains */}
				<Hb x={stX(2)} y={STRIP_Y + 112} s={0.95} o={prog(f, K5.four, 14)} />
				<Sx x={stX(2)} y={STRIP_Y + 210} text="2 alpha + 2 beta chains" size={24} color={GREY_INK} weight={600} anchor="middle" at={K5.beta} />
				{/* station 1 and 2 summaries */}
				<StText i={0} y={STRIP_Y + 96} lines={['DNA: GAG to GTG']} at={K5.single + 16} size={28} />
				<StText i={0} y={STRIP_Y + 132} lines={['mRNA: GAG to GUG']} at={K5.mrna} size={28} />
				<StText i={1} y={STRIP_Y + 112} lines={['Glu to Val', 'at position 6']} at={K5.sixth + 14} size={30} />
				{/* work area: coding strand, mRNA, chart, beads */}
				<Sx x={150} y={510} text="beta chain gene, coding strand (DNA)" size={32} color={PLUM} hand at={K5.single} />
				<g opacity={prog(f, K5.single, 14)}>
					<Strand x={220} y={540} letters="GAG" pitch={PIT} face="down" color={PLUM} tw={TW} th={TH} so={20} thick={7} letterOf={i => (i === 1 && chD > 0.5 ? 'T' : 'GAG'[i])} glow={i => (i === 1 ? Math.max(pulse(f, K5.single + 10, 30), chD * 0.6) : 0)} />
				</g>
				<Sx x={150} y={720} text="mRNA codon" size={32} color={MRNA_INK} hand at={K5.gag} />
				<g opacity={prog(f, K5.gag, 14)}>
					<Strand x={220} y={750} letters="GAG" pitch={PIT} face="down" color={MRNA} tw={TW} th={TH} so={20} thick={7} letterOf={i => (i === 1 && chM > 0.5 ? 'U' : 'GAG'[i])} glow={i => (i === 1 ? Math.max(pulse(f, K5.gug, 30), chM * 0.6) : 0)} />
				</g>
				<ExcerptCard x={640} y={500} w={340} rows={['GAG', 'GUG']} at={K5.chart - 4} lit={{GAG: vis(f, K5.glu, K5.sixth + 30), GUG: vis(f, K5.valine, K5.sixth + 30)}} />
				<Sx x={1150} y={510} text="beta chain: amino acids 1 to 7" size={32} color={INK_SOFT} hand at={K5.sixth - 6} />
				{BETA7.map((aa, i) => {
					const x = 1180 + i * 96;
					const o = prog(f, K5.sixth - 6 + i * 3, 10);
					return (
						<g key={i}>
							<Sx x={x} y={572} text={String(i + 1)} size={26} color={INK_SOFT} weight={700} anchor="middle" at={K5.sixth - 6 + i * 3} />
							{i > 0 ? <line x1={x - 96 + 36} y1={630} x2={x - 36} y2={630} stroke={INK} strokeWidth={5} opacity={o} /> : null}
							<AABead x={x} y={630} aa={i === 5 && flip > 0.5 ? 'Val' : aa} r={36} o={o} ring={i === 5 ? prog(f, K5.sixth + 8, 10) : 0} />
						</g>
					);
				})}
				<Sx x={1460} y={790} text="1 of 146 amino acids changed" size={50} color={AMBER_INK} hand anchor="middle" at={K5.hundred} />
				<Sx x={1460} y={850} text="one base, one amino acid" size={34} color={INK_SOFT} hand anchor="middle" at={K5.one} />
			</Overlay>
		</>
	);
};

// ---------- 5b. From the protein to the trait ----------
const K6 = cues(S('sickle-trait'), {glu: 'Glutamate carries a charge', val: 'valine avoids water', two: 'two copies', low: 'when oxygen is low', stick: 'stick to each other', stack: 'stack into long stiff fibres', bend: 'The fibres bend', sickle: 'a sickle shape', stiff: 'Sickle cells are stiff', block: 'block small blood vessels', pain: 'cause pain', brk: 'break down quickly', few: 'too few red cells', trait: 'That whole pattern', disease: 'sickle cell disease'});
const HB0: [number, number][] = [[230, 640], [430, 600], [640, 660], [330, 860], [580, 880]];
const HB1: [number, number][] = [[210, 770], [330, 770], [450, 770], [570, 770], [690, 770]];
/** A coded red cell: round (biconcave) or sickle; o2 fade for breakdown (outline only). */
const RedCell: React.FC<{x: number; y: number; sickle?: boolean; r?: number; ghost?: number; rot?: number}> = ({x, y, sickle = false, r = 26, ghost = 0, rot = 0}) => {
	const fill = ghost > 0.01 ? `rgba(204,72,60,${0.9 * (1 - ghost)})` : '#cc483c';
	if (sickle) return <path d={`M${-r * 1.6},${r * 0.2} C${-r * 0.8},${-r * 1.1} ${r * 0.8},${-r * 1.1} ${r * 1.6},${r * 0.2} C${r * 0.7},${-r * 0.35} ${-r * 0.7},${-r * 0.35} ${-r * 1.6},${r * 0.2} Z`} transform={`translate(${x},${y}) rotate(${rot})`} fill={fill} stroke="#7d2a22" strokeWidth={3} strokeDasharray={ghost > 0.5 ? '6 6' : undefined} />;
	return (
		<g transform={`translate(${x},${y})`}>
			<ellipse rx={r} ry={r * 0.92} fill={fill} stroke="#7d2a22" strokeWidth={3} />
			<ellipse rx={r * 0.45} ry={r * 0.4} fill="#e2786c" opacity={1 - ghost} />
		</g>
	);
};
export const SceneSickleTraitB7: React.FC = () => {
	const f = useCurrentFrame();
	const off = prog(f, K6.low, 26);
	const st = prog(f, K6.stick, 40);
	const sickle = prog(f, K6.bend + 6, 26);
	const flow = Math.max(0, f - K6.block + 10);
	const jam = prog(f, K6.block + 10, 30);
	const ghost = prog(f, K6.brk + 6, 24);
	return (
		<>
			<Heading text="From the protein to the trait" at={4} size={56} />
			<Overlay>
				<TraitStrip y={STRIP_Y} h={STRIP_H} at={-100} lit={[0, 0, vis(f, K6.glu, K6.bend), vis(f, K6.bend, K6.block), prog(f, K6.trait, 14)]} />
				<StripSummaries upto={1} />
				<Hb x={stX(2)} y={STRIP_Y + 112} s={0.95} o={1 - prog(f, K6.stack + 10, 14)} />
				<StText i={2} y={STRIP_Y + 112} lines={['Hb forms fibres', 'when oxygen is low']} at={K6.stack + 14} size={28} />
				<StText i={3} y={STRIP_Y + 112} lines={['sickle-shaped,', 'stiff red cells']} at={K6.sickle} size={28} />
				<StText i={4} y={STRIP_Y + 100} lines={['sickle cell disease']} at={K6.disease} size={27} color={AMBER_INK} />
				<StText i={4} y={STRIP_Y + 135} lines={['blocked vessels,', 'too few red cells']} at={K6.trait + 6} size={27} />
				<GreyTag x={stX(0)} y={STRIP_Y + STRIP_H + 12} text="two copies of the allele" at={K6.two} size={26} anchor="middle" />
				{/* left panel: haemoglobin fibres */}
				<Fade at={0}>
					<rect x={100} y={490} width={780} height={540} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<Sx x={130} y={545} text="Glu (charged) to Val (water-avoiding)" size={32} color={INK_SOFT} hand at={K6.glu} />
				{HB0.map((p, i) => {
					const x = lerp(p[0], HB1[i][0], st), y = lerp(p[1], HB1[i][1], st);
					return <Hb key={i} x={x} y={y} s={0.95} rot={st * 0} o={prog(f, 4 + i * 4, 12)} val={prog(f, K6.val, 12)} valPulse={pulse(f, K6.val + 8, 30)} o2={1} o2Off={off} labels={false} />;
				})}
				<Fade at={K6.stack + 8}>
					<rect x={150} y={712} width={600} height={116} rx={58} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeDasharray="14 10" />
				</Fade>
				<Sx x={130} y={1000} text="sticky, water-avoiding patch" size={32} color={GREY_INK} hand at={K6.val + 6} out={K6.stack} />
				<Sx x={130} y={1000} text="fibres form when oxygen is low" size={36} color={AMBER_INK} hand at={K6.stack + 10} />
				{/* right top: round cells bend into sickle cells */}
				<Fade at={K6.bend - 10}>
					<rect x={920} y={490} width={900} height={250} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<PlateB p={PLT.normalHalf} id="b7-norm" cx={1090} cy={615} w={232} o={prog(f, K6.bend - 10, 12) * (1 - sickle)} />
				<PlateB p={PLT.sickleHalf} id="b7-sick" cx={1090} cy={615} w={200} o={sickle} />
				<Sx x={1250} y={590} text="the fibres bend the cell" size={36} color={INK_SOFT} hand at={K6.bend + 4} />
				<Sx x={1250} y={650} text="sickle cells: stiff" size={40} color={AMBER_INK} hand at={K6.stiff} />
				{/* right bottom: a small vessel */}
				<Fade at={K6.block - 12}>
					<rect x={920} y={760} width={900} height={270} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<path d="M950,810 C1150,810 1300,840 1480,862 L1790,862" fill="none" stroke="#9a5a4a" strokeWidth={8} strokeLinecap="round" />
					<path d="M950,960 C1150,960 1300,930 1480,912 L1790,912" fill="none" stroke="#9a5a4a" strokeWidth={8} strokeLinecap="round" />
				</Fade>
				{f >= K6.block - 12 ? [0, 1, 2].map(k => {
					const x = 980 + ((flow * 3 + k * 150) % 460);
					return <g key={k} opacity={(1 - jam * 0.8) * prog(f, K6.block - 12, 10)}><RedCell x={x} y={885} r={22} /></g>;
				}) : null}
				<g opacity={prog(f, K6.block, 12)}>
					<RedCell x={lerp(1050, 1420, jam)} y={887} sickle r={30} rot={-6} ghost={0} />
				</g>
				<Ring2 cx={1420} cy={887} at={K6.pain} />
				<Sx x={950} y={1010} text="blocks small vessels: pain" size={34} color={AMBER_INK} hand at={K6.pain} />
				<g opacity={prog(f, K6.brk, 12)}>
					<RedCell x={1640} y={985} sickle r={22} ghost={ghost} rot={8} />
					<RedCell x={1740} y={975} sickle r={22} ghost={ghost} rot={-12} />
				</g>
				<Sx x={1400} y={1010} text="short-lived: too few red cells" size={30} color={GREY_INK} hand at={K6.few} />
			</Overlay>
		</>
	);
};
const Ring2: React.FC<{cx: number; cy: number; at: number}> = ({cx, cy, at}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={scribbleEllipse(cx, cy, 64, 46, 5)} at={at} dur={18} color={AMBER} width={5} />;
};

// ---------- 6. No shortcut: genotype to phenotype ----------
const K7 = cues(S('no-shortcut'), {notice: 'Notice how many', directly: "Genes don't become traits directly", gene: 'A gene codes for', poly: 'a polypeptide', folds: 'folds into a protein', cell: 'changes what a cell does', trait: 'shows up as a trait', alleles: 'Your set of alleles', genotype: 'is your genotype', observe: 'The traits you can observe', shape: "a cell's shape", flower: 'the colour of a flower', phenotype: 'are your phenotype', many: 'most traits involve many proteins', genes: 'so many genes'});
export const SceneNoShortcutB7: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 380;
	const pen = [K7.gene, K7.poly, K7.folds, K7.cell, K7.trait];
	const lit = pen.map((p, i) => vis(f, p, i < 4 ? pen[i + 1] + 4 : K7.alleles));
	const crossAt = K7.directly + 30;
	return (
		<>
			<Heading text="No shortcut from gene to trait" at={4} size={56} />
			<Overlay>
				<TraitStrip y={Y} h={STRIP_H} at={0} lit={lit} />
				<StripSummaries y={Y} upto={4} at={6} />
				{/* the tempting shortcut, struck out */}
				<Fade at={K7.directly}>
					<DrawPath d={`M${stX(0)},${Y - 12} C${stX(1)},${Y - 150} ${stX(3)},${Y - 150} ${stX(4)},${Y - 12}`} at={K7.directly} dur={24} color={GREYT} width={5} dash="12 10" />
					<Sx x={960} y={222} text="genes become traits" size={40} color={GREY_INK} hand anchor="middle" at={K7.directly + 10} />
					<DrawPath d={scribbleEllipse(960, 210, 210, 40, 9, 1.1)} at={crossAt} dur={16} color={GREYT} width={5} />
					<DrawPath d="M760,238 L1160,186" at={crossAt + 8} dur={10} color={GREYT} width={6} />
				</Fade>
				<GreyTag x={960} y={300} text="skips the protein and the cell" at={crossAt + 14} size={26} anchor="middle" />
				{/* genotype and phenotype */}
				<SpanBracket x1={stX(0) - 150} x2={stX(0) + 150} y={Y + STRIP_H + 30} at={K7.genotype} label="genotype: the alleles you have" size={30} />
				<SpanBracket x1={stX(4) - 150} x2={stX(4) + 150} y={Y + STRIP_H + 30} at={K7.phenotype} label="phenotype: what you can observe" size={28} />
				<PlateB p={PLT.sickleHalf} id="b7-ns-sick" cx={stX(4) - 75} cy={Y + STRIP_H + 150} w={110} o={prog(f, K7.shape, 12)} />
				<PlateB p={PLT.hydPink} cx={stX(4) + 80} cy={Y + STRIP_H + 150} w={120} o={prog(f, K7.flower, 12)} />
				{/* most traits: many genes */}
				{[0, 1, 2].map(r => (
					<g key={r} opacity={0.55 * prog(f, K7.genes - 6 + r * 6, 14)}>
						{[0, 1, 2, 3].map(c => (
							<g key={c}>
								<rect x={150 + c * 300} y={760 + r * 86} width={200} height={56} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.35)" strokeWidth={3} />
								{c === 0 ? <text x={250} y={798 + r * 86} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>{`gene ${r + 2}`}</text> : null}
								{c < 3 ? <path d={`M${356 + c * 300},${788 + r * 86} L${440 + c * 300},${788 + r * 86}`} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" /> : null}
							</g>
						))}
					</g>
				))}
				{[0, 1, 2].map(r => <g key={r} opacity={prog(f, K7.genes + 4 + r * 6, 12)}><DrawPath d={`M1252,${788 + r * 86} C1360,${780 + r * 86} 1400,690 ${stX(4) - 150},${Y + STRIP_H + 4}`} at={K7.genes + 4 + r * 6} dur={20} color={AMBER_INK} width={4} dash="4 10" /></g>)}
				<GreyTag x={1150} y={990} text="most traits: many genes" at={K7.genes + 20} size={30} />
			</Overlay>
		</>
	);
};
void AMBER; void FONT_DISPLAY; void INK; void ST_W; void Tick; void clamp01;
