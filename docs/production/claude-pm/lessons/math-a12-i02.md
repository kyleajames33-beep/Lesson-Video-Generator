# Maths A12 I02: How do algebra and a reverse chain rule reveal power primitives? Rewriting into powers, dividing by the inner rate of a linear bracket, and the matched f′(x)[f(x)]ⁿ pattern (design)

Status: Revision 1 (1 Nov). Needs student learning review and maths check (Codex), then a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131 and 135 additions (`FunctionGraph` with `transform.yScale` and `domain`, `DerivativeTracer`, `AlignedAlgebra`, `ExpressionSlot`, `DerivativeFactor`, `AlgebraFraction`, `DomainExclusions`), plus i01's new parts (`PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck`) and one small tracer extension specified under "Codex asset brief". Nothing recorded; human listening pending. Second video of the integral calculus strand.

Narration 5,669 characters, 15 scenes, about 520 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced integral calculus strand. Templates: `math-a12-d10.md` (Revision 2), `math-a12-d08.md` and `math-a12-i01.md` (Revision 1, written just before this one, whose scene 14 is this video's first frame): same structure, voice, paper style and kit parts. All maths visuals are coded; no painted plates (programme decision 5). Pre-design pack: `../pre-design/maths-a12/math-a12-i02.md` (every number recalculated below). Site lesson read (1 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson05.sa.html`, SHA256 `1cdf61d8bdebf5e993e03ce87ca0a07edc7e6fbe9ab48bfd4d6fd7dd8a1479b7` (recomputed 1 Nov; matches the pack and the route). Route entry: `math-a12-i02` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Recall i01 primitives and d06 chain rule." Route stop: "Reverse linear-inner powers and matched f′f^n; state n ≠ −1 and real-power domains." Next: `math-a12-i03`. Route root decisions applied: integral videos i01 to i05 use the existing graph parts plus brief 136 kit needs, and area-under-curve parts belong to i06 onwards (the site's water-tank hook and examples use definite integrals and are not used); site metadata labels ("Year 12 Module 6") are never copied into titles or descriptions; no maths lesson is voiced before the brief 124 pilot passes.

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site module label anywhere; maths visuals coded, never painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and grouped givens (domains are givens); "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; i01 and the chain rule recalled in a sentence each, not re-taught. Template findings applied from the start: exact identities in the algebra (no decimals except the grey derivative-check readouts in scenes 7 and 8 and feedback 2); precise scope (the linear rule needs a ≠ 0 and n ≠ −1; the f′fⁿ rule needs n ≠ −1; every real power carries its domain: x ≠ 0, x ≥ 0, 4x + 1 ≥ 0, x ≠ −½; "divide by the inner rate" is said only for a linear inside); attempt cards give neither the answer nor the factor to divide by; summary strips match the scoped narration; the opening frame equals i01's actual final frame; the + C and the derivative check carry the cause (scenes 3, 4, 6 to 8 and both feedbacks).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `ci9a426b74`: "Determine the primitive function for functions of the form f(x) = (ax + b)ⁿ, for all real n ≠ −1, where a and b are constants"
- `ci81986498`: "Use algebraic manipulation to express given functions in forms suitable for determining primitive functions"
- `ci380c68a8`: "Prove by differentiation, and apply ∫uⁿ (du/dx) dx = (1/(n + 1))uⁿ⁺¹ + C, where u is a function of x, or ∫f′(x)[f(x)]ⁿ dx = (1/(n + 1))[f(x)]ⁿ⁺¹ + C, for real n ≠ −1"
- Completed here from i01: `ci4625ca7d` (negative and fractional powers of x; i01 open decision 2): "Determine the primitive of a given function f(x), where f(x) is a sum of functions of the form kxⁿ for all real n ≠ −1"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i01's handoff (∫(2x + 1)² dx with the chips "expand first?" and "or a shortcut?"); recalls i01 (primitives, + C, the power rule, n ≠ −1, the derivative check) and the chain rule (Year 11, extended in d06) in a sentence each. Teaches: rewriting into powers of x before integrating (roots, reciprocals, dividing each term, expanding), with the original domain kept (`ci81986498`; `ci4625ca7d` completed for negative and fractional powers); the primitive of (ax + b)ⁿ by guessing and fixing with the chain rule, then proved by differentiating (`ci9a426b74`); that an expanded answer and a bracket answer can differ by a constant and both be right (i01's + C); the matched pattern ∫f′(x)[f(x)]ⁿ dx, proved by differentiating, including a missing constant factor, and when it cannot be used (`ci380c68a8`). Stops at power primitives. Not taught: exponentials (i03, the handoff); ∫1/x dx and n = −1 (i04; named only); the site's drill 3, Q1 and Q2 (they need ln|x|, i04's content); definite integrals and the water-tank contexts (i06 onwards); integration by substitution as a named method (not in Advanced; the f′fⁿ pattern is recognised and checked by differentiating only).

## Decisions

