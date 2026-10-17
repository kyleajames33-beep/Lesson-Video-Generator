/**
 * P02 plates. README for Claude:
 * - HAVE_P lists plate files that exist in public/assets/. A plate not in HAVE_P is NOT in ASSETS (the slim bundler
 *   fails on missing files) and its scene draws the fallback instead.
 * - Painted and used (brief 38): the colourimeter, the five standard cuvettes and the unknown; the C3 iron tube pair
 *   (hook); the B6a magnifier (hook); the vinegar bottle (handoff chip).
 * - Painted and used (brief 53, delivered 16 Oct, wired 17 Oct): blank cuvette, Fe3+ and SCN- bottles (coded label
 *   text on the painted label), graduated pipette (drawn rotated so the tube is horizontal, coded liquid on top),
 *   10 mL volumetric flask (coded liquid multiplied over the glass), empty colourimeter (the painted standard or blank
 *   cuvette stands in the slot). The old fallbacks stay in parts.tsx in case a plate is withdrawn from HAVE_P.
 * - Everything else (beam cutaway, calibration graph, read guides, dilution working, ICE table, builder, grids, chain
 *   strip, results table) is abstract and coded.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (src: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 16 Oct
export const COLOURIMETER = mk(A + 'm5x-colourimeter-v1.png', [2000, 2000], [208, 201, 1793, 1800]);
export const CUV = [1, 2, 3, 4, 5].map(i => mk(A + `m5x-cuvette-${i}-v1.png`, [2000, 2000], [790, 201, 1210, 1799]));
export const CUV_UNKNOWN = mk(A + 'm5x-cuvette-unknown-v1.png', [2000, 2000], [790, 201, 1210, 1799]);
export const IRON_START = A + 'c3-iron-tube-start-v1.png';
export const IRON_DEEP = A + 'c3-iron-tube-deep-v1.png';
export const MAGNIFIER = mk('assets/biology/b6a-magnifier-v1.png', [2105, 2066], [396, 354, 1742, 1621]);
export const VINEGAR = mk(A + 'm5x-vinegar-bottle-v1.png', [2000, 2000], [763, 200, 1237, 1800]);
export const FLASK = mk(A + 'c5-flask-clear-v1.png', [1200, 1600], [217, 162, 981, 1437]);
// brief 53: alpha boxes (PIL, alpha > 20) measured 17 Oct
export const CUV_BLANK = mk(A + 'm5x-cuvette-blank-v1.png', [2000, 2000], [791, 200, 1210, 1799]);
export const BOTTLE_FE = mk(A + 'm5x-bottle-fe-v1.png', [2000, 2000], [613, 160, 1387, 1840]);
export const BOTTLE_SCN = mk(A + 'm5x-bottle-scn-v1.png', [2000, 2000], [608, 160, 1391, 1840]);
/** Diagonal plate (filler top right, tip bottom left). Tube axis x = -1.0982 y + 2144.9 (native); the tip on the axis
 *  is at (156.2, 1810.9); 2310 px from the filler's far end to the tip; the glass tube runs from 620 px to the tip. */
export const PIPETTE = mk(A + 'm5x-graduated-pipette-v1.png', [2000, 2000], [160, 178, 1840, 1822]);
export const PIPETTE_AXIS = {tip: [156.2, 1810.9] as [number, number], angle: 137.68, len: 2310, tubeFrom: 620, halfT: 30};
/** Neck 0.19 to 0.62 of the visible height (bore about 0.17 of the width), calibration mark at 0.421, bulb widest at 0.88. */
export const VOL_FLASK = mk(A + 'm5x-volumetric-flask-10ml-v1.png', [2000, 2000], [742, 160, 1258, 1840]);
export const COLOURIMETER_EMPTY = mk(A + 'm5x-colourimeter-empty-v1.png', [2000, 2000], [207, 199, 1794, 1801]);

const ALL: string[] = [COLOURIMETER, ...CUV, CUV_UNKNOWN, MAGNIFIER, VINEGAR, FLASK, CUV_BLANK, BOTTLE_FE, BOTTLE_SCN, PIPETTE, VOL_FLASK, COLOURIMETER_EMPTY].map(p => p.src).concat([IRON_START, IRON_DEEP]);
export const HAVE_P = new Set<string>([COLOURIMETER, ...CUV, CUV_UNKNOWN, MAGNIFIER, VINEGAR, FLASK, CUV_BLANK, BOTTLE_FE, BOTTLE_SCN, PIPETTE, VOL_FLASK, COLOURIMETER_EMPTY].map(p => p.src).concat([IRON_START, IRON_DEEP]));
export const have = (p: PDef | string) => HAVE_P.has(typeof p === 'string' ? p : p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_P.has(a));
