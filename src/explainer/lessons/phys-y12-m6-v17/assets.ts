// Plates used by phys-y12-m6-v17, drawn at native aspect only: last time's lab power pack and DC motor model (opening),
// the hobby motor and its flywheel, the multimeter used as an ammeter, the knife switch and blade, the wooden block (the
// jam), the bench pulley, mass hanger and slotted masses (the load), the rheostat (the starting resistor) and the
// oscilloscope (handoff). The motor kit's other plates are listed with it.
import {V17_PLATES} from './parts';

export const ASSETS: string[] = [...new Set(V17_PLATES)];
