# math-s12-a02: How do we solve simultaneous equations with algebra instead of a graph?

Maths Standard research pack (Year 12, Algebraic relationships), 18 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Algebraic relationships):

- `ci32b65c45` (Simultaneous linear equations): Solve a pair of simultaneous linear equations using graphical and algebraic methods [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a). Site coverage: covered. Shared with a01, which owns the graphical method; this video owns the algebraic methods.

Standard 1: no matching point. Standard 1 solves by graphs only (`ci8debaa08`, owned by a01).

These are CMS codenames, not published content-point codes. Exact HTML is in the crosswalk and route inputs.

**Course:** Standard 2 only.

**Entry knowledge:** math-s12-a01: the point of intersection is the pair that makes both equations true, and a solution is checked in both. math-s11-f02: `ci2acef85d` (solving a linear equation). math-s11-f03: `cib54d5e23` (changing the subject, used to isolate one letter). math-s11-f01: `ci7f303375` (substituting a value). The outline's dependency list names nothing extra for a02; these come from the method.

**Prior video:** math-s12-a01.

**Start:** a01's lines y = 2x − 1 and y = −x + 5 crossed at a whole-number point that was easy to read; now a pair whose crossing sits between grid lines, so reading the graph only gives an estimate.

**Stop:** Solve a pair exactly by algebra: when both equations start "y =", set the right-hand sides equal; otherwise substitute one rearranged equation into the other; or eliminate one letter by adding or subtracting the equations (multiplying one equation first only when needed). Find the second value by substituting back, then check both values in both original equations. Writing the equations from a worded problem is a03.

**Next:** math-s12-a03.

## 2. Site order, sections and worked examples

