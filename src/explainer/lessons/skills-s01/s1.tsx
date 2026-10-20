// S01 scenes 1 to 4: hook (12 of 12 reports, the nearby question), the worked question card, the verb, the marks.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, AnswerBox, CARD, Chip, DrawSquiggle, Flag, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, MarksBadge, Overlay, PenArrow, QuestionCard, RED, RoutineStrip, T,
	ZONE, answerGeom, marksAt, phraseAt, prog, smooth, vis,
} from './kit';
import type {CardSpec} from './kit';
import {BADGE_PARK, BOX, IRON_CARD, IronSlot, ParkedBadge, ironAnn, ironSpec, sc} from './common';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {every: 'every HSC', nearby: 'nearby question', reading: 'reading the question'});
const REPORTS = ['Biology', 'Chemistry'].flatMap(s => [2020, 2021, 2022, 2023, 2024, 2025].map(y => `${s} ${y}`));
const mini = (x: number, y: number, demand: string): CardSpec => ({x, y, w: 1040, subject: 'Chemistry', size: 32, items: [{text: demand, marks: '3 marks'}]});
export const FRONT = mini(440, 520, 'Explain the colour change in terms of collision theory.');
export const BACK = mini(520, 330, 'Explain the colour change using Le Chatelier’s principle.');
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const gridOut = K1.nearby - 14;
	const straight = smooth(prog(f, K1.reading, 20));
	return (
		<>
			<Heading text="Read the question before you answer it" at={K1.reading + 4} size={62} />
			<Overlay>
				<g opacity={1 - prog(f, gridOut, 14)}>
					{REPORTS.map((r, i) => {
						const col = i % 6, row = Math.floor(i / 6);
						const x = 220 + col * 250, y = 250 + row * 140;
						const o = prog(f, 6 + i * 3, 12);
						return (
							<g key={r} opacity={o}>
								<rect x={x} y={y} width={230} height={112} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
								<T x={x + 20} y={y + 46} text={r.split(' ')[0]} size={28} weight={700} color={INK} />
								<T x={x + 20} y={y + 84} text={r.split(' ')[1]} size={28} weight={500} color={INK_SOFT} />
								<line x1={x + 120} x2={x + 196} y1={y + 70} y2={y + 70} stroke="rgba(60,45,20,0.15)" strokeWidth={6} strokeLinecap="round" />
								<line x1={x + 120} x2={x + 180} y1={y + 88} y2={y + 88} stroke="rgba(60,45,20,0.15)" strokeWidth={6} strokeLinecap="round" />
								<Flag x={x + 186} y={y + 32} at={K1.every + i * 7} />
							</g>
						);
					})}
					<GreyTag x={960} y={560} text="NESA marking feedback, 2020 to 2025: 12 of 12 reports" at={K1.every + 90} size={26} anchor="middle" />
				</g>
				<QuestionCard spec={BACK} at={K1.nearby} rot={4} o={1 - 0.55 * straight} />
				<QuestionCard spec={FRONT} at={K1.nearby - 6} rot={-2.5 * (1 - straight)} />
				<g opacity={vis(f, K1.nearby + 16, K1.reading + 20, 12)}>
					<HandLine x={1180} y={296} text="answered this one instead" at={K1.nearby + 16} size={40} color={RED} />
					<PenArrow a={[1500, 306]} b={[1520, 366]} at={K1.nearby + 30} color={RED} bow={-20} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 2. The question card ----------
const K2 = cues(sc('question-card'), {gives: 'It gives', iron: 'iron three plus ions join', crystals: 'crystals', deeper: 'deeper red', asks: 'Then it asks', terms: 'in terms of collision theory', three: 'Three marks', before: 'Before you answer'});
export const SceneCard: React.FC = () => {
	const spec = ironSpec([K2.gives, K2.iron, K2.crystals - 10, K2.asks], K2.three);
	return (
		<Overlay>
			<QuestionCard spec={spec} at={0} ann={[{kind: 'pulse', phrase: 'in terms of collision theory', at: K2.terms}]}>
				<IronSlotFade at={K2.crystals - 20} swap={K2.deeper} crystals={K2.crystals} />
			</QuestionCard>
			<AnswerBox spec={BOX} at={K2.before} counter={{total: 3, label: true}} />
		</Overlay>
	);
};
const IronSlotFade: React.FC<{at: number; swap: number; crystals: number}> = ({at, swap, crystals}) => {
	const f = useCurrentFrame();
	return <g opacity={prog(f, at, 14)}><IronSlot swap={swap} crystals={crystals} /></g>;
};

/** The worked card as it stands after a scene (all its annotations drawn), with the deep red tube. */
export const IronCardDone: React.FC<{stage: Parameters<typeof ironAnn>[0]; at?: Partial<Record<string, number>>; extra?: import('./kit').Ann[]; glow?: number}> = ({stage, at, extra = [], glow}) => (
	<QuestionCard spec={IRON_CARD} at={-100} ann={[...ironAnn(stage, at), ...extra]}>
		<IronSlot glow={glow} />
	</QuestionCard>
);

// ---------- 3. The verb ----------
const K3 = cues(sc('verb'), {verb: 'the verb', explain: 'explain', glossary: 'glossary', why: 'show why', read: 'NESA also says'});
export const SceneVerb: React.FC = () => {
	const ex = phraseAt(IRON_CARD, 'Explain');
	const cy = BOX.y + 70;
	return (
		<Overlay>
			<RoutineStrip rows={[K3.verb]} />
			<IronCardDone stage="verb" at={{verb: K3.explain}} />
			<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}} />
			<PenArrow a={[ex.cx, ex.bottom + 8]} b={[ex.cx + 30, cy - 6]} at={K3.glossary - 6} color={AMBER_INK} bow={-14} />
			<Chip x={ex.x1 - 6} y={cy} text="explain: show a cause and effect, how or why it happens" at={K3.glossary} size={34} color={AMBER_INK} fill="#fff8e6" />
			<GreyTag x={ex.x1 - 6} y={cy + 72} text="NESA glossary, paraphrased" at={K3.glossary + 14} size={22} />
			<HandLine x={ex.x1 + 380} y={cy + 106} text="cause → effect" at={K3.why} size={46} color={INK} />
		</Overlay>
	);
};

