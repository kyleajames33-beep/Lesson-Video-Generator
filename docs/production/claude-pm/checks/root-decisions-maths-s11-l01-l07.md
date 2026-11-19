# Root decisions needed: Maths Standard Year 11, l01 to l07 (first-revision designs)

19 November 2026. Design author's handover to root for `lessons/math-s11-l01.md` to `l07.md` (Linear relationships), Revision 1 each. Year 11 is one course for Standard 1 and Standard 2. Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s11-l01.md` to `l07.md`, `programme/maths-standard-route-inputs-8.json`, `checks/maths-standard-kit-needs-s11-f-l.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 91, binding), `site-corrections-maths-standard.md` (MS-01, MS-81 to MS-83), the format of `lessons/math-s12-a01.md`, `a07.md` and `r12a.md` (Revision 2), `maths-visual-standard.md`, `AGENTS.md`, f08's final frame in `checks/root-decisions-maths-s11-f01-f08.md` section 1, and e01's opening in `lessons/math-s11-e01.md` (Revision 1).

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Anchor | New plate |
| --- | --- | --- | --- | --- | --- |
| l01 gradient and y-intercept | 5,388 | 492 | 13 | f08's pancake line, then an aquarium filling from a hose; the site's car (`we-2`) | `ms11s-aquarium-v1.png` |
| l02 writing and drawing y = mx + c | 5,148 | 474 | 13 | the site's taxi fare ($6 + $3 a km) | none (reused taxi) |
| l03 linear models in context | 5,281 | 484 | 13 | the site's hire bike ($12 + $5 an hour); coffee pods running down | `ms11s-coffee-pods-v1.png` |
| l04 interpolation, extrapolation, limitations | 5,057 | 467 | 12 | a hire boat's fuel (60 − 8h, read for 4 hours) | `ms11s-hire-boat-v1.png` |
| l05 a linear model in a spreadsheet | 5,021 | 465 | 12 | an ice skating party ($150 + $18 a skater, $400 budget) | `ms11s-ice-skates-v1.png` |
| l06 direct variation | 5,024 | 465 | 12 | the site's apples ($4 a kg, no fee) on the produce scale | none (reused scale and apple) |
| l07 graphing y = kx | 5,062 | 468 | 12 | money for New Zealand (example rate 1.10); frozen yoghurt by weight | `ms11s-frozen-yoghurt-v1.png` |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `l/count.py`, which reproduces e08's 5,632. Times use 13.3 characters per second plus two 10 s countdowns, short holds (6 s), settling (about 22 s) and the 45 s notes scene; all are 78 to 105 s under 570 s. Every design has 0 em dashes and every bold cue is quoted in its scene's Visual (scratchpad `l/cues.py`). Feedback speech runs 21 to 30 s. All numbers were recalculated with SymPy 1.14 (`l/verify.py`, run with `python -I`: 131 checks, 0 failures); Codex's maths check remains the authority.

All seven are near the bottom of the 5,000 to 7,000 range. The pack flagged l07 as "may run short" and l02 and l06 as "watch" (crowding), and ruling 52 accepts videos near 5,000 characters without padding. Each design was topped up only with sentences that teach (for example l05's valid range in the sheet, l07's "a point well away from the origin"), not filler.

## 2. Joins (every opening and final frame)

