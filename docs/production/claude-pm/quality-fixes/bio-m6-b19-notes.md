# bio-m6-b19 (genetic technology benefits): quality fix, 6 Nov 2026

Grade before: C (audit frames 2, 5, 6, 9, 10, 11, 12, 13, 14 and 15, plus the paragraph key notes). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m6-b19-sheet.jpg`. It holds 16 stills at the audit frames (450 to 13948, the same times as the audit sheet). I also checked stills at 1420, 1956, 2382, 4316, 5227, 5749, 8126, 9800, 10745, 12520 and 13440.

Narration, audio and measured timing are unchanged. Every animation uses the existing word cues in `docs/production/claude-pm/lessons/m6b19/measured/lesson.json`.

## Changes by scene

- **All case scenes (3 to 6).**
  - `ColumnCard2` replaces the old card. It is 680 px wide, with 50 px titles and 30 px row prompts (icon and question) that stay visible. The hand chips are 36 px (were 32 px in 600 px), with 17 px dots.
  - `MiniBoard2` has 22 px labels (were 17 px).
  - Each card now enters on "Better than what?" (or "Until 1985"), and each row fills when the narration answers it. Before, the medicine card sat empty for 33 s and the growth hormone card for 15 s.
- **2. Three tests (rebuilt).** The faint dashed empty columns are gone.
  - The definition is three large lines (66 px) with their icons.
  - The three questions arrive large in the centre on their cues. On "Try them on the embryo edit" they move left as row labels.
  - A wide 2018 card (1180 px, 38 px chips) enters, and the injected egg fills its body ("embryos edited to resist HIV; the father had HIV") until the first row lands. "CCR5" moved into the row-2 chip.
- **3. Farm.** The papaya fills the right third, beside three painted benefit tiles: harvests (maize rows), pest resistance (Bt cotton) and nutrition (the fruit). The papaya moves left as the card slides in.
  - The no-resistance trees are larger, with a 40 px line. Labels are 30 to 38 px.
  - Row 2 reads "harvest had halved; climbed back after 1998".
- **4. Medicine.** The pancreas (360 px) and vial (120 px) are larger, and the difference and trial labels are 34 to 40 px.
  - The trial bars stay, dimmed, until the supply line arrives, so the middle is never empty.
  - The source change is labelled ("abattoir pancreases", then "fermenters"). The access glyphs are larger.
- **5. Growth hormone.** The dashed "old source" circle (a text box in a diagram slot) is replaced:
  - three greyed hormone vials ("pituitary extract"), one ringed red on "fatal brain disease";
  - the bacterium replaces them on "made by bacteria".
  - "old source scarce and dangerous: benefit far bigger" lands at 40 px on "The old source".
- **6. Industry.** The bacterium and the fermenter fill the right third on "a microbe ... factory scale". The fermenter then moves to the middle as the card enters. Labels are 28 to 54 px.
- **7. Tank or field.** `MiniBoard2`. The tags are 26 to 30 px (were 22 to 26 px), and one overlapping tag was moved.
- **8. Ranking (rebuilt).** The board is full width: four 344 px columns from x 400, with 30 px hand cells (were 26 px in 270 px columns) and 32 to 40 px titles.
  - The row labels are compact, an icon over a 32 px question.
  - The empty growth hormone cell now reads "depends on cost", with no dashed box.
  - The bottom chips are 28 to 30 px.
- **10a. Exam question 1.** The first stem sentence lands with the card on "First." (the card sat nearly empty until the company sentence). The givens are drawn as read:
  - the washing machine and a microbe enzyme ("enzymes from GM microbes");
  - two thermometers, "enzyme: 20 °C" and "older: 40 to 60 °C";
  - an energy bar labelled "machine energy: most heats the water".
  - No verdict is drawn. The answer box is 1100 by 315.
- **10b. Feedback 1.** The rows are 1100 px wide. A right panel draws the reason: energy per wash as two bars, a hot wash against a 20 °C wash ("mostly heating"). The cold bar is ringed "only if people choose it".
- **10d. Feedback 2.** A right panel draws the argument:
  - vaccine vials A = B ("same protection");
  - "plasma from infected donors", crossed out;
  - yeast into the fermenter ("yeast in fermenters: at scale").
- **11. Decision rule.** All four cards wait at 35% from the start and light on their cues. They are larger, with icons at 1.4 times and 40 px text.
- **12. Key notes.** Nine one-line bullets at 33 px replace five paragraphs at 26 px. The content is the same, split up. The framed memory aid is unchanged.

Scenes 1, 9 (memory) and 10c are unchanged.

## Files touched

- `src/explainer/lessons/bio-m6-b19/s1.tsx`, `s2.tsx` and `s3.tsx`.
- New: `parts2.tsx` (`ColumnCard2`, `MiniBoard2`, `TestLabel2`, `Thermo`).
- `parts.tsx` and `assets.ts` are untouched. G02 imports b19 parts. No shared kit or legacy file was edited.
- The typecheck passes on the B19, B04 and G02 graphs.

## Render note

In the first stills pass, the maize and cotton tiles at frame 2250 drew only their top strip. A re-render of the same frame drew them whole. Plates in `<image>` are not preloaded, so a single still can capture a plate before it has decoded. Sequential full renders give the 12-frame fade-in time to load. Even so, check the farm tiles at about 0:72 in the re-render.

## Plates needed

None required. Optional upgrades:
- a growth hormone "old pituitary extract" vial (period glass), to replace the greyed modern vial;
- a nutrition-crop plate for the farm tile, which currently uses the papaya fruit.

## Still to check

- Judge at playback speed: the questions moving to row labels in scene 2, the papaya moving as the card slides in, and the board scaling in during the ranking.
- Ready for Codex to re-render on the existing narration.
