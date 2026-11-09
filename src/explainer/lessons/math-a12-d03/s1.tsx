// Scenes 1 to 4: the app anchor beside ln x, measuring the gradient, the gradient dots, the reflection.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, FrameSvg, FunctionSimulator, HandTag, MarkSpan, Pow, SceneHeading, fmtNum, fnStateAt, heldStops, kf, smooth, vis,
	MATH_GRADIENT, MATH_MISTAKE, MATH_STRAND_ACCENT, MATH_BLUE, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue} from './common';
import {AppRig, Chip, CurveLabel, DISPLAY, EXP, Frac, LN, Legend, NAVY, RecallChip, SQ, SQ_TICKS, lnRows} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const E_TICK = {value: Math.E, label: 'e'};

// ---------- 1. hook: is ln x its own derivative? ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const answers = cue(id, 'It answers'), app = cue(id, 'A new app'), turn = cue(id, 'Turn that'), weeks = cue(id, 'weeks', 2), soIs = cue(id, 'So is the natural'), half = cue(id, 'half'), climbing = cue(id, 'climbing'), fails = cue(id, 'fails'), then = cue(id, 'Then what');
	// d02's final frame grows into the square main graph.
	const g = smooth(prog(f, answers, 36));
	const box = {x: lerp(820, 1000, g), y: lerp(200, 170, g), w: lerp(1010, 826, g), h: lerp(720, 820, g)};
	const win = {x: [lerp(0, -3, g), lerp(4.5, 5, g)] as [number, number], y: [lerp(-1, -3, g), lerp(1.6, 5, g)] as [number, number]};
	const grown = g > 0.5;
	// App clock: weeks from 0 to ln 4, users e^t thousand.
	const tAt = (q: number) => kf(q, [[app + 20, 0], [turn - 10, Math.log(4)]]);
	const t = tAt(f);
	const T: FnKey[] = [{frame: 0, x: 1, p: {c: Math.E}}, {frame: half - 20, x: 1}, {frame: half, x: 0.5}, {frame: then - 10, x: 0.5}, {frame: then + 20, x: 1}];
	const atHalf = f >= half - 4 && f < then;
	return (
		<>
			{/* d02's final frame, held, then cleared */}
			<SceneHeading text="Next: the gradient of the log curve" at={-30} out={answers} />
			<div style={{position: 'absolute', left: 96, top: 162, opacity: 1 - prog(f, answers, 12)}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: copy the exponential, then multiply by ln of the base.</span></div>
			<Enter at={-30} out={answers} style={{position: 'absolute', left: 96, top: 300, width: 680}}>
				<div style={{background: CARD, borderRadius: 20, padding: '18px 30px 22px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)'}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>Last video:</div>
					<div style={DISPLAY(48)}>d/dx(a<Pow>x</Pow>) = (<span style={{color: MATH_BLUE}}>ln a</span>)a<Pow>x</Pow></div>
				</div>
			</Enter>
			<Enter at={-30} out={answers} style={{position: 'absolute', left: 96, top: 620}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '8px 30px 12px', boxShadow: CARD_SHADOW, border: `3px solid ${MATH_STRAND_ACCENT}`, ...DISPLAY(50)}}>Next: differentiating ln x</div>
			</Enter>
			<SceneHeading text="How long until? Differentiating ln x" at={answers + 10} size={56} />
			{/* the main graph */}
			<FunctionSimulator x={box.x} y={box.y} width={box.w} height={box.h} window={win} family={LN} timeline={T}
				color={INK} xTicks={grown ? SQ_TICKS : [1, 2, E_TICK, 3, 4]} yTicks={grown ? SQ_TICKS : [-1, 1]}
				xLabel={f >= weeks ? 'x: users (thousands)' : 'x'} yLabel={f >= weeks ? 'y: weeks' : 'y'}
				asymptotes={grown ? [0] : []}
				point={{at: -30}} tangent={{at: -30, halfLength: grown ? 150 : 190}}
				label={{content: () => <>y = ln x</>, at: -30, pos: () => [grown ? 3.2 : 3.35, grown ? 1.9 : 1.42], size: 44}}
				markers={[{X: 4, Y: Math.log(4), at: turn + 30, color: INK}]}
				overlay={gg => (
					<>
						<HandTag x={gg.pt[0] + 40} y={gg.pt[1] + 80} text="gradient ?" at={-30} out={answers} size={56} color={MATH_GRADIENT} />
						<HandTag x={gg.pt[0] + 40} y={gg.pt[1] + 70} text="gradient ?" at={then + 24} size={52} color={MATH_GRADIENT} />
						{atHalf ? <HandTag x={gg.pt[0] + 34} y={gg.pt[1] + 60} text="ln ½ ≈ −0.693" at={half + 6} size={40} color={INK} /> : null}
						{atHalf ? <HandTag x={gg.pt[0] + 34} y={gg.pt[1] + 110} text="500 users: 0.69 weeks before the start" at={half + 20} size={32} color={INK_SOFT} /> : null}
						{atHalf ? <HandTag x={gg.pt[0] + 60} y={gg.pt[1] - 150} text="still climbing: gradient > 0" at={climbing + 6} size={40} color={MATH_GRADIENT} marks={[{kind: 'arrow', from: [gg.pt[0] + 20, gg.pt[1] - 40], to: [gg.pt[0] + 120, gg.pt[1] - 120], bend: -0.1}]} markAt={climbing} /> : null}
					</>
				)} />
			<HandTag x={1720} y={520} text="4 thousand users: 1.39 weeks" at={turn + 40} out={soIs} size={36} color={INK} anchor="end" />
			{/* the app anchor */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, answers + 10, 16), transform: `translateX(${(1 - smooth(prog(f, answers + 10, 24))) * -80}px)`}}>
				<FunctionSimulator x={96} y={160} width={600} height={380} window={{x: [0, 1.6], y: [0, 4.5]}} family={EXP} timeline={[{frame: 0, x: 0, p: {c: Math.E}}, {frame: app + 20, x: 0}, {frame: turn - 10, x: Math.log(4)}]}
					color={NAVY} curveWidth={6} xLabel="x: weeks" yLabel="y: users (thousands)" xTicks={[1]} yTicks={[1, 2, 3, 4]} draw={{at: app, dur: 40}}
					point={{at: app + 10, color: NAVY}} />
				<CurveLabel x={430} y={250} at={app + 30} color={NAVY} size={40}>y = e<Pow>x</Pow></CurveLabel>
				<AppRig phone={{x: 110, y: 560, h: 420}} watch={{x: 380, y: 650, h: 300}} users={Math.exp(t)} perWeek={Math.exp(t)} weeks={t} at={answers + 10} watchLabel={`${fmtNum(t)} wk`} />
				<HandTag x={620} y={640} text="users per week" at={app + 60} size={38} color={MATH_GRADIENT} />
				<HandTag x={620} y={690} text="= users" at={app + 70} size={38} color={MATH_GRADIENT} />
				<Card x={620} y={760} w={360} at={app} pad="10px 20px 12px">
					<div style={DISPLAY(28, INK_SOFT, 700)}>1,000 users; each brings</div>
					<div style={DISPLAY(28, INK_SOFT, 700)}>1 new user a week</div>
					<div style={{...DISPLAY(32, NAVY), marginTop: 6}}>after x weeks: e<Pow>x</Pow> thousand</div>
				</Card>
				<FrameSvg style={{opacity: vis(f, turn, soIs)}}>
					<path d="M520,212 C760,180 1200,300 1690,520" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 10" fill="none" />
				</FrameSvg>
			</div>
			<div style={{position: 'absolute', left: 1100, top: 250, opacity: prog(f, soIs, 12) * (1 - 0.45 * prog(f, fails + 10, 12)), ...DISPLAY(46, INK_SOFT, 700)}}>
				<MarkSpan kind="strike" at={fails} color={MATH_MISTAKE} width={5}>d/dx(ln x) = ln x ?</MarkSpan>
			</div>
			{f < answers + 10 ? null : <Legend at={answers + 10} />}
		</>
	);
};

