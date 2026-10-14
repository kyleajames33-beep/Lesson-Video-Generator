/**
 * B5a plates. README for Claude:
 * - HAVE lists plate files that exist in public/assets/biology/. A plate not in HAVE is NOT in ASSETS
 *   (the slim bundler fails on missing files) and the scene draws a coded stand-in instead.
 * - Real art (owner rule: real objects get painted plates): skin graze cross-section (hook, uses), embryo ball,
 *   budding yeast, amoeba, mint cutting and bacterium (uses).
 * - Coded: every chromosome, chromatid, centromere, spindle fibre, cell outline and nucleus, the stage strip,
 *   cycle ring, count tracker, attempt boards, IPMAT icons, checkpoint gate and countdown.
 */
const B = 'assets/biology/';
export const SKIN = B + 'b5a-skin-graze-v1.png';
export const EMBRYO = B + 'b3a-cleavage-4-v1.png';
export const YEAST = B + 'b1-budding-2-v1.png';
export const AMOEBA = B + 'b2c-amoeba-fission-1-v1.png';
export const CUTTING = B + 'b2b-mint-cutting-glass-v1.png';
export const BACTERIUM = B + 'b1-fission-1-v1.png';

const ALL = [SKIN, EMBRYO, YEAST, AMOEBA, CUTTING, BACTERIUM];
export const HAVE = new Set<string>(ALL);
export const ASSETS: string[] = ALL.filter(a => HAVE.has(a));
