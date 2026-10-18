// B12 scenes 1 to 4: the hook (1985 immigration case: a mother's and a boy's band patterns, shared bands joined), two
// tools for two questions (a magnifier reads every base; five markers light along the same chromosome), how
// sequencing works (copies break at different places, one fragment is read base by base with labelled peaks, the
// overlaps line up and the sequence is rebuilt) and sequencing a family at the sickle site (double peaks on carriers).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BaseT, CARD, ChromBar, CPLUM, DrawPath, EDGE, FAM, FAM_GENO, FILL, Fade, Gel, GreyTag, Heading, INK, INK_SOFT, MistakeChip, Overlay, PL12, Panel,
	Pedigree, PlateB, Ring, S, SITE_I, Sx, TEALC, Tick, TileRow, Trace, bandY, clamp01, laneX, lerp, pedXY, prog, rng, traceSeq, vis,
} from './shared';
import type {GelG} from './shared';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	y1985: 'In 1985, British officials', boy: 'a boy returning from Ghana', son: "his mother's son", jeff: 'Alec Jeffreys', bands: 'patterns of bands',
	compared: "He compared the boy's pattern", really: 'he really was her son', how: 'So how can a pattern', diff: 'how is that different',
});
const G1: GelG = {x: 860, y: 430, w: 600, h: 400, n: 3, lo: 5, hi: 16};
/** Lanes: mother, boy, and the father's bands rebuilt from the three undisputed siblings (as in the 1985 case). */
const MUM1 = [6, 8, 9, 11, 13, 15], BOY1 = [6, 7, 9, 12, 13, 15], DAD1 = [7, 10, 12, 14];
if (!BOY1.every(b => MUM1.includes(b) || DAD1.includes(b))) throw new Error('hook: every boy band must come from the mother or the rebuilt father');
export const SceneHookB12: React.FC = () => {
	const f = useCurrentFrame();
	const shared = BOY1.filter(b => MUM1.includes(b));
	const fromDad = BOY1.filter(b => !MUM1.includes(b) && DAD1.includes(b));
	const solid = prog(f, K1.really + 20, 12);
	const hy = G1.y - 50;
	return (
		<>
			<Heading text="Reading inheritance in DNA" at={K1.how} size={60} />
			<Overlay>
				{/* the case card */}
				<g opacity={prog(f, K1.y1985, 14)} transform={`translate(${(1 - prog(f, K1.y1985, 20)) * -60},0)`}>
					<Panel x={110} y={250} w={600} h={300} />
					<Sx x={140} y={312} text="1985: immigration case" size={44} color={INK} hand />
					{[0, 1, 2].map(i => <line key={i} x1={140} y1={360 + i * 34} x2={560 - i * 60} y2={360 + i * 34} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" opacity={0.45} />)}
					<g transform="translate(620,460) rotate(-12)" opacity={1 - solid}>
						<circle r={48} fill="none" stroke="#c4432f" strokeWidth={5} />
						<text y={22} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 64}} fill="#c4432f">?</text>
					</g>
				</g>
				<Sx x={140} y={630} text="Is the boy his mother's son?" size={38} color={INK} hand at={K1.son} />
				<Sx x={140} y={720} text="Alec Jeffreys: compare DNA" size={36} color={INK} weight={700} at={K1.jeff} />
				<Sx x={140} y={768} text="as patterns of bands" size={36} color={INK} weight={700} at={K1.bands} />
				{/* the pair, joined by a dashed then solid line */}
				<Gel G={G1} electrodes={false} labels={false} lanes={[{sex: 'F', label: 'mother', bands: MUM1}, {sex: 'M', label: 'boy', bands: BOY1, small: true}, {sex: 'M', label: 'father (rebuilt)', bands: DAD1}]}
					laneO={i => prog(f, i === 2 ? K1.compared + 4 : i ? K1.boy : K1.son, 12)} bandO={(i, j) => prog(f, K1.bands + 6 + j * 4 + i * 2, 10)} />
				<line x1={laneX(G1, 0) + 30} y1={hy} x2={laneX(G1, 1) - 26} y2={hy} stroke={INK} strokeWidth={3} strokeDasharray={solid > 0.5 ? undefined : '8 8'} opacity={prog(f, K1.son + 10, 10)} />
				<Sx x={(laneX(G1, 0) + laneX(G1, 1)) / 2} y={hy - 14} text="?" size={40} color={AMBER_INK} weight={800} anchor="middle" opacity={1 - solid} at={K1.son + 10} />
				{solid > 0.01 ? <Tick x={(laneX(G1, 0) + laneX(G1, 1)) / 2} y={hy - 30} at={K1.really + 20} s={34} /> : null}
				{shared.map((b, k) => (
					<g key={b} opacity={prog(f, K1.compared + 10 + k * 5, 10)}>
						<line x1={laneX(G1, 0) + 40} y1={bandY(G1, b)} x2={laneX(G1, 1) - 40} y2={bandY(G1, b)} stroke={AMBER} strokeWidth={3} strokeDasharray="6 5" />
					</g>
				))}
				{fromDad.map((b, k) => (
					<g key={b} opacity={prog(f, K1.compared + 34 + k * 5, 10)}>
						<line x1={laneX(G1, 1) + 40} y1={bandY(G1, b)} x2={laneX(G1, 2) - 40} y2={bandY(G1, b)} stroke={AMBER} strokeWidth={3} strokeDasharray="6 5" />
					</g>
				))}
				<Sx x={G1.x + G1.w + 30} y={G1.y + 80} text="every band in the boy:" size={30} color={AMBER_INK} hand at={K1.really} />
				<Sx x={G1.x + G1.w + 30} y={G1.y + 118} text="from the mother or the father" size={30} color={AMBER_INK} hand at={K1.really + 6} />
				<Sx x={G1.x + G1.w + 30} y={G1.y + 166} text="consistent with her son" size={30} color={INK} hand at={K1.really + 24} />
				<GreyTag x={G1.x} y={G1.y + G1.h + 24} text="illustration, not the 1985 data" at={K1.bands + 20} size={24} />
				<GreyTag x={G1.x} y={G1.y + G1.h + 64} text="father's bands rebuilt from three undisputed siblings" at={K1.compared + 10} size={24} />
				<TileRow x={1500} y={760} seq="ATGGCA" pitch={60} w={52} h={46} tile={i => ({o: prog(f, K1.diff + i * 4, 8)})} />
				<Sx x={1490} y={840} text="one base at a time?" size={36} color={INK} hand at={K1.diff + 20} />
			</Overlay>
		</>
	);
};

