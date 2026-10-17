// B6b scenes 4a to 5b on the transcription board: RNA polymerase finds the promoter and opens the gene, one strand
// is the template, the direction rule (with its cause), the worked base-by-base copy, and the coding strand check.
// Layout: coding strand on top (5' left), template below (3' left), the mRNA pairs with the template inside the
// open bubble (5' left), so the template is read 3' to 5' and the mRNA is built 5' to 3', both left to right.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cueFrame, cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, BD, BaseTile, BbArrow, BigArrow, Chip, DIM, Duplex, Ends, EnvelopeArc, FONT_HAND, Fade, FreeNuc, GENE0, GENE1, GREYT,
	GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay, PLUM, PROMO, PairRule, PlainArrow, RnaPol, Ring, S, SpanBracket, Strand, Sx, Tick,
	YM, YT, asRNA, bubble, colX, complementRNA, cw, kf, prog,
} from './shared';
import {LONG_BOT, LONG_TOP} from './s1';

export const GENE_N = GENE1 - GENE0 + 1;
/** Template strand letters across the board, and the mRNA each gene column receives (computed). */
export const MRNA_OF = (i: number) => (i >= GENE0 && i <= GENE1 ? complementRNA(LONG_BOT[i]) : '.');
export const YT_OPEN = YT + BD.openB;
export const YC_OPEN = BD.yc - BD.openT;
const geneOpen = (p: number) => bubble(GENE0, GENE1, p);
/** mRNA row inside the bubble: tiles face down onto the template. */
export const MrnaRow: React.FC<{unit: (i: number) => number; tileDy?: (i: number) => number; glow?: (i: number) => number; o?: number; letterOf?: (i: number) => string; tone?: (i: number) => 'grey' | 'ghost' | undefined; bbGlow?: number; y?: number}> = ({unit, tileDy, glow, o = 1, letterOf, tone, bbGlow, y = YM}) => (
	<Strand x={BD.x0} y={y} letters={Array.from({length: BD.n}, (_, i) => MRNA_OF(i)).join('')} pitch={BD.pitch} face="down" color={MRNA} unit={i => (MRNA_OF(i) === '.' ? 0 : unit(i))} tileDy={tileDy} glow={glow} o={o} letterOf={letterOf} tone={tone} bbGlow={bbGlow} />
);
/** Strand end tags for the board (coding: 5' left, 3' right; template: 3' left, 5' right). */
export const BoardEnds: React.FC<{at: number; open: number; codingO?: number; templateO?: number; codingYOpen?: number}> = ({at, open, codingO = 1, templateO = 1, codingYOpen = YC_OPEN}) => (
	<g>
		<Ends x={BD.x0} y={BD.yc} n={BD.n} pitch={BD.pitch} left="5'" right="3'" at={at} o={codingO} color={PLUM} rightDy={(codingYOpen - BD.yc) * open} />
		<Ends x={BD.x0} y={YT} n={BD.n} pitch={BD.pitch} left="3'" right="5'" at={at} o={templateO} color={PLUM} rightDy={BD.openB * open} />
	</g>
);
/** The small grey backbone arrowheads (5' to 3'): coding to the right, template to the left. */
export const BoardBbArrows: React.FC<{o: number; codingY?: number; templateY?: number}> = ({o, codingY = YC_OPEN, templateY = YT_OPEN}) => (
	<g>
		<BbArrow x={(colX(6) + colX(7)) / 2} y={codingY} dir={1} o={o} />
		<BbArrow x={(colX(9) + colX(10)) / 2} y={codingY} dir={1} o={o} />
		<BbArrow x={(colX(6) + colX(7)) / 2} y={templateY} dir={-1} o={o} />
		<BbArrow x={(colX(9) + colX(10)) / 2} y={templateY} dir={-1} o={o} />
	</g>
);
const POLY = 500;

