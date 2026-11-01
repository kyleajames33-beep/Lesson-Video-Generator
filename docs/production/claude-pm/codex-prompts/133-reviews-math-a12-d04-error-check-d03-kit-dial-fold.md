# Brief 133: reviews of math-a12-d04, an error check of d03 Revision 2, and two small kit additions

Read `00-standing-rules.md` and briefs 131 and 132 first, and use the same methods and file formats. This brief can run alongside any other.

## 1. math-a12-d04: learning review and maths check

`lessons/math-a12-d04.md` is at Revision 1; its review key is `m-a12d04`. It follows the d03 template (Revision 2) and was written after the d01 to d03 template findings.

**Root decisions** (confirm only, don't reopen):
- "Natural log" stays spoken in full until the voice pilot.
- "One over, x times the natural log of a" is the spoken form of 1/(x ln a). The fallback "one over the product of x and the natural log of a" is used only if the pilot reads the first form badly.
- The handoff to y = sin x stays, because d05 asks how the sine and cosine graphs reveal their derivatives.

**Learning review.** Follow `docs/production/student-learning-review.md`, tracing from the entry knowledge in `docs/production/maths-a12-video-route.json`. Check that:
- d03 is recalled, not re-taught;
- the fixed slope ratio (1.443 at x = 1, 2 and 4) is visible before the change-of-base identity;
- "changing the base is a vertical scale of ln x by 1/ln a" is clear before the proof;
- the a ≠ 1 condition is explained, not just stated;
- the 0 < a < 1 fold (base ½) is clear, and the base-ten trap (ln 10 on top) is ruled out by the graph;
- neither attempt card gives away its answer or the sign;
- the log_⅓ subscript notation is readable for a student (legibility on phone is judged at build).

Repairs must be length-neutral or name a cut. The design sits at about 551 s, so there is about 19 s of headroom, but don't spend it without a reason. Give template findings separately.

**Maths check.** Recalculate every value:
- the slopes 1.443, 1 and 0.434 at x = 1, and the ratio 1.443 at x = 1, 2 and 4;
- the stretched d03 triangle (run 2, rise 1/ln 2, slope 0.721);
- the base-ten factor 0.434 and the crossed 2.30;
- the dial values, including 10.49 at a = 1.1;
- base ½ giving the factor −1.443;
- worked example 1/(4 ln 2) ≈ 0.361;
- attempt 1: 1/(2 ln 5) ≈ 0.311, with the crossed ln 5 / 2 ≈ 0.805;
- attempt 2: h′(x) = −1/(x ln 3), decreasing.

Also check:
- that the proof matches the 2024 point ciba8514ff and keeps x > 0, a > 0, a ≠ 1 where needed;
- the memory aid "Divide the curve, divide the slope" and its scope;
- every quoted syllabus point word for word, with its codename.

Add the design's confirmed site findings to `site-corrections-maths-a12.md` without duplicating existing items.

Write `checks/m-a12d04-learning-review.md` and `checks/m-a12d04-claude-science-check.md`.

## 2. Error-only check of d03 Revision 2

Use brief 112's method on `lessons/math-a12-d03.md`. Confirm:
- that the brief 132 repairs are complete: every general ln(kx) statement says a vertical shift by ln k (not always up), while the k = 3 example may still say "up"; the scene 8 restriction applies to ln x and its derivative, with the e^x ghost kept;
- that no cue quotes removed wording ("slides the curve up" was replaced in scene 10's summary);
- the length (narration is now 6,355 characters).

Write `checks/codex-check-133.md`.

## 3. Kit: dial exclusion mark, and labels hidden during a fold

1. **Dial exclusion:** `NumericDial` takes an excluded value (for example a = 1), shown as a marked gap or crossed tick. A parameter animation never evaluates the excluded value; it stops at a given limit (d04 stops at 1.1).
2. **Fold labels:** a `FunctionGraph` scale animation that passes through a flat curve (vertical factor going through 0, as in d04 scene 8 from 1.443 to −1.443) hides or fades the point labels, tangent and readouts while the factor is near 0, then restores them. Readouts must never show a divide-by-zero or infinite value.

Add both to the pilot using d04's examples, check the maths, and record them in `checks/codex-build-133.md`. Also make a short silent MP4 of the d04 fold and dial (like brief 132's reflection sample), one render at a time under the shared lock.

Hand in to `status.md`. No design edits, speech or commits.
