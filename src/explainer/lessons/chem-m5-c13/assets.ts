/**
 * C13 plates. README for Claude:
 * - HAVE_C13 lists plate files that exist in public/assets/chemistry/. A plate not in HAVE_C13 is NOT in ASSETS (the
 *   slim bundler fails on missing files) and its scene draws the named interim. When a plate lands, measure its alpha
 *   box (PIL, alpha > 20), correct its mk() line and add it to HAVE_C13; the scenes already branch on have().
 * - Have (inspected 17 Oct): the c13 lead iodide tube pair (clear, precipitate; aligned, wire stand), the brief 38
 *   rack set (AgCl white, PbI2 yellow, Cu(OH)2 pale blue, no precipitate; aligned), the barium meal glass, the plain
 *   amber reagent bottle (coded label text on its blank label), the saturated beaker (handoff chip).
 * - Brief 59, not delivered on 17 Oct: m5x-ppt-baso4-white (aligned with the rack set, so its geometry below is the
 *   AgCl plate's). Interim (design): the AgCl plate with a coded "BaSO4(s), white" label, never beside the AgCl tube.
 * - No c13 process clip exists (public/assets/clips); the hook crossfades the aligned tube pair with coded specks.
 * - Coded: hydrated ions in lenses, the rules grid, the rules card, the swap cross, the equation stack with token
 *   flights and strikes, charge tallies, the filter funnel and flask (abstract), composition cards.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 17 Oct
export const TUBE_CLEAR = mk('c13-pbi2-tube-clear-v1.png', [1280, 1792], [505, 174, 758, 1543]);
export const TUBE_PPT = mk('c13-pbi2-tube-precipitate-v1.png', [1280, 1792], [505, 174, 758, 1543]);
export const AGCL = mk('m5x-ppt-agcl-white-v1.png', [2000, 2000], [569, 200, 1432, 1800]);
export const PBI2 = mk('m5x-ppt-pbi2-yellow-v1.png', [2000, 2000], [568, 200, 1431, 1799]);
export const CUOH2 = mk('m5x-ppt-cuoh2-blue-v1.png', [2000, 2000], [568, 200, 1432, 1800]);
export const NOPPT = mk('m5x-no-ppt-clear-v1.png', [2000, 2000], [568, 200, 1432, 1799]);
export const MEAL = mk('m5x-barium-meal-glass-v1.png', [2000, 2000], [515, 202, 1485, 1800]);
export const BOTTLE = mk('m5x-bottle-scn-v1.png', [2000, 2000], [608, 160, 1391, 1840]);
export const SATB = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
// brief 59 (not yet delivered): geometry assumed aligned with the AgCl plate; re-measure on delivery
export const BASO4 = mk('m5x-ppt-baso4-white-v1.png', [2000, 2000], [569, 200, 1432, 1800]);

const ALL = [TUBE_CLEAR, TUBE_PPT, AGCL, PBI2, CUOH2, NOPPT, MEAL, BOTTLE, SATB, BASO4].map(p => p.src);
export const HAVE_C13 = new Set<string>([TUBE_CLEAR, TUBE_PPT, AGCL, PBI2, CUOH2, NOPPT, MEAL, BOTTLE, SATB].map(p => p.src));
export const have = (p: PDef) => HAVE_C13.has(p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_C13.has(a));
/** The barium sulfate tube: the painted plate once delivered, else the AgCl plate (design interim, coded label). */
export const baso4Tube = () => (have(BASO4) ? BASO4 : AGCL);
