// S06 "Graphs and data questions": shared data, plates, the worked card and graph geometry.
// The worked card (E. coli resistance to antibiotic K, 2010 to 2020, four demands, 8 marks) is full width in scene 3
// with the blank grid; from scene 4 a strip keeps the table and only the current demand (stripSpec). The main grid
// (20 by 15 squares; x 2010 to 2020 at 1 year per 2 squares, y 0 to 30% at 2% per square) sits under the strip, the
// answer box under the grid and the side column (ZONE.side) holds the scale trap, the TAILS rail, the trend card, the
// part (d) inset and the column mini.
import lesson from '../../../../docs/production/claude-pm/lessons/skills06/measured/lesson.json';
import {ZONE, lessonHelpers, mkPlate} from './kit';
import type {CardSpec} from './kit';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills06');

// ---------- plates (alpha boxes measured with PIL, alpha > 20, 30 Oct) ----------
const C = 'assets/chemistry/', B = 'assets/biology/';
/** Rod and coccus plate; the rod-only box (as b03's `rod`), drawn clipped so only the rod shows. */
export const ROD = mkPlate(B + 'm7-bacterium-rod-coccus-v1.png', [2000, 2000], [190, 690, 1265, 1470]);
export const MARBLE = mkPlate(C + 'm6-marble-chips-acid-v1.png', [2000, 2000], [347, 201, 1653, 1800]);
export const DISCPLATE = mkPlate(B + 'm7-agar-antibiotic-after-v1.png', [2000, 2000], [203, 201, 1796, 1800]);

// ---------- the worked question ----------
export const YEARS = [2010, 2012, 2014, 2017, 2020];
export const PCT = [4, 7, 10, 15, 19];
/** Least-squares line (x = years since 2010): slope 1.52 per year, intercept 4.0. */
export const fit = (yr: number) => 4.0 + 1.52 * (yr - 2010);
const STEM = 'A hospital laboratory tested samples of the bacterium Escherichia coli from patients for resistance to antibiotic K. The table shows the percentage of samples that were resistant in five different years.';
const TABLE = {head: ['Year', '2010', '2012', '2014', '2017', '2020'], rows: [['Samples resistant to antibiotic K (%)', '4', '7', '10', '15', '19']], colW: [470, 120, 120, 120, 120, 120]};
export const DEMANDS = [
	{text: '(a) Plot the data as a line graph on the grid provided, and draw a line of best fit.', marks: '3 marks'},
	{text: '(b) Describe the trend shown by the data.', marks: '2 marks'},
	{text: '(c) Use your graph to estimate the percentage of samples resistant in 2016.', marks: '1 mark'},
	{text: '(d) A news report used this graph to predict that about 50% of samples will be resistant to antibiotic K in 2040. Assess this prediction.', marks: '2 marks'},
];
/** The full card (scene 3). t = [stem, table, a, b, c, d]. */
export const fullSpec = (t: number[] = [-100, -100, -100, -100, -100, -100]): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 25, slotW: 230, note: 'example data',
	items: [
		{text: STEM, at: t[0]},
		{table: TABLE, at: t[1], gap: 0.4},
		...DEMANDS.map((d, i) => ({text: d.text, marks: d.marks, at: t[2 + i], gap: i ? 0.2 : 0.45})),
	],
});
export const STRIP_S = 0.8;
/** The strip: the table and one demand (part index 0 to 3). */
export const stripSpec = (part: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 25, note: 'example data',
	items: [{table: TABLE, at: -100}, {text: DEMANDS[part].text, marks: DEMANDS[part].marks, at: -100, gap: 0.4}],
});

// ---------- the main grid ----------
export type Grid = {x: number; y: number; s: number; nx: number; ny: number};
export const MAIN: Grid = {x: 450, y: 330, s: 26, nx: 20, ny: 15};
export const gxM = (yr: number) => MAIN.x + (yr - 2010) * 2 * MAIN.s;
export const gyM = (p: number) => MAIN.y + MAIN.ny * MAIN.s - (p / 2) * MAIN.s;
export const PTS: [number, number][] = YEARS.map((y, i) => [gxM(y), gyM(PCT[i])]);
/** The answer box under the main grid. */
export const ABOX = {x: ZONE.box.x, y: 796, w: ZONE.box.w, lines: 5, lh: 34, size: 24, margin: 80};
export const ANS = {
	b: 'Increased steadily, from 4% in 2010 to 19% in 2020 (about 1.5 percentage points a year).',
	c: 'About 13% (read from the line of best fit).',
	d: 'Weak: 2040 is 20 years beyond the data; it assumes the same rate continues, but new drugs, prescribing or infection control could change the trend.',
};
export const SX = ZONE.side.x, SW = ZONE.side.w;
