# Brief 37: error-only fact check sweep (G03a, G03b, G03c, C6b Revision 4, C9, B6a)

Read `00-standing-rules.md` first. Report errors only. Do not rewrite scripts. Check each design below:
- recompute every number in its "Numbers to verify" (or equivalent) section;
- check each science claim against a reliable source;
- check the 2017 syllabus dotpoint each one cites, word for word.

1. `docs/production/claude-pm/lessons/chem-m5-g03a.md` and `chem-m5-g03b.md` (split from G03, 15 Oct). Pay particular attention to the new G03a attempt: the first vessel's concentrations at the ICE-table temperature, where K = 229 and the student must see Q = 53.3 is below K.
2. `chem-m5-g03c.md` (practice set, not voiced). Check:
   - the methanol K (14.6 from the data);
   - FeO(s) + CO ⇌ Fe(s) + CO2 with K = 0.50 near 800 °C;
   - NOCl with K = 6.25 x 10^4 for making NOCl, flipped to 1.6 x 10^-5;
   - NO2 + SO2 ⇌ NO + SO3 with K about 81 near 460 °C;
   - all mole, volume and mass conversions, including 11.2 g of iron and 0.0400 mol of Cl2.

   Say which K values are realistic and which should be labelled illustrative.
3. `chem-m5-c06b.md` "## Revision 4". Check the general working "multiply both sides by the bottom, then divide by 4" for both tiny-K cases (iodine and the engine NO) and every resulting number.
4. `chem-m5-c09.md` Revision 5. Check:
   - the 0.040 mol/L N2O4 start;
   - the 18 percent (25 °C) and 79 percent (100 °C) splitting;
   - the 0.0329 and 0.0142 values, then the 0.0082 and 0.0635 values;
   - K = 0.0061 and 0.49;
   - the statement that the reaction which takes in heat speeds up more on heating.
5. `bio-m5-b06a.md`. Check the new harder attempt questions and model answers (the "Revision (15 Oct, owner: harder questions)" section, if present) and all scale numbers:
   - 2 m of DNA;
   - a 6 micrometre nucleus;
   - the tennis-ball enlargement giving more than 10 km.

Write the results to `docs/production/claude-pm/checks/codex-sweep-37.md`, one section per lesson: errors with the corrected value, then "no error found" items listed briefly. Append a short hand-in to `status.md`.
