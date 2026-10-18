/**
 * P03 plates. README for Claude:
 * - HAVE_P03 lists plate files that exist in public/assets/chemistry/. A plate not in HAVE_P03 is NOT in ASSETS and its
 *   scene draws the dashed stand-in (Stand, P01 parts).
 * - Brief 64 (delivered 18 Oct): the 48-well plate on a black card and on a white tile (6 rows x 8 columns, one
 *   2048 x 1365 canvas each) and the blank-label dropper bottle. The design asked for one plate file
 *   (p03-well-plate-v1.png); the two delivered backgrounds are used instead (black card by default, white tile for
 *   the "white on white" beat). The optional tilted dropper bottle and angled plate were not delivered and are not
 *   needed.
 * - Well centres (WELL_X, WELL_Y) were measured 18 Oct from the black plate (centroid of each dark well interior,
 *   PIL); they agree with the brief 64 provenance grid within 8 px. Both canvases share the grid, so both plates are
 *   drawn with the same canvas transform. Inner well radius about 56 px.
 * - Shared with P01: clear dropper, safety glasses, gloves, waste bottle (P01 assets). Reused: C13 rack set (AgCl,
 *   PbI2, settled solid under clear liquid), graduated pipette, saturated beaker (handoff chip).
 */
import {mk} from '../chem-m5-p01/assets';
import type {PDef} from '../chem-m5-p01/assets';
export {DROPPER, GLASSES, GLOVES, WASTE} from '../chem-m5-p01/assets';
import {DROPPER, GLASSES, GLOVES, WASTE} from '../chem-m5-p01/assets';
export type {PDef};

export const PLATE_NAT: [number, number] = [2048, 1365];
export const PLATE_BLACK = mk('p03-well-plate-black-card-v1.png', PLATE_NAT, [266, 139, 1793, 1237]);
export const PLATE_WHITE = mk('p03-well-plate-white-tile-v1.png', PLATE_NAT, [272, 170, 1777, 1211]);
export const WELL_X = [491, 644, 792, 946, 1097, 1251, 1402, 1554];
export const WELL_Y = [346, 489, 632, 776, 918, 1061];
export const WELL_R = 54;
export const DBOTTLE = mk('p03-dropper-bottle-v1.png', [2000, 2000], [746, 219, 1254, 1760]);
export const AGCL = mk('m5x-ppt-agcl-white-v1.png', [2000, 2000], [569, 200, 1432, 1800]);
export const PBI2 = mk('m5x-ppt-pbi2-yellow-v1.png', [2000, 2000], [568, 200, 1431, 1799]);
export const PIPETTE = mk('m5x-graduated-pipette-v1.png', [2000, 2000], [160, 178, 1840, 1822]);
export const SATB = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);

const LIST: PDef[] = [PLATE_BLACK, PLATE_WHITE, DBOTTLE, AGCL, PBI2, PIPETTE, SATB, DROPPER, GLASSES, GLOVES, WASTE];
export const HAVE_P03 = new Set<string>(LIST.map(p => p.src));
export const have = (p: PDef) => HAVE_P03.has(p.src);
export const ASSETS: string[] = LIST.map(p => p.src).filter(a => HAVE_P03.has(a));
