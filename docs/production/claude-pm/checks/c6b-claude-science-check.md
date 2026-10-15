# C6b science check (Claude, errors only): chem-m5-c06b Revision 1

Scope: every number and claim in the narration, on-screen text, key notes, aids and author notes of `../lessons/chem-m5-c06b.md`. Web sources where retrievable; arithmetic recomputed by script. U+2014 search: none.

## Arithmetic (all verified)

- Perfect square: (2x)^2 / (0.45 - x)^2 = 49; 2x / (0.45 - x) = 7; 9x = 3.15; x = 0.35; E 0.10, 0.10, 0.70; 0.49 / 0.010 = 49. Other root x = 0.63 > 0.45. sqrt(50) = 7.071 ("about 7.07").
- Tiny K: 4x^2 / 0.25 = 16x^2 = 1.6 x 10^-5; x^2 = 1.0 x 10^-6; x = 0.0010; [I] = 0.0020. 0.0010 / 0.25 = 0.4 per cent. Back-substitution 4.0 x 10^-6 / 0.25 = 1.6 x 10^-5 (1.606 x 10^-5 with 0.249). Exact x = 9.98 x 10^-4, shortcut 0.2 per cent high. Start / K = 15 625.
- Attempt, root route: 2x / (0.50 - x) = 0.020; x = 0.0049505; [NO] = 0.009901 (0.0099); back-substitution gives 4.0 x 10^-4.
- Attempt, drop route: 4x^2 / 0.25 = 16x^2 = 4.0 x 10^-4; x^2 = 2.5 x 10^-5; x = 0.0050; [NO] = 0.010. x / start = 1.0 per cent; 0.010 / 0.009901 = 1.010.
- Slips: one 0.50 on the bottom: x = 0.007071, 2x = 0.0141 (0.014). +x for NO: x = 0.0098.

## Findings

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science (honesty) | 9a narration | "K is tiny, 1.6 times ten to the minus five" states an illustrative value as if measured. The textbook Kc is 3.80 x 10^-5 at 1000 K. The chip exists but the narration does not signal it. | Keep the value (see decision below); say "take it as 1.6 times ten to the minus five"; chip beside the K line. |
| 2 | science | 12a drop route | Not an error: the spoken route was valid algebra but not the taught method (learning S2). The rewritten route is verified above. | Applied with the learning edit. |
| 3 | science | all else | None found. | none |
| 4 | syllabus | all | None: C-calculate-concentration. | none |
| 5 | copy | all | None; no U+2014. | none |

## Claims checked against sources

