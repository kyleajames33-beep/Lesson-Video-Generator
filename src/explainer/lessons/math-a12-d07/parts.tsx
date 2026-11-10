// Lesson parts for math-a12-d07 (Revision 3), built on the maths studio kit (src/explainer/math/studio).
// The deck anchor is painted (brief 235 three-quarter and top-down deck plates, the top-down one exactly 2:1);
// the growth strips are coded areas on the plate's own scale (kit AreaStrips), never a stretched plate.
// Generic helpers are shared from math-a12-d06/parts (same builder, same house style).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {AreaStrips, PlateImg, usePlatePreload} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';
import {BLUE, DISPLAY, TEAL, VIOLET} from '../math-a12-d06/parts';

export {
	AMB, Am, AttemptStage, BLUE, Bl, Chip, CurveLabel, DISPLAY, Dot, EXSIN, Frac, HANDOFF_STAGE, HANDOFF_WIN, HandNote, LabelledRow, NumberLine, PreRing, RecallChip, Slot, Sup, TEAL, TanLine, Te, VIOLET, gmap,
} from '../math-a12-d06/parts';
export type {GMap} from '../math-a12-d06/parts';

const M = 'assets/maths/';
/** Brief 235 deck plates (manifest native size and alpha box; the top view's outer edge is exactly 2:1). */
export const DECK: PlateSpec = {src: M + 'ma12-timber-deck-v1.png', nat: [1772, 992], box: [151, 275, 1630, 732]};
export const DECK_TOP: PlateSpec = {src: M + 'ma12-timber-deck-top-v1.png', nat: [1704, 923], box: [144, 107, 1560, 815]};
export const DECK_PLATES = [DECK, DECK_TOP];
export const deckH = (w: number) => (w * (DECK.box[3] - DECK.box[1])) / (DECK.box[2] - DECK.box[0]);

export const DeckImg: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => {
	usePlatePreload([DECK.src]);
	return <PlateImg plate={DECK} x={x} y={y} w={w} opacity={opacity} />;
};

/**
 * The top-down deck (4 m by 2 m) on its own scale with coded growth strips: the plate's outer edge is fitted
 * to the 4 x 2 rectangle at native aspect (AreaStrips derives the unit from the plate). (x, y) is the deck's
 * bottom-left corner; w is the plate's outer-edge width (4 m).
 */
export const DeckTop: React.FC<{x: number; y: number; w: number; dl: number; dw: number; at?: number; out?: number; stripsAt?: number}> = ({x, y, w, dl, dw, at = -30, out, stripsAt}) => (
	<AreaStrips x={x} y={y} u={4} v={2} du={dl} dv={dw} roles={{u: 'b', v: 'a', corner: 'inner'}} at={at} out={out} stripsAt={stripsAt}
		plate={{spec: DECK_TOP, region: DECK_TOP.box, u0: 4, v0: 2, w}} />
);

/** Colour key along the top right. */
export const Legend: React.FC<{at?: number; items?: [string, string][]}> = ({at = -30, items}) => {
	const f = useCurrentFrame();
	const list = items ?? [[TEAL, 'u: first factor'], [BLUE, 'v: second factor'], [VIOLET, 'gradient']];
	return (
		<div style={{position: 'absolute', right: 96, top: 26, opacity: prog(f, at, 14), display: 'flex', gap: 30}}>
			{list.map(([c, t]) => <span key={t} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: c}}>{t}</span>)}
		</div>
	);
};

/** Question-card picture: a plain rectangle (not to scale) with its two factors as sides; roles off until feedback. */
export const RectPic: React.FC<{w?: number; h?: number; across: React.ReactNode; up: React.ReactNode; inside?: React.ReactNode; roles?: boolean; strips?: boolean; extra?: React.ReactNode}> = ({w = 720, h = 380, across, up, inside, roles = false, strips = false, extra}) => {
	const rx = 170, ry = 60, rw = 380, rh = 200;
	return (
		<div style={{position: 'relative', width: w, height: h, background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
			<svg width={w} height={h} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				{strips ? <>
					<rect x={rx + rw} y={ry} width={60} height={rh} fill="#d6eeee" stroke="#1f8a8f" strokeWidth={4} />
					<rect x={rx} y={ry - 50} width={rw} height={50} fill="#dceaf7" stroke={BLUE} strokeWidth={4} />
				</> : null}
				<rect x={rx} y={ry} width={rw} height={rh} fill="#efe7d8" stroke={INK} strokeWidth={5} />
			</svg>
			<div style={{position: 'absolute', left: rx, width: rw, top: ry + rh + 12, textAlign: 'center', ...DISPLAY(48, roles ? TEAL : INK)}}>{across}</div>
			<div style={{position: 'absolute', right: w - rx + 18, top: ry + rh / 2 - 30, ...DISPLAY(48, roles ? BLUE : INK)}}>{up}</div>
			{inside ? <div style={{position: 'absolute', left: rx, width: rw, top: ry + rh / 2 - 26, textAlign: 'center', ...DISPLAY(40, INK, 700)}}>{inside}</div> : null}
			<div style={{position: 'absolute', right: 18, bottom: 12, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK_SOFT}}>not to scale</div>
			{extra}
		</div>
	);
};

// ---------- function families ----------
export const EXLN: FnFamily = {f: u => Math.exp(u) * Math.log(u), df: u => Math.exp(u) * (Math.log(u) + 1 / u), domain: [{from: 0, to: Infinity}]};
export const X3SIN2: FnFamily = {f: u => u ** 3 * Math.sin(2 * u), df: u => 3 * u * u * Math.sin(2 * u) + 2 * u ** 3 * Math.cos(2 * u)};
export const XEMX: FnFamily = {f: u => u * Math.exp(-u), df: u => Math.exp(-u) * (1 - u)};
export const EXQ: FnFamily = {f: u => Math.exp(u) / (u + 1), df: u => (Math.exp(u) * u) / ((u + 1) ** 2), excluded: [-1]};
export const PI = Math.PI;
export {FONT_DISPLAY};
