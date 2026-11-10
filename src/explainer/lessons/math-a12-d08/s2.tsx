// Scenes 4 to 7: the g01 boards. eˣ/(x + 1) with the domain first; ln x/cos x on its three-piece graph and
// its gradient at x = 1; sin x/x² simplified with the exclusion kept.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, EquationStrip, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, MarkSpan, MistakeCard, StudioCancellation, StudioDomainStrip, TaskStrip,
	piTicks, vis,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue} from './common';
import {
	Asym, BLUE, Bt, CurveLabel, DISPLAY, EX, Frac, GREEN, Givens, OpenMark, QUOT, RED, RecallChip, Sup, Tp, VIOLET, WIN_A, A_YTICKS, WholeRows, gmap,
} from './parts';
import {HOOK} from './s1';

// ---------- 4. domain first, then the rule ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const one1 = cue(id, 'minus one', 1), fis = cue(id, 'f is e'), gis = cue(id, 'g prime is one'), top = cue(id, 'The top of the answer'), take = cue(id, 'Take out'), justx = cue(id, 'which is just x'), one3 = cue(id, 'minus one', 3), check = cue(id, 'At x equals zero');
	const G = {x: 1150, y: 166, w: 680, h: 580};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_A);
	const den = <Bt>(x + 1)<Sup>2</Sup></Bt>;
	return (
		<>
			<TaskStrip text="Differentiate: domain first" at={-24} />
			<EquationStrip at={-30} y={160} size={80}>{HOOK()}</EquationStrip>
			<StudioDomainStrip conditions={['x ≠ −1']} path={[{frame: one1, x: 600, y: 196}, {frame: one3, x: 600, y: 196}, {frame: one3 + 24, x: 760, y: 772}]} at={one1} size={44} />
			<Givens x={96} y={300} w={600} size={50} lines={[
				{content: <>f = {EX},  f′ = {EX}</>, at: fis, role: 'b'},
				{content: <>g = x + 1,  g′ = 1</>, at: gis, role: 'a'},
			]} />
			<RecallChip x={720} y={318} w={400} at={-30} out={one3} size={30}>(f/g)′ = (f′g − fg′)/g²</RecallChip>
			<RecallChip x={720} y={400} w={400} at={-30} out={one3} size={30}>(eˣ)′ = eˣ</RecallChip>
			<WholeRows x={96} y={540} w={1030} size={60} oldSize={42} gap={12} rows={[
				{left: 'dy/dx', right: <Frac n={<><Tp><MarkSpan kind="circle" at={take} width={4}>{EX}</MarkSpan>(x + 1)</Tp> <Bt>− <MarkSpan kind="circle" at={take + 8} width={4}>{EX}</MarkSpan> × 1</Bt></>} d={den} />, at: top},
				{left: '', right: <><Frac n={<>{EX}(x + 1 − 1)</>} d={den} /> = <Frac n={<>x{EX}</>} d={den} /></>, at: justx},
				{left: 'dy/dx', right: <Frac n={<>x{EX}</>} d={den} />, at: one3, answer: true},
			]} />
			<HandTag x={700} y={500} text="shared" at={take + 10} out={justx} size={42} color={INK} />
			<Card x={96} y={700} w={1000} at={-30} out={justx - 12} pad="10px 26px 12px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>Plan</div>
				{[<>1. Domain first: the bottom can&apos;t be zero.</>, <>2. The parts f, f′, g, g′.</>, <>3. (f′g − fg′)/g², then simplify.</>].map((t, i) => <div key={i} style={{...DISPLAY(40, INK, 700), padding: '1px 12px', margin: '2px -12px 0', borderRadius: 10, background: (i === 0 && f < fis) || (i === 1 && f >= fis && f < top) || (i === 2 && f >= top) ? '#efe6d2' : undefined}}>{t}</div>)}
			</Card>
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_A} family={QUOT} timeline={[{frame: 0, x: 0}]} color={INK}
				yTicks={A_YTICKS} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: -30, halfLength: 150}}
				overlay={() => <FrameSvg><Asym M={M} X={-1} label="x = −1" /><OpenMark M={M} X={-1} /></FrameSvg>} />
			<Enter at={check} style={{position: 'absolute', left: G.x + 30, top: G.y + G.h + 8}}>
				<span style={DISPLAY(40, INK, 800)}>x = 0:  0 × e<Sup>0</Sup> ÷ 1 = 0 <span style={{color: GREEN}}>✓ flat</span></span>
			</Enter>
			<MistakeCard x={1110} y={800} w={720} at={check + 30} size={44} wrong={<>dy/dx = {EX} ÷ 1 = {EX}</>} caption="speed right now, not the slope" />
		</>
	);
};

