# Brief 89: Module 6 C09 and C10: error-only check and site corrections log

Read `00-standing-rules.md` first. The designs are at Revision 2 in `docs/production/claude-pm/lessons/`:
- `chem-m6-c09.md`: weak-acid neutralisation heat (Hess's law with the ionisation step)
- `chem-m6-c10.md`: Ka and pKa, Ka from a measured pH, Ka × Kb = Kw

No plates are needed. Nothing is voiced yet.

## 1. Error-only fact check, before voicing

Check every narration line (lines starting `> `), the on-screen text in each "Visual:" paragraph, the attempts and feedback, the key notes and the YouTube metadata:
- **Enthalpies and steps:** recompute every enthalpy and ionisation step on the stated −57 kJ/mol convention: HCl, ethanoic, methanoic, HF and HCN with NaOH, and HCl with NH₃. Cite the sources for the measured values.
- **C10 calculations:** recompute every Ka, pKa and Kb, the ICE working, and Ka × Kb = Kw. Check the pH and pKa decimal places.
- **Equations:** check every equation, state and charge.
- **Dotpoints:** check each one word for word against the 2017 syllabus.
- **Exam style:** check that each question reads like a real HSC Section II question without copying one.

Write `checks/codex-check-89.md`, one section per design, giving each error with the corrected text and a source. Report errors only.

## 2. Site corrections log

The C09 author found 11 new errors in site Chemistry Module 6 lesson 10 and 6 in lesson 12. They are listed in each design's Decisions section. Examples:
- "can never be more negative than −57" (HF is −68);
- "ionisation always positive";
- CH₃COOH + NH₃ given as −49.5;
- unrealistic worked values;
- wrong percentage ionisation for HF, H₂CO₃ and HCN;
- numeric Ka values given for strong acids;
- Ka/c treated as a percentage.

Add each one to `docs/production/claude-pm/site-corrections-m6.md`, in that file's format, with the exact old text (verified in the read-only site file), the correct statement and a source. Skip any already logged.

## 3. Memory-aid bank

`docs/production/module6-memory-aids-2026-10-11.md` says weak acids "usually give a less negative value because energy is used to ionise". This is wrong: ethanoic and methanoic acid give about the same heat as a strong acid, HF gives more, and the ionisation step can release energy. Replace that clause with the corrected wording suggested in `chem-m6-c09.md` (Decisions), and note the change in the file. The same bank is copied to the site repo; record the needed site change in `site-corrections-m6.md` too.

Hand in to `status.md`.
