# p-y11-fa3-v15 science-check

Revision 1 source checked 4 November 2026. SHA-256 `091401e84bff6263a2e9ba8c90c4dc9768c2c2b90f918e4809a72360eaa64c8e`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

Wiremeans need the full table before fitting. LampR=10,12.5,15,17.3913,19.2308,21.4286ohm. AttemptR=10and15ohm.

1. **Should fix:** A zero adjustment is not available on every digital current/voltage range. Replace zero it with check zero and account for any offset using the meter instructions.

2. **Should fix:** The.61to.55A nichrome warm reading requires a roughly10.9percent resistance increase. Verify alloy/temperature plausibility as root decision22 requests, or use its approved.58A fallback. No fabricated measured result.

Count: 0 blockers, 2 should fix; 6,225 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci0f358d9a`; route ID `ci0f358d9a`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Conduct a laboratory experiment to examine the relationships between voltage and current for ohmic conductors and non-ohmic conductors

Fresh official wording matches the route.

Route question: How can measuring the current at several voltages show whether a conductor is ohmic or non-ohmic?

Question occurs verbatim in design: True. Start: Start with Conductor investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Complete conductor investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.. Next: phys-y11-fa3-v16: Why do a voltage and a current together set how fast a component transfers energy?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v15`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "wireMeans": [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6
  ],
  "wireResistances": [
    5.0,
    5.0,
    5.0,
    5.0,
    5.0,
    5.0
  ],
  "lampResistances": [
    10.0,
    12.5,
    15.0,
    17.391304347826086,
    19.23076923076923,
    21.428571428571427
  ],
  "warmResistanceIncrease": 0.1090909090909089,
  "fallbackResistanceIncrease": 0.051724137931034475
}
```


Correction to the draft review: V/I equals5.0 exactly for every mean of the paired up/down readings. The draft finding about using individual noisy readings is withdrawn. The values in `work/brief164/calculations.json` confirm this.

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v14.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
