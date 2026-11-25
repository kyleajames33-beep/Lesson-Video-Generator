// Lesson parts for phys-y12-m8-v20: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// linac tunnel and cloud chamber with their anchors, charge formats, the evidence test card, the opening frame's carried
// parts and v19's parts re-exported.
// Colour key: protons rose-red discs; neutrons grey discs; electrons and the probe navy; positrons hollow rose rings;
// neutrinos small grey dots; up quarks amber, down quarks teal (dashed boundary tagged "model"); field crosses navy;
// observation panels on a pale grey card "schematic, not data"; evidence ticks green; answers in dark-ink frames;
// mistakes slate (R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CARD, CARD_SHADOW, TONES} from '../../shared/tokens';
import type {LightSpec} from '../../physics/light/plates';
import {OPAL_PLATE} from '../phys-y12-m8-v18/parts';
import {AMBER, Arrow, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, RED, ROSE, SLATE, Shrunk, Strip, T, TEAL, V19_PLATES, fx, sci} from '../phys-y12-m8-v19/parts';

export {AMBER, Arrow, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, OPAL_PLATE, RED, ROSE, SLATE, Shrunk, Strip, T, TEAL, fx, sci};
/** The painted linac tunnel (1774 x 887; visible box from the alpha channel, threshold 20, 26 November 2026). Beam pipe
 *  anchors read from the native pixels the same day: near end (1690, 470), vanishing point (345, 488). */
export const LINAC: LightSpec = {src: 'assets/physics/y12p-linac-tunnel-v1.png', W: 1774, H: 887, box: [33, 21, 1750, 872]};
export const LINAC_AT = {near: [1690, 470], far: [345, 488]} as const;
/** The painted Wilson cloud chamber (1448 x 1086; visible box measured the same day). Glass top centre (720, 165). */
export const CLOUD: LightSpec = {src: 'assets/physics/y12p-cloud-chamber-v1.png', W: 1448, H: 1086, box: [426, 146, 1033, 957]};
export const CLOUD_AT = {glass: [720, 165]} as const;
export const V20_PLATES = [...new Set([...V19_PLATES, LINAC.src, CLOUD.src, OPAL_PLATE.src])];
export const UP = TONES.amber, DOWN = TONES.teal, LEP = {ink: NAVY.ink, stroke: NAVY.stroke, soft: '#dbe2ee'}, NU = TONES.grey;
/** A charge in thirds of e as a signed fraction: +⅔, −⅓, +1, 0, +2. */
export const fr3 = (v: number) => {
	const n = Math.round(v * 3), s = n < 0 ? '−' : '+', a = Math.abs(n);
	if (a === 0) return '0';
	return a % 3 === 0 ? `${s}${a / 3}` : `${s}${a === 1 ? '⅓' : a === 2 ? '⅔' : `${a}/3`}`;
};

// ---------------------------------------------------------------- the opening frame's carried parts (v19's final frame)
/** v19's enlarged proton (centre and radius) and the probe electron with its dashed aim line. */
export const BIGP = {x: 1390, y: 560, r: 230} as const;
/** The far-left gold-foil thumbnail (as v19 drew it): straight alpha tracks and one large-angle return. */
export const FoilThumb: React.FC<{hi?: number; x?: number; y?: number; s?: number}> = ({hi = 1, x = 0, y = 0, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={96} y={230} width={420} height={270} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<line x1={330} y1={250} x2={330} y2={480} stroke="#c9a34a" strokeWidth={10} />
		<circle cx={330} cy={380} r={9} fill={NUC_RED} />
		{[280, 320, 440].map(yy => <line key={yy} x1={120} y1={yy} x2={490} y2={yy} stroke={AMBER.stroke} strokeWidth={3} />)}
		<path d="M120,376 L300,376 Q322,376 300,350 L170,300" fill="none" stroke={hi > 0 ? RED.stroke : AMBER.stroke} strokeWidth={3 + 3 * hi} />
	</g>
);
/** The enlarged proton with "?" (outline width w). */
export const BigProton: React.FC<{x?: number; y?: number; r?: number; w?: number; q?: boolean; opacity?: number}> = ({x = BIGP.x, y = BIGP.y, r = BIGP.r, w = 4, q = true, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={NUC_RED} stroke={INK} strokeWidth={w} />
		{q ? <text x={x} y={y + r * 0.25} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: Math.max(26, r * 0.8), fill: '#ffffff'}}>?</text> : null}
	</g>
));
/** v19's probe electron and its dashed aim line (fully drawn). */
export const ProbeAim: React.FC<{opacity?: number}> = ({opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={900} cy={300} r={14} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} /><line x1={920} y1={310} x2={1190} y2={450} stroke={NAVY.stroke} strokeWidth={5} strokeDasharray="12 8" /></g>
));

