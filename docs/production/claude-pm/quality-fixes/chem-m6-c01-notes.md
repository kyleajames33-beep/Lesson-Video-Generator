# chem-m6-c01 (acid and base models): quality fix, 6 Nov 2026

Grade before: B (audit frames 2, 8, 9, 10). Grade after (stills): B+.
Sheet: `chem-m6-c01-sheet.jpg` (16 stills at the original audit frames 527 to 16347). Extra checks: 7350, 8300, 8720, 9400.
Narration, audio and measured timing are unchanged. New animation uses the existing word cues in `docs/production/claude-pm/lessons/m6c01/measured/lesson.json`.

## Changes
- **Timeline cards (frame 2, empty cards; scenes 2 to 8, 13, 14).** New lesson-local `timeline.tsx`. A model that has not been reached shows only its faint decade marker. Its card writes in, filled, when the narration reaches that model, so there are no empty dashed boxes. The Lavoisier card is filled from the first frame of its scene. Card and stamp text is now 26 px or more (was 20 to 22 px), with shorter stamp wording ("limit: H alone is not enough; no base definition", "limits: NH3, carbonates, gas reactions", "limit: needs a proton").
- **Lavoisier.** The three acid tiles arrive from frame 14 (were on "studied", about 3 s later). Each acid is still named, and its O still glows, on cue.
- **Hydrogen chloride in water (enlarged).** The small top-right timeline strip is gone. The lens is r 350 (was 290), with molecules at 2.2 (was 1.6) and "HCl" and "H2O" labels. A painted beaker labelled "hydrochloric acid" anchors the scene. The equation, the hydronium label, the "H+(aq) = H3O+(aq)" chip (46 px), the note (40 px) and the crossed mistake sit in one right-hand column.
- **Ammonia in water (frame 8, one circle and tiny thumbnails).** No strip. The lens is r 340, with molecules at 2.05, labels and 40 px role tags. The hook's painted ammonia bottle ("ammonia solution, NH3(aq)") is on stage throughout. The "only some" lens is r 170 (was 130). The close shows the blue litmus plate at 230 px with "turns red litmus blue" and "base: proton acceptor" (46 px).
- **The other two problems (frame 9, sparse).** Two columns, one per problem, both on stage from "The other two problems". Left: the NH4Cl tube plate (800 px wide), NH3(g) and HCl(g) labels, the lens (r 180) and the equation. Right: the baking soda box plate ("basic, but no OH- of their own"), the carbonate lens (r 180) and the equation. Notes are 34 px or more. The ring circle and "white ring: NH4Cl(s)" arrive on "white solid". The conclusion line arrives on its words.
- **Acid and base are roles (frame 10, leftover thumbnails).** The timeline strip is removed.
- **Key notes.** Eight one-line notes at 36 px replace five paragraphs at 33 px. The framed memory aid is unchanged.
- **Notes hold.** `config.ts` holds the key-notes scene at least 1,200 frames (40 s; it was 759), per the root rule. The video grows by about 14.7 s, all at the end.

## Files
- Edited: `src/explainer/lessons/chem-m6-c01/config.ts`, `s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`.
- New: `src/explainer/lessons/chem-m6-c01/timeline.tsx` (lesson-local timeline).
- `parts.tsx`, `assets.ts` and `common.ts` are unchanged. Many Module 6, 7 and 8 lessons import them, including the shared `Timeline`.
- A scoped typecheck (the C01, C02 and C03 configs and everything they import) passes.

## Plates needed
None. Plates used: household cleaner, litmus, ammonia bottle, beaker, NH4Cl tube, baking soda box (all existing).

## Still to check at playback speed
- The proton hops in the larger HCl and ammonia lenses (the arc bow was raised for the bigger molecules).
- Timeline cards writing in, rather than popping, when each model is introduced.
- In the gas-carbonate scene, the lens-A ions packing and the carbonate hop, now that both lenses are on stage from the start.
- Audit frame 1 rendered blank once as the first still of a batch, then correctly when re-rendered after a warm-up frame. This was a still-render glitch, not scene code (the hook scene is unchanged), but confirm the opening at playback.
