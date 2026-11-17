# Year 12 Maths Standard a01 to a06: learning review resolution

18 November 2026. This is the design author's resolution of `m-s12-a01-a06-learning-review-summary.md` and the per-design files `m-s12-<id>-learning-review.md` for a01, a02a, a02b, a03, a04a, a04b, a05 and a06. It applies root's seven binding decisions for this round: (1) the Standard 1 route in a03, a04a and a04b, where the pay-back reasoning is spoken for everyone, a03 shows each line's two intercepts, and algebra sits in a grey row tagged "Standard 2"; (2) the Standard 1 chips stay and quote the published YouTube titles exactly; (3) a01's new prices; (4) a05's halving walk, the e01 wording and the wider first window; (5) a06's "100% plus r%", $4.53 and 117.96; (6) no second worked example in a02a, a02b or a04b, no absolute references in a04b, and the site numbers kept in a04b's attempts; (7) every other should-fix applied, cheap optional findings applied, named cuts used to stay under 570 s, and every decision recorded. All eight designs now carry "Revision 2 (18 Nov 2026): learning review resolved" at the top, and their Status lines say "Revision 2 (18 Nov 2026): learning review resolved". Each Revision 2 section has the detail. This round changed documents only: no speech, build, render or commit. Changed values were rechecked with SymPy 1.14 (`work/brief-resolve-standard-a1/verify.py`, `python -I`, 53 checks, 0 failures). Narration was recounted by script (`work/brief-resolve-standard-a1/count.py`, which reproduces e08's 5,632). Codex's maths check remains the authority. a07 to a13 were not touched.

