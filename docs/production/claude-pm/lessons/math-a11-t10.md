# Maths A11 T10: What do the graphs of sin, cos and tan show about their behaviour? The circle unrolled into y = sin x and y = cos x, period and amplitude, domain, range and intercepts in degrees and radians, y = tan x and its asymptotes, and even or odd (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,827 characters by script (see "Narration length estimate"), 13 scene headings, about 535 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixty-seventh video of Year 11 Mathematics Advanced (2024), outline order 67, Trigonometry and measure of angles (Radians). Pre-design pack: `../pre-design/maths-a11/math-a11-t10.md` (brief 243). Site lessons (read through the pack's quotations, read only): `trigonometric-identities-and-equations/lesson05.sa.html` (`we-1`, y = cos x on −2π ≤ x ≤ 2π, with its numbers; card 05's key points; the hook, with correction S11-17), `lesson06.sa.html` (`we-1`, y = tan x on −π ≤ x ≤ π, with its numbers; card 05's key features) and `lesson04.sa.html` (card 02, domains and ranges). Route entry: `math-a11-t10` in `../../programme/maths-a11-route-inputs-4.json`. Visual system: maths studio kit; a reused painted phone and a new painted tuning fork for the anchor, a reused painted torch and a new painted fence for tan; every circle, projector, graph and readout coded.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (music and phones: a pure tone on a tuner app; home: a torch along a fence), Australian spelling, no em dashes, "zero point" decimals, conversational narration, angles always spoken with "degrees" or "radians", "sine", "cosine" and "tangent" spoken in full on first use).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Trigonometry and measure of angles, Radians), quoted from `../../programme/maths-a11-route-inputs-4.json`:

- `cid79268a8`: "Graph y = sin x, y = cos x and y = tan x over domains given in degrees or radians, showing intercepts with the x-axis and y-axis and any asymptotes, determine their domains and ranges, and period and amplitude where appropriate, and whether each is even or odd or neither"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

**Boundary:** starts from t09's final frame exactly (the painted phone `ma12-phone-v1.png` with a coded tuner screen showing a pure tone's wave and the readout "pure tone"; the coded circle of radius 1 with a point turning on it, its height marked by a teal drop line "height = sin θ"; empty axes beside it labelled "angle" and "height"; chips "plot the height against the angle?", "Next: the graphs of sin, cos and tan" and "?"). Recalls t03 (sin θ = y/r, cos θ = x/r, tan θ = y/x, so on a circle of radius 1 the height is sin θ and the x-coordinate cos θ), t04 (the three negative-angle results), t08 (radians), w21 (vertical asymptotes) and w26 (even and odd functions) in a phrase or grey chip each. Teaches: the sine graph as the circle point's height unrolled, in degrees; the cosine graph from the x-coordinate; period, amplitude, domain, range and intercepts, in radians; reading features over a stated domain (site `we-1`, cos x on −2π ≤ x ≤ 2π); cos even and sin odd from t04's results; y = tan x as y over x, its asymptotes where cos x = 0, period π, range all real y, no amplitude, odd (site `we-1`, tan x on −π ≤ x ≤ π). Stops at the three basic graphs. Not taught: y = a sin(bx) + d and other transformed graphs (Year 12 t01); graphs of sec, cosec and cot (not Year 11); solving equations from graphs (t15a, t15b).

## Decisions

- **Anchor: a pure tone on a phone's tuner app, from a tuning fork (painted plates, live), and a torch shining along a fence for tan (painted plates, live).** A tuning fork's pure tone draws a sine wave on a tuner screen: the wave students already know, and the question "where does that shape come from?" (music and phones; the pack's anchor 1, with correction S11-17: a pure tone, not a piano note, is a sine wave). The answer is the circle: the tuner's wave is redrawn as the circle point's height. For tan, a torch 1 m from a long straight fence: turn the beam x from straight at the fence and the spot moves tan x metres along it, racing away as x nears 90° and never landing at 90° (home; the pack's anchor 3). The torch gives the asymptote a physical meaning. No Year 12 or a11 design uses a tuner or a tuning fork; Year 12 g01 uses a torch beam as a tangent line through the origin (a different idea; plate reuse, see open decision 2).
- **Simulations (standard item 3).**
  1. **Circle to graph** (`CircleToGraph`, new; scenes 1 to 3, 6): a coded point turns on the circle of radius 1 while a dashed projector line carries its height (sin, teal) or its x-coordinate (cos, violet, the circle rotated a quarter turn so the x-coordinate projects across) to a graph that draws in step, with a live readout "θ = …°, sin θ = …" (or cos θ). Negative angles turn clockwise and draw to the left.
  2. **Torch spot** (scene 6): a coded beam from the torch plate sweeps from 0° towards 90°; the spot on the fence slides with a live readout "x = …°, spot = tan x m" (1.73 at 60°, 5.67 at 80°, 57.3 at 89°); at 90° the beam runs parallel and the readout shows "never lands: undefined".
  3. **Symmetry moves** (`StudioSymmetryPairs`; scene 5): cos x folds in the y-axis and lands on itself; sin x turns half a turn about the origin and lands on itself; in scene 6 tan x does the same half-turn.
