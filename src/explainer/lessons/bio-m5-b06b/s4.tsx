// B6b scenes 10a to 12: two harder unseen questions with feedback (which strand is the template; a mushroom toxin that
// stops RNA polymerase), the decision rule with the handoff to translation, and the key notes. Each question card stays
// complete through its 10 s countdown and after it.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, AnswerBox, BD, BigArrow, Blob, CELLPT, CellPlate, Chip, DIM, DrawPath, Ends, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading,
	INK, INK_SOFT, MRNA, MRNA_INK, MistakeChip, ModelLine, Overlay, PL_CELL, PLUM, PROMO, PlainArrow, Ribbon, RnaPol, Ring, S, Strand, Sx, Tick, asRNA,
	complementDNA, complementRNA, cw, kf, mkPath, cubic, plPt, prog, wrap,
} from './shared';
import {RIBO} from './assets';

// ---------- the question one strands ----------
export const Q1_TOP = 'TGCAATCGG'; // 3' left
export const Q1_BOT = complementDNA(Q1_TOP); // 5' left: ACGTTAGCC
export const Q1_MRNA = complementRNA(Q1_TOP); // pairs the top (template): ACGUUAGCC, 5' left
const Q1 = {x0: 600, yc: 340};
const Q1_YT = Q1.yc + 2 * BD.so + 2 * BD.th + BD.gap;
const DEM1A = '(a) Which strand is the template? Explain using the direction.';
const DEM1B = "(b) Write the mRNA, with its 5' and 3' ends.";
/** The two-strand card (both strands identical in style, nothing answer-bearing). */
const Q1Strands: React.FC<{at: number; topGlow?: number; botO?: number; botDy?: number; topRing?: number}> = ({at, topGlow = 0, botO = 1, botDy = 0, topRing}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const faceT = Q1.yc + BD.so + BD.th, faceB = Q1_YT - BD.so - BD.th;
	return (
		<g opacity={o}>
			{Q1_TOP.split('').map((l, i) => {
				const offs = l === 'A' || l === 'T' ? [-0.25, 0.25] : [-0.3, 0, 0.3];
				const bo = 1 - Math.min(1, Math.abs(botDy) / 30);
				return bo > 0.01 ? <g key={i} opacity={bo}>{offs.map((k, j) => <line key={j} x1={Q1.x0 + i * BD.pitch + k * BD.tw} x2={Q1.x0 + i * BD.pitch + k * BD.tw} y1={faceT + 4} y2={faceB - 4} stroke="#6b5a45" strokeWidth={5} strokeLinecap="round" strokeDasharray="0.1 9" />)}</g> : null;
			})}
			<Strand x={Q1.x0} y={Q1.yc} letters={Q1_TOP} pitch={BD.pitch} face="down" color={PLUM} bbGlow={topGlow} />
			<Strand x={Q1.x0} y={Q1_YT + botDy} letters={Q1_BOT} pitch={BD.pitch} face="up" color={PLUM} o={botO} />
			<Ends x={Q1.x0} y={Q1.yc} n={9} pitch={BD.pitch} left="3'" right="5'" at={at + 6} color={PLUM} />
			<Ends x={Q1.x0} y={Q1_YT + botDy} n={9} pitch={BD.pitch} left="5'" right="3'" at={at + 6} color={PLUM} o={botO} />
			{topRing !== undefined ? <Ring cx={Q1.x0 - BD.pitch * 0.62} cy={Q1.yc} rx={40} ry={36} at={topRing} color={AMBER} seed={8} /> : null}
		</g>
	);
};
const Promoter: React.FC<{at: number}> = ({at}) => (
	<Fade at={at}>
		<rect x={330} y={Q1.yc - 26} width={160} height={Q1_YT - Q1.yc + 52} rx={20} fill={PROMO} opacity={0.3} />
		<line x1={330} y1={Q1.yc} x2={490} y2={Q1.yc} stroke={PLUM} strokeWidth={9} strokeLinecap="round" opacity={0.6} />
		<line x1={330} y1={Q1_YT} x2={490} y2={Q1_YT} stroke={PLUM} strokeWidth={9} strokeLinecap="round" opacity={0.6} />
		<Sx x={410} y={(Q1.yc + Q1_YT) / 2 + 12} text="promoter" size={34} color="#5d4f73" hand anchor="middle" at={at} />
	</Fade>
);
const MovesThisWay: React.FC<{at: number; label?: boolean}> = ({at, label = true}) => (
	<g>
		<Fade at={at}><RnaPol x={410} y={258} w={170} h={120} label={false} /></Fade>
		{label ? <Sx x={410} y={200} text="RNA polymerase" size={30} color="#8a6420" hand anchor="middle" at={at} /> : null}
		<PlainArrow x1={510} y1={258} x2={720} y2={258} at={at + 8} color={INK} width={5} />
		<Sx x={740} y={270} text="moves this way" size={34} color={INK} hand at={at + 14} />
	</g>
);

