# phys-y12-m5-v19 science check

Independent Codex source review, 6 November 2026. Revision 1.

Source: `docs/production/claude-pm/lessons/phys-y12-m5-v19.md`. SHA256: `8fe9d560f47c122f95e05bb23a1f8bd372dd4d2e5303a8f50026030a4b72a03b`. Design, narration and code unchanged. No exact voiced preview, full-speed playback or human listening is claimed.

For the 24 h approximation, r=4.22975e7 m, altitude=3.59265e7 m and speed=3075.96 m/s. A sidereal day gives a slightly smaller radius with the same HSC constants; neither is the exact current physical GEO altitude. The lower-bound ground-satellite-ground signal path takes0.23951s (one ground-to-ground leg; a request and reply take about0.48s) and geometric latitude limit about 81.34 degrees at the satellite longitude. The 700 km orbit takes 98.426 minutes; A1 at 12 h gives altitude 2.02748e7 m. JMA, BoM and GPS.gov verify the named mission uses and basic orbital facts.

Findings: 0 blocker, 4 should fix, 0 optional.

- **should fix**, S5 (central force does not require every orbit to be a circle): Gravity through Earth's centre requires the orbital plane to pass through that centre; it does not make every orbit a circle centred there. Ellipses have Earth at a focus, as S6 and v20 correctly show. State the plane condition, or scope the centre statement to the circular orbits being compared. This is a length-neutral repair that preserves the equatorial-plane explanation.
- **should fix**, S6 checklist (sidereal day label): The literal label T=24h (sidereal day) conflicts with S2's correct23h56min explanation. Mark24h as the question approximation, or use the sidereal period in the condition checklist. Preserve the24h worked calculation and its35,900km result as an approximation. No new derivation is needed.
- **should fix**, S8 table and key notes4 (LEO period range): The200 to2000km class is paired with about90min as if that applied throughout. At2000km, the same model gives126.8min. Keep about90min tied to the few-hundred-kilometre example in speech, and give roughly90 to130min for the class table or omit a single class-wide period. This is an on-screen correction with no narration expansion.
- **should fix**, S4 and orbit stages (root decision10 velocity colour): Root decision10 assigns velocity teal. This design uses orange velocity/launch arrows instead, relying on the earlier resultant colour. Reconcile the drawings with the approved extended key before build; retain orange for kinetic energy and amber for forces. This is one shared course consistency issue, repeated in each affected design report, with no narration cost.

Checks: 16 scenes, 5628 declared narration characters under the joined speech with one space between scenes convention, about 515 seconds. Scene sum 5613 and joined count 5628 are recorded separately. Both counting conventions match the design. Bold and quoted cue phrases occur in spoken order. No U+2014 or U+2061. Question cards retain the demands, conditions and numerical givens through the countdown. Key notes are a separate quiet hold.

2017 syllabus IDs: P5-IQ3-03. Parent wording and child examples were compared with the cached official DOCX and design quotations. All site hashes match the route and source. A quoted point does not establish practical completion. See module5-coverage.json for one primary owner per facet, the banked-friction numerical gap and the v16 method blocker.

The written incoming and outgoing frames match the neighbouring designs. v16/v17 uses the reconciled Earth/Moon frame; v23/current m6-v01 uses the actual parallel-plate frame. Incorrect author-only scene references are reported separately from frame mismatches. Actual joins remain a playback check.

Evidence: work/brief188/calculations.json (71 independent cases, including all main calculations and geometric checks), primary-sources.json, constants-checked.md, audit.json, mechanical-audit.json, quoted-cues.json, syllabus-quotation-check.json and join-frames.json. The official HSC sheet was visually checked before the orbit arithmetic. New plate QA and site-correction entries are separate artifacts.
