# Maths A12 I10: How do signed integrals differ from total area? Area equals the integral above the axis, minus the integral below it, above minus below, and splitting at the zeros with or without a graph (design)

Status: Revision 1 (2 Nov 2026), overnight queue wave B1. Needs root decisions, the student learning review and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `ProgressiveSignChart`, `IntegralNotation`, `AlignedAlgebra`), the i06 area parts (`AreaFill` with `AREA_POS` and `AREA_NEG`, `RiemannStrips`), i09's `LimitSubstitution`, and two new parts specified under "Codex asset brief" (`AreaFlip`, `DisplacementTrack`). Nothing recorded; human listening pending.

Narration 5,644 characters, 14 scenes, about 521 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: fifth video of the definite-integral group in the Year 12 Mathematics Advanced integral calculus strand (outline playlist order 33), after i09 (evaluating definite integrals without losing signs) and before i11 (area using y and a reflected exponential graph). Templates: `math-a12-i05.md` (Revision 2) and `math-a12-d10.md` (Revision 2), and the i09 design (Revision 1, written just before this one, whose scene 13 is this video's first frame): same structure, voice, paper style and kit parts. All maths visuals are coded; no painted plates (programme decision 5). No pre-design pack exists, so the pack work is done here. Site lessons read (2 Nov, read-only): integral-calculus lesson 2 (areas), `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/integral-calculus/lesson02.sa.html`, SHA256 `f2ec0e82cfb5d3d50952cf1840954f843cfba325192e2d44576deda0cd9a9380`: problem 1 (∫₁³ (2x + 1) dx = 10, "the signed area equals the total area"), problem 2 (y = x² − 4 on [0, 3]: −16/3, 7/3, total 23/3) and short-answer Q2 (y = x² − 4x + 3 on [0, 4]: 4/3, −4/3, 4/3, total 4), all reused with unchanged numbers; integral-calculus lesson 9 (areas between curves), `.../lesson09.sa.html`, SHA256 `5db0c1e271735f3528a0da20880d3cad57362f4a2429d2799d7d9b9f0acf10c8`: its x³ − x example (signed 0, area ½) is named in the memory aid check only, because its area-between-curves content belongs to a later video. Integral lesson 7 (read for i09) supplies the car (v = 12 − 2t: displacement 32 m, distance 40 m), which i07 deliberately held back for this video. Root decisions applied: exact values in algebra, decimals only in grey readouts; attempt cards never give away answers or signs; conditions kept (f continuous); final frame is the handoff frame (root decision 20).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; maths visuals coded, never painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and conditions; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Earlier videos recalled in a sentence, not re-taught: i09 (bracket F(a); splitting; the sin x example ending at 0), i07 (signed sums; f ≤ 0 throughout gives a negative integral; the trapezium ∫₁³ (2x + 1) dx = 10 by geometry; the car's displacement 32), i08 (FTC), Year 11 (factorising quadratics; absolute value as distance from zero).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Integral calculus, group "Areas and the definite integral"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ciea1a6452`: "Describe, in the case where f(x) ≥ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as ∫_{a}^{b} f(x) dx"
- `cib0134047`: "Recognise, in the case where f(x) ≤ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as |∫_{a}^{b} f(x) dx| or −∫_{a}^{b} f(x) dx"
- `ci09a73813`: "Conclude, for a continuous function y = f(x) on the interval a ≤ x ≤ b, that ∫_{a}^{b} f(x) dx = (area of regions between curve and x-axis lying above the x-axis) − (area of regions between curve and the x-axis lying below the x-axis)"
- `cicfcd020a`: "Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

**Boundary:** starts from i09's last frame (y = sin x on [0, 2π] with the upper arch teal and the lower arch red-orange, "∫₀^{2π} sin x dx = [−cos x]₀^{2π} = −1 − (−1) = 0", chips "Area = ?", "Next: signed integral or area?" and "?"); gives area its meaning (paint for the region: every part counts as positive) and the value 4 for the sine region (each arch 2, from i09's ∫₀^π sin x dx = 2); f ≥ 0: area equals the integral (site problem 1, the i07 trapezium, 10) (`ciea1a6452`); f ≤ 0: every strip is negative and a length is minus a height, so area = |∫| = −∫ (x² − 4 on [0, 2]: −16/3, area 16/3) (`cib0134047`); a sign change: the integral is above minus below (7/3 − 16/3 = −3), the area is above plus below (23/3) (`ci09a73813`); the method without a graph: zeros by factorising, a sign test in each piece, integrate each piece, make each positive, add (site Q2, x² − 4x + 3 on [0, 4]: area 4, signed 4/3) and with a graph (A2) (`cicfcd020a`); displacement as the signed integral and distance as the area for the car (32 m and 40 m). Stops at areas between one curve and the x-axis. Not taught: areas between two curves (not a 2024 Advanced point; open decision 2); areas against the y-axis and reflections (i11; the handoff only asks a question); symmetry (i12); modelling problems beyond the car (i13).

## Decisions

- **Learner question kept (outline).** "How do signed integrals differ from total area?" The answer, built in order: the integral keeps signs, area does not (1); above the axis they are equal (2); below the axis the integral is negative, and the area is its size (3); across a sign change, the integral is above minus below, and the area is above plus below (4); so find the zeros, split, make each piece positive and add (5); the same steps work when a zero is an exact log (6); for a velocity, the integral is displacement and the area is distance (7).
- **Draft route entry (no route entry or pack exists; root to adopt or amend).** id `math-a12-i10`; playlistOrder 33; mainLearnerQuestion "How do signed integrals differ from total area?"; syllabusActionIds `ciea1a6452`, `cib0134047`, `ci09a73813`, `cicfcd020a`; prerequisiteVideos `math-a12-i09`; sourceLessons integral-calculus lesson 2 (SHA above; problems 1 and 2, Q2) and lesson 9 (SHA above; not used for numbers), lesson 7 (car problem 3); entryKnowledge: i09 (bracket F(a), splitting, ∫₀^π sin x dx = 2 and ∫₀^{2π} sin x dx = 0), i07 (signed sums; f ≤ 0 gives a negative integral; the trapezium 10; displacement 32 for v = 12 − 2t), i08 (FTC), Year 11 (factorising, sign of a quadratic between and outside its roots, absolute value); startBoundary "Open on i09's frame: ∫₀^{2π} sin x dx = 0 with the signed arches and Area = ?."; stopBoundary "Area as the integral for f ≥ 0, |∫| or −∫ for f ≤ 0; above minus below; total area by zeros, sign tests and pieces, with and without a graph; displacement and distance. No area between curves, y-axis areas, symmetry or general modelling."; nextHandoff "math-a12-i11: the region between y = ln x, the y-axis, y = 0 and y = 1 (a question only)".
- **Opening (i09's handoff frame).** i09 scene 13 ends on this frame and its notes return to it, so it is this video's first frame. The hook answers its question: the area is 4.
- **Area's meaning: paint (analogy, kept short).** "If you had to paint this shaded region, you'd still need paint for both arches." Paint counts every part as positive; the integral counts the part below the axis as negative. The analogy carries the whole distinction and is not repeated after scene 1 except once in the memory aid check (author note a: its limit).
- **f ≥ 0 (`ciea1a6452`; site problem 1, numbers unchanged).** ∫₁³ (2x + 1) dx = [x² + x]₁³ = 12 − 2 = 10, which i07 found as a trapezium by geometry; "same number, because nothing is below the axis". One scene, short: the case students already expect.
- **f ≤ 0 (`cib0134047`; site problem 2's first piece, numbers unchanged).** x² − 4 on [0, 2]: ∫ = 8/3 − 8 = −16/3. The cause, one sentence each: every height is negative, so every strip adds a negative amount (i07 recalled); a strip's area uses its length, which is minus its height here. Both syllabus forms are written: area = |∫₀² (x² − 4) dx| = −∫₀² (x² − 4) dx = 16/3. `AreaFlip` folds the region up above the axis (a mirror in the x-axis) as the sign is removed; this is the visual for "make it positive".
- **Sign change (`ci09a73813`; site problem 2, numbers unchanged).** The same curve stretched to [0, 3]: ∫₂³ = 7/3; ∫₀³ = −3 (by the primitive, F(3) − F(0) = 9 − 12); the syllabus statement is then read off: −3 = 7/3 − 16/3, "above minus below". "It's not the area": area = 16/3 + 7/3 = 23/3.
- **Without a graph (`cicfcd020a`; site Q2, numbers unchanged).** y = x² − 4x + 3 = (x − 1)(x − 3) on [0, 4]. Zeros 1 and 3 split the interval into three pieces; one test value per piece (0: 3, positive; 2: −1, negative; 4: 3, positive), drawn with `ProgressiveSignChart` (brief 135) so the signs appear before any sketch. Pieces 4/3, −4/3, 4/3; area 4; the single integral is 4/3 "because the middle piece cancels one of the others". A rough sketch builds from the sign chart only after the signs are known, to show that the graph is a check, not a requirement.
- **With a graph (`cicfcd020a`).** A2 gives a graph with labelled areas and asks for both the integral and the area, so the student uses `ci09a73813` in both directions.
- **The car (site lesson 7 problem 3; i07 held it back).** v = 12 − 2t on [0, 8]: displacement ∫₀⁸ = 32 m (i07), forward 36 m on [0, 6], back 4 m on [6, 8] (integral −4), distance 40 m. A `DisplacementTrack` (a horizontal track with a marker) shows the car going out to 36 and back to 32, so "distance is the area" is seen as metres travelled. Units m s⁻¹ × s = m.
- **Attempts (original).** (A1) "Find the area of the region bounded by y = x(x − 2), the x-axis and the lines x = 0 and x = 4." No graph given. Zeros 0 and 2; pieces −4/3 and 20/3; area 8. Crossed: "16/3" (the signed integral). (A2) "The graph of y = f(x) is shown for 0 ≤ x ≤ 6. The region between the curve and the x-axis from x = 0 to x = 2 lies above the axis and has area 5. The region from x = 2 to x = 6 lies below the axis and has area 3. Find ∫₀⁶ f(x) dx and the total area of the shaded regions." Answers 2 and 8. Crossed: "∫₀⁶ f(x) dx = 8". The A2 graph is a generic smooth curve with one zero at 2, drawn without a scale on the y-axis, and its two regions labelled "area 5" and "area 3": those labels are givens, not answers. A1's card shows no graph, zeros or signs.
- **Mistake scene:** none separate. "The integral is the area" (1, 4, 5; feedback 1 crossed; feedback 2 crossed); "area can be negative" (3); "take the absolute value of the whole integral" (5: |4/3| is not 4, said in the scene's last sentence); "rounding the zero early" (6: ln 2 kept exact); "displacement is distance" (7).
- **Memory aid.** "Find the zeros, split, flip the negatives, add." with the line "The integral keeps the signs. The area makes every piece positive." See "Memory aid check".
- **Handoff (outline next: i11 "How do we find area using y and a reflected exponential graph?").** Scene 13: y = ln x for 0 < x ≤ e + 0.4, the region bounded by the curve, the y-axis and the lines y = 0 and y = 1 shaded teal (between x = 0 and x = eʸ), with dashed lines y = 0 and y = 1, a ghost of one horizontal strip at mid-height and the chips "Area = ?" and "Next: strips that lie sideways". No value (it is e − 1); the narration asks a question only.
- **Site sources used:** lesson 2 problem 1, problem 2 and Q2 with unchanged numbers (scenes 2 to 5); lesson 7 problem 3, the car, with unchanged numbers (scene 7); i09's sine example (scene 1, value 4 from its two arches, as site lesson 7 card 08). Lesson 9's x³ − x is not shown (author note b). The paint analogy, the flip, the sign-chart-first method, the exponential example (scene 6), the track and both attempts are original.
- **Site corrections (new, for the next site log; not learner copy):** (1) Integral lesson 2, visible header "Module 3 · L12 of 15" and the navigation "← Lesson 7 · Integration", "Lesson 9 · The Trapezoidal Rule →": already covered by log item 6 (title and navigation); recorded only so the checker does not duplicate it. (2) Integral lesson 2, card 02, "Move 1, Integrate ... This is the reverse of differentiation: increase the power by one and divide." The rule given applies to powers only (and not to x⁻¹), on a page whose examples are all polynomials; suggest "for powers of x (n ≠ −1), increase the power by one and divide by the new power". (3) Integral lesson 9, worked problem 3 and short-answer Q3 integrate R(x) − C(x) over output as "total profit": the same error as log item 20 (set-up section), in two more places on the same page; extend item 20 rather than add a new item. Q3's numerical value ≈ 19,596 is the correct integral of the stated function between 30 ± √600 (800√600), so only the interpretation is wrong. Scope note (not an error): areas between two curves (the whole of lesson 9, and lesson 2 problem 3, Q3 and drills 4 and 5) are not among the 2024 Year 12 Advanced content points (see open decision 2); flag them as extension material or remove them, as for the chain-rule upper limit in lesson 8. No numerical errors found in lesson 2: problem 2 (−16/3, 7/3, 23/3), Q1 (6), Q2 (4), Q3 (8/3) and drills (12, 26/3, 2, 4/3, 1/4) recalculated and correct.
- **Pack questions answered:** no pack exists. Pack work done here: site lessons 2, 7 and 9 read; every number recalculated with SymPy (see "Numbers to verify"); misconceptions listed under "Mistake scene"; site errors above.
- **Cause chain taught, in order:** (1) the integral counts a region below the axis as negative, area counts it as positive (1); (2) with no part below the axis, every strip adds, so they agree (2); (3) below the axis every strip is negative, and a length is minus a height, so the area is minus the integral (3); (4) across a zero, the integral adds the pieces with their signs, so it is above minus below; the area adds their sizes (4); (5) so the zeros decide where to split, and a test value decides each sign (5); (6) a zero can be an exact value such as ln 2, kept exact until the end (6); (7) for a velocity, signs are directions, so the integral gives where the car ends up and the area gives how far it went (7).
- **Entry knowledge:** see the draft route entry. Not assumed: "total area" (plain meaning given as paint, scene 1); "displacement" and "distance" (plain meaning given, scene 6; i07 used displacement).
- **Learner-visible vocabulary (plain meaning at first use):** area (the amount of paint the region needs: every part positive, scene 1); signed integral (recall: the integral, which counts parts below the axis as negative, scene 1); absolute value (recall: the size of a number without its sign, scene 3); zero of a function (an x-value where the curve meets the axis, scene 5); displacement (where you end up compared with the start) and distance (how far you travelled), scene 6.
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **area flip** (`AreaFlip`, new: a region below the axis folds up about the x-axis, through flat, to a mirrored teal region above it, with its label changing from "−16/3" to "16/3"; the curve itself stays, a dashed ghost shows the flipped boundary); **signed fills** (`AreaFill` signed with zeros); **sign chart first** (`ProgressiveSignChart` with tests at 0, 2, 4, then a rough sketch drawn through the zeros only after the signs are revealed); **piece readouts** (labels on each region, signed in the integral row and unsigned in the area row); **displacement track** (`DisplacementTrack`, new: a horizontal 0 to 40 m track with a marker driven by s(t) = 12t − t², moving out to 36 and back to 32, with an odometer readout of distance and a signed readout of displacement, synced to a v-t graph's fill); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; one graph on the left (about 900 × 620 px); algebra rows in the right column with two named rows where both appear: "integral (signed)" and "area (all positive)". Unequal unit lengths (no angle claims).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Paint: the analogy describes area as a non-negative measure of the region. It says nothing about units or about whether the region's height or width is meant; scene 3 then gives the strip reason (length = |f(x)|). Area = ∫_a^b |f(x)| dx for continuous f.
  (b) Lesson 9's x³ − x on [−1, 1] (signed 0, area ½) is a good second case of a signed zero, but it duplicates the sine hook and its page is about areas between curves; not used.
  (c) x² − 4: F = x³/3 − 4x; F(0) = 0, F(2) = −16/3, F(3) = −3. ∫₀² = −16/3, ∫₂³ = 7/3, ∫₀³ = −3; area 23/3.
  (d) x² − 4x + 3: F = x³/3 − 2x² + 3x; F(0) = 0, F(1) = 4/3, F(3) = 0, F(4) = 4/3. Pieces 4/3, −4/3, 4/3; signed 4/3; area 4. Test values: f(0) = 3, f(2) = −1, f(4) = 3.
  (e) Car: s(t) = 12t − t² with s(0) = 0; s(6) = 36, s(8) = 32. ∫₀⁶ v = 36, ∫₆⁸ v = −4, ∫₀⁸ v = 32, ∫₀⁸ |v| = 40.
  (f) A1: x(x − 2) = x² − 2x; F = x³/3 − x²; F(2) = −4/3, F(4) = 16/3. ∫₀² = −4/3, ∫₂⁴ = 20/3, signed 16/3, area 24/3 = 8.
  (g) A2: ∫₀⁶ f = 5 − 3 = 2; area 5 + 3 = 8. Draw the A2 curve as a smooth curve through (0, y₀ > 0), crossing at x = 2, with a minimum between 2 and 6 and ending at or near the axis at 6; no y-scale, so no reading of heights is possible; region labels "area 5", "area 3" are givens.
  (h) Windows: hook x from −0.3 to 2π + 0.3, `radianTicks(0, 2π, 2)`, y −1.4 to 1.4. Scene 2: x −0.3 to 3.6 (ticks 1, 2, 3), y −0.5 to 8 (ticks 3, 5, 7). Scenes 3 and 4: x −0.3 to 3.4 (ticks 1, 2, 3), y −4.6 to 6 (ticks −4, −2, 2, 4); the flipped region reaches y = 4. Scene 5: x −0.4 to 4.4 (ticks 1 to 4), y −1.6 to 3.6. Scene 6: x −0.1 to 1.15 (ticks ln 2, 1), y −1.2 to 0.9 (ticks −1, 0.5). Scene 7: t 0 to 8.4 (ticks 2, 4, 6, 8), v −5 to 13 (ticks −4, 4, 8, 12); track 0 to 40 m. Handoff: x −0.2 to 3.2, y −0.6 to 1.6, ticks x 1, 2, e (label "e"), y 1.
  (i) Pronunciations: "sixteen thirds", "seven thirds", "twenty-three thirds", "four thirds", "twenty thirds", "x times x minus two"; "the absolute value of the integral"; "metres"; "the natural log of x".

Main question: *The integral of sin x from 0 to 2π is zero, but the region still needs paint. How do signed integrals differ from total area, and how do we find the area when part of the region is below the axis?*
Entry knowledge (i09 brackets and splitting; i07 signed sums, trapezium and car displacement; i08 FTC; Year 11 factorising and absolute value): evaluating signed integrals; strips below the axis are negative.
Stops after: area for f ≥ 0, f ≤ 0 and a sign change; above minus below; zeros and pieces with and without a graph; displacement and distance. No area between curves or y-axis areas.
Handoff: math-a12-i11: the region between y = ln x, the y-axis, y = 0 and y = 1, "Area = ?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as i06 to i09): signed area above the axis teal (`AREA_POS`), below red-orange (`AREA_NEG`); a flipped region teal with a dashed outline; curves blue; zeros marked with small open circles; the "integral (signed)" row in ink, the "area (all positive)" row with an amber left rule; current row bright, earlier rows dim. Exact values in algebra; decimals only in grey readouts.

### 1. hook (zero, but not nothing)
> Last video ended here. The integral of sine x, from zero to two pi, is zero, because the arch below the axis cancels the arch above. But suppose you had to paint this shaded region. You'd still need paint for both arches. Each arch has area two, so the region has area **four**. The integral keeps signs, and the area doesn't. So how do signed integrals differ from total area, and how do we find the area when part of the region is below the axis?

Visual: opens on i09's last frame exactly (sin x on [0, 2π] with the upper arch teal and the lower arch red-orange, the row "∫₀^{2π} sin x dx = [−cos x]₀^{2π} = −1 − (−1) = 0", chips "Area = ?", "Next: signed integral or area?" and "?"). Heading writes on: "How do signed integrals differ from total area?". On "paint" the "Next" chip fades and both arches take a soft painted texture, tag "paint counts every part". On "two" a label "2" appears in the upper arch and "2" in the lower (grey tag "i09: ∫₀^π sin x dx = 2"). On "four" the lower arch flips up (`AreaFlip`, first use, about 0.8 s) beside a ghost of its old position, and the "Area = ?" chip becomes "Area = 2 + 2 = 4". Right column: two named rows, "integral (signed): 2 − 2 = 0" and "area (all positive): 2 + 2 = 4". The chip "How do we find the area?" moves to the top right as the scene question.

### 2. above the axis: area equals the integral
> Start with the easy case. When the curve stays on or above the axis, every strip has a positive height, so every strip adds area. Then the area and the integral are the same number. Take y equals two x plus one, from one to three. Earlier, we found this trapezium's area, ten, by geometry. Now with a primitive, x squared plus x, it's twelve minus two, which is **ten**. Same number, because nothing is below the axis.

Visual: clear change (author note h). y = 2x + 1 in blue on [1, 3], teal fill sweeping in, boundary lines x = 1 and x = 3; tag "f(x) ≥ 0 on 1 ≤ x ≤ 3". On "trapezium" a dashed trapezium outline with grey labels "3", "7", "width 2" (i07 recalled; grey tag "earlier video: 10"). Rows: "∫₁³ (2x + 1) dx = [x² + x]₁³"; on "ten" "= 12 − (2) = 10" (i09's bracket, small). Both named rows then write: "integral (signed): 10" and "area (all positive): 10", joined by an "=" tag "same when f ≥ 0".

### 3. below the axis: area is minus the integral
> Now a region below the axis. Take y equals x squared minus four, from zero to two. On this stretch the curve is under the axis, so every height is negative, and every strip adds a negative amount. A primitive is x cubed over three, minus four x. At two that's eight thirds minus eight, which is minus sixteen thirds, and at zero it's zero. So the integral is minus sixteen **thirds**. But an area can't be negative. A strip's area uses its length, and here the length is minus the height. So the area is the integral with its sign removed, sixteen thirds. We write it as the absolute value of the integral, or as minus the **integral**.

Visual: clear change (author note h). y = x² − 4 in blue; the region between the curve and the axis on [0, 2] fills red-orange; tag "f(x) ≤ 0 on 0 ≤ x ≤ 2". On "every strip" three thin `RiemannStrips` (signed) pulse below the axis with grey height labels "−4", "−3.75", "−3" (heights at 0, 0.5, 1). Rows: "F(x) = x³/3 − 4x"; "F(2) − (F(0)) = (8/3 − 8) − (0)"; on "thirds" "integral (signed): −16/3". On the length sentence one strip is highlighted with a vertical dimension bar on its side, tag "length = −(height)". On "sign removed" `AreaFlip` folds the region up above the axis (dashed ghost below), the label changes to "16/3", and the row "area (all positive): 16/3" writes. On "integral" (last bold) the boxed pair: "Area = |∫₀² (x² − 4) dx| = −∫₀² (x² − 4) dx = 16/3".

### 4. a sign change: above minus below
> What happens when the curve crosses the axis? Stretch the same curve out to three. It crosses at two, and from two to three it's above the axis. That piece has integral seven **thirds**. Now the whole integral, from zero to three, is minus three. And minus three is seven thirds, minus sixteen thirds. So the integral is the area above the axis, minus the area below **it**. That's not the area. For the area, take each piece on its own and make it positive. Sixteen thirds plus seven thirds is twenty-three **thirds**.

Visual: camera continue. The window extends to x = 3.4; the flipped region returns below (reverse `AreaFlip`, red-orange again) and a teal region fills on [2, 3]; an open circle marks the zero at x = 2, tag "zero". On "thirds" the label "7/3" in the teal piece (grey row "F(3) − F(2) = −3 − (−16/3) = 7/3"). Row "integral (signed): ∫₀³ (x² − 4) dx = F(3) − (F(0)) = −3"; on the next sentence "−3 = 7/3 − 16/3", with the two labels flying into place. On "it" the boxed statement: "∫_a^b f(x) dx = (area above the x-axis) − (area below the x-axis)" with tag "f continuous". On "That's not the area" the red-orange piece flips up (`AreaFlip`); on "thirds" (last bold) "area (all positive): 16/3 + 7/3 = 23/3" with the amber rule.

### 5. no graph: zeros, signs, pieces
> Often there's no graph. Find the area bounded by y equals x squared minus four x plus three, the x-axis, and the lines x equals zero and x equals four. First, find where the curve meets the axis. It factorises as x minus one, times x minus three, so the zeros are one and **three**. They split the interval into three pieces. Test a value in each piece. At zero, y is three, positive. At two, y is minus one, negative. At four, y is three, **positive**. Now integrate each piece. The answers are four thirds, minus four thirds, and four **thirds**. Make each one positive and add, so the area is **four**. The single integral from zero to four is only four thirds, because the middle piece cancels one of the others.

Visual: board clears. Task strip, worded as printed: "Find the area of the region bounded by y = x² − 4x + 3, the x-axis and the lines x = 0 and x = 4." (no graph). Rows: "x² − 4x + 3 = (x − 1)(x − 3)"; on "three" "zeros: x = 1, x = 3" and a `ProgressiveSignChart` on [0, 4] with boundaries 1 and 3, every interval "?". On the test sentences the tests reveal one at a time: "f(0) = 3: +", "f(2) = −1: −", on "positive" "f(4) = 3: +". Only now a rough sketch draws above the chart through (1, 0) and (3, 0), dipping between them, with the three regions filled teal, red-orange, teal (tag "sketch from the signs: a check"). On "thirds" three rows: "∫₀¹ = 4/3", "∫₁³ = −4/3", "∫₃⁴ = 4/3" (grey primitive "F(x) = x³/3 − 2x² + 3x" above them). On "four" the middle region flips up and "area (all positive): 4/3 + 4/3 + 4/3 = 4" boxed. On the last sentence "integral (signed): ∫₀⁴ = 4/3" in ink with a grey crossed chip "|4/3| is not the area".

### 6. a zero that isn't a whole number
> The same method works for every function in the course. Take y equals e to the x, minus two, from zero to one. It meets the axis where e to the x is two, so x is the natural log of two, about zero point six **nine**. At zero, y is minus one, so the first piece is below the axis. At one, y is e minus two, which is positive. With the primitive e to the x minus two x, the first piece is one, minus two times the natural log of two, which is negative. The second is e minus four, plus two times the natural log of two. Make the first one positive and add. The area is e minus five, plus four times the natural log of two, about zero point four **nine**. Keep the log exact all the way through, and round only at the end.

Visual: clear change (author note h, scene 6 window). Task strip, worded as printed: "Find the area of the region bounded by y = eˣ − 2, the x-axis and the lines x = 0 and x = 1." Rows: "eˣ − 2 = 0 ⟹ eˣ = 2 ⟹ x = ln 2"; on "nine" grey "≈ 0.69" and the graph draws: y = eˣ − 2 on [0, 1] with an open circle at (ln 2, 0), tick labelled "ln 2". Sign tests as tags: "f(0) = −1: −" and "f(1) = e − 2: +" (grey "≈ 0.72"); the pieces fill red-orange on [0, ln 2] and teal on [ln 2, 1]. Rows (grey primitive "F(x) = eˣ − 2x"): "∫₀^{ln 2} (eˣ − 2) dx = (2 − 2 ln 2) − (1) = 1 − 2 ln 2" (grey "≈ −0.39"); "∫_{ln 2}^1 (eˣ − 2) dx = (e − 2) − (2 − 2 ln 2) = e − 4 + 2 ln 2" (grey "≈ 0.10"). On "add" the red-orange piece flips up; on "nine" (last bold) "area = (2 ln 2 − 1) + (e − 4 + 2 ln 2) = e − 5 + 4 ln 2" boxed with the amber rule, grey "≈ 0.49". On the last sentence "ln 2" is ringed in each row, tag "exact until the end".

### 7. the car: displacement and distance
> This difference has a meaning when the graph is a velocity. Take the car with velocity twelve minus two t metres per second, from zero to eight seconds. Its integral is thirty-two metres. That's the displacement, where the car ends up compared with where it started. But the car stops at six seconds and then reverses. Forward from zero to six, it travels thirty-six **metres**. From six to eight, the integral is minus four, so it travels four metres back. The total distance is thirty-six plus four, which is forty **metres**. Displacement is the signed integral. Distance is the area.

Visual: clear change (author note h). v-t graph: v = 12 − 2t on [0, 8], teal on [0, 6], red-orange on [6, 8], zero at t = 6 marked; units "v (m s⁻¹)", "t (s)". Under it the `DisplacementTrack` (0 to 40 m). On "thirty-two" row "∫₀⁸ (12 − 2t) dt = 32 m" (grey tag "earlier video: displacement"). On "reverses" the track's marker runs out as the teal fill sweeps; on "metres" (first bold) it reaches 36, row "∫₀⁶ (12 − 2t) dt = 36". As the red-orange fill sweeps, the marker comes back to 32, row "∫₆⁸ (12 − 2t) dt = −4"; the odometer readout counts on to 40 while the displacement readout settles at 32. On "metres" (last bold) "distance = 36 + |−4| = 40 m" boxed with the amber rule. On the last two sentences two tags: "displacement: signed integral, 32 m" and "distance: area, 40 m".

### 8. memory aid
> Here's a way to remember the method. Find the zeros, split, flip the negatives, then add. The integral keeps the signs. The area makes every piece **positive**.

Visual: board clears to the handwritten line, large, with a small icon beside each word as it is said: "zeros" (open circles on an axis), "split" (a dashed line), "flip the negatives" (a small region folding up), "add" (a plus). Under it, smaller: "Integral: keeps the signs. Area: every piece positive." On "positive" the small region settles above the axis. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the area of the region bounded by y equals x times x minus two, the x-axis, and the lines x equals zero and x equals four. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find the area of the region bounded by y = x(x − 2), the x-axis and the lines x = 0 and x = 4." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no zeros, no signs).

### 10. feedback 1 (brief)
> The zeros are zero and **two**. From zero to two, the curve is below the axis, and the integral is minus four thirds. From two to four, it's above, and the integral is twenty thirds. Make both positive and add. Four thirds plus twenty thirds is twenty-four thirds, which is **eight**. Sixteen thirds is wrong. That's the signed integral, where the piece below the axis **subtracts**.

Visual: card shrinks to the top ("x(x − 2)", "x = 0" and "x = 4" underlined as used). On "two" "zeros: x = 0, x = 2" and a small sign chart on [0, 4]: "−" on (0, 2) (test f(1) = −1), "+" on (2, 4) (test f(3) = 3). Rows: "∫₀² (x² − 2x) dx = −4/3", "∫₂⁴ (x² − 2x) dx = 20/3"; on "eight" "area = 4/3 + 20/3 = 24/3 = 8" boxed. On "subtracts" a chip "16/3" fades in and is crossed (caption "signed: 20/3 − 4/3"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The graph shows y equals f of x, from zero to six. The region from zero to two is above the axis, with area five. The region from two to six is below the axis, with area three. Find the integral from zero to six of f, and the total area. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The graph of y = f(x) is shown for 0 ≤ x ≤ 6. The region between the curve and the x-axis from x = 0 to x = 2 lies above the axis and has area 5. The region from x = 2 to x = 6 lies below the axis and has area 3. Find ∫₀⁶ f(x) dx and the total area of the shaded regions." Beside it the graph (author note g): a smooth curve crossing at x = 2, both regions shaded in neutral grey (not teal or red-orange, so the colour gives no sign), labelled "area 5" and "area 3", x ticks 0, 2, 6, no y-scale. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer."

### 12. feedback 2 (brief)
> The integral counts the region below the axis as negative, so it's five minus three, which is **two**. The total area counts both as positive, so it's five plus three, which is **eight**. Eight for the integral is wrong. It treats the region below the axis as if it were **above**.

Visual: card shrinks to the top ("area 5", "area 3", "above" and "below" underlined as used). The grey regions take their signed colours (teal, red-orange). On "two" "∫₀⁶ f(x) dx = 5 − 3 = 2" boxed (ink row); on "eight" "total area = 5 + 3 = 8" boxed (amber rule). On "above" a chip "∫₀⁶ f(x) dx = 8" fades in and is crossed (caption "below the axis counts negative"). Hold about 1 second.

### 13. handoff
> So the integral is above minus below, and the area adds every piece as positive. Every region so far has sat against the x-axis. Here's a different one: the region between y equals the natural log of x, the y-axis, and the lines y equals zero and y equals one. Our strips stood up from the x-axis. Here, they'd have to lie **sideways**. So how do we find this area?

Visual: the memory-aid line shows small at the top, then fades on "Every region". Board clears to one graph (author note h): y = ln x in blue for 0 < x ≤ e + 0.4 (the curve approaches the y-axis downwards out of the window), dashed lines y = 0 and y = 1, and the region bounded by the curve, the y-axis, y = 0 and y = 1 shaded teal (for each y in [0, 1], from x = 0 to x = eʸ). On "sideways" one thin horizontal ghost strip appears at mid-height, running from the y-axis to the curve, with a small "?" beside it. Chips "Area = ?" and "Next: strips that lie sideways". No value. Hold about 2 seconds. This is i11's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. If f(x) ≥ 0 on a ≤ x ≤ b, the area between y = f(x) and the x-axis is ∫_a^b f(x) dx.
2. If f(x) ≤ 0 on a ≤ x ≤ b, the area is |∫_a^b f(x) dx| = −∫_a^b f(x) dx.
3. ∫_a^b f(x) dx = (area above the x-axis) − (area below the x-axis). It is not the total area when f changes sign.
4. Total area: find the zeros, split there, integrate each piece, make each piece positive, add. Example: y = x² − 4x + 3 on [0, 4]: 4/3 + 4/3 + 4/3 = 4 (the integral is 4/3).
5. Velocity: ∫ v dt is displacement; the area is distance.

Memory aid (large, on the notes screen): *Find the zeros, split, flip the negatives, add.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades back to scene 13's frame exactly (y = ln x with the region against the y-axis between y = 0 and y = 1 shaded, the ghost horizontal strip with "?", the chips "Area = ?" and "Next: strips that lie sideways"). This is the final frame and i11's opening frame.

## Teaching checks

- **Does it explain causes?** Why sin x on [0, 2π] has integral 0 but area 4: the integral counts the lower arch as negative, paint does not (1). Why area equals the integral when f ≥ 0: every strip adds (2). Why the integral is negative below the axis, and the area is minus it: every height is negative, and a length is minus a height (3). Why the integral is above minus below: it adds the pieces with their signs (4). Why split at the zeros: a sign can only change at a zero of a continuous function, so each piece has one sign, found by one test value (5). Why |∫₀⁴| is not the area: the pieces cancel before the absolute value is taken (5). Why the car's two numbers differ: going back reduces displacement but adds to distance (7). Why keep ln 2 exact: the pieces are differences of nearly equal numbers, so early rounding distorts them (6).
- **Misconceptions addressed:** "the integral is the area" (1, 4, 5; both feedbacks crossed); "area can be negative" (3); "take the absolute value at the end" (5); "you need the graph" (5: signs from a factorised form and test values); "round the zero first" (6); "displacement is distance" (7).
- **One idea at a time:** one case per scene in 2 to 4 (above, below, both), with one curve, x² − 4, carrying 3 and 4; one step of the method per sentence in 5 and 6; one leg of the journey per sentence in 7.
- **Video makes it easier:** the student watches the lower arch flip up into the paint total (1), the red-orange region fold up as its sign is removed (3), the two labels fly into "above minus below" (4), the signs appear on the chart before the sketch (5), the zero at ln 2 split the exponential (6) and the car's marker go out and come back while the odometer keeps counting (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing (A2's region labels are givens; its regions are grey so colour gives no sign). One crossed mistake each; feedback about 25 s and 17 s (scenes 10 and 12), inside the 15 to 30 s band.
- **Avoided double teaching:** the bracket and splitting (i09), the signed sum, the trapezium and displacement 32 (i07) are each recalled in a phrase or grey tag.
- **Syllabus coverage:** `ciea1a6452` (2; key note 1); `cib0134047` (3, both forms; key note 2); `ci09a73813` (4; A2; key note 3); `cicfcd020a` (3 to 5: f ≥ 0, f ≤ 0 and a sign change, without a graph in 5 and A1, with a graph in A2; 6 with an exponential and an exact log zero; 7 as an application; key note 4).
- **Out of scope by design:** area between two curves; y-axis areas (i11); symmetry (i12); general modelling (i13).

## Practice questions and model answers

**Attempt 1 (scene 9; original, HSC style, 3 marks suggested, not an official marking scheme).** "Find the area of the region bounded by y = x(x − 2), the x-axis and the lines x = 0 and x = 4."
Model answer: x(x − 2) = 0 at x = 0 and x = 2. Test x = 1: −1 < 0, so the curve is below the axis on 0 < x < 2; test x = 3: 3 > 0, so above on 2 < x < 4. ∫₀² (x² − 2x) dx = [x³/3 − x²]₀² = 8/3 − 4 = −4/3; ∫₂⁴ (x² − 2x) dx = (64/3 − 16) − (8/3 − 4) = 16/3 + 4/3 = 20/3. Area = 4/3 + 20/3 = 8 square units. Classic mistake (crossed): "16/3" (the signed integral ∫₀⁴).

**Attempt 2 (scene 11; original, HSC style, 2 marks suggested).** "The graph of y = f(x) is shown for 0 ≤ x ≤ 6. The region between the curve and the x-axis from x = 0 to x = 2 lies above the axis and has area 5. The region from x = 2 to x = 6 lies below the axis and has area 3. Find ∫₀⁶ f(x) dx and the total area of the shaded regions."
Model answer: ∫₀⁶ f(x) dx = 5 − 3 = 2; total area = 5 + 3 = 8 square units. Classic mistake (crossed): "∫₀⁶ f(x) dx = 8".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | ∫₀^{2π} sin x dx = 0; each arch 2; area 4 | 1 |
| f ≥ 0 (site problem 1) | ∫₁³ (2x + 1) dx = 12 − 2 = 10; trapezium sides 3 and 7, width 2 | 2 |
| f ≤ 0 (site problem 2) | ∫₀² (x² − 4) dx = 8/3 − 8 = −16/3; area 16/3; strip heights −4, −3.75, −3 at 0, 0.5, 1 | 3 |
| Sign change (site problem 2) | ∫₂³ = 7/3; ∫₀³ = −3 = 7/3 − 16/3; area 23/3 | 4 |
| No graph (site Q2) | (x − 1)(x − 3); tests f(0) = 3, f(2) = −1, f(4) = 3; pieces 4/3, −4/3, 4/3; area 4; signed 4/3 | 5 |
| Exponential (original) | eˣ = 2 at x = ln 2 ≈ 0.69; f(0) = −1, f(1) = e − 2 ≈ 0.72; ∫₀^{ln 2} = 1 − 2 ln 2 ≈ −0.39; ∫_{ln 2}^1 = e − 4 + 2 ln 2 ≈ 0.10; area e − 5 + 4 ln 2 ≈ 0.49 | 6 |
| Car (site lesson 7) | ∫₀⁶ = 36, ∫₆⁸ = −4, ∫₀⁸ = 32 m; distance 40 m; s(6) = 36, s(8) = 32 | 7 |
| A1 | zeros 0, 2; tests f(1) = −1, f(3) = 3; −4/3, 20/3; area 8; crossed 16/3 | 9, 10 |
| A2 | ∫₀⁶ f = 2; area 8; crossed ∫ = 8 | 11, 12 |
| Handoff | y = ln x, region against the y-axis for 0 ≤ y ≤ 1 (area e − 1, not shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov, isolated run, `b1_nums.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- ∫₀^{2π} sin x dx = 0; ∫₀^{2π} |sin x| dx = 4.
- ∫₁³ (2x + 1) dx = 10.
- ∫₀² (x² − 4) dx = −16/3; ∫₂³ (x² − 4) dx = 7/3; ∫₀³ (x² − 4) dx = −3; ∫₀³ |x² − 4| dx = 23/3.
- ∫₀¹ (x² − 4x + 3) dx = 4/3; ∫₁³ = −4/3; ∫₃⁴ = 4/3; ∫₀⁴ = 4/3; ∫₀⁴ |x² − 4x + 3| dx = 4.
- ∫₀^{ln 2} (eˣ − 2) dx = 1 − 2 ln 2 ≈ −0.3863; ∫_{ln 2}^1 (eˣ − 2) dx = e − 4 + 2 ln 2 ≈ 0.1046; ∫₀¹ |eˣ − 2| dx = e − 5 + 4 ln 2 ≈ 0.4909.
- ∫₀⁶ (12 − 2t) dt = 36; ∫₆⁸ = −4; ∫₀⁸ = 32; ∫₀⁸ |12 − 2t| dt = 40.
- A1: ∫₀² x(x − 2) dx = −4/3; ∫₂⁴ = 20/3; ∫₀⁴ = 16/3; ∫₀⁴ |x(x − 2)| dx = 8.
- A2: 5 − 3 = 2; 5 + 3 = 8.
- Handoff (not shown): ∫₀¹ eʸ dy = e − 1.

