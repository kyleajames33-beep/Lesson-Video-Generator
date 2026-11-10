// Scenes 13 and 14: the handoff (f, f′ and f″ stacked on one x scale with their tints, guides and marks; d17 opens on
// the final frame, exported as D16FinalFrame) and the key notes, which cross-fade back to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, HandTag, KeyNotesBullets, SceneHeading, StudioStackedDerivativePanels, concavityCells, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {cue} from './common';
import {Bl, CUBIC, Chip, Ol, V, VaseRig, f1, f2} from './parts';
import {AID_MAIN, AID_ZERO, FlatIcon} from './s3';

const WX: [number, number] = [-0.3, 4.3];
const CAP_CUP = concavityCells(WX, [2], [1, 3], f2);
const UP_DOWN = concavityCells(WX, [1, 3], [0, 2, 4], f1);
export type StackTimes = {draw: number; f1Tint: number; f2Tint: number; ring13: number; ring2: number; glow13: [number, number]; glow2: [number, number]; chip: number};
const ST = {x: 40, y: 170, w: 1320, ph: [260, 230, 210] as [number, number, number]};
export const Stack: React.FC<{t: StackTimes}> = ({t}) => (
	<>
		<StudioStackedDerivativePanels x={ST.x} y={ST.y} width={ST.w} panelHeight={ST.ph} gap={10} windowX={WX} xTicks={[1, 2, 3, 4]} at={t.draw}
			panels={[
				{fn: x => CUBIC.f(x, {}), y: [-2, 6], yTicks: [2, 4], label: 'f(x)', tints: {cells: CAP_CUP, kind: 'concavity', at: t.draw}},
				{fn: f1, y: [-4, 12], yTicks: [-3, 3, 9], label: 'f′(x)', tints: {cells: UP_DOWN, kind: 'gradient', at: t.f1Tint}},
				{fn: f2, y: [-15, 15], yTicks: [-12, 12], label: 'f″(x)', tints: {cells: CAP_CUP, kind: 'concavity', at: t.f2Tint}},
			]}
			columns={[{x: 1, at: t.draw, glow: t.glow13}, {x: 2, at: t.draw, glow: t.glow2}, {x: 3, at: t.draw, glow: t.glow13}]}
			rings={[{panel: 1, x: 1, at: t.ring13}, {panel: 1, x: 3, at: t.ring13 + 8}, {panel: 2, x: 2, at: t.ring2}]}
			markers={[{panel: 0, X: 1, at: t.draw, label: 'max'}, {panel: 0, X: 2, at: t.draw, shape: 'diamond', label: 'inflection'}, {panel: 0, X: 3, at: t.draw, label: 'min'}]} />
	</>
);
const SideNotes: React.FC<{t: StackTimes}> = ({t}) => {
	const f = useCurrentFrame();
	const row = (top: number, head: React.ReactNode, body: React.ReactNode, o = 1) => (
		<div style={{position: 'absolute', left: 1400, top, width: 480, opacity: o}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>{head}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK, lineHeight: 1.25}}>{body}</div>
		</div>
	);
	return (
		<>
			{row(250, 'f: the curve', <>max (1, 4), inflection (2, 2), min (3, 0)</>, prog(f, t.draw, 12))}
			{row(500, <V>f′: the gradient</V>, <>+ rising, − falling; zeros at 1 and 3: the turning points</>, prog(f, t.f1Tint, 12))}
			{row(720, <Bl>f″: the bend</Bl>, <><Ol>− cap</Ol>, <Bl>+ cup</Bl>; changes sign at 2: the inflection</>, prog(f, t.f2Tint, 12))}
		</>
	);
};
const StackMemory: React.FC = () => <div style={{position: 'absolute', left: 1400, top: 150, width: 480, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK, lineHeight: 1.15}}>{AID_MAIN} Zero: look again.</div>;
const FINAL: StackTimes = {draw: -60, f1Tint: -60, f2Tint: -60, ring13: -60, ring2: -60, glow13: [-60, -40], glow2: [-60, -40], chip: -60};
/** d16's final frame (d17 opens on it). */
export const D16FinalFrame: React.FC = () => (
	<>
		<SceneHeading text="Next: sketch a whole curve" at={-300} size={56} />
		<Stack t={FINAL} />
		<SideNotes t={FINAL} />
		<StackMemory />
		<Chip x={1100} y={78} at={-60} size={40} color={MATH_STRAND_ACCENT}>Next: sketch a curve from f, f′ and f″</Chip>
	</>
);

// ---------- 13. handoff ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const c = (p: string, n = 1) => cue(id, p, n);
	const t: StackTimes = {draw: 0, f1Tint: c('rises,'), f2Tint: c('bends.'), ring13: c('zero at one'), ring2: c('changes sign'), glow13: [c('zero at one'), c('changes sign')], glow2: [c('changes sign'), c('Next:')], chip: c('Next:')};
	return (
		<>
			<SceneHeading text="Three graphs that work together" at={4} size={56} out={t.chip} />
			<SceneHeading text="Next: sketch a whole curve" at={t.chip + 6} size={56} />
			<Stack t={t} />
			<SideNotes t={t} />
			<StackMemory />
			<Chip x={1100} y={78} at={t.chip + 10} size={40} color={MATH_STRAND_ACCENT}>Next: sketch a curve from f, f′ and f″</Chip>
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const items = [
		{content: <><Bl>f″(x) = d²y/dx² = y″</Bl>: the derivative of <V>f′(x)</V>.</>, at: 10},
		{content: <><Bl>f″ &gt; 0</Bl>: concave up (a cup). <Bl>f″ &lt; 0</Bl>: concave down (a cap).</>, at: 22},
		{content: <>Inflection: the concavity changes. f″ = 0 is only a candidate.</>, at: 34},
		{content: <>Check that f″ changes sign either side.</>, at: 46},
		{content: <>At f′(c) = 0: f″(c) &lt; 0 max; f″(c) &gt; 0 min; f″(c) = 0, check the signs.</>, at: 58},
	];
	const back = prog(f, 1350 - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={cue(id, 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={110} y={226} w={1030} items={items} size={38} gap={46} />
				<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 690, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 14}}><FlatIcon kind="cup" size={70} /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK}}>a cup's flat point: <b>minimum</b></span></div>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 10}}><FlatIcon kind="cap" size={70} /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK}}>a cap's flat point: <b>maximum</b></span></div>
						<div style={{marginTop: 18, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK, lineHeight: 1.1}}>{AID_ZERO}</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D16FinalFrame /></div> : null}
		</>
	);
};