// ---------- 5 and 6: ln x / cos x ----------
const LNCOS: FnFamily = {
	f: u => Math.log(u) / Math.cos(u),
	df: u => (Math.cos(u) / u + Math.log(u) * Math.sin(u)) / (Math.cos(u) * Math.cos(u)),
	domain: [{from: 0, to: Math.PI / 2}, {from: Math.PI / 2, to: 1.5 * Math.PI}, {from: 1.5 * Math.PI, to: Infinity}],
	excluded: [Math.PI / 2, 1.5 * Math.PI],
};
const WIN_B = {x: [-0.5, 5] as Range, y: [-4, 4] as Range};
const B_TICKS = [{value: 1, label: '1'}, ...piTicks(0, 1.5, 2)];
const GB = {x: 40, y: 290, w: 860, h: 540};
const LNCOS_EQ = (size?: number) => <span style={{whiteSpace: 'pre', fontSize: size}}>y = <Frac n={<Tp>ln x</Tp>} d={<Bt>cos x</Bt>} /></span>;
const cos1 = Math.cos(1);

export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const one = cue(id, 'equals one'), needs = cue(id, 'The natural log needs'), zero = cue(id, 'zero', 2), fis = cue(id, 'f is the natural'), gl = cue(id, 'minus sine x'), fpg = cue(id, 'f prime g is'), plus = cue(id, 'plus');
	const M = gmap(GB.x, GB.y, GB.w, GB.h, WIN_B);
	return (
		<>
			<TaskStrip text="Differentiate, then find the gradient at x = 1" at={-24} size={56} />
			<EquationStrip at={-30} y={160} size={76}>{LNCOS_EQ()}</EquationStrip>
			<FunctionSimulator at={-30} x={GB.x} y={GB.y} width={GB.w} height={GB.h} window={WIN_B} family={LNCOS} timeline={[{frame: 0, x: 1}]} color={INK}
				xTicks={B_TICKS} yTicks={[-4, -2, 2, 4]} xLabel="x (radians)" yLabel="y"
				regions={[{x: [-0.5, 0], color: '#f8e8c8', opacity: 0.8, at: needs}]}
				point={{at: one}}
				overlay={() => <FrameSvg><Asym M={M} X={0} o={prog(f, needs, 12)} /><Asym M={M} X={Math.PI / 2} o={prog(f, zero, 12)} /><Asym M={M} X={1.5 * Math.PI} o={prog(f, zero + 8, 12)} /></FrameSvg>} />
			<HandTag x={M.pt(0.08, 0)[0]} y={M.pt(0, 3.3)[1]} text="ln x needs x > 0" at={needs + 6} out={fpg} size={38} role="k" />
			<HandTag x={M.pt(1.7, 0)[0]} y={M.pt(0, -3.3)[1]} text="cos x = 0" at={zero + 6} out={fpg} size={38} role="k" />
			<CurveLabel x={M.pt(3.3, 2)[0]} y={M.pt(3.3, 2)[1]} at={-30} size={38}>{LNCOS_EQ()}</CurveLabel>
			<StudioDomainStrip conditions={['x > 0,  cos x ≠ 0  (x ≠ π/2, 3π/2, ...)']} path={[{frame: 0, x: 60, y: 852}]} at={zero} size={40} />
			<Givens x={940} y={290} w={884} size={48} lines={[
				{content: <>gradient at x = 1</>, at: one},
				{content: <>f = ln x,  f′ = <Frac n="1" d="x" /></>, at: fis, role: 'b'},
				{content: <>g = cos x,  g′ = −sin x</>, at: gl, role: 'a', note: 'x in radians'},
			]} />
			<Card x={940} y={418} w={884} at={-30} out={fis - 10} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Plan</div>
				{[<>1. Domain first.</>, <>2. The parts: f, f′, g, g′.</>, <>3. (f′g − fg′)/g².</>, <>4. Put x = 1.</>].map((t, i) => <div key={i} style={{...DISPLAY(44, INK, 700), padding: '2px 12px', margin: '4px -12px 0', borderRadius: 10, background: (i === 0 && f >= needs && f < fis) ? '#f8e8c8' : undefined}}>{t}</div>)}
			</Card>
			<RecallChip x={940} y={640} at={fis} out={fpg} size={32}>(ln x)′ = 1/x, for x &gt; 0</RecallChip>
			<RecallChip x={940} y={720} at={fis} out={fpg} size={32}>(cos x)′ = −sin x, x in radians</RecallChip>
			<RecallChip x={940} y={800} at={fis} out={fpg} size={32}>quotient: (f′g − fg′)/g², g ≠ 0</RecallChip>
			<WholeRows x={940} y={630} w={884} size={46} oldSize={36} gap={14} rows={[
				{left: 'dy/dx', right: <Frac n={<><Tp>(<Frac n="1" d="x" />) cos x</Tp> <Bt><MarkSpan kind="circle" at={plus} role="mistake" width={4}>−</MarkSpan> ln x × (<MarkSpan kind="circle" at={plus + 6} role="mistake" width={4}>−</MarkSpan>sin x)</Bt></>} d={<Bt>cos<Sup>2</Sup> x</Bt>} />, at: fpg},
				{left: '', right: <Frac n={<><Tp><Frac n="cos x" d="x" /></Tp> <Bt>+ ln x sin x</Bt></>} d={<Bt>cos<Sup>2</Sup> x</Bt>} />, at: plus + 18},
			]} />
			<HandTag x={1560} y={612} text="− × − = +" at={plus + 6} size={42} color={RED} />
		</>
	);
};

