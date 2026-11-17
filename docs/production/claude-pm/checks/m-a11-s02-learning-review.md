# Maths A11 s02 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s02.md`, "How do intersections, unions and Venn diagrams sort overlapping sets?" Source SHA256 `b3b7f651ae0730dc40639e97c6948db06c6b28678d9fcb9d870a2744cf5a1259`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s01: braces, |A|, U, the complement, ∅) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The cone with one scoop of each makes "in both" concrete in one object, and the braces bending into overlapping loops turns it into the Venn idea before any symbol. "In maths, 'or' includes both" is said before the union is counted, and the crossed 4 + 3 = 7 gives the reason the union is listed once. Scene 3 states the key cause plainly ("Every element of U lands in exactly one region"), which is what s03 and s05 rely on. Scene 4 fills from the middle because each circle's total includes the overlap, and the disjoint scene separates disjoint from complement with the strawberry cone. The cap and cup naming is light and useful (root ruling 37). No gambling. Recalculated: {1, 2, 3, 4} ∩ {3, 4, 5} = {3, 4}, union {1, ..., 5}; outside in U = {1, ..., 7} is {6, 7}, A̅ = {5, 6, 7}; cones 22, 8, 12, 42, neither 8, V̅ = 30; P ∩ E = ∅; A1 26, 13, 39, outside 12; A2 {6, 12}, {2, 3, 4, 6, 8, 9, 10, 12}, A ∩ C = ∅. All correct.

## Findings

1. **Should fix, scene 4 (two different thirties, back to back).** The scene finds "no vanilla" as V̅ = 22 + 8 = **thirty**, then immediately says "Writing thirty in the chocolate only region is the slip." The slip's 30 is the chocolate total, a different number from the answer just framed in green. A student will hear "thirty is wrong" straight after "thirty is the answer". Fix: move the slip to where it belongs, right after "So chocolate only is thirty minus eight, twenty-two.": "Writing the whole thirty in the chocolate only region is the slip. That counts the eight twice." Move the cue "slip" and the red slip "30 in 'C only'" with it, and end the scene on the V̅ row. Students should see the slip as a mistake about the chocolate total, not about the no-vanilla answer.

2. **Should fix, scene 5 ("leaving out two").** "Let E be the even numbers under ten, leaving out two" is an unexplained choice; a student will ask "why leave out two?", and the answer is the overlap the scene is about. Fix: "Let E be the even numbers under ten, but leave out two, because two is prime and even and would sit in both. So E is four, six and eight." Visual: on "sit in both" a grey token "2" hovers in the overlap and fades. Students should see that removing the only shared element is what makes the sets disjoint.

3. **Optional, scene 4 (say the surprise).** The design's visual surprise (30 + 20 is exactly 50, yet 8 cones are outside) is shown but never said. One sentence after the neither row would plant s03's question: "Thirty plus twenty is fifty, the whole shop, and yet eight cones had neither. The eight in the middle explain it."

## Open decisions answered

- (1) U = {1, ..., 7} added to `we-1`: keep; it gives four non-empty regions and the A̅ shading in scene 3 needs it (root ruling 37).
- (2) Cap and cup: keep; named once each, then the tags "∩: in both" and "∪: in either, or both" carry the meaning.

## Joins

s01 to s02 matches: s01's final frame (cabinet, cone, braces C and V, "this cone: in C? in V?", "Next: sets that overlap") is s02's opening frame, and "So which set does this cone belong to? Both." answers s01's last question. s02 to s03: the library trolley plate with "print book: 26 members", "ebook: 19 members", "members: 36", "26 + 19 = 45?", "Next: counting a union", "?" is s03's opening frame; "Every member borrowed at least one" is said here and kept on s03's boundary.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. Both pictures are empty labelled Venn diagrams; nothing is answer-bearing. A1 practises scene 4 (fill the middle first) plus "exactly one"; A2 practises scenes 2 and 5. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 26 s, feedback 2 about 25 s.

## Pace

About 387 s of speech before the notes, about 478 s in all. Scene 4 is the longest (867 characters, about 65 s) and carries two questions; finding 1 reorders it without lengthening it. Not rushed.

## Year 12 handoff check

No Year 12 design assumes s02 directly; s04 and s05 read ∩ and ∪ as events and use disjoint as mutually exclusive, both taught here.

## Site link

`probability-and-data/lesson12.sa.html` matches the outline. Correct.

No speech, source edits or commits were made.
