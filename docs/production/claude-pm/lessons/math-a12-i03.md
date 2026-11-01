# Maths A12 I03: Why does an exponential primitive divide by the inner rate? eˣ as its own primitive, e^(ax + b), the matched f′(x)e^(f(x)), aˣ through its inner rate ln a, and the base-one exception (design)

Status: Revision 2 (2 Nov): brief 142 repairs applied (scene 4 says a = 0 makes the exponent constant, length-neutral; scene 3 triangle described as run ⅓, rise 1 everywhere; opening frame made exact by i02's silent return and this lesson's own silent return after its notes). Needs a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum (`DerivativeTracer` overlay mode, `TangentTriangle`) and the brief 131, 133 and 135 additions (`NumericDial` with `excluded` and `limitedParameter`, `ReadoutPanel`, `AlignedAlgebra`, `ExpressionSlot`, `DerivativeFactor`), plus i01's new parts (`PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck`) and i02's two extensions (`DerivativeTracer` target and candidate scale; `DerivativeCheck` failing state). No further new part. Nothing recorded; human listening pending. Third video of the integral calculus strand.

Narration 5,623 characters (unchanged length at Revision 2), 16 scenes, about 519 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced integral calculus strand. Templates: `math-a12-d10.md` (Revision 2), `math-a12-d08.md`, and `math-a12-i01.md` and `math-a12-i02.md` (Revision 1, written just before this one; i02's scene 14 is this video's first frame): same structure, voice, paper style and kit parts. All maths visuals are coded; no painted plates (programme decision 5). Pre-design pack: `../pre-design/maths-a12/math-a12-i03.md` (every number recalculated below). Site lesson read (1 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html`, SHA256 `a649e47a640c4f6d67aa3395373d55685a45446f60ff04fb869b1e83d85f8d25` (recomputed 1 Nov; matches the pack and the route). The same site lesson also sources i04 (the 1/x half). Route entry: `math-a12-i03` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Recall primitives and d01/d02 exponential derivatives." Route stop: "Establish exponential primitives and matched f′exp(f); handle base 1 separately. Log terms in source tasks finish in i04." Next: `math-a12-i04`. Route root decisions applied: integral videos i01 to i05 use the existing graph parts plus brief 136 kit needs, and area-under-curve parts belong to i06 onwards; site metadata labels ("Module 6") are never copied into titles or descriptions; no maths lesson is voiced before the brief 124 pilot passes; "ln" is never spoken, "the natural log of" in full (d02 root decision 3).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site module label anywhere; maths visuals coded, never painted; no people, hands or figures (the drug example is algebra and a graph only); one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and grouped givens (the rate's units and the initial value are givens); "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; d01, d02, i01 and i02 recalled in a sentence each, not re-taught. Template findings applied from the start: exact identities in the algebra (ln 2, ln 3, e⁰ = 1), decimals only in grey readouts (the dial readouts in scene 7); precise scope (a ≠ 0 for e^(ax + b); a > 0 and a ≠ 1 for aˣ; the f′e^f pattern needs f′ as a factor); attempt cards give neither the answer nor the inner rate; summary strips match the scoped narration; the opening frame equals i02's actual final frame; the + C and the derivative check carry the cause (scenes 2 to 6, 8, 9 and both feedbacks).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `cibfca8e4a`: "Establish and use the formula ∫eˣ dx = eˣ + C"
- `ci3e845e76`: "Establish and use the formula ∫e^(ax + b) dx = (1/a)e^(ax + b) + C, where a and b are constants and a ≠ 0"
- `cic1fe679f`: "Establish and use the formula ∫aˣ dx = aˣ/ln a + C, where a is a constant and a > 0"
- `ci22db0117`: "Establish and use ∫e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫f′(x)e^(f(x)) dx = e^(f(x)) + C"
- `cic5393984`: "Find primitives of functions involving exponential functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i02's handoff (∫e^(3x) dx with the exponent in a teal inside slot and the chip "divide by 3 again?"); recalls d01 (d/dx e^(ax + b) = ae^(ax + b)), d02 (aˣ = e^(x ln a), d/dx aˣ = aˣ ln a), i01 (+ C, initial conditions) and i02 (the reverse chain rule; "fix a missing number, never a missing x") in a sentence each. Teaches: ∫eˣ dx = eˣ + C because eˣ's gradient equals its height (`cibfca8e4a`); the primitive of e^(ax + b) divides by the inner rate a, shown on the graph and proved by differentiating (`ci3e845e76`); the matched pattern ∫f′(x)e^(f(x)) dx (`ci22db0117`); ∫aˣ dx = aˣ/ln a + C, explained as dividing by the inner rate ln a of e^(x ln a) (`cic1fe679f`); base 1 handled separately (route stop); one initial-condition problem with an exponential rate (`cic5393984`, site `we-3`). Stops at exponential primitives. Not taught: the 4/x and 3/x terms of site `we-1` and `we-2`, drills 3 and 4, Q1 and Q2 (they need ∫1/x dx, which i04 finishes, route stop); ∫1/x dx itself (i04; shown only as the handoff); trig primitives (i05); definite integrals (i06 onwards; the site's "total dose" context is not used).

## Decisions

- **Learner question kept (route).** "Why does an exponential primitive divide by the inner rate?" The answer, built in order: eˣ's gradient equals its height, so eˣ is its own primitive (2); e^(3x)'s gradient is three times its height, because the chain rule multiplies by the inner rate 3, so the primitive divides by 3 (3); the same holds for any linear exponent ax + b with a ≠ 0 (4); for a non-linear exponent, the exponent's derivative must already be a factor (5); aˣ is e^(x ln a), a linear exponent with inner rate ln a, so its primitive divides by ln a (6); at a = 1 that rate is zero, and 1ˣ = 1 is not exponential at all, so its primitive is x + C (7).
- **The hook (opens on i02's frame).** The power rule does not apply: x is in the exponent, not the base. The obvious guess, e^(3x) itself, differentiates to 3e^(3x): three times too big. The hook asks whether dividing by 3 is right, and what happens for a base other than e (2ˣ). Site L06 hook ("We know d/dx eˣ = eˣ. So what does ∫eˣ dx equal?") is scene 2's opening question.
- **eˣ is its own primitive, seen on the graph (`cibfca8e4a`).** Scene 2 uses the d01 overlay: `DerivativeTracer` overlay mode plots eˣ's gradient as dots on the same axes, and they land on eˣ itself. Then `PrimitiveFamily` shows eˣ + C with parallel stubs at x = 0: shifted copies have gradient eˣ too, which is why + C stays. (The site's "every Ceˣ equals its own derivative" is true but is a different family, vertical stretches, not shifts; it is not used, to avoid confusing it with + C. Site correction 2.)
- **The inner rate made visible (`ci3e845e76`; site "chain rule in reverse", explained).** Scene 3: `TangentTriangle` on y = e^(3x) at x = 0 shows run ⅓, rise 1 (the in-window triangle, author note a), while the height is 1: the gradient 1 ÷ ⅓ = 3 is three times the height. Everywhere, d/dx e^(3x) = 3e^(3x) (d01, recalled). The fix divides by 3; the extended `DerivativeTracer` (overlay, i02 extension) traces the gradient of (1/3)e^(3x) onto the dashed target e^(3x). The primitive sits a third as high as the curve it came from, and its gradient lands on that curve.
- **Any linear exponent (`ci3e845e76`; site `we-1` and `we-2` exponential terms, unchanged numbers).** d/dx [(1/a)e^(ax + b)] = (1/a) · ae^(ax + b) = e^(ax + b), a ≠ 0. Examples: ∫2e^(3x) dx = (2/3)e^(3x) + C (`we-1` first term); ∫e^(−x) dx = −e^(−x) + C (`we-2` first term, a = −1), with a derivative check on the sign. The 4/x and 3/x terms of those examples finish in i04 (route stop); not mentioned here. Why a ≠ 0: when a = 0, e^(ax + b) = e^b is a constant, whose primitive is e^b x (author note b; said in one clause).
- **Matched pattern (`ci22db0117`; source gap: site L06 has no f′e^f example, original teaching).** ∫2xe^(x²) dx = e^(x²) + C: the exponent x² has derivative 2x, already a factor (`ExpressionSlot` and `DerivativeFactor` in i02's colours). General form ∫f′(x)e^(f(x)) dx = e^(f(x)) + C, proved by differentiating with the chain rule. i02's memory aid is recalled in one sentence: ∫xe^(x²) dx = ½e^(x²) + C (a missing number); ∫e^(x²) dx (a missing x) "has no primitive we can write with these rules" (author note c: it has no elementary primitive at all; the learner copy is the safe weaker statement).
- **aˣ through its inner rate (`cic1fe679f`; site "general base", explained).** The site divides d/dx aˣ = aˣ ln a by ln a. Scene 6 adds the reason that answers this video's question: aˣ = e^(x ln a) (d02), a linear exponent whose inner rate is ln a, so the primitive divides by ln a, the same rule as scene 4. Example 2ˣ: ∫2ˣ dx = 2ˣ/ln 2 + C (site example). The syllabus wording gives "a > 0"; the narration says "for a positive" and scene 7 immediately excludes a = 1.
- **Base one handled separately (route stop; source gap: the site states a ≠ 1 but never shows why).** Scene 7 uses `NumericDial` with `excluded` {value: 1} and `limitedParameter` (brief 133): the base slides from 2 to 1.1 and never reaches 1. The curve aˣ flattens towards y = 1, a grey readout shows ln a falling (0.693 to 0.095), and the primitive through the origin, (aˣ − 1)/ln a, straightens towards the line y = x (author note d). At a = 1 exactly, drawn separately: 1ˣ = 1 for every x, ln 1 = 0 cannot be divided by, and ∫1 dx = x + C. The visual shows that x + C is the natural answer, not an arbitrary exception. Pack question 2's "1ˣ" idea is taught here instead of asked.
- **Worked example with an initial condition (site L06 `we-3`, unchanged numbers; `cic5393984`; i01's idea applied to an exponential).** dA/dt = −0.5e^(−0.5t) mg per hour, A(0) = 2 mg: A = −0.5 · (1/(−0.5))e^(−0.5t) + C = e^(−0.5t) + C; e⁰ = 1, so 1 + C = 2, C = 1; A = e^(−0.5t) + 1. `PrimitiveFamily` slides from C = 0 (through (0, 1)) to C = 1 (through (0, 2)), so C is again the slide, not the given value (i01 feedback 2). The long-term level 1 mg is said in one sentence with a dashed line A = 1 (the site's own conclusion; author note e on the context). No people or bodies are drawn: the givens strip names the drug amount and units only.
- **Worked example: algebra first (original; `cic5393984`; i02's `ci81986498` applied to exponentials).** ∫(eˣ + 1)² dx: expand to e^(2x) + 2eˣ + 1 (index law (eˣ)² = e^(2x), said because e^(x²) is the tempting wrong square); then each term has its own inner rate: ½e^(2x) + 2eˣ + x + C. Shows that "inner rate" is applied term by term, that inner rate 1 changes nothing, and that a constant term integrates to x. Scene 9.
- **Attempts (original).** (A1) ∫4e^(2x − 1) dx (pack question 1): inner rate 2; answer 2e^(2x − 1) + C. Crossed: "4e^(2x − 1) + C" (inner rate forgotten; its derivative 8e^(2x − 1) is twice the integrand; site Trap 01). (A2) ∫(3ˣ + e^(−2x)) dx: 3ˣ/ln 3 − ½e^(−2x) + C. Tests aˣ, a negative inner rate and one C. Crossed: "3ˣ ln 3 − ½e^(−2x) + C" (multiplied by ln 3, which is differentiating). Neither card names the inner rate or the rule. Pack question 2 (3ˣ and 1ˣ) is split: 3ˣ goes into A2, 1ˣ is taught in scene 7, because a card asking about 1ˣ separately would signal that it is special.
- **Mistake scene:** none separate. "Use the power rule on e^(3x)" (hook, refuted: x is in the exponent); "∫e^(3x) dx = e^(3x) + C" (hook and 3; feedback 1, crossed; site Trap 01); "lose the minus in ∫e^(−x) dx" (4, the sign check); "divide by a non-constant exponent derivative" (5, recalled from i02); "multiply by ln a" (6, said positively; feedback 2, crossed); "the aˣ rule works for a = 1" (7); "C equals the initial value" (8, e⁰ = 1).
- **Memory aid:** "Divide by the inner rate: a for e^(ax + b), ln a for aˣ." (see "Memory aid check"). It is the video's answer in one line, with both cases named so that the conditions (a ≠ 0, a ≠ 1) attach to the right formula.
- **Handoff (route next, `math-a12-i04`).** Scene 15 shows ∫(1/x) dx with the power-rule attempt x⁰/0 crossed in red and a small coded graph of y = 1/x on both sides of x = 0 (two branches, x = 0 excluded). i04's start is "Recall i03 exponential primitives and d03 log derivative"; its opening question is the primitive of 1/x. Nothing is solved here.
- **Site sources used:** L06 hook (∫eˣ dx; scene 2); formula reference and "Integrating eˣ and e^(kx)" card (the reverse chain explanation, the verification line, the examples e^(3x), e^(−2x), 5e^(0.1x): e^(3x) used in scene 3, the others not needed); `we-1` and `we-2` exponential terms (scene 4); "general base" card (2ˣ example and verification, scene 6); `we-3` (scene 8); Trap 01 (hook, scene 3, feedback 1); quick check (B, not used); drills 1, 2, 5 and the cloze (same skills, not used). Not used: the tumour and radiation contexts (site correction 3), the 1/x card, Trap 02 and Trap 03 (i04), drills 3 and 4, Q1, Q2 (i04), Q3 (a near repeat of `we-3`).
- **Site corrections (quoted from site lesson 6, read 1 Nov; for `../site-corrections-maths-a12.md`; none of these is logged yet):**
  1. Course header: "Module 6 · L3 of 15". Stale module labelling for the 2024 syllabus (same reason as logged items 1 to 7). The head title has no module label ("Integrating Exponentials and Logarithms | HSC Maths Advanced Year 12 | HSCScience"); only the visible header needs the 2024 focus-area name.
  2. Formula reference, key insight, and revisit card: "every Ceˣ equals both its own derivative and its own integral; eˣ is the one normalised by f(0) = 1". The derivative half is correct. "Its own integral" is loose: ∫Ceˣ dx = Ceˣ + K, a family of shifts, so Ceˣ is one of its own primitives, not "its own integral". Placed beside "+ C" it also mixes two families (stretches Ceˣ and shifts eˣ + C). Suggest: "eˣ is a primitive of itself: ∫eˣ dx = eˣ + C. (Each Ceˣ is also its own derivative.)"
  3. 1/x card, "Tumour growth and medical imaging": "the total dose is ∫D(t) dt = −D₀τe^(−t/τ) + C. These integrals determine treatment duration and intensity, directly affecting patient outcomes." A total over a time interval is a definite integral, not an indefinite integral with + C, and the clinical claim is unsupported. Suggest removing the context or rewriting it as a primitive: "a primitive of D(t) is −D₀τe^(−t/τ)". (This card belongs to i04's half of the lesson; logged here because the lesson file is shared.)
  4. "Integrating eˣ and e^(kx)" and formula reference: "∫e^(kx) dx = (1/k)e^(kx) + C" is stated without k ≠ 0. The 2024 point `ci3e845e76` requires a ≠ 0 (and uses a, not k, for the coefficient of x; logged notation note under item 21). Suggest adding "k ≠ 0".
  5. "General base" card: "This rule is less common in HSC than eˣ because any aˣ can be rewritten as e^(x ln a)." Unsupported frequency claim (as logged items 24 and 28). Suggest: "Any aˣ can be rewritten as e^(x ln a), which explains the ln a."
  6. Trap headings: "3 traps that cost marks"; Trap 02 "will lose a mark in any problem where x might be negative". Unsupported marking claims (as logged items 31 and 47). Suggest "Common errors" and "is wrong wherever x can be negative". (Trap 02 belongs to i04's half.)
  - Checked and correct: the e^(kx) examples (e^(3x)/3; −e^(−2x)/2; 50e^(0.1x)), `we-1` and `we-2` exponential terms, `we-3` (A = e^(−0.5t) + 1, A → 1), the general-base rule and 2ˣ, 3ˣ checks, a = e reduces to eˣ, quick check (B), drills 1, 2, 5 (e^(4x)/4; −(5/2)e^(−2x); 2ˣ/ln 2), the cloze (ln 3 both blanks), the match (1C, 2A, 3D, 4B), Q3 (A = 4e^(−0.5t), A(4) = 4e⁻² ≈ 0.541 mg, A → 0).
- **Pack questions answered:** primary examples `we-1` and `we-2` (exponential terms only) and `we-3` used unchanged; pack question 1 used as A1; pack question 2 split (reasons above); the pack's visual needs met ("exponential primitive overlay" as the tracer overlay in scenes 2 and 3; "base-one exception" as the excluded-value dial in scene 7). The pack's trap "do not divide by ln 1" is scene 7.
- **Cause chain taught, in order:** (1) x is in the exponent, so the power rule does not apply; the guess is three times too big (hook); (2) eˣ's gradient equals its height, so it is its own primitive, plus C (2); (3) e^(3x)'s gradient is three times its height, because the chain rule multiplies by the inner rate, so divide by it (3); (4) the same for any ax + b with a ≠ 0, checked by differentiating, including the sign (4); (5) for a non-linear exponent the exponent's derivative must already be a factor (5); (6) aˣ = e^(x ln a), so divide by its inner rate ln a (6); (7) at a = 1 the rate is zero and the function is the constant 1, whose primitive is x + C (7); (8) one initial value fixes C (8); (9) algebra first, then each term's own inner rate (9); (10) memory aid (10).
- **Entry knowledge (route `entryKnowledge` and prior videos):** `ci1d192d62`, `cif6a6cb7d` (Year 11). From d01: d/dx eˣ = eˣ and d/dx e^(ax + b) = ae^(ax + b). From d02: aˣ = e^(x ln a) and d/dx aˣ = aˣ ln a. From i01: primitives, + C, initial conditions. From i02: the reverse chain rule, "fix a missing number, never a missing x".
- **Learner-visible vocabulary (plain meaning at first use):** exponent (the power, recall; scene 1); inner rate (recall from i02: the derivative of a linear inside, here the coefficient of x in the exponent; scene 3); base (the number being raised to the power x, scene 6). No other new terms.
- **Legacy logic ported:** none.
- **New explainer motion (coded; existing kit, i01 parts, i02 extensions):** **gradient dots on the curve** (`DerivativeTracer` overlay mode, scene 2); **eˣ family** (`PrimitiveFamily` with stubs at x = 0, scene 2); **gradient three times the height** (`TangentTriangle` run ⅓, rise 1 at height 1 (gradient 3), with `ReadoutPanel` rows "height 1", "gradient 3", scene 3); **primitive under its function** (`DerivativeTracer` with `target` and `candidateScale`: candidate e^(3x) scaled to ⅓, its gradient trace landing on the dashed e^(3x), scene 3); **inside and factor highlights** (`ExpressionSlot`, `DerivativeFactor`, scenes 1, 4 to 6); **base dial with an excluded 1** (`NumericDial` `excluded` and `limitedParameter`, `FunctionGraph` `parameterFn` for aˣ and (aˣ − 1)/ln a, scene 7); **slide to the initial value** (`PrimitiveFamily`, `NumericDial` "C", scene 8); **derivative checks** (`DerivativeCheck`, scenes 2 to 6, 8, 9, 12, 14); crossed chips (`Chip` with `cross`), `Callout`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; graph on the left (about 1,000 × 680 px); algebra in the right column, or centred when there is no graph (scenes 4, 5). Unequal unit lengths (the tangent triangle's rise and run are labelled, no angle claim).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Scene 3 windows: e^(3x) with `TangentTriangle` at x = 0: x −1.5 to 0.7, y −0.5 to 9 (e^(2.1) ≈ 8.166 inside); run 1 drawn from x = 0 to 1 would leave the window, so the triangle uses run ⅓, rise 1 with labels "run ⅓" and "rise 1" and the readout "gradient = 1 ÷ ⅓ = 3" (exact). Overlay: dashed e^(3x), candidate e^(3x)/3 (height ⅓ at x = 0), gradient dots at x = −1.2, −0.9, −0.6, −0.3, 0, 0.3, 0.6 landing on e^(3x) (e^(−3.6) ≈ 0.027 to e^(1.8) ≈ 6.050).
  (b) a = 0 in e^(ax + b): the function is the constant e^b and ∫e^b dx = e^b x + C. Said in scene 4 as "This needs a not zero. If a is zero, the exponent is constant, so there's no exponential." (Revision 2: the earlier "because then" could be read as referring to a being nonzero), kept to one short sentence.
  (c) e^(x²) has no elementary primitive (Liouville); the learner copy says only "has no primitive we can write with these rules", which is true and does not claim more. The x e^(x²) case: ½e^(x²) + C, derivative xe^(x²).
  (d) Scene 7: for a > 0, a ≠ 1, P_a(x) = (aˣ − 1)/ln a is the primitive of aˣ through (0, 0) (C = −1/ln a). As a → 1, P_a(x) → x for every x (limit (aˣ − 1)/ln a = x; SymPy). Window x −2 to 2, y −2.5 to 5. Values: a = 2: P(2) = 3/ln 2 ≈ 4.328, P(−2) = −0.75/ln 2 ≈ −1.082, 2² = 4; a = 1.1: P(2) = 0.21/ln 1.1 ≈ 2.203, P(−2) ≈ −1.821, 1.1² = 1.21. The rule's own member aˣ/ln a at a = 1.1 has height 1/ln 1.1 ≈ 10.49 at x = 0 (off the window), which is why the member through the origin is the one shown; the narration names it ("the primitive through the origin"). The dial range is 0.5 to 2.5 with the excluded tick at 1; the animated value stays in [1.1, 2] via `limitedParameter`. Grey readout "ln a ≈ 0.693" at a = 2 to "ln a ≈ 0.095" at a = 1.1. At the end the dial dims, and a separate state "a = 1" draws y = 1 (flat) and y = x (the primitive through the origin) with the label "a = 1: separate case".
  (e) Scene 8 context: the site's rate dA/dt = −0.5e^(−0.5t) with A(0) = 2 gives A → 1 mg, so the model does not have the drug fully eliminated. That is the site's model and the arithmetic is correct; the video states the model's conclusion and draws no body or person. Window t 0 to 6, A 0 to 3; family C = 0, 0.5, 1, 1.5; A(6) = e⁻³ + 1 ≈ 1.050. Dashed asymptote A = 1.
  (f) Pronunciations: "e to the three x"; "e to the a x plus b"; "e to the minus x"; "e to the x squared"; "f prime of x, times e to the f of x"; "a to the x"; "the natural log of a" (never "ln"); "two to the x, over the natural log of two"; "e to the minus a half t"; "d A by d t"; "milligrams"; "four e to the two x minus one" (the exponent read as one phrase; the card shows e^(2x − 1) with the bracketed exponent).

Main question: *e to the three x has x in its exponent, so the power rule can't help, and the guess e^(3x) is three times too steep. Why does an exponential primitive divide by the inner rate, and what happens for other bases?*
Entry knowledge (Year 11 `ci1d192d62`, `cif6a6cb7d`; d01, d02 exponential derivatives; i01, i02 primitives and the reverse chain rule): d/dx e^(ax + b) = ae^(ax + b); aˣ = e^(x ln a); + C; fix a missing number, never a missing x.
Stops after: eˣ, e^(ax + b), f′e^f, aˣ, the base-one case and one initial-condition problem. No 1/x, no trig, no definite integrals.
Handoff: math-a12-i04 (route next): ∫(1/x) dx.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as i01 and i02): primitives blue; target curves dashed ink; tangent triangles and gradient dots amber (`MATH_ACCENT`); the exponent slot teal; the derivative factor amber; givens navy; the excluded dial value red; a passing derivative check amber with an ink tick, a failing one with a red cross; algebra in ink; the current line bright; earlier lines dim. Screen maths writes eˣ, e^(3x), e^(ax + b), e^(x²), aˣ, 2ˣ, ln a and fractions built up where space allows.

### 1. hook (x in the exponent)
> Last video ended here: the integral of e to the three x. The power rule can't help, because x isn't the base. It's in the **exponent**. So guess e to the three x itself. Its derivative is three e to the three x, three times too **big**. So is the answer a third of e to the three x? And what about a base that isn't e, like two to the x? Why does an exponential primitive divide by the inner **rate**?

Visual: opens on i02's last frame (i02's key notes end with a silent return to its handoff frame, so this is the actual final frame): the memory line small at the top; "∫e^(3x) dx" large in the centre with the exponent 3x in a teal inside slot; the chips "divide by 3 again?" and "Next: exponential primitives". Heading writes on: "Exponential primitives: divide by the inner rate". On "exponent" a grey chip "xⁿ: x is the base" appears beside a teal chip "e^(3x): x is in the exponent", the power rule card crossed lightly. On "big" a row "guess: e^(3x) → d/dx = 3e^(3x)" writes, with `DerivativeFactor` lighting the 3 amber and the tag "3 times too big". On the next sentence "⅓ e^(3x) ?" writes in grey. On "two to the x" a second integral "∫2ˣ dx" writes beside it. On "rate" both move to the top right as the scene question: "why divide by the inner rate?".

### 2. eˣ is its own primitive
> Start with plain e to the x. Its derivative is e to the x, so at every point, its gradient equals its **height**. That makes e to the x a primitive of itself. So the integral of e to the x is e to the x, plus **C**. Slide e to the x up by three, and the gradient is still e to the x at every x. That's why the C is still **there**.

Visual: graph at the left: window x −2 to 2, y −1 to 9; y = eˣ in blue. On "height" `DerivativeTracer` overlay mode: a tangent moves along eˣ and drops gradient dots at x = −1.5, −1, −0.5, 0, 0.5, 1, 1.5, each landing on the curve itself; `ReadoutPanel` at x = 1 "height e ≈ 2.718, gradient e ≈ 2.718". On "C" (first bold) the right column writes "∫eˣ dx = eˣ + C" with a `DerivativeCheck` tick. On "Slide e to the x up by three" `PrimitiveFamily` slides a copy up to eˣ + 3, with amber stubs at x = 0 on both (slope 1, parallel); on "there" the family eˣ + C, C = −1 to 3, appears faintly.

### 3. e^(3x): the gradient is three times the height
> Now e to the three x. By the chain rule, its derivative is three times e to the three x. On the graph, at x equals zero, the height is one, but the gradient is **three**. Everywhere on this curve, the gradient is three times the height. So to get a primitive, divide by three. A third of e to the three x has gradient exactly e to the three **x**. Watch the gradient of that smaller curve. It lands right on e to the three **x**.

Visual: board clears to the e^(3x) window (author note a). y = e^(3x) in blue; grey recall chip "d01: d/dx e^(ax + b) = ae^(ax + b)". On "three" (bold) `TangentTriangle` at x = 0 with run ⅓ and rise 1, labels "run ⅓", "rise 1", and `ReadoutPanel` rows "height 1", "gradient 3" (author note a). On "Everywhere" the triangle slides to x = −0.5 and x = 0.4 and back (the readout keeps "gradient = 3 × height"). On "divide by three" the right column writes "∫e^(3x) dx = ⅓e^(3x) + C". On "x" (first) the curve turns dashed ink and labelled "e^(3x)"; a blue curve ⅓e^(3x) draws under it. On "x" (second) the extended `DerivativeTracer` (overlay, `target` e^(3x)) runs a tangent along the blue curve and drops amber gradient dots that land on the dashed curve, which turns solid when the trace completes; `DerivativeCheck` tick on the right-column row.

### 4. any linear exponent
> The same happens for any linear exponent, a x plus b. Differentiating e to the a x plus b multiplies by a, the inner rate, so the primitive divides by it. The integral of e to the a x plus b is one over a, times e to the a x plus b, plus C. This needs a not zero. If a is zero, the exponent is **constant**, so there's no exponential. So two e to the three x becomes two thirds of e to the three **x**. And e to the minus x divides by minus one, giving minus e to the minus **x**. Check the sign by differentiating: minus e to the minus x differentiates back to e to the minus **x**.

Visual: board clears to centred algebra. Row "d/dx (1/a)e^(ax + b) = (1/a) · a · e^(ax + b) = e^(ax + b)" with the "· a" lit amber ("inner rate") and `CancelledFactor` on a and 1/a. Boxed rule writes on the third sentence: "∫e^(ax + b) dx = (1/a)e^(ax + b) + C"; on "constant" a navy tag "a ≠ 0" with a grey aside "a = 0: e^b is a constant". On "x" (first bold after constant) the row "∫2e^(3x) dx = 2 · ⅓e^(3x) + C = ⅔e^(3x) + C" (site `we-1`, exponential term). On "x" (next) "∫e^(−x) dx = (1/(−1))e^(−x) + C = −e^(−x) + C" with "a = −1" amber (site `we-2`). On "x" (last) `DerivativeCheck` "d/dx (−e^(−x)) = −(−1)e^(−x) = e^(−x)" with a tick, the two minus signs ringed.

### 5. when the exponent isn't linear
> If the exponent isn't linear, the reverse chain rule still works, as long as the exponent's derivative is a factor. Take two x, times e to the x squared. The exponent is x squared, and its derivative, two x, is right **there**. Differentiating e to the x squared gives exactly two x, times e to the x squared. So the integral is e to the x squared, plus **C**. In general, the integral of f prime of x, times e to the f of x, is e to the f of x, plus C. And remember: fix a missing number, never a missing **x**. So x times e to the x squared gives half of e to the x squared. But e to the x squared on its own has no primitive we can write with these **rules**.

Visual: task strip "Find"; equation strip "∫2xe^(x²) dx". `ExpressionSlot` (teal, "exponent") on x²; on "there" `DerivativeFactor` rings 2x amber with a thin link "d/dx (x²) = 2x". Row "d/dx e^(x²) = e^(x²) · 2x" with the "· 2x" lighting amber and matching the ringed 2x; on "C" "∫2xe^(x²) dx = e^(x²) + C" with a tick. On "In general" the boxed form writes: "∫f′(x)e^(f(x)) dx = e^(f(x)) + C", second line smaller "∫e^u (du/dx) dx = e^u + C". On "x" (memory line) i02's line "Fix a missing number, never a missing x." returns small. On the next sentence the row "∫xe^(x²) dx = ½∫2xe^(x²) dx = ½e^(x²) + C" with a tick. On "rules" a grey row "∫e^(x²) dx" with an empty dashed ring where the 2x should be and the tag "no 2x: not with these rules".

### 6. another base: the inner rate is ln a
> Now two to the x. Differentiating a to the x gives a to the x, times the natural log of a. Here's why. a to the x is e to the x times the natural log of a. So its exponent is linear, and the inner rate is the natural log of **a**. Divide by it, and the integral of a to the x is a to the x, over the natural log of a, plus C, for a **positive**. So two to the x integrates to two to the x, over the natural log of **two**. And when a is e, the natural log of e is one, so this is just e to the x again.

Visual: board clears to centred algebra; the scene 4 boxed rule small at the top. Grey recall chip "d02: d/dx aˣ = aˣ ln a". Row "aˣ = e^(x ln a)" with `ExpressionSlot` (teal) on "x ln a"; on "a" (bold) `DerivativeFactor` lights "ln a" amber with the label "inner rate" (and the scene 4 rule beside it with a ↔ ln a matched in amber). Boxed rule writes on "Divide by it": "∫aˣ dx = aˣ/ln a + C"; on "positive" a navy tag "a > 0" and a dashed placeholder tag "a = 1?" in grey. On "two" (last) "∫2ˣ dx = 2ˣ/ln 2 + C" with `DerivativeCheck` "d/dx: 2ˣ ln 2 / ln 2 = 2ˣ" and a tick. On the last sentence a grey line "a = e: ln e = 1, ∫eˣ dx = eˣ + C".

### 7. base one
> But one base breaks this rule. When a is one, the natural log of one is zero, and we can't divide by **zero**. Watch the base slide towards one. The curve **flattens**, because one to the x is one, for every x. At a equals one, there's nothing exponential left. The integral of one is just x, plus **C**. And look at the primitive through the origin. As a gets close to one, it straightens into the line y equals **x**.

Visual: graph at the left (author note d): y = 2ˣ in blue and its primitive through the origin (2ˣ − 1)/ln 2 in pale blue, labelled. `NumericDial` "a" under the graph (scale 0.5 to 2.5) with a red crossed tick at 1 labelled "excluded". On "zero" the "a = 1?" tag from scene 6 becomes "ln 1 = 0: can't divide". On "Watch the base slide" the dial runs from 2 to 1.1 (about 3 s, `limitedParameter`), the curve aˣ flattening towards y = 1 and a grey readout "ln a ≈ 0.693" falling to "ln a ≈ 0.095"; on "flattens" a dashed line y = 1 labelled "1ˣ = 1". On "C" the dial dims and a separate state draws: the flat line y = 1 labelled "a = 1: separate case" and the right column "∫1 dx = x + C". On "x" (last) the primitive through the origin has straightened almost onto a dashed line y = x, which brightens with the label "primitive of 1 through (0, 0)".

### 8. worked example: an initial condition
> Now a worked example. A drug's amount, A milligrams, changes at the rate d A by d t equals minus a half, times e to the minus a half t, per hour. At t equals zero, A is two. Find A. Integrate by dividing by the inner rate, minus a half. The minus halves cancel, giving e to the minus a half t, plus **C**. Now use the condition. At t equals zero, e to the zero is one, so one plus C equals two, and C is **one**. So A equals e to the minus a half t, plus one. As t grows, e to the minus a half t shrinks towards zero, so A levels off at one **milligram**.

Visual: board clears: task strip "Find A(t)"; equation strip "dA/dt = −0.5e^(−0.5t) (mg per hour)"; givens group (navy): "A(0) = 2 mg" (site L06 `we-3`). Graph at the left: window t 0 to 6, A 0 to 3 (author note e), axes labelled "t (hours)", "A (mg)"; the navy given point (0, 2). Rows: "A = ∫−0.5e^(−0.5t) dt = −0.5 · (1/(−0.5))e^(−0.5t) + C" with the inner rate −0.5 amber and `CancelledFactor` on the pair; on "C" "= e^(−0.5t) + C" and `PrimitiveFamily` draws members C = 0, 0.5, 1, 1.5 with C = 0 selected (through (0, 1)). On "Now use the condition" the given is underlined and the row "A(0) = e⁰ + C = 1 + C = 2" writes, with a grey chip "e⁰ = 1"; the dial "C" runs 0 to 1 and the selected member slides up onto (0, 2) as "C is one" is said; on "one" the row "C = 1" and the boxed answer "A = e^(−0.5t) + 1". On "milligram" a dashed line A = 1 draws across the window, labelled "levels off at 1 mg", and the curve is traced to t = 6.

### 9. worked example: algebra first
> Algebra still comes first. Find the integral of e to the x plus one, all squared. Expand it: e to the two x, plus two e to the x, plus **one**. Squaring e to the x doubles the exponent, giving e to the two x, not e to the x squared. Now each term has its own inner rate. e to the two x divides by two, giving a half e to the two **x**. Two e to the x has inner rate one, so it stays two e to the **x**. And one becomes **x**. So the answer is a half e to the two x, plus two e to the x, plus x, plus **C**.

Visual: board clears: task strip "Find"; equation strip "∫(eˣ + 1)² dx". The scene 4 boxed rule small at the top right. On "one" the row "(eˣ + 1)² = e^(2x) + 2eˣ + 1" writes, with a grey chip "(eˣ)² = e^(2x), not e^(x²)" on the next sentence (index law, recalled). Rows, each term of the expansion underlined as it is used: on "x" (first) "∫e^(2x) dx = ½e^(2x)" with the inner rate 2 amber; on "x" (second) "∫2eˣ dx = 2eˣ" with a grey "inner rate 1"; on "x" (third) "∫1 dx = x". On "C" boxed "½e^(2x) + 2eˣ + x + C" with a `DerivativeCheck` tick ("d/dx: e^(2x) + 2eˣ + 1").

### 10. memory aid
> Here's the pattern to keep. Divide by the inner rate: by a, for e to the a x plus b, and by the natural log of a, for a to the x. Then differentiate back to **check**.

Visual: two small views return in a row: the scene 3 triangle "gradient 3 × height" on e^(3x) (labelled "inner rate a"), and the scene 6 row "aˣ = e^(x ln a)" with ln a amber (labelled "inner rate ln a"). The handwritten line writes large: "Divide by the inner rate: a for e^(ax + b), ln a for aˣ." Under it, smaller: "a ≠ 0 for e^(ax + b). a > 0, a ≠ 1 for aˣ (a = 1: ∫1 dx = x + C). Differentiate back to check." On "check" a small `DerivativeCheck` arrow and tick play. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Find the integral of four e to the two x minus one. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find ∫4e^(2x − 1) dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no rule card, no exponent slot).

### 12. feedback 1 (brief)
> The exponent is two x minus one, so the inner rate is **two**. Divide by two. Four over two is two, so the answer is two e to the two x minus one, plus **C**. Differentiating multiplies by two again, giving four e to the two x minus one. Leaving it as four e to the two x minus one forgets the inner rate. Its derivative is twice too **big**.

Visual: card shrinks to the top. Teal slot on the exponent 2x − 1 in the card; on "two" a grey "inner rate 2" with the 2 amber. Rows: "∫4e^(2x − 1) dx = 4 · ½e^(2x − 1) + C"; on "C" boxed "2e^(2x − 1) + C" and `DerivativeCheck` "d/dx: 2 · 2e^(2x − 1) = 4e^(2x − 1)" with a tick. On "big" a chip "4e^(2x − 1) + C" fades in and is crossed (caption "derivative 8e^(2x − 1): twice the integrand"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Find the integral of three to the x, plus e to the minus two x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find ∫(3ˣ + e^(−2x)) dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Three to the x has inner rate the natural log of three, so it becomes three to the x, over the natural log of **three**. e to the minus two x divides by minus two, giving minus a half, e to the minus two **x**. With one C, it's three to the x over the natural log of three, minus a half e to the minus two x, plus **C**. Multiplying by the natural log of three would be differentiating, not **integrating**.

Visual: card shrinks to the top; each term in the card underlined as it is used. Rows: on "three" "∫3ˣ dx = 3ˣ/ln 3" with "ln 3" amber ("inner rate"); on "x" "∫e^(−2x) dx = (1/(−2))e^(−2x) = −½e^(−2x)" with "−2" amber; on "C" boxed "3ˣ/ln 3 − ½e^(−2x) + C" with a `DerivativeCheck` tick. On "integrating" a chip "3ˣ ln 3 − ½e^(−2x) + C" fades in and is crossed (caption "× ln 3 is the derivative direction"). Hold about 1 second.

### 15. handoff
> So an exponential primitive divides by the inner rate, as long as that rate isn't zero. Next, the one power that the power rule can't handle: one over x. The rule would give x to the zero, over zero. So what is its **primitive**?

Visual: board clears. The memory line from scene 10 returns small at the top. Centre: "∫(1/x) dx" writes large; beside it a grey attempt "= x⁰/0 + C" crossed in red with the tag "n = −1: can't divide by 0". A small coded graph at the right: y = 1/x on −3 ≤ x ≤ −0.3 and 0.3 ≤ x ≤ 3, two branches, with x = 0 marked excluded (open marker on the axis, dashed asymptote). On "primitive" a chip "primitive of 1/x?" and a chip "Next: the reciprocal primitive". No answer shown. Hold about 2 seconds. Scene 16 returns to this frame silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. ∫eˣ dx = eˣ + C (eˣ's gradient equals its height).
2. ∫e^(ax + b) dx = (1/a)e^(ax + b) + C, for a ≠ 0: divide by the inner rate a.
3. ∫f′(x)e^(f(x)) dx = e^(f(x)) + C: the exponent's derivative must be a factor. A missing number can be adjusted; a missing x cannot.
4. ∫aˣ dx = aˣ/ln a + C, for a > 0, a ≠ 1 (aˣ = e^(x ln a), inner rate ln a). For a = 1: ∫1 dx = x + C.

Memory aid (large, on the notes screen): *Divide by the inner rate: a for e^(ax + b), ln a for aˣ.* Second line: *Then differentiate back to check.*

Visual (end of the hold, silent, no added speech): after the notes hold the board returns in a 0.6 s fade to scene 15's frame exactly (the memory line small at the top; "∫(1/x) dx" large with the crossed grey attempt "= x⁰/0 + C" and the tag "n = −1: can't divide by 0"; the two-branch graph of y = 1/x with x = 0 excluded; chips "primitive of 1/x?" and "Next: the reciprocal primitive"). This is the final frame and i04's opening frame.

## Teaching checks

- **Does it explain causes?** Why ∫eˣ dx = eˣ + C: its gradient equals its height (2, gradient dots on the curve). Why divide by 3 for e^(3x): its gradient is three times its height, because the chain rule multiplies by the inner rate (3, the triangle and the trace). Why a ≠ 0: when a = 0 the exponent is constant, so there is no exponential (4). Why f′ must be a factor: the chain rule produces it (5). Why aˣ divides by ln a: aˣ = e^(x ln a), so ln a is its inner rate (6). Why a = 1 is separate: ln 1 = 0 and 1ˣ is the constant 1, whose primitive is x (7, the dial and the straightening primitive). Why C = 1, not 2, in the worked example: e⁰ = 1 (8).
- **Misconceptions addressed:** "use the power rule on e^(3x)" (1); "∫e^(3x) dx = e^(3x) + C" (1, 3; feedback 1, crossed); "the sign of ∫e^(−x) dx" (4, check); "divide by any exponent derivative" (5); "multiply by ln a" (6; feedback 2, crossed); "the aˣ rule works for a = 1" (7); "C is the initial value" (8).
- **One idea at a time:** one rule per scene from 2 to 7; one term per cue in each feedback.
- **Video makes it easier:** gradient dots landing on eˣ itself (2); a tangent triangle whose rise is three times the height (3); a smaller curve whose gradient dots land on the bigger one (3); the base dial approaching an excluded 1 while the curve flattens and the primitive straightens into y = x (7); the family member sliding onto the initial value (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (the integrand), 10 seconds each with the invitation to pause, nothing answer-bearing; neither card names the inner rate. One crossed mistake each; feedback about 26 s and 30 s (scenes 12 and 14).
- **Avoided double teaching:** d01 and d02 derivatives are grey recall chips; the chain rule and i02's memory aid are one sentence each; i01's initial condition is applied, not re-explained.
- **Syllabus coverage:** `cibfca8e4a` (2; key note 1); `ci3e845e76` (3, 4, 8, 9, 11, 12, 14; key note 2); `cic1fe679f` (6, 7, 13, 14; key note 4; a ≠ 1 added per the route); `ci22db0117` (5; key note 3); `cic5393984` (4, 8, 9, 11 to 14).
- **Out of scope by design:** 1/x and ln|x| (i04); the log terms of site `we-1`, `we-2`, Q1, Q2 (i04); trig primitives (i05); definite integrals and "total" quantities (i06 onwards).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 1 mark suggested, not an official marking scheme).** "Find ∫4e^(2x − 1) dx."
Model answer: the inner rate is 2, so ∫4e^(2x − 1) dx = 4 · ½e^(2x − 1) + C = 2e^(2x − 1) + C. Check: d/dx 2e^(2x − 1) = 4e^(2x − 1). Classic mistake (crossed): "4e^(2x − 1) + C" (inner rate forgotten; derivative 8e^(2x − 1)).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "Find ∫(3ˣ + e^(−2x)) dx."
Model answer: ∫3ˣ dx = 3ˣ/ln 3; ∫e^(−2x) dx = −½e^(−2x); so ∫(3ˣ + e^(−2x)) dx = 3ˣ/ln 3 − ½e^(−2x) + C. Check: d/dx gives 3ˣ ln 3/ln 3 + (−½)(−2)e^(−2x) = 3ˣ + e^(−2x). Classic mistake (crossed): "3ˣ ln 3 − ½e^(−2x) + C" (multiplied by ln 3).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| eˣ | d/dx eˣ = eˣ; window x −2 to 2, y −1 to 9; e ≈ 2.718 (grey); family eˣ + C, C = −1 to 3; stubs at x = 0 slope 1 | 2 |
| e^(3x) | d/dx e^(3x) = 3e^(3x); at x = 0 height 1, gradient 3 (triangle run ⅓, rise 1); ⅓e^(3x) at 0 is ⅓; window in author note a | 3 |
| Linear rule | d/dx (1/a)e^(ax + b) = e^(ax + b), a ≠ 0; ∫2e^(3x) dx = ⅔e^(3x) + C; ∫e^(−x) dx = −e^(−x) + C | 4 |
| Matched | ∫2xe^(x²) dx = e^(x²) + C; ∫xe^(x²) dx = ½e^(x²) + C | 5 |
| Base a | aˣ = e^(x ln a); ∫aˣ dx = aˣ/ln a + C, a > 0, a ≠ 1; ∫2ˣ dx = 2ˣ/ln 2 + C | 6 |
| Base one | ln 1 = 0; 1ˣ = 1; ∫1 dx = x + C; dial 2 → 1.1; ln 2 ≈ 0.693, ln 1.1 ≈ 0.095 (grey); (aˣ − 1)/ln a → x | 7 |
| Worked (site we-3) | A = e^(−0.5t) + C; A(0) = 1 + C = 2; C = 1; A = e^(−0.5t) + 1; A(6) ≈ 1.050; A → 1 | 8 |
| Algebra first (original) | (eˣ + 1)² = e^(2x) + 2eˣ + 1; ∫ = ½e^(2x) + 2eˣ + x + C | 9 |
| A1 | ∫4e^(2x − 1) dx = 2e^(2x − 1) + C; crossed derivative 8e^(2x − 1) | 11, 12 |
| A2 | ∫(3ˣ + e^(−2x)) dx = 3ˣ/ln 3 − ½e^(−2x) + C | 13, 14 |
| Handoff | ∫(1/x) dx; x⁰/0 undefined; graph 1/x on −3 ≤ x ≤ −0.3 and 0.3 ≤ x ≤ 3 | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 and Python (1 Nov); Codex to re-check numerically and with a CAS.

- d/dx eˣ = eˣ; e ≈ 2.718282.
- ∫e^(3x) dx = e^(3x)/3; e^(2.1) ≈ 8.166170; e^(−3.6) ≈ 0.027324; e^(1.8) ≈ 6.049647.
- d/dx [(1/a)e^(ax + b)] = e^(ax + b) (symbolic, a ≠ 0).
- ∫2e^(3x) dx = 2e^(3x)/3; ∫e^(−x) dx = −e^(−x).
- d/dx e^(x²) = 2xe^(x²); ∫xe^(x²) dx = e^(x²)/2.
- d/dx (aˣ/ln a) = aˣ; ∫2ˣ dx = 2ˣ/ln 2; ln 2 ≈ 0.693147; ln 1.1 ≈ 0.095310; 1/ln 1.1 ≈ 10.492059.
- lim as a → 1 of (aˣ − 1)/ln a = x; (2² − 1)/ln 2 ≈ 4.328085; (2⁻² − 1)/ln 2 ≈ −1.082021; (1.1² − 1)/ln 1.1 ≈ 2.203332; (1.1⁻² − 1)/ln 1.1 ≈ −1.820936.
- ∫−0.5e^(−0.5t) dt = e^(−0.5t); A(0) = 1 + C = 2, C = 1; A(6) = e⁻³ + 1 ≈ 1.049787.
- (eˣ + 1)² = e^(2x) + 2eˣ + 1; ∫(eˣ + 1)² dx = e^(2x)/2 + 2eˣ + x.
- ∫4e^(2x − 1) dx = 2e^(2x − 1); d/dx 4e^(2x − 1) = 8e^(2x − 1).
- ∫(3ˣ + e^(−2x)) dx = 3ˣ/ln 3 − e^(−2x)/2; ln 3 ≈ 1.098612.
- Site checks: e^(kx) examples (e^(3x)/3, −e^(−2x)/2, 50e^(0.1x)); drills 1, 2, 5; Q3 A = 4e^(−0.5t), A(4) = 4e⁻² ≈ 0.541341.

## Memory aid check

- **"Divide by the inner rate: a for e^(ax + b), ln a for aˣ."** Written for this lesson; it continues i02's "inner rate" language. Meaning, as said in scene 10: for an exponential with a linear exponent, the primitive divides by the exponent's rate of change; for e^(ax + b) that is a, and for aˣ = e^(x ln a) it is ln a. Assumptions checked: the exponent is linear (for a non-linear exponent the rule is the matched pattern of scene 5, and the aid is not stated for it; the screen line names only e^(ax + b) and aˣ); a ≠ 0 for e^(ax + b) and a > 0, a ≠ 1 for aˣ (both on the screen line under the aid, and in key notes 2 and 4); "divide" is the reverse of the chain rule's multiply, checked by differentiating. It helps a new case: ∫e^(5 − 2x) dx divides by −2; ∫10ˣ dx divides by ln 10; and it prevents the crossed mistakes in both feedbacks (no division; multiplying by ln 3). Introduced after the cause (3, 4, 6) and the base-one case (7).
- **Considered, not used:** "e to the x is its own integral" (loose: it is one of its own primitives, + C; site correction 2); "divide by the derivative of the power" as a general rule (false for a non-linear exponent: i02's trap).

## Narration length estimate

Revision 1 count (1 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,623 characters** (5,638 including the joining spaces), 16 scenes. Characters per scene (1 to 16): 389, 319, 417, 567, 646, 490, 403, 543, 486, 163, 84, 330, 95, 391, 225, 75. At 13.3 characters per second the speech is about 423 s; add about 18 s of holds and settling time (the gradient dots in scene 2, the triangle and the overlay trace in scene 3, the 3 s base dial in scene 7, the C slide in scene 8), 20 s for two countdowns and about 58 s more of the quiet notes hold (96 s of holds): **about 519 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scenes 5 and 4 are the longest; watch the dial in scene 7 (it must finish before "one to the x is one, for every x") and the slide in scene 8 (it must reach C = 1 on "one", not before). Feedback: scene 12 about 26 s, scene 14 about 30 s (including the 1 s holds), inside the 15 to 30 s guide; scene 14 is at the top of it. Reserve trims if the voiced take runs long: scene 7's last two sentences (open decision 3; keep the visual silent); scene 6's last sentence (keep the grey line); scene 9's "Squaring e to the x doubles the exponent, giving e to the two x, not e to the x squared." (keep the grey chip). The band floor is 5,500: no more than about 120 characters can be trimmed without adding elsewhere.

## Scene list and build ids

Lesson key `m-a12i03` (route math-a12-i03). Suggested explainer folder `src/explainer/lessons/math-a12-i03` and build folder `docs/production/claude-pm/lessons/m-a12i03` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, exp-own-primitive, inner-rate-three, linear-exponent-rule, matched-exponent, base-a-inner-rate, base-one, worked-initial-value, worked-algebra-first, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i02's last frame continues into scene 1 (camera continue, same centred integral); 1 to 2 clear change (to the eˣ graph); 2 to 3 camera continue (same graph style, window changes with a camera move); 3 to 4 clear change (to general algebra); 4 to 5 clear change (new task); 5 to 6 clear change; 6 to 7 camera continue (the "a = 1?" tag carries over); 7 to 8 clear change (new task); 8 to 9 clear change (new task); 9 to 10 camera pull back to the two small views; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and at the end of the notes a silent fade back to scene 15's frame (the final frame).

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i03-learning-review.md`, `science_check` = `checks/m-a12i03-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit, the brief 129 maths kit with its d01 addendum, the brief 131, 133 and 135 additions, i01's parts and i02's extensions:
- `FunctionGraph` / `GraphLayer` (scenes 2, 3, 7, 8, 15): eˣ, e^(3x), ⅓e^(3x), aˣ and (aˣ − 1)/ln a via `parameterFn` with `limitedParameter`, the drug curve, and 1/x with `domain` [{from −3, to −0.3}, {from 0.3, to 3}] and an `asymptotes` entry x = 0.
- `DerivativeTracer` overlay mode (scene 2) and with i02's `target`/`candidateScale` extension in overlay mode (scene 3). If the extension supports only paired mode, scene 3's trace can use paired mode with the target dashed in the lower panel (open decision 2).
- `TangentTriangle` with `ReadoutPanel` rows (scene 3).
- `NumericDial` with `excluded` {value: 1, label: "excluded"} (scene 7) and as "C" (scene 8).
- `PrimitiveFamily` (scenes 2, 8), `IntegralNotation` (all integrals), `DerivativeCheck` (scenes 2 to 6, 8, 9, 12, 14).
- `AlignedAlgebra`, `ExpressionSlot`, `DerivativeFactor`, `CancelledFactor` (scenes 1, 3 to 6, 8, 9, 12, 14).
- Shared: `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, scribble circle, `KeyNotes`, `Heading`.

New parts needed: none. One check for the build: confirm i02's `DerivativeTracer` extension works in overlay mode (open decision 2).

## Codex asset brief

None. No painted plate is needed (programme decision 5), and no new coded part beyond i01's three parts and i02's two extensions. For the i02 extension build, add an overlay-mode pilot case: candidate e^(3x) with `candidateScale` ⅓ and `target` e^(3x), gradient dots at the seven x-values in author note a.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the primitives, derivatives and the scene 7 limit), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every conclusion: ∫eˣ dx; ⅓e^(3x) + C; ⅔e^(3x) + C; −e^(−x) + C; e^(x²) + C and ½e^(x²) + C; ½e^(2x) + 2eˣ + x + C; 2ˣ/ln 2 + C; ∫1 dx = x + C; A = e^(−0.5t) + 1 with A → 1; A1 and A2 as in the model answers.
3. Confirm the scope of every learner-visible general claim: a ≠ 0 with e^(ax + b) (scene 4, key note 2, memory aid line); a > 0 and a ≠ 1 with aˣ (scenes 6, 7, key note 4, memory aid line); the f′e^f pattern requires f′ as a factor (scene 5, key note 3); "divide by the inner rate" is stated only for linear exponents.
4. Confirm the scene 3 triangle (run ⅓, rise 1 at x = 0 gives gradient 3 with height 1) and the overlay trace (the gradient of ⅓e^(3x) equals e^(3x)) are consistent.
5. Confirm scene 7's claims: ln 1 = 0; 1ˣ = 1; (aˣ − 1)/ln a is a primitive of aˣ through the origin and tends to x as a → 1; the dial never evaluates at a = 1.
6. Confirm scene 5's claim about e^(x²) ("no primitive we can write with these rules") is true and not overstated.
7. Confirm both attempt questions are original in wording (A1 is the pack's question 1), every condition the answer needs is on the card, and neither card names the inner rate.
8. Confirm the five syllabus quotes match the route JSON `syllabusActions` exactly (linear form of the MathML) and no site "Module 6" label appears in learner copy or metadata; confirm no ln|x| term or 1/x primitive appears before the handoff.
9. Confirm "ln" is never spoken (narration says "the natural log of") and no definite integral or "total" quantity appears.
10. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
11. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Add site corrections 1 to 6 under Decisions to `../site-corrections-maths-a12.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Integrating Exponentials: Why You Divide by the Inner Rate | Year 12 Maths Advanced

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html

The power rule can't integrate e^(3x), because x is in the exponent. See on the graph why eˣ is its own primitive (its gradient equals its height), and why e^(3x) needs dividing by 3 (its gradient is three times its height). Then the rule for e^(ax + b), the pattern ∫f′(x)e^(f(x)) dx, and why aˣ divides by ln a: aˣ = e^(x ln a), so ln a is its inner rate. Watch what happens as the base slides towards 1, and why ∫1 dx = x + C is handled separately. Worked example: a rate dA/dt = −0.5e^(−0.5t) with A(0) = 2. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Establish and use the formula ∫eˣ dx = eˣ + C"
"Establish and use the formula ∫e^(ax + b) dx = (1/a)e^(ax + b) + C, where a and b are constants and a ≠ 0"
"Establish and use the formula ∫aˣ dx = aˣ/ln a + C, where a is a constant and a > 0"
"Establish and use ∫e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫f′(x)e^(f(x)) dx = e^(f(x)) + C"
"Find primitives of functions involving exponential functions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: Power primitives and the reverse chain rule (previous video); derivatives of eˣ and aˣ. Next: The primitive of 1/x.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. a ≠ 1 beside a syllabus formula that says only "a > 0" (root).** `cic1fe679f` reads "where a is a constant and a > 0". The formula divides by ln a, so a = 1 must be excluded; the route stop says "handle base 1 separately". The video quotes the syllabus verbatim in the metadata and adds a ≠ 1 in learner copy (scene 7, key note 4). Root to confirm this is the intended reading (no correction to NESA wording is proposed; it is noted only).
- **2. Tracer overlay with the i02 extension (build).** Scene 3 uses the i02 `DerivativeTracer` extension (`target`, `candidateScale`) in overlay mode, so the primitive and its function share axes. If Codex builds the extension only for paired mode, scene 3 falls back to paired mode (upper ⅓e^(3x), lower dashed e^(3x)); the teaching point survives, but "the primitive sits a third as high as the curve it came from" is then said as "the top curve's gradient traces the bottom curve". The asset-brief note asks for overlay mode.
- **3. Scene 7's straightening primitive (learning review).** The member through the origin, (aˣ − 1)/ln a, is shown so that x + C reads as the natural answer at a = 1. The narration names it in one sentence. Reviewer to judge whether a student starting Year 12 follows "the primitive through the origin" here, or whether the flat line y = 1 and ∫1 dx = x + C are enough (then cut the last two sentences, about 120 characters, and keep the visual silent).
- **4. Drug context (learning review).** Site `we-3` gives a model whose amount levels off at 1 mg. The video states that conclusion as the model's. If the reviewer finds the context distracting, keep the numbers and rename the quantity "Q" with "units per hour" (no other change).
- **5. Site link (root).** The `.sa.html` form, as d01 to d10, i01 and i02. L06 also sources i04.

## Review notes

- Revision 2 (2 Nov, brief 142): learning review should-fixes 1 to 3 and the maths finding applied. (1) Scene 4's a = 0 sentence now says the exponent is constant (same length: net 0 with a 6-character trim of "thing"); note b, the teaching check and decision text match. (2) The decisions and the motion inventory now say run ⅓, rise 1, as scene 3 and author note a do. (3) i02 returns silently to its handoff frame after its key notes, and scene 16 here returns to scene 15's frame. Character count 5,623 (checked by script).
- Revision 1 has had no independent review. Next: student learning review (trace from d01, d02, i01 and i02; check that the gradient-dots picture in scene 2 and the triangle in scene 3 make "divide by the inner rate" visible before the rule; that aˣ = e^(x ln a) in scene 6 is recalled, not re-taught, and connects to the main question; that the base-one dial in scene 7 shows why the case is separate; that the slide in scene 8 makes C = 1 the slide, not the given value; that the attempt cards give nothing away), then the Codex maths check and error check.
- The gradient dots, the triangle, the dial and the slide carry the explanation; judge them at playback speed in the voiced preview, not from stills.
