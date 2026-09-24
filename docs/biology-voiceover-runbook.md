# Biology voiceover runbook (run at home)

Every Biology lesson that is useful under **both** the 2017 and the 2025 syllabus, in the order to voice them. Classification and reasoning: [biology-syllabus-crossover.md](biology-syllabus-crossover.md). Estimates are dry runs of `generate-audio-priority.mjs` (turbo v2.5, standard voice `loQD3CIxowi7eCEHd4m9`) on 2026-09-24.

| Phase | Lessons | What | Est. credits |
|---|---|---|---|
| 1 | 24 | Tier 1: Y12 crossover, no edits needed | ~88,600 |
| 2 | 20 | Tier 2: Y12 crossover that moves year or focus area (labels are now hidden on screen), incl. M8 L12 trimmed | ~79,300 |
| 3 | 30 | Partial lessons, now **edited to serve both syllabuses** | ~115,600 |
| 4 | 22 | **New Year 11** lessons (2025 syllabus; also cover 2017 Y11 Modules 1 to 4) | ~87,700 |
| - | 10 | 2017-only (M5 L4, M6 L15, M7 L3, L19, M8 L16, L18a/b, L19a/b, L21): **don't voice** unless the 2027 HSC cohort needs them | - |

Timing: new-syllabus Year 11 starts **2027 Term 1** and Year 12 **2027 Term 4**. Phase 4 is needed before February 2027; Phases 1 to 3 serve the current Year 12 cohort and every cohort after. Swap Phases 3 and 4 if Year 11 is the priority.

**Before Phase 3:** have **M7 L20 (tea tree oil, bush medicine)** read by a cultural reviewer. The rewrite flagged the Bundjalung wording for checking.

**Images:** Phases 3 and 4 reference 26 new hook images (prompts in `image-prompts-bio-crossover-2025.md`, already registered). Voicing doesn't need them; rendering does (a missing image draws a placeholder).

## Steps (PowerShell, repo root, on this branch)

```powershell
git pull
npm install
$env:ELEVENLABS_API_KEY = "<your key>"
node scripts/generate-audio-priority.mjs --balance --voices   # optional check

# Pick ONE phase list:
$phase1 = "biology-y12-m5-l10,biology-y12-m5-l11,biology-y12-m5-l12,biology-y12-m5-l13,biology-y12-m5-l14,biology-y12-m5-l15,biology-y12-m6-l1,biology-y12-m6-l2,biology-y12-m6-l3,biology-y12-m6-l4,biology-y12-m6-l5,biology-y12-m6-l16,biology-y12-m6-l18,biology-y12-m7-l1,biology-y12-m7-l2,biology-y12-m7-l4,biology-y12-m7-l9,biology-y12-m7-l10,biology-y12-m7-l11,biology-y12-m7-l12,biology-y12-m7-l13,biology-y12-m7-l14,biology-y12-m7-l15,biology-y12-m7-l16"
$phase2 = "biology-y12-m5-l1,biology-y12-m5-l2,biology-y12-m5-l3,biology-y12-m5-l8,biology-y12-m5-l9,biology-y12-m6-l19,biology-y12-m6-l6,biology-y12-m6-l7,biology-y12-m7-l8,biology-y12-m8-l1,biology-y12-m8-l10,biology-y12-m8-l12,biology-y12-m8-l13a,biology-y12-m8-l13b,biology-y12-m8-l2,biology-y12-m8-l3,biology-y12-m8-l6,biology-y12-m8-l7,biology-y12-m8-l8,biology-y12-m8-l9"
$phase3 = "biology-y12-m5-l5,biology-y12-m5-l6,biology-y12-m5-l7,biology-y12-m5-l16,biology-y12-m5-l17,biology-y12-m5-l18,biology-y12-m5-l19,biology-y12-m6-l8,biology-y12-m6-l9,biology-y12-m6-l10,biology-y12-m6-l11,biology-y12-m6-l12,biology-y12-m6-l13,biology-y12-m6-l14,biology-y12-m6-l17,biology-y12-m7-l5,biology-y12-m7-l6,biology-y12-m7-l7,biology-y12-m7-l17,biology-y12-m7-l18,biology-y12-m7-l20,biology-y12-m7-l21,biology-y12-m8-l4,biology-y12-m8-l5,biology-y12-m8-l11,biology-y12-m8-l14,biology-y12-m8-l15,biology-y12-m8-l17a,biology-y12-m8-l17b,biology-y12-m8-l20"
$phase4 = "biology-y11-m1-l1,biology-y11-m1-l2,biology-y11-m1-l3,biology-y11-m1-l4,biology-y11-m1-l5,biology-y11-m1-l6,biology-y11-m1-l7,biology-y11-m2-l1,biology-y11-m2-l2,biology-y11-m2-l3,biology-y11-m2-l4,biology-y11-m2-l5,biology-y11-m2-l6,biology-y11-m3-l1,biology-y11-m3-l2,biology-y11-m3-l3,biology-y11-m3-l4,biology-y11-m3-l5,biology-y11-m3-l6,biology-y11-m3-l7,biology-y11-m3-l8,biology-y11-m3-l9"
$ids = $phase1

# 1. Dry run: check the lesson count and credits match the table above
node scripts/generate-audio-priority.mjs --lesson=$ids

# 2. Generate scene audio (idempotent; safe to re-run if it stops part-way)
node scripts/generate-audio-priority.mjs --run --lesson=$ids

# 3. Per lesson: intro voiceover + downstream sync + audit
$want = $ids -split ","
$files = Get-ChildItem src/data -Filter "biology-*.json" | Where-Object {
  $l = Get-Content $_.FullName -Raw | ConvertFrom-Json
  $cid = ("{0}-{1}-{2}-{3}" -f $l.subject, ($l.yearLevel -replace "Year ","Y"), ($l.module -replace "Module ","M"), ($l.lesson -replace "Lesson ","L")) -replace "\s",""
  $want -contains $cid.ToLower()
}
foreach ($f in $files) {
  $p = "src/data/$($f.Name)"
  node scripts/generate-intros.mjs $p
  node scripts/sync-voiceover-assets.mjs $p
  node scripts/fit-scene-durations.mjs $p
  node scripts/build-captions.mjs $p
  node scripts/auto-sync-reveals.mjs $p
  node scripts/auto-sync-bullets.mjs $p
  npm run audit:lesson -- $p
}

# 4. Commit the JSON changes (audio paths, fitted durations, reveal timings)
npm run check:all
git add src/data; git commit -m "Voice Biology phase N"; git push
```

