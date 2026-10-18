// G02 scenes 3a to 3d: question 2, tortoiseshell cats. The gene is on the X and a cat with one of each allele shows both
// colours, so a tortoiseshell needs two X chromosomes. The square (B9 cross logic with an X-linked map) is read two
// ways: of all kittens and of sons. The autosomal slip is computed too.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {Overlay} from '../bio-m5-b06b/shared';
import {GenoTag, PSym, Punnett} from '../bio-m5-b09/genetics';
import {SexChrom} from '../bio-m5-b10/shared';
import {Badge, CheckStrip, Fade, GreyTag, QText, qCheck, HscTag, ModelLine, Note, PauseHold, RED, Sx, TaskLine, smooth, vis} from './board';
import {AUTO, CATS, Demands, MOVES, MOVES_TITLE, PL2, PlateB, XO, Xo, catOf, hold, sc} from './shared';

const TASK2 = 'Tortoiseshell cats: why female? Then two probabilities.';
const ANS2 = {
	a: '(a) needs two different X alleles; males have one X',
	b: `(b) ${CATS.frac(c => !c.male && c.ph === 'tortoiseshell')} of all kittens`,
	c: `(c) ${CATS.frac(c => c.ph === 'black', CATS.sons)} of sons`,
};
type Q2At = {cats: number; x: number; orange: number; black: number; both: number; mates: number; explain: number; prob: number; sons: number};
const NO2: Q2At = {cats: -100, x: -100, orange: -100, black: -100, both: -100, mates: -100, explain: -100, prob: -100, sons: -100};
const M2 = ['on the X chromosome', 'A cat with one of each shows both colours', 'A tortoiseshell female then mates with an orange male'];
const Q2Q = (t: Q2At) => qCheck([
	{text: 'In cats, a gene for coat colour is on the X chromosome.', at: t.cats},
	{text: 'One allele gives orange fur and the other gives black.', at: t.orange},
	{text: 'A cat with one of each shows both colours, in patches (tortoiseshell).', at: t.both},
	{text: '(a) Explain why tortoiseshell cats are almost always female.', at: t.explain, para: true, weight: 650},
	{text: 'A tortoiseshell female then mates with an orange male.', at: t.mates, para: true},
	{text: '(b) What is the probability that a kitten is a tortoiseshell female?', at: t.prob, para: true, weight: 650},
	{text: '(c) What fraction of their sons are black?', at: t.sons, para: true, weight: 650},
], M2.map(phrase => ({phrase, at: 1e9})));
Q2Q(NO2);
const done2 = (n: number) => Object.fromEntries(M2.slice(0, n).map(p => [p, -100])) as Record<string, number>;
const Q2Head: React.FC<{a?: Q2At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO2;
	return (
		<g>
			<TaskLine text={TASK2} at={a ? 6 : -100} size={48} />
			<HscTag at={a ? 10 : -100} />
			<PlateB p={PL2.tort} cx={190} cy={285} w={200} o={prog(f, t.both, 14)} />
			<Sx x={190} y={392} text="tortoiseshell" size={26} color={INK_SOFT} hand anchor="middle" at={t.both + 6} />
			<Sx x={335} y={300} text="×" size={50} color={INK} weight={800} anchor="middle" at={t.mates} />
			<PlateB p={PL2.orange} cx={480} cy={285} w={200} o={prog(f, t.mates, 14)} />
			<Sx x={480} y={392} text="orange" size={26} color={INK_SOFT} hand anchor="middle" at={t.mates + 6} />
			<PlateB p={PL2.catBlack} cx={760} cy={300} w={150} o={prog(f, t.black, 12)} />
			<Sx x={760} y={392} text="black" size={26} color={INK_SOFT} hand anchor="middle" at={t.black + 6} />
			<g opacity={prog(f, t.mates + 10, 12)}>
				<PSym x={150} y={424} sex="F" aff={false} sz={30} />
				<Sx x={176} y={433} text="female" size={24} color={INK_SOFT} hand at={-100} />
				<PSym x={440} y={424} sex="M" aff={false} sz={30} />
				<Sx x={466} y={433} text="male" size={24} color={INK_SOFT} hand at={-100} />
			</g>
			<QText q={Q2Q(t)} x={120} y={506} w={800} size={28} lh={35} at={t.cats} markAt={m} />
		</g>
	);
};
const PG = {x: 1150, y: 360, cell: 150};
const catIcon = (i: number, x: number, y: number) => <PlateB p={catOf(CATS.cells[i].ph)} cx={x} cy={y + 4} w={84} />;

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(sc('q2-question'), {cats: 'In cats', q: 'Question two', x: 'X chromosome', orange: 'gives orange fur', black: 'the other gives black', both: 'shows both colours', tort: 'called tortoiseshell', explain: 'Explain why', mates: 'A tortoiseshell female then mates', prob: "What's the probability", sons: 'what fraction of their sons', pause: 'Pause here'});
export const SceneQ2QuestionG2: React.FC = () => {
	const h = hold('q2-question');
	return (
		<Overlay>
			<Q2Head a={{cats: KA.cats, x: KA.x, orange: KA.orange, black: KA.black, both: KA.both, mates: KA.mates, explain: KA.explain, prob: KA.prob, sons: KA.sons}} />
			<Fade at={KA.prob + 10}>
				<rect x={1100} y={330} width={260} height={260} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
				<line x1={1230} y1={330} x2={1230} y2={590} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<line x1={1100} y1={460} x2={1360} y2={460} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
			</Fade>
			<PauseHold h={h} at={KA.pause} x={1000} y={760} cx={1600} cy={470} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} hold={h} />
		</Overlay>
	);
};

