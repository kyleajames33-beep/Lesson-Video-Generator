# Brief 277: Physics m6-v17a (investigating the motor effect and the DC motor): physics check, plates, prepare and voice

Read `00-standing-rules.md` and briefs 237, 259 and 276. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone.

## Why (root, 25 November 2026)

The owner approved the new investigation video `lessons/phys-y12-m6-v17a.md` on 24 November. It sits between m6-v17 and m6-v18 in the route. It is now at Revision 2: Claude's learning review is resolved (`checks/p-y12-m6-v17a-learning-review.md` and `-resolution.md`). The last section of the design overrides earlier text.

- **Plates:** root approves both asset items. The design says they wait for the owner's go-ahead; that is given by the owner's approval of the video.
- **Builds:** root has built m6-v17 and v18 already. v17a's build follows once you prepare it.

## Task

1. **Physics and arithmetic check.** Use brief 251's maths-check format, adapted for physics.
   - Write the check to `checks/p-y12-m6-v17a-physics-check.md`.
   - Recompute every number in Python.
   - Check in particular:
     - the angle series and the 3.0 cm gap in the cradle (30° needs 2.89 cm);
     - the current-reversal pair +0.79 and -0.75 (mean 0.77 g, half-range 0.02);
     - the starting current measured with the shaft held still;
     - that every quoted wording from site lesson 07 matches the read-only site clone.
   - Report blockers and should-fix items to root. Do not voice a design that has any.
2. **Error check.** Run the brief 237 error-only check on the current design.
3. **Plates.** Use the design's "Codex asset brief" for both items:
   - Item 1: paint `y12p-magnet-cradle-v1.png`.
   - Item 2: cut `y12p-dc-motor-model-v1.png` into two separate magnet layers and a magnet-free base plate, all on the same canvas, so the layers register exactly. Never repaint or stretch the coil, ring or brushes.
   - Report both in `assets/brief277-manifest.json`, with inspection sheets.
4. **Prepare and voice.** If steps 1 and 2 pass with 0 blockers and 0 should-fix items:
   - Prepare the design exactly as brief 259 did. Put it in `lessons/p-y12-m6-v17a/`, with its source audit in `work/brief259/physics/candidates/phys-y12-m6-v17a/`, including every hold the design names.
   - Queue it in the Physics nightly order between m6-v17 and m6-v18.

## Hand-in to `status.md`

Report:
- the check results;
- the plates delivered or rejected;
- the SHA-256 values;
- whether the design was prepared;
- its planned voicing night.

Human listening stays pending.
