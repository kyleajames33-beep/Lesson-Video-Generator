// Scenes 6 to 10: Var(X) and σ for x/8 (with the uniform result and the train check); the playlist density beyond the
// course (set-up, the application, the shuffled running average); the memory aid; attempt 1 and its feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {QuestionCard, RunningMeanTrace, SceneHeading, SpreadBrackets, StudioPlot, GivensStrip, kf, makePlot, paceCount} from '../../math/studio';
import type {StudioPace} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {hold} from './common';
import {AMBER, AnswerBox, BeamDensity, BoxCard, Chip, DATA_R, DENS, Ev, FramedCard, GOOD, GREY, Hand, INK, Int, MU8, PHONES, PlaylistStrip, Plate, QStrip, RED, Row, SIG8, SONGS, Slip, Task, VIO, f2x, f8, fSong, mss, ticks} from './parts';
import {GX, MX, WX} from './s1';
import {ToolPanel} from './toolpanel';

// ---------- 6. working out the variance and σ ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const uniOut = k.uniform;
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={40}>Find Var(X) and σ for f(x) = x/8, 0 ≤ x ≤ 4.</Task>
			<BoxCard x={1080} y={150} w={800} at={-30} size={36} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = x/8 on [0, 4], 0 elsewhere</div><div style={{color: VIO.ink, fontWeight: 800}}>μ = 8/3 (found before)</div></BoxCard>
			<BeamDensity {...GX} win={WX} f={f8} from={0} to={4} t={MU8} xTicks={ticks([0, 1, 2, 3, 4])} yTicks={[{value: 0.5, label: '½'}]} mu={{label: 'μ = 8/3', o: 1}} />
			<SpreadBrackets y={MX.pf(0, 0.57)[1]} mu={MU8} sigma={SIG8} ks={[1]} map={v => MX.pf(v, 0)[0]} at={k.four} muLabel="" labels={() => 'μ ± σ'} />
			<Hand x={MX.pf(MU8 - SIG8, 0)[0] - 70} y={MX.pf(0, 0.57)[1] - 4} at={k.four + 20} size={30} color={GREY}>≈ 1.72</Hand>
			<Hand x={MX.pf(0.4, 0)[0]} y={MX.pf(0, 0.44)[1]} at={k.it} size={40} color={VIO.ink}>spread around μ</Hand>
			<Row x={1080} y={330} at={k.for} out={uniOut} size={44} dim={prog(fr, k.eight, 12) * 0.3}>E(X²) = <Int lo="0" hi="4" /> x² · x/8 dx</Row>
			<Row x={1080} y={410} at={k.thats} out={uniOut} size={44} dim={prog(fr, k.eight, 12) * 0.3}>= (1/8)<Ev lo="0" hi="4">x⁴/4</Ev> = 256/32</Row>
			<AnswerBox x={1080} y={490} at={k.eight} out={uniOut} size={44}>E(X²) = 8</AnswerBox>
			<Row x={1080} y={330} at={k.uniform} size={38} color={INK}>uniform on [a, b]: Var(X) = (b − a)²/12</Row>
			<Row x={1080} y={400} at={k.train} size={40}>train: (5 − 1)²/12 = 16/12 = 4/3</Row>
			<Row x={1080} y={470} at={k.thirds} size={30} color={GREY}>check: <Int lo="1" hi="5" /> x²/4 dx − 3² = 31/3 − 9 = 4/3</Row>
			<Row x={1080} y={580} at={k.subtract} size={44} dim={prog(fr, k.ninths, 12) * 0.3}>Var(X) = 8 − (8/3)² = 8 − 64/9</Row>
			<AnswerBox x={1080} y={650} at={k.ninths} size={44}>Var(X) = 8/9</AnswerBox>
			<Slip x={1460} y={640} at={k.ninths + 40} strikeAt={k.ninths + 62} size={34} caption="subtract μ², not μ">Var = 8 − 8/3</Slip>
			<Row x={1080} y={760} at={k.quick} size={32} color={GREY}>E(X²) = 8 ≥ μ² = 64/9 ≈ 7.1 ✓</Row>
			<AnswerBox x={1080} y={820} at={k.four} size={44}>σ = √(8/9) = 2√2/3 ≈ 0.94</AnswerBox>
		</>
	);
};

