# Root decisions needed: Maths Standard Year 12, r01 to r07 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-r01.md`, `r02.md`, `r03.md`, `r04.md`, `r05.md`, `r06a.md`, `r06b.md` and `r07.md` (Revision 1 each). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-r01.md` to `r07.md`, `programme/maths-standard-route-inputs-4.json`, `checks/maths-standard-kit-needs-r.md`, `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 47, binding), `site-corrections-maths-standard.md` (section 7, MS-33 to MS-39), the format of `lessons/math-s12-a04a.md`, `a06.md` and `i09.md` and `checks/m-s12-a01-a06-learning-review-resolution.md`, `maths-visual-standard.md`, `AGENTS.md`, and, for the join, the final frames of `lessons/math-s12-i18.md` and `i23.md`. r07 was written before r01 to r06b were finished, and its final frame is fixed below for the r08 author.

Every value was recalculated with SymPy 1.14 (scratchpad `r/verify.py`, run with `python -I`, 166 checks, 0 failures). Narration was counted by script (scratchpad `r/count.py`, the method of `work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632). Every bold cue is quoted in its scene's Visual in spoken order, and no design contains an em dash (both checked by script, scratchpad `r/cues.py`). Seconds are speech at 13.3 characters a second plus countdowns, holds, settling and the 45 s notes scene; measure on the Google voice.

**Revision 2 update (18 Nov 2026).** All eight designs are now at Revision 2 (learning review resolved); the log is `m-s12-r01-r07-learning-review-resolution.md`. Changes that touch this handover: r01's final frame and r02's opening now read "put in: $100 and $60" (root's decision 2; takings and shares unchanged); r03 speaks the letter shorthand once (ruling 50, root's decision 1), so departure 4's "grey unspoken chip" no longer applies; the benchtop chip on r04's and r05's final frames and r06a's opening carries a small grey "example price" tag (ruling 51); r07's final frame (section 2) is **unchanged**. The summary table below keeps the Revision 1 figures; Revision 2 characters and seconds are: r01 5,360 (about 486 s), r02 5,096 (466 s), r03 5,661 (511 s), r04 5,737 (515 s), r05 5,999 (538 s), r06a 6,072 (543 s), r06b 5,935 (532 s), r07 6,369 (565 s).

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Courses | Anchor | New plate briefed here | Open question |
| --- | --- | --- | --- | --- | --- | --- | --- |
| r01 ratios, fractions, simplest form | 5,292 | 481 | 13 | S1, S2 | the cordial jug (250 mL in 1 L: 1 : 4, 1/5) | `ms12-drinks-esky-v1.png` (r02's anchor) | the "Builds on" line awaits i18's and i23's titles |
| r02 dividing in a ratio | 5,083 | 465 | 13 | S1, S2 | the carnival drinks stall ($480 in 5 : 3) | `ms12-sand-barrow-v1.png`, `ms12-lake-jetty-v1.png` (r03's) | two-route frame confirmed? |
| r03 capture-recapture | 5,260 | 480 | 14 | S2 | a fishing club's lake (40, 50, 8: about 250) | `ms12-pasta-shells-v1.png` | letters unspoken; koalas in A2 |
| r04 map scales | 5,461 | 494 | 14 | S1, S2 | a coded bushwalk map at 1 : 25 000 (8.4 cm = 2.1 km) | none (phone reused) | no painted map (owner rule) |
| r05 constructing scale drawings | 5,858 | 525 | 15 | S2 | a 3.6 m by 3.0 m bedroom in a 10 cm by 8 cm space (1 : 50) | `ms12-bedroom-furniture-v1.png` | fifteen scenes; orientation not taught |
| r06a plans, floors, flooring costs | 5,830 | 523 | 13 | S1, S2 | the site's kitchen bench (3.6 cm at 1 : 100, $1152) | `ms12-tile-box-v1.png`, `ms12-paint-tin-v1.png` (r06b's) | symbol source; four unsourced example prices |
| r06b walls, paint, comparing | 5,809 | 522 | 13 | S1, S2 | painting the bedroom from r06a's final frame (5.02 L, 2 tins) | none | r09's opening picture |
| r07 trapezoidal rule from a plan or photo | 6,286 | 558 | 15 | S2 | a creek-side house block on a 1 : 500 site plan (about 585 m²) | `ms12-creek-block-aerial-v1.png`, `ms12-farm-dam-aerial-v1.png` | thin margin (12 s); dam proportions |

All eight are under 570 s with holds and between 5,000 and 7,000 characters. Every feedback is 30 s of speech or less (the longest: r02 feedback 2, 396 characters, about 29.8 s). The longest single scenes are r06b scene 6 (997 characters, about 75 s; a full worked example with a spoken task, and a named trim), r06a scene 6 (818) and r06a scene 5 (806). Each is one board or one method stage.

## 2. r07's final frame (r08 opens on it)

r07 scene 14, held about 2 s, then returned to silently after the notes (scene 15 ends on it, cross-fade 1 s). Exactly:

- **Left, about 1,000 px wide:** the painted aerial plate `ms12-farm-dam-aerial-v1.png` (briefed in r07; a farm dam from directly above, a straight earth wall along the bottom edge of the water, the far bank curving away, dead trees in the shallows, dry paddock around it). Over it, faint grey (40 per cent): the coded baseline along the dam wall and the three offsets from r07's worked example (at the wall's two ends and halfway along). On the water, a teal chip, 40 px: "surface ≈ 1,710 m²".
- **Right:** a coded rain gauge (a clear vertical tube about 520 px tall with a millimetre scale marked every 5 mm from 0 to 50 mm, its water level at 25 mm, blue), and beside it a coded card, 40 px: "rain overnight: 25 mm".
- **Chips:** "how much water is that?" (top right), "Next: volume of rainfall" and "?".
- **Not shown:** no volume, no V = Ah, no conversion of 25 mm. The header strip stays "MATHEMATICS STANDARD · RATIOS AND RATES".
- **Spoken lead-in (r07 scene 14):** "Now back to the farm dam. Its surface is about one thousand seven hundred and ten square metres. Overnight, the weather report says twenty-five millimetres of rain fell. A depth of rain sounds small, but spread over the whole dam, how much water is that? That's next."
- **Numbers available to r08:** the dam's estimated surface 1,710 m² (A ≈ 30/2 × (21 + 2 × 34 + 25), from offsets 21, 34, 25 m at h = 30 m; photo scale 1 : 1000). Rain falling directly on the dam's surface is 1710 × 0.025 = 42.75 m³ = 42 750 L (not stated in r07). r07 says "h, the strip width" every time it uses h, so r08 can give h its rainfall meaning freely; r07 never writes V = Ah.
- **If r08 prefers another surface** (a catchment, a roof, the site's 1170 m² paddock), only r07 scene 14's chip, card and lead-in sentence change; the dam plate can stay or go.

## 3. Joins

- **i18 / i23 → r01 (ruling 45):** r01 opens on i23's final frame exactly (the grey strand thumbnails with "Money: done", the water jug `ma11-water-jug-v1.png` at about 700 px with its coded cordial layer, no numbers; chips "how much of the jug is cordial?", "Next: ratios", "?"), which is i18's right panel full width. r01 keeps the jug (i18 and i23 open decisions closed: no change needed). Because the plate's body bulges, r01 draws the five equal parts in a straight coded column beside the jug, not as bands on it.
- **r01 → r02:** the drinks esky with "put in: $100 and $60", "takings: $480" (Revision 2, root's decision 2; Revision 1: $50 and $30).
- **r02 → r03 / r04 (two routes):** left, the lake from above with a dashed net circle ("how many fish are in the lake?"); right, a coded bushwalk map corner at 1 : 25 000 ("how far is the walk, really?"). r03 fades the right panel; r03's final frame repeats the right panel full width; so r04 opens on one picture from either route and assumes nothing from r03.
- **r04 → r05 / r06a (two routes):** left, squared paper with "space on the page: 10 cm × 8 cm" and a 3.6 m by 3.0 m room outline ("will it fit the page?"); right, a coded floor plan corner with a kitchen bench "3.6 cm" at 1 : 100 ("benchtop $320 a metre: what does it cost?", with a small grey "example price" tag from Revision 2, ruling 51). r05 fades the right panel; r05's final frame repeats it full width; r06a opens on it from either route and assumes nothing from r05.
- **r06a → r06b:** the paint tin with "4 L" and the coded bedroom plan, 3.8 cm by 3.2 cm, a door and a window, "ceiling height 2.4 m" ("how many tins for the walls?").
- **r06b → r07 / r09 (two routes):** left, a coded creek-side site plan at 1 : 500, front fence "6 cm" ("what area?"); right, two coded pay slips, "Shift: 8 hours, Pay: $336" and "Shift: 6 hours, Pay: $270" ("who is paid more?"), taken from the r09 pack's start. r07 fades the right panel.
- **For the r08 to r14 author:** (1) r08 opens on r07's final frame (section 2). (2) r08 is Standard 2 only and the last video before r09 on the Standard 2 path; for r09 to open on one picture for both courses, r08's final frame should repeat r06b's right panel (the two pay slips) full width, as r03 and r05 do for their Standard 1 joins. (3) If r09's design chooses other pay slips, only r06b scene 12's right panel changes. The house roof triangle (ruling 45) is not touched by r01 to r07.

## 4. Departures from the packs (each recorded in its design)

1. **Maps, plans and scale drawings are coded** (owner rule for this round). The packs proposed a painted bushwalk map plate (r04, on r02's and r03's frames); it is not briefed. The real objects on screen are plates (the phone in r04, furniture, tiles, a paint tin), and the two aerial views in r07 are painted because a photograph is a picture of the land, not a plan. r04 open decision 1 offers a painted trailhead badge if the grade-A sheet finds the opening thin.
2. **r01:** the five parts are a column beside the jug (curved plate); the screen ratio is simplified in steps (÷ 10, ÷ 2, ÷ 2, ÷ 3) so the HCF of 120 is not needed; "one part compared with the other" is one contrast line and attempt 2 (b).
3. **r02:** the 2 L jug added as a callback (same steps, units on every share); the pack's anchor list used whole; its holiday-house question kept with names in text only.
4. **r03:** the kitchen test uses the site's quick-check numbers (30, 45, 9 → 150) with an original true count of 156; the yabbies are the worked example; the site's letters appear once (Revision 1: a grey unspoken chip; Revision 2: spoken once, each letter with its meaning, ruling 50).
5. **r04:** the pack's question 1 (c) is dropped from the attempt (the waterfall in scene 4 teaches ground to map); A1's slip is the decimal-hours reading (1.53 h as 1 h 53 min) because the multiply-or-divide slip is already crossed in the worked example.
6. **r05:** the anchor bedroom's numbers are original (3.6 m by 3.0 m in 10 cm by 8 cm: factors 36 and 37.5), because the site's room gives equal factors (40 and 40) and cannot show "take the larger"; the site's room is the worked example. The pack's question 1 bedroom is replaced by the backyard (pack anchor 2) so the anchor and attempt differ.
7. **r06 split (ruling 44):** r06a holds the hook, symbols, side-first areas, flooring and tile boxes, and a tile comparison; r06b holds walls, paint, coverage, whole tins and a paint comparison. The pack's question 1 (bathroom tiles) is r06a's attempt 1; its question 2 (bedroom paint) is r06b's anchor. Two original comparisons replace the pack's single "two-quote card".
8. **r06a:** a laundry (original) teaches tile boxes (3.3 boxes, so 4, not the nearest) so that A1's bathroom (4.28, so 5) stays unseen.
9. **r07:** the anchor block's numbers are original and realistic (1 : 500; 30 m front; offsets 18, 22, 20, 15 m; about 585 m²) instead of the pack's 1 : 200 block (267.2 m², smaller than most house blocks). The pack's dam question becomes the worked example, with the dam wall as the baseline so the end offsets are real widths. A2 is an original map question (paddock, area and fencing).
10. **Plates painted one video early (ruling 17):** the esky in r01's brief, the lake in r02's, the paint tin in r06a's. Plates first seen in their own video (sand barrow, pasta shells, furniture, tile box, both aerials) are briefed there.

## 5. Prices and sources (rulings 5, 32 and 47)

Read 18 November 2026; each design cites its own and says once that prices are examples that change; Codex re-checks in the maths check.

- **Paint (r06b):** 4 L interior low-sheen at $88.90, coverage 12 m² per litre (Bunnings, British Paints Paint & Prime 4 L); 4 L at $94.95, "up to 16 m² per litre" (Bunnings, Taubmans Endure 4 L); Choice on maximum coverage claims. No brand in learner copy ("Paint A", "Paint B").
- **Tiles (r06a):** mid-range porcelain $50 to $120 a square metre, large-format typically $85 (whatsthedamage.com.au, updated November 2026); porcelain $40 to $100 a square metre supply (Airtasker cost guide). The $45 ceramic (site), $85 porcelain and $95 for a 1.44 m² box sit inside these ranges.
- **Fencing (r07):** Colorbond 1.8 m installed $85 to $150 a metre, NSW 2026 (The Quote Yard); Sydney $86 to $138 (whatsthedamage.com.au). $120 a metre is used.
- **Not yet sourced (r06a open decision 2):** the site's benchtop at $320 a metre, carpet at $40 (MS-39) and $38 (site SA 3) a square metre, and an invented vinyl box ($99 for 2.2 m²). Root may accept them as labelled examples or ask Codex to replace any that is unrealistic; dependent values are listed in r06a's "Numbers used".
- r05's basketball court dimensions are a labelled example (no source claimed). No gambling appears anywhere (MS-33 applied in r02).

## 6. Site corrections applied

MS-33 (lottery → drinks stall, r02; not used in r01); MS-36 (plan symbols taught, r06a, with a source line requested from Codex); MS-37 (plans, photos, maps, perimeter and radial survey, r07; radial survey named in one sentence per ruling 43); MS-39 (the unit rule taught as two directions in r04 and respected in r05; the realistic 1 : 100 bedroom in r06a). MS-34 and MS-38 belong to r14 and r08.

## 7. Kit (no source changed)

As `maths-standard-kit-needs-r.md`, with these uses and small additions recorded in each design: **RatioBar** (r01 regroup, scale and bracket modes; r02 share and part-given modes); **ScalePlan** (map mode first used on r02's frame; measuring string and zoom in r04; fit-the-box in r05; plan mode on r06b's frame; offset-survey mode in r07, with the dam plate's painted bank required to meet the coded offsets within 4 px); **MarkRecapture** (r03, seeds recorded so the net catches 50 with 8 tagged, and 50 with 16 in the cluster run); **PlanSymbols** (r06a, also on r04's and r05's frames) and **WallStrip** (r06b); small lesson-folder parts: equal-fraction cards (r03), cut-outs (r05), box stacker (r06a), tin fill with a what-if toggle (r06b), gap shading and a rain gauge (r07).

## 8. For root

1. **Two-route frames** after r02, r04 and r06b follow the i03 and i18 pattern (the Standard 2 video fades the right panel, and its own final frame repeats that panel full width). Confirm, or choose single-route frames.
2. **r06a open decision 2:** accept the four unsourced example prices, or have Codex replace them.
3. **r06a open decision 1:** symbols drawn in their common forms; Codex to give a source line (for example AS 1100.301).
4. **r07's margin** (about 12 s under 570 s). Three trims were taken in Revision 1 and three more are named. Accept, or ask for one named trim now.
5. **r08's opening** (section 2): the r08 author may keep the dam or switch surface; only r07 scene 14 changes.
6. **r09's opening picture** (section 3): the two pay slips from the r09 pack on r06b's right panel, and on r08's final frame.
7. **r03 open decisions:** the letters n₁, n₂, m₂ are an unspoken grey chip (one sentence can be added, about 6 s); A2 keeps the site's koalas (or becomes trout in a stocked dam).
8. **r05:** fifteen scene headings (ruling and labelling separate from furniture); turning a shape to fit is not taught. Confirm.
9. **"Builds on" lines** in r01 and the "Next (Standard 1)" line in r06b and the "Next" line in r07 name topics until i18's, i23's, r08's and r09's titles exist.

Nothing recorded; human listening pending.
