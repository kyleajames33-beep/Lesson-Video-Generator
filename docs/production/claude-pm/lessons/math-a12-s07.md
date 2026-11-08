# Maths A12 S07: How does a continuous uniform model work? Equally likely means flat, the forced height 1/(b − a), probability as the fraction of the interval, and a straight-line CDF (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s07/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s07.md`).

Narration 5,732 characters, 16 scene headings, about 514 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: seventh video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 59), after s06 (mode, median and quartiles of a density) and before s08 (continuous expectation and variance). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a bus stop with a bus every ten minutes, the site's own card 05 context); graphs, areas, histograms, tables and algebra stay coded. No people. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (Probability Density Functions), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`; the uniform material is section 5 card 05, drills 2 and 5, short-answer Q2 and the revisit card. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s07` in `../../programme/maths-a12-course-outline.json` ("How does a continuous uniform model work?", one syllabus action, site source lesson 9, no coverage gaps).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time with only the needed earlier results kept; worked examples in the g01 layout with framed answers and crossed slips; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in the feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Exact values in the algebra (1/10, 1/4, 3/8), decimals only where they are exact readings of the site's answers (0.4, 0.375, 0.5) or in grey readouts; attempt cards give neither the answer nor its form; every density stated with "0 elsewhere" and every CDF with its flat pieces.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cicfcb1105`: "Determine and use the probability density function f(x)=(1)/(b-a) for a continuous uniform distribution for a random variable X taking values in the interval [a,b]"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s06's actual handoff frame (`math-a12-s06.md` scene 15: a flat density on [1, 5] at an unlabelled height, "f(x) = ? for 1 ≤ x ≤ 5", empty F axes with "?", chip "Next: a flat density"), parks it in a corner, and opens a context that explains where flat densities come from: a bus that comes every ten minutes, met at a random moment. The parked [1, 5] density returns in scene 7 as the site's train problem, which answers s06's two questions (its height and its F). Explains why "equally likely anywhere" forces a flat density (equal widths must carry equal areas); why total probability 1 forces the height 1/(b − a) (determine, `cicfcb1105`); uses it: interval probability as the fraction of the interval covered (site card 05, numbers unchanged: P(T < 4) = 0.4, P(3 < T < 7) = 0.4); shows a density can be taller than 1 (site drill 5: height 2 on [0, 0.5]); builds the straight-line CDF F(x) = (x − a)/(b − a) with its flat pieces from accumulation; works the site's train problem (Q2, numbers unchanged: f = 1/4 on [1, 5], P(T > 3.5) = 0.375, P(2 ≤ T ≤ 4) = 0.5); links the discrete uniform 1/n (s02) and the absence of a single mode (s06); contrasts contexts that fit and do not fit. Stops at the uniform density, its probabilities and its CDF. Not taught: E(X) = (a + b)/2 and Var(X) = (b − a)²/12 (s08 generates them by integration; the handoff asks where the flat density balances, a question only); the normal model (s09).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a bus that comes every ten minutes (painted plates, live).** The site's own card 05 context ("a bus arrives at a time T uniformly distributed over the next 10 minutes"), with its numbers unchanged, and the context s06's notes hand on to s07 (s06 rejected commute times because "buses belong to s07"). A painted bus stop stands at the left of a coded time strip and a painted bus pulls in at each ten-minute tick, so the student sees the model's cause: you turn up at a random moment, and your wait is whatever is left of the ten minutes. Travel is on the owner's everyday list; no bus or bus stop is used in `checks/root-decisions-maths-redesign.md` (d08 is a road trip, i08 a car park, i10 a lift). The site's train problem (Q2) stays as the worked problem in scene 7; it answers s06's parked [1, 5] density.
- **Idealising assumptions (author notes, not learner copy).** Buses run exactly every ten minutes and you arrive at a random moment with no link to the timetable (said in scenes 1 and 9). The 200 arrivals in scene 1 are one stored random sample (author note k), so the class counts are illustrative; the narration's "roughly level" is the claim, and "no wait is more likely" is the model's.
- **Author note k (stored arrivals).** 200 waits from Python 3.14 `random.Random(707)`, wait = 10 × `random()`; first five waits 0.2, 6.3, 3.4, 7.5, 4.6 min, drawn as arrivals at 9.8, 13.7, 26.6, 2.5 and 15.4 min on the 0 to 30 strip; one-minute class counts 26, 14, 18, 17, 25, 23, 20, 16, 26, 15 (sum 200; model 20 each); sample mean wait 4.94 min (not shown). Stored as data. Replaces author note j's five arrivals.
- **Join with s06 (fixed).** Scene 1 opens on s06 Revision 3's final frame exactly (unchanged in s06).
- **Join with s08 (fixed).** Scene 15's frame and narration are unchanged in content (the train's density at 1/4 on [1, 5] with the violet balance triangle at t = 2 and "?"); s08 Revision 4 opens on it.
- **Simulations (standard item 3).**
  1. `ArrivalDots` with a linked `ClassHistogram` (scene 1): 200 stored arrival dots fall onto the time strip between bus ticks (the first five slowly, then quickly over about 4 s); each wait drops as a blue block into a ten-class histogram of waits (one-minute classes 0 to 10) with live counts and a live readout "arrivals: n of 200"; the bars settle roughly level (26, 14, 18, 17, 25, 23, 20, 16, 26, 15), grey tag "illustrative sample", and a dashed teal line at the model's 20 per class.
  2. `SlidingWindow` (scene 2): a width-2 amber window slides along the flat line with a constant live area readout, and along a ghost hump with a changing readout.
  3. `AreaFill` height dial (scenes 3 and 5): the rectangle's height and width move while a live readout "area = width × height" holds or reaches 1; in scene 5 the top rises through a dashed line at height 1 (the visual surprise).
  4. `AccumulationTracer` (scene 6): the running area grows by one equal slice a minute and draws violet F as a straight line.
- **Colour roles (fixed for the whole video, continuing s04 to s06).**
  - **the density f: teal** (`MATH_TEAL`);
  - **the CDF F: violet** (`MATH_GRADIENT`), and the balance triangle in the handoff (s03's beam role);
  - **simulated data (arrival dots, the wait histogram): blue** (`MATH_BLUE`);
  - **probability areas, windows, width brackets: amber** (`MATH_AMBER`, pale amber fill);
  - **answer: green**; **mistake: red**, crossed slips only; ink algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; task strips, equation strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. The bus stop plate is at least 420 px tall and the bus at least 320 px wide when they carry the idea. `HandTag` (at most two live): "any wait 0 to 10", "roughly level", "same width, same area", "a hump fails", "1/10 per minute", "forced, not chosen", "only the width matters", "taller than 1: fine", "equal steps: straight line", "spread 1 evenly", "timetable checked: no".
- **Stage changes (standard item 2):** s06's flat density, then the bus stop, the arrivals and the levelling histogram (1); windows on a flat line and a hump (2); the height dial (3); the g01 board for the bus probabilities (4); the narrowing rectangle passing height 1 (5); the accumulation drawing F (6); the train's g01 board (7); the die beside the rectangle (8); the fits and doesn't-fit board with plates (9); the framed card (10); question cards with pictures (11 to 14); the train with its beam (15); key notes (16).
- **Worked examples (g01 layout, standard item 7).** Scene 4: task strip "Find P(T < 4) and P(3 < T < 7).", equation strip "uniform: P = (width covered) ÷ (b − a)", givens card "T uniform on 0 ≤ t ≤ 10; f(t) = 1/10", rows at 52 px, green framed "P(T < 4) = 0.4" and "P(3 < T < 7) = 0.4", a red slip "P(3 < T < 7) = 7/10" crossed silently with the tag "used the end, not the width" (root decision 5). Scene 7: task strip, givens card "T uniform on 1 ≤ t ≤ 5", green framed f, F and the two answers, red slip "P(T > 3.5) = F(3.5) = 5/8" crossed silently, tag "F gives below, not above". Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Flat, so one over the width." and "Probability = width you want ÷ whole width." with the key "f(x) = 1/(b − a) on [a, b], 0 elsewhere" and a bus-stop badge (the strip with a ten-minute gap).
- **Visual surprise (standard item 9).** The random arrivals sort into a roughly level histogram (1); the rectangle's top rises through the dashed line at height 1 while the area readout stays at 1 (5); two shaded blocks in different places slide together and match exactly (4).
- **Question cards (full text and a picture).** A1: the worded question with an empty number line from 0 to 10 labelled "x" (no interval marked); A2: the worded question with an empty axis "delay x (min)" from 0, with a "6" tick and a "k" tick at an unscaled position (no rectangle, no shading).
- **Narration (not voiced).** Scene 1 brings in the simulated arrivals and their levelling histogram; scene 3 keeps its text; all other scenes keep their Revision 2 text. Key notes are five short bullets (were five long notes).

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "How does a continuous uniform model work?" The answer, built in order: "equally likely anywhere" means equal widths carry equal probability, so the density is flat (2); total area 1 forces its height, 1/(b − a) (3); a probability is then a rectangle's area, the fraction of the interval covered, wherever the interval sits (4); a short interval forces a tall density, and that is allowed (5); the running area grows at a constant rate, so F is a straight line from 0 to 1, flat outside (6); a full problem uses f and F (7); the same "spread 1 evenly" idea as s02's 1/n, and no single mode (8); it fits only when nothing favours part of the interval (9).
- **The hook (a question with a visible process).** A time strip with buses every ten minutes; arrival dots fall at random moments, each with its wait bracket to the next bus. "No waiting time is more likely than any other" is the model's assumption, stated as such ("you turn up at a random moment, with no link to the timetable"; Revision 2: the arrival is uniform over the regular ten-minute cycle, independent of the service). The site's card 05 says "A bus arrives at a time T uniformly distributed over the next 10 minutes"; this design keeps its numbers and gives the reason the model fits.
- **Equally likely means flat (`cicfcb1105`, "determine").** A fixed window of width 2 slides from [1, 3] to [6, 8] (`SlidingWindow`, from s06, with the constant density's primitive); the narration states the requirement (same width, same probability), and because probability is area (s05), equal areas on equal widths force equal heights. A bumped density (a hump drawn over [0, 10]) is shown failing the test once: its window area changes as it slides (readout "area changes", no values).
- **The forced height (site card 05).** Rectangle 10 × c = 1, so c = 1/10; then the general [a, b] rectangle: c(b − a) = 1, so f(x) = 1/(b − a) for a ≤ x ≤ b and 0 elsewhere. "We didn't choose that height" (the site's "forced by total probability 1, not chosen").
- **Probability as the fraction covered.** P(T < 4) = 4 × 1/10 = 0.4 and P(3 < T < 7) = 4 × 1/10 = 0.4 (site card 05). The two shaded rectangles are drawn at different places with the same area; "only its width" matters.
- **A density taller than 1 (site drill 5, revisit card).** Uniform on [0, 0.5]: height 2, area 2 × 0.5 = 1. Reinforces s05's "a density is not a probability" with the site's sharpest case. Kept because the formula 1/(b − a) invites "a density can't exceed 1" whenever b − a < 1.
- **The CDF (site card 05).** `AccumulationTracer`: lower panel f = 1/10 on [0, 10], upper panel F; the shaded area to the left of the marker grows by the same 1/10 per minute, so F is the straight line t/10, then the general (x − a)/(b − a) with F = 0 for x < a and F = 1 for x > b (domain rule; the site's card 05 omits the flat pieces, its Q2 answer includes them: site note 2).
- **The worked problem (site short-answer Q2, numbers unchanged, worked rather than set).** Train wait T uniform on [1, 5]: f(t) = 1/4 for 1 ≤ t ≤ 5, 0 elsewhere; F(t) = (t − 1)/4 for 1 ≤ t ≤ 5 (0 below, 1 above); P(T > 3.5) = 1 − F(3.5) = 1 − 2.5/4 = 3/8 = 0.375; P(2 ≤ T ≤ 4) = F(4) − F(2) = 3/4 − 1/4 = 1/2. Task, model and givens are separate strips. The derivation of F by integration (Q2(a)) is spoken and written, "F(t) = ∫₁ᵗ 1/4 du = (t − 1)/4", after scene 6 has built the same result geometrically and checked it with s05's integral.
- **The discrete parallel and the mode (site card 05 note; card 06's uniform remark).** s02's die bars (six bars at 1/6) sit beside the flat rectangle: "spread a total of 1 evenly". Then the flat top is ringed: every value is a maximum, so no single mode (s06's mode = highest point of f). Spoken: "no single mode" (the site says "no unique mode"; both mean the same).
- **When the model fits (a contrast; `cicfcb1105`, "use").** Fits: a random arrival for a bus every ten minutes; the rounding error of a measurement rounded to the nearest whole number, anywhere from −0.5 to 0.5. Does not fit: s04's reaction times (the humped histogram returns small), where a flat model gives the extreme times far too much probability. The rounding-error example is new (not on the site); its assumption (nothing favours one part of the half-unit) is stated in the narration.
- **Attempts (original).** (A1) X uniform on 3 ≤ x ≤ 8: write f(x) and find P(4 ≤ X < 6.5). f(x) = 1/5 on [3, 8], 0 elsewhere; P = 2.5/5 = 1/2. Crossed: "height 1/8" (used b, not b − a; gives 5/16). (A2) A train's delay X minutes is uniform on 0 ≤ x ≤ k; P(X > 6) = 0.25. Find k and P(X < 3). (k − 6)/k = 0.25 gives k = 8; P(X < 3) = 3/8. Crossed: "6/k = 0.25, so k = 24" (used the probability below 6). Neither card shows a formula, a rectangle or the answer form.
- **Mistake scene:** none separate. "A density can't exceed 1" (5); "the CDF of a flat density is flat" (6, the straight line); "height 1/b" (feedback 1 crossed); "the wrong side of 6" (feedback 2 crossed); "uniform fits any waiting time" (9).
- **Memory aid.** "Flat, so one over the width. Probability is the width you want over the whole width." See "Memory aid check".
- **Handoff (outline next: s08, "How do integration and digital tools calculate continuous moments?").** Scene 15: the train's flat density on [1, 5] at height 1/4, with s03's balance triangle under the axis at "?" and a chip "Next: where does a density balance?". No mean, midpoint or variance is stated. This is s08's opening frame (same designer, written next).
- **Site sources used:** lesson 9 card 05 (flat density, forced height, F as a straight line, the bus on [0, 10] with 0.4 and 0.4, the discrete parallel), card 06 (a uniform has no unique mode), drill 2 (uniform [2, 10], 3/8; scene 4 and key note 3), drill 5 and the revisit card (height 2 on [0, 0.5]), short-answer Q2 (train on [1, 5]: 1/4, (t − 1)/4, 0.375, 0.5, no unique mode, straight-line CDF). Not used: the rest of lesson 9 (s05 and s06 content).
- **Site notes (new; for the log, not yet in `../site-corrections-maths-a12.md`):** (1) Card 05's example sentence and the page's hook each contain an em dash, against the house style (note, not an error). (2) Card 05 gives F(x) = (x − a)/(b − a) "for a ≤ x ≤ b" without the flat pieces F = 0 for x < a and F = 1 for x > b; its own Q2 answer includes them, and lesson 9's trap 03 warns about the same omission for f. Suggested: add "with F(x) = 0 for x < a and F(x) = 1 for x > b". (3) The page's header label "MAV-12-07 · Continuous random variables" is a site module label, not used in learner copy (no correction needed). No mathematical errors found in the uniform material.
- **Cause chain taught, in order:** (1) a random arrival makes every wait from 0 to 10 equally likely (1); (2) equal widths must then carry equal areas, so the height is constant (2); (3) total area 1 forces height 1/(b − a) (3); (4) probability = area = width × height, the fraction of the interval (4); (5) a short interval forces a tall density, which is fine because only area is a probability (5); (6) constant height means the running area grows at a constant rate, so F is a straight line from 0 to 1 (6); (7) a problem uses both (7); (8) same idea as 1/n; flat means no single mode (8); (9) the model fits only when nothing favours part of the interval (9); (10) memory aid (10).
- **Entry knowledge (draft route `entryKnowledge`):** s02 (discrete uniform, 1/n), s04 (continuous variables, P(X = x) = 0, the CDF F(x) = P(X ≤ x), F(b) − F(a), 1 − F(a), reaction-time histogram), s05 (density f, probability as area, ∫f = 1, F(x) = ∫ₐˣ f(t) dt), s06 (mode as the highest point of f). Years 7 to 10: area of a rectangle; rounding.
- **Draft route entry (for the route file; root to adopt).** id `math-a12-s07`; playlistOrder 59; mainLearnerQuestion "How does a continuous uniform model work?"; syllabusActionIds `cicfcb1105`; prerequisiteVideos `math-a12-s05`, `math-a12-s06`; sourceLessons `random-variables/lesson09.sa.html` (SHA above; card 05, drills 2 and 5, Q2); entryKnowledge as above; startBoundary "From s06's handoff (a flat density on [1, 5], height unknown), a bus every ten minutes met at a random moment: what does the density look like?"; stopBoundary "Flat because equal widths carry equal probability; height forced to 1/(b − a) with 0 elsewhere; probability as the fraction of the interval; a density above 1; straight-line CDF (x − a)/(b − a) with flat pieces; the site's train problem; link to 1/n and no single mode; when uniform fits. No uniform mean or variance."; nextHandoff "math-a12-s08: where does a density balance? (the train's flat density with a balance triangle and ?)".
- **Legacy logic ported:** none.
- **New explainer motion (coded):** arrival dots dropping on a bus time strip with wait brackets (`WaitStrip`, new); a fixed-width window sliding along a density with a constant area readout, and failing on a humped density (`SlidingWindow`, s06); the rectangle's height settling to 1/10 as its area readout reaches 1 (`AreaFill` with a height dial, new prop); two same-width shaded rectangles in different places (`AreaFill`); the interval shrinking to [0, 0.5] while the rectangle grows to height 2 (`AreaFill` height dial); the running area and straight-line F (`AccumulationTracer`); `CdfSubtraction` on the train's F; s02's die bars beside the rectangle (`ProbabilityBars`); a small reaction-time histogram from s04 (`ClassHistogram`); the balance triangle for the handoff (`BalancePoint`); crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`. Painted plate: the bus stop sign.
- **Board layout (constant):** as s03 and s04: heading top-left; graph on the left (about 1,000 × 520 px); task, model, givens and algebra in the right column, one reasoning stage bright at a time.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Bus: T uniform on [0, 10]; f = 1/10; P(T < 4) = 4/10 = 0.4; P(3 < T < 7) = 4/10 = 0.4; F(t) = t/10 on [0, 10]. The model's assumption: arrivals independent of the timetable and buses exactly every ten minutes; then the wait is uniform on [0, 10].
  (b) General: c(b − a) = 1, c = 1/(b − a); P(c₁ < X < c₂) = (c₂ − c₁)/(b − a) for a ≤ c₁ ≤ c₂ ≤ b; F(x) = ∫ₐˣ 1/(b − a) dt = (x − a)/(b − a) on [a, b], 0 below, 1 above.
  (c) Short interval: [0, 0.5], height 1/0.5 = 2, area 2 × 0.5 = 1.
  (d) Train (site Q2): [1, 5], f = 1/4; F(t) = (t − 1)/4; F(1) = 0, F(5) = 1; F(3.5) = 2.5/4 = 5/8; P(T > 3.5) = 3/8 = 0.375; F(4) = 3/4, F(2) = 1/4; P(2 ≤ T ≤ 4) = 1/2.
  (e) Discrete parallel: die, 6 values at 1/6 (s02).
  (f) Rounding error: a length rounded to the nearest whole centimetre has error E = true − rounded in [−0.5, 0.5]; modelled uniform when nothing favours part of the half-unit; f = 1 on [−0.5, 0.5]. Not shown as a calculation.
  (g) A1: [3, 8], width 5, f = 1/5; P(4 ≤ X < 6.5) = 2.5/5 = 1/2. Crossed 2.5 × 1/8 = 5/16.
  (h) A2: P(X > 6) = (k − 6)/k = 1/4, so 4k − 24 = k, k = 8 (k > 6 required, satisfied); P(X < 3) = 3/8. Crossed 6/k = 1/4 gives k = 24 (that is P(X < 6) = 0.25).
  (i) Pronunciations: "one over b minus a" (said "one over, b minus a" with a micro-pause, voice pilot); "F of x"; "x minus a, over b minus a"; "zero point three seven five"; "P of X less than three".
  (j) Windows: bus strip 0 to 30 min with buses at 0, 10, 20, 30 (scene 1); density x −2 to 12, y 0 to 0.3 (bus); x −0.5 to 1.5, y 0 to 2.5 (short interval); train x 0 to 6, y 0 to 0.4 for f and 0 to 1.1 for F; A1 card and A2 card have no graph.

