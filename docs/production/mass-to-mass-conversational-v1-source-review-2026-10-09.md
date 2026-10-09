# Mass-to-mass conversational draft: author source review

Prepared 9 October 2026 by /root/next_batch_preparation. This is an author source check, not independent approval, voiced playback or listening. Root should independently inspect before recording.

Selected lesson: src/prototypes/data/mass-to-mass-conversational-v1.json
Selected SHA-256: 5fdae5ebe2b79515908ee25d4d29955061dd53b991380e19303bbbb0a5a47f9b
Base lesson: src/data/chemistry-y11-m2-l12-mass-mass-stoichiometry.json
Base SHA-256: 9aa731a83961d8ee91ca77f49f0cadd5511e060cc5c581b0f874daca639f622b
Brief SHA-256: 1c3748bc87872fcfcfed16c942d0b623f568e0d500d789d5ab0c39fff04dcff3
Script SHA-256: e63256e46fc9ba13ff1f34ee5d1b3fc405944a5d0fed4675e08fd1c96d73e29d
Text-only manifest SHA-256: d5e8307cf778d211253d4f360eba03538acfa57063489733070e18b586904f28

## Scientific checks

- C + O₂ → CO₂ conserves one carbon and two oxygen atoms. The C:CO₂ mole ratio is 1:1; coefficients alone do not give the mass ratio. Both carbon and oxygen contribute to product mass.
- Fe₂O₃ + 3CO → 2Fe + 3CO₂ conserves 2 Fe, 3 C and 6 O atoms. Pure oxide and enough CO are explicit. Fe₂O₃ is a solid represented by its formula, not assumed to be molecular ore. The iron amount is twice the oxide amount, not twice its mass. Oxygen ends in CO₂.
- 2Mg + O₂ → 2MgO conserves 2 Mg and 2 O atoms. The reverse practice starts with target MgO mass, then calculates required pure Mg assuming enough O₂ and complete reaction. It is not a claim about measured recovered yield.
- Values belong to each species at each end. Different species may share a molar-mass value. A combined mass expression is valid when it includes both species molar masses and the coefficient ratio.

| Quantity | Unrounded computation | Reported result |
| --- | --- | --- |
| Carbon amount | 0.9990841728415619 mol | Display ≈ 0.999084 mol |
| CO₂ mass | 43.9686953625843 g | 44.0 g |
| Oxide amount | 0.5009800422075685 mol | Display ≈ 0.500980 mol |
| Iron amount | 1.001960084415137 mol | Display ≈ 1.001960 mol |
| Iron mass | 55.95446091416333 g | 56.0 g |
| MgO amount | 0.49622866216752676 mol | Display ≈ 0.496229 mol |
| Mg mass | 12.060837633981738 g | 12.1 g |

Full expressions, not rounded displayed intermediates, are used on the final boards. Final precision follows 12.0 g, 80.0 g and 20.0 g supplied masses. The hook rounds verbally and the worked case distinguishes the precise supplied mass.

## Teaching and visual decisions

Ten scenes preserve the useful existing slide sequence, the coded pathway and grouped calculation board. The concept uses explicit piles [3,3] for the carbon 1:1 amount relationship. Its moving packet is labelled a calculation marker, not a literal particle. The unavailable l12MassMassBridge raster is omitted; no unrelated artwork or missing-image fallback remains.

Worked examples and reverse practice each have three reasoning stages. Supplied mass, equation and atomic reference constants are separate. Established results stay in the trail. Every grouped line has an estimated scene-local cue; results are introduced after their setup. Current estimates derive from phrase positions at 2.5 words per second plus a 24-frame speech lead. Diagram beats are relative to its explicit 30-frame delay. Component fades and bridge preparation can begin before the named beat, so actual phrase synchronization needs measured audio and motion review.

Practice prompt estimate ends at frame 780; planned silent interval is 780 to 840; estimated first answer working begins at 840. No measured responseHold is present. Prompt and feedback are separate recording segments in the manifest. Final assembly must protect audio, visible working, captions and any lesson-level recall/answer surfaces.

## Scope and remaining gates

The narration starts after molar-mass and mole-ratio entry knowledge, teaches theoretical mass prediction both ways, then hands off to limiting finite supplies. It does not claim to teach balancing from scratch, empirical formulas, limiting-reagent selection, measured yield, concentration/gases or practical conduct. Curriculum association is provisional from the existing official-source checklist; no fresh complete-coverage claim is made.

Draft contains 966 spoken words, ten scenes and eleven recording segments. No audioFile, alignment, measured captions or actual responseHold is attached. Source checks found no material arithmetic or chemical-accounting error. No U+2014 is present in the new files.

