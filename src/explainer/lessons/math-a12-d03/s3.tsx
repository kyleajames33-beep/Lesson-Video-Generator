// Scenes 9 to 12: the two worked examples (g01 layout, with sliders), the memory aid, attempt 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, EquationStrip, FunctionSimulator, GivensCard, HandTag, MistakeCard, ParameterSlider, Role, TaskStrip, WorkingRows,
	kf, MATH_AMBER, MATH_GRADIENT, MATH_TEAL, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import {cue, hold} from './common';
import {AttemptStage, BlankAxes, Chip, CurveLabel, DISPLAY, EXP, Frac, LN, LnRule, Legend, NAVY, PhoneIcon, RecallChip, WatchIcon} from './parts';

/** y = ln(kx) for k > 0, x > 0: ln x slid up by ln k. */
const LNK: FnFamily = {f: (u, p) => Math.log((p.k ?? 1) * u), df: u => 1 / u, domain: [{from: 0, to: Infinity}]};
const WIN = {x: [0, 5] as [number, number], y: [-2, 3] as [number, number]};

// ---------- 9. worked example 1: ln(3x) ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const three = cue(id, 'three'), positive = cue(id, 'positive'), law = cue(id, 'log law'), plus = cue(id, 'plus'), zero = cue(id, 'zero'), oneOver = cue(id, 'one over'), graph = cue(id, 'graph'), slid = cue(id, 'slid'), same = cue(id, 'same'), soThree = cue(id, 'So three');
	const k = kf(f, [[slid + 4, 1], [slid + 50, 3]]);
	const T = [{frame: 0, x: 2, p: {k: 1}}, {frame: slid + 4, p: {k: 1}}, {frame: slid + 50, p: {k: 3}}];
	const three3 = <Role r="b">3</Role>;
	return (
		<>
			<TaskStrip text="Differentiate" at={-24} />
			<Legend />
			<EquationStrip at={-30} y={166}>y = ln({three3}x)</EquationStrip>
			<GivensCard at={-30} title="Givens" y={300} w={520} lines={[
				{content: <>inside number 3</>, at: three, role: 'b'},
				{content: <>x &gt; 0</>, at: positive},
			]} />
			<RecallChip x={96} y={540} w={540} at={law} size={30}>Year 11 log law:<br />ln(ab) = ln a + ln b (a, b &gt; 0)</RecallChip>
			<Card x={96} y={680} w={540} at={-30} out={soThree - 6} pad="14px 26px 16px">
				<CardTitle>Plan</CardTitle>
				{['1. Split the log with the log law.', '2. Differentiate each part.'].map((t, i) => (
					<div key={i} style={{...DISPLAY(36, INK, 700), padding: '2px 12px', margin: '6px -12px 0', borderRadius: 10, background: (i === 0 ? f < zero : f >= zero) ? '#efe6d2' : undefined}}>{t}</div>
				))}
			</Card>
			<Enter at={-30} out={plus - 6} style={{position: 'absolute', left: 680, top: 300}}>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginBottom: 10}}>The rule we just proved:</div>
				<span style={DISPLAY(56)}><LnRule dom /></span>
			</Enter>
			<WorkingRows x={680} y={290} w={760} size={54} oldSize={38} gap={16} rows={[
				{left: 'y', right: <><Role r="b">ln 3</Role> + ln x</>, at: plus},
				{left: <>d/dx(<Role r="b">ln 3</Role>)</>, right: '0', at: zero},
				{left: 'dy/dx', right: <>0 + <Frac n="1" d="x" /> = <Frac n="1" d="x" /></>, at: oneOver, answer: true},
			]} />
			<HandTag x={680} y={600} text="ln 3 is a constant (≈ 1.10)" at={zero + 10} size={38} role="b" />
			<FunctionSimulator x={1250} y={170} width={580} height={500} window={WIN} family={LNK} timeline={T}
				xTicks={[1, 2, 3, 4]} yTicks={[-1, 1, 2]} xLabel="x" yLabel="y" asymptotes={[0]}
				curves={[{fn: X => (X > 0.02 ? Math.log(X) : NaN), at: slid, domain: [0.02, 5]}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 130}}
				readout={{x: 680, y: 660, width: 520, at: -30, inline: true, rows: [
					{label: 'gradient at x = 2', role: 'gradient', value: s => s.slope, digits: 3, glow: [slid, slid + 120]},
				]}}
				overlay={g => {
					const [ax, ay] = g.toFrame(3.7, Math.log(3.7));
					const up = Math.log(k);
					return f >= slid + 10 ? <>
						<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
							<line x1={ax} y1={ay} x2={ax} y2={g.toFrame(3.7, Math.log(3.7) + up)[1]} stroke={MATH_TEAL} strokeWidth={6} strokeLinecap="round" />
						</svg>
						<HandTag x={ax + 14} y={ay - 30} text="up ln 3" at={slid + 40} size={36} role="b" />
					</> : null;
				}} />
			<CurveLabel x={1400} y={230} size={44}>y = ln({k > 1.02 ? <Role r="b">{k.toFixed(k > 2.98 ? 0 : 1)}</Role> : '1'}x)</CurveLabel>
			<ParameterSlider x={1250} y={690} width={220} symbol="k" role="b" value={k} min={1} max={3.2} digits={2} at={graph}
				ticks={[{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]} />
			<HandTag x={1260} y={860} text="slides up, same slope" at={same} size={44} role="b" />
			<MistakeCard x={96} y={850} w={1110} size={42} at={soThree} wrong={<>dy/dx = 3/x</>} caption="k > 0 inside the log only slides the curve" />
		</>
	);
};

