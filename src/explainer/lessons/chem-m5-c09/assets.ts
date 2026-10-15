/**
 * C9 plates and process clips. README for Claude:
 * - HAVE9 lists files that exist in public/assets/. A file not in HAVE9 is NOT in ASSETS (the slim bundler fails on
 *   missing files) and the scene draws the coded stand-in instead (a coded sealed tube whose brown tint fades in).
 * - Painted pair (aligned, 1200 x 1884, alpha box 310,156 to 890,1732): the sealed NO2/N2O4 tube in a short beaker,
 *   pale and deep brown. Used wherever the tube is still.
 * - Process clips (1280 x 720, 24 fps, 5.04 s): each plate pair composited centred on a white 1920 x 1080 canvas at
 *   scale 960 / 1884 (plate top-left at 654.27, 60), then animated. The heating clip goes pale to brown, with almost all
 *   of the darkening in its last 1.7 s; the cooling clip is the same clip reversed (brown to pale, fading in its first
 *   1.7 s). The clip's first and last frames equal the plates, so No2Tube places the clip box so the tube sits exactly
 *   where the plate would. Used where the tube changes colour on screen (hook, 3, 4a, 5b, 7b).
 * - Reused: the C4b painted sealed tube under the coded H2 + I2 tube (attempt and feedback), via GasTube.
 */
import {HAVE as HAVE4B, SEALED_TUBE} from '../chem-m5-c04b/assets';

const A = 'assets/chemistry/';
const C = 'assets/clips/';
export const TUBE_PALE = A + 'c9-no2-tube-pale-v1.png';
export const TUBE_BROWN = A + 'c9-no2-tube-brown-v1.png';
export const CLIP_HEAT = C + 'c9-no2-tube-heating-v1.mp4';
export const CLIP_COOL = C + 'c9-no2-tube-cooling-reversed-v1.mp4';

export const HAVE9 = new Set<string>([TUBE_PALE, TUBE_BROWN, CLIP_HEAT, CLIP_COOL]);
export const havePlates = () => HAVE9.has(TUBE_PALE) && HAVE9.has(TUBE_BROWN);
export const haveClip = (src: string) => HAVE9.has(src) && havePlates();
export const ASSETS: string[] = [TUBE_PALE, TUBE_BROWN, CLIP_HEAT, CLIP_COOL].filter(a => HAVE9.has(a)).concat([SEALED_TUBE].filter(a => HAVE4B.has(a)));
