// Scenes 13 and 14: the handoff (x² at 1 and its tangent, then the invisible join and the corner; d15 opens on the
// final frame) and the key notes, which cross-fade back to that frame at their end.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, HandTag, KeyNotesBullets, SceneHeading, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import {cue} from './common';
import {AnswerBox, BLUE, Chip, CurveLabel, Line, RecallChip, Ring, TEAL, Tl, V, VIOLET, gmap, tl} from './parts';
import {AID_MAIN, CarBadge} from './s3';

export const AID_LINE = 'Point from f, slope from f′. For the normal, flip and change the sign, unless the tangent is flat.';
const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: 96, top: 150}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK}}>{AID_LINE}</span></Enter>
);

const W13 = {x: [-1, 2.2] as [number, number], y: [-1, 2.2] as [number, number]};
/** Join curves: x² up to x = 1, then a line through (1, 1) with gradient 2 − s (s = 0: 2x − 1; s = 1: x). */
const joinFam = (s: number): FnFamily => ({
	f: u => (u <= 1 ? u * u : 1 + (2 - s) * (u - 1)),
	df: u => (u <= 1 ? 2 * u : 2 - s),
});
const SQR: FnFamily = {f: u => u * u, df: u => 2 * u};

// ---------- the final frame (d15 opens on it) ----------
const PANEL_L = {x: 150, y: 276, w: 686, h: 680};
const PANEL_R = {x: 1084, y: 276, w: 686, h: 680};
const JoinPanel: React.FC<{p: typeof PANEL_L; s: number; label: React.ReactNode; at?: number}> = ({p, s, label, at = -60}) => {
	const M = gmap(p.x, p.y, p.w, p.h, W13);
	const R = M.pt(1, 1);
	return (
		<>
			<div style={{position: 'absolute', left: p.x + 16, top: p.y - 6, width: p.w - 10, height: p.h + 6, background: CARD, borderRadius: 22, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}} />
			<FunctionSimulator x={p.x} y={p.y} width={p.w} height={p.h} window={W13} family={joinFam(s)} timeline={tl([[0, 1]])} color={BLUE} at={at}
				xTicks={[1, 2]} yTicks={[1, 2]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Ring p={R} r={26} /></FrameSvg>} />
			<CurveLabel x={M.pt(0.15, 0)[0]} y={M.pt(0, -0.45)[1]} at={at} size={38} color={BLUE}>{label}</CurveLabel>
		</>
	);
};
const FINAL_CHIP = {x: 744, y: 206};
export const D14FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: a tangent at a join?" at={-300} size={56} />
		<MemoryLine />
		<JoinPanel p={PANEL_L} s={0} label="x², then 2x − 1" />
		<JoinPanel p={PANEL_R} s={1} label="x², then x" />
		<Chip x={FINAL_CHIP.x} y={FINAL_CHIP.y} at={-60} size={44} color={MATH_STRAND_ACCENT}>a tangent at the join?</Chip>
	</>
);

