// M6 G01 scenes 1 to 2d: the hook (three checks, four question cards) and question 1 (a template strand and three
// single-base mutants): write the mRNA by pairing, then compare one triplet at a time against the codon chart. Every
// codon and amino acid is computed (B6b pairing, B6c codonToAA); the build check confirms the design's values.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {Badge, CheckList, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardFrame} from '../bio-m5-g01/s1';
import {GreyTag} from '../bio-m5-b06a/shared';
import {complementRNA} from '../bio-m5-b06b/shared';
import {CodonChart, translate} from '../bio-m5-b06c/shared';
import type {ChartGeom} from '../bio-m5-b06c/shared';
import {AnsTable, CardBox, PlateAt} from '../bio-m6-b01/parts';
import {Bar, Karyo, lay} from '../bio-m6-b04/parts';
import {BeadSwap, Beads, Codons, GhostBead, LetSwap, StopBar, cX, codonToAA, lx, vis} from '../bio-m6-b03/parts';
import {Dot, PLUM} from '../bio-m6-b05/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {AnsBox, Checks, PauseHold, SeqRow, split3} from './board';

// ---------- 1. Hook ----------
const KH = cues(S('hook'), {read: 'something to read', seq: 'a DNA sequence', chrom: 'a chromosome diagram', kary: 'a karyotype', kase: 'or a case', three: 'three checks', what: 'What changed', does: 'What does it do', who: 'who can inherit it', four: 'four HSC-style questions', pause: 'Pause and try', step: 'one step at a time'});
const ChangedIcon: React.FC = () => (
	<g>
		<text x={-34} y={-6} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 24}} fill={INK}>AUG</text>
		<text x={-34} y={22} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 24}} fill={INK}>AU</text>
		<text x={0} y={22} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 24}} fill={AMBER_INK}>C</text>
	</g>
);
const DoesIcon: React.FC = () => (
	<g>
		<path d="M-30,10 L-30,18 L10,18 L10,10" fill="none" stroke={AMBER} strokeWidth={4} strokeLinecap="round" />
		<circle cx={22} cy={-12} r={13} fill="#d9cbb3" stroke={INK_SOFT} strokeWidth={2.5} />
		<line x1={-10} y1={8} x2={14} y2={-4} stroke={INK_SOFT} strokeWidth={2.5} />
	</g>
);
const WhoIcon: React.FC = () => (
	<g>
		<Dot x={-22} y={0} r={11} plum mut={1} />
		<path d="M-8,0 L14,0 M6,-7 L15,0 L6,7" fill="none" stroke={PLUM} strokeWidth={3} strokeLinecap="round" />
		<Dot x={28} y={0} r={11} mut={1} />
	</g>
);
const HCHR = lay(['A', 'B', '●', 'C', 'D', 'E'], 1080, 40, 22);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = KH.step + 24;
	const th = (at: number) => prog(f, at, 16);
	return (
		<>
			<Heading text="What changed, what it does, who inherits it" at={4} size={54} />
			<Overlay>
				<CheckList shrink={shrink} y={360} rows={[
					{text: 'what changed?', at: KH.what, icon: <ChangedIcon />},
					{text: 'what does it do?', at: KH.does, icon: <DoesIcon />},
					{text: 'who inherits it?', at: KH.who, icon: <WhoIcon />},
				]} title="three checks" titleAt={KH.three} />
				{/* four stimuli, then four question cards round them */}
				<g opacity={th(KH.seq)}>
					<SeqRow label="" x0={1065} y={400} codons={['TAC', 'GGT', 'CTT']} left="3'" right="5'" dna size={32} lp={26} cg={16} labelX={1040} />
				</g>
				<g opacity={th(KH.chrom)}><Bar segs={HCHR.segs} cen={HCHR.cen} y={680} gw={40} h={40} /></g>
				<g opacity={th(KH.four + 6)}>
					<SeqRow label="" x0={1490} y={380} codons={['AUG', 'GCU', 'AAC']} left="5'" right="3'" size={30} lp={24} cg={14} labelX={1470} />
					<SeqRow label="" x0={1490} y={430} codons={['AUG', 'GUA', 'ACG']} left="5'" right="3'" size={30} lp={24} cg={14} labelX={1470} />
				</g>
				<g opacity={th(KH.kary)}><g transform="translate(1190,790) scale(0.26) translate(-1200,-740)"><Karyo x0={540} y={800} sc={0.5} labels={false} /></g></g>
				<PlateAt p={PLATES.bull} cx={1610} cy={710} w={260} at={KH.kase} />
				<CardFrame cx={1190} cy={390} label="Question 1" at={KH.four} />
				<CardFrame cx={1610} cy={390} label="Question 2" at={KH.four + 6} />
				<CardFrame cx={1190} cy={710} label="Question 3" at={KH.four + 12} />
				<CardFrame cx={1610} cy={710} label="Question 4" at={KH.four + 18} />
				<Checks at={shrink + 8} />
				{void KH.read}{void KH.pause}
			</Overlay>
		</>
	);
};

