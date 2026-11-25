// Plates used by phys-y12-m5-v22, drawn at native aspect only: the Earth and satellite (the orbit raise, the
// algebra stage, the burn, the attempts, the handoff), the steel ball (the thrown-ball inset), the Sun and comet
// (the ellipse), plus last time's plates for the opening frame.
import {V21_PLATES} from '../phys-y12-m5-v21/parts';
import {V22_PLATES} from './parts';

export const ASSETS: string[] = [...new Set([...V22_PLATES, ...V21_PLATES])];
