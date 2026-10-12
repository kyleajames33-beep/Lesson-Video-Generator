/**
 * B3a part 1 plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and shared.tsx draws a coded stand-in instead.
 * - Stand-in right now: TRACT_THIN (b3a-tract-thin-lining-v1.png, the aligned thin-lining pair of the
 *   reproductive tract). TractPair in shared.tsx lays a coded pale wash over the lining of the thick plate.
 *   Every use goes through TractPair, so adding the file to HAVE swaps in the painted plate everywhere.
 * - Delivered and used: tract thick lining, cleavage 1 to 5, implantation 1 to 3, fetus and placenta.
 * - To swap the thin plate in later: copy it into public/assets/biology/, add it to HAVE, and if its alpha
 *   box differs from the PL.tract entry in shared.tsx (219, 256, 1481, 777 on 1920x1280), re-measure it
 *   (PIL, alpha > 20). It must overlay the thick plate exactly.
 * - Coded in the scenes (no art needed): sperm and egg close-ups, the numbered rail, the pregnancy test,
 *   all hormone graphs, particle flows, the organ chains, the placenta exchange close-up, the neutral
 *   uterus outline, the countdown, the key notes.
 */
const B = 'assets/biology/';
export const CLEAVAGE = [1, 2, 3, 4, 5].map(n => `${B}b3a-cleavage-${n}-v1.png`);
export const IMPLANT = [1, 2, 3].map(n => `${B}b3a-implant-${n}-v1.png`);
export const FETUS = B + 'b3a-fetus-placenta-v1.png';
export const TRACT_THICK = B + 'b3a-tract-thick-lining-v1.png';
export const TRACT_THIN = B + 'b3a-tract-thin-lining-v1.png';

export const HAVE = new Set<string>([...CLEAVAGE, ...IMPLANT, FETUS, TRACT_THICK]);
export const ASSETS: string[] = [...CLEAVAGE, ...IMPLANT, FETUS, TRACT_THICK, TRACT_THIN].filter(a => HAVE.has(a));
