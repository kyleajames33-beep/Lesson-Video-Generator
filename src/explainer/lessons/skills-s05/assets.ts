// S05 plates (all existing, none new): the M6 foam-cup calorimeter (worked question), the M6 volumetric flask (drill 1)
// and the bearded dragon on red sand (drill 2, cropped above the cut-away burrow). Alpha boxes in ./common.tsx.
import {CUP, FLASK5, DRAGON} from './common';

export const ASSETS: string[] = [CUP, FLASK5, DRAGON].map(p => p.src);
