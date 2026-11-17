# Maths S12 a10 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a10.md`, "How do the x-intercepts of a parabola locate its vertex?" Source SHA256 `ebccc3094762c2a6b61422fd0c4a829f05236205013d4ce3f4106e8305762a3b`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a09's matching pairs, axis and sign of a; Year 11 y-intercept and substitution) as a Mathematics Standard 2 student starting Year 12. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 2 optional).

The central idea is caused, not given as a rule: "They're at the same height, zero, so they sit the same distance either side of the axis of symmetry. That means the axis is exactly halfway between them", recalling a09's matching pairs. The visual surprise (the rider pausing at the top exactly as the midpoint marker lands on t = 2) shows the vertex hiding halfway. The y-intercept as c is seen on the probe with the zero terms greying out. Scene 6's graph-only case (up the axis, then across) covers the syllabus's "shown on a graph" honestly. The three slips (dropped sign, no halving, a foot for the top) each get their own crossed board. Recalculated: −5t² + 20t zero at 0 and 4, 20 at t = 2, 15 at 1 and 3, −25 at 5 and −1; x² − 4x − 5 zero at −1 and 5, −5 at 0, −9 at 2, slip value −8 at 3; −(x − 1)(x − 5) = −x² + 6x − 5, 4 at 3; graph-only −(x + 3)(x − 7) ÷ 5, maximum 5 at x = 2; A1 x² − 4x − 12 zero at −2 and 6, −12 at 0, −16 at 2; A2 −2x² + 4x zero at 0 and 2, 2 at 1; panels x² − 4, x², x² + 2 have 2, 1, 0 crossings. All correct.

## Findings

1. **Should fix, scene 1 (straight up, but the graph is an arch).** "A backyard launcher fires it straight up ... and then it falls back down" while the graph is a hill shape. Standard 2 students may have skipped a08 (the only place "a graph is not a picture" is taught), and the classic misreading is that the rocket flies in an arc. Fix. After "... falls back down.", add: "It goes straight up and straight down, but its graph is a hill shape, because time runs across the page." Visual: on that sentence, a faint vertical double arrow beside the rocket plate while the rider dot moves to the right along the curve, hand tag "time runs across". About 105 characters. Students should understand that the curve shows height against time, not the rocket's path.

2. **Should fix, scene 5 (brackets lost by ear).** "y equals minus, x minus one, times x minus five" and "y is minus, two times minus two" can be heard as −x − 1 times x − 5. Fix: "y equals minus, the bracket x minus one, times the bracket x minus five" and "So y is minus, the bracket two, times the bracket minus two, which is plus **four**." Keep the visual's boxed brackets lighting as each is said.

3. **Optional, key line and key note 3 (x₁ and x₂).** "Axis: x = (x₁ + x₂) ÷ 2" uses subscripts that are never said or labelled. Add a grey tag "x₁, x₂: the two x-intercepts" on the memory card and in key note 3.

4. **Optional, feedback 1.** "Substitute. Four, minus eight, minus twelve" skips the step a student would want to hear. Say "Substitute two. Two squared is four, minus eight, minus twelve, is minus sixteen". About 25 characters.

Open decision 2 ("x-intercepts" on a t-h graph): fine with finding 1 applied. Scene 2 says "the axes are t and h, so the t-intercepts are where the height is zero" before any working uses them.

Root ruling 24: the description still carries two codenames. Drop them.

## Joins

a09 to a10 matches (the paddock, launcher and rocket, the curve with "0" and "4" ringed and the "?" at the top). a10 to a11a: the graph with "0", "4", the teal "0", "(2, 20)" and its axis, four "means ...?" bubbles, the grey dashed continuation with "after 4 s?" and "Next: what do the numbers mean?" are a11a's stated opening frame; a11a holds the "after 4 s?" part for a11b, as planned.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's graph marks the three crossings only; A2's marks the two feet, top unlabelled; nothing is answer-bearing. Each feedback gives the answer, the reason and one crossed classic mistake ("x = 4"; "top at x = 2"). Both feedbacks about 22 s.

## Length

5,175 characters (recounted by script), about 478 s with holds, about 383 s of speech before the notes. Findings 1, 2 and 4 add about 170 characters. Low in the band but not thin: every scene carries its own step, and the length matches a single-method Standard video. Under 570 s without rushing.

No speech, source edits or commits were made.
