# Root decisions needed: Maths Standard Year 12, a01 to a06 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-a01.md`, `a02a.md`, `a02b.md`, `a03.md`, `a04a.md`, `a04b.md`, `a05.md` and `a06.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit. Inputs: the packs `pre-design/maths-standard/math-s12-a01.md` to `a06.md`, `programme/maths-standard-route-inputs-1.json`, `checks/maths-standard-kit-needs-a.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 12, binding), `site-corrections-maths-standard.md`, the format of `lessons/math-a11-e08.md`, `w14.md` and `g01.md` (Revision 2), `maths-visual-standard.md`, `AGENTS.md` and the w-strand learning-review resolution.

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate |
| --- | --- | --- | --- | --- | --- | --- |
| a01 graphs | 6,246 | 557 | 14 | S1, S2 | two driving-school quotes | `ms12-driving-school-car-v1.png` |
| a02a substitution | 5,130 | 469 | 12 | S2 | the site's café | `ms12-coffee-sandwich-v1.png` |
| a02b elimination | 5,043 | 466 | 12 | S2 | a batter's fours and sixes on a scoreboard | none (reused scoreboard and ball) |
| a03 equations from words | 6,173 | 551 | 14 | S1, S2 | the site's theatre tickets; a drive to the coast | `ms12-theatre-tickets-v1.png` |
| a04a break-even | 5,934 | 535 | 14 | S1, S2 | a weekend lawn-mowing round | `ms12-mower-trailer-v1.png` |
| a04b spreadsheet | 5,009 | 466 | 12 | S1, S2 | a school formal | `ms12-formal-table-v1.png` |
| a05 exponential graphs | 6,203 | 555 | 14 | S1, S2 | two videos' view counts | none (reused phone) |
| a06 exponential models | 6,116 | 549 | 13 | S2 | a unit's weekly rent; the site's city and car | none (reused unit block, skyline, hatchback, calculator) |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `s12a/count.py`, which reproduces e08's 5,632. Times use 13.3 characters per second plus two 10 s countdowns, short holds, settling and the 45 s notes scene; all are under 570 s. Every design has 0 em dashes, every bold cue is quoted in its scene's Visual (scratchpad `s12a/cues.py`), and every feedback scene is about 22 to 29 s of speech. All numbers were recalculated with SymPy 1.14 (`s12a/verify.py`, `verify2.py`, run with `python -I`); Codex's maths check remains the authority.

## 2. Joins (every opening and final frame)

