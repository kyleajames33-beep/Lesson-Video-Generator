// M7 P06 plates (see common.ts). No new plates. The tube chips, empty tube outlines, froth ruler, froth bars, oil
// timers, coated droplets and free soap counter, equations, cards, the risk table and the key notes are coded.
import {DBOTTLE, GLASSES, OW, ST, STOPPER, WASH, WASTE} from './common';

export const ASSETS: string[] = [...new Set([ST.soft, ST.hard, OW.layers, OW.emulsion, WASH, DBOTTLE, GLASSES, STOPPER, WASTE].map(p => p.src))];
