// B8-14 scenes 11a to 13: question 1 (two SMA carriers) with the nerve-cell and embryo plates and its givens; its brief
// feedback (givens underlined, a letters-only Punnett grid, answer lines, framed answer, crossed slip); question 2
// (Huntington's disease) with the brain plate and its givens; its feedback (the find-early chain with no treatment,
// answer lines, framed answer, crossed slip); the decision rule (find, choose, change; what's prevented; one limit) with
// the handoff to hearing loss; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER_INK, AnsBox, BLUE, Box, CARD, Chain2, Chip, Framed, GREEN, GTag, HscTag, INK, JobsBar, Mistake, Pause, Pic, PicH, PreRing, Prevented, Punnett, QPart, Svg, Sx, Title, marksCheck, prog,
} from './parts';
import type {QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 11a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: two carriers of SMA" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q1_DEM} x={126} y={470} w={1150} size={46} />
		<Pic p={PL.neuron} cx={1580} cy={250} w={440} />
		<Sx x={1580} y={360} text="SMA affects nerve cells" size={30} color={INK} anchor="middle" hand at={ON} />
		<Chip x={1350} y={400} text="carrier" size={32} color={AMBER_INK} ink={INK} />
		<Sx x={1530} y={432} text="+" size={40} color={INK} anchor="middle" weight={800} at={ON} />
		<Chip x={1570} y={400} text="carrier" size={32} color={AMBER_INK} ink={INK} />
		<GTag x={1350} y={470} text="autosomal recessive" size={30} />
		<PicH p={PL.blast} cx={1580} cy={640} h={150} />
		<Sx x={1580} y={746} text="PGT: an IVF embryo" size={30} color={INK} anchor="middle" hand at={ON} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 11b. feedback one ----------
const KB = K('feedback-one', {one: 'One in', each: 'each carrier', pgt: 'With PGT', tested: 'tested for', only: 'only an', no: 'No DNA', sel: 'selection', classic: 'classic mistake', writing: 'writing that'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [
	{phrase: 'both members of a couple carry a variant', at: KB.one},
	{phrase: 'autosomal recessive', at: KB.one + 8},
	{phrase: 'preimplantation genetic testing (PGT)', at: KB.pgt},
]);
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="Feedback: 1 in 4, then selection" />
			<HscTag />
			<Box x={40} y={150} w={700} h={890} />
			<QPart blocks={Q1_STEM} marks={M_B} x={62} y={212} w={656} size={34} />
			<QPart blocks={Q1_DEM} marks={M_B} x={62} y={440} w={656} size={34} />
			<PicH p={PL.blast} cx={390} cy={870} h={220} />
			<Punnett x={790} y={160} cell={74} at={KB.one} circle={KB.each} />
			<GTag x={1030} y={190} text="a = SMA variant" size={28} at={KB.one + 10} />
			<PicH p={PL.blast} cx={1450} cy={300} h={150} />
			<PicH p={PL.blast} cx={1650} cy={300} h={150} />
			<Chip x={1450} y={386} text="variant" size={26} color={AMBER_INK} ink={AMBER_INK} anchor="middle" at={KB.tested} />
			<Chip x={1650} y={386} text="unaffected" size={26} color={GREEN} ink={GREEN} anchor="middle" at={KB.tested + 8} />
			{prog(f, KB.only, 12) > 0.01 ? <path opacity={prog(f, KB.only, 12)} d="M1700,232 l14,16 l30,-38" fill="none" stroke={GREEN} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" /> : null}
			<AnsBox x={780} y={450} w={1044} h={300} label="answer" size={44} sizeOld={34} lines={[
				{t: '(a) 1 in 4 (25%) each pregnancy', at: KB.one + 20},
				{t: '(b) IVF embryos tested for the known SMA variant', at: KB.tested},
				{t: 'only an unaffected embryo is transferred', at: KB.only},
				{t: 'no DNA altered: selection, not engineering', at: KB.no},
			]} />
			<Framed x={780} y={824} text="selection, not engineering" at={KB.sel} size={46} />
			<Mistake x={780} y={866} text="PGT removes the faulty gene" size={40} at={KB.classic} cross={KB.writing} note="it chooses; it doesn't change" noteW={1040} />
		</Svg>
	);
};

// ---------- 11c. question 2 ----------
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: Huntington's disease" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q2_DEM} x={126} y={470} w={1150} size={46} />
		<PicH p={PL.brain} cx={1580} cy={320} h={240} />
		<GTag x={1340} y={490} text="single dominant allele" size={30} />
		<GTag x={1340} y={550} text="symptoms in adulthood" size={30} />
		<GTag x={1340} y={610} text="no treatment prevents them" size={30} />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={862} cx={1745} cy={938} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={938} r={46} />
	</Svg>
);

