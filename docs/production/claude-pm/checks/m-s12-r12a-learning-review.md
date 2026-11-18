# Maths S12 r12a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-r12a.md`, "What does a distance-time graph tell us about a journey?" Source SHA256 `fea9a104a77e53be3c7cb5d950a5267ecf44b4d98da51a4db8b1e6c49bca7952`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Year 11 Standard f04 and l01: speed = distance ÷ time, gradient as rise over run; r10: minutes to hours) as a Mathematics Standard student starting Year 12, for both courses (the content is identical). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 0 optional).

This is a strong design and a clear video idea: the car drives the road while its pen draws the graph, so one trip state appears in two views. "Each point says where the car is at that time" is said before any slope is read, the graph is pulled away from "a picture of the road, or of hills", and the gradient is tied to speed in plain words ("divide the distance gained by the time taken"). The car halting while the pen keeps moving makes "flat means stopped, not slow" visible, and the motorbike shows a falling line as coming back. A2's two crossings follow directly from scene 5's riders. Recalculated with SymPy 1.14 (`work/brief-review-standard-r2/verify.py`, `python -I`): 100 km/h; 480 ÷ 90 = 16/3 h (5 h 20 min); arrival 121/12 h (10 h 5 min); 200 km at 2 h; 670 km at 7.75 h; motorbike 24 and 18 km/h; A1 18 km/h and the 0.3 slip; A2 6 km/h out-and-back speeds 9 and 6, 1.5 km at 10 and 45 min; the memory-aid bus, 60 km/h. All correct.

## Findings

1. **Should fix, scene 5 (7.75 h cannot be read off the graph as drawn).** The trip graph's grid is every hour and every 100 km (author note (e)), but the worked reading at 670 km lands at 7.75 h, between grid lines, and the narration simply says "That's seven and three-quarter hours". A student following "go across, then down" lands somewhere between 7 and 8 and cannot tell 7.75 from 7.7 or 7.8, so the answer looks like it came from somewhere else. Every distance on the 90 km/h section lands on a quarter hour (490, 580, 670, 760 km give 5.75, 6.75, 7.75, 8.75 h), so the fix is in the picture. Fix: on the g01 board's graph, add minor ticks every 15 minutes on the time axis and a labelled tick at 670 km on the distance axis; on "then down" the violet rider lands three ticks past 7, hand tag "3 of 4 quarters: 7¾ h". Narration: "...then down. It lands three quarters of the way from seven to eight, seven and three-quarter hours, which is seven hours and forty-five minutes." Students should see that a reading needs the scale's small divisions, which is also how HSC graphs are read. Time: about 3 s.

2. **Should fix, scene 4 (480 km and 5 h 20 min are given without their steps).** "Then the car drives the last four hundred and eighty kilometres at ninety kilometres per hour, which takes five hours and twenty minutes" asks the student to accept both numbers. Neither 880 − 400 nor 480 ÷ 90 is said, and a third of an hour as twenty minutes is the very conversion r10 practised. Fix: "Then the car drives on at ninety kilometres per hour. That's the other four hundred and eighty kilometres. Four hundred and eighty divided by ninety is five and a third hours, and a third of an hour is twenty minutes." Screen: "880 − 400 = 480 km" and "480 ÷ 90 = 5⅓ h = 5 h 20 min" above the existing triangle row. This replaces author note (f)'s choice not to say "five and a third"; saying it once, with its meaning, is what makes 5 h 20 min reachable. Students should be able to rebuild every time on the graph from distance ÷ speed. Time: about 9 s.

## Joins

r11 to r12a matches (the hatchback, the trip card and empty axes; "can one line show the whole trip?" is answered in scenes 2 to 4). r12a to r12b (ruling 44 split): the finished three-section graph with the hatchback badge at (10 h 5 min, 880 km) and a dashed grey start-to-finish line with an amber "?"; no average is worked out, so r12b opens on its own question.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, both graphs are supplied with corners on grid lines, and nothing answer-bearing is marked (no triangles, speeds or 1.5 km line). Each feedback gives the answer, the reason, short working and one crossed slip (about 29 s and 27 s). The motorbike (an existing plate, ruling 52) keeps the delivery context; the bike ride and the jog are everyday and need no plate.

## Key notes and length

Five useful notes; note 5 ("Change minutes to hours before finding km/h") targets the slip students make in A1. About 472 s with holds; the two fixes add about 12 s, to about 484 s.

No speech, design edits, builds or commits were made.
