# Maths S12 A11b: Which values make sense in a quadratic model, and where does it stop working? The rocket underground, valid values of x and y, a vegetable patch, and limitations as an assumption plus why it fails (design)

Status: Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`; ruling 8 splits a11 into a11a and a11b). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,223 characters by script (see "Narration length estimate"), 12 scene headings, about 482 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second half of the eleventh video of Year 12 Mathematics Standard (2024), outline order 11 (a11b; root ruling 8: "valid values and limitations"), Algebraic relationships; the last quadratic video. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-a11.md` (the pack's suggested split: a11b takes `ci88f43c88`). Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson05.sa.html` (SHA256 `30c7a2925ec1ac3e017ed94b684891e5f2af67b59c91252a25b6808c6dbc666f`): card 06's valid domain idea (a negative area is impossible; the domain from the context) with the paddock **corrected** as a vegetable patch fenced on all four sides (MS-10: the site's "one side is the barn wall" does not fit A = 40w − w²); `we-3`'s roller coaster (h = −0.02d² + 1.6d, valid 0 ≤ d ≤ 80, "a quadratic has only one turning point") with its exact numbers. Route entry: `math-s12-a11` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the painted paddock, launcher and rocket (a09's brief), the reused garden barrow and roller-coaster plates, and a new holiday house for the a12 frame; every graph, shading and card coded.

Owner rules applied: as a11a (2024 syllabus; plates for real objects, code for graphs; no people; one question; one stage at a time; words before symbols; g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a backyard toy, a vegetable patch, a theme park); Australian spelling; no em dashes; "zero point" decimals; conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12 Standard 2, Algebraic relationships, Quadratic relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci88f43c88`: "Explain the limitations of a model of a quadratic relationship in a practical context and consider the values for x and y for which the quadratic model is valid"

(`ci73f0af63` and `cic7ff4ee6` are a11a, practised again here in passing.) Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a11a's final frame exactly (the paddock strip, the launcher and the rocket on the grass; the rocket's graph widened to t −1.5 to 5.5 and h −30 to 25, the curve continued as a grey dashed line into negative heights, (5, −25) ringed red with "t = 5: h = −25 m?"; "underground?"; chips "Next: where does the model stop working?" and "?"). Recalls a07 (a limitation names the assumption and why it fails), a10 (the midpoint) and Year 11's linear limitations (math-s11-l04) in a phrase or grey chip each. Teaches: an equation keeps going but the situation does not; the valid values of x are those the context allows (usually between the x-intercepts; never a negative time, length or price), and the valid values of y run between the least and greatest values the context reaches; write them as intervals (0 ≤ t ≤ 4, 0 ≤ h ≤ 20); an x outside the valid values gives an impossible y (a negative area); a limitation in context has two parts, the model's assumption and why it fails here (a parabola has one turning point; a launch starts above the ground). Stops at valid values and limitations of a given quadratic model. Not taught: building a quadratic model; reciprocal models (a12, a13).

## Decisions

- **Anchor: the rocket underground, then a backyard vegetable patch (live).** The rocket's own graph, kept going past the landing, gives an impossible −25 m; the impossibility makes "valid values" a question the student already wants answered. The site's paddock idea is then used **corrected** (MS-10): a rectangular vegetable patch edged on all four sides with 20 m of timber, so the length is 10 − w and A = w(10 − w), a smaller backyard version of the site's 80 m paddock (A = 40w − w² fits a rectangle fenced on all four sides). The reused garden barrow `maths/ma11-garden-barrow-v1.png` (viewed 18 Nov: a green wheelbarrow with a potted lavender, a hose and two paper sacks, true alpha) is the patch's badge; the patch itself is a coded top-view rectangle with timber-coloured edges whose shape changes with w (a dimension diagram, like `StudioFencePen`). Home; the pack's anchor 3.
- **Roller coaster (site `we-3`, reused plates).** `maths/ma12-coaster-track-v1.png` (viewed 18 Nov: a steel coaster track with a dip and a tall rise, true alpha) and `maths/ma12-coaster-car-v1.png` (a two-seat car, empty) show a real track with more than one rise and dip beside the model's single hill, so the one-turning-point limitation is seen, not only said. The coaster is an event, not science.
- **Simulations (standard item 3).**
  1. **Valid-window shading** (scenes 2 and 3; `AxisShadow`, `RegionLabels`): the valid t-values shade blue along the t-axis and the valid h-values teal up the h-axis; the curve inside both bands stays ink, the parts outside turn grey dashed with a "not in the real situation" tag.
  2. **Width slider on the patch** (scene 3; `ParameterSlider` driving the coded rectangle and a `FunctionRider` on A(w)): as w sweeps 0 → 5 → 10 → 12, the patch is a thin strip, a square, a thin strip again, then the length readout turns red at "10 − 12 = −2 m" and the area reads "−24 m²", with the rectangle unable to draw (a red dashed outline and "impossible").
  3. **Model against track** (scene 4): the coaster car rides the model's parabola over its one hill while the painted track behind it continues into further dips and rises; at d = 80 the model curve dives below zero (grey dashed) while the track carries on.
- **Colour roles (fixed for a09 to a11b).** x-values **blue**; y-values **teal**; the vertex **amber**; valid x-values shaded pale blue on the x-axis, valid y-values pale teal on the y-axis; parts outside grey dashed; the limitation card's "assumption" chip **amber** and "why it fails here" chip **violet**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As a11a. Hand tags: "the equation keeps going", "the situation stops", "launch", "landing", "0 ≤ t ≤ 4", "0 ≤ h ≤ 20", "no patch", "a square", "length can't be negative", "impossible", "assumption", "why it fails here", "one hill only", "starts above the grass", "a formula always gives a number".
- **Stage changes (standard item 2).** a11a's frame (1); the valid-window shading on the rocket (2); g01 board with the patch and its slider (3); the profit graph, valid values that are not between the intercepts (4); the limitation card with the coaster and the rocket (5); framed card (6); question cards (7 to 10); the holiday house frame for a12 (11); key notes (12).
- **Worked examples (g01 layout).** 2: the rocket: 0 ≤ t ≤ 4 and 0 ≤ h ≤ 20. 3: the patch: intercepts 0 and 10; largest 25 m² at w = 5 (a 5 m square); w = 12 gives −24 m², impossible; 0 ≤ w ≤ 10 and 0 ≤ A ≤ 25; crossed "valid for every w". 4: the profit model's valid values (0 ≤ n ≤ 10 with an assumed 1,000-item factory limit; −32 ≤ P ≤ 18, a loss being real). 5: limitations: site `we-3` (0 ≤ d ≤ 80; one turning point versus many dips) and the rocket's ground-level launch.
- **Memory aid.** Framed card: "Valid: what the situation allows. Limitation: the assumption, then why it fails here." Key line: "Usually between the x-intercepts. Never a negative time, length or price."
- **Visual surprise.** The patch slider: at w = 10 the rectangle collapses to a line, and pushed to w = 12 it cannot be drawn at all, while the equation calmly prints −24.
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-10).** The paddock's barn wall is not taught; the patch uses an all-sides edging, matching its model. `we-3`'s numbers are unchanged; its vertex (40, 32), not stated on the site, is added. The real-launch note (pack section 8: "say once that the model starts at ground level for simplicity") is said in scene 4 as the rocket's limitation.
- **Profit reuse (scene 4).** a11a's profit graph (site `we-2`) returns to show that valid values come from the situation: n from 0 to an assumed factory limit of 10 (1,000 items), past the break-even crossing at 8, and P from −32 to 18, because a loss is real. This stops "between the x-intercepts" hardening into a rule.
- **Plain meanings at first use.** Valid values ("the values of x and y that make sense in the real situation"); interval notation ("0 ≤ t ≤ 4 means every t from 0 to 4, ends included"); limitation ("a way the model fails to match reality"); assumption ("something the model takes for granted").
- **Attempts (pack questions, the parts a11a left).** A1 (pack question 1 (d)): the rugby kick h = −5t² + 15t, crossings 0 and 3: valid 0 ≤ t ≤ 3, with heights 0 to 11.25 m; crossed "all values of t". A2 (pack question 2 (c)): the musical's T = −20p² + 1200p: at p = 70, T = −14,000, impossible, so prices above $60 are outside the valid values; crossed "it's fine, the formula still gives a number".
- **Mistake scene:** none separate. Valid values from the whole parabola (3 crossed, A1 crossed); "the model may be wrong" as a limitation (4, said: name the assumption); trusting a formula outside its values (A2 crossed); valid y-values forgotten (2, 3 rows).
- **Cause chain taught, in order:** (1) an equation gives a number for every x, but a real situation only runs for some x, so the model only describes those (1, 2); (2) the rocket is only in the air from launch to landing, so 0 ≤ t ≤ 4, and its heights only reach 0 to 20 (2); (3) a width beyond 10 m leaves a negative length, so the area formula gives an impossible negative area: those widths are outside the model (3); (4) a model rests on assumptions; when an assumption is false the model fails, so a limitation names the assumption and why it fails here (4); (5) a parabola has one turning point, so it cannot follow a shape with several (4).
- **Entry knowledge (route):** a11a (meanings of the intercepts and vertex; the four questions); a10 (the midpoint); a07 (a limitation names an assumption and why it fails); math-s11-l04 (`ci1b3cf962`, the limitations of a linear model).
- **What later videos rely on.** a13 recalls "a limitation names the assumption, then why it fails here" (from a07, used here) for reciprocal models, and "valid values" for x = 0 and huge x.
- **Handoff (to math-s12-a12, "What is inverse variation, and why is its graph a hyperbola?").** Scene 11: the new holiday house plate `ms12-holiday-house-v1.png` (900 px wide) with a coded price tag "$1,200 for the weekend"; a small coded strip "Year 11: y = kx, double one, the other doubles" with a straight line through the origin (grey); chips "2 friends: $600 each", "4 friends: ?", "double the friends: half each?", "Next: inverse variation" and "?". This is a12's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Rocket: valid 0 ≤ t ≤ 4, 0 ≤ h ≤ 20; h(5) = h(−1) = −25.
  (b) Patch: perimeter 2w + 2L = 20, so L = 10 − w; A = w(10 − w) = 10w − w²; zeros 0, 10; A(5) = 25; A(2) = A(8) = 16; A(12) = −24. At w = 0 or 10 the "patch" has no area; the interval is written 0 ≤ w ≤ 10, as the site writes 0 ≤ w ≤ 40.
  (c) `we-3`: −0.02d² + 1.6d = −0.02d(d − 80); vertex (40, 32).
  (d) A1: valid 0 ≤ t ≤ 3; 0 ≤ h ≤ 11.25. A2: T(70) = −20(4,900) + 84,000 = −14,000.
  (e) The 1,000-item factory limit in scene 4 is an assumption made for the example (said as "say its factory can make at most"); it is not site content.
  (f) Pronunciations: "zero is less than or equal to t, which is less than or equal to four"; "minus zero point zero two d squared, plus one point six d".
  (g) Windows: rocket t −1.5 to 5.5, h −30 to 25; patch graph w −2 to 13, A −30 to 30; coaster d 0 to 100, h −10 to 40; A1 card t −1 to 4, h −10 to 12; A2 card p 0 to 80, T −16,000 to 20,000.

Main question: *The rocket's model says it's 25 m underground at 5 seconds. Which values make sense in a quadratic model, and where does it stop working?*
Entry knowledge (a11a; a10; a07; math-s11-l04): meanings and reading moves; the midpoint; the two-part limitation; linear limitations.
Stops after: valid values of x and y from the context, as intervals; impossible values outside them; limitations as an assumption plus why it fails here. No reciprocal models.
Handoff: math-s12-a12: "a $1,200 holiday house, split evenly: double the friends, half each?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x blue; y teal; vertex amber; valid x pale blue band, valid y pale teal band; outside grey dashed; assumption chip amber; why-it-fails chip violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: twenty-five metres underground
> Here's the rocket's graph, with the model kept going. At five seconds, it says the height is minus twenty-five metres. And at minus one second, before the launch, it says minus twenty-five metres too. But the rocket is sitting on the grass. It can't be underground, and it can't fly before it's launched. The equation keeps going forever, but the real situation **doesn't**. So which values of t and h actually make sense, and where does a quadratic model stop **working**?

Visual: opens on a11a's final frame exactly (the paddock strip, launcher and rocket on the grass; the widened graph with the grey dashed continuation; (5, −25) ringed red with "t = 5: h = −25 m?"; "underground?"; chips "Next: where does the model stop working?" and "?"). On the first sentence the "Next" chips fade. On "minus one second" the point (−1, −25) rings red too, with a chip "t = −1: before the launch?". On "sitting on the grass" the rocket plate pulses on its tube. On "doesn't" two hand tags: "the equation keeps going" (on the dashed parts) and "the situation stops" (at t = 0 and t = 4). On "working" heading "Quadratic models: valid values and limitations", and the question chip "Which values make sense?" moves to the top right.

### 2. valid values: what the situation allows
> The model only describes the rocket while it's in the air. Time starts at the launch, t equals zero, and ends at the landing, four seconds. So the valid values of t are from zero to four. We write that as zero is less than or equal to t, which is less than or equal to **four**. Outside that, the model gives heights below the ground, which can't happen. The heights the rocket actually reaches go from zero, on the grass, up to the vertex, twenty metres. So the valid values of h are from zero to **twenty**. To find valid values, ask what the situation allows. Usually that's between the x-intercepts, and never a negative time, length, area or **price**.

Visual: camera continue; the graph enlarges (1,300 × 700 px), the plates a 1,300 px strip at the top. Valid-window shading (simulation 1): on "launch" the t-axis from 0 rings blue with tag "launch"; on "landing" t = 4 rings, tag "landing". On "four" (first bold) the band from 0 to 4 shades pale blue along the t-axis, row (52 px) "valid t: 0 ≤ t ≤ 4", with a grey caption "every t from 0 to 4, ends included". The curve outside the band turns grey dashed, tag "not in the real situation". On "twenty" the band from 0 to 20 shades pale teal up the h-axis, the vertex (2, 20) ringing amber, row "valid h: 0 ≤ h ≤ 20". Framed answer (green): "0 ≤ t ≤ 4 and 0 ≤ h ≤ 20". On "price" a grey chip list (44 px): "time ≥ 0", "length ≥ 0", "area ≥ 0", "price ≥ 0".

### 3. worked example: a vegetable patch
> Here's a backyard example. A rectangular vegetable patch is edged with twenty metres of timber. If the width is w metres, the two widths and two lengths share the twenty metres, so the length is ten minus w. Its area is A equals w, times ten minus w, and the graph is shown. It crosses the w-axis at zero and ten. At those widths, there's no patch at **all**. Halfway is five, and the area there is five times five, twenty-five square **metres**. So the largest patch is a five by five square. Now try a width of twelve. The length would be minus two, and the model gives an area of minus twenty-four square metres. That's **impossible**. So the valid widths are from zero to ten, and the valid areas from zero to twenty-**five**. Saying the model works for every width is the **slip**.

Visual: clear change to the g01 board. Task strip (44 px): "A rectangular vegetable patch is edged with 20 m of timber. Its width is w m and its area is A = w(10 − w). Find the largest area and the valid values of w and A." Givens card (44 px): "edging: 20 m"; "length = 10 − w"; "A = w(10 − w)". The barrow `maths/ma11-garden-barrow-v1.png` as a 260 px badge; a coded top-view patch (timber-coloured edges, soil fill, 520 × 520 px box) beside the graph (850 × 600 px, w −2 to 13, A −30 to 30). The width slider (simulation 2) drives both. On "all" the slider sits at w = 0 then w = 10, the patch collapsing to a line each time, the crossings ringing blue, hand tag "no patch". On "metres" the slider sweeps to w = 5: the patch becomes a square "5 m × 5 m", rows "w = (0 + 10) ÷ 2 = 5" and "A = 5 × 5 = 25", the vertex (5, 25) rings amber, hand tag "a square". On "Now try a width of twelve" the slider pushes to 12: the length readout turns red, "L = 10 − 12 = −2 m", hand tag "length can't be negative"; on "impossible" the rectangle shows as a red dashed outline that cannot close, the point (12, −24) rings red, row "A = 12 × (−2) = −24 m²", hand tag "impossible". On "five" (last) the bands shade: pale blue "0 ≤ w ≤ 10" on the w-axis, pale teal "0 ≤ A ≤ 25" on the A-axis; framed answer (green): "Largest patch 25 m² (5 m × 5 m). Valid: 0 ≤ w ≤ 10, 0 ≤ A ≤ 25". On "slip" a red slip "valid for every w" writes and is crossed, caption "w = 12 gives −24 m²".

### 4. not always between the intercepts
> Careful, though. The situation decides, not the intercepts. Remember the company's profit graph from last time, P thousand dollars for n hundred items. It can't make a negative number of items, so n starts at zero. Say its factory can make at most a thousand items a week, so n goes up to **ten**. Here a negative value is fine, because a negative profit is a real loss. At zero items, the company loses thirty-two thousand dollars. So the valid profits run from minus thirty-two, up to the greatest profit, **eighteen**. Valid values aren't always between the x-intercepts, and they aren't always positive. Ask what can really **happen**.

Visual: clear change. The profit graph from a11a (900 × 600 px, n −1 to 11, P −40 to 25) with the lemonade stall badge `maths/ma11-lemonade-stall-v1.png` (240 px) and a grey chip "a11a: P = −2n² + 20n − 32 (thousands of $, hundreds of items)". On "starts at zero" the region n < 0 greys, tag "no negative items". On "ten" a grey chip "factory limit: 1,000 items a week" and the band 0 ≤ n ≤ 10 shades pale blue along the n-axis, extending past the break-even crossing at 8, hand tag "past break-even: still possible". On "a negative profit is a real loss" the part of the curve below the axis stays ink (not grey), tag "a loss is real". On "eighteen" the band from −32 to 18 shades pale teal up the P-axis, the points (0, −32) and (5, 18) ringing teal and amber; row (52 px): "valid: 0 ≤ n ≤ 10, −32 ≤ P ≤ 18". On "happen" a two-row card (44 px): "time, length, area, price: never negative" and "profit: can be negative (a loss)".

### 5. limitations: the assumption, then why it fails
> Valid values are one part. The other part is the model's limitations. A good limitation has two pieces. Name what the model assumes, then say why that fails in this situation. Here's part of a roller coaster, modelled by h equals minus zero point zero two d squared, plus one point six d. It's valid from zero to eighty metres along, with a top of thirty-two metres at **forty**. But the model assumes one smooth hill. A parabola has only one turning point, and a real roller coaster rises and dips many times, so this model can only describe one hill, not the whole **ride**. And for the rocket, the model assumes it starts at ground level. A real foam rocket leaves its launcher a little above the grass, so the true graph doesn't quite start at **zero**. Saying the model might be wrong isn't enough. Name the assumption.

Visual: clear change. The coaster track plate `maths/ma12-coaster-track-v1.png` (1,500 px wide) across the top with the coaster car `maths/ma12-coaster-car-v1.png` (200 px) on it; below, the model graph (1,100 × 520 px, d 0 to 100, h −10 to 40) with the equation (52 px). The car rides the model's parabola (simulation 3); on "forty" the vertex (40, 32) rings amber and the band 0 ≤ d ≤ 80 shades pale blue, row "valid: 0 ≤ d ≤ 80" (site `we-3`). A limitation card at the right (44 px) with two slots: "assumption" (amber) and "why it fails here" (violet). On "assumes one smooth hill" the amber slot fills "one smooth hill (one turning point)". On "ride" the violet slot fills "the real ride rises and dips many times", and on the plate the painted track's further dip and rise glow beyond the model's single hill while the model curve dives grey below zero past d = 80, hand tag "one hill only". On "And for the rocket" a second card writes under the first, with the launcher badge: amber "starts at ground level", violet "the rocket leaves the tube above the grass"; on "zero" (last) a tiny inset of the rocket's graph starts at a small height above 0, hand tag "starts above the grass". On "Saying the model might be wrong" a red slip "the model might be wrong" writes and is crossed, caption "name the assumption", with a grey chip "a07: assumption + why it fails".

### 6. memory aid
> Here's the summary. Valid values are what the situation allows, usually between the x-intercepts, and never a negative time, length or price. And a limitation names the assumption, then says why it fails **here**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the patch graph with its blue and teal bands and the red (12, −24) crossed. Main line, hand font 56 px: "Valid: what the situation allows. Limitation: the assumption, then why it fails here." On "here" the key line, 40 px: "Usually between the x-intercepts. Never a negative time, length or price." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A rugby ball is kicked from the ground. Its height, h metres after t seconds, is modelled by h equals minus five t squared, plus fifteen t, and its graph meets the t-axis at zero and three. State the values of t for which the model is valid, and explain why. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A rugby ball is kicked from the ground. The graph shows its height h metres after t seconds, modelled by h = −5t² + 15t. The graph meets the t-axis at t = 0 and t = 3. State the values of t for which the model is valid, and explain why." Picture slot: the whole parabola (t −1 to 4, h −10 to 12), including the parts below the axis, unshaded. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The model is valid from t equals zero to t equals **three**. Before the kick and after the ball lands, the model gives negative heights, which are impossible. And the heights only go from zero up to eleven point two five **metres**. Writing all values of t is the slip. The ball is only in the air for those three seconds.

Visual: the card shrinks to the top (30 px). On "three" the band 0 ≤ t ≤ 3 shades pale blue, the parts outside turn grey dashed; framed answer (green): "0 ≤ t ≤ 3: before 0 and after 3 the heights would be negative". On "metres" the band 0 ≤ h ≤ 11.25 shades pale teal, the vertex (1.5, 11.25) ringing amber. On "the slip" a red slip "all values of t" writes and is crossed, caption "only while it's in the air". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A school musical's ticket takings, T dollars, for a ticket price of p dollars, are modelled by T equals minus twenty p squared, plus twelve hundred p. The graph crosses the p-axis at zero and sixty. Explain why the model is not valid for a price of seventy dollars. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A school musical's committee models the total ticket takings T dollars for a ticket price of p dollars as T = −20p² + 1200p. The graph crosses the p-axis at p = 0 and p = 60. Explain why the model is not valid for p = 70." Picture slot: the graph for 0 ≤ p ≤ 60 only (T 0 to 20,000), no point at 70. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> At seventy dollars, the model gives minus fourteen thousand **dollars**. Takings can't be negative, because you can't sell fewer than zero tickets. So prices above sixty dollars are outside the valid **values**. Saying seventy is fine because the formula still gives an answer is the slip. A formula always gives a number, but here the number is impossible.

Visual: the card shrinks to the top. On "dollars" the axes extend to p = 80 and T = −16,000, the curve continuing grey dashed; row (44 px) "T = −20(70)² + 1200(70) = −98,000 + 84,000 = −14,000", the point (70, −14,000) ringing red. On "values" the band 0 ≤ p ≤ 60 shades pale blue; framed answer (green): "T = −$14,000 is impossible, so p = 70 is outside the valid values (0 ≤ p ≤ 60)". On "the slip" a red slip "p = 70 is fine: the formula gives an answer" writes and is crossed, caption "a formula always gives a number". Hold about 1 s.

### 11. handoff
> That finishes quadratics. Next, a different shape. In Year 11, you met direct variation. Double one quantity, and the other doubles too. Now the opposite. A holiday house costs twelve hundred dollars for a weekend, and the friends who go split it evenly. Two friends pay six hundred each. Double the number of friends, and each share halves. What does that graph look **like**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clear. On "direct variation" a small coded strip at the top left (420 × 260 px): a grey straight line through the origin, "Year 11: y = kx, double one, the other doubles". On "A holiday house" the holiday house plate `ms12-holiday-house-v1.png` (900 px wide) arrives with a coded price tag "$1,200 for the weekend". On "Two friends" chip "2 friends: $600 each"; on "Double the number" chips "4 friends: ?" and "double the friends: half each?". On "like" chips "Next: inverse variation" and "?". Hold about 2 s. This is a12's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Valid values: the x and y values the situation allows.
- Write them as intervals: 0 ≤ t ≤ 4 and 0 ≤ h ≤ 20.
- Usually between the x-intercepts; never a negative time, length or price.
- Limitation: name the assumption, then say why it fails here.
- A parabola has one turning point; a real shape may have more.

Memory aid (framed card, right side, as in scene 6): *Valid: what the situation allows. Limitation: the assumption, then why it fails here.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and a12's opening frame.

## Teaching checks

- **Does it explain causes?** Why the model stops at t = 4: the rocket has landed (2). Why h stops at 20: the vertex is the highest the rocket goes (2). Why w = 12 is invalid: the length would be negative, so the area is impossible (3). Why the profit model runs past break-even and below zero: the factory can make those amounts, and a loss is real (4). Why a limitation needs the assumption: the model fails exactly where its assumption fails (5). Why one hill: a parabola has one turning point (5).
- **Misconceptions addressed:** valid values from the whole parabola (3 crossed, A1 crossed); valid values always between the intercepts and always positive (4); "the model might be wrong" (5 crossed); trusting a formula outside its values (A2 crossed); forgetting valid y-values (2, 3, feedback 1).
- **Visual standard, item by item:** 1 the rocket from the first frame (a11a's), the barrow and patch in 3, the stall badge in 4, the coaster in 5, the holiday house in 11; 2 a new stage every 40 to 60 s; 3 the valid-window shading, the width slider that cannot draw past 10, the car riding the model against the real track; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3 with a framed answer and crossed slip; 8 framed card and five bullets; 9 the patch collapsing and failing to draw while the equation prints −24.
- **One idea at a time:** valid values (2), the impossible value (3), valid values set by the situation, not the intercepts (4), limitations (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 27 s (speech plus hold).
- **Avoided double teaching:** a11a's meanings and a10's midpoint are used, not re-taught; a07's two-part limitation is a grey chip.
- **Syllabus coverage:** `ci88f43c88`: valid values of x and y (2, 3, 4, A1, A2; key notes 1 to 3); limitations in context (5; key notes 4, 5).
- **Out of scope by design:** building a quadratic model; reciprocal models (a12, a13).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 (d), original, HSC style, 2 marks suggested, not an official marking scheme).** "A rugby ball is kicked from the ground. The graph shows its height h metres after t seconds, modelled by h = −5t² + 15t. The graph meets the t-axis at t = 0 and t = 3. State the values of t for which the model is valid, and explain why."
Model answer: 0 ≤ t ≤ 3. Before the kick and after the ball lands, the model gives negative heights, which are impossible (the heights run from 0 to 11.25 m). Classic mistake (crossed): "all values of t".

**Attempt 2 (scene 9; pack question 2 (c), original, HSC style, 2 marks suggested).** "A school musical's committee models the total ticket takings T dollars for a ticket price of p dollars as T = −20p² + 1200p. The graph crosses the p-axis at p = 0 and p = 60. Explain why the model is not valid for p = 70."
Model answer: T(70) = −20(4,900) + 1200(70) = −$14,000. Negative takings are impossible, so prices above $60 are outside the model's valid values (0 ≤ p ≤ 60). Classic mistake (crossed): "p = 70 is fine: the formula gives an answer".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rocket | h(5) = h(−1) = −25; valid 0 ≤ t ≤ 4, 0 ≤ h ≤ 20 | 1, 2, 10 |
| Patch | L = 10 − w; A = w(10 − w); zeros 0, 10; A(5) = 25; A(12) = −24 (L = −2); valid 0 ≤ w ≤ 10, 0 ≤ A ≤ 25 | 3, 6 |
| Profit (a11a, site `we-2`) | P(0) = −32; vertex (5, 18); break-even 8; assumed limit n = 10 (1,000 items); valid 0 ≤ n ≤ 10, −32 ≤ P ≤ 18 | 4 |
| Site `we-3` | h = −0.02d² + 1.6d; zeros 0, 80; vertex (40, 32) | 5 |
| A1 | valid 0 ≤ t ≤ 3; heights 0 to 11.25 m | 7, 8 |
| A2 | T(70) = −98,000 + 84,000 = −14,000; valid 0 ≤ p ≤ 60 | 9, 10 |
| Handoff | $1,200; 2 friends $600 each | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py`, run with `python -I`); Codex to re-check.

- −5t² + 20t at t = 5 and t = −1: −25; maximum 20 at t = 2.
- w(10 − w) = 10w − w²: zeros 0, 10; 25 at w = 5; 16 at w = 2 and 8; −24 at w = 12.
- −2n² + 20n − 32: −32 at n = 0; 18 at n = 5; −32 at n = 10 (so the least value on 0 ≤ n ≤ 10 is −32).
- −0.02d² + 1.6d: zeros 0, 80; 32 at d = 40.
- −5t² + 15t: zeros 0, 3; maximum 11.25 at 1.5.
- −20p² + 1200p at p = 70: −14,000; zeros 0, 60.
- 1,200 ÷ 2 = 600.

## Memory aid check

- **"Valid: what the situation allows. Limitation: the assumption, then why it fails here."** with the key line "Usually between the x-intercepts. Never a negative time, length or price." The limitation half is a07's pack advice ("assumption, and why it fails here") applied to quadratics; the valid half is original. Meaning, as said in scene 6: valid values are the inputs and outputs the real situation can have; a limitation states what the model assumes and why that is false in this context. Assumptions checked: "usually between the x-intercepts" is not always true (a model that opens upward, like a11a's fuel use, never meets the x-axis; scene 4's profit model is valid past break-even), so the key line says "usually"; "never negative" applies to times, lengths, areas and prices, not to every quantity (scene 4: a profit can be negative). It helps a new case: a bridge-arch model is valid only between its feet, and it assumes a perfect parabola. Introduced after scenes 2 to 5.
- **Considered, not used:** "Real, not just right" (catchy, but vague about what to write).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `s12/count.py`): 5,223 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the shading, the patch slider, the car's ride) and the 45 s notes scene: about 482 s. Characters per scene (1 to 12): 465, 645, 766, 627, 812, 209, 291, 314, 297, 349, 373, 75. Speech before the notes is about 387 s, under the 570 s cap. Feedback speech plus hold: about 25 s and 27 s.

Reserve trims if the voiced take runs long: scene 1's "It can't be underground, and it can't fly before it's launched." (the chips carry it); scene 4's last two sentences (keep the crossed slip).

## Scene list and build ids

Lesson key `m-s12a11b` (route math-s12-a11, part b). Explainer folder `src/explainer/lessons/math-s12-a11b`; build inputs in `docs/production/claude-pm/lessons/math-s12-a11b/` (at voicing).

In order (12 scene headings): hook-underground, valid-values, worked-patch, not-always-intercepts, limitations, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | a11a's frame: the rocket underground |
| 35 to 90 s | 2 | Valid-window shading on the rocket's graph |
| 90 to 160 s | 3 | g01 board: the patch and its width slider |
| 160 to 210 s | 4 | The profit graph: valid values past the intercepts, a real loss |
| 210 to 275 s | 5 | Limitation card, the coaster against its model, the rocket's launch |
| 275 to 290 s | 6 | Framed memory card |
| 290 to 375 s | 7 to 10 | Question cards and countdowns, then feedback |
| 375 to 405 s | 11 | The holiday house frame for a12 |
| 405 to 450 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a11a's last frame continues into 1; 1 to 2 camera continue; 2 to 3 clear change to the board; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a11b-learning-review.md`, `science_check` = `checks/m-s12-a11b-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only, viewed on the paper background): `ma11-garden-barrow-v1.png` (green wheelbarrow with lavender, hose and sacks; patch badge); `ma12-coaster-track-v1.png` (steel track with a dip and a tall rise) and `ma12-coaster-car-v1.png` (two-seat car, empty); `ma11-lemonade-stall-v1.png` (a11a's small-business badge, reused in scene 4); `ma11-garden-bed-v1.png` (a triangular raised bed; not used, wrong shape for a rectangle); `ma11-launch-paddock-v1.png` (reused).

