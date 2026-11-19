# math-s11-f06: How long until BAC returns to zero, and why is any BAC estimate only rough?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

**Root ruling 4 binds this video** (road safety; zero BAC for learner and P-plate drivers; the formula is an estimate, never a guide to how much is safe to drink). Root ruling 3: no site lesson.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `cifd71015e`: Apply the formula Time = BAC/0.015 to determine the number of hours required for a person to stop consuming alcohol in order to reach zero BAC [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: missing. Typeset the fraction from `sourceHtml`.
- `ci9caaa5c5`: Identify and explain the limitations of methods used to estimate BAC [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: missing.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f05: `ci9f40765a` (an estimated BAC from the formula; zero for learner and P-plate drivers). math-s11-f04: hours and minutes. math-s11-f03: dividing and rearranging.

**Prior video:** math-s11-f05.

**Start:** f05's invented driver had an estimated BAC of about 0.032. A P-plater needs zero. How long until the model says zero?

**Stop:** Time = BAC ÷ 0.015 (in this model the body removes 0.015 of BAC each hour); decimal hours to hours and minutes, rounding up (waiting less is not enough); using f05's unrounded BAC where possible; the next-morning case (a high BAC late at night can still be above zero the next morning); limitations: the formulas assume a fixed removal rate and an average body, while real BAC depends on food, body size and build, health, medication, drink size and how fast the drinks were had; drinks poured at home are often bigger than a standard drink; only a breath or blood test measures BAC; NSW Government: "It's impossible for you to estimate your own BAC". The only safe plan for a P-plater is no alcohol before driving.

**Next:** math-s11-f07.

## 2. Site order, sections and worked examples

No site lesson teaches either point (site corrections section 2).

External facts (read 19 November 2026; Codex re-verifies before narration):

- nsw.gov.au, "Alcohol limits, drugs and medicines": "It's impossible for you to estimate your own BAC, even if you think you know how many drinks you've had." "The only way to be sure you're under the limit is to not drink alcohol at all." Limits: zero for L, P1 and P2.
- health.gov.au, "Standard drinks guide": a standard drink is 10 g of pure alcohol; the size of a drink that holds one standard drink differs between drinks and brands.

## 3. Recalculation

- f05's man: unrounded BAC 0.0321691 gives 2.1446 h = 2 h 8.7 min, so about 2 h 9 min (round up). With the rounded 0.032: 2.1333 h = 2 h 8 min. The one-minute difference is why the unrounded value is kept.
- f05's woman: unrounded 0.0454545 gives 3.0303 h = 3 h 1.8 min, so about 3 h 2 min; with 0.045, exactly 3 h.
- Next-morning case (invented): BAC 0.09 at midnight gives 6 h, so not zero until about 6 am.
- f05 Question 1's 0.04895 gives 3.263 h = 3 h 15.8 min, about 3 h 16 min.
- Practice: 0.057 ÷ 0.015 = 3.8 h = 3 h 48 min. A 75 kg man, 6 drinks over 4 hours: (60 − 30) ÷ 510 = 0.0588; 3.92 h = 3 h 55.3 min, about 3 h 56 min.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- 2.14 h read as 2 h 14 min.
- Rounding the time down.
- Counting from the first drink instead of from when drinking stopped.
- Believing coffee, a shower, food afterwards or sleep speeds up the 0.015 an hour (in this model only time does).
- Treating the estimate as a measurement ("the formula says I'm fine").
- Listing a limitation with no reason ("it's not accurate") instead of naming the assumption and why it fails.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A falling straight line from f05's BAC to zero, dropping 0.015 each hour, with hour ticks: the model is linear, a gentle preview of l01's gradient (−0.015 per hour) without naming it.
- A clock face sweeping 2 h 9 min, with "2.14 h ≠ 2 h 14 min" crossed beside it.
- A next-morning timeline: midnight to 6 am, the line still above zero at 5 am.
- A limitations card in two parts per item, "the formula assumes" (amber) and "why it fails here" (violet), the pattern math-s12-a07 uses: same 0.015 every hour / bodies differ; standard drinks / home pours are bigger; average body / size, food and health change it; an estimate / only a test measures BAC.
- The NSW quotation on a plain card with its source line.

Kit: `StudioPlot` with a falling line; `MinutesDial` or `StopwatchHand` for the time; `MemoryAidCard` or `GivensCard` chips for the two-part limitation; `WorkingBoard`. Plates (objects only): a breath-test sign or a car key on a hook can return from f05; no people, no drinking.

## 6. Two original candidate practice questions

### Question 1

A driver's estimated BAC is 0.057. Use Time = BAC/0.015 to find how long it takes for the estimated BAC to reach zero. Give your answer in hours and minutes.

**Worked answer:** 0.057 ÷ 0.015 = 3.8 h = 3 h 48 min.

### Question 2

A 75 kg man has 6 standard drinks over 4 hours. (a) Use BAC_male = (10N − 7.5H)/(6.8M) to estimate his BAC to three decimal places. (b) Estimate how long after he stops drinking his BAC reaches zero. (c) Give two limitations of this estimate.

**Worked answer:** (a) (60 − 30) ÷ 510 ≈ 0.059. (b) 0.0588 ÷ 0.015 ≈ 3.92 h, about 3 h 56 min (round up). (c) For example: the formula assumes an average body, but size, food and health change how alcohol is absorbed; it assumes every drink was a standard drink, but poured drinks are often bigger. Only a breath or blood test measures BAC.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 1: crossed "3 h 8 min", "0.8 of an hour is 48 minutes"). Answers were checked with SymPy.

## 7. Everyday anchors

- The next morning: a drive to an early shift at a part-time job after a late night, when BAC may still be above zero (part-time job; the next-morning case).
- A glass poured at home: bigger than a standard drink, so the count N is too low (kitchen; a limitation).
- A long family barbecue lunch: drinks spread over hours make H large, but the formula still only estimates (home; the "hours of drinking" letter).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "next morning", "standard drink" and "barbecue" no hits). Objects only (an alarm clock at 5:30 am, a measuring jug, a barbecue), never people. No anchor shows anyone drinking.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No site lesson; the gap is already in section 2.

Decisions for Claude:

- **Ruling 4 wording again** (each video stands alone): estimate only; zero for L and P plates; never a guide to how much is safe.
- **Rounding up** for time is a safety rule here, not just a maths rule; say why in one sentence.
- **The limitation pattern** (assumption, why it fails) matches a07 and l04, so students meet one way of writing a limitation across the course.
- **Join:** f05 and f06 could merge if Claude finds f05 short; root ruling 8's pattern allows splits but merging changes the outline, so keep two videos unless both designs run under about 4 minutes.
- Pace: 5 to 7 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
