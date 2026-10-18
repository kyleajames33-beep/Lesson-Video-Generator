/**
 * B12 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the cheek swab v2 (brief 64; scene 3, the sample) and
 *   the gel tank v2 (brief 64: wells across the black, negative end; DNA runs toward the red, positive end; no bands
 *   painted). The tank is context only; every band is drawn on the coded front-on gel.
 * - Coded: base tiles (B4 shapes, serif letters), the fragment assembly and torn strips, sequencing traces with labelled
 *   peaks (a double peak at a heterozygous site), B9's pedigree symbols with trace chips, the chromosome bar with
 *   markers, repeat strips (GATA blocks), the gel slab with bands computed from repeat numbers (log-length rule), electrode
 *   signs, the pore mesh, the match ladder, the choice board cards, attempt cards and the countdown. No people: every
 *   individual is a pedigree symbol or a card.
 * - HAVE lists files that exist (checked 18 Oct); a plate missing from HAVE draws the dashed stand-in.
 */
const B = 'assets/biology/';
export const SWAB = B + 'm5x-cheek-swab-v2.png';
export const GEL_TANK = B + 'm5x-gel-tank-v2.png';

const ALL = [SWAB, GEL_TANK];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
