# phys-y12-m5-v18 science check

Independent Codex source review, 6 November 2026. Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v18.md`. SHA256: `1fb055486757ed1807475ccfa86fc5b950807563add4b33f4c0a3a8804101b7b`. Design, narration and code unchanged. No exact voiced preview, full-speed playback or human listening is claimed.

At 400 km the model gives v=7687.98 m/s and T=5533.76 s, 92.2293 minutes. Four times the radius halves speed and multiplies period by eight. NASA Moon data give a cubed/T squared about 1.0193e13, within one percent of the HSC model constant 1.01372e13. The 547 km exercise gives 7605.86 m/s and 95.2492 minutes. The mountain trial speeds all intersect Earth before the circular-speed case, as independently checked from their perigees.

Findings: 0 blocker, 3 should fix, 1 optional.

- **should fix**, S2 (local fall versus constant vertical speed): The first-second comparison is valid near the surface, but falls five metres each second and five metres for every eight kilometres read as linear accumulated drops in a fixed frame. Falling distance from the initial tangent grows as time squared. Keep the comparison to the first second/first eight kilometres, or explicitly refer to each new local tangent. The continuous orbit illustration can remain. Replace the misleading repeated-step wording without adding a second projectile lesson.
- **should fix**, S12 and question card (Hubble altitude fact versus given exercise): The calculation at547km is correct, but the question presents that as Hubble's current altitude. The NASA page retrieved for this check lists483km and dates its statistics to2024; another NASA2025 presentation still says545km. These sources do not verify a current exact547km claim. Keep547km as an explicitly assumed/historical exercise value or use a generic telescope satellite, so the arithmetic need not change. Source: https://science.nasa.gov/mission/hubble/overview/hubble-by-the-numbers/
- **optional**, author note(d) (Moon comparison explanation): The numerical within-one-percent comparison is correct. Slight ellipticity alone does not explain a discrepancy in a^3/T^2 when the NASA semimajor axis is used. Remove that item from the author-only explanation; the rounded central mass, finite lunar mass and non-isolated perturbations are the relevant distinctions. No learner recording change is needed for this note.
- **should fix**, S3 onward (root decision10 velocity colour): Root decision10 assigns velocity teal. This design uses orange velocity/launch arrows instead, relying on the earlier resultant colour. Reconcile the drawings with the approved extended key before build; retain orange for kinetic energy and amber for forces. This is one shared course consistency issue, repeated in each affected design report, with no narration cost.

Checks: 17 scenes, 5606 declared narration characters under the joined speech with one space between scenes convention, about 514 seconds. Scene sum 5590 and joined count 5606 are recorded separately. Both counting conventions match the design. Bold and quoted cue phrases occur in spoken order. No U+2014 or U+2061. Question cards retain the demands, conditions and numerical givens through the countdown. Key notes are a separate quiet hold.

2017 syllabus IDs: P5-IQ3-02, P5-IQ3-04. Parent wording and child examples were compared with the cached official DOCX and design quotations. All site hashes match the route and source. A quoted point does not establish practical completion. See module5-coverage.json for one primary owner per facet, the banked-friction numerical gap and the v16 method blocker.

The written incoming and outgoing frames match the neighbouring designs. v16/v17 uses the reconciled Earth/Moon frame; v23/current m6-v01 uses the actual parallel-plate frame. Incorrect author-only scene references are reported separately from frame mismatches. Actual joins remain a playback check.

Evidence: work/brief188/calculations.json (71 independent cases, including all main calculations and geometric checks), primary-sources.json, constants-checked.md, audit.json, mechanical-audit.json, quoted-cues.json, syllabus-quotation-check.json and join-frames.json. The official HSC sheet was visually checked before the orbit arithmetic. New plate QA and site-correction entries are separate artifacts.
