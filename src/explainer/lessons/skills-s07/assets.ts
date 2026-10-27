// S07 plates (all existing, none new): brief 103's spirit-burner set (base and shielded; placed by chem-m7-p03's shared
// outline so they cross-fade in place), the ethanol fuel bottle, the foam-cup calorimeter, the three sample bottles
// (each instance clipped to one clear bottle; the cloudy middle bottle is never shown), the sparse and countable plates
// and the agar dish. Alpha boxes in ./common.tsx.
import {SET} from '../chem-m7-p03/common';
import {AGAR, BOTTLE7, CUP7, PSPARSE, PCOUNT, TANK, TAP} from './common';

export const ASSETS: string[] = Array.from(new Set([SET.base.src, SET.shield.src, BOTTLE7.src, CUP7.src, TAP.src, TANK.src, PSPARSE.src, PCOUNT.src, AGAR.src]));