**Totals:** 29 findings (0 blockers, 17 should fix, 12 optional). Should fix: all 17 applied. 11 use the reviewer's wording or fix as written, 5 follow root's decisions as written (a01 #2, a05 #1 to #4 by decision 4 and 2), and 1 is adapted (a02b #1, where feedback 2 leaves out "every term" to stay under 30 s). Optional: all 12 applied. 1 applies the reviewer's advice to keep something as written (a02a #4), and 2 are adapted in form only (a04a #2 and a06 #3 are said as two short sentences). None declined.

## Should fix

- a01 #1, scene 3 (why six lessons; a readout that goes negative): accepted, reviewer's reasoning with root's new prices. "So B's line catches up, by fifteen dollars each lesson, the gap between eighty and sixty-five. A started ninety dollars ahead, and six fifteens make ninety, so the two lines cross at six lessons, and four hundred and eighty dollars." The rider now appears on the new cue "fifteen" with the tag "B catches up $15 a lesson", and steps n = 0, 2, 4, 6 on "six fifteens". The readout is relabelled "A dearer by $" (90, 60, 30, 0), then "B dearer by $" after the crossing, so it never shows a negative price.
- a01 #2, scene 13 (chip names a missing title): accepted (decision 2). "Standard 1: next, 'Simultaneous Equations from Worded Problems'". a02a's boundary quotes the same text.
- a02a #1, scenes 4, 5 and feedback 2 (the bracket lost by ear): accepted, reviewer's wording ("two lots of the bracket x plus one"; "Four lots of the bracket seven minus s"; "two lots of the bracket two x plus three"). Feedback 2's opening "in brackets" is cut because the new wording says it.
- a02a #2, scene 5 (which equation to rearrange): accepted, reviewer's sentence ("Pick the easier one, c plus s equals seven, because neither letter has a number in front of it.") and the tag "no numbers in front".
- a02b #1, scene 4 and feedback 2 (why multiply by four, or two): accepted. Scene 4 uses the reviewer's wording ("the second equation has four f, so multiply the whole first equation by four, every term"), and the "4f" in (2) rings amber with the tag "match the 4f". Feedback 2 is adapted: "Multiply the first equation by two, to match the two x, so ..." leaves out "every term" to keep the feedback at about 30 s. The "× 2" chip still touches x, y and 9, and "The nine gets doubled too" carries the point.
- a02b #2, scene 2 (taking away a negative): accepted, reviewer's debt sentence, with the grey chip "take away a $10 debt: +$10" on the new cue "debt".
- a03 #1, scene 4 (Standard 1 cannot draw the money line): accepted, reviewer's narration (decision 1). The four intercepts are spoken and ringed ("all adults", "all children"), with a grey working chip "$5,900 ÷ $22 ≈ 268", "$5,900 ÷ $12 ≈ 492". They replace "The count line joins three hundred and fifty on each axis. The money line is steeper." The same intercept route is drawn, unspoken, on the drive's graph and in feedback 1.
- a03 #2, scene 7 (the units trap cannot be fallen into): accepted, reviewer's wording ("four hours and thirty minutes"; total "4 h 30 min, 400 km"; "Thirty minutes is half an hour, so that's four point five hours, not four point three.").
- a04a #1, scene 7 and feedback 1 (Standard 1 route stops after scene 4): accepted, reviewer's wording (decision 1). Scene 7: "Each item brings in ten dollars and uses four, so it pays back six dollars of the fixed cost. A hundred and eighty divided by six is thirty". Feedback 1: "Each car pays back ninety minus fifteen, seventy-five dollars, so break-even is four hundred and twenty divided by seventy-five, five point six." The algebra in both is a grey, unspoken row tagged "Standard 2", and the A1 model answer is updated to match. Decision 1 is also applied to scene 4, which the review did not flag. The pay-back reason now comes first and is spoken for everyone. The equation follows ("If you're doing Standard 2, you'll also write it as an equation") in the grey "Standard 2" panel. Scene 3's last line now reads "look at what each lawn pays back" instead of "we can use a little algebra". Scene 4 is renamed "pay-back: thirty-nine dollars a lawn" (`pays-back-39-a-lawn`).
- a04b #1, scene 3 (fill down not explained): accepted, reviewer's sentence and visual (A3 and A4 ring in B3's and B4's formulas).
- a04b #2, scene 5 and feedback 2 (the check is algebra only): accepted, reviewer's wording (decision 1). Scene 5 checks by "six thousand five hundred divided by forty-five". Scene 3's "+450" gets "because each ticket pays back forty-five". Feedback 2 uses "eight hundred divided by nine". The algebra is a grey "Standard 2" row each time. Key note 5 becomes "Check: fixed cost ÷ what each one pays back; round up.", scene 1's recall chip becomes "a04a: fixed ÷ pay-back", and the A2 model answer is updated.
- a05 #1, scene 4 (zero and negative powers asserted): accepted, reviewer's narration (decision 4). The scene walks the table left, dividing by two at each step, with "÷2" arrows mirroring the "×2" arrows.
- a05 #2, scene 7 ("the bigger a is, the steeper it climbs"): accepted, e01 Revision 2's wording (decision 4). "A bigger a climbs more steeply to the right of the y-axis, and hugs the x-axis more closely on the left." The new cue "left" rings ½ and ⅓ at x = −1, with (0, 1) as the pivot.
- a05 #3, scene 13 (chip names a missing title): accepted (decision 2). "Standard 1: next, 'Limitations of Linear and Exponential Models'". a06's boundary and the description's "Next" line match.
- a05 #4, scene 3 (day-7 point off the graph): accepted (decision 4). The first window runs from 0 to 14,000 views.
- a06 #1, scene 7, card and key notes 2 and 3 ("a is one plus r"): accepted, reviewer's wording (decision 5). No learner copy writes a bare "1 + r". The boundary, cause chain, memory aid check and description use "100% + r%" and "100% − r%".
- a06 #2, scene 5 and notes ($4.54; 117.97): accepted (decision 5). The slip now reads $4.53 on screen and in the notes (24 000 × 0.18⁵ = 4.5349632). The A1 slip is 117.96 in the notes (117.9648).

## Optional

- a01 #3, scene 1 (invitation; prices low for 2026): applied (decision 3). "Say you've got your learner licence". A is now $90 + $65 a lesson and B $80 a lesson. Every dependent value is recalculated: the tables, the crossing (6, 480), n = 4 ($350, $320), n = 10 ($740, $800, A saves $60) and the cost axis to $850.
- a01 #4, scene 6: applied ("But in the HSC exam, you can't use a graphing calculator.").
- a02a #3, scene 3: applied ("Putting it back in is called substituting back.", new cue "back", grey chip).
- a02a #4, scene 3: kept as written, as advised.
- a02b #3, scene 5: applied. Chooser card 1 is y = 2x + 3 and y = 9 − x, which solves to (2, 7), whole numbers. It is still not solved on screen.
- a03 #3, feedback 1: applied (decision 1). A grey "Standard 2" row "28(30 − s) + 35s = 903, 840 + 7s = 903, s = 9" sits beside the graph route.
- a03 #4, feedback 2: applied; "(screen only)" is dropped.
- a04a #2, scene 7: applied as two sentences ("At exactly thirty, it only breaks even. The first profit comes at thirty-one."), with grey chips "n = 30: P = $0" and "n = 31: P = 310 − 304 = $6".
- a04b #3, attempt 1: applied ("Between which two numbers of meals is the break-even point?" on the card, in the narration and in the model answer).
- a04b #4, scene 5: applied (window $12,000 to $22,000).
- a06 #3, scene 3: applied as its own sentence ("Per cent means out of a hundred, so that's one point zero four."), with the chip "104% = 104 ÷ 100".
- a06 #4, scene 6: applied ("because one point two five times zero point eight is exactly one"), with the check row "1.25 × 0.8 = 1".

## Root's decisions and housekeeping

- Decision 1 (Standard 1 route): a03 speaks and rings all four theatre intercepts, and draws the drive's and A1's intercepts on screen without speaking them. a04a and a04b find break-even as fixed cost ÷ (price − variable cost) in every worked example, check and feedback. Every algebra row that Standard 1 does not need is grey, tagged "Standard 2" and unspoken, except a03 scene 5 and a04a scene 4, where it is spoken briefly and labelled for Standard 2 only. a04a's and a04b's "Standard 1 path" and "Standard 1 completeness" lines are updated.
- Decision 2 (chips): both chips quote the title without the series suffix "| Year 12 Maths Standard", at 30 px, so the chip stays one line.
- Decision 3 (a01 prices): applied. The anchor note records that Revision 1 used the pack's $55 and $70.
- Decision 6: no second worked example in a02a, a02b or a04b; no absolute references; a04b's attempts keep the site's numbers. a02b's open decision 1 is closed by root ruling 17 (plates painted one video early).
- Root ruling 15 (a05 title), applied as housekeeping: "Exponential Graphs: y = a^x and y = a^(−x) | Year 12 Maths Standard" (67 characters, not 66 as Revision 1 stated). a04b's description "Next" line and a06's "Builds on" line name it by the new title. a06's description "Next" line now uses a07's published title.
- Reserve trims taken (decision 7), each one a cut the design had already named: a01 scene 3 "To the right, A's line is lower." and scene 7 "No pair can make both true."; a03 scene 1 "Businesses, clubs and schools ..." and scene 2 "It stops you mixing them up at the end."; a05 scene 1 "It shows up in prices, savings, and anything that spreads from person to person." a04a's Revision 1 trim in scene 4 went with its sentence, and a new one is named.
- New cues: a01 "fifteen", "eighty"; a02a "back"; a02b "debt"; a03 "line", "tickets"; a04a "back" (scene 3); a05 "left". Hand tags are added to each design's list. No em dash (U+2014) appears in any of the eight designs. Every bold cue is quoted in its scene's Visual in spoken order (both checked by script, `work/brief-resolve-standard-a1/cues.py`).
- Open decisions closed in each design are marked "Closed in Revision 2", and the Revision 1 text is kept for the record. Still open: a02b decision 2 and a06 decision 3 (see "For root").

## Lengths (by script, 13.3 characters per second)

| Design | Revision 1 | Revision 2 | With holds | Speech before notes | Feedback 1, 2 |
| --- | --- | --- | --- | --- | --- |
| a01 | 6,246 | 6,345 | about 564 s | about 471 s | 22 s, 29 s |
| a02a | 5,130 | 5,303 | about 482 s | about 393 s | 23 s, 29 s |
| a02b | 5,043 | 5,185 | about 477 s | about 384 s | 25 s, 30 s |
| a03 | 6,173 | 6,338 | about 564 s | about 471 s | 28 s, 26 s |
| a04a | 5,934 | 6,106 | about 548 s | about 453 s | 29 s, 27 s |
| a04b | 5,009 | 5,229 | about 482 s | about 388 s | 26 s, 30 s |
| a05 | 6,203 | 6,292 | about 562 s | about 467 s | 28 s, 28 s |
| a06 | 6,116 | 6,314 | about 564 s | about 469 s | 27 s, 28 s |

All eight are under 570 s with holds, and all are within 5,000 to 6,800 characters. Every feedback is under 30 s of speech (a02b and a04b feedback 2 are 395 characters, about 29.7 s). Four designs now have thin margins: a01, a03 and a06 have about 6 s, and a05 has about 8 s. Each names a further reserve trim. The longest single scenes are a02b scene 2 (960 characters, about 72 s, with a named trim), a02a scene 5 (899, about 68 s) and a04a scene 7 (859, about 65 s). Each is one board and one method stage. These are speech-only estimates; measure them on the Google voice.

## Joins

- a01 cold open: unchanged.
- a01 → a02a: a01's final frame changes only in the chip text, and a02a's boundary quotes the new text.
- a02a → a02b, a02b → a03, a03 → a04a, a04a → a04b, a04b → a05: unchanged.
- a05 → a06: a05's final frame changes only in the chip text, and a06's boundary quotes it.
- a06 → a07: a06's final frame is unchanged, with no value at t = 200 (root ruling 18).

## For root

- a04a scene 4: decision 1 was applied beyond the review's findings, so scene 4 now speaks the pay-back reason first and the Standard 2 equation second. Confirm. Otherwise the Revision 1 order (equation first) can return without other changes.
- Chip wording: the titles are quoted without "| Year 12 Maths Standard". Confirm, or ask for the full title (about 70 characters at 30 px, two lines).
- a02b open decision 2 (only one equation is ever multiplied; pairs that need both are left out of Standard) is unruled. The review did not object.
- a06 open decision 3 (the 83-character title; the alternative is "Exponential Models: y = ka^x | Year 12 Maths Standard") is unruled. Ruling 15 named a05 only.
- Root ruling 15 is now applied to a05's title. The a07 to a13 reviewer may want to check any a07 text that names a05 by its old title.
- Margins of about 6 s (a01, a03, a06) and 8 s (a05): accept, or ask for the named further trims before voicing.

Nothing recorded; human listening pending.
