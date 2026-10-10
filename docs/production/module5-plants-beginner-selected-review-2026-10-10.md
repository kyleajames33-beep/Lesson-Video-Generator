# Independent plant selected-source review

Reviewed 10 October 2026 by Sol 6.1, `/root/chem_c2_selected_implementation`. This reviewer did not author the plant preparation or selected package. **Initial selected-source decision: CHANGES REQUIRED.** Scientific narration and source traceability pass, but the planned response boundary conflicts with the current renderer. This immutable initial report applies only to the hashes below. Review any additive correction separately.

| Frozen input | SHA-256 |
| --- | --- |
| `docs/production/drafts/module5-plants-beginner-selected-2026-10-10/lesson.json` | `ef61ae0d2fdf7ac0dbff1db569b98f7f67b01a161c49752c36c4f695dda3133b` |
| `production-brief.json` in that directory | `616d102506c2a6378e008d3cf3e2bfa959fab415fb8779db5638f5d7559cfdb9` |
| `traceability.json` in that directory | `e7cf8765338c6d6787ed19d1ceb1f5a6f9ba90ea02d62cfe20877f393faff0b7` |
| `author-validation.json` in that directory | `c8d741c880e246ca47a4c53012e730ad6e57f872cb4d6991b271c223910cb198` |
| `final-author-check.json` in that directory | `8858e7a60ada43af7681b0976df969b8dff1741a3d191bb95c9a7b8be784cc1b` |
| Accepted beginner plant preparation | `0a2ab244ed56d890953bf65424208aa51dad2e1c285be54a80d2373283472aad` |

Full paths, remaining package inputs, current runtime hashes and check details are bound in `module5-plants-beginner-selected-review-2026-10-10.findings.json`.

## Blocking finding PLANTS-SOURCE-01

The selected lesson adds `transitionDurationInFrames: 0`, but this field is absent from current `LessonData` and is not consumed by `LessonVideo.tsx` or `lessonTimeline()`. Both runtime consumers retain the shared 24-frame transition. The source validator permits unknown fields, so its successful exit does not establish this timing claim.

The prompt scene has duration 1,479 and an estimated `responseHold` from local frame 1,119 to 1,479. Actual `lessonTimeline()` gives prompt global frames 11,282 to 12,761, with feedback starting at global 12,737, or prompt-local 1,455. Feedback therefore begins 24 frames before the declared hold ends. The claimed twelve-second answer-free tail is shortened by 0.8 seconds in the current timeline.

The feedback's first stage and result are cued at local frame zero. Independent in-memory React server rendering gives first-card and first-result opacity zero at feedback frame zero, then 0.0625 at frame one and one at frame 23. This establishes that answer content can be exposed during the claimed hold through the actual transition. No full composition or audio was rendered; future feedback audio would also begin at its earlier scene start unless separately offset.

Required bounded correction: preserve initial files, create an additive revision using the actual transition consumer, and reserve a 24-frame tail after the estimated hold. With the same prompt start, a 1,503-frame prompt should place feedback at global 12,761, exactly the estimated hold end. Remove the ignored override and keep proposed intervals in the narration plan rather than populating a field documented as measured `responseHold`. Correct the zero-overlap claims in the new brief and author evidence. No shared runtime change is required for this correction. Verify the actual global timeline and retain complete stimulus through hold-end minus one. Fresh audio must still replace these estimates.

## Passing source cases

All eleven accepted spoken blocks match the preparation exactly after newline normalisation. There are 1,081 spoken words and twelve scenes including the silent title. Portable props equal the lesson. No audio, aligned captions, old raster, unsupported diagram or default FlowerDiagram is attached. No U+2014 appears in the selected copy.

The narration and displayed anchors preserve pollen versus sperm, ovary/ovule/embryo-sac/egg containment, transfer versus delivery versus fusion, zygote-to-embryo versus ovule-to-seed, and qualified ovary-to-fruit development. Runner propagation depends on a node with roots/shoot; inherited-combination, mutation and establishment limits remain in speech. Self/cross transfer alone does not prove fusion. The embryo-forming focus and supplied no-alternative-route model avoid universal seed/fertilisation claims. These agree with the earlier exact preparation review and its primary botanical references. No new science correction is needed.

The worked source shows one supplied case at a time. Actual synthetic React markup confirms earlier working disappears at the second context cue 540 until its stage cue 746, and at the third context cue 939 until its stage cue 1,106. It exposes no established-result trail. These are DOM and source-order checks, not measured voice cues or native readability observations.

The prompt source retains viable/compatible pollen on stigmas, Group 2's stopped tubes, unfertilised eggs, no other pollen route and the model's fusion requirement. Both pollination and fusion/embryo question anchors are present. Synthetic prompt rendering at local frames 1,119, 1,455 and 1,478 retains all five conditions and both question anchors, with no answer working inside that scene. The blocker is the next scene's overlap, not missing stimulus.

The current route remains `bio-m5-b02b`, first plant delivery part at canonical playlist position three. Fungi, bacteria and protists follow before the existing mammalian and agricultural handoffs. The brief supplies entry, start, stop and next boundaries and preserves the open actions. No practical, population-survival, full four-group coverage or release completion is claimed.

## Gates and limits

| Scope | Decision |
| --- | --- |
| Exact accepted speech, science and route boundaries | PASS for these frozen inputs |
| Overall initial selected-source integration | CHANGES REQUIRED: PLANTS-SOURCE-01 |
| Essential flower nesting, delivery, seed and runner spatial integration | CHANGES REQUIRED, already explicitly blocked in the proposal |
| Native/narrow layout, captions, controls and continuous visual review | Pending actual integrated source observations |
| Recording-stage readiness | Not approved |
| Fresh recording, measured alignment/silence, exact voiced preview and human listening | Separately pending |
| Practical/action coverage, full export and publication | Pending |

The current concise boards are scientifically consistent source treatments, but do not establish the required spatial integrations. Font or timing source inspection supplies no glyph-bound or whole-lesson clearance pass. Generic validator suggestions are not feature quotas. No selected inputs, renderer, shared types, previous report, core snapshot or audio was modified during this review.

Read-only C3 comparison also found no ignored transition override or measured responseHold in C3 source `8e6c7bdeaabda0d37c5ccff2a3db0cb4a11c2104db61c478269205dad1a003ba`. Its two attempts and feedback are gated within their respective scenes. This narrow hygiene observation does not alter the separate C3 independent review or pass this reviewer's own C3 authorship.
