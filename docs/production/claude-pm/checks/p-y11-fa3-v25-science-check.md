# p-y11-fa3-v25 science-check

Revision 1 source checked 4 November 2026. SHA-256 `1ba2c2e3a71d6d0349acab14e033abfcf43054c5788570c135e127837ccb439f`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

At5A,r.05,.1,.2m:B20,10,5microT;12Aat30microT gives.08m;6Aat.04 gives30microT;at.12 gives10microT;40microTat.05 gives10A.

1. **Should fix:** Mu0 is measured in the current SI, so4pi*1e-7 is an excellent approximation, not exact. Replace exactly with approximately in the shortcut; retain the syllabus numerical value and all rounded answers.

Count: 0 blockers, 2 should fix; 5,954 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci6de98fee`; route ID `ci6de98fee`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Calculate the strength of the magnetic field produced by a current-carrying wire using B = μ 0 I 2 πr

Fresh official wording matches the route.

Route question: How strong is the magnetic field near a current-carrying wire, and why does it only halve when you move twice as far away?

Question occurs verbatim in design: True. Start: Start with Magnetic Field of a Current-Carrying Wire, B = μ₀I/2πr. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply magnetic field of a current-carrying wire, b = μ₀i/2πr? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa3-v26: How does winding a wire into a long coil turn its weak, curved field into a strong, even one with a north and a south end? (design)
.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v25`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "fiveAmpFields": [
    1.9999999999999998e-05,
    9.999999999999999e-06,
    4.9999999999999996e-06
  ],
  "twelveAmpDistance": 0.07999999999999999,
  "attemptFields": [
    2.9999999999999997e-05,
    9.999999999999999e-06
  ],
  "lastCurrent": 10.000000000000002
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v24.md`'s final non-notes handoff visual. **Should fix:** The assumed v24 handoff is now contradicted by v24 scene 17. The actual frame includes probe points r and 2r with unequal field arrows and the chips 'twice the current?', 'twice as far away?' and 'how strong, in numbers?'. Its Next chip is 'Why does a wire's magnetic field grow with the current and fade with distance, and by how much?', rather than the assumed halving-only question. Carry v24's complete actual frame into v25 before the first transition; replace the assumption paragraph. No narration extension is needed. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
