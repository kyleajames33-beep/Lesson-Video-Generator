// M8 C04 plates (see common.ts). The beam cutaway, colour wheel, grating fan, slit, wavelength strip, spectra and
// calibration graphs, atomiser inset, beams, detector, energy ladders, cards, crossed chips, countdown and key notes
// are coded.
import {PLATES} from './common';

export const ASSETS: string[] = [...new Set(PLATES.map(p => p.src))];
