// M6 B12 scenes 10a to 12: two unseen exam items (explain how a herbicide-tolerant crop could reduce a wild relative's
// genetic diversity; evaluate a modified American chestnut program), each kept whole on screen through "Pause here to
// answer." and its 10 s countdown; brief feedback with the givens underlined as they are used and one crossed classic
// mistake (no givens card). Then the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {Brace, GreyCross} from '../bio-m6-b07/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, Balance, CARD, Cell, FieldHalf, GREYT, GREY_INK, INK, INK_SOFT, PLATES, Pill, Pl, Rg, Strip, lerp, prog, smooth} from './parts';
import type {RK} from './parts';

const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1680, cy = 840}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text={label} size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);

// ---------- item 1: gene flow into a wild relative ----------
type T1 = {a: number; b: number; c: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'A crop plant has been genetically modified to tolerate a herbicide (weedkiller).', at: t.a},
	{text: 'The crop is grown beside a small population of a wild relative that can cross-pollinate with it.', at: t.b},
	{text: 'Farmers spray the herbicide along the field edges, where the wild plants grow.', at: t.c},
] as QBlock[];
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), {text: 'Explain how this could reduce the genetic diversity of the wild population. (4 marks)', at: t.d, para: true, weight: 700}], marks);
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck(STEM1(t), marks);
const MARKS1 = ['can cross-pollinate with it', 'spray the herbicide along the field edges', 'small population'];
qCheck(STRIP1({a: 0, b: 0, c: 0, d: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', crop: 'A crop has been modified', grows: 'It grows beside', farmers: 'and farmers spray', explain: 'Explain how', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => (
	<>
		<Heading text="Exam question 1" at={KA.two} size={50} />
		<Overlay>
			<HscTag at={KA.two} />
			<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
			<QText q={Q1({a: KA.crop, b: KA.grows, c: KA.farmers, d: KA.explain})} x={140} y={252} w={1640} size={38} card={false} />
			<AnsBox x={140} y={540} w={1320} h={450} at={KA.explain + 20} label="answer" />
			<PauseHold id="attempt" at={KA.pause} cy={800} />
		</Overlay>
	</>
);

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {pollen: 'Pollen carries', flow: 'gene flow', where: 'Where the weedkiller', survive: 'survive and breed', common: 'common', replace: 'replace many local', swamp: 'swamp', dilute: 'diluting', saying: 'Saying', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100};
const WILD0: RK[] = ['A', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'C', 'A', 'D', 'B'];
const DIE = [1, 2, 3, 5, 7, 9, 10];
const REFILL = [1, 3, 5, 9];
const SWAMP = [4, 6, 8, 11];
const wildPos = (i: number): [number, number] => [1170 + (i % 4) * 80, 470 + Math.floor(i / 4) * 80];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const sprayT = prog(f, KB.survive - 20, 40, x => x);
	const ringState = (i: number): {k: RK; o: number} => {
		if (i === 0) return {k: f >= KB.flow + 30 ? 'new' : WILD0[0], o: 1};
		if (SWAMP.includes(i) && f >= KB.swamp + 20 + SWAMP.indexOf(i) * 6) return {k: 'new', o: 1};
		if (DIE.includes(i)) {
			if (REFILL.includes(i) && f >= KB.common + REFILL.indexOf(i) * 5) return {k: 'new', o: 1};
			if (f >= KB.survive + 10) return {k: f >= KB.common + 20 ? 'A' : 'ghost', o: f >= KB.common + 20 ? prog(f, KB.common + 20, 10) : 1};
		}
		return {k: WILD0[i], o: 1};
	};
	return (
		<>
			<Heading text="How the wild gene pool narrows" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={130} at={-100} />
				<QText q={STRIP1(ALL1, [{phrase: MARKS1[0], at: KB.flow + 6}, {phrase: MARKS1[1], at: KB.survive}, {phrase: MARKS1[2], at: KB.swamp + 6}])} x={140} y={230} w={2440} size={36} card={false} s={0.66} />
				{/* the crop and the wild population's gene pool */}
				<FieldHalf side="L" x={480} y={560} w={760} id="b12-fb1-crop" />
				<Sx x={480} y={720} text="herbicide-tolerant crop" size={28} color={GREY_INK} hand anchor="middle" />
				<rect x={1080} y={420} width={420} height={260} rx={22} fill="#eef4f9" stroke="#8ba9c4" strokeWidth={3} />
				<Sx x={1290} y={720} text="wild population: its alleles" size={28} color={GREY_INK} hand anchor="middle" />
				<Sx x={1290} y={752} text="amber ring: the tolerance allele" size={24} color={GREY_INK} hand anchor="middle" at={KB.flow + 30} />
				{WILD0.map((_, i) => {
					const st = ringState(i);
					const [x, y] = wildPos(i);
					return <Rg key={i} x={x} y={y} r={18} k={st.k} o={st.o} />;
				})}
				{/* pollen drifting from the crop into the wild plants */}
				{Array.from({length: 7}, (_, k) => {
					const t = smooth(prog(f, KB.pollen + 10 + k * 8, 50));
					return <circle key={k} cx={lerp(700, 1170, t)} cy={lerp(520 + (k % 3) * 20, 470, t) - Math.sin(t * Math.PI) * 60} r={7} fill="#f3d27a" stroke={AMBER_INK} strokeWidth={2} opacity={prog(f, KB.pollen + 10 + k * 8, 6) * (1 - prog(f, KB.pollen + 50 + k * 8, 10))} />;
				})}
				{/* spray along the field edge, over the wild plants */}
				{sprayT > 0 && sprayT < 1.1 ? Array.from({length: 26}, (_, i) => {
					const x = lerp(1080, 1500, sprayT) - ((i * 0.618) % 1) * 200;
					return x > 1080 && x < 1500 ? <circle key={i} cx={x} cy={430 + ((i * 0.37) % 1) * 240} r={4} fill="#9db7c9" opacity={0.8 * (1 - prog(f, KB.survive + 30, 10))} /> : null;
				}) : null}
				{/* more crop alleles flowing in (swamping) */}
				{Array.from({length: 4}, (_, k) => {
					const t = smooth(prog(f, KB.swamp + k * 6, 26));
					return <Rg key={k} x={lerp(760, wildPos(SWAMP[k])[0], t)} y={lerp(560, wildPos(SWAMP[k])[1], t)} r={14} k="new" o={prog(f, KB.swamp + k * 6, 6) * (1 - prog(f, KB.swamp + 20 + k * 6, 6))} />;
				})}
				<Pill x={960} y={780} text="gene flow by pollen" anchor="middle" size={36} o={prog(f, KB.flow, 12) * (1 - prog(f, KB.where, 10))} />
				<Pill x={960} y={780} text="selection: tolerance becomes common" anchor="middle" size={36} o={prog(f, KB.common, 12) * (1 - prog(f, KB.swamp, 10))} />
				<Pill x={960} y={780} text="local alleles lost" anchor="middle" size={36} o={prog(f, KB.dilute, 12)} />
				<MistakeChip x={140} y={900} text="a crop's genes can't reach a different population" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.replace}{void CARD}
			</Overlay>
		</>
	);
};

