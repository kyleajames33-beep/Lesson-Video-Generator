// M6 B03 scenes 10a to 12: two unseen exam items (three mutant mRNAs with a chart excerpt; the CFTR three-base deletion
// against the HEXA four-base insertion), each kept whole on screen through "Pause here to answer." and its 10 s
// countdown, brief feedback with the givens underlined as they are used and one crossed classic mistake, the
// decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, DrawPath, Heading, MistakeChip, Overlay, Sx, prog} from '../bio-m5-b13/shared';
import {NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {translate} from '../bio-m5-b06c/shared';
import {AMBER, AMBER_INK, AnsTable, BLUE_SOFT, CardBox, CurveArrow, INK, INK_SOFT, Lbl, SlimStrand} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {Brk, ChartCard, Codons, Let, MRNA_INK, MiniChrom, SplitStrand, StopBar, brkSpan, cX, codonToAA, lerp, lx, vis} from './parts';

/** "Pause here to answer." with the 10 s countdown ring. */
const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1010, cx = 1600, cy = 800}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={52} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};

// ---------- item 1: data (every amino acid computed) ----------
const NORMAL = 'AUGGCAUACCAGUGG';
const MUT_C = NORMAL.slice(0, 6) + NORMAL.slice(7); // the U of codon 3 deleted
const split3 = (m: string) => Array.from({length: Math.ceil(m.length / 3)}, (_, k) => m.slice(3 * k, 3 * k + 3));
const SEQS = [
	{label: 'Normal:', codons: split3(NORMAL), more: false},
	{label: 'Mutant A:', codons: ['AUG', 'GCG', 'UAC', 'CAG', 'UGG'], more: false},
	{label: 'Mutant B:', codons: ['AUG', 'GCA', 'UAA', 'CAG', 'UGG'], more: false},
	{label: 'Mutant C:', codons: split3(MUT_C), more: true},
];
const CHART1 = ['ACC', 'AGU', 'AUG', 'CAG', 'GCA', 'GCG', 'UAA', 'UAC', 'UGG'];
(() => {
	if (translate(NORMAL).join(',') !== 'Met,Ala,Tyr,Gln,Trp') throw new Error('B03 item 1 normal check failed');
	if (translate(SEQS[1].codons.join('')).join(',') !== 'Met,Ala,Tyr,Gln,Trp') throw new Error('B03 item 1 A check failed');
	if (translate(SEQS[2].codons.join('')).join(',') !== 'Met,Ala') throw new Error('B03 item 1 B check failed');
	if (MUT_C !== 'AUGGCAACCAGUGG' || translate(MUT_C).join(',') !== 'Met,Ala,Thr,Ser') throw new Error('B03 item 1 C check failed');
	if ([...CHART1].sort().join() !== CHART1.join()) throw new Error('chart excerpt must be alphabetical');
	const need = new Set([...SEQS.flatMap(s => s.codons.filter(c => c.length === 3))]);
	need.forEach(c => { if (!CHART1.includes(c)) throw new Error('chart excerpt misses ' + c); });
	if (codonToAA('GCG') !== 'Ala' || codonToAA('UAA') !== 'stop') throw new Error('B03 item 1 chart check failed');
})();
const SX0 = 400, SLP = 30, SCG = 26, SSZ = 34, SY = [340, 400, 460, 520];
/** One sequence line of item 1 (label, 5', spaced codons, 3'). */
const SeqLine: React.FC<{i: number; at: number; under?: Record<number, number>; brk?: number; ring?: {k: number; j: number; at: number}; caret?: number}> = ({i, at, under = {}, brk = 0, ring, caret}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const q = SEQS[i], y = SY[i];
	const letters = q.codons.join('');
	const last = lx(SX0, letters.length - 1, q.codons.length - 1, SLP, SCG);
	return (
		<g opacity={o}>
			<text x={140} y={y} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 32}} fill={INK}>{q.label}</text>
			<text x={SX0 - 30} y={y - 4} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 26}} fill={INK_SOFT}>5'</text>
			<Codons x0={SX0} y={y} codons={q.codons} lp={SLP} cg={SCG} size={SSZ} brkO={k => (q.codons[k].length === 3 ? brk : 0)} letterColor={() => INK} />
			<text x={last + 26} y={y - 4} style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 26}} fill={INK_SOFT}>{q.more ? "...   3'" : "3'"}</text>
			{Object.entries(under).map(([k, t]) => {
				const [a, b] = brkSpan(SX0, Number(k), SLP, SCG);
				return <DrawPath key={k} d={`M${a - 4},${y + 14} C${a + 20},${y + 18} ${b - 20},${y + 10} ${b + 4},${y + 15}`} at={t} dur={12} color={AMBER} width={5} />;
			})}
			{ring && f >= ring.at ? <circle cx={lx(SX0, 3 * ring.k + ring.j, ring.k, SLP, SCG)} cy={y - 12} r={22} fill="none" stroke={AMBER} strokeWidth={4} opacity={prog(f, ring.at, 10)} /> : null}
			{caret !== undefined && f >= caret ? (
				<g opacity={prog(f, caret, 10)}>
					<path d={`M${lx(SX0, 6, 2, SLP, SCG) - SLP / 2 - 4},${y + 30} L${lx(SX0, 6, 2, SLP, SCG) - SLP / 2 + 6},${y + 12} L${lx(SX0, 6, 2, SLP, SCG) - SLP / 2 + 16},${y + 30}`} fill="none" stroke={AMBER} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : null}
		</g>
	);
};
type T1 = {a: number; d: number};
const STEM1 = (t: T1, marks: QMark[] = []) => qCheck([{text: 'The sequence below is part of the mRNA for an enzyme. Mutants A, B and C each carry one point mutation.', at: t.a}] as QBlock[], marks);
const DEM1 = (t: T1) => qCheck([{text: 'For each mutant, name the type of point mutation and describe its effect on the polypeptide. (6 marks)', at: t.d, weight: 700}] as QBlock[], []);
const COLS1 = [{w: 140, head: 'mutant'}, {w: 340, head: 'type of mutation'}, {w: 740, head: 'effect on the polypeptide'}];
const ROWS1 = [
	['A', 'silent substitution', 'same amino acids: Met, Ala, Tyr, Gln, Trp'],
	['B', 'nonsense substitution', 'stops after 2 amino acids: Met, Ala'],
	['C', 'deletion (frameshift)', 'every codon after it changes: Met, Ala, Thr, Ser, ...'],
];
const Card1: React.FC<{t: T1; seqAt: number[]; chartAt: number; hi?: Record<string, number>; seq?: (i: number) => {under?: Record<number, number>; brk?: number; ring?: {k: number; j: number; at: number}; caret?: number}}> = ({t, seqAt, chartAt, hi = {}, seq}) => (
	<>
		<CardBox x={100} y={180} w={1720} h={780} at={t.a - 6} />
		<QText q={STEM1(t)} x={140} y={238} w={1180} size={30} card={false} />
		{SEQS.map((_, i) => <SeqLine key={i} i={i} at={seqAt[i]} {...(seq ? seq(i) : {})} />)}
		<ChartCard x={1370} y={200} w={410} rows={CHART1} at={chartAt} title="Codon chart (part)" size={30} rowH={40} hi={hi} start />
		<QText q={DEM1(t)} x={140} y={600} w={1180} size={30} card={false} />
	</>
);

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', mrna: "here's part of the mRNA", three: 'three mutated versions', chart: 'part of the codon chart', each: 'For each mutant', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => (
	<>
		<Heading text="Exam question 1" at={KA.two} size={50} />
		<Overlay>
			<Card1 t={{a: KA.mrna, d: KA.each}} seqAt={[KA.mrna + 10, KA.three, KA.three + 8, KA.three + 16]} chartAt={KA.chart} />
			<AnsTable x={140} y={680} cols={COLS1} rows={ROWS1} at={KA.each + 20} size={27} rowH={52} />
			<PauseHold id="attempt" at={KA.pause} />
		</Overlay>
	</>
);

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {a: 'Mutant A changed', gcg: 'to G C G', ala: 'both code for alanine', silent: 'silent substitution', uac: 'U A C became U A A', stopc: 'a stop codon', nonsense: 'nonsense substitution', lost: 'lost a base', del: 'deletion and a frameshift', every: 'every codon after it changes', calling: 'Calling C a substitution', mistake: 'the classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const hot = (r: number) => [vis(f, KB.a, KB.uac, 10), vis(f, KB.uac, KB.lost, 10), vis(f, KB.lost, KB.calling, 10)][r];
	type SeqOpt = {under?: Record<number, number>; brk?: number; ring?: {k: number; j: number; at: number}; caret?: number};
	const seq = (i: number): SeqOpt => {
		if (i === 0) return {under: {1: KB.a + 30, 2: KB.uac}, ring: {k: 2, j: 0, at: KB.lost}};
		if (i === 1) return {under: {1: KB.gcg}};
		if (i === 2) return {under: {2: KB.uac + 46}};
		return {brk: prog(f, KB.lost + 16, 12), caret: KB.lost};
	};
	return (
		<>
			<Heading text="Read each new codon" at={4} size={50} />
			<Overlay>
				<Card1 t={{a: -100, d: -100}} seqAt={[-100, -100, -100, -100]} chartAt={-100} seq={seq}
					hi={{GCA: vis(f, KB.ala, KB.uac, 10), GCG: vis(f, KB.ala, KB.uac, 10), UAA: vis(f, KB.stopc, KB.lost, 10), ACC: vis(f, KB.every, KB.calling + 30, 10), AGU: vis(f, KB.every, KB.calling + 30, 10)}} />
				<AnsTable x={140} y={680} cols={COLS1} rows={ROWS1} at={-100} size={27} rowH={52} fillAt={[KB.silent, KB.nonsense, KB.del]} hot={hot} />
				<MistakeChip x={140} y={978} text="C is a substitution: one amino acid changes" at={KB.calling} cross={KB.mistake} size={30} />
			</Overlay>
		</>
	);
};