- **Learner question kept (route).** "How do algebra and a reverse chain rule reveal power primitives?" The answer, built in order: the power rule only works on powers, so algebra first reshapes a function into powers of x, keeping its domain (2); when the power sits on a bracket, a guess differentiates with the chain rule's extra factor, the inner rate, so the fix divides by it (3); an expanded answer and a bracket answer differ by a constant, so both are primitives (4); for a linear inside ax + b the rule is to divide by the new power and by a (5); for any inside f(x), the pattern works only when the inside's derivative f′(x) is already a factor (6); a missing constant can be supplied, a missing x cannot (7).
- **The hook surprise (opens on i01's frame; site L05 hook "what is ∫1/√x dx?", re-aimed).** Expanding (2x + 1)² works, but √(4x + 1) has nothing to expand. The question becomes how to handle the bracket itself. The site's own hook (1/√x) is used inside scene 2 as a rewriting case instead (as x^(−½) it is the same skill as x⁻³ and x^(3/2); not repeated separately).
- **Algebra first (`ci81986498`; site L05 "two moves", `we-1`, `we-3`, unchanged numbers).** Scene 2 shows three reshapings, one per cue, each with its domain written beside it: ∫x⁻³ dx = −1/(2x²) + C for x ≠ 0 (`we-1` part 1); ∫x^(3/2) dx = (2/5)x^(5/2) + C for x ≥ 0 (`we-1` part 2); (x³ + 2x)/x = x² + 2 for x ≠ 0, so the primitive is x³/3 + 2x + C (`we-3`). The domain is a necessary condition: the rewritten form x² + 2 is defined at 0 but the original is not (pack section 4 of i01; site correction 4). Expanding is the hook's (2x + 1)².
- **The bracket by guess and fix (the cause; site L05 `we-2` note and Trap 03, explained).** The site states the division by 2. Scene 3 shows why: the guess (2x + 1)³/3 is differentiated with the chain rule (recalled in one sentence: differentiate the outside, keep the inside, multiply by the derivative of the inside), giving 2(2x + 1)². A `DerivativeTracer` traces the gradient of the guess, which lands on a curve exactly twice as high as the dashed target (2x + 1)². Halving the guess (a vertical scale ½ on the upper curve) drops the traced curve onto the target. The rule is then the summary: divide by the inner rate as well.
- **Two answers, one family (site L05 `we-2` note; i01 recalled).** Expanding gives 4x³/3 + 2x² + x + C; the bracket gives (2x + 1)³/6 + C = 4x³/3 + 2x² + x + 1/6 + C. Scene 4 graphs both primitives (with C = 0) as two curves a constant 1/6 apart (`PrimitiveFamily` gap bars from i01). Students who expanded and students who used the bracket are both right; the difference is absorbed by C. This prevents the common worry that one of two correct-looking answers must be wrong.
- **The linear rule, proved (`ci9a426b74`).** d/dx [(ax + b)ⁿ⁺¹/(a(n + 1))] = (n + 1)(ax + b)ⁿ · a/(a(n + 1)) = (ax + b)ⁿ, for a ≠ 0 and n ≠ −1. Then √(4x + 1) = (4x + 1)^(½): (4x + 1)^(3/2)/(4 · 3/2) = (1/6)(4x + 1)^(3/2) + C, for 4x + 1 ≥ 0. The derivative check is shown. The phrase "divide by the inner rate" is used only for a linear inside, where the inner rate a is a constant.
- **The matched pattern (`ci380c68a8`; source gap: site L05 does not teach it, original teaching).** ∫2x(x² + 1)³ dx: the inside x² + 1 has derivative 2x, already a factor. Guess (x² + 1)⁴/4; differentiating gives 4(x² + 1)³ · 2x/4 = 2x(x² + 1)³, the integrand. `ExpressionSlot` marks the inside; `DerivativeFactor` marks 2x outside and then the same 2x produced by the chain rule, so the student sees the factor match. General form ∫uⁿ (du/dx) dx = uⁿ⁺¹/(n + 1) + C, n ≠ −1, also written ∫f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + C. Pack question 2 promoted to the teaching example.
- **A missing number, or a missing x (pack section 4 trap: "do not integrate an arbitrary composite by dividing its visible coefficient").** ∫x(x² + 1)³ dx: x = ½ · 2x, so the answer is ½ of the previous one, (x² + 1)⁴/8 + C (constants move through the integral sign, `cibfe89394` from i01). ∫(x² + 1)³ dx has no x outside: dividing by 2x gives (x² + 1)⁴/(8x), whose derivative at x = 1 is 6, not (1 + 1)³ = 8 (grey readout from `DerivativeCheck` failing, a red cross). Reason said plainly: 2x is not a constant, so it cannot be moved through the integral sign; expand instead (x⁶ + 3x⁴ + 3x² + 1). The expanded primitive is shown in one grey line, not worked.
- **Worked example with a real power in the matched pattern (original; route stop "matched f′fⁿ ... real-power domains").** ∫x/√(x² + 4) dx = ∫x(x² + 4)^(−½) dx: the inside's derivative is 2x, x is half of it (a missing number), (x² + 4)^(½)/(½) = 2√(x² + 4), half of that is √(x² + 4) + C; x² + 4 > 0 for every real x, so no domain restriction is needed, and the narration says why. Shows the pattern with n = −½ and a root, so ci380c68a8's "for real n ≠ −1" is used, not just stated. Scene 8.
- **Domains for real powers (route stop).** Said once in scene 2 ("here x can't be zero"; "that needs x to be zero or positive") and once in scene 5 ("where four x plus one isn't negative"); key notes 1 to 3 carry "where the power is defined". Author note a records the separate-pieces subtlety for x ≠ 0 (not taught).
- **Attempts (original).** (A1) ∫6/(2x + 1)⁴ dx for x ≠ −½: rewrite as 6(2x + 1)⁻⁴; raise to −3, divide by −3 and by 2; 6/(−6) = −1; answer −1/(2x + 1)³ + C. Tests rewriting a reciprocal, a negative power and the inner rate together. Crossed: "−2/(2x + 1)³ + C" (forgot the inner rate; its derivative is 12/(2x + 1)⁴, twice the integrand). (A2) ∫x²(x³ + 1)⁴ dx: the inside's derivative is 3x²; x² is a third of it; answer (x³ + 1)⁵/15 + C. Tests the matched pattern with a missing number. Crossed: "x³(x³ + 1)⁵/15 + C" (each factor integrated separately and multiplied; its derivative at x = 1 is 22.4, not 16). Neither card names the inside, the factor or the number to divide by. The pack's question 1, ∫(3x + 2)² dx, is a near repeat of the hook and is not used; its question 2 became the scene 6 example.
- **Mistake scene:** none separate. "Apply the power rule to a root directly" (2, said positively; site Trap 01); "drop the domain after simplifying" (2, the x ≠ 0 tag); "treat the bracket like x" (3, the tracer shows twice too high; site Trap 03); "one of two different answers must be wrong" (4); "divide by an x factor" (7, the failed check); "forget the inner rate" (feedback 1, crossed); "integrate a product factor by factor" (feedback 2, crossed).
- **Memory aid:** "Fix a missing number, never a missing x." (see "Memory aid check"). It answers the one decision students get wrong when they meet a composite: whether the pattern can be used.
- **Handoff (route next, `math-a12-i03`).** Scene 14 shows ∫e^(3x) dx with the chip "divide by 3 again?". i03 opens on this frame. Nothing is solved here.
- **Site sources used:** L05 "two moves" (rewrite roots and reciprocals; expand or divide first); key terms (fractional and negative powers); the 1/√x pattern (scene 2 tag only); `we-1`, `we-2` (with its reverse chain note), `we-3`; Trap 01 and Trap 03 (scenes 2, 3). Not used: the water-tank hook and examples (definite integrals, i06 onwards), Trap 02 (see site correction 3), drill 3, Q1 and Q2 (need ln|x|, i04), Q3 (definite, i06).
- **Site corrections (quoted from site lesson 5, read 1 Nov; for `../site-corrections-maths-a12.md`; none of these is logged yet):**
  1. Head/title and course header: "Integrating Power Functions | HSC Maths Advanced Year 12 Module 6 | HSCScience" and "Module 6 · L2 of 15". Stale module labelling for the 2024 syllabus (same reason as logged items 1 to 7). Suggest the 2024 focus-area name.
  2. Hook, orient and section 11: "A water tank fills at a rate ... How much water enters in the first 4 minutes?" and "V = ∫₀⁹ 5t^(−1/2) dt = ... = 30 litres", "The decreasing rate (water pressure drops as tank fills)". A definite integral (total change) is used in a lesson on primitives before definite integrals are taught (route i06 onwards), and the physical reason given for the falling rate is unsupported. Suggest moving the tank examples to the definite-integral lessons and removing the pressure claim.
  3. Trap 02: "x^(3/2)/(3/2) does NOT equal x^(3/2)/1.5 left unsimplified." The two expressions are equal (3/2 = 1.5). The intended point is presentation. Suggest: "Dividing by 3/2 is multiplying by 2/3: write (2/3)x^(3/2) + C."
  4. `we-1`, `we-3`, quick check and drills: no domain is stated for x⁻³ (x ≠ 0), x^(3/2) (x ≥ 0), 1/√x (x > 0) or (x³ + 2x)/x (x ≠ 0, even though x² + 2 is defined at 0). Suggest adding the domain beside each answer, as `ci9a426b74` and `ci380c68a8` work with real powers.
  5. Key terms, drill 3, Q1 and Q2: "∫x⁻¹ dx = ln|x| + C" and answers containing ln|x| appear in a power-function lesson before the logarithm primitive is taught (2024 `cif7109f2d`, route i04). Teaching-order note, not a mathematical error; suggest moving drill 3, Q1 and Q2 to the log-primitive lesson or adding a pointer.
  6. Revisit card: "Many students forget the negative sign in the exponent". Unsupported frequency claim, as logged items 24 and 28. Suggest "A common slip is forgetting the negative sign".
  - Checked and correct: `we-1` (−1/(2x²) + C; (2/5)x^(5/2) + C), `we-2` (x³/3 + x² + x + C; (x + 1)³/3 + C differs by 1/3; (2x + 1)³/6 + C), `we-3` (x³/3 + 2x + C), the √x, 1/√x and 1/x² patterns, quick check (B), drills 1, 2 and 4, the fill-in (2), match (B), Q1 and Q2 algebra, Q3 (108 L; t = 36^(2/3) ≈ 10.90 min; 18^(2/3) ≈ 6.868 min; ratio 2^(2/3) ≈ 1.587).
- **Pack questions answered:** primary examples `we-1`, `we-2`, `we-3` used unchanged (scenes 1 to 4); pack question 2 promoted to scene 6; pack question 1 replaced by A1 (reasons above); the pack's visual need "reverse-chain factor-matching highlight" met by `ExpressionSlot` plus `DerivativeFactor` (existing parts) in scenes 3, 6, 7 and feedback 2, and by the tracer extension in scene 3.
- **Cause chain taught, in order:** (1) a bracket can be expanded, a root of a bracket cannot (hook); (2) the power rule needs powers of x, so algebra reshapes the function, keeping its domain (2); (3) treating the bracket like x fails by the factor the chain rule adds, the inner rate, so divide by it (3); (4) two correct answers differ only by a constant (4); (5) for any linear inside, divide by the new power and by a; this is proved by differentiating, and holds where the power is defined (5); (6) for any inside, the pattern needs the inside's derivative as a factor, and is proved by differentiating (6); (7) a missing constant can be supplied, a missing x cannot (7); (8) the same pattern works for a real power, and its domain is checked (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge` and prior videos):** `ci1d192d62` (d/dx xⁿ = nxⁿ⁻¹ for all real n); `cif6a6cb7d` (sum and multiple rules). From i01: primitives, + C, ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C for n ≠ −1, ∫kf dx = k∫f dx, the derivative check. From Year 11 and d06: the chain rule. Also assumed from Year 11: index laws (1/xⁿ = x⁻ⁿ, √x = x^(½)), expanding a square.
- **Learner-visible vocabulary (plain meaning at first use):** inside (the expression in the bracket, scene 3); inner rate (the derivative of a linear inside, the number a in ax + b, scene 3); reverse chain rule (running the chain rule backwards by dividing by what it would multiply, scene 3); fractional and negative powers (recall, scene 2). No other new terms.
- **Legacy logic ported:** none.
- **New explainer motion (coded; brief 129, 131, 135 kit, i01 parts, one extension):** **rewriting rows** (`AlignedAlgebra` with the original form, the power form and the domain tag written in that order, scene 2); **candidate tracer with target** (`DerivativeTracer` extension: the lower panel shows a dashed target curve, and the upper candidate can be scaled vertically while the trace follows, scene 3); **inside and factor highlights** (`ExpressionSlot` role inner, `DerivativeFactor` at cues, scenes 3, 6, 7, feedback 2); **two primitives a constant apart** (`PrimitiveFamily` with `gapBars`, scene 4); **derivative check, passing and failing** (`DerivativeCheck`; a failing check shows a red cross and the grey readout instead of a tick, scene 7, feedback 2); **domain tags** (`DomainExclusions`, scenes 2, 5, 8, 10, 11); crossed chips (`Chip` with `cross`), `Callout`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; graph on the left when present (about 1,000 × 680 px); algebra in the right column, or centred when there is no graph (scenes 2, 5 to 7). Unequal unit lengths (no angle claims).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Domains with a gap: for x⁻³ and (x³ + 2x)/x the domain is x ≠ 0, two separate intervals, so strictly the general primitive may use different constants on x < 0 and x > 0 (i01 author note b). Not taught; the learner copy says "x can't be zero" and writes "+ C" in the usual HSC form. i04 meets the separate pieces for 1/x.
  (b) x^(3/2) is taken for x ≥ 0 (real power of a non-negative base); (2/5)x^(5/2) has derivative x^(3/2) for x > 0 and a one-sided derivative 0 at x = 0. (4x + 1)^(½) is defined for x ≥ −¼; its primitive (1/6)(4x + 1)^(3/2) differentiates to it for x > −¼, one-sided at −¼. Learner copy: "where four x plus one isn't negative".
  (c) Scene 3 tracer: upper candidate (2x + 1)³/3 on x −1 to 0.5 (y −1 to 3; values −1/3 at −1, 0 at −½, 1/3 at 0, 8/3 at 0.5); lower traced gradient 2(2x + 1)² (0 to 8) against the dashed target (2x + 1)² (0 to 4), lower y 0 to 9. After the scale ½ the upper curve is (2x + 1)³/6 (−1/6 to 4/3) and the trace equals the target.
  (d) Scene 4: P(x) = 4x³/3 + 2x² + x, Q(x) = (2x + 1)³/6; Q − P = 1/6 for every x. Window x −1 to 0.5, y −0.6 to 1.5; P(−1) = −1/3, Q(−1) = −1/6, P(−½) = −1/6, Q(−½) = 0, P(0) = 0, Q(0) = 1/6, P(0.5) = 7/6, Q(0.5) = 4/3. Gap bars at x = −1, −0.5, 0, 0.5, each 1/6 (labelled "1/6").
  (e) Scene 7 failing check: W(x) = (x² + 1)⁴/(8x) for x ≠ 0; W′(1) = 6 (quotient rule; not shown), while (x² + 1)³ at x = 1 is 8. The readout is "at x = 1: 6, not 8", exact integers, so no decimals. The expanded primitive x⁷/7 + 3x⁵/5 + x³ + x + C is shown in grey, not worked.
  (f) Feedback 2 failing check: V(x) = x³(x³ + 1)⁵/15; V′(1) = 112/5 = 22.4, while x²(x³ + 1)⁴ at x = 1 is 16. Grey readout "at x = 1: 22.4, not 16" (22.4 is exact as a decimal; 112/5 in the author table).
  (g) Pronunciations: "two x plus one, all squared"; "the square root of four x plus one"; "x to the minus three"; "x to the three on two" (d-strand convention for fractional powers; "x to the power three halves" is the alternative for the voice pilot); "two fifths of x to the five on two"; "a x plus b, to the n"; "x squared plus one, cubed"; "u to the n, times d u by d x"; "f prime of x"; "e to the three x" (handoff).

Main question: *Expanding (2x + 1)² works, but √(4x + 1) has nothing to expand. How do algebra and a reverse chain rule find primitives of powers like these?*
Entry knowledge (Year 11 `ci1d192d62`, `cif6a6cb7d`, the chain rule; i01 primitives and the power rule for primitives): powers, + C, the derivative check.
Stops after: rewriting into powers with domains; the linear-inside rule, proved; the f′fⁿ pattern, proved, with a missing constant; when the pattern cannot be used. No exponentials, no 1/x, no definite integrals.
Handoff: math-a12-i03 (route next): ∫e^(3x) dx.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as i01): primitives blue; target curves dashed ink; tangent stubs and the traced gradient amber (`MATH_ACCENT`); the inside slot teal; the derivative factor amber; domains and givens navy; gap bars teal; a passing derivative check amber with an ink tick, a failing one with a red cross; algebra in ink; the current line bright; earlier lines dim. Screen maths writes x⁻³, x^(3/2) as a built-up superscript, √(4x + 1), (2x + 1)², f′(x), ∫ … dx and fractions built up where space allows.

