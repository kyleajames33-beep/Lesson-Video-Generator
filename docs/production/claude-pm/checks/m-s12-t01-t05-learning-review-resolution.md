# Year 12 Maths Standard t01a to t05: learning review resolution

18 November 2026. This is the design author's resolution of `m-s12-t01-t05-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for t01a, t01b, t02, t03, t04 and t05. It applies root's five binding decisions for this round:

1. t01a's negative-number test is removed, and "sine ninety gives one" is taught as the way to confirm degree mode.
2. t02 keeps "an access guideline", with AS 1428.1:2009 recorded as the source (through the reviewer's secondary summaries, dated 18 November 2026) for Codex to confirm the clause. The SafeWork NSW ladder source is recorded with its date.
3. t01b uses the 66-character title.
4. The ute's legs keep one colour each from t04's final frame through t05.
5. Every other should-fix is applied, the two author-note errors are corrected, cheap optional findings are applied, every design stays under 570 s, and every decision is recorded.

All six designs carry a "Revision 2 (18 Nov 2026): learning review resolved" section at the top, and their Status lines begin "Revision 2 (18 Nov 2026): learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit, and no sub-agent. Changed values were rechecked with SymPy 1.14 (`work/brief-resolve-standard-t1/verify.py`, `python -I`, 43 checks, 0 failures). Narration was recounted by script (`work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632). Every bold cue is quoted in its scene's Visual in spoken order, and no em dash (U+2014) appears in any of the six designs (`cues.py`, same folder). Codex's maths check remains the authority. t06 to t11 were not touched.

**Totals:** 22 findings (0 blockers, 14 should fix, 8 optional). Should fix: all 14 applied. 11 use the reviewer's wording or fix as written. 3 follow root's decisions (t01a #3 by decision 1, t04 #1 and t05 #1 by decision 4). Two of these are adapted: t01a #3 uses a neutral example, and t05 #2 drops the return bearing from the screen as well. Optional: 6 applied and 2 applied in part (t01a #5, t04 #3). None declined outright.

## Should fix

- **t01a #1, scene 2 (why the same angle gives the same ratio):** accepted, reviewer's wording. The first sentence keeps "the thirty-five degree angle and the right angle". New: "Make it twice as big, and the height and the sloping side both double, so height divided by slope stays the same. Halve it, and both halve." On screen the triangle steps to 11 m and 2.75 m, with "×2" and "÷2" hand tags on both the height and the slope. Cause chain (1) now says that the common scale factor cancels in the division.
- **t01a #2, scene 2 (ghost tags):** accepted. The tags read "1.1472 ÷ 2 = 0.5736" and "5.7358 ÷ 10 = 0.5736". The spoken rounded heights stay.
- **t01a #3, scene 4 (the negative-number test):** accepted (decision 1). The negative-number test is gone from narration, screen, hand tags, the decisions and the kit check. New narration: "Sine ninety should give exactly one. If it doesn't, change the mode before you go on. Don't judge by how an answer looks, because a wrong-mode answer can look perfectly normal. The sine ninety check is the one to trust." On screen RAD shows "sin(90) = 0.8939…", crossed, and a grey row "RAD: sin(40) = 0.7451… (looks normal, but wrong)". The example is adapted: the reviewer's "2.4 ÷ sin 58 = 2.42" row would have shown A2's method before the attempt, so a neutral 40 is used. Bold cue "negative" becomes "normal".
- **t01a #4, scene 5 (crowded frame):** accepted, reviewer's layout. The house is the 300 px badge, and the values write onto the badge's triangle. The triangle is about 700 px wide on the left, with rows from x = 820. The transition 4 to 5 is now a clear change. The Codex asset brief checks the plate at 300 px.
- **t01b #1, scene 3, key note 3 and key line (key order):** accepted (decision 5). Narration: "Press shift, then tangent, and type three point one five divided by four point five one inside the bracket." The key strip shows SHIFT then tan, and the division types inside the open bracket. Key note 3: "SHIFT sin, cos or tan, then the division in the bracket." Key line (scene 7, the notes card and the memory aid check): "Name the sides, write the ratio, then SHIFT sin, cos or tan with the division inside." The reviewer's note is shortened, without its ": tan⁻¹(3.15 ÷ 4.51)" ending, to keep it to one line.
- **t01b #2, scene 3 (crowded frame):** accepted, as t01a #4. The house badge's "?" card flips to 34.9°.
- **t02 #1, scene 1 (hook):** accepted, reviewer's wording. "But exam questions, maps and surveyors often give angles in degrees and minutes instead."
- **t02 #2, scene 2 (why sixty):** accepted (decision 5). "Why sixty, and not a hundred? Sixty splits evenly into halves, thirds, quarters, fifths and sixths, which is handy, and hours use sixty too." The wedge shades 30, 20, 15, 12 and 10 ticks, with a grey row and the hand tag "60 splits evenly".
- **t02 #3, Decisions and A1 (dated sources):** accepted (decision 2). The ladder anchor records the SafeWork NSW Ladders page (https://www.safework.nsw.gov.au/hazards-a-z/ladders, read 18 November 2026: the base 1 m out for every 4 m of height, single and extension ladders), so the chip stands. A1 keeps "an access guideline", and Decisions records AS 1428.1:2009 (1 in 14 for ramps up to 9 m between landings) through secondary summaries read 18 November 2026. Codex confirms the clause. A1's 7.5 m run fits. The same ladder source is recorded in t01b's Decisions, and both designs' Codex error-check items are updated.
- **t03 #1, scene 4 (the Z rule):** accepted, reviewer's wording (decision 5). "The angles in the corners of a Z between parallel lines are always equal. They're called alternate angles, from Year eight. So the depression at the drone equals the elevation at the pad, twenty-eight degrees four minutes." A grey chip "Year 8: alternate angles in a Z" appears.
- **t03 #2, scene 6 (two cars at scale):** accepted (decision 5). The block is about 360 px tall (11.25 px per metre), with the near car about 414 px and the far car about 848 px from the block. The picture fills the left 1,100 px, and the rows sit in the right 750 px at 44 px. Codex confirms that the tower plate reads at 360 px.
- **t04 #1, scene 11 (leg colours):** accepted (decision 4). North "2.0 km" is violet and east "2.1 km" is amber, in scene 11's visual and the Handoff decision.
- **t05 #1, scenes 1 and 2 (leg colours):** accepted (decision 4). The boundary and scene 1 pulse north violet and east amber. Scene 2 settles the sides in the colours they already carry instead of recolouring them.
- **t05 #2, scene 5 (why add; the unasked return bearing):** accepted (decision 5). "At P, the fifteen kilometre leg is opposite and the twenty is adjacent, so tangent. ... C is further round clockwise from P than the buoy is, so add that to forty degrees." The 040° arc at P extends past PB to PC, with the hand tag "further clockwise: add". The bearing from C back to P is dropped from narration. It is also dropped from the screen, rather than kept as the reviewer's silent row, because the task does not ask for it and this is the busiest board in the strand. 257°T stays in author note (b).

## Optional

- **t01a #5, scene 4 (long scene; "cos" voicing):** applied in part. The voicing note is applied: if the Google voice reads "cos" as "because", spell it "coz" in the speech text only. The move of the calculator into scene 5 is not made. The calculator is already its own panel in a camera-continue stage, and moving it would only make scene 5 about 1,000 characters long.
- **t01b #3, scene 5 (decide before I say):** applied. "For each one, decide which inverse before I say." Then a 3 s hold, with no countdown ring.
- **t01b #4, scene 6 (why not just Pythagoras):** applied with a reason. "Here Pythagoras could do it alone, because we knew two sides. Trig is what you need when you know one side and an angle." Two chips appear.
- **t02 #4, scene 4 (the ° ' " key shows seconds):** applied. "Used on an answer, it shows seconds too, so round to the nearest minute." A strip shows tan⁻¹(4) = 75°57'49.5" rounding to 75°58'. Open decision 3 is updated. Seconds are never worked.
- **t03 #3, scene 5 ("far too short"):** applied. "A shallow look down means the boat is a long way out."
- **t04 #2, scene 5 (why subtract):** applied. "... subtract instead, so the answer stays between zero and three sixty."
- **t04 #3, spoken sums:** applied in part. Scene 5 and feedback 1 say each sum in ordinary numbers, then name the bearing. Feedback 1's "Going back is half a turn." is cut to stay at about 30 s. Feedback 2 keeps "Two one five take away one eight zero", because the ordinary-number form took it to about 32 s. Listen on the voiced take.
- **t05 #3, attempt 1 picture:** applied. A small coded "depot" dot sits at the north arrow's foot.

## Root's decisions and housekeeping

- Decision 1: applied as above. t01a's Decisions, author note (c), Numbers used, Numbers to verify, misconceptions, teaching checks and kit check all now name sin 90° = 1 as the test.
- Decision 2: applied in t02 (anchor, A1, Codex item 4, open decision 2 closed) and t01b (handoff, Codex item 7).
- Decision 3: t01b's title is "Finding an Angle with Inverse Trig Ratios | Year 12 Maths Standard" (66 characters, checked by script). The Revision 1 title was 82 characters by script, not 83 as stated.
- Decision 4: applied in t04 scene 11 and the Handoff, in t05's boundary and scenes 1 and 2, and in section 4 of `root-decisions-maths-s12-t01-t05.md`.
- t02 author note (c): corrected. The site's 5.15 m comes from 4.6 ÷ 0.894 = 5.1454; 0.8942 gives 5.1443.
- t04 open decision 2: corrected. Scene 2 names the letter T once, correctly. Bearings are otherwise spoken "degrees true".
- t05 title (ruling 62, applied as housekeeping): "Navigation with Bearings and Right Triangles | Year 12 Maths Standard", 69 characters by script (Revision 1 said 68), under 80.
- Open decisions closed in each design are marked "Closed in Revision 2", with the Revision 1 text kept. Closed: t01a 1 and 2; t01b 1, 2 and 4; t02 1, 2 and 4; t03 1; t04 1 (and 2 corrected); t05 1 and 3. Still open: t01a 3, t01b 3, t03 2 and 3, and t02 3 are designer's notes; t05 2 (b01's picture) is provisional under ruling 59.
- New bold cue: t01a "normal" (replacing "negative"). New hand tags: t01a "×2" and "÷2"; t01b "the division goes in the bracket" (replacing "type it as a division") and "decide first"; t02 "60 splits evenly" and "round to the nearest minute"; t03 "shallow look, far away"; t05 "further clockwise: add" (replacing "turned clockwise: add"). t01a's "a ratio can't be negative" is removed.

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Feedback 1, 2 |
| --- | --- | --- | --- | --- |
| t01a | 5,448 | 5,684 | about 524 s | 27 s, 28 s |
| t01b | 4,926 | 5,150 | about 482 s | 23 s, 25 s |
| t02 | 4,910 | 5,126 | about 476 s | 28 s, 29 s |
| t03 | 5,367 | 5,549 | about 513 s | 28 s, 28 s |
| t04 | 4,976 | 5,146 | about 481 s | 30 s, 29 s |
| t05 | 5,276 | 5,313 | about 497 s | 30 s, 25 s |

All six are under 570 s with holds, with at least 46 s to spare, and all are now between 5,000 and 6,800 characters. Every feedback is 30 s of speech or less: t05 feedback 1 has 398 characters (about 29.9 s) and t04 feedback 1 has 395 (about 29.7 s). The longest single scenes are t05 scene 5 (1,044 characters, about 78 s: one board, its named trim already taken), t04 scene 4 (974) and t01a scene 4 (866). These are speech-only estimates; measure them on the Google voice.

## Joins

- r13 / r14 → t01a: unchanged.
- t01a → t01b, t01b → t02, t02 → t03, t03 → t04: unchanged.
- t04 → t05: unchanged apart from the leg colours (north violet, east amber), which now match on both sides.
- **t05 → t06 and b01: t05's final frame is unchanged.** Scene 12 and section 3 of `root-decisions-maths-s12-t01-t05.md` are exactly as in Revision 1, because no finding required a change. For the t06 author, the review summary asks t06 to copy t05 exactly: the plate `ms12-river-crossing-top-v1.png` (not `ms12-river-tree-top-v1.png`), dotted sight lines (not dashed), and the label "Standard 2 next: the sine rule".

## For root

1. **t01a's wrong-mode example:** the grey row uses sin(40) in RAD (0.7451) instead of the reviewer's 2.4 ÷ sin 58 row, because the reviewer's row would show A2's method before the attempt. Confirm.
2. **t05's return bearing:** it is dropped from narration and from the screen, not kept as a silent row. Confirm.
3. **t04 feedback 2:** it keeps one digit-by-digit sum ("Two one five take away one eight zero") to stay under 30 s. Accept, or allow about 32 s for the ordinary-number form.
4. **Codex checks added by this round:** the AS 1428.1:2009 clause (t02); re-confirming the SafeWork NSW Ladders page (t01b, t02); and that `ma12-tower-block-v1.png` reads at about 360 px tall (t03 scene 6).
5. **t06's opening (from the review summary):** the t06 author adopts t05's plate name, line style and label exactly. t05 is not changed to match t06.
6. **Route inputs 5:** the t01 and t02 entries still need the ruling 62 updates (decisions file, section 9 item 7). This round did not touch them.

Nothing recorded; human listening pending.
