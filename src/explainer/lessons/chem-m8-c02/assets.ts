// M8 C02 plates (see common.ts). The method strip, dissolved-ion counters, crystal zoom, wash drops, weighing loop,
// calculation board, error board and key notes are coded.
import {BAL, BEAKER, DESICC, FUNNEL, OVEN, SETTLED, WASH, WASTE} from './common';

export const ASSETS_M8C02: string[] = [...new Set([BEAKER, SETTLED, FUNNEL, OVEN, DESICC, BAL, WASH, WASTE].map(p => p.src))];
