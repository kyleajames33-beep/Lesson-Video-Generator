// Scenes 11 to 16: attempt 1 (2cos(x − π/3) = √3 on 0 ≤ x ≤ 2π) and its brief feedback (crossed x = 13π/6),
// attempt 2 (tan(x/2) = √3 on −2π ≤ x ≤ 2π) and its feedback (crossed "2π/3 only"), the tide handoff (exported as
// T02FinalFrame, t03's opening frame) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {GivensStrip, IntervalPicture, KeyNotesBullets, PlateImg, QuestionCard, SceneHeading, kf} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, Bc, Chip, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, INK, KR, Kc, PI, QStrip, Row, SUN, Slip, TideStage, WMap} from './parts';
import {T02Card} from './s2';

// ---------- 11. attempt 1 ----------
export const S11: React.FC = () => (
	<QuestionCard at={0} size={44} w={1480} y={200} hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}
		picture={{node: <IntervalPicture w={460} h={150} range={[-0.4, 2 * PI + 0.4]} from={0} to={2 * PI} ticks={[{value: 0, label: '0'}, {value: PI, label: 'π'}, {value: 2 * PI, label: '2π'}]} color={INK} />, w: 460}}>
		<div>Solve 2cos(x − π/3) = √3 for 0 ≤ x ≤ 2π.</div>
	</QuestionCard>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={160} size={34} parts={['Solve ', {u: '2cos', at: k.two1}, '(x − π/3) = ', {u: '√3', at: k.two1 + 8}, ' for ', {u: '0 ≤ x ≤ 2π', at: k.win}, '.']} />
			<GivensStrip x={96} y={262} size={36} items={[{content: '2cos(x − π/3) = √3', at: k.cos}, {content: '0 ≤ x ≤ 2π', at: k.cos + 10}]} />
			<Row x={96} y={360} at={k.two1} size={46} small={32} dim={prog(fr, k.win, 12)}>cos(x − π/3) = <Kc>√3/2</Kc></Row>
			<Row x={96} y={430} at={k.win} size={46} small={32} dim={prog(fr, k.cosu, 12)}><Bc>u = x − π/3: −π/3 ≤ u ≤ 5π/3</Bc></Row>
			<Row x={96} y={500} at={k.six} size={46} small={32} dim={prog(fr, k.two2, 12)}>u = π/6 or u = −π/6</Row>
			<AnswerBox x={96} y={580} at={k.two2} size={48}>x = π/6 or x = π/2</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 690}}><Slip x={0} y={0} w={520} at={k.thirteen} strikeAt={k.domain} size={36} caption="outside 0 ≤ x ≤ 2π">x = 13π/6</Slip></div>
			<WMap x={960} y={830} w={900} range={[-PI / 3 - 0.4, 13 * PI / 6 + 0.3]} domain={[0, 2 * PI]} a={1} b={-PI / 3} p={prog(fr, k.win, 30)} back={prog(fr, k.add, 36)} at={k.win - 10}
				curve={{fn: Math.cos, yr: [-1.2, 1.2], level: Math.sqrt(3) / 2, ch: 300}}
				dots={[{u: PI / 6, at: k.six - 40}, {u: -PI / 6, at: k.six}]} outs={[{u: 11 * PI / 6, at: k.six + 20}]} />
		</>
	);
};

