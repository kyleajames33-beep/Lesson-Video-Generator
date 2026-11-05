// M6 B05 scenes 6 to 10 on the gene map: coding DNA (about 1 to 2 per cent; a codon change and its four outcomes),
// the promoter and far regulatory sequences (the polymerase binds less well, less mRNA, less protein, every codon
// correct), lactase persistence (one regulatory base change about 14,000 bases upstream keeps the gene on), introns cut
// out of the mRNA (a change mid-intron does nothing, a change at the cut signal changes the protein) and DNA with no
// known job, and the judgement: ask what the stretch does, not whether it is translated.
// Quality pass 2 (6 Nov, root review): the strand is the hero (about four times thicker, 89% of the width, at
// mid-height, regions as coloured blocks); the painted polymerase docks and travels along the gene while the mRNA
// grows behind it; labels are 30 px or more in the hand font and role colours (teal control, warm coding, plum mRNA);
// the lactase scene carries a large graph with the small intestine and the milk glass as anchors; the coding and
// non-coding contrast is two large panels. Cues and narration are unchanged.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {FillBar, PlateAt, SlimStrand, wForH} from '../bio-m6-b01/parts';
import {Term, TickS} from '../bio-m6-b03/parts';
import {S} from './common';
import {PLATES} from './assets';
import {PLATES as B04P} from '../bio-m6-b04/assets';
import {
	AMBER, AMBER_INK, Band, CodonText, Dot, FONT_HAND, GENE_X, GG, GMID, GN, GP, GREYT, GREY_INK, GX0, GY, GeneMap, INK, INK_SOFT, LBY, MRNA, MRNA_INK, MiniChip,
	MrnaRibbon, PLUM, Pol, Protein, RLab, TEALC, Tag, WARM, clamp01, gr, lerp, prog, regC, regX, smooth, vis,
} from './parts';
import type {RegKey} from './parts';

const GENE_C = (GENE_X[0] + GENE_X[1]) / 2;
const WARM_INK = '#9a5b22';
const PX = 1700, PY = 250;
const TAGY = 830;

