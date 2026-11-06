# p-y11-fa3-v20 science-check

Revision 1 source checked 4 November 2026. SHA-256 `4d8002e3bbd5582d5cf7d4226443083b8206900872a116b1242b4bfe426adb66`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

3+5=8ohm;12/8=1.5A;drops4.5and7.5V. Adding4ohm gives1A;18/(2+7)=2A,drops4and14;unknownR=(12-3)/(.75)=12ohm.

1. **Should fix:** The zero-leftover-energy analogy should compare potential differences around the closed loop, not imply a coulomb has an absolute energy of zero at the battery return. Replace with net energy change around a complete loop is zero.

Count: 0 blockers, 1 should fix; 5,150 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci8fb6b1e5`; route ID `ci8fb6b1e5`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Account for the magnitude of current at any point in a series circuit

Fresh official wording matches the route.

Official CMS codename `ci32112b01`; route ID `ci32112b01`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Account for the total voltage of a series circuit being the sum of the voltages of its components using conservation of energy and V s e r i e s = V 1 + V 2 + ⋯ + V n

Fresh official wording matches the route.

Official CMS codename `ci9b07eafe`; route ID `ci9b07eafe`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Account for the total resistance of a series circuit being the sum of the resistances of its components using R s e r i e s = R 1 + R 2 + ⋯ + R n

Fresh official wording matches the route.

Route question: Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up?

Question occurs verbatim in design: True. Start: Start with Analysing Series Circuits, Rₜ = ΣR and Vₜ = ΣV. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply analysing series circuits, rₜ = σr and vₜ = σv? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa3-v21: Why does adding another branch in parallel lower the total resistance, and how do the branch currents add up?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v20`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "initialCurrent": 1.5,
  "drops": [
    4.5,
    7.5
  ],
  "thirdCurrent": 1.0,
  "attemptCurrent": 2.0,
  "unknownR": 12.0
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v19.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
