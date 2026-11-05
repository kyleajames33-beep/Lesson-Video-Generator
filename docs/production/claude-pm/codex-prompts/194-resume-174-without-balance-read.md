# Brief 194: resume brief 174 (ElevenLabs Cycle 1) without the balance read

Read `00-standing-rules.md` and brief 174 first. Do not spawn sub-agents. No design edits, no commits. Never print, log or commit the ElevenLabs key.

**Diagnosis (Claude, 6 November).** The key in `.env.local` is valid. It is a restricted key without the `user_read`, `voices_read` and `models_read` permissions, so `/v1/user/subscription` answers HTTP 401 with status `missing_permissions`. That is why brief 174's balance step failed. The owner has not changed the key, and the speech endpoint is the only one the voicing script calls. Do not ask for a new key.

**Change to brief 174.** Skip the balance read. Instead keep a running tally in `work/brief174/spend.json`: for each lesson, the dry-run narration characters before the request and the characters actually billed (the request's character-count response header where present, otherwise the sent characters). The voicing plan gives a 120,000-credit refresh. Stop before any lesson that would take the cumulative billed characters above 115,000, which keeps the plan's 5,000 reserve. Do not continue into Cycle 2 under this brief.

Everything else in brief 174 applies unchanged: Cycle 1 order, Status-line gate, recording-stage brief check, dry-run count comparison, reuse of `bio-m8-g03` takes, one lesson at a time. Stop on any generation error, `quota_exceeded`, credit message or HTTP 4xx/5xx other than the known balance 401, and do not retry automatically.

**Hand-in:** to `status.md`, brief 174's per-lesson lines, then the cumulative billed characters in place of the remaining balance. The owner can read the true balance on the ElevenLabs dashboard. Human listening stays pending.
