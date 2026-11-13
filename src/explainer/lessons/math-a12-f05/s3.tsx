// Scenes 10 to 15: attempt 1 (the 6th term of 4, −12, 36, …) and its brief feedback (4 × (−3)⁵ = −972; crossed:
// 2916, one multiplication too many), attempt 2 (a₂ = 6, a₄ = 54: every a and r) and its brief feedback (r = ±3:
// two sequences; crossed: only r = 3), the handoff (rice on a chessboard: 1, 2, 4, 8, 16 with running totals
// 1, 3, 7, 15, 31; f06's opening frame, exported as F05FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {TERM_N} from './s1';
import {AID5, AidLadders} from './s2';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, Chip, Framed, FramedCard, GapTexts, Hand, Ladder, MiniLadder, POS, QStrip, RiceBoard, RiceStrip, Row, Sb, SlotRow, Stack, TEAL} from './parts';

const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={620} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
const NL = ['n = 1', 'n = 2', 'n = 3', 'n = 4', 'n = 5', 'n = 6'];

// ---------- 10. attempt 1 ----------
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['4, −12, 36, …', 'a geometric sequence', 'find the 6th term']}
		picture={<SlotRow x={770} y={510} cardW={118} gap={20} h={120} vals={['4', '−12', '36', '', '', '?']} labels={NL} size={50} />}>
		<div>Find the 6th term of the geometric sequence 4, −12, 36, …</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
