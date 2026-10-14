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

// Brief 27 painted icons (14 Oct): sealed tube (glass is sliced so the tube can be any length), plunger, dropper, seesaw.
export const PLUNGER = A + 'c4-icon-plunger-push-v1.png';
export const DROPPER = A + 'c4-icon-dropper-v1.png';
export const SEESAW_BASE = A + 'c4b-seesaw-base-v1.png';
export const SEESAW_BEAM = A + 'c4b-seesaw-beam-v1.png';

export const HAVE = new Set<string>([CATALYST, SEALED_TUBE, PLUNGER, DROPPER, SEESAW_BASE, SEESAW_BEAM]);
const ALL = [SEALED_TUBE, CATALYST, PLUNGER, DROPPER, SEESAW_BASE, SEESAW_BEAM];
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
