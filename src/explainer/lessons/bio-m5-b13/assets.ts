/**
 * B13 plates. README for Claude:
 * - Real objects are painted plates in public/assets/biology/: the normal and sickled red cells (m6, scenes 3 and 5)
 *   and the malaria parasite inside a red cell (m7, scene 5).
 * - Codex brief 70 plates: the sample tube rack (hook), the Anopheles mosquito (scene 5) and the Tasmanian devil
 *   (scene 7, and the pairing cards as dark silhouettes). Files appeared on disk on 18 Oct (1254 px drafts, no
 *   status.md hand-in or QA yet), so they stay out of HAVE and draw the dashed stand-in. Their alpha boxes below are
 *   measured from those drafts. To switch them on after QA, add PENDING to HAVE (one line).
 * - Coded: tube grid, site badges, record card, the sample-bounce simulation, the world outline with banded shading
 *   and a hatched malaria layer, evidence cards, pedigree, DNA strip, genotype chips with bars, study card, founder
 *   boat and beads, diversity trays, crash line, 1000 Genomes card, variant bars, nested circles, similarity tree,
 *   reference strip, the improve/remove table, attempt tables, scatter and the countdown. No people.
 */
const B = 'assets/biology/';
export const SICKLE = B + 'm6-red-cells-normal-sickle-v1.png';
export const PLASMO = B + 'm7-plasmodium-red-cell-v1.png';
/** Codex brief 70. */
export const RACK = B + 'm5x-sample-tube-rack-v1.png';
export const MOSQUITO = B + 'm5x-anopheles-mosquito-v1.png';
export const DEVIL = B + 'm5x-tasmanian-devil-v1.png';

const DELIVERED = [SICKLE, PLASMO];
export const PENDING = [RACK, MOSQUITO, DEVIL];
export const HAVE = new Set<string>([...DELIVERED, ...PENDING]); // brief 70 delivered 18 Oct (2000 px), boxes re-measured
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
