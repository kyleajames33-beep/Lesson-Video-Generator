# Teaching and visual brief for each selected video

Use this before new or revised narration. It connects the existing [research](../research/hsc-video-production-standard-2026-10-02.md), [implementation plan](../research/library-implementation-plan.md), [task templates](teaching-templates.md) and [animation planning](../animation-planning.md) to an actual lesson. Preserve usable artwork and layouts. Planning does not mean replacing every scene or adding more animation.

## Small authoring brief

| Decision | Write before recording |
| --- | --- |
| Task and scope | What the learner will explain, calculate, predict or interpret. Name prerequisites and current/new curriculum boundaries. |
| Explanation | Why the relationship or mechanism works. Do not substitute a list of viewing or calculation directions. |
| Spoken tone | Write connected conversational narration, then read it aloud. Use concrete examples and precise reassuring feedback. Avoid repeated “watch”, “notice”, “label” instructions and invented examination stakes. |
| Opening | A useful problem, contrast or question. A small surprise can help when the subject earns it. A clear direct introduction is valid when a prediction would be artificial; explain that choice. |
| Understanding check | A new application or explanation, with targeted feedback and a protected response opportunity when appropriate. |

For every selected scene, record: its ID, reuse/adjust/new/none visual decision, existing component or asset reference, why it teaches this point, narration cue, movement's purpose and reading/thinking hold. “None” is valid for a useful stable board. A new asset must solve a specific gap. No feature count, animation frequency, joke, painted backdrop or diorama quota is required. Essential labels remain coded and stable.

## Machine-readable record

Create a pending companion without changing the lesson or generating audio:

```powershell
node scripts/check-production-brief.mjs init path/to/lesson.json
```

This creates `path/to/lesson.production-brief.json`. `--output=path/to/brief.json` selects another workspace location. Existing files are never overwritten. `prepare-lesson.mjs` also creates a pending companion if absent; its default draft stage remains usable. It exports preparation material, not paid speech.

The scaffold provides the exact source path/hash, research references and one row per scene. Fill `teaching`, `scenes` and `progression`. New version-two briefs require the course-plan path, prerequisite knowledge, starting point, stopping boundary and next lesson before recording. Missing boundaries block recording/export checks. Existing version-one historical briefs retain their earlier contract; do not rewrite frozen historical evidence just to adopt a new scaffold. A visual reference may say “no separate artwork; existing worked board” when that is the deliberate choice. All three review records start pending:

```json
{
  "scriptReview": {"status": "pending", "reviewer": "", "evidence": null},
  "voicedPreview": {
    "status": "pending",
    "reviewer": "",
    "mode": "",
    "inputSnapshotPath": "",
    "evidence": null,
    "humanListening": {
      "status": "pending",
      "reviewer": "",
      "mode": "human-listening",
      "evidence": null
    }
  }
}
```

A passing review needs a named reviewer and an evidence object with workspace-relative `path` and the file's full SHA-256. Write what was actually inspected, exact scenes/range, delivery or visual findings, fixes and unresolved limits. Do not set pass to satisfy the command. Source inspection and still images can support script/layout findings; they cannot establish voiced motion or human listening.

## Stages and honest checks

```powershell
node scripts/check-production-brief.mjs path/to/brief.json --stage=draft
node scripts/check-production-brief.mjs path/to/brief.json --stage=recording
node scripts/check-production-brief.mjs path/to/brief.json --stage=export
```

- Draft checks source identity, required structure and scene coverage. Unfilled decisions and reviews remain explicitly pending so early preparation works.
- Recording requires filled teaching/visual decisions and passing named script/source evidence. Audio is not required at this stage. Check the script's prohibited punctuation and scientific values before generation.
- Export requires that plus the exact voiced revision in Remotion or a short rendered pilot, with mode `ui-playback` or `rendered-pilot`. Bind its `inputSnapshotPath` to the existing verified release-input snapshot containing the selected lesson and current recordings. Changed source, takes, dependencies or evidence invalidate the record. Inspect the actual loaded props, difficult motion beats, response boundary, desktop/phone fit and caption space. Capture the preview inputs before writing its review; avoid including a mutable brief in that preview snapshot's own input list.

Human listening remains a separate record and can honestly stay pending during an agent's UI/media checks and an unlisted review export. `--stage=release` also requires declared passing human-listening evidence. The final public release gate retains its existing five full-package review scopes, including listening. An agent's source inspection, screenshots, timestamps and audio measurements are not a listener.

Before a full render, run the export-stage check and freeze the selected inputs. The default `scripts/render-release.mjs` command also enforces that check before bundling when `frameRange` is absent. Its render config must declare `"teachingBriefPath": "path/to/brief.json"`. Missing, pending or drifted export evidence blocks the full render. Short `frameRange` pilots can still run with pending review. Their input snapshots omit the declared mutable brief, including if it was supplied in `inputs`, so the later review does not create a hash cycle.

Full exports include the passing brief in their dependency snapshots and record its path and SHA-256 in `render-record.json`. Changing it during export invalidates the package like any other frozen input. Media preflight still checks technical readiness. Export-stage success checks evidence presence and dependencies, not semantic quality or whether a named person really listened.

Final `gate:release` configs now need `teachingBriefPath`, in addition to their existing snapshot, input snapshot, render record and full-package reviews. The gate verifies this current brief and confirms it belongs to the actual full-render lesson. Its report saves the brief path and SHA-256. Save that report with the release evidence. No legacy score or extra feature can replace missing review evidence. Historical published packages remain historical records; do not fabricate new approvals for them.

For difficult calculations, review the task separately from its equation, supplied values and reference constants. Associate each constant with its species or element. Use one active reasoning stage, keep established results available, and match later result lines to their own spoken cues. Use `calculationPresentation` for the selected worked examples and quick checks when this organisation helps; avoid automatic catalogue-wide changes. Verify the attempt has no answer leakage and the current working, trail and givens clear captions at the intended display size.

Choose the next lesson through the [course progression plan](course-progression-plan-2026-10-09.md) and [mandatory content/action checklist](course-content-checklist-2026-10-09.md). Point-level coverage is pending until reviewed scenes and the required action type establish it; a source candidate or attractive video is insufficient. After accepted user feedback, update [production memory](../production-memory.md) and the selected lesson's status. Link the exact source, export and evidence rather than marking the whole catalogue improved. Follow [preview first, then export](preview-first-review.md) for the full order.
