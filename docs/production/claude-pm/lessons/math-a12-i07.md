# Maths A12 I07: How does a signed sum become a definite integral? Strips below the axis, the limit of the sums, the ∫ notation and evaluating by geometry above, below and across the axis (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026): brief 161 repairs applied. Not voiced (no `math-a12-i07/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the anchor needs it. Opens on i06 Revision 3's final frame (the same graph and rectangles as Revision 2, now labelled as a bath's net flow); its final frame is unchanged for i08.

Narration 5,775 characters, 16 scene headings, about 518 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: second video of the definite-integral group in the Year 12 Mathematics Advanced integral calculus strand (outline playlist order 30), after i06 (rectangles and trapezia) and before i08 (the accumulation function and the Fundamental Theorem). Templates: `math-a12-i05.md` (Revision 2) and `math-a12-d10.md` (Revision 2), and the i06 design (Revision 1, written just before this one, whose scene 14 is this video's first frame): same structure, voice, paper style and kit parts. Revision 3 follows `math-a12-d01.md` (Revision 6, built and approved by the owner) and `../maths-visual-standard.md`, on the maths studio kit (`src/explainer/math/studio/`): a painted plate carries the everyday anchor (a bath filling with the plug out, whose net flow goes negative); graphs, axes, strips and algebra stay coded. Programme decision 5 (coded only) is withdrawn by the visual standard. No pre-design pack exists, so the pack work is done here. Site lessons read (2 Nov, read-only): integral-calculus lesson 7 (the definite integral), `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html`, SHA256 `b41c698b744a5ebc753ba24dac3a212c0c0e94dd795d24305072a9c40736d944`, worked example "Problem 3" (v(t) = 12 − 2t m/s for 0 ≤ t ≤ 8; v = 0 at t = 6; displacement 32 m) and its Riemann-sum stepper, numbers reused unchanged; integral-calculus lesson 2 (the outline's named source; its signed-area card supports scenes 2 and 6; its Problem 1, ∫₁³ (2x + 1) dx = 10, is reused unchanged as a geometry example in scene 7), SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`. The FTC evaluations on both pages are not used (i08, i09). No route entry exists yet; the draft entry is in "Decisions". Root decisions applied: exact values in algebra, decimals only in grey readouts (−2π with grey ≈ −6.28); attempt cards never give away answers or signs; final frame is the handoff frame (root decision 20).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; painted plates for the everyday anchor, coded graphs and algebra (Revision 3); no people, hands or figures (the car is never drawn, only its velocity graph and a small coded position strip); one reasoning stage at a time with only the needed earlier results kept; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Earlier videos recalled in a sentence, not re-taught: i06 (strip = rate × width, Σ f(x)Δx estimates total change, refining n, continuity), Year 11 (equation of a circle, area of a triangle, trapezium and circle).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Integral calculus, group "The definite integral"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ci04161a44`: "Consider the definite integral as ∫_{a}^{b} f(x) dx = lim_{Δx→0} ∑_{a,b} f(x)Δx, noting that this implies that the result of a definite integral will be negative when f(x) ≤ 0 throughout the interval a ≤ x ≤ b"
- `ci723d0f0b`: "Evaluate the definite integral ∫_{a}^{b} f(x) dx by calculating areas using geometrical formulas, where the shape of f(x) allows such calculations, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i06's last frame (v = 12 − 2t on 0 ≤ t ≤ 8 with eight left-endpoint rectangles of width 1, the eighth below the axis ringed with "?", chip "Next: a rate below zero"); explains a strip below the axis as a negative change (reversing: −2 m/s × 1 s = −2 m); keeps every strip's sign in the sum; refines the signed sums (n = 16, 64, 256: 36, 33, 32.25) to the settled value 32; names it the definite integral, ∫_a^b f(x) dx = lim_{Δx→0} Σ f(x)Δx, with the notation's parts given plain meanings, and draws the consequence that f ≤ 0 throughout gives a negative integral (`ci04161a44`); right-endpoint sums settle on the same 32 (28, 31, 31.75); gives the limit its general rate meaning (the exact total change; units m/s × s = m); evaluates by geometry in all three cases on the site's velocity (∫₀⁶ = 36, ∫₆⁸ = −4, ∫₀⁸ = 32, the displacement), on the site's trapezium (∫₁³ (2x + 1) dx = 10), on a balancing case (∫₋₃³ x dx = 0) and on a curved shape below the axis (∫₋₂² −√(4 − x²) dx = −2π) (`ci723d0f0b`). Stops at evaluating by geometry. Not taught: total area or total distance (`ciea1a6452`, `cib0134047`, `ci09a73813`, `cicfcd020a`: i10; the site's distance 40 m is deliberately not shown); reversed limits and splitting (`ci585dfd5a`, `ci1bdb853f`: i09); the accumulation function and the FTC (i08: the handoff only asks a question); evaluation by primitives (i08, i09).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a bath filling with the plug out (painted plate, live).** The tap runs in at 16 − 2t litres per minute (it is turned down steadily and is off at t = 8) while the drain takes a steady 4 litres per minute, so the net flow is 12 − 2t litres per minute for 0 ≤ t ≤ 8 (site integral lesson 7 "Problem 3", numbers unchanged, given this meaning). For six minutes the bath gains water; then the drain wins and the net flow is negative, so the last strip hangs below the axis and means water lost. The bath starts with 40 L: it rises to 76 L at t = 6 and falls back to 72 L at t = 8, a net change of +32 L, which is the definite integral (36 gained, 4 lost). In all, 64 L come in through the tap and 32 L leave by the drain. This replaces Revision 2's car (velocity and displacement).
- **Why this anchor.** Owner rule (7 Nov): everyday anchors; root asks to avoid more cars (d08, d14, d19). A bath with the plug out is the most familiar picture of a signed rate: in and out at once, so "below the axis" means "losing water" without any talk of direction. It differs from i06's rain (a gauge that only fills) and d16's vase (shape against level). The site's displacement meaning goes with velocity to the motion videos; a grey key-note tag keeps "for a velocity, this is the displacement".
- **Idealising assumptions (author notes, not learner copy).** (i) The tap is turned down at a steady 2 L per minute each minute and the drain takes exactly 4 L per minute whatever the depth (a real drain runs faster when the bath is deeper). (ii) The bath starts with 40 L, so the drain always has water to take. (iii) Volumes are shown on a coded litre scale beside the bath; the bath is about 160 L to the rim.
- **Join with i06 (fixed).** Scene 1 opens on i06 Revision 3's final frame exactly: y = 12 − 2t on 0 ≤ t ≤ 8, axis labels "net flow (L/min)" and "time t (min)", eight light-teal left-endpoint rectangles of width 1, the eighth below the axis ringed with "?", the small painted bath and the chip "Next: a rate below zero".
- **Join with i08 (unchanged).** Scene 15's text and visual are Revision 2's, word for word, so the final frame stays y = 3 − t on 0 ≤ t ≤ 6, shaded from 0 to the marker at x = 2, "A(x) = ∫₀ˣ (3 − t) dt" with "?", and the chip "Next: let the end move" (i08's "Opening frame" paragraph needs no change).
- **Simulations (standard item 3).**
  1. `BathFlow` (scenes 1 to 6; lesson-local on `ContainerFill` and `FunctionSimulator`): the painted bath with a coded water level V(t) = 40 + 12t − t² litres on a litre scale, a coded stream from the tap whose width follows 16 − 2t, and a coded swirl at the drain for the steady 4 L per minute; readouts "tap in", "drain out", "net flow" (violet) and "water in the bath" (ink), all from one clock. As the signed strips are added left to right, the level steps up for teal strips and down for amber ones.
  2. `StudioRiemannStrips` in signed mode (scenes 1 and 2): strips split to 16, 64 and 256, left then right endpoints, with a live signed sum and a small number line where the two sets close on 32.
  3. `StudioAreaFill` signed (scenes 4 to 9): regions sweep in above and below the axis; the balance bar in scene 8; the semicircle fold in scene 9.
- **Colour roles (fixed for the whole video).**
  - **the net flow and every graphed rate: violet** (`MATH_GRADIENT`);
  - **strips and area above the axis (water gained): pale teal** (`MATH_UP_SOFT`, d09's increasing role); **below the axis (water lost): pale amber** (`MATH_DOWN_SOFT`, d09's decreasing role); readout terms colour-matched;
  - **the water in the bath and geometry outlines: ink**; dimension brackets ink;
  - **answer: green**; **mistake: red**, crossed slips only. The bath water is a pale blue fill (not a role).
- **Large type (standard item 5).** Current working line and readout numbers 52 px; equation strip and givens 44 px; earlier lines 30 to 32 px and dim; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The bath is about 760 px wide in scenes 1 to 6.
- **Handwritten voice (standard item 6).** `HandTag`: "gaining", "losing", "negative change", "+ above, − below", "both settle on 32", "36 in", "4 out", "net change 32 L", "balance", "loses the sign", "the piece below subtracts", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2).** i06's frame, then the bath filling and draining beside the net-flow graph (1); signed strips refining, with the number line (2); the definite integral's notation (3); the triangle above with the bath gaining (4); the triangle below with the bath losing (5); the signed total and the bath's net change (6); the trapezium board (7); the balancing board (8); the semicircle fold (9); the framed memory card (10); question cards with pictures (11 to 14); the accumulation handoff (15); key notes (16).
- **Worked examples and attempts (g01 layout, standard item 7).** Scenes 7, 8 and 9: task strip, the graph with labelled dimensions, rows one at a time at 52 px and green framed answers. Feedback scenes carry a `GivensStrip` on the answer side, rows at 52 px, a green framed answer and one red crossed slip each. Question cards show the full worded question at 40 px plus a small picture (empty axes over the interval with the hand tag "sketch first"), nothing answer-bearing.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Above adds, below subtracts." with the keys "teal strip: water in" and "amber strip: water out", the line "∫ₐᵇ f(x) dx = lim (Δx → 0) Σ f(x)Δx, with a < b" and a bath badge "the bath: 36 in, 4 out, net 32 L". Key notes are five short bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The bath's level climbs while the strips are teal, then drops as the amber strip arrives, and 40 L of shaded strips leave only 32 L of change (scenes 1 and 6); two triangles with plenty of area give an integral of zero, and the balance bar levels (scene 8).
- **Narration (not voiced).** Scene 1 is rewritten around the bath (589 → 686); scenes 3 to 6 change the car's metres to the bath's litres (789 → 791, 305 → 297, 299 → 297, 422 → 399). Scenes 2 and 7 to 16 keep their Revision 2 text, and scene 15 is unchanged word for word (i08's join). Total 5,709 → 5,775 (Revision 2 stated 5,711; the recount by script is 5,709).

- **Learner question kept (outline).** "How does a signed sum become a definite integral?" The answer, built in order: a strip below the axis is a rate below zero times a width, a negative change (1); so the sum keeps signs, and its refined values settle (2); left and right heights settle on the same value, so it is one number (2); the settled value of the signed sums is the definite integral, written ∫, and for a rate it is the exact total change (3); when the graph makes simple shapes, signed areas give the integral exactly, above the axis positive and below negative (4 to 9); above and below can cancel (8).
- **Draft route entry (no route entry or pack exists; root to adopt or amend).** id `math-a12-i07`; playlistOrder 30; mainLearnerQuestion "How does a signed sum become a definite integral?"; syllabusActionIds `ci04161a44`, `ci723d0f0b`; prerequisiteVideos `math-a12-i06`; sourceLessons integral-calculus lesson 7 (SHA above; example "Problem 3" and the Riemann-sum stepper) and lesson 2 (signed-area card); entryKnowledge: i06 (strip = rate × width; Σ f(x)Δx; Δx = (b − a)/n; refinement; continuity informal); Year 11 circle x² + y² = r² and areas of triangle, trapezium and circle; velocity as a rate of change of position (plain meaning given); startBoundary "Open on i06's eight left-endpoint rectangles under v = 12 − 2t on [0, 8], the eighth below the axis."; stopBoundary "Negative strips; signed sums refined to 32; ∫ notation as the limit of sums; f ≤ 0 throughout gives a negative integral; geometry in all three cases (site Problem 3 and lesson 2 Problem 1 numbers; balancing case; semicircle). No total area/distance, reversed limits, splitting, accumulation function or FTC."; nextHandoff "math-a12-i08: A(x) = ∫₀ˣ (3 − t) dt with a moving upper end (site lesson 8 accumulator)".
- **Opening (i06's handoff frame).** i06 ends with the question "What does a strip below the axis mean?" on this exact frame. Scene 1's first sentence describes the frame ("Here's a car's velocity ...") and is true however the video is reached.
- **The cause of a negative strip (velocity with a direction).** Velocity is given its plain meaning: speed with a direction, positive forwards, negative reversing. The eighth strip is −2 m/s × 1 s = −2 m: an estimate that the car moves about 2 m back (exactly 3 m, since the velocity keeps falling; Revision 2). A small coded position strip (a horizontal track with a dot, no car drawn) moves the dot back 2 m as the strip pulses. This makes "below the axis subtracts" a consequence, not a rule.
- **Refinement without the coincidental 40.** The left signed sum at n = 8 is 40, which equals the site's total distance (40 m, an i10 result). To avoid a false link later, the narration and readouts use n = 16, 64 and 256 (left 36, 33, 32.25; right 28, 31, 31.75); the n = 8 frame is used only for the meaning of one strip. Left sums fall and right sums rise onto the same 32, which shows the limit does not depend on the choice of heights (i06's "any x in its base"). Settled value 32, reported by the graphing application and then confirmed by geometry in scene 6.
- **Notation with plain meanings (`ci04161a44`).** ∫ is a long S, for sum; f(x) dx recalls a strip (height times a tiny width); a and b are the ends; "limit" means the value the sums settle on as the strips get thinner (Δx → 0). The syllabus's Σ_{a,b} form from i06 sits beside it, with an arrow labelled "Δx → 0". The continuity condition is kept in a grey tag ("f continuous on a ≤ x ≤ b, from the last video"). **General rate meaning** (the outline's gap note for `ci04161a44`): the sums estimate the total change (i06), so their limit is the exact total change; the units multiply (m/s × s = m); i06's tank (water in) and this car (change in position) are named as two instances.
- **"Negative when f ≤ 0 throughout" (`ci04161a44`).** Shown on ∫₆⁸ (12 − 2t) dt: every strip is below the axis, so every term is negative, so the sum and its limit are negative (−4). Author note b: the strict statement needs f not identically zero; the syllabus wording is kept in learner copy.
- **Geometry in all three cases (`ci723d0f0b`; site Problem 3 numbers).** f ≥ 0: ∫₀⁶ (12 − 2t) dt = ½ × 6 × 12 = 36 (forwards 36 m). f ≤ 0: ∫₆⁸ (12 − 2t) dt = −½ × 2 × 4 = −4 (back 4 m). Changes sign: ∫₀⁸ (12 − 2t) dt = 36 + (−4) = 32, the site's displacement, and the value the sums settled on. A trapezium not starting at zero (site lesson 2 Problem 1, numbers unchanged): ∫₁³ (2x + 1) dx = (3 + 7)/2 × 2 = 10. A balancing case (original): ∫₋₃³ x dx = −9/2 + 9/2 = 0, the surprise that plenty of area can give a zero integral (prepares i10 without teaching total area). A curved case: ∫₋₂² −√(4 − x²) dx = −½π(2)² = −2π (Year 11 circle recalled: y = √(4 − x²) is the top half of x² + y² = 4). Attempt 1 then uses a trapezium below the axis (a new combination, not a copy).
- **Displacement, not distance.** The narration names ∫₀⁸ v dt as the displacement ("how far it ends up from where it started") once, and adds that a trip ending behind the start gives a negative integral. Distance and total area are i10's question; the 40 m total and absolute values are not mentioned.
- **Attempts (original).** (A1) "Use areas to evaluate ∫₀³ (x − 5) dx." The graph is below the axis throughout; a trapezium with parallel sides 5 and 2 and width 3 has area 21/2; answer −21/2. Crossed: "21/2" (sign lost). (A2) "Use areas to evaluate ∫₀⁶ (x − 2) dx." Below from 0 to 2 (area 2), above from 2 to 6 (area 8); answer 6. Crossed: "10" (both areas added). Neither card shows a graph, the crossing point, a shape or the sign of the answer.
- **Mistake scene:** none separate. "Area is always positive, so integrals are too" (1, 5, feedback 1 crossed); "add the areas" (6, 8; feedback 2 crossed); "zero means no area" (8); "left and right sums settle on different values" (2); "the ∫ sign is just a primitive" (3: here it is defined as a limit of sums, before any primitive); "geometry only works for straight lines" (9); "the region must start at the origin" (7).
- **Memory aid.** "Above adds, below subtracts." See "Memory aid check".
- **Handoff (draft route next).** Scene 15: y = 3 − t on 0 ≤ t ≤ 6 (site lesson 8 accumulator function f(t) = 3 − t, a = 0), shaded (signed colours) from 0 to a moving point x, which slides from 0 to 2; readout "A(x) = ∫₀ˣ (3 − t) dt" with "?"; chip "Next: let the end move". No value, formula or derivative is stated; the narration asks a question only.
- **Site sources used:** lesson 7 "Problem 3" (v(t) = 12 − 2t, 0 ≤ t ≤ 8; v = 0 at t = 6; displacement ∫₀⁸ = 32 m; pieces 36 and −4), reused unchanged (scenes 1, 2, 4 to 6); lesson 2 "Problem 1" (∫₁³ (2x + 1) dx = 10) reused unchanged and evaluated by its trapezium instead of the site's primitive (scene 7); its stepper's "watch a rectangle drop below the axis and subtract" becomes scenes 1 and 2. Lesson 2's card "Areas above the x-axis contribute positively. Areas below the x-axis contribute negatively" matches scene 6's last sentence. The balancing case, the semicircle, both attempts and the refinement values are original.
- **Site corrections (new, for the next site log; not learner copy):** (1) Integral lesson 7 header: "Module 6 · L4 of 15" is a stale label on a Year 12 page (same class as log items 1 to 7). (2) Integral lesson 7 hook: "Is the distance in the first 3 seconds more than, less than, or equal to 2 × 3 = 6 metres?" for v(t) = 2t gives no meaning for 2 × 3 (it is neither v(3) × 3 = 18 nor the average speed × 3 = 9; the distance is 9 m). Teaching note: compare with a quantity that has a meaning, such as v(3) × 3 = 18 m (an overestimate) or v(0) × 3 = 0 m. Coverage note (not an error): neither lesson 2 nor lesson 7 evaluates a definite integral from geometric areas alone, including a sign-changing case (outline gap for `ci723d0f0b`); scenes 4 to 9 supply it.
- **Pack questions answered:** no pack exists. Pack work done here: site lessons 2 and 7 read; every number recalculated with SymPy and Python (see "Numbers to verify"); misconceptions listed under "Mistake scene"; site errors above.
- **Cause chain taught, in order:** (1) a negative rate times a width is a negative change: the car reverses (1); (2) so the sum must keep each strip's sign, and refining makes the signed sums settle, on the same value from left or right heights (2); (3) that settled value is the definite integral, the exact total change for a rate (3); (4) when f ≤ 0 throughout, every strip is negative, so the integral is negative (5); (5) when the graph makes simple shapes, their areas, signed by side of the axis, give the integral exactly (4 to 9); (6) for a velocity, the integral is the displacement, negative if the trip ends behind the start (6); (7) equal areas above and below cancel (8).
- **Entry knowledge:** i06 (strip = rate × width; Σ f(x)Δx estimates the total change; Δx = (b − a)/n; refinement; continuity, informally); Year 11 circle x² + y² = r²; areas of a triangle, trapezium and circle (Stage 4). Not assumed: velocity's sign (plain meaning given), displacement (plain meaning given), limit notation (plain meaning given).
- **Learner-visible vocabulary (plain meaning at first use):** velocity (speed with a direction, scene 1); signed sum (a sum that keeps each strip's sign, scene 2); definite integral (the value the signed sums settle on, scene 3); limit (the value the sums settle on as the strips get thinner, scene 3); limits of integration a and b (the ends of the interval, scene 3); displacement (how far it ends up from where it started, scene 6); trapezium (recall, scene 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **signed strips** (`RiemannStrips` with `signed`: strips below the axis fill `AREA_NEG`; split animation on refinement); **position strip** (plain SVG track with a moving dot, scene 1, metre ticks); **signed readout** (`ReadoutPanel`, grey, with + and − terms colour-matched); **notation build** (`IntegralNotation` from brief 143 with timed labels on ∫, a, b, f(x) and dx; the Σ form beside it with an arrow "Δx → 0"); **signed area fills** (`AreaFill` with `signed`, `zeros` [6], scenes 4 to 6; none, scene 7; [0], scene 8; none, scene 9); **sums settling from both sides** (small number line with falling left and rising right marks, scene 2); **balance bar** (plain SVG, scene 8); **prediction ring** (3 s, scene 1); **geometry overlays** (triangle, trapezium and semicircle outlines with dimension brackets, plain SVG through `graphTransform`); **semicircle flip** (`FunctionGraph` `transform` yScale 1 → −1 on y = √(4 − x²), brief 133 fold); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; graph on the left (about 1,050 × 560 px); the position strip under the graph (scene 1 only); notation, readouts and area rows in the right column. Unequal unit lengths, except scenes 8 and 9 (equal units, so the triangles are congruent by eye and the semicircle is round; the build checks `equalUnits`).
- **No human figures.** Painted plates for the anchor only (Revision 3: the bath; no bather, no hands on the tap).
- **Author notes (not learner copy):**
  (a) Left signed sums for 12 − 2t on [0, 8]: L_n = 32 + 64/n (n = 4: 48; 8: 40; 16: 36; 32: 34; 64: 33; 256: 32.25). Right sums R_n = 32 − 64/n. Midpoint sums equal 32 for every n (linear f), which is why the site's stepper reads 32 exactly; the design uses left sums so that settling is visible.
  (b) If f ≤ 0 and continuous on [a, b] with a < b, then ∫ ≤ 0, with equality only if f = 0 on the whole interval. Learner copy keeps the syllabus wording ("will be negative when f(x) ≤ 0 throughout").
  (c) All integrals here have a < b; scene 10 says so aloud (the condition the memory aid needs) and defers swapped limits to "a later video" (i09, `ci585dfd5a`).
  (d) ∫₀⁶ (12 − 2t) dt = 36, ∫₆⁸ = −4, ∫₀⁸ = 32 (SymPy). The site's total distance 40 m is not shown (i10).
  (d2) ∫₁³ (2x + 1) dx: heights 3 and 7, width 2, area 10 (site value). ∫₋₃³ x dx: triangles of area ½ × 3 × 3 = 9/2 below and above; integral 0; total area 9 (not shown, i10). Right sums R_n = 32 − 64/n: n = 16: 28; 64: 31; 256: 31.75.
  (e) y = √(4 − x²) for −2 ≤ x ≤ 2 is the upper half of x² + y² = 4, radius 2; area ½π × 4 = 2π; ∫₋₂² −√(4 − x²) dx = −2π ≈ −6.283.
  (f) A1: x − 5 on [0, 3] runs from −5 to −2 (≤ 0 throughout); trapezium (5 + 2)/2 × 3 = 21/2; integral −21/2 = −10.5. A2: x − 2 on [0, 6]: zero at 2; below: ½ × 2 × 2 = 2; above: ½ × 4 × 4 = 8; integral 6; total area 10 (crossed).
  (g) Windows: velocity scenes t from −0.3 to 8.5 (ticks 2, 4, 6, 8), v from −5 to 13 (ticks −4, 4, 8, 12). Trapezium y = 2x + 1: x from −0.3 to 3.5 (ticks 1, 2, 3), y from −0.5 to 8 (ticks 3, 7). y = x: x and y from −3.5 to 3.5 (equal units; ticks −3, 3). Semicircle x from −2.6 to 2.6, y from −2.6 to 1 (equal units; ticks −2, −1, 1, 2). Handoff t from −0.3 to 6.3 (ticks 1 to 6), y from −3.5 to 3.5 (ticks −3, 3).
  (h) Pronunciations: "twelve minus two t"; "the integral from a to b of f of x, d x"; "delta x goes to zero"; "minus the square root of four minus x squared"; "two pi", "minus two pi"; "twenty-one over two"; "two hundred and fifty-six"; "thirty-two point two five"; "thirty-one point seven five"; "two x plus one"; "four and a half".

Main question (Revision 3): *A bath fills with the plug out, and once the tap is turned down far enough its net flow goes negative, so strips hang below the axis. What does the sum do with them, what number do the sums settle on, and how can shapes give that number exactly?*
Entry knowledge (i06: strip = rate × width, Σ f(x)Δx, refinement, continuity; Year 11 circle; Stage 4 areas): estimates of total change from strips.
Stops after: signed strips; the definite integral as the limit of signed sums; negative when f ≤ 0 throughout; evaluation by geometry above, below and across the axis, including a balancing case and a semicircle. No total area, reversed limits, accumulation function or FTC.
Handoff: math-a12-i08: A(x) = ∫₀ˣ (3 − t) dt, shaded from 0 to a moving x (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Revision 3 colour roles (fixed for the whole video; see Decisions): the net flow and graphed rates violet; strips and area above the axis pale teal (gained), below pale amber (lost); readout terms colour-matched; the bath's water and geometry outlines ink; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · THE DEFINITE INTEGRAL" at the top; scene headings in the hand font, 44 px. Type: current working line and readout numbers 52 px; equation strip and givens 44 px; earlier lines 30 to 32 px and dim; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Scene 15 keeps its Revision 2 frame exactly (i08's opening).

### 1. hook: a strip below the axis
> Here's a bath filling with the plug out. The tap runs in and the drain takes water out, so this graph is the net flow, twelve minus two t litres per minute, over eight minutes, with thin rectangles one minute wide. Positive means the bath is gaining water, and negative means it's **losing** water. The tap is being turned down, so after six minutes the drain wins, and the net flow is negative. Think for a moment. What could a strip below the axis **mean**? Look at the last rectangle. Its height is minus two, and its width is one minute. Minus two litres per minute, times one minute, is minus two **litres**. So the bath lost roughly two litres. So a strip below the axis is a negative change.

Visual: opens on i06's final frame exactly (i06 Revision 3, scene 14 and its silent return after the notes): y = 12 − 2t in violet on 0 ≤ t ≤ 8, axis labels "net flow (L/min)" and "time t (min)", eight light-teal left-endpoint rectangles of width 1, the eighth below the axis ringed with "?", the small painted bath at the right and the chip "Next: a rate below zero". The chip fades; heading writes on: "How does a signed sum become a definite integral?". On "bath" the bath grows to full size at the left (`ma12-bathtub-v1`, about 760 px wide) as `BathFlow` starts, the graph moving to the right (1000 × 600 px): coded water at 40 L on a litre scale, a stream from the tap and a swirl at the drain, with a `LiveReadoutBoard` (52 px) "tap in", "drain out", "net flow" (violet) and "water in the bath" (ink). On "losing" the graph above the axis tints with a faint teal wash, tag "gaining", and below with a faint amber wash, tag "losing". On the next sentence the clock runs 0 to 8 min (about 3 s): the stream thins as the tap is turned down, the level rises to 76 L at t = 6, where the point (6, 0) glows (tag "net flow 0 at t = 6"), then falls to 72 L. On "mean" a small "think" chip with a 3 s ring (no answer shown; prediction hold). On "Look at the last rectangle" the eighth rectangle brightens and its "?" ring fades; brackets: "height −2 L/min", "width 1 min". On "litres" the row "(−2 L/min) × (1 min) = −2 L (estimate)" writes in the right column (52 px) and the rectangle fills amber; the bath's level dips by a 2 L slice, tag "≈ −2 L". Tag on the rectangle: "negative change". (The net flow keeps falling during that minute, so the true change is −3 L; the rectangle is an estimate, and the row says so.)

### 2. keep the signs, then refine
> So keep every strip's sign. Strips above the axis add, and strips below the axis **subtract**. That makes it a signed sum. Now refine it, just as we did before. With sixteen strips, the signed sum is thirty-six. With sixty-four, it's thirty-**three**. With two hundred and fifty-six, it's thirty-two point two five. Now use the right ends instead. The sums are twenty-eight, thirty-one, and thirty-one point seven **five**. Both sets close in on the same number, **thirty-two**. However we choose the heights, thinner strips settle on one value.

Visual: the bath shrinks to a 320 px column at the left with its level readout. On "subtract" all eight strips colour by sign (seven pale teal, the zero-height one a flat line, the eighth pale amber), with a grey row "+ above, − below" (hand tag "+ above, − below"); as each strip pulses, the bath's level steps up or down by its area. On "refine" the strips split to 16 (left endpoints; three below the axis), readout (52 px) "n = 16: signed sum = 36"; on "three" they split to 64, readout "n = 64: 33"; on "five" (spoken in the next sentence) 256 strips draw as a fine fill, readout "n = 256: 32.25". On "right ends" the strips switch to right endpoints at n = 16 and the column "right" fills in step: "28", "31", "31.75" (on "five"). Only the current row is bright. On "thirty-two" a small number line under the readouts shows the left values falling and the right values rising onto a dashed mark at 32, hand tag "both settle on 32".

### 3. the definite integral
> That settled number gets its own name, the definite integral. We write it with this long S, which stands for **sum**. The integral from a to b of f of x, d x, is the limit of the sums of f of x times delta x, as delta x goes to **zero**. A limit is the value the sums settle on, as the strips get thinner. The d x reminds us of the strip width, and a and b are the ends of the interval. The units come along too. Litres per minute, times minutes, gives **litres**. And this works for any rate. The sums estimate the total change, so their limit is the total change **itself**. For the storm in the last video, it's the rain that fell. For this bath, it's the change in the water it holds. Here, the integral from zero to eight of twelve minus two t, d t, looks like thirty-two. Let's check that with shapes.

Visual: stage change to the notation board. Right column: the i06 sum "Σ f(x)Δx (from a to b)" in grey; on "sum" `IntegralNotation` writes "∫" beside it with a tag "long S: sum". On "zero" the full definition draws (52 px): "∫ₐᵇ f(x) dx = lim (Δx → 0) Σ f(x)Δx", an arrow from the Σ form to the ∫ form labelled "Δx → 0", grey tag "f continuous on a ≤ x ≤ b". On the limit sentence the readouts 36, 33, 32.25 flash in turn beside the "lim". On the dx sentence timed labels (34 px): "dx: strip width" under dx, "a, b: the ends" at the limits, "f(x): height" over f(x). On "litres" a units row "(L/min) × (min) = L". On "itself" a grey chip "rate f ⇒ ∫ₐᵇ f(x) dx = total change from a to b"; on the storm sentence a small thumbnail of i06's rain gauge, tagged "rain that fell"; on the bath sentence the bath column pulses, tag "change in the water". On the last two sentences the row "∫₀⁸ (12 − 2t) dt ≈ 32 ?" (grey "≈" and "?").

### 4. above the axis: a triangle
> When the graph makes simple shapes, we can find the integral from their areas. From zero to six, the graph and the axis make a triangle, with base six and height **twelve**. Half of six, times twelve, is thirty-six. So the integral from zero to six is thirty-six, and the bath gains thirty-six **litres**.

Visual: stage change: the graph returns large (1100 × 620 px) beside the bath column; the strips fade. `StudioAreaFill` (signed) sweeps in from t = 0 to 6 in pale teal; the triangle outline draws with brackets "base 6" along the axis and "height 12" up the axis (on "twelve"). Right column (52 px): "∫₀⁶ (12 − 2t) dt = ½ × 6 × 12 = 36". On "litres" the bath's level rises from 40 L to 76 L, hand tag "36 in".

### 5. below the axis: always negative
> From six to eight, the graph is below the axis the whole way. Every strip is negative, so the sum and its limit are negative. The integral must be negative. This triangle has base two and depth four, so its area is **four**. So the integral from six to eight is minus four. The bath loses four **litres**.

Visual: `StudioAreaFill` sweeps in from t = 6 to 8 in pale amber; ten thin amber strips flash inside it on "Every strip is negative", then fade. Grey chip: "f(x) ≤ 0 throughout ⇒ integral negative (zero only if f(x) = 0 everywhere)". On "four" the triangle outline with brackets "base 2" and "depth 4" (the point (8, −4) glows). Right column (52 px): "∫₆⁸ (12 − 2t) dt = −(½ × 2 × 4) = −4". On "litres" the bath's level falls from 76 L to 72 L, hand tag "4 out".

### 6. across the axis: the signed total
> Over the whole eight seconds, the graph changes sign. The integral adds the signed pieces. Thirty-six, plus minus four, gives thirty-**two**. That matches the settled sums. It's the net change: the bath ends with thirty-two litres more than it started with. If it had drained more than it gained, the integral would be **negative**. Area above the axis counts as positive, and area below counts as **negative**.

Visual: both fills show together. Right column: the green answer frame "∫₀⁸ (12 − 2t) dt = 36 + (−4) = 32" on "two"; the scene 2 tag "settles on 32" pulses beside it with a tick. On "net change" the bath shows its whole trip as a small level graph beside it: 40 L up to 76 L and back to 72 L, a bracket from 40 to 72 tagged "net change 32 L", and a grey tag "for a velocity, this is the displacement (later video)". On the first "negative" a dashed ghost level on the bath ends below 40 L, tag "drains more than it gains: integral < 0". On the second "negative" the chips "+ area above" (teal) and "− area below" (amber).

### 7. a trapezium that doesn't start at zero
> The shape doesn't have to start at zero. Find the integral from one to three of two x plus one. At x equals one, the line is at height three, and at x equals three, it's at height **seven**. The region between the line and the axis, from one to three, is a **trapezium**. Its area is the average of three and seven, times the width two, which is **ten**. The graph stays above the axis, so the integral is ten.

Visual: stage change to the g01 board (the bath leaves). Task strip (44 px): "Evaluate ∫₁³ (2x + 1) dx using areas." (site lesson 2 "Problem 1", numbers unchanged). Graph (1000 × 620 px): y = 2x + 1 in violet on x from −0.3 to 3.5 (author note g); vertical lines x = 1 and x = 3 draw; on "seven" the points (1, 3) and (3, 7) glow with height brackets "3" and "7". On "trapezium" `StudioAreaFill` fills the region in teal, outline drawn, width bracket "2". Right column (52 px): "area = (3 + 7)/2 × 2 = 10"; on "ten" the green answer frame "∫₁³ (2x + 1) dx = 10".

### 8. above and below can balance
> Here's a surprise. Find the integral from minus three to three of x. From minus three to zero, the line is below the axis, making a triangle with area four and a half. From zero to three, there's a matching triangle above, also four and a **half**. So the integral is four and a half, minus four and a half, which is **zero**. There's plenty of area here, but the integral is zero, because the part above and the part below **balance**.

Visual: stage change. Task strip "Evaluate ∫₋₃³ x dx using areas." Graph y = x in violet on x from −3.5 to 3.5 (equal units, author note g; 900 × 700 px). The left triangle fills amber with brackets "3" and "3" and "area 9/2"; on "half" the right triangle fills teal, "area 9/2". Right column (52 px): green answer frame "∫₋₃³ x dx = −9/2 + 9/2 = 0" on "zero". On "balance" a balance bar under the graph tilts level, tags "9/2 above" and "9/2 below", hand tag "balance".

### 9. a curved shape below the axis
> Shapes can be curved too. Find the integral from minus two to two, of minus the square root of four minus x squared. The square root of four minus x squared is the top half of a circle, with radius **two**. The minus sign flips it below the **axis**. Half the circle's area is a half, times pi, times two squared, which is two pi. Every strip is below the axis, so the integral is minus two **pi**.

Visual: stage change (new case; equal units). Task strip "Evaluate ∫₋₂² −√(4 − x²) dx using areas." Graph: y = √(4 − x²) draws as a violet semicircle above the axis, tag "x² + y² = 4, top half"; on "two" a radius line from the origin to (2, 0) with "r = 2". On "axis" the curve folds below the axis (y-scale 1 → −1, the brief 133 fold, labels hidden during the fold), tag "y = −√(4 − x²)". Right column (52 px): "area = ½ × π × 2² = 2π"; on "pi" the region fills amber and the green answer frame "∫₋₂² −√(4 − x²) dx = −2π" with grey "≈ −6.28".

### 10. memory aid
> Here's the rule to remember. Above adds, below subtracts. Every strip keeps its sign, and the definite integral is what the signed sums settle **on**. One condition: every integral here runs from the smaller number, a, up to the bigger one, **b**. A later video shows what happens when they swap.

Visual: stage change to the framed memory-aid card (`MemoryAidCard`, 1300 × 640 px, double ink frame, hand-font heading "Memory aid"). The main line writes large in the hand font, 60 px: "Above adds, below subtracts." Two keys with small pictures at the left: a teal strip with the bath's level stepping up ("teal strip: water in") and an amber strip with the level stepping down ("amber strip: water out"). Under them, 40 px: "∫ₐᵇ f(x) dx = lim (Δx → 0) Σ f(x)Δx." A bath badge: "the bath: 36 in, 4 out, net 32 L". On "on" the sums 36, 33 and 32.25 slide onto 32 in a small strip. On "b" a grey tag "a < b" beside the limits, and a small grey chip "swapped limits: later". Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Use areas to evaluate the integral from zero to three of x minus five, d x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Use areas to evaluate ∫₀³ (x − 5) dx." The full question stays on screen. Picture slot: empty axes (x 0 to 3.5, y −6 to 1) with the hand tag "sketch first"; no line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> Sketch it first. At zero the line is at minus five, and at three it's at minus two, so it's below the axis the whole **way**. The shape is a trapezium, with parallel sides five and two, and width three. Its area is three, times seven over two, which is twenty-one over **two**. It's below the axis, so the integral is minus twenty-one over two. Twenty-one over two is wrong. It loses the **sign**.

Visual: the card shrinks to the top (30 px). `GivensStrip` on the answer side: "f(x) = x − 5" (violet), "from 0 to 3". A sketch of y = x − 5 on [0, 3] (points (0, −5) and (3, −2) labelled; "0" and "3" underlined in the card) with the region in amber (on "way"). Trapezium outline with brackets "5", "2", "3". Rows (52 px): "area = 3 × (5 + 2)/2 = 21/2" (on "two"); green answer frame "∫₀³ (x − 5) dx = −21/2". On "sign" a red slip "21/2" writes and is crossed (red caption "below the axis: negative", hand tag "loses the sign"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Use areas to evaluate the integral from zero to six of x minus two, d x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Use areas to evaluate ∫₀⁶ (x − 2) dx." The full question stays on screen. Picture slot: empty axes (x 0 to 6.5, y −3 to 5) with the hand tag "sketch first"; no line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> The line crosses the axis at x equals **two**. From zero to two, there's a triangle below, with area two. From two to six, there's a triangle above, with base four and height four, so its area is **eight**. The integral is eight minus two, which is **six**. Ten is wrong. It adds both areas, and forgets that the piece below **subtracts**.

Visual: the card shrinks to the top. `GivensStrip`: "f(x) = x − 2" (violet), "from 0 to 6". A sketch of y = x − 2 on [0, 6] with the crossing (2, 0) ringed (on "two"; "0" and "6" underlined in the card). The left triangle fills amber with "area 2"; the right fills teal with brackets "4", "4" and "area 8" (on "eight"). Row (52 px): green answer frame "∫₀⁶ (x − 2) dx = 8 − 2 = 6" (on "six"). On "subtracts" a red slip "10" writes and is crossed (red caption "8 + 2: the piece below must subtract"). Hold about 1 s.

### 15. handoff
> So a definite integral is a signed sum, settled. Strips below the axis count against it. Now a new question. Here's the graph of three minus t, shaded from zero up to a point x. The integral from zero to x gives the shaded signed area, and it changes as x moves. How fast does it **grow**?

Visual: the memory-aid line shows small at the top, then fades on "Now". Board clears to one graph (author note g): y = 3 − t in blue on 0 ≤ t ≤ 6 with filled endpoint markers, axis label "t", ticks 1 to 6, −3 and 3. A marker "x" on the t-axis starts at 0; on "shaded" it slides to x = 2 while `AreaFill` (signed) follows it in teal, the boundary line at x moving with it. Right column: "A(x) = ∫₀ˣ (3 − t) dt" with a "?" chip. On "grow" the marker pulses. Chip "Next: let the end move". No value, formula or derivative. Hold about 2 seconds. This is i08's opening frame (marker at x = 2); scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A strip below the axis is a negative change.
- Signed sum: strips above add, strips below subtract.
- ∫ₐᵇ f(x) dx = lim (Δx → 0) Σ f(x)Δx, for f continuous.
- f(x) ≤ 0 on a ≤ x ≤ b: the integral is negative.
- Shapes: area above counts +, area below counts −.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Above adds, below subtracts.* Badge: *the bath: 36 in, 4 out, net 32 L.* Grey tag beside the third bullet: *for a velocity, the integral is the displacement.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back to scene 15's frame exactly (y = 3 − t on 0 ≤ t ≤ 6, shaded from 0 to the marker at x = 2, "A(x) = ∫₀ˣ (3 − t) dt" with "?", chip "Next: let the end move"). This is the final frame and i08's opening frame.

## Teaching checks

- **Does it explain causes?** Why a strip below subtracts: a negative velocity times a time is a backwards movement (1, the position strip). Why the sum must keep signs: each strip is a change, and changes add with their signs (2). Why the integral is a limit, and one number: the signed sums settle as the strips thin, from left and right heights alike (2, 3). Why the integral is a total change: each sum estimates it, so the settled value is it (3, units). Why f ≤ 0 gives a negative integral: every term in every sum is negative (5). Why geometry works: the integral is the settled signed sum, and the strips fill the shape (4 to 9). Why the whole-trip value is 32: forwards 36 and back 4 (6). Why ∫₋₃³ x dx is 0: equal areas above and below cancel (8).
- **Misconceptions addressed:** "integrals are always positive because area is" (1, 5; feedback 1 crossed); "add the areas" (6, 8; feedback 2 crossed); "zero means no area" (8); "left and right sums give different limits" (2); "∫ only means primitive" (3); "the region must start at the origin" (7); "only straight-line graphs can be done by geometry" (9).
- **One idea at a time:** one strip in 1; signs, then left refinement, then right refinement in 2; notation part by part, then units, then meaning in 3; one shape per scene in 4, 5, 7 and 9; one combination in 6 and 8.
- **Video makes it easier:** the student sees the dot move back as the negative strip pulses (1), the signed sums settle on 32 (2), left and right marks close in on one point (2), the Σ form turn into the ∫ form (3), the fills and the position strip agree (4 to 6), the balance bar level out (8), and the semicircle fold below the axis (9).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (integrand and limits), 10 seconds each with the invitation to pause, nothing answer-bearing (no graph on either card). One crossed mistake each; feedback about 30 s and 25 s (scenes 12 and 14), inside the 15 to 30 s band.
- **Avoided double teaching:** strips, Σ, Δx and continuity (i06) are recalled in grey tags; the circle equation (Year 11) in one tag; shape areas in one row each.
- **Syllabus coverage:** `ci04161a44` (2, 3, 5; key notes 2 and 3); `ci723d0f0b` (4 to 9: f ≥ 0 in 4 and 7, f ≤ 0 in 5 and 9, sign changes in 6 and 8; A1 for f ≤ 0, A2 for a sign change; key note 4).
- **Out of scope by design:** total area and distance (i10); reversed limits and splitting (i09); the accumulation function and the FTC (i08); evaluation by primitives (i08, i09).
- **Revision 3 (the bath).** Why a strip below the axis is a negative change: the net flow is negative, so the bath loses water in that minute (1). Why the integral is the net change, not the total shaded area: 36 L in and 4 L out leave 32 L more in the bath (4 to 6; the level graph). Why the integral can be negative: if the drain wins overall, the bath ends lower (6). The bath's level, the stream and the swirl are the evidence for each sentence; judge them at playback speed.

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 2 marks suggested, not an official marking scheme).** "Use areas to evaluate ∫₀³ (x − 5) dx."
Model answer: y = x − 5 runs from −5 at x = 0 to −2 at x = 3, so it is below the axis throughout. The region is a trapezium with parallel sides 5 and 2 and width 3: area 3 × (5 + 2)/2 = 21/2. So ∫₀³ (x − 5) dx = −21/2. Classic mistake (crossed): "21/2" (sign lost).

**Attempt 2 (scene 13; original, HSC style, 2 marks suggested).** "Use areas to evaluate ∫₀⁶ (x − 2) dx."
Model answer: y = x − 2 crosses the axis at x = 2. On 0 ≤ x ≤ 2 a triangle below the axis has area ½ × 2 × 2 = 2; on 2 ≤ x ≤ 6 a triangle above has area ½ × 4 × 4 = 8. So ∫₀⁶ (x − 2) dx = 8 − 2 = 6. Classic mistake (crossed): "10" (both areas added).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Velocity | v = 12 − 2t m/s, 0 ≤ t ≤ 8; v(6) = 0; v(7) = −2; v(8) = −4 | 1 to 6 |
| Negative strip (estimate) | (−2 m/s) × (1 s) = −2 m; exact ∫₇⁸ (12 − 2t) dt = −3 m | 1 |
| Signed left sums | n = 16: 36; n = 64: 33; n = 256: 32.25; settles on 32 | 2, 3 |
| Signed right sums | n = 16: 28; n = 64: 31; n = 256: 31.75; settles on 32 | 2 |
| Units | (m/s) × (s) = m | 3 |
| Above | ∫₀⁶ (12 − 2t) dt = ½ × 6 × 12 = 36 | 4 |
| Below | ∫₆⁸ (12 − 2t) dt = −½ × 2 × 4 = −4 | 5 |
| Across | ∫₀⁸ (12 − 2t) dt = 36 + (−4) = 32 (displacement, site) | 6 |
| Trapezium (site lesson 2 Problem 1) | ∫₁³ (2x + 1) dx = (3 + 7)/2 × 2 = 10 | 7 |
| Balance | ∫₋₃³ x dx = −9/2 + 9/2 = 0 | 8 |
| Semicircle | ∫₋₂² −√(4 − x²) dx = −½π(2)² = −2π ≈ −6.28 | 9 |
| A1 | ∫₀³ (x − 5) dx = −21/2; crossed 21/2 | 11, 12 |
| A2 | ∫₀⁶ (x − 2) dx = 8 − 2 = 6; crossed 10 | 13, 14 |
| Handoff | y = 3 − t, 0 ≤ t ≤ 6; marker x slides 0 → 2; no value shown | 15 |

Revision 3 anchor values (added 7 Nov; computed with Python and SymPy; the net-flow numbers are Revision 2's):

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Flows | tap 16 − 2t L/min (off at t = 8); drain 4 L/min; net flow 12 − 2t L/min, 0 ≤ t ≤ 8 | 1 to 6 |
| Water | V(t) = 40 + 12t − t² litres: 40, 51, 60, 67, 72, 75, 76, 75, 72 at t = 0 to 8 | 1 to 6 |
| Pieces | ∫₀⁶ (12 − 2t) dt = 36 (gained); ∫₆⁸ (12 − 2t) dt = −4 (lost); ∫₀⁸ = 32 (net change) | 4 to 6 |
| Tap and drain totals | ∫₀⁸ (16 − 2t) dt = 64 L in; 4 × 8 = 32 L out; 64 − 32 = 32 | 1 (readouts only) |
| Last strip | estimate (−2)(1) = −2 L; exact ∫₇⁸ (12 − 2t) dt = −3 L | 1 |
| Signed sums | left n = 8, 16, 64, 256: 40, 36, 33, 32.25; right: 24, 28, 31, 31.75 | 2 |
| Bath scale | 0 to 160 L (ticks every 20 L) | 1 to 6 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and Python (2 Nov, isolated run, `nums_i06i08.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- Left sums of 12 − 2t on [0, 8]: L_16 = 36, L_64 = 33, L_256 = 32.25 (L_n = 32 + 64/n); L_8 = 40 (not shown). Right sums: R_16 = 28, R_64 = 31, R_256 = 31.75 (R_n = 32 − 64/n).
- ∫₁³ (2x + 1) dx = 10 (heights 3 and 7, width 2). ∫₋₃³ x dx = 0 (triangles 9/2 each).
- ∫₀⁶ (12 − 2t) dt = 36; ∫₆⁸ (12 − 2t) dt = −4; ∫₀⁸ (12 − 2t) dt = 32.
- ∫₋₂² −√(4 − x²) dx = −2π ≈ −6.2832.
- ∫₀³ (x − 5) dx = −21/2; x − 5 ≤ 0 on [0, 3].
- ∫₀⁶ (x − 2) dx = 6; ∫₀² (x − 2) dx = −2; ∫₂⁶ (x − 2) dx = 8.
- Number of strips below the axis at n = 16 with left endpoints: t = 6.5, 7, 7.5 (three); at n = 8: one (t = 7); the t = 6 strip has height 0.
- Revision 3 bath: (16 − 2t) − 4 = 12 − 2t; V(t) = 40 + 12t − t² has V′ = 12 − 2t, V(6) = 76, V(8) = 72; ∫₀⁸ (16 − 2t) dt = 64; drain 32; ∫₇⁸ (12 − 2t) dt = −3.

## Memory aid check

- **"Above adds, below subtracts."** Meaning, as said in scene 10: every strip keeps its sign, so parts of the graph above the axis add to the integral and parts below subtract; the integral is what the signed sums settle on. Assumptions checked: the interval runs from a to b with a < b (author note c; scene 10 says this aloud, because the rule reverses when the limits swap, i09); f is continuous (i06, grey tag); "adds" and "subtracts" refer to the definite integral, not to total area, where both count positive (i10). It helps a new case: given any sign-changing graph made of shapes, the student signs each piece and adds. Introduced after the cause (1, 2) and the uses (4 to 9).
- **Considered, not used:** "area is always positive" (true for total area, but it is the misconception this video corrects for integrals).
- **Revision 3, the bath badge.** "36 in, 4 out, net 32 L" is the aid on the bath: the teal area is water gained, the amber area water lost, and the integral is their signed total. It holds for a < b (the narration's condition).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,775 characters**, 16 scene headings (Revision 2 recount: 5,709 in 16; it stated 5,711). Characters per scene (1 to 16): 686, 529, 791, 297, 297, 399, 398, 424, 386, 288, 108, 385, 104, 323, 285, 75.

At 13.3 characters per second the speech before the notes is about 429 s. Holds: two 10 s countdowns (20 s), the memory-aid reading hold (2 s), two feedback holds (2 s), the handoff hold (2 s), the 3 s prediction ring in scene 1, and about 15 s of settling for the bath's clock run, the strip splits, the area sweeps, the balance bar and the fold; the key-notes scene is 45 s (1,350 frames, root decision 13 of the redesign set). Total **about 518 s (8 min 38 s)**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 52 s spare.

Approximate seconds per scene: 1 58; 2 43; 3 59; 4 24; 5 24; 6 32; 7 30; 8 33; 9 31; 10 24; 11 18; 12 30; 13 18; 14 25; 15 23; 16 45.

Reserve trims if the voiced take runs long: scene 3's storm and bath sentences (keep the thumbnails silent); scene 2's last sentence (keep the number line). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12i07` (draft route math-a12-i07). Explainer folder `src/explainer/lessons/math-a12-i07`; build inputs in `docs/production/claude-pm/lessons/math-a12-i07/` (to be created at voicing). Everything reusable is built as a studio-kit part (see "Studio kit use and additions").

In order (kebab-case; 16 scene headings, all `### N.`): hook-bath, signed-refine, definite-integral, triangle-above, triangle-below, signed-total, trapezium, balance, semicircle, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate above):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 58 s | 1 | i06's frame, then the bath filling and draining beside the net-flow graph |
| 58 to 100 s | 2 | Signed strips refining onto 32 |
| 100 to 160 s | 3 | The definite integral's notation |
| 160 to 240 s | 4 to 6 | Triangles above and below with the bath's level, then the signed total |
| 240 to 270 s | 7 | g01 board: a trapezium |
| 270 to 303 s | 8 | Above and below balance |
| 303 to 334 s | 9 | The semicircle fold |
| 334 to 358 s | 10 | Framed memory card |
| 358 to 449 s | 11 to 14 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 449 to 473 s | 15 | The accumulation handoff (i08's first frame) |
| 473 to 518 s | 16 | Key notes with the framed card, then a silent return to scene 15's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies five bullets and the card). Memory-aid ends on a 2 s reading hold. Transitions (`pickTransition`): i06's last frame continues into scene 1 (camera continue, the bath grows); 1 to 2 camera continue; 2 to 3 clear change (notation board); 3 to 4 clear change back to the graph and bath; 4 to 5 to 6 camera continue; 6 to 7 clear change (the bath leaves); 7 to 8 and 8 to 9 clear changes; 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and at the end of the notes a silent cross-fade back to scene 15's frame (the final frame, unchanged).

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is the quiet notes scene, 45 s in all (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12i07-rev3-learning-review.md`, `science_check` = `checks/m-a12i07-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): no bath, tub or basin exists in any course (`biology/y11-willow-tub-before-v1.png` and `-after-v1.png` are a plant tub; `biology/m6-water-bath-tube-v1.png`, `chemistry/m7-oxidation-water-bath-*` and `chemistry/m8-aspirin-water-bath-v1.png` are laboratory water baths; `biology/m7-village-water-tank-v1.png` is a village water tank). So one bath plate is commissioned; i06's scene 14 shows it small as the teaser.

Reused: none.

Need (painted, new; see the Codex asset brief): `ma12-bathtub-v1.png`.

Coded (studio kit): the bath's water and litre scale, the tap stream and drain swirl, readout boards, the net-flow graph, signed strips, the number line, the notation and its labels, signed area fills and outlines, brackets, the balance bar, the fold, working boards, answer frames, mistake slips, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `MATH_UP_SOFT`, `MATH_DOWN_SOFT`, `HandTag`, `MarkSpan`, `PlateImg`, `SvgPlate`, `LiveReadoutBoard`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`, `QuestionAxes`, `FunctionSimulator` (fold through flat with hidden annotations), `ContainerFill`; from i01's and i06's additions, `IntegralNotation`, `StudioRiemannStrips` (signed mode) and `StudioAreaFill` (signed).

Additions the build needs:
1. **`BathFlow`** (lesson-local, on `ContainerFill` and `FunctionSimulator`): the bath plate, a coded water level V(t) = 40 + 12t − t² on a litre scale (interior from the plate's report, straight sides assumed), a coded stream whose width follows 16 − 2t, a coded drain swirl, and the readouts "tap in", "drain out", "net flow" and "water in the bath", all from one clock; an optional strip mode where the level steps by each signed strip's area. Check: at every frame the level equals V(t) on the scale within 1 px, and net flow = tap in − drain out.
2. **Balance bar** (small kit part): a level bar that tilts by the difference of two areas and levels when they are equal (scene 8).

## Codex asset brief (Maths A12 I07, a bath)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-i07.md`, draft route entry math-a12-i07. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. The plate is also shown small in i06's scene 14. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, towels, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-bathtub-v1.png` (2400 × 1200 px): one white freestanding bath with straight, upright inner walls, seen exactly side-on and empty, with its near side drawn as a clean cut-away section so the inside of the bath shows (the build draws the water inside it); a chrome mixer tap and spout standing at the left end with the spout's mouth above the rim, pointing down into the bath; a plug hole at the bottom near the right end with its plug lying beside it on a short chain (so the plug is out). **Paint the inside to this guide:** the inner floor flat at y = 900 px and the inner rim at y = 420 px (480 px of inner depth); the inner walls vertical at x = 420 and x = 2000 px (1580 px long). Codex reports, in file pixels, the inner floor, the inner rim, both inner walls, the centre of the spout's mouth and the centre of the plug hole.

Report inspection on the paper background (`#f6f1e7`) at 420 px and 760 px wide, with a test coded water fill to a quarter depth, plus the alpha check and the guide measurements (each within 4 px). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-i07-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm that the n = 8 signed sum (40) and the total distance (40 m) appear nowhere in narration, screen text or readouts.
3. Confirm the definition matches the syllabus form (∫_a^b f(x) dx = lim_{Δx→0} Σ_{a,b} f(x)Δx) and that every learner-visible plain meaning (∫ as a long S, dx as strip width, a and b as the ends, limit as the settled value) is not wrong.
4. Confirm "negative when f(x) ≤ 0 throughout" is kept in the syllabus's wording, and author note b's caveat stays out of learner copy.
5. Confirm each geometric evaluation (triangles, the lesson 2 trapezium, the balancing triangles, semicircle, A1 trapezium, A2 triangles), including equal units in scenes 8 and 9 and the fold direction; confirm the right-endpoint sums and that left and right settle on 32.
6. Confirm displacement is named once with a plain meaning and distance or total area is not taught.
7. Confirm the syllabus quotes match the crosswalk JSON text exactly (linear form) and no site module label appears in learner copy or metadata.
8. Confirm both attempt questions carry every demand, are original, and that neither card or its visuals shows a graph, crossing point, shape or sign.
9. Confirm the opening frame matches i06 scene 14 and the final frame matches scene 15 here (marker at x = 2).
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count by script with the build parser rules.

Revision 3 additions to the error check:
12. Confirm the bath model and its statements: tap 16 − 2t, drain 4, net 12 − 2t L/min; water 40 + 12t − t² litres (76 L at t = 6, 72 L at t = 8); 36 L gained, 4 L lost, net 32 L; the last strip's estimate −2 L against the exact −3 L; no leftover "car", "metres", "forwards" or "backs up" in the narration, screen text, memory card or key notes (the grey velocity tag is intended).
13. Confirm the opening equals i06 Revision 3's final frame, and scene 15 (text and visual) and the notes' closing frame are word for word Revision 2's, so i08's opening is unchanged.
14. Confirm every bold cue is quoted in its scene's Visual in spoken order (Revision 2's scene 10 did not quote "on"; fixed), and the counts by script.

## YouTube metadata (draft)

Title: The Definite Integral as a Signed Sum: Areas Above and Below the Axis | Year 12 Maths Advanced

(Title length: 95 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html

A bath fills with the plug out; once the tap is turned down far enough, the net flow goes negative and a thin strip hangs below the axis. That strip is water lost, so the sum must keep its sign. Refine the signed sums and they settle on one number: the definite integral, ∫ from a to b of f(x) dx, defined as the limit of the sums as Δx goes to 0. Then evaluate integrals exactly from areas when the graph makes simple shapes: a triangle above the axis, a triangle below it, a graph that changes sign, a trapezium, a case where above and below cancel to zero, and a semicircle below the axis. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Consider the definite integral as ∫_{a}^{b} f(x) dx = lim_{Δx→0} ∑_{a,b} f(x)Δx, noting that this implies that the result of a definite integral will be negative when f(x) ≤ 0 throughout the interval a ≤ x ≤ b"
"Evaluate the definite integral ∫_{a}^{b} f(x) dx by calculating areas using geometrical formulas, where the shape of f(x) allows such calculations, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: Rectangles and trapezia (previous video). Next: Why differentiating accumulation recovers the rate.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Route entry (root).** The draft entry in "Decisions" is ready to adopt.
- **2. Source page link (root).** The outline names integral lesson 2; the numbers used come from lesson 7 ("Problem 3"). The description links lesson 7. Root to confirm.
- **3. Displacement word (learning review).** Velocity and displacement are given plain meanings here, before the motion applications. Confirm that a student starting Year 12 follows "how far it ends up from where it started" without the formal motion topic. Fallback: describe it only as "the change in the car's position".
- **4. Semicircle (learning review).** Scene 9 relies on recognising y = √(4 − x²) as the top half of a circle (Year 11 circles). Confirm this recall is safe in one sentence; fallback with the same structure: a rectangle-and-triangle shape below the axis, such as ∫₀⁴ −(x + 1) dx by a trapezium (less varied, so the circle is preferred).
- **5. i08's references (root, Revision 3).** i08 scene 9 says "And the car's thirty-two comes from twelve t minus t squared." With i07 now a bath, it should read "And the bath's thirty-two ..." when i08 is next edited (i08 is unchanged here, as instructed). i08's opening frame needs no change: i07's final frame is word for word Revision 2's.
- **6. Velocity (root).** The site's velocity meaning of 12 − 2t moves to the motion videos; the video keeps one grey tag ("for a velocity, this is the displacement"). Confirm, or drop the tag.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i06; check that the negative strip is understood as a backwards movement before the sign rule; that the refined sums avoid the coincidental 40; that each notation label has a plain meaning; that scene 5's reasoning, every strip negative so the limit is negative, is clear; that scene 3's rate meaning and units do not crowd the notation (it is the longest scene); that scene 8's zero is read as cancelling, not as "no area"; that the semicircle fold is one transformation; that the attempt cards give nothing away), then the Codex maths check and error check.
- The position strip, the sign colouring, the splits and the fold carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is i06's scene 14 exactly. If i06's handoff changes in review, change scene 1's first visual to match.
- Revision 3 (7 Nov) has had no independent review. Next: student learning review (check that the bath makes "below the axis = water lost" immediate; that the level graph separates the net change, 32 L, from the 40 L of shaded strips; that the question-card pictures give nothing away), then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

## Revision 2 (4 November 2026, brief 161 repairs)

Blocker: scene 1's last rectangle is an estimate of about 2 m back (exactly 3 m); the row, dot tag and numbers table say so. The grey rule and key note 3 add "zero only if f(x) = 0 everywhere"; scene 5's strip sentence shortened. Narration now 5,709 characters (counted by the build parser rules). No em dashes.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, the draft route boundaries, the learner question's maths, every number (site lesson 7 Problem 3 and lesson 2 Problem 1 unchanged), both attempts, the cause chain, the memory aid and the i08 handoff (scene 15, word for word) are unchanged.

- **Anchor and why:** a bath filling with the plug out: the tap is turned down while the drain takes 4 L per minute, so the net flow 12 − 2t goes negative after six minutes. A strip below the axis is water lost; the bath gains 36 L, loses 4 L and ends 32 L up, which is the definite integral. It replaces the car (cars are used three times already) and makes the sign a matter of in and out.
- **Simulations:** `BathFlow` (the level, stream and drain swirl from one clock, stepping by each signed strip); signed `StudioRiemannStrips` refining onto 32; signed `StudioAreaFill` with the balance bar and the semicircle fold.
- **Colour roles:** the net flow violet; area above pale teal (gained) and below pale amber (lost); the water and outlines ink; answer green; mistake red.
- **Plates:** new `ma12-bathtub-v1.png` (brief above; also shown small in i06's scene 14).
- **Narration changes (not voiced):** scene 1 rewritten around the bath; scenes 3 to 6 change the car's metres to the bath's litres. All other scenes keep their Revision 2 text; scene 15 is unchanged word for word.
- **Counts:** 5,709 (recount; 5,711 stated) → 5,775 characters; about 531 s (with the old 60 s notes hold) → about 518 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on i06 Revision 3's final frame (the bath's net flow); ends, unchanged, on i08's opening frame. i08's scene 9 "car" line needs one word changed later (open decision 5).
- **Kit additions:** the lesson-local `BathFlow` and a small balance bar; it reuses i06's `StudioRiemannStrips` and `StudioAreaFill` in signed mode.
