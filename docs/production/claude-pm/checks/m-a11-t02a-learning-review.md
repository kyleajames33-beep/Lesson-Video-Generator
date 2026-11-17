# Maths A11 t02a Revision 2: independent learning review

17 November 2026. Design `lessons/math-a11-t02a.md`, "How do angles of elevation and depression find heights and distances?" Source SHA256 `da07470531f541899baea12b3480780bafe03440f28bb8927538e18d7cb31f0f`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (t01's exact values; Year 10 SOH CAH TOA, inverse ratios, elevation and depression) as a student starting Year 11. Concentrated on the material new in Revision 2 (attempt 2 and its feedback, scene 4's divide sentence, scene 3's last sentence, the memory card's second line and the handoff), then re-read the whole video as one lesson. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (below); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: good, with two should-fix items** (0 blockers, 2 should fix, 3 optional).

This is now a focused, well-paced lesson with one question. The cause chain is clear and in order: the two sides involved pick the ratio, where the unknown sits picks multiply or divide, the inverse turns a ratio back into an angle, and parallel horizontals make depression equal elevation. The new attempt 2 is a good choice: it asks for the one skill the worked examples model only once (an angle by inverse tangent), it keeps every demand on the card, and its feedback gives a reusable sense check ("It's small because the tree is much shorter than the distance") and a crossed slip with its cause (69° is the angle at the top). The new memory line ("Unknown on top: multiply. On the bottom: divide.") is earned by scenes 1 and 4, which now both say the algebra aloud. The handoff is short, sets up one question, and its frame is exactly t02b's opening. The main fix is scene 4's crossed slip, which crosses out an angle that is actually correct.

Recalculated (`work/brief-review-t02/verify.py`, SymPy 1.14, `python -I`): 40 tan 52° = 51.197665; 51.197665/65 = 0.787656 (≈ 0.788), tan⁻¹ = 38.2260°; slip tan⁻¹(51.197665/25) = 63.974° (63.975° from 51.2, both ≈ 64°); 18/tan 27° = 35.32699; 90° − 27° = 63°; 18 tan 27° = 9.171; A1 30/tan 12° = 141.1389, slip 30 tan 12° = 6.377; A2 15/40 = 0.375, tan⁻¹(0.375) = 20.5560°, tan⁻¹(40/15) = 69.4440°, sum 90°. All correct. Narration recounted with `work/brief-resolve-t/count.py`: 4,359 characters, 11 scenes, per-scene counts as stated. No em dash in the file.

## Findings

1. **Should fix, scene 4 (the crossed slip crosses a true angle).** The red slip reads "depression measured from the vertical: 63°", crossed, with the narration "Measuring depression down from the vertical is the slip." But 63° is a real angle in this triangle: it is the angle at the clifftop between the cliff face and the sight line. A student who has just seen the side view may reason "tan 63° = d/18, so d = 18 tan 63°", which gives 35.327 m, exactly the right answer (checked). Seeing that 63° crossed out, the student will ask "what is wrong with 63°?" and may conclude that the angle at the top cannot be used. The classic slip with a given depression is placing the given 27° against the cliff face, which gives d = 18 tan 27° ≈ 9.2 m (author note (b) already has this value, "not shown"). Fix. Visual: on "slip" a red 27° arc draws at the top between the cliff face and the sight line, with the red row "tan 27° = d/18 ⇒ d ≈ 9.2 m", both crossed, caption "depression is from the horizontal". Narration: "Putting the twenty-seven degrees against the cliff face, instead of below the horizontal, is the slip. It gives about nine metres." Update author note (b), "Numbers used" (slip ≈ 9.2 m) and the decisions line "depression from the vertical (4 crossed)". Students should be able to place a given depression at the right place in the triangle, and see that the angle at the top is 90° minus it, not a wrong angle.

2. **Should fix, attempt 2's picture (a coded tree).** The picture slot asks for "a vertical line '15 m' with a small coded tree outline". The owner's rules ask for painted plates for real objects and HSC-style diagrams with no coded clip-art. A coded tree icon is the kind of cheap coded object those rules exclude, and it adds nothing a label cannot carry. Fix: draw the HSC-style side view only, with the vertical line labelled "tree, 15 m" (amber in feedback), level ground "40 m" to P and the angle "θ" at P; in feedback 2 the small arc at the top marks the other angle as now. Students lose nothing, and the diagram looks like the exam paper they will meet.

