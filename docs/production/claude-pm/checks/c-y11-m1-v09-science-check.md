# c-y11-m1-v09 science check

Revision 1, checked 5 November 2026. Source SHA-256 `04028406e749e862dfa1eca133a491ffac0acb4243b52c29eb0ade08b213ee56`. Source-only review of the design, route, starter pack and site extract. No built frames, playback, recording or learner evidence inspected.

C1-IQ2-03 (local ledger ID), official 2017 syllabus p. 37:

> calculate the relative atomic mass from isotopic composition (ACSCH024)

Compared with the freshly downloaded [official 2017 syllabus](https://www.nsw.gov.au/sites/default/files/noindex/2025-03/chemistry-stage6-syllabus-word.docx); full point audit in `work/brief177/syllabus-audit.json`. Quoting a parent point here does not claim that every sub-action is taught in this video.

The given boron, silicon and model-element arithmetic passes. Chlorine’s exact isotopic masses are below its integer mass numbers; the NIST handbook also records the design’s historical 75.77/24.23 abundances. The integer-mass weighted result is 35.4846. The periodic value is a rounded natural-sample value, not a mass possessed by one atom. [NIST chlorine data](https://pml.nist.gov/PhysRefData/Handbook/Tables/chlorinetable1.htm).

1. **Should fix:** Scene 4 rounds the contributions before adding: 35 × 0.7577 = 26.5195 and 37 × 0.2423 = 8.9651, total 35.4846, which rounds to 35.48, not 35.49. Keep guard digits in working and change the spoken result to thirty-five point four eight. The spoken replacement is length-neutral. Update the matching row and Numbers used, retaining 35.5 at three significant figures.

Site source: `module1/lesson14.sa.html`, current SHA-256 `ba2cf87ee8ad7f4ea07c89e48b2928a7f0c907507573bee7c25e307678b8c5cf`; matches route: True. Recalculation: `work/brief177/calculations.json`.

Cue phrases and their order were checked against each scene’s speech, including repeated-word ordinals. No U+2014 or U+2061 found. No positive request for a person, hand or face found. Australian spelling is retained. Attempt countdown cards retain the needed givens without answer rows; feedback remains brief. Formula and A r pronunciation still require a Google-voice pilot, not spelling-based approval.

Count: 0 blockers, 1 should fix, 0 optional; 6,202 joined narration characters; about 552 s by the design. Speech-only estimate 466.3 s. Holds and countdowns remain estimates until recording.