// ---------- shared square stage (scenes 2 to 6, 8) ----------
export const GSQ = {x: 96, y: 170, w: 826, h: 820};
const RX = 990;

// ---------- 2. measure the gradient ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const slide = cue(id, 'Slide'), p95 = cue(id, 'point nine five'), p995 = cue(id, 'point nine nine five'), one = cue(id, 'one', 3), move = cue(id, 'Now move'), half = cue(id, 'half'), quarter = cue(id, 'quarter'), two = cue(id, 'two', 2), dbl = cue(id, 'Double'), every = cue(id, 'every time');
	const T: FnKey[] = [
		{frame: 0, x: 1, p: {c: Math.E}}, ...heldStops('q', [{frame: slide, value: 1.5}, {frame: p95, value: 1.1}, {frame: p995, value: 1.01}], 26),
		{frame: move + 10, x: 1}, {frame: half, x: 2}, {frame: half + 30, x: 2}, {frame: quarter, x: 4}, {frame: quarter + 26, x: 4}, {frame: two, x: 0.5},
	];
	const st = fnStateAt(LN, T, f);
	const factor = Math.max(1.2, 90 / (Math.max(0.005, st.q - 1) * 92));
	return (
		<>
			<SceneHeading text="Measure the gradient of ln x" at={2} />
			<Legend />
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={LN} timeline={T}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x: users (thousands)" yLabel="y: weeks" asymptotes={[0]}
				point={{at: -30}} secant={{at: slide, out: one}} zoom={{cx: 330, cy: 400, r: 140, factor, at: slide + 6, out: one + 10}}
				tangent={{at: one, halfLength: 170}}
				readout={{x: RX, y: 300, width: 560, at: one, inline: true, rows: lnRows({markGx: every, glowGx: [every, 99999]})}}
				overlay={g => <HandTag x={g.pt[0] + 30} y={g.pt[1] + 70} text="x × 2, gradient ÷ 2" at={dbl} out={every + 20} size={40} color={MATH_GRADIENT} />} />
			<CurveLabel x={700} y={300} size={48}>y = ln x</CurveLabel>
			<Card x={RX} y={300} w={560} at={slide} out={one - 6} pad="14px 26px 16px">
				<div style={DISPLAY(30, '#9c5a00', 700)}>secant slope (two points)</div>
				<div style={{...DISPLAY(64, '#9c5a00'), fontVariantNumeric: 'tabular-nums'}}>{fmtNum(st.secantSlope, 3)}</div>
				<div style={DISPLAY(30, INK_SOFT, 600)}>second point at x = {fmtNum(st.q, st.q < 1.05 ? 2 : 1)}</div>
			</Card>
			<RecallChip x={RX} y={170} at={-30} size={30}>Start where the curve crosses the axis: (1, 0).</RecallChip>
			<AppRig phone={{x: 1620, y: 300, h: 380}} users={1} weeks={0} rows={[{value: 'ln x'}, {label: 'weeks to reach', value: 'x thousand'}]} />
			<HandTag x={RX + 6} y={720} text="always 1" at={every + 8} size={56} role="a" />
			<Chip x={RX} y={800} at={dbl} size={40}>x = 2: gradient ½ · x = 4: gradient ¼</Chip>
		</>
	);
};

