# Brief 130: reviews of the first maths design (math-a12-d01), plus error checks of chem M5 G02 and bio M8 P01

Read `00-standing-rules.md` and brief 109 (for the review method and file formats) first. This brief can run alongside any other.

## 1. math-a12-d01: learning review and maths check

`lessons/math-a12-d01.md` is at Revision 1. It is the **template for the whole Year 12 Mathematics Advanced strand**, so report anything that would repeat across d02 to d10 as a separate "Template findings" list, apart from the findings specific to this video. Review key: `m-a12d01`.

**Learning review.** Follow `docs/production/student-learning-review.md`, tracing the lesson from its stated entry knowledge in `docs/production/maths-a12-video-route.json`. Check:
- whether the visual reasoning (tangent triangle, height and gradient readouts, squash, slide, stretch and mirror) makes the cause clear before the rule;
- whether the hook's surprise works;
- whether the chain rule is treated as Year 11 recall, not new content;
- whether the reading load and pace are right for a student starting Year 12;
- whether the two attempts give every given they need.

The design is at about 569 s, so any repair must be length-neutral or name a cut.

**Maths check.** Recalculate every number and gradient, every worked example and both practice answers. Check:
- the claim that the squash doubles every slope;
- the a = −2 mirror case;
- the memory aid and its stated assumptions;
- key note 2's scope ("gradient = a × height" for k e^(ax+b) only);
- that every quoted syllabus content point matches the official Mathematics Advanced 11-12 (2024) page word for word, with its codename (see `programme/syllabus/maths-advanced-2024-y12-crosswalk.json`).

**Syllabus rule:** confirm that nothing uses outgoing 2017 content or the site's stale "Year 11 / Module 4" labels. Add the design's three site findings to `site-corrections-maths-a12.md` if they are confirmed.

Write `checks/m-a12d01-learning-review.md` and `checks/m-a12d01-claude-science-check.md`.

## 2. Error-only checks (brief 112's method)

- **`lessons/chem-m5-g02.md` (Revision 6):** the Revision 5 rework (a length and format change) plus the brief 127 fixes. Check every narration line against the verified Revision 4 science. Also check that each question card has every given, and that the dotpoints are verbatim (including the curly apostrophe). Confirm that the moved-out types are noted for `chem-m5-g02b`.
- **`lessons/bio-m8-p01.md` (Revision 2):** check every line, the 45 °C safety basis (the brief 127 science check's verdict), the data and means, and that the scene 4 cue is now screen-only.

Write `checks/codex-check-130.md`, one section per design. Give corrected text and a source for each error.

Hand in to `status.md`. No design edits, speech, renders or commits.
