# Maths S12 A02a: How do we solve simultaneous equations with algebra instead of a graph? Setting two "y =" sides equal, substituting a letter that stands alone, rearranging first, finding the second value and checking both (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`; ruling 8 splits the outline's a02 into a02a, substitution, and a02b, elimination). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,130 characters by script (see "Narration length estimate"), 12 scene headings, about 469 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of Year 12 Mathematics Standard (2024), outline playlist order 2 (first half, root ruling 8), Algebraic relationships. Standard 2 only: Standard 1 solves by graphs only and goes from a01 to a03 (root ruling 9). Pre-design pack: `../pre-design/maths-standard/math-s12-a02.md` (the "a02a" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/algebraic-relationships/lesson01.sa.html` (SHA256 `f24d31f47587a9f1f357b5c0a6ee5606c03489e8e85575ad52f89e1a117d7f4a`; the café hook and `we-2` with the site's numbers; card 06's substitution method). Route entry: `math-s12-a02` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; one new painted plate (a coffee and a sandwich); every graph, equation and board coded.

Owner rules applied: as a01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, every step said in words before its symbols, a short "why this matters", g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (food: the site's café), Australian spelling, no em dashes, "point" decimals spoken digit by digit, money spoken naturally, conversational narration).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Algebraic relationships, Simultaneous linear equations; Standard 2), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci32b65c45`: "Solve a pair of simultaneous linear equations using graphical and algebraic methods" (shared: a01 owns the graphical method; a02a and a02b own the algebraic methods)

Standard 1: no matching point (graphs only, `ci8debaa08`, owned by a01).

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a01's final frame exactly (square-gridded axes x −1 to 4, y 0 to 7; y = 2x + 1 blue and y = 6 − 2x teal, crossing ringed amber at (1.25, 3.5) with a 2× zoom inset between the grid lines; chips "x ≈ 1.2? 1.3?", "exact answer, no drawing?", "Next: solving with algebra", "?" and the grey "Standard 1: your next video is 'Equations from words'"). Recalls a01 (the crossing is the pair that makes both equations true; check in both) and Year 11 (solving a linear equation; changing the subject; substituting) in a phrase or grey chip each. Teaches: when both equations start "y =", the crossing has the same y on both, so set the right-hand sides equal and solve; find the second value by substituting back; check in the other equation; when one letter stands alone, substitute its expression (in brackets) into the other equation; when neither does, rearrange one equation first (site `we-2`); never substitute back into the equation you rearranged. Stops at substitution. Not taught: elimination (a02b); writing equations from words (a03).

## Decisions

- **Anchor: the site's café (painted plate, live).** "A café charges $4 for a coffee and $6 for a sandwich. A customer buys 7 items and spends $38." The site's own hook and `we-2` (pack: keep the café as the site's example). It enters in scene 1 as the reason exact answers matter (no one buys 1.3 coffees) and is solved in scene 5. Food; a plate of one takeaway coffee and one wrapped sandwich, with coded price tags; no people. The pack's other anchors (cricket, bubble tea, bike shop) are kept for a02b (cricket) or unused.
- **Join.** Scene 1 opens on a01's final frame exactly; on the first sentence the grey Standard 1 chip and the "Next" chip fade; the café arrives within 20 s.
- **Order of methods.** Equal right-hand sides first (the a01 frame's two "y =" lines, the pack's start boundary), then substitution with a letter alone, then rearranging first (the café). Each later case reuses the earlier idea: "the same value can replace the letter".
- **Simulations (standard item 3).**
  1. **Exact drop** (scenes 1 to 3): the zoom inset's amber ring waits at the crossing; when the algebra gives (1.25, 3.5), an exact amber point drops from the working into the inset and lands on the crossing; readouts "x = 1.25", "y = 3.5" snap.
  2. **Substitution slot** (scenes 4, 5; `ExpressionSlot` inside `WorkingRows`): the expression "x + 1" (or "7 − s") lifts out of one equation and slides into a dashed slot where the letter sat in the other, bracket included; the letter it replaces fades out under it.
  3. **Same-equation trap** (scene 5): the expression is dragged back into the equation it came from, and the row collapses to "7 = 7", which flashes grey with "true, but tells you nothing".
- **Colour roles (fixed for a02a and a02b).** First equation **blue**; second equation **teal**; the expression being substituted **violet** (in its dashed slot); the solved values and the pair **amber**; check ticks and answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As a01. Hand tags: "same y at the crossing", "set them equal", "one letter left", "half the answer", "swap back", "check the other one", "y is x + 1", "in brackets", "both parts", "make a letter alone", "the OTHER equation", "7 = 7: no help". At most two live at once.
- **Stage changes (standard item 2).** a01's frame and the café (1); the equal-sides board (2); the exact drop and check (3); the substitution board (4); the café board (5); framed card with a method chooser (6); question cards (7 to 10); the stacked-equations frame for a02b (11); key notes (12).
- **Worked examples (g01 layout).** 2 and 3: y = 2x + 1 and y = 6 − 2x (original, a01's handoff pair): x = 5/4 = 1.25, y = 3.5. 4: y = x + 1 and 3x + 2y = 17 (original): (3, 4); crossed slip "3x + 2x + 1 = 17" (caption "the 2 multiplies both parts"). 5: site `we-2`: c + s = 7 and 4c + 6s = 38: 2 coffees, 5 sandwiches; crossed slip "7 − s into c + s = 7 gives 7 = 7". The site's drill 2 (y = 3x − 1 and 2x + y = 9, answer (2, 5)) is not used, because its answer repeats the café's numbers and would blur the two.
- **Memory aid.** Framed card: "Get one letter alone. Swap it into the other equation." Key line: "Solve, swap back for the second value, check both."
- **Visual surprise.** The exact point drops out of the algebra into a01's zoom inset and lands precisely on the crossing that the graph could only estimate (scene 3).
- **Site notes.** No site error in the parts of lesson01 used. The site's "Verify" step is kept as "check in the other equation". `we-3`, the elimination card and drill 3 belong to a02b.
- **Plain meanings at first use.** Right-hand side ("everything after the equals sign"); substitution ("replacing a letter with something equal to it"); back-substitute ("put the value you found back in to get the other one", said as "swap back"); exact ("not rounded, not read off a graph").
- **Attempts (original, HSC style).** A1: y = 4x − 5 and y = x + 4: (3, 7); crossed "x = 3" (caption "give the pair"). A2: y = 2x + 3 and 3x + 2y = 34 by substitution: (4, 11); crossed "3x + 4x + 3 = 34" (caption "the 2 multiplies both parts").
- **Mistake scene:** none separate. Stopping at one value (3 tag, A1 crossed); the bracket multiplied in part (4 crossed, A2 crossed); substituting into the same equation (5 crossed); rounding an exact value (3, said).
- **Cause chain taught, in order:** (1) a graph gives an estimate when the crossing is between grid lines, and real answers need exact values (1); (2) at the crossing both lines have the same y, so the two right-hand sides are equal, which leaves one equation with one letter (2); (3) the solution is a pair, so the second value comes from substituting back, and a check in the other equation confirms it (3); (4) if an equation says what one letter equals, that expression can replace the letter anywhere, which again leaves one letter (4); (5) if no letter stands alone, rearranging makes one; substituting into the same equation gives nothing new, because it only says the equation equals itself (5).
- **Entry knowledge (route):** a01 (the crossing is the pair that makes both true; check in both); Year 11 Standard f02 (solving a linear equation), f03 (changing the subject), f01 (substituting a value). Year 11 skills are recalled in a phrase or grey chip; no Year 11 Standard video is assumed to exist yet.
- **Handoff (to math-s12-a02b, "How does elimination solve simultaneous equations, and when do we add or subtract?").** Scene 11: a coded frame. Two equations stacked like a column sum, 60 px, with the matching terms aligned in columns: "3x + 2y = 16" (blue) above "3x − y = 7" (teal), a ruled line beneath them and an empty answer row; both "3x" terms boxed amber, hand tag "both 3x"; a grey "−" with a "?" at the left of the second row; chips "take one from the other?", "Next: elimination" and "?". No result row is written. This is a02b's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 2x + 1 = 6 − 2x: 4x = 5, x = 5/4 = 1.25; y = 2(1.25) + 1 = 3.5; check 6 − 2.5 = 3.5.
  (b) y = x + 1, 3x + 2y = 17: 3x + 2(x + 1) = 17, 5x + 2 = 17, x = 3, y = 4; check 9 + 8 = 17. Slip: 3x + 2x + 1 = 17 gives x = 16/5.
  (c) `we-2`: c = 7 − s; 4(7 − s) + 6s = 38; 28 + 2s = 38; s = 5; c = 2; check 8 + 30 = 38.
  (d) A1: 4x − 5 = x + 4, 3x = 9, x = 3, y = 7; check 12 − 5 = 7. A2: 3x + 2(2x + 3) = 34, 7x + 6 = 34, x = 4, y = 11; check 12 + 22 = 34. Slip 7x + 3 = 34 gives x = 31/7.
  (e) Pronunciations: "one point two five"; "three point five"; "five quarters"; "three x plus two, times x plus one"; "four, times seven minus s".
  (f) Windows: a01's frame x −1 to 4, y 0 to 7; zoom inset 2×.

Main question: *A graph only estimates a crossing between grid lines, and a café customer can't buy 1.3 coffees. How do we solve simultaneous equations exactly, with algebra instead of a graph?*
Entry knowledge (a01; Year 11 Standard f01, f02, f03): the crossing as the pair true in both; solving a linear equation; changing the subject; substituting.
Stops after: equal right-hand sides, substitution of a letter that stands alone, rearranging first, swapping back and checking both. No elimination, no worded set-up.
Handoff: math-s12-a02b: "3x + 2y = 16 and 3x − y = 7 both have 3x: what if we take one equation from the other?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): first equation blue; second teal; substituted expression violet; solved values amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: exact, not about
> Here are two lines that cross between the grid lines, y equals two x plus one, and y equals six minus two x. Is x one point two? One point three? From the graph, we can only **estimate**. A graph shows roughly where the answer is, but not exactly. And real questions often need exact answers. A café charges four dollars for a coffee, and six dollars for a sandwich. A customer buys seven items, and spends thirty-eight dollars. Nobody buys one point three **coffees**. So we need a way to find the crossing exactly, by working with the equations themselves instead of a drawing. So how do we solve simultaneous equations with algebra, instead of a **graph**?

Visual: opens on a01's final frame exactly (axes x −1 to 4, y 0 to 7; y = 2x + 1 blue, y = 6 − 2x teal; the crossing ringed amber with the 2× zoom inset; chips "x ≈ 1.2? 1.3?", "exact answer, no drawing?", "Next: solving with algebra", "?" and the grey Standard 1 chip). On the first sentence the "Next" chip and the grey Standard 1 chip fade. On "estimate" the inset's ring wobbles between x = 1.2 and x = 1.3, hand tag "only an estimate". On "A café" the graph shrinks to a 520 px panel at the top left (inset kept) and the painted plate `ms12-coffee-sandwich-v1.png` (about 900 px wide) arrives at the right, with coded price tags "$4" on the coffee and "$6" on the sandwich (44 px) and a coded receipt strip "7 items, $38". On "coffees" a red-ringed chip "1.3 coffees?" writes and is crossed. On "graph" heading "Simultaneous equations: solving with algebra" writes on, and the question chip "Exact answer?" moves to the top right.

### 2. same y, so set them equal
> Look at what the two equations say. Both start with y equals. At the crossing, the point is on both lines, so it has the same y on both. That means the two right-hand sides, everything after the equals signs, must be equal there. So write two x plus one equals six minus two **x**. Now there's only one letter, and we can solve it like any equation from Year 11. Add two x to both sides, and four x plus one equals six. Take one from both sides, so four x equals **five**. Divide by four, and x equals five quarters, which is one point two **five**. So the crossing is a quarter of the way from one to two. No wonder the graph was hard to read.

Visual: clear change to the g01 board; the a01 graph panel and the café plate shrink to 220 px badges at the top left. Task strip, 44 px: "Find the exact crossing of y = 2x + 1 and y = 6 − 2x." Givens card, 44 px: "y = 2x + 1" (blue), "y = 6 − 2x" (teal), the two "y =" boxed amber, hand tag "same y at the crossing". On "right-hand sides" the two right-hand sides glow (blue and teal). On "x" (first bold) the row, 52 px: "2x + 1 = 6 − 2x" with each side keeping its colour, hand tag "set them equal". Grey chip "Year 11: solving equations". Rows, current 52 px, earlier 32 px dimmed: "4x + 1 = 6" ("+ 2x" written in grey on both sides first); on "five" (first) "4x = 5"; on "five" (second) "x = 5/4 = 1.25" (amber), hand tag "one letter left". On "a quarter of the way" a small number line from 1 to 2 with a tick at 1.25.

### 3. swap back, and check
> We've only got half the answer. The solution is a pair, so we still need y. Put x equals one point two five back into either equation. Using the first, y equals two times one point two five, plus one. That's two point five plus one, which is three point **five**. Now check the pair in the other equation. Six minus two times one point two five is six minus two point five, which is three point five. It **works**. So the exact crossing is one point two five, three point five. And look at the graph. The exact point drops right onto the **crossing**. Keep it exact. If you'd rounded x to one point three, the two equations would give different values of y.

Visual: camera continue on the board. Hand tag "half the answer" beside "x = 1.25". Row, 52 px: "y = 2(1.25) + 1" with "(1.25)" amber, hand tag "swap back"; on "five" "= 2.5 + 1 = 3.5" (amber). Check row: "6 − 2(1.25) = 6 − 2.5 = 3.5" (teal), hand tag "check the other one"; on "works" "✓" (green) and the framed answer (green): "x = 1.25, y = 3.5". On "look at the graph" the graph badge enlarges to 700 px with its zoom inset; on "crossing" the exact drop (simulation 1): an amber point falls from the answer frame into the inset and lands on the crossing; readouts "(1.25, 3.5)". On "rounded" a grey side row: "x = 1.3: 2(1.3) + 1 = 3.6, but 6 − 2(1.3) = 3.4", hand tag "rounded: they disagree".

### 4. one letter alone: swap it in
> What if only one equation starts with y equals? Take y equals x plus one, and three x plus two y equals seventeen. The first equation tells us exactly what y is, x plus one. So in the second equation, wherever there's a y, we can swap in x plus one, in brackets. That's called substitution, replacing a letter with something equal to it. Three x plus two, times x plus one, equals **seventeen**. Multiply the two into the bracket, both parts. So three x plus two x plus two equals seventeen. That's five x plus two equals seventeen, so five x is fifteen, and x equals **three**. Swap back into the first equation, and y equals three plus one, which is **four**. Check in the second: nine plus eight is seventeen. Writing plus one instead of plus two is the **slip**. The two multiplies both parts of the bracket.

Visual: clear change to a fresh g01 board. Task strip, 44 px: "Solve y = x + 1 and 3x + 2y = 17." Givens card: "(1) y = x + 1" (blue), "(2) 3x + 2y = 17" (teal). On "exactly what y is" the "x + 1" in (1) glows violet, hand tag "y is x + 1". On "swap in" the substitution slot (simulation 2): "x + 1" lifts out of (1), gains brackets and slides into a dashed slot over the "y" of (2), the "y" fading under it, hand tag "in brackets". Chip, 44 px: "substitution: replace a letter with something equal to it". On "seventeen" the row, 52 px: "3x + 2(x + 1) = 17" with "(x + 1)" violet. On "both parts" two small arcs from the 2 to the x and to the 1, hand tag "both parts"; row "3x + 2x + 2 = 17". Rows: "5x + 2 = 17", "5x = 15"; on "three" "x = 3" (amber). On "four" "y = 3 + 1 = 4" (amber). Check row "3(3) + 2(4) = 9 + 8 = 17 ✓" (green); framed answer (green) "(3, 4)". On "slip" a red slip "3x + 2x + 1 = 17" writes small at the right and is crossed (caption "the 2 multiplies both parts").

### 5. the café: make a letter alone first
> Now the café. With c coffees and s sandwiches, the count gives c plus s equals seven, and the money gives four c plus six s equals thirty-**eight**. Neither starts with a letter on its own, so make one. From c plus s equals seven, take s from both sides, so c equals seven minus **s**. Swap that into the other equation. Four, times seven minus s, plus six s equals thirty-eight. That's twenty-eight minus four s, plus six s, so twenty-eight plus two s equals thirty-eight. Two s is ten, and s equals **five**. Then c is seven minus five, which is two. Check: eight dollars plus thirty dollars is thirty-eight. So the customer bought two coffees and five **sandwiches**. Swapping seven minus s back into c plus s equals seven is the slip. You'd get seven equals seven. It's true, but it tells you **nothing**.

Visual: clear change: the café plate (600 px) at the top left with its tags; the g01 board at the right. Task strip, 44 px: "A café charges $4 a coffee and $6 a sandwich. A customer buys 7 items for $38. How many of each?" (site hook and `we-2`). Givens card: "c = coffees, s = sandwiches"; on "eight" "(1) c + s = 7" (blue) and "(2) 4c + 6s = 38" (teal). On "make one" hand tag "make a letter alone"; on "s" (first bold) row "c = 7 − s" (violet), grey chip "Year 11: changing the subject". The slot (simulation 2) slides "(7 − s)" over the "c" of (2), hand tag "the OTHER equation". Rows, 52 px: "4(7 − s) + 6s = 38"; "28 − 4s + 6s = 38"; "28 + 2s = 38"; "2s = 10"; on "five" "s = 5" (amber); "c = 7 − 5 = 2" (amber). Check row "4(2) + 6(5) = 8 + 30 = 38 ✓". On "sandwiches" framed answer (green): "2 coffees and 5 sandwiches", and two coded coffee-cup and five sandwich tally marks appear beside the plate. On "Swapping" the trap (simulation 3): "(7 − s)" slides back into (1), the row "(7 − s) + s = 7" collapses to "7 = 7", which flashes grey; on "nothing" it becomes a red slip "7 − s into c + s = 7: 7 = 7" and is crossed (caption "swap into the other equation"), hand tag "7 = 7: no help".

### 6. memory aid
> Here's how to choose. If both equations start with y equals, set the right-hand sides equal. If one letter is already on its own, swap it into the other equation. If neither, rearrange one equation to get a letter alone first. Then swap back for the second value, and check the pair in **both**. Whichever way you start, the answer is always a pair.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small three-branch chooser (`DecisionTree`): "both y = ...?" → "set equal"; "a letter alone?" → "swap it in"; "neither?" → "rearrange first". Main line, hand font 56 px: "Get one letter alone. Swap it into the other equation." On "both" the key line, 40 px: "Solve, swap back for the second value, check both." Hand tag "always a pair". Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Solve the simultaneous equations y equals four x minus five, and y equals x plus four. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve the simultaneous equations y = 4x − 5 and y = x + 4." The full question stays on screen. Picture slot: the two equations stacked, "(1)" and "(2)", with an empty working area. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Both start with y equals, so set them equal. Four x minus five equals x plus four. Take x from both sides, and add five, so three x equals nine, and x equals **three**. Then y is three plus four, which is **seven**. Check: twelve minus five is seven. Stopping at x equals three is the slip. Give the pair, three, **seven**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "4x − 5 = x + 4", "3x = 9"; on "three" "x = 3" (amber); on "seven" (first) "y = 3 + 4 = 7", check "4(3) − 5 = 7 ✓", framed answer (green) "(3, 7)". On "seven" (second) a red slip "x = 3" writes and is crossed (caption "give the pair"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Solve y equals two x plus three, and three x plus two y equals thirty-four, by substitution. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve y = 2x + 3 and 3x + 2y = 34 by substitution." Picture slot: the two equations stacked with an empty working area. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> Swap two x plus three in for y, in brackets. Three x plus two, times two x plus three, equals thirty-four. That's three x plus four x plus six, so seven x plus six is thirty-four, and x equals **four**. Then y is eight plus three, which is **eleven**. Check: twelve plus twenty-two is thirty-four. Writing three x plus four x plus three is the slip. The two multiplies both parts of the **bracket**.

Visual: the card shrinks to the top. The slot slides "(2x + 3)" (violet) over the "y". Rows, 44 px: "3x + 2(2x + 3) = 34", "3x + 4x + 6 = 34", "7x = 28"; on "four" "x = 4" (amber); on "eleven" "y = 2(4) + 3 = 11", check "12 + 22 = 34 ✓", framed answer (green) "(4, 11)". On "bracket" a red slip "3x + 4x + 3 = 34" writes and is crossed (caption "2 × 3 = 6"). Hold about 1 s.

### 11. handoff
> Substitution always works, but sometimes there's a quicker way. Look at these two. Three x plus two y equals sixteen, and three x minus y equals seven. Both have exactly three x. What would happen if we took one whole equation away from the other? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the coded handoff frame: on "these two" the equations stack like a column sum, 60 px, matching terms aligned: "3x + 2y = 16" (blue) above "3x − y = 7" (teal), a ruled line beneath them and an empty answer row. On "three x" (second mention) both "3x" terms box amber, hand tag "both 3x". On "took one whole equation away" a grey "−" with "?" appears at the left of the second row. On "next" chips "take one from the other?", "Next: elimination" and "?". Hold about 2 s. No result row is written. This is a02b's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- The solution is one pair (x, y) that makes both equations true.
- Both "y = ...": set the right-hand sides equal.
- A letter alone: substitute it, in brackets, into the other equation.
- Swap back for the second value; check the pair in both.
- Keep values exact (fractions or exact decimals), not graph estimates.

Memory aid (framed card, right side, as in scene 6): *Get one letter alone. Swap it into the other equation.* Key: *Solve, swap back for the second value, check both.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and a02b's opening frame.

## Teaching checks

- **Does it explain causes?** Why algebra: the graph only estimates between grid lines (1). Why set the sides equal: the crossing has the same y on both lines (2). Why swap back: the solution is a pair (3). Why keep exact: a rounded x gives two different y values (3). Why substitution works: the expression equals the letter, so it can replace it (4). Why both parts of the bracket: the 2 multiplies everything in it (4). Why the other equation: substituting into the same one only says it equals itself (5).
- **Misconceptions addressed:** one value only (3 tag, A1 crossed); the bracket half-multiplied (4 crossed, A2 crossed); substituting into the same equation (5 crossed); rounding mid-way (3).
- **Visual standard, item by item:** 1 the café plate inside 20 s, returning in 2 (badge) and 5; 2 a new stage every 35 to 60 s; 3 the exact drop into a01's zoom inset, the substitution slot, the 7 = 7 collapse; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2 to 5; 8 framed card and five bullets; 9 the exact point landing on the estimated crossing.
- **One idea at a time:** equal sides (2), swap back and check (3), a letter alone (4), rearrange first (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 29 s.
- **Avoided double teaching:** a01's "the crossing is the pair true in both" and Year 11 equation solving and rearranging are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci32b65c45`, algebraic part (2 to 5, A1, A2; key notes 1 to 5).
- **Out of scope by design:** elimination (a02b); equations from words (a03).

## Practice questions and model answers

**Attempt 1 (scene 7; original, HSC style, 2 marks suggested, not an official marking scheme).** "Solve the simultaneous equations y = 4x − 5 and y = x + 4."
Model answer: 4x − 5 = x + 4, so 3x = 9 and x = 3. Then y = 3 + 4 = 7. Check: 4(3) − 5 = 7 ✓. Solution x = 3, y = 7. Classic mistake (crossed): "x = 3".

**Attempt 2 (scene 9; original, HSC style, 2 marks suggested).** "Solve y = 2x + 3 and 3x + 2y = 34 by substitution."
Model answer: 3x + 2(2x + 3) = 34, so 3x + 4x + 6 = 34, 7x = 28 and x = 4. Then y = 2(4) + 3 = 11. Check: 3(4) + 2(11) = 12 + 22 = 34 ✓. Solution x = 4, y = 11. Classic mistake (crossed): "3x + 4x + 3 = 34".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| a01's pair | 2x + 1 = 6 − 2x: x = 5/4 = 1.25, y = 3.5; check 6 − 2.5 = 3.5; rounded x = 1.3 gives 3.6 and 3.4 | 1 to 3 |
| Substitution | y = x + 1, 3x + 2y = 17: (3, 4); check 9 + 8 = 17 | 4 |
| Site `we-2` | c + s = 7, 4c + 6s = 38: c = 2, s = 5; 28 + 2s = 38; check 8 + 30 = 38 | 1, 5 |
| A1 | y = 4x − 5, y = x + 4: (3, 7) | 7, 8 |
| A2 | y = 2x + 3, 3x + 2y = 34: (4, 11); check 12 + 22 = 34 | 9, 10 |
| Handoff | 3x + 2y = 16 and 3x − y = 7 (no result shown) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12a/verify.py`, run with `python -I`); Codex to re-check.

- 2x + 1 = 6 − 2x at x = 5/4; y = 7/2. 2(1.3) + 1 = 3.6; 6 − 2(1.3) = 3.4.
- y = x + 1 and 3x + 2y = 17 meet at (3, 4); the slip 3x + 2x + 1 = 17 gives x = 16/5.
- c + s = 7 and 4c + 6s = 38: c = 2, s = 5; 4(7 − s) + 6s = 28 + 2s.
- y = 4x − 5 and y = x + 4: (3, 7). y = 2x + 3 and 3x + 2y = 34: (4, 11); slip 7x + 3 = 34 gives 31/7.

## Memory aid check

- **"Get one letter alone. Swap it into the other equation."** with key line **"Solve, swap back for the second value, check both."** Original. Meaning, as said in scene 6: make one equation say what one letter equals, replace that letter in the other equation by the same expression (in brackets), solve the one-letter equation, then substitute back and check the pair in both. Assumptions checked: linear equations with one solution (a01 covered no solution and infinitely many; on those the method ends in a false or always-true line, not taught here); "the other equation" excludes the one rearranged (scene 5); the "both y =" case is the same idea, because each right-hand side is what y equals. It helps a new case: y = 5 − x and 2x + y = 8 give 2x + 5 − x = 8, x = 3, y = 2. Introduced after scenes 2 to 5.
- **Considered, not used:** "Sub it, solve it, sub it back" (close to the chosen line, but "sub" is easy to hear as "subtract").

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12a/count.py`, which reproduces e08's 5,632): **5,130 characters**, 12 scene headings. Characters per scene (1 to 12): 647, 632, 645, 796, 789, 345, 119, 311, 124, 387, 260, 75.

At 13.3 characters per second the speech is about 386 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the exact drop (3), the substitution slots (4, 5) and the 7 = 7 collapse (5) about 18 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 469 s (7 min 49 s)**, 101 s under the 570 s cap; speech and holds before the notes about 424 s. Feedback speech: about 23 s and 29 s.

No reserve trims are needed (about 100 s of margin). Do not cut below 5,000 characters: this is the gentlest pace in the strand on purpose, because a02a is the first algebraic method Standard 2 students meet.

## Scene list and build ids

Lesson key `m-s12a02a` (route math-s12-a02, first half). Explainer folder `src/explainer/lessons/math-s12-a02a`; build inputs in `docs/production/claude-pm/lessons/math-s12-a02a/` (at voicing).

In order (12 scene headings): hook-exact-not-about, set-equal, swap-back-check, letter-alone, cafe-rearrange, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | a01's frame; the café |
| 45 to 100 s | 2 | g01 board: setting the sides equal |
| 100 to 150 s | 3 | Swap back, check, the exact drop |
| 150 to 215 s | 4 | g01 board: substitution with a letter alone |
| 215 to 285 s | 5 | The café board and the 7 = 7 trap |
| 285 to 305 s | 6 | Framed memory card with the method chooser |
| 305 to 380 s | 7 to 10 | Question cards and countdowns, then feedback |
| 380 to 405 s | 11 | The stacked-equations frame for a02b |
| 405 to 450 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a01's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 camera continue; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a02a-learning-review.md`, `science_check` = `checks/m-s12-a02a-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, listing read only): the Advanced coffee plate `ma11-coffee-cart-v1.png` is a whole cart (another anchor's object, and it would suggest a business, which is a04a's idea); no plate shows a single coffee and a sandwich.

Need (painted, new; see the Codex asset brief): `ms12-coffee-sandwich-v1.png`.

Coded: the a01 graph and inset, price tags, the receipt strip, every equation, slot and board, the chooser, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `ExpressionSlot` and `AlignedAlgebra` (algebra.tsx), the g01 `WorkingBoard` parts, `DecisionTree` (trig-parts.tsx) for the chooser, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Exact drop** (small, lesson folder): an amber point animates from a board position into a `StudioPlot` inset at given coordinates. Check: it lands on the plotted crossing of y = 2x + 1 and y = 6 − 2x within 1 px at 2× zoom.
2. **Collapse to identity** (small, an `ExpressionSlot` option): after a substitution into the source equation, the row simplifies term by term to "7 = 7" and flashes grey.

## Codex asset brief (Maths S12 A02a, a coffee and a sandwich)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-a02a.md`, route entry math-s12-a02. Paint after the learning review and maths check pass and root gives the go-ahead, and before the a02a build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-cookie-v1.png` and `maths/ma12-apple-v1.png`; no text, logos, brand names, cup printing, price stickers, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch.

1. `ms12-coffee-sandwich-v1.png` (about 1800 × 1000 px): a three-quarter view of one takeaway coffee cup with a plain lid and a plain cardboard sleeve, standing beside one wrapped sandwich (a triangle sandwich in a clear wedge pack or paper wrap, filling visible), both on a plain wooden café counter edge that fades to transparent at the sides. Leave clear space (about 15 per cent of the height) above each item for a coded price tag.

Report inspection on the paper background (`#f6f1e7`) at 900 px and 220 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-a02a-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly and that no Standard 1 code is claimed.
3. Confirm the site's `we-2` keeps its numbers and answer (2 coffees, 5 sandwiches).
4. Confirm every substitution goes into the other equation, with brackets, and the 2 multiplies both parts.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm scene 1 opens on a01's final frame and scene 11 shows no result row.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Simultaneous Equations by Substitution | Year 12 Maths Standard

(Title length: 63 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson01.sa.html

A graph can only estimate a crossing that falls between the grid lines, and a café customer can't buy 1.3 coffees. Learn to solve simultaneous equations exactly with algebra: set two "y =" sides equal, substitute a letter that stands alone (in brackets), rearrange first when nothing stands alone, then swap back for the second value and check both. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. For Standard 2 (Standard 1 solves by graphs only).
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Solve a pair of simultaneous linear equations using graphical and algebraic methods" (algebraic methods: substitution in this video, elimination in the next)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Solving simultaneous equations with graphs. Next: Simultaneous equations by elimination.

#Year12Maths #MathsStandard #SimultaneousEquations #HSCScience

## Open decisions

- **1. Original examples beside the site's (root).** The site's drill 2 and SA 1 are replaced by original pairs (scene 4 and A1) because drill 2's answer (2, 5) repeats the café's numbers; the café `we-2` keeps the site's numbers.
- **2. "Swap back" for back-substitution (learning review).** The narration uses "swap back" and shows "substitute back" only in the plain-meaning sense. Check that students who meet "back-substitute" in a textbook connect the two.
- **3. Rounded-x side row (learning review).** Scene 3's grey row (x = 1.3 gives 3.6 and 3.4) shows why exact values matter; check it is not read as a second method.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a01 and Year 11 equation solving; check that "same y at the crossing" makes setting the sides equal feel caused, that the substitution slot is followable at speed, that the café's 7 = 7 trap is clear, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
