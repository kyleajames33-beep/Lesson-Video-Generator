# Maths A12 S12: How do probabilities determine an unknown normal mean or spread? Area to z by a reverse table look-up, then z to the unknown μ or σ, with the direction of each change and of the rounding (design)

Status: Revision 5 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 4 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 3 (5 Nov 2026, brief 171 fixes). Not voiced (no `math-a12-s12/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s12.md`).

Narration 5,636 characters (Revision 5; was 5,515), 15 scene headings, about 507 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: twelfth and last video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 64), after s11 (z-scores and tables). Revision 4 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a drink-bottle filling machine whose dial sets the mean fill, site lesson 3's machine); a painted cereal box and bolt carry the two σ cases; graphs, the table, the dial's readouts and algebra stay coded. No people. Site lessons read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson03.sa.html` (Normal Distribution Applications), SHA256 `08101d4bc1a93fb663cde4c428cd800e2f0e2c259d39a55ec9ca13506072c758`, and `lesson02.sa.html` (The Normal Distribution; its Q3(c) supplies scene 6), SHA256 `c80e763e63444ac1420243e1bdc7bedde0cca84edae267beb462f8635283f2b6`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s12` ("How do probabilities determine an unknown normal mean or spread?", one syllabus action, site source lesson 3, no coverage gaps).

Owner rules applied: new 2024 syllabus only, codenames and exact wording, no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration. Exact working in the algebra (z = (490 − μ)/8 solved line by line), table values to 4 dp; the strand's rounding convention (root decision 50: "round up to be sure of reaching the target"), extended to "round in the safe direction" (up for a minimum mean, down for a maximum σ); attempt cards give nothing away (each supplies a distractor table value).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, The normal distribution; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cib1892b99`: "Solve problems involving finding the mean or standard deviation of a normal random variable given the probability of an event less or more extreme than a given outcome"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s11's handoff frame (the fills' bell with 490 marked, the left tail shaded "1%", "σ = 8", "μ = ?" with a ghost arrow pointing right, chip "Next: finding μ or σ from a probability"; `math-a12-s11.md` scene 14). Explains why a tail area fixes a z (every normal is the same curve in σ units, s10 and s11); finds z for a left area of 0.01 by searching the table body (0.9901 at 2.33) and choosing the sign from the side; solves (490 − μ)/8 = −2.33 for μ = 508.64 mL, with the direction (raising μ shrinks the tail) and the forward check (0.0099); finds σ from the empirical rule (site lesson 2 Q3(c): bolts within 1 mm of 50 mm, about 0.3% rejected, σ = 1/3 mm); finds a maximum σ from the table (site lesson 3 Q3(a): cereal boxes, at least 375 g, μ = 380 g, under 0.5% underweight, σ ≈ 1.94, so 1.9 g) with the safe rounding direction checked both ways, then the same condition met by moving μ instead (σ = 2 g gives μ = 380.15 g, just short with a tail of 0.00501, so the setting is 380.16 g) (`cib1892b99`). Stops at one unknown, μ or σ. Not taught: two unknowns from two conditions (simultaneous equations; practice video), finding a value from a probability as a separate question type (used only inside the method), calculator inverse-normal functions (grey readouts only).

## Decisions

### Revision 4 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a drink-bottle filling machine with a dial for the mean fill (painted plates, live).** Site lesson 3's own machine (500 mL, σ = 8 mL, underfilled below 490 mL), with this design's target "only 1% under 490". The dial is the unknown μ made physical: the student turns it and watches the share of short bottles fall. The anchor is fixed by the strand's joins: g01 opens on s12's final frame (the fills' bell at 508.64 with the 1% tail and the bottle plate) and must stay unchanged, so the bottle machine belongs here; s11 Revision 3 now introduces the bottles only as a worked example and the handoff. A coffee machine's overflow (the suggested idea) was not used because it would need a second context to reach g01's frame.
- **Plates.** The bottle plate is the reused `chemistry/m7-pet-bottle-v1` (inspected: a plain empty PET bottle with a white cap, no label), with a coded fill level inside; it fulfils the never-painted Revision 1 name `maths-a12-bottle.png`, so g01's "bottle plate small" is unchanged in content. New: the filling head with its dial (`ma12-filling-head-v1`), the cereal box (`ma12-cereal-box-v1`, renaming Revision 1's unpainted `maths-a12-cereal-box.png`) and a hex bolt (`ma12-hex-bolt-v1`).
- **Idealising assumptions (author notes, not learner copy).** Each bottle's fill is μ + 8z with the 200 stored z values of author note h (Python 3.14 `random.Random(1212)`, `gauss(0, 1)`); the count of short bottles is illustrative and labelled "simulated: 200 bottles". The counts are 19 of 200 at μ = 500, 6 at 504, 2 at 508 and 2 at 508.64 (model tails 0.1056, 0.0401, 0.0122, 0.0099).
- **Join with s11 (fixed).** Scene 1 opens on s11's final frame exactly (unchanged in s11 Revision 3).
- **Join with g01 (fixed).** Scene 14's frame is unchanged (the fills' bell centred at 508.64 with its 1% tail at 490, the bottle plate small, the three tool chips and "Later: mixed practice"); g01 opens on it.
- **Simulations (standard item 3).**
  1. `FillDial` (scenes 1, 2, 4, 5; a kit addition on `ParameterSlider`, `TrackerFill` and a plate meter readout): the painted filling head's dial turns, setting μ; a coded conveyor carries the reused bottle plate (60 px wide sprites) under the head and each bottle fills to its stored level against a dashed red "490 mL" line, short ones flagged red; live readouts "dial: μ = ... mL", "short: n of 200" and the model's "tail = ..." (52 px), with the bell sliding in step above.
  2. `NormalCurve` `tailTarget` with `SigmaRuler` (scene 2): the tail readout falls to 0.01 while the ruler from 490 to μ lengthens to about 2.33σ.
  3. `ZTable` reverse scan (scenes 3, 7) and the bolts' σ squeeze with live outside-tail readouts (scene 6); the cereal's pass and fail bells (scene 7).
