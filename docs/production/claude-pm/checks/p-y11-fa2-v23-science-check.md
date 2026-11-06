# p-y11-fa2-v23 science-check

Revision 1 source checked 4 November 2026. SHA-256 `5c0f8823eb747de8211db1805c51fe44a42a9074340a17127c6e2003370eb387`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

sin50/sin30=1.532089; error against1.50=2.1393 percent. sin35/sin22=1.531128; error2.7603 percent;1/sin41.5=1.509205.

1. **Should fix:** Do not round n to1.53 before calculating percentage error. Use the unrounded1.532089 to obtain2.14 percent, about2.1 percent at two significant figures, instead of2.0 percent. Replace the working and feedback line.

2. **Should fix:** A moving block can produce either random or systematic error depending on how it moves. Replace does the same kind of thing with a consistently displaced block can cause a systematic shift.

Count: 0 blockers, 2 should fix; 5,711 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci68dbbc22`; route ID `ci68dbbc22`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c).

> Conduct a laboratory experiment to determine the refractive index of a material and assess the accuracy of the measurement

Fresh official wording matches the route.

Route question: How can tracing a ray through a glass block measure its refractive index, and how accurate is the result?

Question occurs verbatim in design: True. Start: Start with Measuring Refractive Index. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply measuring refractive index? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa2-v24: How can a graph determine a material refractive index and its uncertainty?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa2-v23`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "exampleIndex": 1.5320888862379562,
  "errorPercent": 2.1392590825304163,
  "attemptIndex": 1.5311434620538702,
  "attemptError": 2.7613061781120942,
  "normalTilt": 1.600388072180895,
  "dotSlipDegrees": [
    2.862405226111748,
    0.7161599454704085
  ],
  "criticalIndex": 1.509160495057067,
  "pMean": 1.5833333333333335,
  "qMean": 1.4966666666666666
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa2-v22.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
