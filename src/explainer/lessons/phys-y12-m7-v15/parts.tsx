// Lesson parts for phys-y12-m7-v15: the colour roles (design colour key, Revision 2, with root rule R1), the momentum
// against speed plot box and v14's parts re-exported.
// Colour key: momentum amber; speed teal; classical predictions grey dashed; γ violet; the c asymptote red dashed;
// Earth-frame time ink; force orange; magnetic field slate; answers in dark-ink frames; mistakes slate (root rule R1).
import {TONES} from '../../shared/tokens';
import {AMBER, GREY, Givens, INK, Lbl, NAVY, ORANGE, Ruler, SLATE, Shrunk, Strip, TEAL, V14_PLATES, VArrow, VIOLET, fx, sci} from '../phys-y12-m7-v14/parts';
import {SUN} from '../../physics/light/plates';

export {AMBER, GREY, Givens, INK, Lbl, NAVY, ORANGE, Ruler, SLATE, Shrunk, Strip, TEAL, VArrow, VIOLET, fx, sci};
export const RED = TONES.red;
export const V15_PLATES = [...new Set([...V14_PLATES, SUN.src])];
/** Momentum (units of m₀c) against v/c for the plots: p = γv. */
export const pOfB = (b: number) => b / Math.sqrt(1 - b * b);
