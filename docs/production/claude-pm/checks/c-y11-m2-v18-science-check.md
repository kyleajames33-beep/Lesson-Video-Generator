# c-y11-m2-v18 science check

Independent source review, 6 November 2026. Reviewed SHA-256 `6293589e0d86067b035c370f8181a51139e9805b33fff930ad0026d6f503fe43`. Entry knowledge, start/stop boundaries and the route handoff were checked against this exact design. No design edits, narration generation or listening approval.

C2-IQ4-01 (local ledger ID), official Chemistry Stage 6 2017 wording:

> conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:

Charles values from 10 to 80 C are 50.0 to 62.4 mL. The worked 45 mL at 20 C becomes 51.1 mL at 60 C; the rigid-vessel 150 kPa case gives about 165 kPa at 50 C. The unchanged OpenStax air table has six published rows from -100 to 150 C and 36 to 88 kPa; its fitted zero is about -273.08 C. The publisher presents this as experimental data; no raw instrument record is claimed. All rows and the viewed figure are preserved in v18-published-secondary-data.json.

[Published OpenStax figure 8.11](https://openstax.org/books/chemistry-atoms-first-2e/pages/8-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law).

1. **Blocker (data provenance, scene 2, 3 and 10, evidence labels and secondary dataset):** Scene 10 defines secondary data as values someone else collected but gives values calculated from the very gas law being taught. Scene 3 also labels calculated Charles values measured. Keep the Charles values explicitly illustrative throughout and replace scene 10 with the unchanged published fixed-volume air table now found in OpenStax figure 8.11, with its citation. Work/brief182/v18-published-secondary-data.json preserves all six rows and the checked source image. The published table fits a zero near -273.08 C and is already in kPa. Replace the narrated endpoints/range to match that table; its existing roughly 433-character scene gives room for this without extra time. Root decision 22 requires using a citable dataset if found. No design was edited.

2. **Should fix (shared movable-boundary condition, scene 1 and 5, bath rig and pressure tag):** A free vertical plunger keeps pressure approximately constant under its weight and external pressure, not exactly equal to room pressure. Replace room-pressure assertions with constant-pressure wording, and the 100 kPa tag with P steady unless a negligible/counterbalanced load assumption is explicit. Shared with v17 handoff; replace existing words rather than adding time.

3. **Should fix (apparatus temperature rating, scene 7 and author note c):** The universal claim that 80 C is below the softening range of common plastic syringes is not a verified operating specification. The exact syringe and seals need a manufacturer rating and the school-approved hot-water method; use a suitable rated gas syringe and the existing heated-water precautions. Public NSW safety guidance alone does not approve this exact temperature/apparatus combination. Do not present a generic plastic syringe as automatically suitable for an 80 C bath. Add the apparatus condition in method notes/current safety strip, no extra speech.

4. **Should fix (rounded equality, scene 6, ratio rows):** The visual explicitly links 1.035 and 1.036 with an equals sign. Use approximately equal and identify the displayed volume as rounded, as the author note already explains. No narration change.

Reference atomic masses and constants use the current-linked official HSC data sheet, visually inspected in work/brief180 and work/brief182. The 66-case equation audit checks atoms and explicit charge, not phase or method approval. Public NSW guidance does not clear an exact school practical.

Site source identity:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html`: SHA-256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`; route identity True.

1 blockers, 3 should fix, 0 optional. Scene-sum narration count 6,367; joined count 6,383. Headline counts match the scene-sum convention. Estimated duration 566 seconds is planning, not measured timing. No U+2014 or U+2061. Bold and quoted cues match the spoken order in the saved cue audits. Required repairs fit existing scenes through replacement wording or author/display tags. Exact built layout, caption/phone fit, apparatus assembly, motion at playback speed and human listening remain pending. Reuse contact sheets were inspected; assembly QA and new plates are separate deliverables.
