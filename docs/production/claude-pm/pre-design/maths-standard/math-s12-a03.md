# math-s12-a03: How do we build simultaneous equations from a real situation and interpret the answer?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `cicd165702` (Simultaneous linear equations): Develop a pair of simultaneous linear equations to model a practical situation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.
- `ci5f61f6ec` (Simultaneous linear equations): Solve practical problems that involve simultaneous linear equations [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered.

Standard 1 (Year 12, Algebraic relationships):

- `ci8615a466` (Simultaneous linear equations): Determine and interpret the point of intersection of two linear graphs in a variety of practical contexts [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb). Site coverage: covered (Standard 2 lessons 1 and 2; the site has no Standard 1 pages). Shared with a01.

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs.

**Course:** Standard 1 and Standard 2. Standard 1 students solve by graph (a01) and must still be able to follow every example. Each worked example therefore ends with a graph of the two lines and the crossing, as well as (for Standard 2) the algebra.

**Entry knowledge:** math-s12-a01 (reading and checking a crossing); math-s12-a02 (substitution and elimination, Standard 2 only). math-s11-f02: `ci2acef85d` (represent a word problem as a linear equation, solve it and interpret the solution). math-s11-l03: `cib2d6c0df` (linear models, with the gradient as a rate and the intercept as a starting value).

**Prior video:** math-s12-a02 (Standard 2 route); math-s12-a01 (Standard 1 route).

**Start:** Recall the café from a02 in reverse: the equations were given there. Now the words come first and we have to write the equations ourselves.

**Stop:** Name the two unknowns with their units; find the two facts in the words and turn each into one equation (often a total count and a total value); solve by graph (both courses) or algebra (Standard 2); answer in a sentence with units; check that the answer makes sense (whole numbers, not negative, and it fits both facts). Interpret a crossing of two practical lines. Break-even with cost and revenue is a04.

**Next:** math-s12-a04.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `779d05e6c788c6a7e3bdb540129e1209467a8d4f143da218463f9865f601691f`. Title: Modelling with Simultaneous Equations & Break-Even Analysis. Lesson id maths-std-y12-algrel-l02.

Older page format: no `data-step-id` sections. Cards used here: 02 The key idea you need to own (first paragraph), 05 Setting Up Simultaneous Equations from a Worded Problem, worked example `we-1`, quick-fire drill 3, SA 1. Cards 06 and 07, `we-2`, `we-3` and the break-even items belong to a04.

### Source lesson02, card 05

"Read carefully and underline the two unknown quantities. These become your variables ... Find the two conditions. Look for two sentences that describe a total or a constraint. Each becomes one equation. Translate into algebra. ... Solve and interpret." Also: "Problems often give (i) a total count: $x + y = k$, and (ii) a total value: $ax + by = m$." Quick check: "there are 30 animals, some chickens and some cows, with 86 legs in total" (answer B: $c + k = 30$ and $2c + 4k = 86$).

### Source lesson02, `we-1`

PROBLEM 1 · SETTING UP A WORDED PROBLEM. "A theatre sells adult tickets for $\$22$ and child tickets for $\$12$. One night, 350 tickets were sold for total revenue of $5,900. How many adult and child tickets were sold?" 1 Let $a$ = adult tickets, $c$ = child tickets. 2 (1) $a + c = 350$ (total tickets); (2) $22a + 12c = 5900$ (total revenue). 3 $a = 350 - c$; $22(350 - c) + 12c = 5900$; $7700 - 10c = 5900$; $c = 180$. 4 $a = 170$; verify $3740 + 2160 = 5900$ ✓. "170 adult tickets and 180 child tickets were sold."

### Source lesson02, drill 3 and SA 1

Drill 3: mango juice $\$3.50$ and orange $\$2.00$; 80 bottles for $\$214$: 36 mango, 44 orange. SA 1: pies $\$4.50$ and sandwiches $\$3.00$; 120 items for $\$459$: 66 pies, 54 sandwiches. Also lesson01 drill 4: notebooks $\$3$, pens $\$1.50$, 10 items for $\$21$: 4 notebooks, 6 pens.

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- `we-1`: a = 170, c = 180; 22 × 170 + 12 × 180 = 5900.
- Quick check: c + k = 30, 2c + 4k = 86 gives 17 chickens and 13 cows.
- Drill 3: 36 mango, 44 orange. SA 1: 66 pies, 54 sandwiches. lesson01 drill 4: 4 notebooks, 6 pens.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Writing both facts into one equation, or putting the prices into the count equation.
- Not saying what each letter stands for, so the answer comes back the wrong way round.
- Mixing units (cents and dollars, minutes and hours) inside one equation.
- Stopping at "c = 180" without a sentence; or giving an answer that is not a whole number of tickets without noticing something is wrong.
- Checking in only one fact.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The worded problem on a card; the two unknowns underline in two colours, then each fact lifts out of the words into its own equation (`ModelCard`, a11-function-parts.tsx, with `GivensCard`).
- A two-row "count" and "value" strip so the learner sees which numbers belong to which equation (prices only in the value row).
- For both courses: the two equations drawn as lines on one graph, the crossing (170, 180) ringed, and the sentence written beside it. For Standard 2, the a02 algebra runs beside the graph and lands on the same point.
- A sense check card: whole number, not negative, fits both facts.

Advanced reuse (visual parts only): math-a11-w13 builds its models with `ModelCard` (from w12) and `StudioPlot`; the same parts serve here. No simulation fits. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

Jai works at a café. He earns $28 an hour on weekdays and $35 an hour on Saturdays. Last fortnight he worked 30 hours and earned $903. (a) Write two equations, saying what each letter stands for. (b) How many hours did he work on Saturdays?

**Worked answer:** (a) Let w = weekday hours and s = Saturday hours: w + s = 30 and 28w + 35s = 903. (b) 28(30 − s) + 35s = 903, so 840 + 7s = 903 and s = 9. He worked 9 hours on Saturdays (and 21 on weekdays; check 588 + 315 = 903).

### Question 2

A phone repair shop charges $120 for a screen repair and $80 for a battery replacement. On Monday it did 14 repairs and took $1,440. How many screen repairs did it do?

**Worked answer:** Let s = screen repairs and b = battery replacements: s + b = 14 and 120s + 80b = 1440. Then 120s + 80(14 − s) = 1440, so 1120 + 40s = 1440 and s = 8. It did 8 screen repairs (and 6 battery replacements; check 960 + 480 = 1440).

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "s + b = 1440", crossed, "the count equation has no prices"). Answers were checked with SymPy. For Standard 1, Claude may supply the graph of both lines and ask for the crossing and its meaning.

