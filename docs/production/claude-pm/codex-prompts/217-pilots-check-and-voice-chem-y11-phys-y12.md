# Brief 217: check and voice the two science pilots (chem-y11-m2-v06 and phys-y12-m5-v04)

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 165, 213 and 214 first. Do not spawn sub-agents. No design edits, no commits, never print or log keys. One heavy process at a time. Use the Google voice (`voice_shdbjsxcrr0a`, `gemini-3.8-flash-tts`). Never run alongside the brief 165 scheduled task.

**Priority.** These are the owner's pilots for Year 11 Chemistry and Year 12 Physics. The build gate says no other video in these courses is built until the owner accepts its pilot. Run this straight after brief 213, ahead of the re-render queue.

**1. Check.**
- **phys-y12-m5-v04, Revision 2.** Your brief 187 review passed Revision 1 clean. Claude then made the visual upgrade. Run an error check of Revision 2 using the brief 186 method:
  - changed numbers and every value the live readouts display (for example θ = 37°, R = 22.0 m), recalculated in `work/brief217/`;
  - cues quoted verbatim and in spoken order;
  - the opening frame and final frame;
  - counts and seconds;
  - plates that exist and are not stretched (the launcher base and barrel are painted);
  - no em dashes;
  - no people, hands or faces.

  Write `checks/p-y12-m5-v04-rev2-error-check.md`.
- **chem-y11-m2-v06, Revision 3.** Your brief 214 check covers it; if 214 has not run yet, do v06's part of 214 first.

Stop and report any blocker. Should-fix findings that change speech also stop that lesson's voicing. Report them, and Claude fixes them first. Findings that change only the Visual do not block voicing.

**2. Voice** each clean lesson with `scripts/generate-google-audio.mjs`, as in brief 213:
- per-scene audio, `.alignment.json` and `.generation.json`;
- measured data at `docs/production/claude-pm/lessons/<lesson key>/measured/lesson.json`, using the key named in each design's "Scene list and build ids", with scene ids, durations including holds, and display-text word timings.

**3. Validate:**
- alignment on every scene, with the worst word gap;
- a timing for every bold cue;
- the caption export;
- scene durations against the design's holds;
- a machine listen check (retries, clipping, long silences).

Human listening stays pending. Do not build or render; Claude builds the pilots.

**Hand-in:** to `status.md`, per lesson:
- the check result;
- the characters, seconds, tokens and cost;
- the measured path;
- the alignment and cue results;
- the caption check;
- anything that needs listening.
