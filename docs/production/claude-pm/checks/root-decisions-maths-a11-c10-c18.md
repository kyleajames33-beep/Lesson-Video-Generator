# Designer decisions: Year 11 Maths Advanced c10 to c18 (Revision 1, 16 November 2026)

Written by the c10 to c18 designer (Claude) for root. The designs are `../lessons/math-a11-c10.md` to `math-a11-c18.md`, the second half of Introduction to differentiation (the chain, product and quotient rules, choosing a rule, the graphical applications and the derivative as a rate). They follow the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 designs (w05, w14 and c06 read closely, c01 to c09 for the strand's conventions), root's acceptance rulings for w01 to w31, root's rulings on the c and e packs and on c01 to c09 (`root-rulings-maths-a11-c-e-packs.md`; ruling 7 there, the c01 to c09 colour roles, is adopted throughout) and the recurring learning-review findings (`m-a11-w01-w31-learning-review-summary.md`). Documents only: no node, Remotion, build, render, commit or sub-agent.

## Length and timing (counted by script)

Narration blockquotes, bold markers removed, 13.3 characters per second; totals add 2 × 10 s countdowns, about 6 s of short holds, about 22 s of settling and the 45 s notes scene.

| Video | Characters | Scene headings | Speech before notes | Total | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| c10 chain rule | 5,906 | 14 | 438 s | about 531 s | 30 s, 28 s |
| c11 product rule | 5,538 | 13 | 411 s | about 504 s | 28 s, 28 s |
| c12 quotient rule | 5,509 | 13 | 409 s | about 502 s | 27 s, 27 s |
| c13 choosing a rule | 5,554 | 13 | 412 s | about 505 s | 30 s, 29 s |
| c14 sign of f′ | 5,560 | 14 | 412 s | about 505 s | 26 s, 26 s |
| c15 sketching f′ | 5,523 | 13 | 410 s | about 503 s | 26 s, 27 s |
| c16 stationary points of a cubic | 5,522 | 13 | 410 s | about 503 s | 28 s, 27 s |
| c17 f′(c) in context | 5,526 | 14 | 410 s | about 503 s | 29 s, 25 s |
| c18 displacement and velocity | 5,539 | 13 | 411 s | about 504 s | 24 s, 25 s |

All are inside 5,500 to 6,800 characters and at least 130 s under the 570 s speech cap. Two feedbacks sit at 29.7 to 29.9 s by speech estimate (c10 F1, c13 F1); the voiced take confirms them. Trims if needed: c10 F1 "Leaving off the minus four is the slip" → "Missing the minus four is the slip"; c13 F1 "Over a common bottom, that's" → "So it's".

Mechanical checks run (scratchpad `c10c18/count.py`, `fill.py`): no U+2014 (and no U+2013) in any file; every bold cue word appears quoted in its scene's Visual, in spoken order; no "color/center/-ize" spellings; decimals spoken "zero point"; no "the site's example" or "the course" in learner copy. Every number recalculated with SymPy 1.14 (`c10c18/verify.py`) and listed under each design's "Numbers to verify".

## Anchors (one per video, everyday, no repeats)

| Video | Anchor | Category | Plates |
| --- | --- | --- | --- |
| c10 chain rule | a pebble's ripple spreading in a garden pond (dA/dt = dA/dr × dr/dt, m² per m × m per s) | home, outdoors | new `ma11-garden-pond-v1`, `ma11-pebble-v1`; new `ma11-dog-walk-kit-v1` (handoff) |
| c11 product rule | a dog-walking side business: weekly income = price × walks, both rising | money | reused dog kit; new `ma11-game-controller-v1` (handoff) |
| c12 quotient rule | an online game's win rate, wins ÷ games, (20 + 0.7g)/(50 + g) | games | reused controller; new `ma11-pass-the-parcel-v1` (handoff) |
| c13 choosing a rule | pass-the-parcel: what's done last is unwrapped first | games | reused parcel; new `ma11-beach-day-v1` (handoff) |
| c14 sign of f′ | the crowd on a beach over a summer's day (counts only) | travel, leisure | reused beach; new `ma11-garage-front-v1`, `ma11-roller-door-curtain-v1` (handoff) |
| c15 sketching f′ | a garage roller door: up, pause, down | home | reused garage and curtain; new `ma11-pump-track-v1` (handoff) |
| c16 cubic stationary points | a bike pump track's crest and hollow | sport | reused pump track; new `ma11-hot-air-balloon-v1`, `ma11-launch-paddock-v1` (handoff) |
| c17 f′(c) in context | a hot-air balloon's climb and its flight log | travel | reused balloon and paddock; new `ma11-shuttle-run-v1` (handoff) |
| c18 displacement and velocity | a 20 m shuttle run, the runner shrunk to a dot | sport | reused shuttle strip; final frame coded algebra for e01 |

Twelve new plates, all `ma11-`, each briefed in the design whose final frame first shows it (or, for c10's pond and pebble, in c10 itself, where they first appear), so every plate exists before the earliest build that needs it: c10 brief (pond, pebble, dog kit), c11 (controller), c12 (parcel), c13 (beach), c14 (garage, curtain), c15 (pump track with a profile sidecar), c16 (balloon, paddock), c17 (shuttle strip with a line sidecar). c18 needs no new plate. No people anywhere: the beach shows objects only, the balloon's basket hides any occupant, the shuttle runner is a dot.

**Checks made (16 Nov).** A grep of every `math-a12-*.md` and `math-a11-*.md` design for: pond, ripple, pebble, stone, treadmill, gear, dog, kelpie, walks per week, part-time, pay rise, hourly rate, wage, sausage, pizza, basketball, netball, shooting percentage, controller, win rate, gaming, video game, console, cordial, cupcake, calculator, folder, nesting, parcel, pass the parcel, wrapping, beach, crowd, umbrella, plane, altitude, roller door, garage, swing, boom gate, golf, mini-golf, dune, pump track, BMX, hiking, ridge, hot-air, balloon, robot, vacuum, lift, shuttle, beep test, cone, hallway, skateboard, drone, tide, battery, bath, tank, dam. No anchor match. Near hits, judged distinct:
- **"pond":** only "corresponding" and a biology pool plate in a Year 12 reuse list.
- **"parcel":** Year 12 s05's anchor is a parcel's delivery window (probability); c13's is a party game's wrapping layers.
- **"beach":** Year 12 t01's lighthouse beam on a beach and plate descriptions; c14 is a crowd count.
- **"roller door", "garage":** Year 12 s05 describes a truck's rear roller door; c08 and c09's driveway ends at a garage. c15's anchor is the door's motion.
- **Hiking profile:** a Year 12 design anchors on a hike's elevation profile with a flat ledge; c16's pump track is a short cubic with a crest and a hollow and no ledge.
- **"balloon":** c05 and c06's water balloon; c17's hot-air balloon is a different object and the narration does not call back to c06 there (c14 makes one ten-word callback to the water balloon's flat tangent).
- **Lift:** Year 12 i10 uses a lift for displacement against distance by area; c18 is a shuttle run with velocity from a formula.

**Pack anchors rejected, with reasons.** c10 treadmill (not needed). c11 part-time wage (recast as a dog-walking business, the same pay = rate × quantity idea with a visible object) and sausage sizzle (price × sales per hour is an expandable quadratic when written as a function of price). c12 bake-sale cost per cupcake ((40 + 2n)/n splits into 40/n + 2, needing no quotient rule) and basketball shooting percentage (basketball appears in w05 and w14, netball in w24; the same linear-over-linear maths moved to a game). c13 nesting dolls (human figures with faces) and phone folders (folders open outside-in but are built in no order, which weakens the "last step" test). c14 plane altitude (a long level cruise is not one polynomial). c15 swing seat (periodic, Year 12 d05's territory). c16 mini-golf hump (w15 to w17's golf chip and bank) and sand dune (Year 12 beach and dune plates). c17 ice cube (c03's attempt 1 is ice melting). c18 harbour ferry (c01's attempt 1 is a ferry).

**Variety across the nine:** home and outdoors (c10, c15), money (c11), games (c12, c13), travel and leisure (c14, c17), sport (c16, c18). Combined with c01 to c09 the strand spans food, money, games, phones, travel, home and sport.

## Joins

| From | Final frame (the next video's opening) |
| --- | --- |
| c09 → c10 | c09's coded algebra exactly: "y = (3x + 2)⁵" (inside blue), "expand five brackets? slow", "power rule alone: 5(3x + 2)⁴ ?", "Next: a function inside a function", "?" (root ruling 6 on c01 to c09). c10 opens on it, shows 5(3x + 2)⁴ is wrong by expanding (3x + 2)², then brings in the pond at scene 2. |
| c10 → c11 | the dog-walking plate; "$15 a walk, + $1 a month", "8 walks a week, + 2 a month", "income: 15 × 8 = $120 a week", "rising how fast? 1 × 2 = 2 ?" |
| c11 → c12 | the controller plate; "win rate = wins ÷ games", "20 ÷ 50 = 40%", "wins: + 0.7 a game", "games: + 1 a game", push and pull arrows, "climbing how fast? ?" |
| c12 → c13 | the parcel plate; "y = (x/(x + 1))³"; "chain?", "product?", "quotient?" |
| c13 → c14 | the beach plate; counter "people on the beach"; a small crowd-time graph with "10 am: growing?", "4 pm: shrinking?", "neither?" |
| c14 → c15 | the garage with the curtain half up; the door's height-time graph; empty axes "how fast is the height changing?" with "?" |
| c15 → c16 | the pump track with its coded profile (heights × 2); "y = (x³ − 9x² + 24x)/20 m"; "crest: where exactly?", "hollow: where exactly?", "which is which? prove it" |
| c16 → c17 | the balloon over the paddock; "h(t) = (60t² − t³)/50 m, t in minutes"; "h′(10) = ?" with "? per ?" |
| c17 → c18 | the shuttle strip; the dot at the start line; number line 0 m to 20 m; "there and back, twice: 80 m run", "where are you now? ?", "running back: how fast? ?" |
| c18 → e01 | coded algebra only: "y = 2ˣ" (x blue in the power), an empty table x = −2 to 3 with "?" for every y, "x in the power", "Next: exponential graphs", "?". This is allowed by the e01 pack's start ("recall a⁰ = 1 and a⁻ⁿ = 1/aⁿ, then tabulate 2ˣ for x = −2 to 3"), states no value and commits e01 to no anchor (credit card, markdown or mould remain open). |

## Colour roles (root ruling 7: the c01 to c09 roles, no new scheme)

Inputs and x blue; outputs and heights teal; secants and averages amber; tangents, rates and f′ violet; answer green; mistakes red, crossed slips only. Where a lesson needs roles the c01 to c09 table does not name, they are matched to the Year 12 videos that recall the same rule, so the colours carry over: c10's inside u blue and outside teal (as d06); c11's first factor u and its turn v u′ teal, second factor v and its turn u v′ blue (as d07); c12's top and push teal, bottom and pull blue, "v ≠ 0" amber (as d08); c13's layers amber (outside), blue, teal (the parcel's papers); c14 to c16's "+" and "−" use the kit's `MATH_UP` and `MATH_DOWN` tokens with stationary points amber; c18's distance amber (accumulated, never negative).

## What Year 12 relies on (d01 to d08 entry knowledge, read 16 Nov)

| Year 12 | Relies on | Delivered in |
| --- | --- | --- |
| d01, d02, d03 | grey chip "Year 11: dy/dx = dy/du × du/dx"; "call the inside part u"; back-substitution | c10 scene 3 (the rule in that layout and those words), scenes 4 to 7 (u, dy/du, du/dx, multiply, put u back) |
| d06 | `ci00fa8fac` in both forms; "rates along a chain multiply: dy/du times du/dx, Year 11's form"; `StudioRateChainStrips` | c10 scenes 2, 3 (the pond's rate chain on the same kit part), 6 (f′(g(x))g′(x)). d06's own memory aid ("Outside slope at the inside, times the inside slope") is deliberately not used, so it lands fresh. |
| d06, d07, d08 | `cie3d91a6e`: choosing the rule from the structure | c13 (the last-step test, simplify first, work inwards) |
| d07 | `ci72e90f3a` in both forms; "the rectangle behind the product rule"; "each factor takes a turn, and the other one stays"; a factor needing the chain rule | c11 (both forms, the income rectangle, the same phrase as its memory aid, site Q3) |
| d08 | `cifb023b4e` in both forms; "last video: (uv)′ = u′v + uv′" rebuilt into the quotient rule; "lo d(hi) minus hi d(lo), over lo squared" | c12 (both forms, the derivation from u × v⁻¹, the same mnemonic) |
| d04, d05 | the constant multiple and sum rules | c07 (first half); c13 recalls "a number rides along" |

## Departures from the packs and site, with reasons

1. **c10:** the pond arrives in scene 2 (about 48 s) because c09's frame is algebra only (root ruling 6). The site's gear analogy is replaced by the pond's rate chain with units. The reciprocal example 1/(2x − 1)³ is original, so A1(b) is not the first reciprocal the student meets.
2. **c11:** the anchor is the pack's wage idea recast as a dog-walking business. A factorised-zeros sentence is added to site Q3 (pack misconception 4).
3. **c12:** the anchor is original (a game's win rate); the v² is derived from u × v⁻¹ (the pack's alternative to the site card's "weighting" sentence). Site `we-2` gains its zeros (0 and −3/2) in one sentence.
4. **c13:** the site has no worked example on choosing; the sorting set (pack), (x/(x + 1))³, x(2x − 1)³ and 4/(x² + 1)³ (the pack's constant-numerator trap) are original. Not folded into c11 and c12 (root ruling 5).
5. **c14:** pointwise wording and intervals as inequalities that exclude stationary x-values (pack decision against lesson10's inconsistency); x³ as a one-scene warning, classification left to c16.
6. **c15:** an x³ scene (f′ touching the axis) is added between the site's cubic and corner, linking c14's warning to sketching.
7. **c16:** site lesson08 `we-1` gains the classification step from the pack's correction; f″ never appears; "neither" in learner copy, "horizontal point of inflection" only in an author note.
8. **c17:** original teaching for the pack's gap (`ci8a2722e2` partial): the balloon's descent is a graph without a formula, and a "rate graph alone" scene prepares A2. A one-line bakery example (C′(50) = 1.2, $ per loaf, illustrative) shows a non-time input and the four-part sentence.
9. **c18:** site `we-3`'s −5 m is called the change in displacement and the displacement at t = 5 is 0 m (pack correction).

## Site findings

All findings the packs raised for c10 to c18 are already in `../site-corrections-maths-a11.md` section 6 (lesson05's odd-one-out and "not accepted" claim; lesson10's interval inconsistency and endpoint claim; lesson08's f″ definitions, "Move 2" and unclassified `we-1`; lesson16's "displacement" for change in displacement). Each design avoids them and says so in "Site notes". One optional item for root: lesson06's card explains the quotient rule's v² as "weighted by v² to account for the shrinking or stretching effect of division"; it is not wrong, but it explains nothing (the c12 pack lists it as a decision, not an error). I found no further site errors (I read the site only through the packs' quotations).

## Kit additions (for the builder to log in `maths-a11-kit-needs.md`, ruling 13 of the w01 to w14 acceptance)

1. Ripple ring over a plate, in the plate's perspective (c10).
2. Factor slide-out on `InnerSlot` (c10).
3. `ProductRectangle` with a step table (c11; reusable by Year 12 d07).
4. Win-rate tracker (c12).
5. Layer peel linked to a plate sidecar; cards dropping through `DecisionTree` (c13).
6. Sign-coloured tangent on `FunctionRider`; progressive `SignStrip` (c14).
7. Slope gauge and pen on `PairedDerivativePanel`; piecewise model support (c15).
8. Table of slopes (a `SignStrip` layout with glyphs and verdicts) (c16).
9. Shared cursor with word readouts on `StudioStackedDerivativePanels`; cover card (c17).
10. Displacement readout and distance counter on `StudioParticleTrack` (c18).

## Open questions for root

1. **c10's anchor timing.** The painted pond arrives at about 48 s, after the algebra test, because of the accepted algebra-only c09 frame. Accept, or drop a small pond badge into scene 1's last sentence?
2. **c12's anchor.** A game's win rate replaces the pack's basketball percentage (basketball and netball already used). Accept?
3. **c13's anchor.** Pass-the-parcel carries a method (last on, first off) rather than a quantity; the near word "parcel" is Year 12 s05's delivery window. Accept?
4. **Near contexts:** c15's roller door against c08 and c09's garage; c16's pump track against Year 12's hiking profile; c17's hot-air balloon against c06's water balloon. Each judged distinct above.
5. **Memory aids shared with Year 12.** c11 uses "Each factor takes a turn; the other one stays" (as d07) and c12 "Low d high, minus high d low, over low squared" (as d08), so Year 12 recalls them; c10's aid deliberately differs from d06's. Confirm, or ask for c10 to use d06's words too.
6. **c17's bakery line.** C′(50) = 1.2 is given without a cost function (an illustration of units for a non-time input). Accept, or replace with the balloon only?
7. **c14 to c16 tokens.** "+" and "−" use `MATH_UP` and `MATH_DOWN`; every segment also prints its sign so colour never carries the meaning alone. Confirm the tokens are distinct from the answer green on the studio palette.
8. **Feedback at about 30 s** (c10 F1, c13 F1): confirm on the voiced take; trims are named above.
9. **Site links** in the YouTube drafts: c10 lesson05; c11, c12 and c13 lesson06; c14 lesson10; c15 lesson15; c16 lesson08; c17 lesson12; c18 lesson16. Confirm the playlist pages.
10. **Production board.** I did not edit `parallel-production-board-2026-10-10.json` (root owns it); the nine designs and twelve plate briefs are ready to be listed there.

## Self-grades (designer's judgement, before independent review)

- **c10: A−.** The expansion test makes the missing × 3 visible and the pond makes the multiplication caused, with units cancelling; "call the inside part u" is said and shown as Year 12 needs. Risk: the plate arrives late (48 s) and this is the longest of the nine (about 531 s).
- **c11: A.** The corner of the income rectangle is exactly the wrong guess and shrinks away on screen; the two turns are read off the picture; site Q3 links the chain rule. Risk: scene 6 is long (about 69 s on one board).
- **c12: A−.** The derivation from u × v⁻¹ is complete line by line, and the numerator staying at 15 is a real surprise. Risk: a game's win rate is less physical than other anchors; one small spoken decimal.
- **c13: A−.** A usable test ("the last thing you'd do with a number") with traps that simplify rather than add rules, and three combinations. Risk: the anchor is a metaphor, not a measured quantity; A2's long top line.
- **c14: A.** The busiest moment of the day shows 0 people per hour with a flat tangent; the height-versus-slope slip lands at 4 pm with 520 people still there.
- **c15: A−.** The door's eight-second pause gives "steepest, not highest" a picture, and the three questions are applied in order on every example. Risk: four consecutive paired-panel stages (2 to 5) need visible variety in the build.
- **c16: A−.** The table of slopes makes "justify" concrete and the track's end makes "local" concrete; the site's unclassified example is completed. Risk: the 0.2 m dip needs the labelled × 2 exaggeration.
- **c17: A.** The fastest climb at exactly halfway, the top where the climb rate is zero, and the whole story told from the rate graph alone with the height graph covered.
- **c18: A−.** Both distinctions in one familiar shuttle run, the corrected site example, and a vanishing arrow at the x–t graph's lowest point. Risk: the shuttle's instant turns are an idealisation.

## Numbers

Every number in the nine designs was recalculated with SymPy 1.14 (scratchpad `c10c18/verify.py`) and listed under each design's "Numbers to verify". No pack or site answer was found to be wrong. Models built for pictures (the pond, the dog walker, the win rate, the beach crowd, the roller door, the pump track, the balloon's climb and descent) are checked for the stated properties (the pond's chain equals direct differentiation; the rectangle's per-month pieces; the win rate's constant numerator and 50% at 25 games; the crowd's peak at 1 pm; the door's ±0.3 m/s peaks and zero pause; the track's crest, hollow and slopes; the balloon's 24 m/min at 20 min, 640 m at 40 and −32 m/min at 55). Codex's maths check remains the authority.

No speech, source edits, builds, renders or commits were made.
