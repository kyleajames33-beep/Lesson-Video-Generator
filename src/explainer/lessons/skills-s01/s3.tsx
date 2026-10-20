// S01 scenes 9 to 11: the weak (Le Chatelier) answer against the strong one, "one mark, one idea" and its limits,
// and the four-question routine.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, CARD, Chip, DrawPath, DrawSquiggle, GREEN, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, Overlay, PenArrow, PenTick, QuestionCard, RoutineStrip, Stopwatch, T, TEAL,
	WeakStrongPanel, ZONE, chipW, marksAt, lerp, prog, smooth, vis,
} from './kit';
import {BOX, IronSlot, ROW_TEXT, doneRows, ironAnn, ironSpec, sc} from './common';
import {IronCardDone} from './s1';

// ---------- 9. Weak against strong ----------
const K9 = cues(sc('weak-vs-strong'), {compare: 'compare this answer', quote: 'Adding iron three plus ions', forms: 'red ion forms', wrong: 'Is it wrong', never: 'never mentions', nearby: 'nearby question', guide: 'In our marking guide', one: 'earns one mark', deeper: 'the deeper red'});
const WEAK = 'Adding Fe^{3+} ions increases a reactant, so by Le Chatelier’s principle the equilibrium shifts right to use some of it up, and more of the red ion forms.';
export const SceneWeak: React.FC = () => {
	const f = useCurrentFrame();
	const wy = BOX.y;
	const chipsY = wy + 282;
	const cx: number[] = []; { let x = BOX.x + 290; for (const k of ['collisions', 'how often', 'rates']) { cx.push(x); x += chipW(k, 28) + 28 * 1.3 + 22; } }
	return (
		<Overlay>
			<RoutineStrip rows={[-100, -100, -100, -100]} o={0.55} />
			<IronCardDone stage="constraint" extra={[{kind: 'pulse', phrase: 'in terms of collision theory', at: K9.nearby, color: '#bfe5df'}]} />
			<WeakStrongPanel
				strong={{spec: BOX, rows: doneRows(3), total: 3, to: {x: ZONE.side.x, y: BOX.y, s: ZONE.side.w / BOX.w}, moveAt: K9.compare, dim: 0.7}}
				weak={{spec: {...BOX, lines: 3}, rows: [{text: WEAK, at: K9.quote, dur: K9.forms + 16 - K9.quote}], total: 3, at: K9.compare + 16, ann: [{kind: 'tick', row: 0, phrase: 'more of the red ion forms', at: K9.one + 6}]}}
				lost={{x: BOX.x, y: chipsY + 92, text: '−2: not in terms of collision theory (no collisions or rates)', at: K9.one + 40, maxW: 960}}
			/>
			<GreyTag x={ZONE.side.x} y={BOX.y + 268} text="correct chemistry" at={K9.wrong + 16} size={26} />
			{['collisions', 'how often', 'rates'].map((k, i) => (
				<Chip key={k} x={cx[i]} y={chipsY} text={k} at={K9.nearby + i * 6} size={28} color={TEAL} cross={K9.nearby + 20 + i * 8} />
			))}
			<T x={BOX.x} y={chipsY + 38} text="missing from Answer A:" size={28} hand weight={700} color={GREY_INK} o={vis(f, K9.nearby, undefined, 12)} />
			{void ROW_TEXT}
		</Overlay>
	);
};

