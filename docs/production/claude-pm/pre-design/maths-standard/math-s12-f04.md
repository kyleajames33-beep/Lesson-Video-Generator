# math-s12-f04: What happens when an edge's capacity changes, and can the network meet demand?

Maths Standard research pack (Year 12, Network flow), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Network flow):

- `ci1c4ddbb0`: Examine the impact of increasing or reducing the flow capacity of an edge in a network diagram [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered.
- `cie0f5e510`: Explain why the flow capacity of a network is or is not sufficient to meet demand in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 92. **The last core Year 12 Standard video** (the outline's optional practice videos x01 and x02 are not part of this route). **Standard 1:** not in the Standard 1 course (see f01).

**Entry knowledge:** math-s12-f03: `ci0d82df6b` (maximum flow = minimum cut). math-s12-f02 (saturated edges method). math-s11-f04 or any rate work: people per minute to people per hour (× 60).

**Prior video:** math-s12-f03.

**Start:** f03's final frame (proposed): the stadium gates with a crowd counter, "60 000 fans in 5 hours: will 190 a minute be enough?".

**Stop:** Demand against capacity: work out the maximum flow (minimum cut), put demand in the same units, compare; sufficient (spare = maximum − demand) or not (shortfall = demand − maximum), explained in a sentence in context; increasing an edge in the minimum cut raises the maximum, but only until another cut becomes the smallest (stadium Gate 1 + 40 gives + 20); increasing an edge in no minimum cut changes nothing (S→A + 30: still 190); reducing an edge in the minimum cut lowers the maximum by that amount, and reducing another edge lowers it only if it pushes a different cut below the minimum; after any change, recheck the cuts (or rerun the method); choosing the single upgrade that meets demand. Final frame closes the Year 12 Standard course.

**Next:** none (last core Year 12 Standard video).

## 2. Site order, sections and worked examples

Read-only source: [network-flow/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson03.sa.html), SHA256 `59e939459228608fc7c8af3cc28a3a46d01cd06935bd90d83dca37e066cba875`. Sections used: `orient-max-flow-min-cut` (hook, card 02 "Demand vs capacity"), `analyse-capacity-changes` (card 06, upgrade decision example), `test-network-demand` (card 07, sufficiency example and context language), `work-demand-examples` (`we-2`, `we-3`), `consolidate-demand-decisions` (revisit), `apply-min-cut-decisions` (SA 2, SA 3).

### Source lesson03, hook, card 06 and card 07

Hook: "Engineers need 20 ML/day to reach the town, but the network's max flow is only 18 ML/day. They can only afford to upgrade ONE pipe." Card 06: "Upgrading $A \to T$ from 8 to 12 lifts THIS cut to 12 + 7 = 19. Whether the maximum flow actually reaches 19 depends on the rest of the network". Card 07: "A water network has max flow 18 ML/day. The town needs 22 ML/day. Insufficient, shortfall = 22 − 18 = 4 ML/day." Context language: "The maximum flow of X units per day is [sufficient / insufficient] to meet the demand of Y units per day."

### Source lesson03, `we-2`, `we-3`, SA 2, SA 3

`we-2`: "$S{\to}A$ (8), $S{\to}B$ (9), $A{\to}C$ (5), $B{\to}C$ (7), $C{\to}T$ (10). Current max flow = 10 ... (b) If $C{\to}T$ is upgraded from 10 to 14 ... (c) If instead $S{\to}A$ is upgraded from 8 to 15" ("New max flow = 12"; "Max flow = 10. Unchanged."). `we-3`: "commuter train network ... $S{\to}A$ (12), $S{\to}B$ (10), $A{\to}C$ (8), $A{\to}T$ (5), $B{\to}C$ (6), $B{\to}T$ (7), $C{\to}T$ (9) ... Peak demand is 20 000 passengers/day ... (c) If $C{\to}T$ is upgraded from 9 to 14" ("Max flow = 21 000 passengers/day"; "the network IS sufficient"; "New max flow = 22 000"). SA 2: minimum cut 9 + 7 = 16, A→T to 13 gives 20. SA 3: "Max flow = 33 Gbps ≥ demand = 30 Gbps".

## 3. Recalculation

- `we-2`: 10; C→T 14 gives 12 (cut {S, A, B} = 12); S→A 15 gives 10. `we-3`: all eight cuts 21, 22, 23, 24, 25, 26, 28, 31; maximum 21; C→T 14 gives 22 ({S} = 22). SA 2: 16 to 20. SA 3: 33; spare 3.
- Stadium (f01, people per minute): maximum 190. Demand 60 000 in 5 hours = 200 per minute: shortfall 10 per minute (190 × 300 = 57 000). Gate 1 (A→T) 80 to 100: 210 (cuts {S} and {S, A, B} both 210), sufficient with 10 per minute spare. Gate 1 80 to 120: still 210 ({S} limits), so + 40 buys only + 20. S→A 120 to 150: 190 (unchanged). Gate 2 (B→T) 110 to 90 (a lane shut): 170.
- Traffic (f03): A→C 10 to 16 gives 40 (two minimum cuts of 40).
- Question 1: S→A 40, S→B 30, A→C 25, B→C 20, B→T 15, C→T 35: maximum 50 (cut into T); C→T 45 gives 55 ({S, A}: 30 + 25), not 60; S→A 50 gives 50; B→T 10 gives 45.
- Question 2: festival upgrade network S→A 35, S→B 25, A→C 20, A→B 10, B→C 15, B→T 18, C→T 30 (kL per hour): maximum 48; demand 52, shortfall 4; B→T 18 to 24 gives 54 (sufficient); B→T 18 to 28 gives only 55; C→T 30 to 40 gives 53.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`: maximum flow and every cut after each change). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Comparing demand and capacity in different units (per day against per minute).
- Upgrading the biggest or busiest-looking edge instead of an edge in the minimum cut.
- Assuming an upgrade raises the flow by the full amount (another cut takes over).
- "Sufficient" with no numbers, or no context sentence.
- Adding the shortfall to one minimum-cut edge without checking the other cuts (MS-56).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The stadium network with a demand gauge (200 per minute) beside the flow counter (190); the shortfall shown as a red gap of 10.
- A capacity handle on Gate 1: drag it up and the gate cut's sum rises while the {S} cut's sum stays at 210; the flow follows the smaller of the two, then stops at 210 when the other cut takes over.
- Dragging S→A up: the flow counter does not move (no minimum cut contains it).
- A lane closing on Gate 2 (110 to 90): the counter drops to 170.
- A sentence frame for the sufficiency answer, filled in context.
- The course-closing final frame (section 8).

Advanced reuse: none. New kit: `FlowNetwork` with a `capacityHandle` and a `DemandGauge`, `CutLine` cycling all cuts after each change (see kit needs). Plates: the stadium (f01).

## 6. Two original candidate practice questions

### Question 1

A network has edges S→A (40), S→B (30), A→C (25), B→C (20), B→T (15), C→T (35). Its maximum flow is 50. (a) The capacity of C→T is increased to 45. Find the new maximum flow and explain why it is not 60. (b) Instead, the capacity of S→A is increased to 50. What is the new maximum flow? Explain.

**Worked answer:** (a) The cut into T becomes 15 + 45 = 60, but the cut with S and A on the source side is S→B 30 + A→C 25 = 55, so the maximum flow is 55. (b) 50, unchanged: S→A is not in the minimum cut (the cut into T, 15 + 35 = 50, is still the smallest).

### Question 2

A festival's water network (kL per hour) has edges S→A (35), S→B (25), A→C (20), A→B (10), B→C (15), B→T (18), C→T (30). On the hottest day the campground needs 52 kL per hour. (a) Is the network sufficient? Explain. (b) The organisers can upgrade one pipe. Show that increasing B→T to 24 kL per hour meets the demand.

**Worked answer:** (a) Minimum cut = B→T 18 + C→T 30 = 48 kL per hour < 52: not sufficient, a shortfall of 4 kL per hour. (b) The cut into T becomes 24 + 30 = 54; the next smallest cuts are S, A, B against C, T (20 + 15 + 24 = 59) and S, A against the rest (25 + 20 + 10 = 55); the minimum is now 54 ≥ 52, so the demand is met with 2 kL per hour to spare.

Only the question goes on the card (with the drawn network). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (a) "60", crossed, "another cut, 55, is now the smallest"; Question 2 (a) "25 + 35 = 60 leaves S, so yes", crossed, "the smallest cut sets the flow: 48").

## 7. Everyday anchors

- **People through stadium gates:** 60 000 fans in 5 hours against 190 a minute; which gate to widen (sport, events; invented).
- **Water through pipes at a festival:** a hot day's demand and one pipe upgrade (events; invented).
- **Traffic through streets:** widening one street lifts the car park's flow from 34 to 40 cars a minute (travel; from f03).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): no repeats. The site's town water, commuter train and data network keep their numbers. Claude picks; none is required. Dots, objects and arrows, never drawn people.

## 8. Site corrections and decisions for Claude

See section 9: MS-56 (shortfall "must be added to the minimum cut" needs "at least, then recheck").

Decisions for Claude:

- **Units first:** every demand question converts to the network's units before comparing.
- **Upgrade rule:** "only an edge in every minimum cut can help, and only until another cut catches up"; the stadium's + 40 for + 20 is the surprise.
- **Pace: fits.** Two upgrades, one reduction and two demand checks fit 7 to 8 minutes, plus the closing frame (about 20 s).
- **Final frame (course close, proposed):** the stadium gates open with the flow counter at 210 against a demand of 200, then icons for the ten Year 12 Standard 2 focus areas in a row (algebraic relationships, investment and loans, annuities, ratios and rates, trigonometry, bivariate data, probability, the normal distribution, critical path analysis, network flow) with "Year 12 Maths Standard: core videos complete" and "Find every video in the Year 12 Maths Standard playlist". Say nothing about future videos, exam dates or results. Standard 1 viewers were directed to the playlist at p08, so no Standard 1 panel is needed here.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
