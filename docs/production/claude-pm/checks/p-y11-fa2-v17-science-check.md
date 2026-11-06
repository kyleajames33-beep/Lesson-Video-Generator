# p-y11-fa2-v17 science-check

Revision 1 source checked 4 November 2026. SHA-256 `f5b2d1e5ae2b4b5f700ed31fb00c856c1fcd37bc95bd583200d52147873abeb4`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

Corrected attempt products (92-4)*.25**2=(26-4)*.5**2=5.5 lux m². Predicted raw .5 m reading 15*4+3=63 lux. Half-centimetre error at20 cm is2.5 percent; square dependence gives about5 percent.

1. **Should fix:** A fitted intercept of 0.4 lux is not literally a line through the origin. Replace passes through the origin with consistent with the origin within the stated uncertainty.

2. **Should fix:** Half-range scatter of repeated light readings does not include the stated distance error or meter uncertainty. Keep the claimed agreement at the level supported by the complete error estimate; do not equate one-percent scatter alone with total experimental uncertainty.

Count: 0 blockers, 2 should fix; 6,227 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci9327efb9`; route ID `ci9327efb9`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c).

> Conduct a laboratory experiment to analyse the relationship between light intensity and distance from a light source

Fresh official wording matches the route.

Route question: Does measured light intensity follow an inverse square relationship?

Question occurs verbatim in design: True. Start: Start with Light intensity investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Complete light intensity investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.. Next: phys-y11-fa2-v18: How can I explain and apply the law of reflection?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa2-v17`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "inverseSquares": [
    24.999999999999996,
    11.11111111111111,
    6.249999999999999,
    4.0,
    2.7777777777777777,
    2.0408163265306127
  ],
  "rawProducts": [
    24.160000000000004,
    24.66,
    24.8,
    25.75,
    25.919999999999998,
    26.95
  ],
  "correctedProducts": [
    23.92,
    24.119999999999997,
    23.840000000000003,
    24.25,
    23.76,
    24.009999999999998
  ],
  "correctedTimesR": [
    119.60000000000001,
    80.39999999999999,
    59.6,
    48.5,
    39.6,
    34.3
  ],
  "fit": {
    "slope": 23.92596819779611,
    "intercept": 0.4126667738822505
  },
  "rawFit": {
    "slope": 23.92596819779611,
    "intercept": 6.4126667738822505
  },
  "attemptProducts": [
    5.5,
    5.5
  ],
  "attempt2": 63.0
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa2-v16.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