const L11 = {x: 1010, y: 420, cardW: 122, gap: 26, h: 96};
const c11 = (i: number) => L11.x + i * (L11.cardW + L11.gap) + L11.cardW / 2;
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['Find the ', {u: '6th term', at: k.sixth}, ' of the geometric sequence ', {u: '4, −12', at: k.first + 10}, ', 36, …']} />
			<GivensStrip x={96} y={250} size={36} maxW={1000} items={[{content: 'a = 4', role: 'a', at: k.first}, {content: <>r = −12 ÷ 4<span style={{opacity: prog(fr, k.m3, 10)}}> = −3</span></>, role: 'k', at: k.first + 30}, {content: 'n = 6', role: 'inner', at: k.sixth}]} />
			<BoxCard x={96} y={340} w={860} at={10} out={k.so - 6} size={42} title="plan">
				<div>Find r from the first two terms.</div>
				<div>Term 6 is 5 multiplications from term 1.</div>
			</BoxCard>
			<Row x={96} y={344} at={k.so} size={52} dim={prog(fr, k.ans, 12)} small={44}><span style={{color: BLUE}}>a₆</span> = 4 × (−3)<Pow>5</Pow></Row>
			<Row x={96} y={424} at={k.odd} size={52}>(−3)<Pow>5</Pow> = −243   <span style={{color: POS, fontSize: 36}}>odd power: negative</span></Row>
			<AnswerBox x={96} y={512} at={k.ans + 50} size={56}>a₆ = −972</AnswerBox>
			<MistakeCard x={96} y={660} w={880} at={k.wrong} size={46} wrong={<>4 × (−3)<Pow>6</Pow> = 2916</>} caption="6 multiplications: one too many" />
			<Ladder x={L11.x} y={L11.y} cardW={L11.cardW} h={L11.h} gap={L11.gap} size={40} values={['4', '−12', '36', '−108', '324', '−972']} dropAt={[-30, -30, -30, k.so + 20, k.so + 34, k.ans + 50]} slots={6} labels={i => NL[i]} glows={[{i: 5, at: k.ans + 50}]} />
			<FrameSvg><g opacity={prog(fr, k.sixth, 12)}>
				<path d={`M${c11(0)},${L11.y - 14} V${L11.y - 30} H${c11(5)} V${L11.y - 14}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<text x={(c11(0) + c11(5)) / 2} y={L11.y - 56} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMBER}}>5 multiplications by −3</text>
			</g></FrameSvg>
		</>
	);
};

// ---------- 12. attempt 2 ----------
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['2nd term: 6', '4th term: 54', 'find every a and r']}
		picture={<SlotRow x={790} y={510} cardW={160} gap={46} h={120} vals={['', '6', '', '54']} labels={NL} size={60} />}>
		<div>In a geometric sequence, the 2nd term is 6 and the 4th term is 54. Find all possible values of a and r.</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['In a geometric sequence, the ', {u: '2nd term is 6', at: k.from + 10}, ' and the ', {u: '4th term is 54', at: k.from + 40}, '. Find ', {u: 'all possible', at: k.three}, ' values of a and r.']} />
			<GivensStrip x={96} y={250} size={36} maxW={900} items={[{content: 'a₂ = 6', role: 'a', at: k.from + 10}, {content: 'a₄ = 54', role: 'a', at: k.from + 40}]} />
			<BoxCard x={96} y={340} w={860} at={10} out={k.so - 6} size={42} title="plan">
				<div>From term 2 to term 4: two multiplications.</div>
				<div>An even gap: look for two values of r.</div>
			</BoxCard>
			<Row x={96} y={344} at={k.so} size={52} dim={prog(fr, k.three, 12)} small={44}>54 = 6 × r<Pow>2</Pow><span style={{opacity: prog(fr, k.nine, 10)}}>,   r<Pow>2</Pow> = 9</span></Row>
			<Row x={96} y={424} at={k.three} size={52}>r = 3  or  r = −3   <span style={{color: AMBER, fontFamily: FONT_HAND, fontSize: 44}}>even gap: ±</span></Row>
			<Row x={96} y={500} at={k.then} size={44} color={POS}>a = 6 ÷ r</Row>
			<AnswerBox x={96} y={572} at={k.a2} size={52}>r = 3,  a = 2</AnswerBox>
			<AnswerBox x={520} y={572} at={k.or} size={52}>r = −3,  a = −2</AnswerBox>
			<MistakeCard x={96} y={720} w={880} at={k.giving} size={46} wrong={<>only r = 3</>} caption="misses −2, 6, −18, 54" />
			<SlotRow x={1040} y={340} cardW={120} gap={84} h={84} vals={['', '6', '', '54']} labels={NL} size={46} />
			<FrameSvg><g opacity={prog(fr, k.two, 12)}>
				<path d={`M${1040 + 204 + 60},326 V310 H${1040 + 3 * 204 + 60} V326`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<text x={1040 + 2 * 204 + 60} y={296} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMBER}}>2 multiplications</text>
			</g></FrameSvg>
			<Hand x={1040} y={486} at={k.a2} size={40} color={POS}>r = 3:</Hand>
			<MiniLadder x={1040} y={536} values={['2', '6', '18', '54']} step="×3" color={BLUE} stepColor={AMBER} cardW={120} gap={84} h={84} size={46} o={prog(fr, k.a2, 12)} />
			<Hand x={1040} y={646} at={k.or} size={40} color={POS}>r = −3:</Hand>
			<MiniLadder x={1040} y={696} values={['−2', '6', '−18', '54']} step="×(−3)" color={BLUE} stepColor={AMBER} cardW={120} gap={84} h={84} size={46} stepSize={36} o={prog(fr, k.or, 12)} stepsO={prog(fr, k.or + 10, 12)} />
			<Hand x={1040} y={806} at={k.seq} size={42} color={AMBER} w={800}>both have 6 as the 2nd term and 54 as the 4th</Hand>
		</>
	);
};

// ---------- 14. handoff: rice on a chessboard (f06's opening frame) ----------
export const B = {x: 96, y: 160, w: 640};
export const ST = {x: 900, base: 800, blockW: 120, gap: 50, unit: 10};
export const ZS = {x: 900, y: 206, w: 800};
/** The rice board, its enlarged first squares and the running totals. `bare` leaves out the heading, the hand notes and the chips (f06 keeps the picture while they change). */
export const RiceScene: React.FC<{head: number; grains: readonly number[]; arcs: readonly number[]; build: readonly number[]; chip: number; next: number; q: number; bare?: boolean}> = ({head, grains, arcs, build, chip, next, q, bare = false}) => (
	<>
		{bare ? null : <SceneHeading text="What happens when we add the terms?" at={head} size={52} />}
		<RiceBoard x={B.x} y={B.y} w={B.w} grains={grains} labels={0} />
		{bare ? null : <Hand x={ZS.x} y={158} at={head} size={38} color={POS}>the first five squares, enlarged</Hand>}
		<RiceStrip x={ZS.x} y={ZS.y} w={ZS.w} grains={grains} steps={arcs} />
		<Stack x={ST.x} base={ST.base} terms={[1, 2, 4, 8, 16]} buildAt={build} blockW={ST.blockW} gap={ST.gap} unit={ST.unit} readoutSize={52} labelsAt={build[0]} />
		{bare ? null : <Hand x={ST.x} y={560} at={build[0]} size={46} color={TEAL}>running totals</Hand>}
		{bare ? null : <Chip x={560} y={878} at={chip} size={44} color={BROWN}>1 + 2 + 4 + … + 512 = ?   (10 squares)</Chip>}
		{bare ? null : <Chip x={1010} y={84} at={next} size={44} color={BROWN}>Next: add the terms fast</Chip>}
		{bare ? null : <Chip x={1720} y={76} at={q} size={84} color={BROWN}>?</Chip>}
	</>
);
/** f05's final frame: f06's opening frame. */
export const F05FinalFrame: React.FC = () => <RiceScene head={-300} grains={[1, 2, 4, 8, 16]} arcs={[1, 1, 1, 1]} build={[-300, -300, -300, -300, -300]} chip={-300} next={-300} q={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.but - 8, 16);
	const g = (at: number, full: number) => full * prog(fr, at, Math.max(10, full * 2));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Geometric: the same ratio every step" at={4} size={52} />
				<MiniLadder x={96} y={240} values={['a', 'ar', 'ar²', 'ar³']} step="×r" color={BLUE} stepColor={AMBER} cardW={270} gap={200} h={160} size={96} stepSize={72} />
				<Hand x={96} y={430} at={10} size={56} color={AMBER}>multiply by the same ratio r every step</Hand>
				<Framed x={96} y={590} at={k.nth - 20} size={120}>{TERM_N}</Framed>
				<Hand x={900} y={640} at={k.nth + 30} size={56} color={POS} w={900}>term n is n − 1 multiplications from a</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<RiceScene head={k.but} grains={[g(k.put + 30, 1), g(k.two, 2), g(k.four, 4), g(k.doubling, 8), g(k.doubling + 20, 16)]} arcs={[prog(fr, k.two + 10, 10), prog(fr, k.four + 10, 10), prog(fr, k.doubling + 10, 10), prog(fr, k.doubling + 34, 10)]}
					build={[k.t1, k.t3, k.t7, k.t15, k.t31]} chip={k.ten} next={k.without} q={k.without + 14} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>GP: every ratio <span style={{color: BLUE}}>a<Sb>n</Sb></span> ÷ <span style={{color: BLUE}}>a<Sb>n − 1</Sb></span> is <span style={{color: AMBER}}>r</span> (r ≠ 0).</>, at: 2},
		{content: <><span style={{color: BLUE}}>a<Sb>n</Sb></span> = ar<Pow>n − 1</Pow>: n − 1 multiplications from a.</>, at: 6},
		{content: <>a &gt; 0: r &gt; 1 grows, 0 &lt; r &lt; 1 shrinks towards 0.</>, at: 10},
		{content: <>r &lt; 0: the signs alternate.</>, at: 14},
		{content: <>Two terms: divide to cancel a.<br />Even gap, positive quotient: ±.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={240} w={1040} items={items} size={44} gap={60} />
				<FramedCard x={1170} y={196} w={710} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1210, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<AidLadders x={1210} y={290} dy={200} cardW={110} gap={70} h={76} size={44} stepSize={40} />
					<div style={{position: 'absolute', left: 1210, top: 380, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>Arithmetic adds the same number.</div>
					<div style={{position: 'absolute', left: 1210, top: 580, width: 640, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.1, color: INK}}>Geometric multiplies by the same number.</div>
					<div style={{position: 'absolute', left: 1210, top: 720, width: 640, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.1, color: AMBER}}>{AID5[2]}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F05FinalFrame /></div> : null}
		</>
	);
};
export {GapTexts};
