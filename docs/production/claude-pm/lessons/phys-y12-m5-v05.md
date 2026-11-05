# Year 12 Physics M5 V05: Landing below the launch level. How do we find the landing point when launch and landing heights differ? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,711 characters, 17 scenes, about 522 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: fifth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics). Templates: `phys-y11-fa1-v01.md` (structure, voice, layout), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format); visual system and colour key from `phys-y12-m5-v01.md` to `-v04.md`. Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v05.md` (every number recalculated below). Site lessons read in full (6 Nov, read-only): lesson 2 "Launch Angle Analysis", sections "Model unequal launch and landing heights" (worked example 3) and "Evaluate real contexts" plus "Drive it", `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362`; and lesson 3's "Analyse 7 marks" cliff answer and Activity 2 (method reference only), `.../lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a` (both recomputed 6 Nov; match the pack and the route). Route entry: `phys-y12-m5-v05`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Solve the vertical quadratic for the positive landing time at h=30 m, u=20 m/s for 30,45,60 degrees. Explain why 45 degrees need not maximise range; defer calculus optimisation." Next: "phys-y12-m5-v06: Will a projectile clear a wall at a known horizontal position?"

Owner rules applied: as v01 to v04 (2017 syllabus quoted exactly; one main question; no people: the site's thrown stones and sports contexts are not used; painted launcher and ball, coded HSC-style cliff, sea level, paths and working; plates never stretched; one reasoning stage at a time; task strip, equation strip, grouped givens; every number recalculated and carried unrounded; g = 9.8 m s⁻²; data sheet symbols; 3 s prediction and 10 s attempt countdowns; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causes before rules). The quadratic formula (Stage 5 and Year 11 Mathematics) is recalled in a phrase, not re-taught.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)" (this video: launch height, time of flight and horizontal range when the landing is below the launch point)
- `P5-IQ1-04`: "solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** opens on v04's final frame (30 m cliff, 20 m s⁻¹, paths at 30°, 45° and 60° falling past the launch level with "?"). Teaches: why the level-ground shortcuts fail (they assume s_y = 0); s_y = −h with up positive; the vertical equation as a quadratic in t; the quadratic formula, the physical (positive) root and the meaning of the rejected negative root; R = u_x t; site worked example 3 unchanged (30°: 3.70 s, 64.0 m; 45°: 4.31 s, 60.9 m; 60°: 4.81 s, 48.1 m); a rise-then-fall check; why the best angle from a height is below 45° and why complementary angles no longer tie; that three samples do not locate the optimum (about 32.5°, stated, not derived). Stops before calculus optimisation (deferred), landing velocity from a height (later practice), launching below the landing level (uphill; not used), and obstacles at a known horizontal position (v06).

## Decisions

- **Learner question (route wording kept).** "How do we find the landing point when launch and landing heights differ?" The answer: keep the method, change the condition: the vertical column's landing condition becomes s_y = −h, which makes a quadratic in t; its positive root is the flight time; the horizontal column turns that time into the landing distance.
- **Opening frame (v04 handoff).** v04's final frame (see v04 "Final frame"): the coded cliff 30 m above the sea-level line at 7 px per metre, the launcher on its edge at 45° with "u = 20 m s⁻¹", the dashed "launch level" line, three trajectories (30° orange, 45° green-grey, 60° dashed blue-grey) stopping just above the sea with "?", and the orange box "R = u² sin 2θ ÷ g" stamped "level ground only?". Scene 1 asks the prediction over it, then the camera pushes in to 12 px per metre.
- **Prediction (site "Drive it" predict-then-reveal, re-cased to the route's numbers).** "Which of 30°, 45° and 60° lands furthest from the cliff?" with a 3 s countdown. Students carrying v04's rule will pick 45°; the answer (30°, scene 9) is the surprise the explanation must earn.
- **Why the shortcuts fail (pack trap: "The displacement at landing is minus 30 m relative to launch, not zero").** Shown on the stage: each path crosses the launch level at exactly its level-ground range and time (v03's mirror still holds up to there), then keeps falling. So T = 2t_up and R = u² sin 2θ/g describe the crossing of the launch level, not the landing.
- **The quadratic (site worked example 3 step 1 and lesson 3's "Analyse 7 marks").** −30 = u_y t − 4.9t², rearranged to 4.9t² − u_y t − 30 = 0 and solved with the quadratic formula (recalled, not derived). The site's closed form t = (u sin θ + √(u² sin²θ + 2gh))/g is shown on screen as the same result in one line, not as a new formula to memorise (key note 2 records it).
- **The negative root (pack: "Keep the nonphysical negative root visible briefly"; lesson 3: "the stone having been at beach level before launch on the same parabola").** The parabola is extended backwards as a grey ghost to sea level at t = −1.66 s, then rejected with the reason.
- **Check by a second route (lesson 3 "Check the answer is physically sensible").** Rise 1.02 s to 5.10 m above the cliff top, fall 35.1 m in 2.68 s, total 3.70 s. It agrees with the quadratic and shows where the extra time comes from.
- **The comparison and its cause (site "Why the Optimal Angle Changes"; pack "Do not claim the sample proves 30 degrees is the global optimum").** The narration names two reasons: the extra fall adds time to every flight, and the flatter launch gets more of it (it comes back through the launch level more slowly: extra times 1.66, 1.42, 1.27 s) and has the bigger u_x to spend during it. The continuous optimum (32.47°, 64.15 m) is stated as "trying more angles shows ... about thirty-two and a half degrees", with a coded range against angle curve for the 30 m cliff beside v04's level-ground curve. No calculus (route: deferred).
- **Complementary angles no longer tie.** 30° (64.0 m) against 60° (48.1 m): the pair's swap of u_x and u_y no longer leaves the time aloft proportional to u_y, so the product argument from v04 fails. Said in one sentence.
- **Traps and memory aid (new; see "Memory aid check"): "Down is negative, time is positive."** Covers the two errors the pack names (s_y = +30 or 0; doubling t_up) through the sign of s_y and the choice of root. Introduced after the method and its check.
- **Attempts (pack candidates, original wording).** A1: horizontal launch at 6.0 m s⁻¹ from 5.0 m: t = 1.01 s, R = 6.06 ≈ 6.1 m (the quadratic collapses when u_y = 0; crossed: s_y = +5.0 m, which gives no real time). A2: 10.0 m s⁻¹ at 30° from 5.0 m above the landing level: t = 1.64 s; negative root −0.62 s rejected (crossed: doubling t_up, 1.02 s). Range not asked (pack).
- **Significant figures.** Givens to two or three significant figures; working carries full precision (√688 = 26.2298, t = 3.69691 s); results to three significant figures as on the site (3.70 s, 64.0 m; 4.31 s, 60.9 m; 4.81 s, 48.1 m). A1 to two significant figures (data 6.0, 5.0); A2 to three.
- **Handoff (route next).** Scene 15 keeps the 30° flight and stands a coded wall partway out from the cliff; the question becomes "clear it?", with the hint that this time a horizontal distance is known. See "Final frame".
- **Site sources used:** lesson 2 "Launch Height Not Equal to Landing Height" (time of flight from height, the quadratic and positive root, "Why the Optimal Angle Changes"); worked example 3 (scenes 4 to 9, unchanged numbers); misconception "45° always gives maximum range" and the odd-one-out item (scene 9); "Drive it" predict-then-reveal format (scene 1); key formulas (key note 2); lesson 3 "Analyse 7 marks" (negative-root meaning; check by rise and fall). Not used: the uphill case ("launch below landing", optimum above 45°: named in neither narration nor notes, to keep one direction; open decision 2); the 25 m s⁻¹ from 20 m platform and the 18 m s⁻¹ from 50 m tables (site practice, checked below); the shot put and penalty kick (people); lesson 3's balcony and 60 m cliff questions with impact velocity (later practice video).
- **Site notes:** none new. Checked and correct: worked example 3 (3.70 s, 64.0 m; 4.31 s, 60.9 m; 4.81 s, 48.1 m; continuous optimum "about 32.5°", computed 32.47°); "Drive it" (25 m s⁻¹, 20 m: 38° 81.4 m, 45° 79.8 m, 30° 79.3 m; continuous optimum 38.1°, so "38° wins" among the three is right); Activity 2 (18 m s⁻¹, 50 m: 20° 65.69 m, 35° 65.13 m, 45° 60.42 m, 55° 51.99 m; optimum 26.5°); lesson 3 "Analyse 7 marks" (3.55 s, −1.44 s, 52.3 m; the check 3.54 s).
- **Pack questions answered:** both candidates used as attempts (unchanged numbers); the pack's visual need (new parameters for inclined launches from height and a general landing-time model; no raster cannon) is met by the strobe stage with launch height (v01 kit gap 1 already includes it) and the coded cliff.
- **Cause chain taught, in order:** (1) the shortcuts assumed s_y = 0; here s_y = −30 m (2); (2) the vertical equation is then a quadratic in t (3); (3) its positive root is the landing; the negative root is a time before launch on the same curve (4, 5); (4) R = u_x t (6); (5) the extra fall adds most time to the flattest launch, which also has the largest u_x, so the best angle drops below 45° and complements no longer tie (8, 9).
- **Entry knowledge (route):** Year 11 constant acceleration and trigonometry; Stage 5 and Year 11 quadratic formula; v01 to v04 (columns and clock; components; equal-level T, H and R; complementary angles).
- **Learner-visible vocabulary (plain meaning at first use):** launch height (how far the launch point is above the landing level, scene 2); quadratic (an equation with a t² term, which can have two answers, 3); root (an answer to the equation, 4, recalled from v03).
- **Legacy logic ported:** none.
- **New explainer motion (coded, plus plates):** strobe stage with launch height and three paths with separate clocks (v01 kit gap 1); ledger (kit gap 2); coded HSC-style cliff outline and sea-level line; launch-level crossing marks; backwards ghost extension of a path to negative time; rise-and-fall split brackets; range against angle curves for level ground and for the 30 m cliff (`DataGraph`, as v04); `AlignedAlgebra` with a quadratic-formula row and ± branches; `Countdown` (3 s in scene 1; 10 s in 11 and 13); `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout and colour key:** as v01 to v04. The cliff face is drawn in HSC exam style (ink outline with short hatching), not as a painted landscape (open decision 1).
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Model: point projectile, uniform g, zero air resistance, launch point at the cliff edge (barrel tip taken as 30 m above sea level), the sea level flat. "Range" here is the horizontal distance from the cliff edge (directly above the base) to the landing point.
  (b) Extra time below the launch level: after recrossing the launch level with v_y = −u_y, the fall of 30 m takes (−u_y + √(u_y² + 2gh))/g: 1.656 s (30°), 1.421 s (45°), 1.273 s (60°). These equal the magnitudes of the negative roots (a property of the symmetric parabola); not narrated.
  (c) The continuous optimum for 20 m s⁻¹ from 30 m is 32.47° (R = 64.15 m), found here by a 0.01° numerical scan. The narration says "about thirty-two and a half degrees" and "trying more angles"; no calculus, no general formula.
  (d) Final-frame wall geometry (author choice, no values shown on screen): wall at 40 m from the cliff edge, top 20 m above sea level; the 30° path passes it at t = 2.309 s, 26.96 m above sea level. v06 may replace the wall with its own case.
  (e) Pronunciations: "four point nine t squared minus ten t minus thirty equals zero"; "plus or minus"; "the square root of six hundred and eighty-eight".

- **Open decisions for root:**
  - **1. Cliff drawing (root).** v04 to v06 use a coded HSC exam-style cliff outline so the 30 m (and v06's 15 m) heights stay exact. Alternative: a painted cliff plate whose painted height sets the pixel scale (one plate per height, never stretched). The design recommends the coded outline (exam convention, exact geometry).
  - **2. Uphill case (learning review).** The site also states that a launch below the landing level puts the optimum above 45°. The design leaves it out to keep one direction; root may add one sentence to scene 9 (about 120 characters) if the review wants the full site statement.
  - **3. Final-frame wall (v06 designer).** The wall's position and height (author note d) are placeholders with no values on screen; v06 may replace them with its own case in its first sentence.

Main question: *A launcher on a 30 m cliff fires at 20 m s⁻¹. Which of 30°, 45° and 60° lands furthest from the cliff, and how do we find where each one lands when the landing is below the launch?*
Entry knowledge: v01 to v04; the quadratic formula.
Stops after: s_y = −h; the vertical quadratic and its positive root; R = u_x t; the three-angle comparison and why the best angle is below 45° from a height; three samples are not the optimum. No calculus.
Handoff: v06, whether a projectile clears a wall at a known horizontal position.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (which goes furthest now?)
> Here's the launcher on top of a thirty metre cliff, firing at twenty metres per second. Last time, on level ground, forty-five degrees went furthest, and thirty and sixty degrees tied. Now each ball has an extra thirty metres to fall after it comes back down to its launch level. So which of these three lands furthest from the cliff: thirty, forty-five or sixty degrees? Have a **think**.

Visual: opens on v04's final frame (see Decisions). The heading changes to "Landing below the launch level: where does it land?". On "extra thirty metres" a navy bracket draws from the launch level line down the cliff face to the sea, "30 m". On "furthest" three chips "30°", "45°", "60°" sit beside the three "?" landings. On "think" the 3 s `Countdown` ring runs.

### 2. why the shortcuts fail
> The level-ground shortcuts can't answer this. They came from setting the vertical displacement to zero, because the ball landed back at its launch level. Here, the sea is thirty metres below the launch point, so with up as positive, the vertical displacement at landing is minus thirty **metres**. Each ball reaches the launch level again just as it did on level ground, but then it keeps falling. So the flight isn't twice the time to the top any more, and the range formula doesn't **apply**. We go back to the two columns.

Visual: camera push in to 12 px per metre on the 30° path only (the other two fade to faint). On "metres" the blue column of the ledger writes "s_y = −30 m (sea below launch; up positive)" and the 30 m bracket turns navy with "−30 m". On "launch level again" the 30° ball replays in slow motion: at the moment it recrosses the dashed launch level line a teal tick marks the point with "35.3 m, 2.04 s" (its level-ground values from v04's formula, screen only), and the ball carries on down; a blue bracket "extra fall" draws from the tick to the sea. On "apply" the chips "T = 2u_y ÷ g" and "R = u² sin 2θ ÷ g" slide in and are stamped "s_y = 0 only" and struck through; the ledger's teal and blue columns brighten.

### 3. the vertical equation becomes a quadratic
> The method doesn't change: find the time from the vertical column, then carry it across. Use s equals u t plus a half a t squared, with s y equal to minus thirty. That gives minus thirty equals u y t minus four point nine t **squared**. Rearrange it, and it's a quadratic in t: four point nine t squared, minus u y t, minus thirty, equals **zero**. An equation with a t squared in it can have two answers, so we solve it with the quadratic **formula**.

Visual: calculation layout in the right column. Task strip: "Find where the ball lands". Equation strip (blue): "s_y = u_y t + ½a_y t²". Givens: blue "s_y = −30 m", "a_y = −9.8 m s⁻²", "u_y = u sin θ"; teal "u_x = u cos θ"; navy "u = 20 m s⁻¹". On "squared" `AlignedAlgebra` "−30 = u_y t − 4.9t²". On "zero" "4.9t² − u_y t − 30 = 0" with a grey tag "a t² term: up to two roots". On "formula" a grey chip "t = (−b ± √(b² − 4ac)) ÷ 2a" with "a = 4.9, b = −u_y, c = −30" mapped beneath.

### 4. worked example: thirty degrees, the time
> Let's do thirty degrees. u y is twenty sin thirty, ten metres per second, and u x is twenty cos thirty, about seventeen point three two. So the quadratic is four point nine t squared, minus ten t, minus thirty, equals zero. The formula gives t equals ten, plus or minus the square root of ten squared plus four times four point nine times thirty, all over nine point **eight**. That square root is the square root of six hundred and eighty-eight, about twenty-six point two three. So t is about three point seven zero seconds, or minus one point six six **seconds**.

Visual: the 30° givens fill: blue "u_y = 20 sin 30° = 10.0 m s⁻¹", teal "u_x = 20 cos 30° = 17.32 m s⁻¹". Rows: "4.9t² − 10.0t − 30 = 0"; on "eight" "t = (10.0 ± √(10.0² + 4 × 4.9 × 30)) ÷ 9.8 = (10.0 ± √688) ÷ 9.8"; "√688 = 26.23"; on "seconds" two branches "t = 36.23 ÷ 9.8 = 3.697 s" and "t = −16.23 ÷ 9.8 = −1.656 s". A grey one-line chip beside: "same as t = (u sin θ + √(u² sin²θ + 2gh)) ÷ g".

### 5. the negative root
> A negative time means before the launch. If you ran the same curve backwards, the ball would have been at sea level one point six six seconds before it was fired. That never happened, so we reject that root. The time of flight is three point seven zero **seconds**.

Visual: on the stage the 30° path extends backwards from the barrel tip as a grey dashed ghost, down through the cliff outline to the sea at a point to the left of the cliff, with a ghost clock "t = −1.66 s" and the tag "the same parabola, before launch: not real". The "−1.656 s" branch is struck in grey. On "seconds" the ghost fades and the "3.697 s" branch is boxed and written into the clock: "t = 3.70 s".

### 6. the range, and a check
> Now carry the time across. The range is u x times t: seventeen point three two times three point six nine seven, about sixty-four point zero **metres**. Here's a quick check. The ball rises for about one point zero two seconds, to five point one metres above the cliff top. Then it falls about thirty-five metres to the sea, which takes about two point six eight seconds. Together, that's three point seven zero seconds **again**.

Visual: the clock carries "3.697 s" along its link to the teal column. Teal row "R = u_x t = 17.32 × 3.697"; on "metres" "= 64.0 m", and a teal bracket along the sea from below the cliff edge to the landing point "64.0 m"; the 30° "?" becomes a tick. On "rises" the path splits into two coloured segments with brackets: rising "1.02 s" (to the peak, a small height bracket "5.10 m above the cliff top"); on "falls" the descent "35.1 m" bracket and "2.68 s" (grey row "√(2 × 35.1 ÷ 9.8) = 2.68 s"). On "again" a grey row "1.02 + 2.68 = 3.70 s ✓".

### 7. forty-five and sixty degrees
> The same steps work for the other two angles. At forty-five degrees, the flight lasts about four point three one seconds, and the ball lands about sixty point nine metres **out**. At sixty degrees, the ball stays up longest, about four point eight one seconds, but it lands only forty-eight point one metres from the **cliff**.

Visual: the 30° working collapses to one result row "30°: t = 3.70 s, R = 64.0 m" in a three-row table. On the first sentence the 45° path replays on the stage with its own clock; row "45°: u_y = u_x = 14.14 m s⁻¹; t = (14.14 + √788) ÷ 9.8 = 4.31 s; R = 14.14 × 4.307 = 60.9 m", written as spoken, and on "out" its "?" becomes "60.9 m". On "cliff" the 60° path replays; row "60°: u_y = 17.32, u_x = 10.0 m s⁻¹; t = (17.32 + √888) ÷ 9.8 = 4.81 s; R = 10.0 × 4.808 = 48.1 m", and its "?" becomes "48.1 m". The three landing marks sit on the sea line in order 48.1, 60.9, 64.0 m.

### 8. thirty wins: why
> So from the cliff, thirty degrees goes furthest of the three, and thirty and sixty no longer **tie**. Here's why. The extra thirty metres of fall adds time to every flight, and the flatter launches gain the most, because they come back through the launch level more **slowly**. On top of that, a flatter launch has the bigger horizontal component to spend during that extra time. So the best angle slides below forty-five **degrees**.

Visual: the scene 1 chips return; "30°" ticks and "45°" is crossed (caption "level ground only"). On "tie" the 30° and 60° landing marks ring with a red "≠" between them. On "slowly" the three paths' launch-level crossing points light with short blue arrows (the returning v_y: 10.0, 14.1, 17.3 m s⁻¹ downward, to scale), and blue "extra time" bars appear beside each: "1.66 s" (30°), "1.42 s" (45°), "1.27 s" (60°). On "horizontal component" teal u_x arrows "17.3", "14.1", "10.0 m s⁻¹" stack beside the bars. On "degrees" a grey line "extra time × u_x: biggest for the flatter launch".

### 9. three angles aren't the whole story
> Careful, though. Testing three angles doesn't prove that thirty degrees is the best possible angle. If we try many more, the range peaks at about thirty-two and a half **degrees**, a little above thirty. So from a height, the best angle is below forty-five, but you'd need more than three samples to find it **exactly**.

Visual: clear change to the range against angle graph from v04 (`DataGraph`, θ 0° to 90°, R 0 to 70 m): the level-ground curve for 20 m s⁻¹ (peak 40.8 m at 45°, symmetric) faint grey; on "Careful" three orange points at 30°, 45° and 60° (64.0, 60.9, 48.1 m). On "degrees" the cliff curve draws through them (asymmetric, peak "about 32.5°, 64.1 m"), with a dashed vertical at its peak and the level-ground peak at 45° marked for contrast. On "exactly" the 30° point is ringed with a tag "best of three samples", the peak with "best overall: about 32.5°".

### 10. two slips
> Two slips cost marks here. One is using plus thirty for the displacement, when the sea is below the launch point. The other is doubling the time to the top, as if the ground were **level**. That gives about two point zero four seconds, far too short.

Visual: chips "s_y = +30 m" and "t = 2 × 1.02 = 2.04 s" write in turn. On "level" both are crossed; under the second a tag "that's when it recrosses the launch level, not when it lands" and the scene 2 tick on the path pulses.

### 11. memory aid: down is negative, time is positive
> Here's a way to remember both: down is negative, time is positive. If the landing is below the launch point, s y is negative, and of the two roots, you keep the positive **one**.

Visual: the stage with the cliff: a navy "−30 m" bracket glows (down is negative); the quadratic's two branches return, the negative one greyed and the positive one boxed (time is positive). On "one" the handwritten line writes large above: "Down is negative, time is positive." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A ball is launched horizontally at six point zero metres per second, from five point zero metres above a level floor. Calculate its time of flight, and the horizontal distance it travels before it lands. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball is launched horizontally at 6.0 m s⁻¹ from a point 5.0 m above a level floor. Air resistance is negligible; take g = 9.8 m s⁻². Calculate (a) the time of flight and (b) the horizontal distance travelled before the ball lands." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Launched horizontally, so u y is zero, and the quadratic shrinks to minus five equals minus four point nine t squared. So t is about one point zero one **seconds**. The horizontal distance is six point zero times that, about six point one **metres**. Using plus five instead gives a negative t squared, with no real answer at all, which is your clue that the sign is **wrong**.

Visual: card shrinks to the top; "horizontally" and "5.0 m above" underline. Blue rows: "u_y = 0, s_y = −5.0 m", "−5.0 = −4.9t²"; on "seconds" "t = √(5.0 ÷ 4.9) = 1.01 s". The clock carries it across; teal row on "metres" "s_x = 6.0 × 1.010 = 6.06 m ≈ 6.1 m". On "wrong" a chip "+5.0 = −4.9t², t² = −1.02" fades in and is crossed (caption "down is negative"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A ball is launched at ten point zero metres per second, at thirty degrees above the horizontal, from a point five point zero metres above the level ground where it lands. Calculate the time it takes to land. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A ball is launched at 10.0 m s⁻¹ at 30° above the horizontal from a point 5.0 m above level ground, and lands on that ground. Air resistance is negligible; take g = 9.8 m s⁻². Calculate the time of flight." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> u y is ten sin thirty, five metres per second, and s y is minus five point zero, so four point nine t squared minus five t minus five equals zero. The quadratic formula gives about one point six four **seconds**, or minus zero point six two, which is before the launch. So the time of flight is one point six four seconds. Doubling the time to the top, about one point zero two seconds, is the slip to **avoid**.

Visual: card shrinks to the top; "5.0 m above level ground" underlines. Blue rows: "u_y = 10.0 sin 30° = 5.00 m s⁻¹; s_y = −5.0 m", "4.9t² − 5.00t − 5.0 = 0", "t = (5.00 ± √(25.0 + 98.0)) ÷ 9.8 = (5.00 ± √123) ÷ 9.8"; on "seconds" branches "1.64 s" (boxed) and "−0.621 s" (greyed, tag "before launch"). On "avoid" a chip "T = 2 × 5.00 ÷ 9.8 = 1.02 s" fades in and is crossed (caption "the ground is not level with the launch"). Hold about 1 second.

### 16. handoff
> So when the landing is lower than the launch, solve the vertical column as a quadratic, keep the positive time, then carry it across. Here, we knew the vertical displacement and found the time. Next time, we'll know a horizontal distance instead, because a wall stands partway out from the cliff. Will the ball **clear it**?

Visual: board clears to the stage at 12 px per metre: the cliff, sea level and the launcher at 30°, with the 30° trajectory in solid orange to its 64.0 m landing mark (the 45° and 60° paths removed). On "knew the vertical displacement" the "−30 m" bracket pulses and the curved carry arrow in the ledger sweeps blue to teal. On "horizontal distance" a coded wall (HSC exam style: a narrow upright rectangle with hatching) rises from the sea level line partway out (author note d), and a teal bracket along the sea from below the cliff edge to the wall's base reads "x (known)". On "clear it" a dashed vertical line rises from the wall's top to the path, a "?" sits where the path crosses the wall's line, and the ledger's carry arrow reverses direction (teal to blue) with a grey tag "this time: x known, so find t first". Chip: "Next: will a projectile clear a wall at a known horizontal position?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Landing below the launch point by h: s_y = −h (up positive). The level-ground shortcuts T = 2u_y ÷ g and R = u² sin 2θ ÷ g do not apply.
2. Vertical: −h = u_y t − 4.9t², so 4.9t² − u_y t − h = 0. Quadratic formula: t = (u_y + √(u_y² + 2gh)) ÷ g. Reject the negative root (a time before launch).
3. Then horizontal: R = u_x t.
4. From a height, the best angle is below 45°: flatter launches gain the most extra fall time and have the larger u_x. (30 m cliff, 20 m s⁻¹: 30° 64.0 m; 45° 60.9 m; 60° 48.1 m; best about 32.5°.)

Memory aid (large, on the notes screen): *Down is negative, time is positive.*

## Teaching checks

- **Does it explain causes?** Why the shortcuts fail: they assume s_y = 0 (2). Why a quadratic: s_y depends on t and t² (3). Why two roots and which is real: the same curve passes sea level before and after launch (5). Why 3.70 s: 1.02 s up, 2.68 s down a longer drop (6). Why 30° beats 45° here: the extra fall time is largest for the flatter launch, which also has the most u_x (8). Why complements no longer tie: the time aloft no longer scales with u_y alone (8). Why three samples aren't the optimum: the curve peaks between samples (9).
- **Misconceptions addressed:** 45° always maximises range (1, 8, crossed); complementary angles always tie (8); s_y = +h or 0 (10, crossed; 13, crossed); doubling t_up (10, crossed; 15, crossed); keeping or puzzling over the negative root (5); three samples locate the optimum (9).
- **One idea at a time:** the failure (2) before the method (3); one angle in full (4 to 6) before the others' results (7); comparison (8) before the optimum caveat (9).
- **Video makes it easier:** the student sees each path recross the launch level exactly where v04 predicted and keep falling (2), sees the curve run backwards to a sea-level point before launch (5), and sees the asymmetric cliff curve peak below 45° beside the symmetric level-ground curve (9).
- **Response opportunity:** one 3 s prediction (1) and two unseen HSC-style tasks with every condition visible (heights, "horizontally"/angle "above the horizontal", lands "on that ground"/"level floor", g, negligible air resistance), 10 s each; nothing answer-bearing. Feedback about 27 s and 30 s.
- **Avoided double teaching:** the quadratic formula recalled as a grey chip (3); components, T and R from v02 to v04 recalled in a clause.
- **Syllabus coverage:** `P5-IQ1-02` launch height related to time of flight and horizontal range, with launch angle and initial velocity (2 to 9); `P5-IQ1-04` the equations of motion applied with a quadratic to predict a landing point (3 to 7, attempts).
- **Out of scope by design:** calculus optimisation (route: deferred); uphill landings; landing velocity from a height; obstacles at a known x (v06).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks).** "A ball is launched horizontally at 6.0 m s⁻¹ from a point 5.0 m above a level floor. Air resistance is negligible; take g = 9.8 m s⁻². Calculate (a) the time of flight and (b) the horizontal distance travelled before the ball lands."
Model answer: Up positive. (a) u_y = 0, s_y = −5.0 m: −5.0 = −4.9t², t = √(5.0/4.9) = 1.01 s. (b) s_x = u_x t = 6.0 × 1.010 = 6.1 m. Classic mistake (crossed): s_y = +5.0 m (gives t² < 0).

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "A ball is launched at 10.0 m s⁻¹ at 30° above the horizontal from a point 5.0 m above level ground, and lands on that ground. Air resistance is negligible; take g = 9.8 m s⁻². Calculate the time of flight."
Model answer: u_y = 10.0 sin 30° = 5.00 m s⁻¹; s_y = −5.0 m. −5.0 = 5.00t − 4.9t², so 4.9t² − 5.00t − 5.0 = 0; t = (5.00 ± √(25.0 + 98.0))/9.8 = (5.00 ± 11.09)/9.8, so t = 1.64 s or −0.621 s. The negative root is before launch, so the time of flight is 1.64 s. Classic mistake (crossed): T = 2u_y/g = 1.02 s (assumes equal levels).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Case (site worked example 3) | 30 m cliff; 20 m s⁻¹; s_y = −30 m | 1 to 11, 16 |
| 30° | u_y = 10.0, u_x = 17.32 m s⁻¹; 4 × 4.9 × 30 = 588; √688 = 26.23; t = 36.23/9.8 = 3.697 ≈ 3.70 s; negative root −1.656 ≈ −1.66 s; R = 17.32 × 3.697 = 64.0 m | 4, 5, 6, 7, 8, 9 |
| Check | rise 1.020 s to 5.10 m above the cliff top; fall 35.10 m in 2.677 s; total 3.697 s | 6 |
| Level-ground crossing (30°) | 35.3 m at 2.04 s (screen only) | 2, 10 |
| 45° | u_y = u_x = 14.14 m s⁻¹; √788 = 28.07; t = 4.307 ≈ 4.31 s; R = 60.9 m | 7, 8, 9 |
| 60° | u_y = 17.32, u_x = 10.0 m s⁻¹; √888 = 29.80; t = 4.808 ≈ 4.81 s; R = 48.1 m | 7, 8, 9 |
| Extra fall time | 1.66 s (30°), 1.42 s (45°), 1.27 s (60°) (screen only) | 8 |
| Optimum | about 32.5° (32.47°), R = 64.1 m; level-ground peak 40.8 m at 45° (screen) | 9 |
| Trap | 2 × 1.02 = 2.04 s (crossed) | 10 |
| A1 | 6.0 m s⁻¹, 5.0 m: t = 1.010 ≈ 1.01 s; s_x = 6.06 ≈ 6.1 m; crossed t² = −1.02 | 12, 13 |
| A2 | 10.0 m s⁻¹ at 30°, 5.0 m: u_y = 5.00; √123 = 11.09; t = 1.64 s; −0.621 s rejected; crossed 1.02 s | 14, 15 |
| Final-frame wall | 40 m from the cliff edge, top 20 m above sea level (no values on screen) | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 30°: disc = 10² + 2 × 9.8 × 30 = 688; √688 = 26.229754; t = 36.229754/9.8 = 3.696914 s; t₋ = −16.229754/9.8 = −1.656097 s; R = 17.320508 × 3.696914 = 64.032423 m.
- 45°: u_y = 14.142136; disc = 200 + 588 = 788; √788 = 28.071338; t = 4.307497 s; R = 60.917211 m.
- 60°: u_y = 17.320508; disc = 300 + 588 = 888; √888 = 29.799329; t = 4.808147 s; R = 48.081466 m.
- Check: t_up = 10/9.8 = 1.020408 s; H above the cliff top = 100/19.6 = 5.102041 m; fall 35.102041 m: √(2 × 35.102041/9.8) = 2.676506 s; total 3.696914 s.
- Extra fall time below the launch level: 1.656097, 1.421347, 1.273349 s.
- Level-ground values at 20 m s⁻¹, 30°: R = 400 sin 60°/9.8 = 35.347976 m; T = 2.040816 s. Level-ground maximum 400/9.8 = 40.816327 m.
- Optimum by 0.01° scan: 32.47°, R = 64.147892 m.
- A1: √(5.0/4.9) = 1.010153 s; 6.0 × 1.010153 = 6.060915 m; with +5.0: t² = −1.020408.
- A2: disc = 25 + 98 = 123; √123 = 11.090537; t = 16.090537/9.8 = 1.641891 s; t₋ = −0.621483 s; 2 × 5.00/9.8 = 1.020408 s.
- Final-frame wall check: t = 40/17.320508 = 2.309401 s; s_y = 10 × 2.309401 − 4.9 × 2.309401² = −3.039323 m; height above sea 26.96 m.

## Memory aid check

- **"Down is negative, time is positive."** Written for this lesson. Meaning, as said in scene 11: with up positive, a landing below the launch point has a negative vertical displacement (s_y = −h); of the quadratic's two roots, the flight time is the positive one. Assumptions checked: true with the up-positive convention used throughout v01 to v05 (stated on screen with "up positive"); a student who chooses down positive must flip every sign consistently, and the aid's first half then reads "down is positive", so the convention is printed beside the aid in the key notes. The positive root is the physical one for any launch from above the landing level (the product of the roots, −h/4.9, is negative, so exactly one root is positive). It helps a new case: A1 (the +5 slip) and A2 (the negative root). Introduced after the method and the slips (3 to 10).
- **Considered, not used:** "Cliffs break the shortcuts" (true, but doesn't guide the working); "Quadratic, positive, across" (a procedure list, no reason).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **5,711 characters**, 17 scenes. Characters per scene (1 to 17): 385, 517, 440, 558, 261, 422, 319, 422, 312, 246, 174, 236, 365, 239, 404, 320, 75. At 13.3 characters per second the speech is about 429 s; add 3 s for the prediction countdown, about 7 s of settling for the slow-motion replays in scenes 2 and 7 and the backwards ghost in scene 5, about 2 s for the curve in scene 9, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 93 s of holds and countdowns): **about 522 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 6's check (keep it on screen, silent); scene 10's last sentence; scene 2's last sentence.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; at 12 px per metre on both axes, a coded HSC-style cliff outline at the left (flat top, vertical hatched face) 30 m above a coded sea-level line; the launcher plate (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`) on the cliff edge with its barrel at 30° and the readout "u = 20 m s⁻¹, θ = 30°"; the 30° trajectory in solid orange from the barrel tip to its landing mark on the sea line, with the teal bracket "64.0 m" along the sea and the navy bracket "−30 m" down the cliff face. A coded wall (narrow upright hatched rectangle, HSC exam style) stands on the sea-level line 40 m out from the cliff edge, its top 20 m above sea level (geometry from author note d; no height or distance values printed). A teal bracket along the sea from below the cliff edge to the wall's base reads "x (known)"; a dashed vertical line rises from the wall's top to the trajectory, with a "?" where the path crosses that line. The ledger small at the top right (teal and blue columns, clock) with the curved carry arrow pointing from teal to blue and the grey tag "this time: x known, so find t first". The steel ball rests at the barrel tip. Heading top-left: "Landing below the launch level: where does it land?"; chip "Next: will a projectile clear a wall at a known horizontal position?". v06 opens on this frame; its designer may clear the wall and the 30 m cliff to v06's own case (18 m s⁻¹ at 35°, 15 m cliff, wall 25 m out and 8 m high) in its first sentence.

## Scene list and build ids

Lesson key `p-y12-m5-v05` (route phys-y12-m5-v05). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v05` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v05` (root to confirm).

In order (17 scene headings): hook, shortcuts-fail, quadratic, worked-thirty-time, negative-root, range-and-check, forty-five-and-sixty, why-thirty-wins, three-samples, two-slips, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: strobe stage with launch height and three clocks, ledger (v01 kit gaps 1, 2), launch-level crossing ticks, backwards ghost path, split rise-and-fall brackets, range against angle curves (`DataGraph`), `AlignedAlgebra` with ± branches, `NumberTicker`, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`, `CameraStage` push. Transitions: v04's final frame continues into scene 1 (camera continue), then camera push to 12 px per metre in scene 2; 2 to 3 camera continue (working builds at the right); 3 to 4 to 5 to 6 camera continue; 6 to 7 camera continue (table forms); 7 to 8 camera continue; 8 to 9 clear change to the graph; 9 to 10 camera continue; 10 to 11 clear change back to the cliff; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), attempt-1, attempt-2 (10 s countdown after the speech), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v05-learning-review.md`, `science_check` = `checks/p-y12-m5-v05-physics-check.md`.

## Assets

Have (uniform scaling only, never stretched):
- `public/assets/physics/phys-y11-steel-ball-v1.png`: scenes 1, 2, 5 to 7, 16.
- `public/assets/physics/y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png` (requested in v02; not yet painted): scenes 1 to 9, 11, 16.

Need (new plates): none.

Coded: cliff outline and hatching, sea-level line, launch-level line, wall (HSC exam style), strobe images, arrows, brackets, ghost path, clocks, range curves, ledger, calculation strips, crossed chips, attempt cards, countdowns, key notes board.

Kit gaps: none new beyond v01 kit gaps 1 and 2. The strobe stage must accept a launch height and report the launch-level crossing time and position, and extend a path to negative time as a ghost.

## Codex asset brief

No new plates. Uses the v02 launcher plate.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: s_y = −h with up positive; the quadratic and its positive root; the negative root's meaning; R = u_x t; each path recrosses the launch level at its level-ground range and time; the extra fall time is largest for the flattest launch; the best angle from a height is below 45° and the continuous optimum here is about 32.5°; complementary angles do not give equal ranges from a height.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition (heights, "horizontally"/angle "above the horizontal", landing surface, g, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Projectile from a Cliff: Landing Time with the Quadratic Formula | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson02.sa.html

A launcher on a 30 m cliff fires a ball at 20 m/s. Does 45° still go furthest? See why the level-ground shortcuts fail when the landing is below the launch, how the vertical motion becomes a quadratic in time, why we keep the positive root and what the negative root means, and why from a height the best launch angle drops below 45°. Worked example at 30°, 45° and 60°, and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
"solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: range and complementary angles. Next: will a projectile clear a wall?

#HSCPhysics #Physics #ProjectileMotion #HSCScience