1. **f08 to l01 (fixed frame).** l01 opens on f08's final frame exactly as section 1 of `root-decisions-maths-s11-f01-f08.md` fixes it: header "MATHEMATICS STANDARD"; the pancake plate; the sheet "=A2*4+10" with its blue line (0, 10) to (6, 34); the amber dotted stopping curve; chips "What two numbers describe a straight line?", "Next: gradient and y-intercept" and "?". On l01's first sentence the header gains "· LINEAR RELATIONSHIPS". l01 answers the chip on the pancake line (it starts at $10, the delivery fee, and climbs $4 a bag), as that file says l01 may, then moves to the aquarium. **Not provisional.**
2. **l01 to l02.** The taxi `ma11-taxi-side-v1.png` (about 1,000 px, left); chips "$6 to start" (violet) and "+$3 a km" (amber), 44 px; grey tag "example fare"; empty axes (distance 0 to 5 km, fare $0 to $24) with the chip "C = ?"; chips "Next: writing and drawing y = mx + c" and "?". l02 opens on it and adds a coded meter card.
3. **l02 to l03.** The hire e-bike `ma11-share-ebike-v1.png` (about 900 px, left); a coded swing tag "$12 before you ride a single metre" (violet underline) and "then $5 per hour" (amber underline), "example price"; a model card "C = ▢ + ▢ h" with a violet and an amber slot; chips "which is the gradient? what does it mean?", "Next: linear models in real life" and "?".
4. **l03 to l04.** The hire boat `ms11s-hire-boat-v1.png` (about 1,000 px, left, on a coded water line); a fuel-gauge card at "60 L"; the model chip "F = 60 − 8h" with "F = fuel (L), h = hours"; small axes with the line falling through the h-axis; the readout "h = 9: F = −12 L?" with the point ringed grey below the axis; chips "trust it?", "Next: interpolation and extrapolation" and "?".
5. **l04 to l05.** The ice skates `ms11s-ice-skates-v1.png` (about 700 px, left); a price card "room: $150" (violet), "+ $18 a skater" (amber), "budget: $400" (green outline), "example prices"; an empty `SpreadsheetGrid` (A and B, rows 1 to 7, empty formula bar) with "skaters" in A1 and "cost ($)" in B1; chips "how many skaters?", "Next: a linear model in a spreadsheet" and "?".
6. **l05 to l06.** The produce scale `ma11-produce-scale-v1.png` (about 800 px, left) with three apples `ma12-apple-v1.png` on its tray and a coded "0.00 kg" readout; a shelf sign "Apples $4 per kg" and "no bag fee", "example price"; empty axes (mass 0 to 8 kg, cost $0 to $35) with only the origin's open circle and the chip "0 kg → $0?"; chips "Next: direct variation" and "?".
7. **l06 to l07.** The suitcase `ma12-travel-suitcase-v1.png` (about 600 px tall, left); the rate card "A$1 → NZ$1.10" with "example rate"; empty axes (A$ across 0 to 400, NZ$ up 0 to 450, grid every 50), only the origin ringed green, the chip "one more point?" and a faint dashed arrow up and right; chips "Next: graphing y = kx" and "?".
8. **l07 to e01 (cross-author join; e01 opens on this).** l07 scene 11's frame matches e01's opening as written in `lessons/math-s11-e01.md` (Revision 1, scene 1 and its Boundary): coded axes 1,100 × 640 px, "hours worked" across in blue (0 to 40), "pay ($)" up in teal ($0 to $1,200), a straight line through the origin (drawn at e01 scene 2's $29.40 an hour, not labelled, ending at (40, 1,176)), the origin ringed green, an amber step triangle and the amber tag "k dollars per hour", the chip "pay = k × hours", chips "Next: earning money" and "?". No plate. l07's narration never says "wage" (e01's first sentences name it) and ends "What's that rate called, and how does it compare with a yearly salary?". **This confirms e01's provisional join (ruling 87):** e01's scene 1 can stand as written. If root agrees, the e01 author can drop "provisional" from its Boundary and open decision 1.

Every design's last scene returns silently to its handoff frame after the key notes (1 s cross-fade), as the Year 12 designs do.

## 3. Departures from the packs

1. **l01:** the site's `we-2` car is the worked example (not a new one); the signs are the site's `we-3` three cases; C = 12 + 5h and y = 10 − 2x are taught so attempt 2's y = 12 − 3x stays unseen. The pack's snowfield and ice rink anchors are not used (the aquarium and the site's examples cover them; the ice rink would clash with l05's skating party).
2. **l02:** the site's taxi replaces the pack's karaoke, tutoring and bike repair anchors (the site's own hook, and a plate exists). The worked example is the site's `we-3` table read as a graph through (0, 30) and (3, 66). "From m and c given in words" is left to l03, as the pack's pace flag suggests.
3. **l03:** the site's hire bike and `we-2` savings carry the teaching; the pack's coffee pods are the falling model; the pack's music lessons are not used.
4. **l04:** the boat's model comes from five gauge readings (0 to 4 hours) so "between" and "beyond" have real data; a mild extrapolation (6 hours, 12 L) is added between the safe and the nonsense cases. The fairy floss anchor is not used.
5. **l05:** A1's party bus becomes trailer hire with the same numbers ($45 plus $12.50 an hour), because a party bus at those prices is implausible for NSW in 2026. The budget is found by steps of 5, then steps of 1 (the pack's "refine the step").
6. **l06:** the site's apples with the existing scale and apple plates replace the pack's pick-and-mix lollies (no new plate); the contrast line is a pick-your-own orchard with a $12 entry fee and the same $4 a kg. The rice cooker is not used. The fourth description-sort card ("hours and pay at a flat rate") previews e01.
7. **l07:** A2 supplies both lolly lines (the pack asks students to graph both), so the 10 s response is reading and comparing, not drawing two lines. The worked example reads k back from the site's d = 60t graph. A second frozen yoghurt price ($2.40 per 100 g) is invented for the comparison scene.

## 4. Decisions for root

1. **Letters for mass (ruling 91, MS-01).** l06 and l07 use m for mass (the pack's choice), with a grey "here m = mass (kg)" chip at m's first use in l06, because m is also the gradient in y = mx + c. Alternative: w for weight in both. I recommend m with the chip.
2. **Example prices and rates (ruling 5).** Every invented price or rate carries an "example" tag on screen: the taxi fare (site), the bike hire (site), ski hire, jet ski hire, the skating party, trailer hire, apples (site), cherries, potatoes, frozen yoghurt, lollies, the A$ to NZ$ rate, and the boat's and aquarium's rates. l07 says once that exchange rates change every day. The only real price is petrol at $2.25 a litre on one l06 sort card (ruling 47's dated NRMA example); Codex re-checks it at build time.
3. **The l04 site link.** No site lesson teaches interpolation or extrapolation (ruling 3), so l04's description links to the linear models lesson (l03's page) as the nearest notes. Root may prefer no link until the site fills the gap.
4. **l04's title (81 characters).** Under 100 but over ruling 37's 80-character trigger for Year 12. Shorter alternative: "Interpolation and Extrapolation | Year 11 Maths Standard" (56).
5. **Two-part limitation card colours.** l04 copies math-s12-a07's card exactly ("assumption" amber, "why it fails here" violet), so Year 12 recalls the same card. Violet is also the strand's intercept colour; in l04 the start value is shown in the model chip only, so the two uses do not meet on one board.
6. **l07 to e01.** Confirm the join in section 2, item 8, so e01's opening is no longer provisional.
7. **The aquarium's alpha.** The aquarium plate's glass must stay see-through to the paper ground; the asset brief asks Codex to check this. If the painted glass reads white, the plate needs a redo before l01's build.
8. **"Builds on" lines.** l01 (f08) and l03 and l05 (f02, f08) name the formulas videos by description, since their titles are not yet fixed in this file set; the chips and descriptions quote the titles once fixed.

## 5. Strand colour roles (fixed l01 to l07)

The line (or model, or output column) blue; a second line teal; the gradient, the rate, rise and run, step triangles, "+3"-style arrows, k and reading paths amber; the y-intercept, the starting value, c and any fixed amount violet; the origin ringed green; inputs and data points ink; check ticks and answers green; mistake red, crossed slips only. l04 adds: interpolation green, extrapolation amber, nonsense values red, the data band pale grey, and a07's two-slot card (assumption amber, why it fails violet). The Year 12 b strand uses m blue; this strand keeps m amber so the step triangle stands out from the blue line. l07's final frame uses e01's roles (hours blue, pay teal, rate amber), which agree.

## 6. Kit needs (as `maths-standard-kit-needs-s11-f-l.md`, confirmed by these designs)

1. **SpreadsheetGrid** (ruling 90; built before f08): used in l01 (f08's frame), l04 (handoff, empty) and l05. **l05 adds a linked chart option**: each computed row lights a point on a line chart beside the grid; an edited formula, filled down, ripples the column and redraws the line, leaving the old line as a grey ghost.
2. **Solid-then-dashed line** on `StudioPlot` (l04; shared with math-s12-b07): solid over a given input range and dashed beyond, the range shaded, an "inside / outside" probe label that switches at the band's edges.
3. **ConversionGraph mode** on `StudioPlot` (l07): dashed reading paths in both directions with a growing value tag, and an optional draggable probe on either axis.
4. **Table-to-plot flight** (math-s12-a01's `StudioCandidateTable` option): used in l02 and l04.
5. **Gradient stepper** (small; l02): from a start point, "across 1, up m" (or down) steps in amber leaving dots, then a ruler sweep.
6. **Sliding step triangle** (l01): the straight-line case of `StudioTangentTriangle` with a fixed run of 1 that glides along a line, then stretches to two given points. The builder confirms the case exists or adds it as a prop.
7. Otherwise existing parts: `ModelCard`, `ModelSlot`, `ParameterSlider`, `FunctionSimulator`, `FunctionRider`, `LiveReadoutBoard`, `StudioDomainStrip` or `AxisShadow`, `RegionLabels`, `OutcomeSort` (check appearance), `ScreenApp` (graph mode), `IntervalPicture`, `FillDial` (check appearance), the g01 board parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Plates (Codex, objects only, no people; each briefed in its design): `ms11s-aquarium-v1.png` (l01), `ms11s-coffee-pods-v1.png` (l03), `ms11s-hire-boat-v1.png` (l04; **painted before the l03 build**, ruling 17), `ms11s-ice-skates-v1.png` (l05; **painted before the l04 build**), `ms11s-frozen-yoghurt-v1.png` (l07). Reused and opened on 19 Nov 2026: `ma11-taxi-side-v1.png`, `ma11-share-ebike-v1.png`, `ma11-water-tank-v1.png`, `ma11-produce-scale-v1.png`, `ma12-apple-v1.png`, `ma12-travel-suitcase-v1.png`, `ma12-country-road-v1.png`, `ma12-calculator-v1.png`. Opened and not used: `ma11-taxi-meter-v1.png` (baked dark surround), `ma12-apple-crate-v1.png` (baked dark glow), `ma11-kayak-jetty-v1.png` and `ma11-yacht-side-v1.png` (no fuel story), `ma11-cone-choc-vanilla-v1.png` (a cone, not a cup by weight).

## 7. Site corrections

No new finding. Applied: MS-01 (l06, l07: m for mass, never k for kilograms); MS-81 (l02's graphing-app scene fills the gap; l04 teaches interpolation and extrapolation from the syllabus); MS-82 (y = mx + c only; l03's "interpret m and b" becomes "the gradient and the intercept"); MS-83 (the site's "Module 1 · L9 of 13" labels are not shown anywhere). No site error is taught.

## 8. Words Year 12 relies on (checked against the Year 12 designs)

- **l01:** "gradient = rise ÷ run", "steeper means faster" (a01, b04a, r12a, a08).
- **l03:** "the y-intercept is the vertical intercept and the gradient is the rate of change", said almost word for word (a03, a04a, i01, i09); one falling model (i09).
- **l04:** "interpolation = between the data", "extrapolation = beyond it" (math-s12-a07's chips, exactly); "inside" and "outside" tags and "not automatically wrong, just less reliable" (math-s12-b07); the two-slot limitation card (a07).
- **l05:** a04b's vocabulary for spreadsheet, cell, formula and fill down, and its "edit one number, fill down again" move; no absolute references.
- **l06:** "varies directly" in words, and "double one, the other doubles" (math-s12-a12's recall strip, exactly).
- **l07:** one line from the origin with a reading path as the final graph style (a12 contrasts y = k/x with it).

## 9. Next

Student learning reviews for l01 to l07 (trace each from its stated entry knowledge only), then the Codex maths checks and error checks, then the Revision 2 resolutions, then voicing on the Google voice (Year 11, ruling of 3 Nov) and builds on the studio kit to grade A. Plates: the hire boat and ice skates are needed one video early (l03 and l04 builds).
