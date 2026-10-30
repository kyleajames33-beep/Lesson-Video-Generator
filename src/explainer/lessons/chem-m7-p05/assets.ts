// M7 P05 plates (see common.ts). Equations, ratio chips, mole blocks, the method card, the mole bridge, the yield ladder,
// the class dot strip, the wet-mass flag, cards, the risk table and the key notes are coded.
import {BALANCE, DISTIL, DRY, FRUIT, FUNNEL, GLASSES, GLOVES, HOOD, REFLUX, WASTE} from './common';

export const ASSETS: string[] = [...new Set([FRUIT, REFLUX, FUNNEL.cloudy, FUNNEL.clear, DRY, BALANCE, DISTIL, GLASSES, GLOVES, HOOD, WASTE].map(p => p.src))];