// ---------- 13. attempt 2 ----------
export const S13: React.FC = () => (
	<QuestionCard at={0} size={44} w={1480} y={200} heading="Last one" hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause}
		picture={{node: <IntervalPicture w={460} h={150} range={[-2 * PI - 0.6, 2 * PI + 0.6]} from={-2 * PI} to={2 * PI} ticks={[{value: -2 * PI, label: '−2π'}, {value: 0, label: '0'}, {value: 2 * PI, label: '2π'}]} color={INK} />, w: 460}}>
		<div>Solve tan(x/2) = √3 for −2π ≤ x ≤ 2π.</div>
	</QuestionCard>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={160} size={34} parts={['Solve tan(', {u: 'x/2', at: k.let}, ') = √3 for ', {u: '−2π ≤ x ≤ 2π', at: k.halve}, '.']} />
			<GivensStrip x={96} y={262} size={36} items={[{content: 'tan(x/2) = √3', at: k.let}, {content: '−2π ≤ x ≤ 2π', at: k.let + 10}]} />
			<Row x={96} y={360} at={k.let} size={50} small={38} dim={prog(fr, k.halve, 12)}><Bc>u = x/2</Bc></Row>
			<Row x={96} y={430} at={k.pi1} size={50} small={38} dim={prog(fr, k.tan, 12)}><Bc>−π ≤ u ≤ π</Bc></Row>
			<Row x={96} y={500} at={k.tan} size={50} small={38} dim={prog(fr, k.earlier, 12)}>u = π/3</Row>
			<Row x={96} y={570} at={k.earlier} size={50} small={38} dim={prog(fr, k.double, 12)}>u = π/3 − π = −2π/3</Row>
			<AnswerBox x={96} y={650} at={k.three3} size={46}>x = 2π/3 or x = −4π/3</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 760}}><Slip x={0} y={0} w={560} at={k.stop} strikeAt={k.neg} size={36} caption="the domain starts at −2π">x = 2π/3 only</Slip></div>
			<WMap x={900} y={830} w={960} range={[-2 * PI - 0.4, 2 * PI + 0.4]} domain={[-2 * PI, 2 * PI]} a={0.5} b={0} p={prog(fr, k.halve, 30)} back={prog(fr, k.double, 36)} at={k.pi1 - 30}
				curve={{fn: Math.tan, yr: [-3, 3], level: Math.sqrt(3), ch: 330, breaks: [-1.5 * PI, -PI / 2, PI / 2, 1.5 * PI]}}
				dots={[{u: PI / 3, at: k.tan + 20}, {u: (-2 * PI) / 3, at: k.three2}]} />
		</>
	);
};

// ---------- 15. handoff (the tide stage; t03 opens on it) ----------
const TideHandoff: React.FC<{run: number; dot1: number; dot2: number; chip: number; next: number}> = ({run, dot1, dot2, chip, next}) => {
	const f = useCurrentFrame();
	const t = 6 * run, h = 7.5 - 6 * run;
	return <>
		<TideStage t={t} h={h} dots={[{t: 0, h: 7.5, o: prog(f, dot1, 12), label: 'high tide 7.5 m'}, {t: 6, h: 1.5, o: prog(f, dot2, 12), label: 'low tide 1.5 m'}]} />
		<Chip x={96} y={96} at={next} size={34} color={BROWN}>Next: modelling with trig functions</Chip>
		<Chip x={1500} y={300} at={chip} size={52} color={KR.ink}>h(t) = ?</Chip>
	</>;
};
/** t02's final frame, and t03's opening frame. */
export const T02FinalFrame: React.FC = () => <TideHandoff run={1} dot1={-300} dot2={-300} chip={-300} next={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next - 6, 18);
	const run = kf(fr, [[k.one, 0], [k.one + 46, 1]]);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="How many to expect, and every one" at={4} size={44} />
				<T02Card x={300} y={200} scale={0.9} c1={-300} c2={-300} c3={-300} c4={-300} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><TideHandoff run={run} dot1={k.high - 30} dot2={k.low} chip={k.time} next={k.next} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Solutions = crossings inside the domain.</>, at: 2},
		{content: <><Bc>u = a(x + b)</Bc>: do to the domain what you do to x.</>, at: 6},
		{content: <>Find every u in the window, then x = u/a − b.</>, at: 10},
		{content: <>Each cycle: <Kc>2 crossings, 1 at a max or min, 0 beyond</Kc>.</>, at: 14},
		{content: <>Check closed ends. tan: one per branch, never an asymptote.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={36} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<PlateImg plate={SUN} x={1740} y={214} w={96} />
					<div style={{position: 'absolute', left: 1260, top: 300, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.12, color: INK}}>Do to the domain what you do to x.</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>Count first, then solve.</div>
					<div style={{position: 'absolute', left: 1260, top: 620, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, lineHeight: 1.3, color: GREY}}>Some sources write a f(bx + c) + d; here the inside is a(x + b).</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><T02FinalFrame /></div> : null}
		</>
	);
};
