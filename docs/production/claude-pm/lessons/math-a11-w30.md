# Maths A11 W30: Why is absolute value a distance, and why does it need two cases? |x| as distance, the piecewise definition, |a − b|, √(x²) = |x|, and the graph of y = |x| (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,653 characters by script (build parser rules), 14 scene headings, about 519 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: thirtieth video of Year 11 Mathematics Advanced (2024), outline order 30, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w30.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson04.sa.html` (Piecewise & Absolute Value Functions, SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`; card 06's |−7| = −(−7) = 7 and the drill's |−8| = 8 used; no site worked example exists for this video). `cidb25f0cc` (√(x²) = |x|) has no site teaching (crosswalk: missing) and is original here. **`ci81e0ec50` (the graph of y = |x|) is moved here from w31** (decision below). Route entry: `math-a11-w30` in `../../programme/maths-a11-route-inputs-2.json` (root to add `ci81e0ec50`). Visual system: maths studio kit; a painted rail trail (prefix `ma11-`); number lines, distance bars, the substitution table, the V and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (travel), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Absolute value functions; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cib39edbb7`: "Define the absolute value |x| of a number x, also known as the magnitude of x, to be the distance from the origin to x on the number line"
- `ci25113162`: "Establish and use the piecewise definition |x| = {x, for x ≥ 0; -x, for x < 0"
- `cidb25f0cc`: "Show using numerical substitutions that √(x^2) = |x| and use the result"
- `ci81e0ec50` (moved from w31): "Graph the function y = |x|, describe its symmetry, and identify its domain and range"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w29's handoff frame (the rail trail with a coded number line, markers at −3 and 3, teal bars "3 km" back to the station at 0, "Next: a distance that ignores direction"). Teaches: |x| (the magnitude of x) as the distance from 0 to x on the number line, non-negative (`cib39edbb7`); the piecewise definition and why −x is positive when x < 0 (`ci25113162`, site card 06); |a − b| as the distance between a and b; √(x²) = |x| shown by substitution (3, −3, 0, −5) and used to simplify √(9x²) (`cidb25f0cc`); the graph y = |x| from the piecewise definition, its vertex, its symmetry (even, w26), its domain and range (`ci81e0ec50`). Stops at |x| itself. Not taught: y = |ax + b| and solving |ax + b| = k (w31); absolute value inequalities and transformations (g strand).

## Decisions

### Revision 1 (16 Nov 2026)