## 7. Everyday anchors

- Weekday and Saturday pay rates for a casual job: total hours and total pay give two facts (work and wages; carries Question 1).
- A phone repair shop's day: screen repairs and battery replacements, a count and the takings (phones; carries Question 2).
- A drive to the coast: some hours on the motorway at 100 km/h and some on country roads at 80 km/h, with the total time and the total distance (travel; a + b = 4.5 and 100a + 80b = 400 give 2 hours on the motorway, checked with SymPy).

Varied everyday contexts (work, phones, travel). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "phone repair", "screen repair" and "penalty rate" no hits; "weekend" hits are the w12 and w13 market stall and a12-s02, a different idea). The drive is described as times at two speeds, not a "road trip" distance graph, which several Advanced calculus designs use. No other Standard pack uses these. Claude picks one; none is required. Anchors are drawn as objects, never people. Pay rates are realistic NSW 2026 casual rates, not award figures; say so if shown.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in the parts of lesson02 used here.

Decisions for Claude:

- Standard 1 students meet this video after a01 only. Every worked example needs the graph route as well as the algebra, or a Standard 1 student cannot finish it.
- Use the theatre `we-1` as the main worked example (the site's own numbers). The quick check (chickens and cows) is a good one-line "which equations?" pause; it is the only animal context and can stay text-only.
- The drive anchor needs times as the unknowns (hours at each speed), which keeps the equations free of fractions. Do not set distances as the unknowns for Standard students.
- Pace: one method of setting up, one worked example and one practice pair fits 7 to 9 minutes. Not at risk of rushing if break-even stays in a04.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