Main question: *If every value in an interval is equally likely, what does the density look like, how tall must it be, and how do we use it?*
Entry knowledge (s02, s04, s05, s06; rectangle area): density, area as probability, CDF.
Stops after: the flat density 1/(b − a) with 0 elsewhere, probabilities as fractions of the interval, the straight-line CDF and one full problem. No uniform mean or variance.
Handoff: math-a12-s08: the train's flat density with a balance triangle and "?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): f teal; F violet; simulated data blue; probability areas, windows and width brackets amber; answer green; mistake red; ink algebra. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; nothing below 26 px. Screen maths writes f(x) = 1/(b − a) for a ≤ x ≤ b, f(x) = 0 elsewhere; F(x) = (x − a)/(b − a).

### 1. hook (a bus every ten minutes)
> Last video ended with this flat density, from one to five. We'll find its height soon. First, here's where flat densities come from. A bus comes every ten minutes, and you turn up at a random moment, with no link to the timetable. How long will you **wait**? Let's simulate two hundred arrivals, and sort their waits into one-minute **classes**. The bars come out roughly level. Any wait from zero to ten minutes can happen, and no waiting time is more likely than any other. So what does the density look like? And how tall is **it**?

Visual: opens on s06 Revision 3's last frame exactly (a flat blue segment on [1, 5] at an unlabelled height, 0 elsewhere, tag "f(x) = ? for 1 ≤ x ≤ 5", a "?" chip at the y-axis, small empty F axes above with "?", chip "Next: a flat density"). On "soon" the frame shrinks to a 300 px corner card at the top right (kept until scene 7). Heading writes on: "How does a continuous uniform model work?". On "First" the painted bus stop (`ma12-bus-stop-v1`, 460 px tall) stands at the left of a coded time strip 0 to 30 min (1,200 px wide, ticks at 0, 10, 20, 30, labels 28 px); at each tick the painted bus (`ma12-bus-side-v1`, 340 px wide) pulls in and leaves. On "wait" the first five blue arrival dots drop slowly at their stored moments (author note k) and from each an amber bracket runs to the next bus tick with its wait (52 px readout on the current one). On "classes" a blue histogram of waits draws below the strip (classes 0 to 1, ..., 9 to 10 min; 1,000 × 360 px) and `ArrivalDots` speeds up: the remaining 195 dots fall over about 4 s, each wait dropping as a block into its class, live readout "arrivals: n of 200" (52 px) and live counts on the bars. On "roughly level" the counts settle at 26, 14, 18, 17, 25, 23, 20, 16, 26, 15, a dashed teal line at 20 per class draws across them, hand tag "roughly level", grey tag "illustrative sample". On "no waiting time" hand tag "any wait 0 to 10". On "it" the strip and histogram shrink to a band at the top and empty axes "T (min)" from −2 to 12 and "density" with a "?" fill the stage, the bus stop plate (300 px) at the right.

