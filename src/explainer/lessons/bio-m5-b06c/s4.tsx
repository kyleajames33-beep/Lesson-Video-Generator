// B6c scenes 10 to 13: the memory aids, two harder unseen questions with feedback (from a DNA template to a chain;
// streptomycin), the decision rule with the handoff, and the key notes. Each question card stays complete through its
// 10 s countdown and after it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, HandText} from '../../kit';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, AnswerBox, Blob, Chip, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT, MRNA, MRNA_INK,
	MistakeChip, ModelLine, Overlay, PLUM, PL_CELL, Pl, PL, Strand, Sx, Tick, cw, kf, prog, wrap, complementRNA,
} from '../bio-m5-b06b/shared';
import {EndoSequence} from '../bio-m5-b06a/s3';
import {
	AABead, CODON_W, MX, MrnaC, PB, PepLink, Ribosome, S, Slots, SOC, THC, TRNA_INK, TRna, TWC, YG, anchorY, anticodonOf, beadPos, codonC, codonToAA, reverse,
	ribX, translate,
} from './shared';
import {CodonPiece, DOCK_DY} from './s2';

// ---------- 10. Memory ----------
const H12 = 'memory';
const K12 = cues(S(H12), {two: 'Two aids', stops: 'The stop codons are', away: 'U Are Away', gone: 'U Are Gone', go: 'U Go Away', lang: 'remember the languages', kept: 'Transcription kept the language', changes: 'Translation changes it', translator: 'tRNA is the translator'});
const StopLine: React.FC<{y: number; codon: string; words: string[]; at: number}> = ({y, codon, words, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return (
		<g opacity={o}>
			<rect x={150} y={y - 52} width={170} height={70} rx={16} fill="#eceeef" stroke={GREYT} strokeWidth={3} />
			<text x={235} y={y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44}} fill={GREY_INK}>{codon}</text>
			<text x={370} y={y} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66}} fill={INK}>
				{words.map((w, i) => (
					<tspan key={i}><tspan fill={AMBER_INK} textDecoration="underline">{w[0]}</tspan>{w.slice(1)}{i < words.length - 1 ? ' ' : ''}</tspan>
				))}
			</text>
		</g>
	);
};
export const SceneMemoryB6c: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Two aids" at={4} size={60} />
			<Overlay>
				<Sx x={150} y={240} text="the stop codons" size={40} color={INK_SOFT} hand at={K12.stops} />
				<StopLine y={340} codon="UAA" words={['U', 'Are', 'Away']} at={K12.away} />
				<StopLine y={450} codon="UAG" words={['U', 'Are', 'Gone']} at={K12.gone} />
				<StopLine y={560} codon="UGA" words={['U', 'Go', 'Away']} at={K12.go} />
				<Sx x={150} y={720} text="transcription keeps the language (bases to bases)" size={40} color={GREY_INK} hand at={K12.kept} />
				<Sx x={150} y={810} text="translation changes it: bases to amino acids" size={58} color={AMBER_INK} hand at={K12.changes} />
				<g opacity={prog(f, K12.translator - 6, 12)}>
					<TRna x={1560} ya={800} s={0.75} anti="CUU" aa="Glu" />
				</g>
				<Sx x={1560} y={930} text="the translator" size={44} color={TRNA_INK} hand anchor="middle" at={K12.translator} />
			</Overlay>
		</>
	);
};