// ---------- 13. handoff ----------
const G13 = {x: 40, y: 160, w: 826, h: 820};
const CX = 900;
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const pt = cue(id, 'the point is one'), grad = cue(id, 'the gradient is two'), one = cue(id, 'two x minus one') + 35, carries = cue(id, 'carries on'), invisible = cue(id, 'is invisible') + 6;
	const sw = cue(id, 'switch the second'), corner = cue(id, 'a corner') + 2, both = cue(id, 'Both joins'), next = cue(id, 'So, next');
	const M = gmap(G13.x, G13.y, G13.w, G13.h, W13);
	const R = M.pt(1, 1);
	const split = prog(f, next + 10, 26);
	const joined = f >= carries;
	const s = prog(f, sw + 10, 30);
	const stubO = vis(f, corner, next + 10, 12);
	const stub = (m: number, dir: number, len = 150) => {const vx = M.sx * dir, vy = -m * M.sy * dir, l = Math.hypot(vx, vy); return `M${R[0]},${R[1]} L${R[0] + (vx / l) * len},${R[1] + (vy / l) * len}`;};
	return (
		<>
			<SceneHeading text="One more tangent, for next time" at={4} size={56} out={next} />
			<SceneHeading text="Next: a tangent at a join?" at={next + 6} size={56} />
			<MemoryLine at={-30} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - split}}>
				<FunctionSimulator x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} family={joined ? joinFam(s) : SQR} timeline={tl([[0, 1]])} color={BLUE} at={-30} draw={{at: 0, dur: 30}}
					xTicks={[1, 2]} yTicks={[1, 2]} xLabel="x" yLabel="y"
					zoom={{cx: 1650, cy: 790, r: 120, factor: 6, at: invisible, out: sw}}
					curves={[
						{fn: X => 2 * X - 1, at: one, out: carries + 30, color: VIOLET, width: 6},
						{fn: X => X * X, at: carries, domain: [1, 2.2], dash: '12 10'},
						{fn: X => 2 * X - 1, at: sw + 10, domain: [1, 2.2], dash: '12 10'},
					]}
					overlay={() => <FrameSvg>
						<Ring p={R} r={26} o={prog(f, pt, 12)} />
						<g opacity={stubO}>
							<path d={stub(2, -1)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />
							<path d={stub(1, 1)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />
							<path d={`M${R[0] - 12},${R[1] - 28} L${R[0]},${R[1] - 4} L${R[0] + 14},${R[1] - 26}`} stroke={INK} strokeWidth={4} fill="none" />
						</g>
					</FrameSvg>} />
				<CurveLabel x={M.pt(-0.95, 0)[0]} y={M.pt(0, 2.1)[1]} at={-30} out={carries} size={42} color={BLUE}>y = x²</CurveLabel>
				<CurveLabel x={M.pt(1.12, 0)[0]} y={M.pt(0, 1.0)[1] + 10} at={pt} out={carries} size={36} color={INK}>(1, 1)</CurveLabel>
				<CurveLabel x={M.pt(0.15, 0)[0]} y={M.pt(0, -0.45)[1]} at={carries + 10} out={sw} size={38} color={BLUE}>x², then 2x − 1</CurveLabel>
				<CurveLabel x={M.pt(0.15, 0)[0]} y={M.pt(0, -0.45)[1]} at={sw + 30} size={38} color={BLUE}>x², then x</CurveLabel>
				<CurveLabel x={R[0] - 230} y={R[1] - 150} at={corner + 10} size={34} color={VIOLET}>gradient 2</CurveLabel>
				<CurveLabel x={R[0] + 70} y={R[1] - 140} at={corner + 16} size={34} color={VIOLET}>gradient 1</CurveLabel>
				{/* the rule card from the first frame, then the rows */}
				<div style={{position: 'absolute', left: CX, top: 222, opacity: prog(f, 6, 14)}}>
					<div style={{background: CARD, borderRadius: 20, padding: '10px 26px 12px', boxShadow: CARD_SHADOW, border: `3px solid ${VIOLET}`, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, lineHeight: 1.3}}>
						<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>TANGENT AT x = a</div>
						<div>point (a, f(a)) from f,  gradient <V>f′(a)</V> from f′</div>
						<div>y − f(a) = <V>f′(a)</V>(x − a)</div>
					</div>
				</div>
				<Line x={CX} y={436} at={6} size={50}>Find the tangent to y = x² at x = 1.</Line>
				<Line x={CX} y={506} at={pt} size={46}>point (1, 1);<span style={{opacity: prog(f, grad, 12)}}>  gradient <V>2 × 1 = 2</V></span></Line>
				<AnswerBox x={CX} y={566} at={one} size={46}><span>tangent:  y − 1 = <V>2</V>(x − 1), so y = 2x − 1</span></AnswerBox>
				<Chip x={CX} y={666} at={carries} out={sw + 20} size={40} color={BLUE}>x² for x ≤ 1, then 2x − 1 for x &gt; 1</Chip>
				<Chip x={CX} y={666} at={sw + 30} size={40} color={BLUE}>x² for x ≤ 1, then x for x &gt; 1</Chip>
				<HandTag x={1500} y={790} text="no visible bend" at={invisible + 10} out={sw} size={40} color={INK} anchor="end" />
				<HandTag x={CX} y={784} text="a corner: gradient 2 meets gradient 1" at={corner + 10} size={40} color={VIOLET} />
				<RecallChip x={CX} y={836} at={both} size={36}>both joins unbroken at (1, 1)</RecallChip>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: split}}>
				{split > 0 ? <>
					<JoinPanel p={PANEL_L} s={0} label="x², then 2x − 1" />
					<JoinPanel p={PANEL_R} s={1} label="x², then x" />
				</> : null}
			</div>
			<Chip x={FINAL_CHIP.x} y={FINAL_CHIP.y} at={next + 20} size={44} color={MATH_STRAND_ACCENT}>a tangent at the join?</Chip>
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const items = [
		{content: <>Point from f: (a, f(a)). Gradient from f′: <V>m = f′(a)</V>.</>, at: 10},
		{content: <>Tangent: y − f(a) = <V>m</V>(x − a).</>, at: 22},
		{content: <>Normal gradient: <Tl>−1/m</Tl>, when m ≠ 0.</>, at: 34},
		{content: <>Flat tangent y = f(a); its normal is <Tl>x = a</Tl>.</>, at: 46},
		{content: <>Keep exact values; trig values in radians.</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={226} w={1030} items={items} size={38} gap={58} />
				<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 640, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{marginTop: 16, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK, lineHeight: 1.35}}>
							<div><Tl>Normal:</Tl> flip and change the sign (m ≠ 0).</div>
							<div>Flat tangent: upright normal, <Tl>x = a</Tl>.</div>
						</div>
						<div style={{marginTop: 20, opacity: prog(f, 96, 12)}}><CarBadge w={190} /></div>
						<div style={{marginTop: 8, opacity: prog(f, 96, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, lineHeight: 1.15}}>
							<span style={{color: VIOLET}}>headlights: tangent;</span> <span style={{color: TEAL}}>straight across: normal</span>
						</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D14FinalFrame /></div> : null}
		</>
	);
};

