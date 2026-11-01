# Brief 132: reviews of math-a12-d03, an error check of d02 Revision 2, and the reflection kit part

Read `00-standing-rules.md` and briefs 130 and 131 first, and use the same methods and file formats. This brief can run alongside any other.

## 1. math-a12-d03: learning review and maths check

`lessons/math-a12-d03.md` is at Revision 1; its review key is `m-a12d03`. It follows the d01 and d02 templates and was written after both sets of template findings.

**Root decisions** (confirm only):
- The proof is not used as an attempt, because it would repeat scene 7; its exam form is key note 3.
- "Natural log" stays spoken in full until the voice pilot.

**Learning review.** Follow `docs/production/student-learning-review.md`, tracing from the entry knowledge in `docs/production/maths-a12-video-route.json`. Check that:
- the reflection argument (slope becomes its reciprocal; the height on e^x becomes the x-coordinate on ln x) is clear before the rule and the proof;
- the ln(3x) dial surprise is clear;
- the x > 0 domain is never broken on screen;
- d01 and d02 are recalled, not re-taught;
- neither attempt card gives away its answer.

Repairs must be length-neutral or name a cut, because the design sits at about 570 s. Give template findings separately.

**Maths check.** Recalculate every value:
- the gradients ½, ¼ and 2;
- the tangent triangle through the reflection;
- ln(3x) having derivative 1/x;
- 3 ln x having gradient 1.5 at x = 2;
- attempt 1 giving −2 (with the crossed −2.5);
- attempt 2 giving f′(x) = 3/x and x = ½.

Also check:
- that the chain-rule proof on e^(ln x) = x matches the 2024 point;
- the memory aid's scope;
- every quoted syllabus point word for word, with its codename.

**Route entry knowledge:** scenes 4 to 6 rely on the Year 11 point about the graphs of e^x and ln x being reflections in y = x. Find its exact official wording, codename and source HTML, and add it to d03's `entryKnowledge` in `docs/production/maths-a12-video-route.json` in the same format as the existing entries. Edit only that array.

Add the design's confirmed site findings to `site-corrections-maths-a12.md`.

Write `checks/m-a12d03-learning-review.md` and `checks/m-a12d03-claude-science-check.md`.

## 2. Error-only check of d02 Revision 2

Use brief 112's method on `lessons/math-a12-d02.md`. Confirm:
- that the brief 131 repairs are complete (exact identities, the base-one exception, attempt 2's sign wording, run 0.5);
- that no cue quotes removed wording;
- the length.

Write `checks/codex-check-132.md`.

## 3. Kit: reflection in y = x, and custom readout rows

1. **Reflection layer:** a parametric layer that reflects a curve in y = x on a square window with equal units, carrying its point, tangent line and tangent-triangle legs. The legs must visibly turn, so that run and rise swap, and their labels swap on cue. See author note d in d03 for the exact specification. A cross-fade isn't acceptable.
2. **Custom readout rows:** `ReadoutPanel` takes custom rows (for example "gradient × x = 1.00") as well as the gradient ÷ height chip.

Add both to the pilot using d03's examples, check the maths, and record them in `checks/codex-build-132.md`.

Hand in to `status.md`. No design edits (except the route `entryKnowledge` addition), speech or commits.
