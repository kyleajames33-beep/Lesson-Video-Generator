# phys-y12-m5-v10 Revision 3 recording-readiness check

Independent recording-readiness check, 21 November 2026 (Claude reviewer). Source SHA256 `1f66d64a7aaf92950a290d578fd257f23c163d8b6fd2736086b2f77740068e39`.

Compared: the Revision 2 source approved by `p-y12-m5-v10-rev2-error-check.md` (SHA256 `23960497...e889`, commit `f6d0e9e4`) against the current file (Revision 3, commit `fe99a3b7`), by git diff. Text-only review; no build, render or listening.

What changed: Status line; a new "Visual upgrade (Revision 3)" section (stage list A to G, simulation engines, root rules R1 to R4, question-card and notes-scene rules); "Upgrade (Revision 3)" paragraphs on scenes 10 and 12 (exam-style diagrams confirmed as the attempt pictures; the 150 g mass hangs from no mark) and 11 and 13 (navy givens strips); scene 15 heading hold 50 s to 45 s; a recorded kit gap (no engine for turning effects); Revision 3 notes in the length estimate, motion, assets, error-check and revision-log sections.

Narration: all 15 scene strings (build parser rules) are byte-identical to the approved Revision 2 source.

Revision 3 visuals: the slider arithmetic is right (25 × 9.8 = 245 N, so clockwise τ = 245r; anticlockwise 30 × 9.8 × 1.2 = 352.8 N m; balance at r = 1.44 m). The attempt 1 picture removes the only answer-bearing element (the 150 g hang point); the attempt 2 picture shows only the card's forces and distances. Givens strip values match the cards (50 cm pivot, 200 g at 20 cm, 150 g; 20 N at 1.5 m left, 30 N at 1.0 m right). Feedback numbers re-checked: 0.200g × 0.30 = 0.150g × r gives r = 0.40 m, the 90 cm mark; 20 × 1.5 = 30 × 1.0 = 30 N m; N = 50 N up. All named plates exist under `public/`.

Mechanical: 5,657 characters, equal to the sum of the 15 scene strings and to the headline, under 7,000. Bold cues unchanged and in spoken order. Both "Pause here to answer." attempts keep the full question on the card for the whole countdown. No U+2014, U+2061 or U+FFFD. No course labels in narration.

Findings:

1. **Optional.** Scenes 11 and 13 givens strips drop the card's "horizontal" condition (scene 10 card: "for the rule to balance horizontally"; scene 12 card: "pivoted at its centre and is horizontal"), which is why each torque is simply weight times distance. The shrunken card stays on screen, so nothing is lost, but the strips are meant to repeat the card exactly. Proposed fix: scene 11 strip "uniform metre rule, pivot at the 50 cm mark | 200 g at the 20 cm mark | 150 g at which mark? | balances horizontally"; scene 13 strip "light beam, horizontal, pivot at its centre | 20 N down, 1.5 m left of the pivot | 30 N down, 1.0 m right of the pivot".

2. **Optional.** Scene 15 (key notes) still reads "Notes in the role colours, 32 px" and "framed card under the notes", and the "Holds" line still says "key-notes (about 50 s)", while Revision 3 sets "34 px", "the framed memory card beside them" and 45 s. Proposed fix: change "32 px" to "34 px", "framed card under the notes" to "framed card beside the notes" and "about 50 s" to "45 s in all".

Result: 0 blockers, 0 should fix, 2 optional.