1. **a01 opening: cold.** First Year 12 Standard video: no title card, no previous frame; the driving-school car plate and two coded price cards are solid from the first frame.
2. **a01 to a02a.** a01's final frame: square-gridded axes x −1 to 4, y 0 to 7; y = 2x + 1 (blue) and y = 6 − 2x (teal) crossing at (1.25, 3.5), ringed amber, with a 2× zoom inset between the grid lines; chips "x ≈ 1.2? 1.3?", "exact answer, no drawing?", "Next: solving with algebra", "?"; a small grey chip "Standard 1: your next video is 'Equations from words'". No exact value shown. a02a opens on it exactly and solves it.
3. **a02a to a02b.** a02a's final frame: "3x + 2y = 16" (blue) above "3x − y = 7" (teal), stacked like a column sum with a rule line and an empty answer row; both "3x" boxed amber, "both 3x"; a grey "− ?"; chips "take one from the other?", "Next: elimination", "?". a02b opens on it and solves it as the site's `we-3`.
4. **a02b to a03.** a02b's final frame: the theatre tickets plate (a03's) and the coded words card of the site's `we-1`, an empty "equations: ?" box, chips "no equations given", "Next: equations from words", "?". a03 opens on it. Standard 1 viewers arrive from a01 and have not seen it; the frame is self-contained.
5. **a03 to a04a.** a03's final frame: the mowing trailer plate (a04a's) with "costs $150 a week to run", "$6 of fuel a lawn", "charges $45 a lawn"; axes n 0 to 8, $0 to $400 with a "cost" line (violet) and a "takings" line (teal), labelled in words only, crossing ringed amber with "?" and no coordinates; chips "where does it stop losing money?", "Next: break-even", "?".
6. **a04a to a04b.** a04a's final frame: the formal table plate (a04b's) with "venue and DJ: $6,500", "catering: $85 a guest", "tickets: $130 each"; an empty spreadsheet (columns A to D, rows 1 to 7, empty formula bar, cursor on A1); chips "how many tickets?", "Next: break-even in a spreadsheet", "?".
7. **a04b to a05.** a04b's final frame: the formal's columns A and D (profits −2000 to 700 in rows of 10) with "+450" arrows and "adds $450 each row"; the phone plate with a coded video app showing "day 0: 100 views" to "day 3: 800" and grey "?" arrows; chips "each day: + ? or × ?", "Next: exponential growth", "?". No ratio stated.
8. **a05 to a06.** a05's final frame: y = 2ˣ with (0, 1) ringed green, "starts at 1"; the apartment building plate with "$650 a week" and "rent: up 4% a year"; grey chip "car: what you paid for it"; chips "real things don't start at 1", "Next: exponential models", "?"; a small grey chip "Standard 1: your next video is 'When models stop matching reality'". No model written.
9. **a06 to a07 (the cross-author join; a07 opens on this).** a06's final frame, exactly (a06 scene 12, and its silent return after the key notes):
   - Board: the painted skyline `maths/ma12-city-skyline-strip-v1.png`, 1,600 px wide, across the top.
   - Model chip, top left, 44 px: "P = 250 000 × 1.03ᵗ", with "250 000" violet (k) and "1.03" amber (a).
   - Axes below the skyline: t across from 0 to 20 years on the left 65 per cent of the frame width, labelled "t (years)"; P up from 0 to 500,000, labelled "P (people)", gridlines every 100,000.
   - The teal curve P = 250 000 × 1.03ᵗ from (0, 250 000), ringed violet with the tag "k = 250 000: today", to (20, 451 528), ringed green with the label "≈ 452 000 after 20 years".
   - To the right of t = 20: a broken-axis mark "//" on the t-axis and a tick labelled "200" near the right edge; a dashed teal arrow rising from the curve's end and leaving the top of the frame; an amber "?" ring on the axis at t = 200.
   - Chips: "200 years: 250 000 × 1.03²⁰⁰ = ?", "Next: when do models stop matching reality?" and "?".
   - Spoken last line in a06: "Back to the city. Our model says about four hundred and fifty-two thousand people after twenty years, and that sounds reasonable. But nothing stops us pushing the same model much further. What does it say after two hundred years? And would you believe it? That's next."
   - Not shown or spoken: any value at t = 200. For a07: 1.03²⁰⁰ ≈ 369.36, so P ≈ 92.3 million (SymPy, `s12a/verify.py`); Australia's population is roughly 27 million, so the model claims more than three times the whole country in one city.
   - Recommendation for a07 (the a07 author owns the change): a07's current Revision 1 (provisional opening, sneakers anchor) can keep its anchor. Its scene 1 should pay off the question it inherits in one or two sentences before the sneakers, for example: "Last time, our city model said about four hundred and fifty-two thousand people after twenty years. Push it to two hundred years, and it says about ninety-two million, more than three times the population of Australia. A good model, pushed too far, stops being good." The frame's "?" ring then fills with "≈ 92 300 000" before shrinking to a strip. a07's car (V = 24 000 × 0.82ᵗ, $453 after 20 years) matches a06's car model exactly.
   - Standard 1 viewers reach a07 from a05 and have not seen this frame. a07's first sentence should state the model in words (as above), so the frame needs no prior knowledge.

Standard 1 routing (root ruling 9): a01 → a03 → a04a → a04b → a05 → a07. The two branch points carry a small grey on-screen chip (a01 and a05 final frames), naming the next video by its plain title, not its code. If root prefers YouTube end-screen links only, delete the two chips (open question 2).

## 3. Departures from the packs

