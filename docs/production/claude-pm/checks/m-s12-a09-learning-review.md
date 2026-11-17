# Maths S12 a09 Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-a09.md`, "What shape does a quadratic make, and where are its vertex and axis of symmetry?" Source SHA256 `8bdbf649b0f1f9d2da7392caef599cddd63c82e654ec7ebd1f948d35a8169e92`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (a05's four representations; Year 11 substitution, y = ax² + c and graphing) as a Mathematics Standard 2 student starting Year 12, including one who skipped a08. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. Maths was recalculated with SymPy 1.14 (`work/brief-review-standard-a2/verify_a07_a13.py`, `python -I`); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 2 optional).

A good design. The footbridge cable turns the site's 8, 5, 4, 5, 8 table into a real object, and the matching pairs are linked by arcs (and lit on the plate's hangers) before the words "vertex" and "axis" are used, so the middle line is seen first and named second. The fold along x = 2 makes "mirror halves" visible. "A point versus a line" is said, tagged and then tested by attempt 1's crossed slip. The negative-square slip is shown as a cause of broken symmetry (the arc snapping with no partner), which gives students a self-check. The app scene is honest that HSC calculators do not graph. Recalculated: x² − 4x + 8 at 0 to 4 gives 8, 5, 4, 5, 8, first differences −3, −1, 1, 3, second 2; at x = 3, 9 − 12 + 8 = 5; x² − 2x − 3 at −1 to 3 gives 0, −3, −4, −3, 0, slip −2; −x² + 6x − 5 = −(x − 1)(x − 5), vertex (3, 4); A1 second differences 2, vertex (3, 1); A2 5, 8, 9, 8, 5, vertex (2, 9); a10 handoff −5t² + 20t zero at 0 and 4. All correct.

## Findings

1. **Should fix, scene 5 (why the sign of a decides is not explained).** The narration says the parabola opens up for positive a and down for negative a, then "Only the sign of a decides which way it opens." The design's cause chain (5) says "the x² term dominates for large x", but no sentence says so. A student will ask why a, and not the "+ 8", decides. Fix. After "... like a hill.", add: "Here's why. Far from the middle, x squared gets huge, so a times x squared takes over. If a is positive, both ends shoot up. If a is negative, both ends head down." Visual: at a = 1 and again at a = −1, arrows on both ends of the curve with small readouts at x = 3 ("a x² = 9", then "−9"). About 165 characters (about 12 s); use scene 2's listed reserve trim (the second-differences sentences, keeping the grey strip) if the take runs long. Students should understand that the sign of a decides because the x² term outgrows every other term.

2. **Optional, scene 1 ("Here's that footbridge").** Ruling 20 accepts that Standard 2 students who skip a08 meet this frame cold. "Here's a footbridge." costs nothing and suits both groups.

3. **Optional, scene 6 and feedback 2 ("A is minus one").** By ear, "A is minus one" can sound like the article. Write "a, the number in front of x squared, is minus one" in scene 6, and add a voicing note to say the letter a as "ay" in scenes 5, 6 and feedback 2.

Open decision 2 (hanger numbers as x): keep. The narration numbers the hangers before the table appears, and the table's first row reads "hanger x", so nobody needs x in metres.

Root ruling 24: the description still carries three codenames. Drop them.

## Joins

a08 to a09 matches: a09 opens on a08's two-route frame and fades the Standard 1 panel on its first sentence; the left panel stands alone (ruling 20). a09 to a10: the paddock strip, launcher and foam rocket, the curve on t 0 to 5 s and h 0 to 25 m with no grid, "0" and "4" ringed amber, the "?" at the top and "Only the crossings are shown: where is the top?" are a10's stated opening frame, and a10's first line picks it up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1 shows the table with no column marked; A2 shows an empty table; nothing is answer-bearing. Each feedback gives the answer, the reason and one crossed classic mistake ("vertex: x = 3"; "upward, because of + 5"). Both feedbacks about 24 s.

## Length

5,672 characters (recounted by script), about 514 s with holds, about 421 s of speech before the notes. Finding 1 adds about 12 s. Under 570 s without rushing; scene 2 (783 characters, about 59 s) is the longest and has a named trim.

No speech, source edits or commits were made.
