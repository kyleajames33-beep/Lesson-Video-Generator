/**
 * M6 C07 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files.
 * - pH meter (C04 set, 2048 px): the hook and scene 7 reuse the C05 cropped meter body with a coded probe (METER_CROP);
 *   FullMeter shows the whole plate with an amber readout on its screen (corners in METER_G, natural px).
 * - Beaker (C01 set, empty glass): coded pale liquid inside it (BEAKER_LIQ, from C05).
 * - Volumetric pipette with filler (2048 px), box 739,164..1309,1884. The pipette leans: its tip sits at natural
 *   758,1871 and its axis runs up to about 1045,700 (13.8 degrees off vertical, top to the right). The glass bulb is
 *   at about 950,1100. Rotating the plate by -13.8 degrees about the tip stands it upright (no stretching).
 * - Volumetric flask (2048 px), box 683,164..1365,1884. The stopper sits above natural y 335, so the flask is shown
 *   cropped from y 335 (open neck) when liquid is poured in. Neck x 949..1098 (inner about 962..1086), calibration
 *   ring about y 790, bulb widest 684..1363 at y 1600, inner floor about y 1850. FLASK_IN is the inner outline.
 */
import {AMMONIA, BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BEAKER_LIQ, METER_CROP, METER_G} from '../chem-m6-c05/assets';
import {PHMETER} from '../chem-m6-c04/assets';

export {AMMONIA, BEAKER, BEAKER_LIQ, METER_CROP, METER_G, PHMETER};
export type {PDef};
const N4 = [2048, 2048] as [number, number];
export const PIPETTE = mk('m6-volumetric-pipette-filler-v1.png', N4, [739, 164, 1309, 1884]);
export const PIPETTE_G = {tip: [758, 1871] as [number, number], tilt: -13.8, bulb: [950, 1100] as [number, number]};
export const FLASK = mk('m6-volumetric-flask-v1.png', N4, [683, 164, 1365, 1884]);
export const FLASK_G = {cropTop: 335, ring: 790, neck: [962, 1086] as [number, number], floor: 1850};
/** Inner outline of the flask (natural px), neck top to floor, used to clip the coded liquid. */
export const FLASK_IN: [number, number][] = [
	[962, 340], [962, 1050], [953, 1100], [933, 1150], [899, 1200], [857, 1250], [814, 1300], [777, 1350], [747, 1400], [724, 1450], [708, 1500], [699, 1550], [698, 1600],
	[704, 1650], [719, 1700], [745, 1750], [784, 1800], [830, 1846], [1217, 1846], [1262, 1800], [1302, 1750], [1328, 1700], [1343, 1650], [1349, 1600], [1348, 1550], [1340, 1500],
	[1324, 1450], [1302, 1400], [1271, 1350], [1235, 1300], [1192, 1250], [1149, 1200], [1116, 1150], [1095, 1100], [1086, 1050], [1086, 340],
];
const LIST: PDef[] = [BEAKER, PHMETER, PIPETTE, FLASK];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
void AMMONIA;
