# Maths S12 c06 Revision 1: independent learning review

19 November 2026. Design `lessons/math-s12-c06.md`, "How does a spreadsheet model a project from its precedence table, and solve problems with it?" Source SHA256 `15df89465de00130951a8efdf107736e55edf2e27bc8df782f5385f93a3061d5`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (c02 to c05: scans, float, the critical path, changes; money-strand spreadsheets: cell references and fill down) as a Mathematics Standard 2 student. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates and need measuring on the Google voice. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 1 should fix, 1 optional).

This is a good lesson. Each column gets its reason before its formula (EFT "is when it finishes if it starts as early as it can"; EST is "the largest of their EFTs" because a job "can't start until its predecessors have finished"; LFT is the smallest of the successors' latest starts), and filling the formal's network boxes in step with the sheet keeps the scans visible rather than hidden in cells. The three checks are practical, and "It's the same critical path our Gantt chart showed" lets the student check the sheet against c04. The what-if scene earns its title: one typed 3 ripples to a finish of 9, the DJ's 4 is soaked up by float, and the typed-8 ghost shows why the finish comes from a formula. Rewording the pack's row-order claim (spreadsheets recalculate by dependency) is right. Recalculated with Python 3.14 (`work/brief-review-standard-cf/verify.py`, `python -I`): formal EST 0, 0, 2, 1, 2, 6, 7; EFT 2, 1, 6, 3, 3, 7, 8; LFT 2, 5, 6, 7, 8, 7, 8; LST 0, 4, 2, 5, 7, 6, 7; float 0, 4, 0, 4, 5, 0, 0; 8 weeks; venue 3 gives 9 with floats 0, 5, 0, 5, 5, 0, 0; DJ 4 gives 8 with E float 2; with venue 3 and G's LFT typed as 8 (E's still a formula), floats of −1 in rows 2, 4, 7 and 8; site card 4 EST 0, 0, 4, 4, 9, 6, 12, EFT 4, 3, 9, 6, 12, 11, 14, LST 0, 2, 4, 5, 9, 7, 12, LFT 4, 5, 9, 7, 12, 12, 14, floats 0, 2, 0, 1, 0, 1, 0, 14 days; F 6 gives 14 (A-D-F-G becomes critical), F 7 gives 15. All correct.

## Findings

1. **Should fix, scenes 4 and 7 (a MAX in the "MIN coming up" column).** The memory aid is "MAX going down, MIN coming up", but the LFT column, the one coming up, contains =MAX($E$2:$E$8) in two of its seven cells (E and G). A student checking a sheet against the aid will see a MAX where the aid says MIN, and the dollar-sign chip adds a new idea in the busiest scene of the video (scene 4 already carries the LFT, successors, the exception, MIN and the LST). Fix: use the finish cell scene 3 already builds. Give it an address (for example E10, "finish: =MAX(E2:E8)"), and make F6 and F8 "=E10". Narration, scene 4: "If nothing waits for an activity, its LFT is the project time, so it just points to the finish cell, never a typed eight." Drop the dollar-sign chip; the typed-8 slip in scene 6 becomes "typing 8 instead of =E10". Then every formula in the LFT column is a MIN or a single reference, and the aid holds. Students should be able to fill the backward column using one rule plus one exception. If root keeps the site's =MAX($E$2:$E$8) in those cells, instead add a clause to scene 7: "The only MAX coming up is the finish itself, for a job nothing waits for." Time neutral either way.

2. **Optional, author's "Numbers to verify" (the typed-8 case).** The list says "F8 and F6 typed as 8", while scene 6 types only F8. Both give the same four −1 rows (checked), but make the list match the scene so the builder seeds the same ghost.

## Joins

c05 to c06: scene 1 opens on c05's final frame exactly. c06 to f01: the final frame drops the strand name from the header, shows the stadium plate with S, A, B, T and the five capacities, slow dots, "how many people a minute can reach the stands?" and the grey "Critical path analysis: done", and no flow total or cut. f01 opens on it. "That's critical path analysis done. Now for networks where something flows through them." marks the change of strand clearly.

## Practice and feedback

Both cards keep the full worded question and every given on screen through the 10 s countdown; attempt 1 names cells E2 and E3, and its small sheet's column order (Activity, Predecessors, Duration, EST, EFT, Float) puts EFT in column E, so the question is answerable. Each feedback (about 23 s and 24 s) gives the answer, the reason and one crossed slip that fits ("D waits for both"; "F had one day of float"). Using the site's card 4 table and its own "Now solve with it" for both attempts mirrors the site.

## Key notes and length

The five notes are the formulas and the checks; key note 3 already states the exception ("the finish if nothing follows"). About 492 s with holds.

No speech, design edits, builds or commits were made.
