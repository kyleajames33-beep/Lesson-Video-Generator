// B6b scenes 6a to 9: the copy leaves and the gene stays (release, re-pairing, export through a nuclear pore), many
// temporary copies, transcription contrasted with DNA replication, codons and one changed base, and the memory aids.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {NEWC, ORIG, pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, BD, BaseTile, Bead, Blob, CELLPT, CellPlate, Chip, DIM, DrawPath, Duplex, Ends, EnvelopeArc, FONT_DISPLAY, FONT_HAND, Fade, GENE0, GENE1,
	GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay, PLUM, PORE_X, Ribbon, RnaPol, Ring, S, SpanBracket, Strand, Sx, Tick,
	YM, YT, arcY, bubble, colX, complementDNA, complementRNA, cubic, cw, kf, mkPath, prog, ptAt,
} from './shared';
import type {Pt} from './shared';
import {Cam} from '../bio-m5-b06a/shared';
import type {CamKey} from '../bio-m5-b06a/shared';
import {HOOK, exitPath, hookPt, LONG_BOT, LONG_TOP} from './s1';
import {MRNA_OF, MrnaRow, YT_OPEN} from './s2';

const POLY = 500;

// ---------- 6a. The copy leaves; the gene stays ----------
const H9 = 'release-export';
const K9 = cues(S(H9), {end: 'At the end of the gene', lets: 'lets go', away: 'new mRNA comes away', behind: 'Behind the polymerase', paired: 'paired up again', unchanged: 'gene is unchanged', ready: 'ready to be copied again', cell: 'In a cell like ours', leaves: 'leaves the nucleus', pore: 'through a nuclear pore', small: 'a small opening', travels: 'travels out to the ribosomes'});
export const SceneRelease: React.FC = () => {
	const f = useCurrentFrame();
	const polX = kf(f, [[K9.lets - 6, colX(GENE1) + 30], [K9.lets + 40, 2150]]);
	const lift = prog(f, K9.away, 26);
	const close = (i: number) => (i < GENE0 ? 0 : 1 - prog(f, K9.paired - 20 + (i - GENE0) * 5, 16));
	const coding = DIM + (1 - DIM) * prog(f, K9.paired, 20);
	const strandO = 1 - prog(f, K9.cell, 16);
	// the ribbon: from the lifted strand, up through the board's pore
	const bpath = mkPath([...cubic([colX(GENE0) + 20, YM - 240], [1000, 330], [1450, 330], [PORE_X, arcY(PORE_X) + 6], 50), ...cubic([PORE_X, arcY(PORE_X) + 6], [PORE_X + 10, 120], [PORE_X + 60, 40], [PORE_X + 120, -80], 30).slice(1)]);
	const bHead = kf(f, [[K9.cell, 520], [K9.pore + 80, bpath.len + 520]]);
	const cam: CamKey[] = [[0, 1, 960, 560], [K9.pore - 30, 1, 960, 560], [K9.pore + 10, 1.55, 1460, 420], [K9.travels - 16, 1.55, 1460, 420]];
	const toPlate = prog(f, K9.travels - 14, 18);
	const P = hookPt;
	const ppath = exitPath(P, CELLPT.pores.ul, CELLPT.erRibo[0], [930, 930]);
	let sPore = 0;
	{
		const pp = P(...CELLPT.pores.ul);
		let best = 1e9;
		ppath.pts.forEach((q, i) => { const d = Math.hypot(q[0] - pp[0], q[1] - pp[1]); if (d < best) { best = d; sPore = ppath.cum[i]; } });
	}
	const pHead = kf(f, [[K9.travels, sPore], [K9.travels + 60, ppath.len]]);
	return (
		<>
			<Heading text="The copy leaves, the gene stays" at={4} size={56} out={K9.pore - 30} />
			<Overlay>
				<g opacity={1 - toPlate}>
					<Cam keys={cam}>
						<EnvelopeArc poreHi={prog(f, K9.pore, 12)} />
						<Duplex top={LONG_TOP} bot={LONG_BOT} open={close} topO={coding} />
						<Ends x={BD.x0} y={YT} n={BD.n} pitch={BD.pitch} left="3'" right="5'" at={0} color={PLUM} out={K9.paired} />
						<g opacity={strandO} transform={`translate(0,${-lift * 240}) rotate(${-1.5 * lift} ${colX(GENE1)} ${YM})`}>
							<MrnaRow unit={() => 1} />
							<Sx x={colX(GENE0) - 58} y={YM - 26} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={0} />
							<Sx x={colX(GENE1) + 70} y={YM + 15} text="3'" size={44} color={MRNA_INK} hand anchor="middle" at={0} />
						</g>
						<Ribbon path={bpath} head={bHead} len={520} width={11} ticks={14} o={prog(f, K9.cell, 10)} />
						<RnaPol x={polX} y={POLY - 30} w={300} h={200} />
						<Chip x={colX(5)} y={YT + 70} text="gene unchanged" at={K9.unchanged} size={40} color={PLUM} stroke={PLUM} />
						<Sx x={colX(5) + 320} y={YT + 112} text="ready to be copied again" size={34} color={INK_SOFT} hand at={K9.ready} />
						<Ring cx={PORE_X} cy={arcY(PORE_X)} rx={56} ry={46} at={K9.pore + 10} color={AMBER} seed={5} />
						<Sx x={PORE_X - 70} y={arcY(PORE_X) + 120} text="nuclear pore: an opening in the envelope" size={30} color={AMBER_INK} hand anchor="end" at={K9.small} />
					</Cam>
				</g>
				<g opacity={toPlate}>
					<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
					<DrawPath d={ppath.pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ')} at={K9.travels - 10} dur={2} color={AMBER} width={4} dash="4 12" />
					<Ribbon path={ppath} head={pHead} len={70} />
					{(() => { const r = P(...CELLPT.erRibo[0]); return <Tick x={r[0] - 36} y={r[1] - 36} at={K9.travels + 62} s={34} />; })()}
					<Sx x={1460} y={360} text="cytoplasm" size={38} color={INK_SOFT} hand at={K9.travels} />
					<GreyTag x={96} y={990} text="Bacteria have no nucleus: their mRNA is read where it is made." at={K9.travels + 20} size={28} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 6b. Many copies, each temporary ----------
const H10 = 'many-copies';
const K10 = cues(S(H10), {one: 'One gene can be copied', many: 'many times', lot: 'a lot of one protein', broken: 'broken down after a while', stop: 'stop making a protein', stopping: 'stopping the copying'});
const EXITS: [string, [number, number]][] = [['ul', CELLPT.erRibo[0]], ['top', CELLPT.freeRibo[2]], ['tr', CELLPT.freeRibo[3]], ['b', CELLPT.freeRibo[4]], ['ll', CELLPT.erRibo[3]]];
export const SceneManyCopies: React.FC = () => {
	const f = useCurrentFrame();
	const P = hookPt;
	const nuc = CELLPT.nuc;
	const starts = [-200, K10.many - 4, K10.many + 14, K10.many + 32, K10.many + 50];
	const count = 1 + starts.slice(1).filter(s => f >= s + 40).length;
	const fray = prog(f, K10.broken + 4, 40);
	return (
		<>
			<Heading text="Many copies, each temporary" at={4} size={56} />
			<Overlay>
				<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
				{EXITS.map(([pk, ribo], i) => {
					const pore = CELLPT.pores[pk];
					const inner: [number, number] = [nuc[0] + (pore[0] - nuc[0]) * 0.55, nuc[1] + (pore[1] - nuc[1]) * 0.55];
					const path = exitPath(P, pore, ribo, inner);
					const head = i === 0 ? path.len : kf(f, [[starts[i], 0], [starts[i] + 46, path.len]]);
					const r = P(ribo[0], ribo[1]);
					const blobs = i === 0 ? prog(f, 0, 1) : prog(f, starts[i] + 50, 14);
					const o = i === 0 ? 1 - prog(f, K10.broken + 30, 20) : prog(f, starts[i], 6);
					return (
						<g key={i}>
							<Ribbon path={path} head={head} len={60} width={5} o={o} fray={i === 0 ? fray : 0} />
							{[0, 1].map(k => <Blob key={k} x={r[0] + (k ? 26 : -20)} y={r[1] - 26 - k * 6} r={9} s={blobs} o={blobs * (i === 0 ? 1 - prog(f, K10.broken + 30, 20) * 0.6 : 1)} seed={i * 3 + k} />)}
						</g>
					);
				})}
				{/* the inset: the polymerase copying the same gene again and again */}
				<Fade at={K10.many - 20}>
					<rect x={1440} y={200} width={420} height={210} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<line x1={1480} y1={300} x2={1820} y2={300} stroke={PLUM} strokeWidth={8} strokeLinecap="round" />
					<line x1={1480} y1={318} x2={1820} y2={318} stroke={PLUM} strokeWidth={8} strokeLinecap="round" />
					{(() => {
						const cyc = ((f - (K10.many - 20)) % 50 + 50) % 50 / 50;
						const x = 1500 + cyc * 300;
						return (
							<g>
								<path d={`M1500,${280} L${x},${280}`} stroke={MRNA} strokeWidth={7} strokeLinecap="round" />
								<RnaPol x={x} y={300} w={90} h={66} label={false} />
							</g>
						);
					})()}
					<Sx x={1460} y={244} text="the same gene, copied again" size={30} color={INK_SOFT} hand at={K10.many - 20} />
					<text x={1460} y={390} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}} fill={MRNA_INK}>{`1 gene, ${count} mRNA copies`}</text>
				</Fade>
				<Chip x={96} y={250} text="a lot of one protein, quickly" at={K10.lot} size={34} color={AMBER_INK} stroke={AMBER} />
				<Chip x={96} y={880} text="mRNA is temporary; the DNA stays" at={K10.broken + 10} size={36} color={MRNA_INK} stroke={MRNA} />
				<Sx x={96} y={990} text="stop copying, and the protein stops" size={36} color={INK_SOFT} hand at={K10.stop} />
			</Overlay>
		</>
	);
};

// ---------- 7. Not the same as DNA copying ----------
const H11 = 'not-replication';
const K11 = cues(S(H11), {look: 'can look like DNA copying', both: 'Both open up the DNA', pairing: 'base pairing on a template', but: 'But replication copies', all: 'both strands of all the DNA', divides: 'before a cell divides', trans: 'Transcription copies', one: 'one strand of one gene', needs: 'whenever the cell needs', sentence: 'In one sentence', whereas: 'whereas'});
/** A small replication fork: the parent duplex on the left splits into two daughter duplexes (old blue, new green). */
const Fork: React.FC<{lit: number}> = ({lit}) => {
	const top = 'ATGCCATGA', bot = complementDNA(top);
	const sp = (i: number) => (i < 3 ? 0 : Math.min(1, (i - 2) / 1.2));
	const d = 130;
	const yA = BD.yc, yB = YT;
	return (
		<g>
			{/* upper daughter: old top (blue) with a new bottom (green) */}
			<Strand x={BD.x0} y={yA} letters={top} pitch={BD.pitch} face="down" color={ORIG} colDy={i => -sp(i) * d} />
			<Strand x={BD.x0} y={yB} letters={'...' + bot.slice(3)} pitch={BD.pitch} face="up" color={NEWC} colDy={i => -sp(i) * d - (yB - yA) * 0 + (i >= 3 ? -(yB - yA) + 2 * BD.so + 2 * BD.th + 16 : 0)} unit={i => (i >= 3 ? 1 : 0)} bbGlow={lit} />
			{/* lower daughter: new top (green) with the old bottom (blue) */}
			<Strand x={BD.x0} y={yA} letters={'...' + top.slice(3)} pitch={BD.pitch} face="down" color={NEWC} colDy={i => (i >= 3 ? sp(i) * d + (yB - yA) - 2 * BD.so - 2 * BD.th - 16 : 0)} unit={i => (i >= 3 ? 1 : 0)} bbGlow={lit} />
			<Strand x={BD.x0} y={yB} letters={bot} pitch={BD.pitch} face="up" color={ORIG} colDy={i => sp(i) * d} />
		</g>
	);
};
export const SceneNotReplication: React.FC = () => {
	const f = useCurrentFrame();
	const leftLit = prog(f, K11.all, 14);
	const rightLit = prog(f, K11.one, 14);
	const tmpl = 'TACCGA', mrna = complementRNA(tmpl);
	const L = {x: 20, y: 200, s: 0.47}, R = {x: 960, y: 200, s: 0.47};
	return (
		<>
			<Heading text="Not the same as DNA copying" at={4} size={56} />
			<Overlay>
				<Sx x={480} y={250} text="replication (DNA copying video)" size={40} color={INK} hand anchor="middle" at={K11.look - 10} />
				<Sx x={1420} y={250} text="transcription" size={40} color={MRNA_INK} hand anchor="middle" at={K11.look - 10} />
				<line x1={960} y1={230} x2={960} y2={700} stroke="rgba(60,45,20,0.15)" strokeWidth={3} />
				<g transform={`translate(${L.x},${L.y}) scale(${L.s})`} opacity={prog(f, K11.look - 10, 14)}>
					<Fork lit={leftLit} />
				</g>
				<g transform={`translate(${R.x},${R.y}) scale(${R.s})`} opacity={prog(f, K11.look - 10, 14)}>
					<Duplex top={complementDNA('CGT' + tmpl + 'AAT')} bot={'CGT' + tmpl + 'AAT'} open={bubble(3, 8, 1)} topO={DIM} x0={BD.x0 + 240} />
					<Strand x={BD.x0 + 240 + 3 * BD.pitch} y={YM} letters={mrna} pitch={BD.pitch} face="down" color={MRNA} bbGlow={rightLit} />
				</g>
				<Chip x={960} y={590} anchor="middle" text="both: open the DNA, pair bases on a template" at={K11.both} size={38} color={INK} hot={pulse(f, K11.pairing, 30)} />
				<Chip x={96} y={690} text="both strands, all the DNA, makes DNA, before division" at={K11.all} size={32} color="#1a5c94" stroke={ORIG} />
				<Chip x={1000} y={690} text="one strand, one gene, makes RNA (U), when needed" at={K11.one} size={32} color={MRNA_INK} stroke={MRNA} />
				<Fade at={K11.sentence}>
					<rect x={96} y={800} width={1728} height={190} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
				</Fade>
				<text x={140} y={880} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50}} fill={INK} opacity={prog(f, K11.sentence + 6, 12)}>
					Both use a DNA template, <tspan fill={AMBER_INK} opacity={prog(f, K11.whereas, 8) * 0.999 + 0.001}>whereas</tspan>
				</text>
				<Sx x={140} y={952} text="only transcription makes RNA, from one strand of one gene." size={50} color={INK} hand at={K11.whereas + 6} />
			</Overlay>
		</>
	);
};