### 1. hook (expand, or not?)
> Last video ended here: the integral of two x plus one, all squared. Expanding works. The bracket squared is four x squared, plus four x, plus **one**. Then integrate term by term: four x cubed over three, plus two x squared, plus x, plus **C**. But now try the square root of four x plus one. There's nothing to **expand**. So how can algebra, and the chain rule run backwards, find primitives like **these**?

Visual: opens on i01's last frame: the memory line small at the top; "∫(2x + 1)² dx" large in the centre with the bracket ringed; the chip "expand first?" at the left with the faint "4x² + 4x + 1" under it; the chip "or a shortcut?" at the right. Heading writes on: "Power primitives: algebra and the reverse chain rule". On "one" the faint expansion brightens into a row "(2x + 1)² = 4x² + 4x + 1". On "C" the next row writes "∫(4x² + 4x + 1) dx = 4x³/3 + 2x² + x + C" with a small tick under the "expand first?" chip. On "expand" a second integral writes beside it: "∫√(4x + 1) dx" with a chip "nothing to expand" and a scribble circle on the root. On "these" both integrals move to the top right as the scene question: "powers of x, or powers of a bracket?".

### 2. algebra first: make powers of x
> First, the algebra. The power rule works on powers of x, so rewrite the function as powers before integrating. One over x cubed is x to the minus three. Raise the power to minus two, and divide by minus two. That's minus one over two x squared, plus C, where x can't be **zero**. x to the three on two becomes x to the five on two, divided by five on two. That's two fifths of x to the five on two, which needs x to be zero or **positive**. And a fraction like x cubed plus two x, all over x, splits into x squared plus two. Its primitive is x cubed over three, plus two x, plus C, still for x not equal to **zero**. One over root x works the same way, as x to the minus a half.

