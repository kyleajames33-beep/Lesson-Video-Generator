# Brief 30: fact checks for the HSC equilibrium question-type videos (g02, g03), then any artwork

Read `00-standing-rules.md` first. Two new HSC practice designs need your independent check before any narration is recorded:

- `docs/production/claude-pm/lessons/chem-m5-g02.md` (every type of HSC equilibrium question, part 1: explain and predict)
- `docs/production/claude-pm/lessons/chem-m5-g03.md` (part 2: calculations)

Check Revision 3 of each. Both passed a learning review, a re-review and a web-sourced Claude science check (`checks/g02-claude-science-check.md`, `checks/g03-claude-science-check.md`, each with a Resolution section). They are built on `docs/production/claude-pm/research/hsc-equilibrium-question-types.md`. Your check is a second, independent pass.

## Part A: fact checks (errors only)

Run `03-fact-check-template.md` on each design (narration in `>` lines; on-screen text in Visual lines, key notes and memory aids; no stills exist). Syllabus: NSW **2017** Chemistry, Year 12 Module 5.

- Recompute every number yourself (g03 especially: direct K, ICE from one value, Q vs K, the PCl5 quadratic and root rejection, the approximation tests, the N2O4 small-x case, the large-K SO3 case, the amount-added example and the attempt, including every named wrong answer; g02: the K = 7.50 NO2/N2O4 settled values and the Q = K/4 squeeze).
- Check each collision-theory explanation and every graph fingerprint statement (concentration and amount axes), the no-shift cases (catalyst, added pure solid, argon in a rigid insulated vessel), the industrial conditions, the memory aids, and that K, Q and solids/water are handled correctly.
- Confirm every authored question is labelled "HSC-style question, written for HSCScience" and none is presented as an official NESA question or copies one. Spot-check against the NESA 2019 to 2025 papers listed in the research file that no question reproduces an official one.

Write `docs/production/claude-pm/checks/g02-check.md` and `g03-check.md`.

## Part B: artwork

Read the "Codex asset brief" sections at the end of both designs. Make any listed painted plates (style and QA rules as in brief 27; aligned sets where states change). If a design lists none, say so. Provenance `docs/production/claude-pm/assets/g02-g03-provenance.json`, QA in `docs/production/claude-pm/assets/g02-g03-qa/`.

Append one hand-in to `status.md`.