## Memory aid check

- **"Find the zeros, split, flip the negatives, add."** Meaning, as said in scene 8: the four steps of scene 5; "flip the negatives" means take the size of each negative piece's integral, which `AreaFlip` shows as the region folding above the axis. Assumptions checked: f is continuous on the interval, so its sign can change only at a zero (stated in scene 4's boxed statement and key notes); zeros at the ends of the interval need no split (A1's zero at x = 0 is an endpoint, and feedback 1 treats it as one); a zero where the curve touches the axis without crossing gives no sign change, but splitting there is harmless (not narrated; the test values catch it); the region is between one curve and the x-axis (key notes say so). It helps a new case (scene 6 shows it on an exponential): for sin x on [0, 2π] it gives 2 + 2 = 4 at once. Introduced after the cause (1 to 4) and the method (5).
- **"Integral: keeps the signs. Area: every piece positive."** The second line is the paint idea in exam language. Limit: it describes regions against the x-axis only; i11 adds the y-axis case with the same logic.
- **Considered, not used:** "area is always the absolute value of the integral" (false across a sign change; this is the error in scene 5's last sentence).

## Narration length estimate

Revision 1 (2 Nov; counted by script `b1_count.py` with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,644 characters**, 14 scenes. Characters per scene (1 to 14): 444, 414, 628, 507, 700, 711, 579, 156, 160, 371, 269, 269, 361, 75. At 13.3 characters per second the speech is about 424 s; add about 14 s of settling time for the flips (1, 3, 4, 5), the sign chart and sketch (5), the exponential's fills (6) and the track (7), 20 s for two countdowns, 5 s of short holds (scenes 8, 10, 12, 13) and about 55 s more of the quiet notes hold (about 97 s of holds): **about 521 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's last sentence (keep the "=" tag); scene 5's last sentence (keep the grey crossed chip); scene 6's last sentence (keep the ring); scene 7's last two sentences (keep the two tags). Length note: the four syllabus points fill about 4,950 characters with polynomial and sine cases alone; scene 6 adds the one missing case (a sign change at an exact non-integer zero, from an exponential within course scope), not padding.

## Scene list and build ids

Lesson key `m-a12i10` (route math-a12-i10, draft). Suggested explainer folder `src/explainer/lessons/math-a12-i10` and build folder `docs/production/claude-pm/lessons/m-a12i10` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, above-the-axis, below-the-axis, sign-change, no-graph-method, exponential-zero, car-distance, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): i09's last frame continues into scene 1 (camera continue; same window); 1 to 2, 2 to 3 clear change (new case); 3 to 4 camera continue (same curve, wider window); 4 to 5 board clear (no graph); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 board clear; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12i10-learning-review.md`, `science_check` = `checks/m-a12i10-maths-check.md`.

## Assets

Have: no plates. Existing coded kit (briefs 129, 131, 133, 135, 143): `FunctionGraph` / `GraphLayer` (sin x, 2x + 1, x² − 4, x² − 4x + 3, eˣ − 2, 12 − 2t, the A2 curve, ln x); `ProgressiveSignChart` (brief 135) for scene 5 and feedback 1; `IntegralNotation`; `AlignedAlgebra`; shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`. From the i06 kit brief: `AreaFill` (signed), `RiemannStrips` (signed). From i09: `LimitSubstitution`.

New: `AreaFlip`, `DisplacementTrack` (below). The handoff's horizontal ghost strip is plain SVG; i11 specifies the full horizontal-strip part.

## Codex asset brief

No painted plate is needed (programme decision 5). Two new coded parts, with numeric checks against SymPy references as in briefs 135 and 143:

1. **`AreaFlip` (new).** Props: `graph` (a `GraphSpec`), `from`, `to` (an interval where f ≤ 0, author-supplied), `at`, `duration` (default 0.8 s), `reverse` (fold back down), `label` ({before, after} React nodes, e.g. "−16/3" and "16/3"), `ghost` (dashed outline left at the original position). The region between the curve and the axis on [from, to] is mirrored in the x-axis (y → −y) by animating a vertical scale 1 → −1 about y = 0, passing through flat with the label hidden; the curve itself is not moved; the flipped fill uses `AREA_POS`. Checks: the region's sampled area (trapezium sums at 2,000 points) is unchanged by the flip and equals the author label's value (16/3 for x² − 4 on [0, 2]; 2 for sin x on [π, 2π]; 4/3 for x² − 4x + 3 on [1, 3]); the flipped region lies in y ≥ 0; it rejects an interval where f changes sign (sampled sign test).
2. **`DisplacementTrack` (new).** Props: `position` (author-supplied s(t), here 12t − t²), `t` (animatable, or keyframes synced to an `AreaFill` sweep on the v-t graph), `range` (track 0 to 40 m with ticks every 10), `readouts` (signed "displacement: s(t) − s(0)" and an odometer "distance: ∫₀ᵗ |v|" from an author-supplied speed), `units` ("m"). A small marker (a plain rounded block, no vehicle drawing or people) moves along the track; a faint trail shows the path out and back (offset slightly so the return is visible). Checks: at t = 6 the marker is at 36 and distance reads 36; at t = 8 position 32, distance 40; the marker reverses exactly when v = 0; the supplied speed integrates to the distance readout at 101 sample times.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the opening frame matches i09 scene 13 exactly and the final frame matches scene 13 here.
3. Confirm the area statements carry their conditions wherever stated (continuous f; f ≥ 0 or f ≤ 0 throughout a ≤ x ≤ b; scenes 2 to 4, key notes 1 to 3), and that both syllabus forms |∫| and −∫ appear for f ≤ 0.
4. Confirm the strip reasons in scenes 2 and 3 ("every strip adds", "the length is minus the height") are true for the stated cases.
5. Confirm scene 5's test values and signs, and the claim that ∫₀⁴ = 4/3 is not the area.
6. Confirm the exponential example's exact pieces and area (scene 6), and the car values (36, −4, 32, 40) and that the track's marker reverses at t = 6.
7. Confirm A1 = 8 with crossed 16/3 and A2 = 2 and 8 with crossed 8; confirm A1's card shows no graph, zeros or signs, and A2's regions are neutral grey with no y-scale.
8. Confirm the handoff (scene 13) shows no area value (e − 1 is not on screen) and the region is correctly drawn (between x = 0 and x = eʸ for 0 ≤ y ≤ 1).
9. Confirm the syllabus quotes match the crosswalk JSON text exactly (linear form), and no site module label appears in learner copy or metadata.
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration character count by script with the build parser rules.

## YouTube metadata (draft)

Title: Signed Integrals vs Total Area: Above Minus Below | Year 12 Maths Advanced

(Title length: 75 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/lesson02.sa.html

The integral of sin x from 0 to 2π is zero, but you'd still need paint for both arches: the area is 4. See why a definite integral counts regions below the x-axis as negative, so it equals the area above minus the area below, while the total area counts every piece as positive. Work through y = 2x + 1, y = x² − 4 and y = x² − 4x + 3 (with no graph: find the zeros, test the signs, integrate each piece, make each positive, add). Then see the same idea in motion: a car's displacement is 32 m, but it travels 40 m. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, integral calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Describe, in the case where f(x) ≥ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as ∫_{a}^{b} f(x) dx"
"Recognise, in the case where f(x) ≤ 0 for all values of x in the interval a ≤ x ≤ b, the area bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, as |∫_{a}^{b} f(x) dx| or −∫_{a}^{b} f(x) dx"
"Conclude, for a continuous function y = f(x) on the interval a ≤ x ≤ b, that ∫_{a}^{b} f(x) dx = (area of regions between curve and x-axis lying above the x-axis) − (area of regions between curve and the x-axis lying below the x-axis)"
"Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f

Builds on: Evaluating definite integrals without losing signs (previous video); the definite integral as a signed sum. Next: Area using y and a reflected exponential graph.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Route entry (root).** The draft entry in "Decisions" is ready to adopt.
- **2. Area between two curves (root, scope).** Site lessons 2 and 9 both teach it (top minus bottom), but the 2024 Year 12 group "Areas and the definite integral" (crosswalk ordinals 34 to 46) has no point for the area between two curves: every area point is a curve and the x-axis (`ciea1a6452` to `cicfcd020a`) or the y-axis (`cic69e48c4`, `cide2cd24b`), and `ci930354fd` repeats "a curve and the x-axis, or by a curve and the y-axis". So this video and the route leave it out. Root to confirm, and to decide whether site lesson 9 is flagged as outside the 2024 Advanced points (scope note below).
- **3. Site link (root).** The description links lesson 2 (areas), the page whose worked numbers are used most; lesson 9 is the outline's second source.
- **4. Paint analogy (learning review).** Confirm "paint" is understood as "every part counts as positive" and is not read as a claim about units.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from i09 and i07; check that the paint idea separates area from the integral before any rule; that the strip-length reason in scene 3 is clear; that scenes 3 and 4 share one curve without crowding; that the signs in scene 5 come before the sketch; that the track makes distance concrete; that A2's grey regions give no sign away), then the Codex maths check and error check.
- The flips, the sign chart reveal and the track carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is i09's scene 13 exactly (both designs written by the same designer, 2 Nov). If i09's handoff changes in review, change scene 1's first visual to match.
