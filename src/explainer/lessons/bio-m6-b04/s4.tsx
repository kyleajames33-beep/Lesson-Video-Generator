// M6 B04 scenes 11a to 13: two unseen exam items (an HSC-style chromosome diagram; sickle cell against Down syndrome),
// each kept whole on screen through "Pause here to answer." and its 10 s countdown, brief feedback with the givens
// marked as they are used and one crossed classic mistake, the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, DrawPath, Heading, MistakeChip, Overlay, PlateB, Sx, prog} from '../bio-m5-b13/shared';
import {NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsTable, CardBox, CurveArrow, wForH} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {PLATES} from './assets';
import {CHR1} from './s1';
import {AMBER, AMBER_INK, Bar, CW, Count, DoseBar, INK, INK_SOFT, KChrom, TickC, gx, lay, vis} from './parts';
import type {Seg} from './parts';

const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1030, cx = 1600, cy = 800}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={52} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};

// ---------- item 1: the diagram (the exam layout, centromere after C) ----------
const D_N1 = ['A', 'B', 'C', '●', 'D', 'E', 'F', 'G', 'H'];
const D_N2 = ['M', 'N', '●', 'O', 'P', 'Q'];
const D_1 = ['A', 'B', 'C', '●', 'D', 'E', 'F', 'E', 'F', 'G', 'H'];
const D_2 = ['A', 'B', 'C', '●', 'D', 'G', 'F', 'E', 'H'];
const D_3a = ['A', 'B', 'C', '●', 'D', 'E', 'F', 'P', 'Q'];
const D_3b = ['M', 'N', '●', 'O', 'G', 'H'];
const DG = 44, DC = 26, DH = 38, DX = 470;
const DY = {n1: 370, n2: 445, m1: 525, m2: 605, m3: 685};
const L = {
	n1: lay(D_N1, DX, DG, DC), n2: lay(D_N2, DX, DG, DC), m1: lay(D_1, DX, DG, DC), m2: lay(D_2, DX, DG, DC),
	m3a: lay(D_3a, DX, DG, DC), m3b: lay(D_3a, 0, DG, DC).end + DX + 80,
};
const M3B = lay(D_3b, L.m3b, DG, DC);
const ROWLAB: [string, number][] = [['Normal chromosome 1', DY.n1], ['Normal chromosome 2', DY.n2], ['1', DY.m1], ['2', DY.m2], ['3', DY.m3]];
const under = (L1: {segs: Seg[]}, i0: number, i1: number, y: number, at: number, k: string) => {
	const a = L1.segs[i0].x, b = L1.segs[i1].x + DG;
	return <DrawPath key={k} d={`M${a},${y + DH / 2 + 8} C${a + 30},${y + DH / 2 + 12} ${b - 30},${y + DH / 2 + 5} ${b},${y + DH / 2 + 9}`} at={at} dur={14} color={AMBER} width={5} />;
};
type T1 = {a: number; d: number; b: number};
const STEM1 = (t: T1) => qCheck([{text: 'The diagram shows two normal, non-matching chromosomes and three mutations, 1 to 3. Letters represent genes; the circle is the centromere. In each cell, the mutated chromosome is paired with a normal partner (homologue).', at: t.a}] as QBlock[], []);
const DEM1 = (t: T1) => qCheck([
	{text: '(a) Name the type of chromosomal mutation shown in each of 1, 2 and 3. (3 marks)', at: t.d, weight: 700},
	{text: '(b) Identify which mutation changes the number of copies of a gene in the cell. Justify your answer. (2 marks)', at: t.b, para: true, weight: 700},
] as QBlock[], []);
const COLS1 = [{w: 190, head: 'mutation'}, {w: 610, head: '(a) type'}];
const ROWS1 = [['1', 'duplication'], ['2', 'inversion'], ['3', 'translocation (reciprocal)']];
const Card1: React.FC<{t: T1; diagAt: number[]; extra?: React.ReactNode}> = ({t, diagAt, extra}) => {
	const f = useCurrentFrame();
	return (
		<>
			<CardBox x={100} y={180} w={1720} h={800} at={t.a - 6} />
			<QText q={STEM1(t)} x={140} y={232} w={1640} size={28} card={false} />
			{ROWLAB.map(([l, y], i) => <Sx key={l} x={140} y={y + 10} text={l} size={i < 2 ? 28 : 32} color={INK} weight={700} at={diagAt[i]} />)}
			<g opacity={prog(f, diagAt[0], 12)}><Bar segs={L.n1.segs} cen={L.n1.cen} y={DY.n1} gw={DG} h={DH} size={22} /></g>
			<g opacity={prog(f, diagAt[1], 12)}><Bar segs={L.n2.segs} cen={L.n2.cen} y={DY.n2} gw={DG} h={DH} size={22} /></g>
			<g opacity={prog(f, diagAt[2], 12)}><Bar segs={L.m1.segs} cen={L.m1.cen} y={DY.m1} gw={DG} h={DH} size={22} /></g>
			<g opacity={prog(f, diagAt[3], 12)}><Bar segs={L.m2.segs} cen={L.m2.cen} y={DY.m2} gw={DG} h={DH} size={22} /></g>
			<g opacity={prog(f, diagAt[4], 12)}>
				<Bar segs={L.m3a.segs} cen={L.m3a.cen} y={DY.m3} gw={DG} h={DH} size={22} />
				<Sx x={L.m3b - 40} y={DY.m3 + 9} text="and" size={26} color={INK_SOFT} weight={600} anchor="middle" />
				<Bar segs={M3B.segs} cen={M3B.cen} y={DY.m3} gw={DG} h={DH} size={22} />
			</g>
			<QText q={DEM1(t)} x={1260} y={385} w={520} size={28} card={false} />
			{extra}
		</>
	);
};

