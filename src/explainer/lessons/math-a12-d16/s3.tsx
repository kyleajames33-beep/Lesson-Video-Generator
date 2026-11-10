// Scenes 6 to 8: the second derivative test (flat tangents on the cubic: a cap's flat point is a hilltop, a cup's a
// valley), when the test can't decide (x⁴, −x⁴, x³ with their sign strips) and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, CupCapGlyph, FrameSvg, FunctionSimulator, HandTag, SceneHeading, SignStrip, TaskStrip, makePlot, vis} from '../../math/studio';
import {AnswerStack} from '../math-a12-d14/parts';
import {cue} from './common';
import {Bl, BoxCard, CAPC, CUBE, CUBIC, CUPC, Chip, CurveLabel, Diamond, GREY_INK, Line, NQUART, Ol, QUART, Ring, V, VIOLET, VaseRig} from './parts';
import {WX} from './s2';

const RX = 1120;

// ---------- 6. the second derivative test ----------
const C6 = {x: 30, y: 150, w: 1060, h: 790};
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const fp = c('f prime is three'), flat = c('tangent is flat'), at1 = c('At x equals one'), m6 = c('minus six'), cd = c('concave down there'), below = c('sits below'), nearby = c('every nearby'), hill = c('hilltop'), p14 = c('one, four') + 10, at3 = c('At x equals three'), six = c('is six'), cu = c('Concave up'), above = c('sits above'), localMin = c('a local minimum'), p30 = c('three, zero') + 10;
	const M = makePlot(C6.x, C6.y, C6.w, C6.h, {x: WX, y: [-2, 6]});
	const A = M.pf(1, 4), Bp = M.pf(3, 0);
	const arrows = (X: number, Y: number, up: boolean, o: number) => {
		if (o <= 0.001) return null;
		return <g opacity={o}>{[X - 0.45, X + 0.45].map(u => {const t = M.pf(u, Y), q = M.pf(u, CUBIC.f(u, {})); const d = up ? -1 : 1; return <g key={u}><line x1={t[0]} y1={t[1]} x2={q[0]} y2={q[1] - d * 6} stroke={INK} strokeWidth={4} /><path d={`M${q[0] - 10},${q[1] - d * 16} L${q[0]},${q[1] - d * 4} L${q[0] + 10},${q[1] - d * 16}`} stroke={INK} strokeWidth={4} fill="none" /></g>;})}</g>;
	};
	return (
		<>
			<SceneHeading text="The second derivative test" at={4} size={56} />
			<FunctionSimulator x={C6.x} y={C6.y} width={C6.w} height={C6.h} window={{x: WX, y: [-2, 6]}} family={CUBIC} timeline={[{frame: 0, x: 2}]} color={INK} at={-60}
				xTicks={[1, 2, 3, 4]} yTicks={[2, 4]} xLabel="x" yLabel="y"
				regions={[{x: [WX[0], 2], color: CAPC, opacity: 0.85, at: -60}, {x: [2, WX[1]], color: CUPC, opacity: 0.85, at: -60}]}
				curves={[{fn: () => 4, domain: [0.35, 1.65], at: at1, color: VIOLET, width: 7}, {fn: () => 0, domain: [2.35, 3.65], at: at3, color: VIOLET, width: 7}]}
				overlay={() => <FrameSvg>
					<Diamond p={M.pf(2, 2)} o={1} r={14} />
					<Ring p={A} r={28} o={prog(f, flat, 12)} />
					<Ring p={Bp} r={28} o={prog(f, flat + 14, 12)} />
					{arrows(1, 4, false, vis(f, nearby, at3, 12))}
					{arrows(3, 0, true, vis(f, above, 2000, 12))}
				</FrameSvg>} />
			<CurveLabel x={A[0] - 150} y={A[1] - 80} at={hill} size={40} color={INK}>local maximum (1, 4)</CurveLabel>
			<CurveLabel x={Bp[0] - 140} y={Bp[1] + 40} at={p30 - 30} size={40} color={INK}>local minimum (3, 0)</CurveLabel>
			<CurveLabel x={M.pf(2, 0)[0] + 20} y={M.pf(0, 2)[1] - 10} at={-60} size={32} color={GREY_INK}>inflection (2, 2)</CurveLabel>
			<HandTag x={A[0] - 150} y={A[1] + 170} text="every nearby point is lower" at={nearby + 6} out={at3} size={38} color={INK} />
			<HandTag x={Bp[0] - 220} y={Bp[1] - 170} text="every nearby point is higher" at={above + 6} size={38} color={INK} />
			{/* column */}
			<BoxCard x={RX} y={156} at={-30} size={44} title="Givens">f(x) = x³ − 6x² + 9x</BoxCard>
			<BoxCard x={RX} y={430} w={740} at={-30} out={at1 - 10} size={40} title="From the tangents">
				<div><Ol>cap</Ol> <CupCapGlyph kind="cap" size={40} />: the curve sits below its tangents</div>
				<div><Bl>cup</Bl> <CupCapGlyph kind="cup" size={40} />: the curve sits above its tangents</div>
				<div style={{color: VIOLET}}>at a flat point, which way is nearby?</div>
			</BoxCard>
			<Line x={RX} y={290} at={fp} size={44}><V>f′(x) = 3(x − 1)(x − 3) = 0</V></Line>
			<Line x={RX} y={350} at={flat} size={44}>flat at x = 1 and x = 3</Line>
			<Line x={RX} y={428} at={at1} size={44}><Bl>f″(1) = −6 &lt; 0</Bl><span style={{opacity: prog(f, cd, 10)}}>: <Ol>cap</Ol> <CupCapGlyph kind="cap" size={40} /></span></Line>
			<Line x={RX} y={490} at={p14 - 20} size={44}>f(1) = 1 − 6 + 9 = 4</Line>
			<Line x={RX} y={568} at={at3} size={44}><Bl>f″(3) = 6 &gt; 0</Bl><span style={{opacity: prog(f, cu, 10)}}>: <Bl>cup</Bl> <CupCapGlyph kind="cup" size={40} /></span></Line>
			<Line x={RX} y={630} at={six + 20} size={44}>f(3) = 27 − 54 + 27 = 0</Line>
			<BoxCard x={RX} y={706} w={740} at={localMin - 10} size={34} border="#1f6fb2">
				<div>f′(c) = 0 and <Bl>f″(c) &lt; 0</Bl>: local max</div>
				<div>f′(c) = 0 and <Bl>f″(c) &gt; 0</Bl>: local min</div>
			</BoxCard>
			<AnswerStack x={RX - 20} y={830} at={p30 - 10} size={40} rows={[{content: 'max (1, 4);  min (3, 0)', at: p30 - 10}, {content: 'inflection (2, 2)', at: p30 - 4}]} />
		</>
	);
};