// ---------- 3b. Why female ----------
const KB = cues(sc('q2-why-female'), {x: 'The gene is on the X', both: 'needs both alleles', two: 'two X chromosomes', male: 'A male has one X', xy: 'one X and a Y', single: 'his single X', one: 'only one colour', why: "That's why"});
export const SceneQ2WhyFemale: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Q2Head m={{[M2[0]]: KB.x + 4, [M2[1]]: KB.both}} />
			<Badge text="X-linked" at={6} />
			<PlateB p={PL2.tort} cx={1130} cy={420} w={290} o={prog(f, KB.x, 14)} />
			<SexChrom x={1370} y={400} kind="X" tag="O" s={1.1} o={prog(f, KB.both, 12)} />
			<SexChrom x={1470} y={400} kind="X" tag="o" s={1.1} o={prog(f, KB.both + 8, 12)} />
			<Note x={1330} y={500} text="both alleles: two X" at={KB.two} size={34} />
			<Note x={980} y={600} text="Co shows both." at={KB.both + 10} size={34} />
			<GreyTag x={1200} y={570} text="B10" at={KB.both + 16} size={24} />
			<Sx x={980} y={644} text="both alleles show, in different patches" size={28} color={INK} weight={600} at={KB.both + 20} />
			<PlateB p={PL2.orange} cx={1130} cy={810} w={230} o={prog(f, KB.male, 14)} />
			<SexChrom x={1340} y={800} kind="X" tag="O" s={1} o={prog(f, KB.xy, 12)} />
			<SexChrom x={1420} y={806} kind="Y" s={1} o={prog(f, KB.xy + 8, 12)} />
			<Note x={1300} y={880} text="one X: one colour" at={KB.one} size={30} />
			<g opacity={vis(f, KB.single, undefined) * 0.7}>
				<GenoTag x={1640} y={790} text={`${XO} ${Xo} Y?`} size={28} color={INK_SOFT} />
				{f >= KB.single + 16 ? <line x1={1560} y1={808} x2={1720} y2={772} stroke={RED} strokeWidth={5} strokeLinecap="round" opacity={prog(f, KB.single + 16, 8)} /> : null}
			</g>
			<GreyTag x={1560} y={826} text="males: one X" at={KB.single + 20} size={24} />
			<GreyTag x={1400} y={930} text="rare XXY males can be tortoiseshell" at={KB.why + 30} size={22} />
			<ModelLine x={130} y={898} text={ANS2.a} at={KB.why} size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [KB.x]}} />
		</Overlay>
	);
};

