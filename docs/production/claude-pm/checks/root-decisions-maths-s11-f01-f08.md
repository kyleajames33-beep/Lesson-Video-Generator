# Root decisions needed: Maths Standard Year 11, f01 to f08 (first-revision designs)

19 November 2026. Design author's handover to root for `lessons/math-s11-f01.md`, `f02.md`, `f03a.md`, `f03b.md`, `f04a.md`, `f04b.md`, `f05.md`, `f06.md`, `f07.md` and `f08.md` (Formulas and equations), Revision 1 each. Year 11 is one course for Standard 1 and Standard 2. Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s11-f01.md` to `f08.md`, `programme/maths-standard-route-inputs-8.json`, `checks/maths-standard-kit-needs-s11-f-l.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 91, binding; 4, 88 to 91 in particular), `site-corrections-maths-standard.md` (MS-77 to MS-81), the format of `lessons/math-s12-a01.md`, `a07.md` and `r10.md` (Revision 2) and their resolution logs, `maths-visual-standard.md` and `AGENTS.md`.

Section 1 (f08's final frame, which l01 opens on) was written first, before the designs, so the l01 author could use it; it is unchanged below except that its spoken text now quotes f08 scene 12 in full.

Every value was recalculated with SymPy 1.14 (scratchpad `s11f/verify.py`, run with `python -I`; 201 checks across the ten designs, 0 failures; output `s11f/verify-output.txt`). All pack values and all site values used were reproduced. Narration was counted by script (scratchpad `s11f/count.py`, the method of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632): the sum of the scene strings. The same script checks that every bold cue is quoted in its scene's Visual in spoken order (no misses) and that no design contains an em dash (none). The syllabus quotes in each design's list and each description match the route-inputs JSON exactly, and each title's stated length matches (scratchpad `s11f/meta.py`). Seconds are speech at 13.3 characters a second plus countdowns, holds, settling and the 45 s notes scene; measure on the Google voice.

## 1. f08's final frame (math-s11-l01 opens on it): fixed

This is the last frame of the Formulas and equations strand. It is held about 2 s at the end of f08's handoff scene (scene 12) and returned to silently after the key notes (1 s cross-fade). The l01 designer opens on it exactly. All text above y = 950 (the bottom 12 per cent stays clear). 1920 × 1080, paper ground `#f6f1e7`.

- **Header strip:** "MATHEMATICS STANDARD" only (no strand name, because the frame bridges two strands; l01 adds "· LINEAR RELATIONSHIPS" when it starts).
- **Plate:** the new painted plate `ms11s-pancake-stack-v1.png` (a plate of pancakes; briefed in f07, painted one video early under ruling 17) small at the top left, about 300 px wide, top edge at y ≈ 110.
- **Left panel (x ≈ 120 to 900), "pancake mix order":**
  - a small coded spreadsheet (`SpreadsheetGrid`, about 760 × 330 px, cell text 30 px) under the plate, with the formula bar showing "=A2*4+10" (B2 selected, ringed blue) and two columns: A "bags" (rows 2 to 8: 0, 1, 2, 3, 4, 5, 6) and B "total ($)" (10, 14, 18, 22, 26, 30, 34);
  - under it a coded plot (about 760 × 380 px): "bags" across, 0 to 6 (grid every bag), "total ($)" up, 0 to 40 (grid every $10), the seven points (0, 10), (1, 14), (2, 18), (3, 22), (4, 26), (5, 30), (6, 34) as blue dots with a ruled blue line through them; the line meets the vertical axis at (0, 10);
  - hand tag (34 px, blue) under the plot: "a straight line".
- **Right panel (x ≈ 1000 to 1800), "stopping distance":** a coded plot (about 800 × 560 px): "speed (km/h)" across, 40 to 110 (grid every 10), "stopping distance (m)" up, 0 to 160 (grid every 20), the eight capstone points (40, 28), (50, 40), (60, 54), (70, 70), (80, 88), (90, 108), (100, 130), (110, 154) as amber dots joined by a dotted amber curve that bends upward; hand tag (34 px, amber) "a curve".
- **Chips (all above y = 950):** "What two numbers describe a straight line?" (40 px, top centre, y ≈ 60 to 110, beside the header), "Next: gradient and y-intercept" (36 px, bottom right) and "?" (bottom right). No gradient or intercept is labelled or named on the plot itself, and no number is shown for either.
- **Spoken (f08 scene 12, in full):** "So a spreadsheet turns one formula into a whole table. Here's one more, the pancake mix total for zero to six bags, at four dollars a bag plus ten dollars delivery. Plot a column against its inputs, and you get a picture. The pancake mix totals, ten dollars, fourteen, eighteen and so on, sit in a perfectly straight line. The stopping distances bend upward. A straight line turns out to need just two numbers to describe it completely. Which two? That's next."
- **What l01 can rely on:** the student has just heard the pancake mix rule "$4 a bag plus $10 delivery" (f08 scene 12; the order sheet in f08's scenes 1 to 4 uses the site's 12 bags at $4 plus $10 delivery, $58), so l01 may read c = 10 (where the line starts, the delivery fee) and m = 4 (up $4 for each bag) from this frame as a warm-up before its own anchor, or simply answer the chip and move on. y = mx + c throughout (ruling 91). The capstone curve is f04b's site model D = 0.01v² + 0.3v, filled down in f08 scene 6.
- **Plate timing:** `ms11s-pancake-stack-v1.png` is first seen in f07's final frame, so it is painted before the f07 build.

## 2. Summary (Revision 1)

| Design | Characters | About (s, with holds) | Scenes | Anchor and result | New plate briefed here | Open question |
| --- | --- | --- | --- | --- | --- | --- |
| f01 substitution (course opener) | 5,362 | 488 | 13 | a courier, $8 + $1.50/km: 12 km costs $26 (site `we-1`); deck 26 m; (−4)² + 3(−4) = 4; a pizza's area on the calculator | none (van, deck, pizza, calculator reused) | a course welcome line, or the cold open as designed |
| f02 word problems | 5,017 | 462 | 12 | the $41 bill: 8 + 1.50k = 41, k = 22; site tickets t = 4; savings w = 8; car wash 43.67 → 44 cars | `ms11s-car-wash-bucket-v1.png` | equations with brackets left out |
| f03a rearranging, letter underneath | 4,892 | 455 | 13 | four bills: k = (C − 8) ÷ 1.5 gives 22, 12, 30, 36; s = d/t; r = C/(2π); t = d/s | `ms11s-picture-frame-v1.png` | the π ≈ 3.14 check |
| f03b y = ax² + c | 4,665 | 438 | 13 | framing glass C = 0.05s² + 12, $32: s = ±20, keep 20 cm; pizza backwards r ≈ 12.6 cm | `ms11s-p-plate-car-v1.png` | no site link (MS-81); title length |
| f04a speed, distance, time | 4,781 | 448 | 13 | Sydney to Canberra, about 285 km in 3 h 10 min: 90 km/h (not 91.9); van 2 h 15 min; kayak 3.6 km/h = 1 m/s | none | attempt 1 previews f04b |
| f04b stopping distance | 4,782 | 451 | 13 | a red light at 60 km/h: 25 + 36 = 61 m; at 120 km/h 194 m; the site's model 40 m at 50 km/h | `ms11s-breath-test-sign-v1.png` | two reaction times (1.5 s and the model's 1.08 s) |
| f05 BAC formulas | 4,747 | 444 | 13 | invented man 80 kg, 4 drinks, 3 h: ≈ 0.032; woman 60 kg, 3, 2 h: ≈ 0.045 | none | footer in every teaching scene |
| f06 time to zero, limitations | 4,624 | 439 | 13 | 0.0321691 ÷ 0.015 = 2 h 9 min (rounded up); 0.09 at midnight still above 0 at 5:30 am; four two-part limitations | `ms11s-first-aid-kit-v1.png`, `ms11s-medicine-a-bottle-v1.png` | title length; "only time does" wording |
| f07 dosage formulas | 4,798 | 452 | 14 | invented Medicine A, 500 mg: Young's 8 y 200 mg; Clark's 25 kg 178.6 mg; Fried's 9 months 30 mg; adult 15 mg/kg × 68 = 1,020 mg | `ms11s-pancake-stack-v1.png` | reference-sheet forms and age ranges (Codex, before narration) |
| f08 spreadsheets | 4,730 | 447 | 13 | pancake orders =B2*C2+D2: 58, 55, 36, 44; edit to 15 bags gives 70; the stopping table 28 to 154 m | none | "star" spoken; the final frame's line for l01 |

