# Maths S12 a13 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a13.md`, "How do we build and use a reciprocal model, and where does it fail?" Source SHA256 `8c8862651242cd4f9560dbe3bd4bf981ebeaea43c87b6d5afeae612fdad752bb`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a12's y = k/x and multiply test; Year 11 changing the subject and substitution; the two-part limitation from a07 and a11b) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 3 optional).

The four-step build is clear and discovers k as the trip's 120 km ("Speed times time is distance"), so k is a real total rather than a fitted number. "An hour has sixty minutes, not a hundred" is the right reason for 1.2 h = 1 h 12 min, with a clock face to see it. The holiday-house rounding is caused by the $300 share breaking the $250 limit, and the speed slider climbing to 120 hours and "never arrives" makes the zero-speed limitation seen, with both the practical and the divide-by-zero reasons said. Recalculated: 40 × 3 = 60 × 2 = 80 × 1.5 = 120 × 1 = 120; 120/100 = 1.2, 0.2 × 60 = 12; 120/2.5 = 48; 1,200/250 = 4.8, 1,200/4 = 300, 1,200/5 = 240; 120/s at 120, 40, 10, 1, 300 gives 1, 3, 12, 120, 0.4; mowers 3 × 2 = 6, 6/4 = 1.5, 0.5 × 60 = 30 (pack (c): n > 6, so 7); muffins 240/16 = 15, 240/7 = 34.2857, 34 × 7 = 238, 2 left, 35 × 7 = 245. All correct.

## Findings

1. **Should fix, scene 6 (the "same average speed" limitation contradicts the model).** s is the average speed (scene 1, the site's `we-1`), so T = 120/s is exactly true for any real trip: traffic and stops lower the average, they do not break the model. "The model assumes the car keeps the same average speed the whole way. Real trips have traffic, corners and stops, so the real time is usually longer" therefore teaches a limitation that is not one, and a student who understands average speed will be confused. Fix. Narration: "And the model only works if the car can really average that speed. Traffic, corners and stops pull the real average down, so a trip planned at a hundred kilometres an hour takes longer than the model says." Limitation card: amber "you can choose the average speed"; violet "traffic, corners and stops pull the real average down, so the trip takes longer". Also give average speed its plain meaning in scene 1 (the design's list promises it): "average speed, the whole distance divided by the whole time". About 100 characters in all. Students should understand that the limitation is in choosing s, not in the formula.

2. **Optional, scene 4 (the rearrangement in words).** "If T equals a hundred and twenty over s, then s equals a hundred and twenty over T" is a symbol move. Say the reason first: "Speed times time is a hundred and twenty, so speed is a hundred and twenty divided by the time."

3. **Optional, attempt 2 wording.** "boxes that each hold the same number of muffins" conflicts with part (c), where the 35th box holds 2. Use "A bakery packs 240 muffins into identical boxes. The number of boxes B varies inversely with the number of muffins per box b." on the card and in the narration.

4. **Optional, key line "Round up for whole things".** It drops the condition the narration keeps ("to get a job done"); "how many full boxes can you fill?" rounds down. "Round up for whole things you need" keeps the condition in five words.

Open decision 2 (pack question 1 (c) and (d) dropped): agree. Scene 6 teaches the limitation idea, and a third part would push feedback 1 past 30 s. Open decision 3 is resolved by finding 1.

Root ruling 24: the description still carries three codenames. Drop them. Ruling 25 (the mowers) is applied.

## Joins

a12 to a13 matches (the road, the hatchback, "40 km/h: 3 h", "100 km/h: how long?"). a13 to i01: no i01 design exists. The final frame's coin jar, empty "balance ($)"/"years" axes and grey chip "the same amount added each year: what shape?" match a08's right panel word for word, so Standard 1 viewers (a08 then i01) and Standard 2 viewers (a13 then i01) arrive at the same picture. The narration's "A straight line, again?" is posed as a question, so i01 is still free to choose its anchor and numbers.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is empty axes; A2's is empty; nothing is answer-bearing. Each feedback gives the answer, the reason and one crossed classic mistake ("1 h 50 min"; "34 boxes"). Feedback 1 about 22 s, feedback 2 about 28 s.

## Length

5,271 characters (recounted by script), about 486 s with holds, about 391 s of speech before the notes. Finding 1 adds about 8 s. Under 570 s without rushing.

No speech, source edits or commits were made.
