# Root decisions needed: Maths Standard Year 12, t06 to t11 (first-revision designs)

18 November 2026. Design author's handover to root for `lessons/math-s12-t06.md`, `t07.md`, `t08.md`, `t09.md`, `t10.md` and `t11.md` (Revision 1 each, Standard 2 only). Documents only: no speech, build, render, plate or commit, and no sub-agent. Inputs: the packs `pre-design/maths-standard/math-s12-t06.md` to `t11.md`, `programme/maths-standard-route-inputs-5.json`, `checks/maths-standard-kit-needs-t.md`, the trigonometry studio files (`src/explainer/math/studio/a11-trig-triangle.tsx`, `a11-trig-bearings.tsx`, `a11-trig-circle.tsx`; export names checked), `checks/root-rulings-maths-standard-outline.md` (rulings 1 to 60, binding: 43, 59, 60 in particular), `site-corrections-maths-standard.md` (section 8, MS-41 to MS-46; only MS-46 touches these videos), the format of `lessons/math-s12-r07.md`, `r13.md` and `a04a.md` (Revision 2) and the r-strand resolution logs, the visual approach (not anchors or scripts) of `lessons/math-a11-t05.md`, `t06.md` and `t07.md`, `lessons/math-s12-r07.md` and `r08.md` for ruling 43, `maths-visual-standard.md` and `AGENTS.md`. t07 to t11 were written first; t06 was written last. **The t01 to t05 designs were in progress: `checks/root-decisions-maths-s12-t01-t05.md` and `lessons/math-s12-t05.md` did not exist at handover (checked twice), so t06's opening is provisional on the t05 pack's proposed panel** (section 2, item 1).

## 1. Summary

| Design | Characters | About (s, with holds) | Scenes | Anchor | New plate briefed here |
| --- | --- | --- | --- | --- | --- |
| t06 sine rule, a side | 5,141 | 474 | 14 | the site's river (500 m, 60°, 85°: 755 m to the tree) | none (river plate is t05's) |
| t07 sine rule, an angle, obtuse | 5,287 | 483 | 13 | a shade sail (35°27') and a coat hanger (129°47') | `ms12-coat-hanger-v1.png` |
| t08 cosine rule | 5,735 | 518 | 13 | the site's paddock (240 m, 180 m, 110°: 346 m of wire) | `ms12-soccer-goal-v1.png` (attempt 2) |
| t09 area ½ab sin C | 4,954 | 460 | 12 | the paddock's area (20 297 m², 2.03 ha) and a 45-60-80 m block (1336 m²) | none |
| t10 compass radial surveys | 5,709 | 519 | 13 | r07's sketch, then the site's paddock ABCD (11 738 m², 293 kL of rain) | none |
| t11 choosing the rule | 5,822 | 530 | 14 | the site's ship as a ferry (40.5 km, 092°T) and a tower (424.0 m, 59.6 m) | `ms12-harbour-ferry-v1.png` (unless t04 briefs a ferry) |

Characters are the sum of the scene strings (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed), counted with scratchpad `t/count.py` (a copy of `work/brief-resolve-standard-a1/count.py`; it reproduces e08's 5,632 and r07's 6,369). Times use 13.3 characters per second plus two 10 s countdowns, 6 to 9 s of short holds, 20 to 25 s of settling and the 45 s notes scene. All six are under 570 s (longest t11, about 530 s; shortest t09, about 460 s). t09 (4,954) sits just under the 5,000 guide; like r08, r09 and r12b (rulings 52, 55) it is the strand's shortest topic and is not padded.

Characters per scene (1 to last):
- t06: 471, 451, 370, 334, 592, 512, 624, 150, 284, 380, 255, 402, 241, 75
- t07: 400, 587, 503, 655, 969, 407, 168, 266, 328, 210, 394, 325, 75
- t08: 470, 794, 704, 872, 760, 229, 213, 366, 370, 270, 404, 208, 75
- t09: 393, 702, 661, 549, 832, 191, 344, 344, 238, 362, 263, 75
- t10: 498, 475, 788, 795, 544, 468, 215, 443, 341, 455, 379, 233, 75
- t11: 342, 639, 655, 853, 860, 391, 190, 362, 383, 420, 405, 247, 75, 0 (scene 14 is the silent return)

