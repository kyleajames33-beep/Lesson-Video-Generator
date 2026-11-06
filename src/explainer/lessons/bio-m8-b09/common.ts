// B8-09 (how cancer begins and spreads): measured lesson lookups and the two worded questions (stem and demands as an
// exam prints them). Lesson key m8b09.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b09/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-09 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- Q1: one copy each ----------
export const Q1_STEM = [
	blk('Cell A has an activating mutation that keeps one copy of a proto-oncogene switched on.'),
	blk('Cell B has a mutation that stops one copy of a tumour suppressor gene working; one normal copy is enough for that gene’s function.', true),
	blk('All other copies of these genes are normal.', true),
];
export const Q1_DEM = [blk('Predict which cell is more likely to divide without a growth signal. Explain your prediction. (3 marks)', true, 600)];

// ---------- Q2: HPV and the cervix ----------
export const Q2_STEM = [
	blk('Some types of human papillomavirus (HPV) infect cells lining the cervix. The viral protein E6 causes the infected cell to destroy its p53 protein.'),
	blk('A screening test later finds a growth of abnormal cells that has not crossed the basement membrane.', true),
];
export const Q2_DEM = [
	blk('(a) Explain how this infection can increase the risk of cancer. (3 marks)', false, 600),
	blk('(b) Explain why this growth is unlikely to have spread to other organs. (2 marks)', true, 600),
];
