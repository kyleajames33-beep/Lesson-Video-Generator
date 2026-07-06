# Module 2 build status & handoff

Snapshot of where Chemistry Year 11 Module 2 stands, and what's left.
Written for the post-restart session so nothing has to be re-derived.

## What's complete

**All 20 Module 2 lessons now exist as gold-standard JSON**, built from the
live site (`Teaching-APP/.../module2/lessonNN.sa.html`) as source of truth:

| Video | Topic | Audio | Images |
|-------|-------|-------|--------|
| L1A | Mole Concept (Understanding) | ✅ done | ✅ |
| L1B | Mole Concept (Applying) | ✅ done | ✅ |
| L2 | Molar Mass | ✅ done | ✅ |
| L3 | Empirical & Molecular Formulas | ✅ done | 1 of 2 (mass-breakdown is coded) |
| L4 | Gases & Molar Volume | ✅ done | coded diagram + 1 ChatGPT pending |
| L5 | Mole Calculations Consolidation | ⏳ script ready, NOT generated | pending |
| L6 | Concentration (Moles Per Litre) | ⏳ NOT generated | pending |
| L7 | Standard Solutions & Dilutions | ⏳ NOT generated | pending |
| L8 | Concentration in Context | ⏳ NOT generated | pending |
| L9 | Gravimetric Analysis | ⏳ NOT generated | pending |
| L10 | Volumetric Analysis & Titration | ⏳ NOT generated | pending |
| L11 | Stoichiometry: Mole Ratios | ⏳ NOT generated | pending |
| L12 | Mass–Mass Stoichiometry | ⏳ NOT generated | pending |
| L13 | Limiting Reagents & Theoretical Yield | ⏳ NOT generated | pending |
| L14 | Percentage Yield & Purity | ⏳ NOT generated | pending |
| L15 | Gas Stoichiometry | ⏳ NOT generated | pending |
| L16 | Stoichiometry in Solution | ⏳ NOT generated | pending |
| L17 | Back Calculations & Unknown Concentrations | ⏳ NOT generated | pending |
| L18 | Working Scientifically | ⏳ NOT generated | pending |
| L19 | Module 2 Synthesis & Exam Practice | ⏳ NOT generated | pending |
| L20 | Module 2 Review | ⏳ NOT generated | pending |

- All 15 new lessons (L6–L20): **0 pacing FAIL** against the L1A baseline,
  **0 real validation errors** (the only flagged "errors" are the
  intentional silent-title and bullets-only-definition patterns).
- Registry regenerated; `npx tsc --noEmit` passes clean.
- Legacy mismatched files (old l4-empirical, l5-molecular, l6–l12 topics)
  were deleted — they conflicted with the site-accurate versions. Git
  history preserves them.

## To finish a lesson (L5–L20), per lesson — NEEDS KYLE'S GO

Audio gen spends ElevenLabs credits, so it's gated on explicit per-lesson
approval. When approved:

```powershell
$env:ELEVENLABS_API_KEY = '<key from .claude/settings.json>'
node scripts/export-voiceover-manifest.mjs src/data/<lesson>.json
# strip empty-text title scene from the manifest, then:
node scripts/generate-elevenlabs-audio.mjs out/voiceover/<id>.manifest.json --voice-id=loQD3CIxowi7eCEHd4m9
node scripts/generate-intros.mjs src/data/<lesson>.json
# downstream sync:
node scripts/sync-voiceover-assets.mjs src/data/<lesson>.json
node scripts/fit-scene-durations.mjs src/data/<lesson>.json
node scripts/build-captions.mjs src/data/<lesson>.json
node scripts/auto-sync-reveals.mjs src/data/<lesson>.json
node scripts/auto-sync-bullets.mjs src/data/<lesson>.json
```

Then watch in Studio. Render only on explicit instruction.

## Images

- Didactic prompts for L6–L20 (one concept image each):
  `image-prompts-chem-y11-m2-l6-to-l20.md` — paste into ChatGPT, save to
  the listed paths. Registry + JSON already wired.
- L3/L4/L5 image prompts: their own files (`image-prompts-chem-y11-m2-l3/4/5.md`).
- Coded diagrams (no image needed): `gasVolumeComparison` (L4 concept),
  `massBreakdown` (L3 four-step). See `docs/lottie-and-coded-diagrams.md`.

## New tooling (Phase A)

- `scripts/lint-pacing.mjs` — run before any audio gen. `--all` scans the
  whole catalogue; flags period/word drift and stacked single-word
  sentences. FAIL at p/w > 0.16, WARN > 0.12 (L1A baseline ~0.08).
- `scripts/sweep-lessons.mjs` — structural regression detector
  (hero-definitions, comma-headings, title-VO, em-dashes). `--fix` applies
  safe auto-fixes (unvoiced em-dashes only).

## Session update (2026-06-14)

- **Coded diagrams** added and wired: `concentrationCompare` (L6),
  `titrationSetup` (L10 + L17), `limitingExcess` (L13), `errorDartboard`
  (L18). Those 5 lessons no longer need a ChatGPT image. See the updated
  `image-prompts-chem-y11-m2-l6-to-l20.md` (only 10 images still needed).
- **M1 hero-definitions** (L7, L8, L11, L12): converted to bullets layout.
  Sweep now reports `defn-hero=0 / defn-head=0`.
- **M1 pacing**: 15 flagged scenes across L7, L8, L10, L11, L12 rewritten to
  gold-standard pacing. **Their audio + captions were cleared — these
  scenes need a regen pass** (no audio generated yet, per instruction).
- **m3-cp2 quick-check**: rewritten (was the only M3/M4 FAIL); audio cleared,
  needs regen.

### Scenes now awaiting an audio regen pass (script-ready, audio cleared)
Run the per-lesson finish commands above when ready to spend credits:
- M1: l7, l8, l10, l11, l12 (multiple scenes each)
- M3: cp2-metal-reactivity (quick-check)
- (plus L5 + all of L6–L20, which were never generated)

## Known follow-ups (NOT done — backlog)

1. **L2 / L3 / L5 pacing** (8 FAIL scenes): deliberately LEFT. Their high
   period-density comes from intentional stutter-fixes (e.g. L3's "CH₂O"
   breaks). Kyle's call — smoothing them risks reintroducing stutters, so
   only touch at a future regen with stutter re-testing.
2. **M3/M4 WARN scenes** (~70 WARN, borderline-choppy): optional polish;
   they pass FAIL. Tackle at regen time.
3. **Shipped-lesson title-VO**: L1A/L1B/L2 have title VO + intro (double
   announce). Left as-is — already published; change only with a re-render.
4. **STP molar volume inconsistency on the site**: site L15 lists 22.4 in
   one place; L4 uses 22.71. Videos use 22.71 STP / 24.8 RTP (NESA-current).
5. **L4/L5 image regen**: a couple of L4/L5 images were rewritten to
   didactic prompts; regenerate when convenient.
