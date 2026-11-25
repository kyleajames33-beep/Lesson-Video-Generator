// Lesson parts for phys-y12-m8-v22: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// linac tunnel, dipole magnet and CMS-style detector, the detector layer colours, power-of-ten formats and v21's parts
// re-exported.
// Colour key: protons rose dots; electrons navy dots; photons amber; muons navy with a long track; neutrinos grey dashed;
// electric field arrows amber; magnets and B readouts navy; energy and momentum readouts slate; detector layers: tracker
// pale grey, EM calorimeter green, hadron calorimeter orange, muon chambers blue-grey; answers in dark-ink frames;
// mistakes slate (R1).
import type {LightSpec} from '../../physics/light/plates';
import {LINAC} from '../phys-y12-m8-v20/parts';
import {AMBER, Arrow, CMS, DOWN, GOLD, GREEN_C, GREY, INK, LEP, Lbl, NAVY, NU, ROSE, SLATE, Shrunk, Strip, SUN, T, UP, WZ, fx, sci} from '../phys-y12-m8-v21/parts';
import {Givens} from '../phys-y12-m8-v19/parts';

export {AMBER, Arrow, CMS, DOWN, GOLD, GREEN_C, GREY, Givens, INK, LEP, LINAC, Lbl, NAVY, NU, ROSE, SLATE, Shrunk, Strip, SUN, T, UP, WZ, fx, sci};
/** The painted dipole magnet (1774 x 887; visible box from the alpha channel, threshold 20, 26 November 2026). The near
 *  end's two beam pipes centre on native (380, 445) and (560, 445). */
export const DIPOLE: LightSpec = {src: 'assets/physics/y12p-dipole-magnet-v1.png', W: 1774, H: 887, box: [160, 59, 1617, 838]};
export const DIPOLE_AT = {pipeL: [380, 445], pipeR: [560, 445]} as const;
export const V22_PLATES = [LINAC.src, DIPOLE.src, CMS.src];
export const PROTON = '#c4587a';
export const LAYER = {tracker: '#e4e1da', ecal: '#bfe0c6', hcal: '#f3cfa4', muon: '#c3ccd6'} as const;
export const LAYER_INK = {tracker: '#6b6358', ecal: '#287347', hcal: '#a8421c', muon: '#3e5472'} as const;
const SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
/** "10⁻¹⁸" style power of ten. */
export const p10 = (e: number) => `10${String(e).replace('-', '⁻').replace(/[0-9]/g, c => SUPS[+c])}`;
