# Brief 281: pilot Kokoro, a free open-source voice, against our current voices

Read `00-standing-rules.md`. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Run this only when no voicing, render or stills job is running, and never between 18:30 and 19:00. Brief 280 comes first if it is still open.

## Why (owner, 27 November 2026)

The owner approved a trial of an open-source voice. ElevenLabs credits are costly, and the Google voice has quota limits. Kokoro (Kokoro-82M, Apache 2.0 licence) is small, runs on a CPU and is free to use commercially. If it sounds good enough, it could voice Year 11 and Maths at no cost. This is a pilot only: nothing it makes goes into a lesson or release.

## Install (owner-approved download)

- Install only from the official sources:
  - the `kokoro` package from PyPI;
  - the model weights and voice files from the Hugging Face repository `hexgrad/Kokoro-82M` (about 330 MB).
- Use a new virtual environment in `work/brief281/venv`, so the project's other Python tools are not touched.
- Kokoro needs the `espeak-ng` phonemiser for words outside its dictionary. Use the official espeak-ng Windows installer from its GitHub releases page. If installing it needs administrator rights, stop and tell root; the owner will install it.
- Record each package, version, source URL, size and SHA-256 in `work/brief281/install.json`.
- Check free space on C: first. Stop if it would fall below 5 GB.

## Test material

Use three existing scenes that are already voiced, so we can compare like with like:

1. one ElevenLabs Physics scene with a calculation, for example from `phys-y12-m5-v09` or `v11`;
2. one Google-voiced Maths Standard scene;
3. one Biology or Chemistry scene full of scientific terms (for example "deoxyribonucleic acid", "meiosis", "Le Chatelier", "enthalpy", "sodium hydroxide").

Take the exact recorded narration text from each lesson's measured `lesson.json`. Don't rewrite it.

## Task

1. **Voices.** Kokoro has no Australian voice. Generate each scene with:
   - the British voices `bf_emma`, `bf_isabella` and `bm_george`;
   - the American voice `af_heart`, as a reference.
   Use speed 1.0. Then generate one extra version of the best voice at 0.95.
2. **Measure.** For each take, record:
   - generation time against audio length (real-time factor) on this CPU;
   - peak memory (this PC has 8 GB);
   - characters per second of the finished audio, against our current rate of about 13.3.
3. **Pronunciation check.** List every word that is mispronounced, especially units, symbols read aloud (for example "m s⁻¹", "×10⁻⁷", "ΔH"), chemical names and numbers. Say whether Kokoro's custom phoneme input (`[word](/phonemes/)`) fixes each one.
4. **Alignment.** Run one take through our existing aligner (`scripts/align-google-scene.py`, as the Google takes do) and confirm it produces usable sentence timing. Report any failure.
5. **Comparison page.** Make `work/brief281/compare.html`, a plain local page. For each scene, it should play the current production take next to each Kokoro take, with the narration text shown underneath. Root and the owner will listen to it. Do not judge quality yourself beyond the pronunciation list. Human listening decides.

## Limits

- Never overwrite or move anything in `public/audio`, and never change a measured lesson.
- All output stays in `work/brief281/`.
- If any step fails twice, stop and report what failed.

## Hand-in to `status.md`

Report:
- the install record and disk used;
- the speed and memory figures;
- the pronunciation list, with fixes;
- whether alignment worked;
- the path to `compare.html`.

Owner listening is pending, so nothing is approved for production yet.
