# Brief 175: ordered queue, evening of 5 November 2026

Read `00-standing-rules.md`. Do not spawn sub-agents. No commits. One heavy job (alignment or render) at a time; speech requests are light and may run while nothing heavy runs. Claude is repairing designs for briefs 169, 170, 171 and 173 in parallel. None of those designs is in this queue, so do not voice or edit them.

**1. Google voicing (brief 165 continuation).** The Google quota reset at 19:00 Sydney.
- Before speech, write the short repair confirmations you wrote for d02 and d06, in the same format, for `math-a12-d08` and `d09` (brief 134 findings against their Revision 2) and for `bio-y11-fa1-v01` to `v06` (brief 138 findings against their Revision 2). Save them as `checks/m-a12d08-error-check.md`, `m-a12d09-error-check.md` and `checks/y11b-fa1-vNN-error-check.md`. A lesson with an unresolved finding is skipped and reported, not voiced. d10 to d17 and i01 to i05 already have error checks.
- Then voice in order: d08 to d17, i01 to i05, Biology FA1 v01 to v06, up to 99 requests today. Same rules as brief 165: whole-scene requests, saved usage metadata, no automatic retry, no half-requested lesson, never re-voice an unchanged take.

**2. ElevenLabs voicing (brief 174).** Year 12 Chemistry and Biology, Cycle 1, after checking the balance.

**3. Alignment and measured lessons** for the new Google takes, serially, as in brief 165.

**4. d01 full render (brief 172 correction).** Brief 172 pointed at the wrong script. `scripts/render-release.mjs` is for the legacy engine. Explainer lessons render with `scripts/render-explainer.mjs`, as every published Year 12 explainer was rendered. When no other heavy job is running, run `node scripts/render-explainer.mjs Explainer-math-a12-d01 --confirm --revision=v1` with `RENDER_CONCURRENCY=2`. A missing d01 `production-brief.json` does not block this render: it was the legacy gate's requirement. Report the output path, duration, loudness line and any failed chunk. Then export captions with `scripts/export-explainer-captions.mjs` if it applies to this lesson.

**Hand-in:** to `status.md` after each numbered step.
