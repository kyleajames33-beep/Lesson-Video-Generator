# Maths S11 L04: When can we trust a prediction from a linear model? A hire boat's fuel, interpolation between the data, extrapolation beyond it, the model's assumption and its valid range, and a limitation written in two parts (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard designs (`math-s12-a01.md`, `a07.md`, `r12a.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 91). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,057 characters by script (see "Narration length estimate"), 12 scene headings, about 467 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of Year 11 Mathematics Standard (2024) Linear relationships, outline playlist order 12. Year 11 is one course for Standard 1 and Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s11-l04.md`. **No site lesson teaches interpolation or extrapolation** (route inputs 8: "missing"; site corrections section 2), so this video teaches from the syllabus alone (root ruling 3). The partial limitation idea comes from `maths-standard/year11/formulas-and-equations/lesson05.sa.html` (Building Formulas from Patterns and Tables, SHA256 `548a35b67aa1760a54719d8f8996c3c1b8b06f1b84aeae185178f34b0642ba18`; section `check-the-differences-before`: "a linear formula will not accurately model the data and will give incorrect outputs for untested values"). Route entry: `math-s11-l04` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; one new painted plate (a small hire boat, briefed here, painted before l03's build because l03's final frame shows it, ruling 17); every graph, probe, card and board coded.