// ---------- 10. worked example 2: 3 ln x ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const three = cue(id, 'three'), two = cue(id, 'two'), cm = cue(id, 'constant multiple'), row1 = cue(id, 'is three over'), five = cue(id, 'five'), graph = cue(id, 'graph'), stretch = cue(id, 'Stretch'), becomes = cue(id, 'becomes'), soA = cue(id, 'So a number');
	const k = kf(f, [[stretch + 4, 1], [stretch + 50, 3]]);
	const T = [{frame: 0, x: 2, yScale: 1, p: {c: Math.E}}, {frame: stretch + 4, yScale: 1}, {frame: stretch + 50, yScale: 3}];
	const three3 = <Role r="k">3</Role>;
	return (
		<>
			<TaskStrip text="Find the gradient at x = 2" at={-24} />
			<Legend />
			<EquationStrip at={-30} y={166}>y = {three3} ln x</EquationStrip>
			<GivensCard at={-30} title="Givens" y={300} w={520} lines={[
				{content: <>number in front 3</>, at: three, role: 'k'},
				{content: <>x = 2</>, at: two, glow: [five, five + 60], role: 'height'},
				{content: <>x &gt; 0</>, at: two + 10},
			]} />
			<RecallChip x={96} y={600} w={540} at={cm} size={30}>Year 11 constant multiple rule:<br />d/dx(k·f) = k·f′</RecallChip>
			<Enter at={-30} out={row1 - 6} style={{position: 'absolute', left: 680, top: 300}}>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginBottom: 10}}>The rule:</div>
				<span style={DISPLAY(56)}><LnRule dom /></span>
			</Enter>
			<WorkingRows x={680} y={290} w={760} size={54} oldSize={38} gap={16} rows={[
				{left: 'dy/dx', right: <>{three3} × <Frac n="1" d="x" /> = <Frac n={three3} d="x" /></>, at: row1},
				{left: 'at x = 2', right: <><Frac n="3" d="2" /> = 1.5</>, at: five, answer: true},
			]} />
			<FunctionSimulator x={1250} y={170} width={580} height={520} window={{x: [0, 5], y: [-2, 6]}} family={LN} timeline={T}
				xTicks={[1, 2, 3, 4]} yTicks={[2, 4, 6]} xLabel="x" yLabel="y" asymptotes={[0]}
				curves={[{fn: X => (X > 0.02 ? Math.log(X) : NaN), at: stretch, domain: [0.02, 5]}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 120}}
				triangle={{run: 2, mode: 'screen', at: -30, labels: {first: () => 'run 2', second: len => `rise ${len < 1.02 ? '1' : len.toFixed(len > 2.98 ? 0 : 1)}`}}}
				readout={{x: 680, y: 560, width: 520, at: -30, inline: true, rows: [{label: 'gradient at x = 2', role: 'gradient', value: s => s.slope, digits: 2}]}}
				overlay={g => <HandTag x={g.pt[0] + 40} y={g.pt[1] + 60} text="run: same" at={stretch + 30} size={36} color={MATH_GRADIENT} />} />
			<CurveLabel x={1360} y={230} size={44}>y = {k > 1.02 ? <Role r="k">{k.toFixed(k > 2.98 ? 0 : 1)}</Role> : ''} ln x</CurveLabel>
			<ParameterSlider x={1250} y={710} width={220} symbol="k" role="k" value={k} min={1} max={3.2} digits={2} at={graph}
				ticks={[{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]} />
			<HandTag x={1260} y={880} text="stretch: slope × 3" at={becomes + 10} size={44} role="k" />
			<Chip x={96} y={800} at={soA} size={34} color={MATH_TEAL} border={MATH_TEAL}>ln(kx), k &gt; 0: slides up by ln k, same slope</Chip>
			<Chip x={96} y={880} at={soA + 50} size={34} color={MATH_AMBER} border={MATH_AMBER}>k ln x: stretches, slope × k</Chip>
		</>
	);
};

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const id = 'scene-11';
	const f = useCurrentFrame();
	const flip = cue(id, 'Flip the graph'), height = cue(id, 'height'), becomes = cue(id, 'becomes x'), soThe = cue(id, 'So the natural');
	const rows: {text: string; sub: string; at: number; icon: React.ReactNode; color: string}[] = [
		{text: 'eˣ: slope = height', sub: 'users per week = users', at: height, icon: <PhoneIcon x={14} y={0} h={96} />, color: NAVY},
		{text: 'ln x: slope = 1/x, x > 0', sub: 'weeks per thousand = 1/x', at: becomes, icon: <WatchIcon x={4} y={6} h={88} />, color: INK},
	];
	return (
		<>
			<TaskStrip text="A way to hold onto it" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 150, top: 172, width: 1620, height: 768, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>
				<div style={{position: 'absolute', left: 48, top: 26}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: INK_SOFT}}>Memory aid</span></div>
				<div style={{position: 'absolute', left: 660, top: 110}}><HandText text="Flip the graph, flip the slope." at={flip} size={72} color={INK} cps={30} /></div>
				<div style={{position: 'absolute', left: 660, right: 48, top: 230, height: 2, background: 'rgba(60,45,20,0.14)'}} />
				{rows.map((r, i) => {
					const on = prog(f, r.at - 4, 12);
					return (
						<div key={i} style={{position: 'absolute', left: 660, top: 260 + i * 150, width: 920, height: 140}}>
							<div style={{position: 'absolute', left: 0, top: 4, width: 110, height: 110, opacity: 0.3 + 0.7 * on}}>{r.icon}</div>
							<div style={{position: 'absolute', left: 130, top: 10}}><HandText text={r.text} at={r.at} size={56} color={r.color} cps={34} /></div>
							<div style={{position: 'absolute', left: 134, top: 80, opacity: prog(f, r.at + 20, 12), ...DISPLAY(32, INK_SOFT, 600)}}>{r.sub}</div>
						</div>
					);
				})}
				<Enter at={soThe} style={{position: 'absolute', left: 664, top: 600}}><span style={DISPLAY(56)}><LnRule dom /></span></Enter>
			</div>
			<FunctionSimulator x={190} y={290} width={566} height={560} window={{x: [-1, 4], y: [-1, 4]}} family={EXP} bare={false}
				timeline={[{frame: 0, x: Math.log(2), reflect: 0, p: {c: Math.E}}, {frame: flip + 6, reflect: 0}, {frame: flip + 40, reflect: 1}]}
				color="rgba(0,0,0,0)" xTicks={[1, 2, 3]} yTicks={[1, 2, 3]} xLabel="x" yLabel="y"
				curves={[{fn: X => Math.exp(X), at: -30, color: NAVY, width: 5, domain: [-1, Math.log(4.2)]}, {fn: X => (X > 0.02 ? Math.log(X) : NaN), at: -30, color: INK, width: 6, domain: [0.02, 4]}]}
				point={{at: -30, color: NAVY}} tangent={{at: -30, halfLength: 110}}
				triangle={{run: 1, at: -30, labels: {first: (_l, s) => (s.reflect > 0.99 ? 'rise 1' : 'across 1'), second: (_l, s) => (s.reflect > 0.99 ? 'run 2' : 'up 2')}}} />
			<CurveLabel x={270} y={330} size={38} color={NAVY}>e<Pow2 /></CurveLabel>
			<CurveLabel x={560} y={600} size={38}>ln x</CurveLabel>
		</>
	);
};
const Pow2: React.FC = () => <span style={{fontSize: '0.66em', position: 'relative', top: '-0.82em'}}>x</span>;

// ---------- 12. attempt 1 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>y = 2 ln x − 3x</>, <>x &gt; 0</>, <>at x = 2</>]}
			picture={<BlankAxes w={720} h={380} tag="gradient here?" tickX={{at: 380, label: '2'}} />}>
			<div>A curve has equation y = 2 ln x − 3x, for x &gt; 0.</div>
			<div style={{marginTop: 16}}>Find the gradient of the curve at x = 2.</div>
		</AttemptStage>
	);
};
