/**
 * C8 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Painted and used: the sealed steel pressure vessel (attempt scene). Alpha box 357,362,566,1189 of a
 *   1280 x 1920 plate. If the file is removed from HAVE, the attempt draws a coded vessel with a gauge instead.
 * - Brief 31 plates (14 Oct, in PL8 with PIL alpha boxes): hot HI tube in a furnace (hook, big tube; the coded tube
 *   stays on the board), thermometer (hook), stopwatch (hook; the baked hand is covered by a face-coloured patch and a
 *   coded hand is drawn), round flask (the two Q equals K edge cases, with the coded particle dots over its body).
 *   Remove a plate from HAVE8 and the coded drawing returns.
 * - Everything else (settled-tube thumbnails with 0.05 mol/L dots, log number line with K and Q markers, rate bars,
 *   expression builder, notes board) is abstract and coded.
 */
const A = 'assets/chemistry/';
export const VESSEL = A + 'c8-pressure-vessel-v1.png';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
export const PL8 = {
	tube: mk('c8-hot-hi-tube-v1.png', [2094, 679], [209, 68, 1884, 611]),
	thermo: mk('c8-thermometer-hot-v1.png', [216, 1988], [21, 199, 194, 1789]),
	watch: mk('c8-stopwatch-v1.png', [1367, 1800], [136, 179, 1229, 1620]),
	flask: mk('c8-round-flask-v1.png', [1002, 1800], [99, 180, 901, 1619]),
};
export const HAVE8 = new Set<string>([VESSEL, ...Object.values(PL8).map(p => p.src)]);
export const ASSETS: string[] = [VESSEL, ...Object.values(PL8).map(p => p.src)].filter(a => HAVE8.has(a));