Need (painted, new; see the Codex asset brief): `ms12-holiday-house-v1.png` (final frame here; a12's anchor and a13's rounding scene). From a09's brief: `ms12-rocket-launcher-v1.png`, `ms12-foam-rocket-v1.png`.

Coded: every graph and band, the top-view patch, the width slider and readouts, the limitation card, the price tag, the Year 11 strip, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `StudioPlot`, `AxisShadow` and `RegionLabels` (a11-graph-parts.tsx), `StudioDomainStrip` (working-parts.tsx), `ParameterSlider`, `FunctionRider`, `LiveReadoutBoard`, `StudioFencePen` (calc-parts.tsx; as the top-view patch, timber-coloured), `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a11):
1. **Impossible state on `StudioFencePen`** (small prop): when a side length goes negative, draw a red dashed outline that does not close and show the negative length in red. Check: w = 12 shows "L = −2 m" and no filled rectangle.
2. **Plate-behind-model** (small, lesson folder): the coaster car plate rides the coded model curve at the plot's scale, in front of the painted track, without warping the plate.

## Codex asset brief (Maths S12 A11b, a holiday house; also a12 and a13)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the designs are `docs/production/claude-pm/lessons/math-s12-a11b.md` (final frame), `math-s12-a12.md` (anchor) and `math-s12-a13.md` (rounding scene). Paint after the learning reviews and maths checks for a11b and a12 pass and root gives the go-ahead, and before the a11b build. Save to `public/assets/maths/`. **Transparent PNG with a true alpha channel**, clean edges; ink and watercolour in the house style, matched to `maths/ma12-apartment-building-v1.png` and `maths/ma12-travel-suitcase-v1.png`; no text, numbers, signs, logos, people, hands, faces, pets, cars, sky, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-holiday-house-v1.png` (1800 × 1100 px): a small single-storey weatherboard beach holiday house seen from the front at a slight angle: pale blue-grey weatherboards, a white-trimmed veranda with two outdoor chairs (empty) and a small table, a corrugated iron roof, a front door and two windows (curtains drawn, no figures), a few coastal shrubs and a strip of sandy lawn at its base. Friendly and plain; no "for rent" sign or price. Leave clear space above the roof line (about 200 px) for a coded price tag.