// ---------------------------------------------------------------- the evidence test card
const TickRow: React.FC<{text: string; o: number; size: number}> = ({text, o, size}) => (o <= 0.001 ? null : (
	<span style={{opacity: o, color: GREEN_C.ink, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, marginRight: 22, whiteSpace: 'nowrap'}}>✓ {text}</span>
));
const Box: React.FC<{size: number; q: number; tick: number}> = ({size, q, tick}) => (
	<span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, marginRight: size * 0.35, border: `${Math.max(3, size / 14)}px solid ${INK}`, borderRadius: 6, background: CARD, flex: 'none', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.8, color: tick > 0.5 ? GREEN_C.ink : INK}}>{tick > 0.5 ? '✓' : q > 0.5 ? '?' : ''}</span>
);
/** The evidence test card: "Fundamental? → no parts, no size" with two boxes. `big` is the centre card (scene 2);
 *  otherwise the compact card at the top right (scenes 3 to 8). rows: reveal of the two rows; q: boxes show "?";
 *  sc and pat: the "parts inside?" box's ticks (scattering, patterns). */
export const TestCard: React.FC<{x: number; y: number; big?: boolean; rows?: number; q?: number; sc?: number; pat?: number; opacity?: number; w?: number}> = ({x, y, big = false, rows = 1, q = 1, sc = 0, pat = 0, opacity = 1, w}) => {
	if (opacity <= 0.001) return null;
	const s = big ? 1 : 0.6, title = big ? 52 : 30, row = big ? 42 : 28, box = big ? 54 : 32;
	const tick = Math.max(sc, pat);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w ?? (big ? 900 : 470), opacity, background: CARD, border: `4px solid ${INK}`, borderRadius: 20 * s, boxShadow: CARD_SHADOW, padding: big ? '24px 36px 28px' : '10px 18px 14px'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: title, color: INK}}>Fundamental? <span style={{fontWeight: 700, fontSize: Math.max(26, title * 0.8)}}>→ no parts, no size</span></div>
			<div style={{opacity: rows, marginTop: big ? 22 : 8}}>
				<div style={{display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: row, color: INK}}><Box size={box} q={q} tick={tick} />parts inside?</div>
				<div style={{marginLeft: box * 1.35, minHeight: big ? 8 : 6}}><TickRow text="scattering" o={sc} size={row - 2} /><TickRow text="patterns" o={pat} size={row - 2} /></div>
				<div style={{display: 'flex', alignItems: 'center', marginTop: big ? 18 : 6, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: row, color: INK}}><Box size={box} q={q} tick={0} />size and shape?</div>
			</div>
		</div>
	);
};
/** The compact card's place (scenes 3 to 8). */
export const CARD_AT = {x: 1390, y: 168} as const;

/** A slate pen bracket and similar marks reuse the studio HandTag; this helper fades a group in on a cue. */
export const useIn = (at: number, d = 14) => prog(useCurrentFrame(), at, d);
export const HAND = FONT_HAND;
