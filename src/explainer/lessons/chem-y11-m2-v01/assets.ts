// Y11 Chem M2 V01 plates (see common.ts): the top-pan balance, the salt-solution beaker (opening), the copper
// carbonate crucible set, the magnesium ribbon, the open crucible of white powder, the clear and precipitate beakers,
// the empty beaker and the aluminium sample. Particles, tallies, slots, boundaries and wisps are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
