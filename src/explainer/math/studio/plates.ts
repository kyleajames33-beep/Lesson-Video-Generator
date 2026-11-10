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

/**
 * Kit pass 2A: delivered ma12 plates (brief 238) and reused plates that the d15 to f08 parts and the demo use.
 * box = alpha > 20 bounding box, measured 10 Nov. Anchor points are from the brief 238 provenance files
 * (docs/production/claude-pm/assets/ma12-<lesson>-provenance.json) unless marked measured here.
 */
export const MATHS_KIT2_PLATES = {
	barrelVase: {src: M + 'ma12-barrel-vase-v1.png', nat: [1400, 2000], box: [320, 389, 1078, 1623]} as PlateSpec,
	stoneWallTop: {src: M + 'ma12-stone-wall-top-v1.png', nat: [2400, 360], box: [0, 89, 2400, 267]} as PlateSpec,
	cardTexture: {src: M + 'ma12-card-texture-v1.png', nat: [1200, 1200], box: [0, 0, 1200, 1200]} as PlateSpec,
	skateboard: {src: M + 'ma12-skateboard-side-v1.png', nat: [2400, 800], box: [310, 276, 2090, 602]} as PlateSpec,
	robotVacuum: {src: M + 'ma12-robot-vacuum-top-v1.png', nat: [800, 800], box: [135, 153, 675, 656]} as PlateSpec,
	hallwayFloor: {src: M + 'ma12-hallway-floor-v1.png', nat: [2400, 400], box: [0, 0, 2400, 338]} as PlateSpec,
	snowPost: {src: M + 'ma12-snow-post-v1.png', nat: [900, 2000], box: [94, 267, 805, 1757]} as PlateSpec,
	starterJar: {src: M + 'ma12-starter-jar-v1.png', nat: [1200, 1800], box: [187, 244, 1013, 1655]} as PlateSpec,
	/** Painted starter on the jar's canvas (same 1200 × 1800 file), for ContainerFill reveal mode. */
	starterFill: {src: M + 'ma12-starter-fill-v1.png', nat: [1200, 1800], box: [260, 300, 940, 1560]} as PlateSpec,
	beanShoot: {src: M + 'ma12-bean-shoot-v1.png', nat: [600, 800], box: [124, 60, 477, 761]} as PlateSpec,
	bookcasePots: {src: M + 'ma12-bookcase-pots-v1.png', nat: [1400, 2000], box: [120, 308, 1282, 1922]} as PlateSpec,
	frostThermometer: {src: M + 'ma12-frost-thermometer-v1.png', nat: [1000, 2400], box: [155, 259, 843, 2130]} as PlateSpec,
	laptop: {src: 'assets/biology/y11-laptop-blank-v1.png', nat: [1800, 1200], box: [258, 108, 1541, 1092]} as PlateSpec,
	tennisBall: {src: 'assets/biology/b6a-tennis-ball-v1.png', nat: [1600, 1600], box: [174, 166, 1427, 1415]} as PlateSpec,
	beanSeedling: {src: 'assets/biology/b2b-bean-seedling-v1.png', nat: [1600, 1600], box: [541, 151, 1061, 1451]} as PlateSpec,
	carYellow: {src: 'assets/biology/b4-car-yellow-v1.png', nat: [1600, 800], box: [160, 137, 1439, 663]} as PlateSpec,
	crate: {src: 'assets/physics/phys-y11-crate-v1.png', nat: [1600, 1400], box: [228, 126, 1371, 1274]} as PlateSpec,
};
export const MATHS_KIT2_ANCHORS = {
	/** Vase inner profile (d16): axis, inside base and mouth rows, inner half-widths at 11 equally spaced heights (measured scans). */
	vaseProfile: {axisX: 699.5, bottomY: 1580, topY: 415, radii: [157, 176.5, 200, 240, 302, 352, 290, 230, 194, 171, 156.5]} as const,
	/** Frost thermometer (i09): bulb centre, tube top, tube width; coded mapping y = 1017 − 97·T (°C). */
	thermometer: {bulb: [498, 1577] as const, top: [498.5, 505] as const, tubeWidth: 16, yAt: (T: number) => 1017 - 97 * T},
	/** Starter jar interior (i02) [x0, rim, x1, floor] and 90 file px per cm. */
	starterInterior: [260, 300, 940, 1560] as const,
	/** Bookcase soil lines (i01): pot centre x and soil y for the three pots; shoot stem base at (300, 760) on its own plate. */
	bookcaseSoil: [[699.5, 800], [699.5, 1220], [699.5, 1640]] as const,
	beanShootBase: [300, 760] as const,
	/** Snow post (i14): ground at y 1686, 4.68 file px per cm, post centre x 446 (post body about x 392 to 500, measured). */
	snowPost: {groundY: 1686, pxPerCm: 4.68, x0: 392, x1: 500},
	/** Laptop screen rectangle (measured 10 Nov: the dark panel). */
	laptopScreen: [372, 160, 1422, 708] as const,
};
export const MATHS_KIT2_PLATE_FILES = Object.values(MATHS_KIT2_PLATES).map(p => p.src);
