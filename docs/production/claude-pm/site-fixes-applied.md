# Site fixes applied (local branch only)

- Site repo: `C:/Users/kygs/hscscience` (core.bare=true left unchanged)
- Branch: `fix/site-science-corrections-2026-10-12` (based on `origin/main` at 21d264b1a, not pushed, no PR)
- Worktree: `C:/Users/kygs/hscscience-site-fixes`
- Commit: `5fdf278cf86414bc828e96bfe509217a9a0b3f51` (17 files, 82 insertions, 82 deletions)
- Source list: `docs/production/claude-pm/site-corrections.md`, CONFIRMED ERROR items only (33). Applied 31, not applied 2.

Checks run in the worktree: `check:html02:changed` passed (17 files); `audit:content-preservation` OK; `audit:latex-control-chars` clean; `audit:lessons --ci` PASS (0 new high-severity issues vs baseline). The commit hook (`hook:precommit`) also passed. Full preflight and build were not run. No new em dashes in replacement text (a few existing ones remain on edited lines).

Paths below are relative to `subjects/chemistry/year12/module5/` (C items) or `subjects/biology/year12/module5/` (B items). Line numbers are the current lines in the worktree (all edits were in-line, so line counts did not change).

| Item | Result | File and lines | Note |
|---|---|---|---|
| C1 | Applied | lesson12.sa.html 909, 933 | Keq 5.67 x 10^6 changed to 8 x 10^24 (three places). Conclusion (shifts right) unchanged. |
| C2 | Applied | lesson09.sa.html 549, 550, 698, 701, 702, 703, 706 | Haber constants changed to Kc about 9.5 (300 C) and about 0.06 (500 C), concentration basis. Reverse value now 1/0.06 = 16.7. Part (a) interpretation reworded (modest K at 300 C, reactants favoured at 500 C). Student claim in (c) changed to "less than 6%". Lines 549, 550, 702, 703, 706 were not in the list but carried the same constant. |
| C3 | Applied | lesson14.sa.html 594 to 600 | DeltaG now -33 kJ/mol at 298 K (K = 5.6 x 10^5) and +72 kJ/mol at 773 K (K = 1.45 x 10^-5), labelled as pressure-based K. Lesson 09 uses Kc and lesson 14 uses the Kp-based K needed for DeltaG, so the two lessons do not quote one shared table; the 500 C value is Kp in 14 and Kc in 09. |
| C4 | Applied | lesson13.sa.html 1011 | "higher absorbance" changed to "lower absorbance" so the answer is exothermic, matching line 261. |
| C5 | Applied | lesson17.sa.html 343, 348 | Ksp set to 5.0 x 10^-6, hidden answer 0.011 (alts 1.1e-2, 1.1x10^-2). The raw HTML already had the correct minus sign and superscript entities (the "&sup5;" in the list was an extract artefact); only the Ksp value changed. |
| C6 | Applied | lesson02.sa.html 540, 546, 558 | Water phase changed to (l) to match -890/-818. "Reinforce each other" replaced by ΔH drives it, ΔS slightly negative, entropy term small (about 72 kJ). Line 546 "entropic conditions" reworded to "very negative ΔH". |
| C7 | Applied | lesson02.sa.html 586, 616, 705, 706, 709, 730 | All seven "+2870 kJ/mol" changed to "≈ +2881 kJ/mol". The list quoted +2803 at line 705, but the current text there is +2870. |
| C8 | Applied | lesson09.sa.html 269, 271, 272, 490 | HI reaction labelled 54 at 430 C; intro sentence now "values and temperatures"; reactions 1 and 3 labelled 25 C. |
| C9 | Not applied | lesson18.sa.html 348, 360, 361 | Raw HTML already correct: `10<sup>&minus;10</sup>`, `mol L<sup>&minus;1</sup>`, `Cl<sup>&minus;</sup>`. The "&sup1;" fault is not in the repo (extract artefact). Nothing to change. |
| C10 | Applied (minimal) | lesson13.sa.html 877 | Added a clause saying Keq = 208 holds under the conditions of this experiment and depends on temperature and ionic strength, so it differs from the 25 C values in the Think First. The numbers in Worked Example 2 were not recomputed (would need a whole-solution rewrite and an author choice of value). |
| C11 | Applied | lesson12.sa.html 472, 475, 899 | Both SO2/SO3 examples now Keq = 280 at 1000 K (727 C). Lesson 10 line 500 (reverse Keq 8.75 x 10^-3) was not changed because that item is UNCLEAR. |
| C12 | Applied | lesson10.sa.html 824 | [HI] changed from 0.480 to 0.944 mol/L; gives Keq about 54.3. No model answer exists for this question in the file. |
| C13 | Not applied | lesson07 (704), lesson11 (746 to 749), lesson15 (365), lesson17, lesson18 | Searched raw HTML: no "&sup1;" anywhere in chemistry module 5. Charges and exponents already use `<sup>+</sup>`, `<sup>&minus;</sup>` or Unicode. Remaining `&sup2;`/`&sup3;` are genuine squares and cubes. Nothing to change. |
| C14 | Applied | lesson17.sa.html 693, 708, 709, 716, 717, 718, 723 | Ag2SO4 Worked Example 1: s = 1.44 x 10^-2, [Ag+] = 2.88 x 10^-2, [SO4 2-] = 1.44 x 10^-2, Ksp = 1.2 x 10^-5 (matches Extended Response line 871). Intermediate square recomputed as 8.294 x 10^-4. |
| C15 | Applied | lesson09.sa.html 173, 831 | Hero text now says K for N2 + O2 can be calculated today from thermodynamic data (about 10^-30), not measured in 1864. Line 831 placeholder reworded from "Guldberg and Waage's 1864 discovery shows" to "The equilibrium law shows". |
| C16 | Applied | lesson09.sa.html 272, 491, 773, 796, 797 | NO/NO2 Keq changed to about 1 x 10^14 (concentration basis). Reverse and halved worked answer recomputed to 10^-7. |
| C17 | Applied | lesson18.sa.html 259, 260, 627, 922, 923 | Replaced "1899 Wilhelm Nernst and Arthur Noyes at MIT" with Walther Nernst 1889, confirmed by Noyes 1890; MIT and 1899 removed in all five places. |
| C18 | Applied | lesson16.sa.html 259, 736, 972 | 1856 Talbot patent claim replaced by Herschel 1839 thiosulfate fixing, adopted by Talbot and others. |
| C19 | Applied | lesson16.sa.html 445 | Exceptions now "PbI2 insoluble; PbCl2/PbBr2 slightly soluble, more soluble in hot water". |
| B1 | Applied | lesson16.sa.html 153, 159, 877 | "autonomy" replaced by "respect for persons" as the Belmont principle (also in B-L19 line 853). |
| B2 | Applied | lesson19.sa.html 153, 159, 328 (and 853) | 290,000 / 96% replaced by "about 100,000 Icelanders, over half of the adult population" by 2003. Line 328 keeps "population of 290,000" (correctly the population). |
| B3 | Applied | lesson17.sa.html 153 | Now: caught 1987, sentenced January 1988, first person convicted of murder using DNA profiling. |
| B4 | Applied | lesson17.sa.html 634, 658 | Now "Both begin with DNA extraction; STR profiling and modern sequencing then amplify the DNA by PCR". |
| B5 | Applied | lesson13.sa.html 159 | Removed the "reshuffling, not new mutations" clause; the hook question now says mutation creates new alleles and three processes shuffle them. |
| B6 | Applied | lesson13.sa.html 910 | Now says beak depth is highly heritable and that mutation creates new variation, which three processes shuffle. The later sentences in that paragraph about reshuffling versus new sequence change were left as they were. |
| B7 | Applied | lesson19.sa.html 153, 159, 328, 853 | Court case now described as upholding a woman's claim about her deceased father's records, not as overturning the database or enrolling him without consent. Line 853 "challenged and overturned" changed to "successfully challenged". The related UNCLEAR sentence "was breached by opt-out consent" was left unchanged. |
| B8 | Applied | lesson16.sa.html 153, 159, 877 | Senate hearings 1973, National Research Act 1974, commission wrote Belmont Report (published 1979); "now govern all human research" changed to "inform research ethics rules, including US federal regulations". |
| B9 | Applied | lesson15.sa.html 153, 328 | AB group credited to Decastello and Sturli (1902); Landsteiner A, B, O in 1900 to 1901. Line 159 ("between 1900 and 1902") left as is. |
| B10 | Applied | lesson18.sa.html 875 | "prohibits commercial exploitation" replaced by approved researchers, including companies, using data for health-related research in the public interest. |
| B11 | Applied | lesson09.sa.html 400, 402, 423 | "Prokaryotes" changed to "Bacteria" for no histones; true/false statement now "Eukaryotic and bacterial DNA..." (answer still false). |
| B12 | Applied | lesson09.sa.html 159 | "DNA existed as the hereditary molecule" changed to "DNA was the hereditary molecule". |
| B13 | Applied | lesson09.sa.html 153, 327 | Nuclear-envelope claim replaced by "a process called natural transformation, which some bacteria perform and eukaryotic cells do not do naturally". Line 885 ("no nuclear envelope barrier") not in the list and left as is. |
| B14 | Applied | lesson12.sa.html 159 | "proving the one gene-one enzyme link" changed to "supporting the one gene-one enzyme hypothesis". |

## Not touched

All UNCLEAR and NOT AN ERROR items were left unchanged, including lesson 10 line 500 (SO3 reverse Keq), which now sits beside the corrected lesson 12 value.

## Review before merging

- C3 and C2 use different K bases (Kp in 14, Kc in 09); an author may prefer to unify them.
- C10 is a labelling fix only; Worked Example 2 still uses Keq = 208 against the Think First 895 at 25 C.
- Several edits (C2, C14, C16, B2, B7) rewrote sentence-level wording; a human read of those lessons is advisable.
