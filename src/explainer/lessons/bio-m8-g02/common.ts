// M8 G02 (Biology practice: disease prevention and technology evaluation): measured lesson lookups and the three
// worded questions (stem, data table and demands as an exam prints them, with marks; narration never says marks).
// Lesson key m8g02b (confirmed against the design's "Scene list and build ids"; m8g02 is chem-m8-g02's).
import lesson from '../../../../docs/production/claude-pm/lessons/m8g02b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import type {QBlock, TblSpec} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 G02 (Biology) scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

const b = (text: string, para = false, weight = 500): QBlock => ({text, at: -1000, para, weight});

// ---------- Q1: a screening kit campaign ----------
export const Q1_STEM = [b('Free bowel cancer screening kits are mailed to people aged 50 to 74. Each kit tests a small stool sample for hidden blood. A state health service ran a two-year campaign to increase the number of kits returned. Region A received the campaign (letters from local doctors and text-message reminders). Region B, similar in age structure and income, received the kits only.')];
export const Q1_DEM = [b('Evaluate the effectiveness of this campaign as a disease-prevention method, using the data. (5 marks)', false, 600)];
const Q1_HEAD = ['Region', 'Kits returned before the campaign (%)', 'Kits returned after two years (%)'];
const Q1_ROWS = [['A (campaign)', '38', '47'], ['B (kits only)', '38', '40']];
export const Q1_T_FULL: TblSpec = {cols: [330, 410, 410], head: Q1_HEAD, rows: Q1_ROWS};
export const Q1_T_COL: TblSpec = {cols: [200, 218, 218], head: Q1_HEAD, rows: Q1_ROWS};

// ---------- Q2: a gene therapy ----------
export const Q2_STEM = [b('An inherited retinal disease is caused by two faulty alleles of the RPE65 gene. Without the RPE65 protein, the retina cannot keep regenerating its light-detecting pigment, and vision worsens over time, often to blindness. In a trial, a modified, harmless virus carrying working copies of RPE65 was injected under the retina of 20 participants. 10 participants were not treated (control group).')];
export const Q2_DEM = [
	b('(a) Explain how this gene therapy could improve vision. (2 marks)', false, 600),
	b('(b) Evaluate this gene therapy as a method of preventing vision loss. (4 marks)', true, 600),
];
const Q2_HEAD = ['Group', 'Number', 'Able to navigate a test course in the dimmest light after one year'];
const Q2_ROWS = [['Treated', '20', '13'], ['Not treated', '10', '0']];
export const Q2_T_FULL: TblSpec = {cols: [260, 200, 690], head: Q2_HEAD, rows: Q2_ROWS};
export const Q2_T_COL: TblSpec = {cols: [170, 120, 346], head: Q2_HEAD, rows: Q2_ROWS};
export const Q2_CHIP = 'illustrative data, based on the pattern of a published trial';

// ---------- Q3: a hearing technology ----------
export const Q3_STEM = [b('A hearing clinic fits cochlear implants for adults with severe to profound sensorineural hearing loss. Its annual report states: ‘Our program is a success: we fitted 30 implants this year, up from 18 last year.’')];
export const Q3_WAIT = [b('Average wait from referral to surgery: 9 months.')];
export const Q3_DEM = [
	b('(a) Explain why the number of implants fitted is not a valid measure of the program’s effectiveness, and identify a more meaningful outcome measure from the data. (2 marks)', false, 600),
	b('(b) Evaluate the effectiveness of cochlear implants for these adults, using the data and one access consideration. (5 marks)', true, 600),
];
const Q3_HEAD = ['Measure (30 adults)', 'Before (best hearing aids)', '12 months after implant'];
const Q3_ROWS = [['Words correctly repeated from sentences in quiet (average %)', '15', '70'], ['Words correctly repeated from sentences with background noise (average %)', '5', '35'], ['Adults using their implant every day', 'not applicable', '28 of 30']];
export const Q3_T_FULL: TblSpec = {cols: [650, 250, 250], head: Q3_HEAD, rows: Q3_ROWS};
export const Q3_T_COL: TblSpec = {cols: [330, 150, 156], head: Q3_HEAD, rows: [['Words correctly repeated\nfrom sentences in quiet\n(average %)', '15', '70'], ['Words correctly repeated\nfrom sentences with\nbackground noise (average %)', '5', '35'], ['Adults using their\nimplant every day', 'not\napplicable', '28 of 30']]};
