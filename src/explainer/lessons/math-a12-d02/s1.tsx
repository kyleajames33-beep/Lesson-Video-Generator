// Scenes 1 to 4: the savings jar beside 2ˣ and eˣ, the measuring stick, measuring 2ˣ, every base has its own ratio.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, EXP_BASE_FAMILY, FrameSvg, FunctionSimulator, HandTag, MarkSpan, ParameterSlider, Pow, Role, SceneHeading,
	fmtNum, fnStateAt, heldStops, kf, vis, MATH_BLUE, MATH_GRADIENT, MATH_MISTAKE, CARD,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, LN2} from './common';
import {CoinJar, CurveLabel, DecadeClock, DISPLAY, E_TICK, JarThumb, Legend, RecallChip, SlotChip, Tick, simRows} from './parts';

const EXP = EXP_BASE_FAMILY;
const WIN = {x: [-2, 3] as [number, number], y: [0, 8] as [number, number]};
const EGHOST = {fn: (X: number) => Math.exp(X), at: -30};

// ---------- 1. hook: same start, different slope ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const savings = cue(id, 'savings'), here = cue(id, 'Here it is'), one = cue(id, 'one'), leaves = cue(id, 'leaves'), flatter = cue(id, 'flatter'), soThe = cue(id, 'So the derivative'), cant = cue(id, "can't"), howFast = cue(id, 'how fast'), logarithm = cue(id, 'logarithm'), expo = cue(id, 'exponential');
	const clockEnd = savings + 330;
	const decAt = (g: number) => kf(g, [[savings + 10, 0], [clockEnd, 2]], false);
	const dec = decAt(f);
	const balAt = (g: number) => Math.pow(2, decAt(g));
	const rateAt = (g: number) => (g > savings + 10 && g < clockEnd ? 1.7 * LN2 * balAt(g) : 0);
	const G = {x: 900, y: 168, w: 930, h: 640};
	const T: FnKey[] = [{frame: 0, x: 0, p: {c: 2}}];
	const pulse = vis(f, howFast, howFast + 70, 8);
	return (
		<>
			<SceneHeading text="Differentiating aˣ: where does ln a come from?" at={2} size={56} />
			<CoinJar x={130} y={250} w={300} balanceAt={balAt} rateAt={rateAt} from={savings + 10} />
			<Card x={490} y={190} w={380} at={-30} pad="14px 24px 16px">
				<CardTitle>In the account</CardTitle>
				<Tick label="balance" value={balAt(f)} unit="$ thousands" role="height" size={56} />
				<div style={{height: 10}} />
				<div style={{padding: '2px 8px', margin: '0 -8px', borderRadius: 10, background: pulse > 0 ? `rgba(231,224,242,${pulse})` : undefined}}>
					<div style={DISPLAY(30, MATH_GRADIENT, 700)}>growth rate</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 4}}>
						<div style={{flex: 1, height: 20, borderRadius: 10, background: '#ede4d3', border: '2px dashed rgba(107,79,160,0.5)', boxSizing: 'border-box'}} />
						<span style={{fontFamily: 'inherit', ...DISPLAY(60, MATH_GRADIENT)}}>?</span>
					</div>
				</div>
			</Card>
			<HandTag x={500} y={548} text="× 2 every decade" at={savings + 10 + 165} size={46} color={INK} />
			<Card x={96} y={736} w={780} at={savings} pad="10px 26px 12px">
				<div style={DISPLAY(40)}>$1,000 · doubles every 10 years</div>
				<div style={DISPLAY(30, INK_SOFT, 600)}>about 7% a year · x in decades · y in $ thousands ($k)</div>
			</Card>
			<DecadeClock x={96} y={870} w={780} decades={dec} max={2} at={-30} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN} family={EXP} timeline={T}
				xLabel="x: decades" yLabel="y: balance ($ thousands)" xTicks={[-2, -1, 1, 2, 3]} yTicks={[2, 4, 6, 8]}
				curves={[EGHOST]}
				point={{at: one}} tangent={{at: flatter, halfLength: 230}}
				lines={[{slope: () => 1, at: leaves, out: expo, color: MATH_GRADIENT, dash: '14 10', halfLength: 230}]}
				overlay={g => {
					const P = g.toFrame(0, 1);
					return (
						<>
							<FrameSvg>
								{[0, 1, 2].map(d => {const [sx, sy] = g.toFrame(d, Math.pow(2, d)); const o = prog(f, savings + 10 + d * 165, 10); return <circle key={d} cx={sx} cy={sy} r={13 * o} fill={INK} stroke={CARD} strokeWidth={4} />;})}
							</FrameSvg>
							<HandTag x={P[0] - 24} y={P[1] - 44} text="both start at 1" at={one + 6} size={42} color={INK} anchor="end" marks={[{kind: 'circle', cx: P[0], cy: P[1], rx: 34, ry: 30}]} markAt={one} />
							<HandTag x={P[0] + 110} y={P[1] + 40} text="flatter: slope ?" at={flatter + 8} size={44} color={MATH_GRADIENT} />
						</>
					);
				}} />
			<CurveLabel x={1592} y={214} at={-30} color={INK_SOFT} size={44} anchor="end">y = e<Pow>x</Pow></CurveLabel>
			<CurveLabel x={1700} y={400} at={-30} size={48}>y = 2<Pow>x</Pow></CurveLabel>
			<HandTag x={1380} y={214} text="" at={here} marks={[{kind: 'underline', x1: 1440, x2: 1590, y: 272}]} markAt={here} color={INK_SOFT} />
			<RecallChip x={996} y={330} at={leaves} size={30}>dashed: slope 1 (Year 11: d/dx(e<Pow>x</Pow>) = e<Pow>x</Pow>)</RecallChip>
			<div style={{position: 'absolute', left: 1000, top: 420, opacity: prog(f, soThe, 12) * (1 - 0.45 * prog(f, cant + 10, 12)), ...DISPLAY(48, INK_SOFT, 700)}}>
				<MarkSpan kind="strike" at={cant} color={MATH_MISTAKE} width={5}>d/dx(2<Pow>x</Pow>) = 2<Pow>x</Pow> ?</MarkSpan>
			</div>
			<SlotChip x={980} y={838} />
			<HandTag x={1452} y={884} text="why a logarithm?" at={logarithm} size={52} role="a" />
		</>
	);
};

