# Maths A12 S07: How does a continuous uniform model work? Equally likely means flat, the forced height 1/(b − a), probability as the fraction of the interval, and a straight-line CDF (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave I2. Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer` with `domain` intervals, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`), the integral parts from i06 and i08 (`AreaFill`, `AccumulationTracer`), the probability parts from s01 to s03 (`ProbabilityBars`, `BalancePoint`) and the continuous parts from s04 (`ClassHistogram`, `CdfSubtraction`) and s06 (`SlidingWindow`), with the additions under "Codex asset brief". Nothing recorded; human listening pending.

Narration 5,589 characters, 16 scenes, about 520 s (8.7 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: seventh video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 59), after s06 (mode, median and quartiles of a density) and before s08 (continuous expectation and variance). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with `math-a12-s03.md` and `math-a12-s04.md` for the probability conventions. Maths visuals are coded; one small painted plate (a bus stop sign with a blank timetable panel) carries the context. No people. Pre-design pack: none (brief 151 wrote packs to i14 only, and `maths-a12-route-inputs-3.json` has no s entries), so this design does the pack work itself. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson09.sa.html` (Probability Density Functions), SHA256 `8724957cdae4920681fb1c1d0c2644a2db5d674edc47af98d4ab7009133dadf7`; the uniform material is section 5 card 05, drills 2 and 5, short-answer Q2 and the revisit card. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s07` in `../../programme/maths-a12-course-outline.json` ("How does a continuous uniform model work?", one syllabus action, site source lesson 9, no coverage gaps).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; maths visuals coded, objects painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, formula and grouped givens; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Binding root decisions applied: exact values in the algebra (1/10, 1/4, 3/8), decimals only where they are exact readings of the site's answers (0.4, 0.375, 0.5) or in grey readouts; attempt cards give neither the answer nor its form; domains kept (every density is stated with "0 elsewhere" and every CDF with its flat pieces); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cicfcb1105`: "Determine and use the probability density function f(x)=(1)/(b-a) for a continuous uniform distribution for a random variable X taking values in the interval [a,b]"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s06's actual handoff frame (`math-a12-s06.md` scene 15: a flat density on [1, 5] at an unlabelled height, "f(x) = ? for 1 ≤ x ≤ 5", empty F axes with "?", chip "Next: a flat density"), parks it in a corner, and opens a context that explains where flat densities come from: a bus that comes every ten minutes, met at a random moment. The parked [1, 5] density returns in scene 7 as the site's train problem, which answers s06's two questions (its height and its F). Explains why "equally likely anywhere" forces a flat density (equal widths must carry equal areas); why total probability 1 forces the height 1/(b − a) (determine, `cicfcb1105`); uses it: interval probability as the fraction of the interval covered (site card 05, numbers unchanged: P(T < 4) = 0.4, P(3 < T < 7) = 0.4); shows a density can be taller than 1 (site drill 5: height 2 on [0, 0.5]); builds the straight-line CDF F(x) = (x − a)/(b − a) with its flat pieces from accumulation; works the site's train problem (Q2, numbers unchanged: f = 1/4 on [1, 5], P(T > 3.5) = 0.375, P(2 ≤ T ≤ 4) = 0.5); links the discrete uniform 1/n (s02) and the absence of a single mode (s06); contrasts contexts that fit and do not fit. Stops at the uniform density, its probabilities and its CDF. Not taught: E(X) = (a + b)/2 and Var(X) = (b − a)²/12 (s08 generates them by integration; the handoff asks where the flat density balances, a question only); the normal model (s09).

## Decisions

- **Learner question kept (outline).** "How does a continuous uniform model work?" The answer, built in order: "equally likely anywhere" means equal widths carry equal probability, so the density is flat (2); total area 1 forces its height, 1/(b − a) (3); a probability is then a rectangle's area, the fraction of the interval covered, wherever the interval sits (4); a short interval forces a tall density, and that is allowed (5); the running area grows at a constant rate, so F is a straight line from 0 to 1, flat outside (6); a full problem uses f and F (7); the same "spread 1 evenly" idea as s02's 1/n, and no single mode (8); it fits only when nothing favours part of the interval (9).
- **The hook (a question with a visible process).** A time strip with buses every ten minutes; arrival dots fall at random moments, each with its wait bracket to the next bus. "No waiting time is more likely than any other" is the model's assumption, stated as such ("you turn up without checking the timetable"). The site's card 05 says "A bus arrives at a time T uniformly distributed over the next 10 minutes"; this design keeps its numbers and gives the reason the model fits.
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

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as s03 and s04: density curves and rectangles teal (`AREA_POS` fill for probabilities); the running area and F amber (`MATH_ACCENT`); windows and brackets blue; crossed red; algebra ink, current line bright, earlier lines dim. Screen maths writes f(x) = 1/(b − a) for a ≤ x ≤ b, f(x) = 0 elsewhere; F(x) = (x − a)/(b − a); P(a ≤ X ≤ b) forms as s04.

