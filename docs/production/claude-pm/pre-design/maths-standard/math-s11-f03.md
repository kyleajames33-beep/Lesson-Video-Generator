# math-s11-f03: How do we change the subject of a formula, including y = ax² + c?

Maths Standard research pack (Year 11, Formulas and equations), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Formulas and equations:

- `cib54d5e23`: Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353). Site coverage: recorded as covered; in practice partial. Lesson04 rearranges linear formulas only; no lesson rearranges y = ax² + c, takes a square root or rejects a negative root (MS-81). The formula in the official wording is MathML; quote it from `sourceHtml`.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f02: `ci2acef85d` (inverse operations, keeping both sides balanced). math-s11-f01: substitution with a calculator. Stage 5: squares and square roots; a positive number has two square roots.

**Prior video:** math-s11-f02.

**Start:** f02 solved for a number each time. When one formula is used again and again for a different letter, rearrange it once. The site's hook: "The distance formula is $d = st$. If you know distance and time, how could you find speed?"

**Stop:** The subject is the letter on its own; rearranging uses f02's inverse operations but keeps letters; divide by the whole multiplier (2π, not 2); when the wanted letter is underneath (t in s = d/t; x in y = k/x), multiply up first, then divide; check a rearrangement with simple numbers; two-step linear rearrangements (C = 8 + 1.5k for k); y = ax² + c: subtract c, divide by a, take the square root, write ±, and keep only the root that makes sense (a length cannot be negative); rearrange first, then substitute. Quadratic graphs are math-s12-a09.

**Next:** math-s11-f04.

## 2. Site order, sections and worked examples

Read-only source 1: [formulas-and-equations/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson04.sa.html), SHA256 `85bf8cdd80b824ece87303a73906a6753528df68a157e34c988473a62df4d9a2`. Rearranging Formulas. Sections: `recall-your-gut-answer`, `the-subject-is-the`, `check-a-rearranged-formula`, `worked-examples-3-in`, `common-errors-middot-the`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Card 02: "Rearranging a formula uses the same inverse-operation logic as solving an equation. The difference: you are isolating a variable symbol, not finding a number." "Rearrange first, substitute second". Card 06: "If $s = 5$ and $t = 4$, then $d = 20$. The rearranged formula gives $s = \frac{20}{4} = 5$, so it matches."

`we-1`: $d = st$ to $s = \frac{d}{t}$; "if $d = 180$ km and $t = 3$ h, then $s = \frac{180}{3} = 60$ km/h".
`we-2`: $C = 2\pi r$ to $r = \frac{C}{2\pi}$; "Divide both sides by $2\pi$ (the whole multiplier, not just 2)."
`we-3`: "$A = bh$. Its area is 84 cm² and its height is 7 cm." $b = \frac{84}{7} = 12$ cm.
Drill: $t = \frac{d}{s}$; $t = \frac{240}{80} = 3$ h; $h = \frac{A}{b}$; $h = \frac{96}{12} = 8$ m. Q1 $t = \frac{150}{50} = 3$ h; Q2 $r = \frac{31.4}{2 \times 3.14} = 5$ cm; Q3 why rearranging first helps. Trap 02's sentence is garbled and the pause prompt says the subject is on "the left side" (MS-80 item 1); use the worked examples.

Read-only source 2: [formulas-and-equations/lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson08.sa.html), SHA256 `963fedd859ac4fa1a9bb496342246289c904a73ac7fd581453d3e20098b681ed`: `we-2` "A cyclist travels 135 km in 3 hours" ($s = 45$ km/h); Q2 $t = 210 \div 70 = 3$ h; drill 3 $h = 72 \div 9 = 8$ cm.