- **Colour roles (fixed for the whole video, continuing s04 to s11).**
  - **normal curves: teal**;
  - **tail areas: pale amber**; **the value asked about (z, table highlights): amber**;
  - **μ, the dial and σ-steps: violet** (`MATH_GRADIENT`);
  - **the 490 limit, short bottles and fail tags: red**; **pass tags and answers: green**;
  - **mistake: red**, crossed slips only; ink algebra and the table.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; table entries 34 px, the highlighted entry 52 px; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The filling head is at least 420 px tall and the cereal box 360 px tall when they carry the idea. `HandTag` (at most two live): "turn μ up: fewer short", "same curve in σs", "look for 0.99 inside", "below: z negative", "area → z → μ", "higher μ: smaller tail", "round up: safe", "0.3% outside: 3σ", "maximum σ: round down", "two levers".
- **Stage changes (standard item 2):** s11's question, then the filling machine and its conveyor (1); the dial turning while the tail and the short count fall (2); the table scanned backwards (3); the g01 board for μ with the machine set (4); the forward check and the nudge (5); the bolts' squeeze (6); the cereal board with pass and fail bells (7); the two levers (8); the framed card (9); question cards with pictures (10 to 13); the strand's closing frame (14); key notes (15).
- **Worked examples (g01 layout, standard item 7).** Scene 4: task strip "Find μ so that P(X < 490) = 0.01.", model strip "X ∼ N(μ, 64)", grouped givens "x = 490 mL, σ = 8 mL, z = −2.33", rows at 52 px, green framed "μ = 508.64 mL", red slip "z = +2.33" crossed silently, tag "below: z negative" (root decision 5). Scene 6: green framed "σ = 1/3 mm", red slip "2σ = 1" crossed silently, tag "0.3% outside: 3σ". Scene 7: green framed "σ ≤ 1.9 g (one-decimal settings)", the σ = 2.0 fail bell as the crossed case. Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Area to z, then z to the unknown." with two arrows ("area → z: table backwards, sign from the side"; "z → μ or σ: z = (x − μ)/σ") and a bottle badge.
- **Visual surprise (standard item 9).** Turning the dial only 8.64 mL past the target drops the short bottles from about one in ten to about one in a hundred, and the conveyor shows it (2, 5); the bolts' 3σ marks land exactly on the limits as σ shrinks (6); σ = 1.9 passes while σ = 2.0 fails (7).
- **Question cards (full text and a picture).** A1: the worded question with empty axes "mass x (g)" and a dashed vertical at 1000 (no curve, no shading, no z). A2: the worded question with empty axes "running time x (hours)" and a dashed vertical at 57 (no curve, no shading, no z).
- **Narration (not voiced).** Scenes 1, 2 and 5 add the machine, its dial and the simulated short bottles; scenes 3, 4 and 6 to 15 keep their Revision 3 text (scene 9 gains a cue word). This lifts the count above the 5,500 floor without padding: the simulation is the scene's evidence.

### Kept from Revisions 1 to 3

