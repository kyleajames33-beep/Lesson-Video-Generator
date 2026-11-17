# Maths S12 A13: How do we build and use a reciprocal model, and where does it fail? A road trip's fixed distance, k from one pair, solving by algebra and by graph, hours and minutes, rounding up, and the model's limits (design)

Status: Revision 2 (18 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 12; rulings 13 to 25 now also bind it). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,401 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 495 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (18 Nov 2026): learning review resolved

Review: `../checks/m-s12-a13-learning-review.md` (summary `../checks/m-s12-a07-a13-learning-review-summary.md`), with root's rulings 13 to 25 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 18 Nov. Resolution log: `../checks/m-s12-a07-a13-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 6 (the "same average speed" limitation contradicts the model): **accepted**, as root decided (decision 3: keep the site's "average speed"), in the reviewer's words. Scene 6: "And the model only works if the car can really average that speed. Traffic, corners and stops pull the real average down, so a trip planned at a hundred kilometres an hour takes longer than the model says." Limitation card: amber "you can choose the average speed"; violet "traffic, corners and stops pull the real average down, so the trip takes longer". Scene 1 now defines average speed: "that's the whole distance divided by the whole time", with a grey chip. The plain-meanings list and cause chain step (6) match.
2. Optional, scene 4 (the rearrangement as a symbol move): **applied**, reviewer's wording. "Speed times time is a hundred and twenty, so speed is a hundred and twenty divided by the time." The rows on screen are unchanged ("T = 120/s", "s = 120/T").
3. Optional, attempt 2 ("each hold the same number" against part (c)): **applied**. "A bakery packs 240 muffins into identical boxes." on the card, in the narration and in the model-answer section.
4. Optional, the key line ("Round up for whole things" drops its condition): **applied**. "Round up for whole things you need." on the memory card, in key note 4 and in the memory-aid check.

Root's decision 4 (hatchback): the hatchback stays this video's anchor. a12's final frame now shows a road sign ("Lakeside") and no vehicle, so scene 1 opens on that frame and the car drives in on "here's the car". In scene 2 the sign gains "120 km" when k is found to be the trip's length. Ruling 25 (the mowers) stands.

Open decisions closed: 1 (i01 still has no design; the final frame is unchanged and matches a08's right panel), 2 (the review agreed to drop pack question 1 (c) and (d)), 3 (finding 1 and root's decision 3). Ruling 24: the description's three bracketed codenames are removed. Joins: scene 1 now opens on a12 Revision 2's final frame; scene 12 is unchanged. Numbers unchanged (rechecked in `work/brief-resolve-standard-a2/verify.py`).

