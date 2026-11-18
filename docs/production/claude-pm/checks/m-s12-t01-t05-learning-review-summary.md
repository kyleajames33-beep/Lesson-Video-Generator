# Maths Standard Year 12 t01a to t05 Revision 1: learning review summary

18 November 2026. Independent student learning review of the six right-angled trigonometry designs (`lessons/math-s12-t01a.md`, `t01b.md`, `t02.md`, `t03.md`, `t04.md`, `t05.md`), following `docs/production/student-learning-review.md`, root rulings 1 to 62 and `checks/root-decisions-maths-s12-t01-t05.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard student starting Year 12 and meeting sine, cosine and tangent for the first time (Year 11 Standard has no trigonometry). All six are shared word for word by Standard 1 and Standard 2, and t05 was traced again as a Standard 1 student leaving the strand. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify" was recalculated with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, numbers in suggested fixes in `suggested.py`, both run with `python -I`, 0 failures); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| t01a a side from sine, cosine, tangent | should-fix | 0 | 4 | 1 | `m-s12-t01a-learning-review.md` |
| t01b finding an angle | should-fix | 0 | 2 | 2 | `m-s12-t01b-learning-review.md` |
| t02 degrees and minutes | should-fix | 0 | 3 | 1 | `m-s12-t02-learning-review.md` |
| t03 elevation, depression, Pythagoras | should-fix | 0 | 2 | 1 | `m-s12-t03-learning-review.md` |
| t04 true and compass bearings | should-fix | 0 | 1 | 2 | `m-s12-t04-learning-review.md` |
| t05 navigation with right angles | should-fix | 0 | 2 | 1 | `m-s12-t05-learning-review.md` |

Totals: 0 pass, 6 should-fix, 0 blockers; 14 should-fix findings, 8 optional. Every should-fix is a sentence, a label, a layout or a source line inside an existing scene; none needs a new scene, a new plate or a split. The designs are good. Each gives the reason before the rule: the scaled roof triangle before the ratio names, the label swap at the other corner, "unknown on top: multiply; underneath: divide" as algebra, the machine run backwards before sin⁻¹, the half-full minutes dial against the crossed hundredths ruler, the Z of parallel horizontals, one start and one turning direction for bearings, and "say where the angle starts" for the angle inside. None is a slideshow on paper.

## Top findings

1. **t01b scene 3 and key note 3: the calculator key order is backwards.** "Type that in as a division, then use inverse tangent" fails on the common school calculators (SHIFT tan comes first, the division goes in the bracket, as the screen strip already shows). Say "Press shift, then tangent, and type three point one five divided by four point five one inside the bracket"; fix the key note and the key line the same way.
2. **t01a scene 4: "In the wrong mode, sine thirty-five gives a negative number."** Students will read "positive means right mode". In radian mode attempt 2 gives a believable 2.42 m (sin 58 rad = 0.993). Make "sine ninety gives one" the check, and say a wrong-mode answer can look normal.
3. **t01a scene 2: why the same angle gives the same ratio.** Add "twice as big: the height and the slope both double, so the division doesn't change". Also, the ghost tag "1.15 ÷ 2 = 0.57" is false (0.575); use "1.1472 ÷ 2 = 0.5736" and "5.7358 ÷ 10 = 0.5736".
4. **t03 scene 4: the alternate-angle rule is used but not stated.** Say "the angles in the corners of a Z between parallel lines are always equal" before "so the two angles are equal".
5. **t04 scene 11 and t05 scenes 1 and 2: the ute's legs swap colours** (north amber and east violet, then north violet and east amber). Use t05's roles (north violet, east amber) from t04's final frame on.
6. **t05 scene 5: "why add?"** Name opposite and adjacent at P, say "C is further round clockwise from P than the buoy is, so add", and take the named trim of the unasked bearing back.
7. **Crowded frames: t01a scene 5, t01b scene 3 (house 900 px + triangle 700 px + rows) and t03 scene 6 (the far car 1,319 px from a 560 px block).** Shrink the house to the 300 px badge; draw the block at 360 px (cars at 414 and 848 px).
8. **t02 scene 1: "safety guides ... give angles in degrees and minutes"** is not supported (the guide gives a ratio). Say "exam questions, maps and surveyors".
9. **t02 scene 2: why sixty.** One sentence: sixty splits evenly into halves, thirds, quarters, fifths and sixths.
10. **t02 Decisions: record dated sources.** Checked 18 November 2026: SafeWork NSW's Ladders page gives the base 1 m out for every 4 m of height (single and extension ladders), so the chip stands. The ramp's 1 in 14 is AS 1428.1:2009 for ramps up to 9 m between landings (from secondary summaries; the standard is paywalled), and A1's 7.5 m run fits; keep "an access guideline" and let Codex confirm the clause.

## Checks the brief asked for

- **Each step said and explained:** yes, with the repairs above. Why the ratio is fixed (t01a, with finding 1), naming from the angle (t01a scene 3), when to multiply or divide (t01a scenes 5 and 6), what inverse sine does (t01b scene 2), why sixty (t02, with finding 2), why elevation equals depression (t03, with finding 1), and how true and compass bearings describe one direction (t04 scene 3, the two live readouts).
- **Terms before plain meanings:** none found used before their meaning (hypotenuse, opposite, adjacent, ratio, theta, inverse, minute, acute, horizontal, line of sight, elevation, depression, bearing, clockwise, turning point).
- **Degree mode:** said in t01a scene 4 with the sine-ninety check, and recalled in t01b scene 3.
- **Numbers and angles by ear:** clear throughout ("seventy-five degrees fifty-eight minutes", "zero four six degrees true"). One optional repair in t04: say sums in ordinary numbers, then the bearing in digits.
- **Visuals at each cue:** every bold cue has a matching change, with a plate or a live simulation in most teaching frames. Only the three crowded frames above need layout repairs.
- **Attempts and feedback:** all 12 cards keep the full worded question on screen through the 10 s countdown, with no answer-bearing picture. All 12 feedbacks give the answer, the key reason, short working and one crossed classic slip, at about 23 s to 30 s (t05 feedback 1 is at the limit). Multi-part cards (t02, t03, t04, t05 A1) ask more than 10 s allows; "Pause here to answer." covers them.
- **Anchors:** a house roof, a pole's wire, a shade sail, a garden shed, a slide, a kite, a ladder, a shop ramp, a drone, apartment parking, a flagpole, a security camera, a farm, a ferry, a campsite and a yacht. All are everyday and non-science, with no people drawn. The two safety rules are sourced as in top finding 10.
- **Standard 1 path:** t01a to t05 are identical for both courses, and nothing assumes non-right-angled trigonometry. t05's two-route frame sends Standard 1 viewers to b01 with "trigonometry is done" (ruling 59).
- **Key notes:** five short, usable notes in each design. Only t01b note 3 needs a change (top finding 1).
- **Length:** 458 s to 504 s by the designer's estimates. The fixes add about 2 s to 13 s per video (t01a about 517 s), all well under 570 s.

## Joins

- **r13 / r14 to t01a:** matches (the house, the amber triangle, "35°", "?", "not to scale", the chips). r13 and r14 may be voiced (rulings 56, 62).
- **t01a to t01b, t01b to t02, t02 to t03, t03 to t04:** each final frame is the next design's stated opening frame, and no frame states the answer it hands on.
- **t04 to t05:** matches apart from top finding 5's colours.
- **t05 to t06 and b01:** t05 scene 12 and decisions section 3 agree. t06 (provisional, ruling 61) differs in three details: the plate name (`ms12-river-tree-top-v1.png` against t05's `ms12-river-crossing-top-v1.png`), dashed against dotted sight lines, and the label wording ("Standard 2: next, the sine rule" against "Standard 2 next: the sine rule"). t06 should copy t05 exactly.

## For root

1. **t02's ramp source:** accept AS 1428.1:2009 (1 in 14, ramps up to 9 m between landings) under the card's "an access guideline" wording, pending Codex's clause check. Or choose "Suppose a rule allows" if no dated primary source is found.
2. **t06's opening:** confirm that the t06 author adopts t05's plate name, line style and label exactly.
3. **t01b title:** the design still carries the 83-character title; ruling 62 accepted the 66-character one.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the six designs (scripted check).
- t02 author note (c) gives the wrong source for the site's 5.15 m: 4.6 ÷ 0.8942 = 5.1443, while the site's 5.15 comes from 0.894 (4.6 ÷ 0.894 = 5.1454). This affects the MS-41 note only, not learner copy.
- t04 open decision 2 says "narration never says 'tee'", but scene 2 names the letter T. That is correct as taught; correct the note.

No speech, design edits, builds or commits were made.
