// Scenes 10 to 15: attempt 1 (a = 12, d = −5: a₂₀) and its brief feedback, attempt 2 (a₃ = 10, a₇ = 26: a and d) and
// its brief feedback, the handoff (a 15-row pyramid of tins on a display base, exported as F02FinalFrame, f03's
// opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading, TermPlot, kf} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AID2, ChairPosts} from './s2';
import {R1} from './s1';
import {AMBER, AMBER_STROKE, AnswerBox, Arcs, BLUE, BROWN, BoxCard, ChairRig, Chip, FramedCard, Hand, Ladder, POS, Row, TinPyramid, chairH, tinCount} from './parts';

// ---------- attempts ----------
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={600} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
/** A row of position slots; `vals` fills some, "?" marks the ones asked for, "…" a gap in the positions. */
const SlotRow: React.FC<{x: number; y: number; cardW?: number; gap?: number; vals: readonly string[]; labels: readonly string[]; size?: number}> = ({x, y, cardW = 120, gap = 22, vals, labels, size = 48}) => (
	<>
		{vals.map((v, i) => {
			const dots = v === '…';
			const filled = v !== '' && v !== '?' && !dots;
			return <React.Fragment key={i}>
				{dots ? <div style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK_SOFT}}>…</div>
					: <div style={{position: 'absolute', left: x + i * (cardW + gap), top: y, width: cardW, height: 96, boxSizing: 'border-box', borderRadius: 14, border: `4px ${filled ? 'solid' : 'dashed'} ${filled ? BLUE : INK_SOFT}`, background: '#fffdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: filled ? BLUE : INK_SOFT}}>{v}</div>}
				<div style={{position: 'absolute', left: x + i * (cardW + gap) - 10, top: y + 104, width: cardW + 20, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>{labels[i]}</div>
			</React.Fragment>;
		})}
	</>
);
const A1 = {x: 760, y: 520};
const A1V = ['12', '', '', '…', '?'];
const A1L = ['n = 1', 'n = 2', 'n = 3', '', 'n = 20'];
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['first term 12', 'common difference −5']} picture={<SlotRow x={A1.x} y={A1.y} vals={A1V} labels={A1L} />}>
		<div>An arithmetic sequence has first term 12 and common difference −5. Find the 20th term.</div>
	</Attempt>
);
const A2 = {x: 730, y: 520, cardW: 104, gap: 14};
const A2V = ['?', '', '10', '', '', '', '26'];
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['a₃ = 10', 'a₇ = 26']} picture={<SlotRow x={A2.x} y={A2.y} cardW={A2.cardW} gap={A2.gap} vals={A2V} labels={A2V.map((_, i) => `n = ${i + 1}`)} />}>
		<div>The 3rd term of an arithmetic sequence is 10 and the 7th term is 26. Find the first term and the common difference.</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	const sx = (i: number) => A1.x + i * 142 + 60;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>First term 12, common difference −5. Find the 20th term.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'a = 12', role: 'a', at: k.so}, {content: 'd = −5', role: 'k', at: k.so + 20}, {content: 'n = 20', role: 'inner', at: k.t20}]} />
			<SlotRow x={A1.x} y={A1.y - 160} vals={['12', '', '', '…', fr >= k.e83 ? '−83' : '?']} labels={A1L} />
			<FrameSvg><g opacity={prog(fr, k.t20 + 20, 12)}><path d={`M${sx(0)},${A1.y - 30} v14 H${sx(4)} v-14`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" /></g></FrameSvg>
			<Hand x={sx(1)} y={A1.y + 0} at={k.t20 + 20} size={44} color={AMBER}>19 steps after the first</Hand>
			<Row x={96} y={330} at={k.so} size={52} dim={prog(fr, k.thats, 12)} small={40}>a₂₀ = 12 + 19 × (−5)</Row>
			<Row x={96} y={410} at={k.thats} size={52}>{'    '}= 12 − 95</Row>
			<AnswerBox x={96} y={500} at={k.e83} size={56}>a₂₀ = −83</AnswerBox>
			<MistakeCard x={96} y={660} w={1000} at={k.wrong} size={46} wrong={<>12 + 20 × (−5) = −88</>} caption="20 steps: one too many" />
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	const L = {x: 1000, y: 360, cardW: A2.cardW, gap: A2.gap};
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>a₃ = 10 and a₇ = 26. Find the first term and the common difference.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'a₃ = 10', role: 'a', at: k.from}, {content: 'a₇ = 26', role: 'a', at: k.from + 20}]} />
			<Ladder x={L.x} y={L.y} cardW={L.cardW} gap={L.gap} size={46} values={['2', '', '10', '', '', '', '26']} dropAt={[k.a2, 1e9, -30, 1e9, 1e9, 1e9, -30]} labels={i => `n = ${i + 1}`} slots={7} />
			<Arcs x={L.x} y={L.y} cardW={L.cardW} gap={L.gap} size={38} arcs={[
				...[0, 1, 2, 3].map(i => ({from: 2 + i, to: 3 + i, label: String(i + 1), at: k.four - 10 + i * 6})),
				...[0, 1].map(i => ({from: 2 - i, to: 1 - i, label: '− 4', at: k.now + 20 + i * 10})),
			]} />
			<Row x={96} y={330} at={k.rises} size={52} dim={prog(fr, k.now, 12)} small={40}>4d = 26 − 10 = 16</Row>
			<AnswerBox x={96} y={420} at={k.d4} size={52}>d = 4</AnswerBox>
			<Row x={96} y={540} at={k.ten} size={52}>a = 10 − 2 × 4</Row>
			<AnswerBox x={96} y={630} at={k.a2} size={52}>a = 2</AnswerBox>
			<MistakeCard x={96} y={770} w={1000} at={k.wrong} size={46} wrong={<>d = 16 ÷ 5 = 3.2</>} caption="5 terms, but 4 steps" />
			<Hand x={L.x + 2 * (L.cardW + L.gap)} y={L.y + 160} at={k.four} size={42} color={AMBER}>a₃ to a₇: 4 steps</Hand>
		</>
	);
};