// ---------- item 2: the American chestnut ----------
type T2 = {a: number; b: number; c: number; d: number; e: number};
const STEM2 = (t: T2) => [
	{text: 'American chestnut trees were once common in forests across eastern North America.', at: t.a},
	{text: 'In the early twentieth century, a fungal disease (chestnut blight) killed billions of them.', at: t.b},
	{text: 'Wild chestnuts survive, mostly as small shoots growing from old roots.', at: t.c},
	{text: 'Scientists have proposed planting chestnut trees genetically modified with a gene that gives resistance to the fungus, crossed with surviving wild chestnuts.', at: t.d},
] as QBlock[];
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([...STEM2(t), {text: 'Evaluate the claim that this program will improve biodiversity. (5 marks)', at: t.e, para: true, weight: 700}], marks);
const S2 = (t: T2, marks: QMark[] = []) => qCheck(STEM2(t), marks);
const MARKS2 = ['were once common', 'killed billions', 'crossed with surviving wild chestnuts'];
qCheck(S2({a: 0, b: 0, c: 0, d: 0, e: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', early: 'In the early twentieth', fungal: 'a fungal disease', killed: 'killed billions', sci: 'Scientists propose', crossed: 'crossed with surviving', evaluate: 'Evaluate the claim', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={830} at={KC.early - 6} />
				<Pl p={PLATES.chestnut} cx={1690} cy={300} w={190} o={prog(f, KC.early, 14)} />
				<QText q={Q2({a: KC.early, b: KC.fungal, c: KC.killed + 40, d: KC.sci, e: KC.evaluate})} x={140} y={250} w={1420} size={34} card={false} />
				<AnsBox x={140} y={650} w={1320} h={340} at={KC.evaluate + 20} label="answer" />
				<PauseHold id="attempt-two" at={KC.pause} cy={820} />
			</Overlay>
		</>
	);
};

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {species: 'Species level', gen: 'Genetic level', few: 'a few clones', eco: 'Ecosystem level', partly: 'partly supported', saying: 'Saying it saves', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, e: -100};
const MINI = [{key: 'ecosystem', y0: 380}, {key: 'species', y0: 490}, {key: 'genetic', y0: 600}];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const rowAt = [KD.eco, KD.species, KD.gen];
	return (
		<>
			<Heading text="Level by level" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={150} at={-100} />
				<QText q={S2(ALL2, [{phrase: MARKS2[0], at: KD.species + 10}, {phrase: MARKS2[1], at: KD.species + 24}, {phrase: MARKS2[2], at: KD.gen + 10}])} x={140} y={228} w={2500} size={36} card={false} s={0.64} />
				{/* a small levels board with one column */}
				{MINI.map((r, i) => (
					<g key={i}>
						<rect x={140} y={r.y0} width={980} height={100} rx={16} fill={CARD} stroke={f >= rowAt[i] ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={f >= rowAt[i] ? 3 : 2.5} />
						<Sx x={164} y={r.y0 + 60} text={r.key} size={32} color={f >= rowAt[i] ? INK : GREY_INK} weight={800} />
					</g>
				))}
				<g opacity={prog(f, 4, 12)}>
					<rect x={1150} y={392} width={540} height={46} rx={23} fill="#fff6e3" stroke={AMBER} strokeWidth={2.5} />
					<Sx x={1420} y={424} text="compared with: forests without chestnuts" size={24} color={INK} hand anchor="middle" />
				</g>
				<MiniCell y0={490} kind="up" text="a once-common tree returns" at={KD.species + 30} />
				<MiniCell y0={600} kind="up" text="keeps alleles, if crossed widely" at={KD.gen + 30} />
				<MiniCell y0={380} kind="q" text="food tree back; other effects uncertain" at={KD.eco + 20} />
				{/* a few clones: one repeated ring pattern, crossed */}
				<g opacity={prog(f, KD.few, 12)}>
					{[0, 1, 2].map(k => (
						<g key={k}>
							<Strip cx={1220 + k * 120} y={640} n={4} pitch={20} gap={22} />
							<Rg x={1205 + k * 120} y={616} r={9} k="A" /><Rg x={1240 + k * 120} y={616} r={9} k="C" />
						</g>
					))}
					<Sx x={1340} y={710} text="a few clones: narrow" size={26} color={GREY_INK} hand anchor="middle" />
				</g>
				<GreyCross x={1340} y={640} at={KD.few + 16} s={40} />
				<g opacity={prog(f, KD.partly, 12)}>
					<rect x={140} y={725} width={1680} height={130} rx={22} fill="#fff3d9" stroke={AMBER} strokeWidth={4} />
					<Sx x={170} y={778} text="Verdict: partly supported." size={40} color={INK} hand />
					<Sx x={170} y={830} text="species: likely gain; genetic: a gain only if bred widely; ecosystem: uncertain" size={34} color={INK} hand />
				</g>
				<MistakeChip x={140} y={890} text="it saves a species, so every level improves" at={KD.saying} cross={KD.mistake} size={32} />
				{void Cell}{void GREYT}
			</Overlay>
		</>
	);
};
const MiniCell: React.FC<{y0: number; kind: 'up' | 'q'; text: string; at: number}> = ({y0, kind, text, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{kind === 'up' ? (
				<g transform={`translate(420,${y0 + 50}) scale(0.8)`}>
					<line x1={0} y1={26} x2={0} y2={-24} stroke="#2f8a5b" strokeWidth={9} strokeLinecap="round" />
					<path d="M-18,-6 L0,-28 L18,-6" fill="none" stroke="#2f8a5b" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
				</g>
			) : <Sx x={420} y={y0 + 68} text="?" size={52} color={GREY_INK} weight={800} anchor="middle" />}
			<Sx x={470} y={y0 + 60} text={text} size={32} color={INK} hand />
		</g>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', name: 'name the case and the baseline', alleles: 'alleles in the gene pool', species: 'species in the area', habitats: 'habitats across the region', which: 'which way', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.name, t: 'case + baseline (compared with what?)'},
		{at: KE.alleles, t: 'genetic: alleles in the gene pool'},
		{at: KE.species, t: 'species: species in the area'},
		{at: KE.habitats, t: 'ecosystem: habitats across the region'},
	];
	return (
		<>
			<Heading text="How does it change biodiversity?" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<rect x={140} y={225 + i * 125} width={1180} height={98} rx={22} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<Sx x={190} y={290 + i * 125} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} />
						<Sx x={250} y={290 + i * 125} text={s.t} size={44} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.which, 12)}>
					<path d="M1350,355 L1380,355 L1380,690 L1350,690" fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
					<Sx x={1400} y={535} text="which way, and why?" size={42} color={AMBER_INK} hand />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={830} width={1120} height={120} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Balance x={780} y={890} />
					<Sx x={860} y={905} text="Next: weighing benefits against biodiversity risks" size={36} color={INK} hand />
				</g>
				{void Brace}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Biodiversity has three levels: genetic (variety of alleles in a population or species), species (variety of species in an area) and ecosystem (variety of habitats and communities across a region). A technique can raise one level and lower another. Yield is not a level of biodiversity.',
	'An effect is a change from a baseline: say what you are comparing with (for example, sprayed conventional crops, or the habitat before farming).',
	'Relying on one variety or clone narrows a crop\'s genetic diversity, so one disease can affect every plant (Cavendish and TR4). A disease-resistant modified Cavendish (QCAV-4, approved 2024) protects the crop but is still one clone.',
	'Crop biotechnology can raise species diversity in fields (fewer insecticide sprays with Bt cotton) or lower it (whole-field herbicide leaves fewer weeds and wildflowers for insects than fields where some weeds survive). Higher yields could spare land only if it is protected.',
	'Conservation: northern white rhino embryos from one female\'s eggs and banked sperm could save the subspecies but start a genetic bottleneck; gametes from banked cells of more rhinos could widen the gene pool.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="The banana problem returns. Which level? Compared with what?" tag="trace genetic, species and ecosystem effects separately, each against a named baseline" size={27} aidTop={810} />
);
