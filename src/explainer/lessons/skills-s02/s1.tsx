// S02 scenes 1 to 4: the frequency hook, the three glossary verbs on the ladder, the fly question card, part (a).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, DrawSquiggle, GREY, GREY_INK, GreyTag, Heading, HI, INK, INK_SOFT, Overlay, QuestionCard, T, TEAL, ZONE, answerGeom, clamp01, lerp, prog,
	smooth, vis,
} from './kit';
import {FLY_CARD, FlySlot, MiniLadder, VerbLadder, boxTop, flySpec, sc, shrinkFrom} from './common';

// ---------- 1. Hook: explain is the commonest key word ----------
const K1 = cues(sc('hook'), {explain: 'explain', fifty: 'Fifty-seven', twice: 'more than twice', two: 'two to four marks', what: 'what happens', why: 'why', sort: "So let's sort"});
const BARS: [string, number][] = [['explain', 57], ['calculate', 24], ['justify', 23], ['describe', 18], ['outline', 18], ['identify', 16], ['evaluate', 11]];
const SEG: [string, number][] = [['2', 13], ['3', 20], ['4', 16], ['5', 5], ['7', 3]];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 470, K = 19, RH = 70, Y0 = 236;
	const split = smooth(prog(f, K1.two, 24));
	return (
		<>
			<Heading text="Identify, describe, explain" at={K1.sort + 4} size={62} />
			<Overlay>
				{BARS.map(([name, n], i) => {
					const y = Y0 + i * RH;
					const at = i === 0 ? K1.explain - 4 : 10 + (i - 1) * 14;
					const p = smooth(prog(f, at, i === 0 ? 34 : 24));
					const isEx = i === 0;
					const col = isEx ? AMBER : '#c9c0b0';
					return (
						<g key={name} opacity={prog(f, at - 6, 10)}>
							<T x={X0 - 20} y={y + 36} text={name} size={36} hand weight={700} color={isEx ? AMBER_INK : INK} anchor="end" />
							{isEx && split > 0.01 ? (() => {
								let cx = X0;
								return SEG.map(([m, c], k) => {
									const w = c * K, x = cx; cx += w;
									const bright = k <= 2;
									return (
										<g key={m}>
											<rect x={x} y={y} width={w - 3} height={50} rx={6} fill={bright ? AMBER : '#ecd9b5'} opacity={split} />
											{w > 50 ? <T x={x + w / 2} y={y + 34} text={`${m}: ${c}`} size={22} weight={700} color={bright ? '#3d2a05' : GREY_INK} anchor="middle" o={split} /> : null}
										</g>
									);
								});
							})() : <rect x={X0} y={y} width={n * K * p} height={50} rx={8} fill={col} />}
							<T x={X0 + n * K * p + 16} y={y + 36} text={String(n)} size={32} weight={800} color={isEx ? AMBER_INK : INK_SOFT} o={p} />
							{isEx ? <rect x={X0 - 10} y={y - 10} width={n * K + 90} height={70} rx={14} fill="none" stroke={AMBER} strokeWidth={4} opacity={vis(f, K1.explain + 30, K1.two, 10)} /> : null}
						</g>
					);
				})}
				<g opacity={vis(f, K1.twice, K1.two, 12)}>
					<rect x={X0} y={Y0 - 4} width={48 * K} height={58} rx={8} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 7" />
					<T x={X0 + 48 * K - 12} y={Y0 - 16} text="2 × 24 = 48" size={30} hand weight={700} color={INK} anchor="end" />
				</g>
				<g opacity={vis(f, K1.two + 10)}>
					<T x={1080} y={Y0 + 110} text="each segment: mark value, then number of parts" size={22} weight={600} color={GREY_INK} />
					<DrawPath d={`M${X0},${Y0 - 6} L${X0},${Y0 - 16} L${X0 + 49 * K},${Y0 - 16} L${X0 + 49 * K},${Y0 - 6}`} at={K1.two + 20} dur={14} color={AMBER_INK} width={4} />
					<T x={X0 + 49 * K / 2} y={Y0 - 28} text="49 of 57 at 2 to 4 marks" size={30} hand weight={700} color={AMBER_INK} anchor="middle" />
				</g>
				<GreyTag x={X0 - 160} y={Y0 + 7 * RH + 6} text="NESA glossary key words only; HSC Chemistry and Biology papers, Section II, 2021 to 2025, counted by question part" at={150} size={21} />
				<Chip x={560} y={880} text="what happens" at={K1.what} size={40} color={GREY_INK} />
				<Chip x={900} y={880} text="why it happens" at={K1.why} size={40} color={AMBER_INK} fill="#fff8e6" />
				<GreyTag x={560} y={966} text="NESA marking feedback: every year, 2020 to 2025" at={K1.why + 12} size={22} />
				{void GREY}{void HI}
			</Overlay>
		</>
	);
};