// ---------- 4. The marks ----------
const K4 = cues(sc('marks'), {marks: 'the marks', three: 'about three linked points', stop: 'when to stop', ten: 'Ten lines', fourth: 'fourth mark'});
/** Faint scribble lines standing for an over-long answer. */
export const Ghost: React.FC<{at: number; out: number; n: number; y0: number; lh: number; x: number; w: number}> = ({at, out, n, y0, lh, x, w}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	return <g opacity={o * 0.75}>{Array.from({length: n}, (_, i) => <DrawSquiggle key={i} x={x} y={y0 + i * lh} w={w * (i % 3 === 2 ? 0.7 : 0.96)} at={at + i * 4} seed={i + 1} />)}</g>;
};
export const SceneMarks: React.FC = () => {
	const f = useCurrentFrame();
	const m = marksAt(IRON_CARD);
	const g = answerGeom(BOX, []);
	const overOut = K4.fourth + 26;
	return (
		<Overlay>
			<RoutineStrip rows={[-100, K4.marks]} />
			<IronCardDone stage="marks" at={{marks: K4.marks + 4}} />
			<AnswerBox spec={BOX} at={-100} counter={{total: 3, label: true}} slots={{at: K4.three, out: K4.stop, n: 3}} />
			<MarksBadge from={[m.cx, m.cy]} to={BADGE_PARK} value="3" at={K4.marks + 22} out={1e9} r={22} />
			<GreyTag x={ZONE.side.x} y={BOX.y + 120} text="about 3 linked points" at={K4.three + 8} out={K4.stop} size={26} />
			<Ghost at={K4.stop + 4} out={overOut} n={8} y0={g.base(0) - 12} lh={g.lh} x={g.tx} w={g.tw} />
			<g opacity={vis(f, K4.ten, overOut, 12)}>
				<rect x={BOX.x + 30} y={g.y + g.h + 6} width={BOX.w - 60} height={70} rx={8} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={2} strokeDasharray="10 7" />
				<DrawSquiggle x={g.tx} y={g.y + g.h + 44} w={g.tw * 0.8} at={K4.ten + 6} seed={11} />
			</g>
			<Chip x={ZONE.side.x} y={BOX.y + 300} text="more lines, not more marks" at={K4.ten + 10} size={32} color={GREY_INK} />
			{void INK_SOFT}
		</Overlay>
	);
};
export {ParkedBadge};
