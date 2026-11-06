// M8 B06 scenes 11a to 13: two worded attempts (the whole card from the first frame and through the countdown), brief
// feedback with the givens underlined in a readable left column, the answer rows, a framed answer and one crossed classic
// mistake each (feedback 2 traces FH through the liver and heart plates on the cause chain), the decision rule and handoff
// (three steps; the four group plates; next: environmental exposure) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {P, hold, sc} from './common';
import {
	CAN, Card, Chain, ENV, Framed, GEN, GREYC, GroupTab, INK, INK_SOFT, KeyNotesBoard, LDLFlow, MistakeX, NAVY, NUT, PATH, PauseHold, PicF, PicV, Pill, QText, Sx, TaskLine, Wr, plPt, plW, prog, qCheck,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const AMBU = '#c9781a';

// ---------- 11a. Attempt one ----------
const A1 = 'attempt';
const K11a = cues(sc(A1), {two: 'Two exam', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'Condition 1, goitre: the thyroid gland enlarges when the diet contains too little iodine, which the thyroid needs to make the hormone thyroxine.', at: 0},
	{text: "Condition 2, Huntington's disease: one altered copy of the HTT gene leads to a harmful protein that damages brain cells.", at: 0, para: true},
	{text: 'Condition 3, cervical cancer: cells of the cervix divide out of control after a long-lasting human papillomavirus (HPV) infection.', at: 0, para: true},
	{text: '(a) Classify each condition as genetic, environmental, nutritional or cancer. (2 marks)', at: 0, para: true, weight: 700},
	{text: '(b) A student says cervical cancer is an infectious disease because a virus is involved. Explain why the student is incorrect. (2 marks)', at: 0, para: true, weight: 700},
] as QBlock[], marks);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Two exam questions: first" at={0} />
		<QTag />
		<rect x={100} y={185} width={1720} height={650} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<QText q={Q1()} x={140} y={256} w={1640} size={36} card={false} />
		<PauseHold h={hold(A1)} at={K11a.pause} x={140} y={940} cx={1640} cy={930} />
		{void K11a.two}
	</svg>
);

// ---------- 11b. Feedback one ----------
const K11b = cues(sc('feedback-one'), {goitre: 'Goitre is', iodine: 'too little iodine', hunt: "Huntington's is", altered: 'altered gene', cerv: 'Cervical cancer', trigger: 'trigger', virus: 'The virus', itself: 'cancer itself', classic: 'classic mistake', involved: 'involved', classify: 'Classify the'});
export const SceneFeedback1: React.FC = () => {
	const AX = 1000;
	const rows: [string, string, number][] = [
		['1  goitre: nutritional', '(too little iodine)', K11b.goitre],
		["2  Huntington's: genetic", '(gene → harmful protein)', K11b.hunt],
		['3  cervical cancer: cancer', '(cells divide out of control)', K11b.cerv],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Classify the disease, then its trigger" at={0} size={54} />
			<GroupTab lit={3} litAt={K11b.cerv} x={1180} y={186} size={24} />
			<rect x={96} y={185} width={870} height={860} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<QText q={Q1([
				{phrase: 'too little iodine', at: K11b.iodine, color: NUT},
				{phrase: 'one altered copy of the HTT gene', at: K11b.hunt + 10, color: GEN},
				{phrase: 'divide out of control', at: K11b.cerv + 10, color: CAN},
				{phrase: 'after a long-lasting human papillomavirus (HPV) infection.', at: K11b.trigger, color: PATH},
			])} x={124} y={240} w={810} size={29} card={false} />
			{rows.map(([a, b, at], i) => (
				<g key={i}>
					<Wr x={AX} y={320 + i * 110} text={a} at={at} size={40} color={INK} weight={800} />
					<Wr x={AX + 50} y={362 + i * 110} text={b} at={at + 18} size={32} color={INK} weight={600} />
				</g>
			))}
			<Pill x={AX + 560} y={510} text="trigger: infection" at={K11b.trigger} color={PATH} size={28} />
			<Wr x={AX} y={640} text="(b) HPV: an infectious trigger that" at={K11b.trigger} size={36} color={PATH} weight={800} />
			<Wr x={AX} y={684} text="can pass between people" at={K11b.virus} size={36} color={PATH} weight={800} />
			<Wr x={AX} y={740} text="the cancer cells can't infect anyone:" at={K11b.itself - 10} size={36} color={INK} weight={800} />
			<Wr x={AX} y={784} text="the cancer is non-infectious" at={K11b.itself + 10} size={36} color={INK} weight={800} />
			<MistakeX x={AX} y={830} text="a virus is involved, so it's infectious" at={K11b.classic} cross={K11b.involved + 12} note="classify the disease, then its trigger" size={30} />
			<Framed x={AX} y={1030} text="cancer, with an infectious trigger" at={K11b.classify} size={38} color={CAN} />
		</svg>
	);
};

