# Fungi candidate

[Watch the full silent Remotion Player](http://127.0.0.1:8778/overnight-biology-fungi-2026-10-10/).

Exact source: `lesson.json`, SHA256 `abe3dda53298a0963acc0a4f337562d72c4c591f2589f8c3b01a95f70e835443`.

One learner question: how was the new fungal cell formed? Named yeast budding, Rhizopus mitotic spores and a simplified yeast sexual cycle support the distinction between a spore's function and its formation pathway. Canonical bio-m5-b02b fungal contribution follows the plants contribution. Bacteria and protists remain separate.

`production-brief.json` is valid at draft stage. `source-notes.md` records exact primary/publisher references and the existing visual inventory. Independent source review, recording-stage approval, fresh speech/alignment, exact voiced playback, human listening, captions/device review and all export/public gates remain pending. No paid speech, full export or publication occurred.

Rebuild from repository root:

```powershell
node docs/production/overnight-module5-2026-10-10/biology-fungi/build.mjs
node docs/production/overnight-module5-2026-10-10/biology-fungi/sample.mjs
node scripts/validate-lesson.mjs docs/production/overnight-module5-2026-10-10/biology-fungi/lesson.json
node scripts/check-production-brief.mjs docs/production/overnight-module5-2026-10-10/biology-fungi/production-brief.json --stage=draft
```

The existing prototype server serves `out/prototypes` on port 8778. Player entry and native entry import the exact docs-owned source and existing lesson renderer. Output contains copied existing fonts, full Player bundle and source dependency manifest. `author.cjs` rebuilds the authored source; avoid running it over a reviewed or later selected revision. `build.mjs` recreates a pending brief, so do not run it over later recorded approval evidence without preserving that evidence.

Sample evidence is under `out/prototypes/overnight-biology-fungi-2026-10-10/stills/`. Initial all-scene samples are recorded in `native-prior-notes.json`. Final `native-samples.json` records the final notes correction only. Eight teaching scenes are unchanged from initial sample source `75e41b4f1359a4b8761719c6edbe7abbda617d81bf6c2be60fd3f0f49245dd65`. The quiet notes correction changes only their points, eliminating smaller secondary detail text. This is author source/still evidence, not an independent or continuous playback pass.

Author inspected 480px hook, yeast, mould, sexual-cycle, prompt, feedback and handoff samples, plus 960px meiosis and notes samples. Essential labels fit in those samples and sit above the reserved lower caption area. Planned 12-second response retains both cases and all demands; feedback starts after a separate 24-frame transition tail. These are unmeasured source timing estimates. Generic flow nodes use fallback stagger rather than catalogue narration lookup, explicitly recorded in the brief. Actual voiced stage cues and response silence need fresh measurement.