// ---------- 7. back to the playlist: beyond the course ----------
const G7 = {x: 40, y: 320, w: 1000, h: 520} as const;
const W7 = {x: [1, 7] as [number, number], y: [0, 0.5] as [number, number]};
const M7 = makePlot(G7.x, G7.y, G7.w, G7.h, W7);
const IN1 = 'integrate x*(pi/8)*sin(pi*(x-2)/4) from 2 to 6';
const IN2 = 'integrate x^2*(pi/8)*sin(pi*(x-2)/4) from 2 to 6';
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const B = prog(fr, k.shuffle - 6, 20);
	const pace: StudioPace = {at: k.shuffle + 12, slow: 3, every: 14, until: k.four + 10};
	const n = paceCount(60, fr, pace);
	const sym = prog(fr, k.curve, 12) * (1 - prog(fr, k.curve + 50, 16));
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={36}>Find E(X) and Var(X): song lengths, 2 ≤ x ≤ 6.</Task>
			<BoxCard x={1080} y={150} w={800} at={k.suppose} size={34} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = (π/8) sin(π(x − 2)/4)</div><div style={{fontWeight: 800}}>for 2 ≤ x ≤ 6, 0 elsewhere</div></BoxCard>
			{B < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - B}}>
				<BeamDensity {...G7} win={W7} f={fSong} from={2} to={6} t={4} tri={prog(fr, k.curve - 20, 14)} mu={{label: 'μ = 4', o: prog(fr, k.curve, 12)}} xTicks={ticks([2, 3, 4, 5, 6])} yTicks={[{value: Math.PI / 8, label: 'π/8'}]} xLabel="x (min)" yLabel="f(x)" at={k.suppose}>
					{m => {const [px, top] = m.p(4, 0.47), [, b] = m.p(4, 0); return sym > 0.01 ? <line x1={px} x2={px} y1={top} y2={b} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="12 8" opacity={sym} /> : null;}}
				</BeamDensity>
				<Plate plate={PHONES} x={830} y={340} w={180} />
				<Row x={1080} y={330} at={k.suppose} out={k.never - 6} size={44}>is f a density?</Row>
				<Row x={1080} y={330} at={k.never} out={k.so} size={44}>f(x) ≥ 0 on [2, 6]</Row>
				<Row x={1080} y={392} at={k.one} out={k.so} size={36}><Int lo="2" hi="6" /> f(x) dx = −½<Ev lo="2" hi="6">cos(π(x − 2)/4)</Ev> = 1 ✓</Row>
				<Row x={1080} y={470} at={k.but} out={k.var} size={38}>E(X) = <Int lo="2" hi="6" /> x · (π/8) sin(π(x − 2)/4) dx</Row>
				<Hand x={1080} y={548} at={k.func} out={k.so} size={40} color={RED}>x × sine: not a rule in this course</Hand>
				<ToolPanel x={1080} y={550} w={800} title="online calculator" input={IN1} output="4" typeAt={k.so + 10} outputAt={k.app + 6} cps={30} inputSize={30} at={k.so} out={k.var} />
				<Row x={1080} y={470} at={k.var} size={44}>Var(X) = <Int lo="2" hi="6" /> x² f(x) dx − μ²</Row>
				<ToolPanel x={1080} y={550} w={800} title="online calculator" input={IN2} output="20 − 32/π² ≈ 16.758" typeAt={k.var + 20} outputAt={k.app2 + 6} cps={30} inputSize={30} at={k.var} />
				<Hand x={1100} y={800} at={k.then} out={k.app2 + 30} size={40} color={VIO.ink}>say you used it</Hand>
				<Chip x={1080} y={866} at={k.then + 20} out={k.seconds - 10} size={28} color={GREY}>write: evaluated using an online computational application</Chip>
				<Row x={1080} y={800} at={k.app2 + 40} size={38}>Var(X) ≈ 16.758 − 4² ≈ 0.758</Row>
				<AnswerBox x={1080} y={862} at={k.seconds} size={36}>E(X) = 4 min, σ ≈ 0.87 min ≈ 52 s</AnswerBox>
				<Slip x={150} y={360} at={k.seconds + 16} strikeAt={k.seconds + 34} size={32} caption="that's Var; σ = √Var">σ = 0.76</Slip>
			</div> : null}
			{B > 0 ? <div style={{position: 'absolute', inset: 0, opacity: B}}>
				<Plate plate={PHONES} x={96} y={330} w={280} />
				<PlaylistStrip x={440} y={340} w={1400} minutes={240} shown={n} mark={{at: 40.11, label: '10 songs: 40.1 min', o: n >= 10 ? prog(fr, pace.at, 1) : 0}} />
				<RunningMeanTrace x={440} y={450} width={1000} height={420} values={SONGS} shown={n} target={4} yRange={[2.5, 5.5]} yTicks={[3, 4, 5]} countTicks={[1, 10, 20, 40, 60]} targetLabel="app: 4 min" xLabel="songs played" yLabel="running average (min)"
					readout={{x: 1480, y: 470, width: 400, rows: (c, mean) => [{label: 'songs played', value: c, digits: 0, role: 'a'}, {label: 'average', value: c ? mean : 0, text: c ? mss(mean) : '–', role: 'a'}]}} at={k.shuffle} />
				<Hand x={1480} y={700} at={k.four} size={42} color={DATA_R.ink} w={400}>settles near 4</Hand>
				<Chip x={96} y={880} at={k.rough} out={k.show} size={30} color={GREY}>40 min ÷ 4 min ≈ 10 songs&apos; worth (rough; the last may not finish)</Chip>
				<Hand x={96} y={880} at={k.show} size={34} color={INK}>show: the limits, x f(x) or x² f(x), − μ², the result and the tool used</Hand>
				<AnswerBox x={96} y={660} at={-30} size={32}>{'E(X) = 4 min\nσ ≈ 0.87 min'}</AnswerBox>
			</div> : null}
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	return (
		<>
			<SceneHeading text="Remember the switch" at={4} size={48} />
			<FramedCard x={160} y={170} w={1600} h={720} at={-30} />
			<div style={{position: 'absolute', left: 210, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Plate plate={PHONES} x={230} y={260} w={220} />
			<BeamDensity x={200} y={520} w={460} h={300} win={{x: [1, 7], y: [0, 0.5]}} f={fSong} from={2} to={6} t={4} xTicks={ticks([2, 4, 6])} yTicks={[]} xLabel="x" yLabel="f" />
			<Hand x={720} y={250} at={k.sum} size={58} color={INK} w={980}>Sum becomes integral; P(x) becomes f(x) dx.</Hand>
			<Row x={720} y={450} at={k.p} size={48} color={VIO.ink}>Σ x P(x)   →   <Int lo="a" hi="b" /> x f(x) dx</Row>
			<Row x={720} y={580} at={k.one - 40} size={40} color={GOOD.ink}>E(X) = <Int lo="a" hi="b" /> x f(x) dx</Row>
			<Row x={720} y={660} at={k.one} size={40} color={GOOD.ink}>Var(X) = <Int lo="a" hi="b" /> x² f(x) dx − μ²</Row>
			{fr < 0 ? null : null}
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1 = 'A continuous random variable X has probability density function f(x) = 2x for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find E(X) and Var(X).';
export const S09: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause}><div>{Q1}</div></QuestionCard>
		<StudioPlot x={420} y={420} width={800} height={400} window={{x: [-0.2, 1.2], y: [0, 2.2]}} xTicks={ticks([0.5, 1])} yTicks={ticks([1, 2])} xLabel="x" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1260} y={450} w={340} at={10} size={36} title="to do"><div style={{fontWeight: 800}}>find E(X)</div><div style={{fontWeight: 800}}>find Var(X)</div></BoxCard>
	</>
);