Then watch a couple in Studio (`npm start`) before rendering, per the build checklist.

## Lesson lists

### Phase 1 (Tier 1)
| Composition | Title |
|---|---|
| Biology-Y12-M5-L10 | Transcription — From DNA to mRNA |
| Biology-Y12-M5-L11 | Translation — From mRNA to Polypeptide |
| Biology-Y12-M5-L12 | Proteins, Phenotype and Gene-Environment Interaction |
| Biology-Y12-M5-L13 | Sources of Genetic Variation |
| Biology-Y12-M5-L14 | Mendelian Patterns |
| Biology-Y12-M5-L15 | Non-Mendelian Patterns |
| Biology-Y12-M6-L1 | Mutation, Alleles and Genetic Change |
| Biology-Y12-M6-L2 | Mutagens |
| Biology-Y12-M6-L3 | Point Mutation |
| Biology-Y12-M6-L4 | Chromosomal Mutation |
| Biology-Y12-M6-L5 | Somatic vs Germ-Line; Coding vs Non-Coding |
| Biology-Y12-M6-L16 | Recombinant DNA Technology and Transgenic Organisms |
| Biology-Y12-M6-L18 | Long-Term Population Change |
| Biology-Y12-M7-L1 | What Is Infectious Disease? |
| Biology-Y12-M7-L2 | Classifying Pathogens |
| Biology-Y12-M7-L4 | Modes of Transmission |
| Biology-Y12-M7-L9 | Physical and Chemical Responses in Animals |
| Biology-Y12-M7-L10 | The Innate Immune System |
| Biology-Y12-M7-L11 | Adaptive Immunity — Antigens and Antibodies |
| Biology-Y12-M7-L12 | T Cells and Cell-Mediated Immunity |
| Biology-Y12-M7-L13 | Primary and Secondary Immune Response |
| Biology-Y12-M7-L14 | Vaccination — Active and Passive Immunity |
| Biology-Y12-M7-L15 | Hygiene, Quarantine and Public Health |
| Biology-Y12-M7-L16 | Antibiotics and Antivirals |

### Phase 2 (Tier 2)
| Composition | Title |
|---|---|
| Biology-Y12-M5-L1 | Reproduction and Continuity of Species |
| Biology-Y12-M5-L2 | Reproduction in Animals |
| Biology-Y12-M5-L3 | Reproduction in Plants, Fungi, Bacteria and Protists |
| Biology-Y12-M5-L8 | Meiosis — Reduction Division and Variation |
| Biology-Y12-M5-L9 | DNA in Prokaryotes and Eukaryotes |
| Biology-Y12-M6-L19 | Variation and Allele Frequency |
| Biology-Y12-M6-L6 | Causes of Genetic Variation |
| Biology-Y12-M6-L7 | Gene Pools |
| Biology-Y12-M7-L8 | How Plants Respond to Pathogens |
| Biology-Y12-M8-L1 | Homeostasis and Feedback Loops |
| Biology-Y12-M8-L10 | Cancer |
| Biology-Y12-M8-L12 | Epidemiology: Measures and Study Design |
| Biology-Y12-M8-L13A | Analysing Epidemiological Data — Pattern Recognition and Risk Factor Quantification, Part A |
| Biology-Y12-M8-L13B | Analysing Epidemiological Data — Pattern Recognition and Risk Factor Quantification, Part B |
| Biology-Y12-M8-L2 | Temperature Regulation |
| Biology-Y12-M8-L3 | Glucose Regulation |
| Biology-Y12-M8-L6 | Causes of Non-infectious Disease |
| Biology-Y12-M8-L7 | Genetic Diseases |
| Biology-Y12-M8-L8 | Environmental Diseases |
| Biology-Y12-M8-L9 | Nutritional Diseases |