All ten are under 570 s with holds (the largest is f01 at about 488 s, 82 s margin). Every feedback is 30 s of speech or less (the longest: f02 feedback 2, 385 characters, about 29 s). The longest single scenes are f03b scene 3 (870 characters, about 65 s), f02 scene 3 (848), f01 scene 3 (831) and f03a scene 3 (827): each is one g01 board with its crossed slip. f01 and f02 are inside the 5,000 to 7,000 guide; the other eight sit between 4,624 and 4,892 characters, like r08, r09 and t09 (ruling 55): each is one main question at Standard pace, four of them halves of ruling 88's splits, with no padding. Three designs (f03a, f04a, f06) gained one teaching scene each while drafting so that their length comes from content: f03a the site's `we-3` done both ways (rearrange first or substitute first), f04a the distance form with a minutes change (an e-bike, 45 min at 24 km/h), f06 a weak and a strong written limitation.

## 3. Joins (each final frame exactly; the next video opens on it)

All frames 1920 × 1080; text above y = 950. Each is held about 2 s at the end of the handoff scene and returned to silently after the key notes (1 s cross-fade). Header "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS" unless stated.

- **(none) → f01:** cold open on the van and the quote card (first video of the course; no title card).
- **f01 → f02:** the van `ma12-delivery-van-v1.png` at the left (about 900 px); the formula card "C = 8 + 1.50k" (C amber, 8 violet, 1.50 teal, k blue), 52 px; the docket "Bill: $41" (amber); "k = ?" (blue) with an empty slot; grey chip "f01: need an output? substitute"; chips "Now the output is known. Find the input?", "Next", "?". No working.
- **f02 → f03a:** the van (about 760 px); the formula card at the top right; four dockets "$41 → k = 22" (grey), "$26 → k = ?", "$53 → k = ?", "$62 → k = ?"; chips "Solve a new equation every time? Or rearrange once?", "Next", "?". No rearranged formula.
- **f03a → f03b:** `ms11s-picture-frame-v1.png` (about 700 px) at the left; "C = 0.05s² + 12" (C amber, 0.05 teal, s blue, 12 violet) with labels "C: cost of the glass ($)", "s: side length (cm)"; the docket "Quote: $32" and "s = ?"; the "²" ringed; chips "How do we undo a square?", "Next", "?".
- **f03b → f04a:** `ma12-country-road-v1.png` across the lower half; `ms11s-p-plate-car-v1.png` (about 640 px) on it facing right with a coded red "P"; `ma11-road-sign-post-v1.png` (about 460 px) with "Canberra 285 km" and the grey chip "about 285 km"; the trip clock chip "3 h 10 min"; chips "Average speed?", "3 h 10 min = 3.10 h?", "Next", "?". No speed.
- **f04a → f04b:** `ma11-city-road-strip-v1.png` across the lower third; the P-plate car (about 560 px) with "60 km/h"; `ma11-traffic-light-v1.png` (about 520 px) with its red lens ringed (no glow); `ma12-stopwatch-v1.png` (about 300 px) with a coded hand at 1.5 s and "≈ 1.5 s to react"; "60 km/h ≈ 16.7 m every second"; chips "How far before the car stops?", "Next", "?". No distance on the road.
- **f04b → f05:** the city road, the car at 60 km/h and the stopping strip with its teal reaction part stretched ("2.5 s, slower reaction"); `ms11s-breath-test-sign-v1.png` (about 520 px) with coded "Random breath testing"; the readout "BAC 0.00" (green) and "L and P plates: zero"; chips "What is BAC, and how is it estimated?", "Next", "?". No formula.
- **f05 → f06:** the breath-test sign (about 440 px) and the car badge at the left; a plot "hours after drinking stops" 0 to 4, "estimated BAC" 0 to 0.04, the green zero line "L and P plates: 0", the amber point (0, 0.032) "invented example: 0.032", a dashed arrow ending in "?"; chips "When does it reach 0?", "Next", "?"; the footer "Estimate only. Never a guide to how much is safe to drink. L and P plates: zero." No formula or time.
- **f06 → f07:** `ms11s-first-aid-kit-v1.png` (about 760 px) at the left; `ms11s-medicine-a-bottle-v1.png` (about 460 px tall) with coded "Medicine A" and "invented"; the card "Adult dose: 500 mg (invented)" and "A child's dose?"; the footer "Invented example. Your doctor or pharmacist sets real doses."; chips "Next", "?". No formula.
- **f07 → f08:** `ms11s-pancake-stack-v1.png` (about 620 px) at the left; the hand-font card "Pancake breakfast: supply orders" with "Pancake mix: 12 bags × $4 + $10 delivery", "Maple syrup: 6 bottles × $7.50 + $10 delivery", "Butter: 8 blocks × $3.25 + $10 delivery", "Paper plates: 5 packs × $6.80 + $10 delivery", each "= ?"; chips "Four orders. One rule?", "Next", "?". No totals.
- **f08 → l01:** section 1.