// ---------- 7. when the test can't decide ----------
const PX = [40, 665, 1290], PW = 590, PHH = 470;
const W7 = {x: [-1.2, 1.2] as [number, number], y: [-1.2, 1.2] as [number, number]};
const FAMS = [{fam: QUART, label: 'y = x⁴'}, {fam: NQUART, label: 'y = −x⁴'}, {fam: CUBE, label: 'y = x³'}] as const;
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const cant = c("can't decide"), look = c('Look at these'), x4 = c('x to the fourth'), nx4 = c('minus x to the fourth'), x3 = c('x cubed'), all3 = c('All three'), yet = c('Yet one'), fall = c('fall back'), m1 = c('goes minus'), p1 = c('then plus'), lmin = c('local minimum'), p2 = c("it's plus"), m2 = c('then minus'), lmax = c('local maximum'), forX3 = c('For x cubed'), sixX = c('six x,'), changes = c('changes sign'), concCh = c('concavity changes'), hpi = c('horizontal point');
	const appear = [x4, nx4, x3];
	return (
		<>
			<SceneHeading text="When the test can't decide" at={4} size={56} />
			{FAMS.map((p, i) => {
				const M = makePlot(PX[i], 150, PW, PHH, W7);
				const O = M.pf(0, 0);
				const tintO = i === 2 ? prog(f, concCh, 14) : 0;
				return (
					<React.Fragment key={i}>
						<div style={{position: 'absolute', left: PX[i] + 10, top: 144, width: PW - 10, height: PHH + 10, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}} />
						<FunctionSimulator x={PX[i]} y={150} width={PW} height={PHH} window={W7} family={p.fam} timeline={[{frame: 0, x: 0}]} color={INK} at={-60} draw={{at: Math.min(appear[i], 40 + i * 20) - 10, dur: 24}}
							xTicks={[-1, 1]} yTicks={[-1, 1]} xLabel="x" yLabel="y"
							regions={i === 2 ? [{x: [-1.2, 0], color: CAPC, opacity: 0.85 * tintO, at: -60}, {x: [0, 1.2], color: CUPC, opacity: 0.85 * tintO, at: -60}] : []}
							curves={[{fn: () => 0, domain: [-0.55, 0.55], at: all3, color: VIOLET, width: 7}]}
							overlay={() => <FrameSvg>{i === 2 ? <Diamond p={O} o={prog(f, hpi, 12)} r={15} /> : <circle cx={O[0]} cy={O[1]} r={11} fill={INK} stroke={CARD} strokeWidth={3} opacity={prog(f, all3, 12)} />}</FrameSvg>} />
						<CurveLabel x={PX[i] + 110} y={170} at={-60} size={40} color={INK}>{p.label}</CurveLabel>
						<CurveLabel x={PX[i] + 110} y={i === 1 ? 490 : 222} at={all3 + 20} size={32} color={GREY_INK}>f′(0) = 0, f″(0) = 0</CurveLabel>
					</React.Fragment>
				);
			})}
			<SignStrip x={PX[0]} y={650} width={PW} windowX={W7.x} at={-30} rowLabel="f′" testLabel="" showTests={false}
				boundaries={[{x: 0, kind: 'zero', note: {text: 'local minimum', at: lmin, color: INK}}]} cells={[{sign: -1, revealAt: m1}, {sign: 1, revealAt: p1}]} />
			<SignStrip x={PX[1]} y={650} width={PW} windowX={W7.x} at={-30} rowLabel="f′" testLabel="" showTests={false}
				boundaries={[{x: 0, kind: 'zero', note: {text: 'local maximum', at: lmax, color: INK}}]} cells={[{sign: 1, revealAt: p2}, {sign: -1, revealAt: m2}]} />
			<SignStrip x={PX[2]} y={650} width={PW} windowX={W7.x} mode="concavity" at={-30} rowLabel="f″" testLabel="" showTests={false}
				boundaries={[{x: 0, kind: 'zero', note: {text: 'concavity changes', at: concCh, color: INK}}]} cells={[{sign: -1, revealAt: changes}, {sign: 1, revealAt: changes + 12}]} />
			<Chip x={96} y={862} at={cant + 10} size={44} color="#b8322a">f″ = 0 at a flat point: no conclusion</Chip>
			<Chip x={980} y={862} at={fall} size={40} color={INK_SOFT}>fall back on the signs either side</Chip>
			<div style={{position: 'absolute', left: PX[2], top: 930, width: PW, textAlign: 'center', opacity: prog(f, hpi, 14)}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK}}>horizontal point of inflection</span></div>
		</>
	);
};

