# Brief 274: HMS plates unblocked, arm plate redone as one combined plate; re-check HMS M1 v05 and v09

Read `00-standing-rules.md`, briefs 264, 266 and 267. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key.

## Part A: plates (root ruling, 25 November 2026)

1. **The arm no longer blocks anything.** Paint the other 51 leftover plates from your brief 266 list now, in course order (Year 11 Module 2 v09 onward, then Year 12 Module 3, then Module 4). Brief 266's house rules and inspection rules still apply to every plate, including the ankle ligaments plate for m4-v20.
2. **Arm: one combined plate replaces the registered overlay.** Do not paint a separate overlay again. Instead make `hms-arm-bones-muscles-v1.png` by editing the delivered base `public/assets/hms/hms-arm-bones-v1.png` itself (image edit, not a fresh generation), so the bones stay where they are. Then pad or crop the result to exactly the base canvas, 1001 by 1572, with a true alpha channel.
   - Show the biceps on the front of the upper arm, the triceps on the back and the deltoid at the shoulder, in the house watercolour style, with the bones still visible through or beside the muscles.
   - Required anatomy: the biceps tendon inserts on the radius just below the elbow (radial tuberosity), not further along the forearm; the triceps tendon inserts on the olecranon at the back of the elbow. No people, skin, hands or faces beyond the bare arm structures; no text.
   - Check registration by overlaying it on the base at 50% opacity; the bones must coincide. Save that check image in `work/brief274/`.
   - Paint it last in this run, after the 51 others. If two edit attempts fail, stop, and report both with reasons; root will build the muscles as coded shapes instead.
3. Report every plate in `assets/brief274-manifest.json` (path, native size, alpha check, SHA-256, prompt, the design that uses it).

## Part B: HMS Year 11 Module 1 v05 and v09

Root repaired both designs (Revision 3a in each):

- v05: the determinants key note is now 90 characters.
- v09: the ABS quotation is paraphrased, so the design has no en dash.

Re-run the brief 267 error check on both. If each has 0 blockers and 0 should-fix items, record its SHA-256, prepare it exactly as brief 267 did, and put it back in Module 1 route order in the nightly plan. Give the amended dry run.

## Part C: one Physics plate (root, 25 November 2026)

Paint `public/assets/physics/phys-y12-earth-north-pole-v1.png` for Physics m5-v19 (geostationary orbits), which rotates it to show Earth turning beneath a satellite. Do this before Part A's HMS plates.

- **View and size:** Earth seen from directly above the North Pole, as a perfect disc centred on the pole. Use a 1600 by 1600 canvas with a true alpha channel outside the disc.
- **Style:** the same house watercolour as `public/assets/physics/phys-y11-earth-v1.png` (inspect it first).
  - Land shapes must be geographically correct: the Arctic Ocean in the middle, and the northern continents (North America, Greenland, Europe, Asia) round it. Show light cloud.
  - Add no text, grid or meridians; the lesson draws those.
- **Check:** rotate it 90° in a preview, confirm it still looks right, and save the check sheet to `work/brief274/`.
- **Report:** list it in the same manifest. Root swaps it in for the coded polar disc.

Then paint `public/assets/physics/y12p-crt-tube-v1.png` for Physics m6-v02 and v03:
- **Subject and view:** a cathode-ray tube seen side on, in the house watercolour style.
- **Parts to show:** the glass envelope, the electron gun at the left, one horizontal pair of deflection plates inside the neck, and the flared screen at the right.
- **Rules:** no text, no beam and no people.
- **Size:** at least 2400 px wide, transparent PNG with a true alpha channel.
- **Anchor sidecar:** add a JSON sidecar with these anchor points in native pixels: `gunExit`, `platesLeft`, `platesRight`, `plateGapTop`, `plateGapBottom`, `screenCentre`. The lesson draws the beam between them.
- **Inspect** it on paper before you accept it.

Then paint `public/assets/physics/y12p-neutron-star-merger-v1.png` for Physics m8-v06 scene 9:
- **Subject:** two neutron stars spiralling together just before they merge, seen from slightly above, in the house watercolour style.
- **Show:** the two small, dense, glowing stars; a faint swirl of ejected material; dark space with a few stars.
- **Rules:** no text and no labels.
- **Size:** about 1400 by 900 px, transparent PNG with a true alpha channel outside the scene's soft edge.
- **Inspect** it on paper before you accept it.

## Hand-in to `status.md`

Plates delivered and rejected, with reasons; the arm result; then the v05 and v09 check results, SHA-256 values and planned nights. Human listening stays pending.
