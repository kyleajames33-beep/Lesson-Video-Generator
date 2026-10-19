/**
 * M6 B02 plates. README for Claude:
 * - Plates and alpha boxes live in ../bio-m6-b01/assets.ts (measured 19 Oct, PIL alpha > 20). Brief 82 supplied the
 *   granite outcrop, mouldy peanuts and UV cabinet; brief 48 the UV-on-skin, X-ray machine, shielded source, virus
 *   particle and red cells. The "chemicals" thumbnail is the Chemistry M6 beaker plate (no flask plate exists in
 *   Biology; a coded flask would break the painted-objects rule). The sun thumbnail is the UV-on-skin plate clipped to
 *   the sun's own box (never stretched).
 */
import {ASSETS_B02} from '../bio-m6-b01/assets';
import {BEAKER} from './parts';

export const ASSETS: string[] = [...ASSETS_B02, BEAKER.src];
