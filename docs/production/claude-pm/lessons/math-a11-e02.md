# Maths A11 E02: What makes e the special base for exponentials? The gradient of aˣ at (0, 1) as a varies, Euler's number e, the gradient function k aˣ, and eˣ as its own derivative (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-c06.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,765 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 521 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-e02-learning-review.md` (summary `../checks/m-a11-e01-e08-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md` and root's resolution brief of 17 Nov (every spoken "ln" is "the natural log of", introduced once in e03; review evidence paths). Resolution log: `../checks/m-a11-e01-e08-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 ("Like every exponential ... grows to the right"): **accepted**, reviewer's sentence ("Like two to the x and three to the x ... rises to the right, because its base is bigger than one"), with a grey chip "e > 1: rises (e01)".
2. Should fix, scene 4 (the stretch skips the slide): **accepted**, reviewer's narration ("slid one step right and stretched up by two. Sliding doesn't change a slope ..."). The visual now runs the copy as two moves on their own words: the slide (tangent keeps 0.693, hand tag "slide: same slope"), then the stretch (tangent steepens to 1.386). Open decision 1 is closed: keep the stretch. Error-check item 5 is updated to match.
3. Should fix, scene 5 (why k is the gradient at (0, 1)): **accepted**, reviewer's narration ("At x equals zero, k times a to the zero is just k ...") and the grey row "x = 0: k × a⁰ = k" (with "e01: a⁰ = 1"), written before A1 needs it.
4. Optional, scene 6 (show x at height 5): **applied**. A small blue readout "x ≈ 1.61" shows beside the rider's height-5 stop, so e03's callback refers to something students saw. e03 also takes the reviewer's discovery wording (e03 finding 3), so either design stands alone.

Joins unchanged: scene 1 opens on e01's final frame and scene 12 is still e03's opening frame. No spoken "ln" in this design (author note a).

