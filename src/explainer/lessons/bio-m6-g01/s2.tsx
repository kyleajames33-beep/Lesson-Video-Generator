// M6 G01 scenes 3a to 3d: question 2, an illustrative sequence inspired by Crick's 1961 frameshift work. Align the
// two mRNAs base by base (a deletion of C in codon 2, an insertion of A after codon 5), then read in threes: codons 2
// to 5 regroup, codons 6 and 7 fall back into the normal frame. Every amino acid is computed by codonToAA.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {translate} from '../bio-m5-b06c/shared';
import {CardBox, GTag, PlateAt} from '../bio-m6-b01/parts';
import {AABead, BeadSwap, Brk, GhostBead, MRNA_INK, codonToAA, vis} from '../bio-m6-b03/parts';
import {smooth} from '../bio-m6-b05/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {AnsBox, Checks, Line, PauseHold, SeqRow, split3} from './board';
import {Chart} from './s1';

// ---------- data (computed) ----------
const NORMAL = 'AUGGCUAACGGAUCUCAGUGG';
const MUTANT = 'AUGGUAACGGAUCUACAGUGG';
const DEL_ONLY = NORMAL.slice(0, 4) + NORMAL.slice(5);
const AA_N = translate(NORMAL), AA_M = translate(MUTANT), AA_D = split3(DEL_ONLY).filter(c => c.length === 3).map(codonToAA);
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('M6 G01 Q2 check failed: ' + m); };
	must(MUTANT === NORMAL.slice(0, 4) + NORMAL.slice(5, 15) + 'A' + NORMAL.slice(15), 'one deletion (base 5) and one insertion (after base 15)');
	must(AA_N.join() === 'Met,Ala,Asn,Gly,Ser,Gln,Trp', 'normal chain');
	must(AA_M.join() === 'Met,Val,Thr,Asp,Leu,Gln,Trp', 'mutant chain');
	must(AA_D.join() === 'Met,Val,Thr,Asp,Leu,Ser', 'deletion-only chain');
	must(!AA_M.includes('stop'), 'no stop in the shifted stretch');
})();
type A2 = {a: number; b: number; d1: number; d2: number};
const STEM2 = (t: A2, marks: QMark[] = []) => qCheck([
	{text: 'In 1961, Crick and colleagues studied mutants of a gene in a virus that infects bacteria (bacteriophage T4).', at: t.a},
	{text: 'Part of the normal mRNA and part of the mRNA from one mutant are shown. The mutant still produced a working protein.', at: t.b},
	{text: '(a) Identify the two point mutations in the mutant. (2 marks)', at: t.d1, para: true, weight: 700},
	{text: '(b) Explain why amino acids 6 and 7 are the same as normal, although amino acids 2 to 5 have changed. (3 marks)', at: t.d2, para: true, weight: 700},
] as QBlock[], marks);
qCheck(STEM2({a: 0, b: 0, d1: 0, d2: 0}).blocks, [{phrase: 'amino acids 6 and 7', at: 0}]);
const NONE: A2 = {a: -100, b: -100, d1: -100, d2: -100};

/** The strip used in the walkthrough: plate, stem and demands (small), the two sequence rows. */
const Strip2: React.FC<{marks?: QMark[]; hot?: (k: number) => number; under?: number}> = ({marks = [], hot, under}) => (
	<>
		<CardBox x={100} y={175} w={1720} h={295} at={-100} />
		<PlateAt p={PLATES.phage} cx={170} cy={300} w={78} at={-100} />
		<QText q={STEM2(NONE, marks)} x={240} y={214} w={2100} size={30} card={false} s={0.72} />
		<SeqRow label="Normal:" x0={390} y={400} codons={split3(NORMAL)} left="5'" right="3'" labelX={240} size={30} lp={26} cg={18} labelSize={26} hot={hot} under={under !== undefined ? {at: under} : undefined} />
		<SeqRow label="Mutant:" x0={390} y={446} codons={split3(MUTANT)} left="5'" right="3'" labelX={240} size={30} lp={26} cg={18} labelSize={26} hot={hot} under={under !== undefined ? {at: under + 6} : undefined} />
		<GTag x={1120} y={400} text="sequences are illustrative" at={-100} size={24} />
	</>
);

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(S('q2-question'), {q: 'Question two', y1961: 'In 1961', virus: 'a virus that infects bacteria', part: "Here's part of a normal mRNA", mutant: 'a mutant that still', identify: 'Identify the two', explain: 'Then explain why', six: 'six and seven', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	const t: A2 = {a: KA.y1961, b: KA.part, d1: KA.identify, d2: KA.explain};
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<CardBox x={100} y={175} w={1000} h={815} at={KA.y1961 - 6} />
				<PlateAt p={PLATES.phage} cx={180} cy={310} w={104} at={KA.virus} />
				<QText q={qCheck(STEM2(t).blocks.slice(0, 2), [])} x={260} y={230} w={810} size={29} card={false} />
				<SeqRow label="Normal:" x0={300} y={500} codons={split3(NORMAL)} left="5'" right="3'" at={KA.part + 10} labelX={130} size={34} lp={28} cg={18} labelSize={30} />
				<SeqRow label="Mutant:" x0={300} y={560} codons={split3(MUTANT)} left="5'" right="3'" at={KA.mutant} labelX={130} size={34} lp={28} cg={18} labelSize={30} />
				<GTag x={130} y={600} text="sequences are illustrative" at={KA.mutant + 10} size={24} />
				<QText q={qCheck(STEM2(t).blocks.slice(2), [])} x={130} y={690} w={940} size={28} card={false} />
				<AnsBox x={130} y={800} w={940} h={70} at={KA.identify + 10} label="(a)" />
				<AnsBox x={130} y={884} w={940} h={96} at={KA.explain + 16} label="(b)" />
				<Chart at={KA.part + 20} />
				<PauseHold h={h} at={KA.pause} x={1150} y={700} cx={1480} cy={830} />
				<Checks hold={h} />
				{void KA.six}
			</Overlay>
		</>
	);
};

