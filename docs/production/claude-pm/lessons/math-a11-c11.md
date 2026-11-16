# Maths A11 C11: How do both factors contribute to the derivative of a product? Why the derivatives don't simply multiply, the rectangle behind u dv/dx + v du/dx, f(x)g′(x) + f′(x)g(x), and a factor that needs the chain rule (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,640 characters by script (see "Narration length estimate"), 13 scene headings, about 511 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c11-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 ("grows thirty-eight dollars a week, each month"): **accepted**, reviewer's wording ("So right now, her income is growing at thirty-eight dollars a week, per month. The real first month adds a bit more, forty, because both factors keep growing."), row "rate now = 8 + 30 = $38 a week, per month", plus a grey chip "first month: + $40 (the corner adds 2)" on the new cue "growing". Scene 5's "each month" also became "per month". Open decision 2 is settled ("per month").
2. Optional, feedback 2 (factorising step and an ambiguous phrase): **accepted**: unspoken row "= x²(1 − x)³[3(1 − x) − 4x]"; spoken "times one minus x, all cubed". About 28.6 s.
3. Optional, scene 6 (about 69 s): **kept as written**; the zeros sentence is the named trim if the voiced take runs long (the reviewer's suggestion).

Narration now 5,640 characters by script (Revision 1: 5,538), about 511 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: forty-second video of Year 11 Mathematics Advanced (2024), outline order 42, Introduction to differentiation (Calculations with the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c11.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson06.sa.html` (the drill (x + 1)(x² − 2) and short-answer Q3 x²(3x + 1)⁴, both with their numbers; `we-1` (x²eˣ) is not used, root ruling 1). Route entry: `math-a11-c11` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted dog-walking plate (c10's brief) and a painted game controller for the handoff (prefix `ma11-`); the rectangle, every row and graph coded.

Owner rules applied: as c01 to c10 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (money: a dog-walking side business), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci72e90f3a`: "Apply the product rule: if y = uv, where u and v are both differentiable functions of x, then dy/dx = u dv/dx + v du/dx or if h(x) = f(x)g(x) for differentiable functions f(x) and g(x) then h'(x) = f(x)g'(x) + f'(x)g(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c10's final frame (the dog-walking plate, chips "$15 a walk, + $1 a month", "8 walks a week, + 2 a month", "income: 15 × 8 = $120 a week", "rising how fast? 1 × 2 = 2 ?"). Teaches: the derivative of a product is not the product of the derivatives (the dog walker's real month, and the site drill (x + 1)(x² − 2) expanded); why both factors contribute (the income rectangle: two strips, and a corner that shrinks away and is exactly the wrong guess); the product rule dy/dx = u dv/dx + v du/dx and h′(x) = f(x)g′(x) + f′(x)g(x) (`ci72e90f3a`), checked on the drill; the dog walker's rate 38 + 4t; a factor that needs the chain rule, with the answer factorised (site Q3). Stops at polynomial and power factors. Not taught: eˣ factors (Year 12 d07; root ruling 1); quotients (c12); choosing among rules (c13).

## Decisions

- **Anchor: a dog-walking side business (painted plate, live).** Weekly income = price per walk × walks per week. The price starts at $15 and rises $1 a month; the walks start at 8 a week and rise by 2 a month. The guess "multiply the increases" gives $2 a week more each month; the real first month adds $40. Drawn as a rectangle (walks wide, price high), the month adds a strip of 8 (the price rise on the old walks), a strip of 30 (the new walks at the old price) and a corner of 2, which is the guess itself; over half a month the pieces are 4, 15 and 0.5, so per month 8, 30 and 1; the corner vanishes as the step shrinks and the rate is $38 a week per month. Money; the pack's anchor 1 recast from a part-time wage to a business a Year 11 student might run. No Year 12 or a11 design uses a dog, dog walking or a walk price (grep 16 Nov: "dog", "kelpie", "walks per week" no hits; "wage" and "hourly rate" appear only in w06 and w13 linear models). The rectangle is an abstract diagram of the income, not a growing real rectangle (the pack's caution: Year 12 d07's anchor is a timber deck).
- **The model.** p(t) = 15 + t dollars per walk, w(t) = 8 + 2t walks per week, t in months; I = pw dollars per week; I′(t) = 38 + 4t dollars per week, per month. Linear growth is a simplification stated as "each month".
- **Simulations (standard item 3).**
  1. **Income rectangle** (`PairingRectangle` adapted, or the new `ProductRectangle`; scenes 3, 5): width w (blue), height p (teal); a time slider grows both sides together; the strips v·Δu and u·Δv light in teal and blue with dollar readouts, the corner grey with its readout; a step control halves Δt (1 month, ½ month, 0.1 month) and a "per month" readout table fills: 8, 30, 2; 8, 30, 1; 8, 30, 0.2. The corner visibly thins to a sliver.
  2. **Two turns** (scene 4): the rectangle's strips relabel "u v′" (blue) and "v u′" (teal) as the rule writes, so the formula is read off the picture.
- **Colour roles (the c01 to c10 roles, root ruling 7, plus two factor roles matched to Year 12 d07).** The first factor u and its turn v u′ **teal**; the second factor v and its turn u v′ **blue**; dy/dx violet; the corner and the guess grey, the guess crossed red; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "not 2!", "price rise on old walks", "new walks at old price", "corner = the guess", "shrinks away", "each factor takes a turn", "the other stays", "same as expanding", "chain rule inside", "take out the common factor".
- **Stage changes (standard item 2).** The dog walker (1); g01 board, the drill expanded (2); the income rectangle (3); the rule card with the two turns (4); the walker's rate graph (5); g01 board, site Q3 (6); framed card (7); question cards (8 to 11); the game controller (12); key notes (13).
- **Worked examples (g01 layout).** 2 and 4: site drill (x + 1)(x² − 2) → 3x² + 2x − 2, by expanding and by the rule; crossed "1 × 2x = 2x". 5: the walker, I′(t) = 38 + 4t; I′(0) = 38, I′(3) = 50. 6: site Q3, x²(3x + 1)⁴ → 2x(3x + 1)³(9x + 1); crossed "v′ = 4(3x + 1)³".
- **Memory aid.** Framed card: "Each factor takes a turn; the other one stays." Key line: "y = uv: dy/dx = u v′ + v u′". The wording is the site's "the other one stays", as Year 12 d07 uses it.
- **Visual surprise.** The corner of the income rectangle after one month is exactly $2, the guess, and it shrinks to nothing as the step shrinks while the two strips keep their rate.
- **Site notes (pack section 8).** `we-1`, the quick check, practice Q1 and the match items use eˣ (taught in Year 12), so they are not used (root ruling 1). The site's rectangle analogy is kept as an abstract diagram with real dollar values. No logged error affects this video.
- **Plain meanings at first use.** Product ("two things multiplied"); factor ("each thing being multiplied"); u′ ("u prime, the derivative of u", as c05).
- **Attempts (pack questions).** A1: (2x − 1)(x² + 3) by the rule and by expanding → 6x² − 2x + 6; crossed "2 × 2x = 4x". A2: x³(1 − x)⁴ fully factorised → x²(1 − x)³(3 − 7x); crossed "v′ = 4(1 − x)³".
- **Mistake scene:** none separate. (uv)′ = u′v′ (1, 2 crossed; A1 crossed); dropping a term (4 tag "two turns"); the chain-rule factor missed (6 crossed; A2 crossed, the minus sign).
- **Cause chain taught, in order:** (1) multiplying the increases ignores that each increase acts on the whole other factor (1, 2); (2) in the rectangle, the price rise acts on all the walks and the new walks earn the whole price, giving two strips, while the corner (rise × rise) shrinks much faster than the step (3); (3) so the rate is each factor's change times the other factor: u v′ + v u′ (4); (4) the rule reproduces expanding, and gives the walker's rising rate 38 + 4t because both factors grow (4, 5); (5) when a factor is a power of a bracket its derivative comes from the chain rule (6).
- **Entry knowledge (route):** c07 (sum, constant multiple and power rules; "products of brackets: expand first", c07's key note and A2 "a rule for products comes later"); c10 (the chain rule for a power of a bracket); c05 (prime notation).
- **What Year 12 relies on.** d07's entry knowledge is `ci72e90f3a` in both forms and `cie3d91a6e`; it recalls "the rectangle behind the product rule" and "each factor takes a turn, and the other one stays". This video teaches both forms, the rectangle and that phrase.
- **Handoff (to math-a11-c12, "How do we differentiate a quotient?").** Scene 12: the game controller plate (`ma11-game-controller-v1.png`) with chips "win rate = wins ÷ games", "20 ÷ 50 = 40%", "wins: + 0.7 a game" (teal), "games: + 1 a game" (blue), "climbing how fast? ?"; chips "Next: one function divided by another" and "?". This is c12's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Walker: p = 15 + t, w = 8 + 2t; I = 120 + 38t + 2t²; I′ = 38 + 4t; I′(0) = 38; I′(3) = 50. One month: 16 × 10 = 160, change 40 = 8 + 30 + 2. Half a month: 15.5 × 9 = 139.5, change 19.5 = 4 + 15 + 0.5, per month 39 (8, 30, 1). A tenth of a month: change 3.82 = 0.8 + 3 + 0.02, per month 38.2.
  (b) Drill: (x + 1)(x² − 2) = x³ + x² − 2x − 2 → 3x² + 2x − 2. Rule: (x + 1)(2x) + (x² − 2)(1) = 3x² + 2x − 2.
  (c) Q3: u = x², v = (3x + 1)⁴, v′ = 12(3x + 1)³; 12x²(3x + 1)³ + 2x(3x + 1)⁴ = 2x(3x + 1)³(6x + 3x + 1) = 2x(3x + 1)³(9x + 1). Zeros 0, −1/3, −1/9 (shown in scene 6).
  (d) A1: 2(x² + 3) + (2x − 1)(2x) = 6x² − 2x + 6; expanded y = 2x³ − x² + 6x − 3. A2: 3x²(1 − x)⁴ − 4x³(1 − x)³ = x²(1 − x)³(3 − 7x) (SymPy prints x²(x − 1)³(7x − 3), equal).
  (e) Pronunciations: "u v prime plus v u prime"; "f times g prime, plus f prime times g"; "fifteen plus t"; "thirty-eight plus four t"; "fifty cents"; "three x plus one, all to the fourth".
  (f) Windows: rectangle 0 to 12 walks wide, $0 to $18 high (equal visual scale per unit not required; labelled axes); walker's rate graph t 0 to 6 months, $0 to $70 a week per month.

Main question: *Why isn't the derivative of a product just the derivatives multiplied? How do both factors contribute to the derivative of a product?*
Entry knowledge (c07, c10, c05): the power, sum and multiple rules; expanding products; the chain rule; prime notation.
Stops after: dy/dx = u dv/dx + v du/dx and f g′ + f′g; a chain-rule factor; a factorised answer. No eˣ, no quotients, no rule choice.
Handoff: math-a11-c12: "a game win rate is wins divided by games, and both are rising: how fast does the rate climb?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): u and v u′ teal; v and u v′ blue; dy/dx violet; corner grey; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: multiply the increases?
> Here's that dog walker. She charges fifteen dollars a walk and does eight walks a week, so she earns a hundred and twenty dollars a week. Each month, her price goes up a dollar and she adds two walks. Her income is price times walks, a product. For a sum, the rates just add, so maybe for a product they multiply? That would be one times two, so two dollars a week more each month. Check it. After one month, she charges sixteen dollars for ten walks, which is a hundred and sixty dollars a week. That's forty dollars more, not **two**. How do both factors contribute to the derivative of a **product**?

Visual: opens on c10's final frame exactly (the dog-walking plate `ma11-dog-walk-kit-v1.png`, chips "$15 a walk, + $1 a month" teal, "8 walks a week, + 2 a month" blue, "income: 15 × 8 = $120 a week", "rising how fast? 1 × 2 = 2 ?" amber, "Next: two functions multiplied", "?"). On the first sentence the "Next" chips fade. On "Check it" a calendar chip flips "1 month later" and chips update "$16 a walk", "10 walks a week"; row 52 px "16 × 10 = $160 a week"; on "two" a teal "+ $40" writes and the amber "1 × 2 = 2" chip is crossed red, hand tag "not 2!". On "product" heading "Both factors change". The question chip "How do both factors contribute?" moves to the top right.

### 2. the same test in algebra
> The same thing happens in algebra. Take x plus one, times x squared minus two. Expand it first, to get x cubed plus x squared minus two x minus two. Its derivative is three x squared plus two x minus **two**. Multiplying the two derivatives, one times two x, gives just two x. That's not even close. A product needs its own **rule**.

Visual: clear change to the g01 board (the plate as a 280 px badge at the top right). Task strip, 44 px: "y = (x + 1)(x² − 2)". Rows, 52 px: "y = x³ + x² − 2x − 2"; on "two" "dy/dx = 3x² + 2x − 2" (violet, green frame). On "Multiplying" a grey row "(x + 1)′ × (x² − 2)′ = 1 × 2x = 2x" writes; on "rule" it is crossed red, caption "(uv)′ ≠ u′v′".

### 3. the rectangle: two strips and a corner
> Picture her weekly income as a rectangle. The width is the walks, eight, and the height is the price, fifteen dollars, so the area is the income. After one month, the rectangle grows both ways, and the new area has three extra pieces. A strip along the top is the dollar price rise on the eight old walks, that's eight dollars. A strip down the side is two new walks at the old price, thirty dollars. And a little corner, one dollar times two walks, is two **dollars**. That corner is the guess! Now take half a month instead. The strips are four and fifteen dollars, and the corner is only fifty cents. Per month, that's eight, thirty and one. As the time step shrinks, the corner shrinks away, while the strips keep their rate. So right now, her income is growing at thirty-eight dollars a week, per month. The real first month adds a bit more, forty, because both factors keep **growing**.

Visual: stage change: the income rectangle (`ProductRectangle`, 1,100 × 700 px) at the left, width "8 walks" (blue), height "$15" (teal), area "$120" in ink; the plate as a badge. On "After one month" both sides grow: width to 10, height to 16. The top strip lights teal "$1 × 8 = $8", hand tag "price rise on old walks"; the side strip lights blue "$15 × 2 = $30", hand tag "new walks at old price"; on "dollars" the corner lights grey "$1 × 2 = $2", hand tag "corner = the guess". On "half a month" the rectangle resets and grows by half steps: "$4", "$15", "$0.50". A table at the right (40 px) fills, columns "step", "top strip per month", "side strip per month", "corner per month": "1 month: 8, 30, 2"; "½ month: 8, 30, 1"; "0.1 month: 8, 30, 0.2" (the third row appears with no narration, the corner a sliver), hand tag "shrinks away". On "per month" (last) the row "rate now = 8 + 30 = $38 a week, per month" (violet, green frame). On "growing" a grey chip beside it: "first month: + $40 (the corner adds 2)".

### 4. the product rule
> That's the product rule. Each factor takes a turn changing, while the other one stays put. If y equals u times v, then d y by d x equals u times d v by d x, plus v times d u by d **x**. In function notation, if h of x is f of x times g of x, then h prime is f times g prime, plus f prime times g. Check it on x plus one, times x squared minus two. u is x plus one, so u prime is one. v is x squared minus two, so v prime is two x. u v prime plus v u prime is two x squared plus two x, plus x squared minus two. That's three x squared plus two x minus two, the same as expanding **gave**. And you can see the two turns in the rectangle. v times u prime is the top strip, the price rise on all the old walks. u times v prime is the side strip, the new walks at the full price.

Visual: clear change: the rule card (left, 1,000 px) beside a 400 px copy of the rectangle with the strips relabelled "u v′" (blue) and "v u′" (teal). Line, 52 px: "y = uv"; on "x" the rule framed, 60 px: "dy/dx = u dv/dx + v du/dx" (u dv/dx blue, v du/dx teal), hand tags "each factor takes a turn" and "the other stays". Row, 44 px: "h(x) = f(x)g(x): h′(x) = f(x)g′(x) + f′(x)g(x)". Task strip: "y = (x + 1)(x² − 2)". Givens card: "u = x + 1, u′ = 1" (teal), "v = x² − 2, v′ = 2x" (blue). Rows, 52 px: "u v′ + v u′ = (x + 1)(2x) + (x² − 2)(1)"; "= 2x² + 2x + x² − 2"; on "gave" "= 3x² + 2x − 2" (green frame), hand tag "same as expanding", a green tick to scene 2's result. On "you can see the two turns" the 400 px rectangle's top strip pulses teal ("v u′: price rise on old walks") and then its side strip blue ("u v′: new walks at full price").

### 5. back to the dog walker
> Back to the dog walker. After t months, her price is fifteen plus t dollars, and she walks eight plus two t times a week. So her income's rate is fifteen plus t, times two, plus eight plus two t, times **one**. That's thirty-eight plus four t dollars a week, per month. At the start, it's thirty-eight, matching the rectangle. After three months, it's fifty, because by then both factors are **bigger**. Each new walk earns more, and each price rise lands on more walks.

Visual: clear change: rows at the left, a graph at the right (t 0 to 6 months, rate $0 to $70; 760 × 560 px), the plate as a badge. Givens card: "u = 15 + t (price), u′ = 1" (teal); "v = 8 + 2t (walks), v′ = 2" (blue). Rows, 52 px: "I′(t) = (15 + t)(2) + (8 + 2t)(1)"; on "one" "= 38 + 4t" (violet). Graph: the line I′(t) = 38 + 4t draws; a dot at t = 0 reads "$38" with a green tick to scene 3; on "bigger" a dot at t = 3 reads "$50 a week, per month" (green frame); the small rectangle beside the graph grows to 14 walks by $18 with both strips thicker.

### 6. worked example: a factor that needs the chain rule
> Here's one where expanding would be slow. Differentiate x squared, times three x plus one, all to the fourth. Let u be x squared, so u prime is two x. Let v be three x plus one, to the fourth. That needs the chain rule, so v prime is four times three x plus one, cubed, times three. That's twelve times three x plus one, **cubed**. The product rule gives x squared, times twelve, three x plus one cubed, plus three x plus one to the fourth, times two x. Both terms share two x, times three x plus one, cubed. Take that out, and you're left with six x, plus three x plus one. So d y by d x is two x, times three x plus one cubed, times nine x plus **one**. Factorising like this pays off. If a question asks where the gradient is zero, you can read it straight off the factors: x is zero, minus a third, or minus a **ninth**. Writing v prime as four times three x plus one cubed is the **slip**. It's missing the chain rule's three.

Visual: clear change to the full-width g01 board. Task strip, 44 px: "Differentiate y = x²(3x + 1)⁴. Identify the rules used." Givens card: "u = x², u′ = 2x" (teal); "v = (3x + 1)⁴" (blue), hand tag "chain rule inside". Rows, 52 px current, 32 px earlier and dimmed: "v′ = 4(3x + 1)³ × 3"; on "cubed" "v′ = 12(3x + 1)³" (blue). "dy/dx = x² × 12(3x + 1)³ + (3x + 1)⁴ × 2x" (first term blue, second teal); the shared "2x(3x + 1)³" underlines in both terms, hand tag "take out the common factor"; "= 2x(3x + 1)³[6x + (3x + 1)]"; on "one" "dy/dx = 2x(3x + 1)³(9x + 1)" (green frame). On "Factorising" the three factors ring in turn; on "ninth" a row (44 px) "dy/dx = 0: x = 0, −1/3, −1/9" writes, hand tag "read zeros off the factors". On "slip" a red slip "v′ = 4(3x + 1)³" writes and is crossed, caption "× 3 missing".

### 7. memory aid
> Here's the summary. In a product, each factor takes a turn. Differentiate one and keep the other, then swap them over, and add the two **turns**. Two factors, two turns, two terms.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the rectangle with its two strips "u v′" (blue) and "v u′" (teal) and the grey corner fading. Main line, hand font 60 px: "Each factor takes a turn; the other one stays." On "turns" the key line, 40 px: "y = uv: dy/dx = u v′ + v u′". On "two terms" the two terms of the key line pulse blue and teal. Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate y equals two x minus one, times x squared plus three, using the product rule. Then check your answer by expanding first. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Differentiate y = (2x − 1)(x² + 3) using the product rule, then check by expanding first." The full question stays on screen. Picture slot: an empty board with "u =", "u′ =", "v =", "v′ =" only. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> u is two x minus one, with u prime two. v is x squared plus three, with v prime two x. So d y by d x is two x minus one, times two x, plus x squared plus three, times two. That's six x squared minus two x plus **six**. Expanding first gives two x cubed minus x squared plus six x minus three, with the same **derivative**. Multiplying the two derivatives, two times two x, is the **slip**.

Visual: the card shrinks to the top (30 px). Givens: "u′ = 2" (teal), "v′ = 2x" (blue). Rows, 44 px: "(2x − 1)(2x) + (x² + 3)(2)"; on "six" "dy/dx = 6x² − 2x + 6" (green frame). On "derivative" a check row "y = 2x³ − x² + 6x − 3 → 6x² − 2x + 6 ✓". On "slip" a red slip "2 × 2x = 4x" writes and is crossed, caption "(uv)′ ≠ u′v′". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Differentiate y equals x cubed, times one minus x, all to the fourth. Write the answer in fully factorised form. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Differentiate y = x³(1 − x)⁴ and write the answer in fully factorised form." Picture slot: empty board with the four labels. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> u is x cubed, so u prime is three x squared. v is one minus x, to the fourth, so by the chain rule, v prime is minus four times one minus x, **cubed**. So d y by d x is three x squared, times one minus x to the fourth, minus four x cubed, times one minus x, all cubed. Take out x squared, times one minus x cubed, to get three minus seven **x**. Losing the inside's minus sign is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "cubed" "v′ = 4(1 − x)³ × (−1) = −4(1 − x)³" (blue); "dy/dx = 3x²(1 − x)⁴ − 4x³(1 − x)³"; the shared "x²(1 − x)³" underlines; an unspoken row "= x²(1 − x)³[3(1 − x) − 4x]" writes; on "x" "dy/dx = x²(1 − x)³(3 − 7x)" (green frame). On "slip" a red slip "v′ = 4(1 − x)³" writes and is crossed, caption "inside′ = −1". Hold about 1 s.

### 12. handoff
> Products are done. What about one function divided by another? In an online game, you've won twenty of your fifty games, so your win rate is forty per cent. Lately, you've been winning about seven of every ten. Each win pushes the top of the fraction up. But every game also adds to the bottom, which pulls the rate down. So how fast is your win rate climbing? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the controller plate `ma11-game-controller-v1.png` (900 px) at the left. On "twenty of your fifty" chips "win rate = wins ÷ games" and "20 ÷ 50 = 40%"; on "seven of every ten" chips "wins: + 0.7 a game" (teal) and "games: + 1 a game" (blue), with small arrows "pushes up" and "pulls down"; on "climbing" chip "climbing how fast? ?". On "next" chips "Next: one function divided by another" and "?". Hold about 2 s. This is c12's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Product rule: y = uv gives dy/dx = u dv/dx + v du/dx.
- Function form: h(x) = f(x)g(x) gives h′(x) = f(x)g′(x) + f′(x)g(x).
- (uv)′ is not u′v′.
- A factor like (3x + 1)⁴ needs the chain rule for its derivative.
- Take out common factors to finish.

Memory aid (framed card, right side, as in scene 7): *Each factor takes a turn; the other one stays.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c12's opening frame.

## Teaching checks

- **Does it explain causes?** Why multiplying the increases fails: each increase acts on the whole other factor (1, 3). Why two terms: the two strips (3). Why the corner drops out: it shrinks with the step squared, faster than the strips (3). Why the walker's rate grows: both factors are bigger (5). Why a chain-rule factor: the second factor is a function inside a function (6).
- **Misconceptions addressed:** (uv)′ = u′v′ (1, 2, A1 crossed); a term dropped (4 tags); the chain-rule factor missed (6, A2 crossed).
- **Visual standard, item by item:** 1 the painted dog-walking plate from the first frame, returning as a badge in 2 to 5; 2 a new stage every 30 to 60 s; 3 the growing income rectangle with live strips and the shrinking-step table, the walker's rate graph; 4 fixed roles (u teal, v blue); 5 large type; 6 hand tags; 7 g01 boards in 2, 4 and 6; 8 framed card and five bullets; 9 the corner equal to the guess, shrinking to a sliver.
- **One idea at a time:** the failed guess (1, 2), the rectangle (3), the rule (4), the anchor's rate (5), a chain-rule factor (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 28 s.
- **Avoided double teaching:** expanding (c07) and the chain rule (c10) are used, not taught; prime notation (c05) is recalled in a phrase.
- **Syllabus coverage:** `ci72e90f3a` (3 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** eˣ (Year 12); quotients (c12); rule choice (c13).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Differentiate y = (2x − 1)(x² + 3) using the product rule, then check by expanding first."
Model answer: u = 2x − 1, v = x² + 3, u′ = 2, v′ = 2x. dy/dx = (2x − 1)(2x) + (x² + 3)(2) = 6x² − 2x + 6. Expanding: y = 2x³ − x² + 6x − 3, dy/dx = 6x² − 2x + 6. Classic mistake (crossed): "2 × 2x = 4x".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Differentiate y = x³(1 − x)⁴ and write the answer in fully factorised form."
Model answer: u = x³, u′ = 3x²; v = (1 − x)⁴, v′ = −4(1 − x)³. dy/dx = 3x²(1 − x)⁴ − 4x³(1 − x)³ = x²(1 − x)³(3 − 7x). Classic mistake (crossed): "v′ = 4(1 − x)³".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Walker | $15, 8 walks, $120; + $1 and + 2 a month; after a month $16 × 10 = $160, + $40; guess 1 × 2 = 2 | 1 |
| Drill | x³ + x² − 2x − 2; 3x² + 2x − 2; guess 2x | 2, 4 |
| Rectangle | 8, 30, 2; half month 4, 15, 0.5 (per month 8, 30, 1); 0.1 month per month 8, 30, 0.2; rate 38 | 3 |
| Walker's rate | I′(t) = 38 + 4t; 38 at 0; 50 at 3; 14 walks, $18 at 3 | 5 |
| Q3 | v′ = 12(3x + 1)³; 2x(3x + 1)³(9x + 1); zeros 0, −1/3, −1/9; slip 4(3x + 1)³ | 6 |
| A1 | 6x² − 2x + 6; 2x³ − x² + 6x − 3; slip 4x | 8, 9 |
| A2 | −4(1 − x)³; x²(1 − x)³(3 − 7x) | 10, 11 |
| Handoff | 20 of 50, 40%; 0.7 and 1 a game (no rate stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- Revision 2: I(1) − I(0) = 40; I′(0) = 38 (unchanged values, now both spoken in scene 3). x³(1 − x)⁴: derivative = x²(1 − x)³[3(1 − x) − 4x] = x²(1 − x)³(3 − 7x).
- I = (15 + t)(8 + 2t) = 2t² + 38t + 120; I′ = 4t + 38; I′(0) = 38; I′(3) = 50; p(3) = 18, w(3) = 14.
- Δt = 1: change 40 = 8 + 30 + 2. Δt = ½: change 39/2 (per month 39 = 8 + 30 + 1). Δt = 1/10: change 191/50 = 3.82 (per month 38.2 = 8 + 30 + 0.2).
- (x + 1)(x² − 2) → 3x² + 2x − 2 by both methods.
- x²(3x + 1)⁴ → 2x(3x + 1)³(9x + 1) (difference from the site's unfactorised form: 0); zeros of the derivative 0, −1/3, −1/9.
- (2x − 1)(x² + 3) → 6x² − 2x + 6; expanded 2x³ − x² + 6x − 3.
- x³(1 − x)⁴ → x²(1 − x)³(3 − 7x) (SymPy: x²(x − 1)³(7x − 3)).
- Handoff: 20/50 = 0.4.

## Memory aid check

- **"Each factor takes a turn; the other one stays."** The site's phrase ("the other one stays"), as Year 12 d07 also uses it. Meaning, as said in scene 7: differentiate one factor and multiply by the other unchanged; then the other way round; add the two. It is u v′ + v u′. Assumptions checked: both factors differentiable; for more than two factors it extends (each takes a turn), not needed here. It helps a new case: (x² + 1)(x − 4) → 2x(x − 4) + (x² + 1) = 3x² − 8x + 1. Introduced after scenes 3 to 6.
- **Considered, not used:** "First times derivative of the second, plus second times derivative of the first" (accurate, but long to copy; the card's key line carries it).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,640 characters (Revision 2; Revision 1 was 5,538). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the rectangle's steps, the graph) and the 45 s notes scene: about 511 s. Characters per scene (1 to 13): 595, 325, 884, 766, 462, 915, 176, 167, 377, 144, 381, 373, 75. Speech before the notes is about 418 s, under the 570 s cap. Feedback speech: about 28 s and 28.6 s.

Reserve trims if the voiced take runs long: scene 5's last sentence; scene 2's "That's not even close."

## Scene list and build ids

Lesson key `m-a11c11` (route math-a11-c11). Explainer folder `src/explainer/lessons/math-a11-c11`; build inputs in `docs/production/claude-pm/lessons/math-a11-c11/` (at voicing).

In order (13 scene headings): hook-dog-walker, algebra-test, income-rectangle, product-rule, walker-rate, chain-factor, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | c10's frame; the dog walker's month |
| 40 to 64 s | 2 | g01 board: the drill expanded |
| 64 to 130 s | 3 | The income rectangle |
| 130 to 178 s | 4 | Rule card with the two turns |
| 178 to 210 s | 5 | The walker's rate graph |
| 210 to 266 s | 6 | g01 board: a chain-rule factor |
| 266 to 280 s | 7 | Framed memory card |
| 280 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 415 s | 12 | The game controller |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c10's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 clear change to the board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c11-learning-review.md`, `science_check` = `checks/m-a11-c11-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no controller plate exists; the dog-walking plate is c10's brief.

Need (painted, new; see the Codex asset brief): `ma11-game-controller-v1.png` (this video's handoff and c12). Reused: `ma11-dog-walk-kit-v1.png` (c10's brief).

Coded: the income rectangle and its strips, the step table, the rate graph, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `PairingRectangle` (adapted) or the new part below, `WorkingBoard`, `TaskStrip`, `GivensCard`, `StudioPlot`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`ProductRectangle`** (new, or `PairingRectangle` extended): sides u and v driven by a step Δt; strips v·Δu and u·Δv and the corner Δu·Δv drawn and labelled with values; a "per step" table that divides by Δt. Check: for Δt = 1, ½ and 0.1 the table reads 8, 30, 2; 8, 30, 1; 8, 30, 0.2 and the drawn corner's area matches its label. Year 12 d07 can reuse it.

## Codex asset brief (Maths A11 C11, a game controller; opens c12)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c11.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c11 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-game-controller-v1.png` (1800 × 1200 px): a generic wireless game controller (two thumbsticks, a direction pad, four plain face buttons with no letters or symbols, shoulder buttons), dark grey with a teal accent, resting on a soft cushion seen from slightly above. No brand shape, no screen.

Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c11-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the rectangle's strips and corner match the dollar values for each step, and that the corner per month falls 2, 1, 0.2.
4. Confirm no eˣ, quotient or rule-choice task appears.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c10's final frame.

## YouTube metadata (draft)

Title: The Product Rule: Why Both Factors Count | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html

A dog walker raises her price and takes on more walks each month. Is her income's rate just the two increases multiplied? See why not with a growing rectangle whose corner shrinks away, learn the product rule dy/dx = u dv/dx + v du/dx (each factor takes a turn), check it against expanding, and use it with the chain rule on x²(3x + 1)⁴. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the product rule: if y = uv, where u and v are both differentiable functions of x, then dy/dx = u dv/dx + v du/dx or if h(x) = f(x)g(x) for differentiable functions f(x) and g(x) then h'(x) = f(x)g'(x) + f'(x)g(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: The chain rule. Next: The quotient rule.

#Year11Maths #MathsAdvanced #ProductRule #HSCScience

## Open decisions

- **1. The rectangle against Year 12 d07 (root).** d07 builds its own rectangle (a timber deck) and says "the rectangle behind the product rule". This video's rectangle is an abstract picture of income, so d07 becomes a recall plus a new real rectangle; d07 is not changed.
- **2. Units (settled by the learning review, Revision 2).** "Dollars a week, per month", said in words, never as "$/week/month"; "each month" is no longer used for the rate.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c07 and c10; check that the corner equalling the guess is noticed, that "shrinks away" is believed from the table, that the two turns are read off the rectangle, and that A2's minus sign is signposted by scene 6), then the Codex maths check and error check, then voicing and a build to grade A.
