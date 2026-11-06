# Claude (root) handoff, 7 November 2026 morning

State for Claude after a compact. Memory (`MEMORY.md`) loads automatically; read this file next. It replaces `claude-handoff-6-nov.md`.

## Owner decisions in force
- **Grade A before any render** (`maths-visual-standard.md`, build gate and root rules). B+ is not enough. Claude reviews every build's 16-frame sheet itself, and sends thin, faint or dense frames back to the same agent with SendMessage.
- **Pilots approved (7 Nov).** Maths was approved after the owner watched it. Year 11 Chemistry and Year 12 Physics are approved by extension ("probably good too, continue"). All three courses now build in bulk.
- **Re-render published videos only for the 20 C grades.** The B-grade polish re-renders are shelved: briefs 206 to 212 and 215 are marked SHELVED, and their scene fixes are committed. No new B fixes.
- **The site lesson is the source of truth** for numbers and examples. Example: m6-v19 keeps the site's 1500/1425 rev/min and draws a 4-pole ring instead of changing the numbers.
- **Cultural holds wait for the owner:** bio-m8-b15 and b17.

## How builds work now
- **Brief.** Build agents follow `docs/production/claude-pm/build-agent-brief.md`, including its root-rules section:
  - five short key-note bullets at 40 px or more;
  - each stage's main visual solid from its first frame (faint previews only for secondary items);
  - full-ink text and plates about 300 px;
  - the countdown ring shown from "Pause here to answer.";
  - no frame stamps on sheets.
- **Agent setup.** Two agents at a time (8 GB RAM). Every prompt says "Do NOT spawn any agents or forks". Agents use the stills lock and their own scratchpad subfolder.
- **Committing.** Agents edit `src/explainer/registry.ts` in parallel. Commit a lesson folder alone if the registry already lists another agent's unfinished lesson, and commit the registry once every lesson it lists is committed.
- **After a build passes:**
  1. Copy `work/quality-audit/fixed/<id>-notes.md` and `-sheet.jpg` into `docs/production/claude-pm/builds/`.
  2. Commit.
  3. Write a render-and-publish brief, copying the pattern of 228 to 231.
  4. Add it to line 3d of the Codex queue file.
- **Design repairs.** Agents follow the 180 to 191 pattern: resolve the review findings, apply the light upgrade to the A bar, recount narration as the sum of scene strings, Status set to Revision N, and a Revision section appended. Claude records root decisions in `checks/root-decisions-<course>.md`, then writes an error-check brief for Codex.

## Status by course
- **Year 12 Bio and Chem Module 8.** 18 new lessons built at A (briefs 223, 226, 228, 229, 230 and 231). c04 v2 is rendered; the rest await Codex.
  - Still to voice (brief 220): b12, b13, b14, b16, g02 (done), c09 and c13. The ElevenLabs cap is about 62k characters minus what brief 220 has used.
  - Spectra hold (Codex fetching measured data): c10, c11a, c11b, c12 and g03.
  - Cultural hold: b15 and b17.
  - Not checked: bio-m8-p01.
  - Build each lesson as soon as it is voiced.
- **Year 12 Maths.**
  - d01 is the approved pilot, built on the studio kit (`src/explainer/math/studio/`).
  - d02 to d14 were voiced from the old designs; they need redesign to the standard first (d01 Revision 5 is the model), then re-voicing of the changed takes, then builds.
  - 67 designs in total. Plan the course rollout next: redesign wave, then a Codex voicing brief, then build waves.
- **Year 11 Chemistry.**
  - All 82 designs are repaired to Revision 2 or 3 and error-checked (briefs 214, 216, 218, 219, 221). Check those check reports for any remaining findings before voicing.
  - The pilot m2-v06 is approved.
  - Next: a Codex brief to voice the course in waves with the Google voice (`voice_shdbjsxcrr0a`, gemini-3.8-flash-tts), then build waves.
- **Year 12 Physics.**
  - Module 5 is repaired (error check 224 done). Module 6 is repaired (error check 232 queued).
  - Module 7 repair is in flight: two agents on v01 to v08 and v09 to v16, resumed after the usage limit.
  - Module 8 (briefs 192 and 193 reviews done) is not repaired yet.
  - The pilot m5-v04 is approved.
  - Next: finish the M7 repairs and their error-check brief, run the M8 repairs, then voicing and build waves.
- **Year 11 Biology and Physics** (about 190 designs): later.

## Codex
- **Queue file:** `codex-prompts/000-codex-new-session-6-nov-night.md`. It is updated as of 7 Nov 6:10am with what is done.
- **Freezes.** Codex froze at 3:15am on 7 Nov. The owner is restarting it with that file.
- **YouTube is blocked.** The browser tool fails with a "kernel-assets" path error. Finished masters collect in `work/youtube-pending.json`, and the owner may upload by hand. Pilot masters are on Drive.

## Housekeeping
- **Disk:** C: has about 26 GB free. The hscscience repo is deleted; it is backed up on GitHub under `backup/local-2026-11-06/`. Other `hscscience-*` and `C:\tmp\wt-*` folders are unchecked.
- **Git:** push after commits (branch `video/claude-directed-m5-wave1`). `work/` is excluded locally.