Read-only source: [algebraic-relationships/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f24d31f47587a9f1f357b5c0a6ee5606c03489e8e85575ad52f89e1a117d7f4a`. Title: Simultaneous Linear Equations. Lesson id maths-std-y12-algrel-l01.

Older page format: no `data-step-id` sections. Cards used here: 01 Recall (café hook), 06 The Substitution Method, 07 The Elimination Method, worked examples `we-2` and `we-3`, quick-fire drills 2 to 4, 08 Revisit, SA 1 and SA 2.

### Source lesson01, card 01 (hook)

"A café charges $\$4$ for a coffee and $\$6$ for a sandwich. A customer buys 7 items in total and spends exactly $38. How many coffees and how many sandwiches did they buy?"

### Source lesson01, `we-2`

PROBLEM 2 · SUBSTITUTION METHOD. Solve $4c + 6s = 38$ and $c + s = 7$ ($c$ = coffees, $s$ = sandwiches). 1 From $c + s = 7$: $c = 7 - s$. 2 $4(7 - s) + 6s = 38$, $28 - 4s + 6s = 38$, $2s = 10$, $s = 5$. 3 $c = 7 - 5 = 2$. 4 Verify: $4(2) + 6(5) = 38$ ✓ and $2 + 5 = 7$ ✓. "The café bought 2 coffees and 5 sandwiches."

### Source lesson01, `we-3`

PROBLEM 3 · ELIMINATION METHOD. Solve $3x + 2y = 16$ and $3x - y = 7$. 1 Both have $3x$; no multiplication needed. 2 Subtract (2) from (1): $3y = 9$, $y = 3$. "Note: subtracting $-y$ gives $+y$." 3 $3x - 3 = 7$, $x = \dfrac{10}{3}$. 4 Verify in (1): $10 + 6 = 16$ ✓. "Non-integer solutions are valid, always write as a fraction, not a rounded decimal."

### Source lesson01, card 07 rule

"If the matching coefficients have the same sign (e.g., both $+3y$), subtract the equations. If they have opposite signs (e.g., $+3y$ and $-3y$), add the equations."

### Source lesson01, drills and short answers

Drill 2 ($y = 3x - 1$ and $2x + y = 9$: $x = 2$, $y = 5$), drill 3 ($5x + 2y = 24$ and $5x - 3y = 4$: $y = 4$, $x = 3.2$), SA 1 (set $2x - 3 = -x + 6$: $x = 3$, $y = 3$), SA 2 ($4x + 3y = 18$ and $4x - y = 6$: $y = 3$, $x = 2.25$), fill-the-blanks ($2x + y = 8$ and $3x + y = 11$: subtract).

Only the parts named in the stop boundary belong to this video. Other tasks on this page are deferred context, not permission to crowd the design.

## 3. Recalculation

- `we-2`: c = 2, s = 5 (and the revisit card gives the same).
- `we-3`: x = 10/3, y = 3. This is the reason for algebra: on a graph 10/3 reads as "about 3.3".
- Drill 2: (2, 5). Drill 3: (16/5, 4) = (3.2, 4). Drill 4 (notebooks and pens, a03 context): n = 4, p = 6.
- SA 1: (3, 3). SA 2: (9/4, 3) = (2.25, 3). Fill-the-blanks: x = 3, y = 2.

Every example above was recalculated with SymPy 1.14.0 (`work/brief-standard-a/recalc.py`). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Subtracting a negative: (3x + 2y) − (3x − y) gives 3y, not y.
- Substituting into the same equation that was rearranged, which only gives 7 = 7.
- Stopping after one value, or giving the second value without a check.
- Rounding 10/3 to 3.3 and then the check fails.
- Multiplying only one side of an equation when matching coefficients.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Open on a01's graph with a crossing between grid lines (`we-3`'s lines, x = 10/3): the reading "about 3.3" is circled, then the algebra gives the exact value and the point drops exactly onto the crossing.
- Substitution as a physical swap: the expression 7 − s lifts out of one equation and slides into the slot where c sat in the other (`ExpressionSlot`, algebra.tsx, inside `WorkingRows`).
- Elimination as two equations stacked like a column sum, the matching 3x terms cancelling (`StudioCancellation`, working-parts.tsx), with the sign flip on −y shown as its own step.
- A "which method" chooser at the end: both start "y =" (equate), one letter alone (substitute), matching numbers (eliminate), using `DecisionTree` (trig-parts.tsx).
- `WorkingBoard` throughout (TaskStrip, EquationStrip, GivensCard, WorkingRows, AnswerFrame, MistakeCard).

Advanced reuse (visual parts only): math-a11-w13 assumes Stage 5 algebra and does not teach these methods, so there is no Advanced script or scene to borrow; the parts above are kit parts. No simulation fits. Kit needs are listed in `../../checks/maths-standard-kit-needs-a.md`.

## 6. Two original candidate practice questions

### Question 1

Solve the simultaneous equations y = 2x + 3 and 3x + y = 18 by substitution.

**Worked answer:** 3x + (2x + 3) = 18, so 5x = 15 and x = 3. Then y = 2(3) + 3 = 9. Check: 3(3) + 9 = 18 ✓. Solution x = 3, y = 9.

### Question 2

Solve the simultaneous equations 2x + 3y = 19 and 2x − y = 3 by elimination.

**Worked answer:** Subtract the second equation from the first: 3y − (−y) = 4y = 16, so y = 4. Then 2x − 4 = 3, so x = 3.5 (or 7/2). Check: 2(3.5) + 3(4) = 19 ✓.

Only the question goes on the card. Hide the answer and the method's key step until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 2: "2y = 16, y = 8", crossed, "minus a minus is plus"). Answers were checked with SymPy.

## 7. Everyday anchors

- A cricket innings: a batter hits 11 boundaries worth 52 runs, some fours and some sixes; how many of each? (sport; 4f + 6s = 52 and f + s = 11 give 7 fours and 4 sixes, checked with SymPy).
- A bubble tea order for a group: regular and large cups at two prices, a number of cups and a total bill (food).
- A bike shop's Saturday: helmets and bike lights sold at two prices, the number of items and the day's takings (shopping).

Varied everyday contexts (sport, food, shopping). None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 11 Advanced packs (grepped 18 November 2026: "bubble tea" and "bike shop" no hits; "fours" hits are dice rolls and fractions, not cricket; basketball, sushi, AFL and a coin jar were avoided because Advanced designs or packs use them, the coin jar in math-a12-d02). No other Standard pack uses them. These are short hooks for pure-algebra practice; a03 owns full worded problems. Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. No new error was found in the parts of lesson01 used here.

Decisions for Claude:

- **Pace flag: this video is at risk of rushing.** It carries three moves (equate, substitute, eliminate) plus the check. For Standard 2 students, a gentle version runs about 9 to 11 minutes. Suggested split if the draft runs long: a02a "substitution, including setting two y = expressions equal" (we-2, SA 1, drill 2) and a02b "elimination, including when to add or subtract" (we-3, SA 2, drill 3). Most Standard 2 HSC items give equations in y = form, so a02a carries the most exam weight.
- The site's elimination rule (same signs subtract, opposite signs add) is a good memory aid; keep it with the reason (we want the matching terms to cancel to zero).
- Keep the café as the site's own example (hook and `we-2`); the anchors above are optional openers.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