// ---------- 11a. Attempt one ----------
export const Q1_T = 'TACTTCGGAACT'; // DNA template, 3' on the left
export const Q1_M = complementRNA(Q1_T); // AUGAAGCCUUGA, 5' on the left
const EXCERPT = ['AAG', 'ACU', 'AUG', 'CCU', 'GGA', 'UAC', 'UGA', 'UUC'];
const exLabel = (c: string) => (c === 'AUG' ? 'Met (start)' : codonToAA(c));
const EX = {x: 1270, y: 200, w: 550, rh: 44};
const Excerpt: React.FC<{at: number; lit?: Record<string, number>; grey?: Record<string, number>}> = ({at, lit = {}, grey = {}}) => (
	<Fade at={at}>
		<rect x={EX.x} y={EX.y} width={EX.w} height={70 + EXCERPT.length * EX.rh} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<text x={EX.x + 26} y={EX.y + 46} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>Codon chart (part)</text>
		{EXCERPT.map((c, i) => {
			const y = EX.y + 100 + i * EX.rh;
			const l = lit[c] ?? 0, g = grey[c] ?? 0;
			return (
				<g key={c}>
					{l > 0.01 ? <rect x={EX.x + 14} y={y - 30} width={EX.w - 28} height={40} rx={8} fill={AMBER} opacity={0.4 * l} /> : null}
					{g > 0.01 ? <rect x={EX.x + 14} y={y - 30} width={EX.w - 28} height={40} rx={8} fill="#c9cdd1" opacity={0.7 * g} /> : null}
					<text x={EX.x + 30} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30}} fill={INK}>{c}</text>
					<text x={EX.x + 140} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}} fill={c === 'UGA' ? GREY_INK : INK}>{exLabel(c)}</text>
				</g>
			);
		})}
	</Fade>
);
const T1 = {x0: 200, y: 330};
const TemplateRow: React.FC<{at: number; y?: number}> = ({at, y = T1.y}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	return (
		<g opacity={o}>
			<Strand x={T1.x0} y={y} letters={Q1_T} pitch={PB} face="down" color={PLUM} tw={TWC} th={THC} so={SOC} thick={7} />
			<text x={T1.x0 - 48} y={y + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={PLUM}>3'</text>
			<text x={T1.x0 + 11 * PB + 48} y={y + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={PLUM}>5'</text>
		</g>
	);
};
const H13 = 'attempt';
const K13 = cues(S(H13), {two: 'Two harder questions now', template: 'DNA template strand', part: 'part of the codon chart', write: 'Write the sequence of amino acids', how: 'explain how many', then: 'Then write the anticodon', second: 'the second amino acid', ends: "5' and 3' ends", pause: 'Pause here to answer'});
const DEM1A = '(a) Write the amino acid sequence of the polypeptide. Explain how many amino acids it has.';
const DEM1B = "(b) Write the anticodon of the tRNA that brings the second amino acid, with its 5' and 3' ends.";
export const SceneAttemptB6c: React.FC = () => {
	const h = S(H13).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="From a gene to a chain" at={4} size={56} />
			<Overlay>
				<Sx x={T1.x0 - 60} y={270} text="DNA template strand" size={40} color={PLUM} hand at={K13.template} />
				<TemplateRow at={K13.template} />
				<Excerpt at={K13.part} />
				<Sx x={96} y={720} text={DEM1A} size={30} color={INK} weight={700} at={K13.write} />
				<AnswerBox x={96} y={740} w={1480} h={80} at={K13.write + 8} lines={1} />
				<Sx x={96} y={872} text={DEM1B} size={30} color={INK} weight={700} at={K13.then} />
				<AnswerBox x={96} y={892} w={1480} h={70} at={K13.then + 8} lines={1} />
				<Sx x={96} y={1040} text="Pause here to answer." size={50} color={AMBER_INK} hand at={K13.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const H14 = 'feedback-one';
const S14 = S(H14);
const K14 = cues(S14, {chart: 'The chart reads mRNA', transcribe: 'so transcribe first', met: 'methionine', lys: 'lysine', pro: 'proline', stop: 'a stop codon', adds: 'adds nothing', three: 'three amino acids', second: 'The second codon', uuc: 'the anticodon U U C', end3: "read from its 3' end", straight: 'straight into the chart', wrong: 'which is wrong'});
/** Each mRNA tile lands on its spoken letter (one codon per spoken group). */
const DOCK14 = Array.from({length: 12}, (_, i) => cw(S14, 'transcribe first A U G A A G C C U U G A', 2 + i));
const LOOK14 = [K14.met, K14.lys, K14.pro, K14.stop];
export const SceneFeedbackOneB6c: React.FC = () => {
	const f = useCurrentFrame();
	const yT = 260;
	const yM = yT + SOC + THC + 10 + THC + SOC;
	const cc = (k: number) => T1.x0 + (3 * k + 1) * PB;
	const lit: Record<string, number> = {};
	['AUG', 'AAG', 'CCU', 'UGA'].forEach((c, k) => { lit[c] = pulse(f, LOOK14[k] + 4, 40); });
	const wrongRows = ['UAC', 'UUC', 'GGA', 'ACU'];
	const grey: Record<string, number> = {};
	wrongRows.forEach((c, i) => { grey[c] = prog(f, K14.straight + 6 + i * 6, 8) * (1 - prog(f, K14.wrong + 40, 12)); });
	const lower = prog(f, K14.uuc - 10, 22);
	const anti = anticodonOf('AAG');
	const aas = translate(Q1_M);
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) amino acid sequence, and how many?   (b) anticodon for the second amino acid, with its ends" size={26} color={INK_SOFT} weight={600} at={0} />
				<TemplateRow at={-100} y={yT} />
				<Strand x={T1.x0} y={yM} letters={Q1_M} pitch={PB} face="up" color={MRNA} tw={TWC} th={THC} so={SOC} thick={7} unit={i => prog(f, DOCK14[i] - 8, 10)} tileDy={i => (1 - prog(f, DOCK14[i] - 8, 10)) * 70} glow={i => (Math.floor(i / 3) === 1 ? pulse(f, K14.second, 40) : 0)} />
				<Fade at={DOCK14[11]}>
					<text x={T1.x0 - 48} y={yM + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={MRNA_INK}>5'</text>
					<text x={T1.x0 + 11 * PB + 48} y={yM + 14} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={MRNA_INK}>3'</text>
				</Fade>
				<Excerpt at={-100} lit={lit} grey={grey} />
				{/* the beads, looked up from the excerpt (computed) */}
				{aas.map((aa, k) => (
					<g key={k}>
						<AABead x={cc(k)} y={yM + 80} aa={aa} r={30} o={prog(f, LOOK14[k] + 14, 10)} />
						{k > 0 ? <PepLink a={[cc(k - 1), yM + 80]} b={[cc(k), yM + 80]} o={prog(f, LOOK14[k] + 18, 8)} /> : null}
					</g>
				))}
				<Fade at={K14.adds}>
					<rect x={cc(3) - 100} y={yM + 52} width={200} height={56} rx={28} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
					<text x={cc(3)} y={yM + 90} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={GREY_INK}>stop: adds nothing</text>
				</Fade>
				{/* the second codon and its anticodon */}
				<g transform="translate(1110,745) scale(0.8)" opacity={prog(f, K14.second, 12)}>
					<CodonPiece y={DOCK_DY} codon="AAG" />
					<g transform={`translate(0,${-90 * (1 - lower)})`}><TRna x={0} ya={0} anti={anti} aa={codonToAA('AAG')} tileGlow={() => pulse(f, K14.end3, 30)} /></g>
					<circle cx={-78} cy={-40} r={30} fill={AMBER} opacity={0.35 * pulse(f, K14.end3 + 6, 36)} />
				</g>
				<ModelLine x={130} y={880} text={`(a) ${aas.join(', ')}: 3 amino acids (stop adds none)`} at={K14.three} size={30} />
				<ModelLine x={130} y={928} text={`(b) anticodon 3' ${anti} 5' (= 5' ${reverse(anti)} 3')`} at={K14.end3 + 6} size={30} color={TRNA_INK} />
				<MistakeChip x={96} y={958} text={`${['UAC', 'UUC', 'GGA', 'ACU'].map(codonToAA).join(', ')} (DNA letters read straight into the chart)`} at={K14.straight} cross={K14.wrong} size={28} />
				<GreyTag x={1190} y={964} text="the chart reads mRNA codons" at={K14.wrong + 10} size={26} />
			</Overlay>
		</>
	);
};

// ---------- coded ribosome insets (molecules are coded) ----------
const BactRibo: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<ellipse cx={0} cy={-26} rx={62} ry={40} fill="#e3c99f" stroke="#7a5a30" strokeWidth={3.5} />
		<ellipse cx={0} cy={28} rx={46} ry={28} fill="#d9b3c2" stroke="#7b4a5e" strokeWidth={3.5} />
	</g>
));
const HumanRibo: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => {
	if (o <= 0.01) return null;
	const lobe = (cx: number, cy: number, rx: number, ry: number, k: number) => Array.from({length: 49}, (_, i) => {
		const t = (i / 48) * Math.PI * 2;
		const w = 1 + 0.09 * Math.sin(k * t);
		return `${i ? 'L' : 'M'}${(cx + rx * w * Math.cos(t)).toFixed(1)},${(cy + ry * w * Math.sin(t)).toFixed(1)}`;
	}).join(' ') + ' Z';
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
			<path d={lobe(0, -30, 80, 48, 7)} fill="#e3c99f" stroke="#7a5a30" strokeWidth={3.5} />
			<path d={lobe(0, 34, 60, 34, 6)} fill="#d9b3c2" stroke="#7b4a5e" strokeWidth={3.5} />
		</g>
	);
};
const StrepChip: React.FC<{x: number; y: number; at: number; attached: boolean; to?: [number, number]}> = ({x, y, at, attached, to}) => (
	<g>
		<Chip x={x} y={y} text="streptomycin" at={at} size={30} color={AMBER_INK} stroke={AMBER} dashed={!attached} />
		{to ? <Fade at={at + 6}><line x1={x + 8} y1={y + 28} x2={to[0]} y2={to[1]} stroke={AMBER_INK} strokeWidth={3} strokeDasharray={attached ? undefined : '6 8'} /></Fade> : null}
	</g>
);