Owner rules applied: 2024 syllabus only, content points cited by codename in this design and by exact wording in the description; painted plates for real objects and code for diagrams; no people, hands or faces (the boat is empty, moored); one main learner question; one reasoning stage at a time; every step said in words before its symbols (Standard pace); worked example in the g01 layout with a framed answer and a crossed slip; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed memory card; everyday anchors (a holiday hire boat, a holiday job's savings, jet ski hire, a draining pool); Australian spelling; no em dashes; conversational narration with commas for small pauses.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, common to Standard 1 and Standard 2, Linear relationships), quoted from `../../programme/maths-standard-route-inputs-8.json`:
- `ci4777471a`: "Interpolate and extrapolate from a linear model in a practical context"
- `ci1b3cf962`: "Identify and describe the limitations of a linear model in a practical context"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

**Boundary:** opens on l03's final frame exactly (the hire boat, the fuel-gauge card at "60 L", the model "F = 60 − 8h", the falling line through the h-axis and the readout "h = 9: F = −12 L?"). Recalls l03 (a model's start and rate) and f02 (solving for an input) in a phrase or grey chip. Teaches: a model comes from values over a range (the data's range); interpolation (predicting between the values you have: fairly safe, still a model); extrapolation (predicting beyond them: less reliable, more so the further out, not automatically wrong); nonsense answers (a negative amount) as warning signs; a linear model assumes the same rate for ever, so running out and physical limits break it; finding where the model must stop (F = 0) and writing the valid range as an inequality; a limitation stated in two parts, the assumption and why it fails here (the same card as math-s12-a07). Stops there. Not taught: lines of best fit for data (math-s12-b04a, b07); exponential limitations (math-s12-a07).

## Decisions

- **Anchor: a hire boat's fuel (new plate, live).** The pack's anchor: fuel read every hour for 4 hours (60, 52, 44, 36, 28 L), so the model F = 60 − 8h comes from data over 0 to 4 hours, which gives "between" and "beyond" a real meaning. Interpolation at 2.5 h (40 L), mild extrapolation at 6 h (12 L), nonsense at 9 h (−12 L), empty at 7.5 h. The fuel use is invented and labelled "example". No Year 11 or Year 12 design uses a hire boat (pack grep, 19 Nov).
- **Join.** Opens on l03's final frame exactly. Ends on l05's opening frame: the ice skates plate (`ms11s-ice-skates-v1.png`, briefed in `math-s11-l05.md` and painted before this build, ruling 17) with the party prices and an empty spreadsheet.
- **Words Year 12 relies on (pack decision; math-s12-a07 and b07).** Chips "interpolation = between the data" and "extrapolation = beyond it", exactly as a07's grey chips recall them; b07's "inside the range" and "outside" as hand tags; "not automatically wrong, just less reliable" said in scene 3; the two-part limitation card with a07's slot names and colours, "assumption" (amber) and "why it fails here" (violet).
- **Simulations (standard item 3).**
  1. **Inside or outside probe** (scenes 2 and 3; `FunctionRider` with `LiveReadoutBoard`, and the new solid-then-dashed option on `StudioPlot`): the line is solid over 0 to 4 hours (the data band shaded pale grey) and dashed beyond; a probe dot slides from h = 2.5 (green, tag "inside: interpolation") through h = 6 (amber, tag "outside: extrapolation") to h = 9 (red, below the axis); the readout "F = … L" updates live and the label changes as the dot leaves the band. A "confidence" strip under the axis fades from solid green inside the band to pale beyond it.
  2. **Running dry** (scene 4): the fuel-gauge needle falls with a rider along the line and hits "E" exactly as the rider reaches (7.5, 0); the dashed line beyond turns red below the axis into a hatched "impossible" zone.
- **Colour roles (fixed for l01 to l07, with a07's card).** The model's line blue (solid in the data range, dashed beyond); the data points ink; the data band pale grey; interpolation green; extrapolation amber; nonsense values red; the limitation card's "assumption" amber and "why it fails here" violet (as math-s12-a07); the valid range as a green strip under the axis; answer green; mistake red, crossed slips only. The model's start (60 L) is violet in the model chip, as in l03.
- **Large type, handwritten voice.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Hand tags: "the data: 0 to 4 h", "inside: interpolation", "outside: extrapolation", "further out, less sure", "less than empty?", "same rate for ever?", "the tank runs dry", "valid range", "name the assumption", "why it fails here". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The boat and the impossible readout (1); the gauge readings, the data band and the inside probe (2); the probe outside (3); the gauge running dry and the range strip (4); the g01 board with the limitation card (5); the framed card (6); question cards (7 to 10); the skates frame for l05 (11); key notes (12).
- **Worked example (g01 layout).** Scene 5: the pack's savings model S = 350 + 40w for a 26-week holiday job; $750 at 10 weeks (interpolation), $2,430 at 52 weeks (extrapolation), with the two-part limitation. Crossed slip: "It might not be accurate." (caption "name the assumption").
- **Memory aid.** Framed card: "Between the data: fairly safe. Beyond it: take care." Key line: "Limitation: what it assumes, and why that fails here."
- **Visual surprise.** The probe's readout crossing zero: as the dot slides past 7.5 hours the readout "F = 4 L" becomes "F = 0 L", then "F = −4 L" in red while the gauge needle sits on "E" and will not move. The model keeps going after the boat has stopped.
- **Site notes.** No site lesson; nothing to mirror (ruling 3). Lesson05's point that unequal differences mean a linear formula gives "incorrect outputs for untested values" is the background to "a model is only as good as its assumption", said in scene 4 in plain words. The pool drill (V = 200 − 15h) is not used; A2 uses the pack's own pool.
- **Plain meanings at first use.** Data's range ("the values the model was built from"); interpolation ("predicting between the values you already have"); extrapolation ("predicting beyond them"); reliable ("likely to be close to the real value"); assumption ("something the model takes for granted"); limitation ("a reason the model's answer may be wrong here"); valid range ("the inputs where the model makes sense").
- **Attempts (pack questions).** A1 (pack question 1): jet ski hire C = 90 + 70h built from its prices for 1 to 4 hours; $265 at 2.5 h (interpolation), $790 at 10 h (extrapolation, not reliable, with a reason). Crossed "$790, reliable because it came from the formula" (caption "10 h is far outside 1 to 4 h"). A2 (pack question 2): a pool D = 1.8 − 0.12t; empty at 15 h; D(20) = −0.6 m is impossible; 0 ≤ t ≤ 15. Crossed "D = −0.6 m" given as an answer (caption "a depth can't be negative"). Prices and rates invented, labelled "example" on the cards.
- **Mistake scene:** none separate. "Extrapolation is always wrong" (3 spoken); "interpolation is exact" (2 spoken); a negative amount reported as an answer (A2 crossed); a limitation with no reason (5 crossed); "reliable because it came from the formula" (A1 crossed).
- **Cause chain taught, in order:** (1) the model came from readings between 0 and 4 hours, so inside that range it is checked against real values (2); (2) beyond it, nothing checks it, so it is less reliable, and less so the further out (3); (3) the model assumes the same 8 L every hour for ever (4); (4) a tank cannot go below empty, so the assumption fails at 7.5 hours, and every input after that gives nonsense (4); (5) so a limitation names the assumption and says why it fails in this situation, and the valid range says where the model can be used (4, 5).
- **Entry knowledge (route):** math-s11-l03 (`cib2d6c0df`: a linear model with its intercept and gradient in context); math-s11-f02 (solving a linear equation for an input). Recalled in a phrase or grey chip.
- **Handoff (to math-s11-l05, "How does a spreadsheet build and test a linear model?").** Scene 11: see Handoff below; this is l05's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Boat: F = 60 − 8h; readings h = 0 to 4: 60, 52, 44, 36, 28; h = 2.5: 40; h = 6: 12; h = 9: −12; F = 0 at h = 7.5; readout at 7: 4; at 8: −4.
  (b) Savings: S = 350 + 40w; w = 10: 750; w = 26: 1390; w = 52: 350 + 2080 = 2430.
  (c) A1: C = 90 + 70h; h = 2.5: 265; h = 10: 790. A2: D = 1.8 − 0.12t; 0 at t = 15; t = 20: −0.6.
  (d) Pronunciations: "F equals sixty minus eight h"; "seven point five"; "zero is less than or equal to h, which is less than or equal to seven point five"; "S equals three hundred and fifty plus forty w".
  (e) Windows: boat h 0 to 10 hours, F −20 to 70 L (grid every 1 hour and 10 L); savings w 0 to 60 weeks, S $0 to $2,600 (grid every 10 weeks and $200; the 26-week job band shaded); A2 no picture.

Main question: *When can we trust a prediction from a linear model?*
Entry knowledge (l03, f02): a model's start and rate; solving for an input.
Stops after: interpolation and extrapolation; nonsense answers; the constant-rate assumption; the valid range; a two-part limitation.
Handoff: math-s11-l05: "a spreadsheet can lay out every case of a model at once: how many skaters fit the budget?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): line blue (solid in the data, dashed beyond); interpolation green; extrapolation amber; nonsense red; assumption amber, why it fails violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · LINEAR RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: minus twelve litres
> Here's the hire boat. Its fuel tank held sixty litres at the start, and the gauge was read every hour for four hours. Sixty, fifty-two, forty-four, thirty-six, twenty-eight. That's eight litres an hour, so the model is F equals sixty minus eight h. Put in nine hours, and it says minus twelve **litres**. But a tank can't hold less than nothing. So some answers from a model are fine, and some are nonsense. When can we trust a prediction from a linear **model**?

Visual: opens on l03's final frame exactly (the hire boat `ms11s-hire-boat-v1.png`, about 1,000 px wide, at the left on a coded water line; the fuel-gauge card at "60 L"; the model chip "F = 60 − 8h"; small axes at the right with the falling line; the readout "h = 9: F = −12 L?"). On the first sentence the "Next" and "?" chips fade. On "read every hour" a coded logbook card under the gauge writes five rows, 44 px: "0 h: 60 L", "1 h: 52 L", "2 h: 44 L", "3 h: 36 L", "4 h: 28 L", each with the gauge needle stepping down; grey tag "example". On "eight litres an hour" amber "−8" arrows between the rows. On "litres" the readout "F = −12 L?" pulses red. On "less than nothing" a hand tag "less than empty?". On "model" the heading "Interpolation, extrapolation and limitations" writes on, and the question chip "Can we trust it?" moves to the top right.

### 2. inside the data: interpolation
> The model was built from readings between zero and four hours. That's the range of the data. Predicting inside that range is called interpolation, predicting between the values you already have. At two and a half hours, sixty minus eight times two and a half is sixty minus twenty, which is forty **litres**. We have real readings on both sides of that, at two hours and at three, so it's fairly safe. Fairly safe, though, not exact. A model is still a model, and the boat might not burn fuel perfectly **evenly**.

Visual: stage change: the boat shrinks to a 260 px badge at the top left with the gauge card (30 px). Large axes (1,300 × 700 px, h 0 to 10 "time (hours)", F −20 to 70 "fuel (L)", grid every 1 hour and 10 L). The five readings fly from the logbook to the grid as ink points (table-to-plot flight). On "range of the data" the band 0 to 4 hours shades pale grey, hand tag "the data: 0 to 4 h"; the line draws solid blue across the band and dashed beyond it. On "interpolation" grey chip, 44 px: "interpolation = between the data". The probe (simulation 1) appears at h = 2.5, green, tag "inside: interpolation"; readout, 52 px: "h = 2.5: F = 60 − 8 × 2.5 = 60 − 20" and on "litres" "= 40 L" (green). On "both sides" the readings at 2 and 3 hours ring ink either side of the probe. On "evenly" the green confidence strip under the axis appears across the band (solid), hand tag "fairly safe, not exact".

### 3. outside the data: extrapolation
> Predicting outside that range is called extrapolation, going beyond the data. At six hours, the model says twelve **litres**. That might be close, but no one read the gauge after four hours, so nothing checks it. It's less reliable, and the further out you go, the less you should trust it. Extrapolation isn't automatically wrong, it's just less reliable. But at nine hours, it gives minus twelve litres, and that's clearly **wrong**. A negative amount of fuel is a warning sign. The model has gone past the point where it makes **sense**.

Visual: camera continue on the same graph. On "extrapolation" grey chip "extrapolation = beyond it". The probe slides right out of the band; as it leaves, its colour turns amber and its tag changes to "outside: extrapolation"; the confidence strip fades from solid green to pale amber beyond h = 4, hand tag "further out, less sure". On "litres" the probe stops at h = 6 on the dashed line, readout "h = 6: F = 12 L" (amber). On "automatically wrong" a chip "less reliable, not banned". On "wrong" the probe slides on to h = 9, dropping below the h-axis; the readout "h = 9: F = −12 L" turns red and the point rings red. On "sense" the strip below the axis (F < 0) hatches red, label "impossible: less than empty".

### 4. the assumption, and the valid range
> So why does it break? Every linear model assumes the same rate, for ever. This one assumes the boat burns eight litres every single hour, no matter **what**. But a tank can't go below empty. Set sixty minus eight h equal to zero, and h is seven point **five** hours. After that, the boat has stopped, and the model hasn't. So this model only makes sense from zero to seven and a half hours. That's its valid range, written as zero is less than or equal to h, which is less than or equal to seven point **five**. And in real life, going faster burns more fuel, so even the rate itself could change.

Visual: camera continue. Chip, 44 px: "assumption: something the model takes for granted". On "what" the amber step triangle "−8 L each hour" repeats along the whole dashed line, hand tag "same rate for ever?". The running-dry simulation: the gauge card enlarges at the left; a rider runs down the line from (4, 28) and the needle falls with it. Rows, 52 px: "60 − 8h = 0", "8h = 60"; on "five" (first bold) "h = 7.5" (green); the rider reaches (7.5, 0) as the needle hits "E", hand tag "the tank runs dry". The rider tries to continue: the readout ticks "8 h: −4 L" in red while the needle stays on "E". On "five" (second bold) a green strip under the h-axis from 0 to 7.5 with the label, 52 px: "valid range: 0 ≤ h ≤ 7.5", hand tag "valid range". On "faster" a small amber chip "faster: more than 8 L an hour".

### 5. worked example: predict, and give a limitation
> Here's how to write it in an exam. You've got three hundred and fifty dollars saved, and a holiday job for twenty-six weeks, saving forty dollars a week. The model is S equals three hundred and fifty plus forty w. Predict the savings after ten weeks, and after fifty-two weeks, and comment on how reliable each one is. At ten weeks, three hundred and fifty plus four hundred is seven hundred and fifty **dollars**. That's interpolation, inside the twenty-six weeks, so it's fairly safe. At fifty-two weeks, three hundred and fifty plus two thousand and eighty is two thousand four hundred and thirty **dollars**. That's extrapolation. Now the limitation, in two parts. The model assumes forty dollars is saved every **week**. But the job ends after twenty-six weeks, so the savings would stop **growing**. Writing only, it might not be accurate, is the slip. Name the assumption, and say why it fails **here**.

Visual: clear change to the g01 board. Task strip, 44 px: "S = 350 + 40w models your savings S ($) after w weeks of a 26-week holiday job. Predict S at 10 weeks and at 52 weeks. Comment on the reliability of each." Givens card, 44 px: "start: $350" (violet), "rate: $40 a week" (amber), "job: 26 weeks". Small plot at the right (600 × 480 px, w 0 to 60, S $0 to $2,600), the band 0 to 26 shaded grey, the line solid in it and dashed beyond. Rows, 52 px: "w = 10: 350 + 40 × 10 = 350 + 400"; on "dollars" (first) "= $750" (green) with a chip "interpolation: inside 26 weeks" (green). "w = 52: 350 + 40 × 52 = 350 + 2080"; on "dollars" (second) "= $2,430" (amber) with a chip "extrapolation: beyond 26 weeks" (amber). The limitation card (as math-s12-a07: two slots, 44 px) writes below: on "week" the amber slot "assumption: $40 is saved every week"; on "growing" the violet slot "why it fails here: the job ends after 26 weeks, so the savings stop growing", the dashed line beyond w = 26 flattening into a grey level line at $1,390 for comparison. Framed answer (green) around both slots. On "here" a red slip "It might not be accurate." writes small at the right and is crossed (caption "name the assumption").

### 6. memory aid
> Here's the idea to keep. Between the data, a prediction is fairly safe. Beyond it, take care, and the further out, the more care. And when an answer stops making sense, the model has stopped **too**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the boat's graph small, the grey data band, a green dot inside and an amber dot outside, the red zone below the axis. Main line, hand font 56 px: "Between the data: fairly safe. Beyond it: take care." On "too" the key line, 40 px: "Limitation: what it assumes, and why that fails here." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. A jet ski hire company's cost model is C equals ninety plus seventy h, built from its prices for one to four hours of hire. Find the cost for two and a half hours, and say whether that's interpolation or extrapolation. Then find the model's cost for ten hours. Is that prediction reliable? Give a reason. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A jet ski hire company's cost model is C = 90 + 70h, built from its prices for 1 to 4 hours of hire. (a) Find the cost for 2.5 hours and state whether this is interpolation or extrapolation. (b) Find the model's cost for 10 hours. Is this prediction reliable? Give a reason." Grey tag "example prices". The full question stays on screen. No picture. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 8. feedback 1 (brief)
> Two and a half hours costs ninety plus a hundred and seventy-five, which is two hundred and sixty-five **dollars**. That's interpolation, inside one to four hours. Ten hours gives seven hundred and ninety **dollars**, but that's extrapolation, far beyond four hours. It's not reliable, because the company might charge a day rate instead. Calling it reliable because it came from the formula is the **slip**.

Visual: the card shrinks to the top (30 px). A small h-axis strip, 1 to 4 shaded grey. On "dollars" (first) the row "90 + 70 × 2.5 = 90 + 175 = $265" and a green dot at 2.5 inside the band, chip "interpolation". On "dollars" (second) "90 + 70 × 10 = $790" and an amber dot at 10, far right, chip "extrapolation: not reliable". Row, 44 px: "Reason: no prices beyond 4 h; a day rate may apply." Framed answer (green) around both. On "slip" a red slip "$790, reliable because it came from the formula" writes and is crossed (caption "10 h is far outside 1 to 4 h"). Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. The depth of water in a draining pool is modelled by D equals one point eight minus zero point one two t, where D is in metres, and t is in hours. When does the model say the pool is empty? Explain why the model's value at twenty hours has no meaning, and state a suitable range of t. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The depth of water in a draining pool is modelled by D = 1.8 − 0.12t, where D is in metres and t is in hours. (a) When does the model say the pool is empty? (b) Explain why the model's value at t = 20 has no meaning, and state a suitable range of t." No picture. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> One point eight minus zero point one two t equals zero gives t equals fifteen **hours**. At twenty hours, the model gives minus zero point six metres, a negative depth, which is impossible. The model assumes the water keeps falling at the same rate, but it stops when the pool is empty. So the range is zero to fifteen **hours**. Giving minus zero point six metres as an answer is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "1.8 − 0.12t = 0", "0.12t = 1.8"; on "hours" (first) "t = 15 h" (green). "t = 20: D = 1.8 − 2.4 = −0.6 m" (red) with a chip "negative depth: impossible". The two-slot card, 40 px: "assumption: the depth falls 0.12 m every hour" (amber), "why it fails: it stops when the pool is empty" (violet). On "hours" (second) framed answer (green) "0 ≤ t ≤ 15". On "slip" a red slip "D = −0.6 m" writes and is crossed (caption "a depth can't be negative"). Hold about 1 s.

### 11. handoff
> So trust a model inside its data, take care beyond it, and always check its answers make sense. It's easier to check a model when you can see every case at once. An ice skating party costs a hundred and fifty dollars for the room, plus eighteen dollars a skater, and there's a budget of four hundred dollars. How many skaters fit? A spreadsheet can lay out every row and show us. That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: the ice skates plate `ms11s-ice-skates-v1.png` (about 700 px wide) at the left; on "a hundred and fifty dollars" a coded price card beside it, 44 px: "room: $150" (violet); on "eighteen dollars a skater" "+ $18 a skater" (amber); on "four hundred dollars" "budget: $400" (green outline); grey tag "example prices". At the right, an empty `SpreadsheetGrid` (columns A and B, rows 1 to 7, an empty formula bar, the cursor on A1), header cells "A1: skaters" and "B1: cost ($)" already typed. On "next" chips "how many skaters?", "Next: a linear model in a spreadsheet" and "?". Hold about 2 s. This is l05's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Interpolation: predicting between the data. Fairly safe.
- Extrapolation: predicting beyond the data. Less reliable.
- A negative or impossible answer: the model has broken.
- Valid range: where the model makes sense, e.g. 0 ≤ h ≤ 7.5.
- Limitation: what the model assumes, and why that fails here.

Memory aid (framed card, right side, as in scene 6): *Between the data: fairly safe. Beyond it: take care.* Key: *Limitation: what it assumes, and why that fails here.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and l05's opening frame.

## Teaching checks

- **Does it explain causes?** Why interpolation is fairly safe: real readings lie on both sides (2). Why extrapolation is less reliable: nothing checks the model there, and the gap grows with distance (3). Why −12 L is nonsense: a tank cannot hold less than nothing (1, 3). Why the model breaks at 7.5 hours: it assumes the same rate for ever, but the fuel runs out (4). Why a limitation needs two parts: the assumption names what the model takes for granted, the reason says why that is false here (5).
- **Misconceptions addressed:** extrapolation always wrong (3); interpolation exact (2); a negative amount as an answer (A2 crossed); a limitation with no reason (5 crossed); "reliable because it came from the formula" (A1 crossed); mixing up the words (chips with "between" and "beyond").
- **Visual standard, item by item:** 1 the boat and the impossible readout from the first frame, returning as a badge; 2 a new stage every 30 to 60 s; 3 the inside-outside probe with a live readout and a fading confidence strip, the gauge running dry; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the readout going negative while the gauge stays on "E".
- **One idea at a time:** inside (2), outside (3), the assumption and the range (4), the exam answer (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 29 s.
- **Avoided double teaching:** l03's model and f02's solving are recalled in a phrase; lines of best fit are not mentioned (b04a, b07).
- **Syllabus coverage:** `ci4777471a` (2, 3, 5, A1; key notes 1, 2); `ci1b3cf962` (3, 4, 5, A1, A2; key notes 3, 4, 5).
- **Out of scope by design:** lines of best fit and data (Year 12 b04a, b07); exponential limitations (Year 12 a07).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A jet ski hire company's cost model is C = 90 + 70h, built from its prices for 1 to 4 hours of hire. (a) Find the cost for 2.5 hours and state whether this is interpolation or extrapolation. (b) Find the model's cost for 10 hours. Is this prediction reliable? Give a reason."
Model answer: (a) 90 + 70 × 2.5 = $265; interpolation (2.5 is between 1 and 4 hours). (b) 90 + 700 = $790; extrapolation far beyond 4 hours, so not reliable: the company may not hire for 10 hours, or may charge a day rate. Classic mistake (crossed): "$790, reliable because it came from the formula".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 3 marks suggested).** "The depth of water in a draining pool is modelled by D = 1.8 − 0.12t, where D is in metres and t is in hours. (a) When does the model say the pool is empty? (b) Explain why the model's value at t = 20 has no meaning, and state a suitable range of t."
Model answer: (a) 1.8 − 0.12t = 0 gives t = 15 hours. (b) D = 1.8 − 0.12 × 20 = −0.6 m, a negative depth, which is impossible: the model assumes the depth keeps falling at the same rate, but it stops when the pool is empty. Suitable range: 0 ≤ t ≤ 15. Classic mistake (crossed): "D = −0.6 m" given as the depth.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Boat | F = 60 − 8h; readings 60, 52, 44, 36, 28 at h = 0 to 4; h = 2.5: 40 L; h = 6: 12 L; h = 8: −4 L; h = 9: −12 L; F = 0 at h = 7.5; valid range 0 ≤ h ≤ 7.5 | 1 to 4, 6 |
| Savings | S = 350 + 40w; w = 10: $750; w = 26: $1,390 (level line); w = 52: 350 + 2080 = $2,430 | 5 |
| A1 | C = 90 + 70h; h = 2.5: 90 + 175 = $265; h = 10: $790 | 7, 8 |
| A2 | D = 1.8 − 0.12t; 0 at t = 15; t = 20: 1.8 − 2.4 = −0.6 m; 0 ≤ t ≤ 15 | 9, 10 |
| Handoff | $150 room, $18 a skater, $400 budget (no answer shown) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `l/verify.py`, run with `python -I`); Codex to re-check.

- 60 − 8h at h = 0, 1, 2, 3, 4: 60, 52, 44, 36, 28; at 2.5: 40; at 6: 12; at 8: −4; at 9: −12; 60 − 8h = 0 at h = 7.5.
- 350 + 40w at w = 10: 750; at 26: 1390; at 52: 2430 (40 × 52 = 2080).
- 90 + 70h at 2.5: 265 (70 × 2.5 = 175); at 10: 790.
- 1.8 − 0.12t = 0 at t = 15; at t = 20: −0.6 (0.12 × 20 = 2.4).

## Memory aid check

- **"Between the data: fairly safe. Beyond it: take care."** with key line **"Limitation: what it assumes, and why that fails here."** Original, worded to match math-s12-a07's chips ("interpolation = between the data", "extrapolation = beyond it") and its two-slot card. Meaning, as said in scene 6: a prediction inside the range of values the model was built from is checked by real values on both sides, so it is fairly safe; outside, nothing checks it, so care grows with distance. Assumptions checked: the model fits its data well inside the range (scene 2 says it is still a model, not exact); "take care" does not mean "wrong" (scene 3 says extrapolation is not automatically wrong); the "inter = between" link is in the chips, not claimed as etymology beyond that. It helps a new case: a phone plan's cost from 1 to 10 GB used to predict 50 GB is "beyond: take care", and the plan may cap or change price. Introduced after scenes 2 to 5.
- **Considered, not used:** "Inter-in, extra-out" (short, but "in" and "out" blur with "input" and "output" in this strand).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `l/count.py`, which reproduces e08's 5,632): **5,057 characters**, 12 scene headings. Characters per scene (1 to 12): 455, 506, 528, 585, 890, 195, 337, 396, 316, 382, 392, 75.

At 13.3 characters per second the speech is about 380 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the readings' flight (2), the probe's runs (2, 3), the gauge running dry (4) and the board's plot (5) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 467 s (7 min 47 s)**, 103 s under the 570 s cap; speech and holds before the notes about 422 s. Feedback speech: about 30 s and 29 s.

Reserve trims if the voiced take runs long: scene 4's last sentence (faster boats burn more fuel; about 6 s, the chip can stay silent); scene 2's "We have real readings on both sides of that, at two hours and at three," (the rings show it; about 5 s).

## Scene list and build ids

Lesson key `m-s11l04` (route math-s11-l04). Explainer folder `src/explainer/lessons/math-s11-l04`; build inputs in `docs/production/claude-pm/lessons/math-s11-l04/` (at voicing).

In order (12 scene headings): hook-boat, interpolation, extrapolation, assumption-range, worked-limitation, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | The boat, the logbook and the impossible readout |
| 40 to 90 s | 2 | The data band and the inside probe |
| 90 to 135 s | 3 | The probe outside; the red zone |
| 135 to 190 s | 4 | The assumption, running dry, the valid range |
| 190 to 265 s | 5 | g01 board: the holiday job and the two-part card |
| 265 to 280 s | 6 | Framed memory card |
| 280 to 395 s | 7 to 10 | Question cards and countdowns, then feedback |
| 395 to 425 s | 11 | The skates frame for l05 |
| 425 to 470 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on l03's final frame; 1 to 2 stage change (the boat becomes a badge); 2 to 3 and 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-l04-learning-review.md`, `science_check` = `checks/m-s11-l04-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-kayak-jetty-v1.png` (a jetty with three kayaks on a rack and a blank A-frame sign; no motor or fuel, so it cannot carry a fuel story; not used); `ma11-yacht-side-v1.png` (a white sailing yacht with cream sails in side view; no outboard or fuel story; not used). No existing plate shows a small motorboat.

Need (painted, new; see the Codex asset brief): `ms11s-hire-boat-v1.png` (shown first in l03's final frame, so painted before the l03 build). Reused: none.

Coded: the fuel-gauge card, the logbook card, every graph, band, probe, strip and readout, the limitation card, the board, question cards, the countdown, hand tags, the price card and spreadsheet in the handoff, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `StudioDomainStrip` or `AxisShadow` (the data band and the valid-range strip), `RegionLabels` (the impossible zone), `FunctionRider`, `LiveReadoutBoard`, `FillDial` (the gauge, check appearance), `SpreadsheetGrid` (handoff, empty; ruling 90), the g01 `WorkingBoard` parts, `MemoryAidCard` (and its two-slot limitation layout from math-s12-a07), `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row l04):
1. **Solid-then-dashed line** (small; a `StudioPlot` option, shared with math-s12-b07): a line drawn solid over a given input range and dashed beyond it, with the range shaded and an "inside / outside" probe label that switches at the band's edges. Check: the switch happens at h = 4 exactly; the dashed part continues below the axis when asked.

## Codex asset brief (Maths S11 L04, a small hire boat)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s11-l04.md`, route entry math-s11-l04. Paint after the learning reviews and maths checks for l03 and l04 pass and root gives the go-ahead, and **before the l03 build** (l03's final frame shows it; ruling 17). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma11-kayak-jetty-v1.png` and `maths/ma11-water-tank-v1.png`; no text, letters, numbers, logos, brand names, registration numbers, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-hire-boat-v1.png` (about 1800 × 900 px): a small open aluminium runabout (a "tinny" with a low windscreen and a bench seat) in side view, facing right, with an outboard motor tilted down at the stern and a portable red fuel tank visible on the floor near the stern. Empty, no person aboard. A thin strip of calm water along the bottom edge (no shoreline). Leave about 15 per cent clear space above the boat so a coded gauge card can sit there if needed.

Report inspection on the paper background (`#f6f1e7`) at 1,000 px and 260 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-l04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON and the crosswalk exactly.
3. Confirm the chips read "interpolation = between the data" and "extrapolation = beyond it" and the limitation card's slots read "assumption" and "why it fails here", as in math-s12-a07.
4. Confirm extrapolation is never called always wrong, and interpolation never called exact.
5. Confirm both attempts carry every demand and neither card shows an answer.
6. Confirm scene 11's frame matches l05's opening.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Interpolation, Extrapolation and Limits of Linear Models | Year 11 Maths Standard

(Title length: 81 characters.)

Description: More lessons, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson03.sa.html

A hire boat's fuel model says that after nine hours there are minus 12 litres left. When can you trust a prediction from a linear model? See the difference between interpolation (between the data: fairly safe) and extrapolation (beyond it: less reliable), why a model breaks when it keeps the same rate for ever, how to write a valid range, and how to state a limitation in two parts: what the model assumes, and why that fails here. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Linear relationships. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
"Interpolate and extrapolate from a linear model in a practical context"
"Identify and describe the limitations of a linear model in a practical context"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

Builds on: Linear Models: What the Gradient and Intercept Mean. Next: Linear Models in a Spreadsheet.

#Year11Maths #MathsStandard #Interpolation #Extrapolation #HSCScience

## Open decisions

- **1. The description's site link (root).** No site lesson covers this content (ruling 3); the link points to the linear models lesson (l03's page) as the nearest notes. Root may prefer no link until the site adds the gap lesson.
- **2. Title length (root).** 81 characters, under the 100 limit but over the 80 that ruling 37 used as a trigger for Year 12. Shorter alternative: "Interpolation and Extrapolation | Year 11 Maths Standard" (56 characters), which drops "limitations" from the title.

## Review notes

- Revision 1. Next: student learning review (trace from l03 and f02 only; check that the data's range is clear before the two words, that "less reliable, not banned" lands, that the running-dry cause is stated before the range, that the two-part limitation is copyable as an exam habit, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