// ---------- shared large-graph stage (scenes 2 and 3) ----------
const G = {x: 450, y: 168, w: 860, h: 760};
const RX = 1336, RW = 488;

// ---------- 2. recall: the measuring stick ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const forE = cue(id, 'For e'), always1 = cue(id, 'always one'), squash = cue(id, 'Squash'), whenever = cue(id, 'Whenever'), soRatio = cue(id, 'So the ratio'), power = cue(id, 'power', 2), lets = cue(id, "Let's measure");
	const T: FnKey[] = [
		{frame: 0, x: 0, xScale: 1, p: {c: Math.E}}, {frame: forE + 6, x: 0}, {frame: always1, x: 1}, {frame: squash - 30, x: 1}, {frame: squash, x: 0},
		{frame: squash + 8, xScale: 1}, {frame: squash + 60, xScale: 0.5}, {frame: lets, xScale: 0.5}, {frame: lets + 40, xScale: 1},
	];
	const st = fnStateAt(EXP, T, f);
	const ghostOn = prog(f, lets, 20);
	const squashed = st.xScale < 0.75;
	return (
		<>
			<SceneHeading text="Last video's measuring stick" at={2} />
			<Legend />
			<JarThumb balance={1} rate={null} balanceAt={() => 1} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN} family={EXP} timeline={T}
				color={`rgba(42,36,30,${1 - 0.7 * ghostOn})`}
				xLabel="x: decades" yLabel="y" yTicks={[2, 4, 6, 8]}
				curves={[
					{fn: X => Math.pow(2, X), at: -30, out: lets, color: '#b9b1a3', width: 4},
					{fn: X => Math.pow(2, X), at: lets, color: INK, width: 7},
					{fn: X => Math.exp(X), at: squash, out: lets + 30},
				]}
				point={{at: -30}} tangent={{at: -30}}
				readout={{x: RX, y: 300, width: RW, at: -30, inline: true, rows: simRows({marks: {r: {kind: 'box', at: soRatio + 10, role: 'a'}}})}} />
			<CurveLabel x={G.x + 150} y={G.y + 110} size={54} out={lets}>y = e<Pow>{squashed ? <><Role r="a">2</Role>x</> : 'x'}</Pow></CurveLabel>
			<CurveLabel x={G.x + 150} y={G.y + 110} size={54} at={lets + 10}>y = 2<Pow>x</Pow></CurveLabel>
			<CurveLabel x={1080} y={720} size={34} color={INK_SOFT} out={lets}>thin line: 2<Pow>x</Pow>, measured next</CurveLabel>
			<RecallChip x={RX} y={164} w={RW} at={-30} size={30}>Divide the gradient by the height:<br />that ratio is the measuring stick.</RecallChip>
			<RecallChip x={RX} y={580} w={RW} at={-30} size={34}>Last video:<br />gradient of e<Pow><span style={{border: `0.08em solid ${MATH_BLUE}`, borderRadius: '0.2em', padding: '0 0.3em', color: MATH_BLUE}}>□</span>x</Pow> = <Role r="a">□</Role> × height</RecallChip>
			<HandTag x={RX + 6} y={790} text="the number in the power" at={power} size={42} role="a"
				marks={[{kind: 'arrow', from: [RX + 320, 650], to: [RX + 440, 520], bend: 0.3}]} markAt={power - 4} />
			<HandTag x={RX + 6} y={860} text="squash: ratio 1 → 2" at={squash + 40} out={whenever} size={42} role="a" />
		</>
	);
};