// ---------- 14. handoff: the tin pyramid (f03's opening) ----------
const PYR = {cx: 960, floor: 880};
const TinBoard: React.FC<{count?: number; line: number; chips: number; q: number; head: number}> = ({count, line, chips, q, head}) => (
	<>
		<SceneHeading text="Tins in a pyramid" at={head} size={52} />
		<TinPyramid cx={PYR.cx} floor={PYR.floor} count={count} />
		<Row x={96} y={250} at={line} size={52}>1 + 2 + 3 + … + 15 = ?</Row>
		<Hand x={96} y={330} at={line} size={40} color={POS}>{'tins in rows 1 to 15'}</Hand>
		<Chip x={1220} y={250} at={chips} size={48} color={BROWN}>Next: a shortcut for the total</Chip>
		<Chip x={1240} y={370} at={q} size={84} color={BROWN}>?</Chip>
	</>
);
/** f02's final frame (f03 opens on it). */
export const F02FinalFrame: React.FC = () => <TinBoard line={-300} chips={-300} q={-300} head={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 10, 16);
	const count = kf(fr, [[k.super - 6, 0], [k.super + 8, 1], [k.two + 8, 3], [k.three + 8, 6], [k.fifteen + 30, tinCount(15)]], false);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="A fixed difference d" at={4} size={52} />
				<ChairRig r={{...R1, cx: 330, scaleX: 140, floor: 930, pxcm: 3}} count={8} floorW={460} />
				<div style={{position: 'absolute', left: 620, top: 220, background: '#fffdf8', border: `5px solid ${INK}`, borderRadius: 18, padding: '6px 28px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK}}>aₙ = <span style={{color: BLUE}}>a</span> + (n − 1)<span style={{color: AMBER}}>d</span></div>
				<TermPlot x={620} y={380} width={1200} height={560} window={{x: [-0.2, 8.6], y: [60, 130]}} nRange={[1, 8]} at={-30} series={[{term: chairH, at: -30}]} guide={{fn: n => 6 * n + 74, at: k.line}} xTicks={[1, 2, 3, 4, 5, 6, 7, 8]} yTicks={[80, 100, 120]} xLabel="n" yLabel="aₙ (cm)" />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<TinBoard count={count} line={k.how} chips={k.short - 24} q={k.short} head={k.next} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>AP: aₙ − aₙ₋₁ = <span style={{color: AMBER}}>d</span>, the same every step.</>, at: 2},
		{content: <>aₙ = a + (n − 1)<span style={{color: AMBER}}>d</span>, where a = a₁.</>, at: 6},
		{content: <>aₙ = <span style={{color: AMBER}}>d</span>n + (a − d): linear in n, gradient d.</>, at: 10},
		{content: <>n not a whole number: the value is not a term.</>, at: 14},
		{content: <>From two terms: d = rise ÷ steps between them.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={220} w={1060} items={items} size={44} gap={60} />
				<FramedCard x={1180} y={196} w={700} h={760} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<ChairPosts x={1215} floor={560} w={100} step={126} at={-30} arcsAt={-30} size={34} />
					<div style={{position: 'absolute', left: 1230, top: 600, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}><span style={{color: BLUE}}>5 terms</span>, <span style={{color: AMBER}}>4 steps</span></div>
					<div style={{position: 'absolute', left: 1230, top: 690, width: 620, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.08, color: INK}}>{AID2}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F02FinalFrame /></div> : null}
		</>
	);
};
