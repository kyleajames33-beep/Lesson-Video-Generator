import {SKYLINE, SUN, TIDE} from './parts';

// Plates: the city skyline and the reused sun (scenes 1, 2, 5, 9, 10, 16: t01's daylight anchor) and the boat-ramp
// tide board (scene 15, the final frame and t03's opening frame).
export const ASSETS: string[] = [SKYLINE, SUN, TIDE].map(p => p.src);
