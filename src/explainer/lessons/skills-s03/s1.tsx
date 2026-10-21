// S03 scenes 1 to 4: the hook (8 of 12 reports; two descriptions slide into pairs), the three glossary verbs, the
// worked question card, and the reading routine on it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, AnswerBox, CARD, Chip, DrawSquiggle, Flag, GREY_INK, GreyTag, Heading, HandLine, INK, INK_SOFT, MarksBadge, Overlay, QuestionCard, RoutineStrip, T, TEAL, ZONE, answerGeom, lerp,
	marksAt, prog, pulse, smooth, vis,
} from './kit';
import type {AnsSpec} from './kit';
import {CARD_S, CrossPlates, SNAP_ANN, SNAP_CARD, SplitSlots, box3, boxFullY, boxTop, sc, snapSpec} from './common';
import {PairLines, VerbCard} from './pieces';

const SX = ZONE.side.x;

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {eight: 'eight of the last twelve', two: 'two separate descriptions', marks: 'three to six marks', pairs: 'pairs'});
const REPORTS = ['Biology', 'Chemistry'].flatMap(s => [2020, 2021, 2022, 2023, 2024, 2025].map(y => `${s} ${y}`));
const FLAGGED = ['Biology 2020', 'Biology 2022', 'Biology 2023', 'Biology 2024', 'Biology 2025', 'Chemistry 2021', 'Chemistry 2022', 'Chemistry 2023'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, K1.two, 22));
	const gs = lerp(1, 0.42, shrink), gy = lerp(0, -150, shrink);
	const box: AnsSpec = {x: 300, y: 330, w: 970, lines: 8, lh: 50, size: 32};
	const g = answerGeom(box, []);
	const pair = smooth(prog(f, K1.pairs, 26));
	const half = g.tw * 0.45;
	const lineY = (i: number) => g.base(i) - 12;
	return (
		<>
			<Heading text="Compare, contrast, distinguish" at={K1.pairs + 4} size={62} />
			<Overlay>
				<g opacity={1 - prog(f, K1.pairs - 12, 12)} transform={`translate(955,${250 + gy}) scale(${gs}) translate(-955,-250)`}>
					{REPORTS.map((r, i) => {
						const col = i % 6, row = Math.floor(i / 6);
						const x = 220 + col * 250, y = 250 + row * 140;
						const k = FLAGGED.indexOf(r);
						return (
							<g key={r} opacity={prog(f, 4 + i * 3, 12)}>
								<rect x={x} y={y} width={230} height={112} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
								<T x={x + 20} y={y + 46} text={r.split(' ')[0]} size={28} weight={700} color={INK} />
								<T x={x + 20} y={y + 84} text={r.split(' ')[1]} size={28} weight={500} color={INK_SOFT} />
								{k >= 0 ? <Flag x={x + 186} y={y + 32} at={K1.eight + 6 + k * 9} /> : null}
							</g>
						);
					})}
					<g opacity={1 - prog(f, K1.two, 10)}><GreyTag x={955} y={560} text="NESA marking feedback, 2020 to 2025: 8 of 12 reports" at={K1.eight + 80} size={26} anchor="middle" /></g>
				</g>
				<AnswerBox spec={box} at={K1.two + 6} />
				{/* block A (lines 0 to 2) and block B (lines 4 to 6); on "pairs" they become two columns */}
				<g opacity={vis(f, K1.two + 14)}>
					<g transform={`translate(${g.tx},0) scale(${lerp(1, 0.45, pair)},1) translate(${-g.tx},0)`}>
						{[0, 1, 2].map(i => <DrawSquiggle key={'a' + i} x={g.tx} y={lineY(i)} w={g.tw * (i === 2 ? 0.7 : 0.96)} at={K1.two + 16 + i * 6} seed={i + 2} color={INK_SOFT} />)}
					</g>
					<g transform={`translate(${lerp(0, g.tw * 0.55, pair)},${lerp(0, -4 * g.lh, pair)}) translate(${g.tx},0) scale(${lerp(1, 0.45, pair)},1) translate(${-g.tx},0)`}>
						{[4, 5, 6].map(i => <DrawSquiggle key={'b' + i} x={g.tx} y={lineY(i)} w={g.tw * (i === 6 ? 0.7 : 0.96)} at={K1.two + 60 + (i - 4) * 6} seed={i + 5} color={INK_SOFT} />)}
					</g>
					<g opacity={1 - prog(f, K1.pairs, 12)}>
						<T x={box.x - 16} y={lineY(1) + 8} text="all about A" size={30} hand weight={700} color={GREY_INK} anchor="end" />
						<T x={box.x - 16} y={lineY(5) + 8} text="all about B" size={30} hand weight={700} color={GREY_INK} anchor="end" o={prog(f, K1.two + 60, 10)} />
					</g>
				</g>
				<Chip x={g.tx + 180} y={g.ruleY(2) + 6} text="where's the comparison?" at={K1.two + 90} out={K1.pairs} size={28} color={GREY_INK} fill="#eceae4" />
				<PairLines links={[0, 1, 2].map(i => ({a: [g.tx + half * (i === 2 ? 0.75 : 1) + 8, lineY(i)] as [number, number], b: [g.tx + g.tw * 0.55 - 8, lineY(i)] as [number, number], at: K1.pairs + 26 + i * 8}))} />
				<Chip x={SX} y={350} text="compare: 7 question parts, all Biology, 3 to 6 marks" at={K1.marks} size={32} color={AMBER_INK} fill="#fff8e6" maxW={460} />
				<GreyTag x={SX} y={500} text="NESA glossary key words only; HSC Chemistry and Biology papers, Section II, 2021 to 2025, counted by question part" at={K1.marks + 14} size={21} maxW={470} />
			</Overlay>
		</>
	);
};

