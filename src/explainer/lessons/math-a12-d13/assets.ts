import {DRONE, GROUND} from './parts';
import {ASSETS as D12_ASSETS} from '../math-a12-d12/assets';

// Reused Physics drone and ground strip (root decision 19); d12's plates for its final frame (frame 0 here).
export const ASSETS: string[] = [DRONE.src, GROUND.src, ...D12_ASSETS];
