// Scenes 14 and 15: the handoff (the smooth join's gradient: rising on the curved side, fixed on the straight
// side; d16 opens on the final frame, exported as D15FinalFrame) and the key notes, which cross-fade back to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FunctionSimulator, FrameSvg, HandTag, KeyNotesBullets, SceneHeading, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {cue} from './common';
import {Am, Chip, CurveLabel, G_J, GREY_INK, SMOOTH, V, VIOLET, WIN_J, gmap, stubLine} from './parts';
import {AID_MAIN, BoardBadge} from './s4';

// ---------- the handoff picture (parametric in its cue frames; D15FinalFrame shows it complete) ----------
/** The six stubs: x, gradient, readout label. x = 1.25 and 1.5 stand in for the design's 1.5 and 2 (y = 3 is off the window). */
export const HANDOFF_STUBS = [
	{x: -0.5, m: -1, label: '−1', xl: '−½'},
	{x: 0, m: 0, label: '0', xl: '0'},
	{x: 0.5, m: 1, label: '1', xl: '½'},
	{x: 1, m: 2, label: '2', xl: '1'},
	{x: 1.25, m: 2, label: '2', xl: '1.25'},
	{x: 1.5, m: 2, label: '2', xl: '1.5'},
] as const;
export const HANDOFF_RX = 880;
export type HandoffTimes = {stubs: readonly number[]; rising: number; fixed: number; bends: number; bendsOut: number; lineNot: number; chip: number; heading: number; glowLine: number};
export const HandoffPicture: React.FC<{t: HandoffTimes; f: number}> = ({t, f}) => {
	const M = gmap(G_J.x, G_J.y, G_J.w, G_J.h, WIN_J);
	const bendO = vis(f, t.bends, t.bendsOut, 12);
	const left = (() => {const q: string[] = []; for (let i = 0; i <= 120; i++) {const x = -0.5 + (1.5 * i) / 120; const P = M.pt(x, x * x); q.push(`${i ? 'L' : 'M'}${P[0].toFixed(1)},${P[1].toFixed(1)}`);} return q.join(' ');})();
	const RX = HANDOFF_RX;
	const colW = 140;
	return (
		<>
			<FunctionSimulator x={G_J.x} y={G_J.y} width={G_J.w} height={G_J.h} window={WIN_J} family={SMOOTH} timeline={[{frame: 0, x: 1}]} color={INK} at={-60}
				xTicks={[1, 2]} yTicks={[1, 2]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg>
					{bendO > 0.001 ? <path d={left} stroke="#e7e0f2" strokeWidth={26} fill="none" strokeLinecap="round" opacity={bendO} /> : null}
					{HANDOFF_STUBS.map((s, i) => {
						const o = prog(f, t.stubs[i], 12);
						if (o <= 0.001) return null;
						const P = M.pt(s.x, SMOOTH.f(s.x, {}));
						return <g key={i} opacity={o}>
							<line {...stubLine(M, s.x, SMOOTH.f(s.x, {}), s.m, 0, 82)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />
							<circle cx={P[0]} cy={P[1]} r={9} fill={VIOLET} stroke={CARD} strokeWidth={3} />
						</g>;
					})}
				</FrameSvg>} />
			{HANDOFF_STUBS.map((s, i) => {
				const P = M.pt(s.x, SMOOTH.f(s.x, {}));
				const dx = i < 3 ? -18 : 26, dy = i < 3 ? 26 : -12;
				return <CurveLabel key={i} x={P[0] + dx} y={P[1] + dy} at={t.stubs[i]} size={36} color={VIOLET} anchor={i < 3 ? 'end' : 'start'}>{s.label}</CurveLabel>;
			})}
			<CurveLabel x={M.pt(-0.42, 0)[0]} y={M.pt(0, 2.42)[1]} at={-60} size={40} color={INK}>x², then 2x − 1</CurveLabel>
			{/* the gradient table */}
			<Enter at={t.heading} style={{position: 'absolute', left: RX, top: 236}}>
				<div style={{background: CARD, borderRadius: 20, padding: '10px 26px 14px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>GRADIENT ALONG THE JOIN</div>
					<div style={{display: 'flex', alignItems: 'baseline', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>
						<div style={{width: 180}}>x</div>
						{HANDOFF_STUBS.map((s, i) => <div key={i} style={{width: colW, textAlign: 'center'}}>{s.xl}</div>)}
					</div>
					<div style={{display: 'flex', alignItems: 'baseline', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: VIOLET, borderTop: '2px solid #ede4d3'}}>
						<div style={{width: 180, fontSize: 36}}>gradient</div>
						{HANDOFF_STUBS.map((s, i) => <div key={i} style={{width: colW, textAlign: 'center', opacity: prog(f, t.stubs[i], 12)}}>{s.label}</div>)}
					</div>
				</div>
			</Enter>
			<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible'}}>
				<g opacity={prog(f, t.rising, 14)}>
					<line x1={RX + 220} x2={RX + 26 + 180 + 3 * colW - 20} y1={448} y2={448} stroke={GREY_INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M${RX + 26 + 180 + 3 * colW - 38},${436} L${RX + 26 + 180 + 3 * colW - 20},${448} L${RX + 26 + 180 + 3 * colW - 38},${460}`} stroke={GREY_INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				</g>
				<g opacity={prog(f, t.fixed, 14)}>
					<line x1={RX + 26 + 180 + 3 * colW + 20} x2={RX + 26 + 180 + 6 * colW - 20} y1={448} y2={448} stroke={GREY_INK} strokeWidth={5} strokeLinecap="round" />
				</g>
			</svg>
			<HandTag x={RX + 26 + 180 + 1.5 * colW} y={492} text="rising" at={t.rising} size={42} color={GREY_INK} anchor="middle" />
			<HandTag x={RX + 26 + 180 + 4.5 * colW} y={492} text="fixed" at={t.fixed} size={42} color={GREY_INK} anchor="middle" />
			<div style={{position: 'absolute', left: RX, top: 580, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.45}}>
				<div style={{opacity: prog(f, t.bends, 12)}}>curved side: the gradient <V>keeps changing</V></div>
				<div style={{opacity: prog(f, t.lineNot, 12)}}>straight side: the gradient <V>stays at 2</V></div>
			</div>
			<Chip x={RX} y={780} at={t.chip} size={48} color={MATH_STRAND_ACCENT}>how is the gradient changing?</Chip>
		</>
	);
};
const FINAL_T: HandoffTimes = {stubs: [-60, -60, -60, -60, -60, -60], rising: -60, fixed: -60, bends: -60, bendsOut: -40, lineNot: -60, chip: -60, heading: -60, glowLine: -60};
const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: HANDOFF_RX, top: 160}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>Meet, then match: <Am>no step</Am>, <V>no kink</V>.</span></Enter>
);
/** d15's final frame (d16 opens on it). */
export const D15FinalFrame: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: how the gradient changes" at={-300} size={56} />
			<MemoryLine />
			<HandoffPicture t={FINAL_T} f={Math.max(f, 0) + 10000} />
		</>
	);
};

// ---------- 14. handoff ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const t: HandoffTimes = {
		stubs: [c('minus one') + 10, c('then zero') + 6, c('then one') + 16, c('gradient two') + 10, c('stays at two') + 16, c('stays at two') + 26],
		rising: c('rising'), fixed: c('stays at two') + 30, bends: c('curve bends') + 6, bendsOut: c('Next') + 30, lineNot: c("line doesn't"), chip: c('a curve') - 10, heading: 6, glowLine: 0,
	};
	return (
		<>
			<SceneHeading text="Back to the smooth join" at={4} size={56} out={c('Next')} />
			<SceneHeading text="Next: how the gradient changes" at={c('Next') + 6} size={56} />
			<MemoryLine at={-30} />
			<HandoffPicture t={t} f={f} />
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const id = 'scene-15';
	const f = useCurrentFrame();
	const items = [
		{content: <>Differentiable at a: (f(a + h) − f(a))/h settles on <V>one finite value</V>, from both sides.</>, at: 10},
		{content: <>Then there is one <V>non-vertical tangent</V> at (a, f(a)).</>, at: 22},
		{content: <>Differentiable ⇒ continuous. Not the reverse.</>, at: 34},
		{content: <>Continuous, not differentiable: a corner, a cusp, a vertical tangent.</>, at: 46},
		{content: <>At a join: <Am>meet</Am> (values), then <V>match</V> (gradients).</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={226} w={1030} items={items} size={38} gap={46} />
				<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 680, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{marginTop: 14, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: INK, lineHeight: 1.4}}>
							<div><Am>meet:</Am> no step (continuous)</div>
							<div><V>match:</V> no kink (differentiable)</div>
						</div>
						<div style={{marginTop: 16, opacity: prog(f, 96, 12)}}><BoardBadge w={480} /></div>
						<div style={{marginTop: 4, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>Meeting alone isn't enough.</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D15FinalFrame /></div> : null}
		</>
	);
};
