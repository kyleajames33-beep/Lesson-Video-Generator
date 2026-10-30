/**
 * M8 B01 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 30 Oct from the real files in public/assets/biology/.
 * - New (brief 111): the oil-column heater with its thermostat dial and sensor grille, the skeletal muscle section, and
 *   the aligned vessel-tear pair (platelets early, then the plug; same 2000 px canvas, drawn on their union box so the
 *   cross-fade is in place).
 * - Reused: the skin cross-section (receptor slot, cropped by a uniform zoom, never stretched), the thermometer, the
 *   sagittal brain (hypothalamus above the pituitary stalk) and the pancreas.
 * - Coded: the loop ring, heat arrows, signal pulses, arteriole walls, the abstract enzyme, the graphs, chips and cards.
 *   No people, hands, faces or body outlines.
 */
import type {PB} from '../bio-m5-b07/shared';

type Box = [number, number, number, number];
const B = 'assets/biology/';
const N2: [number, number] = [2000, 2000];
const mk = (src: string, box: Box, nat: [number, number] = N2): PB => ({src, nat, box});
const TEAR: Box = [220, 679, 1780, 1320];

export const PLATES = {
	skin: mk(B + 'm8-skin-cross-section-v1.png', [160, 176, 1840, 1824]),
	thermo: mk(B + 'm8-thermometer-v1.png', [160, 468, 1840, 1532]),
	brain: mk(B + 'b3a2-brain-v1.png', [180, 190, 1620, 1409], [1800, 1600]),
	pancreas: mk(B + 'm8-pancreas-v1.png', [160, 574, 1840, 1424]),
	heater: mk(B + 'm8-heater-thermostat-v1.png', [405, 221, 1594, 1780]),
	muscle: mk(B + 'm8-skeletal-muscle-v1.png', [220, 588, 1780, 1411]),
	tearEarly: mk(B + 'm8-vessel-tear-platelets-early-v1.png', TEAR),
	tearPlug: mk(B + 'm8-vessel-tear-plug-v1.png', TEAR),
};
/** Natural-pixel anchors read from gridded views (30 Oct). */
export const FEAT = {
	/** Thermometer: bulb centre and the top of the painted column (the column runs along this axis). */
	bulb: [200, 1466] as [number, number],
	colTop: [1414, 757] as [number, number],
	/** Heater: dial centre, sensor grille centre, the control panel, the fin bank centre. */
	dial: [1400, 710] as [number, number],
	grille: [1395, 950] as [number, number],
	panel: [1440, 1180] as [number, number],
	fins: [880, 880] as [number, number],
	/** Skin: a free nerve ending in the upper dermis (thermoreceptor), the top surface line. */
	nerve: [560, 640] as [number, number],
	skinTop: 450,
	/** Brain: the hypothalamus, just above the pituitary stalk. */
	hypo: [800, 860] as [number, number],
	/** Vessel tear: the platelets at the tear. */
	tear: [900, 1040] as [number, number],
};
export const ASSETS_M8B01: string[] = Array.from(new Set(Object.values(PLATES).map(p => p.src)));