- **Ownership of `ci81e0ec50` (pack note): moved from w31 to w30.** The piecewise definition is a two-piece function (w28), and graphing it immediately gives the V; the distance picture already draws |x| as a bar over the number line, so the graph of distance against position is one short step. Its symmetry is the even test (w26), and its unbroken corner is w29's continuity. Moving it balances the pair: w30 has four points (three short definitional ones and this graph), and w31 keeps the two heavier points (graphing |ax + b| with and without an application, and solving |ax + b| = k both ways). w31 recalls y = |x| as its starting graph. Root to add `ci81e0ec50` to w30's `syllabusActionIds` and remove it from w31's in the route inputs.
- **Anchor: a rail trail with kilometre posts counted from an old station (painted plate, live).** Posts to the west are negative and to the east positive, so the trail is a real number line, and "how far from the station?" is |x|. The bakery at −3 and the lookout at 3 are both 3 km away; posts 12 and 5 are 7 km apart either way (|a − b|). Travel and leisure. No Year 12 Maths design and no w01 to w14 design uses a rail trail, cycle path or kilometre posts (grep, 16 Nov); Year 12's snow post (`ma12-snow-post-v1`) is a single depth marker, not a number line. No w15 to w23 pack suggests a trail. The pack's golf score against par was rejected because w17's pack suggests golf; its overdrawn bank balance has no natural number line.
- **Simulations (standard item 3).**
  1. **`DistanceBar`** (scenes 1 to 3; new part on w06's `NumberLineRay`): a blue marker slides along the trail's number line; a teal bar runs from the marker back to 0 with a live readout "|x| = ..." computed from the position; the rule in use lights ("x" in amber for x ≥ 0, "−x" in violet for x < 0) and switches as the marker crosses 0.
  2. **`SubstitutionTable`** (scene 5; new part): a four-column table "x | x² | √(x²) | |x|" fills row by row for 3, −3, 0 and −5; a fifth ghost column "x" is compared, and its cells turn red where they disagree with √(x²) (the negative rows); a tick column marks √(x²) = |x| on every row.
  3. **The V from the trail** (scene 7; `PiecewisePlot` from w28 and `SymmetryGhost` from w26): as the marker moves along the trail, a point (x, |x|) plots above the matching position, leaving a trail of points; the two pieces y = x (amber) and y = −x (violet) draw through them; the mirror ghost confirms the symmetry; `PenTrace` (w29) draws it in one stroke with a "corner" tag at 0.
- **Colour roles (fixed for the whole video).** Positions x, a, b **blue**; distances |x|, |a − b| **teal** (root ruling 12); the **x ≥ 0 case amber**, the **x < 0 case violet** (the w28 piece colours); answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As w24. Hand tags: "distance", "never negative", "non-negative", "x < 0, so −x > 0", "flip the sign", "either order", "inside first", "√ never negative", "squaring loses the sign", "corner, no break", "mirror: even", "y ≥ 0".
- **Stage changes (standard item 2).** The trail (1, 2); the two-case rule on the trail (3); two posts and a distance (4); the substitution table (5); a g01 board (6); the V rising from the trail (7); the framed card (8); question cards (9 to 12); the jelly bean jar (13); key notes (14).
- **Worked examples (g01 layout).** Scene 4 includes a short g01 strip (|2 − 9|; crossed "2 + 9 = 11"). Scene 6: original, simplify √(9x²) (crossed "3x"). Scene 7: graph y = |x| (crossed "range: all real numbers"). The site has no worked example for these points.
- **Memory aid.** Framed card: "How far, not which way." Key: "|x| = x if x ≥ 0; −x if x < 0. √(x²) = |x|." Badge: the trail with two equal teal bars either side of the station.
- **Visual surprise.** In the substitution table the "x" column turns red on every negative row while √(x²) and |x| match on every row; then the trail's distance bars rise off the number line to become the V.
- **Site wording corrected (pack section 8).** Site card 06 says |x| "always produces a positive result or zero"; the video says "non-negative" and explains why (a distance can be zero). No S11 item applies.
- **Plain meanings at first use.** Absolute value |x| ("the distance from 0 to x on the number line"); magnitude ("size without direction"); non-negative ("zero or more"); vertex ("the point of the V").
- **Attempts (pack questions, original).** A1: |3 − 8| and |8 − 3| with a distance explanation; crossed "|3 − 8| = −5". A2: simplify √((x − 4)²) and evaluate at 1 and 9: |x − 4|, 3 and 5; crossed "x − 4, so −3 at x = 1".
- **Mistake scene:** none separate. −x read as "a negative number" (3, positively); |x − ...| as "drop the minus" (4 crossed); |a − b| ≠ |b − a| (4, positively); √(x²) = x (5, 6 crossed); "positive" for "non-negative" (2); the V below the axis or range all reals (7 crossed); a negative absolute value (A1 crossed).
- **Cause chain taught, in order:** (1) a position on a line can be negative, but its distance from 0 cannot (1, 2); (2) for x ≥ 0 the distance is x itself; for x < 0 the number is negative, so its distance is −x, which is positive (3); (3) the distance between a and b is the size of their difference, so the order does not matter (4); (4) squaring removes the sign, and √ only returns the non-negative root, so √(x²) returns the size of x, |x| (5, 6); (5) plotting distance against position gives y = x on the right and y = −x on the left, a V with its vertex at the origin, unchanged by the mirror (|−x| = |x|, even), with every y at least 0 (7).
- **Entry knowledge (route):** w28 (piecewise definitions); w26 (even functions); w29 (continuous, for the corner); w01 (√ is the non-negative root); Stage 5 (distance on the number line).
- **Handoff (to w31, "How do V-shaped graphs solve absolute value equations?").** Scene 13: the jelly bean jar (`ma11-jellybean-jar-v1.png`, painted under w31's brief) at the left with a coded card "350 beans"; at the right a plot of y = |g − 350| for g from 300 to 400 (a V with its vertex at (350, 0)), a dashed level line y = 20 with "?" where it meets the V; two guess cards "330" and "370" face down; chips "Next: which guesses are exactly 20 off?" and "?". This is w31's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) |x| = x for x ≥ 0 and −x for x < 0 (the syllabus's definition; x = 0 belongs to the first case).
  (b) Trail: bakery −3, lookout 3, posts 12 and 5, posts −3 and 4.
  (c) Table: 3: 9, 3, 3; −3: 9, 3, 3; 0: 0, 0, 0; −5: 25, 5, 5. SymPy simplifies √(x²) to |x| for real x.
  (d) √(9x²) = 3|x|; at x = −2: √36 = 6 = 3|−2|; the slip 3x gives −6.
  (e) "You can draw it without lifting your pen" refers to w29's informal continuity; the corner is not discussed further (differentiability is Year 12).
  (f) Pronunciations: "the absolute value of x" (not "mod x"); "minus, minus seven"; "the square root of x squared"; "the square root of, x minus four, all squared".
  (g) Windows: trail number line −6 to 13 km (scenes 1 to 4), registered to the plate's sidecar post positions; V plot −5 to 5 by −1 to 5, equal scale.

Main question: *The bakery is 3 km west of the old station and the lookout 3 km east. Different positions, the same distance. Why is absolute value a distance, and why does it need two cases?*
Entry knowledge (w28, w26, w29, w01, Stage 5): piecewise definitions; even functions; continuity; √ as the non-negative root; distance on the number line.
Stops after: |x| as distance, the two-case definition, |a − b|, √(x²) = |x| by substitution and in use, and the graph of y = |x| with its symmetry, domain and range. No |ax + b| graphs, no equations.
Handoff: math-a11-w31: "350 jelly beans: which guesses are exactly 20 off?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): positions blue; distances teal; x ≥ 0 case amber; x < 0 case violet; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: three kilometres either way
> Here's that rail trail. The kilometre posts count from the old station. Posts to the west are negative, and posts to the east are positive. The bakery is at minus three, and the lookout is at three. Their positions are different, but they're both three kilometres from the **station**. Ride from the bakery to the lookout, and you cover six kilometres. A position can be negative. A distance can't. So why is absolute value a distance, and why does it need two **cases**?

Visual: opens on w29's final frame exactly (the rail trail `ma11-rail-trail-v1.png` with its coded number line, markers at −3 and 3, teal bars "3 km", "Next: a distance that ignores direction"). On the first sentence the "Next" chip fades; heading "Three kilometres either way". Coded post labels write on the painted posts (sidecar positions): "−5" to "5" (36 px), "0" at the station. Small coded flags "bakery" at −3 and "lookout" at 3. On "station" the two teal bars pulse, each "3 km"; on "Ride from the bakery" a thin teal bar runs from −3 to 3 above the line, "6 km", then fades. On "A position can be negative" the blue labels "position −3" and "position 3" appear above the markers; on "A distance can't" the teal labels "distance 3" below. On "cases" the chip "Distance from 0: one rule or two?" moves to the top right.

### 2. absolute value: a distance
> The absolute value of a number x, written with two upright bars, is its distance from zero on the number line. It's also called the magnitude of x, its size without its direction. So the absolute value of three is three, and the absolute value of minus three is also **three**. The absolute value of zero is zero. Slide a point along the trail, and the bar back to the station shows its distance. It grows on both sides, and it's never **negative**. A distance can be zero, so we say absolute value is non-negative, rather than positive.

Visual: camera continue on the trail (the plate dims to 50 per cent behind the number line, which grows to 1,600 px). Definition chip, 52 px: "|x| = the distance from 0 to x on the number line" (|x| teal, x blue), with a grey tag "also called the magnitude of x". Rows at the top right, 44 px: "|3| = 3"; on "three" "|−3| = 3", both with teal bars on the line; "|0| = 0" with the marker on the station. On "Slide a point" `DistanceBar` runs: the blue marker slides from 4 to −5 and back to 2, the teal bar and readout "|x| = ..." updating; on "negative" the readout's lowest value 0 rings as the marker passes the station, hand tag "never negative". On the last sentence a chip "non-negative: zero or more" (44 px).

### 3. two cases: the piecewise definition
> Now let's write it as a rule. For a point at zero, or to the east, x is zero or more, and its distance is just x. The absolute value of five is five. For a point to the west, x is negative, so we can't use x itself as a distance. Instead we use minus x. That looks negative, but it isn't. If x is minus seven, then minus x is minus, minus seven, which is plus **seven**. So the absolute value of x is x, if x is at least zero, and minus x, if x is less than **zero**. That's why it needs two cases. One rule keeps the number. The other flips its sign when it's negative.

Visual: stage change: the number line (−9 to 9) across the lower half with `DistanceBar`; the brace builds at the top, 52 px. On "just x" the marker at 5, the amber row "x, for x ≥ 0" writes, readout "|5| = 5". On "For a point to the west" the marker moves to −7, the row "x" crosses through grey with the tag "−7 isn't a distance". On "seven" the violet row "−x, for x < 0" writes and the readout shows "−(−7) = 7" (site card 06's |−7|), hand tag "x < 0, so −x > 0". On "zero" the brace completes: "|x| = { x, x ≥ 0; −x, x < 0 }" (amber and violet rows), and the marker sweeps from −8 to 8, the lit row switching at 0. On the last sentence hand tags "keep" (amber) and "flip the sign" (violet).

### 4. the distance between two points
> Absolute value also measures the distance between two points. From post twelve to post five is seven kilometres, and the absolute value of twelve minus five is seven. Ride the other way, and the absolute value of five minus twelve is also **seven**, because absolute value drops the direction. So the absolute value of a minus b is the distance between a and b, whichever comes first. From minus three to four, it's the absolute value of four minus minus three, which is seven **kilometres**. Work out the inside first. The absolute value of two minus nine is the absolute value of minus seven, which is seven. Just dropping the minus sign, and getting two plus nine, is the **slip**.

Visual: clear change to the trail section from −6 to 13 km (plate panned east, posts labelled). Two blue markers at 12 and 5 with a teal bar between them, "7 km". Rows at the top, 52 px: "|12 − 5| = |7| = 7"; on "seven" "|5 − 12| = |−7| = 7", hand tag "either order". Chip, 44 px: "|a − b| = the distance between a and b". On "kilometres" the markers move to −3 and 4: "|4 − (−3)| = |7| = 7", bar "7 km". A short g01 strip slides in at the bottom: task "Evaluate |2 − 9|", row "|2 − 9| = |−7| = 7" (green frame), hand tag "inside first". On "slip" a red slip "|2 − 9| = 2 + 9 = 11" writes and is crossed, caption "work out the inside first".

### 5. the square root of x squared
> Here's a surprising one. What's the square root of x squared? It's tempting to say x. Let's test it with numbers. If x is three, x squared is nine, and the root of nine is three. That matches. If x is minus three, x squared is nine again, and the root of nine is three, not minus **three**. The square root sign only gives the non-negative root. Try minus five. Minus five squared is twenty-five, and its root is **five**. In every row, the root of x squared matches the absolute value of x, and the x column fails whenever x is **negative**. So the square root of x squared equals the absolute value of x. Squaring throws away the sign, and the root can't bring it back.

Visual: clear change to `SubstitutionTable` (1,300 × 620 px, 48 px cells): columns "x | x² | √(x²) | |x|" and a ghost fifth column "x?" at the right. Row 3: "3 | 9 | 3 | 3", the "x?" cell "3" green. On "three" (minus three) row −3: "−3 | 9 | 3 | 3", the "x?" cell "−3" turns red, hand tag "√ never negative". Row 0: "0 | 0 | 0 | 0". On "five" row −5: "−5 | 25 | 5 | 5", "x?" "−5" red. On "negative" the √(x²) and |x| columns glow together with ticks on every row; the "x?" column's red cells pulse. On "So the square root of x squared" the result writes below, 64 px: "√(x²) = |x|" (teal), hand tag "squaring loses the sign".

### 6. worked example: using √(x²) = |x|
> Let's use it. Simplify the square root of nine x squared. That's the root of nine, times the root of x squared, which is three times the absolute value of **x**. The root of nine is just three, because three is already positive, so only the x needs the bars. Check with x equals minus two. Nine times four is thirty-six, and its root is six. Three times the absolute value of minus two is also **six**. Writing three x would give minus six, and a square root is never **negative**.

Visual: clear change to the g01 board. Task strip, 44 px: "Simplify √(9x²)." Rows, 52 px: "√(9x²) = √9 × √(x²)"; on "x" "= 3|x|" (green frame), with "√9 = 3" tagged "already positive", the result chip "√(x²) = |x|" from scene 5 pulsing beside it. Check rows (44 px): "x = −2: √(9 × 4) = √36 = 6"; on "six" "3|−2| = 6 ✓". On "negative" a red slip "√(9x²) = 3x, so −6 at x = −2" writes and is crossed, caption "√ is never negative".

### 7. the graph of y = |x|
> Now graph the distance from the station against position. For x of zero or more, y equals x, a line going up to the right. For x less than zero, y equals minus x, a line going up to the left. Together they make a V, with its point, the vertex, at the **origin**. You can draw it without lifting your pen, but there's a sharp corner at zero. The graph is symmetric about the y axis, because the absolute value of minus x equals the absolute value of x, so the function is **even**. Its domain is all real numbers, and its range is y of zero or more. Giving the range as all real numbers is the slip. A distance is never **negative**.

Visual: stage change: the trail's number line becomes the x axis of an equal-scale plot (−5 to 5 by −1 to 5, 1,100 × 700 px), the trail plate as a thin strip under it. The marker slides from 0 to 4: points (x, |x|) plot above it, and the amber ray y = x draws through them; then from 0 to −4, the violet ray y = −x. On "origin" the vertex (0, 0) rings, label "vertex (0, 0)". On "without lifting your pen" `PenTrace` runs across in one stroke, tag "corner, no break". On "even" `SymmetryGhost` mirrors the V in the y axis (violet mirror line) and it lands, row "|−x| = |x|: even", hand tag "mirror: even". `AxisShadow`: blue domain bar along the whole x axis "domain: all real x", teal range bar from a closed dot at 0 upward "range: y ≥ 0", hand tag "y ≥ 0". On "negative" a red slip "range: all real numbers" writes and is crossed, caption "a distance is never negative".

### 8. memory aid
> Here's how to remember it. Absolute value is how far, not which way. If x is already positive or zero, leave it. If it's negative, flip its sign. And the root of x squared gives back the size, not the **sign**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the trail badge with two equal teal bars either side of the station. Main line, hand font 60 px: "How far, not which way." On "sign" the key line, 40 px: "|x| = x if x ≥ 0; −x if x < 0. √(x²) = |x|." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Evaluate the absolute value of three minus eight, and the absolute value of eight minus three. Use distance on the number line to explain why they're equal. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Evaluate |3 − 8| and |8 − 3|, and use distance on the number line to explain why they are equal." The full question stays on screen. Picture slot: an empty number line from 0 to 10 with no markers. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Three minus eight is minus five, and its absolute value is **five**. Eight minus three is five, and its absolute value is five as well. Both measure the distance between three and eight on the number line, and distance doesn't depend on **direction**. Writing minus five for the first one is the slip. An absolute value is never **negative**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "|3 − 8| = |−5|"; on "five" "= 5"; "|8 − 3| = |5| = 5". On "direction" blue markers at 3 and 8 and a teal bar "5" on the picture's number line, with arrows both ways. Framed answer (green): "both 5: the distance between 3 and 8". On "negative" a red slip "|3 − 8| = −5" writes and is crossed, caption "never negative". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Simplify the square root of, x minus four, all squared. Then evaluate it at x equals one, and at x equals nine. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Simplify √((x − 4)²), then evaluate it at x = 1 and at x = 9." Picture slot: the `SubstitutionTable` header only, empty. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The root of something squared is its absolute value, so it's the absolute value of x minus **four**. At x equals one, that's the absolute value of minus three, which is three. At x equals nine, it's the absolute value of five, which is **five**. Simplifying it to just x minus four gives minus three at x equals one, and a square root can't be **negative**.

Visual: the card shrinks to the top. Rows, 52 px: "√((x − 4)²)"; on "four" "= |x − 4|" with the chip "√(x²) = |x|" beside it. "x = 1: |1 − 4| = |−3| = 3"; on "five" "x = 9: |9 − 4| = 5". Framed answer (green): "|x − 4|; 3 and 5". On "negative" a red slip "√((x − 4)²) = x − 4, so −3 at x = 1" writes and is crossed, caption "√ is never negative". Hold about 1 s.

### 13. handoff
> Absolute value measures how far off something is. At a school fete, a jar holds three hundred and fifty jelly beans. A guess of three hundred and thirty is twenty off, and so is a guess of three hundred and seventy. How far off any guess g is, is the absolute value of g minus three fifty. Its graph is a V, like this one, moved along to three fifty. So which guesses are exactly twenty **off**?

Visual: the memory line shows small at the top (30 px), then fades. The V from scene 7 shrinks to a 300 px badge at the top left. Board: the jelly bean jar (`ma11-jellybean-jar-v1.png`, about 560 px tall) at the left with a coded card "350 beans"; at the right a plot of y = |g − 350| for g from 300 to 400 (900 × 560 px), its vertex at (350, 0) ringed; two face-down guess cards "330" and "370" below the g axis. On "off" a dashed level line y = 20 draws with a red-pencil "?" where it meets each arm; chips "Next: which guesses are exactly 20 off?" and "?". Hold about 2 s. This is w31's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- |x|: the distance from 0 to x (never negative).
- |x| = x for x ≥ 0; |x| = −x for x < 0.
- |a − b|: the distance between a and b.
- √(x²) = |x|.
- y = |x|: a V, vertex (0, 0), even; domain all real x, range y ≥ 0.

Memory aid (framed card, right side, as in scene 8): *How far, not which way.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w31's opening frame.

## Teaching checks

- **Does it explain causes?** Why |x| is never negative: it is a distance (2). Why two cases: a negative x cannot be its own distance, and −x is then positive (3). Why |a − b| = |b − a|: both are the distance between the same two points (4, A1). Why √(x²) is not always x: squaring removes the sign and √ only gives the non-negative root (5, 6, A2). Why y = |x| is a V: y = x on one side and y = −x on the other (7). Why it is even: |−x| = |x| (7). Why the range is y ≥ 0: distances are never negative (7).
- **Misconceptions addressed:** "−x is negative" (3); "drop the minus sign" inside |…| (4 crossed); |a − b| ≠ |b − a| (4, A1); √(x²) = x (5, 6 crossed, A2 crossed); "positive" for "non-negative" (2); range all reals (7 crossed); |3 − 8| = −5 (A1 crossed).
- **Visual standard, item by item:** 1 the painted trail from the first frame, returning in 2 to 4 and 7 and as the card's badge; 2 a new stage every 30 to 55 s; 3 `DistanceBar` with the switching rule, `SubstitutionTable` filling live, the V plotted from the trail; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 strips in 4 and 6; 8 framed card and five bullets; 9 the red "x" column against the matching √(x²) and |x| columns, and the bars rising into the V.
- **One idea at a time:** distance (2), two cases (3), between two points (4), √(x²) (5, 6), the graph (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s each.
- **Avoided double teaching:** piecewise graphs (w28), the even test (w26), continuity (w29) and √ as the non-negative root (w01) are recalled.
- **Syllabus coverage:** `cib39edbb7` (1, 2, 4, A1; key notes 1, 3); `ci25113162` (3, 7; key note 2); `cidb25f0cc` (5, 6, A2; key note 4); `ci81e0ec50` (7; key note 5).
- **Out of scope by design:** |ax + b| graphs and equations (w31); inequalities (g strand).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Evaluate |3 − 8| and |8 − 3|, and use distance on the number line to explain why they are equal."
Model answer: |3 − 8| = |−5| = 5 and |8 − 3| = 5. Both are the distance between 3 and 8 on the number line, which does not depend on the direction. Classic mistake (crossed): "|3 − 8| = −5".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Simplify √((x − 4)²), then evaluate it at x = 1 and at x = 9."
Model answer: √((x − 4)²) = |x − 4|. At x = 1: |−3| = 3. At x = 9: |5| = 5. Classic mistake (crossed): "√((x − 4)²) = x − 4, so −3 at x = 1".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Trail | bakery −3, lookout 3: both 3 km, 6 km apart; |3| = |−3| = 3; |0| = 0 | 1, 2 |
| Definition | |5| = 5; |−7| = −(−7) = 7 (site card 06) | 3 |
| Between | |12 − 5| = |5 − 12| = 7; |4 − (−3)| = 7; |2 − 9| = 7; crossed 11 | 4 |
| Table | 3: 9, 3, 3; −3: 9, 3, 3; 0: 0, 0, 0; −5: 25, 5, 5 | 5 |
| √(9x²) | 3|x|; x = −2: √36 = 6 = 3|−2|; crossed −6 | 6 |
| y = |x| | vertex (0, 0); even; domain all real x; range y ≥ 0 | 7 |
| A1 | |3 − 8| = |8 − 3| = 5; crossed −5 | 9, 10 |
| A2 | |x − 4|; 3 at x = 1; 5 at x = 9; crossed −3 | 11, 12 |
| Handoff | 350 beans; 330 and 370 are 20 off; y = |g − 350| (answered in w31) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- |3| = 3, |−3| = 3, |0| = 0, |−7| = 7, |−8| = 8 (site drill, not shown); −(−3) = 3.
- |12 − 5| = |5 − 12| = 7; |4 − (−3)| = |−3 − 4| = 7; |2 − 9| = 7, slip 2 + 9 = 11.
- x = 3, −3, 0, −5: x² = 9, 9, 0, 25; √(x²) = 3, 3, 0, 5 = |x|. √(x²) simplifies to |x|.
- √(9x²) = 3|x|; at x = −2: 6.
- |3 − 8| = |8 − 3| = 5. √((x − 4)²) = |x − 4|: 3 at x = 1, 5 at x = 9; slip 1 − 4 = −3.
- |−x| = |x|.

## Memory aid check

- **"How far, not which way."** Original. Meaning, as said in scene 8: |x| is a distance from 0, so it keeps the size of x and drops its direction (sign); the key line gives the two cases and √(x²) = |x|. Assumptions checked: x real; "how far" is measured from 0 for |x| and between the two numbers for |a − b|. It helps a new case: |−12| = 12; √((−6)²) = 6. Introduced after scenes 2 to 7.
- **Considered, not used:** "Absolute value drops the minus sign" (true for a single number, but it causes the |2 − 9| = 11 slip in scene 4).

## Narration length estimate

Counted by script with the build parser rules: **5,653 characters**, 14 scene headings. Characters per scene (1 to 14): 463, 529, 562, 672, 659, 469, 620, 206, 189, 330, 143, 345, 391, 75.

At 13.3 characters per second the speech before the notes is about 419 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 29 s of settling (the distance bar's sweeps, the rule switching at 0, the table filling, and the V rising from the trail with its ghost and shadows); the notes scene is 45 s. Total **about 519 s (8 min 39 s)**, inside the 5,500 to 6,800 band and about 51 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 2's last sentence (keep the "non-negative" chip); scene 7's "You can draw it without lifting your pen, but there's a sharp corner at zero." (keep the tag).

## Scene list and build ids

Lesson key `m-a11w30` (route math-a11-w30). Explainer folder `src/explainer/lessons/math-a11-w30`; build inputs in `docs/production/claude-pm/lessons/math-a11-w30/` (at voicing).

In order (14 scene headings): hook-trail, absolute-distance, two-cases, distance-between, root-of-square, worked-simplify, graph-of-abs, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 83 s | 1 to 2 | w29's frame; the trail, its posts and the distance bar |
| 83 to 130 s | 3 | The two-case brace on the number line |
| 130 to 183 s | 4 | Two posts and |a − b|; a g01 strip |
| 183 to 238 s | 5 | SubstitutionTable: √(x²) against x and |x| |
| 238 to 275 s | 6 | g01 board: √(9x²) |
| 275 to 328 s | 7 | The V rising from the trail; mirror and shadows |
| 328 to 345 s | 8 | Framed memory card |
| 345 to 443 s | 9 to 12 | Question cards and countdowns, then feedback |
| 443 to 474 s | 13 | The jelly bean jar and the level line |
| 474 to 519 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w29's last frame continues into 1; 1 to 2 camera continue (the number line grows); 2 to 3 stage change (the brace); 3 to 4 clear change (the trail pans east); 4 to 5 clear change (the table); 5 to 6 clear change; 6 to 7 stage change (the number line becomes the x axis); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w30-learning-review.md`, `science_check` = `checks/m-a11w30-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-snow-post-v1.png` is Year 12's single snow-depth post (its own anchor, a different idea); `maths/ma12-country-road-v1.png` is a road, not a trail with posts. No trail or path plate exists. Not used.

Need (painted, new; see the Codex asset brief): `ma11-rail-trail-v1.png` (also needed for w29's final frame). The handoff uses w31's `ma11-jellybean-jar-v1.png`.

Coded: the post labels, flags, number lines, distance bars, the brace, the table, plots, the V, shadows, ghosts, working boards, cards, countdown, hand tags, key notes, the bean card, guess cards and level line in the handoff.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `NumberLineRay` (w06), `StudioPlot`, `PiecewisePlot` (w28), `SymmetryGhost` (w26), `PenTrace` (w29), `AxisShadow` (w09), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`DistanceBar`** (new, on `NumberLineRay`): one or two markers on a number line with a bar between a marker and 0 (or between the two markers), a live readout computed as |x| or |a − b|, and an optional rule brace whose lit row switches at 0. Check: the readout is never negative and equals |x| at every frame.
2. **`SubstitutionTable`** (new): a table that fills row by row from listed inputs and column functions, with a comparison column whose cells turn red where they disagree with a reference column. Check: every value is computed; the "x" column is red exactly on the negative rows.

## Codex asset brief (Maths A11 W30, a rail trail; also w29's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w30.md`, route entry math-a11-w30. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w29 build (w29's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-country-road-v1.png`; no text, numbers, signs with words, logos, people, cyclists, walkers, hands, faces, glow or shadow. Never stretch.

1. `ma11-rail-trail-v1.png` (3800 × 700 px, a long strip): a straight gravel rail trail running left to right along a low grassy embankment (a former railway), seen from the side at a slight elevation; a small old weatherboard railway station building beside the trail at **exactly the horizontal centre**; plain short timber **kilometre posts with blank faces**, evenly spaced at **every 200 px** along the trail (19 posts, the centre one beside the station), so code writes the post numbers; a few gum trees and paddock fence posts behind, fading to transparent at the top and ends. No bicycles.

Sidecar JSON (`ma11-rail-trail-v1.json`): the x pixel of each post's face centre and the trail line's y. Report inspection on the paper background (`#f6f1e7`) at 1,600 px and 1,900 px wide, the alpha check, and the plate with coded labels −9 to 9 on the posts. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w30-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly (including "|x| = {x, for x ≥ 0; -x, for x < 0" and "√(x^2) = |x|"), and that `ci81e0ec50` is quoted from w31's route entry until root moves it.
3. Confirm "non-negative" is used, never "always positive", for |x|.
4. Confirm the substitution table's values and red cells, and that √(x²) = |x| is shown by substitution before it is used (`cidb25f0cc`).
5. Confirm the V's symmetry, domain and range, and that no |ax + b| graph or equation is solved.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w29's final frame and scene 13's frame matches w31's opening frame.

## YouTube metadata (draft)

Title: Absolute Value: Distance, Two Cases and the V Graph | Year 11 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html

On a rail trail, the bakery is 3 km west of the old station and the lookout 3 km east: different positions, the same distance. That is absolute value: |x| is the distance from 0 to x on the number line. See why the definition needs two cases (|x| = x for x ≥ 0 and −x for x < 0), why |a − b| is the distance between two numbers, why √(x²) = |x| (tested with numbers), and how the distances rise into the V-shaped graph of y = |x|, with its symmetry, domain and range. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the absolute value |x| of a number x, also known as the magnitude of x, to be the distance from the origin to x on the number line"
"Establish and use the piecewise definition |x| = {x, for x ≥ 0; -x, for x < 0"
"Show using numerical substitutions that √(x^2) = |x| and use the result"
"Graph the function y = |x|, describe its symmetry, and identify its domain and range"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Piecewise functions; even functions. Next: Absolute value graphs and equations.

#Year11Maths #MathsAdvanced #AbsoluteValue #HSCScience

## Open decisions

- **1. `ci81e0ec50` moved from w31 (root).** Recorded in `../checks/root-decisions-maths-a11-w24-w31.md`. Root updates the route inputs (w30 adds it; w31 drops it and lists w30 as its entry for y = |x|).
- **2. Length (learning review).** Four points in one video; the definitional ones are short. If the reviewer finds scene 4 crowded, the |2 − 9| strip can move to feedback 1's crossed slip.
- **3. Site link (root).** The description links lesson04, which also holds w28 and w31; it is the only site home for |x|.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w28, w26 and w01; check that "minus x is positive here" lands with the −7 example; that the table makes √(x²) = |x| feel discovered, not announced; that the V visibly comes from the trail's distances; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The distance bar, the table and the rising V carry the explanation; judge them at playback speed. Every readout must be computed.
