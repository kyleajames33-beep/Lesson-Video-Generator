# Maths S12 A11a: What do the intercepts and vertex of a practical quadratic graph mean, and how do we read answers from it? The rocket's four numbers, four kinds of question, a level line, and a profit model with units (design)

Status: Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`; ruling 8 splits a11 into a11a and a11b). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,329 characters by script (see "Narration length estimate"), 12 scene headings, about 490 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: first half of the eleventh video of Year 12 Mathematics Standard (2024), outline order 11 (a11a; root ruling 8: "reading the graph"), Algebraic relationships. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-a11.md` (the pack's suggested split: a11a takes `ci73f0af63` and `cic7ff4ee6`). Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson05.sa.html` (Quadratic Models, Applying and Interpreting, SHA256 `30c7a2925ec1ac3e017ed94b684891e5f2af67b59c91252a25b6808c6dbc666f`): card 05's meanings of the intercepts and vertex; card 07's four question types and "the numerical answer AND the contextual meaning in one sentence"; `we-2`'s profit model (P = −2n² + 20n − 32, thousands of dollars, hundreds of items: break-even 200 and 800 items, $18,000 at 500 items, profit for 2 < n < 8) with its exact numbers. Not used here: the paddock and its barn-wall wording (MS-10; a corrected patch is in a11b), `we-1` (ramp) and `we-3` (roller coaster, a11b), factorising (the syllabus says "a given graph"). Route entry: `math-s12-a11` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the painted paddock, launcher and rocket (a09's brief); the reused painted lemonade stall as the profit badge; every graph, level line and board coded.

Owner rules applied: as a10 (2024 syllabus; plates for real objects, code for graphs; no people; one question; one stage at a time; words before symbols; g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a backyard toy, a small business, sport, a school event); Australian spelling; no em dashes; "zero point" decimals; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12 Standard 2, Algebraic relationships, Quadratic relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci73f0af63`: "Analyse a given graph of a quadratic relationship and use it to solve practical problems"
- `cic7ff4ee6`: "Interpret the meaning of the intercepts and vertex of a parabola in a variety of contexts"

(The third a11 point, `ci88f43c88`, is a11b.) Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a10's final frame exactly (the paddock strip with the launcher and rocket; the rocket's graph with crossings "0" and "4" (blue), h-intercept "0" (teal), vertex "(2, 20)" (amber) and its violet axis; four "means ...?" bubbles; a grey dashed continuation past t = 4 with "after 4 s?"; chips "Next: what do the numbers mean?" and "?"). Recalls a10 (the midpoint method) and a04 (break-even as profit = 0) in a phrase or grey chip each. Teaches: the y-intercept is the value at the start; the x-intercepts are when the quantity is zero; the vertex gives the greatest or least value (its y) and when it happens (its x); each answer in a sentence with units; the four usual questions (greatest or least value; when it is zero; the value at a given x, read up and across; when it is above a level, read between the two crossings of a horizontal line); units such as thousands of dollars and hundreds of items. Stops at reading and interpreting a given practical graph. Not taught: valid values and limitations (a11b; the "after 4 s?" chip is held for a11b's handoff); finding intercepts by algebra.

## Decisions

- **Anchor: the foam rocket again (painted plates from a09's brief, live).** a10 found the numbers 0, 4, 2 and 20; this video gives each one its meaning, then uses the same graph for all four question types, so the student meets every new idea on a familiar curve. Then a car's fuel use shows a vertex that is a least value, and site `we-2`'s profit model practises the same reading with harder units. A small business is everyday money (root ruling 6); the reused painted lemonade stall `maths/ma11-lemonade-stall-v1.png` (viewed 18 Nov: a market stall with a yellow-striped awning, a lemonade dispenser and a basket of lemons, true alpha) is the profit badge, a picture of "a small business", not a claim that it makes 500 items. Site numbers and units unchanged.
- **Simulations (standard item 3).**
  1. **Feature meanings** (scene 2): each feature rings in turn on the graph while the rocket plate moves to that moment (on the grass at t = 0, at the top at t = 2, landed at t = 4), and a sentence chip writes its meaning with units.
  2. **Reading moves** (scene 3; `FunctionRider`, `LiveReadoutBoard`): four animated reads on one graph: across from the vertex; down to the crossings; up from t = 1 and across to 15; and a level line h = 15 (`StudioLevelLine` with interval shading on the t-axis) cutting the curve at 1 and 3 while the rocket plate glows during the shaded interval.
  3. **Profit sweep** (scene 4): a rider moves along the profit curve with a readout in dollars and items (converting units live: "n = 5 → 500 items", "P = 18 → $18,000"), the region between the break-even crossings shaded teal (profit) and outside grey (loss), as w13's roles.
- **Colour roles (fixed for a09 to a11b; level line added).** x-values and the x-intercepts **blue**; y-values and the y-intercept **teal**; the vertex **amber**; the axis (when shown) violet dashed; the level line y = k **violet**, solid, with its interval shaded pale violet on the x-axis; profit region pale teal, loss region grey; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As a10. Hand tags: "starts on the grass", "launched", "lands: 4 s in the air", "top: 20 m at 2 s", "x says when, y says how much", "across from the vertex", "down to the crossings", "up, then across", "level line", "between the crossings", "an interval", "P in thousands", "n in hundreds", "break-even", "units!".
- **Stage changes (standard item 2).** a10's frame (1); meanings card beside the rocket's graph (2); the four reading moves (3); the fuel-use graph, a least value (4); g01 board with the profit graph (5); framed card (6); question cards (7 to 10); the "after 4 s" frame for a11b (11); key notes (12).
- **Worked examples (g01 layout).** 2: the rocket's meanings, each a sentence with units; crossed "greatest height 2 m". 3: the four questions on the rocket (20 m; 4 s; 15 m at 1 s; above 15 m from 1 s to 3 s, 2 s in all). 4 (original): a car's fuel use, an upward parabola with vertex (80, 6): least fuel 6 L per 100 km at 80 km/h; 7.6 at 40 and 120; no s-intercepts. 5: site `we-2`: loss of $32,000 at n = 0; break-even 200 and 800 items; greatest profit $18,000 at 500 items; profit between 200 and 800 items; crossed "greatest profit $18".
- **Memory aid.** Framed card: "Vertex: best or worst. Crossings: zero. Up and across: a value. Level line: an interval." Key line: "Answer in a sentence, with units."
- **Visual surprise.** The level line at 15 m slides down from 25 m: it touches nothing, then just touches the top at 20 m, then cuts the curve twice, and the shaded interval on the t-axis grows as the level drops.
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-10).** The paddock (MS-10's barn-wall mismatch) is not used here; a11b uses a corrected patch. `we-2`'s intercepts are read from the graph, not factorised. SA 2 (c) (no price above the maximum) is not used.
- **Plain meanings at first use.** Interpret ("say what a number means in the situation"); break-even ("profit zero: takings just cover costs", recalled from a04); interval ("every value from one number to another"); level line ("a horizontal line at a given height").
- **Attempts (pack questions).** A1 (pack question 1, parts (a) to (c)): the rugby kick h = −5t² + 15t: in the air 3 s; greatest height 11.25 m at 1.5 s; above 10 m from 1 s to 2 s (1 s in all); crossed "above 10 m only at t = 1". A2 (pack question 2, parts (a) and (b)): the musical's takings T = −20p² + 1200p: $30 gives $18,000; p-intercepts: free tickets earn nothing, and at $60 nobody buys; crossed "greatest takings $30". Parts (d) and (c) of the two questions go to a11b.
- **Mistake scene:** none separate. x and y of the vertex swapped (2 crossed, A2 crossed); a single time for "above" (3, A1 crossed); units dropped (4 crossed); the y-intercept called the start of the motion but not a value (2 sentence).
- **Cause chain taught, in order:** (1) the y-intercept is the value when x = 0, so it is where the situation starts (2); (2) the x-intercepts are where the value is zero, so they are when the rocket is on the ground, or profit is zero (2, 4); (3) the vertex is the turning point, so it is the greatest (or least) value, and its x says when (2); (4) reading a value at a given x is going up to the curve, because the curve holds every pair (3); (5) "above a level" is true for every x where the curve is over the line, so the answer runs between the two crossings (3); (6) the axes' units carry into every answer (4).
- **Entry knowledge (route):** a10 (intercepts and the vertex by the midpoint); a04 (break-even as profit = 0); a07 (limitations, used in a11b); math-s11-l04 (`ci1b3cf962`, valid values, used in a11b).
- **What later videos rely on.** a11b opens on this video's final frame (the rocket's graph continued past 4 s to −25 m) and uses the rugby kick and the musical for its attempts.
- **Handoff (to math-s12-a11b, "Which values make sense in a quadratic model, and where does it stop working?").** Scene 11: the paddock, launcher and rocket; the rocket's graph widened to t −1.5 to 5.5 and h −30 to 25; the model's curve continues as a grey dashed line beyond 0 and 4 into negative heights, with the point (5, −25) ringed red and a chip "t = 5: h = −25 m?"; the rocket plate sits on the grass at t = 4 with a chip "underground?"; chips "Next: where does the model stop working?" and "?". This is a11b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Rocket: h(1) = h(3) = 15; −5t² + 20t = 15 ⟺ t² − 4t + 3 = 0, t = 1, 3; the level line at 20 touches at t = 2 only; at 25 it misses.
  (b) `we-2`: −2n² + 20n − 32 = −2(n − 2)(n − 8); P(0) = −32; P(5) = 18.
  (c) A1: −5t² + 15t = −5t(t − 3); h(1.5) = 11.25; −5t² + 15t = 10 ⟺ t² − 3t + 2 = 0, t = 1, 2.
  (d) A2: −20p² + 1200p = −20p(p − 60); T(30) = 18,000.
  (e) "Real launches and kicks start above the ground" (pack section 8) is kept for a11b's limitations.
  (f) Pronunciations: "eleven point two five metres"; "one point five seconds"; "eighteen thousand dollars"; "minus two n squared, plus twenty n, minus thirty-two".
  (g) Windows: rocket t −0.5 to 5.5, h −5 to 25 (grid every 1 s and 5 m); profit n 0 to 10, P −40 to 25 (grid every 1 and 5); A1 card t 0 to 3.5, h 0 to 12 (grid every 0.5 s and 1 m); A2 card p 0 to 60, T 0 to 20,000 (grid every 10 and 2,000).

Main question: *The rocket's graph gave 0, 4, 2 and 20. What do the intercepts and vertex of a practical quadratic graph mean, and how do we read answers from it?*
Entry knowledge (a10; a04): intercepts and the vertex by the midpoint; break-even.
Stops after: meanings of the y-intercept, x-intercepts and vertex with units; the four question types (including a level line and an interval); thousands and hundreds as units. No valid values or limitations.
Handoff: math-s12-a11b: "at t = 5 the model says −25 m: where does it stop working?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x and x-intercepts blue; y and the y-intercept teal; vertex amber; level line violet, interval pale violet; profit pale teal, loss grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: four numbers, four meanings
> Here's the rocket's graph again, with the four numbers we found, zero, four, two and twenty. In a maths exercise, finding them is the end. In a real problem, a number on its own isn't an answer. Each feature of the graph tells you something about the rocket, and an exam wants that meaning, in words, with **units**. So what do the intercepts and vertex of a practical graph mean, and how do we read answers from **it**?

Visual: opens on a10's final frame exactly (the paddock strip with the launcher and rocket; the graph with "0" and "4" blue, "0" teal, "(2, 20)" amber, the violet axis; four "means ...?" bubbles; the grey dashed continuation with "after 4 s?"; chips "Next: what do the numbers mean?" and "?"). On the first sentence the "Next" chips fade and the grey dashed continuation and its chip fade (held for a11b). On "a number on its own" a grey chip "20" floats beside the graph with a red "?" and the caption "20 what? when?". On "units" the four bubbles pulse. On "it" heading "Practical quadratic graphs", and the question chip "What does each number mean?" moves to the top right.

### 2. what each feature means
> Start with the intercepts. The h-intercept is the height when t is zero, at the start. It's zero, so the rocket starts on the **grass**. The t-intercepts are the times when the height is zero. At zero seconds it's launched, and at four seconds it lands, so it's in the air for four **seconds**. The vertex is the turning point. This curve opens downwards, so the vertex is the maximum. The rocket reaches its greatest height, twenty metres, after two **seconds**. Notice the vertex gives two answers. Its x-value says when, and its y-value says how much. Mixing them up is the classic **slip**. The greatest height is twenty metres, not two.

Visual: clear change. The graph at the right (1,000 × 620 px, t −0.5 to 5.5, h −5 to 25, grid every 1 s and 5 m), the paddock strip with the launcher and the rocket plate as a live 1,300 px strip across the top. A meanings card at the left (44 px), one row per feature (simulation 1). On "grass" the h-intercept (0, 0) rings teal, the rocket sits on its tube, row "h-intercept 0: it starts on the grass (0 m at 0 s)", hand tag "starts on the grass". On "seconds" (first) the two crossings ring blue, the rocket lifts off then lands; rows "t = 0: launched" and "t = 4: lands, so 4 s in the air", hand tag "lands: 4 s in the air". On "seconds" (second) the vertex (2, 20) rings amber with the rocket at its top; row "vertex (2, 20): greatest height 20 m, at 2 s", hand tag "top: 20 m at 2 s". On "Its x-value says when" the "2" and "20" in the vertex label split apart with arrows to "when: 2 s" (blue) and "how high: 20 m" (teal), hand tag "x says when, y says how much". On "slip" a red slip "greatest height: 2 m" writes and is crossed, caption "2 is when".

### 3. four kinds of question
> Most questions about a practical graph are one of four kinds. One, what's the greatest or least value? Read across from the **vertex**. Two, when is the quantity zero? Read the x-intercepts, **down** on the axis. Three, what's the value at a given time? Go up from that time to the curve, then across. At one second, that's fifteen **metres**. And four, when is it above a certain level? Draw a horizontal line at that level, and read where it crosses the curve. The line at fifteen metres crosses at one second, and at three **seconds**. So the rocket is above fifteen metres from one second to three seconds, which is two seconds in **all**. That answer is an interval, from one time to another, not a single time.

Visual: camera continue; the meanings card shrinks to a 30 px strip at the bottom left and the graph enlarges (1,300 × 700 px); a "four questions" list at the left (44 px), each lighting as it is said (simulation 2). On "vertex" a dashed amber line runs across from (2, 20) to the h-axis, "20 m", hand tag "across from the vertex". On "down" the crossings pulse with arrows down onto the t-axis, "0 s and 4 s", hand tag "down to the crossings". On "metres" a blue dashed line runs up from t = 1 to the curve and a teal one across to "15", rider dot at (1, 15), readout "t = 1 s, h = 15 m", hand tag "up, then across". On "And four" the violet level line enters at h = 25 and slides down (the visual surprise): no crossing at 25, one touching point at 20, then on "seconds" (last before "all") it settles at h = 15 and cuts the curve at (1, 15) and (3, 15), each ringed blue, with vertical drops to t = 1 and t = 3, hand tag "level line". On "all" the interval from 1 to 3 on the t-axis shades pale violet with a bracket "2 s", the rocket on the strip glowing while t is inside it; framed answer (green): "Above 15 m from t = 1 s to t = 3 s: 2 s", hand tags "between the crossings" and "an interval".

### 4. when the vertex is a least value
> Not every practical parabola opens downwards. Here's a car's fuel use. At a speed of s kilometres an hour, it uses F litres for every hundred kilometres, and the graph opens upwards. So its vertex is a minimum, the least value. The vertex is at eighty, six. So the car uses the least fuel, six litres per hundred kilometres, when it travels at eighty kilometres an **hour**. Read up and across at forty kilometres an hour, and it's seven point six litres. At a hundred and twenty, it's seven point six again, a matching **pair**. And this curve never meets the s-axis, because the car never uses zero **fuel**. Same graph skills, but now the vertex is the best, not the biggest.

Visual: clear change. The red hatchback `maths/ma12-used-hatchback-v1.png` (viewed 18 Nov: a small red hatchback, true alpha) as a 320 px badge at the top left with a coded fuel gauge beside it. The graph at the right (1,100 × 620 px, s 0 to 140 km/h across in blue, F 0 to 10 L/100 km up in teal, grid every 20 and 1) of an upward parabola, labelled "fuel use F (L per 100 km)". The vertex (80, 6) rings amber; on "hour" a row (52 px): "vertex (80, 6): least fuel use, 6 L per 100 km, at 80 km/h", hand tag "opens up: a minimum". Blue and teal dashed reads: up from 40 to the curve and across to "7.6"; then up from 120 to "7.6"; on "pair" a grey arc links them, grey chip "a09: matching pairs". On "fuel" the s-axis glows with a grey tag "never 0 L: no s-intercepts". A two-row card (44 px): "opens down: vertex = greatest" and "opens up: vertex = least".

### 5. worked example: a profit graph
> Here's a business problem. A company's weekly profit, P thousand dollars, when it makes n hundred items, is modelled by P equals minus two n squared, plus twenty n, minus thirty-two. Its graph is shown. Read the units first. P is in thousands of dollars, and n is in hundreds of items. The P-intercept is minus thirty-two. Making nothing, the company loses thirty-two thousand dollars a week, because it still has **costs**. The graph crosses the n-axis at two and eight. Profit is zero there, so those are the break-even points, two hundred and eight hundred **items**. Halfway between is five. At n equals five, P is minus fifty, plus a hundred, minus thirty-two, which is **eighteen**. So the greatest profit is eighteen thousand dollars a week, at five hundred items. Between two hundred and eight hundred items, the company makes a **profit**. Writing the greatest profit as eighteen dollars is the slip. Always carry the units.

Visual: clear change to the g01 board. Task strip (44 px): "Weekly profit P (thousands of $) for n (hundreds of items): P = −2n² + 20n − 32. Use the graph." (site `we-2`). Givens card (44 px, grouped): "P: thousands of dollars" (teal), "n: hundreds of items" (blue), with hand tags "P in thousands" and "n in hundreds"; the lemonade stall `maths/ma11-lemonade-stall-v1.png` as a 240 px badge, grey caption "a small business". The graph at the right (900 × 640 px, n 0 to 10, P −40 to 25, grid every 1 and 5). On "costs" the P-intercept (0, −32) rings teal, row (52 px) "n = 0: P = −32 → a loss of $32,000 a week". On "items" (first) the crossings (2, 0) and (8, 0) ring blue, row "P = 0 at n = 2 and n = 8 → break-even at 200 and 800 items", hand tag "break-even", grey chip "a04: break-even means profit = 0". Rows "n = (2 + 8) ÷ 2 = 5" and "P = −2(5)² + 20(5) − 32"; on "eighteen" "= −50 + 100 − 32 = 18", the vertex (5, 18) rings amber; the profit sweep (simulation 3) rides to the top with the live readout "500 items → $18,000". Framed answer (green): "Greatest profit $18,000 a week, at 500 items". On "profit" (last bold) the region over 2 < n < 8 shades pale teal, outside grey, row "profit between 200 and 800 items". On "the slip" a red slip "greatest profit: $18" writes and is crossed, caption "P is in thousands", hand tag "units!".

### 6. memory aid
> Here's a way to remember the four questions. The vertex answers best or worst. The crossings answer when it's zero. Up and across answers a given value. And a level line answers above or below, with an interval. Every answer goes in a sentence, with **units**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the rocket's graph with the four reading moves drawn small (across from the vertex, down to the crossings, up and across at 1 s, the level line with its shaded interval). Main line, hand font 52 px: "Vertex: best or worst. Crossings: zero. Up and across: a value. Level line: an interval." On "units" the key line, 40 px: "Answer in a sentence, with units." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A rugby ball is kicked from the ground. Its height, h metres after t seconds, is modelled by h equals minus five t squared, plus fifteen t, and its graph is shown. How long is the ball in the air? What is its greatest height, and when? And for how long is it higher than ten metres? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A rugby ball is kicked from the ground. The graph shows its height h metres after t seconds, modelled by h = −5t² + 15t. (a) How long is the ball in the air? (b) What is its greatest height, and when? (c) For how long is the ball higher than 10 metres?" Picture slot: the graph (t 0 to 3.5, h 0 to 12, grid every 0.5 s and 1 m), no labels on the crossings or the top, no level line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> The graph meets the t-axis at zero and three, so it's in the air for three **seconds**. Halfway is one point five seconds, and the height there is eleven point two five **metres**. The line at ten metres crosses at one and two seconds, so it's above ten metres for one **second**. Saying it's above ten metres only at one second is the slip. It's above from one second to two.

Visual: the card shrinks to the top (30 px). On "seconds" the crossings ring blue, row (44 px) "in the air: 3 s". On "metres" row "t = (0 + 3) ÷ 2 = 1.5; h = −5(1.5)² + 15(1.5) = 11.25", vertex (1.5, 11.25) rings amber, row "greatest height 11.25 m at 1.5 s". On "second" the violet level line at h = 10 cuts the curve at t = 1 and t = 2, the interval shaded, framed answer (green): "above 10 m from 1 s to 2 s: 1 s". On "the slip" a red slip "above 10 m only at t = 1" writes and is crossed, caption "an interval: 1 s to 2 s". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A school musical's committee models its ticket takings, T dollars, for a ticket price of p dollars, as T equals minus twenty p squared, plus twelve hundred p. The graph is shown for prices from zero to sixty dollars. What ticket price gives the greatest takings, and what are those takings? And what do the p-intercepts mean? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A school musical's committee models the total ticket takings T dollars for a ticket price of p dollars as T = −20p² + 1200p. The graph is shown for 0 ≤ p ≤ 60. (a) What ticket price gives the greatest takings, and what are those takings? (b) Explain what the p-intercepts mean." Picture slot: the graph (p 0 to 60, T 0 to 20,000, grid every 10 and 2,000), the vertex unlabelled. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> The crossings are zero and sixty, so the best price is halfway, thirty **dollars**. The takings there are eighteen thousand **dollars**. At zero dollars the tickets are free, so they earn nothing. At sixty dollars the model says nobody buys a ticket, so the takings are zero again. Giving thirty dollars as the greatest takings is the slip. Thirty dollars is the price.

Visual: the card shrinks to the top. On "dollars" (first) the bracket spans 0 to 60 and the marker slides to 30, row "p = 30: the best price". On "dollars" (second) row "T = −20(30)² + 1200(30) = 18,000", vertex (30, 18,000) rings amber; framed answer (green): "$30 a ticket gives the greatest takings, $18,000". Rows (44 px): "p = 0: free tickets, no takings" and "p = 60: nobody buys, no takings". On "the slip" a red slip "greatest takings: $30" writes and is crossed, caption "x says the price, y says the takings". Hold about 1 s.

### 11. handoff
> So the graph's features answer real questions, as long as we say what they mean. But look what happens if we keep the rocket's graph going past the landing. At five seconds, the model gives minus twenty-five metres. Is the rocket underground? Where does a model like this stop **working**?

Visual: the memory line shows small at the top (30 px), then fades on "But look". Board clear to the paddock strip with the launcher and the rocket (1,700 px) and the rocket's graph below, widened (t −1.5 to 5.5, h −30 to 25). On "keep the rocket's graph going" the curve continues as a grey dashed line past t = 4 and before t = 0, into negative heights. On "minus twenty-five metres" the point (5, −25) rings red with a chip "t = 5: h = −25 m?"; the rocket plate sits on the grass by its tube with a chip "underground?". On "working" chips "Next: where does the model stop working?" and "?". Hold about 2 s. This is a11b's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y-intercept: the starting value. x-intercepts: when it is zero.
- Vertex: greatest or least value (y), and when it happens (x).
- A value at a given x: go up to the curve, then across.
- Above a level k: draw y = k; the answer is between the crossings.
- Answer in a sentence, with units.

Memory aid (framed card, right side, as in scene 6): *Vertex: best or worst. Crossings: zero. Up and across: a value. Level line: an interval.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and a11b's opening frame.

## Teaching checks

- **Does it explain causes?** Why the y-intercept is the start: it is the value at x = 0 (2). Why the x-intercepts are "zero" moments: the value there is 0 (2, 4). Why the vertex is the best or worst: it is the turning point (2). Why "above" is an interval: the curve stays over the line between its two crossings (3). Why the vertex can be a least value: the curve opens upward (4). Why units matter: P counts thousands and n hundreds (5).
- **Misconceptions addressed:** vertex x versus y (2 crossed, A2 crossed); one time instead of an interval (3, A1 crossed); the vertex always a greatest value (4); units dropped (5 crossed); the P-intercept as "nothing happens" (5: a loss).
- **Visual standard, item by item:** 1 the rocket from the first frame (a10's), live in 2 and 3; the hatchback badge in 4, the stall badge in 5; 2 a new stage every 40 to 60 s; 3 feature meanings with the moving rocket, the four reading moves with the sliding level line, the profit sweep with live unit conversion; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 5 with a framed answer and crossed slip; 8 framed card and five bullets; 9 the level line sliding from no crossing to a touch to two crossings.
- **One idea at a time:** meanings (2), the four questions (3), a least value (4), units in a new context (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 28 s (speech plus hold).
- **Avoided double teaching:** a10's midpoint method is used, not re-taught; a04's break-even is a grey chip.
- **Syllabus coverage:** `ci73f0af63` (3, 4, 5, A1, A2; key notes 3 to 5); `cic7ff4ee6` (2, 4, 5, A2; key notes 1, 2).
- **Out of scope by design:** valid values and limitations (a11b); intercepts by algebra.

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1 (a) to (c), original, HSC style, 3 marks suggested, not an official marking scheme).** "A rugby ball is kicked from the ground. The graph shows its height h metres after t seconds, modelled by h = −5t² + 15t. (a) How long is the ball in the air? (b) What is its greatest height, and when? (c) For how long is the ball higher than 10 metres?"
Model answer: (a) The graph meets the t-axis at 0 and 3: 3 seconds. (b) t = 1.5 s; h = −5(2.25) + 15(1.5) = 11.25 m. (c) The line h = 10 meets the curve at t = 1 and t = 2: above 10 m for 1 second (from 1 s to 2 s). Classic mistake (crossed): "above 10 m only at t = 1".

**Attempt 2 (scene 9; pack question 2 (a) and (b), original, HSC style, 3 marks suggested).** "A school musical's committee models the total ticket takings T dollars for a ticket price of p dollars as T = −20p² + 1200p. The graph is shown for 0 ≤ p ≤ 60. (a) What ticket price gives the greatest takings, and what are those takings? (b) Explain what the p-intercepts mean."
Model answer: (a) Intercepts 0 and 60, so p = 30: T = −20(900) + 1200(30) = $18,000. (b) At $0 the tickets earn nothing; at $60 the model says nobody buys a ticket, so the takings are $0. Classic mistake (crossed): "greatest takings $30".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rocket | (0, 0); 0 and 4 s; (2, 20); h(1) = 15; h = 15 at t = 1 and 3 (2 s); touch at 20; h(5) = −25 | 1, 2, 3, 6, 11 |
| Fuel use (original) | F = 0.001(s − 80)² + 6 (author only); vertex (80, 6); F(40) = F(120) = 7.6; no s-intercepts | 4 |
| Site `we-2` | P(0) = −32 (−$32,000); break-even n = 2, 8 (200, 800 items); vertex (5, 18) ($18,000 at 500 items); profit 2 < n < 8 | 5 |
| A1 | 0 and 3 s; 1.5 s, 11.25 m; h = 10 at t = 1, 2 (1 s) | 7, 8 |
| A2 | 0 and 60; p = 30; T = $18,000 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py`, run with `python -I`); Codex to re-check.

- −5t² + 20t: zeros 0, 4; value 20 at 2; value 15 at 1 and 3; −5t² + 20t = 15 at t = 1, 3; value −25 at 5.
- 0.001(s − 80)² + 6: minimum 6 at s = 80; value 7.6 at s = 40 and 120; no real zeros (author model; the equation is never shown).
- −2n² + 20n − 32: zeros 2, 8; value −32 at 0; value 18 at 5.
- −5t² + 15t: zeros 0, 3; value 45/4 = 11.25 at 1.5; −5t² + 15t = 10 at t = 1, 2.
- −20p² + 1200p: zeros 0, 60; value 18,000 at 30.

## Memory aid check

- **"Vertex: best or worst. Crossings: zero. Up and across: a value. Level line: an interval."** with the key line "Answer in a sentence, with units." Adapted from site card 07's four question types (the site's own list, put into four short phrases). Meaning, as said in scene 6: the greatest or least value comes from the vertex; "when is it zero" from the x-intercepts; a value at a given x from reading up and across; "above (or below) a level" from the interval between the level line's two crossings. Assumptions checked: "best or worst" depends on the direction (a maximum when the curve opens down, a minimum when it opens up; scenes 2 and 4 show both); "an interval" assumes the level line cuts the curve twice (scene 3 shows the touching and missing cases). It helps a new case: "when is the profit above $10,000?" is a level line at P = 10. Introduced after scenes 2 to 5.
- **Considered, not used:** "VIVA: vertex, intercepts, values, above" (an acronym with no meaning of its own).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `s12/count.py`): 5,329 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the rocket's moves, the four reads, the level line's slide, the profit sweep) and the 45 s notes scene: about 490 s. Characters per scene (1 to 12): 412, 625, 696, 666, 917, 256, 315, 364, 357, 361, 285, 75. Speech before the notes is about 395 s, under the 570 s cap. Feedback speech plus hold: about 28 s and 28 s.

