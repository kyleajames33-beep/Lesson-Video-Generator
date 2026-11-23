# math-s11-d10: How can a graph or infographic inform us, or mislead us?

Maths Standard pre-design pack (Year 11, Data analysis), 24 November 2026, written by Claude (designer of record), from route inputs 14 (`../../../programme/maths-standard-route-inputs-14.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Data analysis, group "Display and interpret grouped and ungrouped data", outcome MST-11-08:

- `ci2c2bc777`: Analyse a statistical infographic and justify the choice of graphical representations used for the relevant dataset [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8). Site coverage: missing (MSY-42).
- `ci9c22fcc3`: Interpret and consider limitations of graphical representations to make conclusions and predictions. Site coverage: partial (lesson12 notes scales; limitations are not taught as a method).
- `ciebdc8d60`: Explain why a given graphical representation can lead to a misinterpretation of data. Site coverage: partial (lesson12 SA 3: two unemployment graphs).

**Entry knowledge:** math-s11-d07 (the graph chooser; columns from zero); math-s11-d08 (reading sector graphs, divided bars, line graphs); math-s11-d04 (observational studies cannot show cause; honest claims); math-s11-d09 (shape).

**Prior video:** math-s11-d09. **Start:** d09's final frame (the tournament board with the poster "Sleep and screens: our Year 11 survey": "35% get 8+ hours", a sector graph of where phones charge, a pictogram row of 20 phones with 12 lit, a column graph of average sleep with its axis from 6; chips "Is this poster fair?", "Next: infographics and misleading graphs", "?").

**Stop:** infographic ("a display that combines graphs, numbers, icons and short text to tell a story from data quickly"); analysing each tile (what data, which graph, why it suits); justifying a choice; misleading features: a truncated axis, scaled icons (area grows as the square), 3D sectors, uneven scales, a cherry-picked time range, a percentage without its sample size; limitations for conclusions and predictions (sample size and place, one night, averages hiding spread, association not cause, predicting beyond the data); a fair conclusion; fixing the poster. Not: calculating means (d11); spread (d13).

**Next:** math-s11-d11: the sleep dot plot of the 20 values (large, blue) with the calculator `ma12-calculator-v1.png` at the right and the alarm clock small at the left; chips "One number for a typical night?", "Next: mean, median and mode", "?".

## 2. Site order, sections and worked examples

`year11/data-analysis/lesson12.sa.html`: key ideas ("Class intervals and display scales shape how data appears"); top-3 list ("Name THREE ways a graph could be drawn to deliberately mislead the reader"); SA 3 (Graph A, 0 to 10%; Graph B, 4 to 6% with thick bars; ethical responsibility, with examples on climate data, COVID graphs and political polling).

No lesson analyses an infographic (crosswalk: missing). This video teaches it, and limitations as a method, from the syllabus (ruling 3; MSY-42). Site decisions: SA 3's truncated-axis idea is used on the strand's own data (scene 3); its climate, COVID and polling examples are not used (sensitive and political for a Year 11 page; ruling 69 pattern; MSY-42).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| 8 hours or more | 7 of 20 | 35% |
| Phone location shares | 12, 5, 2, 1 of 20 | 60%, 25%, 10%, 5% |
| Average sleep (poster) | bedroom 79 ÷ 12 = 6.58; elsewhere 65 ÷ 8 = 8.125 (d14) | shown as 6.6 h and 8.1 h |
| Axis from 6 | heights 0.6 and 2.1 | looks 3.5 times as tall |
| Axis from 0 | 8.1 ÷ 6.6 | 1.23: about 23% more (1.5 h) |
| Icon scaling | twice as tall and twice as wide | 4 times the area |
| A1 | brand X 52, brand Y 48 (thousands); axis from 46 | looks 3 times (6 against 2); really 52 ÷ 48 = 1.08, about 8% more |
| A2 | rubbish 1,000 t (2023), 2,000 t (2024); bin icon doubled in both directions | looks 4 times as much; really 2 times |

## 4. Misconceptions and HSC-style traps

- Comparing column heights on an axis that doesn't start at zero.
- Judging pictograms or 3D sectors by area or volume.
- Treating a percentage as large without asking "of how many?".
- Predicting for all teenagers from 20 students at one school on one night.
- Reading "tended to" data as "caused".
- Describing only what is wrong, without justifying what is right (the point asks to justify the choices).

## 5. Visual needs

The poster on the tournament board (the hook); tiles that lift off for analysis with a "data | graph | why" card; an axis slider moving the column graph's base from 6 to 0 with a live "looks × as tall" readout; an icon that doubles in both directions with a grid overlay counting area squares; a 3D sector graph flattening; a limitation checklist; a before-and-after toggle on the poster.

## 6. Two original candidate practice questions

**Question 1.** A phone company's column graph shows brand X sold 52 thousand phones and brand Y 48 thousand, with the vertical axis starting at 46 thousand. (a) Explain why the graph could mislead. (b) How many times as many did brand X really sell, to two decimal places?
Worked answer: (a) The axis starts at 46, so X's column (6 above the base) looks three times Y's (2 above); the gap looks far bigger than it is. (b) 52 ÷ 48 = 1.08 (about 8% more). Slip: "(b) 3 times as many".

**Question 2.** A council infographic shows rubbish collected: 1,000 tonnes in 2023 and 2,000 tonnes in 2024, drawn as two wheelie-bin icons, the 2024 bin twice as tall and twice as wide. (a) Explain why this could mislead. (b) Suggest a better graph and justify it.
Worked answer: (a) The 2024 icon has four times the area, so the increase looks like four times, not two. (b) A column graph starting at zero: two categories (years) compared by height only. Slip: "(a) nothing: it is twice as tall".

## 7. Everyday anchors

The strand's sleep poster; a phone company's sales; a council's rubbish. No people.

## 8. Site corrections and decisions for Claude

- MSY-42: no infographic analysis; limitations not taught as a method; lesson12 SA 3's sensitive and political examples.
- Year 12 p08 recalls "misleading displays": use the phrase.
- Pace: about 9 minutes.