Remaining: independent source review, actual layout/phone fit and motion review, recording-stage brief evidence, paid recording by owner, measured silence/alignment/captions and result cues, exact voiced preview, human listening, then normal export/release gates. Author source checks do not substitute for those reviews.

## Focused validation

The draft-stage production brief passes with script/source review, voiced preview and human listening explicitly pending. Recording stage is intentionally blocked by independent source review pending. Stage/step cardinality, cue order, result-line bounds, prompt/answer reconstruction and zero stale media fields were checked. Summary takeaway and next-handoff cues are phrase-based estimates. The quiz countdown begins at its estimated prompt end using responseHoldStart; this does not claim a measured responseHold.

## Narration revision before recording

The three numerical passages now explain approximate amounts in connected speech while stable working retains supplied constants and guard digits. Carbon is just under one mole; oxide is just over half a mole and its iron amount just over one mole; MgO is just under half a mole. Each passage explicitly retains unrounded calculation values. Final 44.0, 56.0 and 12.1 g and reaction/purity assumptions remain audible. Arithmetic and displayed expressions are unchanged. All source/script/preview/listening approval remains pending.

Estimated stage and result cues, scene-local frames at 30 fps:

```json
[
  {
    "sceneId": "worked-example",
    "stageAts": [
      348,
      684,
      924
    ],
    "lines": [
      {
        "label": "Known carbon amount",
        "lineAts": [
          348,
          468
        ],
        "lines": [
          "n(C) = 12.0 ÷ 12.011",
          "n(C) ≈ 0.999084 mol"
        ]
      },
      {
        "label": "Wanted carbon dioxide amount",
        "lineAts": [
          684,
          840
        ],
        "lines": [
          "CO₂ : C = 1 : 1",
          "n(CO₂) = n(C) × (1 ÷ 1)"
        ]
      },
      {
        "label": "Wanted carbon dioxide mass",
        "lineAts": [
          1044,
          1212,
          1284
        ],
        "lines": [
          "M(CO₂) = 12.011 + 2(15.999) = 44.009 g mol⁻¹",
          "m(CO₂) = (12.0 ÷ 12.011) × 44.009",
          "m(CO₂) ≈ 43.969 g → 44.0 g"
        ]
      }
    ]
  },
  {
    "sceneId": "worked-example-2",
    "stageAts": [
      444,
      840,
      1224
    ],
    "lines": [
      {
        "label": "Known oxide amount",
        "lineAts": [
          444,
          660
        ],
        "lines": [
          "M(Fe₂O₃) = 2(55.845) + 3(15.999) = 159.687 g mol⁻¹",
          "n(Fe₂O₃) = 80.0 ÷ 159.687 ≈ 0.500980 mol"
        ]
      },
      {
        "label": "Wanted iron amount",
        "lineAts": [
          840,
          948
        ],
        "lines": [
          "Fe : Fe₂O₃ = 2 : 1",
          "n(Fe) = n(Fe₂O₃) × (2 ÷ 1) ≈ 1.001960 mol"
        ]
      },
      {
        "label": "Wanted iron mass",
        "lineAts": [
          1224,
          1404
        ],
        "lines": [
          "m(Fe) = (80.0 ÷ 159.687) × 2 × 55.845",
          "m(Fe) ≈ 55.954 g → 56.0 g"
        ]
      }
    ]
  },
  {
    "sceneId": "quick-check",
    "stageAts": [
      840,
      1308,
      1500
    ],
    "lines": [
      {
        "label": "Known magnesium oxide amount",
        "lineAts": [
          972,
          1128
        ],
        "lines": [
          "M(MgO) = 24.305 + 15.999 = 40.304 g mol⁻¹",
          "n(MgO) = 20.0 ÷ 40.304 ≈ 0.496229 mol"
        ]
      },
      {
        "label": "Wanted magnesium amount",
        "lineAts": [
          1308,
          1404
        ],
        "lines": [
          "Mg : MgO = 2 : 2 = 1 : 1",
          "n(Mg) = n(MgO) × (2 ÷ 2)"
        ]
      },
      {
        "label": "Wanted magnesium mass",
        "lineAts": [
          1500,
          1644
        ],
        "lines": [
          "m(Mg) = (20.0 ÷ 40.304) × 24.305",
          "m(Mg) ≈ 12.061 g → 12.1 g"
        ]
      }
    ]
  }
]
```

## Production-field correction

Set introDurationInFrames to 0 and syllabusNeutral to true to select the hook-first, course-neutral reusable core. Science, speech and working are unchanged. Earlier native stills against source 48d377edc4f653c5d07593a2dc43ca2c7197eee66c3bd7c23a01869d1707cf26 are historical static-geometry observations, not exact current playback evidence. Current selected props and native chrome need reinspection. All approval remains pending.
