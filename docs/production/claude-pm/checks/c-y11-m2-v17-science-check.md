# c-y11-m2-v17 science check

Independent source review, 6 November 2026. Reviewed SHA-256 `a666a40a2a23c602c943b519d8455a045ac084e9bda8d83f4f624f0651aaec29`. Entry knowledge, start/stop boundaries and the route handoff were checked against this exact design. No design edits, narration generation or listening approval.

C2-IQ4-01 (local ledger ID), official Chemistry Stage 6 2017 wording:

> conduct investigations and solve problems to determine the relationship between the Ideal Gas Law and:

The PV products for the ideal cases are 10,000 kPa mL. The hidden-volume illustration follows P=10200/(V+2), with displayed products from 10,000 down to 9,810. Its near-linear reciprocal-volume fit has gradient about 9,618 and intercept about 4.06 kPa. The final worked volume is 40 mL; practice gives 6 L. See gas-calculations.json. Absolute rather than gauge pressure and plunger friction remain the required conditions.



1. **Should fix (pressure reference, scene 5, sensor method and author notes):** Specify an absolute-pressure channel, reading about 100 kPa when open to the room, for these pressure-volume calculations. A gauge-pressure channel zeroed to the room cannot be inserted directly into Boyle law. Put the condition on the existing sensor/readout tag or method notes, with no added speech or duration.

2. **Should fix (causal inference, scene 7 and 8, limitation from illustrative data):** The generated tube-volume model explains this illustrative drift, but drift and a fitted intercept do not uniquely identify the cause in measured data. State that it is the model used to generate the illustration, or present hidden volume as a possible explanation and retain the leak alternative. Also call P against 1/V nearly linear over this range: P=10200/(V+2) is not exactly proportional to 1/V. The stated fit and intercept recalculate correctly. A free plunger not returning exactly to 100 mL is not a unique leak test; friction can prevent return, as the PASCO manual explicitly notes. Replace the causal assertion/check within scene 8, with the source fallback cut available.

3. **Should fix (movable plunger load, scene 15, final rig tag shared with v18 opening):** A vertically free plunger still has weight and friction. Its freedom maintains approximately constant pressure under a steady load, not necessarily exactly room pressure. Use a P steady tag and keep the volume-ratio teaching; if retaining 100 kPa, state the negligible/counterbalanced load assumption in method notes. The same correction belongs in the v18 opening. No longer explanation or extra speech is needed.

Reference atomic masses and constants use the current-linked official HSC data sheet, visually inspected in work/brief180 and work/brief182. The 66-case equation audit checks atoms and explicit charge, not phase or method approval. Public NSW guidance does not clear an exact school practical.

Site source identity:

- `C:/Users/kygs/hscscience/subjects/chemistry/year11/module2/lesson15.sa.html`: SHA-256 `fddafeba74553bc550196bfae464df4d3da32f508ee29efb3501efbcbc264d1e`; route identity True.

0 blockers, 3 should fix, 0 optional. Scene-sum narration count 5,763; joined count 5,778. Headline counts match the scene-sum convention. Estimated duration 520 seconds is planning, not measured timing. No U+2014 or U+2061. Bold and quoted cues match the spoken order in the saved cue audits. Required repairs fit existing scenes through replacement wording or author/display tags. Exact built layout, caption/phone fit, apparatus assembly, motion at playback speed and human listening remain pending. Reuse contact sheets were inspected; assembly QA and new plates are separate deliverables.