## 4. Departures from the packs (each recorded in its design)

1. **f01:** the pack's three anchors (roast, strike rate, trampoline) are not used; the non-linear case is the existing pizza plate (A = πr², with the 20 cm against 30 cm surprise), so f01 needs no new plate. The site's `we-2` rectangle is drawn on the existing timber deck plate.
2. **f02:** one main worked example (the site's `we-1`), with f01's $41 bill solved on the balance first; the car wash (pack anchor 2) carries the rounding; equations with brackets are left out (open decision).
3. **f03a:** an extra scene does the site's `we-3` both ways ("rearrange first or substitute first"), which is the site's Q3 point and lesson04's card 02; attempts are original (P = 2l + 2w for l; t = 240/s for s).
4. **f03b:** whole video from the syllabus (MS-81); the pack's framing-shop anchor teaches, the pack's two questions are the attempts; f01's pizza returns for c = 0.
5. **f04a:** attempt 1 is original (90 km/h to m/s, then 2 s), previewing f04b; a share e-bike (existing plate) carries the distance form; the pack's paddleboard becomes a kayak (existing plate).
6. **f04b:** the worked example uses a 1.5 s reaction (NSW guidance, to confirm) and braking values from 0.01v² labelled "example values (dry road)", so the table agrees with the site's model; the site's model is then taught as the same two parts (0.3v reaction, about 1.08 s; 0.01v² braking); attempt 2 is the site's drill (30 and 60 km/h). MS-78's definition is never used.
7. **f05:** a footer carries ruling 4's wording in scenes 3 to 11 and the notes; drinks are numbered tokens; the "100 mL" picture is an abstract unit diagram, not a measuring jug.
8. **f06:** attempt 2 asks for one limitation, not two (brief feedback); its crossed slip is rounding down, because the weak limitation ("it's not accurate") is taught in its own scene.
9. **f07:** the pack's optional liquid step (mg to mL) is left out for pace; the child is a label card, never a figure.
10. **f08:** the site's `we-1` numbers become the pancake-mix order (the pack's canteen avoided); three invented orders fill the sheet; the capstone uses the site's model (f04b), and its final frame adds the pancake-mix line for l01 (section 1).

