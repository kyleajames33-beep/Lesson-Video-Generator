// Y11 Chem M1 V10 (line spectra and energy levels) shared pieces: measured lesson lookups, response holds, plates and
// the hydrogen numbers. Alpha boxes measured 20 Nov 2026 (PIL, alpha > 20) from the real files in public/assets.
// - Hydrogen discharge tube, lit (1942 x 809): box (64, 255, 1874, 608).
// - Filament lamp, lit (1536 x 1024): box (462, 38, 1281, 988) (includes the painted glow).
// - Bunsen burner with a sodium flame (2000 square): box (665, 179, 1340, 1828).
// - Hand spectroscope (1774 x 887): box (215, 220, 1593, 662).
import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v10/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mkp} from '../chem-y11-m1-v01/common';
import type {PDef} from '../chem-y11-m1-v01/common';

export type {PDef};
const C = 'assets/chemistry/';
type SceneL = CueScene & {durationInFrames: number; holdSeconds?: number; voiceover: {endFrame?: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('Y11 M1 V10 scene not found ' + id);
	return s;
};
export const hold = (id: string) => {
	const s = sc(id);
	const end = s.voiceover.endFrame ?? s.durationInFrames;
	return {startFrame: end, endFrame: Math.min(s.durationInFrames, end + Math.round((s.holdSeconds ?? 0) * 30))};
};
export const dur = (id: string) => sc(id).durationInFrames;

export const TUBE = mkp(C + 'y11c-hydrogen-discharge-tube-lit-v1.png', [1942, 809], [64, 255, 1874, 608]);
export const LAMP = mkp(C + 'y11c-filament-lamp-lit-v1.png', [1536, 1024], [462, 38, 1281, 988]);
export const FLAME = mkp(C + 'm8-flame-na-yellow-v2.png', [2000, 2000], [665, 179, 1340, 1828]);
export const SCOPE = mkp(C + 'y11c-hand-spectroscope-v1.png', [1774, 887], [215, 220, 1593, 662]);

export const PLATES: PDef[] = [TUBE, LAMP, FLAME, SCOPE];

// ---------- hydrogen (author note c): E_n = -13.6 eV / n^2 ----------
/** Height fraction of level n above level 1, on the true scale (n = infinity is 1). */
export const levelFrac = (n: number) => 1 - 1 / (n * n);
/** Visible hydrogen lines: drops to level 2, wavelengths from 1239.84 / E nm. */
export const H_LINES = [
	{from: 3, nm: 656, name: 'red'},
	{from: 4, nm: 486, name: 'blue-green'},
	{from: 5, nm: 434, name: 'blue'},
	{from: 6, nm: 410, name: 'violet'},
] as const;
/** Helium's brighter visible lines (nm) and sodium's strong doublet; coded patterns for the fingerprint scene. */
export const HE_LINES = [668, 588, 502, 492, 471, 447];
export const NA_LINES = [589.6, 589.0];
