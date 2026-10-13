# Brief 25: C9 and B6a independent fact checks, then artwork

Read `00-standing-rules.md` first. Two new designs need your independent check before any narration is recorded:

- `docs/production/claude-pm/lessons/chem-m5-c09.md` (how temperature changes K)
- `docs/production/claude-pm/lessons/bio-m5-b06a.md` (forms of DNA in prokaryotes and eukaryotes)

Check the latest revision named in each Status line (Revision 3). Each has passed a learning review, a re-review and a web-sourced Claude science check (`checks/c9-claude-science-check.md`, `checks/b6a-claude-science-check.md`, each with a Resolution section). Your check is a second, independent pass: do not assume theirs is right. Do part A before part B.

## Part A: fact checks (errors only)

Run `03-fact-check-template.md` on each design. Narration is the quoted (`>`) text; on-screen text is in the "Visual" lines, key notes and memory aids. No stills exist, so skip screen checks. Site extracts: Chemistry `site-extracts/chem-m5-l09.md` to `l13.md` (whichever cover temperature and K), Biology `site-extracts/bio-m5-l09.md`; and `docs/production/claude-pm/site-corrections.md`. Syllabus: NSW **2017** Year 12 Module 5.

Pay special attention to:
- C9: K = 0.0061 at 25 C and 0.49 at 100 C for N2O4 ⇌ 2NO2 (Kc, mol/L) and their sources; the flipped values; the 0.040 mol/L start and every split percentage and concentration derived from it (recompute the quadratics); Q in the two-step heating scene; the made-up multipliers; delta H values; H2 + I2 K = 49 at about 450 C and below 49 at 500 C; the claim that only temperature changes K; the memory aid's limits; the attempt answer.
- B6a: every number (2 m of DNA, nucleus size, the tennis-ball scale, E. coli genome and length, "several hundred times", 46 / 92 / 23 DNA molecules, nucleosome figures, organelle DNA), the bacteria versus prokaryote wording around histones, plasmid statements, histone charge and acetylation wording, the memory aids (Greek roots) and both attempt answers.

Write `docs/production/claude-pm/checks/c9-check.md` and `b6a-check.md`.

## Part B: artwork

Make the images listed in the "Codex asset brief" section at the end of each design file, following those instructions exactly (transparent PNG with a real alpha channel, aligned sets overlay exactly, no text, textbook ink and watercolour style, at least 1600 px long side, checks on a checkerboard and at 200 px). B6a's cells and organelles carry the explanation, so make them well (bacterium, animal cell, plant cell, mitochondrion, chloroplast, spool and any others listed), with no DNA drawn in them (the DNA is coded). Reuse existing plates where the brief says so. If a part A finding changes a picture, follow the finding and say so. Provenance: `docs/production/claude-pm/assets/c9-b6a-provenance.json`, QA images in `docs/production/claude-pm/assets/c9-b6a-qa/`.

Append one hand-in to `status.md` covering both parts.
