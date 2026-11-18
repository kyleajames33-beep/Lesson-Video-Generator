# math-s12-b07: When can we trust a prediction from a line of best fit?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `cic2eef7f5`: Examine lines of best fit to make predictions and recognise limitations of interpolation and extrapolation for bivariate datasets within a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.

Standard 1 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `cif0057f69`: Examine lines of best fit to make predictions and recognise limitations of interpolation and extrapolation for bivariate datasets within a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. Wording identical.

**Course:** Standard 1 and Standard 2. Playlist order 68. Last video of the strand for both courses.

**Entry knowledge (outline dependency list, as attached to b04):** math-s11-l04: `ci4777471a` (interpolate and extrapolate from a linear model in a practical context) and `ci1b3cf962` (limitations of a linear model); math-s12-b04 (`cid27cc8e6`; S1 `ci1a3b6d30`): a line of best fit; math-s12-b06 (`ci9bd861ac`, Standard 2): the least-squares equation; math-s12-b05 (`ci5401622a`, Standard 2): r for strength.

**Prior video:** math-s12-b06 (Standard 2); math-s12-b04 (Standard 1, its right panel).

**Start:** One frame shared by b06's final frame and b04's Standard 1 panel (proposed): the kiosk scatter (18 to 32°C) and its line of best fit with no equation shown, the line running on dashed past both ends, with tags "10°C?" and "45°C?": "can we trust these?". Standard 1 viewers have not seen b05 and b06, so the opening says nothing about r or the least-squares line.

**Stop:** Make a prediction from a line of best fit: read it from the graph (both courses) or substitute into the equation (Standard 2); the data's x range (18 to 32°C); interpolation (inside the range) and extrapolation (outside it); why extrapolation is less reliable: the pattern was only seen inside the range, and outside it may bend, level off or stop making sense (negative ice creams at 10°C; a kiosk that can only make so many at 45°C), and the further out, the less we trust it; interpolation is also only as good as the relationship is strong (Standard 2: r; both: how closely the points hug the line); a complete reliability comment in three parts (type, reason, strength). Final frame hands to p01.

**Next:** math-s12-p01.

## 2. Site order, sections and worked examples

Read-only sources: [bivariate-data-analysis/lesson10.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson10.sa.html), SHA256 `5b19f84b3e7b30a36853a5f0e66aa5a412253b3f22a5ef96180339fb2d98f789` (sections `orient-regression-predictions`, `use-interpolation`, `recognise-extrapolation`, `communicate-reliability`, `work-prediction-examples` (`we-1` to `we-3`), `apply-regression-predictions`, `answer-prediction-questions`); [bivariate-data-analysis/lesson11.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson11.sa.html), SHA256 `881f752446de3264f145e7f6127e495984d4d2d0ed9eb60bc320ff55c9728004` (sections `organise-five-step-analysis`, `avoid-analysis-errors`, `study-complete-response` (`we-1`)). Both at kyleajames33-beep/Teaching-APP 5d74a627.

### Source lesson10, cards 02, 06 and 07

Card 02: "Interpolation is predicting y for an x value within the range of the data." "Extrapolation is predicting y for an x value outside the data range. The relationship may not hold beyond the observed data". Card 06: "The equation $y = 42 + 3.5x$ with data range 1–8 hours. Predicting for $x = 100$ hours gives $y = 42 + 350 = 392\%$. This is impossible". "The same equation predicts $y = 42 + 3.5(10) = 77\%$ for 10 hours. This is just outside the range (1–8), so it might be roughly correct, but we are less confident." Card 07: "A full exam response earns three: name whether it is interpolation or extrapolation, give the reason (the trend may not continue beyond the data range), and support it with the strength of r". "Common error: Thinking extrapolation is always wrong ... just less reliable."

### Source lesson10, worked examples, activity and Q1

`we-1`: "data range 2 to 9 ... $y = 42 + 3.5(6) = 63$ ... interpolation". `we-2`: "$y = 42 + 3.5(20) = 112$ ... scores cannot exceed 100%". `we-3`: $y = 420 - 8.5x$ over 18 to 32°C (electricity demand; not used, MS-67). Activity: "$y = 18 + 5.2x$" for advertising (data 2 to 12): 54.4, 122, 18, 174. Q1: "patient age ... $y = 4 + 0.3x$": 16 days at 40, 28 at 80 (a health context; not used).

### Source lesson11, the five steps and `we-1`

Five steps: "Direction ... Strength ... Use r value ... Regression line ... Prediction & caveat". `we-1`: "For 15 Year 12 students, the hours of part-time work per week ($x$) ranged from 2 to 20. The trial exam mark ... $r = -0.86$ and least-squares regression line $y = 84 - 1.5x$ ... predict the mark of a student who works 12 hours a week" → "$y = 84 - 1.5(12) = 66$ ... interpolation, and with a strong correlation the prediction is reasonably reliable"; "a student who does no part-time work is predicted to score 84 marks. Because $x = 0$ lies outside the data range of 2 to 20 hours, this value is itself an extrapolation."

## 3. Recalculation

