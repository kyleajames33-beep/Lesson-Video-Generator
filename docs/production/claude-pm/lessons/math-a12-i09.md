# Maths A12 I09: How do we evaluate definite integrals without losing signs? Bracketing F(a), splitting at a point, reversed limits, trig, exponential and log values, and working backwards to a limit (design)

Status: Revision 2 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing. Previously Revision 1 (2 Nov 2026), overnight queue wave B1. Not voiced (no `math-a12-i09/` folder and no `measured/lesson.json`), so narration is rewritten freely where the anchor needs it. Nothing recorded; human listening pending.

Narration 6,222 characters, 14 scene headings, about 553 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the definite-integral group in the Year 12 Mathematics Advanced integral calculus strand (outline playlist order 32), after i08 (the Fundamental Theorem of Calculus) and before i10 (signed integrals and total area). Templates: `math-a12-i05.md` (Revision 2) and `math-a12-d10.md` (Revision 2), and the i08 design (Revision 1, 2 Nov), whose scene 15 is this video's first frame: same structure, voice, paper style and kit parts. Revision 2 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md` on the maths studio kit (`src/explainer/math/studio/`): a painted outdoor thermometer on a frosty morning carries the everyday anchor; graphs, strips and algebra stay coded. Programme decision 5 (coded only) is withdrawn by the visual standard. No pre-design pack and no route-inputs-3 file exist, so the pack work is done here. Site lessons read (2 Nov, read-only): integral-calculus lesson 7 (the definite integral), `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html`, SHA256 `b41c698b744a5ebc753ba24dac3a212c0c0e94dd795d24305072a9c40736d944`: its worked examples ∫₁³ 2x dx = 8 (used backwards in scene 7), ∫₀² (eˣ + x) dx = e² + 1 (scene 6), ∫₁^e (1/x) dx = 1 (the cloze, scene 6), ∫₀^π sin x dx = 2 from its signed-area card (scene 5), its properties card (same limits, reversed limits, splitting; scenes 3 and 4) and trap 03 ("F(b) − F(a), not F(a) − F(b)"; scene 4). Integral lesson 8 (SHA in the i08 design) is the second outline source; its content belongs to i08 and is recalled only. Root decisions applied: exact values in algebra, decimals only in grey readouts; attempt cards never give away answers or signs; domains and conditions kept (f continuous on the interval); final frame is the handoff frame (root decision 20).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; painted plate for the everyday anchor, coded graphs and algebra (Revision 2); no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and conditions; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Earlier videos recalled in a sentence, not re-taught: i08 (∫_a^b f(x) dx = F(b) − F(a) for continuous f, any primitive F; ∫_a^a f = 0 from its attempt 1), i07 (the integral as a signed limit of sums; strips above add, below subtract), i05 (∫ sin x dx = −cos x + C), i03 and i04 (eˣ and 1/x primitives), i01 and i02 (power primitives).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Integral calculus, group "Areas and the definite integral"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ci6dc07a10`: "Apply ∫_{a}^{b} f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course"
- `ci1bdb853f`: "Recognise and use the result, where f(x) is continuous on the interval a ≤ x ≤ c, ∫_{a}^{b} f(x) dx + ∫_{b}^{c} f(x) dx = ∫_{a}^{c} f(x) dx for all c such that a ≤ b ≤ c"
- `ci585dfd5a`: "Define and use the result ∫_{a}^{b} f(x) dx = −∫_{b}^{a} f(x) dx, where f(x) is continuous on the interval a ≤ x ≤ b"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i08's last frame ("∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?" with "(−2)³" ringed, chips "Next: evaluating without losing signs" and "?"); predicts the sign from the graph (x² ≥ 0, so the answer is positive) and exposes the classic slip (1/3 − 8/3 = −7/3); evaluates with F(a) bracketed (1/3 − (−8/3) = 3) (`ci6dc07a10`); checks by splitting at 0 (8/3 + 1/3 = 3) and states the splitting result with its cause (the middle value cancels; adjacent regions join) (`ci1bdb853f`); defines and uses reversed limits (∫₁⁻² x² dx = −3; strips run right to left with negative widths; same limits give 0) (`ci585dfd5a`); applies the method across the course's function families with their own sign and value traps: a trig primitive with a minus sign (∫₀^π sin x dx = 2, then a linear inside ∫₀^{π/4} sin 2x dx = ½), an exponential (∫₀² (eˣ + x) dx = e² + 1, with e⁰ = 1) and a log (∫₁^e (1/x) dx = 1, with ln 1 = 0) (`ci6dc07a10`); solves one related theoretical problem (∫₁ᵏ 2x dx = 8 with k > 1 gives k = 3; k = −3 also satisfies the equation as a backwards integral and is rejected by the condition) (`ci6dc07a10`). Stops at evaluating signed definite integrals. Not taught: total area and area with absolute values (`ciea1a6452`, `cib0134047`, `ci09a73813`, `cicfcd020a`: i10; the handoff only asks a question); odd and even symmetry (`cie17b0a6d`, i12); the trapezoidal rule (i12); modelling problems (i13); area against the y-axis (i11).

## Decisions

### Revision 2 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: an outdoor thermometer on a frosty morning (painted plate, live).** The video's one idea, "subtract the whole of F(a), even when it is negative", is the same move as reading a change in temperature: at 6 am the thermometer reads −2 °C, at 9 am it reads 1 °C, and it warmed by 1 − (−2) = 3 degrees, not 1 − 2. The plate `ma12-frost-thermometer-v1.png` (a long outdoor thermometer on a frosty timber post, its tube painted empty) carries a coded spirit column that rises and falls live, a coded scale (−5 to 5 °C) and a clock readout. It returns for splitting (warming through 0 °C: 2 degrees, then 1 more) and for reversed limits (cooling from 1 °C back to −2 °C in the evening: a change of −3).
- **Why this anchor.** A reading below zero is the everyday case where "minus a negative" is obvious to everyone, so it lends its common sense to F(a). The hook's own numbers agree with it (both changes are 3), which makes the parallel immediate without forcing. Weather on a cold morning is everyday, not lab science. It differs from every context in `checks/root-decisions-maths-redesign.md` and from i01 to i07's likely contexts; i08 uses a car park and i10 a lift.
- **Idealising assumptions (author notes, not learner copy).** (i) The thermometer is an analogy for F(b) − (F(a)): the readings stand for the primitive's values, and the analogy is not claimed as a model of x² (the temperature is not said to follow x³/3). (ii) Whole-degree readings at 6, 7 and 9 am are chosen; nothing is said about the temperature in between beyond "it warmed".
- **Join with i08 (kept).** Scene 1 opens on i08 Revision 4's final frame exactly (the row "∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?", "(−2)³" ringed, chips "Next: evaluating without losing signs" and "?"). The thermometer plate slides in on scene 1's third sentence (about 12 s in).
- **Join with i10 (kept).** Scene 13's final frame is unchanged (sin x on [0, 2π], signed arches, the row ending "= 0", the chips "Area = ?", "Next: signed integral or area?" and "?"). i10 Revision 2 opens on it.
- **Simulations (standard item 3).**
  1. **The thermometer** (`ThermoColumn`, new small part on `PlateImg`, scenes 1, 2, 3 and 4): a coded spirit column inside the painted tube follows a clock slider (6 am to 9 am, or 9 am back to 6 am in the evening run); `LiveReadoutBoard` (52 px): "time", "reading" and "change since the start = reading − (start reading)", with the start reading shown in its amber bracket.
  2. **The split slider** (scene 3): a teal split point b slides from −2 to 1 along the graph of x²; the two pieces' fills and live readouts "∫₋₂ᵇ x² dx" and "∫ᵦ¹ x² dx" change continuously while their sum stays at "3" (the readout is locked green).
  3. **Backwards strips** (scene 4): strips build from right to left with width arrows pointing left, each turning red-orange as it is drawn, with a running sum readout falling to −3.
  4. **The find-k dial** (scene 7): k sweeps 1 → 3 with the region on y = 2x growing and a live readout "k² − 1"; then a ghost run 1 → −3 with backwards strips, also reaching 8.
