// Scenes 5 to 8: the ratios are logarithms, the sideways stretch, the proof, bases of one and below.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	AnswerFrame, Card, CardTitle, EXP_BASE_FAMILY, FunctionSimulator, HandTag, InnerSlot, MarkSpan, ParameterSlider, Pow, ResultCard, Role, SceneHeading, TaskStrip,
	WorkingRows, fmtNum, fnStateAt, kf, vis, MATH_ANSWER, MATH_BLUE, MATH_GRADIENT,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, LN2} from './common';
import {CurveLabel, DISPLAY, JarThumb, Legend, Ln, RatioPanel, RecallChip, Rule, SlotChip, simRows} from './parts';

const EXP = EXP_BASE_FAMILY;
const WIN = {x: [-2, 3] as [number, number], y: [0, 8] as [number, number]};
const RX = 1336, RW = 488;
const baseLabel = (c: number) => (Math.abs(c - Math.E) < 0.004 ? 'e' : Math.abs(c - 0.5) < 0.004 ? '(½)' : Math.abs(c - Math.round(c)) < 0.004 ? String(Math.round(c)) : fmtNum(c, 2));

// ---------- 5. the ratios are logarithms ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const plot = cue(id, 'Plot'), two = cue(id, 'Two gives'), three1 = cue(id, 'three'), eG = cue(id, 'E gives'), one = cue(id, 'one'), threeG = cue(id, 'Three gives'), nine2 = cue(id, 'nine', 2), four = cue(id, 'four'), six2 = cue(id, 'six', 2), curve = cue(id, 'curve', 2), calc = cue(id, 'calculator'), soG = cue(id, 'So the gradient'), height = cue(id, 'height'), butWhy = cue(id, 'But why');
	const T: FnKey[] = [
		{frame: 0, x: 1, p: {c: Math.E}}, {frame: two, p: {c: Math.E}}, {frame: two + 30, p: {c: 2}}, {frame: eG, p: {c: 2}}, {frame: one, p: {c: Math.E}},
		{frame: threeG, p: {c: Math.E}}, {frame: nine2 - 4, p: {c: 3}}, {frame: four, p: {c: 3}}, {frame: six2, p: {c: 4}}, {frame: soG, p: {c: 4}}, {frame: soG + 40, p: {c: 2}},
	];
	const st = fnStateAt(EXP, T, f, {logParams: ['c']});
	return (
		<>
			<SceneHeading text="The ratios are logarithms" at={2} />
			<Legend />
			<JarThumb label="an account: × a a decade" balance={st.Y} rate={st.slope} perDollar={st.slope / st.Y} balanceAt={() => st.Y} perGlow={[calc, calc + 120]} />
			<FunctionSimulator x={450} y={168} width={660} height={520} window={WIN} family={EXP} timeline={T} logParams={['c']}
				xLabel="x" yLabel="y" yTicks={[2, 4, 6, 8]} curves={[{fn: X => Math.exp(X), at: -30}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 160}}
				readout={{x: 450, y: 706, width: 640, at: -30, inline: true, size: 44, rows: simRows()}} />
			<CurveLabel x={560} y={250} size={50}>y = {baseLabel(st.params.c)}<Pow>x</Pow></CurveLabel>
			<RatioPanel x={1130} y={168} w={700} h={560} curveAt={curve} markers={[{a: 2, at: three1}, {a: Math.E, at: one}, {a: 3, at: nine2}, {a: 4, at: six2}]}
				label={{content: <span style={{color: MATH_BLUE}}>y = ln a</span>, at: curve + 20}} />
			<HandTag x={1150} y={160} text="plot each ratio against its base" at={plot} out={curve} size={34} color={INK_SOFT} />
			<RecallChip x={1690} y={300} at={curve + 30} size={28}>Year 11</RecallChip>
			<Enter at={calc} style={{position: 'absolute', left: 1480, top: 512}}>
				<div style={{display: 'inline-block', background: '#2f3b36', borderRadius: 14, padding: '6px 20px', fontFamily: 'monospace', fontWeight: 700, fontSize: 40, color: '#d9f2e8'}}>ln 2 = 0.6931…</div>
			</Enter>
			<HandTag x={1480} y={620} text="= the account's growth per dollar" at={calc + 20} size={34} role="a" />
			<Card x={1130} y={770} w={700} at={-30} out={height - 6} pad="12px 26px 14px">
				<CardTitle>base: gradient ÷ height</CardTitle>
				<div style={{display: 'flex', justifyContent: 'space-between', ...DISPLAY(40, MATH_BLUE)}}>
					{([['2', '0.693', three1], ['e', '1', one], ['3', '1.099', nine2], ['4', '1.386', six2]] as [string, string, number][]).map(([b, r, at]) => <span key={b} style={{opacity: 0.35 + 0.65 * prog(f, at, 10)}}><span style={{color: INK}}>{b}:</span> {f >= at ? r : '?'}</span>)}
				</div>
			</Card>
			<ResultCard x={1130} y={760} at={height} size={52} role="a">gradient of a<Pow>x</Pow><br />= (<Ln />) × height</ResultCard>
			<HandTag x={460} y={960} text="but why a logarithm?" at={butWhy} size={48} role="a" />
		</>
	);
};