// ---------- 10. One mark, one idea? ----------
const K10 = cues(sc('one-mark-one-idea'), {q: 'one mark one idea', rule: 'rule of thumb', three: 'about three points', limits: 'has limits', linked: 'linked, not just listed', specific: 'specific thing', whole: 'as a whole', seven: 'seven facts'});
const CARD_X = 96, CARD_W = 1728, TITLE_H = 78;
/** A limit card: open (content visible) between open and collapse; collapsed to its title afterwards. */
const LimitCard: React.FC<{y: number; h: number; title: string; at: number; collapse?: number; children: React.ReactNode}> = ({y, h, title, at, collapse, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const c = collapse === undefined ? 0 : smooth(prog(f, collapse, 16));
	const hh = lerp(h, TITLE_H, c);
	return (
		<g opacity={o}>
			<rect x={CARD_X} y={y} width={CARD_W} height={hh} rx={18} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<T x={CARD_X + 30} y={y + 52} text={title} size={44} hand weight={700} color={c > 0.5 ? INK_SOFT : INK} />
			<g opacity={1 - c}>{children}</g>
		</g>
	);
};
const cardH = (f: number, h: number, at: number, collapse?: number) => (f < at ? 0 : lerp(h, TITLE_H, collapse === undefined ? 0 : smooth(prog(f, collapse, 16))));
export const SceneOneMark: React.FC = () => {
	const f = useCurrentFrame();
	const H1 = 300, H2 = 250, H3 = 380, gap = 18, y1 = 316;
	const y2 = y1 + cardH(f, H1, K10.linked, K10.specific) + gap;
	const y3 = y2 + cardH(f, H2, K10.specific, K10.whole) + gap;
	const loose = ['more Fe^{3+}', 'faster forward rate', 'deeper red'];
	const lx = (i: number, gp: number, tick = false) => CARD_X + 330 + loose.slice(0, i).reduce((a, t) => a + chipW(t, 30) + (tick ? 39 : 0) + gp, 0);
	return (
		<>
			<Heading text="One mark, one idea?" at={4} size={62} />
			<Overlay>
				<g opacity={vis(f, K10.rule, undefined, 12)}>
					<T x={570} y={146} text="≈" size={80} color={AMBER} weight={800} />
					{[0, 1, 2].map(i => (
						<g key={i} opacity={prog(f, K10.rule + i * 6, 10)}>
							<rect x={CARD_X + i * 300} y={196} width={270} height={74} rx={12} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="4 8" />
							<T x={CARD_X + i * 300 + 24} y={244} text={`point ${i + 1}`} size={32} hand weight={700} color={INK_SOFT} />
							<circle cx={CARD_X + i * 300 + 226} cy={233} r={20} fill="#fff8e6" stroke={AMBER} strokeWidth={3.5} />
							<T x={CARD_X + i * 300 + 226} y={242} text="1" size={24} weight={800} color={AMBER_INK} anchor="middle" />
						</g>
					))}
					<T x={CARD_X + 920} y={244} text="three marks, about three points" size={34} hand weight={700} color={GREY_INK} />
				</g>
				<LimitCard y={y1} h={H1} title="linked, not listed" at={K10.linked} collapse={K10.specific}>
					<T x={CARD_X + 40} y={y1 + 136} text="listed" size={34} hand weight={700} color={GREY_INK} />
					{loose.map((t, i) => <Chip key={'a' + i} x={lx(i, 60)} y={y1 + 100} text={t} at={K10.linked + 6 + i * 4} size={30} color={GREY_INK} />)}
					<T x={lx(3, 60) + 10} y={y1 + 136} text="no marks for loose facts" size={28} hand weight={700} color={GREY_INK} o={prog(f, K10.linked + 30, 12)} />
					<T x={CARD_X + 40} y={y1 + 236} text="linked" size={34} hand weight={700} color={TEAL} />
					{loose.map((t, i) => <Chip key={'b' + i} x={lx(i, 90, true)} y={y1 + 200} text={t} at={K10.linked + 30 + i * 6} size={30} color={TEAL} tick={K10.linked + 50 + i * 8} />)}
					{[0, 1].map(i => {
						const x0 = lx(i + 1, 90, true) - 80, x1 = lx(i + 1, 90, true) - 10;
						return <g key={i}><PenArrow a={[x0, y1 + 228]} b={[x1, y1 + 228]} at={K10.linked + 40 + i * 6} color={AMBER_INK} /><T x={(x0 + x1) / 2} y={y1 + 214} text="so" size={28} hand weight={700} color={AMBER_INK} anchor="middle" o={prog(f, K10.linked + 46, 8)} /></g>;
					})}
				</LimitCard>
				<LimitCard y={y2} h={H2} title="a specific thing" at={K10.specific} collapse={K10.whole}>
					<Chip x={CARD_X + 40} y={y2 + 100} text="a balanced equation with states" at={K10.specific + 8} size={34} color={INK} />
					<GreyTag x={CARD_X + 40} y={y2 + 176} text="e.g. a NESA Chemistry 2025 guideline" at={K10.specific + 18} size={22} />
					<Chip x={CARD_X + 760} y={y2 + 100} text="a value from the data" at={K10.specific + 40} size={34} color={INK} />
				</LimitCard>
				<LimitCard y={y3} h={H3} title="judged as a whole" at={K10.whole}>
					<rect x={CARD_X + 40} y={y3 + 86} width={760} height={270} rx={10} fill="#fffefb" stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
					<T x={CARD_X + 60} y={y3 + 120} text="7 marks" size={26} weight={700} color={GREY_INK} />
					{Array.from({length: 7}, (_, i) => (
						<g key={i} opacity={prog(f, K10.whole + 6 + i * 4, 8)}>
							<circle cx={CARD_X + 74} cy={y3 + 148 + i * 30} r={5} fill={INK_SOFT} />
							<DrawSquiggle x={CARD_X + 92} y={y3 + 150 + i * 30} w={[420, 520, 380, 600, 460, 500, 340][i]} at={K10.whole + 6 + i * 4} seed={i + 2} />
						</g>
					))}
					<Chip x={CARD_X + 860} y={y3 + 110} text="sound, not comprehensive" at={K10.seven} size={36} color={AMBER_INK} fill="#fff8e6" />
					<GreyTag x={CARD_X + 860} y={y3 + 196} text="longer answers are marked in levels" at={K10.seven + 14} size={24} />
				</LimitCard>
				<GreyTag x={960} y={1000} text="NESA’s criteria are set question by question" at={K10.seven + 30} size={24} anchor="middle" />
			</Overlay>
		</>
	);
};

// ---------- 11. The routine ----------
const K11 = cues(sc('routine'), {here: "Here's the routine", dowhat: 'Do what', howmuch: 'How much', aboutwhat: 'About what', usingwhat: 'Using what', thirty: 'thirty seconds', tick: 'tick each part'});
const MINI = ironSpec(undefined, undefined, 1130, 330);
export const SceneRoutine: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.46;
	const mk = marksAt(MINI, undefined, s);
	const ph = ['Explain', '(3 marks)', 'iron(III) nitrate,', 'in terms of collision theory'];
	return (
		<Overlay>
			<RoutineStrip rows={[-100, -100, -100, -100]} full={fr => prog(fr, 0, 22)} after={K11.tick}
				lit={[{row: 0, from: K11.dowhat, to: K11.howmuch}, {row: 1, from: K11.howmuch, to: K11.aboutwhat}, {row: 2, from: K11.aboutwhat, to: K11.usingwhat}, {row: 3, from: K11.usingwhat, to: K11.thirty}, {row: 4, from: K11.tick, to: K11.tick + 80}]} />
			<Stopwatch x={1180} y={250} at={K11.thirty} label="about 30 s" />
			<QuestionCard spec={MINI} at={K11.tick - 24} s={s} ann={[...ironAnn('constraint'), ...ph.filter(p => p !== '(3 marks)').map((p, i) => ({kind: 'tick' as const, phrase: p, at: K11.tick + 16 + i * 8, above: true}))]}>
				<IronSlot spec={MINI} />
			</QuestionCard>
			<PenTick x={mk.x1 + 18} y={mk.cy - 26} at={K11.tick + 34} s={16} color={GREEN} />
			<HandLine x={96} y={900} text="Do what? How much? About what? Using what?" at={K11.tick + 30} size={68} color={TEAL} dur={60} />
			{void DrawPath}{void INK}
		</Overlay>
	);
};
