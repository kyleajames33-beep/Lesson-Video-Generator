# w05: maths check

Reviewed source SHA256: `0ec46bbc341942188705d801a85ba954c3193a97e7fa8706a82bd9c5ed0291b8`. Independent review by Codex, 16 November 2026. No design edits.

**28 exact calculation checks passed.** No numerical answer correction found.

Delta = 1600-8T. Targets 210,200,192,180,150 give deltas -80,0,64,160,400 and the stated real prices. Worked deltas 1 and -59, k=+/-6, and attempts m=-2,6 and delta=64 all check.

SymPy 1.14 recalculation uses exact integers and fractions in `work/brief247/check-maths.py`; results: `work/brief247/w05-calculations.json`. Domains and original-denominator restrictions were checked separately from algebraic cancellation. Model limits and root assumptions are retained in the design. Wrong answers are marked slips, not alternate correct answers.

Recount: 5,561 characters in 14 scene strings, matching the declared total; zero em dashes. Design estimate 495 s is under 570 s. This is an estimate, not measured speech. Explicit On-cue order was checked against the scene strings; no unmatched explicit On-cue was found. 

All description syllabus quotes match the crosswalk text exactly.

Learning and shot-plan findings remain in `m-a11-w05-learning-review.md`; a numerical pass does not clear them. Site examples were compared with the local pre-design pack and recalculated; no claim of a new live-site audit is made. No speech, source edits, renders or commits.