// ---------- the alignment rows ----------
const AX = 330, AP = 56, NY = 610, MYR = 700, ASZ = 40;
const colN = (i: number, gN: number) => i + (i >= 15 ? gN : 0);
const colM = (i: number, gM: number) => i + (i >= 4 ? gM : 0);
const ax = (c: number) => AX + c * AP;
const Letter: React.FC<{x: number; y: number; ch: string; o?: number; color?: string}> = ({x, y, ch, o = 1, color = MRNA_INK}) => (o <= 0.01 ? null : (
	<text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: ASZ}} fill={color}>{ch}</text>
));
type AlignState = {o: number; gM: number; gN: number; ticks: (i: number) => number; ringC: number; ringA: number; gapM: number; gapN: number; brk?: number; brkN?: (k: number) => number; brkM?: (k: number) => {o: number; amber: boolean}};
const AlignRows: React.FC<AlignState> = ({o, gM, gN, ticks, ringC, ringA, gapM, gapN, brk = 0, brkN, brkM}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<Sx x={130} y={NY} text="normal" size={30} color={INK} weight={700} />
			<Sx x={130} y={MYR} text="mutant" size={30} color={INK} weight={700} />
			{NORMAL.split('').map((ch, i) => <Letter key={'n' + i} x={ax(colN(i, gN))} y={NY} ch={ch} />)}
			{MUTANT.split('').map((ch, i) => <Letter key={'m' + i} x={ax(colM(i, gM))} y={MYR} ch={ch} />)}
			{/* match ticks: normal letter i to its partner in the mutant */}
			{NORMAL.split('').map((_, i) => {
				if (i === 4) return null;
				const mi = i < 4 ? i : i < 15 ? i - 1 : i;
				const t = ticks(i);
				if (t <= 0.01) return null;
				const x1 = ax(colN(i, gN)), x2 = ax(colM(mi, gM));
				return <line key={'t' + i} x1={x1} y1={NY + 14} x2={x2} y2={MYR - 40} stroke="#9a948a" strokeWidth={3} opacity={t} />;
			})}
			{ringC > 0.01 ? <circle cx={ax(colN(4, gN))} cy={NY - 14} r={28} fill="none" stroke={AMBER} strokeWidth={5} opacity={ringC} /> : null}
			{gapM > 0.01 ? <rect x={ax(4) - 20} y={MYR - 38} width={40} height={46} rx={8} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 5" opacity={gapM} /> : null}
			{ringA > 0.01 ? <circle cx={ax(colM(14, gM))} cy={MYR - 14} r={28} fill="none" stroke={AMBER} strokeWidth={5} opacity={ringA} /> : null}
			{gapN > 0.01 ? <rect x={ax(15) - 20} y={NY - 38} width={40} height={46} rx={8} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 5" opacity={gapN} /> : null}
			{brk > 0.01 ? (
				<g opacity={brk}>
					{[0, 1, 2, 3, 4, 5, 6].map(k => {
						const a = ax(colN(3 * k, gN)) - AP / 2 + 5, b = ax(colN(3 * k + 2, gN)) + AP / 2 - 5;
						return <Brk key={'bn' + k} x1={a} x2={b} y={NY + 16} o={brkN ? brkN(k) : 1} />;
					})}
					{[0, 1, 2, 3, 4, 5, 6].map(k => {
						const s = brkM ? brkM(k) : {o: 1, amber: false};
						const a = ax(colM(3 * k, gM)) - AP / 2 + 5, b = ax(colM(3 * k + 2, gM)) + AP / 2 - 5;
						return <Brk key={'bm' + k} x1={a} x2={b} y={MYR + 16} o={s.o} color={s.amber ? AMBER : '#c9a58f'} w={s.amber ? 4.5 : 3} />;
					})}
				</g>
			) : null}
		</g>
	);
};
const codN = (k: number) => (ax(colN(3 * k, 1)) + ax(colN(3 * k + 2, 1))) / 2;
const codM = (k: number) => (ax(colM(3 * k, 1)) + ax(colM(3 * k + 2, 1))) / 2;
const NBY = 548, MBY = 772;

// ---------- 3b. Base by base ----------
const KB = cues(S('q2-align'), {four: 'Four codons in a row', line: 'line them up', base: 'base by base', first4: 'The first four bases match', c: 'has a C', del: 'a deletion in codon two', after: 'After that', shifted: 'shifted one place left', until: 'until just after codon five', extra: 'an extra A', ins: "That's an insertion"});
export const SceneQ2Align: React.FC = () => {
	const f = useCurrentFrame();
	const gM = smooth(prog(f, KB.c + 14, 16)), gN = smooth(prog(f, KB.extra + 12, 16));
	const ticks = (i: number) => (i < 4 ? prog(f, KB.base + 8 + i * 6, 8) : i < 15 ? prog(f, KB.shifted + (i - 5) * 4, 8) : prog(f, KB.ins + 6 + (i - 15) * 4, 8));
	return (
		<>
			<Heading text="Line them up base by base" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Frameshift" at={6} />
				<Strip2 hot={k => (k >= 1 && k <= 4 ? vis(f, KB.four, KB.line + 20, 10) : 0)} under={KB.c + 8} />
				<AlignRows o={prog(f, KB.line, 14)} gM={gM} gN={gN} ticks={ticks} ringC={prog(f, KB.c, 10)} ringA={prog(f, KB.extra, 10)} gapM={gM} gapN={gN} />
				<Line x={130} y={830} text="deletion: C, codon 2" at={KB.del} out={KB.extra} size={36} />
				<Line x={130} y={830} text="insertion: A, after codon 5" at={KB.extra + 12} size={36} />
				<AnsBox x={100} y={850} w={820} h={140} at={-100} label="(a)" />
				<AnsBox x={950} y={850} w={870} h={140} at={-100} label="(b)" />
				<Line x={150} y={922} text="deletion of C in codon 2;" at={KB.ins + 34} size={30} />
				<Line x={150} y={960} text="insertion of A after codon 5" at={KB.ins + 40} size={30} />
				<Checks ticks={{0: [KB.ins + 30]}} />
				{void KB.first4}{void KB.after}{void KB.until}
			</Overlay>
		</>
	);
};

// ---------- 3c. Why six and seven are normal ----------
const KC = cues(S('q2-frame'), {read: 'Now read in threes', shifts: 'shifts the frame', regrouped: 'are regrouped', change: 'those amino acids change', adds: 'adds one base back', one: 'One removed, one added', six: 'from codon six on', groups: 'normal groups of three', why: "That's why six", results: 'Results like this', threes: ['read in threes', 2]});
const ALL_TICKS = () => 1;
export const SceneQ2Frame: React.FC = () => {
	const f = useCurrentFrame();
	const brk = prog(f, KC.read, 14);
	const flip = (k: number) => KC.regrouped + 8 + (k - 1) * 12;
	const amber = (k: number) => k >= 1 && k <= 4 && f >= KC.shifts;
	const late = (k: number) => (k >= 5 ? prog(f, KC.groups, 12) : 1);
	return (
		<>
			<Heading text="Now read in threes" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Frameshift" at={-100} />
				<Strip2 marks={[{phrase: 'amino acids 6 and 7', at: KC.groups + 6}]} />
				<AlignRows o={1} gM={1} gN={1} ticks={() => 1 - prog(f, KC.read, 12)} ringC={1 - prog(f, KC.read, 12)} ringA={1 - prog(f, KC.read, 12)} gapM={1} gapN={1} brk={brk} brkM={k => ({o: late(k), amber: amber(k)})} brkN={k => late(k)} />
				{/* beads: normal above, mutant below */}
				{AA_N.map((a, k) => <AABead key={'n' + k} x={codN(k)} y={NBY} aa={a} r={22} o={prog(f, KC.read + 10 + k * 3, 10) * late(k)} />)}
				{AA_M.map((a, k) => (k >= 1 && k <= 4
					? <g key={'m' + k} opacity={prog(f, KC.read + 10, 10)}><BeadSwap x={codM(k)} y={MBY} from={AA_N[k]} to={a} at={flip(k)} r={22} /></g>
					: <AABead key={'m' + k} x={codM(k)} y={MBY} aa={a} r={22} o={prog(f, KC.read + 10, 10) * late(k)} />))}
				{/* frame restored: guides from normal codons 6 and 7 down to the mutant's */}
				{[5, 6].map(k => (
					<g key={'g' + k} opacity={prog(f, KC.groups + 8, 12)}>
						<line x1={codN(k)} y1={NY + 24} x2={codM(k)} y2={MYR - 44} stroke="#2f8a5b" strokeWidth={3} strokeDasharray="6 6" />
						<DrawPath d={`M${codM(k) + 20},${MBY + 24} l8,10 l16,-20`} at={KC.groups + 14} dur={10} color="#2f8a5b" width={5} />
					</g>
				))}
				<Line x={130} y={830} text="frame shifted: codons 2 to 5" at={KC.shifts + 6} out={KC.one} size={36} />
				<Line x={130} y={830} text="minus 1, plus 1 = 0" at={KC.one + 6} out={KC.why + 20} size={36} />
				<Line x={130} y={830} text="Multiples of three don't shift the frame" at={KC.threes} size={32} color={INK_SOFT} />
				<AnsBox x={100} y={850} w={820} h={140} at={-100} label="(a)" />
				<AnsBox x={950} y={850} w={870} h={140} at={-100} label="(b)" />
				<Line x={150} y={922} text="deletion of C in codon 2;" at={-100} size={30} />
				<Line x={150} y={960} text="insertion of A after codon 5" at={-100} size={30} />
				<Line x={1030} y={904} text="the deletion shifts the frame (codons 2 to 5" at={KC.why} size={28} />
				<Line x={1030} y={938} text="regrouped); the insertion restores it, so codons" at={KC.why + 6} size={28} />
				<Line x={1030} y={972} text="6 on are read in the normal frame" at={KC.why + 12} size={28} />
				<Checks ticks={{0: [-100], 1: [KC.regrouped]}} />
				{void KC.change}{void KC.adds}{void KC.six}{void KC.results}{void ALL_TICKS}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(S('q2-mistake'), {classic: 'The classic mistake', every: 'every amino acid to the end', truth: "That's true of one deletion", here: 'Here, the insertion', only: 'only the stretch between them'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const ghost = vis(f, KD.truth - 6, KD.here + 10, 12);
	const real = 1 - ghost;
	const a = ax(colM(3, 1)) - AP / 2 + 4, b = ax(colM(14, 1)) + AP / 2 - 4;
	return (
		<>
			<Heading text="Only the stretch between them" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Frameshift" at={-100} />
				<Strip2 marks={[{phrase: 'amino acids 6 and 7', at: -100}]} />
				<AlignRows o={1} gM={1} gN={1} ticks={() => 0} ringC={0} ringA={0} gapM={1} gapN={1} brk={1} brkM={k => ({o: 1, amber: k >= 1 && k <= 4})} />
				{AA_N.map((x, k) => <AABead key={'n' + k} x={codN(k)} y={NBY} aa={x} r={22} />)}
				{AA_M.map((x, k) => <AABead key={'m' + k} x={codM(k)} y={MBY} aa={x} r={22} o={real} ring={k >= 1 && k <= 4 ? 1 : 0} />)}
				{AA_D.map((x, k) => <AABead key={'d' + k} x={codM(k)} y={MBY} aa={x} r={22} o={ghost} ring={k >= 1 ? 1 : 0} grey />)}
				<GhostBead x={codM(6)} y={MBY} r={22} o={ghost} />
				<Line x={codM(6) + 40} y={MBY + 10} text="..." at={KD.truth} out={KD.here + 10} size={36} color={INK_SOFT} />
				<Line x={130} y={830} text="deletion alone: every codon after it changes" at={KD.truth + 6} out={KD.here + 6} size={32} color={INK_SOFT} />
				<g opacity={vis(f, KD.only, 10000, 12)}>
					<DrawPath d={`M${a},${MYR - 40} L${a},${MYR - 54} L${b},${MYR - 54} L${b},${MYR - 40}`} at={KD.only} dur={14} color={AMBER_INK} width={5} />
				</g>
				<Line x={1000} y={860} text="only between the two changes" at={KD.only + 10} size={34} />
				<MistakeChip x={100} y={862} text="a frameshift always changes everything after it" at={KD.classic} cross={KD.every + 6} size={30} />
				<MistakeChip x={100} y={930} text="four separate substitutions" at={KD.only + 46} cross={KD.only + 62} size={28} />
				<Checks ticks={{0: [-100], 1: [-100]}} />
				{void AMBER}
			</Overlay>
		</>
	);
};
