// Lesson parts for phys-y12-m8-v13: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// guitar and its top-string anchors (brief 193), small pattern icons, the probe slice geometry and v12's parts
// re-exported.
// Colour key: the Bohr orbit dashed ink with grey labels; electron waves navy; single detections navy dots; probability
// clouds and orbitals teal (opacity = probability per volume); the probe and its readouts teal; energy levels and the
// guitar's standing waves amber; the nucleus a small red disc; protons red "p", neutrons grey "n"; answers in dark-ink
// frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import type {LightSpec} from '../../physics/light/plates';
import {placeOf} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {DECAY_PLATES} from '../../physics/atom/decay';
import {NEUTRON, NUC_RED} from '../phys-y12-m8-v09/parts';
import {AMBER, Elec, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, Nucleus, ORANGE, RED, ROSE, Shrunk, Strip, TEAL, Tube, V12_PLATES, fx, sci, tubeAt, tubeH} from '../phys-y12-m8-v12/parts';

export {AMBER, Elec, GREEN_C, GREY, Givens, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, Nucleus, ORANGE, RED, ROSE, Shrunk, Strip, TEAL, Tube, fx, sci, tubeAt, tubeH};
/** The painted guitar (1983 x 793; visible box from the studio plate table). Top string: nut (398, 349) to saddle
 *  (1595, 342) native pixels (work/brief193/guitar-string-anchors.json). */
export const GUITAR: LightSpec = {src: 'assets/physics/phys-y11-guitar-v1.png', W: 1983, H: 793, box: [73, 34, 1912, 765]};
export const GUITAR_NUT = [398, 349] as const, GUITAR_SADDLE = [1595, 342] as const;
export const guitarAt = (p: Place, a: readonly [number, number]) => placeOf(GUITAR, p).at(a[0], a[1]);
export const V13_PLATES = [...new Set([...V12_PLATES, GUITAR.src, ...DECAY_PLATES])];
export const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
export {LPlate as Plate};

/** A small allowed-pattern icon: a teal disc with k - 1 dashed node rings (k = 1, 2, 3). */
export const PatternIcon: React.FC<{x: number; y: number; r: number; k: number; opacity?: number}> = ({x, y, r, k, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={TEAL.soft} stroke={TEAL.stroke} strokeWidth={3} />
		{Array.from({length: k - 1}, (_, i) => <circle key={i} cx={x} cy={y} r={(r * (i + 1)) / k} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} strokeDasharray="6 5" />)}
		<circle cx={x} cy={y} r={5} fill={NUC_RED} />
	</g>
));
/** A two-column table row in HTML (left Bohr, right Schrödinger). */
export const cellStyle = (size: number, color: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, lineHeight: 1.15});
