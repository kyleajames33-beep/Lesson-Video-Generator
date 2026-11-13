// Scenes 10 to 15: attempt 1 (∑ 2 × 3ᵏ⁻¹ for k = 1 to 5) and its brief feedback (242; crossed: 80, the power 4),
// attempt 2 (a₂ = 6, a₅ = 48: the sum of the first 8 terms) and its brief feedback (r = 2, a = 3, S₈ = 765; crossed:
// 1530, starting at 6), the handoff (a ball dropped from 128 cm: bounce heights 64, 32, 16, … and their running totals
// under a 128 line; f07's opening frame, exported as F06FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {BounceRig, CARD_SHADOW, CARD, FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {SN_A, SN_B} from './s1';
import {AID6, AidStrip} from './s2';
import {AMBER, AMBER_STROKE, AnswerBox, BALL, BLUE, BROWN, BoxCard, Chip, FloorStrip, Frac, Framed, FramedCard, Hand, HeightScale, Ladder, POS, QStrip, Row, Sb, Sig, SlotRow, Stack, TEAL} from './parts';

const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={500} w={620} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
const SIGQ = (size: number) => <span style={{display: 'inline-flex', alignItems: 'center', whiteSpace: 'pre'}}>Evaluate <Sig lo="k = 1" hi="5" size={size} /> 2 × 3<Pow>k − 1</Pow>.</span>;
const KL = ['k = 1', 'k = 2', 'k = 3', 'k = 4', 'k = 5'];
const NL = ['n = 1', 'n = 2', 'n = 3', 'n = 4', 'n = 5', 'n = 6', 'n = 7', 'n = 8'];

// ---------- 10. attempt 1 ----------
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['counter: k = 1 to 5', <span key="r" style={{display: 'inline-block', marginTop: 12}}>rule: 2 × 3<Pow>k − 1</Pow></span>]}
		picture={<SlotRow x={780} y={530} cardW={136} gap={24} h={120} vals={['', '', '', '', '']} labels={KL} />}>
		<div>{SIGQ(52)}</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<div style={{position: 'absolute', left: 96, top: 160, width: 1728, boxSizing: 'border-box', background: CARD, borderRadius: 18, borderLeft: `10px solid ${BROWN}`, boxShadow: CARD_SHADOW, padding: '4px 28px 6px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 44, color: INK}}>{SIGQ(44)}</div>
			<GivensStrip x={96} y={316} size={36} maxW={900} items={[{content: 'a = 2', role: 'a', at: k.a}, {content: 'r = 3', role: 'k', at: k.r}, {content: 'n = 5', role: 'inner', at: k.five}]} />
			<BoxCard x={96} y={410} w={860} at={10} out={k.sum - 6} size={42} title="plan">
				<div>Write the first terms to read a and r.</div>
				<div>Count the terms from the counter (n).</div>
			</BoxCard>
			<Row x={96} y={410} at={k.sum} size={50}><span style={{color: TEAL}}>S₅</span> = <Frac n={<>2(3<Pow>5</Pow> − 1)</>} d="3 − 1" /><span style={{opacity: prog(fr, k.over + 20, 10)}}> = <Frac n="2 × 242" d="2" /></span></Row>
			<AnswerBox x={96} y={556} at={k.ans} size={56}>242</AnswerBox>
			<MistakeCard x={96} y={700} w={900} at={k.wrong} size={46} wrong={<>2(3<Pow>4</Pow> − 1) ÷ 2 = 80</>} caption="used 3⁴: the power in the sum is n" />
			<Ladder x={1040} y={420} cardW={136} h={110} gap={24} size={50} values={['2', '6', '18', '54', '162']} dropAt={[k.terms + 30, k.terms + 46, k.terms + 62, k.counter + 20, k.counter + 34]} slots={5} labels={i => KL[i]} />
			<Hand x={1040} y={600} at={k.counter} size={44} color={POS}>counter from 1 to 5:  5 − 1 + 1 = 5 terms</Hand>
			<Framed x={1040} y={720} at={-30} size={56}>{SN_A}</Framed>
			<Hand x={1040} y={922} at={-30} size={44} color={AMBER}>r &gt; 1: use the r − 1 form</Hand>
		</>
	);
};

