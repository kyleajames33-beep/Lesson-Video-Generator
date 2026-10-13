/**
 * B3a part 2 plates. Reused from part 1: the thick-lining tract plate and the fetus-and-placenta plate.
 * New: the aligned term-cervix pair (b3a2-term-cervix-1/2-v1.png). Both delivered and in HAVE.
 * Everything else (brain and pituitary outline, loop diagrams, thermostat, graph, muscle cell, milk gland,
 * chain icons, cards, countdown) is coded in the scenes.
 */
import {TRACT_THICK, FETUS} from '../bio-m5-b03a/assets';

const B = 'assets/biology/';
export const CERVIX = [1, 2].map(n => `${B}b3a2-term-cervix-${n}-v1.png`);
export {TRACT_THICK, FETUS};

export const HAVE = new Set<string>([...CERVIX]);
export const ASSETS: string[] = [TRACT_THICK, FETUS, ...CERVIX.filter(a => HAVE.has(a))];
