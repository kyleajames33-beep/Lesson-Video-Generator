# math-a11-w07: What makes a relation a function?

Brief 243 research pack, 16 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci32f9832a` (Introduction to functions and relations): Describe a relation between two sets as an association between the elements of one set and the elements of the other set [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: partial. Gap: A relation is defined as a set of ordered pairs and an input-output mapping. The idea of an association between the elements of two sets is not shown explicitly (no two-set arrow picture).
- `cic0b5416c` (Introduction to functions and relations): Define a real function f of a real variable x as a relation where each element x of a given set is associated with exactly one element y of the second set [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci9288f9fe` (Introduction to functions and relations): Recognise that a relation is a rule which can be represented by an algebraic formula, a table of values, a set of ordered pairs (x, y) or a graph [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.
- `ci9bf331ec` (Introduction to functions and relations): Apply the vertical line test on the graph of a relation to determine whether it represents a function [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** Stage 5 (Year 10): Plotting points and reading graphs; tables of values.

**Prior video:** math-a11-w06.

**Start:** Recall plotting ordered pairs and drawing a graph from a table.

**Stop:** Relation as an association between two sets; function as each input paired with exactly one output; four representations; the vertical line test. Notation f(x) waits for w08.

**Next:** math-a11-w08.

## 2. Site order, sections and worked examples

Read-only source: [working-with-functions/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `6c801a0d45246191bbd1238086f7b388f08d5afdb0e8cb43d96c000d3de15645`. Title: Functions & Relations. Lesson id maths-adv-y11-m1-l01.

Data-step ids: `orient-and-recall`, `what-is-a-function`, `function-notation`, `worked-examples`, `traps-and-classify`, `drill-and-consolidate`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source working-with-functions/lesson01.sa.html, `we-func-2`

Worked example 2 · the vertical line test +5 XP on full reveal Determine whether the graph of $x = y^2$ represents a function. 1 Recall the vertical line test If any vertical line intersects the graph more than once → not a function 2 Analyse the graph of $x = y^2$ This is a sideways parabola opening to the right. For any positive $x$-value, there are two $y$-values. 3 Apply the test At $x = 4$: $y = 2$ and $y = -2$. A vertical line at $x = 4$ intersects the graph twice. 4 $x = y^2$ is NOT a function ✓ One input ($x = 4$) maps to two outputs ($y = 2$ and $y = -2$), violates the definition.

Other worked examples in this lesson (we-func-1) are deferred source context, not part of this video.

Only the parts named in the stop boundary belong to this video. Other tasks on these pages are deferred context, not permission to crowd the design.

## 3. Recalculation

- we-func-2: x = y^2 at x = 4 gives y = 2 and y = -2, so the vertical line x = 4 meets the graph twice: not a function.
- we-func-1 (evaluating f(2) = 3, f(-1) = 9 for f(x) = x^2 - 3x + 5) belongs to w08.

Every example above was recalculated with SymPy (work in the scratchpad, sympy 1.14 from work/brief130-python). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Thinking a function cannot repeat outputs (two inputs to one output is fine).
- Using a horizontal line test.
- Calling every equation in x and y a function (circles, sideways parabolas).
- The site defines a relation only as a set of ordered pairs; the syllabus wants the two-set association (see crosswalk gap).

These follow from the functions and official content, not claims about how often markers see them.

## 5. Visual needs

- Arrow (mapping) diagram between two set ovals: arrows from inputs to outputs; a second arrow from the same input turns red. This is the missing two-set picture.
- Vertical line test: a vertical line sweeping across a graph, counting hits live (one stays green, two turns red).
- The same relation shown four ways (formula, table, ordered pairs, graph) linked by colour.

All graphs, algebra and diagrams are coded in the shared paper style with one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit details: `../../checks/maths-a11-kit-needs.md`.

## 6. Two original candidate practice questions

### Question 1

Which of these are functions? (a) {(1, 2), (2, 3), (3, 2)} (b) {(2, 1), (2, 5), (4, 0)} (c) y = x^2 - 1 (d) x^2 + y^2 = 9

**Worked answer:** (a) function: each input once. (b) not: input 2 has outputs 1 and 5. (c) function: each x gives one y. (d) not: x = 0 gives y = 3 and y = -3.

### Question 2

One of y = sqrt(x + 4) and y^2 = x + 4 is a function. Which, and why?

**Worked answer:** y = sqrt(x + 4) is a function: the root sign gives one non-negative output. y^2 = x + 4 is not: at x = 0, y = 2 and y = -2, so a vertical line meets it twice.

Only the question goes on the card. Hide the answer, its sign and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A vending machine: each button gives one snack (function); a button that randomly gives two snacks is not.
- Student ID number to birthday is a function; birthday to student is not (two students can share a birthday).
- A phone contact with two mobile numbers: name to number is not a function.

Varied everyday contexts (money, phones, sport, travel, food). Claude picks one; none is required.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`. Resolve logged items before reusing site copy; the site stays read only. Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
