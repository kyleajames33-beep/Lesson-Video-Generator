# w07: maths check

Reviewed source SHA256: `3492570c1d7b4bf47027d814a4f2946fb73d43f1fa5b56ebd1c83f7962763c7a`. Independent review by Codex, 16 November 2026. No design edits.

**16 exact calculation checks passed.** No numerical answer correction found.

Sideways parabola, circle and square-root cases, including x=0,1,4 and y=+/-sqrt(5), check. The table and f(3)=9 handoff check. Arithmetic passes do not resolve the reversed-mapping blocker.

SymPy 1.14 recalculation uses exact integers and fractions in `work/brief247/check-maths.py`; results: `work/brief247/w07-calculations.json`. Domains and original-denominator restrictions were checked separately from algebraic cancellation. Model limits and root assumptions are retained in the design. Wrong answers are marked slips, not alternate correct answers.

Recount: 5,526 characters in 14 scene strings, matching the declared total; zero em dashes. Design estimate 493 s is under 570 s. This is an estimate, not measured speech. Explicit On-cue order was checked against the scene strings; no unmatched explicit On-cue was found. 

All description syllabus quotes match the crosswalk text exactly.

Learning and shot-plan findings remain in `m-a11-w07-learning-review.md`; a numerical pass does not clear them. Site examples were compared with the local pre-design pack and recalculated; no claim of a new live-site audit is made. No speech, source edits, renders or commits.