// ---------- 3. measure two to the x ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const slide = cue(id, 'Slide'), p72 = cue(id, 'point seven two'), p696 = cue(id, 'point six nine six'), three = cue(id, 'three', 2), move = cue(id, 'Now move'), nine = cue(id, 'nine', 3), seven = cue(id, 'seven', 3), three2 = cue(id, 'three', 4), pattern = cue(id, "That's the pattern");
	const T: FnKey[] = [
		{frame: 0, x: 0, p: {c: 2}}, ...heldStops('q', [{frame: slide, value: 0.5}, {frame: p72, value: 0.1}, {frame: p696, value: 0.01}], 26),
		{frame: move + 10, x: 0}, {frame: nine, x: 1}, {frame: nine + 40, x: 1}, {frame: seven, x: 2},
	];
	const st = fnStateAt(EXP, T, f);
	const tan = f >= three;
	const factor = Math.max(1.2, 100 / (Math.max(0.005, st.q) * 163));
	return (
		<>
			<SceneHeading text="Measure 2ˣ with the stick" at={2} />
			<Legend />
			<JarThumb balance={st.Y} rate={tan ? st.slope : null} perDollar={tan ? st.slope / st.Y : null} balanceAt={() => st.Y} perGlow={[three2, 99999]} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN} family={EXP} timeline={T}
				xLabel="x: decades" yLabel="y: balance ($ thousands)" yTicks={[2, 4, 6, 8]} curves={[EGHOST]}
				point={{at: -30}} secant={{at: slide, out: three}} zoom={{cx: 690, cy: 430, r: 150, factor, at: slide + 6, out: three + 10}}
				tangent={{at: three}} triangle={{run: 1, at: three + 20, labels: {first: () => 'run 1', second: len => `rise ${fmtNum(len)}`}}}
				readout={{x: RX, y: 300, width: RW, at: three, inline: true, rows: simRows({marks: {r: {kind: 'box', at: three2, role: 'a'}}})}} />
			<CurveLabel x={1150} y={300} size={52}>y = 2<Pow>x</Pow></CurveLabel>
			<Card x={RX} y={300} w={RW} at={slide} out={three - 6} pad="14px 26px 16px">
				<div style={DISPLAY(30, '#9c5a00', 700)}>secant slope (two points)</div>
				<div style={{...DISPLAY(64, '#9c5a00'), fontVariantNumeric: 'tabular-nums'}}>{fmtNum(st.secantSlope, 3)}</div>
				<div style={DISPLAY(30, INK_SOFT, 600)}>second point at x = {fmtNum(st.q, st.q < 0.05 ? 2 : 1)}</div>
			</Card>
			<RecallChip x={RX} y={164} w={RW} at={-30} size={30}>Start where the height is 1:<br />the point (0, 1).</RecallChip>
			<Card x={RX} y={556} w={RW} at={slide + 20} pad="12px 26px 14px">
				<CardTitle>Secant slopes</CardTitle>
				{([[0.5, '0.828', p72 - 40], [0.1, '0.718', p72], [0.01, '0.696', p696]] as [number, string, number][]).map(([q, v, at]) => (
					<div key={v} style={{display: 'flex', justifyContent: 'space-between', opacity: prog(f, at, 10), ...DISPLAY(34, '#9c5a00', 700)}}><span>second point at {q}</span><span>{v}</span></div>
				))}
				<div style={{display: 'flex', justifyContent: 'space-between', opacity: prog(f, three, 10), ...DISPLAY(36, MATH_GRADIENT, 800)}}><span>tangent</span><span>0.693</span></div>
			</Card>
			<HandTag x={RX + 6} y={826} text="ratio stays 0.693" at={three2 + 8} size={42} role="a" />
			<HandTag x={96} y={826} text="growth per dollar: 0.693 a decade" at={three2 + 8} size={34} role="a" />
			<HandTag x={96} y={872} text="(about 6.9% a year)" at={three2 + 30} size={34} role="a" />
			<div style={{position: 'absolute', left: RX, top: 866, opacity: prog(f, pattern, 12)}}>
				<span style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '2px 22px 8px', border: '3px solid rgba(60,45,20,0.14)', ...DISPLAY(48)}}>2<Pow>x</Pow> = e<Pow><span style={{border: `0.08em solid ${MATH_BLUE}`, borderRadius: '0.2em', padding: '0 0.2em', color: MATH_BLUE}}>?</span> x</Pow></span>
			</div>
		</>
	);
};

