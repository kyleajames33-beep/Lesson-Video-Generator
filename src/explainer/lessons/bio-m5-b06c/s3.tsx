// B6c scenes 7a to 9 on the translation board: start (small subunit with the methionine tRNA slides to AUG, the large
// subunit closes), elongation (tRNA arrives, peptide bond by rRNA, the ribosome moves one codon while the mRNA stays
// still, the empty tRNA leaves), stop and release, a polypeptide is not yet a protein, and why both RNAs matter.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, Blob, Chip, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK, Overlay, PLUM,
	PlainArrow, SpanBracket, Strand, Sx, Tick, cw, kf, prog,
} from '../bio-m5-b06b/shared';
import {
	AABead, CODON_W, MX, MrnaC, MrnaEnds, PB, PepLink, ProteinBlob, Ribosome, S, Slots, TRNA_INK, TRna, WORKED, YG, anchorY, anticodonOf, beadPos, codonC,
	codonToAA, ribX, translate,
} from './shared';

const YA = anchorY();
const ANTI = [0, 1, 2, 3].map(k => anticodonOf(WORKED.slice(3 * k, 3 * k + 3)));
const AAS = [0, 1, 2, 3].map(k => codonToAA(WORKED.slice(3 * k, 3 * k + 3)));
const bead = (k: number) => beadPos(codonC(k), YA);
/** Chain beads hanging from a holder bead: earlier amino acids step up and to the left. */
const chainPts = (h: [number, number], n: number) => Array.from({length: n}, (_, j) => [h[0] - 66 * j, h[1] - 26 * j] as [number, number]);
const Chain: React.FC<{h: [number, number]; aas: string[]; flash?: number; o?: number; ring?: number[]}> = ({h, aas, flash = 0, o = 1, ring = []}) => {
	if (o <= 0.01) return null;
	const pts = chainPts(h, aas.length);
	return (
		<g opacity={o}>
			{pts.slice(1).map((p, j) => <PepLink key={j} a={pts[j]} b={p} flash={j === 0 ? flash : 0} />)}
			{pts.map((p, j) => <AABead key={j} x={p[0]} y={p[1]} aa={aas[j]} ring={ring[j] ?? 0} />)}
		</g>
	);
};
const Tally: React.FC<{text: string; at: number; out?: number}> = ({text, at, out}) => <Chip x={1824} y={960} anchor="end" text={text} at={at} out={out} size={38} color={INK} stroke={AMBER} hand={false} weight={700} />;
const GIVENS = "mRNA 5' AUG GAA GCU UAA 3'";

// ---------- 7a. Start ----------
const H7 = 'start';
const S7 = S(H7);
const K7 = cues(S7, {whole: 'translate a whole message', small: 'The small subunit', holding: 'already holding a tRNA', grips: "grips the mRNA near its 5' end", slides: 'slides along to the first A U G', start: 'the start codon', anti: "the tRNA's anticodon", uac: "U A C read from its 3' end", pairs: 'pairs with it', large: 'large subunit closes on top', ready: 'ribosome is ready'});
export const SceneStart: React.FC = () => {
	const f = useCurrentFrame();
	const enter = prog(f, K7.small - 4, 24);
	const sx = kf(f, [[K7.small - 4, -520], [K7.grips, -150], [K7.slides, -150], [K7.slides + 40, 0]]);
	const rx = ribX(0) + sx;
	const dockT = cw(S7, "U A C read from its 3' end", 0);
	const drop = prog(f, dockT - 4, 18);
	const close = prog(f, K7.large, 22);
	const uacW = (k: number) => cw(S7, "U A C read from its 3' end", k);
	return (
		<>
			<Heading text={GIVENS} at={Math.max(4, K7.whole)} size={56} color={MRNA_INK} />
			<Overlay>
				<Ribosome id="b6c-s7" x={rx} y={YG} smallO={enter} largeO={close} largeDy={-(1 - close) * 140} />
				<MrnaC glow={i => (i < 3 ? pulse(f, K7.start, 34) + prog(f, K7.start + 20, 10) * 0.5 : 0)} />
				<MrnaEnds />
				<Slots rx={rx} o={close} />
				<g transform={`translate(${rx - ribX(0)},${-50 * (1 - drop)})`}>
					<TRna x={codonC(0)} ya={YA} anti={ANTI[0]} aa="Met" o={prog(f, K7.holding - 6, 12)} tileGlow={i => pulse(f, uacW(i), 22)} />
				</g>
				<Sx x={rx} y={YG + 330} text="small subunit" size={36} color="#7b4a5e" hand anchor="middle" at={K7.small} out={K7.large} />
				<Sx x={codonC(0) + 160} y={250} text="methionine tRNA" size={34} color={TRNA_INK} hand at={K7.holding} out={K7.large} />
				<Chip x={400} y={YG + 40} text="start codon" at={K7.start} size={36} color={AMBER_INK} stroke={AMBER} anchor="end" />
				<Sx x={ribX(0) + 380} y={250} text="large subunit" size={36} color="#7a5a30" hand at={K7.large + 10} />
				<Tally text="1 Met" at={K7.ready} />
			</Overlay>
		</>
	);
};

