// Scenes 13 and 14: the handoff to the remaining composites (d13 opens on its final frame) and the key notes,
// which cross-fade back to that frame at their end.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, HandTag, InnerSlot, KeyNotesBullets, Pow, SceneHeading, MATH_STRAND_ACCENT} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import {cue} from './common';
import {AMB, BLUE, Chip, CurveLabel, Ring, VIOLET, gmap, tl} from './parts';

export const AID_MAIN = 'Swap each name for its co-partner, and add a minus.';
const LN3 = Math.log(3);
export const EXP32: FnFamily = {f: u => 3 ** (2 * u), df: u => 2 * LN3 * 3 ** (2 * u)};
export const WIN_E = {x: [-1.5, 1.2] as [number, number], y: [-1, 10] as [number, number]};
/** d13's opening window E: the plot that d13 continues on. */
export const D13_STAGE = {x: 20, y: 200, w: 1040, h: 740};
export const E_XTICKS = [-1, 1];
export const E_YTICKS = [2, 4, 6, 8, 10];

/** The three composites still to come, each inside in a dashed grey slot. */
export const COMPOSITES: React.ReactNode[] = [
	<>3<Pow><InnerSlot>2x</InnerSlot></Pow></>,
	<>log<span style={{fontSize: '0.62em', position: 'relative', top: '0.32em'}}>3</span>(<InnerSlot>x² + 1</InnerSlot>)</>,
	<>tan(<InnerSlot>e<Pow>x</Pow></InnerSlot>)</>,
];
export const MemoryLine: React.FC<{at?: number}> = ({at = -60}) => (
	<Enter at={at} style={{position: 'absolute', left: 96, top: 150}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>{AID_MAIN}</span></Enter>
);
/** Window E with y = 3^(2x) in ink, the ring at (0, 1), the three chips, "gradient ?" and the Next chip. */
export const E_Stage: React.FC<{drawAt?: number; ringAt?: number; chipsAt?: number; keepAt?: number}> = ({drawAt = -60, ringAt = -60, chipsAt = -60, keepAt = -60}) => {
	const f = useCurrentFrame();
	const S = D13_STAGE;
	const M = gmap(S.x, S.y, S.w, S.h, WIN_E);
	const r = M.pt(0, 1);
	return (
		<>
			{f >= drawAt ? <FunctionSimulator x={S.x} y={S.y} width={S.w} height={S.h} window={WIN_E} family={EXP32} timeline={tl([[0, 0]])} color={INK} at={drawAt} draw={{at: drawAt, dur: 36}}
				xTicks={E_XTICKS} yTicks={E_YTICKS} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Ring p={r} r={30} o={prog(f, ringAt, 12)} /></FrameSvg>} /> : null}
			<CurveLabel x={M.pt(-1.25, 0)[0]} y={M.pt(0, 6.2)[1]} at={drawAt + 20} size={46} color={INK}>y = 3<sup style={{fontSize: '0.62em'}}>2x</sup></CurveLabel>
			<Chip x={300} y={r[1] - 150} at={keepAt} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			{COMPOSITES.map((c, i) => <Chip key={i} x={1180} y={250 + i * 170} at={chipsAt + i * 14} size={66}>{c}</Chip>)}
			<Chip x={1180} y={790} at={keepAt + 10} size={38} color={MATH_STRAND_ACCENT}>Next: the remaining composites</Chip>
		</>
	);
};
/** d12's final frame (scene 13 at rest): d13 opens on it. */
export const D12FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: three more composites" at={-300} size={56} />
		<MemoryLine />
		<E_Stage />
	</>
);

// ---------- 13. handoff ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const next = cue(id, 'Next'), here = cue(id, "Here's y equals"), slope = cue(id, "What's its slope");
	const f = useCurrentFrame();
	const rows: [React.ReactNode, React.ReactNode][] = [
		[<>(sec x)′ = sec x tan x</>, 'cos x ≠ 0'],
		[<>(cosec x)′ = −cosec x cot x</>, 'sin x ≠ 0'],
		[<>(cot x)′ = −cosec²x</>, 'sin x ≠ 0'],
	];
	return (
		<>
			<SceneHeading text={f < next ? 'One over g, or the quotient rule' : 'Next: three more composites'} at={f < next ? 4 : next} size={56} />
			<MemoryLine at={-20} />
			<Enter at={8} out={next - 8} style={{position: 'absolute', left: 0, right: 0, top: 300, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: CARD, borderRadius: 22, padding: '22px 44px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
					{rows.map(([a, b], i) => (
						<div key={i} style={{display: 'flex', alignItems: 'baseline', gap: 40, marginTop: i ? 18 : 0}}>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: INK, width: 820, whiteSpace: 'pre'}}>{a}</span>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: '#7a4600', border: `4px solid ${AMB}`, borderRadius: 14, padding: '0 16px'}}>{b}</span>
						</div>
					))}
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT, marginTop: 18}}>from one over g, or the quotient rule; each keeps its function's domain</div>
				</div>
			</Enter>
			<E_Stage drawAt={here} ringAt={here + 30} chipsAt={next + 6} keepAt={slope} />
			<HandTag x={1180} y={210} text="the insides: dashed slots" at={next + 50} size={36} color={INK_SOFT} />
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: '#7a4600'}}>{children}</span>;
	const items = [
		{content: <>d/dx(1/g) = −g′/g², not 1/g′</>, at: 10},
		{content: <>d/dx(sec x) = sec x tan x, <Am>cos x ≠ 0</Am></>, at: 22},
		{content: <>d/dx(cosec x) = −cosec x cot x, <Am>sin x ≠ 0</Am></>, at: 34},
		{content: <>d/dx(cot x) = −cosec²x, <Am>sin x ≠ 0</Am></>, at: 46},
		{content: <>x in radians; write each domain with the answer.</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={226} w={1030} items={items} size={40} gap={70} />
				<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 640, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{opacity: prog(f, 96, 12), marginTop: 22, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK, lineHeight: 1.35}}>
							<div>partners: sin and cos,</div><div>tan and cot, sec and cosec</div>
							<div>inside π/2 − x has derivative <span style={{color: BLUE}}>−1</span></div>
							<div style={{marginTop: 12, color: VIOLET}}>tower: x from overhead,<br />π/2 − x from the horizon</div>
						</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D12FinalFrame /></div> : null}
		</>
	);
};