const HandTagText: React.FC = () => <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK}}>Write 2 as a power of e.</span>;

// ---------- 6. why: two to the x is e to the x, stretched sideways ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const three = cue(id, 'three'), exactly = cue(id, 'Exactly'), two6 = cue(id, 'two', 6), stretched = cue(id, 'stretched'), watch = cue(id, 'Watch'), stretch = cue(id, 'Stretch'), four = cue(id, 'four', 2), whileT = cue(id, 'while'), stays = cue(id, 'stays'), soAt = cue(id, 'So at every'), height = cue(id, 'height', 3);
	const S = 1 / LN2;
	const T: FnKey[] = [
		{frame: 0, x: LN2, xScale: S, p: {c: Math.E}}, {frame: stretched + 4, xScale: S}, {frame: stretched + 44, xScale: 1},
		{frame: stretch + 2, xScale: 1}, {frame: stretch + 56, xScale: S},
	];
	const st = fnStateAt(EXP, T, f);
	const isE = st.xScale < 1.02;
	const G = {x: 880, y: 168, w: 950, h: 770};
	const slot = <InnerSlot>x <Ln a="2" /></InnerSlot>;
	return (
		<>
			<SceneHeading text="Why: 2ˣ is eˣ, stretched sideways" at={2} />
			<Legend />
			<RecallChip x={96} y={166} at={-30} size={44}>Year 11: e<Pow><Ln /></Pow> = a</RecallChip>
			<WorkingRows x={96} y={256} w={760} size={56} oldSize={36} gap={16} rows={[
				{left: '2', right: <>e<Pow><Ln a="2" /></Pow></>, at: three},
				{left: <>2<Pow>x</Pow></>, right: <>(e<Pow><Ln a="2" /></Pow>)<Pow>x</Pow></>, at: exactly},
				{right: <>e<Pow>{slot}</Pow></>, at: two6, keep: true},
			]} />
			<div style={{position: 'absolute', left: 100, top: 290, opacity: vis(f, 8, three - 6, 12)}}><HandTagText /></div>
			<FunctionSimulator x={96} y={340} width={740} height={290} window={{x: [-2, 2.6], y: [0, 5]}} family={EXP} timeline={[{frame: 0, x: 1, p: {c: 2}}]} at={-30} out={three - 6}
				xLabel="x" yLabel="y" xTicks={[-1, 1, 2]} yTicks={[2, 4]} curves={[{fn: X => Math.exp(X), at: -30}]}
				overlay={g => (
					<>
						{[2, 4].map((Y, i) => {const [ax, ay] = g.toFrame(Math.log(Y), Y), [bx] = g.toFrame(Math.log2(Y), Y); return <HandTag key={Y} x={bx + 16} y={ay + 6} text={i ? '' : 'stretched × 1.44'} at={-30} out={three - 6} size={38} role="a" marks={[{kind: 'arrow', from: [ax - 4, ay], to: [bx - 6, ay], bend: 0}]} markAt={-30} />;})}
						<HandTag x={190} y={404} text="dashed: eˣ · solid: 2ˣ" at={-30} out={three - 6} size={36} color={INK_SOFT} />
					</>
				)} />
			<RecallChip x={96} y={492} at={three + 8} size={30}>ln 2 ≈ 0.693, so 2 ≈ e<Pow>0.693</Pow></RecallChip>
			<RecallChip x={96} y={556} at={two6 + 6} size={30}>index law: (e<Pow>p</Pow>)<Pow>x</Pow> = e<Pow>px</Pow>, and 2<Pow>x</Pow> ≈ e<Pow>0.693x</Pow></RecallChip>
			<SlotChip x={96} y={636} size={54} fillAt={two6 + 10} />
			<HandTag x={110} y={782} text="last video's question, answered" at={two6 + 24} size={40} color={MATH_ANSWER} />
			<ResultCard x={96} y={850} at={-30} size={42} role="a">gradient of a<Pow>x</Pow> = (<Ln />) × height</ResultCard>
			<div style={{position: 'absolute', left: 96, top: 850, width: 760, height: 76, borderRadius: 18, boxShadow: `0 0 0 6px rgba(31,111,178,${0.5 * vis(f, height, undefined, 10)})`}} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN} family={EXP} timeline={T}
				xLabel="x" yLabel="y" yTicks={[2, 4, 6, 8]}
				curves={[{fn: X => Math.exp(X), at: -30, out: stretched}, {fn: X => Math.pow(2, X), at: stretched + 10, dash: '14 10'}]}
				point={{at: -30}} tangent={{at: -30}}
				triangle={{run: 1, at: watch + 12, labels: {first: len => `run ${fmtNum(len, len > 1.01 ? 2 : 0)}`, second: () => 'rise 2'}}}
				readout={{x: G.x + 20, y: 200, width: 470, at: -30, inline: true, size: 48, rows: simRows({glowR: [height, 99999]})}} />
			<CurveLabel x={G.x + 530} y={210} size={52} out={stretched}>y = 2<Pow>x</Pow></CurveLabel>
			<CurveLabel x={G.x + 530} y={210} size={52} at={stretched + 10} color={isE ? INK : INK}>y = e<Pow>{isE ? 'x' : <><Role r="a">0.693</Role>x</>}</Pow></CurveLabel>
			<CurveLabel x={1790} y={430} size={40} color={INK_SOFT} at={stretched + 20} anchor="end">dashed: 2<Pow>x</Pow></CurveLabel>
			<HandTag x={1480} y={800} text="× 1/ln 2 ≈ 1.44" at={four} size={42} role="a" />
			<HandTag x={904} y={490} text="run grows, rise stays" at={whileT} size={42} color={MATH_GRADIENT} />
			<HandTag x={904} y={548} text="rise: same" at={stays} size={42} color={MATH_GRADIENT} />
			<HandTag x={904} y={606} text="slope × 0.693, at each height" at={soAt} size={40} role="a" />
		</>
	);
};