// ---------- 11a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', diagram: 'the diagram shows', letters: 'with genes as letters', three: 'three changed versions', name: 'Name the chromosomal mutation', identify: 'Then identify', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => (
	<>
		<Heading text="Exam question 1" at={KA.two} size={50} />
		<Overlay>
			<Card1 t={{a: KA.diagram, d: KA.name, b: KA.identify}} diagAt={[KA.diagram + 20, KA.diagram + 30, KA.three, KA.three + 8, KA.three + 16]} />
			<AnsTable x={140} y={745} cols={COLS1} rows={ROWS1} at={KA.name + 20} size={30} rowH={52} />
			<CardBox x={1260} y={700} w={520} h={220} at={KA.identify + 20} dash="10 7" />
			<Sx x={1284} y={744} text="(b)" size={28} color={INK_SOFT} weight={700} at={KA.identify + 20} />
			<PauseHold id="attempt" at={KA.pause} cx={1090} cy={820} />
		</Overlay>
	</>
);

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {ef: 'E and F appear twice', dup: "so it's a duplication", efg: 'the segment E F G', back: 'is back to front', gh: 'G and H have swapped', trans: 'a translocation', only: 'Only the duplication', partner: 'With its normal partner', three: 'three copies of E and F', calling: 'Calling three a deletion', mistake: 'the classic mistake', moved: 'they moved'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const hot = (r: number) => [vis(f, KB.ef, KB.efg, 10), vis(f, KB.efg, KB.gh, 10), vis(f, KB.gh, KB.only, 10)][r];
	const part = lay(D_N1, 960, 28, 16);
	const tk = prog(f, KB.mistake + 40, 12);
	const fx = (L1: {segs: Seg[]}, i: number) => L1.segs[i].x + DG / 2;
	return (
		<>
			<Heading text="Compare gene by gene" at={4} size={50} />
			<Overlay>
				<Card1 t={{a: -100, d: -100, b: -100}} diagAt={[-100, -100, -100, -100, -100]} extra={
					<>
						{under(L.m1, 6, 7, DY.m1, KB.ef, 'u1')}
						{under(L.m2, 4, 6, DY.m2, KB.back, 'u2')}
						<g opacity={vis(f, KB.back + 6, KB.gh, 10)}><CurveArrow a={[L.m2.segs[6].x + DG - 4, DY.m2 - 26]} b={[L.m2.segs[4].x + 4, DY.m2 - 26]} at={KB.back + 6} bow={-16} color={AMBER_INK} width={3.5} /></g>
						{under(L.m3a, 6, 7, DY.m3, KB.gh + 20, 'u3a')}
						{under(M3B, 3, 4, DY.m3, KB.gh + 8, 'u3b')}
						<g opacity={vis(f, KB.gh + 24, KB.only, 10)}><CurveArrow a={[fx(M3B, 3), DY.m3 - 26]} b={[fx(L.m3a, 7), DY.m3 - 26]} at={KB.gh + 24} bow={-40} color={AMBER_INK} width={3.5} dash="7 6" /></g>
						<g opacity={prog(f, KB.partner, 12)}><Bar segs={part.segs} cen={part.cen} y={DY.m1} gw={28} h={30} size={16} /></g>
						<Sx x={960 + 120} y={DY.m1 - 24} text="partner" size={24} color={INK_SOFT} hand anchor="middle" at={KB.partner + 6} />
						{[4, 5].map(i => <Count key={i} x={fx(L.m1, i)} y={DY.m1 - 26} n="3" hot o={prog(f, KB.three, 10)} size={24} />)}
						{f >= KB.moved ? M3B.segs.slice(3).map((q, i) => <rect key={i} x={q.x - 4} y={DY.m3 - DH / 2 - 6} width={DG + 8} height={DH + 12} rx={10} fill="none" stroke={AMBER} strokeWidth={4} opacity={Math.abs(Math.sin((f - KB.moved) / 5)) * (1 - prog(f, KB.moved + 40, 10))} />) : null}
						{[...L.m2.segs.map(q => [q.x, DY.m2]), ...L.m3a.segs.map(q => [q.x, DY.m3]), ...M3B.segs.map(q => [q.x, DY.m3])].map(([x, y], i) => <TickC key={i} x={x + DG / 2} y={y - 32} s={14} o={tk} />)}
					</>
				} />
				<AnsTable x={140} y={745} cols={COLS1} rows={ROWS1} at={-100} size={30} rowH={52} fillAt={[KB.dup, KB.back, KB.trans]} hot={hot} />
				<CardBox x={1260} y={700} w={520} h={220} at={-100} dash="10 7" />
				<Sx x={1284} y={744} text="(b)" size={28} color={INK_SOFT} weight={700} at={-100} />
				<Sx x={1290} y={796} text="1, duplication: E and F now" size={32} color={AMBER_INK} hand at={KB.three} />
				<Sx x={1290} y={840} text="3 copies (2 on this chromosome" size={32} color={AMBER_INK} hand at={KB.three + 8} />
				<Sx x={1290} y={884} text="+ 1 on its partner)" size={32} color={AMBER_INK} hand at={KB.three + 16} />
				<MistakeChip x={140} y={992} text="3 is a deletion: G and H are lost" at={KB.calling} cross={KB.mistake} size={30} />
				{void KB.only}{void gx}{void CW}
			</Overlay>
		</>
	);
};