Narration 5,401 characters by script (Revision 1: 5,271), about 495 s with holds; speech before the notes about 400 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirteenth video of Year 12 Mathematics Standard (2024), outline order 13, Algebraic relationships; the last video of the strand. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-a13.md`. Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson06.sa.html` (SHA256 `dc844c74fcc51b59220bcb0b550bd4239777d71896c2797e95ce151d18873622`): card 06's steps (name the quantities with units; multiply a known pair for k; verify with a second pair; write y = k/x; substitute; rearrange x = k/y; verify graphically); card 07's limitations (x = 0 undefined; extreme values unrealistic; non-integer answers; the product may not stay constant); `we-1` (the car: s = 40, 60, 80, 120 km/h, T = 3, 2, 1.5, 1 h; products 120; T = 120/s; "the constant represents the total distance"; 1.2 h = 1 h 12 min at 100 km/h) with its exact numbers, as the main worked example (pack decision). Not used: `we-3` (Boyle's Law; root ruling 11), whose structure (find a value, push x towards 0, state assumptions) is kept with the car; card 07's "valid domain n ≤ 12" for the workers (it rests on an invented assumption; pack section 8). Route entry: `math-s12-a13` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the reused country road and red hatchback, the holiday house (a11b's brief) for rounding, the reused coin jar in the final frame; every table, graph, slider and board coded.

Owner rules applied: as a12 (2024 syllabus; plates for real objects, code for graphs; no people; one question; one stage at a time; words before symbols; g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a road trip, a holiday house, a council job, a bakery); Australian spelling; no em dashes; "zero point" decimals; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12 Standard 2, Algebraic relationships, Reciprocal relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci0021fc94`: "Construct a reciprocal model of the form y = k/x to analyse inverse variation problems"
- `cib9514f33`: "Solve inverse variation problems graphically, or algebraically given the value of two of the variables in y = k/x"
- `cib10770ae`: "Explain the limitations of reciprocal models in practical inverse variation problems"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a12's final frame exactly (Revision 2: the country road strip with the road sign `maths/ma11-road-sign-post-v1.png` carrying coded "Lakeside" and no vehicle, a12 Revision 2 scene 12; the red hatchback drives in on the first sentence; a coded board "same trip every time"; a small table "40 km/h: 3 h"; chips "100 km/h: how long?", "Next: building reciprocal models" and "?"). Recalls a12 (y = k/x, the multiply test, the first-quadrant branch), Year 11 changing the subject (math-s11-f03, `cib54d5e23`) and substitution (math-s11-f01), and a07 and a11b (a limitation names the assumption and why it fails) in a phrase or grey chip each. Teaches: build y = k/x from a practical situation in four steps (name the quantities and units; multiply a known pair for k and check a second pair; write the model; say what k means, the fixed total); solve algebraically by substituting (y = k/x) or rearranging (x = k/y); solve graphically with a horizontal line meeting the curve and dropping to the x-axis; convert decimal hours to hours and minutes; round up when a whole number of people, boxes or machines is needed; limitations: x = 0 impossible, tiny x gives huge y, huge x is not realistic, fractional answers may be meaningless, and the product may not really stay constant. Stops at reciprocal models. Not taught: anything beyond y = k/x; the investment strand (math-s12-i01 next).

## Decisions

- **Anchor: a road trip of fixed length (reused painted plates, live).** The site's `we-1` table becomes a country road trip: the red hatchback `maths/ma12-used-hatchback-v1.png` (viewed 18 Nov: a small red hatchback, true alpha) on the country road strip `maths/ma12-country-road-v1.png` (viewed 18 Nov: a two-lane road with gum trees behind, true alpha). k turns out to be the trip's length, 120 km, so the student sees k as a real total, not a fitting constant (pack decision). The car's speed slider then drives the limitations: at 10 km/h the trip takes 12 hours; at 0 it never arrives. Travel; the site's own example. Year 12 Advanced uses the hatchback for other ideas; reuse of a plate is not a shared anchor (Advanced root acceptance w01 to w14, ruling 6). Revision 2 (root's decision 4): the hatchback appears in a06, a07 and a13 only; a08 and a11a now use other vehicles and a12's final frame shows a road sign, so the car arrives here as this video's anchor.
- **Rounding: back to the holiday house (painted plate from a11b's brief).** a12's $1,200 house: at most $250 each needs 1,200 ÷ 250 = 4.8, so 5 friends; 4 would pay $300. Rounding is taught on a model the student already owns before the muffins attempt tests it.
- **Simulations (standard item 3).**
  1. **Trip rider** (scenes 1 and 3; `FunctionRider` with `LiveReadoutBoard`): the hatchback drives the road strip at a chosen speed while a clock readout runs; a point rides T = 120/s at that speed.
  2. **Level-line solve** (scene 4; `StudioLevelLine`): a horizontal line at T = 2.5 meets the curve and a dashed drop lands on s = 48, beside the algebra rows that give the same 48.
  3. **Speed to zero** (scene 6; `ParameterSlider` with `LiveReadoutBoard`): the speed slider slides 120 → 40 → 10 → 1 → 0; the time readout climbs 1, 3, 12, 120 hours, then "never arrives"; the point rides up the branch and off the top; the car on the strip crawls, then stops; at the other end a grey "300 km/h: not legal or safe" flag.
  4. **Constant-product rectangle** (scene 2; from a12): the rectangle from (0, 0) to (40, 3) shows area 120, then slides to (60, 2), still 120.
- **Colour roles (fixed for a12 and a13).** x (here speed s, people n, mowers n, muffins per box b) **blue**; y (time T, share, boxes) **teal**; k **amber**; the level line violet; the rounding arrow amber; answer **green**; mistake **red**, crossed slips only; limitation card "assumption" amber, "why it fails here" violet (as a11b).
- **Large type, handwritten voice.** As a12. Hand tags: "name it, with units", "multiply a pair", "check another pair", "k = the distance", "substitute", "rearrange", "across, then down", "0.2 h × 60 = 12 min", "not 20 minutes", "round up", "4 is too few", "never arrives", "too slow to be real", "not legal", "average speed", "assumption", "why it fails here".
- **Stage changes (standard item 2).** a12's frame, then the road trip and table (1); g01 board: building the model with the rectangle (2); g01 board: solving at 100 km/h, hours and minutes (3); algebra beside the graph (4); the holiday house rounding strip (5); the speed slider and the limitation card (6); framed card (7); question cards (8 to 11); the coin-jar frame for i01 (12); key notes (13).
- **Worked examples (g01 layout).** 2: site `we-1`: products 120; T = 120/s; k = 120 km, the distance. 3: site `we-1` (c): T = 120/100 = 1.2 h = 1 h 12 min; crossed "1 h 20 min". 4 (original): T = 2.5 h gives s = 120/2.5 = 48 km/h, by algebra and by graph. 5 (original, a12's house): at most $250 each: n = 4.8, round up to 5 ($240 each). 6: limitations (site card 07's four, on the car).
- **Memory aid.** Framed card: "Multiply to build: k = x × y. Divide to use: y = k ÷ x, x = k ÷ y." Key line: "k is the fixed total. Round up for whole things you need."
- **Visual surprise.** The speed slider: as the car slows to a crawl the time readout climbs past 12 and 120 hours and the point shoots off the top of the graph; at zero the car stops and the readout reads "never arrives".
- **Site notes (pack section 8).** `we-1`'s numbers unchanged (now spoken as a road trip). `we-3` (Boyle's Law) is not used; its structure is kept with the car. Card 07's "n ≤ 12" rule is not reused. MS-08 (the lesson's declared dotpoint for `cib9514f33` drops "in y = k/x") is the site's issue; this design quotes the official wording.
- **Plain meanings at first use.** Construct a model ("write the equation that describes the situation"); average speed ("the whole distance divided by the whole time", said in scene 1; Revision 2); rearrange ("make the other letter the subject"); round up ("go to the next whole number, even if the decimal is small").
- **Attempts (pack questions, trimmed).** A1 (pack question 1 (a) and (b)): mowers: k = 3 × 2 = 6, T = 6/n; 4 mowers: 1.5 h = 1 h 30 min; crossed "1 h 50 min". A2 (pack question 2 (a) to (c)): muffins: B = 240/b; 16 per box: 15 boxes; B = 34.29 when b = 7: 35 boxes (34 boxes hold only 238); crossed "34 boxes". Pack question 1 (c) and (d) are not asked (feedback length); scene 6 teaches the same limitation idea.
- **Mistake scene:** none separate. k by dividing (2, said; a12's test recalled); 1.2 h as 1 h 20 min (3 crossed, A1 crossed); rounding down (5, A2 crossed); "x can't be zero because you can't divide by zero" without the practical reason (6, both said); a limitation with no assumption (6, the card).
- **Cause chain taught, in order:** (1) the trip's length is fixed, so speed × time is always the same, so k is the distance (1, 2); (2) once k is known, any one value gives the other by dividing k (3, 4); (3) the graph holds every pair, so a horizontal line at the known value finds the other (4); (4) an hour has 60 minutes, not 100, so 0.2 h is 12 minutes (3); (5) a share above the limit fails the condition, so the count rounds up (5); (6) the model is exact for the average speed actually achieved, so it breaks only where that speed is impossible: 0, tiny or illegal speeds, and a planned average that traffic, corners and stops pull down (6; Revision 2).
- **Entry knowledge (route):** a12 (y = k/x, the constant product, the hyperbola); math-s11-f03 (`cib54d5e23`, changing the subject); math-s11-f01 (`ci7f303375`, substitution); a07 and a11b (the two-part limitation).
- **What later videos rely on.** math-s12-i01 (simple interest) opens on this video's final frame. The strand closes on a straight line again, which i01's simple interest graph will be (pack section 8: "closes the loop with a01's lines"); this design asks the question and does not answer it.
- **Handoff (to math-s12-i01, "How does simple interest grow, and what does its graph look like?").** Scene 12: the coin jar `maths/ma12-coin-jar-v1.png` (viewed 18 Nov: a glass jar of gold and silver coins, metal lid, true alpha) as a 300 px badge beside small empty coded axes ("balance ($)" up in teal, "years" across in blue); a strip of four small grey strand thumbnails across the top (a line, an exponential curve, a parabola, a hyperbola branch) with "Algebraic relationships: done"; the grey chip "the same amount added each year: what shape?" (worded exactly as a08's right panel), chips "Next: simple interest" and "?". The jar, axes and grey chip match a08's right panel, so i01 can open on either final frame. This is i01's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) `we-1`: 40 × 3 = 60 × 2 = 80 × 1.5 = 120 × 1 = 120; T = 120/s; T(100) = 1.2 h = 72 min = 1 h 12 min.
  (b) s = 120/T; T = 2.5: s = 48.
  (c) House: 1,200 ÷ 250 = 4.8; 1,200 ÷ 4 = 300; 1,200 ÷ 5 = 240.
  (d) Slider: T(120) = 1; T(40) = 3; T(10) = 12; T(1) = 120; T(300) = 0.4 h = 24 min (grey flag only). NSW's highest posted limit is 110 km/h (said as "no car can legally drive at three hundred"; no limit is quoted).
  (e) A1: 6/4 = 1.5 h. Pack (c), not asked: 6/n < 1 needs n > 6, so 7 mowers. A2: 240 ÷ 16 = 15; 240 ÷ 7 = 34.2857...; 34 × 7 = 238; 35 × 7 = 245.
  (f) Pronunciations: "T equals a hundred and twenty over s"; "one point two hours"; "zero point two of an hour"; "thirty-four point two nine".
  (g) Windows: car graph s 0 to 130, T 0 to 13 (zoomed to T 0 to 130 for the slider); house strip n 4 to 6.

Main question: *A car makes the same trip every time. At 40 km/h it takes 3 hours. How long at 100 km/h? How do we build and use a reciprocal model, and where does it fail?*
Entry knowledge (a12; math-s11-f03, f01; a07, a11b): y = k/x; changing the subject; substitution; the two-part limitation.
Stops after: building y = k/x from facts, solving by algebra and by graph, hours and minutes, rounding up, limitations of reciprocal models. The strand ends.
Handoff: math-s12-i01: "money added at the same amount each year: what shape?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x blue; y teal; k amber; level line violet; rounding arrow amber; answer green; mistake red; assumption amber, why-it-fails violet. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one trip, many speeds
> Here's that road trip, and here's the car that makes it, the same trip every time. The table shows its average speed, that's the whole distance divided by the whole time, and how long the trip takes. At forty kilometres an hour, three hours. At sixty, two hours. At eighty, one and a half hours. At a hundred and twenty, one **hour**. The faster it goes, the less time it takes, so it looks like inverse variation. But to answer new questions, like the time at a hundred kilometres an hour, we need the model itself. So how do we build and use a reciprocal model, and where does it **fail**?

Visual: opens on a12's final frame exactly (Revision 2: the road strip with the road sign "Lakeside" at its right end and no vehicle, "same trip every time", "40 km/h: 3 h", chips "100 km/h: how long?", "Next: building reciprocal models" and "?"). On the first sentence the "Next" chip fades, and on "here's the car" the red hatchback `maths/ma12-used-hatchback-v1.png` (320 px) drives in from the left edge and stops at the start of the road, the anchor arriving (root's decision 4 keeps the hatchback for a13). On "the whole distance divided by the whole time" a grey chip "average speed = whole distance ÷ whole time" writes under the table's speed row (Revision 2). The trip rider (simulation 1) runs the car along the strip at 40 km/h with a clock readout "3 h" (52 px); the table (52 px, site `we-1`) grows a row at each speed as the car reruns faster: "s (km/h): 40, 60, 80, 120" (blue), "T (h): 3, 2, 1.5, 1" (teal); on "hour" the fourth row writes. On "looks like inverse variation" a grey chip "a12: faster → less time". On "fail" heading "Reciprocal models", and the question chip "Build it. Use it. Where does it fail?" moves to the top right.

### 2. building the model
> Building the model takes four steps. First, name the two quantities, with their units. Average speed, s, in kilometres an hour, and time, T, in hours. Second, multiply a known pair to find k. Forty times three is a hundred and **twenty**. Check another pair. Sixty times two is a hundred and twenty too, so it really is inverse variation. Third, write the model, T equals a hundred and twenty over **s**. Fourth, say what k means. Speed times time is distance, so k is the trip's length, a hundred and twenty **kilometres**. In every reciprocal model, k is the fixed total that gets shared out.

Visual: clear change to the g01 board. Task strip (44 px): "Show the times vary inversely with the speed, find k and write the model. Say what k means." (site `we-1`). Givens card (44 px, grouped): "s: average speed (km/h)" (blue); "T: time (h)" (teal); the table. A four-step strip (44 px) at the left lights step by step: "1 name, with units", "2 multiply a pair", "3 write the model", "4 say what k means". On "First" the givens rows ring, hand tag "name it, with units". On "twenty" row (52 px) "k = 40 × 3 = 120" (k amber), hand tag "multiply a pair", and the constant-product rectangle (simulation 4) on a small plot at the right (s 0 to 130, T 0 to 4) shades (0, 0) to (40, 3), "area 120". On "Check another pair" it slides to (60, 2), "area 120", row "60 × 2 = 120 ✓", hand tag "check another pair". On "s" row "T = 120/s" (52 px). On "kilometres" row "k = 120 km: the trip's length", hand tag "k = the distance", and on the road strip the "Lakeside" sign gains "120 km" (Revision 2); framed answer (green): "T = 120/s, where 120 km is the distance".

### 3. using it: hours and minutes
> Now use it. How long does the trip take at a hundred kilometres an hour? Substitute s equals a hundred. T is a hundred and twenty over a hundred, which is one point two **hours**. But one point two hours isn't one hour and twenty minutes. Zero point two of an hour is zero point two times sixty minutes, which is twelve minutes. So the trip takes one hour and twelve **minutes**. Writing one hour and twenty minutes is the classic slip. An hour has sixty minutes, not a **hundred**.

Visual: clear change within the board. Task strip (44 px): "How long does the trip take at 100 km/h? Give your answer in hours and minutes." Givens: "T = 120/s"; "s = 100". Rows (52 px): "T = 120 ÷ 100" with "100" blue, hand tag "substitute"; on "hours" "= 1.2 h". The trip rider runs at 100 km/h, the clock stopping at "1.2 h". Row "0.2 h × 60 = 12 min", hand tag "0.2 h × 60 = 12 min"; on "minutes" framed answer (green): "1 h 12 min". On "hundred" (last bold) a red slip "1.2 h = 1 h 20 min" writes and is crossed, caption "60 minutes in an hour", hand tag "not 20 minutes"; a small clock face shows 12 minutes as one fifth of the hour.

### 4. solving the other way: algebra and graph
> What if you know the time, and want the speed? Rearrange. Speed times time is a hundred and twenty, so speed is a hundred and twenty divided by the time. To do the trip in two and a half hours, s is a hundred and twenty over two point five, which is forty-eight kilometres an **hour**. You can also solve it on the graph. Draw a horizontal line at T equals two point five, go across to where it meets the curve, then drop down to the speed **axis**. It lands at forty-**eight**. Both ways give the same answer, and each one checks the other.

Visual: stage change: the algebra at the left, the graph at the right. Left rows (52 px): "T = 120/s"; "s = 120/T" (hand tag "rearrange", grey chip "Year 11: changing the subject"); "s = 120 ÷ 2.5"; on "hour" "= 48 km/h" (framed, green). Right: the branch T = 120/s (1,000 × 640 px, s 0 to 130, T 0 to 4, grid every 10 and 0.5). On "Draw a horizontal line" the violet level line T = 2.5 draws (simulation 2), hand tag "across, then down"; it meets the curve, ringed amber; on "axis" a blue dashed drop runs down to the s-axis; on "eight" (bold "forty-eight") the drop lands at "48", ringed blue, and a green tick joins the two framed answers.

### 5. rounding up for whole things
> Sometimes the answer has to be a whole number. Back to the holiday house, twelve hundred dollars shared. The friends want each share to be at most two hundred and fifty dollars. How many people are needed? n is twelve hundred over two hundred and fifty, which is four point **eight**. You can't bring four point eight people. With four, each pays three hundred, which is too much. So round up to five, and each pays two hundred and forty **dollars**. Whenever you need a whole number of people, boxes or machines to get a job done, round **up**, even if the decimal is small.

Visual: clear change. The holiday house plate `ms12-holiday-house-v1.png` (700 px) at the left with "$1,200" and a grey chip "a12: share = 1,200 ÷ n". Rows at the right (52 px): "share ≤ $250"; "n = 1,200 ÷ 250"; on "eight" "= 4.8". A rounding strip (number line 4 to 6, 1,100 px) with an amber dot at 4.8. On "With four" a row "4 friends: 1,200 ÷ 4 = $300 > $250" with a red cross, hand tag "4 is too few". On "round up to five" an amber arrow from 4.8 to 5; on "dollars" row "5 friends: 1,200 ÷ 5 = $240 ✓"; framed answer (green): "5 friends". On "up" hand tag "round up".

### 6. where the model fails
> Every model has limits. Watch what happens as the speed slides down towards zero. At ten kilometres an hour, the trip takes twelve hours. At one, a hundred and twenty **hours**. At zero, the car never arrives, and the model can't even give an answer, because you can't divide by **zero**. At the other end, a huge speed gives a tiny time, but no car on a country road can legally drive at three hundred kilometres an **hour**. And the model only works if the car can really average that speed. Traffic, corners and stops pull the real average down, so a trip planned at a hundred kilometres an hour takes **longer** than the model says. A good limitation names the assumption, then says why it fails **here**.

Visual: stage change to the speed slider (simulation 3): the road strip with the car across the top; the graph below (1,300 × 560 px, s 0 to 130, T 0 to 13 at first). The slider "speed" starts at 120: readout "T = 1 h". It slides to 40 ("3 h"), then 10: the window stretches to T 0 to 130 and the point rides up the branch, readout "12 h", the car crawling. On "hours" it reaches 1: "120 h", the point near the top. On "zero" (bold) the slider hits 0: the car stops, the readout reads "never arrives", the point leaves the top of the graph, a grey tag "÷ 0: no answer", hand tag "never arrives". On "the other end" the slider jumps to 300 off the graph's right edge; on "hour" a grey flag "300 km/h: 0.4 h", hand tag "not legal". On "only works if the car can really average that speed" a limitation card (44 px) at the right fills its amber slot "you can choose the average speed"; on "longer" its violet slot "traffic, corners and stops pull the real average down, so the trip takes longer", the car pausing at a coded stop line on the strip (Revision 2: s is the average speed, so T = 120/s is exact for any real trip; the limitation is in choosing s, not in the formula). On "here" a grey chip "a11b: the assumption, then why it fails here".

### 7. memory aid
> Here's the summary. To build the model, multiply a known pair to get k, the fixed total. To use it, divide k by the value you know. Round up when you need whole things, and only trust the model where the situation makes **sense**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the amber rectangle (40 by 3) and the branch with the level line at 2.5. Main line, hand font 52 px: "Multiply to build: k = x × y. Divide to use: y = k ÷ x, x = k ÷ y." On "sense" the key line, 40 px: "k is the fixed total. Round up for whole things you need." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A council uses identical ride-on mowers to mow a sports oval. With three mowers, the job takes two hours. The time, T hours, varies inversely with the number of mowers, n. Find k and write the model. Then find how long the job takes with four mowers, in hours and minutes. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A council uses identical ride-on mowers to mow a sports oval. With 3 mowers the job takes 2 hours. The time T hours varies inversely with the number of mowers n. (a) Find k and write the model. (b) How long does the job take with 4 mowers? Give your answer in hours and minutes." The full question stays on screen. Picture slot: empty axes "n" across (blue) and "T (h)" up (teal), no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Multiply the known pair. Three times two is six, so k is six, and T equals six over **n**. With four mowers, T is six over four, which is one point five hours. That's one hour and thirty **minutes**. Writing one hour and fifty minutes is the slip. Zero point five of an hour is thirty minutes.

Visual: the card shrinks to the top (30 px). On "n" rows (44 px) "k = 3 × 2 = 6" (amber) and "T = 6/n"; the branch draws on the picture's axes. On "minutes" rows "T = 6 ÷ 4 = 1.5 h" and "0.5 h × 60 = 30 min", framed answer (green): "1 h 30 min", the point (4, 1.5) ringing. On "the slip" a red slip "1 h 50 min" writes and is crossed, caption "0.5 h = 30 min". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A bakery packs two hundred and forty muffins into identical boxes. The number of boxes, B, varies inversely with the number of muffins per box, b. Write the model, and find how many boxes are needed if each box holds sixteen muffins. The model gives thirty-four point two nine boxes when each box holds seven. How many boxes are actually needed? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A bakery packs 240 muffins into identical boxes. The number of boxes B varies inversely with the number of muffins per box b. (a) Write the model. (b) How many boxes are needed if each box holds 16 muffins? (c) The model gives B = 34.29 when b = 7. How many boxes are actually needed? Explain." Picture slot: empty. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The total is two hundred and forty muffins, so B equals two hundred and forty over **b**. With sixteen in each box, that's **fifteen** boxes. With seven in each box, thirty-four boxes hold only two hundred and thirty-eight muffins, so two muffins are left over. You need thirty-five **boxes**. Rounding down to thirty-four is the slip. Round up, so every muffin has a box.

Visual: the card shrinks to the top. On "b" row (44 px) "B = 240/b" (240 amber, "the total"). On "fifteen" row "B = 240 ÷ 16 = 15". Row "34 × 7 = 238: 2 muffins left over"; on "boxes" an amber arrow from 34.29 to 35 on a small rounding strip, framed answer (green): "(a) B = 240/b (b) 15 boxes (c) 35 boxes". On "the slip" a red slip "34 boxes" writes and is crossed, caption "round up". Hold about 1 s.

### 12. handoff
> That's the end of algebraic relationships. You've met straight lines, exponentials, parabolas and hyperbolas, each with its own shape, and its own limits. Next, money. Here's a coin jar, standing for money in an account that earns the same amount of interest every year. What shape will that balance make over the years? A straight line, again? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade on "That's the end". Board clear. On "straight lines" a strip of four small grey thumbnails writes across the top (a line, an exponential curve, a parabola, a hyperbola branch), each pulsing as it is named, with "Algebraic relationships: done". On "Here's a coin jar" the coin jar `maths/ma12-coin-jar-v1.png` (300 px badge) arrives beside small empty coded axes ("balance ($)" up in teal, "years" across in blue), with the grey chip "the same amount added each year: what shape?". On "next" chips "Next: simple interest" and "?". Hold about 2 s. This is i01's opening frame (its jar, axes and grey chip match a08's right panel); scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Build: name x and y with units. k = x × y from a known pair.
- Model: y = k/x, where k is the fixed total.
- Solve: y = k ÷ x or x = k ÷ y, or across and down on the graph.
- Hours: multiply the decimal part by 60 for minutes.
- Round up for whole things you need. Limits: x = 0, extreme values, a product that changes.

Memory aid (framed card, right side, as in scene 7): *Multiply to build: k = x × y. Divide to use: y = k ÷ x, x = k ÷ y.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and i01's opening frame.

## Teaching checks

- **Does it explain causes?** Why k = 120: speed × time is the fixed distance (2). Why divide to use it: T = k ÷ s comes from s × T = k (3, 4). Why the graph route works: the curve holds every pair (4). Why 0.2 h is 12 minutes: 60 minutes in an hour (3). Why round up: the smaller whole number breaks the condition (5). Why the model fails at 0 and at extremes: it assumes one average speed works for any speed (6).
- **Misconceptions addressed:** k by dividing (2, the multiply step); 1.2 h as 1 h 20 min (3 crossed, A1 crossed); rounding down (5, A2 crossed); "can't divide by zero" without the real reason (6, both reasons said); a limitation with no assumption (6 card).
- **Visual standard, item by item:** 1 the car on the road from the first frame (a12's), live in 1, 3 and 6; the house in 5; the coin jar in 12; 2 a new stage every 35 to 60 s; 3 the trip rider, the rectangle, the level-line solve, the speed slider; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 and 3 with framed answers and crossed slips; 8 framed card and five bullets; 9 the time readout climbing to "never arrives" as the car stops.
- **One idea at a time:** build (2), use and convert (3), the other way and the graph (4), rounding (5), limits (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s and 28 s (speech plus hold).
- **Avoided double teaching:** a12's test and graph, Year 11's changing the subject and a11b's two-part limitation are recalled in grey chips.
- **Syllabus coverage:** `ci0021fc94` (2, A1, A2; key notes 1, 2); `cib9514f33` (3, 4, 5, A1, A2; key notes 3, 4); `cib10770ae` (5, 6; key note 5).
- **Out of scope by design:** non-reciprocal models; the investment strand (i01 next).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1 (a) and (b), original, HSC style, 3 marks suggested, not an official marking scheme).** "A council uses identical ride-on mowers to mow a sports oval. With 3 mowers the job takes 2 hours. The time T hours varies inversely with the number of mowers n. (a) Find k and write the model. (b) How long does the job take with 4 mowers? Give your answer in hours and minutes."
Model answer: (a) k = 3 × 2 = 6, so T = 6/n. (b) T = 6 ÷ 4 = 1.5 h = 1 hour 30 minutes. Classic mistake (crossed): "1 h 50 min".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A bakery packs 240 muffins into identical boxes. The number of boxes B varies inversely with the number of muffins per box b. (a) Write the model. (b) How many boxes are needed if each box holds 16 muffins? (c) The model gives B = 34.29 when b = 7. How many boxes are actually needed? Explain."
Model answer: (a) B = 240/b (k = 240, the total number of muffins). (b) 240 ÷ 16 = 15 boxes. (c) 35 boxes: 34 boxes hold only 238 muffins, so a 35th box is needed for the last 2. Classic mistake (crossed): "34 boxes".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Site `we-1` | s 40, 60, 80, 120; T 3, 2, 1.5, 1; products 120; T = 120/s; k = 120 km | 1, 2, 7 |
| At 100 km/h | 1.2 h; 0.2 × 60 = 12 min; 1 h 12 min; slip 1 h 20 min | 3 |
| Other way | s = 120/T; T = 2.5: s = 48 km/h | 4, 7 |
| House | 1,200 ÷ 250 = 4.8; 4 friends $300; 5 friends $240 | 5 |
| Slider | T at s = 120, 40, 10, 1: 1, 3, 12, 120 h; s = 0 never arrives; s = 300: 0.4 h (flag) | 6 |
| A1 | k = 6; T = 6/n; T(4) = 1.5 h = 1 h 30 min | 8, 9 |
| A2 | B = 240/b; 15 boxes; 34.29 → 35 (34 × 7 = 238) | 10, 11 |
| Handoff | no value stated | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py`, run with `python -I`); Codex to re-check.

- 40 × 3 = 60 × 2 = 80 × 1.5 = 120 × 1 = 120; 120/100 = 6/5 = 1.2; 0.2 × 60 = 12.
- 120/2.5 = 48.
- 1,200/250 = 24/5 = 4.8; 1,200/4 = 300; 1,200/5 = 240.
- 120/10 = 12; 120/1 = 120; 120/300 = 0.4.
- 3 × 2 = 6; 6/4 = 1.5; 0.5 × 60 = 30. (Pack (c), not asked: 6/n < 1 ⟺ n > 6, so 7.)
- 240/16 = 15; 240/7 = 34.2857; 34 × 7 = 238; 240 − 238 = 2; 35 × 7 = 245.

## Memory aid check

- **"Multiply to build: k = x × y. Divide to use: y = k ÷ x, x = k ÷ y."** with the key line "k is the fixed total. Round up for whole things you need." (Revision 2: "you need" keeps the condition; "how many full boxes can you fill?" rounds down) Original, extending a12's "multiply to test". Meaning, as said in scene 7: a reciprocal model's constant comes from multiplying any known pair, and once k is known, either variable comes from dividing k by the other. Assumptions checked: the situation is inverse variation (the product really is constant; scene 2 checks a second pair); x, y ≠ 0; "round up" applies when the answer counts whole things needed to finish a job or meet a limit (people, boxes, machines), not to every quantity (time stays a decimal, converted to minutes). It helps a new case: a 360-page novel read at 24 pages a day takes 360 ÷ 24 = 15 days. Introduced after scenes 2 to 6.
- **Considered, not used:** "k is king" (memorable, but says nothing about how to find or use k).

## Narration length estimate

Revision 2, counted by script (narration blockquotes, bold markers removed; `work/brief-resolve-standard-a2/count.py`, which reproduces e08's 5,632): 5,401 characters (Revision 1: 5,271). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the trip rider, the rectangle, the level line, the speed slider) and the 45 s notes scene: about 495 s. Characters per scene (1 to 13): 583, 582, 470, 529, 563, 689, 226, 305, 285, 377, 360, 357, 75. Speech before the notes is about 400 s, under the 570 s cap. Feedback speech plus hold: about 22 s and 28 s.

Reserve trims if the voiced take runs long: scene 4's last sentence (keep the green tick); scene 5's "even if the decimal is small" (keep the strip).

## Scene list and build ids

Lesson key `m-s12a13` (route math-s12-a13). Explainer folder `src/explainer/lessons/math-s12-a13`; build inputs in `docs/production/claude-pm/lessons/math-s12-a13/` (at voicing).

In order (13 scene headings): hook-road-trip, build-model, use-hours-minutes, solve-other-way, round-up, where-it-fails, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | a12's frame; the trip at four speeds |
| 40 to 95 s | 2 | g01 board: building T = 120/s with the rectangle |
| 95 to 130 s | 3 | g01 board: 1.2 h = 1 h 12 min |
| 130 to 175 s | 4 | Algebra beside the graph, level line at 2.5 h |
| 175 to 220 s | 5 | Holiday house rounding strip |
| 220 to 280 s | 6 | Speed slider to zero; limitation card |
| 280 to 295 s | 7 | Framed memory card |
| 295 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 415 s | 12 | Strand thumbnails; the coin-jar frame for i01 |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a12's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 clear change within the board; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a13-learning-review.md`, `science_check` = `checks/m-s12-a13-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only, viewed on the paper background): `ma12-used-hatchback-v1.png`, `ma12-country-road-v1.png` (reused, the anchor); `ma11-road-sign-post-v1.png` (blank green sign on a post; reused from a12's final frame, Revision 2); `ma12-coin-jar-v1.png` (reused, final frame). From a11b's brief: `ms12-holiday-house-v1.png`. Not chosen: `ma12-delivery-van-v1.png` (a box truck; a car fits a private trip). The mowers and muffins stay on question cards (no plate), so no new plate is needed.

Coded: every table and graph, the rectangle, the level line, the rounding strips, the speed slider and readouts, the limitation card, the strand thumbnails, the axes in the final frame, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `ConstantProductRectangle` (from a12), `FunctionRider`, `LiveReadoutBoard`, `ParameterSlider`, `StudioLevelLine`, `StudioDomainStrip`, `IntervalPicture` (rounding strip), `ModelCard`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a13: none beyond a12's part):
1. **Stretching window** (small `StudioPlot` option): the y-range grows smoothly as a rider climbs (T 0 to 13, then 0 to 130), with axis numbers re-laid out, so the climb stays visible. Check: the point at s = 1 (T = 120) is on screen before s reaches 0.
2. **Rounding arrow** (small `IntervalPicture` mode): a dot at a decimal, an amber arrow to the next whole number, with a tick or cross on the whole number below. Check: 4.8 → 5 and 34.29 → 35.

## Codex asset brief

No new plate. The holiday house is painted under a11b's brief (`math-s12-a11b.md`); the road, road sign, hatchback and coin jar are reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly (including "in y = k/x" in `cib9514f33`; MS-08).
3. Confirm site `we-1` keeps its numbers, and that no Boyle's Law, pressure or volume example appears.
4. Confirm every decimal-hour answer is converted with 60 minutes, and every whole-thing answer rounds up.
5. Confirm each limitation in learner copy names the assumption and why it fails.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm scene 1 opens on a12's final frame and scene 12's jar, axes and grey chip match a08's right panel (i01's opening).
8. Confirm no em dash (U+2014), Australian spelling, the narration count, and every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Building and Using Reciprocal Models: y = k/x | Year 12 Maths Standard 2

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson06.sa.html