// ---------- 12. attempt 2 ----------
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['2nd term: 6', '5th term: 48', 'find: sum of the first 8']}
		picture={<SlotRow x={770} y={530} cardW={86} gap={16} h={100} vals={['', '6', '', '', '48', '', '', '']} labels={NL} size={42} />}>
		<div>In a geometric sequence, the 2nd term is 6 and the 5th term is 48. Find the sum of the first 8 terms.</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	const rest = k.sum + 10;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['In a geometric sequence, the ', {u: '2nd term is 6', at: k.from + 10}, ' and the ', {u: '5th term is 48', at: k.from + 40}, '. Find the sum of the ', {u: 'first 8 terms', at: k.sum}, '.']} />
			<GivensStrip x={96} y={250} size={36} maxW={900} items={[{content: 'a₂ = 6', role: 'a', at: k.from + 10}, {content: 'a₅ = 48', role: 'a', at: k.from + 40}, {content: 'n = 8', role: 'inner', at: k.sum}]} />
			<BoxCard x={96} y={340} w={860} at={10} out={k.so - 6} size={42} title="plan">
				<div>Find r from the two terms, then a.</div>
				<div>Then add eight terms, starting from a.</div>
			</BoxCard>
			<Row x={96} y={340} at={k.so} size={50} dim={prog(fr, k.then, 12)} small={42}>r<Pow>3</Pow> = 48 ÷ 6<span style={{opacity: prog(fr, k.eight, 10)}}> = 8</span><span style={{opacity: prog(fr, k.r2, 10)}}>,   r = 2</span></Row>
			<Row x={96} y={412} at={k.then} size={50} dim={prog(fr, k.sum, 12)} small={42}>a × 2 = 6<span style={{opacity: prog(fr, k.a3, 10)}}>,   a = 3</span></Row>
			<Row x={96} y={490} at={k.sum} size={50}><span style={{color: TEAL}}>S₈</span> = <Frac n={<>3(2<Pow>8</Pow> − 1)</>} d="2 − 1" /><span style={{opacity: prog(fr, k.two8 + 30, 10)}}> = 3 × 255</span></Row>
			<AnswerBox x={96} y={630} at={k.ans} size={56}>765</AnswerBox>
			<MistakeCard x={96} y={760} w={900} at={k.wrong} size={46} wrong={<>6(2<Pow>8</Pow> − 1) = 1530</>} caption="used 6 as the first term" />
			<Ladder x={1010} y={380} cardW={92} h={90} gap={14} size={36} values={['3', '6', '12', '24', '48', '96', '192', '384']} dropAt={[k.a3, -30, rest, rest + 8, -30, rest + 16, rest + 24, rest + 32]} slots={8} labels={i => NL[i]} />
			<FrameSvg><g opacity={prog(fr, k.three, 12)}>
				<path d={`M${1010 + 106 + 46},366 V350 H${1010 + 4 * 106 + 46} V366`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<text x={1010 + 2.5 * 106 + 46} y={328} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMBER}}>3 multiplications</text>
			</g></FrameSvg>
			<Hand x={1010} y={560} at={k.starts} size={44} color={AMBER} w={820}>the sum starts at a = 3, not at the 2nd term</Hand>
		</>
	);
};