// ---------- 2. Two tools, two questions ----------
const K2 = cues(S('two-tools'), {two: 'two main ways', seq: 'DNA sequencing reads the exact order', prof: "DNA profiling doesn't read", few: 'a few chosen places', every: 'one reads every letter', handful: 'checks a handful of markers', depends: 'depends on the question'});
export const BAR2 = {x: 140, y: 300, w: 1640};
export const MARK_T = [0.38, 0.52, 0.64, 0.78, 0.92];
const SEQ2 = 'ATGCCTGAGGAC';
export const SceneTwoToolsB12: React.FC = () => {
	const f = useCurrentFrame();
	const X = (t: number) => BAR2.x + t * BAR2.w;
	const mag = prog(f, K2.seq, 60);
	const magX = lerp(X(0.04), X(0.16), mag);
	const pulseL = vis(f, K2.every, K2.handful), pulseR = vis(f, K2.handful, K2.depends);
	return (
		<>
			<Heading text="Two tools, two questions" at={K2.two} size={56} />
			<Overlay>
				<ChromBar x={BAR2.x} y={BAR2.y} w={BAR2.w} h={54} o={prog(f, 0, 14)} />
				{/* sequencing: a magnifier reads a stretch */}
				<g opacity={prog(f, K2.seq, 12)}>
					<rect x={magX - 10} y={BAR2.y - 46} width={250} height={92} rx={16} fill="rgba(232,169,59,0.12)" stroke={AMBER_INK} strokeWidth={4} />
					<line x1={magX + 120} y1={BAR2.y + 46} x2={500} y2={470} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 6" />
				</g>
				<Sx x={140} y={430} text="DNA sequencing: base order" size={46} color={INK} hand at={K2.seq + 6} />
				<TileRow x={180} y={520} seq={SEQ2} pitch={62} w={54} h={46} tile={i => ({o: prog(f, K2.seq + 20 + i * 5, 8), glow: pulseL})} />
				<Sx x={140} y={620} text="reads every letter" size={34} color={INK_SOFT} hand at={K2.every} />
				{/* profiling: five markers */}
				{MARK_T.map((t, i) => (
					<g key={i} opacity={prog(f, K2.few + i * 6, 10)}>
						{pulseR > 0.01 ? <circle cx={X(t)} cy={BAR2.y} r={30} fill={AMBER} opacity={0.4 * pulseR} /> : null}
						<rect x={X(t) - 7} y={BAR2.y - 30} width={14} height={60} rx={4} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
						<DrawPath d={`M${X(t) - 22},${BAR2.y + 44} L${X(t) - 22},${BAR2.y + 54} L${X(t) + 22},${BAR2.y + 54} L${X(t) + 22},${BAR2.y + 44}`} at={K2.few + i * 6} dur={10} color={AMBER_INK} width={3} />
					</g>
				))}
				<Sx x={1000} y={430} text="DNA profiling: selected markers" size={46} color={INK} hand at={K2.prof} />
				<Sx x={1000} y={490} text="doesn't read the order" size={34} color={INK_SOFT} hand at={K2.prof + 20} />
				<Sx x={1000} y={620} text="checks a handful of markers" size={34} color={INK_SOFT} hand at={K2.handful} />
				<Fade at={K2.depends}>
					<g transform={`translate(960,${lerp(700, 790, prog(f, K2.depends, 18))})`}>
						<rect x={-150} y={-60} width={300} height={140} rx={20} fill={CARD} stroke={AMBER} strokeWidth={4} />
						<text y={36} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 90}} fill={AMBER_INK}>?</text>
					</g>
					<Sx x={960} y={960} text="it depends on the question" size={40} color={INK} hand anchor="middle" />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 3. How sequencing works ----------