// ---------- 7. the proof for any base ----------
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const soAeq = cue(id, 'so a equals'), call = cue(id, 'Call'), andDy = cue(id, 'And d y'), chain = cue(id, 'The chain rule'), put = cue(id, 'Put the power'), again = cue(id, 'again'), soDer = cue(id, 'So the derivative'), tryA = cue(id, 'Try a'), know = cue(id, 'know');
	const r2 = call - 24, r4 = andDy - 26;
	const slot = <InnerSlot>x <Ln /></InnerSlot>;
	return (
		<>
			<TaskStrip text="Prove: d/dx(aˣ) = (ln a)aˣ, for a > 0" at={-24} size={56} />
			<Legend />
			<Card x={96} y={196} w={560} at={-30} pad="14px 26px 16px">
				<CardTitle>Year 11</CardTitle>
				<div style={DISPLAY(34, INK, 700)}>chain rule:</div>
				<div style={DISPLAY(40)}>dy/dx = dy/du × du/dx</div>
				<div style={{...DISPLAY(40), marginTop: 10}}>e<Pow><Ln /></Pow> = a</div>
				<div style={{marginTop: 14, opacity: prog(f, r4 + 6, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, lineHeight: 1.1, color: MATH_BLUE}}>a is fixed, so ln a is<br />a number (not ln x)</div>
			</Card>
			<FunctionSimulator x={96} y={568} width={560} height={400} window={{x: [-1, 2.5], y: [0, 5]}} family={EXP} timeline={[{frame: 0, x: LN2, xScale: 1 / LN2, p: {c: Math.E}}]}
				xLabel="x" yLabel="y" xTicks={[1, 2]} yTicks={[2, 4]} curves={[{fn: X => Math.exp(X), at: -30}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 120}} triangle={{run: 1, at: -30, labels: {first: () => 'run 1.44', second: () => 'rise 2'}}} />
			<CurveLabel x={190} y={628} size={34}>2<Pow>x</Pow> = e<Pow>x ln 2</Pow></CurveLabel>
			<Enter at={-30} out={soAeq - 6} style={{position: 'absolute', left: 720, top: 230}}>
				<div style={{...DISPLAY(32, INK_SOFT, 700), marginBottom: 12}}>What we found for base 2:</div>
				<div style={DISPLAY(58)}>2<Pow>x</Pow> = e<Pow><InnerSlot>x <Ln a="2" /></InnerSlot></Pow></div>
				<div style={{...DISPLAY(58), marginTop: 18}}>gradient = (<Ln a="2" />) × height</div>
				<div style={{...DISPLAY(44, INK, 700), marginTop: 34}}>Now prove it for any base a &gt; 0:</div>
				<div style={{...DISPLAY(40, INK_SOFT, 700), marginTop: 10}}>1. write a as a power of e</div>
				<div style={{...DISPLAY(40, INK_SOFT, 700), marginTop: 6}}>2. differentiate with the chain rule</div>
			</Enter>
			<WorkingRows x={720} y={200} w={1100} size={66} oldSize={44} gap={6} rows={[
				{left: 'a', right: <>e<Pow><Ln /></Pow></>, at: soAeq},
				{left: 'y', right: <>a<Pow>x</Pow> = e<Pow>{slot}</Pow></>, at: r2},
				{left: 'let u', right: <>x <Ln /></>, at: call},
				{left: 'du/dx', right: <MarkSpan kind="box" at={r4 + 10} role="a"><Ln /></MarkSpan>, at: r4},
				{left: 'dy/du', right: <>e<Pow>u</Pow></>, at: andDy},
				{left: 'dy/dx', right: <>e<Pow>u</Pow> × <Ln /></>, at: chain},
				{right: <>(<Ln />) e<Pow>{slot}</Pow></>, at: put},
				{right: <>(<Ln />)a<Pow>x</Pow></>, at: again - 20, answer: true},
			]} />
			<Enter at={soDer} style={{position: 'absolute', left: 720, top: 786}}>
				<span style={DISPLAY(54)}><AnswerFrame at={soDer} tick={false}><Rule />, a &gt; 0</AnswerFrame></span>
			</Enter>
			<Enter at={tryA} style={{position: 'absolute', left: 720, top: 892}}>
				<span style={DISPLAY(44)}>a = e: <Role r="a">ln e = 1</Role>, so d/dx(e<Pow>x</Pow>) = e<Pow>x</Pow> ✓</span>
			</Enter>
			<HandTag x={1560} y={940} text="the rule you know" at={know - 20} size={42} color={MATH_ANSWER} />
		</>
	);
};

