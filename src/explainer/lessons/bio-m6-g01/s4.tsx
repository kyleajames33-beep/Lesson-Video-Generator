// M6 G01 scenes 5a to 7: question 4 (Belgian Blue cattle: an 11-base deletion in the myostatin gene shifts the frame,
// an early stop cuts the protein short, so muscle growth is not limited; the same deletion in one muscle cell of a cow
// is somatic, so her calves cannot inherit it), the decision board with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {AidChip, Badge, DecisionRows, HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {ProteinBlob} from '../bio-m5-b06c/shared';
import {CardBox, GTag, PlateAt} from '../bio-m6-b01/parts';
import {Brk, StopBar} from '../bio-m6-b03/parts';
import {CellTree, Dot, StopMark, clamp01, lerp, smooth, treePt, vis} from '../bio-m6-b05/parts';
import type {TreeProps} from '../bio-m6-b05/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {AnsBox, Checks, Line, PauseHold} from './board';

// ---------- data ----------
const DEL = 11;
if (DEL % 3 !== 2 || Math.floor(DEL / 3) !== 3) throw new Error('M6 G01 Q4: 11 / 3 must be 3 remainder 2');
type A4 = {a: number; b: number; c: number; da: number; e: number; db: number};
const Q4 = (t: A4, marks: QMark[] = []) => qCheck([
	{text: 'Belgian Blue cattle have very large muscles.', at: t.a},
	{text: 'Most Belgian Blue cattle carry two copies of an allele of the myostatin gene in which 11 bases are deleted from the coding sequence.', at: t.b},
	{text: 'Myostatin is a protein that limits muscle growth.', at: t.c},
	{text: '(a) Explain how the deletion of 11 bases can result in cattle with no working myostatin. (3 marks)', at: t.da, para: true, weight: 700},
	{text: '(b) A cow of a different breed, with two normal myostatin alleles, develops the same 11-base deletion in one cell of a leg muscle.', at: t.e, para: true},
	{text: 'Explain whether her calves could inherit large muscles as a result of this mutation. (2 marks)', at: t.db, weight: 700},
] as QBlock[], marks);
const MARKS4 = ['11 bases are deleted', 'limits muscle growth', 'one cell of a leg muscle', 'two normal myostatin alleles'];
qCheck(Q4({a: 0, b: 0, c: 0, da: 0, e: 0, db: 0}).blocks, MARKS4.map(phrase => ({phrase, at: 0})));
const NONE: A4 = {a: -100, b: -100, c: -100, da: -100, e: -100, db: -100};
const Strip4: React.FC<{marks?: QMark[]}> = ({marks = []}) => (
	<>
		<CardBox x={100} y={175} w={1720} h={290} at={-100} />
		<PlateAt p={PLATES.bull} cx={185} cy={262} w={150} at={-100} />
		<PlateAt p={PLATES.cow} cx={185} cy={392} w={140} at={-100} />
		<QText q={Q4(NONE, marks)} x={290} y={214} w={2040} size={30} card={false} s={0.72} />
	</>
);

// ---------- 5a. Question 4 (pause) ----------
const KA = cues(S('q4-question'), {q: 'Question four', bb: 'Belgian Blue cattle', most: 'Most carry two copies', eleven: 'eleven bases deleted', myo: 'Myostatin is a protein', explain: 'Explain how deleting', then: 'Then, a normal cow', one: 'one muscle cell', whether: 'Explain whether', pause: 'Pause here to answer'});
export const SceneQ4Question: React.FC = () => {
	const h = hold('q4-question');
	const t: A4 = {a: KA.bb, b: KA.most, c: KA.myo, da: KA.explain, e: KA.then, db: KA.whether};
	const bl = Q4(t).blocks;
	return (
		<>
			<Heading text="Question 4" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<CardBox x={100} y={175} w={1720} h={815} at={KA.bb - 6} />
				<PlateAt p={PLATES.bull} cx={255} cy={330} w={260} at={KA.bb} />
				<QText q={qCheck(bl.slice(0, 4), [])} x={430} y={240} w={1360} size={30} card={false} />
				<AnsBox x={430} y={420} w={1360} h={120} at={KA.explain + 10} label="(a)" />
				<PlateAt p={PLATES.cow} cx={255} cy={660} w={250} at={KA.then} />
				<QText q={qCheck(bl.slice(4), [])} x={430} y={600} w={1360} size={30} card={false} />
				<AnsBox x={430} y={740} w={1000} h={230} at={KA.whether + 10} label="(b)" />
				<PauseHold h={h} at={KA.pause} x={1460} y={760} cx={1640} cy={850} />
				<Checks hold={h} />
				{void KA.eleven}{void KA.one}
			</Overlay>
		</>
	);
};

