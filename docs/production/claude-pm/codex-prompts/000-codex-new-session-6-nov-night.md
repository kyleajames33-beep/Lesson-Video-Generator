# Codex new-session handoff (6 November 2026, night)

You are continuing as Codex on the HSCScience video project in `C:\lesson-video-generator`. The previous Codex chat is unreachable. Claude (root) designs the videos, builds the scene code and the pilots, and writes your briefs. You do plates, independent reviews and checks, voicing, renders, captions, YouTube replacement and site-error logs.

Read these first, in order:
1. `docs/production/claude-pm/codex-prompts/00-standing-rules.md`.
2. `docs/production/claude-pm/maths-visual-standard.md`: the owner's quality bar from 6 November, including the build gate (one pilot per course, and a contact-sheet check before every render).
3. The last 400 lines of `docs/production/claude-pm/status.md`: your previous session's hand-ins.

Hard rules:
- Do not spawn sub-agents.
- Make no commits; Claude commits your outputs.
- Never print or log keys.
- Run one render at a time (8 GB machine).
- Never re-voice unchanged takes.
- Never delete YouTube videos; unlist them.

## Already done (do not repeat)

- **Reviews and plates:** 180 to 184, 187 to 190 and 195 (Claude is repairing the review findings).
- **Checks:** 185 and 186.
- **Voicing:** 194.
- **196:** b06 and b10 v2 masters re-rendered and checked (`work/brief196/replacement-package.json`), plus the session sweep that found chem-m6-g03. **Its YouTube steps are NOT done**: browser and Windows tool initialisation failed with a kernel-assets path error.
- **165:** scheduled task `LessonVideo-Brief165-BioPhysics-20261106-1900` runs Google voicing at 19:00 Sydney. Let it run, and report its result.

Claude committed your previous outputs on 6 November (reports, measured data, the render guard and the voicing fixes). The asset QA images and manifests under `docs/production/claude-pm/assets/` are still uncommitted; leave them where they are.

## Queue, in this order

Owner priority (6 Nov, evening): get the new videos out. Pilots and new-course work come before polish re-renders. Every new video must grade A on its contact sheet before render (`maths-visual-standard.md`, build gate).


0. **225 (top priority, added late on 6 Nov):** render the d01 Maths pilot (now built and graded A) and hand the owner an unlisted link. Run it next.
1. **Fix YouTube access first.**
   - Diagnose the browser or Windows tool initialisation error.
   - If you can't fix it, write the exact error plainly in `status.md` so the owner can upload by hand, and carry on with step 2 onwards without uploading.
   - Either way, keep a running list in `work/youtube-pending.json` of every checked v2 master waiting for upload, with its file path, its v1 link, the metadata to copy, its captions file and its playlist position.
2. **196:** finish the YouTube steps for bio-m7-b06 and b10 (owner approved).
3. **213:** voice d01 Revision 6, the Maths owner pilot. It is short and uses the Google voice; run it before or after the 19:00 scheduled task, not alongside.
3b. **217:** check and voice the two science pilots (chem-y11-m2-v06 and phys-y12-m5-v04), straight after 213.
3c. **220:** voice the remaining Module 8 lessons (ElevenLabs, within the cap), then fetch measured spectra for the spectroscopy lessons.
3d. **223 (and later build-render briefs):** render and publish new Module 8 builds as Claude grades them A. These are new videos, so they come before the C-grade re-renders.
4. **199:** re-render the four Chemistry videos with render defects, check chem-m7-p06, and resolve the c10/c05 link record. g03 was already found in 196; reuse that work.
5. **Re-render-and-replace, C grades only (owner, 6 Nov evening):** 198, 200, 201, 202, 203, 204 and 205. Claude has already fixed each video's scene code. You render v2, scan it, compare its sheet with Claude's, do a playback check, and replace it on YouTube (or add it to `work/youtube-pending.json` if access is still broken). **Shelved, do not run:** 206 to 212 and 215 (B-grade polish). Their scene fixes are committed and will be rendered later, when render time is free.
6. **214:** error check of Claude's brief 180 repairs, then one plate. It is light work and may run alongside a render.
7. **Production reviews and plates:** 191, 192 and 193 (Year 12 Physics Modules 7 and 8).
8. Any brief numbered above 214 (check the folder), except the shelved 215: 216, 218, 219, 221, 222 then 224 (error checks, light) go after 214.

Hand in to `status.md` after each brief, as before.
