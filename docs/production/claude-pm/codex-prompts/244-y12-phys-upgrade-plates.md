# Brief 244: Year 12 Physics upgrade: plate QA and two new plates

Read `00-standing-rules.md` and the plate method in brief 240. Do not spawn sub-agents. Make no design edits, no speech and no commits. This is light work: run it after brief 242, in gaps when no render or voicing job can run.

**Background.** On 13 November all 80 Year 12 Physics designs gained a visual top-up. Narration is unchanged (hash-checked), so no error check is needed for speech. Root's rulings are in the "Year 12 Physics" section of `checks/root-acceptance-y11-upgrade-12-nov.md`.

1. **Inspect at native size** the five plates newly placed in scenes, which were confirmed by file name only:
   - the commutator crop (m6-v16);
   - the pole transformer (m6-v14);
   - the metal plate (m6-v20);
   - the digital timer shown blank (m7-v10);
   - the spacecraft alone (m5-v21).
   
   Check each for true alpha with no halo, nothing stretched, no faces or people, and nothing that reads as question data. Also check that it fits the scene's use as written.
2. **Paint**, to the plate method (transparent PNG with true alpha, native aspect, sidecar, manifest `assets/brief244-manifest.json`):
   - `y12p-sailing-dinghy-v1.png` (m6-v19 scene 9);
   - `y12p-vapour-cell-v1.png` (m7-v03 scene 6, reused in m8-v03, m8-v09 and m8-v10).
   
   Each design's Codex asset brief has the specification. The fallbacks apply if a plate fails QA.
3. **Confirm** that m1-v06's balance plate (Year 11 Chemistry) suits m8-v15's final frame and m8-v16's opening: a two-pan or top-pan reading masses. Record its file name for the builder.

Hand in to `status.md`: one line per plate (pass, repaint or fallback), and the balance file name.