3. **Optional, scene 1 opening frame (one element of t01's final frame is not listed).** t01 scene 13 draws "a dashed vertical up the cliff face with chip 'cliff height h = ?'". t02a's boundary and scene 1 list the horizontal, the sight line, "52°" and all four chips, but not the dashed vertical. Fix: add the dashed vertical to the boundary's list, and have that same line turn amber when the triangle's sides colour ("the cliff face from the water to the top amber"). Students should see the h they were asked about in t01 become the opposite side.

4. **Optional, scene 5 memory line ("On the bottom: divide").** A student copying "divide" may ask "divide what by what?". A1's own slip shows the danger: a student who remembers only "divide" may write tan 12° ÷ 30. Fix: put the two finished forms from scenes 1 and 4 in the card's left slot under the cliff ("h = 40 tan 52°", "d = 18 ÷ tan 27°"), or make the key line "Unknown on top: multiply. On the bottom: known ÷ ratio." The aid's assumptions check out: it holds for sine and cosine too, with one unknown side and a non-zero ratio, and it supports a new case (A1).

5. **Optional, scene 1 (the ratio choice is never contrasted).** "Choose the ratio from the two sides involved" is the lesson's first cause, and key note 1 repeats it, but every case in the video (scenes 1, 2, 4, A1 and A2) turns out to be tangent. A student may leave thinking "elevation problems use tan". Fix (one sentence, no new example): after "Opposite and adjacent means tangent", add "If we knew the length of the sight line instead, opposite and hypotenuse would mean sine." Visual: a faint ghost tag on the sight line, "if known: sin", that fades on "tangent". Students should see that the sides, not the topic, choose the ratio.

## Earlier findings (t02 Revision 1 review) belonging to t02a

- **1 (multiply step not said): resolved.** Scene 1 now says "So tangent fifty-two degrees is h over forty. h is on top, so multiply both sides by forty", with the tag "unknown on top: multiply"; scene 4 matches it with "d is on the bottom, so multiply both sides by d, then divide by tangent twenty-seven degrees" and the tag "unknown on the bottom: divide".
- **2 (the triangle does not close): resolved.** The 40 m and the sight line start at the yacht's bow waterline point in t01 scene 13, t02a's boundary, scenes 1 to 3 and kit addition 2; the right angle is at the cliff's foot. The error-check brief's item 3 asks Codex to confirm it.
- **5 (split): resolved** as root's decision 1. One main question; about 409 s with holds and about 322 s of speech.
- **6 (spoken and written decimals): resolved.** Row "tan θ ≈ 0.788" matches "about zero point seven eight eight".
- **7 (the same cliff plays an 18 m cliff): resolved.** The 18 m example is on a coded HSC-style side view and the narration says "drawn the way exam questions draw it". (Finding 1 above concerns that scene's slip, not its picture.)

## Joins

- **t01 to t02a:** the cliff, the yacht 40 m out, the waterline geometry, "52°" and all four chips match, and the narration picks up t01's last question ("how high is the cliff"). The dashed vertical is the only element not carried in the list (finding 3).
- **t02a to t02b:** scene 10's frame (coded sea map, grid 1 km = 48 px, no coastline; the top-view yacht at 120 px at "O"; dashed north line "N"; a dotted heading ray 40° clockwise from north, no arc, no number; chips "which way?", "Next: bearings", "?") is exactly t02b's boundary, and t02b scene 1 names the 40° heading "zero four zero degrees". The question "how do we say which way the yacht is heading?" is answered in t02b's first scene. Good.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture shows the 30 m cliff and the 12° depression only; A2's shows 15 m, 40 m and θ only; nothing is answer-bearing. Each feedback gives the answer, the key reason, short working and one crossed classic mistake with its cause, in about 29 s and 28 s, inside the owner's 15 to 30 s. A2 is a bounded decision the lesson has taught (scene 2) without being a copy of it: the student must pick the ratio and use the inverse, and the crossed 69° tests whether they placed the sides relative to the right angle.

## Later-video check

t02b relies on "the two sides involved pick the ratio" (scene 5: "opposite 9, adjacent 12: tan") and on inverse tangent; both are taught here. t03 recalls "t02a (SOH CAH TOA for acute angles)"; delivered. t05 to t07 assume ratio choice from the sides involved; finding 5 would strengthen that hand-on.

## Site link and evidence paths

lesson04 (`we-1`) is the YouTube link, with lesson09's elevation and depression card cited; this fits the video's content (root's decision 1). The design's "Review evidence paths" name `checks/m-a11-t02-learning-review.md` for both parts; root may add this file (`checks/m-a11-t02a-learning-review.md`) as t02a's Revision 2 review.

No speech, source edits or commits were made.
