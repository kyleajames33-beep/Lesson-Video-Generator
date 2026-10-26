// M7 P02 plates (see common.ts). Equations, the layer lens, cards, tables and molecules are coded.
import {BRW, BRW_PAIR, CONTROL, DBOTTLE, GLASSES, GLOVES, HEX, HOOD, LAMP, LAYERS, LITMUS, PIPETTE, STOPPER, TILE, WASTE} from './common';

export const ASSETS: string[] = [...new Set([BRW.orange, BRW_PAIR, CONTROL, DBOTTLE, GLASSES, GLOVES, HEX.orange, HEX.faded, HOOD, LAMP, LAYERS.top, LAYERS.clear, LITMUS.blue, LITMUS.red, PIPETTE, STOPPER, TILE, WASTE].map(p => p.src))];
