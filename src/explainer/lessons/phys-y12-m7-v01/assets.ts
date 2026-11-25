// Plates used by phys-y12-m7-v01, drawn at native aspect only: the radio mast, the Sun, the spark-gap transmitter and
// loop receiver, plus the Module 7 light plate set and the plates carried from Module 6's last video (its final
// frame opens this lesson).
import {V20_PLATES} from '../phys-y12-m6-v20/parts';
import {V01_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V20_PLATES, ...V01_PLATES])];
