# Maths S11 f03b Revision 1: independent learning review

19 November 2026. Design `lessons/math-s11-f03b.md`, "How do we make x the subject of y = ax² + c, and which root do we keep?" Source SHA256 `fc281769708d974c778b73ff570b3285426950753b2e1c991fe34ff4dd599c69`.

Written design reviewed by tracing it from its stated entry knowledge (f03a's outside step first and easy-number checks; f01's pizza and (−4)² = 16; Stage 5 square roots) as a Year 11 Mathematics Standard student who may be taking Standard 1. Checked against rulings 3, 4, 9 and 88 to 95 and the pack `pre-design/maths-standard/math-s11-f03.md` (sections 3, 6, 7). The table-top plate `ma11-drop-leaf-table-top-v1.png` was opened. No built preview, playback or human listening is claimed; pace figures are speech-only estimates. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 2 should fix, 1 optional).

The square frame is a good anchor: it makes "side length" concrete and makes −20 cm visibly impossible. Scene 2 earns ± from (−20)² = 400 before any formula, scene 3 checks that −20 still gives $32 ("the maths is happy with it") before rejecting it for a reason, and the slip (square-rooting too early) lands on a negative side. The pizza backwards links to f01 without new content. Ruling 95 (73-character title) is applied. Recalculated with SymPy 1.14 (17 checks for f03b): 0.05s² + 12 = 32 gives s = ±20; $17 and $57 give 10 and 30 cm; slip √32 − 12 ≈ −6.34; √(500/π) ≈ 12.6, about 25 cm across; A1 √(1.2/π) ≈ 0.618 m ≈ 62 cm, slip 0.38; A2 x² = 1.6, x ≈ ±1.26, slip √55 − 15 ≈ −7.58. All correct.

## Findings

1. **Should fix, scene 6 (a Year 12 promise that Standard 1 students will not meet).** "...and you'll see that with curved graphs in Year twelve." Ruling 9 makes a09 to a13 (the parabolas) Standard 2 only, so a Standard 1 student is promised something they never get. Fix: end the sentence at "If the letter is only a position on a graph, both roots can count." and change the grey chip "Year 12: parabolas" to "on a graph: both can count" (keep the y = x² thumbnail and the hand tag). About 5 s shorter. Students in both courses should hear only what is true for them.

2. **Should fix, scenes 3 and 5 (codenames spoken aloud).** "like f03a" and "Remember f01's pizza" will be voiced as letters and numbers. Replacements: scene 3, "Now peel the formula from the outside in, the way we undid the courier's formula." Scene 5, "Remember the pizza from the first video, A equals pi r squared?" The grey chips may keep their codenames (accepted pattern).

3. **Optional, attempt 1 ("outdoor" table).** The plate is a round timber drop-leaf table top with a visible leaf seam; it reads as an indoor table. Replace "A round outdoor table top" with "A round table top" in the narration, the card and the model answer. No length change.

## Joins

f03a to f03b: scene 1 opens on f03a's final frame exactly. f03b to f04a: scene 12's frame (the country road, the P-plate car about 640 px, "Canberra 285 km" with "about 285 km", "3 h 10 min", "Average speed?", "3 h 10 min = 3.10 h?", no speed) matches f04a's Boundary. See f04a finding 2 on the colour of the coded "P"; if root takes it, this frame's "P" changes with it (the frame and f04a's opening must match).

## Practice and feedback

Both cards keep the full question (all parts, with the formula) on screen through the countdown; the picture slots show no measurement. Feedback 1 (about 25 s) and feedback 2 (about 28 s) give the answer, the reason for rejecting the negative root, and one crossed slip each. A2 (c) is answered in one plain sentence, which is the skill the syllabus names.

## Key notes and length

The notes are short and carry the general form x = ±√((y − c) ÷ a) and the decision rule. Narration 4,677 characters by this reviewer's count, about 438 s with holds, 132 s under the cap; under 5,000 is accepted by ruling 95. No em dash.

No speech, design edits, builds or commits were made.
