# Maths A12 I03: Why does an exponential primitive divide by the inner rate? eˣ as its own primitive, e^(ax + b), the matched f′(x)e^(f(x)), aˣ through its inner rate ln a, and the base-one exception (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (2 Nov): brief 142 repairs applied, built for the brief 129, 131, 133 and 135 kit. Not voiced (no `math-a12-i03/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the anchor needs it. Opens on i02 Revision 3's final frame, which is unchanged from Revision 2 (∫e^(3x) dx with the exponent in the inside slot and "divide by 3 again?").

Narration 6,311 characters, 18 scene headings (including scenes 4a and 8a), about 555 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: third video of the Year 12 Mathematics Advanced integral calculus strand. Templates: `math-a12-d10.md` (Revision 2), `math-a12-d08.md`, and `math-a12-i01.md` and `math-a12-i02.md` (Revision 1, written just before this one; i02's scene 14 is this video's first frame): same structure, voice, paper style and kit parts. Revision 3 follows `math-a12-d01.md` (Revision 6, built and approved by the owner) and `../maths-visual-standard.md`, on the maths studio kit (`src/explainer/math/studio/`): a painted plate carries the everyday anchor (a phone charging at 30e^(−0.5t) per cent per hour); graphs, axes, tables and algebra stay coded. Programme decision 5 (coded only) is withdrawn by the visual standard. Pre-design pack: `../pre-design/maths-a12/math-a12-i03.md` (every number recalculated below). Site lesson read (1 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html`, SHA256 `a649e47a640c4f6d67aa3395373d55685a45446f60ff04fb869b1e83d85f8d25` (recomputed 1 Nov; matches the pack and the route). The same site lesson also sources i04 (the 1/x half). Route entry: `math-a12-i03` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Recall primitives and d01/d02 exponential derivatives." Route stop: "Establish exponential primitives and matched f′exp(f); handle base 1 separately. Log terms in source tasks finish in i04." Next: `math-a12-i04`. Route root decisions applied: integral videos i01 to i05 use the existing graph parts plus brief 136 kit needs, and area-under-curve parts belong to i06 onwards; site metadata labels ("Module 6") are never copied into titles or descriptions; no maths lesson is voiced before the brief 124 pilot passes; "ln" is never spoken, "the natural log of" in full (d02 root decision 3).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site module label anywhere; painted plates for the everyday anchor, coded graphs and algebra (Revision 3); no people, hands or figures (the drug example is algebra and a graph only); one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and grouped givens (the rate's units and the initial value are givens); "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; d01, d02, i01 and i02 recalled in a sentence each, not re-taught. Template findings applied from the start: exact identities in the algebra (ln 2, ln 3, e⁰ = 1), decimals only in grey readouts (the dial readouts in scene 7); precise scope (a ≠ 0 for e^(ax + b); a > 0 and a ≠ 1 for aˣ; the f′e^f pattern needs f′ as a factor); attempt cards give neither the answer nor the inner rate; summary strips match the scoped narration; the opening frame equals i02's actual final frame; the + C and the derivative check carry the cause (scenes 2 to 6, 8, 9 and both feedbacks).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `cibfca8e4a`: "Establish and use the formula ∫eˣ dx = eˣ + C"
- `ci3e845e76`: "Establish and use the formula ∫e^(ax + b) dx = (1/a)e^(ax + b) + C, where a and b are constants and a ≠ 0"
- `cic1fe679f`: "Establish and use the formula ∫aˣ dx = aˣ/ln a + C, where a is a constant and a > 0"
- `ci22db0117`: "Establish and use ∫e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫f′(x)e^(f(x)) dx = e^(f(x)) + C"
- `cic5393984`: "Find primitives of functions involving exponential functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i02's handoff (∫e^(3x) dx with the exponent in a teal inside slot and the chip "divide by 3 again?"); recalls d01 (d/dx e^(ax + b) = ae^(ax + b)), d02 (aˣ = e^(x ln a), d/dx aˣ = aˣ ln a), i01 (+ C, initial conditions) and i02 (the reverse chain rule; "fix a missing number, never a missing x") in a sentence each. Teaches: ∫eˣ dx = eˣ + C because eˣ's gradient equals its height (`cibfca8e4a`); the primitive of e^(ax + b) divides by the inner rate a, shown on the graph and proved by differentiating (`ci3e845e76`); the matched pattern ∫f′(x)e^(f(x)) dx (`ci22db0117`); ∫aˣ dx = aˣ/ln a + C, explained as dividing by the inner rate ln a of e^(x ln a) (`cic1fe679f`); base 1 handled separately (route stop); one initial-condition problem with an exponential rate (`cic5393984`, site `we-3`). Stops at exponential primitives. Not taught: the 4/x and 3/x terms of site `we-1` and `we-2`, drills 3 and 4, Q1 and Q2 (they need ∫1/x dx, which i04 finishes, route stop); ∫1/x dx itself (i04; shown only as the handoff); trig primitives (i05); definite integrals (i06 onwards; the site's "total dose" context is not used).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a phone on a charger (painted plate, live).** A phone charges at r(t) = 30e^(−0.5t) per cent per hour, t hours after it is plugged in: 30 per cent per hour at first, about 11 after two hours, about 1.5 after six. Its battery level is a primitive of that rate. The inner rate is −½, so the primitive divides by −½: B(t) = −60e^(−0.5t) + C (new scene 4a, straight after the linear-exponent rule). The minus sign looks wrong for a filling battery, but −60e^(−0.5t) climbs towards 0, so B rises. Starting at 40 per cent, −60 + C = 40, so C = 100 (new scene 8a, after the site's worked example): B(t) = 100 − 60e^(−0.5t) heads for 100 per cent and never quite gets there. The surprise readout: the charging rate is always half of what is left to fill (30e^(−0.5t) = ½ × 60e^(−0.5t)), so it slows as it fills.
- **Why this anchor.** Owner rule (7 Nov): everyday anchors, and root's list names a phone's charging rate building battery percentage. A charging rate that tapers is familiar to every student, it gives a negative inner rate a meaning, and it makes the minus sign in the primitive a question worth asking. The phone and its context differ from d03's app users (a count of people on a screen). The site's drug example (L06 `we-3`, numbers unchanged) stays in scene 8 as the worked initial-condition problem; it decreases towards 1 mg while the phone increases towards 100 per cent, so the pair shows both directions with the same inner rate −½.
- **Idealising assumptions (author notes, not learner copy).** (i) The charging rate is exactly 30e^(−0.5t) per cent per hour from 40 per cent (a real phone's charger and battery management give a similar taper, not this exact curve). (ii) The phone is not being used while it charges. (iii) "Heads for 100 per cent" is the model's level as t grows; the phone shows a whole-number percentage.
- **Join with i02 (fixed).** Scene 1 opens on i02 Revision 3's final frame exactly (unchanged from Revision 2): the memory line small at the top, "∫e^(3x) dx" large with the exponent 3x in a dashed grey inside slot, the chips "divide by 3 again?" and "Next: exponential primitives".
- **Join with i04 (unchanged).** Scene 15's text and frame are Revision 2's (∫(1/x) dx with the crossed x⁰/0 attempt and the two-branch graph of y = 1/x); i04 Revision 3 opens on it.
- **Simulations (standard item 3).**
  1. `ChargeSim` (scenes 1, 4a and 8a; lesson-local on `ScreenCounter` and `FunctionSimulator`): the painted phone in its dock, its blank screen showing coded rows "battery" (per cent, ink) and "charging at" (per cent per hour, violet); beside it the rate graph (violet) and the battery graph (ink) drawn live to the current t on t 0 to 8 h, with a dashed grey line at 100 per cent; a `LiveReadoutBoard` adds "left to fill" and the fixed row "rate ÷ left to fill = 0.5". One clock drives the screen, both graphs and the readouts.
  2. The gradient-equals-height trace (scene 2) and the triangle on e^(3x) (scene 3): violet gradient dots landing on the curve itself, then on three times its height.
  3. The base slider (scene 7): a blue `ParameterSlider` "a" sliding from 2 towards 1 with the excluded mark at 1, the curve flattening and the primitive through the origin straightening onto y = x.
  4. The family slide (scenes 8 and 8a): the amber C slider moves the bright member onto the given point.
- **Colour roles (fixed for the whole video).**
  - **the integrand, the phone's charging rate and every gradient: violet** (`MATH_GRADIENT`), with traced gradient dots and the d/dx check arrows;
  - **primitives, the battery level and the drug amount: ink**;
  - **C: amber** (`MATH_AMBER`);
  - **the inner rate (a, ln a, −½): blue** (`MATH_BLUE`, d01's inner-rate role), wherever it is divided out;
  - **the exponent: a dashed grey slot** (`InnerSlot`); excluded values: grey rings; the 100 per cent level and asymptotes: dashed grey;
  - **answer: green**; **mistake: red**, crossed slips and failed checks only.
- **Large type (standard item 5).** Current working line and readout numbers 52 px; equation strip and givens 44 px; earlier lines 30 to 32 px and dim; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The phone is about 340 px wide and 620 px tall in scenes 1, 4a and 8a.
- **Handwritten voice (standard item 6).** `HandTag`: "x is in the exponent", "3 times too big", "gradient = height", "÷ inner rate", "÷ (−½) = × (−2)", "minus, but rising", "half of what's left", "a = 1 not allowed", "C = 100, not 40", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2).** i02's frame, then the phone charging beside its live graphs (1); eˣ and its own gradient (2); the triangle on e^(3x) (3); the linear-exponent rule (4); the phone's primitive with its minus sign (4a); the matched exponent (5); another base (6); the base slider (7); the g01 board for the drug (8); the phone's answer (8a); the algebra-first board (9); the framed memory card (10); question cards with pictures (11 to 14); the 1/x handoff (15); key notes (16).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 8, 8a and 9: task strip, equation strip, a givens card, rows one at a time at 52 px, green framed answers and violet derivative checks; scene 8a has a red crossed slip ("C = 40"). Feedback scenes carry a `GivensStrip` on the answer side, rows at 52 px, a green framed answer and one red crossed slip each. Question cards show the full worded question at 40 px plus a small picture (the integrand's graph in violet), nothing answer-bearing.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Divide by the inner rate: a for e^(ax + b), ln a for aˣ." with the keys "e^(3x): ÷ 3" and "2ˣ = e^(x ln 2): ÷ ln 2", the line "a ≠ 0 for e^(ax + b); a > 0, a ≠ 1 for aˣ. Differentiate back to check." and a phone badge "the phone: ÷ (−½), so × (−2)". Key notes are five short bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** A primitive with a minus sign draws a rising battery (scene 4a); the readout "rate ÷ left to fill" never moves from 0.5 while both numbers shrink, and the battery creeps towards 100 per cent without reaching it (scenes 1 and 8a); eˣ's gradient dots land on the curve itself (scene 2); the slider's curve flattens to y = 1 at a = 1 (scene 7).
- **Narration (not voiced).** Scene 1 is rewritten around the phone (389 → 540); new scene 4a gives the phone's primitive (299); new scene 8a gives the phone's answer (238). Scenes 2 to 4 and 5 to 16 keep their Revision 2 text. Total 5,623 → 6,311.

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
- **No human figures.** Painted plates for the anchor only (Revision 3: the phone in its charging dock; no hands).
- **Author notes (not learner copy):**
  (a) Scene 3 windows: e^(3x) with `TangentTriangle` at x = 0: x −1.5 to 0.7, y −0.5 to 9 (e^(2.1) ≈ 8.166 inside); run 1 drawn from x = 0 to 1 would leave the window, so the triangle uses run ⅓, rise 1 with labels "run ⅓" and "rise 1" and the readout "gradient = 1 ÷ ⅓ = 3" (exact). Overlay: dashed e^(3x), candidate e^(3x)/3 (height ⅓ at x = 0), gradient dots at x = −1.2, −0.9, −0.6, −0.3, 0, 0.3, 0.6 landing on e^(3x) (e^(−3.6) ≈ 0.027 to e^(1.8) ≈ 6.050).
  (b) a = 0 in e^(ax + b): the function is the constant e^b and ∫e^b dx = e^b x + C. Said in scene 4 as "This needs a not zero. If a is zero, the exponent is constant, so there's no exponential." (Revision 2: the earlier "because then" could be read as referring to a being nonzero), kept to one short sentence.
  (c) e^(x²) has no elementary primitive (Liouville); the learner copy says only "has no primitive we can write with these rules", which is true and does not claim more. The x e^(x²) case: ½e^(x²) + C, derivative xe^(x²).
  (d) Scene 7: for a > 0, a ≠ 1, P_a(x) = (aˣ − 1)/ln a is the primitive of aˣ through (0, 0) (C = −1/ln a). As a → 1, P_a(x) → x for every x (limit (aˣ − 1)/ln a = x; SymPy). Window x −2 to 2, y −2.5 to 5. Values: a = 2: P(2) = 3/ln 2 ≈ 4.328, P(−2) = −0.75/ln 2 ≈ −1.082, 2² = 4; a = 1.1: P(2) = 0.21/ln 1.1 ≈ 2.203, P(−2) ≈ −1.821, 1.1² = 1.21. The rule's own member aˣ/ln a at a = 1.1 has height 1/ln 1.1 ≈ 10.49 at x = 0 (off the window), which is why the member through the origin is the one shown; the narration names it ("the primitive through the origin"). The dial range is 0.5 to 2.5 with the excluded tick at 1; the animated value stays in [1.1, 2] via `limitedParameter`. Grey readout "ln a ≈ 0.693" at a = 2 to "ln a ≈ 0.095" at a = 1.1. At the end the dial dims, and a separate state "a = 1" draws y = 1 (flat) and y = x (the primitive through the origin) with the label "a = 1: separate case".
  (e) Scene 8 context: the site's rate dA/dt = −0.5e^(−0.5t) with A(0) = 2 gives A → 1 mg, so the model does not have the drug fully eliminated. That is the site's model and the arithmetic is correct; the video states the model's conclusion and draws no body or person. Window t 0 to 6, A 0 to 3; family C = 0, 0.5, 1, 1.5; A(6) = e⁻³ + 1 ≈ 1.050. Dashed asymptote A = 1.
  (f) Pronunciations: "e to the three x"; "e to the a x plus b"; "e to the minus x"; "e to the x squared"; "f prime of x, times e to the f of x"; "a to the x"; "the natural log of a" (never "ln"); "two to the x, over the natural log of two"; "e to the minus a half t"; "d A by d t"; "milligrams"; "four e to the two x minus one" (the exponent read as one phrase; the card shows e^(2x − 1) with the bracketed exponent).

Main question (Revision 3): *A phone charges at 30e^(−0.5t) per cent per hour, and its battery level is a primitive of that rate. e to the three x has x in its exponent, so the power rule can't help, and the guess e^(3x) is three times too steep. Why does an exponential primitive divide by the inner rate, and what happens for other bases?*
Entry knowledge (Year 11 `ci1d192d62`, `cif6a6cb7d`; d01, d02 exponential derivatives; i01, i02 primitives and the reverse chain rule): d/dx e^(ax + b) = ae^(ax + b); aˣ = e^(x ln a); + C; fix a missing number, never a missing x.
Stops after: eˣ, e^(ax + b), f′e^f, aˣ, the base-one case and one initial-condition problem. No 1/x, no trig, no definite integrals.
Handoff: math-a12-i04 (route next): ∫(1/x) dx.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 3 colour roles (fixed for the whole video; see Decisions): the integrand, the phone's charging rate, gradients, traced dots and the d/dx checks violet; primitives, the battery and the drug amount ink; C amber; the inner rate blue; the exponent in a dashed grey slot; excluded values grey rings; the 100 per cent level dashed grey; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PRIMITIVES" at the top; scene headings in the hand font, 44 px. Type: current working line and readout numbers 52 px; equation strip and givens 44 px; earlier lines 30 to 32 px and dim; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Screen maths writes eˣ, e^(3x), e^(ax + b), e^(x²), aˣ, 2ˣ, ln a and built-up fractions. Battery and rate readouts show one decimal place.

### 1. hook: x in the exponent, and a phone on charge
> Last video ended here: the integral of e to the three x. A phone on a charger fills quickly at first, then more and more slowly. Its charging rate is thirty, times e to the minus a half t, percent per **hour**. Its battery level is a primitive of that rate. The power rule can't help, because x isn't the base. It's in the **exponent**. So guess e to the three x itself. Its derivative is three e to the three x, three times too **big**. And what about a base that isn't e, like two to the x? Why does an exponential primitive divide by the inner **rate**?

Visual: opens on i02's final frame exactly (i02 Revision 3, scene 14 and its silent return after the notes): the memory line small at the top; "∫e^(3x) dx" large in the centre with the exponent 3x in a dashed grey inside slot; the chips "divide by 3 again?" and "Next: exponential primitives". Heading writes on: "Exponential primitives: divide by the inner rate". On "phone" the integral moves to 44 px at the top right and `ChargeSim` arrives solid at the left: the painted phone in its dock (`ma12-phone-dock-v1`, about 340 × 620 px), its screen showing "battery 40.0%" and "charging at 30.0% per hour"; at the right two stacked graphs (900 × 300 px each, t 0 to 8 h): "charging at (% per hour)" in violet above and "battery (%)" in ink below, with a dashed grey line at 100%. On "hour" the clock runs 0 to 8 h (about 3 s): the violet rate curve falls away, the ink battery curve climbs and bends over below the dashed 100% line, and the screen counts up; a `LiveReadoutBoard` (52 px) shows "time", "charging at" (violet), "battery" (ink), "left to fill" and the grey row "rate ÷ left to fill" fixed at 0.5 (hand tag "half of what's left"). The rate writes as a 44 px row "rate = 30e^(−0.5t)" (violet, −0.5t in the dashed grey slot). On "exponent" the phone shrinks to a 260 px thumbnail at the top left, a grey chip "xⁿ: x is the base" appears beside a chip "e^(3x): x is in the exponent", and the power rule card is crossed lightly. On "big" a 52 px row "guess: e^(3x) → d/dx = 3e^(3x)" writes, with the 3 blue and the hand tag "3 times too big". On "two to the x" a second integral "∫2ˣ dx" writes beside it. On "rate" both move to the top right as the scene question: "why divide by the inner rate?".

### 2. eˣ is its own primitive
> Start with plain e to the x. Its derivative is e to the x, so at every point, its gradient equals its **height**. That makes e to the x a primitive of itself. So the integral of e to the x is e to the x, plus **C**. Slide e to the x up by three, and the gradient is still e to the x at every x. That's why the C is still **there**.

Visual: stage change to a graph at the left (window x −2 to 2, y −1 to 9; 1000 × 680 px): y = eˣ in ink. On "height" a violet tangent rides eˣ and drops violet gradient dots at x = −1.5, −1, −0.5, 0, 0.5, 1 and 1.5, each landing on the curve itself; a `LiveReadoutBoard` (52 px) at x = 1 reads "height 2.718" and "gradient 2.718" (hand tag "gradient = height"). On "C" (first bold) the right column writes "∫eˣ dx = eˣ + C" (52 px, C amber) with a violet d/dx check and tick. On "Slide e to the x up by three" `PrimitiveFamily` slides a copy up to eˣ + 3 with the amber slider "C", violet stubs at x = 0 on both (slope 1, parallel); on "there" the family eˣ + C, C = −1 to 3, appears faintly.

### 3. e^(3x): the gradient is three times the height
> Now e to the three x. By the chain rule, its derivative is three times e to the three x. On the graph, at x equals zero, the height is one, but the gradient is **three**. Everywhere on this curve, the gradient is three times the height. So to get a primitive, divide by three. A third of e to the three x has gradient exactly e to the three **x**. Watch the gradient of that smaller curve. It lands right on e to the three **x**.

Visual: stage change to the e^(3x) window (author note a; 1000 × 680 px). y = e^(3x) in ink; a grey recall chip "d01: d/dx e^(ax + b) = ae^(ax + b)". On "three" (bold) `StudioTangentTriangle` at x = 0 with run ⅓ and rise 1, labels "run ⅓" and "rise 1", and a `LiveReadoutBoard` (52 px) "height 1", "gradient 3" (author note a). On "Everywhere" the triangle slides to x = −0.5 and x = 0.4 and back, and the readout row "gradient ÷ height" stays at 3 (blue). On "divide by three" the right column writes "∫e^(3x) dx = ⅓e^(3x) + C" (52 px, the 3 blue). On "x" (first) the curve turns dashed and is labelled "e^(3x)"; an ink curve ⅓e^(3x) draws under it. On "x" (second) a violet tangent runs along the ink curve and drops violet gradient dots that land on the dashed curve, which turns solid violet when the trace completes; a violet d/dx check ticks on the right-column row.

### 4. any linear exponent
> The same happens for any linear exponent, a x plus b. Differentiating e to the a x plus b multiplies by a, the inner rate, so the primitive divides by it. The integral of e to the a x plus b is one over a, times e to the a x plus b, plus C. This needs a not zero. If a is zero, the exponent is **constant**, so there's no exponential. So two e to the three x becomes two thirds of e to the three **x**. And e to the minus x divides by minus one, giving minus e to the minus **x**. Check the sign by differentiating: minus e to the minus x differentiates back to e to the minus **x**.

Visual: stage change to centred algebra. Row (52 px): "d/dx (1/a)e^(ax + b) = (1/a) · a · e^(ax + b) = e^(ax + b)" with the "· a" blue ("inner rate") and `StudioCancellation` striking a and 1/a. The rule writes framed on the third sentence (60 px): "∫e^(ax + b) dx = (1/a)e^(ax + b) + C", the 1/a blue; on "constant" a grey chip "a ≠ 0" with a grey aside "a = 0: e^b is a constant". On "x" (first bold after constant) the row "∫2e^(3x) dx = 2 · ⅓e^(3x) + C = ⅔e^(3x) + C" (site `we-1`, exponential term). On "x" (next) "∫e^(−x) dx = (1/(−1))e^(−x) + C = −e^(−x) + C" with "a = −1" blue (site `we-2`). On "x" (last) a violet d/dx check "d/dx (−e^(−x)) = −(−1)e^(−x) = e^(−x)" ticks, the two minus signs ringed.

### 4a. the phone's primitive
> Now the phone. Its charging rate has inner rate minus a half, so divide by minus a half, which means multiplying by minus two. The battery level is minus sixty, e to the minus a half t, plus **C**. A minus sign, while the battery fills? Yes. That term climbs towards zero as t grows, so the level **rises**.

Visual: stage change back to `ChargeSim` at full size (phone at the left, the two graphs at the right, clock at 0). Right column rows (52 px): "∫30e^(−0.5t) dt = 30 · (1/(−0.5))e^(−0.5t) + C" with the −0.5 blue and the hand tag "÷ (−½) = × (−2)"; on "C" "B = −60e^(−0.5t) + C" (C amber). On "Yes" the term −60e^(−0.5t) draws on its own small graph under the rows (t 0 to 8, y −60 to 0): it starts at −60 and climbs towards 0 (hand tag "minus, but rising"). On "rises" the clock runs 0 to 8 h: the battery curve climbs in step with that small graph, 100 above it (a grey double arrow labelled "+ C" between them), and the screen counts up.

### 5. when the exponent isn't linear
> If the exponent isn't linear, the reverse chain rule still works, as long as the exponent's derivative is a factor. Take two x, times e to the x squared. The exponent is x squared, and its derivative, two x, is right **there**. Differentiating e to the x squared gives exactly two x, times e to the x squared. So the integral is e to the x squared, plus **C**. In general, the integral of f prime of x, times e to the f of x, is e to the f of x, plus C. And remember: fix a missing number, never a missing **x**. So x times e to the x squared gives half of e to the x squared. But e to the x squared on its own has no primitive we can write with these **rules**.

Visual: stage change: task strip "Find"; equation strip "∫2xe^(x²) dx" (violet). x² sits in a dashed grey slot labelled "exponent"; on "there" (first) the 2x is ringed blue with a thin link "d/dx (x²) = 2x". Row (52 px) "d/dx e^(x²) = e^(x²) · 2x" with the "· 2x" blue, matching the ringed 2x; on "C" "∫2xe^(x²) dx = e^(x²) + C" with a violet tick. On "In general" the framed form writes: "∫f′(x)e^(f(x)) dx = e^(f(x)) + C", second line smaller "∫e^u (du/dx) dx = e^u + C". On "x" (memory line) i02's line "Fix a missing number, never a missing x." returns at 30 px. On the next sentence the row "∫xe^(x²) dx = ½∫2xe^(x²) dx = ½e^(x²) + C" with a tick. On "rules" a grey row "∫e^(x²) dx" with an empty dashed ring where the 2x should be and the tag "no 2x: not with these rules".

### 6. another base: the inner rate is ln a
> Now two to the x. Differentiating a to the x gives a to the x, times the natural log of a. Here's why. a to the x is e to the x times the natural log of a. So its exponent is linear, and the inner rate is the natural log of **a**. Divide by it, and the integral of a to the x is a to the x, over the natural log of a, plus C, for a **positive**. So two to the x integrates to two to the x, over the natural log of **two**. And when a is e, the natural log of e is one, so this is just e to the x again.

Visual: stage change to centred algebra; the scene 4 framed rule at 30 px at the top. Grey recall chip "d02: d/dx aˣ = aˣ ln a". Row (52 px) "aˣ = e^(x ln a)" with "x ln a" in the dashed grey slot; on "a" (bold) "ln a" lights blue with the label "inner rate" (and the scene 4 rule beside it with a and ln a matched in blue). The rule writes framed on "Divide by it": "∫aˣ dx = aˣ/ln a + C"; on "positive" a grey chip "a > 0" and a dashed grey placeholder "a = 1?". On "two" (last) "∫2ˣ dx = 2ˣ/ln 2 + C" with a violet d/dx check "2ˣ ln 2 / ln 2 = 2ˣ" and a tick. On the last sentence a grey line "a = e: ln e = 1, ∫eˣ dx = eˣ + C".

### 7. base one
> But one base breaks this rule. When a is one, the natural log of one is zero, and we can't divide by **zero**. Watch the base slide towards one. The curve **flattens**, because one to the x is one, for every x. At a equals one, there's nothing exponential left. The integral of one is just x, plus **C**. And look at the primitive through the origin. As a gets close to one, it straightens into the line y equals **x**.

Visual: stage change to a graph at the left (author note d; 1000 × 680 px): y = 2ˣ in ink and its primitive through the origin (2ˣ − 1)/ln 2 in a lighter ink, labelled. A blue `ParameterSlider` "a" under the graph (0.5 to 2.5) with its excluded mark at 1 labelled "a = 1 not allowed". On "zero" the "a = 1?" placeholder becomes "ln 1 = 0: can't divide". On "Watch the base slide" the slider runs from 2 to 1.1 (about 3 s): the curve aˣ flattens towards y = 1 and the readout "ln a" falls from 0.693 to 0.095 (52 px, blue). On "flattens" a dashed grey line y = 1 labelled "1ˣ = 1". On "C" the slider dims and a separate state draws: the flat line y = 1 labelled "a = 1: separate case" and the right column "∫1 dx = x + C". On "x" (last) the primitive through the origin has straightened almost onto a dashed line y = x, which brightens with the label "primitive of 1 through (0, 0)".

### 8. worked example: an initial condition
> Now a worked example. A drug's amount, A milligrams, changes at the rate d A by d t equals minus a half, times e to the minus a half t, per hour. At t equals zero, A is two. Find A. Integrate by dividing by the inner rate, minus a half. The minus halves cancel, giving e to the minus a half t, plus **C**. Now use the condition. At t equals zero, e to the zero is one, so one plus C equals two, and C is **one**. So A equals e to the minus a half t, plus one. As t grows, e to the minus a half t shrinks towards zero, so A levels off at one **milligram**.

Visual: stage change to the g01 board: task strip "Find A(t)"; equation strip "dA/dt = −0.5e^(−0.5t) (mg per hour)" (violet); givens card: "A(0) = 2 mg" (amber tag; site L06 `we-3`). Graph at the left (1000 × 680 px): window t 0 to 6, A 0 to 3 (author note e), axis labels "t (hours)" and "A (mg)"; the given point (0, 2) as an ink ring with an amber tag. Rows (52 px): "A = ∫−0.5e^(−0.5t) dt = −0.5 · (1/(−0.5))e^(−0.5t) + C" with the inner rate −0.5 blue and `StudioCancellation` on the pair; on "C" "= e^(−0.5t) + C" and `PrimitiveFamily` draws the members C = 0, 0.5, 1, 1.5, the C = 0 member bright (through (0, 1)). On "Now use the condition" the given is underlined and the row "A(0) = e⁰ + C = 1 + C = 2" writes, with a grey chip "e⁰ = 1"; the amber slider "C" runs 0 to 1 and the bright member slides up onto (0, 2) as "C is one" is said; on "one" the row "C = 1" and the green answer frame "A = e^(−0.5t) + 1". On "milligram" a dashed grey line A = 1 draws across the window, labelled "levels off at 1 mg", and the curve is traced to t = 6.

### 8a. the phone's answer
> The phone works the same way. It starts at forty percent, so minus sixty, plus C, is forty, and C is a **hundred**. It heads for a hundred percent, but the charging rate is always half of what's left to fill, so it fills more and more **slowly**.

Visual: stage change back to `ChargeSim` (phone at the left, battery graph at the right, clock at 0, screen "battery 40.0%"). Givens card: "B(0) = 40%" (amber tag). Rows (52 px): "B = −60e^(−0.5t) + C"; "40 = −60 + C"; on "hundred" the amber slider runs C from 0 to 100, the bright battery curve slides up onto (0, 40), the row "C = 100" writes and the green answer frame "B = 100 − 60e^(−0.5t)". A red slip "C = 40" writes beside it and is crossed (red caption "40% is where it started, not C"). On "slowly" the clock runs to 8 h: the curve creeps under the dashed 100% line, the readouts "left to fill" and "charging at" shrink together, and "rate ÷ left to fill" stays at 0.5 (hand tag "half of what's left").

### 9. worked example: algebra first
> Algebra still comes first. Find the integral of e to the x plus one, all squared. Expand it: e to the two x, plus two e to the x, plus **one**. Squaring e to the x doubles the exponent, giving e to the two x, not e to the x squared. Now each term has its own inner rate. e to the two x divides by two, giving a half e to the two **x**. Two e to the x has inner rate one, so it stays two e to the **x**. And one becomes **x**. So the answer is a half e to the two x, plus two e to the x, plus x, plus **C**.

Visual: stage change to the g01 board: task strip "Find"; equation strip "∫(eˣ + 1)² dx" (violet). The scene 4 framed rule at 30 px at the top right. On "one" the row "(eˣ + 1)² = e^(2x) + 2eˣ + 1" writes (52 px), with a grey chip "(eˣ)² = e^(2x), not e^(x²)" on the next sentence (index law, recalled). Rows, each term of the expansion underlined as it is used: on "x" (first) "∫e^(2x) dx = ½e^(2x)" with the inner rate 2 blue; on "x" (second) "∫2eˣ dx = 2eˣ" with a grey "inner rate 1"; on "x" (third) "∫1 dx = x". On "C" the green answer frame "½e^(2x) + 2eˣ + x + C" with a violet d/dx check and tick ("d/dx: e^(2x) + 2eˣ + 1"). At the left a 600 × 420 px graph shows the answer with C = 0 in ink and the integrand in violet.

### 10. memory aid
> Here's the pattern to keep. Divide by the inner rate: by a, for e to the a x plus b, and by the natural log of a, for a to the x. Then differentiate back to **check**.

Visual: stage change to the framed memory-aid card (`MemoryAidCard`, 1300 × 640 px, double ink frame, hand-font heading "Memory aid"). The main line writes large in the hand font, 60 px: "Divide by the inner rate: a for e^(ax + b), ln a for aˣ." Two keys write as they are spoken, each with its small picture at the left: the scene 3 triangle on e^(3x) ("e^(3x): ÷ 3") and the row "aˣ = e^(x ln a)" with ln a blue ("2ˣ: ÷ ln 2"). Under them, 40 px: "a ≠ 0 for e^(ax + b); a > 0, a ≠ 1 for aˣ. Differentiate back to check." A badge with the phone: "the phone: ÷ (−½), so × (−2)". On "check" a small violet d/dx arrow and tick play. Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Find the integral of four e to the two x minus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find ∫4e^(2x − 1) dx." The full question stays on screen. Picture slot: the integrand y = 4e^(2x − 1) drawn in violet on small axes (x −1 to 1.2); no primitive. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no rule card, no exponent slot).

### 12. feedback 1 (brief)
> The exponent is two x minus one, so the inner rate is **two**. Divide by two. Four over two is two, so the answer is two e to the two x minus one, plus **C**. Differentiating multiplies by two again, giving four e to the two x minus one. Leaving it as four e to the two x minus one forgets the inner rate. Its derivative is twice too **big**.

Visual: the card shrinks to the top (30 px). `GivensStrip` on the answer side: "4e^(2x − 1)" (violet), "exponent 2x − 1". The exponent in the card sits in the dashed grey slot; on "two" the grey "inner rate 2" with the 2 blue. Rows (52 px): "∫4e^(2x − 1) dx = 4 · ½e^(2x − 1) + C"; on "C" the green answer frame "2e^(2x − 1) + C" and a violet d/dx check "2 · 2e^(2x − 1) = 4e^(2x − 1)" with a tick. On "big" a red slip "4e^(2x − 1) + C" writes and is crossed (red caption "derivative 8e^(2x − 1): twice the integrand"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Find the integral of three to the x, plus e to the minus two x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find ∫(3ˣ + e^(−2x)) dx." The full question stays on screen. Picture slot: the integrand y = 3ˣ + e^(−2x) drawn in violet on small axes (x −1 to 1.5); no primitive. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Three to the x has inner rate the natural log of three, so it becomes three to the x, over the natural log of **three**. e to the minus two x divides by minus two, giving minus a half, e to the minus two **x**. With one C, it's three to the x over the natural log of three, minus a half e to the minus two x, plus **C**. Multiplying by the natural log of three would be differentiating, not **integrating**.

Visual: the card shrinks to the top; each term in the card is underlined as it is used. `GivensStrip`: "3ˣ", "e^(−2x)". Rows (52 px): on "three" "∫3ˣ dx = 3ˣ/ln 3" with ln 3 blue ("inner rate"); on "x" "∫e^(−2x) dx = (1/(−2))e^(−2x) = −½e^(−2x)" with −2 blue; on "C" the green answer frame "3ˣ/ln 3 − ½e^(−2x) + C" with a violet d/dx check and tick. On "integrating" a red slip "3ˣ ln 3 − ½e^(−2x) + C" writes and is crossed (red caption "× ln 3 is the derivative direction"). Hold about 1 s.

### 15. handoff
> So an exponential primitive divides by the inner rate, as long as that rate isn't zero. Next, the one power that the power rule can't handle: one over x. The rule would give x to the zero, over zero. So what is its **primitive**?

Visual: board clears. The memory line from scene 10 returns small at the top (30 px). Centre: "∫(1/x) dx" writes large (80 px); beside it a grey attempt "= x⁰/0 + C" crossed in red with the tag "n = −1: can't divide by 0". A small coded graph at the right: y = 1/x on −3 ≤ x ≤ −0.3 and 0.3 ≤ x ≤ 3, two branches, with x = 0 excluded (a grey ring on the axis and a dashed asymptote). On "primitive" a chip "primitive of 1/x?" and a chip "Next: the reciprocal primitive". No answer shown. Hold about 2 s. This is i04's opening frame (i04 Revision 3, scene 1); scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- ∫eˣ dx = eˣ + C: eˣ's gradient equals its height.
- ∫e^(ax + b) dx = (1/a)e^(ax + b) + C, for a ≠ 0.
- ∫f′(x)e^(f(x)) dx = e^(f(x)) + C.
- ∫aˣ dx = aˣ/ln a + C, for a > 0, a ≠ 1. (∫1 dx = x + C.)
- Use the point for C. Check by differentiating.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Divide by the inner rate: a for e^(ax + b), ln a for aˣ.* Second line: *Then differentiate back to check.* Badge: *the phone: ÷ (−½), so × (−2).* The notes scene is 1,350 frames (45 s).

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
- **Revision 3 (the phone).** Why the phone's primitive has a minus sign: the inner rate is −½, and dividing by it multiplies by −2 (4a). Why the battery still rises: −60e^(−0.5t) climbs towards 0 (4a, the small graph). Why C = 100 and not 40: 40 per cent is the starting level, and −60 + C = 40 (8a, crossed). Why it slows: the rate is always half of what is left to fill (1, 8a, the fixed readout). The site's drug example (8) and the phone (8a) use the same inner rate −½ in opposite directions. The phone sim, the small graph and the fixed ratio readout are the evidence for each sentence; judge them at playback speed.

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

Revision 3 anchor values (added 7 Nov; computed with Python and SymPy):

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Charging rate | r(t) = 30e^(−0.5t) % per hour: 30, 18.2, 11.0, 6.7, 4.1, 2.5, 1.5, 0.55 at t = 0, 1, 2, 3, 4, 5, 6, 8 | 1, 4a, 8a |
| Primitive | ∫30e^(−0.5t) dt = 30 · (1/(−0.5))e^(−0.5t) + C = −60e^(−0.5t) + C | 4a |
| Battery | B(0) = 40: −60 + C = 40, C = 100; B(t) = 100 − 60e^(−0.5t): 40, 63.6, 77.9, 86.6, 91.9, 95.1, 97.0, 98.9 at t = 0, 1, 2, 3, 4, 5, 6, 8 | 1, 8a |
| Fixed ratio | rate ÷ (100 − B) = 30e^(−0.5t) ÷ 60e^(−0.5t) = 0.5 at every t | 1, 8a |
| Times | B = 90 at t = 2 ln 6 ≈ 3.58 h; B = 95 at t = 2 ln 12 ≈ 4.97 h (author note only) | (none) |
| Phone window | t 0 to 8 h (ticks 2, 4, 6, 8); battery 0 to 100% (ticks 20 to 100, dashed line at 100); rate 0 to 32% per hour | 1, 4a, 8a |

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
- Revision 3 phone: d/dt (100 − 60e^(−0.5t)) = 30e^(−0.5t); B(0) = 40; 30e^(−0.5t) / (60e^(−0.5t)) = 0.5; B(2) = 100 − 60/e ≈ 77.93; B(6) = 100 − 60e^(−3) ≈ 97.01; −60e^(−0.5t) is increasing for all t (its derivative 30e^(−0.5t) > 0).

## Memory aid check

- **"Divide by the inner rate: a for e^(ax + b), ln a for aˣ."** Written for this lesson; it continues i02's "inner rate" language. Meaning, as said in scene 10: for an exponential with a linear exponent, the primitive divides by the exponent's rate of change; for e^(ax + b) that is a, and for aˣ = e^(x ln a) it is ln a. Assumptions checked: the exponent is linear (for a non-linear exponent the rule is the matched pattern of scene 5, and the aid is not stated for it; the screen line names only e^(ax + b) and aˣ); a ≠ 0 for e^(ax + b) and a > 0, a ≠ 1 for aˣ (both on the screen line under the aid, and in key notes 2 and 4); "divide" is the reverse of the chain rule's multiply, checked by differentiating. It helps a new case: ∫e^(5 − 2x) dx divides by −2; ∫10ˣ dx divides by ln 10; and it prevents the crossed mistakes in both feedbacks (no division; multiplying by ln 3). Introduced after the cause (3, 4, 6) and the base-one case (7).
- **Considered, not used:** "e to the x is its own integral" (loose: it is one of its own primitives, + C; site correction 2); "divide by the derivative of the power" as a general rule (false for a non-linear exponent: i02's trap).
- **Revision 3, the phone badge.** "÷ (−½), so × (−2)" is the aid applied to e^(−0.5t) (inner rate a = −½, a ≠ 0). It holds because the exponent is linear; the badge shows the sign as well as the size, so the minus sign in −60e^(−0.5t) is expected.

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,311 characters**, 18 scene headings (Revision 2: 5,623 in 16). Characters per scene (1 to 4, 4a, 5 to 8, 8a, 9 to 16): 540, 319, 417, 567, 299, 646, 490, 403, 543, 238, 486, 163, 84, 330, 95, 391, 225, 75.

At 13.3 characters per second the speech before the notes is about 469 s. Holds: two 10 s countdowns (20 s), the memory-aid reading hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 15 s of settling for the phone's clock runs, the gradient traces, the base slider and the C slides; the key-notes scene is 45 s (1,350 frames, root decision 13 of the redesign set). Total **about 555 s (9 min 15 s)**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 15 s spare.

Approximate seconds per scene: 1 44; 2 26; 3 33; 4 43; 4a 24; 5 49; 6 37; 7 32; 8 43; 8a 20; 9 37; 10 14; 11 16; 12 26; 13 17; 14 30; 15 19; 16 45.

The slider in scene 8a must reach 100 on "hundred", not before. Reserve trims if the voiced take runs long: scene 1's "Its battery level is a primitive of that rate." (keep the battery graph); scene 5's "And remember: fix a missing number, never a missing x." (keep the recalled line on screen); scene 6's last sentence (keep the grey line); scene 7's last sentence (keep the straightening silent). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12i03` (route math-a12-i03). Explainer folder `src/explainer/lessons/math-a12-i03`; build inputs in `docs/production/claude-pm/lessons/math-a12-i03/` (to be created at voicing). Everything reusable is built as a studio-kit part (see "Studio kit use and additions").

In order (kebab-case; 18 scene headings, `### N.` and `### 4a.`, `### 8a.`): hook-phone, ex-own-primitive, e3x-triangle, linear-exponent, phone-primitive, matched-exponent, base-a, base-one, worked-initial-condition, phone-answer, worked-algebra-first, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate above):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 44 s | 1 | i02's frame, then the phone charging beside its live rate and battery graphs |
| 44 to 70 s | 2 | eˣ and its own gradient dots |
| 70 to 103 s | 3 | The triangle on e^(3x): gradient three times the height |
| 103 to 146 s | 4 | The linear-exponent rule, framed |
| 146 to 170 s | 4a | Back to the phone: −60e^(−0.5t) + C, rising |
| 170 to 219 s | 5 | The matched exponent |
| 219 to 255 s | 6 | Another base: aˣ = e^(x ln a) |
| 255 to 288 s | 7 | The base slider towards a = 1 |
| 288 to 331 s | 8 | g01 board: the drug, an initial condition |
| 331 to 350 s | 8a | The phone's answer: C = 100, creeping towards full |
| 350 to 387 s | 9 | g01 board: algebra first |
| 387 to 401 s | 10 | Framed memory card |
| 401 to 491 s | 11 to 14 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 491 to 510 s | 15 | The 1/x handoff (i04's first frame) |
| 510 to 555 s | 16 | Key notes with the framed card, then a silent return to scene 15's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies five bullets and the card). Memory-aid ends on a 2 s reading hold. Transitions (`pickTransition`): i02's last frame continues into scene 1 (camera continue, then the phone arrives); 1 to 2 clear change (new graph); 2 to 3 clear change (new window); 3 to 4 clear change (centred algebra); 4 to 4a clear change back to the phone; 4a to 5 clear change (new task); 5 to 6 and 6 to 7 clear changes; 7 to 8 clear change (new task); 8 to 8a clear change back to the phone; 8a to 9 clear change (new task); 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and at the end of the notes a silent 0.6 s fade back to scene 15's frame (the final frame).

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12i03-rev3-learning-review.md`, `science_check` = `checks/m-a12i03-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `physics/phys-y11-phone-tripod-v1.png` (a landscape phone clamped on a small tripod, blank dark screen; used by the maths kit's demo) reads as filming, not charging, so it is not used here; `physics/phys-y11-power-point-v1.png` (a white Australian double power point with a plug and grey cord, on a dark halo) shows the wall end only. d03's commissioned `ma12-phone-v1.png` is not in `public/assets/maths/` yet, and it belongs to d03's app-user context. So one charging phone plate is commissioned.

Reused: none.

Need (painted, new; see the Codex asset brief): `ma12-phone-dock-v1.png`.

Coded (studio kit): the phone's screen rows, the clock, the live rate and battery graphs, the 100 per cent line, readout boards, the small −60e^(−0.5t) graph, gradient dots and triangles, the base slider, the family and C slider, inside slots and blue factors, working boards, givens cards, answer frames, mistake slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `InnerSlot`, `HandTag`, `MarkSpan`, `PlateImg`, `SvgPlate`, `ScreenCounter`, `LiveReadoutBoard`, `ParameterSlider` (a with its excluded mark; C, amber), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`, `QuestionAxes`, `FunctionSimulator` (riding tangent, gradient dots, `EXP_BASE_FAMILY` for the base slider), `StudioTangentTriangle`, `StudioCancellation`; from i01's additions, `PrimitiveFamily`, `IntegralNotation` and `DerivativeCheck`.

Additions the build needs:
1. **Gradient dots on `FunctionSimulator`** (kit extension): a riding tangent drops dots at listed x whose height is the current gradient, optionally against a dashed target curve that turns solid when the dots finish (scenes 2 and 3; i04 and i05 use it in their paired views).
2. **`ChargeSim`** (lesson-local, on `ScreenCounter`, `FunctionSimulator` and `LiveReadoutBoard`): the phone plate with coded rows on its screen, the rate and battery graphs drawn to the current t, the 100 per cent line, and the readouts "time", "charging at", "battery", "left to fill" and "rate ÷ left to fill", all from B(t) = 100 − 60e^(−0.5t) and r(t) = 30e^(−0.5t). Check: at every frame the screen, both graphs and the readouts agree to one decimal place, and the ratio row reads 0.5.

## Codex asset brief (Maths A12 I03, a phone on charge)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-i03.md`, route entry math-a12-i03. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in line weight and metal finish to `physics/phys-y11-phone-tripod-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, icons, app screens, brand names or logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-phone-dock-v1.png` (1200 × 2000 px): one modern smartphone standing upright in portrait in a plain, low charging dock, seen straight on and centred; a thin charging cable leaves the back of the dock and curves away to the lower right, ending off the dock (no plug or wall shown). **The screen is blank and evenly dark** (a coded display is drawn on it), a flat rectangle with slightly rounded corners: paint it from x = 330 to x = 870 and from y = 330 to y = 1390 px (540 × 1060 px), with the phone's frame around it. Codex reports, in file pixels, the screen's four edges and the dock's base line.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 620 px tall, with a test row of light text drawn on the screen rectangle, plus the alpha check and the screen measurements (each edge within 4 px). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-i03-provenance.json`.

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

Revision 3 additions to the error check:
12. Confirm the phone model and its statements: rate 30e^(−0.5t) per cent per hour; primitive −60e^(−0.5t) + C; B(0) = 40 gives C = 100; B(t) = 100 − 60e^(−0.5t) increases and stays below 100; the rate is half of 100 − B at every t; the crossed "C = 40"; the readout values in "Numbers used".
13. Confirm the opening equals i02 Revision 3's final frame and the final frame is unchanged for i04.
14. Confirm every bold cue is quoted in its scene's Visual in spoken order, and the counts by script.

## YouTube metadata (draft)

Title: Integrating Exponentials: Why You Divide by the Inner Rate | Year 12 Maths Advanced

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson06.sa.html

A phone charges at 30e^(−0.5t) per cent per hour, so its battery level is a primitive of an exponential. The power rule can't integrate e^(3x), because x is in the exponent. See on the graph why eˣ is its own primitive (its gradient equals its height), and why e^(3x) needs dividing by 3 (its gradient is three times its height). Then the rule for e^(ax + b), the pattern ∫f′(x)e^(f(x)) dx, and why aˣ divides by ln a: aˣ = e^(x ln a), so ln a is its inner rate. Watch what happens as the base slides towards 1, and why ∫1 dx = x + C is handled separately. Worked example: a rate dA/dt = −0.5e^(−0.5t) with A(0) = 2. Two exam-style questions at the end.

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
- **6. The phone and the drug (root, Revision 3).** The site's drug example (L06 `we-3`) is kept in scene 8 with unchanged numbers, as the site is the source of truth for worked examples; the phone's answer follows it in 8a. If the learning review finds the pair repetitive, scene 8a can shrink to its last sentence with the C row shown silently (about −110 characters).
- **7. Spoken "percent" (voice pilot).** The narration writes "percent" for speech; screen text writes "%" and "per cent" (Australian style).

## Review notes

- Revision 2 (2 Nov, brief 142): learning review should-fixes 1 to 3 and the maths finding applied. (1) Scene 4's a = 0 sentence now says the exponent is constant (same length: net 0 with a 6-character trim of "thing"); note b, the teaching check and decision text match. (2) The decisions and the motion inventory now say run ⅓, rise 1, as scene 3 and author note a do. (3) i02 returns silently to its handoff frame after its key notes, and scene 16 here returns to scene 15's frame. Character count 5,623 (checked by script).
- Revision 1 has had no independent review. Next: student learning review (trace from d01, d02, i01 and i02; check that the gradient-dots picture in scene 2 and the triangle in scene 3 make "divide by the inner rate" visible before the rule; that aˣ = e^(x ln a) in scene 6 is recalled, not re-taught, and connects to the main question; that the base-one dial in scene 7 shows why the case is separate; that the slide in scene 8 makes C = 1 the slide, not the given value; that the attempt cards give nothing away), then the Codex maths check and error check.
- The gradient dots, the triangle, the dial and the slide carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- Revision 3 (7 Nov) has had no independent review. Next: student learning review (check that the phone's rate is read as a rate and the battery as its primitive; that the minus sign in 4a is resolved by the small graph, not only by the sentence; that C = 100 is not confused with the starting 40; that "half of what's left" is shown, not taught as a rule; that the question-card pictures give nothing away), then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, route boundaries, the learner question's maths, the site examples (L06 `we-1`, `we-2` and `we-3`, numbers unchanged), both attempts, the cause chain, the memory aid and the i04 handoff are unchanged.

- **Anchor and why:** a phone on a charger, rate 30e^(−0.5t) per cent per hour (root's suggestion). Its battery level is a primitive with inner rate −½, so dividing by the inner rate gives −60e^(−0.5t) + C: a minus sign on a rising battery, resolved on screen. Starting at 40 per cent gives C = 100, and the battery creeps towards 100 per cent because the rate is always half of what is left to fill.
- **Simulations:** `ChargeSim` (the phone's screen, live rate and battery graphs, and a fixed "rate ÷ left to fill" readout); gradient dots landing on eˣ and on three times e^(3x)'s height; the blue base slider with a = 1 excluded; the amber C slides for the drug and the phone.
- **Colour roles:** the integrand, the charging rate, gradients and checks violet; primitives, the battery and the drug amount ink; C amber; the inner rate blue; the exponent in a dashed grey slot; excluded values grey; answer green; mistake red.
- **Plates:** new `ma12-phone-dock-v1.png` (brief above); none reused.
- **Narration changes (not voiced):** scene 1 rewritten around the phone; new scene 4a gives the phone's primitive and its minus sign; new scene 8a gives the phone's answer. All other scenes keep their Revision 2 text.
- **Counts:** 5,623 → 6,311 characters; about 519 s (with the old 60 s notes hold) → about 555 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on i02 Revision 3's final frame (unchanged); ends, unchanged, on i04's ∫(1/x) dx frame.
- **Kit additions:** gradient dots against a dashed target on `FunctionSimulator`, and the lesson-local `ChargeSim`.
