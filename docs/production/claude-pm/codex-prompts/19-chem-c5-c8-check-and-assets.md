# Brief 19: C5, C6, C7 and C8 independent fact checks, then artwork

Read `00-standing-rules.md` first. Four Chemistry designs are ready to voice and need your independent check before any narration is recorded:

- `docs/production/claude-pm/lessons/chem-m5-c05.md` (writing and interpreting equilibrium expressions)
- `docs/production/claude-pm/lessons/chem-m5-c06.md` (ICE tables: calculating K and concentrations)
- `docs/production/claude-pm/lessons/chem-m5-c07.md` (industrial equilibrium, Haber)
- `docs/production/claude-pm/lessons/chem-m5-c08.md` (reaction quotient Q)

Check the latest revision named in each Status line. Each has already passed two learning reviews and a Claude science check (`checks/c5-claude-science-check.md` and so on, each with a Resolution section). Your check is a second, independent pass: do not assume theirs is right. Do part A before part B.

## Part A: fact checks (errors only)

Run `03-fact-check-template.md` on each design. Narration is the quoted (`>`) text; on-screen text is in the "Visual" lines, key notes and memory aid. No stills exist, so skip screen checks. Site extracts: `site-extracts/chem-m5-l09.md`, `l10.md`, `l07.md`, `l12.md`. Read `docs/production/claude-pm/site-corrections.md`: the site lessons have confirmed errors (Haber K values, lesson 12 Q3) that the videos must not repeat. Syllabus: NSW **2017** Year 12 Module 5.

Recompute every number with the arithmetic shown, including:
- C5: the rate-model ratios (0.1 at 10/10/10 and 15/8/12; 49 at 2, 2, 14 and 2, 8, 28), the K-size bands, and the made-up A + B ⇌ C + D item.
- C6: 0.40 mol in 2.0 L, K = 0.053; (2x)^2/(0.45 - x)^2 = 49 giving x = 0.35; flip 1/49, doubled 2401; the N2O4 attempt K = 0.0257 and its flip 38.9.
- C7: Haber delta H, the labelled illustrative ceilings, plant conditions, recycling, and the methanol attempt.
- C8: Q = 6.25, 256 and 16.3; ammonia K = 0.50 at 400 C with Q = 0.80.

Write `docs/production/claude-pm/checks/c5-check.md`, `c6-check.md`, `c7-check.md` and `c8-check.md`.

## Part B: artwork

Make the images listed in the "Codex asset brief" section at the end of each design file, following those instructions exactly (transparent PNG with a real alpha channel, aligned pairs overlay exactly, no text, checks). Most visuals in these four are coded, so the lists are short or optional; skip any item marked optional only if it says a coded fallback is acceptable. If a part A finding changes a picture, follow the finding and say so. Provenance: `docs/production/claude-pm/assets/c5-c8-provenance.json`.

Append one hand-in to `status.md` covering both parts.
