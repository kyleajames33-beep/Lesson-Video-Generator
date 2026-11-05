# Brief 174: ElevenLabs Cycle 1 voicing, Year 12 Chemistry and Biology

Read `00-standing-rules.md` and `voicing-plan-2026-11-05.md` first. Do not spawn sub-agents. No design edits, no commits. Never print, log or commit the ElevenLabs key.

The owner says the ElevenLabs credits have refreshed. Voice the Cycle 1 table in `voicing-plan-2026-11-05.md`, in its order, on the existing voice only: voice `cOEV2DrZBBGNLpE74kQu`, model `eleven_v4`. Every lesson in the table has a Revision 3 (or later) design whose Status line says its Codex error check is resolved and it is ready to voice. Re-read each Status line before voicing and skip any lesson that is held or says otherwise.

**Credits first.** Read the account balance (for example `node scripts/generate-audio-priority.mjs --balance`, which loads `.env.local` privately). Record the balance in `work/brief174/balance.json` without the key. Each lesson costs about 1 credit per narration character. Keep at least 5,000 credits in reserve for later narration fixes; stop before a lesson that would cross that line. If the balance covers more than Cycle 1, continue into Cycle 2 in its listed order, skipping every lesson the plan marks as held.

**Method (the 31 October wave H pipeline).** Reference copies of the wave scripts are in `work/brief174/reference/` (`voice22h.sh`, `reuse22g.cjs`, `wave22.py`, `gen_w22h_bio.py`, `gen_w22h_chem.py`, `extras22h.py`, `check22h.py`, `check22g-measured.cjs`, and the wave H log). They add each lesson to `lessons/build_wave5_bio.py` or `build_wave5_chem.py` in its own marked block, build `lessons/<key>/lesson.json` and `lesson.production-brief.json`, check the brief, then prepare, reuse, generate and assemble narration one lesson at a time. Copy them into `work/brief174/` and adapt them there (new block tag, take date `2026-11-05`, take name `<Name>-claude-2026-11-05-take01`, keys and route lesson numbers for these lessons). Never rewrite an existing wave block.

- The `approach` and `transition` summaries in the extras file must describe only what each design's script and visuals already say, in the same style as `extras22h.py`. Add no new teaching content. No em dashes, Australian spelling.
- Run the production-brief check for each lesson at recording stage before any paid request. A lesson that fails is skipped and reported; do not edit its design.
- Dry-run each voice manifest and compare its narration character count with the design's own count before the paid request.
- Never re-voice an unchanged take. `bio-m8-g03` (folder `m8g03`) already has a manifest and some takes in `public/audio/Biology-Y12-M8-G03-claude-2026-10-31-take01`: reuse every saved take and generate only the missing scenes, under its existing take name.
- One lesson at a time. Stop on any generation error, quota or credit message, or HTTP 4xx/5xx. Do not retry a failed request automatically.

**Hand-in:** to `status.md`, one line per lesson: characters, credits used, scenes generated and reused, measured duration, and the measured report path. Then the remaining balance. Human listening stays pending.