// ---------- 11c. Attempt two ----------
const A2 = 'attempt-two';
const K11c = cues(sc(A2), {second: 'Second', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: 'Familial hypercholesterolaemia (FH) is caused by an altered LDLR gene. Normally, the LDLR gene codes for a receptor protein on the surface of liver cells. The receptor binds LDL cholesterol in the blood and takes it into the liver cell.', at: 0},
	{text: 'Explain how an altered LDLR gene can lead to heart disease. (3 marks)', at: 0, para: true, weight: 700},
] as QBlock[], marks);
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Second question" at={0} />
		<QTag />
		<rect x={100} y={185} width={1720} height={470} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<QText q={Q2()} x={140} y={256} w={1220} size={38} card={false} />
		<PicF p={P.liver} x={1400} y={250} h={260} />
		<Sx x={1400 + plW(P.liver, 260) / 2} y={560} text="liver" size={34} color={INK} anchor="middle" hand weight={700} at={-1000} />
		<PauseHold h={hold(A2)} at={K11c.pause} x={140} y={760} cx={1700} cy={740} />
		<Chain y={880} o={0.55} />
		{void K11c.second}
	</svg>
);

// ---------- 11d. Feedback two ----------
const K11d = cues(sc('feedback-two'), {fewer: 'fewer working', removes: 'removes less', blood: 'blood', years: 'Over years', heart: 'heart', thats: "That's gene", classic: 'classic mistake', fatty: 'fatty food', diet: 'Diet can', gene: ['gene', 3]});
export const SceneFeedback2: React.FC = () => {
	const LV = {x: 1000, y: 230, h: 230}, HT = {x: 1530, y: 200, h: 320};
	const lw = plW(P.liver, LV.h);
	const liverC: [number, number] = [LV.x + lw * 0.45, LV.y + LV.h * 0.5];
	const arts = ([[900, 1000], [1150, 950], [1100, 1300], [980, 1150]] as [number, number][]).map(n => plPt(P.heart, HT.x, HT.y, HT.h, n));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Gene, protein, cells, body" at={0} />
			<rect x={96} y={185} width={860} height={420} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<QText q={Q2([
				{phrase: 'altered LDLR gene.', at: K11d.fewer - 20, color: GEN},
				{phrase: 'receptor protein on the surface of liver cells.', at: K11d.fewer, color: GEN},
				{phrase: 'takes it into the liver cell.', at: K11d.removes, color: NUT},
			])} x={124} y={244} w={800} size={31} card={false} />
			<PicF p={P.liver} x={LV.x} y={LV.y} h={LV.h} />
			<Sx x={LV.x + lw / 2} y={LV.y + LV.h + 44} text="liver: fewer receptors" size={32} color={INK} anchor="middle" weight={800} at={K11d.fewer} />
			<PicV p={P.heart} x={HT.x} y={HT.y} h={HT.h} at={K11d.heart - 30} />
			<Sx x={HT.x + plW(P.heart, HT.h) / 2} y={HT.y + HT.h + 44} text="narrowed arteries" size={32} color="#a3271a" anchor="middle" weight={800} at={K11d.heart + 10} />
			<LDLFlow src={[LV.x + lw + 200, LV.y + 60]} liver={liverC} gather={[LV.x + lw + 110, LV.y + LV.h * 0.5]} targets={arts} at={0} stop={K11d.removes} drift={K11d.years} />
			<Pill x={LV.x + lw + 40} y={LV.y - 40} text="LDL" at={0} color={AMBU} size={28} />
			<Framed x={1000} y={640} text="gene → protein → cells → body" at={K11d.thats} size={40} color={NAVY} />
			<MistakeX x={96} y={650} text="FH is nutritional (fatty food raises cholesterol)" at={K11d.classic} cross={K11d.fatty + 20} note="diet adds; the gene is the cause" size={30} />
			<Chain y={880} slots={[
				{lines: ['altered LDLR gene →', 'fewer working receptors'], at: K11d.fewer, pulse: K11d.gene},
				{lines: ['liver takes up less LDL →', 'LDL builds up in the blood'], at: K11d.blood},
				{lines: ['LDL in artery walls →', 'narrowed arteries: heart disease'], at: K11d.heart},
			]} />
			{void K11d.diet}{void prog}
		</svg>
	);
};