Visual: board clears to a centred algebra layout; i01's formula card "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1" small at the top right. `AlignedAlgebra` rows, one per case: "∫(1/x³) dx = ∫x⁻³ dx = x⁻²/(−2) + C = −1/(2x²) + C" with the rewriting step "1/x³ = x⁻³" glowing first; on "zero" (first) a navy `DomainExclusions` tag "x ≠ 0". Second row: "∫x^(3/2) dx = x^(5/2)/(5/2) + C = (2/5)x^(5/2) + C" with a grey tag "÷ 5/2 = × 2/5"; on "positive" a navy tag "x ≥ 0". Third row: "∫(x³ + 2x)/x dx = ∫(x² + 2) dx = x³/3 + 2x + C" with the division shown term by term (each numerator term divided by x, `AlgebraFraction` splitting); on "zero" (last) a navy tag "x ≠ 0 (from the original)" with the original fraction underlined. A small grey chip at the side: "1/√x = x^(−½) works the same way, x > 0". At most three bright items: the current row, its rewriting step and its domain tag.

### 3. a bracket: guess, check, fix
> Now the bracket. Treat it like x, and guess two x plus one, cubed, over three. Check by differentiating with the chain rule: differentiate the outside, keep the inside, then multiply by the derivative of the inside, which is **two**. So the guess differentiates to two times the bracket squared. Watch its gradient. It traces a curve exactly twice as high as the one we **want**. So halve the guess. Two x plus one, cubed, over six, differentiates to exactly two x plus one, **squared**. Dividing by the inside's rate is the reverse chain **rule**.

Visual: board clears to a two-part layout. Right column: row "guess: (2x + 1)³/3"; `ExpressionSlot` (role inner, teal) around 2x + 1 with the label "inside". Row "d/dx: 3(2x + 1)² · 2 / 3 = 2(2x + 1)²", written term by term as the chain rule is said; on "two" (first) `DerivativeFactor` lights the "· 2" amber with the label "derivative of the inside". On "Watch its gradient" the left area shows the extended `DerivativeTracer` (author note c): upper graph the guess (2x + 1)³/3; lower panel the dashed target (2x + 1)² labelled "want"; the moving tangent runs along the upper curve (about 3 s) and the amber trace builds 2(2x + 1)²; on "want" the trace is complete and a pair of grey double arrows at x = 0 and x = 0.5 shows heights 2 against 1 and 8 against 4, tag "twice as high". On "halve the guess" the upper curve scales vertically by ½ (about 1.5 s) and the trace drops onto the dashed target, which turns solid. On "squared" (last) the row "(2x + 1)³/6: d/dx = (2x + 1)²" writes with a `DerivativeCheck` tick. On "rule" a chip "reverse chain rule: divide by the inside's rate".

### 4. two answers, one family
> But expanding gave a different-looking answer. Which one is right? Expand the bracket answer. It's four x cubed over three, plus two x squared, plus x, plus one **sixth**. That's the expanded answer, plus one sixth. On the graph, they're the same shape, a constant gap **apart**. So both are primitives, and the C absorbs the **difference**.

Visual: the tracer clears; the left graph shows window x −1 to 0.5, y −0.6 to 1.5 (author note d). Right column: two rows, "expanding: 4x³/3 + 2x² + x + C" and "bracket: (2x + 1)³/6 + C". On "sixth" a third row expands the second: "(2x + 1)³/6 = 4x³/3 + 2x² + x + 1/6", with "+ 1/6" amber. On "apart" `PrimitiveFamily` draws both primitives (with C = 0) in blue and pale blue, and teal gap bars at x = −1, −0.5, 0, 0.5, each labelled "1/6". On "difference" a chip "differ by a constant: both correct" and a small i01 recall tag "any two primitives differ by a constant".

