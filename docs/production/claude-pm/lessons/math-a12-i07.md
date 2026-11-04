# Maths A12 I07: How does a signed sum become a definite integral? Strips below the axis, the limit of the sums, the ∫ notation and evaluating by geometry above, below and across the axis (design)

Status: Revision 2 (4 Nov 2026), brief 161 repairs applied; needs the Codex error check. Previously Revision 1 (2 Nov 2026), overnight queue wave A1. Needs root decisions, the student learning review and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions, plus the new area parts specified in `math-a12-i06.md` ("Codex asset brief": `AreaFill` with signed colours, `RiemannStrips` with `signed`, `RefinementTable`). Nothing recorded; human listening pending.

Narration 5,711 characters, 16 scenes, about 531 s (8.9 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the definite-integral group in the Year 12 Mathematics Advanced integral calculus strand (outline playlist order 30), after i06 (rectangles and trapezia) and before i08 (the accumulation function and the Fundamental Theorem). Templates: `math-a12-i05.md` (Revision 2) and `math-a12-d10.md` (Revision 2), and the i06 design (Revision 1, written just before this one, whose scene 14 is this video's first frame): same structure, voice, paper style and kit parts. All maths visuals are coded; no painted plates (programme decision 5). No pre-design pack exists, so the pack work is done here. Site lessons read (2 Nov, read-only): integral-calculus lesson 7 (the definite integral), `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html`, SHA256 `b41c698b744a5ebc753ba24dac3a212c0c0e94dd795d24305072a9c40736d944`, worked example "Problem 3" (v(t) = 12 − 2t m/s for 0 ≤ t ≤ 8; v = 0 at t = 6; displacement 32 m) and its Riemann-sum stepper, numbers reused unchanged; integral-calculus lesson 2 (the outline's named source; its signed-area card supports scenes 2 and 6; its Problem 1, ∫₁³ (2x + 1) dx = 10, is reused unchanged as a geometry example in scene 7), SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`. The FTC evaluations on both pages are not used (i08, i09). No route entry exists yet; the draft entry is in "Decisions". Root decisions applied: exact values in algebra, decimals only in grey readouts (−2π with grey ≈ −6.28); attempt cards never give away answers or signs; final frame is the handoff frame (root decision 20).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; maths visuals coded, never painted; no people, hands or figures (the car is never drawn, only its velocity graph and a small coded position strip); one reasoning stage at a time with only the needed earlier results kept; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Earlier videos recalled in a sentence, not re-taught: i06 (strip = rate × width, Σ f(x)Δx estimates total change, refining n, continuity), Year 11 (equation of a circle, area of a triangle, trapezium and circle).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Integral calculus, group "The definite integral"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ci04161a44`: "Consider the definite integral as ∫_{a}^{b} f(x) dx = lim_{Δx→0} ∑_{a,b} f(x)Δx, noting that this implies that the result of a definite integral will be negative when f(x) ≤ 0 throughout the interval a ≤ x ≤ b"
- `ci723d0f0b`: "Evaluate the definite integral ∫_{a}^{b} f(x) dx by calculating areas using geometrical formulas, where the shape of f(x) allows such calculations, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i06's last frame (v = 12 − 2t on 0 ≤ t ≤ 8 with eight left-endpoint rectangles of width 1, the eighth below the axis ringed with "?", chip "Next: a rate below zero"); explains a strip below the axis as a negative change (reversing: −2 m/s × 1 s = −2 m); keeps every strip's sign in the sum; refines the signed sums (n = 16, 64, 256: 36, 33, 32.25) to the settled value 32; names it the definite integral, ∫_a^b f(x) dx = lim_{Δx→0} Σ f(x)Δx, with the notation's parts given plain meanings, and draws the consequence that f ≤ 0 throughout gives a negative integral (`ci04161a44`); right-endpoint sums settle on the same 32 (28, 31, 31.75); gives the limit its general rate meaning (the exact total change; units m/s × s = m); evaluates by geometry in all three cases on the site's velocity (∫₀⁶ = 36, ∫₆⁸ = −4, ∫₀⁸ = 32, the displacement), on the site's trapezium (∫₁³ (2x + 1) dx = 10), on a balancing case (∫₋₃³ x dx = 0) and on a curved shape below the axis (∫₋₂² −√(4 − x²) dx = −2π) (`ci723d0f0b`). Stops at evaluating by geometry. Not taught: total area or total distance (`ciea1a6452`, `cib0134047`, `ci09a73813`, `cicfcd020a`: i10; the site's distance 40 m is deliberately not shown); reversed limits and splitting (`ci585dfd5a`, `ci1bdb853f`: i09); the accumulation function and the FTC (i08: the handoff only asks a question); evaluation by primitives (i08, i09).

## Decisions

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
- **No human figures, no painted plates.**
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

Main question: *Strips below the axis come from a negative rate. What does the sum do with them, what number do the sums settle on, and how can shapes give that number exactly?*
Entry knowledge (i06: strip = rate × width, Σ f(x)Δx, refinement, continuity; Year 11 circle; Stage 4 areas): estimates of total change from strips.
Stops after: signed strips; the definite integral as the limit of signed sums; negative when f ≤ 0 throughout; evaluation by geometry above, below and across the axis, including a balancing case and a semicircle. No total area, reversed limits, accumulation function or FTC.
Handoff: math-a12-i08: A(x) = ∫₀ˣ (3 − t) dt, shaded from 0 to a moving x (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: the graph blue; positive strips and areas pale teal (`AREA_POS`); negative strips and areas pale red-orange (`AREA_NEG`); readout terms colour-matched; geometry outlines and dimension brackets ink; the current line bright, earlier lines dim.

### 1. hook (a strip below the axis)
> Here's a car's velocity, twelve minus two t metres per second, over eight seconds, with thin rectangles one second wide. Velocity is speed with a direction. Positive means moving forwards, and negative means **reversing**. After six seconds, the velocity is negative, so the car is backing up. Think for a moment. What could a strip below the axis **mean**? Look at the last rectangle. Its height is minus two, and its width is one second. Minus two metres per second, times one second, is minus two **metres**. So the car moved back roughly two metres. So a strip below the axis is a negative change.

Visual: opens on i06's last frame exactly (y = 12 − 2t on 0 ≤ t ≤ 8, axis labels "velocity (m/s)" and "time t (s)", eight light-teal left-endpoint rectangles of width 1, the eighth below the axis ringed with "?", chip "Next: a rate below zero"). The chip fades; heading writes on: "How does a signed sum become a definite integral?". A small position strip draws under the graph: a horizontal track with metre ticks and a dot. On "reversing" the graph above the axis tints with a faint teal wash, tag "forwards", and below with a faint red-orange wash, tag "reversing". On the third sentence the point (6, 0) glows, tag "v = 0 at t = 6". On "mean" a small "think" chip with a 3 s ring (no answer shown; prediction hold). On "Look at the last rectangle" the eighth rectangle brightens and its "?" ring fades; brackets: "height −2 m/s", "width 1 s". On "metres" the row "(−2 m/s) × (1 s) = −2 m (estimate)" writes in the right column and the rectangle fills red-orange; the dot on the position strip slides back 2 m, tag "≈ −2 m". Tag on the rectangle: "negative change". (Revision 2: the velocity keeps falling during that second, so the true change is −3 m; the rectangle is an estimate, and the dot and row say so.)

### 2. keep the signs, then refine
> So keep every strip's sign. Strips above the axis add, and strips below the axis **subtract**. That makes it a signed sum. Now refine it, just as we did before. With sixteen strips, the signed sum is thirty-six. With sixty-four, it's thirty-**three**. With two hundred and fifty-six, it's thirty-two point two five. Now use the right ends instead. The sums are twenty-eight, thirty-one, and thirty-one point seven **five**. Both sets close in on the same number, **thirty-two**. However we choose the heights, thinner strips settle on one value.

Visual: on "subtract" all eight strips colour by sign (seven pale teal, the zero-height one a flat line, the eighth red-orange), with a grey row "+ above, − below". On "refine" the strips split to 16 (left endpoints; three below the axis), grey readout "n = 16: signed sum = 36"; on "three" they split to 64, readout "n = 64: 33"; on "five" (spoken in the next sentence) 256 strips draw as a fine fill, readout "n = 256: 32.25". On "right ends" the strips switch to right endpoints at n = 16 and the column "right" fills in step: "28", "31", "31.75" (on "five"). Only the current row is bright. On "thirty-two" a small number line under the readouts shows the left values falling and the right values rising onto a dashed mark at 32, tag "both settle on 32".

### 3. the definite integral
> That settled number gets its own name, the definite integral. We write it with this long S, which stands for **sum**. The integral from a to b of f of x, d x, is the limit of the sums of f of x times delta x, as delta x goes to **zero**. A limit is the value the sums settle on, as the strips get thinner. The d x reminds us of the strip width, and a and b are the ends of the interval. The units come along too. Metres per second, times seconds, gives **metres**. And this works for any rate. The sums estimate the total change, so their limit is the total change **itself**. For the tank in the last video, it's the water that flowed in. For this car, it's the change in its position. Here, the integral from zero to eight of twelve minus two t, d t, looks like thirty-two. Let's check that with shapes.

Visual: right column: the i06 sum "Σ_{a,b} f(x)Δx" in grey; on "sum" the `IntegralNotation` writes "∫" beside it with a tag "long S: sum". On "zero" the full definition draws: "∫_a^b f(x) dx = lim_{Δx→0} Σ_{a,b} f(x)Δx", an arrow from the Σ form to the ∫ form labelled "Δx → 0", grey tag "f continuous on a ≤ x ≤ b". On the limit sentence the readouts 36, 33, 32.25 flash in turn beside the "lim". On the dx sentence timed labels: "dx: strip width" under dx, "a, b: the ends" at the limits, "f(x): height" over f(x). On "metres" a units row "(m/s) × (s) = m". On "itself" a grey chip "rate f ⇒ ∫_a^b f(x) dx = total change from a to b"; on the tank sentence a tiny grey thumbnail of i06's cos x region (coded, redrawn) tagged "water in"; on the car sentence the position strip pulses, tag "change in position". On the last two sentences the row "∫₀⁸ (12 − 2t) dt ≈ 32 ?" (grey "≈" and "?").

### 4. above the axis: a triangle
> When the graph makes simple shapes, we can find the integral from their areas. From zero to six, the graph and the axis make a triangle, with base six and height **twelve**. Half of six, times twelve, is thirty-six. So the integral from zero to six is thirty-six, and the car moves thirty-six metres **forwards**.

Visual: the strips fade. `AreaFill` (signed) sweeps in from t = 0 to 6 in pale teal; the triangle outline draws with brackets "base 6" along the axis and "height 12" up the v-axis (on "twelve"). Right column: "∫₀⁶ (12 − 2t) dt = ½ × 6 × 12 = 36". On "forwards" the position-strip dot moves forwards 36 m (scaled), tag "+36 m".

### 5. below the axis: always negative
> From six to eight, the graph is below the axis the whole way. Every strip is negative, so the sum and its limit are negative. The integral must be negative. This triangle has base two and depth four, so its area is **four**. So the integral from six to eight is minus four. The car backs up four **metres**.

Visual: `AreaFill` sweeps in from t = 6 to 8 in red-orange; ten thin red-orange strips flash inside it on "Every strip is negative", then fade. Grey chip: "f(x) ≤ 0 throughout ⇒ integral negative (zero only if f(x) = 0 everywhere)". On "four" the triangle outline with brackets "base 2" and "depth 4" (the point (8, −4) glows). Right column: "∫₆⁸ (12 − 2t) dt = −(½ × 2 × 4) = −4". On "metres" the dot moves back 4 m, tag "−4 m".

### 6. across the axis: the signed total
> Over the whole eight seconds, the graph changes sign. The integral adds the signed pieces. Thirty-six, plus minus four, gives thirty-**two**. That matches the settled sums. It's the car's displacement, how far it ends up from where it started. Thirty-two metres ahead. If it had backed up further than it went forwards, the integral would be **negative**. Area above the axis counts as positive, and area below counts as **negative**.

Visual: both fills show together. Right column: "∫₀⁸ (12 − 2t) dt = 36 + (−4) = 32" boxed on "two"; the scene 2 tag "settles on 32" pulses beside it with a tick. On "displacement" the position strip shows the dot's full trip: forwards to 36, back to 32, a bracket from 0 to 32 tagged "displacement 32 m". On the first "negative" a dashed ghost dot on the position strip shows a trip that ends behind 0, tag "ends behind the start: integral < 0". On the second "negative" the chips "+ area above" (teal) and "− area below" (red-orange).

### 7. a trapezium that doesn't start at zero
> The shape doesn't have to start at zero. Find the integral from one to three of two x plus one. At x equals one, the line is at height three, and at x equals three, it's at height **seven**. The region between the line and the axis, from one to three, is a **trapezium**. Its area is the average of three and seven, times the width two, which is **ten**. The graph stays above the axis, so the integral is ten.

Visual: board clears (new case). Task strip "Evaluate ∫₁³ (2x + 1) dx using areas." (site lesson 2 "Problem 1", numbers unchanged). Graph: y = 2x + 1 on x from −0.3 to 3.5 (author note g); vertical lines x = 1 and x = 3 draw; on "seven" the points (1, 3) and (3, 7) glow with height brackets "3" and "7". On "trapezium" `AreaFill` (signed) fills the region in teal, outline drawn, width bracket "2". Right column: "area = (3 + 7)/2 × 2 = 10"; on "ten" boxed "∫₁³ (2x + 1) dx = 10".

### 8. above and below can balance
> Here's a surprise. Find the integral from minus three to three of x. From minus three to zero, the line is below the axis, making a triangle with area four and a half. From zero to three, there's a matching triangle above, also four and a **half**. So the integral is four and a half, minus four and a half, which is **zero**. There's plenty of area here, but the integral is zero, because the part above and the part below **balance**.

Visual: board clears. Task strip "Evaluate ∫₋₃³ x dx using areas." Graph y = x on x from −3.5 to 3.5 (equal units, author note g). The left triangle fills red-orange with brackets "3" and "3" and "area 9/2"; on "half" the right triangle fills teal, "area 9/2". Right column: "∫₋₃³ x dx = −9/2 + 9/2 = 0" boxed on "zero". On "balance" a small balance bar under the graph tilts level, tags "9/2 above" and "9/2 below".

### 9. a curved shape below the axis
> Shapes can be curved too. Find the integral from minus two to two, of minus the square root of four minus x squared. The square root of four minus x squared is the top half of a circle, with radius **two**. The minus sign flips it below the **axis**. Half the circle's area is a half, times pi, times two squared, which is two pi. Every strip is below the axis, so the integral is minus two **pi**.

Visual: board clears (new case; equal units). Task strip "Evaluate ∫₋₂² −√(4 − x²) dx using areas." Graph: y = √(4 − x²) draws as a blue semicircle above the axis, tag "x² + y² = 4, top half"; on "two" a radius line from the origin to (2, 0) with "r = 2". On "axis" the curve folds below the axis (`transform` yScale 1 → −1, brief 133 fold, labels hidden during the fold), tag "y = −√(4 − x²)". Right column: "area = ½ × π × 2² = 2π"; on "pi" the region fills red-orange and the boxed row "∫₋₂² −√(4 − x²) dx = −2π" with grey "≈ −6.28".

### 10. memory aid
> Here's the rule to remember. Above adds, below subtracts. Every strip keeps its sign, and the definite integral is what the signed sums settle **on**. One condition: every integral here runs from the smaller number, a, up to the bigger one, **b**. A later video shows what happens when they swap.

Visual: a small strip row from scene 2 (teal and red-orange) with "+" and "−" over them; the handwritten line writes large: "Above adds, below subtracts." Under it, smaller: "∫_a^b f(x) dx = lim_{Δx→0} Σ f(x)Δx." On "b" a grey tag "a < b" beside the limits, and a small grey chip "swapped limits: later". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Use areas to evaluate the integral from zero to three of x minus five, d x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Use areas to evaluate ∫₀³ (x − 5) dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 12. feedback 1 (brief)
> Sketch it first. At zero the line is at minus five, and at three it's at minus two, so it's below the axis the whole **way**. The shape is a trapezium, with parallel sides five and two, and width three. Its area is three, times seven over two, which is twenty-one over **two**. It's below the axis, so the integral is minus twenty-one over two. Twenty-one over two is wrong. It loses the **sign**.

Visual: card shrinks to the top. A sketch of y = x − 5 on [0, 3] (points (0, −5) and (3, −2) labelled; "0" and "3" underlined in the card) with the region in red-orange (on "way"). Trapezium outline with brackets "5", "2", "3". Rows: "area = 3 × (5 + 2)/2 = 21/2" (on "two"); boxed "∫₀³ (x − 5) dx = −21/2". On "sign" a chip "21/2" fades in and is crossed (caption "below the axis: negative"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Use areas to evaluate the integral from zero to six of x minus two, d x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Use areas to evaluate ∫₀⁶ (x − 2) dx." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The line crosses the axis at x equals **two**. From zero to two, there's a triangle below, with area two. From two to six, there's a triangle above, with base four and height four, so its area is **eight**. The integral is eight minus two, which is **six**. Ten is wrong. It adds both areas, and forgets that the piece below **subtracts**.

Visual: card shrinks to the top. A sketch of y = x − 2 on [0, 6] with the crossing (2, 0) ringed (on "two"; "0" and "6" underlined in the card). The left triangle fills red-orange with "area 2"; the right fills teal with brackets "4", "4" and "area 8" (on "eight"). Row: boxed "∫₀⁶ (x − 2) dx = 8 − 2 = 6" (on "six"). On "subtracts" a chip "10" fades in and is crossed (caption "8 + 2: the piece below must subtract"). Hold about 1 second.

### 15. handoff
> So a definite integral is a signed sum, settled. Strips below the axis count against it. Now a new question. Here's the graph of three minus t, shaded from zero up to a point x. The integral from zero to x gives the shaded signed area, and it changes as x moves. How fast does it **grow**?

Visual: the memory-aid line shows small at the top, then fades on "Now". Board clears to one graph (author note g): y = 3 − t in blue on 0 ≤ t ≤ 6 with filled endpoint markers, axis label "t", ticks 1 to 6, −3 and 3. A marker "x" on the t-axis starts at 0; on "shaded" it slides to x = 2 while `AreaFill` (signed) follows it in teal, the boundary line at x moving with it. Right column: "A(x) = ∫₀ˣ (3 − t) dt" with a "?" chip. On "grow" the marker pulses. Chip "Next: let the end move". No value, formula or derivative. Hold about 2 seconds. This is i08's opening frame (marker at x = 2); scene 16 returns to it silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Signed strips: a strip below the axis is a negative change (a negative rate times a width). Strips above add; strips below subtract.
2. Definite integral (f continuous on a ≤ x ≤ b): ∫_a^b f(x) dx = lim_{Δx→0} Σ_{a,b} f(x)Δx, the value the signed sums settle on as the strips get thinner. If f is a rate, it is the total change from a to b.
3. If f(x) ≤ 0 throughout a ≤ x ≤ b, the definite integral is negative (zero only if f(x) = 0 everywhere there).
4. When the graph makes simple shapes, evaluate with areas: area above the axis counts +, area below counts −. Example: ∫₀⁸ (12 − 2t) dt = 36 − 4 = 32 (for a velocity, this is the displacement).

Memory aid (large, on the notes screen): *Above adds, below subtracts.*

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

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy and Python (2 Nov, isolated run, `nums_i06i08.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- Left sums of 12 − 2t on [0, 8]: L_16 = 36, L_64 = 33, L_256 = 32.25 (L_n = 32 + 64/n); L_8 = 40 (not shown). Right sums: R_16 = 28, R_64 = 31, R_256 = 31.75 (R_n = 32 − 64/n).
- ∫₁³ (2x + 1) dx = 10 (heights 3 and 7, width 2). ∫₋₃³ x dx = 0 (triangles 9/2 each).
- ∫₀⁶ (12 − 2t) dt = 36; ∫₆⁸ (12 − 2t) dt = −4; ∫₀⁸ (12 − 2t) dt = 32.
- ∫₋₂² −√(4 − x²) dx = −2π ≈ −6.2832.
- ∫₀³ (x − 5) dx = −21/2; x − 5 ≤ 0 on [0, 3].
- ∫₀⁶ (x − 2) dx = 6; ∫₀² (x − 2) dx = −2; ∫₂⁶ (x − 2) dx = 8.
- Number of strips below the axis at n = 16 with left endpoints: t = 6.5, 7, 7.5 (three); at n = 8: one (t = 7); the t = 6 strip has height 0.

## Memory aid check

- **"Above adds, below subtracts."** Meaning, as said in scene 10: every strip keeps its sign, so parts of the graph above the axis add to the integral and parts below subtract; the integral is what the signed sums settle on. Assumptions checked: the interval runs from a to b with a < b (author note c; scene 10 says this aloud, because the rule reverses when the limits swap, i09); f is continuous (i06, grey tag); "adds" and "subtracts" refer to the definite integral, not to total area, where both count positive (i10). It helps a new case: given any sign-changing graph made of shapes, the student signs each piece and adds. Introduced after the cause (1, 2) and the uses (4 to 9).
- **Considered, not used:** "area is always positive" (true for total area, but it is the misconception this video corrects for integrals).

## Narration length estimate

Revision 1 (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,711 characters** (5,726 with joining spaces), 16 scenes. Characters per scene (1 to 16): 583, 529, 789, 305, 307, 422, 398, 424, 386, 288, 108, 385, 104, 323, 285, 75. The first draft (14 scenes) counted 4,139 characters, below the floor; rather than pad, root-scope content was added: the right-endpoint sums settling on the same value, the general rate meaning of the limit with units (the outline's gap note), the site's lesson 2 trapezium, the balancing case, the trip that ends behind its start, and the spoken a < b condition for the memory aid. At 13.3 characters per second the speech is about 429 s; add a 3 s prediction hold (1), about 14 s of settling time for the position strip (1, 4 to 6), the splits (2), the notation build (3), the fills (4, 5, 7, 8) and the fold (9), 20 s for two countdowns, 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 102 s of holds): **about 531 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scene 3 is the longest (789); watch that the notation labels finish before the units sentence. Reserve trims only if the voiced take runs long (they would take it below 5,500): scene 3's "Let's check that with shapes."; scene 6's "That matches the settled sums." (keep the tick).

## Scene list and build ids

Lesson key `m-a12i07` (route math-a12-i07, draft). Suggested explainer folder `src/explainer/lessons/math-a12-i07` and build folder `docs/production/claude-pm/lessons/m-a12i07` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, signed-sums, definite-integral, above-triangle, below-negative, across-signed-total, trapezium, balance-zero, semicircle, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i06's last frame continues into scene 1 (camera continue, same window; the chip fades and the position strip draws); 1 to 2 to 3 camera continue; 3 to 4 camera continue (strips fade into fills); 4 to 5 to 6 camera continue; 6 to 7, 7 to 8 and 8 to 9 clear change (new case each; 8 and 9 equal units); 9 to 10 camera pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board. Scene 1 carries a 3 s prediction hold on "mean".

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i07-learning-review.md`, `science_check` = `checks/m-a12i07-maths-check.md`.

## Assets

Have: no plates. Existing coded kit (briefs 129, 131, 133, 135, 143): `FunctionGraph` / `GraphLayer` (12 − 2t, 2x + 1, x, √(4 − x²) with the yScale fold, x − 5 and x − 2 sketches, 3 − t); `IntegralNotation` (brief 143) with timed labels; `ReadoutPanel`; `AlignedAlgebra`; shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`. The position strip, the balance bar, the both-sides number line and the geometry outlines with dimension brackets are plain SVG through `graphTransform`; the i06 cos x thumbnail in scene 3 is redrawn in code (no still from a built lesson).

New coded parts from the i06 asset brief: `AreaFill` (with `signed`, `zeros`, `boundaryLines`), `RiemannStrips` (with `signed` and splits), `RefinementTable` (optional here: scene 2 can use `ReadoutPanel` rows). One kit gap: `IntegralNotation` must accept a Σ form beside it with a connecting arrow and label, or the arrow is plain SVG.

## Codex asset brief

None beyond the i06 kit brief (`AreaFill`, `RiemannStrips`, `RefinementTable`, and i08's `AccumulationTracer` and `LowerLimitDial`). No painted plate is needed (programme decision 5). Check for this lesson: `AreaFill` with `signed` and a zero at t = 6 colours [0, 6] teal and [6, 8] red-orange; `RiemannStrips` `signed` colours each strip by the sign of its height (zero-height strips draw as a flat line); the semicircle graph keeps equal units.

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

## YouTube metadata (draft)

Title: The Definite Integral as a Signed Sum: Areas Above and Below the Axis | Year 12 Maths Advanced

(Title length: 95 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson07.sa.html

A car's velocity goes negative, and a thin strip hangs below the axis. That strip is a backwards movement, so the sum must keep its sign. Refine the signed sums and they settle on one number: the definite integral, ∫ from a to b of f(x) dx, defined as the limit of the sums as Δx goes to 0. Then evaluate integrals exactly from areas when the graph makes simple shapes: a triangle above the axis, a triangle below it, a graph that changes sign, a trapezium, a case where above and below cancel to zero, and a semicircle below the axis. Two exam-style questions at the end.

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

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i06; check that the negative strip is understood as a backwards movement before the sign rule; that the refined sums avoid the coincidental 40; that each notation label has a plain meaning; that scene 5's reasoning, every strip negative so the limit is negative, is clear; that scene 3's rate meaning and units do not crowd the notation (it is the longest scene); that scene 8's zero is read as cancelling, not as "no area"; that the semicircle fold is one transformation; that the attempt cards give nothing away), then the Codex maths check and error check.
- The position strip, the sign colouring, the splits and the fold carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is i06's scene 14 exactly. If i06's handoff changes in review, change scene 1's first visual to match.

## Revision 2 (4 November 2026, brief 161 repairs)

Blocker: scene 1's last rectangle is an estimate of about 2 m back (exactly 3 m); the row, dot tag and numbers table say so. The grey rule and key note 3 add "zero only if f(x) = 0 everywhere"; scene 5's strip sentence shortened. Narration now 5,709 characters (counted by the build parser rules). No em dashes.
