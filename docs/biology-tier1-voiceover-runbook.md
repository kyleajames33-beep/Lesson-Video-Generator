# Biology Tier 1 — voiceover runbook (run at home)

The 24 Biology lessons that are taught under **both** the 2017 and the 2025 syllabus and need no edits before voicing (Tier 1 in [biology-syllabus-crossover.md](biology-syllabus-crossover.md)). Spend credits here first.

Dry-run estimate (2026-09-24): **24 lessons · 215 scenes · 177,223 chars · ~88,600 credits** (turbo v2.5, standard voice `loQD3CIxowi7eCEHd4m9`).

| Composition | File | Title |
|---|---|---|
| Biology-Y12-M5-L10 | biology-y12-m5-l10-transcription-dna-to-mrna.json | Transcription — From DNA to mRNA |
| Biology-Y12-M5-L11 | biology-y12-m5-l11-translation.json | Translation — From mRNA to Polypeptide |
| Biology-Y12-M5-L12 | biology-y12-m5-l12-proteins-phenotype.json | Proteins, Phenotype and Gene-Environment Interaction |
| Biology-Y12-M5-L13 | biology-y12-m5-l13-sources-genetic-variation.json | Sources of Genetic Variation |
| Biology-Y12-M5-L14 | biology-y12-m5-l14-mendelian-patterns.json | Mendelian Patterns |
| Biology-Y12-M5-L15 | biology-y12-m5-l15-non-mendelian-patterns.json | Non-Mendelian Patterns |
| Biology-Y12-M6-L1 | biology-y12-m6-l1-mutation-alleles-genetic-change.json | Mutation, Alleles and Genetic Change |
| Biology-Y12-M6-L2 | biology-y12-m6-l2-mutagens.json | Mutagens |
| Biology-Y12-M6-L3 | biology-y12-m6-l3-point-mutation.json | Point Mutation |
| Biology-Y12-M6-L4 | biology-y12-m6-l4-chromosomal-mutation.json | Chromosomal Mutation |
| Biology-Y12-M6-L5 | biology-y12-m6-l5-somatic-germline-coding-noncoding.json | Somatic vs Germ-Line; Coding vs Non-Coding |
| Biology-Y12-M6-L16 | biology-y12-m6-l16-recombinant-dna-transgenic-organisms.json | Recombinant DNA Technology and Transgenic Organisms |
| Biology-Y12-M6-L18 | biology-y12-m6-l18-long-term-population-change.json | Long-Term Population Change |
| Biology-Y12-M7-L1 | biology-y12-m7-l1-what-is-infectious-disease.json | What Is Infectious Disease? |
| Biology-Y12-M7-L2 | biology-y12-m7-l2-classifying-pathogens.json | Classifying Pathogens |
| Biology-Y12-M7-L4 | biology-y12-m7-l4-modes-of-transmission.json | Modes of Transmission |
| Biology-Y12-M7-L9 | biology-y12-m7-l9-physical-chemical-responses-animals.json | Physical and Chemical Responses in Animals |
| Biology-Y12-M7-L10 | biology-y12-m7-l10-innate-immune-system.json | The Innate Immune System |
| Biology-Y12-M7-L11 | biology-y12-m7-l11-adaptive-immunity-antigens-antibodies.json | Adaptive Immunity — Antigens and Antibodies |
| Biology-Y12-M7-L12 | biology-y12-m7-l12-t-cells-cell-mediated-immunity.json | T Cells and Cell-Mediated Immunity |
| Biology-Y12-M7-L13 | biology-y12-m7-l13-primary-secondary-immune-response.json | Primary and Secondary Immune Response |
| Biology-Y12-M7-L14 | biology-y12-m7-l14-vaccination-active-passive-immunity.json | Vaccination — Active and Passive Immunity |
| Biology-Y12-M7-L15 | biology-y12-m7-l15-hygiene-quarantine-public-health.json | Hygiene, Quarantine and Public Health |
| Biology-Y12-M7-L16 | biology-y12-m7-l16-antibiotics-and-antivirals.json | Antibiotics and Antivirals |

## Steps (PowerShell, repo root, on this branch)

```powershell
git pull
npm install
$env:ELEVENLABS_API_KEY = "<your key>"

# 0. Check the balance/voice first (optional, read-only)
node scripts/generate-audio-priority.mjs --balance --voices

$ids = "biology-y12-m5-l10,biology-y12-m5-l11,biology-y12-m5-l12,biology-y12-m5-l13,biology-y12-m5-l14,biology-y12-m5-l15,biology-y12-m6-l1,biology-y12-m6-l2,biology-y12-m6-l3,biology-y12-m6-l4,biology-y12-m6-l5,biology-y12-m6-l16,biology-y12-m6-l18,biology-y12-m7-l1,biology-y12-m7-l2,biology-y12-m7-l4,biology-y12-m7-l9,biology-y12-m7-l10,biology-y12-m7-l11,biology-y12-m7-l12,biology-y12-m7-l13,biology-y12-m7-l14,biology-y12-m7-l15,biology-y12-m7-l16"

# 1. Dry run — should list exactly 24 lessons (~88.6k credits)
node scripts/generate-audio-priority.mjs --lesson=$ids

# 2. Generate scene audio (idempotent; safe to re-run if it stops part-way)
node scripts/generate-audio-priority.mjs --run --lesson=$ids

# 3. Per lesson: intro voiceover + downstream sync + audit
$files = Get-ChildItem src/data -Filter "biology-y12-*.json" | Where-Object {
  $id = ($_.BaseName -split '-')[0..3] -join '-'   # biology-y12-m5-l10
  ($ids -split ',') -contains $id
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
git add src/data; git commit -m "Voice Biology Tier 1 (24 crossover lessons)"; git push
```

Then watch a couple in Studio (`npm start`) before rendering, per the build checklist.

## Notes

- `--lesson=` matches whole IDs: `…-m6-l1` selects L1 only, not L10–L19 (fixed 2026-09-24; it used to be a plain substring match).
- Images: each lesson still needs its hook image from `image-prompts-bio-y12-m5..m7-*.md`. Missing images no longer crash a render — they draw a placeholder — but `npm run audit:production` lists them.
- Tier 2 (19 more crossover lessons) is voice-ready too, except M8 L12, which needs trimming first. See the crossover doc.
