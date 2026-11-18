# Maths S12 t04 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-t04.md`, "How do true bearings and compass bearings describe a direction?" Source SHA256 `9b8f28875ce297e679f2927ec3b63651a3b85879992e78412e17a706b2348999`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (Stage 4: a full turn is 360°, a straight angle 180°, a right angle 90°) as a Mathematics Standard student starting Year 12. Standard 1 and Standard 2 share every word. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional). The teaching itself passes; the one should-fix is a colour clash at the join into t05.

A clear, well-built video. Each convention comes with its reason: one starting direction and one turning direction give every direction a single number; three digits keep bearings unmistakable; starting from the nearer of N or S means a compass bearing never turns more than 90°. The same arm read two ways (the live "075°T" beside "N75°E") shows that a true bearing and a compass bearing describe one direction. Conversions start from a sketch, the four quarter rules come only as a summary after an example, and "from" is taught by drawing a new north line where you stand, with the half-turn landing on the homestead. Checked with SymPy 1.14 (`work/brief-review-standard-t1/verify.py`, `python -I`, 0 failures): 180 − 155 = 25, 360 − 65 = 295, 180 + 35 = 215, 180 − 35 = 145, 155 + 180 = 335, 295 − 180 = 115, 360 − 304 = 56, 304 − 180 = 124, 180 − 124 = 56, 215 − 180 = 35; the plate pins from (800, 800) at 200 px per km lie at 74.96° (1.6 km), 155.00° (1.8 km), 295.08° (1.9 km) and 46.40° (2.9 km). All correct.

## Findings

1. **Should fix, scene 11 (the ute's legs change colour between t04 and t05).** t04's final frame labels the north leg "2.0 km" amber and the east leg "2.1 km" violet, and t05 scene 1 pulses them in those colours. Then t05 scene 2 recolours them, north violet and east amber, because from the homestead's angle the east leg is opposite (amber) and the north leg adjacent (violet). A student tracking colours sees the legs swap for no reason. Fix: use t05's roles from the start: in t04 scene 11 (and the decisions file's join line) "2.0 km" violet, "2.1 km" amber; t05 scene 1 pulses them in the same colours (t05 finding 1). No time change.

2. **Optional, scene 5 ("If the bearing is a hundred and eighty or more, subtract instead").** Give the reason: "so the answer stays between zero and three sixty". About 2 s.

3. **Optional, spoken sums.** Scene 3 says "a hundred and eighty take away a hundred and fifty-five", but scene 5 and the feedbacks say "one five five plus one eight zero is three three five". Sums in digit-by-digit form are harder to follow by ear. Say the sum in ordinary numbers and then name the bearing: "a hundred and fifty-five plus a hundred and eighty is three hundred and thirty-five, so three three five degrees true". Check on the voiced take.

## Joins

t03 to t04: scene 1 opens on t03's final frame exactly. t04 to t05: scene 11 matches t05's stated opening frame (the far paddock gate pin, the ute badge, the dotted track, the dashed "?" line, both chips), apart from finding 1's colours. No value is worked out. Housekeeping: open decision 2 says "narration never says 'tee'", but scene 2 does say "written zero seven five degrees T" and "T means true". That is right (it names the letter once); correct the note.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown, and both pictures show only a centre point and a north line. A1 (304°T to compass, and back) and A2 (three parts, including "from the waterfall") practise every taught conversion; A2 asks for three answers in 10 s, which "Pause here to answer." covers. Feedbacks give each answer, the reason (which quarter, add or subtract), short working and one crossed slip ("056°T" for the return; "145°T" for south-west), at about 28 s and 29 s. The choice of A2's slip, so it is not (c)'s correct 035°T, is right. A harbour ferry and a bushwalk campsite are fair anchors. Leaving out the wind aside (ruling 62) costs nothing here.

## Key notes and length

Five short notes, including the named directions (MS-46) and "A from B: stand at B". About 468 s; no fix changes the length materially.

No speech, design edits, builds or commits were made.