### 1. hook (a bus every ten minutes)
> Last video ended with this flat density, from one to five. We'll find its height soon. First, here's where flat densities come from. A bus comes every ten minutes, and you turn up at the stop without checking the timetable. How long will you **wait**? It could be anything from zero to ten minutes, and no waiting time is more likely than any other. So what does the density look like? And how tall is **it**?

Visual: opens on s06's handoff frame exactly (`math-a12-s06.md` scene 15: a flat blue segment on [1, 5] at an unlabelled height, 0 elsewhere, tag "f(x) = ? for 1 ≤ x ≤ 5", a "?" chip at the y-axis, small empty F axes above with "?", chip "Next: a flat density"). On "soon" the frame shrinks to a corner card (kept small until scene 7, where it returns); on "First" the board clears. Heading writes on: "How does a continuous uniform model work?". The bus stop plate stands at the left of a horizontal time strip 0 to 30 min with bus ticks at 0, 10, 20 and 30 (`WaitStrip`). On "wait" five arrival dots drop at stored random moments (author note j: 3.1, 8.6, 14.0, 21.7, 26.4 min); from each a blue bracket runs to the next bus tick, labelled with its wait (6.9, 1.4, 6.0, 8.3, 3.6). On the next sentence a grey tag "any wait from 0 to 10, none more likely". On "it" the board clears to empty axes "T (min)" from −2 to 12 and "density" with a "?", the plate small at the top right.

### 2. equally likely means flat
> Equally likely has a precise meaning here. Take any two intervals of the same width, say from one to three minutes and from six to **eight**. They must carry the same probability. Slide a window of width two anywhere along the axis, and its probability can't **change**. On a density, probability is area. So equal widths with equal areas means equal heights. The density has to be flat: a constant height c, from zero to ten, and zero **outside**, because a wait below zero or above ten can't happen.

Visual: on "eight" two blue windows mark [1, 3] and [6, 8] on the T axis with an "=" between their tags "same probability". On "change" a ghost humped curve draws over [0, 10] (no values); one window slides along under it and its shaded area visibly grows and shrinks (grey tag "a hump fails: the area changes"); the hump fades. On the next sentences a flat teal line at height c draws from 0 to 10, and the same window slides along it with a constant readout "area: 2c" (`SlidingWindow`). On "outside" the line drops to the axis at 0 and 10 (filled dots at the ends of the flat piece, the axis line bright outside), label "f(t) = c for 0 ≤ t ≤ 10, 0 elsewhere", with grey tags "no wait < 0" and "no wait > 10" on the two zero pieces.

### 3. the height is forced
> Now, how tall? The total area under any density is one. Here the area is a rectangle, ten wide and c tall, so ten times c equals one, and c is one **tenth**. That height means a tenth of the probability per minute: each minute of the interval holds a tenth of the total. The same works on any interval from a to b. The rectangle is b minus a wide, so its height must be one over b minus **a**. We didn't choose that height. Total probability one forced **it**.

Visual: camera continue. The region under the flat line fills teal (`AreaFill`); brackets "width 10" along the axis and "height c" up the side. Right column: "10 × c = 1"; on "tenth" the line settles at 0.1 (height dial; the area readout reaches 1), boxed "c = 1/10"; on the next sentence the rectangle splits into ten 1-minute columns, each tagged "1/10", grey tag "probability per minute". On "a" the axis relabels to a generic interval: brackets "b − a" and "height ?"; rows "c(b − a) = 1", boxed "f(x) = 1/(b − a) for a ≤ x ≤ b, f(x) = 0 elsewhere" (the syllabus form). On "it" a grey tag "forced by total area 1".