- **Colour roles (fixed for this video).** The angle x (input) **blue** on every axis and readout; sine values and the sine curve **teal** (outputs, as the strand's outputs); cosine values and the cosine curve **violet** (a second output, kept distinct); tan values and the tan curve **amber**; asymptotes and the midline dashed grey; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As e08 (current lines and readouts 52 px, strips 44 px, nothing below 26 px, all text above y = 950). Hand tags: "height = sin θ", "x-coordinate = cos θ", "repeats every turn", "can't leave the circle", "starts at the top", "one repeat", "middle to top", "keep the negatives", "mirror: even", "half-turn: odd", "bottom → 0", "never lands", "repeats every π", "no amplitude".
- **Stage changes (standard item 2).** The tuner and the circle (1); the circle unrolling into sine (2); cosine from the x-coordinate (3); both graphs relabelled in radians with feature marks (4); g01 board beside cos x, then the symmetry moves (5); the torch and fence, then the tan graph (6); framed card (7); question cards (8 to 11); the triangle and flip cards for t11 (12); key notes (13).
- **Worked examples (g01 layout).** 5: site lesson05 `we-1`: y = cos x on −2π ≤ x ≤ 2π, x-intercepts −3π/2, −π/2, π/2, 3π/2; even; cos(−π/3) = ½. 6: site lesson06 `we-1`: y = tan x on −π ≤ x ≤ π, asymptotes ±π/2, intercepts −π, 0, π; odd; tan(−π/3) = −√3. Crossed slips: "sin x starts at 1" (3), "sin is even" (5), "period of tan = 2π" (6).
- **Degrees and radians (syllabus wording, pack decision).** Scenes 2 and 3 draw the graphs on a degree axis (0° to 360°, with −360° to 720° as they extend); scene 4 relabels the same axis in radians (π/2 = 90°, π = 180°, 2π = 360°) and says both; scenes 5 and 6 use radian domains (the site's); attempt 1 uses a degree domain and attempt 2 a radian domain. Every graph is shown in radians at least once (Year 12 needs this).
- **Memory aid.** Framed card: "Sine starts in the middle, cosine starts at the top: both repeat every 2π. Tan repeats every π, with walls where cos x = 0." Second line: "Cos: mirror, even. Sin and tan: half-turn, odd."
- **Visual surprise.** The tuner's wave and the circle's unrolled height are the same curve: the coded tuner trace slides off the phone and lands exactly on the graph that the circle draws. In scene 6 the torch's spot races off along the fence as the beam nears 90°.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 7).** S11-17 applied: the hook says a pure tone (a tuning fork's), never a piano note, is a sine wave; no frequency is stated. lesson05's y = a sin(bx) + d (cards 02, 06 to 09) is Year 12 and is not used; lesson06's cotangent graph is not used.
- **Plain meanings at first use.** Period ("the length of one repeat"); amplitude ("how far the wave reaches above or below its middle line"); domain and range (recalled from w09 as "the x-values allowed" and "the y-values reached"); asymptote (recalled from w21: "a line the curve gets closer to without reaching"); even and odd (recalled from w26 as a mirror in the y-axis and a half-turn about the origin).
- **Attempts (pack questions).** A1: sketch y = cos x for −180° ≤ x ≤ 360° (degrees), with intercepts, range, period, amplitude, even or odd; crossed "starts at (0, 0)". A2: y = tan x for −2π ≤ x ≤ π (radians): asymptotes, intercepts, period, range, even or odd; crossed "period 2π".
- **Mistake scene:** none separate. Starting sin at 1 or cos at 0 (3 crossed, A1 crossed); dropping negative intercepts (5 tag "keep the negatives"); calling sin even (5 crossed); tan branches touching or joined across an asymptote (6 tag "never lands"); period of tan as 2π (6 crossed, A2 crossed); an amplitude for tan (6 tag "no amplitude"); mixing degree and radian labels on one axis (4: the relabel replaces every label at once).
- **Cause chain taught, in order:** (1) on a circle of radius 1 the point's height is sin θ, so plotting height against angle gives the sine graph (1, 2); (2) the point retraces its path every full turn, so the graph repeats, and its height cannot leave −1 to 1 (2); (3) the x-coordinate is cos θ, so cosine is the same wave starting at the top (3); (4) so period 2π, amplitude 1, domain all real x and range −1 ≤ y ≤ 1; intercepts where the height or x-coordinate is 0 (4, 5); (5) cos(−θ) = cos θ makes a mirror image in the y-axis (even), sin(−θ) = −sin θ a half-turn (odd) (5); (6) tan is y over x, so it is 0 where y = 0 and undefined where x = 0, which makes the asymptotes; it repeats every half turn because the point opposite has both coordinates negated and the same y over x (6).
- **Entry knowledge (route):** t03 (sin, cos and tan from (x, y) on a circle; multiples of 90°); t04 (cos(−θ) = cos θ, sin(−θ) = −sin θ, tan(−θ) = −tan θ); t08 (radians, exact values at multiples of π/6 and π/4); w26 (even and odd functions); w21 (vertical asymptotes).
- **What Year 12 relies on.** Year 12 t01, t02 and d05 cite `cid79268a8` as entry knowledge: "the graphs of sin, cos and tan in radians with intercepts, asymptotes, domains, ranges, period and amplitude", symmetry of the sine, cosine and tan graphs, and "this is the graph of sin x slid left by π/2" (d05). Scenes 4 to 6 show all three graphs on radian axes with those features named, scene 3 says cosine is "the same wave, just starting at the top" (d05's slide), and scene 5 shows the symmetries.
- **Handoff (to math-a11-t11, "What are sec, cosec and cot in a right-angled triangle?").** Scene 12, as the t11 pack's start: the tan graph racing up towards its asymptote at 90° (amber, dashed wall), beside a coded right-angled triangle whose adjacent side shrinks as the angle grows (chip "adjacent → 0"), with three side-ratio cards "opp/hyp", "adj/hyp", "opp/adj" and the chip "flip them?"; chips "Next: secant, cosecant and cotangent" and "?". This is t11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) On the circle of radius 1: (cos θ, sin θ); sin at 0°, 90°, 180°, 270°, 360°: 0, 1, 0, −1, 0; cos: 1, 0, −1, 0, 1.
  (b) Torch 1 m from the fence: spot = tan x m; tan 45° = 1, tan 60° = 1.732, tan 80° = 5.671, tan 89° = 57.29. For −90° < x < 0 the spot moves the other way (negative), used once in scene 6's odd check.
  (c) lesson05 `we-1`: cos x = 0 on [−2π, 2π] at ±π/2, ±3π/2; period 2π, amplitude 1; cos(−π/3) = ½. lesson06 `we-1`: asymptotes ±π/2; intercepts −π, 0, π; tan(−π/3) = −√3.
  (d) tan(x + π) = tan x because (x, y) → (−x, −y) on the opposite side of the circle.
  (e) Pronunciations: "y equals sine x", "y equals cosine x", "y equals tan x" ("tan" as in "tangent", said in full first); "pi over two radians"; "minus three pi over two"; "root three".
  (f) Windows: scenes 2, 3 degree axis −360° to 720° (shown first 0° to 360°, then extending), y −1.5 to 1.5; scene 4 the same axis relabelled −2π to 4π; scene 5 −2π to 2π; scene 6 −π to π, then −3π/2 to 3π/2 (y −4 to 4, branches clipped).
  (g) The tuner trace is decorative in shape only; its time axis is not the angle axis, which the narration never claims.

Main question: *What do the graphs of sine, cosine and tangent show about how they behave? Where does a pure tone's wave shape come from?*
Entry knowledge (t03, t04, t08, w21, w26): sin, cos and tan from a point on a circle; negative angles; radians; asymptotes; even and odd.
Stops after: the graphs of y = sin x, y = cos x and y = tan x in degrees and radians with intercepts, asymptotes, domains, ranges, periods, amplitudes and symmetry. No transformations, no reciprocal graphs, no equations.
Handoff: math-a11-t11: "tan races off as the adjacent side shrinks to nothing. Every ratio so far has a side on the bottom: what if we flip them?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): angle blue; sine teal; cosine violet; tan amber; asymptotes and midline dashed grey; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · TRIGONOMETRY AND MEASURE OF ANGLES". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: where does the wave come from?
> Here's a phone's tuner app, listening to a tuning fork. A pure tone like this makes a wave that rises and falls in exactly the same way, again and again. Where does that shape come from? It comes from a point going round a circle. Take a circle of radius one, so the point's height is sine of the angle, and its x-coordinate is cosine of the **angle**. Turn the point, and plot its height against the angle it has turned. The tuner's wave lands right on **it**. So what do the graphs of sine, cosine and tangent show about how they behave?

Visual: opens on t09's final frame exactly (the phone plate `ma12-phone-v1.png` at 520 px, left, with a coded tuner screen showing a teal pure-tone wave and "pure tone"; the coded circle of radius 1 at the centre with its turning point and teal drop line "height = sin θ"; empty axes at the right labelled "angle" and "height"; chips "plot the height against the angle?", "Next: the graphs of sin, cos and tan", "?"). On "tuning fork" the "Next" chips fade and the tuning fork plate `ma11-tuning-fork-v1.png` (300 px) appears beside the phone. On "angle" grey chip "t03: on radius 1, (x, y) = (cos θ, sin θ)", hand tags "height = sin θ" and "x-coordinate = cos θ". On "Turn the point" the point turns once (`CircleToGraph`) and the graph draws one wave. On "it" the tuner's trace slides off the phone screen and lands exactly on the drawn wave (visual surprise). Heading "Graphs of sin, cos and tan"; the question chip "What do the graphs show?" moves to the top right.

### 2. sine: the height, unrolled
> Let's draw it carefully, in degrees. At zero degrees the point sits on the x-axis, so its height is **zero**. As it turns to ninety degrees, it rises to the top of the circle, height **one**. At a hundred and eighty degrees it's back to zero. At two hundred and seventy degrees it's at the bottom, minus **one**. And at three hundred and sixty degrees it's home again, at zero. Keep turning, and the point retraces the same path, so the graph repeats the same **wave**. Turn the other way, through negative angles, and the wave carries on to the left. And the graph never goes above one or below minus one, because the point can't leave the **circle**.

Visual: stage change: the circle (radius 1, 420 px) at the left, the graph (1,100 × 560 px, degree axis 0° to 360°, y −1.5 to 1.5) at the right, joined by the dashed projector; the phone and fork shrink to a 200 px badge at the top left. `LiveReadoutBoard` above the graph, 52 px: "θ = …°" (blue), "sin θ = …" (teal). On "zero", "one", "minus one" the point pauses and the graph's point rings: (0°, 0), (90°, 1), (270°, −1), with (180°, 0) and (360°, 0) ringing as passed. On "wave" the point goes round again and the axis extends to 720°, hand tag "repeats every turn". On "negative angles" the point turns clockwise and the wave draws left to −360°. On "circle" two dashed grey lines y = 1 and y = −1 draw, hand tag "can't leave the circle".

### 3. cosine: the x-coordinate
> Now track the point's x-coordinate instead. That's cosine of the angle. At zero degrees the point is furthest right, so cosine starts at one, at the **top**. At ninety degrees the point is straight above the centre, so cosine is zero. At a hundred and eighty degrees it's furthest left, minus one, then back through zero at two hundred and seventy degrees, to one at three hundred and **sixty**. It's the same wave, just starting at the top instead of in the middle. Starting sine at one, or cosine at zero, is the **slip**.

Visual: clear change: the circle turns a quarter turn on screen so its x-coordinate projects across (a violet drop line "x = cos θ" from the point to the vertical diameter); the sine curve dims to a dashed teal ghost; the cosine curve draws in violet on the same degree axis (0° to 360°, then extending to −360° and 720°). Readout: "cos θ = …" (violet). On "top" the point (0°, 1) rings, hand tag "starts at the top". Points (90°, 0), (180°, −1), (270°, 0), (360°, 1) ring as passed. On "sixty" the teal ghost slides left by 90° onto the violet curve and back (a 1.5 s demonstration), hand tag "same wave". On "slip" a red slip "sin x starts at (0, 1)" writes and is crossed, caption "sin 0 = 0".

### 4. period, amplitude, domain and range
> Here are both graphs again, with the angle in radians. Ninety degrees is pi over two radians, a hundred and eighty degrees is pi, and a full turn is two pi. Each wave repeats every full turn, so the period, the length of one repeat, is two pi radians, or three hundred and sixty **degrees**. The amplitude is how far the wave reaches above or below its middle line, here the x-axis, so it's **one**. The domain is all real x, since every angle has a point on the circle, and the range is minus one to one. Sine crosses the x-axis at every multiple of pi, and cuts the y-axis at zero. Cosine crosses at the odd multiples of pi over two, and cuts the y-axis at **one**.

Visual: stage change: two stacked graphs, full width (1,600 × 380 px each), sine (teal) above, cosine (violet) below, on one shared x-axis from −2π to 4π. On "radians" every degree label is replaced at once by its radian label (π/2, π, 3π/2, 2π, …; `piTicks`), with a grey strip "90° = π/2, 180° = π, 360° = 2π". On "degrees" a period bracket spans 0 to 2π on each (`StudioFeatureMarks`), label "period 2π (360°)", hand tag "one repeat". On "one" an amplitude bar from the dashed midline y = 0 to the crest, label "amplitude 1", hand tag "middle to top". Feature card at the right, 44 px: "domain: all real x"; "range: −1 ≤ y ≤ 1". Sine's x-intercepts ring teal (−2π, −π, 0, π, 2π, 3π, 4π) with "x = kπ" and "y-intercept 0"; on "one" (last) cosine's ring violet (±π/2, 3π/2, …) with "x = π/2 + kπ" and "y-intercept 1"; grey chip "k: any integer".

### 5. worked example: cosine, and symmetry
> Let's read features over a stated domain. For y equals cosine x, from minus two pi to two pi radians, find the x-intercepts. Cosine is zero at the top and bottom of the circle, the odd multiples of pi over two. In this domain that's minus three pi over two, minus pi over two, pi over two and three pi over two **radians**. Keep the negative ones. Now the symmetry. Earlier, we found cosine of minus theta equals cosine theta. So the left half of the graph is the mirror image of the right half, in the y-axis. That makes cosine an even **function**, and cosine of minus pi over three is just cosine of pi over three, a **half**. Sine of minus theta is minus sine theta, so the sine graph turned half a turn about the origin lands on itself. Sine is odd. It can look balanced, but calling sine even is the **slip**.

Visual: clear change to the g01 board at the left (980 px) with y = cos x at the right (800 × 500 px, −2π ≤ x ≤ 2π). Task strip, 44 px: "y = cos x, −2π ≤ x ≤ 2π: find the x-intercepts; even, odd or neither? Find cos(−π/3)." Givens card: "cos x = 0 at the top and bottom of the circle". Rows, current 52 px, earlier 32 px dimmed: "x = π/2 + kπ"; on "radians" "x = −3π/2, −π/2, π/2, 3π/2" (green frame), the four points ringing, hand tag "keep the negatives". On "symmetry" grey chip "t04: cos(−θ) = cos θ"; the right half of the graph folds in the y-axis and lands on the left half (`StudioSymmetryPairs`, even mode), hand tag "mirror: even". On "function" row "cos is even"; on "half" "cos(−π/3) = cos(π/3) = ½" (green frame). A small sine graph replaces the cosine graph: grey chip "t04: sin(−θ) = −sin θ"; it turns half a turn about the origin and lands on itself (odd mode), hand tag "half-turn: odd". On "slip" a red slip "sin x is even" writes and is crossed, caption "sin(−x) = −sin x".

### 6. tangent and its asymptotes
> Now tangent. On the circle, tan is y over x, the height over the x-coordinate. Here's a torch, one metre from a long fence. Turn the beam through an angle x from straight on, and the spot slides along by tan x metres. At zero, it's zero. At forty-five degrees, it's one metre. Near ninety degrees, the spot races away, because the bottom of y over x shrinks towards **zero**. At ninety degrees the beam runs parallel to the fence and never lands, so tan ninety degrees is undefined. On the graph that's an asymptote, x equals pi over two radians, a line the curve gets closer to without **reaching**. Past it, a new branch climbs from far below. Tan repeats every pi radians, half a turn, because the point opposite has the same y over x. Its range is all real y, so it has no amplitude, and tan of minus x is minus tan x, so it's odd. Giving tan a period of two pi is the **slip**.

Visual: stage change: the torch plate `physics/phys-y11-torch-v1.png` (300 px) at the left, aimed at the fence plate `ma11-fence-long-top-v1.png` (top view, a long straight fence running up the frame, 1,000 px tall); a coded dashed line "1 m" from the torch to the fence. The beam sweeps (blue angle arc "x"); the spot slides with readout, 52 px: "x = …°", "spot = tan x m" (amber): 0 at 0°, 1 at 45°, 1.73 at 60°, 5.67 at 80°, 57.3 at 89° (the spot leaves the top of the frame, an arrow and the number continue). On "zero" a small circle inset shows the x-coordinate shrinking, hand tag "bottom → 0". At 90° the beam runs parallel, readout "never lands: undefined", hand tag "never lands". Clear change on "reaching": the graph y = tan x (amber, 1,200 × 700 px, −π to π, y −4 to 4) draws with dashed grey asymptotes x = ±π/2 labelled; the branch rises towards x = π/2 without touching. Rows at the right, 44 px (site lesson06 `we-1`, −π ≤ x ≤ π): "asymptotes x = −π/2, π/2 (cos x = 0)"; "x-intercepts −π, 0, π (sin x = 0)"; "period π (180°)", hand tag "repeats every π"; "range: all real y", hand tag "no amplitude"; "odd: tan(−π/3) = −√3" (green frame) as the graph turns half a turn about the origin onto itself. On "slip" a red slip "period of tan = 2π" writes and is crossed, caption "half a turn: π".

### 7. memory aid
> Here's the summary. Sine starts in the middle, cosine starts at the top, and both repeat every two pi. Tan repeats every pi, with walls wherever cosine is zero. Cosine is a mirror, so it's even, and sine and tan turn about the origin, so they're **odd**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the three graphs small, one under another, each with its period bracket. Main line, hand font 56 px: "Sine starts in the middle, cosine starts at the top: both repeat every 2π. Tan repeats every π, with walls where cos x = 0." On "odd" the key line, 40 px: "Cos: mirror, even. Sin and tan: half-turn, odd." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Sketch y equals cosine x, for x from minus a hundred and eighty degrees to three hundred and sixty degrees. Show where it meets both axes, and state the range, the period and the amplitude. Is it even, odd or neither? Give a reason. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Sketch y = cos x for −180° ≤ x ≤ 360°. Show the intercepts with both axes, and state the range, the period and the amplitude. Is y = cos x even, odd or neither? Give a reason." The full question stays on screen. Picture slot: empty axes, x from −180° to 360° in 90° steps, y from −1.5 to 1.5. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> It crosses the x-axis at minus ninety, ninety and two hundred and seventy **degrees**, and meets the y-axis at zero, one. The range is minus one to one, the period is three hundred and sixty degrees, and the amplitude is **one**. It's even, because cosine of minus x equals cosine x, so the graph mirrors in the y-axis. Starting at the origin is the slip. Cosine starts at the **top**.

Visual: the card shrinks to the top (30 px). The curve draws in violet on the attempt axes; on "degrees" the points −90°, 90°, 270° ring green; (0, 1) rings. Rows, 44 px: "x-intercepts −90°, 90°, 270°; y-intercept (0, 1)"; on "one" "range −1 ≤ y ≤ 1; period 360°; amplitude 1" (green frame); "even: cos(−x) = cos x". On "top" a red slip "starts at (0, 0)" writes and is crossed, caption "cos 0° = 1". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For y equals tan x, with x from minus two pi to pi radians, state the equations of the asymptotes, the x-intercepts, the period and the range. Is it even, odd or neither? Pause here to answer.

Visual: `QuestionCard`, 40 px: "For y = tan x with −2π ≤ x ≤ π, state the equations of the asymptotes, the x-intercepts, the period and the range. Is y = tan x even, odd or neither?" Picture slot: empty axes, x from −2π to π with ticks every π/2, y from −4 to 4, no asymptotes drawn. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The asymptotes are where cosine is zero: x equals minus three pi over two, minus pi over two, and pi over **two**. The x-intercepts are minus two pi, minus pi, zero and **pi**. The period is pi, the range is all real y, and it's odd, because tan of minus x is minus tan x. A period of two pi is the slip.

Visual: the card shrinks to the top. The three asymptotes draw dashed grey with labels; on "two" the branches draw in amber. On "pi" the intercepts −2π, −π, 0, π ring green. Rows, 44 px: "asymptotes x = −3π/2, −π/2, π/2"; "x-intercepts −2π, −π, 0, π"; "period π; range all real y; odd" (green frame). On "slip" a red slip "period 2π" writes and is crossed, caption "tan repeats every π". Hold about 1 s.

### 12. handoff
> Notice why tan shoots off near ninety degrees. In a right-angled triangle, tan is opposite over adjacent, and as the angle grows towards ninety degrees, the adjacent side shrinks to nothing. So far, every ratio is one side over another: opposite over hypotenuse, adjacent over hypotenuse, opposite over adjacent. What happens if we flip them upside down? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame: at the left, the tan graph from 0 to just short of 90° (amber) racing up beside its dashed asymptote at 90°; at the right, a coded right-angled triangle (hypotenuse fixed, angle θ in blue growing towards 90°) whose adjacent side (violet) shrinks, chip "adjacent → 0". On "every ratio" three side-ratio cards write beneath, 44 px: "opp/hyp", "adj/hyp", "opp/adj". On "flip" chip "flip them?". On "next" chips "Next: secant, cosecant and cotangent" and "?". Hold about 2 s. This is t11's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = sin x starts at (0, 0); y = cos x starts at (0, 1).
- sin and cos: period 2π (360°), amplitude 1, range −1 ≤ y ≤ 1.
- y = tan x: period π (180°), asymptotes x = π/2 + kπ, range all real y.
- cos is even (mirror in the y-axis); sin and tan are odd (half-turn).
- sin x = 0 and tan x = 0 at x = kπ; cos x = 0 at x = π/2 + kπ.

Memory aid (framed card, right side, as in scene 7): *Sine starts in the middle, cosine starts at the top. Tan repeats every π, with walls where cos x = 0.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and t11's opening frame.

## Teaching checks

- **Does it explain causes?** Why the wave shape: it is the circle point's height (1, 2). Why it repeats: the point retraces its path every turn (2). Why the range is −1 to 1: the point cannot leave the circle (2). Why cosine starts at 1: the point starts furthest right (3). Why even or odd: t04's negative-angle results (5). Why tan has asymptotes: its bottom, the x-coordinate, is 0 there (6). Why tan's period is π: the opposite point has the same y over x (6).
- **Misconceptions addressed:** sin starting at 1 or cos at 0 (3 crossed, A1 crossed); negative intercepts dropped (5); sin called even (5 crossed); tan branches touching or joined (6); tan's period 2π (6 crossed, A2 crossed); an amplitude for tan (6); mixed degree and radian labels (4).
- **Visual standard, item by item:** 1 the tuner and fork from the first frame (t09's frame), the torch and fence in 6; 2 a new stage every 30 to 60 s; 3 the circle-to-graph projector, the torch spot with readouts, the symmetry moves; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 5 and 6 (a graph-reading lesson: feature rows beside the curve); 8 framed card and five bullets; 9 the tuner's wave landing on the unrolled height.
- **One idea at a time:** sine from the height (2), cosine from the x-coordinate (3), features in radians (4), reading a domain and symmetry (5), tan (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 22 s.
- **Avoided double teaching:** t03's definitions, t04's negative angles, t08's radians, w21's asymptotes and w26's even and odd are recalled in a phrase or grey chip.
- **Syllabus coverage:** `cid79268a8` (2 to 6, A1, A2; key notes 1 to 5): degrees (2, 3, A1) and radians (4 to 6, A2); intercepts with both axes (4 to 6); asymptotes (6); domains and ranges (4, 6); period and amplitude where appropriate (4, 6: tan has none); even or odd (5, 6).
- **Out of scope by design:** transformed graphs (Year 12 t01); reciprocal graphs (not Year 11); solving from graphs (t15a, t15b).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Sketch y = cos x for −180° ≤ x ≤ 360°. Show the intercepts with both axes, and state the range, the period and the amplitude. Is y = cos x even, odd or neither? Give a reason."
Model answer: x-intercepts −90°, 90°, 270°; y-intercept (0, 1); range −1 ≤ y ≤ 1; period 360°; amplitude 1. Even, because cos(−x) = cos x: the graph is symmetric about the y-axis. Classic mistake (crossed): "starts at (0, 0)".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "For y = tan x with −2π ≤ x ≤ π, state the equations of the asymptotes, the x-intercepts, the period and the range. Is y = tan x even, odd or neither?"
Model answer: asymptotes x = −3π/2, −π/2, π/2; x-intercepts −2π, −π, 0, π; period π; range all real y. Odd, because tan(−x) = −tan x. Classic mistake (crossed): "period 2π".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sine key points | (0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0) | 2 |
| Cosine key points | (0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1) | 3 |
| Conversions | 90° = π/2, 180° = π, 360° = 2π | 4 |
| Features | period 2π, amplitude 1, range −1 ≤ y ≤ 1; sin x = 0 at kπ; cos x = 0 at π/2 + kπ | 4 |
| lesson05 `we-1` | x = −3π/2, −π/2, π/2, 3π/2; cos(−π/3) = ½ | 5 |
| Torch | tan 45° = 1; tan 60° ≈ 1.73; tan 80° ≈ 5.67; tan 89° ≈ 57.3 | 6 |
| lesson06 `we-1` | asymptotes ±π/2; intercepts −π, 0, π; period π; tan(−π/3) = −√3 | 6 |
| A1 | −90°, 90°, 270°; (0, 1); range −1 to 1; period 360°; amplitude 1; even | 8, 9 |
| A2 | asymptotes −3π/2, −π/2, π/2; intercepts −2π, −π, 0, π; period π; odd | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `t/verify.py`); Codex to re-check.

- sin at 0°, 90°, 180°, 270°, 360°: 0, 1, 0, −1, 0. cos: 1, 0, −1, 0, 1.
- cos x = 0 on [−2π, 2π]: −3π/2, −π/2, π/2, 3π/2. cos(−π/3) = 1/2.
- tan 45° = 1; tan 60° = 1.7321; tan 80° = 5.6713; tan 89° = 57.290.
- tan x on [−π, π]: asymptotes ±π/2; zeros −π, 0, π; tan(−π/3) = −√3. tan(x + π) = tan x.
- cos x on [−180°, 360°]: zeros −90°, 90°, 270°; cos 0 = 1.
- tan x on [−2π, π]: asymptotes −3π/2, −π/2, π/2; zeros −2π, −π, 0, π.

## Memory aid check

- **"Sine starts in the middle, cosine starts at the top: both repeat every 2π. Tan repeats every π, with walls where cos x = 0."** Original. Meaning, as said in scene 7: y = sin x passes through (0, 0) on its midline, y = cos x through (0, 1) at its top; both have period 2π; y = tan x has period π and vertical asymptotes where cos x = 0. Assumptions checked: "middle" means the midline y = 0 of the basic graph (true only untransformed, which is all Year 11 uses; Year 12 t01 transforms it); "walls" are always shown beside "x = π/2 + kπ"; the second line is t04's results. It helps a new case: y = cos x on 0 ≤ x ≤ 4π starts at 1 and repeats twice; y = tan x on 0 ≤ x ≤ 2π has walls at π/2 and 3π/2.
- **Considered, not used:** "cos is sin shifted" as the aid (true, but shifting is Year 12's language; scene 3 says "the same wave, just starting at the top").

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `t/count.py`): 5,827 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 26 s of settling (the unrolling, the projector turn, the torch sweep, the symmetry moves) and the 45 s notes scene: about 535 s. Characters per scene (1 to 13): 531, 632, 512, 655, 799, 870, 250, 265, 373, 202, 296, 367, 75. Speech before the notes is about 432 s, under the 570 s cap. Feedback speech: about 28 s and 22 s.

Reserve trims if the voiced take runs long: scene 2's "Turn the other way" sentence (keep the left-drawing wave); scene 6's "Past it, a new branch climbs from far below" (keep the branch); feedback 1's "Starting at the origin is the slip" pair becomes "Cosine starts at the top, not the origin" if it measures over 30 s.

## Scene list and build ids

Lesson key `m-a11t10` (route math-a11-t10). Explainer folder `src/explainer/lessons/math-a11-t10`; build inputs in `docs/production/claude-pm/lessons/math-a11-t10/` (at voicing).

In order (13 scene headings): hook-tuner-circle, sine-unrolled, cosine-x-coordinate, features-radians, example-cos-symmetry, tangent-asymptotes, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | The tuner, the fork and the circle |
| 45 to 102 s | 2 | The circle unrolling into sine |
| 102 to 145 s | 3 | Cosine from the x-coordinate |
| 145 to 202 s | 4 | Both graphs in radians with feature marks |
| 202 to 265 s | 5 | g01 board: cos x over a domain; symmetry |
| 265 to 340 s | 6 | The torch and fence; the tan graph |
| 340 to 360 s | 7 | Framed memory card |
| 360 to 460 s | 8 to 11 | Question cards and countdowns, then feedback |
| 460 to 492 s | 12 | Tan beside the shrinking triangle, ratio cards (t11's frame) |
| 492 to 537 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: t09's last frame continues into 1; 1 to 2 stage change (the circle and graph enlarge); 2 to 3 clear change (quarter turn of the circle); 3 to 4 stage change; 4 to 5 clear change to the board; 5 to 6 stage change to the torch; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-t10-learning-review.md`, `science_check` = `checks/m-a11-t10-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets`, file list and a look at `maths/ma12-phone-v1.png`): `ma12-phone-v1.png` is a plain phone, portrait, screen blank and dark, so a coded tuner screen fits inside it. `physics/phys-y11-torch-v1.png` exists (reused in Year 12 g01). No tuning fork or fence-from-above plate exists (`biology/y11-dingo-fence-v1.png` is a wire fence seen side-on in a landscape, unsuitable for a top view).

Reused: `ma12-phone-v1.png` (scenes 1, 2 badge; also t09's handoff), `physics/phys-y11-torch-v1.png` (scene 6).

Reused (briefed in t09, which shows it first): `ma11-tuning-fork-v1.png` (t09's handoff and this video's scene 1).

Need (painted, new; see the Codex asset brief): `ma11-fence-long-top-v1.png` (scene 6).

Coded: the tuner screen and trace, the circle, projector, graphs, feature marks, symmetry moves, the beam, spot and readouts, the triangle and ratio cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `CircleToGraph` (new, kit needs), `StudioCirclePoint` (new, kit needs), `FunctionSimulator` with `SIN_FAMILY`, `COS_FAMILY` and a tan family (`excluded` at odd multiples of π/2), `piTicks`, `StudioFeatureMarks`, `StudioSymmetryPairs`, `LiveReadoutBoard`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `StudioTriangle` (new, kit needs; scene 12 only), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Axis relabel** (small): replace every degree tick label with its radian label in one 0.6 s cross-fade on a cue, keeping the tick positions.
2. **Torch beam on a plate** (small): a coded beam from the torch plate's lens point (sidecar) to a spot on the fence plate's line, with the spot's offset = tan x × the sidecar's metre; at 90° the beam is drawn parallel and the spot hidden.
3. **Trace transfer** (small): the tuner screen's trace detaches, rescales and lands on the graph's curve in 1.2 s (shape only; a sine trace on both).

## Codex asset brief (Maths A11 T10, a long fence from above)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-t10.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the t10 build. The tuning fork is briefed in t09's design (it appears first in t09's final frame). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-fence-long-top-v1.png` (900 × 2200 px): a straight timber paling fence seen from directly above, running from the bottom of the image to the top, a strip of mown grass on the left side only; the fence line perfectly straight and vertical in the image.

Sidecar JSON for the fence (`ma11-fence-long-top-v1.json`): the pixel x of the fence's face line on the grass side, and the pixel length of 1 m along it. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-t10-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm each of the three graphs is shown on a radian axis at least once, that one degree domain is graphed, and that no axis mixes degree and radian labels.
4. Confirm tan is never given an amplitude, its period is π, and its branches never touch an asymptote.
5. Confirm no transformed graph (y = a sin(bx) + d) and no reciprocal graph is drawn, and that no piano note is called a sine wave (S11-17).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on t09's final frame.

## YouTube metadata (draft)

Title: Graphs of sin x, cos x and tan x: Period, Amplitude and Asymptotes | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/trigonometric-identities-and-equations/lesson05.sa.html

A tuning fork's pure tone draws a wave on a phone tuner. Where does that shape come from? Watch a point go round a circle and unroll its height into y = sin x, then its x-coordinate into y = cos x. Read off period, amplitude, domain, range and intercepts in degrees and radians, see why cos x is even and sin x is odd, and follow a torch beam along a fence to see why y = tan x has asymptotes and repeats every π. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Trigonometry and measure of angles.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Graph y = sin x, y = cos x and y = tan x over domains given in degrees or radians, showing intercepts with the x-axis and y-axis and any asymptotes, determine their domains and ranges, and period and amplitude where appropriate, and whether each is even or odd or neither"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa0b724fc5

Builds on: Arc length, sector area and segments; radians. Next: Secant, cosecant and cotangent in a right-angled triangle.

#Year11Maths #MathsAdvanced #TrigGraphs #HSCScience

## Open decisions

- **1. Two anchors (root).** The tuner carries sine and cosine; the torch carries tan. Both are painted, both explain (the shape; the asymptote). If root wants one anchor, drop the torch and show tan from the circle alone (scene 6 loses its strongest picture).
- **2. Torch plate reuse (root).** `phys-y11-torch-v1.png` is Year 12 g01's torch, where the beam is a tangent line. Here the beam's spot along a fence is tan x. Judged plate reuse with a new idea, as w21's phone; root may prefer a new torch plate.
- **3. Colour roles (root).** This video gives cosine violet and tan amber so three curves stay distinct; inputs stay blue and sine teal. If the t01 to t08 designs fix other ratio colours, the builder aligns them; no narration change.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t03, t04, t08, w21 and w26; check that the unrolling makes "height = sin θ" feel caused, that the radian relabel in scene 4 is followable, that the torch makes "undefined at 90°" concrete, and that scene 6 is not too dense), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
