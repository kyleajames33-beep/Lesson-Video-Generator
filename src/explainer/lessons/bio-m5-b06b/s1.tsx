// B6b scenes 1 to 3: the hook (the gene is stuck in the nucleus), a gene and its mRNA copy (with the recipe book
// analogy), and how RNA differs from DNA.
import React from 'react';
import {Img, staticFile, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, BD, BaseTile, Bead, Blob, CELLPT, CellPlate, Chip, DrawPath, Duplex, EnvelopeArc, FONT_HAND, Fade, FreeNuc, GENE0, GENE1,
	GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay, PL_CELL, PLUM, PairRule, Ribbon, Ring, S, SpanBracket, Strand, Sx,
	YT, asRNA, colX, complementDNA, cubic, cw, kf, mkPath, plPt, prog, ptAt, scribbleEllipse,
} from './shared';
import type {Pt} from './shared';
import {BOOK} from './assets';

// ---------- the long board sequence (scenes 2 to 4c): promoter (0 to 2) then the gene (3 to 11) ----------
/** Coding strand (top, 5' to 3' left to right); the template is computed as its partner. */
export const LONG_TOP = 'GCTATGGCTTAA';
export const LONG_BOT = complementDNA(LONG_TOP);

// ---------- 1. Hook ----------
const H1 = 'hook';
const K1 = cues(S(H1), {inside: 'stays inside the nucleus', wound: 'wound on histones', ribo: 'the ribosomes', sit: 'sit outside it', how: 'So how do the instructions', never: 'never leaves', copy: 'sends out a copy', today: 'Today'});
export const HOOK = {x: 980, y: 625, k: 0.55};
export const hookPt = plPt(PL_CELL, HOOK.x, HOOK.y, HOOK.k);
/** Coiled thread inside a nucleus (a tangle of loops). */
export const coilD = (cx: number, cy: number, r: number, phase = 0) => {
	let d = '';
	for (let i = 0; i <= 220; i++) {
		const t = (i / 220) * Math.PI * 2 * 3;
		const rr = r * (0.55 + 0.4 * Math.sin(t * 0.37 + phase));
		const x = cx + rr * Math.cos(t * 1.03) + r * 0.18 * Math.cos(t * 4.1);
		const y = cy + rr * 0.8 * Math.sin(t * 0.97) + r * 0.16 * Math.sin(t * 3.7);
		d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;
	}
	return d;
};
/** Path from inside the nucleus, out through the upper-left pore, to a ribosome on the rough ER (screen coordinates). */
export const exitPath = (P: (u: number, v: number) => Pt, pore: Pt, ribo: Pt, inner: Pt) => {
	const a = P(inner[0], inner[1]), b = P(pore[0], pore[1]), c = P(ribo[0], ribo[1]);
	const inDir: Pt = [b[0] - a[0], b[1] - a[1]];
	const seg1 = cubic(a, [a[0] + inDir[0] * 0.4, a[1] + inDir[1] * 0.2], [b[0] - inDir[0] * 0.3, b[1] - inDir[1] * 0.3], b, 30);
	const seg2 = cubic(b, [b[0] + inDir[0] * 0.6, b[1] + inDir[1] * 0.6], [c[0] + 40, c[1] + 30], c, 40);
	return mkPath([...seg1, ...seg2.slice(1)]);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const P = hookPt;
	const nuc = P(...CELLPT.nuc);
	const nr = CELLPT.nucR * HOOK.k;
	const pore = CELLPT.pores.ul, ribo = CELLPT.erRibo[0];
	const path = exitPath(P, pore, ribo, [930, 930]);
	const pp = P(...pore);
	const push = pulse(f, K1.never, 34);
	const qHead = kf(f, [[K1.how + 8, 0], [K1.how + 70, path.len]]);
	const rib = kf(f, [[K1.copy, 0], [K1.copy + 60, path.len]]);
	const rings = [...CELLPT.erRibo.slice(0, 3), CELLPT.freeRibo[0], CELLPT.freeRibo[1]];
	return (
		<>
			<Overlay>
				<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
				<Ring cx={nuc[0]} cy={nuc[1]} rx={nr + 16} ry={nr + 12} at={K1.inside} color={AMBER} seed={4} />
				<g transform={`translate(${-push * 14},${-push * 12})`}>
					<DrawPath d={coilD(nuc[0] - 20, nuc[1] - 10, nr * 0.62, 0.4)} at={K1.wound - 4} dur={40} color={PLUM} width={4} />
				</g>
				<Fade at={K1.inside + 10}><line x1={nuc[0] + nr * 0.62} y1={nuc[1] + nr * 0.72} x2={1395} y2={842} stroke={INK_SOFT} strokeWidth={3} /></Fade>
				<Sx x={1405} y={855} text="nucleus" size={40} color={INK_SOFT} hand at={K1.inside + 10} />
				<GreyTag x={96} y={560} text="DNA, wound on histones (last video)" at={K1.wound + 8} size={28} />
				{rings.map((r, i) => {
					const q = P(...r);
					return <Ring key={i} cx={q[0]} cy={q[1]} rx={13} ry={13} at={K1.ribo + 4 + i * 5} color={AMBER_INK} seed={i + 2} width={4} />;
				})}
				<Chip x={96} y={250} text="ribosomes: build proteins" at={K1.ribo + 12} size={36} color={AMBER_INK} stroke={AMBER} />
				<Sx x={1460} y={360} text="cytoplasm" size={38} color={INK_SOFT} hand at={K1.sit} />
				{/* the question path: nucleus, pore, ribosome */}
				<Fade at={K1.how}>
					<DrawPath d={path.pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ')} at={K1.how} dur={40} color={AMBER} width={5} dash="4 12" />
				</Fade>
				{f >= K1.how + 8 && f < K1.copy + 6 ? (() => {
					const q = ptAt(path, qHead);
					return <text x={q[0]} y={q[1] - 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54}} fill={AMBER_INK} opacity={1 - prog(f, K1.copy, 8)}>?</text>;
				})() : null}
				{/* the DNA never leaves: a bar across the pore */}
				<Fade at={K1.never} out={K1.never + 60}>
					<line x1={pp[0] - 22} y1={pp[1] - 18} x2={pp[0] + 22} y2={pp[1] + 18} stroke={GREYT} strokeWidth={9} strokeLinecap="round" />
				</Fade>
				<GreyTag x={96} y={650} text="DNA stays in" at={K1.never + 4} size={28} />
				<Ribbon path={path} head={rib} len={70} o={prog(f, K1.copy, 8)} />
			</Overlay>
			<Heading text="How does a gene get out of the nucleus?" at={K1.today} size={60} />
		</>
	);
};

