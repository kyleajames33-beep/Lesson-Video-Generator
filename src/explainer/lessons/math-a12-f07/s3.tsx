// Scenes 10 to 15: attempt 1 (10 + 10r + 10r² + … has a limiting sum of 40: find r) and its brief feedback (r = ¾;
// crossed: r = −3), attempt 2 (1 + 2x + 4x² + …: the values of x, and the sum) and its brief feedback (−½ < x < ½,
// S∞ = 1/(1 − 2x); crossed: −1 < x < 1), the handoff (a town of 20 000 growing 5% a year: a solid stand-in for f08's
// opening frame, exported as F07FinalFrame and F08OpeningStandIn) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, PeriodTimeline, Pow, QuestionCard, SceneHeading, SvgPlate, TermPlot, usePlatePreload} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {SINF} from './s1';
import {AidBounce} from './s2';
import {AMBER, AnswerBox, BROWN, BoxCard, Chip, Frac, Framed, FramedCard, Hand, POS, QStrip, Row, Sb, TEAL, TOWN, XLine, gpSum} from './parts';

const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={500} w={620} at={6} size={44} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
const T = (size: number, fill: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill} as React.CSSProperties);

// ---------- 10. attempt 1 ----------
/** The totals plot with only what the question gives: the first total (a = 10) and the limiting sum of 40. */
const Col40: React.FC = () => (
	<TermPlot x={800} y={450} width={760} height={400} window={{x: [0, 12.8], y: [0, 46]}} nRange={[1, 12]} at={-30} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[10, 20, 30, 40]} xLabel="" yLabel="total of n terms"
		series={[{term: n => (n === 1 ? 10 : NaN), color: TEAL, at: -30, stagger: 0}]} limitLine={{Y: 40, label: '40', opacity: 1}} />
);
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={[<>10 + 10r + 10r<Pow>2</Pow> + …</>, 'limiting sum: 40', 'find r']} picture={<Col40 />}>
		<div>The geometric series 10 + 10r + 10r<Pow>2</Pow> + … has a limiting sum of 40. Find r.</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The geometric series ', {u: '10', at: k.here}, ' + 10r + 10r² + … has a ', {u: 'limiting sum of 40', at: k.so + 20}, '. Find r.']} />
			<GivensStrip x={96} y={250} size={36} maxW={900} items={[{content: 'a = 10', role: 'a', at: k.here}, {content: 'S∞ = 40', role: 'b', at: k.so + 20}]} />
			<Row x={96} y={340} at={k.so} size={48} dim={prog(fr, k.then, 12)} small={42}><Frac n="10" d="1 − r" /><span style={{opacity: prog(fr, k.forty, 10)}}> = 40</span></Row>
			<Row x={96} y={470} at={k.then} size={48}>1 − r = <Frac n="10" d="40" /><span style={{opacity: prog(fr, k.quarter, 10)}}> = ¼</span></Row>
			<AnswerBox x={96} y={600} at={k.r} size={54}>r = ¾</AnswerBox>
			<Chip x={380} y={610} at={k.check + 40} size={38} color={TEAL}>|¾| &lt; 1: the limiting sum exists  ✓</Chip>
			<MistakeCard x={96} y={740} w={940} at={k.wrong} size={46} wrong={<>r = −3</>} caption="1 − r = 40 ÷ 10 is upside down; and |−3| > 1" />
			<TermPlot x={1100} y={300} width={780} height={520} window={{x: [0, 12.8], y: [0, 46]}} nRange={[1, 12]} at={-30} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[10, 20, 30, 40]} xLabel="" yLabel="total of n terms"
				series={[{term: n => gpSum(10, 0.75, n), color: TEAL, at: k.r + 20, stagger: 8}]} limitLine={{Y: 40, label: '40', opacity: 1}} />
			<Hand x={1180} y={840} at={k.r + 20} size={42} color={TEAL}>with r = ¾ the totals close in on 40</Hand>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = <>For what values of x does the geometric series 1 + 2x + 4x<Pow>2</Pow> + … have a limiting sum? Find the limiting sum in terms of x.</>;
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={[<>1 + 2x + 4x<Pow>2</Pow> + …</>, 'which x give a limiting sum?', 'the sum, in terms of x']} picture={<XLine x={800} y={660} w={720} />}>
		<div>{Q2}</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['For what ', {u: 'values of x', at: k.needs}, ' does the geometric series ', {u: '1 + 2x + 4x²', at: k.each}, ' + … have a limiting sum? Find the limiting sum ', {u: 'in terms of x', at: k.then}, '.']} />
			<GivensStrip x={96} y={296} size={36} maxW={900} items={[{content: 'a = 1', role: 'a', at: k.first + 20}, {content: 'r = 2x ÷ 1 = 2x', role: 'k', at: k.so}]} />
			<BoxCard x={96} y={390} w={860} at={10} out={k.size - 6} size={42} title="plan">
				<div>Read a and r from the series.</div>
				<div>Then apply |r| &lt; 1 to that ratio.</div>
			</BoxCard>
			<Row x={96} y={380} at={k.size} size={48} dim={prog(fr, k.x, 12)} small={42}>|2x| &lt; 1<span style={{opacity: prog(fr, k.two, 10)}}>,   −1 &lt; 2x &lt; 1</span></Row>
			<AnswerBox x={96} y={460} at={k.x} size={50}>−½ &lt; x &lt; ½</AnswerBox>
			<AnswerBox x={96} y={570} at={k.one} size={46}>S<Sb>∞</Sb> = <Frac n="1" d="1 − 2x" /></AnswerBox>
			<MistakeCard x={96} y={730} w={940} at={k.wrong} size={46} wrong={<>−1 &lt; x &lt; 1</>} caption="the condition is on the ratio, r = 2x" />
			<XLine x={1090} y={470} w={690} shadeAt={k.half} />
			<Hand x={1090} y={360} at={k.needs} size={44} color={AMBER}>a limiting sum needs |r| &lt; 1</Hand>
			<Hand x={1090} y={600} at={k.one + 60} size={36} color={POS} w={740}>x = 0: 1 + 0 + 0 + … = 1 (ratio 0, so not a GP by our definition, but it still sums)</Hand>
		</>
	);
};

