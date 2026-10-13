/**
 * B4 plates. README for Claude:
 * - HAVE lists the plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and the hook draws a labelled coded cell stand-in instead.
 * - Real art: the amoeba plate b2c-amoeba-fission-1-v1.png (hook only). Its nucleus centre is at width fraction 0.50235
 *   and height fraction 0.50850 (docs/production/claude-pm/assets/b4-provenance.json).
 * - Coded (no art needed): nucleotide, base tiles with jigsaw outlines, backbones, ladders, hydrogen bonds, fork,
 *   helicase and polymerase icons, twisted helix, book, pinhead, cars, cells, bacterium, child icon, heavy and light beads,
 *   countdown, attempt boards and key notes.
 */
const B = 'assets/biology/';
export const AMOEBA = B + 'b2c-amoeba-fission-1-v1.png';

const ALL = [AMOEBA];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
