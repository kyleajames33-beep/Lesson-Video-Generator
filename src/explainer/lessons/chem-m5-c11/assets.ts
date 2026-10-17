/**
 * C11 plates. README for Claude:
 * - HAVE_C11 lists plate files that exist in public/assets/chemistry/. A plate not in HAVE_C11 is NOT in ASSETS (the
 *   slim bundler fails on missing files) and its scene draws the named interim instead. When Codex delivers a plate
 *   (brief 59), measure its alpha box (PIL, alpha > 20), correct its mk() line below and add it to HAVE_C11: every scene
 *   already branches on have(), so nothing else changes.
 * - Have (inspected 17 Oct): the copper sulfate beaker pair (crystal, dissolved; aligned), the unsaturated and saturated
 *   beaker pair (aligned), the C8 hot thermometer, the C9 ice cube (interim cold cue), the M6 wash bottle (attempt 2).
 * - Brief 59, not delivered on 17 Oct: m5x-thermometer-cold (aligned with the hot thermometer, so its geometry below is
 *   the hot plate's), m5x-hot-pack and m5x-cold-pack (geometry guessed; placed by fitting the alpha box into a slot).
 *   Interims (design): cold thermometer and cold pack use the ice cube; hot pack uses the hot thermometer.
 * - No c11 process clip exists (public/assets/clips); the hook crossfades the aligned beaker pair with coded streaks.
 * - Everything else (ions, lattice, water molecules, hydration shells, ledger, bar chart, rate bars, gauge, tray) is coded.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 17 Oct
export const CUSO4_XTAL = mk('c11-cuso4-beaker-crystal-v1.png', [1400, 1800], [222, 275, 1151, 1604]);
export const CUSO4_DISS = mk('c11-cuso4-beaker-dissolved-v1.png', [1400, 1800], [222, 275, 1151, 1604]);
export const UNSAT = mk('m5x-unsaturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const SAT = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const THERMO_HOT = mk('c8-thermometer-hot-v1.png', [216, 1988], [21, 199, 194, 1789]);
export const ICE = mk('c9-ice-cube-v1.png', [2095, 2105], [510, 501, 1639, 1611]);
export const WASH = mk('m6-wash-bottle-v1.png', [2048, 2048], [587, 164, 1460, 1884]);
// brief 59 (not yet delivered): geometry to re-measure on delivery
export const THERMO_COLD = mk('m5x-thermometer-cold-v1.png', [216, 1988], [21, 199, 194, 1789]);
export const HOT_PACK = mk('m5x-hot-pack-v1.png', [2000, 2000], [300, 500, 1700, 1500]);
export const COLD_PACK = mk('m5x-cold-pack-v1.png', [2000, 2000], [300, 500, 1700, 1500]);

const ALL = [CUSO4_XTAL, CUSO4_DISS, UNSAT, SAT, THERMO_HOT, ICE, WASH, THERMO_COLD, HOT_PACK, COLD_PACK].map(p => p.src);
export const HAVE_C11 = new Set<string>([CUSO4_XTAL, CUSO4_DISS, UNSAT, SAT, THERMO_HOT, ICE, WASH].map(p => p.src));
export const have = (p: PDef) => HAVE_C11.has(p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_C11.has(a));
/** The cold cue: the painted cold thermometer once delivered, else the ice cube (design interim). */
export const coldThermo = () => (have(THERMO_COLD) ? THERMO_COLD : ICE);
export const hotPack = () => (have(HOT_PACK) ? HOT_PACK : THERMO_HOT);
export const coldPack = () => (have(COLD_PACK) ? COLD_PACK : ICE);
