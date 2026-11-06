# chem-m6-c07 (strong acid and base pH): quality fix, 6 Nov 2026

Grade before: C (audit frames 3, 4, 6, 9, 10, 13 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/chem-m6-c07-sheet.jpg`. It holds 16 evenly spaced stills at the audit frames (506 to 15701). I also checked 8 extra stills from the middle of scenes. The stills are in `out/explainer/Explainer-chem-m6-c07/stills/`.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues from `docs/production/claude-pm/lessons/m6c07/measured/lesson.json`.

## Changes by scene

- **Missing titles added:** "What pH means", "Kw: water's own equilibrium", "Kw grows with temperature", "A base's pH, and pOH", "Dilution: same moles, more water" (it gives way to the task line) and "Mixing an acid with a base" (it gives way to the existing "neutralise first" heading). Every C07 scene now has a title or task line.
- **4. Going backwards.** The audit frame was title-only. Now a large pH meter (the existing plate) shows from the start. It reads 3.40 on "A pH of three point four zero", and a tie runs from the meter to the "pH = 3.40" chip. The full log ruler shows from the start. On "gives", the 10⁻³ and 10⁻⁴ steps light up, a marker sits at 3.40, and "4.0 × 10⁻⁴" lands on "four point zero". The working is 52 to 72 px.
- **5. Kw (rebuilt).** A particle lens of pure water (r 235) shows one water molecule giving a proton to another on "equal amounts". On "shifts back" the proton returns, and three OH⁻ ions slide in on "add hydroxide". The H₃O⁺ and OH⁻ bars rise on "equal amounts" and change as hydroxide is added. A large pH meter shows from the start. It reads 7.00 on "pH seven", then climbs to 13.00 after hydroxide is added. The chip that checks the product again sits under the Kw line.
- **6. Kw and temperature.** A large meter shows the neutral pH for each lit row (7.00, 6.81, 6.51), with a temperature chip (25, 37, 60 °C). Heat ripples appear under the beaker on "warming". The table rows are 44 px and no longer ghosted (minimum 45% opacity). The equal bars for 60 °C keep their label clear.
- **7. Base and pOH.** The working now dims to 55% only (was 30%), and the meter stays at full strength until the closing step. The working is 46 px. This was audit frame 6.
- **10. Mixing.** Two large beakers (h 380) of acid and base show from the start. They hold H₃O⁺ and OH⁻ ions in their liquid, with role-coloured labels. They pour into the mixture, then the particle lens (r 235) shows the ions pairing into water. The method lines are 44 px.
- **11. Worked example 3.** Under the givens card, two beakers show their ions roughly to scale (5 H₃O⁺ against 8 OH⁻). The ions pulse when their moles are spoken. The working is 44 px.
- **15. Feedback 1.** The working is 44 px. The moles bars show from "and the base" and now fit on screen (they were cut off at the right edge). The answer chip and the crossed mistake are larger.
- **14, 16. Attempts.** The countdown holds at 0 with "check your answer" (`PauseHoldKeep` from C06).
- **18. Decision rule.** The card's three lines and the pH meter show from the start. They light on their cues, so the scene no longer opens near-blank (audit frame 15).
- **19. Key notes.** Nine one-line bullets at 33 px replace five paragraphs. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/chem-m6-c07/s1.tsx`, `s2.tsx`, `s3.tsx`, `s4.tsx`.
- `s3.tsx` adds a local `IonBeaker`. `CardBox` and `Shrink` in `s4.tsx` are unchanged, because C08 to C16 and M8 import them. C07 `parts.tsx` and `assets.ts` are unchanged (C08 re-exports them).

The typecheck on the C06, C07 and C08 graphs passes.

## Plates needed

None. The scenes use the existing pH meter (`m6-ph-meter-probe-beaker`), beaker, volumetric flask and pipette plates.

## Neighbours' missing-title pattern (not edited; outside this brief)

These scenes have no Heading or TaskLine:
- C05: `SceneAid`.
- C08: `SceneWhyWeak`, `SceneWe1Drop`, `SceneWe1Check`, `SceneStrongWeak`.
- C09: nine scenes.
- C10: eight scenes.

Use the same fix there: a hand-font Heading at frame 4.

## Still to check

- Dilution keeps its existing flask, pipette, particle lens (r 300) and pH track. No meter was added, because the frame had no room for one beside the flask and lens.
- The Kw meter climbs to 13.00 while hydroxide is added. That matches the 0.10 mol/L NaOH in the hook and the next scene, but the narration names no concentration here.
- Judge the motion at playback speed: the mixing pour, the Kw proton return and the meter counts.
- Ready for Codex to re-render on the existing narration.
