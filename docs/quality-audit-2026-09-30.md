# Pre-audio quality pass — 30 September 2026

Scope: static checks across the 308 current lesson JSON files; a focused content and calculation review of Chemistry Year 12 Modules 5–6. This is not a full scientific audit of all 308 lessons or a visual release sign-off.

## Corrections in this change

- M5 L6: the simultaneous heating/compression example no longer asserts that temperature normally wins and the net yield falls slightly. The separate effects oppose; Le Chatelier's qualitative rules alone do not quantify the final yield. The question now explicitly asks what the qualitative rules can establish.
- M5 L11: corrected the small-x test in narration, bullets, metadata, caption, worked example and the coded diagram. The 5% check applies to the neglected concentration change, including its stoichiometric coefficient. Kc/initial < 5% is not a universal criterion. For the given PCl5 example, the approximate x is 0.143 M and x/0.500 is 28.6%; the exact result remains x ≈ 0.124 M. Removed an unsourced claim that 12% of HSC students earned seven marks.
- M6 L2: replaced the generic nitric-acid/aluminium hydrogen example with dilute hydrochloric acid/aluminium. Nitric acid reactions depend on conditions and do not generally follow the simple acid/metal pattern.
- M6 L10: removed a universal −57 kJ/mol maximum, a universal positive ionisation cost, and an enthalpy-based ranking of Ka. Reworked narration, bullets, captions and examples consistently. Defined matched calorimetry assumptions, completed the unknown-acid experiment's volumes and mole basis, and labelled illustrative diagram data. ΔH alone cannot rank Ka because Gibbs energy also includes entropy.
- M6 L9 hook: cleared a narration link whose filename hash did not match its text.
- Cleared narration links in every rewritten scene; retained unaffected narration. A script edit must not silently reuse old audio.
- Regenerated the registry: 308 compositions, including 63 previously unregistered Year 11 Biology files. All 75 current Y11 Biology lessons are now registered.

## Validation

- `npm run check` (TypeScript): passed.
- Final `npm run check:all` (registry generation, TypeScript and whole-catalogue validation): passed.
- Whole-catalogue `node scripts/validate-lesson.mjs`: zero structural errors. Warnings remain, especially estimated speech budgets and absent local media.
- Original M5–M6 pacing scan: 0 FAIL / 0 WARN across 37 lessons. Corrected lessons individually also pass the pacing linter.
- Whole-catalogue linked narration text hashes: no stale hashes remain after the repair.
- `git diff --check`: passed.
- Preflight regression fixtures: five independent cases passed (healthy media prerequisites, stale narration, audio cutoff, late reveal and unregistered composition).
- Read-only preflight script added: `scripts/check-render-readiness.mjs`. It checks registration, narration hashes, audio/sidecar presence, image registration/presence, alignment-based audio cutoff and transition timing, and late reveals. It does not inspect audio quality, certify captions, or replace the structural/content/visual reviews.

## Audio queue for this batch

18 scenes need generation or regeneration after this change:

| Lesson | Scenes |
|---|---|
| Chemistry-Y12-M5-L6 | worked-example-2 |
| Chemistry-Y12-M5-L11 | hook, concept-assumption, worked-example, misconception, summary |
| Chemistry-Y12-M6-L2 | worked-example-2 |
| Chemistry-Y12-M6-L9 | hook |
| Chemistry-Y12-M6-L10 | all ten narrated scenes |

The M5 L11 misconception was already unwired before this pass. M6 L9 hook was a stale link rather than a new script rewrite. No ElevenLabs calls were made and no credits were spent.

## Remaining release blockers and limits

1. Audio and alignment files are intentionally not committed. The clean checkout has 306 linked M5–M6 MP3 paths but cannot verify those files on Kyle's media machine. Do not interpret missing-local-media findings as proof the original files were lost.
2. Existing M5–M6 timings are not release-ready as checked in: the initial audit reported 262 narrated scenes above its 195-wpm hard cap and 55 above its 165-wpm target. These are text/duration estimates, not measured speech speed. Fit against actual alignment files; don't regenerate otherwise-good audio merely because an estimate is high.
3. The 34 M5–M6 scene image references are registered but their files are absent from Git. Verify the real media directory, including any existing hook illustration whose scientific labels could contradict a revised lesson.
4. Actual slide screenshots and motion were not verified. Remotion's browser download failed DNS resolution; the alternate Playwright browser downloads were truncated. Structural checks and renderer source inspection are not substitutes for frame review.
5. The renderer intentionally omits burned-in captions for YouTube. Empty scene caption arrays alone are not a visual blocker. Generate/check the external SRT/VTT subtitles from real aligned audio before publishing.
6. Broader source review remains: some other lesson hooks contain named historical experiments or assessment statistics without primary references in the lesson. They should be checked or replaced before new narration spend. The rest of the catalogue has not had a full scientific review in this pass.

## Finish on the machine with media

For each of these five lessons, sync existing audio first, then generate only missing/current-hash scenes using the existing ElevenLabs pipeline. After audio generation, run the existing finish sequence: sync voiceover, fit scene durations, build captions, auto-sync reveals and bullets. Re-check M5 L11's small-x diagram and M6 L10's changed explanations after fitting, since diagram beat props may need alignment to the new narration.

Run this after that sequence, from the repository root:

```sh
node scripts/check-render-readiness.mjs src/data/chemistry-y12-m5-*.json src/data/chemistry-y12-m6-*.json
```

Use `--json` for scene-by-scene findings. Preflight passing is a prerequisite, not permission to skip preview review. Preview the changed slides at their final reveal, inspect at phone size, check subtitle timing, listen for formula pronunciation, then render.

## Scientific verification sources

- Royal Society of Chemistry, reactions of metals with acids: https://edu.rsc.org/experiments/reactions-of-metals-with-acids-producing-salts/446.article
- OpenStax, shifts in equilibrium: https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle
- OpenStax, acid/base equilibrium calculations: https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases
- OpenStax, free energy: https://openstax.org/books/chemistry-2e/pages/16-4-free-energy

The PCl5 approximation and exact root, calorimetry values, and enthalpy differences above were independently recalculated from the lesson's supplied numbers.
