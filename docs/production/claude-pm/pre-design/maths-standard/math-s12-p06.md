# math-s12-p06: How many times should we expect an event to happen?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `cib9b655d5`: Calculate the expected frequency of an event occurring using np where n is the number of times an experiment is repeated, and p is the probability that the event occurs on each of those times [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1 (Year 12, Relative frequency and probability):

- `cif251c60d`: Calculate the expected frequency of an event occurring using np where n is the number of times an experiment is repeated, and p is the probability that the event occurs each of those times [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. **The two wordings differ by one word**: Standard 2 says "occurs on each of those times", Standard 1 "occurs each of those times". Quote each exactly under its own heading.

**Course:** Standard 1 and Standard 2. Playlist order 74. Two-route final frame: Standard 2 to p07, Standard 1 to p08.

**Entry knowledge:** math-s12-p05 (`ci6ac4e336`, `ci74635662`; S1 `cid7b76603`, `ci35f2f92d`): relative frequency as an estimate. math-s12-p02: theoretical probability. math-s11-m01 (percentages as decimals), recalled in a phrase.

**Prior video:** math-s12-p05.

**Start:** p05's final frame (proposed): the rideshare record "40 of the last 50 rides arrived within 5 minutes" and a calendar of 30 upcoming trips: "how many on time?".

**Stop:** Expected frequency = np: n is the number of times the experiment is repeated, p the probability each time; p can come from theory (a fair die, 1/6) or from a relative frequency (0.8 from the rideshare record); the answer is a long-run average, not a promise, so the real count can differ, and it can be a decimal (16.7 sixes in 100 rolls means "about 17"); using it to plan (how many pies, how many spare parts, how many faulty items to expect). Two-route final frame.

**Next:** math-s12-p07 (Standard 2); math-s12-p08 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c4bc0a8be472985d5ab73cee5788544d8964388f601086399c668560d7ed5f3b`. Sections used: `orient-and-prepare` (card 02), `apply-method` (card 07), `work-examples` (`we-3`), `independent-practice` (SA 1 (c)).

### Source lesson03, cards 02 and 07

Card 02: "Expected frequency $E = n \times p$ where $n$ = number of trials, $p$ = probability of the event." "Expected frequency is not a guarantee: ... In 100 die rolls, you expect 16–17 sixes, but you might get 12 or 22." "$E = 33.3$ means 'about 33 times in 100 trials'." Card 07: "P(6) = 1/6 on a die, so in 120 rolls the expected frequency of a 6 is (1/6) × 120 = 20." "Quality control example: A machine produces lightbulbs, and 2% are defective ($p = 0.02$). In a batch of 500 bulbs, expected number defective: $E = 500 \times 0.02 = 10$ bulbs." Fill: "$P(\text{blue}) = 0.25$. In 200 spins ... $E = 200 \times 0.25 = 50$. If the spinner lands on blue 38 times, the relative frequency is 0.19."

### Source lesson03, `we-3` and SA 1 (c)

`we-3`: "A factory quality-control team tested 500 items and found 15 defective. (a) Estimate the probability of a defective item using relative frequency. (b) Assuming this sample is representative and the rate remains the same, how many defects are expected in the next 2 000 items? (c) The manager wants fewer than 40 defects in 2 000 items. Is this target reasonable" → "$15/500 = 0.03$", "$2000 \times 0.03 = 60$", "An expected count below 40 would require $p < 0.02$". SA 1 (c): "How many times would you expect green in 500 spins?" ($p = 0.30$) → "$E = 500 \times 0.30 = 150$".

### Not used

SA 2 (a raffle), SA 3 (a drug trial) and `we-2` (a genetic marker): owner note MS-68; card 07's insurance example is left to p08 if wanted.

## 3. Recalculation

- 120 × 1/6 = 20; 100 × 1/6 = 16.67; 500 × 0.02 = 10; 200 × 0.25 = 50 and 38/200 = 0.19.
- `we-3`: 15/500 = 0.03; 2000 × 0.03 = 60; 40 ÷ 2000 = 0.02.
- SA 1 (c): 500 × 0.30 = 150.
- Anchors: canteen 600 × 0.15 = 90 pies; rideshare 30 × 0.8 = 24 on time; free throws 12 × 0.75 = 9.
- Question 1: 250 × 0.18 = 45. Question 2: 6/400 = 0.015; 5000 × 0.015 = 75.

Values checked with Python (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Expecting the exact expected count every time (np is a long-run average).
- Rounding np to a whole number too early, or refusing a decimal answer.
- Using a percentage as a whole number (250 × 18 instead of 250 × 0.18).
- Using the wrong n (the sample that gave p, instead of the new number of trials).
- Forgetting that a p from a relative frequency is only as good as the data behind it.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The rideshare record (0.8) feeding into a calendar of 30 trips; 24 of them tick; then three simulated months with 22, 25 and 24 on time, the average settling near 24 ("expected is an average, not a promise").
- A canteen's pie warmer: 600 students × 0.15 = 90 pies, with the warmer filling to 90 and a band "some days more, some days fewer".
- The site's die: 120 rolls × 1/6 = 20 sixes; the 100-roll case giving 16.7 with "about 17".
- The factory line (the site's `we-3`): 15 faulty in 500 → 0.03 → 60 expected in 2000; the manager's target of 40 shown as a line below the expected count.
- Two-route final frame (ruling 38 pattern): left "Standard 2 next: two questions at once" (a canteen survey card, "bought lunch?" and "bought recess?", some students ticking both: "how do we count the overlap once?"; p07's opening); right "Standard 1 next: should we believe it?" (a phone showing an invented app advertisement "4 out of 5 users sleep better!" with a grey footnote "25 volunteers"; p08's opening, which p07's final frame repeats).

Advanced reuse (visual parts only): `ProbabilityBars` and `RollSimulator` (prob-parts.tsx) for simulated runs; `TrackerFill` (dist-parts.tsx) as the pie warmer; `CalendarDeposits` (finance-parts.tsx) as a pattern for the trip calendar. Plates: `ma12-phone-v1.png`; `ma12-die-*`; a pie warmer or canteen counter would be a new `ms12-` plate (optional; coded is fine). Kit needs: none new; an **expected-band** option (a target line with a shaded "usual range") on TrackerFill is a small extra.

## 6. Two original candidate practice questions

### Question 1

Over the past month, 18% of a café's customers ordered a toastie. The café expects 250 customers on Saturday. (a) How many toasties should it expect to sell? (b) Explain why the café might make more than this number.

**Worked answer:** (a) 250 × 0.18 = 45 toasties. (b) 45 is a long-run average; on a given day the number could be higher (or lower), so making a few extra avoids running out.

### Question 2

A phone accessories company tested 400 power banks and found 6 were faulty. (a) Estimate the probability that a power bank is faulty. (b) The company will sell 5000 power banks this year. How many faulty ones should it expect? (c) State one assumption you made.

**Worked answer:** (a) 6/400 = 0.015. (b) 5000 × 0.015 = 75. (c) The 400 tested are typical of all the power banks made (the faulty rate stays the same).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "250 × 18 = 4500", crossed, "18% is 0.18"; for Question 2 (b): "400 × 0.015 = 6", crossed, "n is the 5000 to be sold").

## 7. Everyday anchors

- **A school canteen's pies:** 600 students, p = 0.15, 90 pies (school and food; invented).
- **Rideshare trips:** 30 trips × 0.8 = 24 on time, with simulated months either side (travel; invented; continues p05).
- **A sport season:** 12 free throws at 0.75 gives 9 expected goals (sport; invented).

Also the site's 120 rolls, lightbulbs and factory line. Repeat check (grepped 19 November 2026): "hot chocolate" is used in Advanced c02 and c03 and Standard a08, so Question 1 uses a toastie; "power bank" and "pie warmer" have no hits; Advanced a12-s03 uses pet insurance for expected value (not reused). Claude picks; none is required. Objects, never people. No gambling (ruling 6): the site's raffle is not used.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-68 (raffle, drug trial and genetic marker; suggested neutral rewrites with the same numbers).

Decisions for Claude:

- **Quote both wordings** in the description (they differ by "on").
- **Two-route final frame** as section 5; p07's final frame repeats the right panel so p08 has one opening.
- **Pace: fits, short.** One formula, two sources of p and one caution make about 5 to 6 minutes; do not pad (ruling 52 pattern).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