### 2. equally likely means flat
> Equally likely has a precise meaning here. Take any two intervals of the same width, say from one to three minutes and from six to **eight**. They must carry the same probability. Slide a window of width two anywhere within zero to ten, and its probability can't **change**. On a density, probability is area. So equal widths with equal areas means equal heights. The density has to be flat: a constant height c, from zero to ten, and zero **outside**, because a wait below zero or above ten can't happen.

Visual: camera continue on the axes (1,000 × 520 px). On "eight" two amber windows mark [1, 3] and [6, 8] with an "=" between their tags "same probability" (44 px). On "change" a ghost humped curve draws over [0, 10] (no values); `SlidingWindow` slides one window along under it and its live area readout visibly changes ("0.10", "0.30", "0.10", grey), hand tag "a hump fails"; the hump fades. On the next sentences a flat teal line at height c draws from 0 to 10, and the same window slides along it with a constant live readout "area: 2c" (52 px), hand tag "same width, same area". On "outside" the line drops to the axis at 0 and 10 (filled dots at the ends of the flat piece), label "f(t) = c for 0 ≤ t ≤ 10, 0 elsewhere" (44 px), grey tags "no wait < 0" and "no wait > 10" on the two zero pieces. The bus stop plate stays at the right, 300 px.

### 3. the height is forced
> Now, how tall? The total area under any density is one. Here the area is a rectangle, ten wide and c tall, so ten times c equals one, and c is one **tenth**. That height means a tenth of the probability per minute: each minute of the interval holds a tenth of the total. The same works on any interval from a to b. The rectangle is b minus a wide, so its height must be one over b minus **a**. We didn't choose that height. Total probability one forced **it**.

