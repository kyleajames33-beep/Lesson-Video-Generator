// Scenes 11 to 13: the strand close (the full slot table), the handoff to tangents and normals (d14 opens on its
// final frame) and the key notes, which cross-fade back to that frame at their end.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, HandTag, KeyNotesBullets, SceneHeading, piTicks, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {cue} from './common';
import {B, COS2, Chip, CurveLabel, Lb, Line, P, RecallChip, Ring, S, SlotRow, T, TEAL, VIOLET, gmap, slotRows, tl} from './parts';

export const AID_MAIN = "Powers multiply by ln a, logs divide by it, and the inside's slope always goes on top.";
export const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: 96, top: 150}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK}}>{AID_MAIN}</span></Enter>
);

// ---------- 11. strand close ----------
export const S11: React.FC = () => {
	const id = 'scene-11';
	const f = useCurrentFrame();
	const two = cue(id, 'keep two factors'), domain = cue(id, 'decide the domain'), mixes = cue(id, 'If a question mixes'), finishes = cue(id, 'That finishes');
	const g = {teal: vis(f, two, two + 150, 12), blue: vis(f, two + 40, two + 190, 12), amber: vis(f, domain, domain + 120, 12)};
	const r = slotRows(g);
	const L = [r.e, r.ln, r.sin, r.cos], R = [r.a, r.log, r.tan];
	return (
		<>
			<SceneHeading text="Every composite: two factors, and the inside's domain" at={4} size={52} />
			<div style={{position: 'absolute', left: 96, top: 170, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>FROM d06</div>
			<div style={{position: 'absolute', left: 990, top: 170, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: INK_SOFT}}>THIS VIDEO</div>
			{L.map((row, i) => <SlotRow key={'l' + i} x={96} y={210 + i * 112} w={850} at={-30 + i * 4} size={44}>{row}</SlotRow>)}
			{R.map((row, i) => <SlotRow key={'r' + i} x={990} y={210 + i * 112} w={850} at={-30 + i * 4} size={44}>{row}</SlotRow>)}
			<HandTag x={1010} y={588} text="teal: the outside's slope at the inside" at={two + 6} size={36} color={TEAL} />
			<HandTag x={1010} y={636} text="blue: the inside's own slope" at={two + 46} size={36} color={'#1f6fb2'} />
			<HandTag x={1010} y={684} text="amber: the inside decides the domain" at={domain + 6} size={36} color={'#7a4600'} />
			<RecallChip x={96} y={680} w={850} at={mixes} size={34}>structure first (d06): the last operation is the outside; product or quotient rule, then these rules inside</RecallChip>
			<Enter at={finishes} style={{position: 'absolute', left: 96, top: 836}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 16, padding: '6px 24px 8px', border: `3px solid ${MATH_STRAND_ACCENT}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>d01 to d13: every function family in this strand</div>
			</Enter>
		</>
	);
};

// ---------- 12. handoff (d14 opens on its final frame) ----------
export const WIN_C = {x: [-0.5, 3.5] as [number, number], y: [-1.5, 1.5] as [number, number]};
/** d14's opening window C: 1040 x 740 at the left. */
export const D14_STAGE = {x: 20, y: 200, w: 1040, h: 740};
const C_TICKS = piTicks(0, 1, 6);
export const C_Stage: React.FC<{drawAt?: number; ringAt?: number; row1At?: number; row2At?: number; chipsAt?: number}> = ({drawAt = -60, ringAt = -60, row1At = -60, row2At = -60, chipsAt = -60}) => {
	const f = useCurrentFrame();
	const Sg = D14_STAGE;
	const M = gmap(Sg.x, Sg.y, Sg.w, Sg.h, WIN_C);
	const p = M.pt(Math.PI / 6, 0.5);
	return (
		<>
			{f >= drawAt ? <FunctionSimulator x={Sg.x} y={Sg.y} width={Sg.w} height={Sg.h} window={WIN_C} family={COS2} timeline={tl([[0, Math.PI / 6]])} color={INK} at={drawAt} draw={{at: drawAt, dur: 36}}
				xTicks={C_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				overlay={() => <FrameSvg>
					<circle cx={p[0]} cy={p[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} opacity={prog(f, ringAt, 12)} />
					<Ring p={p} r={30} o={prog(f, ringAt, 12)} />
				</FrameSvg>} /> : null}
			<CurveLabel x={p[0] + 34} y={p[1] - 64} at={ringAt} size={38} color={INK}>(π/6, ½)</CurveLabel>
			<CurveLabel x={M.pt(2.2, 0)[0]} y={M.pt(0, 1.38)[1]} at={drawAt + 20} size={42} color={INK}>y = cos 2x</CurveLabel>
			<Line x={1100} y={250} at={row1At} size={52}>dy/dx = −<B>2</B> sin <S>2x</S></Line>
			<RecallChip x={1650} y={262} at={row1At + 10} size={30}>d06</RecallChip>
			<Line x={1100} y={350} at={row2At} size={48}>x = π/6:  −2 sin(π/3) = −√3</Line>
			<Line x={1500} y={418} at={row2At + 14} size={36} color={INK_SOFT} weight={600}>≈ −1.732</Line>
			<Chip x={1100} y={520} at={chipsAt} size={46} color={VIOLET}>tangent line?</Chip>
			<Chip x={1100} y={630} at={chipsAt + 12} size={46} color={TEAL}>normal line?</Chip>
			<Chip x={1100} y={790} at={chipsAt + 24} size={40} color={MATH_STRAND_ACCENT}>Next: tangents and normals</Chip>
		</>
	);
};
/** d13's final frame (scene 12 at rest): d14 opens on it. */
export const D13FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: lines from derivatives" at={-300} size={56} />
		<MemoryLine />
		<C_Stage />
	</>
);
export const S12: React.FC = () => {
	const id = 'scene-12';
	const next = cue(id, 'Next'), six = cue(id, 'pi over six'), xb = cue(id, 'two sine two x') + 27, grad = cue(id, 'the gradient there'), angles = cue(id, 'right angles');
	return (
		<>
			<SceneHeading text="Next: lines from derivatives" at={next} size={56} />
			<MemoryLine at={-20} />
			<C_Stage drawAt={next + 4} ringAt={six} row1At={xb} row2At={grad} chipsAt={angles - 20} />
		</>
	);
};

// ---------- 13. key notes ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: '#7a4600'}}>{children}</span>;
	const items = [
		{content: <>(a<P>f(x)</P>)′ = a<P>f(x)</P> × <T>ln a</T> × <B>f′(x)</B></>, at: 10},
		{content: <>(log<Lb>a</Lb> f(x))′ = <B>f′(x)</B> / (f(x) <T>ln a</T>), <Am>f(x) &gt; 0</Am></>, at: 22},
		{content: <>(tan f(x))′ = <T>sec²</T>f(x) × <B>f′(x)</B>, <Am>cos f(x) ≠ 0</Am></>, at: 34},
		{content: <>Example: (3<P>2x</P>)′ = <B>2</B> <T>ln 3</T> × 3<P>2x</P></>, at: 46},
		{content: <>Find the domain from the inside first.</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={226} w={1030} items={items} size={40} gap={70} />
				<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 560, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.1, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{opacity: prog(f, 96, 12), marginTop: 22, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.4}}>
							<div>a<P>x</P> = e<P>x ln a</P></div>
							<div>log<Lb>a</Lb> x = ln x / ln a</div>
							<div style={{marginTop: 10, color: TEAL}}>drone: spot speed = sec²(tilt) × tilt rate</div>
						</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D13FinalFrame /></div> : null}
		</>
	);
};