// ---------- 14. handoff: a growing town (a stand-in for f08's opening frame) ----------
const TW = {x: 315, y: 610, w: 1290};
const TownBoard: React.FC<{head: number; t0: number; t1: number; arc: number; rest: number; tag: number; chip: number; q: number}> = ({head, t0, t1, arc, rest, tag, chip, q}) => {
	usePlatePreload([TOWN.src]);
	return (
		<>
			<SceneHeading text="A growing town" at={head} size={52} />
			<FrameSvg><SvgPlate plate={TOWN} x={TW.x} y={TW.y} w={TW.w} /></FrameSvg>
			<PeriodTimeline x={310} y={520} tabW={196} gap={18} unit={0.0075} periods={[
				{label: 't = 0', value: 20000, valueText: '20 000', at: t0},
				{label: 'after 1 year', value: 21000, valueText: '21 000', at: t1},
				...[2, 3, 4, 5, 6].map(n => ({label: `after ${n} years`, at: rest + (n - 2) * 5, unknown: true})),
			]} arcs={[{from: 0, to: 1, label: '×1.05', at: arc}]} />
			<Hand x={96} y={390} at={t0} size={38} color={POS} w={190}>people in the town</Hand>
			<Hand x={720} y={236} at={tag} size={44} color={POS}>grows 5% each year</Hand>
			<Chip x={1010} y={84} at={chip} size={44} color={BROWN}>Next: growth and decay models</Chip>
			<Chip x={1740} y={76} at={q} size={84} color={BROWN}>?</Chip>
		</>
	);
};
/** f08's opening frame, drawn here as a solid stand-in (f08 is not built): f07's final frame. */
export const F08OpeningStandIn: React.FC = () => <TownBoard head={-300} t0={-300} t1={-300} arc={-300} rest={-300} tag={-300} chip={-300} q={-300} />;
export const F07FinalFrame = F08OpeningStandIn;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.growing - 8, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Shrinking ratio, settling sum" at={4} size={52} />
				<Framed x={96} y={230} at={10} size={110}>{SINF}</Framed>
				<Hand x={96} y={560} at={k.exactly - 20} size={84} color={AMBER}>exactly when |r| &lt; 1</Hand>
				<AidBounce x={960} floorY={760} unit={3.2} spacing={270} line />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<TownBoard head={k.growing} t0={k.t20 - 10} t1={k.grows + 40} arc={k.grows} rest={k.how} tag={k.grows} chip={k.six + 20} q={k.six + 34} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>|r| &lt; 1: r<Pow>n</Pow> → 0, so <span style={{color: TEAL}}>S<Sb>n</Sb></span> → a ÷ (1 − r).</>, at: 2},
		{content: <><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = a ÷ (1 − r), only when |r| &lt; 1.</>, at: 6},
		{content: <>State |r| &lt; 1 before using the formula.</>, at: 10},
		{content: <>|r| ≥ 1: no limiting sum.</>, at: 14},
		{content: <>r = 2x: the condition is |2x| &lt; 1.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1040} items={items} size={44} gap={66} />
				<FramedCard x={1180} y={196} w={700} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<AidBounce x={1330} floorY={520} unit={1.8} spacing={150} line />
					<div style={{position: 'absolute', left: 1220, top: 560, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.1, color: INK}}>Shrinking ratio, settling sum.</div>
					<div style={{position: 'absolute', left: 1220, top: 710, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}><span style={{color: AMBER}}>|r| &lt; 1:</span>  <span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="a" d="1 − r" /></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F07FinalFrame /></div> : null}
		</>
	);
};
