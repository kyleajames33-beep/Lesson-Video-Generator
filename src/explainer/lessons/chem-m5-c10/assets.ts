/**
 * C10 plates. README for Claude:
 * - HAVE_C10 lists plate files that exist in public/assets/chemistry/. A plate not in HAVE_C10 is NOT in ASSETS (the slim
 *   bundler fails on missing files) and its scene draws the fallback.
 * - Painted and used (brief 38): the magnesium-in-acid pair (strong and weak, aligned), the vinegar bottle, the
 *   saturated beaker (Ksp scene and the handoff chip); the C5 clear flask is the interim ammonia solution.
 * - Brief 53 (delivered 16 Oct, wired 17 Oct): m5x-ammonia-bottle-v1.png replaces the C5 flask in scene 7, with a coded
 *   NH3(aq) label on its painted label.
 * - Everything else (particle lenses, builder, "left out" tray, size strip, grids, name tags) is abstract and coded.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
// alpha boxes (PIL, alpha > 20) and natural sizes, measured 16 Oct
export const STRONG_MG = mk('m5x-strong-acid-mg-v1.png', [2000, 2000], [411, 201, 1588, 1800]);
export const WEAK_MG = mk('m5x-weak-acid-mg-v1.png', [2000, 2000], [412, 200, 1589, 1800]);
export const VINEGAR = mk('m5x-vinegar-bottle-v1.png', [2000, 2000], [763, 200, 1237, 1800]);
export const SATURATED = mk('m5x-saturated-beaker-v1.png', [2000, 2000], [339, 200, 1661, 1800]);
export const FLASK = mk('c5-flask-clear-v1.png', [1200, 1600], [217, 162, 981, 1437]);
export const AMMONIA = mk('m5x-ammonia-bottle-v1.png', [2000, 2000], [590, 160, 1410, 1840]); // measured 17 Oct
const ALL = [STRONG_MG, WEAK_MG, VINEGAR, SATURATED, FLASK, AMMONIA].map(p => p.src);
export const HAVE_C10 = new Set<string>([STRONG_MG, WEAK_MG, VINEGAR, SATURATED, FLASK, AMMONIA].map(p => p.src));
export const have = (p: PDef) => HAVE_C10.has(p.src);
export const ASSETS: string[] = ALL.filter(a => HAVE_C10.has(a));