// ---------- 2. Three verbs on the ladder ----------
const K2 = cues(sc('three-verbs'), {identify: 'Identify means', describe: 'Describe means', plain: 'In plain words', explain: 'Explain means', outline: 'outline', question: 'in its question'});
const LX = 360, LY = 210, LW = 1180, LH = [150, 150, 150];
export const SceneVerbs: React.FC = () => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, K2.question, 24));
	const tr = `translate(${lerp(LX, ZONE.strip.x, p)},${lerp(LY, ZONE.strip.y, p)}) scale(${lerp(1, 0.22, p)}) translate(${-LX},${-LY})`;
	return (
		<Overlay>
			<g transform={tr} opacity={1 - 0.3 * p}>
				<VerbLadder x={LX} y={LY} w={LW} rungH={LH} rungs={[
					{at: K2.identify, body: 'recognise and name', bodyAt: K2.identify + 10},
					{at: K2.describe, body: 'give features or characteristics', bodyAt: K2.describe + 10},
					{at: K2.explain, body: 'show cause and effect, how or why', bodyAt: K2.explain + 10},
				]} size={36} />
				<g opacity={vis(f, K2.outline, K2.question, 12)}>
					<rect x={LX + LW + 24} y={LY + 172} width={300} height={150} rx={16} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} strokeDasharray="10 6" />
					<line x1={LX + LW} x2={LX + LW + 24} y1={LY + 247} y2={LY + 247} stroke="rgba(60,45,20,0.3)" strokeWidth={4} />
					<T x={LX + LW + 44} y={LY + 222} text="outline" size={40} hand weight={700} />
					<T x={LX + LW + 44} y={LY + 262} text="main features," size={28} weight={500} />
					<T x={LX + LW + 44} y={LY + 296} text="in general terms" size={28} weight={500} />
				</g>
				<GreyTag x={LX} y={LY + 3 * 150 + 2 * 22 + 20} text="NESA glossary, paraphrased" at={K2.identify + 20} size={24} />
			</g>
			<QuestionCard spec={flySpec([1e9, 1e9, 1e9, 1e9, 1e9])} at={K2.question + 6} />
			{void clamp01}{void TEAL}
		</Overlay>
	);
};

// ---------- 3. The question card ----------
const K3 = cues(sc('question-card'), {fruit: 'In fruit flies', white: 'A white-eyed female', among: 'Among the offspring', parta: 'Part a', identify: 'identify', partb: 'part b', describe: 'describe', partc: 'part c', explain: 'explain', chem: 'If you take Chemistry'});
export const VERB_ANN = (t: [number, number, number] = [-100, -100, -100]) => [
	{kind: 'verb' as const, phrase: 'Identify', item: 2, at: t[0]}, {kind: 'marks' as const, item: 2, at: t[0] + 10},
	{kind: 'verb' as const, phrase: 'Describe', item: 3, at: t[1]}, {kind: 'marks' as const, item: 3, at: t[1] + 10},
	{kind: 'verb' as const, phrase: 'Explain', item: 4, at: t[2]}, {kind: 'marks' as const, item: 4, at: t[2] + 10},
];
export const SceneCard: React.FC = () => {
	const spec = flySpec([K3.fruit, K3.among, K3.parta, K3.partb, K3.partc]);
	return (
		<Overlay>
			<MiniLadder />
			<QuestionCard spec={spec} at={0} ann={VERB_ANN([K3.identify, K3.describe, K3.explain])}>
				<FlySlot at={K3.white} kids={K3.among + 20} spec={spec} />
			</QuestionCard>
			<GreyTag x={ZONE.card.x} y={ZONE.card.y + 572} text="Chemistry students: watch the shape of each answer" at={K3.chem} size={26} />
		</Overlay>
	);
};

/** The fly card, small, with its verbs highlighted; `focus` keeps one part bright and dims the others. */
export const FlyCardSmall: React.FC<{focus?: number; at?: number; ann?: import('./kit').Ann[]; shrinkAt?: number; o?: number}> = ({focus, at = 0, ann = [], shrinkAt, o = 1}) => (
	<QuestionCard spec={FLY_CARD} at={-100} s={shrinkAt === undefined ? 0.72 : shrinkFrom(shrinkAt)} o={o}
		ann={[...VERB_ANN(), ...ann]} dims={focus === undefined ? [] : [{items: [2, 3, 4].filter(i => i !== focus), at}]}>
		<FlySlot at={-100} />
	</QuestionCard>
);

// ---------- 4. Part (a): identify ----------
const K4 = cues(sc('identify'), {identify: 'identify', red: 'the red allele', dominant: 'dominant', paragraph: 'paragraph', twoMarks: 'worth two marks', two: 'two things'});
export const SceneIdentify: React.FC = () => {
	const f = useCurrentFrame();
	const box = {x: ZONE.box.x, y: boxTop(), w: ZONE.box.w, lines: 2, lh: 52, size: 33};
	const g = answerGeom(box, []);
	const gh = vis(f, K4.paragraph, K4.paragraph + 80, 10);
	return (
		<Overlay>
			<MiniLadder lit={[[K4.identify, 1e9]]} />
			<FlyCardSmall focus={2} at={K4.identify} shrinkAt={0} ann={[{kind: 'pulse', phrase: 'Identify which eye-colour allele is dominant.', item: 2, at: K4.identify + 6}]} />
			<AnswerBox spec={box} at={K4.identify + 8} counter={{total: 1, label: true}} rows={[{text: 'The red allele is dominant.', at: K4.red, dur: 34, tick: K4.dominant + 10}]} />
			<g opacity={gh * 0.8}>
				{Array.from({length: 6}, (_, i) => <DrawSquiggle key={i} x={g.tx} y={g.base(0) - 14 + i * 52} w={g.tw * (i % 3 === 2 ? 0.6 : 0.95)} at={K4.paragraph + i * 4} seed={i + 3} />)}
				<rect x={box.x} y={g.y + g.h + 4} width={box.w} height={210} rx={10} fill="none" stroke={GREY} strokeWidth={2} strokeDasharray="10 7" />
			</g>
			<GreyTag x={ZONE.side.x} y={box.y + 10} text="not asked for: costs time" at={K4.paragraph + 14} size={26} />
			<Chip x={ZONE.side.x} y={box.y + 100} text="identify (2 marks): check whether two things are asked for" at={K4.two} size={30} color={INK} maxW={460} />
			<GreyTag x={ZONE.side.x} y={box.y + 230} text="in 2021 to 2025, identify was worth 1 mark 6 times and 2 marks 7 times" at={K4.two + 16} size={21} maxW={460} />
			{void K4.twoMarks}
		</Overlay>
	);
};
