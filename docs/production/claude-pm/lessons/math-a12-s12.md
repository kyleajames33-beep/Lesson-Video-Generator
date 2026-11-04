# Maths A12 S12: How do probabilities determine an unknown normal mean or spread? Area to z by a reverse table look-up, then z to the unknown μ or σ, with the direction of each change and of the rounding (design)

Status: Revision 2 (4 Nov 2026), brief 162 repairs applied; needs the Codex error check. Previously Revision 1 (3 Nov 2026), overnight queue wave I5. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`), `AreaFill` (with s09's open ends), the s09 to s11 parts (`NormalCurve` with `bands` and `matchMarks`, `TailMirror`, `SigmaRuler`, `ZTable`) and the additions under "Codex asset brief" (`ZTable` reverse mode, `NormalCurve` `tailTarget` dial). Nothing recorded; human listening pending.

Narration 5,352 characters, 15 scenes, about 504 s (8.4 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: twelfth and last video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 64), after s11 (z-scores and tables). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with `math-a12-s07.md` to `math-a12-s11.md` as the nearest strand templates. Maths visuals are coded; the bottle plate from s09 returns small; one new small plate (a plain cereal box) carries scene 7's context. No people. Pre-design pack: none, so this design does the pack work itself. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson03.sa.html` (Normal Distribution Applications), SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`, and `lesson02.sa.html` (The Normal Distribution; its Q3(c) supplies scene 6), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s12` ("How do probabilities determine an unknown normal mean or spread?", one syllabus action, site source lesson 3, no coverage gaps).

