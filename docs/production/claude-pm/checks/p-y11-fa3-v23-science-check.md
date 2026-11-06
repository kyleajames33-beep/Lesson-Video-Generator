# p-y11-fa3-v23 science-check

Revision 1 source checked 4 November 2026. SHA-256 `c29f033ff40dc3f3f4cc1837309be8959390b74dff0d5d97fb5c924467ef071a`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

Nominal10+(20parallel20)=20ohm,total.3A,branches.15A. Measured19.6parallel20.5=10.01995;plus10.3 gives20.31995;5.9/total=.290355;plus.4 gives.28475.

1. **Blocker:** The first attempt measures in a30ohm branch, whose ideal current is.10A, but compares.19A against the.20A main current and calls it5percent low. Either move the meter to the main15ohm resistor or use a.095A branch reading compared with.10A. Repair card and feedback together.

2. **Should fix:** Agreement of repeats does not rule out every reading error, such as a fixed calibration offset. Replace repeats rule out reading error with repeats make random scatter unlikely to explain this difference.

3. **Should fix:** The measured.146and.140A branch currents should be checked with2.85V and measured19.6and20.5ohm: predicted.145408and.139024A. They agree approximately, not exactly. Retain the stated meter resolution when describing agreement.

Count: 1 blockers, 2 should fix; 6,243 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci40cee3de`; route ID `ci40cee3de`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Conduct a laboratory experiment to measure the voltage differences across components and current at different points in a combination circuit of fixed resistance, and account for variation from the calculated values

Fresh official wording matches the route.

Route question: Why do real meter readings in a combination circuit come out close to, but not exactly on, the calculated values? The combination circuit investigation (design)


Question occurs verbatim in design: False. Start: Start with Combination circuit investigation. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Complete combination circuit investigation: identify variables and risks, acquire repeated data, analyse graphs or sources, and evaluate limitations. Do not report predictions as observations.. Next: phys-y11-fa3-v24: Why do magnetic field lines always form closed loops, and how do they map the field around a magnet, a wire and a loop?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v23`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "nominalCurrent": 0.3,
  "nominalBranch": 0.15,
  "measuredPair": 10.01995012468828,
  "recalculated": 0.2903550433832824,
  "withLeads": 0.28474972017283084,
  "missingVoltage": 0.1200000000000001,
  "leadR": 0.4210526315789478,
  "attemptMainI": 0.2,
  "attemptBranchI": 0.1,
  "attemptMiscomparedFraction": -0.050000000000000044,
  "branchActualFraction": 0.8999999999999999,
  "tolerance47": [
    44.65,
    49.35
  ],
  "fieldNeedleAngle": 12.843882846882023
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v22.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
