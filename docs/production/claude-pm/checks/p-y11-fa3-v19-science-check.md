# p-y11-fa3-v19 science-check

Revision 1 source checked 4 November 2026. SHA-256 `0fe6b78412038b240bd907bface23673524f619d6e0ee773bee3236ab3fff9d4`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

6/12=.5A;.5*.1=.05V;6/1e7=.6microA;6/.1=60A theoretical short.

1. **Should fix:** Apply root decision30: use a resistor for the quantitative12ohm example in scenes3to7. The current design still calls it a lit lamp with fixed resistance. Retain the lamp only in lighting/darkness demonstrations.

Count: 0 blockers, 1 should fix; 5,405 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci18d8abc3`; route ID `ci18d8abc3`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Explain why ammeters are connected in series, and voltmeters are connected in parallel to components, in electric circuits

Fresh official wording matches the route.

Route question: Why is an ammeter connected in series but a voltmeter in parallel, and what goes wrong if you swap them?

Question occurs verbatim in design: True. Start: Start with Meters in Circuits, Ammeters and Voltmeters. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply meters in circuits, ammeters and voltmeters? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa3-v20: Why is the current the same all the way round a series circuit, and why do its voltages and resistances add up?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v19`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "idealCurrent": 0.5,
  "ammeterDrop": 0.05,
  "voltmeterCurrent": 6e-07,
  "theoreticalShortCurrent": 60.0
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v18.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.
