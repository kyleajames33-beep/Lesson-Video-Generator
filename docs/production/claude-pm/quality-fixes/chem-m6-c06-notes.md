# chem-m6-c06 (conjugate pairs and amphiprotic species): quality fix, 6 Nov 2026

Grade before: C (audit frames 3, 4, 5, 7, 8 and 14). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/chem-m6-c06-sheet.jpg`. It holds 16 evenly spaced stills at the audit frames (464 to 14391). I also checked 8 extra stills from the middle of scenes 3 to 13. The stills are in `out/explainer/Explainer-chem-m6-c06/stills/`.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues from `docs/production/claude-pm/lessons/m6c06/measured/lesson.json`.

## Changes by scene

- **New particle module** (`particles.tsx`). It draws ball-and-stick species in the C01 style: the same atom colours, the teal moved H and the charge badge. Phosphorus is added, so the phosphate chain can be drawn. `ProtonSwap` moves one proton from a donor to an acceptor (and back on later events). The formula labels change when the proton lands, and the charges follow. It also has `PauseHoldKeep`, a countdown that stays on screen at 0 with "check your answer".
- **3. Conjugate pairs.** The title now shows from the start, with "conjugate = joined" beside it. Ammonia and water are drawn large below the equation (scale 2.1). On "an acid gives away its proton", water's H glows and hops onto ammonia. The labels change to NH₄⁺ and OH⁻, and the charges appear. The role rings, and the tags "lost one H⁺: its conjugate base" and "gained one H⁺: its conjugate acid", land on their cues. On "exactly one proton", a ring circles the moved H and a dashed circle marks the gap it left. The equation's pair brackets are kept.
- **4. Worked example.** HPO₄²⁻ and water are drawn large below the equation. Water's proton hops to HPO₄²⁻ on "Water loses one", and the labels change to H₂PO₄⁻ and OH⁻. The acid and base rings land on "acid" and "base". The H₂SO₄ chain and the crossed pair stay at the bottom.
- **5. Conjugate strength.** The equations are at 52 px, with "no pull" and "real pull" tags. There are now two large particle lenses (r 175), using the C05 hop-pair glyphs from the strength video. The Cl⁻ lens shows the proton staying on H₃O⁺. The acetate lens shows the proton hopping back and forth, nine times from "keeps taking". The see-saw lands between the lenses.
- **6. Baking soda.** Both reactions now have particle views beside their equations. In acid, H₃O⁺ gives its proton to HCO₃⁻, which becomes H₂CO₃. A CO₂ bubble then rises on "breaks down". In NaOH, HCO₃⁻ gives its proton to OH⁻, which becomes CO₃²⁻ and H₂O.
- **7. Proton chain.** Each chain box has its particle drawn beneath it (scale 1.12). As each species is named, a proton visibly leaves the previous one. The phosphate row shows dimmed from the start as a set-up, then fills in on its cues. HPO₄²⁻ is ringed for "still has a proton to give".
- **8. Salt equations.** The audit frame was title-only. Now a large baking soda box and a particle lens show from the start: a lattice of Na⁺ and HCO₃⁻ that separates on "dissolves", with Na⁺ greying on "don't react". Both water equations have particle swaps beside them.
- **10. Memory aid.** A titled, framed card holds the aid. Below it: H₂O → OH⁻ ("take one H⁺ off") and NH₃ → NH₄⁺ ("add one H⁺") drawn as particles, the HCO₃⁻ chain and the see-saw.
- **12, 14. Attempts.** The countdown no longer fades at 0. It holds with "check your answer" until the scene ends (this was audit frame 14).
- **13. Feedback 1.** The working is now 46 px and the chain 38 px (was 28).
- **16. Key notes.** Eight one-line bullets at 34 px replace the five paragraphs. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/chem-m6-c06/particles.tsx` (new; C07 imports it too).
- `src/explainer/lessons/chem-m6-c06/s1.tsx`, `s2.tsx`, `s3.tsx`.

`parts.tsx`, `assets.ts` and every other lesson are unchanged. C07 and C08 re-export C06 `parts.tsx`, so it was left alone. The typecheck on the C06, C07 and C08 graphs passes. The full-repo `tsc` runs out of memory on this 8 GB machine.

## Plates needed

None. The plates used already exist (`m6-baking-soda-box`, the baking soda clip pair and the C01 ammonia bottle). The particles are coded diagrams, as HSC convention expects.

## Still to check

- Judge the proton hops at playback speed: the timing of the scene 3 and 4 hops, and the acetate loop in scene 5.
- Audit frame 8 (local 85) shows the lens and box, but the left half waits for the first equation (at 125).
- Scene 6 keeps H₂CO₃ drawn while the CO₂ bubble rises. The equation line carries the breakdown.
- Ready for Codex to re-render on the existing narration.