Visual: camera continue. The region under the flat line fills pale teal (`AreaFill` height dial); amber brackets "width 10" along the axis and "height c" up the side. Right column: "10 × c = 1" (52 px); the height dial lifts the top from a low guess, live readout "area = 10 × height = 0.5, 0.8, 1" (52 px); on "tenth" it settles at 0.1 as the readout reaches 1, green framed "c = 1/10". On the next sentence the rectangle splits into ten 1-minute columns, each tagged "1/10", hand tag "1/10 per minute"; the histogram band at the top glows, its dashed line lining up with the columns. On "a" the axis relabels to a generic interval: brackets "b − a" and "height ?"; rows "c(b − a) = 1" and the green framed "f(x) = 1/(b − a) for a ≤ x ≤ b, f(x) = 0 elsewhere" (the syllabus form, 52 px). On "it" hand tag "forced, not chosen".

### 4. probability is the fraction covered
> So what's the chance you wait less than four minutes? That's the area from zero to four. It's four wide and one tenth tall, which is zero point **four**. And between three and seven minutes? Also four wide, so also zero point **four**. For a uniform model, a probability is just the fraction of the interval that's covered. Where the interval sits doesn't matter, only its **width**. It's the same idea on any interval. If X is uniform from two to ten, the whole width is eight. So the chance X is between four and seven is three **eighths**.

Visual: clear change to the g01 board. Task strip (44 px): "Find P(T < 4) and P(3 < T < 7)." Equation strip: "uniform: P = (width covered) ÷ (b − a)". Givens card: "T uniform on 0 ≤ t ≤ 10", "f(t) = 1/10". Left: the bus rectangle on [0, 10] at 1/10 (1,000 × 520 px) with the bus stop plate (280 px) above its left end. On the first sentence [0, 4] shades amber; on "four" row "P(T < 4) = 4 × 1/10" and the green framed "0.4". On "four" (second) [3, 7] shades amber beside it (the first shading dims), row "P(3 < T < 7) = (7 − 3) × 1/10", green framed "0.4"; a red slip "P(3 < T < 7) = 7/10" writes and is crossed with no narration, hand tag "used the end, not the width". On "width" the two shaded blocks slide on top of each other and match exactly, hand tag "only the width matters". On the next sentences a small second graph (x 0 to 12): uniform on [2, 10] at height 1/8 ("whole width 8"); on "eighths" [4, 7] shades, row "P(4 < X < 7) = (7 − 4)/8", green framed "3/8" (site drill 2).

### 5. a density taller than one
> Here's a surprise. The narrower the interval, the taller the density has to be. What if X is uniform on a short interval, from zero to a **half**? The rectangle is only a half wide. So to have area one, its height must be **two**. A density of two is fine. It isn't a probability. Probability is area, and the area is still exactly **one**.

