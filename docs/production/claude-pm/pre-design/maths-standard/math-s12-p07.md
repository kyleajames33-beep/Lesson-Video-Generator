# math-s12-p07: How do Venn diagrams and two-way tables sort two attributes?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `cidbbb1a76`: Construct and interpret Venn diagrams and two-way tables from given information, limited to combinations of two attributes, and use them to solve problems in a variety of contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1: no matching point.

This is a CMS codename, not a published content-point code.

**Course:** Standard 2 only. Playlist order 75.

**Entry knowledge:** math-s12-p02 (`ci6224eb8c`, `ci566abb19`): favourable ÷ total, and the complement for "neither". math-s11-d07: `cic1f6796f` (categorical data in tables). math-s12-p03 and p04: counting outcomes, recalled in a phrase.

**Prior video:** math-s12-p06 (Standard 2 route).

**Start:** p06's Standard 2 panel (proposed): a canteen survey card with two questions, "bought lunch?" and "bought recess?", some students ticking both: "how do we count the overlap once?".

**Stop:** Two attributes (yes or no for each); a Venn diagram: two overlapping circles inside a rectangle, four regions (A only, B only, both, neither); fill the overlap first, then each "only" region by subtraction, then "neither" from the total; a two-way table: the same four counts as cells, with row totals, column totals and a grand total, and missing values found by subtraction; moving between the Venn diagram and the table; probabilities as a region or cell ÷ the total; "at least one" (the three inner regions), "exactly one" (the two "only" regions) and "neither"; "of those who..." fractions read from one row or column only (the site's 55 of 80 regular exercisers). Ends on the frame shared with p06's Standard 1 panel.

**Next:** math-s12-p08.

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `3f929df61cb96675dc079f04a09bc5e5898e594c5b01aa52d24b08157b4d321d`. Sections used: `orient-and-prepare` (card 01, card 02, key terms), `build-foundation` (card 05, quick check), `connect-method` (card 06, fill task), `work-examples` (`we-1`, `we-2`), `independent-practice` (SA 1, SA 2), `retrieve-and-finish` (revisit).

### Source lesson04, cards 01, 02 and 05

Card 01: "In a class of 30 students: 12 play sport, 10 play a musical instrument, and 5 do both." Card 02: "A Venn diagram for two attributes has four regions: A only, B only, both (A∩B), and neither. A two-way table shows the same four regions in a grid." "'At least one' = union (A or B or both). 'Exactly one' = A only + B only. 'Neither' = outside both circles." Card 05: "If a row total is 40 and one cell is 27, the other cell is $40 - 27 = 13$. Always fill in totals first". Table example: Female/Male by Phone/No phone (45, 15, 30, 10; totals 60, 40, 75, 25, 100). Quick check: "200 people, 90 like coffee, 80 like tea, and 30 like both ... NEITHER" → "C, 200 − (90 + 80 − 30) = 60".

### Source lesson04, card 06 and the fill task

Card 06: "Fill in the overlap region first ... Fill in A only: $n(A \text{ only}) = n(A) - n(A \cap B)$ ... Fill in neither". "Overlap = 5; S only = 12 − 5 = 7; M only = 10 − 5 = 5; neither = 30 − 7 − 5 − 5 = 13." "$P(\text{at least one}) = (7 + 5 + 5)/30 = 17/30$." Fill: "40 people: 22 like action movies (A), 18 like comedies (C), 8 like both" → 14, 10, 8, 32/40.

### Source lesson04, `we-1`, `we-2`, SA 1, SA 2

`we-1`: "In a Year 12 cohort of 120 students, 72 study Biology, 48 study Chemistry, and 20 study both." → "Biology only = 52, Chemistry only = 28, Neither = 20"; "$52/120 = 13/30$", "$100/120 = 5/6$", "$20/120 = 1/6$". `we-2`: "A survey of 150 people asked about exercise frequency (regular/not regular) and diet quality (healthy/unhealthy). Results: regular exercise AND healthy diet = 55; regular AND unhealthy = 25; not regular AND healthy = 20; not regular AND unhealthy = 50." → totals 80, 70, 75, 75; "$P(\text{regular}) = 80/150 = 8/15$"; "What fraction of regular exercisers also eat healthily?" "$55/80 = 11/16$"; "$50/150 = 1/3$". SA 1: 28 students, 16 laptop, 12 tablet, 6 both → 10, 6, 6, 6; tablet only 3/14; neither 3/14. SA 2: 200 students, sport 90, music 70, both 30 → 60, 40, 30, 70; 3/20, 3/10, 13/20.

## 3. Recalculation

- Class of 30: 7, 5, 5, 13; at least one 17/30; check 7 + 5 + 5 + 13 = 30.
- Coffee and tea: neither 200 − 140 = 60. Fill task: 14, 10, 8; 32/40 = 4/5.
- `we-1`: 52, 20, 28, 20 (sum 120); 13/30, 5/6, 1/6.
- `we-2`: rows 80 and 70, columns 75 and 75, total 150; 8/15; 11/16; 1/3.
- SA 1: 10, 6, 6, 6; 3/14 and 3/14. SA 2: 60, 40, 30, 70; 3/20, 3/10, 13/20.
- Phone table: P(phone) = 75/100 = 3/4; P(female and phone) = 45/100 = 9/20.
- Question 1: 80 students, 45 lunch, 30 recess, 12 both: lunch only 33, recess only 18, neither 80 − 63 = 17; P(recess only) = 18/80 = 9/40; P(neither) = 17/80.
- Question 2 (completed table): electric on time 28, electric late 4, petrol on time 40, petrol late 18; totals 32, 58, 68, 22, 90; P(late) = 22/90 = 11/45; of the electric cars, 4/32 = 1/8 were late; of the late arrivals, 4/22 = 2/11 were electric.

Values checked with Python `fractions` (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing the given totals (12 and 10) inside the circles instead of the "only" counts (7 and 5): double-counting the overlap.
- Forgetting the "neither" region or the outside of the circles.
- Dividing by the grand total when the question restricts the group ("of the regular exercisers": ÷ 80, not ÷ 150).
- Mixing up "at least one" and "exactly one".
- Two-way table totals that do not add to the grand total.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The canteen survey: tick cards dropping into two overlapping circles; cards with both ticks land in the overlap first; then the "only" regions fill by subtraction ("45 − 12 = 33"); the rest fall outside ("neither").
- The same four counts sliding into a two-way table (Venn region to cell, colour-matched), totals adding along rows and columns.
- Region lighting for "at least one", "exactly one" and "neither", each with its fraction.
- A row of the site's exercise and diet table boxed for "of the regular exercisers": the denominator changes from 150 to 80 visibly.
- A missing-value table (Question 2 style) completed by subtraction, cell by cell.
- Final frame (shared with p06's Standard 1 panel, so p08 has one opening): a phone showing an invented app advertisement, "4 out of 5 users sleep better!", with a small grey footnote "25 volunteers": "should we believe it?".

Advanced reuse (visual parts only): `VennDiagram` (a11-prob-parts.tsx: counts in four regions, shading presets `VENN_SHADE` for union, intersection, neither, exactly one; member dots with double-count ticks; a regions-add-to-total sum) and `TwoWayTable` (totals computed, restrict to a row with its total boxed). These are the Advanced s02, s03, s05 and s07 parts; their anchors (two-scoop cones, a library, hotel rooms, a delivery app) are not reused. Plates: `ma12-phone-v1.png` for the final frame. Kit needs: none new; a **Venn-to-table slide** (regions flying to cells) is a small option joining the two existing parts.

## 6. Two original candidate practice questions

### Question 1

In a survey of 80 students, 45 bought lunch at the canteen, 30 bought recess, and 12 bought both. (a) Draw a Venn diagram showing the number of students in each region. (b) A student is chosen at random. Find the probability that the student bought recess only. (c) Find the probability that the student bought neither.

**Worked answer:** (a) Both 12; lunch only 45 − 12 = 33; recess only 30 − 12 = 18; neither 80 − (33 + 12 + 18) = 17. (b) 18/80 = 9/40. (c) 17/80.

### Question 2

A rideshare company recorded 90 trips by electric and petrol cars, and whether each arrived on time or late. Copy and complete the table.

| | On time | Late | Total |
|---|---|---|---|
| Electric | 28 | | 32 |
| Petrol | | 18 | |
| Total | 68 | | 90 |

(a) Find the missing values. (b) Find the probability that a randomly chosen trip was late. (c) Of the trips by electric cars, what fraction arrived late?

**Worked answer:** (a) Electric late 32 − 28 = 4; petrol on time 68 − 28 = 40; petrol total 40 + 18 = 58; late total 4 + 18 = 22 (check 32 + 58 = 90 and 68 + 22 = 90). (b) 22/90 = 11/45. (c) 4/32 = 1/8.

Only the question (and the table) goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "45 in the lunch-only region", crossed, "take the 12 in both out first"; for Question 2 (c): "4/90", crossed, "only the 32 electric trips").

## 7. Everyday anchors

- **A school canteen survey:** lunch and recess, with students who bought both (school and food; Question 1, invented).
- **Rideshare trips by car type and punctuality:** a two-way table with missing values (travel and technology; Question 2, invented).
- **Device ownership in a class:** the site's laptop and tablet (SA 1), or streaming services (two unnamed services, no brands).

Also the site's sport and music class of 30, and the exercise and diet table. Repeat check (grepped 19 November 2026): Advanced Venn and table anchors are two-scoop ice-cream cones (s02), library borrowers (s03), hotel rooms (s05) and a food delivery app's peak hour (s07): none reused; "canteen" appears only in these packs. Claude picks; none is required. Objects, never people: the survey uses tick cards, not students.

## 8. Site corrections and decisions for Claude

No new site error in the parts used. MS-66 notes that lesson01's "covered in Lesson 2" reference for the overlap rule should point to this lesson.

Decisions for Claude:

- **No set notation needed:** the syllabus says "Venn diagrams and two-way tables"; the site's ∪ and ∩ and the addition rule formula can stay off screen. Region counting with "fill the overlap first" covers every question.
- **"Of those who" fractions** (a restricted denominator) are inside "interpret"; teach them as reading one row, without the word "conditional" or P(A|B) (Advanced).
- **Site `we-1` (Biology and Chemistry):** school subjects, not science content; keep its numbers or relabel as two electives.
- **Pace: watch.** Venn diagram, table, conversion and restricted fractions fill about 8 to 9 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
