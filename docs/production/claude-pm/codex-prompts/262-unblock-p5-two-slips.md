# Brief 262: unblock the Physics Module 5 voice stage (v09 two-slips)

Read `00-standing-rules.md` and briefs 257, 259 and 261. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Audio work runs alone: wait for `work/brief245/root/stills.lock` and `out/explainer/.stills-lock` to be free, and hold the shared lock as brief 261 did.

## What happened (root, 23 November 2026)

On 22 November the P5 stage stopped inside `phys-y12-m5-v09`. Evidence:

- `work/brief259/2026-11-22-P5.log`;
- `work/brief259/physics/P5/phys-y12-m5-v09/voice.log`, ending "Single-scene quality retry failed audio checks for two-slips; no further retry";
- `work/google-batch-voice/phys-y12-m5-v09/2026-11-22T10-04-20-687Z/` (report.json, request logs, the "Incomplete boundary guide" error on 02-request.wav).

The dispatcher now refuses every later Physics lesson until this is inspected. Lessons v01 to v08 are measured. Everything from v09 on is waiting, and root's build agents need those voices.

## Task

1. **Diagnose:** say which audio check failed for `two-slips` (both attempts), with the numbers. Also check the batch fallbacks for `moment-arm` and `along-handle`.
2. **Repair v09:**
   - If the check failed on real audio (clipping, a run-on tail, missing or extra words, a wrong rate), make one fresh single-scene request for `two-slips` with the lesson's voice, model and settings. Run the brief 257 gate on it. If that also fails, stop for this lesson, keep the cached takes and report it.
   - If the failure is a checker artefact (for example a recogniser hearing "metres" as "m" or "times" as "x" while the audio is right), do not change the checker on your own. Report the evidence and make the one fresh request anyway.
   - Request every other missing v09 scene individually. Complete v09 through the normal measured build (lesson, captions, validation) as brief 259 does.
3. **Resume tonight:** clear the stop the way brief 259 intends, keep every cached take, and let the dispatcher continue P5 in the brief 259 and 260 order within the 99-request cap. If it is already past 19:00 when you read this, run it as soon as the locks are free. Respect the 18:30 to 19:00 no-render window, which applies to root, not to you.

## Hand-in to `status.md`

- The two-slips diagnosis.
- Requests used.
- The new take's SHA-256 and gate result.
- Which P5 lessons reached `measured/lesson.json` tonight.
- Any lesson that stopped, and why.

Human listening stays pending.
