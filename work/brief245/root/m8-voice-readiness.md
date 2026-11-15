# Year 12 Module 8: voice readiness (16 November 2026)

Independent review before paid ElevenLabs narration. No TTS request, render or commit was made.

## What changed

Four briefs failed the recording check for one reason only: the hook `motionPurpose` began "no people.", and the checker reads that as a plan made only of prohibitions (`scripts/lib/production-brief.mjs`, `PROHIBITION_ONLY`). I rewrote only the hook `motionPurpose` in each brief. The new text says what moves on screen at each narration cue and what that movement explains. Every visual comes from the design's own scene 1 "Visual:" plan. "The plates show no people" moves to the end of the text. `visualReference` and `onScreenChange` are unchanged and still carry the full design text.

- `docs/production/claude-pm/lessons/m8b12/lesson.production-brief.json` (hook)
- `docs/production/claude-pm/lessons/m8b13/lesson.production-brief.json` (hook)
- `docs/production/claude-pm/lessons/m8b14/lesson.production-brief.json` (hook)
- `docs/production/claude-pm/lessons/m8b16/lesson.production-brief.json` (hook)

After the edit, `node scripts/check-production-brief.mjs <brief> --stage=recording` reports `ready: true` for all four and for m8c13. The only items left are the normal pending ones: exact voiced preview, its student learning review, and human listening. These are only required at export.

Root cause: `work/brief174/gen174.py` copies each scene's "Visual:" line into `motionPurpose`. When that line starts with "no people.", the generated brief fails. I simulated the generator without writing any files. It predicts the same hook failure for **bio-m8-b15 and bio-m8-b17** once they are built. chem-m8-c09 is predicted to pass. Root can fix this in the generator or apply the same hook rewrite after building.

## Readiness table

| Lesson | Brief path | Recording check | Reviews (learning / science) | Em dashes in narration | Characters | READY TO VOICE |
|---|---|---|---|---|---|---|
| bio-m8-b12 | docs/production/claude-pm/lessons/m8b12/lesson.production-brief.json | Ready (after hook motionPurpose rewrite) | Clear (L1 to L4, S1 to S5 fixed and present in current narration) | 0 | 5,969 | **Yes** |
| bio-m8-b13 | docs/production/claude-pm/lessons/m8b13/lesson.production-brief.json | Ready (after hook motionPurpose rewrite) | Clear (L1 to L4, S1 to S3 fixed) | 0 | 5,693 | **Yes** |
| bio-m8-b14 | docs/production/claude-pm/lessons/m8b14/lesson.production-brief.json | Ready (after hook motionPurpose rewrite) | Clear (blocker L1/S1 germline wording fixed; S3 is an asset note: retake the AAV plate if it was drawn as a loop) | 0 | 5,963 | **Yes** |
| bio-m8-b15 | none (lesson.json and brief not built) | Not run: no brief. Predicted to fail on the "no people." hook when built | Clear (L1 to L3, S1 to S3 fixed) | 0 | 6,022 | **No**: owner cultural hold (owner-decisions-cultural-2026-10-31.md item 2, unanswered); brief not built |
| bio-m8-b16 | docs/production/claude-pm/lessons/m8b16/lesson.production-brief.json | Ready (after hook motionPurpose rewrite) | Clear (L1, L2, S1, S2 fixed) | 0 | 6,010 | **Yes** |
| bio-m8-b17 | none (lesson.json and brief not built) | Not run: no brief. Predicted to fail on the "no people." hook when built | Clear (L1, L2, S1 to S3 fixed) | 0 | 5,953 | **No**: owner cultural hold (item 3, unanswered); brief not built |
| chem-m8-c09 | none (lesson.json and brief not built) | Not run: no brief. Predicted to pass (no prohibition-start or pasted motion lines) | Clear (blocker L1/S1 "rightmost is the molecule" fixed; S2 to S4 fixed) | 0 | 6,155 | **No, pending build only**: root decision of 6 Nov (brief 220) lifted the SDBS hold and the bromomethane plot is confirmed. The design Status line still names the SDBS decision. Needs emit, build, then the recording check |
| chem-m8-c10 | none | Not run: no brief | **Open blocker**: science S3, measured IR traces (7 of 10 compounds still provisional) | 0 | 6,312 | **No**: recording hold, measured spectra |
| chem-m8-c11a | none | Not run: no brief | **Open blocker**: science S3, measured carbon-13 shifts | 0 | 5,740 | **No**: recording hold, measured spectra |
| chem-m8-c11b | none | Not run: no brief | **Open blocker**: science S2, measured proton NMR | 0 | 5,618 | **No**: recording hold, measured spectra |
| chem-m8-c12 | none | Not run: no brief | **Open blocker**: science 1 "partly fixed; the rest held" (measured NMR and IR values) | 0 | 5,605 | **No**: recording hold, measured spectra |
| chem-m8-c13 | docs/production/claude-pm/lessons/m8c13/lesson.production-brief.json | Ready (no change needed) | Clear (L1 to L3, S1 to S3 fixed) | 0 | 6,193 | **Yes** |

**READY total: 29,828 characters** (b12 5,969 + b13 5,693 + b14 5,963 + b16 6,010 + c13 6,193). Each of these lessons reuses the standard key-notes take, so the new billed characters are about 75 fewer per lesson. Brief 220 measured this for c13: 6,118 new characters.

## Method and evidence

- **Characters:** I summed the design lines that start with "> ", with bold markers removed (the house method). Every count matches the count stated in the design. For the five built lessons, the `voiceover.text` in each lesson.json is identical, scene by scene, to the design narration. So the frozen lesson.json matches the current design and its source hash is unchanged.
- **Punctuation and AGENTS.md:** there are no em dashes (U+2014) or en dashes in any narration. In fact, all twelve narrations are plain ASCII. Each lesson has two "Pause here to answer." practice prompts. I edited no narration.
- **Reviews:** for each of the 24 review files, I read the resolution table and checked the key quoted repairs against the current narration. Removed phrases are absent: b12 "muscle, liver and fat cells"; b14 "reach every cell" and "only approach that would correct"; b16 "no lens in front of the eye can fix that"; c09 "rightmost is the molecule"; b15 "mild to moderate loss of either kind"; b17 "ties you to a unit" and "no long wait"; c13 "how well the reaction went". Replacement phrases are present. The only open blockers are the measured-spectra data gates in c10, c11a, c11b and c12. Reviewers recorded these as data gates, not design errors.
- **Hold sources:** design Status lines; codex-prompts/220-voice-m8-remaining.md (b15 and b17 held for owner cultural decisions; c10 to c12 held for spectra; c09 SDBS check not required); claude-handoff-11-nov.md.

The checker confirms that the required decisions and evidence exist. It does not judge motion quality. That still needs the exact voiced preview at playback speed.
