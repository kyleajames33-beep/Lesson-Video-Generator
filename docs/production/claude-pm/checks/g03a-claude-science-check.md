# G03a Claude science check (15 Oct)

Scope: `../lessons/chem-m5-g03a.md` Revision 1. The reused scenes (direct-k, ice-one-value, q-vs-k-question, q-vs-k-answer, key-notes line) are text-identical to G03 take01 and keep `g03-claude-science-check.md`, `g03-rev5-science-check.md` and the Codex checks `g03-check.md` and `c6ab-g03-codex-check.md` (no arithmetic errors found). This check covers the new scenes (hook-board, attempt, feedback, decision-board), the key notes and the visual changes. Arithmetic recomputed by script. U+2014 search: none.

## Findings

1. **Attempt and feedback arithmetic.** Q = [SO3]^2 / ([SO2]^2 [O2]) = 0.300^2 / (0.150^2 x 0.0750) = 0.0900 / (0.0225 x 0.0750) = 0.0900 / 0.0016875 = 53.33, reported 53.3. K = 229 (scene 3: 0.0256 / 0.000112 = 228.6). Q < K, so the net reaction is forward: SO3 rises, SO2 and O2 fall. Correct.
2. **"Nothing says this mixture has settled, so 53.3 is Q, not K."** Correct use of the definitions: Q has the form of K with the current concentrations; it equals K only at equilibrium. At this temperature Q differs from K, so the mixture is not at equilibrium. Correct.
3. **Temperatures (author check, not learner copy).** 2SO2 + O2 ⇌ 2SO3 is exothermic (delta H about -198 kJ/mol), so the larger K (229) belongs to the lower temperature. A common textbook value is Kc about 2.8 x 10^2 at 1000 K; a van 't Hoff estimate puts 229 near 1010 K and 53.3 near 1075 K, so both illustrative values are of a realistic size. The learner copy does not say which temperature is higher (temperature and K is C9), so nothing is contradicted.
4. **Key notes.** "Q below K: too little product, so the forward reaction wins. Q above K: the reverse reaction wins." Correct (C8). "Pure solids, pure liquids and water as the solvent stay out of K and Q" as G03. "Only a mixture at equilibrium gives K" means K is calculated from equilibrium concentrations. Correct.
5. **Labels.** Every question card keeps "HSC-style question, written for HSCScience"; nothing says or implies NESA wrote a question. The video has no quadratic statement.

## Count

0 errors. 0 UNVERIFIED in learner copy.

## Resolution

No learner-copy change needed. Finding 3 is recorded as author note (a) in the design. Codex check of the new scenes is welcome before render (CHECK_REVIEWER status in the build).
