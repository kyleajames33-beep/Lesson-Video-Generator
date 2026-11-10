import {D10_PLATES} from './parts';
import {VALLEY} from '../math-a12-d09/parts';

// The brief 235 coaster track (painted to the 11-point rail guide) and the empty car, plus d09's hiking valley
// badge (its final frame opens scene 1).
export const ASSETS: string[] = [...D10_PLATES.map(p => p.src), VALLEY.src];
