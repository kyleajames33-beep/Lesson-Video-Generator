import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, CX, CY, DrawPath, GreyTag, Hand, Heading, INK, INK_SOFT, lerp, MStrip, Overlay, Pill, prog,
	S, Scribble, vis, RX, RY, FONT_HAND,
} from './shared';
import {AN, BandTick, CD, cbox, Dissolve, HCell, HChrom, Letter, Morph, Panel, PL, Stage, toS} from '../bio-m5-b05a/cd';
import type {Cam, HCol} from '../bio-m5-b05a/cd';

// Revision 7 (owner, 20 Oct): the model cell is a clean coded diagram with large chromosomes whose gene loci sit at the
// same height on both homologues (the previous loci sat at different heights: a science error). The pairing, "gene against
// gene" and crossing over use the brief 88 painted close-ups (homologous pair with three matching bands, then the crossing
// over trio); letters sit beside the painted bands. Narration unchanged: the long pair carries A/a (upper) and B/b (lower,
// distal, the band carried by the exchanged segment); the short pair carries D/d.

/** Coded model: long and short chromosomes, centromere fraction, locus fractions (A, B on the long; D on the short). */
export const ML = {L: 250, S: 160};
export const MCEN = {L: 0.47, S: 0.42};
export const LOCI = {L: [0.175, 0.86], S: [0.78]};
export const MW = 24;
const KIND = ['L', 'L', 'S', 'S'] as const;
const COLS: HCol[] = ['P', 'T', 'P', 'T'];
const lettersOf = (i: number) => (KIND[i] === 'L' ? (COLS[i] === 'P' ? ['A', 'B'] : ['a', 'b']) : COLS[i] === 'P' ? ['D'] : ['d']);
/** Model positions: apart (t = 0), paired (t = 1); all centromeres on one line, so matching loci share a height. */
const APART: number[] = [-300, -40, 130, 330];
const PAIRED: number[] = [-260, -110, 120, 260];
const mx = (i: number, t: number) => CX + lerp(APART[i], PAIRED[i], t);
const locusY = (i: number, k: number) => CY - ML[KIND[i]] * MCEN[KIND[i]] + ML[KIND[i]] * LOCI[KIND[i]][k];

const Bubble: React.FC<{x: number; y: number; at: number; r?: number}> = ({x, y, at, r = 26}) => {
	const f = useCurrentFrame();
	const t = f - at;
	if (t < 0 || t > 40) return null;
	const p = Math.sin((t / 40) * Math.PI);
	return <circle cx={x} cy={y} r={r + 8 * p} fill="none" stroke={AMBER} strokeWidth={6} opacity={p} />;
};

