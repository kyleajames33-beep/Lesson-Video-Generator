# p-y11-fa3-v14 science-check

Revision 1 source checked 4 November 2026. SHA-256 `d4877002cc60bac4e51e05870ebb866116ebb7fc060a7146f5d9a4aba23bcbba`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

6/.25=24ohm;12/48=.25A;lamp6/.28=21.4286ohm;surge6/4=1.5A;4.5/.15=30ohm;12/30=.4A.

1. **Should fix:** That is how a dimmer works implies common mains dimmers operate as rheostats. Replace with a simple resistance control changes this circuit current; retain the stated low-voltage example.

Count: 0 blockers, 2 should fix; 5,464 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `cib4d17ff9`; route ID `cib4d17ff9`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Explain why the resistance of a conductor can be affected by its material, length, cross-sectional area and temperature

Fresh official wording matches the route.

Official CMS codename `ci3bbf4fbd`; route ID `ci3bbf4fbd`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Analyse the relationships between voltage, current and resistance using V = IR for electric circuits having constant and variable resistance

Fresh official wording matches the route.

Route question: Why does doubling the voltage double a resistor's current but not a lamp's, and how does V = IR handle both?

Question occurs verbatim in design: True. Start: Start with Ohm's Law, Ohmic and Non-Ohmic Conductors. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply ohm's law, ohmic and non-ohmic conductors? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa3-v15: How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v14`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "exampleResistance": 24.0,
  "current": 0.25,
  "lampResistance": 21.428571428571427,
  "surgeCurrent": 1.5,
  "attemptR": 30.0,
  "attemptI": 0.4,
  "lampAttempt": [
    20.0,
    30.0
  ]
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v13.md`'s final non-notes handoff visual. **Should fix:** v14's opening declaration adds ghosted 3.0 V / 0.20 A readings to v13's final 6.0 V frame. v13 scene 17 counts the readings to 0.40 A and 0.28 A but does not retain ghost readings. Remove those ghosts from the first frame, or add them after the opening at an existing recall cue. This is a visual-only, length-neutral repair. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