### 4. probability is the fraction covered
> So what's the chance you wait less than four minutes? That's the area from zero to four. It's four wide and one tenth tall, which is zero point **four**. And between three and seven minutes? Also four wide, so also zero point **four**. For a uniform model, a probability is just the fraction of the interval that's covered. Where the interval sits doesn't matter, only its **width**. It's the same idea on any interval. If X is uniform from two to ten, the whole width is eight. So the chance X is between four and seven is three **eighths**.

Visual: camera continue (the bus rectangle on [0, 10] at height 1/10). Task strip "Find P(T < 4) and P(3 < T < 7)." On the first sentence [0, 4] shades deeper teal; on "four" row "P(T < 4) = 4 × 1/10 = 0.4". On "four" (second) [3, 7] shades in blue beside it (the first shading dims), row "P(3 < T < 7) = (7 − 3) × 1/10 = 0.4". On the next sentence a row "probability = (width covered)/(b − a)". On "width" the two shaded blocks slide on top of each other and match exactly. On the next sentences a small second graph (x 0 to 12): uniform on [2, 10] at height 1/8 ("whole width 8"); on "eighths" [4, 7] shades, row "P(4 < X < 7) = (7 − 4)/8 = 3/8" (site drill 2).

### 5. a density taller than one
> Here's a surprise. The narrower the interval, the taller the density has to be. What if X is uniform on a short interval, from zero to a **half**? The rectangle is only a half wide. So to have area one, its height must be **two**. A density of two is fine. It isn't a probability. Probability is area, and the area is still exactly **one**.

Visual: clear change to a new window (x −0.5 to 1.5, y 0 to 2.5). On the first sentence a grey chip "bus: width 10, height 1/10". The rectangle starts on [0, 1] at height 1; on "half" its right edge slides to 0.5 and, as it narrows, the height dial raises the top so the area readout stays at 1 ("area: 1"), reaching height 2 on "two" (bracket "height 2 = 1/0.5"). On the next sentences a chip "f(x) = 2 > 1: allowed" and a crossed ghost chip "a density can't be more than 1". On "one" row "area = 2 × 0.5 = 1".

### 6. the CDF is a straight line
> What about the cumulative distribution function? Back at the bus stop, F of t is the area to the left of t. As t moves right, the area grows by the same amount every minute, because the height never **changes**. So F climbs in a straight line, from zero at the start to one at the **end**. On any interval from a to b, F of x is x minus a, over b minus **a**. Before a it stays at zero, and after b it stays at **one**. You can check this with an integral too. F of x is the integral from a to x of one over b minus a, which gives the same x minus a, over b minus a.