// ---------- 3. The model cell with alleles ----------
export const SceneModelAlleles: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('model-alleles'), {
		here: 'Here is our model', genes: 'three genes', pairs: 'two pairs', upper: 'the upper gene', plum1: ['plum version', 1], teal1: ['teal version', 1], lower: 'the lower gene', short: 'The short pair', plum2: ['plum version', 2], teal2: ['teal version', 2], label: 'We label', cap: 'a capital', again: 'again',
	});
	const lo = (i: number): number[] => {
		const top = [prog(f, c.plum1 + 8, 12), prog(f, c.teal1 + 8, 12), prog(f, c.plum2 + 8, 12), prog(f, c.teal2 + 8, 12)][i];
		const bot = i === 0 ? prog(f, c.lower + 16, 12) : i === 1 ? prog(f, c.lower + 24, 12) : 0;
		return KIND[i] === 'L' ? [top, bot] : [top];
	};
	// letter bead centres (single chromatid: letters on the right)
	const bx = (i: number) => mx(i, 0) + MW / 2 + 24;
	const link = (a: number, b: number, k: number, at: number) => <line x1={bx(a) + 18} y1={locusY(a, k)} x2={mx(b, 0) - MW / 2 - 4} y2={locusY(b, k)} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="2 9" strokeLinecap="round" opacity={prog(f, at, 14)} />;
	const beads: [number, number][] = [[bx(0), locusY(0, 0)], [bx(1), locusY(1, 0)], [bx(0), locusY(0, 1)], [bx(1), locusY(1, 1)], [bx(2), locusY(2, 0)], [bx(3), locusY(3, 0)]];
	return (
		<>
			<Heading items={[[0, 'The model cell, with three genes marked']]} size={60} />
			<Overlay>
				<Panel x={110} y={196} w={1700} h={790} o={prog(f, 0, 14)} />
				<HCell cx={CX} cy={CY + 20} rx={RX + 40} ry={RY + 20} nuc={1} nucR={290} o={prog(f, 0, 14)} />
				{link(0, 1, 0, c.teal1 + 14)}
				{link(0, 1, 1, c.lower + 24)}
				{link(2, 3, 0, c.teal2 + 14)}
				{[0, 1, 2, 3].map(i => (
					<g key={i} opacity={prog(f, 4 + i * 4, 16)}>
						<HChrom x={mx(i, 0)} y={CY} len={ML[KIND[i]]} cen={MCEN[KIND[i]]} w={MW} col={COLS[i]} bands={LOCI[KIND[i]]} />
						{lettersOf(i).map((t, k) => <Letter key={k} x={bx(i)} y={locusY(i, k)} t={t} r={18} o={lo(i)[k]} />)}
					</g>
				))}
				{beads.map(([x, y], i) => <Bubble key={i} x={x} y={y} at={c.cap + (i % 2) * 6 + Math.floor(i / 2) * 3} />)}
				<Scribble cx={bx(0)} cy={locusY(0, 0)} rx={30} ry={30} at={c.plum1 + 16} color={AMBER_INK} seed={4} />
				<Scribble cx={bx(1)} cy={locusY(1, 0)} rx={30} ry={30} at={c.teal1 + 16} color={AMBER_INK} seed={9} />
				<g opacity={vis(f, c.short + 10, c.label - 8, 10)}><Scribble cx={bx(2)} cy={locusY(2, 0)} rx={30} ry={30} at={c.short + 10} color={AMBER_INK} seed={2} /></g>
			</Overlay>
			<Pill at={c.pairs} out={c.upper - 10} x={CX - 345} y={214} size={40}>model cell: 4 chromosomes (2 sets of 2)</Pill>
			<Pill at={c.upper + 24} x={CX - 330} y={214} size={40}>same gene, same place, two versions</Pill>
			<GreyTag at={c.genes} out={c.upper + 60} x={150} y={900} text="gene: a section of DNA with one instruction" size={30} />
			<GreyTag at={c.label} x={820} y={906} text="letters are labels only, no dominance" size={30} />
		</>
	);
};

// ---------- the painted pair close-ups (one canvas: homologous pair, then the crossing over trio) ----------
export const PAIR_CAM: Cam = {zoom: 1.2, fx: 1000, fy: 990};
const PB = {cx: 960, cy: 560, size: 860};
const P = (x: number, y: number) => toS(PAIR_CAM, x, y, PB);
const kP = (PB.size / 2000) * PAIR_CAM.zoom;
/** Letters beside the painted chromatids of the homologous-pair plate. Outer chromatids: outside; inner chromatids: in the gap, offset up (pink) and down (teal). */
const LOCI_ROWS = [{y: 570, xs: [659, 868, 1134, 1343], t: ['A', 'A', 'a', 'a']}, {y: 1435, xs: [640, 873, 1129, 1361], t: ['B', 'B', 'b', 'b']}];
const PairLetters: React.FC<{o: number; link?: number}> = ({o, link = 0}) => (
	<g opacity={o}>
		{LOCI_ROWS.map((row, r) => {
			const [x0, x1, x2, x3] = row.xs.map(x => P(x, row.y)[0]);
			const y = P(0, row.y)[1];
			const hw = 75 * kP;
			return (
				<g key={r}>
					{link > 0.01 ? <line x1={x0 - hw - 46} y1={y} x2={x3 + hw + 46} y2={y} stroke={AMBER_INK} strokeWidth={3.5} strokeDasharray="2 10" strokeLinecap="round" opacity={link} /> : null}
					<Letter x={x0 - hw - 26} y={y} t={row.t[0]} r={18} />
					<Letter x={x3 + hw + 26} y={y} t={row.t[3]} r={18} />
				</g>
			);
		})}
	</g>
);

