# Lesson build checklist

The master checklist of every recurring fix / decision we've made building
HSCScience lesson videos. **Run through this every time you start a new
lesson** so the same problems aren't rediscovered scene-by-scene.

Organised into rough order: data → audio → visual → metadata → publish.

---

## 1. Data alignment (do this BEFORE writing scripts)

- [ ] Read the site lesson at `subjects/chemistry/year11/module2/lessonNN.html` in the `Teaching-APP` repo to mirror structure
- [ ] Read `lessonNN.review.json` to see what assessment questions students must answer — the video must teach to these traps
- [ ] **Worked example MUST hit the band-6 trap** the site assesses (e.g. bracket multiplication in `Ca(H₂PO₄)₂`, diatomic molar mass like `Cl₂`)
- [ ] Use NESA's verbatim dot point text in `lesson.syllabusDotPoints` — not paraphrased
- [ ] Set `lesson.nesaOutcomes` to the relevant codes (e.g. `["CH11-9", "CH11/12-4", "CH11/12-6"]`)
- [ ] Set `lesson.inquiryQuestion` to the NESA inquiry question for the module section
- [ ] Set `lesson.moduleLessonCount` = total lessons in module (Module 2 = 20)

## 2. Voice and audio

### Standard config (NEVER override without an A/B test result)
- Voice ID: `loQD3CIxowi7eCEHd4m9` ("voice 1")
- Model: `eleven_turbo_v2_5`
- Settings: `{stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true, speed: 1.0}`
- Endpoint: `/v1/text-to-speech/<id>/with-timestamps` (alignment data needed for captions)
- Output: 192 kbps MP3 (only set when re-encoding via FFmpeg; ElevenLabs default is fine for first-pass gen)

### Script style ("conversational presenter", not telegraph)
- [ ] **Open scenes with discourse markers** — "OK,", "Alright,", "So,", "Here's the thing,"
- [ ] **No em-dashes in `voiceover.text`** — ElevenLabs honors them inconsistently. Use commas + period breaks.
- [ ] **Defuse lists with context phrases** — not `"atoms, molecules, ions, formula units"` but `"Atoms, if you're dealing with an element. Molecules, if it's a compound. Or ions and formula units…"`
- [ ] **No hyphenated compounds** — `"grams-per-mole"` → `"grams per mole"`. `"mol⁻¹"` → `"moles to the minus one"`. `"mass-per-mole"` → `"mass per mole"`.
- [ ] **No parallel rhetorical closes** — `"X gives you Y. X gives you Y."` reads AI-poetic. Use different sentence shapes.
- [ ] **No long colon-led constructions** — `"Where the analogy breaks: X."` → `"Where the analogy breaks. X."`
- [ ] Title narration says ONLY the lesson title, e.g. `"The Mole Concept. Part A."` — no "Year eleven Chemistry, Module two" trailer.

### Conversational TTS pacing (LOCK THIS IN — Kyle flagged drift on L3)
- [ ] **Mix sentence lengths.** Never stack three stubby fragments in a row. Long explanatory clauses with embedded commas read more naturally than "Subject. Verb. Object." cadence.
- [ ] **Commas for micro-pauses, periods only for real content shifts.** A comma = 150–300ms beat; a period = 600ms+ with reset breath. The latter sounds robotic when overused.
- [ ] **NO single-word sentences as a pacing trick.** ❌ `"Glucose. Molecular formula. C six, H twelve, O six."` ✅ `"Glucose has molecular formula C six, H twelve, O six."`
- [ ] **Read every VO aloud as a human first.** If you wouldn't say it that way in conversation, ElevenLabs won't either.
- [ ] **TTS stumbles on a chemical formula? Prefer word-pacing over period-breaks.** ❌ `"You get CH two O. That's the empirical formula."` ✅ `"You get CH two O, which is the empirical formula."`
- [ ] **Diff against L1A.** Before regenerating audio, compare proposed script to L1A's. If period density per word is 2–3× higher, that's the drift — rewrite.
- [ ] **Use SSML `<break time="X.Xs"/>` for precise pauses** (e.g. before quick-check answer reveal) instead of splicing silence into the MP3 post-gen. turbo_v2_5 supports it. Splicing should be a last resort, not the default.

