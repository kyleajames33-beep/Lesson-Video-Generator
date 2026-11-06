# bio-m6-b16 (cloning: whole organism and gene): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 5, 7, 8, 12, 13 and 15, plus the paragraph key notes). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b16-sheet.jpg`. It holds 16 stills at the audit frames (462 to 14316). I also checked 16 stills from the middle of scenes 2 and 5 to 13.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b16/measured/lesson.json`.

## Changes by scene

- **All column scenes.** A lesson-local `MiniBoard2` tab replaces the old one, with 26 px labels (were 22 px). `Meter2` criteria bars replace the old meters, with 28 to 30 px labels (were 20 to 22 px).
- **2. One word, two jobs.** The small card stack with empty bays is gone. Two hero columns take its place: the lamb (280) and the bacterium-with-plasmid plate (460), 52 px titles and 38 px glosses. Each "what is copied" bay fills on cue, showing "the whole nucleus: all of its DNA" or "one selected gene, copied many times". The natural-clone plates stay large on the right until the gene column arrives. "Always ask: what is being copied?" lands on its cue. Ewe labels in scenes 3 and 4 are now 30 px.
- **5. Reliability (rebuilt).** A 277-cell grid fills the left of the frame (44 px pitch, r 15). It is no longer faint after "Only 29": the rejected cells stay at 65%. Large counters sit on the right: 277 fused cells, 29 embryos transferred, and 1 live lamb with the lamb plate. The 29 embryos fly into a row.
  - "Why" then shows a large nucleus (r 300) with 14 switches at 1.4 times size, and 40 px tags for the switching and reset steps.
  - The consequences are shown as painted embryo plates (the lost ones grey out), three normal lambs and one large lamb ("unusually large").
  - "Rates have improved, but most attempts still fail" lands at 40 px.
- **6. Health and purpose (rebuilt).** Dolly is large (400), with 32 px tags, the crossed "Dolly = early ageing?" chip, and four later clones at 170 px with 36 px captions.
  - On "depends on the purpose", two big panels appear side by side. Everyday breeding shows three painted dairy cows and "too unreliable", crossed. Copying one rare animal shows the ferret at 560 px and "can be worth it", ticked.
  - The ferret story then runs across the frame: cells frozen in 1988, three clones, two young, and the breeding population gaining new alleles.
- **7. Gene cloning (rebuilt with large plates).**
  - A large gene slides into a 170 px plasmid ring beside the painted bacterium-with-plasmid plate (820 px).
  - The uptake plates appear at 860 px with an amber arc ("host bacterium takes up the plasmid").
  - The division tree spans the frame (w0 210, five levels), with a clock and the colony dish at 380 px.
  - PCR is drawn on its own and large: the tube and thermometer at 2.2 times, the double strand at 1.9 times, separating and then copying, and 2, 4, 8 copies. The step tags are 40 px and "every cycle doubles" is 44 px.
- **8. Judging gene cloning.** The bacteria are larger (120). The check row, the magnifier, the vial and the cotton are larger, with 32 px labels. The limit tag is 28 px.
- **9. Memory.** The two returning meters use `Meter2` with larger plates.
- **10a. Exam question 1.** The bull is 520 px while the company is read. It moves up as the two calves arrive ("patches differ"). The table is 30 px.
- **10b. Feedback 1.** The data table is drawn at full size (30 px) beside the feedback rows (34 px). It was scaled to 60% in the question strip, which was unreadable. The calves appear beside "patches", and the verdict is 44 px.
- **10c. Exam question 2.** The rhino (640) and its frozen-cells vial fill the empty card while the stem is read. The rhino then moves up, and each project's stated product is drawn as it is read: "A: many copies of one gene" and "B: a living calf". Both clear on "Distinguish".
- **10d. Feedback 2.** The "how" lines are 28 to 30 px (were 24 px), and column B is wider.
- **11. Decision rule.** All three step cards wait at 35% from the start and light on their cues. Each carries an icon: the lamb or the gene, the egg or the plasmid, and the criteria bars. The handoff card is larger.
- **12. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 27 px. The framed memory aid is unchanged.

Scenes 1, 3 and 4 are otherwise unchanged; the audit did not flag them.

## Files touched

- `src/explainer/lessons/bio-m6-b16/s1.tsx`, `s2.tsx` and `s3.tsx`.
- `assets.ts`: adds `cow` (`b3b-dairy-cow-side-v1.png`, measured). The existing keys are unchanged.
- New: `parts2.tsx` (`MiniBoard2`, `Meter2`, `BigColumn`).
- `parts.tsx` is untouched, because B18 imports it. No shared kit or legacy file was edited.

The typecheck passes on the B12, B13, B15, B16 and B18 graphs.

## Plates needed

None required. Optional upgrades:
- a PCR thermocycler plate, to replace the coded tube and thermometer;
- a baby rhino plate for "B: a living calf", which currently uses the adult rhino plate.

## Still to check

- Judge at playback speed: the 29 embryos flying into their row, the change from the health panels to the ferret story, and the gene sliding into the plasmid.
- Ready for Codex to re-render on the existing narration.