// ---------- 3c. Fill the square, then read it two ways ----------
const KC = cues(sc('q2-square'), {cross: 'Now the cross', mother: 'The mother gives', father: 'The father gives', dau: 'every daughter', son: 'every son', so: 'So daughters are', sons: 'and sons are', tort: 'Tortoiseshell females are', quarter: 'one in four', ofSons: 'Of the sons', half: 'one in two'});
const fillAt = (i: number) => (CATS.cells[i].male ? KC.son + 6 + (i > 1 ? 8 : 0) : KC.dau + 6 + (i > 1 ? 8 : 0));
const catRing = (f: number) => (i: number) => {
	const c = CATS.cells[i];
	return Math.max(!c.male && c.ph === 'tortoiseshell' ? prog(f, KC.quarter + 6, 10) : 0, c.male && c.ph === 'black' ? prog(f, KC.half + 6, 10) : 0);
};
const SquareLabels: React.FC<{at: number}> = ({at}) => (
	<>
		<Sx x={PG.x + PG.cell / 2} y={PG.y + 2 * PG.cell + 40} text="daughters" size={30} color={INK_SOFT} hand anchor="middle" at={at} />
		<Sx x={PG.x + 1.5 * PG.cell} y={PG.y + 2 * PG.cell + 40} text="sons" size={30} color={INK_SOFT} hand anchor="middle" at={at + 6} />
		<Sx x={PG.x - 120} y={PG.y + PG.cell} text="mother" size={28} color={INK_SOFT} hand anchor="end" at={at} />
		<Sx x={PG.x + 20} y={PG.y - 44} text="father" size={28} color={INK_SOFT} hand anchor="end" at={at} />
	</>
);
export const SceneQ2Square: React.FC = () => {
	const f = useCurrentFrame();
	const all = vis(f, KC.quarter, KC.ofSons);
	const sonCol = prog(f, KC.ofSons, 10);
	return (
		<Overlay>
			<Q2Head m={{...done2(2), [M2[2]]: KC.cross + 4}} />
			<Badge text="X-linked" at={-100} />
			<Punnett x={PG.x} y={PG.y} cell={PG.cell} res={CATS} top={[XO, 'Y']} side={[XO, Xo]} gridAt={KC.cross} topAt={KC.father} sideAt={KC.mother} fillAt={fillAt} discR={40} chipR={24} icon={catIcon} ring={catRing(f)} />
			<SquareLabels at={KC.so} />
			{all > 0.01 ? <rect x={PG.x - 8} y={PG.y - 8} width={2 * PG.cell + 16} height={2 * PG.cell + 16} rx={14} fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="12 8" opacity={all} /> : null}
			{sonCol > 0.01 ? <rect x={PG.x + PG.cell - 6} y={PG.y - 8} width={PG.cell + 14} height={2 * PG.cell + 16} rx={14} fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="12 8" opacity={sonCol} /> : null}
			<Note x={PG.x + 2 * PG.cell + 40} y={PG.y + 120} text="of all kittens: 1 box of 4" at={KC.quarter} out={KC.ofSons} size={32} />
			<Note x={PG.x + 2 * PG.cell + 40} y={PG.y + 200} text="of sons: 1 box of 2" at={KC.half} size={32} />
			<Note x={980} y={772} text="Dad gives his X to daughters and his Y to sons." at={KC.father + 20} size={32} />
			<GreyTag x={1600} y={742} text="B10" at={KC.father + 28} size={24} />
			<ModelLine x={130} y={898} text={ANS2.a} at={-100} size={30} />
			<ModelLine x={130} y={938} text={ANS2.b} at={KC.quarter + 10} size={30} />
			<ModelLine x={130} y={978} text={ANS2.c} at={KC.half + 10} size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 1: [KC.mother], 2: [KC.quarter]}} />
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(sc('q2-mistake'), {auto: 'on an autosome', gives: 'That gives tortoiseshell kittens', half: 'half of all kittens', sons: 'But sons only get', mx: "their mother's X"});
const GA = {x: 1560, y: 400, cell: 100};
export const SceneQ2MistakeG2: React.FC = () => {
	const f = useCurrentFrame();
	const crossAt = KD.auto + 10;
	const arrow = smooth((f - KD.mx) / 20);
	const cx = GA.x + GA.cell, cy = GA.y + GA.cell;
	return (
		<Overlay>
			<Q2Head m={done2(3)} />
			<Badge text="X-linked" at={-100} />
			<Punnett x={PG.x} y={PG.y} cell={PG.cell} res={CATS} top={[XO, 'Y']} side={[XO, Xo]} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={40} chipR={24} icon={catIcon} />
			<SquareLabels at={-100} />
			{/* the autosomal slip, computed */}
			<g opacity={prog(f, KD.auto - 20, 12)}>
				<Sx x={GA.x - 20} y={GA.y - 84} text="if it were autosomal:" size={28} color={INK_SOFT} hand at={-100} />
				<Punnett x={GA.x} y={GA.y} cell={GA.cell} res={AUTO} top={['O', 'O']} side={['O', 'o']} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={22} plain hi={i => (AUTO.cells[i].ph === 'tortoiseshell' ? prog(f, KD.gives, 10) : 0)} />
				<PSym x={GA.x + 1.5 * GA.cell + 30} y={GA.y + 1.5 * GA.cell + 26} sex="M" aff={false} sz={22} o={prog(f, KD.gives + 6, 10)} />
			</g>
			{f >= crossAt ? <path d={`M${GA.x - 60},${GA.y - 40} C${cx + 160},${GA.y - 80} ${cx + 180},${cy + 140} ${cx},${cy + 140} C${GA.x - 80},${cy + 140} ${GA.x - 90},${GA.y} ${GA.x - 50},${GA.y - 50}`} fill="none" stroke={RED} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - smooth((f - crossAt) / 16)} /> : null}
			<Sx x={GA.x - 40} y={GA.y + 2 * GA.cell + 84} text="the gene is on the X" size={32} color={RED} hand at={crossAt + 12} />
			<Sx x={GA.x - 40} y={GA.y + 2 * GA.cell + 124} text={`(tortoiseshell of both sexes: ${AUTO.frac(c => c.ph === 'tortoiseshell')})`} size={26} color={INK_SOFT} hand at={KD.half} />
			{/* sons only get their mother's X */}
			{arrow > 0.01 ? <path d={`M${PG.x - 60},${PG.y + 2 * PG.cell + 10} C${PG.x - 40},${PG.y + 2 * PG.cell + 110} ${PG.x + 1.5 * PG.cell},${PG.y + 2 * PG.cell + 120} ${PG.x + 1.5 * PG.cell},${PG.y + 2 * PG.cell + 58}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - arrow} /> : null}
			<Note x={1420} y={790} text="sons: X from the mother" at={KD.mx + 10} size={32} />
			<ModelLine x={130} y={898} text={ANS2.a} at={-100} size={30} />
			<ModelLine x={130} y={938} text={ANS2.b} at={-100} size={30} />
			<ModelLine x={130} y={978} text={ANS2.c} at={-100} size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 1: [-100], 2: [-100]}} />
		</Overlay>
	);
};
void INK; void AMBER_INK; void Demands;
