# Brief 34: fact check C6a, C6b and G03, plus three painted plates

Read `00-standing-rules.md` first.

## Part 1: error-only fact check (do not rewrite scripts)

The owner split C6 into two videos and reworked G03 on 15 October. Check these three designs:
- `docs/production/claude-pm/lessons/chem-m5-c06a.md`
- `docs/production/claude-pm/lessons/chem-m5-c06b.md`
- `docs/production/claude-pm/lessons/chem-m5-g03.md` (Revision 5 changes)

The owner's rules for them:
- The three calculation types are taught easiest first.
- In an ICE table, put the known equilibrium value in the E row first, then work out its change as E minus I.
- The tiny-K approximation is taught, with the check that x is small compared with the start.
- HSC never requires the quadratic formula.

Report errors only:
1. Recompute every value in each "Numbers to verify" section.
2. Check K for I2 ⇌ 2I near 1000 K. The design keeps an illustrative 1.6 x 10^-5 labelled as illustrative; the textbook value is about 3.8 x 10^-5.
3. Check K for N2 + O2 ⇌ 2NO at engine temperatures (about 4 x 10^-4 near 2000 K).
4. Check the 2017 syllabus wording for calculating Keq and equilibrium concentrations.
5. Check any statement about what HSC requires. In particular, is there any official NESA wording on the quadratic formula? Quote it if you find it, otherwise say none was found.

Write the results to `docs/production/claude-pm/checks/c6ab-g03-codex-check.md`.

## Part 2: painted plates

Style as in brief 27: transparent PNG with a real alpha channel, ink and watercolour textbook plate, no text, labels, arrows or numbers, at least 1600 px on the long side, 8% margin, reads clearly at 200 px.

1. `public/assets/chemistry/c6b-engine-cylinder-v1.png`
   - Cut-away of one car engine cylinder at the moment of combustion: piston, cylinder wall, spark plug and a hot orange-yellow glow of gas in the chamber.
   - Simple and clear, not a whole engine.
   - It sits beside the N2 + O2 ⇌ 2NO practice question.
2. `public/assets/chemistry/c6b-hot-iodine-tube-v1.png`
   - A sealed glass tube of violet iodine vapour, glowing hot, held over a flame or in a furnace glow.
   - Same glassware style as `c9-no2-tube-brown-v1.png`.
   - Leave the gas interior fairly even, because coded atoms are drawn over it.
3. `public/assets/chemistry/g03-carbon-vessel-v1.png`
   - A sealed steel or glass reaction vessel containing a black lump of solid carbon with a pale, nearly colourless gas around it.
   - Match `c8-pressure-vessel-v1.png` in style and angle.

Put provenance in `docs/production/claude-pm/assets/brief34-provenance.json` and QA views in `docs/production/claude-pm/assets/brief34-qa/` (a checkerboard view and a 200 px view of each). Append a hand-in to `status.md`.