// ---------- 12. Decision rule and handoff ----------
const K12 = cues(sc('decision-rule'), {first: 'first ask', path: 'pathogen', ifnot: 'If not', kind: 'what kind', gen: 'genetic', can: 'cancer', then: 'Then ask', factor: 'what factor', trace: 'trace the chain', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lit = (a: number, b?: number) => prog(f, a, 12) * (b === undefined ? 1 : 1 - 0.4 * prog(f, b, 12));
	const step = (y: number, h: number, t: string, a: number, b?: number) => (
		<g>
			<rect x={96} y={y} width={1120} height={h} rx={20} fill={lit(a, b) > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={lit(a, b) > 0.01 ? NAVY : 'rgba(60,45,20,0.22)'} strokeWidth={lit(a, b) > 0.01 ? 4 : 3} />
			<Sx x={126} y={y + 62} text={t} size={44} color={NAVY} weight={800} at={-1000} />
		</g>
	);
	const thumbs: [typeof P.bact, string][] = [[P.protein, GEN], [P.silic, ENV], [P.rbc, NUT], [P.melanoma, CAN]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="For any disease" at={0} />
			{step(196, 170, '1  Is it caused by a pathogen?', K12.first, K12.ifnot)}
			<PicF p={P.bact} x={880} y={226} h={110} />
			<Wr x={126} y={326} text="yes: infectious.  no: go on" at={K12.ifnot} size={34} color={INK} weight={700} />
			{step(390, 220, '2  What kind of disease is it?', K12.ifnot, K12.then)}
			<GroupTab x={126} y={480} size={32} all={K12.gen} />
			<Wr x={126} y={590} text="genetic, environmental, nutritional or cancer" at={K12.gen} size={30} color={INK} hand />
			{step(634, 230, '3  What factor contributed?', K12.then)}
			<Wr x={126} y={760} text="trace it: cause → what changes in the cells" at={K12.trace} size={36} color={INK} weight={800} />
			<Wr x={126} y={810} text="→ effect on the body" at={K12.trace + 16} size={36} color={INK} weight={800} />
			{thumbs.map(([p, c], i) => {
				const x = 1270 + (i % 2) * 290, y = 196 + Math.floor(i / 2) * 250;
				return (
					<g key={i}>
						<rect x={x} y={y} width={270} height={230} rx={18} fill="#fffdf8" stroke={c} strokeWidth={lit(K12.gen + i * 8) > 0.5 ? 5 : 3} />
						<PicF p={p} x={x + 135 - Math.min(plW(p, 190), 250) / 2} y={y + 20} h={Math.min(190, (250 * p.box[3]) / p.box[2])} />
					</g>
				);
			})}
			<Card x={1270} y={720} w={560} h={300} color={ENV} at={K12.next - 10} />
			<PicF p={P.uv} x={1290} y={760} h={220} o={prog(f, K12.next, 12)} />
			<Wr x={1510} y={800} text="Next:" at={K12.next} size={38} color={ENV} weight={800} />
			<Wr x={1510} y={850} text="how environmental" at={K12.next + 10} size={32} color={INK} weight={700} />
			<Wr x={1510} y={892} text="exposures cause" at={K12.next + 20} size={32} color={INK} weight={700} />
			<Wr x={1510} y={934} text="disease" at={K12.next + 30} size={32} color={INK} weight={700} />
			<Pill x={96} y={900} text="Pathogen? No. Then what kind of disease, and what factor?" at={K12.trace + 30} color={NAVY} size={30} />
			{void K12.path}{void K12.can}{void K12.factor}{void GREYC}
		</svg>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Infectious: caused by a pathogen. Non-infectious: not, so it can\'t be caught.',
	'Four groups: genetic, environmental, nutritional, cancer.',
	'CF: altered CFTR genes → too few channels → thick mucus → infections.',
	'Silicosis: dust scars lungs. Low iron: less haemoglobin. Melanoma: UV trigger.',
	'Multifactorial: name the main factor, then how it changes cells.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={46} aidTop={700} aids={['Pathogen? No. Then what kind of disease is it,', 'and what factor contributed?']} tag="trace it: cause → what changes in the cells → effect on the body" />
);