// ---------- 7b. Elongate ----------
const H8 = 'elongate';
const K8 = cues(S(H8), {next: 'The next codon G A A', sits: 'sits in the second slot', trna: 'The tRNA whose anticodon', glu: 'carrying glutamate', side: 'side by side', bond: 'joins them with a peptide bond', moves: 'moves one codon', toward: "towards the 3' end", empty: 'The first tRNA now empty', leaves: 'leaves to be reloaded', gcu: 'the next codon G C U', ala: 'carrying alanine'});
export const SceneElongate: React.FC = () => {
	const f = useCurrentFrame();
	const gluIn = prog(f, K8.trna, 26);
	const bondP = prog(f, K8.bond + 6, 20);
	const move = prog(f, K8.moves, 26);
	const leave = prog(f, K8.leaves - 6, 30);
	const alaIn = prog(f, K8.ala - 24, 24);
	const rx = ribX(0) + move * CODON_W;
	// the Met bead moves from its own tRNA onto the chain beside Glu
	const m0 = bead(0), m1 = chainPts(bead(1), 2)[1];
	const metPos: [number, number] = [m0[0] + (m1[0] - m0[0]) * bondP, m0[1] + (m1[1] - m0[1]) * bondP];
	return (
		<>
			<Heading text={GIVENS} at={-100} size={56} color={MRNA_INK} />
			<Overlay>
				<Ribosome id="b6c-s8" x={rx} y={YG} />
				<MrnaC glow={i => (i >= 3 && i < 6 ? pulse(f, K8.next, 34) : i >= 6 && i < 9 ? pulse(f, K8.gcu, 34) : 0)} />
				<MrnaEnds />
				<Slots rx={rx} hot={[0, pulse(f, K8.sits, 40)]} />
				{/* the first tRNA (empty after the bond) leaves up and to the left */}
				<g transform={`translate(${-260 * leave},${-320 * leave})`} opacity={1 - leave}>
					<TRna x={codonC(0)} ya={YA} anti={ANTI[0]} aa={null} />
				</g>
				<TRna x={codonC(1)} ya={YA - 320 * (1 - gluIn)} anti={ANTI[1]} aa="Glu" o={prog(f, K8.trna, 8)} beadO={1} />
				<TRna x={codonC(2)} ya={YA - 320 * (1 - alaIn)} anti={ANTI[2]} aa="Ala" o={prog(f, K8.ala - 24, 8)} />
				{bondP > 0.01 ? <PepLink a={bead(1)} b={metPos} flash={pulse(f, K8.bond + 22, 40)} o={prog(f, K8.bond + 18, 6)} /> : null}
				<AABead x={metPos[0]} y={metPos[1]} aa="Met" />
				<Chip x={1340} y={330} text="peptide bond, made by rRNA" at={K8.bond + 18} size={34} color={AMBER_INK} stroke={AMBER} />
				<PlainArrow x1={1330} y1={360} x2={rx + 120} y2={350} at={K8.bond + 24} color={AMBER_INK} width={4} out={K8.moves} />
				<Sx x={1340} y={470} text="the ribosome moves; the mRNA stays still" size={32} color={MRNA_INK} hand at={K8.moves + 10} />
				{/* the reload inset */}
				<Fade at={K8.leaves + 10}>
					<rect x={96} y={700} width={330} height={250} rx={20} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
					<Sx x={116} y={740} text="reloaded by an enzyme" size={28} color={GREY_INK} hand at={K8.leaves + 10} />
				</Fade>
				<g opacity={prog(f, K8.leaves + 10, 12)}>
					<TRna x={230} ya={935} s={0.55} anti={ANTI[0]} aa="Met" ends={false} beadO={prog(f, K8.leaves + 40, 12)} />
					<ProteinBlob x={350} y={790} r={28} o={prog(f, K8.leaves + 20, 10)} />
				</g>
				<Tally text="Met, Glu" at={K8.bond + 30} />
			</Overlay>
		</>
	);
};