// ---------- 6. Coding DNA ----------
const K6 = cues(S('coding'), {second: 'the second question', pct: 'one to two per cent', coding: 'is coding DNA', stretches: 'the stretches whose codons', alters: 'alters a codon', silent: 'be silent', swap: 'swap an amino acid', stop: 'add an early stop', shift: 'shift the frame', rest: 'The rest is', nc: 'non-coding DNA', junk: 'junk'});
export const SceneCoding: React.FC = () => {
	const f = useCurrentFrame();
	const rowO = vis(f, K6.alters + 6, K6.rest, 12);
	const sw = prog(f, K6.alters + 26, 10);
	const cx = regC('e2');
	const chips: [string, number][] = [['same', K6.silent], ['swapped', K6.swap], ['stop', K6.stop], ['shifted', K6.shift]];
	return (
		<>
			<Heading text="Where in the DNA?" at={K6.second} size={60} />
			<Overlay>
				{/* where the gene sits: the painted chromosome, a zoom wedge from one band down to the gene */}
				<PlateAt p={B04P.chrom} cx={1690} cy={250} w={wForH(B04P.chrom, 300)} at={2} out={K6.alters} />
				<g opacity={vis(f, 30, K6.alters, 14)}>
					<path d={`M1672,300 L${GENE_X[0]},${GY - 18} M1708,300 L${GENE_X[1]},${GY - 18}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 9" fill="none" />
					<rect x={1668} y={282} width={44} height={34} rx={6} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				</g>
				<RLab x={1500} y={250} text="one gene on a chromosome" at={30} out={K6.alters} anchor="end" size={38} color={INK} />
				<GeneMap draw={prog(f, 4, 40)} exons={prog(f, 20, 14)} brightCoding={vis(f, K6.coding, K6.alters, 12)} brightNC={vis(f, K6.nc, 10000, 14)} rungs={[{i: 34, o: prog(f, K6.alters + 4, 8) * (1 - prog(f, K6.rest, 10))}]} />
				<RLab x={GENE_C} y={LBY} text="a gene" at={24} out={K6.alters} size={42} color={WARM_INK} />
				{/* the coding fraction */}
				<g opacity={vis(f, K6.pct, K6.coding + 30, 12)}>
					<rect x={GX0} y={740} width={GN * GP} height={44} rx={22} fill="#eceae4" stroke="#c9c3b8" strokeWidth={3} />
					<rect x={GX0 + 4} y={744} width={Math.max(26, GN * GP * 0.015) * prog(f, K6.pct + 8, 16)} height={36} rx={18} fill="#d99a5a" />
				</g>
				<Tag x={GX0} y={850} text="coding: about 1 to 2% of human DNA" at={K6.pct + 10} out={K6.coding} size={46} color={WARM_INK} />
				<Term x={GX0} y={960} term="coding DNA" gloss="codons translated into protein" at={K6.coding} out={K6.alters} size={52} />
				{/* one codon changes, four possible outcomes */}
				<g opacity={rowO}>
					<line x1={gr(34)} y1={GY + GG + 16} x2={gr(34)} y2={690} stroke={AMBER} strokeWidth={4} strokeDasharray="7 7" />
					<rect x={cx - 92} y={698} width={184} height={84} rx={14} fill={AMBER} opacity={0.22 * prog(f, K6.alters + 20, 10)} />
					<CodonText x={cx - 230} y={760} codons={['CUU', 'GGA', 'UCA']} size={60} gap={34} o={1 - sw} />
					<CodonText x={cx - 230} y={760} codons={['CUU', 'GUA', 'UCA']} size={60} gap={34} hot={1} o={sw} />
					<Sx x={GX0} y={760} text="mRNA codons:" size={36} color={MRNA_INK} hand />
				</g>
				{chips.map(([t, at], k) => <MiniChip key={t} x={cx - 390 + k * 260} y={880} text={t} amber={k > 0} o={vis(f, at, K6.rest, 10)} size={40} />)}
				<Term x={GX0} y={960} term="non-coding DNA" gloss="not translated into protein" at={K6.nc} size={52} />
				<MiniChip x={gr(53)} y={GY - 50} text="junk?" o={prog(f, K6.junk, 10)} size={42} />
				{void K6.stretches}
			</Overlay>
		</>
	);
};

// ---------- 7. Non-coding DNA that controls a gene ----------
const K7 = cues(S('regulatory'), {some: 'some non-coding DNA controls', promoter: 'Remember the promoter', binds: 'polymerase binds', change: 'Change a base there', less: 'bind less well', mrna: 'less mRNA is made', every: 'Every codon is still correct', lessp: 'just less protein', other: 'Other control stretches', reg: 'regulatory sequences', far: 'sit far away', when: 'when a gene is switched on', which: 'in which cells'});
export const SceneRegulatory: React.FC = () => {
	const f = useCurrentFrame();
	// run 1: the polymerase drops onto the promoter, then travels along the gene; the mRNA grows behind it
	const dock = smooth(prog(f, K7.binds - 4, 22));
	const travel = smooth(prog(f, K7.binds + 24, 70));
	const run1 = 1 - prog(f, K7.change - 6, 12);
	const p0 = regC('promo');
	const polX1 = lerp(p0, GENE_X[1] + 40, travel);
	// run 2 (changed promoter): it hovers, tries to dock, slips off; a thin copy only
	const run2 = prog(f, K7.change - 6, 12) * (1 - prog(f, K7.reg, 14));
	const wob = f > K7.less && f < K7.less + 70 ? Math.abs(Math.sin(((f - K7.less) / 35) * Math.PI)) : 0;
	const thin = prog(f, K7.less + 30, 30);
	const reg = prog(f, K7.reg, 14);
	const polY = run1 > 0.5 ? lerp(GMID - 300, GMID, dock) : GMID - 150 + 120 * wob;
	const polX = run1 > 0.5 ? polX1 : p0;
	const polO = run1 > 0.5 ? dock * (1 - prog(f, K7.binds + 96, 12)) : run2;
	return (
		<>
			<Heading text="Non-coding DNA that controls a gene" at={K7.some} size={56} />
			<Overlay>
				<GeneMap brightNC={1 - prog(f, 10, 20)} promo={prog(f, K7.promoter, 12)} ctrl={reg} rungs={[{i: 21, o: prog(f, K7.change + 4, 8)}, {i: 6, o: 0}]} />
				<g opacity={1 - prog(f, 26, 12)}>
					<MiniChip x={gr(53)} y={GY - 50} text="junk?" size={42} />
					<DrawPath d={`M${gr(53) - 84},${GY - 92} L${gr(53) + 84},${GY - 40} M${gr(53) + 80},${GY - 94} L${gr(53) - 80},${GY - 38}`} at={4} dur={12} color={GREYT} width={6} />
				</g>
				<RLab x={regC('promo')} y={LBY} text="promoter" at={K7.promoter + 6} size={42} color={TEALC} />
				<RLab x={GENE_C} y={LBY} text="gene (coding)" at={K7.promoter + 20} out={K7.reg} size={40} color={WARM_INK} />
				{/* the mRNA: thick on run 1, thin on run 2 */}
				<MrnaRibbon grow={(Math.min(polX1, GENE_X[1]) - GENE_X[0]) / (GENE_X[1] - GENE_X[0])} th={22} o={run1 * prog(f, K7.binds + 26, 6)} />
				<MrnaRibbon grow={prog(f, K7.less + 30, 50, t => t)} th={lerp(22, 5, thin)} o={run2} />
				<Pol x={polX} y={polY} o={polO} />
				<Sx x={polX} y={polY - 150} text="RNA polymerase" size={38} color={INK} hand anchor="middle" opacity={vis(f, K7.binds + 6, K7.reg, 12) * (polO > 0.3 ? 1 : 0)} />
				<Sx x={GENE_X[1] + 24} y={GY - 48} text="mRNA" size={38} color={MRNA_INK} hand opacity={vis(f, K7.binds + 90, K7.reg, 12)} />
				<Protein x={PX} y={PY} p={lerp(1, 0.1, thin)} o={prog(f, K7.binds + 80, 14)} />
				<Sx x={PX} y={PY + 150} text="protein made" size={32} color={INK_SOFT} hand anchor="middle" opacity={prog(f, K7.binds + 80, 14)} />
				<Tag x={GX0} y={TAGY} text="normal: the polymerase binds and copies plenty" at={K7.binds + 60} out={K7.change} size={46} color={INK} />
				<Tag x={GX0} y={TAGY} text="changed promoter: binds less well, less mRNA, less protein" at={K7.less + 34} out={K7.reg} size={46} />
				{(['e1', 'e2', 'e3'] as RegKey[]).map((k, n) => <TickS key={k} x={regC(k)} y={GY - 110} at={K7.every + 8 + n * 6} out={K7.reg} s={36} />)}
				<Sx x={GX0} y={TAGY + 60} text="every codon still correct" size={40} color={WARM_INK} hand opacity={vis(f, K7.every + 8, K7.reg, 12)} />
				{reg > 0.01 ? <DrawPath d={`M${regC('ctrl')},${GY - 20} C${regC('ctrl') + 90},${GY - 170} ${regC('promo') - 90},${GY - 170} ${regC('promo') - 30},${GY - 20}`} at={K7.reg + 6} dur={20} color={TEALC} width={5} dash="10 8" /> : null}
				<RLab x={regC('ctrl') + 40} y={LBY} text="regulatory sequence" at={K7.reg} size={40} color={TEALC} />
				<Term x={GX0} y={960} term="regulatory sequences" gloss="control when, where and how much a gene is copied" at={K7.reg} size={46} />
				{void K7.mrna}{void K7.lessp}{void K7.other}{void K7.far}{void K7.when}{void K7.which}
			</Overlay>
		</>
	);
};

// ---------- 8. A real one: milk into adulthood ----------
const K8 = cues(S('lactase'), {stop: 'stop making lactase', enzyme: 'the enzyme that digests', weaning: 'after weaning', keep: 'keep making it', base: 'one base change', fourteen: 'fourteen thousand bases', identical: 'The enzyme is identical', stays: 'stays switched on', inh: "It's inherited", helped: 'helped milk drinkers', spread: 'spread through'});
/** The large lactase graph: lactase made against age. The usual curve falls after weaning; the persistent one stays up. */
const G8 = {x0: 640, x1: 1790, y0: 470, y1: 200, wean: 0.42};
const gxp = (u: number) => lerp(G8.x0, G8.x1, u);
const usualY = (u: number) => (u < G8.wean ? G8.y1 + 20 : lerp(G8.y1 + 20, G8.y0 - 28, smooth(clamp01((u - G8.wean) / 0.22))));
const curve = (fy: (u: number) => number, upto: number) => {
	const n = Math.max(2, Math.round(60 * clamp01(upto)));
	return Array.from({length: n + 1}, (_, k) => { const u = (k / n) * clamp01(upto); return `${k ? 'L' : 'M'}${gxp(u).toFixed(1)},${fy(u).toFixed(1)}`; }).join(' ');
};
const DY8 = 200;
export const SceneLactase: React.FC = () => {
	const f = useCurrentFrame();
	const usual = prog(f, K8.stop + 10, 80, t => t);
	const pers = prog(f, K8.keep, 60, t => t);
	const persist = f >= K8.stays;
	const dupO = vis(f, K8.identical + 6, K8.stays, 12);
	const brighten = vis(f, K8.helped, K8.spread + 40, 14);
	const dimX = regX('ctrl')[1];
	const Y = GY + DY8;
	const madeNow = persist ? 1 : 0.35 + 0.65 * prog(f, K8.keep, 30);
	return (
		<>
			<Heading text="A real one: milk into adulthood" at={4} size={56} />
			<Overlay>
				{/* anchors: where lactase works (small intestine) and what it digests (milk) */}
				<PlateAt p={PLATES.gut} cx={250} cy={255} w={240} at={2} />
				<g transform={`translate(250,545) scale(${1 + 0.1 * brighten}) translate(-250,-545)`}><PlateAt p={PLATES.milk} cx={250} cy={545} w={180} at={2} /></g>
				<Sx x={250} y={405} text="lactase: digests" size={34} color={INK} hand anchor="middle" opacity={prog(f, K8.enzyme, 12)} />
				<Sx x={250} y={442} text="milk sugar" size={34} color={INK} hand anchor="middle" opacity={prog(f, K8.enzyme + 4, 12)} />
				{/* the graph */}
				<g opacity={prog(f, K8.stop - 6, 14)}>
					<line x1={G8.x0} y1={G8.y0} x2={G8.x1} y2={G8.y0} stroke={INK} strokeWidth={4} />
					<line x1={G8.x0} y1={G8.y0} x2={G8.x0} y2={G8.y1 - 40} stroke={INK} strokeWidth={4} />
					{([['birth', 0], ['weaning', G8.wean], ['adult', 1]] as [string, number][]).map(([l, u]) => (
						<g key={l}>
							<line x1={gxp(u)} y1={G8.y0 - 10} x2={gxp(u)} y2={G8.y0 + 10} stroke={INK} strokeWidth={4} />
							<text x={gxp(u)} y={G8.y0 + 46} textAnchor={u === 1 ? 'end' : u === 0 ? 'start' : 'middle'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>{l}</text>
						</g>
					))}
					<line x1={gxp(G8.wean)} y1={G8.y1 - 30} x2={gxp(G8.wean)} y2={G8.y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" />
					<text x={G8.x0 - 24} y={(G8.y0 + G8.y1) / 2} transform={`rotate(-90 ${G8.x0 - 24} ${(G8.y0 + G8.y1) / 2})`} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK_SOFT}>lactase made</text>
				</g>
				<path d={curve(usualY, usual)} fill="none" stroke="#8a8378" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
				<path d={curve(() => G8.y1 + 20, pers)} fill="none" stroke="#5f8f52" strokeWidth={persist ? 13 : 9} strokeLinecap="round" />
				<Sx x={gxp(0.68)} y={G8.y0 - 50} text="most mammals: off after weaning" size={36} color={GREY_INK} hand opacity={prog(f, K8.stop + 60, 12)} />
				<Sx x={gxp(0.5)} y={G8.y1 - 4} text="dairy-farming adults: keep making it" size={36} color="#4a7a40" hand opacity={prog(f, K8.keep + 30, 12)} />
				<Tag x={G8.x1} y={150} text="lactase persistence: gene stays on" at={K8.stays + 20} size={44} anchor="end" />
				{/* the gene below, with the one changed base far upstream */}
				<GeneMap promo={1} ctrl={1} dy={DY8} rungs={[{i: 6, o: prog(f, K8.base + 6, 8)}]} />
				<MrnaRibbon y={Y - 56} th={4 + 18 * madeNow} o={0.3 + 0.7 * madeNow} />
				<RLab x={GENE_C} y={LBY + DY8 - 40} text="lactase gene" at={6} size={40} color={WARM_INK} />
				<RLab x={regC('ctrl') + 50} y={LBY + DY8 - 40} text="regulatory sequence" at={10} size={38} color={TEALC} />
				<RLab x={regC('promo')} y={LBY + DY8 - 40} text="promoter" at={12} size={36} color={TEALC} />
				<g opacity={prog(f, K8.fourteen, 12)}>
					<DrawPath d={`M${dimX + 6},${Y - 40} L${GENE_X[0] - 6},${Y - 40}`} at={K8.fourteen} dur={16} color={AMBER_INK} width={4} />
					<line x1={dimX + 6} y1={Y - 56} x2={dimX + 6} y2={Y - 24} stroke={AMBER_INK} strokeWidth={4} />
					<line x1={GENE_X[0] - 6} y1={Y - 56} x2={GENE_X[0] - 6} y2={Y - 24} stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={(dimX + GENE_X[0]) / 2} y={Y - 68} text="about 14,000 bases" size={38} color={AMBER_INK} hand anchor="middle" />
				</g>
				{/* the enzyme is the same in both */}
				<Protein x={1560} y={Y - 110} bar={false} r={50} o={dupO} />
				<Protein x={1730} y={Y - 110} bar={false} r={50} o={dupO} />
				<Sx x={1645} y={Y - 94} text="=" size={56} color={INK} weight={800} anchor="middle" opacity={dupO} />
				{/* inherited, and it spread */}
				<g opacity={prog(f, K8.inh, 12)}>
					<Dot x={640} y={1010} r={24} plum mut={1} />
					<DrawPath d="M670,1010 L740,1010" at={K8.inh + 4} dur={10} color={PLUM} width={4} />
					{Array.from({length: 10}, (_, k) => <Dot key={k} x={780 + k * 56} y={1010} r={21} mut={k < 2 ? prog(f, K8.inh + 12, 8) : prog(f, K8.spread + 6 + (k - 2) * 6, 8)} />)}
					<Sx x={1380} y={1022} text="spreads through dairy-farming populations" size={34} color={PLUM} hand opacity={prog(f, K8.spread, 12)} />
				</g>
				{void K8.weaning}
			</Overlay>
		</>
	);
};

// ---------- 9. Introns, and DNA with no known job ----------
const K9 = cues(S('introns'), {inside: 'sits inside genes', introns: 'contain introns', cut: 'cut out of the mRNA', middle: 'in the middle of an intron', nothing: 'usually does nothing', signal: 'the signal that marks', wrong: 'the wrong place', changes: 'the protein changes', noknown: 'no known job', neutral: 'often neutral'});
const EX: RegKey[] = ['e1', 'e2', 'e3'];
const MY9 = GY - 190;
/** The mRNA copy of the gene, introns included, made as the polymerase travels; then the introns lift out and the coding
 * pieces join (or, on a wrong cut, the middle piece leaves with them). */
const IntronCut: React.FC<{copy: number; cut: number; skip?: boolean; o?: number}> = ({copy, cut, skip = false, o = 1}) => {
	if (o <= 0.01 || copy <= 0.01) return null;
	const w = 6 * GP;
	const keep = skip ? [0, 2] : [0, 1, 2];
	const tot = keep.length * w;
	const x0 = GENE_C - tot / 2;
	const t = smooth(cut);
	const xEnd = lerp(GENE_X[0], GENE_X[1], clamp01(copy));
	return (
		<g opacity={o}>
			{EX.map((k, n) => {
				const [a] = regX(k);
				const kept = keep.indexOf(n);
				const tx = kept >= 0 ? x0 + kept * w : a;
				const x = lerp(a, tx, t);
				const lift = kept >= 0 ? 0 : 90 * t;
				const op = kept >= 0 ? 1 : 1 - t;
				const vis1 = clamp01((xEnd - a) / w);
				return vis1 > 0.01 ? <line key={k} x1={x + 4} y1={MY9 - lift} x2={x + w * vis1 - 4} y2={MY9 - lift} stroke={MRNA} strokeWidth={26} strokeLinecap="round" opacity={op} /> : null;
			})}
			{[[regX('e1')[1], regX('e2')[0]], [regX('e2')[1], regX('e3')[0]]].map(([a, b], k) => (xEnd > a ? (
				<path key={k} d={`M${a},${MY9 - 90 * t} C${a + 6},${MY9 - 80 - 90 * t} ${b - 6},${MY9 - 80 - 90 * t} ${Math.min(b, xEnd)},${MY9 - 90 * t}`} fill="none" stroke="#9a948a" strokeWidth={10} strokeLinecap="round" opacity={1 - t} />
			) : null))}
		</g>
	);
};
export const SceneIntrons: React.FC = () => {
	const f = useCurrentFrame();
	const loops = prog(f, K9.inside + 10, 20);
	// three runs of the cut: first, after a mid-intron change, after a change at the cut signal
	const run = f < K9.middle + 10 ? 0 : f < K9.signal + 20 ? 1 : 2;
	const base = [K9.introns + 10, K9.middle + 24, K9.signal + 40][run];
	const copy = prog(f, base, 40, t => t);
	const cut = prog(f, base + 50, 26);
	const mrnaO = run === 0 ? 1 - prog(f, K9.middle + 4, 6) : run === 1 ? 1 - prog(f, K9.signal + 14, 6) : 1 - prog(f, K9.noknown, 12);
	const loopApex = (k: number): [number, number] => [(k === 0 ? (regX('e1')[1] + regX('e2')[0]) / 2 : (regX('e2')[1] + regX('e3')[0]) / 2), GY - 14 - 52];
	const sigX = regX('e2')[0] - 6;
	const [ax, ay] = loopApex(0);
	const mutMid = vis(f, K9.middle + 6, K9.signal, 8);
	const mutSig = vis(f, K9.signal + 18, K9.noknown, 8);
	const short = run === 2 ? prog(f, base + 80, 14) : 0;
	const polO = copy > 0.01 && copy < 1 ? 1 : vis(f, base, base + 40, 6) * (copy < 1 ? 1 : 0);
	const polX = lerp(GENE_X[0], GENE_X[1], copy);
	return (
		<>
			<Heading text="Introns, and DNA with no known job" at={4} size={56} />
			<Overlay>
				<GeneMap introns={loops} rungs={[{i: 53, o: prog(f, K9.neutral - 10, 8)}]} />
				{EX.map((k, n) => <RLab key={k} x={regC(k)} y={LBY} text={`exon ${n + 1}`} at={K9.introns} out={K9.noknown} size={34} color={WARM_INK} />)}
				<RLab x={(regX('e1')[1] + regX('e2')[0]) / 2} y={LBY + 44} text="intron" at={K9.introns + 6} out={K9.noknown} size={34} color={GREY_INK} />
				<RLab x={(regX('e2')[1] + regX('e3')[0]) / 2} y={LBY + 44} text="intron" at={K9.introns + 10} out={K9.noknown} size={34} color={GREY_INK} />
				<Term x={GX0} y={980} term="introns" gloss="cut out of the mRNA" at={K9.introns} out={K9.noknown - 10} size={52} />
				<IntronCut copy={copy} cut={cut} skip={run === 2} o={mrnaO} />
				{polO > 0.01 && copy < 1 ? <Pol x={polX} y={GMID} o={polO} w={230} /> : null}
				<Sx x={GENE_X[0] - 20} y={MY9 + 12} text="mRNA" size={38} color={MRNA_INK} hand anchor="end" opacity={mrnaO * prog(f, K9.introns + 20, 10)} />
				<Tag x={GX0} y={TAGY} text="introns cut out, exons joined before translation" at={K9.cut + 20} out={K9.middle} size={46} />
				{/* a change mid-intron, then at the cut signal */}
				<circle cx={ax} cy={ay + 12} r={13} fill={AMBER} opacity={mutMid} />
				<g opacity={vis(f, K9.signal, K9.noknown, 10)}>
					<rect x={sigX - 7} y={GY - 26} width={14} height={GG + 52} rx={4} fill={INK} />
					<RLab x={sigX - 16} y={GY - 95} text="cut signal" at={K9.signal + 4} anchor="end" size={40} color={INK} />
				</g>
				<circle cx={sigX} cy={GY - 14} r={14} fill={AMBER} opacity={mutSig} />
				<Protein x={PX} y={PY} bar={false} o={prog(f, K9.middle + 60, 12) * (1 - prog(f, K9.noknown, 12))} short={short} ring={short} />
				<TickS x={PX + 90} y={PY - 60} at={K9.nothing + 20} out={K9.signal + 30} s={36} />
				<Tag x={GX0} y={TAGY} text="change mid-intron: cut out anyway, usually no effect" at={K9.nothing + 6} out={K9.signal + 30} size={46} />
				<Tag x={GX0} y={TAGY} text="change at the cut signal: wrong cut, protein changes" at={K9.changes} out={K9.noknown} size={46} />
				<RLab x={(GX0 + regX('promo')[0]) / 2 + 60} y={LBY} text="no known job" at={K9.noknown} size={40} color={GREY_INK} />
				<RLab x={(GENE_X[1] + GX0 + GN * GP) / 2} y={LBY} text="no known job" at={K9.noknown + 6} size={40} color={GREY_INK} />
				<Tag x={gr(53)} y={GY - 40} text="often neutral" at={K9.neutral} size={46} anchor="middle" />
				{void K9.wrong}
			</Overlay>
		</>
	);
};

// ---------- 10. So, coding or non-coding? ----------
const K10 = cues(S('which-matters'), {which: 'which matters more', neither: 'Neither, as a rule', coding: 'A coding change can be silent', nc: 'a non-coding change can switch', counts: 'What counts', job: 'does a job'});
/** One large comparison panel: a title, a hero strand segment with its region block and one changed base. */
const CasePanel: React.FC<{x: number; title: string; color: string; kind: 'warm' | 'teal'; at: number; mutAt: number}> = ({x, title, color, kind, at, mutAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const W = 820, sx = x + 50, n = 18, pit = 40, sy = 470, gap = 120;
	const rx = (i: number) => sx + i * pit + pit / 2;
	return (
		<g opacity={o}>
			<rect x={x} y={180} width={W} height={640} rx={26} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<text x={x + W / 2} y={262} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60}} fill={color}>{title}</text>
			<Band x1={kind === 'warm' ? rx(3) - 20 : rx(6) - 20} x2={kind === 'warm' ? rx(14) + 20 : rx(11) + 20} kind={kind} y={sy} gap={gap} />
			<SlimStrand x={sx} y={sy} n={n} pitch={pit} gap={gap} lineW={12} color="#7d7264" rung={i => (i === 9 && prog(f, mutAt, 8) > 0.01 ? {color: AMBER, w: 16, o: prog(f, mutAt, 8)} : {color: '#bfb3a0', w: 7})} />
			<text x={x + W / 2} y={sy + gap + 64} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={color}>{kind === 'warm' ? 'coding sequence' : 'promoter or control stretch'}</text>
		</g>
	);
};
export const SceneWhichMatters: React.FC = () => {
	const f = useCurrentFrame();
	const L = 100, R = 1000;
	return (
		<>
			<Heading text="Coding or non-coding?" at={K10.which} size={60} />
			<Overlay>
				<CasePanel x={L} title="coding" color={WARM_INK} kind="warm" at={4} mutAt={K10.coding} />
				<CasePanel x={R} title="non-coding" color={TEALC} kind="teal" at={10} mutAt={K10.nc} />
				<MiniChip x={L + 410} y={380} text="same amino acid" size={42} o={prog(f, K10.coding + 10, 12)} />
				<Tag x={L + 410} y={770} text="coding, but silent" at={K10.coding + 16} anchor="middle" size={50} />
				<g opacity={prog(f, K10.nc + 6, 12)}>
					<FillBar x={R + 260} y={350} w={300} h={40} p={lerp(1, 0.06, prog(f, K10.nc + 20, 24))} color="#7fa173" />
					<Sx x={R + 410} y={330} text="protein made" size={36} color={INK_SOFT} hand anchor="middle" />
				</g>
				<Tag x={R + 410} y={770} text="non-coding, but gene off" at={K10.nc + 16} anchor="middle" size={50} />
				<Sx x={960} y={930} text="ask what the stretch does, not whether it's translated" size={54} color={AMBER_INK} hand anchor="middle" at={K10.counts} />
				{void K10.neither}{void K10.job}{void INK}{void WARM}{void GeneMap}
			</Overlay>
		</>
	);
};