Report inspection on the paper background (`#f6f1e7`) at 900 px and 1,400 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-a11b-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the patch model matches a rectangle edged on all four sides (L = 10 − w), so the MS-10 error is not repeated, and that no barn wall appears.
4. Confirm site `we-3`'s numbers are unchanged and its vertex (40, 32) is correct.
5. Confirm every limitation in learner copy names an assumption and why it fails.
6. Confirm both attempts carry every demand and neither card nor picture shades the valid values.
7. Confirm scene 1 opens on a11a's final frame and scene 11 matches a12's opening frame.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and that the plate request has no people or text.

## YouTube metadata (draft)

Title: Quadratic Models: Valid Values and Limitations | Year 12 Maths Standard 2

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson05.sa.html

Keep a foam rocket's height model going past its landing and it says the rocket is 25 metres underground. Equations keep going, but real situations stop. Learn how to find the values of x and y for which a quadratic model is valid, write them as intervals, and spot impossible answers like a negative area for a vegetable patch. Valid values aren't always between the intercepts: a company's loss is real. Then explain a model's limitations the way markers want: name the assumption, then say why it fails here, with a roller coaster that has more than one hill. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
Standard 2 (ci88f43c88): "Explain the limitations of a model of a quadratic relationship in a practical context and consider the values for x and y for which the quadratic model is valid"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Reading a quadratic graph in real problems. Next: Inverse variation and the hyperbola.

#Year12Maths #MathsStandard #QuadraticModels #HSCScience

## Open decisions

- **1. The corrected patch (root, website AI).** The site's paddock (MS-10) is replaced by a 20 m patch edged on all four sides. If the website AI fixes the paddock by keeping the barn wall (A = w(80 − 2w)), the video still teaches a consistent model of its own.
- **2. Interval ends (learning review).** The narration writes 0 ≤ w ≤ 10 as the site does, though at w = 0 or 10 there is no patch. Check that "ends included" does not confuse; the alternative is 0 < w < 10 with a spoken "between".
- **3. The rocket's launch height (learning review).** The ground-level launch is named as a limitation in scene 4 (pack section 8). Check that it does not undo a10's and a11a's numbers in the student's mind.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a11a, a10 and a07; check that −25 m makes "valid values" feel needed, that the patch slider shows why w = 12 is impossible before it is said, that the limitation card's two slots are filled in the narration's order, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
