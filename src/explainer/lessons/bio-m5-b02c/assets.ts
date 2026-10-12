/**
 * B2c plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and PArt (shared.tsx) draws a labelled dashed stand-in box.
 * - All twelve plates were delivered before this build (reused b1 fission and budding sequences, the new amoeba
 *   sequence, paramecium, Acineta and milk glass), so no stand-in is drawn right now.
 * - To retire a plate later, remove it from HAVE. To swap one in, add the file to HAVE and, if its alpha box
 *   differs from the PL entry in shared.tsx, re-measure it (PIL, alpha > 20).
 * - Coded in the scenes (no art needed): the conjugation bridge and gene bead, the doubling crowd and working,
 *   DNA loop copies, the cut lines and walls, the countdown, the flask and the growth curve.
 */
const B = 'assets/biology/';
export const FISSION = [1, 2, 3].map(n => `${B}b1-fission-${n}-v1.png`);
export const BUDDING = [1, 2, 3].map(n => `${B}b1-budding-${n}-v1.png`);
export const AMOEBA = [1, 2, 3].map(n => `${B}b2c-amoeba-fission-${n}-v1.png`);
export const PARAMECIUM = B + 'b2c-paramecium-v1.png';
export const ACINETA = B + 'b2c-acineta-bud-v1.png';
export const MILK = B + 'b2c-milk-glass-bench-v1.png';

export const HAVE = new Set<string>([...FISSION, ...BUDDING, ...AMOEBA, PARAMECIUM, ACINETA, MILK]);
export const ASSETS: string[] = [...FISSION, ...BUDDING, ...AMOEBA, PARAMECIUM, ACINETA, MILK].filter(a => HAVE.has(a));
