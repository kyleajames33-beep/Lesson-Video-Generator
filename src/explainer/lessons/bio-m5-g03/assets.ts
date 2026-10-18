/**
 * G03 (Biology, lesson key bg03) plates. README for Claude:
 * - Codex brief 70 plates: B13's sample tube rack (hook, small) and the newborn blood-spot card (scene 5). Files
 *   appeared on disk on 18 Oct (1254 px drafts, no status.md hand-in or QA yet), so they stay out of HAVE and draw the
 *   dashed stand-in. Alpha boxes are measured from the drafts. Add PENDING to HAVE after QA (one line).
 * - Coded: site badges, dot arrays (computed counts, seeded fill order), chromosome pair, repair blob, cell row, the
 *   Hardy-Weinberg stage column (every value computed), genotype chips, population bar, drift traces (seeded
 *   Wright-Fisher sampling), checklist, pedigree with tags (B9 kit), Iceland outline chip, document card, wording
 *   card, attempt cards and the countdown. No people: carriers are dots or pedigree symbols.
 */
const B = 'assets/biology/';
export const RACK = B + 'm5x-sample-tube-rack-v1.png';
export const SPOT = B + 'm5x-newborn-blood-spot-card-v1.png';

const DELIVERED: string[] = [];
export const PENDING = [RACK, SPOT];
export const HAVE = new Set<string>([...DELIVERED, ...PENDING]); // brief 70 delivered 18 Oct (2000 px), boxes re-measured
export const ASSETS: string[] = [...DELIVERED, ...PENDING].filter(a => HAVE.has(a));