Reserve trims if the voiced take runs long: scene 1's second and third sentences (keep the "20 what? when?" chip); scene 4's "Read the units first" sentence (the givens card carries it).

## Scene list and build ids

Lesson key `m-s12a11a` (route math-s12-a11, part a). Explainer folder `src/explainer/lessons/math-s12-a11a`; build inputs in `docs/production/claude-pm/lessons/math-s12-a11a/` (at voicing).

In order (12 scene headings): hook-four-numbers, feature-meanings, four-questions, least-value-fuel, worked-profit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | a10's frame; "20 what? when?" |
| 30 to 85 s | 2 | Meanings card beside the rocket's graph |
| 85 to 145 s | 3 | Four reading moves; the sliding level line |
| 145 to 190 s | 4 | The fuel-use graph: a least value |
| 190 to 260 s | 5 | g01 board: the profit graph with units |
| 260 to 280 s | 6 | Framed memory card |
| 280 to 375 s | 7 to 10 | Question cards and countdowns, then feedback |
| 375 to 395 s | 11 | The rocket's graph past 4 s, for a11b |
| 395 to 440 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a10's last frame continues into 1; 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change; 4 to 5 clear change to the board; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a11a-learning-review.md`, `science_check` = `checks/m-s12-a11a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only): `ma11-lemonade-stall-v1.png` (market stall with a yellow-striped awning and a lemonade dispenser; reused as a small-business badge only); `ma11-launch-paddock-v1.png` (reused); `ma12-used-hatchback-v1.png` (small red hatchback; scene 4 badge, also a13's anchor). From a09's brief: `ms12-rocket-launcher-v1.png`, `ms12-foam-rocket-v1.png`. No new plate. The rugby kick and the musical are exam-style graphs on question cards (no plate).

