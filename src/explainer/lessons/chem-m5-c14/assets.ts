/**
 * C14 plates. README for Claude:
 * - HAVE_C14 lists plate files that exist in public/assets/chemistry/ (checked 17 Oct). A plate not in HAVE_C14 is NOT
 *   in ASSETS (the slim bundler fails on missing files); scenes branch on have().
 * - Have (inspected 17 Oct): the barium meal glass (hook, scene 7), the saturated beaker (white crystals on the floor;
 *   reused for BaSO4, CaF2 and Mg(OH)2 with coded labels, all white solids) and its aligned unsaturated partner
 *   (scene 2), the lead iodide rack tube and the no-precipitate tube (handoff chip only).
 * - Need: none (design). Attempts show no solid and no plate, so nothing hints at the method.
 * - Coded: the ratio-true ion swarm lens, the expression builder with the "left out" tray, the ICE table with a greyed
 *   solid column, the E-row-first arrow and E - I bracket, algebra lines, the log number line, ghosts and strikes.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 17 Oct
export const MEAL = mk('m5x-barium-meal-glass-v1.png', [2000, 2000], [515, 202, 1485, 1800]);
export const SAT = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const UNSAT = mk('m5x-unsaturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const PBI2 = mk('m5x-ppt-pbi2-yellow-v1.png', [2000, 2000], [568, 200, 1431, 1799]);
export const NOPPT = mk('m5x-no-ppt-clear-v1.png', [2000, 2000], [568, 200, 1432, 1799]);

const ALL = [MEAL, SAT, UNSAT, PBI2, NOPPT].map(p => p.src);
export const HAVE_C14 = new Set<string>([MEAL, SAT, UNSAT, PBI2, NOPPT].map(p => p.src));
export const have = (p: PDef) => HAVE_C14.has(p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_C14.has(a));
