# bio-m7-b05 (how a plant defends itself): quality fix, 6 Nov 2026

Grade before: B (audit frames 6, 8, 10, 11, 13). Grade after (stills): B+.
Sheet after: `work/quality-audit/fixed/bio-m7-b05-sheet.jpg` (16 stills at the audit frames 439 to 13635). Extra checks: 4400, 4900, 6600, 6604, 6612, 8420, 9600, 11300.

Narration, audio and measured timing are unchanged. All new animation uses word cues in `docs/production/claude-pm/lessons/m7b05/measured/lesson.json`.

## Changes
- **Evidence opening (frame 6, blank).** The first 4.5 s ("So what happens in real banksias, and does timing matter?") had nothing on screen. Now:
  - the scarlet and old man banksia plates show large, with their labels;
  - a clock and "does timing matter?" land on "does timing matter";
  - each plate then slides and shrinks into its race row as the rows draw on.
  - The study and day tags are now 30 to 32 px.
- **Limits (frame 8, ghosted).**
  - The audit still fell in the 14-frame scene crossfade. That fade is in the shared `ExplainerVideo` shell, which I did not edit.
  - The limits scene itself greyed the evidence heavily (dim 0.8, day line at 45%). It now dims to 0.5 and 70%, so the rows stay readable from frame 4 on.
  - The limit tags are 30 px, and the myrtle rust tag is 28 px.
- **Firebreak line (frame 10, one banner).** While "The hypersensitive response is a firebreak" is spoken, the painted root-cell plate shows the infection site with its callose plug and walls.
  - The ring of dead cells is revealed around the site. A terracotta ring then pulses around the dead zone.
  - The tags read: "infected cells and their neighbours die", then "a dead ring walls the pathogen in" (on "Dead cells around"), then "nothing living to feed on" (green glow on the living cells) and "speed decides if the break holds".
- **Exam 1 (frame 11).**
  - The first stem sentence lands with the card. The stem, table and demand sit in a 1240 to 1260 px column.
  - The panel shows the root-tip plate ("inoculated roots"). Then come two root bars drawn to scale, 300 px for 50 mm: "X: callose by 6 h" darkens 8 mm, and "Y: callose at 48 h" darkens 45 mm. Nothing names the more resistant species.
- **Exam 2 (frame 13).** The panel shows:
  - a healthy leaf, with a small brown spot added on "site die" ("small brown spot");
  - the dead-ring crop of the root-cell plate ("cells at the site die");
  - a clock with "3 weeks: same size".
  - The claim box moved down to clear the five-line stem.
- **Key notes.** Eight one-line bullets at 32 px replace five paragraphs at 28 px. The memory aid is unchanged.

## Files
- `src/explainer/lessons/bio-m7-b05/s2.tsx` and `s3.tsx` were edited, along with `config.ts` (assets list extended).
- The new file `plates2.ts` holds the healthy leaf plate, reused from B03 with the same alpha box.
- `parts.tsx` and `assets.ts` are untouched, because B06 imports them.
- The typecheck passes on `out/explainer/tsconfig.m7b020305.json`.

## Notes
- No new plates are needed. A painted leaf with a hypersensitive necrotic fleck would be an optional upgrade for exam 2. It would replace the coded brown spot.
- Judge at playback speed: the banksias sliding into their rows, and the ring pulse in the memory scene.
- Ready to re-render.
