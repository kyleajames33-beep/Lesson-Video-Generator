// M8 G01 (Biology practice: epidemiology rates, a graph and judging a study): measured lesson lookups and the three
// worded questions (stem, data table and demands as an exam prints them). Lesson key m8g01b (m8g01 is chem-m8-g01's).
import lesson from '../../../../docs/production/claude-pm/lessons/m8g01b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {cues} from '../../cues';
import type {QBlock, TblSpec} from './board';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 G01 (Biology) scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
export const K = <Q extends string>(id: string, map: Record<Q, string | [string, number]>) => cues(sc(id), map);

const b = (text: string, para = false, weight = 500): QBlock => ({text, at: -1000, para, weight});

// ---------- Q1: two regions ----------
export const Q1_STEM = [b('Health authorities in two regions recorded type 2 diabetes for one year (2024).')];
export const Q1_DEM = [
	b('(a) Calculate the incidence rate and the mortality rate of type 2 diabetes per 100 000 people per year for each region. (4 marks)', false, 600),
	b('(b) A news report states: ‘Region P has a worse type 2 diabetes problem, because it had more than six times as many new cases.’ Evaluate this claim. (3 marks)', true, 600),
];
const Q1_HEAD = ['Region', 'Population', 'New diagnoses of type 2 diabetes', 'Deaths from type 2 diabetes'];
const Q1_ROWS = [['P', '1 200 000', '6600', '300'], ['Q', '150 000', '1050', '54']];
export const Q1_T_FULL: TblSpec = {cols: [150, 260, 400, 340], head: Q1_HEAD, rows: Q1_ROWS};
export const Q1_T_COL: TblSpec = {cols: [92, 156, 200, 188], head: Q1_HEAD, rows: Q1_ROWS};

// ---------- Q2: melanoma rates ----------
export const Q2_STEM = [b('The table shows age-standardised rates of melanoma of the skin in Australia.')];
export const Q2_DEM = [
	b('(a) Construct a line graph of incidence and mortality on the same set of axes. (4 marks)', false, 600),
	b('(b) Describe the trend in each rate, and explain why the incidence and mortality rates are so different. (3 marks)', true, 600),
];
const Q2_HEAD = ['Year', 'Incidence (new cases per 100 000 people per year)', 'Mortality (deaths per 100 000 people per year)'];
export const Q2_DATA: [number, number, number][] = [[1985, 38, 5.5], [1995, 45, 6.0], [2005, 50, 6.1], [2015, 52, 6.0], [2020, 50, 4.9]];
const Q2_ROWS = Q2_DATA.map(([y, i, m]) => [`${y}`, `${i}`, m.toFixed(1)]);
export const Q2_T_FULL: TblSpec = {cols: [200, 475, 475], head: Q2_HEAD, rows: Q2_ROWS};
export const Q2_T_COL: TblSpec = {cols: [116, 260, 260], head: Q2_HEAD, rows: Q2_ROWS};
export const Q2_CHIP = 'illustrative data, based on the pattern of Australian statistics';

// ---------- Q3: a survey and a claim ----------
export const Q3_STEM = [b('In 2025, an online survey asked 2000 adults living in one city two questions: ‘Do you drink an energy drink every day?’ and ‘Are you currently living with diagnosed type 2 diabetes?’')];
export const Q3_CLAIM = [b('A health website used these results to claim: ‘Energy drinks cause type 2 diabetes.’')];
export const Q3_DEM = [
	b('(a) Calculate the prevalence of diagnosed type 2 diabetes in each group, as a percentage. (2 marks)', false, 600),
	b('(b) Evaluate the method of this study and the website’s claim. (5 marks)', true, 600),
];
const Q3_HEAD = ['Group', 'Number of adults', 'Number with diagnosed type 2 diabetes'];
export const Q3_T_FULL: TblSpec = {cols: [640, 230, 280], head: Q3_HEAD, rows: [['Drink an energy drink every day', '400', '36'], ['Do not drink an energy drink every day', '1600', '64']]};
export const Q3_T_COL: TblSpec = {cols: [300, 150, 186], head: Q3_HEAD, rows: [['Drink an energy drink\nevery day', '400', '36'], ['Do not drink an energy\ndrink every day', '1600', '64']]};
