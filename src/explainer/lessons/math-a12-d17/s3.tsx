// Scenes 7 and 8: the worked example y = x + 1/x on the g01 board (domain to stationary points; then the gap, no
// inflection, the vertical asymptote and the approach to y = x, with the pieces drawn by a riding point).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {CARD, CardTitle, Card, ConcavityGlyphs, FrameSvg, FunctionSimulator, HandTag, MistakeCard, SceneHeading, WorkingRows, kf, vis} from '../../math/studio';
import {K7, K8} from './cuemap';
import {AMB, AMB_INK, AnswerBox, Bl, BoxCard, CAPC, CUPC, CurveLabel, GREEN, GREY, GREY_INK, Line, REC, RED, Ring, Tick, V, VIOLET, rec} from './parts';
import {Clip, pathOf, plot} from './geom';
import type {Stage, Win} from './geom';

export const W7: Win = {x: [-4, 4], y: [-6, 6]};
export const G7: Stage = {x: 30, y: 262, w: 880, h: 530};
const RX = 1030;
const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMB_INK}}>{children}</span>;

const Givens: React.FC<{gapAt: number}> = ({gapAt}) => {
	const f = useCurrentFrame();
	return (
		<Card x={30} y={146} w={970} at={-30} pad="10px 28px 12px">
			<div style={{display: 'flex', alignItems: 'baseline', gap: 40}}>
				<CardTitle>Given</CardTitle>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>y = x + 1/x</span>
				<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: AMB_INK, opacity: prog(f, gapAt, 12), border: `3px solid ${AMB}`, borderRadius: 14, padding: '0 14px'}}>x ≠ 0</span>
			</div>
		</Card>
	);
};
const CHECK = ['domain', 'symmetry', 'intercepts', 'stationary points', 'concavity', 'asymptotes', 'x → ±∞'];
/** The seven-step checklist from scene 6 as a solid card; each item ticks green as it is used. */
const ChecklistCard: React.FC<{done: number[]; cols?: number}> = ({done, cols = 2}) => {
	const f = useCurrentFrame();
	return (
		<Card x={RX} y={146} w={860} at={-30} pad="10px 24px 14px">
			<CardTitle>Sketching checklist</CardTitle>
			<div style={{display: 'grid', gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr', columnGap: 18, rowGap: cols === 2 ? 6 : 2, marginTop: 4}}>
				{CHECK.map((t, i) => {
					const d = prog(f, done[i], 12);
					return (
						<div key={i} style={{display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: cols === 2 ? 34 : 38, color: INK, background: d > 0.5 ? '#dcefe2' : undefined, borderRadius: 10, padding: '0 8px'}}>
							{i + 1}. {t}{d > 0.01 ? <Tick size={34} o={d} /> : null}
						</div>
					);
				})}
			</div>
		</Card>
	);
};
/** The graph stage for both halves: large, with the excluded value x = 0 as a solid amber band from the first frame. */
export const G7A: Stage = {x: 20, y: 250, w: 990, h: 710};
const ReciprocalAxes: React.FC<{regions?: React.ComponentProps<typeof FunctionSimulator>['regions']}> = ({regions = []}) => (
	<FunctionSimulator x={G7A.x} y={G7A.y} width={G7A.w} height={G7A.h} window={W7} family={REC} timeline={[{frame: 0, x: 1}]} at={-30} hideMainCurve
		xTicks={[-3, -2, -1, 1, 2, 3]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y"
		regions={[...regions, {x: [-0.1, 0.1], color: '#efc77a', opacity: 1, at: -30}]} />
);

// ---------- 7. worked example, domain to stationary points ----------
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const M = plot(G7A, W7);
	const Pm = M.pf(1, 2), Px = M.pf(-1, -2);
	const never = 1e9;
	return (
		<>
			<SceneHeading text="Worked example: sketch y = x + 1/x" at={4} size={56} />
			<Givens gapAt={k.pieces} />
			<ReciprocalAxes regions={[{x: [-4, -0.1], color: '#f8e8c8', opacity: 0.75, at: k.pieces, out: k.min}, {x: [0.1, 4], color: '#f3ecd9', opacity: 0.9, at: k.pieces + 10, out: k.min}]} />
			<HandTag x={M.pf(-3.8, 0)[0]} y={M.pf(0, -4.6)[1]} text="odd: a half turn about the origin" at={k.odd + 10} out={k.fp} size={42} color={VIOLET} />
			<HandTag x={M.pf(0.2, 0)[0]} y={M.pf(0, 5.3)[1]} text="x ≠ 0" at={-30} out={k.zero + 10} size={44} color={AMB_INK} />
			<FrameSvg>
				{[[Pm, k.min], [Px, k.max]].map(([p, t], i) => {const o = prog(f, t as number, 12); return o > 0.001 ? <g key={i} opacity={o}><circle cx={(p as number[])[0]} cy={(p as number[])[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} /><Ring p={p as [number, number]} r={28} o={1} /></g> : null;})}
			</FrameSvg>
			<CurveLabel x={Pm[0] + 60} y={Pm[1] + 40} at={k.min} size={40} color={INK}>local min (1, 2)</CurveLabel>
			<CurveLabel x={Px[0] - 340} y={Px[1] - 96} at={k.max} size={40} color={INK}>local max (−1, −2)</CurveLabel>
			<FrameSvg>
				<g opacity={vis(f, k.zero, k.min, 12)}>
					<line x1={M.pf(-4, 0)[0]} x2={M.pf(-0.12, 0)[0]} y1={M.pf(0, 0)[1]} y2={M.pf(0, 0)[1]} stroke={AMB} strokeWidth={10} strokeLinecap="round" />
					<line x1={M.pf(0.12, 0)[0]} x2={M.pf(4, 0)[0]} y1={M.pf(0, 0)[1]} y2={M.pf(0, 0)[1]} stroke={AMB} strokeWidth={10} strokeLinecap="round" />
					<circle cx={M.pf(0, 0)[0]} cy={M.pf(0, 0)[1]} r={13} fill={CARD} stroke={AMB} strokeWidth={5} />
				</g>
			</FrameSvg>
			<HandTag x={M.pf(0.25, 0)[0]} y={M.pf(0, 5)[1]} text="a gap at x = 0" at={k.zero + 10} out={k.fp} size={44} color={AMB_INK} />
			<HandTag x={M.pf(-3.8, 0)[0]} y={M.pf(0, 2.2)[1]} text="left piece: x < 0" at={k.pieces} out={k.min} size={44} color={AMB_INK} />
			<HandTag x={M.pf(0.4, 0)[0]} y={M.pf(0, -2.2)[1]} text="right piece: x > 0" at={k.pieces + 10} out={k.min} size={44} color={AMB_INK} />
			<ChecklistCard cols={f < k.fpp - 10 ? 1 : 2} done={[k.pieces, k.odd, k.none, k.zeroAt, never, never, never]} />
			<WorkingRows x={RX - 36} y={f < k.fpp - 10 ? 580 : 420} w={900} size={52} oldSize={36} gap={8} rows={[
				{relation: '', right: <Am>x ≠ 0: a gap, two pieces</Am>, at: k.zero, out: k.fpp - 14},
				{relation: '', right: <>f(−x) = −x − 1/x = −f(x): odd</>, at: k.odd, out: k.fpp - 14},
				{relation: '', right: <>no intercepts: x + 1/x = 0</>, at: k.none, out: k.fpp - 14},
				{relation: '', right: <>would need x² = −1</>, at: k.because + 30, out: k.fpp - 14},
				{relation: '', right: <V>f′(x) = (x² − 1)/x²</V>, at: k.fp},
				{relation: '', right: <V>f′(x) = 0 at x = 1 and x = −1</V>, at: k.zeroAt},
				{relation: '', right: <Bl>f″(x) = 2/x³</Bl>, at: k.fpp},
				{relation: '', right: <><Bl>f″(1) = 2 &gt; 0</Bl>: min (1, 2)</>, at: k.at1, keep: true},
				{relation: '', right: <><Bl>f″(−1) = −2 &lt; 0</Bl>: max (−1, −2)</>, at: k.atM1, keep: true},
			]} />
		</>
	);
};

// ---------- 8. the gap, the asymptotes and no inflection ----------
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const M = plot(G7A, W7);
	const Pm = M.pf(1, 2), Px = M.pf(-1, -2);
	const xr = kf(f, [[k.grows - 10, 1], [k.up + 12, 0.17]]);
	const xl = kf(f, [[k.fromLeft, -1], [k.down + 12, -0.17]]);
	const outer = prog(f, k.closer - 10, 50);
	const B = M.box;
	const xTop = M.pf(0, 6), xBot = M.pf(0, -6);
	const diag = [M.pf(-4, -4), M.pf(4, 4)];
	const done = prog(f, k.line + 20, 16);
	const rowsA = vis(f, -30, k.as, 12);
	return (
		<>
			<SceneHeading text="The gap, the asymptotes and no inflection" at={4} size={56} />
			<Givens gapAt={-60} />
			<ChecklistCard done={[-60, -60, -60, -60, k.noInfl, k.asym, k.closer]} />
			<ReciprocalAxes regions={[{x: [-4, -0.1], color: CAPC, opacity: 0.85, at: k.two + 40}, {x: [0.1, 4], color: CUPC, opacity: 0.85, at: k.two + 90}]} />
			<ConcavityGlyphs cells={[{from: -4, to: 0, sign: -1}]} toFrame={M.pf} Y={-5} at={k.two + 40} out={k.as} words />
			<ConcavityGlyphs cells={[{from: 0, to: 4, sign: 1}]} toFrame={M.pf} Y={-5} at={k.two + 90} out={k.as} words />
			<FrameSvg><circle cx={M.pf(0, 0)[0]} cy={M.pf(0, 0)[1]} r={16} fill={CARD} stroke={RED} strokeWidth={6} opacity={vis(f, k.but, k.as + 30, 10)} /></FrameSvg>
			<HandTag x={M.pf(0.25, 0)[0]} y={M.pf(0, 0.9)[1]} text="x = 0: no point" at={k.but} out={k.as + 30} size={44} color={RED} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
				<Clip M={M}>
					<line x1={xTop[0]} x2={xBot[0]} y1={xTop[1]} y2={xTop[1] + (xBot[1] - xTop[1]) * prog(f, k.asym, 20)} stroke={GREY_INK} strokeWidth={4} strokeDasharray="14 10" opacity={prog(f, k.asym, 8)} />
					<line x1={diag[0][0]} y1={diag[0][1]} x2={diag[0][0] + (diag[1][0] - diag[0][0]) * prog(f, k.shrinks, 30)} y2={diag[0][1] + (diag[1][1] - diag[0][1]) * prog(f, k.shrinks, 30)} stroke={GREY_INK} strokeWidth={4} strokeDasharray="14 10" opacity={prog(f, k.shrinks, 8)} />
					{f >= k.grows - 10 ? <path d={pathOf(M, rec, xr, 1, 120)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}
					{f >= k.fromLeft ? <path d={pathOf(M, rec, -1, xl, 120)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}
					{outer > 0.001 ? <>
						<path d={pathOf(M, rec, 1, 1 + 3 * outer, 160)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
						<path d={pathOf(M, rec, -1 - 3 * outer, -1, 160)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
					</> : null}
				</Clip>
				{[Pm, Px].map((p, i) => <g key={i}><circle cx={p[0]} cy={p[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} /><Ring p={p} r={28} o={1} /><rect x={p[0] - 120} y={p[1] - 70} width={240} height={140} rx={24} fill="none" stroke={GREY} strokeWidth={3} strokeDasharray="10 8" opacity={vis(f, -30, k.as, 12)} /></g>)}
				{f >= k.grows - 10 && f < k.down + 40 ? <circle cx={M.pf(xr, 0)[0]} cy={M.pf(0, rec(xr))[1]} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={vis(f, k.grows - 10, k.fromLeft, 8)} /> : null}
				{f >= k.fromLeft ? <circle cx={M.pf(xl, 0)[0]} cy={M.pf(0, rec(xl))[1]} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={vis(f, k.fromLeft, k.so, 8)} /> : null}
				{done > 0.001 ? <rect x={M.x + B.left - 12} y={M.y + B.top - 12} width={B.width + 24} height={B.height + 24} rx={20} fill="none" stroke={GREEN} strokeWidth={7} opacity={done} /> : null}
			</svg>
			<CurveLabel x={Pm[0] + 60} y={Pm[1] + 40} at={-30} size={36} color={INK}>local min (1, 2)</CurveLabel>
			<CurveLabel x={Px[0] - 310} y={Px[1] - 90} at={-30} size={36} color={INK}>local max (−1, −2)</CurveLabel>
			<HandTag x={M.pf(-3.85, 0)[0]} y={M.pf(0, 4.9)[1]} text="local: nearby only," at={-30} out={k.as} size={38} color={GREY_INK} />
			<HandTag x={M.pf(-3.85, 0)[0]} y={M.pf(0, 3.9)[1]} text="separate pieces" at={-30} out={k.as} size={38} color={GREY_INK} />
			<CurveLabel x={xTop[0] - 120} y={M.y + B.top + 6} at={k.asym} size={38} color={GREY_INK}>x = 0</CurveLabel>
			<CurveLabel x={M.pf(3.1, 0)[0]} y={M.pf(0, 2.4)[1]} at={k.shrinks + 20} size={38} color={GREY_INK}>y = x</CurveLabel>
			{/* right column */}
			<div style={{opacity: rowsA}}>
				<Line x={RX} y={420} at={k.two} size={52}><Bl>f″(x) = 2/x³</Bl></Line>
				<Line x={RX} y={486} at={k.two + 40} size={44}>x &lt; 0: <Bl>−</Bl>, cap     x &gt; 0: <Bl>+</Bl>, cup</Line>
				<Line x={RX} y={546} at={k.change} size={44}>the concavity changes across 0</Line>
				<Line x={RX} y={606} at={k.but} size={44}><Am>but x = 0 is not in the domain</Am></Line>
			</div>
			<Line x={RX} y={420} at={k.as + 10} size={44}>x → 0 from the right: f → ∞</Line>
			<Line x={RX} y={480} at={k.fromLeft} size={44}>x → 0 from the left: f → −∞</Line>
			<Line x={RX} y={540} at={k.asym} size={50}>vertical asymptote x = 0</Line>
			<Line x={RX} y={612} at={k.large} size={44}>x → ±∞: f(x) − x = 1/x → 0</Line>
			<Line x={RX} y={672} at={k.closer} size={44}>so the curve approaches y = x</Line>
			<BoxCard x={RX} y={680} w={860} at={-30} out={k.noInfl - 14} size={44} title="From the first half">
				<div><Am>x ≠ 0</Am>: two pieces; odd; no intercepts</div>
				<div>min (1, 2), max (−1, −2)</div>
			</BoxCard>
			<MistakeCard x={RX} y={680} w={860} at={k.noInfl} out={k.large - 12} size={46} wrong={<>inflection at x = 0</>} caption="no point on the curve" />
			<AnswerBox x={RX} y={760} at={k.line + 20} size={44}>two pieces; asymptotes x = 0, y = x</AnswerBox>
		</>
	);
};
