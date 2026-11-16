# Maths A11 C18: How do displacement and velocity differ from distance and speed? Signed position from an origin, v = dx/dt = ẋ, speed as |v|, at rest when v = 0, and distance added leg by leg when a particle turns around (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,539 characters by script (see "Narration length estimate"), 13 scene headings, about 504 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: forty-ninth video of Year 11 Mathematics Advanced (2024), outline order 49, Introduction to differentiation (The derivative as a rate of change); the last video of the differentiation strand. Pre-design pack: `../pre-design/maths-a11/math-a11-c18.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson16.sa.html` (`we-1`, x = t³ − 3t², v(4) = 24; `we-2`, at rest at t = 3, x = −4; `we-3`, change in displacement −5 m and distance 13 m, with the pack's correction; the "negative velocity is not slowing down" card; all with their numbers). Route entry: `math-a11-c18` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted shuttle-run strip (c17's brief); the particle track, graphs and bars coded; the final frame is coded algebra for e01.

Owner rules applied: as c01 to c17 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (sport: a 20 m shuttle run, the runner shrunk to a dot), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, The derivative as a rate of change), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci05229304`: "Define and distinguish between displacement and distance and between velocity and speed"
- `ci8a1ba332`: "Use the notation dx/dt or ẋ to represent the velocity of a particle with displacement x from a point as a function of time t"
- `ci1be28612`: "Solve problems by determining the velocity of a particle moving in a straight line, given its displacement from a point as a function of time"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c17's final frame (the shuttle-run strip, a coded dot at the start line, a number line "0 m" to "20 m", "there and back, twice: 80 m run", "where are you now? ?", "running back: how fast? ?", "Next: displacement and velocity", "?"). Recalls c17 (f′(c) as a rate with units and sign), c02 (speed as a rate) and w30 (absolute value as a size). Teaches: a particle; displacement x as signed position from an origin and distance as total length travelled (`ci05229304`); velocity v = dx/dt = ẋ (`ci8a1ba332`) and speed as |v|; a negative velocity is a direction, not slowing; velocity from a displacement function (site `we-1`); at rest when v = 0, with the position from x, and the turn on the x-t graph (site `we-2`); displacement at a time, change in displacement over an interval, and distance added leg by leg when the particle turns around (site `we-3`, corrected) (`ci1be28612`). Stops at velocity from displacement. Not taught: acceleration and integration (Year 12).

## Decisions

- **Anchor: a 20 m shuttle run, the runner shrunk to a dot (painted plate, live).** Run to the far line and back twice: 80 m of running, yet back at the start line, displacement 0; running back as fast as out, the speed is the same but the velocity's sign flips. That is the syllabus's two distinctions in one familiar fitness test. Sport; the pack's anchor 1 (cones and lines only; no person is drawn: "shrink yourself to a dot, which maths calls a particle" makes the dot the point of the anchor). Grep 16 Nov: "shuttle", "beep test" no hits; "cone" only as a light-beam shape in Year 12 d14. The pack's harbour ferry (anchor 2) was rejected because c01's attempt 1 is a ferry; Year 12 i10's lift (displacement against distance by area) is a different setting and method.
- **Simulations (standard item 3).**
  1. **Shuttle dot** (`StudioParticleTrack` over the plate; scenes 1 to 3): the dot runs the 20 m and back with a live "x = … m" readout (teal), a "distance = … m" counter (amber) that only ever grows, and a violet velocity arrow whose length and direction follow v (+5 out, −5 back) with a "speed 5 m/s" readout that stays the same.
  2. **Particle on a number line with paired graphs** (`StudioParticleTrack` and `StudioStackedDerivativePanels`; scenes 5, 6): for x = t² − 6t + 5 the dot moves from 5 to −4 and back to 0; its velocity arrow shrinks to nothing at t = 3 and flips; above, the x-t graph's lowest point and the v-t graph's zero line up under a shared cursor; a trail behind the dot counts distance.
  3. **Distance bars** (`StackedTotalBar` and `SignedBar`; scene 6): amber bars "9 m" and "4 m" stack to "13 m" against a single teal signed bar "−5 m" for the change in displacement.
- **Colour roles (the c01 to c17 roles, root ruling 7).** Displacement x and positions **teal**; velocity, its arrow and dx/dt **violet**; time t **blue**; distance (accumulated, never negative) **amber**; speed in plain ink beside the velocity; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "origin: x = 0", "+ direction →", "signed", "never negative", "adds every leg", "x dot: rate with time", "speed = |v|", "direction, not slowing", "d/dt", "at rest: v = 0", "x, not v", "turns here", "end − start", "add each leg".
- **Stage changes (standard item 2).** The shuttle run (1); the number line with displacement and distance (2); velocity arrows and speed (3); g01 board, site `we-1` (4); particle track with paired graphs, site `we-2` (5); bars, site `we-3` (6); framed card (7); question cards (8 to 11); the algebra frame for e01 (12); key notes (13).
- **Worked examples (g01 layout).** 4: site `we-1`, v = 3t² − 6t, v(4) = 24 m/s. 5: site `we-2`, v = 2t − 6, at rest at t = 3, x(3) = −4 m; v(1) = −4 (speed 4); crossed "position = v(3) = 0". 6: site `we-3` (corrected): displacement at t = 5 is 0 m; change in displacement −5 m; distance 9 + 4 = 13 m; crossed "distance = |0 − 5| = 5 m".
- **Memory aid.** Framed card: "Signs for where and which way. No signs for how far and how fast." Key line: "x and v have signs; distance and speed don't. A turn: add each leg."
- **Visual surprise.** After the shuttle run the two counters disagree completely, "distance 80 m" and "x = 0 m"; in scene 5 the particle's arrow shrinks to nothing exactly as the x-t graph reaches its lowest point, then grows again pointing the other way.
- **Site notes (pack section 8).** lesson16 `we-3` calls −5 m "the displacement"; the lesson defines displacement as signed position, so the displacement at t = 5 is 0 m and −5 m is the change in displacement (pack correction). The narration keeps "displacement at a time" and "change in displacement" apart throughout (pack decision). The same fix applies to the site card's sentence; it is not used.
- **Plain meanings at first use.** Particle ("an object shrunk to a dot"); origin ("the point we measure from, x = 0"); displacement ("your position on the line: how far from the origin, with a sign for which side"); distance ("the total length travelled"); velocity ("the rate of change of displacement, with a sign for direction"); speed ("the size of the velocity"); at rest ("velocity zero").
- **Attempts (pack questions).** A1: x = t² − 4t − 5: v = 2t − 4; at t = 1, v = −2 m/s, speed 2 m/s; at rest at t = 2 s; x(2) = −9 m; crossed "position 0" (t put into v). A2: x = 12t − 2t²: displacement at t = 5 is 10 m; distance 18 + 8 = 26 m; crossed "distance 10 m".
- **Mistake scene:** none separate. Negative velocity as slowing (3); the rest time put into v (5 crossed; A1 crossed); distance from end positions after a turn (6 crossed; A2 crossed); "displacement" for "change in displacement" (6 tags).
- **Cause chain taught, in order:** (1) a signed position needs an origin and a direction, so displacement can be negative, while distance adds lengths and cannot (2); (2) velocity is the rate of change of displacement, dx/dt, so its sign is the direction of motion and its size is the speed (3); (3) differentiating x with respect to t gives v at any time (4); (4) at rest means v = 0, and the particle's position then comes from x (5); (5) where v changes sign the particle turns around, so the distance must be added leg by leg, while the change in displacement only compares the ends (5, 6).
- **Entry knowledge (route):** c17 (f′(c) as an instantaneous rate with units and sign); c02 (speed as a rate; average against instantaneous); w30 (absolute value as a distance: speed = |v|); c14 (where v changes sign).
- **Handoff (to math-a11-e01, "How do the graphs of y = k a^x and y = k a^(-x) behave?").** Scene 12: an algebra frame, no plate (the e01 pack's start: recall a⁰ = 1 and a⁻ⁿ = 1/aⁿ, then tabulate 2ˣ for x = −2 to 3). Centre, 72 px: "y = 2ˣ" with the x tinted blue in the power; beneath, a table, 48 px, "x: −2, −1, 0, 1, 2, 3" and "y: ?, ?, ?, ?, ?, ?"; chips "x in the power" and "Next: exponential graphs", and "?". This is e01's opening frame; it states no value, so e01 may fill the table and choose its own anchor.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Shuttle: 20 m legs; 4 legs = 80 m; displacement 0; illustrative pace 5 m/s each way (turns treated as instant; a real runner slows to turn, which the abstract particle examples then model smoothly).
  (b) `we-1`: v = 3t² − 6t; v(4) = 48 − 24 = 24 m/s.
  (c) `we-2`: v = 2t − 6 = 0 at t = 3; x(3) = −4; v(1) = −4; x(0) = 5.
  (d) `we-3`: x(0) = 5, x(3) = −4, x(5) = 0; displacement at t = 5: 0 m; change in displacement 0 − 5 = −5 m; distance |−4 − 5| + |0 − (−4)| = 9 + 4 = 13 m.
  (e) A1: v = 2t − 4; v(1) = −2; at rest at t = 2; x(2) = −9; x(0) = −5. A2: v = 12 − 4t = 0 at t = 3; x(0) = 0, x(3) = 18, x(5) = 10; distance 18 + (18 − 10) = 26 m.
  (f) Pronunciations: "d x by d t"; "x dot"; "t squared minus six t plus five"; "minus four metres"; "four metres on the negative side of the origin"; "two to the x".
  (g) Windows: shuttle number line −2 to 22 m; `we-2` number line −6 to 6 m, x-t panel t 0 to 5 s, x −5 to 6 m, v-t panel v −6 to 6 m/s.

Main question: *After a shuttle run you've run 80 m but you're back where you started. How do displacement and velocity differ from distance and speed?*
Entry knowledge (c17, c02, w30): f′(c) as a rate with units and sign; speed as a rate; absolute value as a size.
Stops after: displacement against distance, velocity against speed; v = dx/dt = ẋ; velocity from displacement; at rest; distance leg by leg. No acceleration.
Handoff: math-a11-e01: "y = 2ˣ: what happens when x is zero or negative, and what does the graph look like?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): displacement teal; velocity violet; time blue; distance amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: eighty metres, and back where you started
> Here's that shuttle run. You run twenty metres to the far line, and back, then you do it all again. That's eighty metres of running. But where are you now? Right back at the start line, zero metres from where you began. And when you run back, you might be just as fast as on the way out, but you're going the other way. Maths has two pairs of words for this, and a question can ask for any of them: distance and displacement, and speed and velocity. How do displacement and velocity differ from distance and **speed**?

Visual: opens on c17's final frame exactly (the shuttle-run strip `ma11-shuttle-run-v1.png`, the dot at the start line, the number line "0 m" to "20 m", "there and back, twice: 80 m run", "where are you now? ?", "running back: how fast? ?", "Next: displacement and velocity", "?"). On the first sentence the "Next" chips fade and the dot runs the two shuttles again (4 ×) with a counter "run: 80 m" (amber) and a readout "from the start: 0 m" (teal); on "where are you now" both counters ring. On "just as fast" a violet arrow points right "→ 5 m/s" on the way out and left "← 5 m/s" on the way back. On "speed" heading "Displacement, distance, velocity, speed". The two "?" chips move to the top right.

### 2. displacement and distance
> First, shrink yourself to a dot, which maths calls a particle. It moves along a straight line, so put a number line on it. The start line is the origin, zero, and towards the far line is the positive direction. Choosing the origin and the direction always comes first. Your displacement, x, is your position on that line: how far you are from the origin, with a sign that says which side. At the far line, x is twenty. Step one metre behind the start line, and x is minus **one**. Distance is different. It's the total length you've travelled, adding up every leg, and it's never negative. After one shuttle, your distance is forty metres, but your displacement is back to **zero**. After two shuttles, the distance is eighty, and the displacement is still zero.

Visual: stage change: the plate dims to a band; the coded number line enlarges (1,600 px, −2 to 22 m), the dot on it. Hand tags "origin: x = 0" at the start line and "+ direction →". The dot moves to 20: readout "x = 20 m" (teal); on "one" it steps to −1: "x = −1 m", hand tag "signed". On "Distance is different" an amber trail follows the dot and a counter "distance" grows, hand tag "never negative", "adds every leg". On "zero" after one shuttle: "distance 40 m" (amber) and "x = 0 m" (teal) side by side, framed. On "After two" "distance 80 m", "x = 0 m".

### 3. velocity and speed
> Velocity is the rate of change of displacement. We write it d x by d t, or x with a dot on top, called x dot. The dot means the rate of change with respect to time. Running out at five metres per second, your velocity is plus **five**. Running back just as fast, your velocity is minus five, because x is getting smaller. Speed is the size of the velocity, without its sign, so it's five both ways. That's the absolute value of v. And a negative velocity doesn't mean slowing down. It means moving in the negative direction. A velocity of minus eight is faster than a velocity of three, because its speed is **eight**.

Visual: the number line stays. Row, 52 px: "velocity v = dx/dt = ẋ" (violet), hand tag "x dot: rate with time"; a grey chip "c17: f′(c) is a rate". The dot runs out with a violet arrow "v = +5 m/s"; on "five" the readout locks; it runs back with the arrow flipped "v = −5 m/s". Row: "speed = |v| = 5 m/s both ways", hand tag "speed = |v|", grey chip "w30: |v| is the size". On "slowing down" a grey slip "v < 0 means slowing" is struck through, hand tag "direction, not slowing". On "eight" two dots race: "v = −8" (arrow left, longer) and "v = 3" (arrow right, shorter), readouts "speed 8" and "speed 3".

### 4. worked example: velocity from a formula
> Now a particle whose displacement is a formula. Its displacement is x equals t cubed minus three t squared metres, at time t seconds. Find its velocity at four seconds. Differentiate with respect to time. It works just as before, with t in place of x. v equals d x by d t, which is three t squared minus six t. At t equals four, that's forty-eight minus twenty-four, which is twenty-four metres per **second**. It's positive, so the particle is moving in the positive direction, at a speed of twenty-four metres per second.

Visual: clear change to the g01 board. Task strip, 44 px: "A particle has displacement x = t³ − 3t² metres at time t seconds. Find its velocity at t = 4." Givens card: "x = t³ − 3t² (m)" (teal), "t = 4 s" (blue). Rows, 52 px: "v = dx/dt = 3t² − 6t" (violet), hand tag "d/dt"; "v(4) = 3(16) − 6(4) = 48 − 24"; on "second" framed answer (green): "v = 24 m/s, positive: moving in the positive direction". A small number line under the board shows the dot at x(4) = 16 m with a long arrow to the right.

### 5. at rest, and turning around
> Here's another particle, with x equals t squared minus six t plus five. When is it at rest, and where is it then? At rest means the velocity is zero. v is two t minus six, which is zero when t is three **seconds**. To find where it is, put three into x, not into v. x of three is nine minus eighteen plus five, which is minus four. So it's at rest four metres on the negative side of the **origin**. Now watch it move. At one second, v is minus four, so it's moving in the negative direction at four metres per second. It slows to a stop at three seconds, then turns around, with a positive velocity. On the displacement graph, the turn is the lowest point, exactly where v is **zero**. Putting three into v, and saying it's at position zero, is the **slip**.

Visual: stage change: rows at the left (800 px); at the right `StudioStackedDerivativePanels` (x-t above, v-t below, each 900 × 300 px) over a number line (−6 to 6 m) with the dot. Task strip, 44 px: "x = t² − 6t + 5. When is the particle at rest, and where is it then?" Rows, 52 px: "at rest: v = 0", hand tag "at rest: v = 0"; "v = 2t − 6 = 0"; on "seconds" "t = 3 s" (blue); hand tag "x, not v"; "x(3) = 9 − 18 + 5"; on "origin" framed answer (green): "at rest at t = 3 s, at x = −4 m". On "Now watch it move" the dot runs from x = 5 (t = 0) with a violet arrow pointing left, readout at t = 1 "v = −4 m/s, speed 4"; the arrow shrinks to nothing at t = 3 (x = −4), then flips right and grows as the dot returns to 0 at t = 5; a shared cursor moves on both panels. On "zero" the x-t graph's lowest point and the v-t graph's zero ring together with a dashed amber line, hand tag "turns here". On "slip" a red slip "v(3) = 0, so at position 0" writes and is crossed.

### 6. distance against change in displacement
> Between zero and five seconds, how far did this particle travel? It starts at x of zero, which is five metres, and ends at x of five, which is zero. So its displacement at five seconds is zero metres: it's back at the origin. The change in displacement is the end minus the start, zero minus five, which is minus five metres. But the distance is more, because the particle turned around at three seconds. From five metres to minus four is nine metres. From minus four back to zero is four more. So the distance is nine plus four, thirteen **metres**. Subtracting the end positions, and saying five metres, is the slip. When a particle turns around, add up each leg **separately**. Find the turning times first, from v equals zero.

Visual: clear change: the number line full width (−6 to 6 m) with the dot's path drawn as two amber legs above it (5 → −4, then −4 → 0), and bars below. Rows, 44 px: "x(0) = 5, x(5) = 0: displacement at t = 5 is 0 m" (teal); "change in displacement = 0 − 5 = −5 m" (teal `SignedBar` pointing left), hand tag "end − start"; on "turned around" the turn at −4 rings, grey chip "v = 0 at t = 3"; amber bars write "leg 1: 9 m", "leg 2: 4 m" and stack; on "metres" framed answer (green): "distance = 9 + 4 = 13 m", beside the teal "−5 m" bar. On "separately" a red slip "distance = |0 − 5| = 5 m" writes and is crossed, hand tag "add each leg"; on "turning times first" the chip "v = 0 at t = 3" pulses.

### 7. memory aid
> Here's the summary. Displacement and velocity carry signs: where you are, and which way you're going. Distance and speed don't: how far you've gone, and how fast. And if it turns around, add each **leg**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the shuttle's two counters "x = 0 m" and "distance 80 m", and the arrows "+5" and "−5" with "speed 5". Main line, hand font 56 px: "Signs for where and which way. No signs for how far and how fast." On "leg" the key line, 40 px: "x and v have signs; distance and speed don't. A turn: add each leg." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A particle moves so that x equals t squared minus four t minus five metres after t seconds. Find its velocity and speed at t equals one, when it's at rest, and its position then. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A particle moves so that x = t² − 4t − 5 metres after t seconds. Find its velocity and speed at t = 1, when it is at rest, and its position then." The full question stays on screen. Picture: an empty number line from −10 to 6 m with the origin marked. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> v is d x by d t, which is two t minus four. At one second, v is minus two metres per second, so its speed is **two**. It's at rest when two t minus four is zero, at t equals two **seconds**. Then x of two is four minus eight minus five, so it's at minus nine **metres**. Putting two into v, and saying it's at zero, is the **slip**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "v = dx/dt = 2t − 4"; on "two" "t = 1: v = −2 m/s, speed 2 m/s" (green frame); on "seconds" "v = 0: t = 2 s" (green frame); on "metres" "x(2) = 4 − 8 − 5 = −9 m" (green frame), the dot on the picture at −9 with no arrow. On "slip" a red slip "v(2) = 0, so at position 0" writes and is crossed, caption "x, not v". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A particle has displacement x equals twelve t minus two t squared metres after t seconds. Find its displacement at t equals five, and the distance it travels in the first five seconds. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A particle has displacement x = 12t − 2t² metres after t seconds. Find its displacement at t = 5 and the distance it travels in the first 5 seconds." Picture: an empty number line from −2 to 20 m. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> v is twelve minus four t, which is zero at three seconds, so it turns around then. x of three is eighteen, and x of five is **ten**. So its displacement at five seconds is ten metres. It went eighteen metres out, then eight metres back, so the distance is twenty-six **metres**. Saying the distance is ten metres, ignoring the turn, is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "v = 12 − 4t = 0 at t = 3 s"; on "ten" "x(3) = 18, x(5) = 10" (teal), framed "displacement at t = 5: 10 m" (green); on "metres" amber legs on the picture "18 m out", "8 m back", framed "distance = 26 m" (green). On "slip" a red slip "distance = 10 m" writes and is crossed, caption "it turned at t = 3". Hold about 1 s.

### 12. handoff
> That finishes the derivative for now. Every function in this strand had x in the base, like x squared or t cubed. Next, x moves up into the power. It's a new kind of function, and it grows in a new way. Here's y equals two to the x. What happens when x is zero, or negative? And what does its graph look like? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the algebra frame: on "x in the base" a grey row "x², t³, x³ − 3x²" with each base x ringed; on "moves up into the power" centre, 72 px, "y = 2ˣ" with the x blue in the power and a grey chip "x in the power"; on "zero, or negative" a table writes beneath, 48 px: "x: −2, −1, 0, 1, 2, 3" (blue) and "y: ?, ?, ?, ?, ?, ?". On "next" chips "Next: exponential graphs" and "?". Hold about 2 s. This is e01's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Displacement x: signed position from the origin. Distance: total length travelled.
- Velocity v = dx/dt = ẋ (signed). Speed = |v|.
- At rest: v = 0. Find the position by putting t into x, not v.
- v < 0: moving in the negative direction (not slowing down).
- If it turns (v changes sign), add the distance leg by leg.

Memory aid (framed card, right side, as in scene 7): *Signs for where and which way. No signs for how far and how fast.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and e01's opening frame.

## Teaching checks

- **Does it explain causes?** Why displacement can be negative: it is measured from an origin with a direction (2). Why distance can't: it adds lengths (2). Why velocity is dx/dt: it is displacement's rate of change (3). Why speed is |v|: it drops the direction (3). Why the rest position comes from x: v only says how fast (5). Why add legs: the particle turned, so the ends hide the way back (6).
- **Misconceptions addressed:** negative velocity as slowing (3); the rest time into v (5, A1 crossed); distance from the ends after a turn (6, A2 crossed); "displacement" for "change in displacement" (6 rows).
- **Visual standard, item by item:** 1 the painted shuttle-run strip from the first frame with the live dot and counters; 2 a new stage every 30 to 60 s; 3 the shuttle dot with signed and unsigned counters, the particle with a shrinking and flipping arrow under paired graphs, the stacked distance bars; 4 fixed roles (x teal, v violet, distance amber); 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 6; 8 framed card and five bullets; 9 "distance 80 m" beside "x = 0 m", and the arrow vanishing at the graph's lowest point.
- **One idea at a time:** displacement and distance (2), velocity and speed (3), velocity from a formula (4), at rest and turning (5), distance against change in displacement (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 24 s and 25 s.
- **Avoided double teaching:** f′ as a rate with units (c17), speed as a rate (c02), |v| (w30) and the sign change (c14) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci05229304` (1 to 3, 6, A1, A2; key notes 1, 2, 4, 5); `ci8a1ba332` (3 to 5; key note 2); `ci1be28612` (4 to 6, A1, A2; key notes 3, 5).
- **Out of scope by design:** acceleration and integration (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A particle moves so that x = t² − 4t − 5 metres after t seconds. Find its velocity and speed at t = 1, when it is at rest, and its position then."
Model answer: v = dx/dt = 2t − 4. At t = 1: v = −2 m/s, speed 2 m/s. At rest when 2t − 4 = 0, t = 2 s; x(2) = 4 − 8 − 5 = −9 m. Classic mistake (crossed): "v(2) = 0, so at position 0".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "A particle has displacement x = 12t − 2t² metres after t seconds. Find its displacement at t = 5 and the distance it travels in the first 5 seconds."
Model answer: v = 12 − 4t = 0 at t = 3, where x = 18. x(0) = 0 and x(5) = 10, so the displacement at t = 5 is 10 m. Distance: 18 m out, then 18 − 10 = 8 m back, total 26 m. Classic mistake (crossed): "distance = 10 m".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Shuttle | 20 m legs; 80 m run; x = 0; 40 m after one shuttle; ±5 m/s, speed 5; x = −1 one metre behind | 1, 2, 3 |
| Sign card | v = −8 faster than v = 3 (speeds 8, 3) | 3 |
| `we-1` | v = 3t² − 6t; v(4) = 48 − 24 = 24 m/s; x(4) = 16 m | 4 |
| `we-2` | v = 2t − 6; t = 3 s; x(3) = −4 m; v(1) = −4 (speed 4); x(0) = 5 | 5 |
| `we-3` | x(0) = 5, x(5) = 0; displacement at 5: 0 m; change −5 m; legs 9 and 4; distance 13 m | 6 |
| A1 | v = 2t − 4; v(1) = −2, speed 2; t = 2 s; x(2) = −9 m | 8, 9 |
| A2 | v = 12 − 4t; t = 3; x(3) = 18, x(5) = 10; distance 26 m | 10, 11 |
| Handoff | y = 2ˣ; x from −2 to 3 (no values stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- x = t³ − 3t²: v = 3t² − 6t; v(4) = 24; x(4) = 16.
- x = t² − 6t + 5: v = 2t − 6; v = 0 at t = 3; x(3) = −4; v(1) = −4; x(0) = 5, x(5) = 0; distance |−4 − 5| + |0 − (−4)| = 13; change in displacement −5.
- x = t² − 4t − 5: v = 2t − 4; v(1) = −2; v = 0 at t = 2; x(2) = −9; x(0) = −5.
- x = 12t − 2t²: v = 12 − 4t; v = 0 at t = 3; x(3) = 18; x(0) = 0; x(5) = 10; distance 18 + 8 = 26.
- Shuttle: 4 × 20 = 80 m. Handoff table values (for e01, not shown): 1/4, 1/2, 1, 2, 4, 8.

## Memory aid check

- **"Signs for where and which way. No signs for how far and how fast."** Original. Meaning, as said in scene 7: displacement (where) and velocity (which way and how fast) are signed; distance (how far travelled) and speed (how fast) are never negative; when the velocity changes sign the particle turns, so distance is added leg by leg. Assumptions checked: one-dimensional motion along a line with a chosen origin and positive direction; speed = |v| at an instant (an average speed would be distance over time, not needed here). It helps a new case: v = −3 m/s means moving in the negative direction at speed 3 m/s, and two seconds at that velocity changes x by −6 m while adding 6 m of distance. Introduced after scenes 2 to 6.
- **Considered, not used:** "Displacement is where, distance is how far" alone (it leaves out the velocity and speed pair).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,539 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the shuttle runs, the particle's run, the bars) and the 45 s notes scene: about 504 s. Characters per scene (1 to 13): 514, 754, 610, 519, 743, 722, 200, 211, 316, 216, 337, 322, 75. Speech before the notes is about 411 s, under the 570 s cap. Feedback speech: about 24 s and 25 s.

Reserve trims if the voiced take runs long: scene 3's "minus eight" sentence (keep the two dots); scene 2's "After two shuttles" sentence.

## Scene list and build ids

Lesson key `m-a11c18` (route math-a11-c18). Explainer folder `src/explainer/lessons/math-a11-c18`; build inputs in `docs/production/claude-pm/lessons/math-a11-c18/` (at voicing).

In order (13 scene headings): hook-shuttle, displacement-distance, velocity-speed, velocity-from-formula, at-rest-turning, distance-vs-change, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | c17's frame; the shuttle runs again |
| 38 to 92 s | 2 | Number line: displacement and distance |
| 92 to 142 s | 3 | Velocity arrows and speed |
| 142 to 172 s | 4 | g01 board: `we-1` |
| 172 to 235 s | 5 | Particle with paired graphs: `we-2` |
| 235 to 285 s | 6 | Legs and bars: `we-3` |
| 285 to 301 s | 7 | Framed memory card |
| 301 to 400 s | 8 to 11 | Question cards and countdowns, then feedback |
| 400 to 425 s | 12 | The algebra frame for e01 |
| 425 to 470 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c17's last frame continues into 1; 1 to 2 stage change (the number line enlarges); 2 to 3 the line stays, arrows added; 3 to 4 clear change to the board; 4 to 5 stage change; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c18-learning-review.md`, `science_check` = `checks/m-a11c18-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): the shuttle-run strip is c17's brief; nothing else is needed.

Need (painted): none new. Reused: `ma11-shuttle-run-v1.png` with its line sidecar (c17's brief).

Coded: the dot, number lines, counters, velocity arrows, paired graphs, cursor, legs and bars, every row, the algebra frame and table, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `StudioParticleTrack`, `StudioStackedDerivativePanels`, `StackedTotalBar`, `SignedBar`, `LiveReadoutBoard`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Two counters on `StudioParticleTrack`**: a signed displacement readout and an accumulating distance counter (sum of |Δx| per frame); the velocity arrow scales with |v| and flips with its sign. Check: for x = t² − 6t + 5 on [0, 5] the distance counter ends at 13.0 and the displacement readout at 0.0; for the shuttle, 80 and 0.

## Codex asset brief (Maths A11 C18)

No new plate. The shuttle-run strip is painted under c17's brief (with its line sidecar) and must exist before the c17 build. The final frame is coded algebra only.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly.
3. Confirm "displacement" always means signed position at a time and "change in displacement" a difference over an interval; −5 m is never called "the displacement" (pack correction to site `we-3`).
4. Confirm rest positions always come from x, not v, and every distance with a turn is added leg by leg.
5. Confirm no acceleration, second derivative or integral appears, and no person is drawn.
6. Confirm the final frame shows y = 2ˣ and an empty table without values, so e01 is free.
7. Confirm both attempts carry every demand and neither card nor picture shows an answer.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c17's final frame.

## YouTube metadata (draft)

Title: Displacement, Distance, Velocity and Speed | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson16.sa.html

After a 20 m shuttle run there and back twice, you've run 80 m but you're right back where you started. Learn the difference between displacement and distance, and between velocity and speed, write velocity as dx/dt or ẋ, find a particle's velocity from its displacement, find when and where it's at rest, and work out the distance travelled when it turns around. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define and distinguish between displacement and distance and between velocity and speed"
"Use the notation dx/dt or ẋ to represent the velocity of a particle with displacement x from a point as a function of time t"
"Solve problems by determining the velocity of a particle moving in a straight line, given its displacement from a point as a function of time"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: What f′(c) means in a real situation. Next: Graphs of exponential functions.

#Year11Maths #MathsAdvanced #DisplacementAndVelocity #HSCScience

## Open decisions

- **1. The e01 join (root and the e01 designer).** The final frame is coded algebra (y = 2ˣ and an empty table for x = −2 to 3), matching the e01 pack's start without choosing e01's anchor (credit card, markdowns or mould). If the e01 designer wants its anchor in the frame, only scene 12's frame changes.
- **2. Instant turns in the shuttle (learning review).** The shuttle's turns are shown as instant flips of a ±5 m/s arrow, an idealisation; the smooth turning is taught on `we-2`. If a reviewer finds the instant flip misleading, the dot can slow briefly at each line.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c17, c02 and w30; check that the origin and positive direction are set before any signed value, that "x dot" is read as a rate with time, that the rest position is seen to come from x, and that "displacement at five seconds" and "change in displacement" stay distinct), then the Codex maths check and error check, then voicing and a build to grade A.