// ---------- 3. the gradient dots ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const x1 = cue(id, 'x', 2), why = cue(id, 'But why'), ex = cue(id, 'e to the');
	const sweepEnd = x1 - 30;
	const T: FnKey[] = [{frame: 0, x: 2.5, p: {c: Math.E}}, {frame: sweepEnd, x: 0.25}];
	const R3 = 1120;
	return (
		<>
			<SceneHeading text="Mark the gradient as a dot" at={-24} />
			<Legend />
			<FunctionSimulator x={96} y={160} width={1000} height={840} window={{x: [-0.5, 5], y: [-2, 4.5]}} family={LN} timeline={T}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1, 2, 3, 4]} xLabel="x: users (thousands)" yLabel="y" asymptotes={[0]}
				point={{at: -30}} tangent={{at: -30, halfLength: 150, out: sweepEnd + 30}}
				gradientDots={{at: 0, every: 5, bars: true, out: ex + 30}}
				markers={[4.8, 4.4, 4, 3.6, 3.2, 2.8].map(X => ({X, Y: 1 / X, at: -40, out: ex + 30, color: MATH_GRADIENT}))}
				curves={[
					{fn: X => (X > 0.18 ? 1 / X : NaN), at: x1, out: ex, color: MATH_GRADIENT, width: 6, domain: [0.18, 5]},
					{fn: X => (X > 0.18 ? 1 / X : NaN), at: ex, color: '#cbbfe0', width: 5, domain: [0.18, 5]},
					{fn: X => Math.exp(X), at: ex, color: NAVY, width: 6, domain: [-0.5, Math.log(4.4)]},
				]}
				readout={{x: R3, y: 340, width: 600, at: -30, inline: true, rows: lnRows()}}
				overlay={g => {
					const [rx, ry] = g.toFrame(1, 1);
					return <>
						<HandTag x={rx + 30} y={ry - 30} text="(1, 1): gradient 1 at x = 1" at={x1 + 20} out={ex} size={36} color={MATH_GRADIENT} marks={[{kind: 'circle', cx: rx, cy: ry, rx: 26, ry: 24}]} markAt={x1 + 14} />
					</>;
				}} />
			<CurveLabel x={880} y={470} size={46}>y = ln x</CurveLabel>
			<CurveLabel x={380} y={240} size={46} color={MATH_GRADIENT} at={x1 + 6} out={ex}>y = <Frac n="1" d="x" />, x &gt; 0</CurveLabel>
			<CurveLabel x={560} y={240} size={46} color={NAVY} at={ex + 6}>y = e<Pow>x</Pow></CurveLabel>
			<Card x={R3} y={180} w={700} at={-30} pad="14px 26px 16px">
				<div style={DISPLAY(40, MATH_GRADIENT)}>dot height = gradient</div>
				<div style={{...DISPLAY(32, INK, 600), marginTop: 6}}>near 0: steep, dots high</div>
				<div style={DISPLAY(32, INK, 600)}>far out: flat, dots low</div>
			</Card>
			<Chip x={R3} y={680} at={x1} out={ex} size={44} color={MATH_GRADIENT}>the dots land on y = 1/x</Chip>
			<HandTag x={R3 + 6} y={810} text="why so simple?" at={why} size={52} color={INK} />
			<HandTag x={R3 + 6} y={880} text="eˣ: users after x weeks" at={ex + 10} size={44} color={NAVY} />
		</>
	);
};