Visual: clear change to `AccumulationTracer`: lower panel f = 1/10 on [0, 10] (T from −2 to 12), upper panel F on 0 to 1.1. The marker starts at 0; on "changes" it moves to 1, 2 and 3 with each new 1-minute slice flashing amber, readout "each minute adds 1/10". On "end" the upper curve has drawn a straight amber line from (0, 0) to (10, 1), dots at t = 4 (0.4) and t = 7 (0.7) linking to scene 4's answers (grey). Right column: "F(t) = t/10 for 0 ≤ t ≤ 10". On "a" (third bold) boxed "F(x) = (x − a)/(b − a) for a ≤ x ≤ b". On "one" the flat pieces draw: "F(x) = 0 for x < a" and "F(x) = 1 for x > b", with the upper graph's flat lines at 0 (left) and 1 (right) bright. On the integral sentences a row under the box: "F(x) = ∫ₐˣ 1/(b − a) dt = (x − a)/(b − a)" (s05's F(x) = ∫ₐˣ f(t) dt, in a grey chip), with a tick linking it to the box.

### 7. a problem: the train's wait
> Now back to the flat density from one to five. Say it's the time a train waits at a platform, uniform between one and five minutes. The interval is four wide, so the density is one quarter from one to five, and zero **elsewhere**. Then F of t is the integral of a quarter from one up to t, which is t minus one, over **four**. The chance the train waits more than three and a half minutes is one minus F of three and a half. That's one minus two point five over four, which is zero point three seven **five**. And the chance it waits between two and four minutes is three quarters minus one quarter, a **half**. That's two of the four minutes, so a half makes sense.

Visual: the corner card from scene 1 (s06's flat segment on [1, 5] with "f(x) = ?") grows back to full size and becomes this problem's graph; its "?" labels are replaced as each answer arrives (height "1/4", then the F panel). Task strip "Find f(t) and F(t), then P(T > 3.5) and P(2 ≤ T ≤ 4)." (site Q2, adapted). Givens strip: "T: waiting time (minutes)"; "uniform on 1 ≤ t ≤ 5". Graph: f on x 0 to 6 at height 1/4, F below on 0 to 1.1. On "elsewhere" row "f(t) = 1/(5 − 1) = 1/4 for 1 ≤ t ≤ 5, f(t) = 0 elsewhere". On "four" row "F(t) = (t − 1)/4 for 1 ≤ t ≤ 5 (0 below 1, 1 above 5)" written as "F(t) = ∫₁ᵗ 1/4 du = (t − 1)/4"; the F graph draws. On the third sentence `CdfSubtraction` complement bracket from F(3.5) to 1, with [3.5, 5] shaded on f; on "five" row "P(T > 3.5) = 1 − (3.5 − 1)/4 = 1 − 5/8 = 3/8 = 0.375". On "half" brackets at F(2) = 1/4 and F(4) = 3/4, [2, 4] shaded on f; row "P(2 ≤ T ≤ 4) = 3/4 − 1/4 = 1/2"; on the last sentence a grey check "width 2 of 4: 1/2".

### 8. the same idea as a fair die, and no single mode
> This should feel familiar. A fair die spreads a total probability of one equally over six values, so each gets one **sixth**. A continuous uniform spreads it evenly over an interval, so its height is one over the width. And because the density is flat, no value is higher than any other. So a uniform distribution has no single **mode**.

Visual: camera pull back: the train's f graph moves left; on "sixth" s02's six die bars at 1/6 (`ProbabilityBars`) appear beside it, tagged "6 values: 1/6 each" and "interval of width 4: height 1/4", with a shared chip "spread a total of 1 evenly". On "mode" the flat top of f is ringed along its whole length, tag "every point is highest: no single mode" (s06's mode rule in a grey chip: "mode: where f is highest").

### 9. when the uniform model fits
> When is this a good model? When nothing makes one part of the interval more likely than another. Turning up at random for a bus that comes every ten minutes fits. The rounding error, when you round a length to the nearest centimetre, can fit too, anywhere from minus a half to a **half**. But a reaction time doesn't. Those times bunched up in the middle, as the histogram **showed**. A flat model would give the extreme times far too much **probability**. And a bus wait doesn't fit either if you've checked the timetable, because then you'd arrive just before the bus.

Visual: clear change to a two-column board. Left "fits": the bus strip (small) and a ruler-style number line from −0.5 to 0.5 cm with a flat teal density over it (on "half"), tag "error = true length − rounded length". Right "doesn't fit": on "showed" s04's reaction-time histogram (`ClassHistogram`, density mode, small, its five classes) with a flat dashed rectangle of the same total area laid over it; on "probability" the two end classes glow where the rectangle sits far above the bars, tag "too much probability at the extremes". On the last sentence a third small card under "doesn't fit": the bus strip with an arrival dot just before a bus tick, tag "timetable checked: short waits only".

### 10. memory aid
> Here's a way to remember it. Flat, so one over the width. And the probability is the width you want, over the whole width.

Visual: camera pull back to the bus rectangle and the train graph small. The handwritten lines write large: "Flat, so one over the width." and "Probability = width you want ÷ whole width." Under them, smaller: "f(x) = 1/(b − a) on [a, b], 0 elsewhere." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Write down the density, and find this probability. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A continuous random variable X is uniformly distributed on 3 ≤ x ≤ 8. Write down the probability density function f(x), and find P(4 ≤ X < 6.5)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no rectangle, no formula).

### 12. feedback 1 (brief)
> The interval is five wide, so f of x is one fifth between three and eight, and zero **elsewhere**. From four to six point five is two point five wide, so the probability is two point five over five, which is a **half**. A height of one eighth is wrong. The width is eight minus three, not **eight**.

Visual: card shrinks to the top. "3 ≤ x ≤ 8" underlined as it is used; on "elsewhere" row "f(x) = 1/(8 − 3) = 1/5 for 3 ≤ x ≤ 8, f(x) = 0 elsewhere" and a small rectangle on [3, 8] at 1/5. "P(4 ≤ X < 6.5)" underlined; on "half" [4, 6.5] shades, boxed "P(4 ≤ X < 6.5) = (6.5 − 4)/5 = 2.5/5 = 1/2". On "eight" a chip "f(x) = 1/8" fades in and is crossed (caption "width is b − a = 5"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Find k, then find the probability. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The delay, X minutes, of a train is uniformly distributed on 0 ≤ x ≤ k. The probability that the delay is more than 6 minutes is 0.25. Find k, and find P(X < 3)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no equation, no graph).

### 14. feedback 2 (brief)
> More than six minutes is the part from six up to k. So k minus six, over k, is zero point two **five**. Then k minus six is a quarter of k, so three quarters of k is six, and k is **eight**. So P of X less than three is three **eighths**. Six over k equals zero point two five is wrong. That's the chance of less than six minutes, and it gives k equals twenty-**four**.

Visual: card shrinks to the top. "0 ≤ x ≤ k" and "more than 6 minutes" underlined as used; on "five" a small rectangle on [0, k] with [6, k] shaded, row "(k − 6)/k = 0.25". On "eight" rows "k − 6 = 0.25k, so 0.75k = 6, k = 8"; boxed "k = 8". On "eighths" [0, 3] shades, boxed "P(X < 3) = 3/8". On "four" a chip "6/k = 0.25, k = 24" fades in and is crossed (caption "that is P(X < 6)"). Hold about 1 second.

### 15. handoff
> So a uniform density is flat, its height is forced to be one over the width, and its probabilities are fractions of the interval. Next, a new question. Think of the train's flat density as a shape resting on a beam. Where would it **balance**? And for a density that isn't flat, how do we find the balance point, and the spread?

Visual: the boxed f, the fraction rule and the boxed F show small at the top, then fade on "Next". Board clears to the train's density f(t) = 1/4 on [1, 5] (axis 0 to 6, y 0 to 0.4; teal rectangle, labels "1", "5", "1/4"). On "balance" s03's balance triangle (`BalancePoint`, density mode) appears under the axis at t = 2, the beam tilting towards 5; it stops there with "?" (no slide, no level state). Chip "Next: where does a density balance?". No mean, midpoint or variance is shown. Hold about 2 seconds. This is s08's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Continuous uniform on [a, b]: every equal-width interval inside [a, b] is equally likely, so the density is flat: f(x) = 1/(b − a) for a ≤ x ≤ b, and f(x) = 0 elsewhere.
2. The height is forced by total area 1: (b − a) × height = 1. It can be more than 1 when b − a < 1.
3. Probability = (width covered)/(b − a). Example: uniform on [2, 10], P(4 < X < 7) = 3/8.
4. CDF: F(x) = (x − a)/(b − a) for a ≤ x ≤ b, with F(x) = 0 for x < a and F(x) = 1 for x > b (a straight line).
5. A uniform distribution has no single mode.

Memory aid (large, on the notes screen): *Flat, so one over the width.*

Visual (end of the hold, silent, no added speech): the key notes cross-fade (1 s, root decision 20) back to scene 15's frame exactly (the train's density on [1, 5] at 1/4, the balance triangle at t = 2 with "?", chip "Next: where does a density balance?"). This is the final frame and s08's opening frame.

## Teaching checks

- **Does it explain causes?** Why flat: equal widths must carry equal probability, and probability is area (2). Why 1/(b − a): a rectangle of area 1 and width b − a (3). Why only the width matters: equal widths give equal rectangles anywhere (4). Why a height of 2 is allowed: only area is capped at 1 (5). Why F is a straight line: each minute adds the same area (6). Why no single mode: every point of a flat density is highest (8). Why reaction times don't fit: their histogram bunches, and a flat model overweights the extremes (9).
- **Misconceptions addressed:** "a density can't exceed 1" (5, crossed ghost); "the CDF of a flat density is flat" (6, the straight line); "where the interval sits matters" (4); "height 1/b" (feedback 1 crossed); "the probability of more than 6 is 6/k" (feedback 2 crossed); "any wait is uniform" (9).
- **One idea at a time:** one requirement (2), one forced height (3), one use (4), one surprise (5), one accumulation (6), one problem with task, model and givens separate (7), one link (8), one contrast (9). Only the needed earlier results stay bright: f = 1/10 in 4 and 6; f = 1/4 in 7 and 8.
- **Video makes it easier:** the student watches random arrivals produce waits from 0 to 10 (1), sees a sliding window keep its area on a flat line but not on a hump (2), sees the height settle as the area reaches 1 (3) and rise as the interval shrinks (5), and watches F grow by equal steps into a straight line (6).
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
| Bus waits (stored arrivals) | arrivals 3.1, 8.6, 14.0, 21.7, 26.4 min; waits 6.9, 1.4, 6.0, 8.3, 3.6 | 1 |
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

- Bus: ∫₀⁴ 1/10 dt = 2/5; ∫₃⁷ 1/10 dt = 2/5; ∫₀¹⁰ 1/10 dt = 1; waits from the stored arrivals: 10 − 3.1 = 6.9, 10 − 8.6 = 1.4, 20 − 14.0 = 6.0, 30 − 21.7 = 8.3, 30 − 26.4 = 3.6.
- Short interval: 1/(0.5 − 0) = 2; 2 × 0.5 = 1.
- Train: ∫₁ᵗ 1/4 du = (t − 1)/4; F(3.5) = 5/8, 1 − 5/8 = 3/8 = 0.375; F(4) − F(2) = 3/4 − 1/4 = 1/2.
- Drill 2: f = 1/8 on [2, 10]; F(7) − F(4) = 5/8 − 2/8 = 3/8.
- A1: 1/(8 − 3) = 1/5; 2.5/5 = 1/2; crossed 2.5/8 = 5/16.
- A2: (k − 6)/k = 1/4 gives k = 8; 3/8; crossed 6/k = 1/4 gives k = 24.

## Memory aid check

- **"Flat, so one over the width. Probability is the width you want over the whole width."** Meaning, as said in scene 10: the uniform density is flat, its height is 1 ÷ (b − a), and an interval's probability is its width divided by b − a. Assumptions checked: "the width you want" must lie inside [a, b] (a part outside adds nothing; the key notes say "width covered"); it applies only to a uniform model, where the height is constant (scene 9 shows a non-uniform case); "the whole width" is b − a, not b (feedback 1's crossed chip is exactly that error). It helps a new case: A1 and A2 both use it directly. Introduced after the cause (scenes 2 to 4).
- **Considered, not used:** "one over b minus a" alone (the formula without the reason); a rectangle "area = base × height = 1" picture as a second aid (already the scene 3 visual).

