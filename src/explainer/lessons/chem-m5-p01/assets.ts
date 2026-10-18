/**
 * P01 plates. README for Claude:
 * - HAVE_P01 lists plate files that exist in public/assets/chemistry/. A plate not in HAVE_P01 is NOT in ASSETS (the
 *   slim bundler fails on missing files) and its scene draws a dashed stand-in box (Stand in parts.tsx).
 * - Alpha boxes (PIL, alpha > 20) measured 18 Oct from the real files. Aligned variants share one box so a crossfade
 *   is two images at the same place: the iron series uses the C3 crop (IRON_CROP), the cobalt series the C3 crop
 *   (CO_CROP), the crystal pair, the magnesium pair and the NO2 pair the union of their boxes. 50 percent overlays of
 *   every pair were checked 18 Oct (no doubling).
 * - Brief 64 (delivered 18 Oct): crystals pink/blue, lit Bunsen, magnesium ribbon and ash (heatproof mat, as the
 *   design; the evaporating-dish ash is not used), clear dropper, faded iron tube with the faint Fe(OH)3 cloud, stopper,
 *   safety glasses, gloves, waste bottle, test tube holder.
 * - Not used: p01-iron-tube-diluted-v1.png. Its liquid reads deeper and more salmon than the stock tube (PIL mean
 *   #f7c3a6 against #f0d4c1), the wrong way for "very slightly paler", so tube 5 is the stock plate with a coded pale
 *   wash over the liquid (DilWash in parts.tsx). The unlit Bunsen is not used (its base is drawn at a different scale
 *   from the lit one, so the two cannot crossfade); the lit burner fades out instead.
 * - Reused: C3 iron and cobalt tubes, C9 NO2 tubes, C4a syringe barrel and plunger (one canvas, so overlaying them
 *   assembles the syringe), m6 white tile, beaker, wash bottle, m5x Fe and SCN bottles (coded label text), m5x
 *   colourimeter, c9 ice cube. The coded C3 thermometer replaces the painted c8 one because it must fall for the ice
 *   bath.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});

const IRON_B: [number, number, number, number] = [452, 195, 830, 1535];
export const IRON = {
	start: mk('c3-iron-tube-start-v1.png', [1280, 1792], IRON_B),
	deep: mk('c3-iron-tube-deep-v1.png', [1280, 1792], IRON_B),
	faded: mk('p01-iron-tube-faded-ppt-v1.png', [1280, 1792], IRON_B),
};
const CO_B: [number, number, number, number] = [300, 185, 982, 1570];
export const COB = {
	pink: mk('c3-cobalt-tube-pink-v1.png', [1280, 1792], CO_B),
	purple: mk('c3-cobalt-tube-purple-v1.png', [1280, 1792], CO_B),
	blue: mk('c3-cobalt-tube-blue-v1.png', [1280, 1792], CO_B),
};
const NO2_B: [number, number, number, number] = [313, 159, 887, 1730];
export const NO2 = {brown: mk('c9-no2-tube-brown-v1.png', [1200, 1884], NO2_B), pale: mk('c9-no2-tube-pale-v1.png', [1200, 1884], NO2_B)};
const CRYS_B: [number, number, number, number] = [399, 194, 1698, 1804];
export const CRYS = {pink: mk('p01-cocl2-crystals-pink-v1.png', [2000, 2000], CRYS_B), blue: mk('p01-cocl2-crystals-blue-v1.png', [2000, 2000], CRYS_B)};
const MG_B: [number, number, number, number] = [209, 636, 1802, 1591];
export const MG = {ribbon: mk('p01-mg-ribbon-v1.png', [2000, 2000], MG_B), ash: mk('p01-mgo-ash-v1.png', [2000, 2000], MG_B)};
export const BURNER = mk('m5x-bunsen-burner-v1.png', [2000, 2000], [687, 242, 1313, 1733]);
export const DROPPER = mk('m5x-dropper-clear-v1.png', [2000, 2000], [849, 328, 1151, 1672]);
export const STOPPER = mk('m5x-stopper-v1.png', [2000, 2000], [572, 617, 1433, 1389]);
export const GLASSES = mk('m5x-safety-glasses-v1.png', [2000, 2000], [215, 637, 1787, 1408]);
export const GLOVES = mk('m5x-gloves-v1.png', [2000, 2000], [218, 385, 1788, 1617]);
export const WASTE = mk('m5x-waste-bottle-v1.png', [2000, 2000], [495, 269, 1504, 1743]);
export const HOLDER = mk('m5x-test-tube-holder-v1.png', [2000, 2000], [213, 594, 1792, 1417]);
export const TILE = mk('m6-white-tile-v1.png', [2048, 2048], [164, 374, 1884, 1674]);
export const BEAKER = mk('m6-beaker-v1.png', [2048, 2048], [278, 164, 1769, 1884]);
export const WASH = mk('m6-wash-bottle-v1.png', [2048, 2048], [587, 164, 1460, 1884]);
export const BOTTLE_FE = mk('m5x-bottle-fe-v1.png', [2000, 2000], [613, 160, 1387, 1840]);
export const BOTTLE_SCN = mk('m5x-bottle-scn-v1.png', [2000, 2000], [608, 160, 1391, 1840]);
export const COLOURIMETER = mk('m5x-colourimeter-v1.png', [2000, 2000], [208, 201, 1793, 1800]);
export const ICECUBE = mk('c9-ice-cube-v1.png', [2095, 2105], [510, 501, 1639, 1611]);
/** Barrel and plunger share one 2062 x 1031 canvas; drawn on the same box they make the assembled syringe. */
const SYR_B: [number, number, number, number] = [345, 368, 1833, 663];
export const SYR_BARREL = mk('c4a-syringe-barrel-v1.png', [2062, 1031], SYR_B);
export const SYR_PLUNGER = mk('c4a-syringe-plunger-v1.png', [2062, 1031], SYR_B);

const LIST: PDef[] = [...Object.values(IRON), ...Object.values(COB), ...Object.values(NO2), ...Object.values(CRYS), ...Object.values(MG), BURNER, DROPPER, STOPPER, GLASSES, GLOVES, WASTE, HOLDER, TILE, BEAKER, WASH, BOTTLE_FE, BOTTLE_SCN, COLOURIMETER, ICECUBE, SYR_BARREL, SYR_PLUNGER];
export const HAVE_P01 = new Set<string>(LIST.map(p => p.src));
export const have = (p: PDef) => HAVE_P01.has(p.src);
export const ASSETS: string[] = [...new Set(LIST.map(p => p.src))].filter(a => HAVE_P01.has(a));