### After regen
- [ ] Run `sync-voiceover-assets.mjs` to relink audio file paths to the lesson JSON
- [ ] Run `fit-scene-durations.mjs` to resize scene durations to actual audio length + 1.5s tail
- [ ] Run `build-captions.mjs` to generate word-level caption tokens from alignment data
- [ ] Run `auto-sync-reveals.mjs` to rebase reveal delays against new scene durations
- [ ] Run `auto-sync-bullets.mjs` for bullet-timing
- [ ] Run `audit-lesson.mjs` and fix all ERROR-level findings; review WARN findings

### Stutters / mumbles / mistiming
- If a scene has a single stutter mid-sentence → just wipe its MP3 + alignment and rerun the gen script. Fresh roll usually fixes it (~60 credits per scene).
- If multiple rolls keep producing stutters in the same place → use `generate-elevenlabs-chunked.mjs` to split the scene at sentence boundaries. Each shorter clip has cleaner prosody.
- Track which scenes are stutter-prone for the next lesson's authoring.

### Known TTS pronunciation respellings
- `kilopascals` → `killopascals` (double-l biases to hard-i "kill-" instead of long-e "keel-") ✓ confirmed working
- `gases` → still mispronounced as "gayses" even with `gasses` respelling. **Workaround that works**: rephrase to singular ("every gas" / "any gas" / "of a gas") instead of plural. Intro template uses "the rule for every gas" rather than "gases and molar volume".
- Pattern: when a word is consistently mispronounced, FIRST try doubling a consonant. If that fails, REPHRASE to avoid the word entirely (singular form, synonym, restructure clause).

### Sentence-boundary pause splices (when needed)
- If `audit-lesson` shows `STRONG`-severity gaps under 280 ms at sentence boundaries (period → next sentence)
- Use `splice-pauses.mjs` with a config of `{sceneId, atSec, durationMs}` entries
- Apply ALL splices in ONE pass at 192 kbps — multiple passes stack lossy compression
- Always keep `.bak` backups (script auto-creates them on first run)

## 3. Visual / slide rules

### Wall-of-text fix
- [ ] Any `body` field > ~150 chars should be converted to bullets
- [ ] When a scene has a long body, replace with 3 short bullets each ≤ 80 chars
- [ ] Bullets render via `BulletReveal` with per-bullet `at:` timestamps for narrator-paced reveals

### Visual stage rules
- [ ] `ConceptSlide` collapses to full-width single-column when no `image` AND no `diagram` is set — don't leave empty grey visual stages
- [ ] If swapping a scene's voiceover/topic, also update the `image` reference (e.g. don't keep `l2WorkedExampleCO2` after rewriting the worked example to use `Ca(H₂PO₄)₂`)
- [ ] When a scene's voiceover changes, also update `question`, `steps`, `coachNote`, `body`, `secondary`, `callout`, `caption` so display content matches what the narrator says
- [ ] **Multi-term `definition` scenes MUST use bullets** — if 2+ terms are being defined, use `bullets: [{text: "Term A: ..."}, ...]` and omit `body`/`secondary`. Single-term hero-word layout only for genuine 1-definition slides (e.g. "ONE MOLE."). Kyle flagged this on L3 and L4 — don't repeat.

### Chrome / labels
- [ ] `MarginaliaSlide` topic + eyebrow say `"KEY INSIGHT"` not `"MARGINALIA"` (the latter is internal design-system jargon)
- [ ] `MisconceptionSlide` shows "⚠ EXAM TRAP" stamp positioned at `top: 104, right: 64` (below the chrome row)
- [ ] `SummarySlide` heading regex strips `, Key Ideas` and `— Key Ideas` variants
- [ ] `SyllabusBadge` is NOT rendered per-scene — NESA outcomes appear in the intro stinger panel only
- [ ] `PriorRecap` "↻ previously" pill is NOT rendered — was visually noisy and pointless
- [ ] `ChapterRibbon` and `SceneProgress` (perimeter trace + corner dial) are NOT rendered — were overlapping content
- [ ] `BurnedCaptions` is NOT rendered for YouTube exports — viewers toggle via CC button. Keep component in tree for future short-form cuts.

### Dashes
- [ ] Strip em-dashes (—) and en-dashes (–) from ALL visible string fields via `_strip-dashes.mjs`
- [ ] Use a denylist (skip only `voiceover.text` and `captions`) — NOT an allowlist. Bullets and step text use `text` as the field name and must get stripped too.

## 4. Stinger / intro