// ---------- 8. bases of one and below ----------
const G8 = {x: 450, y: 290, w: 860, h: 650};
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const slide = cue(id, 'Slide'), oneA = cue(id, 'one'), zero2 = cue(id, 'zero', 2), keep = cue(id, 'Keep going'), half = cue(id, 'half'), positive = cue(id, 'positive'), mirror = cue(id, 'mirror'), must = cue(id, 'base must'), cant = cue(id, "can't");
	const T: FnKey[] = [
		{frame: 0, x: 1, p: {c: 2}}, {frame: slide + 6, p: {c: 2}}, {frame: oneA + 10, p: {c: 1}}, {frame: keep + 4, p: {c: 1}}, {frame: half + 30, p: {c: 0.5}},
	];
	const st = fnStateAt(EXP, T, f, {logParams: ['c']});
	const c = st.params.c;
	const s = kf(f, [[mirror, 0], [mirror + 50, 1]]);
	const flat = Math.abs(c - 1) < 0.004;
	return (
		<>
			<SceneHeading text="Bases of 1 and below" at={2} />
			<Legend />
			<JarThumb label="an account: × a a decade" balance={st.Y} rate={st.slope} perDollar={st.slope / st.Y} balanceAt={() => st.Y} perGlow={[positive, positive + 90]} />
			<ParameterSlider x={760} y={164} width={520} symbol="a" role="height" value={c} min={0} max={3.2} digits={3} at={-30}
				ticks={[{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]}
				excluded={{value: 0, label: 'a ≤ 0 not allowed', gap: 0.1, at: must}} />
			<FunctionSimulator x={G8.x} y={G8.y} width={G8.w} height={G8.h} window={WIN} family={EXP} timeline={T} logParams={['c']}
				xLabel="x: decades" yLabel="y" yTicks={[2, 4, 6, 8]}
				curves={[{fn: X => Math.pow(2, X * (1 - 2 * s)), at: mirror, out: mirror + 110, color: '#8a8378', dash: '14 10', width: 6}]}
				point={{at: -30}} tangent={{at: -30}}
				readout={{x: RX, y: 300, width: RW, at: -30, inline: true, size: 46, rows: [
					{label: 'height', role: 'height', value: q => q.Y, glow: [positive, positive + 90]},
					{label: 'gradient', role: 'gradient', value: q => q.slope, digits: 3},
					{label: 'gradient ÷ height', role: 'a', value: q => q.slope / q.Y, digits: 3, mark: {kind: 'circle', at: positive + 6, role: 'a'}},
				]}} />
			<CurveLabel x={G8.x + 140} y={G8.y + 100} size={54}>{flat ? <>y = 1<Pow>x</Pow> = 1</> : <>y = {baseLabel(c)}<Pow>x</Pow></>}</CurveLabel>
			<CurveLabel x={900} y={470} size={40} at={mirror + 40} color={INK_SOFT}>(½)<Pow>x</Pow> = 2<Pow>−x</Pow>: the mirror of 2<Pow>x</Pow></CurveLabel>
			<HandTag x={G8.x + 520} y={G8.y + 430} text="never below 0" at={positive + 8} size={42} color={INK} />
			<HandTag x={G8.x + 520} y={G8.y + 340} text="ln 1 = 0: flat, gradient 0" at={zero2} out={keep + 30} size={40} role="a" />
			<RatioPanel x={RX - 20} y={540} w={508} h={400} curveAt={-60} ticks={[1, 2, 3, 4]} yLabel="ratio"
				markers={[{a: 2, at: -30}, {a: Math.E, at: -30}, {a: 3, at: -30}, {a: 4, at: -30}, {a: 1, at: zero2}, {a: 0.5, at: positive + 4}]} />
			<HandTag x={RX + 80} y={640} text="a > 0: ln a needs it" at={must} size={34} role="a" />
			<RecallChip x={1000} y={512} at={cant} size={30}>(−2)<Pow>½</Pow> is not real</RecallChip>
			<HandTag x={96} y={826} text="(½)ˣ: a value that" at={positive} size={34} color={INK} />
			<HandTag x={96} y={872} text="halves every decade" at={positive + 16} size={34} color={INK} />
		</>
	);
};