// ---------- 8. Read in threes, and why one base matters ----------
const H12 = 'codons-cftr';
const S12 = S(H12);
const K12 = cues(S12, {groups: 'groups of three bases', codons: 'called codons', our: 'Our mRNA has three', means: 'What each codon means', but: 'But one consequence', cftr: 'such as CFTR', linked: 'linked to cystic fibrosis', one: 'one base in the template strand changes', matching: 'the matching base in the mRNA', codon: 'a codon changes', before: 'before any protein'});
const LIGHT12 = [2, 5, 9].map(k => cw(S12, 'has three A U G G C U and U A A', k));
/** A tile that flips (scaleX through zero) from one letter to another at `at`. */
export const FlipTile: React.FC<{x: number; y: number; face: 'down' | 'up'; from: string; to: string; at: number; w?: number; h?: number; glow?: number}> = ({x, y, face, from, to, at, w = 84, h = 62, glow = 0}) => {
	const f = useCurrentFrame();
	const u = prog(f, at, 14, (t: number) => t);
	const sx = Math.abs(Math.cos(u * Math.PI));
	const l = u < 0.5 ? from : to;
	return <g transform={`translate(${x},0) scale(${Math.max(0.02, sx)},1) translate(${-x},0)`}><BaseTile x={x} y={y} face={face} l={l} w={w} h={h} glow={glow} /></g>;
};
export const SceneCodons: React.FC = () => {
	const f = useCurrentFrame();
	const tFlip = K12.one + 30, mFlip = K12.matching + 24;
	const brY = YM - 34;
	const codonX = (k: number) => [colX(GENE0 + 3 * k) - 50, colX(GENE0 + 3 * k + 2) + 50];
	const yt = YT + BD.openB;
	return (
		<>
			<Heading text="Read in threes: codons" at={4} size={56} />
			<Overlay>
				<EnvelopeArc />
				{/* the template alone (coding strand set aside) and the finished mRNA */}
				<Strand x={BD.x0} y={yt} letters={LONG_BOT} pitch={BD.pitch} face="up" color={PLUM} colDy={i => (i < GENE0 ? -BD.openB * (i === GENE0 - 1 ? 0.7 : 1) : 0)} tileO={i => (i === 6 ? 0 : 1)} o={1} />
				<FlipTile x={colX(6)} y={yt - BD.so} face="up" from="C" to="T" at={tFlip} glow={pulse(f, tFlip, 40)} />
				<Ends x={BD.x0} y={YT} n={BD.n} pitch={BD.pitch} left="3'" right="5'" at={0} color={PLUM} rightDy={BD.openB} />
				<MrnaRow unit={() => 1} tileDy={() => 0} glow={() => 0} letterOf={i => (i === 6 ? '.' : MRNA_OF(i))} />
				<FlipTile x={colX(6)} y={YM + BD.so} face="down" from="G" to="A" at={mFlip} glow={pulse(f, mFlip, 40)} />
				<Sx x={colX(GENE0) - 58} y={YM - 26} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={0} />
				<Sx x={colX(GENE1) + 70} y={YM + 15} text="3'" size={44} color={MRNA_INK} hand anchor="middle" at={0} />
				{[0, 1, 2].map(k => {
					const [x1, x2] = codonX(k);
					const lit = pulse(f, LIGHT12[k], 30);
					const hot = k === 1 ? prog(f, K12.codon, 12) : 0;
					return (
						<g key={k}>
							{lit + hot > 0.01 ? <rect x={x1} y={YM - 20} width={x2 - x1} height={BD.so + BD.th + 30} rx={14} fill={AMBER} opacity={0.22 * Math.max(lit, hot)} /> : null}
							<SpanBracket x1={x1} x2={x2} y={brY} up at={K12.groups + 6 + k * 8} color={hot > 0.5 ? AMBER : MRNA_INK} label={k === 0 ? 'codon' : undefined} size={40} />
						</g>
					);
				})}
				<Sx x={(codonX(1)[0] + codonX(1)[1]) / 2} y={brY - 18} text="codon" size={40} color={MRNA_INK} hand anchor="middle" at={K12.codons + 6} />
				<Sx x={(codonX(2)[0] + codonX(2)[1]) / 2} y={brY - 18} text="codon" size={40} color={MRNA_INK} hand anchor="middle" at={K12.codons + 12} />
				<GreyTag x={1420} y={300} text="meaning: next video" at={K12.means} size={28} />
				<Chip x={96} y={830} text="CFTR gene (cystic fibrosis)" at={K12.cftr} size={36} color={INK} stroke={GREYT} />
				<GreyTag x={96} y={910} text="illustration: not the real CFTR change" at={K12.cftr + 10} size={26} />
				<Ring cx={colX(6)} cy={yt - BD.so - BD.th / 2} rx={56} ry={46} at={tFlip + 4} color={AMBER} seed={6} />
				<Chip x={codonX(1)[0] + 380} y={830} text="GCU becomes ACU: one codon changed" at={K12.codon} size={34} color={AMBER_INK} stroke={AMBER} />
				<Sx x={codonX(1)[0] + 380} y={940} text="before any protein is made" size={36} color={INK_SOFT} hand at={K12.before} />
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const H13 = 'memory';
const K13 = cues(S(H13), {two: 'Two things to remember', keeps: 'transcription keeps the language', bases: 'both written in bases', notes: 'copying notes', trl: 'Translation next changes the language', amino: 'from bases to amino acids', second: 'Second the trap', matches: 'matches the coding strand', built: 'built on the template strand'});
const MiniRow: React.FC<{x: number; y: number; letters: string; color: string; o?: number; s?: number}> = ({x, y, letters, color, o = 1, s = 0.5}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<Strand x={0} y={0} letters={letters} pitch={BD.pitch} face="down" color={color} />
	</g>
);
export const SceneMemoryB6b: React.FC = () => {
	const f = useCurrentFrame();
	const m1 = prog(f, K13.bases, 20), m2 = prog(f, K13.amino, 20);
	return (
		<>
			<Heading text="Two things to remember" at={4} size={60} />
			<Overlay>
				{/* line 1: transcription keeps the language */}
				<MiniRow x={130} y={250} letters="ATG" color={PLUM} o={prog(f, K13.keeps, 12) * (1 - m1)} />
				<MiniRow x={130} y={250} letters="AUG" color={MRNA} o={m1} />
				<text x={470} y={300} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60}} fill={AMBER_INK} opacity={prog(f, K13.keeps, 12)}>
					trans<tspan fill={INK} textDecoration="underline">C</tspan>ription keeps the language
				</text>
				<Sx x={472} y={354} text="bases to bases: like copying notes in the same language" size={36} color={INK_SOFT} hand at={K13.bases} />
				{/* translation changes it (next video, greyed) */}
				<MiniRow x={130} y={430} letters="AUG" color={MRNA} o={prog(f, K13.trl, 12) * (1 - m2) * 0.8} />
				<g opacity={m2 * 0.8}>{[0, 1, 2].map(i => <Bead key={i} x={150 + i * 62} y={470} r={24} fill={['#e8b48a', '#d9c27a', '#c9a0c9'][i]} />)}</g>
				<text x={470} y={480} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={GREY_INK} opacity={prog(f, K13.trl, 12)}>
					trans<tspan fill={INK} textDecoration="underline">L</tspan>ation changes it (bases to amino acids)
				</text>
				<GreyTag x={472} y={500} text="next video" at={K13.amino} size={26} />
				<Chip x={1500} y={390} text="C before L" at={K13.amino + 20} size={40} color={INK} stroke={AMBER} />
				{/* line 2: the trap */}
				<text x={96} y={690} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58}} fill={AMBER_INK} opacity={prog(f, K13.second, 12)}>
					mRNA matches the coding strand,
				</text>
				<Sx x={96} y={770} text="built on the template" size={58} color={AMBER_INK} hand at={K13.built} />
				<g opacity={prog(f, K13.matches, 14)}>
					<MiniRow x={1180} y={600} letters="ATGGC" color={PLUM} s={0.55} />
					<Sx x={1180 + 5 * 66 + 30} y={640} text="coding" size={34} color={PLUM} hand at={-100} />
					<Sx x={1250} y={710} text="=  (T to U)" size={40} color={AMBER_INK} hand at={K13.matches + 6} />
					<MiniRow x={1180} y={740} letters="AUGGC" color={MRNA} s={0.55} />
					<Sx x={1180 + 5 * 66 + 30} y={780} text="mRNA" size={34} color={MRNA_INK} hand at={-100} />
				</g>
				<g opacity={prog(f, K13.built, 14)}>
					<g transform={`translate(1180,${880}) scale(0.55)`}><Strand x={0} y={0} letters="TACCG" pitch={BD.pitch} face="up" color={PLUM} /></g>
					{[0, 1, 2, 3, 4].map(i => <line key={i} x1={1180 + i * 66} y1={794} x2={1180 + i * 66} y2={830} stroke={AMBER} strokeWidth={4} strokeDasharray="3 4" />)}
					<Sx x={1180 + 5 * 66 + 30} y={900} text="template: pairs" size={34} color={PLUM} hand at={-100} />
				</g>
			</Overlay>
		</>
	);
};
void Bead; void Blob; void GENE1; void INK; void ptAt; void GREYT; void YT_OPEN; void Tick; void DrawPath; void Ring; void Fade;