### Phase 3 (edited to serve both)
| Composition | Title |
|---|---|
| Biology-Y12-M5-L5 | Manipulating Reproduction in Agriculture |
| Biology-Y12-M5-L6 | DNA Structure and DNA Replication |
| Biology-Y12-M5-L7 | Mitosis and the Cell Cycle |
| Biology-Y12-M5-L16 | Frequency Data and SNP Analysis |
| Biology-Y12-M5-L17 | DNA Sequencing and DNA Profiling |
| Biology-Y12-M5-L18 | Large-Scale Population Genetics Data |
| Biology-Y12-M5-L19 | Predicting Population Genetic Patterns |
| Biology-Y12-M6-L8 | Biotechnology |
| Biology-Y12-M6-L9 | Ethics and Social Implications |
| Biology-Y12-M6-L10 | Future Directions and Benefits |
| Biology-Y12-M6-L11 | Biodiversity Change Caused by Genetic Techniques |
| Biology-Y12-M6-L12 | Evaluating Biotechnology: Mosquito-borne Disease |
| Biology-Y12-M6-L13 | Germline Change: Reproductive and Genetic Engineering Technologies |
| Biology-Y12-M6-L14 | Artificial Pollination and Artificial Insemination |
| Biology-Y12-M6-L17 | Benefits of Genetic Technologies: Agriculture, Medicine and Conservation |
| Biology-Y12-M7-L5 | Microbial Testing |
| Biology-Y12-M7-L6 | Infectious Disease in Plants |
| Biology-Y12-M7-L7 | Animal Disease and Australian Biosecurity |
| Biology-Y12-M7-L17 | Pesticides and Genetic Engineering |
| Biology-Y12-M7-L18 | Malaria and Dengue: Biotechnology Against Mosquito-borne Disease |
| Biology-Y12-M7-L20 | Bush Medicine: Tea Tree Oil and Indigenous Knowledge |
| Biology-Y12-M7-L21 | Controlling Epidemics: Environmental Management and Quarantine |
| Biology-Y12-M8-L4 | Water Balance: Hypothalamus, Pituitary and ADH |
| Biology-Y12-M8-L5 | Plant Water Balance |
| Biology-Y12-M8-L11 | Causes of Non-infectious Disease: Mastery |
| Biology-Y12-M8-L14 | Treating Non-infectious Disease: Immunotherapy for Melanoma |
| Biology-Y12-M8-L15 | Preventing and Managing Non-infectious Disease |
| Biology-Y12-M8-L17A | Genetic Disorders, Part A |
| Biology-Y12-M8-L17B | Genetic Disorders, Part B |
| Biology-Y12-M8-L20 | The Nephron and Dialysis |

### Phase 4 (new Year 11)
| Composition | Title |
|---|---|
| Biology-Y11-M1-L1 | Cell Structure |
| Biology-Y11-M1-L2 | Microscopy |
| Biology-Y11-M1-L3 | The Fluid Mosaic Model |
| Biology-Y11-M1-L4 | Passive Transport |
| Biology-Y11-M1-L5 | Active and Bulk Transport |
| Biology-Y11-M1-L6 | What Cells Need |
| Biology-Y11-M1-L7 | Enzymes |
| Biology-Y11-M2-L1 | Levels of Organisation |
| Biology-Y11-M2-L2 | Photosynthesis and Respiration |
| Biology-Y11-M2-L3 | Plant Transport |
| Biology-Y11-M2-L4 | Digestion |
| Biology-Y11-M2-L5 | Blood and Circulation |
| Biology-Y11-M2-L6 | Gas Exchange |
| Biology-Y11-M3-L1 | Natural Selection |
| Biology-Y11-M3-L2 | Adaptations |
| Biology-Y11-M3-L3 | Patterns of Evolution |
| Biology-Y11-M3-L4 | Evidence for Evolution |
| Biology-Y11-M3-L5 | Resistance: Evolution in Action |
| Biology-Y11-M3-L6 | Australian Megafauna, Monotremes and Marsupials |
| Biology-Y11-M3-L7 | First Nations Knowledge of Adaptations |
| Biology-Y11-M3-L8 | Ecosystems and Sampling |
| Biology-Y11-M3-L9 | Relationships and Populations |

## Notes

- `--lesson=` matches whole IDs: `...-m6-l1` selects L1 only, not L10 to L19.
- Durations in edited and new lessons are word-count estimates; step 3 (`fit-scene-durations`) replaces them with real audio lengths.
