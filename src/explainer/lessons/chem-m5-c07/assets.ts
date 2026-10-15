/**
 * C7 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws the coded stand-in instead.
 * - Painted and used: the Haber converter (hook), and the brief 31 plates (14 Oct): reactor bed, condenser cooler,
 *   ammonia tank, compressor pump, iron catalyst pellets, thick steel wall, flame, pipe leak.
 *   PL7 gives [x, y, w, h] alpha boxes (PIL, alpha > 20) and natural sizes. Remove a file from HAVE7 and the
 *   coded drawing returns.
 * - Everything else (dashboard, gauges, plots, plant loop schematic, answer table, tug of war) is abstract and coded.
 */
const A = 'assets/chemistry/';
export const CONVERTER = A + 'c7-haber-converter-v1.png';
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const mk = (name: string, nat: [number, number], b: [number, number, number, number]): PDef => ({src: A + name, nat, box: [b[0], b[1], b[2] - b[0], b[3] - b[1]]});
export const PL7 = {
	reactor: mk('c7-reactor-bed-v1.png', [880, 1895], [88, 189, 792, 1705]),
	cooler: mk('c7-condenser-cooler-v1.png', [2150, 925], [215, 92, 1935, 832]),
	tank: mk('c7-ammonia-storage-tank-v1.png', [1742, 1065], [174, 106, 1568, 958]),
	pump: mk('c7-gas-compressor-pump-v1.png', [1795, 1125], [179, 112, 1615, 1012]),
	pellets: mk('c7-iron-catalyst-pellets-v1.png', [1800, 1019], [180, 101, 1620, 916]),
	wall: mk('c7-thick-steel-wall-v1.png', [1147, 1800], [113, 179, 1032, 1621]),
	flame: mk('c7-flame-energy-v1.png', [505, 1800], [51, 181, 455, 1620]),
	leak: mk('c7-pipe-leak-v1.png', [2111, 1002], [211, 100, 1900, 902]),
};
const PAINTED = Object.values(PL7).map(p => p.src);

// Codex brief 43 (16 Oct): the tug of war for "Haber is a compromise" (memory-aid scene), three aligned layers on one
// canvas of about 3000 x 1000: the left (cold, yield) figure, the right (hot, speed) figure, and the rope with its flag.
// PENDING: the files do not exist yet. When all three are delivered, check TUG_NAT against the real canvas size and add
// ...TUG_LAYERS to HAVE7 below; the scene then draws the plates instead of the coded stick figures and rope.
// If the painted layers include the frost and the flame, set TUG_PLATE_ICONS = true to drop the coded snowflake and flame.
export const TUG = {
	left: A + 'c7-tug-left-v1.png',
	right: A + 'c7-tug-right-v1.png',
	rope: A + 'c7-tug-rope-flag-v1.png',
};
export const TUG_NAT: [number, number] = [3000, 1000];
export const TUG_PLATE_ICONS = false;
const TUG_LAYERS = [TUG.left, TUG.right, TUG.rope];
export const HAVE7 = new Set<string>([CONVERTER, ...PAINTED]);
export const HAVE_TUG = TUG_LAYERS.every(t => HAVE7.has(t));
export const ASSETS: string[] = [CONVERTER, ...PAINTED, ...TUG_LAYERS].filter(a => HAVE7.has(a));
