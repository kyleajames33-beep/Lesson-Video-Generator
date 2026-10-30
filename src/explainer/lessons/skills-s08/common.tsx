// S08 "Extended responses": shared pieces. The worked card (Region R measles data, two verbs, a constraint and a
// stimulus table, 7 marks) is full width in scenes 3 and 4 and shrinks to CARD_S for the walkthrough (scenes 5 to 9).
// The answer box (ABOX) sits under it from scene 3 (the full card lies over its top until scene 5 shrinks the card);
// the demand ticks column sits at the far left (DX), and the right column (RX) holds the plan card, the PEEL rail
// and the source chips. Paragraph texts are the design's model answer (Revision 2), word for word.
import lesson from '../../../../docs/production/claude-pm/lessons/skills08/measured/lesson.json';
import {CardSpec, AnsSpec, ZONE, lessonHelpers, mkPlate} from './kit';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills08');

// ---------- plates ----------
/** chem-m7-c12's hard-water soap tube (alpha box as chem-m7-c12 measured it). */
export const SOAP = mkPlate('assets/chemistry/m7-soap-tube-hard-v1.png', [2000, 2000], [701, 250, 1299, 1749]);

// ---------- layout ----------
export const CARD_S = 0.6;
export const RX = 1490, RW = 390;
export const DX = 44, DY = 470, DW = 262;
export const ABOX: AnsSpec = {x: 330, y: 424, w: 1130, lines: 14, lh: 39, size: 26, margin: 72};

// ---------- the worked card ----------
export const workSpec = (t: number[] = [-100, -100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', size: 25, note: 'example data',
	items: [
		{text: 'Region R introduced a two-dose measles vaccine many years ago. Two doses are about 97% effective at preventing measles. Health authorities aim for at least 95% two-dose coverage to stop measles spreading through a population. Several rural clinics closed in 2013. A school catch-up vaccination program began in 2018.', at: t[0]},
		{table: {head: ['Year', '2010', '2012', '2014', '2016', '2018', '2020', '2022'], rows: [['Two-dose coverage (%)', '96', '95', '91', '87', '89', '94', '95'], ['Measles cases', '12', '8', '40', '310', '180', '25', '6']], colW: [330, 140, 140, 140, 140, 140, 140, 140]}, at: t[1], gap: 0.5},
		{text: 'Analyse the data to explain the changes in measles cases in Region R from 2010 to 2022. In your answer, refer to immunity in individuals and in the population.', at: t[2], gap: 0.55},
		{text: 'Assess the effectiveness of the catch-up program.', marks: '7 marks', at: t[3], marksAt, gap: 0.2},
	],
});
export const WORK = workSpec();

// ---------- the model answer (design, Revision 2) ----------
export const OPENING = 'The catch-up program probably contributed to the fall in cases: after it began, coverage returned to the 95% target and cases fell from 180 to 6. However, cases were already falling before 2018, so these data can\'t show how much of the fall it caused.';
export const P1 = ['Each dose presents measles antigens without causing disease, so the immune system makes memory B and T cells.', 'On later exposure, the secondary response is fast and strong enough to stop the infection, so a vaccinated person is very unlikely to catch or pass on measles.'];
export const P2 = ['When coverage is at or near the 95% target, most people are immune, so an infected person rarely meets someone susceptible, and chains of transmission die out.', 'This matches 2010 to 2012, when coverage was 95 to 96% and cases stayed low (12 and 8).'];
export const P3 = ['After the clinics closed in 2013, coverage fell.', 'It fell from 95% to 87% by 2016, and cases rose from 8 to 310.', 'With fewer people immune, an infected person met more susceptible people, so transmission chains continued.', 'So falling coverage explains the 2016 outbreak.'];
export const P4 = ['Cases had already fallen from 310 to 180 between 2016 and 2018, before the program began.', 'After it began, coverage rose from 89% to 95%, back to the target, and cases fell from 180 to 6.', 'This fits a program that helped, because higher coverage leaves fewer susceptible people.', 'However, these data show an association and can\'t separate the program\'s effect from other changes.'];
export const CLOSING = 'Overall, the program probably contributed to the fall, because cases dropped to 6 as coverage returned to the 95% target, but the earlier decline means these data can\'t show how large its effect was.';
export const WEAK = ['Measles cases went up and then down.', 'Vaccines contain antigens, which make antibodies so people don\'t get sick.', 'When fewer people were vaccinated, more people got measles.', 'So the catch-up program was good because vaccines are important.'];

/** The four demands (column labels). */
export const DEMANDS = ['explain change (analyse data)', 'individual + population immunity', 'assess the program', 'use the data'];