- **a01.** The pack's question 2 context (driving schools) became the anchor (cold open); the pack's anchor 2 (removalists) became attempt 2 with original numbers (crossing (5, 600); B cheaper by $60 for 3 hours). The site's SA 3 mobile plans (per minute) is not used.
- **a02a and a02b (ruling 8).** a02a: the opener pair y = 2x + 1 and y = 6 − 2x (original, a01's handoff); the substitution example y = x + 1 and 3x + 2y = 17 (original) replaces drill 2, whose answer (2, 5) repeats the café's; the café `we-2` keeps the site's numbers; both attempts original. a02b: the site's `we-3`; an original add case; the cricket anchor (the pack's anchor 1) carries multiply-first; a "which method?" scene uses the site's drill 2 and drill 3 unsolved; attempt 1 is the pack's question 2, attempt 2 original.
- **a03.** The theatre `we-1` is the main example (site numbers); the pack's drive anchor is the second example, by graph only (Standard 2 algebra as an unspoken grey row); the chickens-and-cows quick check is dropped; the pack's questions are kept, with "Jai" and the café removed from question 1 ("a casual job") and question 2's graph supplied for Standard 1.
- **a04a and a04b (ruling 8).** a04a: the pack's question 1 context (lawn mowing) became the anchor; the site's `we-2` is the worked example; the site's food stall is not used (MS-04, MS-05); both attempts original (car detailing from the pack's anchor 3; T-shirt printing). a04b: the pack's question 2 context (the formal) became the anchor, with the ticket price changed from $135 to $130 so the break-even (144.4) needs the bracket and refined step; $135 returns as the "change one number" demonstration (break-even exactly 130); attempt 1 uses the site's SA 3 numbers and attempt 2 the site's `we-3` numbers, both in original wording.
- **a05.** The site's bacteria numbers moved to a doubling video (ruling 11), with an original linear video beside it for Standard 1's prediction; the doubling video's equation is not written (k is a06's); the app demonstration stays here (the pack allowed moving it); the gift card and club anchors are unused; both attempts are the pack's.
- **a06.** An original rent anchor ($650, 4%); the site's city (`we-2`) and car (`we-3`, corrected to $8,898, MS-06) as worked examples; the car's depreciation preview is one sentence (ruling 12); attempt 1 a streaming price (the pack's anchor 3, original numbers); attempt 2 the pack's console question.
- **All.** The pack's practice-question crossed slips are kept where given; where an anchor moved into teaching, the attempt's slip changed with it.

## 4. Open questions for root

1. **Description codes (ruling 2).** The crosswalk gives no published content-point codes (`displayedContentPointCode` is null for every point). Each description therefore quotes the exact wording under the headings "Syllabus content, Standard 2" and "Syllabus content, Standard 1", with both focus-area links; the CMS codenames stay in the designs only. Confirm, or name the code form wanted.
2. **Standard 1 chips.** Keep the grey on-screen "Standard 1: your next video is …" chips on a01's and a05's final frames, or use end screens only?
3. **a07 join.** Confirm a06's final frame (join 9) and ask the a07 author to pay off the 200-year question in scene 1, as recommended.
4. **a04b ticket price.** Confirm $130 (bracket and refined step needed) over the pack's $135 (whole break-even), with $135 kept as the price-change demonstration.
5. **Absolute references (a04b).** Left out to keep Standard 1 in reach; add a one-line chip if root wants "$" references seen.
6. **Site numbers in a04b's attempts.** Keep the site's SA 3 and `we-3` numbers in original wording, or use fully original numbers (A2's alternative loses the round-up test).
7. **Lengths at the floor.** a02a (5,130), a02b (5,043) and a04b (5,009) sit just above 5,000 characters. They are deliberately unhurried single-method videos with long on-screen working; none needs more speech, but a reviewer may ask for a second worked example in a02a.
8. **Ruling 5 (money figures).** No tax, levy or stamp-duty rate appears in a01 to a06, so the "rates change every year" line is not needed. Prices, rents and pay rates are labelled as examples on screen where they could be read as real (a03's pay rates, a06's rent and streaming rises).
9. **Plate paint order.** New plates are needed one video before their own video, because final frames borrow the next anchor: `ms12-theatre-tickets-v1.png` before the a02b build; `ms12-mower-trailer-v1.png` before a03; `ms12-formal-table-v1.png` before a04a. Root may prefer to commission all five `ms12-` plates at once (asset briefs are in each design: a01, a02a, a03, a04a, a04b).
10. **Kit order.** `SpreadsheetGrid` (a04b) is the strand's main new part and is needed again across Year 11 Standard and the Year 12 money strands; `EliminationStack` (a02b) and `RepresentationQuad` (a05) are smaller; a01's table-to-plot flight is an option on `StudioCandidateTable`. No simulation engine is needed for a01 to a06.

## 5. Shared colour roles (for the a07 to a13 author and the builder)

- a01 to a03: first line or unknown blue; second teal; crossing amber (a01, a02a) or green (a03); a03's count fact violet and value fact amber; a02a/a02b's substituted expression and cancelling terms violet.
- a04a and a04b: cost violet; revenue teal; loss grey; profit teal-tinted; break-even amber.
- a05 and a06: growth teal; decay blue; linear violet (a05); the multiplier a amber; the starting value k and intercept violet (a06); (0, 1) green (a05).
- Everywhere: answer green; mistake red, crossed slips only; header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS"; text above y = 950.

## 6. Learner-wording checks applied (from the w-strand learning-review resolution)

No "the site's example" or "one from the course" in learner copy; every term gets a plain meaning before use (intersection, simultaneous, substitution, eliminate, fixed and variable cost, revenue, cell, formula, ratio, starting value, intercept, multiplier); money and decimals are spoken unambiguously ("seven hundred and three dollars and four cents", "one point zero four", "zero point eight two"); each attempt has at most three demands; feedback stays under 30 s of speech; memory aids keep their conditions (a01's aid with the parallel case in the key notes; a04a's "round up"; a05's (0, 1) and "never touch"; a06's "the part you keep").