// ---------- item 2 ----------
type T2 = {a: number; b: number; c: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'Sickle cell disease is caused by a single base substitution in the gene for the beta chain of haemoglobin.', at: t.a},
	{text: 'Down syndrome is usually caused by an extra copy of chromosome 21.', at: t.b},
	{text: 'Compare these two mutations in terms of how each first arises, the amount of DNA changed, and the effect on the organism. (4 marks)', at: t.c, para: true, weight: 700},
] as QBlock[], marks);

// ---------- 11c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', sickle: 'Sickle cell disease is caused', down: 'Down syndrome is usually caused', compare: 'Compare these two mutations', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<CardBox x={100} y={190} w={1720} h={340} at={KC.sickle - 6} />
			<QText q={Q2({a: KC.sickle, b: KC.down, c: KC.compare})} x={140} y={262} w={1640} size={40} card={false} />
			<CardBox x={100} y={570} w={1360} h={340} at={KC.compare + 20} dash="10 7" />
			<Sx x={130} y={616} text="answer" size={26} color={INK_SOFT} weight={700} at={KC.compare + 20} />
			<PauseHold id="attempt-two" at={KC.pause} cy={760} />
		</Overlay>
	</>
);

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {both: 'Both change the DNA', copying: 'a copying error', tri: 'the trisomy from nondisjunction', base: 'changes one base', amino: 'one amino acid in one protein', adds: 'The trisomy adds a whole chromosome', hundreds: 'hundreds of products', saying: 'Saying its genes are faulty', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100};
qCheck(Q2(ALL2).blocks, [{phrase: 'single base substitution', at: 0}, {phrase: 'extra copy of chromosome 21', at: 0}]);
const TX = [140, 420, 1100], TW = [280, 680, 680];
const TROWS: {h: string; a: string[]; b: string[]; atA: keyof typeof KD; atB: keyof typeof KD}[] = [
	{h: 'arises', a: ['copying error or mutagen'], b: ['nondisjunction in meiosis'], atA: 'copying', atB: 'tri'},
	{h: 'amount', a: ['1 base in 1 gene'], b: ['a whole chromosome: hundreds of genes'], atA: 'base', atB: 'adds'},
	{h: 'effect', a: ['one amino acid in one protein (Glu to Val):', 'haemoglobin forms fibres, cells sickle'], b: ['normal genes, extra dosage:', 'many body systems'], atA: 'amino', atB: 'hundreds'},
];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const W = TW.reduce((a, b) => a + b, 0);
	const rowY = [520, 610, 700];
	const tO = prog(f, KD.both - 4, 12);
	return (
		<>
			<Heading text="Compare cause, amount and effect" at={4} size={50} />
			<Overlay>
				<CardBox x={100} y={176} w={1720} h={176} at={-100} />
				<QText q={Q2(ALL2, [{phrase: 'single base substitution', at: KD.copying}, {phrase: 'extra copy of chromosome 21', at: KD.tri}])} x={140} y={222} w={2640} size={40} card={false} s={0.62} />
				<g opacity={tO}>
					<rect x={TX[0]} y={380} width={W} height={440} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
					<rect x={TX[0]} y={380} width={W} height={56} rx={18} fill="#efe6d4" />
					<Sx x={TX[1] + 20} y={418} text="sickle cell (substitution)" size={30} color={INK} weight={700} />
					<Sx x={TX[2] + 20} y={418} text="Down syndrome (trisomy 21)" size={30} color={INK} weight={700} />
					{[490, 580, 670].map(y => <line key={y} x1={TX[0] + 10} y1={y} x2={TX[0] + W - 10} y2={y} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />)}
				</g>
				<Sx x={TX[0] + 20} y={470} text="similarity: both change the DNA and the phenotype" size={32} color={INK} weight={600} at={KD.both} />
				{TROWS.map((r, i) => (
					<g key={i}>
						<Sx x={TX[0] + 20} y={rowY[i] + 26} text={r.h} size={32} color={INK_SOFT} hand at={KD[r.atA]} />
						{r.a.map((t, k) => <Sx key={'a' + k} x={TX[1] + 20} y={rowY[i] + 26 + k * 40} text={t} size={30} color={AMBER_INK} hand at={KD[r.atA] + 4 + k * 6} />)}
						{r.b.map((t, k) => <Sx key={'b' + k} x={TX[2] + 20} y={rowY[i] + 26 + k * 40} text={t} size={30} color={AMBER_INK} hand at={KD[r.atB] + 4 + k * 6} />)}
					</g>
				))}
				<MistakeChip x={140} y={880} text="the genes on the extra chromosome are faulty" at={KD.saying} cross={KD.mistake} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question shows', compare: 'compare it with the normal one', is: 'Is a segment missing', moved: 'reversed or moved', then: 'Then say what that does', whole: 'For a whole extra', next: 'Next, which of these'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const PX = [110, 700, 1290], PY = 220, PW = 520, PH = 500;
	const steps = [
		{at: KE.compare, l: ['1. compare gene by gene:', 'missing, doubled,', 'reversed, moved?']},
		{at: KE.moved + 30, l: ['2. check the other', 'chromosome too']},
		{at: KE.then, l: ['3. effect: copy number,', 'or a broken or', 'moved gene']},
	];
	const icon = (labels: string[], x: number, y: number, mod?: (s: Seg, i: number) => Seg, tone?: 'blue') => { const Lx = lay(labels, x, 22, 12, tone ?? 'n'); return <Bar segs={mod ? Lx.segs.map(mod) : Lx.segs} cen={Lx.cen} cenTone={tone ?? 'n'} y={y} gw={22} h={22} size={13} />; };
	return (
		<>
			<Heading text="Read a chromosome diagram" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<CardBox x={PX[i]} y={PY} w={PW} h={PH} at={-100} stroke={AMBER} sw={3.5} />
						{s.l.map((l, k) => <Sx key={k} x={PX[i] + 30} y={PY + 62 + k * 50} text={l} size={42} color={INK} hand />)}
						{i < 2 ? <CurveArrow a={[PX[i] + PW + 10, PY + PH / 2]} b={[PX[i + 1] - 10, PY + PH / 2]} at={steps[i + 1].at - 4} bow={0} color={AMBER_INK} width={6} /> : null}
					</g>
				))}
				<g opacity={prog(f, KE.is, 14)}>
					{icon(CHR1, PX[0] + 40, PY + 250, s => (s.l === 'C' || s.l === 'D' ? {...s, dashed: true} : s))}
					{icon(['A', 'B', '●', 'C', 'D', 'C', 'D', 'E', 'F'], PX[0] + 40, PY + 310, (s, i) => (i === 4 || i === 5 ? {...s, tone: 'amber'} : s))}
					{icon(['A', 'B', '●', 'C', 'D', 'G', 'F', 'E', 'H'], PX[0] + 40, PY + 370, s => ('GFE'.includes(s.l) ? {...s, tone: 'amber'} : s))}
					{icon(['A', 'B', '●', 'C', 'D', 'E', 'F', 'P', 'Q'], PX[0] + 40, PY + 430, s => (s.l === 'P' || s.l === 'Q' ? {...s, tone: 'amber'} : s))}
				</g>
				<g opacity={prog(f, KE.moved + 40, 14)}>
					{icon(['A', 'B', '●', 'C', 'D', 'E', 'F', 'P', 'Q'], PX[1] + 60, PY + 260, s => (s.l === 'P' || s.l === 'Q' ? {...s, tone: 'amber'} : s))}
					{icon(['M', 'N', '●', 'O', 'G', 'H'], PX[1] + 60, PY + 380, s => (s.l === 'G' || s.l === 'H' ? {...s, tone: 'amber'} : s), 'blue')}
					<CurveArrow a={[PX[1] + 300, PY + 270]} b={[PX[1] + 200, PY + 370]} at={KE.moved + 46} bow={-30} color={AMBER_INK} width={4} dash="7 6" />
				</g>
				<g opacity={prog(f, KE.then + 20, 14)}>
					<DoseBar x={PX[2] + 80} y={PY + 330} w={40} h={50} label="2" size={24} />
					<DoseBar x={PX[2] + 140} y={PY + 330} w={40} h={75} amber label="3" size={24} />
				</g>
				<g opacity={prog(f, KE.whole, 14)}>
					{[0, 1, 2].map(k => <KChrom key={k} x={PX[2] + 300 + k * 26} y={PY + 330} i={20} sc={1.4} w={16} amber />)}
					<Sx x={PX[2] + 30} y={PY + 430} text="whole chromosome?" size={30} color={AMBER_INK} hand />
					<Sx x={PX[2] + 30} y={PY + 468} text="nondisjunction, dosage" size={30} color={AMBER_INK} hand />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={980} y={800} w={840} h={170} at={-100} stroke={AMBER} sw={3.5} />
					<PlateB p={PLATES.dish} cx={1080} cy={885} w={wForH(PLATES.dish, 130)} />
					<Sx x={1200} y={898} text="Next: which mutations are inherited?" size={38} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Chromosomal mutation: a change in chromosome structure or number. It can affect many genes at once; large ones are visible on a karyotype.',
	'Structure: deletion (segment lost), duplication (segment repeated; extra gene dosage), inversion (segment reversed), translocation (segment moved to a non-matching chromosome). Causes: breaks rejoined wrongly (e.g. ionising radiation) and unequal crossing over.',
	'Balanced inversions and translocations keep every gene, so carriers are often healthy, but breakpoints can disrupt genes, and a carrier\'s gametes can be unbalanced.',
	'Number: nondisjunction in meiosis gives gametes with an extra or missing chromosome. Trisomy 21 (47 chromosomes) causes Down syndrome: normal genes, extra dosage.',
	'Point mutation: one gene\'s base sequence changes. Chromosomal mutation: the number, order or position of many genes changes. The effect depends on which genes are affected, not size alone.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="A chromosome is a book. Deletion: chapter lost. Duplication: printed twice. Inversion: back to front. Translocation: moved to another book. Nondisjunction: fail to dis-join." tag="chromosomal mutations: what changes, and how it compares with a point mutation" size={28} aidTop={770} />
);