// ---------- 4. Copy once, then pair up ----------
export const ScenePairUp: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('prophase-one'), {
		start: 'Meiosis starts', copied: 'is copied', sister: 'two sister', first: 'first difference', pro: 'In prophase one', finds: 'finds its homologous', lie: 'the two lie', side: 'side by side', gene: 'gene against', lets: 'lets the cell', one: 'one partner', end: 'each end',
	});
	const dup = prog(f, c.copied, 34);
	const tL = prog(f, c.finds + 6, 44), tS = prog(f, c.lie + 6, 40);
	const tt = (i: number) => (i < 2 ? tL : tS);
	const toPlate = prog(f, c.gene - 14, 22);
	// letters beside both sister chromatids: left chromatid letters on the left, right chromatid letters on the right
	return (
		<>
			<Heading items={[[0, 'Copied once, then pair up']]} size={64} />
			<Overlay>
				<g opacity={1 - toPlate}>
					<Panel x={110} y={196} w={1700} h={680} />
					<HCell cx={CX} cy={CY} rx={RX + 40} ry={RY} nuc={1} nucR={290} />
					{[0, 1, 2, 3].map(i => (
						<HChrom key={i} x={mx(i, tt(i))} y={CY} len={ML[KIND[i]]} cen={MCEN[KIND[i]]} w={MW} col={COLS[i]} bands={LOCI[KIND[i]]} dup={dup}
							lettersA={lettersOf(i)} lettersB={dup > 0.5 ? lettersOf(i) : undefined} />
					))}
					<Bracket x1={mx(0, 1) - 60} x2={mx(1, 1) + 60} y={CY + 170} at={c.side} color={AMBER_INK} />
					<Bracket x1={mx(2, 1) - 60} x2={mx(3, 1) + 60} y={CY + 170} at={c.side + 8} color={AMBER_INK} />
				</g>
				{/* gene against gene: the painted homologous pair, letters at the matching bands of all four chromatids */}
				<Stage cam={PAIR_CAM} base={PB} o={toPlate} srcs={[CD('homologous-pair-loci')]}>
					<PL src={CD('homologous-pair-loci')} circ={[1000, 985, 890]} feather={60} />
				</Stage>
				<PairLetters o={toPlate} link={prog(f, c.gene + 4, 16)} />
				<g opacity={toPlate}>
					<Arrow x1={P(560, 990)[0]} y1={P(560, 990)[1]} x2={P(330, 990)[0]} y2={P(330, 990)[1]} at={c.one} color={AMBER_INK} width={6} />
					<Arrow x1={P(1440, 990)[0]} y1={P(1440, 990)[1]} x2={P(1670, 990)[0]} y2={P(1670, 990)[1]} at={c.end} color={AMBER_INK} width={6} />
				</g>
			</Overlay>
			<Pill at={c.sister} out={c.pro - 6} x={CX - 400} y={214} size={40}>copied once: each chromosome has 2 sister chromatids</Pill>
			<Hand at={c.side + 14} out={c.gene - 14} x={mx(0, 1) - 150} y={CY + 186} size={34} w={300} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>homologous pair, side by side</span></Hand>
			<Hand at={c.side + 22} out={c.gene - 14} x={mx(2, 1) - 150} y={CY + 186} size={34} w={300} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>another pair</span></Hand>
			<GreyTag at={c.first} out={c.gene - 14} x={1450} y={300} text="mitosis: no pairing" size={32} />
			<Hand at={c.gene} x={96} y={300} size={46} w={330}>gene against gene: the same loci line up</Hand>
			<GreyTag at={c.gene + 20} x={1480} y={300} text="the long pair, close up" size={28} />
			<GreyTag at={c.gene + 30} x={1480} y={360} text="the short pair pairs the same way" size={24} />
			<MStrip at={[c.pro, null, null, null, null, null, null, null]} active={f >= c.pro ? 0 : -1} />
			<GreyTag at={c.pro + 28} out={c.gene - 14} x={1426} y={898} text="same four stage names as mitosis" size={24} />
		</>
	);
};

