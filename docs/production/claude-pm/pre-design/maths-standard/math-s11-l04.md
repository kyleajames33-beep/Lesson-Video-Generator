# math-s11-l04: When can we trust a prediction from a linear model?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Linear modelling):

- `ci4777471a`: Interpolate and extrapolate from a linear model in a practical context [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: missing (only a review bullet in data-analysis/lesson08).
- `ci1b3cf962`: Identify and describe the limitations of a linear model in a practical context [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: partial (formulas-and-equations/lesson05 checks differences before assuming a linear pattern).

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-l03: `cib2d6c0df` (a linear model with its intercept and gradient in context). math-s11-f02: solving a linear equation for an input.

**Prior video:** math-s11-l03.

**Start:** l03's models gave a cost for any number of hours. Can we trust the answer for 30 hours, or for minus 2?

**Stop:** A model is built from values over a range; interpolation is predicting inside that range (fairly safe); extrapolation is predicting outside it (less reliable, more so the further out, but not automatically wrong); nonsense answers (negative fuel, an impossible time) are warning signs; a linear model assumes the same rate for ever, so caps, new prices, running out and physical limits break it; values below zero; stating a limitation in two parts (the assumption, and why it fails here); writing the valid input range in a sentence (for example 0 ≤ h ≤ 7.5). Lines of best fit for data are math-s12-b04 and b07; exponential limitations are math-s12-a07.

**Next:** math-s11-l05.

## 2. Site order, sections and worked examples

Interpolation and extrapolation: no site lesson (root ruling 3; already in site corrections section 2).

Read-only source for the partial limitation idea: [formulas-and-equations/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson05.sa.html), SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`, section `check-the-differences-before`: "If the output changes by different amounts, the simple 'starting value plus rate times input' model may not fit. Always calculate first differences before writing any formula." Example: "outputs 2, 4, 8, 16 for inputs 1, 2, 3, 4 have differences of +2, +4, +8 ... Do not force a linear formula onto this data." Q3 answer: "If differences are unequal, a linear formula will not accurately model the data and will give incorrect outputs for untested values". Its drill "A pool starts with 200 litres and loses 15 litres per hour" ($V = 200 - 15h$) is a natural case of a model that stops at zero (empty after 13⅓ hours).

## 3. Recalculation

- Lesson05's pool: V = 200 − 15h is 0 at h = 40/3 ≈ 13.3; any later h gives a negative volume.
- New worked example: hire boat fuel F = 60 − 8h; 40 L at 2.5 h (interpolation); empty at 7.5 h; −12 L at 9 h (nonsense). Savings S = 350 + 40w over a 26-week job: $750 at 10 weeks; $2,430 at 52 weeks (extrapolation past the job's end).
- Practice: jet ski C = 90 + 70h gives $265 at 2.5 h and $790 at 10 h; pool D = 1.8 − 0.12t empties at 15 h, and D(20) = −0.6 m.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- "Extrapolation is always wrong" (it is less reliable, not banned).
- "Interpolation is always exact" (the model is still a model).
- Reporting a negative amount as an answer.
- Limitations with no reason ("it might not be accurate").
- Mixing up the words (inter = between, extra = beyond).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The model's line solid over the range it came from and dashed beyond it, with the range shaded; a probe dot slides from inside (green, "between") to outside (grey, "beyond") and the label changes.
- The fuel line hitting zero at 7.5 h, the dashed extension sinking below the axis into a red "−12 L?" zone.
- A two-part limitation card: "the model assumes" (amber) and "why it fails here" (violet), the same pattern as math-s12-a07 and f06.
- The valid range as a strip under the axis: 0 ≤ h ≤ 7.5.

Kit: `StudioPlot` with `StudioDomainStrip` or `AxisShadow` (a11-graph-parts.tsx) for the valid range; `RegionLabels`; `FunctionRider` and `LiveReadoutBoard` for the probe; `MemoryAidCard` chips for the two-part limitation. Plates: a small boat or jet ski (objects only); check the existing plates first.

## 6. Two original candidate practice questions

### Question 1

A jet ski hire company's cost model is C = 90 + 70h, built from its prices for 1 to 4 hours of hire. (a) Find the cost for 2.5 hours and say whether this is interpolation or extrapolation. (b) Find the model's cost for 10 hours. Is this prediction reliable? Give a reason.

**Worked answer:** (a) 90 + 70 × 2.5 = $265; interpolation (2.5 is inside 1 to 4 hours). (b) 90 + 700 = $790; extrapolation far beyond 4 hours, so not reliable: the company may not hire for 10 hours, or may charge a day rate.

### Question 2

The depth of water in a draining pool is modelled by D = 1.8 − 0.12t, where D is in metres and t in hours. (a) When does the model say the pool is empty? (b) Explain why the model's value at t = 20 has no meaning, and state a suitable range of t.

**Worked answer:** (a) 1.8 − 0.12t = 0 gives t = 15 hours. (b) D(20) = −0.6 m, a negative depth, which is impossible: the model assumes the water keeps falling at the same rate, but it stops when the pool is empty. Suitable range: 0 ≤ t ≤ 15.

Only the question goes on the card. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "$790, reliable because it came from the formula"). Answers were checked with SymPy.

## 7. Everyday anchors

- A hire boat's fuel tank going down 8 L an hour until empty (holidays; a model that must stop at zero).
- Jet ski hire priced for 1 to 4 hours (holidays; extrapolation beyond the price list).
- A fairy floss stall at a school fete: sales per hour during a 5-hour fete, useless for predicting the 8th hour after it closes (fundraising; the data's range).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "hire boat", "jet ski" and "fairy floss" no hits; a fare cap was avoided because math-s12-a07 uses one, and phone storage because math-a11-e03, w01 and w21 use it). Objects only, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. The gap is already in section 2.

Decisions for Claude:

- **Words Year 12 relies on:** math-s12-b07 recalls "Year 11 l04 (interpolation and extrapolation from a linear model)"; math-s12-a07 shows chips "Year 11: interpolation = between the data" and "extrapolation = beyond it" and uses the two-part limitation card. Use the same wording and card here.
- **"Not automatically wrong":** b07 teaches that extrapolation is "just less reliable"; say the same.
- **Linear only:** this is about a model given as an equation or a line, not a scatter plot; b07 does lines of best fit.
- Pace: 6 to 8 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