Coded: every graph, the fuel gauge, the meanings card, the reading moves and level line, the profit regions and readout, the boards, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `StudioPlot`, `FunctionRider`, `LiveReadoutBoard`, `StudioLevelLine` (trig-parts.tsx), `RegionLabels` and `AxisShadow` (a11-graph-parts.tsx), `IntervalPicture` (the a10 `MidpointBracket` mode), `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a11):
1. **Interval shading on `StudioLevelLine`** (small prop): shade the x-axis interval between the level line's two crossings, with a bracket and length label; supports a sliding level (0, 1 or 2 crossings, updated live). Check: h = 15 on −5t² + 20t gives 1 to 3 ("2 s"); h = 20 touches at 2; h = 25 shows none.
2. **Unit readout** (small, a `LiveReadoutBoard` format): shows a model value and its real quantity together ("n = 5 → 500 items"; "P = 18 → $18,000").

## Codex asset brief

No new plate. The launcher and rocket are painted under a09's brief (`math-s12-a09.md`); the paddock strip and the lemonade stall are reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and that `ci88f43c88` is left to a11b.
3. Confirm site `we-2` keeps its numbers and units (thousands of dollars, hundreds of items), with intercepts read from the graph, not factorised.
4. Confirm every answer in narration and framed answers is a sentence or phrase with units, and every "above" answer is an interval.
5. Confirm both attempts carry every demand and neither card nor picture labels the crossings, the vertex or a level line.
6. Confirm scene 1 opens on a10's final frame and scene 11 matches a11b's opening frame.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, and every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Reading a Quadratic Graph in Real Problems | Year 12 Maths Standard 2

(Title length: 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson05.sa.html

A foam rocket's graph gives four numbers: 0, 4, 2 and 20. What does each one mean? Learn what the intercepts and the vertex of a parabola tell you in a real situation, and how to answer the four usual questions from a graph: the greatest or least value, when the quantity is zero, the value at a given time, and when it's above a certain level (draw a level line and read the interval). Then read a car's fuel-use graph, where the vertex is the least value, and a company's profit graph with its units in thousands of dollars and hundreds of items. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
Standard 2 (ci73f0af63): "Analyse a given graph of a quadratic relationship and use it to solve practical problems"
Standard 2 (cic7ff4ee6): "Interpret the meaning of the intercepts and vertex of a parabola in a variety of contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Finding the vertex from the x-intercepts. Next: Valid values and limitations of quadratic models.

#Year12Maths #MathsStandard #QuadraticModels #HSCScience

## Open decisions

- **1. The split (root ruling 8).** a11a takes `ci73f0af63` and `cic7ff4ee6`; a11b takes `ci88f43c88`. Both videos share the outline number and one site lesson link.
- **2. Lemonade stall as the profit badge (root).** The stall is "a small business" in general; the narration says "a company". If root prefers no badge (a plate not tied to the numbers), the board's givens card fills the space.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a10 and a04; check that "x says when, y says how much" lands before the slip, that the sliding level line makes "between the crossings" seen, that the units conversion in scene 4 is followable at speed, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
