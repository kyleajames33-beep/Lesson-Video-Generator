# Maths A12 D12: How do reciprocal trig functions change when x changes? Sec x against cos x, the reciprocal rule from the quotient rule, cosec x and cot x, their domains, and where y = sec x is flat (design)

Status: Revision 1 (1 Nov): needs learning review and maths check (Codex), then a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131 and 135 additions (`FunctionGraph` and `GraphLayer` with `domain` intervals, `asymptotes`, `radianTicks`, `movingX` and `tangent`; point-linked `ReadoutPanel` with custom `rows`; `AlignedAlgebra`, `AlgebraFraction`, `DomainStrip`); no `SecantToTangent`, `NumericDial`, `ReflectionLayer`, transform or table is needed. See "Assets" for one small kit gap (a second moving point on a paired curve). Nothing recorded; human listening pending.

Narration 5,693 characters, 14 scenes, about 516 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: twelfth video of the Year 12 Mathematics Advanced differential calculus route, and the second of the three later-home trig videos (d11 tan, d12 sec, cosec and cot, d13 the remaining composites). Templates: `math-a12-d11.md` (Revision 1, the previous video, same session, whose scene 13 is this video's first frame), `math-a12-d10.md` (Revision 2) and `math-a12-d08.md` (Revision 2): same structure, voice, paper style and kit parts, and the same order (see it on the graph, explain the cause, write the rule, apply). All maths visuals are coded; no painted plates (programme decision 5). Pre-design pack: `../pre-design/maths-a12/math-a12-d12.md` (every number recalculated below). Site lesson read (1 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html`, SHA256 `db0b045dcd7d18b9fe84ed1e03d77f93564a690c792680aa9e139ad5bda4be68` (recomputed 1 Nov; matches the pack and the route). Route entry: `math-a12-d12` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Recall sec=1/cos,cosec=1/sin,cot=cos/sin." Route stop: "Derive the three reciprocal trig derivatives and retain domains." Next: math-a12-d13. Route root decisions applied: "d12 teaches sec, cosec and cot derivatives as original teaching because the site lesson does not (site log 50)"; d11 to d13 recall d05 to d08 in one sentence each; site metadata labels ("MAV-12-04 dot point 3") are never copied into titles or descriptions; no maths lesson is voiced before the brief 124 pilot passes.

**Source finding for root (site log item 50 is inaccurate).** The same lesson 5 file (same SHA256 as the pack) contains card 07, "Derivatives of sec x, cosec x and cot x" (HTML comment "CARD 07" at line 490, inside the `read-and-prove-trig-derivatives` step), with all three quotient rule derivations, a domain note, the chain example d/dx sec 3x = 3 sec 3x tan 3x, the "co- functions take the minus sign" pattern and a quick check on cot. It has no worked numerical example and no graph. This design therefore uses card 07's derivations (checked correct) and the site's domain note, and adds original teaching where the site has none: the hook, the reciprocal picture against cos x and sin x, the reciprocal rule recalled from d08, the worked example, the reason for the co- pattern, and both attempts. The route's root decision ("original teaching") still holds for everything except the three derivation lines, so the design needs no route change; item 50 needs correcting (Decisions, site correction 3).

Owner rules applied: new 2024 syllabus only, content point cited by codename and exact wording; maths visuals coded, never painted; no people, hands or figures; one reasoning stage at a time with only the needed earlier results kept; worked examples as separate task, equation and grouped givens; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; Year 11 knowledge and d05 to d11 recalled in a sentence each, not re-taught. Template findings from the d01 to d10 reviews applied from the start: exact values in the algebra (√2, −2√3, 2/√3) with decimals only in grey readouts; radians stated with the rules; each domain (cos x ≠ 0; sin x ≠ 0) written before differentiating and kept with every answer; no curve, point or tangent at an excluded x and no curve joined across an asymptote; directional statements ("cosec falls") scoped to the interval where they are shown; "decreasing on each branch", never the whole domain (d11's lesson); summaries, key notes and the memory aid carry the same scoped wording as the narration; the memory aid follows the derivations and its reason is given (pack section 4: "do not replace quotient reasoning with a minus-sign slogan"); attempt cards give neither the answer nor its sign; the opening frame is d11's actual final frame.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codename, official `code` field empty), quoted from the route JSON `syllabusActions`:

- `cifea7f68d`: "Use the rules of differentiation to find the derivatives of cosec x, sec x and cot x"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

**Boundary:** starts from d11's handoff (y = sec x on window T with its asymptotes, (0, 1) ringed, "gradient ?" and the chips "sec x = 1/cos x", "cosec x = 1/sin x", "cot x = cos x/sin x"; route start "recall sec = 1/cos, cosec = 1/sin, cot = cos/sin"); refutes the "flip the derivative" guess on the graph; shows a reciprocal moving opposite to its denominator, faster where the denominator is small; recalls d08's reciprocal rule d/dx(1/g) = −g′/g²; derives d/dx(sec x) = sec x tan x, d/dx(cosec x) = −cosec x cot x and d/dx(cot x) = −cosec²x (`cifea7f68d`), each with its domain (route stop "retain domains"); uses the sec derivative to find where y = sec x is flat; and explains the co- pattern after the derivations. Not taught: composites of sec, cosec and cot such as sec 3x (d13 and later practice; site card 07's chain line is noted, not shown); tangent and normal equations (d14); second derivatives and concavity of the reciprocal graphs (d16); classifying the flat points as maxima or minima (d09's method; named "bottom of a U" and "top of an upside-down U" from the graph only).

## Decisions

- **Learner question kept (route).** "How do reciprocal trig functions change when x changes?" The answer, built in order: one over a function moves the opposite way to it, and faster where the function is small (2); so d/dx(1/g) = −g′/g², the bottom's turn from d08 alone (3); with g = cos x that gives sec x tan x (3), with g = sin x it gives −cosec x cot x (4), and cot x = cos x/sin x by the quotient rule gives −cosec²x (5); each derivative lives exactly where its function does (6).
- **Opening on d11's actual final frame.** d11 scene 13 ends on y = sec x on window T, (0, 1) ringed, the chip "gradient ?", the three definition chips and "Next: derivatives of sec x, cosec x and cot x", with d11's memory line small at the top. Scene 1 continues on it with no change of window.
- **The hook surprise (graph driven, the d08 pattern).** The tempting guess "flip the derivative": d/dx(1/cos x) = 1/(d/dx cos x) = 1/(−sin x). At x = 0 that is 1/0, which does not exist, but the tangent at (0, 1) is plainly flat. A wrong rule that fails at the very point on screen. (This is the reciprocal version of d08's "divide the derivatives".)
- **Cause on the graph (scene 2).** cos x (dashed teal) and sec x (navy) on the same axes with one moving x and two linked points. At x = 0 both are flat (cos at its peak 1, sec at the bottom of its U). As x moves towards π/2, cos x falls towards 0 and sec x rises, faster and faster. Readout rows "cos x slope" and "sec x slope" at x = π/4 (−0.707, 1.414) and x = 1.2 (−0.932, 7.098): the reciprocal's slope has the opposite sign and grows as cos x shrinks. This is the reason for both parts of −g′/g²: the minus (opposite direction) and the g² (small g, big slope).
- **The reciprocal rule recalled (d08 scene 3, row 3).** d08 derived (1/g)′ = −g′/g² by the chain rule on g⁻¹ while rebuilding the quotient rule. It is recalled in one sentence and shown as a grey chip, not re-derived. With f = 1 it is also the quotient rule with the top's turn zero (author note a).
- **Three derivations (site card 07, checked; original framing).** `AlignedAlgebra`, one row per spoken step, each with its domain strip written first:
  - sec x = 1/cos x, cos x ≠ 0: −(−sin x)/cos²x = sin x/cos²x = (1/cos x)(sin x/cos x) = sec x tan x. At 0: sec 0 × tan 0 = 0 (the flat bottom); at π/4: √2 × 1 = √2 (the scene 2 readout).
  - cosec x = 1/sin x, sin x ≠ 0: −cos x/sin²x = −(1/sin x)(cos x/sin x) = −cosec x cot x. Scoped direction: between 0 and π/2, sin x rises, so cosec x falls. At π/4: −√2.
  - cot x = cos x/sin x, sin x ≠ 0: quotient rule (−sin x × sin x − cos x × cos x)/sin²x = −(sin²x + cos²x)/sin²x = −1/sin²x = −cosec²x. The mirror of d11's tan proof: same steps, opposite sign. cosec²x ≥ 1, so the slope of cot x is never more than −1, and cot x decreases on each branch. At π/4: −2.
  The site writes cosec, not csc; the video says and writes "cosec" (spoken "co-seck") and "cot" (spoken "cot").
- **Domains kept (route stop; scene 6).** Two strips: sec x and tan x need cos x ≠ 0 (x ≠ π/2 + kπ); cosec x and cot x need sin x ≠ 0 (x ≠ kπ). Each derivative lives exactly where its function does (site card 07: "A derivative is only valid where its function is defined"). Every boxed result carries its strip.
- **Worked example (original; uses the sec derivative and explains the hook).** "Find the x-values where the curve y = sec x has a horizontal tangent, for −π/2 < x < 3π/2." Domain first: x ≠ π/2. dy/dx = sec x tan x = 0. sec x = 1/cos x is never 0, so tan x = 0: x = 0 or x = π. Points (0, 1) and (π, −1): the bottom of one U and the top of the next, upside-down U. Answers the hook's flat tangent. Classification is d09's and is not done.
- **Attempts (original).** (A1) the exact gradient of y = cosec x at x = π/6: −cosec(π/6)cot(π/6) = −2 × √3 = −2√3. Crossed: "2/√3" (the hook's flip: 1/(d/dx sin x) = 1/cos(π/6)). (A2) pack question 2, kept: differentiate y = cosec x + cot x and state where the derivative exists: −cosec x cot x − cosec²x, for x ≠ kπ (equivalently −(1 + cos x)/sin²x, author note e). Crossed: "−cosec x cot x + cosec²x" (cot's derivative given tan's positive sign). Pack question 1 (sec x at π/3, gradient 2√3) is not used because scene 3 already shows sec at π/4 and scene 7 finds its zeros; A1 tests a different function. Neither card shows a derivative, a graph or the sign.
- **Mistake scene:** none separate. "Flip the derivative" (hook, refuted by the flat tangent; feedback 1, crossed); "cot's derivative is positive like tan's" (5, said positively; feedback 2, crossed); "sec and cosec have the same domain" (6, two strips); "decreasing on the whole domain" (5, "on each branch" only); "the minus pattern is a slogan to memorise" (8, its reason is given).
- **Memory aid:** "Swap each name for its co-partner, and add a minus." Introduced after the three derivations, with its reason: each co-function is its partner at π/2 − x (cos x = sin(π/2 − x), cot x = tan(π/2 − x), cosec x = sec(π/2 − x); Year 11 complementary angles), and the chain rule multiplies by the inside's derivative, −1. It turns three known results (sin, tan, sec) into the other three (cos, cot, cosec), and it is why "the co-functions carry the minus" (site card 07, whose "Nothing deep" is corrected, site correction 2). See "Memory aid check".
- **Handoff teaser (route next: d13).** Scene 13 shows three chips for the composites still to come, "3^(2x)", "log₃(x² + 1)", "tan(eˣ)" (d13's site examples), and y = 3^(2x) drawn on its own window with a ring at (0, 1) and the chip "gradient ?". No derivative shown. d13 opens on this frame.
- **Site sources used:** card 07 (the three derivations, the domain note, the co- pattern, "watch the squares"); card 04 key terms (sec x and its domain); card 06 (d11's tan proof, mirrored for cot); the quick check on cot (option B, −cosec²x, confirmed); card 07's chain line sec 3x is noted for d13 and not shown here.
- **Site corrections (quoted from site lesson 5, read 1 Nov; for `../site-corrections-maths-a12.md`):**
  1. Card 07: "Watch the squares: $\dfrac{d}{dx}\tan x = +\sec^2 x$ but $\dfrac{d}{dx}\cot x = -\operatorname{cosec}^2 x$. Same shape, opposite sign, and the sign is the mark." Unsupported marking claim (as items 24, 28 and 32). Suggest: "Same shape, opposite sign."
  2. Card 07: "The pattern: the three functions whose names begin with co [...] are the three whose derivatives carry the minus sign. Nothing deep, but it is a reliable check." There is a reason: each co-function is its partner at π/2 − x, and the inside π/2 − x has derivative −1. Suggest: "It happens because each co-function is its partner function of π/2 − x, and the chain rule multiplies by the inside's derivative, −1." (The site sentence also uses an em dash in the HTML; flagged for the owner's style rule, not a maths error.)
  3. Site log item 50 ("Fresh inspection of differential lesson05 finds tan=sin/cos and the tan quotient proof, but no sec/cosec/cot derivative worked teaching"): inaccurate for the file with SHA256 `db0b045d...`. Card 07 derives all three. Suggest: "Card 07 derives sec, cosec and cot by the quotient rule, with domains and a chain example; there is no worked numerical example or graph. d12 adds original teaching for those." The crosswalk's "covered" for `cifea7f68d` is then correct for the derivations.
  - Checked and correct: card 07's three derivations and its domain note ("sec x and tan x break where cos x = 0; cosec x and cot x break where sin x = 0"); d/dx sec 3x = 3 sec 3x tan 3x; the cot quick check (B); card 04's sec x domain.
- **Pack questions answered:** pack question 2 used as A2; pack question 1 replaced (author note f); the pack's recalculated gradients at π/4 (√2, −√2, −2) are shown in scenes 3, 4 and 5; the pack's misconception (no minus-sign slogan in place of quotient reasoning) is respected by placing the pattern after the derivations with its reason; the pack's visual needs met (`FunctionGraph` with reciprocal labels and poles; `AlignedAlgebra`; `DomainStrip`; no new geometry).
- **Cause chain taught, in order:** (1) flipping the derivative fails at the flat bottom of sec x (hook); (2) a reciprocal moves opposite to its function and faster where the function is small (2); (3) so (1/g)′ = −g′/g², and sec x′ = sec x tan x (3); (4) the same rule gives −cosec x cot x; sin rises, so cosec falls there (4); (5) cot by the quotient rule, the mirror of tan: −cosec²x, never above −1 (5); (6) each derivative keeps its function's domain (6); (7) sec x tan x = 0 only where tan x = 0, so the flat points are at 0 and π (7); (8) the co-partner pattern and its reason (8).
- **Entry knowledge (route `entryKnowledge`):** `ci00fa8fac` (the chain rule; used in scene 8's reason); `cie3d91a6e` (choosing the rule). From d05: d/dx(sin x) = cos x, d/dx(cos x) = −sin x, x in radians. From d08: the quotient rule (f′g − fg′)/g² and (1/g)′ = −g′/g² for g ≠ 0. From d11: d/dx(tan x) = sec²x, sec x = 1/cos x, "increasing on each branch". Also assumed from Year 11: cosec x = 1/sin x and cot x = cos x/sin x (route start); sin²x + cos²x = 1; exact values at π/6, π/4, π/3; sin(π/2 − x) = cos x and its partners (complementary angles); the graphs of sin x and cos x. (Reviewer to confirm the 2024 Year 11 placement of the reciprocal definitions and complementary-angle results; scene 8 needs one extra clause if the latter is not Year 11.)
- **Learner-visible vocabulary (plain meaning at first use):** reciprocal (one over a quantity, scene 1); sec x (recall from d11: one over cos x, scene 1); cosec x (one over sin x, scene 1, chip; scene 4); cot x (cos x over sin x, which is one over tan x, scene 5); branch (recall from d11, scene 5); co-partner (the pair sin and cos, tan and cot, sec and cosec, scene 8).
- **Legacy logic ported:** none.
- **New explainer motion (coded; brief 129, 131 and 135 kit):** **flip guess against the flat tangent** (a chip with the guess, "1/0" crossed, the flat amber tangent at (0, 1), scene 1); **paired curves with linked points** (`FunctionGraph` of sec x with a `GraphLayer` of cos x dashed teal, one moving x driving both points and tangents, scene 2; kit gap 1); **reciprocal readout** (`ReadoutPanel.rows` "cos x slope", "sec x slope", scene 2 and 3); **rows** (`AlignedAlgebra` with `AlgebraFraction`, scenes 3 to 5, 7, 10, 12); **paired sin and cosec** (scene 4) and **cot with ghost tan** (scene 5); **two domain strips** (`DomainStrip` ×2, scene 6); **zeros of the derivative on the graph** (rings at (0, 1) and (π, −1) with flat amber tangents, scene 7); **co-partner swap** (three rows of chips whose names slide to their partners while a red minus drops in, scene 8); crossed chips (`Chip` with `cross`), `Callout`, `PenArrow`, scribble circles, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes` (shared kit).
- **Board layout (constant):** heading top-left; main graph on the left (about 1,000 × 680 px); readout panel, chips and algebra in the right column. Window T (as d11; scenes 1 to 3, 6, 7, 8 thumbnail): x from −2 to 5, radian ticks at multiples of π/4 from −π/2 to 3π/2, y from −5 to 5; for sec x asymptotes x = −π/2, π/2, 3π/2 and domain [−2, −π/2), (−π/2, π/2), (π/2, 3π/2), (3π/2, 5]. Window S (scenes 4, 5, 10 and 12 thumbnails): x from −2 to 5, the same ticks plus π, y from −5 to 5; for cosec x and cot x asymptotes x = 0 and x = π and domain [−2, 0), (0, π), (π, 5]. Window E (scene 13): x from −1.5 to 1.2 (ticks 1), y from −1 to 10 (ticks 2), for y = 3^(2x). Unequal unit lengths throughout (no angle claims). No curve, point or tangent at an excluded x; the curve is clipped by the window near each asymptote, never joined across it (brief 129 contract).
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) (1/g)′ = −g′/g² for g ≠ 0 (d08, chain rule on g⁻¹). Also the quotient rule with f = 1: (0 × g − 1 × g′)/g². The sign of (1/g)′ is always opposite to the sign of g′, because g² > 0; so "a reciprocal moves the opposite way" holds wherever g ≠ 0, and "faster where g is small" means |(1/g)′| = |g′|/g², large when g² is small.
  (b) Scene 2 readouts on (−π/2, π/2): at x = π/4: cos 0.707107, slope −0.707107; sec 1.414214, slope 1.414214. At x = 1.2: cos 0.362358, slope −0.932039; sec 2.759703, slope 7.098383. At x = 1.3 (the furthest stop): sec 3.738, slope 13.47 (the tangent clips at the window; the point stays inside). The moving x runs 0 → 1.3 and never reaches π/2.
  (c) "Between zero and pi over two, sine rises, so cosec falls" (scene 4) is scoped; on (π/2, π) sin falls and cosec rises. The general statement is the sign rule in note a. cosec on (0, π) has its flat point at π/2 (cosec 1, slope 0, and sin x is flat there too); scene 4 narrates it as the check −cosec(π/2)cot(π/2) = 0. The moving x runs 0.3 → π/4 → 2.6 → π/2 inside (0, π).
  (d) cot: d/dx cot x = −cosec²x = −1 − cot²x ≤ −1 wherever sin x ≠ 0, so cot x is decreasing on each branch (0, π), (π, 2π), ...; cot(π/4) = 1 and cot(5π/4) = 1 on different branches (not used). At π/4: −2; at π/6: −4; at π/2: −1 (the branch centre, flattest).
  (e) A2: d/dx(cosec x + cot x) = −cosec x cot x − cosec²x = −cosec x(cot x + cosec x) = −(1 + cos x)/sin²x for sin x ≠ 0 (SymPy). Any of these forms is correct; the video shows the first, then the factored form in grey.
  (f) Pack question 1 (sec x at π/3: 2√3 ≈ 3.464, cos x ≠ 0) is a direct substitution very close to scene 3's π/4 case; A1 asks for cosec instead, so that the flip mistake has a clear wrong value (2/√3 ≈ 1.155) and the sign is tested.
  (g) Scene 8's reason: cos x = sin(π/2 − x), so (cos x)′ = cos(π/2 − x) × (−1) = −sin x. cot x = tan(π/2 − x), so (cot x)′ = sec²(π/2 − x) × (−1) = −cosec²x. cosec x = sec(π/2 − x), so (cosec x)′ = sec(π/2 − x)tan(π/2 − x) × (−1) = −cosec x cot x. All hold where the functions are defined, x in radians.
  (h) Pronunciations: "sec" "seck"; "cosec" "co-seck"; "cot" as written; "sec x tan x"; "minus cosec x cot x"; "minus cosec squared x"; "one over g"; "minus g prime, over g squared"; "sine squared x"; "root two"; "minus two root three"; "two over root three"; "three to the two x"; "log base three of, x squared plus one"; "tan of e to the x" (d13's chips, scene 13). Pilot items with "cos" (root decision 1).

Main question: *Flip the derivative of cos x and you'd predict that sec x = 1/cos x has slope 1/(−sin x), which doesn't even exist at x = 0, yet the tangent there is flat. How do sec, cosec and cot really change when x changes, and where do their derivatives exist?*
Entry knowledge (Year 11 `ci00fa8fac`, `cie3d91a6e`; d05, d08, d11): the chain rule; choosing the rule; the sin and cos derivatives in radians; the quotient rule and (1/g)′ = −g′/g²; d/dx(tan x) = sec²x; the reciprocal definitions; sin²x + cos²x = 1; exact values; complementary angles.
Stops after: refuting the flip guess; seeing a reciprocal move opposite to its function; deriving the three derivatives with their domains; finding where y = sec x is flat; the co-partner pattern with its reason. No composites of the reciprocal functions, no tangent equations, no classification.
Handoff: the remaining composites: a^(f(x)), log_a(f(x)) and tan(f(x)) (route math-a12-d13).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as d01 to d11): the reciprocal curve navy; its partner (cos x or sin x) dashed teal; tangent lines amber (`MATH_ACCENT`); asymptotes dashed grey; the domain strip and excluded marks red-brown; readouts navy; givens navy; the f′g part teal and the fg′ part blue in the cot quotient (d08's turn colours); the current answer bright; earlier lines dim. Screen maths writes sec x, cosec x, cot x, sec x tan x, cosec²x. Exact forms in ink; every rounded value is a grey "≈" readout beside its exact form. Trig arguments in radians.

### 1. hook (flip the derivative?)
> Last video ended on this curve, y equals sec x, which is one over cos x. At x equals zero it sits at one, at the bottom of a U. Here's a tempting guess for its derivative. Cos x has derivative minus sine x, so maybe one over cos x has derivative one over minus sine x. Just flip it. At x equals zero, that's one over **zero**, which doesn't even exist. But the tangent there is plainly **flat**. So flipping the derivative fails. How do sec, cosec and cot really change when x **changes**?

Visual: opens on d11's last frame (d11 scene 13): window T with y = sec x in navy on its pieces, the dashed asymptotes x = −π/2, π/2, 3π/2, the ring at (0, 1), the chip "gradient ?", and the chips "sec x = 1/cos x", "cosec x = 1/sin x", "cot x = cos x/sin x" in the right column; d11's memory line small at the top fades. Heading writes on: "Derivatives of sec x, cosec x and cot x". On the third and fourth sentences a chip writes "guess: (1/cos x)′ = 1/(cos x)′ = 1/(−sin x)" (grey tag "flip the derivative"). On "zero" a row writes "x = 0: 1/(−sin 0) = 1/0" and "1/0" is crossed (red tag "doesn't exist"). On "flat" the amber tangent draws horizontal through (0, 1), tag "slope 0". On "changes" the guess chip is crossed and the chip "gradient ?" becomes the scene question "how do sec, cosec and cot change? where?".

### 2. a reciprocal moves the opposite way
> Let's watch sec x next to the curve it comes from, cos x. At zero, cos x is flat at its peak, so one over cos x is flat at the bottom of its U. Now move x towards pi over two. Cos x falls towards zero, so one over it **rises**. And it rises faster and faster, because one over a tiny number is huge. At pi over four, cos x has slope about minus point seven one, and sec x has slope about plus one point four **one**. Nearer the wall, cos x is small, and sec x is **steep**. So the reciprocal moves the opposite way, and the smaller the function, the faster it moves.

Visual: window T stays. The dashed teal curve y = cos x draws on the same axes (label "y = cos x"), touching sec x at (0, 1) and (π, −1) (where cos x = ±1); a small grey tag "sec x = 1/cos x". One moving x (`movingX`, kit gap 1) carries two points and two amber tangents: one on cos x, one on sec x, joined by a thin vertical guide. At x = 0 both tangents are flat. On "rises" the moving x runs from 0 towards π/4 (about 1.5 s): a small down arrow on the cos point and an up arrow on the sec point. A `ReadoutPanel` (right column) with rows "cos x: height, slope" and "sec x: height, slope"; on "one" (bold) it holds at π/4: "cos x 0.707, slope −0.707"; "sec x 1.414, slope 1.414" (grey "≈"). On "steep" x moves on to 1.2 (holds: "cos x 0.362, slope −0.932"; "sec x 2.760, slope 7.098"), then to 1.3 and stops short of the asymptote, which glows. On the last sentence two chips write: "opposite way" (beside the arrows) and "small cos x: steep sec x".

### 3. one over g, and the derivative of sec x
> The quotient rule video already gave us this. One over g has derivative minus g prime, over g squared. The minus is the opposite **way**. The g squared on the bottom is why a small g makes a steep **curve**. For sec x, g is cos x, and g prime is minus sine x. So the derivative is sine x over cos squared x, wherever cos x isn't **zero**. Split that into one over cos x, times sine x over cos x. That's sec x tan **x**. At zero, tan is zero, so the slope is zero, the flat bottom we **saw**. At pi over four, sec x is root two and tan x is one, so the slope is root two, about one point four **one**, just as the graph showed.

Visual: the graph shrinks to a thumbnail at the top left (sec and cos with the points at π/4 and the readout, dim). Right column: grey chip "quotient rule video: (1/g)′ = −g′/g², g ≠ 0", then the boxed general row "d/dx(1/g) = −g′/g²" written large; on "way" the minus is ringed (tag "opposite way"); on "curve" a bracket under g² (tag "small g: steep"). Calculation rows below: task strip "Find d/dx(sec x)"; reference row "g = cos x, g′ = −sin x" (grey tag "x in radians"); `AlignedAlgebra`:
1. "d/dx(sec x) = d/dx(1/cos x) = −(−sin x)/cos²x"; on "zero" the `DomainStrip` writes "cos x ≠ 0 (x ≠ π/2 + kπ)".
2. "= sin x/cos²x".
3. On the split sentence: "= (1/cos x) × (sin x/cos x)".
4. On "x" (bold): "= sec x tan x" (bright, boxed with the strip).
On "saw" a check row "x = 0: sec 0 × tan 0 = 1 × 0 = 0" and the thumbnail's flat tangent at (0, 1) glows. On "one" (last bold) "x = π/4: √2 × 1 = √2" with grey "≈ 1.414"; the thumbnail's readout "sec x slope 1.414" glows.

### 4. cosec x
> Cosec x is one over sine x, so the same rule works with g equals sine x. Now g prime is cos x. So the derivative is minus cos x, over sine squared x, wherever sine x isn't **zero**. Split it the same way: minus one over sine x, times cos x over sine x. That's minus cosec x cot **x**. Look at the graph between zero and pi over two. Sine x rises there, so cosec x **falls**, and that's its minus sign. At pi over four, the slope is minus root **two**. Past pi over two, sine falls, so cosec rises again. In between, at pi over two, both are **flat**, and cot of pi over two is zero, so the formula agrees.

Visual: board changes to window S at the left: the dashed teal curve y = sin x, then y = cosec x in navy on its pieces with asymptotes x = 0 and x = π (label "y = cosec x = 1/sin x"). Right column: the general row "d/dx(1/g) = −g′/g²" stays at the top (dim); reference row "g = sin x, g′ = cos x". Rows: "d/dx(cosec x) = −cos x/sin²x"; on "zero" the `DomainStrip` writes "sin x ≠ 0 (x ≠ kπ)" and the asymptotes x = 0 and x = π glow; on the split sentence "= −(1/sin x) × (cos x/sin x)"; on "x" (bold) "= −cosec x cot x" (bright, boxed with the strip). On "Look at the graph" a linked moving x runs from 0.3 to π/2 on both curves (grey tag "0 < x < π/2"): an up arrow on the sin point, a down arrow on the cosec point. On "falls" the minus in the boxed result glows. On "two" the moving x holds at π/4: "cosec x 1.414, slope −1.414" and a check row "x = π/4: −√2 × 1 = −√2" (grey "≈ −1.414"). On "Past pi over two" the moving x runs on to 2.6 (a down arrow on sin, an up arrow on cosec); on "flat" it returns to π/2, where both points get flat amber tangents and rings, and a check row "x = π/2: −cosec(π/2)cot(π/2) = −1 × 0 = 0" writes.

### 5. cot x: the mirror of tan
> Cot x is cos x over sine x, which is one over tan x. It's a quotient, so use the quotient rule, just as we did for tan. The top's derivative is minus sine x, and the bottom's is cos x. So the top of the answer is minus sine x times sine x, minus cos x times cos **x**. Take out the minus, and what's left is sine squared plus cos squared, which is **one**. So the derivative of cot x is minus one over sine squared x, which is minus cosec squared **x**, again wherever sine x isn't zero. That's tan's proof with the opposite sign. Tan's slope is never below one. Cot's is never above minus one, so cot decreases on each **branch**. At pi over four, cosec x is root two, so the slope is minus root two squared, which is minus **two**.

Visual: window S keeps its asymptotes; the cosec and sin curves fade; y = cot x draws in navy (label "y = cot x = cos x/sin x"), with a faint dashed ghost of y = tan x for comparison (tag "last video: tan x"). Right column: task strip "Find d/dx(cot x)"; reference row "f = cos x, f′ = −sin x; g = sin x, g′ = cos x" (grey chip "quotient rule: (f′g − fg′)/g²"). `AlignedAlgebra`:
1. On "x" (first bold): "d/dx(cot x) = (−sin x × sin x − cos x × cos x)/sin²x" (`AlgebraFraction`, the f′g part teal, the − fg′ part blue).
2. On "one" (bold): "= −(sin²x + cos²x)/sin²x" with a grey tag "sin²x + cos²x = 1", then "= −1/sin²x".
3. On "x" (in "minus cosec squared x", bold): "= −cosec²x" (bright, boxed with the strip "sin x ≠ 0 (x ≠ kπ)").
Beside it, small and grey, d11's boxed result "d/dx(tan x) = sec²x" with a two-headed arrow and the tag "same steps, opposite sign". On "branch" a falling arrow along each cot branch, tag "decreasing on each branch"; chip "cosec²x ≥ 1, so slope ≤ −1". On "two" (last bold) the amber tangent at (π/4, 1) draws with the readout "gradient −2.000" and the check row "x = π/4: −cosec²(π/4) = −(√2)² = −2".

### 6. each derivative lives where its function does
> Notice the domains. Sec x, like tan x, breaks where cos x is zero. Cosec x and cot x break where sine x is **zero**, at every whole number of pis. On the graphs, sec x shares its walls with tan x, and cosec x shares its walls with cot x, at the places where sine x crosses the **axis**. Each derivative lives exactly where its function does, so write the condition with the answer, every **time**.

Visual: the board clears to a summary layout: two rows. Row 1: "sec x, tan x" with the `DomainStrip` "cos x ≠ 0: x ≠ π/2 + kπ" and its open marks at −π/2, π/2, 3π/2 on a small number line. Row 2 (on "zero"): "cosec x, cot x" with the strip "sin x ≠ 0: x ≠ kπ" and open marks at 0 and π (and −π, 2π at the line's ends). On "axis" two small thumbnails slide in beside the rows: window T with sec x and the ghost of tan x sharing dashed asymptotes, and window S with cosec x and cot x sharing theirs, with a faint sin x crossing the axis at 0 and π; the shared asymptotes glow. Beside each function its derivative writes in grey: "sec x tan x", "sec²x"; "−cosec x cot x", "−cosec²x". On "time" both strips glow and slide beside their derivatives.

### 7. worked example: where is y equals sec x flat?
> Now a worked example. Find where the curve y equals sec x has a horizontal tangent, for x between minus pi over two and three pi over **two**. Domain first. Cos x can't be zero, so x isn't pi over two. A horizontal tangent means the derivative is zero, so sec x tan x equals zero. Sec x is one over cos x, and one over a number is never zero. So tan x must be **zero**. In this interval, that's x equals zero and x equals **pi**. The points are zero, one, and pi, minus one: the bottom of one U, and the top of the next, upside-down **U**.

Visual: board clears to a calculation layout: task strip "Find the x-values where the tangent is horizontal"; equation strip "y = sec x"; givens group (navy, written on "two"): "−π/2 < x < 3π/2". Window T draws at the left with sec x on its pieces in the interval only (the parts outside fade), asymptote π/2 inside. The `DomainStrip` writes "x ≠ π/2" on "Domain first". `AlignedAlgebra`: "dy/dx = sec x tan x = 0"; on "never zero" a grey row "sec x = 1/cos x ≠ 0"; on "zero" (bold) "so tan x = 0"; on "pi" "x = 0 or x = π" (bright; "in −π/2 < x < 3π/2" tag, the given glows). On "U" the points (0, 1) and (π, −1) are ringed with flat amber tangents, labels "(0, 1)" and "(π, −1)", and the boxed answer "x = 0 and x = π". A small grey chip "sec π = 1/cos π = −1".

### 8. memory aid: swap to the co-partner, add a minus
> Here's a pattern that halves what you memorise, now you know where the results come from. Pair each function with its co-partner: sine and cos, tan and cot, sec and cosec. Swap every name in a derivative for its partner, and add a minus. Sine to cos becomes cos to minus **sine**. Tan to sec squared becomes cot to minus cosec **squared**. Sec to sec tan becomes cosec to minus cosec **cot**. It works because each co-function is its partner of pi over two minus x, and that inside has derivative minus **one**. That's why the co-functions carry the minus.

Visual: the handwritten line writes large: "Swap each name for its co-partner, and add a minus." Under it three rows, each a pair of chips: left "(sin x)′ = cos x", "(tan x)′ = sec²x", "(sec x)′ = sec x tan x". On each bold cue the names in the left chip slide into their partners and a red-brown minus drops in front, giving the right chip: on "sine" "(cos x)′ = −sin x"; on "squared" "(cot x)′ = −cosec²x"; on "cot" "(cosec x)′ = −cosec x cot x". On "one" a grey row writes "cos x = sin(π/2 − x), cot x = tan(π/2 − x), cosec x = sec(π/2 − x); inside π/2 − x has derivative −1" (grey tag "chain rule"). On the last sentence the three right-hand minus signs glow. Under everything, smaller: "x in radians; each result where its function is defined." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the exact gradient of the curve y equals cosec x, at the point where x equals pi over six. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find the exact gradient of the curve y = cosec x at the point where x = π/6." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no derivative, no memory line).

### 10. feedback 1 (brief)
> d y by d x is minus cosec x cot x. At pi over six, sine is a half, so cosec x is two, and cot x is root **three**. So the gradient is minus two root **three**. Between zero and pi over two cosec x is falling, so a negative slope makes sense. Two over root three comes from flipping the derivative of sine, which is the hook's **mistake**.

Visual: card shrinks to the top. Rows: "dy/dx = −cosec x cot x" (grey tag "sin x ≠ 0"); "x = π/6: sin(π/6) = ½, cosec(π/6) = 2, cot(π/6) = (√3/2)/(½) = √3" ("x = π/6" in the card underlined); on "three" (second bold) "dy/dx = −2 × √3 = −2√3" (bright, boxed; grey "≈ −3.464"; "exact" underlined). On the third sentence a window S thumbnail shows the cosec branch (0, π) with the point (π/6, 2) and a falling amber tangent. On "mistake" a chip "1/cos(π/6) = 2/√3" fades in and is crossed (caption "flipped derivative"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Differentiate y equals cosec x plus cot x, and state the values of x for which the derivative exists. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Differentiate y = cosec x + cot x. State the values of x for which dy/dx exists." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no domain strip).

### 12. feedback 2 (brief)
> Both terms break where sine x is zero, so x can't be any whole number of **pis**. Cosec x gives minus cosec x cot x, and cot x gives minus cosec squared **x**. So d y by d x is minus cosec x cot x, minus cosec squared x, for x not equal to k pi. A plus on the cosec squared term gives cot the slope sign of tan, but cot always **falls**.

Visual: card shrinks to the top. On "pis" the `DomainStrip` writes "sin x ≠ 0: x ≠ kπ, k an integer" ("values of x" underlined). On "x" (bold) rows "d/dx(cosec x) = −cosec x cot x" and "d/dx(cot x) = −cosec²x", then "dy/dx = −cosec x cot x − cosec²x" (bright, boxed with the strip), with a grey line "= −cosec x(cot x + cosec x)" (author note e). On "falls" a chip "−cosec x cot x + cosec²x" fades in and is crossed (caption "(cot x)′ = −cosec²x"). Hold about 1 second.

### 13. handoff
> So each reciprocal derivative comes from one over g, or from the quotient rule, and keeps its function's domain. **Next**, the composites we've left for later: three to the two x, a log with base three, and tan of e to the x. Here's y equals three to the two x. What's its slope at zero, and which factors must the derivative **keep**?

Visual: board clears. The memory line from scene 8 returns small at the top. On the first sentence the summary rows from scene 6 return briefly (small), then fade. On "Next" three chips write in a row: "3^(2x)", "log₃(x² + 1)", "tan(eˣ)", each with an amber inside slot ringed ("2x", "x² + 1", "eˣ"). On the third sentence window E draws at the left with y = 3^(2x) in blue (label "y = 3^(2x)"), and a ring at (0, 1). On "keep" a chip "gradient ?" beside the ring and a chip "Next: the remaining composites". No derivative, tangent or slope shown. Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. d/dx(1/g) = −g′/g², where g ≠ 0 (from the quotient rule). A reciprocal moves the opposite way to g. Not 1/g′.
2. d/dx(sec x) = sec x tan x, where cos x ≠ 0 (x ≠ π/2 + kπ).
3. d/dx(cosec x) = −cosec x cot x and d/dx(cot x) = −cosec²x, where sin x ≠ 0 (x ≠ kπ). x in radians.
4. Each derivative is valid only where its function is defined: write the condition with the answer.

Memory aid (large, on the notes screen): *Swap each name for its co-partner, and add a minus.* Second line: *sin and cos, tan and cot, sec and cosec. Reason: co-function(x) = partner(π/2 − x), and the inside has derivative −1.*

## Teaching checks

- **Does it explain causes?** Why the flip guess fails: it gives 1/0 at a point where the tangent is flat (1). Why a reciprocal has a minus: it moves opposite to its function (2; the sign of −g′/g² is opposite to g′). Why the g²: one over a small number changes fast (2, 3). Why sec x tan x: the split of sin x/cos²x (3). Why cosec has a minus: sin rises on (0, π/2), so its reciprocal falls (4). Why cot's slope is at most −1: cosec²x ≥ 1 (5). Why each domain: each function is a quotient whose bottom must not be zero (6). Why y = sec x is flat only at 0 and π here: sec x is never zero, so tan x must be (7). Why the co-functions carry the minus: the inside π/2 − x has derivative −1 (8).
- **Misconceptions addressed:** "flip the derivative" (1; feedback 1, crossed; key note 1); "cot's derivative is +cosec²x, like tan" (5; feedback 2, crossed); "sec and cosec share a domain" (6; key notes 2 and 3); "a function with a positive (or negative) derivative is increasing (or decreasing) on its whole domain" (5, "on each branch"); "the minus pattern is just a slogan" (8, reason given).
- **One idea at a time:** one function per scene (3, 4, 5); one algebra row per spoken step; the domains together once (6); the pattern only after all three derivations (8).
- **Video makes it easier:** the student sees the flip guess crash at the flat bottom (1), watches cos x fall while sec x rises faster and faster (2), sees sin x rise while cosec x falls (4), sees tan's ghost beside cot's falling branches (5), and watches the names slide to their partners with a minus dropping in (8). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible ("exact"; "state the values of x"), 10 seconds each with the invitation to pause, nothing answer-bearing; neither card shows the sign or a graph. One crossed mistake each; feedback about 26 s and 26 s (scenes 10 and 12, including the 1 s holds).
- **Avoided double teaching:** the reciprocal rule is d08's, recalled in one sentence and a chip (3); the quotient rule is a chip (5); d11's tan proof is a grey thumbnail (5); the sin and cos derivatives and exact values are used, not re-derived; complementary angles are one grey row (8).
- **Syllabus coverage:** `cifea7f68d` in full (scenes 3, 4, 5; key notes 2 and 3), with domains (6) and one use (7).
- **Out of scope by design:** composites such as sec 3x; tangent and normal equations; classification of the flat points; second derivatives.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the exact gradient of the curve y = cosec x at the point where x = π/6."
Model answer: dy/dx = −cosec x cot x (sin x ≠ 0). At x = π/6: cosec(π/6) = 2, cot(π/6) = √3, so dy/dx = −2√3. Classic mistake (crossed): "2/√3" (flipping the derivative of sin x: 1/cos(π/6)).

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "Differentiate y = cosec x + cot x. State the values of x for which dy/dx exists."
Model answer: dy/dx = −cosec x cot x − cosec²x (= −cosec x(cot x + cosec x)), for sin x ≠ 0, that is x ≠ kπ, k an integer. Classic mistake (crossed): "−cosec x cot x + cosec²x".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Window T | x from −2 to 5, radian ticks π/4 from −π/2 to 3π/2; y from −5 to 5; sec asymptotes −π/2, π/2, 3π/2; sec(−2) ≈ −2.403, sec(5) ≈ 3.525 | 1 to 3, 7, 8 |
| Hook | flip guess 1/(−sin 0) = 1/0 undefined; sec 0 = 1, slope 0 | 1 |
| Reciprocal pair | π/4: cos 0.707, slope −0.707; sec 1.414, slope 1.414. 1.2: cos 0.362, slope −0.932; sec 2.760, slope 7.098. 1.3: sec 3.738, slope 13.47 | 2, 3 |
| sec derivative | sin x/cos²x = sec x tan x; 0 at 0; √2 ≈ 1.414 at π/4 | 3, 6 |
| cosec derivative | −cos x/sin²x = −cosec x cot x; −√2 ≈ −1.414 at π/4 | 4, 6 |
| cot derivative | −(sin²x + cos²x)/sin²x = −cosec²x; −2 at π/4; ≤ −1 | 5, 6 |
| Window S | x from −2 to 5, y from −5 to 5; cosec and cot asymptotes 0, π; cosec(−2) ≈ −1.100, cosec(5) ≈ −1.043; cot(−2) ≈ 0.458, cot(5) ≈ −0.296 | 4, 5, 10 |
| Worked | sec x tan x = 0 on −π/2 < x < 3π/2, x ≠ π/2: x = 0, π; points (0, 1), (π, −1) | 7 |
| A1 | −cosec(π/6)cot(π/6) = −2√3 ≈ −3.464; crossed 1/cos(π/6) = 2/√3 ≈ 1.155 | 9, 10 |
| A2 | −cosec x cot x − cosec²x = −(1 + cos x)/sin²x, x ≠ kπ; crossed + cosec²x | 11, 12 |
| Handoff | y = 3^(2x); window E x −1.5 to 1.2, y −1 to 10; (0, 1) ringed; reaches y = 10 at x ≈ 1.048 | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 and Python (1 Nov); Codex to re-check numerically and with a CAS.

- d/dx(1/cos x) − sec x tan x = 0; d/dx(1/sin x) + cosec x cot x = 0; d/dx(cos x/sin x) + 1/sin²x = 0.
- sec and its slope: 0: (1, 0); π/6: (1.154701, 0.666667); π/4: (1.414214, 1.414214); π/3: (2, 3.464102); 1.2: (2.759703, 7.098383); 1.3: (3.738334, 13.465876); π: (−1, 0). cos and its slope at π/4: (0.707107, −0.707107); at 1.2: (0.362358, −0.932039).
- cosec, its slope, cot, its slope: π/6: (2, −3.464102, 1.732051, −4); π/4: (1.414214, −1.414214, 1, −2); π/3: (1.154701, −0.666667, 0.577350, −1.333333); π/2: (1, 0, 0, −1); 0.3: (3.383863, −10.939, 3.232728, −11.4505).
- sec x tan x = 0 on (−π/2, 3π/2) without π/2: x = 0 and π.
- A1: −2√3 = −3.464102; 2/√3 = 2√3/3 = 1.154701. A2: SymPy simplify gives −(cos x + 1)/sin²x.
- Cofunction checks: 1/cos(π/2 − x) − 1/sin x = 0; tan(π/2 − x) − cot x = 0.
- Window ends: sec(−2) = −2.402998, sec(5) = 3.525320; cosec(−2) = −1.099750, cosec(5) = −1.042835; cot(−2) = 0.457658, cot(5) = −0.295813.
- Window E: 3^(2x) = 10 at x = ln 10/(2 ln 3) = 1.047952; 3^(2.4) = 13.97 (clipped).

## Memory aid check

- **"Swap each name for its co-partner, and add a minus."** Written for this lesson (the site's "the co-functions take the minus sign" is the same observation; the swap form also produces the result). Meaning, as said in scene 8: from (sin x)′ = cos x, (tan x)′ = sec²x and (sec x)′ = sec x tan x, swapping sin and cos, tan and cot, sec and cosec throughout and adding a minus gives (cos x)′ = −sin x, (cot x)′ = −cosec²x and (cosec x)′ = −cosec x cot x. Assumptions checked: x in radians; each result only where its function is defined (said on the written line); the reason holds (author note g: each co-function is its partner of π/2 − x, and the chain rule multiplies by −1). It works in reverse too (two minus signs cancel: from (cos x)′ = −sin x, swapping and adding a minus gives (sin x)′ = cos x). It helps a new case: a student who knows the three "non-co" results can rebuild the other three and check the sign, which is the common slip (feedback 2). It does not replace the derivation (the syllabus asks students to find them with the rules of differentiation, scenes 3 to 5), and it is introduced only after them.
- **Considered, not used:** "co means minus" alone (true for these six, but it gives the sign only, not the form); a mnemonic sentence for the six results (letters to decode add a step).

## Narration length estimate

Revision 1 count (1 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,693 characters**, 14 scenes. Characters per scene (1 to 14): 477, 554, 602, 585, 713, 385, 523, 540, 128, 326, 133, 325, 327, 75. At 13.3 characters per second the speech is about 428 s; add about 13 s of holds and settling time for the paired moving points in scenes 2 and 4, the cot tangent in scene 5, the rings in scene 7 and the name swaps in scene 8, 20 s for two countdowns and about 55 s more of the quiet notes hold (88 s of holds): **about 516 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scenes 5 and 3 are the longest (scene 5 at 713 characters, about 54 s); watch the moving x in scene 2 (it must hold at π/4 before the slopes are spoken) and the name swaps in scene 8 (each must finish before the next pair is spoken). Reserve trims if the voiced take runs long: scene 2's last sentence (keep the two chips); scene 5's "That's tan's proof with the opposite sign." (keep the arrow); scene 8's first sentence; scene 10's third sentence (keep the thumbnail).

## Scene list and build ids

Lesson key `m-a12d12` (route math-a12-d12). Suggested explainer folder `src/explainer/lessons/math-a12-d12` and build folder `docs/production/claude-pm/lessons/m-a12d12` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, reciprocal-opposite, one-over-g-sec, cosec, cot-mirror, domains, worked-sec-flat, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): d11's last frame continues into scene 1 (camera continue, same window); 1 to 2 camera continue (the cos curve joins); 2 to 3 the graph shrinks to a thumbnail (camera push to the algebra); 3 to 4 clear change to window S; 4 to 5 camera continue (same asymptotes); 5 to 6 board clear to the summary; 6 to 7 clear change (new task); 7 to 8 board clear to the memory line; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12d12-learning-review.md`, `science_check` = `checks/m-a12d12-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit and the brief 129 maths kit with its d01 addendum and brief 131 and 135 additions:
- `FunctionGraph` / `GraphLayer` (scenes 1 to 5, 7, 10, 13): y = sec x, cos x, cosec x, sin x, cot x, tan x (ghost), 3^(2x), with `domain` intervals open at each asymptote and `asymptotes`; `radianTicks`; `movingX` and `tangent` with caller-supplied slopes (brief 129 caller contract).
- `ReadoutPanel` with `rows` (scenes 2 to 5): heights and slopes of the pair, computed from the same x.
- `AlignedAlgebra`, `AlgebraFraction` (scenes 3 to 5, 7, 10, 12).
- `DomainStrip` (brief 135; scenes 3 to 7, 12), with d11's kit gap 2 label for "x ≠ π/2 + kπ" and "x ≠ kπ".
- Shared: `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `KeyNotes`, `Heading`; the vertical guide joining the paired points, the direction arrows and the name-swap chips (text with a sliding transition) as plain SVG and text.

Kit gaps (for the d12 build brief, not a new kit brief):
1. **A second moving point on a paired curve.** Scenes 2 and 4 drive one moving x on two curves (sec and cos; cosec and sin), each with its own point and tangent. If `FunctionGraph`'s `movingX` serves only the main curve, a `GraphLayer` with the same `movingX` and its own `tangent` serves; the readout rows are computed by the lesson from the same x. The moving x stays inside one connected interval of both functions (d11 kit gap 1, branch-safe). No new geometry.

## Codex asset brief

None. No painted plate is needed (programme decision 5).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the derivatives), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three derivations (scenes 3 to 5, key notes 2 and 3) line by line, including the quotient rule order and the identity in the cot proof, and that each boxed result carries its domain.
3. Confirm the scope of every learner-visible general claim: "a reciprocal moves the opposite way" (true wherever g ≠ 0, author note a); "sine rises there, so cosec falls" (said for 0 < x < π/2 only); "cot decreases on each branch"; "each derivative lives exactly where its function does"; the memory aid and its reason (author note g).
4. Confirm the worked example (sec x tan x = 0 only at x = 0 and π on −π/2 < x < 3π/2, x ≠ π/2; sec x never zero) and that no curve, point or tangent is drawn at an excluded x or joined across an asymptote, in windows T, S and E.
5. Confirm both attempt questions are original in wording, every condition the answer needs is on the card, and neither card shows the derivative, the sign or a graph.
6. Confirm the syllabus quote matches the route JSON `syllabusActions` exactly and no site "Module" or "MAV-12-04 dot point" label appears in learner copy or metadata.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-maths-a12.md` (owner record only; the site is read-only here). Item 3 corrects the log's own item 50.

## YouTube metadata (draft)

Title: Derivatives of sec x, cosec x and cot x, with Their Domains | Year 12 Maths Advanced

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson05.sa.html

Flip the derivative of cos x and you would predict that sec x has slope 1/(−sin x), which does not even exist at x = 0, yet the tangent there is flat. Watch sec x rise as cos x falls, see why one over g has derivative −g′/g², and find the derivatives of sec x, cosec x and cot x: sec x tan x, −cosec x cot x and −cosec²x, each valid only where its function is defined, with x in radians. Then find where y = sec x has a horizontal tangent, and see why the co-functions carry the minus sign. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, differential calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use the rules of differentiation to find the derivatives of cosec x, sec x and cot x"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

Builds on: Why the derivative of tan x is sec²x (previous video); the quotient rule with new functions. Next: Keeping inner factors and domains in the remaining composites.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Site log item 50 and the root decision (root).** Card 07 does derive all three results (see "Source finding for root"). The design keeps the root decision's intent (original teaching for everything the site lacks) and cites card 07 for the derivation lines. Root to correct item 50 and, if wanted, the root decision's wording ("the site lesson derives them but gives no worked example or graph").
- **2. Complementary angles in scene 8 (maths check).** The reason for the co- pattern uses sin(π/2 − x) = cos x and its partners. If the 2024 Year 11 Advanced content does not include these, either add one clause ("from the right-angled triangle, the other angle's sine is this angle's cos") or keep the pattern with "it comes from the chain rule with the inside π/2 − x" in grey only.
- **3. The worked example (learning review).** It is original (the site has no worked numerical example for these functions). It reuses the hook's flat point and adds (π, −1). If the reviewer prefers a gradient-at-a-point example, pack question 1 (sec x at π/3, 2√3) is ready, but then A1 should move to cot to avoid repetition.
- **4. Spoken "cosec" (voice pilot).** "co-seck" joins "seck", "cos" and "natural log" as a brief 124 pilot item.
- **5. Site link form.** The description link uses the `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the d05, d08, d11 and Year 11 entry knowledge; check that the flip guess's failure is clear on the graph; that the paired cos and sec motion makes the minus and the g² felt before the rule; that one sentence of d08 recall is enough for (1/g)′ = −g′/g²; that the three derivations stay one per scene and readable; that the co-partner reason helps rather than overloads; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The paired moving points, the readout rows and the name swaps carry the explanation; judge them at playback speed in the voiced preview, not from stills. Readout values must never contradict the graph (computed from the same functions and exact derivatives).
- Route next: d13 opens on scene 13's frame (window E with y = 3^(2x), (0, 1) ringed, "gradient ?", the three composite chips with their inside slots).
