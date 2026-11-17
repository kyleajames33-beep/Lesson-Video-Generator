import {BUOY, SKYLINE, SUN, TIDE} from './parts';
import {FERRIS_FILES} from '../math-a12-d05/parts';

// Plates: the boat-ramp tide board (scenes 1 to 6, 9, 14, 15), d05's Ferris wheel rim, stand and cabins (scenes 7
// and 8), t02's skyline and sun (attempt 1), t01's yellow buoy (attempt 2) and d03's phone (scene 14, the final frame).
export const ASSETS: string[] = [TIDE.src, ...FERRIS_FILES, SKYLINE.src, SUN.src, BUOY.src, 'assets/maths/ma12-phone-v1.png'];