1. **I2(g) ⇌ 2I(g).** Textbook problem sets give Kc = 3.80 x 10^-5 at 1000 K (one source 3.76 x 10^-5) ([worked problem](https://ls.sandbox2.aheadworks.com/colectivo/12270820), [exam set](https://www.yoquieroaprobar.es/_pdf/11519.pdf)); Brown, *Chemistry: The Central Science*, quotes Kc = 3.1 x 10^-5 at 800 K ([Pearson](https://www.pearson.com/channels/general-chemistry/textbook-solutions/brown-14th-edition-978-0134414232/ch15-chemical-equilibrium/at-800-k-the-equilibrium-constant-for-i21g2-2)). The splitting absorbs heat (I-I bond enthalpy about 151 kJ/mol, from memory), so K rises with temperature. A van 't Hoff estimate from 3.8 x 10^-5 at 1000 K puts 1.6 x 10^-5 at roughly 950 K (own calculation; textbook values themselves vary by a factor of a few). "Very hot" is fair; no temperature is stated.
   **Decision: keep 1.6 x 10^-5, labelled illustrative.** It gives x = 0.0010 exactly and the "dividing by 0.25 is multiplying by four" step, which the attempt feedback reuses. A real-value option exists with clean arithmetic (K = 3.8 x 10^-5, start 0.38 mol/L: x^2 = 3.61 x 10^-6, x = 0.0019 exactly, [I] = 0.0038, 0.5 per cent), but its spoken division by 0.38 is harder and it would lose the 0.25 echo. The narration is made honest instead (finding 1). Recorded in author note (e).
2. **N2 + O2 ⇌ 2NO in a hot engine, K = 4.0 x 10^-4.** Problem sets give Kc = 4.1 x 10^-4 at 2000 K ([IIT Kanpur set](https://sathee.iitk.ac.in/additional-problems-chapterwise/chemistry/equilibrium/equilibrium_ques_671), [JEE item](https://cracku.in/99-the-equilibrium-constant-for-the-reaction-n2g-o2g--x-nta-jee-main-2004)). From standard data (delta H = +180.6 kJ/mol, delta S = +24.8 J/(K mol); values from memory) K = exp(-(180 600 - 2000 x 24.8) / (8.314 x 2000)) = 3.8 x 10^-4 at 2000 K (own calculation). Equal moles of gas on both sides, so Kc = Kp. Peak burned-gas temperatures in an engine are about 2000 to 2500 K, so the K is realistic; the equal 0.50 mol/L starts are the illustrative part (real air is about 4 : 1). The card's "much hotter than in the expressions video, so a different K" matches C5's 10^-30 at room temperature.
3. **Tiny-K validity.** Standard school treatment: when K is small and the start reasonably large, start - x ≈ start; after solving, check x against the start and accept under 5 per cent, a threshold that is a convention, not a law ([UCalgary small-x](https://chem-textbook.ucalgary.ca/equilibrium-calculations-using-an-algebra-simplifying-assumption/), [LibreTexts small-x](https://chem.libretexts.org/Courses/College_of_the_Canyons/CHEM_202%3A_General_Chemistry_II_OER/04%3A_Chemical_Equilibrium/4.06%3A_Calculating_Equilibrium_Concentrations_with_the_x-is-small_Approximation)). The design calls it "a school rule of thumb" and keeps x where it is the answer. Correct.
4. **Perfect square.** The root works because both top and bottom are squares (equal H2 and I2 starts for a 1 + 1 to 2 equation); K need not be a square number (K = 50 gives 7.07). Correct. Positive root: [HI] / [H2] > 0. Correct.
5. **"HSC Chemistry does not require the quadratic formula; it can be used, but a question should never need it."** Owner statement (binding). Consistent with how HSC equilibrium questions are written (perfect squares or small-x), and the narration says it "can be used", so a student who uses it is not told they are wrong. Not contradicted by any source found; NESA wording not retrieved (UNVERIFIED as a NESA quotation, which the narration does not claim).
6. **HSC conventions.** K without a unit (tag), coefficients as powers, equilibrium values only. Correct.

## Count

0 errors. 1 honesty wording item (finding 1). 1 UNVERIFIED: NESA's own wording on the quadratic.

## Resolution

Finding 1 applied: 9a now says "K is tiny: take it as 1.6 times ten to the minus five", and the Visual puts the "illustrative value" chip beside the K line; author note (e) records the textbook values, the roughly 950 K estimate and the real-value alternative. Finding 2 applied with the learning edit (12b now runs the taught drop-x route; numbers verified above). Author note (f) now cites 4.1 x 10^-4 at 2000 K and the standard-data check; no learner-copy change was needed for NO. The UNVERIFIED NESA wording is covered by the narration's own phrasing ("can be used ... should never need it"), which states the owner's rule without quoting NESA.

## Revision 3 addendum (15 Oct, after the Codex check)

Codex (`c6ab-g03-codex-check.md`) raised two points. (1) Author note (e) put Brown's 3.1 x 10^-5 at 800 K beside Kc values; it is Kp. NIST data give Kp = 3.05 x 10^-5 and Kc = Kp / (RT) = 3.05 x 10^-5 / (0.08314 x 800) = 4.6 x 10^-7 at 800 K (gas moles +1). Author note (e) now says so; not learner copy. (2) Finding 5 above was UNVERIFIED and Codex found no official wording for it. Owner decision A: scene 10 now says "You can use it if you like, but HSC questions are written so you shouldn't need it." Key note 4, the card and the build meta match. Resolution: both applied in `../lessons/chem-m5-c06b.md` Revision 3; the rest of the narration is unchanged and text-identical to take01.