// ---------- item 2 ----------
type T2 = {a: number; b: number; c: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'The most common allele that causes cystic fibrosis has three bases deleted from the CFTR gene.', at: t.a},
	{text: 'A common allele that causes Tay-Sachs disease has four bases inserted into the HEXA gene.', at: t.b},
	{text: 'Explain why the CFTR protein is missing only one amino acid, while the HEXA protein is changed from the insertion onwards and is cut short. (3 marks)', at: t.c, para: true, weight: 700},
] as QBlock[], marks);

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', cf: 'The most common cystic fibrosis', tay: 'A common Tay-Sachs allele', explain: 'Explain why', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<CardBox x={100} y={190} w={1720} h={380} at={KC.cf - 6} />
			<QText q={Q2({a: KC.cf, b: KC.tay, c: KC.explain})} x={140} y={262} w={1640} size={40} card={false} />
			<CardBox x={100} y={610} w={1360} h={300} at={KC.explain + 20} dash="10 7" />
			<Sx x={130} y={656} text="answer" size={26} color={INK_SOFT} weight={700} at={KC.explain + 20} />
			<PauseHold id="attempt-two" at={KC.pause} cy={760} />
		</Overlay>
	</>
);

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {threes: 'Codons are read in threes', three: 'Deleting three bases', worth: "one codon's worth", unchanged: 'is unchanged', loses: 'loses just one amino acid', four: "Four isn't a multiple of three", shifts: 'shifts the frame', every: 'Every codon after it is regrouped', stop: 'a stop codon soon appears', only: 'only affects the amino acids', missed: "you've missed the frame"});
const ALL2: T2 = {a: -100, b: -100, c: -100};
qCheck(Q2(ALL2).blocks, [{phrase: 'three bases deleted', at: 0}, {phrase: 'four bases inserted', at: 0}]);
const RP = 28, RG = 18, RW = 3 * RP + RG;
const slotX = (x0: number, i: number, g = Math.floor(i / 3)) => x0 + i * RP + g * RG;
/** Unlabelled base positions (small rounded squares), so nothing reads as the real sequence. */
const Slot: React.FC<{x: number; y: number; o?: number; amber?: boolean}> = ({x, y, o = 1, amber = false}) => (o <= 0.01 ? null : (
	<rect x={x - 10} y={y - 22} width={20} height={26} rx={5} fill={amber ? '#fff3d9' : '#efe6d4'} stroke={amber ? AMBER : MRNA_INK} strokeWidth={amber ? 3.5 : 2} opacity={o} />
));
const MiniBead: React.FC<{x: number; y: number; o?: number; amber?: number}> = ({x, y, o = 1, amber = 0}) => (o <= 0.01 ? null : (
	<circle cx={x} cy={y} r={15} fill={amber > 0.5 ? '#fff3d9' : '#d9cbb3'} stroke={amber > 0.5 ? AMBER : INK_SOFT} strokeWidth={amber > 0.5 ? 4.5 : 2.5} opacity={o} />
));
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	// left: CFTR, three positions out, frame kept
	const LX = 180, Y = 600, BYm = 500;
	const lift = prog(f, KD.worth, 16), close = prog(f, KD.worth + 22, 16);
	const lxOf = (i: number) => slotX(LX, i) - (i >= 9 ? RW * close : 0);
	const lbx = (k: number) => slotX(LX, 3 * k + 1, k) - (k >= 3 ? RW * close : 0);
	// right: HEXA, four positions in, frame shifted
	const RX = 1010;
	const ins = prog(f, KD.four + 10, 16), drop = prog(f, KD.four + 20, 12), rg = prog(f, KD.shifts, 16);
	const rxOld = (j: number) => (j < 6 ? slotX(RX, j) : RX + (j + 4 * ins) * RP + lerp(Math.floor(j / 3), Math.floor((j + 4) / 3), rg) * RG);
	const rxIns = (m: number) => RX + (6 + m) * RP + lerp(2, Math.floor((6 + m) / 3), rg) * RG;
	const amberB = prog(f, KD.every, 12);
	const stopO = prog(f, KD.stop + 6, 10);
	const rbx = (k: number) => RX + (3 * k + 1) * RP + k * RG;
	return (
		<>
			<Heading text="Count the bases" at={4} size={50} />
			<Overlay>
				<CardBox x={100} y={180} w={1720} h={232} at={-100} />
				<QText q={Q2(ALL2, [{phrase: 'three bases deleted', at: KD.three + 6}, {phrase: 'four bases inserted', at: KD.four}])} x={140} y={232} w={2240} size={40} card={false} s={0.72} />
				{/* CFTR */}
				<Sx x={LX - 20} y={455} text="CFTR" size={38} color={INK} hand at={-100} />
				{[0, 1, 3, 4].map(k => <line key={k} x1={lbx(k) + 15} y1={BYm} x2={lbx(k + 1) - 15} y2={BYm} stroke={INK} strokeWidth={3} />)}
				{[1, 2].map(k => <line key={'g' + k} x1={lbx(k) + 15} y1={BYm} x2={lbx(k + 1) - 15} y2={BYm} stroke={INK} strokeWidth={3} opacity={1 - lift} />)}
				<line x1={lbx(1) + 15} y1={BYm} x2={lbx(3) - 15} y2={BYm} stroke={INK} strokeWidth={3} opacity={prog(f, KD.worth + 34, 8)} />
				{[0, 1, 2, 3, 4, 5].map(k => <MiniBead key={k} x={lbx(k)} y={BYm - (k === 2 ? 40 * lift : 0)} o={k === 2 ? 1 - lift : 1} amber={k === 2 ? 1 : 0} />)}
				{Array.from({length: 18}, (_, i) => (i >= 6 && i < 9
					? <Slot key={i} x={lxOf(i)} y={Y - 60 * lift} amber o={1 - prog(f, KD.worth + 10, 12)} />
					: <Slot key={i} x={lxOf(i)} y={Y} />))}
				{[0, 1, 2, 3, 4, 5].map(k => { const [a, b] = brkSpan(LX, k, RP, RG); const d = k >= 3 ? RW * close : 0; return <Brk key={k} x1={a - d} x2={b - d} y={Y + 18} o={k === 2 ? 1 - lift : 1} />; })}
				<Lbl x={LX - 20} y={690} text="3 = a multiple of 3: frame kept, one amino acid lost" size={32} color={AMBER_INK} at={KD.unchanged} />
				{/* HEXA */}
				<Sx x={RX - 20} y={455} text="HEXA" size={38} color={INK} hand at={-100} />
				{[0, 1, 2, 3, 4].map(k => <line key={'r' + k} x1={slotX(RX, 3 * k + 1, k) + 15} y1={BYm} x2={slotX(RX, 3 * k + 4, k + 1) - 15} y2={BYm} stroke={INK} strokeWidth={3} opacity={k < 1 ? 1 : 1 - prog(f, KD.four + 6, 10)} />)}
				{[0, 1, 2, 3, 4, 5].map(k => <MiniBead key={'r' + k} x={slotX(RX, 3 * k + 1, k)} y={BYm} o={k < 2 ? 1 : 1 - prog(f, KD.four + 6, 10)} />)}
				{[2, 3, 4].map(k => {
					const o = prog(f, KD.every + (k - 2) * 8, 10);
					return <g key={'n' + k} opacity={o}><line x1={rbx(k - 1) + 15} y1={BYm} x2={rbx(k) - 15} y2={BYm} stroke={INK} strokeWidth={3} /><MiniBead x={rbx(k)} y={BYm} amber={amberB} /></g>;
				})}
				<StopBar x={rbx(4) + 34} y={BYm} h={44} o={stopO} />
				{Array.from({length: 18}, (_, j) => <Slot key={j} x={rxOld(j)} y={Y} />)}
				{[0, 1, 2, 3].map(m => <Slot key={'i' + m} x={rxIns(m)} y={Y - 40 * (1 - drop)} amber o={drop} />)}
				{[0, 1, 2, 3, 4, 5].map(k => { const [a, b] = brkSpan(RX, k, RP, RG); return <Brk key={'o' + k} x1={a} x2={b} y={Y + 18} o={k < 2 ? 1 : 1 - prog(f, KD.four + 6, 10)} />; })}
				{[2, 3, 4, 5, 6].map(k => { const [a, b] = brkSpan(RX, k, RP, RG); return <Brk key={'n' + k} x1={a} x2={b} y={Y + 18} o={rg} color={AMBER} w={4} />; })}
				<Lbl x={RX - 20} y={690} text="4 is not a multiple of 3: frameshift, early stop" size={32} color={AMBER_INK} at={KD.stop} />
				<MistakeChip x={140} y={790} text="each change only affects the amino acids where it happens" at={KD.only} cross={KD.missed} size={30} />
				{void KD.threes}{void KD.loses}{void cX}{void Let}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', first: 'first ask whether', sub: 'For a substitution, read', ins: 'For an insertion or deletion, count', where: 'Then say where it is', next: 'Next, what happens'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [110, 700, 1290], PY = 230, PW = 520, PH = 470;
	const steps = [
		{at: KE.first, l: ['1. substitution, or', 'insertion or deletion?']},
		{at: KE.sub, l: ['2. read the new codon,', 'or count the bases:', 'multiple of 3?']},
		{at: KE.where, l: ['3. where is it?', 'effect on the protein']},
	];
	return (
		<>
			<Heading text="Classify a point mutation" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<CardBox x={PX[i]} y={PY} w={PW} h={PH} at={-100} stroke={AMBER} sw={3.5} />
						{s.l.map((l, k) => <Sx key={k} x={PX[i] + 30} y={PY + 62 + k * 50} text={l} size={42} color={INK} hand />)}
						{i < 2 ? <CurveArrow a={[PX[i] + PW + 10, PY + PH / 2]} b={[PX[i + 1] - 10, PY + PH / 2]} at={steps[i + 1].at - 4} bow={0} color={AMBER_INK} width={6} /> : null}
					</g>
				))}
				{/* icons: the three demonstrations */}
				<g opacity={prog(f, KE.first + 10, 14)}>
					<SlimStrand x={PX[0] + 40} y={PY + 300} n={5} pitch={26} gap={30} rung={i => (i === 2 ? {color: AMBER, w: 6} : undefined)} />
					<SplitStrand x={PX[0] + 200} y={PY + 300} n={5} k={2} pitch={26} gap={30} mode="ins" t={1} t2={1} />
					<SplitStrand x={PX[0] + 380} y={PY + 300} n={5} k={2} pitch={26} gap={30} mode="del" t={1} t2={0} />
					{['swap', 'add', 'remove'].map((t, k) => <Sx key={t} x={PX[0] + 105 + k * 175} y={PY + 380} text={t} size={28} color={INK_SOFT} hand anchor="middle" />)}
				</g>
				{/* icons: a chart row and a regrouped bracket */}
				<g opacity={prog(f, KE.sub + 20, 14)}>
					<rect x={PX[1] + 30} y={PY + 250} width={200} height={56} rx={10} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<text x={PX[1] + 46} y={PY + 290} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>GUG Val</text>
				</g>
				<g opacity={prog(f, KE.ins + 20, 14)}>
					<Codons x0={PX[1] + 290} y={PY + 290} codons={['AUG', 'AAC', 'CUG']} lp={22} cg={14} size={24} hot={k => (k > 0 ? 1 : 0)} />
					<Sx x={PX[1] + 280} y={PY + 360} text="not a multiple of 3:" size={28} color={AMBER_INK} hand />
					<Sx x={PX[1] + 280} y={PY + 396} text="frame shifts" size={28} color={AMBER_INK} hand />
				</g>
				{/* icon: early and late positions on a gene */}
				<g opacity={prog(f, KE.where + 10, 14)}>
					<rect x={PX[2] + 40} y={PY + 270} width={440} height={60} rx={14} fill={BLUE_SOFT} />
					{Array.from({length: 10}, (_, k) => <circle key={k} cx={PX[2] + 70 + k * 42} cy={PY + 300} r={11} fill="#d9cbb3" stroke={INK_SOFT} strokeWidth={2} />)}
					<path d={`M${PX[2] + 100},${PY + 248} l-12,-18 l24,0 Z`} fill={AMBER} />
					<path d={`M${PX[2] + 430},${PY + 248} l-12,-18 l24,0 Z`} fill="#9aa0a6" />
					<Sx x={PX[2] + 100} y={PY + 380} text="early: more lost" size={28} color={AMBER_INK} hand anchor="middle" />
					<Sx x={PX[2] + 420} y={PY + 380} text="late: less" size={28} color={INK_SOFT} hand anchor="middle" />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={980} y={790} w={840} h={170} at={-100} stroke={AMBER} sw={3.5} />
					<MiniChrom x={1030} y={875} w={170} h={36} />
					<Sx x={1240} y={888} text="Next: chromosomal mutations" size={40} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Point mutation: a change to one or a few bases in DNA, by substitution (one base swapped), insertion (bases added) or deletion (bases removed).',
	'A substitution within a coding codon changes that codon; read the new codon. Silent: the same amino acid (the code is degenerate). Missense: a different amino acid (sickle cell, GAG to GUG). Nonsense: a stop codon, so the chain is cut short (beta thalassaemia, CAG to UAG).',
	'An insertion or deletion that is not a multiple of three causes a frameshift: every codon after it is regrouped, most later amino acids change and an early stop often appears. A multiple of three keeps the frame and adds or removes amino acids.',
	'The effect depends on type and position (near the start of a gene, or in an active site, matters more). "Point" describes the scale of the change, not the size of the effect.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Silent same, missense misses, nonsense stops. THE FAT CAT: lose one letter, everything after it shifts." tag="point mutations: what changes in the codon, and what that does to the protein" size={30} aidTop={790} />
);