// ---------- 8. memory aid ----------
export const AID_MAIN = 'Positive: cup. Negative: cap.';
export const AID_ZERO = 'Zero: look again (check the signs either side).';
export const FlatIcon: React.FC<{kind: 'cup' | 'cap'; size?: number}> = ({kind, size = 100}) => (
	<svg width={size} height={size} viewBox="0 0 100 100" style={{display: 'block', overflow: 'visible'}}>
		<path d={kind === 'cup' ? 'M14,14 Q14,86 50,86 Q86,86 86,14' : 'M14,86 Q14,14 50,14 Q86,14 86,86'} stroke={kind === 'cup' ? '#1f6fb2' : '#5d6b2a'} strokeWidth={8} fill="none" strokeLinecap="round" />
		<line x1={18} x2={82} y1={kind === 'cup' ? 86 : 14} y2={kind === 'cup' ? 86 : 14} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
		<text x={50} y={kind === 'cup' ? 52 : 64} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: kind === 'cup' ? '#1f6fb2' : '#5d6b2a'}}>{kind === 'cup' ? '+' : '−'}</text>
	</svg>
);
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const pos = c('Positive bends'), neg = c('Negative bends'), cupF = c("A cup's"), capF = c("A cap's"), zero = c('zero means');
	const hl = (g: number) => (g > 0.001 ? `rgba(248,232,200,${0.9 * g})` : undefined);
	return (
		<>
			<TaskStrip text="The short version" at={4} size={52} />
			<div style={{position: 'absolute', left: 120, top: 160, width: 1680, height: 790, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 182, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 168, top: 236, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, lineHeight: 1.05, color: INK, background: hl(vis(f, pos, cupF, 10)), borderRadius: 12}}>{AID_MAIN}</div>
			<div style={{position: 'absolute', left: 168, top: 360, display: 'flex', flexDirection: 'column', gap: 26}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 28, opacity: prog(f, pos, 12)}}>
					<FlatIcon kind="cup" size={110} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.1, background: hl(vis(f, cupF, capF, 10)), borderRadius: 10}}><Bl>positive: bends up, like a cup</Bl><br /><span style={{opacity: prog(f, cupF, 12)}}>flat point = bottom: <b>minimum</b></span></div>
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 28, opacity: prog(f, neg, 12)}}>
					<FlatIcon kind="cap" size={110} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.1, background: hl(vis(f, capF, zero, 10)), borderRadius: 10}}><Ol>negative: bends down, like a cap</Ol><br /><span style={{opacity: prog(f, capF, 12)}}>flat point = top: <b>maximum</b></span></div>
				</div>
			</div>
			<div style={{position: 'absolute', left: 168, top: 820, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color: INK, opacity: prog(f, zero, 12)}}>{AID_ZERO}</div>
			<VaseRig x={1390} y={250} h={480} t={4} tap={false} />
			<div style={{position: 'absolute', left: 1330, top: 744, width: 420, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK}}>the vase: <Ol>cap</Ol>, then <Bl>cup</Bl></div>
		</>
	);
};