// ---------- Question 1: data (computed) ----------
const TMPL = 'TACGGTCTTAAACCG';
const swap = (s: string, i: number, c: string) => s.slice(0, i) + c + s.slice(i + 1);
const MUTS = [swap(TMPL, 5, 'A'), swap(TMPL, 6, 'A'), swap(TMPL, 10, 'G')];
const MI = [5, 6, 10];
const MRNA_N = complementRNA(TMPL);
const MRNA_M = MUTS.map(complementRNA);
const AA_N = translate(MRNA_N);
const WRONG = TMPL.replace(/T/g, 'U');
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('M6 G01 Q1 check failed: ' + m); };
	must(MRNA_N === 'AUGCCAGAAUUUGGC', 'normal mRNA');
	must(AA_N.join() === 'Met,Pro,Glu,Phe,Gly', 'normal chain');
	must(split3(MRNA_M[0])[1] === 'CCU' && codonToAA('CCU') === 'Pro', 'mutant 1 silent');
	must(split3(MRNA_M[1])[2] === 'UAA' && translate(MRNA_M[1]).join() === 'Met,Pro', 'mutant 2 nonsense');
	must(split3(MRNA_M[2])[3] === 'UCU' && codonToAA('UCU') === 'Ser', 'mutant 3 missense');
	must(split3(WRONG).map(codonToAA).join() === 'Tyr,Gly,Leu,Lys,Pro', 'wrong method');
})();
const ROWS = [
	{label: 'Normal template:', s: TMPL},
	{label: 'Mutant 1:', s: MUTS[0]},
	{label: 'Mutant 2:', s: MUTS[1]},
	{label: 'Mutant 3:', s: MUTS[2]},
];
type A1 = {a: number; d1: number; d2: number};
const STEM1 = (t: A1, marks: QMark[] = []) => qCheck([
	{text: "The DNA template strand for the start of a gene is shown below, written 3' to 5'. Mutants 1, 2 and 3 each have one base changed.", at: t.a},
] as QBlock[], marks);
const DEM1 = (t: A1) => qCheck([
	{text: '(a) Write the mRNA for the normal sequence. (2 marks)', at: t.d1, weight: 700},
	{text: '(b) For each mutant, name the type of point mutation and describe its effect on the polypeptide. (6 marks)', at: t.d2, para: true, weight: 700},
] as QBlock[], []);
qCheck(STEM1({a: 0, d1: 0, d2: 0}).blocks, [{phrase: 'template', at: 0}, {phrase: "written 3' to 5'", at: 0}]);
const CHART_G: ChartGeom = {x0: 120, y0: 90, cw: 230, ch: 156};
export const Chart: React.FC<{at: number; hi?: Record<string, number>}> = ({at, hi = {}}) => (
	<g>
		<Sx x={1140} y={192} text="Codon chart (mRNA codons)" size={26} color={INK_SOFT} hand at={at} />
		<g transform="translate(1140,200) scale(0.6)"><CodonChart g={CHART_G} at={at} lineHi={hi} /></g>
	</g>
);
const COLS1 = [{w: 110, head: 'mutant'}, {w: 320, head: 'type'}, {w: 510, head: 'effect on the polypeptide'}];
const ROWS1 = [
	['1', 'silent substitution', `no change: ${AA_N.join(' ')}`],
	['2', 'nonsense substitution', `stops after 2 amino acids: ${translate(MRNA_M[1]).join(' ')}`],
	['3', 'missense substitution', 'Phe replaced by Ser; rest unchanged'],
];
/** The question card. Full for the attempt; a strip (stem, sequences and demands, smaller) for the walkthrough. */
const Q1Card: React.FC<{strip: boolean; t?: A1; seqAt?: number[]; marks?: QMark[]; ring?: (r: number) => {i: number; at: number; out?: number}[]; hotRow?: (r: number) => number}> = ({strip, t = {a: -100, d1: -100, d2: -100}, seqAt = [-100, -100, -100, -100], marks = [], ring, hotRow}) => {
	const f = useCurrentFrame();
	if (!strip) {
		return (
			<>
				<CardBox x={100} y={175} w={1000} h={815} at={t.a - 6} />
				<QText q={STEM1(t)} x={130} y={228} w={940} size={30} card={false} />
				{ROWS.map((r, i) => <SeqRow key={i} label={r.label} x0={470} y={350 + i * 56} codons={split3(r.s)} left="3'" right="5'" dna at={seqAt[i]} labelX={130} size={34} labelSize={30} />)}
				<QText q={DEM1(t)} x={130} y={600} w={940} size={28} card={false} />
			</>
		);
	}
	return (
		<>
			<CardBox x={100} y={175} w={1000} h={368} at={-100} />
			<QText q={STEM1(t, marks)} x={130} y={216} w={1300} size={30} card={false} s={0.72} />
			{ROWS.map((r, i) => {
				const h = hotRow ? hotRow(i) : 0;
				return (
					<g key={i}>
						{h > 0.01 ? <rect x={118} y={274 + i * 40} width={960} height={38} rx={10} fill="#f6d77a" opacity={0.3 * h} /> : null}
						<SeqRow label={r.label} x0={420} y={300 + i * 40} codons={split3(r.s)} left="3'" right="5'" dna labelX={130} size={28} lp={25} cg={18} labelSize={26} ring={ring ? ring(i) : []} />
					</g>
				);
			})}
			<QText q={DEM1(t)} x={130} y={460} w={1300} size={28} card={false} s={0.72} />
			{void f}
		</>
	);
};
// working-area geometry
const WX = 300, WLP = 40, WCG = 28, WS = 40, TY = 600, MY = 680, BYY = 762;
const codonC = (k: number) => cX(WX, k, WLP, WCG);
const letX = (i: number) => lx(WX, i, Math.floor(i / 3), WLP, WCG);

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(S('q1-question'), {q: 'Question one', tmpl: "Here's the template strand", three: 'three mutants', write: 'Write the mRNA', then: 'Then, for each mutant', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<Q1Card strip={false} t={{a: KA.tmpl, d1: KA.write, d2: KA.then}} seqAt={[KA.tmpl + 10, KA.three, KA.three + 8, KA.three + 16]} />
				<AnsBox x={130} y={712} w={940} h={66} at={KA.write + 10} label="(a)" />
				<AnsTable x={130} y={800} cols={COLS1} rows={ROWS1} at={KA.then + 16} size={25} rowH={44} />
				<Chart at={KA.tmpl + 20} />
				<PauseHold h={h} at={KA.pause} x={1150} y={700} cx={1480} cy={830} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Which strand, then the chain ----------
const KB = cues(S('q1-mrna'), {first: 'which strand is it', tmpl: "It's the template", pairs: 'A pairs with U', written: 'The strand is written', under: 'lines up underneath', tac: 'T A C gives', aug: 'A U G', start: 'the start codon', reading: 'Reading on', met: 'methionine', pro: 'proline', glu: 'glutamate', phe: 'phenylalanine', gly: 'glycine'});
export const SceneQ1Mrna: React.FC = () => {
	const f = useCurrentFrame();
	const cod = split3(MRNA_N);
	const build = (k: number) => KB.under + 10 + k * 12;
	const beadAt = [KB.met, KB.pro, KB.glu, KB.phe, KB.gly];
	const lit: Record<string, number> = {AUG: vis(f, KB.aug + 6, KB.pro, 10)};
	cod.forEach((c, k) => { if (k > 0) lit[c] = vis(f, beadAt[k] - 4, (beadAt[k + 1] ?? KB.gly + 40) - 2, 8); });
	return (
		<>
			<Heading text="Which strand? Pair it" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Point mutations" at={6} />
				<Q1Card strip marks={[{phrase: 'template', at: KB.tmpl + 4}, {phrase: "written 3' to 5'", at: KB.written + 6}]} />
				<Chart at={-100} hi={lit} />
				<Sx x={1140} y={690} text="template A → U, T → A, C → G, G → C" size={30} color={INK} weight={700} at={KB.pairs} out={KB.reading} />
				<GreyTag x={1140} y={710} text="B6b" at={KB.pairs + 10} out={KB.reading} size={24} />
				<SeqRow label="template" x0={WX} y={TY} codons={split3(TMPL)} left="3'" right="5'" dna at={KB.written + 10} labelX={110} size={WS} lp={WLP} cg={WCG} labelSize={26} />
				<Codons x0={WX} y={MY} codons={cod} lp={WLP} cg={WCG} size={WS} letterO={i => prog(f, build(Math.floor(i / 3)), 10)} brkO={k => prog(f, build(k) + 4, 8)} hot={k => (k === 0 ? vis(f, KB.aug, KB.reading, 10) : 0)} />
				<Sx x={WX - 36} y={MY - 2} text="5'" size={28} color={INK_SOFT} anchor="end" at={KB.under} />
				<Sx x={letX(14) + 36} y={MY - 2} text="3'" size={28} color={INK_SOFT} at={KB.under} />
				<Sx x={110} y={MY} text="mRNA" size={26} color={INK} weight={700} at={KB.under} out={KB.gly + 30} />
				<Sx x={110} y={MY} text="(a)" size={30} color={AMBER_INK} weight={800} at={KB.gly + 34} />
				<Beads xs={cod.map((_, k) => codonC(k))} y={BYY} aa={AA_N} r={26} bo={k => prog(f, beadAt[k] + 4, 10)} />
				<Checks ticks={{0: [KB.tmpl]}} />
				{void KB.first}{void KB.tac}{void KB.start}
			</Overlay>
		</>
	);
};

// ---------- 2c. One triplet at a time ----------
const KC = cues(S('q1-mutants'), {compare: 'compare each mutant', m1: 'In mutant one', ccu: 'C C U', still: "That's still proline", silent: 'silent', m2: 'In mutant two', uaa: 'U A A', stopc: 'a stop codon', nonsense: 'nonsense', stops: 'the chain stops', m3: 'In mutant three', ucu: 'U C U', serine: 'serine', missense: 'missense'});
export const SceneQ1Mutants: React.FC = () => {
	const f = useCurrentFrame();
	const cod = split3(MRNA_N);
	const xs = cod.map((_, k) => codonC(k));
	const stopG = vis(f, KC.stopc, KC.m3, 12);
	const caseOf = f < KC.m2 ? 0 : f < KC.m3 ? 1 : 2;
	const swaps = [{i: 5, to: 'U', at: KC.ccu, out: KC.m2}, {i: 6, to: 'U', at: KC.uaa, out: KC.m3}, {i: 10, to: 'C', at: KC.ucu}];
	const hidden = (i: number) => swaps.some(s => s.i === i && f >= s.at - 2 && (s.out === undefined || f < s.out + 10));
	const hot = (r: number) => [vis(f, KC.m1, KC.m2, 10), vis(f, KC.m2, KC.m3, 10), vis(f, KC.m3, 10000, 10)][r];
	return (
		<>
			<Heading text="One triplet at a time" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Point mutations" at={-100} />
				<Q1Card strip hotRow={r => (r === 0 ? 0 : hot(r - 1))} ring={r => (r === 0 ? [] : [{i: MI[r - 1], at: [KC.m1, KC.m2, KC.m3][r - 1] + 8, out: [KC.m2, KC.m3, undefined][r - 1]}])} marks={[{phrase: 'template', at: -100}, {phrase: "written 3' to 5'", at: -100}]} />
				<Chart at={-100} hi={{CCU: vis(f, KC.ccu + 6, KC.m2, 10), UAA: vis(f, KC.uaa + 6, KC.m3, 10), UCU: vis(f, KC.ucu + 6, 10000, 10)}} />
				<Codons x0={WX} y={MY} codons={cod} lp={WLP} cg={WCG} size={WS} letterO={i => (hidden(i) ? 0 : 1)} hot={k => (k === 1 ? vis(f, KC.ccu, KC.m2, 10) : k === 2 ? vis(f, KC.uaa, KC.m3, 10) : k === 3 ? vis(f, KC.ucu, 10000, 10) : 0)} />
				{swaps.map((s, k) => <LetSwap key={k} x={letX(s.i)} y={MY} from={MRNA_N[s.i]} to={s.to} at={s.at + 4} out={s.out} size={WS} o={vis(f, s.at - 2, s.out === undefined ? undefined : s.out + 10, 4)} />)}
				<Sx x={110} y={MY} text="mRNA" size={26} color={INK} weight={700} at={-100} />
				<Beads xs={xs} y={BYY} aa={AA_N} r={26} bo={k => (k === 3 && f >= KC.serine - 2 ? 0 : k >= 2 ? 1 - stopG : 1)} lo={k => (k >= 1 ? 1 - stopG : 1)} />
				{[2, 3, 4].map(k => <GhostBead key={k} x={xs[k]} y={BYY} r={26} o={stopG} />)}
				<StopBar x={(xs[1] + xs[2]) / 2} y={BYY} o={prog(f, KC.stops, 10) * (1 - prog(f, KC.m3, 12))} h={56} />
				{caseOf === 2 ? <BeadSwap x={xs[3]} y={BYY} from="Phe" to="Ser" at={KC.serine} r={26} /> : null}
				<g opacity={1 - prog(f, KC.m2, 10)}><DrawPath d={`M${xs[1] + 20},${BYY - 46} l8,10 l16,-20`} at={KC.still} dur={10} color="#2f8a5b" width={5} /></g>
				<AnsTable x={130} y={810} cols={COLS1} rows={ROWS1} at={-100} size={25} rowH={44} fillAt={[KC.silent, KC.nonsense, KC.missense]} hot={hot} />
				<Checks ticks={{0: [-100], 1: [KC.silent]}} />
				{void KC.compare}
			</Overlay>
		</>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(S('q1-mistake'), {classic: 'The classic mistake', turns: 'That turns', uac: 'U A C', tyr: 'tyrosine', nostart: 'no start codon', paired: 'paired, not copied'});
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const wc = split3(WRONG);
	const xs = wc.map((_, k) => codonC(k));
	const ghost = '#8d949b';
	return (
		<>
			<Heading text="Paired, not copied" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Point mutations" at={-100} />
				<Q1Card strip marks={[{phrase: 'template', at: -100}]} />
				<Chart at={-100} hi={{UAC: vis(f, KD.tyr, KD.paired + 30, 10)}} />
				<SeqRow label="template" x0={WX} y={TY} codons={split3(TMPL)} left="3'" right="5'" dna at={2} labelX={110} size={WS} lp={WLP} cg={WCG} labelSize={26} />
				<Codons x0={WX} y={MY} codons={wc} lp={WLP} cg={WCG} size={WS} letterColor={() => ghost} letterO={i => prog(f, KD.turns + i * 2, 8)} brkO={() => prog(f, KD.turns, 8)} hot={k => (k === 0 ? vis(f, KD.nostart, 10000, 10) : 0)} />
				<Beads xs={xs} y={BYY} aa={wc.map(codonToAA)} r={26} grey bo={k => prog(f, KD.uac + 10 + k * 5, 10)} />
				<MistakeChip x={130} y={850} text="template copied, not paired" at={KD.classic} cross={KD.classic + 10} size={32} />
				<MistakeChip x={130} y={918} text="mutant 2: missense (a stop is not an amino acid)" at={KD.paired + 40} cross={KD.paired + 56} size={28} />
				<Sx x={1140} y={720} text="no start codon" size={38} color={AMBER_INK} hand at={KD.nostart + 6} />
				<Checks ticks={{0: [-100], 1: [-100]}} />
				{void FONT_HAND}{void INK}
			</Overlay>
		</>
	);
};
