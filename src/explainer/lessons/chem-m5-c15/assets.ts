/**
 * C15 plates. README for Claude:
 * - HAVE_C15 lists plate files that exist in public/assets/chemistry/ (checked 17 Oct). A plate not in HAVE_C15 is NOT
 *   in ASSETS (the slim bundler fails on missing files) and its scene draws the named interim; scenes branch on have().
 * - Have (inspected 17 Oct): the kidney stone beside a coin (hook, decision rule), the saturated beaker (white
 *   crystals; saturated AgCl in scenes 10 and 11, saturated CaSO4 in attempt 2 and feedback 2), the unsaturated beaker
 *   (mixing, the mixed beaker for the PbSO4 interim), the no-precipitate tube (scene 6, feedback 1) and the graduated
 *   pipette with its red filler (scene 7).
 * - Brief 59, not delivered on 17 Oct: m5x-ppt-baso4-white (a fine milky white settled precipitate in the brief 38 rack
 *   tube, used here for PbSO4 with a coded label). Its geometry below is the AgCl rack plate's (aligned set); re-measure
 *   on delivery (PIL, alpha > 20) and add it to HAVE_C15. Interim (design): coded white specks settling in the mixed
 *   beaker. The curdy AgCl tube is not used for PbSO4.
 * - Coded: the urine and common-ion lenses, the pour-and-spread mixing move, the ion box, the mixing card, the log
 *   number line with teal Ksp and coral Qsp markers, the ICE table, the check ruler, the swap-cross thumbnail.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 17 Oct
export const KIDNEY = mk('m5x-kidney-stone-v1.png', [2000, 2000], [200, 527, 1800, 1473]);
export const SAT = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const UNSAT = mk('m5x-unsaturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const NOPPT = mk('m5x-no-ppt-clear-v1.png', [2000, 2000], [568, 200, 1432, 1799]);
export const PIPETTE = mk('m5x-graduated-pipette-v1.png', [2000, 2000], [160, 178, 1840, 1822]);
// brief 59 (not yet delivered): geometry assumed aligned with the AgCl rack plate; re-measure on delivery
export const BASO4 = mk('m5x-ppt-baso4-white-v1.png', [2000, 2000], [569, 200, 1432, 1800]);

const ALL = [KIDNEY, SAT, UNSAT, NOPPT, PIPETTE, BASO4].map(p => p.src);
export const HAVE_C15 = new Set<string>([KIDNEY, SAT, UNSAT, NOPPT, PIPETTE].map(p => p.src));
export const have = (p: PDef) => HAVE_C15.has(p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_C15.has(a));
