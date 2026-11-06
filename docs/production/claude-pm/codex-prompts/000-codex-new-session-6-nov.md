# Codex new-session handoff (6 November 2026, evening)

You are continuing as Codex on the HSCScience video project in `C:\lesson-video-generator`. Claude (root) designs the videos, builds the scene code and the pilot builds, and writes your briefs. You do plates, independent reviews and checks, voicing, renders, captions, YouTube replacement and site-error logs. Read these first, in order:

1. `docs/production/claude-pm/codex-prompts/00-standing-rules.md`.
2. `docs/production/claude-pm/maths-visual-standard.md`: the owner's quality bar from 6 November. It includes the build gate: one pilot per course, and a contact-sheet check before every render.
3. The last 300 lines of `docs/production/claude-pm/status.md`: your previous session's hand-ins.

Hard rules: do not spawn sub-agents. Make no commits. Never print or log keys. Run one render at a time (8 GB machine). Never re-voice unchanged takes. Do not delete YouTube videos: unlist them.

## Already done in the previous session (do not repeat)

- **194:** ElevenLabs voicing; 52,611 of the 115,000-character cap used.
- **185:** axis-tick fix.
- **186:** error check.
- **195:** d01 review and three plates.
- **197:** covered by the 187 launcher plates.
- **180, 181, 182, 183 and 184:** reviews and plates.
- **187 and 188:** reviews and plates.
- **196:** re-render and check done for b06 and b10 (v2 masters, `work/brief196/replacement-package.json`), the session sweep found chem-m6-g03. **Its YouTube steps are NOT done**, because browser or Windows tool initialisation failed with a kernel-assets path error.
- **165:** scheduled task `LessonVideo-Brief165-BioPhysics-20261106-1900` runs Google voicing at 19:00 Sydney. Let it run.

## Queue, in this order

1. **Fix YouTube access first.** Diagnose the browser or Windows tool initialisation error. If you can't fix it, say so plainly in `status.md` with the exact error, so the owner can upload by hand from `work/brief196/replacement-package.json`, and carry on with renders (step 2 onwards) without uploading. Keep a running list of every checked v2 master waiting for upload, with its metadata, in `work/youtube-pending.json`.
2. **196:** finish the YouTube steps for bio-m7-b06 and b10 (owner approved).
3. **213 (added 6 Nov, 16:50):** voice d01 Revision 6, the Maths owner pilot. It is short and uses the Google voice; run it before or after the 19:00 scheduled task, not alongside.
4. **199:** chem-m6-g03, chem-m7-c10, chem-m7-p05 and chem-m8-c01 render defects, plus the chem-m7-p06 check and the c10/c05 link record. g03 was already found in 196; reuse that work.
5. **Quality re-render-and-replace briefs, in number order:** 198, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211. Each video's scene code is already fixed by Claude; you render v2, scan it, compare the sheet, do a playback check and replace it on YouTube.
6. **Production reviews and plates:** 189, 190, 191, 192 and 193 (Year 12 Physics M6 to M8).
7. Any new brief Claude adds after 211 or 213: 212 (re-render wave 4a) goes after 211; 214 (error check, light) can run alongside any render (check the folder for higher numbers).

Hand in to `status.md` after each brief, as before.
