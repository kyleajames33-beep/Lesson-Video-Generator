# Year 11 Chemistry WS V05: Analysing data and information. How do we judge uncertainty and the limits of a chemistry result? (design)

Status: Revision 1 (5 November 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,417 characters, 17 scenes, about 570 s (9.5 minutes), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending. Voice: the Google voice (all Year 11).

Scope: fifth Year 11 Chemistry (2017 syllabus) Working Scientifically skills video, playlist entry 36, between `chem-y11-ws-v04` (processing data, another designer, in parallel; it opens on `chem-y11-m2-v04`'s five magnesium runs) and `chem-y11-m2-v05`. Templates as `chem-y11-ws-v03.md` (same series; structure, Decisions, Numbers used, length estimate), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates). Cases: ws-v04's processed magnesium graph (the trend, and one point off it) and m2-v04's magnesium mass reading (sample size); the copper sulfate heating investigation of ws-v01 to ws-v03 for error, uncertainty and assumptions (36.1% water from `chem-y11-m1-v07.md`; class 1 and class 2 results from ws-v03). No pre-design pack exists: the pack work is done in this file. Route entry: `chem-y11-ws-v05` in `../../programme/chem-y11-route-inputs.json` (start: "Use the current separation or quantitative investigation as one concrete case"; stop: "Apply analysing data and information to that case and a new question; do not re-teach the subject mechanism"; next handoff: "How do mass percentages reveal an empirical formula?"). Site lesson read in full (5 November, read-only): `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson18.sa.html` (SHA256 `ce0613b3dcad355698647aa7a762a651ff21b4142db9ff7442acd762ec340499`, recomputed, matches the route). Used: the random versus systematic card (definitions, "affects all repeats equally", the uncalibrated-balance example idea), the "Human error scores zero marks" rule and its answer structure (name, direction, fix), the gravimetric "incomplete drying" scenario (made into attempt 1 on a hydrate), the predict card (repeats improve precision, not a shifted result) and trap 2. Not used: titration scenarios (Year 11 students have not met titration; they belong to Module 2 lesson 10 and Year 12), the equipment table (ws-v03 used its principle), the site's validity and reliability definitions (`chem-y11-ws-v01.md` site note 1).

Owner rules applied: as ws-v03 (one learner question; no people, hands, faces or body outlines; apparatus alone; real apparatus as painted plates; graphs, number lines, error cards and the calculation layout coded; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; nothing in the bottom 12% of the frame). The course definitions (root decision 12) are used unchanged: valid, the method measures what it claims to measure; reliable, repeating the whole experiment gives consistent results; accurate, close to the accepted value; precise, repeated readings agree closely. This video owns error types (root decision 12).

Syllabus content (Chemistry Stage 6, 2017, Year 11 Working Scientifically, "Analysing Data and Information", outcome CH11/12-5; local ledger IDs), quoted from `../../programme/syllabus/chem-2017-y11.json`:

- `C11-WS5-01`: "derive trends, patterns and relationships in data and information"
- `C11-WS5-02`: "assess error, uncertainty and limitations in data (ACSCH004, ACSCH005, ACSCH033, ACSCH099)"
- `C11-WS5-03`: "assess the relevance, accuracy, validity and reliability of primary and secondary data and suggest improvements to investigations (ACSCH005)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx (page 34)

**Boundary:** opens on ws-v04's assumed final frame (the processed magnesium graph, volume of hydrogen against mass of magnesium; see "Opening frame"). Teaches: reading a trend and its chemical cause, a point off the trend and its reason, and the range a trend holds in (`C11-WS5-01`); error as the difference from the true value; random and systematic error by cause and effect, with direction (`C11-WS5-02`); "human error" as a non-answer; uncertainty of a reading (digital: one in the last digit; analogue: half the smallest division); the uncertainty of a difference; percentage uncertainty; adding percentage uncertainties when one measured mass is divided by another; percentage error; judging a result by comparing percentage error with percentage uncertainty; sample size as a limit; limitations from assumptions; relevance of secondary data; validity and reliability recalled; improvements matched to the problem (`C11-WS5-03`). Not taught: significant-figure rules (one sentence would not do them justice; ws-v04 or the course's maths support), titration errors, standard deviation, graph construction (ws-v04), the empirical formula (m2-v05, the handoff).

## Decisions

- **Learner question (route wording kept).** "How do we judge uncertainty and the limits of a chemistry result?" The answer, in order: read the trend and its cause (2); sort error by cause into random and systematic, with a direction (3 to 5); size the uncertainty of each reading and of the result (6, 7); compare percentage error with percentage uncertainty to decide whether a gap is real (8); see how sample size limits a result (9); check the assumptions and the secondary data (10); match each improvement to its problem (11).
- **Opening frame (reconciled by root, 5 November).** ws-v05 opens on ws-v04's actual final frame (finished magnesium graph with run 3 ringed anomalous, gradient 1009 mL g⁻¹, result 24.6 ± ? g mol⁻¹ against accepted 24.31). The spoken phrases already fit it.
- **Two cases, each where it teaches best.** The magnesium graph carries the trend (`C11-WS5-01`), because it is on screen from ws-v04 and its proportional pattern has a one-sentence particle cause (one Mg atom, one H₂ molecule; m2-v04). The copper sulfate investigation carries error, uncertainty and assumptions, because the student owns its numbers (2.50 g in, 0.90 g lost, 36.0% against 36.1%; class 2's 34.4% from ws-v03, where the cause, uncovered cooling, was found but its error type deliberately not named; this video names it). The magnesium reading returns in scene 9, where m2-v04 said "the smallest reading is the weak link" and left the quantities to this video.
- **Error (scene 3; site card, reworded to course definitions).** Error: any difference between a measured value and the true value. Random error: changes unpredictably between readings, either way; spreads results; reduces precision; averaging repeats reduces its effect. Systematic error: pushes every result the same way by about the same amount because something in the method or equipment is the same every time; reduces accuracy; repeats can't remove it. The site's linking of systematic error to validity is not used (site note 1 in ws-v01); this video says a systematic error makes results inaccurate, and scene 10 keeps "valid" for the method measuring what it claims to.
- **Prediction (scene 4, 3 s).** Two causes from earlier videos: uncovered cooling (ws-v02, ws-v03) and a roaring flame (ws-v01's group C). Both systematic; directions opposite (low, high). Showing both directions in one beat stops "systematic means too low".
- **Answer structure (scene 5; site "Human error scores zero marks").** Name the specific cause, say which way it pushes the result, give a fix. "Mistakes" (knocking crystals out) are not called errors: author note e.
- **Uncertainty (scenes 6, 7).** Uncertainty: the range either side of a reading where the true value probably lies. Digital balance to 0.01 g: ±0.01 g (one in the last digit). Analogue scale: half the smallest division (the site's rule, which applies to scales read by eye; ws-v01 site note 6). Mass lost is a difference of two readings, so ±0.02 g. Percentage uncertainty in the loss 0.02 ÷ 0.90 × 100 = 2.2%; in the starting mass (also a difference: crucible plus crystals minus crucible) 0.02 ÷ 2.50 × 100 = 0.8%; dividing one measured mass by another adds percentage uncertainties: about 3.0%. The final weighing is the same reading used for the loss; author note b explains why this simple sum is a fair upper estimate. On the number line the bar for 36.0% runs 34.9 to 37.1 (shown, not spoken).
- **Judging the gap (scene 8).** Percentage error: |result − accepted| ÷ accepted × 100. Class 1: 0.3%, inside 3.0%, so the instrument's limits could explain it. Class 2: 4.7%, larger than 3.0%, so something systematic shifted it, and ws-v03 already found it (uncovered cooling). The rule on screen: "% error > % uncertainty → look for a systematic error". This is the video's key judgement and answers the hook.
- **Sample size (scene 9; pays off m2-v04 scene 8).** m2-v04's 0.042 g of ribbon shows as 0.04 g on the 0.01 g balance: ±0.01 g is 25% of the reading, so the molar mass could be out by about a quarter; on a 0.001 g balance, ±0.001 g is about 2.4% ("about two percent"). Improvement: a bigger sample or a more precise balance.
- **Limitations, relevance, validity, reliability (scene 10; `C11-WS5-03`).** The result is valid only if three assumptions hold (all water left; nothing else lost; no water regained), each with its evidence (constant mass; white, not black powder; desiccator). The accepted value is secondary data, relevant only if the crystals were pure pentahydrate (this prepares ws-v06, where old crystals fail that test). Reliability recalled with its course definition; each class ran three full runs.
- **Improvements (scene 11).** Systematic: change the method. Random: more repeats, average. Large uncertainty: bigger sample or more precise instrument. A three-row table.
- **Memory aid:** "Name it, size it, fix it." (see "Memory aid check").
- **Attempts (original, HSC style).** A1 (gravimetric, a hydrate the student met in v07's attempt 2): 3.00 g of MgSO₄·7H₂O heated once for 5 minutes, cooled in a desiccator, loses 1.38 g; accepted 51.1%; percentage uncertainty about 2% given. Model: 46.0%; percentage error 10%; far above 2%, so systematic (low); cause: one heating left water in the solid; fix: heat to constant mass. Crossed: "do more repeats". A2 (the magnesium method of m2-v04, a new error): a class works at 30 °C but uses the 25 °C molar volume (24.79 L mol⁻¹) in every run; mean molar mass 23.9 g mol⁻¹ against 24.31. Model: 1.7%; systematic (the same wrong value every run); the gas occupies a larger volume at 30 °C, so n(H₂) = V ÷ 24.79 is too big and MM = m ÷ n too low; fix: use the molar volume for the measured temperature. Crossed: "random, because temperatures vary". The card restates the method's two relationships (MM = m ÷ n; n = V ÷ molar volume) and that a warmer gas takes up more volume, so it does not depend on the m2-v04 design's wording. (m2-v04's own attempt 2 already uses the wet-flask error, so it is not repeated here.)
- **Mistake scene:** none separate. "Systematic means too low" (4, 5); "human error" (5); "an error that comes from conditions is random" (crossed in A2); "uncertainty is a mistake" (6); "more repeats fix everything" (3, crossed in A1); "any gap from the accepted value means a mistake" (8).
- **Handoff (route next: `chem-y11-m2-v05`, "How do mass percentages reveal an empirical formula?").** Scene 16 turns the result's two masses (1.60 g of white powder, 0.90 g of water) into a question: could the masses alone give the 5 in CuSO₄·5H₂O? `chem-y11-m2-v05.md` (same designer) opens on this frame and answers it in its first scenes.
- **Site sources used:** `l18-errortype-title` (random and systematic definitions, "affects all repeats equally"); `l18-errors-title` gravimetric "incomplete drying" (A1's idea); `l18-predict-title` (repeats and a shifted result); `l18-traps-title` traps 1 and 2 ("human error"; "repeats fix systematic error"); `l18-intentions-title` uncertainty key term (with the digital-reading precision noted).
- **Site notes (read 5 November; for root to log in `../site-corrections-chem-y11.md` if accepted).** ws-v01's notes 1 to 6 on lesson 18 stand (validity merged with accuracy; drill 1's direction; the self-contradicting parallax and overshoot classification; volumetric flask tolerance; "undiluted titrant"; the half-division rule stated without the digital case). New:
  7. `l18-errors-title` worked example 2 ("lost precipitate during filtering ... Error type: random (if accidental and variable)") and the scenario card "Losing drops of analyte during transfer" (random): a loss always pushes the mass, and so the result, one way (low). It varies in size but not in direction, so a careful answer calls it a one-directional error (often treated as systematic in HSC marking), or better, a mistake to avoid by redoing the run. Suggest: "Effect always low; avoid it, or repeat the run if it happens."
  8. `l18-errortype-title` random error "Cannot be eliminated completely" sits beside systematic "Must be identified and corrected", with no mention that uncertainty is separate from error. Suggest adding one line: "Uncertainty is the limit of the instrument; it remains even with no error."
- **Cause chain taught, in order:** (1) one Mg atom gives one H₂ molecule, so volume rises in proportion to mass, and a point off the line needs its own cause (2); (2) every result differs from the true value by some error (3); (3) a cause that varies spreads results; a cause that repeats shifts them (3 to 5); (4) every instrument limits a reading, and the limits add when readings are combined (6, 7); (5) a gap bigger than the uncertainty needs a systematic cause (8); (6) a smaller measured quantity makes the same limit matter more (9); (7) a result holds only if its assumptions do (10); (8) each problem has its own fix (11).
- **Entry knowledge:** ws-v01 to ws-v04 (the question, plan, accurate and precise, processed table and graph); v06 (constant mass); v07 (36.1%); m2-v02 to m2-v04 (mole, molar mass, the magnesium molar-mass practical, its weak reading and its molar volume); Stage 5 safe practical work.
- **Learner-visible vocabulary (plain meaning at first use):** trend (how one variable changes as another changes, 2); error (3); random error (3); systematic error (3); uncertainty (6); percentage uncertainty (7); percentage error (8); assumption (something the result depends on being true, 10); relevant (10).
- **Legacy logic ported:** none.
- **Explainer motion (coded unless a plate is named):** **result graph** carried in from ws-v04 (proportion brackets, a particle strip, the outlier ring and a range shading in scene 2); **error cards** (two cards, "random" and "systematic", each with a small dot animation: random dots jitter either side of a gold mark; systematic dots slide together to one side); **direction arrows** (scene 5, up and down arrows on a % readout); **balance readout** (flickering last digit; ±0.01 tag); **measuring cylinder zoom** (scale with half-division bracket); **calculation layout** (task strip, equation strip, grouped givens, one working row at a time); **`DotLine`** from ws-v03 (number line with gold accepted value, now with uncertainty bars); **sample-size bars** (scene 9: the coarse and fine magnesium readings, each with its uncertainty cap drawn to scale); **assumption checklist** (`CheckList`, three rows, each gaining an evidence chip); **fix table** (three rows); `Countdown`, `QuestionCard`, `Chip` with `cross`, scribble circle, `PenArrow`, `HandText`, `KeyNotes`, `Heading`.
- **Colour key:** as ws-v03 (accepted value gold; class 1 teal, class 2 navy); random error violet; systematic error rose; uncertainty bars and ± values amber; givens navy; earlier rows dimmed; crossed items red strike.
- **Board layout (constant):** heading top left; plates and readouts at the left; graph, number line or calculation layout at the right; the memory line, once written, as a small strip at the top right.

Author notes (not learner copy):
(a) Magnesium runs (m2-v04's final frame): volumes 48.50 − 36.40 = 12.10; 49.2 − 28.6 = 20.6; 47.80 − 25.40 = 22.40; 48.90 − 13.60 = 35.30; 48.50 − 6.30 = 42.20 mL. Expected at 25 °C, 100 kPa (V = m ÷ 24.31 × 24.79 L): 12.2, 20.4, 28.6, 35.7, 42.8 mL, so run 3 is about 6 mL low (escaped gas), the others within about 1 mL. Only "double the mass, double the volume" (0.020 g → about 20 mL; 0.042 g → about 42 mL) is shown.
(b) Uncertainty arithmetic. Readings ±0.01 g. Loss = (crucible + crystals) − (crucible + powder): ±0.02 g. Start = (crucible + crystals) − crucible: ±0.02 g. Percentage uncertainties 2.22% and 0.80%, sum 3.02% ("about three percent"). Because one reading appears in both differences, the errors are not independent; the simple sum is a conservative (upper) estimate, which is the school convention. Check by the range method: largest 0.92 ÷ 2.48 = 37.1%, smallest 0.88 ÷ 2.52 = 34.9%, so 36.0 ± 1.1%, the same as 3.02% of 36.0 = 1.09. Class 2: 34.4 ± 1.0 (33.4 to 35.4), which does not reach 36.1.
(c) Digital reading uncertainty: ± one in the last digit is the common school convention for a digital balance (some sources use ± half the last digit). Analogue: ± half the smallest division. Science check to confirm the NSW convention preferred.
(d) Percentage error: class 1 |36.0 − 36.1| ÷ 36.1 × 100 = 0.28% ("about zero point three"); class 2 1.7 ÷ 36.1 × 100 = 4.71% ("about four point seven").
(e) Mistakes versus errors: a spill or a knocked crucible is a mistake; the run is repeated, not analysed. HSC answers are expected to name a specific source; "human error" is rejected by markers (the site's framing).
(f) Sample size: 0.01 ÷ 0.04 = 25%; 0.001 ÷ 0.042 = 2.4% ("about two percent"). m2-v04 author note d gives the 0.035 to 0.045 g range and a molar mass of about 21 to 26 g mol⁻¹ for the coarse reading; this video speaks only "out by about a quarter".
(g) A1: MgSO₄·7H₂O, Mr = 24.3 + 32.1 + 64.0 + 126.0 = 246.4; water 126.0 ÷ 246.4 = 51.1%. Result 1.38 ÷ 3.00 = 46.0%; percentage error 5.1 ÷ 51.1 = 9.98% ("about ten percent"). Percentage uncertainty 0.02 ÷ 1.38 + 0.02 ÷ 3.00 = 1.45 + 0.67 = 2.1% ("about 2%" on the card). Heating a hydrate once for 5 minutes commonly leaves water in the solid (the heptahydrate loses its last water only on stronger, longer heating); constant mass is the fix.
(h) A2: molar volume at 30 °C and 100 kPa = 24.79 × 303.15 ÷ 298.15 = 25.21 L mol⁻¹. Using 24.79 overstates n by 25.21 ÷ 24.79 = 1.0168, so MM = 24.31 ÷ 1.0168 = 23.91 (card: 23.9). Percentage error |23.9 − 24.31| ÷ 24.31 × 100 = 1.69% ("about one point seven").
(i) Pronunciations: "plus or minus zero point zero one grams"; "magnesium sulfate heptahydrate"; "forty-six point zero seven".

Main question: *How do we judge uncertainty and the limits of a chemistry result?*
Entry knowledge: ws-v01 to ws-v04; v06, v07; m2-v04.
Stops after: trends with causes; random and systematic error with direction; reading and combined uncertainty; percentage error against percentage uncertainty; sample size; assumptions and secondary data; matched improvements. No empirical formula (m2-v05).
Handoff: chem-y11-m2-v05, empirical formula from masses.

## Opening frame and final frame

- **Opening frame (reconciled by root, 5 November):** ws-v04's final frame exactly (`chem-y11-ws-v04.md` "Opening frame and final frame"): the finished `DataGraph` at the right (mass of magnesium 0 to 0.045 g, volume of hydrogen 0 to 45 mL), four crosses on a teal best-fit line through the origin, run 3's cross at (0.028, 22.40) in a rose "anomalous" ring, the gradient triangle "≈ 1009 mL g⁻¹"; the result box "MM(Mg) = 24.6 g mol⁻¹" with a violet "± ?" tag and the gold "accepted: 24.31 g mol⁻¹" chip; the processed table small at the left; the "Next" chip.
- **Final frame (m2-v05 opens on it):** at the left, the white-powder crucible (`y11c-cuso4-crucible-lid-white-v1.png`) beside a small coded steam wisp; at the right, a two-segment mass bar: "CuSO₄ (white powder) 1.60 g" in pale grey and "H₂O (lost) 0.90 g" in pale blue; above it the formula "CuSO₄ · ? H₂O" with the "?" in amber; the chip "Next: How do mass percentages reveal an empirical formula?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour key as in Decisions.

### 1. hook: how far is too far?
> Last time, the magnesium runs became a graph, with the points close to a straight **line**, but not exactly on it. And in our copper sulfate investigation, class one got thirty-six point zero percent, class two got thirty-four point four, and the formula says thirty-six point **one**. No measurement is perfect, so how far off can a result be before something has really gone **wrong**? Let's judge the limits of a chemistry **result**.

Visual: opens on ws-v04's final frame exactly (see "Opening frame"); the "Next" chip fades, the table slides to a thumbnail at the top left and the result box with its "± ?" tag moves to the top right, where it stays until the video works out its uncertainty. On "line" the best-fit line glows faintly and the four used crosses pulse once, each a little off it; run 3's ring stays. On "copper sulfate" the graph shrinks to the left half and two chips write at the right: teal "class 1: 36.0%" and navy "class 2: 34.4%" (grey tag "ws-v03"); on "one" a gold chip "formula: 36.1%". On "wrong" a short number line writes under the chips with the gold mark and the two class dots either side, a "?" on each gap. On "result" the heading writes: "Judging uncertainty and limits".

### 2. reading the trend
> First, the graph. A trend describes how one variable changes as another changes. Here, the volume of hydrogen rises in step with the mass of magnesium, so doubling the mass doubles the **volume**. That has a chemical cause: each magnesium atom gives one hydrogen molecule. One point sits well below the line, and that's the run where bubbles **escaped**. A point off the trend needs a reason, and a trend only holds in the range we **tested**.

Visual: the graph enlarges. Gloss chip "trend: how one variable changes as another changes". On "volume" a `PenArrow` runs along the line and a pair of brackets shows 0.020 g → about 20 mL and 0.042 g → about 42 mL (tag "double the mass, double the volume"). On "each magnesium atom" a small particle strip: one pale-green Mg atom → one white H₂ pair (tag "1 Mg : 1 H₂", grey "molar mass video"). On "escaped" run 3's point (0.028 g, 22.4 mL) gains a rose ring and its notebook note "some bubbles escaped" flies in beside it (tag "outlier, with a reason"). On "tested" the axis region beyond 0.042 g greys with a dashed edge, tag "only tested to 0.042 g".

### 3. two kinds of error
> An error is any difference between a measured value and the true value, and there are two kinds. A random error changes unpredictably, sometimes high, sometimes low. A draught on the balance makes the last digit **flicker**. Random errors spread results out, reducing precision, and averaging more repeats reduces their **effect**. A systematic error pushes every result the same way, because something in the method is the same every time. It reduces accuracy, and repeats can't fix it, because every repeat carries the same **shift**.

Visual: board change. Gloss chip "error: difference between a measured value and the true value". Two error cards write side by side. Left card "random" (violet): on "sometimes high, sometimes low" dots jitter either side of a gold mark; on "flicker" the balance plate (`y11c-top-pan-balance-v1.png`) small above the card, its coded readout flickering "26.81 ↔ 26.82 g" with faint draught lines. On "precision" the card gains "spreads results: less precise". On "effect" ghost dots pile up and their average marker settles on the gold mark (tag "average more repeats"). Right card "systematic" (rose): on "pushes every result the same way" dots slide together to one side of the gold mark; on "accuracy" the card gains "shifts results: less accurate"; on "shift" ghost repeats pile up beside the cluster and the average marker stays off the gold mark (tag "repeats can't fix it").

### 4. prediction (countdown, 3 seconds)
> Try these. Class two's powder cooled uncovered on the bench every run. Another group's flame was so strong that some powder turned black every run. Random or systematic, and which way does each push the **result**?

Visual: two small cause cards: "uncovered cooling, every run" (an uncovered crucible on a bench outline, coded water molecules drifting in) and "roaring flame, black powder, every run" (`y11c-cuso4-crucible-black-v1.png` from ws-v01, small). Chips under each: "random?", "systematic?", "↑ or ↓?". On "result" the 3 s `Countdown` ring runs.

### 5. naming an error well
> Both are systematic, because the cause is there every run. Uncovered powder takes water back from the air, so the mass lost looks too small, and the percentage is too **low**. A strong flame breaks down some copper sulfate too, so extra mass is lost, and the percentage is too **high**. A good error answer names the cause, says which way it pushes the result, and gives a fix. Human error earns nothing, because it names no cause and no **fix**.

Visual: both cards turn rose with "systematic". On "low" a chain writes under card 1: "water regained → final mass too big → loss too small → % too low ↓". On "high" under card 2: "copper sulfate breaks down → extra mass lost → % too high ↑". On "good error answer" a three-slot answer frame writes: "name the cause → direction (↑ or ↓) → fix", and card 1's chain drops into it with "fix: cool in a desiccator". On "fix" a chip "human error" fades in and is crossed, tag "no cause, no fix".

### 6. uncertainty of a reading
> Even with a perfect method, there's still uncertainty: the range either side of a reading where the true value probably lies. Our balance reads to zero point zero one of a gram, so each reading is plus or minus zero point zero one **grams**. On a scale you read by eye, like a measuring cylinder, it's usually half the smallest **division**. Uncertainty isn't a mistake. Every reading has **one**.

Visual: board change. Gloss chip "uncertainty: the range where the true value probably lies". The balance plate enlarges, readout "2.50 g"; on "grams" an amber bracket either side of the last digit, "± 0.01 g", and a short amber bar on a mini number line from 2.49 to 2.51. On "division" the measuring cylinder plate (`m6-measuring-cylinder-v1.png`) slides in with a zoom circle on its scale (1 mL divisions), a bracket half a division wide, "± 0.5 mL". On "one" both brackets glow; chip "limit of the instrument, not a mistake".

### 7. how uncertain is 36.0 percent?
> How uncertain is our thirty-six point zero percent? The mass lost comes from subtracting two readings, and each could be out by zero point zero one, so the loss is plus or minus zero point zero **two**. Divide by zero point nine zero, times a hundred, and that's about two point two **percent**. The starting mass is also a difference of two readings, which adds about zero point eight **percent**. When we divide one measured mass by another, we add their percentage uncertainties. So our result is uncertain by about three **percent**.

Visual: calculation layout. Task strip: "How uncertain is the result 36.0%?". Equation strip: "% uncertainty = uncertainty ÷ measured value × 100". Givens (navy, grouped): "balance: ± 0.01 g per reading"; "start mass 2.50 g"; "mass lost 0.90 g". On "subtracting two readings" a coded readout pair "26.81 g − 25.91 g" with ±0.01 under each; on "two" row "mass lost: 0.90 ± 0.02 g". On "percent" (first) row "0.02 ÷ 0.90 × 100 = 2.2%". On "percent" (second) row "start mass: 0.02 ÷ 2.50 × 100 = 0.8%" (earlier row dims). On "add" a "+" joins the two percentages. On "percent" (third) row "total ≈ 3.0%" (bright, amber); on the `DotLine` below, class 1's dot at 36.0 gains an amber bar (34.9 to 37.1), tag "± 3.0% of 36.0".

### 8. is the gap real?
> Now we can judge. Percentage error compares a result with the accepted value: the difference, divided by the accepted value, times a hundred. Class one is about zero point three percent off. That's well inside our three percent uncertainty, so the balance's limits could explain **it**. Class two is about four point seven **percent** off. That's more than uncertainty can explain, so something in their method shifted the result, and we already know what: the uncovered **cooling**.

Visual: equation strip changes: "% error = |result − accepted| ÷ accepted × 100". On "Class one" row "0.1 ÷ 36.1 × 100 ≈ 0.3%" beside the amber chip "uncertainty ≈ 3.0%"; on "it" a teal "0.3% < 3.0%" and on the `DotLine` class 1's amber bar is seen to cover the gold mark (tick, "limits could explain it"). On "percent" row "1.7 ÷ 36.1 × 100 ≈ 4.7%"; rose "4.7% > 3.0%"; class 2's dot at 34.4 gains its amber bar (33.4 to 35.4), which stops short of the gold mark (rose gap, "too far"). A rule chip writes: "% error > % uncertainty → look for a systematic error". On "cooling" scene 5's card 1 returns small beside class 2's dot.

### 9. sample size limits a result
> Remember the magnesium ribbon? On our balance it read zero point zero four grams. Plus or minus zero point zero one is twenty-five percent of that, so the molar mass could be out by about a quarter, a result we could barely **trust**. A balance reading to zero point zero zero one grams cuts that to about two percent. So a bigger sample, or a more precise balance, shrinks the percentage **uncertainty**.

Visual: board change. The ribbon plate (`p01-mg-ribbon-v1.png`) small at the left, with two readout chips: "0.04 g ± 0.01 g" and "0.042 g ± 0.001 g". Two horizontal bars to scale beside them, each with its amber uncertainty cap: on "twenty-five percent" the first cap (a quarter of its bar) is labelled "25%"; on "trust" the first bar shakes slightly and greys (grey tag "molar mass video: the weak reading"). On "zero point zero zero one" the second cap, a sliver, is labelled "≈ 2%". On "uncertainty" two chips: "bigger sample" and "more precise balance".

### 10. limits from assumptions
> Every result also has limits that come from its assumptions. Our copper sulfate percentage is valid only if all the water left, nothing else was lost, and no water came back before weighing. Constant mass, the white powder and the desiccator are our **evidence**. The accepted value is secondary data, and it's relevant only if our crystals really were pure copper sulfate pentahydrate. And three full runs per class let us check the result is **reliable**.

Visual: board change. Gloss chip "assumption: something the result depends on being true". A `CheckList` writes three rows as spoken: "all the water left", "nothing else lost", "no water came back". On "evidence" each row gains an evidence chip with a tick: a constant-mass readout ("1.60 g → 1.60 g"), the white-powder crucible plate, the desiccator plate (`m8-desiccator-v1.png`). On "secondary data" the gold "36.1%" chip slides in with a grey tag "secondary data"; on "pure" a dashed outline "pure CuSO₄·5H₂O?" around it, tag "relevant only if this is true". On "reliable" the course gloss returns grey, "reliable: whole experiment repeats consistently", with three small run chips "run 1, run 2, run 3".

### 11. matching each fix to its problem
> So match each improvement to its problem. For a systematic error, change the method, like cooling in a desiccator or using a gentler flame. For random error, do more repeats and average. For a large uncertainty, use a bigger sample or a more precise **instrument**. Error, uncertainty and limits. **Name it, size it, fix it**.

Visual: a three-row fix table writes as spoken: "systematic (rose) → change the method (desiccator, gentler flame)"; "random (violet) → more repeats, then average"; on "instrument" "large uncertainty (amber) → bigger sample, more precise instrument". On "Name it, size it, fix it" the memory line writes in hand lettering above the table and then shrinks to the top right strip.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A student heats three point zero zero grams of magnesium sulfate heptahydrate once, for five minutes, and it loses one point three eight grams. The accepted water content is fifty-one point one percent. Calculate the percentage of water and the percentage error, decide whether uncertainty explains the difference, and suggest an improvement. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Chemistry"; tag "HSC-style question, written for HSCScience"): "A student heated 3.00 g of magnesium sulfate heptahydrate, MgSO₄·7H₂O, once for 5 minutes, cooled it in a desiccator and reweighed it on a balance reading to 0.01 g. The mass decreased by 1.38 g. The accepted percentage of water in MgSO₄·7H₂O is 51.1%. The percentage uncertainty in the student's result is about 2%. (a) Calculate the percentage by mass of water found, and the percentage error. (b) Explain whether measurement uncertainty alone can account for the difference. (c) Suggest ONE improvement to the method. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Forty-six point zero percent water, and a percentage error of about ten percent. That's far bigger than the two percent uncertainty, so something systematic made the result low. One short heating probably left water behind, so heat to constant mass. More repeats of the same method is the classic slip. They'd all be low in the same **way**.

Visual: card shrinks to the top. Rows: "(a) 1.38 ÷ 3.00 × 100 = 46.0%; |46.0 − 51.1| ÷ 51.1 × 100 ≈ 10%"; "(b) 10% > 2%: not uncertainty; systematic, too low"; "(c) heat to constant mass". A mini `DotLine` with gold 51.1 and a navy dot at 46.0 with a short amber bar that misses the gold mark. On "way" a chip "repeat the same method more times" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one, from the magnesium method. A class collects hydrogen in a room at thirty degrees, but in every run uses the molar volume for twenty-five degrees. They get twenty-three point nine grams per mole, against an accepted twenty-four point three one. Calculate the percentage error, then identify the type of error and explain its effect. Pause here to answer.

Visual: `QuestionCard`: "In the magnesium and hydrochloric acid method, molar mass of Mg = mass of Mg ÷ moles of H₂, and moles of H₂ = volume of H₂ ÷ molar volume. A class worked in a room at 30 °C but, in every run, used the molar volume for 25 °C (24.79 L mol⁻¹). A gas at 30 °C takes up a slightly larger volume than the same amount of gas at 25 °C. The class's mean molar mass for magnesium was 23.9 g mol⁻¹; the accepted value is 24.31 g mol⁻¹. (a) Calculate the percentage error. (b) Identify the type of error and explain its effect on the calculated molar mass. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> About one point seven percent. It's systematic, because the same molar volume was used every run. Warmer gas takes up more room, so dividing by the twenty-five degree molar volume counted too many moles, and mass over moles came out too low. Use the molar volume for the actual temperature. Calling it random is the classic slip. It pushed every run the same **way**.

Visual: card shrinks to the top. Rows: "(a) |23.9 − 24.31| ÷ 24.31 × 100 ≈ 1.7%"; "(b) systematic: same wrong molar volume every run → gas volume larger at 30 °C → n(H₂) too big → MM = m ÷ n too low ↓; fix: use the molar volume for the measured temperature". On "way" a chip "random: temperatures vary" fades in and is crossed. Hold about 1 second.

### 16. conclusion and handoff
> So, read the trend, name the error, size the uncertainty, and check the assumptions. Our masses can tell us even more. The white powder is one point six zero grams of copper sulfate, and the water lost is zero point nine zero grams. Could those masses alone tell us the five in the formula? How do mass percentages reveal an empirical **formula**?

Visual: the memory line returns at the top; a strip writes as spoken: "trend + cause → name the error (type, direction) → size the uncertainty (% error vs % uncertainty) → assumptions". On "white powder" the white-powder crucible plate slides to the left and the two-segment mass bar draws: "CuSO₄ 1.60 g" grey, then on "water lost" "H₂O 0.90 g" pale blue. On "five" the formula "CuSO₄ · ? H₂O" writes above, "?" amber. On "formula" the chip "Next: How do mass percentages reveal an empirical formula?" writes. Hold about 2 seconds. This is the final frame (m2-v05 opens on it).

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Trend: describe how one variable changes with another, give its cause, and state the range it was tested over.
2. Random error: unpredictable, either way; reduces precision; average more repeats. Systematic error: same way every time; reduces accuracy; change the method. Answer: name the cause, its direction, a fix (never "human error").
3. Uncertainty: digital ± one in the last digit; analogue ± half the smallest division. Difference of two readings: add the uncertainties. % uncertainty = uncertainty ÷ value × 100; when dividing, add % uncertainties.
4. % error = |result − accepted| ÷ accepted × 100. If % error > % uncertainty, look for a systematic error.
5. Limits: check assumptions and that secondary data are relevant; bigger samples and more precise instruments reduce % uncertainty.

Memory aid (large, on the notes screen): *Name it, size it, fix it.*

At the end the notes cross-fade back to scene 16's final frame.

## Teaching checks

- **Does it explain causes?** Why the volume is proportional to the mass, and why one point is off the line (2); why random error spreads and averaging helps (3); why repeats can't fix a systematic error (3); why each cause pushes one way (5); why uncertainty exists with perfect technique (6); why a difference doubles the reading uncertainty (7); why a gap larger than the uncertainty needs a systematic cause (8); why a small sample makes the same limit matter more (9); why assumptions limit validity (10).
- **Misconceptions addressed:** systematic means low (4, 5); human error (5, crossed in A2); uncertainty is a mistake (6); any gap means a mistake (8); more repeats fix everything (3, crossed in A1).
- **One idea at a time:** trend (2), error types (3 to 5), uncertainty (6, 7), judgement (8), sample size (9), assumptions (10), fixes (11).
- **Video makes it easier:** dots jitter or slide together (3); direction chains (5); a flickering digit and a half-division bracket (6); uncertainty bars that reach or miss the gold mark (7, 8); a quarter-sized uncertainty cap on the coarse magnesium reading against a sliver on the fine one (9).
- **Response opportunity:** one 3 s prediction (4); two unseen HSC-style tasks, all facts on the card, 10 s each, nothing answer-bearing. Feedback about 25 s and 27 s.
- **Avoided double teaching:** accurate, precise, valid and reliable recalled (ws-v02, ws-v03); class 2's cause recalled (ws-v03); the magnesium method and its molar volume recalled, its weak reading quantified (m2-v04).
- **Syllabus coverage:** `C11-WS5-01` (2); `C11-WS5-02` (3 to 9, A1, A2); `C11-WS5-03` (8, 10, 11, A1, A2).
- **Out of scope by design:** significant figures, standard deviation, titration errors, graph construction.

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 4 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 1.38 ÷ 3.00 × 100 = 46.0% water (1 mark); percentage error = |46.0 − 51.1| ÷ 51.1 × 100 ≈ 10% (1 mark). (b) The percentage error (about 10%) is much larger than the percentage uncertainty (about 2%), so the limits of the balance can't explain it; a systematic error made the result too low (1 mark). (c) Heating only once for 5 minutes probably left water in the solid: heat, cool in the desiccator and reweigh repeatedly until the mass is constant (1 mark). Classic mistake (crossed): "repeat the same method more times" (every repeat would be low in the same way).

**Attempt 2 (scene 14; original wording, HSC style, 3 marks suggested).** As on the card.
Model answer: (a) |23.9 − 24.31| ÷ 24.31 × 100 ≈ 1.7% (1 mark). (b) Systematic, because the same molar volume (for 25 °C) was used in every run, so every result is pushed the same way (1 mark). At 30 °C the hydrogen occupies a larger volume than the same amount would at 25 °C, so n(H₂) = V ÷ 24.79 is too large; n(Mg) = n(H₂) is too large, so MM = m ÷ n is too low; fix: measure the temperature and use the molar volume for it (1 mark). Classic mistake (crossed): "random, because the temperature varies".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Accepted value | 36.1% (v07: 90.0 ÷ 249.6) | 1, 3, 8 |
| Class 1, class 2 | 36.0%, 34.4% (ws-v03) | 1, 7, 8 |
| Magnesium graph | points near a line through the origin; 0.020 g → about 20 mL, 0.042 g → about 42 mL; run 3 low (escaped gas) | 1, 2 |
| Balance | ± 0.01 g; flicker 26.81 ↔ 26.82 g | 3, 6 |
| Measuring cylinder | 1 mL divisions, ± 0.5 mL | 6 |
| Readings | 2.50 g start; 26.81 − 25.91 = 0.90 g lost | 7 |
| Uncertainties | ± 0.02 g; 2.2%; 0.8%; total ≈ 3.0%; bar 34.9 to 37.1 (class 1), 33.4 to 35.4 (class 2) | 7, 8 |
| % error | class 1 ≈ 0.3%; class 2 ≈ 4.7% | 8 |
| Sample size | 0.04 g ± 0.01 g = 25%; 0.042 g ± 0.001 g ≈ 2% | 9 |
| A1 | 3.00 g; 1.38 g; 46.0%; 51.1%; ≈ 10%; ≈ 2% | 12, 13 |
| A2 | 30 °C; 25 °C; 24.79 L mol⁻¹; 23.9; 24.31; ≈ 1.7% | 14, 15 |
| Handoff | 1.60 g CuSO₄; 0.90 g H₂O | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (5 November); Codex to re-check.

- 0.02 ÷ 0.90 × 100 = 2.22%; 0.02 ÷ 2.50 × 100 = 0.80%; sum 3.02%; 3.02% of 36.0 = 1.09; range method 0.92 ÷ 2.48 = 37.10%, 0.88 ÷ 2.52 = 34.92%.
- 3.02% of 34.4 = 1.04 (33.36 to 35.44).
- |36.0 − 36.1| ÷ 36.1 × 100 = 0.28%; 1.7 ÷ 36.1 × 100 = 4.71%.
- 0.01 ÷ 0.04 = 25%; 0.001 ÷ 0.042 = 2.38%.
- MgSO₄·7H₂O: 246.4; 126.0 ÷ 246.4 = 51.14%; 1.38 ÷ 3.00 = 46.0%; 5.1 ÷ 51.1 = 9.98%; 0.02 ÷ 1.38 + 0.02 ÷ 3.00 = 1.45% + 0.67% = 2.12%.
- 24.79 × 303.15 ÷ 298.15 = 25.206; 24.31 ÷ 1.0168 = 23.909; |23.9 − 24.31| ÷ 24.31 = 1.69%.
- Magnesium volumes 12.10, 20.6, 22.40, 35.30, 42.20 mL; expected 12.24, 20.39, 28.55, 35.69, 42.83 mL.
- 2.50 − 0.90 = 1.60 g.

## Memory aid check

- **"Name it, size it, fix it."** Written for this video. Meaning, as said in scene 11: name the error's specific cause and type (with its direction); size the uncertainty and the percentage error and compare them; fix it with an improvement matched to the problem. Assumptions checked: "fix it" applies to errors and to large uncertainties, not to uncertainty in general (uncertainty can be reduced, never removed; scene 6 says so first). It helps a new case: A1 and A2 each follow it (name, size, fix), and every later practical evaluation can use it.
- **Considered, not used:** "Random rattles, systematic shifts" (catchy, but it repeats what the dot animation already shows and does not carry uncertainty).

## Narration length estimate

Revision 1 count (5 November; build parser rules): **6,417 characters**, 17 scenes. At 13.3 characters per second the speech is about 482 s; add about 9 s of holds and settling (dot animations in 3, the direction chains in 5, the bars in 7 and 8), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 52 s more of the quiet notes hold: **about 570 s (9.5 minutes)**.

## Scene list and build ids

Lesson key `c-y11-ws-v05` (route chem-y11-ws-v05; root to confirm). Suggested explainer folder `src/explainer/lessons/chem-y11-ws-v05`.

In order (17 scene headings, all `### N.`): hook, trend, error-types, prediction, naming-errors, reading-uncertainty, result-uncertainty, judge-gap, sample-size, assumptions, fixes, attempt-1, feedback-1, attempt-2, feedback-2, conclusion-handoff, key-notes.

Per-scene motion (schema 4): all `motionRole: "explain"` except prediction, attempt-1, attempt-2 and key-notes (`hold`). Transitions: ws-v04's final frame into scene 1 by camera continue (table shrinks to a thumbnail, graph moves to the left half); 1 to 2 camera push to the graph; 2 to 3 clear change; 3 to 4 to 5 camera continue (the error cards stay); 5 to 6 clear change; 6 to 7 camera continue (balance shrinks to the left, calculation layout opens); 7 to 8 camera continue (the `DotLine` stays); 8 to 9 clear change; 9 to 10 clear change; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 board clear; 16 to 17 fade to the notes board, and 17 cross-fades back to 16's final frame.

Holds: prediction (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/c-y11-ws-v05-learning-review.md`, `checks/c-y11-ws-v05-science-check.md`.

## Assets

Have (inspected 5 November; uniform scaling only):
- `public/assets/chemistry/y11c-top-pan-balance-v1.png` (blank display; readouts coded over it): scenes 3, 6.
- `public/assets/chemistry/p01-mg-ribbon-v1.png`: scene 9.
- `public/assets/chemistry/m6-measuring-cylinder-v1.png`: scene 6.
- `public/assets/chemistry/m8-desiccator-v1.png`: scene 10.
- From ws-v01 and ws-v02 (requested there): `y11c-cuso4-crucible-lid-white-v1.png` (scenes 10, 16 and the final frame), `y11c-cuso4-crucible-black-v1.png` (scene 4). If either is not yet painted, the coded white powder layer on `y11c-cuso4-crucible-blue-v1.png` is the interim fallback (root to confirm).

Need (new plates, Codex): none.

Coded: result graph and table (from ws-v04), particle strip, error cards with dot animations, direction chains, readouts, half-division zoom, calculation layout, `DotLine` with uncertainty bars, sample-size bars, `CheckList`, fix table, mass bar, attempt cards, countdowns, key notes board.

## Codex asset brief (Year 11 Chemistry WS v05)

No new plates. Codex confirms that `y11c-cuso4-crucible-lid-white-v1.png` and `y11c-cuso4-crucible-black-v1.png` exist (from the ws-v01 and ws-v02 briefs) before build; if not, they are painted under those briefs, not this one.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every number in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the claims: anhydrous copper sulfate regains water from air (result low); strong heating decomposes copper sulfate (extra mass lost, result high); digital ± one in the last digit and analogue ± half the smallest division as school conventions; adding uncertainties for a difference and percentage uncertainties for a quotient; a single short heating can leave water in MgSO₄·7H₂O; a gas at 30 °C occupies a larger volume than at 25 °C, so using the 25 °C molar volume lowers the calculated molar mass of magnesium.
3. Confirm the definitions of accurate, precise, valid and reliable match ws-v01 to ws-v03.
4. Confirm both attempt cards are original, carry every needed fact, and show nothing answer-bearing.
5. Confirm the three syllabus quotes match `chem-2017-y11.json` exactly.
6. Confirm no person, hand, face or avatar is drawn or requested.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script, and that every quoted cue is in its scene's narration in spoken order.
9. Confirm the opening frame against the ws-v04 design once it exists, and that the final frame matches m2-v05's opening.

## YouTube metadata (draft)

Title: Random vs Systematic Error, Uncertainty and Percentage Error | Year 11 Chemistry Skills

Description: Full Year 11 Chemistry course: https://hscscience.com.au/subjects/chemistry/year11/

Our magnesium points sit close to a line, but not on it. Two classes heat copper sulfate crystals: one gets 36.0%, the other 34.4%, and the formula says 36.1%. Which gap is just the limit of the balance, and which means something went wrong? Learn to read a trend and its cause (and what a point off the trend tells you), tell random from systematic error (and say which way each pushes a result), work out the uncertainty of a reading and of a result, compare percentage error with percentage uncertainty, see why a bigger sample helps, and match each improvement to its problem. The data in this video are illustrative. Two exam-style questions at the end.

Year 11 Chemistry (2017 syllabus), Working Scientifically: Analysing Data and Information.
Syllabus content (NSW Chemistry Stage 6):
"derive trends, patterns and relationships in data and information"
"assess error, uncertainty and limitations in data (ACSCH004, ACSCH005, ACSCH033, ACSCH099)"
"assess the relevance, accuracy, validity and reliability of primary and secondary data and suggest improvements to investigations (ACSCH005)"

Previous: How raw chemistry readings become a usable table or graph. Next: How mass percentages reveal an empirical formula.

#Year11Chemistry #Chemistry #WorkingScientifically #HSCScience

## Open decisions

- **Opening frame (reconciled by root, 5 November).** ws-v05 opens on ws-v04's actual final frame (finished magnesium graph with run 3 ringed anomalous, gradient 1009 mL g⁻¹, result 24.6 ± ? g mol⁻¹ against accepted 24.31). The spoken phrases already fit it.
- **2. Adding percentage uncertainties (root, science check).** Scene 7 teaches the quotient rule in one sentence. If root judges it too much for this point in Year 11, scene 7 can stop at the loss (2.2%), and scene 8 compares 4.7% with 2.2% (same verdict for both classes); about 150 characters are saved.
- **3. Digital convention (science check).** ± one in the last digit (author note c).
- **4. Fallback plates (root).** The white and black crucible plates come from earlier briefs.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the step from reading uncertainty to percentage uncertainty followable at playback speed; does the 4.7% versus 3.0% judgement land; is scene 10 too full), then the science check and Codex error check.
- Checker output (5 November): narration 6,417 characters; per scene (1 to 17): 421, 431, 524, 210, 434, 385, 521, 471, 397, 449, 318, 375, 337, 363, 363, 343, 75; no em dash; every quoted cue found in its scene's narration in spoken order. At about 570 s the video is at the cap; reserve cut: open decision 2 (about 150 characters).