// ---------- 2. A gene and its copy, mRNA (recipe book analogy) ----------
const H2 = 'gene-and-mrna';
const K2 = cues(S(H2), {
	gene: 'A gene is', section: 'section of DNA', poly: 'usually a polypeptide', chain: 'chain of amino acids', mrna: 'messenger RNA or mRNA', trans: 'called transcription',
	book: 'recipe book', library: 'out of the library', page: 'the one page', copy: 'carry the copy', kitchen: 'the kitchen', safe: 'book stays safe', many: 'as many copies',
});
const BOOK_P = {src: BOOK, nat: [1800, 1200] as [number, number], ref: [292, 279] as [number, number]};
/** A coded loose sheet of copied paper with grey squiggle lines. */
const Sheet: React.FC<{x: number; y: number; rot?: number; o?: number; s?: number}> = ({x, y, rot = 0, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<rect x={-52} y={-68} width={104} height={136} rx={4} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
		{[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M-36,${-46 + i * 18} q10,-5 20,0 t20,0 t20,0 t10,0`} fill="none" stroke="#a9a39a" strokeWidth={3} strokeLinecap="round" />)}
	</g>
));
export const SceneGene: React.FC = () => {
	const f = useCurrentFrame();
	const nuc = hookPt(...CELLPT.nuc);
	const z = kf(f, [[0, 1], [32, 3.4]]);
	const plateO = 1 - prog(f, 10, 22);
	const boardO = prog(f, 14, 20);
	const toLeft = prog(f, K2.book, 26);
	const bs = 1 - 0.5 * toLeft, bx = 30 * toLeft, by = 250 * toLeft;
	const gene0 = colX(GENE0) - 50, gene1 = colX(GENE1) + 50;
	const mrnaY = 790;
	const geneTop = LONG_TOP.slice(GENE0, GENE1 + 1);
	const lit = (at: number) => prog(f, at, 10) * (1 - prog(f, at + 80, 20));
	const rows = [
		{t: 'book = DNA', at: K2.book + 16}, {t: 'library = nucleus', at: K2.library}, {t: 'one page = a gene', at: K2.page},
		{t: 'photocopy = mRNA', at: K2.copy}, {t: 'kitchen = cytoplasm', at: K2.kitchen},
	];
	const bookIn = prog(f, K2.book + 4, 22);
	const many = prog(f, K2.many, 18);
	const fold = prog(f, K2.chain, 40);
	const beadPts = Array.from({length: 7}, (_, i) => {
		const a = (i / 7) * Math.PI * 2;
		const lx = 130 + i * 30;
		return [lx + (190 + Math.cos(a) * 26 - lx) * fold, 990 + Math.sin(a) * 26 * fold] as Pt;
	});
	return (
		<>
			<Overlay>
				<g opacity={plateO} transform={`translate(${nuc[0]},${nuc[1]}) scale(${z}) translate(${-nuc[0]},${-nuc[1]})`}>
					<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
				</g>
				<g opacity={boardO} transform={`translate(${bx},${by}) scale(${bs})`}>
					<EnvelopeArc poreHi={lit(rows[1].at)} />
					{lit(rows[1].at) > 0.01 ? <rect x={0} y={arcYTop} width={1920} height={760} fill={AMBER} opacity={0.08 * lit(rows[1].at)} /> : null}
					<Sx x={1250} y={150} text="cytoplasm (outside)" size={40} color={INK_SOFT} hand at={-100} opacity={0.35 + 0.65 * lit(rows[4].at)} />
					{lit(rows[4].at) > 0.01 ? <rect x={900} y={100} width={700} height={70} rx={20} fill={AMBER} opacity={0.15 * lit(rows[4].at)} /> : null}
					<Duplex top={LONG_TOP} bot={LONG_BOT} topGlow={lit(rows[0].at)} botGlow={lit(rows[0].at)} />
					<SpanBracket x1={gene0} x2={gene1} y={384} up at={K2.section} label="gene" size={44} />
					{lit(rows[2].at) > 0.01 ? <rect x={gene0} y={300} width={gene1 - gene0} height={100} rx={18} fill={AMBER} opacity={0.18 * lit(rows[2].at)} /> : null}
					<Strand x={colX(GENE0)} y={mrnaY} letters={asRNA(geneTop)} pitch={BD.pitch} face="down" color={MRNA} unit={i => prog(f, K2.mrna + i * 3, 10)} bbGlow={lit(rows[3].at)} />
					<Chip x={96} y={mrnaY - 30} text="mRNA: a copy of one gene" at={K2.mrna + 20} size={34} color={MRNA_INK} stroke={MRNA} />
					<Sx x={colX(GENE0)} y={YT + 96} text="transcription: copying a gene into mRNA" size={44} color={AMBER_INK} hand at={K2.trans} />
				</g>
				{/* the polypeptide side chip */}
				<Fade at={K2.poly} out={K2.book}>
					<rect x={96} y={940} width={1240} height={100} rx={22} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
					{beadPts.map((q, i) => <Bead key={i} x={q[0]} y={q[1]} r={14} fill={['#e8b48a', '#d9c27a', '#c9a0c9', '#9fb5d9'][i % 4]} />)}
					<Sx x={360} y={1002} text="polypeptide: chain of amino acids, folds into a protein (next videos)" size={28} color={GREY_INK} weight={600} at={K2.poly + 6} />
				</Fade>
				{/* the analogy */}
				<g opacity={bookIn} transform={`translate(${(1 - bookIn) * 120},0)`}>
					<Pl_ src={BOOK_P.src} />
					{/* chain from the book spine to the table leg */}
					{Array.from({length: 7}, (_, i) => {
						const x = 1566 + i * 13, y = 372 + i * 16;
						return <ellipse key={i} cx={x} cy={y} rx={7} ry={11} transform={`rotate(${i % 2 ? 50 : -40} ${x} ${y})`} fill="none" stroke="#7d7a74" strokeWidth={3.5} />;
					})}
					<Sheet x={1140} y={320} rot={-8} />
					<Sheet x={1180 - 90 * many} y={340 + 120 * many} rot={-18 * many} o={many} />
					<Sheet x={1150 - 160 * many} y={330 + 40 * many} rot={6 * many} o={many} />
					<Ring cx={1418} cy={330} rx={185} ry={95} at={K2.safe} color={GREYT} seed={6} width={4} />
				</g>
				{rows.map((r, i) => <Sx key={i} x={1060} y={730 + i * 56} text={r.t} size={40} color={INK} hand at={r.at} />)}
				<GreyTag x={1060} y={1004 - 30} text="analogy: the copy is not letter-for-letter (next)" at={K2.many + 30} size={26} />
			</Overlay>
			<Heading text="A gene, and its copy" at={20} size={56} out={K2.book} />
		</>
	);
};
const arcYTop = 220;
/** The book plate placed with its painted box at x 1060..1760, y 230 (scale 0.57). */
const Pl_: React.FC<{src: string}> = ({src}) => (
	<image href={staticFile(src)} x={1060 - BOOK_P.ref[0] * 0.57} y={230 - BOOK_P.ref[1] * 0.57} width={BOOK_P.nat[0] * 0.57} height={BOOK_P.nat[1] * 0.57} />
);

// ---------- 3. How RNA differs from DNA ----------
const H3 = 'rna-differences';
const K3 = cues(S(H3), {
	three: 'three differences', single: 'single strand', helix: 'double helix', ribose: 'ribose not deoxyribose', r: 'R in RNA', uracil: 'uracil', thymine: 'in place of thymine',
	pairs: 'U pairs with A', just: 'just as T does', rule: 'A with U',
});
const D3 = {x0: 220, yc: 330};
const R3 = {x0: 1150, y: 330};
export const SceneRnaDiff: React.FC = () => {
	const f = useCurrentFrame();
	const top = 'ATGCA', bot = complementDNA(top), rna = 'AUGCA';
	const uDrop = prog(f, K3.uracil + 6, 18);
	const tLift = pulse(f, K3.uracil, 40) + prog(f, K3.thymine, 10) * (1 - prog(f, K3.pairs, 10)) * 0.6;
	const single = pulse(f, K3.single, 40);
	const sugarGlow = prog(f, K3.ribose, 10) * (1 - prog(f, K3.uracil, 14));
	const yt = D3.yc + (YT - BD.yc);
	// pairing demo
	const dock = prog(f, K3.pairs + 4, 20);
	const ghost = prog(f, K3.just, 14);
	const demoA: Pt = [1290, 960], demoB: Pt = [1560, 960];
	const chipY = 620;
	return (
		<>
			<Heading text="How RNA differs from DNA" at={6} size={60} />
			<Overlay>
				<Sx x={D3.x0 + 240} y={260} text="DNA" size={46} color={PLUM} hand anchor="middle" at={K3.three - 20} />
				<Sx x={R3.x0 + 240} y={260} text="RNA" size={46} color={MRNA_INK} hand anchor="middle" at={K3.three - 20} />
				<Duplex top={top} bot={bot} x0={D3.x0} yc={D3.yc} topTileGlow={i => (i === 1 ? tLift : 0)} />
				<Strand x={R3.x0} y={R3.y} letters={rna} pitch={BD.pitch} face="down" color={MRNA} bbGlow={single} tileDy={i => (i === 1 ? -(1 - uDrop) * 120 : 0)} tileO={i => (i === 1 ? uDrop : 1)} glow={i => (i === 1 ? pulse(f, K3.uracil + 20, 30) : 0)} />
				{/* single strand: two backbones on the left, one on the right */}
				<Fade at={K3.single + 2}>
					<DrawPath d={`M150,${D3.yc} L130,${D3.yc} L130,${yt} L150,${yt}`} at={K3.single + 2} dur={12} color={PLUM} width={5} />
					<Sx x={118} y={(D3.yc + yt) / 2 + 14} text="two" size={40} color={PLUM} hand anchor="end" at={K3.single + 6} />
					<Sx x={R3.x0 + 4 * BD.pitch + 60} y={R3.y + 14} text="one" size={40} color={MRNA_INK} hand at={K3.single + 6} />
				</Fade>
				{/* the sugars */}
				{sugarGlow > 0.01 ? (
					<g opacity={sugarGlow}>
						<circle cx={D3.x0 + 2 * BD.pitch} cy={D3.yc} r={26} fill={AMBER} opacity={0.45} />
						<circle cx={R3.x0 + 2 * BD.pitch} cy={R3.y} r={26} fill={AMBER} opacity={0.45} />
					</g>
				) : null}
				<Sx x={D3.x0 + 2 * BD.pitch} y={D3.yc - 34} text="deoxyribose" size={34} color={AMBER_INK} hand anchor="middle" at={K3.ribose + 4} out={K3.uracil} />
				<Sx x={R3.x0 + 2 * BD.pitch} y={R3.y - 34} text="ribose" size={34} color={AMBER_INK} hand anchor="middle" at={K3.ribose + 2} out={K3.uracil} />
				{/* the three difference chips */}
				<Chip x={96} y={chipY} text="1. single strand" at={K3.single} size={38} color={MRNA_INK} stroke={MRNA} />
				<Chip x={470} y={chipY} text="2. ribose sugar (DNA: deoxyribose)" at={K3.ribose} size={38} color={MRNA_INK} stroke={MRNA} />
				<Chip x={1150} y={chipY} text="3. U instead of T" at={K3.uracil} size={38} color={MRNA_INK} stroke={MRNA} />
				{/* U pairs with A, just as T does */}
				<Fade at={K3.pairs - 4}>
					<line x1={demoA[0] - 70} y1={demoA[1]} x2={demoA[0] + 70} y2={demoA[1]} stroke={PLUM} strokeWidth={9} strokeLinecap="round" />
					<FreeNuc x={demoA[0]} y={demoA[1]} l="A" face="up" color={PLUM} />
					<FreeNuc x={demoA[0]} y={demoA[1] - 182 - (1 - dock) * 60} l="U" face="down" />
					<Sx x={demoA[0]} y={demoA[1] + 64} text="U fits A" size={38} color={AMBER_INK} hand anchor="middle" at={K3.pairs + 20} />
				</Fade>
				<Fade at={K3.just}>
					<line x1={demoB[0] - 70} y1={demoB[1]} x2={demoB[0] + 70} y2={demoB[1]} stroke={PLUM} strokeWidth={9} strokeLinecap="round" />
					<FreeNuc x={demoB[0]} y={demoB[1]} l="A" face="up" color={PLUM} />
					<g opacity={ghost}><BaseTile x={demoB[0]} y={demoB[1] - 182 + 22} face="down" l="T" /></g>
					<Sx x={demoB[0]} y={demoB[1] + 64} text="so does T" size={38} color={INK_SOFT} hand anchor="middle" at={K3.just + 10} />
				</Fade>
				<Sx x={96} y={900} text="same notch, same fit" size={40} color={INK_SOFT} hand at={K3.just + 16} />
				<PairRule at={K3.rule} />
			</Overlay>
		</>
	);
};
void Blob; void scribbleEllipse; void Img; void INK; void GENE1; void Strand;
