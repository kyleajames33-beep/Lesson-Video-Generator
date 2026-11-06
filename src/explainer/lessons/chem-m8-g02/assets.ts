// M8 G02 (Chemistry practice) plates. Natural sizes and alpha boxes (PIL, alpha > 20) measured 7 Nov from the files
// in public/assets/chemistry/. All design-named plates are present (the new school bubbler included). Added for the
// dilution and the reagent blank: the volumetric pipette, the volumetric flask and the blank cuvette.
// Coded: question cards, tables, calibration graphs, linear range band, read-off lines, slope triangle, blank-share
// split, guideline bar, pipe-and-dots time strip (abstract), check strip, decision board, crossed chips, countdown.
// No people, hands or faces.
import type {PB} from '../bio-m5-b07/shared';

const C = 'assets/chemistry/';
const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
const mk = (f: string, box: [number, number, number, number], nat: [number, number] = N2): PB => ({src: C + f, nat, box});

export const PL = {
	aas: mk('m8-aas-v1.png', [161, 572, 1840, 1429]),
	bottle: mk('m8-river-sampling-bottle-v2.png', [520, 161, 1479, 1840]),
	colm: mk('m5x-colourimeter-empty-v1.png', [207, 199, 1794, 1801]),
	cuvFe: mk('m5x-cuvette-3-v1.png', [789, 204, 1210, 1799]),
	cuvBlank: mk('m5x-cuvette-blank-v1.png', [791, 200, 1210, 1799]),
	bubbler: mk('m8-school-bubbler-v1.png', [491, 528, 1572, 1544]),
	pipette: mk('m6-volumetric-pipette-filler-v1.png', [739, 164, 1309, 1884], N4),
	flask: mk('m6-volumetric-flask-v1.png', [683, 164, 1365, 1884], N4),
};
export const ASSETS_M8G02: string[] = Object.values(PL).map(p => p.src);
