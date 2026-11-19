# Maths S11 f04a Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f04a.md`, "How do speed, distance and time connect, and how do we make the units match?" Source SHA256 `ea2f04dafde697b99391010f94a7501fe378e10f5626ad20957c0b4b1cf2239c`.

Written design reviewed by tracing it from its stated entry knowledge (f03a's d = st in three forms; Stage 5 time and length units) as a Year 11 Mathematics Standard student. Checked against rulings 4 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f04.md`. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The hook is well chosen: the tempting 3.10 h gives a believable 91.9 km/h, and "an hour has sixty minutes, not a hundred" names the trap before the clock sector shows it (10 minutes as one sixth of the face, 6 minutes as 0.10 h). The 3.6 is given its reason (1000 m in 3600 s) before it becomes a shortcut, and attempt 1 previews f04b's metres-each-second idea. Ruling 95 (f04a previews f04b) is applied. Recalculated with SymPy 1.14 (26 checks for f04a): 285 ÷ (3 + 10/60) = 90 exactly, slip 285 ÷ 3.1 ≈ 91.9, 0.10 h = 6 min; 45 min = 0.75 h, 18 km, slip 1080; 135 ÷ 60 = 2.25 h = 2 h 15 min; 1000/3600 = 1/3.6; 4.5 ÷ 1.25 = 3.6 km/h = 1 m/s; 60 ÷ 3.6 ≈ 16.7, wrong way 216; A1 25 m/s and 50 m, slip 180; A2 1.6 h, 97.5 km/h, 1.95 h = 1 h 57 min, slip ≈ 114.7; the memory-aid case 12 km and 5 m/s. All correct, with one display problem (finding 1).

## Findings

1. **Should fix, scene 3 (an on-screen equals sign that is not true).** The row reads "speed = 285 ÷ 3.167 = 90 km/h", but 285 ÷ 3.167 = 89.99 (checked). A student who copies the rounded 3.167 into the calculator gets 89.99 and wonders what went wrong, which also undercuts f06's later "keep the full value". Fix: the row becomes "speed = 285 ÷ (3 + 10 ÷ 60) = 90 km/h", matching the spoken "type three plus ten divided by sixty"; keep "≈ 3.167 h" on the row above. Students should see the exact time used, and the rounded value used only as a label.

2. **Should fix, scenes 1 to 3 and f03b's final frame (a red P-plater averaging the P1 limit).** The car carries a coded red "P" (a P1 licence in NSW), and the trip averages exactly 90 km/h for 3 h 10 min from Sydney. The NSW P1 maximum is 90 km/h, so an average of 90 over a trip that starts in city streets means the driver exceeded 90 for part of it. In a strand that is framed around road safety (f04b to f06), the first P-plate example should not model speeding. Fix (no number changes): make the coded "P" green (a P2 licence, maximum 100 km/h) everywhere the car appears (f03b scene 12, f04a, f04b, f05, f06, f08), and in f03b's asset brief change the plate's "white square ... with a thin red border" to a plain white square (the plate is not yet painted). If root prefers to keep red P, change the time instead (for example 285 km in 3 h 30 min, about 81 km/h), which loses the exact 90. Students should meet a lawful P-plater.

3. **Should fix, scene 2 (a codename spoken aloud).** "Using f03a, rearrange it two ways." Replacement: "Rearrange it, the way we did two videos ago, and you get two more forms." The grey chip "f03a: d = st, s = d/t, t = d/s" may stay.

4. **Optional, scene 6 (a second conversion inside the 3.6 scene).** The kayak check asks students to turn "four point five kilometres in an hour and a quarter" into 3.6 km/h while they are absorbing the 3.6 itself. Simpler: "Here's a check. A kayak paddling at three point six kilometres an hour moves exactly one metre every **second**." and drop the grey "4.5 km ÷ 1.25 h" row. About 4 s shorter; the metre tick (the visual surprise) is unchanged.

## Joins

f03b to f04a: scene 1 opens on f03b's final frame exactly (the "P" colour must match whichever way root rules on finding 2). f04a to f04b: scene 12's frame (city road, the car with "60 km/h", the traffic light's red lens ringed, the stopwatch at 1.5 s with "≈ 1.5 s to react", "60 km/h ≈ 16.7 m every second", the chips, no distance on the road) matches f04b's Boundary.

## Practice and feedback

Both cards keep the full question (both parts) on screen through the countdown; picture slots show no distances or times. Feedback 1 (about 19 s) and feedback 2 (about 28 s) give the answers, the working and one crossed slip each. Anchors are everyday (a road trip, an e-bike, a delivery van, a kayak, a coach); no person is drawn.

## Key notes and length

The notes carry all three forms and both conversions in both directions. Narration 4,793 characters by this reviewer's count, about 448 s with holds, 122 s under the cap; under 5,000 is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