// ---------- 11d. feedback two ----------
const KD = K('feedback-two', {screening: 'Screening only', early: 'early treatment', none: 'has none', pgt: 'PGT can', select: 'select embryos', birth: 'affected birth', ivf: 'needs IVF', some: 'some families', classic: 'classic mistake', claiming: 'claiming gene'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [
	{phrase: 'no current treatment prevents them', at: KD.early},
	{phrase: 'a single dominant allele', at: KD.select},
]);
export const SceneFeedbackTwo: React.FC = () => (
	<Svg>
		<Title text="Feedback: found, not prevented" />
		<HscTag />
		<Box x={40} y={150} w={700} h={890} />
		<QPart blocks={Q2_STEM} marks={M_D} x={62} y={212} w={656} size={34} />
		<QPart blocks={Q2_DEM} marks={M_D} x={62} y={440} w={656} size={34} />
		<PicH p={PL.brain} cx={390} cy={860} h={220} />
		<Chain2 x={780} y={160} w={300} at={KD.screening} empty={KD.none} />
		<PicH p={PL.blast} cx={1700} cy={215} h={120} />
		<AnsBox x={780} y={310} w={1044} h={440} label="answer" size={44} sizeOld={34} lines={[
			{t: '(a) screening needs an early treatment; none exists, so it is found, not prevented', at: KD.none},
			{t: '(b) PGT selects embryos without the allele: an affected birth is prevented', at: KD.birth},
			{t: 'limits: IVF, cost, ethical questions', at: KD.ivf},
			{t: 'useful for some families, not most', at: KD.some},
		]} />
		<Framed x={780} y={824} text="helps some families, not most" at={KD.some + 20} size={46} />
		<Mistake x={780} y={866} text="gene therapy can now cure Huntington's" size={38} at={KD.classic} cross={KD.claiming} note="not currently" noteW={1040} />
	</Svg>
);

// ---------- 12. decision rule ----------
const KR = K('decision-rule', {name: 'name the', find: 'find', choose: 'choose', change: 'change', say: 'say exactly', symptoms: 'symptoms', birth: 'affected birth', gene: 'gene itself', limit: 'one limit', biology: 'biology', access: 'access', ethics: 'ethics', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const next = prog(f, KR.next, 14);
	return (
		<Svg>
			<Title text="For any genetic prevention question" />
			<Sx x={96} y={220} text="1. name the job" size={40} color={INK} hand at={KR.name} />
			<JobsBar x={318} y={250} w={420} size={52} lit={[KR.find, KR.choose, KR.change]} />
			<PicH p={PL.card} cx={528} cy={440} h={110} />
			<PicH p={PL.blast} cx={960} cy={440} h={140} />
			<PicH p={PL.helix} cx={1392} cy={440} h={160} />
			<Sx x={96} y={600} text="2. say exactly what's prevented" size={40} color={INK} hand at={KR.say} />
			<Prevented y={630} title={false} slots={[{at: KR.symptoms, color: 'green', note: 'PKU diet'}, {at: KR.birth, color: 'green', note: 'PGT'}, {at: KR.gene, color: 'red', note: 'prohibited (germline)'}]} />
			<Sx x={96} y={830} text="3. give one limit" size={40} color={INK} hand at={KR.limit} />
			<Chip x={96} y={850} text="biology" size={34} color={AMBER_INK} ink={INK} at={KR.biology} />
			<Chip x={260} y={850} text="access" size={34} color={AMBER_INK} ink={INK} at={KR.access} />
			<Chip x={410} y={850} text="ethics" size={34} color={AMBER_INK} ink={INK} at={KR.ethics} />
			<g opacity={next}>
				<rect x={900} y={860} width={924} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.ear} cx={990} cy={925} h={100} />
				<Sx x={1070} y={938} text="Next: How can technology assist hearing loss?" size={36} color={INK} hand at={ON} />
			</g>
			{void BLUE}
		</Svg>
	);
};

// ---------- 13. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={44} aidTop={690} tag="genetic prevention" aid="Find, choose, change, then ask what's prevented." notes={[
		'Three jobs: screening finds, PGT chooses, engineering changes genes.',
		'PKU: found early, a low-phenylalanine diet prevents the brain damage.',
		'The alleles stay and can be passed on: phenotype, not genotype.',
		'Two carriers: 1 in 4 each pregnancy. PGT selects; no DNA is changed.',
		'Gene therapy treats one person; germline editing is prohibited here.',
	]} />
);
