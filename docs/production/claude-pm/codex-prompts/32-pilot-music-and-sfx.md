# Brief 32: royalty-free music and sound effects for a pilot

Read `00-standing-rules.md` first. The owner approved a pilot of light background audio. Rule of use (from the learning research): no music under narration; soft music only where nobody is speaking (the 10 s practice countdown and the key-notes hold), a 2 to 3 s intro sting, and very subtle sound effects. Find and download a small, clearly licensed set. Do not use ElevenLabs.

## Sources

Only sources whose licence allows use in monetised YouTube videos without attribution problems or Content ID claims: the YouTube Audio Library (Studio > Audio Library; prefer "No attribution required") or Pixabay Music and Sound Effects (Pixabay Content License). Record the exact licence for each file. Avoid anything marked "Content ID registered".

## What to get (calm, warm, acoustic or soft piano; no vocals; nothing dramatic or "corporate upbeat")

1. Countdown bed: 2 or 3 candidate loops, about 10 to 20 s, gentle, steady, slightly "thinking" (soft piano, marimba or plucked strings), loopable or with a soft end.
2. Key-notes bed: 2 candidates, 30 to 60 s, calm and unobtrusive, suitable while students copy notes.
3. Intro sting: 2 candidates, 2 to 3 s, a light, friendly signature (e.g. a soft chime or short piano motif).
4. Sound effects, subtle and short (under 1 s unless stated): a soft clock tick (or a gentle tick loop for the countdown), a gentle "pop" or bubble for a reveal, a soft paper or chalk "write" sound, a quiet whoosh or page turn for scene transitions, a soft "ding" for a correct answer.

## Output

Save as WAV or high-quality MP3 in `public/assets/audio/pilot/` with descriptive names (e.g. `countdown-bed-piano-a.mp3`, `sfx-pop-soft.wav`), trimmed of long silences, not normalised loud (keep peaks below -6 dBFS). Write `docs/production/claude-pm/assets/audio-pilot-provenance.json` (file, source URL, title, artist, licence name and link, attribution needed yes/no, duration). Append a hand-in to `status.md` with a one-line description of each candidate so Claude can pick.
