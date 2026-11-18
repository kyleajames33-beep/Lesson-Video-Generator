# Root decisions needed: Maths Standard Year 12, z01 to z06 (first-revision designs)

19 November 2026. Design author's handover to root for `lessons/math-s12-z01.md` to `z06.md` (Revision 1 each), The normal distribution, **Standard 2 only** (ruling 68). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-z01.md` to `z06.md`, `programme/maths-standard-route-inputs-7.json`, `checks/maths-standard-kit-needs-z-c-f.md`, the existing `src/explainer/math/studio/normal-parts.tsx` (and `dist-parts.tsx`, `spread-parts.tsx`, `a11-data-parts.tsx`, `roles.tsx`), `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 74, binding), `site-corrections-maths-standard.md` (MS-47, MS-56, MS-57, MS-59), the format of `lessons/math-s12-r12a.md`, `t05.md` and `i09.md` (Revision 2) with the t-strand resolution logs, the Year 12 Advanced designs `math-a12-s09.md` to `s12.md` (visual approach only), `maths-visual-standard.md`, `AGENTS.md`, and, for the join, `lessons/math-s12-p08.md` scene 12. z02 to z06 were written first; p08's design appeared on disk while z01 was being finished, and z01 was then matched to p08's scene 12 (section 1).

Every value was recalculated with exact fractions and `statistics` in Python 3.14 (scratchpad `z/verify.py` and `z/search.py`, run with `python -I`, 0 failures). Narration was counted by script (scratchpad `z/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632). Every bold cue is quoted in its scene's Visual in spoken order (`z/cues.py`, no misses), the syllabus quotes in each description match the route-inputs JSON exactly (checked by script), and no design contains an em dash. Seconds are speech at 13.3 characters a second plus countdowns, holds, settling and the 45 s notes scene; measure on the Google voice.

## Revision 2 (19 Nov 2026): learning review resolved

All six designs are at Revision 2 after the independent learning review (`m-s12-z01-z06-learning-review-summary.md` and the per-design files), resolved under root's binding decisions of 19 Nov. Resolution log: `m-s12-z01-z06-learning-review-resolution.md`. Recounted by `work/brief-resolve-standard-z/count.py` (reproduces e08's 5,632); changed numbers rechecked by `work/brief-resolve-standard-z/verify.py` (`python -I`, 0 failures). The Revision 1 text below is kept for the record; where it differs, this section and the designs govern.

| Design | Characters (Rev 1 → Rev 2) | About (s, with holds) | What changed |
| --- | --- | --- | --- |
| z01 | 5,069 → 5,477 | 530 | the fold reason for mean = median = mode; heavier and lighter pushes; **1,000 imagined loaves** (not 2,000), seeded so z04 counts 683, 954, 997; feedback 1 slip "(b) negatively skewed"; feedback 2 slip "(a) Farm A: its curve is higher" |
| z02 | 5,057 → 5,499 | 524 | σ = 20 against σ = 1 ghost bells (why the spread is the ruler); A2 (b) says "using this mean and standard deviation"; 704 g worked aloud; "three fifths" |
| z03 | 5,126 → 5,307 | 504 | the times version of the sentence frame in scene 6; key note 5 "saying which way is better"; "relative to her class" in plain words; the long jump's subtraction spoken |
| z04 | 5,079 → 5,348 | 515 | z01's 1,000 imagined loaves counted inside the bands (683, 954, 997); "same bell, slid and stretched"; "+27 (both sides)"; thin-piece labels outside the curve |
| z05 | 5,141 → 5,160 | 505 | **600 Christmas trees at a tree farm** replace the student heights (every number kept); area linked to z01's columns; scene 4 shows only each sum's pieces; the 400-loaf day lands on **11**, not 10; scene 4's "above" against "away" sentences trimmed |
| z06 | 5,033 → 5,343 | 520 | one unusual loaf is set aside and **weighed again** (the oven is checked only for an unusual batch); "fewer than 2.5% that heavy or heavier"; **five ordinary days (18, 23, 16, 21, 25)** before yesterday's 46; "z from −2 to 2" at the gate |

Joins: unchanged. z01 still opens on p08's final frame exactly (p08's decisions file section 8 is on disk and matches, so section 1's re-check is done), and z06's final frame (section 3, the "Morning jobs" board and its lead-in) is unchanged, so c01a opens on it. Every other join in section 2 is unchanged.

Items below that change: section 4 item 2 (2,000 imagined loaves → 1,000, root's decision 2); section 4 item 6 (z05's "above" against "away from" sentences are trimmed in Revision 2; z06 carries both tails); section 5 (no example now concerns people: z05's worked example is Christmas trees); section 7 (z04 adds a dot-strip counter to `BandSlider`; z05's gate-and-tray check lands on 11; z06's batch counter shows five earlier days as ticks); section 9 items 1, 2, 4 and 5 are closed (ruling 75 and root's decisions 1 to 3); item 3 is confirmed by ruling 75 and stays provisional only on c01a's side.

## Summary (Revision 1)

| Design | Characters | About (s, with holds) | Scenes | Course | Anchor | New plate briefed here | Open question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| z01 the bell; mean, median, mode | 5,069 | 496 | 13 | S2 | 200 loaves labelled 700 g: mean 710.05 g, median 710 g, mode 710 g; taps 321, 300, 250 ms | none (the loaf is p08's brief) | the loaves' frequencies changed so σ = 5 g; p08's decisions file section 8 not yet on disk |
| z02 the z-score | 5,057 | 488 | 14 | S2 | the 718 g loaf: 8 g above, 1.6 steps | none | the worked example set as a test mark |
| z03 comparing results | 5,126 | 488 | 14 | S2 | Ava: Maths 1.0, English 1.4 | none | an original swim time added; the site's SA 2 left out |
| z04 the empirical rule | 5,079 | 492 | 13 | S2 | the loaves' bands: 705 to 715, 700 to 720, 695 to 725 g | none | A1 the bowler, not the pack's loaves |
| z05 probability by shading | 5,141 | 502 | 13 | S2 | a loaf under its 700 g label: z = −2, 2.5%, about 10 of 400 | `ms12-bread-rack-v1.png` | no split (ruling 70); A1's demand changed; the heights example kept as numbers |
| z06 unusual results | 5,033 | 493 | 13 | S2 | the 723 g loaf: z = 2.6, unusual, check the oven | `ms12-bakery-cafe-counter-v1.png` (c01a's opening) | the final frame for the c01a designer |

All six are under 570 s with holds and inside 5,000 to 7,000 characters. Every feedback is 30 s of speech or less (the longest: z04 feedback 2, 395 characters; z05 feedback 2, 393; z06 feedback 1, 398; about 30 s each). The longest single scenes are z05 scene 5 (948 characters, about 71 s; the site's two-part heights question on one board, with named trims elsewhere), z06 scene 5 (792; three bottles on one board) and z02 scene 6 (747; the five loaves' mean 0 and standard deviation 1). Each is one board or one method stage. z05 does not need the pack's z05a and z05b split (ruling 70).

The strand's fixed colour roles (all six): the bell teal; data values and their dots blue; μ, σ marks, σ-steps and z-scores violet; shaded areas, bands, pieces and probabilities amber (pale amber fill); answer green; mistake red, crossed slips only. Header strip "MATHEMATICS STANDARD · THE NORMAL DISTRIBUTION" (z06's final frame drops the strand name, section 3).

## 1. p08's final frame (z01 opens on it)

Read from `lessons/math-s12-p08.md` Revision 1, scene 12 (19 Nov 2026); p08's decisions file (`root-decisions-maths-s12-p01-p08.md`, section 8) was not on disk when z01 was finished. If section 8 differs from scene 12, z01 follows section 8. As written in p08:

- Split by a thin grey rule at about x = 960; panel tags "Standard 2" (left) and "Standard 1" (right), 30 px grey.
- **Left panel:** the loaf `ms12-bread-loaf-v1.png` (about 300 px) on the produce scale `ma11-produce-scale-v1.png` (about 420 px wide), its screen coded "--- g"; a coded quality sheet "Quality check: 200 loaves, labelled 700 g"; a coded histogram with axes "mass (g)" (690 to 730) and "number of loaves", the first 12 loaves dropped as small blocks into their classes, counter "weighed: 12 of 200"; chip "what shape is this?"; label "Standard 2 next: the normal distribution"; chip "Next".
- **Right panel:** a coded playlist card "Year 12 Maths Standard playlist" with six ticked strand lines and "revise any video, any time"; grey chip "Standard 1: Year 12 course complete"; label "Standard 1: well done"; chip "?".
- **z01 scene 1:** the right panel, the rule, the panel tags, the "Standard 2 next" label and "Next" fade; the left panel grows to full width at one uniform scale; the scale's "--- g" becomes "712 g" and the drop continues from 12 to 200.
- **For p08's author:** the 12 blocks must fall in classes consistent with z01's frequencies (695 to 725 g: 1, 9, 50, 81, 47, 10, 2); suggested first 12: 700, 705, 705, 710, 710, 710, 710, 710, 715, 715, 715, 720 (z01's first new reading is 712 g, shown in the 710 class). The histogram's classes are centred on 695, 700, …, 725 within the 690 to 730 axis.
- **Plates:** p08 briefs the loaf (its open decision 1); z01 does not brief it again. p08's loaf has no bag or label, so the strand never paints "700 g" on the loaf; z04 to z06 show a coded tag "label: 700 g" beside it.

## 2. Joins (each final frame exactly; the next video opens on it)

All frames 1920 × 1080; text above y = 950; the bench scale is `ma11-produce-scale-v1.png` and the loaf `ms12-bread-loaf-v1.png` (p08's brief: unbagged, no label). Each is held about 2 s at the end of the handoff scene and returned to silently after the key notes (1 s cross-fade).

- **p08 → z01:** section 1.
- **z01 → z02:** the bench scale (about 420 px wide, left) with the loaf (about 300 px) on its tray and the coded display "718 g" (blue, 52 px); the loaf bell (teal, about 1,200 px) on a gram axis 690 to 730 with the violet μ triangle and line at 710 and violet dashed marks at 705 and 715; a blue dot at 718 on the axis; chips "mean 710 g", "standard deviation 5 g", "718 g: how far above the usual?"; chips "Next" and "?". No z-score shown. z02 scene 1 opens on it.
- **z02 → z03:** two plain report cards side by side (about 700 × 420 px each), each headed "Ava" (36 px); left "Maths: 72" (blue, 64 px) over "class mean 64, standard deviation 8" (violet, 36 px); right "English: 77" over "class mean 70, standard deviation 5"; chip "which result is better?" (40 px); chips "Next" and "?". No z-score shown.
- **z03 → z04:** the bench scale (about 420 px wide, left) with the loaf (about 300 px) on its tray and a blank display; the loaf bell (teal, about 1,200 px) on a gram axis 690 to 730 with the violet μ line at 710 and violet dashed marks at 695, 700, 705, 715, 720, 725; the band 705 to 715 outlined in dashed amber, not filled; chips "mean 710 g", "standard deviation 5 g", "what fraction of loaves lie within one standard deviation?"; chips "Next" and "?". No percentage shown.
- **z04 → z05:** the bench scale (about 420 px wide, left) with the loaf (about 300 px) and, beside it on the tray, a coded tag "label: 700 g" (36 px), blank display; the loaf bell (teal, about 1,200 px) on a gram axis 690 to 730 with the violet μ line at 710 and violet dashed marks at 695, 700, 705, 715, 720, 725; a dashed red line at 700 labelled "label: 700 g" (32 px); the tail left of 700 filled amber with no percentage; chip "what's the chance a loaf is under its 700 g label?"; chips "Next" and "?". No band outline and no "mean" or "standard deviation" chips (the narration states them).
- **z05 → z06:** the bench scale with the loaf and its coded tag "label: 700 g", the display "723 g" (blue) with a soft red flash ring; the loaf bell on the gram axis 690 to 730 with the violet μ line at 710 and violet dashed marks at 695 to 725; a blue dot at 723 on the axis; no shading and no red 700 line; chips "mean 710 g", "standard deviation 5 g", "is this loaf a problem?"; chips "Next" and "?". No z-score shown.
- **z06 → c01a:** section 3.

## 3. z06's final frame (c01a opens on it)

z06 scene 12, held about 2 s, then returned to silently after the notes (scene 13 ends on it, cross-fade 1 s). 1920 × 1080. Exactly:

- **Header strip:** "MATHEMATICS STANDARD" (the strand name dropped, so the frame serves critical path analysis).
- **Plate:** `ms12-bakery-cafe-counter-v1.png` (briefed in z06; the inside of the bakery-café before opening: a timber counter, an empty display case, a wall shelf of about eight loaves drawn like `ms12-bread-loaf-v1.png`, a switched-off espresso machine, a dawn window, a blank chalkboard on the back wall at the top left), about 1,150 px wide, left and centre; no people.
- **Chalkboard (coded, chalk white, 32 px)** inside the plate's blank board: heading "Morning jobs"; five lines in this order: "switch on the oven: 10 min", "mix the muffin batter: 15 min", "bake the muffins: 25 min", "heat the pies: 20 min", "set out the display: 10 min". No letters, no predecessors, no arrows, no total.
- **Chips:** a coded clock chip "6:00 am" (40 px) near the window; "what order, and how soon can we open?" (40 px, top right); grey "Normal distribution: done"; "Next" and "?" at the bottom right, above y = 950.
- **Spoken lead-in (z06 scene 12):** "That's the normal distribution done. Back at the bakery, it's six in the morning. The loaves are checked and on the shelf, and the café has jobs to do before it opens. Switch on the oven, mix the muffin batter, bake the muffins, heat the pies and set out the display. Some jobs have to wait for others. What order works, and how soon can we open?"
- **For the c01a author:** (1) the times are the c01 pack's café (A oven 10; B batter 15; C muffins 25 after A and B; D pies 20 after A; E display 10 after C and D; c02's finish 50 min); (2) c01a may add the letters A to E or a predecessor column in its own first scene, as its first change; (3) if c01a chooses another opening, only z06 scene 12 and this section change; (4) the plate is painted before the z06 build (ruling 17), so c01a's design should not brief it again.

## 4. Departures from the packs (each recorded in its design)

1. **z01's loaves:** frequencies 1, 9, 50, 81, 47, 10, 2 (mean 710.05 g, median 710, mode 710, σ 4.9997 g) replace the pack's 3, 15, 40, 84, 42, 13, 3 (mean 709.95 g, σ 5.57 g), so the 200 loaves have the σ of 5 g that z02 to z06 use. The three centres still differ slightly.
2. **z01:** the bell is shown from 2,000 imagined loaves in 1 g columns (seeded, drawing only; **Revision 2: 1,000**, so the 1 g columns stand as tall as the 200 loaves' 5 g columns and z04 counts the same set) after the 200 real-looking ones; A2 is an original egg-farm graph because the pack's two ovens (σ 4 and 9 g) teach scene 6; the pack's state-wide test anchor and PegBoard are not used.
3. **z02:** the worked example is the site's SA 1 (ii) set as a test (−1.17), with the site's 88 (z = 2) as a quick check; the step back uses the site's fill the gap (50); the IQ and height examples are not used.
4. **z03:** an original swimming time (34.5 s, mean 36.0, SD 1.0, z = −1.5) teaches "lower is better" before attempt 2; the site's activity 2 is the worked ranking (Tom, Sarah, Emma, computed; the site gives none); the site's SA 2 (all z = 1.0) and the pack's basketball and netball pair are left out for pace.
5. **z04:** A1 is the pack's fast bowler (124 to 140 km/h; 68%) because the pack's question 1 repeats the loaves' bands; the worked example extends the site's `we-1` (a) to "middle 95%" and "72 to 82" (34%); the skewed taps return from z01 (80 of 100 within ±σ).
6. **z05:** no split; attempt 1 asks "less than 46 minutes" (0.975), not the pack's 37 to 46 minutes (81.5%, the worked example's shape); "above" against "away from" the mean (16% and 32%) is added to scene 4 (trimmed in Revision 2, review finding 5); the site's rice bags (30 of 1,200) are author notes only.
7. **z06:** the juice bottles are the worked example (the site's bolt and battery repeat the same step); "less extreme" (the middle 95%) is said, from the syllabus wording; the pack's simulator reaction time is not used (its "assume normal" caveat would cost time); a batch judgement (46 outside, about 20 expected) covers "sets of data".
8. **Plates (ruling 17):** the loaf is p08's brief; the rack is briefed in z05, where it first appears; the café counter in z06 for c01a. The pack's "new bench scale" is the existing `ma11-produce-scale-v1.png` (p08's choice, kept).

## 5. Sources to confirm (Codex maths check)

- No prices, rates, fees or official statistics appear in z01 to z06 (rulings 5 and 32 do not apply). Every dataset is invented and labelled (z01's description says so).
- The site's height hook (MS-57) is not used. The z05 heights example is the site's lesson03 `we-1` numbers on a coded bell, not a claim about real students. **Revision 2:** set as the heights of 600 Christmas trees at a tree farm (ruling 75), so no example concerns people.
- The z02 syllabus text writes "(x - μ)/σ" with a hyphen in the route JSON; descriptions quote it as is. Codex reports if the NESA page uses a minus sign.

## 6. Site corrections applied

MS-47 (z04: the doubling memory trick is not used; the eight pieces are said to make 100% with the six inner pieces 99.7%); MS-56 (z01: no Central Limit Theorem line and no factory B 58%; z02: μ and σ only, no x̄ or s); MS-57 (the height hook is not used anywhere); MS-59 (z01 shows the bell over a dataset and computes the three centres for it; z02 shows mean 0 and standard deviation 1 with five loaves). MS-48 (a regression on a normal distribution page) belongs to the bivariate strand and is not touched.

## 7. Kit (no source changed)

As `maths-standard-kit-needs-z-c-f.md`, with these uses and small additions recorded in each design: `ClassHistogram` splitting 5 g classes into 1 g in place (z01, if not already supported); a signed count on `SigmaRuler` (z02, if not already supported); the **lower-is-better flag** on `ScoreCompare` (z03); the **rule readout mode** on `BandSlider` and the **empirical-rule label set** with a lift-and-halve animation (z04); the **piece-sum label** and a **gate and tray counter** built from `FillDial`'s flag-and-count motion (z05); the **ZGauge** with word-labelled zones and an "on the line" tick, and a two-sided gate on the counter (z06). No Φ value or table appears on screen in any of the six.

## 8. Plates

- Reused (inspected at full size, 19 Nov 2026): `ma11-produce-scale-v1.png` (bench scale, blank display), `ma12-phone-v1.png`, `ma12-stopwatch-v1.png`, `ma12-bus-side-v1.png`, `ma11-coffee-cart-v1.png`; `ma12-cricket-ball-v1.png` read by name (Codex checks it at 160 px). Considered and not used: `ms12-coffee-sandwich-v1.png` (a pale halo in its alpha), `phys-y11-platform-scales-v1.png` (a floor platform). Advanced anchors not reused (ruling 7).
- From p08: `ms12-bread-loaf-v1.png`.
- New: `ms12-bread-rack-v1.png` (z05's brief; z05 and z06) and `ms12-bakery-cafe-counter-v1.png` (z06's brief; z06's final frame and c01a).

## 9. For root

1. **z01's loaves** (section 4, item 1; closed, ruling 75): accept the changed frequencies so σ is 5 g across the strand, or keep the pack's (σ 5.57 g) and say "about 5.6 g" in z01 with 5 g as "the bakery's long-run figure" in z02 to z06.
2. **p08 → z01** (section 1; closed in Revision 2: p08's section 8 matches): confirm against p08's decisions file section 8 when it exists; ask p08's author to drop the first 12 blocks into classes consistent with z01's frequencies (suggested list in section 1).
3. **z06's final frame** (section 3; confirmed, ruling 75; unchanged in Revision 2): confirm for the c01a designer (the jobs with times, no letters).
4. **z05's heights example** (closed: Christmas trees, ruling 75 and root's decision 1): keep the site's lesson03 `we-1` as numbers only, or ask for a non-people context (a new example would be needed).
5. **z03's swim and z06's batch judgement** (original additions; closed, both kept, the batch now shown against five ordinary days): accept, or trim (about 30 s and 35 s).

Nothing recorded; human listening pending.
