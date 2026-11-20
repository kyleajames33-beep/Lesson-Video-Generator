// Y11 Chem M1 V10 plates (see common.ts). Spectrum strips, prisms and rays, photons, energy-level diagrams, the
// staircase and ramp, atoms, the orbital cloud, tallies, readouts, rows, chips, question cards, countdowns and key
// notes are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