// ---------- 5. Crossing over (the painted trio) ----------
const XC = [760, 925, 1075, 1242];
const PAIR_IN: ReturnType<typeof cbox>[] = [[560, 300, 975, 1680], [1025, 300, 1440, 1680]];
const PAIR_OUT: ReturnType<typeof cbox>[] = [[650, 300, 1000, 1680], [1000, 300, 1350, 1680]];
/** Outline round one chromatid of the painted pair (screen). */
const ChromatidRing: React.FC<{x: number; o: number}> = ({x, o}) => {
	if (o <= 0.01) return null;
	const [sx, top] = P(x, 330), [, bot] = P(x, 1640);
	return <ellipse cx={sx} cy={(top + bot) / 2} rx={52 * kP + 14} ry={(bot - top) / 2 + 10} fill="none" stroke={AMBER} strokeWidth={6} opacity={o} />;
};
const Lightning: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 8) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	const flick = 0.75 + 0.25 * Math.sin(f * 1.2);
	return <path d={`M${x - 9},${y - 26} L${x + 7},${y - 5} L${x - 7},${y + 4} L${x + 10},${y + 28}`} fill="none" stroke={AMBER} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={p * flick} />;
};
const HALO_C = '0 0 4px #fbf6ea, 0 0 6px #fbf6ea, 0 0 10px #fbf6ea, 0 0 14px #fbf6ea';

export const SceneCrossingWhat: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('crossing-what'), {
		paired: 'While they are paired', one: 'a chromatid from one', partner: 'from its partner', brk: 'break at the same', swap: 'swap the matching', non: 'non-sister', chroma: ['chromatids', 1], cross: 'crossing over',
	});
	// the partners close up (synapsis), then the inner chromatids cross, break and exchange their distal segments
	const tClose = prog(f, 0, 36);
	const tB = prog(f, c.brk - 6, 20);
	const tC = prog(f, c.swap + 4, 60);
	const lit1 = vis(f, c.one, c.swap + 30, 12), lit2 = vis(f, c.partner, c.swap + 30, 12);
	const cutL = P(925, 1200), cutR = P(1075, 1200);
	const nsY = P(0, 1660)[1], sY = P(0, 320)[1];
	return (
		<>
			<Overlay>
				<Stage cam={PAIR_CAM} base={PB} srcs={[CD('homologous-pair-loci'), CD('crossing-over-a'), CD('crossing-over-b'), CD('crossing-over-c'), CD('homologous-pair-loci', true), CD('crossing-over-a', true)]}>
					{tClose < 1 ? (
						<Morph A={CD('homologous-pair-loci')} B={CD('crossing-over-a')} t={tClose} fade={[0.3, 0.8]} bg={[0.2, 0.8]}
							pieces={[{a: [765, 945], b: [875, 945], boxA: PAIR_IN[0], boxB: PAIR_OUT[0]}, {a: [1235, 945], b: [1125, 945], boxA: PAIR_IN[1], boxB: PAIR_OUT[1]}]} />
					) : tC > 0 ? <Dissolve a={CD('crossing-over-b')} b={CD('crossing-over-c')} t={tC} /> : <Dissolve a={CD('crossing-over-a')} b={CD('crossing-over-b')} t={tB} />}
				</Stage>
				<ChromatidRing x={XC[1]} o={lit1} />
				<ChromatidRing x={XC[2]} o={lit2} />
				<Lightning x={cutL[0] - 30} y={cutL[1]} at={c.brk} out={c.swap + 24} />
				<Lightning x={cutR[0] + 30} y={cutR[1]} at={c.brk + 4} out={c.swap + 24} />
				<g opacity={vis(f, c.brk, c.swap + 24, 8)}><line x1={cutL[0] - 60} x2={cutR[0] + 60} y1={cutL[1]} y2={cutL[1]} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="6 9" strokeLinecap="round" /></g>
				<g opacity={vis(f, c.non, c.chroma + 120, 12)}>
					<Bracket x1={P(XC[1], 0)[0] - 10} x2={P(XC[2], 0)[0] + 10} y={nsY} at={c.non} color={AMBER_INK} />
				</g>
				<Bracket x1={P(XC[0], 0)[0] - 10} x2={P(XC[1], 0)[0] + 10} y={sY} at={c.chroma} color={INK_SOFT} down={false} />
			</Overlay>
			<Hand at={c.one + 6} out={c.swap + 30} x={180} y={430} size={42} w={330}>one chromatid of the plum chromosome</Hand>
			<Hand at={c.partner + 6} out={c.swap + 30} x={1450} y={430} size={42} w={330}>one chromatid of its partner</Hand>
			<Hand at={c.swap + 30} x={180} y={430} size={42} w={330}>the matching pieces swap</Hand>
			<Hand at={c.non + 10} x={P(1000, 0)[0] - 150} y={nsY + 12} size={44} w={300}><span style={{display: 'block', textAlign: 'center', textShadow: HALO_C}}>non-sister</span></Hand>
			<Hand at={c.chroma + 10} x={P(842, 0)[0] - 100} y={sY - 70} size={44} w={200} color={INK_SOFT}><span style={{display: 'block', textAlign: 'center', textShadow: HALO_C}}>sister</span></Hand>
			<Hand at={c.cross} x={1440} y={640} size={76} w={440}><span style={{textShadow: HALO_C}}>crossing over</span></Hand>
			<MStrip at={[-100, null, null, null, null, null, null, null]} active={0} />
		</>
	);
};