- **Colour roles (fixed for the whole video).**
  - **the top value F(b): blue** (`MATH_BLUE`);
  - **the bottom value F(a) and its bracket: amber** (`MATH_AMBER`), including the thermometer's start reading;
  - **a number's own minus sign: violet** (`MATH_GRADIENT`), ringed with the hand tag "the number";
  - **the rule's subtraction sign: ink**, ringed with the hand tag "the rule";
  - **the split point b and its pieces' labels: teal** (`MATH_TEAL`);
  - **the curve: ink**; signed fills pale teal above and pale red-orange below (`AREA_POS`, `AREA_NEG`), pictures not text;
  - **answer: green**; **mistake: red**, crossed slips only.
  The thermometer's red spirit and the frost are pictures, not roles. Colour is never the only carrier: every value has its letter.
- **Large type (standard item 5).** See the type line under "Script and shots". The graph is about 900 × 620 px; the thermometer plate about 520 px tall beside it in scenes 1 to 4.
- **Handwritten voice (standard item 6).** `HandTag`: "the rule", "the number", "bracket the bottom", "3 degrees warmer", "sum stays 3", "ends swapped: sign flipped", "cooling: −3", "e⁰ = 1, not 0", "ln 1 = 0", "fails k > 1", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2).** i08's row, then the graph and the thermometer (1); the bracket rows beside the thermometer (2); the split slider (3); backwards strips and the evening thermometer (4); the sine board (5); the exponential and log board (6); the find-k dial (7); the framed memory card (8); question cards with pictures (9 to 12); the signed arches (13); key notes (14).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 2, 5, 6 and 7: task strip, a givens card (the integrand, the limits, the condition), `LimitSubstitution` rows one at a time at 52 px, a green framed answer; the crossed slip is shown in scenes 1 and 5 (narrated) and in each feedback. Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip. Question cards show the full worded question at 40 px plus a picture: A1 a small coded sketch of y = sin x on [0, π] with the interval from π/3 to π bracketed (no fill colour, no value); A2 a coded number line from 0 to 5 with ticks at 0, 2 and 5 and bracket labels "7" over [0, 5] and "3" over [0, 2] (the givens only).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Top minus bracketed bottom. Swap the ends, swap the sign. Split at a point inside, and the pieces add up." with three keyed lines and icons (an amber bracket; two swapping arrows; two fills merging). Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The slip's answer, −7/3, is written next to a region that is entirely above the axis and visibly crossed against the picture (scene 1); in scene 3 the split point slides across the whole interval and the total readout does not move.
- **Narration (not voiced).** Scene 1 introduces the thermometer; scene 2 works the thermometer before F(a); scene 3 adds the thermometer's split; scene 4 adds the evening cooling. All other scenes keep their Revision 1 text.