### 5. the rule for a linear inside
> This works for any bracket a x plus b. Differentiating a x plus b, to the n plus one, multiplies by n plus one, and by the inner rate, **a**. So the primitive divides by both. The integral of a x plus b, to the n, is a x plus b to the n plus one, over a times n plus one, plus C, for a not zero and n not minus **one**. Now the square root. Four x plus one, to the half, becomes four x plus one to the three on two, over four times three on two, which is **six**. So the answer is one sixth of four x plus one, to the three on two, plus C, where four x plus one isn't **negative**.

Visual: board clears to centred algebra. Row: "d/dx (ax + b)ⁿ⁺¹ = (n + 1)(ax + b)ⁿ · a"; on "a" (bold) the "· a" lights as a `DerivativeFactor` labelled "inner rate". The boxed rule writes on the third sentence: "∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹ / (a(n + 1)) + C"; on "one" a navy tag "a ≠ 0, n ≠ −1, where the power is defined". A small proof line under it, grey: "check: d/dx gives (n + 1)(ax + b)ⁿ · a / (a(n + 1)) = (ax + b)ⁿ" with `CancelledFactor` on a and on (n + 1). On "Now the square root" the hook's "∫√(4x + 1) dx" returns: row "= ∫(4x + 1)^(½) dx = (4x + 1)^(3/2) / (4 · 3/2) + C"; on "six" the denominator "4 · 3/2" collapses to "6"; final row "= (1/6)(4x + 1)^(3/2) + C"; on "negative" a navy tag "4x + 1 ≥ 0" and a `DerivativeCheck` tick ("d/dx gives (4x + 1)^(½)").

### 6. when the inside's derivative is already there
> The same idea works when the inside isn't linear, as long as the inside's derivative is there. Find the integral of two x, times x squared plus one, cubed. The inside is x squared plus one. Its derivative, two x, is already sitting **outside**. So guess x squared plus one, to the four, over four. Differentiating gives four times the bracket cubed, times two x, over four. That's two x, times the bracket cubed, exactly the **integrand**. In general, the integral of u to the n, times d u by d x, is u to the n plus one, over n plus one, plus C, for n not minus **one**.

Visual: board clears: task strip "Find"; equation strip "∫2x(x² + 1)³ dx". `ExpressionSlot` (teal, "inside") around x² + 1; on "outside" `DerivativeFactor` rings the 2x amber with the label "derivative of the inside" and a thin amber link from the slot to the factor ("d/dx (x² + 1) = 2x"). Row "guess: (x² + 1)⁴/4"; row "d/dx: 4(x² + 1)³ · 2x / 4 = 2x(x² + 1)³", the chain rule's "· 2x" lighting amber and matching the ringed 2x in the integrand; on "integrand" a `DerivativeCheck` tick and the integrand underlined. On "one" (last) the boxed general form writes: "∫uⁿ (du/dx) dx = uⁿ⁺¹/(n + 1) + C, n ≠ −1" with the second form under it, smaller: "∫f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + C". The example's 2x, x² + 1 and the letters du/dx, u share colours (amber, teal).

### 7. a missing number, or a missing x
> What if the outside factor is just x? The integral of x, times x squared plus one, cubed. Here x is half of two x, so the answer is half the last one: x squared plus one, to the four, over **eight**. A missing number can be fixed, because a constant moves through the integral sign. But with no x outside at all, the integral of x squared plus one, cubed, can't be done this way. Two x isn't a constant, so dividing by it doesn't undo the chain rule. Check it: at x equals one, the derivative of that guess is six, not **eight**. Here, expand **instead**.

Visual: the scene 6 boxed form stays small at the top. Row "∫x(x² + 1)³ dx = ½∫2x(x² + 1)³ dx" with "x = ½ · 2x" grey; on "eight" (first) "= (x² + 1)⁴/8 + C" with a `DerivativeCheck` tick; a chip "missing number: fix it (∫kf dx = k∫f dx)". On "no x outside" a new row "∫(x² + 1)³ dx" with the inside slot but an empty dashed ring where the factor should be, labelled "no 2x here". A grey guess "(x² + 1)⁴/(8x) ?" writes; on "eight" (second) `DerivativeCheck` runs and fails: red cross, grey readout "at x = 1: derivative 6, but (x² + 1)³ = 8" (author note e). On "instead" a grey row "expand: ∫(x⁶ + 3x⁴ + 3x² + 1) dx = x⁷/7 + 3x⁵/5 + x³ + x + C" and a chip "missing x: use algebra".

### 8. worked example: a root with its inside's derivative
> One more worked example, with a root. Find the integral of x, over the square root of x squared plus four. First, rewrite it as x, times x squared plus four, to the minus a **half**. The inside is x squared plus four, with derivative two x. We have x, which is half of that, so it's a missing **number**. Raising the power to a half and dividing by a half doubles it: two times the square root of x squared plus four. Then take half of that. The answer is the square root of x squared plus four, plus **C**. And x squared plus four is always positive, so this works for every real **x**. Differentiating back gives x over the root, the integrand **exactly**.

Visual: board clears to a calculation layout: task strip "Find"; equation strip "∫ x/√(x² + 4) dx". The scene 6 boxed form and the scene 7 chip "missing number: fix it" stay small at the top. Rows: on "half" (first) "= ∫x(x² + 4)^(−½) dx" with "1/√u = u^(−½)" grey; `ExpressionSlot` (teal, "inside") on x² + 4 and a grey "d/dx (x² + 4) = 2x"; on "number" the x is ringed amber with "x = ½ · 2x" and the row "= ½∫2x(x² + 4)^(−½) dx". Next row "= ½ · (x² + 4)^(½)/(½) + C", with "÷ ½ = × 2" grey; on "C" boxed "= √(x² + 4) + C". On "x" (bold) a navy tag "x² + 4 > 0 for every real x". On "exactly" `DerivativeCheck` "d/dx √(x² + 4) = x/√(x² + 4)" with a tick, the integrand underlined.

### 9. memory aid
> Here's a rule of thumb for the reverse chain rule. Fix a missing number, never a missing x. If the inside's derivative is out by a constant, adjust the constant. If it needs an x that isn't there, use algebra **instead**.

Visual: the two scene 7 rows return side by side: the x(x² + 1)³ case with its tick (labelled "missing number: fix it") and the (x² + 1)³ case with its red cross (labelled "missing x: can't"). The handwritten line writes large: "Fix a missing number, never a missing x." Under it, smaller: "Linear inside: ∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/(a(n + 1)) + C, a ≠ 0, n ≠ −1. Check by differentiating." On "instead" the expand chip from scene 7 glows. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the integral of six, over two x plus one, to the four, for x not equal to minus a half. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find ∫ 6/(2x + 1)⁴ dx, for x ≠ −½." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no rule card, no inside slot).

### 11. feedback 1 (brief)
> Rewrite it as six times two x plus one, to the minus **four**. Raise the power to minus three, then divide by minus three, and by the inner rate, **two**. Six over minus six is minus one. So the answer is minus one over two x plus one, cubed, plus **C**. Forgetting the two gives minus two over the bracket cubed, which differentiates to twice the **integrand**.