- Kiosk, by-eye line y = 6x − 73 (data 18 to 32°C): 27°C → 89 (interpolation); 10°C → −13 (extrapolation; impossible); 12°C → −1; 45°C → 197 (extrapolation; the pattern may level off). The line reaches 0 at about 12.2°C.
- Kiosk, least-squares line (Standard 2, b06) y = −63.09 + 5.60x: 27°C → 88.2; 10°C → −7.1; 45°C → 189.1. Both lines tell the same story.
- Site: 42 + 3.5x at 5, 6, 10, 20, 100: 59.5, 63, 77, 112, 392; 18 + 5.2x at 7, 20, 0, 30: 54.4, 122, 18, 174; 84 − 1.5 × 12 = 66.
- Question 1 (invented): 4 + 0.35x at 60 → 25; at 300 → 109 (impossible: more than 100%).
- Question 2 (invented canteen data from b04): least-squares estimate at 28°C 53.9 and at 40°C 85.9; a by-eye line gives about 54 and about 86.

Every value above was recalculated with SymPy 1.14.0 and Python `statistics` (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Calling any x value that is not in the table "extrapolation" (35 between 10 and 50 is interpolation).
- Treating extrapolation as always wrong, or interpolation as always right (weak relationships make even interpolation shaky).
- Giving the prediction without the reliability comment, or the comment without a reason.
- Forgetting the intercept is an extrapolation when x = 0 is outside the data.
- Trusting a precise-looking answer (197 ice creams) because it came from an equation.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The kiosk scatter with the data's x range shaded as a band (18 to 32°C, "seen"), the line solid inside and dashed outside ("guessed").
- A reading guide sliding along the axis: inside the band the readout is green and steady; outside it turns amber, and at 10°C the line dips below zero with a crossed "−13 ice creams".
- At 45°C: a coded freezer gauge on the kiosk reaching "full" while the line keeps rising to 197 ("the pattern may not continue").
- Strength matters: the same prediction at 27°C on a tight cloud and on a loose cloud; the error band around the line widens with the loose one.
- A three-part comment card: type (interpolation or extrapolation), reason, strength; ticks as each part is said.
- Standard 1 route: every prediction shown by reading the graph; Standard 2 also substitutes (a grey "Standard 2" row).
- Final frame (p01's opening, proposed): the kiosk board with tomorrow's forecast pinned on it, "top 30°C" and a cloud chip "20% chance of rain": "what does 20% mean?".

Advanced reuse (visual parts only): `StudioPlot`; `RegionLabels` (a11-graph-parts.tsx) for the inside and outside bands; `LinkedRiders` (extras.tsx) for the reading guide; `TrackerFill` (dist-parts.tsx) as the freezer gauge. Plates: `ms12-beach-kiosk-v1.png`; `ma12-phone-v1.png` for Question 1. Kit needs: ScatterBoard **data-range band** with solid and dashed line segments and an interpolation or extrapolation readout.

## 6. Two original candidate practice questions

### Question 1 (Standard 2 style)

A phone's battery use was measured while streaming video for 10 to 120 minutes. The least-squares line is y = 4 + 0.35x, where x is the streaming time (minutes) and y is the battery used (%), and r = 0.97. (a) Predict the battery used after 60 minutes, and comment on the reliability of your prediction. (b) Predict the battery used after 300 minutes, and comment on the reliability of your prediction.

**Worked answer:** (a) 4 + 0.35 × 60 = 25%. Interpolation (60 is inside 10 to 120) and the relationship is strong (r = 0.97), so this is reliable. (b) 4 + 0.35 × 300 = 109%. Extrapolation, far outside the data, and impossible (more than 100%), so it is not reliable: the battery runs out before then.

### Question 2 (both courses)

The canteen's line of best fit for top temperature (16 to 34°C) against cold drinks sold passes close to the points (16, 22) and (34, 70). (a) Use the line to estimate the number of cold drinks sold on a 28°C day. (b) The canteen manager wants to use the same line for a 40°C day. Is this a reliable estimate? Give a reason.

**Worked answer:** (a) About 54 drinks (reading up from 28°C to the line). (b) No: 40°C is outside the data range (16 to 34°C), so this is extrapolation; the pattern may not continue (the canteen may run out, or fewer students may come on extreme days).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "reliable because it came from the equation", crossed, "inside the range and strong r"; for Question 2 (b): "interpolation: 40 is near 34", crossed, "outside the range is extrapolation").

## 7. Everyday anchors

- **The beach kiosk:** −13 ice creams at 10°C and 197 at 45°C (the strand's dataset; site line).
- **A phone's battery while streaming:** an impossible 109% at 300 minutes (phones; Question 1, invented).
- **A school canteen's cold drinks on a 40°C day:** a plausible-looking extrapolation that still cannot be trusted (school; Question 2, invented).

Also the site's part-time work (lesson11 `we-1`: 66 at 12 hours, interpolation). Repeat check (grepped 19 November 2026): "battery" appears in Advanced a11-s08 and a12-s06 and s12 as other ideas (alarm backups, a battery life density); here it is a straight-line use rate, a different context; "canteen" only in these packs. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-67 (the electricity model runs the wrong way for summer; not used) and MS-69 (unsourced AEMO hook).

Decisions for Claude:

- **One opening for both courses:** b06's final frame and b04's Standard 1 panel are the same picture, with no equation and no r, so Standard 1 viewers lose nothing.
- **Strength as part of reliability:** Standard 2 cites r; Standard 1 says "the points are close to the line" (no r in Standard 1).
- **The site's health contexts** (recovery time by age) are left out; the battery and canteen replace them.
- **Final frame to p01:** the forecast chip links the strand's kiosk to probability; its meaning (what "20% chance of rain" means) is p01's opening and needs a dated Bureau of Meteorology source if narrated as fact.
- **Pace: fits.** About 6 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
