// B8-10 (incidence, prevalence and mortality): measured lesson lookups, the AIHW cancer mortality series for the hook and
// scene 8, and the two worded questions (stem, tables and demands as an exam prints them). Lesson key m8b10.
import lesson from '../../../../docs/production/claude-pm/lessons/m8b10/measured/lesson.json';
import aihw from '../../../../docs/production/claude-pm/assets/brief118-aihw-cancer-mortality.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import {blk} from '../bio-m8-g01/board';
import type {TblSpec} from '../bio-m8-g01/board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('B8-10 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

// ---------- AIHW, Cancer data in Australia 2025, Table S2a.1 (persons, all cancers; 2024 and 2025 projected) ----------
type Row = {year: number; deaths: number; crudeMortalityPer100000: number; ageStandardisedMortalityPer100000_2001: number};
const ROWS = (aihw as unknown as {annualRows: Row[]}).annualRows;
export const DEATHS: [number, number][] = ROWS.map(r => [r.year, r.deaths]);
export const ASR: [number, number][] = ROWS.map(r => [r.year, r.ageStandardisedMortalityPer100000_2001]);
export const CRUDE: [number, number][] = ROWS.map(r => [r.year, r.crudeMortalityPer100000]);
export const AIHW_SRC = 'AIHW, Cancer data in Australia 2025, Table S2a.1 (persons, all cancers)';

// ---------- Q1: two regions ----------
export const Q1_STEM = [blk('Two regions recorded new cases of lung cancer in 2024. Region Y has a much higher proportion of people aged 65 and over than Region X.')];
export const Q1_TBL: TblSpec = {cols: [430, 270, 270], head: ['Region', 'X', 'Y'], rows: [['Population', '1,200,000', '300,000'], ['New lung cancer\ncases in 2024', '540', '180']]};
export const Q1_DEM = [
	blk('(a) Calculate the incidence of lung cancer in each region, per 100,000 people per year. (2 marks)', false, 600),
	blk('(b) Explain why these rates cannot show which region’s people are at greater risk of lung cancer. (2 marks)', true, 600),
];

// ---------- Q2: a three-measure table ----------
export const Q2_STEM = [blk('The table shows data for a non-infectious disease in Australia (teaching data).')];
export const Q2_TBL: TblSpec = {cols: [520, 150, 150, 150], head: ['Year', '2005', '2015', '2025'], rows: [
	['Incidence (new cases per\n100,000 per year)', '60', '61', '59'],
	['Mortality (deaths per\n100,000 per year)', '30', '22', '15'],
	['Prevalence (people living\nwith the disease\nper 100,000)', '300', '420', '540'],
]};
/** The same table set narrow for the feedback column. */
export const Q2_TBL_N: TblSpec = {cols: [360, 90, 90, 90], head: ['Year', '2005', '2015', '2025'], rows: [
	['Incidence (new cases\nper 100,000\nper year)', '60', '61', '59'],
	['Mortality (deaths\nper 100,000\nper year)', '30', '22', '15'],
	['Prevalence (people\nliving with the\ndisease per 100,000)', '300', '420', '540'],
]};
export const Q2_DEM = [
	blk('(a) Describe the trend in each measure from 2005 to 2025. (3 marks)', false, 600),
	blk('(b) Suggest an explanation, consistent with the data, for the rise in prevalence. (2 marks)', true, 600),
];
