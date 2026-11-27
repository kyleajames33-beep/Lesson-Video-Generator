# Brief 282: unblock the eight Physics lessons held on one scene each

Read `00-standing-rules.md`. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone.

## Why (root, 28 November 2026)

Physics m5-v10, v14, v15 and v19 to v23 are each held on a single scene: see their `quality-stop-*.json` files in `work/brief259/physics/P5/`. Every other scene passed. Root read the reports. Most of these holds come from two checker rules that are stricter than the audio needs, not from bad speech:

1. **Spelling.** The recogniser writes American spellings. "tonnes" is heard as "tons" in v10 and "kilometres" as "kilometers" in v23, so the takes fail even though the speech is right. Symbols run together the same way: "m v" is recognised as "mv" in v15 and v14.
2. **The edge rule** (`scripts/lib/google-batch-voice.mjs` line 44). It needs the first and last 20 ms to be near silent (RMS 0.005 or less). Many takes have a small breath or click there while the first word starts a full 0.1 s later. In v10, for example, the lead is 0.101 s and the start RMS is 0.012.

Genuine faults still exist and must keep failing:
- added words, such as the "thank you" at the end of a v19 take, or v14's long added ending;
- a word clipped at the very start, where the recognised first word begins at 0 s (v19, attempt 1).

## Root rulings

These rulings change the checker only as stated here. Record each change with the date and "root ruling, brief 282" in the code comment.

1. **Spelling and symbol equivalents count as matches.** This covers British and American spellings of the same spoken word:
   - tonne/ton and tonnes/tons;
   - -metre/-meter, -ise/-ize and -our/-or;
   - any other pair that sounds identical.
   It also covers a symbol pair recognised as one token, for example "m v" and "mv", or "m g" and "mg".

   List every equivalence you add. Inserted words, missing words and number mismatches still fail exactly as now.
2. **Edge clean-up instead of rejection.** A take may be cleaned up only when all of these hold:
   - it passes every other check;
   - the aligned first word starts at 0.08 s or later;
   - the aligned last word ends at least 0.08 s before the end.

   Apply a linear fade over the audio *before* the first word (ending 30 ms before it starts) and the same at the end. Then add 120 ms of digital silence at each end. Never fade or cut inside a word. Re-run the full check on the cleaned take, and keep the original take beside it. Record the change in the take's report as "edge clean-up, brief 282".
3. **Fresh takes for real faults.** Where a take fails for added words, a clipped first word or a lead under 0.08 s, allow up to 3 more fresh takes of that scene only, within the Google quota. Keep every passing scene's cached take; do not re-voice them.
4. **Still failing after that?** Hold the scene and report its failure. Root will reword its first or last sentence. Do not reword it yourself.

## Task

1. Make the two checker changes above and add a test for each, for example in a test file next to `scripts/brief261-revoice.test.mjs`:
   - "tonnes" vs "tons" passes, while an added "thank you" still fails;
   - a lead of 0.101 s with start RMS 0.012 is cleaned and passes, while a lead of 0 s still fails.
2. Re-check the takes already saved for the eight held scenes under the new rules before generating anything new. Several may pass at no cost.
3. Fresh-voice only the scenes that still fail, as in ruling 3.
4. Finish each lesson's measured `lesson.json` exactly as brief 259 did, then carry on with the Physics nightly order.
5. Continue brief 281 (the Kokoro pilot) when production is idle. The owner has now installed eSpeak NG: confirm it is on PATH first.

## Memory

Free physical memory was about 300 MB at 09:00 today, below the dispatcher's 820 MB threshold. Don't lower the threshold. If voicing is still waiting on memory, tell root which processes use the most memory (names and sizes only, never command lines).

## Hand-in to `status.md`

For each of the eight lessons, report:
- which checks the take passed or failed;
- whether it was passed on re-check, cleaned up or freshly voiced;
- the new measured lesson's path and SHA-256.

Also report the test results and any scene still held, with its reason. Human listening stays pending.
