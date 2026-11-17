# Codex new-session handoff (16 November 2026, evening)

You are continuing as Codex on the HSCScience video project in `C:\lesson-video-generator`. The previous Codex chat is gone. Claude (root) designs the videos, builds the scene code, and now also owns rendering, checking and queueing for release (root took over brief 245 on 15 November). A separate Sonnet chat publishes from `work/release-queue/`.

Read first, in order:
1. `docs/production/claude-pm/codex-prompts/00-standing-rules.md`.
2. The last 300 lines of `docs/production/claude-pm/status.md` (your previous hand-ins and root's notes).

Hard rules:
- Do not spawn sub-agents. Make no commits; Claude commits your outputs.
- Never print or log keys or tokens.
- **Do not render, queue or publish anything.** Root runs renders on this 8 GB machine; a second Remotion process can crash it. Voicing, research and plate painting are fine alongside a render.
- Never re-voice an unchanged take. Never delete YouTube videos.
- No em dashes in anything you write.

## Your jobs, in priority order

1. **Maths voicing (brief 240, step 4).** Voice the Year 12 Maths designs still without `measured/` in playlist order: `math-a12-s07` to `s12`, then `t01` to `t04`, then `g01` to `g03`. Check `docs/production/claude-pm/lessons/math-a12-<id>/` to see which are done (s01 to s06 are). Google voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`, as in briefs 235, 238 and 240. The provider allows about 99 requests a day and resets around 7 pm Sydney; s07 needs about 15. Keep the ledger, stop cleanly at the quota, never retry past it, and resume after the next reset (a scheduled task is fine). If steps 1 to 3 of brief 240 (reviews and plates) are incomplete for any of these designs, do that design's missing step first and report it. One hand-in block per design to `status.md`, as brief 240 says.
1b. **Brief 247** (Year 11 Maths w01 to w14: review, plates, voice). Do its steps 1 to 3 (reviews and plates) in gaps now; voice it after the Year 12 Maths voicing in job 1.
2. **Brief 246** (measured spectra for Chemistry c10 to c12). Research only; run it while voicing waits for the quota.
3. **Brief 242** (Year 11 upgrade error check and plates). Resume where the last `status.md` entry stopped (Chemistry M2 v11 on 14 November); `work/brief242/` holds the inventory and progress.
4. **Brief 244** (Year 12 Physics upgrade plates: five QA checks and two new plates).
5. **Brief 243** is now Claude's (root is doing the Year 11 Maths crosswalk and outline itself). Skip it.

**Update, 17 November (root).** Voicing order after the Year 12 Maths list in job 1 is finished:
1. Resume **brief 236** (Year 11 Chemistry wave 1) at `chem-y11-m1-v03`, keeping its settings and ledger. v01 and v02 are done and are being built now. Year 11 Chemistry ranks ahead of Year 11 Maths in the course priority.
2. Then voice briefs 247 and 248 (Year 11 Maths).

Non-voicing work in gaps stays as listed: 247 and 248 steps 1 to 3, then 244 and 242.

**Added 17 November: brief 249** (`codex-prompts/249-maths-a11-t-g-s-check-plates-voice.md`): the remaining 36 Year 11 Maths designs (trigonometry, transformations, probability), all learning-review resolved. Maths check, anchor check and plates in gaps after 247 and 248 steps 1 to 3; voice after 247 and 248.

When a job is waiting (quota, plates rendering), move to the next one rather than idling. Report each finished step to `status.md` in one short block.

**Root, 17 Nov evening:** the brief 249 plate findings are ruled in `checks/root-rulings-maths-a11-t-g-s-packs.md` rulings 46 (t05 fire towers: natural scene, triangle is a coded overlay, not registered) and 47 (wall clock: qualified plate accepted; hands and arcs coded from the measured centre). Continue as planned.

**Root, 18 Nov:** brief 250 (`codex-prompts/250-cultural-general-error-check.md`): error check of four designs made general by owner decision. Text-only; do it in a gap after the 19 missing plates.