// ---------- 7c. Repeat, then stop ----------
const H9 = 'stop';
const K9 = cues(S(H9), {each: 'Each round repeats', arrives: 'a matching tRNA arrives', bond: 'a peptide bond forms', moves: 'the ribosome moves on', uaa: 'reaches U A A', stopc: 'a stop codon', no: 'No tRNA pairs', release: 'release protein', letgo: 'the chain is let go', apart: 'two subunits come apart', result: 'The result is', poly: 'called a polypeptide'});
const CYC = {x: 1690, y: 400, r: 88};
export const SceneStop: React.FC = () => {
	const f = useCurrentFrame();
	const bondP = prog(f, K9.bond + 4, 20);
	const move = prog(f, K9.moves, 24);
	const gluLeave = prog(f, K9.moves + 16, 28);
	const rx = ribX(1) + move * CODON_W;
	const tryT = f - (K9.no - 10);
	const tryO = tryT < 0 || tryT > 46 ? 0 : Math.min(1, tryT / 6) * (1 - Math.max(0, (tryT - 28) / 18));
	const tryDy = tryT < 14 ? -200 + (tryT / 14) * 150 : -50 - (tryT - 14) * 7;
	const rel = prog(f, K9.release, 18);
	const letGo = prog(f, K9.letgo, 30);
	const apart = prog(f, K9.apart, 34);
	const longS = prog(f, K9.poly + 8, 30);
	// chain: Met, Glu on the Glu tRNA; after the bond it moves onto Ala
	const h1 = bead(1), h2 = bead(2);
	const before = chainPts(h1, 2), after = chainPts(h2, 3);
	const pts = [0, 1].map(j => [before[j][0] + (after[j + 1][0] - before[j][0]) * bondP, before[j][1] + (after[j + 1][1] - before[j][1]) * bondP] as [number, number]);
	const drift = (p: [number, number]): [number, number] => [p[0] + letGo * 120, p[1] - letGo * 60];
	const ptr = f < K9.arrives ? -1 : f < K9.bond ? 0 : f < K9.moves ? 1 : f < K9.uaa ? 2 : -1;
	const steps = ['tRNA arrives', 'peptide bond', 'move one codon'];
	return (
		<>
			<Heading text={GIVENS} at={-100} size={56} color={MRNA_INK} />
			<Overlay>
				<Ribosome id="b6c-s9" x={rx} y={YG} largeDy={-apart * 260} smallDy={apart * 200} largeO={1 - apart} smallO={1 - apart} />
				<MrnaC glow={i => (i >= 9 ? prog(f, K9.uaa, 10) * 0.0 : 0)} tone={i => (i >= 9 && f >= K9.uaa ? 'grey' : undefined)} />
				<MrnaEnds />
				<Slots rx={rx} o={1 - apart} hot={[0, pulse(f, K9.uaa, 40)]} />
				<g transform={`translate(${-260 * gluLeave},${-320 * gluLeave})`} opacity={1 - gluLeave}>
					<TRna x={codonC(1)} ya={YA} anti={ANTI[1]} aa={null} />
				</g>
				<g transform={`translate(0,${-340 * apart})`} opacity={1 - apart}>
					<TRna x={codonC(2)} ya={YA} anti={ANTI[2]} aa={null} hi={pulse(f, K9.arrives, 30)} />
				</g>
				{/* the chain */}
				<g opacity={1 - longS}>
					{bondP > 0.01 ? <PepLink a={drift(h2)} b={drift(pts[0])} flash={pulse(f, K9.bond + 18, 36)} o={prog(f, K9.bond + 14, 6)} /> : null}
					<PepLink a={drift(pts[0])} b={drift(pts[1])} />
					<AABead x={drift(pts[1])[0]} y={drift(pts[1])[1]} aa="Met" />
					<AABead x={drift(pts[0])[0]} y={drift(pts[0])[1]} aa="Glu" />
					<AABead x={drift(h2)[0]} y={drift(h2)[1]} aa="Ala" />
				</g>
				{/* no tRNA matches a stop codon */}
				<TRna x={codonC(3)} ya={YA + tryDy} anti="CCA" aa="Gly" o={tryO} tileTone={() => 'grey'} />
				<GreyTag x={codonC(3) + 140} y={YG - 230} text="no tRNA matches" at={K9.no} out={K9.release + 10} size={28} />
				<ProteinBlob x={codonC(3)} y={YA + 10 - (1 - rel) * 200} r={52} o={rel * (1 - apart)} label="release protein" />
				{/* the cycle ring */}
				<Fade at={K9.each} out={K9.uaa + 20}>
					<circle cx={CYC.x} cy={CYC.y} r={CYC.r} fill="none" stroke="rgba(60,45,20,0.25)" strokeWidth={4} strokeDasharray="10 8" />
					{steps.map((s, i) => {
						const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
						const px = CYC.x + Math.cos(a) * CYC.r, py = CYC.y + Math.sin(a) * CYC.r;
						const on = ptr === i;
						return (
							<g key={s}>
								<circle cx={px} cy={py} r={on ? 16 : 11} fill={on ? AMBER : '#fffdf8'} stroke={AMBER_INK} strokeWidth={3} />
								<text x={px + (i === 0 ? 0 : i === 1 ? 10 : -10)} y={py + (i === 0 ? -26 : 46)} textAnchor={i === 0 ? 'middle' : i === 1 ? 'middle' : 'middle'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={on ? AMBER_INK : INK}>{s}</text>
							</g>
						);
					})}
				</Fade>
				<SpanBracket x1={codonC(3) - 1.5 * PB + 6} x2={codonC(3) + 1.5 * PB - 6} y={YG + 40} at={K9.apart + 20} label="stop: adds nothing" color={GREY_INK} size={34} />
				<Tally text={`${translate(WORKED).join(', ')}: 4 codons, 3 amino acids`} at={K9.result} />
				{/* real polypeptides are much longer */}
				{longS > 0.01 ? (
					<g opacity={longS}>
						{Array.from({length: 26}, (_, j) => <AABead key={j} x={300 + j * 64 * longS} y={300 + Math.sin(j * 0.7) * 16} aa={['Met', 'Glu', 'Ala', 'Lys', 'Gly', 'Pro', 'Thr', 'Val', 'Asp', 'Phe'][j % 10]} r={26} />)}
					</g>
				) : null}
				<GreyTag x={300} y={360} text="real polypeptides: usually hundreds of amino acids" at={K9.poly + 20} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 8. A polypeptide is not yet a protein ----------
const H10 = 'polypeptide-to-protein';
const K10 = cues(S(H10), {order: 'The order of codons', set: 'set the order of amino acids', gene: 'came from the gene', isnt: "isn't a working protein yet", fold: 'fold into a particular shape', more: 'more than one chain', next: 'the next video'});
export const ScenePolyProtein: React.FC = () => {
	const f = useCurrentFrame();
	const back = prog(f, K10.gene, 40);
	const fold = prog(f, K10.fold, 40);
	const join = prog(f, K10.more, 26);
	const n = 14;
	const beads = Array.from({length: n}, (_, j) => {
		const lx = 200 + j * 62, ly = 700;
		const a = j * 0.9, rr = 22 + j * 5.5;
		const cx = 560 + Math.cos(a) * rr, cy = 720 + Math.sin(a) * rr * 0.8;
		return [lx + (cx - lx) * fold, ly + (cy - ly) * fold] as [number, number];
	});
	const dot = kf(f, [[K10.gene, 1570], [K10.gene + 40, 300]]);
	return (
		<>
			<Heading text="A polypeptide is not yet a protein" at={4} size={56} />
			<Overlay>
				{/* the three stations */}
				<Sx x={330} y={250} text="gene (DNA)" size={40} color={PLUM} hand anchor="middle" at={K10.order - 20} />
				<g opacity={prog(f, K10.order - 20, 12)} transform="translate(160,300) scale(0.42)">
					<Strand x={0} y={0} letters="TACCTT" pitch={120} face="down" color={PLUM} />
					<Strand x={0} y={204} letters="ATGGAA" pitch={120} face="up" color={PLUM} />
				</g>
				<PlainArrow x1={560} y1={345} x2={720} y2={345} at={K10.order - 10} color={INK_SOFT} width={4} />
				<Sx x={640} y={320} text="transcription" size={30} color={INK_SOFT} hand anchor="middle" at={K10.order - 10} />
				<Sx x={960} y={250} text="mRNA codons" size={40} color={MRNA_INK} hand anchor="middle" at={K10.order} />
				<g opacity={prog(f, K10.order, 12)} transform="translate(770,385) scale(0.62)"><MrnaC x={0} y={0} letters="AUGGAA" /></g>
				<PlainArrow x1={1200} y1={345} x2={1360} y2={345} at={K10.set - 6} color={INK_SOFT} width={4} />
				<Sx x={1280} y={320} text="translation" size={30} color={INK_SOFT} hand anchor="middle" at={K10.set - 6} />
				<Sx x={1570} y={250} text="amino acid order" size={40} color={INK} hand anchor="middle" at={K10.set} />
				{['Met', 'Glu'].map((aa, j) => <AABead key={aa} x={1520 + j * 100} y={345} aa={aa} r={34} o={prog(f, K10.set + j * 6, 10)} />)}
				<Fade at={K10.set + 10}><line x1={1554} y1={345} x2={1586} y2={345} stroke={INK} strokeWidth={6} /></Fade>
				{back > 0.01 && back < 0.999 ? <circle cx={dot} cy={410} r={14} fill={AMBER} /> : null}
				<Fade at={K10.gene}><DrawPath d="M1570,410 L300,410" at={K10.gene} dur={40} color={AMBER} width={4} dash="6 10" /></Fade>
				<Sx x={960} y={470} text="the order came from the gene" size={36} color={AMBER_INK} hand anchor="middle" at={K10.gene + 30} />
				{/* the chain folds */}
				<Sx x={200} y={620} text="a polypeptide" size={38} color={INK} hand at={K10.isnt - 10} />
				{beads.slice(1).map((p, j) => <line key={j} x1={beads[j][0]} y1={beads[j][1]} x2={p[0]} y2={p[1]} stroke={INK} strokeWidth={5} opacity={prog(f, K10.isnt - 10, 10)} />)}
				{beads.map((p, j) => <AABead key={j} x={p[0]} y={p[1]} aa={['Met', 'Glu', 'Ala', 'Lys', 'Gly', 'Pro', 'Thr'][j % 7]} r={24} o={prog(f, K10.isnt - 10 + j, 8)} />)}
				<Sx x={820} y={760} text="folds into a shape" size={40} color={AMBER_INK} hand at={K10.fold + 30} />
				<g transform={`translate(${(1 - join) * 300},0)`} opacity={join}>
					<Blob x={760} y={880} r={70} fill="#c9a0c9" seed={4} />
				</g>
				<Fade at={K10.fold + 34}><Blob x={560} y={720} r={140} fill={AMBER} seed={2} s={1} o={0.25} /></Fade>
				<Sx x={880} y={900} text="some proteins: more than one chain" size={36} color={INK} hand at={K10.more + 20} />
				<GreyTag x={1300} y={980} text="shape and job: next video" at={K10.next} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 9. Why both RNAs matter ----------
const H11 = 'both-rnas';
const K11 = cues(S(H11), {how: 'how important are the two RNAs', mrna: 'mRNA carries', order: 'set the order', trna: 'tRNA is the molecule that links', readable: 'makes the code readable', each: 'Each is essential', without: 'Without mRNA', nomsg: 'no message', withoutT: 'Without the right tRNAs', cant: "codons can't become amino acids"});
export const SceneBothRnas: React.FC = () => {
	const f = useCurrentFrame();
	const rx = ribX(1);
	const mO = 1 - 0.85 * prog(f, K11.without, 12) * (1 - prog(f, K11.withoutT - 14, 12));
	const tO = 1 - 0.9 * prog(f, K11.withoutT, 12) * (1 - prog(f, K11.cant + 16, 12));
	const case1 = prog(f, K11.cant, 12);
	return (
		<>
			<Heading text="Why both RNAs matter" at={4} size={56} />
			<Overlay>
				<Ribosome id="b6c-s11" x={rx} y={YG} />
				<MrnaC o={mO} bbGlow={pulse(f, K11.mrna, 40) + prog(f, K11.order, 10) * (1 - prog(f, K11.trna, 10)) * 0.6} />
				<MrnaEnds o={mO} />
				<Slots rx={rx} labels={false} />
				<g opacity={tO * mO}>
					<TRna x={codonC(1)} ya={YA} anti={ANTI[1]} aa={null} hi={pulse(f, K11.trna, 40) + prog(f, K11.readable, 10) * (1 - prog(f, K11.each, 10)) * 0.6} />
					<TRna x={codonC(2)} ya={YA} anti={ANTI[2]} aa="Ala" hi={pulse(f, K11.trna, 40)} />
					<Chain h={bead(1)} aas={['Glu', 'Met']} />
				</g>
				<Chip x={96} y={700} text="mRNA: carries the sequence, sets the order" at={K11.mrna} size={28} color={MRNA_INK} stroke={MRNA} />
				<Chip x={1824} y={240} anchor="end" text="tRNA: links each codon to its amino acid" at={K11.trna} size={32} color={TRNA_INK} stroke={TRNA_INK} />
				<GreyTag x={96} y={790} text="no message: the ribosome sits idle" at={K11.without + 6} out={K11.withoutT - 14} size={28} />
				<GreyTag x={96} y={790} text="codon unread" at={K11.withoutT + 6} out={K11.cant + 16} size={28} />
				<Chip x={960} y={940} anchor="middle" text="both are essential: one carries the order, one reads it" at={K11.each} size={38} color={INK} stroke={AMBER} />
				{/* two computed fault cases (unspoken) */}
				<g opacity={case1}>
					<rect x={1390} y={330} width={440} height={430} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<text x={1410} y={375} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK}>{`codon GAA changed to GUA:`}</text>
					<text x={1410} y={412} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK}>{`${codonToAA('GAA')} becomes ${codonToAA('GUA')}`}</text>
					<AABead x={1460} y={470} aa="Met" r={26} /><line x1={1486} y1={470} x2={1514} y2={470} stroke={INK} strokeWidth={5} /><AABead x={1540} y={470} aa={codonToAA('GUA')} r={26} ring={1} />
					<text x={1410} y={570} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK}>a Glu tRNA wrongly</text>
					<text x={1410} y={607} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={INK}>loaded with Ala:</text>
					<AABead x={1460} y={670} aa="Met" r={26} /><line x1={1486} y1={670} x2={1514} y2={670} stroke={INK} strokeWidth={5} /><AABead x={1540} y={670} aa="Ala" r={26} ring={1} />
					<text x={1590} y={680} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={AMBER_INK}>wrong bead</text>
				</g>
			</Overlay>
		</>
	);
};
void AAS; void FONT_DISPLAY; void GREYT; void INK_SOFT; void MX; void Tick; void TRNA_INK;