## 5. Sources to confirm (Codex maths check)

- **f04a:** "about 285 km" Sydney to Canberra by road (approximate; labelled).
- **f04b:** a reaction time of "about 1.5 seconds" in NSW road-safety guidance (nsw.gov.au "Safe stopping distance"; NSW Road User Handbook), with the date read; braking values labelled "example values (dry road)"; the site's model presented as a model.
- **f05:** nsw.gov.au "Alcohol limits, drugs and medicines" (zero for L, P1, P2; under 0.05 full licence; read 19 Nov 2026, ruling 89); health.gov.au "Standard drinks guide" (10 g; containers show standard drinks); a NSW source for "grams of alcohol in 100 mL of blood".
- **f06:** the two NSW sentences quoted word for word ("It's impossible for you to estimate your own BAC, even if you think you know how many drinks you've had." and "The only way to be sure you're under the limit is to not drink alcohol at all."); that "only time lowers BAC" agrees with NSW or health guidance (the narration says "in this model").
- **f07 (before narration, ruling 89):** the three formula forms and any age ranges on the current 2024 Mathematics Standard reference sheet.

## 6. Site corrections applied (never taught)

MS-77 (lesson08 `we-4`'s 0.1 explanation) is not used anywhere. MS-78 (lesson07's "stopping distance = braking distance") is replaced by the syllabus sum and named as a slip in f04b scene 2. MS-79 (lesson02's "undone last") is replaced by "outside step first" (f02, f03a). MS-80 item 1 (lesson04's garbled trap and "left side") is avoided ("on one side", f03a); item 2 (lesson06 `we-3`'s "$4 × 8") is not used (f08); item 3 (lesson08's muddled guide) is avoided (f01 uses only card 02's "Need an output? Substitute."); item 4 (a "$" inside an equation) is avoided (f02). MS-81's three gaps are taught from the syllabus (f03b's y = ax² + c; f04a's km/h to m/s; f04b's stopping-distance sum). No new site error was found while designing.

## 7. Kit (no source changed)

Requirements recorded in each design's "Studio kit use and additions", matching `maths-standard-kit-needs-s11-f-l.md`:
- **SpreadsheetGrid** (ruling 90): shared part, built before f08 (also l05 and Year 12 a04b); Year 11 needs `^`, `/`, an in-cell bar column and the edit ripple.
- **StoppingDistanceStrip** (f04b; callbacks in f05's opening and Year 12 r10, r12): two-part bar, speed slider with a linked table, reaction and road toggles.
- **FormulaSlots** (f01; reused in f02, f03a, f03b, f05, f07): a value dropping into a bracketed slot, then evaluation in visible beats, with a multi-value readout; a bracket-shield option for (−4)² against −4².
- **± fork on `RootExtract`** (f03b).
- **`FunctionMachine` reverse mode** (f03a), if it lacks one.
- **Footer style** (f05, f06, f07): a 30 px caption above y = 950.

## 8. Plates

New `ms11s-` plates, each briefed in the design whose final frame first shows it (ruling 17), objects only, no people:

| Plate | Briefed in | First seen | Used in |
| --- | --- | --- | --- |
| `ms11s-car-wash-bucket-v1.png` | f02 | f02 scene 5 | f02 |
| `ms11s-picture-frame-v1.png` | f03a | f03a final frame | f03a, f03b |
| `ms11s-p-plate-car-v1.png` | f03b | f03b final frame | f03b to f06, f08 |
| `ms11s-breath-test-sign-v1.png` | f04b | f04b final frame | f04b, f05, f06 |
| `ms11s-first-aid-kit-v1.png` | f06 | f06 final frame | f06, f07 |
| `ms11s-medicine-a-bottle-v1.png` | f06 | f06 final frame | f06, f07 |
| `ms11s-pancake-stack-v1.png` | f07 | f07 final frame | f07, f08, l01's opening |

Reused (each opened on 19 Nov 2026): `ma12-delivery-van`, `ma12-timber-deck-top`, `ma11-pizza-top`, `ma12-calculator`, `ma12-fundraiser-board` (tube painted flat teal; the fill is coded), `ma11-road-sign-post`, `ma11-drop-leaf-table-top`, `ma12-country-road`, `ma11-wall-clock`, `ma11-kayak-jetty`, `ma11-share-ebike`, `ma11-city-road-strip`, `ma11-traffic-light`, `ma12-stopwatch`, `ma11-alarm-clock` (badge only: painted hands). Looked at and not used: `ma11-delivery-bag` (reads as meal delivery), `ma11-garden-bed` (triangular), `ma11-road-side-strip` (too thin for a car), `ma12-used-hatchback` (the depreciation car of a06, a07, a13), `ms12-driving-school-car` (an L-plate square and a roof sign).

## 9. For root

1. **f01's opening (open decision 1).** Cold open on the courier with the 12 km answer in the first 12 s, no welcome line, as the owner's first-video rule asks. Confirm, or name a one-line course welcome.
2. **Lengths under 5,000 characters (eight designs).** f03a to f08 sit between 4,624 and 4,892 characters, each with a stated reason and no padding (ruling 55's pattern). Confirm, or name a design to extend.
3. **f05 to f07 have no site lesson (ruling 3).** Their descriptions carry no "Full lesson" link (f05 and f06 link the NSW alcohol-limits page instead); f03b also has none (MS-81). f04a links lesson04 and f04b links lesson07 (open decisions there). Confirm the links.
4. **f04b's two reaction times (open decision 1).** 1.5 s in the worked example and the site model's built-in "just over a second". Confirm, or drop the model's reaction-time phrase.
5. **f05's footer (open decision 1).** Ruling 4's wording as a footer in every teaching scene; root may prefer answer frames only.
6. **f07's formula forms (ruling 89).** Narration waits for Codex's reference-sheet check; any difference changes scenes 2 to 5, key notes 2 to 4 and attempt 2 (b).
7. **f08's final frame (section 1).** Fixed for l01; if the l01 designer wants another line, section 1 and f08 scene 12 change together.
8. **Titles over 80 characters.** f06 (86) and f07 (81) give shorter alternatives (ruling 37's pattern): "BAC: Time to Zero and Limitations | Year 11 Maths Standard" (58) and "Medication Dosage Formulas | Year 11 Maths Standard" (51).
9. **Equations with brackets (f02 open decision 1).** Left out for pace; one row (about 12 s) if root wants them.
10. **Plates.** Seven new `ms11s-` plates (section 8), to be briefed to Codex in one batch after the learning reviews.

Next: independent student learning reviews of all ten designs, Codex's reference-sheet check for f07 (before narration) and the maths checks with the sources in section 5; then voicing and builds to grade A (f08 after `SpreadsheetGrid` exists).
