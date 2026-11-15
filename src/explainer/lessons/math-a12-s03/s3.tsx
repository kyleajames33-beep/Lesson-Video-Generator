// Scenes 9 to 14: attempt 1 (E(X) and Var(X) from a table) and its brief feedback (1.6, 3.2, 0.64; crossed: subtract
// μ), attempt 2 (find a and b from E(X) = 2.3) and its brief feedback (a = 0.3, b = 0.5; crossed: 0.4 each), the
// handoff (the visit bars splitting into thin bars across an interval: exported as S03FinalFrame, s04's opening
// frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, ProbabilityBars, QuestionCard, SceneHeading, SpreadBrackets, StudioBalanceBeam, smooth} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, BeamQuestion, BoxCard, Carrier, Cat, Chip, FramedCard, GOOD, Hand, MODEL, POS, QStrip, Row, Slip, Table, ThinBars, VIOLET, XS, YAxis} from './parts';

const visitTicks = XS.map(v => ({value: v, label: String(v)}));
const P1 = [0.1, 0.3, 0.5, 0.1];
const Q1 = 'A discrete random variable X has the distribution below. Find E(X) and Var(X).';
const Q2 = 'A discrete random variable X takes the values 1, 2 and 3, with P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b. Given that E(X) = 2.3, find a and b.';

// ---------- 9. attempt 1 ----------
export const S09: React.FC = () => (
	<>
		<QuestionCard at={0} size={42} w={1700} y={170} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause}><div>{Q1}</div></QuestionCard>
		<Table x={96} y={380} size={44} colW={130} headW={170} at={6} rows={[{head: 'x', cells: ['0', '1', '2', '3']}, {head: 'P(x)', cells: P1.map(String)}]} />
		<BoxCard x={96} y={560} w={420} at={6} size={36} title="given"><div style={{fontWeight: 800}}>x: 0, 1, 2, 3</div><div style={{fontWeight: 800}}>P(x): 0.1, 0.3, 0.5, 0.1</div><div style={{fontWeight: 800}}>find E(X), Var(X)</div></BoxCard>
		<Cat x={560} y={600} w={260} />
		<YAxis x={860} y={330} w={640} h={470} n={4} max={0.6} ticks={[0.2, 0.4, 0.6].map(v => ({value: v, label: String(v)}))} at={6} />
		<ProbabilityBars x={860} y={330} width={640} height={470} labels={['0', '1', '2', '3']} values={[0, 0, 0, 0]} max={0.6} xLabel="x" yLabel="P(x)" at={6} />
	</>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const pivot = 1.2 + 0.4 * smooth(prog(fr, k.six, 30));
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A discrete random variable X has the distribution below ', {u: '(P(x): 0.1, 0.3, 0.5, 0.1 for x = 0, 1, 2, 3)', at: k.e}, '. Find E(X) and Var(X).']} />
			<GivensStrip x={96} y={250} size={38} items={[{content: 'x: 0, 1, 2, 3', at: k.e}, {content: 'P(x): 0.1, 0.3, 0.5, 0.1', role: 'b', at: k.e}]} />
			<Row x={96} y={340} at={k.e} size={46} dim={prog(fr, k.so, 12) * 0.25}>E(X) = 0(0.1) + 1(0.3) + 2(0.5) + 3(0.1) = 1.6</Row>
			<Row x={96} y={420} at={k.ex2} size={46} dim={prog(fr, k.so, 12) * 0.25}>E(X²) = 0 + 1(0.3) + 4(0.5) + 9(0.1) = 3.2</Row>
			<AnswerBox x={96} y={510} at={k.four - 20} size={50}>Var(X) = 3.2 − 1.6² = 3.2 − 2.56 = 0.64</AnswerBox>
			<Slip x={96} y={650} at={k.wrong} strikeAt={k.subtract} size={44} caption="subtract μ², not μ">3.2 − 1.6 = 1.6</Slip>
			<StudioBalanceBeam x={1220} y={820} width={620} range={[-0.5, 3.5]} ticks={visitTicks} weights={XS.map((x, i) => ({x, w: P1[i], label: String(P1[i]), role: 'b' as const}))} pivot={pivot} barScale={440} barWidth={80}
				pivotLabel={v => (Math.abs(v - 1.6) < 0.005 ? 'μ = 1.6' : '')} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q2}</div></QuestionCard>
		<BeamQuestion x={300} y={760} w={900} at={6} />
	</>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	const fill = smooth(prog(fr, k.a, 24));
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X takes the values 1, 2 and 3, with ', {u: 'P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b', at: k.add}, '. Given that ', {u: 'E(X) = 2.3', at: k.exp}, ', find a and b.']} />
			<GivensStrip x={96} y={250} size={38} items={[{content: 'P(1) = 0.2', at: k.add}, {content: 'P(2) = a', at: k.add}, {content: 'P(3) = b', at: k.add}, {content: 'E(X) = 2.3', role: 'gradient', at: k.exp}]} />
			<Row x={96} y={340} at={k.add} size={46} dim={prog(fr, k.take, 12) * 0.25}>0.2 + a + b = 1, so a + b = 0.8</Row>
			<Row x={96} y={416} at={k.exp} size={46} dim={prog(fr, k.take, 12) * 0.25}>1(0.2) + 2a + 3b = 2.3, so 2a + 3b = 2.1</Row>
			<Row x={96} y={492} at={k.take} size={44}>(2a + 3b) − 2(a + b) = 2.1 − 1.6, so b = 0.5</Row>
			<AnswerBox x={96} y={572} at={k.a} size={50}>a = 0.3, b = 0.5</AnswerBox>
			<Hand x={1000} y={360} at={k.use} size={40} color={VIOLET}>two unknowns: use two facts</Hand>
			<Cat x={1500} y={260} w={260} />
			<Hand x={560} y={588} at={k.a + 20} size={36} color={GOOD.ink}>check: 0.2 + 0.6 + 1.5 = 2.3</Hand>
			<Slip x={96} y={700} at={k.wrong} strikeAt={k.two - 6} size={42} caption="uses one fact only: E(X) would be 2.2">a = b = 0.4</Slip>
			<BeamQuestion x={1180} y={780} w={600} fill={{a: 0.3, b: 0.5, o: fill}} />
		</>
	);
};

