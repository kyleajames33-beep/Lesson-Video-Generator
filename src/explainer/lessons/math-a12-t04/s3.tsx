// Scenes 11 to 16: attempt 1 (lawnmower 90 dB against conversation 60 dB) and its brief feedback (crossed 1.5
// times), attempt 2 (populations against temperatures) and its brief feedback (crossed "big numbers need a log
// scale"), the handoff to i05's rectangles frame (exported as T04FinalFrame) and the key notes, which return
// silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, PlateImg, QuestionCard, SceneHeading} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, AidMain, DbStage, FramedCard, GREY, INK, METER, Meter, MorphStrip, NUM, Nc, PhoneScreen, QStrip, RATIO, Rc, Row, STEP, Sc, Slip, StoreStage, T04Board, T04Card, THERMO, TOWN, p10} from './parts';
import type {DbGeom} from './parts';

// ---------- 11. attempt 1 ----------
const Q1 = 'A lawnmower measures 90 dB and a conversation measures 60 dB. Using L = 10 log₁₀(I ÷ I₀), how many times more intense is the lawnmower\'s sound than the conversation?';
export const S11: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={200} hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause} picture={{node: <div style={{position: 'relative', width: 380, height: 290}}><PlateImg plate={METER} x={0} y={0} w={380} /></div>, w: 380}}><div>{Q1}</div></QuestionCard>
);

// ---------- 12. feedback 1 ----------
const G12: DbGeom = {x: 1060, w: 780, iy: 0, dy: 520, iAxis: false, labelEvery: 20, noTitle: true};
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	const step = 30 * prog(fr, k.intense - 20, 24);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={30} parts={['A lawnmower measures ', {u: '90 dB', at: k.dec}, ' and a conversation measures ', {u: '60 dB', at: k.dec}, '. Using L = ', {u: '10 log₁₀', at: k.three}, '(I ÷ I₀), how many times more intense is the lawnmower\'s sound than the conversation?']} />
			<GivensStrip x={96} y={300} size={36} items={[{content: '90 dB', at: k.dec}, {content: '60 dB', at: k.dec + 8}, {content: 'L = 10 log₁₀(I ÷ I₀)', at: k.dec + 16}]} />
			<Row x={96} y={400} at={k.dec} size={52} small={40} dim={prog(fr, k.three, 12)}><Sc>90 − 60 = 30 dB</Sc></Row>
			<Row x={96} y={480} at={k.three} size={52} small={40} dim={prog(fr, k.intense, 12)}><Sc>30</Sc> ÷ <Nc>10</Nc> = 3</Row>
			<AnswerBox x={96} y={575} at={k.intense} size={52}>ratio = 10³ = 1000</AnswerBox>
			<Slip x={96} y={700} w={760} at={k.one} strikeAt={k.one + 30} size={40} caption="the decibel scale isn't ordinary">90 ÷ 60 = 1.5 times</Slip>
			<DbStage g={G12} base={60} step={step} hopsFrom={k.intense - 10} marks={[{L: 60, o: 1, label: 'conversation', anchor: 'end'}, {L: 90, o: prog(fr, k.dec, 10), label: 'lawnmower', anchor: 'start'}]} />
			<div style={{position: 'absolute', left: 1060, top: 400, opacity: prog(fr, k.intense, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: RATIO.ink}}>three hops of × 10</div>
			<Meter x={1300} y={680} w={320} value="90" />
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2 = 'Set A: the populations of 10 towns and cities, from 1 200 to 5 300 000. Set B: the daily maximum temperatures over one month, from 21 °C to 31 °C. Which set should be graphed on a logarithmic scale? Justify your answer by referring to the range of each set.';
const TownThermo: React.FC = () => (
	<div style={{position: 'relative', width: 540, height: 560}}>
		<PlateImg plate={TOWN} x={0} y={0} w={540} />
		<PlateImg plate={THERMO} x={110} y={290} w={330} />
	</div>
);
export const S13: React.FC = () => (
	<QuestionCard at={0} size={48} w={1720} y={170} heading="Last one" hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause} picture={{node: <TownThermo />, w: 540}}><div>{Q2}</div></QuestionCard>
);

