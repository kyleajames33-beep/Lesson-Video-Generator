# Maths A11 C02: How does a tangent capture speed at one instant? Average and instantaneous speed, shrinking the interval after t, the tangent's gradient, and estimating speed from a drawn tangent (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,644 characters by script (see "Narration length estimate"), 13 scene headings, about 512 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c02-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 (the slow-motion film strip is never narrated): **accepted**, reviewer's sentence after the 2.1 row: "It's like filming the car in slow motion: the closer together the frames, the truer the speed you measure." New cue "motion": the film strip enlarges briefly, hand tag "slow motion: closer frames, truer speed". Scene 2's reserve trim was not needed (the video stays well under the cap).
2. Optional, open decision 2 (A2's picture): **kept as written** on the reviewer's advice (the drawn tangent stays); open decision closed.
3. Optional, feedback 1 (about 29.6 s): **kept as written**; "At one second, it's travelled three metres." is now the named reserve trim if the voiced take runs over 30 s.

Narration now 5,644 characters by script (Revision 1: 5,537), about 512 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirty-third video of Year 11 Mathematics Advanced (2024), outline order 33, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c02.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson01.sa.html` (`we-3`, s = t², re-set as the remote-control car, numbers unchanged) and `lesson12.sa.html` (`we-2`, the tangent through (2, 20) and (8, 80), numbers unchanged). Route entry: `math-a11-c02` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted remote-control car and track strip from c01 and the reused phone (prefix `ma11-`); every graph, secant, tangent, table and readout coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: a hobby car), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Estimating change), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci6a71a44d`: "Describe the difference between the average speed of an object and its instantaneous speed"
- `ci9f5aa4ac`: "Determine that the instantaneous speed of an object at time t can be approximated by the average speed between its position at time t and its position some time later, and explain how this approximation can be improved"
- `ci8c73fdcb`: "Relate the instantaneous speed of an object to the gradient of the tangent at that point on its distance–time graph"
- `ci0b795741`: "Estimate the instantaneous speed of an object from its distance–time graph"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c01's final frame (the car at the finish line, a speed-gun box "? m/s", a small distance-time plot with an amber secant "average: a secant ✓" and a dot "one instant: ?"). Teaches: average speed (total distance over total time) against instantaneous speed (the speed at one moment) (`ci6a71a44d`); approximating the speed at t by average speeds from t to later times, improved by shortening the interval, with the reason (`ci9f5aa4ac`, site `we-3`); the secants pivoting onto the tangent, whose gradient is the instantaneous speed (`ci8c73fdcb`); estimating it from a drawn tangent with two far-apart points on the tangent, not the curve (`ci0b795741`, site lesson12 `we-2`). Stops at speed. Not taught: other rates and practical graphs (c03); the general P and Q(c + h) with negative h (c04); f′ and its notation (c05). The word "limit" is used as "the value the averages settle on", without notation.

## Decisions

- **Anchor: the remote-control car from c01, now starting from rest (painted plates, live).** It pulls away from the start line with distance s = t² metres after t seconds (site `we-3`'s runner, re-set; numbers unchanged), so its speed grows and its average never matches its speed at a moment. Filming it on the reused phone in slow motion is the everyday version of "a little later": frames closer together give a better speed. Games. c01 introduced the car (decisions file, open decision 2 there). The pack's highway speed camera was rejected: Year 12 d08 is a road trip's average speed and d14 a car on a road.
- **Simulations (standard item 3).**
  1. **`TripSim`** (scenes 1, 2): the car pulls away along the track strip, its position from s = t², with a distance ticker, stopwatch and an "average so far" readout that lags behind a coded speed-gun box that shows the instantaneous value 2t, so the student sees the two speeds differ.
  2. **`SecantPivot` with `RefinementTable` and `ConvergenceStrip`** (scenes 3, 4): on s = t², P fixed at t = 2 and Q at 3, 2.1, 2.01; the amber secant pivots towards the violet tangent while the table fills 5, 4.1, 4.01 and the strip settles on 4. The phone's slow-motion frames (coded film strip over the phone screen) step closer together in sync.
  3. **`TangentReader`** (scenes 5, 6; new part): a drawn violet tangent with two ringed read points on it, rise and run legs and a readout; a "near" pair beside it shows how a small reading error swings the answer.
- **Colour roles (fixed, as c01).** Run blue; rise teal; secant amber; tangent and instantaneous speed **violet**; answer green; mistake red, crossed slips only. The speed-gun box is violet, the "average" readout amber, so the two kinds of speed keep their colours.
- **Large type, handwritten voice.** As c01. Hand tags: "average: whole trip", "instant: one moment", "a little later", "less time to speed up", "settles on 4", "secant → tangent", "on the tangent", "far apart", "not on the curve", "at 4 s only".
- **Stage changes (standard item 2).** The finish line (1); the run from rest with two readouts (2); the refinement table and pivoting secant with the film strip (3); the tangent (4); reading a drawn tangent (5); g01 board (6); framed card (7); question cards (8 to 11); the hot chocolate (12); key notes (13).
- **Worked examples (g01 layout).** 3: site `we-3` as a table (4.1, 4.01; plus h = 1 giving 5). 6: site lesson12 `we-2`, tangent through (2, 20) and (8, 80): 10 m/s; crossed "(2, 25) and (8, 100) on the curve: 75/6 = 12.5" (a secant). The curve drawn for `we-2` is s = 1.25t² + 20 (author note c), whose tangent at t = 4 is s = 10t.
- **Memory aid.** Framed card: "Average: two points on the curve. Instant: two points on the tangent." Badge: a secant and a tangent at the same point, amber and violet.
- **Visual surprise.** The amber secant swings as Q slides in and lands exactly on the violet tangent, while the table's numbers close in on 4 and the phone's frames squeeze together.
- **Site notes (pack section 8).** No logged error affects this video. lesson03's "two points become one" (logged under c05) is avoided: the narration says the second point slides towards the first, never that they become one.
- **Plain meanings at first use.** Instantaneous ("at one instant, one moment"); tangent (recalled from w17 as a line that touches the curve at a point, here "the line that just grazes the curve there and matches its steepness"); limit ("the value the averages settle on").
- **Attempts (pack questions).** A1: d = 3t² at t = 1: averages 6.3 and 6.03, estimate 6 m/s; crossed "3.63 ÷ 1.1 = 3.3" (average from 0, not from 1). A2: tangent at t = 5 through (3, 5) and (8, 55): 10 m/s; average over the first 5 s 25/5 = 5 m/s; twice as fast, so speeding up; crossed "(0, 0) and (5, 25) for the speed at 5".
- **Mistake scene:** none separate. Points on the curve for a tangent (5, 6 crossed; A2 crossed); close points (5 tag); dividing by the wrong time (A1 crossed); the average as the speed at a moment (2).
- **Cause chain taught, in order:** (1) an average uses total distance over total time, so when the speed changes it can't be the speed at a moment (2); (2) at one instant no time passes, so we take averages from t to a little later (3); (3) a shorter interval leaves less time for the speed to change, so the average gets closer (3); (4) each average is a secant's gradient, and as the interval shrinks the secants pivot onto the tangent, so the instantaneous speed is the tangent's gradient (4); (5) on a printed graph you read two far-apart points on the drawn tangent, because a short run magnifies reading errors and points on the curve would give a secant (5, 6).
- **Entry knowledge (route):** c01 (average rate as a secant's gradient; average speed from a distance-time graph with units); w17 (a tangent touches a curve at one point; the phrase is widened here, not contradicted).
- **Handoff (to math-a11-c03, "How do we estimate a changing rate from a real-world graph?").** Scene 12: the hot chocolate mug (`ma11-hot-chocolate-mug-v1.png`, steam drawn as a coded wisp) on the left; at the right a temperature-time plot (t 0 to 30 min, T 0 to 90 °C) with the cooling curve drawn and a violet tangent at t = 4 drawn dashed with "?" on its gradient; chips "Next: rates of other things" and "°C per minute?". This is c03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) s = t²: averages from 2: to 3: 5; to 2.1: 4.1 (s(2.1) = 4.41); to 2.01: 4.01 (s(2.01) = 4.0401); limit 4 = s′(2). Average over [0, 4]: 4. Instantaneous at 4: 8 (never stated as a number in narration; the gun box shows 2t live).
  (b) Tangent at t = 2: s = 4t − 4; points (1, 0) and (6, 20). Near pair for the error picture: (2, 4) and (2.5, 6), with a 0.5 m misreading of the upper point giving 6.5: (6.5 − 4)/0.5 = 5 (a 25% error from a small slip).
  (c) `we-2` curve: s = 1.25t² + 20, s(4) = 40, s′(4) = 10, tangent s = 10t through (2, 20) and (8, 80); curve points s(2) = 25, s(8) = 100; secant 75/6 = 12.5.
  (d) A1: 3(1.1)² = 3.63; 0.63/0.1 = 6.3; 3(1.01)² = 3.0603; 0.0603/0.01 = 6.03; exact 6. Slip 3.63/1.1 = 3.3. A2: 50/5 = 10; 25/5 = 5.
  (e) Pronunciations: "t squared"; "four point zero one"; "three point zero six zero three"; "zero point zero one".
  (f) Windows: car plot t 0 to 4, s 0 to 16 (scene 2) and t 1 to 3.2, s 0 to 10 (scenes 3 to 5); `we-2` plot t 0 to 9, s 0 to 110; A1 picture t 0 to 1.5, d 0 to 7; A2 picture t 0 to 9, s 0 to 60.

Main question: *The car crosses the finish line. A speed gun shows one number. How does a tangent capture speed at one instant?*
Entry knowledge (c01, w17): average speed as a secant's gradient with units; a tangent touches a curve at a point.
Stops after: average against instantaneous speed; approximating by later averages and improving them; the tangent's gradient; reading a drawn tangent. No other rates, no f′.
Handoff: math-a11-c03: "a cooling hot chocolate: how fast at one moment, and in what units?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): run blue; rise teal; secant and average amber; tangent and instantaneous speed violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one number at one moment
> Here's that remote-control car again, heading for the finish line. Over a stretch of track, we can find its average speed from a secant. But a speed gun at the finish line shows one number, the car's speed at that instant. A speedometer in a real car does the same. If the car kept a steady speed, the average would be the answer, but it doesn't. A secant needs two points, and an instant is just **one**. So how can a graph give a speed at one moment? How does a tangent capture speed at one instant?

Visual: opens on c01's final frame exactly (the track strip `ma11-rc-track-strip-v1.png` and car `ma11-rc-car-v1.png` at the finish line, the violet speed-gun box "? m/s", the small distance-time plot with its amber secant "average: a secant ✓" and the dot "one instant: ?", chips "Next: speed at one instant" and "?"). On the first sentence the chips fade and the car rolls across the line; the gun box flashes a violet number. On "one" the dot pulses and a red-pencil "?" sits beside it. Heading: "Speed at one instant?" The chip "How fast at one moment?" moves to the top right.

### 2. average versus instantaneous
> This time the car starts from rest. Its distance is t squared metres after t seconds. Over the first four seconds it covers sixteen metres, so its average speed is four metres per **second**. But at the start it isn't moving at all, and by the end it's going much faster than **four**. The average smooths all of that into one number. Average speed is the total distance over the total time. Instantaneous speed is how fast it's going at one moment, the number on a speedometer or a speed gun. They're different here, because the car keeps speeding **up**.

Visual: clear change. Top: the track strip with the car at the start line; `TripSim` runs it from s = t² over 4 s, the distance ticker (teal), stopwatch (blue), an amber "average so far" readout and the violet speed-gun box showing 2t live. Below: the plot (t 0 to 4, s 0 to 16; 1,100 × 520 px) draws in step. On "second" the amber secant from (0, 0) to (4, 16), row 52 px "16 ÷ 4 = 4 m/s", hand tag "average: whole trip". On "four" (second) the run replays: at t = 0 the gun box reads "0" and the amber readout is blank; at t = 4 the gun box passes the amber "4" and keeps climbing, hand tag "instant: one moment". On "up" both readouts sit side by side: "average 4 m/s" (amber), "now: faster" (violet).

### 3. averages from t to a little later
> So how fast is it going at exactly two seconds? In no time at all, it goes no distance, and zero over zero tells us nothing. But we can take the average speed from two seconds to a little later. From two to three seconds, it goes from four metres to nine, so five metres per **second**. From two to two point one, it goes from four to four point four one. That's zero point four one metres in zero point one seconds, so four point one metres per **second**. It's like filming the car in slow **motion**: the closer together the frames, the truer the speed you measure. From two to two point zero one, it's four point zero **one**. Each estimate is a little too big, because the car speeds up during the interval. The shorter the interval, the less time the car has to speed up, so the closer the average gets to its speed at two seconds. With an even shorter interval, you'd get four point zero zero one. The answers are settling on **four**.

Visual: stage change. Left (900 × 700 px): the plot zoomed to t 1 to 3.2, s 0 to 10, P ringed at (2, 4) in ink. Right: `RefinementTable`, 44 px rows, columns "later time", "distance there", "average from 2 s"; the reused phone (`maths/ma12-phone-v1.png`, 420 px) above it with a coded slow-motion film strip on its screen. On "second" (first) row "3 | 9 | (9 − 4) ÷ 1 = 5" and the amber secant from P to (3, 9); the film strip shows two frames 1 s apart. On "second" (second) row "2.1 | 4.41 | 0.41 ÷ 0.1 = 4.1"; the secant pivots down; frames closer. On "motion" the phone's film strip enlarges briefly, its two frames ringed, hand tag "slow motion: closer frames, truer speed". On "one" row "2.01 | 4.0401 | 4.01"; frames almost touching; on "a little too big" hand tag "a bit too big: still speeding up" beside the column. On "four point zero zero one" a grey row "2.001 | 4.004001 | 4.001". Hand tag "a little later" on the column header; on "less time to speed up" hand tag of those words by the table. On "four" `ConvergenceStrip` under the table settles on "4", hand tag "settles on 4".

### 4. the tangent
> Watch the graph while that happens. Each average is the gradient of a secant from the point at two seconds. As the second point slides in, the secant pivots, and it settles onto one line that just grazes the curve there. That's the tangent at t equals **two**. A tangent isn't just any line that touches the curve. It's the line that matches the curve's steepness at that point. Its gradient is the value the averages were heading for, four metres per second. So the instantaneous speed is the gradient of the tangent on the distance-time **graph**. That's why the tangent is the right line for one instant.

Visual: the same plot, enlarged to 1,200 × 760 px (simulation stage). `SecantPivot` replays Q sliding from 3 to 2.01 continuously; the amber secant swings and, on "two", lands on the violet tangent s = 4t − 4, which turns solid violet, hand tag "secant → tangent"; on "matches the curve's steepness" a second tag "matches the steepness". The violet gun box from scene 2 slides in beside it reading "4 m/s at t = 2". On "graph" the row 52 px "instantaneous speed = gradient of the tangent" writes, violet.

### 5. reading a drawn tangent
> On a printed graph, you estimate it by drawing the tangent carefully, then picking two points on the tangent, far apart. This one passes through one, zero and six, **twenty**. That's a rise of twenty metres over a run of five seconds, so four metres per second. Why far apart? Here are two points only half a second apart. Misread one of them by half a metre, and the answer jumps from four to five. A tiny run magnifies any small error in reading the **graph**. And the two points must be on the tangent, not on the curve. Points on the curve give a secant, which is an average **again**. Two far-apart points on the tangent, and you'll get four every time.

Visual: clear change: a fresh plot (t 0 to 7, s −2 to 26; 1,100 × 700 px) with the curve and the violet tangent drawn full length. `TangentReader`: on "twenty" ringed points (1, 0) and (6, 20) on the tangent, legs "5 s" (blue), "20 m" (teal), row 52 px "20 ÷ 5 = 4 m/s" (green frame), hand tags "on the tangent", "far apart". On "graph" a near pair (2, 4) and (2.5, 6) rings in grey; one point jitters up by half a grid line and the grey readout jumps from 4 to 5, tag "small run, big error". On "again" two points on the curve ring and an amber secant flashes through them, red tag "not on the curve: that's a secant".

### 6. worked example: speed from a tangent
> Let's try one. On a distance-time graph, in metres and seconds, the tangent at t equals four passes through two, twenty and eight, **eighty**. Both points are on the tangent, so use them directly. The rise is sixty and the run is six seconds, wide enough that a small misreading hardly matters. So the speed at four seconds is ten metres per **second**. That's the speed at four seconds only. Reading the two points off the curve instead gives a secant, which is an average, not the speed at **four**.

Visual: clear change to the g01 board. Task strip, 44 px: "The tangent at t = 4 passes through (2, 20) and (8, 80). Find the instantaneous speed at t = 4 (metres, seconds)." Small plot at the right (t 0 to 9, s 0 to 110): the curve and the violet tangent. Givens card: "(2, 20)", "(8, 80)" (both "on the tangent"). On "eighty" both givens ring on the tangent. Rows, 52 px: "(80 − 20)/(8 − 2) = 60/6"; on "second" "= 10 m/s at t = 4" (green frame), hand tag "at 4 s only". On "four" a red slip "(2, 25) and (8, 100) on the curve: 75/6 = 12.5 m/s" writes and is crossed, caption "points on the curve: an average".

### 7. memory aid
> Here's the summary. Average: two points on the curve. Instant: two points on the **tangent**. And shorter and shorter intervals turn the first into the second. So when a question says "at" a time, reach for a tangent.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a curve with an amber secant pivoting onto a violet tangent. Main line, hand font 60 px: "Average: two points on the curve." On "tangent" the second line: "Instant: two points on the tangent." Key line, 36 px: "shrink the interval after t: the averages settle on the tangent's gradient". Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A ball rolls down a ramp so that its distance travelled is three t squared metres after t seconds. Find its average speed over the interval from one to one point one, and from one to one point zero one. Then use them to estimate its speed at t equals one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A ball rolls down a ramp so that its distance travelled is d = 3t² metres after t seconds. Find its average speed over [1, 1.1] and over [1, 1.01], and use them to estimate its speed at t = 1." The full question stays on screen. Picture slot: empty axes "t (s)", "d (m)". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> At one second, it's travelled three metres. At one point one, it's three point six three. That's zero point six three over zero point one, six point **three**. Over the shorter interval, the average is six point zero **three**. They're settling on six, so the speed at one second is about six metres per **second**. Dividing three point six three by one point one is the slip. That's the average from **zero**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "d(1) = 3, d(1.1) = 3.63"; on "three" "(3.63 − 3)/0.1 = 6.3"; on "three" (second) "(3.0603 − 3)/0.01 = 6.03". On "second" framed answer (green): "about 6 m/s". On "zero" a red slip "3.63 ÷ 1.1 = 3.3" writes and is crossed, caption "subtract d(1); divide by 0.1". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A distance-time graph, in metres and seconds, passes through zero, zero and five, twenty-five. The tangent at t equals five passes through three, five and eight, fifty-five. Find the instantaneous speed at t equals five, and compare it with the average speed over the first five seconds. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A distance-time graph (metres, seconds) passes through (0, 0) and (5, 25). The tangent at t = 5 passes through (3, 5) and (8, 55). Find the instantaneous speed at t = 5 and compare it with the average speed over the first 5 seconds." Picture: the curve s = t² from 0 to 8 with the tangent at t = 5 drawn, the four points marked without values beyond the card's. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The tangent rises fifty metres over five seconds, so the speed at five seconds is ten metres per **second**. The average over the first five seconds is twenty-five over five, five metres per **second**. It's going twice its average, so it has been speeding up. Using the curve's points for the speed at five is the slip. They give the **average**.

Visual: the card shrinks to the top. On "second" (first) the tangent's points ring, row "(55 − 5)/(8 − 3) = 50/5 = 10 m/s" (violet); on "second" (second) the amber secant from (0, 0) to (5, 25), row "25 ÷ 5 = 5 m/s". Framed answer (green): "10 m/s at t = 5: twice the average, 5 m/s, so speeding up". On "average" a red slip "speed at 5 = 25 ÷ 5 = 5" writes and is crossed, caption "on the curve: average". Hold about 1 s.

### 12. handoff
> So far, every rate has been a speed. But the same idea works for anything that changes. Instead of distance against time, we'll have temperature against time. Here's a mug of hot chocolate, cooling on the bench. It cools fast at first, then slowly. How fast is it cooling at one moment, and what are the **units**? That's next.

Visual: the memory line shows small at the top (30 px), then fades. The hot chocolate mug `ma11-hot-chocolate-mug-v1.png` (560 px) at the left with a coded steam wisp; at the right a temperature-time plot (t 0 to 30 min, T 0 to 90 °C) with the cooling curve drawing, a dashed violet tangent at t = 4 with "?" on its gradient. On "units" chips "Next: rates of other things" and "°C per minute?". Hold about 2 s. This is c03's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Average speed = total distance ÷ total time: a secant's gradient.
- Instantaneous speed: the speed at one moment, the tangent's gradient.
- Estimate it with averages from t to a little later; shorter intervals do better.
- From a graph: draw the tangent, use two far-apart points on it.
- Two points on the curve give an average, not an instant.

Memory aid (framed card, right side, as in scene 7): *Average: two points on the curve. Instant: two points on the tangent.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c03's opening frame.

## Teaching checks

- **Does it explain causes?** Why the average differs from the instant: the speed changes during the interval (2). Why we use later times: an instant has no duration (3). Why shorter intervals are better: less time to speed up (3). Why the tangent: it is where the secants settle (4). Why far-apart points on the tangent: a short run magnifies errors; curve points give a secant (5, 6).
- **Misconceptions addressed:** one point is enough (1, 3); points on the curve (5, 6, A2 crossed); close points (5); dividing by the time from zero (A1 crossed); the estimate as exact (3: "settling on"; author note: it overestimates while the car speeds up).
- **Visual standard, item by item:** 1 the painted car and track from the first frame, the phone in 3, the mug in 12; 2 a new stage every 35 to 60 s; 3 `TripSim` with two speed readouts, `SecantPivot` with `RefinementTable` and the film strip, `TangentReader` with the error jitter; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the secant landing on the tangent.
- **One idea at a time:** the difference (2), the approximation (3), the tangent (4), reading it (5), applying it (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 25 s.
- **Avoided double teaching:** average speed as a secant (c01) is recalled in one sentence; the tangent idea (w17) in one phrase.
- **Syllabus coverage:** `ci6a71a44d` (2; key notes 1, 2); `ci9f5aa4ac` (3, A1; key note 3); `ci8c73fdcb` (4; key note 2); `ci0b795741` (5, 6, A2; key notes 4, 5).
- **Out of scope by design:** other rates (c03); Q(c + h) with negative h (c04); f′ (c05).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A ball rolls down a ramp so that its distance travelled is d = 3t² metres after t seconds. Find its average speed over [1, 1.1] and over [1, 1.01], and use them to estimate its speed at t = 1."
Model answer: d(1) = 3, d(1.1) = 3.63, d(1.01) = 3.0603. Averages (3.63 − 3)/0.1 = 6.3 m/s and (3.0603 − 3)/0.01 = 6.03 m/s. They approach 6, so the speed at t = 1 is about 6 m/s. Classic mistake (crossed): "3.63 ÷ 1.1 = 3.3".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "A distance-time graph (metres, seconds) passes through (0, 0) and (5, 25). The tangent at t = 5 passes through (3, 5) and (8, 55). Find the instantaneous speed at t = 5 and compare it with the average speed over the first 5 seconds."
Model answer: tangent gradient (55 − 5)/(8 − 3) = 10 m/s. Average 25/5 = 5 m/s. At t = 5 it moves at twice its average speed, so it has been speeding up. Classic mistake (crossed): "speed at 5 = 25 ÷ 5 = 5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Run from rest | s = t²; first 4 s: 16 m, 4 m/s | 2 |
| Site `we-3` | from 2: to 3: 5; to 2.1: 4.41, 4.1; to 2.01: 4.0401, 4.01; settles on 4 | 3, 4 |
| Tangent at 2 | s = 4t − 4; (1, 0), (6, 20): 20/5 = 4 | 4, 5 |
| Error picture | (2, 4), (2.5, 6); misread 6.5: 2.5/0.5 = 5 | 5 |
| Site lesson12 `we-2` | (2, 20), (8, 80): 60/6 = 10; curve points (2, 25), (8, 100): 75/6 = 12.5 | 6 |
| A1 | 3.63, 6.3; 3.0603, 6.03; about 6; slip 3.3 | 8, 9 |
| A2 | 50/5 = 10; 25/5 = 5 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- s = t²: s(2) = 4, s(3) = 9, s(2.1) = 4.41, s(2.01) = 4.0401, s(2.001) = 4.004001 (grey row: 4.001); (9 − 4)/1 = 5; 0.41/0.1 = 4.1; 0.0401/0.01 = 4.01; s′(2) = 4; 16/4 = 4.
- Tangent at 2: s = 4t − 4: s(1) = 0, s(6) = 20; 20/5 = 4. Error pair: (6.5 − 4)/0.5 = 5.
- `we-2`: (80 − 20)/(8 − 2) = 10; author curve s = 1.25t² + 20: s(4) = 40, s′(4) = 10, tangent s = 10t; s(2) = 25, s(8) = 100; 75/6 = 12.5.
- A1: 3(1.1)² = 3.63; 0.63/0.1 = 6.3; 3(1.01)² = 3.0603; 0.0603/0.01 = 6.03; d′(1) = 6; 3.63/1.1 = 3.3.
- A2: (55 − 5)/(8 − 3) = 10; 25/5 = 5. (The pictured curve s = t² has tangent s = 10t − 25 at t = 5, through (3, 5) and (8, 55).)

## Memory aid check

- **"Average: two points on the curve. Instant: two points on the tangent."** Original. Meaning, as said in scene 7: a secant through two curve points gives an average rate; a drawn tangent read at two of its own points gives the rate at one instant; shrinking the interval turns secants into the tangent. Assumptions checked: the curve is smooth at the point (a tangent exists; corners come in c04 and c05). It helps a new case: on any distance-time graph, "speed at 3 s" means read the tangent at 3. Introduced after scenes 2 to 6. Pairs with c01's "Two points, one secant".
- **Considered, not used:** "Zoom until it's straight" (kept for c04's map anchor).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,644 characters (Revision 2; Revision 1 was 5,537). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the run from rest, the pivoting secant, the film strip) and the 45 s notes scene: about 512 s. Characters per scene (1 to 13): 497, 544, 922, 599, 646, 489, 213, 288, 394, 319, 335, 323, 75. Speech before the notes is about 419 s, 58 s under the 570 s cap. Feedback speech: about 30 s and 25 s.

Reserve trims if the voiced take runs long: feedback 1's "At one second, it's travelled three metres." if it measures over 30 s (keep the row "d(1) = 3, d(1.1) = 3.63"); scene 2's last sentence; scene 5's "Why far apart?" sentence (keep the jitter on screen).

## Scene list and build ids

Lesson key `m-a11c02` (route math-a11-c02). Explainer folder `src/explainer/lessons/math-a11-c02`; build inputs in `docs/production/claude-pm/lessons/math-a11-c02/` (at voicing).

In order (13 scene headings): hook-finish, average-vs-instant, later-averages, tangent, read-tangent, worked-tangent, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | c01's frame; the finish line |
| 30 to 70 s | 2 | The run from rest, two speed readouts |
| 70 to 130 s | 3 | Refinement table, pivoting secant, film strip |
| 130 to 160 s | 4 | The tangent |
| 160 to 200 s | 5 | Reading a drawn tangent |
| 200 to 235 s | 6 | g01 board, site lesson12 we-2 |
| 235 to 250 s | 7 | Framed memory card |
| 250 to 375 s | 8 to 11 | Question cards and countdowns, then feedback |
| 375 to 395 s | 12 | The hot chocolate |
| 395 to 440 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c01's last frame continues into 1; 1 to 2 clear change; 2 to 3 stage change; 3 to 4 continuous (simulation); 4 to 5 clear change; 5 to 6 clear change to the g01 board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c02-learning-review.md`, `science_check` = `checks/m-a11c02-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-phone-v1.png` (plain phone, blank screen) is reused for the slow-motion film strip. The car and track strip are c01's new plates. No mug or hot drink plate exists.

Need (painted, new; see the Codex asset brief): `ma11-hot-chocolate-mug-v1.png` (for this video's handoff and c03). Reused: `ma11-rc-car-v1.png`, `ma11-rc-track-strip-v1.png` (c01's brief), `maths/ma12-phone-v1.png`.

Coded: every graph, secant, tangent, table, readout, the speed-gun box, the film strip, cards, countdown, hand tags, key notes, the steam wisp.

### Studio kit use and additions

Uses: `TripSim`, `SecantPivot` (c01 addition), `RefinementTable`, `ConvergenceStrip`, `StudioTangentTriangle`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, `WorkingBoard`, `GivensCard`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`TangentReader`** (new; used in c02, c03): a violet tangent line drawn from (t₀, f(t₀)) with gradient f′(t₀); two ringed read points at given t-values on the tangent, run and rise legs, a readout "rise ÷ run = value unit"; an optional `near` pair with a jitter cue. Check: both ringed points lie on the tangent within 0.5 px, and the readout equals the tangent's gradient.
2. **Speed-gun box on `TripSim`**: a violet readout showing the model's derivative at the current time (computed numerically from the distance model), beside the existing amber average.

## Codex asset brief (Maths A11 C02, a hot chocolate mug; also c03)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c02.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c02 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, logos, people, hands, faces, glow or painted steam (code draws the steam). Never stretch.

1. `ma11-hot-chocolate-mug-v1.png` (1200 × 1200 px): a plain ceramic mug of hot chocolate, a little froth on top, seen from the side at a slight downward angle, standing on a short strip of a kitchen bench that fades to transparent. No marshmallows (they would read as objects to count).

Report inspection on the paper background (`#f6f1e7`) at 300 px and 560 px, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly.
3. Confirm approximations use later times only (t to t + something), as `ci9f5aa4ac` states; no two-sided or negative intervals.
4. Confirm the narration never says the two points "become one" or that h equals zero.
5. Confirm every tangent reading uses points on the tangent, and the `we-2` curve's own points give 12.5 (crossed).
6. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's picture shows the tangent but no gradient).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c01's final frame.

## YouTube metadata (draft)

Title: Instantaneous Speed: From Secants to the Tangent | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson01.sa.html

A remote-control car pulls away from the start line. Its average speed is easy, but how fast is it going at exactly two seconds? Watch averages over shorter and shorter intervals settle on one number, see the secants pivot onto the tangent, and learn to read instantaneous speed from a drawn tangent using two far-apart points on it. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Describe the difference between the average speed of an object and its instantaneous speed"
"Determine that the instantaneous speed of an object at time t can be approximated by the average speed between its position at time t and its position some time later, and explain how this approximation can be improved"
"Relate the instantaneous speed of an object to the gradient of the tangent at that point on its distance–time graph"
"Estimate the instantaneous speed of an object from its distance–time graph"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Average rate of change. Next: Rates of change from real-world graphs.

#Year11Maths #MathsAdvanced #RatesOfChange #HSCScience

## Open decisions

- **1. The car anchor (root).** Kept from c01 (see c01 open decision 2). The pack's speed camera was rejected for nearness to Year 12 d08 and d14.
- **2. A2's picture (settled by the learning review, Revision 2).** Keep the drawn tangent at t = 5: the card already states both tangent points, so the picture gives nothing away.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c01; check that "less time to speed up" is understood as the reason the estimate improves, that the secant landing on the tangent is followable at playback speed, and that "far apart" has a reason students can repeat), then the Codex maths check and error check, then voicing and a build to grade A.