// ---------- 14. handoff: a bouncing ball (f07's opening frame) ----------
// The floor is this lesson's FloorStrip (cut off left of the totals chart); the rig draws its own ground line on it.
const BR = {x: 240, floorY: 880, unit: 5, spacing: 280};
const SB = {x: 1060, base: 800, blockW: 80, gap: 20, unit: 4};
const HEIGHTS = [64, 32, 16, 8, 4, 2, 1, 0.5];
const LINE_Y = SB.base - 128 * SB.unit;
/** The ball rig (t: 0 at the drop, 3.5 at the third peak), the totals of the bounce heights under the 128 line and the chips. `bare` leaves out the heading and chips. */
export const BallScene: React.FC<{head: number; t: number; build: readonly number[]; gaps: number; chip: number; next: number; q: number; bare?: boolean}> = ({head, t, build, gaps, chip, next, q, bare = false}) => {
	const fr = useCurrentFrame();
	const colX = (j: number) => SB.x + j * (SB.blockW + SB.gap) + SB.blockW / 2;
	const totals = HEIGHTS.map((_, i) => HEIGHTS.slice(0, i + 1).reduce((a, b) => a + b, 0));
	const dy = BR.floorY - 128 * BR.unit;
	return (
		<>
			{bare ? null : <SceneHeading text="A ball that keeps bouncing" at={head} size={52} />}
			<FloorStrip x0={40} x1={960} floorY={BR.floorY} h={56} />
			<HeightScale x={170} floorY={BR.floorY} unit={BR.unit} max={130} step={20} />
			<BounceRig x={BR.x} floorY={BR.floorY} unit={BR.unit} peaks={[128, 64, 32, 16]} t={t} spacing={BR.spacing} ball={{plate: BALL, w: 90}} at={-30} />
			<FrameSvg>
				<line x1={176} x2={760} y1={dy} y2={dy} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<text x={772} y={dy + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>128 cm</text>
				<line x1={SB.x - 30} x2={colX(7) + SB.blockW / 2 + 30} y1={LINE_Y} y2={LINE_Y} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<text x={SB.x - 42} y={LINE_Y + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}}>128</text>
				{totals.map((v, j) => <text key={j} x={colX(j)} y={SB.base + 88} textAnchor="middle" opacity={prog(fr, build[j] + 14, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: TEAL}}>{v === 127.5 ? '127½' : v}</text>)}
				{HEIGHTS.map((v, j) => <text key={'g' + j} x={colX(j)} y={LINE_Y - 22} textAnchor="middle" opacity={prog(fr, gaps + j * 6, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: POS}}>{v === 0.5 ? '½' : v}</text>)}
			</FrameSvg>
			<Stack x={SB.x} base={SB.base} terms={HEIGHTS} buildAt={build} blockW={SB.blockW} gap={SB.gap} unit={SB.unit} readouts={false} labelsAt={build[0]} />
			<Hand x={SB.x} y={LINE_Y - 116} at={gaps} size={40} color={POS}>gap left below 128:</Hand>
			<Hand x={SB.x} y={SB.base + 104} at={Math.min(head, build[0])} size={40} color={TEAL}>bounce heights added up (cm)</Hand>
			{bare ? null : <Chip x={96} y={956} at={chip} size={44} color={BROWN}>What if it never stops bouncing?</Chip>}
			{bare ? null : <Chip x={1010} y={84} at={next} size={44} color={BROWN}>Next: an endless sum</Chip>}
			{bare ? null : <Chip x={1720} y={76} at={q} size={84} color={BROWN}>?</Chip>}
		</>
	);
};
/** f06's final frame: f07's opening frame. */
export const F06FinalFrame: React.FC = () => <BallScene head={-300} t={3.5} build={HEIGHTS.map(() => -300)} gaps={-300} chip={-300} next={-300} q={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.drop - 8, 16);
	const lin = (a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
	// drop to the floor by "bounce heights", then one bounce for each of sixty-four, thirty-two and sixteen (to its peak).
	const t = lin(k.suppose - 30, k.its) + lin(k.s64 - 14, k.t32 - 14) + lin(k.t32 - 14, k.t16 - 14) + lin(k.t16 - 14, k.t16 + 16) + 0.5 * lin(k.t16 + 16, k.t16 + 30);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Shift and cancel gives the sum of n terms" at={4} size={52} />
				<Framed x={96} y={230} at={-30} size={96}>{SN_B}</Framed>
				<Hand x={900} y={300} at={k.long - 20} size={84} color={AMBER}>r ≠ 1</Hand>
				<Hand x={96} y={540} at={20} size={56} color={POS}>times r shifts every term one step along; subtract and the middle cancels</Hand>
				<AidStrip x={96} y={680} sq={170} slide={1} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<BallScene head={k.drop} t={t} build={HEIGHTS.map((_, j) => (j < 3 ? [k.s64, k.t32, k.t16][j] + 16 : k.t16 + 30 + (j - 3) * 10))} gaps={k.gap - 20} chip={k.what} next={k.never} q={k.never + 14} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>(x − 1)(x<Pow>n − 1</Pow> + … + x + 1) = x<Pow>n</Pow> − 1.</>, at: 2},
		{content: <><span style={{color: TEAL}}>S<Sb>n</Sb></span> = a(1 − r<Pow>n</Pow>) ÷ (1 − r) = a(r<Pow>n</Pow> − 1) ÷ (r − 1), r ≠ 1.</>, at: 6},
		{content: <>r = 1: <span style={{color: TEAL}}>S<Sb>n</Sb></span> = na.</>, at: 10},
		{content: <>Bracket a negative r: (−3)<Pow>6</Pow> = 729.</>, at: 14},
		{content: <>The power in <span style={{color: TEAL}}>S<Sb>n</Sb></span> is n, the number of terms.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1060} items={items} size={42} gap={62} />
				<FramedCard x={1180} y={196} w={700} h={640} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<AidStrip x={1220} y={290} sq={124} slide={1} />
					<div style={{position: 'absolute', left: 1220, top: 440, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.12, color: INK}}>{AID6[0]}</div>
					<div style={{position: 'absolute', left: 1220, top: 590, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.12, color: INK}}>{AID6[1]}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F06FinalFrame /></div> : null}
		</>
	);
};
