// M8 C08 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 6 Nov (PIL, alpha > 20).
// - One rack system: the bromine water pair v2 (brief 118 item 2, edited from the dichromate plate), the carbonate pair
//   and the dichromate pair are all 2000 x 2000 with the same rack, tube and liquid level; drawn on the shared box
//   (388, 219, 1610, 1781) so each pair cross-fades in place and the three sit side by side at one scale. The design names
//   bromine v1 (a different, wider rack); v2 is the asset brief's matched alternative, used so the three-test row keeps one
//   rack (design rule: never cross-fade between different rack sets). Tube mouth near (1000, 232); liquid centre near
//   (1000, 1350); rack foot y 1780.
// - Limewater pair (2000): union box (520, 200, 1480, 1800); the free end of the bent delivery tube near (540, 262).
// - Dropper bottle (2000): box (746, 219, 1254, 1760); the blank cream label is centred near (1000, 1200).
// - Fume cupboard (2000): box (312, 200, 1688, 1800). Ester fruit (2000): box (200, 460, 1798, 1539).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c08/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';

export type {PDef};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C08 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const NB = ' ';

const N2: [number, number] = [2000, 2000];
const RK: [number, number, number, number] = [388, 219, 1610, 1781];
export const BR = {orange: mk('m8-bromine-water-orange-v2.png', N2, RK), clear: mk('m8-bromine-water-clear-v2.png', N2, RK)};
export const CARB = {before: mk('m8-carbonate-tube-before-v1.png', N2, RK), fizz: mk('m8-carbonate-tube-fizz-v1.png', N2, RK)};
export const DICH = {orange: mk('m8-dichromate-orange-v1.png', N2, RK), green: mk('m8-dichromate-green-v1.png', N2, RK)};
export const RK_A = {mouth: [1000, 232] as [number, number], liquid: [1000, 1350] as [number, number], foot: 1780};
const LW: [number, number, number, number] = [520, 200, 1480, 1800];
export const LIME = {clear: mk('m6-limewater-clear-v1.png', N2, LW), milky: mk('m6-limewater-milky-v1.png', N2, LW)};
export const LIME_A = {inlet: [540, 262] as [number, number]};
export const DBOT = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
export const DBOT_A = {label: [1000, 1200] as [number, number]};
export const FUME = mk('m7-fume-cupboard-v1.png', N2, [312, 200, 1688, 1800]);
export const FRUIT = mk('m7-ester-fruit-v1.png', N2, [200, 460, 1798, 1539]);

export const PLATES: PDef[] = [BR.orange, BR.clear, CARB.before, CARB.fizz, DICH.orange, DICH.green, LIME.clear, LIME.milky, DBOT, FUME, FRUIT];