// ---------- 13. handoff ----------
const TB = {x: 420, y: 330, w: 1100, h: 440} as const;
const Handoff: React.FC<{chip: number; n: number; tag: number; q: number}> = ({chip, n, tag, q}) => (
	<>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: what if X can take any value in an interval?</Chip>
		<ThinBars {...TB} n={n} />
		<Hand x={TB.x + 300} y={TB.y + TB.h + 80} at={tag} size={42} color={VIOLET}>any value in an interval</Hand>
		<Chip x={1600} y={330} at={q} size={80} color={BROWN}>?</Chip>
	</>
);
/** s03's final frame, and s04's opening frame. */
export const S03FinalFrame: React.FC = () => <Handoff chip={-300} n={64} tag={-300} q={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 4, 18);
	const n = fr < k.thinner ? 4 : fr < k.thinner2 + 12 ? 16 : 64;
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Centre and spread" at={4} size={52} />
				<AnswerBox x={96} y={200} at={4} size={46}>E(X) = μ = Σ x P(x): the balance point</AnswerBox>
				<AnswerBox x={96} y={320} at={10} size={46}>Var(X) = Σ (x − μ)² P(x) = Σ x² P(x) − μ²</AnswerBox>
				<AnswerBox x={96} y={440} at={16} size={46}>σ = √Var(X), in the units of X</AnswerBox>
				<StudioBalanceBeam x={300} y={850} width={900} range={[-0.5, 3.5]} ticks={visitTicks} pivot={1.7} barScale={460} barWidth={110} weights={XS.map((x, i) => ({x, w: [0.1, 0.3, 0.4, 0.2][i], label: '', role: 'b' as const}))} at={-30} />
				<SpreadBrackets y={630} mu={1.7} sigma={0.9} ks={[1]} map={v => 300 + (v + 0.5) * 225} at={-30} muLabel="μ" />
				<Hand x={96} y={560} at={k.every} size={38} color={INK}>every sum ran over a list of separate values</Hand>
				<Cat x={1420} y={180} w={300} />
				<Hand x={1300} y={440} at={-30} size={40} color={VIOLET}>visits: μ = 1.7, σ = 0.9</Hand>
				<Carrier x={1480} y={530} w={200} />
				<Hand x={1300} y={720} at={-30} size={38} color={VIOLET} w={560}>insurer: E(C) = $210, σ ≈ $1,134</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} n={n} tag={k.interval} q={k.no} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>E(X) = μ = Σ x P(x): the balance point and the long-run average.</>, at: 2},
		{content: <>E(X) need not be a value X can take.</>, at: 6},
		{content: <>Var(X) = E((X − μ)²) = Σ (x − μ)² P(x).</>, at: 10},
		{content: <>Quicker: Var(X) = Σ x² P(x) − μ². Square the values only.</>, at: 14},
		{content: <>σ = √Var(X): a measure of spread, in X's units.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={46} />
				<FramedCard x={1220} y={196} w={660} h={700} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: INK}}>Mean of the squares, minus the square of the mean.</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.3, color: GOOD.ink}}>Var(X) = E(X²) − μ², never negative</div>
					<Cat x={1500} y={640} w={300} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S03FinalFrame /></div> : null}
		</>
	);
};
export {MODEL};
