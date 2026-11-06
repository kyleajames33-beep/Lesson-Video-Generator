# Brief 220: voice the remaining Year 12 Module 8 lessons (ElevenLabs), then fetch measured spectra

Read `00-standing-rules.md` and briefs 174 and 194 first. Do not spawn sub-agents. No design edits, no commits. Never print or log keys. One heavy process at a time. Never re-voice unchanged takes. Use the same ElevenLabs voice, model and pipeline as brief 194, with the billed-character tally. Do not read the account balance (the key lacks that permission).

**Why.** The owner wants Module 8 finished alongside the pilots (6 November, evening). It is already part-published and reviewed, so it needs no pilot. Run this after brief 217 and before the C-grade re-renders.

**Budget.** Brief 194 used 52,611 of the 115,000-character cap, so about 62,000 characters remain. Voice in the order below and stop before a lesson would cross the cap. Report what is left unvoiced; it waits for the monthly credit reset.

**1. Root unblocked the brief 194 failures (commit 1ded26bc).**
- **Motion lines.** The recording-stage check failed because each hook motion line began "no people.", which the checker reads as a prohibition-only line. Root removed that prefix from the motion field only. `node scripts/check-recording-gate.mjs` now reports `ready: true` for m8b06 to m8b11, m8p01b and m8p02b, with only the normal review-pending items.
- **Counts.** chem-m8-g02 and chem-m5-g02 now state 5,794 and 5,968 characters, matching your recount.

**2. Voice in this order.** Run the recording gate for each first. Stop that lesson on any blocker.
1. `bio-m8-b06`, `b07`, `b08`, `b09`, `b10`, `b11`, `bio-m8-p01` and `p02` (the brief 194 failures).
2. `chem-m8-g02` and `chem-m5-g02` (count fixes only).
3. If budget remains: `bio-m8-b12`, `b13`, `b14`, `b16`, `g02` and `chem-m8-c13`, which are "ready to voice" since brief 122.
4. `chem-m8-c09`. Root decision (6 November): the NIST 70 eV records already in the design are the primary measured source. The SDBS cross-check is not required for recording. Confirm the bromomethane plot uses its NIST record.

For each lesson, write the measured data under `lessons/<key>/measured/` as in brief 194, and validate the alignment, the cues and the caption export.

**Held, do not voice:**
- `bio-m8-b15` and `b17` (the owner's cultural-context decisions);
- `chem-m8-c10`, `c11a`, `c11b`, `c12` and `g03` (see step 3).

**3. Measured spectra for the spectroscopy lessons** (light; it may run alongside voicing). c10, c11a, c11b, c12 and g03 are on recording hold until their drawn spectra use measured data.
- For each, fetch the measured IR (NIST Chemistry WebBook) and the ¹H and ¹³C NMR (SDBS, or another primary database if SDBS is unreachable) for every compound the design names.
- Save them under `docs/production/claude-pm/assets/brief220-spectra/`, with the source, ID and URL for each.
- List every value in each design's "Numbers to verify" that the measured data contradict. Do not edit the designs; Claude updates them and lifts the holds.

**Hand-in:** to `status.md`:
- one line per lesson (voiced, skipped or held, with characters, seconds, credits and cue result);
- the cumulative tally;
- the spectra found, and any contradictions.