// ---------- 2. Three verbs ----------
const K2 = cues(sc('three-verbs'), {compare: 'Compare means', contrast: 'Contrast means', distinguish: 'Distinguish means', sim: 'one similarity and one difference', seven: 'seven times', know: 'know them'});
export const VX = [140, 700, 1260], VY = 290, VW = 520, VH = 190;
export const SceneVerbs: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.45 * vis(f, K2.seven, undefined, 12);
	const know = pulse(f, K2.know, 40);
	const lift = smooth(prog(f, K2.sim, 14)) * 18 * (1 - prog(f, K2.seven, 14));
	return (
		<Overlay>
			<GreyTag x={VX[0]} y={220} text="NESA glossary, paraphrased" at={K2.compare + 20} size={24} />
			<VerbCard x={VX[0]} y={VY} w={VW} h={VH} verb="compare" body="show similarities or differences" kind="both" at={K2.compare} o={dim} lift={lift} />
			<g opacity={Math.min(1, dim + know)}>
				<VerbCard x={VX[1]} y={VY} w={VW} h={VH} verb="contrast" body="show differences or opposites" kind="diff" at={K2.contrast} lit={[K2.know, K2.know + 40]} />
				<VerbCard x={VX[2]} y={VY} w={VW} h={VH} verb="distinguish" body="show how things differ" kind="diff" at={K2.distinguish} lit={[K2.know, K2.know + 40]} />
			</g>
			<g opacity={1 - 0.5 * vis(f, K2.seven, undefined, 12)}>
				<Chip x={VX[0]} y={VY + VH + 26} text="tip: at least one similarity + one difference" at={K2.sim} size={32} color={TEAL} maxW={500} />
				<GreyTag x={VX[0]} y={VY + VH + 150} text="HSCScience tip" at={K2.sim + 12} size={22} />
			</g>
			{['7', '0', '0'].map((n, i) => (
				<g key={i}>
					<Chip x={VX[i] + VW / 2} y={760} text={n} at={K2.seven + i * 10} size={56} anchor="middle" color={i === 0 ? AMBER_INK : GREY_INK} fill={i === 0 ? '#fff8e6' : CARD} hand={false} />
				</g>
			))}
			<GreyTag x={960} y={880} text="question parts, Chemistry and Biology, Section II, 2021 to 2025" at={K2.seven + 30} size={24} anchor="middle" />
		</Overlay>
	);
};

