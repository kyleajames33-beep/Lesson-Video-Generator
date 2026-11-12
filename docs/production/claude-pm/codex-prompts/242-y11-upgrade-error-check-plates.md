# Brief 242: error check and plates for the Year 11 visual upgrade (Physics, Biology, Chemistry)

Read `00-standing-rules.md`, brief 214 (the error-check format) and the plate method in brief 240 (painting, alpha, sidecars, the manifest and visual QA). Do not spawn sub-agents. Make no design edits and no commits. No speech in this brief. This is a long, light job: run it between renders and voicing, never alongside a render.

**Background.** Between 11 and 13 November, a second Claude session upgraded every Year 11 Physics, Biology and Chemistry design to the visual standard. Root accepted the calls with rulings. The rulings are in:
- `checks/root-acceptance-y11-upgrade-12-nov.md`: rules R1 to R4 for every Y11 build; Physics FA3; Biology FA1 to FA3; and the Year 11 Chemistry section added on 13 November;
- the "Root acceptance (12 November 2026)" paragraphs in `checks/root-decisions-phys-y11-fa0.md`, `-fa1-v13-v24.md` and `-fa2.md`.

Each upgraded design has a "Visual upgrade (Revision N)" section and "Upgrade (Revision N)" paragraphs under its scenes. Most narration is unchanged (the decisions say which changed).

## Step 1: build the inventory (write it first)
Read every upgrade-decisions section above. Write `work/brief242/inventory.json` with one entry per design, listing:
- narration changed (yes or no, and which scenes), from the decisions and by comparing the narration hash to the last checked source;
- new on-screen numbers, slips, readouts and question wording to check;
- new or repainted plates requested, and plates "confirmed by file listing only";
- open confirmations that the decisions route to Codex.

Root's known items (the inventory must include them, but is not limited to them):
- **R4 narration added to reach 5,500 characters:** Physics FA3 U7; Biology FA1 U5, FA2 U3 and FA3 U3. Two spoken claims need a source, or the clause goes: Biology FA1 v28 "most of the time" (54 of 70), and Biology FA3 v29 "real tests show the same direction".
- **Physics FA2 U3:** narration changes in v01 to v07, v09 to v12 and v21. **FA2 U4:** v10 attempt 1 part (b) now asks which has the larger signal amplitude. Confirm the question, feedback and model answer agree.
- **Chemistry m1-v19:** scene 16's new sentence ("with the oxide ion"), and its card, practice question and Decisions.
- **Chemistry M1 U8:** the new crossed slips and derived numbers (v01, v02, v04, v06, v07, v08, v09, v14, v21, ws-v02), and model readouts tagged as models.
- **Chemistry M4 U8:** m4-v04 scene 8 keeps the right row from scene 7; m4-v13's beaker plate shows no printed volume that reads as question data; m4-v11's particle-box run never contradicts the tally counts 1, 4, 6, 4, 1.
- **Biology FA3 v22 (Revision 4, root):** scenes 7 and 8 now use the coded fallback with no numbers. Check that the Visual text agrees with the narration and that no invented probability remains on screen.
- **Biology FA3 v04:** the title now reads "More Than a Dozen Species". **v18** scene 1 says "ran on the same mechanism" (narration changed). **FA2 v09:** the tag reads "the pull: a later video".

## Step 2: error check
For every design with changed narration or new on-screen numbers, write `checks/<prefix>-vNN-upgrade-error-check.md` in the brief 214 format. Check:
- science and arithmetic, recalculated in `work/brief242/`;
- that every new cue phrase is in its scene's narration, in spoken order;
- no em dash anywhere;
- the narration count is the sum of the scene strings;
- Year 12-ready plain wording.

Report blockers and should-fix items. Do not fix them. Designs with no narration change and no new numbers need only an inventory line, not a file.

## Step 3: plates
1. **Repaints and new plates root has ruled on.** Paint each one to the plate method: transparent PNG with a true alpha channel, native aspect, a sidecar and a manifest entry in `assets/brief242-manifest.json`.
   - Physics: fairy lights with an Australian plug; the power station version with no red chimney bands (inspect v2 first; paint only if neither fits); FA0 item 24 (b)'s five plates (cricket ball, air track, glider, glider flag, glider mass) if still missing.
   - Biology: a digestive tract **cutaway with no face, lips, teeth or tongue**, replacing the rejected `y11-digestive-tract-v1.png` (v16 and v17 hold for it); the horse forefeet plate repainted with **four toes** on the oldest foot; FA2 v19's weighted model tubes. If the tubes are not delivered before v19 voices, the design's fallback cut applies.
   - Chemistry: `y11c-snack-pack-carton-v1.png` (m1-v07), `y11c-halogen-vials-v1.png` (m1-v12), and a sealed reaction vessel for m4-v12 attempt 2, which replaces molecule models that gave the answer away.
   - Anything else the inventory finds requested and missing. Each design's Codex asset brief has the specification.
2. **Plate QA.** Inspect, at native size, every plate the upgrade designs newly use that was "confirmed by file listing only", plus the items the decisions send "to plate QA" (Physics FA3 U13, Biology FA2 U9, Biology FA3 U11). For each one, check:
   - no faces or people;
   - nothing that reads as question data;
   - true alpha with no halo;
   - nothing stretched;
   - labels and scales consistent with the design.
   Also settle FA0 item 24 (a) and (d): the paper-cone set's constant-slant geometry, and the Moon sidecar's playback approval.

## Hand-in
Append one section per step to `status.md`, then a final summary with:
- blockers by design;
- plates delivered, failed QA or still missing;
- every design now clear to voice.

Root resolves the findings and then releases the voicing waves. Year 11 Chemistry waves 1 to 6 (brief 236) need not wait for this brief for designs whose narration is unchanged. Wave 7's m1-v19 waits for step 2's result.