## Narration length estimate

Revision 1 (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): see the count line below.

**5,589 characters** (5,604 with the joining spaces), 16 scenes. Characters per scene (1 to 16): 401, 489, 448, 526, 328, 550, 650, 329, 558, 122, 83, 287, 66, 353, 324, 75. At 13.3 characters per second the speech is about 420 s; add about 14 s of settling for the arrivals (1), the sliding windows (2), the height dial (3, 5) and the accumulation (6), 20 s for two countdowns, 5 s of short holds (10, 12, 14, 15) and about 62 s more for the quiet notes (about 100 s of holds): **about 520 s**, inside the 5,500 to 6,800 band (89 characters above the floor) and under the 570 s cap. The first count was 4,838; Revision 1 added content, not padding: the reason for "0 elsewhere", the meaning of the height as probability per minute, a second interval (site drill 2), the integral check of F (s05), the spoken integral in the train problem, its sense check, and a second non-fitting case. Scene 7 is the longest; the givens strip must be complete before "The interval is four wide". Feedback: scene 12 about 23 s and scene 14 about 28 s including the 1 s holds. No trims are available without going below the band; if the voiced take runs over 570 s, cut scene 9's rounding-error sentence (−128) and accept 5,461 (root decision needed).

## Scene list and build ids

Lesson key `m-a12s07` (route math-a12-s07). Suggested explainer folder `src/explainer/lessons/math-a12-s07` and build folder `docs/production/claude-pm/lessons/m-a12s07` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, flat-density, forced-height, fraction-covered, taller-than-one, straight-line-cdf, train-problem, die-and-mode, when-it-fits, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s06's last frame is scene 1's first frame (it shrinks to a corner card on "soon"); 1 to 2 board clear to empty axes (on "it"); 2 to 3 to 4 camera continue (same rectangle); 4 to 5 clear change (new window); 5 to 6 clear change (`AccumulationTracer`); 6 to 7 clear change, with the corner card growing back as the problem graph; 7 to 8 camera pull back; 8 to 9 clear change; 9 to 10 camera pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12s07-learning-review.md`, `science_check` = `checks/m-a12s07-maths-check.md`.

## Assets

Have (after the s01 to s06, i06 and i08 builds): `ProbabilityBars`, `BalancePoint`, `ClassHistogram`, `SlidingWindow`, `CdfSubtraction`, `AreaFill`, `AccumulationTracer`; shared `FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ReadoutPanel`, `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard`, `KeyNotes`, `Heading`.

New: `WaitStrip`; `SlidingWindow` symbolic label; `AreaFill` height dial; `BalancePoint` density mode (shared with s08); painted plate `maths-a12-bus-stop.png`.

## Codex asset brief

**A. Coded parts (add to the next maths kit brief, with the s01 to s04 probability parts; same rules: exported through `kit.tsx`, pilot from this design's numbers, numerical checks, desktop and phone-landscape stills, silent motion sample). Every displayed value is formatted from the same data that sets the geometry.**

1. **`WaitStrip`** (scenes 1, 9). A horizontal time strip with `events` (bus ticks, e.g. [0, 10, 20, 30]) and `arrivals` ({t, at}[], stored values, not regenerated), each arrival dropping a dot and drawing a bracket to the next event with a label of the wait (formatted from the data). Checks: waits 6.9, 1.4, 6.0, 8.3, 3.6 for the stored arrivals; no bracket crosses an event.
2. **`SlidingWindow` additions** (scene 2; the part is specified in `math-a12-s06.md`, with its readout from an author-supplied primitive F). Add `symbolicLabel` (shows "area: 2c" instead of a number, for the flat line before its height is known) and allow a `ghost` density (dashed, no fill colour change) for the hump that fails. Checks: constant readout for the flat density (primitive F = ct) at five window positions; for the ghost hump (author-supplied function and primitive, e.g. 3t(10 − t)/500 on [0, 10] with F = (15t² − t³)/500), areas at left edges 0, 4 and 8 are 0.104, 0.296 and 0.104, so the change is visible.
3. **`AreaFill` height dial** (scenes 3, 5). For a constant density, props `height` ({value, at}[]) and `width` ({from, to, at}[]) animate the rectangle while an `areaReadout` shows width × height; `holdArea: 1` makes the height follow 1/width while the width changes. Checks: height 0.1 at width 10; heights 1, 1.333, 2 at widths 1, 0.75, 0.5 with the readout 1 throughout.
4. **`BalancePoint` density mode** (scene 15; s08 scenes 1 to 6). The fulcrum and beam from s03 under a `FunctionGraph` density instead of bars; the tilt follows the net moment ∫ (x − fulcrum) f(x) dx computed numerically from the supplied f on its domain (sign and capped size); `levelAt` slides to an author-supplied μ, and the part throws if the supplied μ differs from the numerical moment balance by more than 0.001. `settle: false` lets s07's handoff stop off-centre with "?". Checks: level at 3 for f = 1/4 on [1, 5]; tilt towards 5 at t = 2; (s08) level at 8/3 for x/8 on [0, 4]; level at π/2 for ½ sin x on [0, π].

Existing parts used unchanged: `AccumulationTracer` (lower f = 1/10, upper F = t/10, marker path 0 to 10, readout "each minute adds 1/10"; check F(4) = 0.4, F(7) = 0.7), `CdfSubtraction` (train F: complement from F(3.5) = 5/8; difference F(4) − F(2) = 1/2), `ClassHistogram` (s04 data in density mode, small), `ProbabilityBars` (die at 1/6).

**B. Painted plate (new; transparent PNG with a true alpha channel, no background, no shadow box, no text, no people, no hands; flat paper-friendly painted style matching the existing explainer plates and the `maths-a12-` set; never stretched, scale uniformly only).**

1. `maths-a12-bus-stop.png`: a simple roadside bus stop pole, front view, with a round sign at the top showing only a plain bus symbol (a simple side-on bus shape, no letters or numbers) and a **blank, flat light-grey timetable panel** halfway down the pole; about 600 × 1,200 px (portrait). No street, no shelter, no people, no brand, no text.

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

- Revision 1 has had no independent review. Next: student learning review (trace from s02, s04, s05 and s06; check that the sliding window makes "equally likely means flat" a reason rather than a rule; that the height dial shows the area condition forcing 1/(b − a); that "only its width" is visible in scene 4; that the accumulation shows why F is straight; that the train problem separates task, model and givens; that the cards give nothing away), then the Codex maths check and error check.
- The sliding window, the height dial and the accumulating F carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is s06's scene 15 (checked, open decision 1); the handoff frame is s08's opening (same designer).
