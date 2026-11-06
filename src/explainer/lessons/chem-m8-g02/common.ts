// M8 G02 (Chemistry practice: calibration and water-analysis data): measured lesson lookups and the three worded
// questions (stem, data and demands as an exam prints them; no marks in learner copy). Lesson key m8g02 (confirmed
// against the design's "Scene list and build ids"; bio-m8-g02 is m8g02b).
import lesson from '../../../../docs/production/claude-pm/lessons/m8g02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import type {QBlock, TblSpec} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 G02 (Chemistry) scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

const b = (text: string, para = false, weight = 500): QBlock => ({text, at: -1000, para, weight});

// ---------- Q1: copper by AAS, with a dilution ----------
export const Q1_STEM = [b('The concentration of copper in mine drainage water was determined by atomic absorption spectroscopy (AAS). The absorbance of a set of copper standards was measured.')];
export const Q1_DATA = [b('The undiluted drainage water gave an absorbance of 0.620. A 10.00 mL sample of the drainage water was then diluted to 50.00 mL in a volumetric flask. The diluted solution gave an absorbance of 0.142.')];
export const Q1_DEM = [
	b('(a) Construct a calibration graph from the data.', false, 600),
	b('(b) Explain why the sample was diluted before its concentration was determined.', true, 600),
	b('(c) Calculate the concentration of copper in the drainage water, in mg L⁻¹.', true, 600),
];
export const CU_C = [0, 1, 2, 3, 4];
export const CU_A = [0, 0.101, 0.198, 0.302, 0.399];
export const CU_SLOPE = 0.0999, CU_ICPT = 0.0002;
const Q1_HEAD = ['Copper (mg L⁻¹)', '0.00', '1.00', '2.00', '3.00', '4.00'];
const Q1_ROW = [['Absorbance', '0.000', '0.101', '0.198', '0.302', '0.399']];
export const Q1_T_FULL: TblSpec = {cols: [300, 150, 150, 150, 150, 150], head: Q1_HEAD, rows: Q1_ROW};
export const Q1_T_COL: TblSpec = {cols: [186, 90, 90, 90, 90, 90], head: Q1_HEAD, rows: Q1_ROW};

// ---------- Q2: iron by colourimetry, a line with an intercept ----------
export const Q2_STEM = [b('The concentration of iron in bore water was determined by colourimetry. A reagent that forms an orange-red complex with iron was added, in the same amount, to each standard and to the sample. The colourimeter was set to zero with distilled water.')];
export const Q2_DATA = [b('The bore water sample gave an absorbance of 0.290.')];
export const Q2_DEM = [
	b('(a) Explain why the 0.00 mg L⁻¹ standard has an absorbance of 0.032.', false, 600),
	b('(b) Calculate the concentration of iron in the bore water.', true, 600),
];
export const FE_C = [0, 0.5, 1, 1.5, 2];
export const FE_A = [0.032, 0.131, 0.231, 0.33, 0.43];
export const FE_SLOPE = 0.199, FE_ICPT = 0.032;
export const FE_EQ = 'A = 0.199c + 0.032 (c in mg L⁻¹)';

// ---------- Q3: lead in a school bubbler ----------
export const Q3_STEM = [b('A school tested the lead concentration of water from one drinking bubbler by atomic absorption spectroscopy. The method’s validated quantification limit is 0.001 mg L⁻¹.')];
export const Q3_GUIDE = [b('Australian Drinking Water Guidelines health guideline value for lead: 0.005 mg L⁻¹.')];
export const Q3_DEM = [b('The school claims that the water is safe to drink because Sample 2 is below the guideline value. Evaluate this claim.', false, 600)];
const Q3_HEAD = ['Sample', 'Lead (mg L⁻¹)'];
export const Q3_T_FULL: TblSpec = {cols: [880, 270], head: Q3_HEAD, rows: [['Sample 1: first draw at 8 am, after the water stood in the pipes overnight', '0.012'], ['Sample 2: after the bubbler had run for 2 minutes', '0.002']]};
export const Q3_T_COL: TblSpec = {cols: [470, 166], head: Q3_HEAD, rows: [['Sample 1: first draw at 8 am, after\nthe water stood in the pipes overnight', '0.012'], ['Sample 2: after the bubbler had\nrun for 2 minutes', '0.002']]};
