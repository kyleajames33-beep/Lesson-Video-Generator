// Plate specs for the maths studio. The d01 plates (ma12-*) are briefed to Codex; until they arrive these
// clearly named placeholders stand in (public/assets/maths/_placeholder-*.png). Swap: replace src, nat and
// box (alpha > 20 bounding box, file pixels) with the delivered plate's values. Every component takes the
// plate as a prop, so nothing else changes.
import type {PlateSpec} from './primitives';

const M = 'assets/maths/';
export const MA12_PLATES = {
	/** Placeholder: copy of biology m7-straight-neck-flask-clear-v1 (round flask of clear broth). Target: ma12-broth-flask-v1.png. */
	flask: {src: M + '_placeholder-broth-flask.png', nat: [2000, 2000], box: [230, 920, 945, 1775]} as PlateSpec,
	/** Placeholder: copy of biology m7-straight-neck-flask-cloudy-v1 (same geometry). Target: ma12-broth-flask-cloudy-v1.png. */
	flaskCloudy: {src: M + '_placeholder-broth-flask-cloudy.png', nat: [2000, 2000], box: [230, 920, 945, 1775]} as PlateSpec,
	/** Placeholder: plain warm circular field with a dark rim. Target: ma12-microscope-field-v1.png. */
	field: {src: M + '_placeholder-microscope-field.png', nat: [1200, 1200], box: [30, 30, 1171, 1171]} as PlateSpec,
	/** Placeholder: body of biology b6a-bacterium-v1 with pili and flagellum masked away. Target: ma12-rod-cell-v1.png. */
	rod: {src: M + '_placeholder-rod-cell.png', nat: [1040, 424], box: [22, 22, 1019, 403]} as PlateSpec,
	/** Placeholder: two rod copies joined with a pinch at the centre. Target: ma12-rod-cell-dividing-v1.png. */
	rodDividing: {src: M + '_placeholder-rod-cell-dividing.png', nat: [1981, 424], box: [22, 22, 1960, 403]} as PlateSpec,
};
export const MA12_PLATE_FILES = Object.values(MA12_PLATES).map(p => p.src);
