# Year 12 Physics M5 V04: Range and complementary angles. Why do complementary launch angles have the same level-ground range? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,873 characters, 15 scenes, about 536 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics). Templates: `phys-y11-fa1-v01.md` (structure, voice, layout), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format); visual system and colour key from `phys-y12-m5-v01.md` to `-v03.md`. Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v04.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only): lesson 2 "Launch Angle Analysis" (orient and predict, the range derivation, worked example 1, complementary angles and worked example 2, unequal heights and worked example 3, "Drive it", real contexts, activities, the "Apply 6 marks" and "Analyse 5 marks" answers, short answers): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v04`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Derive R=u squared sin(2theta)/g; compare 15 m/s at 30,45,60 degrees and 25 m/s at 25/65 degrees. Explain why times differ. Stop before unequal heights." Next: "phys-y12-m5-v05: How do we find the landing point when launch and landing heights differ?"

Owner rules applied: as v01 to v03 (2017 syllabus quoted exactly; one main question; no people: the site's cannonball and kicks become the launcher's ball, and the site's sporting contexts are not used; painted launcher and ball, everything else coded; plates never stretched; one reasoning stage at a time; task strip, equation strip, grouped givens; every number recalculated; g = 9.8 m s⁻²; data sheet symbols; 3 s prediction and 10 s attempt countdowns; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causes before rules). The double-angle identity is introduced as a checked fact (it is not in Mathematics Advanced), not assumed.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)" (this video: horizontal range related to initial velocity and launch angle at equal levels; time of flight and maximum height compared for complementary angles)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** opens on v03's final frame (25 m s⁻¹ at 50° and 40° landing on the same 62.8 m mark, "?"). Teaches: R = u_x T built from the two columns with v03's T = 2u sinθ/g; R = 2u² sinθ cosθ/g as the product of the crossing speed and the time aloft; complementary angles swap u_x and u_y (cos(90° − θ) = sin θ), so the product, and the range, are unchanged; the double-angle identity checked numerically, giving R = u² sin 2θ/g and its conditions; 45° as the maximum (sin 2θ = 1, R_max = u²/g) and the symmetric range against angle curve; site worked examples 1 (15 m s⁻¹ at 30°, 45°, 60°) and 2 (25 m s⁻¹ at 25° and 65°) unchanged; why the times and heights differ for equal ranges. Stops before any unequal-height case (v05); finding the two angles for a given range is left for v07 ("Why can two launch angles reach the same target?").

## Decisions

- **Learner question (route wording kept).** "Why do complementary launch angles have the same level-ground range?" The answer, built in order: range is the crossing speed times the time aloft, R = u_x T (2); the time aloft is set by u_y, so R depends on the product u_x u_y (2); replacing θ by 90° − θ swaps u_x and u_y, which leaves the product unchanged (3); so the steeper launch's longer flight is exactly cancelled by its slower crossing (3, 7).
- **Opening frame (v03 handoff).** v03's final frame (see v03 "Final frame"): launcher at 40°, the 50° path solid orange and the 40° path dashed, both ending on the ringed 62.8 m mark, clocks "50°: 3.91 s" and "40°: 3.28 s", "?" beside the mark. Scene 1 names the pair as complementary and asks the prediction over this frame.
- **Prediction (new, from the site's hook "the 60° projectile stays airborne longer").** "The 50° ball stays up longer, so how can it land in the same place?" The 3 s countdown makes students commit to a cause (most will reach for "it's slower sideways") before scene 3 shows the swap.
- **The swap explanation (new; pack "complementary angles have equal sin 2θ, not equal sin θ or cos θ").** The site proves the result with sin(180° − φ) = sin φ. The design leads with the physical reason, readable on the two launch triangles: the 50° triangle's sides (16.1 across, 19.2 up) are the 40° triangle's sides swapped, because cos 50° = sin 40°. The identity proof follows the reason, on the range graph (scene 5).
- **Double-angle identity (site vocabulary "Double-angle identity").** Stated as a trig identity, checked once with numbers (2 sin 30° cos 30° = 0.866 = sin 60°), then used. Its conditions are said immediately because the formula came from the level-ground T.
- **45° maximum (site "Maximum Range").** sin 2θ ≤ 1, equal to 1 at θ = 45°, where u_x = u_y. A coded range against angle graph (`DataGraph` with a continuous curve for 15 m s⁻¹, 0° to 90°) shows the symmetric peak and the paired points at equal heights (30° and 60°; 25° and 65° in the 25 m s⁻¹ graph).
- **Worked examples (site worked examples 1 and 2, unchanged numbers).** WE1: 19.9, 23.0, 19.9 m, with the conditions checked first (site step 1). WE2: 48.9 m for both; flight times 2.16 s and 4.62 s (site step 4 gives only "t65 > t25"; the numbers are added, recalculated); heights 5.70 m and 26.2 m on screen only.
- **Traps (site misconceptions "45° always gives maximum range" and "A steeper angle always means a shorter range"; pack "Do not apply the equal-level range formula to a cliff landing").** Both said in scene 8; the cliff case is only named (v05).
- **Memory aid (new; see "Memory aid check"): "Complements swap the components."** Introduced after the swap explanation (3) and the numbers (6, 7), with "level ground only" attached.
- **Attempts.** A1 (original; replaces the pack's 14.0 m s⁻¹ at 30°, 45°, 60°, which repeats WE1's structure): 14.0 m s⁻¹ at 45° and 20°, and the matching angle: 20.0 m, 12.9 m, 70° (crossed: sin 20° in place of sin 40°, giving 6.84 m). A2 (from the site's "Analyse 5 marks", rewritten): 30° and 60° at the same speed: equal ranges, T ratio 1.73, H ratio 3, and why (crossed: "equal ranges mean equal flight times"). The pack's speed-doubling candidate is already taught in v03.
- **Significant figures.** WE values to three significant figures as on the site; unrounded values carried internally.
- **Handoff (route next).** Scene 14 raises the launcher onto a 30 m cliff at 20 m s⁻¹ (v05's case) and draws the 30°, 45° and 60° paths falling past the launch level with "?" at each landing, the level-ground formula stamped "level ground only". See "Final frame".
- **Site sources used:** lesson 2 hook (30° and 60°: same range, 60° longer in the air); "The Range Equation" derivation and box (2, 4); "Maximum Range" (5); worked example 1 (6); "Complementary Angles" card and key insight (3, 5, 7); worked example 2 (7); misconceptions 1 and 2 (8); "Analyse 5 marks" (A2); Activity 1 table (the 15°/75° pair is not used; its values are checked). Not used: unequal heights, worked example 3 and "Drive it" (v05); soccer penalty, long jump, shot put and javelin contexts (people); lesson 3 worked example 1 (launch speed from range; a later practice video); site Activity 1's 28 m s⁻¹, 68 m two-angle task (v07).
- **Site notes:** the "Apply 6 marks" error ("All three grow with the square of the launch speed") is logged (records 1 and 2) and corrected in v03; v04 does not repeat the claim. Checked and correct: worked example 1 (19.9, 23.0, 19.9 m); worked example 2 (48.9 m; sin 130° = sin 50° = 0.766); the MC "20 m s⁻¹, maximum range" (40.8 m); Activity 1 ranges and times (20.4, 35.3, 40.8, 35.3, 20.4 m; 1.06, 2.04, 2.89, 3.53, 3.94 s); the revisit (25 m s⁻¹ at 20°: 41.0 m); short answer Q2 (48.9, 63.8, 48.9 m); "Analyse 5 marks" ratios (about 1.7; three times).
- **Pack questions answered:** candidate 1's structure is covered by WE1, so A1 uses a new angle pair with the same 14.0 m s⁻¹; candidate 2 (speed doubling) was taught in v03 (scene 8). The pack's visual need (exact equal endpoints and different flight durations, labelled clocks where playback is normalised) is met in scenes 1, 3 and 7: each flight shows its own physical clock; when two flights are replayed side by side at one playback rate, the clocks, not the animation lengths, carry the times.
- **Cause chain taught, in order:** (1) R = u_x T; T comes from u_y, so R ∝ u_x u_y (2); (2) θ → 90° − θ swaps u_x and u_y, so the product is unchanged (3); (3) 2 sinθ cosθ = sin 2θ, so R = u² sin 2θ/g at equal levels only (4); (4) sin 2θ peaks at 45°, so R_max = u²/g, and the curve is symmetric, which pairs the angles (5); (5) the steeper partner flies longer and higher, crossing slower by the same factor (7).
- **Entry knowledge (route):** Year 11 vectors, trigonometry, constant acceleration; v01 to v03 (columns and clock; components; T = 2u sinθ/g; H; landing at the launch level).
- **Learner-visible vocabulary (plain meaning at first use):** range R (the horizontal distance from launch to landing at the launch level, scene 2); complementary angles (two angles that add to 90°, 1); trig identity (an equation that is true for every angle, 4).
- **Legacy logic ported:** none.
- **New explainer motion (coded, plus plates):** strobe stage and ledger (v01 kit gaps 1, 2) with paired flights and separate physical clocks; v02's launch triangle duplicated for two angles with a side-swap animation (the teal and blue sides of one triangle lift and land on the other's opposite sides); range against angle graph (`DataGraph` and `graphScale` from `course-kit.tsx`, continuous curve, paired points joined by a horizontal dashed line, a moving point coupled to the launcher's angle); the `m5-range-derivation` staging (factor, discard the launch root, carry T across, identity) as reference for scene 2's algebra; `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in 10 and 12); `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout and colour key:** as v01 to v03. When two flights share the stage, the steeper path is dashed blue-grey and the flatter solid orange, as in v03's final frame.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) All results assume equal launch and landing levels, uniform g, a point projectile and zero air resistance (site model box). With drag, complementary angles do not give equal ranges and the optimum is below 45°.
  (b) cos(90° − θ) = sin θ and sin(90° − θ) = cos θ: Year 11 trigonometry (complementary-angle results), recalled in scene 3 as "cos of fifty is sin of forty".
  (c) "u_x = u_y at 45°" is the reason the product is largest for a fixed u: u_x u_y = ½u² sin 2θ ≤ ½u². The narration says only that the components are equal at the maximum; the inequality is carried by the graph.
  (d) In paired replays, the two flights run at one playback rate so the longer flight visibly lasts longer; each has its own clock readout in physical seconds.
  (e) Pronunciations: "u squared sin two theta over g"; "sin of two theta" (see v02 open decision 2 on "sin"); "forty-eight point nine metres".

- **Open decisions for root:**
  - **1. Swap-first explanation (learning review).** The design explains complementary angles by the component swap and uses the site's identity only for the formula; the site proves it with sin(180° − φ). Confirm the swap reads clearly to a student who has not met sin 2θ.
  - **2. Attempt 1 replaces the pack's candidate (root).** The pack's 14.0 m s⁻¹ at 30°, 45°, 60° repeats WE1; A1 asks 45°, 20° and the complement instead. Confirm.
  - **3. Double-angle identity (maths check).** Students in Mathematics Advanced may not have met sin 2θ = 2 sin θ cos θ; the design states it as a checked identity. Confirm the wording "a trig identity, called the double angle formula" is acceptable.

Main question: *At 25 m s⁻¹, a ball launched at 50° lands exactly where one launched at 40° does, though it stays up longer. Why do complementary angles give the same range on level ground, and which angle goes furthest?*
Entry knowledge: v01 to v03 (columns and clock; u_x = u cos θ, u_y = u sin θ; T = 2u sin θ/g at equal levels).
Stops after: R = u_x T = u² sin 2θ/g with its conditions; the swap explanation; 45° maximum and R_max = u²/g; WE1 and WE2; different times and heights for equal ranges.
Handoff: v05, landing when the launch and landing heights differ.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (longer in the air, same landing)
> Last time, a ball launched at twenty-five metres per second, at fifty degrees, landed sixty-two point eight metres away. At forty degrees, it landed in exactly the same **spot**. Forty and fifty add up to ninety, and two angles that add to ninety degrees are called complementary **angles**. But the fifty degree ball was in the air for about three point nine one seconds, and the forty degree ball for only three point two eight. So how can they possibly land in the same place? Have a **think**.

Visual: opens on v03's final frame (see Decisions). The heading changes to "Why do complementary angles give the same range?". On "spot" the two flights replay side by side at one playback rate (author note d) and land together on the ringed mark. On "angles" a chip writes "40° + 50° = 90°: complementary". On "three point nine one" and "three point two eight" the two clock readouts pulse in turn. On "think" the 3 s `Countdown` ring runs beside the question "Longer in the air, same landing: how?".

### 2. range from the two columns
> Let's build the range from the two columns. The flight time comes from the vertical column: two u sin theta over **g**, from last time. The horizontal column turns that time into a distance, so the range, R, is u x times T. That's u cos theta, times two u sin theta over g, which is two u squared sin theta cos theta over **g**. So the range depends on both components multiplied **together**: how fast the ball crosses, and how long it stays up.

Visual: board change to the ledger large on the right, the stage small on the left with the 50° path. On "g" (first) the blue column shows the boxed "T = 2u sin θ ÷ g" (from v03) with a tag "from u_y". The clock carries T along its link to the teal column (the v01 carry arrow). Teal `AlignedAlgebra`: "R = u_x T", "= u cos θ × 2u sin θ ÷ g"; on "g" (second) "R = 2u² sin θ cos θ ÷ g". On "together" the "cos θ" glows teal with a tag "crossing speed (u_x)" and the "sin θ" glows blue with a tag "time aloft (from u_y)"; a chip "R ∝ u_x × u_y".

### 3. the swap
> Now look at the components for fifty and forty degrees. At fifty degrees, the ball crosses at sixteen point one metres per second and goes up at nineteen point two. At forty degrees, it's the other way round: nineteen point two across, and sixteen point one **up**. Complementary angles swap the two components, because cos fifty is sin forty. The steeper launch stays up longer, but crosses more slowly. The flatter launch crosses faster, for a shorter time. Swapping two numbers doesn't change their product, so the ranges match **exactly**.

Visual: two launch triangles side by side (v02's launch triangle, same scale, 8 px per m s⁻¹): left "50°" with teal "16.1" across and blue "19.2" up; right "40°" drawn as the sentence reaches it. On "up" the left triangle's teal side lifts, rotates and lands as the right triangle's blue side, and the left's blue side lands as the right's teal side (side-swap animation); the numbers travel with the sides. A grey chip "cos 50° = sin 40° = 0.643". On "crosses more slowly" two small stage replays under the triangles: the 50° ball with a slower teal shadow along the ground but a longer clock "3.91 s"; the 40° ball with a faster teal shadow and a shorter clock "3.28 s". On "exactly" rows "16.07 × 3.908 = 62.8 m" and "19.15 × 3.280 = 62.8 m" write under each, and the products ring together.

### 4. the shortcut and its conditions
> There's a neater way to write the range. Two sin theta cos theta is the same as sin of two theta. That's a trig identity, called the double angle formula, and you can check it. Two times sin thirty times cos thirty is zero point eight six six, and so is sin **sixty**. So R equals u squared sin two theta over **g**. But this shortcut only works when the ball lands at the same level it was launched from, with no air resistance, because it was built from the level-ground flight **time**.

Visual: the teal column's last row "R = 2u² sin θ cos θ ÷ g" stays; a grey chip "identity: 2 sin θ cos θ = sin 2θ (true for every θ)". On "sixty" a check row "2 × 0.500 × 0.866 = 0.866 = sin 60° ✓". On "g" the boxed equation "R = u² sin 2θ ÷ g" writes in orange. On "time" three condition tags hang from the box: "same launch and landing level", "no air resistance", "uniform g"; the blue "T = 2u sin θ ÷ g" it came from glows.

### 5. why forty-five degrees goes furthest
> This form also shows which angle goes furthest. Sin two theta can never be bigger than one, and it equals one when two theta is ninety degrees, so when theta is forty-five **degrees**. Then the two components are equal, and the range is u squared over g. On this graph of range against angle, the curve rises to its peak at forty-five, then falls away symmetrically. So every angle below forty-five has a partner above it, at the same **height**. That's the complementary pair.

Visual: board change to a range against angle graph (`DataGraph`): x "launch angle θ (°)" 0 to 90, ticks every 15°; y "range R (m)" 0 to 25; the curve for u = 15 m s⁻¹ (R = 22.96 sin 2θ) draws from 0° to 90°. A small launcher icon at the left tilts with a moving point on the curve. On "degrees" the point reaches the peak at 45°: a tag "sin 2θ = 1, u_x = u_y" and the row "R_max = u² ÷ g". On "symmetrically" a dashed vertical line at 45° and the curve's two halves flash as mirror images. On "height" points at 30° and 60° light with a horizontal dashed line joining them ("19.9 m"); a second pair at 15° and 75° joins at "11.5 m"; tags "30° + 60° = 90°" and "15° + 75° = 90°".

### 6. worked example: fifteen metres per second
> Let's check with numbers. A ball is launched from level ground at fifteen metres per second. First, the conditions: same launch and landing level, and no air resistance, so the shortcut is allowed. At thirty degrees, R is fifteen squared times sin sixty, over nine point eight, about nineteen point nine **metres**. At forty-five degrees, sin ninety is one, so R is two hundred and twenty-five over nine point eight, about twenty-three point zero **metres**. At sixty degrees, sin one hundred and twenty equals sin sixty, so it's nineteen point nine metres **again**.

Visual: calculation layout (site worked example 1). Task strip: "Find the range at 30°, 45° and 60°". Equation strip: "R = u² sin 2θ ÷ g". Givens (navy): "u = 15 m s⁻¹", "level ground", "g = 9.8 m s⁻²"; on "allowed" the three condition tags from scene 4 tick against the givens. Rows (`AlignedAlgebra`), each with a small path drawing on the stage below (15 px per metre) and its own clock: on "metres" (first) "R₃₀ = 15² × sin 60° ÷ 9.8 = 19.9 m" (path solid orange, clock "1.53 s"); on "metres" (second) "R₄₅ = 225 × sin 90° ÷ 9.8 = 23.0 m" (path solid green-grey, clock "2.16 s"); on "again" "R₆₀ = 225 × sin 120° ÷ 9.8 = 19.9 m" (path dashed blue-grey, clock "2.65 s"), landing on the 30° mark, which rings.

### 7. same range, different flights
> Now twenty-five metres per second, at twenty-five and sixty-five degrees, another complementary pair. Both ranges come out at about forty-eight point nine **metres**. But the flights are very different. The flight time is two u sin theta over g, so the sixty-five degree ball stays up for about four point six two seconds, more than twice the twenty-five degree ball's two point one six **seconds**. It also climbs much higher. The same range doesn't mean the same motion. It means the extra time is exactly cancelled by the slower crossing.

Visual: clear change to a new calculation layout (site worked example 2). Givens "u = 25 m s⁻¹, level ground, θ = 25° and 65° (25° + 65° = 90°)". Rows: "R₂₅ = 625 × sin 50° ÷ 9.8", "R₆₅ = 625 × sin 130° ÷ 9.8 (sin 130° = sin 50° = 0.766)"; on "metres" both complete "= 48.9 m". The stage below (8 px per metre) replays both flights at one playback rate: the 25° flight lands while the 65° ball is still near its peak (author note d). On "seconds" clock rows "T₂₅ = 2 × 25 sin 25° ÷ 9.8 = 2.16 s" and "T₆₅ = 2 × 25 sin 65° ÷ 9.8 = 4.62 s". On "much higher" height brackets "5.70 m" and "26.2 m" (screen only). On "same motion" a chip "equal range = equal time?" fades in and is crossed. On the last sentence teal readouts "u_x = 22.7 m s⁻¹" (25°) and "u_x = 10.6 m s⁻¹" (65°) sit under the clocks, with a tag "slower × longer = same distance".

### 8. two traps
> Two traps to avoid. First, the forty-five degree rule and the complementary pairs are level-ground results. If the ball lands lower than it started, from a cliff for example, they **fail**, and that's next time. Second, a steeper launch doesn't always go shorter, or always go further. The range rises up to forty-five degrees and then falls, and that's exactly why the pairs **exist**.

Visual: the range graph from scene 5 returns small. On "fail" a chip "45° always gives the maximum range" writes with a small cliff icon beside it and is stamped "level ground only" (not crossed, qualified). On "Second" a chip "steeper = shorter" writes and is crossed; on "exist" the curve's rise and fall are traced by a `PenArrow`, and the 30°/60° pair line lights again.

### 9. memory aid: complements swap the components
> Here's a way to remember it: complements swap the components. Ninety minus theta swaps u x and u y, and on level ground the range depends on their product, so it stays the **same**.

Visual: the two triangles from scene 3 return side by side; the side-swap animation replays once. On "same" the product chips ring. The handwritten line writes large above: "Complements swap the components." with a small grey line under it "(level ground only)". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A ball is launched from level ground at fourteen point zero metres per second. Calculate its range when it's launched at forty-five degrees, and when it's launched at twenty degrees. Then state another launch angle that gives the same range as twenty degrees. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball is launched at 14.0 m s⁻¹ from level ground and lands at its launch level. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the range when the launch angle is 45°. (b) Calculate the range when the launch angle is 20°. (c) State one other launch angle that would give the same range as in (b)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 11. feedback 1 (brief)
> It's level ground, so the shortcut works. At forty-five degrees, R is fourteen squared over nine point eight, twenty point zero **metres**. At twenty degrees, it's fourteen squared times sin forty, over nine point eight, about twelve point nine **metres**. The matching angle is the complement, seventy **degrees**. Using sin twenty instead of sin forty is the slip to **avoid**.

Visual: card shrinks to the top; "level ground" and "lands at its launch level" underline. Rows: on "metres" (first) "(a) R = 14.0² × sin 90° ÷ 9.8 = 196 ÷ 9.8 = 20.0 m"; on "metres" (second) "(b) R = 196 × sin 40° ÷ 9.8 = 12.9 m"; on "degrees" "(c) 90° − 20° = 70°". On "avoid" a chip "196 × sin 20° ÷ 9.8 = 6.84 m" fades in and is crossed (caption "the formula doubles the angle"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Two projectiles are launched from level ground at the same speed, one at thirty degrees and one at sixty degrees. Compare their ranges, their times of flight and their maximum heights, and explain why the ranges are equal even though the flight times are not. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two projectiles are launched from level ground at the same speed, one at 30° and one at 60° above the horizontal. Both land at their launch level. Air resistance is negligible. Compare their ranges, times of flight and maximum heights, and explain why their ranges are equal although their times of flight are different. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Thirty and sixty are complementary, so the ranges are **equal**. Flight time depends on sin theta, so the sixty degree one stays up about one point seven three times as **long**. Height depends on sin squared theta, so it climbs three times as **high**. The ranges still match because its horizontal component is smaller by exactly the same factor. Saying equal ranges mean equal flight times is the classic **slip**.

Visual: card shrinks to the top; "same speed" and "level ground" underline. Rows: on "equal" "R ∝ sin 2θ: sin 60° = sin 120°, so R₃₀ = R₆₀"; on "long" "T ∝ sin θ: sin 60° ÷ sin 30° = 1.73"; on "high" "H ∝ sin²θ: 0.75 ÷ 0.25 = 3"; on "same factor" "u_x ∝ cos θ: cos 60° ÷ cos 30° = 0.577 = 1 ÷ 1.73". On "slip" a chip "equal range, so equal time" fades in and is crossed. Hold about 1 second.

### 14. handoff
> So on level ground, the range depends on u x times u y, which is why complementary angles tie and forty-five degrees wins. But all of that came from the level-ground flight time. Now put the launcher on top of a thirty metre cliff, firing at twenty metres per second. The ball falls below its launch level. Do thirty and sixty degrees still land together, and does forty-five still go **furthest**?

Visual: board clears to the stage with the 15 m s⁻¹ level-ground paths at 30° and 60° landing together, and the orange box "R = u² sin 2θ ÷ g" at the top right. On "thirty metre cliff" the ground under the launcher rises into a coded HSC-style cliff outline 30 m high (the launcher on its top edge), with the sea level line 30 m below at 7 px per metre; the old paths fade. The launcher's speed readout changes to "u = 20 m s⁻¹". On "falls below" three trajectories draw from the barrel tip at 30° (solid orange), 45° (solid green-grey) and 60° (dashed blue-grey), each rising, passing back through the launch level (a dashed horizontal line at the cliff top marked "launch level") and continuing down towards the sea, stopping just above sea level with a "?" at each landing. On "furthest" the orange box gets a red stamp "level ground only?" and a chip writes "Next: landing below the launch level". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Range at equal launch and landing levels: R = u_x T = u cos θ × 2u sin θ ÷ g = u² sin 2θ ÷ g (using 2 sin θ cos θ = sin 2θ). Only for equal levels, negligible air resistance and uniform g.
2. Maximum range on level ground at θ = 45° (sin 2θ = 1, u_x = u_y): R_max = u² ÷ g.
3. Complementary angles (θ and 90° − θ) swap u_x and u_y, so they give equal ranges on level ground.
4. Equal ranges do not mean equal flights: the steeper launch has a longer time (T ∝ sin θ) and a greater height (H ∝ sin²θ), but a smaller u_x.

Memory aid (large, on the notes screen): *Complements swap the components.* Second line: *(level ground only)*.

## Teaching checks

- **Does it explain causes?** Why R involves both components: the horizontal column turns the vertical column's time into distance (2). Why complementary angles tie: they swap u_x and u_y and the product is unchanged (3). Why the formula needs equal levels: it was built from T for s_y = 0 (4). Why 45° is the maximum: sin 2θ peaks at 1 there, with equal components (5). Why the pairs exist: the curve rises and falls symmetrically (5, 8). Why the longer flight doesn't go further: its u_x is smaller by the same factor (7, 13).
- **Misconceptions addressed:** longer time means further (1, 7); equal range means equal time (7, crossed; 13, crossed); 45° is always best (8, qualified); steeper is always shorter (8, crossed); sin θ in place of sin 2θ (11, crossed); complementary angles have equal sin θ (3, by the swap).
- **One idea at a time:** the product form (2) before the swap (3); the swap before the identity (4); the identity before the maximum (5); numbers (6, 7) only after the reasons.
- **Video makes it easier:** the student sees the triangle sides swap places (3), watches the slower teal shadow run for longer and arrive at the same mark (3, 7), and moves a point along the symmetric range curve with the launcher tilting (5).
- **Response opportunity:** one 3 s prediction (1) and two unseen HSC-style tasks with every condition visible (level ground, launch level, speed, angles, g, negligible air resistance), 10 s each; nothing answer-bearing. Feedback about 25 s and 29 s.
- **Avoided double teaching:** T = 2u sin θ/g and the components recalled from v03 and v02 in one clause each.
- **Syllabus coverage:** `P5-IQ1-02` horizontal range derived and related to initial velocity and launch angle (2, 4, 5); time of flight and maximum height compared across angles (7, 13).
- **Out of scope by design:** unequal launch and landing heights and the optimum below 45° (v05); finding two angles for a target range (v07); air resistance effects.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks).** "A ball is launched at 14.0 m s⁻¹ from level ground and lands at its launch level. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the range when the launch angle is 45°. (b) Calculate the range when the launch angle is 20°. (c) State one other launch angle that would give the same range as in (b)."
Model answer: (a) R = u² sin 2θ/g = 14.0² × sin 90°/9.8 = 196/9.8 = 20.0 m. (b) R = 196 × sin 40°/9.8 = 12.9 m. (c) 70°, the complement of 20° (sin 140° = sin 40°). Classic mistake (crossed): using sin 20° (6.84 m).

**Attempt 2 (scene 12; original wording, HSC style, 4 marks).** "Two projectiles are launched from level ground at the same speed, one at 30° and one at 60° above the horizontal. Both land at their launch level. Air resistance is negligible. Compare their ranges, times of flight and maximum heights, and explain why their ranges are equal although their times of flight are different."
Model answer: R = u² sin 2θ/g; sin 60° = sin 120°, so the ranges are equal (complementary angles). T = 2u sin θ/g, so T₆₀/T₃₀ = sin 60°/sin 30° = 1.73: the 60° projectile is in the air about 1.7 times as long. H = u² sin²θ/2g, so H₆₀/H₃₀ = 0.75/0.25 = 3. The ranges are equal because R = u_x T and the 60° projectile's horizontal component (u cos 60°) is smaller than the 30° projectile's (u cos 30°) by the factor 1/1.73, exactly cancelling its longer time. Classic mistake (crossed): "equal ranges mean equal flight times".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening pair | 25 m s⁻¹ at 50° and 40°: R = 62.8 m; T = 3.91 s and 3.28 s; components 16.07 and 19.15 m s⁻¹ (swapped) | 1, 3 |
| Swap products | 16.07 × 3.908 = 62.8 m; 19.15 × 3.280 = 62.8 m; cos 50° = sin 40° = 0.643 | 3 |
| Identity check | 2 × 0.500 × 0.866 = 0.866 = sin 60° | 4 |
| Range graph (15 m s⁻¹) | R = 22.96 sin 2θ; 30°/60°: 19.9 m; 15°/75°: 11.5 m; 45°: 23.0 m | 5 |
| WE1 (site) | 15 m s⁻¹: R₃₀ = 19.9 m, R₄₅ = 23.0 m, R₆₀ = 19.9 m; clocks 1.53, 2.16, 2.65 s (screen) | 6 |
| WE2 (site) | 25 m s⁻¹ at 25° and 65°: R = 48.9 m each; T = 2.16 s and 4.62 s; H = 5.70 m and 26.2 m (screen); u_x = 22.7 and 10.6 m s⁻¹ (screen) | 7 |
| A1 | 14.0 m s⁻¹: R₄₅ = 20.0 m; R₂₀ = 12.9 m; complement 70°; crossed 6.84 m | 10, 11 |
| A2 | ratios T 1.73, H 3, u_x 0.577 | 12, 13 |
| Handoff | 30 m cliff; 20 m s⁻¹; 30°, 45°, 60° (no landing values shown) | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 25 m s⁻¹: 625 sin 100°/9.8 = 625 sin 80°/9.8 = 62.806617 m; T₅₀ = 3.908390 s, T₄₀ = 3.279529 s; 16.069690 × 3.908390 = 62.806617; 19.151111 × 3.279529 = 62.806617.
- 2 sin 30° cos 30° = 0.866025 = sin 60°. cos 50° = sin 40° = 0.642788 (scene 3 chip "0.643").
- 15 m s⁻¹: 225/9.8 = 22.959184; × sin 60° = 19.883236; × sin 30° = 11.479592 (15°/75°); T = 2 × 15 sin θ/9.8: 1.530612 (30°), 2.164613 (45°), 2.651098 (60°).
- 25 m s⁻¹ at 25° and 65°: 625 sin 50°/9.8 = 48.854875 m; T₂₅ = 2.156216 s, T₆₅ = 4.624019 s (ratio 2.1445); H₂₅ = 5.695351 m, H₆₅ = 26.192404 m; u_x = 22.657695 and 10.565457 m s⁻¹.
- A1: 196/9.8 = 20.000; 196 sin 40°/9.8 = 12.855752; 196 sin 20°/9.8 = 6.840403.
- A2: sin 60°/sin 30° = 1.732051; sin²60°/sin²30° = 3.000; cos 60°/cos 30° = 0.577350.

## Memory aid check

- **"Complements swap the components."** Written for this lesson. Meaning, as said in scene 9: replacing θ by 90° − θ turns u cos θ into u sin θ and u sin θ into u cos θ, so u_x and u_y trade places; on level ground R = 2u_x u_y/g depends on their product, which a swap leaves unchanged. Assumptions checked (author note a): the swap is pure trigonometry and always true; the equal-range conclusion needs equal levels, uniform g and zero air resistance, and the aid carries "(level ground only)". It helps a new case: A1(c) and A2 without new algebra, and it explains why the pairs fail from a cliff (v05: the time aloft no longer depends on u_y alone). Introduced after the explanation (3) and the numbers (6, 7).
- **Considered, not used:** "45 is the max, pairs add to 90" (two facts, no reason); the site's sin(180° − φ) = sin φ proof as the main reason (correct, but it hides the physics).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **5,873 characters**, 15 scenes. Characters per scene (1 to 15): 485, 434, 535, 477, 469, 555, 533, 378, 177, 292, 363, 291, 401, 394, 75. At 13.3 characters per second the speech is about 442 s; add 3 s for the prediction countdown, about 8 s of settling for the paired replays in scenes 1, 3, 6 and 7 (the 65° flight runs 4.6 s), about 2 s for the graph sweep in scene 5, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 94 s of holds and countdowns): **about 536 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's last two sentences (keep the tag); scene 8's second trap.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a coded HSC-style cliff outline at the left (a flat top with a vertical, hatched face) standing 30 m above a coded sea-level line, drawn at 7 px per metre on both axes; the launcher plate (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`) on the cliff's top edge with its barrel at 45° and a readout "u = 20 m s⁻¹"; a dashed horizontal line at the cliff top running out over the sea, labelled "launch level". Three trajectories from the barrel tip: 30° in solid orange, 45° in solid green-grey and 60° in dashed blue-grey, each drawn rising, crossing back through the launch level and continuing down to just above the sea-level line, with a "?" at each unfinished landing (no landing distances or times shown). At the top right the orange box "R = u² sin 2θ ÷ g" with a red stamp "level ground only?". The ledger small beside it (teal and blue columns, clock). Heading top-left: "Why do complementary angles give the same range?"; chip "Next: landing below the launch level". No ball in flight (the steel ball rests at the barrel tip). v05 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v04` (route phys-y12-m5-v04). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v04` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v04` (root to confirm).

In order (15 scene headings): hook, range-from-columns, swap, shortcut-conditions, forty-five, worked-fifteen, same-range-different-flights, two-traps, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: strobe stage with paired flights and clocks, ledger (v01 kit gaps 1, 2), launch-triangle side swap, range against angle graph with a coupled point (`DataGraph`), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`. Transitions: v03's final frame continues into scene 1 (camera continue); 1 to 2 clear change to the ledger; 2 to 3 camera continue (triangles under the ledger); 3 to 4 camera continue; 4 to 5 clear change to the graph; 5 to 6 clear change to the calculation layout; 6 to 7 clear change (new case); 7 to 8 camera continue; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), attempt-1, attempt-2 (10 s countdown after the speech), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v04-learning-review.md`, `science_check` = `checks/p-y12-m5-v04-physics-check.md`.

## Assets

Have (uniform scaling only, never stretched):
- `public/assets/physics/phys-y11-steel-ball-v1.png`: scenes 1, 3, 6, 7, 14.
- `public/assets/physics/y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png` (requested in v02; not yet painted): scenes 1, 5 (icon), 6, 7, 14.

Need (new plates): none.

Coded: ground and sea lines, cliff outline (HSC exam style), strobe images, arrows, triangles, clocks, range graph, ledger, calculation strips, condition tags, stamps, crossed chips, attempt cards, countdowns, key notes board.

Kit gaps: none new beyond v01 kit gaps 1 and 2 and v02's launch triangle; one small addition, a **side-swap animation** for two launch triangles (each side's arrow travels to the other triangle's perpendicular side carrying its label).

## Codex asset brief

No new plates. Uses the v02 launcher plate.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table. In particular confirm the scene 3 chip value cos 50° = sin 40° = 0.643.
2. Confirm the physics of every learner-visible claim: R = u_x T = u² sin 2θ/g at equal levels; complementary angles swap u_x and u_y; R_max = u²/g at 45° on level ground; the steeper complement has a longer flight and greater height; the conditions (equal levels, negligible air resistance, uniform g).
3. Confirm the memory aid's assumptions and condition (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition (level ground, launch level, speed, angles, g, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no sporting contexts).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Projectile Range and Complementary Angles: Why 30° and 60° Land Together | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson02.sa.html

At the same speed on level ground, a ball launched at 50° lands exactly where one launched at 40° does, even though it stays in the air longer. Build the range from the two components, see why complementary angles simply swap u_x and u_y, derive R = u² sin 2θ / g, and see why 45° goes furthest, but only on level ground. Worked examples at 15 m/s and 25 m/s, and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: height, flight time and landing velocity. Next: landing below the launch level.

#HSCPhysics #Physics #ProjectileMotion #HSCScience

