/**
 * M6 C11 plates. README for Claude:
 * - pH meter (C04 set): two whole plates (C07 FullMeter, amber readouts) in the hook and scene 4; the handoff chip.
 * - Beaker (C01 set, empty glass, coded pale liquid via C05 LiquidBeaker): scene 2, under the lens.
 * - Graduated pipette with filler (m5x set, 2000 px, measured 20 Oct, alpha > 20): box 160,178..1840,1822. It leans 45.7
 *   degrees: tip at natural 170,1822, top of the filler at about 1810,224 (axis length about 2290 px). GradPip rotates it
 *   about its tip to stand upright (never stretched). It replaces the design's coded dropper icon (owner rule: real
 *   objects get painted plates); 1.0 mL from a graduated pipette is also how the addition would really be made.
 * - Ammonia bottle (C01 set): attempt 1 card corner, coded label lines (C08 BottleLabel).
 * - Red blood cells (biology m5x set, 2000 px): box 304,331..1750,1689, five painted cells, no person.
 * - Lungs (biology m8 set, 2000 px): box 201,160..1797,1839, lungs with trachea and bronchi, no person or face.
 */
import {AMMONIA, BEAKER, mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {PHMETER} from '../chem-m6-c04/assets';
import {BEAKER_LIQ} from '../chem-m6-c05/assets';

export {AMMONIA, BEAKER, BEAKER_LIQ, PHMETER};
export type {PDef};
const bio = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: 'assets/biology/' + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
export const GRADPIP = mk('m5x-graduated-pipette-v1.png', [2000, 2000], [160, 178, 1840, 1822]);
export const GP_G = {tip: [170, 1822] as [number, number], top: [1810, 224] as [number, number]};
export const RBC = bio('m5x-red-blood-cells-v1.png', [2000, 2000], [304, 331, 1750, 1689]);
export const LUNGS = bio('m8-lungs-healthy-v1.png', [2000, 2000], [201, 160, 1797, 1839]);
const LIST: PDef[] = [PHMETER, BEAKER, GRADPIP, AMMONIA, RBC, LUNGS];
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))];
