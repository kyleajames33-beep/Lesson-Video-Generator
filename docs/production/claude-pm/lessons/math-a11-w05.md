# Maths A11 W05: What does the discriminant tell us before we solve? Δ = b² − 4ac, two, equal or no real roots, rational or irrational roots, and unknown coefficients (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,600 characters by script (build parser rules), 14 scene headings, about 498 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w05-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 4 (spoken money): **accepted**, reviewer's wording ("six dollars eighty-four ... to the cent").
2. Optional, scene 13 ("flips the sign"): **accepted.** Spoken "flips the inequality sign"; the handoff chip reads "Next: why does dividing by a negative flip the inequality sign?". w06 opens on this frame without quoting the chip, so the join holds.

Narration now 5,600 characters by script, about 498 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: fifth video of Year 11 Mathematics Advanced (2024), outline order 5, Working with functions, Algebraic techniques. Pre-design pack: `../pre-design/maths-a11/math-a11-w05.md`. Site lesson (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson10.sa.html` (The Discriminant), SHA256 `29b461b91831254fd2a241c18f6008ea86660d180600c5dbfa1b956f8d96d5e7`; its three worked examples are used with the site's numbers unchanged, and its two logged copy errors (S11-01 and S11-02) are not taught (Decisions). Route entry: `math-a11-w05`. Visual system: maths studio kit; painted plate for the kayak hire (prefix `ma11-`); the discriminant dial, algebra and readouts coded.

Owner rules applied: as w01 to w04.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Algebraic techniques; NESA codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci887fe9c5`: "Define the discriminant as Δ = b^2 - 4ac and use it to solve problems involving the number of real roots of a quadratic equation and determine the conditions for roots to be equal, distinct, real or rational"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w04's handoff frame (the formula with √(b² − 4ac) boxed, "rug at 10: 44", the kayak jetty and "Takings exactly $210 a day?"). Teaches: the discriminant Δ = b² − 4ac and why its sign gives two distinct, two equal or no real roots; the kayak model answered before solving ($210 impossible, $200 the most, two prices below); the perfect-square condition for rational roots (with rational a, b, c); site we-1 (number and nature), we-2 (unknown coefficient, equal roots) and we-3 (show no real roots); "real roots" means Δ ≥ 0. Stops at using Δ. Not taught: what Δ means for the graph of a parabola (w14; no parabola is drawn in this video); quadratic inequalities such as (m − 2)² ≥ 16 (w18); solving linear inequalities such as 1600 − 8T ≥ 0 (w06, the handoff).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a kayak hire shop on a lake, its price and its daily takings (painted plate, live).** Chosen over the pack's rope-fenced pen (math-a12-d18 is a sheep pen against a wall), café revenue (food is w02's and w07's context in this batch) and the basketball arc (a height curve against rim height is a graph meaning that belongs to w14). The hire shop gives a money question the discriminant answers before any solving: with p dollars a hire and 40 − 2p hires a day, takings T = p(40 − 2p), so 2p² − 40p + T = 0 and Δ = 1600 − 8T. It shows every case in one model: T = 210 gives Δ = −80 (no price), T = 200 gives Δ = 0 (one price, $10), T = 192 gives Δ = 64 (two whole-dollar prices, $8 or $12, rational), T = 180 gives Δ = 160 (10 ± √10, irrational). No Year 12 Maths video uses kayaks, water hire or pricing. These are model numbers, not business advice.
- **Simulations (standard item 3).**
  1. `DiscriminantDial` (scene 3, new part on `ParameterSlider` and `LiveReadoutBoard`): an amber slider for the target takings T sweeps 220 → 140; a live readout "Δ = 1600 − 8T" (violet) with a sign badge ("negative", "zero", "positive"); two price chips that are absent for Δ < 0, appear as one merged chip "$10" at Δ = 0, and split apart as T falls ($8 and $12 at 192, $5 and $15 at 150), each chip computed from the formula; a "perfect square?" flag lights at 192 and 150. The visual surprise (two prices sliding together, merging and vanishing) happens on the dial.
  2. `RootFork` (scene 2, new part): the formula's ± drawn as a fork; with Δ > 0 two paths separate; with Δ = 0 they lie on top of each other (one path, labelled "equal"); with Δ < 0 the root sign shows a red "no real root" stop.
- **Colour roles (fixed for the whole video).**
  - **Δ and its value: violet** (`MATH_GRADIENT` token);
  - **a: blue**, **b: teal**, **c: amber** (as w04, carried with their signs);
  - **the unknown coefficient (k, m) and the target T: amber with a dashed outline** (it plays c's role in the kayak model and b's role in we-2; the dashed outline marks "unknown");
  - **answer: green**; **mistake: red**; ink otherwise.
- **Large type, handwritten voice.** As w01. Hand tags: "tells the cases apart", "two roots", "equal roots", "no real roots", "no price works", "one price", "two prices", "the most it can take", "perfect square", "rational a, b, c", "signs attached", "(−5)² = +25", "keep ±", "≥: equal roots are real".
- **Stage changes (standard item 2):** the jetty and the equation (1); the formula and the fork (2); the dial (3); the rational flag board (4); three g01 boards (5 to 7); memory card (8); question cards (9 to 12); the inequality handoff (13); key notes (14).
- **Worked examples (g01 layout).** 5: site we-1 (crossed "(−5)² = −25, Δ = −49, no real roots"). 6: site we-2 (crossed "k = 6 only", caption "keep ±"). 7: site we-3 (no slip; the "real means ≥ 0" contrast is its second half). Feedback scenes: givens strip, framed answer, one crossed slip each.
- **Memory aid.** Framed card: "Plus two, zero one, minus none." Key: "Δ > 0: two distinct real roots. Δ = 0: two equal roots. Δ < 0: no real roots. Δ a perfect square (rational a, b, c): rational roots." Badge: the merging price chips.
- **Visual surprise.** On the dial the two prices slide together, merge into one at exactly $200, and vanish beyond it, so "$200 is the most" is seen, not just computed.
- **Site corrections applied (`../site-corrections-maths-a11.md`).** S11-01: the perfect-square test is taught with its condition, "as long as a, b and c are rational", and the site's claim that coefficients are always rational in this course is not repeated (the syllabus allows real coefficients). S11-02: Δ = 0 is taught as "two equal roots, so one distinct real root", never as only "one answer".
- **Learner question (outline, kept).** Answer chain: Δ sits under the root (2); its sign decides two, equal or none (2); so it answers a real question before solving (3); a perfect-square Δ gives rational roots (4); the same reasoning finds unknown coefficients (6, A1) and proves there are no roots (7).
- **Plain meanings at first use.** Discriminant: "the part under the root, b² − 4ac; it tells the cases apart". Δ: "the Greek capital delta, its usual symbol". Distinct: "different". Equal roots: "the two roots are the same number". Real roots: "roots that are real numbers, whether different or equal". Nature of the roots: "how many, and whether they are equal, rational or irrational".
- **No graphs.** No parabola thumbnails are shown (the pack's optional preview is dropped) to keep the graph meaning for w14; the dial uses price chips, not curves.
- **Attempts.** A1 (pack question 1, changed): "equal roots" instead of the pack's "real roots", because the pack's version needs (m − 2)² ≥ 16, a quadratic inequality taught in w18. Answer m = 6 or m = −2; crossed "m = 4 or 0" (used 4 for 4ac). A2 (pack question 2): 5x² − 2x − 3 = 0, Δ = 64, two distinct rational roots; crossed "Δ = −56" (the sign of c lost).
- **Mistake scene:** none separate. Squaring a negative b without its sign (5 crossed); "Δ = 0 means no roots" (2, positively); one sign of k (6 crossed); "real roots means Δ > 0" (7, positively); perfect square without the rational condition (4, positively); a lost sign in 4ac (A1 and A2 crossed).
- **Handoff (outline next: w06, "Why does multiplying by a negative flip an inequality?").** Scene 13 shows "Δ ≥ 0: 1600 − 8T ≥ 0", the row "−8T ≥ −1600" and "÷ (−8): T ? 200" with a red-pencil question mark on the inequality sign, beside a small jetty badge, and the chip "Next: why does dividing by a negative flip the inequality sign?". This frame is w06's opening frame.
- **Site sources used:** lesson 10 `the-discriminant-is-what-sits` (Δ under the root), `what-the-discriminant-tells-you` (three cases, rational test, corrected per S11-01 and S11-02), `model` (we-1, we-2, we-3), traps (sign of b, k = ±6, ≥ for real roots).
- **Entry knowledge (route):** w04 (the quadratic formula and √(b² − 4ac) inside it); w03 (rational and irrational numbers, surds).
- **Draft route entry (root to adopt).** id `math-a11-w05`; syllabusActions `ci887fe9c5`; start "Recall the quadratic formula." Stop "Define the discriminant and use it for the number of real roots, equal roots, and rational versus irrational roots, including unknown-coefficient problems." Next: "math-a11-w06: 1600 − 8T ≥ 0 needs a division by −8".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Model: hires per day 40 − 2p (0 ≤ p ≤ 20); T = p(40 − 2p) = 40p − 2p²; 2p² − 40p + T = 0, a = 2, b = −40, c = T; Δ = 1600 − 8T.
  (b) Dial values: T = 210, Δ = −80, no real p; T = 200, Δ = 0, p = 10 (20 hires); T = 192, Δ = 64, p = 8 or 12 (24 or 16 hires); T = 180, Δ = 160, p = 10 ± √10 = 6.84 or 13.16; T = 150, Δ = 400, p = 5 or 15. The rounded prices $6.84 and $13.16 are shown in grey as approximations only.
  (c) Rational test: with a, b, c rational, √Δ rational ⟺ roots rational. Counter-example kept out of learner copy: x² − 2√2x + 1 = 0 has Δ = 4 but roots √2 ± 1 (S11-01).
  (d) Pronunciations: "delta"; "b squared minus four a c"; "sixteen hundred minus eight T"; "one ninety-two"; "ten plus or minus root ten"; "x squared, plus m minus two, times x, plus four".

Main question: *A kayak hire takes p(40 − 2p) dollars a day at p dollars a hire. Can it take exactly $210? One number under the square root in the formula answers that before any solving. What does the discriminant tell us before we solve?*
Entry knowledge (w04, w03): the quadratic formula; rational and irrational numbers.
Stops after: the three cases with reasons, the kayak model's limits, the rational test with its condition, unknown coefficients for equal roots, and "real roots means Δ ≥ 0". No graphs, no quadratic inequalities.
Handoff: math-a11-w06: "1600 − 8T ≥ 0 → −8T ≥ −1600 → T ? 200".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): Δ violet; a blue; b teal; c amber; unknowns and the target amber with a dashed outline; answer green; mistake red; ink otherwise. Header strip "MATHEMATICS ADVANCED · THE DISCRIMINANT". Scene headings in the hand font, 44 px.

### 1. hook: can the kayaks take $210?
> Here's a kayak hire shop on a lake. The owner charges p dollars a hire, and in this model each extra dollar on the price loses two hires a day. So the shop gets forty minus two p hires a day, and its takings are p times forty minus two p. The owner asks, can we take exactly two hundred and ten dollars in a **day**? That's a quadratic, two p squared minus forty p plus two hundred and ten equals **zero**. We could start solving. But one number, under the square root in the formula, answers the question first. So what does the discriminant tell us before we solve?

Visual: opens on w04's handoff frame exactly (formula with √(b² − 4ac) boxed amber, "rug at 10: 44 > 0", the kayak jetty and the chip "Takings exactly $210 a day?"). The formula slides to a 30 px strip at the top; the jetty (`ma11-kayak-jetty-v1.png`) grows to 640 px wide at the left; heading writes "Can the kayaks take $210?". On "p dollars a hire" the blank sign on the plate fills with coded text "$p per hire" (sign rectangle from the sidecar). A `LiveReadoutBoard` at the right: "price p", "hires a day 40 − 2p", "takings p(40 − 2p)", with p = $10 shown as an example (20 hires, $200), hand tag "each $1 more: 2 fewer hires". On "day" the takings row sets to "= 210" with the 210 in amber dashed outline. On "zero" rows write: "40p − 2p² = 210", then "2p² − 40p + 210 = 0" with 2 blue, −40 teal, 210 amber. On the last sentence the boxed √(b² − 4ac) in the top strip glows violet.

### 2. the discriminant and its three cases
> Look inside the quadratic formula. Everything hangs on the part under the root, b squared minus four a c. It's called the discriminant, because it tells the cases apart, and we write it with the Greek letter delta. If delta is positive, its root is a real number, and plus or minus gives two different **roots**. If delta is zero, the root is zero, and plus or minus zero adds nothing. The two roots are equal, so there's one distinct real **root**. If delta is negative, there's no real square root at all, because no real number squares to a negative. So there are no real **roots**. Remember the rug at ten square metres? Its delta was forty-four, positive, so it had two roots, and we kept the positive one.

Visual: stage change to the formula at 64 px, centred; b² − 4ac lifts out of the root sign into a violet box labelled "Δ = b² − 4ac", hand tag "tells the cases apart". `RootFork` under it: the ± becomes a fork. On "roots" (first) Δ shows "+", the fork's two paths separate to two chips "root 1", "root 2", hand tag "two distinct real roots". On "root" the fork's paths lie on top of each other, one chip labelled "two equal roots", hand tag "± 0 adds nothing". On "roots" (last) the root sign takes a red stop badge "√(negative): no real number", hand tag "no real roots". On "Remember the rug" a 200 px rug badge from w04 slides in with "Δ = 44 > 0: two roots, kept the positive one" (grey). The three outcomes collect into a 36 px three-row strip at the right that stays for scenes 3 to 7.

### 3. the dial: the kayaks answered
> Back to the kayaks. Here a is two, b is minus forty, and c is the target takings, call it T. So delta is sixteen hundred minus eight T. For two hundred and ten, delta is sixteen hundred minus sixteen eighty, which is minus **eighty**. It's negative, so no price works. Now slide the target down, and watch the prices **appear**. At two hundred, delta is exactly zero, and there's one price, ten dollars. Below that, delta is positive, and the price splits in two. At one ninety-two, it's eight dollars or twelve **dollars**. Both make sense. Eight dollars brings twenty-four hires, and twelve dollars brings sixteen, and each pair multiplies to one ninety-two. So two hundred dollars is the most this model can ever take, and we knew it without solving a single equation.

Visual: stage change to `DiscriminantDial`. The jetty thumbnail (300 px) at the top left. Givens strip: "a = 2", "b = −40", "c = T" (dashed amber). Row "Δ = (−40)² − 4(2)(T) = 1600 − 8T" (violet). On "eighty" an amber slider "target T" (900 px) sits at 210; readout "Δ = 1600 − 1680 = −80" with the red stop badge, hand tag "no price works". On "appear" the slider moves 210 → 200: Δ runs down to 0, and one green price chip "$10" rises from below the slider, hand tag "one price". The slider moves on to 192: Δ reads 64 and the chip splits into "$8" and "$12" that slide apart, hand tag "two prices"; on "Both make sense" the hires readout shows "$8 × 24 = 192" under the $8 chip and "$12 × 16 = 192" under the $12 chip. It continues to 150 (Δ 400; "$5" and "$15") and returns to 192 on "dollars". Then the slider runs back up past 200: the two chips slide together, merge into "$10" and drop away at 200.01; on the last sentence a green bracket marks "T ≤ 200" on the slider, hand tag "the most it can take". A grey tag: "a model: 40 − 2p hires a day".

### 4. rational or irrational roots
> Delta tells us one more thing. When it's a perfect square, its root is a whole number. Then the formula only adds, subtracts and divides rational numbers, so the roots are rational, as long as a, b and c are rational. At one ninety-two, delta is sixty-four, which is eight squared, so the prices are whole dollars. At one eighty, delta is one hundred and sixty, which isn't a perfect square, so the prices are ten plus or minus root ten, irrational **numbers**. That's about six dollars eighty-four, or thirteen dollars sixteen, once you **round** to the cent.

Visual: camera continue on the dial; it shrinks to the left half. At the right, two short boards. Top: "T = 192: Δ = 64 = 8²", a teal "perfect square?" flag lights green, row "p = (40 ± 8)/4 = 12 or 8", hand tag "perfect square". Bottom on "numbers": "T = 180: Δ = 160", flag stays grey, row "p = (40 ± √160)/4 = 10 ± √10" (√10 in w03 blue), hand tag "irrational". On "round" grey readouts "≈ $6.84, $13.16". A 36 px condition chip under both, amber: "rational roots needs a, b, c rational", hand tag "rational a, b, c".

### 5. worked example 1: number and nature
> Let's practise. Determine the number and nature of the roots of two x squared minus five x plus three equals zero. Read the coefficients with their signs. a is two, b is minus five, and c is **three**. Delta is minus five, squared, minus four times two times three. Minus five squared is plus twenty-five, so delta is twenty-five minus twenty-four, which is **one**. One is positive, and it's a perfect square, so there are two distinct rational **roots**. Squaring minus five to get minus twenty-five would turn this into a no-roots answer, which is **wrong**.

Visual: clear change to the g01 board (site we-1). Task strip: "Determine the number and nature of the roots". Equation strip, 52 px: "2x² − 5x + 3 = 0". Givens card on "three": "a = 2" (blue), "b = −5" (teal), "c = 3" (amber), hand tag "signs attached". Rows: "Δ = (−5)² − 4(2)(3)" with "(−5)² = +25" tagged; on "one" "= 25 − 24 = 1" (violet). On "roots" "Δ = 1 > 0, and 1 = 1²: two distinct rational roots" in a green frame. On "wrong" a red slip "(−5)² = −25, Δ = −49: no real roots" writes and is crossed, caption "(−5)² = +25".

### 6. worked example 2: an unknown coefficient
> Now an unknown coefficient. Find the values of k for which x squared plus k x plus nine equals zero has equal roots. Equal roots means delta equals **zero**. Here delta is k squared, minus four times one times nine, so it's k squared minus thirty-six. Set it to zero, so k squared is thirty-six, and k is plus or minus **six**. Both values work, so keep both **signs**. Check k equals six. x squared plus six x plus nine is x plus three, all squared, so both roots are minus three. They're equal, just as delta promised.

Visual: clear change to the g01 board (site we-2). Task strip: "Find the values of k for which the equation has equal roots". Equation strip: "x² + kx + 9 = 0" (k teal with a dashed outline). Givens card: "a = 1", "b = k", "c = 9", and the condition chip "equal roots" (from the scene 2 strip). On "zero" row "Δ = 0", hand tag "equal roots ⟶ Δ = 0". Rows: "k² − 4(1)(9) = 0", "k² = 36", on "six" "k = ±6" in a green frame. A small number line (w06's ray part, points only) marks −6 and 6. On "signs" a red slip "k = 6" writes and is crossed, caption "keep ±: (−6)² = 36 too". On "Check k equals six" a check row writes: "k = 6: x² + 6x + 9 = (x + 3)², roots −3 and −3" with a green tick, hand tag "equal".

### 7. worked example 3: no real roots, and what "real" means
> Show that three x squared plus x plus five equals zero has no real roots. Delta is one squared, minus four times three times five, which is one minus sixty, minus fifty-**nine**. It's negative, so there's no real square root, and no real roots. In a show-that question, write the reason with the conclusion, delta is less than zero, so there are no real roots. And watch the wording in questions. Real roots means delta is greater than or equal to zero, because equal roots are real **too**.

Visual: clear change to the g01 board (site we-3). Task strip: "Show that the equation has no real roots". Equation strip: "3x² + x + 5 = 0". Givens: "a = 3", "b = 1", "c = 5". On "nine" rows "Δ = 1² − 4(3)(5) = 1 − 60 = −59" and "Δ < 0, so no real roots" in a green frame, with the red stop badge from scene 2; on "show-that" the words "Δ < 0, so" are underlined with the hand tag "reason with the conclusion". On "too" a condition table writes under the board, 40 px: "two distinct real roots: Δ > 0", "equal roots: Δ = 0", "real roots: Δ ≥ 0", "no real roots: Δ < 0", with "≥" circled violet and hand tag "≥: equal roots are real".

### 8. memory aid
> Here's a way to remember it. Plus two, zero one, minus none. A positive delta gives two roots, zero gives one, which is really two equal ones, and a negative delta gives none. And if delta is a perfect square, the roots are **rational**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the merging price chips badge (two chips sliding into one, then gone). Main line, hand font 60 px: "Plus two, zero one, minus none." On "rational" the key lines, 36 px: "Δ > 0: two distinct real roots · Δ = 0: two equal roots · Δ < 0: no real roots" and "Δ a perfect square (rational a, b, c): rational roots". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the values of m for which x squared, plus m minus two, times x, plus four, equals zero has equal roots. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Find the values of m for which x² + (m − 2)x + 4 = 0 has equal roots." Equation at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Equal roots means delta equals zero. Here a is one, b is m minus two, and c is four, so delta is m minus two, all squared, minus **sixteen**. Set that to zero. m minus two, squared, is sixteen, so m minus two is plus or minus four, and m is six or minus **two**. If you got four or zero, you used four instead of sixteen for four a **c**.

Visual: the card shrinks; `GivensStrip`: "equal roots", "a = 1", "b = m − 2", "c = 4"; "equal roots" underlined first. On "sixteen" row "Δ = (m − 2)² − 4(1)(4) = (m − 2)² − 16". Rows "(m − 2)² = 16", "m − 2 = ±4", on "two" "m = 6 or m = −2" in a green frame. On "c" a red slip "(m − 2)² − 4 = 0, so m = 4 or 0" writes and is crossed, caption "4ac = 4 × 1 × 4 = 16". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Without solving, describe the roots of five x squared minus two x minus three equals zero. Pause here to answer.

Visual: `QuestionCard`: "Without solving, describe the nature of the roots of 5x² − 2x − 3 = 0." Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Here a is five, b is minus two, and c is minus **three**. Delta is four, minus four times five times minus three, which is four plus sixty, so sixty-**four**. It's positive, and it's a perfect square, so there are two distinct rational **roots**. If you got minus fifty-six, the minus sign on c went **missing**.

Visual: the card shrinks; `GivensStrip`: "a = 5", "b = −2", "c = −3" on "three", with "without solving" underlined. On "four" (sixty-four) row "Δ = (−2)² − 4(5)(−3) = 4 + 60 = 64". On "roots" row "64 > 0 and 64 = 8²: two distinct rational roots" in a green frame. On "missing" a red slip "Δ = 4 − 60 = −56" writes and is crossed, caption "−4(5)(−3) = +60". Hold about 1 s.

### 13. handoff
> The kayak shop needs delta to be at least zero, so sixteen hundred minus eight T is greater than or equal to zero. Solving that means dividing both sides by minus eight, and with an inequality, that's not as simple as it looks. Next, why multiplying or dividing by a negative flips the inequality **sign**.

Visual: the memory line shows small at the top, then fades. Board: the jetty badge (300 px) at the left; rows at 52 px: "Δ ≥ 0", "1600 − 8T ≥ 0", "−8T ≥ −1600", then "÷ (−8): T ? 200" with the "?" in red pencil over the inequality sign. On "sign" the chip "Next: why does dividing by a negative flip the inequality sign?". Hold about 2 s. This is w06's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book". Bullets 38 px in the left 58 to 60 per cent.
> Here are the key notes. Pause the video if you need more time to copy them.

- Discriminant: Δ = b² − 4ac (signs attached).
- Δ > 0: two distinct real roots. Δ < 0: no real roots.
- Δ = 0: two equal roots (one distinct root).
- Real roots: Δ ≥ 0.
- Δ a perfect square, with a, b, c rational: rational roots.

Memory aid (framed card, right side, as in scene 8): *Plus two, zero one, minus none.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w06's opening frame.

## Teaching checks

- **Does it explain causes?** Why Δ decides the number of roots: it sits under the root; ± of a positive root gives two values, ± 0 gives one, and a negative has no real root (2). Why $210 is impossible and $200 the most: Δ = 1600 − 8T is negative above 200 (3). Why a perfect square gives rational roots: √Δ is then rational, and the rest of the formula is rational when a, b, c are (4). Why k = ±6: both square to 36 (6). Why "real" includes Δ = 0: equal roots are real numbers (7).
- **Misconceptions addressed:** sign of b squared (5 crossed); "Δ = 0 means no roots" (2, 8); one sign only (6 crossed); Δ > 0 for real roots (7); perfect square without the rational condition (4); lost sign in 4ac (feedback 1 and 2 crossed).
- **Visual standard, item by item:** 1 the painted jetty from the first frame, returning in 3, 4, 13; 2 a new stage every 25 to 60 s; 3 `DiscriminantDial` (prices appear, merge and split live) and `RootFork`; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards; 8 framed card and five bullets; 9 the price chips merging at $200 and vanishing.
- **One idea at a time:** the cases (2), then the model (3), then rationality (4), then one task type per worked example.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 and 22 s.
- **Avoided double teaching:** the formula (w04) and irrational numbers (w03) are recalled, not re-taught.
- **Syllabus coverage:** `ci887fe9c5` define Δ (2); number of real roots (2, 3, 5, 7, A2); equal (2, 6, A1); distinct (2, 5, A2); real (7); rational (4, 5, A2); "solve problems" (3, 6, A1).
- **Out of scope by design:** the parabola's position (w14); quadratic inequalities (w18); solving 1600 − 8T ≥ 0 (w06).

## Practice questions and model answers

**Attempt 1 (scene 9; adapted from pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Find the values of m for which x² + (m − 2)x + 4 = 0 has equal roots."
Model answer: Δ = (m − 2)² − 16 = 0; (m − 2)² = 16; m − 2 = ±4; m = 6 or m = −2. Classic mistake (crossed): (m − 2)² − 4 = 0, giving m = 4 or 0.

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Without solving, describe the nature of the roots of 5x² − 2x − 3 = 0."
Model answer: Δ = (−2)² − 4(5)(−3) = 64 > 0 and a perfect square, with rational coefficients, so two distinct rational roots. Classic mistake (crossed): Δ = 4 − 60 = −56.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Model | hires 40 − 2p; T = p(40 − 2p); 2p² − 40p + T = 0; Δ = 1600 − 8T; at p = 10: 20 hires, $200; $8 × 24 = $12 × 16 = 192 | 1, 3 |
| Dial | T = 210: Δ −80; 200: 0, p = 10; 192: 64, p = 8, 12; 180: 160, p = 10 ± √10 ≈ 6.84, 13.16; 150: 400, p = 5, 15 | 3, 4 |
| Rug recall | Δ = 44 (w04) | 2 |
| we-1 (site) | Δ = 25 − 24 = 1; two distinct rational; crossed −49 | 5 |
| we-2 (site) | k² − 36 = 0; k = ±6; check k = 6: (x + 3)², roots −3, −3; crossed k = 6 | 6 |
| we-3 (site) | Δ = 1 − 60 = −59; no real roots | 7 |
| A1 | (m − 2)² − 16 = 0; m = 6 or −2; crossed 4 or 0 | 9, 10 |
| A2 | Δ = 4 + 60 = 64; two distinct rational (roots 1 and −3/5, not shown); crossed −56 | 11, 12 |
| Handoff | 1600 − 8T ≥ 0; −8T ≥ −1600; T ≤ 200 (shown as "T ? 200") | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks2.py`); Codex to re-check.

- 2p² − 40p + T = 0: Δ = 1600 − 8T. T = 210: −80 (p = 10 ± √5 i, no real p). T = 200: 0, p = 10. T = 192: 64, p = 8, 12. T = 180: 160, p = 10 ± √10 = 6.83772, 13.16228. T = 150: 400, p = 5, 15.
- p = 8: 24 hires, $192; p = 12: 16 hires, $192; p = 10: 20 hires, $200.
- 2x² − 5x + 3: Δ = 1; roots 1, 3/2.
- x² + kx + 9 equal roots: k = ±6; k = 6 gives (x + 3)², k = −6 gives (x − 3)².
- 3x² + x + 5: Δ = −59.
- A1: (m − 2)² = 16 gives m = −2, 6; slip (m − 2)² = 4 gives m = 0, 4.
- A2: Δ = 64; roots 1 and −3/5.
- 1600 − 8T ≥ 0 ⟺ T ≤ 200.

## Memory aid check

- **"Plus two, zero one, minus none."** Original rhyme. Meaning, as said: Δ > 0 gives two distinct real roots, Δ = 0 one distinct root (two equal roots), Δ < 0 no real roots. Assumptions checked: a ≠ 0 (a quadratic); "roots" means real roots (the card's key says "real"); "one" is glossed in speech and on the card as two equal roots (S11-02). The rational line keeps its condition (S11-01). Introduced after the cases (2) and the dial (3).
- **Considered, not used:** "Delta decides" (no content to recall).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,600 characters**, 14 scene headings. Characters per scene (1 to 14): 559, 699, 759, 552, 545, 508, 483, 233, 141, 326, 122, 296, 302, 75.

At 13.3 characters per second the speech before the notes is about 415 s. Holds: two 10 s countdowns, memory-card hold 2 s, feedback holds 2 s, handoff hold 2 s, about 12 s of settling (the dial sweeps, the fork, the flag board); notes 45 s. Total **about 498 s**, inside the band and under the cap.

Reserve trims if the voiced take runs long: scene 4's last sentence (keep the grey readouts); scene 1's "We could start solving." (about 2 s).

## Scene list and build ids

Lesson key `m-a11w05` (route math-a11-w05). Explainer folder `src/explainer/lessons/math-a11-w05`; build inputs in `docs/production/claude-pm/lessons/math-a11-w05/` (at voicing).

In order (14 scene headings): hook-kayaks, discriminant-cases, kayak-dial, rational-roots, worked-nature, worked-unknown, worked-no-real, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 44 s | 1 | The painted kayak jetty, its sign and the takings readout |
| 44 to 98 s | 2 | Formula with Δ lifted out; RootFork in three states |
| 98 to 199 s | 3 to 4 | DiscriminantDial: prices appear, merge at $200 and split; the rational flag board |
| 199 to 319 s | 5 to 7 | Three g01 boards (site we-1, we-2, we-3) and the condition table |
| 319 to 338 s | 8 | Framed memory card |
| 338 to 427 s | 9 to 12 | Question cards and countdowns, then feedback with givens strips and crossed slips |
| 427 to 450 s | 13 | 1600 − 8T ≥ 0 with the red question mark on the sign |
| 450 to 495 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempts and key-notes (`hold`). Transitions: w04's last frame continues into 1; 1 to 2 stage change to the formula; 2 to 3 stage change to the dial; 3 to 4 camera continue; 4 to 5, 5 to 6, 6 to 7 clear change; 7 to 8 clear change to the card; attempts and feedback: the card shrinks; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w05-rev1-learning-review.md`, `science_check` = `checks/m-a11-w05-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only): no kayak, boat-hire or jetty plate exists. `physics` and `biology` lake plates (`y11-lake-shore-grassland-v1.png`, `m8-lake-clear-v1.png`) are ecology scenes with no hire shop; `maths/ma12-tide-board-v1.png` is t03's boat-ramp tide board (t03's anchor). Not used.

Need (painted, new): `ma11-kayak-jetty-v1` (also needed for w04's handoff frame).

Coded: the sign text, readouts, the fork, the dial and price chips, the flags, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`; the number-line points from w06's `NumberLineRay`.

Additions:
1. **`DiscriminantDial`**: a slider for a parameter of a quadratic, a live Δ readout with a sign badge, root chips computed from the formula that appear, merge and split, and a perfect-square flag. Check: chips exist only when Δ ≥ 0, merge exactly at Δ = 0, and their values satisfy the quadratic.
2. **`RootFork`**: the ± drawn as a fork with three states (two paths, overlaid paths, stop badge). Check: state is set by the sign of the supplied Δ.

## Codex asset brief (Maths A11 W05, a kayak hire jetty)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w05.md`, route entry math-a11-w05. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-lighthouse-v1.png`; at least 8 per cent clear margin; no text, prices, numbers, logos, brand names, people, paddlers, hands, faces, animals, glow or ground shadow. Never stretch.

1. `ma11-kayak-jetty-v1.png` (2400 × 1400 px): a short timber jetty on calm lake water, side view at slight elevation; three plain sit-on-top kayaks (one red, one yellow, one blue) resting on a low timber rack at the jetty's land end, a paddle leaning on the rack, and a small **blank** wooden A-frame sign beside the rack, its face clean and flat (code writes "$p per hire" on it). The water fades to transparent at the left, right and bottom edges; no far shore or sky.

Sidecar JSON (`ma11-kayak-jetty-v1.json`): the sign face's four corner points in px (code writes on it, following its slight angle). This plate is also needed for w04's handoff frame, so paint it before the w04 build.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the model algebra (author note a) and that the dial's price chips are computed and appear only for Δ ≥ 0.
3. Confirm S11-01 and S11-02 are applied: the rational test always carries "a, b, c rational"; Δ = 0 is always "two equal roots" or "one distinct root", never only "one answer".
4. Confirm no parabola or graph appears (w14's job) and no quadratic inequality is solved.
5. Confirm site we-1 to we-3 are unchanged; A1's change from "real roots" to "equal roots" is recorded; both attempts carry every demand.
6. Confirm the syllabus quote matches the crosswalk exactly; no site label in learner copy or metadata.
7. Confirm no em dash (U+2014), Australian spelling, narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w04's final frame and scene 13's frame matches w06's opening frame.

## YouTube metadata (draft)

Title: The Discriminant: How Many Roots Before You Solve? | Year 11 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson10.sa.html

Can a kayak hire take exactly $210 a day? The discriminant, Δ = b² − 4ac, answers before you solve. See why a positive Δ gives two distinct real roots, zero gives two equal roots and a negative Δ gives none, watch two prices merge and vanish as the target rises, and learn when the roots are rational. Then find unknown coefficients for equal roots and show an equation has no real roots. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. The kayak numbers are a maths model, not business advice.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the discriminant as Δ = b^2 - 4ac and use it to solve problems involving the number of real roots of a quadratic equation and determine the conditions for roots to be equal, distinct, real or rational"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Solving quadratic equations (previous video). Next: Linear inequalities.

#Year11Maths #MathsAdvanced #Discriminant #HSCScience

## Open decisions

- **1. A1 changed from the pack (root).** The pack's "real roots" version needs (m − 2)² ≥ 16, a quadratic inequality (w18). Changed to "equal roots". The real-roots version can go to w18 or the practice video p01.
- **2. Money anchor and w19 (root).** w05 takes a pricing-and-takings context. The later quadratic-models video (w19, best value in context) should not reuse kayak hire or a price-demand takings model, or it should cite this one as a callback.
- **3. "Plus two, zero one, minus none" (learning review).** Check that "zero one" is not remembered as "Δ = 0 has one root, full stop"; the card and key note say "two equal roots".
- **4. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w05-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w04 only; check that "the part under the root" is enough to motivate Δ; that the dial makes "$200 is the most" feel discovered; that the rational condition is clear without the irrational-coefficient example), then the Codex maths check and error check, then voicing and a build to grade A.
- The fork and the dial carry the explanation; judge them at playback speed. Every chip must be computed from the formula at the slider value.