// ---------- 4. the reflection ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const swaps = cue(id, 'swaps'), zero = cue(id, 'zero', 2), two = cue(id, 'two'), nine2 = cue(id, 'nine', 2), every = cue(id, 'Every point');
	const foldStart = every + 4;
	const pairs: {e: [number, number]; l: [number, number]; at: number; chordAt: number}[] = [
		{e: [0, 1], l: [1, 0], at: -30, chordAt: zero},
		{e: [Math.log(2), 2], l: [2, Math.log(2)], at: two, chordAt: nine2},
	];
	return (
		<>
			<SceneHeading text="ln x is eˣ reflected in y = x" at={2} />
			<Legend />
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={LN} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x" yLabel="y" asymptotes={[0]} mirror={{at: -30}}
				curves={[{fn: X => Math.exp(X), at: -30, color: NAVY, width: 6, domain: [-3, Math.log(5)]}]}
				markers={pairs.flatMap(p => [{X: p.e[0], Y: p.e[1], at: p.at, color: NAVY}, {X: p.l[0], Y: p.l[1], at: p.chordAt, color: INK}])}
				overlay={g => (
					<FrameSvg>
						{pairs.map((p, i) => {
							const a = g.toFrame(...p.e), b = g.toFrame(...p.l);
							const o = prog(f, p.chordAt, 16);
							return <line key={i} x1={a[0]} y1={a[1]} x2={a[0] + (b[0] - a[0]) * o} y2={a[1] + (b[1] - a[1]) * o} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="3 9" strokeLinecap="round" opacity={o > 0 ? 1 : 0} />;
						})}
					</FrameSvg>
				)} />
			{/* the dashed copy of eˣ folding over y = x */}
			<FunctionSimulator x={GSQ.x} y={GSQ.y} width={GSQ.w} height={GSQ.h} window={SQ} family={EXP} bare at={foldStart} out={foldStart + 70}
				timeline={[{frame: 0, x: 0, reflect: 0, p: {c: Math.E}}, {frame: foldStart + 6, reflect: 0}, {frame: foldStart + 56, reflect: 1}]}
				color={NAVY} curveWidth={5} />
			<CurveLabel x={330} y={200} size={44} color={NAVY}>y = e<Pow>x</Pow></CurveLabel>
			<CurveLabel x={720} y={330} size={44}>y = ln x</CurveLabel>
			<CurveLabel x={760} y={200} size={40} color={INK_SOFT}>y = x</CurveLabel>
			<RecallChip x={RX} y={170} at={-30} size={32}>Year 11: ln x is e<Pow>x</Pow> reflected in y = x</RecallChip>
			<Chip x={RX} y={260} at={swaps} size={48}>(a, b) → (b, a)</Chip>
			<HandTag x={RX + 360} y={300} text="swap x and y" at={swaps + 10} size={44} color={INK} />
			<Card x={RX} y={380} w={830} at={-30} pad="14px 26px 16px">
				<div style={{...DISPLAY(28, INK_SOFT, 800), letterSpacing: 2}}>ON eˣ (USERS AFTER WEEKS) ↔ ON ln x</div>
				{[
					{l: '(0, 1): week 0, 1 thousand users', r: '(1, 0)', at: zero, pre: -30},
					{l: '(0.69, 2): after 0.69 weeks, 2 thousand', r: '(2, 0.69)', at: nine2, pre: two},
				].map((row, i) => (
					f < row.pre ? null : <div key={i} style={{marginTop: 12, opacity: prog(f, row.pre, 12)}}>
						<div style={DISPLAY(36, NAVY, 700)}>{row.l}</div>
						<div style={{...DISPLAY(36, INK, 800), opacity: prog(f, row.at, 12)}}>→ {row.r}: {i ? '2 thousand users after 0.69 weeks' : '1 thousand users at week 0'}</div>
					</div>
				))}
			</Card>
			<HandTag x={RX + 6} y={820} text="every point swaps: the whole curve folds over" at={every} size={38} color={NAVY} />
		</>
	);
};