- **Learner question kept (outline).** "How do we evaluate definite integrals without losing signs?" The answer, built in order: predict the sign from the graph first (1); bracket F(a), because the rule's minus sign and the minus sign inside F(a) are different minus signs (2); splitting at a point gives the same total, because the middle value cancels (3); swapping the limits swaps the subtraction, so the sign flips (4); a primitive with its own minus sign needs the brackets most (5); e⁰ is 1 and ln 1 is 0, so F(a) is not always zero at the start (6); the same rule runs backwards to find a limit, and a condition decides between the signs (7).
- **Draft route entry (no route entry or pack exists; root to adopt or amend).** id `math-a12-i09`; playlistOrder 32; mainLearnerQuestion "How do we evaluate definite integrals without losing signs?"; syllabusActionIds `ci6dc07a10`, `ci1bdb853f`, `ci585dfd5a`; prerequisiteVideos `math-a12-i08`; sourceLessons integral-calculus lesson 7 (SHA above; ∫₁³ 2x dx = 8, ∫₀² (eˣ + x) dx = e² + 1, ∫₁^e (1/x) dx = 1, ∫₀^π sin x dx = 2, properties card, trap 03) and lesson 8 (recalled); entryKnowledge: i08 (FTC with any primitive, f continuous, bracket notation, ∫_a^a f = 0), i07 (signed sums: strips above add, below subtract), i05 (∫ sin x dx = −cos x + C), i03 (∫ eˣ dx = eˣ + C), i04 (∫ (1/x) dx = ln|x| + C), i01 and i02 (power primitives), Year 11 (exact values cos 0, cos π/3, cos π; e⁰ = 1, ln 1 = 0, ln e = 1); startBoundary "Open on i08's frame: ∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ? with (−2)³ ringed."; stopBoundary "Bracket F(a); predict the sign from the graph; splitting at a point (a ≤ b ≤ c); reversed limits defined and used; same limits give 0; one trig, one exponential and one log evaluation with their traps; one find-the-limit problem with a sign condition. No total area, symmetry, trapezoidal rule or modelling."; nextHandoff "math-a12-i10: ∫₀^{2π} sin x dx = 0, but the shaded region is not nothing: area = ? (a question only)".
- **Opening (i08's handoff frame, read 2 Nov).** i08 scene 15 ends on "∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?" with "(−2)³" ringed and the "−" in front of it pulsing, chips "Next: evaluating without losing signs" and "?". Its key notes return to that frame silently, so it is this video's first frame. The design continues the same example: i08 named it, so i09 answers it (answer 3, which i08 deliberately did not show).
- **Predict before calculating (3 s prediction hold).** The hook draws y = x² on [−2, 1] with a teal `AreaFill`: x² is never negative, so every strip of i07's signed sum is above the axis and the integral must be positive. The prediction is the sign check used again in scenes 2, 5 and 7 and in both feedback scenes.
- **The slip made visible (no separate mistake scene).** 1/3 − 8/3 = −7/3 is written, then crossed against the picture. The cause is named precisely in scene 2: "The minus sign in the rule belongs to the subtraction, and the minus sign inside F of a belongs to the number." That is the whole idea of the video in one plain sentence.
- **Splitting as a check, then as a rule (`ci1bdb853f`).** The same example is split at 0, so no new function is needed: ∫₋₂⁰ x² dx = 0 − (−8/3) = 8/3 (and a second chance to bracket a negative F(a)), ∫₀¹ x² dx = 1/3, total 3. The general rule is stated with the syllabus's conditions on screen (f continuous on a ≤ x ≤ c, a ≤ b ≤ c). The cause is given twice in one line each: algebra (F(b) − F(a) + F(c) − F(b): the middle value cancels) and geometry (two regions side by side make one region). The narration does not say "split anywhere" (author note a).
- **Reversed limits (`ci585dfd5a`, "define and use").** The same integral with its ends swapped: ∫₁⁻² x² dx = F(−2) − F(1) = −8/3 − 1/3 = −3. The cause: swapping the ends swaps the order of the subtraction. The definition is then stated, and given a picture in i07's terms: the strips run right to left, so every width Δx is negative and every strip flips its sign (the `RiemannStrips` `direction: 'reverse'` prop draws width arrows pointing left). Same limits give 0 (no strips; i08 attempt 1 recalled). Site trap 03 ("F(b) − F(a), not F(a) − F(b)") is the same idea and is covered here.
- **Function families within course scope (`ci6dc07a10`; coverage gap "trig ... missing").** One example per family, each chosen for its own sign or value trap: sin x (its primitive has a minus sign, so the brackets matter most: (−cos π) − (−cos 0) = 1 − (−1) = 2), eˣ (e⁰ = 1, so F(0) is not zero: e² + 1, grey ≈ 8.39), 1/x (ln 1 = 0, so the answer is just 1). Power functions are the hook's example. One linear inside (original) closes scene 5: ∫₀^{π/4} sin 2x dx = [−½ cos 2x]₀^{π/4} = 0 − (−½) = ½, the same bracket with i05's inner rate. Matched insides (∫ f′(x) g(f(x))) get no definite example here; they need no new idea beyond i05 plus the bracket (open decision 2).
- **Related theoretical problem (`ci6dc07a10`).** The site's ∫₁³ 2x dx = 8, run backwards: find k > 1 with ∫₁ᵏ 2x dx = 8. k² − 1 = 8, k = ±3. Sign check: k = −3 also satisfies the equation, because ∫₁⁻³ 2x dx is a backwards integral with value 9 − 1 = 8 (it links scene 4 and is true); the condition k > 1 selects k = 3. This is a stronger reason than "a limit can't be negative", which would be false.
- **Attempts (original).** (A1) "Evaluate ∫_{π/3}^{π} sin x dx." [−cos x] gives 1 − (−½) = 3/2. Tests the bracket with a trig minus sign and an exact value. Crossed: "1/2" (the bracket dropped: 1 − ½). (A2) "f is continuous. Given ∫₀⁵ f(x) dx = 7 and ∫₀² f(x) dx = 3, find ∫₅² f(x) dx." Splitting gives ∫₂⁵ f = 4; reversing gives −4. Tests both properties together with no formula for f, so the student must use the results, not a primitive. Crossed: "4" (the reversal missed). Neither card shows a primitive, a sign or a graph.
- **Mistake scene:** none separate. "Subtract a negative F(a) as if positive" (1, 2; feedback 1 crossed; memory aid); "F(a) − F(b)" (4, site trap 03); "a backwards integral is the same" (4; feedback 2 crossed); "e⁰ = 0" (6); "ln 1 = 1" (6); "a negative k is impossible" (7: it fits the equation and is rejected only by the condition).
- **Memory aid.** "Top minus bracketed bottom. Swap the ends, swap the sign. Split at a point inside, and the pieces add up." See "Memory aid check".
- **Handoff (outline next: i10 "How do signed integrals differ from total area?").** Scene 13: y = sin x on [0, 2π] with the upper arch teal and the lower arch red-orange (`AreaFill` signed), the row "∫₀^{2π} sin x dx = [−cos x]₀^{2π} = −1 − (−1) = 0" (a bracket example in this video's own method; site lesson 7 card 08), and the chips "Area = ?" and "Next: signed integral or area?". No area value is shown (it is 4); the narration asks a question only.
- **Site sources used:** lesson 7 worked examples and cards listed above with unchanged numbers: ∫₀² (eˣ + x) dx = e² + 1 ≈ 8.39, ∫₁^e (1/x) dx = 1, ∫₀^π sin x dx = 2 and ∫₀^{2π} sin x dx = 0 (card 08), ∫₁³ 2x dx = 8 (card 05, run backwards in scene 7), the properties card and trap 03. The hook's example is i08's handoff. Scenes 2 to 4, scene 7's sign check and both attempts are original.
- **Site corrections (new, for the next site log; not learner copy):** (1) Integral lesson 7 header "Module 6 · L4 of 15" and the navigation "← Lesson 3 · Integrating Exponentials and Logarithms", "Lesson 5 · Fundamental Theorem of Calculus →" are stale labels on a Year 12 page (same class as log items 1 to 7 and 59 to 61; it is not yet logged for lesson 7). (2) Integral lesson 7 orders the topics FTC-free: card 02 and card 05 state ∫_a^b f(x) dx = F(b) − F(a) as "the fundamental rule of definite integration" before lesson 8 explains why it holds. A sequencing note, not an error (the route teaches i08 first). (3) Integral lesson 7 trap 03 is titled "Reversing upper and lower limits" but describes computing F(a) − F(b); the title suggests the reversed-limit property of card 09, which is correct mathematics. Suggested title: "Subtracting in the wrong order". (4) Integral lesson 7 card 02: "Splitting ... You can split at any interior point b." True as stated (b between a and c); no change needed, recorded only so the checker does not log it. No numerical errors found: all drill and short-answer values recalculated and correct (9, e² − e, ln 4, 3, 75; 14, e³ − e + ln 3, 40).
- **Pack questions answered:** no pack exists. Pack work done here: site lessons 7 and 8 read; every number recalculated with SymPy (see "Numbers to verify"); misconceptions listed under "Mistake scene"; site errors above.
- **Cause chain taught, in order:** (1) the graph predicts the sign: x² ≥ 0 means every strip adds (1); (2) the rule subtracts the whole of F(a), so a negative F(a) is added: brackets keep the two minus signs apart (2); (3) splitting at b: the middle value cancels in primitives, and adjacent regions join in the picture (3); (4) swapping the limits swaps the subtraction; the strips run backwards with negative widths (4); (5) a primitive with its own minus sign is where the bracket matters most (5); (6) F at the lower limit is not always zero: e⁰ = 1, ln 1 = 0 (6); (7) the rule can be solved for a limit, and the question's condition chooses the sign (7).
- **Entry knowledge:** see the draft route entry. Not assumed: the words "lower limit" and "upper limit" are recalled with their plain meaning (the start and the end) in scene 2.
- **Learner-visible vocabulary (plain meaning at first use):** lower limit, upper limit (recall: the start and the end of the interval, scene 2); bracket notation (recall from i08, scene 2); backwards integral (the integral with the larger number at the bottom, scene 4); exact answer (an answer with e, π or ln kept, not a decimal, scene 6).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **limit substitution rows** (`LimitSubstitution`, new: writes F(b), then "−", then opens a bracket that wraps F(a); the bracket draws before F(a) is written into it; the inner sign is coloured red-orange, the subtraction sign ink; on cue the pair "− (−" collapses into "+" with a short pulse); **signed area** (`AreaFill` signed on y = x², sin x and eˣ + x); **split** (`AreaFill` two regions with a boundary line at the split point that draws, then fades as the two fills merge into one); **backwards strips** (`RiemannStrips` with `direction: 'reverse'`: strips draw from right to left with width arrows pointing left and each strip's fill switching to `AREA_NEG` as it is drawn); **sign check tags** (a small "+ expected" tag beside each graph, ticked or crossed when the answer arrives); **find-k dial** (`NumericDial` "k" moving 1 → 3 with the shaded region on y = 2x growing and a grey readout "∫₁ᵏ 2x dx = k² − 1"; then a second ghost run 1 → −3 with the backwards strips, readout also 8); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; one graph on the left (about 900 × 620 px); algebra rows in the right column with the current row bright and earlier rows dim. Unequal unit lengths (no angle claims).
- **No human figures.** Painted plate for the anchor only (Revision 2: the frosty thermometer).
- **Author notes (not learner copy):**
  (a) Splitting: for f continuous on an interval containing a, b and c, ∫_a^b f + ∫_b^c f = ∫_a^c f holds for every order of a, b, c once ∫_b^a f is defined as −∫_a^b f. The syllabus states a ≤ b ≤ c; learner copy keeps that condition and says "a point inside". The memory aid says "a point inside" for the same reason.
  (b) x² on [−2, 1]: F(x) = x³/3; F(1) = 1/3, F(−2) = −8/3, F(0) = 0. ∫₋₂¹ = 3; ∫₋₂⁰ = 8/3; ∫₀¹ = 1/3; ∫₁⁻² = −3. Slip: 1/3 − 8/3 = −7/3.
  (c) Reversed strips: a Riemann sum from b to a with b > a uses Δx = (a − b)/n < 0, so each term f(x)Δx has the opposite sign; the limit is −∫_a^b f.
  (d) sin x: −cos π = 1, −cos 0 = −1, −cos(π/3) = −½. ∫₀^π sin x dx = 2; ∫_{π/3}^π sin x dx = 3/2; ∫₀^{2π} sin x dx = 0 (handoff; area 4 not shown).
  (e) eˣ + x on [0, 2]: F = eˣ + x²/2; F(2) = e² + 2, F(0) = 1; answer e² + 1 ≈ 8.389. Wrong "F(0) = 0" gives e² + 2 ≈ 9.389 (not shown). ∫₁^e (1/x) dx = ln e − ln 1 = 1 (1/x continuous on [1, e]).
  (f) ∫₁ᵏ 2x dx = k² − 1 for every real k (2x is continuous everywhere). k² = 9, k = ±3. ∫₁⁻³ 2x dx = 9 − 1 = 8 (equivalently −∫₋₃¹ 2x dx = −(1 − 9) = 8). The condition k > 1 selects 3.
  (g) A2: ∫₀² f + ∫₂⁵ f = ∫₀⁵ f (0 ≤ 2 ≤ 5), so ∫₂⁵ f = 4 and ∫₅² f = −4.
  (h) Windows: hook to scene 4, x from −2.5 to 1.6 (ticks −2, −1, 1), y from −0.6 to 4.6 (ticks 1, 2, 3, 4). Scene 5 and A1 feedback: x from −0.3 to π + 0.3 (ticks 0, π/3, π/2, π), y from −1.4 to 1.4. Scene 6: x from −0.3 to 2.3 (ticks 1, 2), y from −0.5 to 10. Scene 7: x from −3.5 to 3.5 (ticks −3, −1, 1, 3), y from −7 to 7. Handoff: x from −0.3 to 2π + 0.3, `radianTicks(0, 2π, 2)`, y from −1.4 to 1.4.
  (i) Pronunciations: "the integral from minus two to one, of x squared, d x"; "x cubed over three"; "one third", "eight thirds", "seven thirds"; "F of a", "F of b"; "minus cos pi"; "e squared plus one"; "eight point three nine"; "the natural log of e"; "k squared minus one"; "three halves"; "pi over three".

Main question: *One third, minus negative two cubed over three: the minus signs pile up. How do we evaluate definite integrals, with any primitive and any limits, without losing a sign?*
Entry knowledge (i08 FTC and brackets; i07 signed sums; i01 to i05 primitives; Year 11 exact values, e⁰ and ln 1): F(b) − F(a) for one example, strips above and below the axis, the course's primitives.
Stops after: bracketing F(a); splitting; reversed limits; one trig, exponential and log example each; one find-the-limit problem. No total area, symmetry or modelling.
Handoff: math-a12-i10: ∫₀^{2π} sin x dx = 0 with the two arches shaded and "Area = ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 2 colour roles (fixed; see Decisions): the top value F(b) blue; the bottom value F(a) and its bracket amber; a number's own minus sign violet; the rule's subtraction sign ink; the split point b teal; the curve ink; signed fills pale teal above and pale red-orange below (pictures); answer green; mistake red. Type (standard item 5): current working line and live readout numbers 52 px; equation strip, task strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; axis numbers at least 28 px; hand tags (`HandTag`, the explainer's hand font) at least 34 px; question cards 40 px; key-note bullets 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (plate, graph frame or simulation) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · INTEGRAL CALCULUS" at the top; scene headings in the hand font, 44 px. Exact values in ink; rounded values only as grey "≈" readouts.

### 1. hook (should the answer be negative?)
> Last video ended here, with the integral from minus two to one, of x squared. The primitive is x cubed over three, so we need one third, minus negative two cubed over three. It's like reading a thermometer on a frosty **morning**. The change is the later reading, minus the earlier one, and the earlier one can be below zero. Before we work it out, look at the graph. X squared is never negative, so every strip sits above the axis. Should the answer be positive, or **negative**? Here's a slip that happens all the time. Negative two cubed is minus eight, and someone writes one third minus eight thirds, which is minus seven **thirds**. A negative answer, from a region that's all above the axis. Something has gone wrong. So how do we evaluate definite integrals without losing signs?

Visual: opens on i08's last frame exactly (the row "∫₋₂¹ x² dx = [x³/3]₋₂¹ = 1/3 − (−2)³/3 = ?" large and centred, "(−2)³" ringed, chips "Next: evaluating without losing signs" and "?"). Heading writes on: "How do we evaluate definite integrals without losing signs?". On "morning" the row shrinks to the upper right (camera continue) and the painted plate `ma12-frost-thermometer-v1.png` slides in at the left (about 520 px tall, solid from its first frame), with its coded scale (−5 to 5 °C, 28 px numbers) and the coded red spirit column standing at −2 °C; a clock readout "6 am" (amber). On the next sentence the clock runs to 9 am and the column rises to 1 °C, with the `LiveReadoutBoard` (52 px): "reading" "1 °C" (blue) and "start" "(−2 °C)" in an amber bracket. On "Before we work it out" the thermometer moves to the far left (about 380 px tall) and a graph draws in the centre (author note h): y = x² in ink on −2 ≤ x ≤ 1 with filled endpoint markers; the pale teal fill sweeps from x = −2 to x = 1, hand tag "all above the axis". On "negative" (bold) a tag "+ or −?" pulses: **3 s prediction hold**. On "thirds" a red slip row writes under the main row: "1/3 − 8/3 = −7/3"; the graph gains the tag "+ expected", and on "Something has gone wrong" the slip is crossed in red with the hand caption "negative, but every strip adds". The chip "How do we keep every sign?" moves to the top right as the scene question.

### 2. bracket the bottom
> The trouble is the second minus sign. Think of the thermometer. At six it read minus two degrees, and at nine it read one degree. It warmed by one, minus, bracket, minus two, which is three **degrees**, not one minus two. F of a works the same way. F of a means the primitive at the lower limit, the start. Here that's F of minus two, which is minus eight thirds, a negative number, and the rule subtracts the whole of it. So put F of a in its own brackets, every time. One third, minus, bracket, minus eight thirds. Subtracting a negative adds, so that's one third plus eight thirds, which is **three**. Positive, as the picture said. The minus sign in the rule belongs to the subtraction. The minus sign inside F of a belongs to the number. Keep them apart, and neither gets **lost**.

Visual: the crossed slip fades; the thermometer returns to centre left (about 520 px tall) with the graph small at the lower left. The clock replays 6 am → 9 am and the column rises; beside it a 52 px row writes: "change = 1 − (−2)" with "1" blue, the bracket and "−2" amber, and the "−" of −2 violet; on "degrees" "= 1 + 2 = 3" in a green frame, hand tag "3 degrees warmer", and a red slip "1 − 2 = −1" is crossed with the caption "it didn't get colder". On "F of a works the same way" the g01 board: task strip "Evaluate ∫₋₂¹ x² dx", givens card "f(x) = x², from −2 to 1". `LimitSubstitution` rows, 52 px: "F(x) = x³/3" (grey tag "i08: any primitive"); "F(1) = 1/3" (blue) with a small "upper limit: the end" tag; "F(−2) = (−2)³/3 = −8/3" (amber) with "lower limit: the start", the "−" of −8/3 violet. On "brackets" the amber bracket draws first, then −8/3 is written inside it: "∫₋₂¹ x² dx = 1/3 − (−8/3)". On "adds" the pair "− (−" pulses and collapses into "+": "= 1/3 + 8/3"; on "three" green framed answer "= 3". The graph's "+ expected" tag gains a tick. On the last three sentences the subtraction sign is ringed in ink, tag "the rule", and the inner sign ringed in violet, tag "the number"; on "lost" both rings settle.

### 3. split the region at zero
> We can check that three another way. Split the region at zero. From minus two to zero, the integral is zero, minus, bracket, minus eight thirds, which is eight **thirds**. From zero to one, it's one third minus zero, which is one **third**. Eight thirds plus one third is three, the same answer. The thermometer does the same thing, two degrees up to zero, then one more. That always works, for a continuous function. The integral from a to b, plus the integral from b to c, is the integral from a to c, when b is between them. In primitives, that's F of b minus F of a, plus F of c minus F of b. The middle value cancels, so you're left with F of c minus F of **a**. On the graph, two regions side by side make one region.

Visual: stage change: the graph enlarges to the left (about 900 × 620 px) and the thermometer shrinks to a 300 px inset at the upper right. On "Split" a teal split point b with a dashed boundary line draws at x = 0 and the fill divides into two regions labelled "−2 to 0" and "0 to 1" (teal labels). Rows (the scene 2 rows dim to one line "∫₋₂¹ x² dx = 3"): "∫₋₂⁰ x² dx = 0 − (−8/3) = 8/3" (on "thirds", the amber bracket drawn again; the left region gains "8/3"); "∫₀¹ x² dx = 1/3 − 0 = 1/3" (on "third", right region "1/3"); "8/3 + 1/3 = 3" with a green tick. On the thermometer sentence the inset's column steps −2 → 0 → 1 with hand tags "+2" and "+1". On "That always works" the split slider runs: b slides from −2 to 1 and back to 0 while the two live readouts (52 px, teal) "∫₋₂ᵇ x² dx" and "∫ᵦ¹ x² dx" change and the green sum readout stays "3", hand tag "sum stays 3". On the rule sentence the framed rule: "∫ₐᵇ f(x) dx + ∫ᵦᶜ f(x) dx = ∫ₐᶜ f(x) dx" with tags "f continuous on a ≤ x ≤ c" and "a ≤ b ≤ c". Next row: "(F(b) − F(a)) + (F(c) − F(b))"; on "a" the two F(b) strike through in grey and the row ends "= F(c) − F(a)". On the last sentence the boundary line fades and the two fills merge into one.

### 4. swap the ends: reversed limits
> What if the limits come the other way round, from one down to minus two? The rule still says F of the top, minus F of the bottom. Now the top is minus two, so it's minus eight thirds, minus one third, which is minus **three**. Swapping the ends swaps the order of the subtraction, so the answer changes sign. On the thermometer, that's the evening, cooling from one degree back to minus two, a change of minus three. That's how a backwards integral is defined. The integral from b to a is minus the integral from a to b. Picture the strips running from right to left. Every strip's width is negative, so every strip flips its **sign**. And if both ends are the same, there are no strips at all, so the integral is **zero**.

Visual: rows from scene 3 dim. Task strip "Evaluate ∫₁⁻² x² dx". `LimitSubstitution` row: "[x³/3]₁⁻² = F(−2) − (F(1)) = −8/3 − 1/3" (here F(−2) is the top, blue, and F(1) the bottom, amber, in its bracket); on "three" green framed "= −3". Beside it the dim "∫₋₂¹ x² dx = 3" brightens and an arrow joins the two, hand tag "ends swapped: sign flipped". On the thermometer sentence the inset enlarges briefly (about 420 px), its clock reads "6 pm → 9 pm" and the column falls from 1 °C to −2 °C, readout "change = −2 − (1) = −3", hand tag "cooling: −3". The framed definition writes: "∫ᵦᵃ f(x) dx = −∫ₐᵇ f(x) dx" with "f continuous on a ≤ x ≤ b". On the strips sentences the teal fill fades and backwards strips (n = 6, width 0.5) draw from x = 1 leftwards to x = −2, each with a small width arrow pointing left labelled "Δx < 0"; on "sign" each strip turns red-orange in turn and a running readout "sum" falls to "−3". On "zero" a small chip "∫ₐᵃ f(x) dx = 0" (grey tag "i08: no strips").

### 5. a primitive with its own minus sign
> Signs get trickier when the primitive has a minus sign of its own. Find the integral from zero to pi, of sine x. A primitive is minus cos x. At pi, that's minus cos pi, which is minus, minus one, so it's **one**. At zero, it's minus cos zero, which is minus one. So the answer is one, minus, bracket, minus one, which is **two**. Sine x is above the axis from zero to pi, so a positive answer is what we expect. One minus one, giving zero, is the slip the brackets **prevent**. The same care works with an inside. The integral from zero to pi over four, of sine two x, has primitive minus a half cos two x. At the top that's zero, and at the bottom it's minus a half. So the answer is zero, minus, bracket, minus a half, which is a **half**.

Visual: clear change to the g01 board with new axes (author note h): y = sin x in ink on [0, π] with a pale teal fill, tag "+ expected". Task strip "Evaluate ∫₀^π sin x dx"; givens card "f(x) = sin x, from 0 to π". Rows, 52 px: "F(x) = −cos x" (grey tag "i05"; its own "−" violet); on "one" "F(π) = −cos π = −(−1) = 1" (blue); next "F(0) = −cos 0 = −1" (amber, its "−" violet). On "two" the `LimitSubstitution` row "1 − (−1)" collapses to "1 + 1" and green framed "= 2"; the tag gains a tick. On "prevent" a red slip "1 − 1 = 0" writes and is crossed (hand caption "bracket dropped"). On "inside" the rows dim and a second task strip writes "Evaluate ∫₀^{π/4} sin 2x dx" with a small thumbnail of y = sin 2x on [0, π/4] (pale teal fill); rows "F(x) = −½ cos 2x" (grey tag "i05: divide by the inner rate 2"), "F(π/4) = −½ cos(π/2) = 0", "F(0) = −½ cos 0 = −½"; on "half" the row "0 − (−½)" collapses to "0 + ½" and green framed "= ½".

### 6. e to the zero is one, ln one is zero
> Next, an exponential. Find the integral from zero to two, of e to the x, plus x. A primitive is e to the x, plus x squared over two. At two, that's e squared plus **two**. At zero, it's e to the zero plus zero, and e to the zero is one, not zero. So the answer is e squared plus two, minus one, which is e squared plus **one**, about eight point three nine. Logs go the other way. The integral from one to e, of one over x, is the natural log of e, minus the natural log of one. The natural log of one is **zero**, so that answer is just one. Leave answers exact, like e squared plus one, unless a question asks for a decimal.

Visual: clear change (author note h): y = eˣ + x on [0, 2] with a pale teal fill, tag "+ expected". Task strip "Evaluate ∫₀² (eˣ + x) dx". Rows, 52 px: "F(x) = eˣ + x²/2"; on "two" "F(2) = e² + 2" (blue); next "F(0) = e⁰ + 0 = 1" (amber) with "e⁰ = 1" ringed and hand tag "e⁰ = 1, not 0"; on "one" "(e² + 2) − (1) = e² + 1" in a green frame, grey readout "≈ 8.39"; the tag gains a tick. On "Logs" the graph dims to a thumbnail and a second task strip writes "Evaluate ∫₁^e (1/x) dx" with a small y = 1/x thumbnail on [1, e]; row "[ln x]₁^e = ln e − ln 1"; on "zero" "ln 1 = 0" ringed, hand tag "ln 1 = 0", row "= 1 − 0 = 1" in a green frame. On the last sentence a grey chip "exact: e² + 1; decimal only if asked".

### 7. working backwards: find the limit
> The rule also runs backwards. Find k, with k greater than one, so that the integral from one to k of two x equals eight. A primitive of two x is x squared, so the integral is k squared, minus one squared. Set k squared minus one equal to eight. Then k squared is nine, so k is three, or minus **three**. Now the sign check. Minus three fits the equation too, because the integral from one down to minus three is a backwards integral, and it comes out as plus eight as well. But the question says k is greater than one, so k equals **three**.

Visual: clear change (author note h): y = 2x in ink. Task strip, worded as printed: "Find k, where k > 1, such that ∫₁ᵏ 2x dx = 8." with "k > 1" underlined; givens card "f(x) = 2x; start 1; value 8; k > 1". Rows, 52 px: "∫₁ᵏ 2x dx = [x²]₁ᵏ = k² − 1² = k² − 1"; "k² − 1 = 8"; on "three" (first) "k² = 9, so k = 3 or k = −3". On the sign-check sentences the find-k dial "k" (blue slider) runs 1 → 3: the pale teal region on [1, 3] grows and the live readout "k² − 1" (52 px) climbs to "8"; then a ghost run 1 → −3 with backwards strips (as scene 4) over [−3, 1], readout also "8", hand tag "backwards integral: also 8". On "three" (last) "k > 1" in the task strip pulses, "k = −3" is struck through in red (hand caption "fails k > 1"), and "k = 3" is framed green.

### 8. memory aid
> Here's the line to remember. Top, minus bracketed bottom. Swap the ends, swap the sign. Split at a point inside, and the pieces add **up**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"). Three keyed lines write phrase by phrase, 60 px in the hand font: "Top minus (bracketed bottom)." with the amber bracket drawing around "bottom" and a thermometer icon; "Swap the ends, swap the sign." with two swapping arrows; "Split at a point inside: the pieces add up." with two small adjacent fills merging. Under them, 34 px: "f continuous. Any primitive F. Predict the sign first." On "up" all three lines settle. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the integral from pi over three to pi, of sine x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Evaluate ∫_{π/3}^{π} sin x dx." The full question stays on screen. Picture slot: a small coded sketch of y = sin x on [0, π] with the interval from π/3 to π bracketed on the axis (no fill colour, no value, no primitive). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> A primitive is minus cos x. At pi, that's **one**. At pi over three, it's minus a half. So the answer is one, minus, bracket, minus a half, which is three **halves**. A half is wrong. It drops the bracket, and subtracts a half instead of adding **it**.

Visual: the card shrinks to the top (30 px; "π/3" and "π" underlined as each is used). `GivensStrip`: "f(x) = sin x", "from π/3 to π". Rows, 52 px: "F(x) = −cos x"; on "one" "F(π) = −cos π = 1" (blue); "F(π/3) = −cos(π/3) = −½" (amber, inner "−" violet). On "halves" the `LimitSubstitution` row "1 − (−½) = 1 + ½" and green framed answer "= 3/2"; the card's sketch fills pale teal with a ticked "+". On "it" a red slip "1/2" writes and is crossed (hand caption "1 − ½: bracket dropped"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The function f is continuous. The integral from zero to five of f is seven, and the integral from zero to two of f is three. Find the integral from five to two of f. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "f is continuous. Given ∫₀⁵ f(x) dx = 7 and ∫₀² f(x) dx = 3, find ∫₅² f(x) dx." The full question stays on screen. Picture slot: a coded number line from 0 to 5 with ticks at 0, 2 and 5, a long bracket over [0, 5] labelled "7" and a short bracket over [0, 2] labelled "3" (the givens only; no graph, no "?"). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Split at two. The integral from zero to two, plus the integral from two to five, is the integral from zero to **five**. So three plus the unknown is seven, and the integral from two to five is four. But the question runs from five down to two, so the sign flips. The answer is minus **four**. Four is wrong. It forgets that the limits are **reversed**.

Visual: the card shrinks to the top (the givens "7" and "3" underlined as used). `GivensStrip`: "∫₀⁵ f = 7", "∫₀² f = 3", "f continuous". The number line enlarges (about 1,000 px) with two adjacent teal brackets labelled "3" and "?" under the long bracket "7". Rows, 52 px: on "five" "∫₀² f + ∫₂⁵ f = ∫₀⁵ f"; "3 + ∫₂⁵ f = 7, so ∫₂⁵ f = 4" (the "?" becomes "4"); on "four" green framed answer "∫₅² f(x) dx = −∫₂⁵ f(x) dx = −4", the limits "5" and "2" in the card ringed. On "reversed" a red slip "4" writes and is crossed (hand caption "limits reversed: sign flips"). Hold about 1 s.

### 13. handoff
> So keep F of a in brackets, flip the sign when the limits swap, and add the pieces at a split. But a signed integral can surprise you. The integral of sine x, from zero to two pi, is zero. The arch below the axis cancels the arch above. Yet the shaded region clearly isn't nothing. So what's its **area**?

Visual: the memory-aid lines show small at the top (30 px), then fade on "But". Board clears to one graph (author note h): y = sin x on [0, 2π], the arch on [0, π] pale teal and the arch on [π, 2π] pale red-orange (signed fill, zero at π). On the second sentence the row writes in the right column (52 px): "∫₀^{2π} sin x dx = [−cos x]₀^{2π} = −1 − (−1) = 0". On "cancels" the two arches pulse in turn. On "area" a chip "Area = ?" appears over the two arches, with a chip "Next: signed integral or area?" and a "?" chip. No area value. Hold about 2 s. This is i10's opening frame (unchanged from Revision 1); scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- ∫ₐᵇ f(x) dx = F(b) − (F(a)): bracket F(a).
- Predict the sign from the graph first.
- Split: ∫ₐᵇ f + ∫ᵦᶜ f = ∫ₐᶜ f, for a ≤ b ≤ c.
- Reverse: ∫ᵦᵃ f = −∫ₐᵇ f; same limits give 0.
- Watch: −cos 0 = −1, e⁰ = 1, ln 1 = 0.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Top minus bracketed bottom. Swap the ends, swap the sign. Split at a point inside, and the pieces add up.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back to scene 13's frame exactly (sin x on [0, 2π] with the signed arches, the row ending "= 0", the chips "Area = ?", "Next: signed integral or area?" and "?"). This is the final frame and i10's opening frame.

## Teaching checks

- **Does it explain causes?** Why the answer must be positive: every strip of x² is above the axis (1). Why −7/3 is wrong: the rule subtracts the whole of a negative F(a), and subtracting a negative adds (2). Why splitting works: the middle value cancels; adjacent regions join (3). Why swapping the limits flips the sign: the subtraction swaps order; the strips' widths become negative (4). Why same limits give 0: no strips (4). Why sin x is the riskiest case: its primitive carries its own minus sign (5). Why F(0) is not always 0: e⁰ = 1 (6). Why k = −3 is rejected: it satisfies the equation as a backwards integral, but fails the stated condition (7).
- **Misconceptions addressed:** "subtract a negative as if positive" (1, 2, 5; feedback 1 crossed); "F(a) − F(b)" (4); "reversed limits change nothing" (4; feedback 2 crossed); "e⁰ = 0" (6, crossed chip); "ln 1 = 1" (6); "a negative k can't fit" (7).
- **One idea at a time:** one example carries scenes 1 to 4 (x² on [−2, 1]), so each new idea changes only one thing: brackets (2), a split point (3), the order of the ends (4). One function family per scene in 5 and 6. One equation step per row in 7.
- **Video makes it easier:** the student sees the region all above the axis before any number (1), watches the bracket draw before the negative value goes into it and the "− (−" collapse to "+" (2), sees the two regions merge as the middle values cancel (3), and watches strips run backwards and turn red-orange (4). In scene 7 the dial shows both k = 3 and k = −3 giving 8, so the condition visibly decides.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing. A2 has no formula for f, so it tests the properties, not a primitive. One crossed mistake each; feedback about 22 s and 25 s (scenes 10 and 12), inside the 15 to 30 s band.
- **Avoided double teaching:** the FTC and its derivation (i08), the signed sum (i07) and the primitives of x², sin x, eˣ and 1/x (i01 to i05) are each recalled in a phrase or grey tag.
- **Syllabus coverage:** `ci6dc07a10` (1, 2, 5, 6: power, trig, exponential and log; 7: a related theoretical problem; A1; key notes 1, 2 and 5); `ci1bdb853f` (3; A2; key note 3); `ci585dfd5a` (4: defined and used; A2; key note 4).
- **Out of scope by design:** total area (i10); y-axis areas (i11); symmetry and the trapezoidal rule (i12); modelling (i13); definite integrals of matched-inside forms (open decision 2).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 2 marks suggested, not an official marking scheme).** "Evaluate ∫_{π/3}^{π} sin x dx."
Model answer: ∫_{π/3}^{π} sin x dx = [−cos x]_{π/3}^{π} = (−cos π) − (−cos(π/3)) = 1 − (−½) = 3/2. Classic mistake (crossed): "1/2" (the bracket dropped: 1 − ½).

**Attempt 2 (scene 11; original, HSC style, 2 marks suggested).** "f is continuous. Given ∫₀⁵ f(x) dx = 7 and ∫₀² f(x) dx = 3, find ∫₅² f(x) dx."
Model answer: ∫₀² f(x) dx + ∫₂⁵ f(x) dx = ∫₀⁵ f(x) dx, so ∫₂⁵ f(x) dx = 7 − 3 = 4. Hence ∫₅² f(x) dx = −∫₂⁵ f(x) dx = −4. Classic mistake (crossed): "4" (limits reversed but sign not changed).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook example | ∫₋₂¹ x² dx; F = x³/3; F(1) = 1/3, F(−2) = −8/3 | 1, 2 |
| Slip | 1/3 − 8/3 = −7/3 (crossed) | 1 |
| Bracketed | 1/3 − (−8/3) = 1/3 + 8/3 = 3 | 2 |
| Split at 0 | ∫₋₂⁰ x² dx = 8/3; ∫₀¹ x² dx = 1/3; sum 3 | 3 |
| Reversed | ∫₁⁻² x² dx = −8/3 − 1/3 = −3; reverse strips n = 6, width 0.5 | 4 |
| Same limits | ∫_a^a f(x) dx = 0 | 4 |
| sin x (site card 08) | −cos π = 1, −cos 0 = −1; ∫₀^π sin x dx = 2; slip 1 − 1 = 0 (crossed) | 5 |
| Linear inside (original) | F = −½ cos 2x; F(π/4) = 0, F(0) = −½; ∫₀^{π/4} sin 2x dx = ½ | 5 |
| Exponential (site problem 2) | F = eˣ + x²/2; F(2) = e² + 2; F(0) = 1; ∫₀² (eˣ + x) dx = e² + 1 ≈ 8.39 | 6 |
| Log (site cloze) | ∫₁^e (1/x) dx = ln e − ln 1 = 1 | 6 |
| Find k (site card 05 backwards) | k² − 1 = 8; k = ±3; ∫₁⁻³ 2x dx = 8; k > 1 gives k = 3 | 7 |
| A1 | −cos(π/3) = −½; ∫_{π/3}^π sin x dx = 3/2; crossed 1/2 | 9, 10 |
| A2 | ∫₂⁵ f = 4; ∫₅² f = −4; crossed 4 | 11, 12 |
| Handoff | ∫₀^{2π} sin x dx = −1 − (−1) = 0 (area 4, not shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run, `b1_nums.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- ∫₋₂¹ x² dx = 3; ∫₋₂⁰ x² dx = 8/3; ∫₀¹ x² dx = 1/3; ∫₁⁻² x² dx = −3; (−2)³/3 = −8/3; 1/3 − 8/3 = −7/3.
- ∫₀^π sin x dx = 2; ∫₀^{π/4} sin 2x dx = 1/2; ∫_{π/3}^π sin x dx = 3/2; ∫₀^{2π} sin x dx = 0; cos(π/3) = ½.
- ∫₀² (eˣ + x) dx = e² + 1 ≈ 8.389; ∫₁^e (1/x) dx = 1.
- ∫₁ᵏ 2x dx = k² − 1; k² − 1 = 8 gives k = ±3; ∫₁⁻³ 2x dx = 8; ∫₁³ 2x dx = 8.
- A2: 7 − 3 = 4; ∫₅² f = −4.
- Reverse strips: n = 6 on [−2, 1], Δx = −0.5 from right to left (display only; no sum shown).

## Memory aid check

- **"Top minus bracketed bottom. Swap the ends, swap the sign. Split at a point inside, and the pieces add up."** Meaning, as said in scene 8: "top" and "bottom" are F at the upper and lower limits, with the lower one bracketed (scene 2); swapping the limits negates (scene 4); splitting at b with a ≤ b ≤ c adds (scene 3). Assumptions checked: f continuous on the interval (stated in scenes 3 and 4, and under the line on screen); "top" means the upper limit as written, even when it is the smaller number (scene 4 uses it this way: the top of ∫₁⁻² is −2), so the line also gives reversed limits correctly; "a point inside" matches the syllabus condition a ≤ b ≤ c (author note a). It helps a new case: ∫₂⁻¹ x dx = (−1)²/2 − (2²/2) = ½ − 2 = −3/2, which line 1 gives directly. Introduced after the cause (2 to 4) and the uses (5 to 7).
- **Considered, not used:** "upper minus lower" alone (true, but it omits the bracket, which is this video's cause); "BODMAS" slogans (unrelated).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,222 characters**, 14 scene headings (Revision 1: 5,683). Characters per scene (1 to 14): 775, 774, 711, 711, 725, 614, 533, 135, 91, 240, 197, 340, 301, 75.

At 13.3 characters per second the speech before the notes is about 462 s. Holds: the 3 s prediction hold (1), two 10 s countdowns (20 s), five short holds (memory aid 2 s, two feedbacks 1 s each, handoff 2 s; about 5 s with settling), and about 18 s of settling for the thermometer runs (1 to 4), the bracket collapses (2, 5, 6), the split slider (3), the backwards strips (4) and the find-k dial (7); the key-notes scene is 45 s (1,350 frames). Total **about 553 s (9 min 13 s)**, inside the 5,500 to 7,000 character band and 17 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 6's "Leave answers exact, like e squared plus one, unless a question asks for a decimal." (keep the grey chip); scene 3's thermometer sentence (keep the inset's "+2" and "+1" tags); scene 2's "not one minus two" (keep the crossed slip). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12i09` (route math-a12-i09, draft). Suggested explainer folder `src/explainer/lessons/math-a12-i09` and build folder `docs/production/claude-pm/lessons/m-a12i09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, bracket-the-bottom, split-at-zero, reversed-limits, trig-minus-sign, exp-and-log-values, find-the-limit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): i08's last frame continues into scene 1 (camera continue; the row shrinks to the right column as the graph draws); 1 to 2 to 3 to 4 camera continue (same graph); 4 to 5, 5 to 6, 6 to 7 clear change (new case); 7 to 8 board clear; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board. Scene 1 carries a 3 s prediction hold on "negative".

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i09-learning-review.md`, `science_check` = `checks/m-a12i09-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/m8-thermometer-v1.png` (a laboratory glass thermometer lying diagonally with a red column; a lab object, diagonal, and its column is painted in, so it cannot move or read below zero; not used); `chemistry/m5x-thermometer-cold-v1.png` and `chemistry/c8-thermometer-hot-v1.png` (lab thermometers; same reasons); `biology/b3b-straw-frost-v1.png` (a thin frosted straw strip; not a setting). No outdoor thermometer or frosty post exists.

Need (painted, new; see the Codex asset brief): `ma12-frost-thermometer-v1.png`.

Coded (studio kit): the spirit column, the scale numbers, the clock and readouts, graphs and signed fills, the split point and boundary, backwards strips, the find-k dial, `LimitSubstitution` rows, givens cards, answer frames, mistake slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `ParameterSlider`, `LiveReadoutBoard`, `FunctionSimulator` (fills, markers), `AreaStrips`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions the build needs:
1. **`ThermoColumn`** (small, kit): a coded liquid column drawn inside a plate's measured tube (bulb point and tube top from the provenance file), driven by a value and a linear scale, with coded tick numbers beside the painted ticks.
2. **`LimitSubstitution`** (kit; the Revision 1 contract below is kept): the amber bracket draws before F(a) is written into it; the number's own sign violet; "− (−" collapses into "+" on cue.
3. **Split slider** (lesson-local on `FunctionSimulator`): a draggable split point with two signed fills and two live integral readouts plus a locked sum readout.
4. **Backwards strips** (`AreaStrips` extension, `direction: 'reverse'`): strips draw right to left with left-pointing width arrows, each switching to the negative fill as it draws, with a running sum.

## Codex asset brief (Maths A12 I09, a frosty-morning thermometer)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-i09.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style (match `biology/b4-car-yellow-v1.png` and `physics/phys-y11-lift-car-v1.png` in palette, line weight and finish); at least 8 per cent clear margin unless a plate is stated to be a tile; no text, labels, letters, numbers, signs with writing, brand names, people, hands, faces, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma12-frost-thermometer-v1.png` (1000 × 2400 px, portrait): a long outdoor garden thermometer fixed upright to the top of a weathered timber fence post on a frosty morning, seen straight on. The thermometer is a white enamel backing board (about 160 px wide in the file) with **evenly spaced plain tick marks only (eleven major ticks with four minor ticks between each pair; no numbers, letters or degree signs)** and a clear glass tube with a round bulb at the bottom; **the tube and bulb are painted empty and clear** (no coloured liquid: a coded column is drawn inside). White frost crystals on the top of the post and the board's upper edge, a few frosted grass tufts at the base, the ground patch ending in a soft, irregular transparent edge; no sky, fence rails beyond the post, buildings or people. Codex reports, in file pixels: the centre of the bulb, the tube's inner centre line top and bottom points, and the y-coordinates of the eleven major ticks (they must be evenly spaced to within 2 px).

Report inspection on the paper background (`#f6f1e7`) at 300 px and 520 px tall, plus the alpha checks, the tick spacing and the anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-i09-provenance.json`.

## Coded part specification (Revision 1, kept)

**`LimitSubstitution`.** Writes F(b), then "−", then opens a bracket that wraps F(a); the bracket draws before F(a) is written into it; the number's own sign is coloured (Revision 2: violet), the subtraction sign ink; on cue the pair "− (−" collapses into "+" with a short pulse. **`RiemannStrips` `direction: 'reverse'`** (now on `AreaStrips`): strips draw from right to left with width arrows pointing left, each strip's fill switching to `AREA_NEG` as it is drawn.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the opening frame matches i08 scene 15 exactly and that the value 3 first appears in scene 2.
3. Confirm the splitting statement and the reversed-limit definition carry the syllabus conditions (f continuous; a ≤ b ≤ c) wherever they are stated in learner copy (scenes 3 and 4, key notes 3 and 4, memory aid), and that "split anywhere" does not appear.
4. Confirm the reversed-strips claim (scene 4): widths negative, every term's sign flipped, limit −∫_a^b f (author note c).
5. Confirm scene 7's claim that ∫₁⁻³ 2x dx = 8, so k = −3 satisfies the equation and is rejected only by k > 1.
6. Confirm A1 = 3/2 with crossed 1/2, and A2 = −4 with crossed 4; confirm neither card shows a primitive, value, sign or graph.
7. Confirm the handoff (scene 13) shows the signed value 0 and no area value (4 is not on screen), and that no total-area method is taught before it.
8. Confirm the syllabus quotes match the crosswalk JSON text exactly (linear form), and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Evaluating Definite Integrals Without Losing Signs | Year 12 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html

The integral of x² from −2 to 1 can't be negative, because every strip is above the axis. So why do so many working lines end in −7/3? Learn to bracket F(a), so the minus sign in the rule never meets the minus sign in the number. Check by splitting the region at a point, see why swapping the limits flips the sign, and evaluate integrals of sin x, eˣ + x and 1/x with their traps (−cos 0 = −1, e⁰ = 1, ln 1 = 0). Then run the rule backwards to find an unknown limit, and let the question's condition choose the sign. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply ∫_{a}^{b} f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course"
"Recognise and use the result, where f(x) is continuous on the interval a ≤ x ≤ c, ∫_{a}^{b} f(x) dx + ∫_{b}^{c} f(x) dx = ∫_{a}^{c} f(x) dx for all c such that a ≤ b ≤ c"
"Define and use the result ∫_{a}^{b} f(x) dx = −∫_{b}^{a} f(x) dx, where f(x) is continuous on the interval a ≤ x ≤ b"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: The Fundamental Theorem of Calculus (previous video); primitives of powers, sin x, eˣ and 1/x. Next: Signed integrals and total area.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Route entry (root).** The draft entry in "Decisions" is ready to adopt.
- **2. Matched-inside definite integrals (root).** `ci6dc07a10` covers all course functions; this video evaluates power, trig (with one linear inside, ∫₀^{π/4} sin 2x dx = ½), exponential and log examples, but no definite integral of a matched inside (e.g. ∫₀¹ 2x e^{x²} dx = e − 1). It adds no new idea beyond i05 and the bracket. Proposed home: the strand's exam-practice video.
- **3. i10's opening frame (root, i10's designer).** Scene 13 is i10's opening frame (∫₀^{2π} sin x dx = 0 with signed arches and "Area = ?"). The i10 design in this wave is written to open on it.
- **4. Prediction hold (learning review).** Scene 1's 3 s hold asks for the sign only. Confirm that a student starting Year 12 can make the sign prediction from "x squared is never negative" and i07's strips.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i08, i07 and the primitives videos; check that the prediction comes before any value; that "the minus sign in the rule belongs to the subtraction, the minus sign inside F of a belongs to the number" is clear; that one example carries scenes 1 to 4 without crowding; that the reversed strips read as negative widths, not negative heights; that scene 7's k = −3 point is followable; that the attempt cards give nothing away), then the Codex maths check and error check.
- The bracket draw and collapse, the merge at the split and the backwards strips carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is i08's scene 15 exactly (read 2 Nov). If i08's handoff changes in review, change scene 1's first visual and first two sentences to match.

## Revision 2 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, syllabus points, the learner question, the site examples, both attempts, the cause chain and the memory aid are unchanged.

- **Anchor and why:** an outdoor thermometer on a frosty morning. A change in temperature from −2 °C to 1 °C is 1 − (−2) = 3, the everyday version of bracketing F(a), with the same answer as the hook. It returns for splitting (through 0 °C) and for reversed limits (cooling in the evening). Everyday weather, not lab science; distinct from every root-decision context and from i01 to i07's likely contexts.
- **Simulations:** the thermometer's live spirit column with "reading" and "change" readouts; the split slider whose two pieces change while the total stays 3; backwards strips with a running sum to −3; the find-k dial with a live k² − 1 readout.
- **Colour roles:** top value F(b) blue; bottom value F(a) and its bracket amber; a number's own minus sign violet; the rule's subtraction sign ink; split point b teal; signed fills pale teal and pale red-orange; answer green; mistake red.
- **Plates:** new `ma12-frost-thermometer-v1.png` (briefed above). No reused plates.
- **Narration changes (not voiced):** scene 1 introduces the thermometer; scene 2 works the thermometer first; scene 3 adds one thermometer sentence; scene 4 adds the evening cooling. Scenes 5 to 14 keep their Revision 1 text.
- **Counts:** 5,683 → 6,222 characters; about 522 s (with the old 60 s notes hold) → about 553 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were five long notes) beside the framed card.
- **Joins:** opens on i08 Revision 4's final frame (unchanged); ends on the unchanged signed-arches frame that i10 Revision 2 opens on.
- **Kit additions:** `ThermoColumn`, `LimitSubstitution` as a studio part, the reverse mode on `AreaStrips`, and a lesson-local split slider.
