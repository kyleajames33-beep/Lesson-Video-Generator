/**
 * B3a part 2 plates. Reused from part 1: the thick-lining tract plate and the fetus-and-placenta plate.
 * New: the aligned term-cervix pair (b3a2-term-cervix-1/2-v1.png). Both delivered and in HAVE.
 * Everything else (brain and pituitary outline, loop diagrams, thermostat, graph, milk gland,
 * chain icons, cards, countdown) is coded in the scenes.
 */
import {TRACT_THICK, FETUS} from '../bio-m5-b03a/assets';

const B = 'assets/biology/';
export const CERVIX = [1, 2].map(n => `${B}b3a2-term-cervix-${n}-v1.png`);
export {TRACT_THICK, FETUS};

// Brief 27 and 23 painted icons (14 Oct): brain with a separate pituitary part, milk gland (empty and full, aligned), tablet, ovary pair (aligned).
export const BRAIN = B + 'b3a2-brain-v1.png';
export const PIT_PART = B + 'b3a2-pituitary-part-v1.png';
export const GLAND = [B + 'b3a2-milk-gland-empty-v1.png', B + 'b3a2-milk-gland-full-v1.png'];
export const TABLET = B + 'b3a2-tablet-v1.png';
export const OVARY = [B + 'b3a2-ovary-closeup-v1.png', B + 'b3a2-ovary-no-ripening-v1.png'];
// Brief 33 (14 Oct): one smooth muscle cell of the uterus wall, relaxed and contracted (aligned on the nucleus, 2500 x 724).
export const MUSCLE_CELL = [B + 'b3a2-smooth-muscle-cell-relaxed-v1.png', B + 'b3a2-smooth-muscle-cell-contracted-v1.png'];
const PAINTED = [BRAIN, PIT_PART, ...GLAND, TABLET, ...OVARY, ...MUSCLE_CELL];

export const HAVE = new Set<string>([...CERVIX, ...PAINTED]);
export const ASSETS: string[] = [TRACT_THICK, FETUS, ...CERVIX, ...PAINTED].filter(a => HAVE.has(a) || a === TRACT_THICK || a === FETUS);