// ---------- 14. feedback 2 ----------
const POPS = [1200, 3500, 9000, 21000, 48000, 130000, 400000, 1.1e6, 2.6e6, 5.3e6];
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={28} parts={['Set A: the populations of 10 towns and cities, from ', {u: '1 200', at: k.thousand}, ' to ', {u: '5 300 000', at: k.thousand}, '. Set B: the daily maximum temperatures over one month, from ', {u: '21 °C', at: k.diff}, ' to ', {u: '31 °C', at: k.diff}, '. Which set should be graphed on a logarithmic scale? Justify your answer by referring to the range of each set.']} />
			<GivensStrip x={96} y={310} size={34} items={[{content: 'A: 1 200 to 5 300 000', at: k.five}, {content: 'B: 21 °C to 31 °C', at: k.setB}]} />
			<Row x={96} y={390} at={k.thousand} size={48} small={40} dim={prog(fr, k.ten, 12)}><Rc>5 300 000 ÷ 1 200 ≈ 4 400</Rc> <span style={{fontSize: 30, color: GREY}}>(≈ 4417)</span></Row>
			<AnswerBox x={96} y={466} at={k.ten} size={38}>{'≈ 10^3.6: more than 3 orders of magnitude, so Set A'}</AnswerBox>
			<Row x={96} y={566} at={k.diff} size={40} small={40}>31 − 21 = 10 degrees: compared by differences, linear</Row>
			<Row x={96} y={626} at={k.diff + 20} size={30} small={30} color={GREY}>°C has no true zero, so 31 ÷ 21 is not a temperature ratio</Row>
			<Slip x={96} y={700} w={900} at={k.ratio} strikeAt={k.million} size={38} caption="1 000 000 to 1 500 000: ratio 1.5">big numbers need a log scale</Slip>
			<MorphStrip x={1150} y={850} w={680} lin={[0, 6e6]} dec={[3, 7]} p={prog(fr, k.ten + 6, 46)} values={POPS} title="Set A"
				linTicks={[{v: 0, label: '0'}, {v: 2e6, label: '2 M'}, {v: 4e6, label: '4 M'}, {v: 6e6, label: '6 M'}]} />
			<PlateImg plate={TOWN} x={1300} y={560} w={420} />
		</>
	);
};

// ---------- 15. handoff ----------
const CARD15 = {main: -300, keys: [-300, -300, -300, -300], cond: -300};
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next - 4, 20);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Equal factors become equal steps" at={4} size={44} />
				<PhoneScreen />
				<div style={{position: 'absolute', inset: 0, transform: 'translateY(60px)'}}><StoreStage ext={1} p={1} backup={1} title={1} kmgt={1} /></div>
				<T04Card x={1170} y={140} s={0.5} c={CARD15} keys={false} />
				<div style={{position: 'absolute', left: 430, top: 200, opacity: prog(fr, k.end, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>end of trig graphs and modelling</div>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><T04Board headAt={k.next + 8} curveAt={k.cos - 16} rectsAt={k.rect} splitAt={k.thinner} chipAt={k.what} /></div> : null}
		</>
	);
};
/** t04's final frame (i05's rectangles frame; the next video opens on it). */
export const T04FinalFrame: React.FC = () => <T04Board headAt={-300} curveAt={-300} rectsAt={-300} splitAt={-300} chipAt={-300} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Log scale: values span many powers of 10, compared by factors.</>, at: 2},
		{content: <>Equal steps = equal factors: log(10x) = 1 + log x.</>, at: 6},
		{content: <>dB: L = <Nc>10</Nc> log₁₀(I ÷ I₀); <Sc>+10 dB</Sc> = <Rc>× 10</Rc> intensity.</>, at: 10},
		{content: <>Earthquake <Sc>+1</Sc> = <Rc>× 10</Rc>; pH <Sc>1 lower</Sc> = <Rc>× 10</Rc> [H⁺]; stars <Sc>5 lower</Sc> = <Rc>× 100</Rc>.</>, at: 14},
		{content: <><Rc>ratio</Rc> = 10^(<Sc>step</Sc> ÷ <Nc>number in front</Nc>).</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: '#8a5a12'}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1090} items={items} size={36} gap={44} />
				<FramedCard x={1230} y={196} w={650} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1270, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: '#287347'}}>Memory aid</div>
					{/* Root, 20 Nov: bare phone removed (read as a black box). */}
					<div style={{position: 'absolute', left: 1270, top: 300, width: 470, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.12, color: INK}}><AidMain /></div>
					<div style={{position: 'absolute', left: 1270, top: 500, width: 580, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, lineHeight: 1.15, color: NUM.ink}}>A minus sign flips the direction.</div>
					<div style={{position: 'absolute', left: 1270, top: 640, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, lineHeight: 1.35, color: INK}}>dB ÷ <Nc>10</Nc> · earthquake ÷ <Nc>1</Nc><br />pH ÷ <Nc>−1</Nc> · stars ÷ <Nc>−2.5</Nc></div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><T04FinalFrame /></div> : null}
		</>
	);
};
export {STEP, p10, Meter};
