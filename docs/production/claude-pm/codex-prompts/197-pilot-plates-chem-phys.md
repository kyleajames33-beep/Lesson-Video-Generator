# Brief 197: plates for the Chemistry and Physics build pilots (paint early)

Read `00-standing-rules.md`. Do not spawn sub-agents. No design edits, speech or commits. This is light work: run it as soon as brief 195's plates are done.

The Year 11 Chemistry and Year 12 Physics build pilots are `lessons/chem-y11-m2-v06.md` and `lessons/phys-y12-m5-v04.md`, both at Revision 2 (visual upgrade, 6 November). Claude builds them once their plates exist, so paint their missing plates now rather than waiting for briefs 180 and 187:

- `y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (phys-y12-m5-v04 asset brief). The barrel must pivot cleanly on the base for a live tilt, so state the pivot point in pixels.
- `y11c-beaker-water-36ml-v1.png` (chem-y11-m2-v06 asset brief). It must sit on the existing `y11c-top-pan-balance-v1.png` pan at a matching scale.
- Any other plate either design's asset brief lists that is not already in `public/assets/`. Check every path.

Transparent PNG with alpha, never stretched, no people, hands or faces. Use the usual QA (checkerboard, phone size, overlay on the partner plate) and record provenance. When briefs 180 and 187 reach these designs, review them as normal and reuse these plates.

**Hand-in:** to `status.md`: the plate paths, the pivot coordinates and the QA.