export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const vanishes = cue(id, 'vanishes'), cant = cue(id, "can't move"), oneover = cue(id, 'which is one over'), five = cue(id, 'point eight five', 1), agrees = cue(id, 'agrees'), rising = cue(id, 'rising'), degrees = cue(id, 'And in degrees');
	const M = gmap(GB.x, GB.y, GB.w, GB.h, WIN_B);
	const strike = prog(f, vanishes, 14);
	return (
		<>
			<TaskStrip text="The gradient at x = 1" at={-24} size={56} />
			<EquationStrip at={-30} y={160} size={76}>{LNCOS_EQ()}</EquationStrip>
			<FunctionSimulator at={-30} x={GB.x} y={GB.y} width={GB.w} height={GB.h} window={WIN_B} family={LNCOS} timeline={[{frame: 0, x: 1}]} color={INK}
				xTicks={B_TICKS} yTicks={[-4, -2, 2, 4]} xLabel="x (radians)" yLabel="y"
				regions={[{x: [-0.5, 0], color: '#f8e8c8', opacity: 0.8, at: -30}]}
				point={{at: -30}} tangent={{at: agrees, halfLength: 190}}
				lines={[{slope: () => -1 / cos1, at: rising, out: degrees, color: RED, dash: '14 10', halfLength: 170}]}
				overlay={() => <FrameSvg><Asym M={M} X={0} /><Asym M={M} X={Math.PI / 2} /><Asym M={M} X={1.5 * Math.PI} /></FrameSvg>} />
			<CurveLabel x={M.pt(3.3, 2)[0]} y={M.pt(3.3, 2)[1]} at={-30} size={38}>{LNCOS_EQ()}</CurveLabel>
			<CurveLabel x={M.pt(1.08, -0.35)[0]} y={M.pt(1.08, -0.35)[1]} at={-30} out={agrees} size={32} color={INK_SOFT}>(1, 0): ln 1 = 0</CurveLabel>
			<HandTag x={M.pt(1.3, 0)[0]} y={M.pt(0, 3.4)[1]} text="rising: slope 1.85" at={agrees + 8} out={rising} size={40} color={VIOLET} />
			<HandTag x={M.pt(1.3, 0)[0]} y={M.pt(0, 3.4)[1]} text="reversed: falling" at={rising + 8} out={degrees + 10} size={40} color={RED} />
			<StudioDomainStrip conditions={['x > 0,  cos x ≠ 0  (x ≠ π/2, 3π/2, ...)']} path={[{frame: 0, x: 60, y: 852}]} at={-30} size={40} />
			{/* the derivative, its bottom's term vanishing at x = 1 */}
			<Card x={940} y={286} w={884} at={-30} pad="10px 24px 12px">
				<div style={{...DISPLAY(44, INK, 800), display: 'flex', alignItems: 'center', gap: 12}}>dy/dx = <Frac n={<><Tp><Frac n="cos x" d="x" /></Tp> <span style={{position: 'relative', display: 'inline-block', color: strike > 0.5 ? INK_SOFT : BLUE}}>+ ln x sin x<span style={{position: 'absolute', left: '4%', right: '-2%', top: '52%', height: 4, background: INK_SOFT, transform: `scaleX(${strike})`, transformOrigin: 'left'}} /></span></>} d={<Bt>cos<Sup>2</Sup> x</Bt>} /></div>
				<div style={{...DISPLAY(30, INK_SOFT, 600), opacity: prog(f, five + 20, 12)}}>same as (cos x + x ln x sin x)/(x cos² x), for x &gt; 0</div>
			</Card>
			<HandTag x={1520} y={350} text="ln 1 = 0: vanishes" at={vanishes + 6} out={agrees} size={38} color={INK_SOFT} />
			<WholeRows x={940} y={478} w={884} size={50} oldSize={50} gap={10} rows={[
				{left: 'x = 1:', relation: ' ', right: <>dy/dx = <Frac n="cos 1" d={<>cos<Sup>2</Sup> 1</>} /> = <Frac n="1" d="cos 1" /></>, at: oneover, answer: true},
			]} />
			<Enter at={five} style={{position: 'absolute', left: 1330, top: 600}}><span style={DISPLAY(34, INK_SOFT, 700)}>≈ 1.851  (cos 1 ≈ 0.540, radians)</span></Enter>
			<LiveReadoutBoard x={940} y={642} width={430} at={-30} inline rows={[
				{label: <>top&apos;s turn</>, value: 1 / cos1, digits: 2, role: 'b'},
				{label: <>bottom&apos;s turn</>, value: 0, digits: 2, role: 'a', glow: [cant, cant + 70]},
				{label: 'gradient', value: 1 / cos1, digits: 2, role: 'gradient', at: agrees, glow: [agrees, agrees + 60]},
			]} />
			<MistakeCard x={1394} y={650} w={436} at={rising + 10} size={36} wrong={<>−1/cos 1 ≈ −1.851</>} caption="lo d(hi) comes first" />
			<Enter at={degrees} style={{position: 'absolute', left: 940, top: 904}}>
				<span style={{position: 'relative', display: 'inline-block', ...DISPLAY(32, INK_SOFT, 700)}}>in degrees: 1/cos 1° ≈ 1.0002
					<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}><path d="M0,62 Q50,50 100,40" stroke={RED} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(f, degrees + 14, 12)} /></svg>
				</span>
				<span style={{...DISPLAY(32, RED, 800), marginLeft: 18, opacity: prog(f, degrees + 24, 10)}}>✗ use radians</span>
			</Enter>
		</>
	);
};

