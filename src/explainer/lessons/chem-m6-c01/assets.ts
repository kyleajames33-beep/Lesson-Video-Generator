/**
 * M6 C01 and C02 plates. README for Claude:
 * - Natural sizes and alpha boxes (PIL, alpha > 20) measured 19 Oct from the real files.
 * - Aligned pairs are drawn on the union of their two boxes, so a crossfade is two images at one place:
 *   litmus red/blue (brief 82), NH4Cl tube clear/ring (brief 82), limewater clear/milky (brief 82; the delivery tube
 *   shifts a few px between the two, so its crossfade is kept short), baking soda clip before/fizz.
 * - NH4Cl ring plate: the white ring sits at natural x about 1247 (about 0.35 of the tube from the right, HCl, end);
 *   tube centre line y about 895 on the 2000 px canvas.
 * - C02 imports this file; every plate listed here exists, so ASSETS is the whole list for each lesson.
 */
const A = 'assets/chemistry/';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
export const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
const N2 = [2000, 2000] as [number, number], N4 = [2048, 2048] as [number, number];

export const CLEANER = mk('m6-household-cleaner-bottle-v1.png', N4, [649, 164, 1400, 1884]);
const LIT_B: [number, number, number, number] = [200, 404, 1800, 1597];
export const LITMUS = {red: mk('m6-litmus-red-v1.png', N2, LIT_B), blue: mk('m6-litmus-blue-v1.png', N2, LIT_B)};
export const AMMONIA = mk('m5x-ammonia-bottle-v1.png', N2, [590, 160, 1410, 1840]);
export const SODA_BOX = mk('m6-baking-soda-box-v1.png', N4, [305, 164, 1742, 1883]);
export const BEAKER = mk('m6-beaker-v1.png', N4, [278, 164, 1769, 1884]);
const TUBE_B: [number, number, number, number] = [200, 828, 1800, 1172];
export const TUBE = {clear: mk('m6-nh4cl-tube-clear-v1.png', N2, TUBE_B), ring: mk('m6-nh4cl-tube-ring-v1.png', N2, TUBE_B)};
/** Ring and tube geometry on the tube plates, as fractions of the visible (union) box. */
export const TUBE_G = {ringU: (1247 - 200) / 1600, axisV: (895 - 828) / 344, leftU: 0.07, rightU: 0.93};
export const MG_ACID = mk('m5x-strong-acid-mg-v1.png', N2, [411, 201, 1588, 1800]);

// C02 plates
export const MARBLE = mk('m6-marble-chips-acid-v1.png', N2, [347, 201, 1653, 1800]);
export const ANTACID = mk('m6-antacid-tablets-v1.png', N4, [164, 369, 1884, 1678]);
export const LEMON = mk('m6-lemon-v1.png', N4, [165, 366, 1884, 1682]);
export const VINEGAR = mk('m6-vinegar-bottle-v1.png', N4, [727, 164, 1319, 1883]);
export const SOAP = mk('m6-soap-bar-v1.png', N4, [164, 535, 1883, 1513]);
export const FERT = mk('m6-fertiliser-granules-v1.png', N2, [200, 493, 1799, 1507]);
const CLIP_B: [number, number, number, number] = [420, 136, 1628, 1563];
export const SODA_CLIP = {before: mk('m6-clip-baking-soda-vinegar-before-v1.png', [2048, 1700], CLIP_B), fizz: mk('m6-clip-baking-soda-vinegar-fizz-v1.png', [2048, 1700], CLIP_B)};
export const COPPER = mk('m6-copper-acid-v1.png', N2, [336, 200, 1664, 1800]);
export const ZINC = mk('m6-zinc-acid-v1.png', N2, [333, 201, 1666, 1800]);
const LIME_B: [number, number, number, number] = [520, 200, 1480, 1800];
export const LIME = {clear: mk('m6-limewater-clear-v1.png', N2, LIME_B), milky: mk('m6-limewater-milky-v1.png', N2, LIME_B)};
export const SPLINT = mk('m6-splint-pop-v1.png', N2, [510, 202, 1489, 1800]);

export const C01_PLATES: PDef[] = [CLEANER, LITMUS.red, LITMUS.blue, AMMONIA, SODA_BOX, BEAKER, TUBE.clear, TUBE.ring, MG_ACID];
export const ASSETS: string[] = [...new Set(C01_PLATES.map(p => p.src))];