// ---------- 10. feedback 1 ----------
const G10 = {x: 40, y: 340, w: 900, h: 560} as const;
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has probability density function ', {u: 'f(x) = 2x', at: k.e}, ' for ', {u: '0 ≤ x ≤ 1', at: k.e}, ', and 0 elsewhere. Find E(X) and Var(X).']} size={30} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'f(x) = 2x', role: 'b', at: k.e}, {content: '0 ≤ x ≤ 1', at: k.e}]} />
			<BeamDensity {...G10} win={{x: [-0.2, 1.2], y: [0, 2.3]}} f={f2x} from={0} to={1} t={kf(fr, [[0, 0.5], [k.thirds - 20, 0.5], [k.thirds + 10, 2 / 3]])} tilt={kf(fr, [[0, 4], [k.thirds - 20, 4], [k.thirds + 10, 0]])} tri={prog(fr, k.e, 12)} mu={{label: 'μ = 2/3', o: prog(fr, k.thirds + 10, 12)}} xTicks={ticks([1])} yTicks={ticks([1, 2])} />
			<Row x={980} y={350} at={k.e} size={44} dim={prog(fr, k.thirds, 12) * 0.3}>E(X) = <Int lo="0" hi="1" /> x · 2x dx = <Ev lo="0" hi="1">2x³/3</Ev></Row>
			<AnswerBox x={980} y={430} at={k.thirds} size={44}>E(X) = 2/3</AnswerBox>
			<Row x={980} y={530} at={k.e2} size={40}>E(X²) = <Int lo="0" hi="1" /> 2x³ dx = <Ev lo="0" hi="1">x⁴/2</Ev> = 1/2</Row>
			<Row x={980} y={610} at={k.so} size={44} dim={prog(fr, k.eighteenth, 12) * 0.3}>Var(X) = 1/2 − (2/3)² = 1/2 − 4/9</Row>
			<AnswerBox x={980} y={680} at={k.eighteenth} size={44}>Var(X) = 1/18</AnswerBox>
			<Slip x={980} y={780} at={k.an} strikeAt={k.one} size={40} caption="that's the total area, always 1">E(X) = ∫₀¹ 2x dx = 1</Slip>
		</>
	);
};
export {AMBER};