export const SceneCrossingMakes: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('crossing-makes'), {
		no: 'does not make', newA: 'new alleles', combos: 'new combinations', four: 'the four long', chro: ['chromatids', 1], all: 'now all different', sister: 'the sister',
	});
	const pulse = (a: number, w = 40) => (f >= a && f < a + w ? Math.sin(((f - a) / w) * Math.PI) : 0);
	const tags = ['A B', 'A b', 'a B', 'a b'];
	const tAt = [c.four, c.four + 16, c.all - 22, c.all];
	const topY = P(0, 340)[1];
	const bands = AN.crossing.bands;
	// each tag sits above its chromatid, with a short leader to the chromatid top
	const tagX = (i: number) => P(XC[i], 0)[0] + (i - 1.5) * 34;
	return (
		<>
			<Overlay>
				<Stage cam={PAIR_CAM} base={PB} srcs={[CD('crossing-over-c')]}><PL src={CD('crossing-over-c')} /></Stage>
				{/* the alleles: the A and B bands of all four chromatids pulse */}
				{XC.map((x, i) => [bands[0], bands[2]].map((b, k) => { const [sx, sy] = P(x, b); return <circle key={i + '-' + k} cx={sx} cy={sy} r={24 + 6 * pulse(c.no)} fill="none" stroke={AMBER} strokeWidth={5} opacity={pulse(c.no) + pulse(c.combos)} />; }))}
				{XC.map((x, i) => <line key={'l' + i} x1={P(x, 0)[0]} y1={topY - 6} x2={tagX(i)} y2={topY - 46} stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, tAt[i] + 8, 10)} />)}
				<Bracket x1={P(XC[0], 0)[0] - 20} x2={P(XC[3], 0)[0] + 20} y={P(0, 1660)[1]} at={c.all} color={AMBER_INK} />
				{/* a new allele: not made */}
				<g opacity={prog(f, c.no, 14)}>
					<circle cx={1520} cy={330} r={34} fill="none" stroke="#b9b09c" strokeWidth={5} strokeDasharray="6 8" />
					<text x={1520} y={344} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#9a9384">new</text>
				</g>
				<g opacity={prog(f, c.newA, 8)}>
					<DrawPath d="M1480,290 L1560,370" at={c.newA} dur={8} color="#7a8088" width={8} />
					<DrawPath d="M1560,290 L1480,370" at={c.newA + 6} dur={8} color="#7a8088" width={8} />
				</g>
				<g opacity={prog(f, c.sister, 12)}>
					<Scribble cx={(P(XC[0], 0)[0] + P(XC[1], 0)[0]) / 2} cy={P(0, 985)[1]} rx={90} ry={360} at={c.sister} color={AMBER_INK} seed={5} />
				</g>
			</Overlay>
			{tags.map((tg, i) => <Hand key={tg} at={tAt[i] + 8} x={tagX(i) - 52} y={topY - 104} size={46} w={104} color={INK}><span style={{display: 'block', textAlign: 'center', textShadow: HALO_C}}>{tg}</span></Hand>)}
			<Hand at={c.all + 14} x={P(1000, 0)[0] - 200} y={P(0, 1660)[1] + 10} size={44} w={400}><span style={{display: 'block', textAlign: 'center', textShadow: HALO_C}}>4 different chromatids</span></Hand>
			<GreyTag at={c.newA + 8} x={1580} y={310} text="no new allele" size={34} />
			<Pill at={c.newA + 20} x={96} y={210} size={36}>allele: a version of a gene</Pill>
			<MStrip at={[-100, null, null, null, null, null, null, null]} active={0} />
		</>
	);
};

