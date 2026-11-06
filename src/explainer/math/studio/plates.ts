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

/**
 * Existing plates from other courses that the Maths redesigns reuse (root decisions 4 and 12). Measured 7 Nov
 * (alpha > 20 box). The extra anchor points are in file pixels, read from a gridded crop of each plate:
 * screen and display rectangles are [x0, y0, x1, y1]; dial centres and radii are for a coded needle.
 * Lessons add the files they use to their own ASSETS (MATHS_SHARED_PLATE_FILES lists them all).
 */
export const MATHS_SHARED_PLATES = {
	guitar: {src: 'assets/physics/phys-y11-guitar-v1.png', nat: [1983, 793], box: [73, 34, 1912, 765]} as PlateSpec,
	/** Sound level meter; its blank display is `display`. */
	soundMeter: {src: 'assets/physics/phys-y11-sound-level-meter-v1.png', nat: [2172, 724], box: [680, 152, 1315, 628]} as PlateSpec,
	bikeFrame: {src: 'assets/chemistry/y11c-bike-frame-v1.png', nat: [1484, 1060], box: [133, 164, 1337, 907]} as PlateSpec,
	/** Bike wheel; hub at the centre of its box. */
	bikeWheel: {src: 'assets/chemistry/y11c-bike-wheel-v1.png', nat: [1254, 1254], box: [164, 170, 1077, 1102]} as PlateSpec,
	car: {src: 'assets/biology/b4-car-blue-v1.png', nat: [1600, 800], box: [161, 136, 1440, 664]} as PlateSpec,
	/** Dashboard: speed dial (no painted needle) and two blank screens. */
	dashboard: {src: 'assets/physics/phys-y11-dashboard-cluster-v1.png', nat: [2400, 1000], box: [216, 133, 2184, 867]} as PlateSpec,
	coins: {src: 'assets/biology/y11-coins-v1.png', nat: [1200, 900], box: [108, 137, 1092, 762]} as PlateSpec,
	/** Phone on a tripod, landscape; blank screen. */
	phoneTripod: {src: 'assets/physics/phys-y11-phone-tripod-v1.png', nat: [1000, 2000], box: [90, 453, 910, 1546]} as PlateSpec,
	sealedJar: {src: 'assets/biology/y11-sealed-jar-v1.png', nat: [1400, 1800], box: [237, 162, 1165, 1638]} as PlateSpec,
};
export const MATHS_SHARED_ANCHORS = {
	soundMeterDisplay: [1003, 212, 1162, 296] as const,
	/** Speed dial: needle pivot, rim radius and the tick arc in maths degrees (anticlockwise from +x): 0 km/h at 216°, top speed at −35°. */
	dashboardDial: {cx: 729, cy: 527, r: 283, startDeg: 216, endDeg: -35} as const,
	dashboardScreenMain: [1062, 428, 1572, 634] as const,
	dashboardScreenSmall: [1638, 472, 1938, 622] as const,
	phoneScreen: [105, 515, 828, 822] as const,
	bikeWheelHub: [620, 636] as const,
};
export const MATHS_SHARED_PLATE_FILES = Object.values(MATHS_SHARED_PLATES).map(p => p.src);
