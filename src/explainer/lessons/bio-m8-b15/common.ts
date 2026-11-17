// B8-15 (hearing loss technologies): measured lesson lookups and the two worded questions (stem and demands as an exam
// prints them). Lesson key m8b15.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b15/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-15 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: a stuck stapes ----------
export const Q1_STEM = [blk('A 45-year-old has otosclerosis: bone growth has fixed the stapes so that it cannot vibrate. Tests show that the cochlea and auditory nerve work normally.')];
export const Q1_DEM = [
	blk('(a) Identify the type of hearing loss. (1 mark)', false, 600),
	blk('(b) Explain why a bone conduction implant could help this person, and why a cochlear implant would not be suitable. (3 marks)', true, 600),
];

// ---------- Q2: factory noise ----------
export const Q2_STEM = [blk('A 60-year-old worked for decades in loud factories and now has profound sensorineural hearing loss in both ears. Powerful hearing aids gave almost no benefit. Tests show that both auditory nerves work.')];
export const Q2_DEM = [blk('Evaluate the use of a cochlear implant for this person. (5 marks)', false, 600)];
