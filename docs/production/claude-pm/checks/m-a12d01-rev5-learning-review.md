# m-a12d01 Revision 5 learning review

Independent reviewer: Codex, 6 November 2026. Written Revision 5 including the four Root decisions after the kit pilot. Source SHA-256: `edb2b1c3d6a86fccf3bc22067b47126f33a593ff32ac1944f3c150e3e7f1e1f5`. No design, narration, lesson or maths-kit edits. Existing reference plates and placeholders inspected in `work/brief195/reference-sheet.png`. No d01 playback, new artwork, voice or render inspected. Human listening remains pending.

The main question is which change affects gradient compared with height, and how to differentiate k e^(ax+b). Entry knowledge is stated and sufficient: the self-derivative of e^x, tangent slope, the chain rule, the constant multiple rule and exponential graphs. The flask explanation needs no prior biology: cells split, so twice the cells give twice the splitting under the stated growth conditions. The units are introduced before the count and rate are compared numerically.

A learner can trace the fast strain from a tangent of rise e and run 1, through the sideways squash to run 1/2 and gradient 2e, then to height 1 and gradient 2. The early flask resolves the prediction with rate e versus 2 at the same starting time, then distinguishes the per-cell factors 1 and 2. Three flasks scale count and rate together. The chain proof gives the reason for the factor a and keeps the inner expression. Example 2 then identifies 5, 2 and 6, obtains 10e^(2x+6), substitutes -3, and obtains 10. Both attempts keep all demands visible during a 10-second countdown with a pause invitation. Feedback is planned at about 24 and 27 seconds, with one crossed mistake each. The key notes have a separate quiet hold.

## Findings

- **195-1, should fix: Scene 11 narration and card; scene 6 heading and repeated slide summaries.** The unqualified statements that b does not change the slopes and the slide changes nothing can mean the slope at the same x is unchanged. At x=0, exp(x) has gradient 1 and exp(x+1) has gradient e. The corresponding moved tangent keeps its slope, and b adds no extra multiplier. The earlier Revision 1 learning review already found this distinction; Revision 5 reintroduces the wording. Keep the moved-point comparison from scene 6. Use the no-extra-factor wording already present in the proof and key notes in the memory card and spoken summary.

- **195-2, should fix: Scene 17 negative-a bullet; Decisions general-family claims; Memory aid check.** After introducing unrestricted k in y=k exp(ax+b), the note says negative a gives negative gradient while y stays positive. Counterexample: y=-exp(-2x) has a=-2, y(0)=-1 and y prime(0)=2. The positive exponential and positive-k flask examples are correct. The general ratio y prime/y also needs nonzero k. State the sign note for exp(ax+b), or explicitly retain positive k for that note and the count analogy. Keep the derivative formula valid for every constant k. Put the nonzero-k condition beside the author-note division, not as an unrelated learner caveat.

- **195-3, should fix: Scene 5, half-rate slider to mirror transition.** The last narrated slider value is one half. The next spoken instruction is to flip the sign to minus two. The visual silently returns the slider to two before reflecting. A learner cannot get minus two by flipping the sign of the preceding one half, and the unspoken reset changes the slope before the promised same-steepness reflection. Give the return to two a short explicit cue, or make the reflection start from the value the narration has just established. Root decisions 1 and 2 already fix window clipping and the readouts during the mirror; retain those.

- **195-4, should fix: Scene list and build ids, Review evidence paths.** The design still points learning_review at the old generic m-a12d01-learning-review.md (Revision 1), and science_check at a generic maths-check path. Brief 195 explicitly requires new rev5 reports. A build following those fields would not use this revision review. Point the two review fields to m-a12d01-rev5-learning-review.md and m-a12d01-rev5-maths-check.md when integrating the findings.

## Maths visual standard, every item

| Item | Source-plan judgement |
| --- | --- |
| 1. Real anchor in the first 20 seconds | Meets in the plan: flask and magnified sample from the first scene, returning to answer the hook and hand off. Root decision 3 selects the existing flask pair. |
| 2. New visual idea every 60 to 90 seconds | Meets in the plan: the longest same-stage block is the graph and squash at 84 seconds; the example boards total 65 seconds. Each changes the reasoning within the block. |
| 3. Genuine simulation | Meets in the plan: count-linked cell division, riding point, tangent triangle and parameter-driven readouts. Actual synchronisation and motion still need playback. |
| 4. Fixed colour roles | Meets in the plan: k amber, a blue, b teal, answer green, mistake red, gradient violet and height ink. Labels carry meaning as well as colour. |
| 5. Phone readability | Planned sizes meet the intended scale: 52 px current working, supporting text 30 px or larger and graph text at least 28 px. Scene 9's 40 px givens differ from the global 44 px givens specification; use the global size in the build and inspect fit. No actual fit pass given. |
| 6. Handwritten teacher annotation | Meets in the plan: short causal tags, circles and arrows, with at most two live tags. |
| 7. g01 worked-example layout | Meets in the plan: separate task, equation and givens, staged working, framed answer and crossed trap. Root decision 4's leader and unused-space repairs still belong to Claude's build. |
| 8. Framed memory aid and brief notes | Framing and separate quiet hold meet the plan. Meaning needs 195-1 and 195-2 resolved before approval. |
| 9. Visual surprise | Meets in the plan: the early flask's rate ticker exceeds the fast strain's, then the per-cell readouts explain why. |

Keep the flask question, matched-point triangle, hook resolution and staged proof. Adding a constant is outside this lesson and is not needed as an extra scene: the main identity is already scoped to y=k e^(ax+b). Do not broaden the lesson to solve that separate case. The k sign condition is needed because its omission makes the existing note wrong.

The source has 6,528 characters using its stated sum-of-scenes convention, with an estimated 562 seconds against the 570-second cap. The estimate leaves about eight seconds, so repairs should replace wording rather than add another explanation. Source text cannot establish timing, reading load, synchronised simulation, or owner acceptance of the maths pilot.

Result: 0 additional learning blockers, 4 should-fix findings shared with the maths report, 1 optional metadata count correction in that report. Resolve the findings and repeat on the exact pilot. This is not a recording or painting pass.