A car makes the same trip every time: 3 hours at 40 km/h. How long at 100 km/h? Learn the four steps to build a reciprocal model y = k/x from one fact, and see why k is a real total (here, the trip's 120 km). Solve problems algebraically and from the graph, turn decimal hours into hours and minutes, and round up when you need whole people, boxes or machines. Then explain where the model fails: a speed of zero, extreme values, and real trips that don't keep one average speed. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Construct a reciprocal model of the form y = k/x to analyse inverse variation problems"
"Solve inverse variation problems graphically, or algebraically given the value of two of the variables in y = k/x"
"Explain the limitations of reciprocal models in practical inverse variation problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Inverse variation and the hyperbola. Next: Simple interest.

#Year12Maths #MathsStandard #InverseVariation #HSCScience

## Open decisions

All three are closed in Revision 2 (see "Revision 2" at the top): 1 stands as written (no i01 design yet), 2 by the review, 3 by the review's finding 1 and root's decision 3. The Revision 1 text is kept below for the record.

- **1. The i01 join (root and the i01 designer).** No i01 design exists. The final frame is the coin jar beside empty axes with "the same amount added each year: what shape?", stating no rate, balance or answer, so i01 stays free to choose its anchor and numbers. a08's right panel uses the same jar, axes and grey chip, so Standard 1 viewers (a08 then i01) and Standard 2 viewers (a13 then i01) arrive at the same picture. If the i01 designer picks a different anchor, only scene 12 here and a08's right panel change.
- **2. Pack question 1 (c) and (d) dropped (learning review).** The mowers question asks only (a) and (b) to keep feedback near 25 s; scene 6 teaches limitations on the car. If the reviewer wants a limitation attempt, swap A1 for pack question 1 (d).
- **3. The road trip's average speed (learning review).** The narration says "average speed" from the first sentence so the limitation in scene 6 (traffic, corners, stops) reads as an assumption the model made, not a new rule.

## Review notes

- Revision 2 (18 Nov 2026): independent learning review resolved (`../checks/m-s12-a13-learning-review.md`; log `../checks/m-s12-a07-a13-learning-review-resolution.md`). Next: Codex maths check and error check, then voicing on the Google voice and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from a12, Year 11 changing the subject and a11b; check that k as the distance is a discovery, that 0.2 h to 12 minutes is shown on the clock face, that rounding up is caused by the $300 share, that the speed slider makes "never arrives" seen, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