// ---------- 4. every base has its own ratio ----------
const G4 = {x: 450, y: 290, w: 860, h: 650};
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const tryT = cue(id, 'Try'), nine = cue(id, 'nine', 2), two = cue(id, 'Two gives'), somewhere = cue(id, 'Somewhere'), slideB = cue(id, 'Slide'), one = cue(id, 'one', 6), eIs = cue(id, 'e.', 2);
	const T: FnKey[] = [
		{frame: 0, x: 0, p: {c: 2}}, {frame: tryT + 4, p: {c: 2}}, {frame: tryT + 34, p: {c: 3}}, {frame: 80, x: 0}, {frame: nine - 4, x: 1},
		{frame: somewhere, p: {c: 3}}, {frame: somewhere + 40, p: {c: 2}}, {frame: slideB + 4, p: {c: 2}}, {frame: one - 6, p: {c: Math.E}},
	];
	const st = fnStateAt(EXP, T, f, {logParams: ['c']});
	const c = st.params.c;
	const label = Math.abs(c - Math.E) < 0.004 ? 'e' : Math.abs(c - Math.round(c)) < 0.004 ? String(Math.round(c)) : fmtNum(c, 2);
	const rows: [string, string, number, string][] = [['2', '0.693', two, INK], [f >= eIs ? 'e' : '?', '1', somewhere + 30, MATH_BLUE], ['3', '1.099', nine, INK]];
	return (
		<>
			<SceneHeading text="Every base has its own ratio" at={2} />
			<Legend />
			<JarThumb label="an account: × a a decade" balance={st.Y} rate={st.slope} perDollar={st.slope / st.Y} balanceAt={() => st.Y} perGlow={[one, one + 90]} />
			<ParameterSlider x={470} y={164} width={560} symbol="a" role="height" value={c} min={1.5} max={4.2} digits={3} at={-30}
				ticks={[{value: 2, label: '2'}, E_TICK, {value: 3, label: '3'}, {value: 4, label: '4'}]} badgeMark={{kind: 'circle', at: eIs}} />
			<FunctionSimulator x={G4.x} y={G4.y} width={G4.w} height={G4.h} window={WIN} family={EXP} timeline={T} logParams={['c']}
				xLabel="x: decades" yLabel="y" yTicks={[2, 4, 6, 8]}
				curves={[EGHOST, {fn: X => Math.exp(X), at: one, out: one + 75, color: MATH_GRADIENT, dash: '14 10', width: 7}]}
				point={{at: -30}} tangent={{at: -30}} triangle={{run: 0.5, at: -30, labels: {first: () => 'run ½', second: len => `rise ${fmtNum(len)}`}}}
				readout={{x: RX, y: 300, width: RW, at: -30, inline: true, rows: simRows({glowR: [one, one + 90]})}} />
			<CurveLabel x={G4.x + 140} y={G4.y + 100} size={54}>y = {label}<Pow>x</Pow></CurveLabel>
			<HandTag x={G4.x + 140} y={G4.y + 230} text="lands on eˣ!" at={one + 4} size={50} color={MATH_GRADIENT} />
			<HandTag x={1060} y={820} text="dashed: eˣ" at={-30} out={one} size={36} color={INK_SOFT} />
			<Card x={RX} y={570} w={RW} at={nine - 6} pad="12px 26px 14px">
				<CardTitle>base: ratio</CardTitle>
				{rows.map(([b, r, at, col]) => (
					<div key={r} style={{display: 'flex', justifyContent: 'space-between', opacity: prog(f, at, 12), ...DISPLAY(40, col, 800)}}>
						<span>{b}</span><Role r="a">{r === '1' && f >= one ? '1.000' : r}</Role>
					</div>
				))}
			</Card>
			<HandTag x={RX + 6} y={880} text="between 2 and 3: ratio 1?" at={somewhere + 10} out={one} size={38} role="a" />
			<HandTag x={96} y={826} text="base e: growth per dollar" at={eIs} size={34} role="a" />
			<HandTag x={96} y={872} text="exactly 1 a decade" at={eIs + 20} size={34} role="a" />
		</>
	);
};
