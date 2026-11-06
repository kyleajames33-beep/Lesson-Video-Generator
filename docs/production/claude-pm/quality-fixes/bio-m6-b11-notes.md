# bio-m6-b11 (plausible future biotechnology): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 4, 5, 11, 14 and 15). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b11-sheet.jpg`. It holds 16 stills at the audit frames (454 to 14062). I also checked 18 stills from the middle of scenes, including 8 across the CRISPR scene.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b11/measured/lesson.json`.

## Changes by scene

- **2. How CRISPR finds and cuts (rebuilt).** The painted DNA helix plate opens the scene. A large double strand fills the frame, with 74 px base pairs lettered and coloured (A yellow, T orange, G pink, C blue, matching the plate), a lilac top backbone and a teal bottom backbone.
  - On "guide RNA", the target stretch highlights and a terracotta guide RNA (with U for T) arrives.
  - On "pair", the top strand lifts aside, and the guide's bases pair one by one with the bottom strand (green ticks).
  - On "Cas9", a large translucent Cas9 surrounds the pairing.
  - On "cuts", amber cut marks cross both strands, and the strands part.
  - On "repairs", Cas9 and the guide leave, the strands rejoin with one inserted base pair ("+1 base"), and the stretch greys on "switch that stretch off".
  - On "similar stretch", the camera slides to a similar stretch. The guide pairs there with two red-crossed mismatches, and Cas9 makes a dashed off-target cut.
  - The captions are 46 px hand tags, and "Cas9" and "guide RNA" are labelled at 46 to 60 px.
- **3. Sickle cell use.** The globin switch strip is drawn 1.45 times larger, and the red cells plate is larger (w 460). The stem cells (w 128), dish (w 330) and cut strip (1.6 times larger) are bigger, with 36 to 44 px labels.
- **4. Evidence.** The patient grid is larger (r 30). A "29 of 30" readout (150 px) shows with "no severe pain crises for at least a year". From "look at what it takes", the three steps (marrow, hospital, infusion bag) wait dimmed and are 1.3 times larger, so the frame is never just dots.
- **5. Evidence ladder.** The hook's three claims wait on the right as "claims to sort" chips (44 px) while the rungs draw. The rung labels are 34 px (was 28).
- **11a. Exam question 1.** The card shows from the start. The painted liver plate fills it on "First", then moves aside as the question arrives ("liver: takes up the particles"). The countdown sits under it.
- **11b. Feedback 1.** The liver stays beside answer (a).
- **11d. Feedback 2 (the frame 14 crossfade).** The first frames now match attempt two exactly: the same card, the same question at 40 px in the same place, and the answer box. During the 14-frame crossfade nothing ghosts. Then the answer box fades, the "Evaluate" line fades, the card closes up, and the title writes at frame 24.
- **12. Decision rule.** All four step cards show at 40% from the start and light on their cues. A small evidence ladder sits on the right and lights on "place it on the evidence ladder".
- **13. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 28 px. The framed memory aid is unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b11/s1.tsx`, `s3.tsx`.
- `assets.ts`: adds the `helix` (`b5x-zoom-helix-v1.png`) and `liver` (`m8-liver-v1.png`) plates, measured from the real files. The existing keys are unchanged.
- `parts.tsx`: only the b11-only `Ladder` rung label size changes (28 to 34 px). The parts that B12, B13, B15, B16, B18 and M7 B12 import are untouched.
- New: `crispr.tsx` (`Dna`, `GuideRna`, `Cas9Big`, `CutMark`).

The typecheck passes on the B11, B12 and B13 graphs.

## Plates needed

None required. The mechanism is a coded molecular diagram (an abstract diagram, not an object). An optional upgrade is a painted bone marrow plate for scene 4's coded bone glyph.

## Still to check

- Judge at playback speed: the guide's diagonal entry crosses the lifted strand for about half a second, and check the camera slide and the strand rejoin.
- Scenes 6 to 10 (gene drive, crash, unknowns, three questions, memory) are unchanged. The audit did not flag them.
- Ready for Codex to re-render on the existing narration.