Every feedback scene is at most 420 characters (about 30 s; longest t11 feedback 2 at 405 and t08 feedback 2 at 404). The longest single scene is t07 scene 5 (969, about 73 s: one g01 board, the hanger worked in full). Every design has 0 em dashes and 0 digits in narration; every bold cue is quoted in its scene's Visual in spoken order; every attempt narration ends "Pause here to answer."; every syllabus quote matches the route-inputs JSON exactly (text form, including t11's curly apostrophe); titles are 58 to 85 characters; every description ends #HSCScience, has the wording under a Standard 2 heading and no codenames (ruling 16). All numbers were recalculated with SymPy 1.14 (scratchpad `t/verify.py`, run with `python -I`, 0 failures); Codex's maths check remains the authority.

## 2. Joins (every opening and final frame)

1. **t05 → t06 (cross-author; provisional).** t06 opens on t05's two-route final frame as the t05 pack proposes: left (Standard 2) a river from above with a tree on the far bank (the river plate t05 briefs; working name `ms12-river-tree-top-v1.png`), a coded 500 m baseline PQ, arcs "60°" at P and "85°" at Q, dashed sight lines, the card "no right angle: how far?", label "Standard 2: next, the sine rule"; right (Standard 1) b01's opening picture and "Standard 1: next, bivariate data", with "Right-angled triangles: done". The right panel fades on t06's first sentence. **Action:** when `root-decisions-maths-s12-t01-t05.md` exists, root (or the t01 to t05 author) checks its "t05 final frame"; t06 scene 1's Visual then copies the left panel exactly. If t05 keeps the site's numbers (500 m, 60°, 85°), nothing else changes; otherwise scenes 1 and 7 take t05's numbers.
2. **t06 final frame = t07's opening.** The shade sail plate `biology/m8-shade-sail-v1.png` (about 640 px wide) at the left with a grey "not to scale" tag; at the right a coded top-view triangle PQR (about 900 × 600 px): PQ "4.6 m" (violet), QR "5.8 m" (amber), angle P "47°" (amber arc), angle R "?" (rose); chips "what angle?", "Next: the sine rule for an angle" and "?".
3. **t07 final frame = t08's opening.** The farm top-view plate (t04's; name per the t01 to t05 designs) at about 1,100 px; a coded triangular paddock on it, fences "240 m" (amber) and "180 m" (violet) from one corner, the angle between "110°" (teal arc), the third side dashed rose "? m of wire"; a grey card "no side with its opposite angle: the sine rule can't start"; chips "how much wire?", "Next: the cosine rule" and "?".
4. **t08 final frame = t09's opening.** As item 3, with the third fence solid teal "≈ 346 m", the paddock's inside tinted pale blue with a rose "? m²", a coded spray drum outline with "spray: measured per hectare"; chips "how much land is inside?", "Next: the area of any triangle" and "?".
5. **t09 final frame = t10's opening (ruling 43).** r07's scene 7 radial sketch at about 1,100 px (a point O inside a five-sided block, five rays to the corners, each with a blank bearing box and distance box), r07's grey chip "radial survey: in Trigonometry" redrawn green as "radial survey: now we have the triangle rules", a grey chip "from Ratios and rates"; three small icons at the right ("½ab sin C", "cosine rule", "bearings"); chips "how much land, from one point?", "Next: radial surveys" and "?".
6. **t10 final frame = t11's opening.** Four small coded cards fanned on the board (about 420 × 300 px each): "roof" (the right-angled roof triangle, 35°, "not to scale"), "river" (the baseline, 60° and 85°, the tree), "paddock" (the hinged fences, 110°), "survey" (the four-cornered radial survey); the hand-font heading "which rule?"; chips "which rule fits?", "Next: choosing the rule" and "?".
7. **t11 final frame = b01's opening (ruling 59, provisional).** b01's opening picture at full width, identical to t05's right (Standard 1) panel: a coded beach kiosk board titled "This week" pairing each day's top temperature with ice creams sold (seven rows), the kiosk plate if t05 briefs one, a grey chip "Trigonometry: done", chips "do hotter days sell more?", "Next: bivariate data" and "?". If t05's right panel differs, t11 follows it exactly; the b01 designer confirms both.

