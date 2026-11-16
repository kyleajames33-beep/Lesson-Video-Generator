import {BUS_STOP, COOKIE, S08_PLATES} from './parts';

// Plates: the headphones (scenes 1, 7, 8, 13, 14), the chip bag (handoff), s06's cookie (scene 3) and s07's bus stop (opening frame).
export const ASSETS: string[] = [...S08_PLATES, COOKIE, BUS_STOP].map(p => p.src);
