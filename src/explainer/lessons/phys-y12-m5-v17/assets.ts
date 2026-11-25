// Plates used by phys-y12-m5-v17, drawn at native aspect only: the Earth, the Moon (opening frame, last time's
// handoff), the steel ball (the two 70 kg spheres), Mars (attempt 1) and the satellite (handoff).
import {V16_PLATES} from '../phys-y12-m5-v16/parts';
import {V17_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V17_PLATES, ...V16_PLATES.filter(p => /earth|moon/.test(p))])];