Visual: card shrinks to the top ("x ≠ −½" in the card underlined). Rows: on "four" "∫6(2x + 1)⁻⁴ dx"; on "two" "= 6(2x + 1)⁻³ / ((−3)(2)) + C" with the "(2)" amber ("inner rate"); "= −(2x + 1)⁻³ + C"; on "C" boxed "−1/(2x + 1)³ + C" with a `DerivativeCheck` tick. On "integrand" a chip "−2/(2x + 1)³ + C" fades in and is crossed (caption "derivative 12/(2x + 1)⁴: twice too big"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Find the integral of x squared, times x cubed plus one, to the four. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find ∫x²(x³ + 1)⁴ dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The inside is x cubed plus one, and its derivative is three x squared. We have x squared, which is a third of that: a missing **number**. So the answer is a third of x cubed plus one, to the five, over five. That's x cubed plus one, to the five, over fifteen, plus **C**. Integrating the two factors separately and multiplying doesn't work. A product doesn't integrate factor by **factor**.

Visual: card shrinks to the top. Inside slot (teal) on x³ + 1; grey "d/dx (x³ + 1) = 3x²"; the x² ringed amber with "x² = ⅓ · 3x²" on "number". Rows "= ⅓∫3x²(x³ + 1)⁴ dx = ⅓ · (x³ + 1)⁵/5 + C"; on "C" boxed "(x³ + 1)⁵/15 + C" with a `DerivativeCheck` tick. On "factor" a chip "x³/3 · (x³ + 1)⁵/5 = x³(x³ + 1)⁵/15" fades in and is crossed, with a failing check readout "at x = 1: 22.4, not 16" (author note f). Hold about 1 second.

### 14. handoff
> So algebra turns a function into powers, and the reverse chain rule divides by the rate of a linear inside. Next, an exponential: the integral of e to the three x. Does the same division by three **appear**?

Visual: board clears. The memory line from scene 9 returns small at the top. Centre: "∫e^(3x) dx" writes large, with the exponent 3x in a teal inside slot. On "appear" a chip "divide by 3 again?" draws with a "?" and a chip "Next: exponential primitives". No answer shown. Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Rewrite as powers of x before integrating: 1/xⁿ = x⁻ⁿ, √x = x^(½); expand brackets or divide each term. Keep the original domain (for example x ≠ 0).
2. ∫(ax + b)ⁿ dx = (ax + b)ⁿ⁺¹/(a(n + 1)) + C, for a ≠ 0, n ≠ −1, where the power is defined. Divide by the new power and by the inner rate a.
3. ∫f′(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + C, n ≠ −1. The inside's derivative must be a factor. A missing number can be adjusted; a missing x cannot.
4. Two answers that differ by a constant are both correct. Check by differentiating.

Memory aid (large, on the notes screen): *Fix a missing number, never a missing x.* Second line: *Linear inside: divide by the new power and by a.*

## Teaching checks

- **Does it explain causes?** Why rewrite first: the power rule only applies to powers of x (2). Why divide by the inner rate: the chain rule multiplies by it when the guess is differentiated, and the tracer shows the guess's gradient twice too high (3). Why two different answers can both be right: they differ by a constant (4). Why the linear rule has a in the denominator: differentiating multiplies by a (5). Why the f′fⁿ pattern needs f′: the chain rule produces that factor, so it must be there to be undone (6). Why a missing x cannot be fixed: x is not a constant, so it cannot move through the integral sign, and the check fails (7).
- **Misconceptions addressed:** "apply the rule to a root directly" (2); "simplifying removes the restriction" (2, x ≠ 0 kept); "treat a bracket like x" (3; feedback 1, crossed); "one of two different-looking answers is wrong" (4); "divide by whatever is outside" (7, failed check); "integrate a product factor by factor" (feedback 2, crossed).
- **One idea at a time:** one rewriting per cue in scene 2; one chain-rule factor per scene from 3 to 7; one step per cue in each feedback.
- **Video makes it easier:** the tracer shows the guess's gradient landing twice as high and then dropping onto the target when the guess is halved (3); two primitives sit a constant gap apart (4); the factor produced by the chain rule lights in the same colour as the factor already in the integrand (6); the check visibly passes for a missing number and fails for a missing x (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (the integrand and its domain), 10 seconds each with the invitation to pause, nothing answer-bearing; neither card names the inside or the number to divide by. One crossed mistake each; feedback about 27 s and 29 s (scenes 11 and 13).
- **Avoided double teaching:** i01's power rule and + C are a formula card and a recall tag; the chain rule is one sentence; index laws are used, not taught.
- **Syllabus coverage:** `ci81986498` (1, 2, 7; key note 1); `ci9a426b74` (3, 4, 5, 9, 10; key note 2); `ci380c68a8` (6, 7, 8, 12, 13; key note 3; proved in 6; real power n = −½ in 8); `ci4625ca7d` (2: negative and fractional powers, completing i01).
- **Out of scope by design:** exponentials (i03); 1/x and ln|x| (i04); definite integrals (i06); integration by substitution as a named method.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find ∫ 6/(2x + 1)⁴ dx, for x ≠ −½."
Model answer: ∫6(2x + 1)⁻⁴ dx = 6 · (2x + 1)⁻³/((−3)(2)) + C = −(2x + 1)⁻³ + C = −1/(2x + 1)³ + C. Check: d/dx (−(2x + 1)⁻³) = 3(2x + 1)⁻⁴ · 2 = 6/(2x + 1)⁴. Classic mistake (crossed): "−2/(2x + 1)³ + C" (inner rate 2 not divided; its derivative is 12/(2x + 1)⁴).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "Find ∫x²(x³ + 1)⁴ dx."
Model answer: d/dx (x³ + 1) = 3x², and x² = ⅓ · 3x², so ∫x²(x³ + 1)⁴ dx = ⅓ · (x³ + 1)⁵/5 + C = (x³ + 1)⁵/15 + C. Check: d/dx gives 5(x³ + 1)⁴ · 3x²/15 = x²(x³ + 1)⁴. Classic mistake (crossed): "x³(x³ + 1)⁵/15 + C" (factors integrated separately; derivative at x = 1 is 22.4, not 16).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | (2x + 1)² = 4x² + 4x + 1; ∫ = 4x³/3 + 2x² + x + C | 1, 4 |
| Rewriting (site we-1) | ∫x⁻³ dx = −1/(2x²) + C, x ≠ 0; ∫x^(3/2) dx = (2/5)x^(5/2) + C, x ≥ 0 | 2 |
| Divide first (site we-3) | (x³ + 2x)/x = x² + 2, x ≠ 0; ∫ = x³/3 + 2x + C | 2 |
| Guess and fix | d/dx (2x + 1)³/3 = 2(2x + 1)²; d/dx (2x + 1)³/6 = (2x + 1)²; tracer heights at x = 0: 2 and 1; at x = 0.5: 8 and 4 | 3 |
| One family | (2x + 1)³/6 − (4x³/3 + 2x² + x) = 1/6; values in author note d | 4 |
| Linear rule | d/dx [(ax + b)ⁿ⁺¹/(a(n + 1))] = (ax + b)ⁿ; ∫√(4x + 1) dx = (1/6)(4x + 1)^(3/2) + C, 4x + 1 ≥ 0 | 5 |
| Matched pattern | ∫2x(x² + 1)³ dx = (x² + 1)⁴/4 + C; ∫x(x² + 1)³ dx = (x² + 1)⁴/8 + C | 6, 7 |
| Missing x | (x² + 1)⁴/(8x): derivative 6 at x = 1, against 8; expanded ∫(x² + 1)³ dx = x⁷/7 + 3x⁵/5 + x³ + x + C | 7 |
| Worked root (original) | ∫x/√(x² + 4) dx = ∫x(x² + 4)^(−½) dx = ½ · (x² + 4)^(½)/(½) + C = √(x² + 4) + C; x² + 4 > 0 for all real x | 8 |
| A1 | ∫6/(2x + 1)⁴ dx = −1/(2x + 1)³ + C, x ≠ −½; crossed −2/(2x + 1)³, derivative 12/(2x + 1)⁴ | 9, 10 |
| A2 | ∫x²(x³ + 1)⁴ dx = (x³ + 1)⁵/15 + C; crossed x³(x³ + 1)⁵/15, derivative 112/5 = 22.4 at x = 1 against 16 | 11, 12 |
| Handoff | ∫e^(3x) dx (not solved) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 and Python (1 Nov); Codex to re-check numerically and with a CAS.

- (2x + 1)² = 4x² + 4x + 1; ∫(4x² + 4x + 1) dx = 4x³/3 + 2x² + x.
- ∫x⁻³ dx = −1/(2x²); ∫x^(3/2) dx = (2/5)x^(5/2); ∫(x² + 2) dx = x³/3 + 2x.
- d/dx (2x + 1)³/3 = 2(2x + 1)²; d/dx (2x + 1)³/6 = (2x + 1)².
- (2x + 1)³/6 − (4x³/3 + 2x² + x) = 1/6; P(−1) = −1/3, Q(−1) = −1/6, P(−0.5) = −1/6, Q(−0.5) = 0, P(0) = 0, Q(0) = 1/6, P(0.5) = 7/6, Q(0.5) = 4/3.
- d/dx (1/6)(4x + 1)^(3/2) = (4x + 1)^(1/2) for x > −¼.
- d/dx [(ax + b)ⁿ⁺¹/(a(n + 1))] = (ax + b)ⁿ (symbolic a ≠ 0, n ≠ −1).
- d/dx (x² + 1)⁴/4 = 2x(x² + 1)³; d/dx (x² + 1)⁴/8 = x(x² + 1)³.
- d/dx [(x² + 1)⁴/(8x)] at x = 1 is 6; (x² + 1)³ at x = 1 is 8; ∫(x² + 1)³ dx = x⁷/7 + 3x⁵/5 + x³ + x.
- d/dx √(x² + 4) = x/√(x² + 4); ∫x/√(x² + 4) dx = √(x² + 4).
- ∫6/(2x + 1)⁴ dx = −1/(2x + 1)³; d/dx (−2/(2x + 1)³) = 12/(2x + 1)⁴.
- d/dx (x³ + 1)⁵/15 = x²(x³ + 1)⁴; d/dx [x³(x³ + 1)⁵/15] at x = 1 is 112/5; x²(x³ + 1)⁴ at x = 1 is 16.
- Tracer (author note c): (2x + 1)³/3 at −1, −0.5, 0, 0.5: −1/3, 0, 1/3, 8/3; 2(2x + 1)² at 0, 0.5: 2, 8.
- Site checks: we-2 (x + 1)³/3 − (x³/3 + x² + x) = 1/3; Q3 4 · 9^(3/2) = 108; 36^(2/3) ≈ 10.9027; 18^(2/3) ≈ 6.8683; 2^(2/3) ≈ 1.5874; drill 2 (3/5)x^(5/3); match B.

## Memory aid check

- **"Fix a missing number, never a missing x."** Written for this lesson. Meaning, as said in scene 9: in the reverse chain rule the inside's derivative must be a factor of the integrand; if the factor present is a constant multiple of it (x instead of 2x), multiply and divide by that constant, because ∫kf dx = k∫f dx; if the factor would need a power of x that is not there ((x² + 1)³ needs 2x), the pattern cannot be used, and algebra (expanding) is the route. Assumptions checked: "number" means a nonzero constant (a constant moves through the integral sign, i01); "x" stands for any non-constant factor (dividing by a non-constant does not commute with integration; scene 7's check fails at x = 1); the aid does not claim that every composite can be integrated by some method in this course (the expanding route exists here because the power is a whole number). It helps a new case: given ∫x³(x⁴ − 2)⁵ dx the student sees 4x³ is needed, x³ is a quarter of it, and fixes the number; given ∫(x⁴ − 2)⁵ dx the student knows not to divide by 4x³. Introduced after the cause (6, 7).
- **Considered, not used:** "divide by the inner derivative" as a general rule (false for a non-linear inside; it is the exact trap in scene 7); "DIBI" or other acronyms.

## Narration length estimate

Revision 1 count (1 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,669 characters** (5,683 including the joining spaces), 15 scenes. Characters per scene (1 to 15): 393, 666, 532, 329, 565, 559, 543, 638, 217, 125, 346, 100, 378, 203, 75. At 13.3 characters per second the speech is about 426 s; add about 16 s of holds and settling time (the 3 s gradient trace and the 1.5 s halving in scene 3, the gap bars in scene 4, the passing and failing checks in scenes 7 and 8), 20 s for two countdowns and about 58 s more of the quiet notes hold (94 s of holds): **about 520 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scenes 2 and 8 are the longest; watch the rows in scene 2 (each domain tag must appear on its own cue, not with the row) and the tracer in scene 3 (the trace must be complete before "twice as high as the one we want"). Feedback: scene 11 about 27 s, scene 13 about 29 s (including the 1 s holds), inside the 15 to 30 s guide. Reserve trims if the voiced take runs long: scene 2's last sentence (keep the grey chip); scene 4's "That's the expanded answer, plus one sixth." (keep the amber + 1/6); scene 8's last sentence (keep the tick). The band floor is 5,500: no more than about 160 characters can be trimmed without adding elsewhere.

## Scene list and build ids

Lesson key `m-a12i02` (route math-a12-i02). Suggested explainer folder `src/explainer/lessons/math-a12-i02` and build folder `docs/production/claude-pm/lessons/m-a12i02` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, rewrite-as-powers, guess-check-fix, one-family, linear-inside-rule, matched-inside-derivative, missing-number-or-x, worked-root, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i01's last frame continues into scene 1 (camera continue, same centred integral); 1 to 2 clear change (new case: powers of x); 2 to 3 clear change (back to the bracket); 3 to 4 camera continue (same right column; graph swaps); 4 to 5 clear change; 5 to 6 clear change (new task); 6 to 7 camera continue (same boxed form); 7 to 8 clear change (new task); 8 to 9 camera pull back to the two side-by-side rows; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i02-learning-review.md`, `science_check` = `checks/m-a12i02-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit, the brief 129 maths kit with its d01 addendum, the brief 131 and 135 additions, and i01's new parts:
- `AlignedAlgebra`, `AlgebraFraction`, `CancelledFactor`, `DomainExclusions` (scenes 1, 2, 5 to 8, 11, 13).
- `ExpressionSlot` (role inner) and `DerivativeFactor` (scenes 3, 5 to 8, 13, 14).
- `DerivativeTracer` with the extension below (scene 3).
- `PrimitiveFamily` with `gapBars` (scene 4; i01 part).
- `IntegralNotation` (all integrals; i01 part), `DerivativeCheck` with the failing state below (scenes 3, 5 to 8, 11, 13; i01 part).
- Shared: `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, scribble circle, `KeyNotes`, `Heading`.

New parts needed: none beyond i01's three; two small extensions, specified under "Codex asset brief".

## Codex asset brief

No painted plate is needed (programme decision 5). Two small extensions to coded kit parts (build after i01's three parts):

1. **`DerivativeTracer` target and candidate scale.** Add optional `target?: {fn(x), label?, dashed?: true}` drawn on the lower panel in ink (dashed until matched), and `candidateScale?: number` (animated from the lesson frame, default 1) that multiplies the upper graph's y values and, by the same factor, the traced gradient values (the tangent slope is scale × derivative(x)). When `candidateScale × derivative(x)` equals `target.fn(x)` at every sample (tolerance 1e-9 relative), the target turns solid. Model check: central differences of the scaled upper curve equal the traced values at every sample; the pilot uses (2x + 1)³/3 with derivative 2(2x + 1)², target (2x + 1)², scale 1 → ½ on x −1 to 0.5 (author note c).
2. **`DerivativeCheck` failing state.** Add `expectFail?: true` with `failAt` and a `readout` string. Instead of throwing on a mismatch, the part asserts that the mismatch exists (the central difference of `answerFn` differs from `targetFn` at the stated `readoutX` by more than 1e-6) and draws a red cross with the grey readout. If the functions match, it throws, so a "fail" cannot be shown for a correct answer. Pilot: (x² + 1)⁴/(8x) against (x² + 1)³ at x = 1 (6 against 8); x³(x³ + 1)⁵/15 against x²(x³ + 1)⁴ at x = 1 (22.4 against 16).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the primitives and derivatives), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every conclusion: √(x² + 4) + C in scene 8 (and that x² + 4 > 0 for every real x); the hook expansion; site `we-1`, `we-3`; (2x + 1)³/6 + C; the constant 1/6 between the two answers; (1/6)(4x + 1)^(3/2) + C; (x² + 1)⁴/4 + C and (x² + 1)⁴/8 + C; the failing check value 6; A1 and A2 as in the model answers, with the crossed derivatives 12/(2x + 1)⁴ and 22.4.
3. Confirm the scope of every learner-visible general claim: the linear rule carries a ≠ 0, n ≠ −1 and "where the power is defined" (scene 5, key note 2, memory aid line 2); "divide by the inner rate" is said only for a linear inside (scenes 3, 5, 14; key note 2); the f′fⁿ rule carries n ≠ −1 (scene 6, key note 3); domains x ≠ 0, x ≥ 0, 4x + 1 ≥ 0 and x ≠ −½ appear where the function needs them.
4. Confirm the scene 3 tracer is consistent (the traced curve is the gradient of the plotted candidate at every scale; at scale ½ it equals the target).
5. Confirm scene 7's reason (x is not a constant, so it cannot move through the integral sign) and the failing value are correct, and that the expanded primitive of (x² + 1)³ is correct.
6. Confirm both attempt questions are original in wording, every condition the answer needs is on the card (the domain in A1), and neither card names the inside, the factor or the number to divide by.
7. Confirm the three syllabus quotes and the completed `ci4625ca7d` quote match the route JSON `syllabusActions` exactly (linear form of the MathML) and no site "Module 6" label appears in learner copy or metadata.
8. Confirm no definite integral, area or accumulation appears in learner copy.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Add site corrections 1 to 6 under Decisions to `../site-corrections-maths-a12.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Integrating Powers and Brackets: the Reverse Chain Rule | Year 12 Maths Advanced

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson05.sa.html

You can expand (2x + 1)² before integrating, but √(4x + 1) has nothing to expand. First, rewrite roots, reciprocals and fractions as powers of x, keeping the domain. Then see why a bracket's primitive divides by the inside's rate: the chain rule multiplies by it, so a guess comes out twice too big until you fix it. Two different-looking answers can both be right when they differ by a constant. Then the pattern ∫f′(x)[f(x)]ⁿ dx, proved by differentiating, and the rule of thumb: fix a missing number, never a missing x. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Determine the primitive function for functions of the form f(x) = (ax + b)ⁿ, for all real n ≠ −1, where a and b are constants"
"Use algebraic manipulation to express given functions in forms suitable for determining primitive functions"
"Prove by differentiation, and apply ∫uⁿ (du/dx) dx = (1/(n + 1))uⁿ⁺¹ + C, where u is a function of x, or ∫f′(x)[f(x)]ⁿ dx = (1/(n + 1))[f(x)]ⁿ⁺¹ + C, for real n ≠ −1"
"Determine the primitive of a given function f(x), where f(x) is a sum of functions of the form kxⁿ for all real n ≠ −1"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: Primitives and + C (previous video); the chain rule. Next: Exponential primitives.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. `ci4625ca7d` split (root; carried from i01 open decision 2).** This design completes the negative and fractional powers of x in scene 2. If root asks i01 to include a non-integer example instead, scene 2 keeps its rows (they also serve `ci81986498`) and the syllabus line here becomes a recall.
- **2. Fractional power wording (voice pilot).** "x to the three on two" follows the house style for reading fractional exponents; "x to the power of three halves" is the alternative. The brief 124 pilot decides for the strand.
- **3. Scene 4 (learning review).** The "two answers, one family" scene costs about 26 s. It earns its place if it prevents students doubting a correct expanded answer; the reviewer judges whether it interrupts the reverse-chain thread (scenes 3 and 5). If cut, move its chip into scene 5 as a one-sentence aside.
- **4. Site link (root).** The `.sa.html` form, as d01 to d10 and i01.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i01 and the chain rule; check that the tracer in scene 3 makes "twice too high" clear; that the matched-factor colours in scene 6 make "the inside's derivative must be there" visible; that the failing check in scene 7 persuades rather than asserts; that the domain tags read as conditions, not clutter; that the attempt cards give nothing away), then the Codex maths check and error check.
- The tracer, the gap bars and the passing and failing checks carry the explanation; judge them at playback speed in the voiced preview, not from stills.