// ---------- the gene band: positions without letters, original codons in alternating shades ----------
const GB = {x0: 130, y: 650, p: 22, cg: 10, n: 48, d0: 18};
const posX = (i: number) => GB.x0 + i * GB.p + Math.floor(i / 3) * GB.cg;
/** Positions 18 to 28 (11) lift out; the rest close up; brackets regroup in threes from the start. */
const GeneBand: React.FC<{lift: number; close: number; regroup: number; o?: number; stopAt?: number; stopO?: number}> = ({lift, close, regroup, o = 1}) => {
	if (o <= 0.01) return null;
	const xOf = (i: number) => {
		if (i < GB.d0) return posX(i);
		if (i < GB.d0 + DEL) return posX(i);
		return lerp(posX(i), posX(i - DEL), smooth(close));
	};
	const remain = GB.n - DEL;
	return (
		<g opacity={o}>
			{Array.from({length: GB.n}, (_, i) => {
				const inDel = i >= GB.d0 && i < GB.d0 + DEL;
				const shade = Math.floor(i / 3) % 2 ? '#e6d6bd' : '#f3e8d4';
				return <rect key={i} x={xOf(i) - 9} y={GB.y - 22 - (inDel ? 70 * lift : 0)} width={18} height={26} rx={5} fill={inDel ? '#fff3d9' : shade} stroke={inDel ? AMBER : '#b9a58a'} strokeWidth={inDel ? 3 : 1.6} opacity={inDel ? 1 - clamp01(lift * 1.4 - 0.4) : 1} />;
			})}
			{/* old brackets (fade) and the regrouped brackets after the deletion */}
			{Array.from({length: GB.n / 3}, (_, k) => <Brk key={'o' + k} x1={posX(3 * k) - 10} x2={posX(3 * k + 2) + 10} y={GB.y + 16} o={k < GB.d0 / 3 ? 1 : 1 - regroup} />)}
			{Array.from({length: Math.floor(remain / 3)}, (_, k) => (k < GB.d0 / 3 ? null : (
				<Brk key={'n' + k} x1={posX(3 * k) - 10} x2={posX(3 * k + 2) + 10} y={GB.y + 16} o={regroup} color={AMBER} w={4} />
			)))}
		</g>
	);
};
const beadX = (k: number) => (posX(3 * k) + posX(3 * k + 2)) / 2;
const Muscle: React.FC<{x: number; y: number; wide: number; brake: number; o?: number}> = ({x, y, wide, brake, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - 150},${y} C${x - 90},${y - 50 - 30 * wide} ${x + 90},${y - 50 - 30 * wide} ${x + 150},${y} C${x + 90},${y + 50 + 30 * wide} ${x - 90},${y + 50 + 30 * wide} ${x - 150},${y} Z`} fill="#e9b7a8" stroke="#9c5a4a" strokeWidth={3.5} />
		{[-60, -20, 20, 60].map(dx => <path key={dx} d={`M${x - 120},${y + dx * 0.25} Q${x},${y + dx * (0.9 + 0.4 * wide)} ${x + 120},${y + dx * 0.25}`} fill="none" stroke="#c98a7a" strokeWidth={2} />)}
		<g opacity={brake}>
			<line x1={x - 170} y1={y - 70} x2={x - 170} y2={y + 70} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			<line x1={x + 170} y1={y - 70} x2={x + 170} y2={y + 70} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
		</g>
	</g>
));

// ---------- 5b. Eleven bases, the frame and the protein ----------
const KB = cues(S('q4-frameshift'), {start: 'Start with the number', eleven: "Eleven isn't a multiple", shifts: 'shifts the reading frame', every: 'Every codon after it', stop: 'a stop codon soon', cut: 'cut short', part: 'the part that does its job', limits: 'nothing limits muscle growth', larger: 'grow larger'});
export const SceneQ4Frameshift: React.FC = () => {
	const f = useCurrentFrame();
	const lift = prog(f, KB.shifts, 18), close = prog(f, KB.shifts + 16, 18), regroup = prog(f, KB.every, 16);
	const nb = Math.floor((GB.n - DEL) / 3);
	const stopK = 9;
	const stopO = prog(f, KB.stop + 6, 10);
	const lineO = 1 - 0.6 * prog(f, KB.part, 12);
	const brake = 1 - prog(f, KB.limits + 10, 14);
	const wide = prog(f, KB.limits + 20, 30);
	return (
		<>
			<Heading text="Count the bases" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Effect and inheritance" at={6} />
				<Strip4 marks={[{phrase: MARKS4[0], at: KB.eleven}, {phrase: MARKS4[1], at: KB.limits}]} />
				<g opacity={lineO}><Line x={130} y={530} text="11 ÷ 3 = 3 remainder 2: not a whole number of codons" at={KB.eleven + 8} size={38} /></g>
				<GeneBand lift={lift} close={close} regroup={regroup} o={prog(f, KB.shifts - 10, 12)} />
				{/* amino acids: before the deletion normal, after it changed, then an early stop */}
				{Array.from({length: nb}, (_, k) => {
					const changed = k >= GB.d0 / 3;
					const o = (changed ? prog(f, KB.every + 6 + (k - 6) * 4, 10) : prog(f, KB.shifts - 6, 10)) * (k > stopK ? 1 - stopO : 1);
					return (
						<g key={k}>
							{k > stopK ? <circle cx={beadX(k)} cy={590} r={13} fill="none" stroke="#8d949b" strokeWidth={2.5} strokeDasharray="5 4" opacity={stopO} /> : null}
							<circle cx={beadX(k)} cy={590} r={13} fill={changed ? '#fff3d9' : '#d9cbb3'} stroke={changed ? AMBER : INK_SOFT} strokeWidth={changed ? 3.5 : 2} opacity={o} />
						</g>
					);
				})}
				<StopBar x={(beadX(stopK) + beadX(stopK + 1)) / 2} y={590} o={stopO} h={40} />
				<Line x={1180} y={600} text="frame shifted" at={KB.every + 10} out={KB.stop} size={36} />
				<Line x={1180} y={600} text="early stop: protein cut short" at={KB.stop + 12} out={KB.part} size={36} />
				{/* the protein, missing its working end */}
				<g opacity={prog(f, KB.part, 12)}>
					<ProteinBlob x={1360} y={600} r={50} />
					<ellipse cx={1440} cy={600} rx={40} ry={40} fill="none" stroke="#8d949b" strokeWidth={3} strokeDasharray="7 6" />
					<Sx x={1500} y={610} text="active end missing" size={30} color={INK_SOFT} hand opacity={1 - prog(f, KB.limits, 10)} />
				</g>
				<Muscle x={1500} y={850} wide={wide} brake={brake} o={prog(f, KB.limits - 6, 12)} />
				<Sx x={1500} y={760} text="muscle" size={30} color={INK_SOFT} hand anchor="middle" at={KB.limits} />
				<Sx x={1360} y={680} text="myostatin" size={28} color={INK_SOFT} hand anchor="middle" at={KB.part + 6} />
				<AnsBox x={100} y={720} w={1140} h={260} at={-100} label="(a)" />
				<Line x={150} y={790} text="not a multiple of 3: frameshift, codons regrouped," at={KB.limits + 6} size={30} />
				<Line x={150} y={834} text="early stop; short, non-functional protein," at={KB.limits + 14} size={30} />
				<Line x={150} y={878} text="so muscle growth is not limited" at={KB.larger} size={30} />
				<Checks ticks={{0: [KB.shifts], 1: [KB.part]}} />
				{void KB.start}{void KB.cut}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 5c. One muscle cell ----------
const KC = cues(S('q4-somatic'), {cow: 'Now the cow', one: 'one muscle cell', somatic: 'somatic mutation', copied: "It's copied only", eggs: 'not into her eggs', cant: "can't inherit", pass: 'To pass it on', germ: 'her germ line'});
const T5: TreeProps = {x: 860, y: 540, R: 190};
export const SceneQ4Somatic: React.FC = () => {
	const f = useCurrentFrame();
	const [ex, ey] = treePt(T5, 6, 60);
	return (
		<>
			<Heading text="Somatic: not inherited" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Effect and inheritance" at={-100} />
				<Strip4 marks={[{phrase: MARKS4[2], at: KC.one}, {phrase: MARKS4[3], at: KC.one + 14}]} />
				<PlateAt p={PLATES.cow} cx={360} cy={700} w={360} at={2} />
				<CellTree {...T5} germ={{g: 3, j: 7, o: 1}} mut={{g: 4, j: 3, t: 3 * prog(f, KC.one + 10, 40)}} pulse={prog(f, KC.germ, 30)} o={prog(f, KC.one - 6, 12)} />
				<Line x={T5.x - 170} y={830} text="somatic: a patch only" at={KC.somatic + 6} size={36} />
				<g opacity={prog(f, KC.eggs, 12)}>
					<DrawPath d={`M${ex + 10},${ey} L${ex + 90},${ey + 110}`} at={KC.eggs} dur={10} color="#8d949b" width={3} dash="6 6" />
					<StopMark x={ex + 50} y={ey + 55} o={prog(f, KC.eggs + 10, 8)} />
					<Dot x={ex + 104} y={ey + 132} r={20} />
					<Sx x={ex + 104} y={ey + 180} text="egg" size={26} color={INK_SOFT} hand anchor="middle" />
				</g>
				<GTag x={T5.x - 170} y={880} text="b05: somatic stays with you" at={KC.germ} size={26} />
				<AnsBox x={1220} y={500} w={600} h={330} at={-100} label="(b)" />
				<Line x={1250} y={576} text="no: a somatic mutation in a" at={KC.cant} size={30} />
				<Line x={1250} y={618} text="muscle cell is copied only by" at={KC.cant + 6} size={30} />
				<Line x={1250} y={660} text="mitosis into that cell's" at={KC.cant + 12} size={30} />
				<Line x={1250} y={702} text="descendants; it is not in her eggs," at={KC.cant + 18} size={30} />
				<Line x={1250} y={744} text="so her calves cannot inherit it" at={KC.cant + 24} size={30} />
				<Line x={1250} y={786} text="(in animals)" at={KC.cant + 30} size={30} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [KC.cant]}} />
				{void KC.cow}{void KC.copied}{void KC.pass}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 5d. The classic mistake ----------
const KD = cues(S('q4-mistake'), {classic: 'The classic mistake', saying: 'saying eleven amino acids', bases: "Eleven bases aren't", whole: 'a whole number of codons', frame: 'so the frame shifts'});
export const SceneQ4Mistake: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Bases are not amino acids" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Effect and inheritance" at={-100} />
				<Strip4 marks={[{phrase: MARKS4[0], at: -100}]} />
				<Line x={130} y={560} text="11 ÷ 3 = 3 remainder 2" at={2} size={44} />
				<g opacity={prog(f, KD.whole, 8)}>
					<DrawPath d={`M110,520 C300,490 560,500 650,540 C690,580 520,600 300,598 C150,596 90,570 110,520`} at={KD.whole} dur={18} color={AMBER} width={5} />
				</g>
				<GeneBand lift={1} close={1} regroup={1} o={prog(f, KD.bases, 12)} />
				<MistakeChip x={100} y={790} text="11 bases deleted, so 11 amino acids lost" at={KD.classic} cross={KD.saying + 20} size={32} />
				<MistakeChip x={100} y={870} text="part b: yes, because the cow now carries the allele" at={KD.frame + 40} cross={KD.frame + 56} size={28} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
				{void vis}
			</Overlay>
		</>
	);
};

// ---------- 6. Decision board ----------
const KE = cues(S('decision-board'), {so: "So here's how", seq: 'For a sequence', codon: 'codon by codon', several: 'If several codons', base: 'base by base', count: 'and count', chrom: 'For a chromosome', gene: 'gene by gene', any: 'And for any mutation', som: 'somatic or germ line', next: 'Next, how meiosis'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="How to start any mutation question" at={KE.so} size={54} />
		<Overlay>
			<DecisionRows y0={250} lh={126} seeSize={38} dooSize={32} split={720} rows={[
				{see: 'a sequence', doo: ['which strand? write the mRNA,', 'compare codon by codon'], badge: 'Q1', at: KE.seq, lit: [KE.seq, KE.several]},
				{see: 'several codons in a row differ', doo: ['align base by base;', 'count: shifted? restored?'], badge: 'Q2, Q4', at: KE.several, lit: [KE.several, KE.chrom]},
				{see: 'a chromosome or karyotype', doo: ['gene by gene; count the chromosomes'], badge: 'Q3', at: KE.chrom, lit: [KE.chrom, KE.any]},
				{see: 'any mutation', doo: ['somatic or germ line?'], badge: 'Q4', at: KE.any, lit: [KE.any, KE.next]},
			]} />
			<AidChip x={96} y={784} text="Align base by base, then read in threes." at={KE.count} size={34} />
			<NextChip x={900} y={900} w={924} text="Next: how meiosis and fertilisation vary offspring" at={KE.next}>
				<PlateAt p={PLATES.dish} cx={958} cy={942} w={96} at={KE.next} />
			</NextChip>
			{void KE.codon}{void KE.base}{void KE.gene}{void KE.som}
		</Overlay>
	</>
);

// ---------- 7. Key notes ----------
const NOTES = [
	'A template strand is paired to make mRNA (A to U, T to A, C to G, G to C); compare mutants one codon at a time and read the chart with mRNA codons.',
	'A substitution changes one codon: silent (same amino acid), missense (different amino acid) or nonsense (stop codon, chain cut short).',
	'Align an insertion or deletion base by base. A change that is not a multiple of three shifts the frame; a second change can restore it, so only the codons between them change.',
	'Inversion: a segment reversed on the same chromosome (it can include the centromere). Translocation needs a second, non-matching chromosome. A missing or extra whole chromosome is a change in number, from nondisjunction.',
	'A somatic mutation (for example, in one muscle cell) is not inherited in animals; only a germ-line mutation can be.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Align base by base, then read in threes." tag="what changed, what it does, who inherits it" size={30} aidTop={790} />
);