- **Learner question kept (outline).** "How do probabilities determine an unknown normal mean or spread?" The answer, built in order: the probability fixes how many σ the cut-off sits from the mean, which is a z (2); the table, read backwards, gives that z, and the side gives its sign (3); z = (x − μ)/σ then has one unknown (4); the direction of the change and of the rounding is checked against the picture (5); with the empirical rule, the same reasoning sets σ from a whole-σ percentage (6); with the table, it sets a maximum σ (7).
- **Hook (continuity).** s11's frame: "μ = ?" with the arrow. "Until now we knew μ and σ and found the probability. This time the probability is fixed."
- **Why a probability fixes z (the cause).** s10's "measured in sigmas, every normal curve is the same curve" and s11's standardising: a left tail of 1% always ends at the same number of σ below the mean, whatever μ is. `NormalCurve` `tailTarget` (new): the bell slides right with σ fixed while the tail area readout falls from 0.1056 (μ = 500, s11's value) towards 0.01; the σ-ruler (`SigmaRuler`) shows the gap from 490 to μ growing from 1.25σ; at 1% it reads about 2.33σ.
- **Reverse look-up (`ZTable` reverse mode).** The table gives left areas for z ≥ 0 (s11's "the table looks left"). A left area of 0.01 sits left of a negative z; its mirror is a right tail of 0.01 above +z, which is a left area of 0.99. Search the table body for 0.99: 0.9898 at 2.32, 0.9901 at 2.33; 0.9901 is nearer, so z ≈ 2.33, and the cut-off is below the mean, so z = −2.33. (Site lesson 3 card 02 lists "z₉₉% ≈ 2.33" as a value to memorise; the video finds it instead.)
- **Unknown mean (fills; site lesson 3's hook machine, new target).** z = (x − μ)/σ: −2.33 = (490 − μ)/8; 490 − μ = −18.64; μ = 508.64 mL. Meaning: "490 must sit 2.33 standard deviations, 18.64 mL, below the mean." Forward check: (490 − 508.64)/8 = −2.33, tail 1 − 0.9901 = 0.0099, under 1%. Direction: a higher mean moves the bell away from 490 and shrinks the tail, so "at least 508.64 mL" (round up, root decision 50's convention), grey readout "app: ≈ 508.6108 (z not rounded)"; the app's two-decimal 508.61 is a rounded value, not the exact boundary.
- **Unknown σ, empirical rule (site lesson 2 Q3(c), numbers unchanged: bolts N(50, 0.5²), rejected if more than 1 mm from 50 mm, target about 0.3% rejected).** 0.3% outside means 99.7% inside, which is ±3σ (s10), so the limits 49 and 51 must be μ ± 3σ: 3σ = 1, σ = 1/3 mm (≈ 0.33 mm). Cause, shown: shrinking σ from 0.5 to 1/3 squeezes the bell so the tails beyond 49 and 51 shrink from about 5% to about 0.3%. The site's answer "σ_new = 1/3 ≈ 0.33 mm" is kept.
- **Unknown σ, table (site lesson 3 Q3(a), numbers unchanged: cereal "at least 375 g", μ = 380 g, fewer than 0.5% underweight, find the maximum σ to 1 dp).** Left area 0.005 mirrors to 0.995: 0.9949 at 2.57 and 0.9951 at 2.58, exactly halfway, so z ≈ −2.575 (site: −2.576 from technology, grey readout). (375 − 380)/σ = −2.575, so σ = 5/2.575 ≈ 1.94 g. Safe rounding: a bigger σ spreads more boxes below 375, so the maximum rounds down: σ = 1.9 g. Check both ways (grey readouts from the table): σ = 1.9 gives z ≈ −2.63, tail 1 − 0.9957 = 0.0043 (passes); σ = 2.0 gives z = −2.5, tail 1 − 0.9938 = 0.0062 (fails, the site's part (b) value for μ = 385, σ = 4 is the same z and is not used).
- **Two levers (site lesson 3 Q3's setting comparison, as a reason, not a cost problem).** Keeping σ = 2 g instead, the same condition needs μ = 375 + 2.575 × 2 = 380.15, just short (tail 0.00501), so 380.16 g after rounding up (Revision 2; grey readout "app: 380.152; round up"). One sentence links the two answers: move the mean away from the limit, or shrink the spread; which is chosen depends on cost. The site's cost figures are not used (site correction 2).
- **Attempts (original).** (A1) "The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803." 0.98 is nearer 0.9798, z = −2.05; (1000 − μ)/3 = −2.05; μ = 1006.15 g. Crossed: "μ = 1000 − 2.05 × 3 = 993.85" (puts the mean below the cut-off, so most bags would be light). (A2) "The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599." Right tail 0.04, left area 0.96, z = 1.75 (positive: 57 is above the mean); 7/σ = 1.75, σ ≈ 4 hours (table z; Φ(1.75) = 0.9599, so exact σ ≈ 3.998). Crossed: "z = −1.75, so σ = −4" (wrong side; a standard deviation can't be negative). Each card's second table value is a distractor, so neither card gives the answer away; neither shows a curve or shading.
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
  (a) Fills: σ = 8, cut-off 490. μ = 500: tail Φ(−1.25) = 0.1056 (s11). Target 0.01: exact z = −2.326348, μ = 490 + 2.326348 × 8 = 508.6108 (SymPy: 508.61078299233, the exact boundary; the rounded 508.61 gives a tail of 0.01000261, just over 0.01, and 508.6108 gives 0.00999994); table z = −2.33, μ = 490 + 18.64 = 508.64. Check Φ(−2.33): table 1 − 0.9901 = 0.0099 (exact 0.009903).
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): curves teal; tail areas pale amber; z and table highlights amber; μ, the dial and σ-steps violet; the 490 limit, short bottles and fail tags red; pass tags and answers green; mistake red; ink algebra and table. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px. Speech says "zed"; screen writes "z".

### 1. hook (working backwards)
> Last video ended with this question. Until now, we've known the mean and the standard deviation, and found a probability. This time the probability is fixed. The filling machine has a dial that sets the mean fill. Only one percent of bottles can be under four ninety, sigma stays at eight, and the mean is the **unknown**. Where must the dial be **set**?

Visual: opens on s11 Revision 3's last frame exactly (the fills' bell, 490 marked, the left tail shaded "1%", chip "σ = 8", "μ = ?" with a ghost arrow pointing right, the bottle plate, chip "Next: finding μ or σ from a probability"). Heading writes on: "Finding μ or σ". On "dial" the bell moves to the upper right (900 × 420 px) and the painted filling head (`ma12-filling-head-v1`, 460 px tall) lands at the left over a coded conveyor; its round dial carries a coded violet pointer and the readout "μ = 500 mL" (52 px); bottles (the reused PET plate, 60 px wide) start moving under it, each filling to its stored level against a dashed red "490 mL" line. On "unknown" a small two-way strip appears top right: "μ, σ → probability" (s11, grey) above "probability → μ or σ" (bright). On "set" the chip moves to the top right as "Where must μ be set?".

### 2. a probability fixes zed
> Here's the key idea. Turn the dial up, and the bell slides to the right, so four ninety ends up further out in the tail, and the tail gets **smaller**. At a mean of five hundred, the tail was zero point one zero five six. Fill two hundred bottles there, and in one simulated run, nineteen come up **short**. Keep turning, and at some point the tail is exactly one **percent**. In sigmas, every normal curve is the same curve. So a one percent tail always ends the same number of sigmas below the mean, whatever the mean is. That number is a zed score. So the job is to find the zed first, then the **mean**.

Visual: camera continue. `FillDial` at μ = 500: 200 simulated bottles run under the head in about 4 s, short ones flagged red, live readout "short: 19 of 200" (52 px) beside the model's "tail = 0.1056", grey tag "simulated: 200 bottles". On "smaller" the dial turns: `NormalCurve` `tailTarget` slides the bell right with σ fixed, the tail beyond 490 thinning, its readout falling; the conveyor refills at each stop: "μ = 504: short 6 of 200, tail 0.0401", "μ = 508: short 2 of 200, tail 0.0122", hand tag "turn μ up: fewer short". On "short" the 19 red bottles pulse. `SigmaRuler` from 490 to μ lengthens in violet steps: "1.25σ" at the start. On "percent" the slide stops with the readout "0.01"; the ruler reads "? σ". On "same curve" a ghost standard normal beside it with its own 1% tail ending at "z = ?", hand tag "same curve in σs". On "mean" two boxes in the right column: "1. area → z", "2. z → μ".

### 3. reading the table backwards
> The table gives areas to the left, for positive zeds. A one percent tail on the left mirrors a one percent tail on the right. And a right tail of one percent means ninety-nine percent to the left. So search inside the table for zero point nine **nine**. At two point three two it's zero point nine eight nine eight, and at two point three three it's zero point nine nine zero **one**. Zero point nine nine zero one is closer, so zed is about two point three three. Four ninety is below the mean, so zed is negative: minus two point three **three**.

Visual: clear change. Right column: `ZTable` excerpt (rows 2.2 to 2.4 bright, others faint; 34 px entries). Left: a standard normal (900 × 460 px). On "mirrors" `TailMirror` lifts the 0.01 left tail onto the right; on "left" the region left of +z shades, label "0.99". On "nine" (first) `ZTable` reverse mode scans the body, target chip "0.9900", hand tag "look for 0.99 inside"; on "one" the entries "0.9898" (2.32) and "0.9901" (2.33) highlight amber, with grey gaps "0.0002" and "0.0001". On "closer" "0.9901" lifts to 52 px, row "P(Z < 2.33) ≈ 0.99". On "three" (last) the mark on the curve flips to the left side, green framed "z = −2.33", hand tag "below: z negative".

### 4. solving for the mean
> Now put it into the zed score formula. Zed is x minus mu, over sigma, so minus two point three three equals four ninety minus mu, all over **eight**. Multiply by eight: four ninety minus mu is minus eighteen point six **four**. So mu is five hundred and eight point six four **millilitres**. With the table's rounding, that leaves a tail just under one percent, so it meets the limit. In words, four ninety has to sit two point three three standard deviations, eighteen point six four millilitres, below the **mean**.

Visual: clear change to the g01 board. Task strip (44 px): "Find μ so that P(X < 490) = 0.01." Model strip: "X ∼ N(μ, 64)". Givens card: "x = 490 mL", "σ = 8 mL", "z = −2.33" (carried from scene 3). Left: the fills' bell (900 × 460 px) with the filling head (300 px) above it. On "eight" row "−2.33 = (490 − μ)/8" (52 px); a red slip "z = +2.33" writes and is crossed silently, tag "below: z negative"; on "four" "490 − μ = −2.33 × 8 = −18.64" (the previous line dims); on "millilitres" "μ = 490 + 18.64", green framed "μ = 508.64 mL". On "mean" the dial turns to 508.64 and the bell slides to centre there; `SigmaRuler` from 490 to μ reads "2.33σ = 18.64 mL", the tail readout "≈ 0.01", hand tag "area → z → μ".

### 5. checking the direction
> Check it forwards. Four ninety minus five oh eight point six four, over eight, is minus two point three three, and the tail is one minus zero point nine nine zero one, zero point zero zero nine **nine**. That's just under one percent. Fill two hundred bottles at this setting, and only two come up **short**. And the picture agrees: a higher mean moves the bell away from four ninety, so the tail **shrinks**. So, using the table's zed, a setting of five hundred and eight point six four is safe. If you round, round **up**.

Visual: camera continue. On "nine" rows "z = (490 − 508.64)/8 = −2.33", "P(X < 490) = 1 − 0.9901 = 0.0099 < 0.01 ✓" (52 px). On "short" `FillDial` runs 200 bottles at 508.64: live readout "short: 2 of 200" with the two red bottles pulsing, grey tag "simulated: about 1%". On "shrinks" the dial nudges a little right (tail thinner, hand tag "higher μ: smaller tail") and left to μ = 508.0, past the exact boundary 508.6108 (tail thicker, readout "0.0122", red tag "lower μ: more than 1%"), then returns. On "up" green framed "set μ = 508.64 mL (table z): tail ≈ 0.0099, just under 1%", hand tag "round up: safe", chip "round up to be sure of reaching the target" (root decision 50), grey readout "app: ≈ 508.6108 (z not rounded; 508.61 when rounded)".

### 6. the spread from the empirical rule
> The spread can be the unknown instead. Bolts are made with a mean length of fifty millimetres, and a bolt is rejected if it's more than one millimetre from fifty. Right now sigma is zero point five, so the limits sit at two sigma, and about five percent are **rejected**. The maker wants that down to about zero point three percent. That means ninety-nine point seven percent inside, which is three **sigma**. So the one millimetre limits must be three standard deviations from the mean. Three sigma equals one, so sigma is one third of a **millimetre**. Shrinking sigma squeezes the bell, and the tails pull inside the **limits**.

Visual: clear change to the g01 board. Task strip: "Bolts: find σ so that about 0.3% are rejected." Model strip: "X ∼ N(50, σ²)". Givens card: "μ = 50 mm", "limits 49 mm and 51 mm", "rejected: about 0.3%". The painted hex bolt (`ma12-hex-bolt-v1`, 420 px wide, lying flat) above a coded length bracket "50 mm". Left: the bolts' bell at σ = 0.5 (900 × 460 px) with the limits at 49 and 51 drawn as solid red lines. On "rejected" the two outside tails shade, tags "2σ", live readout "outside: 4.55%" (52 px, grey "about 5%"). On "sigma" (first) `NormalCurve` `bands` show "99.7%" within ±3σ, row "0.3% outside, so 99.7% inside: μ ± 3σ", hand tag "0.3% outside: 3σ"; a red slip "2σ = 1" writes and is crossed silently. On "millimetre" rows "3σ = 1", green framed "σ = 1/3 mm ≈ 0.33 mm" (site lesson 2 Q3(c)). On "limits" a violet σ slider moves from 0.5 to 1/3: the bell squeezes (taller, narrower, area fixed), its ±3σ marks moving out to meet 49 and 51 exactly, the outside readout falling live to "0.27%".

### 7. a maximum spread from the table
> When the percentage isn't on a whole sigma, use the table. Cereal boxes must hold at least three seventy-five grams. The mean is three eighty, and fewer than zero point five percent can be **underweight**. What's the largest sigma allowed? A left tail of zero point zero zero five mirrors to zero point nine nine five to the left. The table gives zero point nine nine four nine at two point five seven, and zero point nine nine five one at two point five eight, so zed is about minus two point five seven **five**. Then five over sigma is two point five seven five, so sigma is about one point nine four **grams**. To one decimal place, round down to one point nine. Round up to two, and the tail grows to about zero point six percent, which **fails**.

Visual: clear change to the g01 board. Task strip: "Cereal: find the maximum σ, to 1 decimal place." The painted cereal box (`ma12-cereal-box-v1`, 380 px tall) at the top left. Model strip: "X ∼ N(380, σ²)". Givens card: "cut-off 375 g", "μ = 380 g", "P(X < 375) < 0.005". Left: a bell at 380 with 375 marked in red (900 × 440 px). On "underweight" the left tail shades, label "< 0.5%". On "five" (first) `ZTable` reverse mode highlights "0.9949" (2.57) and "0.9951" (2.58) around the target "0.9950", grey "halfway"; green framed "z ≈ −2.575", grey readout "app: −2.576". On "grams" rows "(375 − 380)/σ = −2.575", "σ = 5/2.575 ≈ 1.94 g" (52 px). On "one point nine" green framed "σ ≤ 1.9 g (one-decimal settings)", hand tag "maximum σ: round down". On "fails" two bells side by side: σ = 1.9 with tail readout "≈ 0.43%" and a green "passes" tag, σ = 2.0 with "≈ 0.62%", a red "fails" tag and its "σ = 2.0" label crossed (grey "z = −2.5: 1 − 0.9938").

### 8. two levers for one condition
> So there are two levers for the same condition. Keep sigma at two grams instead, and the mean has to move up. Three seventy-five minus mu, over two, is minus two point five seven five, so mu is three seventy-five plus five point one five, which is three hundred and eighty point one five. That's just short, so round up to three hundred and eighty point one six **grams**. Either move the mean away from the limit, or shrink the **spread**.

Visual: camera continue on the cereal board. Two panels side by side under the task strip "Under 0.5% below 375 g: two ways" (each 820 × 420 px). Left panel "move μ": a violet dial turns and a bell with σ = 2 slides right from 380; row "(375 − μ)/2 = −2.575", row "μ = 375 + 5.15 = 380.15", grey readout "app: 380.152 (z not rounded), so 380.15 is just short"; on "grams" green framed "round up: μ = 380.16 g" (tail 0.0049). Right panel "shrink σ": scene 7's bell at μ = 380 squeezing to σ = 1.9, green framed "σ ≤ 1.9 g (one-decimal settings)". On "spread" both tails read "< 0.5%" with green ticks, hand tag "two levers".

### 9. memory aid
> Here's a way to remember the method. Area to zed, then zed to the unknown. Find the zed from the probability first, then solve for the mean or sigma, and check the direction on a **sketch**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line in the hand font, 64 px: "Area to z, then z to the unknown." Under it two arrows (40 px): "area → z (table backwards, sign from the side)" and "z → μ or σ (z = (x − μ)/σ)". On "sketch" a small bell with a shaded tail and a direction arrow draws. Badge at the left: the bottle (200 px tall) beside the dial at 508.64. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Find the mean. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803." Picture slot: empty axes "mass x (g)" with a dashed vertical at 1000 (no curve, no shading, no z). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> Two percent on the left mirrors to zero point nine eight, and zero point nine seven nine eight is closer, so zed is minus two point oh five, negative because a thousand grams is below the **mean**. Sigma is three, so mu is a thousand plus six point one **five**, about one thousand and six point one five **grams**. A thousand minus six point one five is wrong. It puts the mean below the **cut-off**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "X ∼ N(μ, 9)", "P(X < 1000) = 0.02", "P(Z < 2.05) = 0.9798". "2%" and "1000 g" underlined; on "mean" row "P(Z < 2.05) = 0.9798 ≈ 0.98, so z = −2.05" (52 px) with the card's 0.9798 underlined. "9" underlined, grey "σ = 3"; on "five" row "(1000 − μ)/3 = −2.05"; on "grams" green framed "μ ≈ 1000 + 6.15 = 1006.15 g", grey "app: 1006.16 (z not rounded)", and the card's axes draw a teal bell at 1006.15 with the thin tail below 1000. On "cut-off" a red slip "μ = 1000 − 6.15 = 993.85" writes and is crossed (caption "the mean must be above the cut-off"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Find sigma. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599." Picture slot: empty axes "running time x (hours)" with a dashed vertical at 57 (no curve, no shading, no z). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Four percent above fifty-seven leaves zero point nine six below it, so zed is one point seven **five**, positive because fifty-seven is above the **mean**. Seven over sigma is one point seven five, so sigma is about four **hours**. A zed of minus one point seven five is wrong. It makes sigma negative, and a standard deviation can't be **negative**.

Visual: the card shrinks to the top. `GivensStrip`: "X ∼ N(50, σ²)", "P(X > 57) = 0.04", "P(Z < 1.75) = 0.9599". "4%" and "57 hours" underlined; on "five" row "P(Z < 1.75) = 0.9599 ≈ 0.96, so z = 1.75" (52 px) with the card's 0.9599 underlined. On "mean" the card's axes draw a teal bell at 50 with 57 to the right and its right tail shaded "4%". On "hours" rows "(57 − 50)/σ = 1.75", green framed "σ = 7/1.75 = 4 hours". On "negative" a red slip "z = −1.75, σ = −4" writes and is crossed (caption "57 is above the mean"). Hold about 1 s.

### 14. handoff
> So a probability fixes a zed score, and the zed score fixes the unknown mean or spread. That's the last of the normal distribution videos. You can now go from values to probabilities, and from probabilities back to the mean or **sigma**. Later practice videos mix these skills with the rest of the **course**.

Visual: the framed "Area to z, then z to the unknown." shows small at the top, then fades on "That's the last". Board clears to the fills' bell centred at 508.64 with its 1% tail at 490, the bottle plate small. On "sigma" three small tool chips write across the top: "68, 95, 99.7" (s10), "z = (x − μ)/σ" (s11), "area → z → μ or σ" (s12). On "course" chip "Later: mixed practice". Hold about 2 s. This is the strand's final frame and g01's opening frame (unchanged); scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Find z first, then solve z = (x − μ)/σ.
- Table backwards: a tail p is a left area 1 − p at +z.
- Below the mean: z < 0. Above: z > 0.
- Check on a sketch; round in the safe direction.
- Whole-σ percentages: use 68, 95, 99.7.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Area to z, then z to the unknown.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 14's frame exactly (the fills' bell at 508.64 with the 1% tail, the bottle plate small, the three tool chips, chip "Later: mixed practice"). This is the final frame and g01's opening frame.

## Teaching checks

- **Does it explain causes?** Why a probability fixes z: every normal curve is the same curve in σ units, so a given tail ends at a fixed number of σ (2). Why search for 0.99: the table gives left areas for positive z, and the 1% left tail mirrors a 1% right tail (3). Why z is negative: 490 is below the mean (3). Why "at least" 508.64: a higher mean shrinks the tail (5). Why σ = 1/3: 0.3% outside means the limits are 3σ out (6). Why round the cereal's σ down: a larger σ spreads more boxes below 375, and 2.0 fails (7).
- **Misconceptions addressed:** "use the probability as z" (2, 3); "look for 0.01 in the table" (3); "the sign doesn't matter" (3; A2 crossed); "subtract zσ from the cut-off" (A1 crossed); "round a maximum to the nearest" (7).
- **One idea at a time:** one question (1), one reason (2), one look-up (3), one equation (4), one check (5), one empirical-rule case (6), one table case (7), one comparison of the two levers (8). Only the needed earlier results stay bright: z = −2.33 carried into 4 and 5; the table excerpt shows only the rows in use.
- **Video makes it easier:** the student turns the dial with the machine and watches the short bottles fall from 19 to 2 of 200 as the tail shrinks to 1% (2, 5), sees the table scanned for 0.99 (3), sees the bell land at 508.64 with the 2.33σ ruler (4), sees the bolts' bell squeeze until its 3σ marks meet the limits (6), sees σ = 1.9 pass while σ = 2.0 fails (7), and sees the two levers meet the same condition side by side (8).
- **Visual standard, item by item:** 1 the painted filling head with its dial and the bottles by about 15 s, returning in 2, 4, 5, 9 and 14; the cereal box and bolt in 6 to 8; 2 a new stage every 30 to 60 s; 3 `FillDial` with live short-bottle counts and tail readouts, `tailTarget` with the σ-ruler, the bolts' σ slider with a live outside readout; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (4, 6, 7), framed answers and crossed slips; 8 framed card and five short bullets; 9 the dial's small turn dropping the short bottles tenfold, the 3σ marks meeting the limits, pass against fail.
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
| Simulated bottles (author note h) | 200 stored z values; short: 19 (μ = 500), 6 (504), 2 (508), 2 (508.64); model tails 0.1056, 0.0401, 0.0122, 0.0099 | 1, 2, 5 |
| Reverse look-up | target 0.99; 0.9898 (2.32), 0.9901 (2.33); z = −2.33 | 3 |
| Unknown μ | −2.33 = (490 − μ)/8; 490 − μ = −18.64; μ = 508.64 mL (safe table setting); check 0.0099; exact boundary ≈ 508.6108 (508.61078); the app's 508.61 is rounded (tail 0.0100026, just over 0.01), so 508.64 stays explicitly safe (grey) | 4, 5, 14 |
| Bolts (site lesson 2 Q3(c)) | μ = 50 mm, limits 49 and 51; σ = 0.5: about 5% rejected; target about 0.3%: 3σ = 1, σ = 1/3 ≈ 0.33 mm | 6 |
| Cereal (site lesson 3 Q3(a)) | 375 g, μ = 380 g, under 0.5%; 0.9949 (2.57), 0.9951 (2.58); z ≈ −2.575 (app −2.576); σ = 5/2.575 ≈ 1.94; maximum 1.9 g; σ = 1.9: ≈ 0.43%; σ = 2.0: ≈ 0.62% (1 − 0.9938) | 7 |
| Two levers | σ = 2 g: μ = 375 + 2.575 × 2 = 380.15 (tail 0.00501, just short; app 380.152); round up to 380.16 g (tail 0.0049) | 8 |
| A1 | N(μ, 9); 2% below 1000; 0.9798 (2.05), 0.9803 (2.06); z = −2.05; μ = 1006.15 g; crossed 993.85 | 10, 11 |
| A2 | N(50, σ²); 4% above 57; 0.9207 (1.41, distractor), 0.9599 (1.75); σ = 4 hours; crossed σ = −4 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python 3.14 and `statistics.NormalDist` (3 Nov, scratchpad script `s10s12/nums_s10s12.py`); Codex to re-check.

- Φ to 4 dp: Φ(2.32) = 0.9898, Φ(2.33) = 0.9901, Φ(2.57) = 0.9949, Φ(2.58) = 0.9951, Φ(2.63) = 0.9957, Φ(2.50) = 0.9938, Φ(2.05) = 0.9798, Φ(2.06) = 0.9803, Φ(1.41) = 0.9207, Φ(1.75) = 0.9599.
- Inverse: z(0.01) = −2.3263; z(0.005) = −2.5758; z(0.02) = −2.0537; z(0.04) = −1.7507.
- Fills: 2.33 × 8 = 18.64; 490 + 18.64 = 508.64; exact boundary 508.6108 (508.61078; rounded display 508.61, whose tail 0.0100026 is just over 0.01); Φ(−2.33) = 0.0099; leftward nudge to 508.0 gives 0.0122. Simulated bottles (recalculated 7 Nov, scratchpad `maths07/nums.py`, seed 1212): short counts 19, 6, 2, 2 at μ = 500, 504, 508, 508.64; Φ((490 − μ)/8) = 0.1056, 0.0401, 0.0122, 0.0099.
- Bolts: 1/0.5 = 2 (σ = 0.5 limits at 2σ; outside 0.0455); 3σ = 1: σ = 0.3333; outside 2Φ(−3) = 0.0027.
- Cereal: 5/2.575 = 1.9417; 5/2.576 = 1.9410; σ = 1.9: z = −2.6316, tail 0.00425 (table 0.0043); σ = 2.0: z = −2.5, tail 0.0062.
- Two levers: 2.575 × 2 = 5.15; 375 + 5.15 = 380.15; exact 380.1517, so the cents setting is 380.16 (Φ(−2.58) = 0.0049).
- A1: 2.05 × 3 = 6.15; 1006.15; 993.85. A2: 7/1.75 = 4.

## Memory aid check

- **"Area to z, then z to the unknown."** Meaning, as said in scene 9: find the z-score that matches the given probability first (reverse table look-up, sign from the side), then solve z = (x − μ)/σ for the unknown mean or standard deviation, and check the direction on a sketch. Assumptions checked: the variable is normal and only one of μ and σ is unknown (two unknowns need two conditions, out of scope); "area" means the area on one side of the given value, mirrored to a left area for the table (scene 3). The empirical-rule route (scene 6) is the same idea with a whole-σ z (z = ±3). It helps a new case: A1 and A2 each start by turning the percentage into a z. Introduced after the worked cases (scenes 4 to 8).
- **Considered, not used:** "Below is minus" (a sign rule; it is in key note 2 and A2's crossed mistake; one aid per video).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,515 characters**, 15 scene headings (Revision 3: 5,302, below the floor). Characters per scene (1 to 15): 346, 569, 536, 408, 508, 615, 736, 432, 186, 47, 385, 43, 328, 301, 75.

At 13.3 characters per second the speech before the notes is about 409 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 18 s of settling for the conveyor runs (2, 5), the dial and sliding bell (2), the table scan (3), the bolts' squeeze (6), the pass and fail bells (7) and the two panels (8); the key-notes scene is 45 s (1,350 frames). Total **about 498 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 72 s spare. Feedback: scene 11 about 32 s (at the edge; its named trim is "Sigma is three, so" to "So", −16) and scene 13 about 26 s, including the 1 s holds.

No reserve trims are offered: the count sits just above the floor.

## Scene list and build ids

Lesson key `m-a12s12` (route math-a12-s12). Suggested explainer folder `src/explainer/lessons/math-a12-s12` and build folder `docs/production/claude-pm/lessons/m-a12s12` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, probability-fixes-z, table-backwards, solve-mean, check-direction, sigma-empirical, sigma-table, two-levers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s11's last frame continues into scene 1 (same bell); 1 to 2 camera continue (the slide); 2 to 3 clear change (table); 3 to 4 clear change back to the fills; 4 to 5 camera continue; 5 to 6 clear change (bolts); 6 to 7 clear change (cereal); 7 to 8 camera continue (two panels); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s12-rev4-learning-review.md`, `science_check` = `checks/m-a12s12-rev4-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, viewed with the image reader): `chemistry/m7-pet-bottle-v1.png` (a plain empty PET drink bottle with a white screw cap, no label, transparent) is the bottle plate, with a coded fill level drawn inside its cavity (measures from s11's plate-measures file). No filling machine, nozzle, conveyor, cereal box or bolt plate exists in any course (searched filling, nozzle, conveyor, machine, cereal, box, bolt, screw); Revision 1's `maths-a12-bottle.png` and `maths-a12-cereal-box.png` were never painted and are withdrawn.

Need (painted, new; see the Codex asset brief): `ma12-filling-head-v1.png`, `ma12-cereal-box-v1.png` and `ma12-hex-bolt-v1.png`. Reused: `chemistry/m7-pet-bottle-v1.png`.

Coded (studio kit): the dial pointer and readouts, the conveyor, fill levels and the 490 line, curves, rulers, the table, sliders, panels, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: the s09 to s11 parts (`NormalCurve` with `bands` and `matchMarks`, `TailMirror`, `SigmaRuler`, `ZTable`), decision 45's `TrackerFill`, decision 32's level fill against a plate and plate meter readout, and the studio's `ParameterSlider`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip` and `QuestionAxes`.

Additions:
1. **`FillDial`**: a painted head's dial (centre and radius from its sidecar) with a coded violet pointer driving μ; a conveyor of bottle sprites, each filled to μ + σz from stored z values against a red limit line, short ones flagged, with live "short: n of N" and the model tail Φ((c − μ)/σ). Checks: 19, 6, 2, 2 at μ = 500, 504, 508, 508.64; tails 0.1056, 0.0401, 0.0122, 0.0099.
2. **`ZTable` reverse mode** (`findEntry`): scan, two nearest entries with gap readouts, the nearer boxed or "halfway". Checks: 0.9900 gives 2.33 (gaps 0.0002, 0.0001); 0.9950 gives 2.57 and 2.58, halfway.
3. **`NormalCurve` `tailTarget`**: μ animated so the tail below c moves to a target, the readout from Φ every frame, a linked `SigmaRuler`; the end position uses the unrounded 508.61078299 internally (labels "≈ 508.6108"); the landing in scene 4 uses 508.64 (0.0099); the nudge goes to 508.0 (0.0122).

## Codex asset brief (Maths A12 S12, a bottle-filling machine)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s12.md`, draft route entry math-a12-s12. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, logos, brand names, mascots, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-filling-head-v1.png` (1,200 × 1,800 px, portrait): one stainless-steel bottle-filling head seen from the front, as in a small drinks factory: a squat cylindrical tank on a short column, a single downward nozzle at the bottom centre, and on the tank's face **one large round dial with a plain pale face and no markings or pointer** (the pointer and readout are coded). Codex reports the dial's centre and radius and the nozzle tip's position in `ma12-filling-head-v1.json`.
2. `ma12-cereal-box-v1.png` (1,000 × 1,400 px, portrait): one plain upright cereal box, three-quarter front view, warm-coloured card with a simple abstract stripe; no brand, logo, text, characters, nutrition panel or weight label.
3. `ma12-hex-bolt-v1.png` (1,600 × 600 px, landscape): one steel hex-head bolt lying flat, side view, head at the left, threaded shank to the right; no markings on the head.

Report inspection on the paper background (`#f6f1e7`) with the filling head at 460 px tall above a row of `chemistry/m7-pet-bottle-v1` sprites at 60 px wide, the cereal box at 380 px tall and the bolt at 420 px wide, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s12-provenance.json`.

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

- **0. Length (root).** Revision 4 is 5,515 characters (about 498 s), now above the 5,500 floor; the addition is the dial simulation's evidence, not padding.
- **1. Closing line (root).** The strand ends here and the playlist's next video (g01) is differentiation practice, so scene 14 says "Later practice videos mix these skills with the rest of the course" with chip "Later: mixed practice" (root decision 4). If a statistics practice video is added (for example in g03), the chip names it.
- **2. Table layout (maths check).** As s11 open decision 2: the reverse look-up assumes a P(Z < z) table for z ≥ 0 to 4 dp.
- **3. Halfway z (maths check).** The cereal's z = 2.575 is the halfway value from a 4 dp table; the site uses 2.576 (technology). Both give σ ≈ 1.94 and the maximum 1.9 g.
- **4. Two unknowns (root).** Finding μ and σ together from two conditions is left to a practice video; `cib1892b99` reads "the mean or standard deviation".
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 4 (7 Nov) has had no independent review. Next: student learning review (trace from s10 and s11; check that turning the dial makes "a probability fixes μ" felt before the method; that the sliding bell gives the reason a probability fixes z; that the reverse look-up and the sign are separate visible stages; that each direction check is tied to the picture and the conveyor; that the bolts' squeeze shows why σ = 1/3; that the pass and fail bells make the rounding direction clear; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The tail shrinking to 1%, the table scan, the 2.33σ ruler, the bolts' squeeze and the pass and fail ghosts carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s11's scene 14 (same designer); the closing frame ends the strand.

## Revision 2 (4 November 2026, brief 162 repairs)

Blocker: scene 8 rounds the σ = 2 setting up to 380.16 g (380.15 leaves a 0.00501 tail), funded by cutting the cost sentence; scene 5 calls 508.64 a safe table setting (exact boundary 508.61) and cuts "any mean below this"; attempt 1 asks for an approximate value from the given table values (1006.16 also accepted); feedback 1 trimmed (root decision 60). Narration now 5,302 characters (counted by the build parser rules). No em dashes.

## Revision 3 (5 November 2026, brief 171 fixes)

Findings from `checks/m-a12s12-error-check.md`.

- Should fix 1 (scene 5, Decisions, author notes, Numbers used, tailTarget brief): 508.61 is now called the app's rounded value; the exact boundary is 508.61078299 (SymPy), shown as "≈ 508.6108". Recalculated tails: 508.61 gives 0.01000261 (just over 0.01), 508.6108 gives 0.00999994, 508.64 gives 0.00990 (table 0.0099, explicitly safe). `tailTarget` uses the unrounded value internally. Scene 5's leftward nudge now goes to μ = 508.0 (tail 0.0122), past the boundary, before "more than 1%" shows.
- The Boundary summary now ends the two-levers point at 380.16 g (380.15 is just short, tail 0.00501; 380.16 gives 0.00494).
- No narration change.
- Narration count: 5,302 characters (scene narration only, ** removed, joins excluded; narration unchanged), estimated about 500.2 s with the stated holds. No em dashes.


## Revision 4 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). The syllabus point, every site number, the worked cases, both attempts, the memory aid and both joins are unchanged.

- **Anchor and why:** a drink-bottle filling machine whose dial sets the mean fill (site lesson 3's machine). The dial is the unknown μ; turning it and watching short bottles fall from about one in ten to about one in a hundred is the lesson's cause, seen. g01's fixed opening frame (the bottles' bell at 508.64) ties this anchor to s12.
- **Simulations:** `FillDial` (a conveyor of 200 simulated bottles under the dial, live short counts 19, 6, 2, 2 and the model tail); `tailTarget` with the σ-ruler; the bolts' σ slider with a live outside readout; the table's reverse scan; pass and fail bells.
- **Colour roles:** curves teal; tail areas pale amber; z and table highlights amber; μ, the dial and σ-steps violet; the 490 limit, short bottles and fails red; passes and answers green; mistakes red.
- **Plates:** new `ma12-filling-head-v1`, `ma12-cereal-box-v1` (renaming the unpainted `maths-a12-cereal-box.png`) and `ma12-hex-bolt-v1`; reused `chemistry/m7-pet-bottle-v1` as the bottle plate (the unpainted `maths-a12-bottle.png` withdrawn).
- **Narration changes (not voiced):** scenes 1, 2 and 5 (the dial, the simulated short bottles); scene 9 gains a cue word. Other scenes keep their Revision 3 text.
- **Counts:** 5,302 → 5,515 characters (now inside the band); about 500 s with the old 60 s notes hold → about 498 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s11's bottles' 1% question (unchanged); ends on the bottles' bell at 508.64 with the three tool chips (unchanged), which g01 opens on.
- **Kit additions:** `FillDial`; `ZTable` reverse mode; `NormalCurve` `tailTarget`.

## Revision 5 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **Exactly 1% versus at most 1% (scene 4).** New sentence: "With the table's rounding, that leaves a tail just under one percent, so it meets the limit." The answer chip shows "tail ≈ 0.0099, just under 1%".
- **Largest σ on the one-decimal grid (cereal).** Every "σ ≤ 1.9 g" label now reads "(one-decimal settings)". The strict boundary is σ < 1.941…; with real-valued σ there is no largest value, and the task strip already asks for one decimal place.
- **Table-derived σ (attempt 2).** "so sigma is about four hours"; author note gives exact σ ≈ 3.998.
- **Simulated counts (scene 2).** "in one simulated run, nineteen come up short" (a sample outcome, not a guaranteed count).
- **Narration changed:** scenes 2 (569 to 591), 4 (408 to 501), 13 (328 to 334). Total 5,515 to 5,636 characters, 15 scene strings (build parser rules).