const K3 = cues(S('how-sequencing-works'), {
	never: 'Sequencing never reads', copied: 'copied and broken', frags: 'short fragments', machine: 'A machine reads each fragment', one: 'one base at a time', dye: 'tagged with its own coloured dye',
	diff: 'broken at different places', overlap: 'the fragments overlap', lines: 'lines up those overlaps', torn: 'matching the edges of torn strips', rebuild: 'rebuilds the whole sequence',
});
const SEQ24 = 'ATGGCATTCGAGTACCTGAAGCTA';
const CUTS = [[8, 16], [6, 15], [9, 17], [7, 15]];
type Frag = {c: number; k: number; a: number; b: number};
const FRAGS: Frag[] = CUTS.flatMap((cs, c) => {
	const pts = [0, ...cs, SEQ24.length];
	return pts.slice(0, -1).map((a, k) => ({c, k, a, b: pts[k + 1]}));
});
(() => {
	if (FRAGS.some(fr => fr.b - fr.a < 6 || fr.b - fr.a > 9)) throw new Error('B12 scene 3: fragments must be 6 to 9 bases');
	// every cut point is spanned by a fragment from another copy (that is the overlap that lets software join them)
	CUTS.forEach((cs, c) => cs.forEach(p => { if (!FRAGS.some(fr => fr.c !== c && fr.a < p && fr.b > p)) throw new Error('B12 scene 3: overlap missing at ' + p); }));
})();
const PIT3 = 38, X3 = 420, TW3 = 34, TH3 = 30;
const rowY3 = (c: number) => 330 + c * 52;
/** A jumbled but non-overlapping pile: shuffled slots in two columns. */
const PILE = (() => {
	const r = rng(23);
	const slots = FRAGS.map((_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).map(q => q.i);
	const out: [number, number][] = new Array(FRAGS.length);
	slots.forEach((fi, s) => { out[fi] = [300 + (s % 2) * 440 + (s % 3) * 14, 300 + Math.floor(s / 2) * 50]; });
	return out;
})();
const READ_I = FRAGS.findIndex(fr => fr.c === 1 && fr.k === 1);
export const SceneSequencingB12: React.FC = () => {
	const f = useCurrentFrame();
	const copies = prog(f, K3.copied, 20);
	const gap = prog(f, K3.frags - 6, 16);
	const pile = prog(f, K3.machine - 10, 26);
	const stack = prog(f, K3.lines, 30);
	const RD = FRAGS[READ_I];
	const readSeq = SEQ24.slice(RD.a, RD.b).split('');
	const readO = vis(f, K3.machine + 10, K3.lines);
	const ghostO = vis(f, K3.diff, K3.lines + 10);
	return (
		<>
			<Heading text="How sequencing works" at={K3.never} size={56} />
			<Overlay>
				<PlateB p={PL12.swab} cx={190} cy={420} w={110} o={prog(f, 0, 12)} />
				<GreyTag x={140} y={540} text="sample" at={4} size={22} />
				<GreyTag x={120} y={590} text="one common method:" at={K3.never + 10} size={22} />
				<GreyTag x={120} y={626} text="dye-tagged short reads" at={K3.never + 14} size={22} />
				<MistakeChip x={1140} y={196} text="reads a chromosome end to end" at={K3.never} cross={K3.never + 30} size={30} />
				{/* fragments: rows (copies), open gaps, a jumbled pile, then the aligned stack */}
				{FRAGS.map((fr, i) => {
					const o = fr.c === 0 ? 1 : copies;
					if (o <= 0.01) return null;
					const rx = X3 + fr.a * PIT3 + gap * fr.k * 16, ry = lerp(rowY3(0), rowY3(fr.c), fr.c === 0 ? 1 : copies);
					const [px, py] = PILE[i];
					const sx = X3 + fr.a * PIT3, sy = rowY3(fr.c);
					const x = stack > 0 ? lerp(px, sx, stack) : lerp(rx, px, pile);
					const y = stack > 0 ? lerp(py, sy, stack) : lerp(ry, py, pile);
					const isRead = i === READ_I;
					return (
						<g key={i} opacity={o * (isRead ? 1 - 0.6 * readO : 1)}>
							<rect x={x - PIT3 / 2 - 1} y={y - TH3 / 2 - 5} width={(fr.b - fr.a) * PIT3 + 2} height={TH3 + 10} rx={8} fill="none" stroke={INK_SOFT} strokeWidth={2} opacity={gap} />
							{SEQ24.slice(fr.a, fr.b).split('').map((l, j) => <BaseT key={j} x={x + j * PIT3} y={y} l={l} w={TW3} h={TH3} />)}
						</g>
					);
				})}
				{/* the reading window */}
				<g opacity={readO}>
					<Panel x={1180} y={300} w={640} h={290} stroke={AMBER} sw={3} />
					<Sx x={1206} y={344} text="reading one fragment" size={32} color={INK} hand />
					<Trace x={1240} y={470} seq={readSeq} pitch={62} h={80} size={26} reveal={i => prog(f, K3.one + i * 7, 8)} />
					{readSeq.map((l, j) => <BaseT key={j} x={1240 + j * 62} y={540} l={l} w={54} h={42} o={prog(f, K3.one + j * 7, 8)} glow={pulseAt(f, K3.one + j * 7)} />)}
				</g>
				<Sx x={1206} y={640} text="each base: its own dye colour" size={32} color={AMBER_INK} hand at={K3.dye} out={K3.lines} />
				{/* where each copy was cut */}
				<g opacity={ghostO}>
					{CUTS.map((cs, c) => (
						<g key={c}>
							{SEQ24.split('').map((l, j) => <rect key={j} x={X3 + j * 26 - 11} y={680 + c * 34 - 11} width={22} height={22} rx={4} fill={FILL[l]} opacity={0.7} />)}
							{cs.map(p => <line key={p} x1={X3 + p * 26 - 13} y1={680 + c * 34 - 16} x2={X3 + p * 26 - 13} y2={680 + c * 34 + 16} stroke={AMBER_INK} strokeWidth={5} opacity={0.5 + 0.5 * Math.abs(Math.sin((f - K3.diff) / 6))} />)}
						</g>
					))}
					<Sx x={X3 + 24 * 26 + 20} y={740} text="cut at different places:" size={32} color={AMBER_INK} hand />
					<Sx x={X3 + 24 * 26 + 20} y={784} text="the fragments overlap" size={32} color={AMBER_INK} hand />
				</g>
				{/* overlaps ring once aligned */}
				{stack > 0.95 ? CUTS.flat().filter((p, i, a) => a.indexOf(p) === i).map((p, k) => (
					<rect key={p} x={X3 + p * PIT3 - PIT3 - 19} y={rowY3(0) - 26} width={PIT3 * 2} height={rowY3(3) - rowY3(0) + 52} rx={10} fill="none" stroke={AMBER} strokeWidth={3} opacity={prog(f, K3.lines + 30 + k * 4, 10)} />
				)) : null}
				{/* torn strips */}
				<Fade at={K3.torn}>
					<path d="M1300,700 L1520,700 L1530,712 L1512,726 L1534,740 L1516,754 L1530,770 L1300,770 Z" fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={3} />
					<path d={`M${lerp(1600, 1540, prog(f, K3.torn + 10, 20))},700 L1800,700 L1800,770 L${lerp(1600, 1540, prog(f, K3.torn + 10, 20))},770 L${lerp(1614, 1554, prog(f, K3.torn + 10, 20))},754 L${lerp(1596, 1536, prog(f, K3.torn + 10, 20))},740 L${lerp(1618, 1558, prog(f, K3.torn + 10, 20))},726 L${lerp(1600, 1540, prog(f, K3.torn + 10, 20))},712 Z`} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={1300} y={820} text="match the overlaps" size={32} color={INK} hand />
				</Fade>
				{/* the consensus */}
				<TileRow x={X3} y={580} seq={SEQ24} pitch={PIT3} w={TW3} h={TH3} tile={i => ({o: prog(f, K3.rebuild + i * 1.5, 8)})} />
				<GreyTag x={X3} y={612} text="assembled sequence" at={K3.rebuild + 20} size={24} />
			</Overlay>
		</>
	);
};
const pulseAt = (f: number, at: number) => Math.max(0, 1 - Math.abs(f - at - 6) / 10);

// ---------- 4. Sequencing a family, and a population ----------
const K4 = cues(S('sequencing-a-family'), {
	because: 'Because sequencing reads every base', snips: 'like the snips in the frequency video', take: 'Take the sickle cell allele', changed: 'one A is changed to T',
	seq: 'Sequence this family', both: 'Both parents are unaffected', two: 'each shows two letters there', carrier: 'so each is a carrier', only: 'shows only T',
	rec: "That's the recessive pattern", thousands: 'Sequence thousands of people', freq: "you get the allele's frequency",
});
const L4 = {x0: 420, y0: 300, gap: 360, row: 330, sz: 60};
export const SceneFamilyB12: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(FAM, L4);
	const sh = prog(f, K4.thousands - 6, 26);
	const T = {sc: lerp(1, 0.5, sh), tx: lerp(0, -40, sh), ty: lerp(0, 95, sh)};
	const showFull = (id: string) => (id.startsWith('II-1') ? K4.only : id.startsWith('I-') ? K4.two : K4.only + 20);
	const grid = prog(f, K4.thousands + 10, 40);
	const collapse = prog(f, K4.freq - 6, 24);
	return (
		<>
			<Heading text="Sequencing a family, and a population" at={K4.because} size={52} />
			<Overlay>
				<g transform={`translate(${T.tx},${T.ty}) scale(${T.sc})`}>
					<Pedigree ped={FAM} L={L4} o={id => prog(f, K4.seq - 30 + (id.startsWith('II') ? 10 : 0), 12)} nums={0} />
					{FAM.inds.map(p => {
						const [x, y] = xy(p.id);
						const g = FAM_GENO[p.id];
						const at = showFull(p.id);
						const seq = traceSeq(g).map((b, i) => (i === SITE_I && f < at ? '?' : b));
						return (
							<g key={p.id} opacity={prog(f, K4.seq + 6, 14)}>
								<Trace x={x - 4 * 26} y={y + 132} seq={seq.map(b => (b === '?' ? 'A' : b))} pitch={26} h={46} size={18} frame={SITE_I} hot={f >= at ? 1 : 0} reveal={i => (i === SITE_I && f < at ? 0 : 1)} />
								{f >= at ? <Sx x={x} y={y + 60} text={g} size={30} color={AMBER_INK} weight={800} anchor="middle" at={at} /> : null}
							</g>
						);
					})}
					{['I-1', 'I-2'].map(id => {
						const [x, y] = xy(id);
						return (
							<g key={id} opacity={prog(f, K4.carrier, 12)}>
								<rect x={x - 62} y={y + 172} width={124} height={40} rx={20} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
								<Sx x={x} y={y + 202} text="carrier" size={28} color={AMBER_INK} hand anchor="middle" />
							</g>
						);
					})}
				</g>
				<GreyTag x={1160} y={150} text="sickle site: coding strand, codon 6" at={K4.seq + 10} size={22} out={K4.thousands} />
				{/* recall cards */}
				<g opacity={prog(f, K4.take, 14) * (1 - sh)}>
					<Panel x={1380} y={200} w={440} h={140} stroke={AMBER} sw={3} />
					<Sx x={1404} y={244} text="coding strand: sickle cell" size={28} color={INK} hand />
					<TileRow x={1430} y={296} seq="GAG" pitch={50} w={44} h={38} />
					<Sx x={1580} y={308} text="to" size={28} color={INK_SOFT} hand />
					<TileRow x={1640} y={296} seq="GTG" pitch={50} w={44} h={38} tile={i => ({glow: i === 1 ? prog(f, K4.changed, 10) : 0})} />
				</g>
				<GreyTag x={1720} y={354} text="B7" at={K4.take + 6} size={22} out={K4.thousands} />
				<GreyTag x={1380} y={354} text="a SNP (B11)" at={K4.snips} size={22} out={K4.thousands} />
				<GreyTag x={L4.x0 - 40} y={960} text="unaffected parents, affected child: recessive (B9)" at={K4.rec} size={26} out={K4.thousands} />
				{/* thousands of people */}
				<g opacity={grid * (1 - 0.8 * collapse)}>
					{Array.from({length: 72}, (_, i) => {
						const c = i % 12, r = Math.floor(i / 12);
						const o = clamp01(grid * 72 - i);
						const x = lerp(700 + c * 92, 760 + (i / 72) * 1000, collapse), y = lerp(260 + r * 70, 880, collapse);
						const g = i % 5 === 0 ? 'A/T' : i % 17 === 0 ? 'T/T' : 'A/A';
						return (
							<g key={i} opacity={o}>
								<rect x={x} y={y} width={80} height={52} rx={8} fill={CARD} stroke={EDGE} strokeWidth={2} />
								<Trace x={x + 18} y={y + 38} seq={['G', g, 'G']} pitch={22} h={22} size={0.1} />
							</g>
						);
					})}
				</g>
				<g opacity={collapse}>
					<rect x={760} y={850} width={1040} height={60} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
					{Array.from({length: 52}, (_, j) => <rect key={j} x={766 + j * 19.8} y={856} width={17} height={48} fill={j % 7 === 3 ? FILL.T : FILL.A} />)}
					<Sx x={760} y={830} text="T allele: copies / all copies" size={40} color={INK} hand />
					<GreyTag x={760} y={926} text="allele frequency in the population" size={24} at={K4.freq + 10} />
				</g>
			</Overlay>
		</>
	);
};
void AMBER; void CPLUM; void TEALC; void Ring; void FILL;