// ---------- 4a. RNA polymerase finds the promoter and opens the gene ----------
const H4 = 'polymerase-promoter';
const K4 = cues(S(H4), {enzyme: 'enzyme called RNA polymerase', find: 'find where the gene starts', just: 'Just before each gene', promoter: 'called the promoter', landing: 'a landing site', binds: 'binds to', pulls: 'pulls the two DNA strands apart', breaking: 'breaking the hydrogen bonds', exposed: 'bases are exposed'});
export const ScenePromoter: React.FC = () => {
	const f = useCurrentFrame();
	const open = prog(f, K4.pulls, 22) * 0.3 + prog(f, K4.breaking + 4, 30) * 0.7;
	const px = kf(f, [[K4.enzyme - 10, -260], [K4.enzyme + 50, 120], [K4.find, 160], [K4.find + 40, 980], [K4.just + 10, 760], [K4.binds, colX(1)], [K4.pulls, colX(1)], [K4.pulls + 30, colX(3) + 20]]);
	const py = kf(f, [[K4.pulls, (BD.yc + YT) / 2], [K4.pulls + 30, POLY]]);
	const settle = pulse(f, K4.binds + 6, 14);
	const promo = prog(f, K4.promoter, 14);
	const exposedGlow = (i: number) => (i >= GENE0 && i <= GENE1 ? pulse(f, K4.exposed + (i - GENE0) * 3, 26) : 0);
	return (
		<>
			<Heading text="RNA polymerase opens the gene" at={4} size={56} />
			<Overlay>
				<EnvelopeArc />
				{promo > 0.01 ? <rect x={colX(0) - 56} y={BD.yc - 30} width={3 * BD.pitch - 8} height={YT - BD.yc + 60} rx={22} fill={PROMO} opacity={0.24 * promo} /> : null}
				<Duplex top={LONG_TOP} bot={LONG_BOT} open={geneOpen(open)} topTileGlow={exposedGlow} botTileGlow={exposedGlow} />
				<SpanBracket x1={colX(GENE0) - 50} x2={colX(GENE1) + 50} y={384} up at={-100} out={K4.pulls} label="gene" size={44} />
				<Chip x={96} y={YT + 70} text="promoter: where the polymerase binds" at={K4.promoter + 6} size={36} color="#5d4f73" stroke={PROMO} />
				<Fade at={K4.find + 10} out={K4.pulls}>
					<line x1={colX(2) + 20} y1={350} x2={colX(3) + 70} y2={350} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M${colX(3) + 54},${338} L${colX(3) + 70},${350} L${colX(3) + 54},${362}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<Sx x={colX(2)} y={330} text="gene starts here" size={36} color={AMBER_INK} hand at={K4.find + 10} />
				</Fade>
				<g transform={`translate(0,${-settle * 10})`}>
					<RnaPol x={px} y={py} w={310} h={220} o={prog(f, K4.enzyme - 10, 14)} />
				</g>
				<Chip x={colX(6)} y={YT_OPEN + 60} text="hydrogen bonds broken: bases exposed" at={K4.exposed} size={36} color={AMBER_INK} stroke={AMBER} />
				<GreyTag x={96} y={980} text="the polymerase separates the strands over a short stretch" at={K4.pulls + 20} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 4b. One strand is the template ----------
const H5 = 'template-strand';
const K5 = cues(S(H5), {key: 'Here is the key point', only: 'only one of the two strands', template: 'called the template strand', other: 'The other one', coding: 'the coding strand', notread: 'is not read', enough: 'One strand is enough', fixes: 'the template fixes every base', just: 'just as one DNA strand'});
export const SceneTemplate: React.FC = () => {
	const f = useCurrentFrame();
	const tg = prog(f, K5.only, 16);
	const dim = 1 - (1 - DIM) * prog(f, K5.coding, 16);
	const fixAt = (i: number) => K5.fixes + 6 + (i - GENE0) * 7;
	return (
		<>
			<Heading text="Only one strand is copied" at={4} size={56} />
			<Overlay>
				<EnvelopeArc />
				<PairRule />
				<Duplex top={LONG_TOP} bot={LONG_BOT} open={geneOpen(1)} botGlow={tg} topO={dim} botTileGlow={i => (i >= GENE0 ? pulse(f, fixAt(i) - 4, 22) : 0)} />
				<RnaPol x={colX(3) + 20} y={POLY} w={310} h={220} />
				<Chip x={96} y={YT_OPEN + 50} text="template strand: read" at={K5.template} size={40} color={AMBER_INK} stroke={AMBER} />
				<Chip x={96} y={300} text="coding strand: not read" at={K5.coding} size={36} color={INK_SOFT} />
				{/* the template fixes every base: an empty slot lights over each template tile */}
				<MrnaRow unit={i => prog(f, fixAt(i), 10)} tone={() => 'ghost'} />
				{Array.from({length: GENE_N}, (_, k) => {
					const i = GENE0 + k;
					return <g key={i} opacity={pulse(f, fixAt(i), 26)}><line x1={colX(i)} y1={YT_OPEN - BD.so - BD.th} x2={colX(i)} y2={YM + 20} stroke={AMBER} strokeWidth={4} /></g>;
				})}
				<Sx x={colX(GENE1) + 70} y={YM + 60} text="slots fixed" size={34} color={AMBER_INK} hand at={K5.fixes + 70} />
				<GreyTag x={96} y={990} text="as when one DNA strand fixed its partner (DNA copying video)" at={K5.just} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 4c. Which way the copy grows ----------
const H6 = 'direction';
const K6 = cues(S(H6), {now: 'Now the direction', add: "add each new nucleotide to the 3' end", growing: 'of the growing mRNA', grows: "grows from its 5' end to its 3' end", because: 'because paired strands run', opposite: 'opposite directions', reads: "reads the template from its 3' end"});
export const SceneDirection: React.FC = () => {
	const f = useCurrentFrame();
	const stub = prog(f, K6.add - 6, 14);
	const join = prog(f, K6.growing + 6, 18);
	const nudge = prog(f, K6.reads + 30, 16);
	const mrnaUnit = (i: number) => (i === 3 || i === 4 ? stub : i === 5 ? join : 0);
	const tipCol = join > 0.5 ? 5 : 4;
	// the free tile trying the 5' end, turned away
	const t = f - (K6.growing + 36);
	const c01 = (v: number) => Math.max(0, Math.min(1, v));
	const inn = c01((t + 12) / 14), bk = Math.max(0, (t - 4) / 30);
	const bx = colX(2) - 10 - (1 - inn) * 60 - bk * 90;
	const by = YM - 100 + inn * 70 - bk * 110;
	const bo = t < -12 || t > 40 ? 0 : c01((t + 12) / 6) * (1 - c01((t - 22) / 18));
	return (
		<>
			<Heading text="Which way does the copy grow?" at={4} size={56} />
			<Overlay>
				<EnvelopeArc />
				<PairRule />
				<Duplex top={LONG_TOP} bot={LONG_BOT} open={geneOpen(1)} botGlow={0.6} topO={DIM} />
				<BoardEnds at={K6.now} open={1} codingO={DIM + 0.25} />
				<BoardBbArrows o={prog(f, K6.now + 12, 12)} />
				<RnaPol x={colX(4) + nudge * BD.pitch} y={POLY - 30} w={300} h={200} />
				<MrnaRow unit={mrnaUnit} tileDy={i => (i === 5 ? -(1 - join) * 110 : 0)} />
				{/* mRNA ends: 5' at the start, a bright 3' tag on the growing end */}
				<Sx x={colX(3) - 58} y={YM - 26} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={K6.add} />
				<g opacity={prog(f, K6.add + 4, 10)}>
					<circle cx={colX(tipCol) + 70} cy={YM} r={30 + 10 * pulse(f, K6.add + 10, 30)} fill={AMBER} opacity={0.3} />
					<text x={colX(tipCol) + 70} y={YM + 15} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={MRNA_INK}>3'</text>
				</g>
				<FreeNuc x={bx} y={by} l="A" face="down" o={bo} tone="grey" />
				<GreyTag x={96} y={880} text="only at the 3' end" at={K6.growing + 30} out={K6.reads} size={28} />
				<BigArrow x1={colX(3)} x2={colX(9)} y={YT_OPEN + 66} at={K6.reads} label="template read 3' to 5'" />
				<BigArrow x1={colX(3)} x2={colX(9)} y={YT_OPEN + 146} at={K6.grows} label="mRNA built 5' to 3'" color={MRNA_INK} />
				<Chip x={96} y={990} text="antiparallel, as in DNA" at={K6.opposite} size={32} color={GREY_INK} fill="#eceeef" stroke={GREYT} />
			</Overlay>
		</>
	);
};

// ---------- 5a. Worked example: building the mRNA ----------
const H7 = 'worked-copy';
const S7 = S(H7);
const K7 = cues(S7, {lets: "Let's copy one", here: 'Here is a template strand', starts: "starts at the 3' end", free: 'Free RNA nucleotides drift in', only: 'only a matching one stays', notT: 'not T because', next: 'The next three', last: 'The last three', each: 'Each new nucleotide joins', reads: 'The mRNA reads', from: "from its 5' end"});
/** Dock frames: each tile lands on the spoken letter of its partner. */
const DOCK7 = [cw(S7, 'T needs A', 2), cw(S7, 'A needs U', 2), cw(S7, 'C needs G', 2), cw(S7, 'C with G', 2), cw(S7, 'G with C', 2), cw(S7, 'A with U', 2, 1), cw(S7, 'A with U', 2, 2), cw(S7, 'T with A', 2, 1), cw(S7, 'T with A', 2, 2)];
const RES7 = [cw(S7, 'The mRNA reads A U G G C U U A A', 3), cw(S7, 'The mRNA reads A U G G C U U A A', 6), cw(S7, 'The mRNA reads A U G G C U U A A', 9)];
/** A wrong free tile that drops toward a column, bumps and drifts off. */
const Bumper: React.FC<{col: number; l: string; at: number}> = ({col, l, at}) => {
	const f = useCurrentFrame();
	const t = f - at;
	if (t < -12 || t > 40) return null;
	const inn = Math.max(0, Math.min(1, (t + 12) / 14));
	const back = Math.max(0, (t - 4) / 30);
	const x = colX(col) + 70 * back + (1 - inn) * 40;
	const y = YM - 110 + inn * 80 - back * 130;
	const o = Math.min(1, (t + 12) / 6) * (1 - Math.max(0, (t - 22) / 18));
	return <FreeNuc x={x} y={y} l={l} face="down" o={o} />;
};
export const SceneWorked: React.FC = () => {
	const f = useCurrentFrame();
	const unit = (i: number) => (i < GENE0 ? 0 : prog(f, DOCK7[i - GENE0] - 12, 12));
	const drop = (i: number) => (i < GENE0 ? 0 : -(1 - prog(f, DOCK7[i - GENE0] - 12, 12)) * 110);
	const pol = kf(f, [[0, colX(3)], ...DOCK7.map((d, k) => [d + 8, colX(GENE0 + k) + 30] as [number, number])]);
	const lastDocked = DOCK7.reduce((a, d, k) => (f >= d ? k : a), -1);
	const resO = prog(f, K7.reads, 12);
	const uGlow = (i: number) => {
		const k = i - GENE0;
		if (k < 0 || MRNA_OF(i) !== 'U') return 0;
		return pulse(f, RES7[Math.floor(k / 3)], 30);
	};
	const floats = [[1300, 450], [1440, 488], [1560, 440], [1690, 478]];
	return (
		<>
			<Heading text="Template strand: 3' TAC CGA ATT 5'" at={Math.max(4, K7.here)} size={56} color={PLUM} />
			<Overlay>
				<EnvelopeArc />
				<PairRule />
				<Duplex top={LONG_TOP} bot={LONG_BOT} open={geneOpen(1)} botGlow={0.5} topO={DIM} botTileGlow={i => (i >= GENE0 ? pulse(f, DOCK7[i - GENE0] - 16, 20) : 0)} />
				<BoardEnds at={0} open={1} codingO={DIM + 0.25} />
				<BoardBbArrows o={0.9} />
				{/* the template grouped in threes by thin gaps (named later) */}
				{[GENE0, GENE0 + 3, GENE0 + 6].map(c => <rect key={c} x={colX(c) - 52} y={YT_OPEN + 22} width={3 * BD.pitch - 16} height={10} rx={5} fill={PLUM} opacity={0.18} />)}
				{floats.map((p, i) => <FreeNuc key={i} x={p[0] + Math.sin(f / 22 + i) * 10} y={p[1] + Math.cos(f / 19 + i * 2) * 8} l={['A', 'U', 'G', 'C'][i]} face="down" o={0.75 * prog(f, K7.free, 14) * (1 - prog(f, DOCK7[8], 20))} tw={60} th={44} so={16} />)}
				<RnaPol x={pol} y={POLY - 30} w={300} h={200} />
				<MrnaRow unit={unit} tileDy={drop} glow={uGlow} />
				<Bumper col={3} l="G" at={K7.only} />
				<Bumper col={4} l="T" at={DOCK7[1] - 30} />
				<Bumper col={5} l="A" at={DOCK7[2] - 28} />
				<GreyTag x={96} y={YT_OPEN + 60} text="T is DNA's base: RNA uses U" at={K7.notT} out={DOCK7[3]} size={28} />
				{lastDocked >= 0 ? (
					<g opacity={prog(f, DOCK7[0], 10)}>
						<Sx x={colX(3) - 58} y={YM - 26} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={DOCK7[0]} />
						<circle cx={colX(GENE0 + lastDocked) + 62} cy={YM - 40} r={26 + 12 * pulse(f, K7.each, 34)} fill={AMBER} opacity={0.3} />
						<text x={colX(GENE0 + lastDocked) + 62} y={YM - 25} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={MRNA_INK}>3'</text>
					</g>
				) : null}
				<Sx x={colX(GENE0) - 30} y={YT_OPEN + 150} text="mRNA: 5' AUG GCU UAA 3'" size={54} color={MRNA_INK} weight={800} at={K7.reads} opacity={resO} />
				<Fade at={K7.from}><circle cx={colX(GENE0) - 58} cy={YM - 40} r={34} fill="none" stroke={AMBER} strokeWidth={4} /></Fade>
			</Overlay>
		</>
	);
};

// ---------- 5b. The coding strand check ----------
const H8 = 'coding-check';
const S8 = S(H8);
const K8 = cues(S8, {now: 'Now look at the strand', coding: 'the coding strand', reads: 'It reads A T G', compare: 'Compare it with the mRNA', same: 'the same letters', dir: 'in the same direction', except: 'except that T has become U', so: 'So the mRNA is a copy', built: 'built by pairing', trap: 'That is the trap', which: 'which strand'});
const READ8 = (k: number) => cw(S8, 'It reads A T G G C T T A A', 2 + k);
export const SceneCodingCheck: React.FC = () => {
	const f = useCurrentFrame();
	const full = prog(f, K8.coding, 16);
	const back = 0;
	const down = prog(f, K8.compare - 20, 24) * (1 - back);
	const codingY = (i: number) => (i >= GENE0 ? -BD.openT + (BD.openT + 12) * down : 0);
	const cmp = (k: number) => K8.compare + 10 + k * 7;
	const geneTop = LONG_TOP.slice(GENE0);
	const tPos = geneTop.split('').map((c, k) => (c === 'T' ? k : -1)).filter(k => k >= 0);
	const cY = BD.yc + 12; // coding backbone once lowered
	return (
		<>
			<Heading text="Check against the coding strand" at={4} size={56} />
			<Overlay>
				<EnvelopeArc />
				<PairRule />
				<Duplex top={LONG_TOP} bot={LONG_BOT} open={geneOpen(1)} topColDy={codingY} topO={DIM + (1 - DIM) * full} botO={1 - (1 - DIM) * full} topTileGlow={i => (i >= GENE0 ? pulse(f, READ8(i - GENE0) - 4, 18) : 0)} />
				<Ends x={BD.x0} y={BD.yc} n={BD.n} pitch={BD.pitch} left="5'" right="3'" at={0} color={PLUM} rightDy={codingY(GENE1)} />
				<MrnaRow unit={() => 1} glow={i => (i >= GENE0 && tPos.includes(i - GENE0) ? prog(f, K8.except, 10) * 0.8 : 0)} />
				<Sx x={colX(3) - 58} y={YM - 26} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={0} opacity={1 - down * 0.0} />
				<Sx x={colX(GENE1) + 70} y={YM + 15} text="3'" size={44} color={MRNA_INK} hand anchor="middle" at={0} />
				{/* matching letters tick between the rows */}
				{geneTop.split('').map((c, k) => (c === 'T' ? null : <Tick key={k} x={colX(GENE0 + k)} y={(cY + BD.so + BD.th + YM) / 2 + 2} at={cmp(k)} s={22} color={AMBER_INK} />))}
				{tPos.map((k, j) => (
					<g key={k}>
						<Ring cx={colX(GENE0 + k)} cy={cY + BD.so + BD.th / 2} rx={52} ry={42} at={K8.except + j * 6} color={AMBER} seed={k + 3} />
						<Ring cx={colX(GENE0 + k)} cy={YM + BD.so + BD.th / 2} rx={52} ry={42} at={K8.except + 4 + j * 6} color={AMBER} seed={k + 9} />
					</g>
				))}
				<Chip x={colX(GENE1) + 64} y={cY + 30} text="T becomes U" at={K8.except + 14} size={34} color={AMBER_INK} stroke={AMBER} anchor="end" />
				<Fade at={K8.dir}>
					<circle cx={BD.x0 - BD.pitch * 0.62} cy={BD.yc} r={34} fill="none" stroke={AMBER} strokeWidth={4} />
					<circle cx={colX(3) - 58} cy={YM - 40} r={34} fill="none" stroke={AMBER} strokeWidth={4} />
				</Fade>
				<Sx x={96} y={YT_OPEN + 110} text={"coding strand 5' ATG GCT TAA 3'  =  mRNA 5' AUG GCU UAA 3', with U for T"} size={36} color={INK} weight={700} at={K8.so} />
				<Chip x={96} y={YT_OPEN + 160} text="given the template? pair it" at={K8.which} size={38} color={AMBER_INK} stroke={AMBER} />
				<Chip x={720} y={YT_OPEN + 160} text="given the coding strand? copy it, T to U" at={K8.which + 8} size={38} color={AMBER_INK} stroke={AMBER} />
			</Overlay>
		</>
	);
};
void BaseTile; void BigArrow; void INK; void PlainArrow; void asRNA; void cueFrame; void AMBER;