- [ ] Stinger duration: 270 frames (9s at 30fps) — see `lesson/timing.ts` `INTRO_STINGER_FRAMES`
- [ ] Add `lesson.introVoiceover.text` = `"Welcome to HSC Science. This is HSC Chemistry. Today: <topic>. Let's get into it."` — keep ≤ ~125 chars to fit in 9s
- [ ] Generate intro audio via `scripts/generate-intros.mjs`. Saves to `public/audio/<CompositionId>/intro.<hash>.mp3` and writes path back into JSON
- [ ] Background music plays ONLY during the stinger, at 10% volume — see `LessonVideo.tsx`, the `<BackgroundMusic playForFrames={INTRO_STINGER_FRAMES}>` setup
- [ ] Music file: `public/audio/music/lofi-bed.mp3` (or replacement). Set `lesson.backgroundMusic` and `lesson.backgroundMusicVolume`
- [ ] Stinger panel shows: NESA chips → inquiry question → syllabus dot points → "By the end you'll be able to" objectives. All four sections need lesson data.
- [ ] Confidence-check verbs come straight from NESA syllabus language ("describe / calculate / apply / relate / distinguish")

## 5. Render rules

- [ ] **Never auto-render** — only on explicit user instruction for the specific lesson. Renders eat disk and slow the laptop.
- [ ] Same rule for ElevenLabs gen, OpenAI image gen, any costly API call.
- [ ] After render, verify the MP4 isn't crossed-over with another composition (Remotion bundler cache can get confused after killed parallel renders). Double-click the file locally; first scene should match.
- [ ] If two MP4s have identical durations, suspect a bundler cache issue — re-render the affected one.

## 6. YouTube publishing

- [ ] Generate package via `npm run export:youtube -- <lesson.json>` — writes `out/youtube/<id>.yt.md`
- [ ] Generate SRT via `npm run export:srt -- <lesson.json>` — writes `out/captions/<id>.srt`
- [ ] When pasting chapters into YouTube description, **delete the duplicate "0:00 Welcome"** entry (the export script emits one for the stinger and one for the title scene)
- [ ] Made for Kids: **No** (HSC content for 16-17 year olds, COPPA doesn't apply)
- [ ] AI disclosure box (deepfake/event/scene): **No** (we don't impersonate real people)
- [ ] Audio language: English (Australia) if available
- [ ] Category: Education
- [ ] License: Standard YouTube License
- [ ] Upload SRT in Subtitles tab → English → With timing
- [ ] End screen: Subscribe + previous-part / next-part link
- [ ] Pinned comment: from `.yt.md` "Pinned comment" section

## 7. Branding consistency

- [ ] Persona: no named host. Open with `"Welcome to HSC Science. This is HSC Chemistry."` — keeps you legally clean on AI-narration disclosure
- [ ] Channel URL: `hscscience.com.au` (appears bottom-right of stinger)

---

## Quick start for new lesson

```powershell
# 1. Read the site lesson to mirror structure
gh api repos/kyleajames33-beep/Teaching-APP/contents/subjects/chemistry/year11/moduleN/lessonNN.html

# 2. Patch lesson-level metadata (moduleLessonCount, nesaOutcomes, syllabusDotPoints, inquiryQuestion, confidenceCheck per scene)

# 3. Strip dashes
node scripts/_strip-dashes.mjs  # update the script's hardcoded paths

# 4. Wire intro voiceover + music
node scripts/generate-intros.mjs src/data/<lesson>.json

# 5. Generate scene audio
node scripts/export-voiceover-manifest.mjs src/data/<lesson>.json
node scripts/generate-elevenlabs-audio.mjs out/voiceover/<id>.manifest.json --voice-id=loQD3CIxowi7eCEHd4m9

# 6. Downstream sync
node scripts/sync-voiceover-assets.mjs src/data/<lesson>.json
node scripts/fit-scene-durations.mjs src/data/<lesson>.json
node scripts/build-captions.mjs src/data/<lesson>.json
node scripts/auto-sync-reveals.mjs src/data/<lesson>.json
node scripts/auto-sync-bullets.mjs src/data/<lesson>.json

# 7. Audit (must show 0 errors)
npm run audit:lesson -- src/data/<lesson>.json

# 8. Watch in Studio end-to-end — don't render yet

# 9. ONLY when user explicitly approves:
npx remotion render src/index.ts <CompositionId> out/<CompositionId>.mp4

# 10. Publish package
npm run export:youtube -- src/data/<lesson>.json
npm run export:srt -- src/data/<lesson>.json
```