Read-only source 3 (context only): [formulas-and-equations/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/formulas-and-equations/lesson07.sa.html), SHA256 `56fbba593ae4c2b386e409da02860a1b369f59e6e1d17149ec5d8ba024ccdc29`. It substitutes into squared formulas ($A = s^2$) but never rearranges one. The crosswalk cites it for this point; it supplies no rearranging example.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- `we-1` 60; `we-2` 31.4 ÷ 6.28 = 5 (with true π, 4.997, so the site's 3.14 is what makes 5 exact; keep "π ≈ 3.14" on screen if this example is used); `we-3` 12; drill 3 and 8; Q1 3; check 20 ÷ 4 = 5.
- Lesson08: 45, 3, 8.
- SymPy rearrangements: d = st gives s = d/t and t = d/s; C = 2πr gives r = C/(2π); C = 8 + 1.5k gives k = (C − 8)/1.5 (26 gives 12, f01's trip); T = 150 + 85d gives d = (T − 150)/85 (1000 gives 10); t = 120/s gives s = 120/t; I = Prn gives P = I/(rn); y = ax² + c gives x = ±√((y − c)/a).
- New y = ax² + c case: 32 = 0.05s² + 12 gives s = ±20, keep 20 cm. A = πr² with A = 12 gives r ≈ ±1.954, keep 1.95 m.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`). All site answers match.

## 4. Misconceptions and HSC-style traps

- Dividing by part of the multiplier (C/2 leaves πr).
- With the letter underneath (s = d/t), writing t = s/d or t = ds.
- In y = ax² + c, taking the square root before subtracting c and dividing by a.
- Forgetting ±, or keeping a negative length or time as an answer.
- Substituting first and then solving a messy equation (allowed, but slower and error-prone when the formula is reused).
- Squaring instead of square-rooting to undo a square.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A formula as a "machine run backwards": d = st drawn as s → × t → d, then reversed d → ÷ t → s (the inverse operations made visible in order).
- Letters as tiles that move across the equals sign as a whole operation: "× t" leaves the right and becomes "÷ t" on the left, on both sides at once.
- The unknown underneath: s = d/t with t in the denominator; both sides × t (t rises out of the fraction), then ÷ s.
- y = ax² + c peeled in three layers, outermost first: − c, ÷ a, √; at the √ step two answers appear (+20 and −20), and the context (a picture frame's side) crosses out −20 with "a side can't be negative".
- A number check card: choose s = 5, t = 4, d = 20; both forms agree.

Kit: `FunctionMachine` (input-rule-output, run backwards); `ShiftTerm` and `StudioCancellation` (working-parts.tsx) for moving and cancelling terms; `RootExtract` for the square-root step with ±; `WorkingBoard` rows; `DecisionTree` (trig-parts.tsx) for "keep the root that makes sense". Plates only for anchor objects.

## 6. Two original candidate practice questions

### Question 1

The area of a circle is A = πr². A round outdoor table top has an area of 1.2 m². Make r the subject, then find the radius correct to the nearest centimetre.

**Worked answer:** r² = A/π, so r = ±√(A/π). r = √(1.2/π) ≈ 0.618 m, about 62 cm (a radius cannot be negative).

### Question 2

The cost, in dollars, of printing a square poster with side length x metres is C = 25x² + 15. (a) Make x the subject. (b) Find the side length of a poster that costs $55, correct to two decimal places. (c) Explain why only one of the two square roots is a valid answer.

**Worked answer:** (a) C − 15 = 25x², x² = (C − 15)/25, x = ±√((C − 15)/25). (b) x² = 40/25 = 1.6, x ≈ 1.26 m. (c) x = −1.26 is also a solution of the equation, but a side length cannot be negative, so only 1.26 m makes sense.

Only the question goes on the card. Hide the answers until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 2: "x = √55 − 15", crossed, "subtract and divide before the square root"). Answers were checked with SymPy.

## 7. Everyday anchors

- A framing shop's glass price, C = 0.05s² + 12 for a square of side s cm; a $32 quote means s = 20 cm (shopping; the y = ax² + c case with a rejected root).
- A round pool cover: from the cover's area, A = πr², find the radius to buy the right size (home; a non-linear formula with c = 0).
- Holiday spending money: T = 150 + 85d (a $150 buffer plus $85 a day); rearranged to d = (T − 150) ÷ 85, $1,000 lasts 10 days (travel; a two-step linear rearrangement).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "picture frame", "pool cover" and "spending money" no hits; Fahrenheit oven conversions were avoided because math-a11-g03 and g04 use them, a paved patio because math-a12-d07 uses one, and turf because math-s12-r07 and t09 use it). Claude picks one; none is required. Objects only, never people. Prices are invented examples.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New findings: MS-80 item 1 (lesson04 trap 02's garbled sentence and the "left side" pause prompt) and MS-81 (the y = ax² + c gap).

Decisions for Claude:

- **The quadratic half is original teaching** (root ruling 3). Keep to y = ax² + c (no x term), as the syllabus limits it; "make decisions about solutions in the context" means choosing the root that fits.
- **Year 12 needs:** math-s12-t01 rearranges with the unknown underneath (x = 12 ÷ sin 40°), math-s12-a13 turns y = k/x into x = k/y, math-s12-i01 finds P, r or n from I = Prn, and math-s12-a09 names y = ax² + c as the first quadratics students met. The "unknown underneath" move must appear at least once.
- **Pace flag: at risk.** Linear rearranging plus the quadratic case is a lot for one gentle video. Suggested split: f03a (linear rearranging, two-step, unknown underneath, check with numbers) and f03b (y = ax² + c with the ± root and the context decision), sharing the outline number. If kept whole, the site's `we-3` and the check card can go to save time.

Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
