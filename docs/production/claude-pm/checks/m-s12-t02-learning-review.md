# Maths S12 t02 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t02.md`, "How do degrees and minutes work when we find angles and sides?" Source SHA256 `96426ed67d0e3203823b388858d7bec2eeb5b7864b77af3b9ac69feb9bbc848c`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01a and t01b: sides and angles from the ratios; the Stage 4 angle sum) as a Mathematics Standard student starting Year 12. Standard 1 and Standard 2 share every word. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The scope follows ruling 62 (degrees and minutes in both directions). The teaching is clear: the minutes dial fills half its ticks for 0.5°, beside a crossed hundredths ruler, which shows the 39°50' trap rather than just naming it; "keep the whole degrees, multiply the decimal part by sixty" is stated in words before the row; the reason for ÷ 60 before typing ("the calculator works in decimal degrees") is given; and the second acute angle comes from the angle sum, with the borrowed degree shown as 89°60'. Recalculated with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, `python -I`, 0 failures): tan⁻¹ 4 = 75.963757°, 0.963757 × 60 = 57.825 (58'); 39 + 50/60 = 39.8333; 24/60 = 0.4; sin 63.4° = 0.894154, 4.6 ÷ sin 63.4° = 5.144526, 4.6 ÷ sin 63.24° = 5.151751; sin⁻¹(7/11) = 39.521196° (31.272', so 39°31'), 90 − that = 50.478804° (28.728', so 50°29'); tan⁻¹ 0.08 = 4.573921° (34.435'); tan⁻¹(1/14) = 4.085617° (5.137'); cos⁻¹(1.1/4.2) = 74.816886° (49.013'), 90 − that = 15.183114° (10.987'). All correct. One author note is wrong but not learner copy: (c) says the site's 5.15 m comes from the rounded 0.8942, but 4.6 ÷ 0.8942 = 5.1443; the site's 5.15 comes from 0.894 (4.6 ÷ 0.894 = 5.1454). Correct the note for MS-41.

## Findings

1. **Should fix, scene 1 ("safety guides and exam questions often give angles in degrees and minutes").** The anchor's own safety guide gives a ratio (1 out for 4 up), not an angle in minutes, so the hook's claim is not supported and a sharp student notices. Fix: "But exam questions, maps and surveyors often give angles in degrees and minutes instead." No time change.

2. **Should fix, scene 2 (why sixty, not a hundred).** The trap ("point five is half of sixty, not half of a hundred") rests on sixty, and "Just like an hour" says what, not why; the likely question is "why not a hundred, like everything else?". Fix, after "called minutes": "Sixty splits evenly into halves, thirds, quarters, fifths and sixths, which is handy, and hours use sixty too." Visual: on "halves" the 60-tick wedge briefly shades 30, 20, 15, 12 and 10 ticks. Students should accept sixty as a deliberate, useful choice and so trust "decimal part × 60". About 6 s.

3. **Should fix, Decisions and A1 (record the dated sources the anchors rely on).** The ladder chip and the ramp limit are still "to confirm". Checked for this review (18 November 2026): SafeWork NSW's Ladders page (safework.nsw.gov.au/hazards-a-z/ladders) says to position the base of a ladder 1 metre away from the structure for every 4 metres of height (single and extension ladders), so "1 m out for every 4 m up" stands as written. The 1 in 14 ramp limit is AS 1428.1:2009 (ramps up to 9 m between landings; walkways 1 in 20); the standard itself is paywalled and only secondary summaries were read, so keep the card's "An access guideline allows" wording. A1's 7.5 m run is inside the 9 m length, so the comparison is fair. Fix: write both source lines, with the date, into Decisions; Codex confirms the AS 1428.1 clause before voicing (ruling 62).

4. **Optional, scene 4 (the ° ' " key also converts answers).** Students who use the key named once will also use it on answers, and it shows seconds: tan⁻¹ 4 gives 75°57'49.5". Add: "It shows seconds too, so round to the nearest minute." About 3 s.

## Joins

t01b to t02: scene 1 opens on t01b's final frame exactly. t02 to t03: scene 11's drone frame ("40 m", "75 m", the dotted sight line, "how far away?", "what angle?") is t03's stated opening frame, and no value is worked out. "Real problems start with a picture" slightly undersells t01b's shed and ladder, but it does not mislead.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and neither picture carries an angle. A1 asks three things (the ramp's angle, the limit's angle, the comparison) and A2 two, more than 10 s allows, but "Pause here to answer." covers that. Feedbacks give each answer, the reason, short working and one crossed decimal-as-minutes slip ("4°57'", "74°82'"), at about 28 s and 29 s. A2 reuses the ladder plate painted at 4 : 1 (75.96°) under a 74.82° overlay; at 360 px tall the 1° difference will not show, so no change is needed.

## Key notes and length

The five notes cover both conversions, the trap, and the second angle with the borrow. About 458 s; findings 2 and 4 add about 9 s.

No speech, design edits, builds or commits were made.