Owner rules applied: as s07 to s11 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded, objects painted; no people; one reasoning stage at a time; worked examples as separate task, model and grouped givens; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Binding root decisions: exact working in the algebra (z = (490 − μ)/8 solved line by line), table values to 4 dp; the strand's rounding convention (root decision 50: "round up to be sure of reaching the target"), here extended to "round in the safe direction" (up for a minimum mean, down for a maximum σ); attempt cards give nothing away (each supplies a distractor table value); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cib1892b99`: "Solve problems involving finding the mean or standard deviation of a normal random variable given the probability of an event less or more extreme than a given outcome"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s11's handoff frame (the fills' bell with 490 marked, the left tail shaded "1%", "σ = 8", "μ = ?" with a ghost arrow pointing right, chip "Next: finding μ or σ from a probability"; `math-a12-s11.md` scene 14). Explains why a tail area fixes a z (every normal is the same curve in σ units, s10 and s11); finds z for a left area of 0.01 by searching the table body (0.9901 at 2.33) and choosing the sign from the side; solves (490 − μ)/8 = −2.33 for μ = 508.64 mL, with the direction (raising μ shrinks the tail) and the forward check (0.0099); finds σ from the empirical rule (site lesson 2 Q3(c): bolts within 1 mm of 50 mm, about 0.3% rejected, σ = 1/3 mm); finds a maximum σ from the table (site lesson 3 Q3(a): cereal boxes, at least 375 g, μ = 380 g, under 0.5% underweight, σ ≈ 1.94, so 1.9 g) with the safe rounding direction checked both ways, then the same condition met by moving μ instead (σ = 2 g gives μ = 380.15 g) (`cib1892b99`). Stops at one unknown, μ or σ. Not taught: two unknowns from two conditions (simultaneous equations; practice video), finding a value from a probability as a separate question type (used only inside the method), calculator inverse-normal functions (grey readouts only).

## Decisions

- **Learner question kept (outline).** "How do probabilities determine an unknown normal mean or spread?" The answer, built in order: the probability fixes how many σ the cut-off sits from the mean, which is a z (2); the table, read backwards, gives that z, and the side gives its sign (3); z = (x − μ)/σ then has one unknown (4); the direction of the change and of the rounding is checked against the picture (5); with the empirical rule, the same reasoning sets σ from a whole-σ percentage (6); with the table, it sets a maximum σ (7).
- **Hook (continuity).** s11's frame: "μ = ?" with the arrow. "Until now we knew μ and σ and found the probability. This time the probability is fixed."
- **Why a probability fixes z (the cause).** s10's "measured in sigmas, every normal curve is the same curve" and s11's standardising: a left tail of 1% always ends at the same number of σ below the mean, whatever μ is. `NormalCurve` `tailTarget` (new): the bell slides right with σ fixed while the tail area readout falls from 0.1056 (μ = 500, s11's value) towards 0.01; the σ-ruler (`SigmaRuler`) shows the gap from 490 to μ growing from 1.25σ; at 1% it reads about 2.33σ.
- **Reverse look-up (`ZTable` reverse mode).** The table gives left areas for z ≥ 0 (s11's "the table looks left"). A left area of 0.01 sits left of a negative z; its mirror is a right tail of 0.01 above +z, which is a left area of 0.99. Search the table body for 0.99: 0.9898 at 2.32, 0.9901 at 2.33; 0.9901 is nearer, so z ≈ 2.33, and the cut-off is below the mean, so z = −2.33. (Site lesson 3 card 02 lists "z₉₉% ≈ 2.33" as a value to memorise; the video finds it instead.)
- **Unknown mean (fills; site lesson 3's hook machine, new target).** z = (x − μ)/σ: −2.33 = (490 − μ)/8; 490 − μ = −18.64; μ = 508.64 mL. Meaning: "490 must sit 2.33 standard deviations, 18.64 mL, below the mean." Forward check: (490 − 508.64)/8 = −2.33, tail 1 − 0.9901 = 0.0099, under 1%. Direction: a higher mean moves the bell away from 490 and shrinks the tail, so "at least 508.64 mL" (round up, root decision 50's convention), grey readout "app: 508.61 (z not rounded)".
- **Unknown σ, empirical rule (site lesson 2 Q3(c), numbers unchanged: bolts N(50, 0.5²), rejected if more than 1 mm from 50 mm, target about 0.3% rejected).** 0.3% outside means 99.7% inside, which is ±3σ (s10), so the limits 49 and 51 must be μ ± 3σ: 3σ = 1, σ = 1/3 mm (≈ 0.33 mm). Cause, shown: shrinking σ from 0.5 to 1/3 squeezes the bell so the tails beyond 49 and 51 shrink from about 5% to about 0.3%. The site's answer "σ_new = 1/3 ≈ 0.33 mm" is kept.
- **Unknown σ, table (site lesson 3 Q3(a), numbers unchanged: cereal "at least 375 g", μ = 380 g, fewer than 0.5% underweight, find the maximum σ to 1 dp).** Left area 0.005 mirrors to 0.995: 0.9949 at 2.57 and 0.9951 at 2.58, exactly halfway, so z ≈ −2.575 (site: −2.576 from technology, grey readout). (375 − 380)/σ = −2.575, so σ = 5/2.575 ≈ 1.94 g. Safe rounding: a bigger σ spreads more boxes below 375, so the maximum rounds down: σ = 1.9 g. Check both ways (grey readouts from the table): σ = 1.9 gives z ≈ −2.63, tail 1 − 0.9957 = 0.0043 (passes); σ = 2.0 gives z = −2.5, tail 1 − 0.9938 = 0.0062 (fails, the site's part (b) value for μ = 385, σ = 4 is the same z and is not used).
- **Two levers (site lesson 3 Q3's setting comparison, as a reason, not a cost problem).** Keeping σ = 2 g instead, the same condition needs μ = 375 + 2.575 × 2 = 380.15, just short (tail 0.00501), so 380.16 g after rounding up (Revision 2; grey readout "app: 380.152; round up"). One sentence links the two answers: move the mean away from the limit, or shrink the spread; which is chosen depends on cost. The site's cost figures are not used (site correction 2).
- **Attempts (original).** (A1) "The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803." 0.98 is nearer 0.9798, z = −2.05; (1000 − μ)/3 = −2.05; μ = 1006.15 g. Crossed: "μ = 1000 − 2.05 × 3 = 993.85" (puts the mean below the cut-off, so most bags would be light). (A2) "The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599." Right tail 0.04, left area 0.96, z = 1.75 (positive: 57 is above the mean); 7/σ = 1.75, σ = 4 hours. Crossed: "z = −1.75, so σ = −4" (wrong side; a standard deviation can't be negative). Each card's second table value is a distractor, so neither card gives the answer away; neither shows a curve or shading.
- **Mistake scene:** none separate. "Use the probability as the z" (2, 3); "the table has 0.01 in it" (3); "the sign doesn't matter" (4; A2 crossed); "subtract zσ from the cut-off" (A1 crossed); "round the maximum σ to the nearest" (7: rounding up fails).
- **Memory aid.** "Area to z, then z to the unknown." See "Memory aid check".
- **Handoff (outline next in playlist order: `math-a12-g01`, a differentiation practice video; this is the strand's last video).** Scene 14: the fills' bell now centred at 508.64 with the 1% tail at 490, and three small tool chips across the top (the s10 bands "68, 95, 99.7", s11's "z = (x − μ)/σ", s12's "area → z → unknown"), chip "Later: mixed practice". The spoken line stays true in any playlist position ("That's the last of the normal distribution videos"; root decision 4). This is the final frame.
- **Site sources used:** lesson 3 card 02 (forward and inverse operations; "Inverse: probability → value. Look up z first, then un-standardise: x = μ + zσ"; key z-values 2.33), card 04 (inverse normal term), problem 2 (the reverse look-up idea; its 90% wording is logged as site item 19, not used), Q3(a) (cereal: 375 g, μ = 380, under 0.5%, σ = 5/2.576 ≈ 1.9 g), the hook machine (500 mL, σ = 8, 490 mL); lesson 2 Q3(c) (bolts N(50, 0.5²), 1 mm, 0.3%, σ = 1/3). Not used: problem 3's percentile and Q2(c), Q3(b) and (c) (cost comparison), IQ contexts.
- **Site corrections (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Lesson 3 card 02: "Every normal distribution question is one of two types and only two." The lesson's own Q3(a) is a third type, finding σ from a probability (`cib1892b99`), as is finding μ. Suggested: "Most normal distribution questions are one of two types; a third works backwards to μ or σ." (2) Lesson 3 Q3(c): "Manufacturing cost increases 3% per extra gram of mean fill" with the answer's "($380 base)" gives no base cost, so the comparison can't be evaluated as worded. Suggested: give a base cost per box, or ask only which setting meets the requirement with the smaller mean. (3) Lesson 3 Q3(a)'s answer "σ = 5/2.576 ≈ 1.9 g" is correct but does not say why 1.94 rounds to 1.9 (a maximum must not be exceeded); suggested addition: "(round down, since a larger σ would exceed 0.5%)".
- **Cause chain taught, in order:** (1) now the probability is known and μ is not (1); (2) a tail area fixes the cut-off's distance from the mean in σ, so it fixes z (2); (3) the table, read backwards with the mirror, gives that z, and the side gives the sign (3); (4) z = (x − μ)/σ then has one unknown (4); (5) the picture decides the direction of the answer and of the rounding, and a forward check confirms it (5); (6) a whole-σ percentage sets σ through the empirical rule (6); (7) a table z sets a maximum σ, rounded down to stay safe (7); (8) the same condition can be met by moving μ or shrinking σ (8); (9) memory aid (9).
- **Entry knowledge (draft route `entryKnowledge`):** s11 (z = (x − μ)/σ with sign; Z ∼ N(0, 1); P(Z < z) tables for z ≥ 0; the mirror rule for negative z; complements); s10 (empirical rule; every normal curve is the same in σ units); s09 (X ∼ N(μ, σ²), σ = √variance); Year 11 (solving linear equations).
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s12`; playlistOrder 64; mainLearnerQuestion as above; syllabusActionIds `cib1892b99`; prerequisiteVideos `math-a12-s10`, `math-a12-s11`; sourceLessons `random-variables/lesson03.sa.html`, `random-variables/lesson02.sa.html` (Q3(c) only; SHAs above); startBoundary "From s11's frame: 1% below 490 with σ = 8, μ = ?"; stopBoundary "Why a probability fixes z; reverse table look-up with the sign from the side; unknown μ (fills); unknown σ by the empirical rule (bolts) and by the table (cereal, maximum σ rounded down); direction and forward checks. One unknown only; no simultaneous equations."; nextHandoff "Strand complete; later practice videos mix these skills (playlist next: math-a12-g01)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** the bell sliding right while the tail readout falls to 1% and the σ-ruler from 490 to μ lengthens (`NormalCurve` `tailTarget`, new, with `SigmaRuler`); the table body scanned for 0.99 with the two nearest entries highlighted (`ZTable` reverse mode, new); the mirror from the 0.99 left area to the 0.01 tail (`TailMirror`); the solving lines one at a time; the bolts' bell squeezing from σ = 0.5 to 1/3 while its outside tails shrink inside the 49 and 51 limits (`NormalCurve` σ animation with `bands`); the cereal tail at σ = 1.9 against σ = 2.0 (two ghost bells, pass and fail tags); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`. Painted plates: the bottle (s09) and a new plain cereal box, both small.
- **Board layout (constant):** as s09 to s11: heading top-left; graph on the left (about 1,000 × 520 px); the table excerpt, model, givens and solving lines in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Fills: σ = 8, cut-off 490. μ = 500: tail Φ(−1.25) = 0.1056 (s11). Target 0.01: exact z = −2.326348, μ = 490 + 2.326348 × 8 = 508.6108; table z = −2.33, μ = 490 + 18.64 = 508.64. Check Φ(−2.33): table 1 − 0.9901 = 0.0099 (exact 0.009903).
  (b) Table entries (4 dp): Φ(2.32) = 0.9898, Φ(2.33) = 0.9901, Φ(2.57) = 0.9949, Φ(2.58) = 0.9951, Φ(2.63) = 0.9957, Φ(2.50) = 0.9938, Φ(2.05) = 0.9798, Φ(2.06) = 0.9803, Φ(1.41) = 0.9207, Φ(1.75) = 0.9599, Φ(2.00) = 0.9772.
  (c) Bolts (site lesson 2 Q3): N(50, 0.5²); limits 49 and 51 are ±2σ now: outside ≈ 5% (exact 4.55%); target 0.3%: 3σ = 1, σ = 1/3 = 0.333 mm; outside then 2Φ(−3) = 0.0027.
  (d) Cereal (site lesson 3 Q3(a)): 375 g, μ = 380; left area 0.005: exact z = −2.575829; table halfway between 2.57 and 2.58: 2.575; σ = 5/2.575 = 1.9417 (site 5/2.576 = 1.9410); maximum to 1 dp: 1.9 g. Checks: σ = 1.9: z = −5/1.9 = −2.6316, exact tail 0.00425, table at 2.63: 1 − 0.9957 = 0.0043; σ = 2.0: z = −2.5, 1 − 0.9938 = 0.0062 (exact 0.00621).
  (d2) Two levers: σ = 2, z = −2.575: μ = 375 + 5.15 = 380.15 g (exact z: 375 + 2.575829 × 2 = 380.1517).
  (e) A1: N(μ, 9), σ = 3; left area 0.02 mirrors to 0.98: |0.9798 − 0.98| = 0.0002 < |0.9803 − 0.98| = 0.0003, so z = −2.05 (exact −2.0537); μ = 1000 + 2.05 × 3 = 1006.15 g (exact 1006.16). Crossed 1000 − 6.15 = 993.85.
  (f) A2: right tail 0.04, left area 0.96; Φ(1.75) = 0.9599 (exact z 1.7507); σ = 7/1.75 = 4 hours. Distractor 0.9207 (z = 1.41, left area 0.92, a doubled tail). Crossed z = −1.75, σ = −4.
  (g) Pronunciations: "zed"; "zero point nine nine zero one"; "five hundred and eight point six four"; "one third of a millimetre"; "two point five seven five".

Main question: *The company wants only 1% of bottles under 490 mL. Where must it set the mean, and how can a probability set the spread instead?*
Entry knowledge (s10, s11): the empirical rule, z-scores, P(Z < z) tables, the mirror rule.
Stops after: one unknown μ or σ, by the table or the empirical rule, with direction and rounding checks.
Handoff: strand complete; later practice videos.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s11: normal curves teal; shaded probabilities `AREA_POS`; μ markers, σ-steps and z-values amber (`MATH_ACCENT`); table highlights amber; mirror lifts blue; pass tags green, fail tags red; crossed red; algebra ink, current line bright, earlier lines dim. Speech says "zed"; screen writes "z".

### 1. hook (working backwards)
> Last video ended with this question. Until now, we've known the mean and the standard deviation, and found a probability. This time the probability is fixed. Only one percent of bottles can be under four ninety, sigma stays at eight, and the mean is the **unknown**. Where must the machine be **set**?

Visual: opens on s11's last frame exactly (the fills' bell, 490 marked, the left tail shaded "1%", chip "σ = 8", "μ = ?" with a ghost arrow pointing right, chip "Next: finding μ or σ from a probability"). Heading writes on: "Finding μ or σ". On "unknown" a small two-way strip appears top right: "μ, σ → probability" (s11, grey) above "probability → μ or σ" (bright). On "set" the chip moves to the top right as "Where must μ be set?"; the bottle plate stands small at the top right.

### 2. a probability fixes zed
> Here's the key idea. Slide the bell to the right, and four ninety ends up further out in the tail, so the tail gets **smaller**. At a mean of five hundred, the tail was zero point one zero five six. Keep sliding, and at some point it's exactly one **percent**. In sigmas, every normal curve is the same curve. So a one percent tail always ends the same number of sigmas below the mean, whatever the mean is. That number is a zed score. So the job is to find the zed first, then the **mean**.

Visual: camera continue. On "smaller" `NormalCurve` `tailTarget`: the bell slides right with σ fixed, the tail beyond 490 thinning, its readout falling "0.1056" (grey "s11", at μ = 500) towards "0.01". `SigmaRuler` from 490 to μ lengthens: "1.25σ" at the start. On "percent" the slide stops with the readout "0.01"; the ruler reads "? σ". On "same curve" a ghost standard normal beside it with its own 1% tail ending at "z = ?". On "mean" two boxes in the right column: "1. area → z", "2. z → μ".

### 3. reading the table backwards
> The table gives areas to the left, for positive zeds. A one percent tail on the left mirrors a one percent tail on the right. And a right tail of one percent means ninety-nine percent to the left. So search inside the table for zero point nine **nine**. At two point three two it's zero point nine eight nine eight, and at two point three three it's zero point nine nine zero **one**. Zero point nine nine zero one is closer, so zed is about two point three three. Four ninety is below the mean, so zed is negative: minus two point three **three**.

Visual: clear change. Right column: `ZTable` excerpt (rows 2.2 to 2.4 bright, others faint). Left: a small standard normal. On "mirrors" `TailMirror` lifts the 0.01 left tail onto the right; on "left" the region left of +z shades, label "0.99". On "nine" (first) `ZTable` reverse mode scans the body, target chip "0.9900"; on "one" the entries "0.9898" (2.32) and "0.9901" (2.33) highlight, with grey gaps "0.0002" and "0.0001". On "closer" "0.9901" boxes, row "P(Z < 2.33) ≈ 0.99". On "three" (last) the mark on the small curve flips to the left side, boxed "z = −2.33", tag "below the mean, so negative".

### 4. solving for the mean
> Now put it into the zed score formula. Zed is x minus mu, over sigma, so minus two point three three equals four ninety minus mu, all over **eight**. Multiply by eight: four ninety minus mu is minus eighteen point six **four**. So mu is five hundred and eight point six four **millilitres**. In words, four ninety has to sit two point three three standard deviations, eighteen point six four millilitres, below the **mean**.

Visual: clear change back to the fills' bell. Task strip top: "Find μ so that P(X < 490) = 0.01." Right column: model "X ∼ N(μ, 64)" with grouped givens "x = 490 mL", "σ = 8 mL", "z = −2.33" (from scene 3, carried as a chip). On "eight" row "−2.33 = (490 − μ)/8"; on "four" "490 − μ = −2.33 × 8 = −18.64" (the previous line dims); on "millilitres" "μ = 490 + 18.64 = 508.64 mL", boxed. On "mean" the bell slides to centre 508.64; `SigmaRuler` from 490 to μ reads "2.33σ = 18.64 mL", the tail readout "≈ 0.01".

### 5. checking the direction
> Check it forwards. Four ninety minus five oh eight point six four, over eight, is minus two point three three, and the tail is one minus zero point nine nine zero one, zero point zero zero nine **nine**. That's just under one percent. And the picture agrees: a higher mean moves the bell away from four ninety, so the tail **shrinks**. So, using the table's zed, a setting of five hundred and eight point six four is safe. If you round, round **up**.

Visual: camera continue. On "nine" rows "z = (490 − 508.64)/8 = −2.33", "P(X < 490) = 1 − 0.9901 = 0.0099 < 0.01 ✓". On "shrinks" the bell nudges a little right (tail thinner, tag "higher μ: smaller tail") and a little left (tail thicker, red tag "lower μ: more than 1%"), then returns. On "up" boxed "set μ = 508.64 mL (table z)", chip "round up to be sure of reaching the target" (root decision 50), grey readout "app: 508.61 (z not rounded), the exact boundary". (Revision 2: 508.64 is a safe table-based setting, not the lowest safe mean; the false "any mean below this" sentence is cut.)

### 6. the spread from the empirical rule
> The spread can be the unknown instead. Bolts are made with a mean length of fifty millimetres, and a bolt is rejected if it's more than one millimetre from fifty. Right now sigma is zero point five, so the limits sit at two sigma, and about five percent are **rejected**. The maker wants that down to about zero point three percent. That means ninety-nine point seven percent inside, which is three **sigma**. So the one millimetre limits must be three standard deviations from the mean. Three sigma equals one, so sigma is one third of a **millimetre**. Shrinking sigma squeezes the bell, and the tails pull inside the **limits**.

Visual: clear change. Task strip "Bolts: find σ so that about 0.3% are rejected." Model "X ∼ N(50, σ²)" with grouped givens "μ = 50 mm", "limits 49 mm and 51 mm", "rejected: about 0.3%". Left: the bolts' bell at σ = 0.5 with limits at 49 and 51 drawn as solid red lines. On "rejected" the two outside tails shade, tags "2σ", readout "about 5%". On "sigma" (first) `NormalCurve` `bands` show "99.7%" within ±3σ, row "0.3% outside, so 99.7% inside: μ ± 3σ". On "millimetre" rows "3σ = 1", "σ = 1/3 mm ≈ 0.33 mm", boxed (site lesson 2 Q3(c)). On "limits" the bell squeezes from σ = 0.5 to σ = 1/3 (taller, narrower, area fixed), its ±3σ marks moving out to meet 49 and 51 exactly; the outside tails thin to a readout "about 0.3%".

### 7. a maximum spread from the table
> When the percentage isn't on a whole sigma, use the table. Cereal boxes must hold at least three seventy-five grams. The mean is three eighty, and fewer than zero point five percent can be **underweight**. What's the largest sigma allowed? A left tail of zero point zero zero five mirrors to zero point nine nine five to the left. The table gives zero point nine nine four nine at two point five seven, and zero point nine nine five one at two point five eight, so zed is about minus two point five seven **five**. Then five over sigma is two point five seven five, so sigma is about one point nine four **grams**. To one decimal place, round down to one point nine. Round up to two, and the tail grows to about zero point six percent, which **fails**.

Visual: clear change. Task strip "Cereal: find the maximum σ, to 1 decimal place." The cereal box plate small at the top right. Model "X ∼ N(380, σ²)" with grouped givens "cut-off 375 g", "μ = 380 g", "P(X < 375) < 0.005". Left: a bell at 380 with 375 marked. On "underweight" the left tail shades, label "< 0.5%". On "five" (first) `ZTable` reverse mode highlights "0.9949" (2.57) and "0.9951" (2.58) around the target "0.9950", grey "halfway"; boxed "z ≈ −2.575", grey readout "app: −2.576". On "grams" rows "(375 − 380)/σ = −2.575", "σ = 5/2.575 ≈ 1.94 g". On "one point nine" boxed "σ ≤ 1.9 g (round down)". On "fails" two ghost bells: σ = 1.9 with tail readout "≈ 0.43%" and a green "passes" tag, σ = 2.0 with "≈ 0.62%" and a red "fails" tag (grey "z = −2.5: 1 − 0.9938").

### 8. two levers for one condition
> So there are two levers for the same condition. Keep sigma at two grams instead, and the mean has to move up. Three seventy-five minus mu, over two, is minus two point five seven five, so mu is three seventy-five plus five point one five, which is three hundred and eighty point one five. That's just short, so round up to three hundred and eighty point one six **grams**. Either move the mean away from the limit, or shrink the **spread**.

Visual: camera continue on the cereal bell. Two small panels side by side under the task strip "Under 0.5% below 375 g: two ways". Left panel "move μ": a bell with σ = 2 sliding right from 380; row "(375 − μ)/2 = −2.575", row "μ = 375 + 5.15 = 380.15", grey readout "app: 380.152 (z not rounded), so 380.15 is just short"; on "grams" boxed "round up: μ = 380.16 g" (tail 0.0049). Right panel "shrink σ": scene 7's bell at μ = 380 squeezing to σ = 1.9, boxed "σ ≤ 1.9 g". On "spread" both tails read "< 0.5%" with green ticks. (Revision 2: the cost sentence and its chip are cut to fund the round-up; at 380.15 the tail is 0.00501, over the limit.)

### 9. memory aid
> Here's a way to remember the method. Area to zed, then zed to the unknown. Find the zed from the probability first, then solve for the mean or sigma, and check the direction on a sketch.

Visual: camera pull back to the fills' bell at 508.64 with its 1% tail. The handwritten words write large: "Area to z, then z to the unknown." Under them two arrows: "area → z (table backwards, sign from the side)" and "z → μ or σ (z = (x − μ)/σ)". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the mean. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no shading, no z).

### 11. feedback 1 (brief)
> Two percent on the left mirrors to zero point nine eight, and zero point nine seven nine eight is closer, so zed is minus two point oh five, negative because a thousand grams is below the **mean**. Sigma is three, so mu is a thousand plus six point one **five**, about one thousand and six point one five **grams**. A thousand minus six point one five is wrong. It puts the mean below the **cut-off**.

Visual: card shrinks to the top. "2%" and "1000 g" underlined; on "mean" row "P(Z < 2.05) = 0.9798 ≈ 0.98, so z = −2.05" with the card's 0.9798 underlined. "9" underlined, grey "σ = 3"; on "five" row "(1000 − μ)/3 = −2.05"; on "grams" "μ ≈ 1000 + 6.15 = 1006.15 g", boxed, grey "app: 1006.16 (z not rounded)", a small bell at 1006.15 with the thin tail below 1000. On "cut-off" a chip "μ = 1000 − 6.15 = 993.85" fades in and is crossed (caption "the mean must be above the cut-off"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Find sigma. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no curve, no shading, no z).

### 13. feedback 2 (brief)
> Four percent above fifty-seven leaves zero point nine six below it, so zed is one point seven **five**, positive because fifty-seven is above the **mean**. Seven over sigma is one point seven five, so sigma is four **hours**. A zed of minus one point seven five is wrong. It makes sigma negative, and a standard deviation can't be **negative**.

Visual: card shrinks to the top. "4%" and "57 hours" underlined; on "five" row "P(Z < 1.75) = 0.9599 ≈ 0.96, so z = 1.75" with the card's 0.9599 underlined. On "mean" a small bell at 50 with 57 to the right and its right tail shaded "4%". On "hours" rows "(57 − 50)/σ = 1.75", "σ = 7/1.75 = 4 hours", boxed. On "negative" a chip "z = −1.75, σ = −4" fades in and is crossed (caption "57 is above the mean"). Hold about 1 second.

### 14. handoff
> So a probability fixes a zed score, and the zed score fixes the unknown mean or spread. That's the last of the normal distribution videos. You can now go from values to probabilities, and from probabilities back to the mean or **sigma**. Later practice videos mix these skills with the rest of the **course**.

Visual: the boxed "Area to z, then z to the unknown." shows small at the top, then fades on "That's the last". Board clears to the fills' bell centred at 508.64 with its 1% tail at 490, the bottle plate small. On "sigma" three small tool chips write across the top: "68, 95, 99.7" (s10), "z = (x − μ)/σ" (s11), "area → z → μ or σ" (s12). On "course" chip "Later: mixed practice". Hold about 2 seconds. This is the strand's final frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. To find μ or σ from a probability: find z first, then solve z = (x − μ)/σ for the unknown.
2. To find z: use the table backwards (a left tail p mirrors to a left area 1 − p at +z). The sign comes from the side: below the mean, z < 0; above, z > 0.
3. Check on a sketch: a higher μ moves the bell away from a lower cut-off; a smaller σ pulls both tails in. Round in the safe direction (minimum μ up, maximum σ down).
4. Whole-σ percentages can use the empirical rule: about 0.3% outside means the limits are μ ± 3σ.

Memory aid (large, on the notes screen): *Area to z, then z to the unknown.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 14's frame exactly (the fills' bell at 508.64 with the 1% tail, the three tool chips, chip "Later: mixed practice"). This is the final frame.

## Teaching checks

- **Does it explain causes?** Why a probability fixes z: every normal curve is the same curve in σ units, so a given tail ends at a fixed number of σ (2). Why search for 0.99: the table gives left areas for positive z, and the 1% left tail mirrors a 1% right tail (3). Why z is negative: 490 is below the mean (3). Why "at least" 508.64: a higher mean shrinks the tail (5). Why σ = 1/3: 0.3% outside means the limits are 3σ out (6). Why round the cereal's σ down: a larger σ spreads more boxes below 375, and 2.0 fails (7).
- **Misconceptions addressed:** "use the probability as z" (2, 3); "look for 0.01 in the table" (3); "the sign doesn't matter" (3; A2 crossed); "subtract zσ from the cut-off" (A1 crossed); "round a maximum to the nearest" (7).
- **One idea at a time:** one question (1), one reason (2), one look-up (3), one equation (4), one check (5), one empirical-rule case (6), one table case (7), one comparison of the two levers (8). Only the needed earlier results stay bright: z = −2.33 carried into 4 and 5; the table excerpt shows only the rows in use.
- **Video makes it easier:** the student watches the tail shrink as the bell slides until it hits 1% (2), sees the table scanned for 0.99 (3), sees the bell land at 508.64 with the 2.33σ ruler (4), sees the bolts' bell squeeze until its 3σ marks meet the limits (6), sees σ = 1.9 pass while σ = 2.0 fails (7), and sees the two levers meet the same condition side by side (8).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (each card supplies a distractor table value), 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 32 s and 26 s (scenes 11 and 13, including the 1 s holds).
- **Avoided double teaching:** s10's empirical rule and s11's z-scores, table and mirror rule are used, not re-taught.
- **Syllabus coverage:** `cib1892b99` (2 to 7; A1 (mean, less extreme... less than a given outcome), A2 (standard deviation, more than a given outcome); key notes 1 to 4).
- **Out of scope by design:** two unknowns (simultaneous conditions); calculator inverse-normal functions (grey readouts only).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803."
Model answer: P(X < 1000) = 0.02, so P(Z < −z₀) = 0.02 where P(Z < z₀) = 0.98; 0.9798 is nearest, so z₀ = 2.05, and since 1000 g is below the mean, z = −2.05. σ = √9 = 3. (1000 − μ)/3 = −2.05, so μ ≈ 1000 + 6.15 = 1006.15 g (the unrounded z gives 1006.16, so 1006.16 also earns the mark). Classic mistake (crossed): "μ = 1000 − 2.05 × 3 = 993.85" (the mean must be above the cut-off).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599."
Model answer: P(X > 57) = 0.04, so P(X < 57) = 0.96; 0.9599 gives z = 1.75 (positive, since 57 is above the mean). (57 − 50)/σ = 1.75, so σ = 7/1.75 = 4 hours. Classic mistake (crossed): "z = −1.75, so σ = −4" (wrong side; σ > 0).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Fills | σ = 8; cut-off 490; μ = 500 tail 0.1056 (s11) | 1, 2 |
| Reverse look-up | target 0.99; 0.9898 (2.32), 0.9901 (2.33); z = −2.33 | 3 |
| Unknown μ | −2.33 = (490 − μ)/8; 490 − μ = −18.64; μ = 508.64 mL (safe table setting); check 0.0099; app 508.61 = exact boundary (grey) | 4, 5, 14 |
| Bolts (site lesson 2 Q3(c)) | μ = 50 mm, limits 49 and 51; σ = 0.5: about 5% rejected; target about 0.3%: 3σ = 1, σ = 1/3 ≈ 0.33 mm | 6 |
| Cereal (site lesson 3 Q3(a)) | 375 g, μ = 380 g, under 0.5%; 0.9949 (2.57), 0.9951 (2.58); z ≈ −2.575 (app −2.576); σ = 5/2.575 ≈ 1.94; maximum 1.9 g; σ = 1.9: ≈ 0.43%; σ = 2.0: ≈ 0.62% (1 − 0.9938) | 7 |
| Two levers | σ = 2 g: μ = 375 + 2.575 × 2 = 380.15 (tail 0.00501, just short; app 380.152); round up to 380.16 g (tail 0.0049) | 8 |
| A1 | N(μ, 9); 2% below 1000; 0.9798 (2.05), 0.9803 (2.06); z = −2.05; μ = 1006.15 g; crossed 993.85 | 10, 11 |
| A2 | N(50, σ²); 4% above 57; 0.9207 (1.41, distractor), 0.9599 (1.75); σ = 4 hours; crossed σ = −4 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and `statistics.NormalDist` (3 Nov, scratchpad script `s10s12/nums_s10s12.py`); Codex to re-check.

- Φ to 4 dp: Φ(2.32) = 0.9898, Φ(2.33) = 0.9901, Φ(2.57) = 0.9949, Φ(2.58) = 0.9951, Φ(2.63) = 0.9957, Φ(2.50) = 0.9938, Φ(2.05) = 0.9798, Φ(2.06) = 0.9803, Φ(1.41) = 0.9207, Φ(1.75) = 0.9599.
- Inverse: z(0.01) = −2.3263; z(0.005) = −2.5758; z(0.02) = −2.0537; z(0.04) = −1.7507.
- Fills: 2.33 × 8 = 18.64; 490 + 18.64 = 508.64; exact 508.61; Φ(−2.33) = 0.0099.
- Bolts: 1/0.5 = 2 (σ = 0.5 limits at 2σ; outside 0.0455); 3σ = 1: σ = 0.3333; outside 2Φ(−3) = 0.0027.
- Cereal: 5/2.575 = 1.9417; 5/2.576 = 1.9410; σ = 1.9: z = −2.6316, tail 0.00425 (table 0.0043); σ = 2.0: z = −2.5, tail 0.0062.
- Two levers: 2.575 × 2 = 5.15; 375 + 5.15 = 380.15; exact 380.1517, so the cents setting is 380.16 (Φ(−2.58) = 0.0049).
- A1: 2.05 × 3 = 6.15; 1006.15; 993.85. A2: 7/1.75 = 4.

## Memory aid check

- **"Area to z, then z to the unknown."** Meaning, as said in scene 9: find the z-score that matches the given probability first (reverse table look-up, sign from the side), then solve z = (x − μ)/σ for the unknown mean or standard deviation, and check the direction on a sketch. Assumptions checked: the variable is normal and only one of μ and σ is unknown (two unknowns need two conditions, out of scope); "area" means the area on one side of the given value, mirrored to a left area for the table (scene 3). The empirical-rule route (scene 6) is the same idea with a whole-σ z (z = ±3). It helps a new case: A1 and A2 each start by turning the percentage into a z. Introduced after the worked cases (scenes 4 to 8).
- **Considered, not used:** "Below is minus" (a sign rule; it is in key note 2 and A2's crossed mistake; one aid per video).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,352 characters** (5,366 with the joining spaces), 15 scenes. Characters per scene (1 to 15): 293, 479, 536, 408, 492, 615, 736, 403, 186, 47, 410, 43, 328, 301, 75. At 13.3 characters per second the speech is about 402 s; add about 14 s of settling for the sliding bell (2), the table scan (3), the bolts' squeeze (6), the pass and fail ghosts (7) and the two panels (8), 20 s for two countdowns, 6 s of short holds (9, 11, 13, 14) and about 62 s more for the quiet notes (about 102 s of holds): **about 504 s**. This is under the 5,500 floor, in the 5,000 to 5,500 band: the template says stop rather than pad, and this design stops. The content is one syllabus point with three worked cases (μ by the table, σ by the empirical rule, σ by the table) and the lever comparison; the first full draft counted 5,158, and Revision 1 added the genuine lever scene (8, +403, it links the μ and σ answers to the site's setting comparison) while trimming both feedback scenes to the 15 to 30 s target (−94 and −115). Root decides whether to accept the length (as s02 at 5,346 and i11 at 5,137, root decisions 33 and 54) or to add one listed genuine case at Revision 2: a μ problem from a right tail ("only 5% above 520 mL with σ = 8", z = 1.645 from the table's halfway pair, about +300 characters). Feedback: scene 11 about 32 s and scene 13 about 26 s including the 1 s holds; scene 11 is at the 30 s edge (root decision 52 accepted 31 to 32 s in f13 to f15); its named trim is "Sigma is three, so" to "So" (−16) if the voice runs slow.

## Scene list and build ids

Lesson key `m-a12s12` (route math-a12-s12). Suggested explainer folder `src/explainer/lessons/math-a12-s12` and build folder `docs/production/claude-pm/lessons/m-a12s12` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, probability-fixes-z, table-backwards, solve-mean, check-direction, sigma-empirical, sigma-table, two-levers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s11's last frame continues into scene 1 (same bell); 1 to 2 camera continue (the slide); 2 to 3 clear change (table); 3 to 4 clear change back to the fills; 4 to 5 camera continue; 5 to 6 clear change (bolts); 6 to 7 clear change (cereal); 7 to 8 camera continue (two panels); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s12-learning-review.md`, `science_check` = `checks/m-a12s12-maths-check.md`.

## Assets

Have (after the s09 to s11 builds): `NormalCurve` (with `bands`, `matchMarks`), `TailMirror`, `SigmaRuler`, `ZTable` (forward mode), `AreaFill`; shared `FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`. Painted plate `maths-a12-bottle.png` (s09).

New: `ZTable` reverse mode (`findEntry`, specified in s11's brief); `NormalCurve` `tailTarget`; painted plate `maths-a12-cereal-box.png`.

## Codex asset brief

**A. Coded parts (add to the next maths kit brief, with the s09 to s11 parts; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every displayed value is formatted from the same data that sets the geometry.**

1. **`ZTable` reverse mode** (scenes 3, 7; feedbacks 11, 13). `findEntry` ({target, at}): a scan highlight moves through the focused rows, then the two entries either side of the target highlight with grey gap readouts ("0.0002", "0.0001"), and the nearer one boxes (or both with "halfway" when the gaps are equal to 4 dp). Checks: target 0.9900 gives 0.9898 (2.32) and 0.9901 (2.33), nearer 2.33; target 0.9950 gives 0.9949 (2.57) and 0.9951 (2.58), halfway.
2. **`NormalCurve` `tailTarget`** (scene 2; scene 5's nudge). With σ fixed and a cut-off c, animates μ so the tail area below c moves from its start value to an author target over a set duration; the area readout is computed every frame from Φ((c − μ)/σ), and a linked `SigmaRuler` from c to μ shows (μ − c)/σ. Checks: start μ = 500 gives 0.1056; the end position for target 0.01 is μ = 508.61 (exact z) and the ruler then reads 2.33σ to 2 dp; the scene 4 landing uses the table value μ = 508.64 (readout 0.0099).

Existing parts used unchanged: `TailMirror` (0.01 left tail onto the right, scene 3), `NormalCurve` σ animation with `bands` (bolts 0.5 to 1/3, scene 6; area fixed at 1, outside-tail readout from Φ), `SigmaRuler`, `AreaFill`.

**B. Painted plate (new; transparent PNG with a true alpha channel, no background, no shadow box, no text, no people, no hands; flat paper-friendly painted style matching `maths-a12-bottle.png` and the `maths-a12-` set; never stretched, scale uniformly only).**

1. `maths-a12-cereal-box.png`: one plain upright cereal box, three-quarter front view, plain warm-coloured card with a simple abstract stripe, **no brand, no logo, no text, no characters, no mascots, no nutrition panel, no weight label**; about 700 × 1,000 px (portrait).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the reverse look-ups: 0.9901 is the nearer entry to 0.99; 0.9949 and 0.9951 are equally near 0.995 (halfway, 2.575); 0.9798 is nearer to 0.98 than 0.9803.
3. Confirm the signs: z = −2.33 for 490 below μ; z = −2.575 for 375 below 380; z = −2.05 for 1000 below μ; z = +1.75 for 57 above 50.
4. Confirm the direction claims: a higher μ shrinks the tail below a fixed lower cut-off; a smaller σ shrinks both tails beyond fixed limits; σ = 1.9 passes (about 0.43%) and σ = 2.0 fails (about 0.62%) the 0.5% condition.
5. Confirm the rounding statements match root decision 50 ("round up to be sure of reaching the target") and the maximum-σ case rounds down.
6. Confirm both attempt questions carry every demand and given (both table values each), and that neither card shows a curve, a z-value or the answer form.
7. Confirm the syllabus quote matches the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling ("millilitres", "millimetre"; "zed" in speech).
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the opening frame matches s11 scene 14 exactly, and the closing line stays true in any playlist position.

## YouTube metadata (draft)

Title: Finding an Unknown Mean or Standard Deviation | Year 12 Maths Advanced

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson03.sa.html

A company wants only 1% of bottles under 490 mL. Where should it set the mean? See why a probability fixes a z-score, read a standard normal table backwards to find it, and solve for the unknown mean. Then set the spread instead: once with the empirical rule, and once with the table to find the largest standard deviation allowed, rounding in the safe direction. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, the normal distribution.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve problems involving finding the mean or standard deviation of a normal random variable given the probability of an event less or more extreme than a given outcome"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: z-scores, the standard normal and normal tables (previous video); the empirical rule.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **0. Length (root).** 5,352 characters (about 504 s), under the 5,500 floor; the design stops rather than pads (see "Narration length estimate" for the listed genuine addition).
- **1. Closing line (root).** The strand ends here and the playlist's next video (g01) is differentiation practice, so scene 14 says "Later practice videos mix these skills with the rest of the course" with chip "Later: mixed practice" (root decision 4). If a statistics practice video is added (for example in g03), the chip names it.
- **2. Table layout (maths check).** As s11 open decision 2: the reverse look-up assumes a P(Z < z) table for z ≥ 0 to 4 dp.
- **3. Halfway z (maths check).** The cereal's z = 2.575 is the halfway value from a 4 dp table; the site uses 2.576 (technology). Both give σ ≈ 1.94 and the maximum 1.9 g.
- **4. Two unknowns (root).** Finding μ and σ together from two conditions is left to a practice video; `cib1892b99` reads "the mean or standard deviation".
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s10 and s11; check that the sliding bell gives the reason a probability fixes z; that the reverse look-up and the sign are separate visible stages; that each direction check is tied to the picture; that the bolts' squeeze shows why σ = 1/3; that the pass and fail ghosts make the rounding direction clear; that the cards give nothing away), then the Codex maths check and error check.
- The tail shrinking to 1%, the table scan, the 2.33σ ruler, the bolts' squeeze and the pass and fail ghosts carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s11's scene 14 (same designer); the closing frame ends the strand.

## Revision 2 (4 November 2026, brief 162 repairs)

Blocker: scene 8 rounds the σ = 2 setting up to 380.16 g (380.15 leaves a 0.00501 tail), funded by cutting the cost sentence; scene 5 calls 508.64 a safe table setting (exact boundary 508.61) and cuts "any mean below this"; attempt 1 asks for an approximate value from the given table values (1006.16 also accepted); feedback 1 trimmed (root decision 60). Narration now 5,302 characters (counted by the build parser rules). No em dashes.