// ---------- 11c. Attempt two (streptomycin) ----------
const H15 = 'attempt-two';
const K15 = cues(S(H15), {second: 'Second', strep: 'Streptomycin is an antibiotic', binds: 'binds to the small subunit', misread: 'misread codons', wrong: 'the wrong tRNAs pair', doesnt: "doesn't bind to the ribosomes", shape: 'have a different shape', explain: 'Explain how it can kill bacteria', most: 'most of their proteins normally', suggest: 'Then suggest why', mito: 'human mitochondria', pause: 'Pause here to answer'});
const STIM = ['Streptomycin binds the small subunit of bacterial ribosomes: codons are misread, wrong tRNAs pair.', 'It does not bind human cytoplasmic ribosomes (different shape).'];
const DEM2A = "(a) Explain how streptomycin can kill bacteria in a patient while the patient's own cells keep making most of their proteins normally.";
const DEM2B = '(b) Suggest why it can also affect the ribosomes inside human mitochondria.';
export const AttemptTwoPanels: React.FC<{at: number; strepAt: number; o?: number}> = ({at, strepAt, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={96} y={200} width={820} height={330} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<rect x={1004} y={200} width={820} height={330} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<Pl p={PL.bact} x={380} y={370} k={0.28} />
			<Sx x={120} y={250} text="bacterium" size={36} color={INK_SOFT} hand at={-100} />
			<BactRibo x={780} y={352} s={0.9} />
			<StrepChip x={620} y={450} at={strepAt} attached to={[760, 384]} />
			<Pl p={PL_CELL} x={1230} y={370} k={0.15} />
			<Sx x={1030} y={250} text="human cell" size={36} color={INK_SOFT} hand at={-100} />
			<HumanRibo x={1660} y={352} s={0.9} />
			<StrepChip x={1520} y={455} at={strepAt + 10} attached={false} />
			<Sx x={1660} y={240} text="cytoplasmic ribosome" size={26} color={INK_SOFT} hand anchor="middle" at={-100} />
		</g>
	);
};
export const SceneAttemptTwoB6c: React.FC = () => {
	const h = S(H15).responseHold as {startFrame: number; endFrame: number};
	const a = wrap(DEM2A, 30, 1700);
	let y = 720;
	return (
		<>
			<Heading text="Question two: streptomycin" at={4} size={56} />
			<Overlay>
				<AttemptTwoPanels at={K15.strep} strepAt={K15.binds} />
				<Sx x={96} y={590} text={STIM[0]} size={28} color={INK} weight={700} at={K15.binds} />
				<Sx x={96} y={634} text={STIM[1]} size={28} color={INK} weight={700} at={K15.doesnt} />
				{a.map((l, i) => <Sx key={i} x={96} y={y + i * 38} text={l} size={30} color={INK} weight={700} at={K15.explain + i * 4} />)}
				<AnswerBox x={96} y={y + (a.length - 1) * 38 + 16} w={1480} h={66} at={K15.explain + 10} lines={1} />
				<Sx x={96} y={(y = y + (a.length - 1) * 38 + 130)} text={DEM2B} size={30} color={INK} weight={700} at={K15.suggest} />
				<AnswerBox x={96} y={y + 16} w={1480} h={60} at={K15.suggest + 8} lines={1} />
				<Sx x={96} y={1050} text="Pause here to answer." size={46} color={AMBER_INK} hand at={K15.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={890} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const H16 = 'feedback-two';
const K16 = cues(S(H16), {misread: 'misread codons put', wrongaa: 'wrong amino acids into', fold: 'fold wrongly', dies: 'and it dies', human: 'human cytoplasmic ribosomes', most: "most of the cell's proteins", mito: 'mitochondria came from bacteria', like: 'are bacteria-like', canbind: 'the drug can bind them', said: "it changes the bacteria's DNA", look: 'look again', reading: "It's the reading"});
const MINI = {tx: -100, ty: 140, s: 0.55};
/** A mini translation board (standard board coordinates, scaled): ribosome, mRNA AUG GAA, one tRNA in each slot. */
const MiniBoard: React.FC<{id: string; tx: number; ty: number; s: number; secondAnti: string; secondAA: string; clash?: number; dock: number; ring?: number; strep?: number}> = ({id, tx, ty, s, secondAnti, secondAA, clash = -1, dock, ring = 0, strep = 0}) => {
	const rx = ribX(0), ya = anchorY();
	const b1 = beadPos(codonC(1), ya);
	return (
		<g transform={`translate(${tx},${ty}) scale(${s})`}>
			<Ribosome id={id} x={rx} y={YG} />
			<MrnaC letters="AUGGAA" />
			<Slots rx={rx} labels={false} />
			<TRna x={codonC(0)} ya={ya} anti={anticodonOf('AUG')} aa={null} ends={false} />
			<g transform={`translate(0,${-260 * (1 - dock)})`} opacity={Math.min(1, dock * 3)}><TRna x={codonC(1)} ya={ya} anti={secondAnti} aa={secondAA} clash={clash} ends={false} beadRing={ring} /></g>
			{dock > 0.95 ? <PepLink a={b1} b={[b1[0] - 66, b1[1] - 26]} /> : null}
			<AABead x={dock > 0.95 ? b1[0] - 66 : beadPos(codonC(0), ya)[0]} y={dock > 0.95 ? b1[1] - 26 : beadPos(codonC(0), ya)[1]} aa="Met" />
			{strep > 0.01 ? <g opacity={strep}><rect x={rx - 120} y={YG + 140} width={240} height={60} rx={30} fill={AMBER} opacity={0.9} /><text x={rx} y={YG + 182} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#fffdf8">streptomycin</text></g> : null}
		</g>
	);
};
export const SceneFeedbackTwoB6c: React.FC = () => {
	const f = useCurrentFrame();
	const wrongAnti = anticodonOf('GAU'); // pairs GAU (Asp), so its third base clashes with GAA
	const wrongAA = codonToAA('GAU');
	const dock1 = prog(f, K16.misread + 10, 24);
	const dock2 = prog(f, K16.human + 10, 24);
	const bactDim = prog(f, K16.dies, 16);
	const lines = [
		{t: '(a) Wrong amino acids, misfolded proteins: the bacterium dies.', at: K16.dies + 4},
		{t: 'Human cytoplasmic ribosomes (most proteins): the drug does not bind, so codons are read correctly.', at: K16.most},
		{t: '(b) Mitochondria came from bacteria, so their ribosomes are bacteria-like and the drug can bind them.', at: K16.like},
	];
	let ly = 260;
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={182} text="(a) Why do bacteria die but the patient's cells keep working?   (b) Why can mitochondria be affected?" size={26} color={INK_SOFT} weight={600} at={0} />
				{/* (1) the bacterial ribosome misreads */}
				<MiniBoard id="b6c-fb2-b" tx={MINI.tx} ty={MINI.ty} s={MINI.s} secondAnti={wrongAnti} secondAA={wrongAA} clash={2} dock={dock1} ring={prog(f, K16.wrongaa, 10)} strep={1} />
				<Sx x={110} y={226} text="bacterial ribosome" size={26} color={INK_SOFT} hand at={-100} />
				<GreyTag x={110} y={600} text={`GAA needs Glu; a wrong tRNA brings ${wrongAA}`} at={K16.wrongaa + 4} size={24} />
				{/* (2) misfolded versus correct, and the bacterium */}
				<g opacity={prog(f, K16.fold, 12)}>
					<Blob x={170} y={760} r={44} fill="#c9a0c9" seed={2} />
					<Sx x={170} y={840} text="correct shape" size={26} color={INK_SOFT} hand anchor="middle" at={-100} />
					<path d="M300,720 C350,690 330,800 290,790 C250,780 380,760 360,820 C340,850 270,830 300,720 Z" fill="#c9a0c9" fillOpacity={0.85} stroke={AMBER_INK} strokeWidth={2.5} />
					<Sx x={330} y={870} text="wrong shape: does not work" size={26} color={AMBER_INK} hand anchor="middle" at={-100} />
				</g>
				<g opacity={prog(f, K16.fold, 12) * (1 - 0.6 * bactDim)}><Pl p={PL.bact} x={560} y={770} k={0.13} /></g>
				<GreyTag x={520} y={834} text="enzymes fail" at={K16.dies} size={24} />
				{/* (3) the human cytoplasmic ribosome reads correctly */}
				<g opacity={prog(f, K16.human, 12)}>
					<MiniBoard id="b6c-fb2-h" tx={MINI.tx + 470} ty={MINI.ty} s={MINI.s} secondAnti={anticodonOf('GAA')} secondAA="Glu" dock={dock2} />
					<Sx x={580} y={226} text="human cytoplasmic ribosome" size={26} color={INK_SOFT} hand at={-100} />
				</g>
				<Tick x={980} y={560} at={K16.human + 36} s={40} />
				{/* (4) mitochondria came from bacteria */}
				<g opacity={prog(f, K16.mito, 12)}>
					<Pl p={PL.mito} x={830} y={770} k={0.14} />
				</g>
				<GreyTag x={710} y={880} text="bacteria-like ribosomes (B6a)" at={K16.mito + 6} size={24} />
				{/* model lines */}
				{lines.map((l, i) => {
					const ws = wrap(l.t, 27, 700);
					const y0 = ly;
					ly += ws.length * 35 + 16;
					return <g key={i}>{ws.map((w, j) => (j === 0 ? <ModelLine key={j} x={1130} y={y0} text={w} at={l.at} size={27} /> : <Sx key={j} x={1130} y={y0 + j * 35} text={w} size={27} color={INK} weight={600} at={l.at} />))}</g>;
				})}
				<MistakeChip x={96} y={950} text="streptomycin changes the bacteria's DNA" at={K16.said} cross={K16.look} size={28} />
				<GreyTag x={820} y={956} text="the message is fine: the reading goes wrong" at={K16.reading} size={26} />
			</Overlay>
			<EndoSequence cx={1030} cy={730} kp={0.07} at={K16.mito + 8} rate={1.2} o={prog(f, K16.mito, 12)} />
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const H17 = 'decision-rule';
const K17 = cues(S(H17), {ask: 'is it DNA or mRNA', turn: 'Turn DNA into mRNA first', read: 'Read the chart with mRNA codons', start: 'start at A U G', stop: 'stop at a stop codon', ends: 'put the ends on every anticodon', next: 'Next how the order'});
export const SceneDecisionB6c: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Given a sequence? Ask first" at={4} size={56} />
			<Overlay>
				<Chip x={150} y={230} text="1. DNA or mRNA?" at={K17.ask} size={48} color={INK} stroke={AMBER} />
				<Chip x={150} y={360} text="2. DNA: transcribe first" at={K17.turn} size={48} color={PLUM} stroke={PLUM} />
				<Chip x={150} y={490} text="3. chart: mRNA codons, AUG to stop" at={K17.read} size={48} color={MRNA_INK} stroke={MRNA} />
				<Chip x={150} y={620} text="4. anticodon: write the ends" at={K17.ends} size={48} color={TRNA_INK} stroke={TRNA_INK} />
				<g opacity={prog(f, K17.ends, 12)}><TRna x={1300} ya={760} s={0.55} anti="CUU" aa="Glu" /></g>
				<Fade at={K17.next}>
					<rect x={1000} y={880} width={824} height={130} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<Blob x={1080} y={945} r={40} fill="#c9a0c9" seed={3} />
				</Fade>
				<Sx x={1150} y={930} text="Next: from a chain to a" size={40} color={INK} hand at={K17.next} />
				<Sx x={1150} y={978} text="working protein" size={40} color={INK} hand at={K17.next + 6} />
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	"Translation happens at ribosomes in the cytoplasm. The ribosome (small and large subunits, protein and rRNA) reads the mRNA one codon (three bases) at a time from its 5' end.",
	"Each tRNA carries one specific amino acid. Its anticodon pairs antiparallel with the codon: codon 5' GAA 3', anticodon 3' CUU 5'.",
	'Start at AUG (methionine). Each round: a matching tRNA arrives, rRNA forms a peptide bond, the ribosome moves one codon. A stop codon adds no amino acid; the polypeptide is released, then folds.',
	'mRNA carries the sequence and sets the order; tRNA links each codon to its amino acid. Both are essential.',
	'Use the codon chart with mRNA codons only.',
];
export const SceneNotesB6c: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 20}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: MRNA_INK}}>Memory: stop codons UAA, UAG, UGA: U Are Away, U Are Gone, U Go Away.</div>
		</Enter>
	</>
);
void CODON_W; void DrawPath; void MX; void kf; void GREYT;
