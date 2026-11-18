# Maths S12 b07 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-b07.md`, "When can we trust a prediction from a line of best fit?" Source SHA256 `282c5dd859203ce6b927eb8699fdc9e0e44b4e26d41eda464624e9c03a47775f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge twice: as a Standard 1 student arriving from b04a's right panel (Year 11 l04 and b04a only: no equation, no r) and as a Standard 2 student arriving from b06. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A strong closing video for the strand. "Inter means between, extra means beyond" gives the words their meaning; "twenty-seven isn't in the table, but it's inside the range" heads off a common confusion. The two extrapolations are well chosen: −13 is plainly impossible, while 197 is plausible-looking and still untrustworthy, with reasons a student can picture (the freezer runs out, fewer people come on a dangerously hot day). Scene 6 then stops students thinking interpolation is automatically safe, and the three-part comment gives them an exam sentence. Every prediction is read from the graph, so Standard 1 loses nothing; Standard 2 rows are grey and tagged. Recalculated (`work/brief-review-standard-b/verify.py`, `python -I`): 89, −13, 197, 107 and −1 on y = 6x − 73, zero at 12.17; least squares −7.0517 at 10, 189.0690 at 45; battery 25% and 109%; canteen 54 and 86 on the card line, 53.900 and 85.941 by least squares; café least squares exactly y = −2x + 135, mean point (20, 95), r = −0.470969. All correct.

## Findings

1. **Should fix, scene 7 (the worked example is one 74 s board under an oversized heading).** At 982 characters this is the strand's longest scene, and its task strip repeats the whole problem (range, equation, r, both times, the demand) while the givens card shows the range, the line and r again. The project rule is to separate the short task, the equation and grouped givens, and to show one reasoning stage at a time. Fix: task strip "Predict the battery used after (a) 60 min and (b) 300 min. How reliable is each?"; keep the givens card as it is; run (a) and (b) as two stages on the same board, with (a)'s framed result kept small at the top when (b) begins and (a)'s guides cleared. No narration change; about 4 s more settling. Students should be able to follow one prediction at a time while the facts they need stay in one place.

2. **Optional, attempt 2 (the card tells the student the strength).** The card and narration say "the points are widely scattered about the line", which hands over the judgement the slip is about. The graph already shows the scatter (and Standard 2 has r = −0.47). Remove the phrase from the card and the narration, so the student must read the strength from the picture; feedback 2 already says it.

3. **Optional, attempt 1 (the canteen line again).** The same card line as b04a attempt 2, through the first and last points. If b04a takes its optional clause, nothing more is needed here.

## Joins

Opens on the shared frame (b04a's right panel for Standard 1, b06's full-width version for Standard 2); the label and chips fade on the first sentence and nothing in the narration assumes b05 or b06. Final frame matches decisions file section 3 exactly, and p01 scene 1 and its Boundary copy it (header swap, sixth row fades, the slip stays). The narration says only "a twenty per cent chance of rain" (ruling 67). Standard 1 path b01, b02, b03, b04a, b07, p01 is continuous.

## Practice and feedback

Both cards keep the full worded question and a graph on screen through the countdown. A1's graph draws the line solid across the whole axis with no band, so it does not answer (b). Feedbacks about 30 s and 29 s, at the top of the range, each with one crossed slip ("40 is interpolation: it's close to 34"; "reliable: it's interpolation"). Canteen drinks, a café and a phone battery are everyday anchors, tagged invented.

## Key notes and length

Five notes, including the three-part comment. About 547 s, 23 s under the cap; finding 1 adds about 4 s. The design's named trims cover any overrun.

No speech, design edits, builds or commits were made.