// ---------- 7. cancelling keeps the domain ----------
const SINX2: FnFamily = {f: u => Math.sin(u) / (u * u), df: u => (u * Math.cos(u) - 2 * Math.sin(u)) / (u * u * u), domain: [{from: -Infinity, to: 0}, {from: 0, to: Infinity}], excluded: [0]};
const WIN_C = {x: [-6, 6] as Range, y: [-4, 4] as Range};
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const sq = cue(id, 'squared'), zero1 = cue(id, "x can't be zero"), four = cue(id, 'four'), share = cue(id, 'Both terms'), bottom = cue(id, 'from the bottom'), allowed = cue(id, 'allowed only'), answer = cue(id, 'So the answer'), zero = cue(id, 'equal to zero'), cancelling = cue(id, 'Cancelling a factor');
	const G = {x: 1210, y: 150, w: 620, h: 430};
	const M = gmap(G.x, G.y, G.w, G.h, WIN_C);
	const x4 = <Bt>x<Sup>4</Sup></Bt>;
	const res = <Frac n={<>x cos x − 2 sin x</>} d={<>x<Sup>3</Sup></>} />;
	return (
		<>
			<TaskStrip text="Differentiate and simplify" at={-24} />
			<EquationStrip at={-30} y={160} size={80}>y = <Frac n={<Tp>sin x</Tp>} d={<Bt>x<Sup>2</Sup></Bt>} /></EquationStrip>
			<StudioDomainStrip conditions={['x ≠ 0']} path={[{frame: sq, x: 560, y: 196}, {frame: zero, x: 560, y: 196}, {frame: zero + 24, x: 900, y: 736}]} at={sq} size={44} />
			<HandTag x={760} y={300} text="allowed: x ≠ 0" at={allowed} out={zero} size={42} role="k" />
			<WholeRows x={96} y={300} w={1090} size={60} oldSize={60} gap={12} rows={[
				{left: 'dy/dx', right: <Frac n={<><Tp><MarkSpan kind="circle" at={share} width={4}>x<Sup>2</Sup></MarkSpan> cos x</Tp> <Bt>− <MarkSpan kind="circle" at={share + 8} width={4}>2x</MarkSpan> sin x</Bt></>} d={x4} />, at: four, keep: true},
			]} />
			<HandTag x={800} y={330} text="shared factor x" at={share + 10} out={allowed} size={40} color={INK} />
			<StudioCancellation x={96} y={470} at={bottom} strikeAt={bottom + 20} size={64} prefix="dy/dx ="
				top={[{content: 'x', cancel: true}, {content: '(x cos x − 2 sin x)'}]}
				bottom={[{content: 'x', cancel: true}, {content: <>x<Sup>3</Sup></>}]} />
			<WholeRows x={96} y={700} w={1090} size={60} oldSize={60} gap={12} rows={[
				{left: 'dy/dx', right: res, at: answer, answer: f >= zero},
			]} />
			<Givens x={1210} y={600} w={620} size={46} out={cancelling} lines={[
				{content: <>f = sin x,  f′ = cos x</>, at: sq, role: 'b'},
				{content: <>g = x<Sup>2</Sup>,  g′ = 2x</>, at: zero1, role: 'a'},
			]} />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_C} family={SINX2} timeline={[{frame: 0, x: 1}]} color={INK} curveWidth={6}
				xTicks={[-6, -4, -2, 2, 4, 6]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Asym M={M} X={0} label="x = 0" glow={vis(f, allowed, allowed + 60)} /><OpenMark M={M} X={0} /></FrameSvg>} />
			<MistakeCard x={1190} y={610} w={640} at={cancelling + 10} size={30} wrong={<>(x cos x − 2 sin x)/x³ for all x</>} caption="the exclusion stays: x ≠ 0" />
		</>
	);
};
