# w02: maths check

Reviewed source SHA256: `ff0329afa796c6b545a881c0d165ec8a1a9280b57d0b96825c574c1fbbd67083`. Independent review by Codex, 16 November 2026. No design edits.

**20 exact calculation checks passed.** No numerical answer correction found.

The six examples recalculate correctly. Simplifying gives (x+3)/(x+4), retaining x != 3,-4; dividing gives (x-2)/x with -2,0,2 excluded; adding gives (5x-1)/((x+1)(x-1)); attempts give x/(x+4) and (x+7)/((x-3)(x+2)).

SymPy 1.14 recalculation uses exact integers and fractions in `work/brief247/check-maths.py`; results: `work/brief247/w02-calculations.json`. Domains and original-denominator restrictions were checked separately from algebraic cancellation. Model limits and root assumptions are retained in the design. Wrong answers are marked slips, not alternate correct answers.

Recount: 6,246 characters in 16 scene strings, matching the declared total; zero em dashes. Design estimate 547 s is under 570 s. This is an estimate, not measured speech. Explicit On-cue order was checked against the scene strings; no unmatched explicit On-cue was found. 

All description syllabus quotes match the crosswalk text exactly.

Learning and shot-plan findings remain in `m-a11-w02-learning-review.md`; a numerical pass does not clear them. Site examples were compared with the local pre-design pack and recalculated; no claim of a new live-site audit is made. No speech, source edits, renders or commits.
