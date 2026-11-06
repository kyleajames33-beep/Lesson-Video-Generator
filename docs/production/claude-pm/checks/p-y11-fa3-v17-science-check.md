# p-y11-fa3-v17 science-check

Revision 1 source checked 4 November 2026. SHA-256 `e009c6ac3211e21ab077751045012fc0cef0611bd92696bf8d829ce4f219b70a`. Source proposal only; no image QA, practical clearance, voiced preview or learner evidence.

50²*4=10000W;100kWat1kVloss50000W;at10kVloss500W;30²*.5=450W;delivered5550W;50MWat25kVloss8MW;at250kVloss80kW.

1. **Should fix:** The final question says fifty megawatts supplied to the city but treats50MW as sending-end input. Replace with power station sends50MW into the lines so the specified current and loss calculation match the givens.

Count: 0 blockers, 2 should fix; 5,510 joined narration characters. No design was edited.

The official quote/ID check is resolved in the appendix. The source handoff result is recorded below. Site-findings reconciliation, built frames and requested artwork remain separate checks. Source findings do not clear them.

## Official syllabus and route audit (4 November 2026)

Official CMS codename `ci13c391ee`; route ID `ci13c391ee`. [Official page](https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907).

> Solve problems relating to energy loss in circuits using P = I 2 R and the law of conservation of energy

Fresh official wording matches the route.

Route question: Why do wires waste energy as heat, and why does sending power at a high voltage waste less?

Question occurs verbatim in design: True. Start: Start with Energy Loss in Circuits, P = I²R. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions.. Stop: Stop after the learner can answer: How can I explain and apply energy loss in circuits, p = i²r? Teach only the listed actions; the next video owns its separate question.. Next: phys-y11-fa3-v18: Why does one broken globe switch off a series circuit but not a parallel one, and how can you tell which is which from a diagram?.

Site source exists: True; current file hash matches route: True. A hash match verifies source identity, not all reused numbers or scientific accuracy.

The paired source comparison is recorded below; later built-frame review remains required. Asset inventory is in `work/brief163-164-audit/audit.json`; an existing filename is not visual QA.

## Numerical recalculation evidence

Independent Python results are in `work/brief164/calculations.json`, key `fa3-v17`; code: `work/brief164/calculate.py`. These checks cover the listed numerical examples, not unprovided apparatus performance or human playback.

```json
{
  "linePower": 10000,
  "hookLowLoss": 50000.0,
  "hookHighLoss": 500.0,
  "workshopLoss": 450.0,
  "workshopDelivered": 5550.0,
  "lastLosses": [
    8000000.0,
    80000.0
  ]
}
```

## Paired handoff source check (4 November 2026)

Compared this design's opening declaration and scene 1 with `phys-y11-fa3-v16.md`'s final non-notes handoff visual. No conflicting board, plate, numerical readout or Next-chip element was found at source level. File hashes and paired excerpts are in `work/opening-pairs.json`. This is a source comparison; rendered-frame identity and motion are not passed.

## House plate reuse conflict

**Should fix:** The v17 handoff and v18 opening require two separately lit front windows, one failing while the other stays on. The reused `phys-y11-house-v1.png` request in FA2 v15 specifies a side view with one window, and the generated candidate has one window. Name a suitable two-window house plate or give an explicit visual repair before building this join. The current plate is not cleared for this later use. No narration needs to be added.