Ruling 43 is met in t09's final frame and t10: r07's sketch returns, its grey chip turns green, the paddock's area, a boundary and the perimeter are computed from the survey, and r08's 25 mm storm falls on it (V = Ah with r08's "h is the depth of rain"; 293 kL). Ruling 60 is met in t07: no second triangle is drawn from one set of data, and the narration says the question will state acute or obtuse; the sail's edges are swapped from the pack so the opening example has one answer.

## 3. Decisions for root

1. **t06 opening provisional** (section 2, item 1). Confirm against t05 when it is written.
2. **t07: the sail's edges swapped from the pack** (PQ 4.6, QR 5.8, so R faces the shorter edge and has one answer, 35°27'). The pack's order has an obtuse partner (112.76°) that also fits. Accept, or keep the pack's numbers with "the angle at R is acute" added.
3. **t07: obtuse taught on a new coat hanger plate** (`ms12-coat-hanger-v1.png`, briefed in t07; ruling 17 does not apply, as the hanger first appears inside t07, not in a final frame).
4. **t08: soccer goal plate** for attempt 2 (`ms12-soccer-goal-v1.png`); the 7.32 m width is checked against the IFAB Laws (Law 1).
5. **t09: example figures.** Spray at 2 L a hectare and shade fabric at $38 a square metre, both labelled "example" on screen (ruling 51 pattern); Codex finds dated sources or root changes them. The spray sentence is t09's first reserve trim.
6. **t09 and t10: dropped parts.** t09 attempt 2's turf cost and t10 attempt 1's boundary AB, and t11 attempt 1's area, are dropped to keep feedback near 30 s; each skill is practised elsewhere in the same video or strand.
7. **t10: five corners to four.** r07's five-sided sketch opens t10 (ruling 43); the teaching uses the site's four-cornered paddock, and the five-sided sketch returns in the memory card ("any number of corners"). A five-row survey would add about 40 s.
8. **t10: ruling 43 lines in the description.** r07's and r08's points are quoted after "Also the radial survey parts of:" (no codenames). Root may prefer them only in the body text.
9. **t11: ferry plate.** `ms12-harbour-ferry-v1.png` is briefed in t11 unless the t01 to t05 designs brief a ferry for t04 (then reuse; withdraw the brief).
10. **Shared plates from the t01 to t05 designs.** t07, t08, t09 and t10 use t04's farm top-view plate (paddock and badge); t06 uses t05's river plate. If the farm plate has no open area for a 240 m by 180 m triangle at 110°, a coded paddock on a plain field tint replaces it (no new plate).
11. **Reused plate across subjects.** `biology/m8-shade-sail-v1.png` (t06 final frame, t07, t09 attempt 1) is a picture only; the numbers live on coded top-view triangles with "not to scale".
12. **t08 margin.** About 518 s, comfortable; the pack's t08a and t08b split is not needed.

## 4. Kit needs (as the t-strand kit file, confirmed by these designs)

- **RadialSurvey** (t10; main new part): field book driving rays at bearings and scaled lengths, construct mode (protractor and ruler), arcs with differences, the across-north split, the 360° ring, per-triangle chips with a running total, one boundary lit and a side table.
- **Ratio meter** (t06): three live "side ÷ sin(opposite angle)" readouts on `StudioTriangle`.
- **Area readout on the hinge** (t09): ½ab sin C live, with a bar topping out at ½ab.
- **RuleChooser** (t11; a two-row version in t08): three gates and an area gate that tick or cross.
- Small: the angle-sum bar (t06, t07); the fraction flip animation (t07); the signed correction block beside `HingeBars` (t08); the top-to-side fold into `ElevationView` (t11); a "same height, same sine" label mode on `StudioCirclePoint` (t07). `SSAConstruction` is not used anywhere (ruling 60).

## 5. Site corrections

Only MS-46 applies (t10: the scale construction and the rainfall link are original teaching). No site error is taught: every site value used was recalculated (18.03, 17.12, 755 m; 55°57' and 119°19' not used; 8.06 cm, 108°2', 346 m; 56.13, 20 297 m², 2.03 ha, 98°15', 1336 m²; 87°, 86°, 91°, 96°, 11 738 m², 107.25 m; 94°, 40.5 km, 092°T, 424.0 m, 59.6 m). MS-45's two-observation algebra (lesson04) and MS-41's rounding slips (lessons 01, 02, 04) are outside these videos.

## 6. Next

Learning reviews (one per design, `checks/m-s12-t06-learning-review.md` to `t11`), then the Codex maths and error checks, then Revision 2, voicing on the Google voice and builds to grade A. t06's opening is confirmed against t05 before its review is closed.
