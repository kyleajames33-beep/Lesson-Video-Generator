/**
 * C4b plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/chemistry/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and its scene draws a coded stand-in instead.
 * - Stand-ins right now (no C4b plate has been delivered):
 *   SEALED_TUBE (c4b-sealed-tube-v1.png): every tube is coded (thick glass, clamps, coded purple tint), so the
 *   plate is not wired in at all. Add it to HAVE only if a scene is changed to use it.
 *   CATALYST (c4b-metal-catalyst-v1.png): the grey metal crumple is coded in parts.tsx (Crumple). If the plate is
 *   delivered, add it to HAVE and Crumple will draw it (contained in a square box) instead of the coded shape.
 * - Reused: nothing painted. Everything else in C4b (energy profile, surface scene, tubes, graphs, strips) is coded.
 */
const A = 'assets/chemistry/';
export const SEALED_TUBE = A + 'c4b-sealed-tube-v1.png';
export const CATALYST = A + 'c4b-metal-catalyst-v1.png';

export const HAVE = new Set<string>([CATALYST]);
const ALL = [SEALED_TUBE, CATALYST];
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
