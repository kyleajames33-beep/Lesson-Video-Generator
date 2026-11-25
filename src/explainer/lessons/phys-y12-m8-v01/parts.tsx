// Lesson parts for phys-y12-m8-v01: the Module 8 colour roles (design "Colour key (Revision 2)" with root rule R1),
// number formats for the live readouts, the photon pair event and v16's parts re-exported.
// Colour key: photons amber packets (labelled γ; their reddening is a drawn cue for less energy, tagged once); protons rose
// discs; neutrons grey discs; electrons navy; antiparticles hollow rings of their particle's colour; quarks teal;
// temperature red; thresholds and binding energies slate; time grey; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {TONES} from '../../shared/tokens';
import {Packet} from '../../physics/light/photo';
import {Particle} from '../../physics/light/massenergy';
import {ATOM_PLATES, Anti} from '../../physics/atom/universe';
import {AMBER, GREY, Givens, INK, Lbl, MASS, NAVY, NEUTRON, ORANGE, ROSE, SLATE, Shrunk, Strip, TEAL, V16_PLATES, VArrow, fx, sci} from '../phys-y12-m7-v16/parts';

export {AMBER, GREY, Givens, INK, Lbl, MASS, NAVY, NEUTRON, ORANGE, ROSE, SLATE, Shrunk, Strip, TEAL, VArrow, fx, sci};
export const RED = TONES.red;
/** The cooled photon colour (reddened, drawn cue for less energy) and the 3000 K glow (true orange). */
export const COOL = '#c4582f', GLOW = '#e8a15a';
export const V01_PLATES = [...new Set([...V16_PLATES, ...ATOM_PLATES])];

/** Energy in MeV as a readout: MeV, keV or eV with two significant figures. */
export const eFmt = (mev: number) => {
	const two = (v: number) => (v >= 100 ? fx(Math.round(v / 10) * 10) : v >= 10 ? fx(v) : v >= 1 ? fx(v, 1) : fx(v, 2));
	if (mev >= 1) return `${two(mev)} MeV`;
	if (mev >= 1e-3) return `${two(mev * 1e3)} keV`;
	return `${two(mev * 1e6)} eV`;
};
/** Time in seconds as a readout (s, min, years). */
export const tFmt = (s: number) => {
	if (s < 1) return `${sci(s, 0)} s`;
	if (s < 120) return `${fx(s)} s`;
	if (s < 7200) return `${fx(s / 60)} min`;
	const yr = s / 3.156e7;
	if (yr < 1) return `${fx(s / 86400)} days`;
	return yr < 1e6 ? `${(Math.round(yr / 1000) * 1000).toLocaleString('en-AU').replace(/,/g, ' ')} years` : `${sci(yr, 1)} years`;
};

/** Two γ packets converging on (x, y) from ±(gap + 60) px; after `emerge` (0 to 1) an e⁻ and a hollow e⁺ leave downwards. */
export const PairEvent: React.FC<{x: number; y: number; gap: number; emerge?: number; color?: string; len?: number; size?: number; r?: number; opacity?: number; through?: boolean}> = ({x, y, gap, emerge = 0, color = AMBER.stroke, len = 90, size = 34, r = 32, opacity = 1, through = false}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<Packet x={x - 60 - gap} y={y} deg={0} len={len} color={color} label="γ" size={size} />
		<Packet x={x + 60 + gap} y={y} deg={180} len={len} color={color} label="γ" size={size} />
		{!through && emerge > 0.001 ? <g>
			<Particle x={x - 50 - 90 * emerge} y={y + 110} r={r} color={NAVY.stroke} text="e⁻" opacity={emerge} />
			<Anti x={x + 50 + 90 * emerge} y={y + 110} r={r} color={ROSE.stroke} text="e⁺" opacity={emerge} />
		</g> : null}
	</g>
));