Visual: clear change to a new window (x −0.5 to 1.5, y 0 to 2.5; 1,000 × 600 px) with a dashed grey line at height 1 labelled "1". On the first sentence a grey chip "bus: width 10, height 1/10". The rectangle starts on [0, 1] at height 1 (teal); on "half" its right edge slides to 0.5 and the height dial raises the top so the live readout "area = width × height = 1" (52 px) never changes; the top rises through the dashed line at 1 (the surprise), reaching height 2 on "two" (amber bracket "height 2 = 1/0.5"). On the next sentences a chip "f(x) = 2 > 1: allowed", hand tag "taller than 1: fine", and a red slip "a density can't be more than 1" crossed. On "one" row "area = 2 × 0.5 = 1" (52 px).

### 6. the CDF is a straight line
> What about the cumulative distribution function? Back at the bus stop, F of t is the area to the left of t. As t moves right, the area grows by the same amount every minute, because the height never **changes**. So F climbs in a straight line, from zero at the start to one at the **end**. On any interval from a to b, F of x is x minus a, over b minus **a**. Before a it stays at zero, and after b it stays at **one**. You can check this with an integral too. F of x is the integral from a to x of one over b minus a, which gives the same x minus a, over b minus a.

Visual: clear change to `AccumulationTracer`, paired view: lower panel teal f = 1/10 on [0, 10] (T from −2 to 12; 1,000 × 300 px), upper panel violet F on 0 to 1.1 (1,000 × 360 px), the bus stop plate (260 px) at the left. The marker starts at 0; on "changes" it steps to 1, 2 and 3, each new 1-minute slice flashing amber, live readout "F(t) = t ÷ 10 = 0.1, 0.2, 0.3" (52 px), hand tag "equal steps: straight line". On "end" the upper curve has drawn a straight violet line from (0, 0) to (10, 1), dots at t = 4 (0.4) and t = 7 (0.7) linking to scene 4's answers (grey). Right column: "F(t) = t/10 for 0 ≤ t ≤ 10". On "a" (third bold) the green framed "F(x) = (x − a)/(b − a) for a ≤ x ≤ b". On "one" the flat pieces draw: "F(x) = 0 for x < a" and "F(x) = 1 for x > b", with the upper graph's flat lines at 0 (left) and 1 (right) bright violet. On the integral sentences a row under the frame: "F(x) = ∫ₐˣ 1/(b − a) dt = (x − a)/(b − a)" (s05's F(x) = ∫ₐˣ f(t) dt in a grey chip), with a tick linking it to the frame.

### 7. a problem: the train's wait
> Now back to the flat density from one to five. Say it's the time a train waits at a platform, uniform between one and five minutes. The interval is four wide, so the density is one quarter from one to five, and zero **elsewhere**. Then F of t is the integral of a quarter from one up to t, which is t minus one, over **four**. The chance the train waits more than three and a half minutes is one minus F of three and a half. That's one minus two point five over four, which is zero point three seven **five**. And the chance it waits between two and four minutes is three quarters minus one quarter, a **half**. That's two of the four minutes, so a half makes sense.

Visual: the corner card from scene 1 (s06's flat segment on [1, 5] with "f(x) = ?") grows back to full size as this problem's graph, set as a g01 board; its "?" labels are replaced as each answer arrives. Task strip (44 px): "Find f(t) and F(t), then P(T > 3.5) and P(2 ≤ T ≤ 4)." (site Q2, adapted). Givens card: "T: waiting time (minutes)", "uniform on 1 ≤ t ≤ 5". Graph: teal f on x 0 to 6 at height 1/4 (1,000 × 300 px), violet F above on 0 to 1.1 (1,000 × 340 px). On "elsewhere" row "f(t) = 1/(5 − 1) = 1/4 for 1 ≤ t ≤ 5, f(t) = 0 elsewhere", green framed. On "four" row "F(t) = ∫₁ᵗ 1/4 du = (t − 1)/4 for 1 ≤ t ≤ 5 (0 below 1, 1 above 5)"; the violet F graph draws. On the third sentence `CdfSubtraction` complement bracket from F(3.5) to 1, with [3.5, 5] shaded amber on f; on "five" row "P(T > 3.5) = 1 − (3.5 − 1)/4 = 1 − 5/8", green framed "3/8 = 0.375"; a red slip "P(T > 3.5) = F(3.5) = 5/8" writes and is crossed silently, hand tag "F gives below, not above". On "half" brackets at F(2) = 1/4 and F(4) = 3/4, [2, 4] shaded amber on f; row "P(2 ≤ T ≤ 4) = 3/4 − 1/4", green framed "1/2"; on the last sentence a grey check "width 2 of 4: 1/2".

### 8. the same idea as a fair die, and no single mode
> This should feel familiar. A fair die spreads a total probability of one equally over six values, so each gets one **sixth**. A continuous uniform spreads it evenly over an interval, so its height is one over the width. And because the density is flat, no value is higher than any other. So a uniform distribution has no single **mode**.

Visual: camera pull back: the train's f graph moves left (800 × 400 px); on "sixth" s02's six die bars at 1/6 (`ProbabilityBars`, teal, 700 × 400 px) appear beside it with the die plate from s01 small above them, tagged "6 values: 1/6 each" and "interval of width 4: height 1/4", hand tag "spread 1 evenly" across both. On "mode" the flat top of f is ringed along its whole length in amber, tag "every point is highest: no single mode" (s06's rule in a grey chip: "mode: where f is highest").

### 9. when the uniform model fits
> When is this a good model? When nothing makes one part of the interval more likely than another. Turning up at a random moment for a bus that comes exactly every ten minutes fits. The rounding error, when you round a length to the nearest centimetre, can fit too, anywhere from minus a half to a **half**. But a reaction time doesn't. Those times bunched up in the middle, as the histogram **showed**. A flat model would give the extreme times far too much **probability**. And a bus wait doesn't fit either if you've checked the timetable, because then you'd arrive just before the bus.

Visual: clear change to a two-column board (each column 860 px wide, headings 44 px). Left "fits": the bus stop plate (300 px) with the level wait histogram from scene 1 (small, 26 to 15), then on "half" a coded ruler-style number line from −0.5 to 0.5 cm with a flat teal density over it, tag "error = true length − rounded length". Right "doesn't fit": on "showed" s04's reaction-time histogram (`ClassHistogram`, blue, density mode, its five classes, 600 × 320 px) with a flat dashed teal rectangle of the same total area laid over it; on "probability" the two end classes glow red where the rectangle sits far above the bars, tag "too much probability at the extremes". On the last sentence a third small card under "doesn't fit": the time strip with one arrival dot just before a bus tick and the bus plate arriving, hand tag "timetable checked: no".

### 10. memory aid
> Here's a way to remember it. Flat, so one over the width. And the probability is the width you want, over the whole **width**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main lines in the hand font, 56 px: "Flat, so one over the width." and, on "width", "Probability = width you want ÷ whole width." with a small amber block on a teal rectangle. Key, 40 px: "f(x) = 1/(b − a) on [a, b], 0 elsewhere". Badge at the left: the bus stop (220 px) beside a strip with a ten-minute gap. Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Write down the density, and find this probability. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A continuous random variable X is uniformly distributed on 3 ≤ x ≤ 8. Write down the probability density function f(x), and find P(4 ≤ X < 6.5)." Picture slot: an empty number line from 0 to 10 labelled "x" (no interval marked, no rectangle). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> The interval is five wide, so f of x is one fifth between three and eight, and zero **elsewhere**. From four to six point five is two point five wide, so the probability is two point five over five, which is a **half**. A height of one eighth is wrong. The width is eight minus three, not **eight**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "uniform on 3 ≤ x ≤ 8", "P(4 ≤ X < 6.5)". "3 ≤ x ≤ 8" underlined; on "elsewhere" row "f(x) = 1/(8 − 3) = 1/5 for 3 ≤ x ≤ 8, f(x) = 0 elsewhere" (52 px) and the card's number line grows a teal rectangle on [3, 8] at 1/5. "P(4 ≤ X < 6.5)" underlined; on "half" [4, 6.5] shades amber, green framed "P(4 ≤ X < 6.5) = 2.5/5 = 1/2". On "eight" a red slip "f(x) = 1/8" writes and is crossed (caption "width is b − a = 5"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Find k, then find the probability. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The delay, X minutes, of a train is uniformly distributed on 0 ≤ x ≤ k. The probability that the delay is more than 6 minutes is 0.25. Find k, and find P(X < 3)." Picture slot: an empty axis "delay x (min)" from 0 with a "k" tick at an unscaled position and a "6" tick (no rectangle, no shading). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> More than six minutes is the part from six up to k. So k minus six, over k, is zero point two **five**. Then k minus six is a quarter of k, so three quarters of k is six, and k is **eight**. So P of X less than three is three **eighths**. Six over k equals zero point two five is wrong. That's the chance of less than six minutes, and it gives k equals twenty-**four**.

Visual: the card shrinks to the top. `GivensStrip`: "uniform on 0 ≤ x ≤ k", "P(X > 6) = 0.25", "P(X < 3)". "0 ≤ x ≤ k" and "more than 6 minutes" underlined as used; on "five" a teal rectangle on [0, k] on the card's axis with [6, k] shaded amber, row "(k − 6)/k = 0.25" (52 px). On "eight" rows "k − 6 = 0.25k, so 0.75k = 6", green framed "k = 8". On "eighths" [0, 3] shades, green framed "P(X < 3) = 3/8". On "four" a red slip "6/k = 0.25, k = 24" writes and is crossed (caption "that is P(X < 6)"). Hold about 1 s.

### 15. handoff
> So a uniform density is flat, its height is forced to be one over the width, and its probabilities are fractions of the interval. Next, a new question. Think of the train's flat density as a shape resting on a beam. Where would it **balance**? And for a density that isn't flat, how do we find the balance point, and the spread?

Visual: the two memory-card lines show small at the top, then fade on "Next". Board clears to the train's density f(t) = 1/4 on [1, 5] (axis 0 to 6, y 0 to 0.4; teal rectangle, labels "1", "5", "1/4"; 1,000 × 520 px). On "balance" s03's violet balance triangle (`BalancePoint`, density mode) appears under the axis at t = 2, the beam tilting towards 5; it stops there with "?" (no slide, no level state). Chip "Next: where does a density balance?". No mean, midpoint or variance is shown. Hold about 2 s. This is s08's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Uniform on [a, b]: f(x) = 1/(b − a), 0 elsewhere.
- Equal widths, equal probability: the density is flat.
- Probability = (width covered) ÷ (b − a).
- F(x) = (x − a)/(b − a) on [a, b]; 0 below, 1 above.
- A density can exceed 1; a uniform has no single mode.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Flat, so one over the width.* Key: *Probability = width you want ÷ whole width.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 15's frame exactly (the train's density on [1, 5] at 1/4, the violet balance triangle at t = 2 with "?", chip "Next: where does a density balance?"). This is the final frame and s08's opening frame.

## Teaching checks

- **Does it explain causes?** Why flat: equal widths must carry equal probability, and probability is area (2). Why 1/(b − a): a rectangle of area 1 and width b − a (3). Why only the width matters: equal widths give equal rectangles anywhere (4). Why a height of 2 is allowed: only area is capped at 1 (5). Why F is a straight line: each minute adds the same area (6). Why no single mode: every point of a flat density is highest (8). Why reaction times don't fit: their histogram bunches, and a flat model overweights the extremes (9).
- **Misconceptions addressed:** "a density can't exceed 1" (5, crossed ghost); "the CDF of a flat density is flat" (6, the straight line); "where the interval sits matters" (4); "height 1/b" (feedback 1 crossed); "the probability of more than 6 is 6/k" (feedback 2 crossed); "any wait is uniform" (9).
- **One idea at a time:** one requirement (2), one forced height (3), one use (4), one surprise (5), one accumulation (6), one problem with task, model and givens separate (7), one link (8), one contrast (9). Only the needed earlier results stay bright: f = 1/10 in 4 and 6; f = 1/4 in 7 and 8.
- **Video makes it easier:** the student watches random arrivals sort into a roughly level histogram (1), sees a sliding window keep its area on a flat line but not on a hump (2), sees the height settle as the area reaches 1 (3) and rise through 1 as the interval shrinks (5), and watches F grow by equal steps into a straight line (6).
- **Visual standard, item by item:** 1 the painted bus stop and bus by about 15 s, returning in 2 to 6, 9 and 10; 2 a new stage every 20 to 60 s; 3 `ArrivalDots` with a live levelling histogram, `SlidingWindow`, the `AreaFill` height dial and `AccumulationTracer`, each with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (4, 7), framed answers and crossed slips; 8 framed card and five short bullets; 9 the levelling histogram, the top rising through 1, the matching blocks.
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible, 10 seconds each with the invitation to pause; nothing answer-bearing on either card. One crossed mistake each; feedback about 23 s and 28 s (scenes 12 and 14, including the 1 s holds).
- **Avoided double teaching:** s04's CDF subtraction and complement, s05's probability as area and ∫f = 1, and s06's mode rule are used, not re-taught; s02's 1/n is named once (8).
- **Syllabus coverage:** `cicfcb1105` "determine" (2, 3; key notes 1, 2) and "use" (4 to 7, 9; A1, A2; key notes 3, 4).
- **Out of scope by design:** uniform mean and variance (s08); the normal model (s09).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A continuous random variable X is uniformly distributed on 3 ≤ x ≤ 8. Write down the probability density function f(x), and find P(4 ≤ X < 6.5)."
Model answer: f(x) = 1/(8 − 3) = 1/5 for 3 ≤ x ≤ 8, and f(x) = 0 elsewhere. P(4 ≤ X < 6.5) = (6.5 − 4) × 1/5 = 2.5/5 = 1/2. Classic mistake (crossed): "f(x) = 1/8" (used b, not b − a; it gives 5/16).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "The delay, X minutes, of a train is uniformly distributed on 0 ≤ x ≤ k. The probability that the delay is more than 6 minutes is 0.25. Find k, and find P(X < 3)."
Model answer: f(x) = 1/k on [0, k]. P(X > 6) = (k − 6)/k = 0.25, so k − 6 = 0.25k, 0.75k = 6 and k = 8 (k > 6, as needed). P(X < 3) = 3/8. Classic mistake (crossed): "6/k = 0.25, so k = 24" (that is P(X < 6) = 0.25).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bus waits (stored sample, author note k) | 200 arrivals; first waits 0.2, 6.3, 3.4, 7.5, 4.6 min; class counts 26, 14, 18, 17, 25, 23, 20, 16, 26, 15 | 1, 9 |
| Equal windows | [1, 3] and [6, 8], width 2, area 2c | 2 |
| Bus density | 10c = 1, c = 1/10 on [0, 10] | 3, 4, 6 |
| Bus probabilities | P(T < 4) = 0.4; P(3 < T < 7) = 0.4 | 4, 6 |
| Short interval | [0, 0.5], height 2, area 1 | 5 |
| Bus CDF | F(t) = t/10; F(4) = 0.4, F(7) = 0.7 (grey) | 6 |
| Train | f = 1/4 on [1, 5]; F(t) = (t − 1)/4; F(3.5) = 5/8; P(T > 3.5) = 3/8 = 0.375; F(2) = 1/4, F(4) = 3/4; P(2 ≤ T ≤ 4) = 1/2 | 7, 8, 15 |
| Die | 1/6 each (s02) | 8 |
| Rounding error | uniform on [−0.5, 0.5] (no calculation) | 9 |
| Second interval | uniform on [2, 10]: height 1/8; P(4 < X < 7) = 3/8 (site drill 2) | 4, 16 |
| A1 | f = 1/5 on [3, 8]; P = 1/2; crossed 1/8 (gives 5/16) | 11, 12 |
| A2 | k = 8; P(X < 3) = 3/8; crossed k = 24 | 13, 14 |
| Handoff | train density 1/4 on [1, 5]; triangle at t = 2 (no value) | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (3 Nov, scratchpad script `nums_s07s09.py`); Codex to re-check.

- Bus: ∫₀⁴ 1/10 dt = 2/5; ∫₃⁷ 1/10 dt = 2/5; ∫₀¹⁰ 1/10 dt = 1. Stored sample (author note k, recalculated 7 Nov, scratchpad `maths07/nums.py`): counts 26, 14, 18, 17, 25, 23, 20, 16, 26, 15; first waits 0.2, 6.3, 3.4, 7.5, 4.6.
- Short interval: 1/(0.5 − 0) = 2; 2 × 0.5 = 1.
- Train: ∫₁ᵗ 1/4 du = (t − 1)/4; F(3.5) = 5/8, 1 − 5/8 = 3/8 = 0.375; F(4) − F(2) = 3/4 − 1/4 = 1/2.
- Drill 2: f = 1/8 on [2, 10]; F(7) − F(4) = 5/8 − 2/8 = 3/8.
- A1: 1/(8 − 3) = 1/5; 2.5/5 = 1/2; crossed 2.5/8 = 5/16.
- A2: (k − 6)/k = 1/4 gives k = 8; 3/8; crossed 6/k = 1/4 gives k = 24.

## Memory aid check

- **"Flat, so one over the width. Probability is the width you want over the whole width."** Meaning, as said in scene 10: the uniform density is flat, its height is 1 ÷ (b − a), and an interval's probability is its width divided by b − a. Assumptions checked: "the width you want" must lie inside [a, b] (a part outside adds nothing; the key notes say "width covered"); it applies only to a uniform model, where the height is constant (scene 9 shows a non-uniform case); "the whole width" is b − a, not b (feedback 1's crossed chip is exactly that error). It helps a new case: A1 and A2 both use it directly. Introduced after the cause (scenes 2 to 4).
- **Considered, not used:** "one over b minus a" alone (the formula without the reason); a rectangle "area = base × height = 1" picture as a second aid (already the scene 3 visual).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,732 characters**, 16 scene headings (Revision 2: 5,617). Characters per scene (1 to 16): 523, 493, 448, 526, 328, 550, 650, 329, 575, 122, 83, 287, 66, 353, 324, 75.

At 13.3 characters per second the speech before the notes is about 425 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 18 s of settling for the arrivals (1), the sliding windows (2), the height dial (3, 5) and the accumulation (6); the key-notes scene is 45 s (1,350 frames). Total **about 514 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 56 s spare.

Reserve trims if the voiced take runs long: scene 9's rounding-error sentence (−128, keep its screen card); scene 6's integral check sentences (keep the grey row). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s07` (route math-a12-s07). Suggested explainer folder `src/explainer/lessons/math-a12-s07` and build folder `docs/production/claude-pm/lessons/m-a12s07` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, flat-density, forced-height, fraction-covered, taller-than-one, straight-line-cdf, train-problem, die-and-mode, when-it-fits, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s06's last frame is scene 1's first frame (it shrinks to a corner card on "soon"); 1 to 2 board clear to empty axes (on "it"); 2 to 3 to 4 camera continue (same rectangle); 4 to 5 clear change (new window); 5 to 6 clear change (`AccumulationTracer`); 6 to 7 clear change, with the corner card growing back as the problem graph; 7 to 8 camera pull back; 8 to 9 clear change; 9 to 10 camera pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s07-rev3-learning-review.md`, `science_check` = `checks/m-a12s07-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only): no bus, bus stop or timetable plate exists in any course (searched bus, stop, timetable, road, street, train). The vehicles in the courses are cars (`b4-car-blue-v1`, `phys-y11-car-top-v1`) and a bike, which do not read as public transport.

Need (painted, new; see the Codex asset brief): `ma12-bus-stop-v1.png` and `ma12-bus-side-v1.png`. Reused: s01's die plate (scene 8, small). The Revision 1 plate name `maths-a12-bus-stop.png` is withdrawn (never painted).

Coded (studio kit): the time strip, arrival dots, wait brackets, the wait histogram, graphs, rectangles, windows, the height dial, the accumulation, F, the number line, working boards, question cards and their axes, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: decision 45's probability set (`ArrivalDots`, `ClassHistogram`, `ProbabilityBars`, `BalanceBeam` as `BalancePoint` density mode), the s06 additions (`SlidingWindow`), and the studio's `FunctionSimulator`, `PairedDerivativePanel`, `LiveReadoutBoard`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot, `GivensStrip`, `QuestionAxes`, `AreaStrips` and `AccumulationTracer` (decision 32).

Additions:
1. **`ArrivalDots` wait mode**: stored arrivals on a strip of `events` (bus ticks) with a bracket from each arrival to the next event and a linked `ClassHistogram` filling with the waits; live "arrivals: n of N" and live class counts; plate sprites (the bus) arriving at each event. Checks: the first five waits from author note k; the final counts 26, 14, 18, 17, 25, 23, 20, 16, 26, 15.
2. **`AreaFill` height dial**: animate `height` and `width` of a constant density with a live readout "area = width × height", `holdArea: 1` making the height follow 1/width; an optional reference line at height 1. Checks: 0.1 at width 10; 1, 1.333, 2 at widths 1, 0.75, 0.5, readout 1 throughout.
3. **`SlidingWindow` ghost mode** (s06 part): a dashed ghost density with an author-supplied primitive and a symbolic label ("area: 2c"). Checks: ghost hump 3t(10 − t)/500 with primitive (15t² − t³)/500 gives 0.104, 0.296 and 0.104 at left edges 0, 4 and 8.
4. **`BalancePoint` density mode** (shared with s08): the fulcrum and beam under a density, tilting with the numerical moment and `settle: false` to stop off-centre with "?". Checks: level at 3 for 1/4 on [1, 5]; tilt towards 5 at t = 2.

## Codex asset brief (Maths A12 S07, a bus every ten minutes)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s07.md`, draft route entry math-a12-s07. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style; at least 8 per cent clear margin; no text, labels, letters, numbers, route numbers, brand names, people, hands, faces, backdrop, road, kerb, shelter, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-bus-stop-v1.png` (900 × 1,800 px, portrait): one roadside bus stop pole seen from the front, with a round sign at the top showing only a plain side-on bus symbol (no letters or numbers) and a **blank, flat light-grey timetable panel** halfway down the pole. Pole base flat on the bottom edge of the art so it can stand on the coded time strip.
2. `ma12-bus-side-v1.png` (1,800 × 800 px, landscape): one modern city bus seen **exactly side-on**, facing right, in a plain cream and teal livery with no lettering, route number, logo or advertising; windows painted as dark tinted glass with soft reflections and **no people, driver or silhouettes visible**; wheels resting on a flat line at the bottom edge of the art.

Report inspection on the paper background (`#f6f1e7`) with the stop at 460 px tall and the bus at 340 px wide, the alpha check, and that both read at those sizes. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s07-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every density is stated with "0 elsewhere" and every CDF with its flat pieces (F = 0 below a, F = 1 above b) where it is written in full.
3. Confirm the scope of every learner-visible general claim: "probability is the fraction of the interval covered" is said of a uniform model only and of intervals inside [a, b]; "a density of two is fine" is tied to "only area is a probability"; "no single mode" is said of the uniform distribution; the rounding-error example states its assumption ("can fit", nothing favouring part of the interval).
4. Confirm the site's numbers are unchanged (card 05: 0.4 and 0.4; drill 5: height 2; Q2: 1/4, (t − 1)/4, 0.375, 0.5; drill 2: 3/8).
5. Confirm both attempt questions carry every demand and given, and that neither card shows a formula, a graph or the answer form.
6. Confirm the syllabus quote matches the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Confirm the handoff (scene 15) states no mean, midpoint or variance, and that the final frame matches s08 scene 1's opening exactly.
10. Confirm the opening frame matches `math-a12-s06.md` scene 15 exactly (flat segment on [1, 5], unlabelled height, "?" chips, "Next: a flat density").

## YouTube metadata (draft)

Title: The Continuous Uniform Distribution | Year 12 Maths Advanced

(Title length: 60 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson09.sa.html

A bus comes every ten minutes and you turn up at a random moment. Every waiting time from 0 to 10 minutes is equally likely, so what does the density look like? See why "equally likely" forces a flat density, why total probability 1 forces its height to be 1/(b − a), and why a probability is just the fraction of the interval covered. Find out why a uniform density can be taller than 1, see the cumulative distribution function grow into a straight line, and work a full problem about a train's waiting time. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Determine and use the probability density function f(x) = 1/(b − a) for a continuous uniform distribution for a random variable X taking values in the interval [a, b]"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: How do mode, median and quartiles differ for a density? (previous video); probability density functions. Next: Expected value and variance of continuous random variables.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. s06's handoff frame (checked).** Scene 1 opens on `math-a12-s06.md` scene 15's final frame as written on 3 Nov (flat segment on [1, 5], height "?", empty F axes "?", "Next: a flat density"). The frame is parked as a corner card and answered in scene 7 (the train on [1, 5]: height 1/4 and F = (t − 1)/4), so s06's two questions are both answered. If s06's handoff changes in review, change scene 1's first sentence and scene 7's first sentence only.
- **2. Syllabus quote linear form (error check).** The crosswalk's linear text "f(x)=(1)/(b-a)" is quoted unchanged in this file; the YouTube description uses the typographic form "f(x) = 1/(b − a)" (root decision 54: descriptions use typographic rendering).
- **3. The rounding-error example (learning review).** It is new (not on the site). If it slows the contrast scene, cut its sentence (−128 characters, listed reserve) and keep the bus as the only "fits" case.
- **4. Spoken "one over b minus a" (voice pilot).** The micro-pause must separate "one over, b minus a" from "one over b, minus a"; the screen formula carries the grouping either way.
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s02, s04, s05 and s06; check that the levelling histogram makes "no wait more likely" visible before the rule; that the sliding window makes "equally likely means flat" a reason; that the height dial shows the area condition forcing 1/(b − a); that the accumulation shows why F is straight; that the train problem separates task, model and givens; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The sliding window, the height dial and the accumulating F carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s06's scene 15 (checked, open decision 1); the handoff frame is s08's opening (same designer).

## Revision 2 (4 November 2026, brief 162 repairs)

Scenes 1 and 9 state a random arrival with no link to the timetable, for buses exactly every ten minutes; scene 2's window slides within zero to ten. Narration now 5,617 characters (counted by the build parser rules). No em dashes.


## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, every site number, the cause chain, both attempts, the memory aid and both joins are unchanged.

- **Anchor and why:** a bus every ten minutes, met at a random moment: the site's own card 05 context and numbers, and the context s06 hands on. The painted stop and bus make the cause visible: a random arrival leaves any wait from 0 to 10 equally likely.
- **Simulations:** `ArrivalDots` (200 stored arrivals with wait brackets, filling a live wait histogram that settles roughly level, with live counts and an arrivals readout); `SlidingWindow` (constant area on the flat line, changing on a ghost hump); the `AreaFill` height dial (live area readout, the top rising through 1); `AccumulationTracer` (F as a straight line, live F readout).
- **Colour roles:** f teal; F and the handoff's balance triangle violet; simulated data blue; probability areas, windows and brackets amber; answer green; mistake red; ink algebra.
- **Plates:** new `ma12-bus-stop-v1` and `ma12-bus-side-v1` (brief above); reused s01's die (small). Revision 1's `maths-a12-bus-stop.png` withdrawn.
- **Narration changes (not voiced):** scene 1 (the simulated arrivals and their histogram); scene 10's last word is now a cue ("width"). Other scenes keep their Revision 2 text.
- **Counts:** 5,617 → 5,732 characters; about 520 s with the old 60 s notes hold → about 514 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were five long notes) beside the framed card.
- **Joins:** opens on s06 Revision 3's flat segment; ends on the train's density with the beam at t = 2, which s08 opens on.
- **Kit additions:** `ArrivalDots` wait mode with a linked histogram and bus sprites; the `AreaFill` height dial; `SlidingWindow` ghost mode; `BalancePoint` density mode (shared with s08).