// ---------- 10a. Attempt one ----------
const H14 = 'attempt';
const K14 = cues(S(H14), {two: 'Two harder questions now', section: 'a short section of a gene', ends: 'ends labelled', binds: 'binds at the promoter on the left', moves: 'moves to the right', which: 'Which strand is the template', how: 'how does the direction tell you', then: 'Then write the mRNA', endsq: "5' and 3' ends", pause: 'Pause here to answer'});
export const SceneAttemptB6b: React.FC = () => {
	const h = S(H14).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Which strand is the template?" at={4} size={56} />
			<Overlay>
				<Q1Strands at={K14.section} />
				<Promoter at={K14.binds} />
				<MovesThisWay at={K14.moves} />
				<Sx x={96} y={660} text={DEM1A} size={34} color={INK} weight={700} at={K14.which} />
				<AnswerBox x={96} y={680} w={1480} h={80} at={K14.which + 8} lines={1} />
				<Sx x={96} y={830} text={DEM1B} size={34} color={INK} weight={700} at={K14.then} />
				<AnswerBox x={96} y={850} w={1480} h={80} at={K14.then + 8} lines={1} />
				<Sx x={96} y={1020} text="Pause here to answer." size={52} color={AMBER_INK} hand at={K14.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one (take02, brief) ----------
const H15 = 'feedback-one';
const S15 = S(H15);
const K15 = cues(S15, {reads: 'reads its template', moves: 'It moves right', left: "3' end on the left", top: 'the top strand', pairing: 'Pairing it gives the mRNA', from5: "from its 5' end", ifp: 'If you paired the bottom strand', wrong: 'comes out wrong'});
/** Each mRNA tile lands on its spoken letter (one codon per spoken group). */
const DOCK15 = Array.from({length: 9}, (_, i) => cw(S15, 'gives the mRNA A C G U U A G C C', 3 + i));
export const SceneFeedbackOneB6b: React.FC = () => {
	const f = useCurrentFrame();
	const botDim = prog(f, K15.top, 16);
	const drop = prog(f, K15.pairing - 24, 20) * 140;
	const yM = Q1.yc + 2 * BD.so + 2 * BD.th + 14; // mRNA backbone under the top strand
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={'(a) Which strand is the template? Explain.   (b) Write the mRNA, with its ends.'} size={28} color={INK_SOFT} weight={600} at={0} />
				<Q1Strands at={-100} topGlow={prog(f, K15.top, 14)} botO={1 - (1 - DIM) * botDim} botDy={drop} topRing={K15.left} />
				<Promoter at={-100} />
				<MovesThisWay at={-100} label={false} />
				<BigArrow x1={1040} x2={1420} y={258} at={K15.reads} label="template read 3' to 5'" />
				<Strand x={Q1.x0} y={yM} letters={Q1_MRNA} pitch={BD.pitch} face="up" color={MRNA} unit={i => prog(f, DOCK15[i] - 10, 10)} tileDy={i => (1 - prog(f, DOCK15[i] - 10, 10)) * 90} />
				<Ends x={Q1.x0} y={yM} n={9} pitch={BD.pitch} left="5'" right="3'" at={DOCK15[8]} color={MRNA_INK} />
				<Ring cx={Q1.x0 - BD.pitch * 0.62} cy={yM} rx={36} ry={32} at={K15.from5} color={AMBER} seed={4} />
				<ModelLine x={130} y={800} text="(a) Top strand: read 3' to 5', the way the polymerase moves." at={K15.top + 6} size={32} />
				<ModelLine x={130} y={856} text={`(b) mRNA 5' ${Q1_MRNA.slice(0, 3)} ${Q1_MRNA.slice(3, 6)} ${Q1_MRNA.slice(6)} 3'`} at={DOCK15[8] + 6} size={34} color={MRNA_INK} />
				<MistakeChip x={96} y={912} text={`template = bottom strand, so mRNA 3' ${complementRNA(Q1_BOT).slice(0, 3)} ${complementRNA(Q1_BOT).slice(3, 6)} ${complementRNA(Q1_BOT).slice(6)} 5'`} at={K15.ifp} cross={K15.wrong} size={30} />
				<GreyTag x={96} y={985} text="that pairs the coding strand: the wrong message" at={K15.wrong + 10} size={28} />
			</Overlay>
		</>
	);
};

// ---------- 10c. Attempt two (a mushroom toxin) ----------
const H16 = 'attempt-two';
const K16 = cues(S(H16), {second: 'Second', toxin: 'A toxin from a mushroom', stops: 'stops RNA polymerase moving along DNA', liver: 'In an affected liver cell', dna: 'DNA is not damaged', ribo: 'ribosomes still work', explain: 'Explain why the cell makes less and less', hours: 'over the following hours', pause: 'Pause here to answer'});
/** A plain coded mushroom (no species): domed cap, gills, a stem with a ring and a cup at the base. */
export const Mushroom: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M-34,40 C-30,110 -26,160 -36,212 L36,212 C26,160 30,110 34,40 Z" fill="#f4f0e4" stroke={INK_SOFT} strokeWidth={4} />
		<path d="M-46,96 C-20,116 20,116 46,96 C34,124 -34,124 -46,96 Z" fill="#fbf8ef" stroke={INK_SOFT} strokeWidth={3.5} />
		<path d="M-52,212 C-56,186 -40,176 -30,190 L30,190 C40,176 56,186 52,212 Z" fill="#efe9da" stroke={INK_SOFT} strokeWidth={3.5} />
		<path d="M-150,40 C-150,-70 -70,-118 0,-118 C70,-118 150,-70 150,40 C100,52 -100,52 -150,40 Z" fill="#cfd3a2" stroke="#6d7240" strokeWidth={4.5} />
		<path d="M-120,-30 C-90,-80 -40,-98 0,-100" fill="none" stroke="#eef0d6" strokeWidth={9} strokeLinecap="round" opacity={0.8} />
		{[-110, -80, -50, -20, 10, 40, 70, 100].map(g => <line key={g} x1={g} y1={44} x2={g * 0.55} y2={60} stroke="#d8d2c0" strokeWidth={3} />)}
		<path d="M-150,40 C-100,62 100,62 150,40" fill="none" stroke={INK_SOFT} strokeWidth={3} />
	</g>
));
const LIVER = {x: 790, y: 410, k: 0.24};
const STIM2 = ['Toxin: stops RNA polymerase moving along DNA', 'DNA: not damaged', 'Ribosomes: still work'];
const DEM2 = 'Explain why the cell makes less and less of its proteins over the following hours.';
export const SceneAttemptTwoB6b: React.FC = () => {
	const h = S(H16).responseHold as {startFrame: number; endFrame: number};
	const stimAt = [K16.stops, K16.dna, K16.ribo];
	return (
		<>
			<Heading text="Question two: a mushroom toxin" at={4} size={56} />
			<Overlay>
				<Mushroom x={290} y={380} s={1} o={1} />
				<GreyTag x={150} y={615} text="a mushroom (makes the toxin)" at={K16.toxin + 6} size={26} />
				<CellPlate x={LIVER.x} y={LIVER.y} k={LIVER.k} />
				<Sx x={LIVER.x} y={LIVER.y + 230} text="liver cell" size={36} color={INK_SOFT} hand anchor="middle" at={K16.liver} />
				{STIM2.map((t, i) => (
					<g key={i}>
						<Fade at={stimAt[i]}><circle cx={1080} cy={290 + i * 80 - 10} r={7} fill={GREYT} /></Fade>
						<Sx x={1100} y={290 + i * 80} text={t} size={i === 0 ? 30 : 34} color={INK} weight={700} at={stimAt[i]} />
					</g>
				))}
				{wrap(DEM2, 36, 1500).map((l, i) => <Sx key={i} x={96} y={740 + i * 44} text={l} size={36} color={INK} weight={700} at={K16.explain + i * 4} />)}
				<AnswerBox x={96} y={770 + (wrap(DEM2, 36, 1500).length - 1) * 44} w={1460} h={150} at={K16.explain + 10} lines={3} />
				<Sx x={96} y={1030} text="Pause here to answer." size={52} color={AMBER_INK} hand at={K16.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two (take02, brief) ----------
const H17 = 'feedback-two';
const K17 = cues(S(H17), {stuck: 'With the polymerase stuck', nonew: 'no new mRNA is made', cant: "can't read the DNA", stays: 'stays in the nucleus', depend: 'depend on mRNA', already: 'The mRNA already made', broken: 'broken down over time', nothing: 'nothing replaces it', falls: 'protein production falls', ifw: "the cell can't copy its DNA", repl: "that's replication", trans: 'The toxin stops transcription'});
const BIG = {x: 640, y: 575, k: 0.43};
export const SceneFeedbackTwoB6b: React.FC = () => {
	const f = useCurrentFrame();
	const P = plPt(PL_CELL, BIG.x, BIG.y, BIG.k);
	const nuc = P(...CELLPT.nuc);
	const nr = CELLPT.nucR * BIG.k;
	const grow = prog(f, 0, 20);
	// four mRNA strands at ribosomes in the cytoplasm, read, then broken down one by one
	const sites: [number, number][] = [CELLPT.erRibo[0], CELLPT.freeRibo[0], CELLPT.freeRibo[3], CELLPT.freeRibo[4]];
	const fr = (k: number) => prog(f, K17.broken + k * 18, 24);
	const left = 4 - [0, 1, 2, 3].filter(k => fr(k) > 0.6).length;
	const rib = P(...CELLPT.freeRibo[1]);
	const ex = nuc[0] + nr * 0.75, ey = nuc[1] - nr * 0.55;
	const lines = [
		{t: 'The toxin stops transcription, so no new mRNA is made.', at: K17.nonew + 8},
		{t: 'Ribosomes cannot read DNA in the nucleus: they need mRNA.', at: K17.depend + 4},
		{t: 'Existing mRNA is not replaced, so protein production falls.', at: K17.falls + 4},
	];
	let ly = 330;
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text="Toxin stops RNA polymerase. DNA not damaged. Ribosomes still work. Why does protein production fall?" size={26} color={INK_SOFT} weight={600} at={0} />
				<g opacity={grow}><CellPlate x={BIG.x} y={BIG.y} k={BIG.k} /></g>
				{/* (1) the stuck polymerase: no new mRNA */}
				<RnaPol x={nuc[0] - 30} y={nuc[1] - 20} w={150} h={110} label={false} o={prog(f, K17.stuck, 12)} clamp={prog(f, K17.nonew - 4, 10)} />
				<Chip x={nuc[0] - 30} y={nuc[1] + 50} anchor="middle" text="no new mRNA" at={K17.nonew} size={32} color={GREY_INK} fill="#eceeef" stroke={GREYT} />
				{/* (2) a ribosome cannot reach the gene */}
				<Fade at={K17.cant}><DrawPath d={`M${rib[0]},${rib[1]} L${ex},${ey}`} at={K17.cant} dur={18} color={GREYT} width={5} dash="10 9" /></Fade>
				<DrawPath d={`M${ex - 14},${ey - 14} L${ex + 14},${ey + 14} M${ex + 14},${ey - 14} L${ex - 14},${ey + 14}`} at={K17.stays} dur={10} color={GREYT} width={6} />
				<GreyTag x={96} y={222} text="DNA stays in the nucleus" at={K17.stays} size={24} />
				{/* (3) the mRNA already made is read, then broken down */}
				{sites.map((r, k) => {
					const q = P(...r);
					const path = mkPath(cubic([q[0] - 60, q[1] + 20], [q[0] - 40, q[1] + 10], [q[0] - 20, q[1] + 2], [q[0], q[1]], 20));
					const o = prog(f, 10, 12) * (1 - fr(k));
					const blobs = prog(f, 30 + k * 10, 14) * (1 - fr(k) * 0.7);
					return (
						<g key={k}>
							<Ribbon path={path} head={path.len} len={56} width={5} o={o} fray={fr(k)} />
							<Ring cx={q[0]} cy={q[1]} rx={16} ry={16} at={K17.already + k * 4} out={K17.broken + k * 18 + 10} color={MRNA} seed={k + 2} width={3} />
							<Blob x={q[0] + 22} y={q[1] - 20} r={9} s={blobs} o={blobs} seed={k} />
						</g>
					);
				})}
				<Fade at={K17.already}>
					<text x={96} y={870} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}} fill={MRNA_INK}>{`mRNA in the cytoplasm: ${left}`}</text>
				</Fade>
				<GreyTag x={96} y={890} text="over hours (not a measured rate)" at={K17.broken + 20} size={24} />
				{/* model lines */}
				{lines.map((l, i) => {
					const ws = wrap(l.t, 28, 700);
					const y0 = ly;
					ly += ws.length * 36 + 18;
					return <g key={i}>{ws.map((w, j) => (j === 0 ? <ModelLine key={j} x={1130} y={y0} text={w} at={l.at} size={28} /> : <Sx key={j} x={1130} y={y0 + j * 36} text={w} size={28} color={INK} weight={600} at={l.at} />))}</g>;
				})}
				{/* the stem conditions still hold */}
				<Sx x={1130} y={770} text="DNA: not damaged" size={30} color={INK} weight={700} at={K17.falls - 6} />
				<Tick x={1130 + 330} y={760} at={K17.falls + 10} s={28} />
				<Sx x={1130} y={815} text="Ribosomes: still work" size={30} color={INK} weight={700} at={K17.falls - 6} />
				<Tick x={1130 + 420} y={805} at={K17.falls + 18} s={28} />
				{/* the classic mistake */}
				<MistakeChip x={96} y={942} text="the cell can't copy its DNA, so it can't make proteins" at={K17.ifw} cross={K17.repl} size={28} />
				<GreyTag x={1080} y={948} text="the toxin stops transcription" at={K17.trans} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const H18 = 'decision-rule';
const K18 = cues(S(H18), {ask: 'ask first', which: 'template or the coding strand', pair: 'Pair the template', copy: 'Copy the coding strand', ends: 'check the ends', runs: "mRNA runs 5' to 3'", next: 'Next the mRNA reaches a ribosome', how: 'How does a ribosome turn'});
const Mini: React.FC<{x: number; y: number; letters: string; color: string; face?: 'down' | 'up'; s?: number; glow?: number}> = ({x, y, letters, color, face = 'down', s = 0.42, glow = 0}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}><Strand x={0} y={0} letters={letters} pitch={BD.pitch} face={face} color={color} bbGlow={glow} /></g>
);
export const SceneDecisionB6b: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Given a DNA strand? Ask first" at={4} size={56} />
			<Overlay>
				{/* 1 */}
				<Mini x={130} y={250} letters="ATGC" color={PLUM} />
				<Mini x={130} y={350} letters="TACG" color={PLUM} face="up" glow={pulse(f, K18.which, 40) + prog(f, K18.which + 30, 10) * 0.6} />
				<Chip x={420} y={262} text="template or coding?" at={K18.ask} size={46} color={INK} stroke={AMBER} />
				{/* 2 */}
				<Mini x={130} y={470} letters="TAC" color={PLUM} face="up" />
				<Chip x={420} y={442} text="template: pair it (A to U)" at={K18.pair} size={44} color={AMBER_INK} stroke={AMBER} />
				<Chip x={1060} y={442} text="coding: copy it (T to U)" at={K18.copy} size={44} color={AMBER_INK} stroke={AMBER} />
				{/* 3 */}
				<Mini x={130} y={610} letters="AUG" color={MRNA} />
				<Chip x={420} y={612} text="mRNA: 5' to 3'" at={K18.ends} size={46} color={MRNA_INK} stroke={MRNA} />
				<BigArrow x1={820} x2={1060} y={643} at={K18.runs} label="" color={MRNA_INK} />
				{/* next */}
				<Fade at={K18.next}>
					<rect x={1000} y={850} width={824} height={150} rx={26} fill="#fffdf8" stroke={MRNA} strokeWidth={3.5} />
					<image href={staticFile(RIBO)} x={1020} y={835} width={180} height={180} />
				</Fade>
				<Sx x={1210} y={912} text="Next: from mRNA to a" size={40} color={MRNA_INK} hand at={K18.next} />
				<Sx x={1210} y={962} text="chain of amino acids" size={40} color={MRNA_INK} hand at={K18.next + 6} />
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'A gene is a section of DNA that codes for a product, usually a polypeptide. Transcription copies one gene into mRNA.',
	'RNA polymerase binds the promoter, separates the DNA strands and builds mRNA by pairing with the template strand: A with U, T with A, C with G, G with C.',
	"The template is read 3' to 5'; the mRNA is built 5' to 3'. The mRNA has the same sequence as the coding strand, with U in place of T.",
	'DNA stays in the nucleus. mRNA leaves through nuclear pores to the ribosomes. Many temporary mRNA copies let one gene make a lot of protein.',
	'Replication: both strands, all the DNA, makes DNA. Transcription: one strand, one gene, makes RNA.',
];
export const SceneNotesB6b: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 22}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 920}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: MRNA_INK}}>Memory: transcription keeps the language; translation changes it (C before L).</div>
		</Enter>
	</>
);
void asRNA; void kf; void Blob; void MRNA; void AMBER;
