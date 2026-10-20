/**
 * M6 C12 plates. README for Claude:
 * - Alpha boxes (PIL, alpha > 20) measured 20 Oct from the real files.
 * - Burette on clamp stand (2048 px): box 739,164..1309,1883. The glass tube is x 1117..1172 (inside about 1124..1165)
 *   from y 200 to 1190; the coded fill (navy) is clipped to that. Zero mark at about y 260; 50 mL taken at y 1180.
 *   The stem narrows from y 1200 to the tip at 1145,1556. No hand on the tap anywhere.
 * - Conical flask (2048 px, empty): box 466,164..1583,1884; neck rim 786..1262 at y 250 (centre u 0.50).
 * - Phenolphthalein clip pair (2048 x 1700, aligned, colourless and faint pink): box 561,139..1484,1562, the same flask
 *   shape as the conical flask plate (box aspect 0.649 for both), so the empty flask, then the colourless and pink
 *   flasks crossfade at one place.
 * - White tile (2048 px): box 164,374..1884,1674, a tile in perspective (centre about 1025,1024).
 * - Volumetric pipette with filler and volumetric flask: the C07 plates and geometry.
 * - Vinegar bottle (C01 set, plain label): hook and scene 7, with a coded label beside it.
 * - pH meter (C04 set): hook only (C07 FullMeter with an amber readout).
 */
import {VINEGAR, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {FLASK, FLASK_G, PHMETER, PIPETTE, PIPETTE_G} from '../chem-m6-c07/assets';

export {VINEGAR, FLASK, FLASK_G, PHMETER, PIPETTE, PIPETTE_G};
export type {PDef};
const N4 = [2048, 2048] as [number, number];
export const BURETTE = mk('m6-burette-clamp-stand-v1.png', N4, [739, 164, 1309, 1883]);
export const BUR_G = {tube: [1124, 1165] as [number, number], top: 200, zero: 260, v50: 1180, bottom: 1190, stem: [1137, 1153] as [number, number], tip: [1145, 1556] as [number, number]};
export const CFLASK = mk('m6-conical-flask-v1.png', N4, [466, 164, 1583, 1884]);
const CLIP_B: [number, number, number, number] = [561, 139, 1484, 1562];
export const PHTH = {clear: mk('m6-clip-phenolphthalein-colourless-v1.png', [2048, 1700], CLIP_B), pink: mk('m6-clip-phenolphthalein-pink-v1.png', [2048, 1700], CLIP_B)};
export const TILE = mk('m6-white-tile-v1.png', N4, [164, 374, 1884, 1674]);
const LIST: PDef[] = [VINEGAR, PHMETER, BURETTE, CFLASK, PHTH.clear, PHTH.pink, TILE, PIPETTE, FLASK];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
