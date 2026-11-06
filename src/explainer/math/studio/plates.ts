// Plate specs for the maths studio. box = alpha > 20 bounding box in file pixels. The field and rod sprites are
// Codex's delivered ma12 plates (brief 195, 6 Nov). The flasks reuse the Biology straight-neck clear and cloudy
// pair (root decision 3 in math-a12-d01.md); the _placeholder copies are byte copies of those plates.
import type {PlateSpec} from './primitives';

const M = 'assets/maths/';
export const MA12_PLATES = {
	/** Placeholder: copy of biology m7-straight-neck-flask-clear-v1 (round flask of clear broth). Target: ma12-broth-flask-v1.png. */
	flask: {src: M + '_placeholder-broth-flask.png', nat: [2000, 2000], box: [230, 920, 945, 1775]} as PlateSpec,
	/** Placeholder: copy of biology m7-straight-neck-flask-cloudy-v1 (same geometry). Target: ma12-broth-flask-cloudy-v1.png. */
	flaskCloudy: {src: M + '_placeholder-broth-flask-cloudy.png', nat: [2000, 2000], box: [230, 920, 945, 1775]} as PlateSpec,
	/** Empty painted microscope field (brief 195). */
	field: {src: M + 'ma12-microscope-field-v1.png', nat: [1254, 1254], box: [186, 181, 1061, 1070]} as PlateSpec,
	/** Single rod-shaped bacterium (brief 195). */
	rod: {src: M + 'ma12-rod-cell-v1.png', nat: [1774, 887], box: [334, 274, 1432, 616]} as PlateSpec,
	/** The same cell elongated and pinched at the centre, about to split (brief 195); drawn at the rod's body height. */
	rodDividing: {src: M + 'ma12-rod-cell-dividing-v1.png', nat: [1983, 793], box: [360, 301, 1624, 489]} as PlateSpec,
};
export const MA12_PLATE_FILES = Object.values(MA12_PLATES).map(p => p.src);