// ---------- 3. The question card ----------
const K3 = cues(sc('question-card'), {hsc: 'HSC-style', red: 'Red snapdragons', every: 'every', pink: 'pink', cattle: 'Red cattle', roan: 'roan', all: 'All the parents', compare: 'compare', three: 'Three marks', chem: 'If you take Chemistry'});
export const SceneCard: React.FC = () => {
	const spec = snapSpec([K3.hsc + 10, K3.red, K3.compare], K3.three);
	const top = boxFullY();
	return (
		<Overlay>
			<QuestionCard spec={spec} at={0} ann={[{kind: 'pulse', phrase: 'all pink flowers', at: K3.every}, {kind: 'pulse', phrase: 'all roan', at: K3.roan}, {kind: 'pulse', phrase: 'true-breeding.', at: K3.all + 30}]} />
			<CrossPlates top={top} at={K3.red} cowAt={K3.cattle} kids={[K3.pink, K3.roan]} />
			<AnswerBox spec={box3(top)} at={K3.compare + 30} counter={{total: 3, label: true}} />
			<GreyTag x={SX} y={top + 400} text="Chemistry students: watch the shape of the answer" at={K3.chem} size={23} maxW={480} />
		</Overlay>
	);
};

// ---------- 4. Read it ----------
const K4 = cues(sc('read-it'), {routine: 'Run the routine', compare: 'compare', same: 'the same feature', three: 'Three marks', paired: 'three paired points', under: 'Underline', tb: 'True-breeding', differ: 'The parents differ', het: 'heterozygous', pink: 'Pink', hairs: 'red and white hairs', side: 'side by side', none: 'no constraint phrase', counts: 'counts'});
export const SceneRead: React.FC = () => {
	const f = useCurrentFrame();
	const top = boxFullY();
	const shrinkAt = K4.counts - 6;
	const m = marksAt(SNAP_CARD);
	const box = box3(top);
	const sideOut = 1 - prog(f, shrinkAt - 10, 12);
	const P = {snap: [SX + 60 + 39, top + 180 + 75] as [number, number], cow: [SX + 220, top + 220 + 46] as [number, number]};
	return (
		<Overlay>
			<RoutineStrip rows={[K4.compare, K4.three, K4.under, K4.none]} lit={[{row: 0, from: K4.compare, to: K4.three}, {row: 1, from: K4.three, to: K4.under}, {row: 2, from: K4.under, to: K4.none}, {row: 3, from: K4.none, to: K4.none + 60}]} none={{row: 3, at: K4.none + 10}} />
			<QuestionCard spec={SNAP_CARD} at={-100} s={(fr: number) => lerp(1, CARD_S, smooth(prog(fr, shrinkAt, 22)))} ann={SNAP_ANN({verb: K4.compare, marks: K4.three + 4, tb: K4.tb, pink: K4.pink, hairs: K4.hairs})} />
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} move={{at: shrinkAt, dur: 22, x: box.x, y: boxTop(), s: 1}}>
				<SplitSlots spec={box} at={K4.paired} />
			</AnswerBox>
			<MarksBadge from={[m.cx, m.cy]} to={[box.x + box.w - 150, box.y + 26]} value="3" at={K4.three + 18} out={shrinkAt - 8} r={22} />
			<g opacity={sideOut}>
				<CrossPlates top={top} at={-100} cowAt={-100} kids={[-100, -100]} parentsOut={K4.tb - 6} slide={K4.tb - 6} sideBy={{y: top + 180}} />
				<Chip x={SX} y={top - 6} text="true-breeding → each parent homozygous" at={K4.tb} size={26} color={INK} maxW={480} />
				<Chip x={SX} y={top + 82} text="parents differ → offspring heterozygous" at={K4.differ} size={26} color={TEAL} maxW={480} />
				<PairLines links={[{a: [P.snap[0] + 40, P.snap[1] - 10], b: [P.cow[0] - 6, P.cow[1] - 10], at: K4.side, bow: -14}]} />
				<HandLine x={SX + 60} y={top + 420} text="set side by side" at={K4.side + 6} size={34} color={AMBER_INK} />
			</g>
			{void GREY_INK}
		</Overlay>
	);
};
