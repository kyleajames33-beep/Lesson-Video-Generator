# math-s12-r09: How is a rate different from a ratio, and how do unit rates make comparisons fair?

Maths Standard research pack (Year 12, Ratios and rates), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Ratios and rates, Rates):

- `ci5abc5522`: Explain the difference between ratios and rates [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.
- `ci26fe7fac`: Represent given information as a unit rate [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.
- `ci3d090d63`: Make comparisons between rates in a variety of practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa96edbda5). Site coverage: covered.

Standard 1 (Year 12, Ratios and rates, Rates):

- `ci7b67ed32`: Explain the difference between ratios and rates [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).
- `cia705b6e3`: Represent given information as a unit rate [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).
- `cicd810e2c`: Make comparisons between rates in a variety of practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf13dc7b0). Site coverage: covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes.

**Course:** Standard 1 and Standard 2, identical wording.

**Entry knowledge:** math-s12-r01: `cie93c27e5` (a ratio compares quantities in the same unit). math-s11-e01: `ci80921f0a` (hourly and weekly pay, an everyday rate). Division with decimals is assumed.

**Prior video:** math-s12-r08 (Standard 2); math-s12-r06 (Standard 1). The opening must not assume r07 or r08.

**Start:** Two pay slips: $336 for an 8-hour shift and $270 for a 6-hour shift. "Who is paid more?" The bigger pay slip is not the better rate.

**Stop:** A rate compares two quantities with different units, and its units are part of the answer (dollars per hour, litres per minute, goals per game); a ratio compares the same unit and has no units (r01); test: can the units cancel? A unit rate is the amount for one of the second unit, found by dividing (336 ÷ 8 = $42 per hour); compare rates fairly by turning each into a unit rate with the same unit; say the comparison in a sentence with both numbers. Converting units (r10), best buys (r11), speed graphs (r12) and fuel (r13) come later.

**Next:** math-s12-r10.

## 2. Site order, sections and worked examples

Read-only sources:

- [ratios-and-rates/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `05ae0325c7136abaf31da18d8639832e80554887247876ba02712b10dfa64381`. Title: Rates. Lesson id stale (`maths-std-y11-m2-*`, existing structure note). Sections used: `orient-and-prepare` (cards 02 and 04), `build-foundation` (card 05), `guided-drill` (quick-fire 1, 2, 4).
- [ratios-and-rates/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/ratios-and-rates/lesson02.sa.html), SHA256 `bec8335237bd4ca6f453861933786a2bb3342fc253d434e9b3e50766cf58692d`, `preview-vocabulary` (the ratio key term, for the contrast).

### Source lesson01, cards 02 and 04

"A rate compares two quantities with different units, e.g. 60 km/h, $\$4.50$/kg, 15 L/min. The unitary method converts any rate to "per one unit", making different rates directly comparable." "Rate, a comparison of two units ... Always write units, they tell you the operation." "Unitary method: Divide total value by number of units to get rate per 1 unit. Then scale up by multiplying." Key terms: "Rate: A comparison of two quantities with different units". "Unitary method: Finding the value of one unit first, then multiplying or dividing to find the required amount." (Card 04 also defines "Scale", which belongs to lesson03; structure note in MS-35.)

### Source lesson01, card 05 "Rate per one unit, the unitary method"

"$$\text{Rate per 1 unit} = \frac{\text{total value}}{\text{total number of units}}$$" "Always check units: the unit rate has 'per 1 [unit]' in its description."

### Source lesson01, quick-fire practice

"1. A printer produces 420 pages in 7 minutes. Find the rate in pages per minute." (60). "2. A tap fills a 180 L bath in 12 minutes. Find the flow rate in L/min." (15). "4. A worker earns $\$336$ for 8 hours. Another earns $\$270$ for 6 hours. Who has the better hourly rate?" ($42 against $45: worker 2).

### Source lesson02, key term

"Ratio: A comparison of two or more quantities measured in the same unit, written with a colon."

The site states the two definitions on two different pages but never sets a ratio and a rate side by side; the contrast ("explain the difference") is original teaching here.

## 3. Recalculation

- Quick-fire 1: 420 ÷ 7 = 60 pages/min. Quick-fire 2: 180 ÷ 12 = 15 L/min. Quick-fire 4: 336 ÷ 8 = $42/h; 270 ÷ 6 = $45/h.
- Question 1: 171.60 ÷ 6.5 = $26.40/h; 214.40 ÷ 8 = $26.80/h. Question 2: 48 ÷ 16 = 3 goals per game; 48 : 60 = 4 : 5 (80%).
- Data anchor: 12 GB in 30 days = 0.4 GB a day; a 40 GB, 28-day plan allows about 1.43 GB a day.

Every value above was recalculated with SymPy 1.14.0 (`work/brief-standard-r/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Judging by the bigger total ($336 looks better than $270).
- Dividing the wrong way (8 ÷ 336 hours per dollar), then comparing as if bigger is better.
- Dropping the units from a rate, or giving a ratio units.
- Comparing unit rates in different units (dollars per hour against dollars per minute).
- Calling goals : attempts a rate (both are counts of shots, so it is a ratio).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two pay slips (coded or `PlateFields` on a slip plate) with a bar for each: total pay as a tall bar, then cut into equal hour blocks; one block lifts out of each ("$42 per hour", "$45 per hour"), and the single blocks are compared side by side.
- A sorting board: cards (cordial 1 : 4, $45 per hour, 15 L per minute, 3 : 4 wins to losses, 3 goals per game, 4 : 5 goals to attempts) drop into "ratio: same unit, no units" or "rate: different units, units matter".
- Unit labels that cancel (g : g, the units fade) against units that stay ($ / h).

Advanced reuse (visual parts only): `GrowthBars` or `StackedTotalBar` for totals cut into unit blocks; `OutcomeSort` (prob-parts.tsx) for the sorting board if it accepts labelled cards; `PlateFields`; `WorkingBoard`. Kit needs: a UnitRateSplit mode (total bar into equal unit blocks) on RatioBar.

## 6. Two original candidate practice questions

### Question 1

Sam earns $171.60 for a 6.5-hour shift at a café. Lee earns $214.40 for an 8-hour shift at a supermarket. (a) Write each person's pay as a unit rate. (b) Who has the higher rate of pay, and by how much per hour?

**Worked answer:** (a) Sam: 171.60 ÷ 6.5 = $26.40 per hour. Lee: 214.40 ÷ 8 = $26.80 per hour. (b) Lee, by 40 cents per hour.

### Question 2

A netball goal shooter scores 48 goals from 60 attempts across 16 games. (a) Write the number of goals per game as a unit rate. (b) Write goals to attempts as a ratio in simplest form. (c) Explain why (a) is a rate and (b) is a ratio.

**Worked answer:** (a) 48 ÷ 16 = 3 goals per game. (b) 48 : 60 = 4 : 5. (c) Goals per game compares two different kinds of quantity (goals and games), so it has units; goals to attempts compares shots with shots, the same unit, so it has no units.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "Lee, because $214.40 is more", crossed, "compare per hour, not totals"). Answers were checked with SymPy. Pay figures are realistic NSW 2026 casual examples, not award rates.

## 7. Everyday anchors

- **Two part-time jobs:** $336 for 8 hours against $270 for 6 hours (the site's quick-fire 4) (work; the bigger pay slip is the worse rate).
- **Phone data use:** 12 GB used in 30 days is 0.4 GB a day, against a 40 GB plan over 28 days that allows about 1.43 GB a day (phones; a rate with units students care about).
- **A netball shooter's stats:** goals per game is a rate, goals to attempts is a ratio (sport; the ratio-against-rate contrast in one player).

Varied everyday contexts (work, phones, sport). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Standard packs (grepped 18 November 2026: "per GB", "data pack" and "recharge" no hits; netball appears in Advanced only as a court plate for geometry, not player statistics; basketball shots are an Advanced arc context, so netball is used). Claude picks; none is required. Objects, never people (a netball and a scoresheet, not a player).

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 7: MS-35 (lesson01's structure: the stray "Scale" key term; the rate-conversion gap belongs to r10).

Decisions for Claude:

- **The contrast is original:** the site defines ratio and rate on different pages; set them side by side with the "do the units cancel?" test.
- **Standard 1 arrival:** the opening (two pay slips) needs nothing from r07 or r08; r08 and r06's Standard 1 panel both end on it.
- Pace: not at risk; fits 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