Narration 5,765 characters by script (Revision 1: 5,604), about 521 s with holds; speech before the notes about 428 s, under the 570 s cap. Changed values were rechecked with SymPy 1.14 (scratchpad `e-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. The `learning_review` evidence path now reads `checks/m-a11-e02-learning-review.md`. Nothing recorded; human listening pending.

Scope: fifty-first video of Year 11 Mathematics Advanced (2024), outline order 51, Exponential and logarithmic functions. Pre-design pack: `../pre-design/maths-a11/math-a11-e02.md` (brief 243). Site lesson (read through the pack's quotations, read only): `exponential-and-logarithmic-functions/lesson03.sa.html` (the "What is e?" exploration, gradients 0.69 and 1.10 at (0, 1); `we-1`, e² ≈ 7.389 and e⁻¹ ≈ 0.368; all with their numbers). Route entry: `math-a11-e02` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted mine cart (e01's brief) and a painted tournament noticeboard and trophy for the handoff (prefix `ma11-`); every graph, tangent, slider and readout coded.

Owner rules applied: as e01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: a mine cart of gold in a phone game), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Exponential and logarithmic functions, Exponential functions), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci93d02049`: "Examine the gradient of the tangent to the curve y = a^x at its y-intercept for varying values of a, and verify using graphing applications that there is a unique number e ≈ 2.71828182845..., such that the gradient of the tangent to y = e^x at x = 0 is 1, and call this number e Euler’s number"
- `ci7e417be9`: "Examine the gradient function of y = a^x with graphing applications and identify that the gradient function is d/dx (a^x) = ka^x, for some constant k depending only on a"
- `ciac4383bd`: "Conclude that Euler’s number, e, is a unique number such that d/dx (e^x) = e^x, that is, e^x is its own derivative"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

**Boundary:** starts from e01's final frame exactly (the mine cart plate `ma11-gold-cart-v1.png`; chips "gold: 1 kg", "doubles every hour: G = 2ᵗ", "growing how fast right now? ?"; a small graph of 2ᵗ through (0, 1), the point ringed; "Next: the gradient at (0, 1)", "?"). Recalls e01 (every aˣ passes through (0, 1)), c04 (a graphing application estimates the gradient of a tangent) and c07 (the constant multiple rule) in a phrase or grey chip each. Teaches: the cart's growth rate at the start is the gradient of 2ᵗ at (0, 1), about 0.69, not 1; the gradient at (0, 1) as a varies (2: 0.69, 3: 1.10, 4: 1.39), found with a graphing application, and the one base where it is exactly 1, e ≈ 2.71828, Euler's number (`ci93d02049`); what e is (a fixed irrational number, like π) and the eˣ key (site `we-1`); the gradient function of 2ˣ is 0.693 × 2ˣ, with the cause (one step right doubles every height, so it doubles every slope), and in general d/dx(aˣ) = k aˣ with k the gradient at (0, 1), depending only on a (`ci7e417be9`); for eˣ, k = 1, so d/dx(eˣ) = eˣ and the gradient always equals the height (`ciac4383bd`). Stops at eˣ as its own derivative. Not taught: k = ln a (Year 12 d02); continuous compounding (not Year 11); the chain rule on e^f(x) (Year 12 d01); logarithms (e03).

## Decisions

- **Anchor: a mine cart of gold in a phone game (painted plate, live).** The game shows two numbers: the gold in the cart, and how fast it is growing right now (kilograms per hour). The rule "doubles every hour" gives G = 2ᵗ, and the "right now" rate is the gradient of the graph. At the start the readout says about 0.69 kg an hour, not 1, even though the cart gains exactly 1 kg in the first hour (the rate climbs from 0.69 to 1.39 across the hour). The question "which rule makes the rate start at exactly 1 kg an hour?" is the syllabus's question about the gradient at (0, 1), and its answer, a cart growing as eᵗ, has "gold per hour = gold" at every moment. A game rule is exact by design, so no real-world model caveat is needed. Games; the pack's anchor 1. The pack's compound interest hook (anchor 2) is not used: continuous compounding is not Year 11, and Year 12 d02 anchors on a savings coin jar. No Year 12 or a11 design uses a mine cart, nuggets or an idle game (grep 16 Nov: "mine cart", "nugget", "idle" no hit; "gold" hits are coin plates in d02, f09, f12 and s01). d03's app users (eᵗ thousand users, "each user brings in one new user a week") is the nearest Year 12 idea; it is d03's own anchor for ln, and this video does not use users, followers or views.
- **Graphing application (syllabus wording "verify using graphing applications").** A coded graphing-app screen (`ScreenApp`) shows y = aˣ with a slider for a, the tangent at (0, 1) and the app's gradient readout; later the app's numerical derivative of 2ˣ is plotted over 0.693 × 2ˣ. The narration says "in a graphing app" and the screen looks like one (input bar, slider, readout), unbranded.
- **Simulations (standard item 3).**
  1. **Cart readouts** (scene 1): a clock "t = 0.00 h" runs to 1; readouts "gold: … kg" (teal) and "growing now: … kg/h" (violet) tick from 1.00 and 0.69 to 2.00 and 1.39; on the small graph a violet tangent rides from (0, 1) to (1, 2).
  2. **Base slider with tangent at (0, 1)** (scene 2, in `ScreenApp`): a sweeps 2 → 4 and back, the tangent at (0, 1) pivots, readout "gradient at (0, 1): …"; it closes in from 2.5 (0.92) and 2.8 (1.03) to 2.7 (0.99), 2.72 (1.0006), and locks at 2.71828… where it reads 1.000 and the slider label becomes "e".
  3. **`HeightSlopeReadout` rider** (scenes 4, 6): a point rides along 2ˣ with readouts "height", "gradient", "gradient ÷ height" (violet), the last holding at 0.693; on eˣ the same rider shows "gradient ÷ height = 1.00" and the height and gradient readouts tick together.
- **Colour roles (fixed for the e strand, as e01).** The index x and time t **blue**; heights, the gold and outputs **teal**; the base a **amber**; gradients, tangents, the gradient constant k and "gradient ÷ height" **violet**; answer green; mistake red, crossed slips only. (e01's magenta multiplier does not appear; the syllabus's k in this video is a gradient constant, so it is violet.)
- **Large type, handwritten voice.** As e01. Hand tags: "average 1 kg/h", "starts slower", "too flat", "too steep", "exactly 1", "a number, like π", "one step right: × 2", "slide: same slope", "every slope × 2", "same ratio everywhere", "k = gradient at (0, 1)", "gradient = height", "eˣ, not xᵉ".
- **Stage changes (standard item 2).** The mine cart with its readouts (1); the graphing app with the base slider (2); e as a number and the calculator keys (3); the rider on 2ˣ and the app's derivative check (4); the general rule card (5); the rider on eˣ with the cart returning (6); framed card (7); question cards (8 to 11); the tournament plate (12, final frame); key notes (12's notes scene).
- **Worked examples (g01 layout).** Scene 3: site `we-1`, e² ≈ 7.389 and e⁻¹ = 1/e ≈ 0.368 on a calculator. Scene 6: the gradients of y = eˣ at x = 2 and x = −1 equal those heights (7.39 and 0.37); crossed "gradient of eˣ is x e^(x − 1)".
- **Memory aid.** Framed card: "On eˣ, the gradient always equals the height." This is d01's own sentence ("So on this graph, the gradient always equals the height"), so Year 12 recalls exactly what Year 11 taught (as root ruling 5 on c10 to c18 kept c11 and c12's aids shared with d07 and d08).
- **Visual surprise.** The cart gains a whole kilogram in its first hour, yet the "right now" readout starts at 0.69; then the slider's readout climbs through 1 at a strange number, 2.71828…, and locks.
- **Site notes (pack section 8 and `../site-corrections-maths-a11.md` section 6).** The compound-interest hook and its truncated "Daily: $2.714" are not used. A = Pe^(rt), the e^(2x) trap and the growth models in lesson03 are left out. The site's sentence "e is the base whose graph rises at exactly the rate of its own height" is kept in spirit as the memory aid.
- **Plain meanings at first use.** Tangent and its gradient (recalled from c04 as "the steepness of the curve right at that point"); gradient function (recalled from c05 as "the formula that gives the gradient at every x"); Euler's number ("a fixed number, about 2.718, named after the mathematician Leonhard Euler"; not a variable); irrational ("its decimals go on forever without repeating, like π").
- **Attempts (pack questions).** A1: given the gradient of 4ˣ at x = 0 is about 1.386, find k and the gradients at x = 1 and x = −0.5 (1.386, 5.545, 0.693); crossed "x × 4^(x − 1)". A2: the gradient of eˣ where y = 5 and at x = 2, and the tangent at x = 0 (5, 7.39, y = x + 1); crossed "gradient 2 at x = 2".
- **Mistake scene:** none separate. The power rule on aˣ (6 crossed, A1 crossed); every exponential having gradient 1 at (0, 1) (2, the slider); e as a rounded 2.7 or a variable (3 tag); eˣ against xᵉ (3 tag); gradient equal to x instead of the height (A2 crossed).
- **Cause chain taught, in order:** (1) the cart's growth right now is the gradient of its graph, and at the start that is less than 1 (1); (2) every aˣ passes through (0, 1) but leaves it at a different steepness, flatter for small bases and steeper for big ones, so exactly one base gives gradient 1 there (2); (3) that base is a fixed irrational number, e (3); (4) one step right multiplies every height of 2ˣ by 2, which stretches that part of the curve upward by 2 and so doubles every slope, so the gradient is always the same multiple of the height, and that multiple is the gradient at (0, 1) (4, 5); (5) for eˣ the multiple is 1, so the gradient equals the height everywhere (6).
- **Entry knowledge (route):** e01 (every aˣ passes through (0, 1)); c04 (estimating a tangent's gradient with a graphing application); c05 (the gradient function f′(x)); c07 (the constant multiple rule).
- **What Year 12 relies on.** d01 assumes `ciac4383bd` and says "e to the x is its own derivative. So on this graph, the gradient always equals the height. At height one, the slope is one"; d03 shows the grey chip "Year 11: on eˣ, gradient = height". This video ends on exactly that picture and those words. d02 measures "gradient ÷ height" for 2ˣ (0.693) and names it ln 2; this video measures the same ratio and stops at "a constant k that depends only on a", with a forward reference "Year 12 finds a formula for it".
- **Handoff (to math-a11-e03, "What is a logarithm, and how does it undo an exponential?").** Scene 11: the tournament noticeboard (`ma11-tournament-board-v1.png`) with a coded knockout draw for 8 teams on its paper sheet, the trophy (`ma11-trophy-v1.png`) beside it; chips "8 teams → 3 rounds" (8 teal, 3 blue), "64 teams → ? rounds", "2^? = 64" (2 amber, ? blue); "Next: running 2ˣ backwards" and "?". This is e03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Cart: G = 2ᵗ kg; dG/dt = (ln 2)2ᵗ; at t = 0, 0.693 kg/h; at t = 1, 1.386 kg/h; gain in the first hour 1 kg (average 1 kg/h). The narration never says ln.
  (b) Gradients at (0, 1): ln 2 = 0.6931, ln 2.5 = 0.9163, ln 2.7 = 0.9933, ln 2.72 = 1.0006, ln 2.8 = 1.0296, ln 3 = 1.0986, ln 4 = 1.3863; the base with gradient 1 is e = 2.718281828….
  (c) 2ˣ gradients at x = 0, 1, 2: 0.693, 1.386, 2.773, each 0.693 × 2ˣ. App check at x = 1.5: 2^1.5 = 2.828, gradient 1.961 = 0.693 × 2.828.
  (d) Cause: 2^(x+1) = 2 × 2ˣ, so the graph to the right of x = 1 is the graph to the right of x = 0 shifted right 1 and stretched up by 2; a vertical stretch by 2 doubles every slope (c07). Hence gradient at x = gradient at 0 × 2ˣ. The general statement aˣ⁺ʰ − aˣ = aˣ(aʰ − 1) is not shown.
  (e) e² = 7.389, e⁻¹ = 0.368. eˣ at height 5: x = 1.609 (not named as ln 5 here).
  (f) A1: k ≈ 1.386; 1.386 × 4 = 5.545; 1.386 × 4^(−0.5) = 0.693. A2: 5; e² ≈ 7.39; tangent y − 1 = 1(x − 0), y = x + 1.
  (g) Pronunciations: "e" as the letter; "e to the x"; "Euler" as "OY-ler"; "zero point six nine"; "two point seven one eight"; "k times a to the x"; "d by d x of e to the x".
  (h) Windows: scene 1 small graph t 0 to 1.2, G 0 to 2.5; scene 2 app window x −1.5 to 1.5, y 0 to 4; scenes 4 to 6 x −2 to 2.5, y 0 to 8.

Main question: *What makes e the special base for exponentials? Which base gives a gradient of exactly 1 where the curve crosses the y-axis, and what follows from that?*
Entry knowledge (e01, c04, c05, c07): every aˣ passes through (0, 1); a tangent's gradient from a graphing application; the gradient function; the constant multiple rule.
Stops after: the gradient of aˣ at (0, 1) as a varies; e ≈ 2.71828; d/dx(aˣ) = k aˣ with k depending only on a; d/dx(eˣ) = eˣ. No ln, no compounding, no chain rule.
Handoff: math-a11-e03: "a knockout tournament halves the teams each round: 64 teams need how many rounds, and what about 100?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): index x and time t blue; heights and gold teal; base a amber; gradients and k violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · EXPONENTIAL AND LOGARITHMIC FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how fast is the gold growing?
> Here's the mine cart from last time. It starts with one kilogram of gold, and the game doubles the gold every hour. So after one hour there are two kilograms. That's one extra kilogram in the hour, so on average, one kilogram an **hour**. But the game also shows how fast the gold is growing right now. Watch it. At the very start, it says about zero point six nine kilograms an **hour**. Then it speeds up, and by the end of the hour it's about one point three nine. On the graph, that right-now rate is the gradient of the tangent. So two to the t leaves the point zero, one with a gradient of about zero point six nine, a bit less than one. Is there a base that leaves with a gradient of exactly one? And what makes that base so **special**?

Visual: opens on e01's final frame exactly (the cart plate at 900 px, chips "gold: 1 kg", "doubles every hour: G = 2ᵗ", "growing how fast right now? ?", the small graph of 2ᵗ through (0, 1), "Next: the gradient at (0, 1)", "?"). On the first sentence the "Next" chips fade and the small graph grows to 760 × 560 px at the right (t 0 to 1.2 "t (hours)", G 0 to 2.5 "gold (kg)"). A clock "t = 0.00 h" and readouts "gold: 1.00 kg" (teal) and "growing now: ? kg/h" (violet) sit under the cart. On "hour" (first) the chord from (0, 1) to (1, 2) draws in grey, hand tag "average 1 kg/h". On "hour" (second) the "growing now" readout fills "0.69 kg/h" and a violet tangent draws at (0, 1), hand tag "starts slower". The clock runs to 1.00 h: the gold readout ticks to 2.00, the rate to 1.39, and the tangent rides the curve to (1, 2). On "gradient of the tangent" grey chip "c04: gradient of the tangent = rate right now". On "special" heading "Which base starts with gradient 1?", and the question chip "What makes e special?" moves to the top right.

### 2. gradient at the y-intercept, as the base changes
> Let's check other bases in a graphing app. Every curve a to the x passes through zero, one, so compare their tangents right there. For two to the x, the gradient at zero, one is about zero point six nine. That's too **flat**. For three to the x, it's about one point one zero. Too **steep**. And four to the x gives about one point three nine. So somewhere between two and three, the gradient must pass through exactly one. Slide the base and close in. At two point seven, it's zero point nine nine. At two point seven two, it's just over one. There's exactly one base where the gradient is one, and it's about two point seven one **eight**. That number is called e, or Euler's number.

Visual: stage change to the graphing-app screen (`ScreenApp`, 1,300 × 760 px, unbranded: input bar "y = aˣ", a slider "a" (amber), the plot window x −1.5 to 1.5, y 0 to 4). The cart shrinks to a 260 px badge at the top left with "0.69 kg/h". The tangent at (0, 1) is violet with an app readout "gradient at (0, 1) = …" (violet, 44 px). The slider steps 2, 3, 4: on "flat" (a = 2) readout "0.693", hand tag "too flat"; on "steep" (a = 3) "1.099", tag "too steep"; a = 4 "1.386". A small table at the right logs each pair "a | gradient" (2 | 0.69, 3 | 1.10, 4 | 1.39). On "close in" the slider sweeps 2.5 (0.92), 2.8 (1.03), 2.7 (0.99), 2.72 (1.0006), then settles; on "eight" it locks at "a = 2.71828…", the readout reads "1.000" (green frame), the tangent lies along y = x + 1, and the slider label changes to "e". On "Euler's number" a chip "e ≈ 2.71828 (Euler's number)" writes (amber).

### 3. e is a number
> e is a fixed number, like pi. Its decimals go on forever without repeating, so it's irrational, and two point seven is only a rounding. It isn't a variable, either. e to the x has the number e in the base, and x in the power. Your calculator has an e to the x key. e squared is about seven point three eight **nine**. And e to the minus one is one over e, about zero point three six **eight**. Like two to the x and three to the x, e to the x passes through zero, one, stays above the x-axis, and rises to the right, because its base is bigger than one.

Visual: clear change: the large chip "e = 2.718281828459045…" at the top (60 px, amber), the digits writing on and trailing off, hand tag "a number, like π", grey chip "π = 3.14159…". Two rows below, 52 px: "eˣ: base e, power x" (e amber, x blue) and a grey ghost "xᵉ" crossed in red, hand tag "eˣ, not xᵉ". A coded calculator key "eˣ" (`ScreenApp` keypad strip) presses: on "nine" "e² ≈ 7.389" (teal); on "eight" "e⁻¹ = 1/e ≈ 0.368" (teal). On "passes through zero, one" a small graph (600 × 440 px) at the right draws y = eˣ between 2ˣ and 3ˣ through (0, 1), above the dashed asymptote; on "base is bigger than one" grey chip "e > 1: rises (e01)".

### 4. the gradient function of two to the x
> Now let's look at the gradient everywhere, not just at zero, one. Ride along two to the x. At height one, the gradient is zero point six nine three. At height two, it's one point three eight six. At height four, it's two point seven seven three. Divide each gradient by its height, and you get zero point six nine three every **time**. Here's why. One step to the right doubles every height of two to the x. So the piece of curve from one to two is the piece from zero to one, slid one step right and stretched up by two. Sliding doesn't change a slope, and stretching up by two doubles every **slope**. So the gradient is always zero point six nine three times the height. The graphing app agrees. Plot its gradient function of two to the x, then zero point six nine three times two to the x. They land on top of each **other**.

Visual: stage change to the large graph (1,150 × 700 px, x −2 to 2.5, y 0 to 8) with y = 2ˣ (teal), and the `HeightSlopeReadout` board at the right (44 px): "height", "gradient" (violet), "gradient ÷ height" (violet). The rider stops at (0, 1), (1, 2) and (2, 4) with violet tangents: readouts 1 | 0.693 | 0.693; 2 | 1.386 | 0.693; 4 | 2.773 | 0.693; on "time" the ratio column rings, hand tag "same ratio everywhere". On "Here's why" a step arrow from x = 0 to x = 1 with hand tag "one step right: × 2"; the piece of curve from x = 0 to 1 is copied; on "slid one step right" it slides right by 1 (its tangent keeps 0.693, hand tag "slide: same slope"); on "stretched up by two" it stretches up by 2, landing on the piece from 1 to 2, and its tangent steepens from 0.693 to 1.386; on "slope" tag "every slope × 2" and grey chip "c07: k f(x) has gradient k f′(x)". On "graphing app" a small `ScreenApp` (640 × 420 px) at the right plots "gradient of 2ˣ" (violet) and "0.693 × 2ˣ" (dashed violet); on "other" they coincide, readout "difference 0.000".

### 5. the gradient function of any a to the x
> The same thing happens for any base. One step right multiplies every height by a, so it multiplies every slope by a. That means the gradient function of a to the x is k times a to the x, where k is a constant. At x equals zero, k times a to the zero is just k. So k is the gradient at zero, one, and it depends only on the **base**. For two to the x, k is about zero point six nine three. For three to the x, it's about one point zero nine nine. Year 12 finds a formula for k. For now, the big question is which base makes k exactly **one**.

Visual: clear change to the rule card at the left (900 px) with the app badge at the top right. Card, 52 px: "one step right: height × a, slope × a"; on "k times a to the zero" a grey row "x = 0: k × a⁰ = k" (grey chip "e01: a⁰ = 1"); on "base" the rule, 60 px, framed: "d/dx(aˣ) = k aˣ" (a amber, x blue, k violet), hand tag "k = gradient at (0, 1)", and the line "k depends only on a". A small k table writes from scene 2's log: "a = 2: k ≈ 0.693", "a = 3: k ≈ 1.099" (violet). Grey chip "Year 12: a formula for k". On "one" a highlighted empty row "a = ?: k = 1".

### 6. e to the x is its own derivative
> And that base is e. For e to the x, the gradient at zero, one is exactly one, so k is one, and the gradient function is e to the x itself. The derivative of e to the x is e to the **x**. Ride along it. At height one, the gradient is one. At height five, the gradient is five. So on e to the x, the gradient always equals the **height**. Try it at x equals two. The height is e squared, about seven point three nine, so the gradient there is also about seven point three **nine**. And at x equals minus one, both are about zero point three seven. The power rule doesn't apply here, so x times e to the x minus one is wrong. That rule is for x to a power, not a number to the power **x**. Back in the game, a cart that grows like e to the t has gold per hour equal to the gold, at every **moment**.

Visual: stage change: the large graph returns with y = eˣ (teal) and the rider board. Row at the top left, 60 px, framed: "d/dx(eˣ) = eˣ" on "x" (first). The rider runs: at (0, 1) readouts 1.00 | 1.00 | ratio 1.00; at height 5 a small x readout "x ≈ 1.61" (blue, 36 px) shows beside the point, readouts 5.00 | 5.00; the height and gradient readouts tick together; on "height" hand tag "gradient = height". g01 strip below (task 44 px "Find the gradient of y = eˣ at x = 2 and at x = −1."): "x = 2: height e² ≈ 7.39" and on "nine" "gradient ≈ 7.39" (green frame), the violet tangent at (2, 7.39); "x = −1: height and gradient ≈ 0.37" (green frame). On "x" (last) a red slip "d/dx(eˣ) = x e^(x − 1)" writes and is crossed, caption "power rule is for xⁿ". On "moment" the cart badge returns (300 px) beside the graph with readouts "gold: 2.72 kg" and "growing now: 2.72 kg/h" ticking together, hand tag "gold per hour = gold".

### 7. memory aid
> Here's the summary. Every a to the x has a gradient that's a constant times its height. e is the one base where that constant is one. So on e to the x, the gradient always equals the **height**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: y = eˣ small with two tangents and "gradient = height" readouts (1 | 1, 5 | 5). Main line, hand font 56 px: "On eˣ, the gradient always equals the height." On "height" the key line, 40 px: "d/dx(aˣ) = k aˣ; for e, k = 1." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The gradient of y equals four to the x, at x equals zero, is about one point three eight six. Its gradient function is k times four to the x. Find k, then the gradient at x equals one, and at x equals minus a half. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The gradient of y = 4ˣ at x = 0 is about 1.386. The gradient function of 4ˣ is k × 4ˣ for a constant k. Find k, then the gradient at x = 1 and at x = −0.5." The full question stays on screen. Picture slot: y = 4ˣ on x −1 to 1.5, the point (0, 1) marked, no tangents. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> At x equals zero, k times four to the zero is just k, so k is about one point three eight **six**. At x equals one, multiply by four, about five point five four **five**. At x equals minus a half, four to the minus a half is a half, so the gradient is about zero point six nine **three**. Using x times four to the x minus one is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "x = 0: k × 4⁰ = k" and on "six" "k ≈ 1.386" (violet, green frame); on "five" "x = 1: 1.386 × 4 ≈ 5.545" (green frame); on "three" "x = −0.5: 1.386 × ½ ≈ 0.693" (green frame), violet tangents drawing at each point on the picture. On "the slip" a red slip "x × 4^(x − 1)" writes and is crossed, caption "power rule is for xⁿ". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Find the gradient of y equals e to the x at the point where y equals five, and at x equals two, to two decimal places. Then find the equation of the tangent at x equals zero. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Find the gradient of y = eˣ at the point where y = 5, and at x = 2 (to 2 decimal places). Then find the equation of the tangent at x = 0." Picture: y = eˣ on x −2 to 2.2, no points marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> On e to the x, the gradient equals the height. So where y is five, the gradient is **five**. At x equals two, it's e squared, about seven point three **nine**. At x equals zero, the point is zero, one and the gradient is one, so the tangent is y equals x plus **one**. Giving two as the gradient at x equals two is the slip. It's the height, not x.

Visual: the card shrinks to the top. Rows, 44 px: "gradient = height"; on "five" "y = 5: gradient 5" (green frame); on "nine" "x = 2: e² ≈ 7.39" (green frame); "x = 0: point (0, 1), gradient 1"; on "one" "y = x + 1" (green frame), the violet tangent drawing on the picture. On "the slip" a red slip "gradient at x = 2: 2" writes and is crossed, caption "the height, not x". Hold about 1 s.

### 12. handoff
> So the gradient of e to the x always equals its height. Next, we run an exponential backwards. In a knockout tournament, each round knocks out half the teams. Eight teams need three rounds, because two cubed is eight. How many rounds for sixty-four teams? And what power of two gives sixty-four? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the tournament noticeboard `ma11-tournament-board-v1.png` (1,000 px) at the left with the trophy `ma11-trophy-v1.png` (300 px) beside it. On "knockout tournament" a coded 8-team draw writes on the board's paper sheet (three rounds of brackets, blank team slots). On "Eight teams" chip "8 teams → 3 rounds" (8 teal, 3 blue) with "2³ = 8" small. On "sixty-four" chips "64 teams → ? rounds" and "2^? = 64" (2 amber, ? blue). On "next" chips "Next: running 2ˣ backwards" and "?". Hold about 2 s. This is e03's opening frame; the notes scene returns to it silently.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Every y = aˣ passes through (0, 1); its gradient there depends on a.
- e ≈ 2.71828 (Euler's number) is the base whose gradient at (0, 1) is exactly 1.
- d/dx(aˣ) = k aˣ, where k is the gradient at (0, 1) and depends only on a.
- d/dx(eˣ) = eˣ: on y = eˣ, gradient = height.
- The power rule is for xⁿ, not aˣ.

Memory aid (framed card, right side, as in scene 7): *On eˣ, the gradient always equals the height.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e03's opening frame.

## Teaching checks

- **Does it explain causes?** Why the cart's start rate is 0.69 and not 1: the rate climbs across the hour, so the average hides a slower start (1). Why exactly one base works: the gradient at (0, 1) rises steadily with the base, through 1 between 2 and 3 (2). Why the gradient is a constant times the height: one step right is an upward stretch by a, which multiplies every slope by a (4, 5). Why eˣ is its own derivative: its constant is 1 (6).
- **Misconceptions addressed:** e as a variable or as 2.7 (3); eˣ against xᵉ (3); the power rule on aˣ (6 crossed, A1 crossed); every exponential with gradient 1 at (0, 1) (2); the gradient of eˣ at x as x (A2 crossed).
- **Visual standard, item by item:** 1 the cart plate from the first frame; 2 a new stage every 30 to 50 s; 3 the cart readouts, the app slider locking on e, the height-slope rider and the stretch; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 strips in 3 and 6; 8 framed card and five bullets; 9 the slider locking at 2.71828… and the rider's equal readouts.
- **One idea at a time:** the start rate (1), the base sweep (2), e as a number (3), the gradient function of 2ˣ (4), the general k (5), eˣ (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback 25 s and 25 s.
- **Avoided double teaching:** tangents and the app (c04), the gradient function (c05), the constant multiple rule (c07) and (0, 1) (e01) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci93d02049` (1 to 3; key notes 1, 2); `ci7e417be9` (4, 5, A1; key note 3); `ciac4383bd` (6, 7, A2; key note 4).
- **Out of scope by design:** ln a as k (Year 12 d02); compounding; the chain rule (Year 12 d01); logs (e03).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "The gradient of y = 4ˣ at x = 0 is about 1.386. The gradient function of 4ˣ is k × 4ˣ for a constant k. Find k, then the gradient at x = 1 and at x = −0.5."
Model answer: at x = 0, k × 4⁰ = k, so k ≈ 1.386. At x = 1: 1.386 × 4 ≈ 5.545. At x = −0.5: 1.386 × 4^(−0.5) = 1.386 × 0.5 ≈ 0.693. Classic mistake (crossed): "x × 4^(x − 1)".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Find the gradient of y = eˣ at the point where y = 5, and at x = 2 (to 2 decimal places). Then find the equation of the tangent at x = 0."
Model answer: the gradient equals the height: 5 where y = 5; e² ≈ 7.39 at x = 2. At x = 0: point (0, 1), gradient 1, tangent y = x + 1. Classic mistake (crossed): "gradient 2 at x = 2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Cart | 1 kg doubling hourly; 2 kg after 1 h; average 1 kg/h; rate 0.69 at the start, 1.39 at 1 h | 1 |
| Gradients at (0, 1) | 2: 0.693; 2.5: 0.92; 2.7: 0.99; 2.72: 1.0006; 2.8: 1.03; 3: 1.099; 4: 1.386; e ≈ 2.71828: 1 | 2 |
| e | 2.718281828…; e² ≈ 7.389; e⁻¹ ≈ 0.368 | 3 |
| 2ˣ gradients | at heights 1, 2, 4: 0.693, 1.386, 2.773; ratio 0.693; app check at x = 1.5 | 4 |
| k | 2: 0.693; 3: 1.099 | 5 |
| eˣ | height 1, 5: gradient 1, 5; x = 2: 7.39; x = −1: 0.37; cart 2.72 and 2.72 | 6 |
| A1 | k ≈ 1.386; 5.545; 0.693 | 8, 9 |
| A2 | 5; 7.39; y = x + 1 | 10, 11 |
| Handoff | 8 teams, 3 rounds, 2³ = 8; 64 teams (no answer stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `e01e08/verify.py`); Codex to re-check.

- Revision 2 (17 Nov 2026, SymPy 1.14, scratchpad `e-rev2/verify.py`): x on y = eˣ at height 5: ln 5 = 1.609 ≈ 1.61 (scene 6's new readout); k × a⁰ = k.

- Gradient of aˣ at x = 0 is ln a: ln 2 = 0.69315, ln 2.5 = 0.91629, ln 2.7 = 0.99325, ln 2.72 = 1.0006, ln 2.8 = 1.0296, ln 3 = 1.0986, ln 4 = 1.3863. Gradient 1 at a = e = 2.718281828.
- d/dx 2ˣ at x = 0, 1, 2: 0.6931, 1.386, 2.773. At x = 1.5: 2^1.5 = 2.828, gradient 1.961.
- Cart: 2ᵗ gain over [0, 1] = 1; rate (ln 2)2ᵗ at t = 0, 1: 0.693, 1.386.
- e² = 7.389; e⁻¹ = 0.368; e¹ = 2.718.
- A1: ln 4 = 1.3863; × 4 = 5.545; × 4^(−1/2) = 0.6931. A2: e² = 7.39 (2 d.p.); tangent at 0: y = x + 1.

## Memory aid check

- **"On eˣ, the gradient always equals the height."** From the site's own idea and Year 12 d01's exact sentence. Meaning, as said in scene 7: at every point of y = eˣ, the gradient of the tangent equals the y-value there, because d/dx(eˣ) = eˣ. Assumptions checked: it is about y = eˣ only (not keˣ with k ≠ 1 shifted, nor e^(ax), whose gradient is a × height, d01); the key line keeps the general statement k aˣ beside it so the aid is not over-applied to 2ˣ. It helps a new case: the tangent to eˣ at x = 1 has gradient e and passes through (1, e), so it is y = ex, through the origin. Introduced after scenes 1 to 6.
- **Considered, not used:** "e is the base that grows at 100%" (leans on continuous compounding, not Year 11).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; Revision 2 recount, 17 Nov, scratchpad `e-rev2/count.py`): 5,765 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the cart clock, the slider closing in, the rider and the stretch) and the 45 s notes scene: about 521 s. Characters per scene (1 to 13): 732, 673, 545, 817, 533, 776, 190, 247, 327, 206, 336, 308, 75. Speech before the notes is about 428 s, under the 570 s cap. Feedback speech: about 25 s and 25 s.

Reserve trims if the voiced take runs long: scene 3's last sentence (keep the small graph); scene 6's "And at x equals minus one" sentence (keep the row).

## Scene list and build ids

Lesson key `m-a11e02` (route math-a11-e02). Explainer folder `src/explainer/lessons/math-a11-e02`; build inputs in `docs/production/claude-pm/lessons/math-a11-e02/` (at voicing).

In order (13 scene headings): hook-cart-rate, base-sweep, e-is-a-number, gradient-function-2x, gradient-function-ax, ex-own-derivative, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 60 s | 1 | The mine cart and its readouts |
| 60 to 115 s | 2 | Graphing app: the base slider locks on e |
| 115 to 150 s | 3 | e as a number; calculator |
| 150 to 210 s | 4 | Rider on 2ˣ; the stretch; app check |
| 210 to 240 s | 5 | Rule card |
| 240 to 305 s | 6 | Rider on eˣ; worked strip; the cart returns |
| 305 to 320 s | 7 | Framed memory card |
| 320 to 420 s | 8 to 11 | Question cards and countdowns, then feedback |
| 420 to 445 s | 12 | The tournament noticeboard |
| 445 to 490 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: e01's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-e02-learning-review.md`, `science_check` = `checks/m-a11-e02-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, file list): no noticeboard, draw sheet or trophy plate exists; `maths/ma12-cricket-scoreboard-v1.png` and `ma12-fundraiser-board-v1.png` are a scoreboard and a fundraiser board with their own uses, not a pinned draw.

Reused: `ma11-gold-cart-v1.png` (e01's brief; scenes 1, 2 badge, 6).

Need (painted, new; see the Codex asset brief): `ma11-tournament-board-v1.png`, `ma11-trophy-v1.png` (this video's handoff and e03).

Coded: the graphs, tangents, readouts, the graphing-app screen and slider, the calculator key strip, the rider, the stretch copy, the draw brackets, the board, the countdown, the key notes.

### Studio kit use and additions

Uses: `ScreenApp`, `ExponentialDemo`, `HeightSlopeReadout`, `FunctionRider` (tangent at a point), `StudioPlot`, `LiveReadoutBoard`, `WorkingBoard`, `TaskStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Slider lock** (small): a slider that sweeps listed values, then eases to a target (e) and relabels itself. Check: the gradient readout at the lock reads 1.000 (from ln a computed live, not a typed value).
2. **Stretch copy** (small): copy a curve piece on [0, 1], slide it right by 1 and scale it vertically by 2 about y = 0, carrying its tangent. Check: it lands on 2ˣ on [1, 2] within 2 px at five points; the carried tangent's slope reads 1.386.

## Codex asset brief (Maths A11 E02, a tournament noticeboard and a trophy; both open e03)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-e02.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the e02 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-tournament-board-v1.png` (2200 × 1500 px): a cork noticeboard in a plain timber frame, face-on, with one large sheet of blank white paper pinned flat across its central 70 per cent by four coloured pins (code draws the knockout brackets on the sheet). A few small blank index cards pinned near the edges for life; nothing written.
2. `ma11-trophy-v1.png` (700 × 1000 px): a small gold sports cup trophy with two handles on a dark timber base, front view, a blank base plate.

Sidecar JSON for the board (`ma11-tournament-board-v1.json`): the pixel rectangle of the blank sheet's flat area. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-e02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly (including the curly apostrophe in "Euler’s").
3. Confirm ln, logarithms and k = ln a never appear in narration or on screen (only "Year 12 finds a formula for k").
4. Confirm no compound interest, A = Pe^(rt) or chain rule appears.
5. Confirm the stretch argument says both moves (the piece from 0 to 1 is slid one step right, which keeps its slopes, and stretched up by 2, which doubles them) and matches author note d.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on e01's final frame.

## YouTube metadata (draft)

Title: Why e Is Special: Euler's Number and the Derivative of eˣ | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/exponential-and-logarithmic-functions/lesson03.sa.html

A game doubles the gold in a mine cart every hour, so why does its growth rate start at only 0.69 kg an hour? Compare the gradients of y = aˣ where they cross the y-axis, and find the one base where the gradient is exactly 1: Euler's number, e ≈ 2.71828. See why the gradient of any aˣ is a constant times its height, and why eˣ is its own derivative, so its gradient always equals its height. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Exponential and logarithmic functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Examine the gradient of the tangent to the curve y = a^x at its y-intercept for varying values of a, and verify using graphing applications that there is a unique number e ≈ 2.71828182845..., such that the gradient of the tangent to y = e^x at x = 0 is 1, and call this number e Euler’s number"
"Examine the gradient function of y = a^x with graphing applications and identify that the gradient function is d/dx (a^x) = ka^x, for some constant k depending only on a"
"Conclude that Euler’s number, e, is a unique number such that d/dx (e^x) = e^x, that is, e^x is its own derivative"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa576d8dce

Builds on: Exponential graphs; the gradient function. Next: What is a logarithm?

#Year11Maths #MathsAdvanced #EulersNumber #HSCScience

## Open decisions

- **1. The stretch argument (learning review).** Scene 4 explains the constant ratio with "one step right doubles every height, so it doubles every slope", using the c07 constant multiple rule. It is a picture argument, not a proof; the syllabus asks students to "identify" the result with graphing applications, which the app check does. If the reviewer finds the stretch hard to follow at speed, keep the readout ratio and the app overlay and cut the stretch to one sentence. **Closed (Revision 2):** keep the stretch, with the slide said aloud (learning review finding 2).
- **2. Pronouncing Euler (voicer).** The Google voice may say "YOO-ler"; the voicer adds a phonetic respelling "Oiler" if needed and reports it.
- **3. The cart's average against its start rate (root).** The hook's surprise (1 kg gained in the hour, but 0.69 kg/h at the start) relies on students reading "right now" as the tangent. The grey chip names it; if root prefers, scene 1 can drop the average sentence.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from e01, c04, c05 and c07; check that the start rate feels surprising, that the slider makes e feel found rather than announced, that the stretch makes "constant times the height" caused, and that "gradient always equals the height" is heard and seen as d01 needs), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" above and `../checks/m-a11-e01-e08-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A. The narration says "the natural log of" wherever ln is read, so the voicer needs no respelling for ln.
